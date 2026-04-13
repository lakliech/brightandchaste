import { Hono } from 'hono'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'

type Bindings = { DB: D1Database }
const auth = new Hono<{ Bindings: Bindings }>()

// Simple SHA-256 hash using Web Crypto API
async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function generateToken(): string {
  const arr = new Uint8Array(32)
  crypto.getRandomValues(arr)
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('')
}

// POST /api/cms/login
auth.post('/login', async (c) => {
  const { username, password } = await c.req.json()
  if (!username || !password) return c.json({ error: 'Missing credentials' }, 400)

  const hash = await sha256(password)
  const admin = await c.env.DB.prepare(
    'SELECT id, username FROM admins WHERE username = ? AND password_hash = ?'
  ).bind(username, hash).first<{ id: number; username: string }>()

  if (!admin) return c.json({ error: 'Invalid username or password' }, 401)

  // Create session (expires in 8 hours)
  const token = generateToken()
  const expires = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()
  await c.env.DB.prepare(
    'INSERT INTO sessions (token, admin_id, expires_at) VALUES (?, ?, ?)'
  ).bind(token, admin.id, expires).run()

  setCookie(c, 'cms_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 8 * 60 * 60,
    path: '/'
  })

  return c.json({ success: true, username: admin.username })
})

// POST /api/cms/logout
auth.post('/logout', async (c) => {
  const token = getCookie(c, 'cms_token')
  if (token) {
    await c.env.DB.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run()
    deleteCookie(c, 'cms_token', { path: '/' })
  }
  return c.json({ success: true })
})

// GET /api/cms/me
auth.get('/me', async (c) => {
  const token = getCookie(c, 'cms_token')
  if (!token) return c.json({ authenticated: false }, 401)

  const session = await c.env.DB.prepare(
    'SELECT a.username FROM sessions s JOIN admins a ON s.admin_id = a.id WHERE s.token = ? AND s.expires_at > datetime("now")'
  ).bind(token).first<{ username: string }>()

  if (!session) return c.json({ authenticated: false }, 401)
  return c.json({ authenticated: true, username: session.username })
})

// POST /api/cms/change-password
auth.post('/change-password', async (c) => {
  const token = getCookie(c, 'cms_token')
  if (!token) return c.json({ error: 'Unauthorized' }, 401)

  const session = await c.env.DB.prepare(
    'SELECT admin_id FROM sessions WHERE token = ? AND expires_at > datetime("now")'
  ).bind(token).first<{ admin_id: number }>()
  if (!session) return c.json({ error: 'Unauthorized' }, 401)

  const { currentPassword, newPassword } = await c.req.json()
  const currentHash = await sha256(currentPassword)

  const admin = await c.env.DB.prepare(
    'SELECT id FROM admins WHERE id = ? AND password_hash = ?'
  ).bind(session.admin_id, currentHash).first()
  if (!admin) return c.json({ error: 'Current password is incorrect' }, 400)

  const newHash = await sha256(newPassword)
  await c.env.DB.prepare(
    'UPDATE admins SET password_hash = ? WHERE id = ?'
  ).bind(newHash, session.admin_id).run()

  return c.json({ success: true })
})

export { auth, sha256 }
export async function requireAuth(c: any): Promise<boolean> {
  const token = getCookie(c, 'cms_token')
  if (!token) return false
  const session = await c.env.DB.prepare(
    'SELECT id FROM sessions WHERE token = ? AND expires_at > datetime("now")'
  ).bind(token).first()
  return !!session
}

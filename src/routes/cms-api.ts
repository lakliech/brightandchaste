import { Hono } from 'hono'
import { requireAuth } from './auth'

type Bindings = { DB: D1Database }
const api = new Hono<{ Bindings: Bindings }>()

// ── Auth middleware for all CMS API routes ───────────────────────
api.use('*', async (c, next) => {
  const ok = await requireAuth(c)
  if (!ok) return c.json({ error: 'Unauthorized' }, 401)
  return next()
})

// ══════════════════════════════════════════════════════════════════
//  HERO
// ══════════════════════════════════════════════════════════════════
api.get('/hero', async (c) => {
  const row = await c.env.DB.prepare('SELECT * FROM hero WHERE id = 1').first()
  return c.json(row)
})
api.put('/hero', async (c) => {
  const d = await c.req.json()
  await c.env.DB.prepare(`
    UPDATE hero SET badge=?, heading=?, highlight=?, subheading=?,
    cta_primary=?, cta_secondary=?, updated_at=datetime('now') WHERE id=1
  `).bind(d.badge, d.heading, d.highlight, d.subheading, d.cta_primary, d.cta_secondary).run()
  return c.json({ success: true })
})

// ══════════════════════════════════════════════════════════════════
//  ABOUT
// ══════════════════════════════════════════════════════════════════
api.get('/about', async (c) => {
  const row = await c.env.DB.prepare('SELECT * FROM about WHERE id = 1').first()
  return c.json(row)
})
api.put('/about', async (c) => {
  const d = await c.req.json()
  await c.env.DB.prepare(`
    UPDATE about SET heading=?, body1=?, body2=?, mission=?, vision=?,
    updated_at=datetime('now') WHERE id=1
  `).bind(d.heading, d.body1, d.body2, d.mission, d.vision).run()
  return c.json({ success: true })
})

// ══════════════════════════════════════════════════════════════════
//  SERVICES
// ══════════════════════════════════════════════════════════════════
api.get('/services', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM services ORDER BY sort_order').all()
  return c.json(results)
})
api.post('/services', async (c) => {
  const d = await c.req.json()
  const r = await c.env.DB.prepare(`
    INSERT INTO services (title, description, icon, badge, bullet1, bullet2, bullet3, sort_order, active)
    VALUES (?,?,?,?,?,?,?,?,1)
  `).bind(d.title, d.description, d.icon, d.badge, d.bullet1, d.bullet2, d.bullet3, d.sort_order || 99).run()
  return c.json({ success: true, id: r.meta.last_row_id })
})
api.put('/services/:id', async (c) => {
  const id = c.req.param('id')
  const d = await c.req.json()
  await c.env.DB.prepare(`
    UPDATE services SET title=?, description=?, icon=?, badge=?, bullet1=?, bullet2=?, bullet3=?,
    sort_order=?, active=?, updated_at=datetime('now') WHERE id=?
  `).bind(d.title, d.description, d.icon, d.badge, d.bullet1, d.bullet2, d.bullet3, d.sort_order, d.active, id).run()
  return c.json({ success: true })
})
api.delete('/services/:id', async (c) => {
  await c.env.DB.prepare('DELETE FROM services WHERE id = ?').bind(c.req.param('id')).run()
  return c.json({ success: true })
})

// ══════════════════════════════════════════════════════════════════
//  PROJECTS
// ══════════════════════════════════════════════════════════════════
api.get('/projects', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM projects ORDER BY sort_order').all()
  return c.json(results)
})
api.post('/projects', async (c) => {
  const d = await c.req.json()
  const r = await c.env.DB.prepare(`
    INSERT INTO projects (title, description, client, location, duration, category, icon, image_url, sort_order, active)
    VALUES (?,?,?,?,?,?,?,?,?,1)
  `).bind(d.title, d.description, d.client, d.location, d.duration, d.category, d.icon, d.image_url, d.sort_order || 99).run()
  return c.json({ success: true, id: r.meta.last_row_id })
})
api.put('/projects/:id', async (c) => {
  const id = c.req.param('id')
  const d = await c.req.json()
  await c.env.DB.prepare(`
    UPDATE projects SET title=?, description=?, client=?, location=?, duration=?,
    category=?, icon=?, image_url=?, sort_order=?, active=?, updated_at=datetime('now') WHERE id=?
  `).bind(d.title, d.description, d.client, d.location, d.duration, d.category, d.icon, d.image_url, d.sort_order, d.active, id).run()
  return c.json({ success: true })
})
api.delete('/projects/:id', async (c) => {
  await c.env.DB.prepare('DELETE FROM projects WHERE id = ?').bind(c.req.param('id')).run()
  return c.json({ success: true })
})

// ══════════════════════════════════════════════════════════════════
//  CONTACT
// ══════════════════════════════════════════════════════════════════
api.get('/contact', async (c) => {
  const row = await c.env.DB.prepare('SELECT * FROM contact WHERE id = 1').first()
  return c.json(row)
})
api.put('/contact', async (c) => {
  const d = await c.req.json()
  await c.env.DB.prepare(`
    UPDATE contact SET phone=?, email=?, address=?, website=?,
    facebook=?, linkedin=?, twitter=?, whatsapp=?, updated_at=datetime('now') WHERE id=1
  `).bind(d.phone, d.email, d.address, d.website, d.facebook, d.linkedin, d.twitter, d.whatsapp).run()
  return c.json({ success: true })
})

// ══════════════════════════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════════════════════════
api.get('/settings', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM settings').all()
  const obj: Record<string, string> = {}
  for (const r of results as any[]) obj[r.key] = r.value
  return c.json(obj)
})
api.put('/settings', async (c) => {
  const d = await c.req.json()
  for (const [key, value] of Object.entries(d)) {
    await c.env.DB.prepare(
      'INSERT INTO settings (key, value, updated_at) VALUES (?, ?, datetime("now")) ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at'
    ).bind(key, value).run()
  }
  return c.json({ success: true })
})

export { api }

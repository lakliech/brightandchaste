import { Hono } from 'hono'

type Bindings = { DB: D1Database }
const pub = new Hono<{ Bindings: Bindings }>()

// Returns all site content in one request (used by frontend)
pub.get('/content', async (c) => {
  const [hero, about, contact, settings] = await Promise.all([
    c.env.DB.prepare('SELECT * FROM hero WHERE id = 1').first(),
    c.env.DB.prepare('SELECT * FROM about WHERE id = 1').first(),
    c.env.DB.prepare('SELECT * FROM contact WHERE id = 1').first(),
    c.env.DB.prepare('SELECT * FROM settings').all(),
  ])
  const { results: services } = await c.env.DB.prepare(
    'SELECT * FROM services WHERE active = 1 ORDER BY sort_order'
  ).all()
  const { results: projects } = await c.env.DB.prepare(
    'SELECT * FROM projects WHERE active = 1 ORDER BY sort_order'
  ).all()

  const settingsObj: Record<string, string> = {}
  for (const r of (settings.results as any[])) settingsObj[r.key] = r.value

  return c.json({ hero, about, contact, services, projects, settings: settingsObj })
})

export { pub }

# Bright and Chaste Limited — Website & CMS

## Project Overview
- **Company**: Bright and Chaste Limited
- **Industry**: Civil Engineering & Construction
- **Location**: Nairobi, Kenya
- **Founded**: 2019
- **Accreditation**: NCA Level 3

## Live URLs
- **Website**: https://brightandchaste.pages.dev (or custom domain)
- **CMS Admin**: https://brightandchaste.pages.dev/cms
- **GitHub**: https://github.com/lakliech/brightandchaste

## Features Implemented
- ✅ Full responsive website (Hero, About, Services, Projects, Contact, Footer)
- ✅ Onest font throughout, navy blue brand palette (#1a3072)
- ✅ Official Bright & Chaste logo in navbar and footer
- ✅ Dynamic content loaded from Cloudflare D1 database via CMS
- ✅ CMS Admin Panel at `/cms` with secure session-based login
- ✅ Manage: Hero section, About/Mission/Vision, Services, Projects, Contact Info, Settings
- ✅ Services & Projects rendered dynamically from DB
- ✅ Contact details (phone, email, address, social links) updated from CMS
- ✅ NCA Level 3 accreditation badge displayed throughout
- ✅ Mobile responsive with hamburger menu

## CMS Admin Panel (`/cms`)
- **URL**: `https://your-domain.com/cms`
- **Default login**: `admin` / `admin123` (**change this after first login!**)
- **Sections**:
  - Dashboard — overview of services & projects count
  - Hero Section — update homepage banner text and buttons
  - About Us — edit company description, mission, vision
  - Services — add/edit/delete/reorder services with icon, badge, bullets
  - Projects — add/edit/delete/reorder projects with image URL, client, location
  - Contact Info — phone, email, address, website, all social media links
  - Site Settings — company name, tagline, NCA level, founding year
  - Change Password — update the admin password

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/cms/login` | Login with username/password |
| POST | `/api/cms/logout` | Logout |
| GET | `/api/cms/me` | Check session |
| GET | `/api/public/content` | All public site content |
| GET/PUT | `/api/cms/hero` | Manage hero section |
| GET/PUT | `/api/cms/about` | Manage about section |
| GET/POST/PUT/DELETE | `/api/cms/services/:id` | Manage services |
| GET/POST/PUT/DELETE | `/api/cms/projects/:id` | Manage projects |
| GET/PUT | `/api/cms/contact` | Manage contact info |
| GET/PUT | `/api/cms/settings` | Manage site settings |

## Data Architecture
- **Database**: Cloudflare D1 (SQLite) — `brightandchaste-production`
- **Tables**: `admins`, `sessions`, `hero`, `about`, `services`, `projects`, `contact`, `settings`
- **Authentication**: Session tokens in HTTP-only cookies (8-hour expiry)
- **Passwords**: SHA-256 hashed

## Deployment — Cloudflare Pages
1. Build: `npm run build` → outputs to `dist/`
2. Deploy: `npx wrangler pages deploy dist --project-name brightandchaste`
3. Create D1 production DB: `npx wrangler d1 create brightandchaste-production`
4. Update `wrangler.jsonc` with real `database_id`
5. Apply migrations: `npx wrangler d1 migrations apply brightandchaste-production`

## Local Development
```bash
npm install
npx wrangler d1 migrations apply brightandchaste-production --local
npm run build
pm2 start ecosystem.config.cjs  # starts on port 3000 with D1 local binding
```

## Tech Stack
- **Backend**: Hono (TypeScript) on Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **Frontend**: Vanilla JS, Tailwind CSS (CDN), Font Awesome
- **Fonts**: Onest (Google Fonts)
- **Build**: Vite + @hono/vite-cloudflare-pages
- **Process Manager**: PM2 (local dev)

## Services Managed by CMS
1. Road Construction
2. Building Construction
3. Water Engineering
4. ICT Infrastructure Engineering

## Last Updated
April 2026

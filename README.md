# Bright and Chaste Limited — Corporate Website

## Project Overview
- **Company**: Bright and Chaste Limited
- **Type**: Civil Engineering & Construction Company
- **Founded**: 2019 | **Based**: Nairobi, Kenya
- **Accreditation**: NCA Level 3 (National Construction Authority)

## Features
- ✅ Responsive, mobile-first design
- ✅ Hero section with animated content
- ✅ About Us — mission, vision, values
- ✅ Services: Road Construction, Building Construction, Water Engineering, ICT Infrastructure
- ✅ Featured Projects showcase
- ✅ Why Choose Us section
- ✅ Contact form with validation
- ✅ Footer with social links
- ✅ Sticky navbar with scroll behaviour
- ✅ Back-to-top button
- ✅ Smooth scroll & fade-in animations

## Tech Stack
- **Framework**: Hono (TypeScript)
- **Runtime**: Cloudflare Pages / Workers
- **Build**: Vite + @hono/vite-build
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6

## Local Development
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
# Open http://localhost:3000
```

## Deployment (Cloudflare Pages)
```bash
npm run build
npx wrangler pages deploy dist --project-name bright-and-chaste
```

## Sections
| Section | Anchor | Description |
|---------|--------|-------------|
| Hero | `#home` | Full-screen hero with CTA |
| About | `#about` | Company background, M/V/V |
| Services | `#services` | 4 core service cards |
| Projects | `#projects` | Featured project gallery |
| Why Us | `#why-us` | Differentiators grid |
| Contact | `#contact` | Contact form + info |

## Contact Details (to update)
- **Phone**: +254 700 000 000 *(update with real number)*
- **Email**: info@brightandchaste.co.ke
- **Website**: https://brightandchaste.co.ke
- **Address**: Nairobi, Kenya *(update with full address)*

## Status
- **Build**: ✅ Passing
- **Dev Server**: Running on port 3000
- **Last Updated**: 2026-04-13

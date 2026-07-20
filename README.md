# Hunter Zhang — Agentic Automation

Marketing site for Hunter Zhang's consulting business: building agentic AI
automation for high-profile professionals and lean enterprises.

Built with **Next.js (App Router) + TypeScript**, deployed on **Vercel**.
Single page, fully static, self-contained animated hero (no external JS libs).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Where to edit

| What | File |
|------|------|
| Booking / email / LinkedIn links | `lib/site.ts` |
| All page copy & sections | `app/page.tsx` |
| Colors, type, spacing | `app/globals.css` (CSS variables at top) |
| Hero animation | `components/AgentField.tsx` |
| SEO / title / social | `app/layout.tsx` |
| Favicon | `app/icon.svg` |

### Placeholders to swap
- **LinkedIn URL** in `lib/site.ts` (currently a guess).
- Add more case studies by duplicating the `.case` block in `app/page.tsx`.

## Deploy

Connected to Vercel — every push to `main` deploys to production, every branch
gets a preview URL. Custom domain (`bookwithhunter.com`) configured in the
Vercel dashboard under Project → Settings → Domains.

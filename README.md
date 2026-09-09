# For A Child — Preschool & Daycare Website

Modern, accessible Next.js website for **For A Child, LLC** — daycare and licensed preschool in North Canton, Ohio.

Live content and branding are managed in `src/content/site.ts` and `src/app/globals.css`.  
**Do not invent school-specific details** — leave gaps as placeholders until real copy, photos, or assets are provided.

---

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Semantic HTML, SEO metadata, JSON-LD

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Where to edit content

| What | Where |
|------|--------|
| Copy, hours, contact, nav, testimonials, team | `src/content/site.ts` |
| Colors / pastel theme | `src/app/globals.css` (`--brand`, `--accent`, `--mint`, etc.) |
| Logo & favicon | `public/images/brand/` |

---

## Still needed (checklist)

Use this list as you gather materials from the center. Check items off as they are added to the site.

### Contact & location

- [x] **Email address** — `forachildkatie@yahoo.com`
- [x] **Google Maps embed** — in-page map preview on Contact (`siteConfig.contact.mapsEmbedUrl`)
- [ ] Confirm **ServUs Plaza / Servus Center** naming is exactly as they want it displayed

### Branding & design

- [ ] Confirm **final brand colors** (current pastel palette is temporary / inspired by the logo)
- [ ] Optional: **updated logo** export (transparent background preferred — current logo has a black background)
- [ ] **Open Graph / social share image** — replace `public/images/og-placeholder.svg` with a real 1200×630 image

### Photography

- [x] Hero image (storytime)
- [x] About / classroom photo
- [x] Learning philosophy photo (teachers with children)
- [x] Classroom activity photos (infant/toddler, learning, play)
- [x] Gallery set (6 real classroom photos)
- [ ] More gallery photos as available (outdoor play, playground, family events, art, music, etc.)
- [ ] Staff headshots (Cricket Scheurer, Katie Thomas)

### Safety & trust

- [x] **CPR / First Aid / Communicable Disease / Child Abuse** certifications
- [x] **Daily parent communication** (Daily Sheet, ClassDojo, call/text anytime)

### Team & about

- [ ] Longer **biography for Cricket Scheurer**
- [ ] Additional **biography details for Katie Thomas** (beyond title, tenure, degree)
- [ ] Any other staff profiles to feature

### Testimonials

- [ ] **Name** for the first unnamed testimonial (currently shown as “A For A Child family”)
- [ ] More testimonials if available

### Contact / enrollment (office page)

Enrollment and tours go through **Contact** (`/contact`) — Katie’s office. `/enrollment` redirects there.

- [ ] **Enrollment packet / downloadable forms** (PDF links), if they want them on the site
- [ ] Tuition / rates (only if they want this public)

### News / blog

- [ ] Decide whether to keep **News & Updates** (`/blog`) — page exists but is empty and not in the main nav
- [ ] First posts / classroom updates when ready

### Forms & backend

Contact uses a **mailto** link to Katie (`forachildkatie@yahoo.com`) — no form backend needed for email.

### Optional future features (not started)

These were scoped for later expansion — only build when requested:

- [ ] Parent portal
- [ ] Online enrollment / payments
- [ ] Event registration / calendar
- [ ] Tuition calculator
- [ ] Staff login / admin dashboard
- [ ] Classroom updates feed
- [ ] Multi-location support

### Intentionally removed / not included

- Newsletter signup — removed by request
- Social media links — removed by request
- Parent Resources page — removed by request
- Careers page — removed by request
- Footer organization charity/agency links — removed by request
- Programs page and program detail routes — removed by request
- Before & After School — removed by request
- FAQ page — removed by request
- Standalone Enrollment page — merged into Contact (Katie’s office)

---

## Notes for collaborators

1. Prefer updating `src/content/site.ts` over hard-coding copy in page components.
2. When adding photos, put files under `public/images/` and swap `PlaceholderImage` for `next/image`.
3. Keep accessibility in mind: alt text, heading order, and contrast on buttons/CTAs.
4. Domain in config is currently `https://forachildllc.com` — update if the production URL changes.

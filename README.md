# Joel Chandanshiv — Portfolio

A production-grade, animation-rich portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **React Three Fiber**, **GSAP**, and **Lenis**. Designed as a recruiter-facing site for DevOps, Cloud, AI/ML, and MLOps engineering roles.

## Tech stack

- **Framework** — Next.js 14 App Router + TypeScript (strict)
- **Styling** — Tailwind CSS + CSS variables (dark / light themes)
- **Animation** — Framer Motion, GSAP-ready, Lenis smooth scroll, `prefers-reduced-motion` honored
- **3D** — Three.js via `@react-three/fiber` + `@react-three/drei`
- **Icons** — Lucide React + simple-icons via `react-icons`
- **RSS** — `rss-parser` for Medium feed integration (server-rendered, 1h revalidation, graceful fallback)
- **Forms** — Formspree (env-driven endpoint) with mailto fallback
- **SEO** — App Router `metadata`, JSON-LD Person schema, dynamic OG image at the edge, sitemap.xml, robots.txt
- **Analytics** — `@vercel/analytics` (no-op if not deployed to Vercel)

## Getting started

```bash
git clone <repo-url>
cd joel-portfolio
npm install
cp .env.example .env.local   # fill in optional env vars
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server on `:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript compile check (no emit) |

### Environment variables

All variables are **optional** — the app degrades gracefully when they are missing.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for sitemap, OG, and JSON-LD. Defaults to `https://joelchandanshiv.vercel.app`. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Your Formspree form endpoint (e.g. `https://formspree.io/f/xxxxxxxx`). If unset, the contact form falls back to opening the user's email client. |

## Editing content

All content lives in typed TypeScript files under `/data/` — **no component edits required** to update the site.

| File | Purpose |
| --- | --- |
| `data/projects.ts` | All projects (title, tagline, description, tech, GitHub link, flagship / patent flags). Add to or reorder this array. |
| `data/skills.ts` | Skill pillars + marquee logos. |
| `data/experience.ts` | Roles for the timeline. |
| `data/achievements.ts` | Achievement cards + stat counters. |
| `data/certifications.ts` | Certifications. |
| `data/nav.ts` | Top-nav links. |
| `lib/site-config.ts` | Name, title, description, social links, Medium feed URL. |

### Swap the profile photo

Drop your portrait at `public/joel-portrait.png` (or `.jpg` / `.webp`), then change the `src` in `components/hero/portrait-frame.tsx` and `components/about/about.tsx` from `/joel-portrait.svg` to your file. The shipped SVG is a stylized silhouette placeholder.

### Update the resume PDF

Replace `public/resume.pdf` with your real CV. The shipped file is a 1-page placeholder. The Resume button downloads `/resume.pdf` directly.

### Theming

CSS variables live in `app/globals.css` under `:root` (light) and `.dark` (dark). Tailwind tokens reference these via `tailwind.config.ts`. The site defaults to dark mode; the in-page toggle persists choice to `localStorage`. A blocking inline script in `app/layout.tsx` prevents flash-of-wrong-theme on load.

## Deployment

### Primary: Vercel (free forever)

1. Push to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Vercel auto-detects Next.js — no configuration needed.
4. Set optional env vars in Project Settings.
5. Every push to `main` (or `master`) triggers a production deploy. PRs get preview deploys with SSL.

A `vercel.json` is included with security headers and a `Content-Disposition` rule for the resume download.

### Cloudflare Pages

1. Push to GitHub.
2. Create a new Pages project, connect the repo.
3. Build command: `npm run build` · Build output: `.next` · Framework preset: **Next.js**.
4. Add env vars in **Settings → Environment variables**.

### GitHub Pages (static export)

Some features (the edge OG image, RSS revalidation) are not compatible with a fully static export. If you need GH Pages anyway:

1. Add `output: 'export'` to `next.config.js` (already has `images.remotePatterns`; you'll also need `images.unoptimized: true`).
2. Move Medium RSS fetching client-side or pre-render at build time.
3. Push the included `.github/workflows/deploy.yml` (modify the final step to upload the `out/` folder to `gh-pages`).

The Vercel deploy is recommended.

## Performance & accessibility

- Lighthouse target: 95+ across Performance, Accessibility, Best Practices, SEO.
- `prefers-reduced-motion` disables Lenis, all keyframe animations, and Framer Motion transitions automatically (via global CSS).
- `next/font` self-hosts Inter, Space Grotesk, and JetBrains Mono with `display: swap`.
- 3D hero scene is `dynamic()`-imported with `ssr: false` and skipped on reduced-motion preference.
- All interactive elements are keyboard-navigable with visible focus rings.
- ARIA labels on every icon-only button.
- Semantic HTML throughout (`main`, `section`, `article`, `nav`, `footer`).
- Single `<h1>` per page.

## Project structure

```
.
├── app/
│   ├── layout.tsx               Root layout, fonts, JSON-LD, theme bootstrap
│   ├── page.tsx                 Home (composes all sections)
│   ├── globals.css              Design tokens + utilities
│   ├── icon.tsx                 Dynamic favicon (edge)
│   ├── opengraph-image.tsx      Branded 1200×630 OG image (edge)
│   ├── sitemap.ts / robots.ts   SEO endpoints
│   ├── not-found.tsx            Custom 404
│   └── projects/[slug]/page.tsx Case study route (SSG)
├── components/
│   ├── navigation/              Nav bar, theme toggle, mobile overlay
│   ├── hero/                    Hero, typewriter, portrait frame
│   ├── three/                   R3F hero scene
│   ├── terminal/                Interactive terminal section
│   ├── about/                   About + stat counters
│   ├── skills/                  Pillars + marquee
│   ├── infrastructure-flow/     Pipeline visualization
│   ├── projects/                Filters, flagship card, project grid
│   ├── timeline/                Experience timeline
│   ├── achievements/            Achievement grid
│   ├── insights/                Medium RSS cards (server component)
│   ├── certifications/          Cert cards
│   ├── contact/                 Form + section
│   ├── footer/                  Footer
│   ├── providers/               Theme + Lenis
│   └── ui/                      Primitives (Button, Card, Badge, TechTag, etc.)
├── data/                        All typed content (edit here, not in components)
├── lib/                         Utilities, site config, Medium RSS
└── public/                      Static assets (portrait SVG, resume PDF)
```

## License

Personal portfolio. Code structure and components are MIT-style reusable; content (copy, projects, achievements) is the property of Joel Chandanshiv.

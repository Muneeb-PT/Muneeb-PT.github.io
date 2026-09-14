# muneeb-pt.github.io

Personal portfolio for Mohammed Muneeb PT — B.Tech CSE student, KMEA Engineering College.

Built with React, TypeScript, Vite and Tailwind CSS. No CMS — every piece of content
lives in a plain data file, so updating the site is mostly editing arrays and objects,
not touching markup.

## Stack

| | |
|---|---|
| Framework | React 19 + React Router 7 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Build | Vite |
| Fonts | Self-hosted via Fontsource (no external font requests) |
| Icons | lucide-react + @icons-pack/react-simple-icons (brand logos) |
| Lint | oxlint |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
npm run lint        # oxlint
```

## Project structure

```
src/
  data/            ← EDIT HERE for content changes
    profile.ts       name, bio, contact, social links, terminal boot lines
    projects.ts       every project — featured flag controls the Home page grid
    stack.ts           tech stack, grouped
    journey.ts          experience/leadership timeline + certifications/achievements/education

  components/
    layout/           NavRail (commit-graph sidebar), Footer, ScrollProgress, AppShell
    ui/                 Primitives (Chip, Button, SectionHead...), ProjectCard, Terminal

  hooks/
    useReducedMotion.ts   respects prefers-reduced-motion
    usePageMeta.ts          sets document title/description per route
    useTerminalBoot.ts      the hero's typewriter effect
    useInjectStyle.ts        see "About the MSF/SKSSF pages" below

  pages/
    Home.tsx, Work.tsx, Journey.tsx, NotFound.tsx
    msf/MSF.tsx + msf.styles.ts
    skssf/SKSSF.tsx + skssf.styles.ts

public/
  404.html          GitHub Pages SPA fallback (see below)
  robots.txt, sitemap.xml, favicon.svg
```

### Making common changes

- **Add or edit a project** → `src/data/projects.ts`. Set `featured: true` to have it
  show on the homepage (first 3 featured projects are used there).
- **Update the bio, email, or social links** → `src/data/profile.ts`.
- **Add a timeline entry or certification** → `src/data/journey.ts`.
- **Change the accent color or fonts** → CSS variables at the top of `src/index.css`.

## About the MSF/SKSSF pages

These two are intentionally *not* styled like the rest of the site — they're their
own "sub-brand" pages (green/cream for MSF, green/gold serif for SKSSF), same as the
original static site. Rather than rewrite their CSS into Tailwind/CSS Modules, the
`useInjectStyle` hook mounts their original stylesheet as a real `<style>` tag for as
long as that page is open, and removes it when you navigate away — so nothing leaks
into the main portfolio pages. Both are lazy-loaded (`React.lazy`), so their CSS and
fonts (Playfair Display, DM Sans, Noto Sans Malayalam, Inter) only download if someone
actually visits `/msf` or `/skssf`.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the site
on every push to `main`. One-time setup after you push this to `Muneeb-PT.github.io`:

1. Repo **Settings → Pages → Build and deployment → Source** → select **GitHub Actions**.
2. Push to `main`. The action builds and publishes automatically — check the **Actions**
   tab for progress. First deploy usually takes 1–2 minutes.

No `gh-pages` branch, no manual `npm run build && git push` — just push source.

### Why there's a `public/404.html`

GitHub Pages only serves static files, so a direct visit or refresh on `/work` (a
route that only exists client-side) would normally 404. `404.html` stashes the
intended path and redirects to `/`; a small inline script in `index.html` restores it
via `history.replaceState` before React Router reads the URL. Net effect: deep links
and hard refreshes both work normally.

## SEO / being findable

A few things are wired in so the site (and you) show up coherently in search, not just
look good to a visitor:

- **`index.html`** has a `Person` JSON-LD block with a `sameAs` array pointing at your
  GitHub, LinkedIn, Instagram, Facebook and TinkerHub profiles. This is the actual
  mechanism search engines use to treat all of those as *the same entity* as this site
  — update this list any time a handle changes.
- Open Graph + Twitter card tags so shared links preview correctly.
- `sitemap.xml` and `robots.txt` in `public/`.
- **Update these before/after your first deploy:**
  - Swap `og:image` / the JSON-LD `image` for a real photo or banner if you'd rather
    not use the GitHub avatar URL.
  - Make sure every one of your social profiles' bio/website field links back to
    `https://muneeb-pt.github.io/` — the JSON-LD only helps if the link is mutual.

## License

Personal project — feel free to fork for structure/inspiration, but the content
(name, bio, projects, leadership history) is Mohammed Muneeb PT's own.

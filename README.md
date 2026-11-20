# Mohammed Muneeb PT — Personal Portfolio

Personal portfolio of **Mohammed Muneeb PT**, a B.Tech Computer Science and Engineering student at KMEA Engineering College, Kerala.

The site brings together selected projects, the technologies used in those projects, learning interests, education, and leadership experience. It is built with React and TypeScript, with content kept in small data files so updates do not require editing page layouts.

## Tech stack

| Area | Technology |
|---|---|
| UI | React 19 |
| Language | TypeScript (strict) |
| Routing | React Router 7 |
| Styling | Tailwind CSS v4 |
| Build tool | Vite |
| Fonts | Self-hosted with Fontsource |
| Icons | lucide-react and react-simple-icons |
| Linting | oxlint |
| Hosting | GitHub Pages with GitHub Actions |

## Run locally

**Requirements:** Node.js and npm.

```bash
git clone https://github.com/Muneeb-PT/Muneeb-PT.github.io.git
cd Muneeb-PT.github.io
npm install
npm run dev
```

The development server prints its local URL (normally `http://localhost:5173`).

Useful commands:

```bash
npm run build       # TypeScript project check and production build
npm run lint        # Run oxlint
npm run preview     # Preview the production build locally
```

## Project structure

```text
src/
  data/
    profile.ts      Personal profile, contact links and homepage content
    projects.ts     Project descriptions, tags and featured-project settings
    stack.ts        Technologies and learning areas
    journey.ts      Education, credentials and leadership timeline

  components/
    layout/         Navigation, footer and app layout
    ui/             Reusable interface components

  hooks/            Page metadata, reduced motion and terminal effects

  pages/
    Home.tsx
    Work.tsx
    Journey.tsx
    msf/             Dedicated MSF page and styles
    skssf/           Dedicated SKSSF page and styles

public/
  404.html           GitHub Pages client-side routing fallback
  robots.txt
  sitemap.xml
  favicon.svg
```

## Updating the content

Most routine content updates belong in `src/data/`:

- **Profile, email and social links:** `src/data/profile.ts`
- **Projects and featured cards:** `src/data/projects.ts`
- **Technology groups:** `src/data/stack.ts`
- **Education, credentials and leadership timeline:** `src/data/journey.ts`

The first three projects marked `featured: true` appear on the homepage. Keep project descriptions specific about what was built, what was done as a team, and which technologies were actually used. A technology appearing in a project stack should not automatically be read as professional-level proficiency.

## Design notes

The main portfolio uses a dark visual system with reusable React components and Tailwind CSS. The MSF and SKSSF pages intentionally retain their own visual identities. Their styles are mounted only while those routes are active, preventing their page-specific CSS from affecting the main portfolio. Both pages are lazy-loaded.

The site also respects the user's reduced-motion preference through a dedicated hook.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`.

For GitHub Pages deployment:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push to `main` and check the **Actions** tab for the deployment result.

The `public/404.html` fallback preserves client-side routes such as `/work` and `/journey` when visitors open or refresh those URLs directly.

## Search and link previews

The site includes page metadata, Open Graph and Twitter preview tags, a sitemap, a robots file, and Person structured data. The structured data lists public profiles in `sameAs` to help search engines associate those profiles with this portfolio; it does not guarantee enhanced search listings.

Before sharing the site widely, check that:
- The profile links are current and point to the intended public accounts.
- The social profiles link back to this portfolio where appropriate.
- The avatar used for link previews is the image you want displayed publicly.
- The sitemap reflects any future route changes.

## Project status

This is a personal portfolio and an evolving student project. Project status labels describe the state of each listed build; they are not claims of production readiness or commercial certification.

## License

The source structure may be useful as a reference, but personal content, project descriptions, and leadership history belong to the portfolio owner.
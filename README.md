# Mohammed Muneeb PT — Personal Portfolio

Personal portfolio of **Mohammed Muneeb PT**, a B.Tech Computer Science and Engineering student at KMEA Engineering College, Kerala.

The site brings together selected projects, technologies used, learning interests, education, and leadership experience. It is built with React and TypeScript, with content kept in small data files so routine updates do not require editing page layouts.

## Tech stack

| Area | Technology |
|---|---|
| UI | React 19 |
| Language | TypeScript |
| Routing | React Router 7 |
| Styling | Tailwind CSS v4 |
| Build tool | Vite |
| Fonts | Self-hosted with Fontsource |
| Icons | lucide-react and react-simple-icons |
| Linting | oxlint |
| Hosting | GitHub Pages with GitHub Actions |

## Run locally

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/Muneeb-PT/Muneeb-PT.github.io.git
cd Muneeb-PT.github.io
npm ci
npm run dev
```

Useful commands:

```bash
npm run lint        # Static lint checks
npm run build       # TypeScript project check and production build
npm run preview     # Preview the production build locally
```

## Project structure

```text
src/
  data/              Profile, projects, stack and journey content
  components/        Layout and reusable UI components
  hooks/             Metadata, reduced motion and terminal effects
  pages/             Home, work, journey and community pages
docs/
  case-studies/      Engineering case studies for selected projects
  ENGINEERING_STANDARDS.md
public/              Favicon, routing fallback, sitemap and robots file
```

## Selected engineering case studies

- [MediNexus — architecture, role-aware workflows, prioritisation and limitations](docs/case-studies/medinexus.md)
- [AutoDoc AI — conceptual architecture, evaluation plan and engineering risks](docs/case-studies/autodoc-ai.md)

The case studies distinguish implemented scope from conceptual architecture and future work. Team project technologies are not presented as proof of individual ownership.

## Updating portfolio content

Most routine content updates belong in `src/data/`:

- Profile, email and social links: `src/data/profile.ts`
- Projects and featured cards: `src/data/projects.ts`
- Technology groups: `src/data/stack.ts`
- Education, credentials and leadership timeline: `src/data/journey.ts`

Keep project descriptions specific about what was built, what was done as a team, and which technologies were actually used. A technology appearing in a project stack should not automatically be read as professional-level proficiency.

## Design and accessibility

The site uses a restrained dark/light theme, responsive layouts, keyboard-visible focus states and reduced-motion support. The MSF and SKSSF pages retain their own visual identities and are lazy-loaded.

## Deployment and CI

The workflow in `.github/workflows/deploy.yml` runs dependency installation, linting and a production build for pull requests and pushes to `main`. Only pushes to `main` deploy to GitHub Pages.

For GitHub Pages, set **Settings → Pages → Build and deployment → GitHub Actions**. The `public/404.html` fallback preserves client-side routes when visitors open or refresh them directly.

## Search and link previews

The site includes page metadata, Open Graph and Twitter preview tags, a sitemap, a robots file and Person structured data. Structured data helps search engines understand the page; it does not guarantee enhanced search listings.

Before sharing the site widely, verify profile links, social previews, canonical URLs and sitemap routes. SVG social previews are not supported consistently by every platform, so validate previews on the platforms where the portfolio will be shared.

## Quality and release validation

See [Engineering Standards](docs/ENGINEERING_STANDARDS.md) for measurable quality targets and a release checklist. Lighthouse, WCAG and link-check targets are goals until supported by saved audit reports; do not present target scores as measured results.

## Project status and evidence

This is a personal portfolio and an evolving student project. Status labels describe the state of each build; they are not claims of production readiness or commercial certification. Do not publish invented client testimonials, user counts, performance results, model accuracy or project impact. Record the method and environment for every metric.

A résumé download or live demo should be added only after the content, file and deployment have been verified by the owner.

## License

The source structure may be useful as a reference, but personal content, project descriptions and leadership history belong to the portfolio owner.

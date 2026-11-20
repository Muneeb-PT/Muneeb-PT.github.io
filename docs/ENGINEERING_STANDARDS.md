# Portfolio Engineering Standards

This document is the verification plan for the portfolio. It separates implemented checks from targets that still require a real browser or deployment audit.

## Current automated checks

- `npm ci` — reproducible dependency installation from the lockfile.
- `npm run lint` — static linting with oxlint.
- `npm run build` — TypeScript project build and Vite production build.
- GitHub Actions runs the checks on pull requests and deploys only from `main`.

## Quality targets

| Area | Target | Evidence required |
|---|---:|---|
| Lighthouse Performance | 90+ | Saved Lighthouse report on mobile and desktop |
| Lighthouse Accessibility | 95+ | Lighthouse report plus keyboard/screen-reader review |
| Lighthouse Best Practices | 95+ | Lighthouse report |
| Lighthouse SEO | 95+ | Lighthouse report plus Search Console checks |
| Accessibility | WCAG 2.2 AA target | Manual audit and automated axe scan |
| TypeScript | No type errors | `npm run build` |
| Lint | No lint errors | `npm run lint` |
| Responsive layout | No horizontal overflow or clipped controls | Test at narrow, medium and wide viewports |
| Links | No broken internal routes or important external links | Link check and manual review |
| Security | No secrets in repository or client bundle | Secret scan and production bundle review |

These are project goals, not measured scores or official Google hiring requirements.

## Release checklist

- [ ] Run `npm ci`, `npm run lint` and `npm run build` locally.
- [ ] Check all routes, including direct refresh on `/work`, `/journey`, `/msf` and `/skssf`.
- [ ] Test dark and light themes, mobile navigation, Escape-to-close and keyboard focus.
- [ ] Test reduced-motion preference and 200% zoom.
- [ ] Check text contrast and accessible names for icon-only controls.
- [ ] Run Lighthouse against the deployed site on mobile and desktop; retain the reports.
- [ ] Run an axe/WCAG audit and manually test keyboard navigation.
- [ ] Validate Open Graph/Twitter previews on target platforms.
- [ ] Confirm sitemap and canonical URLs match the live routes.
- [ ] Verify every project status, claim, link and technology with its source repository.
- [ ] Review the production bundle for secrets and unnecessary assets.

## Evidence policy

Never invent client testimonials, user counts, performance results, model accuracy, project impact or personal contribution. Mark team work as team work. Mark prototypes and academic projects accurately. Only publish a metric after recording how it was measured, when it was measured and what environment was used.

## Resume and live demos

A downloadable résumé should be generated from verified education, experience, skills and contact details and then reviewed by the owner. A live demo should be linked only when a stable, safe demo actually exists. Do not replace either with a fabricated file or placeholder link.

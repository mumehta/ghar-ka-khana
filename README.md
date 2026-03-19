# Ghar Ka Khana Frontend

Internal project documentation for the current frontend codebase.

This repository currently contains only the website frontend. It is meant for internal use and maintenance, not for client delivery.

## What this project is

This is a single-page React + Vite marketing website for `Ghar Ka Khana`, a local Indian home-style meals business around `Rouse Hill, NSW`.

Current business positioning reflected in the site:

- Indian home-style meals
- Local pickup and delivery
- Service area within `5 km` of Rouse Hill, NSW
- Minimum order `AUD 20`
- Free delivery on orders above `AUD 40`
- WhatsApp-led ordering flow

## Tech stack

- React
- Vite
- CSS in a single global stylesheet
- No backend
- No CMS

## Important files

```text
.
|-- public/
|-- src/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- Makefile
|-- package.json
`-- vite.config.js
```

## Where to edit what

Most business content lives in `src/App.jsx`.

Key content blocks in `src/App.jsx`:

- `primaryCtaLink`
  Main CTA target used across the page. Replace this when the final WhatsApp URL is available.

- `heroBenefits`
  Small highlight cards in the hero.

- `menuItems`
  Weekly menu cards and visible pricing.

- `orderingSteps`
  "How ordering works" section.

- `serviceCards`
  Delivery zone, minimum order, fees, and menu timing.

- `trustPoints`
  Trust and hygiene-style selling points.

- `choiceCards`
  Supporting "why customers choose us" cards.

- `foodImages`
  Gallery images, alt text, and captions.

- `faqs`
  FAQ section content.

Use `src/index.css` for layout, spacing, responsive behavior, and visual styling.

Use `index.html` for:

- page title
- meta description
- Open Graph and Twitter meta tags
- LocalBusiness structured data

## Run the project

Recommended:

```bash
make install
make start
```

The app runs on:

```bash
http://localhost:5173
```

`make start` checks whether port `5173` is already in use. If something is already running on that port, it stops that process and starts the app again on the same port.

Other useful commands:

```bash
make help
make stop
make build
make preview
make lint
make clean
```

If needed, npm scripts can also be used directly:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Current content status

The site has been updated to feel customer-facing rather than like a planning/demo draft.

Current live-content approach:

- clear hero messaging
- visible pricing
- weekly menu layout
- ordering steps
- delivery rules
- trust section
- food gallery
- FAQ
- strong final CTA
- sticky mobile CTA
- basic SEO metadata

## Still intentionally parked

These items are not fully production-ready yet:

- real WhatsApp destination
  Right now `primaryCtaLink` points to an on-page anchor. Replace it with the real WhatsApp link when available.

- real food photography
  The site currently uses stock images.

- real testimonials
  The "why customers choose us" section is positioned as marketing support, not as fake customer reviews.

- backend/order automation
  This repo is frontend only. There is no order management, payment flow, or admin panel.

## Safe update checklist

When making client-requested edits, usually update these in order:

1. `src/App.jsx` for text, pricing, menu, FAQs, delivery rules, and CTA links
2. `src/index.css` if the section layout or spacing needs adjustment
3. `index.html` if title, description, or SEO metadata changes
4. Run:

```bash
npm run lint
npm run build
```

## Suggested future improvements

When the project moves beyond the current frontend-only phase, likely next steps are:

- replace CTA anchor with final WhatsApp link
- replace stock photos with real kitchen and food photos
- add real testimonials
- split content into a config or JSON structure if updates become frequent
- add analytics
- add a backend or lightweight CMS if menu updates become regular

## Notes for handoff to self

- Keep scope tight. This is a one-page conversion-focused website, not a full ordering platform.
- Treat text edits as small revisions.
- Treat new sections, redesigns, integrations, or new flows as new scope.
- Always verify mobile layout after content changes.

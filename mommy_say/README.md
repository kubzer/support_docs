# Mommy Says: Toddler Sound Box — Marketing & Support Site

Static GitHub Pages site for **Mommy Says: Toddler Sound Box** (iOS + Android). It serves the three URLs
that App Store Connect and Google Play require:

| Page | File | Purpose |
|------|------|---------|
| Marketing | `index.html` | App landing page |
| Privacy Policy | `privacy.html` | Privacy policy |
| Support | `support.html` | FAQ + contact |

## Localized

The site is localized into **English, Turkish, German, French, Spanish** via a single shared layer:

- `styles.css` — shared styles (mirrors the app's cream/teal palette).
- `i18n.js` — one `{ lang: { key: text } }` dictionary. Markup opts in with `data-i18n="key"`, and
  `<body data-page="…">` selects the per-page `<title>` (`title_<page>`) and meta description
  (`meta_<page>`).
- Language resolution order: `?lang=` query param → `localStorage` → `navigator.languages` → English.
  The choice is persisted and there is a visible language switcher in the header.

Deep-link a language with `?lang=`, e.g. `privacy.html?lang=de`. The bare URL auto-detects.

## Deploying (GitHub Pages)

This repo is dedicated to the site, so files live at the **root**. Enable **Settings → Pages → Deploy from
a branch → `main` / `/ (root)`**. The `.nojekyll` file makes Pages serve the files as-is.

Published base URL: `https://kubzer.github.io/support_docs/`

## Contact

kubzer@gmail.com

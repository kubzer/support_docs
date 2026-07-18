# AlphaBug Trace — marketing, privacy & support site

Static GitHub Pages site for **AlphaBug Trace: Learn & Speak**. Served from the
repo **root** (Pages → Deploy from a branch → `main` / `/ (root)`).

## Pages

| File | Purpose | App Store Connect field |
| --- | --- | --- |
| `index.html` | Marketing landing page | Marketing URL |
| `privacy.html` | Privacy policy | Privacy Policy URL |
| `support.html` | Support / FAQ + contact | Support URL |

## Localization

The site ships in **English, Turkish, German, French, and Spanish** from one
shared layer:

- `styles.css` — shared styling.
- `i18n.js` — a single `{lang: {key: text}}` dictionary plus the render logic.
  Markup opts in with `data-i18n="key"`; `<body data-page="…">` selects each
  page's `<title>` and `<meta name="description">`.
- Language resolution order: `?lang=` query param → `localStorage` →
  `navigator.languages` → English fallback. The choice is persisted and a
  visible switcher (top-right) lets visitors change it. None of the locales are
  RTL.

Deep-link a language for App Store Connect's per-localization URL fields, e.g.
`privacy.html?lang=de`. The bare URL still works via auto-detect.

## Verify locally

Open any page in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/?lang=fr etc.
```

A key-coverage check (all `data-i18n` keys resolve in every locale) can be run
with the Python snippet used during authoring — every page's keys resolve in
all five locales.

## Contact

Support email: kubzer@gmail.com

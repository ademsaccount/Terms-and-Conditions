# Habichou – Terms and Conditions

A simple, static, responsive website that publicly displays the **Terms and Conditions** of the **Habichou** food delivery application.

**Live example:** `https://habichou-terms.vercel.app`

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript (only for TOC active-section highlighting)
- No backend, no database, no dependencies

## Project structure

```
├── index.html      # The Terms and Conditions page (all 20 sections)
├── styles.css      # Brand styling, responsive layout
├── script.js       # Table of contents scroll spy
├── vercel.json     # Vercel configuration
└── README.md
```

## Run locally

No build step required. Simply open `index.html` in your browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or serve it with any static server, for example:

```bash
# With Vercel CLI (recommended, matches production)
npx vercel dev

# Or with Python
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment -> https://<project>.vercel.app
```

### Option B — Git integration

1. Push this folder to a GitHub / GitLab / Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the framework as **Other** (static). Keep the defaults.
4. Click **Deploy**. No environment variables or build commands are needed.

The root URL `/` serves `index.html` automatically.

## Notes

- Cash-on-delivery only: the page states that Habichou currently accepts cash payments only, with no mention of card or online payments.
- Refunds: no in-app refund service, while mandatory consumer rights under Tunisian law are preserved.
- Contact: ademseddikadem@gmail.com

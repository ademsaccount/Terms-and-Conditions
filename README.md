# Habichou – Website (Terms, Privacy & Account Deletion)

A simple, static, responsive website for **Habichou**, the food delivery application
operating in Tunisia. It serves the public legal pages of the app.

**Live example:** `https://termsandconditions-alpha.vercel.app`

## Pages / routes

| Route | File | Content |
|---|---|---|
| `/` | `index.html` | Homepage: app description, Google Play link, footer links |
| `/privacy` | `privacy.html` | Privacy Policy |
| `/terms` | `terms.html` | Terms and Conditions (all 20 sections) |
| `/delete-account` | `delete-account.html` | How to request account & data deletion |

## Tech stack

- HTML5, CSS3, vanilla JavaScript (only for the Terms table-of-contents scroll spy)
- No backend, no database, no dependencies, no tracking scripts
- Responsive: desktop, tablet, mobile; smooth scrolling

## Project structure

```
├── index.html            # Homepage ("/")
├── privacy.html          # Privacy Policy ("/privacy")
├── terms.html            # Terms and Conditions ("/terms")
├── delete-account.html   # Account deletion ("/delete-account")
├── styles.css            # Brand styling (red #E00500, yellow #F9C111), responsive layout
├── script.js             # Terms page table-of-contents scroll spy
├── logo.png              # Habichou logo
├── vercel.json           # Vercel config (cleanUrls → /privacy, /terms, /delete-account)
└── README.md
```

## Run locally

```bash
# Any static server works, for example:
npx serve .
# then open http://localhost:3000

# Or with Python
python -m http.server 8000
# then open http://localhost:8000
```

Note: `vercel.json` enables `cleanUrls`, so on Vercel `/privacy` serves
`privacy.html`. Plain static servers may require the `.html` extension locally.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

### Option B — Git integration

1. Push this folder to a GitHub / GitLab / Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the defaults (static site, no build command, no environment variables).
4. Click **Deploy**.

## Notes

- Contact / privacy email: `ademseddikadem@gmail.com`
- Operator: Adem Seddik, Tunisia
- The homepage contains `<meta name="google-site-verification" content="__PLACEHOLDER__">`
  — replace `__PLACEHOLDER__` with the real Google Search Console value before deploying.
- Google Play link points to `com.adem1.habichou` (listing shows "coming soon" until published).

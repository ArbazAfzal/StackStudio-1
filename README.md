# Stack Studio

Premium dark agency website for a software/web development studio. Built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, Lenis, and React Hook Form.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Sheets contact form

1. Create a Google Sheet with columns: `Timestamp | Name | Email | Phone | Service | Budget | Message`
2. Open **Extensions → Apps Script** and deploy the `doPost` handler from the project brief
3. Deploy as Web App: Execute as **Me**, access **Anyone**
4. Copy the Web App URL into `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Logo assets

- `public/logo.png` — transparent background (navbar, footer, preloader, page transitions)
- `public/logo-light.jpg` — light background variant

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # production server
npm run lint     # ESLint
```

## Cloudflare deployment

The workflow in `.github/workflows/deploy-cloudflare.yml` builds this Next.js app with OpenNext and deploys it to Cloudflare Workers whenever changes are pushed to `main`.

Add these repository or `production` environment secrets in GitHub:

- `CLOUDFLARE_API_TOKEN` - an API token with Workers Scripts Edit permission
- `CLOUDFLARE_ACCOUNT_ID` - the Cloudflare account ID that owns the Worker

The contact form also needs its Google Sheets variables configured as Worker secrets or variables in Cloudflare:

```text
GOOGLE_SHEET_ID
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
```

Change the Worker name in `wrangler.jsonc` if `stack-studio` is already used in your Cloudflare account.

## Tech stack

- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scroll
- React Hook Form + Zod
- Google Apps Script (form → Sheets)

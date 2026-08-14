# MWAY Solutions

A professional B2B solutions website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. No e-commerce, no online checkout — all product and service inquiries are routed through a contact form via email.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 (CSS-first config — see `app/globals.css`)
- Resend for email (Vercel integration)
- Cloudflare Turnstile for spam protection
- React Hook Form + Zod for form validation

## Features

- Fully responsive design
- Bilingual: English & Georgian (i18n via cookie-based locale switching)
- Brand colors: Navy (#05101A) · Bronze (#6B563D) · Paper (#F9F8F6)
- Contact form at `/contact` for all inquiries
- Product/solutions pages with multilingual content
- SEO optimized: sitemap, robots.txt, structured data
- Terms of Service page (bilingual)

## Setup

```bash
pnpm install
cp .env.example .env.local
```

Fill in `.env.local`:
- `RESEND_API_KEY` — from Vercel's Production env (Resend integration)
  or copy locally: `vercel env pull .env.local`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — from
  Cloudflare Turnstile dashboard (site: mwaysolutions.net)

```bash
pnpm dev
```

Visit `http://localhost:3000/contact`, submit a test message, confirm delivery.

## Deploy

Push to GitHub → Vercel automatically deploys. Ensure environment variables are set in Vercel's Production dashboard (Resend + Turnstile).

## Project Structure

```
app/
  page.tsx                    homepage
  about/page.tsx              about page
  products/page.tsx           products & solutions catalog
  solutions/page.tsx          solutions detail page
  contact/page.tsx            contact form (EN/KA via cookie)
  terms/page.tsx              terms of service (EN/KA)
  api/contact/route.ts        form handler — validation, rate limit,
                               Turnstile, email
  globals.css                 Tailwind config (v4 CSS-first)
  layout.tsx                  root layout, metadata

components/
  ContactForm.tsx             contact form with validation
  FileUpload.tsx              file upload component
  LanguageSwitcher.tsx        language toggle
  Navbar.tsx                  navigation
  Footer.tsx                  footer

lib/
  i18n/
    dictionaries.ts           EN + KA content (all pages)
    config.ts                 locale detection
    server.ts                 server-side i18n helpers
  email.ts                    Resend email utilities
  email-templates.ts          notification & confirmation emails
  validation.ts               Zod schemas, file constraints
  rate-limit.ts               in-memory rate limiter
  turnstile.ts                Turnstile server-side verification
  nav.ts                      navigation helpers

data/
  categories.ts               product categories
  products.ts                 product catalog

public/
  favicon-kit/                favicons & branding assets
  robots.txt                  SEO
  sitemap.ts                  dynamic sitemap
```

## Key Changes (August 2026)

1. Unified CTA: All "Request a Solution" links → `/contact` ("Contact Us")
2. Bilingual content: Solutions and terms sections fully translated
3. Product inquiry links: `/products` → `/contact?subject=Product Inquiry`
4. Terms of Service: Now bilingual and dictionary-driven

## Environment Variables

```env
RESEND_API_KEY=<your-resend-api-key>
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<your-turnstile-key>
TURNSTILE_SECRET_KEY=<your-turnstile-secret>
NEXT_PUBLIC_SITE_URL=https://mwaysolutions.net
```

## Notes

- **Rate limiting**: In-memory; resets on cold start. Use `@upstash/ratelimit` + Redis for production scale.
- **File uploads**: Direct email attachment (10MB/file, 25MB total). Move to object storage if limits grow.
- **Locale switching**: Cookie-based (`mway_locale`). Fine for the current site structure.
- **Email routing**: `info@mwaysolutions.net` → configured via Cloudflare (outside this app).

## License

All rights reserved. © MWAY Solutions 2026

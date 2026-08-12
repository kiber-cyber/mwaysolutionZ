# MWAY Solutions

Next.js 16 (App Router, Turbopack) + Tailwind v4. B2B/institutional solutions
site — no cart, checkout, or online payment anywhere; every product/service
path ends in "Request Information" / "Request a Solution".

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 (CSS-first config — see `app/globals.css`, no `tailwind.config.js`)
- react-hook-form + zod for the request form
- Resend for outgoing email (already connected via the Vercel integration)
- Cloudflare Turnstile for spam protection

## Setup

```bash
pnpm install
cp .env.example .env.local
```

Fill in `.env.local`:
- `RESEND_API_KEY` — should already exist in Vercel's Production env vars
  from the Resend integration; copy the same value locally for dev, or run
  `vercel env pull .env.local` if you have the Vercel CLI linked to this project.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — from the
  Cloudflare dashboard (Turnstile → add site → mwaysolutions.net). Left
  blank, Turnstile verification is skipped in dev (logs a warning) — don't
  ship to production without these set.

```bash
pnpm dev
```

Visit `/request-solution`, submit a test request with a small PDF attached,
confirm both the internal notification and customer confirmation arrive.

## Deploy

Push to GitHub → import into Vercel → confirm env vars are set on the
Production environment (Resend + Turnstile) → deploy. Cloudflare stays
pointed at the domain per Vercel's standard custom-domain setup; email
routing (`info@mwaysolutions.net` → your Gmail mailbox) is unrelated to
this app and untouched by anything here.

## Structure

```
app/
  page.tsx                    homepage
  request-solution/page.tsx   request form page (EN/GE via cookie)
  api/request/route.ts        form handler — validation, rate limit,
                               Turnstile, attachments, email
components/
  RequestSolutionForm.tsx
  FileUpload.tsx
  LanguageSwitcher.tsx
lib/
  email.ts                    Resend send (only email provider used)
  email-templates.ts          internal notification + customer confirmation
  validation.ts                zod schema, file constraints
  rate-limit.ts                in-memory rate limiter (see note in file)
  turnstile.ts                 server-side Turnstile verification
  i18n/dictionaries.ts         EN + KA copy
  i18n/config.ts               cookie-based locale reader
```

## Known limitations

- **Rate limiting is in-memory** — works per-instance, resets on cold start,
  not shared across concurrent Vercel instances. Fine for launch; upgrade to
  `@upstash/ratelimit` + Redis if abuse becomes real.
- **Attachments are emailed directly**, not stored — 10MB/file, 25MB total
  cap (`lib/validation.ts`). Move to object storage + a link if that's ever
  too small for real submissions.
- **Georgian copy is a first draft** (`lib/i18n/dictionaries.ts`) — have a
  native speaker review before launch.
- **Locale switching uses a cookie**, not routed `/en` `/ka` URLs — fine for
  one form page; revisit with `next-intl` if the whole site needs indexable
  per-locale URLs.
- Government is intentionally **not** a dedicated page/nav item/section —
  it remains one option in the Organization Type dropdown on the request
  form only.

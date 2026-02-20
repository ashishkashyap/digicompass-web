# DigiCompass Web

Landing and waitlist for [DigiCompass](https://digicompass-web.vercel.app) — screen time guidance for families. Next.js 14 (App Router), TypeScript, Tailwind, Supabase.

## Local run

```bash
# Install dependencies
npm install

# Copy env example and add your values (see Env setup below)
cp .env.local.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Env setup

Create `.env.local` from the example (do not commit `.env.local`):

```bash
cp .env.local.example .env.local
```

Required for waitlist (Supabase):

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL (Project Settings → API) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (Project Settings → API). Server-only; never expose to the client. |

Optional:

- `NEXT_PUBLIC_APP_URL` — used if you need an absolute app URL (e.g. emails). Defaults work for local and Vercel.

## Supabase SQL setup

Run the DDL in the [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql) to create the **DigiCompass** schema and waitlist table. The full script is in `data/dataobjects.ddl`; minimal version:

```sql
CREATE SCHEMA IF NOT EXISTS "DigiCompass";

CREATE TABLE "DigiCompass".waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  child_age_range text,
  biggest_challenge text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX waitlist_signups_email_lower_key
  ON "DigiCompass".waitlist_signups (lower(email));

ALTER TABLE "DigiCompass".waitlist_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert"
  ON "DigiCompass".waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

The app uses the **DigiCompass** schema (not `public`) and the **service role** key in the API route to insert rows (bypasses RLS). The policy above is for future anon usage if needed.

## Deploy (Vercel)

1. Push the repo to GitHub (or connect another Git provider in Vercel).
2. In [Vercel](https://vercel.com): **Add New Project** → import this repo.
3. Set **Environment Variables** (Settings → Environment Variables):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   Apply to Production (and Preview if you want waitlist in preview deploys).
4. Deploy. Vercel will run `npm run build` and deploy.

**No secrets in repo:** `.env.local` and `.env*.local` are in `.gitignore`. Only set secrets in Vercel (or local `.env.local`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server (after `build`) |
| `npm run lint` | Run ESLint |

## Project layout

- `app/` — App Router pages and API routes
- `components/` — React components (sections, header, footer)
- `lib/` — Supabase server client, tracking helper
- `public/` — Static assets

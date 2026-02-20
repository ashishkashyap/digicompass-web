-- DigiCompass schema: waitlist and related tables
-- Run in Supabase SQL Editor. gen_random_uuid() is built-in in PostgreSQL 13+ (Supabase uses PG15).

CREATE SCHEMA IF NOT EXISTS "DigiCompass";

CREATE TABLE "DigiCompass".waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  child_age_range text,
  biggest_challenge text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Case-insensitive uniqueness on email
CREATE UNIQUE INDEX waitlist_signups_email_lower_key
  ON "DigiCompass".waitlist_signups (lower(email));

-- RLS
ALTER TABLE "DigiCompass".waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Anonymous can only insert (no select/update/delete)
CREATE POLICY "Allow anonymous insert"
  ON "DigiCompass".waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

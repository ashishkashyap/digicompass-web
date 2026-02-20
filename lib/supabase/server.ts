import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase client for server-side use (API routes, Server Components).
 * Uses the service role key — never import this file in client code.
 */
export function createSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || typeof url !== "string" || url.trim() === "") {
    throw new Error(
      "Missing SUPABASE_URL. Add it to .env.local (see .env.local.example)."
    );
  }
  if (!serviceRoleKey || typeof serviceRoleKey !== "string" || serviceRoleKey.trim() === "") {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY. Add it to .env.local (see .env.local.example)."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Environment variable validation.
 * Import this file early (e.g., in root layout) to fail fast
 * if critical env vars are missing.
 */

const requiredServerVars = [] as const;

const optionalServerVars = [
  'NEXTAUTH_SECRET',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
] as const;

function validateEnv() {
  const missing: string[] = [];

  for (const key of requiredServerVars) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n  ${missing.join('\n  ')}\n\nSee .env.local.example for required values.`
    );
  }

  // Warn about optional vars in development
  if (process.env.NODE_ENV === 'development') {
    for (const key of optionalServerVars) {
      if (!process.env[key]) {
        console.warn(`[env] Optional variable ${key} is not set — related features will be unavailable`);
      }
    }
  }
}

validateEnv();

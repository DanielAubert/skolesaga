import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { UserRole, SubscriptionTier } from "./types";

// Feide/Dataporten OIDC configuration
const FEIDE_ISSUER = "https://auth.dataporten.no";
const FEIDE_AUTHORIZATION_URL = "https://auth.dataporten.no/oauth/authorization";
const FEIDE_TOKEN_URL = "https://auth.dataporten.no/oauth/token";
const FEIDE_USERINFO_URL = "https://auth.dataporten.no/openid/userinfo";

// Create a fresh Supabase admin client each time to avoid session contamination
function getSupabaseAdmin(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    console.error("[Auth] Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
    throw new Error("Supabase configuration error");
  }
  if (!supabaseServiceKey) {
    console.error("[Auth] Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
    throw new Error("Supabase configuration error");
  }

  // Create fresh client to ensure service_role is used (not contaminated by auth session)
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Separate client for database operations to ensure service_role RLS bypass
function getSupabaseDb(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase configuration error");
  }

  // Create completely fresh client for DB operations
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    // Ensure we're not using any cached sessions
    global: {
      headers: {
        // Service role key in Authorization header bypasses RLS
        Authorization: `Bearer ${supabaseServiceKey}`,
      },
    },
  });
}

export const authOptions: NextAuthOptions = {
  providers: [
    // E-post/passord innlogging
    CredentialsProvider({
      id: "credentials",
      name: "E-post",
      credentials: {
        email: { label: "E-post", type: "email", placeholder: "din@epost.no" },
        password: { label: "Passord", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("E-post og passord er påkrevd");
        }

        const supabaseAdmin = getSupabaseAdmin();

        // Bruk Supabase Auth for å validere innlogging
        const { data, error } = await supabaseAdmin.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          throw new Error("Ugyldig e-post eller passord");
        }

        if (!data.user) {
          throw new Error("Ugyldig e-post eller passord");
        }

        // Use separate DB client to ensure service_role RLS bypass
        const supabaseDb = getSupabaseDb();

        // Hent brukerdata fra vår users-tabell
        const { data: userData, error: userError } = await supabaseDb
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .maybeSingle();

        if (userError) {
          console.error("[Auth] Error fetching user:", userError);
          throw new Error("Database error");
        }

        if (!userData) {
          // Opprett bruker hvis den ikke finnes
          const { data: newUser, error: createError } = await supabaseDb
            .from("users")
            .upsert({
              id: data.user.id,
              email: credentials.email,
              name: data.user.user_metadata?.name || credentials.email.split("@")[0],
              auth_provider: "email",
              role: "student",
              subscription_tier: "free",
            }, {
              onConflict: "email",
              ignoreDuplicates: false,
            })
            .select()
            .single();

          if (createError) {
            console.error("[Auth] Failed to create user:", createError);
            throw new Error("Kunne ikke opprette bruker");
          }

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            role: newUser.role as UserRole,
            subscriptionTier: newUser.subscription_tier as SubscriptionTier,
            schoolId: newUser.school_id,
            authProvider: "email",
          };
        }

        return {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          image: userData.avatar_url,
          role: userData.role as UserRole,
          subscriptionTier: userData.subscription_tier as SubscriptionTier,
          schoolId: userData.school_id,
          authProvider: "email",
        };
      },
    }),

    // Google OAuth
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
              params: {
                prompt: "select_account",
                access_type: "offline",
                response_type: "code",
              },
            },
          }),
        ]
      : []),

    // Feide OAuth (via Dataporten)
    ...(process.env.FEIDE_CLIENT_ID && process.env.FEIDE_CLIENT_SECRET
      ? [
          {
            id: "feide",
            name: "Feide",
            type: "oauth" as const,
            clientId: process.env.FEIDE_CLIENT_ID,
            clientSecret: process.env.FEIDE_CLIENT_SECRET,
            wellKnown: `${FEIDE_ISSUER}/.well-known/openid-configuration`,
            authorization: {
              url: FEIDE_AUTHORIZATION_URL,
              params: {
                // Dataminimering (GDPR art. 5(1)(c)): be kun om attributtene vi
                // faktisk bruker (id, navn, e-post, Feide-ID). 'groups'-scopet er
                // bevisst utelatt – klasse-/gruppetilhørighet bygges i appen, ikke
                // hentet fra Feide. Legg til igjen (og oppdater databehandleravtalen)
                // kun hvis en funksjon faktisk trenger gruppemedlemskap fra Feide.
                scope: "openid email profile userid-feide",
              },
            },
            token: FEIDE_TOKEN_URL,
            userinfo: FEIDE_USERINFO_URL,
            issuer: FEIDE_ISSUER,
            profile(profile: {
              sub: string;
              name?: string;
              email?: string;
              picture?: string;
              "https://n.feide.no/claims/userid_sec"?: string[];
              "https://n.feide.no/claims/eduPersonPrincipalName"?: string;
            }) {
              // Feide returnerer brukerdata i OIDC-format
              // userid_sec inneholder Feide-ID (f.eks. "feide:user@skole.no")
              const feideId = profile["https://n.feide.no/claims/userid_sec"]?.[0]
                || profile["https://n.feide.no/claims/eduPersonPrincipalName"]
                || profile.sub;

              return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                feideId: feideId,
                // Disse settes fra database i callbacks
                role: "student" as UserRole,
                subscriptionTier: "school" as SubscriptionTier,
              };
            },
          },
        ]
      : []),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "feide") {
        try {
          if (!user.email) {
            console.error("[Auth signIn] Ingen e-post fra provider:", account?.provider);
            return false;
          }

          const supabaseDb = getSupabaseDb();

          // Sjekk om bruker finnes - bruk limit(1) for å håndtere eventuelle duplikater
          const { data: users, error: lookupError } = await supabaseDb
            .from("users")
            .select("*")
            .eq("email", user.email)
            .order("created_at", { ascending: true })
            .limit(1);

          if (lookupError) {
            console.error("[Auth signIn] Feil ved oppslag av bruker:", lookupError);
            return false;
          }

          const existingUser = users?.[0];

          if (!existingUser) {
            // Opprett ny bruker
            const isFeide = account?.provider === "feide";
            const { error: insertError } = await supabaseDb.from("users").insert({
              email: user.email,
              name: user.name,
              avatar_url: user.image,
              auth_provider: account?.provider,
              role: "student",
              subscription_tier: isFeide ? "school" : "free",
              ...(isFeide && (user as { feideId?: string }).feideId && {
                feide_id: (user as { feideId?: string }).feideId,
              }),
            });

            if (insertError) {
              console.error("[Auth signIn] Feil ved opprettelse av bruker:", insertError);
              // Prøv upsert som fallback (e-posten kan allerede finnes pga. race condition)
              const { error: upsertError } = await supabaseDb
                .from("users")
                .upsert({
                  email: user.email,
                  name: user.name,
                  avatar_url: user.image,
                  auth_provider: account?.provider,
                  role: "student",
                  subscription_tier: isFeide ? "school" : "free",
                }, { onConflict: "email", ignoreDuplicates: true });

              if (upsertError) {
                console.error("[Auth signIn] Upsert feilet også:", upsertError);
                return false;
              }
            }
          } else if (account?.provider === "feide" && !existingUser.feide_id) {
            const feideId = (user as { feideId?: string }).feideId;
            if (feideId) {
              await supabaseDb
                .from("users")
                .update({ feide_id: feideId, auth_provider: "feide" })
                .eq("email", user.email);
            }
          }
        } catch (error) {
          console.error("[Auth signIn] Uventet feil:", error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, account: _account }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || "student";
        token.schoolId = user.schoolId;
        token.subscriptionTier = user.subscriptionTier || "free";
        token.onboardingCompleted = (user as { onboardingCompleted?: boolean }).onboardingCompleted ?? false;
      }

      // Oppdater token fra database ved behov (for OAuth-providers eller for å hente onboarding-status)
      if (token.email) {
        const supabaseDb = getSupabaseDb();
        const { data: userData, error: userLookupError } = await supabaseDb
          .from("users")
          .select("*")
          .eq("email", token.email)
          .maybeSingle();

        if (userLookupError) {
          // maybeSingle() feiler hvis det finnes duplikate e-poster - bruk limit(1) som fallback
          console.error("[Auth JWT] maybeSingle feilet for email:", token.email, userLookupError.message);
          const { data: fallbackUsers } = await supabaseDb
            .from("users")
            .select("*")
            .eq("email", token.email)
            .order("created_at", { ascending: true })
            .limit(1);

          const fallbackUser = fallbackUsers?.[0];
          if (fallbackUser) {
            token.id = fallbackUser.id;
            token.role = fallbackUser.role;
            token.schoolId = fallbackUser.school_id;
            token.subscriptionTier = fallbackUser.subscription_tier;
            token.onboardingCompleted = fallbackUser.onboarding_completed ?? false;
            token.gradeLevel = fallbackUser.grade_level ?? undefined;
          }
        } else if (userData) {
          token.id = userData.id;
          token.role = userData.role;
          token.schoolId = userData.school_id;
          token.subscriptionTier = userData.subscription_tier;
          token.onboardingCompleted = userData.onboarding_completed ?? false;
          token.gradeLevel = userData.grade_level ?? undefined;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.schoolId = token.schoolId;
        session.user.subscriptionTier = token.subscriptionTier;
        session.user.onboardingCompleted = token.onboardingCompleted;
        session.user.gradeLevel = token.gradeLevel;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/onboarding",
  },

  session: {
    strategy: "jwt",
    maxAge: 14 * 24 * 60 * 60, // 14 dager
  },

  secret: process.env.NEXTAUTH_SECRET || (() => {
    console.error("[Auth] Missing NEXTAUTH_SECRET environment variable");
    return undefined;
  })(),

  debug: process.env.NODE_ENV === "development",
};

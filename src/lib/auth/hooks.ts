"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import type { UserRole } from "./types";

export function useUser() {
  // Handle undefined return during static prerendering (when SessionProvider isn't available)
  const sessionResult = useSession();
  const session = sessionResult?.data;
  const status = sessionResult?.status ?? "loading";

  return {
    user: session?.user ?? null,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}

export function useRequireAuth(requiredRole?: UserRole) {
  const { user, isLoading, isAuthenticated } = useUser();
  const router = useRouter();

  if (!isLoading && !isAuthenticated) {
    router.push("/login");
  }

  // Allow admin to access both teacher and student pages
  const hasAccess = !requiredRole ||
    user?.role === requiredRole ||
    user?.role === "admin";

  if (!isLoading && isAuthenticated && !hasAccess) {
    router.push("/dashboard");
  }

  return { user, isLoading };
}

export function useAuth() {
  const { user, isLoading, isAuthenticated } = useUser();
  const router = useRouter();

  const login = useCallback(
    async (provider: "credentials" | "google" | "feide", credentials?: { email: string; password: string }) => {
      if (provider === "credentials" && credentials) {
        try {
          // Get CSRF token first
          const csrfRes = await fetch("/api/auth/csrf");
          if (!csrfRes.ok) {
            throw new Error(`CSRF-feil (${csrfRes.status})`);
          }
          const csrfData = await csrfRes.json();
          const csrfToken = csrfData?.csrfToken;
          if (!csrfToken) {
            throw new Error("Mangler CSRF-token");
          }

          // Direct POST to NextAuth credentials callback
          const res = await fetch("/api/auth/callback/credentials", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Auth-Return-Redirect": "1",
            },
            body: new URLSearchParams({
              email: credentials.email,
              password: credentials.password,
              csrfToken,
              callbackUrl: "/dashboard",
              json: "true",
            }),
          });

          // Check if response is JSON
          const contentType = res.headers.get("content-type") || "";
          if (!contentType.includes("application/json")) {
            const text = await res.text();
            throw new Error(`Server-feil (${res.status}): ${text.substring(0, 100)}`);
          }

          const data = await res.json();

          if (!res.ok) {
            throw new Error(`Innlogging feilet (${res.status}): ${JSON.stringify(data).substring(0, 100)}`);
          }

          if (data.url) {
            const url = new URL(data.url, window.location.origin);
            const error = url.searchParams.get("error");
            if (error) {
              throw new Error(error === "CredentialsSignin" ? "Ugyldig e-post eller passord" : `Auth-feil: ${error}`);
            }
          }

          // Redirect to dashboard
          window.location.href = data.url || "/dashboard";
        } catch (err) {
          throw err instanceof Error ? err : new Error("Ukjent feil ved innlogging");
        }
        return;
      }

      return signIn(provider, { callbackUrl: "/dashboard" });
    },
    [router]
  );

  const logout = useCallback(async () => {
    await signOut({ callbackUrl: "/" });
  }, []);

  const register = useCallback(
    async (email: string, password: string, name: string, role: UserRole = "student") => {
      // Registrer via API-rute
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, role }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registrering feilet");
      }

      // Logg inn automatisk etter registrering
      return login("credentials", { email, password });
    },
    [login]
  );

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    register,
  };
}

export function useIsTeacher() {
  const { user } = useUser();
  return user?.role === "teacher" || user?.role === "admin";
}

export function useIsStudent() {
  const { user } = useUser();
  return user?.role === "student";
}

export function useIsPremium() {
  const { user } = useUser();
  return user?.subscriptionTier === "premium" || user?.subscriptionTier === "school";
}

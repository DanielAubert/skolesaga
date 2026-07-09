"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/lib/auth/hooks";
import { Button } from "@/components/ui/button";
import { Mail, X } from "lucide-react";
import Link from "next/link";

const DISMISS_KEY = "skolesaga-consent-banner-dismissed";

/**
 * Engangs-spørsmål om e-postsamtykke for innloggede brukere som aldri
 * har tatt stilling (marketing_consent_source er null i databasen).
 * Å spørre i appen er lov — å spørre per e-post regnes som ulovlig
 * markedsføring (mfl. § 15).
 */
export function ConsentBanner() {
  const { user, isAuthenticated } = useUser();
  const [visible, setVisible] = useState(false);
  const [saving, setSaving] = useState(false);
  const [answered, setAnswered] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isAuthenticated || !user?.id) return;

    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // sessionStorage utilgjengelig – vis banneret likevel
    }

    let cancelled = false;
    fetch("/api/user/profile")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.marketingConsentAsked === false) {
          setVisible(true);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, user?.id]);

  const answer = async (consent: boolean) => {
    setSaving(true);
    try {
      const response = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marketingConsent: consent, source: "banner" }),
      });
      if (response.ok) {
        setAnswered(consent);
        setTimeout(() => setVisible(false), 4000);
      }
    } catch (error) {
      console.error("Failed to save consent:", error);
    } finally {
      setSaving(false);
    }
  };

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignorer
    }
  };

  if (!visible) return null;

  return (
    <div className="rounded-lg border bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 p-4 mb-6">
      {answered !== null ? (
        <p className="text-sm">
          {answered
            ? "Takk! Du er påmeldt. Du kan melde deg av når som helst på profilsiden."
            : "Den er grei — vi sender deg ikke nyhetsbrev. Du kan ombestemme deg på profilsiden."}
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-start gap-3 flex-1">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">
                Vil du motta e-post om nytt innhold og tilbud fra Skolesaga?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Du kan melde deg av når som helst. Se{" "}
                <Link href="/personvern" className="underline hover:text-foreground">
                  personvernerklæringen
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button size="sm" onClick={() => answer(true)} disabled={saving}>
              Ja takk
            </Button>
            <Button size="sm" variant="outline" onClick={() => answer(false)} disabled={saving}>
              Nei takk
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8"
              onClick={dismiss}
              disabled={saving}
              title="Spør meg senere"
              aria-label="Lukk og spør meg senere"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

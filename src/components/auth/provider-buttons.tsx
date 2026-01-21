"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth/hooks";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// SVG ikoner for providers
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#00A4EF" d="M1 13h10v10H1z" />
      <path fill="#7FBA00" d="M13 1h10v10H13z" />
      <path fill="#FFB900" d="M13 13h10v10H13z" />
    </svg>
  );
}

function FeideIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

interface ProviderButtonsProps {
  showGoogle?: boolean;
  showMicrosoft?: boolean;
  showFeide?: boolean;
}

export function ProviderButtons({
  showGoogle = true,
  showMicrosoft = true,
  showFeide = true,
}: ProviderButtonsProps) {
  const { login } = useAuth();
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleProviderLogin = async (provider: "google" | "microsoft" | "feide") => {
    setLoadingProvider(provider);
    try {
      await login(provider);
    } catch {
      // Feil håndteres av redirect
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="space-y-3">
      {showGoogle && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleProviderLogin("google")}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === "google" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <GoogleIcon />
          )}
          <span className="ml-2">Fortsett med Google</span>
        </Button>
      )}

      {showMicrosoft && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleProviderLogin("microsoft")}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === "microsoft" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <MicrosoftIcon />
          )}
          <span className="ml-2">Fortsett med Microsoft</span>
        </Button>
      )}

      {showFeide && (
        <Button
          variant="outline"
          className="w-full bg-[#00205B] hover:bg-[#001845] text-white border-[#00205B]"
          onClick={() => handleProviderLogin("feide")}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === "feide" ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FeideIcon />
          )}
          <span className="ml-2">Logg inn med Feide</span>
        </Button>
      )}
    </div>
  );
}

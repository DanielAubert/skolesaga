"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@/lib/auth/hooks";

interface TrackRecentVisitProps {
  itemType: "book" | "chapter";
  itemId: string;
  title: string;
  url: string;
}

/**
 * Usynlig komponent som registrerer besøket i «nylig sett»-listen
 * for innloggede brukere (vises som «Fortsett der du slapp» på dashbordet).
 * Gjør ingenting for anonyme brukere.
 */
export function TrackRecentVisit({ itemType, itemId, title, url }: TrackRecentVisitProps) {
  const { isAuthenticated } = useUser();
  const tracked = useRef(false);

  useEffect(() => {
    if (!isAuthenticated || tracked.current) return;
    tracked.current = true;

    fetch("/api/user/saved-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "recent", itemType, itemId, title, url }),
    }).catch(() => {
      // Sporing er ikke kritisk – ignorer feil
    });
  }, [isAuthenticated, itemType, itemId, title, url]);

  return null;
}

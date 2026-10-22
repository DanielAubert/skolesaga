"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Trafikklogg — klientdelen (kopi av eksamenssetts komponent, uten besøker-id: Skolesaga har ingen
 * samtykkeboks). Sender én liten beacon per ny sti til `/api/sidevisning`: stien, en tilfeldig økt-id i
 * sessionStorage (dør når fanen lukkes), vertsnavnet fra document.referrer og vindusbredden.
 * Ingen cookie, ingen IP, ingen fingeravtrykk.
 */

const OKT_NOKKEL = "ssv_okt";
const DEDUP_MS = 5000;

function hentOkt(): string | null {
  try {
    const lagret = sessionStorage.getItem(OKT_NOKKEL);
    if (lagret && /^[a-z0-9]{16}$/.test(lagret)) return lagret;

    const bytes = new Uint8Array(10);
    crypto.getRandomValues(bytes);
    const ny = Array.from(bytes)
      .map((b) => b.toString(36).padStart(2, "0"))
      .join("")
      .slice(0, 16);
    sessionStorage.setItem(OKT_NOKKEL, ny);
    return ny;
  } catch {
    // Privat nettlesing / blokkert lagring: da logger vi ikke.
    return null;
  }
}

function referrerHost(): string | null {
  try {
    const ref = document.referrer;
    if (!ref) return null;
    const host = new URL(ref).hostname.toLowerCase();
    if (!host || host === window.location.hostname) return null;
    return host.slice(0, 100);
  } catch {
    return null;
  }
}

export function Sidevisning() {
  const pathname = usePathname();
  const sist = useRef<{ sti: string; tid: number } | null>(null);

  useEffect(() => {
    if (!pathname) return;
    // Adressefeltets sti, ikke den omskrevne: nynorsk ligger på /nn/… og skrives om i middleware, og
    // prefikset er det serveren leser målformen fra.
    const sti = window.location.pathname || pathname;
    if (sti.startsWith("/dashboard/admin") || sti.startsWith("/api")) return;

    const naa = Date.now();
    if (sist.current && sist.current.sti === sti && naa - sist.current.tid < DEDUP_MS) return;
    sist.current = { sti, tid: naa };

    const okt = hentOkt();
    if (!okt) return;

    const kropp = JSON.stringify({
      sti: sti.slice(0, 200),
      kilde: referrerHost(),
      okt,
      w: window.innerWidth,
    });

    try {
      const blob = new Blob([kropp], { type: "application/json" });
      if (navigator.sendBeacon?.("/api/sidevisning", blob)) return;
    } catch {
      // faller gjennom til fetch
    }

    try {
      void fetch("/api/sidevisning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: kropp,
        keepalive: true,
      }).catch(() => {});
    } catch {
      // stille
    }
  }, [pathname]);

  return null;
}

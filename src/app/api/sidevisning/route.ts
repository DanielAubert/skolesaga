import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { createClient } from "@supabase/supabase-js";
import { getCourse } from "@/lib/data/textbook-courses";
import { brukerHash } from "@/lib/trafikk/pseudonym";

/**
 * Trafikklogg for Skolesaga: én liten insert i `skolesaga_sidevisninger` per ekte sidevisning
 * (migrasjon 115 i eksamenssett-repoet; Daniel 22.10.2026: «… se og få oversikt over trafikken og
 * hvilke bøker som benyttes»). Samme ramme som eksamenssetts /api/sidevisning:
 *   * ingen SELECT — bare én insert; sesjonen leses med `getToken` (ren JWT-dekoding), aldri
 *     getServerSession, så en sidevisning gir ingen spørring mot `users`
 *   * crawlere droppes før inserten; takrenne i minnet (1 per økt per 2 s, 600/min per instans)
 *   * alltid 200 uten body, aldri feil til klienten
 *   * ingen IP, ingen cookie: land fra `x-vercel-ip-country`, økt-id fra sessionStorage, og for
 *     innloggede bare `bruker_hash` (HMAC med samme nøkkel som eksamenssett)
 *
 * `SIDEVISNING_LOGG=0` gjør ruta til en no-op (lokal testing mot prod-databasen).
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OK_SVAR = () => new NextResponse(null, { status: 200 });

const BOT_RE =
  /bot|crawl|spider|slurp|facebookexternalhit|preview|lighthouse|headless|monitor|scrape|curl|wget|python-requests|axios|node-fetch/i;

const STI_RE = /^\/[A-Za-z0-9æøåÆØÅ\-._~%/]*$/;
const OKT_RE = /^[a-z0-9]{16}$/;
const HOST_RE = /^[a-z0-9.-]{1,100}$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const LAND_RE = /^[A-Z]{2}$/;

/** Sidetyper som finnes i CHECK-en i migrasjon 115. */
type Sidetype =
  | "forside"
  | "bok"
  | "kapittel"
  | "oppgave"
  | "quiz"
  | "trening"
  | "flashcards"
  | "eksamen"
  | "trinn"
  | "test"
  | "verktoy"
  | "konto"
  | "annet";

// ---------------------------------------------------------------------------
// Takrenne i minnet (per instans — ingen delt tilstand, ingen DB)
// ---------------------------------------------------------------------------
const OKT_VINDU_MS = 2000;
const MAKS_PER_MIN = 600;
const MAKS_OKTER_I_MINNET = 5000;

const sisteInsertPerOkt = new Map<string, number>();
let minuttBoks = 0;
let minuttTeller = 0;

function overTaket(okt: string): boolean {
  const naa = Date.now();
  const boks = Math.floor(naa / 60000);
  if (boks !== minuttBoks) {
    minuttBoks = boks;
    minuttTeller = 0;
  }
  if (minuttTeller >= MAKS_PER_MIN) return true;

  const sist = sisteInsertPerOkt.get(okt) ?? 0;
  if (naa - sist < OKT_VINDU_MS) return true;

  if (sisteInsertPerOkt.size > MAKS_OKTER_I_MINNET) {
    for (const [nokkel, tid] of sisteInsertPerOkt) {
      if (naa - tid > 60000) sisteInsertPerOkt.delete(nokkel);
    }
    if (sisteInsertPerOkt.size > MAKS_OKTER_I_MINNET) sisteInsertPerOkt.clear();
  }

  sisteInsertPerOkt.set(okt, naa);
  minuttTeller += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Sti → sidetype/bok/kapittel. Ren strengbehandling + oppslag i kurskatalogen (statisk data).
// ---------------------------------------------------------------------------
const TESTER = new Set([
  "iq-test", "eq-test", "personlighetstest", "personlighetstyper", "enneagram",
  "laeringsstil", "yrkesinteresser", "test-deg-selv", "test",
]);
const VERKTOY = new Set(["hoderegning", "poengkalkulator", "programmering", "geogebra", "quiz", "ressurser"]);
const KONTO = new Set(["login", "onboarding", "dashboard", "profil", "join", "endre-passord"]);
const KAPITTEL_UNDER: Record<string, Sidetype> = { oppgave: "oppgave", quiz: "quiz", trening: "trening" };
const BOK_UNDER: Record<string, Sidetype> = {
  eksamen: "eksamen",
  flashcards: "flashcards",
  kildegrunnlag: "bok",
  kompetansemal: "bok",
};

function utledSide(sti: string): { sidetype: Sidetype; bok: string | null; kapittel: string | null } {
  const deler = sti.split("/").filter(Boolean);
  if (deler.length === 0) return { sidetype: "forside", bok: null, kapittel: null };

  const forste = deler[0];
  if (forste === "trinn") return { sidetype: "trinn", bok: null, kapittel: null };
  if (TESTER.has(forste)) return { sidetype: "test", bok: null, kapittel: null };
  if (VERKTOY.has(forste)) return { sidetype: "verktoy", bok: null, kapittel: null };
  if (KONTO.has(forste)) return { sidetype: "konto", bok: null, kapittel: null };

  const kurs = getCourse(forste);
  if (!kurs) return { sidetype: "annet", bok: null, kapittel: null };
  const bok = kurs.id;
  const andre = deler[1];
  if (!andre) return { sidetype: "bok", bok, kapittel: null };
  if (BOK_UNDER[andre]) return { sidetype: BOK_UNDER[andre], bok, kapittel: null };

  const kapittel = kurs.chapters.some((k) => k.id === andre) ? andre : null;
  if (!kapittel) return { sidetype: "annet", bok, kapittel: null };
  const tredje = deler[2];
  return { sidetype: tredje ? (KAPITTEL_UNDER[tredje] ?? "kapittel") : "kapittel", bok, kapittel };
}

// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ua = request.headers.get("user-agent") ?? "";
    if (!ua || BOT_RE.test(ua)) return OK_SVAR();

    let kropp: unknown;
    try {
      kropp = await request.json();
    } catch {
      return OK_SVAR();
    }
    if (!kropp || typeof kropp !== "object") return OK_SVAR();
    const { sti, kilde, okt, w } = kropp as Record<string, unknown>;

    // --- sti (lesbar, uten query/hash; /nn-prefikset gir målformen) ---
    if (typeof sti !== "string" || sti.length === 0 || sti.length > 200) return OK_SVAR();
    let rensetSti = sti.split("?")[0].split("#")[0];
    try {
      rensetSti = decodeURIComponent(rensetSti);
    } catch {
      return OK_SVAR();
    }
    if (rensetSti.length > 1 && rensetSti.endsWith("/")) rensetSti = rensetSti.slice(0, -1);
    if (!STI_RE.test(rensetSti) || rensetSti.length > 200) return OK_SVAR();
    if (rensetSti.startsWith("/api") || rensetSti.startsWith("/dashboard/admin")) return OK_SVAR();

    const nynorsk = rensetSti === "/nn" || rensetSti.startsWith("/nn/");
    const innholdsSti = nynorsk ? rensetSti.slice(3) || "/" : rensetSti;

    // --- økt ---
    if (typeof okt !== "string" || !OKT_RE.test(okt)) return OK_SVAR();

    // --- enhet ---
    const bredde = typeof w === "number" && Number.isFinite(w) ? w : 0;
    if (bredde < 200 || bredde > 10000) return OK_SVAR();
    const enhet = bredde < 768 ? "mobil" : "desktop";

    // --- kilde (referrer-host, aldri full URL) ---
    let kildeHost: string | null = null;
    if (typeof kilde === "string" && kilde.length > 0 && kilde.length <= 100) {
      const k = kilde.toLowerCase();
      const egenHost = (request.headers.get("host") ?? "").toLowerCase().split(":")[0];
      if (HOST_RE.test(k) && k !== egenHost) kildeHost = k;
    }

    const landHode = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
    const land = LAND_RE.test(landHode) ? landHode : null;

    const { sidetype, bok, kapittel } = utledSide(innholdsSti);

    if (overTaket(okt)) return OK_SVAR();

    if (process.env.SIDEVISNING_LOGG === "0") {
      console.log(`[sidevisning] no-op (SIDEVISNING_LOGG=0): ${sidetype} ${bok ?? "–"} ${rensetSti} ${enhet}`);
      return OK_SVAR();
    }

    // Sesjon: ren JWT-dekoding, ingen databasetreff.
    let brukerId: string | null = null;
    try {
      const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
      const id = typeof token?.id === "string" ? token.id : null;
      if (id && UUID_RE.test(id)) brukerId = id;
    } catch {
      brukerId = null;
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } }
    );
    const { error } = await supabase.from("skolesaga_sidevisninger").insert({
      sti: rensetSti,
      sidetype,
      bok,
      kapittel,
      malform: nynorsk ? "nn" : "nb",
      kilde_host: kildeHost,
      enhet,
      land,
      innlogget: brukerId !== null,
      bruker_hash: brukerId ? brukerHash(brukerId) : null,
      okt,
    });
    // Typisk før migrasjon 115 er kjørt. Logg, men aldri feil til klienten.
    if (error) console.error("[sidevisning] insert feilet:", error.message);

    return OK_SVAR();
  } catch (err) {
    console.error("[sidevisning] uventet feil:", err);
    return OK_SVAR();
  }
}

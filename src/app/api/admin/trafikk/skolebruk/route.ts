import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/lib/auth/config";
import { MIN_OKTER, VINDU_MIN, skoleVertMonster } from "@/lib/trafikk/skolebruk";
import { skolebrukFraSql } from "@/lib/trafikk/skolebruk-titler";

/**
 * Skolebruk-panelet på /dashboard/admin/trafikk (Daniel 23.11.2026, «Kjør på med 1,2»): økter fra skoleplattformer og
 * klasseøkter per bok og kapittel, uke for uke. Én rpc til skolesaga_skolebruk(...) (migrasjon 126 i eksamenssett-repoet),
 * som bare sender kompakte økter uten økt-id og bruker_hash; resten regnes i src/lib/trafikk/skolebruk.ts.
 * Til klienten går bare tall, tider, stier og titler.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Samme perioder som ../route.ts (oversikten), så periodevelgeren gjelder begge. */
const DAGER = { dag: 1, uke: 7, maned: 30, "3mnd": 91 } as const;
type Periode = keyof typeof DAGER;

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
  if (session.user.role !== "admin") return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const periode = (searchParams.get("periode") ?? "uke") as Periode;
  if (!(periode in DAGER)) return NextResponse.json({ message: "Ugyldig periode" }, { status: 400 });
  const land = searchParams.get("land") === "alle" ? null : "NO";

  const til = new Date();
  const fra = new Date(til.getTime() - DAGER[periode] * 86_400_000);

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const t0 = Date.now();
  const { data, error } = await supabase.rpc("skolesaga_skolebruk", {
    fra: fra.toISOString(),
    til: til.toISOString(),
    land_filter: land,
    skole_monster: skoleVertMonster(),
    min_okter: MIN_OKTER,
    vindu_min: VINDU_MIN,
  });
  const ms = Date.now() - t0;

  if (error) {
    const tekst = `${error.code ?? ""} ${error.message ?? ""}`;
    console.error("[admin/trafikk/skolebruk] skolesaga_skolebruk:", tekst);
    if (/PGRST202|Could not find the function|skolesaga_skolebruk.*does not exist/i.test(tekst)) {
      return NextResponse.json({ periode, land, mangler: "Migrasjon 126 er ikke kjørt" });
    }
    return NextResponse.json({ message: `Databasen svarte med feil: ${error.message}` }, { status: 500 });
  }

  return NextResponse.json({
    periode,
    land,
    fra: fra.toISOString(),
    til: til.toISOString(),
    ms,
    ...skolebrukFraSql(data),
  });
}

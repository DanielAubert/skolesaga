import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/lib/auth/config";
import { getCourse } from "@/lib/data/textbook-courses";

/**
 * Trafikkoversikt for adminsiden /dashboard/admin/trafikk (Daniel 22.10.2026). Leser bare aggregater fra
 * skolesaga_trafikk(...) og skolesaga_aktivitet(...) (migrasjon 115) — aldri rå rader — og legger på
 * bok- og kapitteltitler fra kurskatalogen.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PERIODER = {
  dag: { dager: 1, bucket: "time" },
  uke: { dager: 7, bucket: "dag" },
  maned: { dager: 30, bucket: "dag" },
  "3mnd": { dager: 91, bucket: "uke" },
} as const;
type Periode = keyof typeof PERIODER;

type BokRad = { bok: string; [k: string]: unknown };
type KapittelRad = { bok: string; kapittel: string; [k: string]: unknown };

function bokTittel(id: string): string {
  return getCourse(id)?.title ?? id;
}

function kapittelTittel(bok: string, kapittel: string): string {
  const k = getCourse(bok)?.chapters.find((c) => c.id === kapittel);
  if (!k) return kapittel;
  const nr = (k as { number?: string | number }).number;
  return nr != null && nr !== "" ? `${nr} ${k.title}` : k.title;
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
  if (session.user.role !== "admin") return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const periode = (searchParams.get("periode") ?? "uke") as Periode;
  if (!(periode in PERIODER)) return NextResponse.json({ message: "Ugyldig periode" }, { status: 400 });
  const landValg = searchParams.get("land") === "alle" ? null : "NO";

  const { dager, bucket } = PERIODER[periode];
  const til = new Date();
  const fra = new Date(til.getTime() - dager * 86_400_000);
  const forrigeFra = new Date(fra.getTime() - dager * 86_400_000);

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const [trafikk, aktivitet] = await Promise.all([
    supabase.rpc("skolesaga_trafikk", {
      fra: fra.toISOString(),
      til: til.toISOString(),
      forrige_fra: forrigeFra.toISOString(),
      bucket,
      land_filter: landValg,
    }),
    supabase.rpc("skolesaga_aktivitet", { fra: fra.toISOString(), til: til.toISOString() }),
  ]);

  if (trafikk.error) {
    const mangler = /skolesaga_trafikk|does not exist|PGRST202/i.test(`${trafikk.error.code} ${trafikk.error.message}`);
    console.error("[admin/trafikk] skolesaga_trafikk:", trafikk.error.message);
    return NextResponse.json(
      { mangler: mangler ? "Migrasjon 115 er ikke kjørt ennå" : "Kunne ikke hente trafikken" },
      { status: mangler ? 200 : 500 }
    );
  }

  const data = trafikk.data as Record<string, unknown>;
  const perBok = ((data.per_bok as BokRad[]) ?? []).map((r) => ({ ...r, tittel: bokTittel(r.bok) }));
  const perKapittel = ((data.per_kapittel as KapittelRad[]) ?? []).map((r) => ({
    ...r,
    bokTittel: bokTittel(r.bok),
    tittel: kapittelTittel(r.bok, r.kapittel),
  }));
  const aktivitetRader = aktivitet.error
    ? []
    : ((aktivitet.data as BokRad[]) ?? []).map((r) => ({ ...r, tittel: bokTittel(r.bok) }));

  return NextResponse.json({
    periode,
    bucket,
    land: landValg,
    fra: fra.toISOString(),
    til: til.toISOString(),
    ...data,
    per_bok: perBok,
    per_kapittel: perKapittel,
    aktivitet: aktivitetRader,
  });
}

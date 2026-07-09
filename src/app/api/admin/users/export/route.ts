import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
}

function csvEscape(value: string | null | undefined): string {
  const s = value ?? "";
  if (/[",\n;]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

// GET - Eksporter e-postliste som CSV (kun admin)
// ?list=marketing → kun brukere med markedsføringssamtykke (nyhetsbrev/reklame)
// ?list=all → alle brukere (vilkårsoppdateringer og andre nødvendige meldinger)
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Ikke innlogget" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ message: "Kun admin har tilgang" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const list = searchParams.get("list") || "marketing";

    if (!["marketing", "all"].includes(list)) {
      return NextResponse.json({ message: "Ugyldig liste" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // Hent alle rader i bolker (Supabase returnerer maks 1000 per kall)
    const rows: { name: string | null; email: string; marketing_consent: boolean; marketing_consent_at: string | null }[] = [];
    const pageSize = 1000;
    for (let offset = 0; ; offset += pageSize) {
      let query = supabase
        .from("users")
        .select("name, email, marketing_consent, marketing_consent_at")
        .order("created_at", { ascending: true })
        .range(offset, offset + pageSize - 1);

      if (list === "marketing") {
        query = query.eq("marketing_consent", true);
      }

      const { data, error } = await query;

      if (error) {
        console.error("[Admin] Feil ved eksport av brukere:", error);
        return NextResponse.json({ message: "Kunne ikke eksportere" }, { status: 500 });
      }

      rows.push(...(data || []));
      if (!data || data.length < pageSize) break;
    }

    const header = "navn,epost,samtykke_markedsforing,samtykke_dato";
    const lines = rows.map((r) =>
      [
        csvEscape(r.name),
        csvEscape(r.email),
        r.marketing_consent ? "ja" : "nei",
        r.marketing_consent_at ? new Date(r.marketing_consent_at).toISOString() : "",
      ].join(",")
    );
    // BOM slik at Excel åpner fila med riktig tegnsett (æøå)
    const csv = "\uFEFF" + [header, ...lines].join("\n");

    const filename = list === "marketing" ? "epostliste-markedsforing.csv" : "epostliste-alle-brukere.csv";

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[Admin] Feil:", error);
    return NextResponse.json({ message: "En feil oppstod" }, { status: 500 });
  }
}

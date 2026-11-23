import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { notFound } from "next/navigation";
import { SkolebrukVisning, type SkolebrukSvar } from "@/components/admin/skolebruk-panel";
import { skolebrukFraSql } from "@/lib/trafikk/skolebruk-titler";

/**
 * Forhåndsvisning av Skolebruk-panelet med TESTDATA — bare i utvikling (`next dev`) eller når serveren er startet med
 * SKOLESAGA_FORHANDSVISNING=1 (brukt til skjermbilder med `next start` på noden: `next dev` kompilerer hele
 * kurskatalogen og sprengte minnetaket på 6 GB). Ellers 404 — variabelen er ikke satt på Vercel.
 * Adminsiden krever innlogging og ekte data, som kopien på noden ikke har.
 * Data: SQL-svaret fra skolesaga_skolebruk (migrasjon 126) kjørt i PGlite på den anonymiserte fiksturen
 * (land NO, 22.10–23.11.2026). ?tilstand=mangler | feil | laster viser de andre tilstandene.
 */

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

export default async function SkolebrukForhandsvisning({ searchParams }: { searchParams: Promise<{ tilstand?: string }> }) {
  if (process.env.NODE_ENV !== "development" && process.env.SKOLESAGA_FORHANDSVISNING !== "1") notFound();
  const { tilstand } = await searchParams;

  let svar: SkolebrukSvar | null = null;
  let feil: string | null = null;
  if (tilstand === "mangler") svar = { mangler: "Migrasjon 126 er ikke kjørt" };
  else if (tilstand === "feil") feil = "Databasen svarte med feil: canceling statement due to statement timeout";
  else if (tilstand !== "laster") {
    const fil = path.join(process.cwd(), "src/lib/trafikk/__tests__/eksempel-sql-svar-no-2210-2311.json.gz");
    const data = JSON.parse(zlib.gunzipSync(fs.readFileSync(fil)).toString());
    svar = { periode: "maned", land: "NO", ms: 0, ...skolebrukFraSql(data) };
  }

  return (
    <main className="container mx-auto space-y-4 px-4 py-8">
      <h1 className="text-2xl font-bold">Skolebruk (testdata)</h1>
      <p className="text-sm text-muted-foreground">
        Forhåndsvisning i utvikling: anonymisert datasett, land NO, 22.10–23.11.2026.
      </p>
      <SkolebrukVisning svar={svar} feil={feil} laster={tilstand === "laster"} />
    </main>
  );
}

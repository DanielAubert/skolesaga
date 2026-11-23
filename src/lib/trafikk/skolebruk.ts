/**
 * Skolebruk i trafikkloggen (Daniel 23.11.2026: «Kjør på med 1,2» — punkt 2: «Lag et "Skolebruk"-panel i admin.
 * Det bør vise økter fra skoleplattformer og klasseøkter per bok og kapittel, uke for uke.»).
 *
 * Arbeidsdeling: SQL-funksjonen skolesaga_skolebruk(...) (migrasjon 126 i eksamenssett-repoet) slår sammen
 * sidevisningene til én kompakt rad per økt — uten økt-id og uten bruker_hash — og sender bare øktene som kan
 * telle (fra skoleplattform, eller med minst MIN_OKTER økter på samme landingsside innen ±VINDU_MIN minutter).
 * Alt annet (klassifisering, klasseøkter, uker, plattformer) skjer her, i ren TypeScript uten avhengigheter,
 * så det kan testes med `node --test` (src/lib/trafikk/__tests__/).
 *
 * Fila bruker bare TypeScript-syntaks som kan strippes (ingen enum/namespace), slik at Node kan laste den direkte.
 */

/* ------------------------------------------------------------------------------------------------------------
 * SKOLEPLATTFORMER — eneste hjem for lista. En vert teller når den ER en av vertene under eller slutter på
 * «.<vert>» (alle underdomener). Ny plattform: legg til en linje her (og et eksempel i testen). SQL-en får lista
 * som regulært uttrykk fra skoleVertMonster(), så den aldri har en egen kopi.
 * ---------------------------------------------------------------------------------------------------------- */
export const SKOLEPLATTFORMER: ReadonlyArray<{ navn: string; verter: readonly string[] }> = [
  {
    navn: "Microsoft Teams",
    verter: ["teams.microsoft.com", "teams.live.com", "teams.cloud.microsoft", "teams.public.onecdn.static.microsoft"],
  },
  { navn: "Google Classroom", verter: ["classroom.google.com"] },
  { navn: "itslearning", verter: ["itslearning.com", "oembeditslearning.com"] },
  { navn: "Canvas", verter: ["instructure.com", "canvas.com"] },
  { navn: "Skooler", verter: ["skooler.com"] },
  { navn: "SharePoint", verter: ["sharepoint.com"] },
  {
    navn: "Office på nett",
    verter: ["officeapps.live.com", "office.com", "office365.com", "onenote.com", "onenote.cloud.microsoft", "m365.cloud.microsoft"],
  },
  { navn: "Microsoft 365 for skole", verter: ["edu.cloud.microsoft"] },
  { navn: "Showbie", verter: ["showbie.com"] },
];

/** Søkemotorer (for fordelingen skole/direkte/søk i klasseøktene). */
const SOKEMOTORER: readonly RegExp[] = [
  /^(www\.)?google\.[a-z.]+$/,
  /^com\.google\.android\.googlequicksearchbox$/,
  /(^|\.)bing\.com$/,
  /(^|\.)duckduckgo\.com$/,
  /(^|\.)yahoo\.com$/,
  /(^|\.)ecosia\.org$/,
  /(^|\.)startsiden\.abcnyheter\.no$/,
  /(^|\.)search\.brave\.com$/,
  /(^|\.)qwant\.com$/,
  /(^|\.)yandex\.[a-z.]+$/,
  /(^|\.)kvasir\.no$/,
  /(^|\.)startpage\.com$/,
  /(^|\.)baidu\.com$/,
];

export const MIN_OKTER = 5;
export const VINDU_MIN = 20;
/** Sidetyper som teller som «gikk videre til quiz/oppgave/trening» (samme liste står i SQL-funksjonen). */
export const AKTIVE_SIDETYPER = ["oppgave", "quiz", "trening", "flashcards", "test"] as const;

function rensVert(vert: string): string {
  return vert.trim().toLowerCase().replace(/\.$/, "");
}

/** Plattformen verten hører til, eller null. */
export function skoleplattform(vert: string | null | undefined): string | null {
  if (!vert) return null;
  const v = rensVert(vert);
  for (const p of SKOLEPLATTFORMER) {
    for (const s of p.verter) if (v === s || v.endsWith(`.${s}`)) return p.navn;
  }
  return null;
}

export function erSkolevert(vert: string | null | undefined): boolean {
  return skoleplattform(vert) !== null;
}

export function erSokemotor(vert: string | null | undefined): boolean {
  if (!vert) return false;
  const v = rensVert(vert);
  return SOKEMOTORER.some((r) => r.test(v));
}

/**
 * Samme liste som regulært uttrykk, for SQL (`kilde_host ~* mønster`). Bare tegn som betyr det samme i
 * JavaScript og PostgreSQL: ^ $ ( | ) og \. — testen sjekker at uttrykket og skoleplattform() er enige.
 */
export function skoleVertMonster(): string {
  const alle = SKOLEPLATTFORMER.flatMap((p) => p.verter).map((s) => s.replace(/\./g, "\\."));
  return `(^|\\.)(${alle.join("|")})\\.?$`;
}

/* ------------------------------------------------------------------------------------------------------------
 * Økter og klasseøkter
 * ---------------------------------------------------------------------------------------------------------- */

/** Én økt slik SQL-funksjonen sender den (rekkefølgen i tabellen er fast, se parseUtvalg). */
export interface Okt {
  /** øktas første visning, mikrosekunder siden 1970 (UTC) */
  start: number;
  /** øktas første sti (landingssiden) */
  landing: string;
  /** første bok øktene var innom */
  bok: string | null;
  /** landingssidens kapittel */
  kapittel: string | null;
  /** første kilde_host i økta */
  kilde: string | null;
  /** første kilde_host i økta som er en skoleplattform */
  skole: string | null;
  nn: boolean;
  /** var innom quiz, oppgave, trening, flashcards eller test */
  aktiv: boolean;
  sider: number;
}

export type Kilde = "skole" | "direkte" | "sok" | "annen";

export function kildeType(o: Pick<Okt, "kilde" | "skole">): Kilde {
  if (o.skole || erSkolevert(o.kilde)) return "skole";
  if (!o.kilde) return "direkte";
  return erSokemotor(o.kilde) ? "sok" : "annen";
}

/** Gjør SQL-tuplene om til Okt. Tåler at feltet mangler (tom liste). */
export function parseUtvalg(rader: unknown): Okt[] {
  if (!Array.isArray(rader)) return [];
  return rader.map((r) => {
    const a = r as unknown[];
    return {
      start: Number(a[0]),
      landing: String(a[1]),
      bok: (a[2] as string | null) ?? null,
      kapittel: (a[3] as string | null) ?? null,
      kilde: (a[4] as string | null) ?? null,
      skole: (a[5] as string | null) ?? null,
      nn: a[6] === true,
      aktiv: a[7] === true,
      sider: Number(a[8] ?? 1),
    };
  });
}

/**
 * Klasseøkter: minst `min` økter med samme landingsside der alle starter innen `vinduMin` minutter etter den
 * første (grensen tas med). Grådig fra tidligste økt per landingsside: blir det en klasseøkt, fortsetter
 * letingen etter den siste økta i den; ellers fra neste økt. Tiden er absolutt (UTC), så overgangen til
 * vintertid endrer ikke avstandene.
 */
export function finnKlasseokter(okter: readonly Okt[], min = MIN_OKTER, vinduMin = VINDU_MIN): Okt[][] {
  const vindu = vinduMin * 60 * 1_000_000;
  const perSti = new Map<string, Okt[]>();
  for (const o of okter) {
    const liste = perSti.get(o.landing);
    if (liste) liste.push(o);
    else perSti.set(o.landing, [o]);
  }
  const grupper: Okt[][] = [];
  for (const liste of perSti.values()) {
    liste.sort((a, b) => a.start - b.start);
    let i = 0;
    while (i < liste.length) {
      let j = i;
      while (j + 1 < liste.length && liste[j + 1].start - liste[i].start <= vindu) j++;
      if (j - i + 1 >= min) {
        grupper.push(liste.slice(i, j + 1));
        i = j + 1;
      } else i++;
    }
  }
  return grupper.sort((a, b) => b[0].start - a[0].start);
}

/* ------------------------------------------------------------------------------------------------------------
 * Tid i Europe/Oslo
 * ---------------------------------------------------------------------------------------------------------- */
const UKEDAGER = ["man", "tir", "ons", "tor", "fre", "lør", "søn"] as const;
const ENGELSK_UKEDAG: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
const osloFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  weekday: "short",
  hourCycle: "h23",
});

export interface OsloTid {
  /** mandagen i uka, YYYY-MM-DD (samme som date_trunc('week', ts AT TIME ZONE 'Europe/Oslo') i SQL) */
  uke: string;
  ukenr: number;
  /** 0 = mandag … 6 = søndag */
  ukedag: number;
  ukedagNavn: string;
  time: number;
  dato: string;
  kl: string;
}

function isoUkenr(aar: number, mnd: number, dag: number): number {
  const d = new Date(Date.UTC(aar, mnd - 1, dag));
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7) + 3); // torsdagen i samme uke avgjør året
  const jan4 = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  return 1 + Math.round(((d.getTime() - jan4.getTime()) / 86_400_000 - 3 + ((jan4.getUTCDay() + 6) % 7)) / 7);
}

export function osloTid(mikrosekunder: number): OsloTid {
  const deler: Record<string, string> = {};
  for (const p of osloFormat.formatToParts(new Date(Math.floor(mikrosekunder / 1000)))) deler[p.type] = p.value;
  const aar = Number(deler.year);
  const mnd = Number(deler.month);
  const dag = Number(deler.day);
  const ukedag = ENGELSK_UKEDAG[deler.weekday] ?? 0;
  const mandag = new Date(Date.UTC(aar, mnd - 1, dag - ukedag));
  return {
    uke: mandag.toISOString().slice(0, 10),
    ukenr: isoUkenr(aar, mnd, dag),
    ukedag,
    ukedagNavn: UKEDAGER[ukedag],
    time: Number(deler.hour),
    dato: `${deler.day}.${deler.month}.${aar}`,
    kl: `${deler.hour}.${deler.minute}`,
  };
}

/* ------------------------------------------------------------------------------------------------------------
 * Hele panelet
 * ---------------------------------------------------------------------------------------------------------- */
export interface SkolebrukInn {
  okter: number;
  okterPerUke: Array<[string, number]>;
  utvalg: readonly Okt[];
}

export interface Klasseokt {
  /** ISO-tid for første økt (UTC) */
  start: string;
  dato: string;
  ukedag: string;
  kl: string;
  sti: string;
  bok: string | null;
  kapittel: string | null;
  malform: "nb" | "nn" | "blandet";
  okter: number;
  fraSkole: number;
  direkte: number;
  sok: number;
  annen: number;
  plattform: string | null;
  aktive: number;
  minutter: number;
}

export interface Skolebruk {
  totalt: {
    okter: number;
    skoleOkter: number;
    skoleOkterNynorsk: number;
    skoleOkterAktive: number;
    klasseOkter: number;
    okterIKlasseokter: number;
    klasseOkterMedSkolekilde: number;
    klasseOkterUtenSkolekilde: number;
    klasseOkterNynorsk: number;
  };
  perUke: Array<{ uke: string; ukenr: number; okter: number; skoleOkter: number; klasseOkter: number; okterIKlasseokter: number }>;
  perPlattform: Array<{ navn: string; okter: number; verter: Array<{ vert: string; okter: number }> }>;
  perBok: Array<{ bok: string; skoleOkter: number; klasseOkter: number; okterIKlasseokter: number }>;
  landingssider: Array<{ sti: string; bok: string | null; kapittel: string | null; skoleOkter: number; okterIKlasseokter: number }>;
  klasseOkter: Klasseokt[];
  /** skoleøkter per ukedag (0 = mandag) og per klokketime, norsk tid */
  ukedager: number[];
  klokketimer: number[];
}

function teller<K>(): { leggTil: (k: K, n?: number) => void; kart: Map<K, number> } {
  const kart = new Map<K, number>();
  return { kart, leggTil: (k, n = 1) => kart.set(k, (kart.get(k) ?? 0) + n) };
}

function vanligst<K>(verdier: readonly K[]): K | null {
  const t = teller<K>();
  for (const v of verdier) t.leggTil(v);
  let best: K | null = null;
  let n = 0;
  for (const [k, c] of t.kart) if (c > n) [best, n] = [k, c];
  return best;
}

export function beregnSkolebruk(inn: SkolebrukInn, maksLandingssider = 15): Skolebruk {
  const skole = inn.utvalg.filter((o) => kildeType(o) === "skole");
  const grupper = finnKlasseokter(inn.utvalg);

  const uker = new Map<string, Skolebruk["perUke"][number]>();
  const uke = (u: string, nr?: number) => {
    let r = uker.get(u);
    if (!r) {
      const [a, m, d] = u.split("-").map(Number);
      r = { uke: u, ukenr: nr ?? isoUkenr(a, m, d), okter: 0, skoleOkter: 0, klasseOkter: 0, okterIKlasseokter: 0 };
      uker.set(u, r);
    }
    return r;
  };
  for (const [u, n] of inn.okterPerUke) uke(u).okter += n;

  const ukedager = Array.from({ length: 7 }, () => 0);
  const klokketimer = Array.from({ length: 24 }, () => 0);
  const plattformer = new Map<string, Map<string, number>>();
  const boker = new Map<string, Skolebruk["perBok"][number]>();
  const bok = (b: string) => {
    let r = boker.get(b);
    if (!r) boker.set(b, (r = { bok: b, skoleOkter: 0, klasseOkter: 0, okterIKlasseokter: 0 }));
    return r;
  };
  const sider = new Map<string, Skolebruk["landingssider"][number]>();
  const side = (o: Okt) => {
    let r = sider.get(o.landing);
    if (!r) sider.set(o.landing, (r = { sti: o.landing, bok: o.bok, kapittel: o.kapittel, skoleOkter: 0, okterIKlasseokter: 0 }));
    return r;
  };

  for (const o of skole) {
    const t = osloTid(o.start);
    uke(t.uke, t.ukenr).skoleOkter++;
    ukedager[t.ukedag]++;
    klokketimer[t.time]++;
    const vert = rensVert(o.skole ?? o.kilde ?? "");
    const navn = skoleplattform(vert) ?? vert;
    const pv = plattformer.get(navn) ?? new Map<string, number>();
    pv.set(vert, (pv.get(vert) ?? 0) + 1);
    plattformer.set(navn, pv);
    bok(o.bok ?? "(ingen bok)").skoleOkter++;
    side(o).skoleOkter++;
  }

  const klasseOkter: Klasseokt[] = grupper.map((g) => {
    const forste = g[0];
    const t = osloTid(forste.start);
    const u = uke(t.uke, t.ukenr);
    u.klasseOkter++;
    u.okterIKlasseokter += g.length;
    const b = bok(forste.bok ?? "(ingen bok)");
    b.klasseOkter++;
    b.okterIKlasseokter += g.length;
    side(forste).okterIKlasseokter += g.length;
    const typer = g.map(kildeType);
    const nn = g.filter((o) => o.nn).length;
    const skolePlattformer = g.map((o) => skoleplattform(o.skole ?? o.kilde)).filter((p): p is string => p !== null);
    return {
      start: new Date(Math.floor(forste.start / 1000)).toISOString(),
      dato: t.dato,
      ukedag: t.ukedagNavn,
      kl: t.kl,
      sti: forste.landing,
      bok: forste.bok,
      kapittel: forste.kapittel,
      malform: nn === 0 ? "nb" : nn === g.length ? "nn" : "blandet",
      okter: g.length,
      fraSkole: typer.filter((k) => k === "skole").length,
      direkte: typer.filter((k) => k === "direkte").length,
      sok: typer.filter((k) => k === "sok").length,
      annen: typer.filter((k) => k === "annen").length,
      plattform: vanligst(skolePlattformer),
      aktive: g.filter((o) => o.aktiv).length,
      minutter: Math.round((g[g.length - 1].start - forste.start) / 60_000_000),
    };
  });

  const perPlattform = [...plattformer]
    .map(([navn, v]) => ({
      navn,
      okter: [...v.values()].reduce((s, n) => s + n, 0),
      verter: [...v].map(([vert, okter]) => ({ vert, okter })).sort((a, b) => b.okter - a.okter),
    }))
    .sort((a, b) => b.okter - a.okter);

  return {
    totalt: {
      okter: inn.okter,
      skoleOkter: skole.length,
      skoleOkterNynorsk: skole.filter((o) => o.nn).length,
      skoleOkterAktive: skole.filter((o) => o.aktiv).length,
      klasseOkter: grupper.length,
      okterIKlasseokter: grupper.reduce((s, g) => s + g.length, 0),
      klasseOkterMedSkolekilde: klasseOkter.filter((k) => k.fraSkole > 0).length,
      klasseOkterUtenSkolekilde: klasseOkter.filter((k) => k.fraSkole === 0).length,
      klasseOkterNynorsk: klasseOkter.filter((k) => k.malform !== "nb").length,
    },
    perUke: [...uker.values()].sort((a, b) => a.uke.localeCompare(b.uke)),
    perPlattform,
    perBok: [...boker.values()].sort((a, b) => b.skoleOkter + b.okterIKlasseokter - (a.skoleOkter + a.okterIKlasseokter)),
    landingssider: [...sider.values()]
      .sort((a, b) => b.skoleOkter + b.okterIKlasseokter - (a.skoleOkter + a.okterIKlasseokter))
      .slice(0, maksLandingssider),
    klasseOkter,
    ukedager,
    klokketimer,
  };
}

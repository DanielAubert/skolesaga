// Tester for skolebruk-panelet (Daniel 23.11.2026, «Kjør på med 1,2»). Kjøres med `npm run test:skolebruk`
// (node --test; Node ≥ 22.18 laster .ts direkte). Ingen nettverk, ingen database.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SKOLEPLATTFORMER,
  skoleplattform,
  erSkolevert,
  erSokemotor,
  skoleVertMonster,
  kildeType,
  finnKlasseokter,
  osloTid,
  beregnSkolebruk,
  parseUtvalg,
  AKTIVE_SIDETYPER,
  MIN_OKTER,
  VINDU_MIN,
} from "../skolebruk.ts";

const HER = path.dirname(fileURLToPath(import.meta.url));
const MIN = 60 * 1_000_000; // ett minutt i mikrosekunder
const us = (iso) => Date.parse(iso) * 1000;
const okt = (iso, landing = "/naturfag-7/naturfag-7-1-1", ekstra = {}) => ({
  start: us(iso),
  landing,
  bok: "naturfag-7",
  kapittel: "naturfag-7-1-1",
  kilde: null,
  skole: null,
  nn: false,
  aktiv: false,
  sider: 1,
  ...ekstra,
});

/* ---------------------------------------------------------------- skoleverter */

test("skoleverter: plattformene i definisjonen, med alle underdomener", () => {
  const ja = {
    "teams.public.onecdn.static.microsoft": "Microsoft Teams",
    "teams.microsoft.com": "Microsoft Teams",
    "classroom.google.com": "Google Classroom",
    "oembed.oembeditslearning.com": "itslearning",
    "vlfk.itslearning.com": "itslearning",
    "skole.itslearning.com": "itslearning",
    "hvl.instructure.com": "Canvas",
    "app.skooler.com": "Skooler",
    "kommune.sharepoint.com": "SharePoint",
    "euc-word-edit.officeapps.live.com": "Office på nett",
    "noc-onenote.officeapps.live.com": "Office på nett",
    "www.office.com": "Office på nett",
    "assignments.edu.cloud.microsoft": "Microsoft 365 for skole",
    "web.showbie.com": "Showbie",
    "CLASSROOM.GOOGLE.COM.": "Google Classroom",
  };
  for (const [vert, navn] of Object.entries(ja)) assert.equal(skoleplattform(vert), navn, vert);
  for (const nei of [
    "www.google.com", "notebook.google.com", "www.bing.com", "l.facebook.com", "www.eksamenssett.no", "chatgpt.com",
    "notitslearning.com", "fakeoffice.com", "office.com.evil.example", "teams.microsoft.com.example.org", null, "",
  ]) assert.equal(erSkolevert(nei), false, String(nei));
});

test("skoleverter: SQL-mønsteret er enig med skoleplattform() (ett hjem for lista)", () => {
  const re = new RegExp(skoleVertMonster(), "i");
  const verter = [
    ...SKOLEPLATTFORMER.flatMap((p) => p.verter.flatMap((v) => [v, `x.${v}`, `x${v}`, `${v}.example`])),
    "www.google.com", "duckduckgo.com", "teams", "officeapps.live.com.no",
  ];
  for (const v of verter) assert.equal(re.test(v), erSkolevert(v), v);
  // bare tegn som betyr det samme i JavaScript og PostgreSQL
  assert.match(skoleVertMonster(), /^[a-z0-9.\\|()^$?-]+$/);
});

test("søkemotorer og kildetype", () => {
  for (const s of ["www.google.com", "www.google.no", "www.google.com.hk", "www.bing.com", "duckduckgo.com", "no.search.yahoo.com", "www.ecosia.org", "startsiden.abcnyheter.no", "www.kvasir.no"])
    assert.ok(erSokemotor(s), s);
  for (const s of ["classroom.google.com", "gemini.google.com", "chatgpt.com", "l.facebook.com"]) assert.ok(!erSokemotor(s), s);
  assert.equal(kildeType({ kilde: null, skole: null }), "direkte");
  assert.equal(kildeType({ kilde: "www.google.com", skole: null }), "sok");
  assert.equal(kildeType({ kilde: "classroom.google.com", skole: "classroom.google.com" }), "skole");
  assert.equal(kildeType({ kilde: "www.google.com", skole: "vlfk.itslearning.com" }), "skole"); // skole i en senere visning
  assert.equal(kildeType({ kilde: "l.facebook.com", skole: null }), "annen");
});

test("parseUtvalg leser tuplene fra SQL og tåler manglende felt", () => {
  assert.deepEqual(parseUtvalg(null), []);
  const [o] = parseUtvalg([[1761130506028962, "/nn/a", "a", "a-1", "www.google.com", null, true, false, 3]]);
  assert.equal(o.start, 1761130506028962);
  assert.equal(o.nn, true);
  assert.equal(o.sider, 3);
});

/* ---------------------------------------------------------------- klasseøkter */

test("klasseøkt: nøyaktig 5 økter teller, 4 gjør det ikke", () => {
  const fem = [0, 3, 6, 9, 12].map((m) => okt(`2026-11-02T12:${String(m).padStart(2, "0")}:00Z`));
  assert.equal(finnKlasseokter(fem).length, 1);
  assert.equal(finnKlasseokter(fem.slice(0, 4)).length, 0);
  assert.equal(MIN_OKTER, 5);
});

test("klasseøkt: nøyaktig 20 minutter er med, 20 min + 1 µs er ikke", () => {
  const base = us("2026-11-02T12:00:00Z");
  const fire = [0, 1, 2, 3].map((m) => ({ ...okt("2026-11-02T12:00:00Z"), start: base + m * MIN }));
  const grense = { ...okt("2026-11-02T12:00:00Z"), start: base + VINDU_MIN * MIN };
  const over = { ...grense, start: grense.start + 1 };
  assert.equal(finnKlasseokter([...fire, grense]).length, 1);
  assert.equal(finnKlasseokter([...fire, over]).length, 0);
});

test("klasseøkt: to klasser på samme side samme dag blir to klasseøkter", () => {
  const morgen = [0, 2, 4, 6, 8, 10].map((m) => okt(`2026-11-03T08:${String(m).padStart(2, "0")}:00Z`));
  const etter = [0, 1, 2, 3, 4].map((m) => okt(`2026-11-03T11:${String(m).padStart(2, "0")}:00Z`));
  const g = finnKlasseokter([...etter, ...morgen]);
  assert.equal(g.length, 2);
  assert.deepEqual(g.map((x) => x.length), [5, 6]); // nyeste først
});

test("klasseøkt: ulike landingssider blandes ikke, og en klasse som fortsetter etter 20 min starter ikke en ny for tidlig", () => {
  const a = [0, 1, 2].map((m) => okt(`2026-11-04T09:0${m}:00Z`, "/a"));
  const b = [0, 1].map((m) => okt(`2026-11-04T09:0${m}:00Z`, "/b"));
  assert.equal(finnKlasseokter([...a, ...b]).length, 0);
  // 7 økter over 25 min: de 6 første er innen 20 min; den 7. alene blir ikke en ny klasseøkt
  const lang = [0, 4, 8, 12, 16, 20, 25].map((m) => okt(`2026-11-04T10:${String(m).padStart(2, "0")}:00Z`, "/c"));
  const g = finnKlasseokter(lang);
  assert.equal(g.length, 1);
  assert.equal(g[0].length, 6);
});

test("klasseøkt over overgangen til vintertid 25.10.2026: absolutt tid, ikke veggklokke", () => {
  // 02.50 sommertid (00.50Z) og 02.05 vintertid (01.05Z) er 15 minutter fra hverandre
  const g = finnKlasseokter([
    okt("2026-10-25T00:50:00Z"), okt("2026-10-25T00:55:00Z"), okt("2026-10-25T00:58:00Z"),
    okt("2026-10-25T01:02:00Z"), okt("2026-10-25T01:05:00Z"),
  ]);
  assert.equal(g.length, 1);
  assert.equal(osloTid(us("2026-10-25T00:50:00Z")).kl, "02.50");
  assert.equal(osloTid(us("2026-10-25T01:05:00Z")).kl, "02.05");
});

test("Oslo-tid: uke, ukedag og klokketime rundt sommertid/vintertid", () => {
  const søn = osloTid(us("2026-10-25T22:30:00Z")); // søndag 25.10 kl. 23.30 vintertid
  assert.deepEqual([søn.uke, søn.ukedag, søn.time, søn.ukenr], ["2026-10-19", 6, 23, 43]);
  const man = osloTid(us("2026-10-25T23:30:00Z")); // mandag 26.10 kl. 00.30
  assert.deepEqual([man.uke, man.ukedag, man.time, man.ukenr], ["2026-10-26", 0, 0, 44]);
  const sommer = osloTid(us("2026-10-24T22:30:00Z")); // søndag 25.10 kl. 00.30 sommertid
  assert.deepEqual([sommer.ukedagNavn, sommer.time, sommer.dato], ["søn", 0, "25.10.2026"]);
  assert.equal(osloTid(us("2026-11-02T12:03:00Z")).kl, "13.03");
  assert.equal(osloTid(us("2026-12-31T12:00:00Z")).ukenr, 53);
  assert.equal(osloTid(us("2027-01-04T12:00:00Z")).ukenr, 1);
});

test("beregnSkolebruk: kildefordeling, plattform og aktive i en klasseøkt", () => {
  const g = [
    okt("2026-11-02T12:00:00Z", "/nn/x", { skole: "teams.public.onecdn.static.microsoft", kilde: "teams.public.onecdn.static.microsoft", nn: true, aktiv: true }),
    okt("2026-11-02T12:01:00Z", "/nn/x", { skole: "teams.public.onecdn.static.microsoft", kilde: "teams.public.onecdn.static.microsoft", nn: true }),
    okt("2026-11-02T12:02:00Z", "/nn/x", { kilde: "www.google.com", nn: true }),
    okt("2026-11-02T12:03:00Z", "/nn/x", { nn: true, aktiv: true }),
    okt("2026-11-02T12:04:00Z", "/nn/x", { nn: true }),
  ];
  const r = beregnSkolebruk({ okter: 50, okterPerUke: [["2026-11-02", 50]], utvalg: g });
  assert.equal(r.totalt.skoleOkter, 2);
  assert.equal(r.totalt.klasseOkter, 1);
  const k = r.klasseOkter[0];
  assert.deepEqual([k.okter, k.fraSkole, k.direkte, k.sok, k.annen, k.aktive, k.malform, k.plattform, k.ukedag, k.kl],
    [5, 2, 2, 1, 0, 2, "nn", "Microsoft Teams", "man", "13.00"]);
  assert.deepEqual(r.perUke, [{ uke: "2026-11-02", ukenr: 45, okter: 50, skoleOkter: 2, klasseOkter: 1, okterIKlasseokter: 5 }]);
  assert.equal(r.ukedager[0], 2);
  assert.equal(r.klokketimer[13], 2);
  // ingen økt-id eller bruker_hash i svaret
  assert.doesNotMatch(JSON.stringify(r), /okt"|bruker_hash/);
});

/* ---------------------------------------------------------------- fasit på lagret, anonymisert datasett */

/**
 * Speil av SQL-funksjonen skolesaga_skolebruk (migrasjon 126): én rad per økt i [fra, til) og bare øktene som
 * er fra skoleplattform eller har minst MIN_OKTER økter på samme landingsside innen ±VINDU_MIN minutter.
 * At SQL-en gir nøyaktig det samme på denne fiksturen, er kontrollert i PGlite (fremdrift/skolesaga-skolebruk-2311).
 */
function sqlSpeil(rader, fra, til) {
  const re = new RegExp(skoleVertMonster(), "i");
  const perOkt = new Map();
  for (const r of rader) {
    if (r.us < us(fra) || r.us >= us(til)) continue;
    const l = perOkt.get(r.okt);
    if (l) l.push(r);
    else perOkt.set(r.okt, [r]);
  }
  const okter = [...perOkt.values()].map((rs) => {
    rs.sort((a, b) => a.us - b.us || a.id - b.id);
    return {
      start: rs[0].us,
      landing: rs[0].sti,
      bok: rs.find((r) => r.bok)?.bok ?? null,
      kapittel: rs[0].kapittel,
      kilde: rs.find((r) => r.kilde_host)?.kilde_host ?? null,
      skole: rs.find((r) => r.kilde_host && re.test(r.kilde_host))?.kilde_host ?? null,
      nn: rs.some((r) => r.malform === "nn"),
      aktiv: rs.some((r) => AKTIVE_SIDETYPER.includes(r.sidetype)),
      sider: rs.length,
    };
  });
  const perUke = new Map();
  for (const o of okter) {
    const u = osloTid(o.start).uke;
    perUke.set(u, (perUke.get(u) ?? 0) + 1);
  }
  const perSti = new Map();
  for (const o of okter) (perSti.get(o.landing) ?? perSti.set(o.landing, []).get(o.landing)).push(o.start);
  const naboer = (o) => perSti.get(o.landing).filter((s) => Math.abs(s - o.start) <= VINDU_MIN * MIN).length;
  return {
    okter: okter.length,
    okterPerUke: [...perUke].sort(),
    utvalg: okter.filter((o) => o.skole || naboer(o) >= MIN_OKTER).sort((a, b) => a.start - b.start),
  };
}

function lesFikstur() {
  const f = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(HER, "fikstur-skolebruk-no-2210-2311.json.gz"))).toString());
  return f.rader.map((a) => {
    const r = Object.fromEntries(f.kolonner.map((k, i) => [k, a[i]]));
    // ts har mikrosekunder; Date.parse tar bare millisekunder, så de tre siste sifrene legges på for hånd
    const m = /\.(\d+)/.exec(r.ts);
    const brok = m ? m[1].padEnd(6, "0") : "000000";
    r.us = Math.floor(Date.parse(r.ts) / 1000) * 1_000_000 + Number(brok);
    return r;
  });
}

test("fasit 23.11.2026 (land NO, 22.10–23.11 14.12 UTC): panelet gir hovedsesjonens tall", () => {
  const rader = lesFikstur();
  assert.ok(!("bruker_hash" in rader[0]), "fiksturen skal ikke ha bruker_hash");
  const inn = sqlSpeil(rader, "2026-10-22T00:00:00Z", "2026-11-23T14:12:00Z");
  const r = beregnSkolebruk(inn);

  assert.equal(r.totalt.okter, 9334);
  assert.equal(rader.length, 23207);

  // 696 i fasiten + 1: assignments.edu.cloud.microsoft står i definisjonen, men ble ikke fanget av analysens regex
  assert.equal(r.totalt.skoleOkter, 697);
  const vert = Object.fromEntries(r.perPlattform.flatMap((p) => p.verter.map((v) => [v.vert, v.okter])));
  assert.equal(vert["teams.public.onecdn.static.microsoft"], 484);
  assert.equal(vert["classroom.google.com"], 109);
  assert.equal(vert["oembed.oembeditslearning.com"], 37);
  assert.equal(vert["vlfk.itslearning.com"], 31);
  assert.equal(vert["euc-word-edit.officeapps.live.com"] + vert["noc-word-edit.officeapps.live.com"], 33);
  assert.equal(vert["euc-onenote.officeapps.live.com"] + vert["noc-onenote.officeapps.live.com"], 2);
  assert.equal(vert["assignments.edu.cloud.microsoft"], 1);

  assert.equal(r.totalt.klasseOkter, 66);
  assert.equal(r.totalt.okterIKlasseokter, 876);
  assert.equal(r.totalt.klasseOkterMedSkolekilde, 32);
  assert.equal(r.totalt.klasseOkterUtenSkolekilde, 34);
  assert.equal(r.totalt.skoleOkterNynorsk, 191);

  const storst = [...r.klasseOkter].sort((a, b) => b.okter - a.okter)[0];
  assert.deepEqual([storst.okter, storst.bok, storst.sti, storst.ukedag, storst.dato, storst.kl],
    [57, "naturfag-7", "/nn/naturfag-7/naturfag-7-1-1-narrativ", "man", "02.11.2026", "13.03"]);

  // ukene summerer seg
  assert.equal(r.perUke.reduce((s, u) => s + u.skoleOkter, 0), 697);
  assert.equal(r.perUke.reduce((s, u) => s + u.okter, 0), 9334);
  assert.equal(r.perUke.reduce((s, u) => s + u.klasseOkter, 0), 66);
  assert.equal(r.ukedager.reduce((s, n) => s + n, 0), 697);
  assert.equal(r.klokketimer.reduce((s, n) => s + n, 0), 697);
});

test("ekte SQL-svar (migrasjon 126 kjørt i PGlite på samme fikstur) gir de samme tallene", () => {
  const data = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(HER, "eksempel-sql-svar-no-2210-2311.json.gz"))).toString());
  assert.deepEqual(Object.keys(data).sort(), ["okter", "okter_per_uke", "utvalg"]);
  const r = beregnSkolebruk({ okter: data.okter, okterPerUke: data.okter_per_uke, utvalg: parseUtvalg(data.utvalg) });
  assert.deepEqual(
    [r.totalt.okter, r.totalt.skoleOkter, r.totalt.klasseOkter, r.totalt.okterIKlasseokter, r.totalt.klasseOkterMedSkolekilde, r.totalt.klasseOkterUtenSkolekilde, r.totalt.skoleOkterNynorsk],
    [9334, 697, 66, 876, 32, 34, 191],
  );
  // hver rad har nøyaktig de ni feltene — ingen økt-id, ingen bruker_hash
  for (const rad of data.utvalg) assert.equal(rad.length, 9);
});

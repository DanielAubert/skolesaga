# Autonom byggekjøring — tdt4110, med1100, tma4135, in2010

**Startet:** 28. juli 2026. Produkteier på ferie, sjekker inn via remote.
**Oppdateres av:** byggelederen (hovedøkta), etter hver fullførte fase.

Fokus valgt av produkteier: **høstsemesterfag**. Begge emnene er 1. semester
og undervises til høsten — belegg i valgnotatet nederst.

---

## Status

| Fase | `tdt4110` | `med1100` |
|---|---|---|
| Steg 0 — skjelettport | ✅ OK (39 kap) | ✅ OK (50 kap) |
| Steg 0 — BOKCONFIG.json | ✅ | ✅ |
| Steg 0 — BYGGEKONTRAKT.md | ✅ 1 409 linjer | ✅ 1 515 linjer |
| Steg 1 — byggebølge | ✅ 47/47 | ⏳ 57/63 · Del 14 kjører |
| Steg 2 — wiring | ✅ BOKPORT OK | — |
| Steg 3 — verifisering | ⏳ 2 redaktører ute | — |
| Steg 4 — sluttport + deploy | — | — |

### Bok 3 og 4 — startet 29. juli

| Fase | `tma4135` (NTNU) | `in2010` (UiO) |
|---|---|---|
| Steg 0 — skjelettport | ✅ 36 kap | ✅ 35 kap |
| Steg 0 — BYGGEKONTRAKT | ⏳ | ⏳ |
| Steg 0 — BOKCONFIG | — | — |

Begge er rene høstfag, målt mot arkivets filnavn: `tma4135` har 42 oppgavesett
og 44 løsningsforslag, alle høst; `in2010` har 17 oppgavesett og **14 ekte
sensorveiledninger**, alle høst. Det siste er uvanlig — de fleste emner har bare
faglærerskrevne løsningsforslag, som er vernet materiale.

`fys1120` ble vurdert og forkastet: 3. semester tilsier høst, men arkivets
filnavn viser rene våreksamener.

Tegnforklaring: ✅ ferdig · ⏳ pågår · ⛔ blokkert · — ikke startet

---

## Omfang

| | `tdt4110` | `med1100` |
|---|---|---|
| Lærested | NTNU | UiO |
| Kapitler | 39 | 50 |
| Prøvekapitler | 8 (del 1–8) | 13 (del 1–13) |
| Filer totalt | 47 | 63 |
| Quiz-kvote (gulv) | 662 | 706 |
| Flashcard-kvote (gulv) | 558 | 734 |
| Arkiv | 33 filer (19 fritt) | 42 filer (alle fritt) |

---

## Logg

**28. juli, andre bølge** — tdt4110 Del 0, 1, 2, 3, 4 ferdige (27 av 47 filer).
med1100 Del 0, 1 ferdige (16 av 63). Sju agenter ute på Del 5–8 og med1100 Del 2–6.

**28. juli, portsmutthull lukket** — to agenter løste `input()`-problemet ulikt.
Del 2 bruker gjerdetaggene prinsipielt (```text = pseudokode, ```python =
kjørbar kode); Del 0+1 tagget kjørbar Python som ```text for å slippe
utskriftskravet. Da hopper porten også over KOMPILERINGSSJEKKEN: 7 blokker i
kap. 1.4 sto ukontrollert. De ferdige bøkene avgjorde ingenting — in1000 gjør
det ene, in1900 det andre, ingen bruker «Kjøring:»-blokker. Regelen er skjerpet
i felleskravene (commit `b538df27f`); de 7 blokkene er oppdrag V2 til steg 3.

**28. juli, ett agentkrasj uten tap** — Del 3-agenten døde på API-feil midt i
kap. 3.4. 3-1..3-3 lå ferdige på disk; gap-fylling skrev bare de fire som
manglet. Del 3 er nå komplett med 102/102 quiz og 265 min, eksakt tidsbudsjett.

**28. juli, byggebølge startet** — 7 agenter samtidig (under taket på ~8 der
API-et stallet 16. juni). tdt4110: Del 0+1, 2, 3, 4. med1100: Del 0, 1, 2+3.

**28. juli, portfiks før start** — `sjekk-kode.py` avviste ALL rekursjon med
begrunnelsen «utenfor pensum». Sant for in1900, men rekursjon er pensum i
TDT4110: ~60 % av settene, eget teorikapittel 5.2. Porten ville avvist en
korrekt bok. Gjort emnebevisst via `REKURSJON_ER_PENSUM` framfor å svekkes;
in1900 regresjonstestet og avviser fortsatt rekursjon over 850 kodeblokker.
Funnet av kontrakt-agenten FØR byggingen, ikke ved sluttporten. Commit `2aeb05a42`.

**28. juli** — Steg 0 startet. Skjelettportene grønne for begge.
BOKCONFIG skrevet. Byggekontrakter under arbeid.

**28. juli, før start** — Fant at byggeplanen og alle 170 skjeletter fortsatt
instruerte agentene til å skrive `](/bok/<emne>/…)` og redigere
`src/app/bok/trinn/`. `docs/` lå utenfor globet da `/bok`-prefikset ble
fjernet 27. juli. Malene er inndata til byggeagentene, så begge bøkene ville
fått døde interne lenker gjennom hele verket. 1 639 instruksjoner i 174 filer
rettet (commit `3b0fe5e7e`) FØR byggingen startet.

---

## Åpne risikoer

- **`tdt4110` har tynt arkiv:** 19 brukbare oppgavesett (2014–2019) pluss 14
  vernede løsningsforslag som kun er fasitkilde. På nivå med `fil1001` (22
  filer), som ble en god bok — men det er den tynneste av kandidatene. Holder
  det ikke kvalitetskravene, stoppes boka og rapporteres. Innholdet fylles
  ALDRI med oppdiktet stoff for å nå en kvote.
- **`med1100` er et medisinfag:** boka er eksamensforberedelse, aldri
  helseråd eller klinisk veiledning. Kravet står i byggekontrakten.
  Medisinske normalverdier fra eldre sett (2021–2022) er `(verifiser)`-merket
  i analysen og skal forbli merket til de er kontrollert.

## Grenser for den autonome kjøringen

Byggelederen stopper og venter på produkteier ved:
- betalt API (Anthropic/ElevenLabs/Gemini)
- endringer i den delte Supabase-databasen
- kilder klassifisert `SJEKK-MANUELT` eller `INTERNT-CC-NC`
- en rød port som ikke lar seg få grønn — da rulles arbeidet tilbake
- feil som treffer produksjon — da reverteres deployen

---

## Valgnotat: hvorfor disse to

Målt mot eksamensarkivet, ikke bare emnebeskrivelsene:

| Emne | Volum | Eksamenssett i arkivet |
|---|---|---|
| `tdt4110` | ~1 375 plasser | **16 høst, 0 vår** |
| `med1100` | 275 plasser | høst + vår, 1. semester |

**`nokut-afb` ble valgt bort** til tross for størst volum (~6 000 kandidater/år).
Filnavnene viser at hovedsesjonen er i april: 14 sett i april/mai mot 10 i
desember. Den er et vårfag i praksis og hører hjemme før jul, ikke nå.

`econ2130` («emnet gis kun om våren»), `in1010` og `econ1410` er ute av samme
grunn — analysene og settene viser rene vårfag.

# Autonom byggekjøring — seks høyskolebøker

**Startet:** 28. juli 2026. Produkteier på ferie, sjekker inn via remote.
**Oppdateres av:** byggelederen (hovedøkta), etter hver fullførte fase.

Fokus valgt av produkteier: **høstsemesterfag**. Begge emnene er 1. semester
og undervises til høsten — belegg i valgnotatet nederst.

---

## Status

| Bok | Lærested | Filer | Steg 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| `tdt4110` | NTNU | 47/47 | ✅ | ✅ | ✅ | ✅ |
| `med1100` | UiO | 63/63 | ✅ | ✅ | ✅ | ✅ |
| `in2010` | UiO | 42/42 | ✅ | ✅ | ✅ | ✅ |
| `tma4135` | NTNU | 44/44 | ✅ | ✅ | ✅ | ✅ |
| `ma1301` | NTNU | 35/39 | ✅ | ⏳ | — | — |
| `tfy4115` | NTNU | 20/48 | ✅ | ⏳ | — | — |

**Fire bøker er wiret og live: 196 kapitler, 2 479 quiz, 2 629 flashcards.**
Alle fire har nå vært gjennom verifiseringsbølgen.

## ⚠ Venter på deg: én ting

**Ingenting er pushet.** Lokal `main` ligger **77 commits** foran `origin/main`,
inkludert alle fire bøkene. Jeg holder pushen tilbake med vilje: en push
deployer til skolesaga.no, og går noe galt mens du er utilgjengelig, står
produksjonen nede uten at noen kan rulle tilbake. Alt er gatet, bygd og
prod-curl-verifisert lokalt, så det ligger trygt og venter.

Si «push» når du vil ha det ut.

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

**30. juli, verifiseringsbølgen fant to live-feil** — `in2010` hadde 12
quizforklaringer som pekte på et alternativs PLASSERING («det siste alternativet
er hashtabellens kjøretid»). Alternativene stokkes ved kjøretid, så leseren fikk
en forklaring om et tilfeldig svar. Feilen sto i den wirete `quiz-data-in2010.ts`,
ikke i kapittelfilene — en sondering som bare leser `chapters/` melder null.
`tma4135-9-3` hadde et løsningsfragment (`b[n-1] -= 1.0`) i et ```python-gjerde;
utskriftsporten kjører hver slik blokk og fikk NameError. Endret til ```text
framfor ```py, som ville sneket forbi porten og uthulet den for alle senere
bøker. Commit `8447cd1c7`. Alle åtte porter grønne for begge bøker, build
fullført, prod-curl bekrefter de rettede forklaringene i servert HTML.

**30. juli, samme port avdekket 774 treff i `in1020` — en live bok** — Del 3–5
ble ryddet 26. juli, men Del 0–2 ble aldri gjort: 15 kapitler, 774
posisjonsreferanser. Verifiserte premisset i kildekoden selv
(`quiz-client.tsx:71`) før jeg satte tre agenter på omskrivingen, siden
kostnaden er høy. Agentene redigerer utdratte fragmenter i scratchpad — alle 774
ligger i ÉN fil, så parallelle agenter ville kollidert; byggelederen spleiser
tilbake.

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

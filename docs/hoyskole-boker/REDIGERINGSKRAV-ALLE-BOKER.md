# Redigeringskrav som gjelder SAMTLIGE høyskole- og universitetsbøker

Sammenstilt 10. august 2026 fra 2 411 commits (718 i høyskoleløypa).

Hensikten er å kunne stille ett spørsmål om en ny bok: **har den fått alt de
gamle har fått?** Hvert krav under har enten en port som håndhever det, eller en
markering av at det må leses av et menneske eller en agent.

Kildene er tre: de **feiende rettelsene** (én commit som rettet samme feil i
alle bøker samtidig), **studentpanelet** (fem bølger, feilklassene propagert til
malene), og **portfunnene** (feil oppdaget da en port ble skjerpet).

⚠ To ting denne lista IKKE er. Den er ikke fagfellevurdering — ingen port måler
om innholdet er faglig riktig. Og den er ikke komplett for den enkelte bok:
hver byggekontrakt har i tillegg sine egne fagporter (IPA i SPR, 1902-loven i
JUROFF1500, ordgrensen i EAST).

---

## A. Feiende rettelser — allerede kjørt på alle bøker

Disse er rettet på tvers av katalogen. En ny bok skal **fødes riktig**, ikke
rettes etterpå.

| # | Krav | Omfang da det ble rettet | Port |
|---|---|---|---|
| A1 | **Ingen byggespråk i underoverskrifter.** «Del 3 – teoridel», «Kapittel om X» o.l. er stillasord fra produksjonen, ikke noe leseren skal se. | 3 048 underoverskrifter i 34 bøker (684 høyskolefiler) | ✅ `sjekk-bok.py` (`BYGGESPRAK_*`) |
| A2 | **Boka påstår aldri hvor leseren har vært.** «Sist du var her», «som du sikkert husker», «vi så i forrige kapittel» — leseren kan ha begynt her. | 530 blokker i 30 bøker (421 høyskolefiler) | ✅ `sjekk-bok.py` (`LESEHISTORIKK`) |
| A3 | **`description` er REN TEKST.** Rå LaTeX og markdown i description havnet i Google-treffet. | 340 filer i 23 bøker (269 høyskolefiler) | ✅ `sjekk-bok.py` |
| A4 | **Fasiten er jevnt fordelt på a/b/c/d.** En student som mekanisk krysser samme bokstav skal ikke få uttelling. | 67 690 flervalg i 78 bøker omstokket, 35 % → 25 % per plass | ✅ `sjekk-fasitfordeling.py` |
| A5 | **Ingen linjeskift midt i setninger.** | 13 714 linjeskift i 857 kapitler, 58 bøker | ✅ `sjekk-latex.py` (delvis) |
| A6 | **Løkke-referanser med stor forbokstav og ingen hengende rester.** | 820 + 204 referanser, 297 + 92 filer | — les selv |
| A7 | **Deloppgaver a), b), c) på egen linje med fet merking** — aldri bak hverandre i løpende tekst, aldri romertall (i), (ii). | 4 bøker + restanseliste på 12 kapitler | ✅ `sjekk-bok.py` (`INLINE_SUBTASK`) |
| A8 | **«Løsningsforslag» → «løsninger skrevet av oss»** i alle bokbeskrivelser. Vi har ikke offisielle løsningsforslag; å si det ville vært en usann kildepåstand. | 296 steder i `textbook-courses-hoyskole.ts` + hardkodingen i `wire-bok.py` | ✅ hardkodet i `wire-bok.py` |
| A9 | **Norske tegn (ø, å, æ) skrevet riktig** — ikke oe/aa/ae. | 105 621 tegn i 97 bøker | — les selv |

⚠ **A5 har en historie verdt å kjenne:** hardbrekk-fiksen limte selv sammen
1 817 svaralternativer og 6 610 kodelinjer, og måtte rettes i to egne commits.
Se minnet «forankret erstatning» — søk-og-erstatt over kapitteldata har ødelagt
innhold tre ganger.

---

## B. Studentpanelets feilklasser — bølge 1–5

Fem paneler av simulerte studenttyper (skippertakeren, stryk-redde, vegreren,
toppjegeren, deltidsstudenten) leste bøkene. Feilklassene ble propagert til
`BYGGEKONTRAKT-MAL.md`, `BYGGEPLAN-MAL.md` og de tre DNA-filene.

**Ingen av disse har en port. Alle må leses.**

| # | Krav |
|---|---|
| B1 | **Læringsløkke Teori → Eksempel → Oppgave** i gjentatte små løkker gjennom delkapitlet — ikke all teori øverst og alle oppgaver nederst. `exercise` inline i `content[]`. |
| B2 | **Ingen usett forkunnskap.** Ingen oppgave får kreve et begrep, en regel eller en formel som ikke er introdusert tidligere. |
| B3 | **Nybegynner-inngang.** Hver kode, karakterbokstav og insider-term forklares ved FØRSTE bruk. Ingen kald kode i `competenceGoals` eller i første tekstboks. |
| B4 | **Del 0-pakken:** «Slik leser du denne boka»-boks (`text`/`tip`, ALDRI `definition` — ville endret flashcard-kvoten), «Lite tid?»-hurtigrute, deltidsrute 10–12 uker, kildenote for frekvens-empirien. |
| B5 | **Karakter-realisme.** «C er en god og vanlig karakter» eksplisitt. «Prioritet: perfekt» forbudt. Minst én autentisk B-/midtnivå-besvarelse; ved bestått/ikke-bestått én «bestått-på-marginen». |
| B6 | **Meta-fasit forbudt.** «En A-besvarelse ville ha drøftet …» erstattes av faktisk utskrevet drøftelse. |
| B7 | **Hint i alle `exercises`** — første hint = hjemmel/formel/første grep, ALDRI konklusjonen. Pluss én merket kald bank uten hint i eksamenstreningen. |
| B8 | **Signalbokser ETTER oppgaven**, aldri foran — et varsel om hva oppgaven tester røper svaret. |
| B9 | **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit. |
| B10 | **Hverdagsanker før apparatet** i abstrakte kjernetemaer; eksempler er verdens-caser, ikke «en medstudent skriver …». |
| B11 | **Øktmerking:** kapitler over 45 min har pausepunkter; lange modellbesvarelser har «— naturlig pausepunkt —». |
| B12 | **Bokas samlede oppslagskort** (jus: hjemmelskart · drøfting: «hvem eier hva» · regnefag: formel-minimum). |

---

## C. Sannferdighet — ufravikelig, fra produkteier

| # | Krav | Port |
|---|---|---|
| C1 | **Kildenoten nevner KUN kildetyper som faktisk finnes i fagets arkiv.** Skriv aldri «sensorveiledninger» hvis arkivet bare har oppgavesett. | — les selv |
| C2 | **Modellbesvarelser omtales som nyskrevne**, aldri som ekte studentbesvarelser. | — les selv |
| C3 | **«N av M sett» skal stemme eksakt** med belegg-listen som følger. | ⚠ delvis: `sjekk-tallpaastand.py` etterregner bare numeriske likhetskjeder |
| C4 | **Alle oppgaver/case/faktum NYSKREVNE.** Eksamenssjangrene er malen, aldri originaloppgavene. | — les selv |

⚠ C3 er den som har sviktet oftest i praksis: «6 av 19 sett» i UTV1000, «24 av
40» i JFEXFAC04, landtellingen i EAST, domskanonen i JUROFF1500 — fire målte
tilfeller der nevneren ikke var belagt. Tell alltid mappa selv.

---

## D. Quiz og flervalg

| # | Krav | Port |
|---|---|---|
| D1 | **`options[0]` er ALLTID fasiten** i quiz-filer (stokkes ved kjøretid). | ✅ konvensjon, `sjekk-alternativref.py` bygger på den |
| D2 | **Quizforklaringer viser ALDRI til et alternativs plassering** («det andre alternativet», «den siste distraktoren», «de to neste») — rekkefølgen stokkes. | ✅ `sjekk-alternativref.py` *(utvidet 10. aug)* |
| D3 | **Lengde-tell i BEGGE retninger** — fasiten verken systematisk lengst eller kortest. Tak 35 % hver vei. | ✅ `quiz-lengdesjekk.mjs` |
| D4 | **Lengderang** — fasiten klumper seg ikke på én av de fire rangene. Tak 40 %. *(nytt 10. aug 2026)* | ✅ `quiz-lengdesjekk.mjs` |
| D5 | **Ingen stubbe-distraktorer** — intet alternativ under halvparten av snittet til de tre andre. Tak 40 %. *(nytt 10. aug 2026)* | ✅ `quiz-lengdesjekk.mjs` |
| D6 | **Statiske flervalg i prøver har stokkede fasitbokstaver** — aldri «alle a», aldri «alle felle». | ✅ `sjekk-bok.py` (`ALL_A_FASIT`) + `sjekk-statiskflervalg.py` |
| D7 | **Distraktorer gjengir aldri bokas egne nyanser som «galt» svar.** | — les selv |
| D8 | **Kvote: minst 500 definisjoner og 500 quizspørsmål** per bok. | ✅ `sjekk-bok.py` |

⚠ **D4 og D5 er nye, og de gamle bøkene har dem ikke.** Katalogmålingen 10.
august: **86 av 190 filer** passerer den gamle porten og klumper seg likevel på
én lengderang. Verst er `econ1310` — fasiten er nest lengst i **87 % av 562
spørsmål** og aldri lengst. Dette er et åpent etterslep, ikke et løst problem.

⚠ **D2 har også et åpent etterslep, og det er den mest lærerike av dem alle.**
Porten meldte i månedsvis at hele katalogen var ren. Den var det ikke — den
hadde ordet «alternativ» hardkodet i hvert mønster, mens forfatterne skrev «den
siste **distraktoren**» og «de to **neste**». Da substantivet ble variert 10.
august, kom **75 ekte plasseringsreferanser** fram i bøker som var meldt grønne.

**Lærdommen gjelder alle porter i denne lista:** en port som leter etter én
formulering, måler om nettopp den formuleringen er ryddet bort — ikke om feilen
er borte. Tidligere ryddebølger fjernet akkurat det porten kjente igjen. Når du
skjerper en port, mål alltid katalogen på nytt: «OK» fra en snever port er ikke
belegg for at bøkene er rene.

⚠ **Samme dag ble en beslektet blindsone målt i `sjekk-latex.py`.** Bøker bygges
i git-arbeidstrær (`.claude/worktrees/bok-*`), og de har ikke `node_modules` —
bare hovedtreet har det. Porten hoppet derfor stille over KaTeX-rendringen
**nøyaktig der bøkene skrives**, og skrev «N matteuttrykk kontrollert» som om alt
var sjekket. Målt mot `tma4110` fra et arbeidstre: 20 250 uttrykk rapportert
kontrollert, null faktisk rendret. Den finner nå hovedtreets `node_modules` via
`git rev-parse --git-common-dir`.

**Generaliseringen er verdt å ta med videre:** en port som *degraderer stille* når
en forutsetning mangler, er farligere enn en som feiler. Får du «OK» fra en port,
sjekk at den faktisk kjørte det den sier den kjørte.

---

## E. Teknisk hygiene

| # | Krav | Port |
|---|---|---|
| E1 | Ingen rå LaTeX-kommandoer i prosa (leseren ser `\color{blue}`), og all matte skal faktisk rendre i KaTeX. | ✅ `sjekk-latex.py` *(worktree-fiks 10. aug)* |
| E2 | Ingen døde kryssbok-lenker; «kap. X.Y» er markdown-lenke, aldri død tekst. | ✅ `sjekk-bok.py` |
| E3 | Figurer må lastes opp til Supabase Storage — ligger de bare i git, gir de 404 i produksjon. | ✅ `sjekk-figurer.py` |
| E4 | Ber en oppgave om figur, SKAL løsningen vise faktisk SVG. | — les selv |
| E5 | Kodefag: hver `python`-blokk kjøres og utskriften verifiseres. | ✅ `sjekk-utskrift.py` + `sjekk-kode.py` |
| E6 | `SKJELETT.md` må være v3 — `wire-bok.py` finner ellers 0 kapitler. | ✅ `sjekk-skjelett.py` |
| E7 | Alle prøvekapitler har **fire** prøver (`wire-bok.py` hardkoder teksten). | — tell selv |

---

## Kjøreliste for en ny bok

```bash
python3 scripts/hoyskolebok/sjekk-skjelett.py <emne>      # før bygging
# … bygg …
# ⚠ TELL quiz-staging mot antall temakapitler FØR wiring —
#   JUROFF1500 ble wiret med 750 av 774 spørsmål, og porten var grønn likevel
python3 scripts/hoyskolebok/wire-bok.py <emne>
rm -rf src/lib/data/quiz-staging
python3 scripts/hoyskolebok/sjekk-bok.py <emne>
python3 scripts/hoyskolebok/sjekk-latex.py <emne>
python3 scripts/hoyskolebok/sjekk-alternativref.py <emne>
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py <emne>
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py <emne>
python3 scripts/hoyskolebok/sjekk-figurer.py <emne>
npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs <emne> --streng
npm run build && # prod-curl mot lokal prod-server
```

**Portene dekker A1–A5, A7–A8, D1–D6, D8 og E1–E3, E5–E6.**
**Alt i seksjon B, samt A6, A9, C1–C4, D7, E4 og E7, må leses av et menneske
eller en lese-agent.** Det er der studentpanelet fant nesten alt det fant.

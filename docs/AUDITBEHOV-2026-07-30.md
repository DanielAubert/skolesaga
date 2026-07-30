# Hvilke fag trenger audit mest — målt 30. juli 2026

Skrevet fordi spørsmålet «hvilke bøker har fått full audit?» ikke lot seg svare
på fra dokumentasjonen alene. Alle tall her er **målt i dataene**, ikke anslått.

## Kort svar

**81 av 113 bøker har ingen dokumentert dyp gjennomgang.** De automatiske portene
er grønne for alle (0 røde på latex og alternativref, 3 på fasitfordeling), men
portene måler form, ikke faglig innhold.

Og et funn som veier tyngre enn manglende audit:

> **80 av 111 bøker ligger under minstekravet på 500 flashcards.
> Seks har NULL.**

Kravet står i `../CLAUDE.md`: hvert fag med premium-innhold skal ha minst 500
quiz og minst 500 flashcards.

## Dekningskart

| dekning | bøker | hva den besto av |
|---|---|---|
| Skjelett-audit (8. juli) | 28 | 118 skjeletter deterministisk sveipet, 42 fag dyplest av 4 revisorer |
| Ungdomsskole-review | 3 | 403 funn, tier A+B fikset, merget som PR #1 |
| Lese-audit (juli) | 4 | jus1111, exphil03, stv1100, econ1310 lest lineært som nybegynner |
| **Ingen** | **81** | — |

Merk at skjelett-auditen gjennomgikk **skjelettene**, ikke de ferdig bygde
bøkene. For de 26 høyskolebøkene som er bygd etterpå, er byggeagentenes
egenkontroll (507, 887, 674, 321, 123 maskinkontroller) det som finnes.

## Prioritert liste

Rangert på: flashcard-underskudd × quiz-underskudd × andel oppgaver uten hint,
vektet med bokstørrelse og med 1,5× for bøker uten dokumentert gjennomgang.

| # | bok | kap | flashcards | quiz | oppg. uten hint |
|---|---|---|---|---|---|
| 1 | `fransk` | 416 | **180** | 1 414 | 51 % |
| 2 | `psykologi` | 180 | **43** | 1 087 | 95 % |
| 3 | `tysk` | 384 | **231** | 1 710 | 59 % |
| 4 | `it` | 162 | **94** | 799 | 96 % |
| 5 | `tif-vg1` | 110 | **0** | 698 | 100 % |
| 6 | `oks` | 60 | **0** | **180** | 100 % |
| 7 | `hov2` | 104 | **92** | **386** | 98 % |
| 8 | `im-vg1` | 110 | **32** | 855 | 95 % |
| 9 | `samfunnskunnskap` | 164 | **142** | 858 | 93 % |
| 10 | `mat` | 290 | **234** | 1 192 | 67 % |
| 11 | `bygg-anlegg-vg1` | 90 | **0** | 665 | 100 % |
| 12 | `spansk` | 384 | **258** | 1 408 | 48 % |

Seks bøker med **null** flashcards: `bygg-anlegg-vg1`, `fil`, `filosofi-etikk`,
`kjemi1`, `oks`, `tif-vg1`.

Verifisert mot prod-server: `/kjemi1/flashcards` og `/tif-vg1/flashcards` svarer
med 25 kB — tomt sideskall. Til sammenligning gir `/ma1301/flashcards` 750 kB.
Sidene er altså faktisk tomme for leseren, ikke bare tomme i dataene.

## Hva som driver rangeringen

**Flashcard-underskuddet** er det tyngste signalet, fordi det er et brudd på et
uttalt krav og fordi det er direkte synlig for en betalende bruker. Kortene
hentes av `getFlashcardDefinitions()` fra **toppnivå** `definition`-blokker med
`title`; narrativ-kapitler hoppes over.

**Den nærliggende hypotesen er testet og avkreftet.** Jeg antok at innholdet
fantes, men lå på feil nivå — nestet i `collapsible`-blokker der porten ikke ser
det. Målt: de seks null-bøkene har **null `definition`-blokker i det hele tatt**,
verken nestet eller på toppnivå. Dette er ekte manglende innhold, ikke feil
plassering, og må skrives.

Ett unntak, som er billig å hente: **199 definisjoner i korpuset mangler `title`**
og faller derfor stille ut av kortstokken. Det er bare 1 % samlet, men skjevt
fordelt — `psykologi` går fra 43 til 105 kort ved å gi de 62 titlene sine, og
`religion-etikk` fra 174 til 215. Ingen av dem kommer over 500 av det alene.

**Oppgaver uten hint** måler læringsløkka: kontrakten vil ha
Teori → Eksempel → Oppgave med hint. 100 % uten hint betyr at oppgavene er der,
men stillaset ikke er det. Ti bøker ligger på 100 %.

**Størrelse** vekter opp, men underordnet: `fransk` topper fordi den er stor
*og* har 180 kort på 416 kapitler, ikke bare fordi den er stor.

## Anbefalt rekkefølge

1. **De 199 definisjonene uten `title`.** Reint metadata-arbeid, ingen ny tekst.
   `psykologi` 43 → 105, `religion-etikk` 174 → 215, `fransk` 180 → 217.
   Gjør denne først fordi den er nesten gratis.
2. **De seks med null flashcards.** Mest synlig for bruker — sidene er tomme
   sideskall i dag. Dette er nyskriving; innholdet finnes ikke noe sted.
3. **`psykologi`, `it`, `im-vg1`** — store bøker med 43, 94 og 32 kort.
4. **Språkfagene `fransk`, `tysk`, `spansk`** — 1 184 kapitler til sammen, og
   ingen har vært gjennom noen gjennomgang. Størst samlet eksponering.
5. **De ti med 100 % oppgaver uten hint** — læringsløkke-ettermontering.

## Hva som IKKE er et problem

- **Portene:** 113 bøker, 0 røde på latex, 0 på alternativref. De tre røde på
  fasitfordeling er under arbeid.
- **Fasitfordelingen:** rebalansert 30. juli, fra 35 % på plass 2 til 25 % jevnt
  over 67 690 spørsmål. Null bøker over 45 %.
- **Quiz-dekningen** er stort sett god — 31 av 111 bøker under 500, mot 80 for
  flashcards.

## Forbehold

Rangeringen måler **målbare mangler**, ikke faglig riktighet. En bok kan ha 600
flashcards og likevel lære bort noe galt; det fanger bare en lesende revisor.
Ungdomsskole-reviewen fant 403 funn i bøker som passerte alle porter.

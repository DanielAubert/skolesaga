# Studentpanel juli 2026 — sluttrapport

20 simulerte studentgjennomganger (5 personas × 4 live bøker) med fiksebølge
etter hver lesebølge. Alle funn er fikset i bøkene (commit-kjeden c7258473 →
e019c489) og feilklassene propagert til pipelinen (README/DNA/maler/sjekk-bok),
så de 186 ventende skjelettene bygges riktig fra start. Bølge 6 (andrespråk)
ble droppet — løses av planlagt engelsk språkversjon.

## Metode

Hver persona «gjennomførte» faget med boka som eneste ressurs, i sin egen
lesestil, gjorde oppgaver/prøver, og rapporterte i jeg-form: likte / mislikte /
nesten-ga-opp / betalingsvilje / forventet karakter. Etter hver bølge: fikse-
bølge med 4 agenter (én per bok), verifisert mot kvalitetsporten (kvote-vern,
0 merknader) + tsc + build før commit.

| Bølge | Persona | Lesestil | Stresstester |
|---|---|---|---|
| 1 | Skippertak (5 dager) | Ikke-lineær, prøver først | Snarveier, må-stoff, reverse-engineering |
| 2 | Stryk-redd førstegen. | Lineær, alt, tør ikke hoppe | Trygghet, selvvurdering, angst-triggere |
| 3 | Vegrer (formel/§/abstraksjon/filosofi) | Lineær, hopper over «det skumle» | Intuisjon-først, ord-spor, relevans |
| 4 | Toppjeger (A-krav) | Grundig, etterprøver ALT | A-kriterier, faglig presisjon, tak |
| 5 | Voksen deltid (45-min kvelder) | Lineær i biter, glemmer mellom økter | Gjenopptak, øktdeling, tidsplaner |

## Dommen per bok (karakter studentene tror de får / betalingsvilje)

| Bok | B1 | B2 | B3 | B4 | B5 | Betalingsvilje |
|---|---|---|---|---|---|---|
| stv1100 | C/B | C→B | C/B | **A** | B | 49–600 kr |
| econ1310 | C/B | C/B (var E/D) | C (var D/E) | A (selv)/B (m/boka) | B | 149–600 kr |
| jus1111 | Bestått m/margin | Bestått | Bestått trygt | Bestått ++ (B+ karakterekv.) | Bestått god margin | 300–500 kr |
| exphil03 | C/B | C/B | **B** | A m/B-nedside | C→B | 49–500 kr |

**Ingen strøk. Alle 20 ville betalt.** 49 kr/mnd var «instant yes» hos samtlige
(→ docs/prising-strategi.md). Deltidssegmentet hadde høyest betalingsvilje som
gruppe («vi betaler selv») og bekreftet lydbok-piloten (exphil03) uoppfordret.

## De alvorligste funnene (alle fikset)

1. **econ tm<1-familien** (bølge 4): boka påsto ubetinget tm<1, «entydig»
   ΔT-fortegn, «multiplikator ≥ 1» og «uendret budsjettbalanse» — alle
   matematisk motbevist i bokas egen modell med akselerator. Fikset til
   betingede sannheter (tm<1 ⟺ b₁<(1−t)(1−c₁)) og omgjort til A-oppgaver;
   100 000 parametersett-verifisert.
2. **jus § 26-hullet** (bølge 4): flaggskips-A-besvarelsen misset sitt eget
   skjulte delspørsmål (tilvirkningskjøp → skjerpet hevingsterskel), og 2.4
   lærte motsatt regel. + § 67 (3) a/b-gloss blandet, fkjl. § 16-plassering
   utdatert etter 2024-loven, Alkejakt-dommen feilfremstilt som fritaksdom.
   Alt Lovdata-verifisert og rettet.
3. **Døde selvtester** (bølge 1/2/4): statisk flervalg med «alle a»-fasit
   (stv/exphil), «alle felle»-prøve (jus), signalbokser som spoilet drillen
   (jus 5.1). Fikset + maskinsjekk i porten.
4. **jus representantregel-motstrid + exphil feilnummer-korrupsjon**
   (lese-audit før panelet): kapittel/quiz lærte motsatt av prøven; «Typiske
   feil»-bokser brukte gale nummer mot registeret. Fikset.

## Mønstrene på tvers (nedfelt i pipelinen)

- **Bøkene underviser toppen godt men stresstester den aldri** (B4): alt
  medium-difficulty, resirkulerte spørsmål, formelaktige A-konklusjoner
  («X som hensyn, ikke hele moralen»), hint som røper struktur. → Kalde
  A-banker uten hint, skarp-konklusjon-modeller, nivå 2-selvretting,
  grensetilfelle-moduler med to motsatte A-landinger.
- **Det heltid klager på, redder deltid**: begrepsbanker/repetisjon/symbol-
  lister er «selve produktet» for den glemske kveldsleseren. Løsning = merking
  («flashcards — hopp trygt over ved førstegangslesing»), ALDRI sletting
  (definition-blokker er flashcard-kvoten).
- **Kveldsmodus** (B5): øktmerking per løkke, offisiell prøvedeling, gjøre-
  vs lese-tider, «Sist du var her»-formelbokser, deltidsruter, samlede
  oppslagskort (hjemmelskart/eksempelkort/formel-minimum).
- **Metaspråket var bøkenes svakeste side ved start** (C-porten-funnet):
  orienteringsboks, koder forklart ved første bruk, karakter-realisme («C er
  en god karakter»; «Prioritet: perfekt» forbudt), feilkode-gloss per kapittel.
- **Empiri må være etterprøvbar**: kildenoter for frekvenstall, tall = antall
  listede belegg, «lovnader» om innhold (figurer, nummererte feil) må holdes.
- **Vegrer-innganger virker**: intuisjon-før-symbol, hverdagsanker FØRST for
  abstrakte kjernetemaer, verdens-caser (ikke «en medstudent skriver …»),
  relevans-rammer («hvorfor dette ikke er tull»), figurer (econ: to studenter
  var nesten-avhopp på IS-RR-PK i ren prosa — 6 SVG-er bygget).

## Hva panelet validerte av tidligere fikser

Orienteringsboksene, kildenotene, hurtigrutene, karakter-realismen,
B-besvarelsen (stv), figurene (econ), lovhenvisningsboksen (jus),
innstegsoppgavene og «A ≈ C i lengde»-innsikten (exphil) ble alle spontant
navngitt som styrker av senere bølger — fiksesløyfen virker.

## Forretningsinnsikter (→ docs/prising-strategi.md)

- 49 kr/mnd all-access + 10 KI-klikk: validert; per-fag forkastet.
- Hint gratis (trakt mot fasit-muren); fasit bak mur; KI-vurdering på toppen.
- KI-sensoren løser panelets største udekkede behov («ingen kan vurdere MIN
  tekst») — nivå 2-rubrikkene fra B4 er ferdige vurderingskriterier.
- Lydbok-pilot exphil03 bekreftet av målgruppen (deltid/pendler).

## Gjenstående (bevisst utsatt)

- econ: fjerde øvingseksamen m/ny kalibrering (todo-fila).
- stv 2-4/2-5/2-6: pre-eksisterende id-kosmetikk (example vs. exercise-id).
- Mobil-/dark mode-lesekvalitet og lydversjon: produktbeslutninger, ikke
  bokinnhold.
- Prisnivåene bør A/B-testes mot ekte kjøp (panelet er simulert).

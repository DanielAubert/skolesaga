# Full kvalitetsvurdering av alle skjelettene (8. juli 2026)

Bestilt av bruker («gjør en kvalitetsvurdering på alle skjelettene»).
Dekker hele porteføljen: 118 skjeletter / 119 analyser. Transje 1–5 var
auditert før (AUDIT-2026-07-07, 32 fag; AUDIT-transje6-2026-07-08, 10 fag);
denne runden re-kjørte de deterministiske sjekkene på ALT og dyplesde de 42
transje 7-fagene med 4 Opus-revisorer (batch: matte+BI-regne 11, jus 10,
informatikk/teknologi 11, UiO-bredde 10). Alle funn er verifisert og de som
krevde fiks er rettet i samme økt.

## Deterministisk sveip (alle 118)
- **Port:** 115/118 KVALITETSPORT OK. De 3 avvikene er kjente før-v3-legacy
  (econ1310/jus1111 = live bøker, svmet1010 = pilot) — bøkene selv er riktige.
- **Kvoter:** alle ≥500-gulvet; median 572 quiz / 578 flashcards; kun 7 eldre
  transje 1/2-regnefag på gulvet (eksplisitt tillatt, friskmeldt i audit 1).
- **Struktur:** ingen duplikat-kapittel-id-er på tvers av alle fag; ingen
  lineær nummerering (unntatt jus1111-legacy); alle har prøve-/byggeseksjoner.
- **README-statustavle:** komplett etter at IN1140-raden ble lagt til
  (agenten døde på Opus-ukesgrensen etter skjelettet, før raden).

## Dyplesning transje 7 (42 fag, 4 Opus-revisorer)

### Sluttverdikt etter fiks
**Alle 42: GODKJENT eller GODKJENT MED MERKNAD.** 3 fag var «MÅ FIKSES» og
2 hadde innholdsfeil på moderat nivå — alle 5 er rettet, re-gatet grønt og
committet. Ingen gjenstående blokkerende funn i hele porteføljen.

### Kritiske funn (alle FIKSET)
1. **tma4110 — kryssbok-lenker systematisk feil.** ~8 lenker med feil
   tittel↔id (bl.a. «Komplekse tall» ankret til et R2-kapittel som ikke
   finnes; R2/LK20 har ikke komplekse tall). FIKS: alle 14 lenker rettet mot
   metadata-fasit eller konvertert til ærlig klartekst; maskinelt verifisert
   0 feil mot textbook-courses-metadata.
2. **fin3521-bi — formelfeil i Pugge-boks (kap. 5.2, PERFEKT-tema).**
   Markedspris etter kontantoppgjør manglet målets verdi $V_T$; regnekjeden
   begikk feilen og «selvkorrigerte» usanert. FIKS: formel rettet til
   $(V_A+V_T+S-\text{kontant})/N_A$, selvkorreksjonen sanert.
3. **jus5511 — feil dato for opphevelsen av aml. § 14-9 (2) f.** Skjelettet
   sa 1.1.2024; korrekt er **1.7.2022** (avslørt ved kryssjekk mot søsterboka
   org3620-bi som hadde riktig dato). FIKS: rettet 4 steder.

### Innholdsfunn på moderat nivå (alle FIKSET)
- **in1140:** kvote-regnefeil i «AUTORITATIV» Del 13-rad (58/30 → 50/20;
  totaler 724/628 → 716/618). — **fil1003:** Nagels moralske flaks oppgitt
  som tre typer; standard er fire (kausalflaks lagt til). — **jus3213:**
  søsterfaget feiletikettert JUS3211 → JUS3112 (4 steder inkl. analysen). —
  **tio4215:** prøvetall feildeklarert 32/8 deler → 36/9 deler (4 steder). —
  **bok3632-bi:** OFRS-glossar («etter skatt») motsa egen formelbruk →
  harmonisert til «før renter og skatt»; FIN3521-tabellen kildemerket
  (verifiser). — **bok3423-bi:** manglende prerequisite 7-2 på kap. 9.1. —
  **met2920-bi:** KI-warning-kapittelliste harmonisert {5.2, 7.1, 8.2}. —
  **sok3500-bi:** prosa-delsum 374 (62 %) → 356 (59 %). — **bok3532-bi:**
  karaktergrense-omregning eksplisitt begrenset til 240-poengssettet. —
  **tdt4102:** C++11 pinnet som målstandard (m/ smart-pointer-forbud i
  kopisemantikk-delene). — **tma4101/tma4121/met2910-bi:** metadata-tall
  (minutt-total, drill-/kapitteltelling) rettet.

### Falske alarmer (avvist etter verifikasjon)
- ling1100 «emneidentitet»: fagbeskrivelsen bekrefter at emnet ER
  «Innføring i semantikk og pragmatikk» — skjelettet er riktig.

## Det som ble bekreftet sterkt (på tvers av alle batch-rapportene)
- **Kvote-aritmetikken er nær plettfri:** alle autoritative summeringstabeller
  i alle 42 fag stemte eksakt mot per-kapittel-kvotene (unntakene var to
  bokførings-/telle-feil, ikke summeringsfeil). Alle prerequisite-grafer hele
  og asykliske.
- **Pensumdrift-håndteringen består i alle risikofagene:** tdt4160
  (IJVM→RISC-V), tdt4225 (foreldet arkiv→DDIA), tdt4137 (GOMS/KLM kun som
  historiske noter + grep-sjekk), it2805 (ubelagte moderne temaer lavkvotert
  og merket), tfe4171 (kode C→D-rekalibrering med puggeark).
- **Kalibreringstroskapen holder:** alle lastbærende sensornøkler gjenfunnet
  som drillmål/warnings (econ4260 «sjekk begge tilfeller», econ4220 regime B,
  econ2610 Solow-nedprioritering, kj1020 spektroskopi-nedtoning m.fl.).
- **BI-porteføljen er innbyrdes konsistent:** formelark-regimene riktig
  differensiert per fag; trekanten bok3423↔fin3521↔bok3632 uten motstridende
  temaeierskap; jus5511↔org3620 uten lekkasje (dokumentert ulik vinkling).
- **Faglige stikkprøver:** revisorene kontrollregnet titalls formler,
  regnekjeder og doktrinære påstander per batch — ut over funnene over var
  alt korrekt (inkl. alle etterregnede talleksempler i tdt4160/tdt4260/
  ttt4120 og paragrafapparatet i jus-fagene).

## Lærdommer tatt inn i løypa (for fase 3–6)
1. **Kryssbok-lenker skal maskinverifiseres** mot textbook-courses-metadata
   (id-eksistens OG tittelmatch) før skjelett godkjennes — tma4110 viste at
   «lenkene er verifisert»-påstander kan være falske. (Verktøysnutt brukt i
   denne auditen kan gjenbrukes.)
2. **Tverrbok-konsistenssjekk av delte rettsfakta:** samme lovendring/kode
   omtalt i flere bøker skal si det samme (jus5511/org3620-dato-avviket og
   jus3213-koden ble bare synlige i par-lesing).
3. **«Verifisert»-stempler skal selv stikkprøves i fase 6** — feil som
   hevder verifikasjon er farligst.
4. **Avledede prosa-tall (minutt-totaler, kapittel-/drill-tellinger) bør
   regenereres maskinelt** fra kapittelfeltene — de var eneste gjentakende
   feilkilde i ellers plettfri aritmetikk.

## Totalverdikt
**Porteføljen er byggeklar.** 118 skjeletter, 115 gjennom porten (3 kjente
legacy-avvik), alle kritiske og moderate innholdsfunn rettet og re-gatet i
denne økten. Kvaliteten er jevnt høy og konsistent med de to foregående
auditene; de nye lærdommene (1–4 over) er dokumentert her for fase 3–6.

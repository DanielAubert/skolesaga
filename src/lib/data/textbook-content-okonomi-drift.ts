/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Økonomi og driftsledelse (VG3 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Driftsøkonomi og lønnsomhet
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1: TextbookChapter = {
  id: 'okonomi-drift-1',
  courseId: 'okonomi-drift',
  chapterNumber: '1',
  title: 'Driftsøkonomi og lønnsomhet',
  description: 'Lær om driftsøkonomiske prinsipper, lønnsomhetsanalyser og hvordan bedrifter kan optimalisere sin økonomiske drift.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare sentrale driftsøkonomiske begreper og sammenhenger',
    'gjennomføre lønnsomhetsanalyser og tolke resultatene',
    'vurdere tiltak for å forbedre bedriftens lønnsomhet',
    'beregne og analysere dekningsbidrag og dekningsgrad',
  ],
  content: [
    {
      id: 'okonomi-drift-1-intro',
      type: 'text',
      content: `Driftsøkonomi handler om å forstå og optimalisere bedriftens daglige økonomiske drift. For å ta gode beslutninger må ledelsen ha innsikt i hvordan kostnader, inntekter og kapasitet henger sammen. I dette kapittelet lærer du de grunnleggende verktøyene for å analysere og forbedre en bedrifts lønnsomhet.`,
    },
    {
      id: 'okonomi-drift-1-def-1',
      type: 'definition',
      title: 'Driftsøkonomi',
      content: `Driftsøkonomi er den delen av bedriftsøkonomien som fokuserer på den daglige driften av virksomheten. Det handler om å utnytte ressursene best mulig for å oppnå lønnsomhet og effektivitet.`,
    },
    {
      id: 'okonomi-drift-1-text-1',
      type: 'text',
      title: 'Kostnadstyper',
      content: `For å analysere lønnsomhet må vi forstå hvordan kostnader oppfører seg:

**Faste kostnader**
- Endrer seg ikke med produksjonsvolumet
- Eksempler: Husleie, forsikring, lederlønninger, avskrivninger
- Må betales uansett om bedriften produserer eller ikke

**Variable kostnader**
- Endrer seg proporsjonalt med produksjonsvolumet
- Eksempler: Råvarer, emballasje, provisjon, strøm til produksjon
- Øker når produksjonen øker, reduseres når produksjonen synker

**Semivariable kostnader**
- Har både faste og variable elementer
- Eksempler: Telefonkostnader, vedlikehold, strøm (delvis fast, delvis variabel)`,
    },
    {
      id: 'okonomi-drift-1-def-2',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `Dekningsbidrag (DB) er differansen mellom salgsinntekter og variable kostnader. Det viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd.

**Formel:** DB = Salgsinntekt - Variable kostnader

**Per enhet:** DB per enhet = Salgspris per enhet - Variable kostnader per enhet`,
    },
    {
      id: 'okonomi-drift-1-example-1',
      type: 'example',
      title: 'Beregning av dekningsbidrag',
      content: `En bedrift produserer og selger sykler:
- Salgspris per sykkel: 8 000 kr
- Variable kostnader per sykkel: 5 000 kr (ramme, gir, hjul, montering)
- Faste kostnader per år: 600 000 kr

**Dekningsbidrag per sykkel:**
DB = 8 000 - 5 000 = **3 000 kr**

Hver solgte sykkel bidrar med 3 000 kr til å dekke de faste kostnadene.`,
    },
    {
      id: 'okonomi-drift-1-def-3',
      type: 'definition',
      title: 'Dekningsgrad',
      content: `Dekningsgrad (DG) viser dekningsbidraget som en prosentandel av salgsinntekten. Det forteller hvor stor del av hver krone som blir igjen til å dekke faste kostnader og fortjeneste.

**Formel:** DG = (Dekningsbidrag / Salgsinntekt) × 100 %

**Eller per enhet:** DG = (DB per enhet / Salgspris per enhet) × 100 %`,
    },
    {
      id: 'okonomi-drift-1-example-2',
      type: 'example',
      title: 'Beregning av dekningsgrad',
      content: `Med tallene fra sykkeleksempelet:
- Salgspris: 8 000 kr
- DB per enhet: 3 000 kr

**Dekningsgrad:**
DG = (3 000 / 8 000) × 100 % = **37,5 %**

Dette betyr at 37,5 % av hver salgskrone går til å dekke faste kostnader og overskudd. De resterende 62,5 % går til variable kostnader.`,
    },
    {
      id: 'okonomi-drift-1-def-4',
      type: 'definition',
      title: 'Nullpunkt (break-even)',
      content: `Nullpunktet er det produksjons- og salgsvolumet der bedriften verken går med overskudd eller underskudd. Ved nullpunktet er total dekningsbidrag akkurat lik de faste kostnadene.

**Formel i antall:** Nullpunkt = Faste kostnader / DB per enhet

**Formel i kroner:** Nullpunkt = Faste kostnader / Dekningsgrad`,
    },
    {
      id: 'okonomi-drift-1-example-3',
      type: 'example',
      title: 'Nullpunktsanalyse',
      content: `Fortsettelse av sykkeleksempelet:
- DB per sykkel: 3 000 kr
- Faste kostnader: 600 000 kr
- Dekningsgrad: 37,5 %

**Nullpunkt i antall sykler:**
Nullpunkt = 600 000 / 3 000 = **200 sykler**

**Nullpunkt i salgskroner:**
Nullpunkt = 600 000 / 0,375 = **1 600 000 kr**

Bedriften må selge 200 sykler (til en verdi av 1,6 mill. kr) for å gå i null.`,
    },
    {
      id: 'okonomi-drift-1-text-2',
      type: 'text',
      title: 'Sikkerhetsmargin',
      content: `Sikkerhetsmarginen viser hvor mye salget kan synke før bedriften går med underskudd.

**Formel:** Sikkerhetsmargin = Faktisk salg - Nullpunktssalg

**I prosent:** Sikkerhetsmargin % = (Faktisk salg - Nullpunkt) / Faktisk salg × 100 %

En høy sikkerhetsmargin betyr at bedriften tåler svingninger i salget bedre.`,
    },
    {
      id: 'okonomi-drift-1-example-4',
      type: 'example',
      title: 'Beregning av sikkerhetsmargin',
      content: `Sykkelbedriften selger 300 sykler i året:
- Faktisk salg: 300 sykler = 2 400 000 kr
- Nullpunkt: 200 sykler = 1 600 000 kr

**Sikkerhetsmargin i antall:**
300 - 200 = **100 sykler**

**Sikkerhetsmargin i prosent:**
(300 - 200) / 300 × 100 % = **33,3 %**

Salget kan synke med inntil 33,3 % før bedriften går med underskudd.`,
    },
    {
      id: 'okonomi-drift-1-tip-1',
      type: 'tip',
      content: `For å forbedre lønnsomheten kan bedriften:
- Øke salgsprisen (øker DB per enhet og DG)
- Redusere variable kostnader (øker DB per enhet og DG)
- Redusere faste kostnader (senker nullpunktet)
- Øke salgsvolumet (gir høyere totalt DB)`,
    },
    {
      id: 'okonomi-drift-1-text-3',
      type: 'text',
      title: 'Lønnsomhetsmål',
      content: `Bedrifter bruker flere nøkkeltall for å måle lønnsomhet:

**Resultatgrad** = (Driftsresultat / Salgsinntekt) × 100 %
Viser hvor stor del av omsetningen som blir igjen som driftsoverskudd.

**Totalkapitalrentabilitet** = (Driftsresultat / Totalkapital) × 100 %
Viser avkastningen på all kapital som er investert i bedriften.

**Egenkapitalrentabilitet** = (Resultat etter skatt / Egenkapital) × 100 %
Viser avkastningen eierne får på sin investerte kapital.`,
    },
    {
      id: 'okonomi-drift-1-warning-1',
      type: 'warning',
      title: 'Viktig om kostnadsfordeling',
      content: `Når man analyserer lønnsomhet per produkt, må man være forsiktig med hvordan faste kostnader fordeles. En uheldig fordeling kan gi et feilaktig bilde av hvilke produkter som er lønnsomme. Dekningsbidraget per produkt er ofte et bedre styringsverktøy enn fullfordelt resultat.`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er dekningsbidrag?',
      options: [
        { id: 'a', text: 'Salgsinntekt minus alle kostnader', isCorrect: false },
        { id: 'b', text: 'Salgsinntekt minus variable kostnader', isCorrect: true },
        { id: 'c', text: 'Salgsinntekt minus faste kostnader', isCorrect: false },
        { id: 'd', text: 'Overskudd etter skatt', isCorrect: false },
      ],
      solution: 'Dekningsbidrag = Salgsinntekt - Variable kostnader. Det viser bidraget til å dekke faste kostnader og fortjeneste.',
    },
    {
      id: 'okonomi-drift-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken kostnad er typisk fast?',
      options: [
        { id: 'a', text: 'Råvarer', isCorrect: false },
        { id: 'b', text: 'Emballasje', isCorrect: false },
        { id: 'c', text: 'Husleie', isCorrect: true },
        { id: 'd', text: 'Provisjon til selgere', isCorrect: false },
      ],
      solution: 'Husleie er en fast kostnad som påløper uavhengig av produksjonsvolumet.',
    },
    {
      id: 'okonomi-drift-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En vare selges for 500 kr og har variable kostnader på 300 kr. Hva er dekningsgraden?',
      options: [
        { id: 'a', text: '60 %', isCorrect: false },
        { id: 'b', text: '40 %', isCorrect: true },
        { id: 'c', text: '200 %', isCorrect: false },
        { id: 'd', text: '166,7 %', isCorrect: false },
      ],
      solution: 'DG = (500 - 300) / 500 × 100 % = 200/500 × 100 % = 40 %',
    },
    {
      id: 'okonomi-drift-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har faste kostnader på 400 000 kr og dekningsbidrag per enhet på 200 kr. Hva er nullpunktet i antall enheter?',
      options: [
        { id: 'a', text: '1 000 enheter', isCorrect: false },
        { id: 'b', text: '2 000 enheter', isCorrect: true },
        { id: 'c', text: '4 000 enheter', isCorrect: false },
        { id: 'd', text: '800 enheter', isCorrect: false },
      ],
      solution: 'Nullpunkt = Faste kostnader / DB per enhet = 400 000 / 200 = 2 000 enheter',
    },
    {
      id: 'okonomi-drift-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift selger 5 000 enheter når nullpunktet er 4 000 enheter. Hva er sikkerhetsmarginen i prosent?',
      options: [
        { id: 'a', text: '25 %', isCorrect: false },
        { id: 'b', text: '20 %', isCorrect: true },
        { id: 'c', text: '80 %', isCorrect: false },
        { id: 'd', text: '1 000 %', isCorrect: false },
      ],
      solution: 'Sikkerhetsmargin % = (5 000 - 4 000) / 5 000 × 100 % = 1 000/5 000 × 100 % = 20 %',
    },
    {
      id: 'okonomi-drift-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skjer med nullpunktet dersom de variable kostnadene per enhet øker?',
      options: [
        { id: 'a', text: 'Nullpunktet synker', isCorrect: false },
        { id: 'b', text: 'Nullpunktet stiger', isCorrect: true },
        { id: 'c', text: 'Nullpunktet forblir uendret', isCorrect: false },
        { id: 'd', text: 'Kan ikke beregnes', isCorrect: false },
      ],
      solution: 'Når variable kostnader øker, synker dekningsbidraget per enhet. Da må bedriften selge flere enheter for å dekke de faste kostnadene, så nullpunktet stiger.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Kalkulasjon og prissetting
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2: TextbookChapter = {
  id: 'okonomi-drift-2',
  courseId: 'okonomi-drift',
  chapterNumber: '2',
  title: 'Kalkulasjon og prissetting',
  description: 'Lær å beregne produktkostnader og sette priser som sikrer lønnsomhet og konkurranseevne.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjennomføre selvkostkalkulasjoner og bidragskalkulasjoner',
    'forklare forskjellen mellom ulike kalkulasjonsmetoder',
    'sette priser basert på kostnader og markedsforhold',
    'vurdere prisdifferensiering og rabattordninger',
  ],
  content: [
    {
      id: 'okonomi-drift-2-intro',
      type: 'text',
      content: `Kalkulasjon handler om å beregne hva et produkt eller en tjeneste koster å produsere. Dette er grunnlaget for prissetting. En god kalkulasjon sikrer at prisen dekker alle kostnader og gir ønsket fortjeneste. I dette kapittelet lærer du de viktigste kalkulasjonsmetodene og hvordan de brukes i prissetting.`,
    },
    {
      id: 'okonomi-drift-2-def-1',
      type: 'definition',
      title: 'Kalkulasjon',
      content: `Kalkulasjon er beregning av kostnader knyttet til et produkt, en tjeneste eller et prosjekt. Formålet er å finne en pris som gir lønnsomhet og danne grunnlag for økonomiske beslutninger.`,
    },
    {
      id: 'okonomi-drift-2-text-1',
      type: 'text',
      title: 'To hovedmetoder for kalkulasjon',
      content: `**Selvkostkalkulasjon (fullkostmetoden)**
- Alle kostnader fordeles på produktene
- Både variable og faste kostnader inkluderes
- Gir full kostnadsdekning i prisen
- Brukes ofte for langsiktig prissetting

**Bidragskalkulasjon (dekningsbidragsmetoden)**
- Kun variable kostnader knyttes direkte til produktet
- Faste kostnader behandles som periodekostnader
- Gir fleksibilitet i prissetting
- Brukes ofte for kortsiktige beslutninger`,
    },
    {
      id: 'okonomi-drift-2-def-2',
      type: 'definition',
      title: 'Selvkost',
      content: `Selvkost er summen av alle kostnader som kan henføres til et produkt, inkludert en andel av de faste kostnadene. Selvkost skal dekke alle kostnader ved å produsere og selge produktet.

**Selvkost = Direkte materialer + Direkte lønn + Indirekte kostnader**`,
    },
    {
      id: 'okonomi-drift-2-text-2',
      type: 'text',
      title: 'Oppbygging av selvkostkalkyle',
      content: `En typisk selvkostkalkyle bygges opp slik:

| Post | Beskrivelse |
|---|---|
| Direkte materialer | Råvarer som inngår i produktet |
| + Direkte lønn | Arbeid direkte på produktet |
| = **Direkte tilvirkningskost** | |
| + Indirekte tilvirkningskostnader | Husleie fabrikk, avskrivninger, vedlikehold |
| = **Tilvirkningskost** | |
| + Salgs- og adm.kostnader | Markedsføring, administrasjon, lønn ledelse |
| = **Selvkost** | |
| + Fortjeneste | Ønsket overskudd |
| = **Salgspris ekskl. mva** | |`,
    },
    {
      id: 'okonomi-drift-2-example-1',
      type: 'example',
      title: 'Selvkostkalkyle',
      content: `En møbelbedrift produserer stoler. Kalkyle per stol:

| Post | Beløp |
|---|---|
| Direkte materialer (tre, skum, stoff) | 800 kr |
| Direkte lønn (snekker, trekker) | 400 kr |
| = Direkte tilvirkningskost | 1 200 kr |
| + Indirekte tilvirkningskost (50% av dir. lønn) | 200 kr |
| = Tilvirkningskost | 1 400 kr |
| + Salgs- og adm.kostnader (20% av tilv.kost) | 280 kr |
| = **Selvkost** | **1 680 kr** |
| + Fortjeneste (15% av selvkost) | 252 kr |
| = **Salgspris ekskl. mva** | **1 932 kr** |`,
    },
    {
      id: 'okonomi-drift-2-def-3',
      type: 'definition',
      title: 'Tilleggssatser',
      content: `Tilleggssatser brukes for å fordele indirekte kostnader på produktene. Vanlige fordelingsnøkler:

**Indirekte tilvirkningskostnader:** Fordeles ofte som % av direkte lønn eller maskintimer
**Salgs- og adm.kostnader:** Fordeles ofte som % av tilvirkningskost`,
    },
    {
      id: 'okonomi-drift-2-example-2',
      type: 'example',
      title: 'Beregning av tilleggssats',
      content: `En bedrift har følgende kostnader for året:
- Direkte lønn totalt: 2 000 000 kr
- Indirekte tilvirkningskostnader: 1 000 000 kr

**Tilleggssats for indirekte tilvirkningskostnader:**
Tilleggssats = (1 000 000 / 2 000 000) × 100 % = **50 %**

Når et produkt har direkte lønn på 400 kr, blir tillegget:
400 kr × 50 % = 200 kr`,
    },
    {
      id: 'okonomi-drift-2-text-3',
      type: 'text',
      title: 'Bidragskalkulasjon',
      content: `I bidragskalkulasjon beregner vi kun de variable kostnadene per produkt. Prisen settes slik at den gir et dekningsbidrag som skal dekke faste kostnader og fortjeneste.

**Fordeler:**
- Enklere å beregne
- Unngår vilkårlig fordeling av faste kostnader
- Gir bedre grunnlag for kortsiktige beslutninger
- Fleksibel prissetting

**Ulemper:**
- Sikrer ikke at alle kostnader dekkes
- Kan føre til for lave priser på sikt`,
    },
    {
      id: 'okonomi-drift-2-example-3',
      type: 'example',
      title: 'Bidragskalkyle',
      content: `Samme stoleksempel med bidragsmetoden:

| Post | Beløp |
|---|---|
| Direkte materialer | 800 kr |
| Direkte lønn | 400 kr |
| Variable indirekte kostnader | 100 kr |
| = **Variable kostnader** | **1 300 kr** |

Prissetting med ønsket dekningsgrad på 40 %:
Salgspris = Variable kostnader / (1 - DG)
Salgspris = 1 300 / (1 - 0,40) = 1 300 / 0,60 = **2 167 kr**

Dekningsbidrag = 2 167 - 1 300 = 867 kr per stol`,
    },
    {
      id: 'okonomi-drift-2-text-4',
      type: 'text',
      title: 'Prissettingsstrategier',
      content: `Valg av pris avhenger av flere faktorer:

**Kostnadsbasert prissetting**
- Selvkost + påslag
- Sikrer kostnadsdekning
- Tar ikke hensyn til marked

**Markedsbasert prissetting**
- Basert på konkurrenters priser
- Tar hensyn til kundenes betalingsvilje
- Krever god markedskunnskap

**Verdibasert prissetting**
- Basert på kundens opplevde verdi
- Kan gi høyere marginer
- Krever differensiering

**Penetrasjonsprising**
- Lav pris for å ta markedsandeler
- Bygger volum raskt
- Kan være tapsbringende på kort sikt

**Skumming**
- Høy pris ved lansering
- Høye marginer tidlig
- Pris senkes over tid`,
    },
    {
      id: 'okonomi-drift-2-note-1',
      type: 'note',
      title: 'Prisdifferensiering',
      content: `Prisdifferensiering betyr å ta ulike priser for samme produkt til ulike kundegrupper eller i ulike situasjoner:

- **Kundedifferensiering:** Student- og honnørrabatter
- **Tidsdifferensiering:** Happy hour, lavsesongpriser
- **Geografisk:** Ulike priser i ulike markeder
- **Kvantumsdifferensiering:** Rabatt ved kjøp av større volum`,
    },
    {
      id: 'okonomi-drift-2-warning-1',
      type: 'warning',
      title: 'Minstepris',
      content: `Ved kortsiktige beslutninger bør prisen minimum dekke de variable kostnadene. Dette kalles minstepris eller smertegrense. Under denne prisen taper bedriften penger på hvert solgte produkt. Merk at på lang sikt må prisen også dekke faste kostnader.`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedforskjellen mellom selvkost og bidragskalkulasjon?',
      options: [
        { id: 'a', text: 'Selvkost inkluderer bare variable kostnader', isCorrect: false },
        { id: 'b', text: 'Selvkost inkluderer både variable og faste kostnader', isCorrect: true },
        { id: 'c', text: 'Bidragskalkulasjon inkluderer faste kostnader', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
      ],
      solution: 'Selvkostkalkulasjon fordeler alle kostnader (inkl. faste) på produktene, mens bidragskalkulasjon kun inkluderer variable kostnader.',
    },
    {
      id: 'okonomi-drift-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er tilvirkningskost?',
      options: [
        { id: 'a', text: 'Kun direkte materialer', isCorrect: false },
        { id: 'b', text: 'Direkte kostnader pluss indirekte tilvirkningskostnader', isCorrect: true },
        { id: 'c', text: 'Alle kostnader inkludert fortjeneste', isCorrect: false },
        { id: 'd', text: 'Kun lønnskostnader', isCorrect: false },
      ],
      solution: 'Tilvirkningskost = Direkte materialer + Direkte lønn + Indirekte tilvirkningskostnader.',
    },
    {
      id: 'okonomi-drift-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Et produkt har variable kostnader på 600 kr. Bedriften ønsker en dekningsgrad på 30 %. Hva blir salgsprisen?',
      options: [
        { id: 'a', text: '780 kr', isCorrect: false },
        { id: 'b', text: '857 kr', isCorrect: true },
        { id: 'c', text: '900 kr', isCorrect: false },
        { id: 'd', text: '600 kr', isCorrect: false },
      ],
      solution: 'Salgspris = Variable kostnader / (1 - DG) = 600 / (1 - 0,30) = 600 / 0,70 = 857 kr',
    },
    {
      id: 'okonomi-drift-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har direkte lønn på 1 500 000 kr og indirekte tilvirkningskostnader på 600 000 kr. Hva er tilleggssatsen?',
      options: [
        { id: 'a', text: '250 %', isCorrect: false },
        { id: 'b', text: '40 %', isCorrect: true },
        { id: 'c', text: '60 %', isCorrect: false },
        { id: 'd', text: '150 %', isCorrect: false },
      ],
      solution: 'Tilleggssats = (600 000 / 1 500 000) × 100 % = 40 %',
    },
    {
      id: 'okonomi-drift-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er minstepris (smertegrense) ved kortsiktige prisbeslutninger?',
      options: [
        { id: 'a', text: 'Selvkost', isCorrect: false },
        { id: 'b', text: 'Tilvirkningskost', isCorrect: false },
        { id: 'c', text: 'Variable kostnader', isCorrect: true },
        { id: 'd', text: 'Faste kostnader', isCorrect: false },
      ],
      solution: 'Minstepris = Variable kostnader. Under denne prisen taper bedriften penger på hver enhet som selges.',
    },
    {
      id: 'okonomi-drift-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken prisstrategi innebærer å starte med høy pris og senke den over tid?',
      options: [
        { id: 'a', text: 'Penetrasjonsprising', isCorrect: false },
        { id: 'b', text: 'Skumming', isCorrect: true },
        { id: 'c', text: 'Kostnadsbasert prissetting', isCorrect: false },
        { id: 'd', text: 'Verdibasert prissetting', isCorrect: false },
      ],
      solution: 'Skumming (skimming) innebærer høy pris ved lansering for å maksimere inntektene fra de mest betalingsvillige kundene, før prisen senkes gradvis.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Produksjonsplanlegging
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_3: TextbookChapter = {
  id: 'okonomi-drift-3',
  courseId: 'okonomi-drift',
  chapterNumber: '3',
  title: 'Produksjonsplanlegging',
  description: 'Lær om effektiv planlegging og styring av produksjonsprosesser for å optimalisere ressursbruk og leveringsevne.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare prinsipper for produksjonsplanlegging',
    'beregne kapasitetsbehov og identifisere flaskehalser',
    'anvende ulike produksjonsprinsipper og -metoder',
    'forstå sammenhengen mellom produksjon, lager og leveringsservice',
  ],
  content: [
    {
      id: 'okonomi-drift-3-intro',
      type: 'text',
      content: `Produksjonsplanlegging handler om å bestemme hva som skal produseres, når det skal produseres og i hvilke mengder. God planlegging sikrer at kundene får det de bestiller til rett tid, samtidig som ressursene utnyttes effektivt. I dette kapittelet lærer du grunnleggende prinsipper og metoder for produksjonsplanlegging.`,
    },
    {
      id: 'okonomi-drift-3-def-1',
      type: 'definition',
      title: 'Produksjonsplanlegging',
      content: `Produksjonsplanlegging er prosessen med å planlegge og koordinere produksjonsaktiviteter for å møte etterspørselen med best mulig ressursbruk. Det omfatter langsiktig kapasitetsplanlegging, mellomlangsiktig produksjonsplanlegging og kortsiktig detaljplanlegging.`,
    },
    {
      id: 'okonomi-drift-3-text-1',
      type: 'text',
      title: 'Planleggingsnivåer',
      content: `**Strategisk planlegging (1-5 år)**
- Investeringer i ny kapasitet
- Lokaliseringsbeslutninger
- Grunnleggende teknologivalg

**Taktisk planlegging (3-18 måneder)**
- Produksjonsplaner
- Bemanning
- Innkjøpsavtaler

**Operativ planlegging (dager-uker)**
- Detaljert produksjonsplan
- Maskinallokering
- Arbeidslister`,
    },
    {
      id: 'okonomi-drift-3-def-2',
      type: 'definition',
      title: 'Kapasitet',
      content: `Kapasitet er den maksimale mengden produkter eller tjenester som kan produseres i en gitt periode med tilgjengelige ressurser.

**Teoretisk kapasitet:** Maksimal produksjon uten stopp
**Praktisk kapasitet:** Realistisk kapasitet med nødvendige stopp
**Utnyttelsesgrad:** Faktisk produksjon / Praktisk kapasitet × 100 %`,
    },
    {
      id: 'okonomi-drift-3-example-1',
      type: 'example',
      title: 'Kapasitetsberegning',
      content: `En maskin kan produsere 60 enheter per time.

**Teoretisk kapasitet per uke:**
60 enheter × 24 timer × 7 dager = 10 080 enheter

**Praktisk kapasitet (2 skift, 5 dager):**
60 enheter × 16 timer × 5 dager = 4 800 enheter

**Faktisk produksjon:** 3 600 enheter

**Utnyttelsesgrad:**
3 600 / 4 800 × 100 % = **75 %**`,
    },
    {
      id: 'okonomi-drift-3-def-3',
      type: 'definition',
      title: 'Flaskehals',
      content: `En flaskehals er den ressursen eller prosessen som begrenser total produksjonskapasitet. Flaskehalsen bestemmer gjennomstrømningen i hele produksjonssystemet. Å identifisere og utnytte flaskehalsen optimalt er kritisk for effektiv produksjon.`,
    },
    {
      id: 'okonomi-drift-3-text-2',
      type: 'text',
      title: 'Produksjonsprinsipper',
      content: `**Ordreproduksjon (Make-to-Order)**
- Produserer først etter kundeordre
- Ingen ferdigvarelager
- Lengre leveringstid
- Høy fleksibilitet

**Lagerproduksjon (Make-to-Stock)**
- Produserer til lager basert på prognoser
- Kort leveringstid
- Binder kapital i lager
- Risiko for ukurans

**Montering mot ordre (Assemble-to-Order)**
- Standardkomponenter på lager
- Ferdigmonteres ved ordre
- Balanse mellom fleksibilitet og leveringstid`,
    },
    {
      id: 'okonomi-drift-3-example-2',
      type: 'example',
      title: 'Valg av produksjonsprinsipp',
      content: `**Møbelfabrikk med tre produktlinjer:**

1. **Standardstoler** (høyt volum, forutsigbar etterspørsel)
   → Lagerproduksjon - produserer til lager for rask levering

2. **Spesialtilpassede kontormøbler**
   → Ordreproduksjon - hver ordre er unik

3. **Sofaer med valgfri farge/stoff**
   → Montering mot ordre - rammer på lager, trekk monteres ved bestilling`,
    },
    {
      id: 'okonomi-drift-3-def-4',
      type: 'definition',
      title: 'Syklustid og takttid',
      content: `**Syklustid:** Tiden det tar å fullføre én produksjonssyklus eller operasjon.

**Takttid:** Den tiden som er tilgjengelig per enhet for å møte kundeetterspørselen.

**Formel:** Takttid = Tilgjengelig produksjonstid / Etterspørsel`,
    },
    {
      id: 'okonomi-drift-3-example-3',
      type: 'example',
      title: 'Beregning av takttid',
      content: `En bedrift skal produsere 400 enheter per dag.
Tilgjengelig tid: 8 timer = 480 minutter

**Takttid:**
480 min / 400 enheter = **1,2 minutter per enhet**

Dette betyr at produksjonslinjen må fullføre én enhet hvert 72. sekund for å møte etterspørselen.`,
    },
    {
      id: 'okonomi-drift-3-text-3',
      type: 'text',
      title: 'Produksjonsmetoder',
      content: `**Serieproduksjon**
- Produserer samme produkt i serier
- Omstilling mellom serier
- Balanse mellom effektivitet og fleksibilitet

**Kontinuerlig produksjon**
- Samme produkt produseres hele tiden
- Svært effektivt
- Lite fleksibelt, høye oppstartskostnader

**Prosjektproduksjon**
- Unike, komplekse produkter
- Lang gjennomløpstid
- Krever god prosjektstyring

**Cellulær produksjon**
- Maskiner gruppert i celler
- Produserer produktfamilier
- Gir fleksibilitet og kort gjennomløpstid`,
    },
    {
      id: 'okonomi-drift-3-note-1',
      type: 'note',
      title: 'Just-in-Time (JIT)',
      content: `Just-in-Time er en produksjonsfilosofi som går ut på å produsere riktig mengde til riktig tid. Målet er å eliminere sløsing i form av lager, ventetid og overproduksjon. JIT krever:

- Pålitelige leverandører
- Høy kvalitet i alle ledd
- Fleksibel produksjon
- God kommunikasjon i verdikjeden`,
    },
    {
      id: 'okonomi-drift-3-tip-1',
      type: 'tip',
      content: `For å forbedre produksjonsplanleggingen:
- Analyser historiske data for bedre prognoser
- Identifiser og fokuser på flaskehalser
- Reduser omstillingstider
- Standardiser prosesser der mulig
- Bruk digitale verktøy for planlegging og oppfølging`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en flaskehals i produksjonen?',
      options: [
        { id: 'a', text: 'Den raskeste prosessen', isCorrect: false },
        { id: 'b', text: 'Ressursen som begrenser total kapasitet', isCorrect: true },
        { id: 'c', text: 'Den billigste maskinen', isCorrect: false },
        { id: 'd', text: 'Lageret for ferdigvarer', isCorrect: false },
      ],
      solution: 'En flaskehals er den ressursen eller prosessen som begrenser gjennomstrømningen i produksjonen.',
    },
    {
      id: 'okonomi-drift-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner ordreproduksjon (Make-to-Order)?',
      options: [
        { id: 'a', text: 'Produserer til lager basert på prognoser', isCorrect: false },
        { id: 'b', text: 'Produserer først etter at kundeordre er mottatt', isCorrect: true },
        { id: 'c', text: 'Kun standardprodukter', isCorrect: false },
        { id: 'd', text: 'Kort leveringstid', isCorrect: false },
      ],
      solution: 'Ordreproduksjon starter produksjon først etter at en kundeordre er mottatt, noe som gir lengre leveringstid men ingen ferdigvarelager.',
    },
    {
      id: 'okonomi-drift-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En maskin kan produsere 100 enheter per time og kjører 8 timer per dag. Praktisk kapasitet er 700 enheter. Hva er utnyttelsesgraden hvis faktisk produksjon er 560 enheter?',
      options: [
        { id: 'a', text: '70 %', isCorrect: false },
        { id: 'b', text: '80 %', isCorrect: true },
        { id: 'c', text: '56 %', isCorrect: false },
        { id: 'd', text: '125 %', isCorrect: false },
      ],
      solution: 'Utnyttelsesgrad = Faktisk produksjon / Praktisk kapasitet × 100 % = 560 / 700 × 100 % = 80 %',
    },
    {
      id: 'okonomi-drift-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har 450 minutter tilgjengelig tid per dag og skal produsere 150 enheter. Hva er takttiden?',
      options: [
        { id: 'a', text: '3 minutter per enhet', isCorrect: true },
        { id: 'b', text: '0,33 minutter per enhet', isCorrect: false },
        { id: 'c', text: '300 minutter', isCorrect: false },
        { id: 'd', text: '450 minutter', isCorrect: false },
      ],
      solution: 'Takttid = Tilgjengelig tid / Etterspørsel = 450 min / 150 enheter = 3 minutter per enhet',
    },
    {
      id: 'okonomi-drift-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er hovedmålet med Just-in-Time (JIT) produksjon?',
      options: [
        { id: 'a', text: 'Maksimere lagerbeholdningen', isCorrect: false },
        { id: 'b', text: 'Eliminere sløsing og produsere riktig mengde til riktig tid', isCorrect: true },
        { id: 'c', text: 'Produsere så mye som mulig', isCorrect: false },
        { id: 'd', text: 'Ha lange serier for å redusere omstillingstid', isCorrect: false },
      ],
      solution: 'JIT fokuserer på å eliminere alle former for sløsing (lager, ventetid, overproduksjon) ved å produsere akkurat det som trengs, når det trengs.',
    },
    {
      id: 'okonomi-drift-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken produksjonsmetode passer best for et skipsverft som bygger cruiseskip?',
      options: [
        { id: 'a', text: 'Lagerproduksjon', isCorrect: false },
        { id: 'b', text: 'Kontinuerlig produksjon', isCorrect: false },
        { id: 'c', text: 'Prosjektproduksjon', isCorrect: true },
        { id: 'd', text: 'Serieproduksjon', isCorrect: false },
      ],
      solution: 'Prosjektproduksjon passer for unike, komplekse produkter med lang gjennomløpstid, som cruiseskip.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Logistikk og innkjøp
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4: TextbookChapter = {
  id: 'okonomi-drift-4',
  courseId: 'okonomi-drift',
  chapterNumber: '4',
  title: 'Logistikk og innkjøp',
  description: 'Forstå hvordan effektiv logistikk og innkjøp kan redusere kostnader og forbedre kundeservice.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare logistikkens rolle i verdikjeden',
    'gjennomføre beregninger knyttet til lagerstyring',
    'vurdere og velge leverandører',
    'forstå sammenhengen mellom logistikk og konkurranseevne',
  ],
  content: [
    {
      id: 'okonomi-drift-4-intro',
      type: 'text',
      content: `Logistikk handler om å styre flyten av varer, informasjon og tjenester fra leverandør til sluttkunde. Effektiv logistikk og innkjøp er avgjørende for å holde kostnadene nede og levere riktig vare til riktig tid. I dette kapittelet lærer du om lagerstyring, innkjøpsprosesser og leverandørsamarbeid.`,
    },
    {
      id: 'okonomi-drift-4-def-1',
      type: 'definition',
      title: 'Logistikk',
      content: `Logistikk er planlegging, gjennomføring og kontroll av effektiv flyt og lagring av varer, tjenester og relatert informasjon fra opprinnelsespunkt til forbrukspunkt, med det formål å tilfredsstille kundens krav.`,
    },
    {
      id: 'okonomi-drift-4-text-1',
      type: 'text',
      title: 'Logistikkens elementer',
      content: `**Innkjøpslogistikk**
- Valg av leverandører
- Innkjøpsordre og oppfølging
- Varemottak og kontroll

**Intern logistikk**
- Materialflyt i produksjonen
- Internlager og buffere
- Produksjonsstyring

**Distribusjonslogistikk**
- Ferdigvarelager
- Ordrebehandling
- Transport til kunde

**Returlogistikk**
- Retur av defekte varer
- Resirkulering
- Emballasjeretur`,
    },
    {
      id: 'okonomi-drift-4-def-2',
      type: 'definition',
      title: 'Verdikjeden',
      content: `Verdikjeden beskriver alle aktiviteter fra råvare til ferdig produkt hos sluttkunde. Logistikk knytter sammen leddene i verdikjeden og sikrer effektiv flyt. God logistikk kan være et konkurransefortrinn.`,
    },
    {
      id: 'okonomi-drift-4-text-2',
      type: 'text',
      title: 'Lagerstyring',
      content: `Lagerstyring handler om å balansere mellom to motstridende mål:

**Høy servicegrad (store lagre)**
- Alltid varer på lager
- Rask levering
- Men: Binder kapital og gir lagerkostnader

**Lave kostnader (små lagre)**
- Lite bundet kapital
- Lave lagerkostnader
- Men: Risiko for tomme lagre og tapte salg

**Lagerkostnader omfatter:**
- Kapitalbinding (rentekostnad)
- Lagerlokaler
- Forsikring
- Svinn og ukurans
- Administrasjon`,
    },
    {
      id: 'okonomi-drift-4-def-3',
      type: 'definition',
      title: 'Bestillingspunkt og sikkerhetslager',
      content: `**Bestillingspunkt:** Det lagernivået der ny bestilling må sendes for å unngå å gå tom før varen ankommer.

**Sikkerhetslager:** En ekstra buffer for å beskytte mot usikkerhet i etterspørsel eller leveringstid.

**Formel:** Bestillingspunkt = Forbruk i ledetiden + Sikkerhetslager`,
    },
    {
      id: 'okonomi-drift-4-example-1',
      type: 'example',
      title: 'Beregning av bestillingspunkt',
      content: `En bedrift bruker 50 enheter per dag av en vare.
Ledetid fra leverandør: 5 dager
Sikkerhetslager: 100 enheter

**Forbruk i ledetiden:**
50 enheter × 5 dager = 250 enheter

**Bestillingspunkt:**
250 + 100 = **350 enheter**

Når lageret synker til 350 enheter, må ny bestilling sendes.`,
    },
    {
      id: 'okonomi-drift-4-def-4',
      type: 'definition',
      title: 'Økonomisk ordrekvantum (EOQ)',
      content: `Økonomisk ordrekvantum er den bestillingsmengden som minimerer summen av bestillingskostnader og lagerkostnader.

**Formel:** EOQ = √(2 × D × S / H)

Der:
- D = Årlig etterspørsel
- S = Bestillingskostnad per ordre
- H = Lagerkostnad per enhet per år`,
    },
    {
      id: 'okonomi-drift-4-example-2',
      type: 'example',
      title: 'Beregning av EOQ',
      content: `En bedrift har følgende data:
- Årlig etterspørsel (D): 10 000 enheter
- Bestillingskostnad (S): 200 kr per ordre
- Lagerkostnad (H): 10 kr per enhet per år

**EOQ:**
EOQ = √(2 × 10 000 × 200 / 10)
EOQ = √400 000
EOQ = **632 enheter**

Bedriften bør bestille ca. 632 enheter per gang for å minimere totalkostnadene.`,
    },
    {
      id: 'okonomi-drift-4-text-3',
      type: 'text',
      title: 'Innkjøpsprosessen',
      content: `En strukturert innkjøpsprosess sikrer gode kjøp:

1. **Behovsidentifikasjon** - Hva trenger vi?
2. **Spesifikasjon** - Krav til kvalitet, mengde, tid
3. **Leverandørsøk** - Finne potensielle leverandører
4. **Forespørsel/anbud** - Innhente tilbud
5. **Evaluering** - Sammenligne og vurdere
6. **Forhandling** - Pris, betingelser
7. **Valg av leverandør** - Beslutte
8. **Bestilling** - Formalisere avtalen
9. **Oppfølging** - Kontroll av levering
10. **Evaluering** - Vurdere leveransen`,
    },
    {
      id: 'okonomi-drift-4-text-4',
      type: 'text',
      title: 'Leverandørvurdering',
      content: `Ved valg av leverandør vurderes typisk:

**Pris**
- Enhetspris
- Rabatter
- Betalingsbetingelser

**Kvalitet**
- Produktkvalitet
- Sertifiseringer
- Kvalitetsstyring

**Leveringsevne**
- Ledetid
- Leveringspresisjon
- Fleksibilitet

**Service**
- Teknisk støtte
- Reklamasjonshåndtering
- Samarbeidsvilje

**Økonomisk soliditet**
- Finansiell styrke
- Langsiktig partner`,
    },
    {
      id: 'okonomi-drift-4-note-1',
      type: 'note',
      title: 'ABC-analyse',
      content: `ABC-analyse er en metode for å prioritere lagervarer:

**A-varer (ca. 20 % av varene, 80 % av verdien)**
- Tett oppfølging
- Hyppige bestillinger
- Nøye prognoser

**B-varer (ca. 30 % av varene, 15 % av verdien)**
- Moderat oppfølging
- Periodisk gjennomgang

**C-varer (ca. 50 % av varene, 5 % av verdien)**
- Enkel oppfølging
- Store bestillinger, sjeldne ordrer`,
    },
    {
      id: 'okonomi-drift-4-tip-1',
      type: 'tip',
      content: `Gode innkjøp krever:
- Langsiktige leverandørrelasjoner
- Tydelige spesifikasjoner
- Profesjonelle forhandlinger
- Systematisk oppfølging og evaluering
- Balanse mellom pris og totalkostnad`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med logistikk?',
      options: [
        { id: 'a', text: 'Å maksimere lagerbeholdningen', isCorrect: false },
        { id: 'b', text: 'Å sikre effektiv flyt av varer fra leverandør til kunde', isCorrect: true },
        { id: 'c', text: 'Å minimere antall leverandører', isCorrect: false },
        { id: 'd', text: 'Å eliminere alle lagre', isCorrect: false },
      ],
      solution: 'Logistikk handler om å styre flyten av varer, informasjon og tjenester effektivt fra opprinnelse til forbrukspunkt.',
    },
    {
      id: 'okonomi-drift-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er sikkerhetslager?',
      options: [
        { id: 'a', text: 'Lager som er låst inn i et sikkert rom', isCorrect: false },
        { id: 'b', text: 'Buffer for å beskytte mot usikkerhet i etterspørsel eller levering', isCorrect: true },
        { id: 'c', text: 'Det maksimale lagernivået', isCorrect: false },
        { id: 'd', text: 'Lager som aldri brukes', isCorrect: false },
      ],
      solution: 'Sikkerhetslager er en buffer for å unngå å gå tom ved uventet høy etterspørsel eller forsinket levering.',
    },
    {
      id: 'okonomi-drift-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En vare har forbruk på 30 enheter per dag, ledetid på 4 dager og sikkerhetslager på 50 enheter. Hva er bestillingspunktet?',
      options: [
        { id: 'a', text: '120 enheter', isCorrect: false },
        { id: 'b', text: '170 enheter', isCorrect: true },
        { id: 'c', text: '80 enheter', isCorrect: false },
        { id: 'd', text: '200 enheter', isCorrect: false },
      ],
      solution: 'Bestillingspunkt = Forbruk i ledetiden + Sikkerhetslager = (30 × 4) + 50 = 120 + 50 = 170 enheter',
    },
    {
      id: 'okonomi-drift-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I en ABC-analyse, hva kjennetegner A-varer?',
      options: [
        { id: 'a', text: 'De billigste varene', isCorrect: false },
        { id: 'b', text: 'Ca. 20 % av varene som utgjør ca. 80 % av verdien', isCorrect: true },
        { id: 'c', text: 'Varer som sjelden selges', isCorrect: false },
        { id: 'd', text: 'Ca. 50 % av varene', isCorrect: false },
      ],
      solution: 'A-varer er typisk 20 % av varene som står for 80 % av verdien (Pareto-prinsippet). Disse krever tett oppfølging.',
    },
    {
      id: 'okonomi-drift-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Årlig etterspørsel er 5 000 enheter, bestillingskostnad er 100 kr, og lagerkostnad er 5 kr per enhet per år. Hva er EOQ (avrundet)?',
      options: [
        { id: 'a', text: '200 enheter', isCorrect: false },
        { id: 'b', text: '447 enheter', isCorrect: true },
        { id: 'c', text: '1 000 enheter', isCorrect: false },
        { id: 'd', text: '632 enheter', isCorrect: false },
      ],
      solution: 'EOQ = √(2 × 5000 × 100 / 5) = √200 000 = 447 enheter',
    },
    {
      id: 'okonomi-drift-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken faktor er IKKE typisk del av en leverandørvurdering?',
      options: [
        { id: 'a', text: 'Leverandørens aksjekurs', isCorrect: true },
        { id: 'b', text: 'Leveringspresisjon', isCorrect: false },
        { id: 'c', text: 'Produktkvalitet', isCorrect: false },
        { id: 'd', text: 'Pris og betalingsbetingelser', isCorrect: false },
      ],
      solution: 'Aksjekurs er ikke et typisk kriterium. Man vurderer pris, kvalitet, leveringsevne, service og økonomisk soliditet.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Kvalitetsstyring
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_5: TextbookChapter = {
  id: 'okonomi-drift-5',
  courseId: 'okonomi-drift',
  chapterNumber: '5',
  title: 'Kvalitetsstyring',
  description: 'Lær om kvalitetsledelse, kvalitetssystemer og kontinuerlig forbedring for å sikre kundetilfredshet og effektiv drift.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare prinsipper for kvalitetsledelse',
    'beskrive kvalitetssystemer og standarder',
    'anvende verktøy for kvalitetsforbedring',
    'forstå sammenhengen mellom kvalitet og lønnsomhet',
  ],
  content: [
    {
      id: 'okonomi-drift-5-intro',
      type: 'text',
      content: `Kvalitet er et av de viktigste konkurranseparametrene for moderne bedrifter. God kvalitet gir fornøyde kunder, reduserer kostnader og styrker omdømmet. I dette kapittelet lærer du om systematisk kvalitetsarbeid og hvordan det kan forbedre bedriftens resultater.`,
    },
    {
      id: 'okonomi-drift-5-def-1',
      type: 'definition',
      title: 'Kvalitet',
      content: `Kvalitet defineres som i hvilken grad et produkt eller en tjeneste oppfyller kundens krav og forventninger. Kvalitet handler ikke bare om feilfrihet, men om total kundetilfredshet.

ISO 9000 definerer kvalitet som: "I hvilken grad en samling av iboende egenskaper oppfyller krav."`,
    },
    {
      id: 'okonomi-drift-5-text-1',
      type: 'text',
      title: 'Kvalitetsdimensjoner',
      content: `Kvalitet kan vurderes langs flere dimensjoner:

**Produktkvalitet**
- Ytelse - hovedfunksjonen
- Pålitelighet - feilfri over tid
- Holdbarhet - levetid
- Estetikk - utseende og design

**Tjenestekvalitet**
- Pålitelighet - levere som lovet
- Responsivitet - rask respons
- Kompetanse - faglig dyktighet
- Empati - individuell oppmerksomhet

**Prosesskvalitet**
- Effektivitet - ressursbruk
- Presisjon - nøyaktighet
- Fleksibilitet - tilpasningsevne`,
    },
    {
      id: 'okonomi-drift-5-def-2',
      type: 'definition',
      title: 'Kvalitetsledelse (TQM)',
      content: `Total Quality Management (TQM) er en ledelsesfilosofi som fokuserer på kontinuerlig forbedring av alle prosesser, med kundetilfredshet som hovedmål. TQM involverer alle medarbeidere og berører alle deler av organisasjonen.`,
    },
    {
      id: 'okonomi-drift-5-text-2',
      type: 'text',
      title: 'Prinsipper for kvalitetsledelse',
      content: `**1. Kundefokus**
Alt arbeid skal bidra til kundetilfredshet

**2. Ledelsens engasjement**
Ledelsen må gå foran og prioritere kvalitet

**3. Medarbeiderengasjement**
Alle bidrar til kvalitetsarbeidet

**4. Prosesstenkning**
Forstå og forbedre prosessene

**5. Systemtilnærming**
Se helheten, ikke bare enkeltelementer

**6. Kontinuerlig forbedring**
Alltid søke å bli bedre

**7. Faktabaserte beslutninger**
Bruke data og analyser

**8. Gjensidig fordelaktige leverandørforhold**
Samarbeid med leverandører om kvalitet`,
    },
    {
      id: 'okonomi-drift-5-def-3',
      type: 'definition',
      title: 'ISO 9001',
      content: `ISO 9001 er en internasjonal standard for kvalitetsstyringssystemer. Den spesifiserer krav til et ledelsessystem som sikrer at organisasjonen konsekvent leverer produkter og tjenester som oppfyller kundekrav og lovkrav. Sertifisering viser at bedriften har et fungerende kvalitetssystem.`,
    },
    {
      id: 'okonomi-drift-5-text-3',
      type: 'text',
      title: 'Kvalitetskostnader',
      content: `Kvalitetsarbeid har både kostnader og gevinster:

**Forebyggingskostnader**
- Kvalitetsplanlegging
- Opplæring
- Prosessforbedring
- Leverandørvurdering

**Kontrollkostnader**
- Inspeksjon og testing
- Kvalitetsrevisjoner
- Måleutstyr

**Interne feilkostnader**
- Vrak og omarbeid
- Reparasjoner
- Forsinkelser

**Eksterne feilkostnader**
- Reklamasjoner
- Garantireparasjoner
- Tapt omdømme
- Erstatningskrav

*Investering i forebygging reduserer feilkostnader betraktelig!*`,
    },
    {
      id: 'okonomi-drift-5-example-1',
      type: 'example',
      title: 'Kvalitetskostnader',
      content: `En bedrift har følgende kvalitetskostnader:

| Type | Beløp |
|---|---|
| Forebygging (opplæring, planlegging) | 50 000 kr |
| Kontroll (inspeksjon, testing) | 80 000 kr |
| Interne feil (vrak, omarbeid) | 120 000 kr |
| Eksterne feil (reklamasjoner) | 150 000 kr |
| **Totale kvalitetskostnader** | **400 000 kr** |

Ved å øke forebyggingskostnadene med 30 000 kr, kan bedriften potensielt redusere feilkostnadene med 100 000 kr - en nettogevinst på 70 000 kr.`,
    },
    {
      id: 'okonomi-drift-5-text-4',
      type: 'text',
      title: 'Verktøy for kvalitetsforbedring',
      content: `**PDCA-syklusen (Deming-hjulet)**
- Plan - Planlegg forbedring
- Do - Gjennomfør på liten skala
- Check - Vurder resultatene
- Act - Standardiser eller juster

**De 7 kvalitetsverktøyene**
1. Sjekklister
2. Histogram
3. Paretodiagram
4. Årsak-virkning-diagram (fiskebensdiagram)
5. Spredningsdiagram
6. Kontrolldiagram
7. Flytdiagram

**5S-metodikken**
- Sortere - fjern unødvendige ting
- Systematisere - organisér det som trengs
- Skinne - hold rent
- Standardisere - lag rutiner
- Selvdisiplin - oppretthold systemet`,
    },
    {
      id: 'okonomi-drift-5-note-1',
      type: 'note',
      title: 'Kontinuerlig forbedring (Kaizen)',
      content: `Kaizen er japansk og betyr "forbedring". Filosofien går ut på at små, kontinuerlige forbedringer over tid gir store resultater. Alle medarbeidere oppfordres til å foreslå forbedringer i sitt daglige arbeid. Dette skaper en kultur for læring og utvikling.`,
    },
    {
      id: 'okonomi-drift-5-tip-1',
      type: 'tip',
      content: `For å lykkes med kvalitetsarbeid:
- Start med kundens behov
- Involver alle medarbeidere
- Mål og følg opp resultater
- Feir forbedringer
- Lær av feil - ikke straff
- Vær tålmodig - kvalitetskultur tar tid å bygge`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan defineres kvalitet i ISO 9000?',
      options: [
        { id: 'a', text: 'At produktet er dyrt', isCorrect: false },
        { id: 'b', text: 'I hvilken grad egenskaper oppfyller krav', isCorrect: true },
        { id: 'c', text: 'At produktet har mange funksjoner', isCorrect: false },
        { id: 'd', text: 'At produktet er feilfritt', isCorrect: false },
      ],
      solution: 'ISO 9000 definerer kvalitet som "i hvilken grad en samling av iboende egenskaper oppfyller krav".',
    },
    {
      id: 'okonomi-drift-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står TQM for?',
      options: [
        { id: 'a', text: 'Total Quality Management', isCorrect: true },
        { id: 'b', text: 'Technical Quality Measurement', isCorrect: false },
        { id: 'c', text: 'Total Quantity Management', isCorrect: false },
        { id: 'd', text: 'Team Quality Monitoring', isCorrect: false },
      ],
      solution: 'TQM står for Total Quality Management - en ledelsesfilosofi som fokuserer på kontinuerlig forbedring.',
    },
    {
      id: 'okonomi-drift-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type kvalitetskostnad er reklamasjoner fra kunder?',
      options: [
        { id: 'a', text: 'Forebyggingskostnad', isCorrect: false },
        { id: 'b', text: 'Kontrollkostnad', isCorrect: false },
        { id: 'c', text: 'Intern feilkostnad', isCorrect: false },
        { id: 'd', text: 'Ekstern feilkostnad', isCorrect: true },
      ],
      solution: 'Reklamasjoner er eksterne feilkostnader - kostnader ved feil som oppdages etter at produktet har nådd kunden.',
    },
    {
      id: 'okonomi-drift-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig rekkefølge i PDCA-syklusen?',
      options: [
        { id: 'a', text: 'Plan - Do - Check - Act', isCorrect: true },
        { id: 'b', text: 'Plan - Design - Control - Act', isCorrect: false },
        { id: 'c', text: 'Prepare - Do - Check - Approve', isCorrect: false },
        { id: 'd', text: 'Plan - Deliver - Check - Adjust', isCorrect: false },
      ],
      solution: 'PDCA står for Plan (planlegg), Do (gjennomfør), Check (kontroller), Act (handle/standardiser).',
    },
    {
      id: 'okonomi-drift-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er hovedideen bak Kaizen?',
      options: [
        { id: 'a', text: 'Store, radikale endringer', isCorrect: false },
        { id: 'b', text: 'Små, kontinuerlige forbedringer', isCorrect: true },
        { id: 'c', text: 'Automatisering av alle prosesser', isCorrect: false },
        { id: 'd', text: 'Outsourcing av kvalitetsarbeid', isCorrect: false },
      ],
      solution: 'Kaizen handler om små, kontinuerlige forbedringer over tid, med involvering av alle medarbeidere.',
    },
    {
      id: 'okonomi-drift-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor kan økte forebyggingskostnader gi lavere totale kvalitetskostnader?',
      options: [
        { id: 'a', text: 'Fordi forebygging er gratis', isCorrect: false },
        { id: 'b', text: 'Fordi forebygging reduserer feilkostnader som ofte er mye høyere', isCorrect: true },
        { id: 'c', text: 'Fordi kunder ikke merker kvalitetsfeil', isCorrect: false },
        { id: 'd', text: 'Fordi kontrollkostnader forsvinner', isCorrect: false },
      ],
      solution: 'Investering i forebygging reduserer antall feil, og feilkostnader (spesielt eksterne) er ofte mye høyere enn forebyggingskostnader.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Prosjektledelse
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_6: TextbookChapter = {
  id: 'okonomi-drift-6',
  courseId: 'okonomi-drift',
  chapterNumber: '6',
  title: 'Prosjektledelse',
  description: 'Lær å planlegge, gjennomføre og avslutte prosjekter effektivt med god styring av tid, kostnader og kvalitet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare hva som kjennetegner et prosjekt',
    'planlegge prosjekter med aktiviteter, tid og ressurser',
    'anvende verktøy for prosjektstyring',
    'lede og følge opp prosjekter',
  ],
  content: [
    {
      id: 'okonomi-drift-6-intro',
      type: 'text',
      content: `Prosjektarbeid er en stadig viktigere arbeidsform i moderne organisasjoner. Et prosjekt er en midlertidig innsats for å skape et unikt resultat. God prosjektledelse sikrer at målet nås innenfor gitte rammer for tid, kostnad og kvalitet. I dette kapittelet lærer du grunnleggende prosjektmetodikk.`,
    },
    {
      id: 'okonomi-drift-6-def-1',
      type: 'definition',
      title: 'Prosjekt',
      content: `Et prosjekt er en midlertidig organisasjon etablert for å levere ett eller flere produkter i henhold til en avtalt business case.

**Kjennetegn:**
- Definert start og slutt
- Unikt resultat
- Tverrfaglig samarbeid
- Egne ressurser og budsjett
- Midlertidig organisering`,
    },
    {
      id: 'okonomi-drift-6-text-1',
      type: 'text',
      title: 'Prosjektets livssyklus',
      content: `Et prosjekt går gjennom flere faser:

**1. Initiering**
- Definere behov og mål
- Vurdere gjennomførbarhet
- Beslutte oppstart

**2. Planlegging**
- Detaljert planlegging
- Ressursallokering
- Risikovurdering

**3. Gjennomføring**
- Utføre planlagte aktiviteter
- Lede teamet
- Rapportere status

**4. Avslutning**
- Overlevere resultat
- Evaluere prosjektet
- Frigjøre ressurser`,
    },
    {
      id: 'okonomi-drift-6-def-2',
      type: 'definition',
      title: 'Prosjekttrekanten',
      content: `Prosjekttrekanten (jerntrean­gelet) illustrerer sammenhengen mellom prosjektets tre hovedparametere:

**Tid** - Når skal prosjektet være ferdig?
**Kostnad** - Hvor mye kan vi bruke?
**Omfang/Kvalitet** - Hva skal leveres, og med hvilken kvalitet?

Endring i én parameter påvirker de andre. Man kan sjelden få både raskere, billigere og bedre.`,
    },
    {
      id: 'okonomi-drift-6-text-2',
      type: 'text',
      title: 'Prosjektorganisering',
      content: `**Prosjekteier/styringsgruppe**
- Tar strategiske beslutninger
- Godkjenner planer og budsjett
- Håndterer eskalerte problemer

**Prosjektleder**
- Daglig ledelse
- Planlegging og oppfølging
- Rapportering
- Kommunikasjon

**Prosjektteam**
- Utfører arbeidet
- Bidrar med kompetanse
- Rapporterer til prosjektleder

**Interessenter**
- Påvirkes av prosjektet
- Må identifiseres og håndteres`,
    },
    {
      id: 'okonomi-drift-6-def-3',
      type: 'definition',
      title: 'WBS - Work Breakdown Structure',
      content: `WBS er en hierarkisk nedbrytning av alt arbeid som skal utføres i prosjektet. Det starter med hovedleveransen og brytes ned i mindre og mer håndterbare arbeidspakker.

WBS gir:
- Oversikt over alt arbeid
- Grunnlag for estimering
- Basis for ansvarsfordeling`,
    },
    {
      id: 'okonomi-drift-6-example-1',
      type: 'example',
      title: 'Eksempel på WBS',
      content: `**Prosjekt: Lansere ny nettbutikk**

1. Nettbutikk
   1.1 Design
       1.1.1 Grafisk profil
       1.1.2 Brukergrensesnitt
   1.2 Utvikling
       1.2.1 Frontend
       1.2.2 Backend
       1.2.3 Integrasjoner
   1.3 Testing
       1.3.1 Funksjonstesting
       1.3.2 Brukertesting
   1.4 Lansering
       1.4.1 Produksjonssetting
       1.4.2 Opplæring`,
    },
    {
      id: 'okonomi-drift-6-text-3',
      type: 'text',
      title: 'Gantt-diagram',
      content: `Gantt-diagram er et viktig verktøy for tidsplanlegging:

- Viser aktiviteter langs en tidslinje
- Viser varighet for hver aktivitet
- Viser avhengigheter mellom aktiviteter
- Viser fremdrift

**Fordeler:**
- Lett å forstå
- Gir god oversikt
- Identifiserer kritiske perioder

**Aktivitetsavhengigheter:**
- Slutt-til-start: B kan starte når A er ferdig
- Start-til-start: B kan starte når A starter
- Slutt-til-slutt: B kan avsluttes når A avsluttes`,
    },
    {
      id: 'okonomi-drift-6-def-4',
      type: 'definition',
      title: 'Kritisk sti',
      content: `Kritisk sti er den lengste sekvensen av avhengige aktiviteter i prosjektet. Den bestemmer prosjektets korteste mulige varighet. Forsinkelser på kritisk sti forsinker hele prosjektet.

Aktiviteter på kritisk sti har null slakk - de kan ikke forsinkes uten å forsinke prosjektet.`,
    },
    {
      id: 'okonomi-drift-6-example-2',
      type: 'example',
      title: 'Kritisk sti',
      content: `**Prosjekt med 5 aktiviteter:**

| Aktivitet | Varighet | Forgjenger |
|---|---|---|
| A | 3 dager | - |
| B | 2 dager | A |
| C | 4 dager | A |
| D | 2 dager | B |
| E | 1 dag | C, D |

**Mulige stier:**
- A → B → D → E = 3+2+2+1 = 8 dager
- A → C → E = 3+4+1 = 8 dager

Begge stier er kritiske (like lange). Forsinkelse på A, C eller E forsinker prosjektet.`,
    },
    {
      id: 'okonomi-drift-6-text-4',
      type: 'text',
      title: 'Risikostyring',
      content: `Risiko er usikkerhet som kan påvirke prosjektet negativt (eller positivt).

**Risikoprosessen:**
1. Identifiser risiko
2. Vurder sannsynlighet og konsekvens
3. Planlegg tiltak
4. Overvåk og håndter

**Risikostrategier:**
- **Unngå** - Fjern årsaken til risikoen
- **Redusere** - Mink sannsynlighet eller konsekvens
- **Overføre** - Forsikring, outsourcing
- **Akseptere** - Lev med risikoen`,
    },
    {
      id: 'okonomi-drift-6-note-1',
      type: 'note',
      title: 'Agile metoder',
      content: `Agile prosjektmetoder er et alternativ til tradisjonell planlegging:

- Iterativ utvikling i korte sprinter
- Hyppige leveranser
- Fleksibilitet for endringer
- Tett samarbeid med kunde
- Selvstyrte team

Passer best for prosjekter med usikre krav eller rask endring.`,
    },
    {
      id: 'okonomi-drift-6-tip-1',
      type: 'tip',
      content: `Suksessfaktorer for prosjekter:
- Klare mål og forventninger
- Engasjert prosjekteier
- Kompetent prosjektleder
- Realistisk planlegging
- God kommunikasjon
- Aktiv risikostyring
- Læring underveis`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner et prosjekt?',
      options: [
        { id: 'a', text: 'Permanent organisering og repeterende arbeid', isCorrect: false },
        { id: 'b', text: 'Midlertidig organisering og unikt resultat', isCorrect: true },
        { id: 'c', text: 'Daglig drift uten sluttdato', isCorrect: false },
        { id: 'd', text: 'Kun individuelle oppgaver', isCorrect: false },
      ],
      solution: 'Et prosjekt er midlertidig (har definert start og slutt) og skal levere et unikt resultat.',
    },
    {
      id: 'okonomi-drift-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser prosjekttrekanten?',
      options: [
        { id: 'a', text: 'Forholdet mellom risiko, kvalitet og kommunikasjon', isCorrect: false },
        { id: 'b', text: 'Sammenhengen mellom tid, kostnad og omfang/kvalitet', isCorrect: true },
        { id: 'c', text: 'De tre hovedfasene i et prosjekt', isCorrect: false },
        { id: 'd', text: 'Organisasjonsstrukturen', isCorrect: false },
      ],
      solution: 'Prosjekttrekanten viser hvordan tid, kostnad og omfang/kvalitet henger sammen - endring i én påvirker de andre.',
    },
    {
      id: 'okonomi-drift-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er WBS (Work Breakdown Structure)?',
      options: [
        { id: 'a', text: 'En metode for budsjettering', isCorrect: false },
        { id: 'b', text: 'Hierarkisk nedbrytning av prosjektarbeidet', isCorrect: true },
        { id: 'c', text: 'Et risikoanalyseverktøy', isCorrect: false },
        { id: 'd', text: 'En kommunikasjonsplan', isCorrect: false },
      ],
      solution: 'WBS er en hierarkisk nedbrytning av alt arbeid i prosjektet, fra hovedleveranse ned til arbeidspakker.',
    },
    {
      id: 'okonomi-drift-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er kritisk sti i et prosjekt?',
      options: [
        { id: 'a', text: 'Den billigste måten å gjennomføre prosjektet', isCorrect: false },
        { id: 'b', text: 'Den lengste sekvensen av avhengige aktiviteter', isCorrect: true },
        { id: 'c', text: 'Aktiviteter med høyest risiko', isCorrect: false },
        { id: 'd', text: 'Aktiviteter som kan utsettes', isCorrect: false },
      ],
      solution: 'Kritisk sti er den lengste kjeden av avhengige aktiviteter og bestemmer prosjektets korteste mulige varighet.',
    },
    {
      id: 'okonomi-drift-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Et prosjekt har aktivitet A (3 dager), B avhenger av A (2 dager), C avhenger av A (4 dager). Hva er prosjektets varighet?',
      options: [
        { id: 'a', text: '5 dager', isCorrect: false },
        { id: 'b', text: '7 dager', isCorrect: true },
        { id: 'c', text: '9 dager', isCorrect: false },
        { id: 'd', text: '6 dager', isCorrect: false },
      ],
      solution: 'B og C kan gjøres parallelt etter A. Kritisk sti er A → C = 3 + 4 = 7 dager (lengre enn A → B = 5 dager).',
    },
    {
      id: 'okonomi-drift-6-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken risikostrategi innebærer å tegne forsikring mot en hendelse?',
      options: [
        { id: 'a', text: 'Unngå', isCorrect: false },
        { id: 'b', text: 'Redusere', isCorrect: false },
        { id: 'c', text: 'Overføre', isCorrect: true },
        { id: 'd', text: 'Akseptere', isCorrect: false },
      ],
      solution: 'Å tegne forsikring er å overføre risikoen til en annen part (forsikringsselskapet).',
    },
  ],
};

// ============================================================================
// Kapittel 7: Personaladministrasjon
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_7: TextbookChapter = {
  id: 'okonomi-drift-7',
  courseId: 'okonomi-drift',
  chapterNumber: '7',
  title: 'Personaladministrasjon',
  description: 'Lær om rekruttering, personalforvaltning, arbeidsmiljø og hvordan medarbeidere er bedriftens viktigste ressurs.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare grunnleggende prinsipper for personalledelse',
    'beskrive rekrutteringsprosessen',
    'forstå arbeidsrettslige forhold',
    'vurdere tiltak for godt arbeidsmiljø og motivasjon',
  ],
  content: [
    {
      id: 'okonomi-drift-7-intro',
      type: 'text',
      content: `Mennesker er bedriftens viktigste ressurs. God personaladministrasjon sikrer at bedriften har riktig kompetanse, motiverte medarbeidere og et godt arbeidsmiljø. I dette kapittelet lærer du om hvordan bedrifter rekrutterer, utvikler og tar vare på sine ansatte.`,
    },
    {
      id: 'okonomi-drift-7-def-1',
      type: 'definition',
      title: 'Personaladministrasjon (HR)',
      content: `Personaladministrasjon eller Human Resources (HR) omfatter alle aktiviteter knyttet til å skaffe, utvikle, beholde og avvikle arbeidskraft i organisasjonen. Det handler om å balansere bedriftens behov med medarbeidernes interesser.`,
    },
    {
      id: 'okonomi-drift-7-text-1',
      type: 'text',
      title: 'HR-funksjoner',
      content: `**Rekruttering og ansettelse**
- Behovsanalyse
- Utlysning og utvelgelse
- Ansettelse og onboarding

**Kompetanseutvikling**
- Opplæring
- Karriereutvikling
- Talentutvikling

**Belønning og kompensasjon**
- Lønnsfastsettelse
- Incentiver og bonuser
- Goder og fordeler

**Arbeidsmiljø**
- HMS-arbeid
- Trivsel og kultur
- Konflikthåndtering

**Avvikling**
- Oppsigelser
- Nedbemanninger
- Pensjonering`,
    },
    {
      id: 'okonomi-drift-7-text-2',
      type: 'text',
      title: 'Rekrutteringsprosessen',
      content: `**1. Behovsanalyse**
- Hvilken kompetanse trenger vi?
- Kan behovet dekkes internt?

**2. Stillingsbeskrivelse**
- Arbeidsoppgaver
- Krav til kompetanse
- Rapporteringslinjer

**3. Utlysning**
- Intern/ekstern utlysning
- Valg av kanaler
- Utforming av annonse

**4. Utvelgelse**
- Gjennomgang av søknader
- Intervjuer
- Tester og referansesjekk

**5. Ansettelse**
- Tilbud og forhandling
- Arbeidskontrakt
- Oppstartsdato

**6. Onboarding**
- Introduksjonsprogram
- Opplæring
- Fadderordning`,
    },
    {
      id: 'okonomi-drift-7-def-2',
      type: 'definition',
      title: 'Arbeidskontrakt',
      content: `Arbeidskontrakt er en skriftlig avtale mellom arbeidsgiver og arbeidstaker som regulerer arbeidsforholdet. Den skal inneholde:

- Partenes identitet
- Arbeidssted
- Stillingstittel og arbeidsoppgaver
- Tiltredelsesdato
- Lønn og godtgjørelser
- Arbeidstid
- Ferie
- Oppsigelsesfrister`,
    },
    {
      id: 'okonomi-drift-7-text-3',
      type: 'text',
      title: 'Arbeidsmiljøloven',
      content: `Arbeidsmiljøloven (AML) regulerer arbeidsforhold i Norge:

**Arbeidstid**
- Normal arbeidstid: 40 timer/uke (37,5 med tariff)
- Maksimalt 9 timer per dag
- Rett til pauser
- Regler for overtid

**Ferie**
- 25 virkedager per år
- Rett til 3 uker sammenhengende om sommeren
- Feriepenger: 10,2 % av feriepengegrunnlaget

**Oppsigelse**
- Saklig grunn kreves
- Minimumsfrister i loven
- Drøftingsmøte før oppsigelse
- Fortrinnsrett ved nedbemanning

**HMS**
- Krav til forsvarlig arbeidsmiljø
- Verneombud
- Arbeidsmiljøutvalg (AMU)`,
    },
    {
      id: 'okonomi-drift-7-example-1',
      type: 'example',
      title: 'Oppsigelsesfrister',
      content: `Minstefrister etter arbeidsmiljøloven:

| Ansettelsestid | Oppsigelsesfrist |
|---|---|
| Under 5 år | 1 måned |
| 5-10 år | 2 måneder |
| Over 10 år | 3 måneder |
| Over 10 år + over 50 år | 4 måneder |
| Over 10 år + over 55 år | 5 måneder |
| Over 10 år + over 60 år | 6 måneder |

Fristene gjelder ved oppsigelse fra arbeidsgiver. Arbeidstaker har alltid 1 måneds frist.`,
    },
    {
      id: 'okonomi-drift-7-text-4',
      type: 'text',
      title: 'Motivasjon',
      content: `Motiverte medarbeidere yter bedre. Faktorer som påvirker motivasjon:

**Indre motivasjon**
- Meningsfylt arbeid
- Mestring og utvikling
- Autonomi og ansvar
- Tilhørighet

**Ytre motivasjon**
- Lønn og bonuser
- Forfremmelser
- Anerkjennelse
- Frynsegoder

**Maslows behovspyramide**
1. Fysiologiske behov (lønn til livsopphold)
2. Trygghet (jobbsikkerhet)
3. Sosiale behov (kollegaer, tilhørighet)
4. Anerkjennelse (ros, status)
5. Selvrealisering (utvikling, meningsfylt arbeid)`,
    },
    {
      id: 'okonomi-drift-7-def-3',
      type: 'definition',
      title: 'Arbeidsmiljø',
      content: `Arbeidsmiljø er de fysiske, psykiske og sosiale forholdene på arbeidsplassen. Et godt arbeidsmiljø:

- Forebygger skader og sykdom
- Fremmer trivsel og motivasjon
- Øker produktivitet
- Reduserer sykefravær og turnover`,
    },
    {
      id: 'okonomi-drift-7-note-1',
      type: 'note',
      title: 'Medarbeidersamtale',
      content: `Medarbeidersamtale er et viktig verktøy for personalledelse:

- Gjennomføres typisk årlig
- Strukturert samtale mellom leder og medarbeider
- Evaluering av foregående periode
- Mål og forventninger fremover
- Kompetanseutvikling
- Trivsel og arbeidsmiljø

Gir mulighet for toveis kommunikasjon og tilbakemelding.`,
    },
    {
      id: 'okonomi-drift-7-tip-1',
      type: 'tip',
      content: `For å beholde gode medarbeidere:
- Konkurransedyktig lønn
- Utviklingsmuligheter
- Meningsfylt arbeid
- God ledelse
- Fleksibilitet (hjemmekontor, fleksitid)
- Godt sosialt miljø
- Anerkjennelse og tilbakemelding`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er onboarding?',
      options: [
        { id: 'a', text: 'Prosessen med å si opp ansatte', isCorrect: false },
        { id: 'b', text: 'Introduksjon og opplæring av nyansatte', isCorrect: true },
        { id: 'c', text: 'Lønnsforhandlinger', isCorrect: false },
        { id: 'd', text: 'Medarbeidersamtale', isCorrect: false },
      ],
      solution: 'Onboarding er prosessen med å introdusere og integrere nyansatte i organisasjonen.',
    },
    {
      id: 'okonomi-drift-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange feriedager har arbeidstakere krav på etter ferieloven?',
      options: [
        { id: 'a', text: '20 virkedager', isCorrect: false },
        { id: 'b', text: '25 virkedager', isCorrect: true },
        { id: 'c', text: '30 virkedager', isCorrect: false },
        { id: 'd', text: '21 virkedager', isCorrect: false },
      ],
      solution: 'Ferieloven gir rett til 25 virkedager ferie (4 uker + 1 dag). Mange har 5 uker gjennom tariffavtale.',
    },
    {
      id: 'okonomi-drift-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er minste oppsigelsesfrist for en ansatt som har jobbet i 7 år?',
      options: [
        { id: 'a', text: '1 måned', isCorrect: false },
        { id: 'b', text: '2 måneder', isCorrect: true },
        { id: 'c', text: '3 måneder', isCorrect: false },
        { id: 'd', text: '14 dager', isCorrect: false },
      ],
      solution: 'Ved 5-10 års ansettelse er minste oppsigelsesfrist 2 måneder ved oppsigelse fra arbeidsgiver.',
    },
    {
      id: 'okonomi-drift-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er øverste nivå i Maslows behovspyramide?',
      options: [
        { id: 'a', text: 'Trygghet', isCorrect: false },
        { id: 'b', text: 'Sosiale behov', isCorrect: false },
        { id: 'c', text: 'Anerkjennelse', isCorrect: false },
        { id: 'd', text: 'Selvrealisering', isCorrect: true },
      ],
      solution: 'Selvrealisering er øverste nivå - behovet for å utvikle seg og nå sitt potensial.',
    },
    {
      id: 'okonomi-drift-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva kreves for at arbeidsgiver lovlig kan si opp en ansatt?',
      options: [
        { id: 'a', text: 'Ingen spesielle krav', isCorrect: false },
        { id: 'b', text: 'Saklig grunn i virksomhetens eller arbeidstakerens forhold', isCorrect: true },
        { id: 'c', text: 'Kun samtykke fra tillitsvalgt', isCorrect: false },
        { id: 'd', text: 'At den ansatte har vært syk', isCorrect: false },
      ],
      solution: 'Arbeidsmiljøloven krever saklig grunn for oppsigelse. Den må være begrunnet i virksomhetens, arbeidsgiverens eller arbeidstakerens forhold.',
    },
    {
      id: 'okonomi-drift-7-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er typisk forskjell mellom indre og ytre motivasjon?',
      options: [
        { id: 'a', text: 'Indre motivasjon kommer fra lønn, ytre fra interessant arbeid', isCorrect: false },
        { id: 'b', text: 'Indre motivasjon kommer fra selve arbeidet, ytre fra belønninger', isCorrect: true },
        { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
        { id: 'd', text: 'Ytre motivasjon er sterkere enn indre', isCorrect: false },
      ],
      solution: 'Indre motivasjon kommer fra selve arbeidet (mestring, mening), mens ytre motivasjon kommer fra eksterne belønninger (lønn, bonus).',
    },
  ],
};

// ============================================================================
// Kapittel 8: Strategisk planlegging
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8: TextbookChapter = {
  id: 'okonomi-drift-8',
  courseId: 'okonomi-drift',
  chapterNumber: '8',
  title: 'Strategisk planlegging',
  description: 'Forstå hvordan bedrifter utvikler langsiktige planer og strategier for å sikre konkurranseevne og vekst.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare betydningen av strategisk planlegging',
    'anvende verktøy for strategisk analyse',
    'beskrive ulike strategiske valg',
    'forstå sammenhengen mellom strategi og drift',
  ],
  content: [
    {
      id: 'okonomi-drift-8-intro',
      type: 'text',
      content: `Strategisk planlegging handler om å bestemme hvor bedriften skal, og hvordan den skal komme dit. Det innebærer å analysere omgivelsene, vurdere egne styrker og svakheter, og ta langsiktige valg om markeder, produkter og ressurser. I dette kapittelet lærer du grunnleggende strategiske verktøy og tilnærminger.`,
    },
    {
      id: 'okonomi-drift-8-def-1',
      type: 'definition',
      title: 'Strategi',
      content: `Strategi er et mønster av beslutninger og handlinger som bestemmer bedriftens langsiktige mål, retning og ressursallokering for å oppnå konkurransefortrinn.

Strategi handler om:
- Hvor skal vi konkurrere? (markeder, segmenter)
- Hvordan skal vi konkurrere? (differensiering, kostnader)
- Hva skal vi gjøre selv? (verdikjede)`,
    },
    {
      id: 'okonomi-drift-8-text-1',
      type: 'text',
      title: 'Strategiske nivåer',
      content: `**Konsernstrategi**
- Hvilke bransjer/markeder skal vi være i?
- Kjøp og salg av virksomheter
- Ressursfordeling mellom enheter

**Forretningsstrategi**
- Hvordan konkurrere i det enkelte marked?
- Differensiering eller kostnadsledelse
- Posisjonering mot konkurrenter

**Funksjonell strategi**
- Strategi for hver funksjon (markedsføring, produksjon, HR)
- Støtter forretningsstrategien
- Mer operativt fokus`,
    },
    {
      id: 'okonomi-drift-8-def-2',
      type: 'definition',
      title: 'Visjon og misjon',
      content: `**Visjon** beskriver en ønsket fremtidstilstand - hva bedriften ønsker å bli eller oppnå på lang sikt. Den skal inspirere og gi retning.

**Misjon** (formål) beskriver hvorfor bedriften eksisterer - hva den gjør, for hvem, og hvordan. Den avgrenser virksomheten.

**Verdier** er grunnleggende prinsipper som styrer atferd og beslutninger i organisasjonen.`,
    },
    {
      id: 'okonomi-drift-8-example-1',
      type: 'example',
      title: 'Visjon og misjon',
      content: `**IKEA:**
- Visjon: "Å skape en bedre hverdag for de mange menneskene"
- Misjon: "Å tilby et bredt utvalg av formsterke og funksjonelle hjeminnredningsprodukter til så lave priser at så mange som mulig har råd til å kjøpe dem"

**Tesla:**
- Visjon: "Å akselerere verdens overgang til bærekraftig energi"
- Misjon: "Å designe, utvikle, produsere og selge høyytelsesfulle, fullelektriske kjøretøy og energiløsninger"`,
    },
    {
      id: 'okonomi-drift-8-text-2',
      type: 'text',
      title: 'Strategiprosessen',
      content: `**1. Analyse av ekstern situasjon**
- Bransjeanalyse
- Konkurrentanalyse
- Trender og muligheter

**2. Analyse av intern situasjon**
- Ressurser og kompetanse
- Styrker og svakheter
- Økonomisk stilling

**3. Strategiformulering**
- Utvikle strategiske alternativer
- Vurdere og velge strategi
- Sette mål

**4. Implementering**
- Handlingsplaner
- Ressursallokering
- Organisering

**5. Evaluering og kontroll**
- Måle resultater
- Justere ved behov`,
    },
    {
      id: 'okonomi-drift-8-def-3',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `SWOT-analyse er et verktøy for å kartlegge bedriftens strategiske posisjon:

**Styrker (Strengths)** - Interne positive faktorer
**Svakheter (Weaknesses)** - Interne negative faktorer
**Muligheter (Opportunities)** - Eksterne positive faktorer
**Trusler (Threats)** - Eksterne negative faktorer

SWOT kombinerer intern og ekstern analyse for å identifisere strategiske alternativer.`,
    },
    {
      id: 'okonomi-drift-8-example-2',
      type: 'example',
      title: 'SWOT-analyse',
      content: `**SWOT for en lokal bakeri:**

| Styrker | Svakheter |
|---|---|
| Kvalitetsprodukter | Begrenset kapasitet |
| Lojale kunder | Lite markedsføring |
| Erfarne bakere | Ingen nettbutikk |

| Muligheter | Trusler |
|---|---|
| Økende interesse for lokalt | Supermarkedenes ferske avdeling |
| Bedriftsmarkedet (catering) | Råvareprisøkninger |
| Nettbestilling og levering | Arbeidskraftmangel |`,
    },
    {
      id: 'okonomi-drift-8-text-3',
      type: 'text',
      title: 'Porters fem krefter',
      content: `Porters femkraftsmodell analyserer konkurranseintensiteten i en bransje:

**1. Rivalisering mellom eksisterende aktører**
- Antall konkurrenter
- Bransjevekst
- Produktdifferensiering

**2. Trussel fra nye aktører**
- Inngangsbarrierer
- Kapitalkrav
- Stordriftsfordeler

**3. Trussel fra substitutter**
- Alternative løsninger
- Pris/ytelse for substitutter

**4. Kundenes forhandlingsmakt**
- Kundekonsentrasjon
- Byttekostnader
- Prisfølsomhet

**5. Leverandørenes forhandlingsmakt**
- Leverandørkonsentrasjon
- Unikhet i leveransen
- Byttekostnader`,
    },
    {
      id: 'okonomi-drift-8-def-4',
      type: 'definition',
      title: 'Porters generiske strategier',
      content: `Michael Porter identifiserte tre grunnleggende konkurransestrategier:

**Kostnadsledelse**
- Lavest kostnader i bransjen
- Konkurrer på pris
- Krever volum og effektivitet

**Differensiering**
- Unike produkter/tjenester
- Høyere pris aksepteres
- Krever innovasjon og merkevare

**Fokus (nisje)**
- Konsentrerer seg om et segment
- Kan kombineres med kostnad eller differensiering
- Dyp forståelse av segmentet`,
    },
    {
      id: 'okonomi-drift-8-example-3',
      type: 'example',
      title: 'Generiske strategier',
      content: `**Kostnadsledelse:**
Ryanair - lavest mulige kostnader, laveste priser

**Differensiering:**
Apple - premium produkter, høy pris, sterk merkevare

**Kostnadsfokus:**
IKEA - lave kostnader, men fokus på hjeminnredning

**Differensieringsfokus:**
Ferrari - premium sportsbiler for et smalt segment`,
    },
    {
      id: 'okonomi-drift-8-text-4',
      type: 'text',
      title: 'Vekststrategier',
      content: `Ansoffs vekstmatrise viser fire strategier for vekst:

**Markedspenetrasjon**
- Eksisterende produkter i eksisterende markeder
- Øke markedsandel
- Lavest risiko

**Produktutvikling**
- Nye produkter i eksisterende markeder
- Innovasjon og utvikling
- Moderat risiko

**Markedsutvikling**
- Eksisterende produkter i nye markeder
- Geografisk ekspansjon, nye segmenter
- Moderat risiko

**Diversifisering**
- Nye produkter i nye markeder
- Høyest risiko
- Relatert eller urelatert`,
    },
    {
      id: 'okonomi-drift-8-note-1',
      type: 'note',
      title: 'Balanced Scorecard',
      content: `Balanced Scorecard er et verktøy for å oversette strategi til målbare indikatorer:

**Finansielt perspektiv**
Hvordan ser vi ut for eierne?

**Kundeperspektiv**
Hvordan ser kundene oss?

**Interne prosesser**
Hva må vi være gode på?

**Læring og vekst**
Hvordan kan vi fortsette å forbedre oss?

Sikrer at strategi følges opp på flere dimensjoner, ikke bare økonomi.`,
    },
    {
      id: 'okonomi-drift-8-tip-1',
      type: 'tip',
      content: `For god strategisk planlegging:
- Involver ledelsen og nøkkelpersoner
- Balanser analyse med handling
- Vær realistisk om ressurser
- Kommuniser strategien tydelig
- Følg opp med konkrete handlingsplaner
- Vær villig til å justere underveis`,
    },
  ],
  exercises: [
    {
      id: 'okonomi-drift-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står S i SWOT-analyse for?',
      options: [
        { id: 'a', text: 'Strategy', isCorrect: false },
        { id: 'b', text: 'Strengths (styrker)', isCorrect: true },
        { id: 'c', text: 'Sales', isCorrect: false },
        { id: 'd', text: 'Substitutes', isCorrect: false },
      ],
      solution: 'SWOT står for Strengths (styrker), Weaknesses (svakheter), Opportunities (muligheter) og Threats (trusler).',
    },
    {
      id: 'okonomi-drift-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom visjon og misjon?',
      options: [
        { id: 'a', text: 'Visjon beskriver fremtidsmål, misjon beskriver hvorfor bedriften eksisterer', isCorrect: true },
        { id: 'b', text: 'Det er samme ting', isCorrect: false },
        { id: 'c', text: 'Misjon er langsiktig, visjon er kortsiktig', isCorrect: false },
        { id: 'd', text: 'Visjon handler om økonomi, misjon om kunder', isCorrect: false },
      ],
      solution: 'Visjon beskriver ønsket fremtidstilstand (hva vi vil bli), misjon beskriver formålet (hvorfor vi eksisterer).',
    },
    {
      id: 'okonomi-drift-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken av Porters fem krefter handler om fare for at nye aktører kommer inn i bransjen?',
      options: [
        { id: 'a', text: 'Rivalisering', isCorrect: false },
        { id: 'b', text: 'Trussel fra nye aktører', isCorrect: true },
        { id: 'c', text: 'Kundemakt', isCorrect: false },
        { id: 'd', text: 'Leverandørmakt', isCorrect: false },
      ],
      solution: 'Trussel fra nye aktører vurderer hvor lett det er for nye konkurrenter å entre bransjen.',
    },
    {
      id: 'okonomi-drift-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken generisk strategi passer best for en bedrift som konkurrerer på unike produkter og høy kvalitet?',
      options: [
        { id: 'a', text: 'Kostnadsledelse', isCorrect: false },
        { id: 'b', text: 'Differensiering', isCorrect: true },
        { id: 'c', text: 'Kostnadsfokus', isCorrect: false },
        { id: 'd', text: 'Ingen av disse', isCorrect: false },
      ],
      solution: 'Differensiering handler om å tilby unike produkter som kundene er villige til å betale mer for.',
    },
    {
      id: 'okonomi-drift-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'I Ansoffs matrise, hva kalles strategien der bedriften går inn i nye markeder med nye produkter?',
      options: [
        { id: 'a', text: 'Markedspenetrasjon', isCorrect: false },
        { id: 'b', text: 'Produktutvikling', isCorrect: false },
        { id: 'c', text: 'Markedsutvikling', isCorrect: false },
        { id: 'd', text: 'Diversifisering', isCorrect: true },
      ],
      solution: 'Diversifisering innebærer både nye produkter og nye markeder, og er strategien med høyest risiko.',
    },
    {
      id: 'okonomi-drift-8-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket perspektiv er IKKE en del av Balanced Scorecard?',
      options: [
        { id: 'a', text: 'Finansielt perspektiv', isCorrect: false },
        { id: 'b', text: 'Kundeperspektiv', isCorrect: false },
        { id: 'c', text: 'Konkurranseperspektiv', isCorrect: true },
        { id: 'd', text: 'Læring og vekst', isCorrect: false },
      ],
      solution: 'Balanced Scorecard har fire perspektiver: Finansielt, Kunde, Interne prosesser, og Læring og vekst. Konkurranseperspektiv er ikke et av dem.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const OKONOMI_DRIFT_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_DRIFT_1,
  CHAPTER_OKONOMI_DRIFT_2,
  CHAPTER_OKONOMI_DRIFT_3,
  CHAPTER_OKONOMI_DRIFT_4,
  CHAPTER_OKONOMI_DRIFT_5,
  CHAPTER_OKONOMI_DRIFT_6,
  CHAPTER_OKONOMI_DRIFT_7,
  CHAPTER_OKONOMI_DRIFT_8,
];

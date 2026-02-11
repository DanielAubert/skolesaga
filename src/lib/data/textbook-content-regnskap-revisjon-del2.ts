/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 2: Bokforing
 *
 * Kapittel 2.1-2.5
 *
 * LK20-kompetansemaal:
 * - gjore rede for bokforingslovens krav til dokumentasjon og oppbevaring
 * - bruke standard kontoplan NS 4102 til aa kontere transaksjoner
 * - anvende prinsippene for dobbelt bokholderi med debet og kredit
 * - handtere bilag i trad med god bokforingsskikk
 * - bokfore vanlige forretningshendelser i praksis
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Bokforingsloven
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2_1: TextbookChapter = {
  id: 'regnskap-revisjon-2-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2.1',
  title: 'Bokforingsloven',
  description: 'Bokforingsplikt, dokumentasjonskrav, oppbevaringsplikten og de 10 grunnleggende bokforingsprinsippene i bokforingsloven.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjore rede for hvem som har bokforingsplikt',
    'forklare kravene til dokumentasjon og oppbevaring',
    'kjenne til de 10 grunnleggende bokforingsprinsippene',
  ],
  keyTerms: [
    { term: 'Bokforingsplikt', definition: 'Lovpaalagt plikt til aa registrere og dokumentere okonomiske transaksjoner etter reglene i bokforingsloven' },
    { term: 'Bilag', definition: 'Dokument som bekrefter og dokumenterer en okonomisk transaksjon, for eksempel faktura, kvittering eller bankutskrift' },
    { term: 'Oppbevaringsplikt', definition: 'Plikten til aa ta vare paa regnskapsmateriale i minst 5 aar etter regnskapsaarets slutt' },
    { term: 'Bokforingsprinsipper', definition: 'De 10 grunnleggende kravene i bokforingsloven som all bokforing maa folge' },
    { term: 'Ajourhold', definition: 'Kravet om at bokforingen skal vaere oppdatert og ikke ligge for langt etter i tid' },
  ],
  content: [
    {
      id: 'rr-2-1-intro',
      type: 'text',
      content: `## Hva er bokforingsloven?

Bokforingsloven regulerer hvordan alle naeringsdrivende i Norge skal registrere og dokumentere sine okonomiske transaksjoner. Loven tredde i kraft i 2005 og gjelder for alle som har bokforingsplikt.

I dette kapittelet skal du laere:
- Hvem som har bokforingsplikt
- Hvilke krav som stilles til dokumentasjon
- Reglene for oppbevaring av regnskapsmateriale
- De 10 grunnleggende bokforingsprinsippene`,
    },
    {
      id: 'rr-2-1-def-bokforingsplikt',
      type: 'definition',
      title: 'Bokforingsplikt',
      content: '**Bokforingsplikt** betyr at virksomheten er palagt aa registrere alle okonomiske hendelser i et ordnet system, dokumentere dem med bilag, og oppbevare materialet i henhold til loven. Bokforingsplikten gjelder for alle som har regnskapsplikt, og for enhver naeringsdrivende med omsetning over grenseverdiene.',
    },
    {
      id: 'rr-2-1-hvem',
      type: 'text',
      content: `### Hvem har bokforingsplikt?

Bokforingsplikten gjelder for:

**Alle regnskapspliktige foretak:**
- Aksjeselskaper (AS)
- Allmennaksjeselskaper (ASA)
- Samvirkeforetak
- Stiftelser

**Andre naeringsdrivende:**
- Enkeltpersonforetak med eiendeler over 20 millioner kr eller mer enn 20 ansatte
- Ansvarlige selskaper (ANS/DA)
- Alle som er merverdiavgiftspliktige

Det betyr i praksis at de aller fleste virksomheter i Norge har bokforingsplikt.`,
    },
    {
      id: 'rr-2-1-dokumentasjon',
      type: 'text',
      content: `### Krav til dokumentasjon

Bokforingsloven stiller strenge krav til dokumentasjon av transaksjoner.

**Salgsdokumentasjon (utgaaende faktura):**
- Dato og fakturanummer
- Selgers navn, adresse og organisasjonsnummer
- Kjopers navn og adresse
- Beskrivelse av varen eller tjenesten
- Antall, pris og totalbelop
- Merverdiavgift spesifisert

**Kjopsdokumentasjon (innkommende faktura):**
- Tilsvarende opplysninger som for salgsdokumentasjon
- Maa kunne kobles til den bokforte transaksjonen

**Eksempel:** En faktura fra Kontorutstyr AS paa kr 12 500 ekskl. mva for kontorstol. Fakturaen maa inneholde alle paakrevde opplysninger for aa vaere gyldig som bilag.`,
    },
    {
      id: 'rr-2-1-oppbevaring',
      type: 'text',
      content: `### Oppbevaringsplikten

Regnskapsmateriale skal oppbevares ordnet og sikret mot uautorisert tilgang, endring og tap.

**Oppbevaringstider:**

| Materiale | Oppbevaringstid |
|-----------|-----------------|
| Aarsregnskap og aarsberetning | 5 aar |
| Bokforingsspesifikasjoner | 5 aar |
| Dokumentasjon av bokforte opplysninger (bilag) | 5 aar |
| Dokumentasjon av balansen (avstemminger) | 5 aar |
| Nummererte brev fra revisor | 5 aar |
| Avtaler og kontrakter | 5 aar |
| Korrespondanse med vesentlig informasjon | 3,5 aar |
| Prosjektregnskap | 5 aar |

Oppbevaringen kan vaere digital, men maa oppfylle krav til sikkerhet og lesbarhet.`,
    },
    {
      id: 'rr-2-1-10-prinsipper',
      type: 'text',
      title: 'De 10 grunnleggende bokforingsprinsippene',
      content: `Bokforingsloven fastsetter 10 grunnleggende prinsipper som all bokforing maa folge:

1. **Regnskapsystem** - Bokforingen skal skje i et ordnet regnskapsystem
2. **Fullstendighet** - Alle transaksjoner skal registreres
3. **Realitet** - Bare reelle transaksjoner skal bokfores
4. **Noeyaktighet** - Transaksjoner skal registreres korrekt
5. **Ajourhold** - Bokforingen skal vaere a jour, det vil si ikke ligge for langt etter
6. **Dokumentasjon av bokforte opplysninger** - Alle posteringer skal ha bilag
7. **Sporbarhet** - Det maa vaere mulig aa folge en transaksjon fra bilag til aarsregnskap og tilbake
8. **Oppbevaring** - Regnskapsmateriale skal oppbevares i trad med reglene
9. **Sikring** - Materialet skal sikres mot tap og uautorisert tilgang
10. **God bokforingsskikk** - Bokforingen skal folge allment aksepterte normer`,
    },
    {
      id: 'rr-2-1-note-sporbarhet',
      type: 'note',
      title: 'Sporbarhetskravet',
      content: 'Sporbarhet betyr at det skal vaere en ubrutt kjede mellom det enkelte bilag og posten i aarsregnskapet. En revisor maa kunne starte med et belop i resultatregnskapet, finne tilbake til den aktuelle kontoen, videre til den bokforte transaksjonen, og til slutt til det fysiske eller digitale bilaget.',
    },
    {
      id: 'rr-2-1-ajourhold',
      type: 'text',
      content: `### Krav til ajourhold

Bokforingsloven krever at bokforingen holdes oppdatert. De konkrete fristene avhenger av virksomhetens storrelse:

**Hovedregel:**
- Kontante salg: Daglig
- Kredittsalg og andre transaksjoner: Innen 4 maaneder etter utlop av maaneden, men maa vaere a jour ved hver pliktig rapportering (f.eks. mva-oppgave)

**Eksempel:** En bedrift med mva-termin hver 2. maaned (januar-februar) maa ha bokforingen a jour per 28. februar innen fristen for mva-meldingen (10. april).`,
    },
    {
      id: 'rr-2-1-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Oppbevaringstid',
      exerciseType: 'multiple-choice',
      task: 'Hvor lenge maa en bedrift oppbevare bilag (dokumentasjon av bokforte opplysninger) etter bokforingsloven?',
      options: [
        { id: 'a', text: '3 aar', isCorrect: false },
        { id: 'b', text: '5 aar', isCorrect: true },
        { id: 'c', text: '7 aar', isCorrect: false },
        { id: 'd', text: '10 aar', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: '5 aar',
        explanation: 'Etter bokforingsloven skal dokumentasjon av bokforte opplysninger (bilag) oppbevares i minst 5 aar etter regnskapsaarets slutt. Dette gjelder ogsaa for aarsregnskap, bokforingsspesifikasjoner og avstemminger.',
      },
    },
    {
      id: 'rr-2-1-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Bokforingsprinsipper',
      exerciseType: 'classic',
      task: 'Forklar hva sporbarhetsprinsippet innebærer, og gi et eksempel paa hvordan det fungerer i praksis.',
      difficulty: 'medium',
      solution: {
        answer: 'Sporbarhet betyr at det skal vaere mulig aa folge en transaksjon fra bilaget gjennom bokforingen til aarsregnskapet, og tilbake igjen. Eksempel: En faktura paa kr 15 000 for kontorutstyr kan spores fra det fysiske bilaget til posteringen paa konto 6500 (Inventar), videre til kontospesifikasjonen, og til slutt til posten "Andre driftskostnader" i resultatregnskapet.',
        explanation: 'Sporbarhet er et av de viktigste prinsippene fordi det gjor det mulig for revisor og skattemyndigheter aa kontrollere regnskapet. Uten sporbarhet er det umulig aa verifisere at bokforingen er korrekt.',
      },
    },
    {
      id: 'rr-2-1-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Dokumentasjonskrav',
      exerciseType: 'multiple-choice',
      task: 'Hvilken av folgende opplysninger maa vaere med paa et salgsdokument (faktura)?',
      options: [
        { id: 'a', text: 'Kundens fodselsnummer', isCorrect: false },
        { id: 'b', text: 'Selgers organisasjonsnummer', isCorrect: true },
        { id: 'c', text: 'Kundens bankkontonummer', isCorrect: false },
        { id: 'd', text: 'Selgers aarsregnskap', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Selgers organisasjonsnummer',
        explanation: 'Et salgsdokument (faktura) maa inneholde selgers navn, adresse og organisasjonsnummer, kjopers navn og adresse, beskrivelse av varen/tjenesten, antall, pris, totalbelop og spesifisert merverdiavgift.',
      },
    },
    {
      id: 'rr-2-1-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Identifiser brudd',
      exerciseType: 'classic',
      task: 'En bedrift har ikke bokfort transaksjoner fra de siste 6 maanedene, og har kastet kvitteringer eldre enn 2 aar. Hvilke bokforingsprinsipper brytes her?',
      difficulty: 'medium',
      solution: {
        answer: 'Bedriften bryter prinsipp 5 (ajourhold) ved aa la bokforingen ligge 6 maaneder etter. Den bryter ogsaa prinsipp 8 (oppbevaring) ved aa kaste kvitteringer etter bare 2 aar, noe som maa oppbevares i minst 5 aar.',
        explanation: 'I tillegg kan det hevdes at prinsipp 2 (fullstendighet) er brutt, da transaksjonene ikke er registrert. Brudd paa bokforingsloven kan medfare boter og i alvorlige tilfeller straffansvar.',
      },
    },
    {
      id: 'rr-2-1-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Fakturakontroll',
      exerciseType: 'classic',
      task: 'En faktura fra Leverandor AS viser: Belop kr 8 000 ekskl. mva, mva 25 % = kr 2 000, totalbelop kr 10 000. Fakturaen mangler organisasjonsnummer og fakturanummer. Er dette et gyldig bilag etter bokforingsloven? Begrunn svaret.',
      difficulty: 'hard',
      solution: {
        answer: 'Nei, fakturaen er ikke gyldig som bilag fordi den mangler paakrevde opplysninger: organisasjonsnummer og fakturanummer. Uten organisasjonsnummer kan ikke selger identifiseres paalitelig, og uten fakturanummer kan ikke sporbarhetskravet oppfylles. Bedriften maa be leverandoren om en ny, komplett faktura for den skal bokfores.',
        explanation: 'Bokforingsloven krever at alle dokumenter som brukes som bilag, inneholder tilstrekkelige opplysninger til at transaksjonen kan identifiseres og kontrolleres. Mangelfull dokumentasjon kan fore til at fradragsretten for mva bortfaller.',
      },
    },
    {
      id: 'rr-2-1-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Digital oppbevaring',
      exerciseType: 'multiple-choice',
      task: 'En bedrift skanner alle papirbilag og lagrer dem digitalt. Kan de kaste papiroriginalene?',
      options: [
        { id: 'a', text: 'Nei, papiroriginalene maa alltid oppbevares', isCorrect: false },
        { id: 'b', text: 'Ja, dersom den digitale kopien oppfyller kravene til sikring og lesbarhet', isCorrect: true },
        { id: 'c', text: 'Ja, men bare etter 1 aar', isCorrect: false },
        { id: 'd', text: 'Nei, med mindre Skatteetaten gir godkjenning', isCorrect: false },
      ],
      difficulty: 'medium',
      solution: {
        answer: 'Ja, dersom den digitale kopien oppfyller kravene til sikring og lesbarhet',
        explanation: 'Bokforingsloven aapner for heldigital oppbevaring. Papiroriginaler kan erstattes av digitale kopier saa lenge kravene til sikring (backup, tilgangskontroll) og lesbarhet (kvalitet paa skanning) er oppfylt. Dette er vanlig praksis i moderne regnskapsforing.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Kontoplan NS 4102
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2_2: TextbookChapter = {
  id: 'regnskap-revisjon-2-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2.2',
  title: 'Kontoplan NS 4102',
  description: 'Kontoklassene 1-8 i Norsk Standard kontoplan, kontovalg for ulike transaksjonstyper og standard kontoplanens oppbygging.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjore rede for oppbyggingen av kontoplan NS 4102',
    'forklare hva de atte kontoklassene inneholder',
    'velge riktig konto for vanlige transaksjoner',
  ],
  keyTerms: [
    { term: 'Kontoplan', definition: 'En systematisk oversikt over alle kontoer som brukes i bokforingen, organisert etter kontoklasser' },
    { term: 'NS 4102', definition: 'Norsk Standard kontoplan, den mest brukte kontoplanen i Norge, med kontoklassene 1-8' },
    { term: 'Kontoklasse', definition: 'Hovedgruppe i kontoplanen som samler beslektede kontoer, angitt med forste siffer i kontonummeret' },
    { term: 'Kontospesifikasjon', definition: 'Detaljert oversikt over alle posteringer paa en konto i en gitt periode' },
    { term: 'Balansekonto', definition: 'Konto i klasse 1 eller 2 som viser eiendeler, egenkapital eller gjeld i balansen' },
  ],
  content: [
    {
      id: 'rr-2-2-intro',
      type: 'text',
      content: `## Kontoplan NS 4102

En kontoplan er selve ryggraden i bokforingen. Den gir en systematisk oversikt over alle kontoene virksomheten bruker, og gjor det mulig aa sortere og klassifisere transaksjoner paa en standardisert maate.

I Norge brukes Norsk Standard kontoplan NS 4102. Denne kontoplanen er delt inn i 8 kontoklasser, der hvert firesifret kontonummer gir presis informasjon om hva transaksjonen gjelder.

I dette kapittelet skal du laere:
- Hvordan kontoplanen er bygget opp
- Hva de 8 kontoklassene inneholder
- Hvordan du velger riktig konto for ulike transaksjoner`,
    },
    {
      id: 'rr-2-2-def-kontoplan',
      type: 'definition',
      title: 'Kontoplan',
      content: '**Kontoplan** er en systematisk og nummerert oversikt over alle kontoer som brukes i bokforingen. Kontoplanen bestemmer hvordan transaksjoner klassifiseres, og danner grunnlaget for oppstillingen av resultatregnskap og balanse.',
    },
    {
      id: 'rr-2-2-kontoklasser',
      type: 'text',
      title: 'De 8 kontoklassene',
      content: `NS 4102 er organisert i 8 kontoklasser. Det forste sifferet i kontonummeret angir kontoklassen:

| Klasse | Navn | Type | Eksempler |
|--------|------|------|-----------|
| **1** | Eiendeler | Balanse | 1200 Maskiner, 1500 Kundefordringer, 1920 Bankinnskudd |
| **2** | Egenkapital og gjeld | Balanse | 2000 Egenkapital, 2400 Leverandorgjeld, 2700 Skatt |
| **3** | Salgsinntekter | Resultat | 3000 Salgsinntekt, 3100 Salg handelsvarer |
| **4** | Varekostnad | Resultat | 4000 Innkjop av varer, 4300 Innkjop av underentr. |
| **5** | Lonnskostnad | Resultat | 5000 Lonn, 5400 Arbeidsgiveravgift |
| **6** | Andre driftskostnader | Resultat | 6300 Leie, 6800 Kontorutgifter, 6900 Telefon |
| **7** | Andre driftskostnader (forts.) | Resultat | 7000 Avskrivninger, 7700 Bankgebyr |
| **8** | Finansposter | Resultat | 8040 Renteinntekt, 8150 Rentekostnad |

Kontoklasse 1-2 gaar til **balansen** og kontoklasse 3-8 gaar til **resultatregnskapet**.`,
    },
    {
      id: 'rr-2-2-tip-firesifret',
      type: 'tip',
      title: 'Slik leser du et kontonummer',
      content: 'Et firesifret kontonummer gir mye informasjon. For eksempel betyr konto **1920**:\n- **1** = Kontoklasse 1 (eiendeler)\n- **19** = Kontogruppe 19 (bankinnskudd, kontanter)\n- **192** = Underkategori (bankinnskudd)\n- **1920** = Spesifikk konto (bankinnskudd, driftskonto)\n\nJo flere sifre du leser, desto mer presis blir klassifiseringen.',
    },
    {
      id: 'rr-2-2-balansekontoer',
      type: 'text',
      content: `### Kontoklasse 1: Eiendeler

Kontoklasse 1 inneholder alt bedriften eier. Kontoene er sortert etter likviditet:

**Anleggsmidler (1000-1299):**
- 1000-1099: Immaterielle eiendeler (goodwill, patenter)
- 1100-1199: Tomter og bygninger
- 1200-1299: Maskiner og inventar

**Omlopsmidler (1300-1999):**
- 1400-1499: Varelager
- 1500-1599: Kundefordringer
- 1900-1999: Bankinnskudd og kontanter

### Kontoklasse 2: Egenkapital og gjeld

Kontoklasse 2 viser hvordan eiendelene er finansiert:

**Egenkapital (2000-2099):**
- 2000: Aksjekapital / egenkapital

**Langsiktig gjeld (2100-2299):**
- 2200: Pantegjeld (banklaan)

**Kortsiktig gjeld (2300-2999):**
- 2400: Leverandorgjeld
- 2700: Skyldig offentlige avgifter (mva, skatt)
- 2900: Annen kortsiktig gjeld`,
    },
    {
      id: 'rr-2-2-resultatkontoer',
      type: 'text',
      content: `### Kontoklasse 3-8: Resultatkontoer

Resultatkontoene registrerer alle inntekter og kostnader i perioden.

**Klasse 3 - Salgsinntekter:**
- 3000 Salgsinntekt, avgiftspliktig (med mva)
- 3100 Salgsinntekt, avgiftsfri (uten mva)

**Klasse 4 - Varekostnad:**
- 4000 Innkjop av varer for videresalg
- 4300 Innkjop av tjenester (underentrepriser)

**Klasse 5 - Lonnskostnad:**
- 5000 Lonn til ansatte
- 5400 Arbeidsgiveravgift
- 5900 Andre personalkostnader

**Klasse 6 og 7 - Andre driftskostnader:**
- 6300 Leie av lokaler
- 6800 Kontorkostnader
- 7000 Avskrivninger paa driftsmidler
- 7700 Bankgebyrer

**Klasse 8 - Finansposter:**
- 8040 Renteinntekter
- 8150 Rentekostnader
- 8800 Aarsresultat`,
    },
    {
      id: 'rr-2-2-ex-kontovalg',
      type: 'example',
      title: 'Eksempel: Velge riktig konto',
      problem: 'Bedriften kjoper kontorrekvisita for kr 2 400 inkl. mva (mva = kr 480). Hvilke kontoer brukes?',
      solution: `Vi trenger tre kontoer:

1. **6800 Kontorkostnader** (klasse 6 - driftskostnad): kr 1 920 (belop ekskl. mva)
2. **2710 Inngaaende mva** (klasse 2 - fordring paa staten): kr 480
3. **1920 Bankinnskudd** (klasse 1 - eiendeler): kr 2 400 (totalbelop betalt)

Kontorkostnaden fores uten mva fordi merverdiavgiften er en fordring paa staten som virksomheten faar tilbake.`,
    },
    {
      id: 'rr-2-2-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Kontoklasser',
      exerciseType: 'multiple-choice',
      task: 'Hvilken kontoklasse tilhorer konto 4000 (Innkjop av varer)?',
      options: [
        { id: 'a', text: 'Klasse 1 - Eiendeler', isCorrect: false },
        { id: 'b', text: 'Klasse 3 - Salgsinntekter', isCorrect: false },
        { id: 'c', text: 'Klasse 4 - Varekostnad', isCorrect: true },
        { id: 'd', text: 'Klasse 6 - Andre driftskostnader', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Klasse 4 - Varekostnad',
        explanation: 'Det forste sifferet i kontonummeret angir kontoklassen. Konto 4000 starter med 4, og tilhorer derfor kontoklasse 4 (Varekostnad). Denne klassen brukes for aa registrere kostnaden for varer som kjopes inn for videresalg.',
      },
    },
    {
      id: 'rr-2-2-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Balanse eller resultat?',
      exerciseType: 'classic',
      task: 'Avgjer om folgende kontoer gaar til balansen eller resultatregnskapet: a) 1920 Bankinnskudd, b) 3000 Salgsinntekt, c) 2400 Leverandorgjeld, d) 5000 Lonn, e) 7000 Avskrivninger.',
      difficulty: 'easy',
      solution: {
        answer: 'a) 1920 Bankinnskudd - Balanse (klasse 1, eiendel)\nb) 3000 Salgsinntekt - Resultat (klasse 3, inntekt)\nc) 2400 Leverandorgjeld - Balanse (klasse 2, gjeld)\nd) 5000 Lonn - Resultat (klasse 5, kostnad)\ne) 7000 Avskrivninger - Resultat (klasse 7, kostnad)',
        explanation: 'Kontoklasse 1-2 gaar til balansen (eiendeler, egenkapital og gjeld). Kontoklasse 3-8 gaar til resultatregnskapet (inntekter og kostnader). Det forste sifferet i kontonummeret forteller deg umiddelbart hvilken oppstilling kontoen tilhorer.',
      },
    },
    {
      id: 'rr-2-2-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Kontovalg',
      exerciseType: 'classic',
      task: 'Bedriften betaler husleie paa kr 18 000 for kontorlokalet. Hvilken konto skal kostnaden fores paa? Begrunn svaret.',
      difficulty: 'medium',
      solution: {
        answer: 'Husleie fores paa konto 6300 (Leie av lokaler). Dette er en driftskostnad i kontoklasse 6 (Andre driftskostnader). Husleie er en fast kostnad knyttet til bedriftens daglige drift, og er verken varekostnad (klasse 4) eller lonnskostnad (klasse 5).',
        explanation: 'Kontoklasse 6 og 7 fanger opp alle driftskostnader som ikke er varekostnad eller lonnskostnad. Leie, forsikring, kontorkostnader, telefon og lignende havner her.',
      },
    },
    {
      id: 'rr-2-2-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Finn riktige kontoer',
      exerciseType: 'classic',
      task: 'En bedrift ansetter en ny medarbeider med maanedslonn kr 42 000. Arbeidsgiveravgiften er 14,1 %. Hvilke kontoer brukes for aa bokfore lonnskostnaden, og hva blir belopene?',
      difficulty: 'medium',
      solution: {
        answer: `Folgende kontoer brukes:

1. Konto 5000 Lonn: kr 42 000 (bruttolonn)
2. Konto 5400 Arbeidsgiveravgift: kr 42 000 x 14,1 % = kr 5 922
3. Konto 2600 Skyldig skattetrekk (forskuddstrekk): ca. kr 13 000 (avhengig av skattekort)
4. Konto 2770 Skyldig arbeidsgiveravgift: kr 5 922
5. Konto 2900 Annen kortsiktig gjeld (nettolonn): kr 29 000 (bruttolonn minus skattetrekk)

Total lonnskostnad for bedriften: kr 42 000 + kr 5 922 = kr 47 922`,
        explanation: 'Lonnskostnaden bestar av bade selve lonnen (konto 5000) og arbeidsgiveravgiften (konto 5400). Skattetrekk og arbeidsgiveravgift fores som gjeld i kontoklasse 2 inntil de betales til staten.',
      },
    },
    {
      id: 'rr-2-2-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Kontonummer-tolking',
      exerciseType: 'multiple-choice',
      task: 'Hva forteller kontonummer 1500 deg?',
      options: [
        { id: 'a', text: 'Det er en inntektskonto for varesalg', isCorrect: false },
        { id: 'b', text: 'Det er en balansekonto for kundefordringer', isCorrect: true },
        { id: 'c', text: 'Det er en kostnadskonto for lonninger', isCorrect: false },
        { id: 'd', text: 'Det er en gjeldskonto for leverandorgjeld', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Det er en balansekonto for kundefordringer',
        explanation: 'Kontonummer 1500 starter med 1 (kontoklasse 1 = eiendeler). Kontogruppe 15 er kundefordringer. Kundefordringer er penger som kunder skylder bedriften for varer eller tjenester som er levert paa kreditt.',
      },
    },
    {
      id: 'rr-2-2-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Helhetlig kontovalg',
      exerciseType: 'classic',
      task: 'Bedriften har folgende transaksjoner i januar. Angi riktig kontonummer for hver: a) Solgt varer paa kreditt for kr 50 000 ekskl. mva, b) Betalt stromregning kr 4 500 fra bank, c) Mottatt betaling fra kunde kr 25 000 til bank, d) Kjopt kontorstol for kr 3 200 ekskl. mva, betalt fra bank.',
      difficulty: 'hard',
      solution: {
        answer: `a) Solgt varer paa kreditt:
- Debet 1500 Kundefordringer: kr 62 500 (inkl. mva)
- Kredit 3000 Salgsinntekt: kr 50 000
- Kredit 2700 Utgaaende mva: kr 12 500

b) Betalt stromregning:
- Debet 6340 Strom: kr 4 500
- Kredit 1920 Bankinnskudd: kr 4 500

c) Mottatt betaling fra kunde:
- Debet 1920 Bankinnskudd: kr 25 000
- Kredit 1500 Kundefordringer: kr 25 000

d) Kjopt kontorstol:
- Debet 6800 Kontorkostnader: kr 3 200
- Debet 2710 Inngaaende mva: kr 800
- Kredit 1920 Bankinnskudd: kr 4 000`,
        explanation: 'Kontovalget avgjor hvor transaksjonen havner i regnskapet. Varer solgt paa kreditt oker kundefordringer, ikke bank. Stromregning er en driftskostnad. Kundeinnbetaling reduserer kundefordringer og oker bankinnskudd. Kontorstol er en kontorkostnad med fradrag for inngaaende mva.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Debet og kredit
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2_3: TextbookChapter = {
  id: 'regnskap-revisjon-2-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2.3',
  title: 'Debet og kredit',
  description: 'Prinsippene for dobbelt bokholderi, T-konti for aa visualisere posteringer, og konteringsreglene for ulike kontotyper.',
  estimatedMinutes: 24,
  competenceGoals: [
    'forklare prinsippet om dobbelt bokholderi',
    'bruke T-konti til aa illustrere bokforingsposteringer',
    'anvende konteringsreglene for eiendeler, gjeld, egenkapital, inntekter og kostnader',
  ],
  keyTerms: [
    { term: 'Dobbelt bokholderi', definition: 'Prinsipp der hver transaksjon registreres paa minst to kontoer - en i debet og en i kredit - slik at sum debet alltid er lik sum kredit' },
    { term: 'Debet', definition: 'Venstre side av en konto. Okning paa eiendels- og kostnadskontoer fores i debet' },
    { term: 'Kredit', definition: 'Hoyre side av en konto. Okning paa gjelds-, egenkapital- og inntektskontoer fores i kredit' },
    { term: 'T-konto', definition: 'En forenklet fremstilling av en konto i form av en T, der venstre side er debet og hoyre side er kredit' },
    { term: 'Kontering', definition: 'Prosessen med aa bestemme hvilke kontoer en transaksjon skal bokfores paa, og om belopet skal staa i debet eller kredit' },
  ],
  content: [
    {
      id: 'rr-2-3-intro',
      type: 'text',
      content: `## Dobbelt bokholderi

Dobbelt bokholderi er selve grunnprinsippet i all moderne bokforing. Systemet ble utviklet i Italia paa 1400-tallet av munken Luca Pacioli, og brukes den dag i dag over hele verden.

Hovedregelen er enkel: **Hver transaksjon fores paa minst to kontoer** - en i debet og en i kredit. Sum debet skal alltid vaere lik sum kredit.

I dette kapittelet skal du laere:
- Hva dobbelt bokholderi innebærer
- Hvordan T-konti fungerer
- Konteringsreglene for ulike kontotyper
- Hvordan du konterer vanlige transaksjoner`,
    },
    {
      id: 'rr-2-3-def-dobbelt',
      type: 'definition',
      title: 'Dobbelt bokholderi',
      content: '**Dobbelt bokholderi** er et system der hver okonomisk transaksjon registreres paa minst to kontoer med like store belop i debet og kredit. Dette sikrer at balanselikningen (Eiendeler = Egenkapital + Gjeld) alltid er i likevekt, og gjor det mulig aa oppdage feil i bokforingen.',
    },
    {
      id: 'rr-2-3-t-konto',
      type: 'text',
      title: 'T-konti',
      content: `### Slik fungerer en T-konto

En T-konto er en forenklet fremstilling av en bokforingskonto. Den ser slik ut:

\`\`\`
        1920 Bankinnskudd
    ───────────────────────
    Debet    |    Kredit
    ─────────|────────────
    50 000   |    12 000
    25 000   |     8 000
    ─────────|────────────
    75 000   |    20 000
\`\`\`

- **Venstre side** = Debet (forkortet D)
- **Hoyre side** = Kredit (forkortet K)
- **Saldo** = Debet minus Kredit = 75 000 - 20 000 = 55 000 (debetsaldo)

T-konti er et viktig pedagogisk verktoy for aa forstaa hvordan posteringer paavirker kontoene.`,
    },
    {
      id: 'rr-2-3-konteringsregler',
      type: 'text',
      title: 'Konteringsreglene',
      content: `### Hovedreglene for debet og kredit

Konteringsreglene bestemmer om et belop skal fores i debet eller kredit:

| Kontotype | Okning fores i | Reduksjon fores i |
|-----------|---------------|-------------------|
| **Eiendeler** (klasse 1) | Debet | Kredit |
| **Gjeld** (klasse 2) | Kredit | Debet |
| **Egenkapital** (klasse 2) | Kredit | Debet |
| **Inntekter** (klasse 3) | Kredit | Debet |
| **Kostnader** (klasse 4-7) | Debet | Kredit |

**Huskeregel:** Eiendeler og kostnader oker i debet. Gjeld, egenkapital og inntekter oker i kredit.

**Hvorfor denne logikken?**
Balanselikningen er: Eiendeler = Egenkapital + Gjeld. Venstresiden (eiendeler) oker i debet, hoyresiden (egenkapital og gjeld) oker i kredit. Kostnader reduserer egenkapitalen og fores derfor paa samme side som eiendeler (debet). Inntekter oker egenkapitalen og fores paa samme side som gjeld/egenkapital (kredit).`,
    },
    {
      id: 'rr-2-3-warning-feil',
      type: 'warning',
      title: 'Vanlig misforstaelse',
      content: 'Mange tror at debet betyr \"noe positivt\" og kredit betyr \"noe negativt\". Det stemmer ikke! Debet og kredit er bare betegnelser paa venstre og hoyre side av kontoen. Om en debetering er \"positiv\" eller \"negativ\" avhenger av kontotypen. For eksempel er debet paa bankkontoen positivt (pengene oker), mens debet paa en kostnadskonto betyr okt kostnad.',
    },
    {
      id: 'rr-2-3-ex-enkel',
      type: 'example',
      title: 'Eksempel: Varekjop med kontant betaling',
      problem: 'Bedriften kjoper varer for kr 30 000 ekskl. mva og betaler kontant fra bankkontoen. Mva-satsen er 25 %. Vis konteringen med T-konti.',
      solution: `Totalbelop inkl. mva: kr 30 000 + kr 7 500 = kr 37 500

**Kontering:**
- Debet 4000 Varekjop: kr 30 000 (kostnad oker i debet)
- Debet 2710 Inngaaende mva: kr 7 500 (fordring oker i debet)
- Kredit 1920 Bankinnskudd: kr 37 500 (eiendel reduseres i kredit)

**T-konti:**

\`\`\`
    4000 Varekjop          2710 Inng. mva         1920 Bank
    ──────────────        ──────────────        ──────────────
    D      |  K           D      |  K           D      |  K
    ───────|──────        ───────|──────        ───────|──────
    30 000 |              7 500  |                     | 37 500
\`\`\`

**Kontroll:** Sum debet = 30 000 + 7 500 = 37 500. Sum kredit = 37 500. Stemmer!`,
    },
    {
      id: 'rr-2-3-ex-kreditt',
      type: 'example',
      title: 'Eksempel: Varesalg paa kreditt',
      problem: 'Bedriften selger varer for kr 20 000 ekskl. mva paa kreditt (kunden faar faktura). Mva 25 %. Vis konteringen.',
      solution: `Totalbelop inkl. mva: kr 20 000 + kr 5 000 = kr 25 000

**Kontering:**
- Debet 1500 Kundefordringer: kr 25 000 (eiendel oker i debet)
- Kredit 3000 Salgsinntekt: kr 20 000 (inntekt oker i kredit)
- Kredit 2700 Utgaaende mva: kr 5 000 (gjeld oker i kredit)

**T-konti:**

\`\`\`
    1500 Kundefordr.       3000 Salgsinntekt      2700 Utg. mva
    ──────────────        ──────────────        ──────────────
    D      |  K           D      |  K           D      |  K
    ───────|──────        ───────|──────        ───────|──────
    25 000 |                     | 20 000              | 5 000
\`\`\`

**Kontroll:** Sum debet = 25 000. Sum kredit = 20 000 + 5 000 = 25 000. Stemmer!`,
    },
    {
      id: 'rr-2-3-note-kontroll',
      type: 'note',
      title: 'Kontroll av posteringer',
      content: 'Etter hver kontering bor du kontrollere at sum debet er lik sum kredit. Hvis belopene ikke stemmer, har du gjort en feil. Denne innebygde kontrollmekanismen er en av de storste fordelene med dobbelt bokholderi.',
    },
    {
      id: 'rr-2-3-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Debet eller kredit?',
      exerciseType: 'multiple-choice',
      task: 'Bedriften mottar kr 15 000 fra en kunde som betaling for en utsendt faktura. Hvordan pavirkes konto 1920 Bankinnskudd?',
      options: [
        { id: 'a', text: 'Debet kr 15 000 (okning)', isCorrect: true },
        { id: 'b', text: 'Kredit kr 15 000 (okning)', isCorrect: false },
        { id: 'c', text: 'Debet kr 15 000 (reduksjon)', isCorrect: false },
        { id: 'd', text: 'Kredit kr 15 000 (reduksjon)', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Debet kr 15 000 (okning)',
        explanation: 'Bankinnskudd er en eiendel (kontoklasse 1). Eiendeler oker i debet. Naar bedriften mottar penger, oker bankinnskuddet, og belopet fores derfor i debet paa konto 1920.',
      },
    },
    {
      id: 'rr-2-3-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Konter transaksjonen',
      exerciseType: 'classic',
      task: 'Bedriften betaler husleie paa kr 15 000 fra bankkontoen. Konter transaksjonen med debet og kredit. Angi konto, belop og side (D/K).',
      difficulty: 'easy',
      solution: {
        answer: `Kontering:
- Debet 6300 Leie av lokaler: kr 15 000 (kostnad oker i debet)
- Kredit 1920 Bankinnskudd: kr 15 000 (eiendel reduseres i kredit)

Kontroll: Debet = 15 000, Kredit = 15 000. Stemmer.`,
        explanation: 'Husleie er en driftskostnad (klasse 6) som oker i debet. Bankinnskuddet er en eiendel (klasse 1) som reduseres i kredit naar vi betaler ut penger.',
      },
    },
    {
      id: 'rr-2-3-ex3',
      type: 'exercise',
      title: 'Oppgave 3: T-konto-oppgave',
      exerciseType: 'classic',
      task: 'Bedriften har folgende transaksjoner i januar: 1) Bankinnskudd ved aarets start: kr 100 000. 2) Kjopt varer kontant for kr 25 000 ekskl. mva (mva 25 %). 3) Solgt varer paa kreditt for kr 40 000 ekskl. mva (mva 25 %). 4) Mottatt betaling fra kunde kr 30 000. Sett opp T-konto for 1920 Bankinnskudd og vis saldo.',
      difficulty: 'medium',
      solution: {
        answer: `T-konto for 1920 Bankinnskudd:

Debet:
- IB (inngaaende balanse): kr 100 000
- Kundeinnbetaling: kr 30 000
Sum debet: kr 130 000

Kredit:
- Varekjop inkl. mva: kr 31 250 (25 000 + 6 250)
Sum kredit: kr 31 250

Saldo = 130 000 - 31 250 = kr 98 750 (debetsaldo)

Merknader: Varesalg paa kreditt (transaksjon 3) paavirker ikke bankkontoen - det gaar mot kundefordringer.`,
        explanation: 'Eiendeler (som bankinnskudd) har normalt debetsaldo. Inngaaende balanse fores i debet, innbetalinger fores i debet (okning), og utbetalinger fores i kredit (reduksjon).',
      },
    },
    {
      id: 'rr-2-3-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Konteringsregler',
      exerciseType: 'multiple-choice',
      task: 'Hvilken kontotype oker i kredit?',
      options: [
        { id: 'a', text: 'Eiendeler og kostnader', isCorrect: false },
        { id: 'b', text: 'Gjeld, egenkapital og inntekter', isCorrect: true },
        { id: 'c', text: 'Bare inntekter', isCorrect: false },
        { id: 'd', text: 'Alle kontotyper', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Gjeld, egenkapital og inntekter',
        explanation: 'Gjeld og egenkapital staar paa hoyresiden av balanselikningen og oker i kredit. Inntekter oker egenkapitalen og fores derfor ogsaa i kredit. Eiendeler og kostnader oker derimot i debet.',
      },
    },
    {
      id: 'rr-2-3-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Komplett kontering',
      exerciseType: 'classic',
      task: 'Bedriften kjoper en ny skriver for kr 8 000 ekskl. mva (mva 25 %) og betaler med faktura (paa kreditt). Vis komplett kontering med T-konti.',
      difficulty: 'medium',
      solution: {
        answer: `Totalbelop inkl. mva: kr 8 000 + kr 2 000 = kr 10 000

Kontering:
- Debet 6800 Kontorkostnader: kr 8 000 (kostnad oker i debet)
- Debet 2710 Inngaaende mva: kr 2 000 (fordring oker i debet)
- Kredit 2400 Leverandorgjeld: kr 10 000 (gjeld oker i kredit)

T-konti:

6800 Kontorkostn.      2710 Inng. mva        2400 Leverandorgjeld
──────────────        ──────────────        ──────────────
D      |  K           D      |  K           D      |  K
───────|──────        ───────|──────        ───────|──────
8 000  |              2 000  |                     | 10 000

Kontroll: Sum debet = 8 000 + 2 000 = 10 000. Sum kredit = 10 000. Stemmer!`,
        explanation: 'Naar bedriften kjoper paa kreditt, oker leverandorgjelden (klasse 2, gjeld) i kredit i stedet for at bankinnskuddet reduseres. Leverandorgjelden er en kortsiktig gjeld som betales naar fakturaen forfaller.',
      },
    },
    {
      id: 'rr-2-3-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Feilsoeking',
      exerciseType: 'classic',
      task: 'En regnskapsforer har bokfort folgende: Debet 1920 Bank kr 50 000, Kredit 3000 Salgsinntekt kr 40 000, Kredit 2700 Utg. mva kr 8 000. Er posteringen riktig? Hvis ikke, forklar hva som er feil.',
      difficulty: 'hard',
      solution: {
        answer: `Posteringen er feil. Sum debet (kr 50 000) er ikke lik sum kredit (kr 40 000 + kr 8 000 = kr 48 000). Differansen er kr 2 000.

Feilen ligger i mva-beregningen. Hvis salgsinntekten er kr 40 000 ekskl. mva med mva-sats 25 %, skal mva vaere:
kr 40 000 x 25 % = kr 10 000

Korrekt postering:
- Debet 1920 Bank: kr 50 000
- Kredit 3000 Salgsinntekt: kr 40 000
- Kredit 2700 Utg. mva: kr 10 000

Kontroll: 50 000 = 40 000 + 10 000. Stemmer!`,
        explanation: 'Dobbelt bokholderi gir en innebygd kontrollmekanisme: hvis sum debet ikke er lik sum kredit, vet du at det er en feil. I dette tilfellet var mva beregnet feil (8 000 i stedet for 10 000), noe som er 20 % i stedet for 25 %.',
      },
    },
    {
      id: 'rr-2-3-ex7',
      type: 'exercise',
      title: 'Oppgave 7: Balanselikningen',
      exerciseType: 'classic',
      task: 'Forklar med egne ord hvorfor dobbelt bokholderi sikrer at balanselikningen (Eiendeler = Egenkapital + Gjeld) alltid er i balanse.',
      difficulty: 'hard',
      solution: {
        answer: 'Dobbelt bokholderi sikrer at balanselikningen alltid er i balanse fordi hver transaksjon pavirker minst to kontoer med like store belop. Naar en eiendel oker (debet), maa enten en annen eiendel reduseres (kredit), gjelden oke (kredit), egenkapitalen oke (kredit), eller en kombinasjon. Kostnader reduserer egenkapitalen og inntekter oker den, saa resultatkontiene pavirker ogsaa balansen gjennom egenkapitalen. Siden summen av alle debetposteringer alltid er lik summen av alle kreditposteringer, vil venstresiden og hoyresiden av balansen alltid vaere like.',
        explanation: 'Balanselikningen er det matematiske fundamentet for dobbelt bokholderi. Alle transaksjoner kan sees som forflytninger innenfor denne likningen, og likevekten opprettholdes automatisk av debetkredit-systemet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Bilagshaandtering
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2_4: TextbookChapter = {
  id: 'regnskap-revisjon-2-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2.4',
  title: 'Bilagshaandtering',
  description: 'Ulike bilagstyper, regler for nummerering og kontroll, og digital bilagsflyt i moderne regnskapssystemer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive ulike bilagstyper og deres formaal',
    'gjore rede for kravene til bilagsnummerering og kontroll',
    'forklare hvordan digital bilagsflyt fungerer i praksis',
  ],
  keyTerms: [
    { term: 'Bilag', definition: 'Dokumentasjon som ligger til grunn for en bokfort transaksjon, for eksempel faktura, kvittering, bankutskrift eller lonn slip' },
    { term: 'Bilagsnummer', definition: 'Et unikt loepenummer som tildeles hvert bilag for aa sikre sporbarhet og fullstendighet i bokforingen' },
    { term: 'Utgaaende faktura', definition: 'Faktura som bedriften sender til sine kunder for varer eller tjenester som er levert' },
    { term: 'Inngaaende faktura', definition: 'Faktura som bedriften mottar fra sine leverandorer for varer eller tjenester som er kjopt' },
    { term: 'EHF-faktura', definition: 'Elektronisk handelsformat - standardisert elektronisk faktura som sendes digitalt mellom bedrifter' },
  ],
  content: [
    {
      id: 'rr-2-4-intro',
      type: 'text',
      content: `## Bilagshaandtering

Bilag er selve fundamentet i bokforingen. Uten bilag har du ingen dokumentasjon, og uten dokumentasjon har du ikke lov til aa bokfore. Riktig bilagshaandtering sikrer at regnskapet er etterprøvbart og at bokforingsloven folges.

I dette kapittelet skal du laere:
- Hvilke typer bilag som finnes
- Hvordan bilag skal nummereres og kontrolleres
- Hvordan digital bilagsflyt fungerer i moderne regnskap`,
    },
    {
      id: 'rr-2-4-def-bilag',
      type: 'definition',
      title: 'Bilag',
      content: '**Bilag** er ethvert dokument som dokumenterer og bekrefter en okonomisk transaksjon. Bilaget er grunnlaget for bokforingen og maa inneholde tilstrekkelige opplysninger til at transaksjonen kan identifiseres, kontrolleres og etterproves. Eksempler paa bilag er fakturaer, kvitteringer, bankutskrifter, lonnsslipper og kontrakter.',
    },
    {
      id: 'rr-2-4-bilagstyper',
      type: 'text',
      title: 'Bilagstyper',
      content: `### Oversikt over vanlige bilagstyper

| Bilagstype | Beskrivelse | Eksempel |
|------------|-------------|----------|
| **Utgaaende faktura** | Faktura sendt til kunde | Salg av varer paa kr 25 000 |
| **Inngaaende faktura** | Faktura mottatt fra leverandor | Kjop av kontorrekvisita kr 3 500 |
| **Kassalapp/kvittering** | Dokumentasjon for kontanthandel | Kjop av rekvisita i butikk |
| **Bankbilag** | Bankutskrift eller betalingsbekreftelse | Overforsel mellom kontoer |
| **Lonnsbilag** | Lonn slip eller lonnskjoring | Maanedslonn kr 45 000 |
| **Memorialbilag** | Internt bilag for korrigeringer | Avskrivning, periodisering |
| **Reiseregning** | Dokumentasjon for reiseutgifter | Flyreise og hotell kr 8 500 |

Alle bilag skal vaere datert, nummerert og inneholde tilstrekkelig informasjon til aa dokumentere transaksjonen.`,
    },
    {
      id: 'rr-2-4-nummerering',
      type: 'text',
      title: 'Bilagsnummerering',
      content: `### Regler for nummerering

Bokforingsloven krever at bilag tildeles et unikt loepenummer i en ubrutt nummerserie.

**Hovedprinsipper:**
1. Hvert bilag faar et unikt nummer
2. Nummerserien skal vaere ubrutt (ingen hull)
3. Bilagene skal vaere kronologisk ordnet
4. Det kan brukes flere bilagnummerserier (f.eks. en for salg, en for kjop)

**Eksempel paa bilagsnummerering:**

| Bilagsnr. | Dato | Tekst | Belop |
|-----------|------|-------|-------|
| 1001 | 02.01 | Faktura fra Kontorutstyr AS | 12 500 |
| 1002 | 03.01 | Kvittering Rema 1000 | 345 |
| 1003 | 05.01 | Faktura til Kunde AS | 35 000 |
| 1004 | 08.01 | Bankgebyr januar | 250 |
| 1005 | 10.01 | Lonn januar | 42 000 |

Bilagsnummeret er koblingen mellom den fysiske/digitale dokumentasjonen og den bokforte posteringen.`,
    },
    {
      id: 'rr-2-4-kontroll',
      type: 'text',
      title: 'Bilagskontroll',
      content: `### Kontroll for bokforing

For et bilag bokfores, maa det kontrolleres:

**Formell kontroll:**
- Er alle paakrevde opplysninger til stede?
- Er belopene riktig beregnet (inkl. mva)?
- Er dokumentet datert og signert?
- Er det ekte (ikke forfalsket)?

**Materiell kontroll:**
- Stemmer bilaget med det som faktisk er levert/mottatt?
- Er prisen i trad med avtale?
- Er leveransen godkjent av riktig person?

**Konterings kontroll:**
- Er riktige kontoer valgt?
- Er belopene fordelt riktig mellom debet og kredit?
- Stemmer mva-beregningen?

**Eksempel paa kontroll:** Bedriften mottar en faktura paa kr 50 000 for kontorutstyr. Regnskapsforer sjekker: (1) Er fakturaen komplett? (2) Ble utstyret faktisk levert? (3) Stemmer prisen med bestillingen? (4) Er mva korrekt beregnet? Forst naar alt er i orden, bokfores bilaget.`,
    },
    {
      id: 'rr-2-4-tip-attestasjon',
      type: 'tip',
      title: 'Attestasjon og anvisning',
      content: 'I storre bedrifter brukes et system med **attestasjon** og **anvisning** for inngaaende fakturaer:\n\n- **Attestasjon:** En person bekrefter at varen/tjenesten er mottatt og at prisen stemmer\n- **Anvisning:** En person med budsjettansvar godkjenner at fakturaen skal betales\n\nDette gir internkontroll og sikrer at ingen alene kan godkjenne og betale en faktura.',
    },
    {
      id: 'rr-2-4-digital',
      type: 'text',
      title: 'Digital bilagsflyt',
      content: `### Moderne digital bilagshaandtering

De fleste bedrifter bruker i dag digitale regnskapssystemer. Den digitale bilagsflyten ser typisk slik ut:

**1. Mottak av bilag:**
- EHF-faktura (elektronisk) mottas direkte i regnskapssystemet
- Papirbilag skannes eller fotograferes
- E-postfakturaer lastes opp

**2. Registrering og kontroll:**
- Automatisk lesing av fakturainformasjon (OCR/AI)
- Systemet foreslaar kontering basert paa leverandor og belop
- Ansatt attesterer digitalt

**3. Godkjenning:**
- Digital godkjenningsflyt (workflow)
- Leder anviser betaling
- Automatisk bokforing etter godkjenning

**4. Betaling:**
- Automatisk betalingsforslag ved forfall
- Betaling via nettbank eller integrasjon
- Automatisk avstemming mot bankutskrift

**5. Arkivering:**
- Bilag lagres digitalt i regnskapssystemet
- Automatisk kobling mellom bilag og bokfort postering
- Oppfyller kravene til oppbevaring

**Fordeler med digital bilagsflyt:**
- Raskere og mer effektiv prosess
- Mindre risiko for feil
- Enklere sporbarhet og soek
- Automatisk backup og sikring`,
    },
    {
      id: 'rr-2-4-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Bilagstyper',
      exerciseType: 'multiple-choice',
      task: 'Hvilken bilagstype brukes for aa dokumentere en intern korrigering i regnskapet, for eksempel en avskrivning?',
      options: [
        { id: 'a', text: 'Utgaaende faktura', isCorrect: false },
        { id: 'b', text: 'Bankbilag', isCorrect: false },
        { id: 'c', text: 'Memorialbilag', isCorrect: true },
        { id: 'd', text: 'Kassalapp', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'Memorialbilag',
        explanation: 'Et memorialbilag er et internt bilag som brukes for transaksjoner som ikke har et eksternt dokument som grunnlag. Typiske bruksomraader er avskrivninger, periodiseringer, retting av feil og overforinger mellom kontoer.',
      },
    },
    {
      id: 'rr-2-4-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Bilagsnummerering',
      exerciseType: 'classic',
      task: 'En bedrift har bokfort bilag nr. 1001 til 1045 i januar. I februar starter de med bilag nr. 1050. Er dette korrekt etter bokforingsloven? Begrunn svaret.',
      difficulty: 'medium',
      solution: {
        answer: 'Nei, dette er ikke korrekt. Bilagsnummerserien har et hull fra 1046 til 1049 (fire manglende numre). Bokforingsloven krever en ubrutt nummerserie. Bedriften maa enten bruke nr. 1046 som neste bilagsnummer, eller dokumentere hvorfor numrene 1046-1049 ikke er brukt (f.eks. annullerte bilag).',
        explanation: 'Kravet om ubrutt nummerserie sikrer fullstendighet - det skal vaere mulig aa verifisere at alle transaksjoner er bokfort. Hull i nummerserien kan tyde paa at bilag mangler eller er fjernet.',
      },
    },
    {
      id: 'rr-2-4-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Formell kontroll',
      exerciseType: 'classic',
      task: 'Du mottar en faktura med folgende opplysninger: Leverandor: Kontorhuset AS, belop kr 6 250 inkl. mva, mva kr 1 250. Fakturaen mangler dato, leverandorens organisasjonsnummer og fakturanummer. Hvilke mangler har fakturaen, og hva bor du gjore?',
      difficulty: 'medium',
      solution: {
        answer: 'Fakturaen mangler tre paakrevde opplysninger: dato, organisasjonsnummer og fakturanummer. Uten disse opplysningene er ikke fakturaen gyldig som bilag etter bokforingsloven, og den bor ikke bokfores. Bedriften maa kontakte leverandoren og be om en ny, komplett faktura med alle paakrevde opplysninger.',
        explanation: 'Formell kontroll av bilag er viktig bade for aa oppfylle lovens krav og for aa sikre fradragsretten for inngaaende mva. Mangelfulle bilag kan fore til at Skatteetaten nekter fradrag ved en eventuell kontroll.',
      },
    },
    {
      id: 'rr-2-4-ex4',
      type: 'exercise',
      title: 'Oppgave 4: EHF-faktura',
      exerciseType: 'multiple-choice',
      task: 'Hva er en EHF-faktura?',
      options: [
        { id: 'a', text: 'En faktura sendt som PDF paa e-post', isCorrect: false },
        { id: 'b', text: 'En standardisert elektronisk faktura sendt digitalt mellom systemer', isCorrect: true },
        { id: 'c', text: 'En faktura skrevet ut paa spesialpapir', isCorrect: false },
        { id: 'd', text: 'En kreditnota fra leverandor', isCorrect: false },
      ],
      difficulty: 'easy',
      solution: {
        answer: 'En standardisert elektronisk faktura sendt digitalt mellom systemer',
        explanation: 'EHF (Elektronisk Handelsformat) er en norsk standard for elektronisk fakturering. EHF-fakturaer sendes direkte fra avsenders regnskapssystem til mottakers system via et nasjonalt nettverk (PEPPOL). Alle offentlige virksomheter krever EHF-faktura.',
      },
    },
    {
      id: 'rr-2-4-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Attestasjon og anvisning',
      exerciseType: 'classic',
      task: 'Forklar forskjellen mellom attestasjon og anvisning av en faktura, og forklar hvorfor denne arbeidsdelingen er viktig for internkontrollen.',
      difficulty: 'hard',
      solution: {
        answer: 'Attestasjon betyr at en person bekrefter at varen eller tjenesten er mottatt og at prisen stemmer med det som er avtalt. Anvisning betyr at en person med budsjettansvar godkjenner at fakturaen kan betales. Arbeidsdelingen er viktig fordi den sikrer at ingen enkeltperson alene kan godkjenne og betale en faktura. Personen som attesterer bekrefter at leveransen er reell, mens personen som anviser bekrefter at det er budsjettdekning og at utgiften er i trad med bedriftens planer.',
        explanation: 'Prinsippet om arbeidsdeling er en sentral del av internkontroll. Det reduserer risikoen for misligheter (svindel) og feil ved at flere personer er involvert i godkjenningsprosessen.',
      },
    },
    {
      id: 'rr-2-4-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Digital bilagsflyt',
      exerciseType: 'classic',
      task: 'Beskriv de fem stegene i en digital bilagsflyt for en inngaaende faktura, fra mottak til arkivering.',
      difficulty: 'medium',
      solution: {
        answer: `De fem stegene:
1. Mottak: EHF-faktura mottas direkte i regnskapssystemet, eller papirfaktura skannes/fotograferes og lastes opp.
2. Registrering og kontroll: Systemet leser fakturainformasjon automatisk (OCR/AI), foreslaar kontering, og ansatt kontrollerer og attesterer.
3. Godkjenning: Fakturaen sendes til leder eller budsjettansvarlig for anvisning gjennom digital godkjenningsflyt.
4. Betaling: Systemet oppretter betalingsforslag ved forfall, betaling gjennomfores via nettbank, og betalingen avstemmes automatisk.
5. Arkivering: Bilaget lagres digitalt i regnskapssystemet med kobling til posteringen og oppfyller kravene til oppbevaring i 5 aar.`,
        explanation: 'Digital bilagsflyt effektiviserer regnskapsprosessen og reduserer risikoen for feil. De fleste moderne regnskapssystemer (Visma, Tripletex, PowerOffice) har innebygd stotte for denne arbeidsflyten.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Bokforing i praksis
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2_5: TextbookChapter = {
  id: 'regnskap-revisjon-2-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2.5',
  title: 'Bokforing i praksis',
  description: 'Praktisk bokforing av varekjop, varesalg, lonn, avskrivninger og periodiseringer med konkrete talleksempler og T-konti.',
  estimatedMinutes: 24,
  competenceGoals: [
    'bokfore varekjop og varesalg med merverdiavgift',
    'bokfore lonnskostnader med skattetrekk og arbeidsgiveravgift',
    'bokfore avskrivninger paa varige driftsmidler',
    'bokfore periodiseringer ved aarsoppgjoret',
  ],
  keyTerms: [
    { term: 'Varekjop', definition: 'Innkjop av varer som bedriften skal selge videre, bokfores paa konto 4000 med tilhorende mva og betalingskonto' },
    { term: 'Varesalg', definition: 'Salg av varer til kunder, bokfores paa konto 3000 (inntekt) med utgaaende mva' },
    { term: 'Avskrivning', definition: 'Aarlig kostnadsfoering av verdifall paa varige driftsmidler, bokfores paa konto 7000 mot konto 1200' },
    { term: 'Periodisering', definition: 'Fordeling av inntekter og kostnader paa riktig regnskapsperiode, uavhengig av betalingstidspunktet' },
    { term: 'Lonnsforing', definition: 'Bokforing av lonn med bruttolonn, skattetrekk, arbeidsgiveravgift og nettolonn utbetalt' },
  ],
  content: [
    {
      id: 'rr-2-5-intro',
      type: 'text',
      content: `## Bokforing i praksis

Naa som du kjenner konteringsreglene og kontoplanen, er det paa tide aa sette kunnskapen ut i praksis. I dette kapittelet gaar vi gjennom bokforing av de vanligste forretningshendelsene: varekjop, varesalg, lonn, avskrivninger og periodiseringer.

Hvert eksempel vises med komplett kontering, T-konti og belopskontroll.

I dette kapittelet skal du laere:
- Bokfore varekjop med og uten mva
- Bokfore varesalg kontant og paa kreditt
- Bokfore lonn med alle tilhorende poster
- Bokfore avskrivninger
- Bokfore periodiseringer ved aarsoppgjoret`,
    },
    {
      id: 'rr-2-5-varekjop',
      type: 'text',
      title: 'Bokforing av varekjop',
      content: `### Varekjop med mva

Naar bedriften kjoper varer for videresalg, maa transaksjonen bokfores med tre elementer: varekostnad, inngaaende mva og betalingsmaate.

**Kjop paa kreditt (faktura):**

Bedriften kjoper varer for kr 40 000 ekskl. mva fra Leverandor AS. Mva 25 %.

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 4000 | Varekjop | 40 000 | |
| 2710 | Inngaaende mva | 10 000 | |
| 2400 | Leverandorgjeld | | 50 000 |

**Forklaring:** Varekostnaden (kr 40 000) er en driftskostnad som oker i debet. Inngaaende mva (kr 10 000) er en fordring paa staten som oker i debet. Leverandorgjeld (kr 50 000) er en gjeld som oker i kredit.

**Betaling av leverandorgjeld:**

Naar fakturaen forfaller og bedriften betaler:

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 2400 | Leverandorgjeld | 50 000 | |
| 1920 | Bankinnskudd | | 50 000 |

Leverandorgjelden reduseres (debet) og bankinnskuddet reduseres (kredit).`,
    },
    {
      id: 'rr-2-5-varesalg',
      type: 'text',
      title: 'Bokforing av varesalg',
      content: `### Varesalg med mva

**Salg paa kreditt:**

Bedriften selger varer for kr 60 000 ekskl. mva til Kunde AS. Mva 25 %.

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 1500 | Kundefordringer | 75 000 | |
| 3000 | Salgsinntekt | | 60 000 |
| 2700 | Utgaaende mva | | 15 000 |

**Forklaring:** Kundefordringen (kr 75 000 inkl. mva) er en eiendel som oker i debet. Salgsinntekten (kr 60 000) er en inntekt som oker i kredit. Utgaaende mva (kr 15 000) er gjeld til staten som oker i kredit.

**Kontant salg (betaling med kort/bank):**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 1920 | Bankinnskudd | 75 000 | |
| 3000 | Salgsinntekt | | 60 000 |
| 2700 | Utgaaende mva | | 15 000 |

Ved kontant salg gaar pengene rett i banken i stedet for kundefordringer.

**Mottak av kundebetaling:**

Naar kunden betaler fakturaen:

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 1920 | Bankinnskudd | 75 000 | |
| 1500 | Kundefordringer | | 75 000 |`,
    },
    {
      id: 'rr-2-5-ex-salg-tkonto',
      type: 'example',
      title: 'Eksempel: Komplett salg med T-konti',
      problem: 'Bedriften selger varer for kr 16 000 ekskl. mva paa kreditt. Mva 25 %. Kunden betaler 14 dager senere. Vis begge transaksjonene med T-konti.',
      solution: `**Transaksjon 1: Salg paa kreditt**
Belop inkl. mva: kr 16 000 + kr 4 000 = kr 20 000

\`\`\`
1500 Kundefordr.       3000 Salgsinntekt      2700 Utg. mva
──────────────        ──────────────        ──────────────
D      |  K           D      |  K           D      |  K
───────|──────        ───────|──────        ───────|──────
20 000 |                     | 16 000              | 4 000
\`\`\`

**Transaksjon 2: Kundebetaling**

\`\`\`
1920 Bankinnskudd      1500 Kundefordr.
──────────────        ──────────────
D      |  K           D      |  K
───────|──────        ───────|──────
20 000 |              20 000 | 20 000
\`\`\`

Etter begge transaksjonene har konto 1500 Kundefordringer saldo kr 0 (20 000 - 20 000), fordi kunden har betalt.`,
    },
    {
      id: 'rr-2-5-lonn',
      type: 'text',
      title: 'Bokforing av lonn',
      content: `### Lonnsfoering

Lonnsboekforing er en av de mer komplekse transaksjonene fordi den involverer mange kontoer.

**Eksempel:** Ansatt har bruttolonn kr 45 000. Skattetrekk 33 % = kr 14 850. Arbeidsgiveravgift 14,1 % = kr 6 345.

**Steg 1: Bokforing av lonnskostnad og trekk**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 5000 | Lonn | 45 000 | |
| 2600 | Skyldig skattetrekk | | 14 850 |
| 2900 | Skyldig nettolonn | | 30 150 |

**Steg 2: Bokforing av arbeidsgiveravgift**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 5400 | Arbeidsgiveravgift | 6 345 | |
| 2770 | Skyldig arbeidsgiveravgift | | 6 345 |

**Steg 3: Utbetaling av nettolonn**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 2900 | Skyldig nettolonn | 30 150 | |
| 1920 | Bankinnskudd | | 30 150 |

**Total lonnskostnad for bedriften:** kr 45 000 + kr 6 345 = kr 51 345
**Utbetalt til ansatt:** kr 30 150
**Skyldig til staten:** kr 14 850 (skattetrekk) + kr 6 345 (aga) = kr 21 195`,
    },
    {
      id: 'rr-2-5-avskrivninger',
      type: 'text',
      title: 'Bokforing av avskrivninger',
      content: `### Avskrivninger paa varige driftsmidler

Avskrivninger fordeler anskaffelseskostnaden for et driftsmiddel over dets forventede levetid.

**Eksempel:** En maskin kjopt for kr 300 000 avskrives lineaert over 5 aar.

Aarlig avskrivning: kr 300 000 / 5 = kr 60 000

**Kontering av aarlig avskrivning:**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 7000 | Avskrivning paa driftsmidler | 60 000 | |
| 1200 | Maskiner (akkumulert avskrivning) | | 60 000 |

**Forklaring:** Avskrivningskostnaden (konto 7000) er en driftskostnad som oker i debet. Maskinens bokforte verdi (konto 1200) reduseres gjennom kredit.

**Utvikling over 5 aar:**

| Aar | Avskrivning | Akkumulert avskr. | Bokfort verdi |
|-----|-------------|-------------------|---------------|
| 0 | - | - | 300 000 |
| 1 | 60 000 | 60 000 | 240 000 |
| 2 | 60 000 | 120 000 | 180 000 |
| 3 | 60 000 | 180 000 | 120 000 |
| 4 | 60 000 | 240 000 | 60 000 |
| 5 | 60 000 | 300 000 | 0 |`,
    },
    {
      id: 'rr-2-5-periodiseringer',
      type: 'text',
      title: 'Bokforing av periodiseringer',
      content: `### Periodiseringer ved aarsoppgjoret

Periodiseringer sikrer at inntekter og kostnader fores i riktig regnskapsaar.

**Forskuddsbetalt kostnad (betalt, men gjelder neste aar):**

Bedriften betaler forsikring for 2025 i desember 2024: kr 24 000.

Kontering ved betaling (desember 2024):

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 1700 | Forskuddsbetalt kostnad | 24 000 | |
| 1920 | Bankinnskudd | | 24 000 |

I 2025 fores kr 2 000 per maaned fra konto 1700 til konto 6400 (forsikring):

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 6400 | Forsikringskostnad | 2 000 | |
| 1700 | Forskuddsbetalt kostnad | | 2 000 |

**Paalopte kostnader (paadrett, men ikke betalt):**

Stromregning for desember 2024 paa kr 8 000 mottas forst i januar 2025.

Kontering ved aarsoppgjoret (31.12.2024):

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 6340 | Strom | 8 000 | |
| 2900 | Paalopte kostnader (kortsiktig gjeld) | | 8 000 |

Denne posteringen sikrer at stromkostnaden belastes riktig aar (2024), selv om fakturaen forst mottas i 2025.`,
    },
    {
      id: 'rr-2-5-note-mva',
      type: 'note',
      title: 'Mva-oppgjoret',
      content: 'Ved utgangen av hver mva-termin gjores et mva-oppgjor. Differansen mellom utgaaende mva (konto 2700, det bedriften har krevd inn fra kunder) og inngaaende mva (konto 2710, det bedriften har betalt til leverandorer) utgjor mva som skal betales til staten. Hvis inngaaende mva er storst, faar bedriften penger tilbake.\n\nEksempel: Utgaaende mva kr 45 000 minus inngaaende mva kr 30 000 = kr 15 000 skyldig til staten.',
    },
    {
      id: 'rr-2-5-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Varekjop paa kreditt',
      exerciseType: 'classic',
      task: 'Bedriften kjoper varer for kr 25 000 ekskl. mva paa kreditt fra Leverandor AS. Mva 25 %. Konter transaksjonen med konto, belop og debet/kredit.',
      difficulty: 'easy',
      solution: {
        answer: `Kontering:
- Debet 4000 Varekjop: kr 25 000
- Debet 2710 Inngaaende mva: kr 6 250
- Kredit 2400 Leverandorgjeld: kr 31 250

Kontroll: Debet = 25 000 + 6 250 = 31 250. Kredit = 31 250. Stemmer.`,
        explanation: 'Varekjop paa kreditt betyr at varene mottas, men betalingen utsettes. Varekostnaden bokfores som kostnad (debet klasse 4), mva som fordring (debet klasse 2), og det totale belopet som leverandorgjeld (kredit klasse 2).',
      },
    },
    {
      id: 'rr-2-5-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Kontant varesalg',
      exerciseType: 'classic',
      task: 'Bedriften selger varer for kr 18 000 ekskl. mva (mva 25 %). Kunden betaler med kort (direkte til bank). Konter transaksjonen.',
      difficulty: 'easy',
      solution: {
        answer: `Kontering:
- Debet 1920 Bankinnskudd: kr 22 500
- Kredit 3000 Salgsinntekt: kr 18 000
- Kredit 2700 Utgaaende mva: kr 4 500

Kontroll: Debet = 22 500. Kredit = 18 000 + 4 500 = 22 500. Stemmer.`,
        explanation: 'Ved kontantsalg mottas betalingen umiddelbart paa bankkontoen (debet, eiendel oker). Salgsinntekten fores i kredit (inntekt oker) og utgaaende mva fores i kredit (gjeld til staten oker).',
      },
    },
    {
      id: 'rr-2-5-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Komplett lonnsforing',
      exerciseType: 'classic',
      task: 'En ansatt har bruttolonn kr 38 000. Skattetrekk er 30 %. Arbeidsgiveravgift er 14,1 %. Konter: a) Lonnskostnad og trekk, b) Arbeidsgiveravgift, c) Utbetaling av nettolonn. Hva er bedriftens totale lonnskostnad?',
      difficulty: 'hard',
      solution: {
        answer: `Beregninger:
- Skattetrekk: kr 38 000 x 30 % = kr 11 400
- Nettolonn: kr 38 000 - kr 11 400 = kr 26 600
- Arbeidsgiveravgift: kr 38 000 x 14,1 % = kr 5 358

a) Lonnskostnad og trekk:
- Debet 5000 Lonn: kr 38 000
- Kredit 2600 Skyldig skattetrekk: kr 11 400
- Kredit 2900 Skyldig nettolonn: kr 26 600

b) Arbeidsgiveravgift:
- Debet 5400 Arbeidsgiveravgift: kr 5 358
- Kredit 2770 Skyldig arbeidsgiveravgift: kr 5 358

c) Utbetaling:
- Debet 2900 Skyldig nettolonn: kr 26 600
- Kredit 1920 Bankinnskudd: kr 26 600

Total lonnskostnad: kr 38 000 + kr 5 358 = kr 43 358`,
        explanation: 'Lonnsboekforing involverer mange kontoer. Bruttolonnen er kostnaden paa konto 5000, mens skattetrekk og arbeidsgiveravgift er gjeld til staten (klasse 2). Arbeidsgiveravgiften er en ekstra kostnad for bedriften paa konto 5400.',
      },
    },
    {
      id: 'rr-2-5-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Avskrivning',
      exerciseType: 'multiple-choice',
      task: 'Bedriften kjoper en varebil for kr 400 000 som skal avskrives lineaert over 8 aar. Hva er den aarlige avskrivningen, og hvilke kontoer pavirkes?',
      options: [
        { id: 'a', text: 'kr 50 000 - Debet 7000, Kredit 1200', isCorrect: true },
        { id: 'b', text: 'kr 50 000 - Debet 1200, Kredit 7000', isCorrect: false },
        { id: 'c', text: 'kr 80 000 - Debet 7000, Kredit 1200', isCorrect: false },
        { id: 'd', text: 'kr 50 000 - Debet 7000, Kredit 1920', isCorrect: false },
      ],
      difficulty: 'medium',
      solution: {
        answer: 'kr 50 000 - Debet 7000, Kredit 1200',
        explanation: 'Aarlig avskrivning = kr 400 000 / 8 aar = kr 50 000. Avskrivningen fores som kostnad i debet paa konto 7000 (Avskrivning paa driftsmidler) og reduserer eiendelens verdi i kredit paa konto 1200 (Maskiner/transportmidler). Det er viktig at avskrivningen ikke gaar mot bank (1920) - det er ingen pengetransaksjon.',
      },
    },
    {
      id: 'rr-2-5-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Periodisering',
      exerciseType: 'classic',
      task: 'Bedriften betaler husleie for 1. kvartal 2025 (januar-mars) paa kr 45 000 den 20. desember 2024. Vis konteringen bade ved betaling (desember 2024) og ved periodisering i januar 2025.',
      difficulty: 'hard',
      solution: {
        answer: `Desember 2024 - Betaling:
- Debet 1700 Forskuddsbetalt kostnad: kr 45 000
- Kredit 1920 Bankinnskudd: kr 45 000

Januar 2025 - Periodisering (1/3 av belopet):
- Debet 6300 Leie av lokaler: kr 15 000
- Kredit 1700 Forskuddsbetalt kostnad: kr 15 000

Tilsvarende postering gjores i februar og mars 2025. Etter mars har konto 1700 saldo kr 0 for denne husleien, og hele belopet er kostnadsfort i riktig periode.`,
        explanation: 'Forskuddsbetalt kostnad fores forst som eiendel (omlopsmiddel) i balansen. Deretter periodiseres belopet maanedlig til riktig kostnadskonto. Dette sikrer at husleiekostnaden belastes de maanedene den gjelder for.',
      },
    },
    {
      id: 'rr-2-5-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Mva-oppgjor',
      exerciseType: 'classic',
      task: 'Ved utgangen av mva-terminen har bedriften utgaaende mva paa kr 62 000 og inngaaende mva paa kr 38 000. Konter mva-oppgjoret og vis belopet som skal betales til staten.',
      difficulty: 'medium',
      solution: {
        answer: `Mva-oppgjor:
Skyldig mva = Utgaaende mva - Inngaaende mva
Skyldig mva = kr 62 000 - kr 38 000 = kr 24 000

Kontering:
- Debet 2700 Utgaaende mva: kr 62 000
- Kredit 2710 Inngaaende mva: kr 38 000
- Kredit 2740 Skyldig mva: kr 24 000

Ved betaling:
- Debet 2740 Skyldig mva: kr 24 000
- Kredit 1920 Bankinnskudd: kr 24 000

Bedriften skal betale kr 24 000 til staten.`,
        explanation: 'Ved mva-oppgjoret nettes utgaaende og inngaaende mva mot hverandre. Differansen overflores til konto 2740 (Skyldig mva) som betales til Skatteetaten innen fristen for mva-meldingen.',
      },
    },
    {
      id: 'rr-2-5-ex7',
      type: 'exercise',
      title: 'Oppgave 7: Helhetlig maanedsbokforing',
      exerciseType: 'classic',
      task: 'Bokfor folgende transaksjoner for Handel AS i januar: 1) Kjopt varer paa kreditt kr 80 000 ekskl. mva (25 %). 2) Solgt varer paa kreditt kr 120 000 ekskl. mva (25 %). 3) Betalt lonn: bruttolonn kr 50 000, skattetrekk 35 %, arbeidsgiveravgift 14,1 %. 4) Mottatt kundebetaling kr 75 000. 5) Betalt leverandorgjeld kr 60 000. Sett opp T-konto for 1920 Bankinnskudd (IB kr 200 000) og beregn saldo.',
      difficulty: 'hard',
      solution: {
        answer: `Kontering av alle transaksjoner:

1) Varekjop paa kreditt:
D 4000 Varekjop: 80 000 | D 2710 Inng. mva: 20 000 | K 2400 Lev.gjeld: 100 000

2) Varesalg paa kreditt:
D 1500 Kundefordr.: 150 000 | K 3000 Salgsinntekt: 120 000 | K 2700 Utg. mva: 30 000

3a) Lonn og trekk:
D 5000 Lonn: 50 000 | K 2600 Skyldig skattetr.: 17 500 | K 2900 Skyldig nettolonn: 32 500
3b) Arbeidsgiveravgift:
D 5400 Aga: 7 050 | K 2770 Skyldig aga: 7 050
3c) Utbetaling nettolonn:
D 2900 Skyldig nettolonn: 32 500 | K 1920 Bank: 32 500

4) Kundebetaling:
D 1920 Bank: 75 000 | K 1500 Kundefordr.: 75 000

5) Betalt leverandorgjeld:
D 2400 Lev.gjeld: 60 000 | K 1920 Bank: 60 000

T-konto 1920 Bankinnskudd:
Debet: IB 200 000 + Kundebetaling 75 000 = 275 000
Kredit: Nettolonn 32 500 + Lev.gjeld 60 000 = 92 500
Saldo = 275 000 - 92 500 = kr 182 500`,
        explanation: 'Denne oppgaven viser hvordan ulike transaksjonstyper pavirker bankkontoen. Merk at varekjop paa kreditt (1) og varesalg paa kreditt (2) ikke pavirker bank direkte - de gaar via leverandorgjeld og kundefordringer. Lonnsutbetaling og leverandorbetaling reduserer bank, mens kundeinnbetaling oker bank.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export
// ============================================================================

export const REGNSKAP_REVISJON_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_2_1,
  CHAPTER_REGNSKAP_REVISJON_2_2,
  CHAPTER_REGNSKAP_REVISJON_2_3,
  CHAPTER_REGNSKAP_REVISJON_2_4,
  CHAPTER_REGNSKAP_REVISJON_2_5,
];

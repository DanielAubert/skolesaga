/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Regnskap og revisjon (VG3 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Regnskapets grunnprinsipper
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_1: TextbookChapter = {
  id: 'regnskap-revisjon-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '1',
  title: 'Regnskapets grunnprinsipper',
  description: 'Lær om de grunnleggende prinsippene som styrer regnskapsføring i Norge.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare regnskapets formål og brukere',
    'gjøre rede for de grunnleggende regnskapsprinsippene',
    'forstå sammenhengen mellom regnskapsloven og god regnskapsskikk',
  ],
  content: [
    {
      id: 'regnskap-revisjon-1-intro',
      type: 'text',
      content: `Regnskap er språket i næringslivet. Det gir oss et systematisk bilde av en virksomhets økonomiske situasjon og utvikling. For at regnskapet skal være pålitelig og sammenlignbart, må det utarbeides etter bestemte prinsipper og regler.

I dette kapittelet skal vi se på de grunnleggende prinsippene som ligger til grunn for all regnskapsføring i Norge.`,
    },
    {
      id: 'regnskap-revisjon-1-def-1',
      type: 'definition',
      title: 'Regnskap',
      content: `**Regnskap** er en systematisk registrering, måling og rapportering av økonomiske transaksjoner i en virksomhet. Formålet er å gi et rettvisende bilde av virksomhetens økonomiske stilling og resultat.`,
    },
    {
      id: 'regnskap-revisjon-1-text-1',
      type: 'text',
      title: 'Regnskapets brukere',
      content: `Regnskapet har mange ulike brukere med forskjellige informasjonsbehov:

**Interne brukere:**
- Ledelsen - for beslutninger og styring
- Styret - for overordnet kontroll
- Ansatte - for å vurdere jobbsikkerhet og lønnsforhandlinger

**Eksterne brukere:**
- Eiere og investorer - for å vurdere avkastning og verdi
- Kreditorer (banker, leverandører) - for å vurdere kredittverdighet
- Skattemyndighetene - for å beregne skatt
- Offentlige myndigheter - for statistikk og tilsyn
- Konkurrenter - for benchmarking`,
    },
    {
      id: 'regnskap-revisjon-1-def-2',
      type: 'definition',
      title: 'Regnskapsloven',
      content: `**Regnskapsloven** (lov av 17. juli 1998 nr. 56) er den sentrale loven som regulerer regnskapsføring i Norge. Den fastsetter:
- Hvem som har regnskapsplikt
- Grunnleggende regnskapsprinsipper
- Krav til årsregnskap og årsberetning
- Oppbevaringsplikt for regnskapsmateriale`,
    },
    {
      id: 'regnskap-revisjon-1-text-2',
      type: 'text',
      title: 'De grunnleggende regnskapsprinsippene',
      content: `Regnskapsloven § 4-1 fastsetter de grunnleggende regnskapsprinsippene som alle regnskapspliktige må følge:

1. **Transaksjonsprinsippet** - Transaksjoner skal regnskapsføres til verdien av vederlaget på transaksjonstidspunktet

2. **Opptjeningsprinsippet** - Inntekt skal resultatføres når den er opptjent

3. **Sammenstillingsprinsippet** - Utgifter skal kostnadsføres i samme periode som tilhørende inntekt

4. **Forsiktighetsprinsippet** - Urealisert tap skal resultatføres, men ikke urealisert gevinst

5. **Sikring** - Gevinst og tap på sikringsinstrument skal resultatføres i samme periode som gevinst og tap på sikringsobjektet

6. **God regnskapsskikk** - Årsregnskapet skal utarbeides i samsvar med god regnskapsskikk`,
    },
    {
      id: 'regnskap-revisjon-1-def-3',
      type: 'definition',
      title: 'Transaksjonsprinsippet',
      content: `**Transaksjonsprinsippet** innebærer at alle transaksjoner skal regnskapsføres til verdien av vederlaget på transaksjonstidspunktet. Dette betyr at vi registrerer faktiske hendelser til faktiske verdier - ikke estimater eller forventninger.`,
    },
    {
      id: 'regnskap-revisjon-1-example-1',
      type: 'example',
      title: 'Eksempel: Transaksjonsprinsippet',
      content: `**Situasjon:** En bedrift kjøper en maskin for 500 000 kr. Markedsverdien av maskinen er egentlig 600 000 kr.

**Regnskapsføring:** Maskinen føres inn i regnskapet til 500 000 kr (anskaffelseskost), ikke til markedsverdi. Dette følger transaksjonsprinsippet - vi registrerer det faktiske vederlaget.`,
    },
    {
      id: 'regnskap-revisjon-1-def-4',
      type: 'definition',
      title: 'Opptjeningsprinsippet',
      content: `**Opptjeningsprinsippet** sier at inntekt skal resultatføres når den er opptjent, uavhengig av når betalingen mottas. En inntekt er opptjent når:
- Varen er levert
- Tjenesten er utført
- Risiko og kontroll er overført til kjøper`,
    },
    {
      id: 'regnskap-revisjon-1-example-2',
      type: 'example',
      title: 'Eksempel: Opptjeningsprinsippet',
      content: `**Situasjon:** En konsulent utfører arbeid i desember 2024, men sender faktura og mottar betaling i januar 2025.

**Regnskapsføring:** Inntekten skal føres i 2024 (når arbeidet ble utført), ikke i 2025 (når betalingen kom). Ved årsslutt bokføres dette som en kundefordring.`,
    },
    {
      id: 'regnskap-revisjon-1-def-5',
      type: 'definition',
      title: 'Sammenstillingsprinsippet',
      content: `**Sammenstillingsprinsippet** (matching-prinsippet) krever at kostnader skal føres i samme periode som de inntektene kostnadene har bidratt til å skape. Dette gir et riktig bilde av periodens resultat.`,
    },
    {
      id: 'regnskap-revisjon-1-example-3',
      type: 'example',
      title: 'Eksempel: Sammenstillingsprinsippet',
      content: `**Situasjon:** En butikk kjøper inn varer for 100 000 kr i november. Varene selges i desember for 150 000 kr.

**Regnskapsføring:**
- November: Varene legges på lager (eiendel, ikke kostnad)
- Desember: Varekostnad 100 000 kr og salgsinntekt 150 000 kr føres i samme periode

Bruttofortjeneste i desember: 150 000 - 100 000 = 50 000 kr`,
    },
    {
      id: 'regnskap-revisjon-1-def-6',
      type: 'definition',
      title: 'Forsiktighetsprinsippet',
      content: `**Forsiktighetsprinsippet** krever at vi skal være forsiktige i vurderingen av eiendeler og inntekter:
- Urealisert tap skal resultatføres straks
- Urealisert gevinst skal IKKE resultatføres
- Ved usikkerhet skal man velge den løsningen som gir lavest verdi på eiendeler og inntekter`,
    },
    {
      id: 'regnskap-revisjon-1-example-4',
      type: 'example',
      title: 'Eksempel: Forsiktighetsprinsippet',
      content: `**Situasjon:** En bedrift eier aksjer som ble kjøpt for 200 000 kr. Ved årsslutt er markedsverdien:
- Scenario A: 180 000 kr (verdifall)
- Scenario B: 250 000 kr (verdistigning)

**Regnskapsføring:**
- Scenario A: Tapet på 20 000 kr må resultatføres (nedskriving)
- Scenario B: Gevinsten på 50 000 kr skal IKKE resultatføres før aksjene er solgt`,
    },
    {
      id: 'regnskap-revisjon-1-def-7',
      type: 'definition',
      title: 'God regnskapsskikk',
      content: `**God regnskapsskikk** er en rettslig standard som supplerer regnskapsloven. Den utvikles gjennom:
- Norsk RegnskapsStiftelse sine standarder
- Regnskapspraksis i bransjen
- Teori og faglitteratur
- Uttalelser fra myndighetene`,
    },
    {
      id: 'regnskap-revisjon-1-text-3',
      type: 'text',
      title: 'Andre viktige prinsipper',
      content: `I tillegg til hovedprinsippene finnes flere grunnleggende forutsetninger:

**Fortsatt drift (going concern)**
Regnskapet utarbeides under forutsetning om fortsatt drift, med mindre avvikling er besluttet eller sannsynlig.

**Kongruensprinsippet**
Alle inntekter og kostnader skal resultatføres - egenkapitalen kan bare endres via resultatet eller gjennom transaksjoner med eierne.

**Ensartet prinsippanvendelse**
Samme prinsipper skal brukes fra år til år for å sikre sammenlignbarhet.

**Vesentlighet**
Ubetydelige forhold kan behandles på en enklere måte enn det prinsippene strengt tatt krever.`,
    },
    {
      id: 'regnskap-revisjon-1-note-1',
      type: 'note',
      title: 'IFRS vs. norsk regnskapslov',
      content: `Børsnoterte selskaper i Norge må følge **IFRS** (International Financial Reporting Standards), som er internasjonale regnskapsstandarder. Øvrige selskaper kan velge mellom IFRS og norske regler etter regnskapsloven. IFRS legger større vekt på virkelig verdi-måling enn norske regler.`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket prinsipp sier at inntekt skal føres når den er opptjent, ikke når betalingen mottas?',
      options: [
        { id: 'a', text: 'Transaksjonsprinsippet', isCorrect: false },
        { id: 'b', text: 'Opptjeningsprinsippet', isCorrect: true },
        { id: 'c', text: 'Forsiktighetsprinsippet', isCorrect: false },
        { id: 'd', text: 'Sammenstillingsprinsippet', isCorrect: false },
      ],
      solution: 'Opptjeningsprinsippet sier at inntekt skal resultatføres når den er opptjent, uavhengig av betalingstidspunkt.',
    },
    {
      id: 'regnskap-revisjon-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med regnskapet?',
      options: [
        { id: 'a', text: 'Å minimere skatten', isCorrect: false },
        { id: 'b', text: 'Å gi et rettvisende bilde av virksomhetens økonomi', isCorrect: true },
        { id: 'c', text: 'Å tilfredsstille bankene', isCorrect: false },
        { id: 'd', text: 'Å maksimere resultatet', isCorrect: false },
      ],
      solution: 'Hovedformålet med regnskapet er å gi et rettvisende bilde av virksomhetens økonomiske stilling og resultat.',
    },
    {
      id: 'regnskap-revisjon-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Ifølge forsiktighetsprinsippet, hvordan skal urealisert gevinst behandles?',
      options: [
        { id: 'a', text: 'Den skal resultatføres umiddelbart', isCorrect: false },
        { id: 'b', text: 'Den skal ikke resultatføres før gevinsten er realisert', isCorrect: true },
        { id: 'c', text: 'Den skal føres direkte mot egenkapitalen', isCorrect: false },
        { id: 'd', text: 'Den skal fordeles over flere år', isCorrect: false },
      ],
      solution: 'Forsiktighetsprinsippet sier at urealisert gevinst ikke skal resultatføres - kun urealisert tap skal tas med.',
    },
    {
      id: 'regnskap-revisjon-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Sammenstillingsprinsippet innebærer at:',
      options: [
        { id: 'a', text: 'Alle kostnader skal føres når de betales', isCorrect: false },
        { id: 'b', text: 'Kostnader skal føres i samme periode som tilhørende inntekt', isCorrect: true },
        { id: 'c', text: 'Inntekter og kostnader skal føres hver for seg', isCorrect: false },
        { id: 'd', text: 'Bare sikre inntekter skal regnskapsføres', isCorrect: false },
      ],
      solution: 'Sammenstillingsprinsippet krever at kostnader føres i samme periode som de inntektene de har bidratt til.',
    },
    {
      id: 'regnskap-revisjon-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift kjøper en tomt for 2 mill. kr. Tomten har en antatt markedsverdi på 3 mill. kr. Til hvilken verdi skal tomten føres i balansen?',
      options: [
        { id: 'a', text: '3 000 000 kr (markedsverdi)', isCorrect: false },
        { id: 'b', text: '2 000 000 kr (anskaffelseskost)', isCorrect: true },
        { id: 'c', text: '2 500 000 kr (gjennomsnitt)', isCorrect: false },
        { id: 'd', text: '0 kr (tomt avskrives ikke)', isCorrect: false },
      ],
      solution: 'Ifølge transaksjonsprinsippet skal eiendeler føres til anskaffelseskost, altså 2 mill. kr.',
    },
    {
      id: 'regnskap-revisjon-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken lov er den sentrale loven for regnskapsføring i Norge?',
      options: [
        { id: 'a', text: 'Bokføringsloven', isCorrect: false },
        { id: 'b', text: 'Aksjeloven', isCorrect: false },
        { id: 'c', text: 'Regnskapsloven', isCorrect: true },
        { id: 'd', text: 'Revisorloven', isCorrect: false },
      ],
      solution: 'Regnskapsloven av 1998 er den sentrale loven som regulerer regnskapsføring i Norge.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Bokføring og bilagshåndtering
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_2: TextbookChapter = {
  id: 'regnskap-revisjon-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '2',
  title: 'Bokføring og bilagshåndtering',
  description: 'Lær om bokføringslovens krav, bilagshåndtering og kontoplan.',
  estimatedMinutes: 105,
  competenceGoals: [
    'forstå bokføringslovens krav til dokumentasjon',
    'håndtere bilag korrekt og systematisk',
    'bruke kontoplan og forstå kontosystemet',
    'utføre enkle bokføringstransaksjoner',
  ],
  content: [
    {
      id: 'regnskap-revisjon-2-intro',
      type: 'text',
      content: `Bokføring er den daglige registreringen av økonomiske transaksjoner i regnskapet. For at regnskapet skal være pålitelig og etterprøvbart, stiller bokføringsloven strenge krav til hvordan transaksjoner skal dokumenteres og registreres.`,
    },
    {
      id: 'regnskap-revisjon-2-def-1',
      type: 'definition',
      title: 'Bokføringsloven',
      content: `**Bokføringsloven** (lov av 19. november 2004 nr. 73) regulerer:
- Løpende bokføring av transaksjoner
- Krav til dokumentasjon (bilag)
- Oppbevaringsplikt
- Spesifikasjoner som skal kunne utarbeides

Loven gjelder alle som har regnskapsplikt eller bokføringsplikt.`,
    },
    {
      id: 'regnskap-revisjon-2-text-1',
      type: 'text',
      title: 'Grunnleggende bokføringsprinsipper',
      content: `Bokføringsloven § 4 fastsetter 10 grunnleggende bokføringsprinsipper:

1. **Regnskapssystem** - Bokføringen skal være ordentlig og oversiktlig
2. **Fullstendighet** - Alle transaksjoner skal bokføres
3. **Realitet** - Bokførte opplysninger skal være reelle og verifiserbare
4. **Nøyaktighet** - Korrekt beløp skal registreres
5. **Ajourhold** - Bokføring skal skje løpende
6. **Dokumentasjon** - Alle poster skal være dokumentert med bilag
7. **Sporbarhet** - Det skal være mulig å følge transaksjonssporet
8. **Oppbevaring** - Regnskapsmateriale skal oppbevares forsvarlig
9. **Sikring** - Materialet skal sikres mot tap og ødeleggelse
10. **God bokføringsskikk** - Bokføringen skal følge god bokføringsskikk`,
    },
    {
      id: 'regnskap-revisjon-2-def-2',
      type: 'definition',
      title: 'Bilag',
      content: `Et **bilag** er dokumentasjon for en bokført transaksjon. Bilaget skal inneholde:
- Nummer og dato
- Beskrivelse av transaksjonen
- Beløp (inklusive MVA hvis relevant)
- Partenes navn (kjøper/selger)
- Organisasjonsnummer (for salgsdokumenter)`,
    },
    {
      id: 'regnskap-revisjon-2-text-2',
      type: 'text',
      title: 'Typer bilag',
      content: `De vanligste bilagstypene er:

**Inngående fakturaer** - Fakturaer fra leverandører (kjøp)
**Utgående fakturaer** - Fakturaer til kunder (salg)
**Kontantbilag** - Dokumentasjon av kontanttransaksjoner
**Bankbilag** - Kontoutskrifter og betalingsbekreftelser
**Lønnsbilag** - Dokumentasjon av lønnsutbetalinger
**Memorialbilag** - Interne korrigeringer og periodiseringer`,
    },
    {
      id: 'regnskap-revisjon-2-warning-1',
      type: 'warning',
      title: 'Krav til salgsdokument',
      content: `Et salgsdokument (faktura) MÅ inneholde:
- Selgers navn, adresse og org.nr.
- Kjøpers navn og adresse (org.nr. ved B2B)
- Fakturanummer og dato
- Beskrivelse av varen/tjenesten
- Kvantum, pris og beløp
- MVA-beløp og MVA-sats (hvis MVA-pliktig)
- Betalingsbetingelser`,
    },
    {
      id: 'regnskap-revisjon-2-def-3',
      type: 'definition',
      title: 'Kontoplan',
      content: `En **kontoplan** er en systematisk oversikt over alle kontoene som brukes i regnskapet. I Norge bruker de fleste **NS 4102** (Norsk Standard kontoplan) som er delt inn i kontoklasser:

- **1xxx** - Eiendeler (balanse)
- **2xxx** - Egenkapital og gjeld (balanse)
- **3xxx** - Salgsinntekter (resultat)
- **4xxx** - Varekostnad (resultat)
- **5xxx** - Lønnskostnader (resultat)
- **6xxx** - Avskrivninger og andre driftskostnader (resultat)
- **7xxx** - Andre driftskostnader (resultat)
- **8xxx** - Finansposter (resultat)`,
    },
    {
      id: 'regnskap-revisjon-2-example-1',
      type: 'example',
      title: 'Eksempel: Vanlige kontoer',
      content: `**Balansekontoer:**
- 1200 Maskiner og inventar
- 1500 Kundefordringer
- 1900 Bankinnskudd
- 2000 Aksjekapital
- 2400 Leverandørgjeld

**Resultatkontoer:**
- 3000 Salgsinntekt
- 4000 Varekostnad
- 5000 Lønnskostnad
- 6000 Avskrivning
- 8040 Rentekostnad`,
    },
    {
      id: 'regnskap-revisjon-2-def-4',
      type: 'definition',
      title: 'Debet og kredit',
      content: `Dobbel bokføring innebærer at hver transaksjon registreres med like store beløp i debet og kredit:

**Debet (venstre side):**
- Økning på eiendelskontoer
- Reduksjon på gjeld/EK-kontoer
- Kostnader

**Kredit (høyre side):**
- Reduksjon på eiendelskontoer
- Økning på gjeld/EK-kontoer
- Inntekter`,
    },
    {
      id: 'regnskap-revisjon-2-example-2',
      type: 'example',
      title: 'Eksempel: Bokføring av varekjøp',
      content: `**Transaksjon:** Kjøp av varer for 10 000 kr + MVA 25% = 12 500 kr på kreditt.

| Konto | Debet | Kredit |
|---|---|---|
| 4000 Varekostnad | 10 000 | |
| 2710 Inngående MVA | 2 500 | |
| 2400 Leverandørgjeld | | 12 500 |

Forklaring: Varekostnaden øker (debet), MVA til gode øker (debet), og gjelden til leverandøren øker (kredit).`,
    },
    {
      id: 'regnskap-revisjon-2-example-3',
      type: 'example',
      title: 'Eksempel: Bokføring av varesalg',
      content: `**Transaksjon:** Salg av varer for 20 000 kr + MVA 25% = 25 000 kr på kreditt.

| Konto | Debet | Kredit |
|---|---|---|
| 1500 Kundefordringer | 25 000 | |
| 3000 Salgsinntekt | | 20 000 |
| 2700 Utgående MVA | | 5 000 |

Forklaring: Kundefordringen øker (debet), salgsinntekten øker (kredit), og MVA-gjelden øker (kredit).`,
    },
    {
      id: 'regnskap-revisjon-2-text-3',
      type: 'text',
      title: 'Oppbevaringsplikt',
      content: `Bokføringsloven stiller krav til oppbevaring av regnskapsmateriale:

**5 års oppbevaring:**
- Årsregnskap og årsberetning
- Bokføringsspesifikasjon
- Kontospesifikasjon
- Kunde- og leverandørspesifikasjon
- Dokumentasjon av bokførte opplysninger (bilag)

**3,5 års oppbevaring:**
- Dokumentasjon av balansen (bankavstemming, lagertelling mv.)
- Avtaler og korrespondanse av betydning

Oppbevaringen kan skje elektronisk, men det stilles krav til lesbarhet og sikkerhet.`,
    },
    {
      id: 'regnskap-revisjon-2-tip-1',
      type: 'tip',
      title: 'Elektronisk bilagshåndtering',
      content: `De fleste bedrifter bruker i dag elektroniske regnskapssystemer som:
- Mottar e-fakturaer direkte
- Scanner papirbilag
- Automatiserer kontering
- Sikrer korrekt oppbevaring

Populære systemer i Norge inkluderer Tripletex, Visma, PowerOffice og Fiken.`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor lenge må primærdokumentasjon (bilag) oppbevares ifølge bokføringsloven?',
      options: [
        { id: 'a', text: '3 år', isCorrect: false },
        { id: 'b', text: '5 år', isCorrect: true },
        { id: 'c', text: '10 år', isCorrect: false },
        { id: 'd', text: '15 år', isCorrect: false },
      ],
      solution: 'Primærdokumentasjon som bilag skal oppbevares i 5 år etter regnskapsårets slutt.',
    },
    {
      id: 'regnskap-revisjon-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken kontoklasse brukes for salgsinntekter i NS 4102?',
      options: [
        { id: 'a', text: '1xxx', isCorrect: false },
        { id: 'b', text: '2xxx', isCorrect: false },
        { id: 'c', text: '3xxx', isCorrect: true },
        { id: 'd', text: '4xxx', isCorrect: false },
      ],
      solution: 'Salgsinntekter føres i kontoklasse 3 (3xxx) i NS 4102.',
    },
    {
      id: 'regnskap-revisjon-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Ved kjøp av varer på kreditt, hvordan bokføres leverandørgjelden?',
      options: [
        { id: 'a', text: 'Debet på leverandørkonto', isCorrect: false },
        { id: 'b', text: 'Kredit på leverandørkonto', isCorrect: true },
        { id: 'c', text: 'Debet på varekostkonto', isCorrect: false },
        { id: 'd', text: 'Kredit på bankkonto', isCorrect: false },
      ],
      solution: 'Gjeld øker på kreditsiden, så leverandørgjeld føres kredit når den oppstår.',
    },
    {
      id: 'regnskap-revisjon-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken informasjon MÅ en faktura inneholde for å være gyldig salgsdokumentasjon?',
      options: [
        { id: 'a', text: 'Kun beløp og dato', isCorrect: false },
        { id: 'b', text: 'Selgers org.nr., fakturanummer, dato, beløp og MVA-info', isCorrect: true },
        { id: 'c', text: 'Bare selgers navn og beløp', isCorrect: false },
        { id: 'd', text: 'E-postadresse og telefonnummer', isCorrect: false },
      ],
      solution: 'En faktura må ha selgers org.nr., fakturanummer, dato, beskrivelse, beløp og MVA-informasjon.',
    },
    {
      id: 'regnskap-revisjon-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift selger varer for 50 000 kr + 25% MVA på kreditt. Hva er riktig bokføring?',
      options: [
        { id: 'a', text: 'Debet bank 62 500, kredit salg 62 500', isCorrect: false },
        { id: 'b', text: 'Debet kundefordring 62 500, kredit salg 50 000 og utg. MVA 12 500', isCorrect: true },
        { id: 'c', text: 'Debet salg 50 000, kredit kundefordring 50 000', isCorrect: false },
        { id: 'd', text: 'Debet kundefordring 50 000, kredit salg 50 000', isCorrect: false },
      ],
      solution: 'Ved kredittsalg debiteres kundefordringer for totalbeløpet (62 500), mens salg (50 000) og utg. MVA (12 500) krediteres.',
    },
    {
      id: 'regnskap-revisjon-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva innebærer sporbarhetskravet i bokføringsloven?',
      options: [
        { id: 'a', text: 'At alle bilag skal nummereres', isCorrect: false },
        { id: 'b', text: 'At det skal være mulig å følge en transaksjon fra bilag til årsregnskap og omvendt', isCorrect: true },
        { id: 'c', text: 'At kun elektroniske bilag er gyldige', isCorrect: false },
        { id: 'd', text: 'At revisor må godkjenne alle bilag', isCorrect: false },
      ],
      solution: 'Sporbarhet betyr at man skal kunne følge transaksjonssporet begge veier - fra bilag til rapport og fra rapport tilbake til bilag.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Resultatregnskap
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3: TextbookChapter = {
  id: 'regnskap-revisjon-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3',
  title: 'Resultatregnskap',
  description: 'Forstå resultatregnskapets oppbygging, resultatposter og analyse.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare resultatregnskapets oppbygging',
    'skille mellom ulike inntekts- og kostnadstyper',
    'beregne og tolke driftsresultat og årsresultat',
    'forstå sammenhengen mellom resultat og balanse',
  ],
  content: [
    {
      id: 'regnskap-revisjon-3-intro',
      type: 'text',
      content: `Resultatregnskapet viser virksomhetens økonomiske prestasjon over en periode - vanligvis ett år. Det forteller om bedriften har tjent eller tapt penger, og hvor inntektene kommer fra og kostnadene går til.`,
    },
    {
      id: 'regnskap-revisjon-3-def-1',
      type: 'definition',
      title: 'Resultatregnskap',
      content: `**Resultatregnskapet** er en oppstilling som viser virksomhetens inntekter og kostnader i en bestemt periode, og beregner periodens resultat.

**Årsresultat = Inntekter - Kostnader**

Et positivt resultat (overskudd) øker egenkapitalen, mens et negativt resultat (underskudd) reduserer egenkapitalen.`,
    },
    {
      id: 'regnskap-revisjon-3-text-1',
      type: 'text',
      title: 'Resultatregnskapets oppbygging',
      content: `Regnskapsloven fastsetter to tillatte oppstillingsplaner:
- **Artsbasert** - kostnader gruppert etter art (lønn, avskrivning osv.)
- **Funksjonsbasert** - kostnader gruppert etter funksjon (produksjon, salg, admin)

Den artsbaserte er mest brukt i Norge og følger denne strukturen:

1. Driftsinntekter
2. - Driftskostnader
3. = **Driftsresultat**
4. + Finansinntekter
5. - Finanskostnader
6. = **Ordinært resultat før skatt**
7. - Skattekostnad
8. = **Ordinært resultat**
9. +/- Ekstraordinære poster
10. = **Årsresultat**`,
    },
    {
      id: 'regnskap-revisjon-3-def-2',
      type: 'definition',
      title: 'Driftsinntekter',
      content: `**Driftsinntekter** er inntekter fra virksomhetens hovedaktiviteter:

- **Salgsinntekter** - inntekter fra salg av varer og tjenester
- **Annen driftsinntekt** - f.eks. leieinntekter, provisjoner, offentlige tilskudd

Driftsinntekter vises eksklusive merverdiavgift.`,
    },
    {
      id: 'regnskap-revisjon-3-def-3',
      type: 'definition',
      title: 'Driftskostnader',
      content: `**Driftskostnader** er kostnader knyttet til den ordinære driften:

- **Varekostnad** - innkjøpskost for solgte varer
- **Lønnskostnad** - lønn, feriepenger, arbeidsgiveravgift, pensjon
- **Avskrivninger** - verdiforringelse på varige driftsmidler
- **Andre driftskostnader** - husleie, strøm, reparasjoner, kontorkostnader`,
    },
    {
      id: 'regnskap-revisjon-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av varekostnad',
      content: `**Gitt:**
- Varelager 01.01: 100 000 kr
- Varekjøp i løpet av året: 500 000 kr
- Varelager 31.12: 120 000 kr

**Beregning av varekostnad:**
Varekostnad = IB varelager + Varekjøp - UB varelager
Varekostnad = 100 000 + 500 000 - 120 000 = **480 000 kr**

Dette er kostnaden for de varene som faktisk er solgt.`,
    },
    {
      id: 'regnskap-revisjon-3-def-4',
      type: 'definition',
      title: 'Avskrivninger',
      content: `**Avskrivninger** er en systematisk fordeling av anskaffelseskost for varige driftsmidler over forventet levetid.

**Lineær avskrivning:**
Årlig avskrivning = (Anskaffelseskost - Restverdi) / Levetid

Eksempel: Maskin kjøpt for 500 000 kr, levetid 5 år, restverdi 0:
Årlig avskrivning = 500 000 / 5 = 100 000 kr`,
    },
    {
      id: 'regnskap-revisjon-3-def-5',
      type: 'definition',
      title: 'Finansposter',
      content: `**Finansinntekter:**
- Renteinntekter fra bankinnskudd
- Utbytte fra aksjer
- Gevinst ved salg av finansielle eiendeler

**Finanskostnader:**
- Rentekostnader på lån
- Tap ved salg av finansielle eiendeler
- Valutatap`,
    },
    {
      id: 'regnskap-revisjon-3-example-2',
      type: 'example',
      title: 'Eksempel: Komplett resultatregnskap',
      content: `**Resultatregnskap for Handel AS 2024**

| Post | Beløp |
|---|---|
| Salgsinntekter | 5 000 000 |
| Annen driftsinntekt | 50 000 |
| **Sum driftsinntekter** | **5 050 000** |
| Varekostnad | 2 500 000 |
| Lønnskostnad | 1 500 000 |
| Avskrivning | 200 000 |
| Andre driftskostnader | 400 000 |
| **Sum driftskostnader** | **4 600 000** |
| **Driftsresultat** | **450 000** |
| Renteinntekter | 10 000 |
| Rentekostnader | 60 000 |
| **Resultat før skatt** | **400 000** |
| Skattekostnad (22%) | 88 000 |
| **Årsresultat** | **312 000** |`,
    },
    {
      id: 'regnskap-revisjon-3-text-2',
      type: 'text',
      title: 'Viktige resultatmål',
      content: `**Driftsresultat (EBIT)**
Viser resultatet fra kjernevirksomheten, før finansposter og skatt. Nyttig for å sammenligne selskaper med ulik finansiering.

**EBITDA**
Driftsresultat før avskrivninger. Viser kontantstrømmen fra driften. Brukes ofte ved verdivurdering.

**Årsresultat**
Bunnlinjen - det endelige resultatet som påvirker egenkapitalen.

**Resultatgrad**
Resultatgrad = (Driftsresultat / Driftsinntekter) × 100%
Viser hvor mye av hver omsatt krone som blir til driftsresultat.`,
    },
    {
      id: 'regnskap-revisjon-3-note-1',
      type: 'note',
      title: 'Skattekostnad',
      content: `Selskapsskattesatsen i Norge er 22%. Skattekostnaden i resultatregnskapet kan avvike fra 22% av resultat før skatt på grunn av:
- Permanente forskjeller (ikke-fradragsberettigede kostnader)
- Midlertidige forskjeller (ulik periodisering i regnskap og skatt)
- Fremførbart underskudd`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser driftsresultatet?',
      options: [
        { id: 'a', text: 'Resultatet etter alle kostnader inkludert skatt', isCorrect: false },
        { id: 'b', text: 'Resultatet fra kjernevirksomheten, før finansposter', isCorrect: true },
        { id: 'c', text: 'Kun salgsinntektene', isCorrect: false },
        { id: 'd', text: 'Differansen mellom eiendeler og gjeld', isCorrect: false },
      ],
      solution: 'Driftsresultat = Driftsinntekter - Driftskostnader. Det viser resultatet fra selve driften.',
    },
    {
      id: 'regnskap-revisjon-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken post er IKKE en driftskostnad?',
      options: [
        { id: 'a', text: 'Lønnskostnad', isCorrect: false },
        { id: 'b', text: 'Varekostnad', isCorrect: false },
        { id: 'c', text: 'Rentekostnad', isCorrect: true },
        { id: 'd', text: 'Avskrivning', isCorrect: false },
      ],
      solution: 'Rentekostnad er en finanskostnad, ikke en driftskostnad.',
    },
    {
      id: 'regnskap-revisjon-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Varelager IB: 80 000, Varekjøp: 400 000, Varelager UB: 100 000. Hva er varekostnaden?',
      options: [
        { id: 'a', text: '380 000 kr', isCorrect: true },
        { id: 'b', text: '420 000 kr', isCorrect: false },
        { id: 'c', text: '400 000 kr', isCorrect: false },
        { id: 'd', text: '480 000 kr', isCorrect: false },
      ],
      solution: 'Varekostnad = IB + Kjøp - UB = 80 000 + 400 000 - 100 000 = 380 000 kr.',
    },
    {
      id: 'regnskap-revisjon-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En maskin koster 600 000 kr og har levetid på 6 år. Hva er årlig lineær avskrivning?',
      options: [
        { id: 'a', text: '60 000 kr', isCorrect: false },
        { id: 'b', text: '100 000 kr', isCorrect: true },
        { id: 'c', text: '120 000 kr', isCorrect: false },
        { id: 'd', text: '150 000 kr', isCorrect: false },
      ],
      solution: 'Årlig avskrivning = 600 000 / 6 = 100 000 kr.',
    },
    {
      id: 'regnskap-revisjon-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Driftsinntekter 2 mill., driftsresultat 200 000 kr. Hva er resultatgraden?',
      options: [
        { id: 'a', text: '5%', isCorrect: false },
        { id: 'b', text: '10%', isCorrect: true },
        { id: 'c', text: '15%', isCorrect: false },
        { id: 'd', text: '20%', isCorrect: false },
      ],
      solution: 'Resultatgrad = (200 000 / 2 000 000) × 100% = 10%.',
    },
    {
      id: 'regnskap-revisjon-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er EBITDA?',
      options: [
        { id: 'a', text: 'Årsresultat før skatt', isCorrect: false },
        { id: 'b', text: 'Driftsresultat før avskrivninger', isCorrect: true },
        { id: 'c', text: 'Driftsresultat etter skatt', isCorrect: false },
        { id: 'd', text: 'Egenkapitalens avkastning', isCorrect: false },
      ],
      solution: 'EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization (Driftsresultat + Avskrivninger).',
    },
  ],
};

// ============================================================================
// Kapittel 4: Balanse og eiendeler
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_4: TextbookChapter = {
  id: 'regnskap-revisjon-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '4',
  title: 'Balanse og eiendeler',
  description: 'Forstå balansens oppbygging, vurdering av eiendeler og finansieringsstruktur.',
  estimatedMinutes: 105,
  competenceGoals: [
    'forklare balansens oppbygging og funksjon',
    'skille mellom anleggsmidler og omløpsmidler',
    'forstå verdsettelsesprinsipper for eiendeler',
    'analysere finansieringsstrukturen',
  ],
  content: [
    {
      id: 'regnskap-revisjon-4-intro',
      type: 'text',
      content: `Balansen er et øyeblikksbilde av virksomhetens finansielle stilling på et bestemt tidspunkt. Den viser hva virksomheten eier (eiendeler) og hvordan disse er finansiert (egenkapital og gjeld).`,
    },
    {
      id: 'regnskap-revisjon-4-def-1',
      type: 'definition',
      title: 'Balanse',
      content: `**Balansen** er en oppstilling som viser:
- **Eiendeler (aktiva)** - hva virksomheten eier og har til gode
- **Egenkapital og gjeld (passiva)** - hvordan eiendelene er finansiert

**Regnskapsligningen:** Eiendeler = Egenkapital + Gjeld

Balansen skal alltid balansere - summen av aktiva = summen av passiva.`,
    },
    {
      id: 'regnskap-revisjon-4-text-1',
      type: 'text',
      title: 'Balansens struktur',
      content: `**EIENDELER**

**Anleggsmidler** (varige eiendeler > 1 år):
- Immaterielle eiendeler (goodwill, patenter, lisenser)
- Varige driftsmidler (bygninger, maskiner, inventar)
- Finansielle anleggsmidler (langsiktige investeringer)

**Omløpsmidler** (kortsiktige eiendeler < 1 år):
- Varer
- Fordringer (kundefordringer, andre fordringer)
- Investeringer (kortsiktige verdipapirer)
- Bankinnskudd og kontanter

**EGENKAPITAL OG GJELD**

**Egenkapital**:
- Innskutt egenkapital (aksjekapital, overkurs)
- Opptjent egenkapital (tidligere resultater)

**Gjeld**:
- Avsetninger for forpliktelser (pensjonsforpliktelser)
- Langsiktig gjeld (lån med løpetid > 1 år)
- Kortsiktig gjeld (leverandørgjeld, skyldig skatt, kassekreditt)`,
    },
    {
      id: 'regnskap-revisjon-4-def-2',
      type: 'definition',
      title: 'Anleggsmidler',
      content: `**Anleggsmidler** er eiendeler bestemt til varig eie eller bruk i virksomheten. De kjennetegnes ved:
- Forventet brukstid over 1 år
- Anskaffet for bruk, ikke for videresalg
- Vesentlig verdi (vanligvis > 15 000 kr)

Anleggsmidler vurderes til anskaffelseskost, fratrukket akkumulerte avskrivninger og eventuell nedskrivning.`,
    },
    {
      id: 'regnskap-revisjon-4-def-3',
      type: 'definition',
      title: 'Omløpsmidler',
      content: `**Omløpsmidler** er eiendeler som:
- Er en del av varekretsløpet
- Har forventet realisasjon innen 12 måneder
- Er kontanter eller kontantekvivalenter

Omløpsmidler vurderes til laveste verdi av anskaffelseskost og virkelig verdi (laveste verdis prinsipp).`,
    },
    {
      id: 'regnskap-revisjon-4-example-1',
      type: 'example',
      title: 'Eksempel: Verdsettelse av varelager',
      content: `**Situasjon:** En bedrift har 100 enheter på lager.
- Anskaffelseskost: 500 kr per enhet
- Virkelig verdi (salgspris - salgskost): 450 kr per enhet

**Vurdering:**
Ifølge laveste verdis prinsipp skal varelageret verdsettes til:
100 × 450 kr = 45 000 kr (laveste verdi)

Ikke til anskaffelseskost: 100 × 500 kr = 50 000 kr

Nedskrivning = 50 000 - 45 000 = 5 000 kr resultatføres som tap.`,
    },
    {
      id: 'regnskap-revisjon-4-def-4',
      type: 'definition',
      title: 'Egenkapital',
      content: `**Egenkapital** er virksomhetens eiendeler minus gjeld (restkapitalen).

**Innskutt egenkapital:**
- Aksjekapital (pålydende × antall aksjer)
- Overkursfond (innbetalt over pålydende)

**Opptjent egenkapital:**
- Annen egenkapital (tidligere overskudd)
- Udekket tap (akkumulert underskudd)`,
    },
    {
      id: 'regnskap-revisjon-4-example-2',
      type: 'example',
      title: 'Eksempel: Forenklet balanse',
      content: `**Balanse for Industri AS per 31.12.2024**

| EIENDELER | | EK OG GJELD | |
|---|---|---|---|
| **Anleggsmidler:** | | **Egenkapital:** | |
| Maskiner | 800 000 | Aksjekapital | 500 000 |
| Inventar | 200 000 | Opptjent EK | 350 000 |
| **Sum anleggsmidler** | **1 000 000** | **Sum EK** | **850 000** |
| **Omløpsmidler:** | | **Gjeld:** | |
| Varelager | 300 000 | Banklån | 400 000 |
| Kundefordringer | 250 000 | Leverandørgjeld | 200 000 |
| Bank | 150 000 | Skyldig skatt | 50 000 |
| **Sum omløpsmidler** | **700 000** | **Sum gjeld** | **650 000** |
| **SUM EIENDELER** | **1 700 000** | **SUM EK OG GJELD** | **1 500 000** |

**OBS:** Denne balansen balanserer ikke (1 700 000 ≠ 1 500 000). La oss korrigere:

**Korrekt balanse:** Opptjent EK bør være 550 000 kr for at balansen skal gå opp.`,
    },
    {
      id: 'regnskap-revisjon-4-text-2',
      type: 'text',
      title: 'Finansieringsstruktur',
      content: `Balansen viser hvordan virksomheten er finansiert. Viktige begreper:

**Egenkapitalandel**
EK-andel = (Egenkapital / Totalkapital) × 100%
Viser hvor mye av eiendelene som er finansiert med egne midler.

**Gjeldsgrad**
Gjeldsgrad = Gjeld / Egenkapital
Viser forholdet mellom fremmedkapital og egenkapital.

**Arbeidskapital**
Arbeidskapital = Omløpsmidler - Kortsiktig gjeld
Viser evnen til å betale kortsiktige forpliktelser.`,
    },
    {
      id: 'regnskap-revisjon-4-tip-1',
      type: 'tip',
      title: 'Tommelfingerregler',
      content: `- **Egenkapitalandel** bør normalt være minst 20-30%
- **Arbeidskapital** bør være positiv
- **Langsiktige eiendeler** bør finansieres med langsiktig kapital (EK + langsiktig gjeld)
- **Kortsiktige eiendeler** kan finansieres med kortsiktig gjeld`,
    },
    {
      id: 'regnskap-revisjon-4-warning-1',
      type: 'warning',
      title: 'Negativ egenkapital',
      content: `Hvis gjelden overstiger eiendelene, blir egenkapitalen negativ. Dette er et alvorlig varselsignal som kan indikere:
- Fare for insolvens
- Behov for kapitaltilførsel
- Risiko for konkurs

Aksjeloven krever at styret iverksetter tiltak ved tap av egenkapital.`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser regnskapsligningen?',
      options: [
        { id: 'a', text: 'Inntekter = Kostnader', isCorrect: false },
        { id: 'b', text: 'Eiendeler = Egenkapital + Gjeld', isCorrect: true },
        { id: 'c', text: 'Omsetning = Varekostnad + Fortjeneste', isCorrect: false },
        { id: 'd', text: 'Resultat = Inntekter - Utgifter', isCorrect: false },
      ],
      solution: 'Regnskapsligningen er: Eiendeler = Egenkapital + Gjeld.',
    },
    {
      id: 'regnskap-revisjon-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken post er et omløpsmiddel?',
      options: [
        { id: 'a', text: 'Bygninger', isCorrect: false },
        { id: 'b', text: 'Maskiner', isCorrect: false },
        { id: 'c', text: 'Varelager', isCorrect: true },
        { id: 'd', text: 'Goodwill', isCorrect: false },
      ],
      solution: 'Varelager er et omløpsmiddel fordi det forventes solgt innen 12 måneder.',
    },
    {
      id: 'regnskap-revisjon-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan skal omløpsmidler vurderes?',
      options: [
        { id: 'a', text: 'Alltid til anskaffelseskost', isCorrect: false },
        { id: 'b', text: 'Alltid til virkelig verdi', isCorrect: false },
        { id: 'c', text: 'Til laveste verdi av anskaffelseskost og virkelig verdi', isCorrect: true },
        { id: 'd', text: 'Til gjennomsnittlig verdi', isCorrect: false },
      ],
      solution: 'Omløpsmidler vurderes etter laveste verdis prinsipp.',
    },
    {
      id: 'regnskap-revisjon-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Eiendeler 2 mill., EK 800 000 kr. Hva er egenkapitalandelen?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '40%', isCorrect: true },
        { id: 'c', text: '60%', isCorrect: false },
        { id: 'd', text: '80%', isCorrect: false },
      ],
      solution: 'EK-andel = (800 000 / 2 000 000) × 100% = 40%.',
    },
    {
      id: 'regnskap-revisjon-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Omløpsmidler 500 000, kortsiktig gjeld 350 000. Hva er arbeidskapitalen?',
      options: [
        { id: 'a', text: '850 000 kr', isCorrect: false },
        { id: 'b', text: '150 000 kr', isCorrect: true },
        { id: 'c', text: '-150 000 kr', isCorrect: false },
        { id: 'd', text: '1,43', isCorrect: false },
      ],
      solution: 'Arbeidskapital = Omløpsmidler - Kortsiktig gjeld = 500 000 - 350 000 = 150 000 kr.',
    },
    {
      id: 'regnskap-revisjon-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Egenkapital 600 000, gjeld 1 200 000. Hva er gjeldsgraden?',
      options: [
        { id: 'a', text: '0,5', isCorrect: false },
        { id: 'b', text: '1,0', isCorrect: false },
        { id: 'c', text: '2,0', isCorrect: true },
        { id: 'd', text: '3,0', isCorrect: false },
      ],
      solution: 'Gjeldsgrad = Gjeld / EK = 1 200 000 / 600 000 = 2,0.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Merverdiavgift og skatt
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5: TextbookChapter = {
  id: 'regnskap-revisjon-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5',
  title: 'Merverdiavgift og skatt',
  description: 'Forstå MVA-systemet og skatteregler for næringsdrivende.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare MVA-systemet og ulike satser',
    'beregne og bokføre merverdiavgift',
    'forstå forskjellen mellom regnskapsmessig og skattemessig resultat',
    'beregne skattekostnad og betalbar skatt',
  ],
  content: [
    {
      id: 'regnskap-revisjon-5-intro',
      type: 'text',
      content: `Merverdiavgift (MVA) og skatt er to sentrale områder som alle regnskapsførere må beherske. MVA er en avgift på forbruk som kreves inn av næringsdrivende på vegne av staten, mens selskapsskatt beregnes på virksomhetens overskudd.`,
    },
    {
      id: 'regnskap-revisjon-5-def-1',
      type: 'definition',
      title: 'Merverdiavgift (MVA)',
      content: `**Merverdiavgift** er en avgift på omsetning av varer og tjenester. Systemet fungerer slik:
- Selger legger MVA på salgsprisen og krever den inn fra kjøper
- Selger betaler inn MVA til staten
- Næringsdrivende kan trekke fra MVA på sine innkjøp (fradragsrett)
- Staten får kun avgiften av merverdien i hvert ledd`,
    },
    {
      id: 'regnskap-revisjon-5-text-1',
      type: 'text',
      title: 'MVA-satser i Norge',
      content: `Norge har tre MVA-satser:

**Alminnelig sats: 25%**
- Gjelder de fleste varer og tjenester

**Redusert sats: 15%**
- Næringsmidler (mat og drikke, unntatt alkohol)

**Lav sats: 12%**
- Persontransport
- Overnatting
- Kringkasting (NRK-lisens)
- Kinoer, museer, fornøyelsesparker

**Fritatt (0%):**
- Eksport
- Bøker og tidsskrifter
- El-biler (midlertidig)

**Unntatt:**
- Helsetjenester
- Undervisning
- Finansielle tjenester
- Fast eiendom (utleie, salg)`,
    },
    {
      id: 'regnskap-revisjon-5-example-1',
      type: 'example',
      title: 'Eksempel: MVA-beregning',
      content: `**En butikk kjøper varer for 100 000 kr + MVA og selger dem for 150 000 kr + MVA.**

**Innkjøp:**
- Varekost: 100 000 kr
- MVA 25%: 25 000 kr
- Betaler leverandør: 125 000 kr
- Inngående MVA (fradrag): 25 000 kr

**Salg:**
- Salgspris ekskl. MVA: 150 000 kr
- MVA 25%: 37 500 kr
- Mottar fra kunde: 187 500 kr
- Utgående MVA (skyldig): 37 500 kr

**MVA til innbetaling:**
Utgående MVA - Inngående MVA = 37 500 - 25 000 = **12 500 kr**`,
    },
    {
      id: 'regnskap-revisjon-5-def-2',
      type: 'definition',
      title: 'MVA-oppgjør',
      content: `Virksomheter med omsetning over 50 000 kr må registrere seg i MVA-registeret. MVA rapporteres via:

**MVA-melding (skattemelding for MVA)**
- Sendes elektronisk via Altinn
- Frist: 1 måned og 10 dager etter terminens utløp
- Terminlengde avhenger av omsetning:
  - Under 1 mill.: årlig
  - 1-50 mill.: to-månedlig
  - Over 50 mill.: månedlig`,
    },
    {
      id: 'regnskap-revisjon-5-text-2',
      type: 'text',
      title: 'Bokføring av MVA',
      content: `MVA bokføres på egne kontoer i kontoklasse 27:

**2700 Utgående MVA** (skyldig til staten)
- Kredit ved salg
- Debet ved innbetaling

**2710 Inngående MVA** (tilgode fra staten)
- Debet ved kjøp
- Kredit ved innbetaling/motregning

**2740 Oppgjørskonto MVA**
- Brukes ved terminoppgjør
- Netto skyldig eller tilgode overføres hit`,
    },
    {
      id: 'regnskap-revisjon-5-def-3',
      type: 'definition',
      title: 'Selskapsskatt',
      content: `**Selskapsskatt** beregnes på virksomhetens skattepliktige overskudd.

- Skattesats: **22%** for aksjeselskaper og andre selskaper
- Grunnlag: Skattemessig resultat (kan avvike fra regnskapsmessig)
- Betaling: Forskuddsskatt i løpet av året, restskatt året etter`,
    },
    {
      id: 'regnskap-revisjon-5-text-3',
      type: 'text',
      title: 'Forskjeller mellom regnskap og skatt',
      content: `Det skattemessige resultatet kan avvike fra det regnskapsmessige på grunn av:

**Permanente forskjeller** (varige avvik):
- Ikke-fradragsberettigede kostnader (bøter, gaver over grense)
- Skattefrie inntekter (fritaksmetoden for aksjeutbytte)

**Midlertidige forskjeller** (timing):
- Ulike avskrivningssatser (skattemessig saldoavskrivning vs. lineær)
- Ulik periodisering av inntekter/kostnader

Midlertidige forskjeller gir opphav til **utsatt skatt** eller **utsatt skattefordel** i balansen.`,
    },
    {
      id: 'regnskap-revisjon-5-example-2',
      type: 'example',
      title: 'Eksempel: Beregning av skattekostnad',
      content: `**Gitt:**
- Regnskapsmessig resultat før skatt: 1 000 000 kr
- Ikke-fradragsberettigede kostnader: 50 000 kr
- Skattefrie inntekter: 100 000 kr

**Beregning:**
Skattepliktig resultat = 1 000 000 + 50 000 - 100 000 = 950 000 kr

Betalbar skatt (22%) = 950 000 × 0,22 = **209 000 kr**

Skattekostnaden i resultatregnskapet kan avvike fra dette hvis det også er midlertidige forskjeller.`,
    },
    {
      id: 'regnskap-revisjon-5-warning-1',
      type: 'warning',
      title: 'Viktige frister',
      content: `**MVA:**
- Melding: 1 mnd + 10 dager etter termin
- Betaling: Samme frist

**Selskapsskatt:**
- Skattemelding: 31. mai (aksjeselskap)
- Forskuddsskatt: 15. feb og 15. april
- Restskatt: Høsten etter ligningsår

Forsinkelser kan medføre forsinkelsesrenter og tilleggsavgift!`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den alminnelige MVA-satsen i Norge?',
      options: [
        { id: 'a', text: '15%', isCorrect: false },
        { id: 'b', text: '22%', isCorrect: false },
        { id: 'c', text: '25%', isCorrect: true },
        { id: 'd', text: '12%', isCorrect: false },
      ],
      solution: 'Den alminnelige MVA-satsen i Norge er 25%.',
    },
    {
      id: 'regnskap-revisjon-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken MVA-sats gjelder for næringsmidler?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '15%', isCorrect: true },
        { id: 'c', text: '12%', isCorrect: false },
        { id: 'd', text: '0%', isCorrect: false },
      ],
      solution: 'Næringsmidler (mat og drikke unntatt alkohol) har redusert sats på 15%.',
    },
    {
      id: 'regnskap-revisjon-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En vare koster 1 000 kr eks. MVA. Hva er prisen inkl. 25% MVA?',
      options: [
        { id: 'a', text: '1 200 kr', isCorrect: false },
        { id: 'b', text: '1 250 kr', isCorrect: true },
        { id: 'c', text: '1 025 kr', isCorrect: false },
        { id: 'd', text: '1 225 kr', isCorrect: false },
      ],
      solution: 'Pris inkl. MVA = 1 000 × 1,25 = 1 250 kr.',
    },
    {
      id: 'regnskap-revisjon-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Utgående MVA er 50 000 kr, inngående MVA er 35 000 kr. Hvor mye skal betales til staten?',
      options: [
        { id: 'a', text: '85 000 kr', isCorrect: false },
        { id: 'b', text: '50 000 kr', isCorrect: false },
        { id: 'c', text: '35 000 kr', isCorrect: false },
        { id: 'd', text: '15 000 kr', isCorrect: true },
      ],
      solution: 'MVA til betaling = Utgående - Inngående = 50 000 - 35 000 = 15 000 kr.',
    },
    {
      id: 'regnskap-revisjon-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er selskapsskattesatsen for aksjeselskaper i Norge?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '22%', isCorrect: true },
        { id: 'c', text: '28%', isCorrect: false },
        { id: 'd', text: '24%', isCorrect: false },
      ],
      solution: 'Selskapsskattesatsen i Norge er 22%.',
    },
    {
      id: 'regnskap-revisjon-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er en permanent forskjell mellom regnskap og skatt?',
      options: [
        { id: 'a', text: 'En forskjell som utjevnes over tid', isCorrect: false },
        { id: 'b', text: 'En forskjell som aldri utjevnes', isCorrect: true },
        { id: 'c', text: 'Forskjell i avskrivningssatser', isCorrect: false },
        { id: 'd', text: 'Forskjell i periodisering', isCorrect: false },
      ],
      solution: 'Permanente forskjeller er varige avvik, f.eks. ikke-fradragsberettigede kostnader.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Årsregnskap og årsrapport
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6: TextbookChapter = {
  id: 'regnskap-revisjon-6',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6',
  title: 'Årsregnskap og årsrapport',
  description: 'Lær om kravene til årsregnskap, årsberetning og offentliggjøring.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare innholdet i et årsregnskap',
    'forstå kravene til årsberetning',
    'kjenne til reglene for offentliggjøring og innsending',
    'vurdere kvaliteten på et årsregnskap',
  ],
  content: [
    {
      id: 'regnskap-revisjon-6-intro',
      type: 'text',
      content: `Årsregnskapet er virksomhetens offisielle økonomiske rapport for året som er gått. Det utarbeides i henhold til regnskapsloven og skal gi et rettvisende bilde av virksomhetens stilling og resultat.`,
    },
    {
      id: 'regnskap-revisjon-6-def-1',
      type: 'definition',
      title: 'Årsregnskap',
      content: `**Årsregnskapet** består av:
1. **Resultatregnskap** - viser periodens inntekter og kostnader
2. **Balanse** - viser eiendeler, gjeld og egenkapital per 31.12
3. **Noter** - tilleggsinformasjon og forklaringer
4. **Kontantstrømoppstilling** - viser pengestrømmene (for større foretak)

Årsregnskapet skal fastsettes senest seks måneder etter regnskapsårets slutt.`,
    },
    {
      id: 'regnskap-revisjon-6-text-1',
      type: 'text',
      title: 'Notekrav',
      content: `Notene er en viktig del av årsregnskapet og skal inneholde:

**Obligatoriske noter:**
- Regnskapsprinsipper som er anvendt
- Antall ansatte og lønnskostnader
- Ytelser til ledende personer og styret
- Spesifikasjon av anleggsmidler og avskrivninger
- Spesifikasjon av aksjekapital og aksjonærer
- Pantstillelser og garantier
- Mellomværende med nærstående parter
- Hendelser etter balansedagen

**Formålet med noter:**
- Forklare tallene i regnskapet
- Gi informasjon som ikke fremgår av oppstillingene
- Øke forståelsen for brukerne`,
    },
    {
      id: 'regnskap-revisjon-6-def-2',
      type: 'definition',
      title: 'Årsberetning',
      content: `**Årsberetningen** er styrets redegjørelse for virksomheten. Den skal minst inneholde:
- Beskrivelse av virksomheten og hvor den drives
- Redegjørelse for årsregnskapet og forutsetning om fortsatt drift
- Resultatdisponering (forslag til utbytte)
- Arbeidsmiljø og likestilling
- Ytre miljø
- Fremtidig utvikling

Små foretak kan velge bort årsberetning mot å opplyse om visse forhold i noter.`,
    },
    {
      id: 'regnskap-revisjon-6-text-2',
      type: 'text',
      title: 'Regnskapspliktige',
      content: `Følgende har regnskapsplikt etter regnskapsloven:

**Alltid regnskapsplikt:**
- Aksjeselskaper (AS)
- Allmennaksjeselskaper (ASA)
- Statsforetak
- Finansforetak

**Regnskapsplikt ved terskelkrav:**
- Ansvarlige selskaper
- Enkeltpersonforetak
- Andre som overskrider terskelverdier

**Terskelverdier:**
- Salgsinntekter over 70 mill. kr
- Balansesum over 35 mill. kr
- Gjennomsnittlig over 50 årsverk`,
    },
    {
      id: 'regnskap-revisjon-6-def-3',
      type: 'definition',
      title: 'Små foretak',
      content: `**Små foretak** er selskaper som ikke overskrider to av tre terskelverdier:
- Salgsinntekter: 70 mill. kr
- Balansesum: 35 mill. kr
- Årsverk: 50

Små foretak har forenklede krav til:
- Noteopplysninger
- Kontantstrømoppstilling (frivillig)
- Årsberetning (kan velges bort)`,
    },
    {
      id: 'regnskap-revisjon-6-text-3',
      type: 'text',
      title: 'Offentliggjøring',
      content: `Årsregnskapet er offentlig informasjon og skal sendes til Regnskapsregisteret i Brønnøysund:

**Frister:**
- Innsending: Senest én måned etter fastsetting
- Fastsetting: Senest 6 måneder etter regnskapsårets slutt
- Dermed: Senest 31. juli for foretak med ordinært regnskapsår

**Innsending:**
- Skjer via Altinn
- Årsregnskapet blir tilgjengelig på brreg.no
- Forsinkelsesgebyr ved for sen innsending

**Hvem kan se regnskapet?**
- Alle! Årsregnskaper er offentlig tilgjengelige
- Kan bestilles fra Brønnøysundregistrene
- Mange tjenester tilbyr gratis innsyn (Proff.no, etc.)`,
    },
    {
      id: 'regnskap-revisjon-6-example-1',
      type: 'example',
      title: 'Eksempel: Årsregnskapets struktur',
      content: `**Typisk årsregnskap for et AS:**

1. **Resultatregnskap** (1 side)
   - Driftsinntekter og -kostnader
   - Finansposter
   - Skattekostnad
   - Årsresultat

2. **Balanse** (1-2 sider)
   - Eiendeler
   - Egenkapital og gjeld

3. **Noter** (3-10 sider)
   - Regnskapsprinsipper
   - Spesifikasjoner
   - Tilleggsinformasjon

4. **Kontantstrømoppstilling** (større foretak)
   - Drift, investering, finansiering

5. **Årsberetning** (eller noteopplysninger)
   - Styrets vurderinger`,
    },
    {
      id: 'regnskap-revisjon-6-warning-1',
      type: 'warning',
      title: 'Forsinkelsesgebyr',
      content: `Ved for sen innsending av årsregnskap ilegges forsinkelsesgebyr:
- 1 R (rettsgebyr) per uke forsinkelsen varer
- Maksimalt 26 R (ca. 32 500 kr i 2024)
- Gebyret ilegges uavhengig av årsak til forsinkelsen

Styret er ansvarlig for at årsregnskapet utarbeides og sendes inn i tide!`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke deler inngår i årsregnskapet?',
      options: [
        { id: 'a', text: 'Kun resultatregnskap og balanse', isCorrect: false },
        { id: 'b', text: 'Resultatregnskap, balanse og noter', isCorrect: true },
        { id: 'c', text: 'Kun balanse', isCorrect: false },
        { id: 'd', text: 'Resultatregnskap og skattemelding', isCorrect: false },
      ],
      solution: 'Årsregnskapet består minimum av resultatregnskap, balanse og noter.',
    },
    {
      id: 'regnskap-revisjon-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når er fristen for fastsetting av årsregnskapet?',
      options: [
        { id: 'a', text: '3 måneder etter regnskapsårets slutt', isCorrect: false },
        { id: 'b', text: '6 måneder etter regnskapsårets slutt', isCorrect: true },
        { id: 'c', text: '12 måneder etter regnskapsårets slutt', isCorrect: false },
        { id: 'd', text: '1 måned etter regnskapsårets slutt', isCorrect: false },
      ],
      solution: 'Årsregnskapet skal fastsettes senest 6 måneder etter regnskapsårets slutt.',
    },
    {
      id: 'regnskap-revisjon-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem har alltid regnskapsplikt uavhengig av størrelse?',
      options: [
        { id: 'a', text: 'Alle enkeltpersonforetak', isCorrect: false },
        { id: 'b', text: 'Aksjeselskaper', isCorrect: true },
        { id: 'c', text: 'Ansvarlige selskaper', isCorrect: false },
        { id: 'd', text: 'Stiftelser', isCorrect: false },
      ],
      solution: 'Aksjeselskaper har alltid regnskapsplikt, uavhengig av størrelse.',
    },
    {
      id: 'regnskap-revisjon-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er formålet med noter i årsregnskapet?',
      options: [
        { id: 'a', text: 'Å erstatte resultatregnskapet', isCorrect: false },
        { id: 'b', text: 'Å forklare og gi tilleggsinformasjon til tallene', isCorrect: true },
        { id: 'c', text: 'Kun å oppfylle lovkrav', isCorrect: false },
        { id: 'd', text: 'Å skjule informasjon', isCorrect: false },
      ],
      solution: 'Noter skal forklare tallene og gi tilleggsinformasjon som øker forståelsen.',
    },
    {
      id: 'regnskap-revisjon-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilke terskelkverdier definerer et "lite foretak"?',
      options: [
        { id: 'a', text: 'Under 10 ansatte og omsetning under 10 mill.', isCorrect: false },
        { id: 'b', text: 'Ikke over 2 av: 70 mill. omsetning, 35 mill. balanse, 50 årsverk', isCorrect: true },
        { id: 'c', text: 'Under 100 ansatte', isCorrect: false },
        { id: 'd', text: 'Omsetning under 50 mill.', isCorrect: false },
      ],
      solution: 'Små foretak overskrider ikke 2 av 3: 70 mill. omsetning, 35 mill. balanse, 50 årsverk.',
    },
    {
      id: 'regnskap-revisjon-6-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvor sendes årsregnskapet for offentliggjøring?',
      options: [
        { id: 'a', text: 'Skatteetaten', isCorrect: false },
        { id: 'b', text: 'Finanstilsynet', isCorrect: false },
        { id: 'c', text: 'Regnskapsregisteret i Brønnøysund', isCorrect: true },
        { id: 'd', text: 'Statistisk sentralbyrå', isCorrect: false },
      ],
      solution: 'Årsregnskap sendes til Regnskapsregisteret i Brønnøysund via Altinn.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Regnskapsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7: TextbookChapter = {
  id: 'regnskap-revisjon-7',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7',
  title: 'Regnskapsanalyse',
  description: 'Lær å analysere og tolke regnskapstall med nøkkeltall og metoder.',
  estimatedMinutes: 105,
  competenceGoals: [
    'beregne og tolke sentrale nøkkeltall',
    'vurdere lønnsomhet, likviditet og soliditet',
    'gjennomføre trendanalyse og sammenligning',
    'identifisere styrker og svakheter i en virksomhet',
  ],
  content: [
    {
      id: 'regnskap-revisjon-7-intro',
      type: 'text',
      content: `Regnskapsanalyse handler om å tolke og vurdere informasjonen i årsregnskapet. Ved hjelp av nøkkeltall kan vi sammenligne virksomheten over tid, mot konkurrenter og mot bransjestandarder.`,
    },
    {
      id: 'regnskap-revisjon-7-def-1',
      type: 'definition',
      title: 'Regnskapsanalyse',
      content: `**Regnskapsanalyse** er en systematisk gjennomgang av regnskapstall for å vurdere:
- **Lønnsomhet** - evnen til å skape overskudd
- **Likviditet** - evnen til å betale løpende forpliktelser
- **Soliditet** - evnen til å tåle tap over tid
- **Finansiering** - hvordan virksomheten er finansiert`,
    },
    {
      id: 'regnskap-revisjon-7-text-1',
      type: 'text',
      title: 'Lønnsomhetsanalyse',
      content: `Lønnsomhet måler hvor effektivt virksomheten skaper overskudd:

**Totalkapitalrentabilitet (ROA)**
ROA = (Driftsresultat + Finansinntekter) / Gjennomsnittlig totalkapital × 100%
*Viser avkastningen på all kapital*

**Egenkapitalrentabilitet (ROE)**
ROE = Årsresultat / Gjennomsnittlig egenkapital × 100%
*Viser avkastningen til eierne*

**Driftsmargin**
Driftsmargin = Driftsresultat / Driftsinntekter × 100%
*Viser hvor mye av omsetningen som blir til driftsresultat*

**Resultatgrad**
Resultatgrad = Ordinært resultat før skatt / Driftsinntekter × 100%`,
    },
    {
      id: 'regnskap-revisjon-7-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsomhetsanalyse',
      content: `**Gitt for Bedrift AS:**
- Driftsinntekter: 10 000 000 kr
- Driftsresultat: 800 000 kr
- Årsresultat: 500 000 kr
- Gjennomsnittlig EK: 2 000 000 kr
- Gjennomsnittlig totalkapital: 5 000 000 kr

**Beregninger:**
- Driftsmargin = 800 000 / 10 000 000 × 100% = **8,0%**
- ROE = 500 000 / 2 000 000 × 100% = **25,0%**
- ROA = 800 000 / 5 000 000 × 100% = **16,0%**

Tolkning: Bedriften har god lønnsomhet med 8% driftsmargin og 25% egenkapitalavkastning.`,
    },
    {
      id: 'regnskap-revisjon-7-text-2',
      type: 'text',
      title: 'Likviditetsanalyse',
      content: `Likviditet måler evnen til å betale kortsiktige forpliktelser:

**Likviditetsgrad 1 (current ratio)**
LG1 = Omløpsmidler / Kortsiktig gjeld
*Bør være minst 2 - omløpsmidler bør være dobbelt så store som kortsiktig gjeld*

**Likviditetsgrad 2 (quick ratio)**
LG2 = (Omløpsmidler - Varelager) / Kortsiktig gjeld
*Bør være minst 1 - de mest likvide midlene bør dekke kortsiktig gjeld*

**Arbeidskapital**
AK = Omløpsmidler - Kortsiktig gjeld
*Bør være positiv*`,
    },
    {
      id: 'regnskap-revisjon-7-example-2',
      type: 'example',
      title: 'Eksempel: Likviditetsanalyse',
      content: `**Gitt:**
- Omløpsmidler: 600 000 kr
- Varelager: 200 000 kr
- Kortsiktig gjeld: 400 000 kr

**Beregninger:**
- LG1 = 600 000 / 400 000 = **1,5**
- LG2 = (600 000 - 200 000) / 400 000 = **1,0**
- Arbeidskapital = 600 000 - 400 000 = **200 000 kr**

Tolkning: LG1 på 1,5 er under anbefalt nivå på 2. LG2 på 1,0 er på grensen. Likviditeten er akseptabel, men ikke sterk.`,
    },
    {
      id: 'regnskap-revisjon-7-text-3',
      type: 'text',
      title: 'Soliditetsanalyse',
      content: `Soliditet måler evnen til å tåle tap:

**Egenkapitalandel**
EK-andel = Egenkapital / Totalkapital × 100%
*Bør normalt være minst 20-30%*

**Gjeldsgrad**
Gjeldsgrad = Gjeld / Egenkapital
*Jo lavere, jo bedre. Under 2-3 er normalt akseptabelt*

**Rentedekningsgrad**
Rentedekningsgrad = (Driftsresultat + Finansinntekter) / Rentekostnader
*Bør være minst 3-4 for å ha tilstrekkelig margin*`,
    },
    {
      id: 'regnskap-revisjon-7-example-3',
      type: 'example',
      title: 'Eksempel: Soliditetsanalyse',
      content: `**Gitt:**
- Totalkapital: 5 000 000 kr
- Egenkapital: 1 500 000 kr
- Gjeld: 3 500 000 kr
- Driftsresultat: 600 000 kr
- Rentekostnader: 150 000 kr

**Beregninger:**
- EK-andel = 1 500 000 / 5 000 000 × 100% = **30%**
- Gjeldsgrad = 3 500 000 / 1 500 000 = **2,3**
- Rentedekningsgrad = 600 000 / 150 000 = **4,0**

Tolkning: Soliditeten er tilfredsstillende med 30% EK-andel og rentedekningsgrad på 4.`,
    },
    {
      id: 'regnskap-revisjon-7-def-2',
      type: 'definition',
      title: 'DuPont-modellen',
      content: `**DuPont-modellen** bryter ned egenkapitalrentabiliteten i komponenter:

ROE = Resultatgrad × Kapitalens omløpshastighet × Finansiell gearing

Eller:
ROE = (Resultat/Omsetning) × (Omsetning/Totalkapital) × (Totalkapital/EK)

Dette viser at høy ROE kan oppnås gjennom:
- Høy margin (høy pris, lave kostnader)
- Høy omløpshastighet (effektiv kapitalbruk)
- Høy gearing (mye gjeld) - men øker risikoen`,
    },
    {
      id: 'regnskap-revisjon-7-tip-1',
      type: 'tip',
      title: 'Tommelfingerregler for nøkkeltall',
      content: `| Nøkkeltall | Bra | Akseptabelt | Svakt |
|---|---|---|---|
| Egenkapitalandel | > 40% | 20-40% | < 20% |
| Likviditetsgrad 1 | > 2 | 1-2 | < 1 |
| Likviditetsgrad 2 | > 1 | 0,5-1 | < 0,5 |
| Gjeldsgrad | < 1 | 1-3 | > 3 |
| Rentedekningsgrad | > 5 | 2-5 | < 2 |

**NB:** Tallene varierer mellom bransjer - sammenlign alltid med relevante konkurrenter!`,
    },
    {
      id: 'regnskap-revisjon-7-warning-1',
      type: 'warning',
      title: 'Begrensninger ved regnskapsanalyse',
      content: `Vær oppmerksom på:
- **Historiske tall** - regnskapet viser fortiden, ikke fremtiden
- **Regnskapsprinsipper** - ulike valg gir ulike tall
- **Bransjespesifikke forhold** - nøkkeltall varierer mellom bransjer
- **Sesongvariasjoner** - balansen viser kun ett tidspunkt
- **Manipulasjon** - kreativ regnskapsføring kan skjule problemer`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måler likviditetsgrad 1?',
      options: [
        { id: 'a', text: 'Evnen til å skape overskudd', isCorrect: false },
        { id: 'b', text: 'Forholdet mellom omløpsmidler og kortsiktig gjeld', isCorrect: true },
        { id: 'c', text: 'Egenkapitalens størrelse', isCorrect: false },
        { id: 'd', text: 'Gjeldsnivået', isCorrect: false },
      ],
      solution: 'Likviditetsgrad 1 = Omløpsmidler / Kortsiktig gjeld.',
    },
    {
      id: 'regnskap-revisjon-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en god tommelfingerregel for likviditetsgrad 1?',
      options: [
        { id: 'a', text: 'Minst 0,5', isCorrect: false },
        { id: 'b', text: 'Minst 1', isCorrect: false },
        { id: 'c', text: 'Minst 2', isCorrect: true },
        { id: 'd', text: 'Minst 5', isCorrect: false },
      ],
      solution: 'LG1 bør være minst 2, dvs. omløpsmidler bør være dobbelt så store som kortsiktig gjeld.',
    },
    {
      id: 'regnskap-revisjon-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Driftsresultat 500 000, driftsinntekter 5 mill. Hva er driftsmarginen?',
      options: [
        { id: 'a', text: '5%', isCorrect: false },
        { id: 'b', text: '10%', isCorrect: true },
        { id: 'c', text: '15%', isCorrect: false },
        { id: 'd', text: '50%', isCorrect: false },
      ],
      solution: 'Driftsmargin = 500 000 / 5 000 000 × 100% = 10%.',
    },
    {
      id: 'regnskap-revisjon-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'EK 800 000, totalkapital 2 mill. Hva er egenkapitalandelen?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '40%', isCorrect: true },
        { id: 'c', text: '60%', isCorrect: false },
        { id: 'd', text: '80%', isCorrect: false },
      ],
      solution: 'EK-andel = 800 000 / 2 000 000 × 100% = 40%.',
    },
    {
      id: 'regnskap-revisjon-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjeld 1,5 mill., EK 500 000. Hva er gjeldsgraden?',
      options: [
        { id: 'a', text: '0,33', isCorrect: false },
        { id: 'b', text: '1,5', isCorrect: false },
        { id: 'c', text: '3,0', isCorrect: true },
        { id: 'd', text: '4,0', isCorrect: false },
      ],
      solution: 'Gjeldsgrad = Gjeld / EK = 1 500 000 / 500 000 = 3,0.',
    },
    {
      id: 'regnskap-revisjon-7-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva viser rentedekningsgraden?',
      options: [
        { id: 'a', text: 'Hvor mye renter bedriften betaler', isCorrect: false },
        { id: 'b', text: 'Evnen til å betjene rentekostnadene fra driftsresultatet', isCorrect: true },
        { id: 'c', text: 'Bankens rentesats', isCorrect: false },
        { id: 'd', text: 'Gjeldsnivået', isCorrect: false },
      ],
      solution: 'Rentedekningsgrad = Driftsresultat / Rentekostnader, og viser evnen til å dekke renter.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Revisjon og intern kontroll
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_8: TextbookChapter = {
  id: 'regnskap-revisjon-8',
  courseId: 'regnskap-revisjon',
  chapterNumber: '8',
  title: 'Revisjon og intern kontroll',
  description: 'Forstå revisors rolle, revisjonsmetoder og betydningen av intern kontroll.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare revisors rolle og oppgaver',
    'forstå forskjellen mellom intern og ekstern revisjon',
    'beskrive elementer i et internkontrollsystem',
    'kjenne til revisjonsstandarder og etiske krav',
  ],
  content: [
    {
      id: 'regnskap-revisjon-8-intro',
      type: 'text',
      content: `Revisjon er en uavhengig kontroll av regnskapet som gir brukerne trygghet for at informasjonen er pålitelig. Intern kontroll er virksomhetens egne systemer for å sikre korrekt regnskapsføring og forebygge feil og misligheter.`,
    },
    {
      id: 'regnskap-revisjon-8-def-1',
      type: 'definition',
      title: 'Revisjon',
      content: `**Revisjon** er en uavhengig og systematisk undersøkelse av regnskapet for å avgi en bekreftelse (revisjonsberetning) på at årsregnskapet:
- Er utarbeidet i samsvar med lov og forskrifter
- Gir et rettvisende bilde av virksomhetens stilling og resultat
- Ikke inneholder vesentlige feil

Revisor avgir en revisjonsberetning med sin konklusjon.`,
    },
    {
      id: 'regnskap-revisjon-8-text-1',
      type: 'text',
      title: 'Revisjonsplikt',
      content: `Følgende har revisjonsplikt:
- Aksjeselskaper (unntatt små AS)
- Allmennaksjeselskaper
- Foretak over terskelverdier

**Unntak fra revisjonsplikt (små AS):**
Et AS kan velge bort revisor hvis det ikke overskrider to av tre:
- Driftsinntekter: 7 mill. kr
- Balansesum: 27 mill. kr (fra 2025: 29 mill.)
- Årsverk: 10

Generalforsamlingen må aktivt vedta fravalg av revisjon.`,
    },
    {
      id: 'regnskap-revisjon-8-def-2',
      type: 'definition',
      title: 'Revisor',
      content: `En **revisor** er en autorisert person som utfører revisjon. I Norge finnes to kategorier:
- **Statsautorisert revisor** - høyeste kvalifikasjon, kan revidere alle selskaper
- **Registrert revisor** - kan revidere mindre selskaper

Revisorer må være godkjent av Finanstilsynet og oppfylle krav til:
- Utdanning (mastergrad + praksis)
- Etterlevelse av etiske regler
- Kontinuerlig etterutdanning
- Uavhengighet`,
    },
    {
      id: 'regnskap-revisjon-8-text-2',
      type: 'text',
      title: 'Revisors uavhengighet',
      content: `Uavhengighet er fundamentalt for revisjon. Revisor kan IKKE:
- Ha økonomiske interesser i klienten
- Være ansatt eller styremedlem i klienten
- Ha nære familierelasjoner til ledelsen
- Yte visse tilleggstjenester (bokføring, verdsettelse)
- Revidere samme selskap for lenge (rotasjon hvert 7. år for PIE)

**PIE (Public Interest Entities):**
Børsnoterte selskaper, banker og forsikringsselskaper har ekstra strenge krav.`,
    },
    {
      id: 'regnskap-revisjon-8-def-3',
      type: 'definition',
      title: 'Revisjonsstandarder',
      content: `Revisjon utføres etter **ISA** (International Standards on Auditing):
- ISA 200: Overordnede mål og prinsipper
- ISA 315: Forståelse av virksomheten og risikovurdering
- ISA 330: Revisors håndtering av risiko
- ISA 500: Revisjonsbevis
- ISA 700: Revisjonsberetning

Standardene er fastsatt av IAASB og implementert i Norge gjennom revisorloven.`,
    },
    {
      id: 'regnskap-revisjon-8-text-3',
      type: 'text',
      title: 'Revisjonsmetoder',
      content: `Revisor bruker ulike metoder for å samle bevis:

**Risikovurdering:**
- Forstå virksomheten og bransjen
- Identifisere områder med høy risiko for feil
- Vurdere internkontrollen

**Substanshandlinger:**
- Detaljtest av transaksjoner og saldoer
- Analytiske handlinger (sammenligne, beregne forventninger)
- Ekstern bekreftelse (bank, kunder, leverandører)

**Test av kontroller:**
- Verifisere at internkontrollen fungerer
- Observasjon, gjennomgang, ny utførelse`,
    },
    {
      id: 'regnskap-revisjon-8-def-4',
      type: 'definition',
      title: 'Intern kontroll',
      content: `**Intern kontroll** er virksomhetens egne systemer og rutiner for å sikre:
- Pålitelig regnskapsrapportering
- Effektiv og rasjonell drift
- Overholdelse av lover og regler
- Beskyttelse av eiendeler

COSO-rammeverket definerer fem komponenter:
1. Kontrollmiljø
2. Risikovurdering
3. Kontrollaktiviteter
4. Informasjon og kommunikasjon
5. Overvåking`,
    },
    {
      id: 'regnskap-revisjon-8-example-1',
      type: 'example',
      title: 'Eksempel: Kontrollaktiviteter',
      content: `**Typiske kontroller i en virksomhet:**

**Funksjonsdeling:**
- Den som godkjenner innkjøp ≠ den som betaler
- Den som registrerer salg ≠ den som mottar betaling

**Autorisasjoner:**
- Beløpsgrenser for godkjenning
- Elektronisk signering av fakturaer

**Avstemminger:**
- Daglig kasseavstemming
- Månedlig bankavstemming
- Periodisk lagertelling

**IT-kontroller:**
- Tilgangsstyring i systemer
- Loggføring av endringer
- Backup av data`,
    },
    {
      id: 'regnskap-revisjon-8-text-4',
      type: 'text',
      title: 'Revisjonsberetningen',
      content: `Revisjonsberetningen er revisors rapport og kan ha ulike konklusjoner:

**Uten forbehold:**
"Etter vår mening gir årsregnskapet et rettvisende bilde..."
→ Regnskapet er OK

**Med forbehold:**
"Med unntak av..." → Det finnes avgrensede feil

**Negativ konklusjon:**
"Årsregnskapet gir ikke et rettvisende bilde..."
→ Regnskapet er vesentlig feil

**Kan ikke uttale seg:**
Revisor har ikke tilstrekkelig grunnlag for å konkludere

I tillegg kan revisor gi **presiseringer** om forhold som bør fremheves.`,
    },
    {
      id: 'regnskap-revisjon-8-def-5',
      type: 'definition',
      title: 'Internrevisjon vs. ekstern revisjon',
      content: `**Ekstern revisjon:**
- Uavhengig av virksomheten
- Lovpålagt (for større selskaper)
- Fokus på årsregnskapet
- Rapporterer til generalforsamlingen

**Internrevisjon:**
- Ansatt i virksomheten
- Frivillig (men anbefalt for store selskaper)
- Bredere fokus (også effektivitet, etterlevelse)
- Rapporterer til styret/revisjonskomiteen`,
    },
    {
      id: 'regnskap-revisjon-8-warning-1',
      type: 'warning',
      title: 'Hva revisor IKKE gjør',
      content: `Vanlige misforståelser:
- Revisor garanterer IKKE at regnskapet er 100% korrekt
- Revisor er IKKE ansvarlig for å avdekke all svindel
- Revisor utarbeider IKKE regnskapet (det gjør virksomheten selv)
- Revisor er IKKE rådgiver for ledelsen

Revisjon gir "rimelig sikkerhet", ikke absolutt sikkerhet. Vesentlighetsgrenser betyr at små feil aksepteres.`,
    },
  ],
  exercises: [
    {
      id: 'regnskap-revisjon-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med revisjon?',
      options: [
        { id: 'a', text: 'Å utarbeide regnskapet for virksomheten', isCorrect: false },
        { id: 'b', text: 'Å gi en uavhengig bekreftelse på at regnskapet er pålitelig', isCorrect: true },
        { id: 'c', text: 'Å minimere skatten', isCorrect: false },
        { id: 'd', text: 'Å rådgi ledelsen', isCorrect: false },
      ],
      solution: 'Revisjon gir en uavhengig bekreftelse på at årsregnskapet er uten vesentlige feil.',
    },
    {
      id: 'regnskap-revisjon-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem mottar revisjonsberetningen?',
      options: [
        { id: 'a', text: 'Daglig leder', isCorrect: false },
        { id: 'b', text: 'Regnskapsfører', isCorrect: false },
        { id: 'c', text: 'Generalforsamlingen/eierne', isCorrect: true },
        { id: 'd', text: 'Skatteetaten', isCorrect: false },
      ],
      solution: 'Revisjonsberetningen avgis til generalforsamlingen, altså eierne.',
    },
    {
      id: 'regnskap-revisjon-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr det at revisor må være "uavhengig"?',
      options: [
        { id: 'a', text: 'Revisor må jobbe alene', isCorrect: false },
        { id: 'b', text: 'Revisor kan ikke ha interesser som påvirker objektiviteten', isCorrect: true },
        { id: 'c', text: 'Revisor trenger ikke følge standarder', isCorrect: false },
        { id: 'd', text: 'Revisor velger selv hvilke selskaper som skal revideres', isCorrect: false },
      ],
      solution: 'Uavhengighet betyr at revisor ikke kan ha økonomiske eller personlige interesser i klienten.',
    },
    {
      id: 'regnskap-revisjon-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonsdeling i intern kontroll?',
      options: [
        { id: 'a', text: 'At alle ansatte har samme oppgaver', isCorrect: false },
        { id: 'b', text: 'At kritiske oppgaver fordeles på flere personer', isCorrect: true },
        { id: 'c', text: 'At regnskapet deles i perioder', isCorrect: false },
        { id: 'd', text: 'At revisor kontrollerer alle transaksjoner', isCorrect: false },
      ],
      solution: 'Funksjonsdeling betyr at ingen enkeltperson kontrollerer en hel prosess fra start til slutt.',
    },
    {
      id: 'regnskap-revisjon-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Når kan et AS velge bort revisor?',
      options: [
        { id: 'a', text: 'Alltid, etter styrets beslutning', isCorrect: false },
        { id: 'b', text: 'Når det ikke overskrider to av tre terskler for små foretak', isCorrect: true },
        { id: 'c', text: 'Når det har færre enn 5 ansatte', isCorrect: false },
        { id: 'd', text: 'Etter 5 år med revisor', isCorrect: false },
      ],
      solution: 'Små AS kan velge bort revisor hvis de ikke overskrider to av: 7 mill. omsetning, 27 mill. balanse, 10 årsverk.',
    },
    {
      id: 'regnskap-revisjon-8-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr en "ren" revisjonsberetning (uten forbehold)?',
      options: [
        { id: 'a', text: 'At det ikke finnes noen feil i regnskapet', isCorrect: false },
        { id: 'b', text: 'At revisor mener regnskapet gir et rettvisende bilde uten vesentlige feil', isCorrect: true },
        { id: 'c', text: 'At revisor ikke har funnet svindel', isCorrect: false },
        { id: 'd', text: 'At regnskapet er godkjent av Skatteetaten', isCorrect: false },
      ],
      solution: 'En ren beretning betyr at revisor mener regnskapet i det vesentlige er korrekt og rettvisende.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const REGNSKAP_REVISJON_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_1,
  CHAPTER_REGNSKAP_REVISJON_2,
  CHAPTER_REGNSKAP_REVISJON_3,
  CHAPTER_REGNSKAP_REVISJON_4,
  CHAPTER_REGNSKAP_REVISJON_5,
  CHAPTER_REGNSKAP_REVISJON_6,
  CHAPTER_REGNSKAP_REVISJON_7,
  CHAPTER_REGNSKAP_REVISJON_8,
];

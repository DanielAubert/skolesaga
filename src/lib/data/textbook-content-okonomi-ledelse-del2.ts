/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 2: Organisasjon
 *
 * Kapittel 2.1–2.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for ulike organisasjonsstrukturer
 * - analysere organisasjonskultur og dens betydning
 * - drøfte hvordan organisasjoner håndterer endring
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Hva er en organisasjon?
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_1: TextbookChapter = {
  id: 'okonomi-ledelse-2-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.1',
  title: 'Hva er en organisasjon?',
  description: 'I dette kapittelet lærer du hva en organisasjon er, hvilke fellestrekk organisasjoner har, og forskjellen mellom formelle og uformelle organisasjoner.',
  estimatedMinutes: 20,
  competenceGoals: ['gjøre rede for ulike organisasjonsstrukturer'],
  keyTerms: [],
  content: [
    {
      id: 'ol-2-1-intro',
      type: 'text',
      content: `## Hva er en organisasjon?

De fleste av oss er med i flere organisasjoner uten å tenke over det. Skolen du går på er en organisasjon, idrettslaget du trener i er en organisasjon, og bedriften du kanskje har deltidsjobb i er en organisasjon. Men hva er det egentlig som gjør noe til en organisasjon?

I dette kapittelet skal du lære:
- Hva begrepet organisasjon innebærer
- Hvilke fellestrekk alle organisasjoner har
- Forskjellen mellom formelle og uformelle organisasjoner
- Hvorfor organisasjoner er viktige i samfunnet`,
    },
    {
      id: 'ol-2-1-def-1',
      type: 'definition',
      title: 'Organisasjon',
      content: `**Organisasjon** er et bevisst, stabilt og målrettet samarbeid mellom mennesker. Organisasjoner eksisterer fordi mennesker kan oppnå mer sammen enn alene, og de kjennetegnes ved at deltakerne har felles mål, fordelte arbeidsoppgaver og en viss struktur for samarbeidet.`,
    },
    {
      id: 'ol-2-1-text-1',
      type: 'text',
      content: `### Fellestrekk ved organisasjoner

Selv om organisasjoner varierer enormt i størrelse og type, har de noen fellestrekk:

**1. Felles mål**
Alle organisasjoner har et eller flere mål de jobber mot. En bedrift ønsker å tjene penger og levere gode produkter. En skole ønsker at elevene skal lære. Et idrettslag ønsker sportslig utvikling.

**2. Arbeidsdeling**
Oppgavene er fordelt mellom deltakerne. I en bedrift har ulike avdelinger ulike oppgaver. I et idrettslag har trenere, spillere og styremedlemmer forskjellige roller.

**3. Koordinering**
Noen må sørge for at de ulike delene henger sammen. Det trengs ledelse, rutiner og systemer for at samarbeidet skal fungere.

**4. Varig samarbeid**
Organisasjoner er ment å vare over tid. De er ikke midlertidige sammenkomster, men stabile strukturer med en viss varighet.`,
    },
    {
      id: 'ol-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Idrettslaget som organisasjon',
      problem: 'Vis hvordan et lokalt fotballag oppfyller de fire fellestrekkene ved en organisasjon.',
      solution: `**Felles mål:** Fotballaget har som mål å utvikle spillerne og oppnå gode sportslige resultater i serien.

**Arbeidsdeling:** Treneren planlegger treninger og kamptaktikk. Styreleder håndterer økonomi og administrasjon. Spillerne trener og spiller kamper. Lagledere ordner praktiske ting som drakter og transport.

**Koordinering:** Styret har jevnlige møter. Treneren kommuniserer med spillerne gjennom felles meldingsgrupper. Sesongplan sørger for at alle vet når det er treninger og kamper.

**Varig samarbeid:** Fotballaget har eksistert i mange år. Selv om spillere og trenere byttes ut, består organisasjonen over tid.`,
    },
    {
      id: 'ol-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hvilke av følgende er fellestrekk ved alle organisasjoner?',
        options: [
          { id: 'a', text: 'Felles mål, arbeidsdeling, koordinering og varig samarbeid', isCorrect: true },
          { id: 'b', text: 'Profitt, hierarki, kontor og ansatte', isCorrect: false },
          { id: 'c', text: 'Styre, daglig leder, regnskap og strategi', isCorrect: false },
          { id: 'd', text: 'Kunder, produkter, markedsføring og salg', isCorrect: false },
        ],
        solution: 'De fire fellestrekkene ved alle organisasjoner er felles mål, arbeidsdeling, koordinering og varig samarbeid. De andre alternativene gjelder kun for visse typer organisasjoner, som bedrifter.',
      },
    },
    {
      id: 'ol-2-1-def-2',
      type: 'definition',
      title: 'Formell organisasjon',
      content: `En **formell organisasjon** har en offisiell struktur med skrevne regler, definerte roller, klare ansvarsområder og et organisasjonskart. Eksempler er bedrifter, offentlige etater og registrerte foreninger.`,
    },
    {
      id: 'ol-2-1-text-2',
      type: 'text',
      content: `### Formelle og uformelle organisasjoner

**Formelle organisasjoner** kjennetegnes ved:
- Skriftlige vedtekter, regler og rutiner
- Offisielle stillinger og roller
- Organisasjonskart som viser strukturen
- Registrert i offentlige registre (f.eks. Brønnøysundregistrene)
- Eksempler: aksjeselskaper, kommuner, skoler, sykehus

**Uformelle organisasjoner** kjennetegnes ved:
- Oppstår naturlig mellom mennesker
- Ingen skriftlige regler eller vedtekter
- Roller utvikler seg basert på personlighet og kompetanse
- Ingen offisiell registrering
- Eksempler: vennegjenger, nabonettverk, uformelle arbeidsgrupper

De fleste formelle organisasjoner har også uformelle strukturer inni seg. En bedrift har for eksempel både et offisielt organisasjonskart og uformelle vennskap og allianser mellom de ansatte.`,
    },
    {
      id: 'ol-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Formell vs. uformell i praksis',
      problem: 'I en bedrift finnes det både formelle og uformelle strukturer. Gi eksempler.',
      solution: `**Formelle strukturer:**
- Organisasjonskartet viser at Kari er avdelingsleder og har fire ansatte under seg
- Arbeidsinstruksen sier at nye prosjekter må godkjennes av avdelingsleder
- Møtekalenderen viser ukentlige avdelingsmøter hver mandag

**Uformelle strukturer:**
- Per og Lisa spiser alltid lunsj sammen og diskuterer ideer
- Ola er ikke leder, men alle spør ham om råd fordi han har lang erfaring
- De ansatte i andre etasje har en uformell fredagskaffe der mye informasjon utveksles

De uformelle strukturene kan styrke organisasjonen (f.eks. gjennom kunnskapsdeling), men kan også skape problemer (f.eks. uformelle maktstrukturer som motarbeider ledelsen).`,
    },
    {
      id: 'ol-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en uformell organisasjon?',
        options: [
          { id: 'a', text: 'Den har vedtekter og organisasjonskart', isCorrect: false },
          { id: 'b', text: 'Den oppstår naturlig og har ingen skriftlige regler', isCorrect: true },
          { id: 'c', text: 'Den er alltid registrert i Brønnøysundregistrene', isCorrect: false },
          { id: 'd', text: 'Den har alltid en valgt leder', isCorrect: false },
        ],
        solution: 'Uformelle organisasjoner oppstår naturlig mellom mennesker og har verken skriftlige regler, vedtekter eller offisielle roller. Rollene utvikler seg basert på personlighet og relasjoner.',
      },
    },
    {
      id: 'ol-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-3',
        number: '2.1.3',
        type: 'classic',
        task: 'Velg en organisasjon du er medlem av (skole, idrettslag, jobb, frivillig organisasjon). Forklar hvordan den oppfyller de fire fellestrekkene ved en organisasjon, og gi eksempler på både formelle og uformelle strukturer i den.',
        hints: ['Tenk på hvordan oppgaver er fordelt, hvem som koordinerer, og hva som er de felles målene.'],
        solution: 'Svaret bør inneholde: 1) Hvilken organisasjon du har valgt. 2) Felles mål (f.eks. skolens mål om at elever skal lære). 3) Arbeidsdeling (f.eks. lærere, administrasjon, rektor). 4) Koordinering (f.eks. timeplan, møter, intranett). 5) Varig samarbeid (organisasjonen består over tid). 6) Formelle strukturer (organisasjonskart, vedtekter). 7) Uformelle strukturer (vennskap, uformelle ledere, kaffegrupper).',
      },
    },
    {
      id: 'ol-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **organisasjon** er et bevisst, stabilt og målrettet samarbeid mellom mennesker
- Alle organisasjoner har fire fellestrekk: **felles mål**, **arbeidsdeling**, **koordinering** og **varig samarbeid**
- **Formelle organisasjoner** har offisielle regler, roller og struktur
- **Uformelle organisasjoner** oppstår naturlig uten skriftlige regler
- De fleste formelle organisasjoner inneholder også uformelle strukturer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisasjon | Bevisst, stabilt og målrettet samarbeid mellom mennesker |
| Formell organisasjon | Organisasjon med skrevne regler, definerte roller og organisasjonskart |
| Uformell organisasjon | Naturlig oppstått samarbeid uten offisielle regler |
| Arbeidsdeling | At oppgaver er fordelt mellom deltakerne |
| Koordinering | At de ulike delene av organisasjonen henger sammen |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Forklar med egne ord hva som skiller en organisasjon fra en tilfeldig gruppe mennesker. Gi minst tre argumenter.',
        solution: 'En organisasjon skiller seg fra en tilfeldig gruppe ved at: 1) Samarbeidet er bevisst og planlagt, ikke tilfeldig. 2) Det finnes felles mål som deltakerne jobber mot. 3) Oppgavene er fordelt mellom deltakerne (arbeidsdeling). 4) Noen koordinerer arbeidet slik at delene henger sammen. 5) Samarbeidet er ment å vare over tid, ikke bare være en engangsforeteelse.',
      },
    },
    {
      id: 'ol-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-5',
        number: '2.1.5',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE et fellestrekk ved organisasjoner?',
        options: [
          { id: 'a', text: 'Felles mål', isCorrect: false },
          { id: 'b', text: 'Arbeidsdeling', isCorrect: false },
          { id: 'c', text: 'Profitt', isCorrect: true },
          { id: 'd', text: 'Koordinering', isCorrect: false },
        ],
        solution: 'Profitt er ikke et fellestrekk ved alle organisasjoner. Mange organisasjoner er ideelle og har ikke profitt som mål, for eksempel frivillige organisasjoner, idrettslag og offentlige etater. De fire fellestrekkene er felles mål, arbeidsdeling, koordinering og varig samarbeid.',
      },
    },
    {
      id: 'ol-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved uformelle strukturer i en formell organisasjon. Gi konkrete eksempler.',
        hints: ['Tenk på kunnskapsdeling, men også utenforskap og uformelle maktstrukturer.'],
        solution: 'Fordeler: 1) Rask informasjonsflyt utenfor offisielle kanaler. 2) Kunnskapsdeling gjennom uformelle samtaler. 3) Sosialt fellesskap og trivsel. 4) Fleksibilitet når de formelle systemene er trege. Ulemper: 1) Uformelle ledere kan motarbeide den offisielle ledelsen. 2) Noen kan føle seg utenfor klikker og grupper. 3) Rykter og feilinformasjon kan spres raskt. 4) Beslutninger kan tas i uformelle settinger uten at alle berørte er med.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Organisasjonsstruktur
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_2: TextbookChapter = {
  id: 'okonomi-ledelse-2-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.2',
  title: 'Organisasjonsstruktur',
  description: 'Du lærer om de vanligste organisasjonsstrukturene: linjeorganisasjon, funksjonsorganisasjon, matriseorganisasjon og prosjektorganisasjon. Du forstår hvordan et organisasjonskart viser strukturen.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for ulike organisasjonsstrukturer'],
  keyTerms: [],
  content: [
    {
      id: 'ol-2-2-intro',
      type: 'text',
      content: `## Organisasjonsstruktur

Tenk deg at du starter en bedrift. Til å begynne med er dere kanskje bare to-tre personer som gjør litt av alt. Men etter hvert som bedriften vokser, trenger dere en tydeligere struktur. Hvem bestemmer hva? Hvem rapporterer til hvem? Hvordan organiserer dere oppgavene?

I dette kapittelet skal du lære:
- Hva organisasjonsstruktur er og hvorfor den er viktig
- De fire vanligste organisasjonsformene
- Hvordan organisasjonskart viser strukturen
- Fordeler og ulemper ved ulike strukturer`,
    },
    {
      id: 'ol-2-2-def-1',
      type: 'definition',
      title: 'Organisasjonsstruktur',
      content: `**Organisasjonsstruktur** beskriver hvordan oppgaver, ansvar og myndighet er fordelt i en organisasjon. Strukturen bestemmer hvem som gjør hva, hvem som rapporterer til hvem, og hvordan beslutninger tas. Strukturen visualiseres ofte i et **organisasjonskart**.`,
    },
    {
      id: 'ol-2-2-text-1',
      type: 'text',
      content: `### Linjeorganisasjon

Linjeorganisasjonen er den enkleste og eldste organisasjonsformen. Her har hver ansatt kun én leder å forholde seg til, og kommandolinjene går rett fra topp til bunn.

**Kjennetegn:**
- Klar kommandolinje fra topp til bunn
- Hver ansatt har kun én overordnet
- Beslutninger tas på toppen og formidles nedover
- Enkel og oversiktlig struktur

**Fordeler:**
- Tydelig hvem som bestemmer
- Enkelt å forstå hvem man rapporterer til
- Klare ansvarsforhold

**Ulemper:**
- Toppstyrt og lite fleksibel
- Lang vei for informasjon (mange ledd)
- Kan bli flaskehals hos lederen
- Lite utnyttelse av spesialkompetanse`,
    },
    {
      id: 'ol-2-2-text-2',
      type: 'text',
      content: `### Funksjonsorganisasjon

I en funksjonsorganisasjon er bedriften delt inn etter fagområder eller funksjoner, for eksempel økonomi, markedsføring, produksjon og HR.

**Kjennetegn:**
- Inndeling etter fagområde
- Ansatte kan ha flere faglige overordnede
- Spesialisering innenfor hvert fagområde

**Fordeler:**
- God utnyttelse av spesialkompetanse
- Effektiv innenfor hvert fagområde
- Enklere faglig utvikling

**Ulemper:**
- Kan oppstå «siloer» mellom avdelingene
- Uklart hvem som har det endelige ansvaret
- Vanskelig å koordinere på tvers`,
    },
    {
      id: 'ol-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Funksjonsorganisasjon i en mellomstor bedrift',
      problem: 'En møbelprodusent med 80 ansatte skal velge organisasjonsstruktur. Hvordan kan en funksjonsorganisasjon se ut?',
      solution: `Bedriften deles inn i avdelinger etter fagområde:

**Daglig leder** har ansvar for helheten og koordinerer mellom avdelingene.

- **Produksjonsavdeling** (30 ansatte): Ansvar for å lage møblene. Ledet av produksjonssjef.
- **Salg og markedsføring** (15 ansatte): Ansvar for å selge produktene. Ledet av salgssjef.
- **Økonomiavdeling** (10 ansatte): Regnskap, budsjett, fakturering. Ledet av økonomisjef.
- **Lager og logistikk** (15 ansatte): Varemottak, lagring, utsending. Ledet av logistikksjef.
- **HR og administrasjon** (10 ansatte): Rekruttering, personal, kontorstøtte. Ledet av HR-sjef.

Hver avdeling har sin spesialkompetanse, men de må samarbeide for at bedriften skal fungere.`,
    },
    {
      id: 'ol-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva er hovedkjennetegnet ved en linjeorganisasjon?',
        options: [
          { id: 'a', text: 'Ansatte er organisert i prosjektgrupper', isCorrect: false },
          { id: 'b', text: 'Hver ansatt har kun én overordnet, med klar kommandolinje fra topp til bunn', isCorrect: true },
          { id: 'c', text: 'Ansatte rapporterer til flere ledere samtidig', isCorrect: false },
          { id: 'd', text: 'Organisasjonen har ingen formell ledelse', isCorrect: false },
        ],
        solution: 'Linjeorganisasjonen kjennetegnes ved en klar kommandolinje der hver ansatt kun har én overordnet. Beslutningene tas på toppen og formidles nedover gjennom linjene.',
      },
    },
    {
      id: 'ol-2-2-text-3',
      type: 'text',
      content: `### Matriseorganisasjon

Matriseorganisasjonen kombinerer funksjonsorganisasjon med prosjektorganisering. De ansatte har to ledere: en faglig leder og en prosjektleder.

**Kjennetegn:**
- Dobbel kommandolinje (faglig + prosjekt)
- Ansatte tilhører både en fagavdeling og et prosjekt
- Fleksibel fordeling av ressurser mellom prosjekter

**Fordeler:**
- God utnyttelse av spesialkompetanse på tvers
- Fleksibel tilpasning til nye prosjekter
- Fremmer samarbeid mellom fagområder

**Ulemper:**
- To ledere kan gi motstridende signaler
- Kompleks og krevende å administrere
- Kan skape lojalitetskonflikter hos de ansatte

### Prosjektorganisasjon

I en prosjektorganisasjon settes det sammen midlertidige team for å løse spesifikke oppgaver. Når prosjektet er ferdig, oppløses teamet.

**Kjennetegn:**
- Midlertidige team for avgrensede oppgaver
- Klare tidsrammer og budsjetter
- Prosjektleder har fullt ansvar

**Fordeler:**
- Tydelig fokus på oppgaven
- Samler riktig kompetanse for akkurat denne oppgaven
- Klare mål og tidsfrister

**Ulemper:**
- Usikkerhet for ansatte mellom prosjekter
- Kunnskap kan gå tapt når teamet oppløses
- Vanskelig å bygge langsiktige fagmiljøer`,
    },
    {
      id: 'ol-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Matriseorganisasjon i et konsulentselskap',
      problem: 'Hvordan fungerer en matriseorganisasjon i praksis?',
      solution: `Et IT-konsulentselskap har tre fagavdelinger: Utvikling, Design og Testing. Samtidig har de tre kundeoppdrag som kjører parallelt.

**Utvikler Lise** tilhører fagavdelingen Utvikling (der hun har sin faglige leder), men jobber akkurat nå i prosjektet «Ny nettbutikk for Klient A» (der hun rapporterer til prosjektleder Erik).

Lise har altså to ledere:
- **Faglig leder:** Utviklingssjef Marit (ansvar for faglig utvikling, kurs, kompetanse)
- **Prosjektleder:** Erik (ansvar for tidsfrister, leveranser, kundeoppfølging)

Dette gir fleksibilitet fordi Lise kan flyttes til et nytt prosjekt når nettbutikken er ferdig, mens hun fortsatt tilhører fagavdelingen sin.`,
    },
    {
      id: 'ol-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        task: 'Hva er en sentral ulempe med matriseorganisasjon?',
        options: [
          { id: 'a', text: 'Det er vanskelig å utnytte spesialkompetanse', isCorrect: false },
          { id: 'b', text: 'Ansatte kan få motstridende signaler fra to ledere', isCorrect: true },
          { id: 'c', text: 'Organisasjonen mangler fleksibilitet', isCorrect: false },
          { id: 'd', text: 'Det finnes ingen prosjektleder', isCorrect: false },
        ],
        solution: 'En sentral ulempe med matriseorganisasjonen er at ansatte har to ledere som kan gi motstridende signaler. Faglig leder og prosjektleder kan ha ulike prioriteringer, noe som skaper lojalitetskonflikter.',
      },
    },
    {
      id: 'ol-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        task: 'En nyoppstartet teknologibedrift med 12 ansatte driver med apputvikling. De har tre utviklere, to designere, en prosjektleder, en økonomiansvarlig og fem selgere. Hvilken organisasjonsform ville du anbefalt, og hvorfor?',
        hints: ['Vurder størrelsen på bedriften og behovet for fleksibilitet.'],
        solution: 'For en liten bedrift med 12 ansatte passer trolig en enkel linjeorganisasjon eller en flat funksjonsorganisasjon best. En matriseorganisasjon ville vært for kompleks. Daglig leder kan ha direkte kontakt med alle ansatte. Man kan dele inn i tre grupper: Utvikling (utviklere + designere), Salg (selgerne), og Administrasjon (økonomi + prosjektleder). Den enkle strukturen gir rask kommunikasjon og lite byråkrati, noe som passer en liten, innovativ bedrift.',
      },
    },
    {
      id: 'ol-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Organisasjonsstruktur** viser hvordan oppgaver, ansvar og myndighet er fordelt
- **Linjeorganisasjon:** Enkel struktur med klar kommandolinje, men lite fleksibel
- **Funksjonsorganisasjon:** Inndeling etter fagområde, god spesialisering, men risiko for siloer
- **Matriseorganisasjon:** Dobbel kommandolinje (fag + prosjekt), fleksibel men kompleks
- **Prosjektorganisasjon:** Midlertidige team for avgrensede oppgaver

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisasjonsstruktur | Hvordan oppgaver, ansvar og myndighet er fordelt |
| Linjeorganisasjon | Struktur med én overordnet per ansatt og klar kommandolinje |
| Funksjonsorganisasjon | Inndeling etter fagområde (økonomi, salg, produksjon) |
| Matriseorganisasjon | Dobbel kommandolinje med faglig leder og prosjektleder |
| Prosjektorganisasjon | Midlertidige team for avgrensede oppgaver |
| Organisasjonskart | Visuell fremstilling av organisasjonens struktur |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Sammenlign linjeorganisasjon og matriseorganisasjon. Lag en tabell med fordeler og ulemper for hver, og forklar hvilke typer bedrifter som passer best for hver struktur.',
        solution: 'Linjeorganisasjon: Fordeler - tydelig ansvar, enkel å forstå, klare kommandolinjer. Ulemper - lite fleksibel, lang informasjonsvei, flaskehals hos leder. Passer best for: mindre bedrifter, militæret, produksjonsbedrifter med stabile oppgaver. Matriseorganisasjon: Fordeler - fleksibel, god utnyttelse av kompetanse, fremmer samarbeid. Ulemper - kompleks, doble kommandolinjer, lojalitetskonflikter. Passer best for: konsulentselskaper, store teknologibedrifter, organisasjoner med mange parallelle prosjekter.',
      },
    },
    {
      id: 'ol-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-5',
        number: '2.2.5',
        type: 'multiple-choice',
        task: 'Hvilket organisasjonsform bruker midlertidige team som oppløses når oppgaven er fullført?',
        options: [
          { id: 'a', text: 'Linjeorganisasjon', isCorrect: false },
          { id: 'b', text: 'Funksjonsorganisasjon', isCorrect: false },
          { id: 'c', text: 'Matriseorganisasjon', isCorrect: false },
          { id: 'd', text: 'Prosjektorganisasjon', isCorrect: true },
        ],
        solution: 'Prosjektorganisasjonen kjennetegnes ved at midlertidige team settes sammen for å løse en bestemt oppgave, og oppløses når prosjektet er ferdig. Teammedlemmene kan deretter settes inn i nye prosjekter.',
      },
    },
    {
      id: 'ol-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        task: 'Tenk deg at du er daglig leder i en voksende bedrift som har gått fra 10 til 50 ansatte på to år. Dere har hatt en flat struktur der alle rapporterer direkte til deg. Forklar hvorfor dette ikke lenger fungerer, og foreslå en ny organisasjonsstruktur.',
        hints: ['Tenk på kontrollspenn - hvor mange ansatte en leder kan følge opp effektivt.'],
        solution: 'Med 50 ansatte som alle rapporterer direkte til daglig leder, blir det umulig å følge opp alle. Kontrollspennet (antall direkte underordnede) bør normalt være mellom 5-10. Forslag: En funksjonsorganisasjon med avdelingsledere for hvert fagområde. Daglig leder har 4-6 avdelingsledere som rapporterer til seg, og hver avdelingsleder har ansvar for 8-12 ansatte. Dette gir tydelig ansvarsfordeling, faglig spesialisering og håndterbart kontrollspenn.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Organisasjonskultur
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_3: TextbookChapter = {
  id: 'okonomi-ledelse-2-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.3',
  title: 'Organisasjonskultur',
  description: 'Du lærer om organisasjonskultur gjennom Scheins kulturmodell med tre nivåer: artefakter, verdier og normer, og grunnleggende antakelser. Du utforsker også subkulturer og kulturens betydning.',
  estimatedMinutes: 24,
  competenceGoals: ['analysere organisasjonskultur og dens betydning'],
  keyTerms: [],
  content: [
    {
      id: 'ol-2-3-intro',
      type: 'text',
      content: `## Organisasjonskultur

Har du noen gang lagt merke til at stemningen er helt ulik i forskjellige butikker, skoler eller arbeidsplasser? Noen steder er det uformelt og avslappet, andre steder er det formelt og strukturert. Denne «følelsen» du får er et uttrykk for organisasjonskulturen.

I dette kapittelet skal du lære:
- Hva organisasjonskultur er og hvorfor den er viktig
- Scheins kulturmodell med tre nivåer
- Forskjellen mellom artefakter, verdier og grunnleggende antakelser
- Hva subkulturer er og hvordan de påvirker organisasjonen`,
    },
    {
      id: 'ol-2-3-def-1',
      type: 'definition',
      title: 'Organisasjonskultur',
      content: `**Organisasjonskultur** er de felles verdier, normer, holdninger og virkelighetsoppfatninger som utvikler seg i en organisasjon over tid. Kulturen fungerer som organisasjonens «personlighet» og påvirker hvordan de ansatte tenker, handler og samhandler.`,
    },
    {
      id: 'ol-2-3-text-1',
      type: 'text',
      content: `### Scheins kulturmodell

Edgar Schein er en av de mest kjente organisasjonsforskerne og har utviklet en modell som deler organisasjonskulturen i tre nivåer – ofte fremstilt som et isfjell:

**Nivå 1: Artefakter (synlige)**
Det du kan se, høre og observere:
- Kontorinnredning og kleskode
- Logoer, slagord og nettsider
- Ritualer og seremonier (fredagspils, julebord, morgenkaffe)
- Hvordan ansatte snakker til hverandre
- Historier og myter som fortelles

**Nivå 2: Verdier og normer (delvis synlige)**
Det organisasjonen sier at den tror på:
- Offisielle verdier (f.eks. «innovasjon», «kundefokus»)
- Normer for akseptabel atferd
- Uttalte mål og strategier
- Etiske retningslinjer

**Nivå 3: Grunnleggende antakelser (usynlige)**
Ubevisste «sannheter» som tas for gitt:
- «Slik gjør vi det her»
- Dype antakelser om mennesker, arbeid og virkelighet
- Vanskelig å endre fordi folk ikke er bevisst på dem
- Styrer tolkning av hendelser og beslutninger`,
    },
    {
      id: 'ol-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Scheins modell i en IT-bedrift',
      problem: 'Identifiser de tre nivåene i organisasjonskulturen til en moderne IT-bedrift.',
      solution: `**Artefakter (synlige):**
- Åpent kontorlandskap med sitteballonger og bordtennisbord
- Uformell kleskode (t-skjorte og joggebukse er greit)
- Gratis frukt og kaffe i kantinen
- Fredagspils og hackathons
- Logo og fargerike vegger med bedriftens slagord

**Verdier og normer (delvis synlige):**
- «Vi verdsetter innovasjon og kreativitet»
- Flat struktur der alle kan snakke med alle
- Aksept for å feile – «fail fast, learn fast»
- Normen er at det er OK å jobbe hjemmefra

**Grunnleggende antakelser (usynlige):**
- «De beste ideene kommer fra de som har frihet»
- Antakelse om at hierarki hemmer kreativitet
- Tro på at teknologi kan løse alle problemer
- «Unge mennesker er mest innovative»`,
    },
    {
      id: 'ol-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'I Scheins kulturmodell - hvilket nivå representerer uskrevne regler for atferd og offisielle verdier?',
        options: [
          { id: 'a', text: 'Artefakter', isCorrect: false },
          { id: 'b', text: 'Verdier og normer', isCorrect: true },
          { id: 'c', text: 'Grunnleggende antakelser', isCorrect: false },
          { id: 'd', text: 'Subkulturer', isCorrect: false },
        ],
        solution: 'Verdier og normer er det midterste nivået i Scheins modell. Dette nivået er delvis synlig og omfatter organisasjonens uttalte verdier, normer for akseptabel atferd og etiske retningslinjer.',
      },
    },
    {
      id: 'ol-2-3-def-2',
      type: 'definition',
      title: 'Subkultur',
      content: `En **subkultur** er en kulturgruppe innenfor en større organisasjonskultur. Subkulturer oppstår naturlig i avdelinger, faggrupper eller sosiale grupper som utvikler sine egne verdier, normer og måter å jobbe på. Subkulturer kan styrke eller utfordre den overordnede organisasjonskulturen.`,
    },
    {
      id: 'ol-2-3-text-2',
      type: 'text',
      content: `### Subkulturer i organisasjoner

I større organisasjoner vil det alltid finnes subkulturer. De oppstår fordi mennesker som jobber tett sammen utvikler felles forståelser og vaner.

**Eksempler på subkulturer:**
- Salgsavdelingen har en konkurransepreget kultur med bonuser og resultattavler
- IT-avdelingen har en uformell kultur med fleksitid og hjemmekontor
- Ledelsen har en formell kultur med dress og strategimøter

**Subkulturer kan være:**
- **Forsterkende:** De støtter den overordnede kulturen, men med sin egen vri
- **Parallelle:** De eksisterer ved siden av hovedkulturen uten å påvirke den mye
- **Motkulturer:** De utfordrer eller motarbeider den offisielle kulturen

### Hvorfor er organisasjonskultur viktig?

Kulturen påvirker:
- **Motivasjon:** Ansatte som identifiserer seg med kulturen er mer motiverte
- **Rekruttering:** Bedrifter tiltrekker seg folk som passer inn i kulturen
- **Beslutninger:** Kulturen styrer hva som oppfattes som «riktig» å gjøre
- **Endring:** Sterk kultur kan gjøre endring vanskelig fordi «slik gjør vi det her»
- **Omdømme:** Kulturen påvirker hvordan omverdenen oppfatter organisasjonen`,
    },
    {
      id: 'ol-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Sterk vs. svak organisasjonskultur',
      problem: 'Hva er forskjellen mellom en sterk og en svak organisasjonskultur?',
      solution: `**Sterk organisasjonskultur:**
- De fleste ansatte deler de samme verdiene og normene
- Lite behov for detaljerte regler fordi «alle vet hva som forventes»
- Nyansatte sosialiseres raskt inn i kulturen
- Eksempel: Et familieid bakeri der alle er stolte av håndverkstradisjonen

**Svak organisasjonskultur:**
- Ulike grupper har forskjellige verdier og normer
- Stort behov for skriftlige regler og kontroll
- Vanskelig å si «slik gjør vi det her» fordi det varierer
- Eksempel: En nylig fusjonert bedrift der to ulike kulturer skal smelte sammen

En sterk kultur gir forutsigbarhet og samhold, men kan gjøre det vanskelig å endre kurs. En svak kultur gir rom for mangfold, men kan skape usikkerhet og konflikter.`,
    },
    {
      id: 'ol-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        task: 'Hva er artefakter i Scheins kulturmodell?',
        options: [
          { id: 'a', text: 'Ubevisste antakelser om virkeligheten', isCorrect: false },
          { id: 'b', text: 'Uttalte verdier og etiske retningslinjer', isCorrect: false },
          { id: 'c', text: 'Synlige uttrykk som kontorinnredning, kleskode og ritualer', isCorrect: true },
          { id: 'd', text: 'Subkulturer i organisasjonen', isCorrect: false },
        ],
        solution: 'Artefakter er det øverste, mest synlige nivået i Scheins modell. Det inkluderer alt du kan se, høre og observere: kontorinnredning, kleskode, logoer, ritualer, språk og fysiske omgivelser.',
      },
    },
    {
      id: 'ol-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        task: 'Bruk Scheins kulturmodell til å analysere organisasjonskulturen på din egen skole. Gi minst to eksempler for hvert av de tre nivåene.',
        hints: ['Se på det fysiske miljøet, uskrevne regler, og hva folk tar for gitt.'],
        solution: 'Artefakter: Skolens logo og farger, kleskode (eller mangel på det), kantinekultur, hvordan klasserom er innredet, skoleavis, fadderordning. Verdier og normer: Skolens uttalte verdier (respekt, ansvar), normer for fravær, uskrevne regler om mobilbruk, forventninger til innsats. Grunnleggende antakelser: «Karakterer er viktigst», «læreren har alltid rett», «praktiske fag er mindre viktig enn teoretiske» - disse er ofte ubevisste og tas for gitt.',
      },
    },
    {
      id: 'ol-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Organisasjonskultur** er felles verdier, normer og holdninger som utvikler seg over tid
- **Scheins kulturmodell** har tre nivåer: artefakter, verdier/normer og grunnleggende antakelser
- **Artefakter** er synlige uttrykk, **verdier** er delvis synlige, **grunnleggende antakelser** er usynlige
- **Subkulturer** oppstår naturlig i grupper innenfor organisasjonen
- Kulturen påvirker motivasjon, rekruttering, beslutninger og endringsevne

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisasjonskultur | Felles verdier, normer og holdninger i en organisasjon |
| Scheins kulturmodell | Modell med tre nivåer: artefakter, verdier, grunnleggende antakelser |
| Artefakter | Synlige uttrykk for kulturen (innredning, kleskode, ritualer) |
| Normer | Uskrevne regler for akseptabel atferd |
| Subkultur | Kulturgruppe innenfor en større organisasjonskultur |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Forklar hva Edgar Schein mener med «grunnleggende antakelser», og gi et eksempel på en slik antakelse som kan finnes i en norsk bedrift. Drøft hvorfor disse antakelsene er vanskelige å endre.',
        solution: 'Grunnleggende antakelser er ubevisste, dype «sannheter» som medlemmene tar for gitt. De er så innarbeidet at folk ikke reflekterer over dem. Eksempel: I en tradisjonell norsk industribedrift kan antakelsen være «de som jobber mest overtid er de mest lojale ansatte». Denne antakelsen påvirker hvem som forfremmes og hvordan innsats vurderes, uten at noen sier det høyt. De er vanskelige å endre fordi: 1) Folk er ikke bevisst på dem. 2) De oppleves som «sannheter», ikke valg. 3) De har fungert over lang tid. 4) Å utfordre dem føles truende.',
      },
    },
    {
      id: 'ol-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-5',
        number: '2.3.5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en motkultur i en organisasjon?',
        options: [
          { id: 'a', text: 'Den støtter og forsterker den overordnede kulturen', isCorrect: false },
          { id: 'b', text: 'Den eksisterer parallelt uten å påvirke hovedkulturen', isCorrect: false },
          { id: 'c', text: 'Den utfordrer eller motarbeider den offisielle kulturen', isCorrect: true },
          { id: 'd', text: 'Den finnes bare i ledelsen', isCorrect: false },
        ],
        solution: 'En motkultur er en subkultur som aktivt utfordrer eller motarbeider den offisielle organisasjonskulturen. Den kan for eksempel oppstå i grupper som er misfornøyde med ledelsens beslutninger eller verdier.',
      },
    },
    {
      id: 'ol-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'En bedrift har som offisiell verdi at «vi setter kunden først». Likevel opplever kundene dårlig service. Bruk Scheins modell til å forklare hvordan dette kan skje.',
        hints: ['Tenk på gapet mellom uttalte verdier og grunnleggende antakelser.'],
        solution: 'Artefakter: Kanskje henger slagordet «kunden først» på veggen, og det står i strategidokumentet. Verdier: Ledelsen sier at kundefokus er viktig. Men grunnleggende antakelser kan være: «Det viktigste er å holde budsjettet», «kundene klager uansett» eller «effektivitet betyr å bruke minst mulig tid per kunde». Disse ubevisste antakelsene overstyrer de uttalte verdiene. De ansatte handler etter det de faktisk tror er viktig (kostnadsbesparelse, effektivitet), ikke det som henger på veggen. For å endre dette må ledelsen jobbe med de grunnleggende antakelsene, ikke bare endre slagordene.',
      },
    },
    {
      id: 'ol-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-2-3-ex-7',
        number: '2.3.7',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved å ha en sterk organisasjonskultur. Bruk eksempler i svaret ditt.',
        solution: 'Fordeler: 1) Samhold og fellesskapsfølelse blant ansatte. 2) Rask sosialisering av nyansatte. 3) Forutsigbar atferd - alle vet hva som forventes. 4) Sterk identitet og omdømme utad. Eksempel: IKEA der alle deler verdier om enkelhet og kostnadsbevissthet. Ulemper: 1) Vanskelig å gjennomføre endringer. 2) Kan føre til gruppetenkning der avvikende meninger undertrykkes. 3) Nyansatte som ikke passer inn kan føle seg utenfor. 4) Kan bli blind for egne svakheter. Eksempel: Nokia der den sterke kulturen bidro til at de ikke tok smarttelefonrevolusjonen på alvor.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Formell og uformell organisasjon
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_4: TextbookChapter = {
  id: 'okonomi-ledelse-2-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.4',
  title: 'Formell og uformell organisasjon',
  description: 'Du utforsker samspillet mellom formell stillingsstruktur og uformelle sosiale nettverk i organisasjoner. Du lærer om formelle og uformelle maktstrukturer og hvordan de påvirker beslutninger.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for ulike organisasjonsstrukturer'],
  keyTerms: [],
  content: [
    {
      id: 'ol-2-4-intro',
      type: 'text',
      content: `## Formell og uformell organisasjon

I kapittel 2.1 introduserte vi forskjellen mellom formelle og uformelle organisasjoner. Nå skal vi gå dypere inn i hvordan det formelle og uformelle samspiller innenfor samme organisasjon. Alle arbeidsplasser har både en offisiell struktur og et uformelt sosialt nettverk, og begge påvirker hvordan organisasjonen faktisk fungerer.

I dette kapittelet skal du lære:
- Hva som skiller den formelle fra den uformelle organisasjonen
- Hvordan stillingsstruktur og sosiale nettverk samspiller
- Forskjellen mellom formell og uformell makt
- Hvorfor uformelle ledere kan ha stor innflytelse`,
    },
    {
      id: 'ol-2-4-def-1',
      type: 'definition',
      title: 'Formell organisasjon',
      content: `Den **formelle organisasjonen** er den planlagte og offisielle strukturen med definerte stillinger, avdelinger, ansvarsområder, regler og rutiner. Den vises i organisasjonskart og stillingsbeskrivelser, og er vedtatt av ledelsen.`,
    },
    {
      id: 'ol-2-4-text-1',
      type: 'text',
      content: `### Stillingsstruktur vs. sosiale nettverk

**Den formelle stillingsstrukturen** viser:
- Hvem som har hvilken stilling
- Hvem som rapporterer til hvem
- Hvilke oppgaver som hører til hvilken rolle
- Hvilken myndighet hver stilling har
- Formelle kommunikasjonskanaler

**Det uformelle sosiale nettverket** viser:
- Hvem som faktisk snakker med hvem
- Vennskap og sosiale grupperinger
- Hvem folk går til for råd (uavhengig av stilling)
- Hvem som har innflytelse uten formell myndighet
- Uformelle kommunikasjonskanaler (kaffepraten, lunsjbordet)

Ofte er det stor forskjell mellom disse to. Den formelle strukturen sier at informasjon skal gå gjennom avdelingslederen, men i praksis ringer folk kanskje direkte til den som kan hjelpe – uansett avdeling.`,
    },
    {
      id: 'ol-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Formell vs. uformell i en skolesetting',
      problem: 'Vis forskjellen mellom formell og uformell organisasjon på en videregående skole.',
      solution: `**Formell organisasjon:**
- Rektor er øverste leder
- Avdelingsledere har ansvar for sine fagområder
- Lærere har definerte fag og klasser
- Elevrådet er elevenes formelle organ
- Skolereglementet angir reglene

**Uformell organisasjon:**
- En erfaren lærer som alle spør om råd, selv om han ikke er avdelingsleder
- Lunsjgruppen i personalrommet der viktige diskusjoner skjer
- Elever som har innflytelse i klassen uten å sitte i elevrådet
- Lærere som samarbeider på tvers av avdelinger fordi de er venner
- «Ryktebørsen» der informasjon spres raskere enn gjennom offisielle kanaler

Den uformelle organisasjonen kan gjøre at reelle beslutninger allerede er tatt i lunsjpausen før det formelle møtet starter.`,
    },
    {
      id: 'ol-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva beskriver den formelle organisasjonen?',
        options: [
          { id: 'a', text: 'Vennskap og sosiale relasjoner mellom ansatte', isCorrect: false },
          { id: 'b', text: 'Den planlagte strukturen med definerte stillinger, ansvarsområder og regler', isCorrect: true },
          { id: 'c', text: 'Uformelle ledere og deres innflytelse', isCorrect: false },
          { id: 'd', text: 'Kaffepauser og sosiale arrangementer', isCorrect: false },
        ],
        solution: 'Den formelle organisasjonen er den planlagte, offisielle strukturen som vises i organisasjonskart og stillingsbeskrivelser. Den definerer stillinger, ansvarsområder, rapporteringslinjer og regler.',
      },
    },
    {
      id: 'ol-2-4-def-2',
      type: 'definition',
      title: 'Uformell makt',
      content: `**Uformell makt** er innflytelse som ikke følger av en persons offisielle stilling, men av personlige egenskaper som kunnskap, erfaring, karisma, sosiale nettverk eller tilgang til viktig informasjon. En person med uformell makt kan påvirke beslutninger uten å ha formell myndighet.`,
    },
    {
      id: 'ol-2-4-text-2',
      type: 'text',
      content: `### Formell og uformell makt

**Formell makt** kommer fra:
- Stillingen man har (stillingsfullmakt)
- Retten til å ta beslutninger
- Kontroll over ressurser (budsjett, personell)
- Formelle regler som gir myndighet
- Eksempel: Avdelingslederen som kan godkjenne ferie

**Uformell makt** kommer fra:
- Ekspertkunnskap som andre er avhengige av
- Tilgang til viktig informasjon
- Et stort sosialt nettverk
- Personlig karisma og overtalelsesevne
- Lang erfaring og historisk kunnskap
- Eksempel: IT-medarbeideren som alle er avhengige av

**Hvorfor er dette viktig å forstå?**

For å lykkes som leder må man forstå både den formelle og uformelle maktstrukturen. En endring som har støtte fra uformelle ledere har mye større sjanse for å lykkes. Omvendt kan uformelle ledere som er mot en endring effektivt sabotere den, selv om de ikke har formell makt til å stoppe den.`,
    },
    {
      id: 'ol-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Uformell makt på arbeidsplassen',
      problem: 'Forklar hvordan en person uten lederstilling kan ha stor uformell makt.',
      solution: `**Situasjon:** Berit har jobbet i bedriften i 25 år. Hun er ikke leder, men har en vanlig kontorstilling.

**Kilder til uformell makt:**
1. **Erfaring:** Hun husker hvorfor ting ble gjort på bestemte måter, og hva som har fungert og ikke fungert tidligere
2. **Nettverk:** Hun kjenner alle i organisasjonen og har kontakter hos viktige leverandører
3. **Informasjon:** Hun vet hva som skjer i ulike avdelinger fordi folk forteller henne ting
4. **Tillit:** Nye ledere spør Berit om råd fordi de stoler på hennes vurderinger

**Konsekvens:**
Når ledelsen foreslår endringer, lytter de ansatte mer til hva Berit mener enn til den offisielle begrunnelsen. Hvis Berit er positiv til endringen, følger mange etter. Hvis hun er skeptisk, oppstår det motstand.`,
    },
    {
      id: 'ol-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er en kilde til uformell makt?',
        options: [
          { id: 'a', text: 'Stillingsbeskrivelse som gir beslutningsmyndighet', isCorrect: false },
          { id: 'b', text: 'Kontroll over avdelingens budsjett', isCorrect: false },
          { id: 'c', text: 'Ekspertkunnskap som andre er avhengige av', isCorrect: true },
          { id: 'd', text: 'Formell rett til å godkjenne ferie', isCorrect: false },
        ],
        solution: 'Ekspertkunnskap er en viktig kilde til uformell makt. Når andre er avhengige av din kunnskap for å gjøre jobben sin, gir det deg innflytelse uten at du trenger en lederstilling. De andre alternativene er eksempler på formell makt.',
      },
    },
    {
      id: 'ol-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        task: 'Tenk deg at du blir ansatt som ny leder i en avdeling. Hvorfor er det viktig å kartlegge hvem som har uformell makt, og hvordan vil du gå frem for å finne ut dette?',
        hints: ['Observer hvem folk går til for råd, og hvem som har innflytelse i sosiale settinger.'],
        solution: 'Det er viktig å kartlegge uformell makt fordi: 1) Uformelle ledere kan hjelpe deg med å gjennomføre endringer. 2) Motstand fra uformelle ledere kan sabotere planene dine. 3) Du trenger å forstå den reelle maktstrukturen for å lede effektivt. Fremgangsmåte: Observere hvem folk oppsøker for råd, lytte i uformelle settinger som lunsj og kaffepauser, legge merke til hvem som uttaler seg i møter og hvem som følges, spørre folk direkte hvem de ville gått til med et problem, og se hvem som har lange ansettelsesforhold og bred kontaktflate.',
      },
    },
    {
      id: 'ol-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Den **formelle organisasjonen** er den planlagte strukturen med stillinger, regler og organisasjonskart
- Den **uformelle organisasjonen** er de sosiale nettverkene, vennskapene og uoffisielle kanalene
- **Formell makt** kommer fra stillingen, **uformell makt** fra kunnskap, nettverk og personlige egenskaper
- Uformelle ledere kan ha like mye innflytelse som formelle ledere
- For å lede effektivt må man forstå begge maktstrukturene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Formell organisasjon | Planlagt struktur med definerte stillinger og regler |
| Uformell organisasjon | Sosiale nettverk og relasjoner utenfor det offisielle |
| Formell makt | Myndighet som følger av stillingen |
| Uformell makt | Innflytelse basert på kunnskap, nettverk og personlighet |
| Uformell leder | Person med stor innflytelse uten formell lederstilling |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Forklar hvorfor det kan oppstå konflikter mellom den formelle og uformelle organisasjonen. Gi to konkrete eksempler på slike konflikter og foreslå hvordan de kan løses.',
        solution: 'Konflikter oppstår fordi den formelle og uformelle strukturen kan trekke i ulike retninger. Eksempel 1: En ny leder innfører nye rutiner, men den uformelle lederen i avdelingen mener de gamle rutinene var bedre og påvirker kollegene til å motarbeide endringen. Løsning: Involvere den uformelle lederen tidlig i prosessen og gi vedkommende en rolle i implementeringen. Eksempel 2: Organisasjonskartet sier at informasjon skal gå via avdelingsleder, men de ansatte kommuniserer direkte med hverandre via uformelle kanaler. Viktig informasjon når aldri avdelingsleder. Løsning: Akseptere de uformelle kanalene, men etablere faste oppdateringspunkter der viktig informasjon deles formelt.',
      },
    },
    {
      id: 'ol-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-5',
        number: '2.4.5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til at en leder bør forstå den uformelle organisasjonen?',
        options: [
          { id: 'a', text: 'For å kunne straffe uformelle ledere', isCorrect: false },
          { id: 'b', text: 'For å forstå den reelle maktstrukturen og lede effektivt', isCorrect: true },
          { id: 'c', text: 'For å erstatte den formelle strukturen med en uformell', isCorrect: false },
          { id: 'd', text: 'For å hindre at ansatte snakker sammen uformelt', isCorrect: false },
        ],
        solution: 'En leder som forstår den uformelle organisasjonen kan lede mer effektivt fordi vedkommende forstår den reelle maktstrukturen, vet hvem som har innflytelse, og kan bruke denne kunnskapen til å gjennomføre endringer og bygge støtte for beslutninger.',
      },
    },
    {
      id: 'ol-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        task: 'En bedrift har nettopp ansatt en ung, nyutdannet avdelingsleder. I avdelingen jobber det en erfaren medarbeider som har vært i bedriften i 20 år og som mange hadde forventet skulle få lederjobben. Analyser situasjonen med utgangspunkt i formell og uformell makt, og gi den nye lederen tre konkrete råd.',
        hints: ['Tenk på forholdet mellom formell posisjon og uformell innflytelse.'],
        solution: 'Analyse: Den nye lederen har formell makt (stillingsfullmakt), men den erfarne medarbeideren har sterk uformell makt (erfaring, nettverk, tillit fra kollegene, historisk kunnskap). Hvis den erfarne er misfornøyd, kan vedkommende passivt motarbeide lederen gjennom sin uformelle innflytelse. Tre råd: 1) Vis ydmykhet og respekt for den erfarnes kompetanse – spør aktivt om råd og involver vedkommende i viktige beslutninger. 2) Gi den erfarne en synlig rolle, for eksempel som mentor eller faglig rådgiver, slik at vedkommendes kompetanse anerkjennes. 3) Bygg din egen legitimitet gradvis gjennom resultater, ikke ved å markere formell makt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Endring og omstilling
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_2_5: TextbookChapter = {
  id: 'okonomi-ledelse-2-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '2.5',
  title: 'Endring og omstilling',
  description: 'Du lærer om hvorfor organisasjoner må endre seg, Kotters 8-trinns modell for endringsledelse, årsaker til endringsmotstand og hvordan organisatorisk læring bidrar til kontinuerlig utvikling.',
  estimatedMinutes: 24,
  competenceGoals: ['drøfte hvordan organisasjoner håndterer endring'],
  keyTerms: [],
  content: [
    {
      id: 'ol-2-5-intro',
      type: 'text',
      content: `## Endring og omstilling

Verden forandrer seg stadig raskere. Ny teknologi, endrede kundebehov, nye konkurrenter, politiske beslutninger og globale hendelser gjør at organisasjoner må tilpasse seg for å overleve. Men endring er vanskelig – mennesker er vanedyr, og mange motsetter seg forandring.

I dette kapittelet skal du lære:
- Hvorfor organisasjoner må endre seg
- Kotters 8-trinns modell for vellykket endring
- Hva endringsmotstand er og hvordan den kan håndteres
- Hva organisatorisk læring innebærer`,
    },
    {
      id: 'ol-2-5-text-1',
      type: 'text',
      content: `### Hvorfor må organisasjoner endre seg?

**Eksterne drivkrefter:**
- Teknologisk utvikling (digitalisering, kunstig intelligens)
- Endrede kundebehov og forbrukeratferd
- Ny konkurranse (ofte fra uventede retninger)
- Lover og reguleringer (f.eks. miljøkrav)
- Økonomiske svingninger og kriser

**Interne drivkrefter:**
- Ny ledelse med nye ideer
- Behov for effektivisering
- Misnøye blant ansatte
- Vekst som krever ny organisering
- Sammenslåinger eller oppkjøp

Organisasjoner som ikke klarer å tilpasse seg, risikerer å bli utkonkurrert. Historien er full av eksempler: Kodak som ikke tok digitalfotografering på alvor, Nokia som undervurderte smarttelefonene, og bokhandlere som ikke tilpasset seg netthandel.`,
    },
    {
      id: 'ol-2-5-def-1',
      type: 'definition',
      title: 'Kotters 8-trinns modell',
      content: `**Kotters 8-trinns modell** er en av de mest brukte modellene for endringsledelse. Den ble utviklet av John Kotter og beskriver åtte steg som øker sjansen for å lykkes med organisatorisk endring, fra å skape en følelse av nødvendighet til å forankre endringen i kulturen.`,
    },
    {
      id: 'ol-2-5-text-2',
      type: 'text',
      content: `### Kotters 8-trinns modell

**Trinn 1: Skap en følelse av nødvendighet**
Vis hvorfor endring er nødvendig. Folk må forstå at status quo ikke er holdbart.

**Trinn 2: Sett sammen en styringsgruppe**
Samle en gruppe med tilstrekkelig makt, kompetanse og troverdighet til å lede endringen.

**Trinn 3: Utvikle en visjon og strategi**
Formuler en klar visjon for fremtiden og en strategi for å komme dit.

**Trinn 4: Kommuniser visjonen**
Kommuniser visjonen bredt og gjentatte ganger. Bruk alle tilgjengelige kanaler.

**Trinn 5: Fjern hindringer**
Identifiser og fjern barrierer som hindrer endring (systemer, strukturer, motstandere).

**Trinn 6: Skap kortsiktige gevinster**
Planlegg og feire tidlige suksesser for å bygge momentum og motivasjon.

**Trinn 7: Konsolider og driv videre**
Bruk den økte troverdigheten til å endre flere systemer, strukturer og rutiner.

**Trinn 8: Forankre endringen i kulturen**
Sørg for at de nye måtene å jobbe på blir en del av organisasjonskulturen.`,
    },
    {
      id: 'ol-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Kotters modell i praksis',
      problem: 'En butikkjede vil gå fra fysiske butikker til å satse mer på netthandel. Vis hvordan de kan bruke Kotters modell.',
      solution: `**Trinn 1 – Nødvendighet:** Vis salgstall som viser at netthandelen vokser mens butikksalget synker. Presenter konkurrentenes digitale satsinger.

**Trinn 2 – Styringsgruppe:** Sett sammen et team med sjefen for IT, en erfaren butikksjef, markedssjefen og en ekstern digital rådgiver.

**Trinn 3 – Visjon:** «Vi skal være kundens foretrukne valg – uansett om de handler i butikk eller på nett. Innen to år skal 40 % av omsetningen komme fra netthandel.»

**Trinn 4 – Kommunikasjon:** Informer alle ansatte gjennom allmøter, nyhetsbrev og avdelingsmøter. Gjenta visjonen ofte.

**Trinn 5 – Fjern hindringer:** Invester i ny nettbutikkplattform. Gi opplæring til ansatte. Fjern interne systemer som gjør det vanskelig.

**Trinn 6 – Kortsiktige gevinster:** Lanser nettbutikken med et begrenset utvalg. Feire de første nettordrene.

**Trinn 7 – Konsolider:** Utvid nettbutikken, integrer lager og logistikk, tilby «kjøp på nett, hent i butikk».

**Trinn 8 – Forankre:** Digital kompetanse blir en del av alle jobbeskrivelser og opplæringsprogrammer.`,
    },
    {
      id: 'ol-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva er det første trinnet i Kotters 8-trinns modell?',
        options: [
          { id: 'a', text: 'Utvikle en visjon og strategi', isCorrect: false },
          { id: 'b', text: 'Sette sammen en styringsgruppe', isCorrect: false },
          { id: 'c', text: 'Skape en følelse av nødvendighet', isCorrect: true },
          { id: 'd', text: 'Kommunisere visjonen', isCorrect: false },
        ],
        solution: 'Det første trinnet er å skape en følelse av nødvendighet. Folk må forstå hvorfor endring er nødvendig, ellers vil de ikke være motivert til å endre seg. Uten denne forståelsen er det vanskelig å få oppslutning om endringsprosessen.',
      },
    },
    {
      id: 'ol-2-5-def-2',
      type: 'definition',
      title: 'Endringsmotstand',
      content: `**Endringsmotstand** er de kreftene som motarbeider endring i en organisasjon. Motstanden kan være aktiv (åpne protester, konflikter) eller passiv (trenering, likegyldighet, «gjøre som vi alltid har gjort»). Endringsmotstand er en naturlig menneskelig reaksjon og skyldes ofte frykt for det ukjente.`,
    },
    {
      id: 'ol-2-5-text-3',
      type: 'text',
      content: `### Endringsmotstand

**Vanlige årsaker til endringsmotstand:**

| Årsak | Eksempel |
|-------|----------|
| Frykt for det ukjente | «Hva skjer med jobben min?» |
| Tap av kontroll | «Jeg mister mine oppgaver» |
| Dårlige erfaringer | «Forrige endring var kaos» |
| Mangel på tillit | «Ledelsen vet ikke hva de gjør» |
| Manglende informasjon | «Ingen har fortalt meg hvorfor» |
| Tap av kompetanse | «Jeg kan ikke de nye systemene» |
| Sosiale tap | «Kollegene mine flyttes til annen avdeling» |

**Strategier for å håndtere endringsmotstand:**
1. **Kommunisere:** Forklar hvorfor, hvordan og hva det betyr for den enkelte
2. **Involvere:** La de berørte delta i utformingen av endringen
3. **Støtte:** Tilby opplæring, tid og ressurser til tilpasning
4. **Anerkjenne:** Vis forståelse for at endring er vanskelig
5. **Forhandle:** Tilby kompensasjon eller fordeler
6. **Vise resultater:** Fremhev tidlige suksesser som viser at endringen fungerer`,
    },
    {
      id: 'ol-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Håndtering av endringsmotstand',
      problem: 'En fabrikk innfører ny produksjonsteknologi som krever at de ansatte lærer seg nye systemer. Mange er motvillige. Hvordan kan ledelsen håndtere motstanden?',
      solution: `**Identifiser årsaken:** De ansatte er redde for å ikke mestre den nye teknologien og bekymret for om jobber vil forsvinne.

**Tiltak basert på strategiene:**

1. **Kommunisere:** Hold et allmøte der ledelsen forklarer at automatiseringen gjør bedriften konkurransedyktig, og at ingen vil miste jobben – men oppgavene vil endre seg.

2. **Involvere:** La erfarne operatører delta i testingen av det nye systemet og komme med forbedringsforslag.

3. **Støtte:** Tilby grundig opplæring i arbeidstiden. Gi ekstra tid til å lære. La folk prøve og feile uten konsekvenser.

4. **Anerkjenne:** «Vi forstår at dette er en stor overgang. Det er naturlig å være usikker.»

5. **Vise resultater:** Etter to måneder, vis hvordan de første teamene som tok i bruk systemet har fått lettere arbeidsdager og bedre resultater.`,
    },
    {
      id: 'ol-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        task: 'Hva er den vanligste årsaken til endringsmotstand?',
        options: [
          { id: 'a', text: 'Ønske om høyere lønn', isCorrect: false },
          { id: 'b', text: 'Frykt for det ukjente og usikkerhet om konsekvensene', isCorrect: true },
          { id: 'c', text: 'Misnøye med kantinemat', isCorrect: false },
          { id: 'd', text: 'For mange møter i organisasjonen', isCorrect: false },
        ],
        solution: 'Frykt for det ukjente er en av de vanligste årsakene til endringsmotstand. Når folk ikke vet hva endringen vil bety for dem – om de beholder jobben, mestrer nye oppgaver, mister kollegaer – er det naturlig å motsette seg endringen.',
      },
    },
    {
      id: 'ol-2-5-text-4',
      type: 'text',
      content: `### Organisatorisk læring

**Organisatorisk læring** handler om at organisasjoner kontinuerlig utvikler seg ved å lære av erfaringer, feil og suksesser. En lærende organisasjon er bedre rustet til å håndtere endring fordi den allerede har en kultur for utvikling.

**Peter Senges fem disipliner for den lærende organisasjon:**

1. **Systemtenkning:** Se helheten, ikke bare enkeltdeler
2. **Personlig mestring:** Individuell læring og utvikling
3. **Mentale modeller:** Utfordre etablerte forestillinger
4. **Felles visjon:** Alle jobber mot samme mål
5. **Gruppelæring:** Lære sammen gjennom dialog og samarbeid

**Enkel- og dobbelkretslæring:**
- **Enkelkretslæring:** Vi retter feil uten å endre de grunnleggende antakelsene. Eksempel: Salget synker, vi øker markedsføringen.
- **Dobbelkretslæring:** Vi stiller spørsmål ved selve antakelsene. Eksempel: Salget synker – kanskje produktet vårt ikke lenger er det kundene vil ha?`,
    },
    {
      id: 'ol-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom enkelkretslæring og dobbelkretslæring med et eget eksempel fra en bedrift.',
        hints: ['Enkelkretslæring retter symptomet, dobbelkretslæring stiller spørsmål ved årsaken.'],
        solution: 'Eksempel: En restaurant opplever klager på lang ventetid. Enkelkretslæring: Ansetter flere servitører for å betjene kundene raskere. Dobbelkretslæring: Stiller spørsmålet «Hvorfor er det lang ventetid?» og oppdager at menyen er for komplisert, kjøkkenet er dårlig organisert, og bestillingssystemet er utdatert. Restauranten endrer menyen, reorganiserer kjøkkenet og investerer i nytt kassesystem. Enkelkretslæring fikser symptomet, dobbelkretslæring tar tak i de grunnleggende årsakene.',
      },
    },
    {
      id: 'ol-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Organisasjoner må endre seg på grunn av **eksterne** og **interne** drivkrefter
- **Kotters 8-trinns modell** gir en systematisk tilnærming til endringsledelse
- **Endringsmotstand** er naturlig og skyldes ofte frykt for det ukjente
- Motstand kan håndteres gjennom kommunikasjon, involvering, støtte og anerkjennelse
- **Organisatorisk læring** gjør organisasjoner bedre rustet for endring
- **Dobbelkretslæring** er dypere enn enkelkretslæring fordi den utfordrer grunnleggende antakelser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kotters 8-trinns modell | Systematisk modell for å lede organisatorisk endring |
| Endringsmotstand | Krefter som motarbeider endring i organisasjonen |
| Organisatorisk læring | At organisasjoner kontinuerlig lærer og utvikler seg |
| Enkelkretslæring | Retting av feil uten å endre grunnleggende antakelser |
| Dobbelkretslæring | Utfordring av selve antakelsene bak handlingene |
| Lærende organisasjon | Organisasjon med kultur for kontinuerlig utvikling |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Velg en av de åtte trinnene i Kotters modell og forklar hvorfor du mener dette trinnet er spesielt viktig for å lykkes med endring. Bruk et konkret eksempel.',
        solution: 'Eksempel med trinn 1 (skape nødvendighet): Dette er kanskje det viktigste trinnet fordi hele endringsprosessen avhenger av at folk forstår hvorfor endring trengs. Uten opplevd nødvendighet vil folk ikke anstrenge seg for å endre vaner. Eksempel: Når en bokhandel skal satse på netthandel, må de ansatte forstå at det fysiske bokmarkedet krymper og at konkurrenter som Amazon tar markedsandeler. Uten denne forståelsen vil de ansatte ikke investere energi i å lære nye digitale systemer.',
      },
    },
    {
      id: 'ol-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-5',
        number: '2.5.5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner dobbelkretslæring?',
        options: [
          { id: 'a', text: 'Man retter feil uten å stille spørsmål ved de grunnleggende antakelsene', isCorrect: false },
          { id: 'b', text: 'Man stiller spørsmål ved selve antakelsene bak handlingene', isCorrect: true },
          { id: 'c', text: 'Man lærer i to omganger med pause imellom', isCorrect: false },
          { id: 'd', text: 'Man har to lærere i stedet for en', isCorrect: false },
        ],
        solution: 'Dobbelkretslæring innebærer at man ikke bare retter symptomet, men stiller spørsmål ved de grunnleggende antakelsene som ligger bak handlingene. Man utfordrer «slik vi alltid har gjort det» og undersøker om selve tilnærmingen er riktig.',
      },
    },
    {
      id: 'ol-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        task: 'En bedrift med 200 ansatte skal innføre et nytt datasystem som erstatter det gamle systemet alle er vant til. Du er prosjektleder for innføringen. Lag en plan der du bruker elementer fra Kotters modell og strategier for å håndtere endringsmotstand.',
        hints: ['Tenk på kommunikasjon, involvering og opplæring som nøkkelelementer.'],
        solution: 'Plan: 1) Nødvendighet (Kotter trinn 1): Vis at det gamle systemet koster bedriften mye i nedetid og tapt effektivitet. 2) Styringsgruppe (trinn 2): Inkluder IT-sjef, en representant fra hver avdeling og en tillitsvalgt. 3) Visjon (trinn 3): «Det nye systemet skal spare hver ansatt 30 minutter daglig og gi bedre oversikt.» 4) Kommunikasjon (trinn 4): Informer tidlig og ofte gjennom nyhetsbrev, avdelingsmøter og FAQ. 5) Fjern hindringer (trinn 5): Gi god opplæring, superbrukere i hver avdeling, hjelpelinje. 6) Kortsiktige gevinster (trinn 6): Start med avdelingen som er mest positiv – vis deres suksess til resten. Håndter motstand: La ansatte teste systemet før innføring (involvering), tilby individuell opplæring for de som trenger det (støtte), anerkjenn at overgangen er krevende.',
      },
    },
    {
      id: 'ol-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-2-5-ex-7',
        number: '2.5.7',
        type: 'classic',
        task: 'Drøft om endringsmotstand alltid er negativt. Kan motstand mot endring noen ganger være nyttig for organisasjonen?',
        solution: 'Endringsmotstand er ikke alltid negativt. Positiv motstand kan: 1) Fungere som kvalitetskontroll – motstanden avdekker svakheter i endringsplanen som ledelsen ikke har tenkt på. 2) Sikre at endringer er godt gjennomtenkt – når ledelsen må argumentere for endringen, tvinges de til å lage bedre planer. 3) Beskytte mot unødvendige endringer – ikke all endring er forbedring, og motstand kan forhindre dårlige beslutninger. 4) Sikre at verdifulle tradisjoner og kompetanse ikke kastes bort. Eksempel: Ansatte som protesterer mot en rask digitalisering fordi de vet at kundene fortsatt ønsker personlig service, kan beskytte bedriften mot å miste lojale kunder. Konklusjon: Motstand bør lyttes til og analyseres, ikke bare overvinnes.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL2_CHAPTERS = [
  CHAPTER_OKONOMI_LEDELSE_2_1,
  CHAPTER_OKONOMI_LEDELSE_2_2,
  CHAPTER_OKONOMI_LEDELSE_2_3,
  CHAPTER_OKONOMI_LEDELSE_2_4,
  CHAPTER_OKONOMI_LEDELSE_2_5,
];

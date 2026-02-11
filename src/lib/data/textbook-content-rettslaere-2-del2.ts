/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Rettslære 2 (VG3) - Del 2: Rettskilder og juridisk metode
 *
 * Seksjon 2: Kapittel 2.1–2.5
 * Dekker LK20-kompetansemål:
 * - utforske og bruke ulike rettskilder for å løse juridiske problemstillinger
 * - identifisere parter, krav, rettslig grunnlag og juridisk problemstilling og gjennomføre
 *   juridisk drøfting for å komme fram til en konklusjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Rettskilder og rettskildeprinsipper
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2_1: TextbookChapter = {
  id: 'rettslaere-2-2-1',
  courseId: 'rettslaere-2',
  chapterNumber: '2.1',
  title: 'Rettskilder og rettskildeprinsipper',
  description: 'Rettskildehierarkiet, lex superior, lex specialis og lex posterior.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og bruke ulike rettskilder for å løse juridiske problemstillinger',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-2-1-intro',
      type: 'text',
      content: `## Rettskilder og rettskildeprinsipper

I dette kapittelet skal du lære om:

- Hva **rettskilder** er og hvilke typer rettskilder vi har i norsk rett
- **Rettskildehierarkiet** – rangordningen mellom rettskildene
- De tre sentrale **rettskildeprinsippene**: lex superior, lex specialis og lex posterior
- Hvordan rettskildeprinsippene brukes til å løse motstrid mellom rettsregler

Når en jurist skal ta stilling til et rettsspørsmål, er det ikke tilstrekkelig å kjenne innholdet i én enkelt lov. Juristen må vite hvilke kilder som er relevante, hvordan de skal tolkes, og hva som gjelder dersom kildene peker i ulike retninger. Rettskildelæren – læren om rettskilder og juridisk metode – er derfor selve grunnlaget for all juridisk virksomhet.`,
    },

    // BLOCK 1: Hva er rettskilder?
    {
      id: 'rtl2-2-1-def-1',
      type: 'definition',
      title: 'Rettskilder',
      content: `**Rettskilder** er de kildene en jurist bruker for å fastlegge innholdet i gjeldende rett. I norsk rett anerkjennes følgende rettskilder:

1. **Lov** – formelle lover vedtatt av Stortinget (den viktigste rettskilden)
2. **Grunnloven** – Norges øverste rettsregel, med høyest rang
3. **Forskrifter** – regler gitt med hjemmel i lov, fastsatt av regjeringen eller underordnede organer
4. **Forarbeider** – dokumenter som er utarbeidet i forbindelse med lovvedtak (proposisjoner, NOU-er, innstillinger)
5. **Rettspraksis** – avgjørelser fra domstolene, særlig Høyesterett
6. **Sedvanerett** – langvarig, fast og utbredt praksis som oppfattes som rettslig bindende
7. **Internasjonale forpliktelser** – traktater og konvensjoner Norge er bundet av
8. **Juridisk teori** – rettsvitenskap og faglitteratur
9. **Reelle hensyn** – vurderinger av hva som er rimelig, rettferdig og hensiktsmessig

Ikke alle rettskilder har lik vekt. Rettskildehierarkiet bestemmer hvilken kilde som går foran dersom det oppstår motstrid.`,
    },
    {
      id: 'rtl2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Ulike rettskilder i en konkret sak',
      problem: 'Sara har kjøpt en brukt sykkel fra en privatperson gjennom en nettannonse. Sykkelen viser seg å ha en alvorlig defekt i bremseystemet som ikke var opplyst om. Sara ønsker å heve kjøpet. Hvilke rettskilder er relevante?',
      solution: `**Analyse av relevante rettskilder:**

1. **Lov:** Kjøpsloven (lov 13. mai 1988 nr. 27) regulerer kjøp mellom privatpersoner. Særlig §§ 17–18 om mangler og § 39 om heving er relevante.

2. **Forarbeider:** Ot.prp.nr. 80 (1986–1987) forklarer lovgivers intensjon med mangelsreglene og kan bidra til tolkningen av bestemmelsene.

3. **Rettspraksis:** Høyesterettsdommer om tilsvarende saker gir veiledning om hva som regnes som en «vesentlig mangel» som gir hevingsrett.

4. **Reelle hensyn:** En sikkerhetsmangel i bremser er alvorlig og kan tilsi at terskelen for heving bør være lav.

**Konklusjon:** Juristen bruker flere rettskilder i sammenheng for å komme frem til gjeldende rett. Lovteksten er utgangspunktet, men de øvrige kildene bidrar til å klarlegge lovens innhold.`,
    },
    {
      id: 'rtl2-2-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE en anerkjent rettskilde i norsk rett?',
        options: [
          { id: 'a', text: 'Forarbeider til lover', isCorrect: false },
          { id: 'b', text: 'Avisartikler og politiske kommentarer', isCorrect: true },
          { id: 'c', text: 'Rettspraksis fra Høyesterett', isCorrect: false },
          { id: 'd', text: 'Reelle hensyn', isCorrect: false },
        ],
        solution: 'Avisartikler og politiske kommentarer er ikke anerkjente rettskilder. De kan gi bakgrunnsinformasjon, men har ingen rettskildemessig vekt. Forarbeider, rettspraksis og reelle hensyn er derimot alle anerkjente rettskilder i norsk juridisk metode.',
      },
    },

    // BLOCK 2: Rettskildehierarkiet
    {
      id: 'rtl2-2-1-def-2',
      type: 'definition',
      title: 'Rettskildehierarkiet',
      content: `**Rettskildehierarkiet** (også kalt **trinnhøydeprinsippet**) er rangordningen mellom rettskildene i norsk rett. Regler av høyere rang går foran regler av lavere rang ved motstrid:

**Nivå 1 – Grunnloven og grunnlovsfestede prinsipper**
Grunnloven har høyest rang. Vanlige lover som strider mot Grunnloven, er ugyldige.

**Nivå 2 – Formelle lover (inkludert menneskerettsloven)**
Lover vedtatt av Stortinget. Menneskerettsloven gir EMK og andre konvensjoner forrang foran vanlig lovgivning.

**Nivå 3 – Forskrifter**
Forskrifter gitt med hjemmel i lov. Forskrifter kan ikke stride mot overordnet lov.

**Nivå 4 – Ulovfestet rett (sedvanerett, rettspraksis)**
Har lavere rang enn formell lovgivning, men kan utfylle loven der den er taus.

Hierarkiet er avgjørende for å løse motstrid: En forskrift som strider mot loven den er hjemlet i, er ugyldig. En vanlig lov som strider mot Grunnloven, kan settes til side av domstolene.`,
    },
    {
      id: 'rtl2-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Rettskildehierarkiet i praksis',
      problem: 'Stortinget vedtar en lov som gir politiet rett til å overvåke borgernes private kommunikasjon uten rettslig kjennelse. En borger klager saken inn for domstolene og hevder at loven strider mot Grunnloven § 102 om rett til privatliv. Hvordan løses konflikten?',
      solution: `**Analyse med utgangspunkt i rettskildehierarkiet:**

Grunnloven har høyere rang enn vanlige lover (lex superior-prinsippet). Grunnloven § 102 slår fast at «enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin kommunikasjon».

Domstolene har prøvingsrett – det vil si kompetanse til å vurdere om lover er i strid med Grunnloven. Denne retten er nå kodifisert i Grunnloven § 89.

Dersom domstolen finner at overvåkningsloven griper uforholdsmessig inn i retten til privatliv uten tilstrekkelig begrunnelse, kan loven **settes til side** som grunnlovsstridig.

**Konklusjon:** Rettskildehierarkiet innebærer at Grunnloven trumfer vanlige lover. Domstolene er siste instans for å sikre at lovgivningen holder seg innenfor Grunnlovens rammer.`,
    },
    {
      id: 'rtl2-2-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva innebærer rettskildehierarkiet (trinnhøydeprinsippet)?',
        options: [
          { id: 'a', text: 'At alle rettskilder har lik vekt i en juridisk vurdering', isCorrect: false },
          { id: 'b', text: 'At rettskilder av høyere rang går foran rettskilder av lavere rang ved motstrid', isCorrect: true },
          { id: 'c', text: 'At forskrifter alltid har høyere rang enn lover', isCorrect: false },
          { id: 'd', text: 'At domstolene bestemmer hvilken rang en rettskilde skal ha i den enkelte sak', isCorrect: false },
        ],
        solution: 'Rettskildehierarkiet innebærer at rettskilder er rangert etter trinnhøyde: Grunnloven øverst, deretter formelle lover, så forskrifter, og til sist ulovfestet rett. Ved motstrid mellom regler på ulike nivåer, går regelen med høyest rang foran.',
      },
    },

    // BLOCK 3: Lex superior, lex specialis, lex posterior
    {
      id: 'rtl2-2-1-def-3',
      type: 'definition',
      title: 'Rettskildeprinsippene: lex superior, lex specialis og lex posterior',
      content: `Når det oppstår motstrid mellom rettsregler, bruker juristen tre sentrale **rettskildeprinsipp** for å avgjøre hvilken regel som skal gjelde:

### Lex superior – den høyere regelen går foran
Regelen med høyest rang i rettskildehierarkiet har forrang. Grunnloven går foran vanlige lover, og lover går foran forskrifter.

### Lex specialis – den spesielle regelen går foran den generelle
Dersom en generell lovbestemmelse og en spesiell lovbestemmelse regulerer samme forhold, går den spesielle bestemmelsen foran. *Eksempel:* Forbrukerkjøpsloven er en spesiallov som går foran den generelle kjøpsloven ved forbrukerkjøp.

### Lex posterior – den nyere regelen går foran den eldre
Dersom to likestilte regler regulerer det samme forholdet, går den nyeste regelen foran. *Eksempel:* Straffeloven av 2005 erstattet straffeloven av 1902.

**Prioritering mellom prinsippene:** Lex superior er det sterkeste prinsippet. Lex specialis og lex posterior anvendes først og fremst mellom regler av **samme rang**.`,
    },
    {
      id: 'rtl2-2-1-example-3',
      type: 'example',
      title: 'Eksempel: Bruk av rettskildeprinsippene',
      problem: 'En næringsdrivende selger en vare til en forbruker. Kjøpsloven § 17 og forbrukerkjøpsloven § 15 regulerer begge spørsmålet om mangler. Forbrukerkjøpsloven gir forbrukeren sterkere rettigheter. Hvilken lov gjelder?',
      solution: `**Analyse:**

Begge lovene er formelle lover vedtatt av Stortinget og har dermed **samme rang** i rettskildehierarkiet. Lex superior-prinsippet gir derfor ikke svar.

Forbrukerkjøpsloven er en **spesiallov** som regulerer kjøp mellom næringsdrivende og forbrukere. Kjøpsloven er den **generelle** loven som gjelder kjøp mer generelt. Etter **lex specialis**-prinsippet går spesialloven foran den generelle loven.

I tillegg er forbrukerkjøpsloven (2002) **nyere** enn kjøpsloven (1988), slik at også **lex posterior**-prinsippet trekker i samme retning.

**Konklusjon:** Forbrukerkjøpsloven gjelder. Både lex specialis og lex posterior peker mot at forbrukerkjøpsloven har forrang ved forbrukerkjøp.`,
    },
    {
      id: 'rtl2-2-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva innebærer lex specialis-prinsippet?',
        options: [
          { id: 'a', text: 'At den eldste loven alltid har forrang', isCorrect: false },
          { id: 'b', text: 'At regelen med høyest rang i rettskildehierarkiet går foran', isCorrect: false },
          { id: 'c', text: 'At en spesiell bestemmelse går foran en generell bestemmelse som regulerer samme forhold', isCorrect: true },
          { id: 'd', text: 'At forskrifter alltid går foran lover på spesielle rettsområder', isCorrect: false },
        ],
        solution: 'Lex specialis-prinsippet innebærer at en spesiell regel har forrang fremfor en generell regel som regulerer det samme forholdet. Prinsippet bygger på tanken om at lovgiver har ment å gi en særskilt regulering for bestemte tilfeller, og at denne bør gå foran den generelle reguleringen.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-2-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Rettskilder** er de kildene juristen bruker for å fastlegge gjeldende rett: lov, Grunnloven, forskrifter, forarbeider, rettspraksis, sedvanerett, internasjonale forpliktelser, juridisk teori og reelle hensyn.
- **Rettskildehierarkiet** rangerer rettskildene etter trinnhøyde: Grunnloven øverst, deretter formelle lover, forskrifter og til sist ulovfestet rett.
- **Lex superior** – regelen med høyest rang går foran ved motstrid.
- **Lex specialis** – en spesiell regel går foran en generell regel som regulerer det samme forholdet.
- **Lex posterior** – den nyeste regelen går foran den eldste, forutsatt at de har samme rang.
- Lex superior er det sterkeste prinsippet. Lex specialis og lex posterior brukes mellom regler av samme rang.`,
    },

    // Samleoppgaver
    {
      id: 'rtl2-2-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'En kommune vedtar en lokal forskrift som forbyr demonstrasjoner på torget uten forhåndsgodkjenning. En gruppe hevder at forskriften strider mot Grunnloven § 101 om forsamlingsfrihet. Forklar hvilke rettskilder og rettskildeprinsipp som er relevante, og drøft om forskriften kan opprettholdes.',
        hints: [
          'Identifiser hvilke rettskilder som er relevante: Grunnloven, forskriften, eventuell lovhjemmel.',
          'Vurder trinnhøyden mellom de ulike reglene (lex superior).',
          'Drøft om forskriften har tilstrekkelig lovhjemmel og om den er forholdsmessig.',
        ],
        solution: 'De relevante rettskildene er Grunnloven § 101 (forsamlingsfrihet), den kommunale forskriften og eventuelle lovbestemmelser som gir hjemmel for forskriften (for eksempel politiloven). Lex superior-prinsippet innebærer at Grunnloven har høyere rang enn forskrifter. Forsamlingsfriheten er en grunnlovsbeskyttet rettighet som bare kan begrenses dersom det har hjemmel i lov, er nødvendig i et demokratisk samfunn og er forholdsmessig. En forskrift som krever forhåndsgodkjenning, kan utgjøre en uforholdsmessig begrensning. Domstolene kan sette forskriften til side dersom den strider mot Grunnloven.',
      },
    },
    {
      id: 'rtl2-2-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom lex superior, lex specialis og lex posterior. Gi et konkret eksempel på en situasjon der hvert prinsipp kan komme til anvendelse.',
        hints: [
          'Definer hvert prinsipp kort og presist.',
          'For lex superior: tenk på forholdet mellom Grunnloven og vanlige lover.',
          'For lex specialis: tenk på forholdet mellom en generell lov og en spesiallov.',
          'For lex posterior: tenk på tilfellet der en nyere lov regulerer det samme som en eldre lov.',
        ],
        solution: 'Lex superior innebærer at regelen med høyest rang går foran (f.eks. Grunnloven foran vanlige lover). Lex specialis innebærer at en spesiell regel går foran en generell (f.eks. forbrukerkjøpsloven foran kjøpsloven ved forbrukerkjøp). Lex posterior innebærer at den nyeste regelen går foran den eldste (f.eks. straffeloven av 2005 erstattet straffeloven av 1902). Lex superior er det sterkeste prinsippet, mens lex specialis og lex posterior gjelder mellom regler av samme rang.',
      },
    },
    {
      id: 'rtl2-2-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Huseierloven (en tenkt lov fra 2010) gir utleiere rett til å si opp leietakere med én måneds varsel. Husleieloven (1999) krever tre måneders varsel. Begge er formelle lover. Hvilken bestemmelse gjelder, og hvilket rettskildeprinsipp er avgjørende?',
        hints: [
          'Vurder om det ene regelsettet er mer spesielt enn det andre.',
          'Vurder tidsforholdet mellom de to lovene.',
          'Husk at lex specialis normalt er sterkere enn lex posterior.',
        ],
        solution: 'Begge lovene er formelle lover av samme rang, slik at lex superior ikke gir svar. Husleieloven regulerer spesifikt leieforhold og er en spesiallov på dette området, mens en generell «huseierloven» regulerer eierforhold mer bredt. Etter lex specialis-prinsippet bør husleielovens regel om tre måneders oppsigelsestid gå foran. Selv om den tenkte huseierloven er nyere (lex posterior), vil lex specialis normalt ha forrang mellom to lover av samme rang, med mindre lovgiver uttrykkelig har ment å endre den spesielle regelen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rettskilder', definition: 'De kildene en jurist bruker for å fastlegge innholdet i gjeldende rett.' },
    { term: 'Rettskildehierarkiet', definition: 'Rangordningen mellom rettskildene, med Grunnloven øverst og ulovfestet rett nederst.' },
    { term: 'Lex superior', definition: 'Rettskildeprinsipp: Regelen med høyest rang i rettskildehierarkiet går foran.' },
    { term: 'Lex specialis', definition: 'Rettskildeprinsipp: En spesiell regel går foran en generell regel som regulerer samme forhold.' },
    { term: 'Lex posterior', definition: 'Rettskildeprinsipp: Den nyeste regelen går foran den eldste, forutsatt samme rang.' },
  ],
};

// ============================================================================
// KAPITTEL 2.2: Lover, forskrifter og forarbeider
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2_2: TextbookChapter = {
  id: 'rettslaere-2-2-2',
  courseId: 'rettslaere-2',
  chapterNumber: '2.2',
  title: 'Lover, forskrifter og forarbeider',
  description: 'Formelle lover, forskrifters hjemmelsgrunnlag, proposisjoner og NOU-er som rettskilder.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og bruke ulike rettskilder for å løse juridiske problemstillinger',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-2-2-intro',
      type: 'text',
      content: `## Lover, forskrifter og forarbeider

I dette kapittelet skal du lære om:

- Hva en **formell lov** er og hvordan lover vedtas av Stortinget
- Forskjellen mellom **lover** og **forskrifter**, og kravet til lovhjemmel
- Hva **forarbeider** er og hvordan de brukes som rettskilde
- De ulike typene forarbeider: **NOU-er**, **proposisjoner** og **innstillinger**

Lover og forskrifter utgjør kjernen i norsk rett. De fastsetter regler som borgerne må rette seg etter, og som myndighetene må forholde seg til. Forarbeidene gir innsikt i hva lovgiver mente med bestemmelsene, og er et viktig verktøy ved lovtolkning.`,
    },

    // BLOCK 1: Formelle lover
    {
      id: 'rtl2-2-2-def-1',
      type: 'definition',
      title: 'Formell lov',
      content: `En **formell lov** er en rettsregel vedtatt av Stortinget etter prosedyren i Grunnloven §§ 76–79. Formelle lover er den viktigste rettskilden i norsk rett og har høyere rang enn forskrifter.

**Kjennetegn ved formelle lover:**
- Vedtas av **Stortinget** som landets lovgivende forsamling
- Må være i samsvar med **Grunnloven** (lex superior)
- Sanksjoneres av **Kongen i statsråd** etter Grunnloven § 78
- Kunngjøres i **Norsk Lovtidend** og trer i kraft på angitt dato
- Kan bare endres eller oppheves av Stortinget selv

**Lovgivningsprosessen i hovedtrekk:**
1. Initiativ og utredning (ofte ved et offentlig utvalg som avgir en NOU)
2. Regjeringen fremmer lovforslag i form av en **proposisjon** (Prop. L)
3. Stortingets fagkomité avgir **innstilling** (Innst. L)
4. Stortinget debatterer og stemmer over lovforslaget
5. Loven sanksjoneres av Kongen i statsråd`,
    },
    {
      id: 'rtl2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Lovgivningsprosessen i praksis',
      problem: 'Regjeringen ønsker å styrke forbrukernes rettigheter ved digitale kjøp. Beskriv hovedtrinnene i lovgivningsprosessen fra idé til ferdig lov.',
      solution: `**Lovgivningsprosessen trinn for trinn:**

1. **Utredning:** Regjeringen oppnevner et offentlig utvalg som utreder behovet for nye regler. Utvalget avgir en **NOU** (Norges offentlige utredninger) med analyse og lovforslag. NOU-en sendes på **høring** til berørte organisasjoner og instanser.

2. **Proposisjon:** På grunnlag av utredningen og høringsinnspillene utarbeider det ansvarlige departementet en **proposisjon til Stortinget** (Prop. L). Proposisjonen inneholder regjeringens lovforslag med begrunnelse.

3. **Komitébehandling:** Lovforslaget oversendes til Stortingets fagkomité, som avgir en **innstilling** (Innst. L) med komiteens vurdering og eventuelle endringsforslag.

4. **Stortingsbehandling:** Stortinget debatterer og stemmer over lovforslaget. Det kreves alminnelig flertall for å vedta en lov.

5. **Sanksjon og kunngjøring:** Den vedtatte loven sanksjoneres av Kongen i statsråd og kunngjøres i Norsk Lovtidend. Loven trer i kraft på den datoen Stortinget har bestemt.`,
    },
    {
      id: 'rtl2-2-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en formell lov?',
        options: [
          { id: 'a', text: 'En regel fastsatt av et departement med hjemmel i lov', isCorrect: false },
          { id: 'b', text: 'En rettsregel vedtatt av Stortinget etter prosedyren i Grunnloven', isCorrect: true },
          { id: 'c', text: 'En dom avsagt av Høyesterett som danner presedens', isCorrect: false },
          { id: 'd', text: 'Et prinsipp utviklet gjennom langvarig sedvane', isCorrect: false },
        ],
        solution: 'En formell lov er en rettsregel vedtatt av Stortinget etter prosedyren fastsatt i Grunnloven §§ 76–79. Formelle lover skiller seg fra forskrifter (som er gitt av forvaltningen med hjemmel i lov) og fra rettspraksis og sedvanerett.',
      },
    },

    // BLOCK 2: Forskrifter
    {
      id: 'rtl2-2-2-def-2',
      type: 'definition',
      title: 'Forskrifter',
      content: `En **forskrift** er en rettsregel gitt av forvaltningen (regjeringen, et departement eller annet forvaltningsorgan) med hjemmel i lov. Forskrifter har lavere rang enn formelle lover i rettskildehierarkiet.

**Kjennetegn ved forskrifter:**
- Gis av **forvaltningen**, ikke av Stortinget
- Må ha **hjemmel i lov** – uten lovhjemmel er forskriften ugyldig
- Kan **ikke stride mot** loven den er hjemlet i (lex superior)
- Regulerer typisk **detaljerte og tekniske spørsmål** som lovgiver overlater til forvaltningen
- Følger kravene i **forvaltningsloven** kapittel VII om utredning og kunngjøring

**Eksempler på forskrifter:**
- Trafikkreglene (forskrift til vegtrafikkloven)
- Smittevernforskriften (forskrift til smittevernloven)
- Forskrift om opptak til høyere utdanning (forskrift til universitets- og høyskoleloven)

Forskrifter er viktige fordi de gir detaljerte regler på områder der loven kun gir en ramme. Lovgiver delegerer regelgivningskompetanse til forvaltningen for å sikre fleksibilitet og faglig kompetanse.`,
    },
    {
      id: 'rtl2-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Forholdet mellom lov og forskrift',
      problem: 'Vegtrafikkloven § 4 gir Kongen (regjeringen) hjemmel til å gi forskrifter om trafikkregler. En ny forskrift fastsetter fartsgrensen i boligområder til 20 km/t, mens vegtrafikkloven § 6 sier at trafikanten skal «avpasse farten etter forholdene». Er forskriften gyldig?',
      solution: `**Analyse:**

1. **Hjemmelskravet:** Forskriften har hjemmel i vegtrafikkloven § 4, som gir regjeringen myndighet til å fastsette trafikkregler. Hjemmelskravet er oppfylt.

2. **Motstrid med loven:** Vegtrafikkloven § 6 gir en generell aktsomhetsnorm, ikke en bestemt fartsgrense. En forskrift som presiserer fartsgrenser, utfyller loven uten å stride mot den. Det er ingen motstrid.

3. **Forholdsmessighet:** Forskriften regulerer et teknisk spørsmål (fartsgrenser) som lovgiver har overlatt til forvaltningen å detaljregulere. Det ligger innenfor forskriftskompetansen.

**Konklusjon:** Forskriften er gyldig. Den har lovhjemmel, strider ikke mot loven og ligger innenfor det kompetanseområdet lovgiver har delegert til forvaltningen.`,
    },
    {
      id: 'rtl2-2-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste kravet for at en forskrift skal være gyldig?',
        options: [
          { id: 'a', text: 'Forskriften må være vedtatt av Stortinget', isCorrect: false },
          { id: 'b', text: 'Forskriften må ha hjemmel i formell lov', isCorrect: true },
          { id: 'c', text: 'Forskriften må være godkjent av Høyesterett', isCorrect: false },
          { id: 'd', text: 'Forskriften må være eldre enn loven den utfyller', isCorrect: false },
        ],
        solution: 'Det grunnleggende kravet til en forskrift er at den må ha hjemmel i formell lov. Dette følger av legalitetsprinsippet: Forvaltningen kan ikke fastsette bindende regler for borgerne uten at Stortinget har gitt den myndighet til det gjennom lov. En forskrift uten lovhjemmel er ugyldig.',
      },
    },

    // BLOCK 3: Forarbeider
    {
      id: 'rtl2-2-2-def-3',
      type: 'definition',
      title: 'Forarbeider som rettskilde',
      content: `**Forarbeider** er dokumenter som er utarbeidet som ledd i lovgivningsprosessen. De gir uttrykk for lovgivers intensjon og begrunnelse, og er en viktig rettskilde ved **lovtolkning**.

De viktigste typene forarbeider er:

### NOU – Norges offentlige utredninger
Utredninger utarbeidet av offentlige utvalg oppnevnt av regjeringen. Inneholder grundig analyse av rettstilstanden, samfunnsbehov og forslag til nye regler. NOU-er er ofte det første steget i lovgivningsprosessen.

### Proposisjoner (Prop. L)
Regjeringens lovforslag til Stortinget, tidligere kalt Ot.prp. (Odelstingsproposisjoner). Inneholder regjeringens vurdering og det endelige lovforslaget. Proposisjoner tillegges **stor vekt** som rettskilde.

### Innstillinger (Innst. L)
Stortingets fagkomités vurdering av lovforslaget. Innstillingen viser komiteens flertalls- og mindretallssyn og gir uttrykk for Stortingets vilje.

**Forarbeidenes vekt som rettskilde:**
Forarbeider tillegges betydelig vekt, særlig ved nyere lover. Jo eldre en lov er, desto mindre vekt har forarbeidene typisk, fordi samfunnsforholdene kan ha endret seg. Forarbeider kan ikke overstyre lovens klare ordlyd.`,
    },
    {
      id: 'rtl2-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Forarbeider som tolkningsfaktor',
      problem: 'Arbeidsmiljøloven § 15-7 fastslår at oppsigelse av en arbeidstaker må være «saklig begrunnet». Begrepet «saklig» er skjønnsmessig. En arbeidsgiver sier opp en ansatt på grunn av gjentatte forsinkelser. Hvordan kan forarbeidene bidra til tolkningen?',
      solution: `**Bruk av forarbeider:**

Lovteksten bruker det skjønnsmessige begrepet «saklig begrunnet», som ikke gir et entydig svar. Juristen går derfor til forarbeidene for veiledning.

**Prop. 104 L (2009–2010)** (proposisjonen til endringer i arbeidsmiljøloven) og tidligere forarbeider presiserer at:
- Saklighetskravet innebærer at oppsigelsen må bygge på et **forsvarlig faktisk grunnlag**
- Arbeidsgiver må ha gitt **advarsel** og mulighet til å forbedre seg
- Det må foretas en **helhetsvurdering** av arbeidstakerens situasjon
- Bagatellmessige forhold er normalt ikke tilstrekkelig saklig grunn

Forarbeidene gir dermed veiledning om at gjentatte forsinkelser **kan** være saklig grunn, forutsatt at arbeidsgiver har fulgt en forsvarlig prosess med advarsler og oppfølging.

**Konklusjon:** Forarbeidene utfyller lovens ordlyd og gir konkret veiledning om tolkningen av skjønnsmessige begrep.`,
    },
    {
      id: 'rtl2-2-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en NOU?',
        options: [
          { id: 'a', text: 'En dom fra Høyesterett som danner presedens', isCorrect: false },
          { id: 'b', text: 'En offentlig utredning utarbeidet av et utvalg som ledd i lovgivningsprosessen', isCorrect: true },
          { id: 'c', text: 'En forskrift vedtatt av et departement', isCorrect: false },
          { id: 'd', text: 'En innstilling fra Stortingets fagkomité', isCorrect: false },
        ],
        solution: 'NOU (Norges offentlige utredninger) er utredninger utarbeidet av offentlige utvalg oppnevnt av regjeringen. De inneholder grundig analyse av rettstilstanden og forslag til nye regler, og utgjør typisk det første steget i lovgivningsprosessen. NOU-er er en del av lovens forarbeider og brukes som rettskilde ved lovtolkning.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-2-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Formelle lover** vedtas av Stortinget etter prosedyren i Grunnloven og er den viktigste rettskilden i norsk rett.
- **Forskrifter** gis av forvaltningen med hjemmel i lov. Uten lovhjemmel er forskriften ugyldig. Forskrifter kan ikke stride mot overordnet lov.
- **Forarbeider** er dokumenter utarbeidet som ledd i lovgivningsprosessen: NOU-er, proposisjoner og innstillinger.
- NOU-er er offentlige utredninger som analyserer rettstilstanden og foreslår nye regler.
- Proposisjoner (Prop. L) er regjeringens lovforslag til Stortinget og tillegges stor vekt som rettskilde.
- Innstillinger (Innst. L) viser Stortingets fagkomités vurdering.
- Forarbeider er særlig viktige ved tolkning av **skjønnsmessige** lovbestemmelser, men kan ikke overstyre lovens klare ordlyd.`,
    },

    // Samleoppgaver
    {
      id: 'rtl2-2-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Et departement fastsetter en forskrift som gir NAV rett til å avslå søknader om dagpenger uten begrunnelse. Folketrygdloven, som forskriften er hjemlet i, krever imidlertid at alle vedtak skal begrunnes. Drøft om forskriften er gyldig.',
        hints: [
          'Identifiser forholdet mellom forskriften og loven den er hjemlet i.',
          'Vurder rettskildehierarkiet og lex superior-prinsippet.',
          'Tenk på forvaltningslovens krav til begrunnelse (§ 24).',
        ],
        solution: 'Forskriften strider mot folketrygdloven, som krever begrunnelse av vedtak. Etter lex superior-prinsippet har formell lov høyere rang enn forskrift. En forskrift kan ikke fravike den loven den er hjemlet i. I tillegg krever forvaltningsloven § 24 at enkeltvedtak skal begrunnes. Forskriften er derfor ugyldig fordi den strider mot overordnet lovgivning. Departementet har overskredet sin forskriftskompetanse.',
      },
    },
    {
      id: 'rtl2-2-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva forarbeider er, og gjør rede for de tre hovedtypene forarbeider i norsk rett. Drøft hvilken vekt forarbeider har som rettskilde sammenlignet med lovteksten.',
        hints: [
          'Definer hva forarbeider er og nevn de tre typene.',
          'Forklar hva hver type inneholder og hvem som utarbeider den.',
          'Drøft når forarbeider har stor vekt og når de har mindre vekt.',
        ],
        solution: 'Forarbeider er dokumenter utarbeidet som ledd i lovgivningsprosessen. De tre hovedtypene er: (1) NOU-er – utredninger fra offentlige utvalg med analyse og forslag, (2) proposisjoner (Prop. L) – regjeringens lovforslag med begrunnelse, og (3) innstillinger (Innst. L) – fagkomiteens vurdering. Forarbeider tillegges betydelig vekt, særlig proposisjoner, fordi de gir uttrykk for lovgivers intensjon. Vekten avtar med lovens alder, ettersom samfunnsforholdene endres. Forarbeider kan likevel ikke overstyre lovens klare ordlyd – ordlyden er det primære utgangspunktet for lovtolkning.',
      },
    },
    {
      id: 'rtl2-2-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Gjør rede for forskjellen mellom lover og forskrifter. Hvorfor delegerer Stortinget regelgivningskompetanse til forvaltningen gjennom forskriftshjemler?',
        hints: [
          'Pek på hvem som vedtar henholdsvis lover og forskrifter.',
          'Forklar kravet til lovhjemmel for forskrifter.',
          'Drøft fordeler og ulemper ved delegasjon av regelgivningsmyndighet.',
        ],
        solution: 'Lover vedtas av Stortinget etter Grunnlovens prosedyre, mens forskrifter gis av forvaltningen med hjemmel i lov. Forskrifter har lavere rang enn lover og kan ikke stride mot dem. Stortinget delegerer regelgivningskompetanse fordi forvaltningen har faglig kompetanse på tekniske og detaljerte spørsmål, fordi Stortinget ikke har kapasitet til å regulere alle detaljer selv, og fordi forskrifter kan endres raskere enn lover når behovene endrer seg. Ulempen er at makt flyttes fra folkevalgte til byråkratiet, noe som kan svekke den demokratiske kontrollen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Formell lov', definition: 'Rettsregel vedtatt av Stortinget etter prosedyren i Grunnloven.' },
    { term: 'Forskrift', definition: 'Rettsregel gitt av forvaltningen med hjemmel i lov.' },
    { term: 'Forarbeider', definition: 'Dokumenter utarbeidet som ledd i lovgivningsprosessen: NOU-er, proposisjoner og innstillinger.' },
    { term: 'NOU', definition: 'Norges offentlige utredninger – utredninger fra offentlige utvalg.' },
    { term: 'Proposisjon', definition: 'Regjeringens lovforslag til Stortinget (Prop. L), tidligere kalt Ot.prp.' },
  ],
};

// ============================================================================
// KAPITTEL 2.3: Rettspraksis og juridisk litteratur
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2_3: TextbookChapter = {
  id: 'rettslaere-2-2-3',
  courseId: 'rettslaere-2',
  chapterNumber: '2.3',
  title: 'Rettspraksis og juridisk litteratur',
  description: 'Prejudikater, Høyesteretts rolle, obiter dictum, ratio decidendi og juridisk teori som rettskilde.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og bruke ulike rettskilder for å løse juridiske problemstillinger',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-2-3-intro',
      type: 'text',
      content: `## Rettspraksis og juridisk litteratur

I dette kapittelet skal du lære om:

- Hva **rettspraksis** er og hvorfor domstolsavgjørelser er en sentral rettskilde
- Forskjellen mellom **prejudikater** og andre avgjørelser
- Høyesteretts særlige rolle som **prejudikatdomstol**
- Begrepene **ratio decidendi** og **obiter dictum**
- **Juridisk teori** (rettsvitenskap) som rettskilde

Domstolene anvender ikke bare retten – de utvikler den også. Gjennom sine avgjørelser presiserer domstolene innholdet i lovbestemmelser og fyller hull i lovverket. Høyesteretts avgjørelser har særlig stor vekt og fungerer som rettesnor for fremtidige saker.`,
    },

    // BLOCK 1: Rettspraksis
    {
      id: 'rtl2-2-3-def-1',
      type: 'definition',
      title: 'Rettspraksis som rettskilde',
      content: `**Rettspraksis** er samlebetegnelsen på avgjørelser truffet av domstolene. I norsk rett er domstolshierarkiet:

1. **Høyesterett** – landets øverste domstol, avgjørelser har størst rettskildemessig vekt
2. **Lagmannsrettene** – ankedomstoler, avgjørelser har vekt som rettskilde, men er ikke like autoritative
3. **Tingrettene** – førsteinstansdomstoler, avgjørelser har begrenset vekt som rettskilde

**Hvorfor er rettspraksis en viktig rettskilde?**
- Domstolene **tolker og presiserer** innholdet i lovbestemmelser
- Domstolene **fyller hull** i lovverket der loven er taus
- Avgjørelser gir veiledning om hvordan lignende saker vil bli løst i fremtiden
- Rettspraksis sikrer **forutberegnelighet** og **likebehandling**

**Publisering:** Høyesterettsavgjørelser publiseres i Norsk Retstidende (Rt.) og på Lovdata. Fra 2008 brukes referanseformen HR-[årstall]-[nummer]-[type], for eksempel HR-2020-1167-A.`,
    },
    {
      id: 'rtl2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Rettspraksis som rettskilde',
      problem: 'Erstatningsloven har ingen generell bestemmelse om erstatning for personskade ved uaktsomhet. Likevel tilkjennes slik erstatning i norsk rett. Forklar hvordan dette er mulig.',
      solution: `**Analyse:**

Retten til erstatning ved uaktsom personskade er utviklet gjennom **rettspraksis** og er i dag en del av **ulovfestet erstatningsrett**. Allerede i Rt. 1874 s. 145 la Høyesterett grunnlaget for at den som uaktsomt påfører andre skade, er erstatningsansvarlig.

Gjennom en lang rekke avgjørelser har Høyesterett presisert vilkårene for uaktsomhetsansvar:
- Det må foreligge et **ansvarsgrunnlag** (uaktsomhet)
- Det må foreligge et **økonomisk tap** eller en **skade**
- Det må være **årsakssammenheng** mellom den uaktsomme handlingen og skaden

Dette er et eksempel på at rettspraksis kan danne selvstendig rettsgrunnlag der lovgiver ikke har regulert spørsmålet. Den ulovfestede erstatningsretten er i dag like bindende som lovfestede regler.

**Konklusjon:** Rettspraksis er ikke bare en tolkningsfaktor – den kan også skape nye rettsregler der loven er taus.`,
    },
    {
      id: 'rtl2-2-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken domstols avgjørelser har størst rettskildemessig vekt i norsk rett?',
        options: [
          { id: 'a', text: 'Tingrettens avgjørelser, fordi de behandler flest saker', isCorrect: false },
          { id: 'b', text: 'Lagmannsrettens avgjørelser, fordi de er ankeinstans', isCorrect: false },
          { id: 'c', text: 'Høyesteretts avgjørelser, fordi Høyesterett er landets øverste domstol', isCorrect: true },
          { id: 'd', text: 'Alle domstolers avgjørelser har lik vekt', isCorrect: false },
        ],
        solution: 'Høyesteretts avgjørelser har størst rettskildemessig vekt fordi Høyesterett er landets øverste domstol etter Grunnloven § 88. Høyesteretts avgjørelser er endelige og fungerer som prejudikater – retningsgivende for fremtidige saker. Lagmannsrettens og tingrettens avgjørelser har lavere vekt i rettskildehierarkiet.',
      },
    },

    // BLOCK 2: Prejudikater
    {
      id: 'rtl2-2-3-def-2',
      type: 'definition',
      title: 'Prejudikater, ratio decidendi og obiter dictum',
      content: `Et **prejudikat** er en rettsavgjørelse som er retningsgivende for fremtidige saker med tilsvarende rettsspørsmål. Høyesterett fungerer som **prejudikatdomstol** – dens avgjørelser legger føringer for hvordan alle andre domstoler skal løse lignende saker.

### Ratio decidendi
**Ratio decidendi** (begrunnelsen for avgjørelsen) er den delen av dommen som utgjør det rettslige prejudikatet. Det er de rettslige vurderingene som var nødvendige for å nå resultatet. Ratio decidendi har størst vekt som rettskilde.

### Obiter dictum
**Obiter dictum** (sagt i forbifarten) er uttalelser i dommen som ikke er nødvendige for resultatet. Slike uttalelser kan gi veiledning om Høyesteretts syn på et rettsspørsmål, men har **lavere vekt** enn ratio decidendi.

### Prejudikatets rekkevidde
Et prejudikat binder ikke formelt lavere domstoler (Norge har ikke en formell «stare decisis»-doktrine som i angloamerikansk rett), men i praksis følger lavere domstoler Høyesteretts avgjørelser fordi de ellers risikerer å bli fraveket ved anke.`,
    },
    {
      id: 'rtl2-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Prejudikat – Husmordommen (Rt. 1975 s. 220)',
      problem: 'I Rt. 1975 s. 220 (Husmordommen) tok Høyesterett stilling til om en husmors arbeid i hjemmet ga rett til en andel av felles formue ved skilsmisse. Forklar hvorfor denne dommen er et viktig prejudikat.',
      solution: `**Analyse:**

**Faktum:** Et ektepar ble skilt etter et langvarig ekteskap. Mannen hadde stått for den yrkesmessige inntekten, mens konen hadde vært hjemmearbeidende og ivaretatt hjem og barn. Boligen var registrert på mannen. Spørsmålet var om konen hadde ervervet medeiendomsrett.

**Ratio decidendi:** Høyesterett fastslo at husmorens arbeid i hjemmet representerte et **økonomisk bidrag** til familiens samlede økonomi, og at dette ga grunnlag for medeiendomsrett. Dette var en nyskapende rettsregel som ikke hadde direkte forankring i lovteksten.

**Prejudikatvirkning:** Dommen skapte en ny rettsregel om at arbeid i hjemmet kunne gi grunnlag for eierrettigheter. Prinsippet er siden blitt fulgt i en rekke senere avgjørelser og er nå kodifisert i ekteskapsloven § 31 tredje ledd.

**Konklusjon:** Husmordommen er et prejudikat fordi den etablerte et nytt rettsprinsipp som ble retningsgivende for fremtidige saker – et klassisk eksempel på at Høyesterett utvikler retten gjennom sin praksis.`,
    },
    {
      id: 'rtl2-2-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom ratio decidendi og obiter dictum?',
        options: [
          { id: 'a', text: 'Ratio decidendi er mindretallets begrunnelse, obiter dictum er flertallets', isCorrect: false },
          { id: 'b', text: 'Ratio decidendi er begrunnelsen som var nødvendig for resultatet, obiter dictum er uttalelser som ikke var nødvendige for resultatet', isCorrect: true },
          { id: 'c', text: 'Ratio decidendi gjelder straffesaker, obiter dictum gjelder sivile saker', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Ratio decidendi er den delen av dommens begrunnelse som var nødvendig for å begrunne resultatet – det er dette som utgjør prejudikatet og har størst rettskildemessig vekt. Obiter dictum er uttalelser som domstolen kommer med «i forbifarten», og som ikke var nødvendige for resultatet. Obiter dicta kan gi veiledning, men har lavere vekt som rettskilde.',
      },
    },

    // BLOCK 3: Juridisk teori
    {
      id: 'rtl2-2-3-def-3',
      type: 'definition',
      title: 'Juridisk teori (rettsvitenskap)',
      content: `**Juridisk teori** (også kalt **rettsvitenskap** eller **rettslitteratur**) er faglitteratur skrevet av jurister og rettsforskere. Juridisk teori er en anerkjent rettskilde, men har **beskjeden vekt** sammenlignet med lov, forarbeider og rettspraksis.

**Typer juridisk litteratur:**
- **Lovkommentarer** – systematiske fremstillinger av enkeltlover med tolkninger og henvisninger
- **Lærebøker** – generelle fremstillinger av rettsområder (f.eks. Andenæs' *Alminnelig strafferett*)
- **Monografier** – dybdestudier av avgrensede rettsspørsmål
- **Tidsskriftartikler** – vitenskapelige artikler i juridiske tidsskrifter (f.eks. *Lov og Rett*, *Tidsskrift for rettsvitenskap*)

**Juridisk teoris rolle:**
- **Systematiserer** gjeldende rett og gjør den tilgjengelig
- **Analyserer** og kritiserer rettsavgjørelser og lovgivning
- **Foreslår** løsninger på uavklarte rettsspørsmål
- Kan **påvirke** rettsutviklingen ved at domstolene viser til juridisk teori

Juridisk teori har størst vekt der lovteksten er uklar, forarbeidene er tause og rettspraksis gir begrenset veiledning.`,
    },
    {
      id: 'rtl2-2-3-example-3',
      type: 'example',
      title: 'Eksempel: Juridisk teori som rettskilde',
      problem: 'En advokat forbereder en sak om erstatningsansvar for en arbeidsgiver. Lovteksten gir ikke klart svar, og det finnes ingen direkte relevant høyesterettspraksis. Hvordan kan juridisk teori bidra?',
      solution: `**Analyse:**

Advokaten kan bruke juridisk teori på flere måter:

1. **Lovkommentarer:** Karnov eller Gyldendals lovkommentarer til skadeserstatningsloven gir systematisk gjennomgang av bestemmelsene med henvisninger til rettspraksis og forarbeider.

2. **Lærebøker:** Nils Nygaards *Skade og ansvar* eller Peter Lødrup og John Aslands *Erstatningsrett* gir grundig analyse av arbeidsgiverens ansvar etter skadeserstatningsloven § 2-1.

3. **Tidsskriftartikler:** Relevante artikler i *Lov og Rett* eller *Tidsskrift for rettsvitenskap* kan drøfte det spesifikke rettsspørsmålet i dybden.

**Bruk i prosedyre:** Advokaten kan vise til juridisk teori i sitt prosesskriv for å underbygge sin argumentasjon. Domstolen er ikke bundet av juridisk teori, men kan la seg påvirke av tungtveiende faglige synspunkter.

**Konklusjon:** Juridisk teori fungerer som et støttende argument der andre rettskilder ikke gir klart svar. Den systematiserer og analyserer retten, men har ikke avgjørende vekt i seg selv.`,
    },
    {
      id: 'rtl2-2-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken vekt har juridisk teori sammenlignet med andre rettskilder?',
        options: [
          { id: 'a', text: 'Juridisk teori har høyere vekt enn rettspraksis', isCorrect: false },
          { id: 'b', text: 'Juridisk teori har samme vekt som forarbeider', isCorrect: false },
          { id: 'c', text: 'Juridisk teori har beskjeden vekt, men kan påvirke rettsutviklingen', isCorrect: true },
          { id: 'd', text: 'Juridisk teori har ingen vekt som rettskilde', isCorrect: false },
        ],
        solution: 'Juridisk teori har beskjeden vekt sammenlignet med lov, forarbeider og rettspraksis, men er likevel en anerkjent rettskilde. Juridisk teori kan påvirke rettsutviklingen ved at domstolene viser til faglige analyser og synspunkter. Den har størst betydning der andre rettskilder gir begrenset veiledning.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-2-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Rettspraksis** er avgjørelser fra domstolene. Høyesteretts avgjørelser har størst rettskildemessig vekt.
- Et **prejudikat** er en avgjørelse som er retningsgivende for fremtidige saker med tilsvarende rettsspørsmål.
- **Ratio decidendi** er den delen av dommen som begrunner resultatet – dette er selve prejudikatet.
- **Obiter dictum** er uttalelser som ikke var nødvendige for resultatet og har lavere vekt.
- Høyesterett fungerer som **prejudikatdomstol** – dens avgjørelser legger føringer for alle andre domstoler.
- **Juridisk teori** er faglitteratur skrevet av jurister og rettsforskere. Den systematiserer og analyserer gjeldende rett.
- Juridisk teori har **beskjeden vekt** som rettskilde, men kan påvirke rettsutviklingen der andre kilder er uklare.`,
    },

    // Samleoppgaver
    {
      id: 'rtl2-2-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gjør rede for Høyesteretts rolle som prejudikatdomstol. Forklar hvorfor lavere domstoler i praksis følger Høyesteretts avgjørelser, selv om de ikke er formelt bundet av dem.',
        hints: [
          'Forklar hva det betyr at Høyesterett er prejudikatdomstol.',
          'Vurder hva som skjer dersom en lagmannsrett avviker fra Høyesteretts praksis.',
          'Drøft hensynene bak ordningen: forutberegnelighet, likebehandling, effektivitet.',
        ],
        solution: 'Høyesterett er prejudikatdomstol, noe som betyr at dens avgjørelser er retningsgivende for alle andre domstoler. Selv om Norge ikke har en formell stare decisis-doktrine, følger lavere domstoler Høyesteretts praksis fordi avvikende avgjørelser mest sannsynlig vil bli fraveket ved anke til Høyesterett. Hensynene bak ordningen er rettsenhet (like saker skal behandles likt), forutberegnelighet (borgerne skal kunne forutse sin rettsstilling) og prosessøkonomi (det er lite hensiktsmessig å avsi dommer som vil bli opphevet).',
      },
    },
    {
      id: 'rtl2-2-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'I en høyesterettsdom uttaler førstevoterende at «det kan reises spørsmål om det bør gjelde et strengere aktsomhetskrav for profesjonelle aktører i lignende situasjoner». Denne uttalelsen var ikke nødvendig for resultatet. Er dette ratio decidendi eller obiter dictum? Drøft hvilken betydning uttalelsen likevel kan ha.',
        hints: [
          'Avgjør om uttalelsen var nødvendig for resultatet i saken.',
          'Definer obiter dictum og ratio decidendi.',
          'Drøft hvilken vekt et obiter dictum fra Høyesterett kan ha for fremtidige saker.',
        ],
        solution: 'Uttalelsen er et obiter dictum fordi den ikke var nødvendig for å begrunne resultatet i den aktuelle saken. Obiter dicta har lavere rettskildemessig vekt enn ratio decidendi. Likevel kan et obiter dictum fra Høyesterett ha betydelig praktisk betydning: Det signaliserer Høyesteretts foreløpige syn på et rettsspørsmål og kan påvirke hvordan lavere domstoler og advokater vurderer fremtidige saker. Et obiter dictum kan også gi lovgiver en impuls til å vurdere regelendring.',
      },
    },
    {
      id: 'rtl2-2-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «Juridisk teori er en overflødig rettskilde – lov, forarbeider og rettspraksis gir alltid tilstrekkelig svar.» Bruk konkrete eksempler i drøftingen.',
        hints: [
          'Vurder om det finnes situasjoner der lov, forarbeider og rettspraksis ikke gir klare svar.',
          'Tenk på juridisk teoris rolle i å systematisere og analysere rettstilstanden.',
          'Bruk eksempler der juridisk teori har påvirket rettsutviklingen.',
        ],
        solution: 'Påstanden er for bastant. Selv om lov, forarbeider og rettspraksis er de tyngste rettskildene, finnes det situasjoner der disse ikke gir klare svar – for eksempel ved nye rettsspørsmål som lovgiver ikke har forutsett, eller der rettspraksis spriker. Juridisk teori systematiserer rettstilstanden og gjør den tilgjengelig for praktikere, analyserer motstridende avgjørelser og foreslår løsninger. Historisk har juridisk teori påvirket rettsutviklingen, for eksempel innen erstatningsretten der Nygaards analyse av uaktsomhetsnormen har vært retningsgivende. Juridisk teori er derfor ikke overflødig, men et nødvendig supplement til de øvrige rettskildene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rettspraksis', definition: 'Samlebetegnelse på avgjørelser truffet av domstolene.' },
    { term: 'Prejudikat', definition: 'En rettsavgjørelse som er retningsgivende for fremtidige saker med tilsvarende rettsspørsmål.' },
    { term: 'Ratio decidendi', definition: 'Den delen av dommens begrunnelse som var nødvendig for resultatet – selve prejudikatet.' },
    { term: 'Obiter dictum', definition: 'Uttalelser i en dom som ikke var nødvendige for resultatet, og som har lavere rettskildemessig vekt.' },
    { term: 'Juridisk teori', definition: 'Faglitteratur skrevet av jurister og rettsforskere – en anerkjent, men beskjeden rettskilde.' },
  ],
};

// ============================================================================
// KAPITTEL 2.4: Juridisk problemstilling og drøfting
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2_4: TextbookChapter = {
  id: 'rettslaere-2-2-4',
  courseId: 'rettslaere-2',
  chapterNumber: '2.4',
  title: 'Juridisk problemstilling og drøfting',
  description: 'IRAC-metoden, subsumpsjon, identifisering av parter, krav og rettslig grunnlag.',
  estimatedMinutes: 25,
  competenceGoals: [
    'identifisere parter, krav, rettslig grunnlag og juridisk problemstilling og gjennomføre juridisk drøfting for å komme fram til en konklusjon',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-2-4-intro',
      type: 'text',
      content: `## Juridisk problemstilling og drøfting

I dette kapittelet skal du lære om:

- Hvordan man identifiserer **parter**, **krav**, **rettslig grunnlag** og **juridisk problemstilling** i en sak
- Hva **subsumpsjon** er og hvordan det gjennomføres
- **IRAC-metoden** som verktøy for systematisk juridisk drøfting
- Hvordan man bygger opp en juridisk drøfting fra problemstilling til konklusjon

Juridisk metode handler ikke bare om å kjenne rettskildene – det handler like mye om å kunne **bruke** dem systematisk for å løse konkrete rettsspørsmål. En strukturert juridisk drøfting er kjernen i all juridisk virksomhet, enten man er advokat, dommer eller saksbehandler.`,
    },

    // BLOCK 1: Identifisere parter, krav og rettslig grunnlag
    {
      id: 'rtl2-2-4-def-1',
      type: 'definition',
      title: 'Parter, krav, rettslig grunnlag og juridisk problemstilling',
      content: `Første steg i juridisk drøfting er å identifisere de sentrale elementene i saken:

### Parter
**Partene** er de personene eller organisasjonene som er involvert i tvisten. I en sivil sak kalles den som fremmer kravet for **saksøker**, og den kravet rettes mot for **saksøkte**. I en straffesak er partene **påtalemyndigheten** og **tiltalte**.

### Krav
**Kravet** er det parten ønsker å oppnå. Eksempler: erstatning, heving av kjøp, frifinnelse, straff.

### Rettslig grunnlag
**Rettslig grunnlag** er den eller de rettsreglene kravet bygger på. Eksempel: «Kjøperen krever heving etter forbrukerkjøpsloven § 32.»

### Juridisk problemstilling
**Den juridiske problemstillingen** er det konkrete rettsspørsmålet som må besvares for å avgjøre saken. Den formuleres gjerne som et spørsmål: «Er mangelen vesentlig nok til at kjøperen kan heve kjøpet etter forbrukerkjøpsloven § 32?»

En presis formulering av den juridiske problemstillingen er avgjørende. Problemstillingen avgrenser drøftingen og sikrer at juristen fokuserer på det som er rettslig relevant.`,
    },
    {
      id: 'rtl2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Identifisering av parter, krav og rettslig grunnlag',
      problem: 'Kari har kjøpt en ny mobiltelefon fra Elektronikkhuset AS. Etter to uker slutter telefonen å fungere. Kari krever pengene tilbake. Elektronikkhuset nekter. Identifiser parter, krav, rettslig grunnlag og juridisk problemstilling.',
      solution: `**Analyse:**

**Parter:**
- Saksøker (kjøper): Kari
- Saksøkte (selger): Elektronikkhuset AS

**Krav:**
Kari krever **heving** av kjøpet, det vil si å få pengene tilbake mot å levere tilbake telefonen.

**Rettslig grunnlag:**
Forbrukerkjøpsloven § 32, som gir forbrukeren rett til å heve kjøpet dersom mangelen ikke er «uvesentlig». Forbrukerkjøpsloven gjelder fordi Kari er forbruker og Elektronikkhuset er næringsdrivende (jf. forbrukerkjøpsloven § 1).

**Juridisk problemstilling:**
«Er det en mangel ved mobiltelefonen etter forbrukerkjøpsloven § 15, og er mangelen tilstrekkelig til å gi Kari rett til heving etter § 32?»

En telefon som slutter å fungere etter to uker, avviker fra det kjøperen med rimelighet kan forvente. Mangelen er neppe uvesentlig. Kari har sannsynligvis hevingsrett.`,
    },
    {
      id: 'rtl2-2-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er «rettslig grunnlag» i en juridisk drøfting?',
        options: [
          { id: 'a', text: 'Domstolen som behandler saken', isCorrect: false },
          { id: 'b', text: 'Den eller de rettsreglene som kravet bygger på', isCorrect: true },
          { id: 'c', text: 'Partenes personlige mening om hva som er rettferdig', isCorrect: false },
          { id: 'd', text: 'Det faktiske hendelsesforløpet i saken', isCorrect: false },
        ],
        solution: 'Det rettslige grunnlaget er den eller de rettsreglene (lovbestemmelsene) som kravet bygger på. Det er lovhjemmelen som gir parten rett til det vedkommende krever. Eksempel: En kjøper som krever heving, påberoper seg hevingsbestemmelsen i kjøpsloven eller forbrukerkjøpsloven som rettslig grunnlag.',
      },
    },

    // BLOCK 2: Subsumpsjon
    {
      id: 'rtl2-2-4-def-2',
      type: 'definition',
      title: 'Subsumpsjon',
      content: `**Subsumpsjon** er den juridiske operasjonen der man anvender en rettsregel på et konkret faktum for å komme frem til en rettslig konklusjon. Det er selve kjernen i juridisk drøfting.

**Subsumpsjonens struktur:**

1. **Rettsregelen (oversetning):** Identifiser den relevante rettsregelen og dens vilkår.
   *Eksempel:* Forbrukerkjøpsloven § 32 – heving krever at mangelen ikke er «uvesentlig».

2. **Faktum (undersetning):** Beskriv det faktiske forholdet i saken.
   *Eksempel:* Mobiltelefonen sluttet å fungere etter to uker.

3. **Konklusjon:** Anvend rettsregelens vilkår på faktum og trekk en konklusjon.
   *Eksempel:* En telefon som slutter å fungere etter to uker, har en mangel som ikke er uvesentlig. Vilkårene for heving er oppfylt.

Subsumpsjon kan sammenlignes med en logisk syllogisme:
- **Oversetning:** Alle A er B (rettsregelen)
- **Undersetning:** C er A (faktum oppfyller vilkårene)
- **Konklusjon:** Altså er C B (rettsvirkningen inntrer)`,
    },
    {
      id: 'rtl2-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Subsumpsjon steg for steg',
      problem: 'Lars (17 år) har stjålet en sykkel til en verdi av 8 000 kroner fra en garasje. Gjennomfør subsumpsjon under straffeloven § 321 om tyveri.',
      solution: `**Subsumpsjon under straffeloven § 321:**

**Rettsregel (oversetning):**
Straffeloven § 321 fastslår: «Den som tar en gjenstand som tilhører en annen, med forsett om å skaffe seg eller andre en uberettiget vinning ved å selge, forbruke eller på annen måte tilegne seg den, straffes for tyveri.»

Vilkårene er:
1. «Tar en gjenstand» – fysisk tilegnelse
2. «Som tilhører en annen» – gjenstanden må tilhøre noen andre
3. «Forsett om uberettiget vinning» – hensikt om å tilegne seg gjenstanden

**Faktum (undersetning):**
- Lars har tatt en sykkel fra en garasje – vilkår 1 er oppfylt
- Sykkelen tilhører en annen person – vilkår 2 er oppfylt
- Lars tok sykkelen med hensikt om å beholde den – vilkår 3 er oppfylt

**Tilleggsvilkår:** Lars er 17 år, altså over den kriminelle lavalder (15 år). Tilregnelighetsvilkåret er oppfylt.

**Konklusjon:** Alle vilkårene i straffeloven § 321 er oppfylt. Lars kan straffes for tyveri. (Merk: Som mindreårig vil det ha betydning for straffeutmålingen.)`,
    },
    {
      id: 'rtl2-2-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er subsumpsjon?',
        options: [
          { id: 'a', text: 'Å identifisere hvilken domstol som er rett instans', isCorrect: false },
          { id: 'b', text: 'Å finne frem til relevante rettskilder i en sak', isCorrect: false },
          { id: 'c', text: 'Å anvende en rettsregels vilkår på et konkret faktum for å nå en konklusjon', isCorrect: true },
          { id: 'd', text: 'Å anke en dom til en høyere domstol', isCorrect: false },
        ],
        solution: 'Subsumpsjon er den juridiske operasjonen der man anvender en rettsregels vilkår på et konkret faktum for å komme frem til en rettslig konklusjon. Det innebærer å vurdere om de faktiske omstendighetene i saken oppfyller lovens vilkår, og deretter trekke en konklusjon om rettsvirkningen.',
      },
    },

    // BLOCK 3: IRAC-metoden
    {
      id: 'rtl2-2-4-def-3',
      type: 'definition',
      title: 'IRAC-metoden',
      content: `**IRAC** er et akronym for en systematisk metode for juridisk drøfting. Metoden sikrer en strukturert og fullstendig analyse av rettsspørsmål:

### I – Issue (Problemstilling)
Formuler den juridiske problemstillingen presist. Hva er rettsspørsmålet som skal besvares?
*Eksempel:* «Har Kari rett til å heve kjøpet av mobiltelefonen etter forbrukerkjøpsloven § 32?»

### R – Rule (Rettsregel)
Identifiser og presenter den relevante rettsregelen med dens vilkår.
*Eksempel:* «Etter forbrukerkjøpsloven § 32 kan forbrukeren heve kjøpet dersom mangelen ikke er uvesentlig.»

### A – Application (Anvendelse/subsumpsjon)
Anvend rettsregelens vilkår på sakens faktum. Drøft om vilkårene er oppfylt.
*Eksempel:* «Telefonen sluttet å virke etter to uker. En mobiltelefon skal fungere i vesentlig lengre tid. Mangelen er ikke uvesentlig.»

### C – Conclusion (Konklusjon)
Trekk en klar konklusjon basert på drøftingen.
*Eksempel:* «Kari har rett til å heve kjøpet etter forbrukerkjøpsloven § 32.»

IRAC-metoden er et pedagogisk verktøy som sikrer at alle nødvendige elementer i en juridisk drøfting er med.`,
    },
    {
      id: 'rtl2-2-4-example-3',
      type: 'example',
      title: 'Eksempel: IRAC-metoden i en praktisk oppgave',
      problem: 'Ola har leid en leilighet av Fjordbolig AS. Etter innflytting oppdager han omfattende fuktskader i veggen som gjør soverommet ubeboelig. Fjordbolig AS hevder at skadene skyldes Olas bruk. Bruk IRAC-metoden til å drøfte om Ola kan kreve prisavslag.',
      solution: `**IRAC-analyse:**

**I – Issue (Problemstilling):**
Kan Ola kreve prisavslag for fuktskadene etter husleieloven § 2-11?

**R – Rule (Rettsregel):**
Husleieloven § 2-11 gir leietaker rett til å kreve forholdsmessig prisavslag dersom husrommet har en **mangel** etter § 2-2. En mangel foreligger dersom husrommet ikke er i samsvar med det som er avtalt, eller ikke er i den stand leietakeren kan kreve etter § 2-2. Utleieren er ansvarlig for mangler som forelå ved overtakelsen eller som skyldes utleierens forhold.

**A – Application (Anvendelse):**
Fuktskadene gjør soverommet ubeboelig. En leilighet med et ubeboelig soverom avviker klart fra det leietakeren med rimelighet kan forvente – det foreligger en mangel. Spørsmålet er om mangelen forelå ved overtakelsen eller skyldes Olas bruk. Omfattende fuktskader i veggen utvikler seg typisk over lang tid og skyldes normalt konstruksjonsfeil eller manglende vedlikehold – ikke leietakers bruk over kort tid. Bevisbyrden for at skadene skyldes leietakeren, ligger hos utleier.

**C – Conclusion (Konklusjon):**
Ola kan sannsynligvis kreve prisavslag etter husleieloven § 2-11. Fuktskadene utgjør en mangel som med overveiende sannsynlighet forelå før innflytting, og Fjordbolig AS har ikke godtgjort at skadene skyldes Olas bruk.`,
    },
    {
      id: 'rtl2-2-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i IRAC-metoden for?',
        options: [
          { id: 'a', text: 'Investigation, Research, Analysis, Conclusion', isCorrect: false },
          { id: 'b', text: 'Issue, Rule, Application, Conclusion', isCorrect: true },
          { id: 'c', text: 'Interpretation, Regulation, Assessment, Case', isCorrect: false },
          { id: 'd', text: 'Inquiry, Reasoning, Argumentation, Confirmation', isCorrect: false },
        ],
        solution: 'IRAC står for Issue (problemstilling), Rule (rettsregel), Application (anvendelse/subsumpsjon) og Conclusion (konklusjon). Metoden gir en systematisk struktur for juridisk drøfting som sikrer at alle nødvendige elementer er med: problemformulering, identifisering av rettsregel, anvendelse av regelen på faktum og en klar konklusjon.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-2-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- En juridisk drøfting begynner med å identifisere **parter** (hvem er involvert), **krav** (hva ønskes oppnådd), **rettslig grunnlag** (hvilken rettsregel bygger kravet på) og **juridisk problemstilling** (hva er rettsspørsmålet).
- **Subsumpsjon** er den juridiske operasjonen der rettsregelens vilkår anvendes på sakens faktum for å nå en konklusjon.
- **IRAC-metoden** gir en systematisk struktur for juridisk drøfting: Issue (problemstilling) → Rule (rettsregel) → Application (anvendelse) → Conclusion (konklusjon).
- En presis formulering av den juridiske problemstillingen er avgjørende for en god drøfting.
- Subsumpsjon er kjernen i all juridisk virksomhet og forutsetter at man behersker både rettskildelæren og evnen til å anvende rettsregler på konkrete saksforhold.`,
    },

    // Samleoppgaver
    {
      id: 'rtl2-2-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Morten driver et lite bakeri. Han ansetter Silje som baker. Etter tre måneder oppdager Morten at Silje har tatt med seg ingredienser hjem. Morten ønsker å si opp Silje. Identifiser parter, krav, rettslig grunnlag og juridisk problemstilling. Bruk deretter IRAC-metoden til å drøfte om Morten kan si opp Silje.',
        hints: [
          'Identifiser partene: hvem er arbeidsgiver og hvem er arbeidstaker?',
          'Hva er kravet? Hva er det rettslige grunnlaget for oppsigelse?',
          'Se arbeidsmiljøloven § 15-7 om krav til saklig oppsigelse.',
          'Bruk IRAC: formuler problemstilling, identifiser rettsregel, anvend på faktum, konkluder.',
        ],
        solution: 'Parter: Morten (arbeidsgiver/saksøker) og Silje (arbeidstaker/saksøkte). Krav: Oppsigelse av arbeidsforholdet. Rettslig grunnlag: Arbeidsmiljøloven § 15-7 – oppsigelsen må være saklig begrunnet. Problemstilling: Er Siljes tilegnelse av ingredienser saklig grunn for oppsigelse? IRAC: (I) Spørsmålet er om Siljes handlinger gir saklig grunnlag for oppsigelse. (R) Aml. § 15-7 krever saklig begrunnelse. Rettspraksis viser at tyveri/underslag fra arbeidsgiver normalt er saklig oppsigelsesgrunn, forutsatt at forholdet er dokumentert. (A) Silje har tatt ingredienser hjem uten tillatelse. Dette er et tillitsbrudd. (C) Morten har sannsynligvis saklig grunn for oppsigelse, forutsatt at han har dokumentert forholdet og fulgt korrekt prosedyre med drøftingsmøte etter § 15-1.',
      },
    },
    {
      id: 'rtl2-2-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva subsumpsjon er og vis med et selvvalgt eksempel hvordan subsumpsjon gjennomføres trinn for trinn.',
        hints: [
          'Definer subsumpsjon med egne ord.',
          'Velg en enkel lovbestemmelse (f.eks. tyveri, heving, erstatning).',
          'Vis de tre trinnene: rettsregel, faktum, konklusjon.',
        ],
        solution: 'Subsumpsjon er å anvende en rettsregels vilkår på et konkret faktum for å nå en juridisk konklusjon. Eksempel med straffeloven § 321 om tyveri: (1) Rettsregel: Tyveri foreligger når noen tar en gjenstand som tilhører en annen, med forsett om uberettiget vinning. Vilkårene er: (a) ta en gjenstand, (b) som tilhører en annen, (c) med forsett om vinning. (2) Faktum: Per tar en lommebok fra en benk i parken og beholder den. Lommeboken tilhører Lise. (3) Subsumpsjon: Per har tatt lommeboken (vilkår a oppfylt), den tilhører Lise (vilkår b oppfylt), og han beholder den med hensikt om å tilegne seg innholdet (vilkår c oppfylt). Konklusjon: Per har begått tyveri etter § 321.',
      },
    },
    {
      id: 'rtl2-2-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvorfor en presis formulering av den juridiske problemstillingen er viktig for kvaliteten på den juridiske drøftingen. Hva kan gå galt dersom problemstillingen er upresist formulert?',
        hints: [
          'Tenk på problemstillingen som et kart for drøftingen.',
          'Vurder hva som skjer dersom drøftingen mangler retning.',
          'Bruk gjerne et eksempel på en dårlig formulert problemstilling og vis hvordan den kan forbedres.',
        ],
        solution: 'En presis juridisk problemstilling er avgjørende fordi den avgrenser drøftingen og sikrer at juristen fokuserer på det rettslig relevante. En uklar problemstilling kan føre til at drøftingen blir ustrukturert, at irrelevante momenter tas med, og at viktige vilkår overses. Eksempel: «Er dette lovlig?» er for vagt – det angir ikke hvilken rettsregel som er aktuell. En bedre formulering er: «Har kjøperen rett til heving etter forbrukerkjøpsloven § 32 på grunn av mangelen?» Denne formuleringen identifiserer parten, kravet, rettsregelen og det sentrale vilkåret. Problemstillingen fungerer som et kart for drøftingen og sikrer at alle trinn i subsumsjonen gjennomføres systematisk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Subsumpsjon', definition: 'Den juridiske operasjonen der en rettsregels vilkår anvendes på et konkret faktum for å nå en konklusjon.' },
    { term: 'IRAC-metoden', definition: 'Systematisk drøftingsmetode: Issue (problemstilling), Rule (rettsregel), Application (anvendelse), Conclusion (konklusjon).' },
    { term: 'Rettslig grunnlag', definition: 'Den eller de rettsreglene (lovbestemmelsene) som et krav bygger på.' },
    { term: 'Juridisk problemstilling', definition: 'Det konkrete rettsspørsmålet som må besvares for å avgjøre en sak.' },
    { term: 'Parter', definition: 'Personene eller organisasjonene som er involvert i en rettstvist (saksøker/saksøkte eller påtalemyndighet/tiltalte).' },
  ],
};

// ============================================================================
// KAPITTEL 2.5: Praktisk juridisk metode
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2_5: TextbookChapter = {
  id: 'rettslaere-2-2-5',
  courseId: 'rettslaere-2',
  chapterNumber: '2.5',
  title: 'Praktisk juridisk metode',
  description: 'Bruke rettskilder til å løse caser, lovtolkning, helhetlig juridisk drøfting.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og bruke ulike rettskilder for å løse juridiske problemstillinger',
    'identifisere parter, krav, rettslig grunnlag og juridisk problemstilling og gjennomføre juridisk drøfting for å komme fram til en konklusjon',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-2-5-intro',
      type: 'text',
      content: `## Praktisk juridisk metode

I dette kapittelet skal du lære om:

- Hvordan man gjennomfører en **helhetlig juridisk drøfting** fra faktum til konklusjon
- Prinsippene for **lovtolkning**: ordlyd, formål, forarbeider og rettspraksis
- Hvordan man bruker **flere rettskilder i sammenheng** for å løse en sak
- Praktiske tips for å løse **juridiske caser** i skolesammenheng

I de foregående kapitlene har du lært om de ulike rettskildene, rettskildehierarkiet, rettskildeprinsippene og IRAC-metoden. Nå skal du sette alt sammen og bruke juridisk metode til å løse praktiske oppgaver. Dette er den viktigste ferdigheten i rettslærefaget.`,
    },

    // BLOCK 1: Lovtolkning
    {
      id: 'rtl2-2-5-def-1',
      type: 'definition',
      title: 'Lovtolkning – metodene',
      content: `**Lovtolkning** er prosessen med å fastlegge innholdet i en lovbestemmelse. Utgangspunktet er alltid **ordlyden**, men juristen bruker flere tolkningsfaktorer:

### 1. Ordlyden (naturlig språklig forståelse)
Lovens ordlyd er det primære utgangspunktet. Ordene tolkes etter sin **naturlige språklige forståelse**, med mindre det fremgår at et annet innhold er tilsiktet.

### 2. Formålstolkning (teleologisk tolkning)
Lovbestemmelsen tolkes i lys av sitt **formål** – hva lovgiver ønsket å oppnå. Formålet kan fremgå av lovens forarbeider, formålsbestemmelser eller sammenhengen i loven.

### 3. Forarbeidene
Forarbeidene gir uttrykk for lovgivers vilje og kan klargjøre uklarheter i ordlyden. Forarbeider har størst vekt for nyere lover.

### 4. Rettspraksis
Domstolenes tolkning av bestemmelsen gir veiledning, særlig Høyesteretts avgjørelser.

### 5. Reelle hensyn
Vurderinger av hva som gir et **rimelig** og **rettferdig** resultat i den konkrete saken.

### 6. Sammenhengen i loven (systematisk tolkning)
Bestemmelsen tolkes i lys av de øvrige bestemmelsene i loven og i rettssystemet for øvrig.

**Tolkningsresultat:** Tolkningen kan være **innskrenkende** (snevrere enn ordlyden), **utvidende** (videre enn ordlyden) eller i samsvar med ordlyden. I strafferetten er utvidende tolkning til ulempe for tiltalte ikke tillatt (analogiforbudet).`,
    },
    {
      id: 'rtl2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Lovtolkning i praksis',
      problem: 'Forbrukerkjøpsloven § 15 sier at varen skal være i samsvar med det som følger av avtalen. Dersom ikke annet følger av avtalen, skal varen blant annet «passe for de formål som tilsvarende ting vanligvis brukes til». En forbruker kjøper en vinterkjakke som ikke tåler regn. Er dette en mangel?',
      solution: `**Lovtolkning trinn for trinn:**

**1. Ordlyden:** «Passe for de formål som tilsvarende ting vanligvis brukes til.» Naturlig språklig forståelse tilsier at en vinterjakke skal beskytte mot vinterforhold, inkludert regn og fuktighet.

**2. Formålstolkning:** Forbrukerkjøpsloven skal beskytte forbrukeren og sikre at varer holder en rimelig standard. Formålet tilsier at varer skal fungere etter sine vanlige bruksområder.

**3. Forarbeider:** Ot.prp.nr. 44 (2001–2002) presiserer at mangelvurderingen skal knyttes til forbrukerens berettigede forventninger basert på varens art og bruksområde.

**4. Rettspraksis:** Høyesterett har i flere saker lagt til grunn at klær skal tåle normal bruk innenfor sitt tiltenkte bruksområde.

**5. Reelle hensyn:** Det ville være urimelig å akseptere at en vinterjakke ikke tåler vanlige vinterforhold.

**Konklusjon:** En vinterjakke som ikke tåler regn, «passer» ikke for det formålet tilsvarende ting vanligvis brukes til. Det foreligger en mangel etter forbrukerkjøpsloven § 15.`,
    },
    {
      id: 'rtl2-2-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det primære utgangspunktet ved lovtolkning i norsk rett?',
        options: [
          { id: 'a', text: 'Forarbeidene til loven', isCorrect: false },
          { id: 'b', text: 'Lovens ordlyd (naturlig språklig forståelse)', isCorrect: true },
          { id: 'c', text: 'Reelle hensyn og rimelighetsvurderinger', isCorrect: false },
          { id: 'd', text: 'Juridisk teori og faglige synspunkter', isCorrect: false },
        ],
        solution: 'Det primære utgangspunktet ved lovtolkning er lovens ordlyd, tolket etter sin naturlige språklige forståelse. Ordlyden er det folkevalgte organets (Stortingets) uttrykk for regelens innhold. De øvrige tolkningsfaktorene – forarbeider, rettspraksis, reelle hensyn – brukes til å klargjøre ordlyden der den er uklar.',
      },
    },

    // BLOCK 2: Helhetlig juridisk drøfting
    {
      id: 'rtl2-2-5-text-1',
      type: 'text',
      title: 'Steg-for-steg: Helhetlig juridisk drøfting',
      content: `Når du skal løse en juridisk case i skolesammenheng, bør du følge denne fremgangsmåten:

### Steg 1: Les faktum nøye
Les oppgaveteksten grundig og noter de viktigste faktiske omstendighetene. Skiller mellom det som er rettslig relevant og det som er bakgrunnsinformasjon.

### Steg 2: Identifiser partene
Hvem er involvert? Hvem fremmer kravet (saksøker), og hvem rettes det mot (saksøkte)?

### Steg 3: Identifiser kravet og det rettslige grunnlaget
Hva ønsker parten å oppnå? Hvilken lovbestemmelse gir grunnlag for kravet?

### Steg 4: Formuler den juridiske problemstillingen
Skriv et presist spørsmål som angir hva som skal drøftes.

### Steg 5: Presenter rettsregelen
Gjengi innholdet i den relevante lovbestemmelsen og forklar vilkårene.

### Steg 6: Gjennomfør subsumpsjon
Anvend hvert vilkår på sakens faktum. Drøft om vilkåret er oppfylt. Bruk forarbeider, rettspraksis og reelle hensyn der ordlyden er uklar.

### Steg 7: Konkluder
Trekk en klar og tydelig konklusjon. Har parten rett til det vedkommende krever?

Denne fremgangsmåten tilsvarer IRAC-metoden, men er utvidet med mer detaljerte trinn.`,
    },
    {
      id: 'rtl2-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Fullstendig juridisk drøfting av en case',
      problem: 'Henrik (16 år) jobber deltid i en klesbutikk. Arbeidsgiveren krever at Henrik jobber til kl. 23.00 på en fredag. Henriks foreldre protesterer. Drøft om arbeidsgiverens krav er lovlig.',
      solution: `**Fullstendig juridisk drøfting:**

**Parter:** Henrik (arbeidstaker, mindreårig) og arbeidsgiveren (klesbutikken).

**Krav:** Henriks foreldre hevder at det er ulovlig å la Henrik jobbe til kl. 23.00.

**Rettslig grunnlag:** Arbeidsmiljøloven § 11-2 om arbeidstid for mindreårige arbeidstakere.

**Problemstilling:** Er det tillatt å la Henrik (16 år) arbeide til kl. 23.00 på en fredag?

**Rettsregel:** Arbeidsmiljøloven § 11-2 første ledd fastslår at personer under 18 år ikke skal arbeide mellom kl. 21.00 og kl. 06.00. Forarbeidene presiserer at formålet er å beskytte unge arbeidstakere mot belastende arbeidstider som kan gå utover helse, utvikling og skolegang.

**Subsumpsjon:** Henrik er 16 år – han er under 18 og omfattes av bestemmelsen. Arbeidsgiveren krever arbeid til kl. 23.00 – dette er etter kl. 21.00 og faller innenfor forbudsperioden. Det foreligger ingen unntaksbestemmelse som gir grunnlag for å fravike forbudet i denne situasjonen.

**Konklusjon:** Arbeidsgiverens krav er ulovlig. Det er i strid med arbeidsmiljøloven § 11-2 å la Henrik arbeide til kl. 23.00. Arbeidstiden for Henrik må avsluttes senest kl. 21.00.`,
    },
    {
      id: 'rtl2-2-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva bør man gjøre FØRST når man skal løse en juridisk case?',
        options: [
          { id: 'a', text: 'Skrive konklusjonen', isCorrect: false },
          { id: 'b', text: 'Slå opp i juridisk teori', isCorrect: false },
          { id: 'c', text: 'Lese faktum nøye og identifisere de rettslig relevante omstendighetene', isCorrect: true },
          { id: 'd', text: 'Velge hvilken domstol saken hører hjemme i', isCorrect: false },
        ],
        solution: 'Det første steget i en juridisk drøfting er å lese faktum nøye og identifisere de rettslig relevante omstendighetene. Uten en grundig forståelse av faktum er det umulig å identifisere riktig rettsregel, formulere en presis problemstilling eller gjennomføre korrekt subsumpsjon.',
      },
    },

    // BLOCK 3: Flere rettskilder i sammenheng
    {
      id: 'rtl2-2-5-def-2',
      type: 'definition',
      title: 'Rettskilder i sammenheng – harmonisering',
      content: `I praksis peker rettskildene ofte i samme retning. Men noen ganger kan de gi motstridende signaler. Juristen må da **harmonisere** rettskildene – det vil si veie dem mot hverandre for å komme frem til den løsningen som har best forankring i rettskildematerialet.

**Fremgangsmåte ved rettskildekonflikt:**

1. **Ordlyden er klar:** Dersom lovens ordlyd er klar og utvetydig, er den som hovedregel avgjørende. Andre rettskilder kan ikke overstyre en klar ordlyd (med unntak av Grunnloven og menneskerettighetene).

2. **Ordlyden er uklar:** Dersom ordlyden er skjønnsmessig eller tvetydig, veies de øvrige rettskildene:
   - Forarbeider som presiserer lovgivers intensjon, tillegges betydelig vekt
   - Rettspraksis som tolker bestemmelsen, tillegges stor vekt
   - Reelle hensyn kan supplere der andre kilder er tause

3. **Rettskildeprinsippene:** Ved direkte motstrid mellom regler brukes lex superior, lex specialis og lex posterior.

4. **Helhetssvurdering:** Til syvende og sist foretar juristen en helhetssvurdering der alle relevante rettskilder trekkes inn og veies mot hverandre.`,
    },
    {
      id: 'rtl2-2-5-example-3',
      type: 'example',
      title: 'Eksempel: Sammensatt case med flere rettskilder',
      problem: 'Astrid bestiller en sofa fra Møbelekspressen AS med leveringsdato 1. mars. Sofaen ankommer 15. april – seks uker forsinket. Astrid krever erstatning for utgiftene hun har hatt til å leie en erstatningssofa i mellomtiden. Bruk juridisk metode til å vurdere Astrids krav.',
      solution: `**Juridisk drøfting med flere rettskilder:**

**Parter:** Astrid (forbruker) og Møbelekspressen AS (næringsdrivende).

**Krav:** Erstatning for utgifter til leiesofa i forsinkelsesperioden.

**Rettslig grunnlag:** Forbrukerkjøpsloven § 24 om erstatning ved forsinkelse.

**Problemstilling:** Har Astrid rett til erstatning for leiekostnader som følge av forsinkelsen etter forbrukerkjøpsloven § 24?

**Rettskildeanalyse:**

1. **Ordlyden** i § 24: Forbrukeren kan kreve erstatning for tap som følge av forsinkelsen. Bestemmelsen er objektiv – selgeren er ansvarlig uavhengig av skyld, med mindre forsinkelsen skyldes en hindring utenfor selgerens kontroll (§ 24 annet ledd).

2. **Forarbeider** (Ot.prp.nr. 44, 2001–2002): Erstatningen skal dekke forbrukerens **økonomiske tap** som står i årsakssammenheng med forsinkelsen. Påregnelige utgifter til midlertidige løsninger er erstatningsberettiget.

3. **Rettspraksis:** Høyesterett har i forbrukersaker lagt til grunn at erstatningen skal dekke rimelige og nødvendige tiltak for å avbøte følgene av kontraktsbruddet.

4. **Reelle hensyn:** Det er rimelig at selgeren bærer kostnadene ved en forsinkelse på seks uker som har påført forbrukeren dokumenterbare utgifter.

**Subsumpsjon:** Sofaen er seks uker forsinket. Astrid har hatt utgifter til leie av erstatningssofa – dette er et økonomisk tap som står i direkte årsakssammenheng med forsinkelsen. Leiekostnadene fremstår som rimelige og nødvendige.

**Konklusjon:** Astrid har rett til erstatning etter forbrukerkjøpsloven § 24 for dokumenterte leiekostnader i forsinkelsesperioden.`,
    },
    {
      id: 'rtl2-2-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva bør juristen gjøre dersom lovens ordlyd er uklar og forarbeidene peker i en annen retning enn rettspraksis?',
        options: [
          { id: 'a', text: 'Alltid følge forarbeidene, uavhengig av rettspraksis', isCorrect: false },
          { id: 'b', text: 'Alltid følge rettspraksis, uavhengig av forarbeidene', isCorrect: false },
          { id: 'c', text: 'Foreta en helhetsvurdering der alle relevante rettskilder veies mot hverandre', isCorrect: true },
          { id: 'd', text: 'Avvise saken fordi rettskildene er motstridende', isCorrect: false },
        ],
        solution: 'Dersom rettskildene peker i ulike retninger, må juristen foreta en helhetsvurdering der alle relevante rettskilder veies mot hverandre. Det finnes ingen absolutt forrangsregel mellom forarbeider og rettspraksis – vekten avhenger av flere faktorer, som lovens alder, hvor klar rettspraksisen er, og om forarbeidene gir uttrykk for en bevisst lovgivervilje. Målet er å finne den løsningen som har best samlet forankring i rettskildematerialet.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-2-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Lovtolkning** tar utgangspunkt i ordlyden, men suppleres av formålstolkning, forarbeider, rettspraksis, reelle hensyn og systematisk tolkning.
- En **helhetlig juridisk drøfting** følger en fast struktur: les faktum, identifiser parter og krav, finn rettslig grunnlag, formuler problemstilling, presenter rettsregel, gjennomfør subsumpsjon og konkluder.
- Når rettskilder gir motstridende signaler, må juristen **harmonisere** dem gjennom en helhetsvurdering.
- En klar ordlyd er som hovedregel avgjørende, men kan suppleres eller presiseres av andre rettskilder.
- Juridisk metode er en **praktisk ferdighet** som krever øvelse – jo flere caser du løser, desto bedre blir du.`,
    },

    // Samleoppgaver
    {
      id: 'rtl2-2-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Nadia bestiller en konfirmasjonskjole fra en nettbutikk. Kjolen ankommer to dager etter konfirmasjonen. Nadia krever å heve kjøpet. Bruk juridisk metode (IRAC) til å drøfte om Nadia har hevingsrett. Bruk forbrukerkjøpsloven §§ 23 og 26.',
        hints: [
          'Identifiser parter, krav og rettslig grunnlag.',
          'Se forbrukerkjøpsloven § 23 om forsinkelse og § 26 om heving.',
          'Vurder om forsinkelsen medfører «vesentlig kontraktsbrudd» (§ 26).',
          'Tenk på hva formålet med kjøpet var – har det betydning for vurderingen?',
        ],
        solution: 'IRAC: (I) Har Nadia rett til å heve kjøpet på grunn av forsinkelsen? (R) Forbrukerkjøpsloven § 23 gir forbrukeren rett til å gjøre gjeldende krav ved forsinkelse. § 26 gir hevingsrett dersom forsinkelsen er et «vesentlig kontraktsbrudd». (A) Kjolen er bestilt til konfirmasjonen. En konfirmasjonskjole som ankommer etter konfirmasjonen, har mistet sitt formål – forsinkelsen er vesentlig fordi formålet med kjøpet ikke lenger kan oppfylles. Forarbeidene til forbrukerkjøpsloven tilsier at formålet med kjøpet er relevant ved vesentlighetsvurderingen. Reelle hensyn tilsier at det ville være urimelig å binde Nadia til et kjøp som har mistet sin mening. (C) Forsinkelsen utgjør et vesentlig kontraktsbrudd. Nadia har hevingsrett etter § 26.',
      },
    },
    {
      id: 'rtl2-2-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'En lovbestemmelse bruker uttrykket «rimelig tid». Forklar hvilke rettskilder og tolkningsmetoder juristen kan bruke for å fastlegge hva «rimelig tid» betyr i en konkret sak.',
        hints: [
          'Start med ordlyden – hva betyr «rimelig» i naturlig språk?',
          'Vurder om forarbeidene presiserer begrepet.',
          'Undersøk om rettspraksis har gitt veiledning.',
          'Drøft rollen til reelle hensyn.',
        ],
        solution: 'Ordlyden «rimelig tid» er skjønnsmessig og gir ikke et entydig svar. Juristen må derfor bruke flere tolkningsfaktorer: (1) Forarbeidene kan gi veiledning om hva lovgiver mente med «rimelig» – kanskje med eksempler eller tidsangivelser. (2) Rettspraksis kan ha presisert begrepet i lignende saker – for eksempel at reklamasjon innen to måneder normalt er innen «rimelig tid» (jf. Rt. 2010 s. 103). (3) Formålstolkning: Hva er formålet med fristen? Å gi parten tid til å vurdere situasjonen, samtidig som motparten ikke holdes i uvisshet for lenge. (4) Reelle hensyn: Hva er rimelig i den konkrete saken, gitt partenes situasjon? Konklusjonen vil bero på en helhetsvurdering der alle tolkningsfaktorer trekkes inn.',
      },
    },
    {
      id: 'rtl2-2-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-2-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Lag din egen juridiske case med utgangspunkt i et selvvalgt rettsområde (forbrukerrett, arbeidsrett eller strafferett). Formuler faktum, identifiser parter, krav, rettslig grunnlag og problemstilling. Gjennomfør en kort drøfting med IRAC-metoden.',
        hints: [
          'Velg et rettsområde du har kunnskap om.',
          'Lag et realistisk faktum med klare juridiske elementer.',
          'Bruk en konkret lovbestemmelse som rettslig grunnlag.',
          'Følg IRAC-strukturen systematisk.',
        ],
        solution: 'Eksempel: Faktum: Emma (19 år) kjøper en brukt bil fra Bilhuset AS for 150 000 kr. Etter to uker oppdager hun at motoren har en alvorlig feil som selgeren visste om, men ikke opplyste. Parter: Emma (forbruker) og Bilhuset AS (næringsdrivende). Krav: Heving av kjøpet. Rettslig grunnlag: Forbrukerkjøpsloven § 32. Problemstilling: Har Emma rett til å heve kjøpet etter § 32? (I) Se over. (R) § 32 gir hevingsrett dersom mangelen ikke er uvesentlig. (A) En alvorlig motorfeil som selger bevisst har holdt tilbake, utgjør en vesentlig mangel. Selgerens kunnskap om feilen forsterker mangelens karakter. (C) Emma har hevingsrett etter § 32. Elevens egen case bør følge tilsvarende struktur.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Lovtolkning', definition: 'Prosessen med å fastlegge innholdet i en lovbestemmelse ved hjelp av ulike tolkningsfaktorer.' },
    { term: 'Formålstolkning', definition: 'Tolkning av en lovbestemmelse i lys av dens formål – hva lovgiver ønsket å oppnå.' },
    { term: 'Harmonisering', definition: 'Prosessen med å veie rettskilder mot hverandre når de gir motstridende signaler.' },
    { term: 'Innskrenkende tolkning', definition: 'Tolkning der regelen gis et snevrere innhold enn ordlyden tilsier.' },
    { term: 'Utvidende tolkning', definition: 'Tolkning der regelen gis et videre innhold enn ordlyden tilsier (ikke tillatt i strafferettens disfavør).' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const RETTSLAERE_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_2_1,
  CHAPTER_RETTSLAERE_2_2_2,
  CHAPTER_RETTSLAERE_2_2_3,
  CHAPTER_RETTSLAERE_2_2_4,
  CHAPTER_RETTSLAERE_2_2_5,
];

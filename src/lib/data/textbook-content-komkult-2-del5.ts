/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3) - Del 5: Visuell kommunikasjon
 *
 * Kapittel 5.1-5.5
 *
 * LK20-kompetansemaal:
 * - analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening
 * - droefte samspillet mellom bilde, tekst og design i ulike medier
 * - vurdere bruk av visuelle virkemidler i retorikk og paavirkning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Bildesprak og komposisjon
// ============================================================================

export const CHAPTER_KOMKULT2_5_1: TextbookChapter = {
  id: 'komkult2-5-1',
  courseId: 'komkult-2',
  chapterNumber: '5.1',
  title: 'Bildesprak og komposisjon',
  description: 'Bildeanalyse, komposisjonsprinsipper, denotasjon og konnotasjon, fargebruk og visuelle virkemidler i kommunikasjon.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening',
    'droefte samspillet mellom bilde, tekst og design i ulike medier',
  ],
  content: [
    {
      id: 'kk2-5-1-intro',
      type: 'text',
      content: `## Bildesprak og komposisjon

Bilder er overalt i hverdagen var. Fra reklame og nyhetsmedier til sosiale medier og kunst - visuelle uttrykk former hvordan vi forstaar verden rundt oss. Men bilder er ikke noeytrale. De er konstruert av noen, med bestemte valg knyttet til komposisjon, farger, perspektiv og utsnitt. Aa forstaa bildesprak er derfor avgjoerende for aa kunne tolke og vurdere visuell kommunikasjon kritisk.

I dette kapittelet skal du laere:
- Hva denotasjon og konnotasjon betyr i bildeanalyse
- Hvordan komposisjonsprinsipper styrer blikket og skaper mening
- Hvilken rolle farger spiller i visuell kommunikasjon
- Hvordan du kan analysere bilder systematisk`,
    },
    {
      id: 'kk2-5-1-def-1',
      type: 'definition',
      title: 'Denotasjon og konnotasjon',
      content: `**Denotasjon** er det vi bokstavelig talt ser i et bilde - de konkrete elementene som kan beskrives objektivt. For eksempel: en kvinne sitter pa en benk i en park, hun holder en bok, solen skinner.

**Konnotasjon** er de assosiasjonene og meningene vi knytter til det vi ser. Bildet av kvinnen med boken i parken kan konnotere ro, frihet, dannelse, ensomhet eller fritid - avhengig av konteksten og mottakerens bakgrunn.

Semiotikeren **Roland Barthes** utviklet denne tilnaermingen til bildeanalyse. Han mente at bilder alltid kommuniserer pa to nivaaer: det bokstavelige (denotasjon) og det kulturelle (konnotasjon). For aa forstaa et bilde fullt ut maa vi analysere begge nivaaene.`,
    },
    {
      id: 'kk2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Denotasjon og konnotasjon i reklame',
      content: `Tenk deg en reklame for en bil. Pa det denotative nivaaet ser vi en blank, moerk bil som kjoerer langs en oede fjellvei ved solnedgang. En mann i dress sitter bak rattet.

Pa det konnotative nivaaet kommuniserer bildet noe langt mer:
- **Fjellveien** konnoterer frihet, eventyr og uavhengighet
- **Solnedgangen** konnoterer skjoennhet, romantikk og det eksklusive
- **Den moerke bilen** konnoterer kraft, luksus og eleganse
- **Mannen i dress** konnoterer suksess, status og kontroll

Ingenting av dette er tilfeldig. Reklamebyraet har bevisst valgt hvert element for aa skape en bestemt foelelse og koble den til produktet. Mottakeren skal assosiere bilen med frihet og suksess, ikke med rushtrafikk og bompenger.`,
    },
    {
      id: 'kk2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom denotasjon og konnotasjon i bildeanalyse?',
        options: [
          { id: 'a', text: 'Denotasjon handler om fargene i bildet, konnotasjon handler om formene', isCorrect: false },
          { id: 'b', text: 'Denotasjon er det vi bokstavelig ser, konnotasjon er assosiasjonene og meningene vi knytter til det vi ser', isCorrect: true },
          { id: 'c', text: 'Denotasjon er avsenderens intensjon, konnotasjon er mottakerens reaksjon', isCorrect: false },
          { id: 'd', text: 'Denotasjon brukes i kunst, konnotasjon brukes i reklame', isCorrect: false },
        ],
        solution: 'Denotasjon er det bokstavelige, objektive innholdet i bildet - det vi kan beskrive uten tolkning. Konnotasjon er de assosiasjonene, foelelsene og kulturelle meningene vi knytter til det vi ser. For eksempel er en roed rose pa det denotative nivaaet en blomst, men pa det konnotative nivaaet kan den bety kjaerlighet, lidenskap eller sorg.',
      },
    },
    {
      id: 'kk2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        task: 'Velg et reklamebilde fra en avis eller et nettsted. Beskriv foerst det denotative innholdet (hva du bokstavelig ser), og analyser deretter de konnotative meningene (hva bildet kommuniserer ut over det bokstavelige). Hvilke valg har avsenderen gjort for aa skape disse konnotasjonene?',
        hints: ['Start med aa beskrive alle konkrete elementer i bildet foer du begynner aa tolke.'],
        solution: 'Et godt svar skiller tydelig mellom denotasjon og konnotasjon. Det denotative nivaaet beskrives objektivt (hva man ser), mens det konnotative nivaaet analyserer hvilke assosiasjoner og meninger elementene skaper. Svaret boer ogsa vise forstaelse for at konnotasjonene er bevisste valg fra avsenderens side - farger, komposisjon, modeller og setting er valgt for aa skape bestemte assosiasjoner hos mottakeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-1-def-2',
      type: 'definition',
      title: 'Komposisjonsprinsipper',
      content: `**Komposisjon** handler om hvordan elementer er organisert i et bilde. Komposisjonen styrer mottakerens blikk og pavirker hvordan bildet oppfattes.

**Tredjedelsregelen:** Bildet deles i ni like deler med to horisontale og to vertikale linjer. De viktigste elementene plasseres langs linjene eller i skjaeringspunktene for aa skape balanse og dynamikk.

**Gyllent snitt:** Et proporsjonssystem der forholdene mellom delene oppleves som harmoniske. Brukt i kunst og fotografi i hundrevis av aar.

**Symmetri og asymmetri:** Symmetriske komposisjoner gir inntrykk av orden, stabilitet og hoetidelighet. Asymmetriske komposisjoner skaper spenning, dynamikk og bevegelse.

**Dybde og linjer:** Ledende linjer styrer blikket inn i bildet. Forkortning og overlapping skaper dybde og romfoelelse.

**Utsnittet:** Hva som er med i bildet og hva som er utelatt, er et av de viktigste komposisjonelle valgene. Naerbilder skaper intimitet, oversiktsbilder gir kontekst.`,
    },
    {
      id: 'kk2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        task: 'Hva innebærer tredjedelsregelen i bildekomposisjon?',
        options: [
          { id: 'a', text: 'At bildet skal inneholde noeaktig tre elementer', isCorrect: false },
          { id: 'b', text: 'At viktige elementer plasseres langs linjer som deler bildet i ni like deler', isCorrect: true },
          { id: 'c', text: 'At en tredjedel av bildet skal vaere tomt', isCorrect: false },
          { id: 'd', text: 'At bildet skal beskjaeres til en tredjedel av originalstoerelsen', isCorrect: false },
        ],
        solution: 'Tredjedelsregelen innebærer at bildet deles i ni like deler med to horisontale og to vertikale linjer. De viktigste elementene plasseres langs disse linjene eller i skjaeringspunktene. Dette skaper en mer dynamisk og visuelt tiltalende komposisjon enn aa plassere hovedmotivet midt i bildet.',
      },
    },
    {
      id: 'kk2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Forklar hvordan farger brukes som virkemiddel i visuell kommunikasjon. Gi eksempler pa hvordan ulike farger kan konnotere forskjellige foelelser eller verdier.',
        hints: ['Tenk pa hvordan roede, blaa og groenne farger brukes i reklame, politikk og merkevarebygging.'],
        solution: 'Farger er et sentralt virkemiddel i visuell kommunikasjon. Roedt konnoterer ofte lidenskap, frykt, energi eller stopp/fare. Blaat konnoterer tillit, ro, profesjonalitet og kompetanse (mange banker og teknologiselskaper bruker blaat). Groent konnoterer natur, bærekraft, vekst og helse. Svart konnoterer luksus, makt, eleganse eller sorg. Hvitt konnoterer renhet, enkelhet og uskyld. Fargevalg i reklame, politikk og merkevarebygging er sjelden tilfeldige - de er bevisste strategier for aa pavirke mottakerens foelelser og assosiasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Denotasjon** er det bokstavelige innholdet i et bilde, **konnotasjon** er de kulturelle meningene og assosiasjonene
- **Roland Barthes** utviklet skillet mellom denotasjon og konnotasjon i bildeanalyse
- **Komposisjon** handler om hvordan elementer er organisert i bildet
- **Tredjedelsregelen** og **gyllent snitt** er sentrale komposisjonsprinsipper
- **Farger** kommuniserer foelelser og verdier og brukes strategisk i visuell kommunikasjon
- Alle visueller valg - utsnitt, perspektiv, farge, komposisjon - er med pa aa forme meningen i bildet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'Sammenlign to bilder av samme hendelse fra to ulike nyhetsmedier. Analyser hvordan ulike komposisjonsvalg (utsnitt, perspektiv, farger) pavirker oppfatningen av hendelsen. Hva forteller forskjellene om medienes vinkling?',
        hints: ['Se etter forskjeller i utsnitt, perspektiv og hvilke elementer som er fremhevet.'],
        solution: 'Et godt svar velger to konkrete bilder og analyserer komposisjonsforskjellene systematisk. Svaret boer vise at ulike utsnitt (naerbilde vs. oversiktsbilde), perspektiver (ovenfra, underfra, i oeyehoyde) og fargetemperaturer kan gi vidt forskjellige inntrykk av den samme hendelsen. For eksempel kan et naerbilde av en sint demonstrant gi inntrykk av vold, mens et oversiktsbilde av den samme demonstrasjonen kan vise en fredelig folkemengde. Svaret boer reflektere over at bilderedaktoerens valg er en form for vinkling, paa linje med ordvalg i tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        task: 'Gjennomfoer en fullstendig bildeanalyse av et valgfritt bilde (reklame, kunst eller pressefoto). Bruk begrepene denotasjon, konnotasjon, komposisjon og farge i analysen din.',
        hints: ['Strukturer analysen: beskriv foerst hva du ser (denotasjon), deretter hva det betyr (konnotasjon), og analyser til slutt de visuelle virkemidlene.'],
        solution: 'Et godt svar er strukturert og bruker fagbegrepene presist. Foerst beskrives det denotative innholdet objektivt. Deretter analyseres konnotasjonene med referanse til kulturelle koder og kontekst. Komposisjonen vurderes (tredjedelsregelen, symmetri, ledende linjer, utsnitt) og fargebruken analyseres med hensyn til konnotasjoner. Svaret boer ogsa vurdere maalgruppe, avsender og formaal med bildet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Denotasjon', definition: 'Det bokstavelige, objektive innholdet i et bilde - det vi kan beskrive uten tolkning.' },
    { term: 'Konnotasjon', definition: 'De assosiasjonene, foelelsene og kulturelle meningene vi knytter til det vi ser i et bilde.' },
    { term: 'Komposisjon', definition: 'Maten elementer er organisert i et bilde, som styrer blikket og skaper mening.' },
    { term: 'Tredjedelsregelen', definition: 'Komposisjonsprinsipp der viktige elementer plasseres langs linjer som deler bildet i ni deler.' },
    { term: 'Roland Barthes', definition: 'Semiotiker som utviklet skillet mellom denotasjon og konnotasjon i bildeanalyse.' },
  ],
};

// ============================================================================
// Kapittel 5.2: Visuell retorikk
// ============================================================================

export const CHAPTER_KOMKULT2_5_2: TextbookChapter = {
  id: 'komkult2-5-2',
  courseId: 'komkult-2',
  chapterNumber: '5.2',
  title: 'Visuell retorikk',
  description: 'Retoriske appellformer i bilder, visuell argumentasjon, bildemanipulasjon i paavirkning og forankring mellom tekst og bilde.',
  estimatedMinutes: 24,
  competenceGoals: [
    'vurdere bruk av visuelle virkemidler i retorikk og paavirkning',
    'analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening',
  ],
  content: [
    {
      id: 'kk2-5-2-intro',
      type: 'text',
      content: `## Visuell retorikk

Retorikk handler ikke bare om ord. Bilder kan overbevise, appellere til foelelser og bygge troverdighet pa mange av de samme maatene som tekst og tale. Visuell retorikk undersoekerr hvordan bilder brukes strategisk for aa pavirke mottakernes holdninger, foelelser og handlinger.

I dette kapittelet skal du laere:
- Hvordan etos, patos og logos fungerer i bilder
- Hva visuell argumentasjon innebærer
- Hvordan forankring mellom tekst og bilde styrer tolkningen
- Hvordan bilder brukes retorisk i reklame, politikk og nyhetsmedier`,
    },
    {
      id: 'kk2-5-2-def-1',
      type: 'definition',
      title: 'Visuell retorikk',
      content: `**Visuell retorikk** er studiet av hvordan bilder og visuelle uttrykk brukes for aa overbevise, pavirke og kommunisere mening. Begrepet bygger pa den klassiske retorikkens appellformer, men overfører dem til det visuelle omraadet:

**Visuelt etos** handler om hvordan bilder bygger troverdighet. Profesjonell design, offisielle logoer, bilder av eksperter i hvite frakker og autoriserte stempler skaper tillit. Amatormessig utseende svekker troverdigheten.

**Visuelt patos** handler om hvordan bilder vekker foelelser. Et bilde av et sultent barn vekker medlidenhet. Et majestetisk fjelllandskap vekker aerefrykt. Et bilde av en lykkelig familie vekker laengsel og tilhoerighet. Patos er ofte den sterkeste visuelle appellformen fordi bilder treffer foelelsene raskere enn ord.

**Visuelt logos** handler om hvordan bilder formidler informasjon og logikk. Diagrammer, grafer, infografikk og tekniske illustrasjoner appellerer til fornuften ved aa presentere data visuelt.`,
    },
    {
      id: 'kk2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Visuell retorikk i veldedighetsreklame',
      content: `En veldedighetsorganisasjon lager en kampanje for aa samle inn penger til rent vann i utviklingsland.

**Visuelt patos:** Hovedbildet viser et lite barn med stoere oeyne som drikker skittent vann fra en poeyl. Bildet er naert, personlig og foelelsesladet. Det tvinger betrakteren til aa se barnet som et individ, ikke en statistikk.

**Visuelt etos:** Organisasjonens logo er tydelig plassert, sammen med FNs baerekraftsmaal-ikon. Bildet av en kjent ambassadoer gir ytterligere troverdighet. Profesjonelt design signaliserer seriøsitet.

**Visuelt logos:** En infografikk viser at 785 millioner mennesker mangler tilgang til rent vann, og at en donasjon pa 50 kroner kan gi ett barn rent vann i en maned. Tallene gir en rasjonell grunn til aa handle.

De tre appellformene arbeider sammen: Patos vekker foelelsen, etos skaper tillit, og logos gir den rasjonelle begrunnelsen for aa donere.`,
    },
    {
      id: 'kk2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hvilken visuell appellform brukes primaert naar en reklame viser et bilde av en lege i hvit frakk som anbefaler et produkt?',
        options: [
          { id: 'a', text: 'Visuelt patos - appell til foelelsene', isCorrect: false },
          { id: 'b', text: 'Visuelt logos - appell til fornuften', isCorrect: false },
          { id: 'c', text: 'Visuelt etos - appell til troverdighet', isCorrect: true },
          { id: 'd', text: 'Visuell metafor - overfoert betydning', isCorrect: false },
        ],
        solution: 'Naar en reklame viser en lege i hvit frakk, bygger den pa visuelt etos - appell til troverdighet og autoritet. Den hvite frakken konnoterer medisinsk ekspertise og paalitelighet. Mottakeren overforer tilliten til legen over pa produktet, selv om "legen" ofte er en skuespiller.',
      },
    },
    {
      id: 'kk2-5-2-def-2',
      type: 'definition',
      title: 'Forankring og avloesning',
      content: `**Forankring** (anchorage) er et begrep fra Roland Barthes som beskriver hvordan tekst styrer tolkningen av et bilde. Teksten "forankrer" bildet i en bestemt mening og begrenser de mulige konnotasjonene.

Eksempel: Et bilde av en person som loeper kan bety trening, flukt, glede eller hastverk. Teksten "Marat0n-Kristin setter ny personlig rekord" forankrer bildet i en bestemt mening: idrettspreestasjon.

**Avloesning** (relay) er det motsatte: tekst og bilde supplerer hverandre og forteller ulike deler av en historie, som i en tegneserie der bildet viser handlingen og snakkeboblene gir dialogen.

Forstaelsen av forankring er viktig fordi den viser hvordan mening skapes i samspillet mellom tekst og bilde - og hvordan den som kontrollerer teksten, kontrollerer tolkningen av bildet.`,
    },
    {
      id: 'kk2-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Forankring i nyhetsmedier',
      problem: 'Hvordan kan ulike bildetekster endre meningen til det samme bildet?',
      solution: `Tenk deg et pressefoto av en folkemengde i en bygate. Bildet kan forankres pa svært forskjellige maater:

**Bildetekst A:** "Tusenvis av glade innbyggere feirer nasjonaldagen."
**Bildetekst B:** "Demonstrantene samler seg for aa protestere mot de nye lovforslagene."
**Bildetekst C:** "Evakuering av sentrum etter bombetrusselen."

Det er det samme bildet, men tre helt ulike betydninger. Teksten forankrer bildet i en bestemt kontekst og styrer mottakerens tolkning fullstendig. Dette viser hvor mektig forankringsfunksjonen er, og hvorfor det er viktig aa vaere bevisst pa samspillet mellom tekst og bilde - særlig i nyhetsmedier der bildet gir inntrykk av objektivitet.`,
    },
    {
      id: 'kk2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        task: 'Forklar begrepene forankring og avloesning. Finn et eget eksempel pa forankring i en nyhetsartikkel, og vis hvordan bildeteksten styrer tolkningen av bildet.',
        hints: ['Tenk pa hvordan den samme nyhetsfotoen kan tolkes forskjellig med ulike bildetekster.'],
        solution: 'Forankring betyr at teksten styrer tolkningen av bildet ved aa begrense de mulige konnotasjonene. Avloesning betyr at tekst og bilde supplerer hverandre med ulik informasjon. Et godt eksempel pa forankring kan vaere et nyhetsfoto der bildeteksten setter bildet i en bestemt politisk, sosial eller kulturell kontekst. Svaret boer vise forstaelse for at den som skriver bildeteksten har makt over hvordan bildet tolkes, og at dette er et sentralt verktoy i medienes vinklingspraksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-2-text-2',
      type: 'text',
      title: 'Visuell argumentasjon i politisk kommunikasjon',
      content: `### Visuell argumentasjon i politikk

Bilder brukes aktivt i politisk kommunikasjon for aa bygge opp et bestemt image og pavirke velgernes oppfatning:

- **Iscenesettelse:** Politikere fotograferes i settinger som forsterker onsket budskap - pa besok hos bedrifter, paa sykehus, med barn eller i naturen
- **Maktposering:** Lav kameravinkel far politikeren til aa se mektig ut. Bruk av nasjonale symboler konnoterer patriotisme
- **Naerhet og varme:** Bilder der politikere snakker med vanlige mennesker, holder barn eller viser foelelser konnoterer empati
- **Kontrastbilder:** Propaganda bruker ofte kontrastbilder - "oss mot dem" - for aa forsterke gruppetilhoerighet og fiendebilde

I tillegg brukes visuell retorikk i politiske kampanjer, valgplakater og sosiale medier for aa skape gjenkjennelse, tillit og foelelsesmessig engasjement.`,
    },
    {
      id: 'kk2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        task: 'Hva betyr forankring i sammenhengen mellom tekst og bilde?',
        options: [
          { id: 'a', text: 'At bildet er festet til en bestemt posisjon pa siden', isCorrect: false },
          { id: 'b', text: 'At teksten styrer og begrenser tolkningen av bildet', isCorrect: true },
          { id: 'c', text: 'At bildet og teksten forteller noyaktig det samme', isCorrect: false },
          { id: 'd', text: 'At bildet er den viktigste delen av budskapet', isCorrect: false },
        ],
        solution: 'Forankring (anchorage) er Roland Barthes\' begrep for hvordan teksten styrer og begrenser tolkningen av et bilde. Uten tekst er et bilde aapent for mange mulige tolkninger. Teksten "forankrer" bildet i en bestemt mening ved aa velge ut hvilke konnotasjoner som skal aktiveres. Dette er et sentralt maktverktoy i mediekommunikasjon.',
      },
    },
    {
      id: 'kk2-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Visuell retorikk** handler om hvordan bilder brukes for aa overbevise og pavirke
- **Visuelt etos** bygger troverdighet gjennom profesjonelt design og autoritetsmarkorer
- **Visuelt patos** appellerer til foelelser gjennom sterke, personlige bilder
- **Visuelt logos** formidler informasjon og logikk gjennom grafer, diagrammer og infografikk
- **Forankring** er tekstens evne til aa styre tolkningen av et bilde
- **Avloesning** betyr at tekst og bilde supplerer hverandre med ulik informasjon
- Visuell retorikk brukes aktivt i reklame, politikk og nyhetsmedier`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Velg en valgplakat eller politisk kampanjeplakat. Analyser hvilke visuelle retoriske virkemidler som brukes. Identifiser bruken av etos, patos og logos i bildet, og vurder hvem maalgruppen er.',
        hints: ['Se etter fargevalg, kroppssprak, symboler og tekst-bilde-samspill.'],
        solution: 'Et godt svar velger en konkret plakat og analyserer de visuelle appellformene. Etos kan vises gjennom autoriserte symboler, profesjonelt design eller avsenderens posisjon. Patos kan vises gjennom bilder av mennesker, foelelsesladde motiver eller sterke farger. Logos kan vises gjennom statistikk, fakta eller logiske sammenstillinger. Svaret boer ogsa vurdere maalgruppen og diskutere om de retoriske valgene er effektive for aa naa den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Skriv tre ulike bildetekster til det samme tenkte bildet (beskriv bildet foerst). Vis hvordan forankringen endrer meningen til bildet i hver versjon. Drøft deretter hva dette forteller om maktforholdet mellom tekst og bilde.',
        solution: 'Et godt svar beskriver et konkret bilde og lager tre bildetekster som gir bildet helt forskjellige meninger. Droeftingen boer vise forstaelse for at den som kontrollerer teksten ogsa kontrollerer bildets mening, og at dette er en form for makt - særlig i nyhetsmedier, der mottakeren ofte tar for gitt at bildeteksten er noeytral og objektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-2-ex-6',
        number: '5.2.6',
        type: 'multiple-choice',
        task: 'Hvilket visuelt retorisk grep brukes naar en reklame for forsikring viser bilder av odelagte hus etter en naturkatastrofe?',
        options: [
          { id: 'a', text: 'Visuelt etos - for aa vise selskapets troverdighet', isCorrect: false },
          { id: 'b', text: 'Visuelt logos - for aa vise statistikk over skader', isCorrect: false },
          { id: 'c', text: 'Visuelt patos - for aa vekke frykt og motivere til handling', isCorrect: true },
          { id: 'd', text: 'Visuell forankring - for aa styre tolkningen', isCorrect: false },
        ],
        solution: 'Bilder av odelagte hus etter en naturkatastrofe appellerer primaert til visuelt patos - de vekker foelelser som frykt, uro og usikkerhet. Malet er at mottakeren skal foele et behov for beskyttelse og dermed motiveres til aa kjoepe forsikring. Fryktappeller er blant de sterkeste formene for visuelt patos.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Visuell retorikk', definition: 'Studiet av hvordan bilder og visuelle uttrykk brukes for aa overbevise og pavirke.' },
    { term: 'Visuelt etos', definition: 'Bilders evne til aa bygge troverdighet gjennom profesjonelt design og autoritetsmarkorer.' },
    { term: 'Visuelt patos', definition: 'Bilders evne til aa appellere til foelelser for aa pavirke mottakerens holdninger.' },
    { term: 'Forankring', definition: 'Tekstens funksjon i aa styre og begrense tolkningen av et bilde (Roland Barthes).' },
    { term: 'Avloesning', definition: 'Naar tekst og bilde supplerer hverandre med ulik informasjon, som i en tegneserie.' },
  ],
};

// ============================================================================
// Kapittel 5.3: Grafisk design og typografi
// ============================================================================

export const CHAPTER_KOMKULT2_5_3: TextbookChapter = {
  id: 'komkult2-5-3',
  courseId: 'komkult-2',
  chapterNumber: '5.3',
  title: 'Grafisk design og typografi',
  description: 'Designprinsipper, typografi, visuelt hierarki, logodesign og sammenheng mellom form og innhold i grafisk kommunikasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening',
    'droefte samspillet mellom bilde, tekst og design i ulike medier',
  ],
  content: [
    {
      id: 'kk2-5-3-intro',
      type: 'text',
      content: `## Grafisk design og typografi

Grafisk design er overalt - fra nettsider og apper til plakater, aviser og emballasje. Et godt grafisk design kommuniserer tydelig og effektivt, mens daarlig design kan forvirre, villede eller fremmedgjoere mottakeren. Typografi - kunsten aa velge og organisere skrift - er en av de viktigste byggesteinene i grafisk design.

I dette kapittelet skal du laere:
- Hva grafisk design er og hvilke prinsipper det bygger pa
- Hvordan typografi kommuniserer mening utover selve teksten
- Hva visuelt hierarki innebærer og hvorfor det er viktig
- Hvordan logoer og visuell identitet skaper gjenkjennelse og tillit`,
    },
    {
      id: 'kk2-5-3-def-1',
      type: 'definition',
      title: 'Grafisk design og designprinsipper',
      content: `**Grafisk design** er kunsten aa organisere tekst, bilder og visuelle elementer for aa kommunisere et budskap effektivt. Gode designere foelger etablerte prinsipper:

**Kontrast:** Ulike elementer maa skille seg tydelig fra hverandre. Kontrast i stoerrelse, farge, form eller vekt skaper visuell interesse og gjor informasjonen lettere aa lese.

**Repetisjon:** Gjentakelse av visuelle elementer (farger, fonter, former) skaper sammenheng og helhet. Et konsekvent design signaliserer profesjonalitet.

**Justering:** Alle elementer boer vaere bevisst plassert i forhold til hverandre. God justering skaper orden, mens tilfeldig plassering gir et rotete inntrykk.

**Naerhet:** Elementer som hoerer sammen, boer plasseres naer hverandre. Gruppering hjelper mottakeren aa forstaa hvilken informasjon som henger sammen.

Disse fire prinsippene forkortes ofte **CRAP** (Contrast, Repetition, Alignment, Proximity) og danner grunnlaget for alt godt grafisk design.`,
    },
    {
      id: 'kk2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Designprinsipper i en nettavis',
      content: `Se for deg forsiden til en norsk nettavis som VG.no:

**Kontrast:** Den stoerste overskriften skiller seg ut med feite bokstaver og stor skrift, slik at du umiddelbart ser toppnyheten. Bilder og tekst har tydelig kontrast.

**Repetisjon:** Samme fonter, farger og layout-moenstre brukes gjennomgaaende. VGs roede farge gaar igjen i logo, overskrifter og knapper - noe som skaper gjenkjennelse.

**Justering:** Tekst og bilder er organisert i et rutenett (grid). Alle overskrifter starter pa samme vertikale linje, noe som skaper orden.

**Naerhet:** Hver nyhetssak har overskrift, ingress og bilde gruppert tett sammen, slik at leseren umiddelbart skjoenner at de hoerer til den samme saken.

Uten disse prinsippene ville nettavisen vaert uleselig - et kaos av tekst og bilder uten struktur.`,
    },
    {
      id: 'kk2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva staar forkortelsen CRAP for i grafisk design?',
        options: [
          { id: 'a', text: 'Color, Resolution, Appearance, Proportion', isCorrect: false },
          { id: 'b', text: 'Contrast, Repetition, Alignment, Proximity', isCorrect: true },
          { id: 'c', text: 'Composition, Rhythm, Arrangement, Pattern', isCorrect: false },
          { id: 'd', text: 'Creativity, Readability, Aesthetic, Purpose', isCorrect: false },
        ],
        solution: 'CRAP staar for Contrast (kontrast), Repetition (repetisjon), Alignment (justering) og Proximity (naerhet). Disse fire prinsippene er grunnlaget for effektivt grafisk design og hjelper med aa skape design som er bade estetisk tiltalende og funksjonelt kommunikativt.',
      },
    },
    {
      id: 'kk2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Velg en nettside, plakat eller emballasje og analyser hvordan designprinsippene kontrast, repetisjon, justering og naerhet er brukt. Hvor fungerer designet godt, og hvor kunne det vaert forbedret?',
        hints: ['Se pa hvordan elementer er gruppert, om det er konsekvent fargebruk og om det er tydelig visuelt hierarki.'],
        solution: 'Et godt svar velger et konkret designeksempel og analyserer hvert av de fire prinsippene. Kontrast vurderes i farger, stoerrelser og typografi. Repetisjon vurderes i konsekvent bruk av visuelle elementer. Justering vurderes i forhold til rutenett og plassering. Naerhet vurderes i gruppering av relatert informasjon. Svaret boer ogsa gi konkrete forslag til forbedringer der designet ikke foelger prinsippene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-3-def-2',
      type: 'definition',
      title: 'Typografi',
      content: `**Typografi** er kunsten og teknikken aa velge, organisere og presentere skrift. Typografi handler om langt mer enn aa velge en "pen font" - skriftvalget kommuniserer mening, setter stemning og pavirker lesbarheten.

**Serif-skrifter** (f.eks. Times New Roman, Georgia) har smaa streker (seriffer) pa bokstavene. De konnoterer tradisjon, seriøsitet og hoetidelighet. Vanlige i aviser, boeker og formelle dokumenter.

**Sans-serif-skrifter** (f.eks. Helvetica, Arial, Open Sans) mangler seriffer. De konnoterer modernitet, enkelhet og renhet. Dominerende pa nettet og i digital design.

**Display-skrifter** (dekorative skrifter) brukes til overskrifter og logoer, og har ofte sterk personlighet - fra elegante kalligrafiske skrifter til roffe, uformelle stiler.

**Visuelt hierarki** i typografi handler om aa bruke stoerrelse, vekt og farge til aa vise hvilken tekst som er viktigst. Overskriften er stoerst, underoverskriften mellom, og broedteksten minst. Dette hjelper leseren aa navigere innholdet.`,
    },
    {
      id: 'kk2-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Typografi som meningsbaerer',
      problem: 'Hvordan kan skriftvalg pavirke oppfatningen av et budskap?',
      solution: `Tenk deg en plakat for en begravelsesbyra. Hvilken font ville du valgt?

**Comic Sans:** Denne uformelle, lekne fonten ville gitt et totalt feil signal. Den konnoterer barnslighet og humor - det motsatte av hoetidelighet og verdighet.

**Times New Roman:** En klassisk serif-font som konnoterer tradisjon og seriøsitet. Et bedre valg, men kanskje litt upersonlig.

**Garamond:** En elegant serif-font med lange, tynne linjer som konnoterer hoetidelighet, verdighet og tidloeshet. Et godt valg.

**Futura:** En moderne sans-serif-font som konnoterer renhet og enkelhet. Kan fungere for et begravelsesbyraa med en minimalistisk profil.

Poenget er at fonten kommuniserer foer leseren har lest et eneste ord. Skriftvalget setter tonen for hele budskapet og maa passe med innholdet og maalgruppen.`,
    },
    {
      id: 'kk2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        task: 'Hvilken type skrift konnoterer typisk tradisjon, seriøsitet og formellhet?',
        options: [
          { id: 'a', text: 'Sans-serif-skrifter som Helvetica og Arial', isCorrect: false },
          { id: 'b', text: 'Serif-skrifter som Times New Roman og Georgia', isCorrect: true },
          { id: 'c', text: 'Display-skrifter som Comic Sans', isCorrect: false },
          { id: 'd', text: 'Monospace-skrifter som Courier', isCorrect: false },
        ],
        solution: 'Serif-skrifter som Times New Roman og Georgia konnoterer tradisjon, seriøsitet og formellhet. Seriffene (de smaa strekene pa bokstavene) gir et klassisk uttrykk som assosieres med trykte medier, akademia og offisielle dokumenter. Sans-serif-skrifter konnoterer derimot modernitet og enkelhet.',
      },
    },
    {
      id: 'kk2-5-3-text-2',
      type: 'text',
      title: 'Logo og visuell identitet',
      content: `### Logo og visuell identitet

En **logo** er et visuelt symbol som representerer en organisasjon, et merke eller et produkt. Logoen er kjernen i en **visuell identitet** - det helhetlige visuelle uttrykket som inkluderer logo, farger, typografi, bildestil og designelementer.

**Typer logoer:**
- **Ordmerke:** Bedriftsnavnet i en distinkt skrifttype (f.eks. Google, Coca-Cola)
- **Bildemerke:** Et symbol eller ikon (f.eks. Apples eple, Nikes "swoosh")
- **Kombinasjonsmerke:** Bade tekst og symbol (f.eks. Adidas, Burger King)
- **Monogram:** Forbokstaver (f.eks. HBO, IBM)

En god logo er **enkel**, **minneverdig**, **tidloes**, **allsidig** og **passende** for maalgruppen. Den maa fungere i alle stoerrelser, bade i farger og svart-hvitt, og kommunisere noe om merkevaren.

Den visuelle identiteten skaper **gjenkjennelse** og **tillit** over tid. Nar du ser den roede Coca-Cola-skriften eller Apples eple, gjenkjenner du merket oeblikkelig - og med det foelger alle assosiasjonene du har til merkevaren.`,
    },
    {
      id: 'kk2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Velg to kjente logoer og analyser dem. Hvilken type logo er det (ordmerke, bildemerke, kombinasjonsmerke)? Hva konnoterer farger, former og typografi? Hvordan bidrar logoen til merkevarens identitet?',
        hints: ['Tenk pa hva logoen kommuniserer foer du vet noe annet om merket.'],
        solution: 'Et godt svar identifiserer logotypen og analyserer de visuelle elementene. For eksempel kan Apples eple analyseres som et bildemerke med rene linjer som konnoterer enkelhet, eleganse og kreativitet. Eplet som symbol konnoterer kunnskap og oppdagelse. Den minimalistiske stilen passer med Apples merkevarelofte om brukervennlig teknologi. Svaret boer vise forstaelse for at logoen er en visuell fortelling om merkevarens verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Grafisk design** organiserer tekst, bilder og visuelle elementer for aa kommunisere effektivt
- **CRAP-prinsippene** (kontrast, repetisjon, justering, naerhet) er grunnlaget for godt design
- **Typografi** kommuniserer mening gjennom skriftvalg, og ulike skrifttyper har ulike konnotasjoner
- **Visuelt hierarki** bruker stoerrelse, vekt og farge til aa vise hva som er viktigst
- **Logoer** er visuelle symboler som representerer merkevarer og organisasjoner
- En **visuell identitet** skaper gjenkjennelse og tillit gjennom konsekvent bruk av visuelle elementer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'Design en enkel logo og visuell profil for en fiktiv bedrift (velg selv type bedrift). Beskriv valgene dine: Hvilken logotype har du valgt? Hvilke farger og fonter? Hvilke konnotasjoner onsker du aa skape? Hvem er maalgruppen?',
        hints: ['Start med aa definere bedriftens verdier og maalgruppe foer du begynner aa designe.'],
        solution: 'Et godt svar viser bevisste designvalg som er begrunnet i kommunikasjonsteori. Logotypen (ordmerke, bildemerke eller kombinasjon) boer passe til bedriftstypen. Fargevalg boer begrunnes med konnotasjoner (f.eks. groent for bærekraft, blaat for tillit). Fonter boer passe til maalgruppen (serif for tradisjon, sans-serif for modernitet). Svaret boer vise forstaelse for at alle designvalg er kommunikative handlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        task: 'Droeft hvordan grafisk design kan brukes til aa pavirke mottakerens oppfatning av troverdighet. Gi eksempler pa hvordan godt og daarlig design kan pavirke tilliten til en nettside, et dokument eller en reklame.',
        solution: 'Et godt svar argumenterer for at grafisk design er et etos-verktoy som pavirker troverdigheten. Godt design med konsekvent typografi, profesjonell layout og gjennomtenkt fargebruk signaliserer kompetanse og paalitelighet. Daarlig design med tilfeldige fonter, uheldige fargekombinasjoner og mangel pa visuelt hierarki svekker troverdigheten - selv om innholdet er korrekt. Eksempler kan inkludere forskjellen mellom en profesjonell nettside og en amatørmessig side, eller et offisielt dokument versus en kopi med daarlig formatering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Grafisk design', definition: 'Kunsten aa organisere tekst, bilder og visuelle elementer for aa kommunisere et budskap effektivt.' },
    { term: 'CRAP-prinsippene', definition: 'Contrast, Repetition, Alignment, Proximity - fire grunnprinsipper for grafisk design.' },
    { term: 'Typografi', definition: 'Kunsten aa velge, organisere og presentere skrift for aa kommunisere mening og sikre lesbarhet.' },
    { term: 'Visuelt hierarki', definition: 'Bruk av stoerrelse, vekt og farge for aa vise hvilken informasjon som er viktigst.' },
    { term: 'Visuell identitet', definition: 'Det helhetlige visuelle uttrykket til en organisasjon: logo, farger, typografi og designelementer.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Fotografi og bildemanipulasjon
// ============================================================================

export const CHAPTER_KOMKULT2_5_4: TextbookChapter = {
  id: 'komkult2-5-4',
  courseId: 'komkult-2',
  chapterNumber: '5.4',
  title: 'Fotografi og bildemanipulasjon',
  description: 'Fotografiets rolle i medier, digital bildemanipulasjon, pressefotografiet, etikk og deepfakes.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening',
    'vurdere bruk av visuelle virkemidler i retorikk og paavirkning',
  ],
  content: [
    {
      id: 'kk2-5-4-intro',
      type: 'text',
      content: `## Fotografi og bildemanipulasjon

Fotografiet har en saeregen makt i visuell kommunikasjon fordi det oppfattes som et direkte avtrykk av virkeligheten. Vi har en tendens til aa tro pa det vi ser i et fotografi paa en annen mate enn vi tror paa en tegning eller et maleri. Men denne tilliten er problematisk, for alle fotografier er konstruerte - og i den digitale tidsalderen kan bilder manipuleres uten at det er mulig aa oppdage med det blotte oye.

I dette kapittelet skal du laere:
- Hvordan fotografiet har vaert brukt i medier og kommunikasjon
- Hva digital bildemanipulasjon innebærer og hvorfor det er problematisk
- Hvilke etiske retningslinjer som gjelder for pressefotografi
- Hva deepfakes er og hvilke utfordringer de skaper`,
    },
    {
      id: 'kk2-5-4-def-1',
      type: 'definition',
      title: 'Fotografiets troverdighet',
      content: `Fotografiets makt bygger pa det semiotikeren Charles Sanders Peirce kalte **indeksikalitet** - at fotografiet oppfattes som et direkte spor av virkeligheten, paa linje med et fingeravtrykk. Nar vi ser et fotografi, antar vi at det som er avbildet faktisk har eksistert foran kameraet.

Denne indeksikale egenskapen gir fotografiet en **sannhetseffekt** som andre visuelle uttrykk ikke har i samme grad. Et pressefoto virker mer overbevisende enn en illustrasjon av den samme hendelsen.

Men fotografiet er aldri noytralt:
- **Utsnitt:** Fotografen velger hva som er med og hva som er utenfor bildet
- **Tidspunkt:** Oeyeblikket bildet tas pavirker hva som formidles
- **Vinkling:** Kameravinkel, avstand og perspektiv former oppfatningen
- **Etterbehandling:** Lys, kontrast, farger og beskjaering kan endres digitalt

Selv uten bevisst manipulasjon er et fotografi alltid et resultat av valg. Fotografiets troverdighet er derfor bade dets stoerste styrke og dets stoerste sarbarhet.`,
    },
    {
      id: 'kk2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Fotografiets makt i nyhetsmedier',
      content: `Noen pressefotografier har endret historien. De viser hvordan et enkelt bilde kan forme opinionen og pavirke politiske beslutninger:

**"Napalmpiken" (1972):** Nick Uts bilde av en naken jente som flykter fra et napalmangrep i Vietnam ble et av de viktigste bildene fra Vietnamkrigen. Bildet vekket enormt patos og bidro til aa snu opinionen mot krigen.

**"Gutten pa stranden" (2015):** Fotografiet av den tre aar gamle syriske flyktningen Alan Kurdi, som druknet under en flukt over Middelhavet, endret debatten om flyktningkrisen i Europa over natten. Bildet personifiserte tragedien og vekket sterk medfoeelse.

Begge bildene viser hvordan et enkelt fotografi kan gjore abstrakte konflikter til personlige, foelbare historier. De appellerer til visuelt patos og bruker fotografiets sannhetseffekt til aa skape umiddelbar foelelsesmessig respons.`,
    },
    {
      id: 'kk2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hvorfor har fotografier en sterkere sannhetseffekt enn tegninger eller illustrasjoner?',
        options: [
          { id: 'a', text: 'Fordi fotografier alltid er umanipulerte', isCorrect: false },
          { id: 'b', text: 'Fordi fotografier oppfattes som direkte avtrykk av virkeligheten (indeksikalitet)', isCorrect: true },
          { id: 'c', text: 'Fordi fotografier er vakrere enn tegninger', isCorrect: false },
          { id: 'd', text: 'Fordi fotografier er dyrere aa produsere', isCorrect: false },
        ],
        solution: 'Fotografiets sannhetseffekt bygger pa indeksikalitet - at vi oppfatter fotografiet som et direkte spor av virkeligheten. Vi antar at det som er avbildet faktisk har eksistert foran kameraet. Dette skiller fotografiet fra tegninger og illustrasjoner, som vi vet er konstruert av en kunstner. Men denne tilliten er problematisk, fordi alle fotografier innebærer valg av utsnitt, vinkling og etterbehandling.',
      },
    },
    {
      id: 'kk2-5-4-def-2',
      type: 'definition',
      title: 'Digital bildemanipulasjon',
      content: `**Digital bildemanipulasjon** er endring av fotografier ved hjelp av digital teknologi. Manipulasjon kan spenne fra enkel justering av lys og farge til fullstendig fabrikkering av innhold.

**Nivaaer av manipulasjon:**

1. **Teknisk justering:** Lys, kontrast, hvitbalanse og skarphet. Regnes som akseptabelt i de fleste sammenhenger, inkludert pressefoto.

2. **Estetisk retusjering:** Fjerning av urenheter, glatting av hud, endring av kroppsform. Vanlig i reklame og mote, men kontroversielt paa grunn av urealistiske skjoennhetsidealer.

3. **Innholdsmanipulasjon:** Elementer fjernes, legges til eller flyttes. Eksempler: Fjerne personer fra et bilde, legge til gjenstander, endre bakgrunn. Regnes som uakseptabelt i pressefotografi.

4. **Fullstendig fabrikkering:** Bilder genereres helt fra bunnen av med AI-verktoy, uten noe virkelig fotografi som utgangspunkt.

Med dagens verktoy (Photoshop, AI-genererte bilder) kan manipulasjon gjores saa sofistikert at det er umulig aa oppdage med det blotte oye.`,
    },
    {
      id: 'kk2-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Bildemanipulasjon i reklame og medier',
      problem: 'Hvilke problemer oppstaar naar reklame og medier manipulerer bilder?',
      solution: `**I reklame og mote:** Modeller retusjeres rutinemessig - hud glattes, kropper slankes, ogre forstorres. Forskning viser at dette bidrar til urealistiske skjoennhetsidealer og kan skade særlig unges selvbilde og mentale helse. Flere land, inkludert Norge, har innfoert krav om merking av retusjert reklame (markedsforingsloven paragraf 2, 2022).

**I nyhetsmedier:** Reuters sparket en fotograf i 2006 etter at han brukte Photoshop til aa legge til mer royk i et bilde fra Libanon-krigen. Manipulasjonen ga inntrykk av stoerre oedeleggelse enn det som faktisk var tilfelle. Saken viste at selv smaa endringer kan endre et bildes budskap fundamentalt.

**I politikk:** Autoritære regimer har lang tradisjon for aa retusjere politiske motstandere ut av bilder. I Stalins Sovjetunionen ble utrensede politikere systematisk fjernet fra offisielle fotografier - et visuelt uttrykk for at de ble "slettet fra historien".

Bildemanipulasjon er problematisk fordi det undergraver fotografiets sannhetseffekt og gjor det vanskeligere for mottakeren aa skille ekte fra falskt.`,
    },
    {
      id: 'kk2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'Diskuter om retusjering av reklamebilder boer vaere lovpalagt merket. Hvilke argumenter finnes for og mot merkeplikt? Hvordan pavirker retusjering unges selvbilde?',
        hints: ['Tenk pa markedsforingsloven og hvordan urealistiske bilder kan pavirke mennesker.'],
        solution: 'Argumenter for merkeplikt: Forbrukerne har rett til aa vite at bildet er endret, retusjering skaper urealistiske idealer som skadar selvbilde og mental helse, og det er en form for villedning. Argumenter mot: Vanskelig aa definere grensen mellom akseptabel og uakseptabel retusjering, kan vaere vanskelig aa handheve, og all visuell kommunikasjon innebærer konstruksjon. Svaret boer ogsa droefte forskning som viser sammenheng mellom eksponering for retusjerte bilder og negativt selvbilde, særlig blant unge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-4-text-2',
      type: 'text',
      title: 'Deepfakes og AI-genererte bilder',
      content: `### Deepfakes og AI-genererte bilder

**Deepfakes** er AI-genererte videoer eller bilder der en persons ansikt eller stemme erstattes med en annen persons. Teknologien bruker maskinlæring til aa analysere tusenvis av bilder av en person og deretter gjenskape ansiktet i nye situasjoner.

**Utfordringer med deepfakes:**
- **Desinformasjon:** Falske videoer av politikere som sier ting de aldri har sagt kan pavirke valg og opinion
- **Svindel:** Deepfake-stemmer kan brukes til aa lure ansatte til aa overfoere penger
- **Personlig skadeverk:** Deepfake-pornografi brukes som trakassering og hevnporno
- **Tillitskrise:** Nar alt kan forfalskes, kan vi miste tilliten til alle bilder og videoer

**AI-genererte bilder** (som DALL-E, Midjourney og Stable Diffusion) kan lage fotorealistiske bilder fra tekstbeskrivelser. Disse bildene har aldri eksistert i virkeligheten, men kan vaere umulige aa skille fra ekte fotografier.

Den stoerste utfordringen er kanskje at vi enna ikke har utviklet gode nok verktoy - verken teknologiske eller juridiske - for aa haandtere denne utviklingen. Evnen til aa vurdere bilder kritisk blir derfor stadig viktigere.`,
    },
    {
      id: 'kk2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        task: 'Hva er en deepfake?',
        options: [
          { id: 'a', text: 'Et bilde som er tatt med et avansert kamera', isCorrect: false },
          { id: 'b', text: 'En AI-generert video eller bilde der en persons ansikt eller stemme er byttet ut', isCorrect: true },
          { id: 'c', text: 'Et falskt nyhetsoppslag paa sosiale medier', isCorrect: false },
          { id: 'd', text: 'Et bilde som er forandret med Photoshop', isCorrect: false },
        ],
        solution: 'En deepfake er en AI-generert video eller bilde der maskinlæring brukes til aa erstatte en persons ansikt eller stemme med en annen persons. Teknologien kan skape svært overbevisende, men helt falske videoer. Deepfakes er problematiske fordi de kan brukes til desinformasjon, svindel og personlig skadeverk, og fordi det ofte er svært vanskelig aa oppdage at innholdet er falskt.',
      },
    },
    {
      id: 'kk2-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- Fotografiets makt bygger pa **indeksikalitet** - at vi oppfatter det som et direkte avtrykk av virkeligheten
- Alle fotografier innebærer valg av utsnitt, vinkling og etterbehandling - de er aldri noeytrale
- **Digital bildemanipulasjon** spenner fra enkel justering til fullstendig fabrikkering
- **Retusjering** i reklame skaper urealistiske idealer og er na lovpalagt merket i Norge
- **Deepfakes** og **AI-genererte bilder** skaper nye utfordringer for tillit og sannhetsforstaelse
- Kritisk bildeforstaelse er en avgjørende kompetanse i den digitale tidsalderen`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Droeft denne pastanden: "I en verden der alle bilder kan manipuleres eller AI-genereres, kan vi aldri stole pa fotografier igjen." Er du enig eller uenig? Hvilke konsekvenser faar dette for journalistikk, demokrati og tillit?',
        hints: ['Tenk pa bade teknologiske loesninger og menneskelige kompetanser som kan bidra.'],
        solution: 'Et godt svar drøfter bade mulighetene og begrensningene i bildemanipulasjon. Paa den ene siden har deepfakes og AI svekket fotografiets sannhetseffekt. Pa den andre siden finnes det verktoy og metoder for aa verifisere bilder: metadata-analyse, omvendt bildesok, faktasjekk og blokkjede-basert opprinnelsesmerking. For journalistikken betyr det at kildekritikk maa utvides til ogsa aa gjelde bilder. For demokratiet er utfordringen at felles virkelighetsforstaelse forutsetter tillit til dokumentasjon. Svaret boer vise nyansert forstaelse av at dette er en paagende utvikling med bade risiko og motstrategier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Finn et eksempel pa et kjent pressefoto som har pavirket opinionen. Analyser bildet med begrepene denotasjon, konnotasjon, visuelt patos og indeksikalitet. Hvorfor fikk akkurat dette bildet saa stor gjennomslagskraft?',
        hints: ['Tenk pa hvordan bildet personifiserer en storre konflikt eller krise.'],
        solution: 'Et godt svar analyserer et konkret pressefoto med bruk av relevante fagbegreper. Denotasjon beskriver det bokstavelige innholdet, konnotasjon analyserer meningene, visuelt patos forklarer den foelelsesmessige appellen, og indeksikalitet forklarer hvorfor vi tror pa bildet. Gjennomslagskraften boer forklares med referanse til bade visuelle kvaliteter (naerhet, foelelsesuttrykk, komposisjon) og kontekstuelle faktorer (timing, medielandskap, politisk situasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-4-ex-6',
        number: '5.4.6',
        type: 'multiple-choice',
        task: 'Hvilket av foelgende er et krav i norsk lov for reklamebilder?',
        options: [
          { id: 'a', text: 'Alle reklamebilder maa vaere ubehandlede', isCorrect: false },
          { id: 'b', text: 'Retusjert reklame som endrer kropp maa merkes', isCorrect: true },
          { id: 'c', text: 'Reklame kan ikke bruke modeller under 25 aar', isCorrect: false },
          { id: 'd', text: 'Alle reklamebilder maa godkjennes av Medietilsynet', isCorrect: false },
        ],
        solution: 'Markedsforingsloven ble endret i 2022 og krever at annonsorer merker reklame der utseendet til personer er retusjert eller endret (for eksempel endret kroppsfasong, hudstruktur eller ansiktstrekk). Kravet gjelder reklame i Norge og tar sikte pa aa motvirke urealistiske skjoennhetsidealer, særlig overfor unge. Manglende merking kan medfoere sanksjoner fra Forbrukertilsynet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Indeksikalitet', definition: 'Fotografiets egenskap av aa oppfattes som et direkte avtrykk av virkeligheten.' },
    { term: 'Sannhetseffekt', definition: 'Fotografiets evne til aa overbevise mottakeren om at det avbildede er virkelig.' },
    { term: 'Bildemanipulasjon', definition: 'Endring av fotografier ved hjelp av digital teknologi, fra enkel retusjering til fullstendig fabrikkering.' },
    { term: 'Deepfake', definition: 'AI-generert video eller bilde der en persons ansikt eller stemme erstattes med en annens.' },
    { term: 'Retusjering', definition: 'Digital endring av personers utseende i bilder, for eksempel glatting av hud eller endring av kroppsfasong.' },
  ],
};

// ============================================================================
// Kapittel 5.5: Film og visuell fortelling
// ============================================================================

export const CHAPTER_KOMKULT2_5_5: TextbookChapter = {
  id: 'komkult2-5-5',
  courseId: 'komkult-2',
  chapterNumber: '5.5',
  title: 'Film og visuell fortelling',
  description: 'Filmsprak, kamerateknikker, klipping, lyd, visuell narratologi og analyse av levende bilder.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere visuelle uttrykk og vurdere hvordan de kommuniserer mening',
    'droefte samspillet mellom bilde, tekst og design i ulike medier',
  ],
  content: [
    {
      id: 'kk2-5-5-intro',
      type: 'text',
      content: `## Film og visuell fortelling

Film er det mest kraftfulle visuelle mediet vi har. Gjennom kombinasjonen av levende bilder, lyd, musikk og klipping kan film skape opplevelser som engasjerer mottakeren paa et dypere nivaa enn statiske bilder. Men akkurat som med fotografier er film aldri noeytral - den er konstruert gjennom en rekke bevisste valg.

I dette kapittelet skal du laere:
- Hva filmspraak er og hvilke virkemidler det bestar av
- Hvordan kamerateknikker styrer mottakerens opplevelse
- Hva klipping og redigering betyr for fortellingen
- Hvordan lyd og musikk pavirker mottakerens foelelser
- Hvordan du kan analysere film og video systematisk`,
    },
    {
      id: 'kk2-5-5-def-1',
      type: 'definition',
      title: 'Filmsprak',
      content: `**Filmsprak** er summen av de visuelle, auditive og fortellermessige virkemidlene som brukes i film og video. Akkurat som verbalt spraak har grammatikk og syntaks, har film sitt eget system av konvensjoner som vi alle forstaar intuitivt - selv om vi sjelden tenker bevisst over dem.

De viktigste elementene i filmsparaaket er:

**Mise-en-scene:** Alt som er synlig i bildet - kulisser, kostymer, belysning, skuespillernes plassering og bevegelse. Regissoeren kontrollerer hva kameraet ser.

**Kinematografi:** Kameraarbeidet - innstillinger, vinkler, bevegelse, fokus og perspektiv. Kameraet er tilskuerens oye.

**Klipping (montasje):** Hvordan enkeltstaaende bilder settes sammen til en sammenhengende fortelling. Klippingen styrer tempo, spenning og informasjonsflyt.

**Lyd:** Dialog, lydeffekter, musikk og stillhet. Lydsporet pavirker stemning og foelelser ofte mer enn bildet.

Alle disse elementene virker sammen og skaper en helhetlig visuell fortelling der mottakerens opplevelse er noye styrt av filmskaperen.`,
    },
    {
      id: 'kk2-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Kamerainnstillinger og deres effekt',
      content: `Ulike kamerainnstillinger kommuniserer ulike ting:

**Totalt (establishing shot):** Viser hele omgivelsene. Brukes ofte i aapningen av en scene for aa gi kontekst. Eksempel: Et oversiktsbilde av en by foer handlingen zoomer inn pa en bestemt gate.

**Halvtotalt:** Viser personen fra knærne og opp. Gir bade krossprak og omgivelser. Typisk for dialogscener.

**Halvnaert:** Viser personen fra livet og opp. Fokuserer mer pa ansiktsuttrykk og reaksjoner.

**Naerbilde (close-up):** Viser ansiktet. Skaper intimitet og lar tilskueren lese foelelser. I skrekkefilm brukes naerbilder for aa foersterke frykt.

**Ekstremt naerbilde:** Viser en detalj - et oye, en hand, en drape svette. Forsterker spenningen og tvinger oppmerksomheten mot noe spesifikt.

**Fugleperspektiv:** Kamera ser nedover. Gjor personen liten og sarbar, eller gir et guddommelig overblikk.

**Froskeperspektiv:** Kamera ser oppover. Gjor personen stor, mektig og dominerende.

Valg av innstilling er aldri tilfeldig - det er et retorisk valg som former mottakerens opplevelse.`,
    },
    {
      id: 'kk2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hvilken kameravinkel brukes for aa faa en person til aa fremstaa som mektig og dominerende?',
        options: [
          { id: 'a', text: 'Fugleperspektiv - kamera ser nedover', isCorrect: false },
          { id: 'b', text: 'Froskeperspektiv - kamera ser oppover', isCorrect: true },
          { id: 'c', text: 'Oeyehoyde - kamera er pa samme nivaa som personen', isCorrect: false },
          { id: 'd', text: 'Naerbilde - kamera viser bare ansiktet', isCorrect: false },
        ],
        solution: 'Froskeperspektiv (kamera ser oppover) faar personen til aa fremstaa som stor, mektig og dominerende. Denne teknikken brukes ofte i filmer for aa vise skurker eller autoritære skikkelser. Det motsatte, fugleperspektiv (kamera ser nedover), gjor personen liten og sarbar. Kameravinkelen er et viktig retorisk verktoy i film.',
      },
    },
    {
      id: 'kk2-5-5-def-2',
      type: 'definition',
      title: 'Klipping og montasje',
      content: `**Klipping** (redigering) er prosessen med aa velge ut og sette sammen enkeltstaaende innstillinger til en sammenhengende fortelling. Klippingen er ofte kalt filmens "usynlige kunst" fordi god klipping ikke legges merke til - den foeles naturlig.

**Klippetyper:**
- **Hardt klipp (cut):** Direkte overgang mellom to innstillinger. Den vanligste klippetypen.
- **Overtoning (dissolve):** Ett bilde fades gradvis inn i det neste. Signaliserer ofte tidshopp eller forandring.
- **Sveip (wipe):** Ett bilde skyves ut av det neste. Gir en mer synlig overgang.
- **Fade:** Bildet fades til svart (eller fra svart). Markerer gjerne begynnelse og slutt pa sekvenser.

**Kuleshov-effekten:** Den russiske filmskaperen Lev Kuleshov viste pa 1920-tallet at meningen i et bilde endres avhengig av hva det klippes sammen med. Et noytralt ansikt etterfulgt av mat leses som sult, mens det samme ansiktet etterfulgt av et barn leses som omtanke. Klippingen skaper altsaa mening som ikke finnes i noen av enkeltbildene alene.

**Parallellklipping:** Veksling mellom to handlingsforloep for aa vise at de skjer samtidig. Skaper spenning og forventing om at de to handlingene vil moetes.`,
    },
    {
      id: 'kk2-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Lydens rolle i film',
      problem: 'Hvordan pavirker lyd og musikk mottakerens opplevelse av en filmscene?',
      solution: `Tenk deg en scene der en person gaar gjennom en moerk skog:

**Med uhyggelig musikk:** Mottakeren foeler spenning og frykt. Hvert knepp i skogen foeles som en trussel. Musikken signaliserer fare og faar oss til aa forvente noe skummelt.

**Med glad, luftig musikk:** Den samme skogen foeles fredelig og vakker. Personen ser ut til aa nyte en spasertur. Vi foler oss avslappet og trygge.

**Med stillhet:** Fraværet av musikk skaper en egen type spenning. Vi lytter intenst og legger merke til hvert eneste lyd. Stillheten foeler seg ofte mer uhyggelig enn musikk.

**Med voice-over:** En stemme forteller personens tanker. Vi faar tilgang til indre monolog og forstaar situasjonen pa en helt ny mate.

Lydsporet styrer foelelsene vare uten at vi er bevisst det. Filmmusikkomponist Bernard Herrmann (kjent for Hitchcock-filmer som "Psycho") sa: "Musikken forteller publikum hva de skal foele."`,
    },
    {
      id: 'kk2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        task: 'Forklar Kuleshov-effekten og gi et eget eksempel paa hvordan klipping kan skape mening som ikke finnes i de enkelte bildene. Hvorfor er dette relevant for aa forstaa visuell kommunikasjon?',
        hints: ['Tenk paa hvordan sammensetningen av bilder skaper en ny fortelling.'],
        solution: 'Kuleshov-effekten viser at mottakeren tolker mening inn i sammensetningen av bilder - en mening som ikke finnes i noen av enkeltbildene alene. For eksempel: bilde av et smilende ansikt + bilde av en brudekake = lykke og feiring. Samme ansikt + bilde av en kiste = sorg og tap. Ansiktet er identisk, men klippingen endrer tolkningen fullstendig. Dette er relevant fordi det viser at visuell kommunikasjon ikke bare handler om hva som vises, men om rekkefølgen og konteksten bilder presenteres i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-5-text-2',
      type: 'text',
      title: 'Filmanalyse som metode',
      content: `### Filmanalyse som metode

For aa analysere film og video systematisk kan du bruke foelgende rammeverk:

**1. Innhold (hva):**
- Hva handler filmen om? Hva er temaet?
- Hvilke karakterer og konflikter er sentrale?
- Hva er budskapet eller konklusjonen?

**2. Form (hvordan):**
- Hvordan er kameraarbeidet? Hvilke innstillinger og vinkler brukes?
- Hvordan er klippingen? Raskt eller sakte tempo?
- Hvordan brukes lyd, musikk og stillhet?
- Hvordan er belysningen? Moerkt og uhyggelig eller lyst og aapent?

**3. Kontekst (hvorfor):**
- Hvem er avsenderen og hva er formalet?
- Hvem er maalgruppen?
- I hvilken sammenheng er filmen laget (sjanger, periode, kulturell kontekst)?

**4. Effekt (hva oppnaar den):**
- Hvilke foelelser vekker filmen?
- Hvordan pavirker de visuelle og auditive valgene mottakerens opplevelse?
- Er filmen effektiv i aa formidle sitt budskap?

Denne metoden kan brukes paa alt fra spillefilmer og dokumentarer til reklamefilmer, musikkvideoer og sosiale medier-innhold.`,
    },
    {
      id: 'kk2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        task: 'Hva viste Kuleshov-effekten?',
        options: [
          { id: 'a', text: 'At farger pavirker stemningen i en film', isCorrect: false },
          { id: 'b', text: 'At meningen i et bilde endres avhengig av hva det klippes sammen med', isCorrect: true },
          { id: 'c', text: 'At lydeffekter er viktigere enn musikk', isCorrect: false },
          { id: 'd', text: 'At lange innstillinger er mer effektive enn korte', isCorrect: false },
        ],
        solution: 'Kuleshov-effekten viste at tilskuerne tolker mening ut fra sammenhengen bildene presenteres i. Et noytralt ansikt ble tolket ulikt avhengig av om det ble klippet sammen med mat (sult), et barn (omtanke) eller en kiste (sorg). Klippingen skaper altsaa mening som ikke finnes i noe enkeltbilde alene - dette er et grunnleggende prinsipp i filmens spraak.',
      },
    },
    {
      id: 'kk2-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Filmsprak** bestar av mise-en-scene, kinematografi, klipping og lyd
- **Kamerainnstillinger** (totalt, naerbilde, perspektiv) styrer mottakerens opplevelse og tolkning
- **Klipping** setter bilder sammen og skaper mening som ikke finnes i enkeltbildene
- **Kuleshov-effekten** viser at konteksten endrer tolkningen av et bilde
- **Lyd og musikk** styrer foelelser og stemning, ofte uten at mottakeren er bevisst det
- **Filmanalyse** undersoeker innhold, form, kontekst og effekt systematisk`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Velg en kort filmsekvens (2-5 minutter) fra en film, serie eller dokumentar. Analyser kameraarbeid, klipping, lyd og belysning. Hvordan bidrar de visuelle og auditive virkemidlene til aa formidle stemning, tema og budskap?',
        hints: ['Se sekvensen flere ganger - foerst for helhetsinntrykk, deretter for detaljer i kamera, klipp og lyd.'],
        solution: 'Et godt svar identifiserer spesifikke filmspraklige virkemidler i den valgte sekvensen. Kamerainnstillinger og -vinkler boer beskrives og tolkes (naerbilder for intimitet, totaler for kontekst). Klippetempo og overganger boer analyseres (raskt klipp for spenning, langsomme overganger for ettertanke). Lydens rolle boer vurderes (musikk som setter stemning, lydeffekter som bygger atmosfaere, stillhet som skaper spenning). Svaret boer vise forstaelse for at alle disse elementene virker sammen og er bevisste valg fra filmskaperen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Sammenlign en reklamefilm og en dokumentarsekvens om det samme temaet (for eksempel mat, natur eller teknologi). Analyser hvordan de bruker filmspraak ulikt for aa oppnaa ulike formaal. Hvilken rolle spiller sjangeren for de visuelle valgene?',
        hints: ['Tenk paa forskjellene i tempo, musikk, kamerastil og klipping mellom de to formatene.'],
        solution: 'Et godt svar viser at reklamefilm og dokumentar bruker filmsprak paa forskjellige maater for aa tjene ulike formaal. Reklamefilmen har typisk raskt klippetempo, polert estetikk, stemningsfull musikk og idealiserte bilder for aa vekke foelelser og skape oeysker. Dokumentaren har typisk roligere tempo, mer naturlig lys, intervjuer og observerende kamera for aa skape troverdighet og nærhet til virkeligheten. Svaret boer reflektere over at sjangeren setter rammene for hvilke filmspraklige konvensjoner som brukes, og at mottakerens sjangerforstaelse pavirker tolkningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        task: 'Hva er mise-en-scene i filmanalyse?',
        options: [
          { id: 'a', text: 'Hvordan klippingen er utfoert mellom scenene', isCorrect: false },
          { id: 'b', text: 'Alt som er synlig i bildet: kulisser, kostymer, belysning og skuespillernes plassering', isCorrect: true },
          { id: 'c', text: 'Musikken og lydeffektene i filmen', isCorrect: false },
          { id: 'd', text: 'Kamerabevegelsene gjennom en scene', isCorrect: false },
        ],
        solution: 'Mise-en-scene (fra fransk: "satt i scene") er alt som er synlig i filmbildet: kulisser og lokasjon, kostymer og sminke, belysning, skuespillernes plassering og bevegelse, og rekvisitter. Regissoren bruker mise-en-scene til aa skape en visuell verden som kommuniserer stemning, tema og karakter. Det er ett av de fire hovedelementene i filmspraaket, sammen med kinematografi, klipping og lyd.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Filmsprak', definition: 'Summen av visuelle, auditive og fortellermessige virkemidler som brukes i film og video.' },
    { term: 'Mise-en-scene', definition: 'Alt som er synlig i filmbildet: kulisser, kostymer, belysning og skuespillernes plassering.' },
    { term: 'Kuleshov-effekten', definition: 'At meningen i et bilde endres avhengig av hva det klippes sammen med.' },
    { term: 'Klipping', definition: 'Prosessen med aa velge ut og sette sammen innstillinger til en sammenhengende fortelling.' },
    { term: 'Kinematografi', definition: 'Kameraarbeidet i film: innstillinger, vinkler, bevegelse, fokus og perspektiv.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_5_1,
  CHAPTER_KOMKULT2_5_2,
  CHAPTER_KOMKULT2_5_3,
  CHAPTER_KOMKULT2_5_4,
  CHAPTER_KOMKULT2_5_5,
];

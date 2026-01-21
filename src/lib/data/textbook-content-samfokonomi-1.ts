/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 (VG2 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Hva er samfunnsøkonomi?
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_1: TextbookChapter = {
  id: 'samfokonomi-1-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '1',
  title: 'Hva er samfunnsøkonomi?',
  description: 'En introduksjon til samfunnsøkonomi som fagfelt, grunnleggende begreper og økonomiske aktører.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for hva samfunnsøkonomi handler om',
    'forklare grunnleggende økonomiske begreper',
    'beskrive de viktigste økonomiske aktørene',
  ],
  content: [
    {
      id: 'samfokonomi-1-1-intro',
      type: 'text',
      content: `## Introduksjon til samfunnsøkonomi

Samfunnsøkonomi er studiet av hvordan samfunnet fordeler knappe ressurser mellom konkurrerende behov. Det handler om valgene vi tar som enkeltpersoner, bedrifter og stater når vi ikke kan få alt vi ønsker oss.

**Hvorfor studere samfunnsøkonomi?**
- Forstå hvordan økonomien fungerer
- Ta bedre økonomiske beslutninger
- Forstå politiske debatter om økonomi
- Bidra til et bedre samfunn

**Samfunnsøkonomiens to hovedgrener:**
- **Mikroøkonomi:** Studerer enkeltaktører som husholdninger og bedrifter
- **Makroøkonomi:** Studerer økonomien som helhet (BNP, arbeidsledighet, inflasjon)`,
    },
    {
      id: 'samfokonomi-1-1-def-1',
      type: 'definition',
      title: 'Knapphet',
      content: `**Knapphet** er det grunnleggende økonomiske problemet: Vi har ubegrensede behov og ønsker, men begrensede ressurser til å tilfredsstille dem.

Knapphet tvinger oss til å gjøre valg. Når vi velger én ting, må vi gi opp noe annet. Dette gjelder for:
- Enkeltpersoner (tid, penger)
- Bedrifter (kapital, arbeidskraft)
- Staten (skatteinntekter, budsjetter)`,
    },
    {
      id: 'samfokonomi-1-1-def-2',
      type: 'definition',
      title: 'Alternativkostnad',
      content: `**Alternativkostnad** (også kalt opportunitetskostnad) er verdien av det beste alternativet du gir opp når du tar et valg.

**Eksempel:** Hvis du velger å studere i stedet for å jobbe, er alternativkostnaden lønnen du kunne tjent.

Alternativkostnad er et sentralt begrep fordi det viser den virkelige kostnaden ved et valg - ikke bare pengene du bruker, men også hva du går glipp av.`,
    },
    {
      id: 'samfokonomi-1-1-def-3',
      type: 'definition',
      title: 'Økonomiske aktører',
      content: `**De fire hovedaktørene i økonomien:**

**1. Husholdninger:**
- Tilbyr arbeidskraft og kapital
- Etterspør varer og tjenester
- Tar spare- og forbruksbeslutninger

**2. Bedrifter:**
- Produserer varer og tjenester
- Etterspør arbeidskraft og kapital
- Søker profitt

**3. Det offentlige (staten):**
- Tilbyr fellesgoder (forsvar, rettsvesen)
- Omfordeler inntekt
- Regulerer økonomien

**4. Utlandet:**
- Handel med varer og tjenester
- Kapitalstrømmer
- Arbeidsmigrasjon`,
    },
    {
      id: 'samfokonomi-1-1-def-4',
      type: 'definition',
      title: 'Produksjonsfaktorer',
      content: `**Produksjonsfaktorer** er ressursene som brukes til å produsere varer og tjenester:

**1. Arbeidskraft (L):**
Menneskelig innsats - både fysisk og mental. Inkluderer kunnskap og ferdigheter (humankapital).

**2. Realkapital (K):**
Produserte produksjonsmidler som maskiner, bygninger, verktøy og infrastruktur.

**3. Naturressurser (N):**
Jord, mineraler, olje, skog, vann og andre naturressurser.

**4. Entreprenørskap:**
Evnen til å kombinere de andre faktorene på nye måter, ta risiko og skape verdier.`,
    },
    {
      id: 'samfokonomi-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Alternativkostnad',
      problem: 'Maria vurderer om hun skal ta et år fri fra studiene for å jobbe. Hva er alternativkostnaden?',
      solution: `**Løsning:**

Alternativkostnaden ved å ta et friår er verdien av det beste alternativet Maria gir opp.

**Hvis hun tar friår:**
- Får: Lønn, arbeidserfaring
- Gir opp: Ett år med studier, raskere ferdig utdanning, potensielt høyere lønn senere

**Alternativkostnaden** er ikke bare det hun tjener eller taper i penger, men også:
- Forsinket karrierestart
- Tapt faglig utvikling
- Mulig tap av studiemotivasjon

**Konklusjon:** Alternativkostnaden ved friåret er verdien av fremgangen i utdanningen hun går glipp av, pluss eventuelle fremtidige inntekter hun taper ved å utsette karrieren.`,
    },
    {
      id: 'samfokonomi-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-1',
        number: '1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det grunnleggende økonomiske problemet som samfunnsøkonomi forsøker å løse?',
        multipleChoiceOptions: [
          'Knapphet - at vi har ubegrensede behov men begrensede ressurser',
          'At det er for mange bedrifter i markedet',
          'At staten har for mye makt',
          'At prisene er for høye',
        ],
        hints: ['Tenk på hvorfor vi må gjøre valg i økonomien'],
        solution: 'Knapphet er det grunnleggende økonomiske problemet. Fordi ressursene er begrensede mens behovene er ubegrensede, må vi gjøre valg om hvordan ressursene skal fordeles.',
      },
    },
    {
      id: 'samfokonomi-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-2',
        number: '1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er alternativkostnad?',
        multipleChoiceOptions: [
          'Verdien av det beste alternativet du gir opp når du tar et valg',
          'Prisen på et alternativt produkt',
          'Kostnaden ved å produsere et alternativ',
          'Forskjellen mellom to priser',
        ],
        hints: ['Tenk på hva du går glipp av når du velger noe'],
        solution: 'Alternativkostnad er verdien av det beste alternativet du gir opp. For eksempel, hvis du bruker tid på å studere, er alternativkostnaden hva du kunne gjort med den tiden i stedet (jobbe, fritid osv.).',
      },
    },
    {
      id: 'samfokonomi-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-3',
        number: '1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er IKKE en produksjonsfaktor?',
        multipleChoiceOptions: [
          'Penger',
          'Arbeidskraft',
          'Realkapital',
          'Naturressurser',
        ],
        hints: ['Produksjonsfaktorer er ressurser som brukes direkte i produksjonen'],
        solution: 'Penger er ikke en produksjonsfaktor, men et byttemiddel. Produksjonsfaktorene er arbeidskraft, realkapital, naturressurser og entreprenørskap. Penger brukes til å anskaffe produksjonsfaktorer, men er ikke selv en faktor i produksjonen.',
      },
    },
    {
      id: 'samfokonomi-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom mikroøkonomi og makroøkonomi, og gi eksempler på problemstillinger innenfor hver gren.',
        hints: ['Mikro handler om enkeltaktører, makro handler om helheten'],
        solution: 'Mikroøkonomi studerer enkeltaktører som husholdninger og bedrifter. Eksempler: Hvordan priser dannes i et marked, hvordan en bedrift maksimerer profitt. Makroøkonomi studerer økonomien som helhet. Eksempler: Hva bestemmer arbeidsledigheten, hvordan påvirker renten inflasjonen, hva driver økonomisk vekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har 10 000 kr og kan enten sette dem i banken til 3% rente eller investere i aksjer der du forventer 8% avkastning. Hva er alternativkostnaden ved å velge banksparing?',
        hints: ['Alternativkostnaden er det du går glipp av ved ikke å velge det beste alternativet'],
        solution: 'Alternativkostnaden ved banksparing er den forventede avkastningen du går glipp av ved ikke å investere i aksjer. Med 10 000 kr: Banksparing gir 300 kr (3%), aksjer forventes å gi 800 kr (8%). Alternativkostnaden er 800 kr - 300 kr = 500 kr, altså den meravkastningen du går glipp av.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-1-ex-6',
        number: '1.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken økonomisk aktør har som hovedoppgave å produsere varer og tjenester?',
        multipleChoiceOptions: [
          'Bedrifter',
          'Husholdninger',
          'Det offentlige',
          'Utlandet',
        ],
        hints: ['Tenk på hvem som ansetter folk for å lage produkter'],
        solution: 'Bedrifter har som hovedoppgave å produsere varer og tjenester. De kombinerer produksjonsfaktorer (arbeidskraft, kapital, naturressurser) for å skape produkter som selges i markedet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Markedet og prisdannelse
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2: TextbookChapter = {
  id: 'samfokonomi-1-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '2',
  title: 'Markedet og prisdannelse',
  description: 'Forstå hvordan markeder fungerer og hvordan priser dannes gjennom samspillet mellom tilbud og etterspørsel.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare hva et marked er og hvordan det fungerer',
    'forstå markedets rolle i ressursallokering',
    'beskrive hvordan priser dannes i et fritt marked',
  ],
  content: [
    {
      id: 'samfokonomi-1-2-intro',
      type: 'text',
      content: `## Hva er et marked?

Et marked er en arena der kjøpere og selgere møtes for å handle varer og tjenester. Markeder kan være fysiske (som et torg) eller digitale (som nettbutikker).

**Markedets funksjoner:**
- Koordinerer økonomiske beslutninger
- Formidler informasjon gjennom priser
- Allokerer ressurser til de som verdsetter dem høyest
- Skaper insentiver for effektivitet

**Typer markeder:**
- Varemarked (forbruksvarer, kapitalvarer)
- Arbeidsmarked (kjøp og salg av arbeidskraft)
- Finansmarked (aksjer, obligasjoner, lån)
- Valutamarked (kjøp og salg av valuta)`,
    },
    {
      id: 'samfokonomi-1-2-def-1',
      type: 'definition',
      title: 'Prissystemet',
      content: `**Prissystemet** er markedsøkonomiens måte å koordinere millioner av beslutninger på.

**Prisenes funksjoner:**
1. **Informasjonsfunksjon:** Priser forteller oss om knapphet og verdi
2. **Allokeringsfunksjon:** Priser fordeler ressurser til høyest verdsatt bruk
3. **Insentivfunksjon:** Priser motiverer produsenter og forbrukere

**Eksempel:** Høy pris på elektrikere signaliserer:
- Til forbrukere: Bruk elektriker sparsommelig
- Til produsenter: Det lønner seg å utdanne flere elektrikere
- Til unge: Elektrikeryrket gir god lønn`,
    },
    {
      id: 'samfokonomi-1-2-def-2',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Markedslikevekt** er den prisen og mengden der tilbud er lik etterspørsel.

I likevekt:
- Det selges nøyaktig så mye som tilbys
- Ingen overskudd eller underskudd
- Ingen krefter som presser prisen opp eller ned

**Likevektspris (P*):** Prisen der tilbudt mengde = etterspurt mengde
**Likevektsmengde (Q*):** Mengden som omsettes i likevekt

Markedet tenderer alltid mot likevekt fordi:
- Overskudd presser prisen ned
- Underskudd presser prisen opp`,
    },
    {
      id: 'samfokonomi-1-2-def-3',
      type: 'definition',
      title: 'Overskudd og underskudd',
      content: `**Overskudd (Overproduksjon):**
Oppstår når prisen er høyere enn likevektsprisen.
- Tilbudt mengde > Etterspurt mengde
- Selgere klarer ikke å selge alt
- Prisen presses ned mot likevekt

**Underskudd (Knapphet):**
Oppstår når prisen er lavere enn likevektsprisen.
- Etterspurt mengde > Tilbudt mengde
- Kjøpere får ikke tak i alt de vil ha
- Prisen presses opp mot likevekt

**Markedets selvregulering:** Frie priser sikrer at markedet automatisk beveger seg mot likevekt.`,
    },
    {
      id: 'samfokonomi-1-2-note-1',
      type: 'note',
      title: 'Adam Smiths usynlige hånd',
      content: `Adam Smith (1723-1790) beskrev markedets koordineringsevne som en "usynlig hånd". Enkeltpersoner som forfølger sine egne interesser, bidrar til samfunnets beste uten å planlegge det.

"Det er ikke av slakterens, ølbryggerens eller bakerens velvilje vi forventer vårt middagsmåltid, men av deres hensyn til sin egen interesse."

Prissystemet koordinerer millioner av beslutninger uten sentral planlegging.`,
    },
    {
      id: 'samfokonomi-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Markedslikevekt',
      problem: 'I markedet for brukte bøker er etterspørselsfunksjonen Q_d = 100 - 2P og tilbudsfunksjonen Q_s = 20 + 3P. Finn likevektspris og likevektsmengde.',
      solution: `**Løsning:**

I likevekt er tilbudt mengde lik etterspurt mengde:
$Q_d = Q_s$

$100 - 2P = 20 + 3P$

Løser for P:
$100 - 20 = 3P + 2P$
$80 = 5P$
$P^* = 16$ kr

Setter inn i en av funksjonene for å finne mengden:
$Q^* = 100 - 2(16) = 100 - 32 = 68$ bøker

**Svar:** Likevektsprisen er 16 kr og likevektsmengden er 68 bøker.`,
    },
    {
      id: 'samfokonomi-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-1',
        number: '2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er markedslikevekt?',
        multipleChoiceOptions: [
          'Prisen der tilbudt mengde er lik etterspurt mengde',
          'Den høyeste prisen i markedet',
          'Den laveste prisen i markedet',
          'Gjennomsnittsprisen over tid',
        ],
        hints: ['Tenk på når markedet er i balanse'],
        solution: 'Markedslikevekt er prisen der tilbudt mengde er lik etterspurt mengde. I dette punktet er det verken overskudd eller underskudd i markedet.',
      },
    },
    {
      id: 'samfokonomi-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-2',
        number: '2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer i et marked der prisen er høyere enn likevektsprisen?',
        multipleChoiceOptions: [
          'Det blir overskudd fordi tilbudet er større enn etterspørselen',
          'Det blir underskudd fordi etterspørselen er større enn tilbudet',
          'Markedet er i perfekt balanse',
          'Prisen vil stige ytterligere',
        ],
        hints: ['Tenk på hva som skjer med tilbud og etterspørsel når prisen er høy'],
        solution: 'Når prisen er høyere enn likevektsprisen, vil det bli overskudd. Høy pris gjør at tilbyderne vil selge mye, men kjøperne vil kjøpe lite. Resultatet er at tilbudet overstiger etterspørselen.',
      },
    },
    {
      id: 'samfokonomi-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-3',
        number: '2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken funksjon har IKKE prissystemet?',
        multipleChoiceOptions: [
          'Garantere lik fordeling av goder',
          'Gi informasjon om knapphet',
          'Allokere ressurser',
          'Skape insentiver',
        ],
        hints: ['Markedet fordeler til de som betaler mest, ikke likt'],
        solution: 'Prissystemet garanterer ikke lik fordeling. Tvert imot fordeler markedet goder til de som verdsetter dem høyest (og kan betale). Prisenes funksjoner er å gi informasjon, allokere ressurser og skape insentiver.',
      },
    },
    {
      id: 'samfokonomi-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-4',
        number: '2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I markedet for sykler er etterspørselsfunksjonen Q_d = 500 - 2P og tilbudsfunksjonen Q_s = 100 + 3P. Finn likevektspris og likevektsmengde.',
        hints: ['Sett Q_d = Q_s og løs for P'],
        solution: 'I likevekt: 500 - 2P = 100 + 3P. Løser: 400 = 5P, så P* = 80 kr. Setter inn: Q* = 500 - 2(80) = 340 sykler. Likevektspris er 80 kr og likevektsmengde er 340 sykler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-5',
        number: '2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvordan prissystemet fungerer som en "usynlig hånd" i økonomien. Bruk et eksempel.',
        hints: ['Tenk på hvordan individuelle beslutninger koordineres uten sentral planlegging'],
        solution: 'Prissystemet koordinerer millioner av beslutninger uten at noen planlegger det. Eksempel: Når etterspørselen etter programmerere øker, stiger lønningene. Dette signaliserer til unge at programmering er lønnsomt, og flere velger IT-utdanning. Ingen planlegger dette, men markedet sørger for at tilbudet tilpasser seg etterspørselen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-2-ex-6',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som skjer i et marked når prisen er lavere enn likevektsprisen, og hvordan markedet vil tilpasse seg.',
        hints: ['Tenk på underskudd og prispress'],
        solution: 'Når prisen er under likevekt, blir etterspørselen større enn tilbudet (underskudd). Kjøpere konkurrerer om varene og er villige til å betale mer. Selgere ser at de kan øke prisen. Prisen presses oppover til likevekt er nådd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Tilbud og etterspørsel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3: TextbookChapter = {
  id: 'samfokonomi-1-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '3',
  title: 'Tilbud og etterspørsel',
  description: 'Lær om tilbuds- og etterspørselskurver, faktorer som påvirker dem, og elastisitet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forklare etterspørselskurven og faktorer som påvirker etterspørselen',
    'forklare tilbudskurven og faktorer som påvirker tilbudet',
    'beregne og tolke priselastisitet',
  ],
  content: [
    {
      id: 'samfokonomi-1-3-intro',
      type: 'text',
      content: `## Tilbud og etterspørsel

Tilbud og etterspørsel er de to grunnleggende kreftene som bestemmer priser og mengder i et marked. Ved å forstå disse kan vi forklare og forutsi endringer i markedet.

**Etterspørsel:** Hvor mye kjøperne ønsker å kjøpe ved ulike priser
**Tilbud:** Hvor mye selgerne ønsker å selge ved ulike priser

Samspillet mellom tilbud og etterspørsel bestemmer:
- Markedsprisen
- Hvor mye som omsettes
- Hvordan ressurser fordeles`,
    },
    {
      id: 'samfokonomi-1-3-def-1',
      type: 'definition',
      title: 'Etterspørselsloven',
      content: `**Etterspørselsloven:** Når prisen på en vare øker (ceteris paribus), vil etterspurt mengde avta.

**Hvorfor faller etterspørselen når prisen stiger?**
1. **Substitusjonseffekten:** Varen blir relativt dyrere enn alternativer
2. **Inntektseffekten:** Kjøpernes reelle kjøpekraft reduseres

**Etterspørselskurven** viser sammenhengen mellom pris og etterspurt mengde. Den heller nedover fra venstre mot høyre.

**Ceteris paribus** = "alt annet likt" - vi holder andre faktorer konstante.`,
    },
    {
      id: 'samfokonomi-1-3-def-2',
      type: 'definition',
      title: 'Faktorer som skifter etterspørselskurven',
      content: `Disse faktorene skifter hele etterspørselskurven (ikke bevegelse langs kurven):

**1. Inntekt:**
- Normale goder: Høyere inntekt → høyere etterspørsel
- Mindreverdige goder: Høyere inntekt → lavere etterspørsel

**2. Priser på relaterte goder:**
- Substitutter: Høyere pris på substituttet → høyere etterspørsel
- Komplementer: Høyere pris på komplementet → lavere etterspørsel

**3. Preferanser og smak:**
Endringer i hva folk foretrekker

**4. Forventninger:**
Forventninger om fremtidige priser eller inntekt

**5. Antall kjøpere:**
Flere kjøpere → høyere etterspørsel`,
    },
    {
      id: 'samfokonomi-1-3-def-3',
      type: 'definition',
      title: 'Tilbudsloven',
      content: `**Tilbudsloven:** Når prisen på en vare øker (ceteris paribus), vil tilbudt mengde øke.

**Hvorfor øker tilbudet når prisen stiger?**
- Høyere pris gjør det mer lønnsomt å produsere
- Eksisterende produsenter produserer mer
- Nye produsenter kommer inn i markedet

**Tilbudskurven** viser sammenhengen mellom pris og tilbudt mengde. Den heller oppover fra venstre mot høyre.`,
    },
    {
      id: 'samfokonomi-1-3-def-4',
      type: 'definition',
      title: 'Faktorer som skifter tilbudskurven',
      content: `Disse faktorene skifter hele tilbudskurven:

**1. Produksjonskostnader:**
- Råvarepriser
- Lønninger
- Energikostnader

**2. Teknologi:**
Bedre teknologi → lavere kostnader → økt tilbud

**3. Priser på relaterte goder:**
Hvis det blir mer lønnsomt å produsere noe annet

**4. Forventninger:**
Forventninger om fremtidige priser

**5. Antall tilbydere:**
Flere produsenter → høyere tilbud

**6. Naturforhold:**
Vær, naturkatastrofer (spesielt for jordbruk)`,
    },
    {
      id: 'samfokonomi-1-3-def-5',
      type: 'definition',
      title: 'Priselastisitet i etterspørselen',
      content: `**Priselastisitet** måler hvor følsom etterspørselen er for prisendringer.

$$E_p = \\frac{\\text{Prosentvis endring i mengde}}{\\text{Prosentvis endring i pris}} = \\frac{\\Delta Q / Q}{\\Delta P / P}$$

**Tolkning:**
- |E_p| > 1: Elastisk etterspørsel (følsom for prisendringer)
- |E_p| = 1: Enhetselastisk etterspørsel
- |E_p| < 1: Uelastisk etterspørsel (lite følsom for prisendringer)

**Faktorer som påvirker elastisitet:**
- Tilgjengelighet av substitutter
- Nødvendighetsgode vs. luksusgode
- Andel av budsjettet
- Tidshorisont`,
    },
    {
      id: 'samfokonomi-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av priselastisitet',
      problem: 'Prisen på kinobilletter øker fra 120 kr til 150 kr. Antall solgte billetter faller fra 1000 til 800. Beregn priselastisiteten.',
      solution: `**Løsning:**

Prosentvis endring i pris:
$\\Delta P / P = (150 - 120) / 120 = 30/120 = 0,25 = 25\\%$

Prosentvis endring i mengde:
$\\Delta Q / Q = (800 - 1000) / 1000 = -200/1000 = -0,20 = -20\\%$

Priselastisitet:
$E_p = \\frac{-20\\%}{25\\%} = -0,8$

**Tolkning:** |E_p| = 0,8 < 1, så etterspørselen er uelastisk. En prisøkning på 25% fører bare til 20% nedgang i etterspørselen. Kinobesøk er relativt lite prisfølsomt.`,
    },
    {
      id: 'samfokonomi-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier etterspørselsloven?',
        multipleChoiceOptions: [
          'Når prisen øker, vil etterspurt mengde avta (ceteris paribus)',
          'Når prisen øker, vil etterspurt mengde øke',
          'Etterspørselen er alltid konstant',
          'Prisen bestemmes av etterspørselen alene',
        ],
        hints: ['Tenk på hva som skjer med kjøpslysten når noe blir dyrere'],
        solution: 'Etterspørselsloven sier at når prisen øker, vil etterspurt mengde avta, alt annet likt. Dette skyldes substitusjonseffekten og inntektseffekten.',
      },
    },
    {
      id: 'samfokonomi-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-2',
        number: '3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer med etterspørselskurven for smør hvis prisen på margarin øker?',
        multipleChoiceOptions: [
          'Etterspørselskurven for smør skifter utover (øker)',
          'Etterspørselskurven for smør skifter innover (avtar)',
          'Etterspørselskurven for smør er uendret',
          'Vi beveger oss langs etterspørselskurven for smør',
        ],
        hints: ['Smør og margarin er substitutter'],
        solution: 'Smør og margarin er substitutter. Når prisen på margarin øker, vil flere velge smør i stedet. Dette skifter hele etterspørselskurven for smør utover (økt etterspørsel ved alle priser).',
      },
    },
    {
      id: 'samfokonomi-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-3',
        number: '3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken vare har mest sannsynlig uelastisk etterspørsel?',
        multipleChoiceOptions: [
          'Insulin for diabetikere',
          'Luksushotell',
          'Restaurant-middag',
          'Ny smarttelefon',
        ],
        hints: ['Nødvendighetsgoder har ofte uelastisk etterspørsel'],
        solution: 'Insulin for diabetikere har mest sannsynlig uelastisk etterspørsel. Det er et nødvendighetsgode uten gode substitutter. Diabetikere må ha insulin uansett pris.',
      },
    },
    {
      id: 'samfokonomi-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prisen på kaffe øker fra 50 kr til 60 kr per pakke. Etterspørselen faller fra 200 til 160 pakker. Beregn priselastisiteten og forklar hva resultatet betyr.',
        hints: ['Bruk formelen for priselastisitet'],
        solution: 'Prosentvis prisendring: (60-50)/50 = 20%. Prosentvis mengdeendring: (160-200)/200 = -20%. Elastisitet: -20%/20% = -1. Etterspørselen er enhetselastisk. En 1% prisøkning gir nøyaktig 1% nedgang i etterspørselen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-5',
        number: '3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom bevegelse langs etterspørselskurven og skift i etterspørselskurven. Gi eksempler på hver.',
        hints: ['Prisendring gir bevegelse langs kurven, andre faktorer gir skift'],
        solution: 'Bevegelse langs kurven: Skjer når prisen på selve varen endres. Eksempel: Prisen på is øker, og vi kjøper mindre is. Skift i kurven: Skjer når andre faktorer enn prisen endres. Eksempel: En varm sommer øker etterspørselen etter is ved alle priser (kurven skifter utover).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-3-ex-6',
        number: '3.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med tilbudskurven hvis produksjonskostnadene øker?',
        multipleChoiceOptions: [
          'Tilbudskurven skifter innover (tilbudet avtar)',
          'Tilbudskurven skifter utover (tilbudet øker)',
          'Tilbudskurven er uendret',
          'Vi beveger oss langs tilbudskurven',
        ],
        hints: ['Høyere kostnader gjør det mindre lønnsomt å produsere'],
        solution: 'Når produksjonskostnadene øker, blir det mindre lønnsomt å produsere. Tilbyderne vil tilby mindre ved enhver pris, så tilbudskurven skifter innover.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Markedsformer og konkurranse
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4: TextbookChapter = {
  id: 'samfokonomi-1-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '4',
  title: 'Markedsformer og konkurranse',
  description: 'Lær om ulike markedsformer fra fullkommen konkurranse til monopol, og hvordan konkurranse påvirker effektiviteten.',
  estimatedMinutes: 80,
  competenceGoals: [
    'beskrive ulike markedsformer og deres kjennetegn',
    'forklare hvordan konkurranse påvirker priser og effektivitet',
    'drøfte fordeler og ulemper med ulike markedsformer',
  ],
  content: [
    {
      id: 'samfokonomi-1-4-intro',
      type: 'text',
      content: `## Markedsformer

Markedsstrukturen påvirker hvordan bedrifter oppfører seg og hvilke priser og mengder som realiseres. Vi skiller mellom fire hovedtyper markedsformer:

1. **Fullkommen konkurranse** - Mange små aktører, homogene produkter
2. **Monopolistisk konkurranse** - Mange aktører, differensierte produkter
3. **Oligopol** - Få store aktører, gjensidig avhengighet
4. **Monopol** - Én aktør dominerer markedet

Graden av konkurranse påvirker:
- Prisene forbrukerne betaler
- Kvaliteten på produktene
- Innovasjon og effektivitet
- Fordelingen av overskudd`,
    },
    {
      id: 'samfokonomi-1-4-def-1',
      type: 'definition',
      title: 'Fullkommen konkurranse',
      content: `**Kjennetegn ved fullkommen konkurranse:**

1. **Mange små aktører:** Ingen enkeltaktør kan påvirke prisen
2. **Homogene produkter:** Identiske varer fra alle produsenter
3. **Fri etablering:** Ingen hindringer for å entre eller forlate markedet
4. **Perfekt informasjon:** Alle kjenner alle priser og kvaliteter
5. **Pristaker:** Bedriftene tar markedsprisen som gitt

**Eksempler:** Landbruksprodukter (hvete, mais), finansmarkeder

**Resultat:** Prisen presses ned til marginalkostnaden, og det er ingen unormal profitt på lang sikt.`,
    },
    {
      id: 'samfokonomi-1-4-def-2',
      type: 'definition',
      title: 'Monopol',
      content: `**Kjennetegn ved monopol:**

1. **Én tilbyder:** Hele markedet betjenes av én bedrift
2. **Ingen nære substitutter:** Produktet er unikt
3. **Etableringsbarrierer:** Andre kan ikke komme inn i markedet
4. **Prissetter:** Monopolisten bestemmer prisen

**Årsaker til monopol:**
- Naturlig monopol (stordriftsfordeler)
- Patenter og opphavsrett
- Kontroll over nøkkelressurser
- Offentlige konsesjoner

**Resultat:** Høyere priser og lavere mengde enn ved konkurranse. Dødvektstap.`,
    },
    {
      id: 'samfokonomi-1-4-def-3',
      type: 'definition',
      title: 'Monopolistisk konkurranse',
      content: `**Kjennetegn ved monopolistisk konkurranse:**

1. **Mange aktører:** Mange bedrifter i markedet
2. **Differensierte produkter:** Produktene skiller seg fra hverandre
3. **Fri etablering:** Relativt lett å entre og forlate markedet
4. **Noe markedsmakt:** Kan påvirke prisen noe

**Eksempler:** Restauranter, frisører, klær, bøker

**Resultat:** Bedriftene har noe markedsmakt pga. produktdifferensiering, men konkurransen holder profitt nede på lang sikt.`,
    },
    {
      id: 'samfokonomi-1-4-def-4',
      type: 'definition',
      title: 'Oligopol',
      content: `**Kjennetegn ved oligopol:**

1. **Få store aktører:** Noen få bedrifter dominerer
2. **Gjensidig avhengighet:** Bedriftene må ta hensyn til hverandres handlinger
3. **Etableringsbarrierer:** Vanskelig for nye å komme inn
4. **Ofte differensierte produkter:** Men kan også være homogene

**Eksempler:** Flyselskaper, bilprodusenter, teleoperatører, dagligvare

**Strategisk atferd:**
- Priskonkurranse eller prissamarbeid
- Ikke-priskonkurranse (reklame, kvalitet)
- Spillteori brukes til å analysere oligopoler`,
    },
    {
      id: 'samfokonomi-1-4-def-5',
      type: 'definition',
      title: 'Markedsmakt og effektivitet',
      content: `**Markedsmakt** er evnen til å sette prisen over marginalkostnaden.

**Effekter av markedsmakt:**
- Høyere priser for forbrukerne
- Lavere produsert mengde
- Dødvektstap (tapt samfunnsnytte)
- Overføring av overskudd fra forbrukere til produsenter

**Dødvektstap:** Tap av samfunnsøkonomisk overskudd som oppstår når produksjonen er lavere enn det som er samfunnsøkonomisk optimalt.

**Konkurransepolitikk:** Myndighetene griper inn for å:
- Forhindre monopoldannelse
- Bekjempe karteller og prissamarbeid
- Regulere naturlige monopoler`,
    },
    {
      id: 'samfokonomi-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Markedsformer i Norge',
      problem: 'Gi eksempler på de ulike markedsformene i norsk økonomi.',
      solution: `**Fullkommen konkurranse:**
- Finansmarkeder (aksjer, obligasjoner)
- Landbruksprodukter (før subsidier og reguleringer)

**Monopolistisk konkurranse:**
- Restauranter i en by
- Frisørsalonger
- Klesbutikker

**Oligopol:**
- Dagligvare (Norgesgruppen, Coop, Rema)
- Mobiloperatører (Telenor, Telia, Ice)
- Flyselskaper (SAS, Norwegian, Widerøe)

**Monopol:**
- Vinmonopolet (alkohol over 4,7%)
- Jernbanenettet (Bane NOR)
- Posten (tidligere, nå konkurranse)`,
    },
    {
      id: 'samfokonomi-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken markedsform kjennetegnes av mange små aktører og homogene produkter?',
        multipleChoiceOptions: [
          'Fullkommen konkurranse',
          'Monopol',
          'Oligopol',
          'Monopolistisk konkurranse',
        ],
        hints: ['Tenk på markeder der ingen enkeltaktør kan påvirke prisen'],
        solution: 'Fullkommen konkurranse kjennetegnes av mange små aktører, homogene (identiske) produkter, fri etablering og perfekt informasjon.',
      },
    },
    {
      id: 'samfokonomi-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-2',
        number: '4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedårsaken til at monopol kan opprettholde høyere priser enn i et konkurransemarked?',
        multipleChoiceOptions: [
          'Etableringsbarrierer hindrer konkurrenter i å entre markedet',
          'Forbrukerne foretrekker å kjøpe fra monopolister',
          'Monopolister har lavere kostnader',
          'Det finnes ingen substitutter i økonomien',
        ],
        hints: ['Tenk på hva som hindrer andre fra å tilby lavere priser'],
        solution: 'Etableringsbarrierer er hovedårsaken til at monopoler kan opprettholdes. Uten barrierer ville høye priser tiltrekke konkurrenter som presser prisene ned.',
      },
    },
    {
      id: 'samfokonomi-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-3',
        number: '4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Dagligvaremarkedet i Norge domineres av tre store aktører. Hvilken markedsform er dette?',
        multipleChoiceOptions: [
          'Oligopol',
          'Fullkommen konkurranse',
          'Monopol',
          'Monopolistisk konkurranse',
        ],
        hints: ['Tenk på antall aktører og gjensidig avhengighet'],
        solution: 'Dagligvaremarkedet er et oligopol. Få store aktører (Norgesgruppen, Coop, Rema 1000) dominerer, og de må ta hensyn til hverandres strategier.',
      },
    },
    {
      id: 'samfokonomi-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-4',
        number: '4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva dødvektstap er, og hvorfor det oppstår ved monopol.',
        hints: ['Tenk på forskjellen mellom monopolpris og konkurransepris'],
        solution: 'Dødvektstap er tap av samfunnsøkonomisk overskudd. Ved monopol settes prisen over marginalkostnaden, noe som gjør at noen transaksjoner som ville vært lønnsomme for samfunnet ikke gjennomføres. Forbrukere som verdsetter varen høyere enn kostnaden, men lavere enn monopolprisen, får ikke kjøpt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-5',
        number: '4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign fullkommen konkurranse og monopolistisk konkurranse. Hva er likt og hva er forskjellig?',
        hints: ['Tenk på antall aktører, produkter og etablering'],
        solution: 'Likt: Mange aktører, fri etablering, ingen unormal profitt på lang sikt. Ulikt: Ved fullkommen konkurranse er produktene homogene og bedriftene er pristakere. Ved monopolistisk konkurranse er produktene differensierte, og bedriftene har noe markedsmakt. Monopolistisk konkurranse gir mer variasjon men noe høyere priser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-4-ex-6',
        number: '4.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et naturlig monopol?',
        multipleChoiceOptions: [
          'Et monopol der stordriftsfordeler gjør at én bedrift kan forsyne hele markedet billigst',
          'Et monopol som har oppstått uten regulering',
          'Et monopol på naturressurser',
          'Et monopol i primærnæringen',
        ],
        hints: ['Tenk på kostnadsfordeler ved stor skala'],
        solution: 'Et naturlig monopol oppstår når stordriftsfordeler er så store at én bedrift kan forsyne hele markedet til lavere kostnad enn flere bedrifter. Eksempler er vann-, strøm- og jernbanenett.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Nasjonalregnskap og BNP
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_5: TextbookChapter = {
  id: 'samfokonomi-1-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '5',
  title: 'Nasjonalregnskap og BNP',
  description: 'Forstå hvordan vi måler økonomisk aktivitet gjennom nasjonalregnskapet og bruttonasjonalprodukt.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare hva BNP er og hvordan det beregnes',
    'skille mellom nominelt og reelt BNP',
    'drøfte BNP som mål på velstand og velferd',
  ],
  content: [
    {
      id: 'samfokonomi-1-5-intro',
      type: 'text',
      content: `## Nasjonalregnskapet

Nasjonalregnskapet er et system for å måle all økonomisk aktivitet i et land. Det gir oss oversikt over produksjon, inntekter og forbruk.

**Bruttonasjonalprodukt (BNP)** er det mest brukte målet på økonomisk aktivitet. Det måler verdien av alle varer og tjenester som produseres i et land i løpet av en periode (vanligvis ett år).

**Hvorfor er BNP viktig?**
- Måler økonomisk vekst
- Brukes til å sammenligne land
- Grunnlag for økonomisk politikk
- Indikator på levestandard`,
    },
    {
      id: 'samfokonomi-1-5-def-1',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `**BNP** er den samlede verdien av alle ferdige varer og tjenester produsert innenfor et lands grenser i en gitt periode.

**Viktige presiseringer:**
- **Ferdige varer:** Unngår dobbelttelling av råvarer
- **Markedsverdi:** Målt i priser
- **Innenfor landets grenser:** Uavhengig av eierskap
- **I en gitt periode:** Vanligvis ett år eller ett kvartal

**BNP vs. BNI:**
- **BNP:** Produksjon innenfor landets grenser
- **BNI (Bruttonasjonalinntekt):** Inntekt til landets innbyggere, uansett hvor de jobber`,
    },
    {
      id: 'samfokonomi-1-5-def-2',
      type: 'definition',
      title: 'Tre metoder for å beregne BNP',
      content: `**1. Produksjonsmetoden (verdiskapingsmetoden):**
Summer verdiskapingen i alle sektorer.
Verdiskaping = Produksjonsverdi - Vareinnsats

**2. Inntektsmetoden:**
Summer alle inntekter i økonomien.
BNP = Lønn + Kapitalinntekter + Skatter - Subsidier

**3. Utgiftsmetoden (etterspørselsmetoden):**
Summer alle utgifter til ferdige varer og tjenester.
$$BNP = C + I + G + (X - M)$$

Der:
- C = Privat konsum
- I = Investeringer
- G = Offentlig konsum
- X = Eksport
- M = Import`,
    },
    {
      id: 'samfokonomi-1-5-def-3',
      type: 'definition',
      title: 'Nominelt vs. reelt BNP',
      content: `**Nominelt BNP:**
Målt i løpende priser (dagens priser). Påvirkes av både mengde- og prisendringer.

**Reelt BNP:**
Målt i faste priser (fra et basisår). Viser den faktiske produksjonsøkningen, justert for inflasjon.

**BNP-deflator:**
$$\\text{BNP-deflator} = \\frac{\\text{Nominelt BNP}}{\\text{Reelt BNP}} \\times 100$$

**Eksempel:**
Hvis nominelt BNP øker 5% og prisene øker 2%, er den reelle veksten ca. 3%.

Reelt BNP er bedre for å sammenligne over tid, fordi det viser faktisk produksjonsøkning.`,
    },
    {
      id: 'samfokonomi-1-5-def-4',
      type: 'definition',
      title: 'BNP per innbygger',
      content: `**BNP per innbygger** = BNP / Befolkning

Dette målet brukes til å sammenligne levestandard mellom land med ulik befolkningsstørrelse.

**Kjøpekraftsjustert BNP (PPP):**
Justerer for prisforskjeller mellom land. Gir et mer realistisk bilde av kjøpekraft.

**Eksempel:**
Norge har høyt nominelt BNP per innbygger, men prisnivået er også høyt. PPP-justering gir et mer nøyaktig bilde av hva nordmenn faktisk kan kjøpe.`,
    },
    {
      id: 'samfokonomi-1-5-warning-1',
      type: 'warning',
      title: 'Begrensninger ved BNP som velstandsmål',
      content: `**BNP fanger ikke opp:**

1. **Uformell økonomi:** Svart arbeid, hjemmearbeid, frivillighet
2. **Miljøkostnader:** Forurensning, ressursutarming
3. **Livskvalitet:** Helse, fritid, sosiale relasjoner
4. **Fordeling:** Sier ingenting om hvordan inntekten er fordelt
5. **Ikke-materielle verdier:** Kultur, demokrati, frihet

**Alternative mål:**
- Human Development Index (HDI)
- Genuine Progress Indicator (GPI)
- Lykkeindeks`,
    },
    {
      id: 'samfokonomi-1-5-example-1',
      type: 'example',
      title: 'Eksempel: BNP-beregning',
      problem: 'Et land har følgende tall (i milliarder kr): Privat konsum 500, Investeringer 150, Offentlig konsum 200, Eksport 300, Import 250. Beregn BNP.',
      solution: `**Løsning:**

Bruker utgiftsmetoden:
$$BNP = C + I + G + (X - M)$$

Setter inn verdiene:
$$BNP = 500 + 150 + 200 + (300 - 250)$$
$$BNP = 500 + 150 + 200 + 50$$
$$BNP = 900 \\text{ milliarder kr}$$

**Svar:** Landets BNP er 900 milliarder kroner.`,
    },
    {
      id: 'samfokonomi-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-1',
        number: '5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler bruttonasjonalprodukt (BNP)?',
        multipleChoiceOptions: [
          'Verdien av alle ferdige varer og tjenester produsert i et land',
          'Verdien av alle varer som eksporteres',
          'Summen av alle lønninger i et land',
          'Verdien av alle naturressurser',
        ],
        hints: ['BNP er et mål på total økonomisk aktivitet'],
        solution: 'BNP måler den samlede verdien av alle ferdige varer og tjenester produsert innenfor et lands grenser i en gitt periode.',
      },
    },
    {
      id: 'samfokonomi-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-2',
        number: '5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom nominelt og reelt BNP?',
        multipleChoiceOptions: [
          'Reelt BNP er justert for inflasjon, nominelt er ikke',
          'Nominelt BNP inkluderer eksport, reelt gjør ikke',
          'Reelt BNP måler bare industriproduksjon',
          'Nominelt BNP er per innbygger, reelt er totalt',
        ],
        hints: ['Tenk på hvordan prisendringer påvirker målingen'],
        solution: 'Reelt BNP er justert for inflasjon (målt i faste priser), mens nominelt BNP er målt i løpende priser. Reelt BNP viser den faktiske produksjonsendringen.',
      },
    },
    {
      id: 'samfokonomi-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-3',
        number: '5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et land har: Privat konsum 800, Investeringer 200, Offentlig konsum 300, Eksport 400, Import 350 (alle tall i milliarder). Beregn BNP med utgiftsmetoden.',
        hints: ['BNP = C + I + G + (X - M)'],
        solution: 'BNP = C + I + G + (X - M) = 800 + 200 + 300 + (400 - 350) = 800 + 200 + 300 + 50 = 1350 milliarder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-4',
        number: '5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft minst tre begrensninger ved BNP som mål på velstand og velferd.',
        hints: ['Tenk på hva BNP ikke måler'],
        solution: '1) BNP fanger ikke opp uformell økonomi som hjemmearbeid og frivillighet. 2) Miljøkostnader regnes ikke med - forurensning kan øke BNP. 3) Fordelingen vises ikke - høyt BNP kan skjule stor ulikhet. 4) Livskvalitet som helse, fritid og sosiale relasjoner er ikke med. 5) Svart økonomi fanges ikke opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-5',
        number: '5.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Nominelt BNP øker fra 3000 til 3150 milliarder. Samtidig øker prisene med 3%. Hva er omtrent den reelle BNP-veksten?',
        multipleChoiceOptions: [
          'Ca. 2%',
          'Ca. 5%',
          'Ca. 8%',
          'Ca. 3%',
        ],
        hints: ['Reell vekst = Nominell vekst - Inflasjon (omtrent)'],
        solution: 'Nominell vekst = (3150-3000)/3000 = 5%. Reell vekst ≈ Nominell vekst - Inflasjon = 5% - 3% = 2%.',
      },
    },
    {
      id: 'samfokonomi-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-5-ex-6',
        number: '5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor bruker vi BNP per innbygger når vi sammenligner land?',
        multipleChoiceOptions: [
          'For å ta hensyn til forskjeller i befolkningsstørrelse',
          'Fordi det er enklere å beregne',
          'Fordi det gir høyere tall',
          'Fordi FN krever det',
        ],
        hints: ['Tenk på hvorfor Kinas BNP er høyere enn Norges'],
        solution: 'BNP per innbygger tar hensyn til befolkningsstørrelse. Et stort land kan ha høyt samlet BNP men lav levestandard per person. BNP per innbygger gir et bedre bilde av gjennomsnittlig levestandard.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Konjunkturer og økonomisk vekst
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6: TextbookChapter = {
  id: 'samfokonomi-1-6',
  courseId: 'samfokonomi-1',
  chapterNumber: '6',
  title: 'Konjunkturer og økonomisk vekst',
  description: 'Forstå konjunktursvingninger, økonomisk vekst og faktorer som driver langsiktig velstandsutvikling.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare hva konjunkturer er og beskrive konjunkturfaser',
    'drøfte årsaker til økonomisk vekst',
    'analysere sammenhengen mellom konjunkturer og arbeidsledighet',
  ],
  content: [
    {
      id: 'samfokonomi-1-6-intro',
      type: 'text',
      content: `## Konjunkturer og vekst

Økonomien svinger mellom gode og dårlige tider. Disse svingningene kalles konjunkturer. Samtidig har økonomien en langsiktig veksttrend.

**To typer endringer i økonomien:**
1. **Konjunkturer:** Kortsiktige svingninger rundt trenden
2. **Økonomisk vekst:** Langsiktig økning i produksjonskapasiteten

Å forstå konjunkturer er viktig for:
- Bedrifters planlegging
- Investorers beslutninger
- Myndighetenes økonomiske politikk`,
    },
    {
      id: 'samfokonomi-1-6-def-1',
      type: 'definition',
      title: 'Konjunktursyklusen',
      content: `**Konjunktursyklusen** har fire faser:

**1. Oppgang (ekspansjon):**
- BNP vokser over trend
- Fallende arbeidsledighet
- Økte investeringer
- Optimisme

**2. Høykonjunktur (topp):**
- Kapasiteten er fullt utnyttet
- Lav arbeidsledighet
- Prispress og inflasjon
- Overoppheting kan oppstå

**3. Nedgang (resesjon):**
- BNP vokser under trend eller faller
- Stigende arbeidsledighet
- Fallende investeringer
- Pessimisme

**4. Lavkonjunktur (bunn):**
- Ledig kapasitet
- Høy arbeidsledighet
- Lave investeringer
- Vendepunkt mot oppgang`,
    },
    {
      id: 'samfokonomi-1-6-def-2',
      type: 'definition',
      title: 'Produksjonsgapet',
      content: `**Produksjonsgapet** er forskjellen mellom faktisk BNP og potensielt BNP.

$$\\text{Produksjonsgap} = \\text{Faktisk BNP} - \\text{Potensielt BNP}$$

**Potensielt BNP:** Den produksjonen økonomien kan opprettholde uten at det oppstår press på priser og lønninger.

**Positivt produksjonsgap:**
- Høykonjunktur
- Inflasjonspress
- Overoppheting

**Negativt produksjonsgap:**
- Lavkonjunktur
- Arbeidsledighet
- Uutnyttet kapasitet`,
    },
    {
      id: 'samfokonomi-1-6-def-3',
      type: 'definition',
      title: 'Økonomisk vekst',
      content: `**Økonomisk vekst** er økning i reelt BNP over tid.

**Kilder til økonomisk vekst:**
1. **Mer arbeidskraft:** Befolkningsvekst, økt yrkesdeltakelse
2. **Mer kapital:** Investeringer i maskiner, bygninger, infrastruktur
3. **Teknologisk fremgang:** Innovasjon, effektivisering
4. **Humankapital:** Utdanning, kompetanse, helse

**Vekstregnskapet:**
$$\\text{BNP-vekst} = \\text{Vekst i arbeidskraft} + \\text{Vekst i kapital} + \\text{Produktivitetsvekst}$$

Produktivitetsvekst (TFP - Total faktorproduktivitet) er ofte den viktigste kilden til langsiktig vekst.`,
    },
    {
      id: 'samfokonomi-1-6-def-4',
      type: 'definition',
      title: 'Arbeidsledighet og konjunkturer',
      content: `**Arbeidsledighet** er nært knyttet til konjunkturene.

**Okuns lov:** Det er en negativ sammenheng mellom BNP-vekst og endring i arbeidsledighet.

**Typer arbeidsledighet:**
1. **Konjunkturell:** Skyldes lavkonjunktur, midlertidig
2. **Strukturell:** Mismatch mellom arbeidssøkere og jobber
3. **Friksjonell:** Normal omstilling, mellom jobber
4. **Sesongledighet:** Knyttet til årstider

**Naturlig arbeidsledighet:** Summen av strukturell og friksjonell ledighet. Ledigheten økonomien har når den er i konjunkturnøytral tilstand.`,
    },
    {
      id: 'samfokonomi-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Finanskrisen 2008-2009',
      problem: 'Beskriv konjunkturforløpet under finanskrisen.',
      solution: `**Før krisen (2007):**
- Høykonjunktur i mange land
- Lave renter og mye utlån
- Boligboble i USA

**Krisens utbrudd (2008):**
- Boligprisene falt i USA
- Banker fikk problemer
- Lehman Brothers konkurs

**Nedgangen (2008-2009):**
- BNP falt kraftig globalt
- Arbeidsledigheten steg
- Aksjemarkeder krakket
- Investeringer stoppet opp

**Tiltak og oppgang:**
- Sentralbanker senket renten
- Regjeringer økte offentlig forbruk
- Gradvis bedring fra 2010

**Lærdom:** Finansielle ubalanser kan utløse dype resesjoner.`,
    },
    {
      id: 'samfokonomi-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-1',
        number: '6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en høykonjunktur?',
        multipleChoiceOptions: [
          'Lav arbeidsledighet og høy kapasitetsutnyttelse',
          'Høy arbeidsledighet og lav produksjon',
          'Fallende BNP og pessimisme',
          'Store ubrukte ressurser',
        ],
        hints: ['Tenk på en økonomi som går for fullt'],
        solution: 'Høykonjunktur kjennetegnes av lav arbeidsledighet, høy kapasitetsutnyttelse, og ofte press på priser og lønninger.',
      },
    },
    {
      id: 'samfokonomi-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-2',
        number: '6.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er potensielt BNP?',
        multipleChoiceOptions: [
          'Den produksjonen økonomien kan opprettholde uten inflasjonært press',
          'Den høyeste produksjonen som noen gang er oppnådd',
          'BNP justert for inflasjon',
          'BNP per innbygger',
        ],
        hints: ['Tenk på bærekraftig produksjonsnivå'],
        solution: 'Potensielt BNP er den produksjonen økonomien kan opprettholde på lang sikt uten at det oppstår press på priser og lønninger.',
      },
    },
    {
      id: 'samfokonomi-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-3',
        number: '6.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type arbeidsledighet øker mest i en lavkonjunktur?',
        multipleChoiceOptions: [
          'Konjunkturell arbeidsledighet',
          'Strukturell arbeidsledighet',
          'Friksjonell arbeidsledighet',
          'Naturlig arbeidsledighet',
        ],
        hints: ['Tenk på ledighet som skyldes manglende etterspørsel'],
        solution: 'Konjunkturell arbeidsledighet øker i lavkonjunkturer fordi etterspørselen etter varer, tjenester og dermed arbeidskraft faller.',
      },
    },
    {
      id: 'samfokonomi-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-4',
        number: '6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de fire fasene i en konjunktursyklus.',
        hints: ['Oppgang, topp, nedgang, bunn'],
        solution: '1) Oppgang: BNP vokser, ledigheten faller, optimisme øker. 2) Høykonjunktur: Full kapasitetsutnyttelse, lav ledighet, prispress. 3) Nedgang: BNP-veksten avtar eller blir negativ, ledigheten stiger. 4) Lavkonjunktur: Mye ledig kapasitet, høy ledighet, men vendepunkt mot ny oppgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-5',
        number: '6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hva som er de viktigste kildene til langsiktig økonomisk vekst.',
        hints: ['Tenk på arbeidskraft, kapital og produktivitet'],
        solution: 'De viktigste kildene er: 1) Økt arbeidskraft - flere som jobber. 2) Kapitalakkumulasjon - mer maskiner og utstyr. 3) Teknologisk fremgang og innovasjon - ofte viktigst på lang sikt. 4) Humankapital - utdanning og kompetanse. Produktivitetsvekst er avgjørende fordi den øker produksjonen per arbeidstime.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-6-ex-6',
        number: '6.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et negativt produksjonsgap?',
        multipleChoiceOptions: [
          'Faktisk BNP er lavere enn potensielt BNP',
          'Faktisk BNP er høyere enn potensielt BNP',
          'BNP faller fra ett år til neste',
          'BNP per innbygger er negativ',
        ],
        hints: ['Tenk på uutnyttet kapasitet'],
        solution: 'Negativt produksjonsgap betyr at faktisk BNP er lavere enn potensielt BNP. Det indikerer ledig kapasitet og arbeidsledighet over det naturlige nivået.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Penger, banker og renter
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7: TextbookChapter = {
  id: 'samfokonomi-1-7',
  courseId: 'samfokonomi-1',
  chapterNumber: '7',
  title: 'Penger, banker og renter',
  description: 'Forstå pengesystemet, bankenes rolle i økonomien og hvordan renten påvirker økonomisk aktivitet.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare pengenes funksjoner og pengemengde',
    'beskrive bankenes rolle i økonomien',
    'analysere hvordan renten påvirker økonomien',
  ],
  content: [
    {
      id: 'samfokonomi-1-7-intro',
      type: 'text',
      content: `## Penger og banker

Penger er et av menneskehetens viktigste oppfinnelser. De gjør det mulig å handle, spare og investere på en effektiv måte. Bankene spiller en sentral rolle i å forvalte penger og kreditt.

**Utviklingen av penger:**
1. Byttehandel (ineffektivt)
2. Varepenger (gull, sølv)
3. Representativpenger (gullstandard)
4. Fiatpenger (dagens pengesystem)
5. Digitale penger

**Sentralbanken** (Norges Bank) har ansvar for pengepolitikken og finansiell stabilitet.`,
    },
    {
      id: 'samfokonomi-1-7-def-1',
      type: 'definition',
      title: 'Pengenes tre funksjoner',
      content: `**1. Byttemiddel:**
Penger brukes til å kjøpe og selge varer. Unngår problemet med "dobbelt sammenfall av ønsker" ved byttehandel.

**2. Måleenhet (regneenhet):**
Penger brukes til å måle og sammenligne verdier. Priser uttrykkes i pengeenheter.

**3. Verdioppbevaring:**
Penger kan lagres og brukes senere. Forutsetter at pengeverdien er relativt stabil (lav inflasjon).

**Hva gir penger verdi?**
- Fiatpenger har verdi fordi staten garanterer dem
- Tillit til at andre vil akseptere dem
- Begrenset tilbud (styrt av sentralbanken)`,
    },
    {
      id: 'samfokonomi-1-7-def-2',
      type: 'definition',
      title: 'Pengemengde',
      content: `**Pengemengden** er den totale mengden penger i omløp.

**M1 (Smale penger):**
Sedler og mynt + innskudd på transaksjonskonti
- Mest likvid
- Brukes til daglige transaksjoner

**M2 (Brede penger):**
M1 + andre bankinnskudd (sparekonto, BSU osv.)
- Mindre likvid
- Inkluderer sparing

**M3:**
M2 + andre pengemarkedsinstrumenter

Sentralbanken styrer pengemengden gjennom pengepolitikken.`,
    },
    {
      id: 'samfokonomi-1-7-def-3',
      type: 'definition',
      title: 'Bankenes rolle',
      content: `**Banker har flere viktige funksjoner:**

**1. Ta imot innskudd:**
- Gir folk et trygt sted å oppbevare penger
- Betaler rente på innskudd

**2. Gi lån:**
- Låner ut innskudd til låntakere
- Tar høyere rente enn de betaler på innskudd

**3. Skape penger:**
- Gjennom utlån skaper banker nye penger
- Pengeskaping gjennom kreditt

**4. Betalingsformidling:**
- Overføring mellom konti
- Kortbetaling, nettbank

**Bankens fortjeneste:** Forskjellen mellom utlånsrente og innskuddsrente (rentemargin).`,
    },
    {
      id: 'samfokonomi-1-7-def-4',
      type: 'definition',
      title: 'Renten og dens funksjoner',
      content: `**Renten** er prisen på å låne penger.

**Styringsrenten:**
Renten bankene får/betaler på sine innskudd i Norges Bank. Norges Bank bruker denne til å styre økonomien.

**Rentens virkninger på økonomien:**
- Høyere rente → dyrere å låne → mindre forbruk og investering
- Lavere rente → billigere å låne → mer forbruk og investering

**Realrente vs. nominell rente:**
$$\\text{Realrente} \\approx \\text{Nominell rente} - \\text{Inflasjon}$$

Realrenten viser den virkelige kostnaden ved å låne, justert for inflasjon.`,
    },
    {
      id: 'samfokonomi-1-7-def-5',
      type: 'definition',
      title: 'Inflasjon',
      content: `**Inflasjon** er en vedvarende økning i det generelle prisnivået.

**Årsaker til inflasjon:**
1. **Etterspørselspress:** For mye penger jager for få varer
2. **Kostnadsdrevet:** Økte produksjonskostnader (lønn, råvarer)
3. **Importert:** Svakere valuta eller økte importpriser

**Konsekvenser av inflasjon:**
- Redusert kjøpekraft
- Omfordeling fra sparere til låntakere
- Usikkerhet for bedrifter og husholdninger

**Inflasjonsmål:** Norges Bank har et mål om 2% årlig inflasjon.`,
    },
    {
      id: 'samfokonomi-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Realrente',
      problem: 'Banken tilbyr 4% rente på sparekonto. Inflasjonen er 3%. Hva er realrenten?',
      solution: `**Løsning:**

Realrente ≈ Nominell rente - Inflasjon
Realrente ≈ 4% - 3% = 1%

**Tolkning:**
Selv om du får 4% rente, mister pengene 3% av kjøpekraften pga. inflasjon. Den reelle avkastningen er bare 1%.

**Eksempel med tall:**
- Du setter inn 10 000 kr
- Etter ett år har du: 10 000 × 1,04 = 10 400 kr
- Men prisene har økt 3%
- Kjøpekraften er: 10 400 / 1,03 ≈ 10 097 kr
- Real avkastning: ca. 97 kr (≈ 1%)`,
    },
    {
      id: 'samfokonomi-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-1',
        number: '7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en funksjon penger har?',
        multipleChoiceOptions: [
          'Produksjonsfaktor',
          'Byttemiddel',
          'Måleenhet',
          'Verdioppbevaring',
        ],
        hints: ['Pengenes tre funksjoner handler om bytting, måling og lagring'],
        solution: 'Penger er ikke en produksjonsfaktor. Produksjonsfaktorene er arbeidskraft, kapital, naturressurser og entreprenørskap. Pengenes funksjoner er byttemiddel, måleenhet og verdioppbevaring.',
      },
    },
    {
      id: 'samfokonomi-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-2',
        number: '7.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer normalt med forbruk og investeringer når sentralbanken hever styringsrenten?',
        multipleChoiceOptions: [
          'Forbruk og investeringer avtar',
          'Forbruk og investeringer øker',
          'Forbruket øker mens investeringene avtar',
          'Det har ingen effekt',
        ],
        hints: ['Tenk på hva som skjer når det blir dyrere å låne'],
        solution: 'Når renten heves, blir det dyrere å låne penger. Dette fører til at husholdninger og bedrifter låner og bruker mindre. Forbruk og investeringer avtar.',
      },
    },
    {
      id: 'samfokonomi-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-3',
        number: '7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Den nominelle renten er 5% og inflasjonen er 2%. Beregn realrenten og forklar hva den betyr.',
        hints: ['Realrente ≈ Nominell rente - Inflasjon'],
        solution: 'Realrente ≈ 5% - 2% = 3%. Realrenten viser den faktiske avkastningen justert for kjøpekraftstap. Selv om du får 5% rente, taper pengene 2% i kjøpekraft, så den reelle gevinsten er 3%.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-4',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan banker skaper penger gjennom utlån.',
        hints: ['Tenk på hva som skjer når en bank gir et lån'],
        solution: 'Når en bank gir lån, setter den pengene inn på låntakers konto. Dette er nye penger som ikke fantes før. Banken trenger ikke ha alle pengene på forhånd - bare en del som reserver. Gjennom denne prosessen skaper bankene mesteparten av pengemengden i økonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-5',
        number: '7.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Norges Banks inflasjonsmål?',
        multipleChoiceOptions: [
          '2% årlig inflasjon',
          '0% årlig inflasjon',
          '5% årlig inflasjon',
          'Det finnes ikke noe inflasjonsmål',
        ],
        hints: ['De fleste sentralbanker sikter mot lav, men positiv inflasjon'],
        solution: 'Norges Bank har et inflasjonsmål på 2% årlig. Lav og stabil inflasjon gir forutsigbarhet og er bedre for økonomien enn både høy inflasjon og deflasjon.',
      },
    },
    {
      id: 'samfokonomi-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-7-ex-6',
        number: '7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor sentralbanker vanligvis ønsker lav, men positiv inflasjon (rundt 2%).',
        hints: ['Tenk på problemene med både høy inflasjon og deflasjon'],
        solution: 'Lav positiv inflasjon er ønskelig fordi: 1) Det gir rom for å senke realrenten ved lavkonjunktur. 2) Deflasjon kan føre til utsatt forbruk og gjeldsproblemer. 3) Litt inflasjon letter lønnsomstillinger (reallønnskutt uten nominelt kutt). 4) 2% gir buffer mot målingsfeil i prisindeksen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Offentlig økonomi og skatter
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8: TextbookChapter = {
  id: 'samfokonomi-1-8',
  courseId: 'samfokonomi-1',
  chapterNumber: '8',
  title: 'Offentlig økonomi og skatter',
  description: 'Forstå statens rolle i økonomien, skattesystemet og finanspolitikk.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare statens rolle i markedsøkonomien',
    'beskrive hovedtrekkene i det norske skattesystemet',
    'analysere hvordan finanspolitikk påvirker økonomien',
  ],
  content: [
    {
      id: 'samfokonomi-1-8-intro',
      type: 'text',
      content: `## Offentlig sektor i økonomien

Staten spiller en viktig rolle i alle moderne økonomier. Den sørger for fellesgoder, omfordeler inntekt, regulerer markeder og stabiliserer økonomien.

**Statens hovedoppgaver:**
1. Allokering - sikre effektiv ressursbruk
2. Fordeling - omfordele inntekt og formue
3. Stabilisering - dempe konjunktursvingninger

**Offentlig sektor i Norge:**
- Stat, fylkeskommuner og kommuner
- Utgjør ca. 50% av BNP
- Finansieres hovedsakelig av skatter og avgifter`,
    },
    {
      id: 'samfokonomi-1-8-def-1',
      type: 'definition',
      title: 'Markedssvikt',
      content: `**Markedssvikt** oppstår når markedet ikke gir et effektivt resultat.

**Typer markedssvikt:**

**1. Fellesgoder (kollektive goder):**
- Ikke-rivaliserende: Én persons bruk hindrer ikke andres
- Ikke-ekskluderbare: Vanskelig å utelukke noen
- Eksempler: Forsvar, gatebelysning, ren luft

**2. Eksterne virkninger:**
- Positive: Vaksinering, utdanning
- Negative: Forurensning, støy

**3. Asymmetrisk informasjon:**
- En part vet mer enn den andre
- Kan føre til adverse selection og moralsk hasard

**4. Markedsmakt:**
- Monopol og oligopol gir ineffektivitet`,
    },
    {
      id: 'samfokonomi-1-8-def-2',
      type: 'definition',
      title: 'Skatter og avgifter',
      content: `**Skatter** er tvungne overføringer til det offentlige uten direkte motytelse.

**Hovedtyper skatter i Norge:**

**1. Inntektsskatt:**
- Skatt på lønn, kapitalinntekter, næringsinntekt
- Progressiv (høyere sats ved høyere inntekt)

**2. Formueskatt:**
- Skatt på nettoformue over fribeløp
- Særnorsk - få andre land har dette

**3. Merverdiavgift (MVA):**
- Forbruksskatt på varer og tjenester
- Generell sats 25%, redusert for mat (15%) og kultur (12%)

**4. Særavgifter:**
- Alkohol, tobakk, drivstoff, miljøavgifter

**5. Arbeidsgiveravgift:**
- Avgift bedrifter betaler på lønnskostnader`,
    },
    {
      id: 'samfokonomi-1-8-def-3',
      type: 'definition',
      title: 'Statsbudsjettet',
      content: `**Statsbudsjettet** er statens årlige inntekts- og utgiftsplan.

**Inntektssiden:**
- Skatter og avgifter
- Utbytte fra statlige selskaper
- Overføringer fra oljefondet

**Utgiftssiden:**
- Helse og omsorg
- Utdanning
- Trygder og pensjoner
- Forsvar
- Samferdsel

**Budsjettbalanse:**
- Overskudd: Inntekter > Utgifter
- Underskudd: Utgifter > Inntekter

**Handlingsregelen:** Norge skal over tid bruke ca. 3% av oljefondet årlig (forventet realavkastning).`,
    },
    {
      id: 'samfokonomi-1-8-def-4',
      type: 'definition',
      title: 'Finanspolitikk',
      content: `**Finanspolitikk** er bruken av statsbudsjettet til å påvirke økonomien.

**Ekspansiv finanspolitikk:**
- Økte offentlige utgifter og/eller lavere skatter
- Brukes i lavkonjunktur for å stimulere etterspørselen
- Øker budsjettunderskuddet

**Kontraktiv finanspolitikk:**
- Lavere offentlige utgifter og/eller høyere skatter
- Brukes i høykonjunktur for å dempe etterspørselen
- Reduserer budsjettunderskuddet

**Automatiske stabilisatorer:**
- Skatteinntekter faller automatisk i lavkonjunktur
- Utgifter til dagpenger øker automatisk
- Stabiliserer økonomien uten aktive tiltak`,
    },
    {
      id: 'samfokonomi-1-8-def-5',
      type: 'definition',
      title: 'Skattenes virkninger',
      content: `**Effektivitetsvirkninger:**
- Skatter kan forvri beslutninger (mindre arbeid, mindre investering)
- Dødvektstap fra skattekiler
- Noen skatter er mer effektive enn andre

**Fordelingsvirkninger:**
- Progressive skatter omfordeler fra rike til fattige
- Flat skatt behandler alle likt i prosent
- Regressive avgifter rammer fattige hardest

**Skatteparadokset:**
- Høye skatter kan gi lavere inntekter (folk jobber mindre, unndrar)
- Laffer-kurven: Det finnes en optimal skattesats

**Prinsipper for et godt skattesystem:**
1. Effektivitet (minst mulig forvridning)
2. Rettferdighet (horisontal og vertikal)
3. Enkelhet (forståelig og administrerbart)`,
    },
    {
      id: 'samfokonomi-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Finanspolitikk i praksis',
      problem: 'Hvordan kan staten bruke finanspolitikk for å bekjempe en lavkonjunktur?',
      solution: `**Ekspansiv finanspolitikk i lavkonjunktur:**

**1. Øke offentlige utgifter:**
- Bygge veier, skoler, sykehus
- Øke overføringer (dagpenger, sosialhjelp)
- Ansette flere i offentlig sektor

**2. Redusere skatter:**
- Lavere inntektsskatt gir folk mer å bruke
- Lavere bedriftsskatt stimulerer investeringer
- Momskutt stimulerer forbruk

**Virkning:**
- Økt etterspørsel i økonomien
- Bedrifter produserer mer
- Arbeidsledigheten faller

**Eksempel - koronapandemien:**
Norge brukte ekspansiv finanspolitikk med permitteringsordninger, kompensasjonsordninger for bedrifter og økte offentlige utgifter.`,
    },
    {
      id: 'samfokonomi-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-1',
        number: '8.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner et fellesgode (kollektivt gode)?',
        multipleChoiceOptions: [
          'Det er ikke-rivaliserende og ikke-ekskluderbart',
          'Det produseres bare av staten',
          'Det er gratis for alle',
          'Det er et luksusgode',
        ],
        hints: ['Tenk på hvorfor private markeder ikke tilbyr nok av visse goder'],
        solution: 'Fellesgoder er ikke-rivaliserende (én persons bruk hindrer ikke andres) og ikke-ekskluderbare (vanskelig å utelukke noen fra å bruke det). Eksempler er forsvar og gatebelysning.',
      },
    },
    {
      id: 'samfokonomi-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-2',
        number: '8.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med ekspansiv finanspolitikk?',
        multipleChoiceOptions: [
          'Økte offentlige utgifter og/eller lavere skatter',
          'Lavere offentlige utgifter og høyere skatter',
          'Økt rente fra sentralbanken',
          'Økt pengemengde',
        ],
        hints: ['Tenk på politikk som stimulerer økonomien'],
        solution: 'Ekspansiv finanspolitikk innebærer økte offentlige utgifter og/eller lavere skatter. Dette øker samlet etterspørsel i økonomien og brukes typisk i lavkonjunkturer.',
      },
    },
    {
      id: 'samfokonomi-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-3',
        number: '8.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er handlingsregelen for bruk av oljefondet?',
        multipleChoiceOptions: [
          'Staten skal over tid bruke ca. 3% av fondet årlig',
          'Staten kan bruke så mye den vil',
          'Staten må bruke alt fondet hvert år',
          'Staten kan ikke bruke noe av fondet',
        ],
        hints: ['Regelen knytter bruken til forventet avkastning'],
        solution: 'Handlingsregelen sier at staten over tid skal bruke ca. 3% av oljefondet årlig, som tilsvarer forventet realavkastning. Dette sikrer at fondet bevares for fremtidige generasjoner.',
      },
    },
    {
      id: 'samfokonomi-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-4',
        number: '8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva automatiske stabilisatorer er og gi eksempler.',
        hints: ['Tenk på mekanismer som virker automatisk uten politiske vedtak'],
        solution: 'Automatiske stabilisatorer er innebygde mekanismer i statsbudsjettet som demper konjunktursvingninger uten aktive politiske tiltak. Eksempler: I lavkonjunktur faller skatteinntektene automatisk (folk tjener mindre) og utgiftene til dagpenger øker (flere arbeidsledige). Dette stimulerer økonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-5',
        number: '8.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med et progressivt skattesystem.',
        hints: ['Tenk på både effektivitet og fordeling'],
        solution: 'Fordeler: 1) Omfordeler fra rike til fattige, reduserer ulikhet. 2) De med høyest betalingsevne bidrar mest. 3) Gir automatisk stabilisering. Ulemper: 1) Kan redusere insentiver til å jobbe og investere. 2) Kan føre til skatteunndragelse. 3) Komplisert system. 4) Brain drain - talenter flytter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfokonomi-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-1-8-ex-6',
        number: '8.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type markedssvikt oppstår ved forurensning?',
        multipleChoiceOptions: [
          'Negativ ekstern virkning',
          'Fellesgode',
          'Asymmetrisk informasjon',
          'Naturlig monopol',
        ],
        hints: ['Forurensning påvirker andre enn de som forurenser'],
        solution: 'Forurensning er en negativ ekstern virkning. Kostnadene ved forurensning bæres av samfunnet, ikke bare av den som forurenser. Dette fører til at det forurenses for mye fra et samfunnsøkonomisk synspunkt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFOKONOMI_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_1,
  CHAPTER_SAMFOKONOMI_1_2,
  CHAPTER_SAMFOKONOMI_1_3,
  CHAPTER_SAMFOKONOMI_1_4,
  CHAPTER_SAMFOKONOMI_1_5,
  CHAPTER_SAMFOKONOMI_1_6,
  CHAPTER_SAMFOKONOMI_1_7,
  CHAPTER_SAMFOKONOMI_1_8,
];

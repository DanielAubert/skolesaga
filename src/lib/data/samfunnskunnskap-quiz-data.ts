/**
 * Samfunnskunnskap Quiz Data
 *
 * Flervalgsoppgaver for samfunnskunnskap-quiz per kapittel.
 * Første alternativ er alltid riktig svar (vil bli shufflet ved visning).
 */

export interface SamfunnskunnskapQuizQuestion {
  question: string;
  options: string[];  // First option is always correct
  explanation?: string;
}

// Quiz questions organized by chapter ID
const quizData: Record<string, SamfunnskunnskapQuizQuestion[]> = {
  // ============================================================================
  // Kapittel 1.1: Sosialisering - hvordan vi formes
  // ============================================================================
  'samfunnskunnskap-1-1': [
    {
      question: 'Hva er sosialisering?',
      options: [
        'Prosessen der vi lærer normer, verdier og ferdigheter',
        'Å være sosial på fest',
        'Å bruke sosiale medier',
        'Å ha mange venner',
      ],
      explanation: 'Sosialisering er prosessen der vi lærer normer, verdier og ferdigheter som gjør oss i stand til å fungere i samfunnet.',
    },
    {
      question: 'Hvor skjer primærsosialisering?',
      options: [
        'I familien',
        'På skolen',
        'På arbeidsplassen',
        'På sosiale medier',
      ],
      explanation: 'Primærsosialisering er den første sosialiseringen som skjer i familien i de første leveårene.',
    },
    {
      question: 'Hva er sekundærsosialisering?',
      options: [
        'Sosialisering som skjer utenfor familien, f.eks. i skole og fritidsaktiviteter',
        'Den andre gangen du sosialiseres',
        'Sosialisering som er mindre viktig',
        'Sosialisering gjennom sosiale medier',
      ],
      explanation: 'Sekundærsosialisering skjer utenfor familien - i barnehage, skole, fritidsaktiviteter og arbeidslivet.',
    },
    {
      question: 'Hva kjennetegner tertiærsosialisering?',
      options: [
        'Sosialisering gjennom medier og samfunnet generelt',
        'Sosialisering i familien',
        'Sosialisering på arbeidsplassen',
        'Sosialisering i barnehagen',
      ],
      explanation: 'Tertiærsosialisering skjer gjennom medier, sosiale medier og samfunnet generelt.',
    },
    {
      question: 'Hvilken sosialiseringsagent er viktigst i primærsosialiseringen?',
      options: [
        'Familien',
        'Skolen',
        'Venner',
        'Sosiale medier',
      ],
      explanation: 'Familien er den viktigste sosialiseringsagenten i primærsosialiseringen.',
    },
    {
      question: 'Hva lærer vi gjennom sosialisering?',
      options: [
        'Språk, normer, verdier og sosiale ferdigheter',
        'Bare språk',
        'Bare matematikk',
        'Bare å lese',
      ],
      explanation: 'Gjennom sosialisering lærer vi språk, kommunikasjon, sosiale normer, verdier og holdninger.',
    },
    {
      question: 'Hvilken sosialiseringsagent har fått økt betydning i vår digitale tid?',
      options: [
        'Sosiale medier',
        'Familien',
        'Kirken',
        'Nabolaget',
      ],
      explanation: 'Sosiale medier har blitt en stadig viktigere sosialiseringsagent i vår digitale tid.',
    },
    {
      question: 'Hva er en sosialiseringsagent?',
      options: [
        'En person, gruppe eller institusjon som påvirker vår sosialisering',
        'En hemmelig agent',
        'En person som jobber med sosiale medier',
        'En som selger sosiale tjenester',
      ],
      explanation: 'Sosialiseringsagenter er personer, grupper eller institusjoner som påvirker hvordan vi sosialiseres.',
    },
    {
      question: 'Når i livet er primærsosialiseringen viktigst?',
      options: [
        'I de første leveårene',
        'I ungdomstiden',
        'Som voksen',
        'I alderdommen',
      ],
      explanation: 'Primærsosialiseringen skjer i de første leveårene og legger grunnlaget for personligheten.',
    },
    {
      question: 'Hvilken rolle spiller venner i sosialiseringen?',
      options: [
        'De påvirker holdninger, interesser og identitet',
        'De har ingen betydning',
        'De er kun viktige for å ha det gøy',
        'De erstatter familien fullstendig',
      ],
      explanation: 'Venner og jevnaldrende påvirker holdninger, interesser og identitet, særlig i ungdomsårene.',
    },
  ],

  // ============================================================================
  // Kapittel 1.2: Identitet og selvfølelse
  // ============================================================================
  'samfunnskunnskap-1-2': [
    {
      question: 'Hva er identitet?',
      options: [
        'Hvem vi er og hvordan vi oppfatter oss selv',
        'Bare navnet vårt',
        'Personnummeret vårt',
        'Hva andre synes om oss',
      ],
      explanation: 'Identitet handler om hvem vi er og hvordan vi oppfatter oss selv - summen av våre egenskaper, verdier og tilhørigheter.',
    },
    {
      question: 'Hva er personlig identitet?',
      options: [
        'De egenskapene som gjør deg unik som individ',
        'Hvilke grupper du tilhører',
        'Ditt ID-kort',
        'Dine venners meninger om deg',
      ],
      explanation: 'Personlig identitet handler om de egenskapene og trekkene som gjør deg unik som individ.',
    },
    {
      question: 'Hva er sosial identitet?',
      options: [
        'Gruppene du tilhører og identifiserer deg med',
        'Antall følgere du har på sosiale medier',
        'Dine personlige egenskaper',
        'Hvordan du ser ut',
      ],
      explanation: 'Sosial identitet handler om hvilke grupper du tilhører og identifiserer deg med.',
    },
    {
      question: 'Hva er forskjellen mellom selvbilde og selvfølelse?',
      options: [
        'Selvbilde er hvordan vi ser på oss selv, selvfølelse er hvordan vi føler om oss selv',
        'De betyr det samme',
        'Selvbilde handler om utseende, selvfølelse handler om følelser generelt',
        'Selvfølelse er mer negativt enn selvbilde',
      ],
      explanation: 'Selvbilde handler om hvordan vi ser på oss selv, mens selvfølelse handler om hvordan vi føler om oss selv.',
    },
    {
      question: 'Hvilken faktor påvirker IKKE selvfølelse?',
      options: [
        'Været',
        'Oppvekst og omsorg',
        'Tilbakemeldinger fra andre',
        'Mestringsopplevelser',
      ],
      explanation: 'Selvfølelse påvirkes av oppvekst, tilbakemeldinger, mestring, sammenligning med andre og medier - ikke været.',
    },
    {
      question: 'Hva er digital identitet?',
      options: [
        'Hvordan vi presenterer oss selv på nett og i sosiale medier',
        'Vår IP-adresse',
        'Vårt passord',
        'Antall enheter vi eier',
      ],
      explanation: 'Digital identitet handler om hvordan vi presenterer oss selv på nett og i sosiale medier.',
    },
    {
      question: 'Er identitet statisk eller dynamisk?',
      options: [
        'Dynamisk - den utvikles og endres gjennom livet',
        'Statisk - den er fastsatt fra fødselen',
        'Den endres bare i ungdomstiden',
        'Den er kun genetisk bestemt',
      ],
      explanation: 'Identitet er ikke statisk - den utvikles og endres gjennom hele livet, i møte med andre og nye erfaringer.',
    },
    {
      question: 'Hva er rolleidentitet?',
      options: [
        'De ulike rollene du har i livet, som elev, venn eller arbeidstaker',
        'Rollen du spiller i et skuespill',
        'Din favorittrolle i et dataspill',
        'En type identitetsdokument',
      ],
      explanation: 'Rolleidentitet handler om de ulike rollene du har i livet - sønn/datter, elev, venn, arbeidstaker.',
    },
    {
      question: 'Hvordan kan sosiale medier påvirke selvfølelsen negativt?',
      options: [
        'Gjennom sammenligning med idealiserte bilder og press om likes',
        'Ved å gi tilhørighet og støtte',
        'Ved å gi mulighet for selvuttrykk',
        'Ved å lære nye ferdigheter',
      ],
      explanation: 'Sosiale medier kan påvirke negativt gjennom sammenligning med idealiserte bilder, press om likes og følgere.',
    },
    {
      question: 'Hva er kulturell identitet?',
      options: [
        'Hvilken kultur du identifiserer deg med',
        'Å gå på kulturarrangementer',
        'Å lese bøker',
        'Å se på kunst',
      ],
      explanation: 'Kulturell identitet handler om hvilken kultur du identifiserer deg med og føler tilhørighet til.',
    },
  ],

  // ============================================================================
  // Kapittel 1.3: Personlig økonomi - budsjett og sparing
  // ============================================================================
  'samfunnskunnskap-1-3': [
    {
      question: 'Hva er et budsjett?',
      options: [
        'En plan for hvordan du skal bruke pengene dine',
        'En oversikt over hvor mye du har på konto',
        'En type lån',
        'En spareplan hos banken',
      ],
      explanation: 'Et budsjett er en plan for hvordan du skal bruke pengene dine, med oversikt over forventede inntekter og utgifter.',
    },
    {
      question: 'Hva er forskjellen mellom faste og variable utgifter?',
      options: [
        'Faste utgifter er like hver måned, variable varierer',
        'Faste utgifter er dyrere',
        'Variable utgifter kommer oftere',
        'Det er ingen forskjell',
      ],
      explanation: 'Faste utgifter er like hver måned (husleie, abonnementer), mens variable utgifter varierer (mat, klær, underholdning).',
    },
    {
      question: 'Hva er et nødfond?',
      options: [
        'Penger satt av til uforutsette utgifter',
        'Et lån fra staten',
        'Penger til ferieformål',
        'En forsikring',
      ],
      explanation: 'Et nødfond er penger du har satt av til uforutsette utgifter, som bilreparasjon eller tannlege.',
    },
    {
      question: 'Hvor mye anbefales det å ha i nødfond?',
      options: [
        '3-6 måneders utgifter',
        '1 ukes utgifter',
        '1 års utgifter',
        '100 kroner',
      ],
      explanation: 'Det anbefales å ha 3-6 måneders utgifter spart i et nødfond for økonomisk trygghet.',
    },
    {
      question: 'Hva betyr "betal deg selv først"?',
      options: [
        'Spar før du bruker penger på annet',
        'Ta ut lønn til deg selv',
        'Betal regninger først',
        'Kjøp gaver til deg selv',
      ],
      explanation: '"Betal deg selv først" betyr at du setter av penger til sparing før du bruker penger på annet.',
    },
    {
      question: 'Hva er en inntekt?',
      options: [
        'Penger du mottar, som lønn eller stipend',
        'Penger du bruker',
        'Penger du låner',
        'Penger du skylder',
      ],
      explanation: 'Inntekt er penger du mottar - lønn, stipend, lån, gaver eller andre ytelser.',
    },
    {
      question: 'Hva er gjeld?',
      options: [
        'Penger du skylder andre',
        'Penger du sparer',
        'Penger du tjener',
        'Penger du gir bort',
      ],
      explanation: 'Gjeld er penger du skylder andre - studielån, kredittkort, forbrukslån.',
    },
    {
      question: 'Hvilket av disse er en fast utgift?',
      options: [
        'Husleie',
        'Kinobillett',
        'Restaurantbesøk',
        'Kleskjøp',
      ],
      explanation: 'Husleie er en fast utgift fordi beløpet er det samme hver måned.',
    },
    {
      question: 'Hvorfor er god økonomistyring viktig?',
      options: [
        'For å unngå stress, gjeldsproblemer og ha muligheter i livet',
        'For å bli rik',
        'For å imponere andre',
        'Det er egentlig ikke så viktig',
      ],
      explanation: 'God økonomistyring er viktig for å unngå stress og gjeldsproblemer, og for å ha valgmuligheter i livet.',
    },
    {
      question: 'Hva bør du gjøre med budsjettet ditt?',
      options: [
        'Følge opp månedlig og justere etter behov',
        'Lage det én gang og aldri se på det igjen',
        'Bare lage det hvis du har mye penger',
        'Overlate det til foreldrene dine',
      ],
      explanation: 'Et budsjett bør følges opp månedlig og justeres etter behov for å være nyttig.',
    },
    {
      question: 'Hva er forbruk?',
      options: [
        'Hvordan du bruker pengene dine på varer og tjenester',
        'En type lån',
        'Penger du får fra staten',
        'Det samme som sparing',
      ],
      explanation: 'Forbruk handler om hvordan du bruker pengene dine på varer og tjenester.',
    },
  ],

  // Chapters 1.4-1.8
// ============================================================================
  // Kapittel 1.4: Forbruk og kommersiell påvirkning
  // ============================================================================
  'samfunnskunnskap-1-4': [
    {
      question: 'Hva er et kjennetegn ved forbrukersamfunnet?',
      options: [
        'Masseproduksjon, masseforbruk og reklame overalt',
        'At folk produserer alt selv',
        'At det ikke finnes reklame',
        'At folk bare kjøper det de trenger',
      ],
      explanation: 'Forbrukersamfunnet kjennetegnes av masseproduksjon, masseforbruk, reklame overalt, og at forbruk knyttes til identitet og status.',
    },
    {
      question: 'Hva er emosjonell appell i reklame?',
      options: [
        'Reklame som spiller på følelser som glede, frykt eller status',
        'Reklame som bruker fakta og tall',
        'Reklame uten bilder',
        'Reklame som er kjedelig',
      ],
      explanation: 'Emosjonell appell er når reklame spiller på følelser som glede, frykt, tilhørighet eller status for å påvirke oss.',
    },
    {
      question: 'Hva er knapphetseffekten i markedsføring?',
      options: [
        'Å skape hastverk med "kun i dag" eller "begrenset antall"',
        'Å selge produkter billig',
        'Å ha lite reklame',
        'Å lage få produkter',
      ],
      explanation: 'Knapphetseffekten bruker fraser som "kun i dag" eller "begrenset antall" for å skape hastverk og frykt for å gå glipp av noe.',
    },
    {
      question: 'Hvor lang er angreretten ved nettkjøp i Norge?',
      options: [
        '14 dager',
        '7 dager',
        '30 dager',
        '3 dager',
      ],
      explanation: 'Ved nettkjøp har du 14 dagers angrerett i Norge, som gir deg mulighet til å returnere varen uten å oppgi grunn.',
    },
    {
      question: 'Hva er influencer-markedsføring?',
      options: [
        'Når influencere anbefaler produkter, ofte mot betaling',
        'Markedsføring på TV',
        'Avisannonser',
        'Reklame på bussen',
      ],
      explanation: 'Influencer-markedsføring er når personer vi følger på sosiale medier anbefaler produkter - ofte uten tydelig merking av at det er reklame.',
    },
    {
      question: 'Hva er målrettet reklame?',
      options: [
        'Reklame tilpasset dine interesser basert på algoritmeanalyse',
        'Reklame som treffer alle',
        'Reklame som er vanskelig å forstå',
        'Reklame uten bilder',
      ],
      explanation: 'Målrettet reklame bruker algoritmer som analyserer oss og viser reklame tilpasset våre interesser og svakheter.',
    },
    {
      question: 'Hva er bærekraftig forbruk?',
      options: [
        'Å kjøpe mindre, gjenbruke og velge miljøvennlige alternativer',
        'Å kjøpe mest mulig',
        'Å alltid kjøpe det billigste',
        'Å bare kjøpe merkevarerer',
      ],
      explanation: 'Bærekraftig forbruk handler om å kjøpe mindre men bedre kvalitet, gjenbruke, reparere og velge miljøvennlige alternativer.',
    },
    {
      question: 'Hva er produktplassering?',
      options: [
        'Når produkter vises i filmer eller hos influencere uten å fremstå som reklame',
        'Når produkter ligger i butikkhyllene',
        'Når produkter selges online',
        'Når produkter er på tilbud',
      ],
      explanation: 'Produktplassering er når produkter vises i filmer, serier og hos influencere uten at det tydelig fremstår som reklame.',
    },
    {
      question: 'Hva krever markedsføringsloven om reklame?',
      options: [
        'At reklame skal være tydelig merket',
        'At reklame skal være morsom',
        'At reklame ikke får vises på nett',
        'At influencere ikke får reklamere',
      ],
      explanation: 'Markedsføringsloven krever at reklame skal være tydelig merket, slik at forbrukere vet når de ser på betalt innhold.',
    },
    {
      question: 'Hva er sosial bevis i markedsføring?',
      options: [
        'At vi vil ha det andre har for å passe inn',
        'Bevis på at man har vært sosial',
        'Dokumentasjon fra sosiale medier',
        'Attest fra venner',
      ],
      explanation: 'Sosial bevis er et markedsføringsgrep som utnytter at vi vil ha det andre har for å passe inn - "alle andre har det".',
    },
    {
      question: 'Hva kjennetegner en kritisk forbruker?',
      options: [
        'En som vurderer behov, sammenligner priser og gjenkjenner reklametriks',
        'En som klager mye',
        'En som alltid kjøper det dyreste',
        'En som aldri handler',
      ],
      explanation: 'En kritisk forbruker vurderer om de trenger produktet, sammenligner priser og kvalitet, og gjenkjenner reklametriks.',
    },
  ],

  // ============================================================================
  // Kapittel 1.5: Kropp, grenser og samtykke
  // ============================================================================
  'samfunnskunnskap-1-5': [
    {
      question: 'Hva er samtykke?',
      options: [
        'At noen frivillig og aktivt sier ja til noe',
        'At noen ikke sier nei',
        'At noen er stille',
        'At noen nikker',
      ],
      explanation: 'Samtykke betyr at noen frivillig og aktivt sier ja til noe - det må være et ekte ja, ikke bare fravær av nei.',
    },
    {
      question: 'Hvilke krav stilles til gyldig samtykke?',
      options: [
        'Frivillig, informert, entusiastisk og kan trekkes tilbake',
        'Bare at man sier ja',
        'At man ikke sier nei',
        'At man er edru',
      ],
      explanation: 'Samtykke må være frivillig (uten press), informert (forstå hva man sier ja til), entusiastisk og kan trekkes tilbake.',
    },
    {
      question: 'Kan man gi gyldig samtykke hvis man er beruset?',
      options: [
        'Nei, beruselse gjør at man ikke kan gi gyldig samtykke',
        'Ja, så lenge man sier ja',
        'Ja, hvis man har drukket lite',
        'Ja, hvis den andre er edru',
      ],
      explanation: 'Å være beruset, sove eller være redd gjør at man ikke kan gi gyldig samtykke.',
    },
    {
      question: 'Hva er fysiske grenser?',
      options: [
        'Hvem som får ta på deg, hvordan og hvor',
        'Grenser mellom land',
        'Hvor langt du kan løpe',
        'Hvor mye du kan løfte',
      ],
      explanation: 'Fysiske grenser handler om hvem som får ta på deg, hvordan og hvor - du bestemmer selv hva som er greit.',
    },
    {
      question: 'Hva er digitale grenser?',
      options: [
        'Hva du deler på nett, hvem du svarer og hvilke bilder du sender',
        'Hvor mye data du bruker',
        'Hvor mange apper du har',
        'Hvor rask internettforbindelsen er',
      ],
      explanation: 'Digitale grenser handler om hva du deler på nett, hvem du svarer, hva slags bilder du sender eller mottar.',
    },
    {
      question: 'Kan samtykke trekkes tilbake?',
      options: [
        'Ja, man kan ombestemme seg når som helst',
        'Nei, samtykke er bindende',
        'Bare innen 24 timer',
        'Bare hvis man har god grunn',
      ],
      explanation: 'Samtykke kan trekkes tilbake når som helst - man kan alltid ombestemme seg.',
    },
    {
      question: 'Hva betyr det at samtykke er situasjonsbestemt?',
      options: [
        'At samtykke til en ting ikke betyr samtykke til alt',
        'At det avhenger av været',
        'At det bare gjelder på bestemte steder',
        'At det kun gjelder på dagtid',
      ],
      explanation: 'At samtykke er situasjonsbestemt betyr at et ja til en ting ikke automatisk betyr ja til andre ting.',
    },
    {
      question: 'Hva er emosjonelle grenser?',
      options: [
        'Hva du deler av følelser og personlig informasjon',
        'Hvor glad du kan bli',
        'Hvor mye du kan gråte',
        'Hvor mange følelser du har',
      ],
      explanation: 'Emosjonelle grenser handler om hva du deler av følelser og personlig informasjon - du trenger ikke fortelle alt til alle.',
    },
    {
      question: 'Hvorfor kan det være vanskelig å sette grenser?',
      options: [
        'Frykt for å såre andre, ønske om å passe inn og sosiale forventninger',
        'Fordi det er forbudt',
        'Fordi grenser ikke er viktige',
        'Fordi alle liker det samme',
      ],
      explanation: 'Det kan være vanskelig å sette grenser på grunn av frykt for å såre andre, ønske om å passe inn, og sosiale forventninger.',
    },
    {
      question: 'Hvem bestemmer over din kropp?',
      options: [
        'Du selv',
        'Foreldrene dine',
        'Partneren din',
        'Staten',
      ],
      explanation: 'Alle mennesker har rett til å bestemme over egen kropp - du eier din egen kropp.',
    },
  ],

  // ============================================================================
  // Kapittel 1.6: Kjønn, seksualitet og samfunn
  // ============================================================================
  'samfunnskunnskap-1-6': [
    {
      question: 'Hva er biologisk kjønn?',
      options: [
        'Fysiske egenskaper som definerer kroppen som mann eller kvinne',
        'Hvem man er tiltrukket av',
        'Hvordan man kler seg',
        'Hvilke roller man har i samfunnet',
      ],
      explanation: 'Biologisk kjønn refererer til fysiske egenskaper som kromosomer, hormoner og reproduktive organer.',
    },
    {
      question: 'Hva er seksuell orientering?',
      options: [
        'Hvem man føler romantisk og seksuell tiltrekning til',
        'Hvordan man kler seg',
        'Hvilket kjønn man har',
        'Hvilke hobbyer man har',
      ],
      explanation: 'Seksuell orientering handler om hvem man føler romantisk og seksuell tiltrekning til.',
    },
    {
      question: 'Hva menes med heterofil?',
      options: [
        'Tiltrukket av motsatt kjønn',
        'Tiltrukket av samme kjønn',
        'Tiltrukket av begge kjønn',
        'Ikke tiltrukket av noen',
      ],
      explanation: 'Heterofil betyr at man er tiltrukket av motsatt kjønn. Dette gjelder det store flertallet av befolkningen.',
    },
    {
      question: 'Hva menes med homofil?',
      options: [
        'Tiltrukket av samme kjønn',
        'Tiltrukket av motsatt kjønn',
        'Tiltrukket av begge kjønn',
        'Ikke tiltrukket av noen',
      ],
      explanation: 'Homofil betyr at man er tiltrukket av samme kjønn.',
    },
    {
      question: 'Når ble likekjønnet ekteskap lovlig i Norge?',
      options: [
        '2009',
        '1999',
        '2015',
        '1993',
      ],
      explanation: 'Likekjønnet ekteskap ble lovlig i Norge i 2009. Partnerskapsloven kom i 1993.',
    },
    {
      question: 'Når ble homofili avkriminalisert i Norge?',
      options: [
        '1972',
        '1945',
        '1993',
        '2009',
      ],
      explanation: 'Homofili var straffbart i Norge frem til 1972.',
    },
    {
      question: 'Hva er kjønnsroller?',
      options: [
        'Samfunnets forventninger til hvordan menn og kvinner skal oppføre seg',
        'Lover om kjønn',
        'Biologiske forskjeller mellom kjønn',
        'Statistikk om kjønnsfordeling',
      ],
      explanation: 'Kjønnsroller er samfunnets forventninger til hvordan menn og kvinner skal oppføre seg. Disse har endret seg over tid.',
    },
    {
      question: 'Hvilket perspektiv vektlegger at kjønnsforskjeller har biologiske årsaker?',
      options: [
        'Det biologiske/tradisjonelle perspektivet',
        'Det sosialkonstruktivistiske perspektivet',
        'Det religiøse perspektivet',
        'Det økonomiske perspektivet',
      ],
      explanation: 'Det biologiske/tradisjonelle perspektivet vektlegger at kjønnsforskjeller har biologiske årsaker.',
    },
    {
      question: 'Hvilket perspektiv vektlegger at kjønnsroller er sosialt skapt?',
      options: [
        'Det sosialkonstruktivistiske perspektivet',
        'Det biologiske perspektivet',
        'Det tradisjonelle perspektivet',
        'Det økonomiske perspektivet',
      ],
      explanation: 'Det sosialkonstruktivistiske perspektivet vektlegger at kjønnsroller hovedsakelig er sosialt og kulturelt skapt.',
    },
    {
      question: 'Hva er sant om spørsmål knyttet til kjønn og seksualitet i samfunnet?',
      options: [
        'Folk har ulike syn basert på ulike verdier og livssyn',
        'Alle er enige om disse spørsmålene',
        'Bare vitenskapen kan svare på disse spørsmålene',
        'Disse spørsmålene er ikke viktige',
      ],
      explanation: 'Spørsmål om kjønn og seksualitet er områder der folk har ulike syn basert på biologi, kultur, religion og politisk overbevisning.',
    },
    {
      question: 'Hva sier norsk lov om diskriminering basert på seksuell orientering?',
      options: [
        'Det er forbudt å diskriminere basert på seksuell orientering',
        'Det er tillatt å diskriminere basert på seksuell orientering',
        'Loven sier ingenting om dette',
        'Bare offentlige arbeidsgivere har forbud mot dette',
      ],
      explanation: 'Likestillings- og diskrimineringsloven forbyr diskriminering basert på seksuell orientering.',
    },
  ],

  // ============================================================================
  // Kapittel 1.7: Digitale spor og personvern
  // ============================================================================
  'samfunnskunnskap-1-7': [
    {
      question: 'Hva er digitale spor?',
      options: [
        'Data som etterlates når vi bruker internett',
        'Fotspor på et digitalt bilde',
        'Fingeravtrykk på skjermen',
        'Merker på tastaturet',
      ],
      explanation: 'Digitale spor er data som etterlates når vi bruker internett - søkehistorikk, likes, lokasjon og mye mer.',
    },
    {
      question: 'Hva er GDPR?',
      options: [
        'EU/EØS-regelverk som gir oss rettigheter over personopplysninger',
        'En type internettforbindelse',
        'Et sosialt medium',
        'En type datamaskin',
      ],
      explanation: 'GDPR (Personvernforordningen) er EU/EØS-regelverk som gir oss rettigheter over hvordan våre personopplysninger behandles.',
    },
    {
      question: 'Hvilken rett har du under GDPR?',
      options: [
        'Rett til innsyn, sletting og å trekke samtykke',
        'Rett til gratis internett',
        'Rett til å hacke',
        'Rett til ubegrenset data',
      ],
      explanation: 'Under GDPR har du rett til innsyn i data om deg, rett til sletting, og rett til å trekke samtykke tilbake.',
    },
    {
      question: 'Hva er informasjonskapsler (cookies)?',
      options: [
        'Små datafiler som lagres i nettleseren for å spore aktivitet',
        'Godteri som spises ved datamaskinen',
        'En type virus',
        'Et passord',
      ],
      explanation: 'Informasjonskapsler er små datafiler som lagres i nettleseren din for å huske preferanser og spore aktivitet.',
    },
    {
      question: 'Hva er personopplysninger?',
      options: [
        'Informasjon som kan knyttes til en enkeltperson',
        'Offentlig informasjon',
        'Informasjon om produkter',
        'Anonyme data',
      ],
      explanation: 'Personopplysninger er informasjon som kan knyttes til en enkeltperson - navn, adresse, bilder, helseopplysninger osv.',
    },
    {
      question: 'Hva er Datatilsynet?',
      options: [
        'Norsk myndighet som fører tilsyn med personvern',
        'En privat bedrift som selger data',
        'Et sosialt medium',
        'En type antivirus',
      ],
      explanation: 'Datatilsynet er den norske myndigheten som fører tilsyn med personvern og behandling av personopplysninger.',
    },
    {
      question: 'Hvilken risiko er knyttet til digitale spor?',
      options: [
        'Identitetstyveri, målrettet manipulasjon og datalekkasjer',
        'At internett blir raskere',
        'At man får flere venner',
        'At man lærer mer',
      ],
      explanation: 'Digitale spor kan føre til identitetstyveri, målrettet manipulasjon, datalekkasjer og at informasjon brukes mot deg.',
    },
    {
      question: 'Hva betyr "Hvis tjenesten er gratis, er du produktet"?',
      options: [
        'At gratis tjenester tjener penger på å selge data om deg',
        'At du må jobbe for dem',
        'At du er en god kunde',
        'At du får rabatt',
      ],
      explanation: 'Uttrykket betyr at gratis tjenester som sosiale medier tjener penger på å samle og selge data om brukerne.',
    },
    {
      question: 'Hvordan kan du beskytte personvernet ditt på nett?',
      options: [
        'Sterke passord, tofaktor, sjekke personverninnstillinger',
        'Dele mest mulig',
        'Aldri bruke internett',
        'Bruke samme passord overalt',
      ],
      explanation: 'Du kan beskytte deg med sterke, unike passord, tofaktorautentisering, og ved å sjekke personverninnstillinger.',
    },
    {
      question: 'Hva er metadata?',
      options: [
        'Data om data, som når og hvor du var online',
        'Den viktigste dataen',
        'Falske data',
        'Slettet data',
      ],
      explanation: 'Metadata er data om data - for eksempel når, hvor og hvor lenge du var online, ikke innholdet i seg selv.',
    },
    {
      question: 'Hvem samler digitale spor om deg?',
      options: [
        'Sosiale medier, søkemotorer, nettbutikker og annonsenettverk',
        'Bare politiet',
        'Ingen',
        'Bare vennene dine',
      ],
      explanation: 'Mange aktører samler digitale spor: sosiale medier, søkemotorer, nettbutikker, annonsenettverk og myndigheter.',
    },
  ],

  // ============================================================================
  // Kapittel 1.8: Kritisk mediebruk
  // ============================================================================
  'samfunnskunnskap-1-8': [
    {
      question: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
      options: [
        'Feilinformasjon spres uten ond hensikt, desinformasjon spres bevisst for å villede',
        'De betyr det samme',
        'Feilinformasjon er verre',
        'Desinformasjon er sant',
      ],
      explanation: 'Feilinformasjon er usant som spres uten ond hensikt, mens desinformasjon er bevisst falsk informasjon spredt for å villede.',
    },
    {
      question: 'Hva er clickbait?',
      options: [
        'Overskrifter designet for å få deg til å klikke, ofte overdrevne',
        'En type virus',
        'En fiskemetode',
        'Et sosialt medium',
      ],
      explanation: 'Clickbait er overskrifter designet for å få deg til å klikke, ofte overdrevne eller villedende.',
    },
    {
      question: 'Hva står T for i TONE-metoden for kildekritikk?',
      options: [
        'Troverdighet',
        'Tekst',
        'Tid',
        'Tittel',
      ],
      explanation: 'T i TONE-metoden står for Troverdighet - hvem står bak kilden og er den pålitelig?',
    },
    {
      question: 'Hva er et ekkokammer?',
      options: [
        'Et miljø der du bare møter meninger du allerede er enig i',
        'Et rom med god akustikk',
        'En type høyttaler',
        'Et chatrom',
      ],
      explanation: 'Ekkokammer er miljøer der du bare møter meninger du allerede er enig i, noe som forsterker eksisterende syn.',
    },
    {
      question: 'Hva er deepfakes?',
      options: [
        'Manipulerte videoer eller bilder laget med kunstig intelligens',
        'Veldig dype svindelforsøk',
        'Ekstremt falske nyheter',
        'Dyp søvn',
      ],
      explanation: 'Deepfakes er manipulerte videoer eller bilder laget med kunstig intelligens som kan være vanskelige å avsløre.',
    },
    {
      question: 'Hva er propaganda?',
      options: [
        'Informasjon brukt for å fremme en politisk sak, ofte ensidig',
        'Nøytral informasjon',
        'Vitenskapelige artikler',
        'Underholdning',
      ],
      explanation: 'Propaganda er informasjon brukt for å fremme en politisk sak, ofte ensidig eller manipulerende.',
    },
    {
      question: 'Hva er en filterboble?',
      options: [
        'Når algoritmer viser deg innhold basert på tidligere preferanser',
        'En såpeboble',
        'Et vannfilter',
        'En type søkemotor',
      ],
      explanation: 'Filterbobler oppstår når algoritmer viser deg innhold basert på tidligere preferanser, noe som begrenser hva du ser.',
    },
    {
      question: 'Hva står O for i TONE-metoden?',
      options: [
        'Objektivitet',
        'Opprinnelse',
        'Ordvalg',
        'Oversikt',
      ],
      explanation: 'O i TONE-metoden står for Objektivitet - er informasjonen balansert og skilles det mellom fakta og meninger?',
    },
    {
      question: 'Hvilket nettsted kan brukes til faktasjekk i Norge?',
      options: [
        'Faktisk.no',
        'Falsk.no',
        'Sannhet.no',
        'Nyheter.no',
      ],
      explanation: 'Faktisk.no er en norsk faktasjekktjeneste som undersøker om påstander i offentlig debatt stemmer.',
    },
    {
      question: 'Hva er et varselstegn på upålitelig informasjon?',
      options: [
        'Anonyme forfattere, manglende kilder og ekstreme påstander',
        'Kjente medier',
        'Saklig språk',
        'Dokumenterte kilder',
      ],
      explanation: 'Varselstegn inkluderer anonyme forfattere, manglende kilder, dårlig språk, ekstreme påstander og oppfordringer om å dele raskt.',
    },
    {
      question: 'Hvorfor er kritisk mediebruk viktig i et demokrati?',
      options: [
        'For å skille fakta fra falsk informasjon og ta informerte valg',
        'For å bli populær på sosiale medier',
        'For å vinne diskusjoner',
        'For å lese flere nyheter',
      ],
      explanation: 'Kritisk mediebruk er viktig i et demokrati for å kunne skille mellom sant og usant og ta informerte valg.',
    },
    {
      question: 'Hva bør du gjøre før du deler en nyhet på sosiale medier?',
      options: [
        'Stoppe, sjekke kilden og verifisere påstandene',
        'Dele så raskt som mulig',
        'Bare lese overskriften',
        'Sjekke hvor mange likes den har',
      ],
      explanation: 'Før du deler bør du stoppe, sjekke kilden, lese mer enn overskriften og verifisere påstandene hos andre kilder.',
    },
  ],

  // Chapters 2.1-2.7
'samfunnskunnskap-2-1': [
    {
      question: 'Hva er identitet?',
      options: [
        'Hvordan vi oppfatter oss selv og hvordan andre oppfatter oss',
        'Bare utseendet vårt',
        'Personnummeret vårt',
        'Hvilken jobb vi har',
      ],
      explanation: 'Identitet handler om hvordan vi oppfatter oss selv og hvordan andre oppfatter oss.',
    },
    {
      question: 'Hva er sosial identitet?',
      options: [
        'Identitet knyttet til gruppetilhørighet som nasjonalitet, religion og yrke',
        'Hvor mange venner du har på sosiale medier',
        'Dine personlige drømmer og mål',
        'Din genetiske arv',
      ],
      explanation: 'Sosial identitet handler om gruppetilhørighet - nasjonalitet, etnisitet, religion, yrke og kjønn.',
    },
    {
      question: 'Hva mener G.H. Mead med "speilingsteori"?',
      options: [
        'At vi utvikler identitet ved å se oss selv gjennom andres reaksjoner',
        'At vi bør se oss selv i speilet hver dag',
        'At identitet er genetisk bestemt',
        'At vi kopierer andres identitet',
      ],
      explanation: 'Meads speilingsteori sier at vi utvikler identitet ved å speile oss i andres reaksjoner på oss.',
    },
    {
      question: 'Ifølge Erik Erikson, når er ungdomstiden særlig viktig?',
      options: [
        'For å finne ut hvem man er gjennom identitetskriser',
        'For å tjene penger',
        'For å lære seg et yrke',
        'For å finne en partner',
      ],
      explanation: 'Erikson mente at ungdomstiden er særlig viktig for å finne ut hvem man er gjennom identitetskriser.',
    },
    {
      question: 'Hva mener Anthony Giddens med "refleksiv identitet"?',
      options: [
        'At vi i moderne samfunn må aktivt skape vår egen identitet',
        'At identitet er bestemt av tradisjoner',
        'At vi reflekterer andres identitet',
        'At identitet ikke kan endres',
      ],
      explanation: 'Giddens mener at i moderne samfunn må vi aktivt skape vår egen identitet - det er ikke lenger gitt av tradisjon.',
    },
    {
      question: 'Hva er situasjonell identitet?',
      options: [
        'Hvordan identiteten vår kan variere i ulike situasjoner',
        'En identitet som er permanent',
        'En identitet basert på hvor du bor',
        'En identitet du får på jobben',
      ],
      explanation: 'Situasjonell identitet handler om at vi kan være annerledes i ulike situasjoner - hjemme versus på skolen.',
    },
    {
      question: 'Hva er digital identitet?',
      options: [
        'Hvordan du fremstiller deg selv på nett og i sosiale medier',
        'Ditt personnummer',
        'Din e-postadresse',
        'Antall enheter du eier',
      ],
      explanation: 'Digital identitet handler om hvordan du fremstiller deg selv på nett og i sosiale medier.',
    },
    {
      question: 'Hvilke faktorer former identitet?',
      options: [
        'Arv, familie, kultur, sosiale grupper, erfaringer og egne valg',
        'Bare genetikk',
        'Bare utdanning',
        'Bare arbeidserfaring',
      ],
      explanation: 'Identitet formes av arv, familie, kultur, sosiale grupper, erfaringer og egne valg.',
    },
    {
      question: 'Ifølge Stuart Hall, er identitet fast eller flytende?',
      options: [
        'Flytende og i stadig endring',
        'Fast og uforanderlig',
        'Fast fra fødselen',
        'Kun bestemt av kultur',
      ],
      explanation: 'Stuart Hall mener identitet er flytende og i stadig endring - vi har flere identiteter som aktiveres i ulike sammenhenger.',
    },
    {
      question: 'Hva er kulturell identitet?',
      options: [
        'Identitet formet av kulturelle verdier, tradisjoner og praksiser',
        'Å gå på kulturarrangementer',
        'Å lese bøker om kultur',
        'Å bo i et kulturhus',
      ],
      explanation: 'Kulturell identitet er identitet formet av de kulturelle verdiene, tradisjonene og praksisene du har vokst opp med.',
    },
  ],

  'samfunnskunnskap-2-2': [
    {
      question: 'Hva er kultur?',
      options: [
        'Verdier, normer, tradisjoner og praksiser som kjennetegner en gruppe mennesker',
        'Bare kunst og musikk',
        'Bare språk',
        'Bare religion',
      ],
      explanation: 'Kultur omfatter verdier, normer, tradisjoner og praksiser som kjennetegner en gruppe mennesker.',
    },
    {
      question: 'Hva er etnosentrisme?',
      options: [
        'Å vurdere andre kulturer ut fra sin egen kultur som målestokk',
        'Å forstå andre kulturer på deres egne premisser',
        'Å blande ulike kulturer',
        'Å studere etniske grupper',
      ],
      explanation: 'Etnosentrisme er å vurdere andre kulturer ut fra sin egen kultur som målestokk, ofte med antakelse om at egen kultur er best.',
    },
    {
      question: 'Hva er kulturrelativisme?',
      options: [
        'Å forstå andre kulturer på deres egne premisser',
        'Å vurdere andre kulturer ut fra sin egen kultur',
        'At all kultur er lik',
        'At kultur ikke kan sammenlignes',
      ],
      explanation: 'Kulturrelativisme er å forstå andre kulturer på deres egne premisser, uten å dømme ut fra egen kultur.',
    },
    {
      question: 'Hva er assimilering?',
      options: [
        'Når minoriteter gir opp sin kultur og tilpasser seg majoritetskulturen',
        'Gjensidig tilpasning mellom kulturer',
        'Når kulturer lever atskilt',
        'Når kulturer blandes til noe nytt',
      ],
      explanation: 'Assimilering er når minoriteter gir opp sin kultur og tilpasser seg majoritetskulturen fullstendig.',
    },
    {
      question: 'Hva er integrering?',
      options: [
        'Gjensidig tilpasning der minoriteter beholder sin kultur samtidig som de deltar i storsamfunnet',
        'At minoriteter gir opp sin kultur',
        'At kulturer lever helt atskilt',
        'At én kultur dominerer alle andre',
      ],
      explanation: 'Integrering er gjensidig tilpasning der minoriteter beholder viktige deler av sin kultur samtidig som de deltar i storsamfunnet.',
    },
    {
      question: 'Hva er kulturell hybriditet?',
      options: [
        'Når kulturer blandes og skaper nye uttrykk',
        'Når kulturer holdes adskilt',
        'Når én kultur forsvinner',
        'Når kultur ikke endrer seg',
      ],
      explanation: 'Kulturell hybriditet er når kulturer blandes og skaper nye uttrykk, som fusion-mat eller musikk som blander tradisjoner.',
    },
    {
      question: 'Hva er interkulturell kompetanse?',
      options: [
        'Evnen til å forstå, kommunisere og samhandle på tvers av kulturer',
        'Å kunne mange språk',
        'Å ha reist til mange land',
        'Å være ekspert på én kultur',
      ],
      explanation: 'Interkulturell kompetanse er evnen til å forstå, kommunisere og samhandle på tvers av kulturer - krever kunnskap, empati og respekt.',
    },
    {
      question: 'Hva er segregering?',
      options: [
        'Når ulike kulturgrupper lever atskilt med lite kontakt',
        'Når kulturer blandes',
        'Når én kultur dominerer',
        'Når minoriteter tilpasser seg majoriteten',
      ],
      explanation: 'Segregering er når ulike kulturgrupper lever atskilt med lite kontakt mellom gruppene.',
    },
    {
      question: 'Hvordan lærer vi kultur?',
      options: [
        'Gjennom sosialisering - kultur er ikke medfødt',
        'Kultur er medfødt og genetisk',
        'Vi lærer bare kultur på skolen',
        'Kultur kan ikke læres',
      ],
      explanation: 'Kultur er noe vi lærer gjennom sosialisering - det er ikke medfødt.',
    },
    {
      question: 'Hva er et flerkulturelt samfunn?',
      options: [
        'Et samfunn med mange ulike kulturer',
        'Et samfunn med bare én kultur',
        'Et samfunn uten religion',
        'Et samfunn med mange språk men samme kultur',
      ],
      explanation: 'Et flerkulturelt samfunn har tilstedeværelse av mange ulike kulturer. Norge er et flerkulturelt samfunn.',
    },
  ],

  'samfunnskunnskap-2-3': [
    {
      question: 'Hva er etnisitet?',
      options: [
        'Opplevd fellesskap basert på antatt felles opphav, kultur, språk og historie',
        'Det samme som rase',
        'Hvilken nasjon du er statsborger i',
        'Hvilken religion du tilhører',
      ],
      explanation: 'Etnisitet handler om opplevd fellesskap basert på antatt felles opphav, kultur, språk, historie eller tradisjoner.',
    },
    {
      question: 'Hva er nasjonalitet?',
      options: [
        'Tilhørighet til en nasjon eller stat, juridisk eller følelsesmessig',
        'Hvilken etnisk gruppe du tilhører',
        'Hvilket språk du snakker',
        'Hvilken religion du har',
      ],
      explanation: 'Nasjonalitet er tilhørighet til en nasjon eller stat, enten juridisk (statsborgerskap) eller følelsesmessig.',
    },
    {
      question: 'Hva er forskjellen mellom en stat og en nasjon?',
      options: [
        'Stat er geografisk område med felles regjering, nasjon er et forestilt fellesskap',
        'De betyr det samme',
        'Stat er større enn nasjon',
        'Nasjon er en type regjering',
      ],
      explanation: 'Stat er et geografisk område med felles regjering og lover. Nasjon er et forestilt fellesskap av mennesker med felles kultur og historie.',
    },
    {
      question: 'Hvorfor er "rase" et utdatert begrep?',
      options: [
        'Det finnes ikke biologiske raser blant mennesker - genetisk variasjon går på tvers av grupper',
        'Fordi det er et gammelt ord',
        'Fordi det bare brukes i USA',
        'Fordi det er vanskelig å uttale',
      ],
      explanation: 'Rase er utdatert fordi det ikke finnes biologiske raser blant mennesker - genetisk variasjon går på tvers av grupper.',
    },
    {
      question: 'Hva er statsborgerskap?',
      options: [
        'Juridisk tilhørighet til en stat som gir rettigheter og plikter',
        'Å bo i en by',
        'Å være stolt av landet sitt',
        'Å ha pass',
      ],
      explanation: 'Statsborgerskap er juridisk tilhørighet til en stat som gir rettigheter og plikter.',
    },
    {
      question: 'Nevn en etnisk gruppe i Norge:',
      options: [
        'Samer',
        'Svensker i Sverige',
        'Amerikanere',
        'Franskmenn',
      ],
      explanation: 'Samer er et eksempel på en etnisk gruppe i Norge. Andre eksempler er kvener, romfolk og jøder.',
    },
    {
      question: 'Hva kjennetegner nasjonalisme?',
      options: [
        'Ideologi som vektlegger nasjonal identitet og nasjonens interesser',
        'Å studere nasjoner',
        'Å reise mellom land',
        'Å lære flere språk',
      ],
      explanation: 'Nasjonalisme er en ideologi som vektlegger nasjonal identitet og nasjonens interesser.',
    },
    {
      question: 'Kan man ha tilhørighet til flere etniske grupper?',
      options: [
        'Ja, man kan ha tilhørighet til flere etniske grupper',
        'Nei, man kan bare tilhøre én',
        'Bare hvis man har dobbelt statsborgerskap',
        'Bare i noen land',
      ],
      explanation: 'Man kan ha tilhørighet til flere etniske grupper. Etnisk identitet kan også endre seg over tid.',
    },
    {
      question: 'Er etnisitet biologisk eller sosialt konstruert?',
      options: [
        'Sosialt konstruert - ikke biologisk bestemt',
        'Biologisk bestemt',
        'Halvparten av hver',
        'Verken eller',
      ],
      explanation: 'Etnisitet er sosialt konstruert, ikke biologisk bestemt. Det handler om opplevd fellesskap.',
    },
    {
      question: 'Hva betyr det at identitet kan være "både-og"?',
      options: [
        'At man kan identifisere seg med flere kulturer eller grupper samtidig',
        'At man må velge mellom to identiteter',
        'At identitet er halvt arv og halvt miljø',
        'At man har to personligheter',
      ],
      explanation: 'Både-og betyr at man kan identifisere seg med flere kulturer eller grupper samtidig, i stedet for enten-eller.',
    },
  ],

  'samfunnskunnskap-2-4': [
    {
      question: 'Hva er diskriminering?',
      options: [
        'Usaklig forskjellsbehandling basert på f.eks. etnisitet, kjønn eller religion',
        'Å skille mellom ulike typer produkter',
        'Å velge mellom alternativer',
        'Å ha sterke meninger',
      ],
      explanation: 'Diskriminering er usaklig forskjellsbehandling basert på forhold som etnisitet, religion, kjønn eller andre beskyttede grunnlag.',
    },
    {
      question: 'Hva er forskjellen mellom direkte og indirekte diskriminering?',
      options: [
        'Direkte er åpenlys forskjellsbehandling, indirekte er nøytrale regler som slår ulikt ut',
        'De betyr det samme',
        'Direkte er lovlig, indirekte er ulovlig',
        'Indirekte er verre enn direkte',
      ],
      explanation: 'Direkte diskriminering er åpenlys forskjellsbehandling. Indirekte diskriminering er tilsynelatende nøytrale regler som slår ulikt ut for ulike grupper.',
    },
    {
      question: 'Hvilken lov forbyr diskriminering i Norge?',
      options: [
        'Likestillings- og diskrimineringsloven',
        'Arbeidsmiljøloven',
        'Grunnloven alene',
        'Straffeloven alene',
      ],
      explanation: 'Likestillings- og diskrimineringsloven forbyr diskriminering på grunn av kjønn, etnisitet, religion, funksjonsevne, seksuell orientering og alder.',
    },
    {
      question: 'Hva handler Straffelovens §185 om?',
      options: [
        'Forbud mot hatytringer',
        'Forbud mot vold',
        'Forbud mot tyveri',
        'Forbud mot bedrageri',
      ],
      explanation: 'Straffelovens §185 forbyr offentlige uttalelser som truer, forhåner eller fremmer hat mot grupper. Det er debatt om hvor grensen mot ytringsfrihet skal gå.',
    },
    {
      question: 'Hva er Diskrimineringsnemndas rolle?',
      options: [
        'Å behandle klager på diskriminering og kan gi oppreisning',
        'Å dømme i rettssaker',
        'Å lage lover',
        'Å fengsle folk som diskriminerer',
      ],
      explanation: 'Diskrimineringsnemnda behandler klager på diskriminering og kan gi oppreisning til den som er blitt diskriminert.',
    },
    {
      question: 'Hva er forskjellen mellom saklig og usaklig forskjellsbehandling?',
      options: [
        'Saklig har god grunn og er lovlig, usaklig har ingen god grunn og er forbudt',
        'De betyr det samme',
        'Saklig er alltid ulovlig',
        'Usaklig er alltid lovlig',
      ],
      explanation: 'Saklig forskjellsbehandling har god grunn (f.eks. språkkrav til stillinger) og er lovlig. Usaklig forskjellsbehandling har ingen god grunn og er diskriminering.',
    },
    {
      question: 'Hva er et argument for anonyme jobbsøknader?',
      options: [
        'At søkere vurderes uten at navn kan påvirke beslutningen',
        'At det sparer tid for arbeidsgivere',
        'At alle får jobb',
        'At det er billigere',
      ],
      explanation: 'Anonyme jobbsøknader kan bidra til at søkere vurderes på kvalifikasjoner, uten at navn eller bakgrunn påvirker beslutningen.',
    },
    {
      question: 'Hva er et argument mot kvotering som likestillingstiltak?',
      options: [
        'At kvalifikasjoner kan bli oversett og at det kan oppleves som urettferdig',
        'At det alltid fungerer',
        'At alle er enige om at det er bra',
        'At det er gratis',
      ],
      explanation: 'Kritikere av kvotering mener det kan føre til at kvalifikasjoner oversees og oppleves som urettferdig av de som forbigås. Tilhengere mener det utjevner historiske skjevheter.',
    },
    {
      question: 'Hva er Likestillings- og diskrimineringsombudets rolle?',
      options: [
        'Å gi veiledning om diskrimineringssaker',
        'Å dømme i rettssaker',
        'Å lage lover',
        'Å fengsle folk som diskriminerer',
      ],
      explanation: 'Likestillings- og diskrimineringsombudet gir veiledning om diskrimineringssaker og bidrar til økt kunnskap om likestilling.',
    },
    {
      question: 'Hva er sant om tiltak mot diskriminering i arbeidslivet?',
      options: [
        'Det er uenighet om hvilke tiltak som er mest effektive',
        'Alle er enige om hvilke tiltak som fungerer',
        'Ingen tiltak fungerer',
        'Bare straff fungerer',
      ],
      explanation: 'Det er politisk uenighet om hvilke tiltak mot diskriminering som er mest effektive - noen vil ha strengere krav, andre vil la markedet løse det.',
    },
    {
      question: 'Hva beskytter likestillings- og diskrimineringsloven mot?',
      options: [
        'Diskriminering på grunn av kjønn, etnisitet, religion, funksjonsevne, seksuell orientering og alder',
        'Bare diskriminering på grunn av kjønn',
        'Bare diskriminering i arbeidslivet',
        'Bare diskriminering fra staten',
      ],
      explanation: 'Loven beskytter mot diskriminering på grunn av mange ulike forhold: kjønn, etnisitet, religion, funksjonsevne, seksuell orientering og alder.',
    },
  ],

  'samfunnskunnskap-2-5': [
    {
      question: 'Hvem er Norges urfolk?',
      options: [
        'Samene',
        'Vikingene',
        'Kvenene',
        'Romfolket',
      ],
      explanation: 'Samene er Norges urfolk og har bodd i nordområdene i tusenvis av år.',
    },
    {
      question: 'Hva heter det samiske området som strekker seg over flere land?',
      options: [
        'Sápmi',
        'Sameland',
        'Nordkalotten',
        'Skandinavia',
      ],
      explanation: 'Sápmi er det samiske området som strekker seg over Norge, Sverige, Finland og Russland.',
    },
    {
      question: 'Når ble Sametinget opprettet?',
      options: [
        '1989',
        '1945',
        '2000',
        '1814',
      ],
      explanation: 'Sametinget ble opprettet i 1989 som et folkevalgt organ for det samiske folket.',
    },
    {
      question: 'Hva var fornorskingspolitikken?',
      options: [
        'Norsk politikk for å assimilere samer og kvener, inkludert forbud mot samiske språk i skolen',
        'Politikk for å spre norsk kultur til utlandet',
        'Politikk for å øke innvandring til Norge',
        'Politikk for å styrke det norske språket',
      ],
      explanation: 'Fornorskingspolitikken (ca. 1850-1980) var norsk assimileringspolitikk der samiske språk ble forbudt i skolen og kulturen undertrykt.',
    },
    {
      question: 'Hvilke er de fem nasjonale minoritetene i Norge?',
      options: [
        'Kvener/norskfinner, skogfinner, jøder, romfolk og romanifolk/tatere',
        'Svensker, dansker, finner, islendinger og færøyinger',
        'Samer, kvener, polakker, pakistanere og somaliere',
        'Polakker, litauere, svensker, tyskere og briter',
      ],
      explanation: 'De fem nasjonale minoritetene i Norge er kvener/norskfinner, skogfinner, jøder, romfolk og romanifolk/tatere.',
    },
    {
      question: 'Hva var Alta-saken?',
      options: [
        'Protester mot vannkraftutbygging som rammet samiske områder',
        'En rettssak om samisk språk',
        'En konflikt om reindrift',
        'En debatt om Sametingets makt',
      ],
      explanation: 'Alta-saken (1979-1981) var protester mot utbygging av Alta-Kautokeino-vassdraget som ville ramme samiske reindriftsområder.',
    },
    {
      question: 'Hva er duodji?',
      options: [
        'Samisk håndverk',
        'Samisk dans',
        'Samisk mat',
        'Samisk musikk',
      ],
      explanation: 'Duodji er samisk tradisjonelt håndverk.',
    },
    {
      question: 'Hvilket organ har dokumentert konsekvensene av fornorskingspolitikken?',
      options: [
        'Sannhets- og forsoningskommisjonen',
        'Stortinget',
        'Sametinget',
        'FN',
      ],
      explanation: 'Sannhets- og forsoningskommisjonen har dokumentert konsekvensene av fornorskingspolitikken.',
    },
    {
      question: 'Hvor lenge har romanifolket/taterne bodd i Norden?',
      options: [
        'Ca. 500 år',
        'Ca. 100 år',
        'Ca. 50 år',
        'Ca. 1000 år',
      ],
      explanation: 'Romanifolket/taterne har bodd i Norden i ca. 500 år.',
    },
    {
      question: 'Hva skjedde med norske jøder under 2. verdenskrig?',
      options: [
        '773 norske jøder ble deportert til utryddelsesleire',
        'Alle jøder flyktet til Sverige',
        'Jødene ble ikke berørt',
        'Jødene fikk beskyttelse av staten',
      ],
      explanation: 'Under 2. verdenskrig ble 773 norske jøder deportert til utryddelsesleire.',
    },
    {
      question: 'Hvilket samisk språk er mest utbredt?',
      options: [
        'Nordsamisk',
        'Sørsamisk',
        'Lulesamisk',
        'Østsamisk',
      ],
      explanation: 'Nordsamisk er det mest utbredte samiske språket.',
    },
  ],

  'samfunnskunnskap-2-6': [
    {
      question: 'Hva er den største religionen i Norge?',
      options: [
        'Kristendom',
        'Islam',
        'Buddhisme',
        'Humanisme',
      ],
      explanation: 'Kristendom er den største religionen i Norge, med Den norske kirke som det største trossamfunnet.',
    },
    {
      question: 'Hva er den nest største religionen i Norge?',
      options: [
        'Islam',
        'Buddhisme',
        'Hinduisme',
        'Jødedom',
      ],
      explanation: 'Islam er den nest største religionen i Norge med ca. 200 000 medlemmer.',
    },
    {
      question: 'Hva er Human-Etisk Forbund?',
      options: [
        'Største livssynsorganisasjon utenfor kirken med humanistisk livssyn',
        'En kristen organisasjon',
        'En muslimsk organisasjon',
        'En buddhistisk organisasjon',
      ],
      explanation: 'Human-Etisk Forbund er den største livssynsorganisasjonen utenfor kirken, med humanistisk livssyn uten religion.',
    },
    {
      question: 'Hva skjedde med forholdet mellom stat og kirke i 2012?',
      options: [
        'Stat og kirke ble formelt skilt',
        'Kirken ble mer knyttet til staten',
        'Kirken ble nedlagt',
        'Ingenting endret seg',
      ],
      explanation: '2012-reformen skilte formelt stat og kirke, selv om Den norske kirke fortsatt er "Norges folkekirke" i Grunnloven.',
    },
    {
      question: 'Hva innebærer religionsfrihet ifølge Grunnloven §16?',
      options: [
        'Rett til å tro eller ikke tro, praktisere sin religion, og skifte religion',
        'Bare rett til å være kristen',
        'Bare rett til å ikke ha religion',
        'Rett til å påtvinge andre sin religion',
      ],
      explanation: 'Religionsfrihet innebærer rett til å tro eller ikke tro, praktisere sin religion, skifte religion og uttrykke religiøse meninger.',
    },
    {
      question: 'Omtrent hvor stor andel av befolkningen er medlem i Den norske kirke?',
      options: [
        'Ca. 69%',
        'Ca. 90%',
        'Ca. 50%',
        'Ca. 30%',
      ],
      explanation: 'Ca. 69% av befolkningen er medlem i Den norske kirke, selv om mange ikke er praktiserende.',
    },
    {
      question: 'Hvilken religion må kongen ifølge Grunnloven tilhøre?',
      options: [
        'Luthersk tro',
        'Katolsk tro',
        'Islam',
        'Kongen kan velge fritt',
      ],
      explanation: 'Kongen må fortsatt tilhøre luthersk tro ifølge Grunnloven.',
    },
    {
      question: 'Hvordan finansieres tros- og livssynssamfunn i Norge?',
      options: [
        'Staten gir økonomisk støtte til alle tros- og livssynssamfunn',
        'Bare Den norske kirke får støtte',
        'Ingen får statlig støtte',
        'Bare kristne trossamfunn får støtte',
      ],
      explanation: 'Staten gir økonomisk støtte til alle tros- og livssynssamfunn i Norge.',
    },
    {
      question: 'Er religionsfrihet absolutt i Norge?',
      options: [
        'Nei, den må veies mot andre rettigheter og hensyn',
        'Ja, den er helt uten begrensninger',
        'Bare for kristne',
        'Bare for norske statsborgere',
      ],
      explanation: 'Religionsfrihet er ikke absolutt - den må veies mot andre rettigheter og hensyn, som barns rettigheter.',
    },
    {
      question: 'Hva er hovedregelen for religiøse plagg i norske skoler?',
      options: [
        'De er i hovedsak tillatt, med noen unntak for sikkerhet og identifikasjon',
        'De er helt forbudt',
        'Bare kristne symboler er tillatt',
        'Bare lærere kan bruke religiøse plagg',
      ],
      explanation: 'I Norge er religiøse plagg i hovedsak tillatt i skolen. Det finnes noen unntak knyttet til sikkerhet og identifikasjon. Debatten pågår om ulike offentlige stillinger.',
    },
  ],

  'samfunnskunnskap-2-7': [
    {
      question: 'Omtrent hvor mange innvandrere og norskfødte med innvandrerforeldre bor i Norge?',
      options: [
        'Ca. 1 million',
        'Ca. 100 000',
        'Ca. 5 millioner',
        'Ca. 500 000',
      ],
      explanation: 'Ca. 1 million innvandrere og norskfødte med innvandrerforeldre bor i Norge.',
    },
    {
      question: 'Når kom den første store arbeidsinnvandringen til Norge?',
      options: [
        '1970-tallet, fra Pakistan, Tyrkia og Marokko',
        '1950-tallet, fra Sverige',
        '1990-tallet, fra Polen',
        '2000-tallet, fra Kina',
      ],
      explanation: 'På 1970-tallet kom den første store arbeidsinnvandringen til Norge fra Pakistan, Tyrkia og Marokko.',
    },
    {
      question: 'Hva skjedde i 1975 med innvandringspolitikken?',
      options: [
        'Det ble innført "innvandringsstopp"',
        'Grensene ble åpnet helt',
        'Norge meldte seg inn i EU',
        'Det ble innført visumfrihet',
      ],
      explanation: 'I 1975 ble det innført "innvandringsstopp" i Norge.',
    },
    {
      question: 'Hva er introduksjonsprogrammet?',
      options: [
        'Program med norskopplæring, samfunnskunnskap og arbeidsrettet tiltak for innvandrere',
        'Et program for å introdusere norsk mat',
        'Et TV-program om integrering',
        'Et program kun for barn',
      ],
      explanation: 'Introduksjonsprogrammet gir norskopplæring, samfunnskunnskap og arbeidsrettet tiltak til innvandrere.',
    },
    {
      question: 'Hva er forskjellen mellom innvandrer og norskfødt med innvandrerforeldre?',
      options: [
        'Innvandrer er født i utlandet, norskfødt med innvandrerforeldre er født i Norge',
        'Det er ingen forskjell',
        'Innvandrere har norsk statsborgerskap',
        'Norskfødte med innvandrerforeldre er født i utlandet',
      ],
      explanation: 'Innvandrer er person født i utlandet av to utenlandsfødte foreldre. Norskfødt med innvandrerforeldre er født i Norge av to innvandrerforeldre.',
    },
    {
      question: 'Hva skjedde med innvandringen etter EU-utvidelsen i 2004?',
      options: [
        'Stor arbeidsinnvandring fra Polen, Litauen og andre østeuropeiske land',
        'Innvandringen stoppet helt',
        'Bare flyktninger kom',
        'Innvandringen gikk kraftig ned',
      ],
      explanation: 'Etter EU-utvidelsen kom det stor arbeidsinnvandring fra Polen, Litauen og andre østeuropeiske land.',
    },
    {
      question: 'Hva er viktige faktorer for god integrering?',
      options: [
        'Arbeid, språk, utdanning, sosiale nettverk og inkluderende holdninger',
        'Bare språk',
        'Bare arbeid',
        'Bare bolig',
      ],
      explanation: 'Viktige faktorer for integrering er arbeid, språk, utdanning, sosiale nettverk og inkluderende holdninger i samfunnet.',
    },
    {
      question: 'Hva skjedde i 2015 som påvirket innvandringen til Norge?',
      options: [
        'Flyktningkrisen førte til mange asylsøkere fra Syria, Afghanistan og Eritrea',
        'Norge stengte grensene',
        'EU-utvidelsen',
        'Innvandringsstopp ble opphevet',
      ],
      explanation: 'I 2015 førte flyktningkrisen til mange asylsøkere fra Syria, Afghanistan og Eritrea.',
    },
    {
      question: 'Hvor stor andel av Oslos befolkning har innvandrerbakgrunn?',
      options: [
        'Ca. 34%',
        'Ca. 10%',
        'Ca. 50%',
        'Ca. 5%',
      ],
      explanation: 'Ca. 34% av Oslos befolkning har innvandrerbakgrunn.',
    },
    {
      question: 'Hva er strukturell integrering?',
      options: [
        'Deltakelse i arbeidsmarked, utdanning og økonomisk selvstendighet',
        'Å ha norske venner',
        'Å føle seg norsk',
        'Å lære om norsk kultur',
      ],
      explanation: 'Strukturell integrering handler om deltakelse i arbeidsmarked, utdanning og økonomisk selvstendighet.',
    },
    {
      question: 'Hva er sosial integrering?',
      options: [
        'Å ha sosiale nettverk, vennskap og føle tilhørighet',
        'Å ha jobb',
        'Å betale skatt',
        'Å kunne norsk',
      ],
      explanation: 'Sosial integrering handler om å ha sosiale nettverk, vennskap og føle tilhørighet i samfunnet.',
    },
    {
      question: 'Hvilke flyktninger kom til Norge fra 2022?',
      options: [
        'Ukrainske flyktninger',
        'Syriske flyktninger',
        'Afghanske flyktninger',
        'Somaliske flyktninger',
      ],
      explanation: 'Fra 2022 kom det mange ukrainske flyktninger til Norge på grunn av krigen i Ukraina.',
    },
  ],

  // Chapters 3.1-3.7
// ============================================================================
  // Kapittel 3.1: Arbeidsliv og arbeidstakere
  // ============================================================================
  'samfunnskunnskap-3-1': [
    {
      question: 'Hva er trepartssamarbeidet i den norske arbeidslivsmodellen?',
      options: [
        'Samarbeid mellom arbeidstakere, arbeidsgivere og staten',
        'Samarbeid mellom tre ulike fagforeninger',
        'Samarbeid mellom tre ulike bedrifter',
        'Samarbeid mellom skole, hjem og arbeidsliv',
      ],
      explanation: 'Trepartssamarbeidet er samarbeid mellom arbeidstakere (representert ved LO), arbeidsgivere (representert ved NHO) og staten.',
    },
    {
      question: 'Hva er LO?',
      options: [
        'Landsorganisasjonen - Norges største arbeidstakerorganisasjon',
        'Lønnsorganisasjonen - en arbeidsgiverforening',
        'Lovgivende organ - en del av Stortinget',
        'Lokal organisasjon - kommunale fagforeninger',
      ],
      explanation: 'LO (Landsorganisasjonen) er Norges største arbeidstakerorganisasjon og representerer arbeidstakere i trepartssamarbeidet.',
    },
    {
      question: 'Hva skal en arbeidsavtale inneholde?',
      options: [
        'Partenes navn, arbeidssted, lønn, arbeidstid og oppsigelsesfrister',
        'Bare lønn og arbeidstid',
        'Kun startdato og stillingsbeskrivelse',
        'Arbeidsgivers organisasjonsnummer',
      ],
      explanation: 'En arbeidsavtale skal inneholde partenes navn, arbeidssted, stillingsbeskrivelse, startdato, lønn, arbeidstid, ferie og oppsigelsesfrister.',
    },
    {
      question: 'Hva er normal maksimal arbeidstid per uke i Norge?',
      options: [
        '40 timer',
        '35 timer',
        '45 timer',
        '50 timer',
      ],
      explanation: 'Normal arbeidstid i Norge er maks 9 timer per dag og 40 timer per uke.',
    },
    {
      question: 'Hvor mange virkedager ferie har arbeidstakere krav på i Norge?',
      options: [
        'Minst 25 virkedager',
        'Minst 20 virkedager',
        'Minst 15 virkedager',
        'Minst 30 virkedager',
      ],
      explanation: 'Arbeidstakere i Norge har krav på minst 25 virkedager (5 uker) ferie.',
    },
    {
      question: 'Hvilken rettighet gir sterkt stillingsvern?',
      options: [
        'Vern mot oppsigelse uten saklig grunn',
        'Rett til høyere lønn',
        'Rett til ubegrenset overtid',
        'Rett til å jobbe hjemmefra',
      ],
      explanation: 'Sterkt stillingsvern betyr at det er vanskelig å si opp ansatte uten saklig grunn.',
    },
    {
      question: 'Hva er NHO?',
      options: [
        'Næringslivets Hovedorganisasjon - største arbeidsgiverorganisasjon',
        'Norsk Helse Organisasjon',
        'Nasjonalt Handelsombud',
        'Norges Hovedorganisasjon for ansatte',
      ],
      explanation: 'NHO (Næringslivets Hovedorganisasjon) er Norges største arbeidsgiverorganisasjon.',
    },
    {
      question: 'Hva gir arbeid utover inntekt?',
      options: [
        'Sosial tilhørighet, identitet og mestring',
        'Bare økonomisk trygghet',
        'Kun status i samfunnet',
        'Utelukkende struktur i hverdagen',
      ],
      explanation: 'Arbeid gir inntekt, sosial tilhørighet, mestring, struktur, identitet og bidrag til samfunnet.',
    },
    {
      question: 'Hva kjennetegner den norske arbeidslivsmodellen?',
      options: [
        'Høy organisasjonsgrad, tariffavtaler og trepartssamarbeid',
        'Lav organisasjonsgrad og individuell lønnsforhandling',
        'Ingen statlig involvering i arbeidslivet',
        'Svakt stillingsvern og store lønnsforskjeller',
      ],
      explanation: 'Den norske arbeidslivsmodellen kjennetegnes av høy organisasjonsgrad, tariffavtaler, trepartssamarbeid og sterkt stillingsvern.',
    },
    {
      question: 'Når skal en skriftlig arbeidsavtale være på plass?',
      options: [
        'Senest én måned etter oppstart',
        'Etter ett års ansettelse',
        'Bare ved fast ansettelse',
        'Det er ikke et lovkrav',
      ],
      explanation: 'Alle arbeidstakere har krav på skriftlig arbeidsavtale senest én måned etter oppstart.',
    },
  ],

  // ============================================================================
  // Kapittel 3.2: Arbeidsmiljø og HMS
  // ============================================================================
  'samfunnskunnskap-3-2': [
    {
      question: 'Hva står HMS for?',
      options: [
        'Helse, Miljø og Sikkerhet',
        'Hovedansvar, Medvirkning og Støtte',
        'Hjelp, Mekling og Samarbeid',
        'Handel, Markedsføring og Service',
      ],
      explanation: 'HMS står for Helse, Miljø og Sikkerhet - systematisk arbeid for å sikre et trygt arbeidsmiljø.',
    },
    {
      question: 'Hvem har hovedansvaret for HMS på arbeidsplassen?',
      options: [
        'Arbeidsgiver',
        'Arbeidstaker',
        'Verneombudet',
        'Arbeidstilsynet',
      ],
      explanation: 'Arbeidsgiver har hovedansvaret for HMS og skal sikre et forsvarlig arbeidsmiljø.',
    },
    {
      question: 'Hva er verneombudets rolle?',
      options: [
        'Representere ansatte i HMS-saker',
        'Betale for sikkerhetsutstyr',
        'Ansette nye medarbeidere',
        'Bestemme lønnen til ansatte',
      ],
      explanation: 'Verneombudet representerer ansatte i HMS-saker og skal påse at arbeidsmiljøet er forsvarlig.',
    },
    {
      question: 'Hva er Arbeidstilsynet?',
      options: [
        'Statlig etat som fører tilsyn med at arbeidsmiljøloven følges',
        'En fagforening for arbeidstakere',
        'Et privat konsulentfirma',
        'En avdeling i kommunen',
      ],
      explanation: 'Arbeidstilsynet er en statlig etat som fører tilsyn med at arbeidsmiljøloven følges.',
    },
    {
      question: 'Hva er psykososialt arbeidsmiljø?',
      options: [
        'Sosiale og psykologiske forhold på jobben som trivsel og relasjoner',
        'Bare lønnsnivået på arbeidsplassen',
        'Fysisk utforming av kontoret',
        'Antall timer du jobber',
      ],
      explanation: 'Psykososialt arbeidsmiljø handler om sosiale og psykologiske forhold som trivsel, relasjoner, stress og mobbing.',
    },
    {
      question: 'Hva omfatter fysisk arbeidsmiljø?',
      options: [
        'Lys, støy, temperatur og ergonomi',
        'Relasjoner mellom kollegaer',
        'Lederstil og kommunikasjon',
        'Lønns- og arbeidsvilkår',
      ],
      explanation: 'Fysisk arbeidsmiljø omfatter lys, støy, temperatur, ergonomi, ventilasjon og verneutstyr.',
    },
    {
      question: 'Hva er AMU?',
      options: [
        'Arbeidsmiljøutvalg - samarbeidsorgan i større virksomheter',
        'Arbeidsmarkedets Utviklingskontor',
        'Ansattes Medbestemmelsesutvalg',
        'Arbeidsmiljølovens Underutvalg',
      ],
      explanation: 'AMU (Arbeidsmiljøutvalg) er et samarbeidsorgan i større virksomheter for HMS-saker.',
    },
    {
      question: 'Hva skal arbeidsmiljøloven sikre?',
      options: [
        'Et arbeidsmiljø som gir trygghet mot fysiske og psykiske skadevirkninger',
        'At alle får lik lønn',
        'At bedrifter har overskudd',
        'At staten kontrollerer alle arbeidsplasser',
      ],
      explanation: 'Arbeidsmiljølovens formål er å sikre et arbeidsmiljø som gir full trygghet mot fysiske og psykiske skadevirkninger.',
    },
    {
      question: 'Hva bør du gjøre hvis du opplever mobbing på arbeidsplassen?',
      options: [
        'Dokumentere hendelser og si ifra til leder eller verneombud',
        'Ignorere det og håpe det går over',
        'Slutte i jobben med en gang',
        'Mobbe tilbake',
      ],
      explanation: 'Ved mobbing bør du dokumentere hendelser, si ifra til leder eller verneombud, og eventuelt kontakte Arbeidstilsynet.',
    },
    {
      question: 'Hva er minste hviletid mellom to arbeidsøkter?',
      options: [
        '11 timer sammenhengende',
        '8 timer sammenhengende',
        '6 timer sammenhengende',
        '4 timer sammenhengende',
      ],
      explanation: 'Arbeidstakere har krav på minst 11 timer sammenhengende hviletid i løpet av 24 timer.',
    },
  ],

  // ============================================================================
  // Kapittel 3.3: Lønn og lønnsforhandlinger
  // ============================================================================
  'samfunnskunnskap-3-3': [
    {
      question: 'Hva er en tariffavtale?',
      options: [
        'Skriftlig avtale mellom fagforening og arbeidsgiver om lønns- og arbeidsvilkår',
        'En individuell arbeidskontrakt',
        'En avtale mellom staten og kommunene',
        'En internasjonal handelsavtale',
      ],
      explanation: 'En tariffavtale er en skriftlig avtale mellom en fagforening og arbeidsgiver/arbeidsgiverorganisasjon om lønns- og arbeidsvilkår.',
    },
    {
      question: 'Hva er frontfagsmodellen?',
      options: [
        'Konkurranseutsatt industri forhandler først og setter rammen for andre',
        'De største fagforeningene forhandler først',
        'Offentlig sektor leder lønnsoppgjøret',
        'Hver bransje forhandler uavhengig',
      ],
      explanation: 'Frontfagsmodellen betyr at konkurranseutsatt industri forhandler først og setter rammen for lønnsveksten i andre sektorer.',
    },
    {
      question: 'Hva er streik?',
      options: [
        'Arbeidsnedleggelse for å presse frem bedre vilkår',
        'Når arbeidsgiver stenger ute ansatte',
        'En type bonusordning',
        'Forhandlinger mellom partene',
      ],
      explanation: 'Streik er arbeidsnedleggelse der arbeidstakere nekter å jobbe for å presse frem bedre vilkår.',
    },
    {
      question: 'Hva er lockout?',
      options: [
        'Arbeidsgiver stenger arbeidstakere ute fra arbeid',
        'Arbeidstakere nekter å jobbe',
        'En type arbeidskontrakt',
        'Forhandling mellom partene',
      ],
      explanation: 'Lockout er når arbeidsgiver stenger arbeidstakere ute fra arbeid - arbeidsgivers motvåpen til streik.',
    },
    {
      question: 'Hva er fredsplikt?',
      options: [
        'Forbud mot streik og lockout mens tariffavtalen gjelder',
        'Krav om at arbeidsplassen skal være fredelig',
        'Rett til å nekte militærtjeneste',
        'En type forsikring',
      ],
      explanation: 'Fredsplikt betyr at mens en tariffavtale gjelder, kan ikke arbeidstakere streike eller arbeidsgivere lockout.',
    },
    {
      question: 'Hva gjør Riksmekleren?',
      options: [
        'Mekler mellom partene for å unngå konflikt',
        'Bestemmer lønnen i alle bransjer',
        'Ansetter arbeidstakere',
        'Kontrollerer arbeidsplasser',
      ],
      explanation: 'Riksmekleren mekler mellom arbeidstaker- og arbeidsgiverorganisasjoner for å unngå streik og lockout.',
    },
    {
      question: 'Hvilken faktor påvirker IKKE lønnsnivået?',
      options: [
        'Været',
        'Utdanning og kompetanse',
        'Bransje og geografisk område',
        'Erfaring',
      ],
      explanation: 'Lønn påvirkes av utdanning, erfaring, bransje, geografisk område og organisasjonsgrad - ikke været.',
    },
    {
      question: 'Hva er tvungen lønnsnemnd?',
      options: [
        'Staten griper inn og tvinger partene til en løsning',
        'En obligatorisk bonus til ansatte',
        'En type fagforening',
        'Automatisk lønnsøkning',
      ],
      explanation: 'Tvungen lønnsnemnd er når staten griper inn og tvinger partene til å godta en løsning - brukes sjelden.',
    },
    {
      question: 'Hva forklarer Norges relativt lave lønnsforskjeller?',
      options: [
        'Høy organisasjonsgrad, tariffavtaler og trepartssamarbeid',
        'Staten bestemmer alle lønninger',
        'Det er ingen fagforeninger i Norge',
        'Alle tjener det samme',
      ],
      explanation: 'Norge har lave lønnsforskjeller på grunn av tariffavtaler og trepartssamarbeid. Det er uenighet om dette er positivt eller om det hemmer vekst.',
    },
    {
      question: 'Hvor lenge gjelder vanligvis en tariffavtale?',
      options: [
        '2 år',
        '1 år',
        '5 år',
        '10 år',
      ],
      explanation: 'En tariffavtale gjelder vanligvis for 2 år før den reforhandles.',
    },
  ],

  // ============================================================================
  // Kapittel 3.4: Likestilling i arbeidslivet
  // ============================================================================
  'samfunnskunnskap-3-4': [
    {
      question: 'Hva er horisontal kjønnsdeling i arbeidsmarkedet?',
      options: [
        'Kvinner og menn jobber i ulike yrker og bransjer',
        'Flere menn enn kvinner i lederstillinger',
        'Kvinner og menn har lik lønn',
        'Alle bransjer har like mange kvinner og menn',
      ],
      explanation: 'Horisontal kjønnsdeling betyr at kvinner og menn jobber i ulike yrker og bransjer.',
    },
    {
      question: 'Hva er vertikal kjønnsdeling?',
      options: [
        'Flere menn enn kvinner i lederstillinger',
        'Kvinner og menn jobber i ulike bransjer',
        'Kvinner jobber mer deltid enn menn',
        'Menn og kvinner har lik lønn',
      ],
      explanation: 'Vertikal kjønnsdeling betyr at flere menn enn kvinner er i lederstillinger.',
    },
    {
      question: 'Hva er de to hovedforklaringene på kjønnsforskjeller i arbeidslivet?',
      options: [
        'Frie valg og preferanser vs. strukturelle barrierer og diskriminering',
        'Lønn og arbeidstid',
        'Privat og offentlig sektor',
        'Fulltid og deltid',
      ],
      explanation: 'Det er uenighet om kjønnsforskjeller skyldes frie valg/preferanser eller strukturelle barrierer/diskriminering. De fleste mener begge faktorer spiller inn.',
    },
    {
      question: 'Hvor mye tjener kvinner i gjennomsnitt sammenlignet med menn?',
      options: [
        'Ca. 87% av menns lønn',
        'Nøyaktig det samme',
        'Ca. 95% av menns lønn',
        'Ca. 70% av menns lønn',
      ],
      explanation: 'Kvinner tjener i gjennomsnitt ca. 87% av menns lønn i Norge. Mesteparten forklares av yrkes- og stillingsvalg.',
    },
    {
      question: 'Hva er fedrekvoten?',
      options: [
        'Del av foreldrepermisjonen forbeholdt far',
        'Krav om at menn må jobbe mer',
        'Ekstra lønn til fedre',
        'En bonus for menn i lederstillinger',
      ],
      explanation: 'Fedrekvoten er minst 15 uker av foreldrepermisjonen som er forbeholdt far og ikke kan overføres til mor.',
    },
    {
      question: 'Hva sier loven om spørsmål om graviditetsplaner på jobbintervju?',
      options: [
        'Det er ulovlig å spørre om dette',
        'Arbeidsgiver har rett til å spørre',
        'Det er frivillig å svare',
        'Bare offentlige arbeidsgivere kan spørre',
      ],
      explanation: 'Det er ulovlig for arbeidsgivere å spørre om graviditetsplaner på jobbintervju ifølge likestillings- og diskrimineringsloven.',
    },
    {
      question: 'Hva er styrekvotering i ASA-selskaper?',
      options: [
        'Krav om minst 40% av hvert kjønn i styret',
        'Forbud mot kvinner i styrer',
        'Lik lønn for styremedlemmer',
        'Maks 30% av hvert kjønn',
      ],
      explanation: 'ASA-selskaper må ha minst 40% av hvert kjønn i styret. Styrekvotering er omstridt - noen mener det sikrer mangfold, andre mener kvalifikasjoner bør telle mest.',
    },
    {
      question: 'Hvilke yrker er typisk kvinnedominerte?',
      options: [
        'Helse, omsorg og undervisning',
        'Bygg, teknologi og IT',
        'Ingeniørfag og programmering',
        'Transport og logistikk',
      ],
      explanation: 'Helse, omsorg, undervisning og barnehage er typisk kvinnedominerte yrker. Det er uenighet om dette skyldes valg eller barrierer.',
    },
    {
      question: 'Hva forbyr likestillings- og diskrimineringsloven?',
      options: [
        'Diskriminering på grunn av kjønn, graviditet og foreldrepermisjon',
        'Ulik arbeidstid for kvinner og menn',
        'At menn og kvinner jobber i samme bransje',
        'Lønnsforhandlinger',
      ],
      explanation: 'Likestillings- og diskrimineringsloven forbyr diskriminering på grunn av kjønn, graviditet og foreldrepermisjon.',
    },
    {
      question: 'Hva er argumenter MOT fedrekvoten?',
      options: [
        'Begrenser familiens frihet til å organisere seg selv',
        'Den er for kort',
        'Den koster for lite',
        'Den gjelder bare i offentlig sektor',
      ],
      explanation: 'Kritikere mener fedrekvoten begrenser familiens frihet til å fordele permisjonen selv. Tilhengere mener den fremmer likestilling.',
    },
  ],

  // ============================================================================
  // Kapittel 3.5: Arbeidsledighet og Nav
  // ============================================================================
  'samfunnskunnskap-3-5': [
    {
      question: 'Hva er konjunkturledighet?',
      options: [
        'Ledighet som skyldes nedgangstider i økonomien',
        'Ledighet som skyldes endringer i næringsstrukturen',
        'Kortvarig ledighet ved jobbskifte',
        'Ledighet som varierer med årstidene',
      ],
      explanation: 'Konjunkturledighet skyldes nedgangstider i økonomien - når etterspørselen faller og bedrifter sier opp folk.',
    },
    {
      question: 'Hva er strukturell ledighet?',
      options: [
        'Ledighet som skyldes varige endringer i næringsstrukturen',
        'Ledighet som skyldes nedgangstider',
        'Kortvarig ledighet ved jobbskifte',
        'Ledighet som varierer med årstidene',
      ],
      explanation: 'Strukturell ledighet skyldes varige endringer i næringsstrukturen, der jobber forsvinner permanent.',
    },
    {
      question: 'Hva er Nav?',
      options: [
        'Arbeids- og velferdsforvaltningen som forvalter trygdeytelser',
        'En privat forsikringsselskap',
        'En fagforening',
        'En avdeling i kommunen',
      ],
      explanation: 'Nav (Arbeids- og velferdsforvaltningen) forvalter arbeidsformidling, trygdeytelser og sosiale tjenester.',
    },
    {
      question: 'Hva er dagpenger?',
      options: [
        'Økonomisk støtte ved arbeidsledighet',
        'Lønn for dagarbeid',
        'Bonus fra arbeidsgiver',
        'Feriepenger',
      ],
      explanation: 'Dagpenger er økonomisk støtte fra Nav ved arbeidsledighet til de som oppfyller kravene.',
    },
    {
      question: 'Hva er et krav for å få dagpenger?',
      options: [
        'Aktivt søke jobb og være registrert hos Nav',
        'Ha jobbet minst 10 år',
        'Være over 30 år',
        'Ha høyere utdanning',
      ],
      explanation: 'For å få dagpenger må du være registrert som arbeidssøker hos Nav og aktivt søke jobb.',
    },
    {
      question: 'Hvor stor andel av tidligere lønn gir dagpenger omtrent?',
      options: [
        'Ca. 62% av tidligere inntekt',
        'Ca. 90% av tidligere inntekt',
        'Ca. 40% av tidligere inntekt',
        '100% av tidligere inntekt',
      ],
      explanation: 'Dagpenger gir ca. 62,4% av tidligere inntekt, opp til et visst tak.',
    },
    {
      question: 'Hva er langtidsledighet?',
      options: [
        'Arbeidsledighet som varer over ett år',
        'Ledighet i mer enn en måned',
        'Ledighet i mer enn tre måneder',
        'Ledighet i mer enn seks måneder',
      ],
      explanation: 'Langtidsledighet defineres som arbeidsledighet som varer over ett år.',
    },
    {
      question: 'Hva kan konsekvenser av arbeidsledighet være for individet?',
      options: [
        'Tap av inntekt, identitet og økt risiko for psykiske problemer',
        'Bare tap av inntekt',
        'Bare tap av sosial tilhørighet',
        'Ingen alvorlige konsekvenser',
      ],
      explanation: 'Arbeidsledighet kan føre til tap av inntekt, identitet, sosial tilhørighet og økt risiko for psykiske problemer.',
    },
    {
      question: 'Hva er sesongledighet?',
      options: [
        'Ledighet som varierer med årstidene',
        'Ledighet som skyldes nedgangstider',
        'Ledighet ved jobbskifte',
        'Ledighet som varer over ett år',
      ],
      explanation: 'Sesongledighet varierer med årstidene, for eksempel i turisme, jordbruk eller fiskeri.',
    },
    {
      question: 'Hva er typisk arbeidsledighetsrate i Norge i normalår?',
      options: [
        'Ca. 3-4%',
        'Ca. 10-15%',
        'Ca. 1%',
        'Ca. 20%',
      ],
      explanation: 'Norge har historisk lav arbeidsledighet, typisk rundt 3-4% i normalår.',
    },
  ],

  // ============================================================================
  // Kapittel 3.6: Fremtidens arbeidsliv
  // ============================================================================
  'samfunnskunnskap-3-6': [
    {
      question: 'Hva er en viktig drivkraft for endring i arbeidslivet?',
      options: [
        'Digitalisering og automatisering',
        'Flere bruker kontanter',
        'Mindre globalisering',
        'Færre tar høyere utdanning',
      ],
      explanation: 'Digitalisering og automatisering er en av de viktigste drivkreftene som endrer arbeidslivet.',
    },
    {
      question: 'Hva er gig-økonomien?',
      options: [
        'Korttidsoppdrag og frilansarbeid via plattformer',
        'Arbeid i musikkbransjen',
        'Fast ansettelse i store selskaper',
        'Offentlig ansettelse',
      ],
      explanation: 'Gig-økonomien består av korttidsoppdrag og frilansarbeid formidlet via digitale plattformer som Uber og Foodora.',
    },
    {
      question: 'Hvilke jobber er mest utsatt for automatisering?',
      options: [
        'Rutinepreget arbeid',
        'Kreative yrker',
        'Omsorgsyrker',
        'Lederstillinger',
      ],
      explanation: 'Rutinepreget arbeid, både manuelt og kognitivt, er mest utsatt for automatisering.',
    },
    {
      question: 'Hvilke jobber er minst utsatt for automatisering?',
      options: [
        'Kreative yrker og omsorgsyrker',
        'Enkle kontoroppgaver',
        'Kundeservice via chat',
        'Rutinepreget industriarbeid',
      ],
      explanation: 'Kreative yrker, omsorgsyrker og jobber som krever menneskelig kontakt er minst utsatt for automatisering.',
    },
    {
      question: 'Hva er en utfordring med gig-økonomien?',
      options: [
        'Usikre arbeidsforhold og manglende rettigheter',
        'For mye stabilitet',
        'For høy lønn',
        'For strenge regler',
      ],
      explanation: 'Gig-økonomien gir usikre arbeidsforhold, manglende rettigheter til sykepenger og pensjon, og uforutsigbar inntekt.',
    },
    {
      question: 'Hva er kunstig intelligens (KI)?',
      options: [
        'Datamaskiner som kan lære, resonnere og ta beslutninger',
        'Roboter som ser ut som mennesker',
        'Sosiale medier',
        'Automatiske døråpnere',
      ],
      explanation: 'Kunstig intelligens (KI) er datamaskiner som kan lære, resonnere og ta beslutninger.',
    },
    {
      question: 'Hva menes med livslang læring?',
      options: [
        'Å oppdatere kompetansen gjennom hele arbeidslivet',
        'Å gå på skole hele livet',
        'Å aldri pensjonere seg',
        'Å lese bøker hver dag',
      ],
      explanation: 'Livslang læring betyr å oppdatere kompetansen gjennom hele arbeidslivet for å holde tritt med endringer.',
    },
    {
      question: 'Hva har Høyesterett sagt om Foodora-bud?',
      options: [
        'De er arbeidstakere, ikke selvstendig næringsdrivende',
        'De er selvstendig næringsdrivende',
        'De har ingen rettigheter',
        'De må betale for egen sykkel',
      ],
      explanation: 'Høyesterett har slått fast at Foodora-bud er arbeidstakere, ikke selvstendig næringsdrivende.',
    },
    {
      question: 'Hvilken kompetanse blir viktigere i fremtidens arbeidsliv?',
      options: [
        'Tilpasningsevne og myke ferdigheter',
        'Kun tekniske ferdigheter',
        'Evne til rutinearbeid',
        'Fysisk styrke',
      ],
      explanation: 'Tilpasningsevne, myke ferdigheter som kommunikasjon og empati, og evne til livslang læring blir viktigere.',
    },
    {
      question: 'Hva er grønn omstilling?',
      options: [
        'Overgang til mer miljøvennlig produksjon og arbeidsformer',
        'Å male arbeidsplassen grønn',
        'Å ha planter på kontoret',
        'Å jobbe utendørs',
      ],
      explanation: 'Grønn omstilling handler om overgangen til mer miljøvennlig og bærekraftig produksjon og arbeidsformer.',
    },
  ],

  // ============================================================================
  // Kapittel 3.7: Svart arbeid og arbeidslivskriminalitet
  // ============================================================================
  'samfunnskunnskap-3-7': [
    {
      question: 'Hva er svart arbeid?',
      options: [
        'Arbeid der inntekten ikke oppgis til skattemyndighetene',
        'Arbeid som utføres om natten',
        'Arbeid i kullindustrien',
        'Tungt fysisk arbeid',
      ],
      explanation: 'Svart arbeid er arbeid som utføres uten at inntekten oppgis til skattemyndighetene.',
    },
    {
      question: 'Hvilke bransjer er mest utsatt for svart arbeid?',
      options: [
        'Bygg, renhold, restaurant og transport',
        'Offentlig forvaltning',
        'Bank og finans',
        'IT og teknologi',
      ],
      explanation: 'Bygg, renhold, restaurant og transport er bransjene som er mest utsatt for svart arbeid.',
    },
    {
      question: 'Hva er arbeidslivskriminalitet?',
      options: [
        'Systematisk og organisert kriminalitet i arbeidslivet',
        'Å komme for sent på jobb',
        'Å ta lang lunsjpause',
        'Å bruke telefonen på jobb',
      ],
      explanation: 'Arbeidslivskriminalitet er systematisk og organisert kriminalitet som menneskehandel, grov utnytting og skatteunndragelse.',
    },
    {
      question: 'Hvorfor er det dumt å jobbe svart?',
      options: [
        'Ingen rettigheter som sykepenger, ferie og pensjon',
        'Du tjener for mye penger',
        'Arbeidsgiver får vite for mye om deg',
        'Det er for trygt',
      ],
      explanation: 'Ved svart arbeid mister du rettigheter som sykepenger, ferie, pensjon og forsikring ved skade.',
    },
    {
      question: 'Hvem rammes ofte av arbeidslivskriminalitet?',
      options: [
        'Særlig utenlandske arbeidstakere og sårbare grupper',
        'Bare norske arbeidstakere',
        'Bare ledere',
        'Bare offentlig ansatte',
      ],
      explanation: 'Arbeidslivskriminalitet rammer ofte utenlandske arbeidstakere og sårbare grupper som ikke kjenner sine rettigheter.',
    },
    {
      question: 'Hva er en konsekvens av svart arbeid for samfunnet?',
      options: [
        'Tapte skatteinntekter som finansierer velferd',
        'Flere jobber',
        'Bedre arbeidsmiljø',
        'Lavere lønninger for alle',
      ],
      explanation: 'Svart arbeid fører til at samfunnet mister skatteinntekter som ellers ville finansiert velferdsordninger.',
    },
    {
      question: 'Hva er A-krimsentrene?',
      options: [
        'Sentre der offentlige etater samarbeider mot arbeidslivskriminalitet',
        'Private vaktselskaper',
        'Advokatkontorer',
        'Arbeidsplasser for kriminelle',
      ],
      explanation: 'A-krimsentrene er samarbeidsorgan der politi, Arbeidstilsynet, skatteetaten og Nav jobber sammen mot arbeidslivskriminalitet.',
    },
    {
      question: 'Hva er allmenngjøring av tariffavtaler?',
      options: [
        'At tariffavtalens vilkår gjelder for alle i bransjen, også uorganiserte',
        'At alle må være medlem av en fagforening',
        'At staten bestemmer alle lønninger',
        'At tariffavtaler ikke gjelder',
      ],
      explanation: 'Allmenngjøring betyr at tariffavtalens minstevilkår gjelder for alle i bransjen, også de som ikke er organisert.',
    },
    {
      question: 'Hvor stort anslås svart arbeid i Norge å være årlig?',
      options: [
        '40-100 milliarder kroner',
        '1-5 milliarder kroner',
        '500-1000 milliarder kroner',
        '10-20 millioner kroner',
      ],
      explanation: 'Svart arbeid i Norge anslås å utgjøre mellom 40 og 100 milliarder kroner årlig.',
    },
    {
      question: 'Hva kan du gjøre hvis du mistenker arbeidslivskriminalitet?',
      options: [
        'Kontakte Arbeidstilsynet eller politiet',
        'Ingenting, det er ikke ditt problem',
        'Delta selv',
        'Bare ignorere det',
      ],
      explanation: 'Ved mistanke om arbeidslivskriminalitet kan du kontakte Arbeidstilsynet, politiet eller fagforeninger.',
    },
    {
      question: 'Hvorfor utkonkurrerer useriøse bedrifter ofte seriøse?',
      options: [
        'De har lavere kostnader fordi de bryter loven',
        'De har bedre produkter',
        'De har flinkere ansatte',
        'De har mer reklame',
      ],
      explanation: 'Useriøse bedrifter har lavere kostnader fordi de unndrar skatt og bryter arbeidsmiljøloven, og kan dermed underby seriøse bedrifter.',
    },
  ],

  // Chapters 4.1-4.7
'samfunnskunnskap-4-1': [
    {
      question: 'Hva betyr demokrati?',
      options: [
        'Folkestyre',
        'Kongestyre',
        'Adel-styre',
        'Militærstyre',
      ],
      explanation: 'Demokrati kommer fra gresk og betyr folkestyre - en styreform der folket har makt til å bestemme.',
    },
    {
      question: 'Hva er IKKE et kjennetegn på et demokratisk samfunn?',
      options: [
        'Én leder med all makt',
        'Frie og rettferdige valg',
        'Ytringsfrihet',
        'Uavhengige domstoler',
      ],
      explanation: 'I et demokrati er makten fordelt, ikke konsentrert hos én leder. Frie valg, ytringsfrihet og uavhengige domstoler er alle demokratiske kjennetegn.',
    },
    {
      question: 'Hva er direkte demokrati?',
      options: [
        'Folket stemmer direkte over saker, f.eks. gjennom folkeavstemninger',
        'Folket velger representanter som tar beslutninger',
        'Kongen bestemmer direkte',
        'Regjeringen tar alle beslutninger',
      ],
      explanation: 'I direkte demokrati stemmer folket direkte over saker, som i folkeavstemninger. Dette praktiseres bl.a. i Sveits.',
    },
    {
      question: 'Hvilken demokratiform har Norge?',
      options: [
        'Representativt demokrati',
        'Direkte demokrati',
        'Militært demokrati',
        'Presidentdemokrati',
      ],
      explanation: 'Norge har et representativt demokrati der folket velger representanter (stortingsrepresentanter) som tar beslutninger på deres vegne.',
    },
    {
      question: 'Hvorfor er mindretallets rettigheter viktig i et demokrati?',
      options: [
        'Fordi grunnleggende menneskerettigheter gjelder alle, uansett flertall',
        'Fordi mindretallet alltid har rett',
        'Fordi flertallet ikke skal få bestemme noe',
        'Fordi mindretallet betaler mer skatt',
      ],
      explanation: 'Mindretallets rettigheter beskytter mot "flertallets tyranni" og sikrer at menneskerettigheter gjelder alle.',
    },
    {
      question: 'Hva er parlamentarisk demokrati?',
      options: [
        'Regjeringen utgår fra og er avhengig av parlamentets tillit',
        'Presidenten velges direkte av folket',
        'Kongen har all makt',
        'Folket stemmer direkte over alle saker',
      ],
      explanation: 'I et parlamentarisk demokrati, som i Norge, må regjeringen ha parlamentets (Stortingets) tillit for å sitte.',
    },
    {
      question: 'Hva kjennetegner et liberalt demokrati?',
      options: [
        'Kombinerer flertallsstyre med sterkt vern av individuelle rettigheter',
        'Kun flertallet bestemmer alt',
        'Ingen individuelle rettigheter',
        'Staten kontrollerer alt',
      ],
      explanation: 'Et liberalt demokrati kombinerer demokratisk flertallsstyre med sterkt vern av individuelle rettigheter og friheter.',
    },
    {
      question: 'Hva menes med maktfordeling i et demokrati?',
      options: [
        'Makten er delt mellom ulike institusjoner som holder hverandre i sjakk',
        'Én person har all makten',
        'Bare folket har makt',
        'Makten fordeles likt mellom alle borgere',
      ],
      explanation: 'Maktfordeling betyr at makten er delt mellom ulike institusjoner (Storting, regjering, domstoler) som kontrollerer hverandre.',
    },
    {
      question: 'Hva er pressefrihet?',
      options: [
        'Frie, uavhengige medier som kan overvåke makten',
        'At pressen bestemmer politikken',
        'At staten kontrollerer mediene',
        'At kun ett parti har tilgang til medier',
      ],
      explanation: 'Pressefrihet betyr at mediene er frie og uavhengige, og kan kritisere og overvåke de som har makt.',
    },
    {
      question: 'Hvilke utfordringer kan demokratiet stå overfor?',
      options: [
        'Polarisering, tillitsproblemer og desinformasjon',
        'For mye ytringsfrihet',
        'For mange politiske partier',
        'For hyppige valg',
      ],
      explanation: 'Utfordringer for demokratiet kan inkludere polarisering, tillitsproblemer og desinformasjon. Det er uenighet om hva som er de viktigste utfordringene.',
    },
  ],

  'samfunnskunnskap-4-2': [
    {
      question: 'Hva slags styreform har Norge?',
      options: [
        'Konstitusjonelt monarki og parlamentarisk demokrati',
        'Republikk med president',
        'Absolutt monarki',
        'Direkte demokrati',
      ],
      explanation: 'Norge er et konstitusjonelt monarki (kongen er statsoverhode uten reell makt) og et parlamentarisk demokrati.',
    },
    {
      question: 'Hva er Stortingets hovedoppgaver?',
      options: [
        'Vedta lover og statsbudsjett, og kontrollere regjeringen',
        'Dømme i rettssaker',
        'Lede den daglige forvaltningen',
        'Representere Norge i utlandet',
      ],
      explanation: 'Stortinget er den lovgivende makt som vedtar lover og budsjett, og kontrollerer regjeringen.',
    },
    {
      question: 'Hvor mange representanter sitter på Stortinget?',
      options: [
        '169',
        '100',
        '200',
        '150',
      ],
      explanation: 'Stortinget har 169 representanter som velges hvert fjerde år.',
    },
    {
      question: 'Hva er regjeringens rolle i maktfordelingen?',
      options: [
        'Den utøvende makt - foreslår lover og gjennomfører Stortingets vedtak',
        'Den lovgivende makt',
        'Den dømmende makt',
        'Bare rådgivende funksjon',
      ],
      explanation: 'Regjeringen er den utøvende makt som foreslår lover, leder forvaltningen og gjennomfører Stortingets vedtak.',
    },
    {
      question: 'Hva er parlamentarisme?',
      options: [
        'Regjeringen må ha Stortingets tillit for å sitte',
        'Stortinget velger president',
        'Kongen utnevner regjeringen uten Stortingets samtykke',
        'Folket stemmer direkte over regjeringen',
      ],
      explanation: 'Parlamentarisme betyr at regjeringen må ha Stortingets tillit. Mister den tilliten, må den gå av.',
    },
    {
      question: 'Hva er negativ parlamentarisme?',
      options: [
        'Regjeringen sitter så lenge den ikke får flertallet mot seg',
        'Regjeringen må ha aktivt flertall for seg',
        'Stortinget kan ikke avsette regjeringen',
        'Opposisjonen har vetorett',
      ],
      explanation: 'I negativ parlamentarisme (som i Norge) trenger ikke regjeringen aktivt godkjennes - den sitter så lenge det ikke er flertall mot den.',
    },
    {
      question: 'Hva er en mindretallsregjering?',
      options: [
        'En regjering uten flertall på Stortinget, som må søke støtte fra sak til sak',
        'En regjering med bare én minister',
        'En regjering som kun representerer mindretallsgrupper',
        'En midlertidig regjering',
      ],
      explanation: 'En mindretallsregjering mangler flertall på Stortinget og må forhandle med andre partier for å få vedtak. Dette er vanlig i Norge.',
    },
    {
      question: 'Hva er domstolenes rolle i maktfordelingen?',
      options: [
        'Den dømmende makt - dømmer i saker og kan prøve om lover strider mot Grunnloven',
        'Foreslår nye lover',
        'Leder den daglige forvaltningen',
        'Vedtar statsbudsjettet',
      ],
      explanation: 'Domstolene er den dømmende makt. De dømmer i saker og kan prøve om lover er i strid med Grunnloven.',
    },
    {
      question: 'Hva er et mistillitsforslag?',
      options: [
        'Stortinget kan vedta at regjeringen må gå av',
        'Regjeringen foreslår at Stortinget oppløses',
        'Kongen avsetter regjeringen',
        'Folket stemmer over regjeringen',
      ],
      explanation: 'Et mistillitsforslag er når Stortinget vedtar at de ikke har tillit til regjeringen, som da må gå av.',
    },
    {
      question: 'Hvorfor er maktfordelingsprinsippet viktig?',
      options: [
        'Hindrer maktkonsentrasjon og beskytter borgernes frihet',
        'Gjør beslutninger raskere',
        'Gir kongen mer makt',
        'Reduserer antall politikere',
      ],
      explanation: 'Maktfordeling hindrer at én person eller gruppe får all makt, og sikrer at statsmaktene kontrollerer hverandre.',
    },
  ],

  'samfunnskunnskap-4-3': [
    {
      question: 'Hvor ofte holdes stortingsvalg i Norge?',
      options: [
        'Hvert fjerde år',
        'Hvert andre år',
        'Hvert femte år',
        'Hvert år',
      ],
      explanation: 'Stortingsvalg holdes hvert fjerde år i Norge.',
    },
    {
      question: 'Hvem har stemmerett ved stortingsvalg?',
      options: [
        'Norske statsborgere som har fylt 18 år innen utgangen av valgåret',
        'Alle som bor i Norge',
        'Alle over 16 år',
        'Bare de som er medlem i et politisk parti',
      ],
      explanation: 'For å stemme ved stortingsvalg må du være norsk statsborger og ha fylt 18 år innen utgangen av valgåret.',
    },
    {
      question: 'Hva er forholdstallsvalg?',
      options: [
        'Mandatene fordeles proporsjonalt etter partienes stemmetall',
        'Den som får flest stemmer vinner alt',
        'Bare to partier kan stille',
        'Velgerne stemmer på enkeltpersoner, ikke partier',
      ],
      explanation: 'Forholdstallsvalg betyr at mandatene fordeles proporsjonalt etter hvor mange stemmer partiene får. Dette sikrer at flere partier blir representert.',
    },
    {
      question: 'Hva er sperregrensen i Norge?',
      options: [
        '4% av stemmene nasjonalt for å få utjevningsmandater',
        '10% av stemmene',
        '1% av stemmene',
        'Det finnes ingen sperregrense',
      ],
      explanation: 'Sperregrensen er på 4%. Partier under dette får ikke utjevningsmandater, men kan likevel vinne distriktsmandater.',
    },
    {
      question: 'Hvor mange mandater er det på Stortinget totalt?',
      options: [
        '169 (150 distriktsmandater + 19 utjevningsmandater)',
        '200',
        '100',
        '150',
      ],
      explanation: 'Stortinget har 169 mandater: 150 distriktsmandater og 19 utjevningsmandater (ett per valgdistrikt).',
    },
    {
      question: 'Hva er utjevningsmandater?',
      options: [
        'Mandater som sikrer at partienes mandattall stemmer bedre med stemmetallet nasjonalt',
        'Mandater til små partier',
        'Mandater som fordeles tilfeldig',
        'Ekstra mandater til det største partiet',
      ],
      explanation: 'Utjevningsmandatene (19 stk) fordeles for å sikre at forholdet mellom mandater og stemmer blir mer rettferdig nasjonalt.',
    },
    {
      question: 'Hvor mange valgdistrikter er Norge delt inn i?',
      options: [
        '19 (fylkene)',
        '10',
        '50',
        '169',
      ],
      explanation: 'Norge er delt inn i 19 valgdistrikter som tilsvarer fylkene.',
    },
    {
      question: 'Når kan man forhåndsstemme?',
      options: [
        'Fra juli til fredag før valgdagen',
        'Bare på valgdagen',
        'Bare i valgåret',
        'Når som helst i løpet av året',
      ],
      explanation: 'Forhåndsstemming er mulig fra juli og frem til fredag før valgdagen.',
    },
    {
      question: 'Hvorfor er det viktig at valget er hemmelig?',
      options: [
        'For at velgere skal kunne stemme fritt uten press eller påvirkning',
        'For å gjøre opptellingen vanskeligere',
        'For å spare tid',
        'Det er ikke viktig',
      ],
      explanation: 'Hemmelig valg sikrer at velgere kan stemme fritt uten å frykte konsekvenser eller press fra andre.',
    },
    {
      question: 'Hva kan en velger gjøre på stemmeseddelen?',
      options: [
        'Velge partiets liste og gi personstemmer til kandidater',
        'Bare velge parti, ikke kandidater',
        'Bare stemme på enkeltpersoner',
        'Skrive inn egne kandidater',
      ],
      explanation: 'Velgeren velger partiets liste, men kan også gi personstemmer til kandidater og stryke kandidater (med liten effekt).',
    },
  ],

  'samfunnskunnskap-4-4': [
    {
      question: 'Hva er et politisk partis hovedfunksjon?',
      options: [
        'Å rekruttere politikere, utvikle politikk og koble folkets ønsker til beslutninger',
        'Å arrangere fester',
        'Å tjene penger',
        'Å kontrollere mediene',
      ],
      explanation: 'Politiske partier rekrutterer politikere, utvikler politiske programmer og fungerer som bindeledd mellom folket og makten.',
    },
    {
      question: 'Hva kjennetegner venstresiden i politikken?',
      options: [
        'Større offentlig sektor, mer omfordeling gjennom skatt',
        'Lavere skatter og mer privatisering',
        'Fokus på tradisjonelle verdier',
        'Mest opptatt av distriktspolitikk',
      ],
      explanation: 'Venstresiden vil ha større offentlig sektor, mer omfordeling gjennom skatt og sterkere arbeidstakerrettigheter.',
    },
    {
      question: 'Hva kjennetegner høyresiden i politikken?',
      options: [
        'Mindre stat, lavere skatter og mer marked',
        'Større offentlig sektor',
        'Mer omfordeling',
        'Sterkere fagforeninger',
      ],
      explanation: 'Høyresiden vil ha mindre stat, lavere skatter, mer marked og privatisering, og vektlegger individuelt ansvar.',
    },
    {
      question: 'Hvilke partier regnes til venstresiden?',
      options: [
        'Rødt, SV og Arbeiderpartiet',
        'Høyre og Frp',
        'KrF og Venstre',
        'Senterpartiet og MDG',
      ],
      explanation: 'Rødt, SV og Arbeiderpartiet regnes til venstresiden på den tradisjonelle høyre-venstre-aksen.',
    },
    {
      question: 'Hvilke partier regnes til høyresiden?',
      options: [
        'Høyre og Fremskrittspartiet',
        'Rødt og SV',
        'Arbeiderpartiet og Senterpartiet',
        'MDG og Venstre',
      ],
      explanation: 'Høyre og Fremskrittspartiet regnes til høyresiden på den tradisjonelle høyre-venstre-aksen.',
    },
    {
      question: 'Hva er Senterpartiets viktigste politiske profil?',
      options: [
        'Distriktspolitikk og skepsis til sentralisering og EU',
        'Lavere skatter',
        'Mer privatisering',
        'Sterkere fagforeninger',
      ],
      explanation: 'Senterpartiet er et distriktsparti som er skeptisk til sentralisering og EU/EØS.',
    },
    {
      question: 'Hva er flerpartisystem?',
      options: [
        'Et politisk system med mange partier representert i parlamentet',
        'Et system med bare to partier',
        'Et system uten partier',
        'Et system der ett parti har all makt',
      ],
      explanation: 'Norge har et flerpartisystem med mange partier på Stortinget. Dette sikrer mangfold, men kan gjøre regjeringsdannelse vanskeligere.',
    },
    {
      question: 'Hva menes med "rødgrønn" side i norsk politikk?',
      options: [
        'Ap, SV og Sp som tradisjonelt samarbeider',
        'Høyre og Frp',
        'KrF og Venstre',
        'MDG alene',
      ],
      explanation: 'Den rødgrønne siden består tradisjonelt av Ap, SV og Sp, som har samarbeidet om regjeringsmakt.',
    },
    {
      question: 'Hvilke andre politiske skillelinjer finnes utover høyre-venstre?',
      options: [
        'Sentrum vs. distrikt, verdispørsmål, EU/EØS og miljø',
        'Bare høyre-venstre er relevant',
        'Kjønn og alder',
        'Utdanningsnivå',
      ],
      explanation: 'Partiene skiller seg også på sentrum vs. distrikt, verdispørsmål (liberal vs. konservativ), EU/EØS og miljøpolitikk.',
    },
    {
      question: 'Hva er opposisjonens rolle?',
      options: [
        'Å holde regjeringen ansvarlig og presentere alternativer',
        'Å støtte alt regjeringen gjør',
        'Å ikke delta i Stortingets arbeid',
        'Å blokkere alle vedtak',
      ],
      explanation: 'Opposisjonen holder regjeringen ansvarlig gjennom kritikk og spørsmål, og presenterer alternative løsninger.',
    },
  ],

  'samfunnskunnskap-4-5': [
    {
      question: 'Hvor mange kommuner har Norge per 2024?',
      options: [
        '357',
        '100',
        '500',
        '200',
      ],
      explanation: 'Norge har 357 kommuner per 2024.',
    },
    {
      question: 'Hva er kommunestyret?',
      options: [
        'Øverste organ i kommunen, valgt direkte av innbyggerne',
        'En rådgivende gruppe',
        'Kommunedirektørens stab',
        'Et utvalg oppnevnt av staten',
      ],
      explanation: 'Kommunestyret er kommunens øverste organ og velges direkte av innbyggerne ved kommunevalg.',
    },
    {
      question: 'Når holdes kommune- og fylkestingsvalg?',
      options: [
        'Hvert fjerde år, to år etter stortingsvalg',
        'Hvert år',
        'Hvert andre år',
        'Samtidig med stortingsvalg',
      ],
      explanation: 'Kommune- og fylkestingsvalg holdes hvert fjerde år, alltid to år etter stortingsvalget.',
    },
    {
      question: 'Hvilken av disse er IKKE en lovpålagt kommunal oppgave?',
      options: [
        'Videregående skole',
        'Grunnskole',
        'Barnehage',
        'Barnevern',
      ],
      explanation: 'Videregående skole er fylkeskommunens ansvar, ikke kommunens. Kommunen har ansvar for grunnskole, barnehage og barnevern.',
    },
    {
      question: 'Hva er ordførerens rolle?',
      options: [
        'Leder kommunestyret og formannskapet, representerer kommunen utad',
        'Bestemmer alene i kommunen',
        'Ansetter alle kommunalt ansatte',
        'Vedtar budsjettet',
      ],
      explanation: 'Ordføreren leder kommunestyret og formannskapet og representerer kommunen utad, men har ikke mer makt enn andre folkevalgte.',
    },
    {
      question: 'Hva er kommunedirektørens rolle?',
      options: [
        'Øverste administrative leder, leder forvaltningen',
        'Øverste politiske leder',
        'Valgt av folket',
        'Leder kommunestyret',
      ],
      explanation: 'Kommunedirektøren er øverste administrative leder, ansatt av kommunestyret, og leder administrasjonen.',
    },
    {
      question: 'Hva er fylkeskommunens viktigste oppgave?',
      options: [
        'Videregående opplæring',
        'Grunnskole',
        'Barnehage',
        'Sykehus',
      ],
      explanation: 'Fylkeskommunen har ansvar for videregående opplæring, samt kollektivtransport, tannhelse og regional utvikling.',
    },
    {
      question: 'Hvordan finansieres kommunene hovedsakelig?',
      options: [
        'Skatteinntekter og tilskudd fra staten',
        'Bare egenkapital',
        'Bare brukerbetalinger',
        'Lån fra utlandet',
      ],
      explanation: 'Kommunene finansieres hovedsakelig gjennom skatteinntekter (ca. 40%) og rammetilskudd fra staten (ca. 30%).',
    },
    {
      question: 'Hva er formannskapets rolle?',
      options: [
        'Forbereder saker før de går til kommunestyret',
        'Tar alle beslutninger i kommunen',
        'Erstatter kommunestyret',
        'Velges direkte av folket',
      ],
      explanation: 'Formannskapet velges av kommunestyret og forbereder saker, behandler hastesaker og har ofte delegert myndighet i noen saker.',
    },
    {
      question: 'Hvorfor er lokaldemokrati viktig?',
      options: [
        'Beslutninger tas nærmere innbyggerne og tilpasses lokale forhold',
        'Det er billigere',
        'Staten slipper ansvar',
        'Færre trenger å delta',
      ],
      explanation: 'Lokaldemokrati sikrer at beslutninger tas nærmere innbyggerne, tilpasses lokale forhold, og at flere kan delta i politikken.',
    },
  ],

  'samfunnskunnskap-4-6': [
    {
      question: 'Hva handler medborgerskap om?',
      options: [
        'Å være en aktiv deltaker i samfunnet med både rettigheter og plikter',
        'Bare å ha statsborgerskap',
        'Bare å stemme ved valg',
        'Å bo i et land',
      ],
      explanation: 'Medborgerskap handler om mer enn statsborgerskap - det innebærer å være aktiv deltaker i samfunnet med rettigheter og plikter.',
    },
    {
      question: 'Hva er konvensjonell politisk deltakelse?',
      options: [
        'Deltakelse gjennom etablerte demokratiske kanaler som valg og partimedlemskap',
        'Deltakelse gjennom demonstrasjoner',
        'Sivil ulydighet',
        'Boikott av varer',
      ],
      explanation: 'Konvensjonell deltakelse følger etablerte kanaler: stemme ved valg, være medlem i parti, kontakte politikere, delta i høringer.',
    },
    {
      question: 'Hva er ukonvensjonell politisk deltakelse?',
      options: [
        'Demonstrasjoner, aksjoner, boikott og sivil ulydighet',
        'Å stemme ved valg',
        'Å være partimedlem',
        'Å skrive leserinnlegg',
      ],
      explanation: 'Ukonvensjonell deltakelse går utenfor etablerte kanaler: demonstrasjoner, boikott, aksjoner og sivil ulydighet.',
    },
    {
      question: 'Hva er sivilsamfunnet?',
      options: [
        'Frivillige organisasjoner og foreninger mellom stat og marked',
        'Staten',
        'Næringslivet',
        'Politiske partier alene',
      ],
      explanation: 'Sivilsamfunnet er den delen av samfunnet som verken er stat eller marked - frivillige organisasjoner, foreninger og nettverk.',
    },
    {
      question: 'Hva er sivil ulydighet?',
      options: [
        'Å bevisst bryte loven for å protestere mot urettferdighet, og akseptere straffen',
        'Å stemme blankt',
        'Å ikke betale skatt',
        'Å melde seg ut av samfunnet',
      ],
      explanation: 'Sivil ulydighet er å bevisst bryte loven på en fredelig måte for å protestere mot urettferdighet, mens man aksepterer konsekvensene.',
    },
    {
      question: 'Hvilken av disse er et eksempel på sivilsamfunnet?',
      options: [
        'Røde Kors',
        'Stortinget',
        'Regjeringen',
        'Statoil',
      ],
      explanation: 'Røde Kors er en frivillig organisasjon og del av sivilsamfunnet. Stortinget og regjeringen er stat, Statoil/Equinor er marked.',
    },
    {
      question: 'Hva er digital politisk deltakelse?',
      options: [
        'Dele politiske meninger på nett, e-demokrati og online petisioner',
        'Å stemme elektronisk',
        'Å hacke politikeres kontoer',
        'Å bruke datamaskiner',
      ],
      explanation: 'Digital deltakelse inkluderer å dele meninger på sosiale medier, delta i digitale høringer og signere online opprop.',
    },
    {
      question: 'Hvor stor andel av nordmenn er medlem i minst én organisasjon?',
      options: [
        'Over 80%',
        'Ca. 50%',
        'Ca. 20%',
        'Under 10%',
      ],
      explanation: 'Norge har et sterkt sivilsamfunn - over 80% av nordmenn er medlem i minst én organisasjon.',
    },
    {
      question: 'Hva var Altaaksjonen et eksempel på?',
      options: [
        'Sivil ulydighet mot kraftutbygging',
        'Valgkamp',
        'Partilandsmøte',
        'Stortingsdebatt',
      ],
      explanation: 'Altaaksjonen (1979-81) var sivil ulydighet mot utbygging av Alta-Kautokeino-vassdraget.',
    },
    {
      question: 'Hvilke plikter har en medborger?',
      options: [
        'Betale skatt, verneplikt og delta i demokratiet',
        'Bare å stemme',
        'Ingen plikter',
        'Bare å følge lover',
      ],
      explanation: 'Medborgere har plikter som å betale skatt, verneplikt og å bidra til demokratiet gjennom deltakelse.',
    },
  ],

  'samfunnskunnskap-4-7': [
    {
      question: 'Hva menes med begrepet "demokratisk tilbakegang"?',
      options: [
        'Et begrep brukt om svekkelse av demokratiske institusjoner',
        'At flere stemmer ved valg',
        'At nye partier dannes',
        'At demokratiet styrkes',
      ],
      explanation: 'Demokratisk tilbakegang brukes om svekkelse av demokratiske institusjoner. Begrepet er omdiskutert - noen mener det brukes politisk.',
    },
    {
      question: 'Hvilke utfordringer kan demokratiet stå overfor?',
      options: [
        'Polarisering, lav valgdeltakelse og tillitsproblemer',
        'For mange partier',
        'For høy valgdeltakelse',
        'For sterke medier',
      ],
      explanation: 'Utfordringer inkluderer polarisering, lav valgdeltakelse i noen grupper, tillitsproblemer og desinformasjon.',
    },
    {
      question: 'Hva er desinformasjon?',
      options: [
        'Bevisst feilinformasjon for å villede',
        'Sann informasjon',
        'Nyheter fra etablerte medier',
        'Offentlige utredninger',
      ],
      explanation: 'Desinformasjon er bevisst feilinformasjon som spres for å villede folk.',
    },
    {
      question: 'Hvorfor er det uenighet om hva som er desinformasjon?',
      options: [
        'Fordi ulike grupper har ulike syn på hva som er sant',
        'Fordi alt er sant',
        'Fordi ingen lyver',
        'Fordi mediene alltid har rett',
      ],
      explanation: 'Det er debatt om hva som er desinformasjon fordi ulike grupper har ulike syn på hva som er sant og hvem som sprer feilinformasjon.',
    },
    {
      question: 'Hva menes med polarisering i samfunnet?',
      options: [
        'Økende avstand mellom politiske grupper og mindre dialog',
        'At folk blir mer enige',
        'At flere partier dannes',
        'At valgdeltakelsen øker',
      ],
      explanation: 'Polarisering betyr at avstanden mellom politiske grupper øker, med mindre vilje til kompromiss.',
    },
    {
      question: 'Hvorfor er det uenighet om demokratiets tilstand i ulike land?',
      options: [
        'Fordi ulike grupper har ulike syn på hva som utgjør et godt demokrati',
        'Fordi alle er enige',
        'Fordi demokrati er det samme overalt',
        'Fordi ingen bryr seg',
      ],
      explanation: 'Det er uenighet fordi noen vektlegger liberale rettigheter, andre flertallsviljen. Kritikere og tilhengere ser ulikt på endringer.',
    },
    {
      question: 'Hva kan være en ekstern utfordring for demokratier?',
      options: [
        'Utenlandsk påvirkning og cyberangrep',
        'Frie valg',
        'Sterke domstoler',
        'Ytringsfrihet',
      ],
      explanation: 'Eksterne utfordringer kan inkludere påvirkningsforsøk fra andre land og cyberangrep. Det er debatt om omfanget.',
    },
    {
      question: 'Hva er et ekkokammer?',
      options: [
        'Miljøer der man hovedsakelig møter meninger som ligner ens egne',
        'Et rom med god akustikk',
        'En type sosiale medier',
        'Et debattforum',
      ],
      explanation: 'Ekkokamre er miljøer der man hovedsakelig eksponeres for meninger som bekrefter ens egne synspunkter.',
    },
    {
      question: 'Hva viser den sterke polariseringen i USA?',
      options: [
        'At det er dyp uenighet om demokratiets tilstand og spilleregler',
        'At alle er enige',
        'At demokratiet er perfekt',
        'At det ikke er noen utfordringer',
      ],
      explanation: 'USA viser at det kan være dyp uenighet om demokratiets tilstand. Begge politiske sider anklager hverandre for å true demokratiet.',
    },
    {
      question: 'Hva er det uenighet om når det gjelder å styrke demokratiet?',
      options: [
        'Om fokus bør være på institusjoner, flertallsvilje eller ytringsfrihet',
        'Alle er enige om tiltak',
        'Ingen bryr seg om demokratiet',
        'Det finnes bare én løsning',
      ],
      explanation: 'Det er uenighet om hva som styrker demokratiet. Noen vektlegger institusjoner, andre flertallsviljen, andre ytringsfrihet.',
    },
    {
      question: 'Hva er terrorangrepet 22. juli 2011 et eksempel på?',
      options: [
        'Høyreekstrem trussel mot demokratiet',
        'Demokratisk tilbakegang',
        'Sivil ulydighet',
        'Politisk polarisering',
      ],
      explanation: '22. juli-terroren var et høyreekstremt angrep som viste hvordan ekstremisme truer demokratiet innenfra.',
    },
    {
      question: 'Hvordan kan økonomisk ulikhet true demokratiet?',
      options: [
        'De fattigste deltar minst politisk, og rike får uforholdsmessig innflytelse',
        'Det styrker demokratiet',
        'Det har ingen betydning',
        'Det øker valgdeltakelsen',
      ],
      explanation: 'Økonomisk ulikhet kan føre til politisk fremmedgjøring der de fattigste deltar minst, mens rike får mer innflytelse.',
    },
  ],

  // Chapters 5.1-5.6
'samfunnskunnskap-5-1': [
    {
      question: 'Hva er en politisk ideologi?',
      options: [
        'Et sammenhengende sett av ideer om hvordan samfunnet bør organiseres',
        'En religiøs overbevisning',
        'En vitenskapelig teori',
        'En personlig mening om politikk',
      ],
      explanation: 'En politisk ideologi er et sammenhengende sett av ideer om hvordan samfunnet bør organiseres, med verdier, prinsipper og mål.',
    },
    {
      question: 'Hva inneholder IKKE en typisk politisk ideologi?',
      options: [
        'Eksakte svar på alle spesifikke politiske spørsmål',
        'Verdier og prinsipper',
        'Syn på statens rolle',
        'Mål for samfunnet',
      ],
      explanation: 'Ideologier gir rammer og prinsipper, men ikke nødvendigvis eksakte svar på alle konkrete politiske spørsmål.',
    },
    {
      question: 'Hvilket av disse er IKKE et kjennetegn ved politiske ideologier?',
      options: [
        'De er nøytrale og objektive',
        'De er normative - de sier hvordan ting bør være',
        'De er handlingsorienterte',
        'De er forenklende',
      ],
      explanation: 'Ideologier er normative (de sier hvordan ting bør være), handlingsorienterte og forenklende - men de er ikke nøytrale eller objektive.',
    },
    {
      question: 'Hva handler motsetningsparet "frihet vs. likhet" om?',
      options: [
        'Hvor mye frihet individet skal ha versus hvor mye likhet samfunnet bør sikre',
        'Om man skal være fri til å stemme eller ikke',
        'Om alle skal ha like mange venner',
        'Om frihet til å reise utenlands',
      ],
      explanation: 'Dette er et grunnleggende spørsmål om balansen mellom individuell frihet og økonomisk/sosial likhet i samfunnet.',
    },
    {
      question: 'Hva menes med motsetningen "marked vs. stat"?',
      options: [
        'Hvor mye markedet skal styre økonomien versus hvor mye staten bør regulere',
        'Om staten skal eie alle butikker',
        'Om det skal være lov å handle på søndager',
        'Om staten skal bestemme alle priser',
      ],
      explanation: 'Dette handler om hvor mye markedet skal styre økonomien fritt, versus hvor mye staten bør regulere og omfordele.',
    },
    {
      question: 'Hvorfor er politiske ideologier viktige?',
      options: [
        'De gir politikken retning og hjelper oss forstå politiske konflikter',
        'De gjør politikk enklere å forstå for barn',
        'De bestemmer hvem som vinner valg',
        'De erstatter lover og regler',
      ],
      explanation: 'Ideologier er viktige fordi de gir politikken retning, hjelper oss forstå konflikter, og setter ord på verdier og prioriteringer.',
    },
    {
      question: 'Hva betyr det at ideologier er "normative"?',
      options: [
        'De sier ikke bare hvordan ting er, men hvordan de bør være',
        'De følger normale regler',
        'De er vanlige og utbredte',
        'De er basert på normer i samfunnet',
      ],
      explanation: 'At ideologier er normative betyr at de inneholder verdier og mål som politikken skal jobbe mot - de sier hvordan samfunnet bør være.',
    },
    {
      question: 'Hvordan vil en klassisk liberal typisk se på skatter?',
      options: [
        'Lavest mulig skatter - individet skal beholde mest mulig av egen inntekt',
        'Høyest mulig skatter for å finansiere velferd',
        'Moderate skatter som ikke endres',
        'Ingen mening om skatter',
      ],
      explanation: 'Klassisk liberalisme vektlegger individuell frihet og ønsker lavest mulig skatter, da individet skal beholde mest mulig av egne penger.',
    },
    {
      question: 'Hva menes med at ideologier er "konkurrenerende"?',
      options: [
        'Ulike ideologier kjemper om oppslutning og politisk makt',
        'De konkurrerer i sportslige konkurranser',
        'De prøver å bli mest populære på sosiale medier',
        'De konkurrerer om å ha flest tilhengere',
      ],
      explanation: 'Ulike ideologier konkurrerer om oppslutning og politisk makt, og representerer ulike interesser og verdier i samfunnet.',
    },
    {
      question: 'Hvilket motsetningspar handler om hvorvidt nasjonen eller det globale skal prioriteres?',
      options: [
        'Nasjonalt vs. internasjonalt',
        'Frihet vs. likhet',
        'Individ vs. fellesskap',
        'Marked vs. stat',
      ],
      explanation: 'Motsetningen nasjonalt vs. internasjonalt handler om hvorvidt nasjonen skal prioriteres eller om vi bør tenke globalt.',
    },
  ],

  'samfunnskunnskap-5-2': [
    {
      question: 'Hvilke tre ideologier regnes som de store hovedideologiene?',
      options: [
        'Liberalisme, konservatisme og sosialisme',
        'Kommunisme, kapitalisme og anarkisme',
        'Demokrati, diktatur og monarki',
        'Feminisme, nasjonalisme og miljøvern',
      ],
      explanation: 'Liberalisme, konservatisme og sosialisme er de tre hovedideologiene som har formet moderne politikk siden 1800-tallet.',
    },
    {
      question: 'Hva er liberalismens viktigste kjerneverdi?',
      options: [
        'Individuell frihet',
        'Tradisjon og kontinuitet',
        'Økonomisk likhet',
        'Nasjonal identitet',
      ],
      explanation: 'Liberalismen setter individuell frihet i sentrum - mennesker som frie, selvstendige individer med rettigheter.',
    },
    {
      question: 'Hvilken historisk hendelse var konservatismen en reaksjon på?',
      options: [
        'Den franske revolusjonen (1789)',
        'Den amerikanske borgerkrigen',
        'Første verdenskrig',
        'Reformasjonen',
      ],
      explanation: 'Konservatismen oppstod som en reaksjon på den franske revolusjonen i 1789 og de raske samfunnsendringene den medførte.',
    },
    {
      question: 'Hva mener konservative om endringer i samfunnet?',
      options: [
        'Endringer bør skje gradvis og bygge på det bestående',
        'Raske revolusjoner er beste måten å endre samfunnet',
        'Alle endringer er positive',
        'Samfunnet bør aldri endres',
      ],
      explanation: 'Konservatismen er skeptisk til raske endringer og mener endringer bør skje gradvis og bygge på tradisjoner og det bestående.',
    },
    {
      question: 'Når oppstod sosialismen, og hva var bakgrunnen?',
      options: [
        '1800-tallet, som svar på industrialiseringens sosiale problemer',
        '1600-tallet, under opplysningstiden',
        '1900-tallet, etter første verdenskrig',
        'Middelalderen, i kloster',
      ],
      explanation: 'Sosialismen oppstod på 1800-tallet som et svar på de sosiale problemene industrialiseringen skapte for arbeiderne.',
    },
    {
      question: 'Hva er forskjellen mellom sosialdemokrati og kommunisme?',
      options: [
        'Sosialdemokrati vil endre gjennom demokrati, kommunisme gjennom revolusjon',
        'De er helt like',
        'Kommunisme er demokratisk, sosialdemokrati er ikke',
        'Sosialdemokrati vil ha mer stat enn kommunisme',
      ],
      explanation: 'Sosialdemokrati ønsker gradvis endring gjennom demokrati, mens kommunisme tradisjonelt har ønsket revolusjonær endring og avskaffelse av kapitalismen.',
    },
    {
      question: 'Hvilke norske partier knyttes til liberalisme?',
      options: [
        'Venstre (sosialliberalt), Høyre og Frp (økonomisk liberale)',
        'Ap og SV',
        'KrF og Sp',
        'Rødt og MDG',
      ],
      explanation: 'Venstre er sosialliberalt, mens Høyre og Frp er økonomisk liberale partier i Norge.',
    },
    {
      question: 'Hvem er kjent som en viktig tenker innen konservatismen?',
      options: [
        'Edmund Burke',
        'Karl Marx',
        'John Locke',
        'Adam Smith',
      ],
      explanation: 'Edmund Burke regnes som konservatismens far. Han reagerte kritisk på den franske revolusjonen.',
    },
    {
      question: 'Hva mener sosialismen om statens rolle?',
      options: [
        'Staten skal aktivt gripe inn for å sikre rettferdig fordeling',
        'Staten skal være så liten som mulig',
        'Staten skal bare opprettholde lov og orden',
        'Staten bør ikke eksistere',
      ],
      explanation: 'Sosialismen mener staten må aktivt gripe inn for å sikre rettferdig fordeling og motvirke markedets ulikheter.',
    },
    {
      question: 'Hva er sosialliberalisme?',
      options: [
        'En variant av liberalisme der staten kan gripe inn for å sikre like muligheter',
        'En blanding av sosialisme og kommunisme',
        'En form for konservatisme',
        'Det samme som sosialdemokrati',
      ],
      explanation: 'Sosialliberalisme kombinerer individuell frihet med aksept for at staten kan gripe inn for å sikre like muligheter for alle.',
    },
    {
      question: 'Hvem er Karl Marx?',
      options: [
        'En viktig tenker innen kommunismen',
        'Grunnleggeren av liberalismen',
        'En konservativ filosof',
        'Den første sosialdemokraten',
      ],
      explanation: 'Karl Marx er en av de viktigste tenkerne innen kommunismen og sosialismen, kjent for analyser av kapitalisme og klassekamp.',
    },
    {
      question: 'Hvilket norsk parti representerer sosialdemokrati?',
      options: [
        'Arbeiderpartiet (Ap)',
        'Høyre',
        'Frp',
        'Venstre',
      ],
      explanation: 'Arbeiderpartiet (Ap) er det tradisjonelle sosialdemokratiske partiet i Norge.',
    },
  ],

  'samfunnskunnskap-5-3': [
    {
      question: 'Hva står GAL for i GAL-TAN-modellen?',
      options: [
        'Grønn-Alternativ-Libertær',
        'Global-Autoritær-Liberal',
        'Grønn-Aktiv-Lokal',
        'Generell-Alternativ-Landsdekkende',
      ],
      explanation: 'GAL står for Grønn-Alternativ-Libertær og representerer verdier som miljøvern, personlig frihet og åpenhet.',
    },
    {
      question: 'Hva står TAN for i GAL-TAN-modellen?',
      options: [
        'Tradisjonell-Autoritær-Nasjonalistisk',
        'Tradisjon-Arbeid-Nasjon',
        'Teknologi-Alternativ-Ny',
        'Trygg-Aktiv-Norsk',
      ],
      explanation: 'TAN står for Tradisjonell-Autoritær-Nasjonalistisk og vektlegger tradisjonelle verdier, lov og orden, og nasjonal identitet.',
    },
    {
      question: 'Hvorfor trenger vi GAL-TAN-modellen i tillegg til høyre-venstre-aksen?',
      options: [
        'Fordi partier som er enige økonomisk kan være uenige om verdispørsmål',
        'Fordi høyre-venstre er utdatert',
        'Fordi GAL-TAN er enklere å forstå',
        'Fordi alle politikere bruker den',
      ],
      explanation: 'GAL-TAN fanger opp verdispørsmål som miljø, innvandring og tradisjon som ikke handler om økonomisk politikk.',
    },
    {
      question: 'Hva kjennetegner grønn ideologi/økologisme?',
      options: [
        'Miljøvern som overordnet verdi og kritikk av ensidig fokus på økonomisk vekst',
        'At alt skal være grønt',
        'At man bare skal spise grønnsaker',
        'At alle skal bo på landet',
      ],
      explanation: 'Grønn ideologi har miljøvern som overordnet verdi, vektlegger bærekraft og er kritisk til ensidig fokus på økonomisk vekst.',
    },
    {
      question: 'Hvilket norsk parti representerer grønn ideologi?',
      options: [
        'MDG (Miljøpartiet De Grønne)',
        'Høyre',
        'Arbeiderpartiet',
        'Fremskrittspartiet',
      ],
      explanation: 'Miljøpartiet De Grønne (MDG) representerer grønn ideologi i Norge med miljøvern som hovedsak.',
    },
    {
      question: 'Hva er feminisme?',
      options: [
        'En ideologi som kjemper for likestilling mellom kjønnene',
        'En ideologi bare for kvinner',
        'En økonomisk teori',
        'En variant av sosialisme',
      ],
      explanation: 'Feminisme er en ideologi som kjemper for likestilling mellom kjønnene og mot strukturell diskriminering.',
    },
    {
      question: 'Hva er sentrum-periferi-skillelinjen i norsk politikk?',
      options: [
        'Motsetningen mellom Oslo/storby og distriktene',
        'Forskjellen mellom høyre og venstre',
        'Konflikten mellom unge og eldre',
        'Uenighet om EU-medlemskap',
      ],
      explanation: 'Sentrum-periferi handler om motsetningen mellom Oslo/storbyene og distriktene, inkludert språkstrid mellom nynorsk og bokmål.',
    },
    {
      question: 'Hvilket parti er kjent som et distriktsparti i Norge?',
      options: [
        'Senterpartiet (Sp)',
        'Høyre',
        'SV',
        'Venstre',
      ],
      explanation: 'Senterpartiet er tradisjonelt kjent som et distriktsparti som representerer interessene til folk utenfor storbyene.',
    },
    {
      question: 'Hva er kristendemokrati?',
      options: [
        'En ideologi basert på kristen etikk med vekt på familie og solidaritet',
        'En religiøs sekt',
        'Et parti som bare kristne kan stemme på',
        'Det samme som konservatisme',
      ],
      explanation: 'Kristendemokrati er en ideologi basert på kristen etikk, med vekt på familie, solidaritet og subsidiaritet. KrF representerer dette i Norge.',
    },
    {
      question: 'Hva skiller libertarianisme fra vanlig konservatisme?',
      options: [
        'Libertarianisme ønsker ekstrem individuell frihet og er ofte verdiprogressiv',
        'Libertarianisme er mer tradisjonell',
        'De er helt like',
        'Libertarianisme vil ha sterkere stat',
      ],
      explanation: 'Libertarianisme ønsker minimal stat og ekstrem individuell frihet, og skiller seg fra konservatisme ved ofte å være verdiprogressiv.',
    },
    {
      question: 'Hvilke partier er mest uenige om EU/EØS i Norge?',
      options: [
        'Sp, SV og Rødt (mot) vs. Høyre og Venstre (for)',
        'Ap vs. Høyre',
        'Frp vs. KrF',
        'MDG vs. Rødt',
      ],
      explanation: 'Sp, SV og Rødt er skeptiske til EU/EØS, mens Høyre og Venstre er positive. Denne skillelinjen følger ikke høyre-venstre-aksen.',
    },
  ],

  'samfunnskunnskap-5-4': [
    {
      question: 'Hva er det grunnleggende kjennetegnet ved populisme?',
      options: [
        'En motsetning mellom "folket" og "eliten"',
        'At man er populær',
        'At man bruker sosiale medier',
        'At man vinner valg',
      ],
      explanation: 'Populisme baserer seg på en motsetning mellom "folket" (godt, ærlig) og "eliten" (korrupt, fjern).',
    },
    {
      question: 'Er populisme en fullstendig ideologi?',
      options: [
        'Nei, det er mer en politisk stil som kan kombineres med ulike ideologier',
        'Ja, det er en av de tre store ideologiene',
        'Ja, den har sitt eget parti i alle land',
        'Nei, det er bare et skjellsord',
      ],
      explanation: 'Populisme er ikke en fullstendig ideologi som liberalisme eller sosialisme, men en politisk stil eller logikk som kan kombineres med ulike ideologier.',
    },
    {
      question: 'Hva kjennetegner høyrepopulisme?',
      options: [
        'Fokus på nasjonal identitet og kritikk av innvandring og globalisering',
        'Fokus på økonomisk ulikhet og klassekamp',
        'Fokus på miljøvern',
        'Fokus på likestilling',
      ],
      explanation: 'Høyrepopulisme fokuserer på nasjonal identitet, er kritisk til innvandring og globalisering, og angriper kulturelle eliter.',
    },
    {
      question: 'Hva kjennetegner venstrepopulisme?',
      options: [
        'Fokus på økonomisk ulikhet og kritikk av de rike og store selskaper',
        'Fokus på nasjonal identitet',
        'Kritikk av innvandring',
        'Støtte til tradisjonelle verdier',
      ],
      explanation: 'Venstrepopulisme fokuserer på økonomisk ulikhet, kritiserer de rike og store selskaper, og kjemper for arbeidere og vanlige folk.',
    },
    {
      question: 'Hvilket av disse er et eksempel på høyrepopulisme?',
      options: [
        'Donald Trump i USA',
        'Bernie Sanders i USA',
        'Podemos i Spania',
        'Syriza i Hellas',
      ],
      explanation: 'Donald Trump regnes som en høyrepopulist med fokus på nasjonal identitet og kritikk av etablissementet.',
    },
    {
      question: 'Hvorfor kan populisme være problematisk for demokratiet?',
      options: [
        'Den kan undergrave institusjoner som domstoler og medier',
        'Den gjør at flere stemmer ved valg',
        'Den fører alltid til krig',
        'Den er alltid ulovlig',
      ],
      explanation: 'Populisme kan undergrave viktige institusjoner, forenkle komplekse problemer, og skape polarisering med "vi mot dem"-retorikk.',
    },
    {
      question: 'Hva menes med at populister ofte bruker "karismatiske ledere"?',
      options: [
        'Ledere med sterk personlig utstråling som snakker direkte til folket',
        'Ledere som er kjendiser',
        'Ledere som er vakre',
        'Ledere som er gode sangere',
      ],
      explanation: 'Populistiske bevegelser har ofte karismatiske ledere som hevder å snakke folkets språk og representere vanlige folk direkte.',
    },
    {
      question: 'Hva kan være positivt med populisme?',
      options: [
        'Den kan representere reelle frustrasjoner og øke politisk engasjement',
        'Den løser alle problemer raskt',
        'Den fjerner all uenighet',
        'Den er aldri positiv',
      ],
      explanation: 'Populisme kan gi stemme til de som føler seg oversett, utfordre selvtilfredse eliter, og øke politisk engasjement og valgdeltakelse.',
    },
    {
      question: 'Hva menes med "antielitisme" i populismen?',
      options: [
        'Kritikk av politikere, byråkrater, medier og akademikere',
        'At man ikke liker elite-idrett',
        'At man er mot universiteter',
        'At man vil fjerne alle ledere',
      ],
      explanation: 'Antielitisme er kritikk av etablerte maktgrupper som politikere, byråkrater, medier og akademikere som anklages for å være fjerne fra folket.',
    },
    {
      question: 'Hva er en vanlig kritikk av populismens løsninger?',
      options: [
        'De forenkler komplekse problemer og lover mer enn de kan holde',
        'De er for kompliserte',
        'De tar for lang tid',
        'De koster for lite',
      ],
      explanation: 'Populister kritiseres ofte for å forenkle komplekse problemer og love enkle løsninger som ikke kan holdes i praksis.',
    },
  ],

  'samfunnskunnskap-5-5': [
    {
      question: 'Når ble Grunnloven vedtatt?',
      options: [
        '17. mai 1814',
        '17. mai 1905',
        '8. mai 1945',
        '1. januar 1900',
      ],
      explanation: 'Grunnloven ble vedtatt 17. mai 1814 på Eidsvoll, og er en av verdens eldste grunnlover fortsatt i bruk.',
    },
    {
      question: 'Hva er de tre statsmaktene i Norge?',
      options: [
        'Stortinget (lovgivende), regjeringen (utøvende) og domstolene (dømmende)',
        'Kongen, statsministeren og ordførerne',
        'Politiet, forsvaret og domstolene',
        'Stortinget, kommunene og fylkene',
      ],
      explanation: 'De tre statsmaktene er Stortinget (lovgivende), regjeringen (utøvende) og domstolene (dømmende).',
    },
    {
      question: 'Hvem utviklet ideen om maktfordelingsprinsippet?',
      options: [
        'Montesquieu',
        'Karl Marx',
        'Edmund Burke',
        'John Locke',
      ],
      explanation: 'Filosofen Montesquieu utviklet maktfordelingsprinsippet i 1748 for å hindre maktmisbruk.',
    },
    {
      question: 'Hva er formålet med maktfordelingsprinsippet?',
      options: [
        'Hindre maktkonsentrasjon og beskytte borgerne mot overgrep',
        'Gjøre det lettere å vedta lover',
        'Gi kongen mer makt',
        'Spare penger',
      ],
      explanation: 'Maktfordelingsprinsippet skal hindre maktkonsentrasjon, sikre kontroll og balanse, og beskytte borgerne mot overgrep.',
    },
    {
      question: 'Hvilken paragraf i Grunnloven beskytter ytringsfriheten?',
      options: [
        'Paragraf 100',
        'Paragraf 1',
        'Paragraf 50',
        'Paragraf 200',
      ],
      explanation: 'Ytringsfrihet er beskyttet i Grunnlovens paragraf 100.',
    },
    {
      question: 'Hva kreves for å endre Grunnloven?',
      options: [
        'To tredjedels flertall på Stortinget og valg mellom forslag og vedtak',
        'Vanlig flertall på Stortinget',
        'Folkeavstemning',
        'Kongens godkjenning alene',
      ],
      explanation: 'Grunnlovsendring krever at forslaget fremmes tidlig i en valgperiode, at det er valg før vedtak, og minst 2/3 flertall på Stortinget.',
    },
    {
      question: 'Hva skjedde med Grunnloven i 2014?',
      options: [
        'Den fikk et styrket menneskerettighetskapittel',
        'Den ble opphevet',
        'Den ble oversatt til engelsk',
        'Kongen mistet all makt',
      ],
      explanation: 'I 2014 fikk Grunnloven et styrket menneskerettighetskapittel (kapittel E) som beskytter flere rettigheter.',
    },
    {
      question: 'Hva betyr det at Grunnloven har høyere rang enn vanlige lover?',
      options: [
        'Lover som strider mot Grunnloven kan settes til side av domstolene',
        'Grunnloven koster mer å trykke',
        'Grunnloven er lengre enn andre lover',
        'Grunnloven er eldre enn andre lover',
      ],
      explanation: 'At Grunnloven har høyest rang betyr at domstolene kan sette til side vanlige lover som strider mot Grunnloven.',
    },
    {
      question: 'Hvilken rettighet er beskyttet i Grunnlovens paragraf 112?',
      options: [
        'Rett til et sunt miljø',
        'Ytringsfrihet',
        'Religionsfrihet',
        'Stemmerett',
      ],
      explanation: 'Paragraf 112 i Grunnloven beskytter retten til et sunt miljø for nåværende og fremtidige generasjoner.',
    },
    {
      question: 'Hvorfor er det vanskeligere å endre Grunnloven enn vanlige lover?',
      options: [
        'For at viktige prinsipper ikke skal endres på impuls',
        'Fordi Grunnloven er skrevet på gammelt språk',
        'Fordi kongen ikke vil ha endringer',
        'Fordi Stortinget ikke liker endringer',
      ],
      explanation: 'Den vanskelige endringsprosessen sikrer at Grunnloven er stabil og at viktige prinsipper ikke endres på impuls.',
    },
    {
      question: 'Hvor mange representanter sitter på Stortinget?',
      options: [
        '169',
        '150',
        '200',
        '100',
      ],
      explanation: 'Stortinget har 169 folkevalgte representanter som velges fra 19 valgdistrikter.',
    },
  ],

  'samfunnskunnskap-5-6': [
    {
      question: 'Hva er Stortingets viktigste oppgave?',
      options: [
        'Vedta lover og statsbudsjettet',
        'Lede den daglige styringen av landet',
        'Dømme i rettssaker',
        'Bestemme rentene i banken',
      ],
      explanation: 'Stortingets viktigste oppgaver er å vedta lover og statsbudsjettet, samt kontrollere regjeringen.',
    },
    {
      question: 'Hvem leder Stortingets arbeid?',
      options: [
        'Stortingspresidenten',
        'Statsministeren',
        'Kongen',
        'Høyesterettsjustitiarius',
      ],
      explanation: 'Stortingspresidenten leder Stortingets arbeid, leder debattene og representerer Stortinget utad.',
    },
    {
      question: 'Hva er en stortingskomité?',
      options: [
        'En fagkomité der sakene behandles før de kommer til plenum',
        'En gruppe som planlegger fester på Stortinget',
        'En komité som bestemmer hvem som blir statsminister',
        'En komité som ansetter nye representanter',
      ],
      explanation: 'Stortingskomiteene er fagkomiteer der sakene behandles grundig før de kommer til debatt og votering i plenum.',
    },
    {
      question: 'Hvor mange faste komiteer har Stortinget?',
      options: [
        '12',
        '5',
        '20',
        '3',
      ],
      explanation: 'Stortinget har 12 faste fagkomiteer, for eksempel finanskomiteen og justiskomiteen.',
    },
    {
      question: 'Hva er spørretimen på Stortinget?',
      options: [
        'En ordning der representanter stiller spørsmål til statsrådene',
        'En quiz-konkurranse',
        'En time der representantene leser aviser',
        'En pressekonferanse for journalister',
      ],
      explanation: 'I spørretimen stiller stortingsrepresentanter spørsmål til statsrådene. Muntlig spørretime er hver onsdag.',
    },
    {
      question: 'Hva er Riksrevisjonen?',
      options: [
        'Stortingets organ for kontroll av statens pengebruk',
        'En revisjonsfirma',
        'Regjeringens regnskap',
        'En avis som dekker Stortinget',
      ],
      explanation: 'Riksrevisjonen er Stortingets organ for å kontrollere at staten bruker pengene riktig og effektivt.',
    },
    {
      question: 'Hva er et mistillitsforslag?',
      options: [
        'Et forslag der Stortinget kan felle regjeringen',
        'Et forslag om å mislike noe',
        'Et forslag om å endre Grunnloven',
        'Et forslag om å øke skattene',
      ],
      explanation: 'Et mistillitsforslag er en mekanisme der Stortinget kan uttrykke at regjeringen ikke lenger har Stortingets tillit, og da må regjeringen gå av.',
    },
    {
      question: 'Hvem fremmer de fleste lovforslag til Stortinget?',
      options: [
        'Regjeringen (gjennom proposisjoner)',
        'Domstolene',
        'Kongen',
        'Folket gjennom folkeavstemning',
      ],
      explanation: 'Regjeringen fremmer de fleste lovforslag til Stortinget gjennom proposisjoner, men også representanter kan foreslå lover.',
    },
    {
      question: 'Hva skjer etter at Stortinget har vedtatt en lov?',
      options: [
        'Kongen signerer loven (kongelig sanksjon)',
        'Loven trer i kraft umiddelbart',
        'Regjeringen må godkjenne den',
        'Domstolene må teste den',
      ],
      explanation: 'Etter at Stortinget har vedtatt en lov, må kongen signere den (kongelig sanksjon) før den kunngjøres og trer i kraft.',
    },
    {
      question: 'Hva er kontroll- og konstitusjonskomiteen?',
      options: [
        'En komité som kontrollerer regjeringens arbeid',
        'En komité som skriver Grunnloven',
        'En komité som velger statsminister',
        'En komité som planlegger 17. mai',
      ],
      explanation: 'Kontroll- og konstitusjonskomiteen kontrollerer regjeringens arbeid og kan gjennomføre høringer om mulige kritikkverdige forhold.',
    },
    {
      question: 'Kan Stortinget oppløses før valgperioden er over?',
      options: [
        'Nei, Stortinget sitter alltid i hele perioden',
        'Ja, kongen kan oppløse Stortinget',
        'Ja, statsministeren kan oppløse Stortinget',
        'Ja, ved folkeavstemning',
      ],
      explanation: 'Stortinget kan ikke oppløses - det sitter alltid ut hele fireårsperioden. Dette skiller Norge fra mange andre land.',
    },
    {
      question: 'Hva er en interpellasjon på Stortinget?',
      options: [
        'En lengre debatt om en viktig sak der statsråden svarer',
        'Et kort spørsmål i spørretimen',
        'En votering over en lov',
        'Et møte mellom partiene',
      ],
      explanation: 'En interpellasjon er en lengre debatt om en viktig sak der statsråden svarer og det blir mulighet for grundig diskusjon.',
    },
  ],

  // Chapters 5.7-5.12
'samfunnskunnskap-5-7': [
    {
      question: 'Hva er regjeringens hovedoppgave?',
      options: [
        'Å lede den daglige styringen av Norge og sette Stortingets vedtak ut i livet',
        'Å dømme i rettssaker',
        'Å vedta lover',
        'Å kontrollere domstolene',
      ],
      explanation: 'Regjeringen er den utøvende makt som leder landet, foreslår lover og budsjett, og setter vedtakene fra Stortinget ut i livet.',
    },
    {
      question: 'Hva betyr parlamentarisme?',
      options: [
        'At regjeringen må ha Stortingets tillit for å sitte',
        'At Stortinget må ha regjeringens tillit',
        'At domstolene kontrollerer regjeringen',
        'At folket velger statsministeren direkte',
      ],
      explanation: 'Parlamentarisme betyr at regjeringen må ha Stortingets tillit. Hvis flertallet er mot regjeringen, må den gå av.',
    },
    {
      question: 'Hva kjennetegner negativ parlamentarisme i Norge?',
      options: [
        'Det kreves aktivt flertall MOT regjeringen for å felle den',
        'Det kreves aktivt flertall FOR regjeringen for at den kan sitte',
        'Regjeringen velges direkte av folket',
        'Stortinget kan ikke felle regjeringen',
      ],
      explanation: 'Norge har negativ parlamentarisme - det kreves aktivt flertall MOT regjeringen for å felle den, ikke aktivt flertall FOR.',
    },
    {
      question: 'Hva er en mindretallsregjering?',
      options: [
        'En regjering der partiene har under halvparten av mandatene og må søke støtte sak for sak',
        'En regjering med få statsråder',
        'En regjering som kun styrer i kort tid',
        'En regjering som ikke har lov til å foreslå lover',
      ],
      explanation: 'Mindretallsregjering betyr at regjeringspartiene har under halvparten av mandatene på Stortinget og må søke støtte sak for sak. Dette er vanligst i Norge.',
    },
    {
      question: 'Hvem leder regjeringen?',
      options: [
        'Statsministeren',
        'Stortingspresidenten',
        'Kongen',
        'Finansministeren',
      ],
      explanation: 'Statsministeren leder regjeringen, og statsrådene (ministrene) leder hvert sitt departement.',
    },
    {
      question: 'Hva er et departement?',
      options: [
        'Regjeringens sekretariat, ledet av en statsråd',
        'En avdeling i Stortinget',
        'En domstol',
        'Et politisk parti',
      ],
      explanation: 'Departementene er regjeringens sekretariater, ledet av hver sin statsråd. De forbereder saker og følger opp vedtak.',
    },
    {
      question: 'Hva er et direktorat?',
      options: [
        'En etat under et departement som utfører praktiske oppgaver',
        'Et annet navn for et departement',
        'En type domstol',
        'Stortingets administrasjon',
      ],
      explanation: 'Under departementene ligger direktorater og etater som utfører praktiske oppgaver, som NAV, Skatteetaten og Politidirektoratet.',
    },
    {
      question: 'Hvem utnevner statsministeren formelt?',
      options: [
        'Kongen',
        'Stortingspresidenten',
        'Folket direkte',
        'Forrige statsminister',
      ],
      explanation: 'Kongen utnevner statsminister og statsråder i statsråd på Slottet, etter at regjeringsforhandlinger er gjennomført.',
    },
    {
      question: 'Hva er en koalisjonsregjering?',
      options: [
        'En regjering der flere partier samarbeider',
        'En regjering med kun ett parti',
        'En regjering uten statsminister',
        'En midlertidig regjering',
      ],
      explanation: 'En koalisjonsregjering består av flere partier som samarbeider i regjering sammen.',
    },
    {
      question: 'Hva er en regjeringserklæring?',
      options: [
        'Dokumentet der den nye regjeringen presenterer sin politikk',
        'Et brev fra kongen',
        'En dom fra Høyesterett',
        'Et lovforslag',
      ],
      explanation: 'Etter regjeringsforhandlinger presenterer den nye regjeringen sin politiske plattform i en regjeringserklæring.',
    },
  ],

  'samfunnskunnskap-5-8': [
    {
      question: 'Hva er domstolenes hovedoppgave?',
      options: [
        'Å avgjøre rettstvister og tolke lovene',
        'Å lage lover',
        'Å styre landet',
        'Å arrestere kriminelle',
      ],
      explanation: 'Domstolene er den dømmende makt. De avgjør straffesaker og sivile saker, tolker lovene og kontrollerer at lover ikke strider mot Grunnloven.',
    },
    {
      question: 'Hva er tingretten?',
      options: [
        'Første instans for de fleste rettssaker',
        'Øverste domstol i Norge',
        'En spesialdomstol for eiendomssaker',
        'En avdeling i Stortinget',
      ],
      explanation: 'Tingrettene er første instans for de fleste saker. Det finnes 60 tingretter i Norge som behandler både straffesaker og sivile saker.',
    },
    {
      question: 'Hva er lagmannsretten?',
      options: [
        'Andre instans - ankedomstol',
        'Første instans',
        'Øverste domstol',
        'En domstol kun for politikere',
      ],
      explanation: 'Lagmannsrettene er andre instans og fungerer som ankedomstol. Det finnes 6 lagmannsretter i Norge.',
    },
    {
      question: 'Hva kjennetegner Høyesterett?',
      options: [
        'Øverste domstol som behandler prinsipielle saker, og avgjørelsene er endelige',
        'Første instans for alle saker',
        'En domstol kun for straffesaker',
        'En domstol som kun behandler saker om eiendom',
      ],
      explanation: 'Høyesterett er øverste domstol med 20 dommere. Den behandler prinsipielle saker, og avgjørelsene er endelige.',
    },
    {
      question: 'Hva betyr legalitetsprinsippet?',
      options: [
        'Ingen straff uten lov',
        'Alle har rett til forsvarer',
        'Rettssaker skal være åpne',
        'Man kan anke alle saker',
      ],
      explanation: 'Legalitetsprinsippet betyr at ingen kan straffes uten at det finnes en lov som forbyr handlingen.',
    },
    {
      question: 'Hva er uskyldspresumsjon?',
      options: [
        'At man er uskyldig inntil det motsatte er bevist',
        'At alle er skyldige til de beviser uskyld',
        'At politiet alltid har rett',
        'At dommeren bestemmer skyld på forhånd',
      ],
      explanation: 'Uskyldspresumsjon betyr at man er uskyldig inntil det motsatte er bevist. Dette er et grunnleggende rettssikkerhetsprinsipp.',
    },
    {
      question: 'Hvorfor er domstolenes uavhengighet viktig?',
      options: [
        'For å sikre rettferdig behandling uten politisk påvirkning',
        'For at dommerne skal tjene mer penger',
        'For at regjeringen skal ha full kontroll',
        'For at saker skal avgjøres raskere',
      ],
      explanation: 'Domstolenes uavhengighet sikrer rettferdig behandling, beskytter mot maktmisbruk og er en grunnpilar i rettsstaten.',
    },
    {
      question: 'Hva er rettssikkerhet?',
      options: [
        'Borgernes vern mot overgrep fra staten og garantier for rettferdig behandling',
        'At domstolene har god sikkerhet',
        'At politiet passer på alle',
        'At alle får samme straff',
      ],
      explanation: 'Rettssikkerhet handler om borgernes vern mot overgrep fra staten og garantier for rettferdig behandling.',
    },
    {
      question: 'Hva betyr kontradiksjon i en rettssak?',
      options: [
        'Rett til å imøtegå motpartens påstander',
        'At saken holdes hemmelig',
        'At dommeren bestemmer alt',
        'At man ikke kan anke',
      ],
      explanation: 'Kontradiksjon betyr at man har rett til å imøtegå motpartens påstander og bevis i en rettssak.',
    },
    {
      question: 'Hva innebærer forbudet mot dobbeltstraff?',
      options: [
        'Man kan ikke straffes to ganger for samme handling',
        'Man kan kun få én type straff',
        'Straffen kan aldri økes ved anke',
        'To personer kan ikke straffes for samme forbrytelse',
      ],
      explanation: 'Forbudet mot dobbeltstraff (ne bis in idem) betyr at man ikke kan straffes to ganger for samme handling.',
    },
  ],

  'samfunnskunnskap-5-9': [
    {
      question: 'Hva er politiske partiers hovedfunksjon?',
      options: [
        'Å være bindeledd mellom folket og makten',
        'Å tjene penger',
        'Å arrangere fester',
        'Å kontrollere domstolene',
      ],
      explanation: 'Politiske partier er bindeleddet mellom folket og makten. De samler folk med lignende synspunkter, utvikler politikk og stiller kandidater til valg.',
    },
    {
      question: 'Hva er partiets øverste organ?',
      options: [
        'Landsmøtet',
        'Stortingsgruppen',
        'Partilederen',
        'Lokallaget',
      ],
      explanation: 'Landsmøtet er partiets øverste organ. Det vedtar partiprogram og velger partileder og sentralstyre.',
    },
    {
      question: 'Hvilken funksjon har lokallagene i et parti?',
      options: [
        'Verving, lokalvalgkamp og nominering av kommunestyrekandidater',
        'Å vedta nasjonale lover',
        'Å utnevne statsråder',
        'Å kontrollere regjeringen',
      ],
      explanation: 'Lokallagene er grunnenheten i partiorganisasjonen. De driver verving, lokalvalgkamp og nominerer kommunestyrekandidater.',
    },
    {
      question: 'Hvem nominerer stortingskandidater?',
      options: [
        'Fylkeslaget',
        'Partilederen alene',
        'Stortinget',
        'Regjeringen',
      ],
      explanation: 'Fylkeslaget koordinerer arbeidet i fylket og nominerer stortingskandidater gjennom nominasjonsprosessen.',
    },
    {
      question: 'Hva er hovedkilden til partienes finansiering?',
      options: [
        'Statlig partistøtte',
        'Private donasjoner',
        'Medlemskontingent',
        'Lotterier',
      ],
      explanation: 'Statlig partistøtte utgjør hoveddelen av partienes inntekter. Den fordeles etter oppslutning ved valg.',
    },
    {
      question: 'Hvor mye må et partibidrag være for at det må offentliggjøres?',
      options: [
        'Over 35 000 kroner',
        'Over 1 000 kroner',
        'Over 100 000 kroner',
        'Alle bidrag må offentliggjøres',
      ],
      explanation: 'Alle partibidrag over 35 000 kroner må offentliggjøres. Anonyme bidrag over 12 000 kroner er forbudt.',
    },
    {
      question: 'Hva er et ungdomsparti?',
      options: [
        'Partiets organisasjon for unge medlemmer, viktig for rekruttering og skolering',
        'Et parti kun for ungdom',
        'Et parti som kun jobber med ungdomspolitikk',
        'En uavhengig organisasjon uten tilknytning til hovedpartiet',
      ],
      explanation: 'Alle stortingspartiene har ungdomspartier (AUF, Unge Høyre, FpU osv.) som er viktige for rekruttering og politisk skolering.',
    },
    {
      question: 'Hva skjer på nominasjonsmøtet?',
      options: [
        'Fylkesårsmøtet vedtar listen over kandidater til stortingsvalget',
        'Partilederen utnevnes',
        'Statsministeren velges',
        'Lovforslag vedtas',
      ],
      explanation: 'På nominasjonsmøtet/fylkesårsmøtet vedtas listen over kandidater som partiet stiller med til stortingsvalget.',
    },
    {
      question: 'Hvilken funksjon har opposisjonspartier?',
      options: [
        'Å holde regjeringen ansvarlig',
        'Å støtte regjeringen i alle saker',
        'Å utnevne statsråder',
        'Å lede departementene',
      ],
      explanation: 'Opposisjonspartiene holder regjeringen ansvarlig ved å kritisere, stille spørsmål og presentere alternative løsninger.',
    },
    {
      question: 'Hva menes med at partiene forenkler valgene for velgerne?',
      options: [
        'Velgerne kan stemme på et partiprogram istedenfor å ta stilling til hver enkelt sak',
        'Partiene gjør stemmesedlene kortere',
        'Partiene bestemmer hvem som skal stemme',
        'Partiene reduserer antall kandidater',
      ],
      explanation: 'Partiene samler politiske standpunkter i programmer, slik at velgerne kan stemme på en helhetlig politikk istedenfor å ta stilling til hver sak.',
    },
  ],

  'samfunnskunnskap-5-10': [
    {
      question: 'Hvem fremmer de fleste lovforslag i Norge?',
      options: [
        'Regjeringen',
        'Stortingsrepresentanter',
        'Domstolene',
        'Fylkeskommunene',
      ],
      explanation: 'De fleste lovforslag fremmes av regjeringen, men stortingsrepresentanter kan også fremme representantforslag.',
    },
    {
      question: 'Hva er en NOU?',
      options: [
        'En grundig utredning fra et offentlig utvalg',
        'En lov vedtatt av Stortinget',
        'En dom fra Høyesterett',
        'En regjeringserklæring',
      ],
      explanation: 'NOU (Norges offentlige utredninger) er grundige analyser utarbeidet av offentlige utvalg, ofte utgangspunkt for lovforslag.',
    },
    {
      question: 'Hva skjer i høringsfasen av lovprosessen?',
      options: [
        'Forslaget sendes til organisasjoner og fagmiljøer for innspill',
        'Stortinget voterer over forslaget',
        'Kongen sanksjonerer loven',
        'Politiet etterforsker saken',
      ],
      explanation: 'I høringsfasen sendes forslaget på høring (vanligvis 3 måneder) der organisasjoner, kommuner og fagmiljøer kan gi innspill.',
    },
    {
      question: 'Hva er en proposisjon?',
      options: [
        'Regjeringens formelle forslag til Stortinget',
        'En dom fra tingretten',
        'Et høringssvar',
        'En partipolitisk erklæring',
      ],
      explanation: 'En proposisjon er regjeringens formelle forslag til Stortinget. Lovproposisjoner heter Prop. L.',
    },
    {
      question: 'Hva gjør fagkomiteen i Stortinget med et lovforslag?',
      options: [
        'Behandler forslaget, holder høringer og avgir innstilling',
        'Sanksjonerer loven',
        'Utnevner statsråder',
        'Dømmer i rettssaker',
      ],
      explanation: 'Fagkomiteen behandler lovforslaget grundig, holder høringer, innhenter synspunkter og avgir innstilling til Stortinget.',
    },
    {
      question: 'Hva kreves for at en lov skal vedtas i Stortinget?',
      options: [
        'Vanlig flertall',
        'Enstemmighet',
        'To tredjedels flertall',
        'Godkjenning fra domstolene',
      ],
      explanation: 'For å vedta en vanlig lov kreves vanlig flertall i Stortinget. Grunnlovsendringer krever to tredjedels flertall.',
    },
    {
      question: 'Hva skjer etter at Stortinget har vedtatt en lov?',
      options: [
        'Kongen sanksjonerer loven, og den kunngjøres og trer i kraft',
        'Regjeringen kan nekte å gjennomføre den',
        'Den må godkjennes av EU',
        'Høyesterett må godkjenne den',
      ],
      explanation: 'Etter at Stortinget har vedtatt en lov, sanksjonerer Kongen den. Deretter kunngjøres den og trer i kraft.',
    },
    {
      question: 'Hvorfor tar lovprosessen lang tid?',
      options: [
        'For å sikre grundig utredning, høre alle parter og kvalitetssikre innholdet',
        'Fordi politikerne er late',
        'Fordi det er for få ansatte',
        'Fordi domstolene er trege',
      ],
      explanation: 'Lovprosessen tar tid for å sikre grundig utredning, at alle synspunkter høres, faglig kvalitet og demokratisk forankring.',
    },
    {
      question: 'Hvor kunngjøres vedtatte lover?',
      options: [
        'I Lovdata',
        'I avisen',
        'På TV',
        'På sosiale medier',
      ],
      explanation: 'Vedtatte lover kunngjøres i Lovdata, som er den offisielle databasen for norske lover og forskrifter.',
    },
    {
      question: 'Hva er en innstilling fra Stortinget?',
      options: [
        'Komiteens vurdering og anbefaling som er grunnlag for debatt',
        'En dom',
        'Et høringssvar',
        'En regjeringserklæring',
      ],
      explanation: 'En innstilling er komiteens vurdering og anbefaling til Stortinget, og danner grunnlag for debatt og votering.',
    },
  ],

  'samfunnskunnskap-5-11': [
    {
      question: 'Hva er kommunestyrets rolle?',
      options: [
        'Øverste organ i kommunen som vedtar budsjett og viktige saker',
        'Å lede den daglige administrasjonen',
        'Å representere kommunen utad',
        'Å ansette kommunedirektøren',
      ],
      explanation: 'Kommunestyret er øverste organ i kommunen. Det velges direkte av innbyggerne og vedtar budsjett og viktige saker.',
    },
    {
      question: 'Hvem velger kommunestyret?',
      options: [
        'Innbyggerne direkte hvert 4. år',
        'Stortinget',
        'Fylkeskommunen',
        'Regjeringen',
      ],
      explanation: 'Kommunestyret velges direkte av kommunens innbyggere hvert fjerde år ved kommunevalg.',
    },
    {
      question: 'Hva er formannskapets oppgave?',
      options: [
        'Å forberede saker og behandle hastesaker',
        'Å være øverste organ i kommunen',
        'Å lede administrasjonen',
        'Å representere kommunen i media',
      ],
      explanation: 'Formannskapet velges av kommunestyret og forbereder saker, behandler hastesaker og har ofte delegert myndighet.',
    },
    {
      question: 'Hvem er kommunedirektøren?',
      options: [
        'Øverste administrative leder, ansatt av kommunestyret',
        'Den folkevalgte lederen av kommunen',
        'Regjeringens representant i kommunen',
        'Lederen av formannskapet',
      ],
      explanation: 'Kommunedirektøren er øverste administrative leder i kommunen og ansettes av kommunestyret.',
    },
    {
      question: 'Hva er ordførerens rolle?',
      options: [
        'Å lede kommunestyret og formannskapet, og representere kommunen utad',
        'Å lede administrasjonen',
        'Å vedta budsjett',
        'Å ansette alle kommunalt ansatte',
      ],
      explanation: 'Ordføreren leder kommunestyret og formannskapet, og representerer kommunen utad. Ordføreren velges vanligvis av kommunestyret.',
    },
    {
      question: 'Hva er Statsforvalterens rolle overfor kommunene?',
      options: [
        'Å føre tilsyn med kommunene og behandle klager på kommunale vedtak',
        'Å lede kommunestyremøtene',
        'Å vedta kommunens budsjett',
        'Å utnevne ordføreren',
      ],
      explanation: 'Statsforvalteren (tidligere fylkesmannen) fører tilsyn med kommunene og behandler klager på kommunale vedtak.',
    },
    {
      question: 'Hva er lokalt selvstyre?',
      options: [
        'At kommuner og fylkeskommuner har ansvar for oppgaver og styres av lokalt folkevalgte',
        'At innbyggerne bestemmer alt selv uten politikere',
        'At regjeringen styrer kommunene direkte',
        'At domstolene kontrollerer kommunene',
      ],
      explanation: 'Lokalt selvstyre betyr at kommuner og fylkeskommuner har ansvar for mange oppgaver og styres av lokalt folkevalgte, forankret i Grunnloven.',
    },
    {
      question: 'Hva er frie inntekter for en kommune?',
      options: [
        'Skatteinntekter og rammetilskudd som kommunen kan prioritere selv',
        'Penger kommunen får fra private sponsorer',
        'Øremerkede midler fra staten',
        'Inntekter fra kommunale bedrifter',
      ],
      explanation: 'Frie inntekter (skatt og rammetilskudd) er penger kommunen kan prioritere selv, i motsetning til øremerket finansiering.',
    },
    {
      question: 'Hva var målet med kommunereformen?',
      options: [
        'Å skape større og mer robuste kommuner med bedre tjenester',
        'Å redusere antall politikere',
        'Å overføre makt til staten',
        'Å fjerne lokalt selvstyre',
      ],
      explanation: 'Kommunereformen hadde som mål å skape større og mer robuste kommuner, bedre tjenester, sterkere lokaldemokrati og effektiv drift.',
    },
    {
      question: 'Hvor er det lokale selvstyret forankret?',
      options: [
        'I Grunnloven',
        'I EU-direktiver',
        'I FN-pakten',
        'I straffeloven',
      ],
      explanation: 'Det lokale selvstyret er forankret i Grunnloven paragraf 49, og reguleres nærmere av kommuneloven.',
    },
  ],

  'samfunnskunnskap-5-12': [
    {
      question: 'Hva er en interesseorganisasjon?',
      options: [
        'En organisasjon som representerer bestemte gruppers interesser overfor myndighetene',
        'En organisasjon som tjener penger på interesser',
        'Et politisk parti',
        'En offentlig etat',
      ],
      explanation: 'Interesseorganisasjoner representerer bestemte gruppers interesser overfor myndighetene, som LO, NHO og Naturvernforbundet.',
    },
    {
      question: 'Hva er lobbyisme?',
      options: [
        'Profesjonell påvirkning av politiske beslutninger på vegne av klienter',
        'Å vente i lobbyen på politikere',
        'Å stemme ved valg',
        'Å skrive leserinnlegg',
      ],
      explanation: 'Lobbyisme er profesjonell påvirkning av politiske beslutninger på vegne av klienter, ofte utført av PR-byråer og kommunikasjonsrådgivere.',
    },
    {
      question: 'Hva menes med medienes dagsordenfunksjon?',
      options: [
        'At mediene bestemmer hva som diskuteres i offentligheten',
        'At mediene lager dagsplaner for politikere',
        'At mediene bestemmer når valg skal holdes',
        'At mediene vedtar lover',
      ],
      explanation: 'Medienes dagsordenfunksjon betyr at mediene i stor grad bestemmer hva som diskuteres i offentligheten - det som ikke dekkes, eksisterer ikke politisk.',
    },
    {
      question: 'Hvorfor kalles mediene "den fjerde statsmakt"?',
      options: [
        'Fordi de har en vaktbikkje-rolle og holder makten ansvarlig',
        'Fordi de er en del av regjeringen',
        'Fordi de vedtar lover',
        'Fordi de dømmer i rettssaker',
      ],
      explanation: 'Mediene kalles den fjerde statsmakt fordi de har en vaktbikkje-rolle, avslører kritikkverdige forhold og holder makten ansvarlig.',
    },
    {
      question: 'Hva er korporatisme?',
      options: [
        'At store organisasjoner har formell innflytelse gjennom trepartssamarbeid og utvalg',
        'At bedrifter styrer landet',
        'At politikere eier bedrifter',
        'At staten eier alle bedrifter',
      ],
      explanation: 'Korporatisme i Norge innebærer at store organisasjoner har formell innflytelse gjennom trepartssamarbeidet og deltakelse i utvalg.',
    },
    {
      question: 'Hva er et problem med lobbyisme?',
      options: [
        'Det gir ressurssterke aktører en fordel',
        'Det er forbudt',
        'Det tar for lite tid',
        'Det involverer for få mennesker',
      ],
      explanation: 'Et problem med lobbyisme er at det gir ressurssterke aktører en fordel, og at det kan være manglende åpenhet om hvem som påvirker.',
    },
    {
      question: 'Hva menes med "svingdører" i forbindelse med lobbyisme?',
      options: [
        'At tidligere politikere går over til å jobbe som lobbyister',
        'At lobbyister har lett tilgang til Stortinget',
        'At politikere bytter parti ofte',
        'At lovene endres raskt',
      ],
      explanation: '"Svingdører" refererer til at tidligere politikere går over til å jobbe som lobbyister, noe som gir dem spesielle nettverk og innsikt.',
    },
    {
      question: 'Hva er framing i mediesammenheng?',
      options: [
        'Hvordan saker vinkles og hvilken kontekst de settes i',
        'Å ta bilder av politikere',
        'Å lage rammer rundt aviser',
        'Å sensurere nyheter',
      ],
      explanation: 'Framing handler om hvordan mediene vinkler saker og hvilken kontekst de settes i, noe som påvirker publikums holdninger.',
    },
    {
      question: 'Finnes det lobbyregister i Norge?',
      options: [
        'Nei, men det er debatt om mer åpenhet',
        'Ja, alle lobbyister må registrere seg',
        'Ja, det administreres av Stortinget',
        'Nei, og det er ingen debatt om det',
      ],
      explanation: 'Norge har ikke lobbyregister (til forskjell fra EU), men det er debatt om mer åpenhet. Det finnes karantenetid for politikere og etiske retningslinjer.',
    },
    {
      question: 'Hvilke virkemidler bruker interesseorganisasjoner?',
      options: [
        'Høringssvar, direkte kontakt med politikere, mediekampanjer og demonstrasjoner',
        'Kun stemmegivning ved valg',
        'Kun rettssaker',
        'Kun anonyme brev',
      ],
      explanation: 'Interesseorganisasjoner bruker mange virkemidler: høringssvar, direkte kontakt med politikere, mediekampanjer, demonstrasjoner og forskning.',
    },
    {
      question: 'Hva er en positiv side ved lobbyisme?',
      options: [
        'Det gir informasjon til beslutningstagere om konsekvenser av vedtak',
        'Det gjør politikken mer hemmelig',
        'Det gir alle like mye makt',
        'Det erstatter demokratiske valg',
      ],
      explanation: 'En positiv side ved lobbyisme er at det gir viktig informasjon til beslutningstagere og representerer legitime interesser i samfunnet.',
    },
  ],

  // Chapters 6.1-6.7
'samfunnskunnskap-6-1': [
    {
      question: 'Hva kjennetegner menneskerettigheter?',
      options: [
        'De er universelle, umistelige, udelelige og gjensidig avhengige',
        'De gjelder bare for voksne i demokratiske land',
        'De kan tas fra deg ved alvorlig kriminalitet',
        'De varierer fra land til land',
      ],
      explanation: 'Menneskerettigheter er universelle (gjelder alle), umistelige (kan ikke tas fra deg), udelelige (henger sammen) og gjensidig avhengige.',
    },
    {
      question: 'Når ble FNs verdenserklæring om menneskerettigheter vedtatt?',
      options: [
        '1948',
        '1776',
        '1789',
        '1966',
      ],
      explanation: 'FNs verdenserklæring om menneskerettigheter ble vedtatt 10. desember 1948, etter andre verdenskrig og holocaust.',
    },
    {
      question: 'Hva er FNs verdenserklæring om menneskerettigheter?',
      options: [
        'Et dokument med 30 artikler som ikke er juridisk bindende, men moralsk forpliktende',
        'En juridisk bindende avtale som alle land må følge',
        'En lov som bare gjelder i Europa',
        'Et dokument som kun omhandler ytringsfrihet',
      ],
      explanation: 'Verdenserklæringen inneholder 30 artikler med grunnleggende rettigheter. Den er ikke juridisk bindende, men har stor moralsk autoritet.',
    },
    {
      question: 'Hvilken filosofisk tradisjon ligger bak ideen om medfodte rettigheter?',
      options: [
        'Naturrettsfilosofien',
        'Utilitarismen',
        'Marxismen',
        'Eksistensialismen',
      ],
      explanation: 'Naturrettsfilosofien (Locke, Rousseau) hevder at mennesket har medfodte, naturgitte rettigheter uavhengig av hva staten bestemmer.',
    },
    {
      question: 'Hvilken historisk hendelse var hovedarsaken til at FNs verdenserklaring ble vedtatt?',
      options: [
        'Andre verdenskrig og holocaust',
        'Den franske revolusjon',
        'Den amerikanske uavhengighetskrigen',
        'Forste verdenskrig',
      ],
      explanation: 'Opplevelsene med nazistenes folkemord og andre verdenskrig skapte behovet for internasjonale menneskerettigheter.',
    },
    {
      question: 'Hva menes med at menneskerettighetene er umistelige?',
      options: [
        'De kan ikke tas fra deg',
        'De gjelder for alle mennesker',
        'Alle rettigheter henger sammen',
        'De bygger pa menneskets verdighet',
      ],
      explanation: 'At rettighetene er umistelige betyr at de ikke kan fratas deg, uansett hva du gjor eller hvem du er.',
    },
    {
      question: 'Hvilke to FN-konvensjoner ble vedtatt i 1966?',
      options: [
        'Konvensjonen om sivile og politiske rettigheter og konvensjonen om okonomiske, sosiale og kulturelle rettigheter',
        'Barnekonvensjonen og kvinnekonvensjonen',
        'Flyktningkonvensjonen og torturkonvensjonen',
        'Rasekonvensjonen og funksjonshemmedekonvensjonen',
      ],
      explanation: 'I 1966 ble de to hovedkonvensjonene vedtatt: SP (sivile og politiske) og OSK (okonomiske, sosiale og kulturelle rettigheter).',
    },
    {
      question: 'Hva er kulturrelativisme i menneskerettighetsdebatten?',
      options: [
        'Tanken om at rettigheter ma forstas i kulturell kontekst',
        'At alle kulturer er like mye verdt',
        'At menneskerettighetene gjelder for alle kulturer',
        'At kulturer ikke kan sammenlignes',
      ],
      explanation: 'Kulturrelativisme hevder at rettigheter og verdier ma forstas i sin kulturelle kontekst, og kritiserer menneskerettighetene for a vaere vestlige verdier.',
    },
    {
      question: 'Hvilket ar ble USAs uavhengighetserklaring vedtatt?',
      options: [
        '1776',
        '1789',
        '1948',
        '1966',
      ],
      explanation: '1776 er aret for USAs uavhengighetserklaring, som regnes som en viktig milep1l i menneskerettighetenes historie.',
    },
  ],

  'samfunnskunnskap-6-2': [
    {
      question: 'Hva kjennetegner sivile og politiske rettigheter?',
      options: [
        'De er negative rettigheter der staten skal avsta fra inngrep',
        'De er positive rettigheter der staten skal sorge for noe',
        'De gjelder bare for politikere',
        'De kan bare gjennomfores gradvis',
      ],
      explanation: 'Sivile og politiske rettigheter kalles negative rettigheter fordi staten skal avsta fra a gripe inn i individets frihet.',
    },
    {
      question: 'Hvilke rettigheter er eksempler pa sivile rettigheter?',
      options: [
        'Ytringsfrihet, religionsfrihet og forbud mot tortur',
        'Rett til arbeid, utdanning og helse',
        'Rett til a delta i kulturlivet',
        'Stemmerett og rett til a stille til valg',
      ],
      explanation: 'Sivile rettigheter omfatter blant annet ytringsfrihet, religionsfrihet, rett til liv og forbud mot tortur.',
    },
    {
      question: 'Hva kjennetegner okonomiske, sosiale og kulturelle rettigheter?',
      options: [
        'De er positive rettigheter som krever aktiv innsats fra staten',
        'De er negative rettigheter der staten skal avsta fra inngrep',
        'De kan gjennomfores umiddelbart',
        'De gjelder bare i rike land',
      ],
      explanation: 'OSK-rettigheter kalles positive rettigheter fordi staten aktivt ma sorge for noe, som utdanning, helse og sosial trygghet.',
    },
    {
      question: 'Hva er et eksempel pa en okonomisk rettighet?',
      options: [
        'Rett til arbeid',
        'Ytringsfrihet',
        'Stemmerett',
        'Forbud mot tortur',
      ],
      explanation: 'Rett til arbeid er en okonomisk rettighet. Andre eksempler er rettferdige arbeidsvilkar og rett til a danne fagforeninger.',
    },
    {
      question: 'Hvorfor kalles sivile og politiske rettigheter negative rettigheter?',
      options: [
        'Fordi staten skal avsta fra a gripe inn',
        'Fordi de er darlige rettigheter',
        'Fordi de er mindre viktige',
        'Fordi de koster penger',
      ],
      explanation: 'De kalles negative fordi staten skal la vaere a gjore noe - ikke gripe inn i individets frihet.',
    },
    {
      question: 'Hva menes med at rettighetene er udelelige?',
      options: [
        'Alle rettigheter henger sammen og er like viktige',
        'Rettighetene kan ikke deles med andre',
        'Rettighetene kan ikke endres',
        'Rettighetene gjelder bare enkeltpersoner',
      ],
      explanation: 'At rettighetene er udelelige betyr at alle kategorier av rettigheter henger sammen og er like viktige.',
    },
    {
      question: 'Hva er et eksempel pa en kulturell rettighet?',
      options: [
        'Rett til a delta i kulturlivet',
        'Stemmerett',
        'Forbud mot slaveri',
        'Rett til rettferdig rettergang',
      ],
      explanation: 'Kulturelle rettigheter omfatter blant annet retten til a delta i kulturlivet og minoriteters kulturelle rettigheter.',
    },
    {
      question: 'Hvorfor er utdanning viktig for a kunne bruke ytringsfrihet?',
      options: [
        'Utdanning gir kunnskap og ferdigheter til a delta i debatt',
        'Utdanning laerer deg a holde munn',
        'Utdanning er ikke viktig for ytringsfrihet',
        'Utdanning laerer deg a unnga konflikter',
      ],
      explanation: 'Dette viser sammenhengen mellom rettighetene: Utdanning (OSK) er nodvendig for a kunne bruke ytringsfrihet (SP) effektivt.',
    },
    {
      question: 'Hva er en politisk rettighet?',
      options: [
        'Stemmerett og rett til a stille til valg',
        'Rett til utdanning',
        'Rett til helse',
        'Rett til arbeid',
      ],
      explanation: 'Politiske rettigheter gir frihet til a delta i det politiske liv, som stemmerett, forsamlingsfrihet og organisasjonsfrihet.',
    },
    {
      question: 'Hva menes med at rettighetene er gjensidig avhengige?',
      options: [
        'Oppfyllelse av en rettighet avhenger av andre rettigheter',
        'Rettighetene pavirker hverandre negativt',
        'Rettighetene ma oppfylles i en bestemt rekkefolge',
        'Bare noen rettigheter er viktige',
      ],
      explanation: 'Gjensidig avhengighet betyr at oppfyllelse av en rettighet avhenger av at andre rettigheter ogsa er oppfylt.',
    },
  ],

  'samfunnskunnskap-6-3': [
    {
      question: 'Nar ble FN grunnlagt?',
      options: [
        '1945',
        '1948',
        '1966',
        '1989',
      ],
      explanation: 'FN ble grunnlagt i 1945 etter andre verdenskrig for a fremme fred, sikkerhet og samarbeid mellom nasjoner.',
    },
    {
      question: 'Hva er The International Bill of Human Rights?',
      options: [
        'Verdenserklaeringen og de to hovedkonvensjonene fra 1966',
        'USAs uavhengighetserklaring',
        'Den franske menneskerettighetserklaeringen',
        'EMK og EU-charteret',
      ],
      explanation: 'The International Bill of Human Rights bestar av Verdenserklaeringen (1948) og de to hovedkonvensjonene om SP og OSK (1966).',
    },
    {
      question: 'Hva er forskjellen pa Verdenserklaeringen og FN-konvensjonene?',
      options: [
        'Verdenserklaeringen er ikke juridisk bindende, konvensjonene er bindende',
        'Verdenserklaeringen er bindende, konvensjonene er ikke',
        'Begge er juridisk bindende',
        'Ingen av dem er bindende',
      ],
      explanation: 'Verdenserklaeringen er moralsk forpliktende men ikke juridisk bindende, mens konvensjonene er juridisk bindende for stater som har ratifisert.',
    },
    {
      question: 'Hva er FNs menneskerettighetsrad?',
      options: [
        'Et organ med 47 medlemsland som overvar menneskerettighetssituasjonen',
        'En domstol som dommer menneskerettighetsbrudd',
        'Et rad som kun gir anbefalinger til stater',
        'Et organ som kun jobber med barns rettigheter',
      ],
      explanation: 'FNs menneskerettighetsrad har 47 medlemsland og gjennomforer blant annet Universal Periodic Review av alle FN-land.',
    },
    {
      question: 'Hva er Universal Periodic Review (UPR)?',
      options: [
        'Regelmessig gjennomgang av alle FN-lands menneskerettighetssituasjon',
        'En arlig rapport om verdens menneskerettigheter',
        'En pris til land med god menneskerettighetspraksis',
        'En spesiell domstol for menneskerettighetsbrudd',
      ],
      explanation: 'UPR er en mekanisme der Menneskerettighetsradet gjennomgar menneskerettighetssituasjonen i alle FN-land.',
    },
    {
      question: 'Hvilken konvensjon beskytter barn spesielt?',
      options: [
        'Barnekonvensjonen fra 1989',
        'Kvinnekonvensjonen fra 1979',
        'Rasekonvensjonen fra 1965',
        'Torturkonvensjonen fra 1984',
      ],
      explanation: 'FNs barnekonvensjon fra 1989 gir barn egne rettigheter og er verdens mest ratifiserte menneskerettighetskonvensjon.',
    },
    {
      question: 'Hva er en hovedsvakhet ved FNs menneskerettighetssystem?',
      options: [
        'Manglende handhevelse - FN kan ikke tvinge stater',
        'For fa konvensjoner',
        'Ingen overvakning av stater',
        'Rettighetene er for generelle',
      ],
      explanation: 'En hovedsvakhet er at FN ikke kan tvinge stater til a folge konvensjonene. Systemet er avhengig av politisk vilje og press.',
    },
    {
      question: 'Hva er FNs hoykommissaer for menneskerettigheter?',
      options: [
        'Lederen for FNs menneskerettighetskontor og talsmann for menneskerettigheter globalt',
        'Dommeren i FNs menneskerettighetsdomstol',
        'Lederen for FNs sikkerhetsrad',
        'Generalsekretaeren i FN',
      ],
      explanation: 'FNs hoykommissaer for menneskerettigheter leder menneskerettighetskontoret, overvar situasjonen i ulike land og er talsmann for menneskerettigheter.',
    },
    {
      question: 'Hva gjor konvensjonsorganene i FN?',
      options: [
        'Behandler statsrapporter og kan behandle individklager',
        'Dommer stater for menneskerettighetsbrudd',
        'Vedtar nye menneskerettighetskonvensjoner',
        'Gir ekonomisk stotte til fattige land',
      ],
      explanation: 'Konvensjonsorganene overvar at stater folger konvensjonene gjennom a behandle statsrapporter og gi anbefalinger.',
    },
    {
      question: 'Hvilken konvensjon definerer hvem som er flyktning?',
      options: [
        'Flyktningkonvensjonen fra 1951',
        'Barnekonvensjonen fra 1989',
        'Rasekonvensjonen fra 1965',
        'Torturkonvensjonen fra 1984',
      ],
      explanation: 'Flyktningkonvensjonen fra 1951 definerer hvem som er flyktning og forbyr a sende flyktninger tilbake til forfolgelse.',
    },
    {
      question: 'Hvorfor kritiseres FNs menneskerettighetsrad?',
      options: [
        'For a velge inn land med darlig menneskerettighetshistorikk',
        'For a ha for strenge krav til medlemsland',
        'For a fokusere bare pa vestlige land',
        'For a ikke ha nok medlemsland',
      ],
      explanation: 'Menneskerettighetsradet kritiseres for politisering, blant annet for a velge inn medlemsland med darlig menneskerettighetspraksis.',
    },
  ],

  'samfunnskunnskap-6-4': [
    {
      question: 'Nar ble Europaradet grunnlagt?',
      options: [
        '1949',
        '1945',
        '1950',
        '1957',
      ],
      explanation: 'Europaradet ble grunnlagt i 1949 for a fremme demokrati, menneskerettigheter og rettsstaten i Europa.',
    },
    {
      question: 'Hva er EMK?',
      options: [
        'Den europeiske menneskerettskonvensjonen',
        'Den europeiske miljokonvensjonen',
        'EU-charteret om menneskerettigheter',
        'En FN-konvensjon',
      ],
      explanation: 'EMK er Den europeiske menneskerettskonvensjonen fra 1950, den viktigste regionale menneskerettighetsavtalen i verden.',
    },
    {
      question: 'Hvor ligger Den europeiske menneskerettsdomstolen?',
      options: [
        'Strasbourg i Frankrike',
        'Geneve i Sveits',
        'Haag i Nederland',
        'Brussel i Belgia',
      ],
      explanation: 'EMD ligger i Strasbourg i Frankrike og er verdens mest effektive internasjonale domstol for menneskerettigheter.',
    },
    {
      question: 'Hva skiller det europeiske menneskerettighetssystemet fra FN-systemet?',
      options: [
        'EMDs dommer er juridisk bindende og individer kan klage direkte',
        'Det europeiske systemet har flere konvensjoner',
        'FN-systemet er sterkere',
        'Det europeiske systemet gjelder for flere land',
      ],
      explanation: 'Det europeiske systemet er sterkere fordi EMDs dommer er bindende, og enkeltpersoner kan klage direkte uten a ga gjennom staten.',
    },
    {
      question: 'Hva ma gjores for man kan klage til EMD?',
      options: [
        'Nasjonale rettsmidler ma vaere uttmt',
        'Saken ma godkjennes av regjeringen',
        'Man ma vaere statsborger i EU',
        'Saken ma ha vart offentlig kjent i 5 ar',
      ],
      explanation: 'For a klage til EMD ma klageren ha provd saken i nasjonale domstoler forst - nasjonale rettsmidler ma vaere uttmt.',
    },
    {
      question: 'Hvilke rettigheter beskytter EMK?',
      options: [
        'Sivile og politiske rettigheter som ytringsfrihet og forbud mot tortur',
        'Bare okonomiske rettigheter',
        'Bare sosiale rettigheter',
        'Kulturelle rettigheter',
      ],
      explanation: 'EMK beskytter sivile og politiske rettigheter som rett til liv, forbud mot tortur, ytringsfrihet og rett til rettferdig rettergang.',
    },
    {
      question: 'Hvor mange medlemsland har Europaradet?',
      options: [
        '46',
        '27',
        '193',
        '50',
      ],
      explanation: 'Europaradet har 46 medlemsland (etter at Russland ble suspendert i 2022). Det er ikke det samme som EU.',
    },
    {
      question: 'Hva har Norge blitt domt for i EMD flere ganger?',
      options: [
        'Brudd pa retten til familieliv i barnevernssaker',
        'Brudd pa ytringsfriheten',
        'Brudd pa religionsfriheten',
        'Brudd pa stemmeretten',
      ],
      explanation: 'Norge har blitt domt gjentatte ganger for brudd pa artikkel 8 (retten til familieliv) i barnevernssaker.',
    },
    {
      question: 'Hva er Den europeiske sosialpakten?',
      options: [
        'En konvensjon som dekker okonomiske og sosiale rettigheter',
        'En avtale om europeisk okonomisk samarbeid',
        'En del av EMK',
        'EUs sosiale regelverk',
      ],
      explanation: 'Den europeiske sosialpakten dekker okonomiske og sosiale rettigheter som rett til arbeid og sosial trygghet.',
    },
    {
      question: 'Hva skjer nar Norge dommes i EMD?',
      options: [
        'Norge ma betale erstatning og vurdere a endre lovgivning eller praksis',
        'Ingenting, dommen er bare radgivende',
        'Norge ma betale en bot til Europaradet',
        'Norges medlemskap i Europaradet suspenderes',
      ],
      explanation: 'Nar Norge dommes ma vi betale eventuell erstatning, og vi ma vurdere a endre lovgivning og praksis for a unnga nye brudd.',
    },
  ],

  'samfunnskunnskap-6-5': [
    {
      question: 'Nar fikk Grunnloven et eget menneskerettighetskapittel?',
      options: [
        '2014',
        '1814',
        '1999',
        '2003',
      ],
      explanation: 'Grunnloven ble betydelig utvidet med et menneskerettighetskapittel (kapittel E) i 2014.',
    },
    {
      question: 'Hva er menneskerettsloven?',
      options: [
        'En lov som gjor viktige konvensjoner til norsk lov med forrang',
        'Grunnlovens menneskerettighetskapittel',
        'En internasjonal konvensjon',
        'En lov som bare gjelder for barn',
      ],
      explanation: 'Menneskerettsloven fra 1999 gjor fem sentrale konvensjoner til norsk lov, og de har forrang ved konflikt med annen norsk lov.',
    },
    {
      question: 'Hvilke konvensjoner omfattes av menneskerettsloven?',
      options: [
        'EMK, SP, OSK, barnekonvensjonen og kvinnekonvensjonen',
        'Bare EMK',
        'Alle FN-konvensjoner',
        'Bare barnekonvensjonen',
      ],
      explanation: 'Menneskerettsloven inkorporerer fem konvensjoner: EMK, SP, OSK, barnekonvensjonen og kvinnekonvensjonen.',
    },
    {
      question: 'Hva betyr menneskerettslovens forrangsbestemmelse?',
      options: [
        'Ved konflikt skal konvensjonene ga foran norsk lov',
        'Grunnloven gar foran konvensjonene',
        'Konvensjonene gjelder bare nar de passer',
        'Stortinget kan velge a ignorere konvensjonene',
      ],
      explanation: 'Forrangsbestemmelsen i paragraf 3 betyr at ved konflikt mellom norsk lov og konvensjonene, skal konvensjonene ga foran.',
    },
    {
      question: 'Hva er NIM?',
      options: [
        'Norges institusjon for menneskerettigheter',
        'Norsk institutt for migrasjon',
        'Nasjonalt informasjonssenter for menneskerettigheter',
        'Nordisk institutt for miljo',
      ],
      explanation: 'NIM (Norges institusjon for menneskerettigheter) er et uavhengig organ som overvar menneskerettighetssituasjonen i Norge.',
    },
    {
      question: 'Hva gjor Likestillings- og diskrimineringsombudet?',
      options: [
        'Arbeider for likestilling og mot diskriminering',
        'Overvar barns rettigheter',
        'Behandler klager mot offentlig forvaltning',
        'Dommer i menneskerettighetssaker',
      ],
      explanation: 'LDO arbeider for likestilling og mot diskriminering, gir veiledning til individer og fremmer klager for Diskrimineringsnemnda.',
    },
    {
      question: 'Hvilken paragraf i Grunnloven handler om ytringsfrihet?',
      options: [
        'Paragraf 100',
        'Paragraf 92',
        'Paragraf 104',
        'Paragraf 110',
      ],
      explanation: 'Grunnloven paragraf 100 beskytter ytringsfriheten i Norge.',
    },
    {
      question: 'Hva er en menneskerettighetsutfordring i Norge?',
      options: [
        'Samiske rettigheter og arealforvaltning',
        'Manglende stemmerett for kvinner',
        'Forbud mot religionsfrihet',
        'Sensur av alle medier',
      ],
      explanation: 'Eksempler pa utfordringer i Norge er samiske rettigheter, barnefattigdom, diskriminering og LHBT+-rettigheter.',
    },
    {
      question: 'Hva er Sivilombudets rolle?',
      options: [
        'Behandler klager mot offentlig forvaltning',
        'Dommer i straffesaker',
        'Representerer Norge i internasjonale saker',
        'Lager nye lover',
      ],
      explanation: 'Sivilombudet behandler klager mot offentlig forvaltning og kan papeke menneskerettighetsbrudd.',
    },
    {
      question: 'Hvilken grunnlovsparagraf handler om barns rettigheter?',
      options: [
        'Paragraf 104',
        'Paragraf 100',
        'Paragraf 92',
        'Paragraf 110',
      ],
      explanation: 'Grunnloven paragraf 104 slaar fast barns rettigheter, inkludert at barnets beste skal vaere et grunnleggende hensyn.',
    },
  ],

  'samfunnskunnskap-6-6': [
    {
      question: 'Nar ble FNs barnekonvensjon vedtatt?',
      options: [
        '1989',
        '1948',
        '1979',
        '1966',
      ],
      explanation: 'FNs barnekonvensjon ble vedtatt i 1989 og er verdens mest ratifiserte menneskerettighetskonvensjon.',
    },
    {
      question: 'Hvordan definerer barnekonvensjonen barn?',
      options: [
        'Alle mennesker under 18 ar',
        'Alle mennesker under 16 ar',
        'Alle som gar pa skole',
        'Alle som bor hjemme hos foreldrene',
      ],
      explanation: 'Barnekonvensjonen definerer barn som alle mennesker under 18 ar.',
    },
    {
      question: 'Hvilke er de fire grunnprinsippene i barnekonvensjonen?',
      options: [
        'Ikke-diskriminering, barnets beste, rett til liv og utvikling, rett til a bli hort',
        'Mat, helse, utdanning og lek',
        'Frihet, likhet, broderskap og trygghet',
        'Ytringsfrihet, religionsfrihet, forsamlingsfrihet og stemmerett',
      ],
      explanation: 'De fire grunnprinsippene er ikke-diskriminering (art. 2), barnets beste (art. 3), rett til liv og utvikling (art. 6) og rett til a bli hort (art. 12).',
    },
    {
      question: 'Hva betyr barnets beste som grunnleggende hensyn?',
      options: [
        'Barnets beste skal alltid vurderes og tillegges stor vekt i avgjorelser',
        'Barn skal alltid fa det de vil',
        'Voksne vet alltid best hva som er bra for barn',
        'Barnets beste er det eneste hensynet som teller',
      ],
      explanation: 'Barnets beste er et grunnleggende hensyn, ikke det eneste, men det skal alltid vurderes og tillegges stor vekt.',
    },
    {
      question: 'Hvilket land har IKKE ratifisert barnekonvensjonen?',
      options: [
        'USA',
        'Norge',
        'Kina',
        'Russland',
      ],
      explanation: 'USA er det eneste landet som ikke har ratifisert FNs barnekonvensjon.',
    },
    {
      question: 'Hva betyr barns rett til a bli hort?',
      options: [
        'Barn skal fa uttale seg og deres mening skal tillegges vekt etter alder og modenhet',
        'Barn skal kunne snakke sa hoyt de vil',
        'Barn skal alltid bestemme selv',
        'Voksne ma alltid gjore som barn sier',
      ],
      explanation: 'Retten til a bli hort (artikkel 12) betyr at barn skal fa uttale seg, og deres mening skal tillegges vekt etter alder og modenhet.',
    },
    {
      question: 'Hvilken norsk lov regulerer forholdet mellom barn og foreldre?',
      options: [
        'Barneloven',
        'Barnevernsloven',
        'Opplaringsloven',
        'Menneskerettsloven',
      ],
      explanation: 'Barneloven regulerer forholdet mellom barn og foreldre, inkludert foreldreansvar, samvaersrett og forbud mot fysisk avstraffelse.',
    },
    {
      question: 'Hva er en utfordring for barns rettigheter i Norge?',
      options: [
        'Barnefattigdom - rundt 12% av barn vokser opp i lavinntektsfamilier',
        'Manglende skolegang',
        'Barnearbeid i industrien',
        'Barneekteskap',
      ],
      explanation: 'Barnefattigdom er en utfordring i Norge, der rundt 12% av barn vokser opp i familier med vedvarende lavinntekt.',
    },
    {
      question: 'Hva er Barneombudets rolle?',
      options: [
        'Uavhengig talsmann for barn som overvar barns rettigheter',
        'En domstol for barn',
        'Leder av barnevernet',
        'Stortingsrepresentant for barn',
      ],
      explanation: 'Barneombudet er en uavhengig talsmann for barn og unge som overvar barns rettigheter og uttaler seg i saker som berorer barn.',
    },
    {
      question: 'Hvor mange artikler inneholder barnekonvensjonen?',
      options: [
        '54',
        '30',
        '40',
        '20',
      ],
      explanation: 'Barnekonvensjonen inneholder 54 artikler som dekker alle sider av barns liv.',
    },
    {
      question: 'Hva er en global utfordring for barns rettigheter?',
      options: [
        'Over 160 millioner barn arbeider globalt',
        'Barn har for mye fritid',
        'Det finnes for mange skoler',
        'Barnedodeligheten er for lav',
      ],
      explanation: 'Barnearbeid er en stor global utfordring, med over 160 millioner barn i arbeid.',
    },
  ],

  'samfunnskunnskap-6-7': [
    {
      question: 'Hva er en rettighetskolisjon?',
      options: [
        'Nar ulike rettigheter trekker i motsatt retning og ma avveies',
        'Nar to mennesker krever samme rettighet',
        'Nar en rettighet brytes',
        'Nar land ikke blir enige om rettigheter',
      ],
      explanation: 'Rettighetskolisjon oppstar nar ulike rettigheter peker i motsatt retning, og man ma foreta en avveining mellom dem.',
    },
    {
      question: 'Hva er et eksempel pa rettighetskolisjon?',
      options: [
        'Ytringsfrihet mot vern mot hatprat',
        'Rett til mat mot rett til vann',
        'Rett til liv mot forbud mot tortur',
        'Stemmerett mot organisasjonsfrihet',
      ],
      explanation: 'Ytringsfrihet vs. vern mot hatprat er en klassisk rettighetskolisjon der to viktige hensyn ma avveies.',
    },
    {
      question: 'Hva menes med forholdsmessighetsvurdering?',
      options: [
        'Vurdering av om inngrep i en rettighet star i forhold til formalet',
        'Beregning av hvor mange som pavirkes',
        'Sammenligning av ulike lands rettigheter',
        'Vurdering av hvor gamle rettighetene er',
      ],
      explanation: 'Forholdsmessighetsvurdering handler om a vurdere om et inngrep i en rettighet er nodvendig og star i forhold til formalet.',
    },
    {
      question: 'Hva er universalisme i menneskerettighetsdebatten?',
      options: [
        'At menneskerettighetene gjelder for alle uavhengig av kultur',
        'At FN skal styre alle land',
        'At alle kulturer er like',
        'At bare vestlige land har rettigheter',
      ],
      explanation: 'Universalisme hevder at menneskerettighetene gjelder for alle mennesker, uavhengig av kultur, religion eller tradisjon.',
    },
    {
      question: 'Hva er kulturrelativisme?',
      options: [
        'Tanken om at verdier og rettigheter er kulturelt betinget',
        'At alle kulturer er likeverdige',
        'At kulturer ma isoleres fra hverandre',
        'At vestlig kultur er overlegen',
      ],
      explanation: 'Kulturrelativisme hevder at verdier og rettigheter er kulturelt betinget, og kritiserer menneskerettighetene for a vaere vestlige verdier.',
    },
    {
      question: 'Hvorfor er handhevelse av menneskerettigheter vanskelig internasjonalt?',
      options: [
        'Det finnes ingen tvangsmakt og suverenitetsprinsippet beskytter stater',
        'Det er for mange konvensjoner',
        'Bare rike land bryr seg om menneskerettigheter',
        'Rettighetene er for vagt formulert',
      ],
      explanation: 'Handhevelse er vanskelig fordi det ikke finnes noe verdenspoliti, og suverenitetsprinsippet beskytter staters selvbestemmelse.',
    },
    {
      question: 'Hva er en trussel mot menneskerettighetene i dag?',
      options: [
        'Populistiske bevegelser og autoritaere regimer',
        'For mange demokratier',
        'For stor ytringsfrihet',
        'For mange menneskerettighetsorganisasjoner',
      ],
      explanation: 'Trusler inkluderer populistiske bevegelser som avviser menneskerettigheter, autoritaere regimer og masseovervakningsteknologi.',
    },
    {
      question: 'Hvordan kan rettigheter avveies mot hverandre?',
      options: [
        'Gjennom vurdering av nodvendighet, proporsjonalitet og demokratisk legitimitet',
        'Ved a alltid velge den eldste rettigheten',
        'Ved a sporre folket i en folkeavstemning',
        'Ved a la den sterke parten vinne',
      ],
      explanation: 'Avveining skjer gjennom vurdering av nodvendighet, proporsjonalitet, rettigheter har en kjerne og demokratisk legitimitet.',
    },
    {
      question: 'Hva menes med at noen rettigheter har en ukrenskelig kjerne?',
      options: [
        'Noen rettigheter kan aldri fravikes, som forbud mot tortur',
        'Alle rettigheter kan endres',
        'Kjernen i rettigheter kan begrenses',
        'Bare grunnleggende rettigheter er viktige',
      ],
      explanation: 'Noen rettigheter har en absolutt kjerne som aldri kan fravikes, for eksempel forbudet mot tortur.',
    },
    {
      question: 'Hva er politisering i menneskerettighetsarbeidet?',
      options: [
        'At noen land skanes mens andre kritiseres ut fra politiske hensyn',
        'At politikere engasjerer seg i menneskerettigheter',
        'At menneskerettigheter blir partipolitikk',
        'At FN har politiske representanter',
      ],
      explanation: 'Politisering innebarer selektiv oppmerksomhet der allierte skanes og rivaler kritiseres, noe som svekker legitimiteten.',
    },
    {
      question: 'Hva kan vaere en mellomposisjon mellom universalisme og kulturrelativisme?',
      options: [
        'Kjerneverdiene er universelle, men anvendelsen kan tilpasses kontekst',
        'Bare vestlige land trenger menneskerettigheter',
        'Hver kultur bestemmer selv sine rettigheter',
        'Menneskerettighetene bor avskaffes',
      ],
      explanation: 'En mellomposisjon er at kjerneverdiene er universelle, men hvordan rettighetene anvendes kan tilpasses kulturell kontekst.',
    },
  ],

  // Chapters 7.1-7.7
'samfunnskunnskap-7-1': [
    {
      question: 'Hva er ytringsfrihet?',
      options: [
        'Retten til å uttrykke meninger uten forhåndssensur fra myndighetene',
        'Retten til å si hva man vil uten konsekvenser',
        'Friheten til å ytre seg bare på internett',
        'Retten til å snakke i Stortinget',
      ],
      explanation: 'Ytringsfrihet er retten til å uttrykke meninger, tanker og informasjon uten forhåndssensur fra myndighetene.',
    },
    {
      question: 'Hvilket argument for ytringsfrihet handler om at fri debatt fører til bedre erkjennelse av sannheten?',
      options: [
        'Sannhetsargumentet',
        'Demokratiargumentet',
        'Autonomiargumentet',
        'Frihetsargumentet',
      ],
      explanation: 'Sannhetsargumentet sier at fri meningsutveksling fører til bedre erkjennelse av sannheten, der feilaktige meninger avsløres gjennom motargumenter.',
    },
    {
      question: 'Hvilken paragraf i Grunnloven beskytter ytringsfriheten i Norge?',
      options: [
        '§ 100',
        '§ 1',
        '§ 50',
        '§ 200',
      ],
      explanation: 'Grunnloven § 100 er Norges ytringsfrihetsparagraf og gir et sterkt vern for ytringsfrihet.',
    },
    {
      question: 'Hva forbyr straffeloven § 185?',
      options: [
        'Hatefulle ytringer',
        'All kritikk av religion',
        'Politiske meninger',
        'Vitenskapelige teorier',
      ],
      explanation: 'Straffeloven § 185 forbyr hatefulle ytringer som trusler, forhånelse eller fremme av hat mot grupper basert på hudfarge, religion, seksuell orientering osv.',
    },
    {
      question: 'Hva menes med "chilling effect"?',
      options: [
        'Når folk sensurerer seg selv av frykt',
        'Når temperaturen synker i debatten',
        'Når mediene blir kalde og uinteresserte',
        'Når politikere nekter å svare',
      ],
      explanation: 'Chilling effect er når folk sensurerer seg selv av frykt for konsekvenser, noe som kan svekke den offentlige debatten.',
    },
    {
      question: 'Hvilket argument for ytringsfrihet handler om at demokratiet krever informerte borgere?',
      options: [
        'Demokratiargumentet',
        'Sannhetsargumentet',
        'Autonomiargumentet',
        'Offentlighetsargumentet',
      ],
      explanation: 'Demokratiargumentet sier at demokratiet krever informerte borgere og at fri debatt gir bedre politiske beslutninger.',
    },
    {
      question: 'Hva er ærekrenkelser?',
      options: [
        'Usanne påstander som skader en persons omdømme',
        'Alle kritiske uttalelser om andre',
        'Negative anmeldelser av produkter',
        'Politisk kritikk av regjeringen',
      ],
      explanation: 'Ærekrenkelser er usanne påstander som skader en persons omdømme og kan føre til sivilrettslig erstatningsansvar.',
    },
    {
      question: 'Hvilket internasjonalt dokument beskytter ytringsfrihet gjennom artikkel 10?',
      options: [
        'Den europeiske menneskerettskonvensjonen (EMK)',
        'FN-pakten',
        'Parisavtalen',
        'Schengen-avtalen',
      ],
      explanation: 'EMK artikkel 10 beskytter retten til ytringsfrihet, menings- og informasjonsfrihet, samt pressefriheten.',
    },
    {
      question: 'Når ble blasfemi avkriminalisert i Norge?',
      options: [
        '2015',
        '2000',
        '1990',
        '2020',
      ],
      explanation: 'Blasfemi var forbudt i Norge frem til 2015, da forbudet ble opphevet.',
    },
    {
      question: 'Hva er autonomiargumentet for ytringsfrihet?',
      options: [
        'At mennesker har rett til å forme egne meninger som uttrykk for personlig frihet',
        'At staten skal bestemme hva som er sant',
        'At bare eksperter bør uttale seg',
        'At alle meninger er like gyldige',
      ],
      explanation: 'Autonomiargumentet sier at mennesker har rett til å forme egne meninger, og at ytringsfrihet er uttrykk for personlig frihet og respekt for individets verdighet.',
    },
  ],

  'samfunnskunnskap-7-2': [
    {
      question: 'Hva kalles mediene ofte?',
      options: [
        'Den fjerde statsmakt',
        'Den tredje statsmakt',
        'Den femte statsmakt',
        'Den første statsmakt',
      ],
      explanation: 'Mediene kalles ofte "den fjerde statsmakt" fordi de kontrollerer og gransker de tre andre statsmaktene (Storting, regjering, domstoler).',
    },
    {
      question: 'Hva er vakthundfunksjonen?',
      options: [
        'At mediene avdekker maktmisbruk og korrupsjon',
        'At mediene passer på hunder',
        'At mediene beskytter regjeringen',
        'At mediene sensurerer innhold',
      ],
      explanation: 'Vakthundfunksjonen handler om at mediene avdekker maktmisbruk og korrupsjon, gransker politikere og næringsliv, og stiller makthavere til ansvar.',
    },
    {
      question: 'Hva er kildevern?',
      options: [
        'Journalisters rett til å beskytte identiteten til sine kilder',
        'Beskyttelse av vannkilder',
        'Vern av religiøse skrifter',
        'Arkivering av gamle aviser',
      ],
      explanation: 'Kildevern er journalisters rett til å beskytte identiteten til sine kilder, noe som er viktig for at varslere skal tørre å tipse om kritikkverdige forhold.',
    },
    {
      question: 'Hva heter medienes egne etiske retningslinjer?',
      options: [
        'Vær varsom-plakaten',
        'Medieplakaten',
        'Etikkplakaten',
        'Journalistplakaten',
      ],
      explanation: 'Vær varsom-plakaten er medienes egne etiske retningslinjer, vedtatt av Norsk Presseforbund.',
    },
    {
      question: 'Hvilket organ håndhever Vær varsom-plakaten?',
      options: [
        'Pressens Faglige Utvalg (PFU)',
        'Stortinget',
        'Medietilsynet',
        'Politiet',
      ],
      explanation: 'Pressens Faglige Utvalg (PFU) håndhever Vær varsom-plakaten og behandler klager på medienes journalistiske atferd.',
    },
    {
      question: 'Hva er informasjonsfunksjonen til mediene?',
      options: [
        'Å informere borgerne om hendelser og beslutninger',
        'Å underholde publikum',
        'Å selge reklame',
        'Å støtte regjeringen',
      ],
      explanation: 'Informasjonsfunksjonen handler om å informere om hendelser og beslutninger, forklare komplekse saker og gi borgerne kunnskapsgrunnlag.',
    },
    {
      question: 'Hva menes med dagsordenfunksjonen?',
      options: [
        'At mediene påvirker hva folk er opptatt av gjennom hvilke saker de dekker',
        'At mediene lager dagsordener for politikere',
        'At mediene bestemmer klokkeslett for TV-sendinger',
        'At mediene organiserer debatter',
      ],
      explanation: 'Dagsordenfunksjonen betyr at mediene påvirker hva folk er opptatt av - saker som dekkes får oppmerksomhet, mens saker som ikke dekkes ignoreres.',
    },
    {
      question: 'Hvilken utfordring handler om at annonseinntekter har flyttet til tech-giganter?',
      options: [
        'Økonomisk press',
        'Konsentrasjon av eierskap',
        'Tillit under press',
        'Tidspress',
      ],
      explanation: 'Økonomisk press er en stor utfordring fordi annonseinntekter har flyttet til tech-giganter som Google og Facebook.',
    },
    {
      question: 'Hva er arenafunksjonen til mediene?',
      options: [
        'Å skape rom for offentlig debatt og gi plass til ulike stemmer',
        'Å arrangere sportsarrangementer',
        'Å bygge arenaer for konserter',
        'Å lage konkurranser for leserne',
      ],
      explanation: 'Arenafunksjonen handler om at mediene skaper rom for offentlig debatt, gir plass til ulike stemmer og legger til rette for meningsutveksling.',
    },
    {
      question: 'Hva betyr "clickbait"?',
      options: [
        'Sensasjonelle overskrifter for å trekke lesere',
        'En type datavirus',
        'Annonser på nettsider',
        'Kommentarfelt i aviser',
      ],
      explanation: 'Clickbait er sensasjonelle eller villledende overskrifter som brukes for å trekke lesere til å klikke på artikler.',
    },
  ],

  'samfunnskunnskap-7-3': [
    {
      question: 'Hva er NRK?',
      options: [
        'Norges allmennkringkaster, eid av staten',
        'En privat TV-kanal',
        'En avis',
        'Et reklamebyrå',
      ],
      explanation: 'NRK (Norsk rikskringkasting) er Norges allmennkringkaster og den største medieaktøren i Norge, eid av staten.',
    },
    {
      question: 'Hvordan finansieres NRK fra 2020?',
      options: [
        'Over statsbudsjettet',
        'Gjennom lisens',
        'Gjennom reklame',
        'Gjennom abonnement',
      ],
      explanation: 'Fra 2020 finansieres NRK over statsbudsjettet, etter at den tidligere lisensordningen ble avviklet.',
    },
    {
      question: 'Hvilket mediekonsern eier VG og Aftenposten?',
      options: [
        'Schibsted',
        'Amedia',
        'Polaris Media',
        'NRK',
      ],
      explanation: 'Schibsted eier VG, Aftenposten og Bergens Tidende, og er et av de største mediekonsernene i Norge.',
    },
    {
      question: 'Hva er produksjonstilskudd?',
      options: [
        'Støtte til aviser med svak økonomi',
        'Tilskudd til TV-produksjoner',
        'Penger til filmindustrien',
        'Støtte til influencere',
      ],
      explanation: 'Produksjonstilskudd er offentlig støtte til aviser med svak økonomi, spesielt "nummer to-aviser" i byer og nisjeaviser.',
    },
    {
      question: 'Hvor mange lokalaviser finnes det omtrent i Norge?',
      options: [
        'Over 200',
        'Omtrent 50',
        'Omtrent 100',
        'Omtrent 500',
      ],
      explanation: 'Norge har over 200 lokalaviser som er viktige for lokaldemokratiet og dekning av kommunestyrer og lokalt næringsliv.',
    },
    {
      question: 'Hvilket organ overvåker NRK?',
      options: [
        'Kringkastingsrådet',
        'Stortinget',
        'Medietilsynet',
        'Pressens Faglige Utvalg',
      ],
      explanation: 'Kringkastingsrådet overvåker NRK og behandler klager på NRKs programvirksomhet.',
    },
    {
      question: 'Hva er momsfritaket for aviser?',
      options: [
        'Aviser og nyhetstjenester har 0 % moms',
        'Aviser betaler 25 % moms',
        'Bare papiravier har momsfritak',
        'Bare NRK har momsfritak',
      ],
      explanation: 'Aviser og nyhetstjenester har 0 % moms, inkludert digitale abonnement, noe som er en betydelig økonomisk fordel.',
    },
    {
      question: 'Hvilket mediekonsern eier over 80 lokale og regionale aviser?',
      options: [
        'Amedia',
        'Schibsted',
        'Polaris Media',
        'TV 2',
      ],
      explanation: 'Amedia eier over 80 lokale og regionale aviser og er Norges største aviskonsern målt i opplag.',
    },
    {
      question: 'Hva er NRKs samfunnsoppdrag?',
      options: [
        'Å informere, utdanne og underholde hele befolkningen',
        'Å tjene penger til staten',
        'Å konkurrere med private medier',
        'Å lage underholdning for barn',
      ],
      explanation: 'NRKs samfunnsoppdrag er å informere, utdanne og underholde, dekke hele landet, tilby innhold på nynorsk og samisk, og være allment tilgjengelig.',
    },
    {
      question: 'Hvilket tilsyn overvåker medieeierskap i Norge?',
      options: [
        'Medietilsynet',
        'Datatilsynet',
        'Konkurransetilsynet',
        'Finanstilsynet',
      ],
      explanation: 'Medietilsynet overvåker medieeierskap og har ansvar for å sikre mangfold i det norske mediemarkedet.',
    },
  ],

  'samfunnskunnskap-7-4': [
    {
      question: 'Hva er en algoritme i sosiale medier?',
      options: [
        'Et dataprogram som bestemmer hvilket innhold du får se',
        'En person som velger nyheter',
        'En type annonse',
        'Et passord',
      ],
      explanation: 'En algoritme er et dataprogram som analyserer din atferd og bestemmer hvilket innhold du får se, basert på hva som er sannsynlig å engasjere deg.',
    },
    {
      question: 'Hva er et ekkokammer?',
      options: [
        'Når man hovedsakelig eksponeres for synspunkter man allerede er enig i',
        'Et rom med god akustikk',
        'En type mikrofon',
        'Et forum for musikkinteresserte',
      ],
      explanation: 'Ekkokammer oppstår når vi hovedsakelig eksponeres for synspunkter vi allerede er enige i, og våre meninger blir bekreftet.',
    },
    {
      question: 'Hva er en filterboble?',
      options: [
        'Når algoritmer filtrerer bort informasjon som ikke passer preferansene dine',
        'En type spam-filter',
        'En beskyttelse mot virus',
        'Et luftrenseapparat',
      ],
      explanation: 'Filterbobler oppstår når algoritmer filtrerer bort informasjon som ikke passer våre preferanser, slik at vi ikke ser hele bildet.',
    },
    {
      question: 'Hvilken bevegelse er et eksempel på positiv mobilisering via sosiale medier?',
      options: [
        '#MeToo',
        '#FakeNews',
        '#Reklame',
        '#Shopping',
      ],
      explanation: '#MeToo-bevegelsen er et eksempel på hvordan sosiale medier kan brukes til å organisere og mobilisere rundt viktige samfunnsspørsmål.',
    },
    {
      question: 'Hva er EUs regulering av sosiale medier kalt?',
      options: [
        'Digital Services Act (DSA)',
        'Social Media Law',
        'Internet Freedom Act',
        'Platform Regulation',
      ],
      explanation: 'EUs Digital Services Act (DSA) stiller krav til sosiale medier om fjerning av ulovlig innhold og transparens om algoritmer.',
    },
    {
      question: 'Hvilket sosialt medium er kjent for korte videoer og kraftig algoritme?',
      options: [
        'TikTok',
        'LinkedIn',
        'Twitter/X',
        'Facebook',
      ],
      explanation: 'TikTok er kjent for korte videoer og en kraftig algoritme som er svært god til å tilpasse innhold til brukernes interesser.',
    },
    {
      question: 'Hva er brukergenerert innhold?',
      options: [
        'Innhold som lages av vanlige brukere, ikke profesjonelle',
        'Innhold laget av algoritmer',
        'Innhold fra nyhetsbyråer',
        'Reklame fra bedrifter',
      ],
      explanation: 'Brukergenerert innhold er innhold som lages og deles av vanlige brukere på sosiale medier, i motsetning til profesjonelt produsert innhold.',
    },
    {
      question: 'Hva er en utfordring med sosiale medier for demokratiet?',
      options: [
        'Spredning av desinformasjon og hatprat',
        'For mange nyheter',
        'For høy kvalitet på innhold',
        'For streng moderering',
      ],
      explanation: 'Sosiale medier kan svekke demokratiet gjennom spredning av desinformasjon, hatprat, polarisering og utenlandsk påvirkning.',
    },
    {
      question: 'Hva menes med innholdsmoderering?',
      options: [
        'At plattformer fjerner ulovlig eller skadelig innhold',
        'At brukere må betale for innhold',
        'At innhold blir redigert av journalister',
        'At reklame plasseres i innholdet',
      ],
      explanation: 'Innholdsmoderering er når sosiale medieplattformer fjerner eller merker innhold som bryter med retningslinjer eller lovverk.',
    },
    {
      question: 'Hvilket argument brukes mot strengere regulering av sosiale medier?',
      options: [
        'Det kan true ytringsfriheten',
        'Det vil gjøre plattformene mer populære',
        'Det vil øke annonseinntektene',
        'Det vil gjøre algoritmene bedre',
      ],
      explanation: 'Motstandere av strengere regulering argumenterer for at det kan true ytringsfriheten og at det er vanskelig å definere hva som er skadelig innhold.',
    },
  ],

  'samfunnskunnskap-7-5': [
    {
      question: 'Hva er kildekritikk?',
      options: [
        'Metoder for å vurdere om informasjon er pålitelig, sann og relevant',
        'Kritikk av journalister',
        'Negative kommentarer på nett',
        'Sensur av kilder',
      ],
      explanation: 'Kildekritikk er metoder for å vurdere om informasjon er pålitelig, sann og relevant - en grunnleggende ferdighet for å navigere i dagens medielandskap.',
    },
    {
      question: 'Hva er et av de fire grunnspørsmålene i kildekritikk?',
      options: [
        'Hvem står bak?',
        'Hvor mye koster det?',
        'Er det morsomt?',
        'Hvor langt er teksten?',
      ],
      explanation: 'De fire grunnspørsmålene er: Hvem står bak? Hva er formålet? Når ble det publisert? Hvordan er det fremstilt?',
    },
    {
      question: 'Hva er en primærkilde?',
      options: [
        'Førstehånds vitnesbyrd eller originaldokumenter',
        'Den viktigste avisen',
        'Den første kilden du finner på Google',
        'En kilde med mange lesere',
      ],
      explanation: 'Primærkilder er førstehånds vitnesbyrd, originaldokumenter eller forskning - oftest de mest troverdige kildene.',
    },
    {
      question: 'Hva er Faktisk.no?',
      options: [
        'En norsk faktasjekktjeneste',
        'En nyhetsavis',
        'En søkemotor',
        'Et sosialt medium',
      ],
      explanation: 'Faktisk.no er Norges største faktasjekktjeneste som verifiserer om påstander stemmer med virkeligheten.',
    },
    {
      question: 'Hva er laterallesing?',
      options: [
        'Å søke informasjon om kilden i andre faner i stedet for å lese kilden grundig',
        'Å lese tekst sideveis',
        'Å lese flere artikler samtidig',
        'Å bare lese overskrifter',
      ],
      explanation: 'Laterallesing er en faktasjekkteknikk der du åpner nye faner og søker informasjon OM kilden, i stedet for å lese kilden grundig fra innsiden.',
    },
    {
      question: 'Hva er et varselstegn på upålitelig informasjon?',
      options: [
        'Sensasjonelle overskrifter og clickbait',
        'Mange kilder og referanser',
        'Balansert fremstilling',
        'Tydelig avsenderinformasjon',
      ],
      explanation: 'Sensasjonelle overskrifter, clickbait, ukjent avsender og manglende kilder er varselstegn på at informasjon kan være upålitelig.',
    },
    {
      question: 'Hva er en sekundærkilde?',
      options: [
        'Fortolkninger og analyser av primærkilder',
        'Den nest beste kilden',
        'En kilde med færre lesere',
        'En kilde fra utlandet',
      ],
      explanation: 'Sekundærkilder er fortolkninger og analyser av primærkilder, som journalistikk basert på originaldokumenter eller lærebøker.',
    },
    {
      question: 'Hvorfor fungerer laterallesing?',
      options: [
        'Du får ekstern vurdering av kilden og sparer tid',
        'Du leser raskere',
        'Du unngår å bli trøtt',
        'Du finner flere annonser',
      ],
      explanation: 'Laterallesing fungerer fordi du sparer tid, unngår å bli overbevist av overtalende innhold, og får ekstern vurdering av kilden.',
    },
    {
      question: 'Hvilken type domene regnes generelt som mer pålitelig?',
      options: [
        '.no, .org, .edu, .gov',
        'Alle .com-domener',
        'Domener med lange navn',
        'Domener med tall',
      ],
      explanation: 'Domener som .no, .org, .edu og .gov regnes generelt som mer pålitelige enn tilfeldige .com-domener.',
    },
    {
      question: 'Hva bør du gjøre når du ser et sjokkerende bilde på nett?',
      options: [
        'Gjøre bildesøk for å sjekke om det er manipulert eller tatt ut av kontekst',
        'Dele det umiddelbart',
        'Stole på at det er ekte',
        'Ignorere det',
      ],
      explanation: 'Du bør gjøre bildesøk (f.eks. Google Images) for å sjekke om bildet er manipulert eller tatt ut av kontekst før du stoler på det.',
    },
  ],

  'samfunnskunnskap-7-6': [
    {
      question: 'Hva er forskjellen på feilinformasjon og desinformasjon?',
      options: [
        'Feilinformasjon spres uten intensjon om å villede, desinformasjon spres bevisst',
        'De betyr det samme',
        'Feilinformasjon er verre enn desinformasjon',
        'Desinformasjon er bare på engelsk',
      ],
      explanation: 'Feilinformasjon spres uten intensjon om å villede (misforståelse), mens desinformasjon er falsk informasjon som bevisst spres for å villede.',
    },
    {
      question: 'Hva er bekreftelsesbias?',
      options: [
        'At vi lettere tror på det som bekrefter vårt eksisterende syn',
        'At vi bekrefter informasjon før vi deler',
        'At mediene bekrefter sine kilder',
        'At fakta alltid stemmer',
      ],
      explanation: 'Bekreftelsesbias betyr at vi lettere tror på informasjon som bekrefter det vi allerede mener, og er mindre kritiske til slike meninger.',
    },
    {
      question: 'Hva er en konspirasjonsteorier?',
      options: [
        'Forklaringer basert på hemmelige sammensvergelser, ofte immune mot motbevis',
        'Vitenskapelige teorier om universet',
        'Teorier fra politikere',
        'Forklaringer fra journalister',
      ],
      explanation: 'Konspirasjonsteorier er forklaringer basert på hemmelige sammensvergelser, som ofte er immune mot motbevis og kan ha farlige konsekvenser.',
    },
    {
      question: 'Hva er "prebunking"?',
      options: [
        'Å forberede folk på desinformasjonsteknikker før de eksponeres for dem',
        'Å avsløre løgner i etterkant',
        'Å blokkere falske nyheter',
        'Å straffe de som sprer løgner',
      ],
      explanation: 'Prebunking er å forberede folk på desinformasjonsteknikker på forhånd, noe som er mer effektivt enn å rette feilinformasjon i etterkant.',
    },
    {
      question: 'Hvilken faktor gjør at desinformasjon spres raskt på sosiale medier?',
      options: [
        'Algoritmer prioriterer engasjerende innhold, og falske nyheter er ofte mer engasjerende',
        'Folk leser alltid hele artikkelen',
        'Alle sjekker kilder grundig',
        'Sosiale medier har streng kvalitetskontroll',
      ],
      explanation: 'Algoritmer prioriterer engasjerende innhold, og forskning viser at falske nyheter ofte er mer engasjerende og spres raskere enn sanne nyheter.',
    },
    {
      question: 'Hva er propaganda?',
      options: [
        'Ensidig informasjon for å påvirke holdninger, kan være sann men partisk',
        'All informasjon fra staten',
        'Bare løgner',
        'Nøytral informasjon',
      ],
      explanation: 'Propaganda er ensidig informasjon som har til hensikt å påvirke holdninger. Den kan være sann, men er partisk og brukes ofte av stater og politiske bevegelser.',
    },
    {
      question: 'Hva er en trollfabrikk?',
      options: [
        'Organisasjoner som systematisk sprer desinformasjon og manipulerer debatt',
        'Fabrikker som lager leker',
        'Nettforum for diskusjon',
        'Dataspillselskaper',
      ],
      explanation: 'Trollfabrikker er organisasjoner, ofte statsstøttet, som systematisk sprer desinformasjon og manipulerer offentlig debatt gjennom falske profiler.',
    },
    {
      question: 'Hvilken hendelse er et eksempel på desinformasjon under en krise?',
      options: [
        'Falske kurer og vaksineskepsis under covid-19-pandemien',
        'Værvarsel som ikke stemte',
        'Feil i sportssendinger',
        'Trykkfeil i aviser',
      ],
      explanation: 'Under covid-19-pandemien spredte det seg mye desinformasjon om falske kurer, vaksineskepsis og konspirasjonsteorier om virusets opprinnelse.',
    },
    {
      question: 'Hvem tjener på spredning av desinformasjon?',
      options: [
        'Autoritære regimer, ekstreme politiske krefter og de som tjener penger på klikk',
        'Vanlige borgere',
        'Kvalitetsjournalister',
        'Faktasjekktjenester',
      ],
      explanation: 'Desinformasjon tjener autoritære regimer som vil svekke demokratier, ekstreme politiske krefter, og aktører som tjener penger på klikk.',
    },
    {
      question: 'Hva kan myndighetene gjøre for å motvirke desinformasjon?',
      options: [
        'Styrke digital mediekompetanse i skolen og støtte kvalitetsjournalistikk',
        'Forby all kritikk',
        'Stenge alle sosiale medier',
        'Innføre sensur av alle medier',
      ],
      explanation: 'Myndighetene kan motvirke desinformasjon gjennom digital mediekompetanse i skolen, støtte til kvalitetsjournalistikk og regulering av plattformer.',
    },
  ],

  'samfunnskunnskap-7-7': [
    {
      question: 'Hva er personvern?',
      options: [
        'Retten til å kontrollere informasjon om seg selv',
        'Vern av personlige eiendeler',
        'Beskyttelse mot innbrudd',
        'Forsikring av verdisaker',
      ],
      explanation: 'Personvern handler om retten til å kontrollere informasjon om seg selv, noe som er spesielt viktig i den digitale tidsalderen.',
    },
    {
      question: 'Hva er GDPR?',
      options: [
        'EUs personvernforordning fra 2018',
        'En type datavirus',
        'Et sosialt medium',
        'En norsk lov om medier',
      ],
      explanation: 'GDPR (General Data Protection Regulation) er EUs personvernforordning fra 2018, som også gjelder i Norge.',
    },
    {
      question: 'Hva er "retten til å bli glemt"?',
      options: [
        'Retten til å få slettet persondata om seg selv',
        'Retten til å glemme passord',
        'Retten til å bli anonymisert i aviser',
        'Retten til å slette andres data',
      ],
      explanation: 'Retten til å bli glemt er en rettighet under GDPR som gir deg rett til å få slettet persondata om deg selv.',
    },
    {
      question: 'Hva er cookies?',
      options: [
        'Små datafiler som nettsider lagrer på datamaskinen din for å spore aktivitet',
        'Virus på datamaskinen',
        'Passord du har lagret',
        'E-poster du har sendt',
      ],
      explanation: 'Cookies er små datafiler som nettsider lagrer på datamaskinen din for å huske innstillinger og spore din aktivitet på nett.',
    },
    {
      question: 'Hva er metadata?',
      options: [
        'Data om data, som når og hvor du kommuniserte, og med hvem',
        'Falske data',
        'Data fra sosiale medier',
        'Data om helsen din',
      ],
      explanation: 'Metadata er data om data - som når og hvor du kommuniserte, hvem du kommuniserte med, og hvor lenge samtalen varte.',
    },
    {
      question: 'Hva er overvåkningskapitalisme?',
      options: [
        'Forretningsmodeller basert på å høste og selge persondata',
        'Kapitalisme i overvåkningsindustrien',
        'Statlig overvåkning av bedrifter',
        'Investering i sikkerhetskameraer',
      ],
      explanation: 'Overvåkningskapitalisme er et begrep som beskriver forretningsmodeller basert på å høste og selge persondata for målrettet reklame.',
    },
    {
      question: 'Hvilket tilsyn har ansvar for personvern i Norge?',
      options: [
        'Datatilsynet',
        'Medietilsynet',
        'Finanstilsynet',
        'Arbeidstilsynet',
      ],
      explanation: 'Datatilsynet er Norges tilsynsmyndighet for personvern og kan gi bøter og pålegg ved brudd på personvernreglene.',
    },
    {
      question: 'Hva er et eksempel på passive digitale spor?',
      options: [
        'Lokasjonsdata fra telefonen din',
        'En post du la ut på Facebook',
        'En e-post du sendte',
        'Et søk du gjorde på Google',
      ],
      explanation: 'Passive digitale spor er data som samles automatisk uten at du aktivt gjør noe, som lokasjonsdata, cookies og IP-adresser.',
    },
    {
      question: 'Hva kan du gjøre for å beskytte personvernet ditt?',
      options: [
        'Bruke sterke passord, tofaktorautentisering og begrense cookies',
        'Dele mest mulig informasjon',
        'Bruke samme passord overalt',
        'Godta alle cookies automatisk',
      ],
      explanation: 'Du kan beskytte personvernet ved å bruke sterke passord, tofaktorautentisering, begrense cookies, og tenke før du deler informasjon.',
    },
    {
      question: 'Hvorfor er personvern viktig for demokratiet?',
      options: [
        'Fordi overvåkning kan føre til selvsensureringseffekt og svekke ytringsfrihet',
        'Fordi det gjør valg lettere å gjennomføre',
        'Fordi det hjelper politikere',
        'Fordi det gir bedre TV-sendinger',
      ],
      explanation: 'Personvern er viktig for demokratiet fordi overvåkning kan føre til "chilling effect" - selvsensureringseffekt - som svekker ytringsfriheten.',
    },
    {
      question: 'Hva er tofaktorautentisering?',
      options: [
        'En sikkerhetsmetode som krever to ulike bekreftelser for å logge inn',
        'To passord på rad',
        'En type cookie',
        'En metode for å slette data',
      ],
      explanation: 'Tofaktorautentisering er en sikkerhetsmetode der du må bekrefte innlogging på to måter, for eksempel passord pluss kode på telefonen.',
    },
  ],

  // Chapters 8.1-8.8
'samfunnskunnskap-8-1': [
    {
      question: 'Hva er en velferdsstat?',
      options: [
        'En stat som tar ansvar for innbyggernes velferd gjennom offentlige ordninger',
        'En stat som lar markedet styre all velferd',
        'En stat med lite skatter',
        'En stat uten offentlige tjenester',
      ],
      explanation: 'En velferdsstat er en stat som tar ansvar for innbyggernes velferd gjennom offentlige ordninger som helsetjenester, utdanning, trygd og pensjon.',
    },
    {
      question: 'Hva betyr universelle ordninger i velferdsstaten?',
      options: [
        'Ordninger som gjelder alle, ikke bare de fattige',
        'Ordninger som kun gjelder de fattigste',
        'Ordninger som kun gjelder de rike',
        'Ordninger som kun gjelder de som jobber',
      ],
      explanation: 'Universelle ordninger gjelder alle innbyggere, uavhengig av inntekt. Dette skaper fellesskap og unngår stigmatisering.',
    },
    {
      question: 'Når ble Folketrygden innfort i Norge?',
      options: [
        '1967',
        '1945',
        '1985',
        '2000',
      ],
      explanation: 'Folketrygden ble innfort i 1967 og markerte en viktig milepael i utviklingen av den norske velferdsstaten.',
    },
    {
      question: 'Hva er hovedkilden til finansiering av velferdsstaten?',
      options: [
        'Skatter og avgifter',
        'Lotterier',
        'Donasjoner',
        'Laan fra utlandet',
      ],
      explanation: 'Velferdsstaten finansieres hovedsakelig gjennom skatter og avgifter som inntektsskatt, merverdiavgift og arbeidsgiveravgift.',
    },
    {
      question: 'Hva er NAV?',
      options: [
        'Arbeids- og velferdsforvaltningen som samler arbeidsformidling og trygdeutbetalinger',
        'En privat forsikringsordning',
        'En frivillig organisasjon',
        'Et sykehus',
      ],
      explanation: 'NAV (Arbeids- og velferdsforvaltningen) samler arbeidsformidling og trygdeutbetalinger, og ble opprettet i 2006.',
    },
    {
      question: 'Hvilket prinsipp beskriver "yte etter evne, faa etter behov"?',
      options: [
        'Omfordeling',
        'Konkurranse',
        'Markedsokonomi',
        'Privatisering',
      ],
      explanation: 'Omfordeling betyr at man betaler skatt etter evne og mottar ytelser etter behov, noe som reduserer okonomiske forskjeller.',
    },
    {
      question: 'Hva er formalet med handlingsregelen?',
      options: [
        'Sikre at kun avkastningen fra Oljefondet brukes',
        'Bestemme hvor mye skatt folk skal betale',
        'Regulere arbeidsmarkedet',
        'Styre innvandringen',
      ],
      explanation: 'Handlingsregelen sier at vi kun skal bruke forventet realavkastning fra Oljefondet (3%), for aa sikre fremtidig velferd.',
    },
    {
      question: 'Hvilken av disse er IKKE en velferdsordning?',
      options: [
        'Aksjehandel',
        'Sykepenger',
        'Alderspensjon',
        'Foreldrepenger',
      ],
      explanation: 'Aksjehandel er ikke en velferdsordning. Velferdsordninger inkluderer sykepenger, alderspensjon, foreldrepenger og dagpenger.',
    },
    {
      question: 'Hva kjennetegner den nordiske modellen?',
      options: [
        'Universelle ordninger, hoy skatt og sterk omfordeling',
        'Lav skatt og privat velferd',
        'Kun behovsprovde ordninger',
        'Ingen offentlig sektor',
      ],
      explanation: 'Den nordiske modellen kjennetegnes av universelle ordninger, hoyt skattenivaa, omfattende offentlig sektor og sterk omfordeling.',
    },
    {
      question: 'Hvilket av disse omraadene er storst i statsbudsjettet?',
      options: [
        'Folketrygden (pensjon og trygd)',
        'Kultur',
        'Bistand',
        'Forskning',
      ],
      explanation: 'Folketrygden er den desidert storste utgiftsposten i statsbudsjettet, med ca. 550 milliarder kroner aarlig.',
    },
  ],

  'samfunnskunnskap-8-2': [
    {
      question: 'Hva er skattens hovedfunksjoner?',
      options: [
        'Finansiere offentlige tjenester, omfordele ressurser, styre atferd og stabilisere okonomien',
        'Kun aa samle inn penger til staten',
        'Kun aa straffe de rike',
        'Kun aa finansiere forsvar',
      ],
      explanation: 'Skatten har fire hovedfunksjoner: finansiere offentlige tjenester, omfordele ressurser, styre atferd og stabilisere okonomien.',
    },
    {
      question: 'Hva er forskjellen paa direkte og indirekte skatter?',
      options: [
        'Direkte skatter betales direkte av den som ilegges, indirekte skatter er inkludert i priser',
        'Det er ingen forskjell',
        'Direkte skatter er hoyere',
        'Indirekte skatter betales kun av bedrifter',
      ],
      explanation: 'Direkte skatter (som inntektsskatt) betales direkte, mens indirekte skatter (som moms) er inkludert i prisen paa varer og tjenester.',
    },
    {
      question: 'Hva betyr progressiv beskatning?',
      options: [
        'Skatteprosenten oker med inntekten',
        'Alle betaler samme prosent',
        'De fattigste betaler mest',
        'Ingen betaler skatt',
      ],
      explanation: 'Progressiv beskatning betyr at skatteprosenten oker med inntekten - de som tjener mest, betaler mest baade i kroner og prosent.',
    },
    {
      question: 'Hva er merverdiavgift (moms)?',
      options: [
        'En indirekte skatt som legges paa varer og tjenester',
        'En skatt paa formue',
        'En skatt kun for bedrifter',
        'En avgift for aa starte bedrift',
      ],
      explanation: 'Merverdiavgift (moms) er en indirekte skatt paa varer og tjenester. Normal sats er 25%, men mat har 15%.',
    },
    {
      question: 'Hva er satsen for skatt paa alminnelig inntekt i Norge?',
      options: [
        '22%',
        '50%',
        '10%',
        '35%',
      ],
      explanation: 'Skatt paa alminnelig inntekt har en flat sats paa 22% etter fradrag.',
    },
    {
      question: 'Hva er formalet med saeravgifter paa alkohol og tobakk?',
      options: [
        'Styre atferd ved aa gjore helseskadelige produkter dyrere',
        'Kun aa skaffe penger til staten',
        'Straffe brukerne',
        'Gjore produktene billigere',
      ],
      explanation: 'Saeravgifter paa alkohol og tobakk har som formal aa styre atferd ved aa gjore helseskadelige produkter dyrere.',
    },
    {
      question: 'Hva er trinnsskatten?',
      options: [
        'En progressiv skatt der satsen oker trinnvis med inntekten',
        'En fast skatt alle betaler',
        'En skatt kun for de rikeste',
        'En skatt paa trapper',
      ],
      explanation: 'Trinnsskatten er progressiv og oker trinnvis med inntekten, fra 1,7% paa laveste trinn til 16,6% paa hoyeste.',
    },
    {
      question: 'Hvilket argument brukes FOR hoye skatter?',
      options: [
        'Finansierer gode fellesgoder og skaper likhet',
        'Stimulerer arbeidsvilje',
        'Gir mer penger til den enkelte',
        'Oker konkurransen med andre land',
      ],
      explanation: 'Argumenter for hoye skatter er at de finansierer gode fellesgoder, omfordeler og skaper likhet i samfunnet.',
    },
    {
      question: 'Hvilket argument brukes MOT hoye skatter?',
      options: [
        'Kan hemme arbeidsvilje og innovasjon',
        'Gir for mye likhet',
        'Finansierer for mange offentlige tjenester',
        'Gjor landet for trygt',
      ],
      explanation: 'Argumenter mot hoye skatter er at de kan hemme arbeidsvilje og innovasjon, og at privat sektor kan vaere mer effektiv.',
    },
    {
      question: 'Hva er arbeidsgiveravgift?',
      options: [
        'En avgift arbeidsgivere betaler basert paa ansattes lonn',
        'En avgift arbeidstakere betaler',
        'En avgift for aa starte bedrift',
        'En avgift for aa ansette utlendinger',
      ],
      explanation: 'Arbeidsgiveravgift er en avgift arbeidsgivere betaler til staten, beregnet som en prosent av de ansattes lonn (ca. 14,1%).',
    },
  ],

  'samfunnskunnskap-8-3': [
    {
      question: 'Hva er statsbudsjettet?',
      options: [
        'Statens okonomiske plan for det kommende aaret',
        'En oversikt over private investeringer',
        'Kommunenes budsjett',
        'Oljefondets investeringer',
      ],
      explanation: 'Statsbudsjettet er statens okonomiske plan som viser hvordan staten planlegger aa bruke og skaffe penger det kommende aaret.',
    },
    {
      question: 'Naar legger regjeringen frem statsbudsjettet?',
      options: [
        'I oktober',
        'I januar',
        'I juni',
        'I desember',
      ],
      explanation: 'Regjeringen legger frem forslag til statsbudsjett i oktober hvert aar.',
    },
    {
      question: 'Hvem vedtar statsbudsjettet?',
      options: [
        'Stortinget',
        'Regjeringen',
        'Kongen',
        'Finansministeren',
      ],
      explanation: 'Stortinget behandler og vedtar statsbudsjettet, vanligvis for jul.',
    },
    {
      question: 'Hva er den storste utgiftsposten i statsbudsjettet?',
      options: [
        'Folketrygden (pensjon og trygd)',
        'Forsvar',
        'Kultur',
        'Bistand',
      ],
      explanation: 'Folketrygden er den storste utgiftsposten med ca. 550 milliarder kroner, som dekker pensjoner og trygder.',
    },
    {
      question: 'Hva er revidert budsjett?',
      options: [
        'En justering av statsbudsjettet som legges frem i mai',
        'Det forste budsjettforslaget',
        'Kommunenes budsjett',
        'Oljefondets aarsrapport',
      ],
      explanation: 'Revidert budsjett legges frem i mai og justerer statsbudsjettet for endringer som har skjedd siden hosten.',
    },
    {
      question: 'Hvor stor andel av statens inntekter kommer fra skatter og avgifter?',
      options: [
        'Ca. 80%',
        'Ca. 50%',
        'Ca. 20%',
        'Ca. 95%',
      ],
      explanation: 'Skatter og avgifter utgjor ca. 80% av statens inntekter.',
    },
    {
      question: 'Hva er bundne utgifter?',
      options: [
        'Utgifter som er vanskelige aa kutte, som pensjoner og trygder',
        'Utgifter til bistand',
        'Utgifter til kultur',
        'Utgifter som kan prioriteres fritt',
      ],
      explanation: 'Bundne utgifter er rettighetsbaserte utgifter som pensjoner og trygder, som er vanskelige aa kutte politisk.',
    },
    {
      question: 'Hva er handlingsregelen?',
      options: [
        'At vi kun bruker forventet realavkastning (3%) fra Oljefondet',
        'At vi bruker hele Oljefondet hvert aar',
        'At vi ikke far bruke oljepenger',
        'At regjeringen bestemmer alt alene',
      ],
      explanation: 'Handlingsregelen sier at vi kun skal bruke forventet realavkastning fra Oljefondet (3%) i statsbudsjettet.',
    },
    {
      question: 'Hvilken komite behandler helheten i statsbudsjettet?',
      options: [
        'Finanskomiteen',
        'Helsekomiteen',
        'Utenrikskomiteen',
        'Forsvarskomiteen',
      ],
      explanation: 'Finanskomiteen behandler helheten i statsbudsjettet, mens fagkomiteene behandler sine omraader.',
    },
    {
      question: 'Omtrent hvor stort er statsbudsjettet totalt?',
      options: [
        'Ca. 1 800 milliarder kroner',
        'Ca. 100 milliarder kroner',
        'Ca. 500 milliarder kroner',
        'Ca. 5 000 milliarder kroner',
      ],
      explanation: 'Statsbudsjettet er paa ca. 1 800 milliarder kroner (2024-tall).',
    },
  ],

  'samfunnskunnskap-8-4': [
    {
      question: 'Naar ble NAV opprettet?',
      options: [
        '2006',
        '1990',
        '1967',
        '2015',
      ],
      explanation: 'NAV ble opprettet i 2006 ved aa slaa sammen Aetat, trygdeetaten og sosialtjenesten.',
    },
    {
      question: 'Hvilke etater ble slaatt sammen til NAV?',
      options: [
        'Aetat, trygdeetaten og sosialtjenesten',
        'Skatteetaten og politiet',
        'Helsevesenet og skolen',
        'Forsvaret og tollvesenet',
      ],
      explanation: 'NAV ble dannet ved aa slaa sammen Aetat (arbeidsformidling), trygdeetaten og kommunenes sosialtjeneste.',
    },
    {
      question: 'Hvor lenge kan man faa sykepenger?',
      options: [
        'Inntil ett aar',
        'Inntil tre maaneder',
        'Inntil fem aar',
        'Ubegrenset',
      ],
      explanation: 'Man kan faa sykepenger i inntil ett aar (52 uker) ved sykdom.',
    },
    {
      question: 'Hvor mye av lonnen far man i sykepenger?',
      options: [
        '100% av lonn opp til 6G',
        '50% av lonn',
        '80% av lonn',
        '62% av lonn',
      ],
      explanation: 'Sykepenger gir 100% av lonnen opp til 6G (grunnbelopet i folketrygden ganget med 6).',
    },
    {
      question: 'Hva er dagpenger?',
      options: [
        'Ytelse ved arbeidsledighet',
        'Ytelse ved sykdom',
        'Ytelse ved fodsel',
        'Ytelse ved pensjon',
      ],
      explanation: 'Dagpenger er en ytelse man kan faa ved arbeidsledighet, forutsatt at man er aktiv arbeidsoker.',
    },
    {
      question: 'Hva er arbeidsavklaringspenger (AAP)?',
      options: [
        'Ytelse under avklaring av arbeidsevne ved sykdom eller skade',
        'Ytelse ved arbeidsledighet',
        'Ytelse ved pensjonering',
        'Ytelse ved fodsel',
      ],
      explanation: 'AAP gis under avklaring av arbeidsevne ved sykdom eller skade, mens man deltar i tiltak.',
    },
    {
      question: 'Hvor mye av tidligere inntekt gir uforetrygd?',
      options: [
        '66%',
        '100%',
        '50%',
        '80%',
      ],
      explanation: 'Uforetrygd gir 66% av tidligere inntekt ved varig nedsatt arbeidsevne.',
    },
    {
      question: 'Fra hvilken alder kan man ta ut alderspensjon fleksibelt?',
      options: [
        '62 aar',
        '67 aar',
        '70 aar',
        '60 aar',
      ],
      explanation: 'Man kan ta ut alderspensjon fleksibelt fra 62 aar, men normal pensjonsalder er 67 aar.',
    },
    {
      question: 'Hvem betaler sykepenger de forste 16 dagene?',
      options: [
        'Arbeidsgiver',
        'NAV',
        'Staten',
        'Den syke selv',
      ],
      explanation: 'Arbeidsgiver betaler sykepenger de forste 16 dagene (arbeidsgiverperioden), deretter overtar NAV.',
    },
    {
      question: 'Hva kreves for aa faa dagpenger?',
      options: [
        'Man maa vaere aktiv arbeidsoker',
        'Man maa vaere syk',
        'Man maa vaere pensjonist',
        'Man maa vaere student',
      ],
      explanation: 'For aa faa dagpenger maa man vaere aktiv arbeidsoker og tilgjengelig for arbeidsmarkedet.',
    },
  ],

  'samfunnskunnskap-8-5': [
    {
      question: 'Hva er Oljefondets offisielle navn?',
      options: [
        'Statens pensjonsfond utland',
        'Norges investeringsfond',
        'Statens sparefond',
        'Petroleumsfondet',
      ],
      explanation: 'Det offisielle navnet er Statens pensjonsfond utland, men det kalles ofte Oljefondet.',
    },
    {
      question: 'Omtrent hvor stort er Oljefondet?',
      options: [
        'Over 15 000 milliarder kroner',
        'Ca. 1 000 milliarder kroner',
        'Ca. 100 milliarder kroner',
        'Ca. 50 000 milliarder kroner',
      ],
      explanation: 'Oljefondet er verdens storste statlige fond med over 15 000 milliarder kroner.',
    },
    {
      question: 'Hvem forvalter Oljefondet?',
      options: [
        'Norges Bank Investment Management (NBIM)',
        'Finansdepartementet',
        'Stortinget',
        'En privat bank',
      ],
      explanation: 'NBIM (Norges Bank Investment Management) forvalter fondet paa vegne av staten.',
    },
    {
      question: 'Hvordan er Oljefondet investert?',
      options: [
        'Ca. 70% aksjer, 27% obligasjoner, 3% eiendom',
        'Kun i aksjer',
        'Kun i obligasjoner',
        'Kun i norske selskaper',
      ],
      explanation: 'Fondet er investert med ca. 70% i aksjer, 27% i obligasjoner og 3% i eiendom, spredt globalt.',
    },
    {
      question: 'Hva er formalet med Oljefondet?',
      options: [
        'Sikre langsiktig forvaltning av petroleumsinntektene for fremtidige generasjoner',
        'Gjore nordmenn rike naa',
        'Finansiere kun pensjoner',
        'Investere kun i Norge',
      ],
      explanation: 'Formalet er aa sikre langsiktig forvaltning av petroleumsinntektene og ivareta fremtidige generasjoners interesser.',
    },
    {
      question: 'Hva er "hollandsk syke"?',
      options: [
        'Overoppheting av okonomien paa grunn av for rask bruk av naturressursinntekter',
        'En smittsom sykdom',
        'En type tulipanfeber',
        'Okonomisk krise i Nederland',
      ],
      explanation: 'Hollandsk syke er overoppheting av okonomien som kan skje hvis man bruker naturressursinntekter for raskt.',
    },
    {
      question: 'I hvor mange land er Oljefondet investert?',
      options: [
        'Over 70 land',
        'Kun i Norge',
        'Ca. 10 land',
        'Kun i Europa',
      ],
      explanation: 'Oljefondet er investert i over 70 land og eier ca. 1,5% av verdens borsnoterte selskaper.',
    },
    {
      question: 'Hva gjor Etikkraadet?',
      options: [
        'Gir anbefalinger om utelukkelse av selskaper som bryter etiske retningslinjer',
        'Bestemmer hvor mye som skal investeres',
        'Forvalter fondet',
        'Setter renten',
      ],
      explanation: 'Etikkraadet gir anbefalinger om aa utelukke selskaper som bryter fondets etiske retningslinjer.',
    },
    {
      question: 'Hvilke selskaper kan utelukkes fra Oljefondet?',
      options: [
        'Selskaper som produserer visse vaapen, alvorlig miljoskade eller menneskerettighetsbrudd',
        'Alle utenlandske selskaper',
        'Kun amerikanske selskaper',
        'Ingen selskaper kan utelukkes',
      ],
      explanation: 'Selskaper kan utelukkes for produksjon av visse vaapen, alvorlig miljoskade, menneskerettighetsbrudd eller korrupsjon.',
    },
    {
      question: 'Hvor mye av Oljefondet kan brukes aarlig ifolge handlingsregelen?',
      options: [
        'Forventet realavkastning paa 3%',
        '10% av fondet',
        'Hele avkastningen',
        'Ingenting',
      ],
      explanation: 'Handlingsregelen sier at vi kan bruke forventet realavkastning paa 3% av fondet i statsbudsjettet.',
    },
  ],

  'samfunnskunnskap-8-6': [
    {
      question: 'Hva er Gini-koeffisienten?',
      options: [
        'Et maal paa okonomisk ulikhet fra 0 (full likhet) til 1 (en person har alt)',
        'Et maal paa befolkningsvekst',
        'Et maal paa arbeidsloshet',
        'Et maal paa inflasjon',
      ],
      explanation: 'Gini-koeffisienten maaler ulikhet paa en skala fra 0 (fullstendig likhet) til 1 (en person har alt).',
    },
    {
      question: 'Hva er Norges Gini-koeffisient omtrent?',
      options: [
        'Ca. 0,27 (relativt lavt)',
        'Ca. 0,60 (hoyt)',
        'Ca. 0,10 (veldig lavt)',
        'Ca. 0,80 (veldig hoyt)',
      ],
      explanation: 'Norge har en Gini-koeffisient paa ca. 0,27, som er relativt lavt i internasjonal sammenheng.',
    },
    {
      question: 'Hva er relativ fattigdom?',
      options: [
        'Inntekt under 60% av medianinntekten',
        'Aa ikke ha raad til mat',
        'Aa vaere hjemlos',
        'Inntekt under 10% av gjennomsnittet',
      ],
      explanation: 'Relativ fattigdom defineres som inntekt under 60% av medianinntekten i samfunnet.',
    },
    {
      question: 'Hvilke grupper er mest utsatt for fattigdom i Norge?',
      options: [
        'Enslige forsorgere, innvandrerfamilier og personer utenfor arbeidslivet',
        'Hoytlonnede og akademikere',
        'Politikere og ledere',
        'Pensjonister med god pensjon',
      ],
      explanation: 'Enslige forsorgere, innvandrerfamilier og personer utenfor arbeidslivet er mest utsatt for fattigdom.',
    },
    {
      question: 'Hva er konsekvenser av fattigdom?',
      options: [
        'Daarligere helse, lavere utdanning og sosial ekskludering',
        'Bedre helse',
        'Hoyere utdanning',
        'Storre sosial inkludering',
      ],
      explanation: 'Fattigdom kan fore til daarligere helse, lavere utdanning, sosial ekskludering og kan overfores til neste generasjon.',
    },
    {
      question: 'Hvordan omfordeler staten ressurser?',
      options: [
        'Gjennom progressiv skatt, universelle velferdsordninger og gratis utdanning/helse',
        'Ved aa gi alt til de rikeste',
        'Ved aa ikke samle inn skatt',
        'Ved aa privatisere alt',
      ],
      explanation: 'Staten omfordeler gjennom progressiv skatt, universelle velferdsordninger, behovsprovde stonader og gratis utdanning/helse.',
    },
    {
      question: 'Hva er sosial mobilitet?',
      options: [
        'Muligheten til aa bevege seg oppover eller nedover i det sosiale hierarkiet',
        'Aa flytte til et annet land',
        'Aa bytte jobb',
        'Aa reise mye',
      ],
      explanation: 'Sosial mobilitet handler om muligheten til aa "klatre" i samfunnet - bevege seg oppover eller nedover sosialt og okonomisk.',
    },
    {
      question: 'Hva er formueulikhet sammenlignet med inntektsulikhet i Norge?',
      options: [
        'Formueulikhet er storre enn inntektsulikhet',
        'Formueulikhet er mindre enn inntektsulikhet',
        'De er like store',
        'Det finnes ikke formueulikhet i Norge',
      ],
      explanation: 'Formueulikhet er storre enn inntektsulikhet i Norge - formue er mer ujevnt fordelt enn inntekt.',
    },
    {
      question: 'Hvor stor andel av befolkningen lever i relativ fattigdom i Norge?',
      options: [
        'Ca. 10-12%',
        'Ca. 1-2%',
        'Ca. 30-40%',
        'Ca. 50%',
      ],
      explanation: 'Ca. 10-12% av befolkningen lever i relativ fattigdom (under 60% av medianinntekten).',
    },
  ],

  'samfunnskunnskap-8-7': [
    {
      question: 'Hvilke tre hovedtyper av velferdsstater skiller forskere mellom?',
      options: [
        'Sosialdemokratisk (nordisk), konservativ (europeisk) og liberal (angloamerikansk)',
        'Kommunistisk, kapitalistisk og sosialistisk',
        'Stor, middels og liten',
        'Gammel, moderne og fremtidig',
      ],
      explanation: 'Forskere skiller mellom tre hovedmodeller: sosialdemokratisk (nordisk), konservativ (kontinentaleuropeisk) og liberal (angloamerikansk).',
    },
    {
      question: 'Hvilke land har den nordiske velferdsmodellen?',
      options: [
        'Norge, Sverige, Danmark, Finland og Island',
        'USA, Storbritannia og Australia',
        'Tyskland, Frankrike og Italia',
        'Kina, Japan og Sor-Korea',
      ],
      explanation: 'Den nordiske modellen finnes i Norge, Sverige, Danmark, Finland og Island.',
    },
    {
      question: 'Hva kjennetegner den liberale velferdsmodellen?',
      options: [
        'Begrenset offentlig velferd, behovsprøving, marked og privat forsikring',
        'Universelle ordninger og hoye skatter',
        'Omfattende offentlig sektor',
        'Sterk omfordeling',
      ],
      explanation: 'Den liberale modellen har begrenset offentlig velferd, behovsprovde ordninger, lavt skattenivaa og vekt paa privat forsikring.',
    },
    {
      question: 'Hvilke land har den liberale velferdsmodellen?',
      options: [
        'USA, Storbritannia og Australia',
        'Norge, Sverige og Danmark',
        'Tyskland, Frankrike og Italia',
        'Kina og Russland',
      ],
      explanation: 'Den liberale modellen finnes i USA, Storbritannia og Australia.',
    },
    {
      question: 'Hva kjennetegner den konservative (kontinentaleuropeiske) modellen?',
      options: [
        'Ordninger knyttet til arbeidsdeltakelse, familie som viktig enhet, forsikringsbasert',
        'Universelle ordninger for alle',
        'Ingen offentlig velferd',
        'Kun private losnninger',
      ],
      explanation: 'Den konservative modellen har ordninger knyttet til arbeidsdeltakelse, familien som viktig enhet og forsikringsbaserte ordninger.',
    },
    {
      question: 'Hvilke land har den konservative velferdsmodellen?',
      options: [
        'Tyskland, Frankrike og Italia',
        'Norge, Sverige og Danmark',
        'USA og Storbritannia',
        'Kina og Japan',
      ],
      explanation: 'Den konservative modellen finnes i Tyskland, Frankrike og Italia.',
    },
    {
      question: 'Hva er trepartssamarbeid?',
      options: [
        'Samarbeid mellom stat, arbeidsgivere og fagbevegelse',
        'Samarbeid mellom tre politiske partier',
        'Samarbeid mellom tre land',
        'Samarbeid mellom tre bedrifter',
      ],
      explanation: 'Trepartssamarbeid er samarbeid mellom stat, arbeidsgivere og fagbevegelse - et saertrekk ved den nordiske modellen.',
    },
    {
      question: 'Hva gir den nordiske modellen sammenlignet med den liberale?',
      options: [
        'Mer likhet, men hoyere skatter',
        'Mer valgfrihet og lavere skatter',
        'Mindre offentlig velferd',
        'Storre ulikhet',
      ],
      explanation: 'Den nordiske modellen gir mer likhet og trygghet, men krever hoyere skatter. Den liberale gir mer valgfrihet men storre ulikhet.',
    },
  ],

  'samfunnskunnskap-8-8': [
    {
      question: 'Hva er eldrebolgen?',
      options: [
        'Okning i andelen eldre naar store etterkrigskull pensjoneres',
        'En bolge av eldre som flytter til kysten',
        'En ny pensjonistbevegelse',
        'Et TV-program for eldre',
      ],
      explanation: 'Eldrebolgen er okningen i andelen eldre i befolkningen naar de store etterkrigskullene pensjoneres.',
    },
    {
      question: 'Hvordan endres forsorgelsebyrden frem mot 2050?',
      options: [
        'Fra 5 yrkesaktive per pensjonist (1970) til ca. 2,5 (2050)',
        'Fra 2 til 10 yrkesaktive per pensjonist',
        'Den forblir uendret',
        'Fra 10 til 20 yrkesaktive per pensjonist',
      ],
      explanation: 'Forsorgelsebyrden endres dramatisk: fra 5 yrkesaktive per pensjonist i 1970 til ca. 2,5 i 2050.',
    },
    {
      question: 'Hvorfor er eldrebolgen en utfordring for velferdsstaten?',
      options: [
        'Flere pensjonister, faerre skattebetalere, okte utgifter til helse/omsorg',
        'De eldre jobber for mye',
        'De eldre betaler for mye skatt',
        'Det blir for faa pensjonister',
      ],
      explanation: 'Eldrebolgen gir flere pensjonister, faerre i arbeid, okte utgifter til helse og omsorg, og faerre skattebetalere per pensjonist.',
    },
    {
      question: 'Hva er utenforskap?',
      options: [
        'At mange staar utenfor arbeidslivet og utdanning',
        'Aa bo utenfor byene',
        'Aa vaere utenlandsk',
        'Aa jobbe utendors',
      ],
      explanation: 'Utenforskap betyr at mange staar utenfor arbeidslivet, ofte paa grunn av helseutfordringer eller manglende kvalifikasjoner.',
    },
    {
      question: 'Hvilken losning paa velferdsutfordringene innebærer aa jobbe lenger?',
      options: [
        'Oke pensjonsalderen',
        'Privatisere helsevesenet',
        'Kutte i utdanning',
        'Stenge grensene',
      ],
      explanation: 'Aa oke pensjonsalderen er en losning som gjor at folk jobber og betaler skatt lenger for de blir pensjonister.',
    },
    {
      question: 'Hvordan kan innvandring baade vaere en mulighet og utfordring for velferdsstaten?',
      options: [
        'Kan bidra med arbeidskraft, men ogsaa gi utgifter til integrering',
        'Kun en utfordring',
        'Kun en mulighet',
        'Har ingen betydning',
      ],
      explanation: 'Innvandring kan bidra med novendig arbeidskraft, men gir ogsaa utgifter til integrering. Suksess avhenger av sysselsetting.',
    },
    {
      question: 'Hva menes med at petroleumsinntektene vil avta?',
      options: [
        'Olje og gass tar slutt, maa sikre baerekraft uten oljeinntekter',
        'Vi finner mer olje',
        'Oljeprisen vil alltid oke',
        'Vi slutter aa bruke olje frivillig',
      ],
      explanation: 'Olje- og gassressursene er begrensede og vil ta slutt. Vi maa sikre velferdsstatens baerekraft uten aa stole paa oljeinntekter.',
    },
    {
      question: 'Hva er en mulig teknologisk losning paa velferdsutfordringene?',
      options: [
        'Innovasjon og ny teknologi i helse- og omsorgstjenester',
        'Fjerne all teknologi',
        'Kun bruke gammel teknologi',
        'Stoppe all forskning',
      ],
      explanation: 'Teknologi og innovasjon kan effektivisere offentlig sektor og gi bedre tjenester med mindre ressurser.',
    },
    {
      question: 'Hva er skattekonkurranse mellom land?',
      options: [
        'At land konkurrerer om aa ha lave skatter for aa tiltrekke bedrifter',
        'At land konkurrerer om aa ha hoyest skatt',
        'At innbyggere konkurrerer om aa betale mest skatt',
        'At kommuner konkurrerer om flest innbyggere',
      ],
      explanation: 'Skattekonkurranse betyr at land konkurrerer om aa ha lave skatter for aa tiltrekke bedrifter og investeringer, noe som kan true velferdsfinansieringen.',
    },
    {
      question: 'Hvilke grupper er spesielt utsatt for utenforskap?',
      options: [
        'Unge utenfor utdanning og arbeid, personer med helseutfordringer',
        'Hoytutdannede med god jobb',
        'Pensjonister med god pensjon',
        'Politikere og ledere',
      ],
      explanation: 'Unge utenfor utdanning og arbeid (NEET) og personer med helseutfordringer og uforhet er spesielt utsatt for utenforskap.',
    },
  ],

  // Chapters 9.1-9.8
// ============================================================================
  // Kapittel 9.1: Hva er baerekraftig utvikling?
  // ============================================================================
  'samfunnskunnskap-9-1': [
    {
      question: 'Hva er baerekraftig utvikling?',
      options: [
        'Utvikling som dekker dagens behov uten aa odelegge fremtidige generasjoners muligheter',
        'Okonomisk vekst som prioriterer fortjeneste',
        'Utvikling som kun fokuserer paa miljoet',
        'Teknologisk utvikling uten hensyn til natur',
      ],
      explanation: 'Baerekraftig utvikling ble definert i Brundtland-rapporten (1987) som utvikling som dekker dagens behov uten aa odelegge fremtidige generasjoners muligheter til aa dekke sine behov.',
    },
    {
      question: 'I hvilken rapport ble begrepet baerekraftig utvikling definert?',
      options: [
        'Brundtland-rapporten fra 1987',
        'FN-rapporten fra 2015',
        'Parisavtalen fra 2015',
        'Kyotoprotokollen fra 1997',
      ],
      explanation: 'Begrepet baerekraftig utvikling ble definert i Brundtland-rapporten "Vaar felles fremtid" fra 1987, ledet av Gro Harlem Brundtland.',
    },
    {
      question: 'Hva er de tre dimensjonene av baerekraftig utvikling?',
      options: [
        'Okologisk, sosial og okonomisk baerekraft',
        'Politisk, kulturell og teknologisk baerekraft',
        'Lokal, nasjonal og global baerekraft',
        'Kort, mellom og lang sikt baerekraft',
      ],
      explanation: 'De tre dimensjonene er okologisk baerekraft (bevare natur), sosial baerekraft (rettferdighet og velferd) og okonomisk baerekraft (vekst uten miljoeskade).',
    },
    {
      question: 'Hva innebarer okologisk baerekraft?',
      options: [
        'Aa bevare naturressurser og okosystemer',
        'Aa oke okonomisk vekst',
        'Aa sikre god utdanning for alle',
        'Aa redusere arbeidsledighet',
      ],
      explanation: 'Okologisk baerekraft handler om aa bevare naturressurser og okosystemer slik at de kan fortsette aa levere tjenester til fremtidige generasjoner.',
    },
    {
      question: 'Hva innebarer sosial baerekraft?',
      options: [
        'Aa sikre rettferdighet, helse og utdanning for alle',
        'Aa oke forbruket av varer',
        'Aa bevare truede dyrearter',
        'Aa utvikle ny teknologi',
      ],
      explanation: 'Sosial baerekraft handler om aa sikre rettferdighet, helse, utdanning og grunnleggende behov for alle mennesker.',
    },
    {
      question: 'Hva innebarer okonomisk baerekraft?',
      options: [
        'Okonomisk vekst som ikke odelegger miljo eller skaper ulikhet',
        'Maksimal profitt uten hensyn til konsekvenser',
        'Aa stoppe all okonomisk aktivitet',
        'Aa prioritere rike lands interesser',
      ],
      explanation: 'Okonomisk baerekraft innebarer at okonomisk utvikling maa skje paa en maate som ikke odelegger miljoet eller skaper store sosiale ulikheter.',
    },
    {
      question: 'Hvorfor maa de tre dimensjonene av baerekraft balanseres?',
      options: [
        'Fordi de pavirker hverandre og alle maa ivaretas for en baerekraftig utvikling',
        'Fordi FN krever det',
        'Fordi det er billigst',
        'Fordi det er enklest aa maale',
      ],
      explanation: 'De tre dimensjonene henger sammen - man kan ikke ha langsiktig okonomisk vekst uten aa ta vare paa miljoet og menneskene. Alle tre maa balanseres.',
    },
    {
      question: 'Hvem ledet arbeidet med Brundtland-rapporten?',
      options: [
        'Gro Harlem Brundtland',
        'Ban Ki-moon',
        'Kofi Annan',
        'Jens Stoltenberg',
      ],
      explanation: 'Gro Harlem Brundtland, tidligere norsk statsminister, ledet FN-kommisjonen som utarbeidet rapporten "Vaar felles fremtid" i 1987.',
    },
  ],

  // ============================================================================
  // Kapittel 9.2: FNs baerekraftsmal
  // ============================================================================
  'samfunnskunnskap-9-2': [
    {
      question: 'Naar vedtok FN de 17 baerekraftsmaalene?',
      options: [
        'I 2015',
        'I 1987',
        'I 2000',
        'I 2020',
      ],
      explanation: 'FN vedtok de 17 baerekraftsmaalene (Sustainable Development Goals - SDG) i 2015, og de skal naas innen 2030.',
    },
    {
      question: 'Hvor mange baerekraftsmaal har FN vedtatt?',
      options: [
        '17 maal',
        '10 maal',
        '15 maal',
        '20 maal',
      ],
      explanation: 'FN har vedtatt 17 baerekraftsmaal som omfatter fattigdom, helse, utdanning, klima, fred og mye mer.',
    },
    {
      question: 'Naar skal FNs baerekraftsmaal vaere naad?',
      options: [
        'Innen 2030',
        'Innen 2025',
        'Innen 2050',
        'Innen 2040',
      ],
      explanation: 'FNs baerekraftsmaal skal naas innen 2030, og kalles derfor ofte "Agenda 2030".',
    },
    {
      question: 'Hva erstattet FNs baerekraftsmaal?',
      options: [
        'Tusenaarsmaalene',
        'Brundtland-rapporten',
        'Parisavtalen',
        'Kyotoprotokollen',
      ],
      explanation: 'Baerekraftsmaalene erstattet Tusenaarsmaalene (Millennium Development Goals) som gjaldt fra 2000 til 2015.',
    },
    {
      question: 'Hvilket av disse er et av FNs baerekraftsmaal?',
      options: [
        'Utrydde fattigdom',
        'Oke forbruket',
        'Redusere befolkningen',
        'Stoppe all industri',
      ],
      explanation: 'Maal 1 er aa utrydde fattigdom. Andre maal inkluderer god helse, utdanning, likestilling, rent vann og stoppe klimaendringene.',
    },
    {
      question: 'Hvilke land gjelder FNs baerekraftsmaal for?',
      options: [
        'Alle land i verden',
        'Kun fattige land',
        'Kun EU-land',
        'Kun FN-medlemmer',
      ],
      explanation: 'FNs baerekraftsmaal gjelder for alle land i verden, baade rike og fattige. Alle maa bidra til aa naa maalene.',
    },
    {
      question: 'Hvilket maal handler om aa stoppe klimaendringene?',
      options: [
        'Maal 13',
        'Maal 1',
        'Maal 5',
        'Maal 17',
      ],
      explanation: 'Maal 13 er "Stoppe klimaendringene" - aa handle umiddelbart for aa bekjempe klimaendringene og konsekvensene av dem.',
    },
    {
      question: 'Hva er forkortelsen for FNs baerekraftsmaal paa engelsk?',
      options: [
        'SDG (Sustainable Development Goals)',
        'MDG (Millennium Development Goals)',
        'UNG (United Nations Goals)',
        'GDG (Global Development Goals)',
      ],
      explanation: 'SDG staar for Sustainable Development Goals, som er det engelske navnet paa FNs baerekraftsmaal.',
    },
    {
      question: 'Hvilket maal handler om likestilling mellom kjonnene?',
      options: [
        'Maal 5',
        'Maal 1',
        'Maal 10',
        'Maal 16',
      ],
      explanation: 'Maal 5 handler om likestilling mellom kjonnene - aa oppnaa likestilling og styrke jenters og kvinners stilling.',
    },
    {
      question: 'Hvorfor henger baerekraftsmaalene sammen?',
      options: [
        'Fordi fremgang paa ett maal pavirker andre maal',
        'Fordi FN bestemte det',
        'Fordi de har samme farge',
        'Fordi de ble vedtatt samtidig',
      ],
      explanation: 'Maalene henger sammen fordi f.eks. god utdanning (maal 4) bidrar til mindre fattigdom (maal 1) og bedre helse (maal 3). Fremgang paa ett maal styrker andre.',
    },
  ],

  // ============================================================================
  // Kapittel 9.3: Klimaendringer
  // ============================================================================
  'samfunnskunnskap-9-3': [
    {
      question: 'Hva er hovedaarsaken til menneskeskapte klimaendringer?',
      options: [
        'Utslipp av klimagasser fra fossile brensler',
        'Naturlige variasjoner i klima',
        'Solaktivitet',
        'Vulkanutbrudd',
      ],
      explanation: 'Menneskeskapte klimaendringer skyldes hovedsakelig utslipp av klimagasser, saerlig CO2, fra forbrenning av fossile brensler som kull, olje og gass.',
    },
    {
      question: 'Hvilken klimagass er viktigst for menneskeskapt global oppvarming?',
      options: [
        'CO2 (karbondioksid)',
        'Oksygen',
        'Nitrogen',
        'Hydrogen',
      ],
      explanation: 'CO2 (karbondioksid) er den viktigste klimagassen for menneskeskapt global oppvarming, hovedsakelig fra fossile brensler.',
    },
    {
      question: 'Omtrent hvor mye har den globale temperaturen allerede okt?',
      options: [
        'Over 1 grad Celsius',
        'Under 0,5 grad Celsius',
        'Over 3 grader Celsius',
        'Den har ikke okt',
      ],
      explanation: 'Den globale gjennomsnittstemperaturen har allerede okt med over 1 grad Celsius sammenlignet med forindustriell tid.',
    },
    {
      question: 'Hvilken konsekvens har klimaendringer for havnivaet?',
      options: [
        'Havnivaet stiger og truer kystsamfunn',
        'Havnivaet synker',
        'Havnivaet er uendret',
        'Havnivaet varierer tilfeldig',
      ],
      explanation: 'Klimaendringer forer til at isbreer og innlandsis smelter, og havet utvider seg naar det varmes opp. Dette gir havnivaastigning som truer kystsamfunn.',
    },
    {
      question: 'Hva skjer med Arktis som folge av klimaendringene?',
      options: [
        'Isen smelter i stadig storre tempo',
        'Isen oker',
        'Isen er uendret',
        'Arktis blir kaldere',
      ],
      explanation: 'Arktis varmes opp raskere enn resten av verden, og sjois og isbreer smelter i stadig storre tempo.',
    },
    {
      question: 'Hvordan pavirker klimaendringer ekstremvaer?',
      options: [
        'Det blir flere og kraftigere ekstremvaerperioder',
        'Det blir faerre ekstremvaerperioder',
        'Ekstremvaer pavirkes ikke',
        'Vaeret blir mer stabilt',
      ],
      explanation: 'Klimaendringer forer til flere og kraftigere ekstremvaerperioder som hetebolgener, flommer, torke og stormer.',
    },
    {
      question: 'Hvordan pavirker klimaendringer biologisk mangfold?',
      options: [
        'Arter dor ut og okosystemer endres',
        'Flere arter oppstaar',
        'Ingen effekt paa arter',
        'Alle arter tilpasser seg',
      ],
      explanation: 'Klimaendringer endrer leveomraader saa raskt at mange arter ikke rekker aa tilpasse seg. Dette forer til utryddelse og endrede okosystemer.',
    },
    {
      question: 'Hva bidrar til klimaendringer i tillegg til fossile brensler?',
      options: [
        'Avskoging',
        'Planting av traar',
        'Solenergi',
        'Vindkraft',
      ],
      explanation: 'Avskoging bidrar til klimaendringer fordi traar tar opp CO2. Naar skog hogges, frigjores karbon og mindre CO2 absorberes.',
    },
  ],

  // ============================================================================
  // Kapittel 9.4: Norsk klimapolitikk
  // ============================================================================
  'samfunnskunnskap-9-4': [
    {
      question: 'Hva er Norges klimamaal for 2030?',
      options: [
        'Kutte utslipp med 55% sammenlignet med 1990',
        'Kutte utslipp med 20%',
        'Kutte utslipp med 80%',
        'Ingen utslippskutt',
      ],
      explanation: 'Norge har forpliktet seg til aa kutte klimagassutslipp med minst 55% innen 2030 sammenlignet med 1990-nivaa.',
    },
    {
      question: 'Naar skal Norge vaere klimanoytral?',
      options: [
        'Innen 2050',
        'Innen 2030',
        'Innen 2040',
        'Innen 2060',
      ],
      explanation: 'Norge har maal om aa vaere klimanoytral innen 2050, noe som betyr at utslippene skal vaere lik null eller kompenseres.',
    },
    {
      question: 'Hva er CO2-avgiften et eksempel paa?',
      options: [
        'Et virkemiddel som gjor utslipp dyrere',
        'En stonad til forurensende bedrifter',
        'En avgift paa fornybar energi',
        'En skatt paa elbiler',
      ],
      explanation: 'CO2-avgiften er et virkemiddel som gjor det dyrere aa slippe ut klimagasser, og dermed gir insentiver til aa redusere utslipp.',
    },
    {
      question: 'Hva er EU ETS?',
      options: [
        'Et kvotehandelssystem for klimagassutslipp',
        'En EU-organisasjon',
        'Et transportselskap',
        'En energitype',
      ],
      explanation: 'EU ETS (Emissions Trading System) er et kvotehandelssystem der bedrifter maa kjope kvoter for aa slippe ut klimagasser.',
    },
    {
      question: 'Hva er Langskip-prosjektet?',
      options: [
        'Et norsk karbonfangst- og lagringsprosjekt',
        'Et skip for transport av olje',
        'Et vindkraftprosjekt',
        'Et fiskeriprosjekt',
      ],
      explanation: 'Langskip er Norges storste klimaprosjekt for karbonfangst og -lagring (CCS), der CO2 fanges fra industri og lagres under havbunnen.',
    },
    {
      question: 'Hva er et dilemma i norsk klimapolitikk?',
      options: [
        'Norge er bade klimaambisios og stor olje- og gasseksporter',
        'Norge har for lite olje',
        'Norge har for mange elbiler',
        'Norge har for mye fornybar energi',
      ],
      explanation: 'Norge har ambisiose klimamaal, men er samtidig en av verdens storste eksportorer av olje og gass, noe som skaper et politisk dilemma.',
    },
    {
      question: 'Hva menes med elektrifisering som klimatiltak?',
      options: [
        'Aa erstatte fossil energi med elektrisitet i transport og industri',
        'Aa oke stromprisene',
        'Aa bygge flere kullkraftverk',
        'Aa redusere stromproduksjonen',
      ],
      explanation: 'Elektrifisering betyr aa erstatte fossil energi med elektrisitet, for eksempel elbiler i stedet for bensinbiler og elektrifisering av oljeplattformer.',
    },
    {
      question: 'Hva er gronn omstilling?',
      options: [
        'Overgang fra fossil til baerekraftig okonomi og teknologi',
        'Aa male bygninger gronne',
        'Aa stoppe all industri',
        'Aa oke oljeproduksjonen',
      ],
      explanation: 'Gronn omstilling er overgangen fra en fossil-basert okonomi til en baerekraftig okonomi med fornybar energi og miljovennlig teknologi.',
    },
  ],

  // ============================================================================
  // Kapittel 9.5: Biologisk mangfold
  // ============================================================================
  'samfunnskunnskap-9-5': [
    {
      question: 'Hva er biologisk mangfold?',
      options: [
        'Variasjonen av arter, okosystemer og genetisk variasjon',
        'Antall dyr i en dyrehage',
        'Kun antall plantearter',
        'Antall mennesker i verden',
      ],
      explanation: 'Biologisk mangfold (biodiversitet) omfatter variasjonen av alle levende organismer, okosystemer og den genetiske variasjonen innen arter.',
    },
    {
      question: 'Hvilken trussel mot biologisk mangfold er storst?',
      options: [
        'Arealendringer og nedbygging av natur',
        'Turisme',
        'Forskning',
        'Naturvern',
      ],
      explanation: 'Arealendringer som nedbygging, intensivt jordbruk og avskoging er den storste trusselen mot biologisk mangfold globalt.',
    },
    {
      question: 'Hva menes med overutnyttelse som trussel mot naturmangfold?',
      options: [
        'At vi hoster mer fra naturen enn den kan fornye',
        'At vi bruker naturen for lite',
        'At vi verner for mye natur',
        'At vi forsker for mye',
      ],
      explanation: 'Overutnyttelse betyr at vi tar ut mer ressurser enn naturen kan fornye, som overfiske eller for intensiv jakt.',
    },
    {
      question: 'Hvordan truer fremmede arter det biologiske mangfoldet?',
      options: [
        'De utkonkurrerer og fortreneger lokale arter',
        'De oker mangfoldet',
        'De har ingen effekt',
        'De hjelper lokale arter',
      ],
      explanation: 'Fremmede arter (invasive arter) som innfores til nye omraader kan utkonkurrere, fortrenege eller ta livet av lokale arter.',
    },
    {
      question: 'Hvorfor er biologisk mangfold viktig for mennesker?',
      options: [
        'Det gir oss mat, medisiner, rent vann og stabile okosystemer',
        'Det er kun viktig for forskere',
        'Det har ingen praktisk betydning',
        'Det er bare estetisk viktig',
      ],
      explanation: 'Biologisk mangfold er livsviktig for mennesker - det gir oss mat, medisiner, rent vann, pollinering av avlinger og stabile okosystemer.',
    },
    {
      question: 'Hvordan pavirker forurensning biologisk mangfold?',
      options: [
        'Giftstoffer og plast skader og dreper arter',
        'Forurensning oker mangfoldet',
        'Forurensning har ingen effekt',
        'Forurensning hjelper arter aa tilpasse seg',
      ],
      explanation: 'Forurensning som plast, giftstoffer og overgjosling skader og dreper arter og odelegger leveomraader.',
    },
    {
      question: 'Hvordan bidrar klimaendringer til tap av biologisk mangfold?',
      options: [
        'Leveomraader endres raskere enn arter kan tilpasse seg',
        'Klimaendringer oker mangfoldet',
        'Arter liker varmere klima',
        'Klimaendringer pavirker ikke arter',
      ],
      explanation: 'Klimaendringer endrer leveomraader saa raskt at mange arter ikke rekker aa tilpasse seg eller flytte, noe som forer til utryddelse.',
    },
    {
      question: 'Hva er et okosystem?',
      options: [
        'Et samfunn av levende organismer og deres fysiske miljo',
        'Kun plantene i et omraade',
        'Kun dyrene i et omraade',
        'En type dataprogram',
      ],
      explanation: 'Et okosystem er et samfunn av levende organismer (planter, dyr, mikroorganismer) sammen med det fysiske miljoet de lever i.',
    },
  ],

  // ============================================================================
  // Kapittel 9.6: Forbruk og baerekraft
  // ============================================================================
  'samfunnskunnskap-9-6': [
    {
      question: 'Hvor mange jordkloder ville vi trengt hvis alle levde som nordmenn?',
      options: [
        '3-4 jordkloder',
        '1 jordklode',
        '2 jordkloder',
        '10 jordkloder',
      ],
      explanation: 'Nordmenn har et saa hoyt forbruk at hvis alle i verden levde som oss, ville vi trengt ressursene fra 3-4 jordkloder.',
    },
    {
      question: 'Hva er okologisk fotavtrykk?',
      options: [
        'Et maal paa ressursforbruk uttrykt i areal',
        'Storrelsen paa skoene dine',
        'Hvor mye du gaar',
        'Antall traar du har plantet',
      ],
      explanation: 'Okologisk fotavtrykk maaler hvor mye produktivt land- og havomraade som trengs for aa produsere det vi forbruker og ta opp avfallet vaart.',
    },
    {
      question: 'Hva bidrar mest til nordmenns hoye okologiske fotavtrykk?',
      options: [
        'Kjottforbruk, flyreiser, bilbruk og bolig',
        'Aa lese boker',
        'Aa gaa tur i naturen',
        'Aa spise lokale gronnsaker',
      ],
      explanation: 'Nordmenns hoye okologiske fotavtrykk skyldes hovedsakelig kjottforbruk, flyreiser, bilbruk, klaeforbruk og energibruk i bolig.',
    },
    {
      question: 'Hvorfor er hoyt forbruk et miljoeproblem?',
      options: [
        'Det krever store ressurser og gir avfall og utslipp',
        'Det er bra for miljoet',
        'Det har ingen miljoeffekt',
        'Det reduserer utslipp',
      ],
      explanation: 'Hoyt forbruk krever utvinning av ressurser, produksjon med utslipp, transport og gir avfall - alt med negative miljoekonsekvenser.',
    },
    {
      question: 'Hva menes med baerekraftig forbruk?',
      options: [
        'Aa forbruke paa en maate som ikke odelegger for fremtidige generasjoner',
        'Aa kjope saa mye som mulig',
        'Aa aldri kjope noe',
        'Aa kun kjope dyre ting',
      ],
      explanation: 'Baerekraftig forbruk betyr aa dekke vaare behov uten aa bruke opp ressurser eller odelegge miljoet for fremtidige generasjoner.',
    },
    {
      question: 'Hvordan kan du redusere ditt okologiske fotavtrykk?',
      options: [
        'Fly mindre, spise mindre kjott, kjope faerre ting',
        'Fly mer og kjope mer',
        'Bruke mer engangsplast',
        'Kjore mer bil',
      ],
      explanation: 'Du kan redusere ditt okologiske fotavtrykk ved aa fly mindre, spise mindre kjott, kjope faerre og mer holdbare ting, og bruke kollektivtransport.',
    },
    {
      question: 'Hva er sirkulaerokonomi?',
      options: [
        'En okonomi der ressurser brukes om igjen i stedet for aa kastes',
        'En okonomi med runde mynter',
        'En okonomi uten penger',
        'En okonomi der alt kastes',
      ],
      explanation: 'Sirkulaerokonomi er et okonomisk system der produkter og materialer brukes saa lenge som mulig gjennom gjenbruk, reparasjon og resirkulering.',
    },
    {
      question: 'Hvilket forbruksomraade har stor klimapavirkning som mange undervurderer?',
      options: [
        'Klaer og tekstiler',
        'Boker',
        'Lokal mat',
        'Sykkelbruk',
      ],
      explanation: 'Klaeindustrien har stor miljoepavirkning gjennom vannforbruk, kjemikalier, transport og avfall. Mange undervurderer klimaeffekten av kleforbruk.',
    },
  ],

  // ============================================================================
  // Kapittel 9.7: Klimarettferdighet
  // ============================================================================
  'samfunnskunnskap-9-7': [
    {
      question: 'Hva menes med klimarettferdighet?',
      options: [
        'At de som har bidratt minst til klimaproblemet ikke skal rammes hardest',
        'At alle land skal ha like utslipp',
        'At alle skal betale like mye i klimaavgift',
        'At klimaendringer er rettferdige',
      ],
      explanation: 'Klimarettferdighet handler om at klimakrisen rammer ulikt - de som har bidratt minst (fattige land) rammes ofte hardest, noe som er urettferdig.',
    },
    {
      question: 'Hvem har historisk sett sluppet ut mest klimagasser?',
      options: [
        'Rike industriland',
        'Fattige utviklingsland',
        'Oystater',
        'Afrikanske land',
      ],
      explanation: 'Rike industriland i Europa og Nord-Amerika har historisk sluppet ut mest klimagasser gjennom industrialisering over mange tiaar.',
    },
    {
      question: 'Hvem rammes hardest av klimaendringene?',
      options: [
        'Fattige land og saarbare befolkninger',
        'Rike land',
        'Oljeeksporterende land',
        'Alle rammes likt',
      ],
      explanation: 'Fattige land og saarbare befolkninger rammes hardest fordi de har faerre ressurser til aa tilpasse seg og beskytte seg mot klimaeffekter.',
    },
    {
      question: 'Hva er generasjonsrettferdighet i klimasammenheng?',
      options: [
        'At dagens unge arver klimaproblemer skapt av tidligere generasjoner',
        'At alle generasjoner forurenser like mye',
        'At eldre skal betale mer klimaavgift',
        'At unge skal forurense mer',
      ],
      explanation: 'Generasjonsrettferdighet handler om at dagens unge og fremtidige generasjoner arver klimaproblemer de ikke har skapt.',
    },
    {
      question: 'Hva menes med historisk ansvar i klimadebatten?',
      options: [
        'At land som har forurenset mye historisk har storre ansvar for aa lose problemet',
        'At vi skal glemme fortiden',
        'At alle land har like ansvar',
        'At historien ikke betyr noe',
      ],
      explanation: 'Historisk ansvar betyr at land som har bidratt mest til klimaproblemet over tid har storre ansvar for aa kutte utslipp og stotte saarbare land.',
    },
    {
      question: 'Hvorfor er klimarettferdighet et nord-sor-sporsmaal?',
      options: [
        'Fordi rike land i nord har forurenset mest, mens fattige land i sor rammes hardest',
        'Fordi det er kaldere i nord',
        'Fordi det er varmere i sor',
        'Fordi alle land er like',
      ],
      explanation: 'Rike land i det globale nord har sluppet ut mest klimagasser historisk, mens fattige land i det globale sor er mest saarbare for klimaeffekter.',
    },
    {
      question: 'Hva krever klimarettferdighet av rike land?',
      options: [
        'Store utslippskutt og okonomisk stotte til saarbare land',
        'Ingen tiltak',
        'Aa oke sine utslipp',
        'Aa ignorere fattige land',
      ],
      explanation: 'Klimarettferdighet krever at rike land tar ledelsen i utslippskutt og gir okonomisk og teknologisk stotte til saarbare land for tilpasning.',
    },
    {
      question: 'Hvorfor engasjerer mange unge seg i klimasaken?',
      options: [
        'Fordi de vil arve konsekvensene av dagens beslutninger',
        'Fordi de har mye fritid',
        'Fordi de ikke forstaar okonomi',
        'Fordi de liker aa demonstrere',
      ],
      explanation: 'Unge engasjerer seg fordi de vil leve med konsekvensene av klimaendringene i mange tiaar fremover. De krever handling naa for sin fremtid.',
    },
  ],

  // ============================================================================
  // Kapittel 9.8: Hva kan du gjore?
  // ============================================================================
  'samfunnskunnskap-9-8': [
    {
      question: 'Paa hvilke maater kan du som individ bidra til baerekraft?',
      options: [
        'Som forbruker, velger og engasjert samfunnsborger',
        'Kun gjennom politikk',
        'Kun gjennom forbruk',
        'Du kan ikke gjore noe som individ',
      ],
      explanation: 'Du kan bidra paa flere maater: gjennom forbruksvalg, som velger ved aa stemme paa klimavennlige partier, og som engasjert samfunnsborger.',
    },
    {
      question: 'Hvordan kan forbruksvalgene dine pavirke miljoet?',
      options: [
        'Ved aa kjope mindre og velge baerekraftige produkter',
        'Ved aa kjope mer av alt',
        'Forbruk pavirker ikke miljoet',
        'Ved aa alltid velge billigst',
      ],
      explanation: 'Dine forbruksvalg pavirker miljoet - aa kjope mindre, velge baerekraftige produkter og unngaa unodvendig forbruk reduserer miljoebelastningen.',
    },
    {
      question: 'Hvorfor er det viktig aa stemme for klimavennlig politikk?',
      options: [
        'Fordi politiske beslutninger har storre effekt enn individuelle valg',
        'Fordi det er morsomt',
        'Fordi individuelle valg ikke betyr noe',
        'Fordi politikere alltid har rett',
      ],
      explanation: 'Politiske beslutninger om lover, avgifter og investeringer har mye storre effekt enn individuelle valg. Aa stemme klimavennlig er derfor viktig.',
    },
    {
      question: 'Hvordan kan du pavirke andre til aa ta klimavennlige valg?',
      options: [
        'Ved aa snakke med familie og venner om klima og baerekraft',
        'Ved aa kritisere alle andre',
        'Ved aa holde meningene dine for deg selv',
        'Ved aa ignorere klimasaken',
      ],
      explanation: 'Ved aa snakke med familie, venner og andre om klimasaken kan du inspirere og pavirke flere til aa ta klimavennlige valg.',
    },
    {
      question: 'Hvilken transportform er mest klimavennlig for korte avstander?',
      options: [
        'Aa gaa eller sykle',
        'Aa kjore bil',
        'Aa ta fly',
        'Aa ta taxi',
      ],
      explanation: 'Aa gaa eller sykle er de mest klimavennlige transportformene for korte avstander - de gir ingen utslipp og er bra for helsen.',
    },
    {
      question: 'Hvorfor er det effektivt aa engasjere seg i organisasjoner?',
      options: [
        'Fordi kollektiv handling har storre gjennomslagskraft',
        'Fordi det er enklere aa vaere alene',
        'Fordi organisasjoner alltid tar feil',
        'Fordi individer har mest makt',
      ],
      explanation: 'Kollektiv handling gjennom organisasjoner, demonstrasjoner og kampanjer har storre gjennomslagskraft enn individuell handling alene.',
    },
    {
      question: 'Hva menes med aa kreve politisk handling for klimaet?',
      options: [
        'Aa bruke demokratiske rettigheter til aa presse politikere til aa handle',
        'Aa ikke bry seg om politikk',
        'Aa bare fokusere paa egen livsstil',
        'Aa gi opp',
      ],
      explanation: 'Aa kreve politisk handling betyr aa bruke stemmerett, demonstrasjoner, horinger og andre demokratiske kanaler for aa presse frem klimapolitikk.',
    },
    {
      question: 'Hvorfor er det viktig med baade individuelle og kollektive tiltak?',
      options: [
        'Fordi individuelle tiltak viser engasjement og kollektive tiltak gir stoerre endring',
        'Fordi bare individuelle tiltak virker',
        'Fordi bare kollektive tiltak virker',
        'Fordi ingen tiltak virker',
      ],
      explanation: 'Individuelle tiltak viser engasjement og pavirker andre, mens kollektive og politiske tiltak trengs for de store systemendringene som kreves.',
    },
  ],

  // Chapters 10-11
'samfunnskunnskap-10-1': [
    {
      question: 'Hva er suverenitet?',
      options: [
        'En stats rett til å styre seg selv uten innblanding fra andre',
        'En stats rett til å invadere andre land',
        'En stats rett til å handle med andre land',
        'En stats rett til å ha en konge',
      ],
      explanation: 'Suverenitet betyr at en stat har rett til å styre seg selv uten innblanding fra andre stater. Staten har full myndighet over sitt eget territorium og sin egen befolkning.',
    },
    {
      question: 'Hvilke fire kjennetegn må en stat ha?',
      options: [
        'Territorium, befolkning, styringssystem og suverenitet',
        'Hav, fjell, skog og elver',
        'Penger, våpen, mat og energi',
        'President, regjering, storting og domstoler',
      ],
      explanation: 'En stat defineres av fire kjennetegn: et avgrenset territorium, en befolkning som bor der, et styringssystem (regjering), og suverenitet (rett til å styre seg selv).',
    },
    {
      question: 'Hva er folkeretten?',
      options: [
        'Internasjonale regler som regulerer forholdet mellom stater',
        'Lover som bestemmer hvordan folk skal oppføre seg',
        'Regler for folkeavstemninger',
        'FNs menneskerettighetserklæring',
      ],
      explanation: 'Folkeretten er internasjonale regler som regulerer forholdet mellom stater. Den bygger på prinsipper som suverenitet, ikke-intervensjon og forbud mot maktbruk.',
    },
    {
      question: 'Hva sier ikke-intervensjonsprinsippet?',
      options: [
        'Ingen stat skal blande seg inn i andre staters indre anliggender',
        'Alle stater må hjelpe hverandre i krig',
        'Stater kan ikke handle med hverandre',
        'Stater må alltid samarbeide om miljø',
      ],
      explanation: 'Ikke-intervensjonsprinsippet sier at ingen stat skal blande seg inn i andre staters indre anliggender. Dette er et av folkerettens grunnleggende prinsipper.',
    },
    {
      question: 'Når er krig lovlig ifølge folkeretten?',
      options: [
        'Bare i selvforsvar',
        'Når staten er sterk nok',
        'Når man vil ta over ressurser',
        'Krig er alltid lovlig',
      ],
      explanation: 'Ifølge folkeretten er krig ulovlig unntatt i selvforsvar. Forbudet mot maktbruk er et av de viktigste prinsippene i internasjonal rett.',
    },
    {
      question: 'Hva er en NGO?',
      options: [
        'En ikke-statlig organisasjon som Amnesty eller Røde Kors',
        'En regjerings utenriksavdeling',
        'En type multinasjonalt selskap',
        'Et FN-organ',
      ],
      explanation: 'NGO står for Non-Governmental Organization, altså ikke-statlige organisasjoner. Eksempler er Amnesty International og Røde Kors som arbeider for menneskerettigheter og humanitær hjelp.',
    },
    {
      question: 'Omtrent hvor mange stater finnes det i verden i dag?',
      options: [
        'Rundt 200',
        'Rundt 50',
        'Rundt 500',
        'Rundt 1000',
      ],
      explanation: 'I dag finnes det rundt 200 stater i verden. Det nøyaktige tallet avhenger av hvilke enheter som anerkjennes som stater.',
    },
    {
      question: 'Hvilken av disse er IKKE en aktør i internasjonal politikk?',
      options: [
        'Kommuner',
        'Stater',
        'Internasjonale organisasjoner',
        'Multinasjonale selskaper',
      ],
      explanation: 'Kommuner er lokale styringsenheter innenfor en stat og regnes ikke som aktører i internasjonal politikk. Stater, internasjonale organisasjoner og multinasjonale selskaper er derimot viktige aktører.',
    },
  ],

  'samfunnskunnskap-10-2': [
    {
      question: 'Hva er forskjellen mellom push- og pull-faktorer i migrasjon?',
      options: [
        'Push-faktorer skyver folk bort fra hjemstedet, pull-faktorer trekker dem til et nytt sted',
        'Push-faktorer er positive, pull-faktorer er negative',
        'Push-faktorer gjelder flyktninger, pull-faktorer gjelder turister',
        'Det er ingen forskjell',
      ],
      explanation: 'Push-faktorer er forhold som skyver folk bort fra hjemstedet (krig, forfølgelse, fattigdom), mens pull-faktorer er forhold som trekker folk til et nytt sted (fred, arbeid, familie).',
    },
    {
      question: 'Hvilket år ble FNs flyktningkonvensjon vedtatt?',
      options: [
        '1951',
        '1945',
        '1990',
        '2000',
      ],
      explanation: 'FNs flyktningkonvensjon ble vedtatt i 1951 og definerer hvem som er flyktning og hvilke rettigheter de har.',
    },
    {
      question: 'Hvem regnes som flyktning ifølge flyktningkonvensjonen?',
      options: [
        'En person som med rette frykter forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en sosial gruppe',
        'Alle som vil flytte til et annet land',
        'Bare de som flykter fra krig',
        'Bare de som er fattige',
      ],
      explanation: 'Flyktningkonvensjonen definerer en flyktning som en person som med rette frykter forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en spesiell sosial gruppe.',
    },
    {
      question: 'Hva er en asylsøker?',
      options: [
        'En person som kommer til et land og søker om beskyttelse',
        'En person som har fått innvilget opphold',
        'En person som jobber i et asylmottak',
        'En person som hjelper flyktninger',
      ],
      explanation: 'En asylsøker er en person som kommer til et land og søker om beskyttelse (asyl). Søknaden må behandles før personen eventuelt får status som flyktning.',
    },
    {
      question: 'Hva er en kvoteflyktning?',
      options: [
        'En flyktning som FN har utvalgt og et land henter fra flyktningleir',
        'En flyktning som får opphold basert på kvotering',
        'En flyktning som må tilbake til hjemlandet etter en viss tid',
        'En flyktning som kommer ulovlig',
      ],
      explanation: 'Kvoteflyktninger er flyktninger som FN har utvalgt og som Norge og andre land henter direkte fra flyktningleirer gjennom en avtale med FN.',
    },
    {
      question: 'Hvilken av disse er en push-faktor?',
      options: [
        'Krig og konflikt',
        'Bedre levestandard',
        'Arbeidsmuligheter',
        'Familie i utlandet',
      ],
      explanation: 'Krig og konflikt er en push-faktor som skyver folk bort fra hjemstedet. Bedre levestandard, arbeid og familie er pull-faktorer som trekker folk til et nytt sted.',
    },
    {
      question: 'Hva betyr integrering?',
      options: [
        'At flyktninger skal bli en del av samfunnet gjennom språk, utdanning og arbeid',
        'At flyktninger skal bo isolert',
        'At flyktninger skal glemme sin egen kultur',
        'At flyktninger skal reise tilbake',
      ],
      explanation: 'Integrering handler om at flyktninger skal bli en del av det norske samfunnet gjennom norskopplæring, utdanning og arbeid, samtidig som de kan beholde sin egen kulturelle bakgrunn.',
    },
    {
      question: 'Hva sier flyktningkonvensjonen om retur til hjemlandet?',
      options: [
        'Flyktninger kan ikke sendes tilbake til et land der de risikerer forfølgelse',
        'Flyktninger må alltid returnere etter fem år',
        'Flyktninger kan sendes tilbake når som helst',
        'Flyktningkonvensjonen sier ingenting om dette',
      ],
      explanation: 'Flyktningkonvensjonen fastslår at flyktninger har rett til beskyttelse og ikke kan sendes tilbake til et land der de risikerer forfølgelse. Dette kalles non-refoulement-prinsippet.',
    },
  ],

  'samfunnskunnskap-10-3': [
    {
      question: 'Hva er diplomati?',
      options: [
        'Forhandlinger mellom stater for å løse konflikter',
        'Bruk av militær makt',
        'Økonomiske sanksjoner',
        'Spionasje mellom land',
      ],
      explanation: 'Diplomati er forhandlinger mellom stater, der representanter (diplomater) forsøker å løse konflikter og ivareta statens interesser gjennom dialog og avtaler.',
    },
    {
      question: 'Hva er megling som konfliktløsningsmetode?',
      options: [
        'En nøytral tredjepart hjelper partene å finne en løsning',
        'En domstol avgjør konflikten',
        'Partene bruker militær makt',
        'FN-soldater invaderer området',
      ],
      explanation: 'Ved megling hjelper en nøytral tredjepart (megler) partene i konflikten med å kommunisere og finne en løsning begge kan akseptere.',
    },
    {
      question: 'Hvilket land deler ut Nobels fredspris?',
      options: [
        'Norge',
        'Sverige',
        'Danmark',
        'Finland',
      ],
      explanation: 'Nobels fredspris deles ut av Norge, nærmere bestemt av Den norske Nobelkomité. Alle de andre nobelprisene deles ut i Sverige.',
    },
    {
      question: 'I hvilke fredsprosesser har Norge bidratt som megler?',
      options: [
        'Midtøsten, Sri Lanka og Colombia',
        'USA, Russland og Kina',
        'Frankrike, Tyskland og Italia',
        'Japan, Korea og Vietnam',
      ],
      explanation: 'Norge har bidratt som megler i flere fredsprosesser, blant annet mellom Israel og palestinerne (Oslo-avtalen), i Sri Lanka og i Colombia.',
    },
    {
      question: 'Hva er fredsbevarende operasjoner?',
      options: [
        'FN-styrker som overvåker våpenhviler og beskytter sivile',
        'Invasjon av andre land',
        'Økonomiske sanksjoner',
        'Spionasje',
      ],
      explanation: 'Fredsbevarende operasjoner er FN-ledede militære styrker som overvåker våpenhviler, beskytter sivile og bidrar til å opprettholde fred etter konflikter.',
    },
    {
      question: 'Hva er positiv fred?',
      options: [
        'Varig fred med demokrati, utvikling, forsoning og rettferdighet',
        'Bare fravær av krig',
        'Når den ene parten vinner',
        'En midlertidig våpenhvile',
      ],
      explanation: 'Positiv fred er mer enn bare fravær av krig. Det innebærer demokrati og rettigheter, økonomisk utvikling, forsoning mellom grupper og oppgjør med fortiden.',
    },
    {
      question: 'Hva er sanksjoner?',
      options: [
        'Økonomisk press mot et land uten bruk av våpen',
        'Militære angrep',
        'Diplomatiske forhandlinger',
        'FN-resolusjoner',
      ],
      explanation: 'Sanksjoner er økonomisk press mot et land uten bruk av våpen. Det kan være handelsrestriksjoner, frysing av bankkontoer eller reiseforbud mot ledere.',
    },
    {
      question: 'Hvorfor regnes Norge som en fredsnasjon?',
      options: [
        'Nobels fredspris, megling i konflikter, FN-deltakelse og bistand',
        'Norge har aldri vært i krig',
        'Norge har verdens største forsvar',
        'Norge er nøytralt i alle konflikter',
      ],
      explanation: 'Norge regnes som en fredsnasjon fordi Nobels fredspris deles ut herfra, Norge har bidratt som megler i mange konflikter, deltar i FN-fredsoperasjoner og gir betydelig bistand.',
    },
  ],

  'samfunnskunnskap-11-1': [
    {
      question: 'Når ble FN grunnlagt?',
      options: [
        '1945',
        '1918',
        '1950',
        '1991',
      ],
      explanation: 'FN (De forente nasjoner) ble grunnlagt i 1945 etter andre verdenskrig for å forhindre nye kriger og fremme internasjonalt samarbeid.',
    },
    {
      question: 'Hvor mange medlemsland har FN i dag?',
      options: [
        '193',
        '150',
        '50',
        '250',
      ],
      explanation: 'FN har i dag 193 medlemsland. Nesten alle verdens stater er medlemmer av FN.',
    },
    {
      question: 'Hva sier NATOs artikkel 5?',
      options: [
        'Et angrep på ett medlemsland regnes som et angrep på alle',
        'Alle medlemsland må ha like stort forsvar',
        'NATO skal alltid være nøytrale',
        'Medlemsland kan ikke angripe hverandre',
      ],
      explanation: 'NATOs artikkel 5 sier at et væpnet angrep på ett eller flere NATO-land skal betraktes som et angrep på alle. Dette er kjernen i forsvarsalliansen.',
    },
    {
      question: 'Når ble NATO grunnlagt?',
      options: [
        '1949',
        '1945',
        '1991',
        '2001',
      ],
      explanation: 'NATO ble grunnlagt i 1949, kort tid etter andre verdenskrig, som en forsvarsallianse mot Sovjetunionen under den kalde krigen.',
    },
    {
      question: 'Hvilke år sa Norge nei til EU-medlemskap?',
      options: [
        '1972 og 1994',
        '1980 og 2000',
        '1945 og 1970',
        '1990 og 2010',
      ],
      explanation: 'Norge har hatt to folkeavstemninger om EU-medlemskap, i 1972 og 1994. Begge gangene stemte flertallet nei.',
    },
    {
      question: 'Hva er de fire frihetene i EØS-avtalen?',
      options: [
        'Fri bevegelse av varer, tjenester, kapital og personer',
        'Fri bevegelse av luft, vann, jord og ild',
        'Fri bevegelse av biler, tog, fly og båter',
        'Fri bevegelse av mat, klær, bøker og elektronikk',
      ],
      explanation: 'EØS-avtalen gir Norge tilgang til EUs indre marked med de fire frihetene: fri bevegelse av varer, tjenester, kapital og personer.',
    },
    {
      question: 'Hva er en ulempe med EØS-avtalen for Norge?',
      options: [
        'Norge må følge EU-regler uten å ha stemmerett i EU',
        'Norge får ikke handle med EU-land',
        'Norge må ha euro som valuta',
        'Nordmenn kan ikke reise til EU-land',
      ],
      explanation: 'En ulempe med EØS-avtalen er at Norge må følge mange av EUs regler uten å ha stemmerett i EU. Norge betaler også bidrag til EU.',
    },
    {
      question: 'Hvilket av disse er IKKE et av FNs hovedorganer?',
      options: [
        'Europaparlamentet',
        'Generalforsamlingen',
        'Sikkerhetsrådet',
        'Den internasjonale domstolen',
      ],
      explanation: 'Europaparlamentet er et EU-organ, ikke et FN-organ. FNs hovedorganer inkluderer Generalforsamlingen, Sikkerhetsrådet og Den internasjonale domstolen.',
    },
    {
      question: 'Var Norge med på å grunnlegge NATO?',
      options: [
        'Ja, Norge var en av grunnleggerne',
        'Nei, Norge ble med først i 1991',
        'Nei, Norge er ikke NATO-medlem',
        'Ja, men Norge meldte seg ut i 1970',
      ],
      explanation: 'Norge var en av de 12 landene som grunnla NATO i 1949. Norge har vært medlem siden starten.',
    },
    {
      question: 'Hvilke nordiske land ble nylig medlemmer av NATO?',
      options: [
        'Finland og Sverige',
        'Danmark og Island',
        'Norge og Danmark',
        'Sverige og Danmark',
      ],
      explanation: 'Finland og Sverige ble medlemmer av NATO i 2023-2024 etter Russlands invasjon av Ukraina. De andre nordiske landene har vært medlemmer lenge.',
    },
  ],

  'samfunnskunnskap-11-2': [
    {
      question: 'Hva er hybridkrig?',
      options: [
        'Kombinasjon av militære og ikke-militære virkemidler som cyberangrep og propaganda',
        'Krig der begge sider bruker hybridbiler',
        'Krig mellom to allianser',
        'Krig som bare foregår i cyberspace',
      ],
      explanation: 'Hybridkrig er en kombinasjon av militære og ikke-militære virkemidler, som konvensjonelle styrker, cyberangrep, propaganda, desinformasjon og økonomisk press.',
    },
    {
      question: 'Hva er terrorisme?',
      options: [
        'Bruk av vold mot sivile for å skape frykt og oppnå politiske mål',
        'Alle former for krig',
        'Lovlige demonstrasjoner',
        'Militære operasjoner mellom stater',
      ],
      explanation: 'Terrorisme er bruk av vold mot sivile for å skape frykt og oppnå politiske mål. Terrorister angriper ofte uskyldige mennesker for å få oppmerksomhet.',
    },
    {
      question: 'Hvilken dato rammet terrorangrep Norge i 2011?',
      options: [
        '22. juli',
        '17. mai',
        '1. januar',
        '9. april',
      ],
      explanation: '22. juli 2011 ble Norge rammet av terrorangrep i Oslo og på Utøya, utført av en høyreekstrem terrorist. 77 mennesker ble drept.',
    },
    {
      question: 'Hva er en asymmetrisk konflikt?',
      options: [
        'Konflikt med ujevn styrke, ofte geriljakrig',
        'Konflikt mellom to like sterke parter',
        'Konflikt uten våpen',
        'Konflikt som bare foregår diplomatisk',
      ],
      explanation: 'En asymmetrisk konflikt er en konflikt der partene har svært ulik styrke. Den svakere parten bruker ofte geriljakrig og terror mot den sterkere.',
    },
    {
      question: 'Hvilken av disse er IKKE en form for ekstremisme nevnt i kapittelet?',
      options: [
        'Miljøaktivisme',
        'Religiøs ekstremisme',
        'Høyreekstremisme',
        'Venstreekstremisme',
      ],
      explanation: 'Miljøaktivisme er ikke nevnt som en form for ekstremisme. Kapittelet nevner religiøs ekstremisme, høyreekstremisme og venstreekstremisme.',
    },
    {
      question: 'Hva er desinformasjon?',
      options: [
        'Bevisst spredning av falsk informasjon for å påvirke meninger',
        'Informasjon som er utdatert',
        'Informasjon som er for komplisert',
        'Informasjon fra andre land',
      ],
      explanation: 'Desinformasjon er bevisst spredning av falsk informasjon for å påvirke valg, meninger og destabilisere samfunn. Det er et viktig virkemiddel i hybridkrig.',
    },
    {
      question: 'Hvilken av disse er en ny sikkerhetstrussel?',
      options: [
        'Cyberangrep mot kritisk infrastruktur',
        'Tradisjonell krig mellom stater',
        'Grensekonflikter',
        'Handelsavtaler',
      ],
      explanation: 'Cyberangrep mot kritisk infrastruktur som strømnett, sykehus og banker er en relativt ny sikkerhetstrussel som har vokst med digitaliseringen.',
    },
    {
      question: 'Hva kjennetegner høyreekstremisme?',
      options: [
        'Rasisme, nasjonalisme og hat mot minoriteter',
        'Miljøaktivisme',
        'Kamp for demokrati',
        'Fredelige protester',
      ],
      explanation: 'Høyreekstremisme kjennetegnes av rasisme, nasjonalisme og hat mot minoriteter. Det kan føre til vold og terror, som 22. juli-angrepene i Norge.',
    },
    {
      question: 'Hvordan kan klimaendringer påvirke sikkerhet?',
      options: [
        'Kan føre til ressurskonflikter og masseflukt',
        'Har ingen sammenheng med sikkerhet',
        'Gjør bare været varmere',
        'Påvirker bare miljøet',
      ],
      explanation: 'Klimaendringer kan føre til ressurskonflikter om vann og mat, og kan tvinge store befolkningsgrupper på flukt. Dette kan skape ustabilitet og konflikter.',
    },
    {
      question: 'Hva er et viktig tiltak for å forebygge radikalisering?',
      options: [
        'Utdanning og opplysning',
        'Overvåking av alle borgere',
        'Stenging av grensene',
        'Forbud mot internett',
      ],
      explanation: 'Utdanning og opplysning er viktige tiltak for å forebygge radikalisering. Ved å styrke kritisk tenkning og inkludering kan man motvirke at mennesker trekkes mot ekstreme miljøer.',
    },
  ],
};

/**
 * Hent quiz-spørsmål for et bestemt kapittel
 * @param chapterId - ID til kapittelet (f.eks. 'samfunnskunnskap-1-1')
 * @returns Array med quiz-spørsmål eller tom array hvis ikke funnet
 */
export function getSamfunnskunnskapQuizQuestions(chapterId: string): SamfunnskunnskapQuizQuestion[] {
  return quizData[chapterId] || [];
}

/**
 * Sjekk om et kapittel har quiz-spørsmål
 * @param chapterId - ID til kapittelet
 * @returns true hvis kapittelet har quiz
 */
export function hasSamfunnskunnskapQuiz(chapterId: string): boolean {
  return chapterId in quizData && quizData[chapterId].length > 0;
}

/**
 * Hent alle kapittel-IDer som har quiz
 * @returns Array med kapittel-IDer
 */
export function getSamfunnskunnskapQuizChapters(): string[] {
  return Object.keys(quizData);
}

export default quizData;

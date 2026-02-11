/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Rettslære 2 (VG3) - Del 1: Rett og rettferdighet
 *
 * Seksjon 1: Kapittel 1.1–1.5
 * Dekker LK20-kompetansemål:
 * - utforske og drøfte skillet mellom rett og rettferdighet i en rettsstat
 * - utforske demokratiets stilling i Norge og Sápmi/Sábme/Sáepmie og gjøre rede for
 *   grunnleggende menneskerettigheter som ivaretar dette
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Hva er rett og rettferdighet?
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1_1: TextbookChapter = {
  id: 'rettslaere-2-1-1',
  courseId: 'rettslaere-2',
  chapterNumber: '1.1',
  title: 'Hva er rett og rettferdighet?',
  description: 'Forskjellen mellom rett og moral, rettferdighetsbegrepet, naturrett vs. rettspositivisme.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og drøfte skillet mellom rett og rettferdighet i en rettsstat',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-1-1-intro',
      type: 'text',
      content: `## Hva er rett og rettferdighet?

I dette kapittelet skal du lære om:

- Forskjellen mellom **rett** (gjeldende lover) og **rettferdighet** (moralske vurderinger)
- Hvordan rettferdighetsbegrepet har utviklet seg historisk
- Spenningen mellom **naturrett** og **rettspositivisme**
- Hvorfor skillet mellom rett og rettferdighet er viktig i en rettsstat

Spørsmålet om hva som er rett og hva som er rettferdig, er et av de mest grunnleggende i jussen. Vi opplever alle situasjoner der vi tenker at noe er «urettferdig», men betyr det nødvendigvis at det er ulovlig? Og omvendt: er alt som er lovlig, også rettferdig? Disse spørsmålene står helt sentralt i rettslæren.`,
    },

    // BLOCK 1: Rett vs. moral
    {
      id: 'rtl2-1-1-def-rett',
      type: 'definition',
      title: 'Rett (jus)',
      content: `**Rett** (også kalt **gjeldende rett** eller **positiv rett**) er de reglene som er vedtatt av myndighetene og som kan håndheves med tvang. I Norge er rettskildene blant annet:

- **Lover** vedtatt av Stortinget (f.eks. straffeloven, Grunnloven)
- **Forskrifter** fastsatt av regjeringen eller forvaltningen
- **Rettspraksis** fra domstolene (særlig Høyesterett)
- **Sedvanerett** – langvarig og fast praksis
- **Internasjonale konvensjoner** som Norge har sluttet seg til

Retten gir svar på hva som er **lovlig** og **ulovlig**, men sier ikke nødvendigvis noe om hva som er **moralsk riktig**.`,
    },
    {
      id: 'rtl2-1-1-def-rettferdighet',
      type: 'definition',
      title: 'Rettferdighet',
      content: `**Rettferdighet** er et moralsk og filosofisk begrep som handler om hva som er **rimelig**, **riktig** og **rettferdig fordelt**. Rettferdighet er ikke nødvendigvis det samme som gjeldende rett.

Aristoteles skiller mellom to typer rettferdighet:

- **Fordelingsrettferdighet** (*distributiv rettferdighet*): Rettferdig fordeling av goder og byrder i samfunnet.
- **Gjenopprettende rettferdighet** (*korrigerende rettferdighet*): Gjenoppretting av ubalanse som oppstår ved urett, for eksempel gjennom erstatning eller straff.

Moderne rettsteori skiller også mellom **formell rettferdighet** (at like saker behandles likt) og **materiell rettferdighet** (at resultatet faktisk er rettferdig).`,
    },
    {
      id: 'rtl2-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Når rett og rettferdighet kolliderer',
      problem: 'En enslig forsørger med tre barn stjeler mat fra en butikk fordi vedkommende ikke har penger til mat. Etter straffeloven § 321 er tyveri straffbart. Drøft om resultatet er rettferdig.',
      solution: `**Analyse:**

**Rettens standpunkt:** Tyveriet er straffbart etter straffeloven § 321. Loven gjør ikke unntak for den enkeltes økonomiske situasjon. Formelt sett har vedkommende begått en straffbar handling.

**Rettferdighetsvurderingen:** Mange vil oppleve det som urettferdig å straffe en person som stjeler for å mette sine barn. Her trekker rettferdighetshensyn i retning av at straff virker urimelig.

**Bro mellom rett og rettferdighet:** Norsk rett har mekanismer som kan mildne spenningen:
- Påtalemyndighetens **opportunitetsprinsipp** gir rom for å henlegge saken
- Domstolen kan utmåle **mildere straff** etter straffeloven § 78 bokstav d (sosiale forhold)
- Nødrettsbestemmelsen i straffeloven § 17 kan i ekstreme tilfeller frita for straff

Eksempelet viser at rettssystemet forsøker å balansere formell rett med materielle rettferdighetshensyn.`,
    },
    {
      id: 'rtl2-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom rett og rettferdighet?',
        options: [
          { id: 'a', text: 'Rett er alltid rettferdig, mens rettferdighet er subjektiv', isCorrect: false },
          { id: 'b', text: 'Rett er de reglene som kan håndheves med tvang, mens rettferdighet er en moralsk vurdering', isCorrect: true },
          { id: 'c', text: 'Rettferdighet er nedfelt i Grunnloven, mens rett bare gjelder vanlige lover', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Rett refererer til gjeldende rettsregler som kan håndheves av staten, for eksempel gjennom politi og domstoler. Rettferdighet er et moralsk og filosofisk begrep som handler om hva som er rimelig og riktig. En lov kan være gjeldende rett uten å oppleves som rettferdig, og noe kan oppleves som rettferdig uten å ha støtte i loven.',
      },
    },

    // BLOCK 2: Naturrett vs. rettspositivisme
    {
      id: 'rtl2-1-1-text-naturrett',
      type: 'text',
      title: 'To syn på forholdet mellom rett og moral',
      content: `Gjennom historien har det vært to hovedretninger i spørsmålet om forholdet mellom rett og moral:

### Naturretten

Naturretten hevder at det finnes **overordnede moralske prinsipper** som gjelder uavhengig av hva lovgiveren har vedtatt. Hvis en lov strider mot disse prinsippene, er den ifølge naturrettsteorien ikke gyldig rett.

Denne tradisjonen strekker seg fra **Aristoteles** og **Thomas Aquinas** i middelalderen til **John Locke** på 1600-tallet. Locke mente at mennesker har **naturlige rettigheter** til liv, frihet og eiendom som ingen stat kan ta fra dem.

Naturretten fikk fornyet aktualitet etter andre verdenskrig: Nürnberg-domstolen dømte nazistiske ledere for forbrytelser mot menneskeheten, selv om handlingene var «lovlige» etter tysk rett. Domstolen la til grunn at det finnes rettsprinsipper som står over statens lover.

### Rettspositivismen

Rettspositivismen hevder at **rett og moral er to adskilte ting**. Gjeldende rett er de reglene som er vedtatt i samsvar med rettssystemets egne regler, uavhengig av om de er moralsk gode.

Den britiske filosofen **John Austin** (1790–1859) definerte rett som «suverenens befaling, understøttet av trussel om sanksjon». Den østerrikske juristen **Hans Kelsen** (1881–1973) utviklet en «ren rettslære» der rettens gyldighet kun avhenger av at den er gitt i samsvar med overordnede rettsnormer.

**H.L.A. Hart** (1907–1992) nyanserte rettspositivismen ved å hevde at rett og moral er begrepsmessig adskilte, men at det i praksis finnes forbindelser mellom dem.`,
    },
    {
      id: 'rtl2-1-1-def-naturrett',
      type: 'definition',
      title: 'Naturrett og rettspositivisme',
      content: `**Naturrett:** Rettsteoretisk retning som hevder at det finnes overordnede, universelle moralske prinsipper som gjeldende rett må respektere for å være gyldig. Lover som strider mot disse prinsippene, er ikke «egentlig» rett.

**Rettspositivisme:** Rettsteoretisk retning som skiller skarpt mellom rett og moral. Gjeldende rett er det som er vedtatt i samsvar med rettssystemets formelle regler, uavhengig av moralsk innhold. En umoralsk lov er fortsatt gyldig rett.`,
    },
    {
      id: 'rtl2-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Nürnberg-prosessen og naturretten',
      problem: 'Etter andre verdenskrig ble nazistiske ledere stilt for retten i Nürnberg. De tiltalte hevdet at de bare hadde fulgt gjeldende tysk lov. Hvordan ble dette argumentet møtt?',
      solution: `**Svar:**

Nürnberg-domstolen (1945–1946) avviste forsvaret om at handlingene var lovlige etter tysk rett. Domstolen la til grunn at det finnes **forbrytelser mot menneskeheten** som er straffbare uavhengig av hva nasjonal lov sier.

Dette var en **naturrettslig** argumentasjon: Visse handlinger er så moralsk forkastelige at ingen stat lovlig kan autorisere dem. Drap, tortur og folkemord strider mot universelle rettsprinsipper.

**Betydningen for ettertiden:**
- Nürnberg-prinsippene ble grunnlag for internasjonal strafferett
- FNs menneskerettighetserklæring (1948) bygger på tanken om universelle rettigheter
- Den internasjonale straffedomstolen (ICC) i Haag viderefører denne tradisjonen
- I Norge er folkemord og forbrytelser mot menneskeheten straffbart etter straffeloven kapittel 16, uavhengig av om handlingen var lovlig i det landet den ble begått`,
    },
    {
      id: 'rtl2-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner naturretten?',
        options: [
          { id: 'a', text: 'Bare lover vedtatt av Stortinget er gyldig rett', isCorrect: false },
          { id: 'b', text: 'Det finnes overordnede moralske prinsipper som gjeldende rett må respektere', isCorrect: true },
          { id: 'c', text: 'Rett og moral er helt adskilte ting', isCorrect: false },
          { id: 'd', text: 'Naturlovene bestemmer hva som er rett', isCorrect: false },
        ],
        solution: 'Naturretten hevder at det finnes universelle, overordnede moralske prinsipper som gjelder uavhengig av hva lovgiveren har bestemt. Hvis en lov strider mot disse prinsippene, er den ifølge naturrettsteorien ikke gyldig rett. Rettspositivismen, derimot, skiller skarpt mellom rett og moral.',
      },
    },
    {
      id: 'rtl2-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturrett og rettspositivisme. Bruk Nürnberg-prosessen som eksempel for å illustrere hvorfor dette skillet er viktig.',
        hints: [
          'Tenk på hva de tiltalte i Nürnberg hevdet: at de hadde fulgt gjeldende lov.',
          'Vurder hva en rettspositivist og en naturretts-tilhenger ville sagt om dette forsvaret.',
        ],
        solution: 'Naturretten hevder at det finnes overordnede moralske prinsipper som gjeldende rett må respektere. Rettspositivismen mener rett og moral er adskilt – gjeldende rett er det som er formelt vedtatt. I Nürnberg-prosessen hevdet de tiltalte at de fulgte tysk lov (rettspositivistisk forsvar). Domstolen avviste dette med naturrettslig argumentasjon: Forbrytelser mot menneskeheten er straffbare uavhengig av nasjonal lovgivning. Eksempelet viser at et rent rettspositivistisk syn kan gi uakseptable resultater når lovgiver selv begår overgrep.',
      },
    },

    // BLOCK 3: Rettferdighet i norsk rett
    {
      id: 'rtl2-1-1-text-norskrett',
      type: 'text',
      title: 'Rettferdighet i norsk rett',
      content: `### Hvordan ivaretar norsk rett rettferdighet?

Selv om norsk rett i hovedsak bygger på rettspositivistiske prinsipper – det vil si at gjeldende rett er det Stortinget har vedtatt – finnes det flere mekanismer som sikrer at retten også tar hensyn til rettferdighet:

**Grunnloven:** Grunnloven § 97 forbyr tilbakevirkende lover, og § 98 slår fast at alle er like for loven. Menneskerettighetsbestemmelsene i kapittel E setter skranker for hva lovgiver kan vedta.

**Menneskerettighetsloven:** Den europeiske menneskerettskonvensjon (EMK) og andre konvensjoner er inkorporert i norsk rett med forrang foran vanlige lover, jf. menneskerettsloven § 3.

**Domstolskontroll:** Domstolene kan prøve om lover er i strid med Grunnloven eller menneskerettighetene. Hvis de er det, settes loven til side.

**Rimelighetsvurderinger:** Mange lovbestemmelser gir rom for skjønn, slik at domstolene kan komme til rimelige resultater i den enkelte sak. For eksempel gir avtaleloven § 36 adgang til å sette urimelige avtaler helt eller delvis til side.

**Legalitetsprinsippet:** Staten kan ikke gripe inn i borgernes rettsfære uten hjemmel i lov. Dette beskytter den enkelte mot vilkårlige inngrep fra myndighetene.`,
    },
    {
      id: 'rtl2-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gi to eksempler på mekanismer i norsk rett som skal sikre at lovene er rettferdige. Forklar hvordan disse mekanismene fungerer.',
        hints: [
          'Tenk på Grunnlovens rolle og menneskerettighetene.',
          'Vurder domstolenes mulighet til å prøve om lover er i strid med Grunnloven.',
        ],
        solution: 'Eksempel 1: Menneskerettighetsloven inkorporerer EMK i norsk rett med forrang, slik at lover som strider mot grunnleggende rettigheter kan settes til side. Eksempel 2: Domstolskontroll gir domstolene myndighet til å prøve om en lov er i strid med Grunnloven. Hvis loven er grunnlovsstridig, kan domstolen la den stå tilbake for Grunnlovens bestemmelser. Begge mekanismene sikrer at lovgiver ikke kan vedta vilkårlige eller urettferdige regler.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-1-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Rett** er de reglene som er vedtatt av myndighetene og som kan håndheves med tvang. **Rettferdighet** er en moralsk vurdering av om noe er rimelig og riktig.
- **Naturretten** hevder at det finnes universelle moralske prinsipper som står over gjeldende rett. **Rettspositivismen** skiller rett og moral som to ulike ting.
- Nürnberg-prosessen viste at et rent rettspositivistisk syn kan gi uakseptable resultater, og styrket naturrettslige argumenter.
- Norsk rett balanserer mellom rettspositivisme og rettferdighet gjennom Grunnloven, menneskerettighetene, domstolskontroll og rimelighetsvurderinger.
- Skillet mellom rett og rettferdighet er viktig for å forstå rettsstatens begrensninger og muligheter.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: «En lov som er vedtatt av Stortinget, er alltid rettferdig.» Bruk argumenter fra både naturrettsteorien og rettspositivismen i drøftingen din.',
        hints: [
          'Begynn med å forklare hva påstanden innebærer.',
          'Vurder hva en naturretts-tilhenger ville sagt, og hva en rettspositivist ville sagt.',
          'Bruk gjerne et konkret eksempel for å illustrere poenget ditt.',
        ],
        solution: 'En rettspositivist ville hevdet at spørsmålet om en lov er rettferdig, er et annet spørsmål enn om den er gyldig rett. Loven er gyldig fordi den er vedtatt i tråd med Grunnlovens regler. En naturretts-tilhenger ville derimot sagt at en lov som strider mot grunnleggende moralske prinsipper, ikke er egentlig rett, uansett hvem som har vedtatt den. Historisk har vi sett at demokratisk vedtatte lover kan være dypt urettferdige – for eksempel raseskillelovene i Sør-Afrika. Konklusjonen er at formell lovgivningsmyndighet ikke automatisk garanterer rettferdighet, og at kritisk vurdering av lovene er nødvendig.',
      },
    },
    {
      id: 'rtl2-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Tenk deg at du er medlem av en komité som skal revidere en lov du mener er urettferdig, men som formelt sett er gyldig. Hvordan ville du argumentert for at loven bør endres? Hvilke hensyn måtte du balansere?',
        hints: [
          'Tenk på rettssikkerhet og forutberegnelighet på den ene siden, og rettferdighet på den andre.',
          'Vurder hvem som berøres av loven, og hvordan endringen kan påvirke andre deler av rettssystemet.',
        ],
        solution: 'Argumentasjonen bør ta utgangspunkt i at loven gir urimelige resultater i praksis, og at dette strider mot grunnleggende verdier som likhet, verdighet og forholdsmessighet. Man må balansere hensynet til rettferdighet mot hensynet til rettssikkerhet og forutberegnelighet – borgerne må kunne stole på at lovene er stabile. Hensynet til de som berøres negativt av loven, må veies mot eventuelle samfunnsinteresser loven skal ivareta. Menneskerettighetene kan brukes som argument for endring dersom loven griper uforholdsmessig inn i grunnleggende rettigheter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rett', definition: 'De reglene som er vedtatt av myndighetene og som kan håndheves med tvang.' },
    { term: 'Rettferdighet', definition: 'Moralsk vurdering av om noe er rimelig, riktig og rettferdig fordelt.' },
    { term: 'Naturrett', definition: 'Rettsteoretisk retning som hevder at overordnede moralske prinsipper står over gjeldende rett.' },
    { term: 'Rettspositivisme', definition: 'Rettsteoretisk retning som skiller skarpt mellom rett og moral.' },
    { term: 'Legalitetsprinsippet', definition: 'Prinsipp om at staten ikke kan gripe inn i borgernes rettsfære uten hjemmel i lov.' },
  ],
};

// ============================================================================
// KAPITTEL 1.2: Rettsstaten og maktfordelingsprinsippet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1_2: TextbookChapter = {
  id: 'rettslaere-2-1-2',
  courseId: 'rettslaere-2',
  chapterNumber: '1.2',
  title: 'Rettsstaten og maktfordelingsprinsippet',
  description: 'Rettsstatens kjennetegn, Montesquieu, lovgivende, utøvende og dømmende makt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og drøfte skillet mellom rett og rettferdighet i en rettsstat',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-1-2-intro',
      type: 'text',
      content: `## Rettsstaten og maktfordelingsprinsippet

I dette kapittelet skal du lære om:

- Hva som kjennetegner en **rettsstat**
- **Montesquieus** maktfordelingslære
- Fordelingen mellom **lovgivende**, **utøvende** og **dømmende** makt i Norge
- Hvorfor maktfordeling er avgjørende for rettssikkerhet

En rettsstat er et samfunn der makten er regulert av lover, og der myndighetene ikke kan handle vilkårlig overfor borgerne. Tanken om rettsstaten er nært knyttet til maktfordelingsprinsippet: At den som lager lovene, ikke skal være den samme som den som håndhever dem eller dømmer etter dem.`,
    },

    // BLOCK 1: Rettsstatens kjennetegn
    {
      id: 'rtl2-1-2-def-rettsstat',
      type: 'definition',
      title: 'Rettsstaten',
      content: `En **rettsstat** er en stat der all maktutøvelse er bundet av rettsregler. Kjennetegn på en rettsstat:

1. **Legalitetsprinsippet:** Myndighetene kan bare gripe inn i borgernes rettigheter med hjemmel i lov.
2. **Maktfordeling:** Statsmakten er delt mellom lovgivende, utøvende og dømmende organer.
3. **Uavhengige domstoler:** Domstolene er uavhengige av de andre statsmaktene.
4. **Menneskerettigheter:** Grunnleggende rettigheter er beskyttet mot inngrep fra staten.
5. **Likhet for loven:** Alle borgere behandles likt av rettssystemet.
6. **Rettslig forutsigbarhet:** Borgerne kan forutse sin rettsstilling og innrette seg etter gjeldende regler.

Motsetningen til rettsstaten er en **vilkårlig stat** (politistat), der myndighetene handler etter eget forgodtbefinnende uten å være bundet av regler.`,
    },
    {
      id: 'rtl2-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Rettsstaten i praksis',
      problem: 'Politiet mistenker at en person oppbevarer narkotika hjemme. Kan politiet uten videre ransake boligen?',
      solution: `**Svar:**

Nei, i en rettsstat kan ikke politiet ransake en bolig uten rettslig grunnlag.

**Rettslig ramme:**
- Grunnloven § 102 beskytter retten til privatliv og forbyr vilkårlige husransakelser
- Straffeprosessloven § 192 krever at det foreligger **skjellig grunn til mistanke** om en handling som kan medføre frihetsstraff
- Hovedregelen er at ransaking besluttes av **retten** (straffeprosessloven § 197)
- Politiet kan bare beslutte ransaking selv dersom det er **fare ved opphold** (straffeprosessloven § 198)

**Rettsstatsgarantien:** Kravet om rettslig grunnlag beskytter borgerne mot vilkårlige inngrep. Selv om politiet har gode grunner til mistanke, må de følge lovens prosedyrer. Bevis som er innhentet i strid med loven, kan bli avskåret av domstolen.`,
    },
    {
      id: 'rtl2-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et kjennetegn på en rettsstat?',
        options: [
          { id: 'a', text: 'Uavhengige domstoler', isCorrect: false },
          { id: 'b', text: 'Legalitetsprinsippet', isCorrect: false },
          { id: 'c', text: 'At regjeringen kan endre lover uten Stortingets samtykke', isCorrect: true },
          { id: 'd', text: 'Likhet for loven', isCorrect: false },
        ],
        solution: 'I en rettsstat er det lovgivende organ (Stortinget) som vedtar lover. Regjeringen (utøvende makt) kan ikke endre lover på egen hånd. Maktfordelingen mellom de tre statsmaktene er et grunnleggende prinsipp i rettsstaten. De øvrige alternativene – uavhengige domstoler, legalitetsprinsippet og likhet for loven – er alle sentrale kjennetegn ved en rettsstat.',
      },
    },

    // BLOCK 2: Montesquieu og maktfordelingslæren
    {
      id: 'rtl2-1-2-text-montesquieu',
      type: 'text',
      title: 'Montesquieus maktfordelingslære',
      content: `### Charles-Louis de Montesquieu (1689–1755)

Den franske filosofen og juristen **Montesquieu** er den viktigste tenkeren bak maktfordelingsprinsippet. I verket *De l'esprit des lois* («Om lovenes ånd», 1748) argumenterte han for at statsmakten må deles i tre uavhengige grener for å forhindre maktmisbruk:

**Lovgivende makt** (*le pouvoir législatif*): Vedtar lovene.
**Utøvende makt** (*le pouvoir exécutif*): Iverksetter og håndhever lovene.
**Dømmende makt** (*le pouvoir judiciaire*): Avgjør tvister og straffer lovbrytere.

Montesquieus hovedargument var at **makt korrumperer**: «Enhver som har makt, er tilbøyelig til å misbruke den.» Derfor må makten kontrollere makten – de tre grenene skal holde hverandre i sjakk.

Montesquieu ble sterkt inspirert av det britiske systemet, men hans teori påvirket i sin tur utformingen av den amerikanske grunnloven (1787) og senere den norske Grunnloven (1814).`,
    },
    {
      id: 'rtl2-1-2-def-maktfordeling',
      type: 'definition',
      title: 'Maktfordelingsprinsippet',
      content: `**Maktfordelingsprinsippet** innebærer at statsmakten deles i tre uavhengige grener:

- **Lovgivende makt:** I Norge er dette **Stortinget**, som vedtar lover, bevilger budsjett og kontrollerer regjeringen (Grunnloven §§ 75–85).
- **Utøvende makt:** I Norge er dette **regjeringen** (Kongen i statsråd), som iverksetter Stortingets vedtak og styrer forvaltningen (Grunnloven §§ 12–32).
- **Dømmende makt:** I Norge er dette **domstolene** – med Høyesterett som øverste instans – som avgjør rettstvister og straffesaker (Grunnloven §§ 86–91).

Prinsippet sikrer at ingen enkeltperson eller gruppe får for mye makt, og at maktutøvelse kan kontrolleres.`,
    },
    {
      id: 'rtl2-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Maktfordeling i praksis',
      problem: 'Stortinget vedtar en ny lov som forbyr en bestemt type ytring. Hvordan fungerer maktfordelingen som kontrollmekanisme?',
      solution: `**Maktfordelingens kontrollmekanismer:**

1. **Lovgivningsprosessen:** Loven gjennomgår komitébehandling, debatt og avstemning i Stortinget. Mindretallet kan reise motforestillinger.

2. **Regjeringen:** Selv om loven er vedtatt, skal regjeringen iverksette den. Regjeringen kan i noen tilfeller utforme forskrifter som presiserer lovens rekkevidde.

3. **Domstolskontroll:** Dersom en borger mener loven krenker ytringsfriheten etter Grunnloven § 100 eller EMK artikkel 10, kan saken bringes inn for domstolene. Domstolene kan prøve lovens grunnlovsmessighet.

4. **Høyesterett:** Som øverste instans kan Høyesterett slå fast at loven er i strid med Grunnloven. Da vil loven måtte vike.

5. **Internasjonale mekanismer:** Loven kan også klages inn for Den europeiske menneskerettsdomstolen (EMD) i Strasbourg.

Slik sikrer maktfordelingen at selv demokratisk vedtatte lover kan kontrolleres og eventuelt settes til side.`,
    },
    {
      id: 'rtl2-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvem utviklet maktfordelingslæren, og i hvilket verk?',
        options: [
          { id: 'a', text: 'John Locke i «Two Treatises of Government»', isCorrect: false },
          { id: 'b', text: 'Jean-Jacques Rousseau i «Samfunnspakten»', isCorrect: false },
          { id: 'c', text: 'Montesquieu i «Om lovenes ånd»', isCorrect: true },
          { id: 'd', text: 'Thomas Hobbes i «Leviathan»', isCorrect: false },
        ],
        solution: 'Charles-Louis de Montesquieu formulerte maktfordelingslæren i sitt verk «De l\'esprit des lois» (Om lovenes ånd) fra 1748. Selv om John Locke også skrev om maktfordeling, var det Montesquieu som systematiserte den tredelte maktfordelingen mellom lovgivende, utøvende og dømmende makt.',
      },
    },
    {
      id: 'rtl2-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva maktfordelingsprinsippet innebærer, og gi eksempler på hvordan de tre statsmaktene kontrollerer hverandre i Norge.',
        hints: [
          'Nevn de tre statsmaktene og hvilke organer som representerer dem.',
          'Tenk på domstolskontroll, Stortingets kontrollfunksjon og regjeringens rolle.',
        ],
        solution: 'Maktfordelingsprinsippet innebærer at statsmakten deles i lovgivende (Stortinget), utøvende (regjeringen) og dømmende (domstolene) makt. Kontrollmekanismer: Stortinget kontrollerer regjeringen gjennom spørretimer, mistillitsforslag og Riksrevisjonen. Domstolene kontrollerer både Stortinget og regjeringen ved å prøve om lover og vedtak er i samsvar med Grunnloven og menneskerettighetene. Regjeringen har lovforslagsrett og kan påvirke lovgivningen gjennom proposisjoner. Disse mekanismene sikrer at ingen statsmakt får uinnskrenket makt.',
      },
    },

    // BLOCK 3: Parlamentarisme og modifisert maktfordeling
    {
      id: 'rtl2-1-2-text-parlamentarisme',
      type: 'text',
      title: 'Norsk parlamentarisme – modifisert maktfordeling',
      content: `### Parlamentarismen i Norge

I Grunnloven av 1814 var maktfordelingen mellom de tre statsmaktene relativt streng. Med innføringen av **parlamentarismen** i 1884 ble forholdet mellom Stortinget og regjeringen endret:

Parlamentarismen innebærer at regjeringen må ha **Stortingets tillit** for å kunne sitte. Dersom Stortinget vedtar et mistillitsforslag, må regjeringen gå av. I praksis betyr dette at regjeringen utgår fra stortingsflertallet.

**Konsekvens for maktfordelingen:**
- Den lovgivende og den utøvende makten er ikke like skarpt adskilt som Montesquieu tenkte seg.
- Regjeringen har i praksis stor innflytelse på lovgivningen gjennom lovforslag (proposisjoner).
- Den **dømmende makten** er fortsatt uavhengig av de to andre statsmaktene.

Vi snakker derfor om en **modifisert maktfordeling** i Norge – det er et tett samspill mellom Stortinget og regjeringen, men domstolene er genuint uavhengige.

**Grunnloven § 95** slår uttrykkelig fast at «[d]omstolene er uavhengige» og at «[s]tatens myndigheter skal sikre domstolenes og dommernes uavhengighet og upartiskhet».`,
    },
    {
      id: 'rtl2-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor vi sier at Norge har en «modifisert» maktfordeling. Hva skiller den norske maktfordelingen fra Montesquieus opprinnelige modell?',
        hints: [
          'Tenk på hva parlamentarismen innebærer for forholdet mellom Stortinget og regjeringen.',
          'Hvilken av de tre statsmaktene er fortsatt genuint uavhengig?',
        ],
        solution: 'Norge har modifisert maktfordeling fordi parlamentarismen innebærer et tett samspill mellom lovgivende og utøvende makt. Regjeringen utgår fra stortingsflertallet og har stor innflytelse på lovgivningen gjennom proposisjoner. Dette avviker fra Montesquieus ide om skarpt adskilte statsmakter. Den dømmende makten er derimot genuint uavhengig – Grunnloven § 95 slår fast domstolenes uavhengighet. I Montesquieus opprinnelige modell var alle tre statsmaktene strengt adskilt.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-1-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- En **rettsstat** er en stat der all maktutøvelse er bundet av rettsregler, og borgerne er beskyttet mot vilkårlig myndighetsutøvelse.
- **Montesquieu** formulerte maktfordelingslæren i 1748: Statsmakten deles i lovgivende, utøvende og dømmende makt.
- I Norge er makten fordelt mellom **Stortinget** (lovgivende), **regjeringen** (utøvende) og **domstolene** (dømmende).
- Parlamentarismen innebærer en **modifisert maktfordeling** – Stortinget og regjeringen står i et gjensidig avhengighetsforhold, mens domstolene er uavhengige.
- Maktfordelingen er avgjørende for rettssikkerheten: Den hindrer maktkonsentrasjon og sikrer at myndighetsutøvelse kan kontrolleres.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om maktfordelingen i Norge er sterk nok til å beskytte borgerne mot maktmisbruk. Trekk inn konkrete eksempler på kontrollmekanismer.',
        hints: [
          'Tenk på domstolskontroll, Sivilombudet, Riksrevisjonen og medienes rolle.',
          'Vurder om det finnes svakheter i systemet.',
        ],
        solution: 'Norge har flere kontrollmekanismer: Domstolene kan prøve lovers grunnlovsmessighet, Sivilombudet undersøker klager mot forvaltningen, Riksrevisjonen kontrollerer statens pengebruk, og frie medier overvåker myndighetene. Parlamentarismen gir Stortinget mulighet til å felle regjeringen gjennom mistillitsvotum. Svakheter kan være at regjeringen i praksis kontrollerer flertallet i Stortinget (gjennom partilojalitet), noe som svekker den lovgivende maktens kontrollfunksjon. Domstolenes uavhengighet og Grunnlovens menneskerettighetsbestemmelser er imidlertid solide garantier mot maktmisbruk.',
      },
    },
    {
      id: 'rtl2-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Forestill deg et land uten maktfordeling, der én person kontrollerer lovgivning, utøvelse og rettspleie. Beskriv hvilke konsekvenser dette kan få for innbyggernes rettigheter, og forklar hvorfor maktfordeling er viktig for å forhindre slike konsekvenser.',
        hints: [
          'Tenk på historiske eksempler som eneveldet eller totalitære stater.',
          'Hva skjer med rettssikkerheten dersom domstolene ikke er uavhengige?',
        ],
        solution: 'Uten maktfordeling kan lederen vedta lover som tjener egne interesser, bruke politi og militærvesen til å håndheve dem, og kontrollere domstolene slik at ingen kan overprøve vedtakene. Borgerne mister forutsigbarhet og rettssikkerhet. Historiske eksempler inkluderer eneveldet og totalitære stater som Nazi-Tyskland og Sovjetunionen. Maktfordeling forhindrer dette ved å la ulike organer kontrollere hverandre – særlig uavhengige domstoler sikrer at selv makthavere er bundet av loven.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rettsstat', definition: 'En stat der all maktutøvelse er bundet av rettsregler og borgerne er beskyttet mot vilkårlighet.' },
    { term: 'Maktfordeling', definition: 'Prinsippet om at statsmakten deles mellom lovgivende, utøvende og dømmende makt.' },
    { term: 'Parlamentarisme', definition: 'Styreform der regjeringen må ha Stortingets tillit for å sitte.' },
    { term: 'Montesquieu', definition: 'Fransk filosof (1689–1755) som formulerte maktfordelingslæren i «Om lovenes ånd» (1748).' },
    { term: 'Domstolskontroll', definition: 'Domstolenes myndighet til å prøve om lover og vedtak er i samsvar med Grunnloven.' },
  ],
};

// ============================================================================
// KAPITTEL 1.3: Demokrati og rettssikkerhet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1_3: TextbookChapter = {
  id: 'rettslaere-2-1-3',
  courseId: 'rettslaere-2',
  chapterNumber: '1.3',
  title: 'Demokrati og rettssikkerhet',
  description: 'Demokratiske prosesser, rettssikkerhet, legalitetsprinsippet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og drøfte skillet mellom rett og rettferdighet i en rettsstat',
    'utforske demokratiets stilling i Norge og Sápmi/Sábme/Sáepmie og gjøre rede for grunnleggende menneskerettigheter som ivaretar dette',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-1-3-intro',
      type: 'text',
      content: `## Demokrati og rettssikkerhet

I dette kapittelet skal du lære om:

- Forholdet mellom **demokrati** og **rettsstat**
- Hva **rettssikkerhet** innebærer
- **Legalitetsprinsippet** som rettsstatens bærebjelke
- Rettssikkerhetsgarantier i straffeprosessen
- Spenningen mellom flertallsstyre og individuelle rettigheter

Demokrati og rettsstat er to begreper som henger nøye sammen, men som ikke er det samme. Et demokrati handler om at folket styrer – rettsstaten handler om at makten er bundet av lover. Begge er nødvendige for et godt samfunn.`,
    },

    // BLOCK 1: Demokrati og rettsstat
    {
      id: 'rtl2-1-3-def-demokrati',
      type: 'definition',
      title: 'Demokrati',
      content: `**Demokrati** betyr «folkestyre» (gresk: *demos* = folk, *kratos* = styre). I et demokrati har folket innflytelse over viktige politiske beslutninger.

Vi skiller mellom:

- **Direkte demokrati:** Folket stemmer direkte over sakene (f.eks. folkeavstemninger).
- **Representativt (indirekte) demokrati:** Folket velger representanter som fatter beslutninger på deres vegne.

Norge er et **representativt demokrati** med innslag av direkte demokrati (f.eks. lokale folkeavstemninger). Stortinget er folkets valgte forsamling, og stortingsvalg holdes hvert fjerde år (Grunnloven § 54).

Demokrati forutsetter:
- **Frie og rettferdige valg**
- **Ytringsfrihet** og **pressefrihet**
- **Organisasjonsfrihet** og **forsamlingsfrihet**
- **Politisk pluralisme** – flere partier og synspunkter`,
    },
    {
      id: 'rtl2-1-3-text-demokrati-rettsstat',
      type: 'text',
      title: 'Demokrati er ikke nok',
      content: `### Demokrati uten rettsstat

Et demokrati uten rettsstatlige garantier kan bli et **flertallstyranni**: Flertallet vedtar lover som krenker mindretallets rettigheter. Historisk har demokratisk valgte forsamlinger vedtatt lover som diskriminerer minoriteter, begrenser ytringsfriheten eller fratar politiske motstandere deres rettigheter.

Eksempler:
- I Weimar-republikken (1919–1933) ble Hitler demokratisk valgt, og brukte deretter lovlige midler til å avvikle demokratiet.
- I flere land har demokratisk valgte ledere begrenset pressefrihet, domstolsuavhengighet og opposisjonens rettigheter.

Rettsstaten setter **grenser** for hva et demokratisk flertall kan bestemme. Grunnloven og menneskerettighetene beskytter individuelle rettigheter som selv flertallet ikke kan krenke.`,
    },
    {
      id: 'rtl2-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med «flertallstyranni»?',
        options: [
          { id: 'a', text: 'At flertallet alltid har rett', isCorrect: false },
          { id: 'b', text: 'At flertallet bruker sin makt til å krenke mindretallets rettigheter', isCorrect: true },
          { id: 'c', text: 'At tyrannen styrer med flertallets støtte', isCorrect: false },
          { id: 'd', text: 'At kun flertallet har stemmerett', isCorrect: false },
        ],
        solution: 'Flertallstyranni betyr at det demokratiske flertallet bruker sin makt til å vedta lover som krenker mindretallets rettigheter. Demokrati handler ikke bare om flertallets vilje – det forutsetter også at grunnleggende rettigheter beskyttes. Rettsstaten setter grenser for hva flertallet kan bestemme, gjennom Grunnloven og menneskerettighetene.',
      },
    },

    // BLOCK 2: Rettssikkerhet
    {
      id: 'rtl2-1-3-def-rettssikkerhet',
      type: 'definition',
      title: 'Rettssikkerhet',
      content: `**Rettssikkerhet** innebærer at borgerne er beskyttet mot vilkårlige inngrep fra staten, og at de har rett til en rettferdig behandling i møte med myndighetene.

Sentrale elementer i rettssikkerheten:

1. **Legalitetsprinsippet:** Inngrep i borgernes rettsfære krever hjemmel i lov.
2. **Kontradiksjonsprinsippet:** Begge parter i en sak skal få uttale seg før en avgjørelse treffes.
3. **Uskyldspresumsjonen:** Enhver er uskyldig inntil det motsatte er bevist (Grunnloven § 96 annet ledd, EMK artikkel 6 nr. 2).
4. **Rett til forsvarer:** Den som er siktet for en straffbar handling, har rett til å la seg bistå av forsvarer (straffeprosessloven § 94).
5. **Offentlighet i rettspleien:** Rettsmøter er som hovedregel offentlige (domstolloven § 124).
6. **Rett til overprøving:** Domstolsavgjørelser kan som hovedregel ankes til en høyere instans.`,
    },
    {
      id: 'rtl2-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Rettssikkerhetsgarantier i en straffesak',
      problem: 'Ole er siktet for bedrageri. Beskriv hvilke rettssikkerhetsgarantier som gjelder for ham gjennom straffeprosessen.',
      solution: `**Rettssikkerhetsgarantier for Ole:**

1. **Uskyldspresumsjonen:** Ole er uskyldig inntil retten eventuelt finner ham skyldig. Det er påtalemyndigheten som har bevisbyrden.

2. **Rett til forsvarer:** Ole har rett til forsvarer allerede fra siktelsen. Dersom han ikke har råd til advokat, vil det offentlige dekke kostnadene.

3. **Kontradiksjon:** Ole har rett til å se bevisene mot seg, stille spørsmål til vitner og legge frem sin versjon av saken.

4. **Legalitetsprinsippet:** Ole kan bare dømmes for handlinger som var straffbare da de ble begått (Grunnloven § 96 og § 97).

5. **Offentlig rettergang:** Rettssaken er som hovedregel offentlig, slik at samfunnet kan kontrollere at prosessen gjennomføres korrekt.

6. **Ankerett:** Dersom Ole blir domfelt, kan han anke dommen til lagmannsretten, og eventuelt videre til Høyesterett.

7. **Forbud mot dobbeltstraff:** Ole kan ikke straffes to ganger for samme handling (EMK protokoll 7 artikkel 4).`,
    },
    {
      id: 'rtl2-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva innebærer uskyldspresumsjonen?',
        options: [
          { id: 'a', text: 'At den siktede må bevise sin uskyld', isCorrect: false },
          { id: 'b', text: 'At enhver er uskyldig inntil det motsatte er bevist', isCorrect: true },
          { id: 'c', text: 'At politiet ikke kan arrestere noen uten dom', isCorrect: false },
          { id: 'd', text: 'At skyldige personer alltid blir frikjent', isCorrect: false },
        ],
        solution: 'Uskyldspresumsjonen innebærer at enhver er uskyldig inntil det motsatte er bevist. Det er påtalemyndigheten (staten) som har bevisbyrden – den siktede trenger ikke bevise sin uskyld. Prinsippet er nedfelt i Grunnloven § 96 annet ledd og i EMK artikkel 6 nr. 2.',
      },
    },

    // BLOCK 3: Legalitetsprinsippet
    {
      id: 'rtl2-1-3-def-legalitet',
      type: 'definition',
      title: 'Legalitetsprinsippet',
      content: `**Legalitetsprinsippet** er rettsstatens kanskje viktigste prinsipp. Det innebærer at myndighetene ikke kan gripe inn i borgernes rettsfære uten **hjemmel i lov**.

Prinsippet følger av Grunnloven, blant annet:
- **§ 96:** «Ingen kan dømmes uten etter lov» (det strafferettslige legalitetsprinsippet)
- **§ 97:** Forbud mot tilbakevirkende lover
- **§ 113:** «Myndighetenes inngrep overfor den enkelte må ha grunnlag i lov» (det generelle legalitetsprinsippet)

Legalitetsprinsippet har to hovedfunksjoner:
1. **Beskyttelse:** Det verner borgerne mot vilkårlige inngrep fra staten.
2. **Forutsigbarhet:** Borgerne kan innrette seg etter gjeldende regler fordi de vet at myndighetene er bundet av loven.`,
    },
    {
      id: 'rtl2-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Legalitetsprinsippet i praksis',
      problem: 'Kommunen ønsker å innføre en regel om at alle huseiere må male husene sine hvite. Er dette lovlig?',
      solution: `**Analyse:**

Kommunen kan ikke uten videre pålegge huseiere å male husene hvite. En slik regel griper inn i eiendomsretten og den personlige handlefriheten.

**Krav etter legalitetsprinsippet:**
- Kommunen trenger **hjemmel i lov** for å gi et slikt pålegg
- Plan- og bygningsloven gir kommunen adgang til å fastsette reguleringsbestemmelser, herunder om utseende på bygninger (§ 12-7 nr. 6)
- Men bestemmelsene må vedtas gjennom **formelle prosesser** (reguleringsplan med offentlig ettersyn og høring)
- Pålegget må være **forholdsmessig** – det kan ikke være mer inngripende enn nødvendig

**Konklusjon:** Kommunen kan regulere husfarge gjennom reguleringsplan med hjemmel i plan- og bygningsloven, men kan ikke innføre en slik regel uten lovhjemmel og forsvarlig saksbehandling.`,
    },
    {
      id: 'rtl2-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva legalitetsprinsippet innebærer. Hvorfor er dette prinsippet viktig for rettssikkerheten? Gi et eksempel.',
        hints: [
          'Tenk på hva som hadde skjedd dersom myndighetene kunne gripe inn i borgernes liv uten lovhjemmel.',
          'Bruk Grunnloven § 96 og/eller § 113 som utgangspunkt.',
        ],
        solution: 'Legalitetsprinsippet innebærer at myndighetene ikke kan gripe inn i borgernes rettsfære uten hjemmel i lov (Grunnloven § 113). I strafferetten følger det av § 96 at ingen kan dømmes uten etter lov. Prinsippet er viktig fordi det beskytter borgerne mot vilkårlige inngrep – staten kan ikke straffe, ilegge avgifter eller begrense rettigheter uten at det er lovhjemmel for det. Eksempel: Politiet kan ikke bøtelegge noen for en handling som ikke er forbudt ved lov, selv om de mener handlingen er uønsket.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-1-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Demokrati** handler om folkestyre; **rettsstaten** handler om at makten er bundet av lover. Begge er nødvendige.
- Et demokrati uten rettsstatlige garantier kan bli et **flertallstyranni** – Grunnloven og menneskerettighetene setter grenser for flertallsmakten.
- **Rettssikkerhet** innebærer at borgerne er beskyttet mot vilkårlige inngrep og har rett til rettferdig behandling.
- Sentrale rettssikkerhetsgarantier er uskyldspresumsjonen, retten til forsvarer, kontradiksjonsprinsippet og offentlighet i rettspleien.
- **Legalitetsprinsippet** er rettsstatens bærebjelke: Inngrep i borgernes rettsfære krever hjemmel i lov.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Drøft følgende påstand: «I et demokrati bør flertallet alltid få bestemme.» Trekk inn hensynet til mindretallets rettigheter og rettsstatens rolle.',
        hints: [
          'Bruk begrepet «flertallstyranni» i drøftingen.',
          'Forklar hvorfor Grunnloven setter grenser for hva flertallet kan vedta.',
        ],
        solution: 'Demokrati bygger på flertallets vilje, men ubegrenset flertallsmakt kan bli et «flertallstyranni» der mindretallets rettigheter krenkes. Rettsstaten sikrer at selv demokratisk valgte flertall er bundet av grunnleggende rettigheter – ytringsfriheten, religionsfriheten og retten til privatliv kan ikke oppheves av et stortingsflertall. Grunnloven står over vanlige lover, og domstolene kan sette til side lover som strider mot grunnleggende rettigheter. Konklusjonen er at demokrati og rettsstat utfyller hverandre: Demokratiet sikrer folkelig innflytelse, mens rettsstaten sikrer at alle borgere, også mindretallet, har grunnleggende rettigheter.',
      },
    },
    {
      id: 'rtl2-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Velg én rettssikkerhetsgaranti du mener er den viktigste, og begrunn valget ditt. Forklar hva som kan skje dersom denne garantien fjernes.',
        hints: [
          'Tenk på hva konsekvensene ville vært i praksis dersom garantien ikke fantes.',
          'Du kan velge f.eks. uskyldspresumsjonen, retten til forsvarer eller legalitetsprinsippet.',
        ],
        solution: 'Eksempel: Uskyldspresumsjonen. Uten denne garantien ville byrden ligge på den siktede til å bevise sin uskyld, noe som i praksis ville være svært vanskelig. Politiet og påtalemyndigheten ville ha langt større makt over den enkelte borger, og risikoen for uriktige domfellelser ville øke dramatisk. Historisk har fravær av uskyldspresumsjon ført til vilkårlige fengsling av politiske motstandere. Garantien er fundamentet for en rettferdig straffeprosess og hindrer at uskyldige dømmes.',
      },
    },
    {
      id: 'rtl2-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'I 2020 innførte myndighetene strenge smitteverntiltak under koronapandemien, blant annet forbud mot forsamlinger og reiserestriksjoner. Drøft om slike tiltak er forenlige med rettsstatens prinsipper om legalitet og rettssikkerhet.',
        hints: [
          'Vurder om tiltakene hadde hjemmel i lov (smittevernloven).',
          'Tenk på forholdsmessighetskravet – var inngrepene nødvendige og proporsjonale?',
        ],
        solution: 'Koronatiltakene griper inn i grunnleggende rettigheter som bevegelsesfriheten og forsamlingsfriheten. Etter legalitetsprinsippet krever slike inngrep hjemmel i lov. Smittevernloven (helseberedskapsloven) ga myndighetene hjemmel til å innføre tiltak for å bekjempe allmennfarlige smittsomme sykdommer. Tiltakene var dermed formelt lovlige. Rettsstatlig vurdering: Inngrepene måtte være forholdsmessige – nødvendige for å oppnå formålet (hindre smittespredning) og ikke mer inngripende enn nødvendig. Kritikere hevdet at enkelte tiltak (f.eks. hytteforbud) var uforholdsmessige. Koronakommisjonen vurderte i ettertid at tiltakene i hovedsak var lovlige, men at det ble gitt for vide fullmakter til regjeringen uten tilstrekkelig stortingskontroll.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Demokrati', definition: 'Folkestyre – styreform der folket har innflytelse over politiske beslutninger.' },
    { term: 'Rettssikkerhet', definition: 'Borgernes beskyttelse mot vilkårlige inngrep fra staten og rett til rettferdig behandling.' },
    { term: 'Legalitetsprinsippet', definition: 'Prinsippet om at myndighetenes inngrep overfor den enkelte krever hjemmel i lov.' },
    { term: 'Uskyldspresumsjonen', definition: 'Enhver er uskyldig inntil det motsatte er bevist – bevisbyrden ligger på påtalemyndigheten.' },
    { term: 'Flertallstyranni', definition: 'Situasjon der et demokratisk flertall bruker sin makt til å krenke mindretallets rettigheter.' },
  ],
};

// ============================================================================
// KAPITTEL 1.4: Samiske rettigheter og Sápmi
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1_4: TextbookChapter = {
  id: 'rettslaere-2-1-4',
  courseId: 'rettslaere-2',
  chapterNumber: '1.4',
  title: 'Samiske rettigheter og Sápmi',
  description: 'Samefolkets rettigheter, Sametinget, ILO-konvensjon 169, konsultasjonsplikt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske demokratiets stilling i Norge og Sápmi/Sábme/Sáepmie og gjøre rede for grunnleggende menneskerettigheter som ivaretar dette',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-1-4-intro',
      type: 'text',
      content: `## Samiske rettigheter og Sápmi

I dette kapittelet skal du lære om:

- Samenes stilling som **urfolk** i Norge
- **Grunnlovens** bestemmelser om samiske rettigheter
- **Sametinget** og samisk politisk deltakelse
- **ILO-konvensjon 169** om urfolks rettigheter
- **Konsultasjonsplikten** mellom staten og Sametinget
- Samiske rettigheter i lys av Fosen-dommen (2021)

Samene er anerkjent som urfolk i Norge. Gjennom historien har den norske staten ført en **fornorskningspolitikk** som begrenset samisk språk, kultur og rettigheter. I dag er samiske rettigheter beskyttet av Grunnloven, internasjonale konvensjoner og særlovgivning.`,
    },

    // BLOCK 1: Samene som urfolk
    {
      id: 'rtl2-1-4-def-urfolk',
      type: 'definition',
      title: 'Urfolk',
      content: `**Urfolk** er folkegrupper som levde i et område før statsdannelsen, og som har opprettholdt egne sosiale, kulturelle og politiske institusjoner. Samene oppfyller kriteriene for urfolk etter internasjonal rett.

**Sápmi** (samisk: Sápmi / Sábme / Sáepmie) er samenes tradisjonelle bosettingsområde, som strekker seg over fire stater: Norge, Sverige, Finland og Russland.

I Norge bor det anslagsvis 40 000–60 000 samer. Sametinget har et eget valgmanntall der personer som oppfatter seg selv som same og oppfyller visse kriterier, kan registrere seg.

**Fornorskningspolitikken** (ca. 1850–1960) innebar at samisk språk og kultur ble aktivt undertrykt. Samiske barn ble sendt til internatskoler der de ikke fikk snakke samisk. Denne politikken har hatt langvarige konsekvenser for samisk kultur og identitet.`,
    },
    {
      id: 'rtl2-1-4-text-rettslig',
      type: 'text',
      title: 'Det rettslige rammeverket',
      content: `### Grunnloven

**Grunnloven § 108** (sameparagrafen) lyder: «Det påligger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv.»

Denne bestemmelsen gir ikke konkrete rettigheter, men pålegger staten en **plikt** til å tilrettelegge for samisk kultur og samfunnsliv. Den utgjør en konstitusjonell forankring av samenes stilling som urfolk.

### Sameloven (1987)

**Sameloven** regulerer Sametingets virksomhet og har bestemmelser om bruk av samisk språk. Loven fastsetter blant annet:
- Opprettelsen av **Sametinget** som samenes folkevalgte organ
- Samisk som **offisielt språk** i forvaltningsområdet for samisk språk
- Rett til å bruke samisk i kontakt med offentlige myndigheter i samiskspråklige kommuner

### Finnmarksloven (2005)

**Finnmarksloven** regulerer forvaltningen av grunn og naturressurser i Finnmark. Loven overfører eierskap av om lag 95 % av arealet i Finnmark fra staten til **Finnmarkseiendommen** (FeFo), som styres av et styre med medlemmer oppnevnt av Sametinget og Finnmark fylkesting.`,
    },
    {
      id: 'rtl2-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva sier Grunnloven § 108 (sameparagrafen)?',
        options: [
          { id: 'a', text: 'At samene har rett til eget land', isCorrect: false },
          { id: 'b', text: 'At staten skal legge til rette for at samene kan sikre og utvikle sitt språk, kultur og samfunnsliv', isCorrect: true },
          { id: 'c', text: 'At Sametinget har lovgivende myndighet', isCorrect: false },
          { id: 'd', text: 'At samisk er Norges offisielle språk', isCorrect: false },
        ],
        solution: 'Grunnloven § 108 pålegger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv. Bestemmelsen gir ikke samene konkrete rettigheter, men fastsetter en konstitusjonell plikt for staten.',
      },
    },

    // BLOCK 2: Sametinget og ILO-konvensjon 169
    {
      id: 'rtl2-1-4-def-sametinget',
      type: 'definition',
      title: 'Sametinget',
      content: `**Sametinget** er samenes folkevalgte organ i Norge. Det ble opprettet i 1989 med hjemmel i sameloven.

**Organisering:**
- 39 representanter valgt fra 7 valgkretser
- Valg hvert fjerde år, samtidig med stortingsvalget
- Ledes av en **sametingspresident** og et **sametingsråd**

**Myndighetsområder:**
- Sametinget har **rådgivende** funksjon overfor myndighetene i saker som berører samene
- Forvalter tilskuddsordninger for samisk kultur, språk og næring
- Har beslutningsmyndighet i visse saker, blant annet innen samisk kulturminneforvaltning
- Er part i **konsultasjonsprosesser** med staten

Sametinget er *ikke* et parlament med lovgivningsmyndighet – det er et folkevalgt organ som representerer samisk interesser overfor norske myndigheter.`,
    },
    {
      id: 'rtl2-1-4-def-ilo169',
      type: 'definition',
      title: 'ILO-konvensjon 169',
      content: `**ILO-konvensjon 169** (1989) er en internasjonal konvensjon om urfolks rettigheter, vedtatt av Den internasjonale arbeidsorganisasjonen (ILO). Norge ratifiserte konvensjonen i 1990.

Sentrale bestemmelser:
- **Artikkel 6:** Urfolk skal konsulteres når det vurderes lovgivnings- eller forvaltningstiltak som kan berøre dem direkte.
- **Artikkel 7:** Urfolk har rett til å bestemme egne prioriteringer for utviklingsprosesser som påvirker deres liv, tro, institusjoner og territorier.
- **Artikkel 14:** Urfolks rett til eierskap og besittelse av land de tradisjonelt har befolket, skal anerkjennes.
- **Artikkel 15:** Urfolks rett til naturressurser på sine tradisjonelle landområder skal beskyttes.

Konvensjonen er ikke inkorporert i norsk rett med forrang (slik EMK er), men den er folkerettslig bindende for Norge og skal legges til grunn ved tolkning av norsk lovgivning.`,
    },
    {
      id: 'rtl2-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Fosen-dommen (2021)',
      problem: 'Høyesterett avsa 11. oktober 2021 dom i Fosen-saken. Hva handlet saken om, og hva ble resultatet?',
      solution: `**Fosen-dommen (HR-2021-1975-S):**

**Sakens bakgrunn:** Myndighetene ga konsesjon til bygging av vindkraftverk på Fosen i Trøndelag. Sør-Fosen sijte og Nord-Fosen siida, to grupper av sørsamiske reindriftsutøvere, hevdet at vindkraftverkene ville ødelegge vinterbeitene for reinen og dermed krenke deres rett til kulturutøvelse.

**Rettslig grunnlag:** FNs konvensjon om sivile og politiske rettigheter (SP) artikkel 27, som beskytter minoriteters rett til å utøve sin kultur. Reindrift er anerkjent som en sentral del av samisk kultur.

**Resultatet:** Høyesterett i storkammer (enstemmig) slo fast at konsesjonene utgjorde et **brudd på samenes rettigheter** etter SP artikkel 27. Vedtakene var derfor **ugyldige**.

**Betydning:**
- Dommen bekreftet at samiske reindriftsrettigheter har sterkt vern etter internasjonale menneskerettigheter
- Den viste at urfolksrettigheter kan sette grenser for norsk energipolitikk
- Etterspillet skapte debatt om statens oppfølging av dommen`,
    },
    {
      id: 'rtl2-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva fastslo Høyesterett i Fosen-dommen (2021)?',
        options: [
          { id: 'a', text: 'At vindkraftverk på Fosen var lovlige fordi staten hadde konsultert Sametinget', isCorrect: false },
          { id: 'b', text: 'At konsesjonene for vindkraft krenket samenes rettigheter etter SP artikkel 27 og var ugyldige', isCorrect: true },
          { id: 'c', text: 'At ILO-konvensjon 169 ikke gjelder for vindkraftutbygging', isCorrect: false },
          { id: 'd', text: 'At Sametinget har vetorett mot energiprosjekter', isCorrect: false },
        ],
        solution: 'Høyesterett i storkammer slo enstemmig fast at vindkraftutbyggingen på Fosen krenket sørsamiske reindriftsutøveres rett til kulturutøvelse etter SP artikkel 27. Konsesjonene var derfor ugyldige. Dommen bekreftet at samiske rettigheter kan sette grenser for statens energipolitikk.',
      },
    },

    // BLOCK 3: Konsultasjonsplikten
    {
      id: 'rtl2-1-4-text-konsultasjon',
      type: 'text',
      title: 'Konsultasjonsplikten',
      content: `### Konsultasjonsplikt

I 2021 ble det vedtatt et eget kapittel i sameloven (kapittel 4) om **konsultasjonsplikt**. Bestemmelsene trådte i kraft 1. juli 2021.

Konsultasjonsplikten innebærer at statlige, fylkeskommunale og kommunale myndigheter har plikt til å **konsultere** (rådføre seg med) Sametinget og andre berørte samiske interesser før de treffer beslutninger som kan påvirke samene direkte.

**Formål:** Å oppnå enighet eller samtykke fra samiske representanter om tiltak som berører dem.

**Hvem konsulteres:**
- **Sametinget** i saker av generell karakter (lovgivning, politikkutforming)
- **Andre samiske interesser** i konkrete saker (f.eks. reindriftsutøvere ved arealplanlegging)

**Viktig:** Konsultasjonsplikten innebærer *ikke* at samene har vetorett. Myndighetene har plikt til å gjennomføre konsultasjoner i god tro med mål om enighet, men kan i siste instans treffe beslutninger selv om enighet ikke oppnås.

Konsultasjonsplikten følger også av ILO-konvensjon 169 artikkel 6.`,
    },
    {
      id: 'rtl2-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva konsultasjonsplikten innebærer. Skiller den seg fra en vetorett? Begrunn svaret ditt.',
        hints: [
          'Tenk på hva «konsultasjon» betyr – det handler om rådføring og dialog.',
          'Vurder hva som skjer dersom myndighetene og samene ikke blir enige.',
        ],
        solution: 'Konsultasjonsplikten innebærer at myndighetene har plikt til å rådføre seg med Sametinget og berørte samiske interesser før de treffer beslutninger som påvirker samene direkte. Formålet er å oppnå enighet gjennom dialog i god tro. Konsultasjonsplikten er ikke det samme som vetorett – dersom enighet ikke oppnås etter grundig konsultasjon, kan myndighetene likevel treffe sin beslutning. Men dersom samenes rettigheter etter internasjonale konvensjoner krenkes, kan domstolene kjenne vedtaket ugyldig, slik Fosen-dommen viste.',
      },
    },
    {
      id: 'rtl2-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gjør rede for det rettslige rammeverket som beskytter samiske rettigheter i Norge. Nevn minst tre rettskilder.',
        hints: [
          'Tenk på Grunnloven, internasjonale konvensjoner og norsk lovgivning.',
          'Sameloven, finnmarksloven og ILO-konvensjon 169 er sentrale.',
        ],
        solution: 'Det rettslige rammeverket inkluderer: 1) Grunnloven § 108, som pålegger staten å legge til rette for samisk språk, kultur og samfunnsliv. 2) ILO-konvensjon 169 om urfolks rettigheter, som sikrer konsultasjonsrett, landrettigheter og retten til selvbestemmelse. 3) SP artikkel 27, som beskytter minoriteters rett til å utøve sin kultur. 4) Sameloven, som regulerer Sametinget og samiske språkrettigheter. 5) Finnmarksloven, som regulerer forvaltning av grunn og naturressurser i Finnmark gjennom Finnmarkseiendommen.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-1-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- Samene er anerkjent som **urfolk** i Norge, med rettigheter beskyttet av Grunnloven, internasjonale konvensjoner og særlovgivning.
- **Grunnloven § 108** pålegger staten å tilrettelegge for samisk språk, kultur og samfunnsliv.
- **Sametinget** er samenes folkevalgte organ og har rådgivende funksjon overfor myndighetene.
- **ILO-konvensjon 169** sikrer urfolks rett til konsultasjon, landrettigheter og kulturelt vern.
- **Konsultasjonsplikten** (sameloven kap. 4) krever at myndighetene rådfører seg med samiske interesser, men gir ikke vetorett.
- **Fosen-dommen** (2021) viste at samiske rettigheter kan sette grenser for statens politikk og at brudd på urfolksrettigheter kan gjøre vedtak ugyldige.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om det norske rettssystemet gjør nok for å ivareta samiske rettigheter. Trekk inn Fosen-dommen og konsultasjonsplikten i drøftingen.',
        hints: [
          'Vurder både det rettslige rammeverket og den faktiske etterlevelsen.',
          'Tenk på hva som skjedde etter Fosen-dommen – fulgte staten opp?',
        ],
        solution: 'Norge har et omfattende rettslig rammeverk for samiske rettigheter gjennom Grunnloven, ILO 169, sameloven og finnmarksloven. Konsultasjonsplikten sikrer formell deltakelse i beslutningsprosesser. Fosen-dommen viste at domstolene kan gripe inn når samiske rettigheter krenkes. Kritikere peker imidlertid på at etterspillet etter Fosen-dommen viste at staten var sen med å følge opp, og at konsultasjonsplikten i praksis ikke alltid sikrer reell innflytelse. Videre har fornorskningspolitikkens konsekvenser ennå ikke blitt fullt ut reparert. Drøftingen bør balansere mellom det solide rettslige rammeverket og utfordringer med etterlevelse i praksis.',
      },
    },
    {
      id: 'rtl2-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlikn samenes rettslige stilling i Norge med urfolks rettigheter i et annet land du kjenner til (f.eks. aboriginerne i Australia, inuittene i Canada eller maoriene i New Zealand). Hvilke likheter og forskjeller finner du?',
        hints: [
          'Tenk på konstitusjonelt vern, landrettigheter og politisk representasjon.',
          'Vurder også den historiske behandlingen av urfolket i de to landene.',
        ],
        solution: 'Eksempel: Norge og New Zealand. Likheter: Begge land anerkjenner urfolk (samer/maoriene) og har lovgivning som beskytter deres rettigheter. Begge har folkevalgte organer (Sametinget/maori-seter i parlamentet). Forskjeller: New Zealand har Waitangi-traktaten (1840) som rettslig grunnlag, mens Norge bruker Grunnloven og ILO 169. Maoriene har reserverte plasser i parlamentet, mens Sametinget er et separat organ. Begge land har historisk undertrykt urfolkets kultur, men har gjort ulike tiltak for å reparere dette. Norge har ILO 169, som New Zealand ikke har ratifisert.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Urfolk', definition: 'Folkegrupper som levde i et område før statsdannelsen og har opprettholdt egne institusjoner.' },
    { term: 'Sápmi', definition: 'Samenes tradisjonelle bosettingsområde på tvers av Norge, Sverige, Finland og Russland.' },
    { term: 'Sametinget', definition: 'Samenes folkevalgte organ i Norge, opprettet i 1989.' },
    { term: 'ILO-konvensjon 169', definition: 'Internasjonal konvensjon fra 1989 om urfolks rettigheter, ratifisert av Norge i 1990.' },
    { term: 'Konsultasjonsplikt', definition: 'Plikt for myndighetene til å rådføre seg med samiske interesser før beslutninger som berører dem.' },
    { term: 'Finnmarkseiendommen', definition: 'Organ som forvalter grunn i Finnmark, opprettet ved finnmarksloven (2005).' },
  ],
};

// ============================================================================
// KAPITTEL 1.5: Grunnleggende menneskerettigheter
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1_5: TextbookChapter = {
  id: 'rettslaere-2-1-5',
  courseId: 'rettslaere-2',
  chapterNumber: '1.5',
  title: 'Grunnleggende menneskerettigheter',
  description: 'EMK, FN-konvensjoner, inkorporering i norsk rett, Grunnlovens menneskerettighetskapittel.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske demokratiets stilling i Norge og Sápmi/Sábme/Sáepmie og gjøre rede for grunnleggende menneskerettigheter som ivaretar dette',
  ],
  content: [
    // INTRO
    {
      id: 'rtl2-1-5-intro',
      type: 'text',
      content: `## Grunnleggende menneskerettigheter

I dette kapittelet skal du lære om:

- Hva **menneskerettigheter** er, og hvorfor de er viktige
- **Den europeiske menneskerettskonvensjon** (EMK) og dens betydning i norsk rett
- Sentrale **FN-konvensjoner** om menneskerettigheter
- **Menneskerettsloven** og inkorporering i norsk rett
- **Grunnlovens kapittel E** – menneskerettighetsbestemmelser i Grunnloven
- Forholdet mellom nasjonale og internasjonale menneskerettigheter

Menneskerettighetene utgjør et fundament i den norske rettsstaten. De setter grenser for hva staten kan gjøre overfor den enkelte borger, uavhengig av hva det politiske flertallet måtte ønske.`,
    },

    // BLOCK 1: Menneskerettighetene – bakgrunn
    {
      id: 'rtl2-1-5-def-mr',
      type: 'definition',
      title: 'Menneskerettigheter',
      content: `**Menneskerettigheter** er grunnleggende rettigheter og friheter som alle mennesker har i kraft av å være menneske. De gjelder uavhengig av nasjonalitet, kjønn, etnisitet, religion eller annen status.

Menneskerettighetene deles ofte inn i:

- **Sivile og politiske rettigheter:** Ytringsfrihet, religionsfrihet, retten til liv, vern mot tortur, retten til en rettferdig rettergang. Disse krever at staten **avholder seg fra inngrep** (negative rettigheter).

- **Økonomiske, sosiale og kulturelle rettigheter:** Retten til utdanning, helsetjenester, arbeid, bolig og sosial sikkerhet. Disse krever at staten **handler aktivt** for å sikre rettighetene (positive rettigheter).

FNs verdenserklæring om menneskerettighetene (1948) er det mest kjente menneskerettighetsdokumentet, men den er ikke juridisk bindende. De bindende forpliktelsene følger av **konvensjoner** (traktater) som statene har sluttet seg til.`,
    },
    {
      id: 'rtl2-1-5-text-historie',
      type: 'text',
      title: 'Historisk bakgrunn',
      content: `### Fra naturrett til menneskerettigheter

Ideen om universelle rettigheter har røtter i naturrettsfilosofien:

**John Locke** (1632–1704) hevdet at alle mennesker har naturlige rettigheter til liv, frihet og eiendom, og at statens legitimitet bygger på å beskytte disse rettighetene.

**Den amerikanske uavhengighetserklæringen** (1776): «Vi holder disse sannhetene for å være selvinnlysende, at alle mennesker er skapt like, at de av sin Skaper er utstyrt med visse umistelige rettigheter, blant disse er liv, frihet og streben etter lykke.»

**Den franske menneskerettighetserklæringen** (1789): Fastslo rettigheter som ytringsfrihet, religionsfrihet og likhet for loven.

**Etter andre verdenskrig:** Holocaust og krigens grusomheter viste at stater kunne begå massive overgrep mot egne borgere. FNs verdenserklæring om menneskerettighetene (1948) var et direkte svar på dette – en erklæring om at alle mennesker har ukrenkelige rettigheter.`,
    },
    {
      id: 'rtl2-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom sivile/politiske og økonomiske/sosiale/kulturelle rettigheter?',
        options: [
          { id: 'a', text: 'Sivile rettigheter gjelder bare for borgere, mens sosiale rettigheter gjelder for alle', isCorrect: false },
          { id: 'b', text: 'Sivile rettigheter krever at staten avholder seg fra inngrep, mens sosiale rettigheter krever aktiv handling fra staten', isCorrect: true },
          { id: 'c', text: 'Sivile rettigheter er viktigere enn sosiale rettigheter', isCorrect: false },
          { id: 'd', text: 'Det er ingen reell forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Sivile og politiske rettigheter (som ytringsfrihet og vern mot tortur) krever primært at staten avholder seg fra inngrep – de er «negative» rettigheter. Økonomiske, sosiale og kulturelle rettigheter (som retten til utdanning og helse) krever at staten handler aktivt for å sikre dem – de er «positive» rettigheter. I praksis har begge typer rettigheter både negative og positive sider.',
      },
    },

    // BLOCK 2: EMK
    {
      id: 'rtl2-1-5-def-emk',
      type: 'definition',
      title: 'Den europeiske menneskerettskonvensjon (EMK)',
      content: `**EMK** (Den europeiske menneskerettskonvensjon) ble vedtatt av Europarådet i 1950 og trådte i kraft i 1953. Norge ratifiserte konvensjonen allerede i 1952.

**Sentrale rettigheter i EMK:**
- **Artikkel 2:** Retten til liv
- **Artikkel 3:** Forbud mot tortur og umenneskelig behandling
- **Artikkel 5:** Retten til frihet og sikkerhet
- **Artikkel 6:** Retten til en rettferdig rettergang
- **Artikkel 8:** Retten til respekt for privatliv og familieliv
- **Artikkel 9:** Tanke-, samvittighets- og religionsfrihet
- **Artikkel 10:** Ytringsfrihet
- **Artikkel 11:** Forsamlings- og foreningsfrihet
- **Artikkel 14:** Forbud mot diskriminering

**Håndhevelse:** Den europeiske menneskerettsdomstolen (EMD) i Strasbourg behandler klager fra individer som mener at en stat har krenket deres rettigheter etter EMK. EMDs dommer er bindende for statene.`,
    },
    {
      id: 'rtl2-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Norge dømt i EMD',
      problem: 'Norge har flere ganger blitt dømt av Den europeiske menneskerettsdomstolen (EMD). Hva innebærer det, og hva skjer etterpå?',
      solution: `**Når Norge dømmes i EMD:**

**Eksempel – barnevernssakene:** Siden 2015 har EMD behandlet en rekke norske barnevernssaker. I flere saker har EMD slått fast at Norge krenket EMK **artikkel 8** (retten til familieliv) ved å nekte foreldre samvær med barn som var tatt under omsorg.

**Lobben mot Norge (2019):** EMDs storkammer fant at Norges barnevern krenket artikkel 8 ved å tillate adopsjon mot mors vilje og avskjære kontakten mellom mor og barn.

**Konsekvenser av en domfellelse:**
1. Staten må betale **erstatning** til klageren (fastsatt av EMD)
2. Staten må **rette opp** i det konkrete forholdet
3. Staten har plikt til å **endre praksis** (og eventuelt lovgivning) for å hindre fremtidige krenkelser
4. Norske domstoler legger stor vekt på EMD-praksis og tilpasser sin rettspraksis

**Barnevernets konsekvens:** Norsk barnevernspraksis ble vesentlig endret etter EMD-dommene – det ble lagt større vekt på biologiske foreldres rettigheter og på gjenforeningsmuligheter.`,
    },
    {
      id: 'rtl2-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva skjer dersom Norge dømmes av Den europeiske menneskerettsdomstolen (EMD)?',
        options: [
          { id: 'a', text: 'Dommen er kun rådgivende og har ingen praktisk betydning', isCorrect: false },
          { id: 'b', text: 'Norge må betale erstatning, rette opp forholdet og eventuelt endre praksis eller lovgivning', isCorrect: true },
          { id: 'c', text: 'Den norske loven som ble brutt, oppheves automatisk', isCorrect: false },
          { id: 'd', text: 'Saken sendes tilbake til norsk Høyesterett for ny behandling', isCorrect: false },
        ],
        solution: 'Når Norge dømmes i EMD, er dommen bindende. Norge må betale erstatning til klageren, rette opp i det konkrete forholdet og har plikt til å endre praksis (og eventuelt lovgivning) for å hindre fremtidige krenkelser. Loven oppheves ikke automatisk, men norske domstoler og myndigheter tilpasser sin praksis i tråd med EMDs avgjørelser.',
      },
    },

    // BLOCK 3: FN-konvensjoner og menneskerettsloven
    {
      id: 'rtl2-1-5-text-fn',
      type: 'text',
      title: 'FN-konvensjoner om menneskerettigheter',
      content: `### De sentrale FN-konvensjonene

FNs verdenserklæring om menneskerettighetene (1948) er ikke juridisk bindende, men den er konkretisert i bindende konvensjoner:

**SP – Konvensjonen om sivile og politiske rettigheter (1966)**
- Ytringsfrihet, religionsfrihet, vern mot tortur, retten til liv
- Valgfri klageordning til FNs menneskerettskomité

**ØSK – Konvensjonen om økonomiske, sosiale og kulturelle rettigheter (1966)**
- Retten til utdanning, helse, arbeid, sosial sikkerhet
- Gradvis gjennomføring etter statens ressurser

**Andre sentrale konvensjoner:**
- **Barnekonvensjonen** (1989): Barnets beste som grunnleggende hensyn
- **Kvinnekonvensjonen** (CEDAW, 1979): Forbyr diskriminering av kvinner
- **Rasediskrimineringskonvensjonen** (CERD, 1965): Forbyr rasediskriminering
- **Torturkonvensjonen** (CAT, 1984): Totalforbud mot tortur

Norge har ratifisert alle disse konvensjonene.`,
    },
    {
      id: 'rtl2-1-5-def-mrl',
      type: 'definition',
      title: 'Menneskerettsloven (1999)',
      content: `**Menneskerettsloven** (lov om styrking av menneskerettighetenes stilling i norsk rett) ble vedtatt 21. mai 1999.

**Inkorporering:** Loven gjør følgende konvensjoner til norsk lov:
- EMK med protokoller
- SP (FN-konvensjonen om sivile og politiske rettigheter)
- ØSK (FN-konvensjonen om økonomiske, sosiale og kulturelle rettigheter)
- Barnekonvensjonen
- Kvinnekonvensjonen

**Forrang (§ 3):** Ved motstrid mellom konvensjonene og annen norsk lovgivning skal konvensjonene gå foran. Dette er unikt i norsk rett – som hovedregel gjelder at nyere lov går foran eldre lov (lex posterior). Menneskerettsloven gir konvensjonene **forrang** uavhengig av tidspunktet for vedtakelse.

**Betydning:** Inkorporeringen innebærer at norske domstoler skal anvende konvensjonene direkte, og at borgerne kan påberope seg konvensjonsrettigheter for norske domstoler.`,
    },
    {
      id: 'rtl2-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva menneskerettsloven § 3 om forrang innebærer. Hvorfor er denne bestemmelsen viktig?',
        hints: [
          'Tenk på hva som skjer dersom en vanlig norsk lov strider mot EMK.',
          'Sammenlikn med hovedregelen om at nyere lov går foran eldre lov.',
        ],
        solution: 'Menneskerettsloven § 3 bestemmer at konvensjonene som er inkorporert (EMK, SP, ØSK, barnekonvensjonen og kvinnekonvensjonen) skal gå foran annen norsk lovgivning ved motstrid. Dette er et unntak fra hovedregelen om at nyere lov går foran eldre lov (lex posterior). Bestemmelsen er viktig fordi den sikrer at menneskerettighetene har en sterkere stilling enn vanlige lover. Dersom Stortinget vedtar en lov som strider mot EMK, vil EMK gå foran og den norske loven settes til side i den konkrete saken.',
      },
    },

    // BLOCK 4: Grunnlovens kapittel E
    {
      id: 'rtl2-1-5-text-grl',
      type: 'text',
      title: 'Grunnlovens menneskerettighetskapittel',
      content: `### Grunnlovens kapittel E (2014)

I 2014 gjennomførte Stortinget en omfattende grunnlovsrevisjon der et nytt **kapittel E** om menneskerettigheter ble innført. Kapittelet samler og forsterker menneskerettighetsvernet i Grunnloven.

**Sentrale bestemmelser i kapittel E:**

- **§ 92:** Statens myndigheter skal respektere og sikre menneskerettighetene slik de er nedfelt i Grunnloven og i bindende traktater om menneskerettigheter.
- **§ 93:** Retten til liv. Ingen kan dømmes til dødsstraff.
- **§ 95:** Retten til rettferdig rettergang. Domstolenes uavhengighet.
- **§ 96:** Ingen kan dømmes uten etter lov. Uskyldspresumsjonen.
- **§ 97:** Forbud mot tilbakevirkende lover.
- **§ 98:** Alle er like for loven. Forbud mot usaklig forskjellsbehandling.
- **§ 100:** Ytringsfrihet.
- **§ 101:** Forsamlingsfrihet og foreningsfrihet.
- **§ 102:** Retten til respekt for privatlivet.
- **§ 104:** Barnets rettigheter – barnets beste som grunnleggende hensyn.
- **§ 108:** Sameparagrafen – tilrettelegging for samisk kultur og språk.
- **§ 109:** Retten til utdanning.
- **§ 110:** Retten til arbeid.

Grunnlovsbestemmelsene er i stor grad utformet etter mønster av EMK og FN-konvensjonene, og skal tolkes i lys av disse.`,
    },
    {
      id: 'rtl2-1-5-note-1',
      type: 'note',
      title: 'Forholdet mellom Grunnloven og EMK',
      content: `Grunnlovens menneskerettighetsbestemmelser og EMK gir i stor grad vern for de samme rettighetene. Men det finnes forskjeller:

- **Grunnloven** er overordnet all annen norsk lov og kan bare endres etter den særlige prosedyren i Grunnloven § 121 (to tredjedels flertall i to påfølgende storting).
- **EMK** har forrang foran vanlige lover gjennom menneskerettsloven § 3, men har ikke automatisk forrang foran Grunnloven.
- I praksis tolkes Grunnlovens menneskerettighetsbestemmelser i lys av EMDs praksis, slik at vernet i Grunnloven sjelden er svakere enn i EMK.`,
    },
    {
      id: 'rtl2-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Når ble Grunnlovens kapittel E om menneskerettigheter innført?',
        options: [
          { id: 'a', text: '1814', isCorrect: false },
          { id: 'b', text: '1948', isCorrect: false },
          { id: 'c', text: '1999', isCorrect: false },
          { id: 'd', text: '2014', isCorrect: true },
        ],
        solution: 'Grunnlovens kapittel E om menneskerettigheter ble innført ved den store grunnlovsrevisjonen i 2014. Revisjonen samlet og forsterket menneskerettighetsvernet i Grunnloven. Bestemmelsene er utformet etter mønster av EMK og FN-konvensjonene.',
      },
    },

    // SUMMARY
    {
      id: 'rtl2-1-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Menneskerettigheter** er grunnleggende rettigheter som alle har i kraft av å være menneske. De deles inn i sivile/politiske og økonomiske/sosiale/kulturelle rettigheter.
- **EMK** er den viktigste menneskerettighetskonvensjonen i Europa. Krenkelser kan klages inn for **EMD** i Strasbourg, og dommene er bindende.
- FN har vedtatt sentrale konvensjoner: **SP**, **ØSK**, **barnekonvensjonen**, **kvinnekonvensjonen**, med flere.
- **Menneskerettsloven** (1999) inkorporerer EMK, SP, ØSK, barnekonvensjonen og kvinnekonvensjonen i norsk rett med **forrang** foran vanlige lover.
- **Grunnlovens kapittel E** (2014) forankrer menneskerettighetene i Norges høyeste rettskilde. Bestemmelsene tolkes i lys av EMK og FN-konvensjonene.
- Menneskerettighetene setter grenser for hva staten kan gjøre, og sikrer at den enkelte borger har et minimumsvern selv mot demokratisk vedtatte lover.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'rtl2-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om menneskerettighetene gir et sterkt nok vern for borgerne i Norge. Trekk inn minst to konkrete rettskilder (f.eks. EMK, menneskerettsloven, Grunnloven) og vurder hvordan de virker sammen.',
        hints: [
          'Tenk på det «doble» vernet: Både Grunnloven og EMK beskytter de samme rettighetene.',
          'Vurder hva menneskerettsloven § 3 om forrang betyr i praksis.',
          'Du kan også trekke inn eksempler fra EMD-praksis.',
        ],
        solution: 'Norge har et flerdimensjonalt menneskerettighetsvern: Grunnlovens kapittel E forankrer rettighetene på konstitusjonelt nivå, menneskerettsloven § 3 gir EMK og andre konvensjoner forrang foran vanlige lover, og EMD fungerer som overnasjonalt kontrollorgan. Dette gir borgerne et sterkt vern. Styrken ligger i at rettighetene er beskyttet på flere nivåer samtidig – selv om Stortinget vedtar en lov som krenker menneskerettighetene, kan domstolene sette den til side med hjemmel i Grunnloven eller menneskerettsloven. EMD-praksis har også ført til endringer i norsk rett, blant annet i barnevernssakene. Svakheter kan være at økonomiske og sosiale rettigheter (ØSK) i praksis er vanskelige å håndheve gjennom domstolene.',
      },
    },
    {
      id: 'rtl2-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Velg én menneskerettighet fra EMK og forklar: (a) hva rettigheten innebærer, (b) i hvilke situasjoner staten kan begrense den, og (c) hvorfor den er viktig for demokrati og rettsstat.',
        hints: [
          'EMK artikkel 10 (ytringsfrihet) eller artikkel 8 (privatliv) egner seg godt.',
          'Husk at de fleste rettigheter kan begrenses dersom inngrepet er hjemlet i lov, nødvendig og forholdsmessig.',
        ],
        solution: 'Eksempel: EMK artikkel 10 – ytringsfrihet. (a) Rettigheten innebærer frihet til å ha meninger og motta og meddele opplysninger og ideer uten inngrep fra myndighetene. Den omfatter pressefrihet og kunstnerisk frihet. (b) Ytringsfriheten kan begrenses dersom begrensningen er foreskrevet ved lov, forfølger et legitimt formål (f.eks. vern av andres omdømme, forebygging av kriminalitet) og er nødvendig i et demokratisk samfunn. Eksempler: forbud mot hatefulle ytringer (straffeloven § 185), injurier, og vern av privatlivet. (c) Ytringsfriheten er grunnleggende for demokratiet fordi den muliggjør fri debatt, kontroll med myndighetene og informert politisk deltakelse. Uten ytringsfrihet kan ikke borgerne holde makthavere ansvarlige.',
      },
    },
    {
      id: 'rtl2-1-5-oppg-7',
      type: 'exercise',
      exercise: {
        id: 'rtl2-1-5-oppg-7',
        number: '7',
        type: 'classic',
        task: 'Menneskerettighetene ble først og fremst utviklet for å beskytte individer mot overgrep fra staten. Drøft om de også bør beskytte individer mot overgrep fra andre private aktorer, for eksempel store teknologiselskaper. Begrunn synspunktet ditt.',
        hints: [
          'Tenk på statens plikt til å beskytte borgerne (positive forpliktelser).',
          'Vurder om teknologiselskaper kan ha makt over individer som ligner statens makt.',
        ],
        solution: 'Tradisjonelt beskytter menneskerettighetene borgeren mot staten (vertikal virkning). Imidlertid har EMD utviklet en lære om «positive forpliktelser»: Staten har plikt til å beskytte borgernes rettigheter også mot inngrep fra private aktorer. Store teknologiselskaper kontrollerer i dag viktige plattformer for ytringsfrihet, samler enorme mengder persondata og kan i praksis utøve makt over individer som minner om statsmakt. Argumenter for utvidet vern: Ytringsfrihet og personvern er truet dersom private aktorer kan begrense dem uten rettslig kontroll. Argumenter mot: Menneskerettighetene er designet for stater, og utvidelse kan undergrave avtalefrihet og bedrifters autonomi. En mellomposisjon er at staten har plikt til å regulere private aktører slik at menneskerettighetene ivaretas – noe som er utgangspunktet for personvernforordningen (GDPR).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Menneskerettigheter', definition: 'Grunnleggende rettigheter og friheter som alle har i kraft av å være menneske.' },
    { term: 'EMK', definition: 'Den europeiske menneskerettskonvensjon – vedtatt i 1950, Europas viktigste menneskerettighetskonvensjon.' },
    { term: 'EMD', definition: 'Den europeiske menneskerettsdomstolen i Strasbourg – behandler klager på brudd på EMK.' },
    { term: 'Menneskerettsloven', definition: 'Norsk lov fra 1999 som inkorporerer EMK og FN-konvensjoner med forrang foran annen lovgivning.' },
    { term: 'Grunnlovens kapittel E', definition: 'Menneskerettighetskapittelet i Grunnloven, innført ved grunnlovsrevisjonen i 2014.' },
    { term: 'SP', definition: 'FNs konvensjon om sivile og politiske rettigheter (1966).' },
    { term: 'ØSK', definition: 'FNs konvensjon om økonomiske, sosiale og kulturelle rettigheter (1966).' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const RETTSLAERE_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_1_1,
  CHAPTER_RETTSLAERE_2_1_2,
  CHAPTER_RETTSLAERE_2_1_3,
  CHAPTER_RETTSLAERE_2_1_4,
  CHAPTER_RETTSLAERE_2_1_5,
];

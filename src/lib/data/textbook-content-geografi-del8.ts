/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 8: Geopolitikk og konflikter
 *
 * Dekker LK20-kompetansemål for geografi
 * Delkapitler 8.1 - 8.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Geopolitikk og maktforhold
// ============================================================================

export const CHAPTER_GEOGRAFI_8_1: TextbookChapter = {
  id: 'geografi-1-8-1',
  courseId: 'geografi',
  chapterNumber: '8.1',
  title: 'Geopolitikk og maktforhold',
  description: 'Hvordan geografi, makt og politikk henger sammen, og hvordan stormakter kjemper om innflytelse i verden.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for geopolitiske maktforhold og hvordan de påvirker konflikter og samarbeid',
    'drøfte hvordan geografi påvirker staters strategiske interesser',
  ],
  content: [
    {
      id: 'geo-8-1-intro',
      type: 'text',
      content: `# Geopolitikk og maktforhold

Geografi handler ikke bare om fjell, elver og klimasoner. Hvor landegrenser går, hvem som kontrollerer strategiske havområder, og hvem som har tilgang til viktige ressurser — alt dette er **geopolitikk**. I dette kapittelet skal vi se på hvordan geografi og makt henger sammen, og hvorfor noen stater har større innflytelse enn andre.

## Hva er geopolitikk?

Geopolitikk er studiet av hvordan **geografiske forhold** påvirker politisk makt og internasjonale relasjoner. Beliggenhet, naturressurser, klima og tilgang til havet har alltid vært avgjørende faktorer for staters makt og innflytelse.

Begrepet ble først brukt av den svenske statsviteren Rudolf Kjellén rundt 1900, men geopolitisk tenkning har eksistert mye lenger. Allerede i antikken forstod man at kontroll over strategiske landområder og sjøruter ga makt.`,
    },
    {
      id: 'geo-8-1-def-geopolitikk',
      type: 'definition',
      title: 'Geopolitikk',
      content: 'Geopolitikk er studiet av sammenhengen mellom geografi og politisk makt. Fagfeltet analyserer hvordan geografiske faktorer som beliggenhet, naturressurser, topografi og klima påvirker staters utenrikspolitikk, maktforhold og internasjonale konflikter.',
    },
    {
      id: 'geo-8-1-stormakter',
      type: 'text',
      content: `## Stormakter og innflytelsessfærer

Verdens geopolitiske landskap domineres av noen få stormakter som har global rekkevidde. Disse statene har stor økonomisk, militær og diplomatisk makt, og de konkurrerer om innflytelse i ulike deler av verden.

### USA
- Verdens største økonomi og militærmakt
- Tilstedeværelse med militærbaser i over 70 land
- Dominerer verdens hav med en overlegen marine
- Leder den vestlige sikkerhetsalliansen NATO

### Kina
- Verdens nest største økonomi, raskest voksende stormakt
- Belt and Road Initiative (BRI) — massiv infrastrukturinvestering i over 140 land
- Territorialkrav i Sør-Kinahavet
- Økende militær modernisering og romfartsprogram

### Russland
- Verdens største land i areal med enorme naturressurser
- Sterk militærmakt med verdens største atomvåpenarsenal
- Innflytelse i tidligere sovjetstater og Midtøsten
- Bruker energieksport (olje og gass) som geopolitisk virkemiddel

### EU
- Verdens største indre marked med over 440 millioner innbyggere
- Økonomisk stormakt, men delt utenriks- og sikkerhetspolitikk
- Normativ makt — påvirker gjennom regler, standarder og verdier
- Utfordret av indre uenigheter og ytre press`,
    },
    {
      id: 'geo-8-1-def-innflytelsessfaere',
      type: 'definition',
      title: 'Innflytelsessfære',
      content: 'En innflytelsessfære er et geografisk område der en stormakt har dominerende politisk, økonomisk eller militær innflytelse. Begrepet stammer fra kolonitiden, men brukes fortsatt for å beskrive uformelle maktstrukturer i dagens verden.',
    },
    {
      id: 'geo-8-1-nato',
      type: 'text',
      content: `## NATO og militære allianser

**NATO** (North Atlantic Treaty Organization) ble grunnlagt i 1949 som et forsvarsforbund mot Sovjetunionen. Etter den kalde krigens slutt har alliansen utvidet seg østover og tatt på seg nye oppgaver.

### NATOs kjerneprinsipp
Artikkel 5 i NATO-pakten sier at et angrep på ett medlemsland er et angrep på alle. Dette prinsippet om kollektivt forsvar er grunnpilaren i alliansen.

### Utvidelse og spenning
NATOs utvidelse østover — med nye medlemmer som Polen, de baltiske statene, og senest Finland og Sverige — har ført til økt spenning med Russland. Russland ser utvidelsen som en trussel mot sin sikkerhet, mens NATO-landene mener alle stater har rett til å velge sin egen sikkerhetspolitikk.

### Andre allianser
- **CSTO**: Russland-ledede sikkerhetsorganisasjon med flere tidligere sovjetstater
- **AUKUS**: Sikkerhetspartnerskap mellom Australia, Storbritannia og USA
- **Quad**: Strategisk dialog mellom USA, Japan, India og Australia`,
    },
    {
      id: 'geo-8-1-grenser',
      type: 'text',
      content: `## Grenser og territorialkonflikter

Landegrenser er ikke naturlige — de er menneskeskapte og ofte resultat av historiske hendelser, kriger eller koloniale avtaler. Mange av verdens pågående konflikter handler om omstridte grenser og territorier.

### Typer grenser
- **Naturlige grenser**: Følger elver, fjellkjeder eller kystlinjer
- **Geometriske grenser**: Rette linjer trukket på kart (vanlig i Afrika og Midtøsten)
- **Kulturelle grenser**: Følger språklige eller etniske skillelinjer

### Eksempler på territorialkonflikter
- **Kashmir**: Omstridt område mellom India og Pakistan siden 1947
- **Sør-Kinahavet**: Kina hevder rettigheter over nesten hele havområdet, noe nabolandene bestrider
- **Golanhøydene**: Okkupert av Israel, krevd av Syria
- **Vestbredden og Gaza**: Kjernen i den israelsk-palestinske konflikten`,
    },
    {
      id: 'geo-8-1-example',
      type: 'example',
      title: 'Sør-Kinahavet som geopolitisk brennpunkt',
      problem: 'Forklar hvorfor Sør-Kinahavet er et av verdens mest omstridte havområder.',
      solution: `**Sør-Kinahavet — geopolitisk analyse:**

1. **Strategisk beliggenhet**: Rundt en tredjedel av verdens skipstrafikk passerer gjennom dette havområdet
2. **Naturressurser**: Store forekomster av olje, gass og rike fiskebestander
3. **Kinas krav**: Kina hevder historiske rettigheter over nesten hele havområdet («ni-strek-linjen»)
4. **Motkrav**: Vietnam, Filippinene, Malaysia, Brunei og Taiwan har overlappende krav
5. **Militarisering**: Kina har bygget kunstige øyer med militærbaser
6. **USAs rolle**: USA sender marinefartøy for å hevde fritt ferdsel

**Internasjonal rett**: Den permanente voldgiftsdomstolen i Haag avviste i 2016 Kinas krav, men Kina anerkjenner ikke kjennelsen.`,
    },
    {
      id: 'geo-8-1-maktfaktorer',
      type: 'text',
      content: `## Hva gir geopolitisk makt?

En stats geopolitiske makt avhenger av flere faktorer:

| Faktor | Eksempel |
|--------|----------|
| **Beliggenhet** | Kontroll over strategiske sund og sjøruter |
| **Naturressurser** | Tilgang til olje, gass, mineraler og ferskvann |
| **Befolkning** | Stor arbeidsstyrke og forbrukermarked |
| **Militær kapasitet** | Hærstyrker, marine, atomvåpen |
| **Økonomi** | BNP, handel, teknologisk utvikling |
| **Myk makt** | Kultur, diplomati, internasjonale organisasjoner |

I det 21. århundret har **teknologi** og **informasjon** blitt stadig viktigere maktfaktorer. Kontroll over data, kunstig intelligens og cyberkapasitet er den nye geopolitiske arenaen.`,
    },
    {
      id: 'geo-8-1-multipolar',
      type: 'text',
      content: `## Fra bipolar til multipolar verden

Under den kalde krigen (1947–1991) var verden **bipolar** — dominert av to supermakter: USA og Sovjetunionen. Etter Sovjetunionens fall ble verden en kort periode **unipolar**, med USA som eneste supermakt.

I dag beveger vi oss mot en **multipolar** verden der flere stormakter konkurrerer om innflytelse. Kinas framvekst, Russlands selvhevdelse og regionale makters økte rolle gjør at ingen enkelt stat dominerer globalt.

Denne utviklingen skaper både muligheter og farer. Flere maktsentre kan gi bedre representasjon, men øker også risikoen for rivalisering og konflikt.`,
    },
  
    {
      id: 'geo-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Geopolitikk** studerer sammenhengen mellom geografi og politisk makt
- Verdens geopolitiske landskap domineres av stormakter som USA, Kina, Russland og EU
- **NATO** er den viktigste vestlige sikkerhetsalliansen med kollektivt forsvar (Artikkel 5)
- **Innflytelsessfaerer** beskriver omraader der stormakter har dominerende innflytelse
- Geopolitiske spenninger oppstaar ofte rundt strategiske omraader og handelsruter`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva studerer geopolitikk?',
      options: [
        { id: 'a', text: 'Sammenhengen mellom geografi og politisk makt', isCorrect: true },
        { id: 'b', text: 'Jordens geologiske oppbygning', isCorrect: false },
        { id: 'c', text: 'Klimaendringer og deres konsekvenser', isCorrect: false },
        { id: 'd', text: 'Befolkningsvekst i utviklingsland', isCorrect: false },
      ],
      solution: 'Geopolitikk er studiet av hvordan geografiske forhold som beliggenhet, naturressurser og topografi påvirker politisk makt og internasjonale relasjoner.',
    },
    {
      id: 'geo-8-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva sier artikkel 5 i NATO-pakten?',
      options: [
        { id: 'a', text: 'At et angrep på ett medlemsland er et angrep på alle', isCorrect: true },
        { id: 'b', text: 'At alle medlemsland må bruke minst 2 % av BNP på forsvar', isCorrect: false },
        { id: 'c', text: 'At NATO-land ikke kan gå til krig uten FN-mandat', isCorrect: false },
        { id: 'd', text: 'At nye medlemmer må godkjennes av FNs sikkerhetsråd', isCorrect: false },
      ],
      solution: 'Artikkel 5 fastslår prinsippet om kollektivt forsvar: et væpnet angrep mot ett eller flere medlemsland skal betraktes som et angrep mot alle. Dette er NATOs kjerneprinsipp.',
    },
    {
      id: 'geo-8-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for minst tre faktorer som gir en stat geopolitisk makt, og gi eksempler.',
      solution: 'Viktige faktorer for geopolitisk makt inkluderer: (1) Beliggenhet — kontroll over strategiske sund og sjøruter gir makt, slik Tyrkia kontrollerer Bosporus-stredet. (2) Naturressurser — tilgang til olje og gass gir land som Saudi-Arabia og Russland stor innflytelse. (3) Militær kapasitet — store hærstyrker og atomvåpen gir avskrekking, som hos USA, Russland og Kina. (4) Økonomi — et stort BNP og teknologisk utvikling gir makt, som hos USA og Kina. (5) Myk makt — kultur, diplomati og innflytelse i internasjonale organisasjoner.',
    },
    {
      id: 'geo-8-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hva det betyr at verden beveger seg fra en unipolar til en multipolar verdensorden. Hvilke konsekvenser kan dette ha?',
      solution: 'Etter den kalde krigen var verden unipolar med USA som eneste supermakt. Nå vokser Kina som økonomisk og militær makt, Russland hevder seg mer aggressivt, og regionale makter som India, Brasil og Tyrkia får økt innflytelse. Konsekvenser kan være: økt rivalisering mellom stormakter, fare for at internasjonale institusjoner svekkes, flere regionale konflikter der stormakter støtter ulike sider, men også muligheter for at flere stemmer blir hørt i internasjonal politikk. En multipolar verden kan gi bedre maktbalanse, men også mer ustabilitet dersom stormaktene ikke klarer å samarbeide.',
    },
    {
      id: 'geo-8-1-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket land har lansert Belt and Road Initiative (BRI)?',
      options: [
        { id: 'a', text: 'Kina', isCorrect: true },
        { id: 'b', text: 'USA', isCorrect: false },
        { id: 'c', text: 'Russland', isCorrect: false },
        { id: 'd', text: 'India', isCorrect: false },
      ],
      solution: 'Kina lanserte Belt and Road Initiative (BRI), også kalt «den nye silkeveien», som er et massivt infrastrukturprogram med investeringer i over 140 land for å styrke Kinas handelsnettverk og geopolitiske innflytelse.',
    },
  ],
};

// ============================================================================
// Kapittel 8.2: Konflikter om ressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_8_2: TextbookChapter = {
  id: 'geografi-1-8-2',
  courseId: 'geografi',
  chapterNumber: '8.2',
  title: 'Konflikter om ressurser',
  description: 'Hvordan kampen om naturressurser som vann, olje og mineraler fører til konflikter mellom stater og folkegrupper.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere sammenhengen mellom ressurser, makt og konflikter',
    'drøfte hvordan ujevn fordeling av ressurser kan føre til konflikter',
  ],
  content: [
    {
      id: 'geo-8-2-intro',
      type: 'text',
      content: `# Konflikter om ressurser

Gjennom historien har kampen om naturressurser vært en av de viktigste drivkreftene bak konflikter. Vann, olje, gass, mineraler og dyrkbar jord er livsviktige ressurser, og når tilgangen er knapp eller ujevnt fordelt, oppstår spenning. I en verden med voksende befolkning og økende etterspørsel blir ressurskonflikter stadig mer aktuelle.

## Ressurser og makt

Naturressurser gir politisk og økonomisk makt. Land som kontrollerer store forekomster av ettertraktede ressurser, kan bruke dette til å påvirke andre stater. Russlands bruk av gasseksport som pressmiddel overfor Europa er et tydelig eksempel.`,
    },
    {
      id: 'geo-8-2-def-ressursforbannelse',
      type: 'definition',
      title: 'Ressursforbannelsen',
      content: 'Ressursforbannelsen (også kalt «paradox of plenty») er fenomenet der land med store naturressurser ofte har svakere økonomisk vekst, mer korrupsjon og større risiko for konflikter enn land uten slike ressurser. Inntektene konsentreres hos en elite, og det oppstår kamp om kontrollen over ressursene.',
    },
    {
      id: 'geo-8-2-ressursforbannelse',
      type: 'text',
      content: `## Ressursforbannelsen

Det høres paradoksalt ut, men mange land med rike naturressurser sliter med fattigdom, korrupsjon og voldelige konflikter. Dette kalles **ressursforbannelsen**.

### Hvorfor skjer dette?
- **Hollandsk syke**: Ressursinntekter styrker valutaen, som gjør annen industri ukonkurransedyktig
- **Korrupsjon**: Eliter kaprer ressursinntektene, og det oppstår «rent-seeking»
- **Svake institusjoner**: Statens inntekter kommer fra ressurser, ikke skatter, noe som reduserer ansvarliggjøring
- **Væpnet konflikt**: Opprørsgrupper finansierer seg gjennom kontroll over ressurser

### Eksempler
- **Nigeria**: Verdens sjuende største oljeprodusent, men stor fattigdom og uro i Nigerdeltaet
- **Den demokratiske republikken Kongo**: Rike mineralforekomster, men tiår med væpnet konflikt
- **Venezuela**: Verdens største oljereserver, men økonomisk kollaps og politisk krise`,
    },
    {
      id: 'geo-8-2-vannkonflikter',
      type: 'text',
      content: `## Konflikter om vann

Vann er den mest grunnleggende ressursen for mennesker, og tilgangen til ferskvann er svært ujevnt fordelt. Rundt 40 % av verdens befolkning bor i nedbørfattige områder, og mange elver krysser landegrenser. Dette skaper grobunn for konflikter.

### Nilen — livsnerven til 11 land
Nilen er verdens lengste elv og livsviktig for Egypt, Sudan og Etiopia. Konflikten om Nilens vann har økt etter at Etiopia begynte å bygge **Grand Ethiopian Renaissance Dam (GERD)** — en av verdens største demninger.

- **Etiopia** mener dammen er nødvendig for økonomisk utvikling og strømproduksjon
- **Egypt** frykter at dammen vil redusere vannmengden nedstrøms og true landbruk og drikkevann
- **Sudan** er delt, men ser både fordeler og ulemper

### Jordanelven
Jordanelven deles mellom Israel, Jordan, Syria, Libanon og de palestinske områdene. Vannfordelingen er svært ulik, og Israel kontrollerer mesteparten av vannet. Vannmangel forverrer den eksisterende konflikten i regionen.`,
    },
    {
      id: 'geo-8-2-def-vannstress',
      type: 'definition',
      title: 'Vannstress',
      content: 'Vannstress oppstår når et område har mindre enn 1 700 kubikkmeter tilgjengelig ferskvann per person per år. Under 1 000 kubikkmeter kalles vannknapphet. I dag lever rundt 2 milliarder mennesker i land med vannstress.',
    },
    {
      id: 'geo-8-2-olje-gass',
      type: 'text',
      content: `## Konflikter om olje og gass

Olje og gass har vært blant de viktigste drivkreftene bak geopolitiske konflikter i over hundre år. Kontroll over energiressurser gir enorm økonomisk og politisk makt.

### Midtøsten — oljerikdommens forbannelse
Midtøsten har rundt halvparten av verdens kjente oljereserver. Regionen har vært preget av konflikter der olje spiller en sentral rolle:
- **Golfkrigen 1991**: Irak invaderte Kuwait, delvis motivert av Kuwaits oljerikdom
- **Irakkrigen 2003**: Kontroll over Iraks oljeressurser var en del av det geopolitiske bildet
- **OPEC**: Organisasjonen av oljeeksporterende land bruker produksjonskvoter som maktmiddel

### Energi som våpen
Russlands invasjon av Ukraina i 2022 viste tydelig hvordan energi kan brukes som geopolitisk våpen. Russland kuttet gassleveranser til Europa, som var sterkt avhengig av russisk gass. Dette førte til en energikrise og tvang Europa til å endre sin energipolitikk.`,
    },
    {
      id: 'geo-8-2-mineraler',
      type: 'text',
      content: `## Mineraler og sjeldne jordarter

I det 21. århundret har kampen om **sjeldne jordarter** og **kritiske mineraler** blitt en ny geopolitisk arena. Disse mineralene er avgjørende for grønn teknologi, elektronikk og forsvarsindustri.

### Hva er sjeldne jordarter?
Sjeldne jordarter er en gruppe på 17 grunnstoffer som brukes i alt fra mobiltelefoner og elbilbatterier til vindturbiner og militærutstyr. Til tross for navnet er de ikke spesielt sjeldne, men forekomstene er konsentrert i få land.

### Kinas dominans
Kina kontrollerer rundt 60 % av verdens utvinning og over 85 % av foredlingen av sjeldne jordarter. Denne dominansen gir Kina et kraftig geopolitisk virkemiddel. I 2010 begrenset Kina eksporten av sjeldne jordarter til Japan under en diplomatisk krise.

### Kobolt og litium
- **Kobolt**: Over 70 % utvinnes i Den demokratiske republikken Kongo, ofte under umenneskelige forhold
- **Litium**: Avgjørende for batteriteknologi. De største forekomstene finnes i «litiumtriangelet» (Chile, Argentina, Bolivia) og i Australia`,
    },
    {
      id: 'geo-8-2-example',
      type: 'example',
      title: 'Ressurskonflikten i Kongo',
      problem: 'Forklar hvordan mineraler har bidratt til konflikt i Den demokratiske republikken Kongo.',
      solution: `**Konflikten i Kongo — en ressursdrevet tragedie:**

1. **Rike ressurser**: Kongo har enorme forekomster av kobolt, koltan, gull, diamanter og tinn
2. **Væpnede grupper**: Opprørsgrupper og militser finansierer seg ved å kontrollere gruver
3. **Utnyttelse**: Gruvene driftes ofte med barnearbeid og under farlige forhold
4. **Internasjonal etterspørsel**: Global etterspørsel etter mineraler til elektronikk driver konflikten
5. **Svake institusjoner**: Staten klarer ikke å kontrollere hele territoriet eller ressursene
6. **Naboland**: Rwanda og Uganda har vært involvert i konflikten, delvis motivert av tilgang til mineraler

**Konsekvenser**: Millioner har mistet livet, og konflikten har skapt en av verdens verste humanitære kriser.`,
    },
    {
      id: 'geo-8-2-losninger',
      type: 'text',
      content: `## Veier til løsning

Ressurskonflikter kan forebygges og løses gjennom internasjonalt samarbeid og bedre forvaltning:

- **Transparens**: Åpenhet om ressursinntekter gjennom initiativer som EITI (Extractive Industries Transparency Initiative)
- **Vannsamarbeid**: Internasjonale avtaler om deling av grenseoverskridende vannressurser
- **Diversifisering**: Land bør bygge opp annen industri for å redusere avhengigheten av én ressurs
- **Sertifisering**: Ordninger som «konfliktfrie mineraler» skal sikre at mineraler ikke finansierer krig
- **Fornybar energi**: Overgang fra fossile brensler kan redusere konflikter knyttet til olje og gass`,
    },
  
    {
      id: 'geo-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Ressurskonflikter oppstaar naar det er konkurranse om knappe naturressurser
- **Vannkonflikter** er utbredt i Midtosten og Nord-Afrika der elver krysser landegrenser
- **Ressursforbannelsen** beskriver paradokset der ressursrike land ofte har svak utvikling
- **Sjeldne jordarter** er kritiske for moderne teknologi og skaper ny geopolitisk konkurranse
- Klimaendringer kan forsterke ressurskonflikter gjennom oekt knapphet`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med ressursforbannelsen?',
      options: [
        { id: 'a', text: 'At land med store naturressurser ofte har svakere utvikling og mer konflikt', isCorrect: true },
        { id: 'b', text: 'At naturressurser er i ferd med å ta slutt', isCorrect: false },
        { id: 'c', text: 'At alle land med olje opplever borgerkrig', isCorrect: false },
        { id: 'd', text: 'At ressurser er forbeholdt de rikeste landene', isCorrect: false },
      ],
      solution: 'Ressursforbannelsen beskriver det paradoksale fenomenet at land med store naturressurser ofte har svakere økonomisk utvikling, mer korrupsjon og høyere risiko for konflikt enn land uten slike ressurser.',
    },
    {
      id: 'geo-8-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedkonflikten mellom Egypt og Etiopia knyttet til?',
      options: [
        { id: 'a', text: 'Etiopias bygging av en stor demning i Nilen (GERD)', isCorrect: true },
        { id: 'b', text: 'Grensekonflikter i ørkenen mellom landene', isCorrect: false },
        { id: 'c', text: 'Oljeressurser i Rødehavet', isCorrect: false },
        { id: 'd', text: 'Religiøse motsetninger', isCorrect: false },
      ],
      solution: 'Konflikten handler om Grand Ethiopian Renaissance Dam (GERD). Etiopia bygger dammen for strømproduksjon, mens Egypt frykter at den vil redusere vannmengden nedstrøms i Nilen, som er livsviktig for egyptisk landbruk.',
    },
    {
      id: 'geo-8-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor sjeldne jordarter har blitt et viktig geopolitisk tema i det 21. århundret.',
      solution: 'Sjeldne jordarter er avgjørende for moderne teknologi som mobiltelefoner, elbiler, vindturbiner og militærutstyr. Kina kontrollerer rundt 60 % av utvinningen og over 85 % av foredlingen, noe som gir landet et kraftig geopolitisk virkemiddel. Andre land er blitt avhengige av kinesisk forsyning, og dette skaper sårbarhet. Kina har tidligere begrenset eksporten som pressmiddel i diplomatiske konflikter. Derfor satser mange land nå på å utvikle egne forsyningskjeder for å redusere avhengigheten.',
    },
    {
      id: 'geo-8-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft påstanden: «Overgang til fornybar energi vil fjerne ressurskonflikter.»',
      solution: 'Overgangen til fornybar energi kan redusere konflikter knyttet til olje og gass, fordi sol og vind er tilgjengelig overalt. Men det vil ikke fjerne alle ressurskonflikter. Fornybar teknologi krever mineraler som litium, kobolt og sjeldne jordarter, som er konsentrert i få land. Dette kan skape nye konflikter. Vannkonflikter vil fortsette og muligens forverres med klimaendringer. Kampen om dyrkbar jord vil også tilta med befolkningsvekst. Overgangen kan altså endre hvilke ressurser det kjempes om, men ikke nødvendigvis fjerne konflikter.',
    },
    {
      id: 'geo-8-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket land har den dominerende posisjonen innen foredling av sjeldne jordarter?',
      options: [
        { id: 'a', text: 'Kina', isCorrect: true },
        { id: 'b', text: 'USA', isCorrect: false },
        { id: 'c', text: 'Australia', isCorrect: false },
        { id: 'd', text: 'Brasil', isCorrect: false },
      ],
      solution: 'Kina kontrollerer over 85 % av verdens foredling av sjeldne jordarter, i tillegg til rundt 60 % av utvinningen. Denne dominansen gir Kina betydelig geopolitisk makt.',
    },
  ],
};

// ============================================================================
// Kapittel 8.3: Arktis og Antarktis
// ============================================================================

export const CHAPTER_GEOGRAFI_8_3: TextbookChapter = {
  id: 'geografi-1-8-3',
  courseId: 'geografi',
  chapterNumber: '8.3',
  title: 'Arktis og Antarktis',
  description: 'Polarområdenes geografi, ressurser og geopolitiske betydning, samt Norges spesielle rolle i Arktis.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for geopolitiske interesser og utfordringer i polarområdene',
    'drøfte klimaendringenes konsekvenser for Arktis og Antarktis',
  ],
  content: [
    {
      id: 'geo-8-3-intro',
      type: 'text',
      content: `# Arktis og Antarktis

Polarområdene er blant de siste store villmarksområdene på jorden. De er avgjørende for verdens klima, hjem for unike økosystemer, og i økende grad arena for geopolitisk rivalisering. Klimaendringene gjør disse områdene mer tilgjengelige, noe som åpner for nye sjøruter og ressursutvinning — men også nye konflikter.

## Polarområdenes geografi

### Arktis
- Polhavet omgitt av landmasser (Russland, Canada, USA, Norge, Danmark/Grønland)
- Dekket av havis som krymper stadig raskere
- Hjem for urfolk som inuitter, samer og andre arktiske folkegrupper
- Rike naturressurser under havbunnen

### Antarktis
- Et kontinent (landmasse) dekket av verdens største iskappe
- Omgitt av Sørishavet
- Ingen permanent befolkning — kun forskningsstasjoner
- Styrt av Antarktistraktaten`,
    },
    {
      id: 'geo-8-3-def-arktis',
      type: 'definition',
      title: 'Arktis',
      content: 'Arktis defineres vanligvis som området nord for polarsirkelen (66°33\'N), men kan også avgrenses av 10 °C-isotermen for juli — linjen der gjennomsnittstemperaturen i varmeste måned er 10 °C. Området omfatter Polhavet, nordlige deler av Russland, Canada, USA (Alaska), Norge, Finland, Sverige, Island og Grønland.',
    },
    {
      id: 'geo-8-3-arktis-ressurser',
      type: 'text',
      content: `## Arktis: ressurser og territorialkrav

Arktis rommer enorme naturressurser som blir stadig mer tilgjengelige etter hvert som isen smelter.

### Ressurser
- **Olje og gass**: Anslagsvis 13 % av verdens uoppdagede oljeressurser og 30 % av uoppdaget naturgass finnes i Arktis
- **Mineraler**: Sjeldne jordarter, sink, bly, gull og diamanter
- **Fiskeressurser**: Nye fiskefelt åpner seg når isen trekker seg tilbake
- **Sjøruter**: Nordøstpassasjen langs Russland og Nordvestpassasjen gjennom Canada kan bli viktige handelsruter

### Territorialkrav
Fem stater har kystlinje mot Polhavet og gjør krav på deler av den arktiske havbunnen:
- **Russland**: Har det største arktiske territoriet og hevder rettigheter ut til Nordpolen gjennom Lomonosov-ryggen
- **Canada**: Hevder rettigheter over Nordvestpassasjen
- **Danmark/Grønland**: Gjør krav på havbunnen nord for Grønland
- **Norge**: Har gjort krav basert på kontinentalsokkelen i Norskehavet og Barentshavet
- **USA (Alaska)**: Har kyst mot Polhavet, men har ikke ratifisert FNs havrettskonvensjon`,
    },
    {
      id: 'geo-8-3-antarktis',
      type: 'text',
      content: `## Antarktistraktaten

Antarktis styres av et unikt internasjonalt avtaleverk — **Antarktistraktaten** fra 1959. Denne traktaten er et sjeldent eksempel på vellykket internasjonalt samarbeid om et stort område.

### Hovedprinsipper
- Antarktis skal kun brukes til **fredelige formål**
- **Vitenskapelig forskning** skal være fri og resultater deles
- **Militær aktivitet** og atomprøvesprengninger er forbudt
- Territorielle krav er **frosset** (verken anerkjent eller avvist)
- **Miljøprotokollen** (Madrid-protokollen 1991) forbyr mineralutvinning i minst 50 år

### Utfordringer
- Flere land (bl.a. Argentina, Chile, Storbritannia, Norge) har overlappende krav
- Kina og Russland bygger nye forskningsstasjoner i strategiske posisjoner
- Forbudet mot mineralutvinning kan komme under press når ressursene andre steder blir knappere`,
    },
    {
      id: 'geo-8-3-def-havrett',
      type: 'definition',
      title: 'FNs havrettskonvensjon (UNCLOS)',
      content: 'FNs havrettskonvensjon fra 1982 regulerer staters rettigheter til havområder. Kyststater har suverenitet over territorialfarvannet (12 nautiske mil), enerett til ressurser i den eksklusive økonomiske sonen (200 nautiske mil), og kan gjøre krav på kontinentalsokkelen utover dette dersom geologiske forhold tilsier det.',
    },
    {
      id: 'geo-8-3-klima',
      type: 'text',
      content: `## Klimaendringer i polarområdene

Polarområdene varmes opp to til fire ganger raskere enn det globale gjennomsnittet. Dette har dramatiske konsekvenser.

### Arktis
- Sommerisen i Polhavet har krympet med over 40 % siden 1979
- Permafrosten tiner, noe som frigjør metangass og truer infrastruktur
- Økosystemer endres — isbjørn og andre arter mister leveområder
- Nye sjøruter åpner seg og gjør regionen mer tilgjengelig

### Antarktis
- Iskappen i Vest-Antarktis er ustabil og kan bidra til flere meters havnivåstigning
- Isbremmene bryter opp — store isfjell løsner stadig oftere
- Havtemperaturen stiger og påvirker krill, som er grunnlaget for hele det antarktiske økosystemet

### Tilbakekoblingsmekanismer
- **Is-albedo-effekten**: Når is smelter, erstattes hvite flater med mørkt hav som absorberer mer varme, som smelter mer is
- **Permafrost-tilbakekobling**: Tining av permafrost frigjør metan og CO₂, som øker oppvarmingen ytterligere`,
    },
    {
      id: 'geo-8-3-svalbard',
      type: 'text',
      content: `## Svalbard og Norges arktiske rolle

Norge er en av verdens viktigste arktiske nasjoner. Svalbard har en helt spesiell folkerettslig status som gjør øygruppen til et unikt geopolitisk tilfelle.

### Svalbardtraktaten (1920)
- Gir Norge **suverenitet** over Svalbard
- Alle traktatlandene (over 40 stater) har rett til å drive næringsvirksomhet på øygruppen
- Norge kan ikke bruke Svalbard til krigsformål
- Norge har forvaltningsansvar, inkludert miljøvern

### Russisk tilstedeværelse
Russland har et gruvesamfunn i **Barentsburg** og har historisk vært den nest viktigste aktøren på Svalbard. Forholdet mellom Norge og Russland om Svalbard har vært preget av samarbeid, men også perioder med spenning.

### Norges nordområdestrategi
Norge prioriterer nordområdene høyt i sin utenriks- og sikkerhetspolitikk:
- Forvaltning av rike fiskeressurser i Barentshavet
- Petroleumsvirksomhet i nordlige havområder
- Militær tilstedeværelse og overvåking
- Samarbeid med Russland om fiskeri og søk og redning`,
    },
    {
      id: 'geo-8-3-example',
      type: 'example',
      title: 'Nordøstpassasjen som handelsrute',
      problem: 'Vurder fordelene og ulempene ved Nordøstpassasjen som handelsrute mellom Europa og Asia.',
      solution: `**Nordøstpassasjen — fordeler og ulemper:**

**Fordeler:**
1. **Kortere avstand**: Sjøveien fra Rotterdam til Yokohama er ca. 40 % kortere via Nordøstpassasjen enn via Suezkanalen
2. **Tidsbesparelse**: Seilingstiden reduseres med opptil to uker
3. **Drivstoffbesparelse**: Kortere distanse gir lavere drivstoffkostnader og utslipp
4. **Ingen flaskehalser**: Unngår trange stred som Suezkanalen og Malakkastredet

**Ulemper:**
1. **Isforhold**: Selv om isen smelter, er ruten bare farbar noen måneder i året
2. **Isbryterbehov**: Skip trenger ofte isbryterfølge, som er dyrt
3. **Russisk kontroll**: Russland krever avgifter og regulerer trafikken
4. **Mangelfull infrastruktur**: Få havner og begrensede redningsressurser langs ruten
5. **Miljørisiko**: Et oljeutslipp i Arktis ville være svært vanskelig å rydde opp`,
    },
    {
      id: 'geo-8-3-fremtid',
      type: 'text',
      content: `## Polarområdenes framtid

Framtiden til polarområdene avhenger av flere faktorer:

- **Klimapolitikk**: Hvor mye verden klarer å begrense oppvarmingen, avgjør hvor raskt isen forsvinner
- **Internasjonalt samarbeid**: Om stater velger samarbeid eller rivalisering i kampen om ressursene
- **Urfolks rettigheter**: Om urfolk får medbestemmelse i utviklingen av sine hjemområder
- **Miljøvern**: Om det økonomiske presset for ressursutvinning kan balanseres mot behovet for å beskytte unike økosystemer

Arktisk råd, der alle åtte arktiske stater er medlemmer, har vært et viktig forum for samarbeid. Men rådet har vært svekket siden Russland ble suspendert etter invasjonen av Ukraina i 2022.`,
    },
  
    {
      id: 'geo-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Arktis** er et havomraade omgitt av land, mens **Antarktis** er et kontinent omgitt av hav
- Klimaendringer pavirker polaromraadene kraftig med issmelting, tinende permafrost og artstrussel
- **Svalbardtraktaten** gir Norge suverenitet over Svalbard med visse begrensninger
- **Antarktistraktaten** freder Antarktis for vitenskapelig forskning og forbyr militaer aktivitet
- Nordoeststpassasjen og Nordvestpassasjen aapner nye sjoruter naar isen smelter`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva forbyr Antarktistraktaten?',
      options: [
        { id: 'a', text: 'Militær aktivitet og atomprøvesprengninger', isCorrect: true },
        { id: 'b', text: 'All menneskelig aktivitet', isCorrect: false },
        { id: 'c', text: 'Turisme og forskning', isCorrect: false },
        { id: 'd', text: 'Fiske i Sørishavet', isCorrect: false },
      ],
      solution: 'Antarktistraktaten fra 1959 slår fast at Antarktis kun skal brukes til fredelige formål. Militær aktivitet og atomprøvesprengninger er forbudt. Vitenskapelig forskning er derimot tillatt og oppmuntres.',
    },
    {
      id: 'geo-8-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gir Svalbardtraktaten Norge?',
      options: [
        { id: 'a', text: 'Suverenitet over Svalbard, men med begrensninger', isCorrect: true },
        { id: 'b', text: 'Full og ubegrenset suverenitet over Svalbard', isCorrect: false },
        { id: 'c', text: 'Delt suverenitet med Russland', isCorrect: false },
        { id: 'd', text: 'Midlertidig forvaltningsansvar på vegne av FN', isCorrect: false },
      ],
      solution: 'Svalbardtraktaten fra 1920 gir Norge suverenitet over Svalbard, men med begrensninger. Alle traktatlandene har rett til næringsvirksomhet, og Norge kan ikke bruke Svalbard til krigsformål. Norge har forvaltningsansvar, inkludert miljøvern.',
    },
    {
      id: 'geo-8-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva is-albedo-effekten er, og hvorfor den er viktig for klimaendringene i Arktis.',
      solution: 'Is-albedo-effekten er en positiv tilbakekoblingsmekanisme: Når havis smelter, erstattes hvite isflater (som reflekterer mye sollys) med mørkt hav (som absorberer mye sollys). Den økte absorpsjonen av solenergi fører til mer oppvarming, som smelter enda mer is. Dette er en av grunnene til at Arktis varmes opp mye raskere enn resten av verden — en selvforsterkende prosess som akselererer klimaendringene i polarområdene.',
    },
    {
      id: 'geo-8-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om det bør åpnes for mineralutvinning i Antarktis når Madrid-protokollen kommer opp til revisjon.',
      solution: 'Argumenter for åpning: Verden trenger mineraler til grønn teknologi, og Antarktis kan ha store forekomster av viktige ressurser. Teknologien kan bli bedre til å utvinne med mindre miljøpåvirkning. Argumenter mot: Antarktis har unike og sårbare økosystemer som kan ødelegges. Utvinning i et så ekstremt miljø ville innebære stor risiko for miljøkatastrofer. Antarktis fungerer som verdens siste store villmark og har stor vitenskapelig verdi. En åpning kan utløse et geopolitisk kappløp. Føre-var-prinsippet tilsier at forbudet bør videreføres — kostnadene ved miljøødeleggelse kan være irreversible.',
    },
    {
      id: 'geo-8-3-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye av verdens uoppdagede naturgass anslås å finnes i Arktis?',
      options: [
        { id: 'a', text: 'Ca. 30 %', isCorrect: true },
        { id: 'b', text: 'Ca. 5 %', isCorrect: false },
        { id: 'c', text: 'Ca. 60 %', isCorrect: false },
        { id: 'd', text: 'Ca. 80 %', isCorrect: false },
      ],
      solution: 'Ifølge anslag finnes rundt 30 % av verdens uoppdagede naturgass og 13 % av uoppdaget olje i Arktis. Disse ressursene blir mer tilgjengelige etter hvert som isen smelter, noe som øker den geopolitiske interessen for regionen.',
    },
  ],
};

// ============================================================================
// Kapittel 8.4: Naturkatastrofer og sårbarhet
// ============================================================================

export const CHAPTER_GEOGRAFI_8_4: TextbookChapter = {
  id: 'geografi-1-8-4',
  courseId: 'geografi',
  chapterNumber: '8.4',
  title: 'Naturkatastrofer og sårbarhet',
  description: 'Ulike typer naturkatastrofer, hva som gjør samfunn sårbare, og hvordan vi kan redusere risiko og forebygge katastrofer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike typer naturkatastrofer og hvordan sårbarhet varierer mellom samfunn',
    'drøfte tiltak for katastrofeforebygging og beredskap',
  ],
  content: [
    {
      id: 'geo-8-4-intro',
      type: 'text',
      content: `# Naturkatastrofer og sårbarhet

Naturkatastrofer rammer millioner av mennesker hvert år. Jordskjelv, flommer, orkaner og vulkanutbrudd er naturlige prosesser, men de blir katastrofer først når de rammer sårbare samfunn. Forståelsen av sammenhengen mellom **naturfare**, **sårbarhet** og **risiko** er nøkkelen til å redde liv.

## Hva er en naturkatastrofe?

En naturkatastrofe oppstår når en naturhendelse fører til store tap av menneskeliv, ødeleggelse av infrastruktur eller økonomiske tap. Det er viktig å skille mellom en **naturfare** (den naturlige hendelsen) og en **naturkatastrofe** (konsekvensene for mennesker og samfunn).`,
    },
    {
      id: 'geo-8-4-def-risiko',
      type: 'definition',
      title: 'Risiko for naturkatastrofer',
      content: 'Risiko = Fare × Sårbarhet ÷ Kapasitet. Faren er sannsynligheten for en naturhendelse. Sårbarheten beskriver hvor utsatt et samfunn er. Kapasiteten er evnen til å forebygge, håndtere og komme seg etter en katastrofe. Et jordskjelv i et ubebodd område er ingen katastrofe — det er kombinasjonen av fare og sårbarhet som skaper risiko.',
    },
    {
      id: 'geo-8-4-typer',
      type: 'text',
      content: `## Typer naturkatastrofer

### Geofysiske katastrofer
Forårsaket av prosesser i jordens indre:
- **Jordskjelv**: Plutselig frigjøring av energi langs forkastninger i jordskorpen
- **Vulkanutbrudd**: Utbrudd av magma, aske og gasser
- **Tsunami**: Enorme bølger forårsaket av jordskjelv, undersjøiske skred eller vulkanutbrudd

### Meteorologiske katastrofer
Forårsaket av atmosfæriske prosesser:
- **Tropiske stormer** (orkaner, tyfoner, sykloner): Kraftige stormsystemer med vind over 119 km/t
- **Tornadoer**: Intense virvelvinder med ekstremt lav sentraltrykk
- **Hetebølger**: Langvarige perioder med unormalt høye temperaturer
- **Tørke**: Langvarig mangel på nedbør

### Hydrologiske katastrofer
Forårsaket av vannrelaterte prosesser:
- **Flom**: Oversvømmelse når vannmengden overstiger kapasiteten til elver og dreneringssystemer
- **Skred**: Jord-, stein- og snøskred utløst av mye nedbør eller snøsmelting
- **Stormflo**: Havnivåstigning forårsaket av storm og lavtrykk`,
    },
    {
      id: 'geo-8-4-saarbarhet',
      type: 'text',
      content: `## Sårbarhet og risiko

Samme type naturhendelse kan ha vidt forskjellige konsekvenser avhengig av hvor den inntreffer. Et jordskjelv på 7,0 på Richters skala kan drepe hundretusenvis i ett land og nesten ingen i et annet. Forskjellen ligger i **sårbarheten**.

### Faktorer som øker sårbarhet
- **Fattigdom**: Dårlige bygninger, manglende infrastruktur, svake helsesystemer
- **Befolkningstetthet**: Mange mennesker på lite areal øker tapene
- **Beliggenhet**: Bosetting i flomsletter, langs kystlinjer eller ved aktive forkastninger
- **Svake institusjoner**: Manglende beredskapsplaner, korrupsjon, dårlig styresett
- **Urbanisering**: Rask og uplanlagt byvekst med slumområder i utsatte soner

### Eksempel: Jordskjelv i Haiti vs. Japan
- **Haiti 2010**: Jordskjelv på 7,0 — over 200 000 døde. Fattig land med dårlige bygninger og svak beredskap.
- **Japan 2011**: Jordskjelv på 9,0 — ca. 18 000 døde (de fleste av tsunamien, ikke jordskjelvet). Rikt land med strenge byggeforskrifter og avansert varslingssystem.`,
    },
    {
      id: 'geo-8-4-def-sendai',
      type: 'definition',
      title: 'Sendai-rammeverket',
      content: 'Sendai-rammeverket for katastrofeforebygging (2015–2030) er en internasjonal avtale vedtatt av FN. Det har fire prioriterte områder: (1) forstå risiko, (2) styrke risikostyring, (3) investere i forebygging, og (4) styrke beredskap for effektiv respons og «build back better» — gjenoppbygging som gjør samfunnet mer motstandsdyktig.',
    },
    {
      id: 'geo-8-4-fattigdom',
      type: 'text',
      content: `## Fattigdom og sårbarhet

Det er en sterk sammenheng mellom fattigdom og sårbarhet for naturkatastrofer. Fattige land og fattige befolkningsgrupper rammes hardest av naturhendelser.

### Hvorfor rammes fattige hardere?
- **Boligstandard**: Bygninger tåler ikke jordskjelv, vind eller flom
- **Beliggenhet**: Fattige bor ofte i utsatte områder — flomsletter, bratte skråninger, lavtliggende kyster
- **Manglende forsikring**: Ingen økonomisk sikkerhetsnett etter katastrofe
- **Helsevesen**: Svakt helsevesen klarer ikke å håndtere mange skadde
- **Gjenoppbygging**: Manglende ressurser til å bygge opp igjen

### Klimaendringer forsterker ulikheten
Klimaendringene fører til flere og kraftigere naturhendelser — flere flommer, sterkere stormer, mer tørke. De landene som har bidratt minst til klimaendringene, er ofte de mest sårbare. Dette kalles **klimaurettferdighet**.`,
    },
    {
      id: 'geo-8-4-forebygging',
      type: 'text',
      content: `## Katastrofeforebygging

Å forebygge katastrofer handler ikke om å stoppe naturhendelser, men om å redusere sårbarheten slik at naturhendelser ikke blir katastrofer.

### Tiltak for å redusere risiko
- **Byggeforskrifter**: Krav til jordskjelvsikre bygninger og flomsikring
- **Arealplanlegging**: Regulere hvor det kan bygges — ikke i flomsletter, skredfarlige områder eller langs aktive forkastninger
- **Varslingssystemer**: Tidlig varsling av tsunami, orkaner, flom og vulkanutbrudd
- **Beredskapsplaner**: Øvelser, evakueringsruter og nødforsyninger
- **Utdanning**: Lære befolkningen hva de skal gjøre under og etter en naturhendelse
- **Infrastruktur**: Flomvern, skredsikring, stormvannshåndtering

### «Build back better»
Etter en katastrofe er det viktig å ikke bare gjenoppbygge, men å **bygge bedre enn før**. Dette betyr sterkere bygninger, bedre infrastruktur og smartere arealplanlegging for å redusere framtidig risiko.`,
    },
    {
      id: 'geo-8-4-example',
      type: 'example',
      title: 'Flomkatastrofen i Pakistan 2022',
      problem: 'Analyser hvorfor flommen i Pakistan i 2022 ble en så stor katastrofe.',
      solution: `**Pakistan-flommen 2022 — analyse av sårbarhet:**

1. **Naturfare**: Ekstrem monsunnedbør, forsterket av klimaendringer. Deler av Sindh-provinsen fikk 700 % mer regn enn normalt.
2. **Geografisk sårbarhet**: Store deler av befolkningen bor i Indus-sletten, som er naturlig flomutsatt.
3. **Fattigdom**: Pakistan er et lavinntektsland der mange bor i enkle bygninger som ikke tåler flom.
4. **Befolkningstetthet**: Over 220 millioner innbyggere, mange i utsatte områder.
5. **Manglende infrastruktur**: Utilstrekkelige flomvern, dreneringssystemer og demninger.
6. **Klimaurettferdighet**: Pakistan står for under 1 % av globale klimagassutslipp, men rammes hardt av klimaendringene.

**Konsekvenser**: Over 1 700 døde, 33 millioner rammet, en tredjedel av landet under vann. Skadene ble estimert til over 30 milliarder dollar.`,
    },
    {
      id: 'geo-8-4-norge',
      type: 'text',
      content: `## Naturfare i Norge

Norge er ikke immun mot naturhendelser. De viktigste naturfarene i Norge er:

- **Skred**: Jord-, stein- og snøskred er den naturfarlige hendelsen som tar flest liv i Norge
- **Flom**: Vårflom fra snøsmelting og regnflom er vanlig, og klimaendringene gir hyppigere styrtregn
- **Storm**: Kraftige stormer rammer kysten, spesielt Vestlandet og Nord-Norge
- **Kvikkleire**: Særlig i Trøndelag og på Østlandet kan kvikkleireskred være svært ødeleggende

NVE (Norges vassdrags- og energidirektorat) har ansvar for å kartlegge naturfare og gi råd om arealplanlegging for å redusere risiko.`,
    },
  
    {
      id: 'geo-8-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Naturkatastrofer** er hendelser der naturlige prosesser foraarsaker store skader paa mennesker og samfunn
- **Saarbarhet** avhenger av oekonomiske, sosiale og politiske forhold - fattige land rammes hardest
- **Risiko** = fare x saarbarhet x eksponering
- **Sendai-rammeverket** (2015-2030) er FNs globale plan for katastrofeforebygging
- Klimaendringer oeker frekvensen og intensiteten av mange typer naturkatastrofer`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er sammenhengen mellom risiko, fare og sårbarhet?',
      options: [
        { id: 'a', text: 'Risiko = Fare × Sårbarhet ÷ Kapasitet', isCorrect: true },
        { id: 'b', text: 'Risiko = Fare + Sårbarhet', isCorrect: false },
        { id: 'c', text: 'Risiko = Fare ÷ Sårbarhet', isCorrect: false },
        { id: 'd', text: 'Risiko = Sårbarhet − Fare', isCorrect: false },
      ],
      solution: 'Risiko er et produkt av faren (sannsynligheten for en naturhendelse), sårbarheten (hvor utsatt samfunnet er) og kapasiteten (evnen til å håndtere hendelsen). Høy fare og høy sårbarhet gir høy risiko, mens god kapasitet reduserer risikoen.',
    },
    {
      id: 'geo-8-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor døde langt flere i jordskjelvet i Haiti (2010) enn i det mye kraftigere jordskjelvet i Japan (2011)?',
      options: [
        { id: 'a', text: 'Haiti hadde dårligere bygninger, svakere beredskap og større fattigdom', isCorrect: true },
        { id: 'b', text: 'Jordskjelvet i Haiti varte lenger', isCorrect: false },
        { id: 'c', text: 'Japan har færre innbyggere enn Haiti', isCorrect: false },
        { id: 'd', text: 'Haiti ligger nærmere ekvator der jordskjelv er farligere', isCorrect: false },
      ],
      solution: 'Forskjellen i dødstall skyldes primært sårbarhet, ikke styrken på jordskjelvet. Haiti er et fattig land med dårlige bygninger, svake institusjoner og manglende beredskap. Japan har strenge byggeforskrifter, avanserte varslingssystemer og godt trente innbyggere. Jordskjelvet i Japan var faktisk mye kraftigere (9,0 vs. 7,0).',
    },
    {
      id: 'geo-8-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hva Sendai-rammeverket er, og forklar de fire prioriterte områdene.',
      solution: 'Sendai-rammeverket er en internasjonal avtale vedtatt av FN i 2015, som gjelder fram til 2030. Det er et rammeverk for katastrofeforebygging med fire prioriterte områder: (1) Forstå risiko — kartlegge farer, sårbarhet og eksponering. (2) Styrke risikostyring — forbedre institusjoner og myndigheter som arbeider med katastrofeforebygging. (3) Investere i forebygging — bruke ressurser på tiltak som byggeforskrifter, varslingssystemer og infrastruktur for å redusere risiko. (4) Styrke beredskap — bygge opp kapasitet for effektiv respons og «build back better», altså gjenoppbygging som gjør samfunnet mer motstandsdyktig.',
    },
    {
      id: 'geo-8-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft påstanden: «Naturkatastrofer rammer alle likt.»',
      solution: 'Denne påstanden er feil. Naturkatastrofer rammer på ingen måte alle likt. Fattige land og fattige befolkningsgrupper rammes mye hardere. Dette skyldes at de bor i dårligere bygninger, i mer utsatte områder, har svakere helsevesen og beredskap, og mangler forsikring og ressurser til gjenoppbygging. Over 90 % av alle dødsfall fra naturkatastrofer skjer i lavinntektsland. I tillegg forsterker klimaendringene ulikheten — de landene som har bidratt minst til utslippene, rammes hardest av flere og kraftigere naturhendelser. Dette kalles klimaurettferdighet. Selv innenfor et land rammes fattige hardere, fordi de bor i mer utsatte områder og har færre ressurser.',
    },
    {
      id: 'geo-8-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken naturfare tar flest liv i Norge?',
      options: [
        { id: 'a', text: 'Skred (jord-, stein- og snøskred)', isCorrect: true },
        { id: 'b', text: 'Jordskjelv', isCorrect: false },
        { id: 'c', text: 'Flom', isCorrect: false },
        { id: 'd', text: 'Vulkanutbrudd', isCorrect: false },
      ],
      solution: 'Skred — jord-, stein- og snøskred — er den naturfarlige hendelsen som historisk har tatt flest liv i Norge. Norge har lang tradisjon for skredforskning og skredsikring for å redusere risikoen.',
    },
  ],
};

// ============================================================================
// Kapittel 8.5: Norges rolle i verden
// ============================================================================

export const CHAPTER_GEOGRAFI_8_5: TextbookChapter = {
  id: 'geografi-1-8-5',
  courseId: 'geografi',
  chapterNumber: '8.5',
  title: 'Norges rolle i verden',
  description: 'Norges posisjon som fredsnasjon, nordområdepolitikken, havrett og Norges deltakelse i internasjonale organisasjoner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for Norges rolle i internasjonale organisasjoner og konflikthåndtering',
    'drøfte Norges geopolitiske interesser i nordområdene og havområdene',
  ],
  content: [
    {
      id: 'geo-8-5-intro',
      type: 'text',
      content: `# Norges rolle i verden

Norge er et lite land med bare 5,5 millioner innbyggere, men har en uforholdsmessig stor rolle i internasjonal politikk. Oljeinntektene, den strategiske beliggenheten i nord, og en lang tradisjon for fredsarbeid og bistand gjør Norge til en viktig aktør langt utover det befolkningsstørrelsen tilsier.

## Norge som fredsnasjon

Norge har bygget et omdømme som fredsnasjon gjennom tiår med engasjement i internasjonale fredsprosesser. Denne rollen bygger på flere faktorer:

- **Nøytral mekler**: Norge oppfattes som en relativt nøytral part uten kolonial historie
- **Fredsforhandlinger**: Norge har bidratt til fredsprosesser i bl.a. Midtøsten (Oslo-avtalen 1993), Sri Lanka, Colombia, Filippinene og Sudan
- **Bistand**: Norge er blant verdens største givere av utviklingsbistand per innbygger
- **Nobels fredspris**: Deles ut i Oslo av Den Norske Nobelkomité`,
    },
    {
      id: 'geo-8-5-def-osloavtalen',
      type: 'definition',
      title: 'Oslo-avtalen',
      content: 'Oslo-avtalen (1993) var en banebrytende avtale mellom Israel og PLO (Palestine Liberation Organization), forhandlet fram i hemmelige samtaler i Norge. Avtalen ga palestinsk selvstyre på deler av Vestbredden og Gazastripen, og var det første direkte diplomatiske dokumentet mellom partene. Til tross for store forhåpninger har avtalen ikke ført til varig fred.',
    },
    {
      id: 'geo-8-5-nordomraadene',
      type: 'text',
      content: `## Nordområdepolitikken

Nordområdene — Arktis, Barentshavet og Norskehavet — er Norges viktigste strategiske interesseområde. Regjeringen har siden 2005 definert nordområdene som Norges viktigste utenrikspolitiske satsingsområde.

### Hvorfor er nordområdene viktige for Norge?
- **Ressurser**: Enorme olje-, gass- og fiskeressurser i Barentshavet og nordlige havområder
- **Sikkerhet**: Norges grense mot Russland i nord gir en spesiell sikkerhetsutfordring
- **Sjøruter**: Mulige nye handelsruter gjennom Arktis
- **Klimaforskning**: Arktis er avgjørende for å forstå globale klimaendringer
- **Miljøforvaltning**: Ansvar for å forvalte sårbare arktiske økosystemer

### Samarbeid og spenning
Norge balanserer mellom samarbeid og avskrekking overfor Russland i nord. Tradisjonelt har det vært godt samarbeid om fiskeriforvaltning, søk og redning og miljøovervåking. Etter Russlands annektering av Krim i 2014 og invasjonen av Ukraina i 2022 har forholdet blitt mer spent.`,
    },
    {
      id: 'geo-8-5-havrett',
      type: 'text',
      content: `## Havrett og norske havområder

Norge er en stor havnasjon. Norske havområder er over seks ganger større enn landarealet, og havretten er derfor av enorm betydning for Norge.

### Norske havområder
- **Territorialfarvannet**: 12 nautiske mil fra kysten — full suverenitet
- **Økonomisk sone**: 200 nautiske mil — enerett til ressurser (fisk, olje, gass)
- **Kontinentalsokkelen**: Kan strekke seg utover 200 mil der geologien tilsier det

### Viktige havområder
- **Nordsjøen**: Norges viktigste petroleumsområde
- **Norskehavet**: Rike fiskeressurser og petroleumsutvinning
- **Barentshavet**: Store uoppdagede ressurser, fiskeri, grense mot Russland
- **Fiskevernsonen rundt Svalbard**: Omstridt jurisdiksjon

### Delelinjeavtalen med Russland (2010)
Norge og Russland inngikk i 2010 en historisk avtale om deling av et omstridt havområde i Barentshavet på 175 000 km². Avtalen løste en 40 år lang tvist og ble sett som et eksempel på fredelig konfliktløsning.`,
    },
    {
      id: 'geo-8-5-def-eks-sone',
      type: 'definition',
      title: 'Eksklusiv økonomisk sone (EEZ)',
      content: 'Den eksklusive økonomiske sonen strekker seg ut til 200 nautiske mil (370 km) fra kystlinjen. Kyststaten har enerett til å utnytte naturressursene i vannet, på havbunnen og under havbunnen i denne sonen. Andre stater har rett til fri ferdsel og overflygning. Norges EEZ er blant verdens største.',
    },
    {
      id: 'geo-8-5-organisasjoner',
      type: 'text',
      content: `## Norge i FN, NATO og EØS

Norge er aktivt medlem i flere internasjonale organisasjoner som former landets utenrikspolitikk.

### FN (De forente nasjoner)
- Norge var med på å grunnlegge FN i 1945
- Norges første FN-generalsekretær var Trygve Lie (1946–1953)
- Norge har sittet i FNs sikkerhetsråd fire ganger, senest 2021–2022
- Stor bidragsyter til FN-organisasjoner og fredsbevarende operasjoner

### NATO
- Grunnleggermedlem i 1949
- NATOs strategiske nordflanke — viktig for overvåking av russisk militæraktivitet
- Deltar i NATO-operasjoner internasjonalt
- Vertskap for NATO-øvelser i nord

### EØS (Det europeiske økonomiske samarbeidsområdet)
- Norge er ikke EU-medlem, men deltar i det indre markedet gjennom EØS-avtalen
- Følger mesteparten av EUs regelverk, men uten stemmerett i EU-organene
- Betaler EØS-midler til sosial og økonomisk utvikling i EU-land
- Viktig for norsk næringsliv og arbeidsmarked`,
    },
    {
      id: 'geo-8-5-example',
      type: 'example',
      title: 'Norges balanse mellom stormakter',
      problem: 'Analyser hvordan Norge balanserer mellom sine allianseforpliktelser i NATO og ønsket om samarbeid med Russland i nord.',
      solution: `**Norges balansegang i nordområdene:**

1. **NATOs nordflanke**: Norge er strategisk viktig som NATOs nordligste grenseland mot Russland. Norske baser og overvåkingssystemer er sentrale for alliansens situasjonsbilde.

2. **Avskrekking**: Norge opprettholder en troverdig forsvarsevne i nord, med økt militær tilstedeværelse, alliert trening og forhåndslagring av utstyr.

3. **Beroligelse**: Samtidig har Norge tradisjonelt ført en politikk for å berolige Russland — ingen utenlandske baser i fredstid, ingen atomvåpen på norsk jord, og selvpålagte begrensninger for alliert aktivitet nær grensen.

4. **Samarbeid**: Fiskeriforvaltning i Barentshavet, søk og redning, og folk-til-folk-kontakt har vært viktige samarbeidsområder.

5. **Etter 2022**: Russlands invasjon av Ukraina har gjort balansegangen vanskeligere. Mye av samarbeidet er frosset, og Norge har økt fokuset på forsvar og avskrekking.`,
    },
    {
      id: 'geo-8-5-bistand',
      type: 'text',
      content: `## Norsk bistand og humanitært arbeid

Norge er en av verdens største bidragsytere til utviklingsbistand, målt per innbygger. I 2023 ble det brukt over 40 milliarder kroner på bistand, tilsvarende rundt 1 % av bruttonasjonalinntekten.

### Norske prioriteringer
- **Utdanning**: Spesielt jenters rett til utdanning
- **Helse**: Vaksineprogrammer, mødre- og barnehelse
- **Klima og miljø**: Regnskogbevaring, fornybar energi i utviklingsland
- **Humanitær bistand**: Nødhjelp ved konflikter og naturkatastrofer
- **Fred og forsoning**: Støtte til fredsprosesser og demokratibygging

### Oljefondet og etikk
Norges statlige pensjonsfond utland (Oljefondet) er verdens største statlige investeringsfond. Fondet har etiske retningslinjer og kan utelukke selskaper som bryter menneskerettigheter, forårsaker alvorlig miljøskade eller produserer visse våpen.`,
    },
    {
      id: 'geo-8-5-utfordringer',
      type: 'text',
      content: `## Utfordringer for Norges rolle

Norges internasjonale rolle er ikke uten spenninger og dilemmaer:

- **Olje og klima**: Norge er en stor olje- og gasseksportør samtidig som landet er en pådriver for klimapolitikk. Kritikere mener dette er dobbeltmoralsk.
- **Våpeneksport**: Norge selger våpen til land som er involvert i konflikter, noe som kan stå i strid med fredsnasjonsrollen.
- **EU-dilemmaet**: Norge følger mye av EUs regelverk uten stemmerett, noe som reiser spørsmål om demokratisk legitimitet.
- **Stormaktspress**: Økt rivalisering mellom USA, Kina og Russland gjør det vanskeligere for et lite land å navigere.`,
    },
  
    {
      id: 'geo-8-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Norge profilerer seg som en **fredsnasjon** med aktiv rolle i fredsmekling og humanitaert arbeid
- Norge er medlem av NATO, men ikke av EU (tilknyttet gjennom EOES-avtalen)
- **Havrett** og **havretten** er viktig for Norge som kyst- og havnasjon
- Norges interesser i **nordomraadene** knytter seg til ressurser, sikkerhet og miljoevern
- Norge bidrar aktivt i FN, NATO og andre internasjonale organisasjoner`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva var Oslo-avtalen (1993)?',
      options: [
        { id: 'a', text: 'En avtale mellom Israel og PLO, forhandlet i Norge', isCorrect: true },
        { id: 'b', text: 'En klimaavtale mellom nordiske land', isCorrect: false },
        { id: 'c', text: 'En handelsavtale mellom Norge og EU', isCorrect: false },
        { id: 'd', text: 'En forsvarsavtale mellom NATO-land', isCorrect: false },
      ],
      solution: 'Oslo-avtalen ble inngått i 1993 mellom Israel og PLO etter hemmelige forhandlinger i Norge. Avtalen ga palestinsk selvstyre i deler av Vestbredden og Gaza, og var det første direkte diplomatiske dokumentet mellom partene.',
    },
    {
      id: 'geo-8-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor langt strekker en stats eksklusive økonomiske sone (EEZ) seg fra kysten?',
      options: [
        { id: 'a', text: '200 nautiske mil', isCorrect: true },
        { id: 'b', text: '12 nautiske mil', isCorrect: false },
        { id: 'c', text: '50 nautiske mil', isCorrect: false },
        { id: 'd', text: '500 nautiske mil', isCorrect: false },
      ],
      solution: 'Den eksklusive økonomiske sonen strekker seg ut til 200 nautiske mil (ca. 370 km) fra kystlinjen. I denne sonen har kyststaten enerett til naturressursene, mens andre stater har rett til fri ferdsel.',
    },
    {
      id: 'geo-8-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for minst tre grunner til at nordområdene er viktige for Norge.',
      solution: 'Nordområdene er viktige for Norge av flere grunner: (1) Ressurser — Barentshavet og nordlige havområder rommer store olje-, gass- og fiskeressurser som er avgjørende for norsk økonomi. (2) Sikkerhet — Norge grenser til Russland i nord, og nordområdene er strategisk viktige for NATO. Russlands militære aktivitet i Arktis krever norsk overvåking og beredskap. (3) Klima og miljø — Arktis er avgjørende for å forstå globale klimaendringer, og Norge har ansvar for å forvalte sårbare arktiske økosystemer. (4) Sjøruter — Nye handelsruter kan åpne seg gjennom Arktis. (5) Suverenitet — Norge må hevde sine rettigheter over enorme havområder.',
    },
    {
      id: 'geo-8-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om Norge kan kalle seg en fredsnasjon samtidig som landet er en stor eksportør av olje, gass og våpen.',
      solution: 'Norge har bygget et omdømme som fredsnasjon gjennom bistand, fredsforhandlinger og humanitært arbeid. Samtidig er Norge en av verdens største eksportører av olje og gass, som bidrar til klimaendringer, og selger våpen til land i konflikt. Argumenter for at rollene er forenlige: Norge bruker oljeinntektene til bistand og fredsarbeid, energieksport er lovlig handel, og våpeneksport følger strenge regler. Argumenter mot: Klimaendringer rammer fattige land hardest og skaper konflikter, norske våpen kan brukes i konflikter, og det er dobbeltmoralsk å snakke om fred mens man tjener på fossile brensler. Konklusjonen avhenger av hvordan man vekter direkte fredsarbeid mot indirekte konsekvenser av norsk næringsvirksomhet.',
    },
    {
      id: 'geo-8-5-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva regulerer EØS-avtalen for Norges del?',
      options: [
        { id: 'a', text: 'Norges deltakelse i EUs indre marked uten å være EU-medlem', isCorrect: true },
        { id: 'b', text: 'Norges militære forpliktelser i Europa', isCorrect: false },
        { id: 'c', text: 'Norges bidrag til FNs fredsbevarende operasjoner', isCorrect: false },
        { id: 'd', text: 'Norges grenser mot nabolandene', isCorrect: false },
      ],
      solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked med fri bevegelse av varer, tjenester, kapital og personer, uten at Norge er EU-medlem. Til gjengjeld må Norge innføre mesteparten av EUs regelverk, men uten stemmerett i EU-organene.',
    },
  ],
};

// ============================================================================
// Kapittel 8.6: Geografi og framtiden
// ============================================================================

export const CHAPTER_GEOGRAFI_8_6: TextbookChapter = {
  id: 'geografi-1-8-6',
  courseId: 'geografi',
  chapterNumber: '8.6',
  title: 'Geografi og framtiden',
  description: 'Globale megatrender, teknologiske endringer og hvorfor geografisk kompetanse er viktigere enn noen gang.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte globale megatrender og deres geografiske konsekvenser',
    'reflektere over geografifagets relevans for framtidige utfordringer',
  ],
  content: [
    {
      id: 'geo-8-6-intro',
      type: 'text',
      content: `# Geografi og framtiden

Vi lever i en tid med raske og gjennomgripende endringer. Befolkningen vokser, byene utvides, klimaet endrer seg, og ny teknologi forandrer måten vi lever, arbeider og reiser på. Alle disse endringene har **geografiske dimensjoner** — de skjer på bestemte steder, påvirker ulike regioner ulikt, og krever forståelse av rom, sted og samspill.

## Globale megatrender

**Megatrender** er store, langsiktige endringer som former verdens utvikling over tiår. De påvirker alle land og samfunn, men på forskjellige måter.`,
    },
    {
      id: 'geo-8-6-def-megatrend',
      type: 'definition',
      title: 'Megatrend',
      content: 'En megatrend er en stor, langvarig og transformativ global endring som påvirker økonomi, politikk, samfunn og miljø. Eksempler er klimaendringer, urbanisering, demografiske endringer og digitalisering. Megatrender skiller seg fra kortvarige trender ved at de er dype, strukturelle endringer som former framtiden over flere tiår.',
    },
    {
      id: 'geo-8-6-befolkning',
      type: 'text',
      content: `## Befolkningsvekst og demografiske endringer

Verdens befolkning passerte 8 milliarder i 2022 og forventes å nå rundt 10 milliarder i 2050. Men veksten er svært ujevnt fordelt.

### Hvor vokser befolkningen?
- **Afrika sør for Sahara**: Regionen vil stå for det meste av verdens befolkningsvekst. Nigeria alene kan bli verdens tredje mest folkerike land.
- **Sør-Asia**: India har passert Kina som verdens mest folkerike land.
- **Europa og Øst-Asia**: Befolkningen krymper. Land som Japan, Sør-Korea og Italia har svært lave fødselstall.

### Geografiske konsekvenser
- Økt press på ressurser, infrastruktur og tjenester i land med rask vekst
- Aldring og arbeidskraftmangel i rike land
- Økt migrasjon fra land med stor ungdomsbefolkning til land med aldrende befolkning
- Behov for enorme investeringer i utdanning, helse og boliger i Afrika`,
    },
    {
      id: 'geo-8-6-urbanisering',
      type: 'text',
      content: `## Urbanisering

I 2007 bodde for første gang flere mennesker i byer enn på landsbygda. Innen 2050 forventes andelen byboere å nå 68 %.

### Den urbane eksplosjonen
- **Megabyer**: Byer med over 10 millioner innbyggere vokser raskt, spesielt i Asia og Afrika
- **Slumvekst**: Mye av byveksten skjer i uformelle bosettinger uten infrastruktur
- **Smarte byer**: Ny teknologi gjør det mulig å planlegge og styre byer mer effektivt

### Geografiske utfordringer ved urbanisering
- **Arealbruk**: Byer brer seg utover verdifull jordbruksjord
- **Transport**: Trafikk, forurensning og behov for kollektivtransport
- **Vann og avløp**: Sikre rent vann og sanitære forhold for millioner
- **Klimatilpasning**: Byer er spesielt sårbare for flom, hetebølger og havnivåstigning
- **Sosial ulikhet**: Kontrastene mellom fattige og rike forsterkes i storbyene`,
    },
    {
      id: 'geo-8-6-klima',
      type: 'text',
      content: `## Klimaendringer som geografisk utfordring

Klimaendringene er kanskje den mest gjennomgripende megatrenden, og den er i høyeste grad geografisk. Konsekvensene varierer enormt fra sted til sted.

### Regionale konsekvenser
- **Arktis**: Issmelting, endrede økosystemer, nye sjøruter
- **Øystater**: Trues av havnivåstigning — noen kan bli ubeboelige
- **Midtøsten og Nord-Afrika**: Økende tørke, vannmangel og hetebølger
- **Sør-Asia**: Kraftigere monsun, flomrisiko, smelting av Himalaya-isbreer
- **Europa**: Hetebølger, tørke i sør, mer nedbør og flom i nord
- **Norge**: Mildere klima, mer nedbør, økt skredfare, endrede økosystemer

### Klimaflyktninger
FN anslår at over 200 millioner mennesker kan bli tvunget til å flytte innen 2050 på grunn av klimaendringer. Stigende havnivå, tørke og ekstremvær vil gjøre store områder ubeboelige. De fleste vil flytte internt i eget land, men mange vil krysse landegrenser.`,
    },
    {
      id: 'geo-8-6-def-klimaflyktning',
      type: 'definition',
      title: 'Klimaflyktning',
      content: 'En klimaflyktning er en person som tvinges til å forlate hjemstedet sitt på grunn av klimaendringer, som havnivåstigning, tørke, flom eller ekstremvær. Begrepet er ikke formelt anerkjent i FNs flyktningkonvensjon, noe som betyr at klimaflyktninger ikke har samme juridiske beskyttelse som politiske flyktninger.',
    },
    {
      id: 'geo-8-6-teknologi',
      type: 'text',
      content: `## Teknologiske endringer og geografi

Ny teknologi endrer det geografiske landskapet på grunnleggende måter.

### Digitalisering og avstandens død?
Internett og digital kommunikasjon har gjort det mulig å jobbe, studere og handle uavhengig av fysisk beliggenhet. Noen spådde at dette ville gjøre geografi irrelevant — «avstandens død». Men virkeligheten er mer nyansert:
- Fysisk infrastruktur (datasentre, fiberkabler, strømforsyning) er fortsatt stedbundet
- Mange tjenester krever fortsatt fysisk tilstedeværelse
- Digital ulikhet — mange mennesker og regioner mangler internettilgang

### GIS og romlig teknologi
- **GIS** (Geografiske informasjonssystemer): Analyserer romlige data for planlegging og beslutninger
- **Fjernmåling**: Satellitter overvåker klimaendringer, avskoging og urbanisering i sanntid
- **GPS og navigasjon**: Presisjonslandbruk, logistikk og beredskap

### Fornybar energi og ny geografi
Overgangen til fornybar energi endrer det geopolitiske kartet. Land med mye sol, vind eller geotermisk energi kan få ny betydning, mens tradisjonelle olje- og gassprodusenter kan miste innflytelse.`,
    },
    {
      id: 'geo-8-6-example',
      type: 'example',
      title: 'Lagos — en megaby i vekst',
      problem: 'Analyser de geografiske utfordringene Lagos i Nigeria står overfor som en av verdens raskest voksende megabyer.',
      solution: `**Lagos — geografisk analyse:**

1. **Befolkningsvekst**: Lagos har over 20 millioner innbyggere og vokser med hundretusener hvert år. Byen kan bli verdens mest folkerike by innen 2100.
2. **Arealbruk**: Byen brer seg utover i alle retninger, inkludert ut i havet med det flytende slumområdet Makoko.
3. **Flomrisiko**: Lagos ligger lavt og er svært utsatt for flom fra både regn og havnivåstigning.
4. **Infrastruktur**: Vei- og transportsystemet er overbelastet, med noen av verdens verste trafikkork.
5. **Ulikhet**: Enorme kontraster mellom velstående områder som Victoria Island og slumområder med millioner av innbyggere.
6. **Vann og sanitær**: Millioner mangler tilgang til rent vann og fungerende avløp.
7. **Klimaendringer**: Havnivåstigning truer lavtliggende områder, og kraftigere regnfall gir mer flom.

**Sammenheng**: Lagos illustrerer sammenhengen mellom befolkningsvekst, urbanisering og klimasårbarhet — tre av de største megatrendene.`,
    },
    {
      id: 'geo-8-6-kompetanse',
      type: 'text',
      content: `## Geografisk kompetanse i framtidens samfunn

Geografifaget gir nøkkelkompetanse for å forstå og løse framtidens utfordringer:

### Hvorfor trenger vi geografi?
- **Systemtenkning**: Geografi lærer oss å se sammenhenger mellom natur, samfunn og økonomi
- **Romlig analyse**: Evnen til å analysere hvordan fenomener varierer fra sted til sted
- **Bærekraft**: Forståelse av forholdet mellom ressursbruk, miljø og utvikling
- **Kulturforståelse**: Kunnskap om ulike steder, samfunn og levemåter
- **Kritisk tenkning**: Evnen til å vurdere komplekse problemstillinger med mange dimensjoner

### Geografiske yrker i framtiden
- Byplanlegger og arealplanlegger
- Klimarådgiver og miljøkonsulent
- GIS-analytiker og kartograf
- Katastrofeberedskap og risikomanagement
- Utviklingsarbeid og humanitær bistand
- Ressursforvaltning og havforvaltning`,
    },
    {
      id: 'geo-8-6-avslutning',
      type: 'text',
      content: `## Geografiens framtid

Geografi har aldri vært mer relevant enn i dag. De store utfordringene verden står overfor — klimaendringer, befolkningsvekst, urbanisering, ressursknapphet, migrasjon og geopolitisk rivalisering — er alle grunnleggende geografiske spørsmål.

Å forstå **hvor** ting skjer, **hvorfor** de skjer akkurat der, og **hvordan** steder og regioner påvirker hverandre, er avgjørende kompetanse for framtiden. Geografi bygger bro mellom naturvitenskap og samfunnsvitenskap, og gir oss verktøyene til å analysere sammenhenger og finne løsninger.

Framtidens geografer vil bruke avansert teknologi som GIS, fjernmåling og stordata for å analysere og visualisere verdens utfordringer. Men den grunnleggende geografiske kompetansen — evnen til å tenke romlig, forstå sammenhenger og se verden fra flere perspektiver — vil alltid være uerstattelig.`,
    },
  
    {
      id: 'geo-8-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Globale **megatrender** inkluderer befolkningsvekst, urbanisering, klimaendringer og teknologisk utvikling
- Disse trendene haenger sammen og forsterker hverandre paa komplekse maater
- Geografisk kompetanse er viktig for aa forstaa og haandtere globale utfordringer
- Fremtiden krever tverrfaglig tenkning der natur, samfunn og teknologi ses i sammenheng
- Geografi gir verktoy for aa analysere samspillet mellom mennesker og natur i en verden i endring`,
    },
  ],
  exercises: [
    {
      id: 'geo-8-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en megatrend?',
      options: [
        { id: 'a', text: 'En stor, langvarig global endring som former framtiden over flere tiår', isCorrect: true },
        { id: 'b', text: 'En kortvarig mote som sprer seg raskt på sosiale medier', isCorrect: false },
        { id: 'c', text: 'En naturkatastrofe med globale konsekvenser', isCorrect: false },
        { id: 'd', text: 'En politisk bevegelse i ett enkelt land', isCorrect: false },
      ],
      solution: 'En megatrend er en stor, langvarig og transformativ global endring som påvirker økonomi, politikk, samfunn og miljø over flere tiår. Eksempler er klimaendringer, urbanisering, demografiske endringer og digitalisering.',
    },
    {
      id: 'geo-8-6-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor forventes det meste av verdens befolkningsvekst å skje fram mot 2050?',
      options: [
        { id: 'a', text: 'Afrika sør for Sahara', isCorrect: true },
        { id: 'b', text: 'Europa', isCorrect: false },
        { id: 'c', text: 'Nord-Amerika', isCorrect: false },
        { id: 'd', text: 'Øst-Asia', isCorrect: false },
      ],
      solution: 'Afrika sør for Sahara vil stå for det meste av verdens befolkningsvekst fram mot 2050. Befolkningen i denne regionen kan doble seg, mens befolkningen i Europa og Øst-Asia faktisk krymper på grunn av lave fødselstall.',
    },
    {
      id: 'geo-8-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hvordan klimaendringer kan føre til økt migrasjon og flyktningstrømmer.',
      solution: 'Klimaendringer kan føre til migrasjon på flere måter: Havnivåstigning truer lavtliggende kystområder og øystater — millioner kan miste hjemstedet. Tørke og vannmangel gjør jordbruk umulig i mange regioner, spesielt i Midtøsten og Afrika. Kraftigere ekstremvær som flom og orkaner ødelegger boliger og infrastruktur. FN anslår at over 200 millioner mennesker kan bli tvunget til å flytte innen 2050. De fleste vil flytte internt i eget land, men mange vil krysse landegrenser. Et problem er at klimaflyktninger ikke har juridisk beskyttelse under FNs flyktningkonvensjon, som bare dekker politisk forfølgelse.',
    },
    {
      id: 'geo-8-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft påstanden: «Teknologien vil gjøre geografi irrelevant i framtiden.»',
      solution: 'Noen har hevdet at digital teknologi vil føre til «avstandens død» — at det ikke lenger spiller noen rolle hvor man er. Men dette er en overdrivelse. Teknologi er avhengig av fysisk infrastruktur som er stedbundet. Mange tjenester krever fysisk tilstedeværelse. Digital ulikhet gjør at mange mennesker og regioner står utenfor. Klimaendringer, naturkatastrofer og ressursforvaltning er grunnleggende geografiske utfordringer som teknologi alene ikke løser. Tvert imot gjør ny teknologi som GIS, fjernmåling og stordata geografi enda mer relevant, fordi vi nå kan analysere romlige sammenhenger bedre enn noen gang. Konklusjon: Teknologien endrer geografien, men gjør den ikke irrelevant — snarere viktigere.',
    },
    {
      id: 'geo-8-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står GIS for?',
      options: [
        { id: 'a', text: 'Geografiske informasjonssystemer', isCorrect: true },
        { id: 'b', text: 'Globalt informasjonssystem', isCorrect: false },
        { id: 'c', text: 'Geopolitisk internasjonal strategi', isCorrect: false },
        { id: 'd', text: 'Geologisk infrastruktursystem', isCorrect: false },
      ],
      solution: 'GIS står for Geografiske informasjonssystemer. Det er en teknologi for å samle inn, lagre, analysere og visualisere romlige data. GIS brukes i alt fra byplanlegging og miljøforvaltning til katastrofeberedskap og logistikk.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 8
// ============================================================================

export const GEOGRAFI_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_8_1, CHAPTER_GEOGRAFI_8_2, CHAPTER_GEOGRAFI_8_3,
  CHAPTER_GEOGRAFI_8_4, CHAPTER_GEOGRAFI_8_5, CHAPTER_GEOGRAFI_8_6,
];

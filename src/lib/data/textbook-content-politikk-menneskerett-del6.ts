/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3)
 *
 * Seksjon 6: Globale utfordringer og aktivisme (Kapittel 6.1–6.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Globale utfordringer i det 21. århundre
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6_1: TextbookChapter = {
  id: 'politikk-menneskerett-6-1',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6.1',
  title: 'Globale utfordringer i det 21. århundre',
  description: 'FNs bærekraftsmål, befolkningsvekst, pandemier og de store utfordringene verden står overfor i vår tid.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-5-6',
  nextChapter: 'politikk-menneskerett-6-2',
  competenceGoals: [
    'gjøre rede for sentrale globale utfordringer og drøfte hvordan de kan løses gjennom internasjonalt samarbeid',
    'analysere sammenhenger mellom menneskerettigheter, bærekraftig utvikling og globale maktforhold',
  ],
  keyTerms: [
    { term: 'Bærekraftsmålene', definition: 'FNs 17 mål for bærekraftig utvikling, vedtatt i 2015, som skal nås innen 2030. Målene dekker fattigdom, helse, utdanning, klima, fred og rettferdighet.' },
    { term: 'Befolkningsvekst', definition: 'Økningen i verdens befolkning over tid. Verdens befolkning passerte 8 milliarder i 2022 og forventes å nå rundt 10 milliarder mot slutten av århundret.' },
    { term: 'Pandemi', definition: 'En epidemi som sprer seg over store geografiske områder og rammer et svært stort antall mennesker. Covid-19-pandemien fra 2020 er et nylig eksempel.' },
    { term: 'Global styring', definition: 'Internasjonale institusjoner, avtaler og samarbeid som forsøker å håndtere grenseoverskridende utfordringer som ingen enkeltstat kan løse alene.' },
    { term: 'Agenda 2030', definition: 'FNs handlingsplan for bærekraftig utvikling, vedtatt av alle FNs 193 medlemsland i 2015. Planen inneholder de 17 bærekraftsmålene.' },
    { term: 'Multilateralisme', definition: 'Prinsippet om at internasjonale spørsmål best løses gjennom samarbeid mellom flere stater, ofte innenfor rammen av internasjonale organisasjoner som FN.' },
  ],
  content: [
    {
      id: 'pm-6-1-intro',
      type: 'text',
      content: `# Globale utfordringer i det 21. århundre

I det 21. århundre står menneskeheten overfor utfordringer som er mer sammenvevde og komplekse enn noen gang tidligere. Klimaendringer, pandemier, befolkningsvekst, fattigdom, konflikt og teknologisk disrupsjon er problemer som ikke respekterer landegrenser. Ingen enkelt nasjon kan løse disse utfordringene alene. Behovet for internasjonalt samarbeid og felles løsninger har aldri vært større.

Globale utfordringer kjennetegnes ved at de er **grenseoverskridende** – de rammer mennesker i alle land, om enn i ulik grad. De er **sammenkoblede** – klimaendringer forsterker fattigdom, som igjen driver migrasjon og kan skape konflikter. Og de krever **kollektiv handling** – løsningene forutsetter at stater, internasjonale organisasjoner, næringsliv og sivilsamfunn samarbeider.

I dette kapittelet skal vi se nærmere på noen av de mest presserende globale utfordringene i vår tid, og hvordan verdenssamfunnet forsøker å møte dem gjennom FNs bærekraftsmål og internasjonalt samarbeid.`,
    },
    {
      id: 'pm-6-1-def-1',
      type: 'definition',
      title: 'Globale utfordringer',
      content: `**Globale utfordringer** er problemer som berører mennesker på tvers av landegrenser og som krever internasjonalt samarbeid for å løses. Eksempler inkluderer klimaendringer, pandemier, fattigdom, terrorisme og cybertrusler.

Kjennetegn ved globale utfordringer:
- De er **grenseoverskridende** og kan ikke løses av enkeltstater alene
- De er **sammenkoblede** – én utfordring forsterker ofte en annen
- De krever **langsiktig tenkning** og tverrfaglig tilnærming
- De rammer ofte de mest sårbare hardest, selv om de angår alle`,
    },
    {
      id: 'pm-6-1-text-1',
      type: 'text',
      title: 'FNs bærekraftsmål – verdens felles arbeidsplan',
      content: `## FNs bærekraftsmål

I september 2015 vedtok alle FNs 193 medlemsland **Agenda 2030** – en ambisiøs handlingsplan for bærekraftig utvikling. Kjernen i planen er **de 17 bærekraftsmålene** (Sustainable Development Goals, SDG), som erstattet de tidligere tusenårsmålene. Bærekraftsmålene representerer en felles global visjon om en verden uten fattigdom, med fred og rettferdighet, og der mennesker lever i balanse med naturen.

De 17 målene spenner over et bredt spekter av temaer:

**Sosiale mål:** Utrydde fattigdom (mål 1), utrydde sult (mål 2), god helse (mål 3), god utdanning (mål 4), likestilling mellom kjønnene (mål 5), rent vann og gode sanitærforhold (mål 6).

**Økonomiske mål:** Ren energi (mål 7), anstendig arbeid og økonomisk vekst (mål 8), innovasjon og infrastruktur (mål 9), mindre ulikhet (mål 10), bærekraftige byer (mål 11), ansvarlig forbruk og produksjon (mål 12).

**Miljømål:** Stoppe klimaendringene (mål 13), liv under vann (mål 14), liv på land (mål 15).

**Styresettmål:** Fred, rettferdighet og velfungerende institusjoner (mål 16), samarbeid for å nå målene (mål 17).

Et viktig prinsipp i bærekraftsmålene er at **ingen skal utelates** (leave no one behind). Målene gjelder for alle land – både rike og fattige. Norge har for eksempel utfordringer knyttet til bærekraftig forbruk (mål 12) og klimautslipp (mål 13), selv om landet scorer høyt på mange andre mål.

### Kritikk av bærekraftsmålene

Bærekraftsmålene har også møtt kritikk. Noen mener målene er for mange og for vage, slik at det blir vanskelig å prioritere. Andre peker på at målene kan stå i motsetning til hverandre – for eksempel kan økonomisk vekst (mål 8) komme i konflikt med klimamålet (mål 13). Kritikere har også påpekt at målene er frivillige og at det mangler effektive mekanismer for å holde land ansvarlige dersom de ikke gjør nok.

Likevel representerer bærekraftsmålene det mest omfattende forsøket noensinne på å skape en felles global agenda for en bedre verden. De fungerer som et viktig referansepunkt for politikkutforming, bistand og internasjonalt samarbeid.`,
    },
    {
      id: 'pm-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor mange bærekraftsmål har FN vedtatt i Agenda 2030?',
        options: [
          { id: 'a', text: '8 mål', isCorrect: false },
          { id: 'b', text: '12 mål', isCorrect: false },
          { id: 'c', text: '17 mål', isCorrect: true },
          { id: 'd', text: '21 mål', isCorrect: false },
        ],
        solution: 'FNs Agenda 2030 inneholder 17 bærekraftsmål (Sustainable Development Goals). De ble vedtatt av alle FNs 193 medlemsland i 2015 og skal nås innen 2030. Målene dekker alt fra fattigdom og helse til klima, fred og rettferdighet.',
      },
    },
    {
      id: 'pm-6-1-text-2',
      type: 'text',
      title: 'Befolkningsvekst og demografiske endringer',
      content: `## Befolkningsvekst og demografiske endringer

Verdens befolkning har vokst dramatisk de siste hundre årene. I 1900 var det omtrent 1,6 milliarder mennesker på jorden. I 2022 passerte vi 8 milliarder. FN anslår at befolkningen vil nå rundt 9,7 milliarder i 2050 og muligens 10,4 milliarder mot slutten av århundret, før veksten flater ut.

### Befolkningsvekst – hvor og hvorfor?

Befolkningsveksten er svært ujevnt fordelt. Mens mange land i Europa og Øst-Asia opplever synkende fødselstall og aldrende befolkninger, vokser befolkningen raskt i store deler av Afrika sør for Sahara. Nigeria, for eksempel, forventes å bli verdens tredje mest folkerike land innen 2050. Denne ujevne fordelingen skaper ulike utfordringer i ulike deler av verden.

I land med rask befolkningsvekst er utfordringene knyttet til å sikre nok mat, vann, utdanning, helsetjenester og arbeidsplasser til en voksende ung befolkning. I land med aldrende befolkninger, som Japan, Italia og også Norge, handler utfordringene om å opprettholde velferdsordninger med færre yrkesaktive per pensjonist.

### Den demografiske overgangen

Demografer beskriver befolkningsutviklingen gjennom en modell kalt **den demografiske overgangen**. Denne modellen viser hvordan samfunn går fra høye fødsels- og dødsrater til lave fødsels- og dødsrater etter hvert som de utvikles økonomisk. I overgangsfasen synker dødsratene før fødselsratene, noe som fører til rask befolkningsvekst. De fleste land i Europa gjennomgikk denne overgangen på 1800- og 1900-tallet, mens mange afrikanske land befinner seg midt i den nå.

Faktorer som bidrar til lavere fødselstall inkluderer bedre tilgang til utdanning for kvinner, tilgang til prevensjon, urbanisering og økonomisk utvikling. Erfaringen viser at den mest effektive måten å bremse befolkningsvekst på er å investere i jenters utdanning og kvinners rettigheter.`,
    },
    {
      id: 'pm-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva den demografiske overgangen innebærer, og diskuter hvorfor befolkningsveksten er ujevnt fordelt i verden i dag.',
        hints: ['Tenk på sammenhengen mellom økonomisk utvikling, utdanning og fødselstall'],
        solution: 'Den demografiske overgangen beskriver hvordan samfunn går fra høye fødsels- og dødsrater til lave fødsels- og dødsrater. I overgangsfasen synker dødsratene først (pga. bedre helse og ernæring), mens fødselsratene forblir høye en stund – dette skaper rask befolkningsvekst. Veksten er ujevn fordi ulike regioner befinner seg i ulike faser: Europa og Øst-Asia har fullført overgangen, mens mange afrikanske land er midt i den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-1-text-3',
      type: 'text',
      title: 'Pandemier som global trussel',
      content: `## Pandemier som global trussel

Covid-19-pandemien, som brøt ut i 2020, minnet verden brutalt om hvor sårbare moderne samfunn er for smittsomme sykdommer. Pandemien tok millioner av liv, lammet verdensøkonomien, stengte skoler for hundrevis av millioner barn, og forsterket eksisterende ulikheter mellom rike og fattige land.

### Hva gjør pandemier til globale utfordringer?

I en globalisert verden der mennesker, varer og tjenester krysser grenser i enorm hastighet, kan nye smittsomme sykdommer spre seg fra et lokalt utbrudd til en global pandemi på uker. Verdens helseorganisasjon (WHO) spiller en sentral rolle i å koordinere det internasjonale arbeidet mot pandemier, men organisasjonen har begrenset myndighet og er avhengig av medlemslandenes samarbeid og finansiering.

### Vaksinerettferdighet

Et av de mest debatterte spørsmålene under covid-19-pandemien var **vaksinerettferdighet**. Rike land sikret seg store mengder vaksiner tidlig, mens mange fattige land måtte vente lenge. COVAX-initiativet, ledet av WHO og partnerorganisasjoner, ble opprettet for å sikre mer rettferdig fordeling av vaksiner, men lyktes bare delvis. Kritikere hevdet at patentregler og farmasøytiske selskapers profittinteresser hindret produksjon og distribusjon av rimelige vaksiner i det globale sør.

Denne situasjonen reiste grunnleggende spørsmål om global rettferdighet: Er tilgang til livsviktige medisiner en menneskerettighet? Hvem har ansvaret for å sikre at alle mennesker, uavhengig av hvor de bor, har tilgang til helsehjelp under en pandemi?

### Norges rolle

Norge var blant de landene som bidro mest per innbygger til det internasjonale vaksinesamarbeidet. Norge var også tidlig ute med å donere vaksinedoser til fattigere land. Statsminister Jonas Gahr Støre framhevet at «ingen er trygge før alle er trygge» – et prinsipp som understreker at pandemier bare kan bekjempes gjennom globalt samarbeid.

Samtidig ble Norge kritisert for å ha hamstret vaksiner i den tidlige fasen, på samme måte som andre rike land. Debatten illustrerte spenningen mellom nasjonale interesser og global solidaritet – en spenning som preger mange av de globale utfordringene vi står overfor.`,
    },
    {
      id: 'pm-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva var COVAX-initiativet?',
        options: [
          { id: 'a', text: 'Et program for å utvikle nye vaksiner mot tropiske sykdommer', isCorrect: false },
          { id: 'b', text: 'Et initiativ for å sikre rettferdig global fordeling av covid-19-vaksiner', isCorrect: true },
          { id: 'c', text: 'En internasjonal avtale om å forby biologiske våpen', isCorrect: false },
          { id: 'd', text: 'Et samarbeid mellom EU-land om vaksineproduksjon', isCorrect: false },
        ],
        solution: 'COVAX (Covid-19 Vaccines Global Access) var et initiativ ledet av WHO og partnerorganisasjoner som hadde som mål å sikre rettferdig global fordeling av covid-19-vaksiner. Initiativet skulle sørge for at også lavinntektsland fikk tilgang til vaksiner, men lyktes bare delvis fordi rike land sikret seg store mengder vaksiner først.',
      },
    },
    {
      id: 'pm-6-1-text-4',
      type: 'text',
      title: 'Andre globale utfordringer',
      content: `## Andre globale utfordringer

### Teknologi og overvåking

Den teknologiske utviklingen bringer med seg enorme muligheter, men også nye utfordringer. Kunstig intelligens (KI), ansiktsgjenkjenning og masseovervåking reiser spørsmål om personvern og menneskerettigheter. Autoritære regimer bruker teknologi til å overvåke og kontrollere sine innbyggere, mens selv demokratiske stater står overfor dilemmaer knyttet til balansen mellom sikkerhet og frihet.

### Cybertrusler

Cyberangrep mot kritisk infrastruktur, desinformasjonskampanjer og digital krigføring representerer nye trusler mot staters sikkerhet og demokratiske prosesser. Russlands påvirkning av valg i andre land og Kinas omfattende cyberspionasje er eksempler på hvordan det digitale rommet har blitt en ny arena for geopolitisk rivalisering.

### Atomvåpen

Trusselen fra atomvåpen har ikke forsvunnet med den kalde krigens slutt. Ni stater har atomvåpen, og risikoen for spredning til flere stater eller ikke-statlige aktører er fortsatt til stede. FNs atomvåpenforbudstraktat, som trådte i kraft i 2021, forbyr atomvåpen fullstendig, men ingen av atomvåpenstatene har sluttet seg til avtalen. Norge, som NATO-medlem, har heller ikke undertegnet avtalen, noe som har vært kontroversielt.

### Sammenhenger mellom utfordringene

Et sentralt poeng er at globale utfordringer henger sammen. Klimaendringer driver folk på flukt, som skaper migrasjonspress. Fattigdom gjør samfunn mer sårbare for pandemier. Konflikter forsterker ulikhet og hindrer utvikling. For å løse disse utfordringene trengs det helhetlige tilnærminger som tar hensyn til sammenhengene mellom dem. Det er nettopp dette FNs bærekraftsmål forsøker å gjøre.`,
    },
    {
      id: 'pm-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg to globale utfordringer og forklar hvordan de henger sammen. Bruk konkrete eksempler for å illustrere sammenhengen.',
        hints: ['Tenk på hvordan klimaendringer kan påvirke migrasjon, eller hvordan fattigdom gjør samfunn mer sårbare for pandemier'],
        solution: 'Eksempel: Klimaendringer og migrasjon henger tett sammen. Tørke i Sahel-regionen i Afrika ødelegger jordbruk og tvinger mennesker til å flytte. Stigende havnivå truer lavtliggende øystater i Stillehavet. Klimamigrasjon kan igjen skape press på mottakersamfunn og bidra til konflikt om ressurser. Et annet eksempel: Fattigdom og pandemier – fattige land har svakere helsesystemer, mindre tilgang til vaksiner og medisin, og befolkninger med dårligere ernæring, noe som gjør dem mer sårbare for pandemier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-1-text-5',
      type: 'text',
      title: 'Multilateralisme under press',
      content: `## Multilateralisme under press

Det internasjonale samarbeidet som trengs for å møte globale utfordringer, er under press. **Multilateralisme** – prinsippet om at stater løser felles problemer gjennom internasjonale organisasjoner og avtaler – utfordres av nasjonalisme, proteksjonisme og stormaktsrivalisering.

USAs tilbaketrekning fra Parisavtalen under president Trump (2017), Storbritannias utmelding av EU (Brexit), og økende spenning mellom USA og Kina illustrerer hvordan nasjonale interesser ofte trumfer internasjonalt samarbeid. Russlands fullskala invasjon av Ukraina i 2022 var et direkte brudd på folkeretten og svekket FNs sikkerhetsråds handlingsevne, ettersom Russland som fast medlem bruker sin vetorett.

Likevel finnes det også eksempler på at multilateralisme fungerer. Parisavtalen om klima, det internasjonale samarbeidet om vaksineutvikling under pandemien, og globale initiativer for å bekjempe fattigdom viser at stater fortsatt kan enes om felles mål. Spørsmålet er om det internasjonale systemet kan reformeres og styrkes raskt nok til å møte utfordringene vi står overfor.

### Norges rolle i multilateralt samarbeid

Norge har tradisjonelt vært en sterk forkjemper for multilateralisme og FN-systemet. Som et lite land er Norge avhengig av at internasjonale regler og institusjoner fungerer. Norge er en av de største bidragsyterne til FN per innbygger og har spilt en aktiv rolle i fredsmegling, bistand og internasjonalt klimasamarbeid. Samtidig må Norge balansere sine multilaterale forpliktelser med medlemskapet i NATO og tette bånd til USA.`,
    },
    {
      id: 'pm-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner multilateralisme?',
        options: [
          { id: 'a', text: 'At én stormakt bestemmer over andre stater', isCorrect: false },
          { id: 'b', text: 'At to stater inngår bilaterale avtaler', isCorrect: false },
          { id: 'c', text: 'At internasjonale spørsmål løses gjennom samarbeid mellom flere stater, ofte i internasjonale organisasjoner', isCorrect: true },
          { id: 'd', text: 'At stater kun fokuserer på nasjonale interesser', isCorrect: false },
        ],
        solution: 'Multilateralisme innebærer at internasjonale spørsmål løses gjennom samarbeid mellom flere stater, ofte innenfor rammen av internasjonale organisasjoner som FN. Prinsippet bygger på at globale utfordringer krever kollektive løsninger og at alle stater har en stemme i prosessen.',
      },
    },
    {
      id: 'pm-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «FNs bærekraftsmål er fine på papiret, men de har liten reell betydning.» Bruk argumenter både for og mot.',
        hints: ['Tenk på hva målene har oppnådd, men også på svakheter som manglende håndhevingsmekanismer'],
        solution: 'For: Målene er frivillige, det finnes ingen sanksjoner mot land som ikke gjør nok, flere mål kan stå i motsetning til hverandre, og verden ligger bak skjema på mange av målene. Mot: Målene gir en felles referanseramme for alle land, de brukes aktivt i politikkutforming og bistand, de har bidratt til økt bevissthet om sammenhengene mellom ulike utfordringer, og de har mobilisert ressurser. Konklusjon: Målene er ikke perfekte, men de representerer det mest ambisiøse forsøket noensinne på en felles global handlingsplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Klimapolitikk og bærekraftig utvikling
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6_2: TextbookChapter = {
  id: 'politikk-menneskerett-6-2',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6.2',
  title: 'Klimapolitikk og bærekraftig utvikling',
  description: 'Parisavtalen, klimarettferdighet, det grønne skiftet og Norges rolle i internasjonal klimapolitikk.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-6-1',
  nextChapter: 'politikk-menneskerett-6-3',
  competenceGoals: [
    'gjøre rede for sentrale internasjonale miljø- og klimaavtaler og drøfte Norges rolle',
    'drøfte spenningen mellom økonomisk vekst og miljøhensyn i et menneskerettighetsperspektiv',
  ],
  keyTerms: [
    { term: 'Parisavtalen', definition: 'Internasjonal klimaavtale vedtatt i 2015 der verdens land forplikter seg til å begrense global oppvarming til godt under 2 grader, helst 1,5 grader, sammenlignet med førindustrielt nivå.' },
    { term: 'Klimarettferdighet', definition: 'Prinsippet om at klimapolitikken må ta hensyn til at rike land har størst historisk ansvar for utslipp, mens fattige land rammes hardest av klimaendringene.' },
    { term: 'Det grønne skiftet', definition: 'Omstillingen fra en fossil økonomi basert på olje, gass og kull til en bærekraftig økonomi basert på fornybar energi og lavutslippsløsninger.' },
    { term: 'Nasjonalt fastsatte bidrag (NDC)', definition: 'Hvert lands selvbestemte klimamål under Parisavtalen. Landene rapporterer jevnlig om sine utslippsmål og hvordan de planlegger å nå dem.' },
    { term: 'Karbonnøytralitet', definition: 'En tilstand der et land eller en virksomhet ikke slipper ut mer klimagasser enn det som tas opp eller kompenseres for, slik at nettoutslippet er null.' },
    { term: 'Tap og skade (loss and damage)', definition: 'Begrepet brukes om de uunngåelige konsekvensene av klimaendringer som rammer sårbare land, og om rike lands ansvar for å kompensere for disse skadene.' },
  ],
  content: [
    {
      id: 'pm-6-2-intro',
      type: 'text',
      content: `# Klimapolitikk og bærekraftig utvikling

Klimaendringene er den kanskje mest alvorlige globale utfordringen i vår tid. FNs klimapanel (IPCC) har slått fast at menneskeskapte klimaendringer allerede fører til mer ekstremvær, stigende havnivå, tap av biologisk mangfold og truede levekår for millioner av mennesker. Uten kraftige utslippskutt vil konsekvensene bli stadig mer dramatiske.

Klimapolitikk handler om hvordan stater og det internasjonale samfunnet kan redusere klimagassutslipp, tilpasse seg endringene som allerede skjer, og fordele ansvaret mellom land på en rettferdig måte. Dette reiser dype politiske og etiske spørsmål: Hvem har ansvaret for klimaendringene? Hvem bør bære kostnadene ved omstillingen? Og hvordan kan vi sikre at overgangen til et lavutslippssamfunn skjer på en måte som ivaretar menneskerettigheter og sosial rettferdighet?`,
    },
    {
      id: 'pm-6-2-def-1',
      type: 'definition',
      title: 'Klimaendringer',
      content: `**Klimaendringer** viser til langsiktige endringer i jordens klimasystem, først og fremst forårsaket av menneskelige utslipp av klimagasser som karbondioksid (CO₂) og metan (CH₄). Forbrenning av fossile brensler (kull, olje, gass), avskoging og landbruk er de viktigste kildene til utslipp.

**FNs klimapanel (IPCC)** er det vitenskapelige organet som vurderer kunnskapen om klimaendringer. Panelet har fastslått med svært høy sikkerhet at menneskelig aktivitet er hovedårsaken til den globale oppvarmingen siden midten av 1900-tallet.`,
    },
    {
      id: 'pm-6-2-text-1',
      type: 'text',
      title: 'Fra Kyoto til Paris – internasjonal klimapolitikk',
      content: `## Fra Kyoto til Paris

Det internasjonale klimaarbeidet har utviklet seg gradvis siden FNs rammekonvensjon om klimaendringer (UNFCCC) ble vedtatt i 1992.

### Kyotoprotokollen (1997)

Kyotoprotokollen var den første juridisk bindende avtalen om å redusere klimagassutslipp. Avtalen påla industrilandene konkrete utslippsforpliktelser, men utviklingsland som Kina og India ble unntatt. USA, verdens største utslippsland på den tiden, ratifiserte aldri avtalen. Denne skjevheten ble et sentralt stridsspørsmål i internasjonal klimapolitikk.

### Parisavtalen (2015)

**Parisavtalen** representerte et gjennombrudd i klimaforhandlingene. For første gang forpliktet nesten alle verdens land seg til felles klimamål. Avtalens hovedmål er å begrense global oppvarming til **godt under 2 grader**, helst **1,5 grader**, sammenlignet med førindustrielt nivå.

I motsetning til Kyotoprotokollen bygger Parisavtalen på at alle land setter sine egne klimamål gjennom **nasjonalt fastsatte bidrag** (Nationally Determined Contributions, NDC). Hvert femte år skal landene rapportere sine fremskritt og skjerpe målene sine.

Parisavtalens styrke er at den er universell – nesten alle verdens land har sluttet seg til den. Svakheten er at landenes frivillige bidrag til sammen ikke er tilstrekkelig for å nå 1,5-gradersmålet. FNs miljøprogram (UNEP) har gjentatte ganger advart om at det er et stort gap mellom landenes lovnader og de utslippskuttene som faktisk trengs.

### COP-møtene

De årlige klimatoppmøtene (COP – Conference of the Parties) er arenaen der landene forhandler om klimapolitikk. COP26 i Glasgow (2021) og COP27 i Sharm el-Sheikh (2022) var viktige for å sette dagsorden. Ved COP27 ble det for første gang enighet om et fond for **tap og skade** (loss and damage) – kompensasjon til sårbare land som rammes av klimaendringer de selv har liten skyld i. COP28 i Dubai (2023) markerte den første globale statusgjennomgangen av Parisavtalen.`,
    },
    {
      id: 'pm-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedmålet i Parisavtalen?',
        options: [
          { id: 'a', text: 'Å forby all bruk av fossile brensler innen 2030', isCorrect: false },
          { id: 'b', text: 'Å begrense global oppvarming til godt under 2 grader, helst 1,5 grader', isCorrect: true },
          { id: 'c', text: 'Å pålegge alle land de samme utslippskuttene', isCorrect: false },
          { id: 'd', text: 'Å opprette et globalt klimapoliti som straffer land med høye utslipp', isCorrect: false },
        ],
        solution: 'Parisavtalens hovedmål er å begrense global oppvarming til godt under 2 grader, helst 1,5 grader, sammenlignet med førindustrielt nivå. Avtalen bygger på at alle land setter egne klimamål (nasjonalt fastsatte bidrag) og skjerper dem over tid.',
      },
    },
    {
      id: 'pm-6-2-text-2',
      type: 'text',
      title: 'Klimarettferdighet',
      content: `## Klimarettferdighet

Begrepet **klimarettferdighet** handler om at klimaendringene og klimapolitikken har svært ulike konsekvenser for ulike grupper og land. Klimarettferdighet bygger på to sentrale observasjoner:

**1. Rike land har størst historisk ansvar.** Industrilandene i Europa og Nord-Amerika har stått for mesteparten av de historiske klimagassutslippene som har skapt dagens problem. Land i det globale sør har bidratt minst til utslippene.

**2. Fattige land rammes hardest.** Klimaendringene rammer sårbare utviklingsland i uforholdsmessig stor grad. Små øystater trues av havnivåstigning, land i Sahel-regionen rammes av tørke og ørkendannelse, og monsunflom i Sør-Asia intensiveres. Disse landene har minst ressurser til å tilpasse seg endringene.

### Et rettferdighetsperspektiv

Klimarettferdighet innebærer at de som har størst ansvar for problemet, også bør ta den største byrden ved å løse det. Dette betyr at rike land bør kutte utslipp raskere, finansiere klimatilpasning i fattige land, og kompensere for tap og skade.

Prinsippet om **felles, men differensiert ansvar** (common but differentiated responsibilities) har vært sentralt i klimaforhandlingene siden 1992. Det betyr at alle land har et felles ansvar for å beskytte klimaet, men at rike land med høyere historiske utslipp bør gå foran.

Klimarettferdighet har også en **generasjonsdimensjon**: Dagens barn og unge vil leve med konsekvensene av klimaendringene i mye større grad enn generasjonene som har forårsaket dem. Dette har inspirert den globale ungdomsklimastreikbevegelsen, anført av svenske Greta Thunberg fra 2018.`,
    },
    {
      id: 'pm-6-2-example-1',
      type: 'example',
      title: 'Greta Thunberg og Fridays for Future',
      content: `I august 2018 satte den da 15 år gamle svenske Greta Thunberg seg utenfor den svenske Riksdagen med en håndmalt plakat med teksten «Skolstrejk för klimatet». Hver fredag skulket hun skolen for å protestere mot politikernes manglende klimahandling.

Thunbergs ensomme protest ble starten på en global bevegelse. **Fridays for Future** vokste til å bli en av de største ungdomsbevegelsene i moderne tid. I september 2019 deltok anslagsvis 4 millioner mennesker i klimastreiker over hele verden.

Thunberg ble invitert til å tale på FNs klimatoppmøte, Davos-forumet og EU-parlamentet. Hennes budskap var enkelt og direkte: «How dare you?» – hvordan våger dere å ignorere vitenskapen og svikte unge menneskers framtid?

Klimastreikbevegelsen illustrerer flere viktige poenger:
- **Ungdom som politiske aktører**: Unge mennesker har rett til å delta i politiske prosesser og påvirke beslutninger som angår deres framtid
- **Sivil ulydighet som virkemiddel**: Skolestrejken var en form for sivil ulydighet som skapte oppmerksomhet og debatt
- **Global mobilisering gjennom sosiale medier**: Bevegelsen spredte seg raskt takket være digital kommunikasjon
- **Krav om klimarettferdighet**: Bevegelsen krevde at politikerne lyttet til vitenskapen og handlet i tråd med Parisavtalen`,
    },
    {
      id: 'pm-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepet klimarettferdighet og diskuter hvorfor det er relevant i internasjonale klimaforhandlinger. Bruk konkrete eksempler.',
        hints: ['Tenk på hvem som har forårsaket klimaendringene og hvem som rammes hardest'],
        solution: 'Klimarettferdighet handler om at ansvaret for klimaendringene og konsekvensene er ujevnt fordelt. Rike industriland har stått for størstedelen av historiske utslipp, mens fattige og sårbare land rammes hardest. For eksempel er små øystater som Tuvalu truet av havnivåstigning de knapt har bidratt til. Klimarettferdighet innebærer at rike land bør kutte utslipp raskere, finansiere klimatilpasning i fattige land, og kompensere for tap og skade. Prinsippet om felles, men differensiert ansvar reflekterer dette i klimaforhandlingene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-2-text-3',
      type: 'text',
      title: 'Det grønne skiftet og Norges rolle',
      content: `## Det grønne skiftet

**Det grønne skiftet** betegner omstillingen fra en økonomi basert på fossile brensler til en bærekraftig økonomi drevet av fornybar energi. Denne omstillingen omfatter alle sektorer: energi, transport, industri, landbruk og forbruk.

### Nødvendige tiltak

For å nå klimamålene kreves det raske og gjennomgripende endringer:
- Utfasing av kull, olje og gass som energikilder
- Massiv utbygging av fornybar energi (sol, vind, vann)
- Elektrifisering av transport og industri
- Energieffektivisering av bygninger
- Endringer i forbruksmønstre og matproduksjon
- Utvikling av ny teknologi for karbonfangst og -lagring

### Norges spesielle dilemma

Norge befinner seg i en unik posisjon i klimapolitikken. På den ene siden er Norge et av verdens rikeste land takket være olje- og gassressursene, og landet har høye ambisjoner om utslippskutt. Norges klimamål er å redusere utslippene med minst 55 prosent innen 2030 (sammenlignet med 1990-nivå), og å bli et lavutslippssamfunn innen 2050.

På den andre siden er Norge en av verdens største eksportører av olje og gass. Norsk olje- og gasseksport bidrar til store klimagassutslipp i landene som kjøper og brenner drivstoffet. Kritikere mener det er hyklersk av Norge å framstå som et grønt foregangsland mens landet fortsetter å lete etter og produsere mer olje og gass. Tilhengere av norsk oljeproduksjon argumenterer med at norsk gass er renere enn kull og kan bidra til å redusere utslipp i andre land i en overgangsperiode.

### Oljefondet og etikk

Statens pensjonsfond utland (Oljefondet), verdens største statlige investeringsfond, har også blitt et verktøy i klimapolitikken. Fondet har trukket seg ut av investeringer i selskaper som produserer kull, og har skjerpet sine forventninger til selskaper om klimarisiko og utslippsreduksjoner. Samtidig eier fondet store aksjeandeler i olje- og gasselskaper, noe som reiser spørsmål om konsistens.`,
    },
    {
      id: 'pm-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er Norges spesielle dilemma i klimapolitikken?',
        options: [
          { id: 'a', text: 'Norge har ingen fornybare energikilder', isCorrect: false },
          { id: 'b', text: 'Norge har høye klimaambisjoner, men er samtidig en stor olje- og gasseksportør', isCorrect: true },
          { id: 'c', text: 'Norge er det landet i verden som slipper ut mest CO₂ per innbygger', isCorrect: false },
          { id: 'd', text: 'Norge har ikke undertegnet Parisavtalen', isCorrect: false },
        ],
        solution: 'Norges dilemma er at landet har høye ambisjoner om utslippskutt og vil være et grønt foregangsland, samtidig som det er en av verdens største eksportører av olje og gass. Eksportert olje og gass forårsaker store utslipp i andre land. Dette skaper en spenning mellom Norges klimaforpliktelser og landets økonomiske interesser.',
      },
    },
    {
      id: 'pm-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft Norges rolle i internasjonal klimapolitikk. Er det mulig å være et troverdig klimaforegangsland og samtidig være en stor olje- og gassnasjon? Begrunn svaret ditt.',
        hints: ['Vurder argumenter for og mot fortsatt norsk oljeproduksjon i et klimaperspektiv'],
        solution: 'For fortsatt produksjon: Norsk gass er renere enn kull og kan bidra i en overgangsperiode, inntektene finansierer det grønne skiftet, og norsk petroleumssektor har strenge miljøkrav. Mot: Det er inkonsistent å kreve utslippskutt av andre og selv produsere fossil energi, verden må la mesteparten av gjenværende fossile ressurser bli i bakken for å nå klimamålene, og det sender feil signal internasjonalt. En mulig konklusjon er at Norge bør sette en sluttdato for letevirksomhet og gradvis omstille seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Greta Thunberg skapte en global ungdomsbevegelse for klimahandling. Diskuter hvilken rolle unge mennesker kan og bør spille i klimapolitikken. Er skolestreik et legitimt politisk virkemiddel?',
        hints: ['Tenk på stemmerett, demokratisk deltakelse og sivil ulydighet'],
        solution: 'Unge mennesker har en spesiell rett til å engasjere seg i klimapolitikken fordi det er deres framtid som står på spill. Skolestreik kan ses som en form for sivil ulydighet som skaper nødvendig oppmerksomhet om en livsviktig sak. Kritikere mener ungdom bør bruke andre kanaler og at skolefravær er problematisk. Tilhengere peker på at tradisjonelle kanaler har vært utilstrekkelige og at streiken har skapt mer debatt enn årevis med tradisjonelt arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Fattigdom, ulikhet og utvikling
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6_3: TextbookChapter = {
  id: 'politikk-menneskerett-6-3',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6.3',
  title: 'Fattigdom, ulikhet og utvikling',
  description: 'Global ulikhet, bistandspolitikk, Verdensbanken og IMF, rettferdig handel og ulike perspektiver på utvikling.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-6-2',
  nextChapter: 'politikk-menneskerett-6-4',
  competenceGoals: [
    'gjøre rede for årsaker til fattigdom og ulikhet globalt og drøfte ulike tilnærminger til utvikling',
    'drøfte forholdet mellom menneskerettigheter, fattigdom og bistand',
  ],
  keyTerms: [
    { term: 'Absolutt fattigdom', definition: 'Å leve under Verdensbankens fattigdomsgrense på 2,15 dollar per dag (justert for kjøpekraft). Innebærer mangel på grunnleggende behov som mat, rent vann, helse og bolig.' },
    { term: 'Relativ fattigdom', definition: 'Å ha vesentlig lavere levestandard enn det som er vanlig i samfunnet man lever i. I Norge regnes man som relativt fattig hvis man har under 60 prosent av medianinntekten.' },
    { term: 'Bistand', definition: 'Økonomisk og teknisk hjelp fra rike land til fattigere land for å fremme utvikling. Norge gir om lag 1 prosent av bruttonasjonalinntekten i bistand, noe som er blant de høyeste andelene i verden.' },
    { term: 'Verdensbanken', definition: 'Internasjonal finansinstitusjon som gir lån og faglig bistand til utviklingsland. Kritiseres for å ha stilt strenge betingelser som ikke alltid har tjent mottakerlandene.' },
    { term: 'IMF (Det internasjonale pengefondet)', definition: 'Internasjonal organisasjon som overvåker det globale finanssystemet og gir lån til land i økonomisk krise, ofte med krav om økonomiske reformer.' },
    { term: 'Rettferdig handel (Fairtrade)', definition: 'Et handelssystem som sikrer at produsenter i utviklingsland får en minimumspris for varene sine og bedre arbeidsforhold, som alternativ til fritt marked-prising.' },
    { term: 'Strukturtilpasningsprogrammer', definition: 'Økonomiske reformpakker som Verdensbanken og IMF krevde av utviklingsland som betingelse for lån. Inkluderte privatisering, kutt i offentlige utgifter og handelsliberalisering.' },
  ],
  content: [
    {
      id: 'pm-6-3-intro',
      type: 'text',
      content: `# Fattigdom, ulikhet og utvikling

Til tross for enorm økonomisk vekst globalt de siste tiårene lever fortsatt hundrevis av millioner mennesker i ekstrem fattigdom. Samtidig har ulikheten mellom de rikeste og de fattigste økt dramatisk. Ifølge Oxfam eier verdens 1 prosent rikeste mer enn dobbelt så mye som de resterende 99 prosentene til sammen. Denne skjeve fordelingen reiser grunnleggende spørsmål om rettferdighet, makt og menneskerettigheter.

Fattigdom handler ikke bare om penger. Det handler om mangel på muligheter, frihet og verdighet. Fattigdom innebærer manglende tilgang til utdanning, helsetjenester, rent vann og politisk innflytelse. Som den indiske økonomen og nobelprisvinneren Amartya Sen har påpekt, bør utvikling forstås som en utvidelse av menneskers frihet – frihet til å leve det livet de har grunn til å verdsette.

I dette kapittelet skal vi se nærmere på årsaker til global fattigdom og ulikhet, ulike tilnærminger til utvikling, og rollen til internasjonale organisasjoner og bistand.`,
    },
    {
      id: 'pm-6-3-def-1',
      type: 'definition',
      title: 'Fattigdom – absolutt og relativ',
      content: `**Absolutt fattigdom** betyr å leve under et minimumsnivå av materiell levestandard. Verdensbankens internasjonale fattigdomsgrense er på 2,15 dollar per dag (justert for kjøpekraft). I 2022 levde anslagsvis 700 millioner mennesker under denne grensen.

**Relativ fattigdom** betyr å ha vesentlig lavere levestandard enn det som er vanlig i ens eget samfunn. I Norge regnes man som relativt fattig dersom husholdet har under 60 prosent av medianinntekten. Selv i et rikt land som Norge lever om lag 110 000 barn i husholdninger med vedvarende lav inntekt.

**Multidimensjonal fattigdom** er et bredere mål som også tar hensyn til mangel på utdanning, helse, levestandard og andre dimensjoner utover inntekt.`,
    },
    {
      id: 'pm-6-3-text-1',
      type: 'text',
      title: 'Årsaker til global ulikhet',
      content: `## Årsaker til global ulikhet

Den enorme ulikheten i verden i dag har dype historiske og strukturelle årsaker. Det finnes ikke én enkelt forklaring, men et sammensatt bilde av faktorer som forsterker hverandre.

### Historiske årsaker

**Kolonialismen** er en av de viktigste historiske forklaringene på dagens globale ulikhet. Europeiske kolonimakter utnyttet ressurser og arbeidskraft i Afrika, Asia og Latin-Amerika i flere hundre år. De kolonialiserte landene ble ofte redusert til råvareleverandører, mens industrialiseringen skjedde i Europa. Da koloniene ble selvstendige, arvet de ofte svake institusjoner, kunstige grenser og økonomier tilpasset koloniherrenes behov.

### Strukturelle årsaker

**Urettferdige handelsregler:** Det globale handelssystemet har historisk favorisert rike land. Subsidier til jordbruk i EU og USA gjør det vanskelig for bønder i utviklingsland å konkurrere. Tollbarrierer hindrer fattige land i å eksportere foredlede varer.

**Gjeldsbyrde:** Mange utviklingsland har store gjeldsbyrder som begrenser mulighetene for å investere i utdanning, helse og infrastruktur. Gjeldsbetjening kan ta en stor del av statsbudsjettet.

**Kapitalflukt og skatteparadiser:** Store pengesummer strømmer ut av utviklingsland gjennom ulovlig kapitalflukt, skatteunndragelse og bruk av skatteparadiser. Ifølge noen beregninger overstiger kapitalflukten fra Afrika det samlede bistandsvolumet som kommer inn.

**Svak styring og korrupsjon:** I mange fattige land hindrer korrupsjon, svake institusjoner og dårlig styresett utviklingen. Ressursrikdom kan paradoksalt nok forsterke problemet – den såkalte «ressursforbannelsen» innebærer at naturressurser beriker eliter mens den brede befolkningen forblir fattig.`,
    },
    {
      id: 'pm-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom absolutt og relativ fattigdom?',
        options: [
          { id: 'a', text: 'Absolutt fattigdom finnes bare i Afrika, relativ fattigdom finnes bare i Europa', isCorrect: false },
          { id: 'b', text: 'Absolutt fattigdom betyr å leve under et minimumsnivå, relativ fattigdom betyr å ha vesentlig lavere levestandard enn det som er vanlig i ens samfunn', isCorrect: true },
          { id: 'c', text: 'Absolutt fattigdom er verre enn relativ fattigdom, som egentlig ikke er ekte fattigdom', isCorrect: false },
          { id: 'd', text: 'Det er ingen reell forskjell mellom de to begrepene', isCorrect: false },
        ],
        solution: 'Absolutt fattigdom innebærer å leve under et minimumsnivå av materiell levestandard (Verdensbankens grense: 2,15 dollar per dag), mens relativ fattigdom betyr å ha vesentlig lavere levestandard enn det som er vanlig i samfunnet man lever i. Begge formene for fattigdom er reelle og har alvorlige konsekvenser for dem som rammes.',
      },
    },
    {
      id: 'pm-6-3-text-2',
      type: 'text',
      title: 'Bistand og utviklingssamarbeid',
      content: `## Bistand og utviklingssamarbeid

Bistand – økonomisk og teknisk hjelp fra rike til fattigere land – har vært et sentralt virkemiddel i utviklingspolitikken siden 1950-tallet. Men bistandens rolle og effektivitet er omdiskutert.

### Norsk bistand

Norge er en av verdens mest sjenerøse bistandsgivere, med mål om å gi minst 1 prosent av bruttonasjonalinntekten (BNI) i bistand. I 2023 ga Norge om lag 50 milliarder kroner i bistand. Norsk bistand rettes mot utdanning, helse, klima, næringsutvikling og humanitær hjelp, med særlig fokus på Afrika.

Norad (Direktoratet for utviklingssamarbeid) er den norske statens fagorgan for utviklingssamarbeid. Norge har også vært en viktig bidragsyter til multilaterale organisasjoner som FN, Verdensbanken og Den globale vaksinealliansen (Gavi).

### Ulike syn på bistand

**Tilhengere av bistand** argumenterer med at bistand redder liv, bygger infrastruktur, styrker institusjoner og bidrar til utvikling. Bistand til vaksineprogrammer, for eksempel, har bidratt til å utrydde kopper og nesten utrydde polio. Bistand til utdanning øker livskvaliteten for millioner av barn.

**Kritikere av bistand** peker på at bistand kan skape avhengighet, undergrave lokale markeder og styrke korrupte regimer. Den zambiske økonomen Dambisa Moyo har i boken «Dead Aid» (2009) argumentert for at bistand gjør mer skade enn nytte, og at handel, investeringer og god styring er viktigere for utvikling.

En mellomposisjon anerkjenner at bistand kan være nyttig, men at den må utformes riktig. God bistand styrker mottakerlandets egne institusjoner, er tilpasset lokale behov, og fases gradvis ut etter hvert som landene utvikles.`,
    },
    {
      id: 'pm-6-3-text-3',
      type: 'text',
      title: 'Verdensbanken, IMF og strukturtilpasning',
      content: `## Verdensbanken og IMF

**Verdensbanken** og **Det internasjonale pengefondet (IMF)** ble grunnlagt etter andre verdenskrig (Bretton Woods-konferansen, 1944) for å fremme økonomisk stabilitet og utvikling. De to organisasjonene har spilt en enorm rolle i utviklingspolitikken, men har også vært gjenstand for sterk kritikk.

### Strukturtilpasningsprogrammer

Fra 1980-tallet påla Verdensbanken og IMF mange utviklingsland såkalte **strukturtilpasningsprogrammer** som betingelse for å få lån. Disse programmene krevde typisk:
- Privatisering av statlige bedrifter
- Kutt i offentlige utgifter (inkludert helse og utdanning)
- Handelsliberalisering og deregulering
- Nedbygging av subsidier

Kritikere hevder at strukturtilpasningsprogrammene forverret situasjonen for de fattigste i mange land. Kutt i helse- og utdanningsbudsjetter rammet de mest sårbare, mens liberalisering av handel ofte ga fordeler til utenlandske selskaper på bekostning av lokale produsenter.

### Reform og selvkritikk

I de senere årene har Verdensbanken og IMF delvis erkjent disse problemene og justert sine tilnærminger. Det legges nå mer vekt på «eierskap» – at landene selv skal utforme sine utviklingsstrategier. Likevel kritiseres institusjonene fortsatt for å være dominert av rike vestlige land, som har størst stemmeandel i styreorganene.

### Rettferdig handel som alternativ

**Rettferdig handel** (Fairtrade) har vokst frem som et alternativ til det tradisjonelle handelssystemet. Fairtrade-merkede produkter garanterer at produsenter i utviklingsland får en minimumspris, at arbeidsforholdene er anstendige, og at en del av inntektene investeres i lokalsamfunnet. Kaffe, kakao, bananer og bomull er blant de vanligste Fairtrade-produktene.

Tilhengere mener rettferdig handel gir fattige bønder og arbeidere bedre kår og mer forutsigbarhet. Kritikere påpeker at Fairtrade bare når en liten del av verdens produsenter og at systemet kan forstyrre lokale markeder.`,
    },
    {
      id: 'pm-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva strukturtilpasningsprogrammer var, og diskuter hvilke konsekvenser de hadde for utviklingsland.',
        hints: ['Tenk på hva programmene krevde og hvem som ble rammet av kuttene'],
        solution: 'Strukturtilpasningsprogrammer var betingelser Verdensbanken og IMF stilte til utviklingsland som fikk lån. De krevde privatisering, kutt i offentlige utgifter, handelsliberalisering og deregulering. Konsekvensene var ofte negative for de fattigste: kutt i helse- og utdanningsbudsjetter forverret tilbudet for sårbare grupper, privatisering av vannverk og strøm økte prisene, og handelsliberalisering gjorde det vanskeligere for lokale produsenter å konkurrere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er rettferdig handel (Fairtrade)?',
        options: [
          { id: 'a', text: 'Et system der alle land betaler samme pris for alle varer', isCorrect: false },
          { id: 'b', text: 'Et handelssystem som sikrer at produsenter i utviklingsland får en minimumspris og bedre arbeidsforhold', isCorrect: true },
          { id: 'c', text: 'En internasjonal avtale som forbyr toll mellom alle land', isCorrect: false },
          { id: 'd', text: 'Et bistandsprogram som gir gratis varer til fattige land', isCorrect: false },
        ],
        solution: 'Rettferdig handel (Fairtrade) er et handelssystem som sikrer at produsenter i utviklingsland får en minimumspris for varene sine, at arbeidsforholdene er anstendige, og at en del av inntektene investeres i lokalsamfunnet. Det er et alternativ til det tradisjonelle markedet, der prisene kan variere sterkt og produsenter kan presses på pris.',
      },
    },
    {
      id: 'pm-6-3-text-4',
      type: 'text',
      title: 'Ulikhet som menneskerettslig utfordring',
      content: `## Ulikhet som menneskerettslig utfordring

Fattigdom og ulikhet er ikke bare økonomiske problemer – de er også menneskerettslige utfordringer. FNs menneskerettighetserklæring slår fast at alle mennesker har rett til en levestandard som er tilstrekkelig for helse og velvære, inkludert mat, klær, bolig og helseomsorg (artikkel 25). Når millioner av mennesker lever i ekstrem fattigdom, er denne rettigheten krenket.

De **økonomiske, sosiale og kulturelle rettighetene** (ØSK-rettighetene) forplikter stater til å arbeide for å realisere retten til utdanning, helse, bolig og et tilfredsstillende levekår. Men disse rettighetene har tradisjonelt fått mindre oppmerksomhet enn sivile og politiske rettigheter, og mange stater mangler ressurser eller vilje til å oppfylle dem.

### Amartya Sens kapabilitetstilnærming

Den indiske økonomen **Amartya Sen** har utviklet en innflytelsesrik tilnærming til utvikling som kalles **kapabilitetstilnærmingen**. Sen argumenterer for at utvikling ikke bare bør måles i økonomisk vekst eller BNP per innbygger, men i menneskers reelle muligheter (kapabiliteter) til å leve det livet de har grunn til å verdsette.

Kapabiliteter inkluderer evnen til å leve et langt og sunt liv, ha tilgang til utdanning, delta i politiske prosesser, ha arbeid og inntekt, og leve fritt fra vold og diskriminering. Fattigdom er i denne forståelsen en **berøvelse av grunnleggende kapabiliteter**, ikke bare mangel på penger.

Sens tilnærming har hatt stor innflytelse på utviklingspolitikken og ligger til grunn for FNs Human Development Index (HDI), som måler utvikling basert på forventet levealder, utdanning og inntekt.`,
    },
    {
      id: 'pm-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar Amartya Sens kapabilitetstilnærming. Hvorfor mener Sen at utvikling ikke bare handler om økonomisk vekst?',
        hints: ['Tenk på hva som gir mennesker mulighet til å leve gode liv, utover penger'],
        solution: 'Amartya Sen mener at utvikling handler om å utvide menneskers reelle muligheter (kapabiliteter) til å leve det livet de har grunn til å verdsette. BNP per innbygger sier lite om hvordan ressursene er fordelt, om folk har tilgang til utdanning og helsetjenester, eller om de kan delta i demokratiske prosesser. Et land kan ha høy BNP men likevel ha store grupper som lever i ufrihet og mangel. Utvikling bør måles i menneskers faktiske frihet og muligheter, ikke bare i økonomiske tall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om bistand er et effektivt virkemiddel for å bekjempe global fattigdom. Trekk inn argumenter både fra tilhengere og kritikere av bistand.',
        hints: ['Bruk eksempler som vaksineprogrammer og strukturtilpasning, og vurder Dambisa Moyos kritikk'],
        solution: 'For bistand: Bistand har bidratt til å utrydde sykdommer, øke skoledeltakelse og bygge infrastruktur. Vaksineprogrammer finansiert av bistand har reddet millioner av liv. Mot bistand: Dambisa Moyo argumenterer for at bistand kan skape avhengighet, undergrave lokale markeder og berike korrupte ledere. Strukturtilpasningsprogrammer førte til kutt i offentlige tjenester. En balansert vurdering anerkjenner at bistand kan virke positivt når den er godt utformet, men at handel, investeringer og god styring er like viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Migrasjon og flyktningpolitikk
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6_4: TextbookChapter = {
  id: 'politikk-menneskerett-6-4',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6.4',
  title: 'Migrasjon og flyktningpolitikk',
  description: 'Flyktningkonvensjonen, asylprosessen, integrering og norsk innvandringspolitikk i et menneskerettighetsperspektiv.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-6-3',
  nextChapter: 'politikk-menneskerett-6-5',
  competenceGoals: [
    'gjøre rede for flyktningkonvensjonen og drøfte flyktning- og asylpolitikk i et menneskerettighetsperspektiv',
    'drøfte utfordringer knyttet til migrasjon, integrering og mangfold i Norge og internasjonalt',
  ],
  keyTerms: [
    { term: 'Flyktning', definition: 'En person som har flyktet fra hjemlandet på grunn av velgrunnet frykt for forfølgelse basert på rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en bestemt sosial gruppe (FNs flyktningkonvensjon).' },
    { term: 'Flyktningkonvensjonen', definition: 'FN-konvensjonen om flyktningers stilling fra 1951, som definerer hvem som er flyktning og hvilke rettigheter flyktninger har. Forbyr tilbakesending til land der man risikerer forfølgelse (non-refoulement).' },
    { term: 'Asyl', definition: 'Beskyttelse som en stat gir til en person som har flyktet fra forfølgelse i hjemlandet. I Norge behandles asylsøknader av Utlendingsdirektoratet (UDI).' },
    { term: 'Non-refoulement', definition: 'Prinsippet om at ingen skal returneres til et land der de risikerer forfølgelse, tortur eller umenneskelig behandling. Regnes som en ufravikelig regel i internasjonal rett.' },
    { term: 'Integrering', definition: 'Prosessen der innvandrere og flyktninger blir del av samfunnet gjennom deltakelse i arbeidsliv, utdanning, sosialt liv og demokratiske prosesser, samtidig som de kan beholde sin kulturelle identitet.' },
    { term: 'Internflyktning', definition: 'En person som er fordrevet fra hjemstedet sitt men som ikke har krysset en internasjonal grense. Internflyktninger er ikke omfattet av flyktningkonvensjonen.' },
  ],
  content: [
    {
      id: 'pm-6-4-intro',
      type: 'text',
      content: `# Migrasjon og flyktningpolitikk

Migrasjon er et grunnleggende menneskelig fenomen. Gjennom hele historien har mennesker flyttet på seg i søken etter bedre livsbetingelser, trygghet eller nye muligheter. I dag lever over 280 millioner mennesker utenfor landet de er født i. Av disse er over 100 millioner tvangsflyktninger – mennesker som har blitt tvunget på flukt av krig, konflikt, forfølgelse eller naturkatastrofer.

Migrasjon og flukt reiser noen av de mest komplekse politiske og etiske spørsmålene i vår tid: Hvem har rett til beskyttelse? Hvor mange flyktninger bør et land ta imot? Hvordan skal integrering skje? Og hvordan kan vi balansere nasjonale interesser med internasjonale forpliktelser og menneskerettigheter?

I dette kapittelet skal vi se på det internasjonale rammeverket for flyktningbeskyttelse, asylprosessen, integrering og norsk innvandringspolitikk.`,
    },
    {
      id: 'pm-6-4-def-1',
      type: 'definition',
      title: 'Migrasjon – ulike former',
      content: `**Migrasjon** er et samlebegrep for flytting over landegrenser eller over lengre avstander innenfor et land.

**Frivillig migrasjon** (arbeidsmigrasjon): Mennesker som flytter for å søke arbeid, utdanning eller bedre livsbetingelser. Eksempel: Polske arbeidere som kommer til Norge.

**Tvungen migrasjon** (flukt): Mennesker som er tvunget til å flykte fra krig, forfølgelse, naturkatastrofer eller andre trusler. Inkluderer flyktninger, asylsøkere og internflyktninger.

**Irregulær migrasjon**: Mennesker som migrerer uten gyldig oppholdstillatelse, enten ved å krysse en grense ulovlig eller ved å oppholde seg i et land etter at tillatelsen har utløpt.

Skillet mellom frivillig og tvungen migrasjon er ikke alltid entydig. Mange migranter drives av en kombinasjon av økonomiske, sosiale og sikkerhetsmessige faktorer.`,
    },
    {
      id: 'pm-6-4-text-1',
      type: 'text',
      title: 'Flyktningkonvensjonen og det internasjonale beskyttelsessystemet',
      content: `## Flyktningkonvensjonen

FNs flyktningkonvensjon fra 1951 er hjørnesteinen i det internasjonale systemet for flyktningbeskyttelse. Konvensjonen ble vedtatt i kjølvannet av andre verdenskrig, da millioner av mennesker var fordrevet i Europa. Den ble utvidet med tilleggsprotokollen fra 1967 til å gjelde globalt.

### Hvem er flyktning?

Ifølge flyktningkonvensjonen er en flyktning en person som befinner seg utenfor hjemlandet sitt og har **velgrunnet frykt for forfølgelse** på grunn av:
- Rase
- Religion
- Nasjonalitet
- Politisk oppfatning
- Tilhørighet til en bestemt sosial gruppe

Denne definisjonen er relativt snever. Den dekker ikke mennesker som flykter fra generell fattigdom, naturkatastrofer eller klimaendringer, selv om disse menneskene kan være i like stor nød. Spørsmålet om «klimaflyktninger» har blitt stadig mer aktuelt, men det finnes foreløpig ingen internasjonal avtale som gir dem beskyttelse.

### Non-refoulement

Det viktigste prinsippet i flyktningretten er **non-refoulement** – forbudet mot å returnere en flyktning til et land der vedkommende risikerer forfølgelse, tortur eller umenneskelig behandling. Dette prinsippet regnes som ufravikelig (jus cogens) i internasjonal rett.

### FNs høykommissær for flyktninger (UNHCR)

**UNHCR** er FN-organet som har ansvar for å beskytte flyktninger og hjelpe dem med å finne varige løsninger. Varige løsninger kan være frivillig retur til hjemlandet, integrering i vertsland, eller gjenbosetting i et tredjeland. UNHCR opererer i over 130 land og bistår om lag 120 millioner fordrevne mennesker.`,
    },
    {
      id: 'pm-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer prinsippet om non-refoulement?',
        options: [
          { id: 'a', text: 'At flyktninger har rett til statsborgerskap i det landet de flykter til', isCorrect: false },
          { id: 'b', text: 'At ingen skal returneres til et land der de risikerer forfølgelse, tortur eller umenneskelig behandling', isCorrect: true },
          { id: 'c', text: 'At alle land er forpliktet til å ta imot like mange flyktninger', isCorrect: false },
          { id: 'd', text: 'At flyktninger selv kan velge hvilket land de vil bo i', isCorrect: false },
        ],
        solution: 'Non-refoulement er det mest grunnleggende prinsippet i flyktningretten. Det innebærer at ingen skal returneres til et land der de risikerer forfølgelse, tortur eller umenneskelig behandling. Prinsippet er nedfelt i flyktningkonvensjonen og regnes som ufravikelig i internasjonal rett.',
      },
    },
    {
      id: 'pm-6-4-text-2',
      type: 'text',
      title: 'Asylprosessen i Norge',
      content: `## Asylprosessen i Norge

Når en person ankommer Norge og søker om beskyttelse (asyl), starter en prosess som involverer flere instanser.

### Registrering og søknad
Asylsøkeren registrerer seg hos politiet, som tar fingeravtrykk og registrerer identitet. Søkeren blir innkvartert på et ankomstsenter og senere i et asylmottak mens søknaden behandles.

### Behandling av søknaden
**Utlendingsdirektoratet (UDI)** behandler søknaden. UDI gjennomfører et intervju med søkeren for å kartlegge bakgrunnen for flukt og vurdere om vedkommende oppfyller vilkårene for beskyttelse. Dersom søkeren har reist gjennom et trygt tredjeland, kan Norge i noen tilfeller returnere vedkommende dit i henhold til Dublin-forordningen.

### Vedtak og klage
Dersom UDI innvilger asyl, får søkeren oppholdstillatelse og rett til å bo i en kommune. Dersom UDI avslår, kan vedtaket påklages til **Utlendingsnemnda (UNE)**. Dersom også UNE avslår, har søkeren i utgangspunktet plikt til å forlate Norge.

### Dublin-forordningen
Dublin-forordningen fastslår at det første EU/EØS-landet en asylsøker kommer til, er ansvarlig for å behandle søknaden. Ordningen har vært kontroversiell fordi den legger uforholdsmessig stort ansvar på grenseland som Hellas og Italia.`,
    },
    {
      id: 'pm-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i asylprosessen i Norge. Hvilke instanser er involvert, og hva skjer dersom søknaden avslås?',
        hints: ['Nevn UDI, UNE og Dublin-forordningen'],
        solution: 'Asylprosessen starter med registrering hos politiet. Søkeren plasseres i et asylmottak mens søknaden behandles. UDI gjennomfører intervju og vurderer beskyttelsesbehovet. Ved innvilgelse får søkeren oppholdstillatelse. Ved avslag kan vedtaket klages inn til UNE. Endelig avslag innebærer plikt til å forlate Norge. Dublin-forordningen kan innebære retur til det første EU/EØS-landet søkeren ble registrert i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-4-text-3',
      type: 'text',
      title: 'Flyktningkrisen og Europas respons',
      content: `## Flyktningkrisen og Europas respons

I 2015 opplevde Europa den største flyktningkrisen siden andre verdenskrig. Over en million mennesker, mange fra Syria, Afghanistan og Irak, krysset Middelhavet og søkte beskyttelse i europeiske land. Krisen avdekket alvorlige svakheter i Europas felles asylsystem og skapte dyp politisk uenighet.

### Ulik fordeling
Flyktningene ble svært ujevnt fordelt. Tyskland tok imot flest – nesten 900 000 asylsøkere i 2015 alene, under kansler Angela Merkels parole «Wir schaffen das». Andre land, særlig i Øst-Europa, nektet å ta imot flyktninger og bygde gjerdser langs grensene. EU forsøkte å innføre en obligatorisk fordelingsmekanisme, men dette ble blokkert av flere medlemsland.

### Norges rolle i 2015
Norge mottok om lag 31 000 asylsøkere i 2015, det høyeste antallet noensinne. I ettertid ble innvandringspolitikken strammet betydelig inn med raskere saksbehandling, strengere krav til familiegjenforening, og avtaler om retur.

### Ukraina-krisen 2022
Russlands invasjon av Ukraina utløste den raskeste flyktningstrømmen i Europa siden andre verdenskrig. Over 6 millioner ukrainere flyktet i løpet av de første månedene. EU aktiverte for første gang direktivet om midlertidig beskyttelse, som ga ukrainske flyktninger umiddelbar oppholdstillatelse uten individuell asylbehandling.

Norge ga kollektiv beskyttelse til ukrainske flyktninger, og over 80 000 ukrainere ble registrert. Responsen var preget av stor solidaritet, men vakte også debatt om forskjellsbehandling: Hvorfor ble ukrainske flyktninger mottatt med åpne armer, mens flyktninger fra Syria og Afghanistan møtte strengere krav?`,
    },
    {
      id: 'pm-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva var det viktigste elementet i EUs respons på den ukrainske flyktningkrisen i 2022?',
        options: [
          { id: 'a', text: 'EU stengte grensene for alle flyktninger', isCorrect: false },
          { id: 'b', text: 'EU aktiverte direktivet om midlertidig beskyttelse, som ga ukrainere umiddelbar oppholdstillatelse', isCorrect: true },
          { id: 'c', text: 'EU sendte militærstyrker til Ukraina for å stanse flukten', isCorrect: false },
          { id: 'd', text: 'EU betalte Ukraina for å holde flyktningene innenfor egne grenser', isCorrect: false },
        ],
        solution: 'EU aktiverte for første gang direktivet om midlertidig beskyttelse, som ga ukrainske flyktninger umiddelbar oppholdstillatelse i EU-land uten individuell asylbehandling. Dette var en rask og pragmatisk respons som ble mulig fordi det var bred politisk enighet om å hjelpe.',
      },
    },
    {
      id: 'pm-6-4-text-4',
      type: 'text',
      title: 'Integrering – muligheter og utfordringer',
      content: `## Integrering – muligheter og utfordringer

Integrering handler om at innvandrere og flyktninger blir fullverdige deltakere i samfunnet. God integrering forutsetter deltakelse i arbeidsliv, utdanning, sosialt liv og demokratiske prosesser.

### Norsk integreringspolitikk
Norsk integreringspolitikk er bygget på **introduksjonsprogrammet**, som gir nyankomne flyktninger rett og plikt til et to til tre år langt program med norskopplæring, samfunnskunnskap og arbeidsrettede tiltak. Norge stiller også krav om bestått norskprøve og samfunnsfagprøve for permanent oppholdstillatelse og statsborgerskap.

### Suksessfaktorer og utfordringer
Forskning viser at de viktigste faktorene for vellykket integrering er:
- **Arbeid**: Nøkkelen til økonomisk selvstendighet og sosial tilhørighet
- **Språk**: Gode norskkunnskaper er avgjørende for samfunnsdeltakelse
- **Utdanning**: Tilgang til utdanning og anerkjennelse av medbrakt kompetanse
- **Sosiale nettverk**: Kontakt med både landsmenn og nordmenn

Utfordringer inkluderer diskriminering på arbeids- og boligmarkedet, langsom saksbehandling, begrensede muligheter for realkompetansevurdering, og segregering i noen boområder.

### Mangfold og identitet
Norge har blitt et mer mangfoldig samfunn. Om lag 18 prosent av befolkningen har innvandrerbakgrunn. Debatten om integrering berører grunnleggende spørsmål: Hva betyr det å være norsk? Hvor mye skal nykommere tilpasse seg, og hvor mye skal samfunnet tilpasse seg dem?`,
    },
    {
      id: 'pm-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter hva som er de viktigste faktorene for vellykket integrering av flyktninger i Norge. Hvilke utfordringer finnes?',
        hints: ['Tenk på arbeid, språk, utdanning og sosiale nettverk'],
        solution: 'De viktigste faktorene er arbeid (økonomisk selvstendighet og sosial deltakelse), norskkunnskaper, tilgang til utdanning, og sosiale nettverk. Utfordringer inkluderer diskriminering på arbeids- og boligmarkedet, lang ventetid i mottak, vanskeligheter med å få medbrakt utdanning anerkjent, og segregering. Introduksjonsprogrammet er et viktig verktøy, men kvaliteten varierer mellom kommunene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om det er forskjellsbehandling i hvordan Europa møter flyktninger fra ulike deler av verden. Bruk eksemplene fra 2015 (Syria) og 2022 (Ukraina).',
        hints: ['Vurder likheter og forskjeller i respons, og diskuter mulige forklaringer'],
        solution: 'Likheter: Begge situasjonene utløste solidaritet i den første fasen. Forskjeller: Ukrainere fikk umiddelbar midlertidig beskyttelse, syrere måtte gjennom individuelle asylprosesser. Mulige forklaringer: Geografisk nærhet, kulturell likhet, at Ukraina er europeisk, og politisk enighet mot Russland. Kritikere mener dette viser doble standarder. Andre peker på reelle forskjeller i situasjonene. Fra et menneskerettslig perspektiv er det problematisk dersom bakgrunn avgjør graden av beskyttelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-6-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er flyktningkonvensjonens definisjon av en flyktning?',
        options: [
          { id: 'a', text: 'Enhver person som forlater hjemlandet sitt', isCorrect: false },
          { id: 'b', text: 'En person som flykter fra fattigdom og søker bedre økonomi', isCorrect: false },
          { id: 'c', text: 'En person med velgrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller sosial gruppetilhørighet', isCorrect: true },
          { id: 'd', text: 'En person som har blitt fordrevet av klimaendringer', isCorrect: false },
        ],
        solution: 'Ifølge FNs flyktningkonvensjon er en flyktning en person som befinner seg utenfor hjemlandet og har velgrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en bestemt sosial gruppe. Definisjonen dekker ikke klimaflyktninger eller mennesker som flykter fra generell fattigdom.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Aktivisme, sivilsamfunn og forandring
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6_5: TextbookChapter = {
  id: 'politikk-menneskerett-6-5',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6.5',
  title: 'Aktivisme, sivilsamfunn og forandring',
  description: 'Sosiale bevegelser, sivil ulydighet, digital aktivisme, ungdomsengasjement og sivilsamfunnets rolle i demokratiet.',
  estimatedMinutes: 45,
  prevChapter: 'politikk-menneskerett-6-4',
  nextChapter: undefined,
  competenceGoals: [
    'drøfte sivilsamfunnets og sosiale bevegelsers rolle for politisk endring og menneskerettighetenes utvikling',
    'vurdere ulike former for aktivisme og politisk deltakelse i et demokratiperspektiv',
  ],
  keyTerms: [
    { term: 'Sivilsamfunn', definition: 'Den delen av samfunnet som befinner seg mellom staten, markedet og familien. Inkluderer frivillige organisasjoner, interessegrupper, religiøse samfunn, fagforeninger og uformelle nettverk.' },
    { term: 'Sosiale bevegelser', definition: 'Organiserte, kollektive innsatser for å fremme eller motarbeide sosial eller politisk endring. Eksempler er borgerrettighetsbevegelsen, kvinnebevegelsen og klimabevegelsen.' },
    { term: 'Sivil ulydighet', definition: 'Bevisst, åpen og ikke-voldelig overtredelse av lover eller regler som utføres for å protestere mot noe man anser som urettferdig, med aksept av eventuelle konsekvenser.' },
    { term: 'Digital aktivisme', definition: 'Bruk av digitale plattformer og sosiale medier for å mobilisere, organisere og gjennomføre politisk handling. Inkluderer hashtag-kampanjer, nettpetisjoner og digital varsling.' },
    { term: 'Amnesty International', definition: 'Internasjonal menneskerettighetsorganisasjon grunnlagt i 1961 som arbeider for å beskytte menneskerettigheter gjennom forskning, kampanjer og lobbyvirksomhet.' },
    { term: 'Ikke-voldelig motstand', definition: 'En strategi for politisk endring som bevisst avstår fra vold og i stedet bruker virkemidler som streik, boikott, sivil ulydighet og fredelige demonstrasjoner. Inspirert av Gandhi og Martin Luther King Jr.' },
  ],
  content: [
    {
      id: 'pm-6-5-intro',
      type: 'text',
      content: `# Aktivisme, sivilsamfunn og forandring

Gjennom historien har vanlige mennesker som har organisert seg og krevd endring, vært blant de viktigste drivkreftene for fremskritt. Avskaffelsen av slaveriet, kvinners stemmerett, borgerrettigheter, arbeidernes rettigheter, avkolonisering og miljøvern – alle disse gjennombruddene ble drevet frem av sosiale bevegelser og aktivister som nektet å akseptere status quo.

I dag ser vi en ny bølge av aktivisme, fra klimastreikbevegelsen og Black Lives Matter til Me Too og digitale kampanjer for menneskerettigheter. Sosiale medier har gitt aktivister nye verktøy for å mobilisere, kommunisere og utøve press, mens autoritære regimer svarer med overvåking, sensur og undertrykkelse av sivilsamfunnet.

I dette kapittelet skal vi utforske ulike former for aktivisme, sivilsamfunnets rolle i demokratiet, og hvordan sosiale bevegelser har bidratt til politisk endring – både historisk og i vår tid.`,
    },
    {
      id: 'pm-6-5-def-1',
      type: 'definition',
      title: 'Sivilsamfunnet',
      content: `**Sivilsamfunnet** er den delen av samfunnet som befinner seg mellom staten, markedet og familien. Det omfatter frivillige organisasjoner, interessegrupper, religiøse samfunn, fagforeninger, medier og uformelle nettverk der borgere engasjerer seg i fellesskapets anliggender.

Et sterkt og uavhengig sivilsamfunn regnes som avgjørende for et velfungerende demokrati. Sivilsamfunnet:
- **Holder makthavere ansvarlige** gjennom overvåking og kritikk
- **Gir borgerne en stemme** ved å kanalisere interesser og meninger
- **Skaper fellesskap** gjennom frivillig innsats og samarbeid
- **Fremmer menneskerettigheter** gjennom kampanjer og rettshjelp
- **Utvikler demokratisk kultur** gjennom deltakelse og debatt`,
    },
    {
      id: 'pm-6-5-text-1',
      type: 'text',
      title: 'Sosiale bevegelser – historisk perspektiv',
      content: `## Sosiale bevegelser – historisk perspektiv

En **sosial bevegelse** er en organisert, kollektiv innsats for å fremme eller motarbeide sosial eller politisk endring. Sosiale bevegelser skiller seg fra enkeltstående protester ved at de er vedvarende over tid, har en viss organisering, og mobiliserer brede grupper av mennesker.

### Borgerrettighetsbevegelsen i USA

Borgerrettighetsbevegelsen i USA på 1950- og 1960-tallet er et av de mest innflytelsesrike eksemplene på en sosial bevegelse. Under ledelse av Martin Luther King Jr. og mange andre brukte bevegelsen ikke-voldelige metoder som sittestreiker, marsjer og boikotter for å kjempe mot rasesegregering og diskriminering.

Kings filosofi om ikke-voldelig motstand var inspirert av Mahatma Gandhis kamp mot britisk kolonistyre i India. «I Have a Dream»-talen fra 1963 og marsjen fra Selma til Montgomery i 1965 ble symboler på kampen for like rettigheter. Bevegelsen bidro til gjennombrudd som Civil Rights Act (1964) og Voting Rights Act (1965).

### Kvinnebevegelsen

Kvinnebevegelsen har kjempet for likestilling i over 150 år. Den første bølgen (slutten av 1800-tallet til tidlig 1900-tall) fokuserte på stemmerett. Den andre bølgen (1960-70-tallet) utvidet kampen til arbeidsrettigheter, reproduktive rettigheter og bekjempelse av kjønnsbasert vold. Den tredje og fjerde bølgen har tatt opp spørsmål om interseksjonalitet, seksualitet, og global likestilling.

I Norge har kvinnebevegelsen bidratt til verdensledende likestillingslovgivning, høy yrkesdeltakelse blant kvinner, og en av verdens mest sjenerøse foreldrepermisjonsordninger.

### Antiapartheidbevegelsen

Kampen mot apartheid i Sør-Afrika mobiliserte millioner av mennesker, både i Sør-Afrika og internasjonalt. Nelson Mandela ble et symbol på frihetskampen. Internasjonale boikotter, sanksjoner og solidaritetskampanjer bidro til å legge press på regimet. Norge var blant de første landene som innførte sanksjoner mot Sør-Afrika.`,
    },
    {
      id: 'pm-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvem inspirerte Martin Luther King Jr.s filosofi om ikke-voldelig motstand?',
        options: [
          { id: 'a', text: 'Nelson Mandela', isCorrect: false },
          { id: 'b', text: 'Mahatma Gandhi', isCorrect: true },
          { id: 'c', text: 'Malcolm X', isCorrect: false },
          { id: 'd', text: 'Rosa Parks', isCorrect: false },
        ],
        solution: 'Martin Luther King Jr. var dypt inspirert av Mahatma Gandhis filosofi om ikke-voldelig motstand (satyagraha), som Gandhi brukte i kampen mot britisk kolonistyre i India. King tilpasset disse prinsippene til den amerikanske borgerrettighetskampen og brukte metoder som fredelige marsjer, sittestreiker og boikotter.',
      },
    },
    {
      id: 'pm-6-5-text-2',
      type: 'text',
      title: 'Sivil ulydighet som politisk virkemiddel',
      content: `## Sivil ulydighet

**Sivil ulydighet** er bevisst, åpen og ikke-voldelig overtredelse av lover eller regler, utført for å protestere mot noe man anser som urettferdig. Den som utøver sivil ulydighet, handler åpent og er villig til å ta konsekvensene – for eksempel arrestasjon eller bøter.

### Kjennetegn ved sivil ulydighet:
1. **Bevisst lovbrudd**: Handlingen bryter en lov eller regel med vilje
2. **Ikke-voldelig**: Sivil ulydighet er per definisjon fredelig
3. **Åpenhet**: Handlingen utføres åpent, ikke i det skjulte
4. **Moralsk motivert**: Målet er å rette opp en urettferdighet
5. **Aksept av konsekvenser**: Den som handler, er villig til å ta straffen

### Eksempler på sivil ulydighet

**Rosa Parks** nektet i 1955 å gi opp setet sitt til en hvit passasjer på en buss i Montgomery, Alabama. Hennes sivile ulydighet utløste bussboikotten i Montgomery og ble en katalysator for borgerrettighetsbevegelsen.

**Altaaksjonen** i Norge (1979-1981) er et eksempel på norsk sivil ulydighet. Samer og miljøaktivister lenket seg fast for å hindre utbyggingen av Alta-Kautokeino-vassdraget. Aksjonen satte samiske rettigheter på dagsordenen i norsk politikk og bidro til opprettelsen av Sametinget.

**Extinction Rebellion** er en nyere bevegelse som bruker sivil ulydighet for å kreve klimahandling. Aktivister blokkerer veier og bygninger for å skape oppmerksomhet om klimakrisen.

### Er sivil ulydighet legitimt?

Synet på sivil ulydighet varierer. Tilhengere argumenterer med at sivil ulydighet er nødvendig når demokratiske prosesser ikke fungerer tilstrekkelig, og at historien har vist at sivil ulydighet kan drive frem rettferdige endringer. Kritikere mener at lovbrudd undergraver rettsstaten og at det finnes bedre måter å påvirke politikk på i et demokrati.

Filosofen John Rawls mente at sivil ulydighet kan være berettiget i et nesten rettferdig samfunn når man protesterer mot klare urettferdigheter, når lovlige kanaler er uttømt, og når handlingen er ikke-voldelig og offentlig.`,
    },
    {
      id: 'pm-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva sivil ulydighet er, og diskuter om det er et legitimt politisk virkemiddel i et demokrati. Bruk minst to eksempler.',
        hints: ['Tenk på Rosa Parks, Altaaksjonen eller klimaaktivisme, og vurder argumenter for og mot'],
        solution: 'Sivil ulydighet er bevisst, åpen og ikke-voldelig lovbrudd utført for å protestere mot urettferdighet. Det er legitimt fordi: Demokratiske prosesser kan være for trege overfor akutte trusler (klimakrise), historien viser at sivil ulydighet har drevet frem rettferdige endringer (borgerrettigheter, samiske rettigheter). Motargumenter: Det undergraver rettsstaten, kan eskalere, og i et demokrati finnes lovlige kanaler. Eksempler: Rosa Parks utløste borgerrettighetsbevegelsen, Altaaksjonen satte samiske rettigheter på dagsordenen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-5-text-3',
      type: 'text',
      title: 'Moderne bevegelser: Me Too, Black Lives Matter og klimastreik',
      content: `## Moderne bevegelser

De siste årene har flere globale bevegelser vist at aktivisme fortsatt er en kraftfull drivkraft for endring.

### Me Too

**Me Too**-bevegelsen eksploderte i oktober 2017, da hashtagen #MeToo gikk viralt etter anklager om seksuell trakassering mot filmprodusenten Harvey Weinstein. Millioner av kvinner over hele verden delte sine erfaringer med seksuell trakassering og overgrep.

Bevegelsen førte til konkrete konsekvenser: Mektige menn i ulike bransjer ble stilt til ansvar, lovgivning ble skjerpet i flere land, og arbeidsgivere ble tvunget til å ta tak i seksuell trakassering. I Norge bidro #MeToo til debatt i politikk, medier, akademia og kulturliv, og flere partier innførte strengere varslingsrutiner.

Kritikere av bevegelsen mente at den kunne føre til forhåndsdømming og at grensen mellom klønete flørt og trakassering ble uklar. Tilhengere fremhevet at bevegelsen endelig brøt tausheten om et utbredt problem og skapte varig kulturendring.

### Black Lives Matter

**Black Lives Matter** (BLM) oppstod i USA i 2013 som respons på frikjennelsen av George Zimmerman, som skjøt og drepte den svarte tenåringen Trayvon Martin. Bevegelsen ble en global kraft i 2020 etter at George Floyd ble drept av politiet i Minneapolis.

BLM satte søkelys på systemisk rasisme, politivold og strukturell diskriminering. Demonstrasjoner spredte seg til over 60 land. I Norge førte BLM til debatt om rasisme i det norske samfunnet, og tusenvis deltok i demonstrasjoner i Oslo og andre byer sommeren 2020.

### Fridays for Future

Som vi har sett i kapittel 6.2, inspirerte Greta Thunbergs skolestreik i 2018 en global ungdomsklimastreikbevegelse. Fridays for Future mobiliserte millioner av unge mennesker og satte klimakrisen øverst på den politiske dagsordenen. Bevegelsen illustrerer hvordan ungdomsengasjement kan bli en politisk kraft som presser voksne politikere til handling.`,
    },
    {
      id: 'pm-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva utløste den globale Me Too-bevegelsen i 2017?',
        options: [
          { id: 'a', text: 'En FN-resolusjon om kvinners rettigheter', isCorrect: false },
          { id: 'b', text: 'En ny lov mot seksuell trakassering i USA', isCorrect: false },
          { id: 'c', text: 'Anklager om seksuell trakassering mot filmprodusenten Harvey Weinstein og hashtagen #MeToo som gikk viralt', isCorrect: true },
          { id: 'd', text: 'En stor demonstrasjon i Washington D.C.', isCorrect: false },
        ],
        solution: 'Me Too-bevegelsen eksploderte i oktober 2017 da hashtagen #MeToo gikk viralt etter at flere kvinner anklaget filmprodusenten Harvey Weinstein for seksuell trakassering og overgrep. Millioner av kvinner delte deretter sine egne erfaringer på sosiale medier, og bevegelsen spredte seg globalt.',
      },
    },
    {
      id: 'pm-6-5-text-4',
      type: 'text',
      title: 'Digital aktivisme – muligheter og begrensninger',
      content: `## Digital aktivisme

Internett og sosiale medier har revolusjonert måten aktivisme utøves på. **Digital aktivisme** bruker digitale plattformer for å mobilisere, informere, organisere og utøve press.

### Muligheter

**Rask mobilisering**: Sosiale medier gjør det mulig å samle tusenvis av mennesker på kort tid. Den arabiske våren (2011), der sosiale medier spilte en nøkkelrolle i å organisere protester i flere land i Midtøsten og Nord-Afrika, er et tidlig eksempel.

**Lavere terskel for deltakelse**: Det er enklere å signere en nettpetisjon, dele en hashtag eller donere penger enn å delta i en fysisk demonstrasjon. Dette senker terskelen for politisk engasjement.

**Global rekkevidde**: En lokal sak kan bli global på timer. George Floyds død i Minneapolis utløste demonstrasjoner over hele verden fordi videoen og budskapet spredte seg gjennom sosiale medier.

**Dokumentasjon og varsling**: Smarttelefoner gjør det mulig for vanlige borgere å dokumentere menneskerettighetsbrudd, politivold og maktmisbruk i sanntid.

### Begrensninger

**Slacktivisme**: Kritikere bruker begrepet «slacktivisme» (latmannens aktivisme) om digital aktivisme som begrenser seg til å like, dele og signere uten at det fører til reell handling.

**Desinformasjon**: De samme plattformene som sprer aktivisme, sprer også falske nyheter, konspirasjonsteorier og polarisering.

**Overvåking og sensur**: Autoritære regimer bruker teknologi til å overvåke, sensurere og straffe aktivister. Kina, Iran og Russland har alle utviklet sofistikerte systemer for internettovervåking og -sensur.

**Algoritmebobler**: Sosiale mediers algoritmer kan forsterke ekkokamre der folk bare eksponeres for synspunkter de allerede er enige i, noe som hemmer dialog og forståelse.`,
    },
    {
      id: 'pm-6-5-example-1',
      type: 'example',
      title: 'Amnesty International – menneskerettigheter i praksis',
      content: `**Amnesty International** er en av verdens største og mest kjente menneskerettighetsorganisasjoner. Organisasjonen ble grunnlagt i 1961 av den britiske advokaten Peter Benenson, etter at han leste om to portugisiske studenter som ble fengslet for å ha hevet glassene sine i en skål for friheten.

Amnesty arbeider gjennom forskning, kampanjer og lobbyvirksomhet for å:
- Frigjøre samvittighetsfanger (mennesker fengslet for sin overbevisning)
- Dokumentere menneskerettighetsbrudd verden over
- Kampanje mot tortur, dødsstraff og forsvinninger
- Presse myndigheter til å respektere menneskerettighetene

Amnestys brevaksjoner – der tusenvis av mennesker skriver brev til myndigheter for å kreve løslatelse av fanger – er et klassisk eksempel på hvordan organisert sivilsamfunn kan utøve press. I Norge har Amnesty over 100 000 medlemmer og støttespillere.

Amnesty har fått Nobels fredspris (1977) og har bidratt til å frigjøre tusenvis av samvittighetsfanger og til å skape internasjonale normer mot tortur og dødsstraff.`,
    },
    {
      id: 'pm-6-5-text-5',
      type: 'text',
      title: 'Ungdomsengasjement og politisk deltakelse',
      content: `## Ungdomsengasjement og politisk deltakelse

Unge mennesker har alltid vært sentrale i sosiale bevegelser. Studentopprørene i 1968, Tiananmen-plassen i 1989, den arabiske våren i 2011, og klimastreikbevegelsen fra 2018 viser at ungdom kan være en kraftfull politisk kraft.

### Former for ungdomsengasjement

Ungdoms politiske deltakelse tar mange former:
- **Partipolitikk**: Ungdomspartier og ungdomspolitikere (Norge har en sterk tradisjon for ungdomspartier)
- **Organisasjonsarbeid**: Engasjement i frivillige organisasjoner, elevrådene og studentorganisasjoner
- **Demonstrasjoner og aksjoner**: Fra klimastreiker til BLM-marsjer
- **Digital aktivisme**: Bruk av sosiale medier for å påvirke opinionen
- **Hverdagsaktivisme**: Bevisste forbrukervalg, resirkulering, vegansk kosthold

### Ungdom og demokrati i Norge

Norge har en relativt høy grad av ungdomsengasjement sammenlignet med mange andre land. Skolevalg gir elever i videregående skole mulighet til å øve seg på demokratisk deltakelse. Organisasjoner som Landsrådet for Norges barne- og ungdomsorganisasjoner (LNU) representerer over 500 000 unge.

Likevel er det utfordringer. Valgdeltakelsen blant de yngste velgergruppene er lavere enn blant eldre. Noen unge opplever at politikken ikke angår dem, eller at de ikke har reell innflytelse. Debatten om å senke stemmerettsalderen til 16 år handler nettopp om å gi unge mer innflytelse over beslutninger som angår deres framtid.

### Sivilsamfunn under press globalt

Mens sivilsamfunnet er relativt sterkt og fritt i Norge og andre demokratier, er det under alvorlig press i mange deler av verden. Ifølge den internasjonale organisasjonen CIVICUS lever over 70 prosent av verdens befolkning i land der sivilsamfunnets handlingsrom er begrenset. Autoritære regimer begrenser ytringsfriheten, forbyr organisasjoner, fengsler aktivister og bruker overvåking for å kneble kritikk. Å forsvare sivilsamfunnets handlingsrom er derfor en av de viktigste kampene for menneskerettighetene i vår tid.`,
    },
    {
      id: 'pm-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter muligheter og begrensninger ved digital aktivisme. Er det mulig å skape varig politisk endring gjennom sosiale medier?',
        hints: ['Tenk på eksempler som den arabiske våren, Me Too og BLM, men også på slacktivisme og desinformasjon'],
        solution: 'Muligheter: Rask mobilisering (den arabiske våren), lavere terskel for deltakelse, global rekkevidde (BLM spredte seg fra USA til hele verden), dokumentasjon av overgrep i sanntid. Begrensninger: Slacktivisme – digitalt engasjement uten reell handling, desinformasjon som sprer seg på samme plattformer, autoritære regimer bruker teknologien til overvåking og sensur, algoritmebobler skaper polarisering. Konklusjon: Digital aktivisme er et kraftig verktøy som supplerer, men ikke erstatter, tradisjonell organisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er «slacktivisme»?',
        options: [
          { id: 'a', text: 'En form for voldelig aktivisme', isCorrect: false },
          { id: 'b', text: 'Digitalt engasjement som begrenser seg til å like, dele og signere uten at det fører til reell handling', isCorrect: true },
          { id: 'c', text: 'Aktivisme som kun foregår i lokalsamfunn', isCorrect: false },
          { id: 'd', text: 'Politisk aktivisme organisert av fagforeninger', isCorrect: false },
        ],
        solution: 'Slacktivisme (av «slacker» og «aktivisme») er et kritisk begrep som beskriver digitalt engasjement som begrenser seg til enkle handlinger som å like, dele eller signere nettpetisjoner, uten at det følges opp med mer krevende former for politisk deltakelse. Kritikere mener slacktivisme gir en illusjon av engasjement uten reell effekt.',
      },
    },
    {
      id: 'pm-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en sosial bevegelse (f.eks. Me Too, Black Lives Matter, Fridays for Future eller borgerrettighetsbevegelsen) og analyser den. Hva var bevegelsens mål? Hvilke metoder brukte den? Hvilke resultater oppnådde den?',
        hints: ['Beskriv bakgrunnen, organiseringen, virkemidlene og resultatene'],
        solution: 'Eksempel – Black Lives Matter: Mål: Bekjempe systemisk rasisme og politivold mot svarte i USA. Metoder: Demonstrasjoner, digital mobilisering gjennom hashtager, kunstneriske uttrykk, politisk lobbyvirksomhet. Resultater: Satte systemisk rasisme på den globale dagsordenen, bidro til debatt om politivold og diskriminering i mange land, førte til politiske reformer i enkelte amerikanske byer, inspirerte antirasismebevegelser globalt. Begrensninger: Har møtt kritikk for å ha utløst polarisering, og strukturelle endringer tar lang tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'pm-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'pm-6-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Drøft hvorfor et sterkt og uavhengig sivilsamfunn er viktig for demokratiet. Hva skjer i land der sivilsamfunnet er undertrykt?',
        hints: ['Tenk på sivilsamfunnets ulike funksjoner og på land som Russland, Kina eller Ungarn'],
        solution: 'Sivilsamfunnet holder makthavere ansvarlige, gir borgerne en stemme, fremmer menneskerettigheter og skaper demokratisk kultur. Uten et fritt sivilsamfunn mangler det viktige korrektiver til statsmakten. I land der sivilsamfunnet er undertrykt (Russland, Kina, Ungarn), ser vi innskrenking av ytringsfrihet, fengsling av aktivister, kontroll over medier, og svekkelse av demokratiske institusjoner. Når sivilsamfunnet kveles, mister borgerne muligheten til å påvirke politikken og holde makthavere ansvarlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const POLITIKK_MENNESKERETT_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_POLITIKK_MENNESKERETT_6_1, CHAPTER_POLITIKK_MENNESKERETT_6_2,
  CHAPTER_POLITIKK_MENNESKERETT_6_3, CHAPTER_POLITIKK_MENNESKERETT_6_4,
  CHAPTER_POLITIKK_MENNESKERETT_6_5,
];

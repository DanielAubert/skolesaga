/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Samfunnsøkonomi 2 VG3 - Del 7: Internasjonal økonomi
 * Kapittel 7.1–7.5
 *
 * Dekker LK20 kompetansemål:
 * - analysere årsaker til og konsekvenser av økonomisk globalisering og drøfte utfordringer knyttet til internasjonal arbeidsdeling
 * - drøfte økonomiske utfordringer i utviklingsland og vurdere virkemidler for økonomisk utvikling
 * - gjøre rede for europeisk økonomisk integrasjon og drøfte fordeler og ulemper ved felles valuta
 * - analysere årsaker til finanskriser og drøfte hvordan regulering kan redusere systemrisiko
 * - drøfte Norges rolle i den internasjonale økonomien med utgangspunkt i olje, EØS og handel
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Globalisering og økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7_1: TextbookChapter = {
  id: 'samfokonomi-2-7-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '7.1',
  title: 'Globalisering og økonomi',
  description: 'Økonomisk globalisering, globale verdikjeder, internasjonal arbeidsdeling og ulikhet mellom og innad i land.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere årsaker til og konsekvenser av økonomisk globalisering og drøfte utfordringer knyttet til internasjonal arbeidsdeling',
  ],
  content: [
    {
      id: 'sf2-7-1-intro',
      type: 'text',
      content: `## Økonomisk globalisering i det 21. århundret

Økonomisk globalisering har forandret verdensøkonomien fundamentalt. I dag er produksjonen av en enkelt mobiltelefon spredt over titalls land: Mineraler fra Kongo, halvledere fra Taiwan, montering i Kina, design i USA, og salg over hele verden. Denne dype integrasjonen av nasjonale økonomier skaper enorme muligheter, men også nye utfordringer og spenninger.

I dette kapittelet skal du lære:
- Hva som kjennetegner den moderne økonomiske globaliseringen
- Hvordan globale verdikjeder fungerer og hvem som tjener på dem
- Sammenhenger mellom globalisering og ulikhet
- Kritiske perspektiver på globaliseringens konsekvenser`,
    },
    {
      id: 'sf2-7-1-def-1',
      type: 'definition',
      title: 'Økonomisk globalisering',
      content: `**Økonomisk globalisering** er den tiltagende integrasjonen av nasjonale økonomier gjennom økt handel, kapitalflyt, teknologioverføring og migrasjon. Begrepet beskriver både en prosess og en tilstand der landegrenser blir mindre avgjørende for økonomisk aktivitet. Globaliseringen har akselerert særlig etter 1990, drevet av teknologisk utvikling, politiske beslutninger om markedsåpning, og fremveksten av nye økonomiske stormakter.`,
    },
    {
      id: 'sf2-7-1-text-1',
      type: 'text',
      content: `### Globaliseringens faser

Økonomisk globalisering er ikke et nytt fenomen. Historisk kan vi identifisere tre hovedfaser:

**Første bølge (1870–1914):** Dampskip, jernbane og telegraf kuttet transport- og kommunikasjonskostnadene dramatisk. Internasjonal handel eksploderte, og europeiske land investerte massivt i koloniene. Denne perioden tok slutt med første verdenskrig.

**Andre bølge (1945–1980):** Etter andre verdenskrig bygde Bretton Woods-systemet, GATT og Marshall-planen opp en ny internasjonal økonomisk orden. Handelen vokste raskt mellom industrilandene, men utviklingslandene var i stor grad utenfor.

**Tredje bølge (1990–i dag):** Berlinmurens fall, Kinas åpning, internett og containerrevolusjonen skapte en eksplosiv vekst i internasjonal handel og kapitalflyt. Utviklingsland ble integrert som produsenter i globale verdikjeder. Denne fasen har gjort globaliseringen bredere og dypere enn noensinne.`,
    },
    {
      id: 'sf2-7-1-def-2',
      type: 'definition',
      title: 'Global verdikjede',
      content: `En **global verdikjede** (GVC – Global Value Chain) beskriver hele prosessen fra råvare til ferdig produkt når produksjonstrinnene er fordelt på ulike land. Hvert ledd i kjeden tilfører verdi, og den endelige varen krysser ofte flere landegrenser før den når forbrukeren. Begrepet ble utviklet av økonomer som Gary Gereffi for å forstå den moderne internasjonale arbeidsdelingen.`,
    },
    {
      id: 'sf2-7-1-text-2',
      type: 'text',
      content: `### Globale verdikjeder og internasjonal arbeidsdeling

Den moderne globaliseringen kjennetegnes ved at produksjonen fragmenteres geografisk. I stedet for at ett land lager et ferdig produkt, er produksjonen delt opp i mange trinn som utføres i ulike land. Dette skaper **globale verdikjeder** (GVC).

Et typisk eksempel er Apples iPhone:
- **Design og utvikling** skjer i USA (høy verdi, høy lønn)
- **Halvledere** produseres i Taiwan og Sør-Korea (avansert teknologi)
- **Mineraler** utvinnes i Kongo, Australia og Chile (råvarer)
- **Montering** skjer i Kina og India (arbeidsintensivt, lavere lønn)
- **Markedsføring og salg** koordineres fra USA og regionale kontorer

Verdien fordeles svært ujevnt langs kjeden. Apple beholder rundt 60 % av salgsprisen, mens monteringsfabrikken i Kina kun mottar 2–4 %. Dette mønsteret kalles gjerne **smilekurven**: De som sitter med design, teknologi og merkevare i starten og slutten av kjeden tjener mest, mens selve produksjonen i midten gir minst verdi.`,
    },
    {
      id: 'sf2-7-1-example-1',
      type: 'example',
      title: 'Smilekurven og verdiskaping i global produksjon',
      problem: 'En sportsko selges for 1 000 kr. Forklar hvordan verdien fordeles langs den globale verdikjeden, og bruk smilekurven til å analysere fordelingen.',
      solution: `Typisk fordeling av verdien i en sportsko:

- **Design og merkevare** (USA/Europa): 350 kr (35 %)
- **Markedsføring og distribusjon** (globalt): 250 kr (25 %)
- **Detaljhandel** (lokalt): 200 kr (20 %)
- **Materialer** (ulike land): 100 kr (10 %)
- **Fabrikk og arbeidere** (Vietnam/Bangladesh): 50 kr (5 %)
- **Transport og toll**: 50 kr (5 %)

Smilekurven viser at verdiskapingen er høyest i starten (FoU, design) og slutten (markedsføring, salg) av verdikjeden, mens produksjonsleddet i midten gir lavest verdi. Dette forklarer hvorfor merkevareselskaper tjener mest, mens fabrikkarbeidere i utviklingsland mottar en svært liten andel.`,
    },
    {
      id: 'sf2-7-1-text-3',
      type: 'text',
      content: `### Globalisering og ulikhet

Globaliseringen har hatt komplekse virkninger på ulikhet, både mellom og innad i land:

**Mellom land:** Ulikheten mellom de rikeste og fattigste landene er fortsatt enorm, men flere utviklingsland – særlig i Asia – har opplevd sterk økonomisk vekst. Kina og India har løftet hundrevis av millioner ut av ekstrem fattigdom. Samtidig har mange land i Afrika sør for Sahara sakket akterut. Økonomen Branko Milanovic har vist at den globale inntektsulikheten har to ansikter: konvergens mellom noen land, divergens mellom andre.

**Innad i land:** I mange rike land har globaliseringen bidratt til økt ulikhet. Industriarbeidere i Vesten har tapt arbeidsplasser til lavkostland, mens høyt utdannede og kapitaleiere har tjent på billigere varer og nye markeder. Denne utviklingen har skapt politisk motstand mot globalisering, synliggjort gjennom Brexit og USAs handelskriger.

**Elefantkurven:** Milanovic' berømte «elefantkurve» viser hvem som har tjent på globaliseringen 1988–2008: Den globale middelklassen (særlig i Kina) og de aller rikeste hadde høyest inntektsvekst, mens den lavere middelklassen i rike land opplevde stagnasjon.`,
    },
    {
      id: 'sf2-7-1-def-3',
      type: 'definition',
      title: 'Elefantkurven',
      content: `**Elefantkurven** er en graf utviklet av økonomen Branko Milanovic som viser inntektsveksten for ulike inntektsgrupper i verden mellom 1988 og 2008. Kurven har form som en elefant: Høy vekst for den globale middelklassen (elefantens rygg), lav vekst for den lavere middelklassen i rike land (elefantens buk), og svært høy vekst for den globale topp 1 % (elefantens snabel).`,
    },
    {
      id: 'sf2-7-1-example-2',
      type: 'example',
      title: 'Hvem taper og vinner på globaliseringen?',
      problem: 'Analyser hvem som har tjent og hvem som har tapt på globaliseringen i de siste 30 årene.',
      solution: `**Vinnere:**
- Den globale middelklassen i fremvoksende økonomier (særlig Kina, India, Sørøst-Asia) – hundrevis av millioner er løftet ut av fattigdom
- Kapitaleierne og de aller rikeste globalt – tilgang til billigere produksjon, større markeder og avkastning på investeringer
- Forbrukere i rike land – tilgang til billigere varer og tjenester
- Teknologiselskaper – globale markeder og skalafordeler

**Tapere:**
- Industriarbeidere i rike land (USA, Europa) – fabrikker flyttet til lavkostland, reallønnsstagnasjon
- Småbønder i utviklingsland – konkurranse fra subsidiert landbruk i rike land
- Land med svake institusjoner – klarte ikke å utnytte globaliseringens muligheter, ble hengende etter
- Miljøet – økt transport, ressursutvinning og utslipp fra global produksjon`,
    },
    {
      id: 'sf2-7-1-text-4',
      type: 'text',
      content: `### Globaliseringens utfordringer og motreaksjoner

Finanskrisen i 2008, klimakrisen, pandemien i 2020 og Russlands invasjon av Ukraina i 2022 har alle utfordret den økonomiske globaliseringen. Flere utviklingstrekk peker mot endringer:

**Reshoring og nearshoring:** Mange selskaper flytter produksjon tilbake til hjemlandet (reshoring) eller til nærliggende land (nearshoring) for å redusere sårbarhet i forsyningskjedene.

**Geoøkonomisk fragmentering:** USA og Kinas rivalisering fører til at handels- og teknologiblokker dannes. Begreper som «decoupling» og «friendshoring» beskriver trenden mot å handle mer med allierte og mindre med rivaler.

**Klimahensyn:** Karbontoll (CBAM i EU) og krav om bærekraftige verdikjeder kan endre handelsmønstre og gjøre nærproduksjon mer attraktivt.

Selv om noen snakker om «de-globalisering», er det mer presist å snakke om en **omstrukturering** av globaliseringen: Handel og investeringer forsvinner ikke, men mønstrene endres i retning av regionale blokker og strategisk autonomi.`,
    },
    {
      id: 'sf2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva beskriver «smilekurven» i globale verdikjeder?',
        options: [
          { id: 'a', text: 'At forbrukerne er mest fornøyde med billige importvarer', isCorrect: false },
          { id: 'b', text: 'At verdiskapingen er høyest i design/FoU og markedsføring/salg, og lavest i selve produksjonen', isCorrect: true },
          { id: 'c', text: 'At økonomisk vekst i utviklingsland følger en U-formet kurve', isCorrect: false },
          { id: 'd', text: 'At handelsbalansen mellom land svinger mellom overskudd og underskudd', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Smilekurven viser at de leddene i verdikjeden som tilfører mest verdi – design, forskning og utvikling i starten, og markedsføring, merkevarebygging og salg i slutten – gir høyest fortjeneste. Selve produksjons- og monteringsleddet i midten av kurven gir lavest verdi.',
      },
    },
    {
      id: 'sf2-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hva viser Branko Milanovic\' «elefantkurve»?',
        options: [
          { id: 'a', text: 'At alle inntektsgrupper har hatt lik vekst under globaliseringen', isCorrect: false },
          { id: 'b', text: 'At de fattigste i verden har hatt høyest inntektsvekst', isCorrect: false },
          { id: 'c', text: 'At den globale middelklassen og de aller rikeste har hatt høyest vekst, mens den lavere middelklassen i rike land har stagnert', isCorrect: true },
          { id: 'd', text: 'At global ulikhet har økt jevnt og trutt siden 1980', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Elefantkurven viser at inntektsveksten 1988–2008 var høyest for den globale middelklassen (særlig i Kina og Asia) og for den globale topp 1 %, mens den lavere middelklassen i rike vestlige land opplevde stagnasjon. Kurven har form som en elefant med rygg, buk og snabel.',
      },
    },
    {
      id: 'sf2-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar begrepet «global verdikjede» og gi et eksempel som viser hvordan produksjonen av ett produkt er fordelt på flere land. Drøft hvem som tjener mest i verdikjeden.',
        hints: ['Bruk et konkret eksempel som en elektronikkvare eller et klesplagg', 'Koble til smilekurven', 'Vurder fordelingen av verdi mellom ulike ledd'],
        solution: 'En global verdikjede beskriver hele prosessen fra råvare til ferdig produkt når produksjonstrinnene er fordelt på ulike land. Eksempel: En smarttelefon designes i USA, bruker halvledere fra Taiwan, mineraler fra Kongo, monteres i Kina og selges globalt. De som sitter med design, patenter og merkevare tjener mest (smilekurvens ender), mens fabrikken som monterer telefonen sitter igjen med bare 2–4 % av salgsverdien. Dette reiser spørsmål om rettferdig fordeling og om utviklingsland kan klatre oppover i verdikjeden.',
      },
    },
    {
      id: 'sf2-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Drøft påstanden: «Globaliseringen har økt velstanden i verden, men fordelene har vært ujevnt fordelt.» Bruk elefantkurven og konkrete eksempler i svaret.',
        hints: ['Ta med perspektiver fra både rike og fattige land', 'Nevn konkrete land som har tjent og tapt', 'Koble til politiske motreaksjoner som Brexit eller handelskriger'],
        solution: 'Globaliseringen har bidratt til sterk økonomisk vekst globalt – særlig i Kina og Sørøst-Asia, der hundrevis av millioner er løftet ut av fattigdom. Samtidig viser elefantkurven at den lavere middelklassen i vestlige land har opplevd stagnasjon i realinntekt, mens de aller rikeste har hatt enorm vekst. Industriarbeidere i USA og Europa har mistet jobber til lavkostland. Denne ujevne fordelingen har ført til politisk motstand: Brexit, Trump og proteksjonistisk politikk er delvis reaksjoner mot globaliseringens negative sider for bestemte grupper. Samtidig har mange land i Afrika ikke klart å utnytte mulighetene. Konklusjon: Globaliseringen har økt den totale velstanden, men politiske tiltak trengs for å sikre jevnere fordeling av gevinstene.',
      },
    },
    {
      id: 'sf2-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-5',
        number: '7.1.5',
        type: 'multiple-choice',
        task: 'Hva menes med «friendshoring»?',
        options: [
          { id: 'a', text: 'At land gir toll-lettelser til sine nærmeste naboer', isCorrect: false },
          { id: 'b', text: 'At selskaper flytter produksjon til allierte land for å redusere geopolitisk risiko', isCorrect: true },
          { id: 'c', text: 'At vennskapsavtaler mellom land erstatter formelle handelsavtaler', isCorrect: false },
          { id: 'd', text: 'At utenlandske arbeidere inviteres inn for å fylle arbeidskraftmangel', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Friendshoring er en strategi der selskaper og myndigheter bevisst flytter produksjon og forsyningskjeder til allierte og politisk stabile land, fremfor å være avhengig av rivaler eller ustabile regioner. Begrepet har blitt sentralt i USAs og EUs økonomiske strategi overfor Kina.',
      },
    },
    {
      id: 'sf2-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Gjør rede for hva som menes med reshoring og nearshoring, og forklar hvorfor disse trendene har blitt sterkere etter 2020. Vurder konsekvensene for utviklingsland.',
        hints: ['Tenk på pandemiens effekt på forsyningskjeder', 'Nevn konkrete eksempler på bransjer', 'Drøft konsekvenser for land som Kina, Vietnam og Bangladesh'],
        solution: 'Reshoring betyr at selskaper flytter produksjon tilbake til hjemlandet, mens nearshoring betyr å flytte den til nærliggende land. Etter 2020 har dette blitt sterkere på grunn av: 1) Pandemien avslørte sårbarhet i globale forsyningskjeder – mangel på halvledere og medisinsk utstyr. 2) Geopolitiske spenninger mellom USA og Kina skaper usikkerhet. 3) EU og USA gir subsidier til hjemlig produksjon (CHIPS Act, IRA). For utviklingsland som er avhengige av eksportindustri kan dette bety tap av arbeidsplasser og investeringer. Kina har allerede begynt å miste produksjon til Vietnam og India. Samtidig kan nearshoring skape nye muligheter for land som Mexico og Tyrkia som ligger nær store markeder.',
      },
    },
    {
      id: 'sf2-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Økonomisk globalisering** har utviklet seg i tre bølger og akselerert kraftig etter 1990
- **Globale verdikjeder** fragmenterer produksjonen over mange land, der verdien fordeles ujevnt (smilekurven)
- **Elefantkurven** viser at globaliseringens gevinster har vært ujevnt fordelt mellom ulike inntektsgrupper
- Globaliseringen har skapt **vinnere og tapere** – både mellom og innad i land
- Nye trender som **reshoring**, **friendshoring** og geoøkonomisk fragmentering endrer globaliseringens karakter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Økonomisk globalisering | Økt økonomisk integrasjon mellom nasjonale økonomier |
| Global verdikjede (GVC) | Produksjon fordelt på mange land fra råvare til ferdig produkt |
| Smilekurven | Verdi er høyest i starten og slutten av verdikjeden |
| Elefantkurven | Milanovic' graf over global inntektsvekst 1988–2008 |
| Reshoring | Flytte produksjon tilbake til hjemlandet |
| Friendshoring | Flytte produksjon til allierte land |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Utviklingsøkonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7_2: TextbookChapter = {
  id: 'samfokonomi-2-7-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '7.2',
  title: 'Utviklingsøkonomi',
  description: 'Fattigdomsfeller, økonomisk vekstteori for utviklingsland, bistandens rolle, institusjoner og bærekraftig utvikling.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte økonomiske utfordringer i utviklingsland og vurdere virkemidler for økonomisk utvikling',
  ],
  content: [
    {
      id: 'sf2-7-2-intro',
      type: 'text',
      content: `## Hvorfor er noen land fattige?

I 2024 lever fortsatt over 700 millioner mennesker i ekstrem fattigdom – de fleste i Afrika sør for Sahara og Sør-Asia. Samtidig har land som Sør-Korea, Kina og Botswana klart å løfte seg fra fattigdom til velstand på bare noen tiår. Hva forklarer disse enorme forskjellene? Hvorfor klarer noen land å vokse raskt, mens andre forblir fattige generasjon etter generasjon?

I dette kapittelet skal du lære:
- Hvordan vi måler fattigdom og utvikling
- Teorier om hvorfor noen land forblir fattige
- Hva som driver økonomisk vekst i utviklingsland
- Bistandens rolle og begrensninger
- Institusjoners betydning for utvikling`,
    },
    {
      id: 'sf2-7-2-def-1',
      type: 'definition',
      title: 'Utviklingsland',
      content: `**Utviklingsland** er en samlebetegnelse for land med lavt inntektsnivå, begrenset industrialisering og utbredt fattigdom. Verdensbanken klassifiserer land etter bruttonasjonalinntekt (BNI) per innbygger: lavinntektsland (under 1 135 dollar), lavere mellominntektsland (1 136–4 465 dollar), høyere mellominntektsland (4 466–13 845 dollar) og høyinntektsland (over 13 845 dollar). Begrepet er omdiskutert fordi det dekker et enormt mangfold av land.`,
    },
    {
      id: 'sf2-7-2-text-1',
      type: 'text',
      content: `### Å måle utvikling

BNP per innbygger er det vanligste målet på velstand, men det fanger ikke opp alle sider ved utvikling. **FNs indeks for menneskelig utvikling (HDI)** kombinerer tre dimensjoner:

1. **Helse** – forventet levealder ved fødsel
2. **Utdanning** – gjennomsnittlig og forventet antall skoleår
3. **Levestandard** – BNI per innbygger justert for kjøpekraft

HDI gir en bredere forståelse av utvikling enn BNP alene. Norge har i mange år toppet HDI-rangeringen, noe som reflekterer høy levestandard, god helse og høyt utdanningsnivå.

Andre mål inkluderer **Gini-koeffisienten** (som måler inntektsulikhet innad i et land), **andelen som lever under fattigdomsgrensen**, og **multidimensjonal fattigdomsindeks (MPI)** som fanger opp deprivasjon langs flere dimensjoner.`,
    },
    {
      id: 'sf2-7-2-def-2',
      type: 'definition',
      title: 'Fattigdomsfelle',
      content: `En **fattigdomsfelle** er en selvforsterkende mekanisme som holder land eller individer fanget i fattigdom. Eksempler: Fattige land kan ikke investere i utdanning og infrastruktur fordi de mangler sparemidler. Uten utdanning og infrastruktur forblir produktiviteten lav, og inntektene forblir lave. Sirkelen brytes vanskelig uten ekstern hjelp eller dramatiske politikkendringer.`,
    },
    {
      id: 'sf2-7-2-text-2',
      type: 'text',
      content: `### Vekstteori og utviklingsland

Flere teorier forsøker å forklare hvorfor noen land vokser mens andre stagnerer:

**Solows vekstmodell** forklarer økonomisk vekst med kapitalakkumulasjon, befolkningsvekst og teknologisk fremgang. For utviklingsland peker modellen på at kapitalinvesteringer (maskiner, infrastruktur) er avgjørende i de tidlige fasene, men at langsiktig vekst krever teknologisk utvikling.

**Endogen vekstteori** (Romer, Lucas) legger vekt på at teknologisk utvikling ikke bare «skjer», men drives av investeringer i forskning, utdanning og humankapital. Land som satser på kunnskap og innovasjon vil vokse raskere over tid.

**Institusjonell teori** (Acemoglu, Robinson) argumenterer for at forskjellene mellom fattige og rike land primært skyldes forskjeller i **institusjoner** – politiske og økonomiske spilleregler. Land med **inkluderende institusjoner** (rettssikkerhet, eiendomsrettigheter, politisk deltakelse) vokser, mens land med **ekstraktive institusjoner** (maktkonsentrasjon, korrupsjon, usikre eiendomsrettigheter) forblir fattige.`,
    },
    {
      id: 'sf2-7-2-def-3',
      type: 'definition',
      title: 'Inkluderende institusjoner',
      content: `**Inkluderende institusjoner** er politiske og økonomiske spilleregler som fordeler makt og muligheter bredt i samfunnet. De kjennetegnes av rettssikkerhet, beskyttelse av eiendomsrettigheter, åpen markedsadgang, og politisk deltakelse. Ifølge Acemoglu og Robinson er inkluderende institusjoner den viktigste forklaringen på langsiktig økonomisk velstand. Motsetningen er **ekstraktive institusjoner** som konsentrerer makt og rikdom hos en elite.`,
    },
    {
      id: 'sf2-7-2-example-1',
      type: 'example',
      title: 'Sør-Korea vs. Nord-Korea – institusjonenes betydning',
      problem: 'Forklar hvordan to land med samme utgangspunkt kan utvikle seg helt forskjellig basert på institusjonelle valg.',
      solution: `I 1945 ble Korea delt i to. Befolkningen, kulturen, geografien og ressursene var tilnærmet like. I dag er Sør-Korea en av verdens rikeste og mest teknologisk avanserte nasjoner (BNP per innbygger ca. 35 000 dollar), mens Nord-Korea er blant de fattigste (BNP per innbygger ca. 1 800 dollar).

**Sør-Korea** utviklet gradvis inkluderende institusjoner: markedsøkonomi, investeringer i utdanning, åpenhet for utenlandsk teknologi, og etter hvert demokrati. Sterk statlig industrialisering (chaebols som Samsung, Hyundai) kombinert med eksportorientering drev veksten.

**Nord-Korea** valgte ekstraktive institusjoner: planøkonomi, lukket økonomi, maktkonsentrasjon rundt Kim-dynastiet. Ressursene ble brukt på militæret og eliten, ikke på produktiv investering.

Denne sammenligningen er et av de klareste eksemplene på at institusjoner – ikke geografi, kultur eller ressurser – er avgjørende for økonomisk utvikling.`,
    },
    {
      id: 'sf2-7-2-text-3',
      type: 'text',
      content: `### Bistand – hjelp eller hinder?

Bistand til utviklingsland er et omstridt tema i utviklingsøkonomien. I 2023 ga rike land til sammen rundt 200 milliarder dollar i offisiell utviklingshjelp (ODA).

**Argumenter for bistand:**
- Kan bryte fattigdomsfeller ved å finansiere utdanning, helse og infrastruktur
- Nødhjelp redder liv i akutte kriser
- Vaksinasjonsprogrammer og rent vann har redusert barnedødelighet dramatisk
- Jeffrey Sachs argumenterer for at «big push»-bistand kan løfte land ut av fattigdom

**Argumenter mot bistand:**
- **Dambisa Moyo** hevder at bistand skaper avhengighet og undergraver lokalt initiativ
- Bistand kan støtte korrupte regimer og forlenge dårlig styresett
- «Dutch disease»-effekt: Bistandsvaluta styrker lokal valuta og svekker eksportindustrien
- William Easterly kritiserer top-down bistandsprosjekter som ignorerer lokale forhold

**Moderne tilnærminger:**
Nyere forskning vektlegger «smart bistand» som fokuserer på institusjonsbygging, betingede kontantoverføringer, og randomiserte kontrollerte forsøk (RCT) for å teste hva som faktisk virker. Esther Duflo og Abhijit Banerjee (Nobelpris 2019) har vist at målrettede, evidensbaserte tiltak kan ha stor effekt.`,
    },
    {
      id: 'sf2-7-2-example-2',
      type: 'example',
      title: 'Botswana – suksesshistorie i Afrika',
      problem: 'Hvordan klarte Botswana å bli et av de rikeste landene i Afrika, til tross for at det startet som et av de fattigste?',
      solution: `Da Botswana ble selvstendig i 1966, var det blant verdens fattigste land med bare 12 km asfaltert vei. I dag har landet BNP per innbygger på over 8 000 dollar og er klassifisert som et høyere mellominntektsland.

**Suksessfaktorer:**
1. **Gode institusjoner** – Stabile demokratiske institusjoner fra starten, med rettssikkerhet og lav korrupsjon
2. **Klok ressursforvaltning** – Diamantinntekter ble investert i utdanning, helse og infrastruktur i stedet for å berike en elite
3. **Partnerskap med De Beers** – 50/50-eierskap i diamantselskapet Debswana sikret at verdiene ble i landet
4. **Finanspolitisk forsiktighet** – Bygget opp finansielle reserver i gode tider

Botswana viser at ressursrikdom ikke nødvendigvis fører til «ressursforbannelse» dersom institusjonene er gode – en viktig kontrast til ressursrike men fattige land som Den demokratiske republikken Kongo.`,
    },
    {
      id: 'sf2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva menes med en fattigdomsfelle?',
        options: [
          { id: 'a', text: 'At et land bevisst holder befolkningen fattig for å holde lønningene nede', isCorrect: false },
          { id: 'b', text: 'At selvforsterkende mekanismer holder land eller individer fanget i fattigdom', isCorrect: true },
          { id: 'c', text: 'At internasjonale handelsavtaler favoriserer rike land', isCorrect: false },
          { id: 'd', text: 'At bistandsorganisasjoner skaper avhengighet i fattige land', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En fattigdomsfelle er en selvforsterkende sirkel der fattigdom hindrer investeringer i produktivitet, som igjen fører til fortsatt fattigdom. Eksempel: Uten sparemidler kan ikke et land investere i utdanning, uten utdanning forblir produktiviteten lav, og uten produktivitet forblir inntektene lave.',
      },
    },
    {
      id: 'sf2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hva er hovedargumentet i Acemoglu og Robinsons institusjonelle teori?',
        options: [
          { id: 'a', text: 'At geografi og klima er den viktigste forklaringen på forskjeller i velstand', isCorrect: false },
          { id: 'b', text: 'At kultur og religion bestemmer om et land blir rikt eller fattig', isCorrect: false },
          { id: 'c', text: 'At forskjeller i politiske og økonomiske institusjoner er den primære årsaken til forskjeller i velstand', isCorrect: true },
          { id: 'd', text: 'At tilgang på naturressurser avgjør om et land utvikler seg', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Acemoglu og Robinson argumenterer i «Why Nations Fail» (2012) for at forskjeller i institusjoner – inkluderende versus ekstraktive – er den viktigste forklaringen på hvorfor noen land er rike og andre fattige. Land med inkluderende institusjoner gir bred tilgang til økonomiske muligheter og politisk makt, mens ekstraktive institusjoner konsentrerer makt og rikdom hos en elite.',
      },
    },
    {
      id: 'sf2-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Gjør rede for to ulike teorier om hvorfor noen land forblir fattige. Vurder hvilken teori du mener har størst forklaringskraft.',
        hints: ['Velg for eksempel mellom Solows modell, institusjonell teori og fattigdomsfelle-teori', 'Bruk konkrete eksempler på land', 'Vurder styrker og svakheter ved hver teori'],
        solution: 'To sentrale teorier: 1) Fattigdomsfelle-teorien forklarer at lav inntekt gir lav sparing, lav investering og dermed fortsatt lav inntekt. Dette forklarer hvorfor land kan stagnere, men ikke hvorfor noen klarer å bryte ut. 2) Institusjonell teori (Acemoglu og Robinson) hevder at inkluderende institusjoner er avgjørende. Sør-Korea vs. Nord-Korea og Botswana vs. Kongo viser at institusjoner betyr mer enn geografi eller ressurser. Institusjonell teori har trolig størst forklaringskraft fordi den forklarer både hvorfor land forblir fattige (ekstraktive institusjoner) og hvorfor noen klarer å vokse (inkluderende institusjoner). Svakheten er at teorien ikke fullt forklarer hvorfor noen land utvikler gode institusjoner mens andre ikke gjør det.',
      },
    },
    {
      id: 'sf2-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Drøft om bistand hjelper eller hindrer økonomisk utvikling i fattige land. Trekk inn argumenter fra både Jeffrey Sachs og Dambisa Moyo.',
        hints: ['Presenter begge sider balansert', 'Bruk konkrete eksempler', 'Avslutt med din egen vurdering'],
        solution: 'Sachs argumenterer for at massiv bistand («big push») kan bryte fattigdomsfeller ved å finansiere grunnleggende infrastruktur, helse og utdanning – og peker på suksesser som vaksinasjonsprogrammer og malariainnsats. Moyo argumenterer for at langvarig bistand skaper avhengighet, svekker lokalt initiativ, og kan holde korrupte regimer ved makten. Hun peker på at Afrika har mottatt over 1 000 milliarder dollar i bistand uten tilsvarende vekst. Sannheten ligger trolig et sted mellom: Nødhjelp og målrettede tiltak (helse, utdanning) virker godt, mens generell budsjettbistand uten betingelser kan ha negative effekter. Moderne evidensbasert bistand (RCT-tilnærmingen til Duflo og Banerjee) forsøker å finne hva som faktisk virker.',
      },
    },
    {
      id: 'sf2-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-5',
        number: '7.2.5',
        type: 'multiple-choice',
        task: 'Hva måler FNs indeks for menneskelig utvikling (HDI)?',
        options: [
          { id: 'a', text: 'Kun BNP per innbygger justert for kjøpekraft', isCorrect: false },
          { id: 'b', text: 'Helse, utdanning og levestandard kombinert i én indeks', isCorrect: true },
          { id: 'c', text: 'Inntektsulikhet innad i et land', isCorrect: false },
          { id: 'd', text: 'Andelen av befolkningen som lever under fattigdomsgrensen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. HDI er en sammensatt indeks som kombinerer tre dimensjoner: helse (forventet levealder), utdanning (gjennomsnittlig og forventet skolegang) og levestandard (BNI per innbygger justert for kjøpekraft). Indeksen gir et bredere bilde av utvikling enn BNP alene.',
      },
    },
    {
      id: 'sf2-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        task: 'Forklar hva som menes med «ressursforbannelse», og drøft hvorfor noen ressursrike land forblir fattige mens andre blir velstående. Bruk eksempler.',
        hints: ['Sammenlign for eksempel Nigeria/Kongo med Botswana/Norge', 'Koble til institusjonell teori', 'Vurder forvaltning av ressursinntekter'],
        solution: 'Ressursforbannelsen (resource curse) beskriver paradokset at land med store naturressurser ofte har lavere økonomisk vekst enn ressursfattige land. Årsaker inkluderer: hollandsk syke (ressursinntekter styrker valutaen og svekker annen industri), korrupsjon og maktkamp om ressursinntektene, svekket insentiv til å bygge produktiv økonomi. Nigeria har enorme oljeinntekter men høy fattigdom fordi inntektene har blitt stjålet av korrupte eliter. Kongo har mineralrikdom men vedvarende konflikt om kontrollen. Moteksempler: Botswana har brukt diamantinntekter klokt med gode institusjoner, og Norge har gjennom oljefondet sikret ansvarlig forvaltning. Nøkkelen er institusjoner: Land med gode institusjoner klarer å forvalte ressursrikdom til fellesskapets beste.',
      },
    },
    {
      id: 'sf2-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Utviklingsland** varierer enormt, men kjennetegnes av lavt inntektsnivå og begrenset industrialisering
- **HDI** gir et bredere mål på utvikling enn BNP alene ved å inkludere helse og utdanning
- **Fattigdomsfeller** er selvforsterkende sirkler som holder land i fattigdom
- **Institusjoner** – inkluderende versus ekstraktive – er en nøkkelforklaring på forskjeller i velstand
- **Bistand** er omstridt: kan hjelpe med målrettede tiltak, men risikerer å skape avhengighet
- **Ressursforbannelsen** viser at naturrikdom ikke er nok – gode institusjoner er avgjørende

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fattigdomsfelle | Selvforsterkende mekanisme som holder folk i fattigdom |
| HDI | FNs indeks for helse, utdanning og levestandard |
| Inkluderende institusjoner | Spilleregler som fordeler makt og muligheter bredt |
| Ekstraktive institusjoner | Spilleregler som konsentrerer makt og rikdom hos en elite |
| Ressursforbannelse | Paradokset at ressursrike land ofte forblir fattige |
| Big push | Massiv bistand for å bryte fattigdomsfeller |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: EU og europeisk økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7_3: TextbookChapter = {
  id: 'samfokonomi-2-7-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '7.3',
  title: 'EU og europeisk økonomi',
  description: 'EU som økonomisk prosjekt, eurosamarbeidet, konvergenskrav, gjeldskrisen og debatt om felles valuta.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for europeisk økonomisk integrasjon og drøfte fordeler og ulemper ved felles valuta',
  ],
  content: [
    {
      id: 'sf2-7-3-intro',
      type: 'text',
      content: `## Europas økonomiske integrasjon

EU er verdens mest avanserte prosjekt for økonomisk integrasjon. Fra å starte som et kull- og stålfellesskap mellom seks land i 1952, har det vokst til en union med 27 medlemsland, felles valuta for 20 av dem, og et indre marked med fri bevegelse av varer, tjenester, kapital og arbeidskraft. Samtidig har eurosamarbeidet vært gjenstand for alvorlige kriser – særlig gjeldskrisen som rammet Hellas, Spania og andre søreuropeiske land etter 2010.

I dette kapittelet skal du lære:
- Hvordan europeisk økonomisk integrasjon har utviklet seg
- Hva det indre marked og de fire frihetene innebærer
- Hvordan euroen fungerer og hvilke regler som styrer den
- Gjeldskrisen i euroområdet og dens konsekvenser
- Argumenter for og mot felles valuta`,
    },
    {
      id: 'sf2-7-3-def-1',
      type: 'definition',
      title: 'Europeisk økonomisk integrasjon',
      content: `**Europeisk økonomisk integrasjon** refererer til den gradvise prosessen der europeiske land har knyttet sine økonomier tettere sammen gjennom felles marked, felles regelverk og for mange land felles valuta. Prosessen har gått gjennom flere steg: frihandelsområde, tollunion, indre marked, og økonomisk og monetær union (ØMU). EU representerer det mest avanserte nivået av økonomisk integrasjon i verden.`,
    },
    {
      id: 'sf2-7-3-text-1',
      type: 'text',
      content: `### Fra kull og stål til indre marked

**1952 – EKSF:** Det europeiske kull- og stålfellesskapet ble opprettet mellom Frankrike, Vest-Tyskland, Italia, Belgia, Nederland og Luxembourg. Ideen var at økonomisk integrering skulle gjøre krig mellom europeiske stormakter umulig.

**1957 – Roma-traktaten:** EEC (Det europeiske økonomiske felleskap) ble grunnlagt med mål om en felles tollunion og et felles marked.

**1993 – Det indre marked:** Med Maastricht-traktaten og gjennomføringen av de fire frihetene ble det indre markedet en realitet. Nå kunne varer, tjenester, kapital og personer bevege seg fritt mellom medlemslandene.

**De fire frihetene:**
1. **Fri bevegelse av varer** – Ingen toll eller kvoter mellom EU-land
2. **Fri bevegelse av tjenester** – Bedrifter kan tilby tjenester i hele EU
3. **Fri bevegelse av kapital** – Investeringer kan flyttes fritt mellom land
4. **Fri bevegelse av personer** – EU-borgere kan bo og jobbe i alle medlemsland`,
    },
    {
      id: 'sf2-7-3-def-2',
      type: 'definition',
      title: 'Økonomisk og monetær union (ØMU)',
      content: `**Økonomisk og monetær union (ØMU)** er det høyeste nivået av økonomisk integrasjon i EU. Det innebærer en felles pengepolitikk styrt av Den europeiske sentralbanken (ESB), en felles valuta (euro), og koordinering av finanspolitikken gjennom Stabilitets- og vekstpakten. 20 av EUs 27 land deltar i ØMU per 2024. Landene har gitt opp nasjonal pengepolitikk til fordel for en felles rentesetting.`,
    },
    {
      id: 'sf2-7-3-text-2',
      type: 'text',
      content: `### Euroen og eurosamarbeidet

Euroen ble innført i 1999 (sedler og mynter i 2002) og er i dag verdens nest viktigste valuta etter amerikanske dollar. Eurosamarbeidet bygger på tre pilarer:

**1. Felles pengepolitikk:** Den europeiske sentralbanken (ESB) setter styringsrenten for hele euroområdet. Målet er prisstabilitet med en inflasjon på «nær, men under 2 %» over tid. Individuelle land kan ikke lenger sette renter tilpasset sin egen konjunktursituasjon.

**2. Stabilitets- og vekstpakten:** Medlemslandene har forpliktet seg til å holde budsjettunderskuddet under 3 % av BNP og statsgjelden under 60 % av BNP. Disse konvergenskravene skal sikre finanspolitisk disiplin og hindre at enkeltland pådrar seg uholdbar gjeld.

**3. Ingen bail-out-klausul:** Traktaten fastslår at hverken EU eller andre medlemsland er forpliktet til å overta gjelden til et land som får betalingsproblemer. Denne klausulen ble satt under hardt press under gjeldskrisen.

**Fordeler med euroen:**
- Eliminerer valutarisiko og vekslingskostnader i handel mellom euroland
- Gjør priser sammenlignbare på tvers av land
- Styrker det indre markedet og fremmer investeringer
- Gir internasjonal tyngde som reservevaluta

**Ulemper med euroen:**
- Landene mister pengepolitisk selvstendighet (kan ikke sette egen rente)
- Landene kan ikke devaluere valutaen for å gjenvinne konkurranseevne
- «Én rente passer alle»-problemet: Samme rente kan være for lav for et land med overoppheting og for høy for et land i krise`,
    },
    {
      id: 'sf2-7-3-example-1',
      type: 'example',
      title: 'Optimal valutaunion – oppfyller euroområdet kravene?',
      problem: 'Robert Mundell definerte kriterier for en optimal valutaunion. Vurder om euroområdet oppfyller disse kriteriene.',
      solution: `Mundells kriterier for en optimal valutaunion:

1. **Arbeidskraftsmobilitet** – Arbeidere bør kunne flytte fritt dit det er jobber. EU har formelt fri bevegelse, men språkbarrierer, kulturforskjeller og ulike velferdsordninger begrenser mobiliteten i praksis. **Delvis oppfylt.**

2. **Kapitalflyt** – Kapital bør flyte fritt. Dette er i stor grad gjennomført i EU. **Oppfylt.**

3. **Fleksible lønninger og priser** – Lønninger bør kunne justeres nedover ved sjokk. Europeiske arbeidsmarkeder er relativt rigide med sterke fagforeninger og minimumslønn. **Delvis oppfylt.**

4. **Felles finanspolitisk mekanisme** – Felles budsjett for å overføre ressurser til regioner i krise. EUs budsjett er lite (ca. 1 % av BNP) sammenlignet med f.eks. USAs føderale budsjett. **Ikke oppfylt i tilstrekkelig grad.**

5. **Synkroniserte konjunkturer** – Landene bør ha like konjunktursykluser. Store forskjeller mellom kjerne (Tyskland, Nederland) og periferi (Hellas, Spania). **Delvis oppfylt.**

Konklusjon: Euroområdet oppfyller ikke fullt ut kriteriene for en optimal valutaunion, noe som bidro til gjeldskrisen.`,
    },
    {
      id: 'sf2-7-3-text-3',
      type: 'text',
      content: `### Gjeldskrisen i euroområdet

Den europeiske gjeldskrisen (2010–2015) avslørte alvorlige svakheter i eurosamarbeidets konstruksjon. Krisen rammet særlig Hellas, Irland, Portugal, Spania og Italia – de såkalte GIIPS-landene.

**Bakgrunn:** Etter innføringen av euroen kunne søreuropeiske land låne til historisk lave renter fordi markedet antok at eurolandene implisitt garanterte for hverandre. Billig kreditt førte til eiendomsbobler (Spania, Irland) og ekspansiv finanspolitikk (Hellas). Da finanskrisen slo inn i 2008, eksploderte budsjettunderskuddene og statsgjelden.

**Kriseforløpet:**
- **2009:** Hellas avslørte at budsjettunderskuddet var 12,7 % av BNP – langt over de rapporterte tallene
- **2010:** Hellas, Irland og Portugal fikk krisepakker fra «troikaen» (EU, ESB, IMF) mot strenge sparekrav
- **2012:** ESBs president Mario Draghi erklærte at ESB ville gjøre «whatever it takes» for å redde euroen – et vendepunkt
- **2015:** Hellas sto på randen av å forlate euroen (Grexit), men endte med å akseptere en tredje krisepakke

**Konsekvensene var dramatiske:** Hellas' BNP falt med 25 %, arbeidsledigheten nådde 27 %, og velferdskutt rammet de svakeste. Krisen utfordret solidariteten i EU og skapte dyp misnøye med EU-prosjektet i flere land.`,
    },
    {
      id: 'sf2-7-3-example-2',
      type: 'example',
      title: 'Gresk gjeldskrise – årsaker og tiltak',
      problem: 'Analyser årsakene til den greske gjeldskrisen og vurder om sparetiltakene var riktig medisin.',
      solution: `**Årsaker:**
1. Ekspansiv finanspolitikk over mange år med store budsjettunderskudd
2. Feilrapportering av økonomiske nøkkeltall til EU
3. Manglende konkurranseevne – høy lønns- og prisvekst etter euroinnføringen
4. Svak skatteinnkreving og omfattende skatteunndragelse
5. Lave renter takket være euroen muliggjorde overforbruk

**Sparetiltakene (austerity):**
- Kutt i offentlige lønninger og pensjoner
- Skatteøkninger
- Privatisering av statlige selskaper
- Arbeidsmarkedsreformer

**Vurdering:** Sparetiltakene reduserte budsjettunderskuddet, men hadde enorme sosiale kostnader. BNP falt 25 %, barnfattigdom økte, og helsetilbudet ble svekket. Mange økonomer (blant annet Paul Krugman og Joseph Stiglitz) argumenterte for at innstrammingene var for harde og forlenger krisen – en kontraktiv finanspolitikk i en dyp resesjon forsterker nedgangen. Andre mente at Hellas ikke hadde noe valg gitt det uholdbare gjeldsnivået.`,
    },
    {
      id: 'sf2-7-3-text-4',
      type: 'text',
      content: `### Lærdommer og reformer etter gjeldskrisen

Gjeldskrisen førte til viktige reformer i eurosamarbeidet:

**Bankunionen:** Felles banktilsyn under ESB og felles regler for håndtering av banker i krise. Målet er å bryte den farlige koblingen mellom bankers problemer og statens finanser.

**Den europeiske stabilitetsmekanismen (ESM):** Et permanent krisefond som kan gi lån til euroland i alvorlige vanskeligheter.

**OMT-programmet:** ESBs program for å kjøpe statsobligasjoner fra kriseland, som har vist seg svært effektivt for å stabilisere rentenivåene.

**NextGenerationEU:** Under koronakrisen ble EU enig om en felles gjeldspakke på 750 milliarder euro – et historisk steg mot felles finanspolitikk.

Til tross for reformene er det fortsatt debatt om eurosamarbeidets fundamentale utfordring: Det kombinerer felles pengepolitikk med nasjonal finanspolitikk, uten et tilstrekkelig sterkt felles budsjett for å håndtere asymmetriske sjokk.`,
    },
    {
      id: 'sf2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva innebærer de fire frihetene i EUs indre marked?',
        options: [
          { id: 'a', text: 'Fri bevegelse av varer, tjenester, kapital og arbeidskraft mellom EU-land', isCorrect: true },
          { id: 'b', text: 'Frihet fra toll, skatt, regulering og kontroll', isCorrect: false },
          { id: 'c', text: 'Fri adgang til fire strategiske markeder: energi, teknologi, finans og transport', isCorrect: false },
          { id: 'd', text: 'Felles politikk på fire områder: handel, forsvar, utenriks og justis', isCorrect: false },
        ],
        solution: 'Riktig svar er A. De fire frihetene er kjernen i EUs indre marked: fri bevegelse av varer (ingen toll mellom EU-land), tjenester (bedrifter kan tilby tjenester i hele EU), kapital (investeringer kan flyttes fritt) og personer (EU-borgere kan bo og jobbe i alle medlemsland).',
      },
    },
    {
      id: 'sf2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva er hovedproblemet med «én rente for alle» i euroområdet?',
        options: [
          { id: 'a', text: 'At ESB mangler kompetanse til å sette renten riktig', isCorrect: false },
          { id: 'b', text: 'At den felles renten kan være for lav for overopphetede økonomier og for høy for land i krise', isCorrect: true },
          { id: 'c', text: 'At renten alltid settes for høyt av frykt for inflasjon', isCorrect: false },
          { id: 'd', text: 'At bankene i euroområdet ikke følger ESBs rentebeslutninger', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når ESB setter én felles rente, passer den sjelden perfekt for alle land samtidig. Under gjeldskrisen trengte Hellas og Spania lavere rente, mens Tyskland hadde sterkere økonomi. Før krisen var renten for lav for overopphetede økonomier som Spania og Irland, noe som bidro til eiendomsbobler.',
      },
    },
    {
      id: 'sf2-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Gjør rede for Mundells kriterier for en optimal valutaunion, og vurder i hvilken grad euroområdet oppfyller disse kriteriene.',
        hints: ['Nevn minst fire kriterier', 'Vurder hvert kriterium konkret for euroområdet', 'Koble til erfaringene fra gjeldskrisen'],
        solution: 'Mundells kriterier inkluderer: 1) Arbeidskraftsmobilitet – delvis oppfylt, språkbarrierer begrenser; 2) Kapitalflyt – oppfylt; 3) Fleksible lønninger – delvis, rigide arbeidsmarkeder; 4) Felles finanspolitisk mekanisme – ikke tilstrekkelig, EUs budsjett er lite; 5) Synkroniserte konjunkturer – store forskjeller mellom kjerne og periferi. Euroområdet oppfyller ikke kriteriene fullt ut, noe gjeldskrisen tydelig demonstrerte. Særlig mangelen på finanspolitisk omfordelingsmekanisme og ulike konjunkturer skapte problemer da Hellas og Spania trengte helt andre tiltak enn Tyskland.',
      },
    },
    {
      id: 'sf2-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Drøft årsakene til den europeiske gjeldskrisen og vurder om sparetiltakene (austerity) var riktig medisin.',
        hints: ['Skil mellom årsaker knyttet til enkeltland og systemiske årsaker', 'Trekk inn ulike økonomiske perspektiver på innstramming', 'Vurder sosiale konsekvenser'],
        solution: 'Årsaker til gjeldskrisen var en kombinasjon av nasjonale og systemiske faktorer: Hellas hadde uholdbar finanspolitikk, Spania og Irland hadde eiendomsbobler, og systemisk var euroen konstruert uten tilstrekkelige mekanismer for kriser. Billig kreditt etter euroinnføringen forvrengte landenes insentiver. Sparetiltakene reduserte underskuddene, men keynesianske økonomer kritiserer at innstramming i en resesjon forsterker nedgangen (multiplikatoreffekt). BNP-fallet i Hellas var på 25 %. Alternativt kunne man brukt mer ekspansiv finanspolitikk, gjeldslette, eller intern devaluering mer gradvis. Konklusjon: Sparetiltakene var trolig nødvendige i noen grad, men for harde og for raske, noe som påførte enorme sosiale kostnader.',
      },
    },
    {
      id: 'sf2-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-5',
        number: '7.3.5',
        type: 'multiple-choice',
        task: 'Hva var betydningen av Mario Draghis uttalelse «whatever it takes» i 2012?',
        options: [
          { id: 'a', text: 'ESB lovte å trykke ubegrenset med penger til alle euroland', isCorrect: false },
          { id: 'b', text: 'ESB signaliserte at den ville gjøre alt nødvendig for å bevare euroen, noe som roet finansmarkedene', isCorrect: true },
          { id: 'c', text: 'EU vedtok å innføre felles skattepolitikk for å sikre eurosamarbeidet', isCorrect: false },
          { id: 'd', text: 'Hellas ble lovet full gjeldsettergivelse', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Draghis uttalelse i juli 2012 var et vendepunkt i gjeldskrisen. Ved å signalisere at ESB ville kjøpe statsobligasjoner uten begrensning om nødvendig (OMT-programmet), fjernet han usikkerheten om euroens overlevelse. Rentene på spanske og italienske statsobligasjoner falt umiddelbart, og markedene stabiliserte seg. Ironisk nok trengte ESB aldri å bruke programmet fordi trusselen var nok.',
      },
    },
    {
      id: 'sf2-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved en felles europeisk valuta. Vurder om du mener euroen er et godt prosjekt for Europa som helhet.',
        hints: ['Nevn økonomiske, politiske og praktiske fordeler', 'Drøft tapet av pengepolitisk selvstendighet', 'Bruk erfaringer fra gjeldskrisen'],
        solution: 'Fordeler: Eliminerer valutarisiko og vekslingskostnader, gjør priser sammenlignbare, styrker det indre markedet, gir global tyngde som reservevaluta, og fremmer politisk integrasjon. Ulemper: Landene mister muligheten til egen rente og valutakursjustering, «én rente for alle»-problemet, asymmetriske sjokk kan ikke håndteres med nasjonal pengepolitikk, og manglende felles finanspolitikk skaper ustabilitet. Gjeldskrisen viste euroens svakheter tydelig. Euroen er et politisk prosjekt like mye som et økonomisk, og dens suksess avhenger av viljen til videre integrasjon (felles budsjett, bankunion). For land med svært ulik økonomi kan euroen være en tvangstrøye, mens for likeartede økonomier fungerer den bedre.',
      },
    },
    {
      id: 'sf2-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Europeisk integrasjon** har utviklet seg fra kull- og stålfellesskap til indre marked og monetær union
- **De fire frihetene** (varer, tjenester, kapital, personer) er kjernen i det indre markedet
- **Euroen** gir fordeler som lavere transaksjonskostnader, men tar fra landene pengepolitisk selvstendighet
- **Gjeldskrisen** avslørte at euroområdet ikke oppfyller kriteriene for en optimal valutaunion
- **Reformer** som bankunionen og ESM har styrket eurosamarbeidet, men fundamentale utfordringer gjenstår

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| De fire frihetene | Fri bevegelse av varer, tjenester, kapital og personer |
| ØMU | Økonomisk og monetær union med felles pengepolitikk |
| ESB | Den europeiske sentralbanken – setter renten for euroområdet |
| Stabilitets- og vekstpakten | Maks 3 % underskudd, 60 % gjeld av BNP |
| Optimal valutaunion | Mundells kriterier for vellykket felles valuta |
| Gjeldskrisen | Europeisk krise 2010–2015 med GIIPS-landene |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Finanskriser
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7_4: TextbookChapter = {
  id: 'samfokonomi-2-7-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '7.4',
  title: 'Finanskriser',
  description: 'Årsaker til finanskriser, smittemekanismer, den globale finanskrisen 2008, og regulering for å forebygge nye kriser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere årsaker til finanskriser og drøfte hvordan regulering kan redusere systemrisiko',
  ],
  content: [
    {
      id: 'sf2-7-4-intro',
      type: 'text',
      content: `## Når finansmarkedene svikter

Finanskriser er tilbakevendende fenomener i markedsøkonomier. Fra tulipanmanien i Nederland på 1630-tallet til den globale finanskrisen i 2008, har finansielle bobler og krasj påført samfunnet enorme kostnader. Den globale finanskrisen i 2007–2009 var den alvorligste økonomiske krisen siden den store depresjonen på 1930-tallet, og førte til fundamental nytenkning om finansiell regulering.

I dette kapittelet skal du lære:
- Hva som kjennetegner finanskriser og hva som utløser dem
- Hvordan finanskriser sprer seg mellom land og sektorer
- Forløpet og årsakene til den globale finanskrisen 2007–2009
- Hvilke reguleringer som ble innført etter 2008 for å forebygge nye kriser`,
    },
    {
      id: 'sf2-7-4-def-1',
      type: 'definition',
      title: 'Finanskrise',
      content: `En **finanskrise** er en alvorlig forstyrrelse i finanssystemet der aktivapriser faller bratt, finansinstitusjoner får betalingsproblemer, og kredittilgangen i økonomien tørker inn. Finanskriser kan utløses av bobler som sprekker, bankkonkurser, valutakriser eller statsgjeldskriser. Kjennetegn er panikk, tap av tillit og selvforsterkende negative spiraler der frykt fører til handlinger som forverrer krisen.`,
    },
    {
      id: 'sf2-7-4-text-1',
      type: 'text',
      content: `### Anatomien til en finanskrise

Økonomen Hyman Minsky beskrev hvordan finanskriser bygger seg opp i tre faser:

**1. Hedgefinansiering (sikker fase):** I en periode med stabilitet og optimisme låner aktører penger, men holder seg til lån de kan betjene med løpende inntekter. Risikoen er lav.

**2. Spekulasjonsfinansiering:** Etter hvert blir aktørene modigere. De tar opp lån der de kan betjene renter, men er avhengige av å refinansiere hovedstolen. De satser på at aktivaprisene vil fortsette å stige.

**3. Ponzifinansiering:** I den siste fasen tar aktører opp lån der de ikke engang kan betjene rentene med løpende inntekter. De er helt avhengige av at prisene stiger videre slik at de kan selge med gevinst. Når prisene snur, kollapser hele korthuset.

Denne prosessen kalles **Minsky-momentet** – punktet der optimisme slår over i panikk og aktivaprisene stuper. Det som virket rasjonelt på vei opp (økt låntaking ga gevinst), blir katastrofalt på vei ned (alle forsøker å selge samtidig).`,
    },
    {
      id: 'sf2-7-4-def-2',
      type: 'definition',
      title: 'Systemrisiko',
      content: `**Systemrisiko** er risikoen for at problemer i en del av finanssystemet sprer seg og truer hele systemets stabilitet. I motsetning til individuell risiko (som kan diversifiseres bort) oppstår systemrisiko når finansinstitusjoner er så tett sammenkoblet at én aktørs fall kan utløse en kjedereaksjon. Banker som er «too big to fail» representerer systemrisiko fordi deres konkurs kan ødelegge hele finanssystemet.`,
    },
    {
      id: 'sf2-7-4-text-2',
      type: 'text',
      content: `### Den globale finanskrisen 2007–2009

Finanskrisen som startet i det amerikanske boligmarkedet ble den verste globale økonomiske krisen på 80 år. For å forstå den, må vi se på flere samvirkende faktorer:

**Boligboblen:** Amerikanske boligpriser steg kraftig i årene etter 2000. Billige lån (lave renter etter 2001), slapp regulering og troen på at boligpriser «aldri faller nasjonalt» drev prisene oppover.

**Subprime-lån:** Banker ga lån til låntakere med svak betalingsevne (subprime). Lånene hadde ofte lave startrenter som senere økte kraftig (adjustable-rate mortgages). Bankene brydde seg mindre om lånekvalitet fordi de videresolgte lånene.

**Verdipapirisering:** Boliglån ble pakket sammen og solgt som obligasjoner (mortgage-backed securities, MBS) til investorer over hele verden. Ratingbyråene (Moody's, S&P) ga mange av disse produktene toppkarakter (AAA), selv om de underliggende lånene var risikable.

**CDO-er og CDS-er:** Enda mer komplekse produkter ble skapt: CDO-er (Collateralized Debt Obligations) pakket risikable lån i nye lag, og CDS-er (Credit Default Swaps) fungerte som forsikring mot mislighold – men ble i praksis brukt som spekulasjonsinstrumenter.

**Sammenbruddet:** Da boligprisene begynte å falle i 2006–2007 og subprime-låntakere misligholdt, spredte tapene seg gjennom hele det globale finanssystemet. Ingen visste hvem som satt på de dårlige lånene.`,
    },
    {
      id: 'sf2-7-4-example-1',
      type: 'example',
      title: 'Lehman Brothers – systemkrise utløses',
      problem: 'Forklar hvorfor konkursen i Lehman Brothers 15. september 2008 utløste en global systemkrise.',
      solution: `Lehman Brothers var USAs fjerde største investeringsbank med over 600 milliarder dollar i eiendeler. Da myndighetene lot banken gå konkurs (i motsetning til Bear Stearns som ble reddet), utløste det panikk i hele det globale finanssystemet:

**1. Tillitssjokk:** Markedet innså at selv store institusjoner kunne gå konkurs. Bankene sluttet å låne til hverandre fordi ingen visste hvem som var solvent.

**2. Smitteeffekt:** Lehman hadde motparter over hele verden. Pengemarkedsfond, europeiske banker og asiatiske investorer led tap. Det globale interbankmarkedet frøs.

**3. Kredittklemme:** Når bankene sluttet å låne, rammet det hele realøkonomien. Bedrifter fikk ikke lån, investeringer stoppet, og arbeidsledigheten skjøt i været.

**4. Global resesjon:** Verdens BNP falt for første gang siden andre verdenskrig. Millioner mistet jobbene sine. Børsene falt 40–50 % på få måneder.

Lehman-kollapsen demonstrerte systemrisiko i praksis: Én banks fall kunne utløse en global krise fordi det finansielle systemet var så tett sammenkoblet.`,
    },
    {
      id: 'sf2-7-4-text-3',
      type: 'text',
      content: `### Smittemekanismer – hvordan kriser sprer seg

Finanskriser sprer seg gjennom flere kanaler:

**Direkte eksponering:** Banker og investorer i ulike land eier hverandres obligasjoner og aksjer. Tap i ett land gir direkte tap i andre.

**Interbankmarkedet:** Banker låner til hverandre daglig. Når tilliten forsvinner, fryser dette markedet og alle banker rammes av likviditetsmangel.

**Handelskanalen:** Finanskrise fører til lavere etterspørsel, som reduserer import og rammer eksportland. Norsk eksportindustri ble rammet da handelspartnerne gikk i resesjon.

**Forventningskanalen:** Dårlige nyheter fra ett land sprer pessimisme til andre markeder. Investorer som taper penger ett sted, selger eiendeler andre steder for å dekke tap (brannslukking).

**Valutakanalen:** Kapitalflukt fra land i krise svekker valutaen, noe som kan utløse kriser i land som har lån i utenlandsk valuta.`,
    },
    {
      id: 'sf2-7-4-text-4',
      type: 'text',
      content: `### Regulering etter 2008

Finanskrisen avdekket massive svakheter i reguleringen og førte til de mest omfattende reformene i finanssektoren siden 1930-tallet:

**Basel III:** Internasjonale regler som krever at banker holder mer egenkapital (kapitaldekning) som buffer mot tap. Jo mer egenkapital, desto mer kan banken tape før den går konkurs.

**Stresstest:** Regelmessige tester der myndighetene simulerer krisescenarier for å se om bankene overlever. Banker som ikke består stresstestene må styrke egenkapitalen.

**Makrotilsyn:** Nye tilsynsorganer (som Financial Stability Board globalt og Finanstilsynet i Norge) overvåker systemrisiko i hele finanssystemet, ikke bare i enkeltbanker.

**Regulering av derivater:** Handel med CDS-er og andre derivater ble flyttet til regulerte handelsplasser (clearing houses) for å øke gjennomsiktigheten.

**Avviklingsmekanismer:** Nye regler for ordnet avvikling av store banker (bail-in) der aksjonærer og kreditorer tar tap i stedet for skattebetalerne (i motsetning til bail-out).

**Dodd-Frank-loven (USA):** Omfattende reform som blant annet forbød egenhandel i banker (Volcker-regelen) og opprettet et forbrukerbeskyttelsesbyrå.`,
    },
    {
      id: 'sf2-7-4-example-2',
      type: 'example',
      title: 'Bail-out vs. bail-in – hvem tar regningen?',
      problem: 'Forklar forskjellen mellom bail-out og bail-in, og drøft hvilken tilnærming som er mest rettferdig.',
      solution: `**Bail-out (brukt under 2008-krisen):**
Staten bruker skattebetalernes penger til å redde banker fra konkurs. Eksempel: Den amerikanske staten reddet AIG med 182 milliarder dollar. Fordel: Hindrer systemkollaps. Ulempe: Skattebetalerne betaler for bankenes risikotaking, og bankene vet de blir reddet (moralsk hasard).

**Bail-in (ny tilnærming etter 2008):**
Bankens egne aksjonærer og kreditorer (obligasjonseiere) tar tapene først. Innskytere beskyttes opptil garantigrensen (100 000 euro i EU). Fordel: De som tok risikoen betaler prisen. Ulempe: Kan skape panikk blant kreditorer og forsterke krisen.

**Rettferdighetsvurdering:** Bail-in er mer rettferdig fordi de som investerte i og lånte til banken – og dermed tok risiko og mottok avkastning – bærer tapene. Bail-out sosialiserer tap mens gevinster var privatisert. Samtidig kan bail-in være vanskeligere å gjennomføre i praksis fordi trusselen om tap kan utløse panikk og bankrun.`,
    },
    {
      id: 'sf2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva beskriver et «Minsky-moment»?',
        options: [
          { id: 'a', text: 'Tidspunktet der sentralbanken setter ned renten for å stimulere økonomien', isCorrect: false },
          { id: 'b', text: 'Vendepunktet der optimisme slår over i panikk og aktivapriser stuper', isCorrect: true },
          { id: 'c', text: 'Øyeblikket der en stat erklærer seg betalingsudyktig', isCorrect: false },
          { id: 'd', text: 'Tidspunktet der en ny finansiell regulering trer i kraft', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Minsky-momentet er oppkalt etter økonomen Hyman Minsky og beskriver vendepunktet i en finansiell boble der optimismen brått erstattes av panikk. Aktørene som har tatt opp for mye gjeld tvinges til å selge, prisene stuper, og en selvforsterkende nedadgående spiral settes i gang.',
      },
    },
    {
      id: 'sf2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hva var subprime-lån, og hvorfor var de sentrale i finanskrisen 2007–2009?',
        options: [
          { id: 'a', text: 'Statlige lån til bankene som ble misbrukt til spekulasjon', isCorrect: false },
          { id: 'b', text: 'Boliglån til låntakere med svak betalingsevne, som ble pakket om og solgt som verdipapirer til investorer globalt', isCorrect: true },
          { id: 'c', text: 'Lån mellom europeiske banker som ikke var regulert av myndighetene', isCorrect: false },
          { id: 'd', text: 'Kortsiktige valutalån som utviklingsland tok opp for å finansiere infrastruktur', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Subprime-lån var boliglån til låntakere med svak kredittverdighet. Disse lånene ble pakket sammen (verdipapirisert) og solgt som obligasjoner til investorer over hele verden, ofte med villedende god kredittrating. Da boligprisene falt og låntakerne misligholdt, spredte tapene seg gjennom hele det globale finanssystemet.',
      },
    },
    {
      id: 'sf2-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Gjør rede for Minskys tre faser av finansiell ustabilitet og forklar hvordan de kan knyttes til utviklingen av den amerikanske boligboblen før finanskrisen.',
        hints: ['Beskriv de tre fasene med egne ord', 'Gi konkrete eksempler fra det amerikanske boligmarkedet', 'Forklar hvorfor prosessen er selvforsterkende'],
        solution: 'Minskys tre faser: 1) Hedgefinansiering – tidlig 2000-tall: Boligkjøpere med god økonomi tok opp tradisjonelle lån de kunne betjene. Risikoen var lav. 2) Spekulasjonsfinansiering – midt 2000-tall: Flere kjøpte boliger for å selge videre med gevinst. De tok lån med lave startrenter og satset på prisoppgang for å refinansiere. 3) Ponzifinansiering – 2005-2007: Subprime-lånene eksploderte. Låntakere uten inntekt eller sparepenger fikk lån (NINJA-lån). De var helt avhengige av at prisene fortsatte å stige. Da prisene snudde, kollapset hele systemet. Prosessen var selvforsterkende fordi stigende priser legitimerte mer låntaking, som drev prisene høyere, som igjen gjorde flere villige til å låne.',
      },
    },
    {
      id: 'sf2-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Drøft om de regulatoriske reformene etter 2008 (Basel III, stresstest, Dodd-Frank) er tilstrekkelige for å forhindre en ny finanskrise.',
        hints: ['Beskriv de viktigste reformene', 'Vurder hva de gjør og hva de ikke gjør', 'Tenk på nye risikoer som har oppstått etter 2008'],
        solution: 'Reformene har styrket finanssystemet betydelig: Bankene har mer egenkapital (Basel III), stresstester avdekker svakheter, og derivathandel er mer transparent. Systemet er mer robust enn i 2008. Likevel er det usikkert om reformene er tilstrekkelige: 1) Skyggebankvirksomhet (hedgefond, private equity) er mindre regulert og har vokst kraftig. 2) Nye risikoer har oppstått – kryptovaluta, algoritmisk handel, cyberrisiko. 3) Statsgjelden har økt enormt, noe som begrenser myndighetenes handlingsrom i en ny krise. 4) «Too big to fail»-problemet er ikke løst – storbankene er enda større enn i 2008. 5) Politisk press for deregulering (Dodd-Frank ble delvis rullet tilbake under Trump). Historien viser at det finansielle systemet alltid finner nye måter å ta risiko på, og at den neste krisen sannsynligvis kommer fra uventet hold.',
      },
    },
    {
      id: 'sf2-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom bail-out og bail-in ved håndtering av en bankkrise?',
        options: [
          { id: 'a', text: 'Bail-out redder bare små banker, bail-in redder bare store banker', isCorrect: false },
          { id: 'b', text: 'Bail-out bruker skattebetalernes penger, bail-in lar bankens aksjonærer og kreditorer ta tapene', isCorrect: true },
          { id: 'c', text: 'Bail-out er en permanent ordning, bail-in er midlertidig nødhjelp', isCorrect: false },
          { id: 'd', text: 'Bail-out brukes i USA, bail-in brukes i Europa', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Ved bail-out redder staten banken med offentlige midler, slik at skattebetalerne bærer kostnadene. Ved bail-in konverteres bankens gjeld til egenkapital – aksjonærer og kreditorer tar tap, mens innskytere beskyttes opptil garantigrensen. Etter 2008 har man gått over til bail-in for å unngå moralsk hasard og sikre at de som tok risikoen bærer konsekvensene.',
      },
    },
    {
      id: 'sf2-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Forklar hvordan finanskriser kan spre seg fra ett land til et annet (smittemekanismer), og bruk finanskrisen 2008 som eksempel.',
        hints: ['Nevn minst tre smittekanaler', 'Gi konkrete eksempler for hver kanal', 'Forklar hvorfor globalisering har gjort smitte sterkere'],
        solution: 'Smittemekanismer i finanskrisen 2008: 1) Direkte eksponering – europeiske banker hadde kjøpt amerikanske subprime-obligasjoner og led direkte tap (f.eks. tyske Landesbanken). 2) Interbankmarkedet – da bankene mistet tillit til hverandre, frøs utlånsmarkedet globalt. Norske banker fikk vansker med å skaffe finansiering. 3) Handelskanalen – resesjonen i USA og Europa førte til kraftig fall i global etterspørsel, som rammet eksportindustrien i alle land. 4) Forventningskanalen – panikken spredte seg via medier og markeder. Børser falt 40-50 % globalt. 5) Valutakanalen – kapitalflukt rammet særlig fremvoksende økonomier. Globaliseringen har gjort smitte sterkere fordi finansmarkedene er tett sammenkoblet, handel utgjør en stor del av BNP, og informasjon spres umiddelbart.',
      },
    },
    {
      id: 'sf2-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Finanskriser** bygger seg opp gjennom Minskys tre faser av økt risikotaking
- **Finanskrisen 2008** ble utløst av en boligboble, subprime-lån og komplekse finansprodukter
- **Smitte** sprer kriser mellom land gjennom eksponeringer, interbankmarkeder, handel og forventninger
- **Systemrisiko** oppstår når institusjoner er «too big to fail»
- Etter 2008 ble det innført omfattende **regulering** (Basel III, stresstester, bail-in-regler)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Finanskrise | Alvorlig forstyrrelse der aktivapriser faller og kreditt tørker inn |
| Minsky-momentet | Vendepunktet fra optimisme til panikk |
| Systemrisiko | Risiko for at ett fall utløser kjedereaksjon i systemet |
| Subprime-lån | Boliglån til låntakere med svak betalingsevne |
| Verdipapirisering | Pakke lån til omsettelige verdipapirer |
| Basel III | Internasjonale krav til bankenes egenkapital |
| Bail-in | Aksjonærer og kreditorer tar tap (vs. bail-out) |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Norges rolle i verdensøkonomien
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7_5: TextbookChapter = {
  id: 'samfokonomi-2-7-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '7.5',
  title: 'Norges rolle i verdensøkonomien',
  description: 'Norges oljeøkonomi, Statens pensjonsfond utland, EØS-avtalen, handelspartnere og utfordringer for en liten åpen økonomi.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte Norges rolle i den internasjonale økonomien med utgangspunkt i olje, EØS og handel',
  ],
  content: [
    {
      id: 'sf2-7-5-intro',
      type: 'text',
      content: `## En liten, åpen og ressursrik økonomi

Norge er en liten, åpen økonomi med bare 5,5 millioner innbyggere, men med en unik posisjon i verdensøkonomien. Enorme olje- og gassinntekter har gjort Norge til et av verdens rikeste land, med verdens største statlige investeringsfond. Samtidig er Norge tett integrert i den europeiske økonomien gjennom EØS-avtalen uten å være EU-medlem, og er sårbar for svingninger i råvarepriser og internasjonal etterspørsel.

I dette kapittelet skal du lære:
- Hvordan olje og gass har formet norsk økonomi
- Hva Statens pensjonsfond utland er og hvordan det forvaltes
- Norges tilknytning til EU gjennom EØS-avtalen
- Hvem Norges viktigste handelspartnere er
- Utfordringer for norsk økonomi i en verden i endring`,
    },
    {
      id: 'sf2-7-5-def-1',
      type: 'definition',
      title: 'Liten åpen økonomi',
      content: `En **liten åpen økonomi** er en økonomi som er for liten til å påvirke verdensprisene, og som er avhengig av internasjonal handel og kapitalflyt. Norge er et typisk eksempel: Vi eksporterer olje og fisk til verdensmarkedet til priser vi ikke kan påvirke, og importerer det meste av forbruksvarene våre. Åpne økonomier er sårbare for internasjonale svingninger, men drar nytte av spesialisering og handel.`,
    },
    {
      id: 'sf2-7-5-text-1',
      type: 'text',
      content: `### Oljeøkonomien

Olje- og gassinntektene har transformert norsk økonomi siden det første store funnet på Ekofisk i 1969. Petroleumssektoren utgjør i dag rundt 20 % av BNP, over 40 % av eksportinntektene og nesten 30 % av statens inntekter.

**Verdiskaping:** Olje- og gassvirksomheten har skapt en enorm verdiskaping. Teknologien utviklet for norsk sokkel – dypvannsutvinning, subsea-teknologi, sikkerhetssystemer – har blitt en eksportindustri i seg selv.

**Hollandsk syke-utfordringen:** Høye oljeinntekter kan styrke kronekursen og drive opp lønninger, noe som svekker konkurranseevnen til andre eksportnæringer. Norge har i perioder opplevd symptomer på hollandsk syke, med en relativt liten industrisektor sammenlignet med andre nordiske land.

**Oljeprisfølsomhet:** Norsk økonomi er sårbar for oljeprissjokk. Prisfallet i 2014–2016 førte til at 50 000 arbeidsplasser forsvant i oljerelatert industri, særlig på Vestlandet. Arbeidsledigheten i Rogaland tredoblet seg.

**Grønn omstilling:** Med klimaendringene og verdens bevegelse mot fornybar energi står norsk oljeindustri overfor sin kanskje største utfordring. Når etterspørselen etter olje faller, må Norge utvikle nye eksportnæringer for å opprettholde velstanden.`,
    },
    {
      id: 'sf2-7-5-def-2',
      type: 'definition',
      title: 'Statens pensjonsfond utland (oljefondet)',
      content: `**Statens pensjonsfond utland** – populært kalt oljefondet – er verdens største statlige investeringsfond med en markedsverdi på over 17 000 milliarder kroner (2024). Fondet er bygget opp av statens netto oljeinntekter og investeres i aksjer, obligasjoner og eiendom i utlandet. Handlingsregelen begrenser det årlige uttaket til forventet realavkastning, anslått til 3 % av fondets verdi, for å sikre at oljerikdommen kommer også fremtidige generasjoner til gode.`,
    },
    {
      id: 'sf2-7-5-text-2',
      type: 'text',
      content: `### Statens pensjonsfond utland

Oljefondet er et av historiens mest vellykkede eksempler på forvaltning av naturressursinntekter. Det ble opprettet i 1990, og den første innbetalingen ble gjort i 1996.

**Formål:**
- Sikre at oljeinntektene kommer fremtidige generasjoner til gode (generasjonsrettferdighet)
- Hindre hollandsk syke ved å investere inntektene i utlandet i stedet for å bruke dem i norsk økonomi
- Skape en buffer mot oljeprissvingninger

**Handlingsregelen:**
Handlingsregelen sier at det årlige uttaket fra fondet over tid skal tilsvare forventet realavkastning, anslått til 3 % (justert ned fra 4 % i 2017). Dette betyr at man bruker avkastningen men bevarer realverdien av fondet. I 2024 utgjorde uttaket rundt 400 milliarder kroner – nesten 20 % av statsbudsjettet.

**Forvaltning:**
Fondet forvaltes av Norges Bank Investment Management (NBIM) og er investert i over 9 000 selskaper i 70 land. Fondet eier i gjennomsnitt 1,5 % av alle børsnoterte selskaper i verden. Det har etiske retningslinjer som utelukker selskaper involvert i for eksempel våpenproduksjon, tobakk og alvorlig miljøskade.

**Utfordringer:**
- Fondets størrelse (over tre ganger BNP) gjør norsk økonomi svært avhengig av global finansmarkedsutvikling
- Politisk press for å øke bruken av oljepenger
- Debatten om fondet bør investere mer i fornybar energi og klimavennlig teknologi`,
    },
    {
      id: 'sf2-7-5-example-1',
      type: 'example',
      title: 'Handlingsregelen i praksis',
      problem: 'Statens pensjonsfond utland er verdt 17 000 milliarder kroner. Hvor mye kan staten bruke ifølge handlingsregelen, og hva betyr dette for statsbudsjettet?',
      solution: `**Beregning:**
3 % av 17 000 milliarder kroner = 510 milliarder kroner

**Betydning for statsbudsjettet:**
Statsbudsjettet for 2024 var på omtrent 1 900 milliarder kroner. Et uttak på 400–500 milliarder kroner utgjør dermed rundt 20–25 % av budsjettet. Dette betyr at omtrent en femtedel av statens utgifter finansieres med oljepenger.

**Konsekvenser:**
- Uten oljefondet ville staten måtte kutte dramatisk i velferd, øke skattene, eller ta opp gjeld
- Handlingsregelen gir forutsigbarhet og hindrer at politikere bruker for mye i gode tider
- Under koronakrisen ble uttaket økt over 3 % for å finansiere krisepakker, noe som viser at fondet også fungerer som krisebuffer
- Over tid må man forberede seg på at oljeinntektene til fondet vil avta når petroleumsproduksjonen synker`,
    },
    {
      id: 'sf2-7-5-text-3',
      type: 'text',
      content: `### EØS-avtalen – Norges tilknytning til EU

Norge er ikke EU-medlem etter folkeavstemningene i 1972 og 1994, men er tett knyttet til EU gjennom EØS-avtalen (Det europeiske økonomiske samarbeidsområdet) som trådte i kraft i 1994.

**Hva EØS-avtalen gir:**
- Tilgang til EUs indre marked med de fire frihetene (varer, tjenester, kapital, personer)
- Norske bedrifter kan selge varer og tjenester i hele EU uten toll eller handelsbarrierer
- Norske borgere kan bo og jobbe i EU-land
- Norge overtar det meste av EUs lovgivning knyttet til det indre markedet

**Hva EØS-avtalen ikke dekker:**
- Landbrukspolitikk (Norge har egen landbrukspolitikk med høy toll)
- Fiskeripolitikk (men Norge har egne avtaler om markedsadgang for fisk)
- Utenriks- og sikkerhetspolitikk
- Justispolitikk (delvis tilknyttet gjennom Schengen)

**Demokratisk underskudd:** En sentral kritikk av EØS-avtalen er at Norge er forpliktet til å innføre EU-regler uten å ha stemmerett i beslutningsprosessen. Norge har formelt en reservasjonsrett (veto), men denne har aldri blitt brukt i praksis.

**EØS-kontingenten:** Norge betaler en betydelig sum til EU for markedsadgang – rundt 6 milliarder kroner årlig i EØS-midler som går til sosial og økonomisk utvikling i mindre velstående EU-land.`,
    },
    {
      id: 'sf2-7-5-text-4',
      type: 'text',
      content: `### Norges handelspartnere og handelsmønster

Norges utenrikshandel domineres av Europa og petroleumsprodukter:

**Eksport (2023):**
- Olje og gass utgjør rundt 50 % av eksportverdien (høyere i perioder med høye energipriser)
- Sjømat (laks, torsk) er nest viktigste eksportvare
- Metaller (aluminium), kjemikalier og maritime tjenester
- Viktigste eksportmarkeder: EU (ca. 75 %), Storbritannia, USA, Kina

**Import:**
- Maskiner og transportmidler utgjør den største importkategorien
- Mat og drikkevarer
- Klær og forbruksvarer
- Viktigste importland: EU (ca. 60 %), Kina, USA, Storbritannia

**Handelsbalanse:** Norge har normalt et betydelig handelsoverskudd takket være petroleumseksporten. I 2022 var overskuddet rekordhøyt (over 1 000 milliarder kroner) på grunn av svært høye energipriser etter Russlands invasjon av Ukraina.

**Tjenestehandel:** Norge har også betydelig tjenesteeksport, særlig innen skipsfart, offshorevirksomhet, og teknologitjenester. Internasjonal shipping er en tradisjonelt viktig norsk næring.`,
    },
    {
      id: 'sf2-7-5-example-2',
      type: 'example',
      title: 'Norges utfordringer ved grønn omstilling',
      problem: 'Drøft hvordan overgangen fra fossil til fornybar energi vil påvirke norsk økonomi og Norges rolle i verdensøkonomien.',
      solution: `**Utfordringer:**
1. **Fallende petroleumsinntekter** – Etter hvert som verden bruker mindre olje og gass, vil eksportinntektene og statsinntektene falle. Fondet vil slutte å vokse og kan på sikt krympe.
2. **Tap av arbeidsplasser** – Over 200 000 norske arbeidsplasser er direkte eller indirekte knyttet til petroleumssektoren.
3. **Kompetanseomstilling** – Ingeniører og teknikere fra oljesektoren må omskoleres til nye næringer.
4. **Hollandsk syke i revers** – Når oljeinntektene faller, kan kronekursen svekkes, noe som gjør import dyrere.

**Muligheter:**
1. **Havvind** – Norsk offshorekompetanse kan overføres til havvindproduksjon.
2. **Karbonfangst og -lagring (CCS)** – Norsk teknologi og infrastruktur på sokkelen kan brukes til CO2-lagring.
3. **Hydrogen** – Norge kan bli eksportør av grønn og blå hydrogen.
4. **Sjømat og havbruk** – Bærekraftig oppdrett kan vokse videre.
5. **Oljefondet** – Gir en unik finansiell buffer for omstilling som de fleste land mangler.

Norge er bedre posisjonert enn de fleste oljenasjoner for grønn omstilling, men det krever politisk vilje og strategisk satsing.`,
    },
    {
      id: 'sf2-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva sier handlingsregelen om bruken av oljepenger?',
        options: [
          { id: 'a', text: 'At staten kan bruke maksimalt 10 % av oljeinntektene hvert år', isCorrect: false },
          { id: 'b', text: 'At det årlige uttaket over tid skal tilsvare forventet realavkastning, anslått til 3 % av fondets verdi', isCorrect: true },
          { id: 'c', text: 'At oljepengene bare kan brukes til investeringer i infrastruktur', isCorrect: false },
          { id: 'd', text: 'At fondet aldri kan brukes så lenge det er oljeproduksjon på norsk sokkel', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Handlingsregelen sier at det strukturelle, oljekorrigerte underskuddet på statsbudsjettet over tid skal tilsvare forventet realavkastning av Statens pensjonsfond utland, anslått til 3 %. Hensikten er å bruke avkastningen, men bevare fondets realverdi for fremtidige generasjoner.',
      },
    },
    {
      id: 'sf2-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hva er en hovedkritikk av EØS-avtalen fra et demokratisk perspektiv?',
        options: [
          { id: 'a', text: 'At avtalen gir Norge for stor innflytelse i EU-systemet', isCorrect: false },
          { id: 'b', text: 'At Norge må innføre EU-regler uten å ha stemmerett i beslutningsprosessen', isCorrect: true },
          { id: 'c', text: 'At avtalen hindrer Norge i å handle med land utenfor EU', isCorrect: false },
          { id: 'd', text: 'At norske borgere ikke har lov til å jobbe i EU-land', isCorrect: false },
        ],
        solution: 'Riktig svar er B. EØS-avtalen forplikter Norge til å implementere mesteparten av EUs regelverk knyttet til det indre markedet, men Norge har ikke stemmerett i EU-rådet eller EU-parlamentet der reglene vedtas. Dette kalles et demokratisk underskudd – norske borgere er bundet av regler de ikke har stemt over.',
      },
    },
    {
      id: 'sf2-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Gjør rede for hvordan Statens pensjonsfond utland (oljefondet) bidrar til å håndtere utfordringene ved å være en oljeøkonomi. Forklar også hva handlingsregelen innebærer.',
        hints: ['Nevn formålet med fondet', 'Forklar sammenhengen med hollandsk syke', 'Beskriv handlingsregelen med et talleksempel'],
        solution: 'Oljefondet håndterer tre hovedutfordringer: 1) Generasjonsrettferdighet – ved å spare oljeinntektene sikres det at også fremtidige generasjoner nyter godt av oljerikdommen. 2) Hollandsk syke – ved å investere inntektene i utlandet unngår man at kronekursen styrkes for mye og ødelegger konkurranseevnen. 3) Konjunkturutjevning – fondet gir en buffer mot oljeprissvingninger. Handlingsregelen begrenser årlig uttak til forventet realavkastning (3 % av fondets verdi). Eksempel: Med et fond på 17 000 mrd kr kan staten bruke ca. 510 mrd kr årlig. Dette holder oljepengebruken på et bærekraftig nivå og gjør fondet til en permanent inntektskilde.',
      },
    },
    {
      id: 'sf2-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med EØS-avtalen for Norge. Vurder om full EU-medlemskap eller en ren frihandelsavtale ville vært bedre alternativer.',
        hints: ['Nevn både økonomiske og politiske fordeler/ulemper', 'Sammenlign med Sveits (bilaterale avtaler) og EU-medlemskap', 'Vurder det demokratiske underskuddet'],
        solution: 'Fordeler med EØS: Full markedsadgang til EU uten å delta i felles landbrukspolitikk (viktig for Norge), beholder kontroll over fiskeri- og landbrukspolitikk, fleksibilitet i handelspolitikk overfor tredjeland. Ulemper: Demokratisk underskudd (innfører regler uten stemmerett), kontingent på milliarder årlig, begrenset innflytelse på regelverk som påvirker norsk næringsliv. EU-medlemskap ville gitt medbestemmelse, men Norge måtte innføre EUs landbrukspolitikk og potensielt euroen. En ren frihandelsavtale (som Sveits) ville gitt mer suverenitet, men usikker og begrenset markedsadgang. EØS er et kompromiss som fungerer økonomisk men har demokratiske svakheter.',
      },
    },
    {
      id: 'sf2-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-5',
        number: '7.5.5',
        type: 'multiple-choice',
        task: 'Hva menes med «hollandsk syke» i forbindelse med norsk økonomi?',
        options: [
          { id: 'a', text: 'At norske banker investerte for mye i nederlandske obligasjoner', isCorrect: false },
          { id: 'b', text: 'At høye naturressursinntekter styrker valutaen og svekker konkurranseevnen til andre eksportnæringer', isCorrect: true },
          { id: 'c', text: 'At Norge er avhengig av å importere gass fra Nederland', isCorrect: false },
          { id: 'd', text: 'At norsk industri ble utkonkurrert av nederlandske selskaper etter EØS-avtalen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Hollandsk syke er oppkalt etter Nederlandenes opplevelse med gassressurser på 1960-70-tallet. Høye inntekter fra naturressurser fører til at valutaen styrkes og lønningene presses opp, noe som gjør annen eksportindustri mindre konkurransedyktig. For Norges del bidrar oljefondet til å begrense denne effekten ved at oljeinntektene investeres i utlandet.',
      },
    },
    {
      id: 'sf2-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Analyser hvordan den grønne omstillingen vil påvirke Norges rolle i verdensøkonomien. Vurder både utfordringer og muligheter.',
        hints: ['Tenk på fallende petroleumsinntekter', 'Vurder overføring av kompetanse til nye næringer', 'Drøft oljefondets rolle som buffer i omstillingen'],
        solution: 'Utfordringer: 1) Petroleumseksporten vil falle etter hvert som verden reduserer fossilt energibruk – dette truer 50 % av eksportinntektene. 2) Over 200 000 arbeidsplasser er knyttet til olje/gass. 3) Statsinntektene fra sektoren vil avta, og fondet vil slutte å vokse. 4) Norges geopolitiske betydning som energileverandør endres. Muligheter: 1) Havvind – offshorekompetanse kan overføres. 2) CCS – norsk sokkel kan lagre CO2 for Europa. 3) Hydrogen og ammoniakk som energibærere. 4) Sjømat og havbruk vokser. 5) Oljefondet gir en unik finansiell buffer som andre oljeeksportører mangler. Norge er trolig den oljenasjonen som er best posisjonert for omstilling, men det krever aktiv politikk og langsiktig satsing.',
      },
    },
    {
      id: 'sf2-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Norge er en **liten, åpen økonomi** sterkt påvirket av petroleumssektoren og internasjonal handel
- **Statens pensjonsfond utland** er et av verdens mest vellykkede eksempler på forvaltning av naturressursinntekter
- **Handlingsregelen** begrenser bruken av oljepenger til 3 % av fondets verdi per år
- **EØS-avtalen** gir Norge tilgang til EUs indre marked, men uten stemmerett i EU-systemet
- Norges handel domineres av **petroleumseksport** til Europa
- **Grønn omstilling** er den største langsiktige utfordringen for norsk økonomi

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Liten åpen økonomi | For liten til å påvirke verdenspriser, avhengig av handel |
| Hollandsk syke | Ressursinntekter svekker annen eksportindustri |
| Statens pensjonsfond utland | Verdens største statlige investeringsfond |
| Handlingsregelen | Maks 3 % uttak av fondets verdi per år |
| EØS-avtalen | Norges tilknytning til EUs indre marked |
| Grønn omstilling | Overgang fra fossil til fornybar økonomi |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SAMFOKONOMI_2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_7_1, CHAPTER_SAMFOKONOMI_2_7_2, CHAPTER_SAMFOKONOMI_2_7_3,
  CHAPTER_SAMFOKONOMI_2_7_4, CHAPTER_SAMFOKONOMI_2_7_5,
];

/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3) - Del 2: Medieøkonomi og mediemarked
 *
 * Kapittel 2.1–2.5
 *
 * LK20-kompetansemål:
 * - analysere medienes finansieringsmodeller og drøfte konsekvenser for innholdet
 * - drøfte medieeierskapets betydning for ytringsfrihet og mediemangfold
 * - vurdere hvordan plattformøkonomien påvirker medielandskapet
 * - gjøre rede for norsk mediepolitikk og mediestøtteordninger
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Medienes finansieringsmodeller
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2_1: TextbookChapter = {
  id: 'medieinfo-2-2-1',
  courseId: 'medieinfo-2',
  chapterNumber: '2.1',
  title: 'Medienes finansieringsmodeller',
  description: 'Annonsering, abonnement, lisens og offentlig støtte som grunnlag for medieproduksjon, med vekt på hvordan finansieringsmodellen påvirker det redaksjonelle innholdet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere medienes finansieringsmodeller og drøfte konsekvenser for innholdet',
    'vurdere sammenhengen mellom økonomi og redaksjonell uavhengighet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi2-2-1-intro',
      type: 'text',
      content: `## Medienes finansieringsmodeller

Hvem betaler for journalistikken du leser? Svaret på dette spørsmålet har direkte konsekvenser for hva slags innhold som produseres, hvem som når ut med sitt budskap, og hvor uavhengig pressen kan være. Medienes finansieringsmodeller er ikke bare et økonomisk spørsmål - de er et demokratisk spørsmål.

I dette kapittelet skal du lære:
- Hva de fire viktigste finansieringsmodellene for medier er
- Hvordan annonsefinansiering skiller seg fra brukerbetaling
- Hva lisensfinansiering og offentlig støtte innebærer
- Hvordan finansieringsmodellen påvirker det redaksjonelle innholdet`,
    },
    {
      id: 'mi2-2-1-def-1',
      type: 'definition',
      title: 'Finansieringsmodell',
      content: `En **finansieringsmodell** beskriver hvordan et medieselskap skaffer inntekter for å dekke kostnadene ved å produsere og distribuere innhold. De fire viktigste modellene er **annonsefinansiering** (inntekter fra annonser), **brukerbetaling** (abonnement og løssalg), **lisensfinansiering** (kringkastingsavgift, som NRK-lisensen var) og **offentlig støtte** (statlige tilskudd). De fleste medier i dag bruker en kombinasjon av flere modeller, kalt **hybridfinansiering**.`,
    },
    {
      id: 'mi2-2-1-text-1',
      type: 'text',
      content: `### Annonsefinansiering - det tradisjonelle grunnlaget

I over hundre år var annonseinntekter den viktigste inntektskilden for aviser, radio og TV. Modellen er enkel: mediet selger publikummets oppmerksomhet til annonsørene.

**Hvordan det fungerer:**
- Mediet produserer innhold som tiltrekker et publikum
- Annonsører betaler for å nå dette publikumet med sine budskap
- Jo større publikum, desto høyere annonseinntekter

**Fordeler:**
- Innholdet kan tilbys gratis eller billig til brukerne
- Bred tilgang til informasjon uavhengig av betalingsevne
- Har finansiert uavhengig journalistikk i generasjoner

**Utfordringer:**
- Annonsørene kan legge press på redaksjonelt innhold
- Innhold som genererer klikk prioriteres over dybdejournalistikk
- Siden 2010 har digitale plattformer som Google og Meta tatt over store deler av annonsemarkedet

| Medietype | Tradisjonell annonseandel |
|-----------|--------------------------|
| Gratisaviser | 100 % |
| Kommersielt TV | 80–100 % |
| Nettaviser | 50–70 % |
| Abonnementsaviser | 30–50 % |`,
    },
    {
      id: 'mi2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Da annonseinntektene forsvant',
      problem: 'VG og Dagbladet var lenge Norges største aviser, med store annonseinntekter fra papirutgavene. Hva skjedde med inntektene deres da leserne flyttet til nett?',
      solution: `**Situasjonen:**
- På 2000-tallet flyttet leserne fra papiravis til nettavis
- Annonseinntektene på papir falt kraftig
- Digitale annonser ga langt lavere inntekter per leser enn papirannonser
- Samtidig tok Google og Facebook stadig større andeler av det digitale annonsemarkedet

**Konsekvensene:**
- VG og Dagbladet måtte kutte kraftig i antall ansatte
- Begge satset tungt på digital brukerbetaling (VG+ og Dagbladet Pluss)
- De utviklet nye inntektsmodeller med betalingsmurer og digitale abonnementer
- VG har lyktes godt med overgangen og har i dag over 300 000 digitale abonnenter

Eksempelet viser hvordan endringer i finansieringsmodellen direkte påvirker medienes evne til å produsere journalistikk.`,
    },
    {
      id: 'mi2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste utfordringen med annonsefinansiering av medier i dag?',
        options: [
          { id: 'a', text: 'At det er ulovlig å vise annonser i Norge', isCorrect: false },
          { id: 'b', text: 'At globale plattformer som Google og Meta tar en stadig større andel av annonsemarkedet', isCorrect: true },
          { id: 'c', text: 'At annonsører ikke lenger ønsker å annonsere', isCorrect: false },
          { id: 'd', text: 'At leserne foretrekker aviser med mye reklame', isCorrect: false },
        ],
        solution: 'Den største utfordringen er at globale teknologiselskaper som Google og Meta har overtatt store deler av det digitale annonsemarkedet. Disse plattformene kan tilby svært målrettet annonsering basert på brukerdata, noe tradisjonelle medier ikke kan konkurrere med. Resultatet er at norske medier mister annonseinntekter som tidligere finansierte journalistikk.',
      },
    },
    {
      id: 'mi2-2-1-def-2',
      type: 'definition',
      title: 'Brukerbetaling og betalingsmurer',
      content: `**Brukerbetaling** innebærer at publikum betaler direkte for medieinnhold, enten gjennom **abonnement** (fast månedlig/årlig pris), **løssalg** (betaling per utgave) eller **mikrobetalinger** (betaling per artikkel). I den digitale tidsalderen bruker mange medier **betalingsmurer** (*paywalls*), som begrenser tilgangen til innhold for ikke-betalende brukere. Det finnes ulike typer betalingsmurer: **hard** (alt innhold er bak muren), **myk/freemium** (noe innhold er gratis, premiuminnhold krever betaling) og **metered** (et visst antall artikler er gratis per måned).`,
    },
    {
      id: 'mi2-2-1-text-2',
      type: 'text',
      content: `### Brukerbetaling, lisens og offentlig støtte

**Brukerbetaling - den nye hovedinntekten:**
Etter at annonseinntektene falt, har brukerbetaling blitt stadig viktigere for norske medier. Aftenposten, VG, Bergens Tidende og de fleste norske aviser tilbyr nå digitale abonnementer. Den norske betalingsviljen for nettjournalistikk er høy i internasjonal sammenheng.

**Lisensfinansiering - NRK-modellen:**
NRK ble frem til 2020 finansiert gjennom kringkastingsavgiften (NRK-lisensen), som var en fast årlig avgift alle med TV-mottaker måtte betale. Fra 2020 ble lisensen erstattet av finansiering over statsbudsjettet, basert på en fast andel av inntektsskatt. Fordelen med lisens/skattefinansiering er at NRK kan produsere innhold uten å ta kommersielle hensyn.

**Offentlig støtte - pressestøtten:**
Staten gir direkte og indirekte støtte til medier gjennom:
- **Produksjonstilskudd:** Direkte støtte til aviser, særlig nr. 2-aviser og lokalaviser
- **Innovasjonstilskudd:** Støtte til utvikling av nye medietjenester
- **Momsfritak:** Medier er fritatt fra moms, noe som utgjør en betydelig indirekte støtte
- **NRK-finansiering:** Statlig finansiering av allmennkringkasteren

Formålet med mediestøtten er å sikre **mediemangfold** - at det finnes et bredt utvalg av medier som dekker ulike perspektiver og geografiske områder.`,
    },
    {
      id: 'mi2-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Finansieringsmodell og innhold',
      problem: 'Hvordan kan finansieringsmodellen påvirke hva slags innhold et medium produserer? Sammenlign NRK (skattefinansiert) med en annonsefinansiert nettavis.',
      solution: `**NRK (skattefinansiert):**
- Har ikke behov for å maksimere klikk eller seertall for å tjene penger
- Kan produsere innhold for smale målgrupper (samisk, nynorsk, kultur)
- Har et samfunnsoppdrag definert i NRK-plakaten
- Kan satse på dyr undersøkende journalistikk uten direkte økonomisk gevinst

**Annonsefinansiert nettavis:**
- Er avhengig av mange sidevisninger for å generere annonseinntekter
- Kan fristes til å prioritere «klikkmagnet»-saker fremfor dybdejournalistikk
- Må produsere innhold som er attraktivt for annonsørers målgrupper
- Har press for å publisere raskt og hyppig

**Konklusjon:** Finansieringsmodellen legger rammer for det redaksjonelle innholdet. Det betyr ikke at annonsefinansierte medier ikke kan drive god journalistikk, men de økonomiske incentivene er forskjellige.`,
    },
    {
      id: 'mi2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hard betalingsmur, myk/freemium-mur og metered betalingsmur. Gi et eksempel på en norsk avis som bruker en av disse modellene.',
        hints: ['Tenk på hvor mye innhold som er gratis tilgjengelig i de ulike modellene'],
        solution: 'Hard betalingsmur betyr at alt innhold er utilgjengelig uten abonnement. Myk/freemium-mur betyr at noe innhold er gratis mens premiuminnhold krever betaling (f.eks. VG, der nyheter er gratis men VG+-saker krever abonnement). Metered betalingsmur gir et visst antall gratis artikler per måned, deretter kreves betaling (f.eks. Aftenposten, som lar deg lese noen artikler gratis før du må abonnere).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        task: 'Hvorfor ble NRK-lisensen erstattet av finansiering over statsbudsjettet i 2020?',
        options: [
          { id: 'a', text: 'Fordi NRK ikke lenger trengte penger', isCorrect: false },
          { id: 'b', text: 'Fordi folk ikke lenger hadde TV-mottaker og lisensordningen ble ansett som utdatert', isCorrect: true },
          { id: 'c', text: 'Fordi EU krevde at Norge avskaffet lisensen', isCorrect: false },
          { id: 'd', text: 'Fordi NRK ble privatisert', isCorrect: false },
        ],
        solution: 'NRK-lisensen var knyttet til det å ha en TV-mottaker, men i en tid der stadig flere bruker NRK på nett, mobil og nettbrett ble dette systemet ansett som utdatert og urettferdig. Mange brukte NRK uten å ha tradisjonell TV. Løsningen ble å finansiere NRK over statsbudsjettet, basert på en andel av inntektsskatten, slik at alle bidrar etter evne.',
      },
    },
    {
      id: 'mi2-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Annonsefinansiering** har vært medienes tradisjonelle inntektskilde, men er under sterkt press fra globale plattformer
- **Brukerbetaling** med betalingsmurer er blitt stadig viktigere for norske medier
- **Lisensfinansiering** og nå skattefinansiering sikrer NRKs uavhengighet fra kommersielle interesser
- **Offentlig støtte** gjennom pressestøtte og momsfritak bidrar til mediemangfold
- Finansieringsmodellen har direkte konsekvenser for hva slags innhold som produseres

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Annonsefinansiering | Inntekter fra salg av publikummets oppmerksomhet til annonsører |
| Brukerbetaling | Publikum betaler direkte for innhold gjennom abonnement eller løssalg |
| Betalingsmur | Digital begrensning som krever betaling for tilgang til innhold |
| Lisensfinansiering | Fast avgift for å eie TV-mottaker (avviklet i Norge 2020) |
| Pressestøtte | Statlige tilskudd for å sikre mediemangfold |
| Hybridfinansiering | Kombinasjon av flere inntektskilder |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved brukerbetaling (betalingsmurer) for demokratiet. Kan betalingsmurer føre til et informasjonsgap mellom de som har råd til abonnement og de som ikke har det?',
        hints: ['Tenk på hvem som får tilgang til kvalitetsjournalistikk og hvem som ikke gjør det', 'Vurder om det finnes alternativer som ivaretar både økonomisk bærekraft og bred tilgang'],
        solution: 'Fordeler med betalingsmurer: Sikrer inntekter til journalistikk, gjør mediene mindre avhengige av annonsører, og kan øke kvaliteten fordi innholdet må være godt nok til at folk vil betale. Ulemper: Kan skape et «informasjonsklasseskille» der bare velstående borgere har tilgang til grundig journalistikk, mens andre er henvist til gratis kilder av varierende kvalitet. Dette er problematisk for demokratiet, som forutsetter at borgerne er informerte. Mulige løsninger inkluderer offentlig støtte, bibliotekers tilgang til medier, og gratismodeller for viktige nyhetssaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        task: 'Velg en norsk mediebedrift (f.eks. VG, NRK, Bergens Tidende eller en lokalavis) og gjør rede for hvilke finansieringsmodeller den bruker. Vurder hvordan finansieringen kan påvirke det redaksjonelle innholdet.',
        hints: ['Undersøk mediets nettside for informasjon om abonnement og annonser', 'Tenk på om mediet mottar offentlig støtte'],
        solution: 'Eksempel med VG: VG bruker hybridfinansiering med annonseinntekter (på vg.no), brukerbetaling (VG+ abonnement) og noe indirekte støtte gjennom momsfritak. VGs gratisinnhold (nyheter) tiltrekker et stort publikum for annonseinntekter, mens VG+ tilbyr dybdeartikler, features og eksklusive saker bak betalingsmur. Finansieringsmodellen kan påvirke innholdet ved at gratisinnholdet styres mot høyt klikktall, mens betalingsinnholdet kan satse mer på kvalitet og eksklusivitet. Momsfritaket er en indirekte støtte som bidrar til at prisen på abonnement holdes lavere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        task: 'NRK finansieres i dag over statsbudsjettet. Noen mener dette truer NRKs uavhengighet, fordi politikerne bestemmer hvor mye penger NRK får. Andre mener det er den beste løsningen. Drøft begge synspunktene.',
        hints: ['Tenk på hva som skjer hvis NRK må kutte i budsjettet etter politiske vedtak', 'Sammenlign med den gamle lisensordningen og med reklame som alternativ'],
        solution: 'Argumenter for statsbudsjettfinansiering: Alle bidrar etter evne (progressiv skatt), ingen lisensbyråkrati, stabil og forutsigbar inntekt. Argumenter mot: Politikerne kan bruke budsjettet som pressmiddel, NRK kan bli forsiktig med kritisk dekning av regjeringen, årlige budsjettforhandlinger skaper usikkerhet. Sammenlignet med lisens: Lisensen var uavhengig av politiske vedtak, men ble oppfattet som utdatert og urettferdig. Sammenlignet med reklame: Reklamefinansiering ville gjøre NRK kommersielt og ødelegge allmennkringkasteroppdraget. Statsbudsjettfinansiering er et kompromiss, men krever at det finnes mekanismer (som fireårige avtaler) som beskytter NRK mot kortsiktig politisk press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Medieeierskap og maktkonsentrasjon
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2_2: TextbookChapter = {
  id: 'medieinfo-2-2-2',
  courseId: 'medieinfo-2',
  chapterNumber: '2.2',
  title: 'Medieeierskap og maktkonsentrasjon',
  description: 'Mediekonserner, krysseierskap og mangfold - hvordan eierskapsstrukturer påvirker medienes innhold og demokratiets vilkår.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte medieeierskapets betydning for ytringsfrihet og mediemangfold',
    'analysere konsekvenser av maktkonsentrasjon i mediebransjen',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi2-2-2-intro',
      type: 'text',
      content: `## Medieeierskap og maktkonsentrasjon

Hvem eier mediene du bruker? I Norge dominerer noen få store konserner mediemarkedet: Schibsted, Amedia og Polaris Media kontrollerer det store flertallet av norske aviser. Internasjonalt ser vi den samme trenden - store mediekonglomerater samler stadig mer makt. Spørsmålet er: Hva betyr det for mangfoldet og demokratiet at eierskapet konsentreres på færre hender?

I dette kapittelet skal du lære:
- Hva mediekonsentrasjon og krysseierskap innebærer
- Hvem de store norske medieeierne er
- Hvordan eierskapet kan påvirke redaksjonelt innhold
- Hva medieeierskapsloven regulerer`,
    },
    {
      id: 'mi2-2-2-def-1',
      type: 'definition',
      title: 'Mediekonsentrasjon og mediekonsern',
      content: `**Mediekonsentrasjon** betyr at eierskapet til medier samles på færre hender, enten ved at et selskap kjøper opp konkurrenter (**horisontal integrasjon**) eller ved at et selskap kontrollerer flere ledd i verdikjeden - for eksempel både innholdsproduksjon, distribusjon og visning (**vertikal integrasjon**). Et **mediekonsern** er et selskap som eier flere mediebedrifter, ofte på tvers av medietyper (aviser, TV, nett). **Krysseierskap** oppstår når ett konsern eier medier i ulike segmenter, for eksempel både aviser og TV-kanaler.`,
    },
    {
      id: 'mi2-2-2-text-1',
      type: 'text',
      content: `### Det norske eierskapslandskapet

Norsk mediesektor er preget av et fåtall store aktører:

**Schibsted:**
- Eier VG, Aftenposten, Bergens Tidende og en rekke andre aviser
- Eier markedsplassene Finn.no, Tise og lignende
- Et av Nordens største mediekonserner, også aktive i Sverige

**Amedia:**
- Norges største eier av lokalaviser, med over 80 lokalaviser
- Har gjennomgått en kraftig digital omstilling
- Spiller en nøkkelrolle for lokal nyhetsdekning i hele Norge

**Polaris Media:**
- Eier Adresseavisen og en rekke aviser i Midt- og Nord-Norge
- Også engasjert i radio og TV i regionen

**NRK:**
- Statlig eid allmennkringkaster
- Norges desidert største medieaktør målt i bruk
- Finansiert over statsbudsjettet, ikke av private eiere

| Konsern | Type medier | Geografisk fokus |
|---------|-------------|-----------------|
| Schibsted | Aviser, nett, markedsplasser | Nasjonalt og nordisk |
| Amedia | Lokalaviser | Hele Norge |
| Polaris Media | Aviser, radio, TV | Midt- og Nord-Norge |
| NRK | TV, radio, nett | Hele Norge |`,
    },
    {
      id: 'mi2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Konsekvenser av mediekonsentrasjon',
      problem: 'I 2019 eide Schibsted både VG og Aftenposten - Norges to største aviser. Hva kan være problematisk med at ett konsern eier flere store medier?',
      solution: `**Potensielle problemer:**
- **Redusert mangfold:** Dersom konsernledelsen påvirker redaksjonelle prioriteringer, kan to aviser med samme eier gi mer ensartet dekning enn to uavhengige aviser
- **Maktkonsentrasjon:** Én eier får stor innflytelse over den offentlige debatten
- **Koordinert lobbyvirksomhet:** Konsernet kan bruke sine medier til å fremme egne interesser
- **Kryssubsidiering:** Lønnsomme deler av konsernet kan subsidiere andre, noe som gjør det vanskelig for nye aktører å konkurrere

**Motargumenter:**
- **Redaktørplakaten** sikrer at den enkelte redaktør har uavhengighet fra eierne
- Stordriftsfordeler kan gjøre mediebedriftene mer bærekraftige økonomisk
- I praksis opererer VG og Aftenposten med svært ulike profiler og redaksjonelle linjer
- Uten store konserner ville mange medier ikke overlevd den digitale omstillingen

Eksempelet viser at mediekonsentrasjon er et tveegget sverd: det kan true mangfoldet, men kan også bidra til økonomisk stabilitet.`,
    },
    {
      id: 'mi2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva menes med «horisontal integrasjon» i mediebransjen?',
        options: [
          { id: 'a', text: 'At et medieselskap kjøper opp konkurrenter i samme segment, for eksempel flere aviser', isCorrect: true },
          { id: 'b', text: 'At et medieselskap ansetter flere journalister', isCorrect: false },
          { id: 'c', text: 'At et medieselskap kontrollerer hele verdikjeden fra produksjon til distribusjon', isCorrect: false },
          { id: 'd', text: 'At et medieselskap utvider til utenlandske markeder', isCorrect: false },
        ],
        solution: 'Horisontal integrasjon betyr at et selskap kjøper opp konkurrenter i samme segment eller bransje. I mediebransjen kan det for eksempel bety at et aviskonsern kjøper opp flere aviser. Vertikal integrasjon derimot betyr at et selskap kontrollerer flere ledd i verdikjeden (svaralternativ c).',
      },
    },
    {
      id: 'mi2-2-2-def-2',
      type: 'definition',
      title: 'Medieeierskapsloven og Redaktørplakaten',
      content: `**Medieeierskapsloven** (opprinnelig fra 1997, nå en del av mediestøtteloven) gir Medietilsynet myndighet til å gripe inn mot oppkjøp som kan true mediemangfoldet. Formålet er å forhindre at enkeltaktører får for stor kontroll over mediene. **Redaktørplakaten** (1953, revidert flere ganger) er en avtale mellom medienes eiere og redaktører som slår fast at redaktøren har full frihet til å forme mediets innhold og meninger. Eieren kan ikke instruere redaktøren i redaksjonelle spørsmål. Plakaten ble lovfestet i **mediefridomslova** i 2008.`,
    },
    {
      id: 'mi2-2-2-text-2',
      type: 'text',
      content: `### Internasjonale perspektiver og eierskap som makt

Internasjonalt ser vi enda sterkere mediekonsentrasjon enn i Norge:

**Eksempler fra utlandet:**
- **Rupert Murdoch** (News Corp): Eier aviser, TV-kanaler og nettmedier i USA, Storbritannia og Australia. Fox News og The Sun er blant hans mest kjente medier.
- **Jeff Bezos** (Amazon): Kjøpte The Washington Post i 2013 for 250 millioner dollar.
- **Elon Musk**: Kjøpte Twitter (nå X) i 2022 og endret plattformens retningslinjer dramatisk.
- **Berlusconi** i Italia: Kontrollerte store deler av italiensk TV samtidig som han var statsminister - en ekstrem form for maktkonsentrasjon.

**Hvorfor eierskap betyr noe:**
Selv om Redaktørplakaten beskytter norske redaktører, kan eiere påvirke mediene indirekte:
- Gjennom **ansettelse og avskjedigelse** av redaktøren
- Gjennom **budsjettbeslutninger** som bestemmer ressursene til journalistikk
- Gjennom **strategiske valg** om satsingsområder og nedprioriteringer
- Gjennom **bedriftskultur** og forventninger som former det redaksjonelle arbeidet over tid

Medieeierskap er derfor et sentralt demokratisk spørsmål: de som eier mediene, har makt over informasjonsflyten i samfunnet.`,
    },
    {
      id: 'mi2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        task: 'Forklar hva Redaktørplakaten er og hvorfor den er viktig for norsk pressefrihet. Diskuter om plakaten gir tilstrekkelig beskyttelse mot eiernes innflytelse.',
        hints: ['Tenk på forskjellen mellom formell og reell uavhengighet', 'Vurder hvordan eiere kan påvirke uten å gi direkte ordre til redaktøren'],
        solution: 'Redaktørplakaten er en avtale som slår fast at redaktøren har full frihet til å bestemme mediets innhold, uavhengig av eiernes ønsker. Den er lovfestet gjennom mediefridomslova (2008). Plakaten er viktig fordi den gir formell beskyttelse mot eierstyring av redaksjonelt innhold. Men den gir ikke nødvendigvis full beskyttelse: eiere kan påvirke indirekte gjennom ansettelse av redaktører som deler deres syn, gjennom budsjettkutt som rammer visse typer journalistikk, og gjennom strategiske valg. Plakaten er derfor et viktig, men ikke tilstrekkelig vern for pressefrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        task: 'Hvilket norsk mediekonsern eier flest lokalaviser i Norge?',
        options: [
          { id: 'a', text: 'Schibsted', isCorrect: false },
          { id: 'b', text: 'NRK', isCorrect: false },
          { id: 'c', text: 'Amedia', isCorrect: true },
          { id: 'd', text: 'Polaris Media', isCorrect: false },
        ],
        solution: 'Amedia er Norges klart største eier av lokalaviser, med over 80 lokalaviser spredt over hele landet. Schibsted fokuserer mer på store nasjonale og regionale aviser, Polaris Media er størst i Midt- og Nord-Norge, og NRK er statlig eid allmennkringkaster.',
      },
    },
    {
      id: 'mi2-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Mediekonsentrasjon** innebærer at eierskapet samles på færre hender, gjennom horisontal eller vertikal integrasjon
- Norsk mediesektor domineres av **Schibsted**, **Amedia**, **Polaris Media** og statlige **NRK**
- **Redaktørplakaten** sikrer formelt redaktørens uavhengighet fra eiere, men eiere kan påvirke indirekte
- **Medieeierskapsloven** gir Medietilsynet myndighet til å gripe inn mot oppkjøp som truer mangfoldet
- Internasjonalt finnes det ekstreme eksempler på mediekonsentrasjon som truer demokratiet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mediekonsentrasjon | Samling av eierskap på færre hender |
| Horisontal integrasjon | Oppkjøp av konkurrenter i samme segment |
| Vertikal integrasjon | Kontroll over flere ledd i verdikjeden |
| Krysseierskap | Eierskap på tvers av medietyper |
| Redaktørplakaten | Avtale som sikrer redaktørens uavhengighet |
| Medieeierskapsloven | Lov som regulerer medieoppkjøp for å sikre mangfold |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Sammenlign medieeierskapsstrukturen i Norge med situasjonen i et annet land (f.eks. USA, Italia eller Storbritannia). Hvilke likheter og forskjeller finner du, og hva kan forklare forskjellene?',
        hints: ['Tenk på statlig regulering, Redaktørplakaten og markedsstørrelse', 'Undersøk mediekonsentrasjonen i det landet du velger'],
        solution: 'Norge: Sterk regulering gjennom medieeierskapsloven, Redaktørplakaten gir redaktørene formell uavhengighet, NRK som sterk statlig allmennkringkaster, og pressestøtte som sikrer mangfold. USA: Minimal regulering, store konglomerater som Disney, Comcast og News Corp dominerer, ingen allmennkringkaster av NRKs størrelse (PBS er liten), og sterk kommersialisering. Forskjellene skyldes ulike politiske tradisjoner, markedsstørrelse og synet på statens rolle i å regulere mediene. Norges sosialdemokratiske tradisjon har gitt sterkere offentlig engasjement i mediepolitikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        task: 'Drøft om mediekonsentrasjon er en nødvendig utvikling for medienes overlevelse i den digitale tidsalderen, eller om den utgjør en trussel mot mediemangfold og demokrati.',
        hints: ['Vurder økonomiske stordriftsfordeler opp mot risikoen for ensretting', 'Tenk på hva alternativene til konsentrasjon ville vært'],
        solution: 'Argumenter for at konsentrasjon er nødvendig: Den digitale omstillingen er kostbar, og stordrift gir besparelser (felles IT, trykkerier, distribusjon). Mange små medier ville gått konkurs uten konsernenes støtte. Argumenter for at det er en trussel: Konsentrasjon gir færre uavhengige stemmer i offentligheten, reduserer mangfoldet av perspektiver og kan svekke den lokale forankringen. Et balansert svar: Konsentrasjon kan være nødvendig for økonomisk bærekraft, men må reguleres for å sikre mangfold. Kombinasjonen av regulering (medieeierskapsloven), offentlig støtte (pressestøtte) og Redaktørplakaten er den norske modellen for å balansere disse hensynene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        task: 'Elon Musks kjøp av Twitter (nå X) i 2022 skapte stor debatt. Diskuter hvorfor det kan være problematisk at enkeltpersoner med svært stor formue kjøper opp viktige medieplattformer.',
        hints: ['Tenk på maktkonsentrasjon, demokrati og ytringsfrihet', 'Vurder om plattformer bør reguleres annerledes enn tradisjonelle medier'],
        solution: 'Problematisk fordi: En enkeltperson får enorm makt over en plattform som er viktig for offentlig debatt. Musk endret Twitters retningslinjer for innholdsmoderering, algoritmer og verifiseringssystem basert på egne preferanser. Han brukte plattformen til å fremme egne politiske synspunkter. Det er ingen Redaktørplakat for plattformer. Motargumenter: Twitter er en privat bedrift, og eieren har rett til å styre den. Andre plattformer finnes som alternativer. Men debatten viser behovet for regulering av store plattformer som har blitt viktig infrastruktur for den offentlige samtalen, muligens gjennom lovgivning som EUs Digital Services Act.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Plattformøkonomi
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2_3: TextbookChapter = {
  id: 'medieinfo-2-2-3',
  courseId: 'medieinfo-2',
  chapterNumber: '2.3',
  title: 'Plattformøkonomi',
  description: 'Techgigantenes rolle i medielandskapet, algoritmestyrt innhold og oppmerksomhetsøkonomien - hvordan digitale plattformer har endret spillereglene for mediene.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere hvordan plattformøkonomien påvirker medielandskapet',
    'analysere algoritmenes rolle i innholdsdistribusjon og meningsdannelse',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi2-2-3-intro',
      type: 'text',
      content: `## Plattformøkonomi

Google, Meta (Facebook/Instagram), Apple, Amazon og Microsoft - de såkalte «Big Tech»-selskapene - har på to tiår blitt verdens mektigste medieaktører, uten selv å produsere journalistikk. De kontrollerer infrastrukturen som det meste av mediekonsum og offentlig debatt foregår gjennom. Plattformøkonomien har fundamentalt endret maktforholdene i mediebransjen.

I dette kapittelet skal du lære:
- Hva plattformøkonomi er og hvorfor den er viktig for mediene
- Hvordan algoritmer styrer hva vi ser og leser
- Hva oppmerksomhetsøkonomien innebærer
- Hvilke konsekvenser plattformøkonomien har for journalistikk og demokrati`,
    },
    {
      id: 'mi2-2-3-def-1',
      type: 'definition',
      title: 'Plattformøkonomi',
      content: `**Plattformøkonomi** beskriver en økonomisk modell der digitale plattformer fungerer som mellommenn som kobler sammen ulike brukergrupper. I mediesammenheng betyr det at plattformer som Google, Facebook og YouTube kobler medieinnhold med brukere og annonsører, uten selv å produsere innholdet. Plattformene tjener penger på **oppmerksomhetsøkonomi** - de samler brukerdata, holder brukerne engasjert lengst mulig, og selger målrettet annonsering. De kjennetegnes av sterke **nettverkseffekter**: jo flere brukere, desto mer verdifull blir plattformen.`,
    },
    {
      id: 'mi2-2-3-text-1',
      type: 'text',
      content: `### Techgigantenes makt over mediene

Plattformene har fått en enorm maktposisjon i medielandskapet:

**Distribusjonsmakt:**
- Over 50 % av trafikken til norske nettaviser kommer via Google og sosiale medier
- Plattformene bestemmer gjennom sine algoritmer hva som blir synlig og hva som forsvinner
- Mediene er avhengige av plattformene for å nå sine lesere

**Annonsemakt:**
- Google og Meta tar over 80 % av det globale digitale annonsemarkedet
- Plattformene kan tilby langt mer målrettet annonsering enn tradisjonelle medier
- Annonsekronene flyttes fra medier som produserer journalistikk til plattformer som distribuerer den

**Datamakt:**
- Plattformene samler enorme mengder data om brukernes atferd, preferanser og relasjoner
- Denne dataen brukes til å gjøre annonseringen mer effektiv og tjenestene mer «engasjerende»
- Mediene har begrenset tilgang til data om egne lesere på plattformene

| Selskap | Tjenester | Annonseinntekter (2023) |
|---------|-----------|------------------------|
| Alphabet (Google) | Google Search, YouTube, Gmail | Ca. 230 mrd. USD |
| Meta | Facebook, Instagram, WhatsApp | Ca. 130 mrd. USD |
| Amazon | Netthandel, Prime Video, streaming | Ca. 47 mrd. USD |
| TikTok (ByteDance) | Kortvideoer, livestreaming | Ca. 20 mrd. USD |`,
    },
    {
      id: 'mi2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Facebooks nyhetsblokade i Australia',
      problem: 'I 2021 blokkerte Facebook (Meta) alle nyhetslenker i Australia som svar på en ny lov som påla plattformen å betale medier for nyhetsinnhold. Hva viser denne hendelsen om maktforholdet mellom plattformer og medier?',
      solution: `**Hendelsen:**
- Australia vedtok «News Media Bargaining Code» som krevde at Google og Facebook betalte medier for å dele nyhetsinnhold
- Facebook svarte med å blokkere alle nyheter for australske brukere
- Google truet med å trekke søkemotoren fra Australia

**Hva det viser:**
- Plattformene har enorm makt: De kan «slå av» tilgangen til nyheter for et helt land
- Mediene er avhengige av plattformene for distribusjon, men plattformene kan klare seg uten mediene
- Asymmetrisk maktforhold: Facebook mente nyheter var en liten del av innholdet, mens mediene var avhengige av Facebook for trafikk
- Politisk makt: Plattformene brukte sin posisjon til å presse en nasjonalstat

**Resultatet:**
Facebook gjenopprettet nyheter etter forhandlinger og inngikk avtaler med australske mediehus. Hendelsen inspirerte lignende lovgivning i Canada og EU.`,
    },
    {
      id: 'mi2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til at digitale plattformer har tatt over store deler av annonsemarkedet fra tradisjonelle medier?',
        options: [
          { id: 'a', text: 'Plattformene produserer bedre journalistikk', isCorrect: false },
          { id: 'b', text: 'Plattformene kan tilby svært målrettet annonsering basert på store mengder brukerdata', isCorrect: true },
          { id: 'c', text: 'Annonsører foretrekker å annonsere på sosiale medier fordi det er billigere', isCorrect: false },
          { id: 'd', text: 'Staten har bestemt at annonser skal flyttes til plattformer', isCorrect: false },
        ],
        solution: 'Plattformene har overtatt annonsemarkedet fordi de samler enorme mengder brukerdata som gjør det mulig å vise svært målrettet reklame til akkurat de personene som mest sannsynlig er interessert. Tradisjonelle medier kan ikke konkurrere med denne presisjonen i målretting, og annonsørene får mer effekt for pengene sine.',
      },
    },
    {
      id: 'mi2-2-3-def-2',
      type: 'definition',
      title: 'Algoritmer og filterbobler',
      content: `En **algoritme** er et sett med regler som en datamaskin følger for å løse et problem. I medieplattformenes sammenheng er det algoritmer som bestemmer hva som vises i nyhetsstrømmen din, i søkeresultater og i anbefalinger. Algoritmene er designet for å maksimere **engasjement** - klikk, likes, delinger og tid brukt på plattformen. **Filterboble** (Eli Pariser, 2011) er begrepet for at algoritmer kan skape en «informasjonsboble» der brukeren bare eksponeres for innhold som bekrefter egne synspunkter og interesser, fordi algoritmene viser det brukeren mest sannsynlig vil engasjere seg med.`,
    },
    {
      id: 'mi2-2-3-text-2',
      type: 'text',
      content: `### Oppmerksomhetsøkonomi og konsekvenser for demokratiet

**Oppmerksomhetsøkonomien:**
Plattformene tjener penger på å holde brukerne engasjert lengst mulig. Din oppmerksomhet er «varen» som selges til annonsørene. Dette skaper insentiver for å:
- Fremheve sensasjonelt og emosjonelt innhold som genererer sterke reaksjoner
- Bruke «doomscrolling»-mekanismer som holder deg på plattformen
- Anbefale stadig mer ekstremt innhold for å holde oppmerksomheten

**Konsekvenser for demokratiet:**
- **Fragmentering:** Ulike grupper lever i ulike informasjonsbobler og deler ikke et felles faktagrunnlag
- **Polarisering:** Algoritmene belønner ekstremt innhold, noe som kan forsterke konflikter
- **Desinformasjon:** Falske nyheter spres raskere enn sanne nyheter fordi de vekker sterkere følelser
- **Svekket journalistikk:** Når oppmerksomhetsøkonomien favoriserer klikkmagneter, kan det gå på bekostning av grundig journalistikk

**Motkrefter:**
- EUs **Digital Services Act** (2022) pålegger plattformene ansvar for innholdet de distribuerer
- Norsk **medieansvarslov** (2020) regulerer redaktøransvaret, også for digitale medier
- Debatten om **algoritmisk transparens** - bør plattformene forklare hvordan algoritmene fungerer?
- Initiativ for å betale medier for innhold (som i Australia og Canada)`,
    },
    {
      id: 'mi2-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Oppmerksomhetsøkonomien i praksis',
      problem: 'TikToks «For You»-side bruker en avansert algoritme som lærer hva du liker å se. Analyser hvordan dette er et eksempel på oppmerksomhetsøkonomien.',
      solution: `**Slik fungerer det:**
- TikTok sporer alt du gjør: hvilke videoer du ser ferdig, hva du hopper over, hva du liker, kommenterer og deler
- Algoritmen bygger en detaljert profil av dine preferanser
- «For You»-siden viser innhold som er skreddersydd for å holde akkurat deg engasjert lengst mulig
- Jo lenger du er på appen, desto mer reklame ser du, og desto mer penger tjener TikTok

**Oppmerksomhetsøkonomien i praksis:**
- Din tid og oppmerksomhet er produktet som selges til annonsører
- Algoritmen er designet for å maksimere engasjement, ikke for å gi deg nyttig informasjon
- Innhold som vekker sterke følelser (sinne, humor, sjokk) får mer synlighet
- Resultatet kan være at brukere tilbringer timer uten å være klar over tiden som går

**Konsekvenser:**
- Plattformen vet mer om brukerens preferanser enn brukeren selv
- Journalistisk innhold konkurrerer med underholdning om oppmerksomhet
- Unge menneskers verdensbilde kan formes av algoritmestyrte anbefalinger`,
    },
    {
      id: 'mi2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        task: 'Forklar begrepet «filterboble» og diskuter om filterbobler utgjør en reell trussel mot demokratiet, eller om faren er overdrevet.',
        hints: ['Tenk på hvordan du selv opplever nyhetsstrømmen din i sosiale medier', 'Vurder om folk aktivt søker opp alternative synspunkter utenfor plattformene'],
        solution: 'Filterboble er begrepet for at algoritmene i sosiale medier skaper en informasjonsboble der brukeren bare eksponeres for innhold som bekrefter egne synspunkter. Argumenter for at det er en trussel: Brukere kan få et skjevt bilde av virkeligheten, det svekker felles faktagrunnlag og kan forsterke polarisering. Argumenter for at det er overdrevet: Forskning viser at de fleste mennesker bruker mange ulike informasjonskilder, algoritmene er blitt bedre på å vise mangfoldig innhold, og folk i filterboble-debatten undervurderer folks evne til kritisk tenkning. En balansert vurdering er at filterbobler er en reell risiko, men at omfanget og effekten varierer sterkt mellom ulike brukergrupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        task: 'Hva er hovedprinsippet i oppmerksomhetsøkonomien?',
        options: [
          { id: 'a', text: 'At plattformene betaler brukerne for deres tid', isCorrect: false },
          { id: 'b', text: 'At brukernes oppmerksomhet og tid er varen som selges til annonsørene', isCorrect: true },
          { id: 'c', text: 'At medier skal fokusere på å få oppmerksomhet i tradisjonelle medier', isCorrect: false },
          { id: 'd', text: 'At staten regulerer hvor mye tid folk kan bruke på sosiale medier', isCorrect: false },
        ],
        solution: 'Oppmerksomhetsøkonomien handler om at brukernes tid og oppmerksomhet er den verdifulle ressursen som plattformene selger til annonsører. Plattformene designer tjenestene sine for å maksimere engasjement - jo lenger brukerne er på plattformen, desto mer reklame ser de, og desto mer tjener plattformen.',
      },
    },
    {
      id: 'mi2-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Plattformøkonomien** har endret maktforholdene i mediebransjen fundamentalt
- Techgigantene har **distribusjonsmakt**, **annonsemakt** og **datamakt** over mediene
- **Algoritmer** styrer hva vi ser og leser, basert på hva som maksimerer engasjement
- **Filterbobler** kan skape skjeve informasjonsbilder og true felles faktagrunnlag
- **Oppmerksomhetsøkonomien** gjør brukernes tid og oppmerksomhet til en vare
- Regulering som EUs Digital Services Act forsøker å møte utfordringene

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Plattformøkonomi | Digitale mellommenn som kobler innhold, brukere og annonsører |
| Nettverkseffekter | Plattformen blir mer verdifull jo flere brukere den har |
| Algoritme | Regler som bestemmer hva som vises i nyhetsstrømmen |
| Filterboble | Informasjonsboble skapt av personaliserte algoritmer |
| Oppmerksomhetsøkonomi | Modell der brukernes oppmerksomhet er varen |
| Digital Services Act | EUs regulering av plattformers ansvar |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Analyser maktforholdet mellom norske medier og de store teknologiplattformene. Hvem er mest avhengig av hvem, og hvilke konsekvenser har dette?',
        hints: ['Tenk på trafikkdata, annonseinntekter og distribusjon', 'Vurder hva som ville skjedd om Google eller Facebook stengte tilgang til norske nyheter'],
        solution: 'Norske medier er mer avhengige av plattformene enn omvendt. Over halvparten av trafikken til nettavisene kommer via Google og sosiale medier, og plattformene har tatt store deler av annonsemarkedet. Hvis Google eller Facebook stengte tilgangen til norske nyheter (som i Australia 2021), ville mediene tape betydelig trafikk. Plattformene derimot ville knapt merke bortfallet av norsk nyhetsinnhold. Dette asymmetriske maktforholdet gjør at plattformene kan sette premissene, og mediene må tilpasse seg plattformenes algoritmer og formater for å nå ut med innholdet sitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        task: 'Bør plattformene betale mediene for nyhetsinnhold som deles på plattformene? Drøft spørsmålet med utgangspunkt i eksemplene fra Australia og EU.',
        hints: ['Tenk på hvem som skaper verdien - mediene eller plattformene?', 'Vurder konsekvensene av de ulike modellene'],
        solution: 'Argumenter for betaling: Mediene produserer innholdet som gjør plattformene verdifulle, og det er urettferdig at plattformene tjener på innhold de ikke har betalt for. Uten journalistikk hadde plattformene hatt mindre relevant innhold. Argumenter mot: Plattformene gir mediene gratis trafikk og synlighet, mediene legger frivillig innholdet sitt på plattformene, og betalingsordninger kan skape uønskede insentiver. Erfaringer: Australia fikk til avtaler mellom plattformer og medier, men Meta trakk seg senere ut av nyhetsavtaler i Canada. EU arbeider med lignende regulering. En mulig løsning er kollektive forhandlinger der mediebransjen forhandler samlet med plattformene, som i den australske modellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'Gjennomfør et lite eksperiment: Sammenlign nyhetsstrømmen din på en sosial medieplattform med forsiden til en nettavis. Hva er de viktigste forskjellene i innholdet, og hva kan forklare dem?',
        hints: ['Tenk på hvem som har valgt ut innholdet - en algoritme eller en redaktør', 'Vurder hvilke kriterier som bestemmer hva som kommer øverst'],
        solution: 'Typiske forskjeller: Sosiale medier viser personalisert innhold basert på algoritmer som prioriterer engasjement, mens nettaviser kurateres av redaktører som prioriterer nyhetsverdi. Sosiale medier blander nyheter med underholdning, personlig innhold og reklame, mens nettavisen sorterer innholdet etter journalistiske kriterier. Forklaring: Algoritmene optimerer for klikk og engasjement, mens redaktører vurderer hva som er viktig for samfunnet. Resultatet er at sosiale medier kan gi et mer underholdende, men kanskje mindre informativt mediebilde enn en redigert nettavis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Mediemarked og konkurranse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2_4: TextbookChapter = {
  id: 'medieinfo-2-2-4',
  courseId: 'medieinfo-2',
  chapterNumber: '2.4',
  title: 'Mediemarked og konkurranse',
  description: 'Markedsstrukturer, konkurranse og regulering i mediebransjen - fra monopol til global konkurranse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere medienes markedsstrukturer og konkurransevilkår',
    'vurdere hvordan markedsforhold påvirker mediemangfold og innholdskvalitet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi2-2-4-intro',
      type: 'text',
      content: `## Mediemarked og konkurranse

Mediemarkedet er et spesielt marked. Medier produserer to «varer» samtidig: innhold til publikum og tilgang til publikum for annonsører. De opererer i et **tosidig marked** der suksess avhenger av å tiltrekke seg begge gruppene. Samtidig er medieinnhold et **fellesgode** - nyheter mister ikke verdi av at flere leser dem. Disse særtrekkene gjør at mediemarkedet ikke fungerer som et vanlig marked.

I dette kapittelet skal du lære:
- Hva som kjennetegner mediene som marked
- Hvilke markedsstrukturer som finnes i mediebransjen
- Hvordan global konkurranse utfordrer norske medier
- Hva markedssvikt i mediesektoren innebærer og hvordan den kan reguleres`,
    },
    {
      id: 'mi2-2-4-def-1',
      type: 'definition',
      title: 'Tosidig marked og fellesgode',
      content: `Et **tosidig marked** (two-sided market) er et marked der en plattform eller bedrift betjener to ulike kundegrupper som er gjensidig avhengige av hverandre. For medier betyr det at de selger innhold til publikum og oppmerksomhet til annonsører - begge sider trenger hverandre. Et **fellesgode** er et gode som er **ikke-rivaliserende** (at én person bruker det hindrer ikke andre) og **ikke-ekskluderbart** (det er vanskelig å hindre noen i å bruke det). Nyheter har trekk av fellesgode: en nyhet mister ikke verdi av at flere leser den, og det er vanskelig å forhindre at informasjonen spres videre.`,
    },
    {
      id: 'mi2-2-4-text-1',
      type: 'text',
      content: `### Markedsstrukturer i mediebransjen

Mediemarkedet har ulike strukturer avhengig av medietype og geografi:

**Monopol og oligopol:**
- NRK hadde kringkastingsmonopol i Norge frem til 1981 (radio) og 1992 (TV)
- Det norske avismarkedet er et **oligopol** med noen få store aktører (Schibsted, Amedia, Polaris)
- Globalt dominerer noen få techselskaper plattformmarkedet (Google, Meta, Apple)

**Konkurranse mellom medietyper:**
- Aviser konkurrerer ikke bare med andre aviser, men med TV, radio, nettmedier og sosiale medier
- Denne **intermediale konkurransen** har økt kraftig med digitaliseringen
- Et lokalt medium konkurrerer nå med globale aktører om publikums oppmerksomhet

**Det tosidige markedets dynamikk:**
- Gratisaviser og reklamefinansierte medier gir innhold gratis for å tiltrekke et stort publikum, som de kan «selge» til annonsører
- Betalingsmedier balanserer mellom å ta nok betalt for innhold og å ha nok lesere til å være attraktive for annonsører
- Digitale plattformer er det mest ekstreme eksempelet: tjenestene er gratis for brukerne fordi all inntekt kommer fra annonser

| Markedsstruktur | Kjennetegn | Eksempel |
|-----------------|------------|----------|
| Monopol | Én aktør dominerer | NRK-monopolet (1933–1981) |
| Oligopol | Noen få store aktører | Norsk avisbransje |
| Monopolistisk konkurranse | Mange aktører med differensierte produkter | Norske nettmedier |
| Plattformmonopol | Nettverkseffekter gir naturlig dominans | Google i søk, Meta i sosiale medier |`,
    },
    {
      id: 'mi2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Netflix og disrupsjon av mediemarkedet',
      problem: 'Netflix startet som DVD-utleie per post, men ble til en global strømmetjeneste som utfordret hele TV-bransjen. Analyser hvordan Netflix endret mediemarkedet.',
      solution: `**Netflix' utvikling:**
- 1997: Startet som DVD-utleie per post i USA
- 2007: Lanserte strømmetjeneste
- 2013: Begynte å produsere eget innhold (House of Cards)
- 2023: Over 250 millioner abonnenter globalt

**Hvordan Netflix endret markedet:**
- **Disrupsjon av lineær TV:** Seere gikk fra å følge kanaler med faste sendetider til å velge hva de ville se når de ville
- **Globalt innhold:** Netflix produserer og distribuerer innhold fra hele verden (Squid Game fra Sør-Korea, Dark fra Tyskland)
- **Datadriving:** Netflix bruker data om seervanene til å bestemme hvilke serier som produseres
- **Priskonkurranse:** Lave månedlige priser undergravet tradisjonelle kabel-TV-modeller

**Konsekvensene:**
- Tradisjonelle kringkastere og distributører mistet markedsandeler
- Alle store aktører lanserte egne strømmetjenester (Disney+, HBO Max, Paramount+)
- «Strømmekriger» med økte utgifter til innholdsproduksjon
- Norsk innholdsproduksjon fikk et globalt marked, men også sterkere internasjonal konkurranse`,
    },
    {
      id: 'mi2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva menes med at medier opererer i et «tosidig marked»?',
        options: [
          { id: 'a', text: 'At medier har to ulike inntektskilder: innhold til publikum og oppmerksomhet til annonsører', isCorrect: true },
          { id: 'b', text: 'At medier opererer i to ulike land', isCorrect: false },
          { id: 'c', text: 'At medier produserer to ulike produkter: aviser og TV', isCorrect: false },
          { id: 'd', text: 'At medier har to ulike eiere', isCorrect: false },
        ],
        solution: 'Et tosidig marked betyr at medier betjener to ulike kundegrupper: publikum (som vil ha innhold) og annonsører (som vil nå publikumet). De to sidene er gjensidig avhengige - uten et stort publikum er mediet uinteressant for annonsører, og uten annonseinntekter kan mediet ikke produsere innhold.',
      },
    },
    {
      id: 'mi2-2-4-def-2',
      type: 'definition',
      title: 'Markedssvikt og behov for regulering',
      content: `**Markedssvikt** oppstår når det frie markedet ikke gir et samfunnsmessig optimalt resultat. I mediebransjen kan markedssvikt oppstå fordi: (1) **Fellesgodeproblemet** gjør at nyheter er vanskelig å finansiere - informasjon spres gratis videre. (2) **Eksternaliteter** - journalistikk har positive virkninger for demokratiet som markedet ikke priser inn. (3) **Stordriftsfordeler** og nettverkseffekter gjør at markedet naturlig tenderer mot monopol. (4) **Kulturpolitiske hensyn** - markedet alene sikrer ikke at det produseres innhold for smale målgrupper, på norsk språk eller fra distrikts-Norge. Markedssvikt er hovedbegrunnelsen for offentlig mediepolitikk og mediestøtte.`,
    },
    {
      id: 'mi2-2-4-text-2',
      type: 'text',
      content: `### Global konkurranse og norske mediers utfordringer

Norske medier opererer i dag i et globalt konkurransebilde som stiller nye krav:

**Utfordringer for norske medier:**
- **Språkbarriere som beskyttelse og begrensning:** Norsk språk gir et naturlig vern mot utenlandsk konkurranse i nyhetsmarkedet, men gjør det norske markedet for lite til å finansiere dyr innholdsproduksjon
- **Global konkurranse om oppmerksomhet:** Norske medier konkurrerer med Netflix, YouTube, TikTok og globalt innhold om publikums tid
- **Annonseflukt:** Annonsekroner flyttes til globale plattformer som ikke er underlagt norsk regulering
- **Talentkamp:** Norske mediebedrifter konkurrerer med techselskaper om teknologisk kompetanse

**Regulering av mediemarkedet:**
Myndighetene bruker flere virkemidler for å korrigere markedssvikt:
- **Konkurranselov:** Konkurransetilsynet kan gripe inn mot fusjoner som svekker konkurransen
- **Medieeierskapsloven:** Forhindrer uønsket maktkonsentrasjon
- **Mediestøtte:** Direkte og indirekte støtte for å sikre mangfold
- **NRK som allmennskyringkaster:** Sikrer at det produseres innhold markedet alene ikke ville finansiert
- **EU-regulering:** Digital Markets Act og Digital Services Act setter rammer for plattformene

Norsk mediepolitikk balanserer mellom å la markedet fungere fritt og å gripe inn der markedet ikke sikrer et godt mediemangfold.`,
    },
    {
      id: 'mi2-2-4-example-2',
      type: 'example',
      title: 'Eksempel: «Avisddøden» og lokalmedier',
      problem: 'I mange land har lokalaviser lagt ned eller kuttet kraftig i bemanning de siste tiårene. I USA har man begynt å snakke om «nyhetsgørkener» (news deserts) - områder uten lokal nyhetsdekning. Hvordan ser situasjonen ut i Norge?',
      solution: `**Internasjonalt:**
- I USA har over 2 500 aviser lagt ned siden 2005
- Store deler av landet har mistet lokal nyhetsdekning
- Forskning viser at «nyhetsgørkener» har lavere valgdeltakelse og mer korrupsjon

**I Norge:**
- Situasjonen er bedre enn i mange andre land takket være pressestøtten
- De fleste kommuner har fortsatt lokal nyhetsdekning
- Men mange lokalaviser har kuttet i antall journalister og utgir færre utgaver
- Noen steder dekkes kommunepolitikk bare av én journalist

**Hvorfor Norge klarer seg bedre:**
- Pressestøtten (produksjonstilskudd) holder småaviser i live
- Amedia har satset på digital omstilling av lokalavisene
- Høy betalingsvilje blant norske lesere
- NRK har distriktskontor over hele landet

Eksempelet viser at mediestøtte kan være avgjørende for å forhindre nyhetsgørkener og sikre lokal demokratisk kontroll.`,
    },
    {
      id: 'mi2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        task: 'Forklar hva som menes med «markedssvikt» i mediesektoren, og gi to eksempler på hvordan markedet alene kan svikte i å sikre et godt mediemangfold.',
        hints: ['Tenk på fellesgodeproblemet og eksternaliteter', 'Vurder hva som skjer med lokal nyhetsdekning og innhold for smale målgrupper uten støtte'],
        solution: 'Markedssvikt i mediesektoren betyr at det frie markedet ikke gir et samfunnsmessig optimalt resultat for mediemangfold og demokratisk debatt. Eksempel 1: Fellesgodeproblemet - nyheter kan deles og kopieres gratis, noe som gjør det vanskelig å finansiere dyr undersøkende journalistikk gjennom markedet alene. Eksempel 2: Lokalavisenes nedgang - det er ikke nok annonseinntekter til å drive lokal nyhetsdekning i småkommuner, selv om slik dekning er svært viktig for lokaldemokratiet. Uten offentlig støtte ville mange lokalsamfunn stått uten nyhetsdekning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        task: 'Hva er en «nyhetsgørken» (news desert)?',
        options: [
          { id: 'a', text: 'Et område der det ikke er tilgang til internett', isCorrect: false },
          { id: 'b', text: 'Et geografisk område som har mistet all lokal nyhetsdekning', isCorrect: true },
          { id: 'c', text: 'En type avis som bare dekker økonomiske nyheter', isCorrect: false },
          { id: 'd', text: 'Et begrep for nyheter som ingen leser', isCorrect: false },
        ],
        solution: 'En «nyhetsgørken» (news desert) er et geografisk område der det ikke lenger finnes lokal nyhetsdekning - lokalavisen har lagt ned eller trukket seg ut. Fenomenet er utbredt i USA, der over 2 500 aviser har lagt ned siden 2005. Forskning viser at slike områder har lavere valgdeltakelse og høyere grad av korrupsjon, fordi det mangler en lokal vaktbikkje.',
      },
    },
    {
      id: 'mi2-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Medier opererer i **tosidige markeder** der de selger innhold til publikum og oppmerksomhet til annonsører
- Medieinnhold har trekk av **fellesgode**, noe som skaper finansieringsutfordringer
- Mediemarkedet har ulike strukturer: fra monopol og oligopol til plattformmonopol
- **Global konkurranse** utfordrer norske medier på oppmerksomhet, annonseinntekter og talent
- **Markedssvikt** begrunner behovet for offentlig regulering og mediestøtte
- «Nyhetsgørkener» viser konsekvensene av manglende lokal nyhetsdekning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Tosidig marked | Marked der mediet betjener både publikum og annonsører |
| Fellesgode | Gode som er ikke-rivaliserende og ikke-ekskluderbart |
| Markedssvikt | Når markedet ikke gir samfunnsmessig optimalt resultat |
| Oligopol | Marked med noen få store aktører |
| Intermedial konkurranse | Konkurranse mellom ulike medietyper |
| Nyhetsgørken | Område uten lokal nyhetsdekning |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Diskuter om «strømmekrigene» mellom Netflix, Disney+, HBO Max og andre er bra eller dårlig for forbrukerne. Vurder både innholdskvalitet, pris og tilgjengelighet.',
        hints: ['Tenk på fordeler som mer innhold og valgfrihet, men også ulemper som kostnad og fragmentering', 'Sammenlign med da NRK hadde monopol på TV i Norge'],
        solution: 'Fordeler for forbrukerne: Mer innhold enn noen gang, høy kvalitet (selskapene investerer milliarder i originalt innhold), valgfrihet og fleksibilitet. Ulemper: Totalkostnaden ved å abonnere på mange tjenester er høy, innholdet er fragmentert (du trenger flere abonnementer for å se alt), det er vanskelig å finne innhold på tvers av plattformer, og konkurransen kan føre til at innhold fjernes fra én tjeneste og flyttes til en annen. Sammenlignet med NRK-monopolet: Monopolet ga et felles kulturelt referansepunkt, men begrenset valgfriheten. Dagens situasjon gir mer valgfrihet, men kan fragmentere den felles offentligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        task: 'Undersøk medielandskapet i din egen kommune eller region. Hvilke medier dekker lokale nyheter? Vurder om dekningen er tilstrekkelig for å sikre en informert offentlig debatt.',
        hints: ['Tenk på antall lokalaviser, NRKs distriktskontor, lokalradio og lokale nettmedier', 'Vurder om det finnes saker som ikke dekkes tilstrekkelig'],
        solution: 'Besvarelsen bør kartlegge lokale medier (lokalavis, NRK-distriktskontor, eventuelt lokalradio og lokale nettmedier), vurdere omfanget av dekningen (dekkes kommunepolitikk, næringsliv, kultur og lokalsport?) og diskutere om dekningen er tilstrekkelig. Typiske funn: Mange norske kommuner har bare én lokalavis og NRKs distriktsdekning, noe som gir begrenset mediemangfold lokalt. Kritiske spørsmål: Er det nok journalister til å følge opp lokalpolitikk? Dekkes det som ikke er «klikkvennlig»? Er det rom for kritisk journalistikk mot lokale maktstrukturer?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        task: 'Google har i praksis monopol på internett-søk i Norge (over 90 % markedsandel). Drøft om dette er problematisk, og hvilke tiltak som eventuelt bør settes inn.',
        hints: ['Tenk på Googles makt over informasjonstilgang, annonsering og medienes synlighet', 'Vurder EUs Digital Markets Act som et mulig reguleringsverktøy'],
        solution: 'Problematisk fordi: Google kontrollerer hva folk finner når de søker etter informasjon, kan favorisere egne tjenester, tar store deler av annonsemarkedet fra mediene, og har makt til å gjøre medier synlige eller usynlige. Motargumenter: Google gir gratis tilgang til informasjon, driver innovasjon, og brukerne kan velge andre søkemotorer. Mulige tiltak: EUs Digital Markets Act pålegger «gatekeepere» som Google å behandle tredjeparter rettferdig, algoritmisk transparens, konkurransetilsyn som vurderer misbruk av markedsposisjon, og støtte til alternative søketeknologier. Et balansert syn: Googles monopol er problematisk for mediemangfold og informasjonsfrihet, men regulering må balansere mot innovasjon og brukernes interesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Mediepolitikk og mediestøtte
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2_5: TextbookChapter = {
  id: 'medieinfo-2-2-5',
  courseId: 'medieinfo-2',
  chapterNumber: '2.5',
  title: 'Mediepolitikk og mediestøtte',
  description: 'Norsk mediepolitikk, pressestøtte og NRK - hvordan staten balanserer mellom å sikre mediemangfold og å respektere pressens uavhengighet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for norsk mediepolitikk og mediestøtteordninger',
    'drøfte dilemmaer i forholdet mellom stat og medier i et demokrati',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi2-2-5-intro',
      type: 'text',
      content: `## Mediepolitikk og mediestøtte

I Norge har staten i over hundre år ført en aktiv mediepolitikk for å sikre mediemangfold, ytringsfrihet og en opplyst offentlig debatt. Pressestøtten, NRK-finansieringen, medieeierskapsloven og momsfritak for medier er alle eksempler på statlig inngripen i mediemarkedet. Men mediepolitikk er alltid en balansegang: staten skal støtte mediene uten å styre dem, og sikre mangfold uten å favorisere bestemte synspunkter.

I dette kapittelet skal du lære:
- Hva norsk mediepolitikk innebærer og hvilke mål den har
- Hvordan pressestøtten fungerer og hvem som mottar den
- Hva NRK-plakaten og NRKs samfunnsoppdrag er
- Hvilke dilemmaer som oppstår i forholdet mellom stat og medier`,
    },
    {
      id: 'mi2-2-5-def-1',
      type: 'definition',
      title: 'Mediepolitikk',
      content: `**Mediepolitikk** er den offentlige politikken som regulerer, støtter og legger rammer for mediesektoren. I Norge bygger mediepolitikken på tre hovedpilarer: (1) **Ytringsfrihet** - retten til å ytre seg fritt, forankret i Grunnlovens § 100. (2) **Infrastrukturkravet** - statens ansvar for å legge til rette for en «åpen og opplyst offentlig samtale» (Grunnloven § 100, 6. ledd). (3) **Mediemangfold** - målet om at det skal finnes et bredt utvalg av medier med ulike perspektiver, som sikrer borgernes tilgang til informasjon og debatt.`,
    },
    {
      id: 'mi2-2-5-text-1',
      type: 'text',
      content: `### Pressestøtten - historikk og funksjon

Pressestøtten har en lang historie i Norge:

**Bakgrunn:**
- Innført i 1969 som et svar på at mange nummer to-aviser (den nest største avisen på et sted) var truet av nedleggelse
- Norge var blant de første landene i verden med direkte pressestøtte
- Formålet var å sikre at det fantes flere aviser med ulike politiske perspektiver på hvert sted

**Ordninger i dag:**
- **Produksjonstilskudd:** Den viktigste direkte støtteordningen, fordelt etter kriterier som opplag, antall utgaver og type avis. Nr. 2-aviser og lokalaviser får mest per krone.
- **Innovasjonsstøtte:** Tilskudd til mediebedrifter som utvikler nye digitale tjenester og forretningsmodeller
- **Momsfritak:** Medier er fritatt fra merverdiavgift, noe som i praksis er den største formen for indirekte mediestøtte
- **Samisk avissupport og minoritetsspråklig støtte:** Særskilt støtte til medier på samisk og andre minoritetsspråk

| Støtteordning | Type | Omfang (ca.) |
|---------------|------|-------------|
| Produksjonstilskudd | Direkte | Ca. 370 mill. kr/år |
| Momsfritak | Indirekte | Ca. 2–3 mrd. kr/år |
| Innovasjonsstøtte | Direkte | Ca. 30 mill. kr/år |
| NRK-finansiering | Direkte | Ca. 6,5 mrd. kr/år |

**Hvem mottar mest?**
De største mottakerne av produksjonstilskudd er typisk nr. 2-aviser i store byer (som Dagsavisen i Oslo) og lokalaviser med svak økonomi. Schibsted, som eier Norges mest lønnsomme medier, mottar lite direkte pressestøtte.`,
    },
    {
      id: 'mi2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Dagsavisen og pressestøttens betydning',
      problem: 'Dagsavisen er en av Norges eldste aviser og mottar betydelig pressestøtte. Diskuter hva som ville skjedd med avisen uten denne støtten.',
      solution: `**Dagsavisens situasjon:**
- Historisk knyttet til Arbeiderpartiet, nå politisk uavhengig
- Nr. 2-avis i Oslo-markedet, der Aftenposten og VG dominerer
- Mottar blant de høyeste produksjonstilskuddene i Norge
- Har en redaksjonell profil som skiller seg fra de store avisene, med sterkt fokus på politisk analyse og debatt

**Uten pressestøtte:**
- Dagsavisen ville sannsynligvis ha lagt ned eller blitt kraftig redusert
- Oslo ville mistet en viktig stemme i den offentlige debatten
- Arbeiderparti-tilknyttet perspektiv i norsk offentlighet ville blitt svekket
- Journalister som dekker arbeidsliv, velferd og sosial rettferdighet ville mistet en viktig arbeidsplass

**Pressestøttens demokratiske begrunnelse:**
Eksempelet viser at pressestøtten ikke bare er en økonomisk overføring, men et demokratisk virkemiddel: den sikrer at det finnes flere stemmer i offentligheten enn det markedet alene ville finansiert. Uten støtte ville Oslo hatt færre uavhengige redaksjoner, og mangfoldet av perspektiver ville blitt redusert.`,
    },
    {
      id: 'mi2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva er den største formen for indirekte mediestøtte i Norge?',
        options: [
          { id: 'a', text: 'Produksjonstilskudd til aviser', isCorrect: false },
          { id: 'b', text: 'Innovasjonsstøtte til nye medietjenester', isCorrect: false },
          { id: 'c', text: 'Momsfritak for medier', isCorrect: true },
          { id: 'd', text: 'NRK-finansiering over statsbudsjettet', isCorrect: false },
        ],
        solution: 'Momsfritak for medier er den klart største formen for indirekte mediestøtte, verdt anslagsvis 2–3 milliarder kroner årlig. Det betyr at medier slipper å betale 25 % moms på sine produkter, noe som gjør medieinnhold billigere for forbrukerne. Til sammenligning er det direkte produksjonstilskuddet på rundt 370 millioner kroner.',
      },
    },
    {
      id: 'mi2-2-5-def-2',
      type: 'definition',
      title: 'NRK-plakaten og allmennkringkasting',
      content: `**NRK-plakaten** er et styringsdokument vedtatt av Stortinget som definerer NRKs samfunnsoppdrag. Plakaten fastslår at NRK skal tilby et bredt innholdstilbud som informerer, utdanner, underholder og beriker, med vekt på kvalitet, norsk kultur og språk, nyheter og demokratisk debatt. NRK skal betjene hele befolkningen, inkludert minoriteter og ulike aldersgrupper. **Allmennkringkasting** er kringkasting som har et bredt samfunnsoppdrag, i motsetning til rent kommersiell kringkasting. I Norge har både NRK og TV 2 allmennkringkasterforpliktelser (TV 2 gjennom en avtale med staten).`,
    },
    {
      id: 'mi2-2-5-text-2',
      type: 'text',
      content: `### NRK og mediepolitiske dilemmaer

**NRKs rolle i norsk medielandskap:**
NRK er den desidert største medieaktøren i Norge, med TV, radio, nett og en rekke digitale tjenester. Med en finansiering på rundt 6,5 milliarder kroner årlig har NRK ressurser som ingen kommersiell aktør kan matche. NRKs rolle er omstridt:

**Argumenter for en sterk NRK:**
- Sikrer innhold for smale målgrupper (samisk, nynorsk, barn, kultur)
- Garanterer nyhetsdekning i hele landet gjennom distriktskontor
- Er uavhengig av kommersielle hensyn og kan prioritere kvalitet
- Fungerer som et felles kulturelt referansepunkt i en fragmentert medietid

**Argumenter mot en for sterk NRK:**
- NRKs gratistjenester konkurrerer med kommersielle medier som må finansiere seg selv
- Schibsted og andre har hevdet at NRK.no undergraver betalingsviljen for nettjournalistikk
- NRK kan ha en «uttrengingseffekt» der kommersielle aktører ikke tør satse fordi NRK allerede er der
- Med stadig flere tjenester (NRK-podkaster, NRK TV, NRK nyhetsapp) utvider NRK seg inn på nye markeder

**Andre mediepolitiske dilemmaer:**
- **Armlengdes avstand:** Hvordan sikre at politikere som bevilger penger til medier, ikke misbruker makten til å påvirke innholdet?
- **Innovasjon vs. støtte:** Bør staten støtte medier som sliter, eller bør pengene brukes på å utvikle nye medietjenester?
- **Nasjonalt vs. globalt:** Hvordan beskytte norsk medieinnhold mot global konkurranse uten å stenge ute utenlandsk innhold?
- **Personvern vs. innholdskvalitet:** Strengere personvernregler begrenser målrettet annonsering, som er en viktig inntektskilde for mediene`,
    },
    {
      id: 'mi2-2-5-example-2',
      type: 'example',
      title: 'Eksempel: NRK-debatt og «uttrengingseffekten»',
      problem: 'Schibsted-sjef Kristin Skogen Lund uttalte i 2019 at NRK.no var en «trussel mot norsk mediemangfold» fordi NRKs gratistjenester undergravde betalingsviljen for kommersielle nettaviser. Analyser denne kritikken.',
      solution: `**Schibsteds argument:**
- NRK tilbyr nyheter, sportsnyheter, kulturinnhold og underholdning gratis på NRK.no
- Når publikum kan få nyheter gratis fra NRK, svekkes viljen til å betale for lignende innhold fra kommersielle aktører
- Schibsted og andre kommersielle medier investerer i betalingsmurer og digitale abonnementer, men NRKs gratisinnhold undergraver denne strategien

**NRKs forsvar:**
- NRK har et lovpålagt samfunnsoppdrag om å nå hele befolkningen
- Begrensning av NRK.no ville svekke offentlighetens tilgang til gratis nyheter
- NRK og kommersielle medier utfyller hverandre - NRK lager nyheter som vekker interesse, og folk søker videre til kommersielle medier for dybdedekning
- NRK-plakaten sier eksplisitt at NRK skal ha et bredt nettilbud

**Vurdering:**
Debatten illustrerer et grunnleggende dilemma i mediepolitikken: En sterk offentlig kringkaster er viktig for demokratiet, men kan paradoksalt nok svekke det private mediemangfoldet. Løsningen har vært å sette rammer for NRKs nettvirksomhet gjennom NRK-plakaten og forhåndsgodkjenning av nye tjenester.`,
    },
    {
      id: 'mi2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-2',
        number: '2.5.2',
        type: 'classic',
        task: 'Forklar hva NRK-plakaten er og gi tre eksempler på krav som stilles til NRK gjennom denne plakaten.',
        hints: ['Tenk på NRKs rolle for språk, kultur, nyheter og ulike befolkningsgrupper'],
        solution: 'NRK-plakaten er et styringsdokument vedtatt av Stortinget som definerer NRKs samfunnsoppdrag. Tre eksempler: (1) NRK skal styrke norsk og samisk språk og kultur, blant annet ved å tilby innhold på begge målformer og samisk. (2) NRK skal ha daglige nyhetssendinger og ivareta rollen som arena for debatt og kritisk journalistikk. (3) NRK skal ha et tilbud for alle aldersgrupper, inkludert barn og unge, og for minoritetsgrupper. Plakaten sikrer at NRK oppfyller et bredt samfunnsoppdrag som går utover det kommersielle medier normalt ville tilbudt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-3',
        number: '2.5.3',
        type: 'multiple-choice',
        task: 'Hva er hovedbegrunnelsen for pressestøtten i Norge?',
        options: [
          { id: 'a', text: 'At staten ønsker å kontrollere medienes innhold', isCorrect: false },
          { id: 'b', text: 'At staten ønsker å sikre mediemangfold som markedet alene ikke kan garantere', isCorrect: true },
          { id: 'c', text: 'At avisene har dårlig økonomi og trenger hjelp', isCorrect: false },
          { id: 'd', text: 'At det er billigere for staten å gi støtte enn å drive egne aviser', isCorrect: false },
        ],
        solution: 'Hovedbegrunnelsen for pressestøtten er å sikre mediemangfold - at det finnes et bredt utvalg av medier med ulike perspektiver. Staten har en plikt ifølge Grunnloven § 100 til å legge til rette for en «åpen og opplyst offentlig samtale», og pressestøtten er et virkemiddel for å oppfylle dette infrastrukturkravet. Det handler ikke om å kontrollere medier, men om å sikre at flere stemmer har plass i offentligheten.',
      },
    },
    {
      id: 'mi2-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Norsk **mediepolitikk** bygger på ytringsfrihet, infrastrukturkravet og målet om mediemangfold
- **Pressestøtten** sikrer at det finnes flere medier enn det markedet alene ville finansiert
- **Momsfritak** er den største indirekte mediestøtten, verdt milliarder av kroner
- **NRK-plakaten** definerer NRKs brede samfunnsoppdrag
- Det finnes viktige **dilemmaer** i forholdet mellom stat og medier, blant annet spørsmålet om NRKs uttrengingseffekt
- Mediepolitikk er en konstant balansegang mellom støtte og uavhengighet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mediepolitikk | Offentlig politikk som regulerer og støtter mediesektoren |
| Infrastrukturkravet | Statens ansvar for å legge til rette for offentlig samtale (Grunnloven § 100) |
| Pressestøtte | Direkte og indirekte statlig støtte til medier |
| Produksjonstilskudd | Direkte økonomisk støtte til aviser |
| NRK-plakaten | Styringsdokument som definerer NRKs samfunnsoppdrag |
| Allmennkringkasting | Kringkasting med bredt samfunnsoppdrag |
| Uttrengingseffekt | At NRKs gratistjenester svekker kommersielle medier |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Drøft argumenter for og mot pressestøtte. Er det riktig at staten bruker skattebetalernes penger på å støtte medier, eller bør mediebransjen klare seg selv i markedet?',
        hints: ['Tenk på medienes rolle i demokratiet og på hva som skjer i land uten pressestøtte', 'Vurder om det er forskjell på direkte og indirekte støtte'],
        solution: 'Argumenter for pressestøtte: Medier er viktige for demokratiet og må sikres uavhengig av markedskrefter. Pressestøtten sikrer mediemangfold, særlig for lokale og små medier. Uten støtte ville mange aviser lagt ned, noe som ville redusert antall uavhengige stemmer i offentligheten. Infrastrukturkravet i Grunnloven § 100 forplikter staten til å legge til rette for offentlig debatt. Argumenter mot: Statsstøtte kan skape avhengighet og gjøre medier mindre innovative. Det kan oppstå mistanke om at staten favoriserer medier som er «vennlig innstilt». Markedet bør avgjøre hvilke medier som har livets rett. Et balansert svar peker på at pressestøtte er viktig for mediemangfold, men at ordningen må utformes slik at den sikrer armlengdes avstand mellom stat og redaksjonelt innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        task: 'Sammenlign norsk mediepolitikk med mediepolitikken i et annet land (f.eks. USA, Storbritannia eller Danmark). Hva er de viktigste forskjellene, og hva kan forklare dem?',
        hints: ['Tenk på statens rolle, finansiering av allmennkringkasting og holdningen til pressestøtte', 'Vurder kulturelle og politiske forskjeller mellom landene'],
        solution: 'Eksempel Norge vs. USA: Norge har aktiv mediepolitikk med pressestøtte, sterk allmennkringkaster (NRK), medieeierskapslov og momsfritak. USA har minimal statlig innblanding, ingen pressestøtte, svak offentlig kringkaster (PBS/NPR), og et medielandskap dominert av store kommersielle konserner. Forskjellene skyldes ulike politiske tradisjoner: Norges sosialdemokratiske tradisjon gir aksept for statlig regulering til felles beste, mens USAs liberale tradisjon vektlegger ytringsfrihet som fravær av statlig innblanding. Resultat: Norge har bedre mediemangfold lokalt og en sterkere offentlig kringkaster, mens USA har mer innovasjon og et større privat mediemarked, men også større problemer med «nyhetsgørkener» og politisk polarisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        task: 'Tenk deg at du er kulturminister og skal utforme en ny mediestøtteordning for Norge. Hvilke mål ville du satt, og hvordan ville du utformet ordningen? Begrunn valgene dine.',
        hints: ['Tenk på hvem som trenger støtte mest, hvordan armlengdes avstand sikres, og hvilke krav som bør stilles til mottakerne', 'Vurder om støtten bør gå til tradisjonelle medier, nye medier eller begge'],
        solution: 'Et godt svar bør definere klare mål (f.eks. mediemangfold, lokal nyhetsdekning, innovasjon), foreslå konkrete ordninger (f.eks. økt produksjonstilskudd til lokalaviser, innovasjonsfond for nye medietjenester, støtte til undersøkende journalistikk), sikre armlengdes avstand (f.eks. uavhengig fordelingskomité, objektive kriterier), og stille krav til mottakerne (f.eks. redaksjonelle standarder, publiseringsfrekvens). En viktig avveining er mellom å støtte eksisterende medier (som sikrer stabilitet) og å investere i nye løsninger (som sikrer fornyelse). Besvarelsen bør vise forståelse for de mediepolitiske dilemmaene og evne til å gjøre begrunnede valg.',
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

export const MEDIEINFO_2_DEL2_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_2_1,
  CHAPTER_MEDIEINFO_2_2_2,
  CHAPTER_MEDIEINFO_2_2_3,
  CHAPTER_MEDIEINFO_2_2_4,
  CHAPTER_MEDIEINFO_2_2_5,
];

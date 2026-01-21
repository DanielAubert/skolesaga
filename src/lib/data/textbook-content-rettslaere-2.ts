/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok kapitler for Rettslære 2 (VG3)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Fordypning i strafferett
// ============================================================================

export const CHAPTER_RETTSLAERE_2_1: TextbookChapter = {
  id: 'rettslaere-2-1',
  courseId: 'rettslaere-2',
  chapterNumber: '1',
  title: 'Fordypning i strafferett',
  description: 'Utdypende studie av strafferettens prinsipper, straffeutmåling og særlige strafferettslige problemstillinger.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for hovedtrekk i strafferetten og drøfte rettssikkerhet i straffesaker',
    'analysere og vurdere straffesaker ut fra rettslige prinsipper',
    'drøfte etiske og rettslige dilemmaer knyttet til straff og rehabilitering'
  ],
  content: [
    {
      id: 'rettslaere-2-1-intro',
      type: 'text',
      content: `I Rettslære 1 lærte du grunnleggende prinsipper i strafferetten. I dette kapittelet skal vi fordype oss i mer komplekse strafferettslige spørsmål, herunder straffeutmåling, medvirkning, forsøk på lovbrudd og særlige straffrihetsgrunner.

Strafferetten er en sentral del av rettssystemet som regulerer forholdet mellom staten og borgerne når det gjelder handlinger som samfunnet anser som så alvorlige at de bør straffes. Hovedformålene med straff er:

- **Prevensjon** - avskrekke fra fremtidige lovbrudd
- **Gjengjeldelse** - rettferdig reaksjon på lovbrudd
- **Rehabilitering** - hjelpe lovbryteren tilbake til samfunnet
- **Samfunnsvern** - beskytte samfunnet mot farlige lovbrytere`
    },
    {
      id: 'rettslaere-2-1-def-1',
      type: 'definition',
      title: 'Straffbarhetsbetingelsene',
      content: `For at en handling skal være straffbar, må fire vilkår være oppfylt:

1. **Lovkravet (legalitetsprinsippet)** - Handlingen må være beskrevet i loven som straffbar
2. **Skyldkravet** - Gjerningspersonen må ha utvist forsett eller uaktsomhet
3. **Tilregnelighet** - Gjerningspersonen må være tilregnelig
4. **Fravær av straffrihetsgrunner** - Det må ikke foreligge nødverge, nødrett eller liknende`
    },
    {
      id: 'rettslaere-2-1-def-2',
      type: 'definition',
      title: 'Forsett og uaktsomhet',
      content: `**Forsett** betyr at gjerningspersonen handlet med vilje eller med bevissthet om at handlingen ville føre til det straffbare resultatet. Det finnes tre grader av forsett:

- **Hensiktsforsett** - resultatet var tilsiktet
- **Sannsynlighetsforsett** - gjerningspersonen anså resultatet som sannsynlig
- **Eventuelt forsett (dolus eventualis)** - gjerningspersonen ville gjennomført handlingen selv om resultatet var sikkert

**Uaktsomhet** betyr at gjerningspersonen burde ha forstått at handlingen kunne føre til det straffbare resultatet. Det skilles mellom:

- **Grov uaktsomhet** - et markert avvik fra forsvarlig opptreden
- **Simpel uaktsomhet** - et mindre avvik fra forsvarlig opptreden`
    },
    {
      id: 'rettslaere-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Skyldgrader',
      problem: 'Per kjører bil i 80 km/t i en 50-sone. Han ser at det står barn ved veikanten, men tenker at de nok holder seg unna veien. Et barn løper ut i veien og blir påkjørt. Vurder skyldgraden.',
      solution: `**Analyse:**

Per har utvist **grov uaktsomhet**. Begrunnelsen er:

1. Han kjørte med betydelig overskridelse av fartsgrensen
2. Han observerte barn ved veikanten - en klar risikofaktor
3. Han valgte likevel å ikke redusere farten
4. Dette representerer et markert avvik fra forsvarlig kjøreatferd

Hadde Per aktivt tenkt "selv om barnet løper ut, fortsetter jeg å kjøre fort", ville dette kunne utgjort **eventuelt forsett**.

Skyldgraden har betydning for både straffbart forhold (uaktsom kjøring vs. forsettlig legemsbeskadigelse) og straffeutmålingen.`
    },
    {
      id: 'rettslaere-2-1-text-2',
      type: 'text',
      title: 'Medvirkning til straffbare handlinger',
      content: `Straffeloven § 15 fastsetter at medvirkning til en straffbar handling er straffbart når ikke annet er bestemt. Medvirkning kan være:

**Fysisk medvirkning:**
- Å holde vakt mens andre begår innbrudd
- Å skaffe verktøy til et lovbrudd
- Å kjøre fluktbil etter et ran

**Psykisk medvirkning:**
- Å planlegge et lovbrudd sammen med andre
- Å oppfordre eller tilskynde til lovbrudd
- Å gi råd om hvordan lovbruddet kan gjennomføres

For at medvirkning skal være straffbart, kreves det at medvirkeren har utvist den nødvendige skyld (forsett eller uaktsomhet) i forhold til hovedhandlingen.`
    },
    {
      id: 'rettslaere-2-1-def-3',
      type: 'definition',
      title: 'Forsøk på lovbrudd',
      content: `Etter straffeloven § 16 er forsøk straffbart når noen har forsett om å fullbyrde et lovbrudd og foretar seg noe som leder direkte mot utføringen.

**Vilkår for straffbart forsøk:**
1. Forsett om å begå lovbruddet
2. En handling som leder direkte mot fullbyrdelsen
3. Lovbruddet er ikke fullbyrdet

**Straffri tilbaketreden** foreligger dersom gjerningspersonen frivillig avstår fra å fullbyrde lovbruddet eller avverger at det blir fullbyrdet.`
    },
    {
      id: 'rettslaere-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Forsøk og tilbaketreden',
      problem: 'Ole planlegger å rane en kiosk. Han tar med seg en kniv, går inn i kiosken og stiller seg i kø. Idet han skal frem til kassen, angrer han og går ut. Er dette straffbart forsøk?',
      solution: `**Vurdering:**

**Er grensen for forsøk passert?**
Ole har passert planleggingsstadiet og tatt med seg et våpen. Han har gått inn i kiosken hvor ranet skal begås. Spørsmålet er om det å stå i kø er en handling som "leder direkte mot utføringen".

Rettspraksis viser at grensen for forsøk ofte trekkes ved handlinger som er umiddelbart forut for selve utførelsen. Å stå i kø uten å ha trukket kniven eller fremmet krav, ligger trolig i grenseland.

**Straffri tilbaketreden?**
Selv om forsøksgrensen skulle være passert, kan Ole påberope seg straffri tilbaketreden fordi han:
- Frivillig avstod fra å gjennomføre ranet
- Gjorde dette før noen skade var skjedd
- Angret av egen vilje, ikke på grunn av ytre omstendigheter

**Konklusjon:** Ole vil sannsynligvis gå fri, enten fordi forsøksgrensen ikke er passert, eller på grunn av straffri tilbaketreden.`
    },
    {
      id: 'rettslaere-2-1-text-3',
      type: 'text',
      title: 'Straffrihetsgrunner',
      content: `Selv om alle straffbarhetsbetingelsene i utgangspunktet er oppfylt, kan det foreligge omstendigheter som gjør handlingen straffri:

**Nødverge (straffeloven § 18):**
En handling som ellers ville vært straffbar, er lovlig når den foretas for å avverge et ulovlig angrep, og ikke går lenger enn nødvendig.

**Nødrett (straffeloven § 17):**
En handling er lovlig når den foretas for å redde liv, helse, eiendom eller annen interesse fra en fare for skade som ikke kan avverges på annen rimelig måte.

**Selvtekt (straffeloven § 19):**
Begrenset rett til å ta seg selv til rette for å gjenopprette en ulovlig endret tilstand.

**Samtykke:**
I visse tilfeller kan samtykke fra den fornærmede gjøre handlingen lovlig.`
    },
    {
      id: 'rettslaere-2-1-def-4',
      type: 'definition',
      title: 'Straffeutmåling',
      content: `Ved fastsettelse av straff skal retten ta hensyn til både **skjerpende** og **formildende** omstendigheter:

**Skjerpende omstendigheter (straffeloven § 77):**
- Lovbruddet er begått mot en forsvarsløs person
- Lovbruddet er ledd i organisert kriminalitet
- Lovbruddet er motivert av hat mot grupper
- Gjerningspersonen har tidligere domfellelser

**Formildende omstendigheter (straffeloven § 78):**
- Gjerningspersonen har avgitt uforbeholden tilståelse
- Medvirket til oppklaring av andre saker
- Handlet i berettiget harme
- Lang tid har gått siden lovbruddet
- Gjerningspersonen var under 18 år`
    },
    {
      id: 'rettslaere-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken skyldgrad kreves normalt for at en handling skal være straffbar?',
        options: [
          { id: 'a', text: 'Hensiktsforsett', isCorrect: false },
          { id: 'b', text: 'Forsett, med mindre loven fastsetter at uaktsomhet er tilstrekkelig', isCorrect: true },
          { id: 'c', text: 'Grov uaktsomhet', isCorrect: false },
          { id: 'd', text: 'Simpel uaktsomhet', isCorrect: false }
        ],
        hints: ['Tenk på hovedregelen i straffeloven § 21'],
        solution: 'Hovedregelen er at det kreves forsett for straffansvar, jf. straffeloven § 21. Uaktsomhet er bare tilstrekkelig når loven uttrykkelig sier det.'
      }
    },
    {
      id: 'rettslaere-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom fysisk og psykisk medvirkning, og gi et eksempel på hver.',
        hints: ['Tenk på hva slags bidrag medvirkeren gir til lovbruddet'],
        solution: `**Fysisk medvirkning** er når man bidrar med handlinger eller gjenstander til gjennomføringen av lovbruddet. Eksempel: Kari låner ut bilen sin til Per, vel vitende om at han skal bruke den som fluktbil etter et ran.

**Psykisk medvirkning** er når man bidrar med råd, planlegging eller motivasjon til lovbruddet. Eksempel: Ole forteller Per hvordan alarmsystemet i banken fungerer og hvilke tidspunkter det er færrest ansatte på jobb.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kari blir angrepet av en mann med kniv på gaten. Hun tar opp en stein og slår mannen i hodet slik at han blir bevisstløs. Deretter sparker hun ham flere ganger mens han ligger nede. Drøft om Kari kan påberope seg nødverge.',
        hints: [
          'Vurder om angrepet var pågående eller avsluttet',
          'Vurder om handlingen gikk lenger enn nødvendig'
        ],
        solution: `**Drøftelse av nødverge:**

**Det første slaget med steinen:**
Dette skjedde mens angrepet pågikk. Kari sto overfor et ulovlig angrep (knivtrussel). Å slå med en stein for å avverge et knivangrep fremstår som forholdsmessig - angriperen hadde et farligere våpen. Steinkastet er sannsynligvis innenfor nødvergeretten.

**Sparkene mens mannen lå bevisstløs:**
På dette tidspunktet var angrepet avsluttet - mannen var bevisstløs og utgjorde ingen trussel. Nødverge kan bare utøves for å "avverge" et angrep, ikke for å straffe angriperen i etterkant. Sparkene går klart utover hva som var nødvendig.

**Overskridelse av nødverge:**
Straffeloven § 18 annet ledd gir mulighet for straffrihet ved overskridelse dersom den skyldes en "sinnsbevegelse eller forvirring" fremkalt av angrepet. Kari kan muligens påberope seg dette for sparkene, da hun handlet i affekt etter et skremmende angrep.

**Konklusjon:** Kari har sannsynligvis handlet i lovlig nødverge ved det første slaget, men har overskredet nødvergeretten ved å sparke den bevisstløse mannen. Spørsmålet blir om overskridelsen kan unnskyldes etter § 18 annet ledd.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for vilkårene for straffbart forsøk og forklar hva som menes med "straffri tilbaketreden".',
        hints: ['Se straffeloven § 16'],
        solution: `**Vilkår for straffbart forsøk (straffeloven § 16):**

1. **Fullbyrdingsforsett** - Gjerningspersonen må ha hatt til hensikt å fullføre lovbruddet
2. **Handling som leder direkte mot utføringen** - Det må være foretatt en ytre handling som går utover ren planlegging og forberedelse
3. **Lovbruddet er ikke fullbyrdet** - Hvis lovbruddet er fullført, straffes man for det fullbyrdede lovbruddet, ikke forsøket

**Straffri tilbaketreden:**
Selv om forsøksgrensen er passert, kan gjerningspersonen gå straffri dersom vedkommende:
- Frivillig avstår fra å fullbyrde lovbruddet, eller
- Frivillig avverger at lovbruddet blir fullbyrdet

Tilbaketredenen må være frivillig - den må ikke skyldes ytre hindringer som at politiet kommer eller at offeret gjør motstand.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en straffrihetsgrunn?',
        options: [
          { id: 'a', text: 'Nødverge', isCorrect: false },
          { id: 'b', text: 'Nødrett', isCorrect: false },
          { id: 'c', text: 'Ung alder (under 18 år)', isCorrect: true },
          { id: 'd', text: 'Selvtekt', isCorrect: false }
        ],
        hints: ['Tenk på forskjellen mellom straffrihetsgrunner og formildende omstendigheter'],
        solution: 'Ung alder er ikke en straffrihetsgrunn, men en formildende omstendighet ved straffeutmålingen. Den kriminelle lavalder i Norge er 15 år. Nødverge, nødrett og selvtekt er derimot straffrihetsgrunner som gjør at handlingen ikke er straffbar.'
      }
    },
    {
      id: 'rettslaere-2-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-1-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft de ulike hensynene bak straff (prevensjon, gjengjeldelse, rehabilitering og samfunnsvern) og vurder hvilke hensyn som bør veie tyngst i moderne strafferett.',
        hints: [
          'Tenk på hva som er formålet med straff i et moderne samfunn',
          'Vurder de ulike hensynenes styrker og svakheter'
        ],
        solution: `**De fire straffeteoriene:**

**1. Prevensjon:**
- *Allmennprevensjon:* Straffen skal avskrekke andre fra å begå lovbrudd
- *Individualprevensjon:* Straffen skal avskrekke den enkelte lovbryter fra å gjenta lovbrudd
- Styrke: Fremtidsrettet, fokus på å forhindre nye lovbrudd
- Svakhet: Begrenset dokumentert effekt på avskrekking

**2. Gjengjeldelse:**
- Straffen skal gjenopprette balansen som lovbruddet forstyrret
- Styrke: Appellerer til rettferdighetssans, proporsjonalitet mellom handling og straff
- Svakhet: Bakoverrettet, bidrar ikke nødvendigvis til fremtidig forbedring

**3. Rehabilitering:**
- Straffen skal hjelpe lovbryteren til å fungere i samfunnet
- Styrke: Humanistisk, reduserer tilbakefall
- Svakhet: Krever ressurser, fungerer ikke for alle

**4. Samfunnsvern:**
- Straffen skal beskytte samfunnet mot farlige lovbrytere
- Styrke: Beskytter uskyldige borgere
- Svakhet: Kan føre til uforholdsmessig lange straffer

**Moderne balansering:**
Norsk strafferett søker å balansere alle hensynene, men med økende vekt på rehabilitering, særlig for unge lovbrytere. Samfunnsvern er viktigst ved alvorlige voldsforbrytelser, mens rehabilitering vektlegges ved narkotikaforbrytelser og vinningskriminalitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 2: Økonomisk kriminalitet
// ============================================================================

export const CHAPTER_RETTSLAERE_2_2: TextbookChapter = {
  id: 'rettslaere-2-2',
  courseId: 'rettslaere-2',
  chapterNumber: '2',
  title: 'Økonomisk kriminalitet',
  description: 'Studie av hvitvasking, korrupsjon, bedrageri og andre former for økonomisk kriminalitet.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for ulike former for økonomisk kriminalitet',
    'drøfte samfunnsmessige konsekvenser av økonomisk kriminalitet',
    'vurdere tiltak for å bekjempe økonomisk kriminalitet'
  ],
  content: [
    {
      id: 'rettslaere-2-2-intro',
      type: 'text',
      content: `Økonomisk kriminalitet er en samlebetegnelse for lovbrudd som har økonomisk vinning som formål. Denne formen for kriminalitet skiller seg fra tradisjonell vinningskriminalitet ved at den ofte begås av personer i betrodde stillinger og gjerne involverer komplekse transaksjoner.

Økonomisk kriminalitet omfatter blant annet:
- Hvitvasking av penger
- Korrupsjon og bestikkelser
- Bedrageri og underslag
- Skattesvik og avgiftsunndragelse
- Innsidehandel
- Konkurskriminalitet

Denne formen for kriminalitet har store samfunnsmessige konsekvenser og undergraver tilliten til næringsliv og offentlige institusjoner.`
    },
    {
      id: 'rettslaere-2-2-def-1',
      type: 'definition',
      title: 'Hvitvasking',
      content: `**Hvitvasking** er å bidra til å sikre utbytte fra straffbare handlinger, jf. straffeloven § 337.

Hvitvasking innebærer typisk at penger eller verdier som stammer fra kriminell virksomhet, gjøres tilsynelatende lovlige gjennom ulike transaksjoner.

**Hvitvaskingsprosessen har tradisjonelt tre faser:**

1. **Plassering** - De kriminelle midlene føres inn i det finansielle systemet
2. **Tilsløring** - Sporene til pengenes opprinnelse skjules gjennom komplekse transaksjoner
3. **Integrering** - Midlene fremstår som lovlige og kan brukes fritt`
    },
    {
      id: 'rettslaere-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Hvitvasking',
      problem: 'Kari driver en restaurant. Hun fører fiktive salg i kassesystemet og blander inntektene med penger hun har tjent på narkotikasalg. Vurder om dette er hvitvasking.',
      solution: `**Analyse:**

**Fase 1 - Plassering:**
Kari fører de kriminelle pengene (fra narkotikasalg) inn i det lovlige finansielle systemet gjennom restaurantens kasse.

**Fase 2 - Tilsløring:**
Ved å blande de ulovlige pengene med lovlige inntekter fra restauranten, blir det vanskelig å spore pengenes egentlige opprinnelse.

**Fase 3 - Integrering:**
Når pengene er bokført som restaurantinntekter, kan de brukes fritt som tilsynelatende lovlig fortjeneste.

**Juridisk vurdering:**
Dette er klassisk hvitvasking etter straffeloven § 337. Kari:
- Vet at pengene stammer fra straffbar handling (narkotikasalg)
- Bidrar til å sikre utbyttet ved å integrere det i lovlig virksomhet
- Handler med forsett

Strafferammen er inntil 6 år, eller inntil 15 år ved grov hvitvasking.`
    },
    {
      id: 'rettslaere-2-2-def-2',
      type: 'definition',
      title: 'Korrupsjon',
      content: `**Korrupsjon** reguleres i straffeloven §§ 387-389 og omfatter:

**Aktiv korrupsjon (bestikkelse):**
Å gi eller tilby noen en utilbørlig fordel i anledning av stilling, verv eller oppdrag.

**Passiv korrupsjon:**
Å kreve, motta eller akseptere et tilbud om en utilbørlig fordel i anledning av stilling, verv eller oppdrag.

**Påvirkningshandel:**
Å gi eller motta utilbørlig fordel for å påvirke utføringen av en annens stilling, verv eller oppdrag.

Korrupsjon kan straffes med fengsel inntil 3 år, eller inntil 10 år ved grov korrupsjon.`
    },
    {
      id: 'rettslaere-2-2-text-1',
      type: 'text',
      title: 'Utilbørlighetsvurderingen',
      content: `For at noe skal være korrupsjon, må fordelen være **utilbørlig**. Dette vurderes konkret i hvert tilfelle basert på:

**Fordelens art og verdi:**
- Høyere verdi trekker i retning av utilbørlighet
- Pengegaver vil lettere anses utilbørlige enn andre gaver

**Formålet med fordelen:**
- Er det en erkjentlighetsgave eller en betaling for motytelse?
- Er fordelen knyttet til en konkret beslutning?

**Partenes stilling og forholdet mellom dem:**
- Offentlig ansatte har strengere grenser enn private
- Eksisterende forretningsforhold vs. nye relasjoner

**Åpenhet:**
- Skjulte fordeler anses lettere som utilbørlige
- Fordeler som er godkjent av arbeidsgiver er sjelden utilbørlige

**Samfunnsmessig kontekst:**
- Hva som er vanlig i bransjen
- Kulturelle forskjeller må hensyntas`
    },
    {
      id: 'rettslaere-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Korrupsjon eller lovlig gave?',
      problem: 'Per er innkjøpssjef i en kommune. En leverandør sender ham en flaske vin til kr 500 i julegave. Et halvt år senere vinner samme leverandør en anbudskonkurranse der Per satt i evalueringskomiteen. Er dette korrupsjon?',
      solution: `**Vurdering av utilbørlighet:**

**Argumenter for at gaven IKKE er utilbørlig:**
- Verdien er relativt beskjeden (kr 500)
- Julegaver er vanlig forretningsskikk
- Gaven ble gitt et halvt år før anbudskonkurransen
- Ingen direkte kobling mellom gave og kontraktstildeling

**Argumenter for at gaven KAN være utilbørlig:**
- Per er offentlig ansatt (strengere krav)
- Han har beslutningsmyndighet overfor leverandøren
- Gaven kan ha påvirket hans vurdering i konkurransen
- Det etableres en relasjon som kan føre til fremtidige fordeler

**Sannsynlig konklusjon:**
En julegave på kr 500 vil normalt ikke anses som utilbørlig korrupsjon, særlig når den ikke er knyttet til en konkret beslutning. Imidlertid bør offentlig ansatte med innkjøpsansvar være forsiktige med å motta gaver fra leverandører, og mange kommuner har etiske retningslinjer som forbyr dette.

**Anbefaling:**
Per burde ha avslått gaven eller levert den inn til arbeidsgiver, og erklært seg inhabil i anbudskonkurransen.`
    },
    {
      id: 'rettslaere-2-2-def-3',
      type: 'definition',
      title: 'Bedrageri',
      content: `**Bedrageri** er regulert i straffeloven § 371 og innebærer å fremkalle, styrke eller utnytte en villfarelse for derved å få noen til å gjøre noe som volder tap eller fare for tap.

**Vilkår for bedrageri:**
1. **Villedende atferd** - Gjerningspersonen må ha fremkalt, styrket eller utnyttet en villfarelse
2. **Årsakssammenheng** - Villfarelsen må ha fått fornærmede til å gjøre en handling
3. **Tap** - Handlingen må ha voldt tap eller fare for tap
4. **Vinnings hensikt** - Gjerningspersonen må ha handlet med forsett om å skaffe seg eller andre en uberettiget vinning

Simpelt bedrageri straffes med fengsel inntil 3 år, grovt bedrageri med fengsel inntil 6 år.`
    },
    {
      id: 'rettslaere-2-2-text-2',
      type: 'text',
      title: 'Ulike former for bedrageri',
      content: `**Forsikringsbedrageri:**
Å gi uriktige eller ufullstendige opplysninger til forsikringsselskap for å oppnå erstatning man ikke har krav på.

**Trygdebedrageri:**
Å gi uriktige opplysninger til NAV for å få utbetalt ytelser man ikke har rett til.

**Investeringsbedrageri:**
Å lure investorer til å investere penger basert på falske forutsetninger.

**Identitetstyveri:**
Å utgi seg for å være en annen person for å oppnå økonomisk vinning.

**Nettbedrageri:**
Bedrageri som begås via internett, for eksempel gjennom falske nettbutikker eller phishing-e-poster.`
    },
    {
      id: 'rettslaere-2-2-def-4',
      type: 'definition',
      title: 'Skattesvik',
      content: `**Skattesvik** reguleres i skatteforvaltningsloven § 14-12 og straffeloven § 378-380. Det innebærer å gi uriktige eller ufullstendige opplysninger til skattemyndighetene, eller unnlate å gi pliktige opplysninger, med den følge at man unndrar skatt eller avgift.

**Typiske former for skattesvik:**
- Å ikke oppgi inntekter i skattemeldingen
- Å kreve fradrag man ikke har krav på
- Å operere med svart arbeid
- Å skjule formue i utlandet

Grovt skattesvik kan straffes med fengsel inntil 6 år.`
    },
    {
      id: 'rettslaere-2-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den første fasen i den klassiske hvitvaskingsprosessen?',
        options: [
          { id: 'a', text: 'Integrering', isCorrect: false },
          { id: 'b', text: 'Tilsløring', isCorrect: false },
          { id: 'c', text: 'Plassering', isCorrect: true },
          { id: 'd', text: 'Konvertering', isCorrect: false }
        ],
        hints: ['Tenk på den logiske rekkefølgen - hva må gjøres først med de kriminelle pengene?'],
        solution: 'Plassering er den første fasen, der de kriminelle midlene føres inn i det finansielle systemet. Deretter kommer tilsløring (sporene skjules) og til slutt integrering (pengene fremstår som lovlige).'
      }
    },
    {
      id: 'rettslaere-2-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom aktiv og passiv korrupsjon, og gi et eksempel på hver.',
        hints: ['Tenk på hvem som gir og hvem som mottar'],
        solution: `**Aktiv korrupsjon (bestikkelse):**
Den som *gir* eller *tilbyr* en utilbørlig fordel til noen i forbindelse med deres stilling.
*Eksempel:* En byggherre tilbyr en kommunal saksbehandler kr 50 000 for å godkjenne en byggesøknad uten å kreve nødvendig dokumentasjon.

**Passiv korrupsjon:**
Den som *mottar* eller *aksepterer* et tilbud om en utilbørlig fordel i forbindelse med sin stilling.
*Eksempel:* Saksbehandleren som tar imot de kr 50 000 og godkjenner søknaden.

Begge parter kan straffes - den som bestikker (aktiv) og den som lar seg bestikke (passiv). Strafferammen er lik for begge formene.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ole driver et byggefirma. Han betaler sine ansatte delvis svart (uten å trekke skatt) og fører ikke alle inntektene i regnskapet. Drøft hvilke straffbare forhold som kan være begått.',
        hints: [
          'Tenk på forholdet til skattemyndighetene',
          'Tenk på forholdet til de ansattes rettigheter',
          'Vurder regnskapsføringen'
        ],
        solution: `**Mulige straffbare forhold:**

**1. Skattesvik (skatteforvaltningsloven § 14-12):**
- Ole unndrar arbeidsgiveravgift ved å ikke rapportere full lønn
- Han unndrar inntektsskatt ved å holde inntekter utenfor regnskapet
- De ansatte unndrar inntektsskatt på sin svarte lønn

**2. Regnskapsovertredelse (straffeloven § 392-393):**
- Ole fører ikke fullstendig og korrekt regnskap
- Han gir uriktige opplysninger i årsregnskap/selvangivelse

**3. Trygdebedrageri (straffeloven § 371):**
- De ansatte kan motta trygdeytelser de ikke har krav på basert på registrert inntekt

**4. Brudd på arbeidsmiljøloven:**
- De ansatte får ikke korrekte lønnsslipper
- Pensjonsinnbetalinger blir for lave
- Feriepengegrunnlaget blir feil

**5. Hvitvasking (straffeloven § 337):**
- De unndratte skattepengene er utbytte fra straffbar handling
- Ole hvitvasker disse ved å bruke dem i virksomheten

**Konsekvenser:**
Ole risikerer betydelige fengselsstraffer, skattekrav med tilleggsskatt, og konkurskarantene. De ansatte kan også straffes for medvirkning til skatteunndragelse.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de fire vilkårene for bedrageri og forklar hvordan de henger sammen.',
        hints: ['Se straffeloven § 371'],
        solution: `**De fire vilkårene for bedrageri:**

**1. Villedende atferd:**
Gjerningspersonen må ha fremkalt, styrket eller utnyttet en villfarelse hos fornærmede. Dette kan være aktiv løgn, tilbakeholdelse av informasjon, eller utnyttelse av en eksisterende misforståelse.

**2. Årsakssammenheng:**
Villfarelsen må ha fått fornærmede til å gjøre en handling - typisk å gi fra seg penger eller verdier. Det må være en klar kobling mellom villfarelsen og handlingen.

**3. Tap:**
Handlingen må ha voldt tap eller fare for tap for fornærmede eller en tredjeperson. Tapet er typisk økonomisk, men kan også være tap av andre rettigheter.

**4. Vinnings hensikt:**
Gjerningspersonen må ha handlet med forsett om å skaffe seg eller andre en uberettiget vinning. Det kreves ikke at vinningen faktisk oppnås.

**Sammenhengen:**
Vilkårene utgjør en kjede: Villfarelse → Handling → Tap → Vinning. Alle leddene må være oppfylt, og det må være årsakssammenheng mellom dem.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en form for økonomisk kriminalitet?',
        options: [
          { id: 'a', text: 'Hvitvasking', isCorrect: false },
          { id: 'b', text: 'Ran av bank', isCorrect: true },
          { id: 'c', text: 'Innsidehandel', isCorrect: false },
          { id: 'd', text: 'Skattesvik', isCorrect: false }
        ],
        hints: ['Tenk på hva som kjennetegner økonomisk kriminalitet'],
        solution: 'Ran av bank er vinningskriminalitet, men ikke økonomisk kriminalitet i snever forstand. Økonomisk kriminalitet kjennetegnes ved at den typisk begås av personer i betrodde stillinger, involverer komplekse transaksjoner, og utnytter tillitsforhold.'
      }
    },
    {
      id: 'rettslaere-2-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-2-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilke samfunnsmessige konsekvenser økonomisk kriminalitet har, og vurder hvorfor denne formen for kriminalitet kan være vanskelig å bekjempe.',
        hints: [
          'Tenk på tilliten til samfunnsinstitusjoner',
          'Tenk på ressursene som trengs for etterforskning',
          'Vurder hvem som typisk begår slik kriminalitet'
        ],
        solution: `**Samfunnsmessige konsekvenser:**

**1. Økonomiske tap:**
- Tap av skatteinntekter (skattesvik)
- Økte kostnader for forbrukere (korrupsjon)
- Svekket konkurranse (kartelldannelse)
- Finansielle kriser (manipulasjon av markeder)

**2. Tillitssvikt:**
- Svekket tillit til offentlige institusjoner
- Svekket tillit til næringslivet
- Undergraving av demokratiske prosesser

**3. Konkurransevridning:**
- Ærlige aktører taper for de som jukser
- Innovasjon hemmes når korrupsjon belønnes

**Utfordringer ved bekjempelse:**

**1. Kompleksitet:**
- Transaksjonene er ofte svært komplekse
- Involverer gjerne flere land og jurisdiksjoner
- Krever spesialkompetanse å etterforske

**2. Ressurser:**
- Gjerningspersonene har ofte betydelige ressurser
- Kan leie de beste advokatene
- Lang saksbehandlingstid

**3. Oppdagelsesrisiko:**
- Mange tilfeller oppdages aldri
- Manglende insentiver til varsling
- Offer og gjerningsperson kan ha sammenfallende interesser (korrupsjon)

**4. Globalisering:**
- Penger flyttes lett over landegrenser
- Skatteparadiser tilbyr hemmelighold
- Begrenset internasjonalt samarbeid`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 3: Internasjonal rett
// ============================================================================

export const CHAPTER_RETTSLAERE_2_3: TextbookChapter = {
  id: 'rettslaere-2-3',
  courseId: 'rettslaere-2',
  chapterNumber: '3',
  title: 'Internasjonal rett',
  description: 'Innføring i folkeretten, menneskerettigheter og internasjonale domstoler.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for hovedtrekk i folkeretten og dens betydning for Norge',
    'drøfte menneskerettighetenes stilling i norsk rett',
    'analysere internasjonale tvister og konflikter i lys av folkeretten'
  ],
  content: [
    {
      id: 'rettslaere-2-3-intro',
      type: 'text',
      content: `Internasjonal rett, også kalt folkerett, regulerer forholdet mellom stater og internasjonale organisasjoner. I en stadig mer globalisert verden har folkeretten fått økende betydning, og den påvirker norsk rett på mange områder.

**Hovedkategorier i folkeretten:**

- **Traktatrett** - avtaler mellom stater
- **Sedvanerett** - praksis som er blitt bindende over tid
- **Alminnelige rettsprinsipper** - grunnleggende prinsipper anerkjent av de fleste rettssystemer
- **Internasjonale organisasjoners vedtak** - resolusjoner fra FN, EU-direktiver mv.`
    },
    {
      id: 'rettslaere-2-3-def-1',
      type: 'definition',
      title: 'Folkerettens kilder',
      content: `Folkerettens kilder er angitt i Statuttene for Den internasjonale domstol (ICJ) artikkel 38:

**Primære kilder:**
1. **Internasjonale konvensjoner** (traktater) - skriftlige avtaler mellom stater
2. **Internasjonal sedvane** - alminnelig praksis som er akseptert som rett
3. **Alminnelige rettsprinsipper** - prinsipper anerkjent av siviliserte nasjoner

**Subsidiære kilder:**
4. **Rettspraksis** - avgjørelser fra internasjonale domstoler
5. **Juridisk teori** - lærdes skrifter`
    },
    {
      id: 'rettslaere-2-3-text-1',
      type: 'text',
      title: 'Menneskerettighetene',
      content: `Menneskerettighetene er rettigheter som tilkommer alle mennesker i kraft av å være menneske. De viktigste internasjonale menneskerettighetsinstrumentene er:

**FNs menneskerettighetskonvensjoner:**
- Verdenserklæringen om menneskerettigheter (1948)
- FN-konvensjonen om sivile og politiske rettigheter (1966)
- FN-konvensjonen om økonomiske, sosiale og kulturelle rettigheter (1966)
- Barnekonvensjonen (1989)
- Kvinnekonvensjonen (1979)

**Den europeiske menneskerettighetskonvensjon (EMK):**
Vedtatt av Europarådet i 1950, ratifisert av Norge i 1952. EMK gir individer rett til å klage til Den europeiske menneskerettighetsdomstol (EMD) i Strasbourg.`
    },
    {
      id: 'rettslaere-2-3-def-2',
      type: 'definition',
      title: 'Menneskerettsloven',
      content: `**Menneskerettsloven** av 1999 inkorporerer sentrale menneskerettighetskonvensjoner i norsk rett:

- Den europeiske menneskerettighetskonvensjon (EMK)
- FN-konvensjonen om sivile og politiske rettigheter
- FN-konvensjonen om økonomiske, sosiale og kulturelle rettigheter
- Barnekonvensjonen
- Kvinnekonvensjonen

**Menneskerettsloven § 3** fastslår at disse konvensjonene **går foran** annen norsk lovgivning ved motstrid. Dette gir menneskerettighetene en særlig sterk stilling i norsk rett.`
    },
    {
      id: 'rettslaere-2-3-example-1',
      type: 'example',
      title: 'Eksempel: EMK artikkel 8 - Retten til privatliv',
      problem: 'Politiet ønsker å bruke overvåkingskameraer med ansiktsgjenkjenning på offentlige plasser for å identifisere mistenkte kriminelle. Hvordan må dette vurderes opp mot EMK artikkel 8?',
      solution: `**EMK artikkel 8 - Retten til respekt for privatliv:**

*"Enhver har rett til respekt for sitt privatliv og familieliv, sitt hjem og sin korrespondanse."*

**Vurdering:**

**1. Inngrep i rettigheten?**
Overvåking med ansiktsgjenkjenning på offentlige plasser utgjør et inngrep i retten til privatliv. Selv om man er på offentlig sted, har man en berettiget forventning om at ens bevegelser ikke systematisk overvåkes og registreres.

**2. Er inngrepet lovhjemlet?**
Inngrepet må ha hjemmel i lov. Politiloven og straffeprosessloven må gi tilstrekkelig klart grunnlag for slik overvåking.

**3. Er inngrepet nødvendig i et demokratisk samfunn?**
Inngrepet må:
- Svare til et tvingende samfunnsmessig behov
- Stå i et rimelig forhold til formålet (proporsjonalitet)
- Begrunnes med relevante og tilstrekkelige grunner

**Konklusjon:**
Masseovervåking med ansiktsgjenkjenning er problematisk under EMK. Det må foreligge konkrete, begrunne mistanker og klare rettslige rammer. Generell overvåking uten mistanke vil trolig krenke artikkel 8.`
    },
    {
      id: 'rettslaere-2-3-text-2',
      type: 'text',
      title: 'Internasjonale domstoler',
      content: `**Den internasjonale domstol (ICJ):**
FNs hoveddomstol med sete i Haag. Avgjør tvister mellom stater og gir rådgivende uttalelser til FN-organer.

**Den europeiske menneskerettighetsdomstol (EMD):**
Europarådets domstol i Strasbourg. Behandler klager fra individer og stater om brudd på EMK.

**Den internasjonale straffedomstol (ICC):**
Straffeforfølger enkeltpersoner for folkemord, forbrytelser mot menneskeheten, krigsforbrytelser og aggresjon.

**EFTA-domstolen:**
Avgjør tvister om tolkning av EØS-avtalen for EFTA-landene Norge, Island og Liechtenstein.

**EU-domstolen:**
Den europeiske unions domstol i Luxembourg. Har betydning for Norge gjennom EØS-avtalen.`
    },
    {
      id: 'rettslaere-2-3-def-3',
      type: 'definition',
      title: 'Folkerettslig ansvar',
      content: `**Statsansvar** oppstår når en stat bryter sine folkerettslige forpliktelser. Staten kan da bli pålagt:

- Å stanse den folkerettsstridige handlingen
- Å gi erstatning for økonomisk tap
- Å gi oppreisning (satisfaction) for ikke-økonomisk skade
- Å garantere at krenkelsen ikke gjentas

**Individuelt straffeansvar** kan gjøres gjeldende for alvorlige internasjonale forbrytelser:
- Folkemord
- Forbrytelser mot menneskeheten
- Krigsforbrytelser
- Aggresjonsforbrytelsen`
    },
    {
      id: 'rettslaere-2-3-text-3',
      type: 'text',
      title: 'Humanitærrett',
      content: `**Humanitærrett** (krigens folkerett) regulerer væpnede konflikter. Formålet er å begrense lidelsene under krig ved å:

- Beskytte personer som ikke deltar i kamphandlingene (sivile, sårede, krigsfanger)
- Regulere hvilke våpen og metoder som kan brukes

**De viktigste kildene er:**
- Genèvekonvensjonene av 1949 med tilleggsprotokoller
- Haag-konvensjonene
- Ulike våpenkonvensjoner (f.eks. forbud mot landminer, klasevåpen)

**Grunnleggende prinsipper:**
1. **Distinksjon** - Skille mellom stridende og sivile
2. **Proporsjonalitet** - Militær fordel må stå i forhold til sivile tap
3. **Militær nødvendighet** - Kun nødvendige militære tiltak er tillatt
4. **Humanitet** - Unødige lidelser skal unngås`
    },
    {
      id: 'rettslaere-2-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er virkningen av menneskerettsloven § 3 ved motstrid mellom norsk lov og EMK?',
        options: [
          { id: 'a', text: 'Norsk lov går foran', isCorrect: false },
          { id: 'b', text: 'EMK går foran', isCorrect: true },
          { id: 'c', text: 'Den nyeste loven går foran', isCorrect: false },
          { id: 'd', text: 'Domstolen må avvise saken', isCorrect: false }
        ],
        hints: ['Menneskerettsloven gir konvensjonene en særlig stilling'],
        solution: 'Menneskerettsloven § 3 fastslår at konvensjonene (inkludert EMK) skal gå foran annen norsk lovgivning ved motstrid. Dette sikrer at menneskerettighetene har forrang i norsk rett.'
      }
    },
    {
      id: 'rettslaere-2-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de tre vilkårene som må være oppfylt for at inngrep i EMK-rettigheter skal være lovlige.',
        hints: ['EMK artikkel 8-11 har en felles struktur for inngrepshjemler'],
        solution: `**De tre vilkårene for lovlige inngrep i EMK-rettigheter:**

**1. Lovhjemmel:**
Inngrepet må være "i samsvar med loven" eller "foreskrevet ved lov". Kravet innebærer at:
- Det må finnes et rettslig grunnlag i nasjonal rett
- Loven må være tilgjengelig for borgerne
- Loven må være tilstrekkelig klar og presis

**2. Legitimt formål:**
Inngrepet må forfølge ett av de formålene som er listet opp i konvensjonen, typisk:
- Nasjonal sikkerhet
- Offentlig trygghet
- Forebygging av kriminalitet
- Beskyttelse av helse eller moral
- Beskyttelse av andres rettigheter

**3. Nødvendig i et demokratisk samfunn:**
Inngrepet må være:
- Begrunnet i et tvingende samfunnsmessig behov
- Proporsjonalt i forhold til formålet
- Begrunnet med relevante og tilstrekkelige grunner

Alle tre vilkårene må være oppfylt for at inngrepet skal være lovlig. Bevisbyrden ligger hos staten.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom statsansvar og individuelt straffeansvar i folkeretten, og gi eksempler på situasjoner der begge kan gjøres gjeldende.',
        hints: [
          'Tenk på hvem som holdes ansvarlig',
          'Tenk på hvilke sanksjoner som kan ilegges'
        ],
        solution: `**Statsansvar vs. individuelt straffeansvar:**

**Statsansvar:**
- *Hvem:* Staten som sådan
- *Grunnlag:* Brudd på folkerettslige forpliktelser
- *Sanksjoner:* Erstatning, oppreisning, garantier
- *Prosess:* Mellomstatlige forhandlinger, ICJ, voldgift

**Individuelt straffeansvar:**
- *Hvem:* Enkeltpersoner (statsledere, militære ledere, soldater)
- *Grunnlag:* Folkemord, forbrytelser mot menneskeheten, krigsforbrytelser
- *Sanksjoner:* Fengselsstraff
- *Prosess:* ICC, nasjonale domstoler (universell jurisdiksjon)

**Eksempel: Krigsforbrytelser i en væpnet konflikt**

*Statsansvar:*
Stat A har angrepet sivile mål i Stat B i strid med humanitærretten. Stat B kan:
- Kreve erstatning fra Stat A for skadene
- Bringe saken inn for ICJ
- Kreve garantier mot gjentakelse

*Individuelt straffeansvar:*
General X beordret angrepene på sivile. Han kan:
- Tiltales ved ICC for krigsforbrytelser
- Straffeforfølges nasjonalt
- Risikere fengselsstraff

De to formene for ansvar utelukker ikke hverandre - både staten og enkeltpersoner kan holdes ansvarlige for samme hendelser.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken domstol kan individer klage til ved brudd på Den europeiske menneskerettighetskonvensjon?',
        options: [
          { id: 'a', text: 'Den internasjonale domstol (ICJ)', isCorrect: false },
          { id: 'b', text: 'Den europeiske menneskerettighetsdomstol (EMD)', isCorrect: true },
          { id: 'c', text: 'Den internasjonale straffedomstol (ICC)', isCorrect: false },
          { id: 'd', text: 'EU-domstolen', isCorrect: false }
        ],
        hints: ['Tenk på hvilken organisasjon EMK hører til'],
        solution: 'Den europeiske menneskerettighetsdomstol (EMD) i Strasbourg behandler klager fra individer og stater om brudd på EMK. EMD er opprettet av Europarådet, ikke EU.'
      }
    },
    {
      id: 'rettslaere-2-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de fire grunnleggende prinsippene i humanitærretten.',
        hints: ['Tenk på hva formålet med humanitærretten er'],
        solution: `**De fire grunnleggende prinsippene i humanitærretten:**

**1. Distinksjonsprinsippet:**
Partene i en væpnet konflikt skal til enhver tid skille mellom:
- Stridende og sivile personer
- Militære mål og sivile objekter
Kun stridende og militære mål kan lovlig angripes.

**2. Proporsjonalitetsprinsippet:**
Et angrep er forbudt dersom det kan forventes å forårsake sivile tap som er overdrevne i forhold til den forventede militære fordelen. Man må veie militær nytte mot sivile kostnader.

**3. Militær nødvendighet:**
Kun tiltak som er nødvendige for å oppnå legitime militære mål er tillatt. Dette begrenser hvilke midler og metoder som kan brukes, selv mot lovlige militære mål.

**4. Humanitetsprinsippet:**
Unødige lidelser skal unngås. Dette innebærer blant annet:
- Forbud mot visse våpen (f.eks. giftvåpen, blendende laservåpen)
- Plikt til å ta vare på sårede og syke
- Behandling av krigsfanger med verdighet

Prinsippene utfyller hverandre og skal anvendes samlet for å gi best mulig beskyttelse i væpnede konflikter.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-3-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft forholdet mellom nasjonal suverenitet og internasjonale menneskerettighetsforpliktelser. Når kan internasjonal inngripen være berettiget?',
        hints: [
          'Tenk på FN-paktens prinsipper',
          'Vurder "Responsibility to Protect" (R2P)',
          'Tenk på når menneskerettighetsbrudd kan rettferdiggjøre innblanding'
        ],
        solution: `**Nasjonal suverenitet vs. menneskerettigheter:**

**Suverenitetsgrunnsetningen:**
FN-pakten bygger på prinsippet om statenes suverene likhet og forbud mot innblanding i interne anliggender. Tradisjonelt har dette vært et absolutt prinsipp.

**Menneskerettighetenes utvikling:**
Etter andre verdenskrig har det utviklet seg en forståelse av at visse rettigheter er så grunnleggende at de ikke kan anses som rent interne anliggender.

**Responsibility to Protect (R2P):**
FN anerkjenner nå prinsippet om at:
1. Stater har hovedansvaret for å beskytte sin befolkning
2. Det internasjonale samfunnet skal bistå stater i dette
3. Ved grove overgrep kan det internasjonale samfunnet gripe inn

**Når kan internasjonal inngripen være berettiget?**
- Folkemord
- Forbrytelser mot menneskeheten
- Krigsforbrytelser
- Etnisk rensing

**Krav til inngripen:**
- Sikkerhetsrådets autorisasjon (hovedregel)
- Uttømming av fredelige midler
- Proporsjonalitet
- Rimelig utsikt til å bedre situasjonen

**Utfordringer:**
- Hvem definerer når terskelen er nådd?
- Risiko for misbruk av humanitære argumenter
- Manglende konsistens i det internasjonale samfunnets respons

Moderne folkerett anerkjenner at suverenitet ikke er absolutt, men balanserer dette mot behovet for stabilitet og forutsigbarhet i internasjonale relasjoner.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 4: EU-rett og EØS-avtalen
// ============================================================================

export const CHAPTER_RETTSLAERE_2_4: TextbookChapter = {
  id: 'rettslaere-2-4',
  courseId: 'rettslaere-2',
  chapterNumber: '4',
  title: 'EU-rett og EØS-avtalen',
  description: 'EØS-avtalens betydning for norsk rett, de fire friheter og forholdet til EU.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for hovedtrekkene i EØS-avtalen og dens betydning for Norge',
    'drøfte de fire frihetene og deres praktiske betydning',
    'analysere forholdet mellom EØS-rett og norsk rett'
  ],
  content: [
    {
      id: 'rettslaere-2-4-intro',
      type: 'text',
      content: `EØS-avtalen (Det europeiske økonomiske samarbeidsområde) trådte i kraft i 1994 og gir Norge tilgang til EUs indre marked uten å være EU-medlem. Avtalen har enorm betydning for norsk næringsliv og rettssystem.

**EØS-avtalen innebærer:**
- Deltakelse i det indre marked med de fire friheter
- Overtakelse av EUs regelverk på avtalens områder
- Underlagt EFTA-domstolens og ESAs kontroll
- Ikke deltakelse i EUs felles utenriks- og sikkerhetspolitikk
- Ikke deltakelse i euro-samarbeidet
- Ikke deltakelse i justis- og innenrikssamarbeidet (med unntak av Schengen)`
    },
    {
      id: 'rettslaere-2-4-def-1',
      type: 'definition',
      title: 'De fire friheter',
      content: `EØS-avtalens kjerne er **de fire friheter**, som sikrer fri bevegelighet innenfor EØS-området:

1. **Fri bevegelighet for varer** - Varer kan bevege seg fritt uten tollhindringer eller kvantitative restriksjoner

2. **Fri bevegelighet for personer** - Borgere kan fritt flytte til andre EØS-land for å arbeide, studere eller bosette seg

3. **Fri bevegelighet for tjenester** - Tjenester kan tilbys på tvers av landegrenser uten diskriminering

4. **Fri bevegelighet for kapital** - Kapital kan investeres fritt i hele EØS-området`
    },
    {
      id: 'rettslaere-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Fri bevegelighet for arbeidskraft',
      problem: 'Maria fra Spania ønsker å arbeide som sykepleier i Norge. Hvilke rettigheter gir EØS-avtalen henne?',
      solution: `**EØS-rettigheter for Maria:**

**1. Rett til innreise og opphold:**
Maria har rett til å reise til Norge uten visum og oppholde seg her for å søke arbeid. Etter å ha fått jobb har hun rett til oppholdstillatelse.

**2. Rett til likebehandling:**
Maria skal behandles likt med norske arbeidstakere når det gjelder:
- Lønn og arbeidsvilkår
- Tilgang til bolig
- Sosiale ytelser
- Skattefordeler
- Fagforeningsmedlemskap

**3. Godkjenning av kvalifikasjoner:**
Marias spanske sykepleieutdanning skal anerkjennes i Norge gjennom yrkeskvalifikasjonsdirektivet. Sykepleier er et regulert yrke med automatisk anerkjennelse.

**4. Familiens rettigheter:**
Marias familiemedlemmer (ektefelle, barn) har også rett til å følge med og oppholde seg i Norge.

**5. Rett til å bli:**
Etter fem års lovlig opphold får Maria rett til permanent opphold, og kan ikke utvises selv om hun mister jobben.`
    },
    {
      id: 'rettslaere-2-4-text-1',
      type: 'text',
      title: 'EØS-rettens kilder og gjennomføring',
      content: `**EØS-rettens kilder:**

**Primærretten:**
- EØS-avtalen med vedlegg og protokoller
- Tilpasninger for EFTA-landene

**Sekundærretten:**
- Forordninger - gjelder direkte etter gjennomføring
- Direktiver - må gjennomføres i nasjonal rett
- Beslutninger - bindende for dem de retter seg mot

**Gjennomføring i norsk rett:**

Norge har valgt en **dualistisk** modell, som betyr at EØS-regler må gjennomføres i norsk lov for å få virkning. Dette skjer gjennom:
- Inkorporasjon - EØS-regelen vedtas som norsk lov
- Transformasjon - Norsk lov tilpasses for å oppfylle EØS-regelen

**EØS-loven § 2:** Bestemmelser i lov som gjennomfører EØS-avtalen, skal ved motstrid gå foran andre bestemmelser.`
    },
    {
      id: 'rettslaere-2-4-def-2',
      type: 'definition',
      title: 'ESA og EFTA-domstolen',
      content: `**ESA (EFTA Surveillance Authority):**
EFTAs overvåkingsorgan med ansvar for å påse at EØS-avtalen overholdes av EFTA-landene (Norge, Island, Liechtenstein). ESA kan:
- Innlede traktatbruddsaker
- Treffe vedtak i konkurransesaker
- Godkjenne statsstøtte

**EFTA-domstolen:**
Domstol med sete i Luxembourg som:
- Avgjør traktatbruddsaker anlagt av ESA
- Gir rådgivende uttalelser til nasjonale domstoler om tolkning av EØS-retten
- Behandler anker over ESAs vedtak

EFTA-domstolen tilsvarer EU-domstolen for EFTA-statene, og skal sikre ensartet tolkning av EØS-retten.`
    },
    {
      id: 'rettslaere-2-4-text-2',
      type: 'text',
      title: 'Begrensninger i de fire friheter',
      content: `De fire frihetene er ikke absolutte. Statene kan opprettholde restriksjoner som er begrunnet i:

**Traktatfestede unntak:**
- Offentlig orden
- Offentlig sikkerhet
- Folkehelsen

**Tvingende allmenne hensyn (læren om "rule of reason"):**
- Forbrukerbeskyttelse
- Miljøvern
- Sosiale hensyn
- Kulturelle hensyn

**Vilkår for lovlige restriksjoner:**
1. Formålet må være legitimt
2. Tiltaket må være egnet til å oppnå formålet
3. Tiltaket må være nødvendig (ikke finnes mindre inngripende alternativer)
4. Tiltaket må være proporsjonalt`
    },
    {
      id: 'rettslaere-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Vinmonopolet og EØS-retten',
      problem: 'Vinmonopolet har monopol på salg av alkohol over en viss styrke i Norge. Er dette forenlig med EØS-avtalens regler om fri vareflyt?',
      solution: `**Vurdering av Vinmonopolets forenlighet med EØS-retten:**

**1. Er det et inngrep i fri vareflyt?**
Ja, et statlig monopol på detaljsalg er i utgangspunktet en restriksjon på den frie vareflyten. Utenlandske produsenter må selge gjennom monopolet.

**2. Er monopolet diskriminerende?**
EØS-avtalen artikkel 16 (tilsvarende TEUV artikkel 37) tillater statlige handelsmonopoler forutsatt at de ikke diskriminerer:
- Vinmonopolet kjøper varer fra både norske og utenlandske produsenter
- Innkjøpskriteriene skal være objektive og ikke-diskriminerende
- Prissettingen skal ikke favorisere norske produkter

**3. Kan monopolet begrunnes?**
Norge har begrunnet Vinmonopolet i folkehelsehensyn (redusere alkoholforbruk). EFTA-domstolen har akseptert at:
- Alkoholpolitikk er et legitimt hensyn
- Norge har handlingsrom til å fastsette beskyttelsesnivået
- Monopolet er egnet til å begrense tilgjengeligheten

**Konklusjon:**
Vinmonopolet er forenlig med EØS-avtalen så lenge det drives på en ikke-diskriminerende måte. Norge må sikre at innkjøp skjer etter objektive kriterier og at utenlandske produsenter har lik tilgang.`
    },
    {
      id: 'rettslaere-2-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en av de fire frihetene i EØS-avtalen?',
        options: [
          { id: 'a', text: 'Fri bevegelighet for varer', isCorrect: false },
          { id: 'b', text: 'Fri bevegelighet for energi', isCorrect: true },
          { id: 'c', text: 'Fri bevegelighet for tjenester', isCorrect: false },
          { id: 'd', text: 'Fri bevegelighet for kapital', isCorrect: false }
        ],
        hints: ['De fire frihetene handler om varer, personer, tjenester og kapital'],
        solution: 'De fire frihetene er: varer, personer, tjenester og kapital. Energi er ikke en egen frihet, selv om energimarkedet reguleres av EØS-regler.'
      }
    },
    {
      id: 'rettslaere-2-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom forordninger og direktiver i EØS-retten, og hvordan de gjennomføres i norsk rett.',
        hints: ['Tenk på hvor detaljert EU/EØS-reglene er'],
        solution: `**Forordninger:**
- Er bindende i alle deler og gjelder umiddelbart i EU
- I EØS må de gjennomføres, men skal gjennomføres "som sådan"
- Gir lite rom for nasjonale tilpasninger
- Eksempel: Personvernforordningen (GDPR)

**Direktiver:**
- Angir et mål som skal oppnås
- Medlemsstatene velger selv form og midler for gjennomføringen
- Gir rom for nasjonale tilpasninger innenfor rammene
- Eksempel: Arbeidstidsdirektivet

**Gjennomføring i norsk rett:**
Norge har en dualistisk tradisjon, så EØS-regler må alltid gjennomføres:
- Forordninger inkorporeres typisk ved forskrift som gjør dem til del av norsk rett
- Direktiver transformeres ved at norsk lov/forskrift tilpasses

EØS-loven § 2 sikrer at gjennomførte EØS-regler har forrang ved motstrid med annen norsk rett.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et norsk selskap nektes å etablere seg i Sverige med begrunnelse i at de ikke oppfyller svenske miljøkrav som er strengere enn EØS-minimumskravene. Drøft om dette er forenlig med EØS-avtalen.',
        hints: [
          'Vurder om det foreligger et inngrep i etableringsfriheten',
          'Vurder om miljøkravene kan rettferdiggjøres',
          'Vurder proporsjonaliteten'
        ],
        solution: `**Drøftelse av etableringsrestriksjoner:**

**1. Foreligger det en restriksjon?**
Ja, krav som gjør det vanskeligere for utenlandske selskaper å etablere seg, utgjør en restriksjon på etableringsfriheten (EØS-avtalen artikkel 31).

**2. Kan restriksjonen rettferdiggjøres?**

*Legitimt formål:*
Miljøvern er anerkjent som et tvingende allment hensyn som kan begrunne restriksjoner på de fire friheter.

*Egnethet:*
Strengere miljøkrav må faktisk bidra til miljøbeskyttelse. Kravet må ha en reell miljøeffekt.

*Nødvendighet:*
Er det strengere kravet nødvendig, eller finnes det mindre inngripende alternativer som oppnår samme miljøbeskyttelse?

*Proporsjonalitet:*
Byrden for det norske selskapet må stå i et rimelig forhold til miljøgevinsten.

**3. Ikke-diskriminering:**
Kravet må gjelde likt for svenske og utenlandske selskaper. Hvis svenske selskaper har lettere for å oppfylle kravet (f.eks. på grunn av eksisterende infrastruktur), kan det utgjøre indirekte diskriminering.

**Konklusjon:**
Sverige kan opprettholde strengere miljøkrav enn EØS-minimum, forutsatt at:
- Kravene ikke diskriminerer utenlandske selskaper
- Kravene er proporsjonale og nødvendige
- Det finnes en reell miljøbegrunnelse
- Eventuelle overgangsordninger vurderes for å lette tilpasningen`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for ESAs og EFTA-domstolens roller i EØS-samarbeidet.',
        hints: ['Tenk på hva EU-kommisjonen og EU-domstolen gjør i EU'],
        solution: `**ESA (EFTA Surveillance Authority):**

*Rolle:* Tilsvarer EU-kommisjonens overvåkingsrolle for EFTA-landene.

*Oppgaver:*
- Overvåke at EFTA-statene oppfyller sine EØS-forpliktelser
- Innlede traktatbruddsaker mot stater som bryter EØS-retten
- Treffe vedtak i konkurransesaker (karteller, misbruk av dominans)
- Godkjenne eller forby statsstøtte
- Føre tilsyn med offentlige anskaffelser

*Prosess ved traktatbrudd:*
1. Formell henvendelse til staten
2. Grunngitt uttalelse
3. Sak for EFTA-domstolen

**EFTA-domstolen:**

*Rolle:* Tilsvarer EU-domstolen for EFTA-statene.

*Oppgaver:*
- Avgjøre traktatbruddsaker anlagt av ESA
- Gi rådgivende uttalelser til nasjonale domstoler om EØS-rettens tolkning
- Behandle anker over ESAs vedtak
- Avgjøre erstatningssaker

*Betydning:*
EFTA-domstolens uttalelser er formelt rådgivende for norske domstoler, men følges i praksis. Domstolen skal sikre ensartet tolkning og anvender EU-domstolens praksis som tolkningskilde.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er virkningen av EØS-loven § 2 ved motstrid mellom en gjennomført EØS-regel og annen norsk lov?',
        options: [
          { id: 'a', text: 'Den norske loven går foran', isCorrect: false },
          { id: 'b', text: 'Den nyeste loven går foran', isCorrect: false },
          { id: 'c', text: 'EØS-regelen går foran', isCorrect: true },
          { id: 'd', text: 'Saken må avgjøres av EFTA-domstolen', isCorrect: false }
        ],
        hints: ['EØS-loven gir EØS-reglene en særlig stilling'],
        solution: 'EØS-loven § 2 fastslår at bestemmelser i lov som tjener til å oppfylle Norges forpliktelser etter EØS-avtalen, i tilfelle konflikt skal gå foran andre bestemmelser som regulerer samme forhold. Dette sikrer EØS-rettens forrang i norsk rett.'
      }
    },
    {
      id: 'rettslaere-2-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-4-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft demokratiske utfordringer ved EØS-avtalen, herunder "demokratisk underskudd" og Norges manglende stemmerett i EU.',
        hints: [
          'Tenk på hvem som lager reglene Norge må følge',
          'Vurder Norges muligheter til å påvirke',
          'Tenk på reservasjonsretten'
        ],
        solution: `**Demokratiske utfordringer ved EØS-avtalen:**

**1. Manglende stemmerett:**
- Norge deltar ikke i EUs beslutningsprosesser
- Har ikke stemmerett i Europaparlamentet eller Rådet
- Kan ikke påvirke regler som likevel blir bindende

**2. Begrenset påvirkningskraft:**
- Norge kan delta i ekspertgrupper og komiteer
- Kan fremme synspunkter i konsultasjonsprosesser
- Men har ingen formell innflytelse på sluttresultatet

**3. Reservasjonsretten:**
- Norge kan i prinsippet reservere seg mot nye EØS-regler
- Men aldri brukt, fordi konsekvensene er usikre
- EU kan sette deler av avtalen "ut av kraft" ved reservasjon

**4. "Demokratisk underskudd":**
- Regler vedtas uten norsk folkelig deltakelse
- Stortinget har begrenset reell innflytelse
- EØS-komiteen tar inn regler med minimal debatt

**5. Fordeler ved ordningen:**
- Tilgang til det indre marked er økonomisk viktig
- Norge beholder suverenitet på områder utenfor EØS
- Utenforskap i EU ville gitt enda mindre innflytelse

**Mulige løsninger:**
- Styrket Stortingets kontroll med EØS-saker
- Bedre utnyttelse av påvirkningsmuligheter
- Debatt om fullt EU-medlemskap vs. reforhandling
- Økt transparens om EØS-prosessene

Avveiningen står mellom markedstilgang og selvråderett, noe som er et politisk valg.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 5: Miljørett
// ============================================================================

export const CHAPTER_RETTSLAERE_2_5: TextbookChapter = {
  id: 'rettslaere-2-5',
  courseId: 'rettslaere-2',
  chapterNumber: '5',
  title: 'Miljørett',
  description: 'Rettslige rammer for miljøvern, klimarett og bærekraftig utvikling.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for sentrale miljørettslige prinsipper og regelverk',
    'drøfte forholdet mellom miljøhensyn og andre samfunnsinteresser',
    'vurdere rettslige virkemidler for å oppnå bærekraftig utvikling'
  ],
  content: [
    {
      id: 'rettslaere-2-5-intro',
      type: 'text',
      content: `Miljørett er et rettsområde som regulerer forholdet mellom mennesker og miljø. Med økende miljøutfordringer, særlig klimaendringer, har miljøretten fått stadig større betydning.

Miljøretten spenner over mange rettsområder:
- Forurensningsrett
- Naturmangfoldsrett
- Klimarett
- Plan- og bygningsrett
- Energirett

Grunnlaget for norsk miljørett finnes i **Grunnloven § 112** som gir enhver rett til et miljø som sikrer helsen, og til en natur der produksjonsevne og mangfold bevares.`
    },
    {
      id: 'rettslaere-2-5-def-1',
      type: 'definition',
      title: 'Grunnloven § 112 - Miljøparagrafen',
      content: `**Grunnloven § 112:**

*"Enhver har rett til et miljø som sikrer helsen, og til en natur der produksjonsevne og mangfold bevares. Naturens ressurser skal disponeres ut fra en langsiktig og allsidig betraktning som ivaretar denne rett også for etterslekten.*

*Borgerne har rett til kunnskap om naturmiljøets tilstand og om virkningene av planlagte og iverksatte inngrep i naturen, slik at de kan ivareta den rett de har etter foregående ledd.*

*Statens myndigheter skal iverksette tiltak som gjennomfører disse grunnsetninger."*

Bestemmelsen gir både en **rettighet** for borgerne og en **plikt** for staten til å beskytte miljøet.`
    },
    {
      id: 'rettslaere-2-5-text-1',
      type: 'text',
      title: 'Grunnleggende miljørettslige prinsipper',
      content: `**Føre-var-prinsippet:**
Ved risiko for alvorlig eller irreversibel miljøskade skal mangel på full vitenskapelig sikkerhet ikke brukes som grunn til å utsette kostnadseffektive tiltak.

**Forurenser betaler-prinsippet:**
Den som forurenser skal bære kostnadene ved forurensningen, inkludert tiltak for å forhindre, begrense og reparere skaden.

**Prinsippet om bærekraftig utvikling:**
Utvikling som tilfredsstiller dagens behov uten å ødelegge mulighetene for kommende generasjoner.

**Nærhetsprinsippet:**
Miljøproblemer bør løses så nær kilden som mulig.

**Integrasjonsprinsippet:**
Miljøhensyn skal integreres i all offentlig planlegging og beslutningsprosesser.`
    },
    {
      id: 'rettslaere-2-5-def-2',
      type: 'definition',
      title: 'Forurensningsloven',
      content: `**Forurensningsloven** av 1981 er den sentrale loven på forurensningsrettens område.

**Hovedregel:** Forurensning er forbudt uten tillatelse (§ 7)

**Tillatelsessystem:**
- Forurensende virksomhet må ha tillatelse fra forurensningsmyndigheten
- Tillatelsen kan sette vilkår om utslippsgrenser og rensekrav

**Ansvar ved forurensning:**
- Plikt til å avverge og begrense forurensning
- Tiltaksplikt ved akutt forurensning
- Erstatningsansvar for forurensningsskade

**Håndhevelse:**
- Pålegg om tiltak
- Tvangsmulkt
- Straffeansvar ved overtredelse`
    },
    {
      id: 'rettslaere-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Forurensning fra industribedrift',
      problem: 'En fabrikk slipper ut mer forurensning enn tillatelsen tillater. Naboer klager på helseproblemer og redusert boligverdi. Hvilke rettslige konsekvenser kan fabrikken møte?',
      solution: `**Rettslige konsekvenser:**

**1. Forvaltningsrettslige reaksjoner:**
- Pålegg om å redusere utslippene til tillatt nivå
- Pålegg om bedre renseutstyr
- Tvangsmulkt inntil pålegg etterleves
- Inndragning eller endring av tillatelsen

**2. Strafferettslige reaksjoner:**
Forurensningsloven hjemler straff for overtredelse av tillatelsesvilkår. Straffen kan være bøter eller fengsel.

**3. Erstatningsansvar:**
Forurensningsloven kapittel 8 fastslår objektivt ansvar for forurensningsskade. Naboene kan kreve erstatning for helseskader og redusert boligverdi.

**4. Sivilrettslige krav:**
Naboene kan kreve at forurensningen stanses etter naboloven, dersom den utgjør en urimelig ulempe.`
    },
    {
      id: 'rettslaere-2-5-text-2',
      type: 'text',
      title: 'Klimarett og Parisavtalen',
      content: `**Parisavtalen (2015):**
Internasjonal klimaavtale med mål om å begrense global oppvarming til 1,5-2 grader og øke evnen til klimatilpasning.

**Klimaloven (2017):**
Norsk lov som lovfester klimamålene med 90-95% utslippsreduksjon innen 2050 og årlig rapportering til Stortinget.

**Kvotesystemet:**
Norge deltar i EUs kvotesystem der bedrifter må ha kvoter for sine utslipp. Kvotene kan handles på markedet og totalantallet reduseres over tid.

**Klimasøksmål:**
Rettssaker der borgere saksøker staten for manglende klimatiltak. I Norge har det vært klimasøksmål om oljelisenser.`
    },
    {
      id: 'rettslaere-2-5-def-3',
      type: 'definition',
      title: 'Naturmangfoldloven',
      content: `**Naturmangfoldloven** av 2009 er Norges sentrale lov for vern av biologisk mangfold:

**Formål:** Sikre at naturen med dens biologiske, landskapsmessige og geologiske mangfold tas vare på.

**Viktige bestemmelser:**
- **§ 8:** Kunnskapsgrunnlaget - beslutninger skal bygge på tilstrekkelig kunnskap
- **§ 9:** Føre-var-prinsippet
- **§ 10:** Samlet belastning skal vurderes
- **§ 11:** Kostnadene ved miljøforringelse skal bæres av tiltakshaver

**Verneformer:**
Nasjonalparker, naturreservater, landskapsvernområder og biotopvern.`
    },
    {
      id: 'rettslaere-2-5-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer føre-var-prinsippet i miljøretten?',
        options: [
          { id: 'a', text: 'Man skal alltid velge det rimeligste alternativet', isCorrect: false },
          { id: 'b', text: 'Mangel på vitenskapelig sikkerhet skal ikke hindre tiltak mot alvorlig miljørisiko', isCorrect: true },
          { id: 'c', text: 'Forurenseren skal varsles før tiltak iverksettes', isCorrect: false },
          { id: 'd', text: 'Naboer skal varsles om planlagte miljøinngrep', isCorrect: false }
        ],
        hints: ['Tenk på hvordan man håndterer usikkerhet om miljøkonsekvenser'],
        solution: 'Føre-var-prinsippet innebærer at ved risiko for alvorlig miljøskade, skal mangel på full vitenskapelig sikkerhet ikke brukes som grunn til å utsette miljøtiltak.'
      }
    },
    {
      id: 'rettslaere-2-5-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for innholdet i Grunnloven § 112 og diskuter om bestemmelsen gir borgerne en individuell rett som kan håndheves for domstolene.',
        hints: ['Vurder bestemmelsens tre ledd', 'Tenk på klimasøksmålet'],
        solution: `**Innholdet i Grunnloven § 112:**

**Første ledd - Rettigheten:**
Gir enhver rett til et miljø som sikrer helsen og en natur der produksjonsevne og mangfold bevares.

**Andre ledd - Kunnskapsretten:**
Borgerne har rett til informasjon om miljøtilstand og konsekvenser av inngrep.

**Tredje ledd - Statens plikt:**
Staten skal iverksette tiltak som gjennomfører grunnsetningene.

**Kan bestemmelsen håndheves?**
Høyesterett fastslo i klimasøksmålet at § 112 kan brukes som skranke for forvaltningsvedtak, men terskelen for å konstatere brudd er høy og domstolene skal vise tilbakeholdenhet overfor politiske vurderinger.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-5-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft avveiningen mellom miljøhensyn og næringsinteresser i en situasjon der en bedrift søker om tillatelse til virksomhet som vil medføre utslipp av klimagasser.',
        hints: ['Tenk på forurensningslovens system', 'Vurder klimamål og kvotesystem'],
        solution: `**Avveining mellom miljø og næring:**

**For tillatelse:**
- Arbeidsplasser og verdiskaping
- Skatteinntekter
- Produkter samfunnet trenger
- Bedriften dekker utslippene med kvoter
- Beste tilgjengelige teknologi brukes

**Mot tillatelse:**
- Bidrar til global oppvarming
- Norges klimamål
- Føre-var-prinsippet
- Langsiktige kostnader for samfunnet
- Alternative løsninger finnes

**Myndighetenes vurdering:**
Forvaltningen har et vidt skjønn, men må bygge på korrekt faktum, ta relevante hensyn og begrunne vedtaket. Domstolene kan overprøve feil, men ikke den faglige avveiningen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-5-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva objektivt ansvar innebærer i forurensningsretten, og begrunn hvorfor dette ansvarsgrunnlaget er valgt.',
        hints: ['Tenk på hvem som er nærmest til å bære risikoen'],
        solution: `**Objektivt ansvar i forurensningsretten:**

**Hva innebærer det?**
Ansvar uten skyld - den som driver forurensende virksomhet er ansvarlig for skade uavhengig av om det er utvist uaktsomhet.

**Begrunnelse:**
1. **Risikofordeling:** Den som har nytte av virksomheten bør bære risikoen
2. **Prevensjon:** Strengt ansvar motiverer til forebygging
3. **Pulverisering:** Bedriften kan forsikre seg og fordele kostnadene
4. **Bevisutfordringer:** Vanskelig for skadelidte å bevise skyld
5. **Rettferdighet:** Forurenser betaler-prinsippet`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-5-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedregelen i forurensningsloven når det gjelder forurensning?',
        options: [
          { id: 'a', text: 'Forurensning er tillatt så lenge det ikke skader mennesker', isCorrect: false },
          { id: 'b', text: 'Forurensning er tillatt så lenge man betaler avgift', isCorrect: false },
          { id: 'c', text: 'Forurensning er forbudt uten tillatelse', isCorrect: true },
          { id: 'd', text: 'Forurensning er tillatt innenfor visse grenseverdier', isCorrect: false }
        ],
        hints: ['Se forurensningsloven § 7'],
        solution: 'Forurensningsloven § 7 fastslår at forurensning er forbudt uten tillatelse. Dette er et forbud med tillatelsesordning.'
      }
    },
    {
      id: 'rettslaere-2-5-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-5-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorvidt klimasøksmål kan være et effektivt virkemiddel for å fremtvinge sterkere klimatiltak fra statens side.',
        hints: ['Vurder erfaringer fra Norge og andre land', 'Tenk på maktfordelingen mellom domstoler og politiske organer'],
        solution: `**Klimasøksmål som virkemiddel:**

**Argumenter FOR:**
- Håndhever eksisterende rettslige forpliktelser
- Skaper oppmerksomhet om klimakrisen
- Presser politikerne til handling
- Suksess i Nederland og Tyskland

**Argumenter MOT:**
- Klimapolitikk bør utformes av folkevalgte
- Domstolene mangler faglig kompetanse
- Risiko for domstolsaktivisme
- Langsomme prosesser

**Konklusjon:**
Klimasøksmål kan være et supplement til politisk påvirkning, men er neppe tilstrekkelig alene. De fungerer best når de kombineres med politisk mobilisering og klare juridiske standarder.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 6: Personvern og GDPR
// ============================================================================

export const CHAPTER_RETTSLAERE_2_6: TextbookChapter = {
  id: 'rettslaere-2-6',
  courseId: 'rettslaere-2',
  chapterNumber: '6',
  title: 'Personvern og GDPR',
  description: 'Personopplysningsvern, GDPR og individets rettigheter i den digitale tidsalder.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for sentrale personvernprinsipper og GDPRs hovedregler',
    'drøfte individets rettigheter knyttet til personopplysninger',
    'vurdere personvernrettslige problemstillinger i praktiske situasjoner'
  ],
  content: [
    {
      id: 'rettslaere-2-6-intro',
      type: 'text',
      content: `Personvern handler om retten til å ha kontroll over informasjon om seg selv. I den digitale tidsalder har personvernlovgivningen fått stadig større betydning.

**Personvernforordningen (GDPR)** trådte i kraft i EU/EØS 25. mai 2018 og er gjennomført i norsk rett gjennom **personopplysningsloven** av 2018.

GDPR gjelder for all behandling av personopplysninger i EU/EØS, også for virksomheter utenfor EU som tilbyr tjenester til personer i EU, og for både offentlig og privat sektor.`
    },
    {
      id: 'rettslaere-2-6-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Personopplysninger:**
Enhver opplysning som kan knyttes til en identifiserbar person. Eksempler: navn, fødselsnummer, e-postadresse, IP-adresse.

**Behandling:**
Enhver operasjon som gjøres med personopplysninger - innsamling, registrering, lagring, bruk, utlevering eller sletting.

**Behandlingsansvarlig:**
Den som bestemmer formålet med og midlene for behandlingen.

**Databehandler:**
Den som behandler personopplysninger på vegne av den behandlingsansvarlige.

**Sensitive personopplysninger:**
Opplysninger om helse, etnisitet, religion, politisk oppfatning, seksuell orientering mv.`
    },
    {
      id: 'rettslaere-2-6-text-1',
      type: 'text',
      title: 'Personvernprinsippene i GDPR',
      content: `GDPR artikkel 5 fastslår syv grunnleggende prinsipper:

**1. Lovlighet, rettferdighet og åpenhet:**
Behandlingen må ha rettslig grunnlag og være transparent.

**2. Formålsbegrensning:**
Opplysningene skal samles inn for spesifikke, angitte formål.

**3. Dataminimering:**
Kun nødvendige opplysninger skal samles inn.

**4. Riktighet:**
Opplysningene skal være korrekte og oppdaterte.

**5. Lagringsbegrensning:**
Ikke lagre lenger enn nødvendig.

**6. Integritet og konfidensialitet:**
Opplysningene skal sikres mot uautorisert tilgang.

**7. Ansvarlighetsprinsippet:**
Den behandlingsansvarlige skal kunne dokumentere etterlevelse.`
    },
    {
      id: 'rettslaere-2-6-def-2',
      type: 'definition',
      title: 'Behandlingsgrunnlag',
      content: `For å behandle personopplysninger må det foreligge et **rettslig grunnlag** (GDPR artikkel 6):

1. **Samtykke** - Den registrerte har samtykket
2. **Avtale** - Nødvendig for å oppfylle en avtale
3. **Rettslig forpliktelse** - Pålagt ved lov
4. **Vitale interesser** - Nødvendig for å verne liv eller helse
5. **Offentlig myndighetsutøvelse** - Utøvelse av offentlig myndighet
6. **Berettiget interesse** - Ivareta en berettiget interesse

For **sensitive personopplysninger** gjelder enda strengere regler.`
    },
    {
      id: 'rettslaere-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Samtykke som behandlingsgrunnlag',
      problem: 'En nettbutikk vil bruke kundedata til markedsføring. De legger inn en forhåndskrysset boks i bestillingsskjemaet med teksten "Jeg ønsker å motta nyhetsbrev". Er dette gyldig samtykke?',
      solution: `**Vurdering av samtykkets gyldighet:**

GDPR krever at samtykke skal være frivillig, spesifikt, informert og utvetydig gjennom en aktiv handling.

**Er forhåndskrysset boks gyldig?**
**Nei.** En forhåndskrysset boks utgjør ikke en aktiv handling - den registrerte har ikke gjort noe aktivt for å samtykke.

**Korrekt løsning:**
- Bruk en tom avkrysningsboks som kunden aktivt må krysse av
- Gi tydelig informasjon om hva samtykket innebærer
- Gjør det enkelt å trekke samtykket tilbake

**Konsekvenser av ugyldig samtykke:**
Behandlingen mangler rettslig grunnlag. Datatilsynet kan gi pålegg og gebyr opptil 4% av global omsetning.`
    },
    {
      id: 'rettslaere-2-6-text-2',
      type: 'text',
      title: 'Den registrertes rettigheter',
      content: `GDPR gir den registrerte omfattende rettigheter:

**Rett til informasjon:** Krav på informasjon om hvem som behandler opplysningene og formålet.

**Rett til innsyn:** Rett til å få vite om opplysninger behandles og få tilgang til dem.

**Rett til retting:** Rett til å få uriktige opplysninger rettet.

**Rett til sletting ("retten til å bli glemt"):** Rett til å få opplysninger slettet under visse omstendigheter.

**Rett til begrensning:** Rett til å få begrenset behandlingen i visse situasjoner.

**Rett til dataportabilitet:** Rett til å få utlevert opplysningene i et strukturert format.

**Rett til å protestere:** Rett til å protestere mot behandling basert på berettiget interesse.`
    },
    {
      id: 'rettslaere-2-6-def-3',
      type: 'definition',
      title: 'Personvernombud og Datatilsynet',
      content: `**Personvernombud:**
Visse virksomheter må ha personvernombud: offentlige myndigheter og virksomheter som behandler sensitive opplysninger i stor skala. Ombudet skal informere, gi råd og kontrollere etterlevelse.

**Datatilsynet:**
Norges uavhengige tilsynsmyndighet for personvern som veileder om regelverket, fører tilsyn, behandler klager og kan gi pålegg og overtredelsesgebyr.`
    },
    {
      id: 'rettslaere-2-6-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en personopplysning etter GDPR?',
        options: [
          { id: 'a', text: 'E-postadresse', isCorrect: false },
          { id: 'b', text: 'IP-adresse', isCorrect: false },
          { id: 'c', text: 'Anonymisert statistikk', isCorrect: true },
          { id: 'd', text: 'Bilder av ansiktet', isCorrect: false }
        ],
        hints: ['Personopplysninger må kunne knyttes til en identifiserbar person'],
        solution: 'Anonymisert statistikk er ikke personopplysninger fordi opplysningene ikke lenger kan knyttes til identifiserbare personer.'
      }
    },
    {
      id: 'rettslaere-2-6-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de seks rettslige grunnlagene for behandling av personopplysninger etter GDPR artikkel 6.',
        hints: ['Tenk på ulike situasjoner der opplysninger behandles'],
        solution: `**De seks rettslige grunnlagene:**

1. **Samtykke:** Den registrerte har samtykket til behandlingen.

2. **Avtale:** Behandlingen er nødvendig for å oppfylle en avtale med den registrerte.

3. **Rettslig forpliktelse:** Behandlingen er pålagt ved lov.

4. **Vitale interesser:** Nødvendig for å verne noens liv eller helse.

5. **Offentlig myndighetsutøvelse:** Nødvendig for utøvelse av offentlig myndighet.

6. **Berettiget interesse:** Nødvendig for å ivareta en berettiget interesse, med mindre hensynet til den registrerte veier tyngre.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-6-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En skole ønsker å installere kameraovervåking i klasserom for å forhindre mobbing. Drøft de personvernrettslige utfordringene.',
        hints: ['Vurder behandlingsgrunnlag', 'Tenk på proporsjonalitet'],
        solution: `**Personvernrettslig vurdering:**

**1. Behandling av personopplysninger?**
Ja, videoopptak av elever er behandling av personopplysninger.

**2. Behandlingsgrunnlag:**
Skolen kan ikke basere seg på samtykke (ikke frivillig). Aktuelt grunnlag er berettiget interesse eller offentlig myndighetsutøvelse.

**3. Interesseavveining:**
*Skolens interesser:* Forebygge mobbing, sikre trygt læringsmiljø.
*Elevenes interesser:* Rett til privatliv, frihet til å uttrykke seg, barn har særlig krav på beskyttelse.

**4. Proporsjonalitet:**
Er overvåking nødvendig? Finnes mindre inngripende alternativer som voksne til stede eller anti-mobbeprogram?

**Konklusjon:**
Generell overvåking av klasserom vil trolig være uforholdsmessig. Eventuell overvåking må begrenses i tid og omfang.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-6-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva "retten til å bli glemt" innebærer og under hvilke vilkår den kan gjøres gjeldende.',
        hints: ['Se GDPR artikkel 17'],
        solution: `**Retten til å bli glemt (GDPR artikkel 17):**

**Hva innebærer rettigheten?**
Den registrerte har rett til å få personopplysninger om seg selv slettet.

**Vilkår for sletting:**
- Opplysningene er ikke lenger nødvendige for formålet
- Samtykke trekkes tilbake
- Den registrerte protesterer og det ikke finnes tungtveiende grunner
- Opplysningene er behandlet ulovlig

**Unntak - sletting kan nektes når:**
- Nødvendig for ytringsfrihet
- Nødvendig for rettslig forpliktelse
- Nødvendig av hensyn til folkehelsen
- Nødvendig for forskning eller arkivformål`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-6-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er maksimalt overtredelsesgebyr etter GDPR for de mest alvorlige bruddene?',
        options: [
          { id: 'a', text: '10 millioner euro eller 2% av global omsetning', isCorrect: false },
          { id: 'b', text: '20 millioner euro eller 4% av global omsetning', isCorrect: true },
          { id: 'c', text: '50 millioner euro eller 10% av global omsetning', isCorrect: false },
          { id: 'd', text: 'Ubegrenset', isCorrect: false }
        ],
        hints: ['GDPR har to nivåer av gebyrer'],
        solution: 'For de mest alvorlige bruddene kan gebyret være inntil 20 millioner euro eller 4% av global årsomsetning, det høyeste av disse.'
      }
    },
    {
      id: 'rettslaere-2-6-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-6-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft utfordringene med å balansere personvernhensyn mot andre viktige samfunnshensyn som ytringsfrihet, sikkerhet og innovasjon.',
        hints: ['Tenk på situasjoner der hensynene kan komme i konflikt'],
        solution: `**Balansering av personvern mot andre hensyn:**

**Personvern vs. ytringsfrihet:**
Retten til å bli glemt kan begrense medienes arkiver. Løsning: Unntak for journalistiske formål.

**Personvern vs. sikkerhet:**
Effektiv kriminalitetsbekjempelse kan kreve datainnsamling. Løsning: Eget regelverk for politiet med strengere kontroll.

**Personvern vs. innovasjon:**
Big data og AI krever store datamengder. Løsning: GDPR tillater behandling for forskning med særskilte garantier. Anonymisering av data.

**Generelle prinsipper:**
- Minste inngreps prinsipp
- Formålsbegrensning
- Tidsbegrensning
- Uavhengig tilsyn

Personvern er ingen absolutt rettighet, men inngrep må rettferdiggjøres og være proporsjonale.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 7: Selskapsrett
// ============================================================================

export const CHAPTER_RETTSLAERE_2_7: TextbookChapter = {
  id: 'rettslaere-2-7',
  courseId: 'rettslaere-2',
  chapterNumber: '7',
  title: 'Selskapsrett',
  description: 'Ulike selskapsformer, aksjeselskaper, styreansvaret og selskapsrettslige problemstillinger.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for ulike selskapsformer og deres kjennetegn',
    'drøfte rettigheter og plikter for eiere og ledelse i aksjeselskaper',
    'vurdere ansvarsspørsmål i selskapsrettslige sammenhenger'
  ],
  content: [
    {
      id: 'rettslaere-2-7-intro',
      type: 'text',
      content: `Selskapsretten regulerer organisering av næringsvirksomhet. Valg av selskapsform har betydning for ansvar, skatt, styringsstruktur og kapitalkrav.

**De viktigste selskapsformene:**
- **Enkeltpersonforetak (ENK):** Personlig ansvar, enkel etablering
- **Ansvarlig selskap (ANS/DA):** Personlig ansvar, flere eiere
- **Aksjeselskap (AS):** Begrenset ansvar, kr 30 000 i aksjekapital
- **Allmennaksjeselskap (ASA):** Begrenset ansvar, kr 1 mill. i aksjekapital`
    },
    {
      id: 'rettslaere-2-7-def-1',
      type: 'definition',
      title: 'Aksjeselskap (AS)',
      content: `Et **aksjeselskap** er et selskap der ingen av deltakerne har personlig ansvar for selskapets forpliktelser.

**Hovedkjennetegn:**
- **Begrenset ansvar** - Aksjonærene risikerer kun sitt innskudd
- **Egen juridisk person** - Selskapet er et selvstendig rettssubjekt
- **Aksjekapital** - Minimum kr 30 000
- **Organisasjon** - Må ha styre og generalforsamling

**Grunnleggende prinsipper:**
- Likebehandling av aksjeeiere
- Vern av selskapets kapital (kreditorvern)
- Flertallsprinsippet i beslutninger`
    },
    {
      id: 'rettslaere-2-7-text-1',
      type: 'text',
      title: 'Aksjeselskapets organer',
      content: `**Generalforsamlingen:**
Selskapets øverste myndighet der aksjonærene utøver sin rett. Velger styre, godkjenner årsregnskap, vedtar utbytte og vedtektsendringer.

**Styret:**
Forvalter selskapet og fører tilsyn med daglig ledelse. Skal bestå av minst én person. Har ansvar for forsvarlig organisering og planer.

**Daglig leder:**
Står for den daglige ledelsen og skal følge retningslinjer fra styret. Ikke påkrevd i alle selskaper.

**Bedriftsforsamling:**
Påkrevd i selskaper med over 200 ansatte. Velger styremedlemmer.`
    },
    {
      id: 'rettslaere-2-7-def-2',
      type: 'definition',
      title: 'Styreansvar',
      content: `**Styreansvar** innebærer at styremedlemmer kan bli personlig erstatningsansvarlige for tap de har voldt.

**Aksjeloven § 17-1:**
Styremedlem kan bli ansvarlig for skade de forsettlig eller uaktsomt har voldt selskapet, aksjeeiere eller andre.

**Vilkår for styreansvar:**
1. **Ansvarsgrunnlag** - Forsett eller uaktsomhet
2. **Årsakssammenheng** - Handlingen må ha forårsaket tapet
3. **Økonomisk tap** - Det må foreligge et målbart tap

**Typiske ansvarssituasjoner:**
- Manglende tilsyn med daglig leder
- Unnlatelse av å gripe inn ved økonomiske problemer
- Brudd på handleplikt ved tap av egenkapital`
    },
    {
      id: 'rettslaere-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Styreansvar ved insolvens',
      problem: 'Styret i AS X fortsetter driften selv om de vet at selskapet ikke kan betjene gjelden. Tre måneder senere går selskapet konkurs, og leverandører taper 2 millioner kroner. Kan styret holdes ansvarlig?',
      solution: `**Vurdering av styreansvar:**

**1. Styrets handleplikt (asl. § 3-5):**
Styret har plikt til å handle dersom egenkapitalen er lavere enn forsvarlig - innkalle generalforsamling og foreslå tiltak.

**2. Ansvarsgrunnlag:**
Styret visste at selskapet var insolvent. Ved å fortsette driften i denne situasjonen handlet de uaktsomt.

**3. Årsakssammenheng:**
Leverandørenes tap oppstod fordi styret fortsatte å pådra selskapet gjeld.

**4. Økonomisk tap:**
Leverandørene har lidt et konkret tap på 2 millioner kroner.

**Konklusjon:**
Styremedlemmene kan holdes personlig ansvarlige etter aksjeloven § 17-1. De handlet uaktsomt og må erstatte leverandørenes tap.`
    },
    {
      id: 'rettslaere-2-7-text-2',
      type: 'text',
      title: 'Aksjonærers rettigheter og plikter',
      content: `**Økonomiske rettigheter:**
- Rett til utbytte når generalforsamlingen vedtar det
- Rett til likvidasjonsutbytte ved oppløsning
- Fortrinnsrett ved kapitalforhøyelse

**Forvaltningsrettigheter:**
- Stemmerett på generalforsamlingen
- Rett til å møte og ta ordet
- Rett til å fremme forslag
- Rett til innsyn i selskapsdokumenter

**Aksjonærers plikter:**
- Innbetale aksjekapital
- Ikke misbruke sin innflytelse
- Respektere vedtekter og aksjonæravtaler`
    },
    {
      id: 'rettslaere-2-7-def-3',
      type: 'definition',
      title: 'Ansvarsgjennombrudd',
      content: `**Ansvarsgjennombrudd** er et unntak fra hovedregelen om begrenset ansvar i aksjeselskaper.

Aksjonærer kan holdes personlig ansvarlige dersom:
- Det foreligger **underkapitalisering**
- Det foreligger **sammenblanding** mellom aksjonærens og selskapets økonomi
- Selskapsformen er **misbrukt**
- Aksjeeier har **dominerende kontroll** og handlet illojalt

Ansvarsgjennombrudd er et ulovfestet prinsipp som anvendes restriktivt.`
    },
    {
      id: 'rettslaere-2-7-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er minstekravet til aksjekapital i et aksjeselskap (AS)?',
        options: [
          { id: 'a', text: 'Kr 10 000', isCorrect: false },
          { id: 'b', text: 'Kr 30 000', isCorrect: true },
          { id: 'c', text: 'Kr 100 000', isCorrect: false },
          { id: 'd', text: 'Kr 1 000 000', isCorrect: false }
        ],
        hints: ['Kravet ble senket i 2012'],
        solution: 'Aksjeloven § 3-1 krever minimum kr 30 000 i aksjekapital for aksjeselskaper. For ASA er kravet kr 1 000 000.'
      }
    },
    {
      id: 'rettslaere-2-7-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de tre hovedorganene i et aksjeselskap og deres funksjoner.',
        hints: ['Generalforsamlingen, styret og daglig leder'],
        solution: `**De tre hovedorganene:**

**1. Generalforsamlingen:**
Selskapets øverste myndighet. Velger styre, godkjenner regnskap, vedtar utbytte og vedtektsendringer.

**2. Styret:**
Forvalter selskapet og fører tilsyn med daglig ledelse. Har ansvar for forsvarlig organisering, planer og budsjetter.

**3. Daglig leder:**
Står for den daglige ledelsen og rapporterer til styret. Sørger for regnskapsføring og forsvarlig forvaltning.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-7-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Per eier 100% av aksjene i et AS. Han bruker selskapets bankkonto til private utgifter uten å følge reglene om utbytte. Selskapet går konkurs. Drøft om kreditorene kan holde Per personlig ansvarlig.',
        hints: ['Vurder om det foreligger sammenblanding', 'Tenk på ansvarsgjennombrudd'],
        solution: `**Drøftelse av Pers personlige ansvar:**

**1. Ansvarsgjennombrudd:**
Per har ikke respektert skillet mellom privat og selskapets økonomi - fullstendig sammenblanding. Dette kan tilsi ansvarsgjennombrudd.

**2. Ulovlig uttak - aksjeloven § 3-7:**
Uttakene er sannsynligvis ulovlige - ikke vedtatt som utbytte. Selskapet (konkursboet) kan kreve tilbakeføring.

**3. Styreansvar - aksjeloven § 17-1:**
Per har handlet uaktsomt ved å tappe selskapet for midler og ikke føre forsvarlig kontroll.

**Konklusjon:**
Per kan holdes personlig ansvarlig gjennom ansvarsgjennombrudd, tilbakeføringskrav og styreansvar.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-7-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom ansvarlig selskap (ANS) og aksjeselskap (AS) når det gjelder deltakernes ansvar.',
        hints: ['Tenk på begrenset vs. ubegrenset ansvar'],
        solution: `**Ansvar i ANS vs. AS:**

**Ansvarlig selskap (ANS):**
- Personlig, ubegrenset og solidarisk ansvar
- Deltakerne hefter med hele sin private formue
- Kreditor kan kreve hele gjelden av én deltaker

**Aksjeselskap (AS):**
- Begrenset ansvar
- Aksjonærene risikerer kun sitt innskudd
- Selskapet er et selvstendig rettssubjekt

Ved konkurs: I ANS kan kreditorene gå direkte på deltakerne. I AS taper aksjonærene kun innskuddet, med unntak for styreansvar eller ansvarsgjennombrudd.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-7-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken plikt har styret når egenkapitalen er lavere enn forsvarlig?',
        options: [
          { id: 'a', text: 'Straks begjære oppbud', isCorrect: false },
          { id: 'b', text: 'Innkalle generalforsamlingen og foreslå tiltak', isCorrect: true },
          { id: 'c', text: 'Personlig skyte inn mer kapital', isCorrect: false },
          { id: 'd', text: 'Si opp alle ansatte', isCorrect: false }
        ],
        hints: ['Se aksjeloven § 3-5'],
        solution: 'Etter aksjeloven § 3-5 skal styret straks behandle saken og innkalle generalforsamlingen dersom egenkapitalen er lavere enn forsvarlig, og foreslå tiltak.'
      }
    },
    {
      id: 'rettslaere-2-7-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-7-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hensynene bak regelen om begrenset ansvar i aksjeselskaper og vurder om denne regelen alltid er rimelig overfor selskapets kreditorer.',
        hints: ['Tenk på formålet med aksjeselskapsformen', 'Vurder situasjoner der begrenset ansvar kan misbrukes'],
        solution: `**Hensynene bak begrenset ansvar:**

**Fordeler:**
- Fremmer investeringer - investorer kan kalkulere sin risiko
- Skiller person og virksomhet
- Muliggjør gründervirksomhet
- Samfunnsøkonomisk effektivitet

**Er regelen alltid rimelig for kreditorer?**
*Urimelige situasjoner:*
- Eneeier som tapper selskapet
- Underkapitaliserte selskaper
- Ufrivillige kreditorer (skadelidte)

*Mekanismer som beskytter kreditorer:*
- Krav om minste aksjekapital
- Regnskapsplikt og revisjon
- Styreansvar ved uforsvarlig drift
- Ansvarsgjennombrudd i ekstreme tilfeller

**Konklusjon:**
Systemet fungerer rimelig bra, men forutsetter at reglene håndheves.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 8: Fast eiendoms rettsforhold
// ============================================================================

export const CHAPTER_RETTSLAERE_2_8: TextbookChapter = {
  id: 'rettslaere-2-8',
  courseId: 'rettslaere-2',
  chapterNumber: '8',
  title: 'Fast eiendoms rettsforhold',
  description: 'Eiendomsrett, tinglysing, servitutter og naborett.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for grunnleggende eiendomsrettslige prinsipper',
    'drøfte rettigheter og begrensninger knyttet til fast eiendom',
    'vurdere rettslige problemstillinger i naboforhold og ved eiendomsoverdragelse'
  ],
  content: [
    {
      id: 'rettslaere-2-8-intro',
      type: 'text',
      content: `Fast eiendoms rettsforhold regulerer rettigheter og plikter knyttet til grunn og bygninger. Dette er et sentralt rettsområde som berører de fleste mennesker gjennom boligkjøp, leie eller naboforhold.

**Sentrale lover:**
- Tinglysingsloven
- Avhendingslova (salg av fast eiendom)
- Naboloven
- Plan- og bygningsloven
- Servituttloven`
    },
    {
      id: 'rettslaere-2-8-def-1',
      type: 'definition',
      title: 'Eiendomsrett',
      content: `**Eiendomsrett** er den mest omfattende rådigheten man kan ha over en ting. Eieren kan i utgangspunktet:

- **Bruke** eiendommen som man vil
- **Endre** eiendommen
- **Selge eller gi bort** eiendommen
- **Nekte andre** å bruke eiendommen

**Begrensninger i eiendomsretten:**
- Offentligrettslige regler (plan- og bygningslov, miljøvern)
- Privatrettslige begrensninger (servitutter, panterett)
- Naborettslige hensyn`
    },
    {
      id: 'rettslaere-2-8-def-2',
      type: 'definition',
      title: 'Tinglysing',
      content: `**Tinglysing** er registrering av rettigheter i fast eiendom i grunnboken. Formålet er å skape rettsvern og offentlighet.

**Virkninger av tinglysing:**
- **Rettsvern** mot godtroende tredjepersoner
- **Prioritet** mellom flere rettigheter
- **Offentlig tilgjengelig** informasjon om eiendommen

**Grunnbokens troverdighet:**
Den som kjøper i god tro og stoler på grunnboken, er beskyttet mot eldre utinglyste rettigheter (ekstinksjon).`
    },
    {
      id: 'rettslaere-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Dobbeltsalg',
      problem: 'Kari selger hytta si først til Ole, som ikke tinglyser kjøpet. Deretter selger Kari den samme hytta til Per, som tinglyser umiddelbart. Begge har betalt full kjøpesum. Hvem eier hytta?',
      solution: `**Løsning på dobbeltsalgsproblemet:**

**Hovedregel:** Førstemann i tid, best i rett - Ole kjøpte først.

**Unntak ved tinglysing:**
Tinglysingsloven § 20 beskytter godtroende tredjepersoner. Per kan vinne rett dersom:
1. Per var i god tro (visste ikke om Oles kjøp)
2. Per tinglyste sitt kjøp før Ole

**Vurdering av god tro:**
Per må ha vært uvitende om Oles kjøp. Dersom Per visste eller burde visst om det tidligere salget, er han ikke i god tro og kan ikke ekstingvere Oles rett.

**Konklusjon:**
Dersom Per var i god tro, vinner han retten til hytta fordi han tinglyste først. Ole må da søke erstatning fra Kari for kontraktsbrudd.`
    },
    {
      id: 'rettslaere-2-8-def-3',
      type: 'definition',
      title: 'Servitutter',
      content: `**Servitutt** er en begrenset rett over annen manns eiendom. Servituttloven regulerer dette.

**Typer servitutter:**
- **Positive servitutter:** Rett til å gjøre noe på eiendommen (veirett, beiterett)
- **Negative servitutter:** Forbud mot noe (byggeforbud, utsiktsservitutt)

**Stiftelse av servitutt:**
- Avtale mellom partene
- Hevd (lang tids bruk)
- Alders tids bruk
- Ekspropriasjon

**Opphør av servitutt:**
- Avtale
- Bortfall ved ikke-bruk
- Avskiping etter servituttloven § 7`
    },
    {
      id: 'rettslaere-2-8-text-1',
      type: 'text',
      title: 'Naboretten',
      content: `**Naboloven** regulerer forholdet mellom naboer. Hovedregelen er i § 2:

*"Ingen må ha, gjera eller setja i verk noko som urimeleg eller uturvande er til skade eller ulempe på granneeigedom."*

**Vurderingsmomenter:**
- Er ulempen urimelig?
- Er handlingen unødvendig?
- Hva er vanlig i strøket?
- Var ulempen påregnelig da naboen etablerte seg?

**Rettsvirkninger ved brudd:**
- Krav om retting eller stansing
- Erstatning for økonomisk tap
- Vederlag for ikke-økonomisk ulempe`
    },
    {
      id: 'rettslaere-2-8-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med tinglysing?',
        options: [
          { id: 'a', text: 'Å kreve inn skatt på eiendom', isCorrect: false },
          { id: 'b', text: 'Å skape rettsvern og offentlighet om rettigheter', isCorrect: true },
          { id: 'c', text: 'Å regulere byggevirksomhet', isCorrect: false },
          { id: 'd', text: 'Å fastsette eiendomsgrenser', isCorrect: false }
        ],
        hints: ['Tenk på hva som skjer når rettigheter registreres'],
        solution: 'Tinglysing skaper rettsvern mot tredjepersoner og gjør informasjon om rettigheter i fast eiendom offentlig tilgjengelig.'
      }
    },
    {
      id: 'rettslaere-2-8-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom positive og negative servitutter og gi eksempler på hver.',
        hints: ['Tenk på hva rettighetshaveren kan og ikke kan gjøre'],
        solution: `**Positive servitutter:**
Gir rett til å *gjøre noe* på annen manns eiendom.
- Veirett - rett til å kjøre over naboens tomt
- Beiterett - rett til å la dyr beite
- Hogstrett - rett til å hogge ved
- Brønnrett - rett til å hente vann

**Negative servitutter:**
*Forbyr* eieren å gjøre noe på sin egen eiendom.
- Utsiktsservitutt - forbud mot bygging som sperrer utsikt
- Byggeforbud - forbud mot å bygge høyere enn en viss høyde
- Villaklausul - forbud mot næringsvirksomhet`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-8-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Naboen din har startet et hønseri med 50 høner. Du plages av lukt og støy. Drøft om dette er i strid med naboloven § 2.',
        hints: ['Vurder om ulempen er urimelig', 'Tenk på hva som er vanlig i strøket'],
        solution: `**Vurdering etter naboloven § 2:**

**Er ulempen urimelig?**
- Lukt og støy fra 50 høner kan være betydelig
- Antallet høner er mer enn vanlig hobbyhold
- Ulempen går utover det som er normalt å tåle

**Er handlingen unødvendig?**
- Naboen kunne holdt færre høner
- Alternative løsninger for plassering av hønseriet

**Hva er vanlig i strøket?**
- I et villaområde er hønseri uvanlig
- I et landbruksområde ville det vært akseptabelt

**Var ulempen påregnelig?**
- Hadde hønseriet eksistert da du kjøpte, måtte du tålt mer

**Sannsynlig konklusjon:**
I et vanlig boligområde vil et hønseri med 50 høner trolig være i strid med naboloven § 2. Du kan kreve at omfanget reduseres eller at tiltak mot lukt og støy iverksettes.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-8-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva som menes med "grunnbokens troverdighet" og hvilken betydning dette har for eiendomskjøpere.',
        hints: ['Tenk på hva som skjer ved dobbeltsalg'],
        solution: `**Grunnbokens troverdighet:**

**Prinsippet:**
Den som kjøper fast eiendom i god tro og stoler på opplysningene i grunnboken, er beskyttet mot rettigheter som ikke fremgår der.

**Betydning for kjøpere:**
- Kan stole på at registrert eier har rett til å selge
- Beskyttet mot utinglyste heftelser (panterett, servitutter)
- Må ikke undersøke bakenforliggende forhold

**Vilkår for beskyttelse:**
1. Kjøper må være i god tro
2. Kjøper må ha tinglyst sin rett
3. Den eldre rettigheten må ikke være tinglyst

**Unntak:**
Visse forhold kan ikke ekstingveres selv om de ikke er tinglyst, f.eks. offentligrettslige begrensninger.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-8-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedregelen i naboloven § 2?',
        options: [
          { id: 'a', text: 'Naboer må varsles om alle tiltak', isCorrect: false },
          { id: 'b', text: 'Ingen må ha noe som er urimelig til skade eller ulempe for naboen', isCorrect: true },
          { id: 'c', text: 'Alle byggetiltak krever naboens samtykke', isCorrect: false },
          { id: 'd', text: 'Trær må holdes 2 meter fra grensen', isCorrect: false }
        ],
        hints: ['Tenk på den generelle tålegrensen'],
        solution: 'Naboloven § 2 fastslår at ingen må ha, gjøre eller sette i verk noe som urimelig eller unødvendig er til skade eller ulempe på naboeiendommen.'
      }
    },
    {
      id: 'rettslaere-2-8-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-8-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilke hensyn som står mot hverandre når en servitutt begrenser en eiers mulighet til å utnytte sin eiendom, og hvordan servituttloven søker å balansere disse.',
        hints: ['Tenk på eierens interesser vs. rettighetshaveren', 'Vurder avskipingsreglene'],
        solution: `**Motstående hensyn:**

**Eierens interesser:**
- Ønsker å utnytte eiendommen optimalt
- Servitutten kan hindre utvikling
- Samfunnsøkonomisk ineffektivt med gamle begrensninger

**Rettighetshaverens interesser:**
- Har betalt for eller ervervet rettigheten
- Forutsigbarhet og tillit til avtaler
- Servitutten kan ha stor verdi

**Servituttlovens balansering:**

**§ 2 - Bruksretten skal ikke være mer tyngende enn nødvendig**
Servitutthaveren må ta rimelig hensyn til eierens interesser.

**§ 7 - Avskiping**
En servitutt kan kreves fjernet dersom:
- Den har mistet sin verdi for rettighetshaveren
- Den er til vesentlig ulempe for eieren
- Fordelene ved fjerning er større enn ulempene

Ved avskiping må det betales erstatning til rettighetshaveren.

**Konklusjon:**
Loven søker å bevare etablerte rettigheter, men åpner for justering når forholdene endrer seg vesentlig.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 9: Konfliktløsning og megling
// ============================================================================

export const CHAPTER_RETTSLAERE_2_9: TextbookChapter = {
  id: 'rettslaere-2-9',
  courseId: 'rettslaere-2',
  chapterNumber: '9',
  title: 'Konfliktløsning og megling',
  description: 'Alternative tvisteløsningsmetoder, forliksråd, voldgift og megling.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for ulike metoder for konfliktløsning',
    'drøfte fordeler og ulemper ved alternative tvisteløsningsmetoder',
    'vurdere hvilken konfliktløsningsmetode som passer i ulike situasjoner'
  ],
  content: [
    {
      id: 'rettslaere-2-9-intro',
      type: 'text',
      content: `Konflikter kan løses på mange måter. Tradisjonelt har domstolene vært den viktigste arenaen, men alternative tvisteløsningsmetoder har fått økende betydning.

**Tvisteløsningsmetoder:**
1. **Forhandling** - Partene løser tvisten selv
2. **Megling** - Nøytral tredjeperson hjelper partene
3. **Forliksrådet** - Obligatorisk første instans i mange sivile saker
4. **Voldgift** - Privat domstol med bindende avgjørelse
5. **Domstolene** - Offentlig rettsapparat`
    },
    {
      id: 'rettslaere-2-9-def-1',
      type: 'definition',
      title: 'Megling',
      content: `**Megling** er en prosess der en nøytral tredjeperson (mekler) hjelper partene med å finne en løsning de begge kan akseptere.

**Kjennetegn:**
- Frivillig deltakelse
- Mekler har ingen beslutningsmyndighet
- Partene beholder kontrollen over utfallet
- Fokus på partenes interesser, ikke juridiske posisjoner

**Typer megling:**
- **Sivil megling** - Tvister mellom private
- **Familierettsmekling** - Obligatorisk ved samlivsbrudd med barn
- **Arbeidsrettsmekling** - Mellom arbeidsgiver og fagforeninger`
    },
    {
      id: 'rettslaere-2-9-def-2',
      type: 'definition',
      title: 'Forliksrådet',
      content: `**Forliksrådet** er et kommunalt meklingsorgan som er første instans for mange sivile saker.

**Behandling i forliksrådet:**
- Obligatorisk i mange saker før tingretten
- Tre medlemmer valgt av kommunestyret
- Kan mekle mellom partene
- Kan avsi dom i saker under kr 200 000

**Unntak fra forliksrådsbehandling:**
- Familiesaker
- Saker der partene representeres av advokat
- Forbrukersaker som har vært i nemnd`
    },
    {
      id: 'rettslaere-2-9-def-3',
      type: 'definition',
      title: 'Voldgift',
      content: `**Voldgift** er privat rettergang der partene overlater tvisten til en eller flere voldgiftsdommere.

**Kjennetegn:**
- Basert på avtale mellom partene
- Dommerne velges av partene
- Avgjørelsen (voldgiftsdommen) er bindende
- Begrenset adgang til overprøving

**Fordeler:**
- Raskere enn domstolene
- Kan velge dommere med spesialkompetanse
- Konfidensialitet
- Internasjonalt anerkjente avgjørelser

**Ulemper:**
- Kan være kostbart
- Begrenset ankemulighet`
    },
    {
      id: 'rettslaere-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Valg av tvisteløsningsmetode',
      problem: 'To forretningspartnere er uenige om tolkningen av en avtale. Konflikten gjelder kr 500 000. Hvilken tvisteløsningsmetode bør de velge?',
      solution: `**Vurdering av alternativer:**

**1. Forhandling:**
- Billig og raskt
- Bevarer forretningsforholdet
- Risiko: Kan være vanskelig å bli enige

**2. Megling:**
- Hjelp fra nøytral tredjeperson
- Fokus på å finne løsning begge aksepterer
- Rimelig kostnad

**3. Voldgift:**
- Bindende avgjørelse
- Kan velge dommer med kommersielt kompetanse
- Konfidensielt
- Noe dyrere enn megling

**4. Domstolene:**
- Må starte i forliksrådet (for saker under kr 200 000) eller tingretten
- Offentlig prosess
- Lang saksbehandlingstid
- Kan skade forretningsforholdet

**Anbefaling:**
Start med forhandling eller megling. Dersom dette ikke fører frem, er voldgift et godt alternativ for forretningstvister fordi det er raskere og mer konfidensielt enn domstolene.`
    },
    {
      id: 'rettslaere-2-9-text-1',
      type: 'text',
      title: 'Rettsmekling i domstolene',
      content: `**Rettsmekling** er mekling som tilbys av domstolene som alternativ til hovedforhandling.

**Gjennomføring:**
- Dommeren eller en annen mekler leder prosessen
- Partene møtes ansikt til ansikt
- Fokus på å finne en minnelig løsning
- Dersom mekling ikke fører frem, går saken til hovedforhandling

**Fordeler:**
- Raskere enn full rettssak
- Billigere for partene
- Partene beholder kontroll
- Høy forliksprosent

**Tvisteloven § 8-1:**
Retten skal på ethvert trinn vurdere om saken kan løses i minnelighet.`
    },
    {
      id: 'rettslaere-2-9-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner megling som tvisteløsningsmetode?',
        options: [
          { id: 'a', text: 'Mekleren avsier bindende dom', isCorrect: false },
          { id: 'b', text: 'Partene beholder kontrollen over utfallet', isCorrect: true },
          { id: 'c', text: 'Deltakelse er alltid obligatorisk', isCorrect: false },
          { id: 'd', text: 'Prosessen er alltid offentlig', isCorrect: false }
        ],
        hints: ['Tenk på forskjellen mellom megling og domstolsbehandling'],
        solution: 'Ved megling har mekleren ingen beslutningsmyndighet - partene beholder selv kontrollen over utfallet og må bli enige for at det skal bli en løsning.'
      }
    },
    {
      id: 'rettslaere-2-9-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for forliksrådets rolle i det norske rettssystemet.',
        hints: ['Tenk på forliksrådet som førsteinstans'],
        solution: `**Forliksrådets rolle:**

**Organisering:**
- Kommunalt organ med tre medlemmer
- Valgt av kommunestyret for fire år
- Finnes i alle kommuner

**Funksjon:**
- Mekling mellom partene
- Kan avsi dom i saker under kr 200 000
- Obligatorisk førsteinstans i mange sivile saker

**Formål:**
- Avlaste domstolene
- Tilby rimelig tvisteløsning
- Legge til rette for minnelige løsninger

**Begrensninger:**
- Ikke alle saker må innom forliksrådet
- Begrenset juridisk kompetanse
- Dommer kan overprøves av tingretten`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-9-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved voldgift sammenlignet med ordinær domstolsbehandling.',
        hints: ['Tenk på tid, kostnad, kompetanse og ankeadgang'],
        solution: `**Voldgift vs. domstolsbehandling:**

**Fordeler ved voldgift:**
- *Tempo:* Raskere avgjørelse
- *Kompetanse:* Kan velge dommere med spesialkunnskap
- *Konfidensialitet:* Privat prosess
- *Fleksibilitet:* Partene bestemmer prosessen
- *Internasjonalt:* Lettere å fullbyrde i utlandet

**Ulemper ved voldgift:**
- *Kostnad:* Partene betaler dommerne selv
- *Ankemulighet:* Svært begrenset overprøving
- *Rettssikkerhet:* Mindre formell prosess
- *Presedens:* Skaper ikke rettspraksis

**Når passer voldgift best?**
- Komplekse kommersielle tvister
- Internasjonale tvister
- Behov for konfidensialitet
- Behov for spesialkompetanse

**Når passer domstolene best?**
- Prinsipielle spørsmål
- Behov for ankeadgang
- Svakere part som trenger beskyttelse`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-9-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva familierettsmekling er og hvorfor den er obligatorisk ved samlivsbrudd med barn.',
        hints: ['Tenk på barnets beste'],
        solution: `**Familierettsmekling:**

**Hva er det?**
Mekling mellom foreldre som skal skilles eller flytte fra hverandre, og som har felles barn under 16 år.

**Obligatorisk karakter:**
- Barneloven § 51 krever mekling før sak om foreldreansvar, samvær mv. kan reises
- Må ha meklingsattest for å få separasjon/skilsmisse

**Formål:**
- Sikre avtale om barna som ivaretar barnets beste
- Redusere konfliktnivå mellom foreldrene
- Unngå belastende rettsprosesser for barna

**Gjennomføring:**
- Inntil 7 timer gratis mekling
- Mekler er nøytral (familievernkontor, advokat mv.)
- Fokus på praktiske løsninger for barna

**Begrunnelse for obligatorisk ordning:**
Barn er særlig sårbare ved foreldres samlivsbrudd. Mekling sikrer at foreldrene må fokusere på barnets behov før konflikten eskalerer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-9-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I hvilke saker kan forliksrådet avsi dom?',
        options: [
          { id: 'a', text: 'Alle sivile saker', isCorrect: false },
          { id: 'b', text: 'Saker der tvistesummen er under kr 200 000', isCorrect: true },
          { id: 'c', text: 'Bare familiesaker', isCorrect: false },
          { id: 'd', text: 'Bare straffesaker', isCorrect: false }
        ],
        hints: ['Tenk på beløpsgrensen'],
        solution: 'Forliksrådet kan avsi dom i saker der tvistesummen er under kr 200 000, forutsatt at begge parter godtar at forliksrådet avgjør saken.'
      }
    },
    {
      id: 'rettslaere-2-9-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-9-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan valget av tvisteløsningsmetode kan påvirke utfallet av en konflikt og forholdet mellom partene.',
        hints: ['Tenk på både juridiske og relasjonelle aspekter'],
        solution: `**Tvisteløsningsmetodens betydning:**

**Påvirkning på utfallet:**

*Forhandling/megling:*
- Fokus på interesser, ikke posisjoner
- Kreative løsninger mulig
- Kompromiss mellom partene
- Begge kan "vinne"

*Domstol/voldgift:*
- Fokus på juridiske rettigheter
- Vinner/taper-utfall
- Bundet av gjeldende rett
- Mer forutsigbart

**Påvirkning på relasjonen:**

*Samarbeidsbaserte metoder:*
- Bevarer eller styrker relasjonen
- Partene har kontroll
- Mindre bitterhet
- Lettere å gjennomføre løsningen

*Domstolsbaserte metoder:*
- Kan skade relasjonen permanent
- Eskalerer ofte konflikten
- Taper kan føle seg urettferdig behandlet
- Vanskeligere å samarbeide etterpå

**Betydning for fremtiden:**
- Forretningspartnere: Megling ofte best
- Naboer: Forlik bevarer naboskapet
- Engangstransaksjoner: Domstol kan være ok

**Konklusjon:**
Valg av metode bør vurderes helhetlig, ikke bare ut fra hvem som har rett juridisk.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// KAPITTEL 10: Rettsfilosofi og etikk
// ============================================================================

export const CHAPTER_RETTSLAERE_2_10: TextbookChapter = {
  id: 'rettslaere-2-10',
  courseId: 'rettslaere-2',
  chapterNumber: '10',
  title: 'Rettsfilosofi og etikk',
  description: 'Grunnleggende rettsfilosofiske spørsmål, rettferdighet og jussens etiske grunnlag.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for sentrale rettsfilosofiske retninger',
    'drøfte forholdet mellom rett, moral og rettferdighet',
    'vurdere etiske dilemmaer i rettssystemet'
  ],
  content: [
    {
      id: 'rettslaere-2-10-intro',
      type: 'text',
      content: `Rettsfilosofi handler om rettens grunnlag, natur og formål. Sentrale spørsmål er:

- Hva er rett?
- Hva gjør en lov gyldig?
- Hva er forholdet mellom rett og moral?
- Hva er rettferdighet?

Disse spørsmålene har opptatt tenkere i tusenvis av år og har praktisk betydning for hvordan vi forstår og anvender rettssystemet.`
    },
    {
      id: 'rettslaere-2-10-def-1',
      type: 'definition',
      title: 'Naturrett og rettspositivisme',
      content: `**Naturrett:**
Retten bygger på universelle moralske prinsipper som gjelder uavhengig av hva staten bestemmer. En lov som strider mot naturlige rettigheter, er ikke gyldig rett.

Representanter: Aristoteles, Thomas Aquinas, John Locke

**Rettspositivisme:**
Retten er det som er vedtatt av kompetent myndighet etter gjeldende prosedyrer. Gyldigheten avhenger av formell korrekthet, ikke moralsk innhold.

Representanter: Jeremy Bentham, Hans Kelsen, H.L.A. Hart

**Praktisk betydning:**
- Naturrett: Kan nekte å følge umoralske lover
- Positivisme: Må skille mellom "rett som er" og "rett som bør være"`
    },
    {
      id: 'rettslaere-2-10-text-1',
      type: 'text',
      title: 'Rettferdighet',
      content: `**Formell rettferdighet:**
Like tilfeller skal behandles likt. Reglene skal anvendes konsistent uten vilkårlighet.

**Materiell rettferdighet:**
Innholdet i reglene må være rettferdig. Handler om hva som er en riktig fordeling av goder og byrder.

**Prosedyrerettferdighet:**
Prosessen som leder frem til beslutninger må være rettferdig. Partene skal høres, dommeren skal være upartisk.

**John Rawls' rettferdighetsteori:**
Rawls argumenterte for at rettferdige prinsipper er de vi ville valgt bak et "uvitenhetens slør" - uten å vite vår egen posisjon i samfunnet.`
    },
    {
      id: 'rettslaere-2-10-def-2',
      type: 'definition',
      title: 'Rettssikkerhet',
      content: `**Rettssikkerhet** innebærer at borgerne er beskyttet mot overgrep fra staten og har forutsigbare rammer for sin livsutfoldelse.

**Elementer i rettssikkerheten:**
- **Legalitetsprinsippet:** Inngrep krever lovhjemmel
- **Forutsigbarhet:** Lover skal være klare og tilgjengelige
- **Likhet for loven:** Alle behandles likt
- **Domstolskontroll:** Uavhengige domstoler kontrollerer forvaltningen
- **Kontradiksjon:** Rett til å bli hørt
- **Forbud mot tilbakevirkende lover:** Straff kan ikke ilegges for handlinger som var lovlige`
    },
    {
      id: 'rettslaere-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Naturrett vs. positivisme',
      problem: 'Under andre verdenskrig vedtok Nazi-Tyskland lover som påla jøder å bære davidsstjerne og forbød dem å utøve visse yrker. Var dette gyldig rett?',
      solution: `**To perspektiver:**

**Positivistisk analyse:**
- Lovene var formelt korrekt vedtatt
- De var bindende innenfor det tyske rettssystemet
- Gyldigheten avhenger ikke av moralsk innhold
- Konklusjon: Juridisk gyldige lover

**Naturrettslig analyse:**
- Lovene krenket grunnleggende menneskerettigheter
- De stred mot universelle moralske prinsipper
- En "lov" som er fundamentalt urettferdig, er ikke virkelig rett
- Konklusjon: Ikke gyldige lover

**Nürnberg-prosessene:**
Etter krigen ble nazistiske ledere dømt for forbrytelser mot menneskeheten, selv om de hadde handlet "lovlig" etter tysk rett. Dommerne brukte naturrettslige argumenter.

**Lærdom:**
Positivismen kan ikke alene forklare hvorfor vi avviser åpenbart urettferdige lover. Et rent formelt rettsbegrep gir ikke beskyttelse mot tyranni.`
    },
    {
      id: 'rettslaere-2-10-text-2',
      type: 'text',
      title: 'Juridisk etikk',
      content: `**Advokatetikk:**
Advokater har etiske plikter regulert i Regler for god advokatskikk:
- Lojalitet til klienten
- Uavhengighet fra andre interesser
- Taushetsplikt
- Forbud mot å fremme åpenbart uberettigede krav

**Dommeretikk:**
Dommere skal være:
- Uavhengige og upartiske
- Objektive og saklige
- Kompetente og grundige
- Verdige i sin opptreden

**Etiske dilemmaer:**
- Skal advokaten forsvare en klient han vet er skyldig?
- Kan dommeren følge sin samvittighet fremfor loven?
- Hvordan balansere lojalitet til klient mot samfunnets interesser?`
    },
    {
      id: 'rettslaere-2-10-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom naturrett og rettspositivisme?',
        options: [
          { id: 'a', text: 'Naturrett fokuserer på naturen, positivisme på mennesker', isCorrect: false },
          { id: 'b', text: 'Naturrett knytter rett til moral, positivisme til formell gyldighet', isCorrect: true },
          { id: 'c', text: 'Naturrett er eldre enn positivisme', isCorrect: false },
          { id: 'd', text: 'Naturrett gjelder bare naturretten, positivisme all rett', isCorrect: false }
        ],
        hints: ['Tenk på hva som gjør en lov gyldig'],
        solution: 'Naturrett mener at rettens gyldighet avhenger av om den er i samsvar med moralske prinsipper. Rettspositivisme mener at gyldigheten avhenger av om loven er vedtatt korrekt, uavhengig av moralsk innhold.'
      }
    },
    {
      id: 'rettslaere-2-10-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de tre formene for rettferdighet: formell, materiell og prosedyrerettferdighet.',
        hints: ['Tenk på hva hver form fokuserer på'],
        solution: `**De tre formene for rettferdighet:**

**1. Formell rettferdighet:**
Like tilfeller skal behandles likt. Fokus på konsistent anvendelse av regler uten vilkårlighet.
*Eksempel:* Alle som kjører for fort får bot, uansett hvem de er.

**2. Materiell rettferdighet:**
Innholdet i reglene må være rettferdig. Handler om riktig fordeling av goder og byrder i samfunnet.
*Eksempel:* Er det rettferdig at rike betaler høyere skatt?

**3. Prosedyrerettferdighet:**
Prosessen som fører til beslutninger må være rettferdig - partene skal høres, dommeren skal være upartisk.
*Eksempel:* Begge parter får legge frem sin sak før dom avsies.

**Sammenheng:**
Alle tre former er nødvendige for et rettferdig rettssystem. Formell rettferdighet sikrer forutsigbarhet, materiell rettferdighet sikrer gode resultater, og prosedyrerettferdighet sikrer legitimitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-10-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft det etiske dilemmaet en forsvarsadvokat står overfor når klienten tilstår skyld til advokaten, men ønsker å erklære seg uskyldig i retten.',
        hints: ['Tenk på advokatens lojalitetsplikt vs. sannhetsplikten', 'Vurder konsekvensene av ulike valg'],
        solution: `**Det etiske dilemmaet:**

**Motstående hensyn:**

*Lojalitet til klienten:*
- Advokaten skal fremme klientens interesser
- Klienten har rett til forsvar
- Taushetsplikt om det klienten forteller

*Sannhetsplikt:*
- Advokaten skal ikke fremme åpenbart uriktige påstander
- Skal ikke villede retten
- Ansvar for rettssystemets integritet

**Gjeldende regler:**

Advokaten kan:
- Bestride bevisene og kreve at påtalemyndigheten oppfyller sin bevisbyrde
- Påpeke svakheter i etterforskningen
- Fremheve formildende omstendigheter

Advokaten kan ikke:
- Aktivt fremsette løgner for retten
- Oppfordre klienten til å lyve
- Fabrikkere bevis

**Løsning i praksis:**
Advokaten kan forsvare ved å utfordre beviskraften uten å hevde at klienten er uskyldig. "Påtalemyndigheten har ikke bevist skyld utover rimelig tvil" er noe annet enn "min klient er uskyldig".

**Refleksjon:**
Dette dilemmaet viser spenningen mellom advokatens rolle som klientens representant og som aktør i et rettssystem bygget på sannhetssøken.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    },
    {
      id: 'rettslaere-2-10-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for elementene i begrepet rettssikkerhet.',
        hints: ['Tenk på beskyttelse mot vilkårlig maktutøvelse'],
        solution: `**Elementene i rettssikkerhet:**

**1. Legalitetsprinsippet:**
Inngrep i borgernes rettsstilling krever hjemmel i lov. Staten kan ikke handle vilkårlig.

**2. Forutsigbarhet:**
Lovene skal være klare, tilgjengelige og forståelige slik at borgerne kan innrette seg etter dem.

**3. Likhet for loven:**
Alle skal behandles likt, uten diskriminering basert på status eller maktposisjon.

**4. Domstolskontroll:**
Uavhengige domstoler kan kontrollere at forvaltningen og lovgiver holder seg innenfor loven.

**5. Kontradiksjon:**
Den som berøres av et vedtak har rett til å uttale seg før beslutning treffes.

**6. Forbud mot tilbakevirkende lover:**
Handlinger kan ikke straffes etter lover som ikke gjaldt da handlingen ble begått.

**Formål:**
Rettssikkerhet beskytter borgerne mot maktmisbruk og sikrer at staten opptrer rettferdig og forutsigbart.`,
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'rettslaere-2-10-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med John Rawls\' "uvitenhetens slør"?',
        options: [
          { id: 'a', text: 'At dommere skal være anonyme', isCorrect: false },
          { id: 'b', text: 'En tenkt situasjon der man velger prinsipper uten å vite sin egen posisjon', isCorrect: true },
          { id: 'c', text: 'At loven skal gjelde alle likt', isCorrect: false },
          { id: 'd', text: 'At uvitenhet er straffriende', isCorrect: false }
        ],
        hints: ['Tenk på hvordan man kan sikre upartiske valg av prinsipper'],
        solution: 'Rawls\' "uvitenhetens slør" er et tankeeksperiment der man velger samfunnets grunnleggende prinsipper uten å vite hvilken posisjon man selv vil ha i samfunnet. Dette sikrer at prinsippene blir rettferdige fordi man må ta hensyn til alle posisjoner.'
      }
    },
    {
      id: 'rettslaere-2-10-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'rettslaere-2-10-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om det finnes grenser for hva demokratisk flertall kan bestemme, og hvilke konsekvenser svaret har for forholdet mellom demokrati og rettigheter.',
        hints: ['Tenk på menneskerettighetene', 'Vurder majoritetens tyranni'],
        solution: `**Demokrati og rettigheter:**

**To posisjoner:**

*Ubegrenset demokrati:*
Flertallet kan i prinsippet bestemme alt. Demokratiet er den høyeste autoritet, og ingen kan overprøve folkeviljen.

*Begrenset demokrati (konstitusjonalisme):*
Visse rettigheter står over flertallets vilje. Grunnloven og menneskerettighetene setter grenser.

**Argumenter for grenser:**

1. *Minoritetsvern:* Uten grenser kan flertallet undertrykke minoriteter
2. *Individets verdighet:* Noen rettigheter er så grunnleggende at de ikke kan stemmes bort
3. *Demokratiets forutsetninger:* Ytringsfrihet og stemmerett må beskyttes for at demokratiet skal fungere

**Argumenter mot grenser:**

1. *Demokratisk legitimitet:* Hvem kan overprøve folket?
2. *Elitisme:* Dommere (ikke-valgte) bestemmer over valgte representanter
3. *Fleksibilitet:* Samfunnet må kunne tilpasse seg

**Norsk løsning:**
- Grunnloven setter grenser
- Menneskerettighetene har forrang
- Domstolene kan prøve lovers grunnlovsmessighet
- Men: Stortinget kan endre Grunnloven med kvalifisert flertall

**Konklusjon:**
Moderne demokratier er konstitusjonelle demokratier der flertallsstyre kombineres med rettighetsbeskyttelse. Balansen mellom disse er i kontinuerlig utvikling.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        aiGradingEnabled: true
      }
    }
  ],
  exercises: []
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const RETTSLAERE_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_2_1,
  CHAPTER_RETTSLAERE_2_2,
  CHAPTER_RETTSLAERE_2_3,
  CHAPTER_RETTSLAERE_2_4,
  CHAPTER_RETTSLAERE_2_5,
  CHAPTER_RETTSLAERE_2_6,
  CHAPTER_RETTSLAERE_2_7,
  CHAPTER_RETTSLAERE_2_8,
  CHAPTER_RETTSLAERE_2_9,
  CHAPTER_RETTSLAERE_2_10
];

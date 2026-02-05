/**
 * Norsk VG3 - Analyse, retorikk og eksamen (utvidet)
 *
 * Følger LK20 kompetansemål:
 * - bruke metaspråk i skriftlig og muntlig analyse av tekster
 * - analysere retoriske virkemidler i mediespråk
 * - skrive fagartikler, litterære tolkninger og andre sakprosatekster
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// ANALYSE, RETORIKK OG EKSAMENSFORBEREDELSE
// ============================================================================

// ----------------------------------------------------------------------------
// 8.1 Retorisk analyse (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_1: TextbookChapter = {
  id: 'norsk-vg3-8-1',
  courseId: 'norsk-vg3',
  chapterNumber: '8.1',
  title: 'Retorisk analyse',
  description: 'Hvordan analysere retoriske virkemidler i taler, debattinnlegg og medietekster.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke metaspråk i skriftlig og muntlig analyse av tekster',
    'analysere retoriske virkemidler i mediespråk',
    'skrive retoriske analyser av sakprosa',
  ],
  content: [
    {
      id: 'norsk-vg3-8-1-intro',
      type: 'text',
      content: `## Retorisk analyse - kunsten å gjennomskue overtalelse

Retorikk er læren om talekunst og overtalelse. Retorisk analyse handler om å undersøke hvordan tekster forsøker å påvirke oss. I en tid med reklame, politisk kommunikasjon og sosiale medier er dette en kritisk kompetanse.

**Hvorfor retorisk analyse?**

Vi bombarderes daglig med budskap som vil påvirke oss:
- Politiske taler og debatter
- Reklame og markedsføring
- Nyhetskommentarer og kronikker
- Sosiale medier og influencere
- Debattinnlegg og leserinnlegg

Å kunne analysere hvordan disse tekstene virker, gjør oss til mer bevisste mottakere og bedre avsendere.

**Den retoriske situasjonen:**

Enhver retorisk tekst oppstår i en situasjon. For å forstå teksten må vi analysere:

**1. Avsender (hvem taler?):**
- Hvem er avsenderen?
- Hvilken posisjon og bakgrunn har de?
- Hvilken troverdighet (etos) har de?

**2. Mottaker (hvem tales det til?):**
- Hvem er målgruppen?
- Hva vet avsenderen om mottakeren?
- Hvordan tilpasses budskapet?

**3. Budskap (hva sies?):**
- Hva er hovedpåstanden?
- Hvilke argumenter brukes?
- Hva er formålet?

**4. Kontekst (når og hvor?):**
- Hvilken situasjon oppsto teksten i?
- Hva var «påtrengende» - hva krevde et svar?
- Hvilke muligheter og begrensninger skapte konteksten?

**5. Medium (hvordan formidles det?):**
- Tale, tekst, bilde, video?
- Hvilke muligheter gir mediet?
- Hvilke begrensninger?

**De tre appellformene:**

Aristoteles identifiserte tre hovedmåter å overtale på:

**Etos (troverdighet):**
Appellerer til avsenderens karakter og troverdighet. Vi lar oss lettere overtale av noen vi stoler på.

**Patos (følelser):**
Appellerer til mottakerens følelser. Glede, frykt, sinne, medfølelse - følelser kan være kraftige motivatorer.

**Logos (fornuft):**
Appellerer til fornuft og logikk. Fakta, statistikk, logiske slutninger.

De fleste effektive tekster kombinerer alle tre, men vektingen varierer.

**Kairos - det rette øyeblikket:**

Kairos handler om timing - å si det rette på det rette tidspunktet. En tale som passer perfekt i én situasjon, kan falle helt flatt i en annen.

Dyktige retorikere er oppmerksomme på kairos og tilpasser budskapet til øyeblikket.`,
    },
    {
      id: 'norsk-vg3-8-1-def-1',
      type: 'definition',
      title: 'Etos, patos og logos',
      content: `**De tre appellformene:**

**ETOS (troverdighet):**
Appell til avsenderens karakter og kompetanse.

*Hvordan bygges etos?*
- Vise kunnskap og ekspertise
- Fremstå som ærlig og pålitelig
- Vise at man forstår mottakeren
- Referere til egen erfaring
- Bruke tillitsskapende språk

*Eksempel:*
«Som lege med 20 års erfaring i akuttmedisin, vet jeg...»

**PATOS (følelser):**
Appell til mottakerens følelser.

*Vanlige følelser som aktiveres:*
- Frykt og bekymring
- Håp og optimisme
- Sinne og indignasjon
- Medfølelse og empati
- Stolthet og tilhørighet
- Skam og skyldfølelse

*Virkemidler for patos:*
- Konkrete fortellinger og eksempler
- Sterke bilder og metaforer
- Retoriske spørsmål
- Gjentakelse og oppbygging

*Eksempel:*
«Tenk deg at du våkner i morgen og barnet ditt er sykt...»

**LOGOS (fornuft):**
Appell til logikk og rasjonalitet.

*Hvordan brukes logos?*
- Fakta og statistikk
- Logiske slutninger
- Årsak-virkning-resonnementer
- Ekspertuttalelser
- Definisjon og avgrensning

*Eksempel:*
«Ifølge tall fra SSB har andelen økt med 15% de siste fem årene...»

**Balansen:**
De fleste vellykkede tekster kombinerer alle tre. Kun logos kan virke kaldt, kun patos kan virke manipulerende, kun etos kan virke selvopptatt.`,
    },
    {
      id: 'norsk-vg3-8-1-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler',
      content: `**Språklige virkemidler i retorikk:**

**GJENTAKELSE (repetisjon):**
Gjentar ord eller fraser for effekt.
«Vi skal kjempe på strendene, vi skal kjempe på landingsplassene, vi skal kjempe...» (Churchill)

**ANAFOR:**
Gjentakelse av samme ord i begynnelsen av setninger.
«I have a dream... I have a dream... I have a dream...» (King)

**TRIKOLON:**
Tredeling for rytme og vekt.
«Folket, av folket, for folket» (Lincoln)

**RETORISK SPØRSMÅL:**
Spørsmål som ikke forventer svar, men får mottakeren til å tenke.
«Hvor lenge skal vi akseptere dette?»

**METAFOR:**
Sammenligning uten «som».
«Samfunnet er en organisme.»

**KONTRAST (antitese):**
Motsetninger satt opp mot hverandre.
«Et lite skritt for et menneske, et stort sprang for menneskeheten.»

**IRONI:**
Sier det motsatte av det man mener.
«Ja, det var jo en fantastisk ide...»

**HYPERBOL:**
Overdrivelse for effekt.
«Alle vet at dette er sant.»

**EUFEMISME:**
Formildende omskrivning.
«Gikk bort» i stedet for «døde».

**ALLUSJON:**
Henvisning til noe kjent (bibelen, litteratur, historie).
«Vi står ved en skillevei» (alluderer til bibelske og litterære motiver).`,
    },
    {
      id: 'norsk-vg3-8-1-def-3',
      type: 'definition',
      title: 'Argumentasjonsanalyse',
      content: `**Toulmins argumentasjonsmodell:**

Stephen Toulmin utviklet en modell for å analysere argumenter:

**1. PÅSTAND (claim):**
Det avsenderen vil ha oss til å tro eller gjøre.
«Vi bør innføre moms på kjøtt.»

**2. BELEGG (data/grounds):**
Fakta eller informasjon som støtter påstanden.
«Kjøttproduksjon står for 15% av globale klimautslipp.»

**3. HJEMMEL (warrant):**
Den underliggende regelen som forbinder belegg og påstand.
«Vi bør avgiftsbelegge det som skader miljøet.»

**4. RYGGDEKNING (backing):**
Støtte for hjemmelen.
«Avgifter har tidligere vist seg effektive for å endre adferd.»

**5. STYRKEMARKØR (qualifier):**
Uttrykk som viser hvor sikker konklusjonen er.
«Sannsynligvis», «i de fleste tilfeller», «trolig».

**6. UNNTAK (rebuttal):**
Omstendigheter der påstanden ikke gjelder.
«Med mindre man finner andre effektive tiltak.»

**Bruk i analyse:**
Ved å identifisere disse elementene kan du:
- Vurdere argumentets styrke
- Finne svakheter
- Forstå hva som tas for gitt (hjemmelen)
- Se hva som mangler`,
    },
    {
      id: 'norsk-vg3-8-1-example-1',
      type: 'example',
      title: 'Retorisk analyse: Greta Thunbergs tale til FN (2019)',
      problem: `Analyser utdraget fra Greta Thunbergs tale til FN i 2019:

«How dare you! You have stolen my dreams and my childhood with your empty words. And yet I'm one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you!»`,
      solution: `**Retorisk situasjon:**

**Avsender:**
Greta Thunberg, 16 år gammel klimaaktivist. Hun har bygget etos gjennom skolestrekken og internasjonal oppmerksomhet.

**Mottaker:**
Verdens ledere samlet i FN, men også global offentlighet via medier.

**Kontekst:**
FNs klimatoppmøte 2019. Økende klimabevissthet, men også frustrasjon over manglende handling.

**Kairos:**
Perfekt timing - etter en sommer med skogbranner og klimademonstrasjoner.

**Appellformer:**

**Etos:**
- Som ung representerer hun fremtiden som er truet
- Hun har «ofret» skolegang for saken
- Hennes direkthet og sinne fremstår som autentisk

**Patos (dominerende):**
- Sterke følelsesord: «stolen», «suffering», «dying»
- Personlig: «my dreams», «my childhood»
- Indignasjon: «How dare you!»
- Skremmende bilder: «mass extinction», «ecosystems collapsing»

**Logos:**
- Refererer til vitenskapelige fakta (masseutryddelse)
- Kontrasterer alvoret med ledernes fokus på økonomi

**Retoriske virkemidler:**

**Anafor og gjentakelse:**
«How dare you!» rammer inn utdraget og forsterker indignasjon.

**Trikolon:**
«People are suffering. People are dying. Entire ecosystems are collapsing.»
Tre ledd med økende alvor.

**Kontrast:**
«mass extinction» vs. «fairy tales of eternal economic growth»
Vitenskapelig alvor vs. ledernes virkelighetsfjerne fokus.

**Direkte tiltale:**
«You» - anklagende, konfronterende.

**Virkningsanalyse:**
Talen var ekstremt effektiv som virale øyeblikk. Det følelsesmessige utbruddet «How dare you!» ble ikonisk. Samtidig kritiserte noen at den var for emosjonell og manglet konkrete løsninger.

**Konklusjon:**
Talen er et eksempel på hvordan patos kan være ekstremt kraftfullt, særlig kombinert med etos. Thunbergs ungdom og sinne gir henne en stemme som voksne politikere ikke kan ha.`,
    },
    {
      id: 'norsk-vg3-8-1-example-2',
      type: 'example',
      title: 'Analyse: Aviskommentar',
      problem: `Analyser et typisk debattinnlegg eller aviskommentar. Hvilke retoriske grep brukes?`,
      solution: `**Typiske trekk i aviskommentarer:**

**Struktur:**
1. Innledning som fanger oppmerksomhet (ofte med en aktuell hendelse)
2. Presentasjon av hovedsynspunkt
3. Argumentasjon med eksempler og belegg
4. Imøtegåelse av motargumenter
5. Avslutning med oppfordring eller konklusjon

**Vanlige etos-strategier:**
- Vise kjennskap til saken
- Referere til egen erfaring
- Posisjonere seg som «fornuftig» mellomposisjon
- Distansere seg fra «ekstreme» syn

**Vanlige patos-strategier:**
- Enkelteksempler som vekker medfølelse
- Ironi og sarkasme (vekker følelse av overlegenhet hos enige lesere)
- Fryktappeller
- Moralsk indignasjon

**Vanlige logos-strategier:**
- Statistikk og tall
- Ekspertuttalelser
- Historiske paralleller
- Logiske «hvis-så»-resonnementer

**Fallgruver å se etter:**
- Stråmannsargumentasjon (forvrenger motstanderens syn)
- Falske dikotomier («enten-eller» når det finnes flere muligheter)
- Appell til autoritet uten relevans
- Generalisering fra enkelteksempler
- Ad hominem (angriper person, ikke argument)

**Analysespørsmål:**
1. Hva er hovedpåstanden?
2. Hvilke argumenter brukes?
3. Hvilken appellform dominerer?
4. Hvilke retoriske virkemidler brukes?
5. Hvem er målgruppen?
6. Er argumentasjonen gyldig?
7. Hva tas for gitt (skjulte premisser)?`,
    },
    {
      id: 'norsk-vg3-8-1-tip-1',
      type: 'tip',
      title: 'Mal for retorisk analyse',
      content: `**Disposisjon for retorisk analyse:**

**1. Innledning (1-2 avsnitt):**
- Presenter teksten (tittel, forfatter, publiseringssted, dato)
- Kort om hva teksten handler om
- Angi din hovedpåstand om tekstens retorikk

**2. Den retoriske situasjonen (1-2 avsnitt):**
- Avsender og etos
- Mottaker/målgruppe
- Kontekst og kairos
- Formål

**3. Innholdsanalyse (2-3 avsnitt):**
- Hovedpåstand og argumenter
- Bruk av etos, patos, logos
- Hvilken appellform dominerer?

**4. Virkemiddelanalyse (2-3 avsnitt):**
- Språklige virkemidler med eksempler
- Struktur og oppbygging
- Hvordan støtter virkemidlene budskapet?

**5. Vurdering (1-2 avsnitt):**
- Er teksten effektiv? Hvorfor/hvorfor ikke?
- Styrker og svakheter i argumentasjonen
- Etiske vurderinger (manipulasjon?)

**6. Avslutning:**
- Oppsummer hovedfunn
- Evt. refleksjon over tekstens betydning

**Tips:**
- Bruk fagterminologi presist
- Gi eksempler fra teksten (sitater)
- Vurder, ikke bare beskriv
- Koble virkemidler til effekt`,
    },
    {
      id: 'norsk-vg3-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser bruken av appellformer i en selvvalgt tale eller kronikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn eksempler på etos, patos og logos i teksten.',
            solution: 'Konkrete sitater som viser hver appellform.',
          },
          {
            label: 'b',
            task: 'Hvilken appellform dominerer, og hvorfor tror du det?',
            solution: 'Vurdering av dominerende appellform med begrunnelse i tekstens formål og målgruppe.',
          },
          {
            label: 'c',
            task: 'Hvor effektiv er denne kombinasjonen?',
            solution: 'Vurdering av om balansen mellom appellformene tjener tekstens formål.',
          },
        ],
        solution: 'Analysen skal vise evne til å identifisere og vurdere appellformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identifiser retoriske virkemidler i en politisk tale.',
        hints: [
          'Velg en tale (f.eks. fra Stortinget, en valgkamp, eller internasjonal)',
          'Let etter gjentakelse, trikolon, kontraster, retoriske spørsmål',
          'Vurder effekten av hvert virkemiddel',
        ],
        solution: 'Oppgaven krever evne til å identifisere og analysere språklige virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort retorisk analyse av en aviskommentar.',
        hints: [
          'Velg en aktuell kommentar fra en norsk avis',
          'Bruk malen for retorisk analyse',
          'Fokuser på 2-3 sentrale virkemidler',
          'Vurder argumentasjonens styrke',
        ],
        solution: 'Analysen skal vise evne til systematisk retorisk analyse med fagterminologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser retorikken i en reklame eller influencer-post.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv den retoriske situasjonen.',
            solution: 'Hvem er avsender, hvem er målgruppe, hva er formålet, hvilken kontekst?',
          },
          {
            label: 'b',
            task: 'Hvilke appellformer og virkemidler brukes?',
            solution: 'Identifiser etos (kjendis, ekspert), patos (livsstil, drømmer), logos (produktinfo).',
          },
          {
            label: 'c',
            task: 'Diskuter etiske aspekter ved denne retorikken.',
            solution: 'Refleksjon over manipulasjon, skjult reklame, målgruppe (barn/unge).',
          },
        ],
        solution: 'Oppgaven krever evne til å overføre retorisk analyse til moderne medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 8.2 Essay og sakprosa (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_2: TextbookChapter = {
  id: 'norsk-vg3-8-2',
  courseId: 'norsk-vg3',
  chapterNumber: '8.2',
  title: 'Essay og kreativ sakprosa',
  description: 'Essayet som sjanger - fra Montaigne til moderne kreativ sakprosa.',
  estimatedMinutes: 75,
  competenceGoals: [
    'skrive fagartikler, litterære tolkninger og andre sakprosatekster med faglig innhold og utforskende tilnærming',
    'skrive essay som utforsker tekster',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  content: [
    {
      id: 'norsk-vg3-8-2-intro',
      type: 'text',
      content: `## Essayet - den tenkende prosa

Essayet er en av litteraturens frieste former. Det kombinerer personlig refleksjon med faglig innsikt, og det søker sannhet gjennom utprøving snarere enn påstand. Navnet kommer fra det franske «essayer» - å forsøke, å prøve.

**Michel de Montaigne og essayets fødsel:**

Den franske forfatteren Michel de Montaigne (1533-1592) regnes som essayets oppfinner. I sine «Essais» (1580) reflekterte han over alt fra kannibaler til vennskapets vesen, alltid med seg selv som utgangspunkt.

Montaigne skrev: «Jeg er selv innholdet i min bok.» Dette personlige utgangspunktet ble essayets kjennemerke.

**Hva er et essay?**

Et essay er:
- **Personlig:** Forfatterens stemme og perspektiv er synlig
- **Utforskende:** Teksten «tenker høyt», prøver ut ideer
- **Ikke-systematisk:** Følger tankens bevegelser, ikke streng logikk
- **Litterært:** Bruker virkemidler som metaforer, bilder, fortelling
- **Reflekterende:** Går i dybden, ser ting fra flere sider

Et essay er IKKE:
- En objektiv framstilling av fakta
- En streng argumentasjon med tese og antitese
- En rapport eller utredning
- Ren selvbiografi

**Ulike essay-typer:**

**Det formelle essayet:**
Mer strukturert, akademisk preg, behandler et tema systematisk (men fortsatt med personlig stemme).

**Det uformelle (personlige) essayet:**
Friere form, mer assosiativt, sterkere personlig preg. Tanken vandrer.

**Det kritiske essayet:**
Analyserer kunst, litteratur, kultur. Kombinerer analyse med refleksjon.

**Det polemiske essayet:**
Tar stilling, argumenterer for et syn, men med essayets reflekterende stil.

**Norske essayister:**

Norge har en rik essaytradisjon:
- **Arne Garborg** (1851-1924): Kombinerte essay og fortelling
- **Sigurd Hoel** (1890-1960): Kulturkritiske essays
- **Jens Bjørneboe** (1920-1976): Polemiske, engasjerte essays
- **Dag Solstad** (f. 1941): Intellektuelle essays om kunst og politikk
- **Agnes Ravatn** (f. 1983): Personlige essays om hverdagsliv

**Essayet i dag:**

Essayet opplever en renessanse. Forfattere som Agnes Ravatn, Ida Hegazi Høyer og Karl Ove Knausgård (i sine essays) utforsker sjangeren. Podkaster og nyhetsbrev tar opp essayets utforskende tilnærming.

«Kreativ sakprosa» er blitt et begrep for tekster som kombinerer det personlige og det saklige, det litterære og det informative.`,
    },
    {
      id: 'norsk-vg3-8-2-def-1',
      type: 'definition',
      title: 'Essayets kjennetegn',
      content: `**FORM:**
- Relativt kort (men kan variere)
- Fri struktur (ikke fast mal)
- Avsnittene følger tankens bevegelser
- Ofte sirkulær eller assosiativ oppbygging
- Kan kombinere fortelling, refleksjon, argumentasjon

**STIL:**
- Personlig stemme («jeg»)
- Litterære virkemidler (metaforer, bilder)
- Variasjon i tone (alvorlig, humoristisk, ironisk)
- Dialogisk - henvender seg til leseren
- Konkrete eksempler og anekdoter

**INNHOLD:**
- Et tema eller en problemstilling utforskes
- Personlig perspektiv og erfaring
- Refleksjon og undring
- Ofte åpen avslutning (ikke endelig svar)
- Kan trekke inn fagkunnskap, men ikke systematisk

**ESSAYETS «FORMEL»:**
Personlig erfaring + refleksjon + faglig innsikt + litterær form = essay

**FORSKJELL FRA:**
| Kåseri | Essay |
|--------|-------|
| Lett tone | Kan være alvorlig |
| Underholdning | Erkjennelse |
| Morsomt poeng | Åpen refleksjon |

| Artikkel | Essay |
|----------|-------|
| Objektiv | Subjektiv |
| Informerende | Utforskende |
| Svar | Spørsmål |`,
    },
    {
      id: 'norsk-vg3-8-2-def-2',
      type: 'definition',
      title: 'Kreativ sakprosa',
      content: `**Kreativ sakprosa** er en samlebetegnelse for sakprosatekster som bruker litterære virkemidler.

**Inkluderer:**
- Essay
- Litterær journalistikk
- Reiseskildringer
- Biografier og selvbiografier
- Naturbeskrivelser
- Kulturkritikk

**Kjennetegn:**
- Faktabasert, men litterært formet
- Subjektiv stemme og perspektiv
- Bruker fortelling, scener, dialog
- Estetisk bevisst språk
- Utforsker heller enn bare informerer

**Eksempler:**
- Åsne Seierstads «Bokhandleren i Kabul» (litterær journalistikk)
- Karl Ove Knausgårds essays (kulturkritikk)
- Morten Strøksnes' «Havboka» (naturskriving)
- Agnes Ravatns essays (personlig sakprosa)

**Sjangerblanding:**
Kreativ sakprosa utfordrer skillet mellom fakta og fiksjon, mellom journalistikk og litteratur. Dette reiser spørsmål om sannhet, etikk og kunstnerisk frihet.

**Betydning:**
Sjangeren har gjort sakprosa mer tilgjengelig og engasjerende. Den viser at faglighet ikke trenger å bety kjedelig.`,
    },
    {
      id: 'norsk-vg3-8-2-example-1',
      type: 'example',
      title: 'Analyse: Essay av Jens Bjørneboe',
      problem: `Jens Bjørneboe var en av Norges fremste essayister. Analyser hans essayistiske stil med utgangspunkt i hans kulturkritikk.`,
      solution: `**Bjørneboe som essayist:**

Jens Bjørneboe (1920-1976) skrev essays gjennom hele sin karriere. Han var polemisk, engasjert og kompromissløs.

**Temaer:**
- Kritikk av fengselsvesenet
- Kritikk av psykiatrien
- Angrep på hykleri og dobbeltmoral
- Forsvar for individets frihet
- Europeisk kultur og historie

**Stilistiske trekk:**

**Polemisk kraft:**
Bjørneboe tar kraftig stilling. Han bruker ironi, sarkasme og direkte angrep. «Norge er et land der folk blir sinnssyke av å bo.»

**Personlig engasjement:**
Han skjuler ikke sitt raseri eller sin fortvilelse. Følelsene er synlige i teksten.

**Intellektuell dybde:**
Tross polemikken er essayene kunnskapsrike. Han trekker inn historie, filosofi, litteratur.

**Aforistiske formuleringer:**
Bjørneboe mester den slagkraftige setningen: «Skriv som om ingen leser det, og skriv som om alle leser det.»

**Eksempel på analyse:**
I essayet «Norge, mitt Norge» (fra «Vi som elsket Amerika») kritiserer Bjørneboe norsk selvtilfredshet. Han bruker:
- Ironi: Omtaler Norge som «verdens beste land» med tydelig distanse
- Konkrete eksempler: Trekker frem spesifikke saker
- Historiske paralleller: Sammenligner med andre land og tider
- Personlig erfaring: Hans egen konflikt med norske institusjoner

**Betydning:**
Bjørneboes essays viser at sjangeren kan være et våpen i kampen for rettferdighet. Han brukte essayets frihet til å si det ingen andre turde.`,
    },
    {
      id: 'norsk-vg3-8-2-example-2',
      type: 'example',
      title: 'Analyse: Moderne essay',
      problem: `Hvordan skiller moderne essay seg fra tradisjonelle? Analyser tendenser i samtidsessayistikken.`,
      solution: `**Tendenser i moderne essay:**

**1. Det personlige som utgangspunkt:**
Samtidsessayister tar ofte utgangspunkt i egen kropp, helse, identitet. Agnes Ravatns essays om hverdagsliv, Vigdis Hjorths om familie.

**2. Sjangerblanding:**
Grensene mellom essay, selvbiografi, roman og journalistikk er flytende. Knausgårds «Min kamp» har essayistiske partier.

**3. Feminisme og identitetspolitikk:**
Mange essays utforsker kjønn, seksualitet, etnisitet. Essaysamlinger som «Skarpe satisfaksjoner» (red. Kjersti Annesdatter Skomsvold).

**4. Klima og natur:**
Økokritiske essays om menneskets forhold til naturen. Morten Strøksnes, Espen Stueland.

**5. Sosiale medier og essay:**
Essay-lignende tekster på sosiale medier, nyhetsbrev, podkaster. Demokratisering av sjangeren.

**Formelle endringer:**
- Kortere tekster (tilpasset digital lesing)
- Mer direkte, mindre høytidelig stil
- Større visuell bevissthet (bilder, design)
- Fragmentarisk form

**Kontinuitet:**
Tross endringer beholder essayet sin kjerne: Den personlige stemmen som utforsker et tema, søker forståelse, tenker høyt.

**Eksempel: Agnes Ravatn**
I «Fugletribunalet» og essays bruker Ravatn:
- Hverdagslige utgangspunkt
- Humoristisk distanse
- Selvkritikk og selvransakelse
- Overraskende vendinger
- Litterære referanser`,
    },
    {
      id: 'norsk-vg3-8-2-tip-1',
      type: 'tip',
      title: 'Hvordan skrive essay',
      content: `**Tips for essayskriving:**

**FINN ET TEMA:**
- Noe du lurer på, undrer deg over
- Noe du har erfaring med
- Noe som engasjerer deg
- Start gjerne med noe konkret

**START PERSONLIG:**
- Begynn med en erfaring, et øyeblikk, en observasjon
- La leseren inn i din verden
- Unngå abstrakte innledninger

**TENK HØYT:**
- Vis tankeprosessen
- Bruk «kanskje», «jeg lurer på», «det slår meg»
- Ikke lat som du har alle svar

**VEKSLE MELLOM:**
- Det personlige og det allmenne
- Det konkrete og det abstrakte
- Det nære og det fjerne
- Erfaring og refleksjon

**BRUK LITTERÆRE VIRKEMIDLER:**
- Metaforer og sammenligninger
- Konkrete bilder
- Variasjon i setningslengde
- Dialog (også indre dialog)

**LA DET VÆRE ÅPENT:**
- Du trenger ikke konkludere endelig
- Et godt essay åpner for videre tenkning
- Avslutt gjerne med et spørsmål eller et bilde

**EKSEMPELSTRUKTUR:**
1. Konkret inngang (hendelse, observasjon)
2. Utvidelse (hva fikk dette meg til å tenke på?)
3. Refleksjon (hva betyr dette?)
4. Dybde (trekke inn andre perspektiver)
5. Tilbake til det konkrete (sirkulær)
6. Åpen avslutning`,
    },
    {
      id: 'norsk-vg3-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et essay og identifiser sjangerens kjennetegn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan kommer den personlige stemmen til uttrykk?',
            solution: 'Se etter «jeg», personlige erfaringer, subjektive vurderinger, følelser og holdninger.',
          },
          {
            label: 'b',
            task: 'Finn eksempler på litterære virkemidler.',
            solution: 'Identifiser metaforer, bilder, fortelling, variasjon i tone.',
          },
          {
            label: 'c',
            task: 'Hvordan er teksten utforskende snarere enn konkluderende?',
            solution: 'Se etter spørsmål, usikkerhet, flere perspektiver, åpen avslutning.',
          },
        ],
        solution: 'Oppgaven krever evne til å gjenkjenne essayets kjennetegn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign et essay og en fagartikkel om samme tema.',
        hints: [
          'Finn to tekster om samme emne',
          'Sammenlign stemme, stil, struktur',
          'Hva er forskjellen i formål?',
          'Hvilken foretrekker du, og hvorfor?',
        ],
        solution: 'Sammenligningen skal tydeliggjøre essayets særtrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et kort essay (500-800 ord).',
        hints: [
          'Velg et tema som engasjerer deg',
          'Start med noe konkret og personlig',
          'La tanken vandre, men hold en rød tråd',
          'Bruk litterære virkemidler',
          'Avslutt åpent',
        ],
        solution: 'Kreativ skriveoppgave som viser forståelse for essaysjangeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser et essay av en norsk forfatter.',
        hints: [
          'Velg fra Bjørneboe, Solstad, Ravatn eller andre',
          'Beskriv den retoriske situasjonen',
          'Analyser stil og virkemidler',
          'Vurder essayets kvalitet og relevans',
        ],
        solution: 'Analysen skal vise evne til litterær analyse av sakprosa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 8.3 Litterær analyse og tolkningsmetoder (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_3: TextbookChapter = {
  id: 'norsk-vg3-8-3',
  courseId: 'norsk-vg3',
  chapterNumber: '8.3',
  title: 'Litterær analyse og tolkning',
  description: 'Metoder og begreper for analyse og tolkning av litterære tekster.',
  estimatedMinutes: 85,
  competenceGoals: [
    'bruke metaspråk i skriftlig og muntlig analyse av tekster',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-8-3-intro',
      type: 'text',
      content: `## Litterær analyse - verktøy for forståelse

Litterær analyse handler om å undersøke hvordan tekster skaper mening. Det er en systematisk tilnærming som bruker faglige begreper og metoder for å forstå litteraturen bedre.

**Hvorfor analyse?**

Analyse er ikke målet i seg selv, men et verktøy for:
- Dypere forståelse av teksten
- Bevisste leseopplevelser
- Evne til å begrunne tolkninger
- Innsikt i litterære tradisjoner
- Kritisk tenkning

**Analyse vs. tolkning:**

**Analyse** er å undersøke tekstens bestanddeler: struktur, virkemidler, språk, karakterer, osv. Det er relativt «objektivt» - vi kan bli enige om at teksten har enderim eller førstepersonsforteller.

**Tolkning** er å foreslå hva teksten betyr, hva den uttrykker. Det er mer subjektivt - ulike lesere kan tolke ulikt. Men tolkninger må begrunnes i analysen.

**Nivåer i litterær analyse:**

**1. Det språklige nivået:**
Ordvalg, setningsoppbygging, stilfigurer, klang og rytme.

**2. Det narrative nivået:**
Handling, struktur, fortellerstemme, synsvinkel, tid.

**3. Det tematiske nivået:**
Motiver, temaer, symboler, hva teksten «handler om».

**4. Det kontekstuelle nivået:**
Historisk kontekst, forfatterens situasjon, sjangertradisjon.

**Den hermeneutiske sirkelen:**

Tolkning er en sirkulær prosess: Vi forstår delene ut fra helheten, og helheten ut fra delene. Vi går frem og tilbake mellom nærlesning og oversikt.

**Eksempel:** For å forstå en metafor må vi forstå diktets helhet, men for å forstå helheten må vi forstå metaforene.

**Åpenhet og begrensning:**

Litterære tekster er åpne for ulike tolkninger. Men ikke alle tolkninger er like gode. En god tolkning:
- Er forankret i tekstens detaljer
- Er konsistent (henger sammen)
- Er fruktbar (åpner teksten, gir innsikt)
- Tar hensyn til kontekst`,
    },
    {
      id: 'norsk-vg3-8-3-def-1',
      type: 'definition',
      title: 'Analysebegreper for prosa',
      content: `**FORTELLERSTEMME:**
Hvem forteller historien?

- **Førstepersonsforteller:** «Jeg» - begrenset til én persons perspektiv
- **Tredjepersonsforteller:** «Han/hun» - kan være allvitende eller begrenset
- **Pålitelig/upålitelig forteller:** Kan vi stole på fortelleren?

**SYNSVINKEL:**
Hvem ser vi hendelsene gjennom?
- Indre synsvinkel (én karakter)
- Ytre synsvinkel (observatør)
- Vekslende synsvinkel

**TID:**
- **Kronologisk:** Hendelsene fortelles i rekkefølge
- **Tilbakeblikk (analepse):** Hopp tilbake i tid
- **Frempek (prolepse):** Hint om fremtiden
- **In medias res:** Begynner midt i handlingen

**KARAKTERER:**
- **Runde karakterer:** Komplekse, utvikler seg
- **Flate karakterer:** Enkle, statiske
- **Protagonist:** Hovedperson
- **Antagonist:** Motspiller

**MILJØ/SETTING:**
Tid og sted for handlingen. Ofte symbolsk betydning.

**KOMPOSISJON:**
- Eksposisjon (introduksjon)
- Konflikt/komplikasjon
- Spenningsoppbygging
- Klimaks
- Avtakende spenning
- Avslutning

**MOTIV OG TEMA:**
- **Motiv:** Konkrete gjentakende elementer (reise, sykdom, hage)
- **Tema:** Abstrakte emner teksten handler om (kjærlighet, døden, frihet)`,
    },
    {
      id: 'norsk-vg3-8-3-def-2',
      type: 'definition',
      title: 'Analysebegreper for lyrikk',
      content: `**FORM:**

**Strofe:** Vers-avsnitt
**Vers:** Én linje i diktet
**Rim:**
- Enderim (aa, bb / abab / abba)
- Bokstavrim (allitterasjon)
- Assonans (vokalklang)

**Rytme:**
- Versemål (jambe, troké, daktyl, anapest)
- Fri rytme

**STILFIGURER:**

**Bildespråk:**
- Metafor: «Livet er en reise»
- Sammenligning (simile): «Livet er som en reise»
- Personifikasjon: «Trærne danset»
- Besjeling: Gi liv til døde ting
- Symbol: Konkret uttrykk for noe abstrakt

**Lydlige virkemidler:**
- Allitterasjon: «Bekken ble borte i bjørka»
- Assonans: Vokalgjentakelse
- Onomatopoetikon: Lydmalende ord

**Retoriske figurer:**
- Gjentakelse
- Kontrast
- Paradoks
- Ironi
- Retorisk spørsmål

**TOLKNING AV LYRIKK:**
1. Les diktet flere ganger
2. Hva handler det om på overflaten?
3. Analyser form og virkemidler
4. Hvordan støtter formen innholdet?
5. Hva er diktets «dypere» mening?
6. Kontekst: Når er det skrevet? Av hvem?`,
    },
    {
      id: 'norsk-vg3-8-3-def-3',
      type: 'definition',
      title: 'Analysebegreper for drama',
      content: `**DRAMATURGI:**

**Oppbygging:**
- Eksposisjon (bakgrunn)
- Komplikasjon (konflikt utvikles)
- Peripeti (vendepunkt)
- Klimaks (høydepunkt)
- Katastrofe/løsning

**Aristoteles' enheter:**
- Tid (24 timer)
- Sted (ett sted)
- Handling (én hovedhandling)

**DRAMATISKE ELEMENTER:**

**Dialog:**
- Hovedmiddel for å drive handlingen
- Karakteriserer personene
- Undertekst (det usagte)

**Monolog:**
- Karakter snakker alene
- Gir innsikt i tanker/følelser

**Sceneanvisning:**
- Beskriver setting, bevegelser, tonefall

**KONFLIKTER:**
- Person mot person
- Person mot samfunn
- Person mot seg selv
- Person mot natur/skjebne

**KARAKTERER I DRAMA:**
- Protagonist / antagonist
- Hjelpere / motstandere
- Utvikling gjennom stykket

**IBSENS TEKNIKK (analytisk drama):**
- Fortiden avdekkes gradvis
- Hemmeligheter driver handlingen
- Symbolbruk
- Realistisk dialog med undertekst`,
    },
    {
      id: 'norsk-vg3-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Nærlesning av et dikt',
      problem: `Vis hvordan man gjør en nærlesning av et kort dikt. Bruk Olav H. Hauges «Det er den draumen»:

Det er den draumen me ber på
at noko vidunderleg skal skje,
at det må skje –
at tidi skal opna seg
at hjarta skal opna seg
at dører skal opna seg
at berget skal opna seg
at kjeldor skal springa –
at draumen skal opna seg,
at me ei morgonstund skal glida inn
på ein våg me ikkje har visst um.`,
      solution: `**NÆRLESNING:**

**Første inntrykk:**
Diktet handler om drøm og håp - en lengsel etter noe annet, noe nytt.

**Form:**
- Frie vers (ingen fast rytme eller rim)
- Men tydelig struktur med gjentakelse
- Én lang setning (ett åndedrag)

**Analysepunkter:**

**1. Anaforen «at ... skal opna seg»:**
Gjentakelsen skaper rytme og intensitet. Det bygger opp mot klimaks. Samtidig viser det drømmens mange aspekter.

**2. Progresjonen:**
- Tid → hjarte → dører → berg → kjeldor → draumen
- Fra abstrakt (tid) til konkret (fjell, kilder) og tilbake til abstrakt (drømmen)
- Naturbilder: Berget som åpner seg, kilder som springer

**3. «Me» vs. «eg»:**
Diktet bruker «me» (vi), ikke «eg». Drømmen er felles, menneskelig.

**4. Avslutningen:**
«glida inn på ein våg me ikkje har visst um»
- Båtmetafor (våg = vik)
- Det ukjente som mål
- «Glida» = passivt, mottakende

**5. Tvetydighet:**
Er dette naivt håp eller eksistensiell lengsel? Religiøst eller sekulært?

**Tolkning:**
Diktet uttrykker en grunnleggende menneskelig lengsel etter forandring, åpenhet, det nye. Gjentakelsen av «opna seg» viser at denne åpningen må skje på mange nivåer - i tid, hjerte, verden. Avslutningen er åpen - vi vet ikke hva vågen inneholder.

**Kontekst:**
Hauge (1908-1994) var påvirket av mystikk og østlig filosofi. Diktet kan leses som uttrykk for åndelig lengsel.`,
    },
    {
      id: 'norsk-vg3-8-3-tip-1',
      type: 'tip',
      title: 'Mal for litterær analyse',
      content: `**DISPOSISJON FOR LITTERÆR ANALYSE:**

**1. INNLEDNING:**
- Presenter teksten (forfatter, tittel, år, sjanger)
- Kort om innhold/handling
- Din hovedtolkning (tese)

**2. HANDLINGSREFERAT (kort!):**
- Bare det nødvendige for analysen
- Ikke gjenfortell hele teksten

**3. ANALYSE AV FORM/VIRKEMIDLER:**
- Velg de viktigste trekkene
- Gi eksempler fra teksten
- Forklar effekten

**4. TEMATISK ANALYSE:**
- Hva handler teksten «egentlig» om?
- Koble form og innhold
- Hvordan støtter virkemidlene temaet?

**5. KONTEKSTUALISERING (valgfritt):**
- Historisk kontekst
- Forfatterens situasjon
- Sammenligning med andre tekster

**6. AVSLUTNING:**
- Oppsummer hovedpoeng
- Vurder tekstens betydning/kvalitet
- Kan åpne for videre refleksjon

**TIPS:**
- Bruk fagterminologi presist
- Begrunn påstander med sitater
- Vær konkret - unngå generelle fraser
- La analyse og tolkning gå sammen
- Ha en tydelig struktur`,
    },
    {
      id: 'norsk-vg3-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjør en nærlesning av et selvvalgt dikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv diktets form (rim, rytme, strofer).',
            solution: 'Konkret beskrivelse av formelle trekk.',
          },
          {
            label: 'b',
            task: 'Identifiser og analyser minst tre virkemidler.',
            solution: 'Bildespråk, gjentakelser, lydlige virkemidler etc. med eksempler.',
          },
          {
            label: 'c',
            task: 'Forklar hvordan formen støtter innholdet.',
            solution: 'Kobling mellom formelle valg og tematikk/stemning.',
          },
        ],
        solution: 'Analysen skal vise evne til systematisk nærlesning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser fortellerposisjon i en novelle eller roman.',
        hints: [
          'Hvem forteller? (jeg/han/hun)',
          'Hva vet fortelleren?',
          'Er fortelleren pålitelig?',
          'Hvordan påvirker dette tolkningen?',
        ],
        solution: 'Analysen skal vise forståelse for narratologiske begreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en litterær analyse av en selvvalgt tekst.',
        hints: [
          'Velg en tekst du kjenner godt',
          'Bruk malen for analyse',
          'Fokuser på 2-3 hovedpoeng',
          'Bruk fagterminologi',
          'Sitér fra teksten',
        ],
        solution: 'Analysen skal vise evne til selvstendig litterær analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to tekster med lignende tema.',
        hints: [
          'Velg tekster fra ulike perioder eller sjangre',
          'Hva er likt i tematikken?',
          'Hvordan behandles temaet ulikt?',
          'Hva sier forskjellene om tid og kontekst?',
        ],
        solution: 'Sammenligningen skal vise evne til komparativ analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 8.4 Eksamensforberedelse (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_4: TextbookChapter = {
  id: 'norsk-vg3-8-4',
  courseId: 'norsk-vg3',
  chapterNumber: '8.4',
  title: 'Eksamensforberedelse',
  description: 'Praktiske råd og strategier for skriftlig og muntlig eksamen i norsk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'skrive fagartikler, litterære tolkninger og andre sakprosatekster med faglig innhold og utforskende tilnærming',
    'bruke fagkunnskap i muntlige presentasjoner',
    'mestre formkrav i hovedmål og sidemål',
  ],
  content: [
    {
      id: 'norsk-vg3-8-4-intro',
      type: 'text',
      content: `## Forberedelse til norskeksamen

Norskeksamen i VG3 tester et bredt spekter av ferdigheter: skriving, analyse, litteraturkunnskap, språkkunnskap og muntlig fremstilling. God forberedelse handler om å forstå hva som forventes og å øve målrettet.

**Skriftlig eksamen:**

Den skriftlige eksamen varer i 5 timer og består av:
- **Kortsvar:** Flere kortere oppgaver (ofte analyse, begrepsforklaring)
- **Langsvar:** Én lengre tekst (tolkning, drøfting, essay)

Du skal skrive på hovedmål, og deler av besvarelsen på sidemål.

**Oppgavetyper:**

**Kortsvarsoppgaver:**
- Analyser et utdrag (dikt, prosautdrag)
- Sammenlign to tekster
- Forklar begreper
- Drøft et utsagn kort

**Langsvarsoppgaver:**
- Litterær tolkning (analyse av hel tekst)
- Drøftende tekst (diskuter et tema med teksteksempler)
- Essay (utforskende, personlig)
- Resonnerende tekst (fagartikkel)

**Muntlig eksamen:**

Muntlig eksamen består vanligvis av:
1. **Forberedelsesdel:** Du får et tema/tekst og forbereder deg (ofte 24-48 timer)
2. **Presentasjon:** Du presenterer din forberedte del (ca. 10 minutter)
3. **Samtale:** Sensorene stiller spørsmål (ca. 20 minutter)

**Vurderingskriterier:**

Eksamen vurderes etter:
- **Innhold:** Relevans, dybde, faglig forståelse
- **Struktur:** Oppbygging, sammenheng, sjangerbeherskelse
- **Språk:** Ordvalg, variasjon, grammatikk, rettskriving
- **Formelle krav:** Kildebruk, format, lengde`,
    },
    {
      id: 'norsk-vg3-8-4-def-1',
      type: 'definition',
      title: 'Oppgavetyper og sjangerkrav',
      content: `**LITTERÆR TOLKNING:**

*Hva:* Analyse og tolkning av en litterær tekst.

*Struktur:*
1. Innledning med tese
2. Handlingsreferat (kort)
3. Analyse av virkemidler
4. Tematisk tolkning
5. Kontekstualisering
6. Avslutning

*Tips:* Koble alltid form og innhold. Begrunn tolkninger.

**DRØFTENDE TEKST:**

*Hva:* Diskuter et tema/påstand med argumenter for og mot.

*Struktur:*
1. Innledning med problemstilling
2. Argument 1 (med eksempler/belegg)
3. Argument 2
4. Motargumenter
5. Vurdering/konklusjon
6. Avslutning

*Tips:* Vis at du ser flere sider. Bruk faglige eksempler.

**ESSAY:**

*Hva:* Utforskende, personlig tekst om et tema.

*Struktur:* Friere, men ha en rød tråd.

*Tips:* Vær personlig, bruk litterære virkemidler, tenk høyt.

**RESONNERENDE TEKST:**

*Hva:* Faglig fremstilling av et emne.

*Struktur:* Logisk oppbygd, ofte tematisk inndelt.

*Tips:* Vis fagkunnskap, bruk kilder, vær saklig.

**KOMPARATIV ANALYSE:**

*Hva:* Sammenligning av to eller flere tekster.

*Struktur:* Enten tekst for tekst, eller aspekt for aspekt.

*Tips:* Finn både likheter og forskjeller. Ha en tese.`,
    },
    {
      id: 'norsk-vg3-8-4-def-2',
      type: 'definition',
      title: 'Vurderingskriterier',
      content: `**INNHOLD:**

*Høy måloppnåelse:*
- Relevant og presis besvarelse
- Dyptgående forståelse
- Gode eksempler og belegg
- Selvstendig refleksjon
- Faglig terminologi brukt presist

*Lav måloppnåelse:*
- Delvis relevant
- Overfladisk forståelse
- Få eller svake eksempler
- Reproduksjon uten refleksjon

**STRUKTUR:**

*Høy måloppnåelse:*
- Klar og logisk oppbygging
- Tydelige avsnitt med sammenheng
- God innledning og avslutning
- Behersker sjangeren

*Lav måloppnåelse:*
- Uklar struktur
- Løse avsnitt
- Svak sjangerbeherskelse

**SPRÅK:**

*Høy måloppnåelse:*
- Variert og presist ordvalg
- God setningsoppbygging
- Få språkfeil
- Tilpasset sjanger og situasjon

*Lav måloppnåelse:*
- Enkelt ordforråd
- Mange språkfeil
- Lite variasjon

**SIDEMÅL:**
Samme kriterier, men ofte noe større toleranse for språkfeil.`,
    },
    {
      id: 'norsk-vg3-8-4-tip-1',
      type: 'tip',
      title: 'Praktiske eksamenstips',
      content: `**FØR EKSAMEN:**

**Planlegg tiden:**
- 5 timer totalt
- Kortsvar: ca. 2 timer
- Langsvar: ca. 2,5 timer
- Reserve: 30 min til gjennomlesning

**Les oppgavene nøye:**
- Hva spør de egentlig om?
- Hvilke begreper brukes?
- Hva er formelle krav?

**Planlegg før du skriver:**
- Skisser struktur
- Noter hovedpoenger
- Velg eksempler

**UNDER SKRIVING:**

**Kortsvar:**
- Svar direkte på spørsmålet
- Bruk fagterminologi
- Gi konkrete eksempler
- Hold deg til lengdekravet

**Langsvar:**
- Skriv en tydelig tese/innledning
- Følg en klar struktur
- Bruk avsnitt bevisst
- Koble til oppgaven underveis
- Avslutt med å oppsummere/konkludere

**Sidemål:**
- Bruk ordbok aktivt
- Les gjennom nøye
- Særlig oppmerksomhet på typiske feil

**ETTER SKRIVING:**

**Les gjennom:**
- Har du svart på oppgaven?
- Er strukturen tydelig?
- Språkfeil?
- Formelle krav oppfylt?`,
    },
    {
      id: 'norsk-vg3-8-4-tip-2',
      type: 'tip',
      title: 'Muntlig eksamen',
      content: `**FORBEREDELSEN:**

**Bruk tiden godt:**
- Les teksten/temaet grundig
- Lag en disposisjon
- Forbered eksempler
- Øv på fremføringen
- Tenk på mulige spørsmål

**Strukturer presentasjonen:**
1. Innledning (hva skal du snakke om)
2. Hoveddel (2-3 hovedpunkter)
3. Avslutning (oppsummering)

**PRESENTASJONEN:**

**Snakk tydelig:**
- Ikke for fort
- Se på sensorene
- Bruk notater, men ikke les

**Vis fagkunnskap:**
- Bruk terminologi
- Gi eksempler
- Koble til pensum

**SAMTALEN:**

**Lytt nøye:**
- Forstå spørsmålet før du svarer
- Det er lov å tenke
- Be om presisering hvis uklart

**Vær ærlig:**
- Det er greit å ikke vite alt
- Vis at du kan tenke
- Prøv å koble til det du kan

**VANLIGE TEMAER:**
- Litteraturhistoriske perioder
- Forfattere og verk
- Språkhistorie
- Retorikk og analyse
- Aktualisering av litteratur`,
    },
    {
      id: 'norsk-vg3-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Øv på en kortsvarsoppgave: Analyser et kort dikt.',
        hints: [
          'Velg et dikt du ikke har analysert før',
          'Bruk 30-45 minutter',
          'Følg struktur: innledning, analyse, tolkning',
          'Hold deg til ca. 300-400 ord',
        ],
        solution: 'Oppgaven trener eksamensrelevant analyse under tidspress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Øv på en langsvarsoppgave: Skriv en litterær tolkning.',
        hints: [
          'Velg en novelle eller et dramaautdrag',
          'Bruk ca. 2 timer',
          'Følg strukturen for litterær tolkning',
          'Sikte på 1000-1500 ord',
        ],
        solution: 'Oppgaven trener langsvarsformat under realistiske forhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forbered en muntlig presentasjon om en litterær periode.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en periode (f.eks. det moderne gjennombruddet).',
            solution: 'Avgrens til en håndterbar periode.',
          },
          {
            label: 'b',
            task: 'Lag en disposisjon for 10 minutters presentasjon.',
            solution: 'Innledning, 2-3 hovedpunkter, avslutning.',
          },
          {
            label: 'c',
            task: 'Forbered deg på mulige oppfølgingsspørsmål.',
            solution: 'Tenk på hva du ville spurt om selv.',
          },
        ],
        solution: 'Oppgaven trener muntlig eksamenformat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en drøftende tekst på sidemålet.',
        hints: [
          'Velg et tema du er interessert i',
          'Drøft med argumenter for og mot',
          'Bruk ordbok aktivt',
          'Les gjennom nøye for språkfeil',
        ],
        solution: 'Oppgaven trener sidemålsskriving i eksamensformat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle analyse- og eksamenskapitler
export const NORSK_VG3_ANALYSE_CHAPTERS = [
  CHAPTER_NORSK_VG3_8_1,
  CHAPTER_NORSK_VG3_8_2,
  CHAPTER_NORSK_VG3_8_3,
  CHAPTER_NORSK_VG3_8_4,
];

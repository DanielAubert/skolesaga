/**
 * Helse- og oppvekstfag VG2 - Del 4: Grunnleggende pleieferdigheter
 * Kapittel 4.1-4.6
 *
 * Dekker LK20 kompetansemål:
 * - utføre grunnleggende pleie og omsorg med respekt for brukerens verdighet
 * - ivareta personlig hygiene og assistere ved stell
 * - forebygge trykksår og komplikasjoner ved immobilitet
 * - observere og vurdere smerte og iverksette tiltak
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Personlig hygiene og stell
// ============================================================================

export const CHAPTER_HOV2_4_1: TextbookChapter = {
  id: 'hov2-4-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.1',
  title: 'Personlig hygiene og stell',
  description: 'Kroppsvask, munnstell, hudpleie og ivaretakelse av verdighet ved personlig hygiene. Lær å utføre stell på en faglig og respektfull måte.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre grunnleggende pleie og omsorg med respekt for brukerens verdighet',
    'ivareta personlig hygiene og assistere ved stell',
  ],
  content: [
    {
      id: 'hov2-4-1-intro',
      type: 'text',
      content: `## Personlig hygiene i helse- og omsorgstjenesten

Personlig hygiene er et grunnleggende behov som påvirker både fysisk helse og psykisk velvære. Mange brukere i helse- og omsorgstjenesten trenger hjelp til å ivareta sin personlige hygiene, og dette er en av helsefagarbeiderens viktigste oppgaver.

I dette kapittelet lærer du:
- Hva personlig hygiene innebærer og hvorfor det er viktig
- Teknikker for kroppsvask og stell
- Munnstell og hudpleie
- Å ivareta brukerens verdighet under stell`,
    },
    {
      id: 'hov2-4-1-def-1',
      type: 'definition',
      title: 'Personlig hygiene',
      content: `**Personlig hygiene** omfatter alle tiltak som gjøres for å holde kroppen ren og frisk. Det inkluderer kroppsvask, hårvask, munnstell, neglepleie, hudpleie og stell av intimområder. God personlig hygiene forebygger infeksjoner, hudproblemer og ubehag, og bidrar til verdighet og velvære.`,
    },
    {
      id: 'hov2-4-1-text-1',
      type: 'text',
      content: `### Kroppsvask og stell

Kroppsvask kan utføres på ulike måter avhengig av brukerens funksjonsevne og ønsker:

**Dusj**
- Foretrukket metode for de som kan stå eller sitte på dusjstol
- Bruk behagelig vanntemperatur (37-38 °C)
- Hjelp med det brukeren ikke klarer selv
- Sørg for sklisikker matte og støttehåndtak

**Sengevask (morgenstellet)**
- For brukere som er sengeliggende eller for svake til å dusje
- Bruk vaskefat med lunkent vann og mildt såpevann
- Vask fra «rent til urent» – ansikt først, deretter kropp, til slutt intimområder
- Skift vann og kluter mellom ulike kroppsområder

**Delvis assistanse**
- La brukeren gjøre mest mulig selv – det gir mestring
- Tilrettelegg med vaskeklut, håndkle og toalettsaker innenfor rekkevidde
- Gi veiledning og støtte etter behov
- Respekter brukerens vaner og preferanser

**Rekkefølge ved sengevask:**
1. Ansikt (uten såpe)
2. Hals og ører
3. Armer og hender
4. Bryst og mage
5. Rygg
6. Ben og føtter
7. Intimstell (med nye kluter og nytt vann)`,
    },
    {
      id: 'hov2-4-1-def-2',
      type: 'definition',
      title: 'Munnstell',
      content: `**Munnstell** er rengjøring og pleie av munnhulen, inkludert tenner, tannkjøtt, tunge og slimhinner. God munnhygiene forebygger karies, tannkjøttsykdommer, soppinfeksjoner og aspirasjonspneumoni. Munnstell er spesielt viktig for eldre, sengeliggende og personer som ikke kan ivareta dette selv.`,
    },
    {
      id: 'hov2-4-1-text-2',
      type: 'text',
      content: `### Munnstell i praksis

**Daglig munnstell:**
- Tannpuss morgen og kveld med fluortannkrem
- Bruk myk tannbørste eller elektrisk tannbørste
- Rengjør mellom tennene med tanntråd eller mellomromsbørster
- Rengjør tungen forsiktig med tannbørsten

**Munnstell for brukere med egne tenner:**
- Hjelp brukeren med det de ikke klarer selv
- Bruk tannbørste med myk børste
- Vær forsiktig rundt ømme områder
- Observer munnhulen for sår, belegg og blødninger

**Munnstell for brukere med protese:**
- Ta ut protesen og rengjør med protesebørste
- Skyll protesen og legg i proteserens eller vann over natten
- Rengjør munnhule, gane og tannkjøtt med myk klut eller tupfer
- Observer slimhinnene for irritasjon og soppinfeksjon

**Munnstell for bevisstløse eller alvorlig syke:**
- Spesielt viktig for å forebygge aspirasjonspneumoni
- Bruk fuktige tupfere med munnstellvæske
- Smør leppene med leppepomade
- Utfør munnstell flere ganger daglig
- Sideveis leie for å unngå aspirasjon

### Hudpleie

**Huden hos eldre:**
- Tynnere og mer sårbar med alderen
- Nedsatt talgproduksjon gir tørr hud
- Større risiko for sår og infeksjoner
- Langsommere tilheling

**Tiltak for god hudpleie:**
- Bruk milde, parfymefrie produkter
- Smør tørr hud med fuktighetskrem etter vask
- Observer huden daglig for endringer, rødhet og sår
- Unngå for varmt vann som tørker ut huden
- Sørg for god ernæring og tilstrekkelig væskeinntak`,
    },
    {
      id: 'hov2-4-1-tip-1',
      type: 'tip',
      title: 'Verdighet under stell',
      content: `Stell er en intim situasjon som krever varsomhet og respekt. Dekk til de delene av kroppen som ikke vaskes. Forklar hva du gjør og spør om tillatelse. La brukeren bestemme tempo og rekkefølge så langt det er mulig. Bruk tildekking med håndkle for å bevare verdigheten. Husk at stell også er en mulighet for observasjon av hud, ernæringsstatus og psykisk tilstand.`,
    },
    {
      id: 'hov2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Morgenstell hos Martha',
      content: `**Situasjon**: Martha, 86 år, bor på sykehjem og trenger hjelp med morgenstellet. Hun er delvis sengeliggende etter et hoftebrudd, men kan sitte på sengekanten.

**Fremgangsmåte:**
1. Banker på døren og hilser godt morgen – spør om hun er klar
2. Hever sengen til god arbeidshøyde og hjelper Martha opp på sengekanten
3. Setter frem vaskefat, vaskekluter, håndkle og toalettsaker
4. Martha vasker ansiktet og overkroppen selv – du hjelper med rygg og ben
5. Bytt vann og kluter – hjelper med intimstell bak skjermbrett
6. Martha pusser tenner selv ved vasken med støtte – du hjelper med tannkremtuben
7. Smører tørre legger med fuktighetskrem
8. Martha velger klær selv og får hjelp med å kle på seg
9. Observer huden – rapporterer rødhet over halebeinet til sykepleier

**Viktig**: Martha gjør mest mulig selv – dette gir henne mestring og verdighet. Du tilrettelegger og assisterer der det trengs.`,
    },
    {
      id: 'hov2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefølge ved sengevask?',
        options: [
          { id: 'a', text: 'Intimområder først, deretter ansikt og kropp', isCorrect: false },
          { id: 'b', text: 'Ansikt først, deretter kropp, til slutt intimområder', isCorrect: true },
          { id: 'c', text: 'Ben først, deretter overkropp og ansikt', isCorrect: false },
          { id: 'd', text: 'Rekkefølgen har ingen betydning', isCorrect: false },
        ],
        solution: 'Ved sengevask vasker vi fra «rent til urent» – ansikt først (uten såpe), deretter kropp, og til slutt intimområder. Vann og kluter byttes mellom ulike kroppsområder for å unngå å overføre bakterier.',
      },
    },
    {
      id: 'hov2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        task: 'Forklar hvorfor munnstell er spesielt viktig for sengeliggende pasienter.',
        solution: 'Sengeliggende pasienter har økt risiko for dårlig munnhygiene fordi de ofte ikke klarer å ivareta dette selv. Bakterier i munnhulen kan føre til aspirasjonspneumoni dersom de havner i lungene. Tørre slimhinner og soppinfeksjoner er vanlig hos eldre og alvorlig syke. Regelmessig munnstell forebygger karies, tannkjøttsykdommer, infeksjoner og ubehag, og bidrar til bedre ernæring og livskvalitet.',
      },
    },
    {
      id: 'hov2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-3',
        number: '4.1.3',
        type: 'multiple-choice',
        task: 'Hva bør du gjøre med en tannprotese om natten?',
        options: [
          { id: 'a', text: 'La den sitte i munnen', isCorrect: false },
          { id: 'b', text: 'Legge den tørr på nattbordet', isCorrect: false },
          { id: 'c', text: 'Rengjøre den og legge den i proteserens eller vann', isCorrect: true },
          { id: 'd', text: 'Legge den i varmt vann med fluortannkrem', isCorrect: false },
        ],
        solution: 'Tannprotesen bør tas ut, rengjøres med protesebørste og legges i proteserens eller rent vann over natten. Dette gir slimhinnene hvile, forebygger soppinfeksjon og holder protesen ren.',
      },
    },
    {
      id: 'hov2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        task: 'Beskriv hvordan du kan ivareta brukerens verdighet under morgenstell.',
        solution: 'For å ivareta verdigheten bør du: Banke på døren og vente på svar. Forklare hva du skal gjøre og spørre om tillatelse. Dekke til kroppsdelene som ikke vaskes med håndkle. La brukeren gjøre mest mulig selv for å bevare mestring. Respektere brukerens vaner og preferanser. Sikre privatliv med lukket dør eller skjermbrett. Bruke et rolig tempo og unngå å haste. Vise profesjonalitet gjennom kroppsspråk og holdning.',
      },
    },
    {
      id: 'hov2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-5',
        number: '4.1.5',
        type: 'multiple-choice',
        task: 'Hvorfor bør eldre bruke milde, parfymefrie hudprodukter?',
        options: [
          { id: 'a', text: 'Fordi parfymerte produkter lukter for sterkt', isCorrect: false },
          { id: 'b', text: 'Fordi eldres hud er tynnere og tørrere, og irriteres lettere', isCorrect: true },
          { id: 'c', text: 'Fordi parfymefrie produkter er billigere', isCorrect: false },
          { id: 'd', text: 'Fordi eldre har allergi mot alle parfymer', isCorrect: false },
        ],
        solution: 'Eldre har tynnere og tørrere hud på grunn av nedsatt talgproduksjon og aldersforandringer. Parfymerte produkter kan irritere og tørke ut huden ytterligere. Milde, parfymefrie produkter er skånsomme og bidrar til å bevare hudens naturlige fuktighet.',
      },
    },
    {
      id: 'hov2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        task: 'En bruker med demens nekter å dusje og blir urolig når du foreslår det. Beskriv hvordan du kan håndtere denne situasjonen.',
        solution: 'Vis tålmodighet og respekt – ikke tving brukeren. Prøv å finne årsaken til uroen (frykt, forvirring, ubehag). Tilby alternativer som sengevask eller delvis vask. Kom tilbake senere når brukeren er roligere. Bruk kjente rutiner og gjenstander. Gi enkle instruksjoner og ta ett steg om gangen. Tilpass tid og sted – kanskje brukeren foretrekker å vaske seg på et annet tidspunkt. Dokumenter og drøft med kollegaer for å finne en god strategi.',
      },
    },
    {
      id: 'hov2-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Personlig hygiene** er et grunnleggende behov som påvirker helse og velvære
- **Kroppsvask** utføres fra rent til urent med riktig teknikk
- **Munnstell** forebygger infeksjoner og aspirasjonspneumoni
- **Verdighet** ivaretas gjennom respektfull tilnærming og brukermedvirkning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Personlig hygiene | Tiltak for å holde kroppen ren og frisk |
| Munnstell | Rengjøring og pleie av munnhulen |
| Aspirasjonspneumoni | Lungebetennelse forårsaket av innånding av bakterier |
| Integritet | Brukerens rett til privatliv og verdighet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Personlig hygiene', definition: 'Tiltak for å holde kroppen ren og frisk, inkludert kroppsvask, munnstell og hudpleie' },
    { term: 'Munnstell', definition: 'Rengjøring og pleie av munnhulen for å forebygge infeksjoner og sykdom' },
    { term: 'Aspirasjonspneumoni', definition: 'Lungebetennelse forårsaket av innånding av bakterier fra munnhulen' },
    { term: 'Hudpleie', definition: 'Tiltak for å bevare hudens fuktighet, elastisitet og integritet' },
    { term: 'Verdighet', definition: 'Brukerens rett til å bli behandlet med respekt, privatliv og selvbestemmelse' },
  ],
};

// ============================================================================
// Kapittel 4.2: Sengeredning og forflytning
// ============================================================================

export const CHAPTER_HOV2_4_2: TextbookChapter = {
  id: 'hov2-4-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.2',
  title: 'Sengeredning og forflytning',
  description: 'Teknikker for sengeredning, forflytning, posisjonering og ergonomi. Lær å flytte og leire pasienter trygt for begge parter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre grunnleggende pleie og omsorg med respekt for brukerens verdighet',
    'bruke ergonomiske arbeidsteknikker ved forflytning',
  ],
  content: [
    {
      id: 'hov2-4-2-intro',
      type: 'text',
      content: `## Trygg forflytning og gode arbeidsteknikker

Forflytning av pasienter er en daglig oppgave for helsefagarbeidere. Riktig teknikk beskytter både deg og brukeren, og god sengeredning bidrar til komfort og forebygging av komplikasjoner.

I dette kapittelet lærer du:
- Prinsipper for ergonomisk forflytning
- Teknikker for sengeredning og sengereiing
- Posisjonering og leiring av sengeliggende
- Bruk av hjelpemidler ved forflytning`,
    },
    {
      id: 'hov2-4-2-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er læren om tilpasning mellom menneske og arbeidsmiljø. I helse- og omsorgstjenesten handler ergonomi om å bruke kroppen riktig ved forflytning og stell, for å forebygge belastningsskader hos helsepersonell. Gode arbeidsstillinger, riktig teknikk og bruk av hjelpemidler er sentrale prinsipper.`,
    },
    {
      id: 'hov2-4-2-text-1',
      type: 'text',
      content: `### Ergonomiske prinsipper

**Grunnregler for god forflytning:**
- Stå med bena i hoftebreddes avstand – bredt understøttelsesområde
- Bøy i knær og hofter – ikke i ryggen
- Hold lasten nær kroppen
- Bruk bena som drivkraft, ikke ryggen
- Unngå å løfte – bruk glideteknikk, rull eller skyv
- Arbeid i riktig høyde – juster sengen

**Planlegging av forflytning:**
1. Vurder brukerens ressurser – hva kan vedkommende bidra med?
2. Velg riktig teknikk og hjelpemidler
3. Informer brukeren om hva som skal skje
4. Kommuniser med kollegaer – avtal hvem som gjør hva
5. Fjern hindringer i rommet (ledninger, møbler, tøfler)

**Vanlige belastningsskader:**
- Ryggproblemer er den vanligste yrkesskaden i helsevesenet
- Skulder- og nakkeplager ved feil arbeidsstilling
- Skader kan oppstå akutt eller utvikles over tid
- Forebygges med riktig teknikk, hjelpemidler og kollegasamarbeid`,
    },
    {
      id: 'hov2-4-2-def-2',
      type: 'definition',
      title: 'Forflytning',
      content: `**Forflytning** er å hjelpe en bruker med å endre stilling eller flytte seg fra ett sted til et annet, for eksempel fra seng til stol, fra stol til toalett, eller fra liggende til sittende. Forflytning skal alltid ta utgangspunkt i brukerens egne ressurser og utføres med riktig teknikk og nødvendige hjelpemidler.`,
    },
    {
      id: 'hov2-4-2-text-2',
      type: 'text',
      content: `### Sengeredning

**Skifte av sengetøy med pasient i sengen:**
1. Informer brukeren om hva du skal gjøre
2. Hev sengen til god arbeidshøyde
3. Hjelp brukeren over på den ene siden av sengen
4. Rull det skitne lakenet inn mot midten under brukeren
5. Legg rent laken på den ledige siden, rull halvparten inn mot midten
6. Hjelp brukeren over til den rene siden
7. Fjern det skitne lakenet og trekk det rene på plass
8. Glatt ut rynker – dette forebygger trykksår

**Sengeredning uten pasient:**
- Luft madrassen og dynen
- Legg rent underlag, laken og pute
- Strekk lakenet glatt – rynker kan gi trykksår
- Dynen legges luftig, ikke stramt

### Posisjonering og leiring

**Ryggleie:**
- Pute under hodet, ikke for høy
- Liten pute i korsryggen for støtte
- Pute under legger for å avlaste hæler
- Fotbrett eller pute mot fotseng

**Sideleie:**
- Pute mellom knærne for å avlaste hofter
- Pute i ryggen for støtte
- Øverste arm støttes med pute
- Kontroller at underliggende arm ligger fritt

**Halvt sittende (Fowlers leie):**
- Hodeseksjonen heves 30-45 grader
- Puter støtter armene
- Pute under knærne for å hindre at brukeren glir ned
- Godt leie ved pustebesvær og ved måltider`,
    },
    {
      id: 'hov2-4-2-text-3',
      type: 'text',
      content: `### Hjelpemidler ved forflytning

**Glidebrett og glidematte:**
- Brukes for å flytte brukeren mellom seng og stol eller båre
- Reduserer friksjon og tunge løft
- Brukeren glir over på brettet eller matten

**Vendeplate (dreieplate):**
- Brukes når brukeren skal stå og dreie, f.eks. fra seng til rullestol
- Brukeren står på platen som dreier
- Forutsetter at brukeren kan stå med støtte

**Personløfter:**
- Takløfter (fast montert i taket)
- Mobil personløfter (på hjul)
- Brukes når brukeren ikke kan belaste bena
- Krever opplæring i bruk av seil og løfteteknikk

**Glidlaken:**
- Brukes for å flytte brukeren i sengen
- Reduserer friksjon mellom bruker og madrass
- To pleiere samarbeider – en på hver side

**Turner:**
- Brukes når brukeren kan stå på bena men trenger støtte
- Brukeren holder seg i turner mens pleieren støtter`,
    },
    {
      id: 'hov2-4-2-tip-1',
      type: 'tip',
      title: 'Forebygging av belastningsskader',
      content: `Ryggproblemer er den vanligste årsaken til sykefravær i helsevesenet. Bruk alltid hjelpemidler når de er tilgjengelige – det er ikke et tegn på svakhet, men på profesjonalitet. Planlegg forflytningen før du starter, og sørg for å ha nok kollegaer til å hjelpe. Still sengen i riktig høyde og fjern hindringer i rommet.`,
    },
    {
      id: 'hov2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Forflytning fra seng til rullestol',
      content: `**Situasjon**: Ole, 74 år, har hatt hjerneslag og har halvsidig lammelse (venstre side). Han skal flyttes fra sengen til rullestolen for å kjøre til dagligstuen.

**Fremgangsmåte:**
1. **Planlegging**: Rullestolen plasseres på Oles friske side (høyre), med bremsene låst
2. **Informasjon**: Forklar Ole hva som skal skje og be ham bruke frisk arm og ben
3. **Sengen**: Hev sengen så Oles føtter når gulvet i sittende stilling
4. **Oppreising**: Ole skyver seg opp med frisk arm, du støtter på den svake siden
5. **Forflytning**: Ole griper armlenet med frisk hånd, pivoterer på frisk fot, du styrer og støtter
6. **Sette seg**: Ole setter seg kontrollert ned i rullestolen med din støtte
7. **Kontroll**: Sjekk at Ole sitter godt, fotbrett er på plass, og han er komfortabel

**Viktig**: La Ole bruke sine egne ressurser – frisk side er drivkraften. Du veileder og støtter, men løfter ikke unødvendig.`,
    },
    {
      id: 'hov2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til å glatte ut rynker i lakenet under en sengeliggende pasient?',
        options: [
          { id: 'a', text: 'Det ser ryddigere ut', isCorrect: false },
          { id: 'b', text: 'Det forebygger trykksår', isCorrect: true },
          { id: 'c', text: 'Det er lettere å redde sengen neste gang', isCorrect: false },
          { id: 'd', text: 'Det gjør sengen mykere', isCorrect: false },
        ],
        solution: 'Rynker i lakenet skaper ujevnt trykk mot huden og kan bidra til utvikling av trykksår. Sengeliggende pasienter er spesielt utsatt fordi de ligger lenge i samme stilling. Glatt laken fordeler trykket jevnt og forebygger hudskade.',
      },
    },
    {
      id: 'hov2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        task: 'Beskriv de viktigste ergonomiske prinsippene ved forflytning av en pasient.',
        solution: 'De viktigste prinsippene er: 1) Stå med bena i hoftebreddes avstand for godt understøttelsesområde. 2) Bøy i knær og hofter, ikke i ryggen. 3) Hold lasten nær kroppen. 4) Bruk bena som drivkraft. 5) Unngå å løfte – bruk glideteknikk eller hjelpemidler. 6) Juster arbeidshøyden (sengen). 7) Planlegg forflytningen og fjern hindringer. 8) Samarbeid med kollegaer når det trengs.',
      },
    },
    {
      id: 'hov2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-2-ex-3',
        number: '4.2.3',
        type: 'multiple-choice',
        task: 'Hvilket hjelpemiddel brukes for å flytte en bruker som ikke kan belaste bena?',
        options: [
          { id: 'a', text: 'Vendeplate', isCorrect: false },
          { id: 'b', text: 'Turner', isCorrect: false },
          { id: 'c', text: 'Personløfter', isCorrect: true },
          { id: 'd', text: 'Glidebrett', isCorrect: false },
        ],
        solution: 'Personløfter (tak- eller mobil løfter) brukes når brukeren ikke kan belaste bena i det hele tatt. Brukeren løftes i et seil som er festet til løfteren. Vendeplate og turner krever at brukeren kan stå med støtte, mens glidebrett brukes for sideforflytning.',
      },
    },
    {
      id: 'hov2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        task: 'Forklar hvordan du legger om sengetøy når pasienten ligger i sengen.',
        solution: 'Informer brukeren om hva du skal gjøre. Hev sengen til arbeidshøyde. Hjelp brukeren over på den ene siden. Rull det skitne lakenet inn mot midten under brukeren. Legg det rene lakenet på den ledige halvdelen, rull halvparten inn mot midten. Hjelp brukeren over til den rene siden. Fjern det skitne og trekk det rene lakenet på plass. Glatt ut rynker for å forebygge trykksår.',
      },
    },
    {
      id: 'hov2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        task: 'Beskriv tre ulike leiringer (posisjoneringer) for en sengeliggende pasient og forklar når de brukes.',
        solution: '1) Ryggleie – grunnstilling i sengen, brukes ved hvile og søvn. Pute under hodet og under legger for å avlaste hæler. 2) Sideleie – brukes for å variere trykkpunkter og ved stabilt sideleie. Pute mellom knær og i ryggen. 3) Halvt sittende (Fowlers leie) – hodeseksjonen heves 30-45 grader. Brukes ved pustebesvær, spising og for å forebygge aspirasjon.',
      },
    },
    {
      id: 'hov2-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ergonomiske prinsipper** beskytter ryggen ved forflytning
- **Sengeredning** med glatt laken forebygger trykksår
- **Posisjonering** i ulike leier avlaster trykk og gir komfort
- **Hjelpemidler** reduserer belastningen og øker sikkerheten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ergonomi | Tilpasning mellom menneske og arbeidsmiljø |
| Forflytning | Hjelp til å endre stilling eller flytte seg |
| Posisjonering | Leiring i ulike stillinger for avlastning |
| Understøttelsesområde | Flaten mellom og under føttene som gir stabilitet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ergonomi', definition: 'Læren om tilpasning mellom menneske og arbeidsmiljø for å forebygge belastningsskader' },
    { term: 'Forflytning', definition: 'Å hjelpe en bruker med å endre stilling eller flytte seg trygt' },
    { term: 'Posisjonering', definition: 'Leiring av pasient i ulike stillinger for avlastning og komfort' },
    { term: 'Glidlaken', definition: 'Hjelpemiddel som reduserer friksjon ved forflytning i seng' },
    { term: 'Personløfter', definition: 'Hjelpemiddel for å løfte og forflytte brukere som ikke kan belaste bena' },
  ],
};

// ============================================================================
// Kapittel 4.3: Eliminasjon og inkontinens
// ============================================================================

export const CHAPTER_HOV2_4_3: TextbookChapter = {
  id: 'hov2-4-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.3',
  title: 'Eliminasjon og inkontinens',
  description: 'Eliminasjonsbehov, ulike former for inkontinens, kateterisering og stomipleie. Lær å ivareta brukerens verdighet ved eliminasjonsproblemer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utføre grunnleggende pleie og omsorg med respekt for brukerens verdighet',
    'observere og rapportere endringer i brukerens helsetilstand',
  ],
  content: [
    {
      id: 'hov2-4-3-intro',
      type: 'text',
      content: `## Eliminasjon – et grunnleggende behov

Eliminasjon, altså tømming av urin og avføring, er et av kroppens mest grunnleggende behov. Mange brukere i helsetjenesten har problemer med eliminasjon, og dette kan være svært belastende. Som helsefagarbeider må du kunne observere, tilrettelegge og assistere med verdighet.

I dette kapittelet lærer du:
- Hva normal eliminasjon innebærer
- Ulike former for inkontinens
- Kateter og kateterpleie
- Stomi og stomipleie`,
    },
    {
      id: 'hov2-4-3-def-1',
      type: 'definition',
      title: 'Eliminasjon',
      content: `**Eliminasjon** er kroppens prosess for å kvitte seg med avfallsstoffer gjennom urin (vannlating) og avføring (defekasjon). Normal vannlating skjer 4-8 ganger i døgnet med en produksjon på 1-2 liter urin. Normal avføring varierer fra flere ganger daglig til annenhver dag, og avhenger av kost, aktivitet og væskeinntak.`,
    },
    {
      id: 'hov2-4-3-text-1',
      type: 'text',
      content: `### Observasjon av eliminasjon

**Urin – hva du bør observere:**
- Mengde: Normalt 1-2 liter per døgn
- Farge: Normal urin er lys gul til gul
- Lukt: Normalt mild, sterk lukt kan tyde på infeksjon
- Hyppighet: 4-8 ganger per døgn
- Smerter eller svie ved vannlating

**Avføring – hva du bør observere:**
- Konsistens: Normal er formet og myk
- Farge: Normalt brun
- Hyppighet: Varierer individuelt
- Blod, slim eller uvanlig farge
- Smerter ved avføring

**Viktige tegn å rapportere:**
- Blod i urin (hematuri) eller avføring
- Mørk eller illeluktende urin
- Ingen urin (anuri) eller svært liten mengde (oliguri)
- Obstipasjon (forstoppelse) over flere dager
- Diaré over lengre tid
- Smerter eller ubehag`,
    },
    {
      id: 'hov2-4-3-def-2',
      type: 'definition',
      title: 'Inkontinens',
      content: `**Inkontinens** er ufrivillig lekkasje av urin eller avføring. **Urininkontinens** rammer opptil 25 % av kvinner og 10 % av menn, og er vanligere med økende alder. Det finnes ulike typer: **stressinkontinens** (lekkasje ved hoste, nysing), **urgeinkontinens** (plutselig sterk trang), **overløpsinkontinens** (drypping ved overfylt blære) og **funksjonell inkontinens** (fysiske eller kognitive begrensninger hindrer toalettbesøk).`,
    },
    {
      id: 'hov2-4-3-text-2',
      type: 'text',
      content: `### Tiltak ved inkontinens

**Forebyggende tiltak:**
- Bekkenbunnstrening – styrker muskulaturen
- Blæretrening – faste toalettider med gradvis økt intervall
- Tilstrekkelig væskeinntak – unngå dehydrering
- Tilrettelagt toalettbesøk – hjelp til toalettet til faste tider

**Inkontinensprodukter:**
- Inkontinensbind og truseinnlegg (for lett lekkasje)
- Inkontinensbukse/bleie (for større lekkasje)
- Uridom (utvendig kateter for menn)
- Produktene velges ut fra lekkasjemengde og brukerens behov

**Kateterisering:**
- **Permanent kateter (KAD)**: Ligger i blæren over tid, kobles til oppsamlingspose
- **Intermitterende kateterisering (RIK)**: Engangskateter settes inn for å tømme blæren, fjernes etter tømming
- Sterile prosedyrer for å forebygge infeksjon
- Helsefagarbeidere kan utføre kateterpleie etter opplæring

**Kateterpleie:**
- Daglig vask av området rundt kateteret
- Oppsamlingsposen skal alltid henge under blærenivå
- Observer for tegn på infeksjon: uklar urin, lukt, feber
- Sikre at kateteret ikke er bøyd eller blokkert
- Dokumenter urinmengde og utseende`,
    },
    {
      id: 'hov2-4-3-text-3',
      type: 'text',
      content: `### Stomi

**Hva er en stomi?**
En stomi er en kirurgisk anlagt åpning i bukveggen for å lede tarminnhold eller urin ut av kroppen. Det finnes ulike typer:

**Kolostomi:**
- Åpning fra tykktarmen
- Gir formet eller halvfast avføring
- Plasseres oftest på venstre side av magen
- Vanlig ved tykktarmskreft eller alvorlig tarmsykdom

**Ileostomi:**
- Åpning fra tynntarmen
- Gir tynnflytende avføring
- Plasseres oftest på høyre side av magen
- Økt risiko for dehydrering på grunn av væsketap

**Urostomi:**
- Åpning for urin
- Urinen ledes gjennom et stykke tarm til stomiåpningen
- Brukeren har alltid pose på

**Stomipleie:**
- Skifte av stomipose regelmessig
- Vask området rundt stomien med lunkent vann
- Observer hudområdet for irritasjon og sårhet
- Tilpass platestørrelsen nøyaktig til stomien
- Kontroller at posen sitter tett for å forebygge lekkasje`,
    },
    {
      id: 'hov2-4-3-tip-1',
      type: 'tip',
      title: 'Verdighet ved eliminasjonsproblemer',
      content: `Eliminasjonsproblemer oppleves ofte som pinlig og belastende. Vis forståelse og normaliser situasjonen – inkontinens er svært vanlig. Unngå negative kommentarer eller kroppsspråk. Sørg for privatliv ved toalettbesøk. Skifte av inkontinensprodukter skal gjøres diskret og respektfullt. Bruk nøytrale ord og uttrykk, og la brukeren beholde mest mulig kontroll.`,
    },
    {
      id: 'hov2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Inkontinens hos Solveig',
      content: `**Situasjon**: Solveig, 80 år, bor på sykehjem og har urgeinkontinens. Hun blir urolig og lei seg når hun ikke rekker toalettet.

**Tiltak:**
1. **Toalettrutine**: Tilby toalettbesøk hver andre time og før og etter måltider
2. **Tilrettelegging**: Nattbord med bekkenpotte lett tilgjengelig, nattlys til badet
3. **Inkontinensprodukt**: Inkontinenstruse som gir trygghet ved lekkasje
4. **Bekkenbunnstrening**: Instruert av fysioterapeut, øvelser gjennomføres daglig
5. **Kommunikasjon**: Snakk åpent og normaliserende om problemet
6. **Observasjon**: Dokumenter mønster – når skjer lekkasjene?
7. **Væskeinntak**: Sørg for jevnt inntak på dagtid, reduser noe mot kvelden

**Resultat**: Etter noen uker med faste rutiner opplever Solveig færre lekkasjer, føler seg tryggere og er mer sosial.`,
    },
    {
      id: 'hov2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva er urgeinkontinens?',
        options: [
          { id: 'a', text: 'Lekkasje ved hoste og nysing', isCorrect: false },
          { id: 'b', text: 'Plutselig sterk trang med ufrivillig lekkasje', isCorrect: true },
          { id: 'c', text: 'Drypping ved overfylt blære', isCorrect: false },
          { id: 'd', text: 'Lekkasje på grunn av fysiske begrensninger', isCorrect: false },
        ],
        solution: 'Urgeinkontinens kjennetegnes av plutselig, sterk trang til å late vannet, etterfulgt av ufrivillig lekkasje. Personen rekker ofte ikke toalettet i tide. Stressinkontinens gir lekkasje ved hoste/nysing, overløpsinkontinens er drypping ved full blære, og funksjonell inkontinens skyldes fysiske eller kognitive begrensninger.',
      },
    },
    {
      id: 'hov2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        task: 'Beskriv hva du bør observere ved urin og avføring hos en pasient.',
        solution: 'Ved urin bør du observere: mengde (normalt 1-2 liter/døgn), farge (normalt lys gul), lukt (sterk lukt kan tyde på infeksjon), hyppighet (4-8 ganger/døgn), og om det er smerter eller svie. Ved avføring: konsistens (normalt formet og myk), farge (normalt brun), hyppighet, blod eller slim, og smerter. Alle avvikende funn skal dokumenteres og rapporteres.',
      },
    },
    {
      id: 'hov2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-3-ex-3',
        number: '4.3.3',
        type: 'multiple-choice',
        task: 'Hvor skal oppsamlingsposen til et permanent kateter alltid henge?',
        options: [
          { id: 'a', text: 'Over blærenivå for bedre drenering', isCorrect: false },
          { id: 'b', text: 'Under blærenivå for å sikre fritt avløp', isCorrect: true },
          { id: 'c', text: 'I samme høyde som blæren', isCorrect: false },
          { id: 'd', text: 'Plasseringen har ingen betydning', isCorrect: false },
        ],
        solution: 'Oppsamlingsposen skal alltid henge under blærenivå for å sikre fritt avløp av urin ved hjelp av tyngdekraften. Hvis posen henger over blærenivå, kan urinen renne tilbake og øke risikoen for urinveisinfeksjon.',
      },
    },
    {
      id: 'hov2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom kolostomi og ileostomi.',
        solution: 'Kolostomi er en åpning fra tykktarmen, vanligvis plassert på venstre side av magen. Den gir formet eller halvfast avføring fordi tykktarmen har absorbert det meste av væsken. Ileostomi er en åpning fra tynntarmen, plassert på høyre side. Den gir tynnflytende avføring fordi væsken ikke er absorbert ennå. Ileostomi gir derfor større risiko for dehydrering og elektrolyttforstyrrelser.',
      },
    },
    {
      id: 'hov2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        task: 'Beskriv tiltak som kan forebygge eller redusere urininkontinens.',
        solution: 'Forebyggende tiltak inkluderer: Bekkenbunnstrening for å styrke muskulaturen. Blæretrening med faste toalettider og gradvis økt intervall. Tilstrekkelig væskeinntak – for lite væske gir konsentrert urin som irriterer blæren. Tilrettelagt toalettbesøk med hjelp til rett tid. Tilpassede inkontinensprodukter for trygghet. Redusere kaffeinntak da koffein kan irritere blæren.',
      },
    },
    {
      id: 'hov2-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Eliminasjon** er et grunnleggende behov som krever observasjon og tilrettelegging
- **Inkontinens** har ulike former og behandles med individuelle tiltak
- **Kateterpleie** krever god hygiene for å forebygge infeksjon
- **Stomipleie** innebærer regelmessig skifte av pose og observasjon av huden

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Eliminasjon | Kroppens prosess for å kvitte seg med avfallsstoffer |
| Inkontinens | Ufrivillig lekkasje av urin eller avføring |
| Kateter | Slange som leder urin fra blæren |
| Stomi | Kirurgisk anlagt åpning for avføring eller urin |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Eliminasjon', definition: 'Kroppens prosess for å kvitte seg med avfallsstoffer via urin og avføring' },
    { term: 'Inkontinens', definition: 'Ufrivillig lekkasje av urin eller avføring' },
    { term: 'Kateter', definition: 'Slange som settes inn i blæren for å lede ut urin' },
    { term: 'Stomi', definition: 'Kirurgisk anlagt åpning i bukveggen for tarminnhold eller urin' },
    { term: 'Obstipasjon', definition: 'Forstoppelse – vanskeligheter med å tømme tarmen' },
  ],
};

// ============================================================================
// Kapittel 4.4: Sårbehandling og trykksårforebygging
// ============================================================================

export const CHAPTER_HOV2_4_4: TextbookChapter = {
  id: 'hov2-4-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.4',
  title: 'Sårbehandling og trykksårforebygging',
  description: 'Sårtyper, prinsipper for sårbehandling, og trykksårforebygging. Lær å observere, dokumentere og forebygge trykksår hos sårbare pasienter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forebygge trykksår og komplikasjoner ved immobilitet',
    'observere og rapportere endringer i brukerens helsetilstand',
  ],
  content: [
    {
      id: 'hov2-4-4-intro',
      type: 'text',
      content: `## Sår og trykksårforebygging

Sår er en vanlig utfordring i helse- og omsorgstjenesten, spesielt hos eldre og sengeliggende pasienter. Trykksår er et alvorlig problem som kan forebygges med riktige tiltak. Som helsefagarbeider har du en viktig rolle i observasjon, forebygging og pleie av sår.

I dette kapittelet lærer du:
- Ulike sårtyper og sårhelingsprosessen
- Prinsipper for sårbehandling
- Trykksår – klassifisering og forebygging
- Dokumentasjon og oppfølging av sår`,
    },
    {
      id: 'hov2-4-4-def-1',
      type: 'definition',
      title: 'Sår',
      content: `Et **sår** er en skade i huden eller underliggende vev. Sår deles inn i **akutte sår** (oppstår plutselig, f.eks. kutt, skrubbsår, brannsår) og **kroniske sår** (varer over 6 uker uten tilheling, f.eks. trykksår, venøse leggsår, diabetiske fotsår). Kroniske sår er ofte forbundet med underliggende sykdommer og nedsatt sirkulasjon.`,
    },
    {
      id: 'hov2-4-4-text-1',
      type: 'text',
      content: `### Sårhelingsprosessen

Sårhelingen skjer i tre overlappende faser:

**1. Inflammasjonsfasen (dag 0-3)**
- Blødningen stanser ved blodplateaggregering
- Sårområdet blir rødt, varmt og hovent
- Hvite blodceller renser såret for bakterier og dødt vev
- Normalt immunforsvar som skal forekomme

**2. Proliferasjonsfasen (dag 3-21)**
- Nytt vev dannes (granulasjonsvev)
- Blodkar vokser inn i sårområdet
- Såret trekker seg sammen
- Huden begynner å dekke over såret (epitelisering)

**3. Modningsfasen (dag 21 – opptil 2 år)**
- Arrvev modnes og styrkes
- Kollagenfibrene reorganiseres
- Arret blir gradvis lysere og flatere
- Full styrke oppnås aldri – maks 80 % av opprinnelig hud

**Faktorer som hemmer sårheling:**
- Dårlig ernæring (spesielt protein-, vitamin C- og sinkmangel)
- Nedsatt sirkulasjon (diabetes, aterosklerose)
- Infeksjon i såret
- Trykk, friksjon og skjærekrefter
- Røyking (reduserer oksygentilførselen)
- Høy alder
- Immunsupprimerende medisiner`,
    },
    {
      id: 'hov2-4-4-def-2',
      type: 'definition',
      title: 'Trykksår',
      content: `**Trykksår** (decubitus) er skade i hud og underliggende vev som skyldes langvarig trykk, ofte i kombinasjon med friksjon og skjærekrefter. Trykksår oppstår over benfremspring der trykket er størst, som halebeinet (sakrum), hæler, hofter, albuer og ører. De klassifiseres i fire grader fra rødhet som ikke blekner (grad 1) til skade ned til muskel og bein (grad 4).`,
    },
    {
      id: 'hov2-4-4-text-2',
      type: 'text',
      content: `### Klassifisering av trykksår

**Grad 1: Rødhet som ikke blekner**
- Huden er intakt men rød
- Rødmen blekner ikke ved trykk (trykk med fingeren – blir det hvitt?)
- Kan kjennes varmere, hardere eller mykere enn omgivende hud
- Signal om at trykket må avlastes umiddelbart

**Grad 2: Delvis hudtap**
- Overfladisk sår som ligner et blemme eller skrubbsår
- Epidermis og/eller dermis er skadet
- Sårbunnen er rød eller rosa
- Ingen nekrose (dødt vev)

**Grad 3: Fullt hudtap**
- Skade gjennom hele huden ned til underhudsfettet
- Såret kan være dypt med underminering
- Subkutant fett kan være synlig
- Muskel og bein er ikke synlige

**Grad 4: Fullt vevstap**
- Skade ned til muskel, sener eller bein
- Alvorlig tilstand som krever spesialistbehandling
- Kan innebære nekrose og hulromsinfeksjon
- Langvarig tilheling og stor risiko for komplikasjoner

### Utsatte områder for trykksår

**Ved ryggleie:**
- Halebeinet (sakrum) – vanligste stedet
- Hæler
- Bakhodet
- Skulderblader
- Albuer

**Ved sideleie:**
- Hofter (trochanter)
- Knær (mot hverandre)
- Ankler
- Ører

**Ved sittende stilling:**
- Sittebensknuter
- Halebeinet`,
    },
    {
      id: 'hov2-4-4-text-3',
      type: 'text',
      content: `### Forebygging av trykksår

**Trykavlastning:**
- Stillingsendring minst hver andre time for sengeliggende
- Bruk av trykkavlastende madrass (vekseltrykkmadrass, skummadrass)
- Hælputer eller puter under leggene for å holde hælene fri
- Unngå at brukeren ligger på rødmerkede områder
- Sittende: Avlast trykk hvert 15. minutt, bruk trykkavlastende pute

**Hudpleie:**
- Inspiser huden daglig, spesielt over benfremspring
- Hold huden ren og tørr – unngå fuktighet fra svette og inkontinens
- Bruk barrierekrem ved inkontinens
- Smør tørr hud med fuktighetskrem
- Unngå å massere rødmerkede områder – det kan gjøre skaden verre

**Ernæring:**
- God ernæring er avgjørende for hudintegritet og sårheling
- Tilstrekkelig protein, vitamin C og sink
- Sørg for nok væskeinntak
- Kosttilskudd ved behov
- Vurder ernæringsstatus med screeningverktøy

**Dokumentasjon:**
- Bruk risikovurderingsverktøy (f.eks. Braden-skala)
- Dokumenter hudens tilstand regelmessig
- Registrer stillingsendringer
- Meld trykksår som avvik og følg opp med tiltaksplan`,
    },
    {
      id: 'hov2-4-4-tip-1',
      type: 'tip',
      title: 'Fingertrykktesten',
      content: `For å sjekke om rødhet over et benfremspring er begynnende trykksår, kan du bruke **fingertrykktesten**: Press med fingeren på det røde området i noen sekunder. Hvis huden blekner (blir hvit) og deretter blir rød igjen, er blodsirkulasjonen intakt. Hvis rødmen **ikke blekner**, er det et grad 1 trykksår som krever umiddelbar avlastning.`,
    },
    {
      id: 'hov2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Trykksårforebygging hos Harald',
      content: `**Situasjon**: Harald, 88 år, er sengeliggende etter et lårhalsbrudd. Han er undervektig, har diabetes og er inkontinent for urin.

**Risikovurdering (Braden-skala):**
- Sensorisk oppfattelse: Litt nedsatt (3 poeng)
- Fuktighet: Ofte fuktig på grunn av inkontinens (2 poeng)
- Aktivitet: Sengeliggende (1 poeng)
- Mobilitet: Svært begrenset (2 poeng)
- Ernæring: Utilstrekkelig (2 poeng)
- Friksjon/skjærekrefter: Problem (2 poeng)
- **Total: 12 poeng – høy risiko for trykksår**

**Tiltaksplan:**
1. Trykkavlastende vekseltrykkmadrass
2. Stillingsendring hver 2. time – dokumenteres på snuplan
3. Hælputer for å holde hælene fri fra madrassen
4. Hyppig skifte av inkontinensprodukt og barrierekrem
5. Daglig hudinspeksjon over sakrum, hæler og hofter
6. Ernæringstilskudd med protein og vitaminer
7. Tilstrekkelig væskeinntak

**Resultat**: Med systematisk oppfølging unngår Harald trykksår under sykehusoppholdet.`,
    },
    {
      id: 'hov2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et trykksår grad 1?',
        options: [
          { id: 'a', text: 'Åpent sår ned til underhudsfettet', isCorrect: false },
          { id: 'b', text: 'Rødhet som ikke blekner ved trykk, intakt hud', isCorrect: true },
          { id: 'c', text: 'Blemme eller overfladisk sår', isCorrect: false },
          { id: 'd', text: 'Sår ned til muskel og bein', isCorrect: false },
        ],
        solution: 'Grad 1 trykksår kjennetegnes av rødhet som ikke blekner ved fingertrykk, men huden er intakt. Området kan kjennes varmere eller hardere enn omgivende hud. Dette er et viktig varselsignal som krever umiddelbar avlastning.',
      },
    },
    {
      id: 'hov2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        task: 'Beskriv de tre fasene i sårhelingsprosessen.',
        solution: '1) Inflammasjonsfasen (dag 0-3): Blødningen stanser, området blir rødt og hovent, hvite blodceller renser såret. 2) Proliferasjonsfasen (dag 3-21): Nytt vev (granulasjonsvev) dannes, blodkar vokser inn, såret trekker seg sammen og huden begynner å dekke over. 3) Modningsfasen (dag 21 – opptil 2 år): Arrvev modnes og styrkes, kollagenfibre reorganiseres, arret blir gradvis lysere.',
      },
    },
    {
      id: 'hov2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-4-ex-3',
        number: '4.4.3',
        type: 'multiple-choice',
        task: 'Hvor ofte bør en sengeliggende pasient med risiko for trykksår snus?',
        options: [
          { id: 'a', text: 'Hver 6. time', isCorrect: false },
          { id: 'b', text: 'Hver 4. time', isCorrect: false },
          { id: 'c', text: 'Minst hver 2. time', isCorrect: true },
          { id: 'd', text: 'En gang per dag', isCorrect: false },
        ],
        solution: 'Sengeliggende pasienter med risiko for trykksår bør snus minst hver 2. time for å avlaste trykket og gjenopprette blodsirkulasjonen. Stillingsendringene dokumenteres i et snuplan.',
      },
    },
    {
      id: 'hov2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        task: 'Nevn fire faktorer som hemmer sårheling og forklar hvorfor.',
        solution: '1) Dårlig ernæring – kroppen trenger protein, vitamin C og sink for å bygge nytt vev. 2) Nedsatt sirkulasjon – cellene får ikke nok oksygen og næring for reparasjon (vanlig ved diabetes og aterosklerose). 3) Infeksjon – bakterier ødelegger vev og forbruker kroppens ressurser. 4) Røyking – nikotinet trekker sammen blodkarene og reduserer oksygentilførselen til sårområdet.',
      },
    },
    {
      id: 'hov2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        task: 'Lag en tiltaksplan for trykksårforebygging for en sengeliggende pasient med nedsatt ernæringsstatus og inkontinens.',
        solution: 'Tiltaksplan: 1) Trykkavlastende madrass (vekseltrykkmadrass). 2) Stillingsendring minst hver 2. time med dokumentasjon i snuplan. 3) Hælputer for å avlaste hæler. 4) Daglig hudinspeksjon over alle benfremspring. 5) Hyppig skifte av inkontinensprodukt og bruk av barrierekrem. 6) Ernæringstilskudd med fokus på protein og vitamin C. 7) Tilstrekkelig væskeinntak. 8) Glatt laken uten rynker. 9) Bruk risikovurderingsverktøy regelmessig og dokumenter tilstand.',
      },
    },
    {
      id: 'hov2-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sår** deles inn i akutte og kroniske, med tre faser i tilhelingsprosessen
- **Trykksår** klassifiseres i fire grader fra rødhet til dyp vevsskade
- **Forebygging** inkluderer trykavlastning, hudpleie, ernæring og dokumentasjon
- **Observasjon** og fingertrykktesten avdekker tidlige tegn på trykksår

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Trykksår | Hudskade fra langvarig trykk over benfremspring |
| Braden-skala | Risikovurderingsverktøy for trykksår |
| Granulasjonsvev | Nytt vev som dannes i sårhelingsprosessen |
| Nekrose | Dødt vev som må fjernes for at såret skal gro |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trykksår', definition: 'Skade i hud og vev fra langvarig trykk, ofte over benfremspring' },
    { term: 'Braden-skala', definition: 'Risikovurderingsverktøy som identifiserer pasienter med risiko for trykksår' },
    { term: 'Granulasjonsvev', definition: 'Nytt, rødlig vev som dannes i sår under helingsprosessen' },
    { term: 'Nekrose', definition: 'Dødt vev i et sår som hemmer tilheling' },
    { term: 'Decubitus', definition: 'Medisinsk betegnelse for trykksår' },
  ],
};

// ============================================================================
// Kapittel 4.5: Smerte og smertelindring
// ============================================================================

export const CHAPTER_HOV2_4_5: TextbookChapter = {
  id: 'hov2-4-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.5',
  title: 'Smerte og smertelindring',
  description: 'Smertevurdering, smertetyper, VAS-skala, medikamentelle og ikke-medikamentelle tiltak. Lær å vurdere og lindre smerte hos brukere.',
  estimatedMinutes: 50,
  competenceGoals: [
    'observere og vurdere smerte og iverksette tiltak',
    'observere og rapportere endringer i brukerens helsetilstand',
  ],
  content: [
    {
      id: 'hov2-4-5-intro',
      type: 'text',
      content: `## Smerte – en subjektiv opplevelse

Smerte er en av de vanligste årsakene til at mennesker søker helsehjelp. Som helsefagarbeider vil du daglig møte brukere som har smerter, og din evne til å observere, vurdere og bidra til smertelindring er avgjørende for god omsorg.

I dette kapittelet lærer du:
- Hva smerte er og ulike smertetyper
- Smertevurdering med VAS-skala og andre verktøy
- Medikamentelle tiltak mot smerte
- Ikke-medikamentelle tiltak for smertelindring`,
    },
    {
      id: 'hov2-4-5-def-1',
      type: 'definition',
      title: 'Smerte',
      content: `**Smerte** defineres som en ubehagelig sensorisk og emosjonell opplevelse, knyttet til faktisk eller potensiell vevsskade. Smerte er alltid **subjektiv** – det er pasienten selv som best kan vurdere sin smerte. Den internasjonale definisjonen understreker at smerte er det pasienten sier det er, og at den er til stede når pasienten sier det.`,
    },
    {
      id: 'hov2-4-5-text-1',
      type: 'text',
      content: `### Smertetyper

**Akutt smerte:**
- Oppstår plutselig og har vanligvis en klar årsak (skade, operasjon, infeksjon)
- Varer fra sekunder til uker
- Har en beskyttende funksjon – varsler om skade
- Responder vanligvis godt på behandling

**Kronisk smerte:**
- Varer mer enn 3-6 måneder
- Årsaken kan være vanskelig å identifisere
- Påvirker livskvalitet, søvn, humør og funksjon
- Krever ofte tverrfaglig tilnærming

**Nociseptiv smerte:**
- Skyldes aktivering av smertereseptorer i vev
- Oppleves som verkende, stikkende eller brennende
- Eksempler: brudd, betennelse, kirurgisk sår
- Deles inn i somatisk (fra hud, muskler, bein) og visceral (fra indre organer)

**Nevropatisk smerte:**
- Skyldes skade eller sykdom i nervesystemet
- Oppleves ofte som brennende, stikkende, prikking eller nummenhet
- Eksempler: diabetisk nevropati, iskias, fantomsmerter
- Reagerer dårligere på vanlige smertestillende

**Psykogen smerte:**
- Smerte uten påvisbar fysisk årsak
- Kan skyldes angst, depresjon eller traumer
- Smerten er like reell for pasienten
- Krever psykologisk tilnærming`,
    },
    {
      id: 'hov2-4-5-def-2',
      type: 'definition',
      title: 'VAS-skala',
      content: `**VAS** (Visuell Analog Skala) er et smertevurderingsverktøy der pasienten angir smerteintensiteten på en linje fra 0 til 10. **0** betyr ingen smerte, og **10** betyr verst tenkelig smerte. **NRS** (Numerisk Rating Skala) fungerer på samme måte, men pasienten sier et tall i stedet for å peke på en linje. Begge verktøyene gir en standardisert måte å måle og følge smerte over tid.`,
    },
    {
      id: 'hov2-4-5-text-2',
      type: 'text',
      content: `### Smertevurdering

**Verktøy for smertevurdering:**

**VAS/NRS (0-10):**
- 0: Ingen smerte
- 1-3: Mild smerte
- 4-6: Moderat smerte
- 7-10: Sterk til uutholdelig smerte
- Mål: Under 3-4 i hvile

**MOBID-2 (for personer med demens):**
- Observasjonsbasert verktøy
- Pleieren observerer smerteadferd under bevegelse
- Grimaser, stønning, uro, motstand kan være tegn på smerte
- Brukes når pasienten ikke kan rapportere smerte verbalt

**Hva du bør kartlegge:**
- Lokalisasjon: Hvor sitter smerten?
- Intensitet: Hvor sterk er den (VAS/NRS)?
- Karakter: Hvordan oppleves den (verkende, stikkende, brennende)?
- Tidsmønster: Når oppstår den? Er den konstant eller anfallsvis?
- Forverrende faktorer: Hva gjør den verre?
- Lindrende faktorer: Hva hjelper?
- Konsekvenser: Hvordan påvirker smerten hverdagen?`,
    },
    {
      id: 'hov2-4-5-text-3',
      type: 'text',
      content: `### Medikamentelle tiltak

**Smertetrappen (WHO):**
Verdens helseorganisasjon har laget en smertetrapp som brukes som retningslinje:

**Trinn 1 – Mild smerte:**
- Paracetamol (Paracet, Panodil)
- NSAIDs (Ibux, Voltaren)
- Brukes for lett til moderat smerte

**Trinn 2 – Moderat smerte:**
- Svake opioider (kodein, tramadol)
- Kombineres ofte med trinn 1
- Kan gi forstoppelse og døsighet

**Trinn 3 – Sterk smerte:**
- Sterke opioider (morfin, oksykodon, fentanyl)
- Brukes ved sterk smerte, f.eks. etter operasjon eller ved kreft
- Krever nøye oppfølging – fare for avhengighet og respirasjonsdepresjon

### Ikke-medikamentelle tiltak

**Fysiske tiltak:**
- Varme (varmepakning, varmeflaske) – virker muskelavslappende
- Kulde (ispose) – reduserer hevelse og bedøver smertereseptorer
- Massasje – lindrer muskelspenninger
- TENS (transkutan elektrisk nervestimulering)
- Fysioterapi og tilpasset aktivitet

**Psykologiske tiltak:**
- Avledning – musikk, samtale, TV, spill
- Avspenning og pusteøvelser
- Trygg og rolig atmosfære
- God informasjon og forutsigbarhet
- Sosial kontakt og nærvær

**Tilrettelegging:**
- God posisjonering og leiring
- Trykkavlastning og komfortabel seng
- Redusere støy og forstyrrelser
- Tilpasse aktivitetsnivå til smertenivå`,
    },
    {
      id: 'hov2-4-5-tip-1',
      type: 'tip',
      title: 'Observer smerteadferd',
      content: `Ikke alle kan uttrykke smerte verbalt. Hos personer med demens, spedbarn eller bevisstløse må du observere smerteadferd: grimaser, stønning, uro, muskelanspenthet, gråt, motstand ved berøring, endret adferd, nedsatt matlyst og søvnproblemer. Disse observasjonene er viktige å dokumentere og rapportere.`,
    },
    {
      id: 'hov2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Smertevurdering hos Arne',
      content: `**Situasjon**: Arne, 72 år, er operert for hoftebrudd for to dager siden. Han sier at han har vondt, men smiler og sier «det går nok bra».

**Smertevurdering:**
- Du spør Arne om å angi smerten på en skala fra 0-10
- Arne sier 6 – moderat smerte
- Smerten sitter i operasjonsområdet og er verkende
- Smerten er verre ved bevegelse og stillingsskifte
- Han sov dårlig i natt på grunn av smertene

**Tiltak:**
1. **Rapporter** til sykepleier at Arne har VAS 6 og sov dårlig
2. **Medikamentelle tiltak**: Sykepleier gir forordnet smertestillende (paracetamol + oksykodon)
3. **Ikke-medikamentelle tiltak**: God posisjonering med puter, ispose over operasjonsområdet, rolig miljø
4. **Evaluering**: Mål smerten igjen etter 30-60 minutter – nå sier Arne VAS 3
5. **Dokumentasjon**: Dokumenter smertevurdering, tiltak og effekt

**Viktig**: Arne smilte og sa «det går bra», men hadde egentlig VAS 6. Alltid bruk et vurderingsverktøy – ikke stol på utseendet alene.`,
    },
    {
      id: 'hov2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr VAS 7 på en smerteskala?',
        options: [
          { id: 'a', text: 'Ingen smerte', isCorrect: false },
          { id: 'b', text: 'Mild smerte', isCorrect: false },
          { id: 'c', text: 'Moderat smerte', isCorrect: false },
          { id: 'd', text: 'Sterk smerte', isCorrect: true },
        ],
        solution: 'VAS 7 indikerer sterk smerte. Skalaen går fra 0 (ingen smerte) til 10 (verst tenkelig smerte). 1-3 er mild, 4-6 er moderat, og 7-10 er sterk til uutholdelig smerte. VAS 7 krever effektiv smertelindring.',
      },
    },
    {
      id: 'hov2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom akutt og kronisk smerte.',
        solution: 'Akutt smerte oppstår plutselig og har vanligvis en klar årsak som skade, operasjon eller infeksjon. Den varer fra sekunder til uker, har en beskyttende funksjon og responderer godt på behandling. Kronisk smerte varer mer enn 3-6 måneder, årsaken kan være vanskelig å identifisere, den påvirker livskvalitet og funksjon, og krever ofte tverrfaglig tilnærming med både medikamentelle og ikke-medikamentelle tiltak.',
      },
    },
    {
      id: 'hov2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-5-ex-3',
        number: '4.5.3',
        type: 'multiple-choice',
        task: 'Hvilket smertevurderingsverktøy brukes for personer med demens som ikke kan rapportere smerte verbalt?',
        options: [
          { id: 'a', text: 'VAS-skala', isCorrect: false },
          { id: 'b', text: 'NRS-skala', isCorrect: false },
          { id: 'c', text: 'MOBID-2', isCorrect: true },
          { id: 'd', text: 'Glasgow Coma Scale', isCorrect: false },
        ],
        solution: 'MOBID-2 er et observasjonsbasert smertevurderingsverktøy utviklet for personer med demens som ikke kan rapportere smerte verbalt. Pleieren observerer smerteadferd under bevegelse, som grimaser, stønning, uro og motstand. VAS og NRS krever at pasienten selv kan angi smerteintensitet.',
      },
    },
    {
      id: 'hov2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        task: 'Beskriv tre ikke-medikamentelle tiltak for smertelindring og forklar hvordan de virker.',
        solution: '1) Varme (varmepakning) – virker muskelavslappende, øker blodgjennomstrømningen og reduserer stivhet. Brukes ved muskelspenninger og kroniske smerter. 2) Kulde (ispose) – reduserer hevelse, bedøver smertereseptorer og bremser inflammasjon. Brukes ved akutte skader. 3) Avledning (musikk, samtale) – tar oppmerksomheten bort fra smerten og aktiverer kroppens egne smertelindrende mekanismer. Reduserer smerteopplevelsen.',
      },
    },
    {
      id: 'hov2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        task: 'Forklar WHOs smertetrapp med egne ord.',
        solution: 'WHOs smertetrapp er en retningslinje for medikamentell smertebehandling i tre trinn: Trinn 1 brukes ved mild smerte med paracetamol og NSAIDs (ibuprofen). Trinn 2 brukes ved moderat smerte med svake opioider (kodein, tramadol), ofte i kombinasjon med trinn 1. Trinn 3 brukes ved sterk smerte med sterke opioider (morfin, oksykodon). Man starter på laveste trinn og trapper opp ved behov. Ikke-medikamentelle tiltak brukes på alle trinn.',
      },
    },
    {
      id: 'hov2-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Smerte** er subjektiv og alltid det pasienten sier det er
- **VAS/NRS** gir standardisert smertevurdering fra 0 til 10
- **WHOs smertetrapp** gir retningslinjer for medikamentell behandling
- **Ikke-medikamentelle tiltak** er viktige supplement til smertelindring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| VAS/NRS | Skala fra 0-10 for å vurdere smerteintensitet |
| Akutt smerte | Smerte med klar årsak som varer kort tid |
| Kronisk smerte | Smerte som varer mer enn 3-6 måneder |
| Smertetrappen | WHOs retningslinje for trinnvis smertebehandling |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'VAS', definition: 'Visuell Analog Skala – smertevurderingsverktøy fra 0 til 10' },
    { term: 'Nociseptiv smerte', definition: 'Smerte fra aktivering av smertereseptorer i vev ved skade eller betennelse' },
    { term: 'Nevropatisk smerte', definition: 'Smerte fra skade eller sykdom i nervesystemet' },
    { term: 'MOBID-2', definition: 'Observasjonsbasert smerteverktøy for personer med demens' },
    { term: 'Smertetrappen', definition: 'WHOs retningslinje for trinnvis medikamentell smertebehandling' },
  ],
};

// ============================================================================
// Kapittel 4.6: Søvn, hvile og aktivitet
// ============================================================================

export const CHAPTER_HOV2_4_6: TextbookChapter = {
  id: 'hov2-4-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '4.6',
  title: 'Søvn, hvile og aktivitet',
  description: 'Søvnens faser, søvnhygiene, søvnforstyrrelser og betydningen av aktivitetsbalanse. Lær å tilrettelegge for god søvn og riktig aktivitetsnivå.',
  estimatedMinutes: 45,
  competenceGoals: [
    'tilrettelegge for søvn, hvile og aktivitet tilpasset brukerens behov',
    'observere og rapportere endringer i brukerens helsetilstand',
  ],
  content: [
    {
      id: 'hov2-4-6-intro',
      type: 'text',
      content: `## Søvn, hvile og aktivitet for god helse

Søvn og aktivitet er grunnleggende behov som henger tett sammen. God søvn gir overskudd til aktivitet, og riktig aktivitetsnivå fremmer god søvn. I helse- og omsorgstjenesten møter du mange brukere med søvnproblemer og behov for tilrettelagt aktivitet.

I dette kapittelet lærer du:
- Søvnens funksjoner og faser
- Søvnhygiene og tilrettelegging for god søvn
- Vanlige søvnforstyrrelser
- Aktivitetsbalanse og tilrettelagt aktivitet`,
    },
    {
      id: 'hov2-4-6-def-1',
      type: 'definition',
      title: 'Søvn',
      content: `**Søvn** er en naturlig, tilbakevendende tilstand av nedsatt bevissthet og redusert respons på omgivelsene. Under søvn foregår viktige prosesser som cellereparasjon, immunforsvarsstyrking, minnekonsolidering og hormonregulering. Voksne trenger vanligvis 7-9 timer søvn per natt, mens eldre ofte sover lettere og kortere.`,
    },
    {
      id: 'hov2-4-6-text-1',
      type: 'text',
      content: `### Søvnens faser

Søvnen deles inn i to hovedtyper som veksler gjennom natten:

**NREM-søvn (Non-Rapid Eye Movement):**

**Stadium N1 – Innsovning:**
- Lett søvn, overgang fra våkenhet
- Varer 5-10 minutter
- Lett å vekke

**Stadium N2 – Lett søvn:**
- Kroppen slapper av, hjertefrekvensen og temperaturen synker
- Utgjør ca. 50 % av total søvntid
- Hjernen bearbeider inntrykk

**Stadium N3 – Dyp søvn:**
- Den mest restituerende søvnen
- Cellereparasjon og veksthormon skilles ut
- Vanskelig å vekke
- Viktig for immunforsvaret og fysisk restitusjon
- Eldre har mindre dyp søvn enn yngre

**REM-søvn (Rapid Eye Movement):**
- Drømmesøvn – hjernen er aktiv
- Øynene beveger seg raskt under lukkede øyelokk
- Viktig for minnekonsolidering og emosjonell bearbeiding
- Musklene er avslappede (muskelatoni)
- Utgjør ca. 20-25 % av søvntiden

**Søvnsyklus:**
- En søvnsyklus varer ca. 90 minutter
- Vi gjennomgår 4-6 sykluser per natt
- Dyp søvn dominerer i første halvdel av natten
- REM-søvn dominerer i siste halvdel av natten`,
    },
    {
      id: 'hov2-4-6-def-2',
      type: 'definition',
      title: 'Søvnhygiene',
      content: `**Søvnhygiene** er en samling råd og tiltak som fremmer god søvnkvalitet. Det handler om vaner og rutiner knyttet til leggetid, soveforhold, aktivitet, kosthold og stimuli som påvirker søvnen. God søvnhygiene er det viktigste ikke-medikamentelle tiltaket ved søvnproblemer.`,
    },
    {
      id: 'hov2-4-6-text-2',
      type: 'text',
      content: `### Søvnhygiene og tilrettelegging

**Tiltak for god søvnhygiene:**
- Faste legge- og våknetider, også i helger
- Unngå lange middagslurer (maks 20-30 minutter)
- Unngå koffein, nikotin og alkohol på kvelden
- Fysisk aktivitet på dagtid, men ikke rett før leggetid
- Unngå skjermbruk (mobil, nettbrett) siste timen før sengetid
- Bruk sengen kun til søvn – ikke TV, lesing eller arbeid
- Lag kveldsvaner som signaliserer leggetid (senke lyset, rolig musikk)

**Tilrettelegging av soveomgivelsene:**
- Mørkt rom – bruk gardiner eller rullegardin
- Kjølig temperatur (16-19 °C er ideelt)
- Stille omgivelser – reduser støy
- Behagelig seng og puter
- Godt sengetøy tilpasset årstiden

**Tilrettelegging i institusjon:**
- Respekter brukerens sovevaner og preferanser
- Reduser støy og forstyrrelser om natten
- Dempet belysning på kveld og natt
- Unngå unødvendige tilsyn som forstyrrer søvnen
- Tilby varm drikke (uten koffein) ved leggetid
- Sørg for smertelindring før natten`,
    },
    {
      id: 'hov2-4-6-text-3',
      type: 'text',
      content: `### Vanlige søvnforstyrrelser

**Insomni (søvnløshet):**
- Vanskeligheter med å sovne inn eller opprettholde søvn
- Den vanligste søvnforstyrrelsen
- Kan skyldes stress, angst, smerte, sykdom eller medisiner
- Behandles primært med søvnhygiene og kognitiv terapi

**Søvnapné:**
- Gjentatte pustestopp under søvn
- Gir dårlig søvnkvalitet og dagtidstretthet
- Kraftig snorking er vanlig symptom
- Behandles med CPAP-maskin (kontinuerlig overtrykk)

**Urolige bein (Restless Legs Syndrome):**
- Ubehagelig følelse i bena som gir trang til å bevege dem
- Verre i hvile og om kvelden
- Forstyrrer innsovning

**Døgnrytmeforstyrrelser:**
- Vanlig hos personer med demens (solnedgangssyndrom)
- Endret søvn-våkenrytme – våken om natten, sovner om dagen
- Dagslys og faste rutiner hjelper

### Aktivitetsbalanse

**Betydningen av aktivitet:**
- Fysisk aktivitet fremmer god søvn og helse
- Forebygger funksjonssvikt, fall og depresjon
- Gir mestringsopplevelser og sosial kontakt
- Tilpasset aktivitet er viktig – verken for mye eller for lite

**Aktivitetsbalanse hos brukere:**
- Vurder brukerens funksjonsnivå og ønsker
- Tilpass aktiviteten til dagsformen
- Balanser aktivitet og hvile gjennom dagen
- Skap muligheter for fysisk, sosial og kognitiv aktivitet
- Hvile er ikke det samme som passivitet – planlagte pauser er viktige

**Eksempler på tilrettelagt aktivitet:**
- Gåturer tilpasset funksjonsnivå
- Sitteøvelser og bevegelse til musikk
- Daglige gjøremål som matlaging og hagearbeid
- Sosiale aktiviteter og kulturopplevelser
- Kognitive aktiviteter som spill, lesing og samtale`,
    },
    {
      id: 'hov2-4-6-tip-1',
      type: 'tip',
      title: 'Søvnmedisiner – bruk med forsiktighet',
      content: `Sovemidler (hypnotika) skal brukes med forsiktighet, spesielt hos eldre. De kan gi døsighet på dagtid, økt fallrisiko, avhengighet og redusert søvnkvalitet over tid. Ikke-medikamentelle tiltak som søvnhygiene, faste rutiner og smertelindring skal alltid prøves først. Helsefagarbeideren bør rapportere søvnproblemer og observere effekt av tiltak.`,
    },
    {
      id: 'hov2-4-6-example-1',
      type: 'example',
      title: 'Eksempel: Søvnproblemer hos Bjørg',
      content: `**Situasjon**: Bjørg, 81 år, bor på sykehjem og sover dårlig. Hun ligger våken til langt på natt og sover mye på dagen. Hun er trøtt og irritabel.

**Kartlegging:**
- Bjørg sover 1-2 timer på ettermiddagen
- Legger seg klokken 20, men sovner ikke før midnatt
- Våkner flere ganger av smerter i knærne (artrose)
- Drikker kaffe til kveldsmat klokken 19
- Lite fysisk aktivitet på dagtid
- TV-en står på i rommet hele kvelden

**Tiltaksplan:**
1. **Begrense middagslur**: Maks 20 minutter, helst ikke etter kl. 14
2. **Aktivitet**: Gåtur i korridoren etter lunsj, sitteøvelser formiddag
3. **Koffein**: Erstatte kveldskaffen med koffeinfri variant
4. **Smertelindring**: Paracetamol fast dose kveld, god leiring med puter
5. **Kveldsrutine**: Slå av TV kl. 21, dempet belysning, rolig musikk
6. **Leggetid**: Utsett til kl. 22 – bedre samsvar med søvnbehov
7. **Nattro**: Unngå unødvendige tilsyn, nattlys i stedet for takbelysning

**Etter 2 uker**: Bjørg sovner raskere, sover 6-7 timer om natten og er mer opplagt på dagtid.`,
    },
    {
      id: 'hov2-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-6-ex-1',
        number: '4.6.1',
        type: 'multiple-choice',
        task: 'Hvilken søvnfase er viktigst for fysisk restitusjon og cellereparasjon?',
        options: [
          { id: 'a', text: 'Stadium N1 (innsovning)', isCorrect: false },
          { id: 'b', text: 'Stadium N2 (lett søvn)', isCorrect: false },
          { id: 'c', text: 'Stadium N3 (dyp søvn)', isCorrect: true },
          { id: 'd', text: 'REM-søvn (drømmesøvn)', isCorrect: false },
        ],
        solution: 'Stadium N3, den dype søvnen, er viktigst for fysisk restitusjon. I denne fasen skilles veksthormon ut, cellereparasjon foregår, og immunforsvaret styrkes. REM-søvn er viktigst for mental bearbeiding og minnekonsolidering.',
      },
    },
    {
      id: 'hov2-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-6-ex-2',
        number: '4.6.2',
        type: 'classic',
        task: 'Nevn fem tiltak for god søvnhygiene.',
        solution: '1) Faste legge- og våknetider, også i helger. 2) Unngå koffein og alkohol på kvelden. 3) Fysisk aktivitet på dagtid, men ikke rett før sengetid. 4) Unngå skjermbruk den siste timen før leggetid. 5) Sørg for mørkt, kjølig og stille soverom. Andre gode tiltak er å unngå lange middagslurer og lage faste kveldsvaner.',
      },
    },
    {
      id: 'hov2-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-6-ex-3',
        number: '4.6.3',
        type: 'multiple-choice',
        task: 'Hva er søvnapné?',
        options: [
          { id: 'a', text: 'Vanskeligheter med å sovne inn', isCorrect: false },
          { id: 'b', text: 'Gjentatte pustestopp under søvn', isCorrect: true },
          { id: 'c', text: 'Urolige bein om kvelden', isCorrect: false },
          { id: 'd', text: 'Søvngjengeri', isCorrect: false },
        ],
        solution: 'Søvnapné er gjentatte pustestopp under søvn som fører til redusert oksygentilførsel og dårlig søvnkvalitet. Kraftig snorking og dagtidstretthet er vanlige symptomer. Det behandles med CPAP-maskin som gir kontinuerlig overtrykk for å holde luftveiene åpne.',
      },
    },
    {
      id: 'hov2-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-6-ex-4',
        number: '4.6.4',
        type: 'classic',
        task: 'Forklar hva aktivitetsbalanse betyr og hvorfor det er viktig for brukere i helsetjenesten.',
        solution: 'Aktivitetsbalanse betyr å finne riktig balanse mellom aktivitet og hvile gjennom dagen. Det innebærer å tilpasse fysisk, sosial og kognitiv aktivitet til brukerens funksjonsnivå og dagsform. Det er viktig fordi: For lite aktivitet fører til funksjonssvikt, dårlig søvn og depresjon. For mye aktivitet kan gi utmattelse og forverring. Riktig balanse fremmer helse, mestring og livskvalitet. Planlagte hvilepauser er like viktige som aktiviteten.',
      },
    },
    {
      id: 'hov2-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-4-6-ex-5',
        number: '4.6.5',
        type: 'classic',
        task: 'En beboer på sykehjem sover mye på dagtid og er våken store deler av natten. Beskriv tiltak du kan iverksette.',
        solution: 'Tiltak: 1) Begrens middagslur til maks 20-30 minutter. 2) Tilby aktiviteter på dagtid – gåturer, sosiale aktiviteter, dagligdagse gjøremål. 3) Sørg for dagslyseksponering, spesielt om formiddagen. 4) Innfør faste kveldsrutiner med dempet belysning og rolige aktiviteter. 5) Unngå koffein etter lunsj. 6) Sørg for smertelindring hvis smerte er årsaken. 7) Reduser forstyrrelser om natten. 8) Dokumenter søvnmønster og rapporter til sykepleier for vurdering.',
      },
    },
    {
      id: 'hov2-4-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Søvnens faser** veksler mellom NREM og REM i 90-minutters sykluser
- **Søvnhygiene** er det viktigste tiltaket for bedre søvn
- **Søvnforstyrrelser** som insomni og søvnapné er vanlige og behandlingsbare
- **Aktivitetsbalanse** fremmer god søvn, helse og livskvalitet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Søvnhygiene | Vaner og tiltak som fremmer god søvnkvalitet |
| NREM-søvn | Søvn uten raske øyebevegelser, inkluderer dyp søvn |
| REM-søvn | Drømmesøvn med raske øyebevegelser |
| Insomni | Søvnløshet – vansker med å sovne eller opprettholde søvn |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Søvnhygiene', definition: 'Vaner og tiltak som fremmer god søvnkvalitet' },
    { term: 'NREM-søvn', definition: 'Søvnfase uten raske øyebevegelser, inkluderer lett og dyp søvn' },
    { term: 'REM-søvn', definition: 'Drømmesøvn med raske øyebevegelser, viktig for minnekonsolidering' },
    { term: 'Insomni', definition: 'Søvnløshet – vansker med innsovning eller å opprettholde søvn' },
    { term: 'Aktivitetsbalanse', definition: 'Riktig fordeling av aktivitet og hvile gjennom dagen' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL4_CHAPTERS = [
  CHAPTER_HOV2_4_1,
  CHAPTER_HOV2_4_2,
  CHAPTER_HOV2_4_3,
  CHAPTER_HOV2_4_4,
  CHAPTER_HOV2_4_5,
  CHAPTER_HOV2_4_6,
];

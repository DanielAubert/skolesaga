/**
 * Tekstbok kapitler for Naturfag 10 - Seksjon 7 del 2: Reproduksjonssystemene (7.2)
 *
 * LK20-kompetansemål: drøfte problemstillinger knyttet til seksuell og reproduktiv helse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.2: Reproduksjonssystemene
// ============================================================================

export const CHAPTER_NAT10_7_2: TextbookChapter = {
  id: 'naturfag-10-7-2',
  courseId: 'naturfag-10',
  chapterNumber: '7.2',
  title: 'Reproduksjonssystemene',
  description: 'Lær om det kvinnelige og mannlige reproduksjonssystemet, menstruasjonssyklusen og produksjon av kjønnsceller.',
  estimatedMinutes: 45,
  prerequisites: ['naturfag-10-7-1'],
  competenceGoals: [
    'forklare oppbygningen av det kvinnelige og mannlige reproduksjonssystemet',
    'beskrive menstruasjonssyklusen og eggløsning',
    'forklare produksjon og funksjon av eggceller og sædceller',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-7-2-intro',
      type: 'text',
      content: `## Reproduksjonssystemene

Alle levende organismer formerer seg – det er en av de grunnleggende egenskapene til liv. Hos mennesker skjer formering ved **seksuell reproduksjon**, der en eggcelle fra kvinnen og en sædcelle fra mannen smelter sammen til et befruktet egg som kan utvikle seg til et nytt menneske.

For at dette skal være mulig, har kvinner og menn ulike **reproduksjonssystemer** (kjønnsorganer). Disse systemene er spesialisert for å produsere kjønnsceller, transportere dem og skape de rette betingelsene for befruktning og fosterutvikling. Selv om de kvinnelige og mannlige systemene er svært forskjellige i oppbygning, har de ett felles mål: å gjøre det mulig å føre genene videre til neste generasjon.

I dette kapitlet lærer du:
- Oppbygningen av det kvinnelige reproduksjonssystemet
- Hva som skjer i menstruasjonssyklusen
- Hvordan eggceller produseres og modnes
- Oppbygningen av det mannlige reproduksjonssystemet
- Hvordan sædceller produseres og transporteres
- Forskjeller og likheter mellom eggceller og sædceller`,
    },

    // ========================================================================
    // BLOKK 1: DET KVINNELIGE REPRODUKSJONSSYSTEMET
    // ========================================================================

    // ========== DET KVINNELIGE REPRODUKSJONSSYSTEMET ==========
    {
      id: 'nat10-7-2-kvinnelig',
      type: 'text',
      content: `## Det kvinnelige reproduksjonssystemet

Det kvinnelige reproduksjonssystemet har to hovedfunksjoner: å produsere eggceller og å gi fosteret et trygt sted å utvikle seg. Systemet deles inn i **indre** og **ytre kjønnsorganer**.

### Indre kjønnsorganer

**Eggstokkene (ovariene)** er to mandelformede organer, omtrent 3 cm lange, som ligger på hver side av livmoren i nedre del av buken. De har to viktige oppgaver: å produsere eggceller og å produsere kjønnshormonene østrogen og progesteron. Ved fødselen inneholder eggstokkene alle eggcellene kvinnen noensinne vil ha.

**Egglederen (tuba uterina)** er to tynne rør som forbinder eggstokkene med livmoren. Når et egg frigjøres fra eggstokken under eggløsning, fanges det opp av egglederens traktformede åpning og transporteres mot livmoren ved hjelp av små flimmerhår (cilier) på innsiden. Det er vanligvis i egglederen at befruktningen skjer.

**Livmoren (uterus)** er et hult, muskuløst organ, omtrent på størrelse med en knyttneve. Innsiden er kledd med en slimhinne (endometriet) som bygges opp hver måned for å kunne ta imot et befruktet egg. Hvis egget ikke befruktes, støtes slimhinnen ut som menstruasjon.

**Livmorhalsen (cervix)** er den nedre, smale delen av livmoren som åpner seg mot skjeden. Den produserer slim som beskytter livmoren mot bakterier. Under fødsel utvider livmorhalsen seg for å la barnet passere.

**Skjeden (vagina)** er en elastisk muskelkanal, ca. 8–10 cm lang, som forbinder livmorhalsen med utsiden av kroppen. Skjeden har flere funksjoner: den er fødselskanal, den lar menstruasjonsblod strømme ut, og den tar imot penis under samleie.

### Ytre kjønnsorganer (vulva)

De ytre kjønnsorganene hos kvinner kalles samlet **vulva**. Vulva omfatter **kjønnsleppene** (to par: store og små kjønnslepper) som beskytter de indre delene, **klitoris** som er et svært følsomt organ rikt på nerveender, **skjedeåpningen** som er inngangen til skjeden, og **urinrørsåpningen** som er en egen åpning for urin. Det er viktig å forstå at urinrøret og skjeden er to separate åpninger med ulike funksjoner.`,
    },

    // ========== DEFINISJON: KVINNELIG SYSTEM ==========
    {
      id: 'nat10-7-2-def-kvinnelig',
      type: 'definition',
      title: 'De viktigste delene av det kvinnelige reproduksjonssystemet',
      content: `**Eggstokker (ovarier):** To organer som produserer eggceller og hormonene østrogen og progesteron.

**Livmor (uterus):** Hult, muskuløst organ der fosteret utvikler seg under graviditet. Slimhinnen bygges opp og støtes ut hver måned (menstruasjon).

**Eggledere (tuba uterina):** To rør som transporterer eggcellen fra eggstokken til livmoren. Befruktning skjer vanligvis her.

**Skjede (vagina):** Elastisk muskelkanal som forbinder livmoren med utsiden av kroppen. Fungerer som fødselskanal og lar menstruasjonsblod strømme ut.`,
    },

    // ========== OPPGAVE 7.2.1 ==========
    {
      id: 'nat10-7-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor produseres eggceller?',
        options: ['I livmoren', 'I eggstokkene', 'I egglederen', 'I skjeden'],
        answer: 1,
        solution: `**Riktig svar: I eggstokkene**

**Forklaring:**
Eggstokkene (ovariene) er de to organene som produserer eggceller. De ligger på hver side av livmoren. Eggstokkene produserer også kjønnshormonene østrogen og progesteron. Egglederen transporterer eggcellen videre mot livmoren, men det er i eggstokkene eggcellene dannes og modnes.`,
      },
    },

    // ========================================================================
    // BLOKK 2: MENSTRUASJONSSYKLUSEN
    // ========================================================================

    // ========== MENSTRUASJONSSYKLUSEN ==========
    {
      id: 'nat10-7-2-menstruasjon',
      type: 'text',
      content: `## Menstruasjonssyklusen

Menstruasjonssyklusen er en serie forandringer som skjer i kroppen til kvinner i fruktbar alder, omtrent hver 28. dag. Syklusen styres av hormoner og forbereder kroppen på en mulig graviditet. Hvis graviditet ikke oppstår, starter syklusen på nytt.

### De fire fasene

**Dag 1–5: Menstruasjonen**
Syklusen starter med **menstruasjon** (mensen). Livmorslimhinnen som ble bygget opp i forrige syklus, støtes ut sammen med litt blod gjennom skjeden. Blødningen varer vanligvis 3–7 dager. Dag 1 i syklusen regnes som den første dagen med blødning.

**Dag 6–14: Follikelfasen**
Etter menstruasjonen begynner kroppen å forberede seg på en ny eggløsning. I eggstokkene begynner flere **follikler** (eggsekker) å vokse, men vanligvis er det bare én som modnes fullstendig. Folliklene produserer østrogen, som gjør at livmorslimhinnen bygges opp igjen og blir tykkere og mer blodrik. Østrogennivået stiger gradvis gjennom denne fasen.

**Dag 14: Eggløsning (ovulasjon)**
Når østrogennivået når en topp, utløser dette en kraftig frigjøring av hormonet LH (luteiniserende hormon) fra hjernen. LH-toppen får den modne folikkelen til å sprekke, og eggcellen frigjøres fra eggstokken. Dette kalles **eggløsning** eller **ovulasjon**. Eggcellen fanges opp av egglederen og begynner reisen mot livmoren. Eggcellen kan befruktes i ca. 12–24 timer etter eggløsning.

**Dag 15–28: Lutealfasen**
Etter eggløsning omdannes den tomme folikkelen til det **gule legemet** (corpus luteum), som produserer progesteron. Progesteron gjør livmorslimhinnen enda tykkere og mer næringsrik – klar til å ta imot et befruktet egg. Hvis egget ikke befruktes, brytes det gule legemet ned etter ca. 10–14 dager. Progesteron- og østrogennivået faller, og livmorslimhinnen begynner å løsne. En ny menstruasjon starter, og syklusen begynner på nytt.

### Normal variasjon

En gjennomsnittlig syklus er 28 dager, men det er helt normalt å ha sykluser mellom **21 og 35 dager**. I puberteten er det vanlig at syklusen er uregelmessig de første par årene. Stress, trening, kosthold og sykdom kan også påvirke sykluslengden.`,
    },

    // ========== DEFINISJON: MENSTRUASJONSSYKLUSEN ==========
    {
      id: 'nat10-7-2-def-syklus',
      type: 'definition',
      title: 'Nøkkelbegreper i menstruasjonssyklusen',
      content: `**Menstruasjon:** Månedlig blødning der livmorslimhinnen støtes ut gjennom skjeden. Varer vanligvis 3–7 dager.

**Eggløsning (ovulasjon):** Frigjøring av en moden eggcelle fra eggstokken, skjer vanligvis rundt dag 14 i syklusen.

**Follikelfasen:** Fasen fra menstruasjonen er over til eggløsning (dag 6–14). Et egg modnes i eggstokken og østrogen bygger opp livmorslimhinnen.

**Lutealfasen:** Fasen fra eggløsning til neste menstruasjon (dag 15–28). Det gule legemet produserer progesteron som forbereder livmoren på mulig graviditet.`,
    },

    // ========== EKSEMPEL: EN TYPISK MENSTRUASJONSSYKLUS ==========
    {
      id: 'nat10-7-2-example-1',
      type: 'example',
      title: 'En typisk menstruasjonssyklus',
      problem: 'Sara har en jevn menstruasjonssyklus på 28 dager. Første dag av siste menstruasjon var 1. mars. Når har Sara sannsynligvis eggløsning, og hva skjer i de ulike fasene?',
      solution: `**Saras syklus fra 1. mars:**

**Dag 1–5 (1.–5. mars): Menstruasjon**
- Slimhinnen i livmoren støtes ut som blødning
- Hormonnivåene (østrogen og progesteron) er på sitt laveste
- Kroppen begynner å forberede en ny syklus

**Dag 6–14 (6.–14. mars): Follikelfasen**
- Follikler begynner å vokse i eggstokkene
- Østrogennivået stiger gradvis
- Livmorslimhinnen bygges opp igjen og blir tykkere

**Dag 14 (ca. 14. mars): Eggløsning**
- Et modent egg frigjøres fra eggstokken
- Østrogennivået har nådd en topp, som utløser LH-topp
- Eggcellen fanges opp av egglederen
- Egget kan befruktes i ca. 12–24 timer

**Dag 15–28 (15.–28. mars): Lutealfasen**
- Det gule legemet produserer progesteron
- Livmorslimhinnen forberedes på mulig innfesting av befruktet egg
- Hvis ingen befruktning skjer, brytes det gule legemet ned
- Hormonnivåene faller, og en ny menstruasjon starter ca. 29. mars

**Svar:** Sara har sannsynligvis eggløsning rundt 14. mars, altså dag 14 i syklusen.`,
    },

    // ========== OPPGAVE 7.2.2 ==========
    {
      id: 'nat10-7-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som skjer i kroppen under menstruasjonssyklusen fra dag 1 til dag 28. Beskriv de fire fasene og nevn hvilke hormoner som er viktige.',
        solution: `**Eksempelsvar:**

**Dag 1–5: Menstruasjonen**
Syklusen starter med menstruasjon. Livmorslimhinnen som ble bygget opp i forrige syklus, støtes ut gjennom skjeden sammen med litt blod. Nivåene av østrogen og progesteron er lave.

**Dag 6–14: Follikelfasen**
I eggstokkene begynner follikler (eggsekker) å vokse. Folliklene produserer hormonet østrogen, som gjør at livmorslimhinnen bygges opp igjen og blir tykkere og mer blodrik. Vanligvis modnes bare én follikkel fullstendig.

**Dag 14: Eggløsning (ovulasjon)**
Når østrogennivået er på topp, sender hjernen ut et signal i form av hormonet LH (luteiniserende hormon). LH-toppen får den modne folikkelen til å sprekke, og eggcellen frigjøres fra eggstokken. Eggcellen kan befruktes i ca. 12–24 timer.

**Dag 15–28: Lutealfasen**
Den tomme folikkelen omdannes til det gule legemet, som produserer hormonet progesteron. Progesteron gjør slimhinnen i livmoren enda tykkere og mer næringsrik, klar til å ta imot et befruktet egg. Hvis egget ikke befruktes, brytes det gule legemet ned. Østrogen- og progesteronnivåene faller, slimhinnen løsner, og en ny menstruasjon starter.

**Viktige hormoner:** østrogen (bygger opp slimhinne, styrer follikelvekst), progesteron (vedlikeholder slimhinne, forbereder graviditet), LH (utløser eggløsning) og FSH (stimulerer follikelvekst).`,
      },
    },

    // ========== OPPGAVE 7.2.3 ==========
    {
      id: 'nat10-7-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer under eggløsningen?',
        options: [
          'Livmorslimhinnen støtes ut som blødning',
          'En moden eggcelle frigjøres fra eggstokken',
          'Det gule legemet begynner å produsere progesteron',
          'Sædceller produseres i testiklene',
        ],
        answer: 1,
        solution: `**Riktig svar: En moden eggcelle frigjøres fra eggstokken**

**Forklaring:**
Eggløsning (ovulasjon) er det øyeblikket en moden eggcelle frigjøres fra eggstokken. Dette skjer vanligvis rundt dag 14 i en 28-dagers syklus, og utløses av en topp i hormonet LH. Etter frigjøringen fanges eggcellen opp av egglederen og transporteres mot livmoren. Menstruasjon (alternativ A) skjer i starten av syklusen, og progesteronproduksjon (alternativ C) skjer etter eggløsning i lutealfasen.`,
      },
    },

    // ========================================================================
    // BLOKK 3: EGGCELLER
    // ========================================================================

    // ========== EGGCELLER ==========
    {
      id: 'nat10-7-2-eggceller',
      type: 'text',
      content: `## Eggceller

Eggceller er de kvinnelige kjønnscellene, og de har noen spesielle egenskaper som skiller dem fra andre celler i kroppen.

### Alle eggceller dannes før fødsel

En av de mest overraskende fakta om eggceller er at alle dannes allerede **før kvinnen er født**. Mens jentebabyer er i mors mage, utvikles det mellom **1 og 2 millioner** umodne eggceller i eggstokkene. Etter fødselen dannes det aldri nye eggceller – dette er et fast lager som skal vare hele livet.

### Fra fødsel til pubertet

Mange av de umodne eggcellene brytes naturlig ned i løpet av barndommen. Når jenta når puberteten, er det ca. **300 000 eggceller** igjen i eggstokkene. Dette er fortsatt langt flere enn det som trengs.

### Fra pubertet til overgangsalder

Fra puberteten og til overgangsalderen (menopausen) modnes det vanligvis **én eggcelle per syklus**. I løpet av en kvinnes fruktbare liv modnes det totalt bare **400–500 eggceller**. Resten av eggcellene brytes gradvis ned over tid.

### Den største cellen i kroppen

Eggcellen er den **største cellen i menneskekroppen**, med en diameter på ca. **0,1 mm** (100 mikrometer). Den er akkurat stor nok til å kunne ses med det blotte øye som en liten prikk. Eggcellen er så stor fordi den inneholder mye **næringsstoffer** (cytoplasma) som det tidlige embryoet trenger i de første dagene etter befruktning, før det fester seg i livmoren.

### Kort levetid etter eggløsning

Etter eggløsning lever eggcellen bare i ca. **12–24 timer** dersom den ikke befruktes. Dette betyr at vinduet for befruktning er relativt kort i hver syklus, selv om sædceller kan overleve i opptil 5 dager i kvinnens kropp.`,
    },

    // ========== OPPGAVE 7.2.4 ==========
    {
      id: 'nat10-7-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-4',
        number: '7.2.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Omtrent hvor mange eggceller modnes i løpet av en kvinnes liv?',
        options: ['1–2 millioner', '300 000', '400–500', 'Ca. 5 000'],
        answer: 2,
        solution: `**Riktig svar: 400–500**

**Forklaring:**
Selv om en jentebaby fødes med 1–2 millioner umodne eggceller, og det er ca. 300 000 igjen ved puberteten, er det bare ca. 400–500 eggceller som faktisk modnes og frigjøres gjennom eggløsning i løpet av en kvinnes fruktbare liv. Det modnes vanligvis bare én eggcelle per menstruasjonssyklus. Resten av eggcellene brytes gradvis ned naturlig.`,
      },
    },

    // ========================================================================
    // BLOKK 4: DET MANNLIGE REPRODUKSJONSSYSTEMET
    // ========================================================================

    // ========== DET MANNLIGE REPRODUKSJONSSYSTEMET ==========
    {
      id: 'nat10-7-2-mannlig',
      type: 'text',
      content: `## Det mannlige reproduksjonssystemet

Det mannlige reproduksjonssystemet har som hovedfunksjon å produsere sædceller og levere dem til det kvinnelige reproduksjonssystemet. Systemet består av både **ytre** og **indre kjønnsorganer**.

### Ytre kjønnsorganer

**Penis** er et ytre kjønnsorgan som har tre funksjoner: å transportere urin ut av kroppen, å levere sædceller til skjeden under samleie, og å gi seksuell nytelse. Penis består av svampvev som kan fylles med blod. Når svampvevet fylles med blod, blir penis hard og stiv – dette kalles **ereksjon**.

**Pungen (scrotum)** er en hudsekk som henger under penis og inneholder testiklene. Pungens oppgave er å holde testiklene på riktig temperatur for sædcelleproduksjon, som er ca. 2 °C lavere enn normal kroppstemperatur (37 °C). Pungen kan trekke seg sammen i kulde og utvide seg i varme for å regulere temperaturen.

### Indre kjønnsorganer

**Testiklene (testis)** er to ovale organer inne i pungen. De har to hovedoppgaver: å produsere sædceller og å produsere hormonet testosteron. Sædcelleproduksjonen skjer i tynne, oppkveilede rør kalt **sædkanaler** inne i testiklene.

**Bitestiklene (epididymis)** ligger som en kappe rundt hver testikkel. Her modnes og lagres sædcellene i 2–3 uker før de er klare for ejakulasjon.

**Sædlederne (vas deferens)** er to rør som transporterer sædceller fra bitestiklene opp gjennom lysken og forbi urinblæren til urinrøret.

**Prostata** og **sædblærene** er kjertler som produserer væske som blandes med sædcellene for å danne **sæd** (sperma). Prostataen produserer en tynn, lett basisk væske som nøytraliserer det sure miljøet i skjeden. Sædblærene produserer en sukkerrik væske (fruktose) som gir sædcellene energi til å svømme.

**Urinrøret** er et rør gjennom penis som brukes til å transportere både urin og sæd ut av kroppen (men aldri samtidig).

### Ejakulasjon

**Ejakulasjon** (utløsning) er prosessen der sæd presses ut av penis gjennom urinrøret. Under ejakulasjon trekker musklene rundt sædleder, prostata og sædblærer seg sammen i rytmiske sammentrekninger. Ved hver ejakulasjon frigjøres ca. 2–5 ml sæd, som inneholder mellom 100 og 300 millioner sædceller.`,
    },

    // ========== DEFINISJON: MANNLIG SYSTEM ==========
    {
      id: 'nat10-7-2-def-mannlig',
      type: 'definition',
      title: 'De viktigste delene av det mannlige reproduksjonssystemet',
      content: `**Testikler (testis):** To organer i pungen som produserer sædceller og hormonet testosteron. Sædcelleproduksjon skjer i sædkanaler inne i testiklene.

**Sædceller:** Mannlige kjønnsceller som produseres kontinuerlig i testiklene fra puberteten. Har et hode med DNA og en hale for bevegelse.

**Sæd (sperma):** Blandingen av sædceller og væske fra prostata og sædblærer. Inneholder 100–300 millioner sædceller per ejakulasjon.

**Ejakulasjon:** Utløsning av sæd fra penis gjennom urinrøret. Muskelsammentrekninger presser sæden ut.`,
    },

    // ========== OPPGAVE 7.2.5 ==========
    {
      id: 'nat10-7-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv veien sædcellene tar fra produksjon til ejakulasjon. Nevn alle organene de passerer gjennom.',
        solution: `**Eksempelsvar:**

Sædcellene har en lang reise gjennom det mannlige reproduksjonssystemet:

**1. Testiklene (produksjon)**
Sædcellene produseres i sædkanalene inne i testiklene. Produksjonen skjer kontinuerlig fra puberteten.

**2. Bitestiklene (modning og lagring)**
Fra testiklene transporteres de umodne sædcellene til bitestiklene, der de modnes og lagres i 2–3 uker.

**3. Sædlederne (transport)**
Under seksuell opphisselse transporteres sædcellene gjennom sædlederne, som er lange rør som fører fra bitestiklene opp gjennom lysken.

**4. Prostata og sædblærer (blanding med væske)**
Langs veien blandes sædcellene med væske fra sædblærene (som gir energi i form av fruktose) og prostata (som gir en basisk væske som beskytter sædcellene). Denne blandingen kalles sæd (sperma).

**5. Urinrøret og penis (ejakulasjon)**
Sæden presses ut gjennom urinrøret i penis under ejakulasjon. Muskelsammentrekninger sørger for at sæden skyves ut.

**Rekkefølgen er altså:** testikler → bitestikler → sædledere → (blanding med væske fra prostata og sædblærer) → urinrøret → ut gjennom penis.`,
      },
    },

    // ========================================================================
    // BLOKK 5: SÆDCELLER
    // ========================================================================

    // ========== SÆDCELLER ==========
    {
      id: 'nat10-7-2-saedceller',
      type: 'text',
      content: `## Sædceller

Sædceller er de mannlige kjønnscellene og har unike egenskaper som gjør dem perfekt tilpasset sin oppgave: å nå frem til og befrukte en eggcelle.

### Kontinuerlig produksjon

I motsetning til eggceller, som alle dannes før fødsel, produseres sædceller **kontinuerlig fra puberteten** og gjennom hele livet. Produksjonen er enorm – ca. **1000 sædceller i sekundet**, eller rundt 100 millioner per dag. Denne produksjonen skjer i sædkanalene inne i testiklene og tar ca. 64–72 dager fra start til ferdig sædcelle.

### Sædcellens oppbygning

Sædcellen er en av kroppens minste celler, bare ca. **0,05 mm** (50 mikrometer) lang – altså bare halvparten av eggcellens diameter. Den har en karakteristisk form som er tilpasset oppgaven:

- **Hodet** inneholder cellekjernen med **DNA** (arvestoffet). Fremst på hodet sitter et enzymlag (akrosomet) som kan bryte gjennom eggcellens beskyttende lag ved befruktning.
- **Midtstykket** inneholder mange **mitokondrier** som produserer energi til bevegelse.
- **Halen** (flagellen) er lang og piskformig og driver sædcellen fremover ved bølgende bevegelser, med en fart på ca. 3 mm per minutt.

### Modning og lagring

Etter at sædcellene er produsert i testiklene, transporteres de til **bitestiklene** der de modnes i 2–3 uker. Først etter denne modningstiden er sædcellene i stand til å svømme og befrukte en eggcelle.

### Sæd

Ved ejakulasjon frigjøres **2–5 ml sæd** (sperma), som inneholder **100–300 millioner sædceller**. Sædvæsken består av sekret fra prostata og sædblærer, og inneholder næringsstoffer (spesielt fruktose) som gir sædcellene energi.

### Temperaturens betydning

Sædcelleproduksjon krever en temperatur som er ca. **2 °C lavere enn normal kroppstemperatur**. Derfor henger testiklene utenfor kroppen i pungen. Pungen fungerer som en temperaturregulator – den trekker testiklene nærmere kroppen i kulde og senker dem i varme. For høy temperatur over tid kan redusere sædcelleproduksjonen.`,
    },

    // ========== EKSEMPEL: SAMMENLIGNING AV KJØNNSCELLER ==========
    {
      id: 'nat10-7-2-example-2',
      type: 'example',
      title: 'Sammenligning av eggceller og sædceller',
      problem: 'Sammenlign eggceller og sædceller med tanke på størrelse, antall, produksjon og levetid.',
      solution: `**Sammenligning:**

| Egenskap | Eggcelle | Sædcelle |
|----------|----------|----------|
| **Størrelse** | Ca. 0,1 mm (100 µm) – kroppens største celle | Ca. 0,05 mm (50 µm) – en av kroppens minste celler |
| **Antall ved fødsel** | 1–2 millioner (alle dannet) | Ingen (produksjon starter ved pubertet) |
| **Produksjon** | Ingen nye etter fødsel; ca. 400–500 modnes i løpet av livet | Kontinuerlig fra pubertet; ca. 1000 per sekund |
| **Modning per syklus** | Vanligvis 1 per syklus (ca. hver 28. dag) | Ca. 100 millioner per dag |
| **Levetid etter frigjøring** | 12–24 timer | Opptil 5 dager i kvinnens kropp |
| **Bevegelse** | Passiv – transporteres av flimmerhår i egglederen | Aktiv – svømmer ved hjelp av halen |
| **Innhold** | Mye cytoplasma med næringsstoffer for embryoet | Minimalt cytoplasma – kompakt og strømlinjeformet |

**Viktige likheter:**
- Begge er **kjønnsceller** (gameter) med halvt kromosomsett (23 kromosomer)
- Begge er nødvendige for seksuell reproduksjon
- Begge produseres i **gonader** (kjønnskjertler): eggstokker og testikler`,
    },

    // ========== OPPGAVE 7.2.6 ==========
    {
      id: 'nat10-7-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-6',
        number: '7.2.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor henger testiklene utenfor kroppen i pungen?',
        options: [
          'Fordi det ikke er plass til dem inne i kroppen',
          'Fordi sædcelleproduksjon krever lavere temperatur enn kroppstemperatur',
          'Fordi det gjør det lettere å produsere testosteron',
          'Fordi sædcellene trenger frisk luft for å modnes',
        ],
        answer: 1,
        solution: `**Riktig svar: Fordi sædcelleproduksjon krever lavere temperatur enn kroppstemperatur**

**Forklaring:**
Sædcelleproduksjon fungerer best ved en temperatur som er ca. 2 °C lavere enn normal kroppstemperatur (37 °C). Testiklene henger derfor utenfor kroppen i pungen, som fungerer som en temperaturregulator. Pungen kan trekke testiklene nærmere kroppen når det er kaldt og slippe dem lenger ned når det er varmt, for å holde temperaturen stabil. For høy temperatur over tid kan hemme sædcelleproduksjonen.`,
      },
    },

    // ========================================================================
    // OPPSUMMERING
    // ========================================================================

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har du lært om reproduksjonssystemene hos mennesker:

### Det kvinnelige reproduksjonssystemet
- **Eggstokkene** produserer eggceller og hormonene østrogen og progesteron
- **Egglederen** transporterer eggcellen og er stedet der befruktning vanligvis skjer
- **Livmoren** bygger opp en slimhinne som kan ta imot et befruktet egg
- **Skjeden** forbinder livmoren med utsiden og fungerer som fødselskanal
- Ytre kjønnsorganer (vulva) inkluderer kjønnslepper, klitoris og skjedeåpning

### Menstruasjonssyklusen
- Varer gjennomsnittlig 28 dager (normal variasjon: 21–35 dager)
- **Dag 1–5:** Menstruasjon – slimhinnen støtes ut
- **Dag 6–14:** Follikelfasen – egg modnes, østrogen bygger opp slimhinnen
- **Dag 14:** Eggløsning – eggcellen frigjøres
- **Dag 15–28:** Lutealfasen – progesteron forbereder livmoren på graviditet

### Eggceller
- Alle dannes før fødsel (1–2 millioner), ca. 400–500 modnes i løpet av livet
- Kroppens største celle (0,1 mm), lever 12–24 timer etter eggløsning

### Det mannlige reproduksjonssystemet
- **Testiklene** produserer sædceller og testosteron
- Sædcellene modnes i **bitestiklene** og transporteres via **sædlederne**
- **Prostata** og **sædblærer** produserer væske som danner sæd
- Ved ejakulasjon frigjøres 100–300 millioner sædceller

### Sædceller
- Produseres kontinuerlig fra puberteten (~1000 per sekund)
- Har hode (DNA), midtstykke (energi) og hale (bevegelse)
- Testiklene henger utenfor kroppen fordi produksjon krever lavere temperatur

### Nøkkelbegreper

| Begrep | Forklaring |
|--------|------------|
| **Eggstokker** | Produserer eggceller og hormoner |
| **Livmor** | Hult organ der fosteret utvikler seg |
| **Eggløsning** | Frigjøring av moden eggcelle |
| **Menstruasjon** | Månedlig blødning når slimhinne støtes ut |
| **Testikler** | Produserer sædceller og testosteron |
| **Sædceller** | Mannlige kjønnsceller |
| **Ejakulasjon** | Utløsning av sæd fra penis |
| **Follikelfasen** | Fasen der egg modnes (dag 6–14) |
| **Lutealfasen** | Fasen etter eggløsning (dag 15–28) |`,
    },

    // ========================================================================
    // SAMLEOPPGAVER
    // ========================================================================

    // ========== OPPGAVE 7.2.7 ==========
    {
      id: 'nat10-7-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-7',
        number: '7.2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign det kvinnelige og mannlige reproduksjonssystemet. Hva er de viktigste likhetene og forskjellene?',
        solution: `**Eksempelsvar:**

**Likheter:**
- Begge systemene har **gonader** (kjønnskjertler) som produserer kjønnsceller: eggstokker hos kvinner og testikler hos menn
- Begge produserer **kjønnshormoner**: østrogen og progesteron hos kvinner, testosteron hos menn
- Begge har **rør/kanaler** for transport av kjønnsceller: eggledere hos kvinner og sædledere hos menn
- Begge systemene starter å fungere fullt ut ved **puberteten**

**Forskjeller:**

| Egenskap | Kvinnelig system | Mannlig system |
|----------|-----------------|----------------|
| **Kjønnsceller** | Eggceller (store, få) | Sædceller (små, mange) |
| **Produksjon** | Alle dannet før fødsel | Kontinuerlig produksjon fra pubertet |
| **Antall** | 400–500 modnes i livet | Millioner per dag |
| **Syklus** | Menstruasjonssyklus (ca. 28 dager) | Ingen syklus – kontinuerlig produksjon |
| **Fruktbar periode** | Fra pubertet til overgangsalder | Fra pubertet og livet ut |
| **Gonader** | Inne i kroppen | Utenfor kroppen (i pungen) |
| **Ekstra funksjon** | Livmor for fosterutvikling | Ingen tilsvarende |

Den største forskjellen er at det kvinnelige systemet er syklisk (menstruasjonssyklusen) og har et begrenset antall eggceller, mens det mannlige systemet produserer sædceller kontinuerlig.`,
      },
    },

    // ========== OPPGAVE 7.2.8 ==========
    {
      id: 'nat10-7-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-8',
        number: '7.2.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar sammenhengen mellom hormoner og menstruasjonssyklusen. Hvilke hormoner er involvert, og hva er oppgaven til hvert hormon?',
        solution: `**Eksempelsvar:**

Menstruasjonssyklusen styres av et samspill mellom fire hovedhormoner:

**1. FSH (follikkelstimulerende hormon)**
- Produseres i hypofysen (en kjertel i hjernen)
- Stimulerer vekst og modning av follikler (eggsekker) i eggstokkene
- Er mest aktivt i begynnelsen av syklusen (follikelfasen)

**2. Østrogen**
- Produseres av de voksende folliklene i eggstokkene
- Bygger opp livmorslimhinnen og gjør den tykkere og mer blodrik
- Når østrogennivået når en topp, utløser dette frigjøring av LH

**3. LH (luteiniserende hormon)**
- Produseres i hypofysen
- En kraftig LH-topp rundt dag 14 utløser eggløsning – eggcellen frigjøres fra folikkelen
- Stimulerer omdanning av den tomme folikkelen til det gule legemet

**4. Progesteron**
- Produseres av det gule legemet etter eggløsning
- Gjør livmorslimhinnen enda tykkere og mer næringsrik, klar for et befruktet egg
- Hemmer ny eggløsning så lenge nivået er høyt
- Når det gule legemet brytes ned og progesteronnivået faller, starter menstruasjonen

**Sammenhengen:**
Hormonene styrer hverandre i en syklus: FSH starter follikelvekst → østrogen bygger opp slimhinne → LH-topp utløser eggløsning → progesteron vedlikeholder slimhinne → progesteron faller → menstruasjon → ny syklus starter.`,
      },
    },

    // ========== OPPGAVE 7.2.9 ==========
    {
      id: 'nat10-7-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-7-2-ex-9',
        number: '7.2.9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva skjer dersom progesteronnivået holdes kunstig høyt gjennom hele syklusen, for eksempel ved bruk av hormonell prevensjon?',
        options: [
          'Menstruasjonen blir kraftigere fordi slimhinnen bygges opp mer',
          'Eggløsning hemmes fordi kroppen «tror» den allerede er i lutealfasen',
          'Flere eggceller modnes samtidig fordi hormonbalansen forstyrres',
          'Sædcellene svømmer raskere fordi progesteron stimulerer dem',
        ],
        answer: 1,
        solution: `**Riktig svar: Eggløsning hemmes fordi kroppen «tror» den allerede er i lutealfasen**

**Forklaring:**
Progesteron har en hemmende (negativ tilbakekobling) effekt på hypofysen. Når progesteronnivået er høyt, sender hjernen ut mindre FSH og LH. Uten FSH vokser ikke nye follikler, og uten LH-toppen skjer det ingen eggløsning. Kroppen oppfører seg som om den allerede er i lutealfasen (etter eggløsning).

Dette er faktisk hovedprinsippet bak hormonell prevensjon som p-piller: syntetisk progesteron (gestagen) holder hormonnivået stabilt og hindrer eggløsning. I tillegg gjør progesteron slimet i livmorhalsen tykkere, noe som gjør det vanskeligere for sædceller å trenge gjennom.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Eggstokker', definition: 'To organer som produserer eggceller og hormonene østrogen og progesteron' },
    { term: 'Livmor', definition: 'Hult, muskuløst organ hvor fosteret utvikler seg under graviditet' },
    { term: 'Eggløsning', definition: 'Når et modent egg frigjøres fra eggstokken, vanligvis ca. dag 14 i syklusen' },
    { term: 'Menstruasjon', definition: 'Månedlig blødning når slimhinnen i livmoren støtes ut' },
    { term: 'Testikler', definition: 'To organer som produserer sædceller og hormonet testosteron' },
    { term: 'Sædceller', definition: 'Mannlige kjønnsceller som kan befrukte et egg' },
    { term: 'Ejakulasjon', definition: 'Utløsning av sæd fra penis' },
    { term: 'Follikelfasen', definition: 'Fasen i menstruasjonssyklusen der et egg modnes' },
    { term: 'Lutealfasen', definition: 'Fasen etter eggløsning der kroppen forbereder seg på mulig graviditet' },
  ],
};

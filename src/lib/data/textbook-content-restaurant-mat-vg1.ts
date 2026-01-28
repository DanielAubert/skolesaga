/**
 * Restaurant- og matfag VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for restaurant- og matfag på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Råvarer og matvarekunnskap
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_1: TextbookChapter = {
  id: 'restaurant-mat-vg1-1',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '1',
  title: 'Råvarer og matvarekunnskap',
  description: 'Lær om ulike råvarer, kvalitetsvurdering og riktig lagring av mat.',
  estimatedMinutes: 60,
  competenceGoals: [
    'vurdere kvalitet på ulike råvarer',
    'lagre råvarer på riktig måte',
    'kjenne til sesongvariasjon',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-1-intro',
      type: 'text',
      content: `Kunnskap om råvarer er grunnlaget for alt arbeid i kjøkkenet. Som kokk må du kunne vurdere kvalitet, velge riktige råvarer til riktig formål, og lagre dem på en måte som bevarer kvalitet og mattrygghet.`,
    },
    {
      id: 'restaurant-mat-vg1-1-def-1',
      type: 'definition',
      title: 'Råvarekvalitet',
      content: `Råvarekvalitet handler om ferske, ubehandlede ingredienser og deres egenskaper som lukt, smak, utseende og konsistens. God kvalitet gir bedre smak og ernæringsverdi.`,
    },
    {
      id: 'restaurant-mat-vg1-1-text-1',
      type: 'text',
      content: `**Kjøtt som råvare**

**Kvalitetskriterier**:
- Friskt kjøtt har rød farge (varierer etter dyr)
- Fast konsistens, ikke slimet
- Frisk lukt, ikke sur eller unormal
- Marmorering (fettinnslag) gir saftigere kjøtt

**Viktige kjøtttyper**:
- **Storfe**: Biff, ytrefilet, indrefilet, entrecôte
- **Svin**: Koteletter, svinefilet, svineknoke
- **Lam**: Lammekjøtt, lammekoteletter
- **Fjærfe**: Kylling, kalkun, and

**Lagring**:
- Kjøleskap: +2 til +4°C, 2-3 dager
- Fryser: -18°C eller kaldere, flere måneder
- Vakuumpakket kjøtt holder lengre`,
    },
    {
      id: 'restaurant-mat-vg1-1-text-2',
      type: 'text',
      content: `**Fisk og sjømat**

**Ferskhetsgrader**:
- Øynene: Klare og bulet (ikke sunket eller grå)
- Gjellene: Røde eller rosa (ikke brune)
- Lukt: Frisk sjølukt (ikke sur eller fiskete)
- Konsistens: Fast kjøtt som spretter tilbake

**Typer sjømat**:
- **Hvit fisk**: Torsk, sei, hyse
- **Fet fisk**: Laks, ørret, makrell
- **Skalldyr**: Reker, krabbe, hummer
- **Bløtdyr**: Blekksprut, blåskjell

**Lagring**:
- Kjøl ned raskt til +2°C
- Dekk med is
- Bruk innen 1-2 dager`,
    },
    {
      id: 'restaurant-mat-vg1-1-text-3',
      type: 'text',
      content: `**Grønnsaker og frukt**

**Sesongvariasjon**:
- Vår: Asparges, reddik, vårløk
- Sommer: Tomater, agurk, paprika, bær
- Høst: Kål, rotfrukter, sopp, epler
- Vinter: Lagringsgrønnsaker, kål

**Kvalitetsvurdering**:
- Ferske grønnsaker er faste og sprø
- Friske farger
- Ingen råtne partier eller skader
- Frukt skal ikke være overmoden

**Lagring**:
- Rotfrukter: Kjølig og mørkt
- Bladgrønnsaker: Kjøleskap, tørk av først
- Tomater og sitrus: Romtemperatur for best smak
- Bær: Kjøleskap, bruk raskt`,
    },
    {
      id: 'restaurant-mat-vg1-1-def-2',
      type: 'definition',
      title: 'Marmorering',
      content: `Marmorering er fettinnslag i kjøttet som gir ekstra smak og saftighet ved tilberedning. Høy grad av marmorering er ofte et kvalitetstegn.`,
    },
    {
      id: 'restaurant-mat-vg1-1-text-4',
      type: 'text',
      content: `**Meieriprodukter**

**Melk og fløte**:
- Sjekk holdbarhetsdato
- Lukter søtt og friskt
- Lagres kaldt (+4°C)

**Ost**:
- Hardost, mykost, blåmuggost
- Skal ikke være tørr eller sprukket
- Ingen unormal mugg (unntatt blåmuggost)

**Smør**:
- Frisk lukt og smak
- Lagres kjølig, tåler også frysing`,
    },
    {
      id: 'restaurant-mat-vg1-1-tip-1',
      type: 'tip',
      title: 'FIFO-prinsippet',
      content: `FIFO står for "First In, First Out". Bruk alltid de eldste varene først. Merk dato på alt som åpnes, og organiser lageret slik at eldre varer står fremst.`,
    },
    {
      id: 'restaurant-mat-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan kjenner du igjen fersk fisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tegn på fersk fisk.',
            solution: 'Klare øyne, røde gjeller og frisk sjølukt',
            multipleChoiceOptions: [
              'Klare øyne, røde gjeller og frisk sjølukt',
              'Grå øyne, brune gjeller og sterk lukt',
              'Sunket øyne og slimet overflate',
              'Tørr overflate og blek farge',
            ],
          },
        ],
        solution: 'Fersk fisk har klare, bulede øyne, røde eller rosa gjeller, frisk sjølukt og fast kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr FIFO-prinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar FIFO-prinsippet.',
            solution: 'First In, First Out - bruk de eldste varene først',
            multipleChoiceOptions: [
              'First In, First Out - bruk de eldste varene først',
              'Fresh In, Fresh Out - kun ferske varer',
              'Fast In, Fast Out - rask håndtering',
              'Food In, Food Out - matavfall',
            ],
          },
        ],
        solution: 'FIFO står for First In, First Out, og betyr at du alltid skal bruke de eldste varene først for å unngå svinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken temperatur skal kjøleskap ha?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kjøleskapstemperatur.',
            solution: '+2 til +4°C',
            multipleChoiceOptions: [
              '+2 til +4°C',
              '+8 til +10°C',
              '0°C',
              '+5 til +8°C',
            ],
          },
        ],
        solution: 'Kjøleskap skal holde +2 til +4°C for å bevare matkvalitet og hindre bakterievekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er marmorering i kjøtt?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv marmorering.',
            solution: 'Fettinnslag i kjøttet som gir smak og saftighet',
            multipleChoiceOptions: [
              'Fettinnslag i kjøttet som gir smak og saftighet',
              'Tørt og seigt kjøtt',
              'Kjøtt uten fett',
              'Knokler i kjøttet',
            ],
          },
        ],
        solution: 'Marmorering er fettinnslag i musklene som gjør kjøttet saftigere og mer smaksrikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Liste tre sommergrønnsaker.',
        solution: 'Tomater, agurk og paprika (eller bær, squash, salat).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Hygiene og mattrygghet
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_2: TextbookChapter = {
  id: 'restaurant-mat-vg1-2',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '2',
  title: 'Hygiene og mattrygghet',
  description: 'Lær om personlig hygiene, trygg matbehandling og HACCP-systemet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'praktisere god personlig hygiene',
    'forstå smitteveier for matbårne sykdommer',
    'bruke HACCP-systemet',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-2-intro',
      type: 'text',
      content: `Hygiene og mattrygghet er avgjørende i restaurant- og matfag. Dårlig hygiene kan føre til matforgiftning og sykdom. Som kokk har du ansvar for at maten som serveres er trygg å spise.`,
    },
    {
      id: 'restaurant-mat-vg1-2-def-1',
      type: 'definition',
      title: 'HACCP',
      content: `HACCP står for Hazard Analysis and Critical Control Points. Det er et forebyggende system for å identifisere og kontrollere farer i matproduksjon.`,
    },
    {
      id: 'restaurant-mat-vg1-2-text-1',
      type: 'text',
      content: `**Personlig hygiene**

**Håndhygiene**:
- Vask hender med såpe i minst 20 sekunder
- Før du begynner å jobbe
- Etter toalettbesøk
- Etter å ha rørt råvarer
- Etter å ha rørt søppel
- Etter å ha nyse, hoste eller rørt ansiktet

**Arbeidstøy**:
- Rent kokkeklær hver dag
- Hårnettet eller kokkelue
- Ingen smykker (unntatt glatt vielsesring)
- Korte negler uten neglelakk
- Gode og rene sko

**Sykdom**:
- Jobb ikke om du er syk (feber, diare, oppkast)
- Dekk sår og kutt med plaster
- Meld fra til leder om sykdom`,
    },
    {
      id: 'restaurant-mat-vg1-2-text-2',
      type: 'text',
      content: `**Bakterier og smitteveier**

**Vanlige matbårne bakterier**:
- **Salmonella**: Egg, kjøtt, fjørfe
- **Campylobacter**: Fjørfe, upasteurisert melk
- **E. coli**: Kjøtt, grønnsaker
- **Listeria**: Ost, kjøttpålegg, ferdigmat

**Bakteriers vekstbetingelser**:
- Temperatur: 8-60°C (faresonen)
- Fuktighet: Bakterier trenger vann
- Tid: Dobler seg hvert 20. minutt ved 37°C
- Næring: Proteinrik mat

**Smitteveier**:
- Kryssmitte fra råvarer til ferdig mat
- Urene hender
- Skitne redskaper og overflater
- Skadedyr`,
    },
    {
      id: 'restaurant-mat-vg1-2-warning-1',
      type: 'warning',
      title: 'Faresonen',
      content: `Mellom +8°C og +60°C vokser bakterier raskt. Hold varm mat varm (over 60°C) og kald mat kald (under 4°C). Maten skal ikke være i faresonen mer enn 2 timer totalt.`,
    },
    {
      id: 'restaurant-mat-vg1-2-text-3',
      type: 'text',
      content: `**HACCP-systemet**

**De 7 HACCP-prinsippene**:
1. Identifiser farene
2. Bestem kritiske kontrollpunkter (CCP)
3. Fastsett grenseverdier
4. Etabler overvåkingsprosedyrer
5. Fastsett korrigerende tiltak
6. Verifiser systemet
7. Dokumenter alt

**Kritiske kontrollpunkter (CCP)**:
- Mottak av varer (temperatur, kvalitet)
- Lagring (temperatur)
- Tilberedning (kjernetemperatur)
- Nedkjøling (rask nedkjøling)
- Servering (holdetemperatur)`,
    },
    {
      id: 'restaurant-mat-vg1-2-text-4',
      type: 'text',
      content: `**Renhold i kjøkken**

**Daglig renhold**:
- Alle arbeidsflater
- Skjærebrett
- Kniver og redskaper
- Koketopp og ovn
- Gulv

**Ukentlig renhold**:
- Kjøleskap og fryser
- Hyller og skap
- Bak apparater
- Ventilasjon

**Riktig rengjøring**:
1. Fjern synlig skitt
2. Vask med varmt vann og såpe
3. Skyll godt
4. Desinfiser om nødvendig
5. Tørk eller lufttørk`,
    },
    {
      id: 'restaurant-mat-vg1-2-tip-1',
      type: 'tip',
      title: 'Fargekodet utstyr',
      content: `Bruk fargekodede skjærebrett og kniver: Rødt for kjøtt, blått for fisk, grønt for grønnsaker, gult for fjørfe, hvitt for bakevarer. Dette forhindrer kryssmitte.`,
    },
    {
      id: 'restaurant-mat-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HACCP for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av HACCP.',
            solution: 'Hazard Analysis and Critical Control Points',
            multipleChoiceOptions: [
              'Hazard Analysis and Critical Control Points',
              'Hygiene and Clean Cooking Process',
              'Health and Care Cooking Practice',
              'Hot and Cold Control Points',
            ],
          },
        ],
        solution: 'HACCP står for Hazard Analysis and Critical Control Points - et system for å kontrollere farer i matproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er faresonen for bakterievekst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig temperaturintervall.',
            solution: '+8°C til +60°C',
            multipleChoiceOptions: [
              '+8°C til +60°C',
              '0°C til +4°C',
              '+60°C til +80°C',
              '-18°C til 0°C',
            ],
          },
        ],
        solution: 'Faresonen er +8°C til +60°C, der bakterier vokser raskt. Hold mat utenfor denne sonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når skal du vaske hendene?',
        solution: 'Før arbeid, etter toalettbesøk, etter å ha rørt råvarer, etter søppelhåndtering, etter nysing/hosting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken farge har skjærebrett for fisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig farge for fisk.',
            solution: 'Blått',
            multipleChoiceOptions: [
              'Blått',
              'Rødt',
              'Grønt',
              'Gult',
            ],
          },
        ],
        solution: 'Blått skjærebrett brukes for fisk i fargekodingssystemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre matbårne bakterier.',
        solution: 'Salmonella, Campylobacter og Listeria (eller E. coli).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Grunnleggende matlagingsteknikker
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_3: TextbookChapter = {
  id: 'restaurant-mat-vg1-3',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '3',
  title: 'Grunnleggende matlagingsteknikker',
  description: 'Lær om koking, steking, baking og andre grunnleggende teknikker.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke ulike matlagingsteknikker',
    'velge riktig teknikk til ulike råvarer',
    'forstå varmeoverføring',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-3-intro',
      type: 'text',
      content: `Matlagingsteknikker handler om hvordan du bruker varme til å tilberede mat. Riktig teknikk gir best smak, konsistens og ernæringsverdi.`,
    },
    {
      id: 'restaurant-mat-vg1-3-def-1',
      type: 'definition',
      title: 'Varmeoverføring',
      content: `Varmeoverføring er prosessen der varme flytter seg fra en varmere til en kaldere gjenstand. I matlaging skjer dette gjennom konveksjon (væske/luft), konduksjon (kontakt) eller stråling.`,
    },
    {
      id: 'restaurant-mat-vg1-3-text-1',
      type: 'text',
      content: `**Koking i vann**

**Teknikker**:
- **Koke**: 100°C, rask bevegelse
- **Posjere**: 70-85°C, svak bevegelse
- **Smålkoke**: 85-95°C, små bobler
- **Blankokoke**: Koker raskt med lokk

**Bruksområder**:
- Pasta og ris: Koking
- Egg: Posjering eller koking
- Supper og gryteretter: Smålkoking
- Grønnsaker: Koking eller blankoking

**Tips**:
- Salt vannet for smak
- Bruk nok vann
- Hold riktig temperatur`,
    },
    {
      id: 'restaurant-mat-vg1-3-text-2',
      type: 'text',
      content: `**Steking**

**Steketeknikker**:
- **Sauté**: Rask steking på høy varme
- **Pan-fry**: Steking i panne med litt fett
- **Stir-fry**: Rask steking under omrøring (wok)
- **Grilling**: Direkte varme fra grill

**Temperaturkontroll**:
- Høy varme: Bruning og overflate
- Medium varme: Gjennomsteking
- Lav varme: Langsom tilberedning

**Når er kjøttet ferdig?**
- Rare: 48-52°C (råstekt)
- Medium rare: 52-57°C
- Medium: 57-63°C
- Medium well: 63-68°C
- Well done: 68°C+`,
    },
    {
      id: 'restaurant-mat-vg1-3-def-2',
      type: 'definition',
      title: 'Maillard-reaksjonen',
      content: `Maillard-reaksjonen er en kjemisk prosess mellom proteiner og sukker ved høy temperatur som gir mat brun farge og god smak.`,
    },
    {
      id: 'restaurant-mat-vg1-3-text-3',
      type: 'text',
      content: `**Baking og gratinering**

**Ovnstekking**:
- Tørr varme i ovn
- Brukes til kjøtt, fisk, grønnsaker
- Temperaturer: 150-250°C

**Gratinering**:
- Bruning av overflaten
- Ost, brødsmuler eller saus
- Høy varme eller grill

**Baking av bakevarer**:
- Brød: 200-220°C
- Kaker: 170-180°C
- Kjeks: 175-200°C`,
    },
    {
      id: 'restaurant-mat-vg1-3-text-4',
      type: 'text',
      content: `**Damping og sous vide**

**Damping**:
- Maten tilberedes av vanndamp
- Bevarer næringsstoffer og smak
- Grønnsaker, fisk, dumplings

**Sous vide**:
- Vakuumpakket mat i vannbad
- Presis temperaturkontroll
- Lang tilberedningstid
- Jevn gjennomsteking

**Fordeler**:
- Ingen uttørking
- Perfekt konsistens
- Bevarer næring`,
    },
    {
      id: 'restaurant-mat-vg1-3-tip-1',
      type: 'tip',
      title: 'Hviletid for kjøtt',
      content: `La kjøttet hvile 5-10 minutter etter steking. Da fordeler saften seg jevnt og kjøttet blir saftigere. Dekk med folie under hvile.`,
    },
    {
      id: 'restaurant-mat-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er posjering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av posjering.',
            solution: 'Koking ved 70-85°C med svak bevegelse',
            multipleChoiceOptions: [
              'Koking ved 70-85°C med svak bevegelse',
              'Koking ved 100°C',
              'Steking i panne',
              'Baking i ovn',
            ],
          },
        ],
        solution: 'Posjering er en skånsom koketeknikk ved 70-85°C, perfekt for egg og fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er Maillard-reaksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv Maillard-reaksjonen.',
            solution: 'Kjemisk reaksjon mellom proteiner og sukker som gir bruning og smak',
            multipleChoiceOptions: [
              'Kjemisk reaksjon mellom proteiner og sukker som gir bruning og smak',
              'Når kjøttet blir for tørt',
              'Når maten brenner',
              'Når grønnsakene blir myke',
            ],
          },
        ],
        solution: 'Maillard-reaksjonen skjer ved høy temperatur og gir mat brun farge og god smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken temperatur skal kjøttet ha for medium stekt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kjernetemperatur.',
            solution: '57-63°C',
            multipleChoiceOptions: [
              '57-63°C',
              '48-52°C',
              '68°C+',
              '100°C',
            ],
          },
        ],
        solution: 'Medium stekt kjøtt har kjernetemperatur på 57-63°C.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er sous vide?',
        solution: 'Vakuumpakket mat tilberedt i vannbad med presis temperaturkontroll over lang tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor skal kjøtt hvile etter steking?',
        solution: 'For at saften skal fordele seg jevnt i kjøttet og gjøre det saftigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Nevn tre måter å tilberede fisk på.',
        solution: 'Steking, damping og posjering (eller baking, grilling).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Bakst og desserter
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_4: TextbookChapter = {
  id: 'restaurant-mat-vg1-4',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '4',
  title: 'Bakst og desserter',
  description: 'Lær om ulike deigtyper, bakeprosessen og tilberedning av desserter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lage ulike typer deig',
    'forstå bakeprosessen',
    'tilberede desserter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-4-intro',
      type: 'text',
      content: `Bakst og desserter krever presisjon og forståelse for hvordan ingredienser reagerer sammen. Fra brød til kaker og søte avslutninger på måltidet.`,
    },
    {
      id: 'restaurant-mat-vg1-4-def-1',
      type: 'definition',
      title: 'Glutenstruktur',
      content: `Gluten er proteiner i hvetemel som danner et elastisk nettverk når mel blandes med væske og eltes. Dette gir deigen struktur og evne til å holde på gass.`,
    },
    {
      id: 'restaurant-mat-vg1-4-text-1',
      type: 'text',
      content: `**Deigtyper**

**Gjærdeig**:
- Mel, vann/melk, gjær, salt, fett, sukker
- Gjæren produserer CO₂ som får deigen til å heve
- Krev heving på varmt sted
- Brukes til brød, boller, pizza

**Smørdeig**:
- Mel, smør, egg, sukker
- Myk og smuldrete konsistens
- Brukes til paier, terte, kjeks
- Skal ikke eltes for mye

**Butterdeig**:
- Mange lag med smør og deig
- Gir sprø og luftig resultat
- Brukes til wienerbrød, croissanter
- Krever kjøling mellom bretninger`,
    },
    {
      id: 'restaurant-mat-vg1-4-text-2',
      type: 'text',
      content: `**Sukkerdeig og kaker**

**Sukkerdeig**:
- Smør og sukker røres luftig
- Egg tilsettes gradvis
- Mel vendes inn forsiktig
- Brukes til muffins, formkaker

**Wienerdeig (bløtkake)**:
- Egg og sukker piskes luftig
- Mel vendes forsiktig inn
- Ingen fett
- Lys og luftig tekstur

**Bakepulver og natron**:
- Kjemiske hevemidler
- Frigjør CO₂ ved varme
- Bakepulver: Både sur og basisk
- Natron: Trenger syre (f.eks. yoghurt)`,
    },
    {
      id: 'restaurant-mat-vg1-4-text-3',
      type: 'text',
      content: `**Desserter**

**Krem og mousse**:
- Vaniljekrem (crème pâtissière)
- Sjokolademousse
- Panna cotta
- Bavaroise

**Fruktdesserter**:
- Kompott
- Fruktgrøt
- Pai med bær
- Fruktsalat

**Frosne desserter**:
- Iskrem
- Sorbet
- Parfait
- Frossen yoghurt`,
    },
    {
      id: 'restaurant-mat-vg1-4-text-4',
      type: 'text',
      content: `**Teknikker i bakst**

**Elte**:
- Utvikler glutenstrukturen
- Gjør deigen elastisk
- Viktig for brød og pizza

**Vendes inn**:
- Forsiktig blanding
- Bevarer luftighet
- Brukes for muffins og bløtkaker

**Hviske/piske**:
- Tilsetter luft
- Egg, krem, smør
- Gir volum og letthet

**Strekke og brette**:
- Brukes for butterdeig
- Skaper lag
- Krever presisjon`,
    },
    {
      id: 'restaurant-mat-vg1-4-tip-1',
      type: 'tip',
      title: 'Romtempererte ingredienser',
      content: `Ha smør og egg i romtemperatur før baking. De blander seg bedre og gir jevnere konsistens.`,
    },
    {
      id: 'restaurant-mat-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er gluten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av gluten.',
            solution: 'Proteiner i mel som danner elastisk nettverk',
            multipleChoiceOptions: [
              'Proteiner i mel som danner elastisk nettverk',
              'Sukker i mel',
              'Fett i mel',
              'Fiber i mel',
            ],
          },
        ],
        solution: 'Gluten er proteiner i hvetemel som danner struktur når mel blandes med væske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken deigtype brukes til croissanter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig deigtype.',
            solution: 'Butterdeig',
            multipleChoiceOptions: [
              'Butterdeig',
              'Gjærdeig',
              'Smørdeig',
              'Wienerdeig',
            ],
          },
        ],
        solution: 'Croissanter lages av butterdeig med mange lag smør og deig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør gjær i deig?',
        solution: 'Gjær produserer CO₂ som får deigen til å heve og bli luftig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på bakepulver og natron?',
        solution: 'Bakepulver inneholder både syre og base, mens natron trenger tilsatt syre for å virke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre typer desserter.',
        solution: 'Vaniljekrem, sjokolademousse og iskrem (eller fruktpai, panna cotta, kompott).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Ernæring og kosthold
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_5: TextbookChapter = {
  id: 'restaurant-mat-vg1-5',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '5',
  title: 'Ernæring og kosthold',
  description: 'Lær om næringsstoffer, sunne matvaner og kostråd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til næringsstoffer og deres funksjoner',
    'planlegge sunne måltider',
    'forstå norske kostråd',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-5-intro',
      type: 'text',
      content: `Ernæring handler om hva kroppen trenger for å fungere optimalt. Som kokk er det viktig å forstå ernæring for å lage sunne og balanserte måltider.`,
    },
    {
      id: 'restaurant-mat-vg1-5-def-1',
      type: 'definition',
      title: 'Næringsstoffer',
      content: `Næringsstoffer er stoffer i mat som kroppen trenger for å vokse, reparere seg selv og produsere energi. Deles inn i makro- og mikronæringsstoffer.`,
    },
    {
      id: 'restaurant-mat-vg1-5-text-1',
      type: 'text',
      content: `**Makronæringsstoffer**

**Karbohydrater**:
- Kroppens viktigste energikilde
- 4 kcal per gram
- Finnes i brød, pasta, ris, poteter
- Fiber: Viktig for fordøyelsen

**Proteiner**:
- Bygger og reparerer vev
- 4 kcal per gram
- Kjøtt, fisk, egg, belgfrukter
- Essensielle aminosyrer

**Fett**:
- Energi og opptak av vitaminer
- 9 kcal per gram
- Umettede: Sunt (olje, nøtter, fisk)
- Mettede: Begrens (smør, rødt kjøtt)`,
    },
    {
      id: 'restaurant-mat-vg1-5-text-2',
      type: 'text',
      content: `**Mikronæringsstoffer**

**Vitaminer**:
- A: Syn, immunforsvar (gulrøtter, lever)
- B: Energiproduksjon (kjøtt, korn)
- C: Immunforsvar (frukt, grønnsaker)
- D: Bein (fisk, melk, sol)
- E: Antioxidant (nøtter, olje)
- K: Blodkoagulasjon (bladgrønt)

**Mineraler**:
- Kalsium: Bein og tenner (melk, ost)
- Jern: Blodproduksjon (kjøtt, belgfrukter)
- Natrium: Væskebalanse (salt)
- Kalium: Muskelfunksjon (frukt, grønnsaker)`,
    },
    {
      id: 'restaurant-mat-vg1-5-text-3',
      type: 'text',
      content: `**Norske kostråd**

**Helsedirektoratets anbefalinger**:
1. Spis variert
2. Mer frukt, grønt og bær
3. Velg grove kornprodukter
4. Spis fisk ofte
5. Velg magre meieriprodukter
6. Begrens rødt kjøtt
7. Velg usaltede nøtter
8. Velg myke fettstoffer
9. Begrens salt
10. Begrens sukker
11. Drikk vann som tørstedrikk`,
    },
    {
      id: 'restaurant-mat-vg1-5-text-4',
      type: 'text',
      content: `**Tallerkennmodellen**

**Hvordan fylle tallerkenen**:
- 1/2 grønnsaker (både rå og kokte)
- 1/4 karbohydrater (poteter, ris, pasta, brød)
- 1/4 protein (kjøtt, fisk, egg, belgfrukter)
- Et glass melk eller vann
- Frukt til dessert

**Fordeler**:
- Enkel å følge
- Balansert næring
- Mettende
- Variert`,
    },
    {
      id: 'restaurant-mat-vg1-5-tip-1',
      type: 'tip',
      title: 'Fem om dagen',
      content: `Spis minst fem porsjoner frukt, grønt og bær hver dag. En porsjon er ca. 100 gram (en håndfull). Dette gir fiber, vitaminer og antioksidanter.`,
    },
    {
      id: 'restaurant-mat-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange kcal er det i ett gram fett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig energiinnhold.',
            solution: '9 kcal',
            multipleChoiceOptions: [
              '9 kcal',
              '4 kcal',
              '7 kcal',
              '2 kcal',
            ],
          },
        ],
        solution: 'Fett gir 9 kcal per gram, mer enn karbohydrater og proteiner (4 kcal).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tallerkennmodellen?',
        solution: 'En modell der tallerkenen deles i 1/2 grønnsaker, 1/4 karbohydrater og 1/4 protein for balansert måltid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket vitamin er viktig for syn?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig vitamin.',
            solution: 'Vitamin A',
            multipleChoiceOptions: [
              'Vitamin A',
              'Vitamin C',
              'Vitamin D',
              'Vitamin K',
            ],
          },
        ],
        solution: 'Vitamin A er viktig for syn og finnes i gulrøtter og lever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre matvarer med mye protein.',
        solution: 'Kjøtt, fisk og egg (eller belgfrukter, ost, kylling).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva betyr "fem om dagen"?',
        solution: 'Spis minst fem porsjoner frukt, grønt og bær hver dag (ca. 500 gram totalt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Menyplanlegging
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_6: TextbookChapter = {
  id: 'restaurant-mat-vg1-6',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '6',
  title: 'Menyplanlegging',
  description: 'Lær å planlegge og komponere menyer med fokus på variasjon og sesong.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge varierte menyer',
    'ta hensyn til sesong og råvaretilgang',
    'kalkulere kostnader',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-6-intro',
      type: 'text',
      content: `Menyplanlegging handler om å komponere måltider som er smakfulle, balanserte og økonomisk lønnsomme. En god meny tar hensyn til sesong, kundegrunnlag og kjøkkenets kapasitet.`,
    },
    {
      id: 'restaurant-mat-vg1-6-def-1',
      type: 'definition',
      title: 'À la carte',
      content: `À la carte betyr at gjesten velger retter individuelt fra menyen. Dette i motsetning til fast meny hvor alle får samme retter.`,
    },
    {
      id: 'restaurant-mat-vg1-6-text-1',
      type: 'text',
      content: `**Menytyper**

**À la carte**:
- Gjesten velger fritt fra menyen
- Fleksibelt for kunden
- Krever godt lager og erfarne kokker

**Fast meny**:
- Alle får samme retter
- Enklere produksjon
- Bedre kostnadskontroll

**Dagens meny**:
- Skifter daglig
- Basert på tilgjengelige råvarer
- Reduserer svinn

**Buffet**:
- Mange retter samtidig
- Selvbetjening
- God til store grupper`,
    },
    {
      id: 'restaurant-mat-vg1-6-text-2',
      type: 'text',
      content: `**Menykonstruksjon**

**Tradisjonell oppbygning**:
1. Forrett
2. Suppe
3. Fisk
4. Hovedrett (kjøtt)
5. Dessert

**Moderne oppbygning**:
- Smaker og smaker (tapas-stil)
- Deling av retter
- Vegetariske alternativer
- Smakeretter/tasting menu

**Prinsipper for sammensetning**:
- Variasjon i smak
- Ulike teksturer
- Fargekontrast
- Balanse mellom lett og tungt`,
    },
    {
      id: 'restaurant-mat-vg1-6-text-3',
      type: 'text',
      content: `**Sesongmeny og bærekraft**

**Vårsesong**:
- Asparges, vårløk, reddiker
- Lam, kalv
- Friske urter

**Sommersesong**:
- Tomater, paprika, agurk
- Bær og steinfrukter
- Grillet mat

**Høstsesong**:
- Sopp, kål, rotfrukter
- Viltkjøtt, kjøtt
- Epler, pærer

**Vintersesong**:
- Kålrot, pastinakk, løk
- Lagringsgrønnsaker
- Tunge gryteretter`,
    },
    {
      id: 'restaurant-mat-vg1-6-text-4',
      type: 'text',
      content: `**Kostnadskontroll**

**Kalkulasjon**:
- Varekostnad (foodcost): 25-35% av pris
- Beregn kostnad per porsjon
- Inkluder alle ingredienser
- Sett salgspris med fortjenestemargin

**Eksempel**:
- Råvarekostnad: 50 kr
- Ønsket foodcost: 30%
- Salgspris: 50 kr / 0,30 = 167 kr

**Redusere svinn**:
- Bruk FIFO
- Resteutnyttelse
- Riktige porsjoner
- God lagerføring`,
    },
    {
      id: 'restaurant-mat-vg1-6-tip-1',
      type: 'tip',
      title: 'Menybalanse',
      content: `Har menyen flere tunge retter (fløtesaus, stekt), balanser med lettere tilbehør (salat, dampet). Unngå at alt er brunt eller alt er gratinert.`,
    },
    {
      id: 'restaurant-mat-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr à la carte?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Gjesten velger retter individuelt fra menyen',
            multipleChoiceOptions: [
              'Gjesten velger retter individuelt fra menyen',
              'Fast meny for alle',
              'Buffet',
              'Dagens meny',
            ],
          },
        ],
        solution: 'À la carte betyr at gjesten velger retter fritt fra menyen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en typisk foodcost-prosent?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg vanlig foodcost.',
            solution: '25-35%',
            multipleChoiceOptions: [
              '25-35%',
              '50-60%',
              '10-15%',
              '70-80%',
            ],
          },
        ],
        solution: 'Foodcost (varekostnad) er vanligvis mellom 25-35% av salgsprisen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre vårgrønnsaker.',
        solution: 'Asparges, vårløk og reddiker (eller rabarbra, erter, salat).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan redusere matsvinn i kjøkkenet?',
        solution: 'Bruk FIFO, utnytt rester, porsjonskontroll og god lagerføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Servering og vertskap
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_7: TextbookChapter = {
  id: 'restaurant-mat-vg1-7',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '7',
  title: 'Servering og vertskap',
  description: 'Lær om kundeservice, bordservering og profesjonelt vertskap.',
  estimatedMinutes: 50,
  competenceGoals: [
    'praktisere god kundeservice',
    'dekke bord etter regler',
    'servere mat profesjonelt',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-7-intro',
      type: 'text',
      content: `God servering og vertskap handler om å skape en positiv opplevelse for gjestene. Fra borddekning til kommunikasjon og service er alle detaljer viktige.`,
    },
    {
      id: 'restaurant-mat-vg1-7-def-1',
      type: 'definition',
      title: 'Mise en place',
      content: `Mise en place er et fransk uttrykk som betyr "alt på plass". I restaurantsammenheng betyr det at alle forberedelser er gjort før service begynner.`,
    },
    {
      id: 'restaurant-mat-vg1-7-text-1',
      type: 'text',
      content: `**Kundeservice**

**God service**:
- Vær vennlig og positiv
- Møt gjesten med smil
- Lytt aktivt
- Vær oppmerksom uten å være påtrengende
- Vis respekt

**Kommunikasjon**:
- Tydelig og klar stemme
- Profesjonelt kroppsspråk
- Øyekontakt
- Presenter deg selv og restauranten

**Håndtering av klager**:
- Lytt til gjesten
- Vis forståelse
- Løs problemet raskt
- Involver leder om nødvendig`,
    },
    {
      id: 'restaurant-mat-vg1-7-text-2',
      type: 'text',
      content: `**Borddekning**

**Grunnleggende dekning**:
- Tallerken i midten
- Gaffel til venstre
- Kniv til høyre (egg mot tallerkenen)
- Skje til høyre for kniven
- Dessertbestikk over tallerkenen
- Glass over kniven

**Formell dekning**:
- Bestikk brukes utenfra og inn
- Flere glass (vann, hvitvin, rødvin)
- Brødtallerken til venstre
- Serviett på tallerken eller til venstre

**Duking**:
- Rent og strøket tøy
- Jevne avstander
- Symmetrisk plassering
- Blomster eller pynt`,
    },
    {
      id: 'restaurant-mat-vg1-7-text-3',
      type: 'text',
      content: `**Serveringsteknikker**

**Servering fra høyre/venstre**:
- Mat serveres fra høyre
- Drikke serveres fra høyre
- Ryddes fra venstre
- Bruk høyre hånd

**Tallerkenbærerteknikk**:
- Bær maks 3-4 tallerkener
- Bruk albue og underarm
- Aldri berør maten
- Stabil håndtering

**Vinservering**:
1. Vis etiketten
2. Skjenk smaksprøve
3. Vent på godkjenning
4. Skjenk til alle
5. Fyll ikke mer enn 1/3`,
    },
    {
      id: 'restaurant-mat-vg1-7-text-4',
      type: 'text',
      content: `**Profesjonalitet**

**Arbeidsklær**:
- Rent og strøket
- Svarte eller mørke bukser
- Hvit skjorte eller serveringsuniform
- Rene sko
- Pent hår

**Atferd**:
- Punktlighet
- Samarbeid med kollegaer
- Ingen privattelefon under service
- Hold arbeidsområdet ryddig
- Vær løsningsorientert`,
    },
    {
      id: 'restaurant-mat-vg1-7-tip-1',
      type: 'tip',
      title: 'Romme bordet',
      content: `Romme bordet betyr å rydde unna brukte tallerkener og bestikk mellom rettene. Dette gjøres alltid før neste rett serveres.`,
    },
    {
      id: 'restaurant-mat-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr mise en place?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Alt på plass - forberedelser før service',
            multipleChoiceOptions: [
              'Alt på plass - forberedelser før service',
              'Navnet på en rett',
              'En type servering',
              'En koketeknikk',
            ],
          },
        ],
        solution: 'Mise en place betyr at alle forberedelser er gjort før service starter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor plasseres kniven ved borddekning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig plassering.',
            solution: 'Til høyre for tallerkenen med eggen mot tallerkenen',
            multipleChoiceOptions: [
              'Til høyre for tallerkenen med eggen mot tallerkenen',
              'Til venstre for tallerkenen',
              'Over tallerkenen',
              'Under tallerkenen',
            ],
          },
        ],
        solution: 'Kniven plasseres til høyre for tallerkenen med bladet/eggen mot tallerkenen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Fra hvilken side serveres mat?',
        solution: 'Mat serveres fra høyre side.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan håndtere en klage fra gjest?',
        solution: 'Lytt til gjesten, vis forståelse, løs problemet raskt og involver leder om nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er viktig i god kundeservice?',
        solution: 'Vennlighet, oppmerksomhet, profesjonalitet, god kommunikasjon og respekt for gjesten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Norsk matkultur og tradisjoner
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_8: TextbookChapter = {
  id: 'restaurant-mat-vg1-8',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '8',
  title: 'Norsk matkultur og tradisjoner',
  description: 'Lær om tradisjonelle norske retter og mattradisjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til norsk matkultur',
    'lage tradisjonelle norske retter',
    'forstå sammenheng mellom geografi og mattradisjoner',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-8-intro',
      type: 'text',
      content: `Norsk matkultur er preget av landets geografi med fjorder, fjell og lang kystlinje. Tradisjonene stammer fra et liv nært naturen og behovet for å konservere mat gjennom lange vintre.`,
    },
    {
      id: 'restaurant-mat-vg1-8-def-1',
      type: 'definition',
      title: 'Husmannskost',
      content: `Husmannskost er enkel, tradisjonell norsk mat laget av lokale råvarer. Typisk kraftig og næringsrik mat som metter etter hardt fysisk arbeid.`,
    },
    {
      id: 'restaurant-mat-vg1-8-text-1',
      type: 'text',
      content: `**Tradisjonelle norske retter**

**Kjøttretter**:
- Fårikål (lam, kål, pepper, salt)
- Lapskaus (kjøtt, rotgrønnsaker)
- Kjøttkaker med brun saus
- Smalahove (sau-hode)
- Pinnekjøtt (saltet lammeribbe)

**Fiskeretter**:
- Lutefisk (tørrfisk behandlet med lut)
- Klippfisk (saltet og tørket torsk)
- Rakfisk (fermentert fisk)
- Fiskesupper (bergensk, nordnorsk)

**Poteter**:
- Viktig del av norsk kosthold
- Kokt, stekt, mos
- Potetlefse, potetkake`,
    },
    {
      id: 'restaurant-mat-vg1-8-text-2',
      type: 'text',
      content: `**Konservering og foredling**

**Tørking**:
- Tørrfisk (clipfish)
- Fenalår (tørket lammekjøtt)
- Biltong og spekemat

**Salting og røyking**:
- Rakfisk
- Røkt laks
- Spekesild

**Sylting og fermentering**:
- Surkål
- Syltet agurk
- Gravet laks

**Hvorfor konservere?**
- Lange vintre
- Ingen kjøleskap
- Bevare høstens avling`,
    },
    {
      id: 'restaurant-mat-vg1-8-text-3',
      type: 'text',
      content: `**Regionale forskjeller**

**Kysten**:
- Fisk og sjømat
- Klippfisk, tørrfisk
- Fiskesupper

**Innlandet**:
- Kjøtt, melk, ost
- Rømmegrøt, prim
- Villkjøtt

**Nord-Norge**:
- Tørrfisk, steinbit
- Rein og sau
- Bær (molter)

**Vestlandet**:
- Fisk, sau
- Geitost, kvitost
- Fenalår`,
    },
    {
      id: 'restaurant-mat-vg1-8-text-4',
      type: 'text',
      content: `**Høytider og mattradisjoner**

**Jul**:
- Ribbe eller pinnekjøtt
- Lutefisk
- Julebakst (syv slag)

**Påske**:
- Lam
- Påskeegg
- Kvikk lunsj

**17. mai**:
- Pølser og is
- Bløtkake
- Rømmekolle

**Høstfester**:
- Fårikål
- Høstmat
- Slakt`,
    },
    {
      id: 'restaurant-mat-vg1-8-tip-1',
      type: 'tip',
      title: 'Ny nordisk mat',
      content: `Ny nordisk mat-bevegelsen fokuserer på å bruke lokale, sesongbaserte råvarer på moderne måter. Dette revitaliserer norsk matkultur.`,
    },
    {
      id: 'restaurant-mat-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er husmannskost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Enkel, tradisjonell norsk mat laget av lokale råvarer',
            multipleChoiceOptions: [
              'Enkel, tradisjonell norsk mat laget av lokale råvarer',
              'Gourmetmat fra Frankrike',
              'Ferdigmat fra butikken',
              'Vegetarisk mat',
            ],
          },
        ],
        solution: 'Husmannskost er tradisjonell, enkel norsk mat basert på lokale råvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er fårikål?',
        solution: 'Tradisjonell norsk rett av lammekjøtt, kål, pepper og salt kokt sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre konserveringsmetoder brukt i Norge.',
        solution: 'Tørking, salting og røyking (eller sylting, fermentering).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken mat er typisk for Nord-Norge?',
        solution: 'Tørrfisk, rein, sau og molter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Internasjonal mat
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_9: TextbookChapter = {
  id: 'restaurant-mat-vg1-9',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '9',
  title: 'Internasjonal mat',
  description: 'Lær om retter og mattradisjoner fra ulike kulturer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til ulike verdens kjøkken',
    'lage internasjonale retter',
    'forstå kulturell betydning av mat',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-9-intro',
      type: 'text',
      content: `Verden har et enormt mangfold av mattradisjoner. Ved å lære om ulike kjøkken får vi forståelse for andre kulturer og utvidet smakspalett.`,
    },
    {
      id: 'restaurant-mat-vg1-9-def-1',
      type: 'definition',
      title: 'Fusion-kjøkken',
      content: `Fusion-kjøkken kombinerer elementer fra ulike kulinariske tradisjoner til nye retter. For eksempel asiatisk-europeiske kombinasjoner.`,
    },
    {
      id: 'restaurant-mat-vg1-9-text-1',
      type: 'text',
      content: `**Europeisk kjøkken**

**Fransk kjøkken**:
- Grunnlaget for vestlig kokekunst
- Saus og teknikker
- Coq au vin, bouillabaisse, crème brûlée

**Italiensk kjøkken**:
- Pasta, pizza, risotto
- Ferske ingredienser
- Regionalt mangfold

**Spansk kjøkken**:
- Tapas (små retter)
- Paella, gazpacho
- Oliverolje og sjømat

**Gresk kjøkken**:
- Moussaka, souvlaki
- Feta, oliven
- Middelhavsdiett`,
    },
    {
      id: 'restaurant-mat-vg1-9-text-2',
      type: 'text',
      content: `**Asiatisk kjøkken**

**Kinesisk kjøkken**:
- Wok-retter
- Ris og nudler
- Søt-sur smak
- Dim sum, stir-fry

**Japansk kjøkken**:
- Sushi, sashimi
- Ramen, tempura
- Umami-smak
- Presisjon og estetikk

**Thailandsk kjøkken**:
- Sterk, sur, søt, salt
- Karri, pad thai
- Kokosmjølk og sitrongress

**Indisk kjøkken**:
- Krydder og karri
- Vegetarisk fokus
- Naan, tandoori, biryani`,
    },
    {
      id: 'restaurant-mat-vg1-9-text-3',
      type: 'text',
      content: `**Amerikansk og latinamerikansk kjøkken**

**USA**:
- Burgere, BBQ, steaks
- Tex-Mex
- Soul food, Cajun

**Mexico**:
- Tacos, burritos, enchiladas
- Mais, bønner, chili
- Mole, guacamole

**Peru**:
- Ceviche
- Quinoa
- Poteter (opprinnelse)

**Brasil**:
- Feijoada (bønnegryte)
- Churrasco (grill)
- Acai`,
    },
    {
      id: 'restaurant-mat-vg1-9-text-4',
      type: 'text',
      content: `**Midt-Østen og Afrika**

**Tyrkisk kjøkken**:
- Kebab, meze
- Baklava
- Yoghurt

**Libanesisk kjøkken**:
- Hummus, falafel
- Tabbouleh
- Grillmat

**Marokkansk kjøkken**:
- Tagine
- Couscous
- Krydder som safran og kanel

**Etiopisk kjøkken**:
- Injera (brød)
- Wot (gryteretter)
- Deling av mat`,
    },
    {
      id: 'restaurant-mat-vg1-9-tip-1',
      type: 'tip',
      title: 'Respekt for kultur',
      content: `Når du lager mat fra andre kulturer, respekter originaloppskriften og forstå kulturell kontekst. Tilpass smak, men hold deg til essensen.`,
    },
    {
      id: 'restaurant-mat-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fusion-kjøkken?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Kombinasjon av elementer fra ulike kulinariske tradisjoner',
            multipleChoiceOptions: [
              'Kombinasjon av elementer fra ulike kulinariske tradisjoner',
              'Kun fransk mat',
              'Ferdigmat',
              'Vegetarisk mat',
            ],
          },
        ],
        solution: 'Fusion-kjøkken kombinerer teknikker og ingredienser fra ulike mattradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken rett er typisk japansk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg japansk rett.',
            solution: 'Sushi',
            multipleChoiceOptions: [
              'Sushi',
              'Paella',
              'Tacos',
              'Hummus',
            ],
          },
        ],
        solution: 'Sushi er en typisk japansk rett med ris og rå fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tapas?',
        solution: 'Spanske små retter som serveres som forretter eller til deling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre hovedingredienser i mexicansk mat.',
        solution: 'Mais, bønner og chili.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er umami?',
        solution: 'Den femte grunnsmaken (ved siden av søtt, surt, salt, bittert), kjent fra japansk mat. Smaken av protein/kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Allergener og spesialkost
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_10: TextbookChapter = {
  id: 'restaurant-mat-vg1-10',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '10',
  title: 'Allergener og spesialkost',
  description: 'Lær om matvareallergier, intoleranser og spesielle kostbehov.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til vanlige allergener',
    'håndtere spesialkost trygt',
    'forstå merking og informasjonsplikt',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-10-intro',
      type: 'text',
      content: `Som kokk må du kjenne til allergener og kunne tilberede mat for personer med spesielle kostbehov. Dette er både en helsemessig og juridisk forpliktelse.`,
    },
    {
      id: 'restaurant-mat-vg1-10-def-1',
      type: 'definition',
      title: 'Matallergi',
      content: `Matallergi er en immunreaksjon på et protein i maten. Kan variere fra mild til livstruende (anafylaksi). Må tas på alvor.`,
    },
    {
      id: 'restaurant-mat-vg1-10-text-1',
      type: 'text',
      content: `**De 14 hovedallergenene**

**1. Glutenholdige kornslag**:
- Hvete, rug, bygg, havre
- Finnes i brød, pasta, kaker

**2. Skalldyr**:
- Reker, krabbe, hummer
- Også i buljong og saus

**3. Egg**:
- Egg og eggprodukter
- I bakevarer, majones, dressing

**4. Fisk**:
- All fisk
- Også i fiskesaus og kaviar

**5. Peanøtter**:
- Nøtter fra bakken
- I snacks, desserter, saus

**6. Soya**:
- Soyabønner
- I tofu, soyasaus, mange ferdigvarer

**7. Melk**:
- Kumelk og produkter
- Ost, smør, fløte, yoghurt`,
    },
    {
      id: 'restaurant-mat-vg1-10-text-2',
      type: 'text',
      content: `**De 14 hovedallergenene (fortsetter)**

**8. Nøtter**:
- Mandler, hasselnøtter, valnøtter osv.
- I kaker, müsli, pesto

**9. Selleri**:
- Rot og blader
- I supper, buljong, salater

**10. Sennep**:
- Sennepsfrø og produkter
- I dressing, marinader

**11. Sesamfrø**:
- Sesamfrø og olje
- På brød, i tahini, hummus

**12. Svoveldioksid og sulfitt**:
- Konserveringsmiddel
- I tørket frukt, vin

**13. Lupin**:
- Belgfrukt
- I brød og bakevarer

**14. Bløtdyr**:
- Blekksprut, blåskjell, østers
- I sjømatprodukter`,
    },
    {
      id: 'restaurant-mat-vg1-10-warning-1',
      type: 'warning',
      title: 'Anafylaksi',
      content: `Anafylaksi er en alvorlig, livstruende allergisk reaksjon. Symptomer: Pusteproblemer, hevelser, blodtrykksfall. Ring 113 umiddelbart og bruk EpiPen om tilgjengelig.`,
    },
    {
      id: 'restaurant-mat-vg1-10-text-3',
      type: 'text',
      content: `**Intoleranse vs allergi**

**Matallergi**:
- Immunreaksjon
- Små mengder kan utløse reaksjon
- Kan være livstruende
- Må unngå helt

**Matintoleranse**:
- Fordøyelsesproblem
- Ikke immunreaksjon
- Mengdeavhengig
- Ubehagelig, men ikke livstruende

**Vanlige intoleranser**:
- Laktose (melkesukker)
- Fruktose (fruktsukker)
- Histamin
- Gluten (cøliaki er autoimmun)`,
    },
    {
      id: 'restaurant-mat-vg1-10-text-4',
      type: 'text',
      content: `**Spesialkost og livsstil**

**Vegetar**:
- Ingen kjøtt eller fisk
- Spiser egg og meieriprodukter
- Trenger protein fra planter

**Veganer**:
- Ingen animalske produkter
- Heller ikke honning
- B12-tilskudd anbefales

**Halal**:
- Muslimsk kosthold
- Ikke svin
- Slaktet etter islamske regler

**Kosher**:
- Jødisk kosthold
- Ikke svin eller skalldyr
- Ikke blande melk og kjøtt

**Glutenfri**:
- For cøliakere
- Streng glutenfrihet
- Egen produksjonslinje`,
    },
    {
      id: 'restaurant-mat-vg1-10-tip-1',
      type: 'tip',
      title: 'Kryssmitte av allergener',
      content: `Bruk alltid egne skjærebrett, kniver og kar ved tilberedning av allergenmat. Selv små spor kan utløse reaksjon hos allergikere.`,
    },
    {
      id: 'restaurant-mat-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på allergi og intoleranse?',
        solution: 'Allergi er immunreaksjon som kan være livstruende, mens intoleranse er fordøyelsesproblem som er ubehagelig men ikke farlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem av de 14 hovedallergenene.',
        solution: 'Gluten, melk, egg, nøtter og fisk (eller skalldyr, soya, selleri, sennep osv.).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er anafylaksi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Alvorlig, livstruende allergisk reaksjon',
            multipleChoiceOptions: [
              'Alvorlig, livstruende allergisk reaksjon',
              'Mild magesmerter',
              'Hodepine',
              'Utslett',
            ],
          },
        ],
        solution: 'Anafylaksi er en alvorlig, livstruende allergisk reaksjon som krever akutt medisinsk hjelp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på vegetar og veganer?',
        solution: 'Vegetar spiser egg og melkeprodukter, mens veganer ikke spiser noen animalske produkter i det hele tatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11: Bærekraftig matproduksjon
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_11: TextbookChapter = {
  id: 'restaurant-mat-vg1-11',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '11',
  title: 'Bærekraftig matproduksjon',
  description: 'Lær om miljøvennlig matproduksjon og reduksjon av matsvinn.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå bærekraftig matproduksjon',
    'redusere matsvinn',
    'velge miljøvennlige råvarer',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-11-intro',
      type: 'text',
      content: `Bærekraftig matproduksjon handler om å produsere mat på en måte som ivaretar miljø, økonomi og samfunn for framtidige generasjoner.`,
    },
    {
      id: 'restaurant-mat-vg1-11-def-1',
      type: 'definition',
      title: 'Bærekraft',
      content: `Bærekraft betyr at vi dekker dagens behov uten å ødelegge for framtidige generasjoner. I matproduksjon innebærer det miljøvennlige metoder, etisk dyrehold og rettferdig handel.`,
    },
    {
      id: 'restaurant-mat-vg1-11-text-1',
      type: 'text',
      content: `**Miljøutfordringer i matproduksjon**

**Klimagassutslipp**:
- Kjøttproduksjon største bidragsyter
- Transport av mat
- Energibruk i produksjon
- Metangass fra husdyr

**Ressursbruk**:
- Vannforbruk i landbruk
- Overbeskatning av fiskebestander
- Avskoging for landbruk
- Bruk av kunstgjødsel

**Matsvinn**:
- 30-40% av maten kastes
- Svinn i hele verdikjeden
- Enorm ressurssløsing`,
    },
    {
      id: 'restaurant-mat-vg1-11-text-2',
      type: 'text',
      content: `**Bærekraftige valg**

**Råvarer**:
- Sesongbaserte råvarer
- Lokalt produsert mat
- Økologisk produksjon
- MSC-merket fisk (bærekraftig)

**Proteinkilder**:
- Mer planteprotein
- Mindre rødt kjøtt
- Bærekraftig fisk
- Belgfrukter og nøtter

**Produksjon**:
- Økologisk landbruk
- Regenerativt jordbruk
- Rettferdig handel (Fairtrade)
- Dyrevelferd`,
    },
    {
      id: 'restaurant-mat-vg1-11-text-3',
      type: 'text',
      content: `**Redusere matsvinn**

**I kjøkkenet**:
- FIFO-prinsippet
- Bruk hele råvaren (nose to tail)
- Resteutnyttelse
- Riktige porsjoner
- God lagerføring

**Kreativ bruk av rester**:
- Grønnsaksskrell til buljong
- Gammel brød til brødkrutonger
- Overmoden frukt til kompott
- Ben til kraftig fond

**Kompostering**:
- Organisk avfall til jord
- Reduserer avfallsmengde
- Gir næring tilbake`,
    },
    {
      id: 'restaurant-mat-vg1-11-text-4',
      type: 'text',
      content: `**Miljømerking**

**Viktige merker**:
- **Nøkkelhullet**: Sunnere valg
- **Øko**: Økologisk produksjon
- **Fairtrade**: Rettferdig handel
- **MSC**: Bærekraftig fisk
- **Svanemerket**: Miljøvennlig
- **Debio**: Norsk økologisk

**Hva merkene garanterer**:
- Sporbarhet
- Kontroll
- Standarder
- Dokumentasjon`,
    },
    {
      id: 'restaurant-mat-vg1-11-tip-1',
      type: 'tip',
      title: 'Kortreist mat',
      content: `Velg råvarer produsert nært deg. Kortreist mat reduserer transportutslipp og støtter lokale produsenter. Spør leverandøren hvor maten kommer fra.`,
    },
    {
      id: 'restaurant-mat-vg1-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-11-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr bærekraft?',
        solution: 'Å dekke dagens behov uten å ødelegge for framtidige generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-11-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr MSC-merket på fisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Bærekraftig fisket fisk',
            multipleChoiceOptions: [
              'Bærekraftig fisket fisk',
              'Billig fisk',
              'Frossen fisk',
              'Oppdrettsfisk',
            ],
          },
        ],
        solution: 'MSC (Marine Stewardship Council) garanterer bærekraftig fiske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-11-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre måter å redusere matsvinn på.',
        solution: 'FIFO-prinsippet, resteutnyttelse og riktige porsjoner (eller kompostering, god lagring).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-11-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er lokalt produsert mat mer bærekraftig?',
        solution: 'Reduserer transportutslipp, støtter lokale produsenter og gir ferske råvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12: Økonomi og drift
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_12: TextbookChapter = {
  id: 'restaurant-mat-vg1-12',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '12',
  title: 'Økonomi og drift',
  description: 'Lær om kalkulasjon, prising og lønnsomhet i restaurant.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kalkulere kostnad per porsjon',
    'sette salgspris',
    'forstå lønnsomhet',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-12-intro',
      type: 'text',
      content: `Økonomisk forståelse er viktig for å drive en lønnsom restaurant. Du må kunne kalkulere kostnader, sette priser og forstå hva som påvirker lønnsomheten.`,
    },
    {
      id: 'restaurant-mat-vg1-12-def-1',
      type: 'definition',
      title: 'Foodcost',
      content: `Foodcost (varekostnad) er prisen på råvarene som går med til å lage en rett, uttrykt som prosent av salgsprisen. Typisk 25-35%.`,
    },
    {
      id: 'restaurant-mat-vg1-12-text-1',
      type: 'text',
      content: `**Kostnadskalkyle**

**Beregne varekostnad**:
1. Liste alle ingredienser
2. Finn pris per enhet
3. Beregn mengde per porsjon
4. Summer opp total kostnad

**Eksempel - Pasta carbonara**:
- Pasta (100g): 3 kr
- Bacon (50g): 8 kr
- Egg (1 stk): 4 kr
- Parmesan (30g): 12 kr
- Fløte (50ml): 4 kr
- **Total**: 31 kr

**Foodcost-prosent**:
Foodcost% = (Varekostnad / Salgspris) × 100`,
    },
    {
      id: 'restaurant-mat-vg1-12-text-2',
      type: 'text',
      content: `**Prissetting**

**Beregne salgspris**:
Salgspris = Varekostnad / Ønsket foodcost%

**Eksempel**:
- Varekostnad: 31 kr
- Ønsket foodcost: 30%
- Salgspris: 31 kr / 0,30 = 103 kr
- Rund av til: 105-110 kr

**Faktorer som påvirker pris**:
- Råvarekostnad
- Konkurransesituasjon
- Målgruppe
- Lokalisering
- Konsept og service`,
    },
    {
      id: 'restaurant-mat-vg1-12-text-3',
      type: 'text',
      content: `**Kostnadstyper**

**Variable kostnader**:
- Råvarer
- Emballasje
- Servicepersonell (per gjest)
- Varer som øker med salg

**Faste kostnader**:
- Husleie
- Fast lønn
- Forsikring
- Lisenser
- Kostnader uavhengig av salg

**Dekningsbidrag**:
Dekningsbidrag = Salgspris - Variable kostnader
Dette må dekke faste kostnader og gi fortjeneste`,
    },
    {
      id: 'restaurant-mat-vg1-12-text-4',
      type: 'text',
      content: `**Lønnsomhet**

**Nøkkeltall**:
- **Omsetning**: Total inntekt
- **Bruttofortjeneste**: Omsetning - varekostnad
- **Driftsresultat**: Bruttofortjeneste - driftskostnader
- **Overskudd**: Det som blir igjen

**Break-even**:
Punktet der inntekter = kostnader
Ingen fortjeneste, men heller ikke tap

**Øke lønnsomhet**:
- Øk omsetning
- Reduser foodcost
- Effektiviser drift
- Reduser svinn
- Gjennomtenkt meny`,
    },
    {
      id: 'restaurant-mat-vg1-12-tip-1',
      type: 'tip',
      title: 'Bidragskalkyle',
      content: `Noen retter har høy fortjenestemargin (salat, pasta), andre lavere (biff, sjømat). Balanser menyen slik at populære retter med god margin kompenserer for dyrere retter.`,
    },
    {
      id: 'restaurant-mat-vg1-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-12-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er foodcost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Varekostnad i prosent av salgspris',
            multipleChoiceOptions: [
              'Varekostnad i prosent av salgspris',
              'Totale kostnader',
              'Lønn til ansatte',
              'Husleie',
            ],
          },
        ],
        solution: 'Foodcost er varekostnad (råvarepris) i prosent av salgsprisen, vanligvis 25-35%.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-12-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beregn salgspris: Varekostnad 40 kr, ønsket foodcost 30%.',
        solution: '40 kr / 0,30 = 133 kr (rund av til 135-140 kr).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-12-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på variable og faste kostnader?',
        solution: 'Variable kostnader øker med salg (råvarer), faste kostnader er uavhengige av salg (husleie, fast lønn).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-12-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er break-even?',
        solution: 'Punktet der inntekter er lik kostnader - ingen fortjeneste eller tap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-12-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre måter å øke lønnsomhet på.',
        solution: 'Øke omsetning, redusere matsvinn og effektiviser drift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 13: HMS i kjøkken
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_13: TextbookChapter = {
  id: 'restaurant-mat-vg1-13',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '13',
  title: 'HMS i kjøkken',
  description: 'Lær om helse, miljø og sikkerhet i kjøkkenet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'arbeide trygt i kjøkkenet',
    'forstå ergonomi',
    'kjenne til HMS-regler',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-13-intro',
      type: 'text',
      content: `HMS (Helse, Miljø og Sikkerhet) handler om å skape et trygt arbeidsmiljø. Kjøkken er en arbeidsplass med høy risiko for skader, derfor er HMS-arbeid svært viktig.`,
    },
    {
      id: 'restaurant-mat-vg1-13-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `Ergonomi handler om å tilpasse arbeidet til mennesket, ikke motsatt. Riktig arbeidsstilling, verktøy og utstyr forebygger skader.`,
    },
    {
      id: 'restaurant-mat-vg1-13-text-1',
      type: 'text',
      content: `**Sikkerhet i kjøkkenet**

**Vanlige faremomenter**:
- Kniver og skarpe redskaper
- Varme overflater og væsker
- Glatte gulv
- Tunge løft
- Stress og tidspress

**Forebyggende tiltak**:
- Bruk riktig verktøy
- Hold orden
- Bruk verneutstyr
- God opplæring
- Risikovurdering`,
    },
    {
      id: 'restaurant-mat-vg1-13-text-2',
      type: 'text',
      content: `**Knivhåndtering**

**Sikker bruk**:
- Skarpe kniver er tryggere enn sløve
- Kutt alltid bort fra kroppen
- Bruk skjærebrett med sklisikker bunn
- Konsentrer deg
- Aldri ta imot fallende kniv

**Oppbevaring**:
- Knivmagnet eller knivsokkel
- Ikke løse i skuff
- Ren og tørr oppbevaring

**Vedlikehold**:
- Sliping og bryning
- Vask for hånd
- Tørk etter vask`,
    },
    {
      id: 'restaurant-mat-vg1-13-text-3',
      type: 'text',
      content: `**Ergonomi og arbeidsstillinger**

**Riktig arbeidshøyde**:
- Benk i albuhøyde
- Unngå bøyd rygg
- Variert arbeidsstilling
- Avstemt etter oppgave

**Løfteteknikk**:
- Bøy knærne, ikke ryggen
- Hold lasten nært kroppen
- Vri ikke mens du løfter
- Be om hjelp ved tunge løft

**Pauseaktivitet**:
- Stretch og tøy
- Varierte oppgaver
- Pauser underveis`,
    },
    {
      id: 'restaurant-mat-vg1-13-text-4',
      type: 'text',
      content: `**Verneutstyr og arbeidsklær**

**Personlig verneutstyr**:
- Sklisikre sko
- Varmeha nsker
- Vernebriller (om nødvendig)
- Hansker ved renhold

**Arbeidsklær**:
- Rent kokkeklær
- Kort lugg eller hårnettet
- Lukket fot vær
- Ingen løstsittende klær nær varme`,
    },
    {
      id: 'restaurant-mat-vg1-13-warning-1',
      type: 'warning',
      title: 'Brannsikkerhet',
      content: `Kjøkken har høy brannrisiko. Kjenn til slokkeutstyr, rømningsveier og rutiner. Slokk aldri fettbrann med vann - bruk lokk eller brannteppe.`,
    },
    {
      id: 'restaurant-mat-vg1-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-13-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HMS for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning.',
            solution: 'Helse, Miljø og Sikkerhet',
            multipleChoiceOptions: [
              'Helse, Miljø og Sikkerhet',
              'Hygiene, Mat og Service',
              'Høyde, Masse og Styrke',
              'Hjelp, Melding og Støtte',
            ],
          },
        ],
        solution: 'HMS står for Helse, Miljø og Sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-13-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan løfter du tungt på riktig måte?',
        solution: 'Bøy knærne, hold lasten nært kroppen, vri ikke, og be om hjelp ved behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-13-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er skarpe kniver tryggere enn sløve?',
        solution: 'Skarpe kniver krever mindre kraft og gli r ikke like lett, noe som reduserer risiko for utglipp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-13-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan slokke fettbrann?',
        solution: 'Bruk lokk eller brannteppe - ALDRI vann (kan eksplodere).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 14: Yrkesmuligheter
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_14: TextbookChapter = {
  id: 'restaurant-mat-vg1-14',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '14',
  title: 'Yrkesmuligheter',
  description: 'Lær om karriereveier i restaurant- og matfag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til ulike yrker i bransjen',
    'forstå utdanningsveier',
    'planlegge egen karriere',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-14-intro',
      type: 'text',
      content: `Restaurant- og matfag tilbyr et bredt spekter av karrieremuligheter. Fra kokk og baker til leder og gründer - mulighetene er mange.`,
    },
    {
      id: 'restaurant-mat-vg1-14-def-1',
      type: 'definition',
      title: 'Fagbrev',
      content: `Fagbrev er et kompetansebevis som viser at du har fullført en yrkesutdanning. I restaurant- og matfag tar det 2 år skole + 2 år lære.`,
    },
    {
      id: 'restaurant-mat-vg1-14-text-1',
      type: 'text',
      content: `**Yrker i kjøkkenet**

**Kokk**:
- Tilberede mat i restaurant
- Spesialisering mulig (saucier, poissonnier)
- Fagbrev kreves

**Souschef**:
- Nestkommanderende i kjøkkenet
- Planlegger og organiserer
- Mange års erfaring

**Kjøkkensjef**:
- Leder kjøkkenet
- Utvikler menyer
- Økonomisk ansvar

**Kondi tor/baker**:
- Lager bakevarer og desserter
- Eget fagfelt
- Fagbrev som baker eller konditor`,
    },
    {
      id: 'restaurant-mat-vg1-14-text-2',
      type: 'text',
      content: `**Yrker i servering**

**Servitør**:
- Betjener gjester
- Serviceinnstilling
- Produktkunnskap

**Bartender**:
- Lager drinker
- Kundebehandling
- Kurs og sertifisering

**Sommelier**:
- Vinekspert
- Rådgir om vin
- Spesialisert utdanning`,
    },
    {
      id: 'restaurant-mat-vg1-14-text-3',
      type: 'text',
      content: `**Leder- og administrasjonsyrker**

**Restaurantsjef**:
- Overordnet ansvar
- Økonomi og personal
- Kunde opplevelse

**Drifts leder**:
- Daglig drift
- Koordinering
- Problem løsning

**Menyutvikler**:
- Utvikler nye retter
- Tester oppskrifter
- Kreativt arbeid`,
    },
    {
      id: 'restaurant-mat-vg1-14-text-4',
      type: 'text',
      content: `**Andre karriereveier**

**Matskribent/blogger**:
- Skriver om mat
- Anmeldelser
- Kommunikasjon

**Matfotograf**:
- Fotograferer mat
- Food styling
- Kreativt

**Ernæringsfysiolog**:
- Kosthold og helse
- Veiledning
- Høyskole utdanning

**Gründer**:
- Egen restaurant eller cafe
- Food truck
- Catering firma`,
    },
    {
      id: 'restaurant-mat-vg1-14-tip-1',
      type: 'tip',
      title: 'Internasjonale muligheter',
      content: `Kokkeyrket er internasjonalt. Med fagbrev kan du arbeide over hele verden. Mange kokker reiser for å lære nye teknikker og kulturer.`,
    },
    {
      id: 'restaurant-mat-vg1-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-14-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et fagbrev?',
        solution: 'Kompetansebevis som viser fullført yrkesutdanning (2 år skole + 2 år lære).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-14-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva gjør en souschef?',
        solution: 'Nestkommanderende i kjøkkenet som planlegger, organiserer og støtter kjøkkensjefen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-14-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre karriereveier utenfor kjøkkenet.',
        solution: 'Servitør, matskribent og ernæringsfysiolog (eller bartender, fotograf, gründer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-14-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en sommelier?',
        solution: 'En vinekspert som rådgir om vin, vinparing og driver vinkjelleren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15: Kjøtt - kvalitet, stykking og tilberedning
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_15: TextbookChapter = {
  id: 'restaurant-mat-vg1-15',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '15',
  title: 'Kjøtt - kvalitet, stykking og tilberedning',
  description: 'Lær om kjøtttyper, stykkingsprinsipper og tilberedningsteknikker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'vurdere kjøttkvalitet',
    'stykke kjøtt riktig',
    'velge riktig tilberedningsmetode',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-15-intro',
      type: 'text',
      content: `Kjøtt er en viktig råvare i matlaging. Kunnskap om stykking og tilberedning gjør deg til en bedre kokk og reduserer svinn.`,
    },
    {
      id: 'restaurant-mat-vg1-15-def-1',
      type: 'definition',
      title: 'Modning',
      content: `Modning er en prosess der kjøttet lagres kontrollert slik at enzymer bryter ned bindevev. Dette gjør kjøttet mørere og gir bedre smak.`,
    },
    {
      id: 'restaurant-mat-vg1-15-text-1',
      type: 'text',
      content: `**Kjøtttyper og stykkdeler**

**Storfe**:
- Indrefilet: Mørt, dyrt, biff
- Ytrefilet: Entrecôte, mørt
- Høyrygg: Roastbiff
- Bog: Tøffere, gryteretter
- Kvel: Kraftig smak, langtidskoking

**Svin**:
- Svinefilet: Mørt, raskt tilberedt
- Koteletter: Med eller uten ben
- Skinke: Bakerste del
- Svineknoke: Stek
- Ribbe: Julemat

**Lam**:
- Lammekam: Koteletter
- Lammestek: Bog eller stek
- Bryst: Pinne kjøtt
- Nakke: Fårikål`,
    },
    {
      id: 'restaurant-mat-vg1-15-text-2',
      type: 'text',
      content: `**Stykking og tilskjæring**

**Verktøy**:
- Fileteri ngskniv (fleksibel)
- Beinkniv (stiv, kort)
- Kokkekniv (allsidig)
- Sag (ben)

**Teknikker**:
- Kutt langs bindevevet
- Følg beinstrukturen
- Fjern unødvendig fett
- Respekter muskelfiberet

**Utbytte**:
- Maksimer mørt kjøtt
- Bruk rester til kraft
- Fett til annen bruk`,
    },
    {
      id: 'restaurant-mat-vg1-15-text-3',
      type: 'text',
      content: `**Tilberedning etter stykkdel**

**Møre stykker** (filet, entrecôte):
- Rask tilberedning
- Steking, grilling
- Medium sjelden til medium

**Seige stykker** (bog, kvel):
- Lang tilberedning
- Gryte, simmering, sous vide
- Lav temperatur, lang tid

**Malt kjøtt**:
- Kjøttboller, burgere
- Kjøttsaus
- Kjøttpålegg`,
    },
    {
      id: 'restaurant-mat-vg1-15-text-4',
      type: 'text',
      content: `**Hviletid og servering**

**Hvorfor hvile?**
- Saften fordeler seg
- Saftigere kjøtt
- Bedre konsistens

**Hvor lenge?**
- 5-10 min for biff
- 15-30 min for stek
- Dekk med folie

**Skjæreteknikk**:
- Skjær mot fiberet
- Tynne skiver
- Presenter pent`,
    },
    {
      id: 'restaurant-mat-vg1-15-tip-1',
      type: 'tip',
      title: 'Kjernetemperatur',
      content: `Bruk steketerm ometer for perfekt resultat. Fjern kjøttet 3-5°C før ønsket temperatur - det stiger under hvile.`,
    },
    {
      id: 'restaurant-mat-vg1-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-15-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er modning av kjøtt?',
        solution: 'Prosess der kjøttet lagres slik at enzymer bryter ned bindevev og gjør det mørere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-15-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken tilberedning passer til indrefilet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig metode.',
            solution: 'Rask steking eller grilling',
            multipleChoiceOptions: [
              'Rask steking eller grilling',
              'Lang grytesimmering',
              'Koking i vann',
              'Fermentering',
            ],
          },
        ],
        solution: 'Indrefilet er mørt og passer til rask tilberedning som steking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-15-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal kjøtt hvile etter steking?',
        solution: 'Slik at saften fordeler seg jevnt og kjøttet blir saftigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-15-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre verktøy for stykking av kjøtt.',
        solution: 'Filetering skniv, beinkniv og kokkekniv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-15-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan skal seige kjøttstykker tilberedes?',
        solution: 'Lang tilberedning ved lav temperatur, som gryte eller simmering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16: Fisk og sjømat - håndtering og tilberedning
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_16: TextbookChapter = {
  id: 'restaurant-mat-vg1-16',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '16',
  title: 'Fisk og sjømat - håndtering og tilberedning',
  description: 'Lær om fiskeh åndtering, filetering og tilberedning av sjømat.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere ferskhetsgrad på fisk',
    'filere fisk',
    'tilberede sjømat',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-16-intro',
      type: 'text',
      content: `Fisk og sjømat er delikate råvarer som krever kunnskap og omtanke. Riktig håndtering og tilberedning gjør all forskjell.`,
    },
    {
      id: 'restaurant-mat-vg1-16-def-1',
      type: 'definition',
      title: 'Filetering',
      content: `Filetering er å skjære fiskefileter fri fra bein og skinn. Dette krever en skarp, fleksibel kniv og god teknikk.`,
    },
    {
      id: 'restaurant-mat-vg1-16-text-1',
      type: 'text',
      content: `**Fiskety per**

**Hvit fisk**:
- Torsk, sei, hyse
- Milt, delikat smak
- Lite fett
- Posjering, steking, koking

**Fet fisk**:
- Laks, ørret, makrell
- Rikere smak
- Omega-3
- Grilling, stekking, røyking

**Skalldyr**:
- Reker, krabbe, hummer
- Søtaktig smak
- Koking, dampning

**Bløtdyr**:
- Blekksprut, blåskjell
- Sjømat smak
- Grilling, koking`,
    },
    {
      id: 'restaurant-mat-vg1-16-text-2',
      type: 'text',
      content: `**Ferskhetsvurdering**

**Hele fisk**:
- Øyne: Klare og bulet
- Gjeller: Røde, ikke brune
- Lukt: Frisk sjø, ikke sur
- Konsistens: Fast, spretter tilbake
- Skinn: Blank, ikke tørr

**Fileter**:
- Fast kjøtt
- Blank overflate
- Frisk lukt
- Ingen misfarging

**Skalldyr**:
- Blåskjell: Lukket skall
- Reker: Blank skal l, fast
- Krabbe: Tung, ikke lett`,
    },
    {
      id: 'restaurant-mat-vg1-16-text-3',
      type: 'text',
      content: `**Filetering og forberedelse**

**Filetering av rundfisk**:
1. Rens fisken (fjern innmat, skjell)
2. Skjær langs ryggraden
3. Løsne fileten fra bein
4. Snu og gjenta andre side
5. Fjern eventuelle småbein

**Fjerne skinn**:
- Legg fileten med skinnsiden ned
- Skjær inn ved halen
- Drei kniven flatt
- Skjær mot deg med sagbevegelser

**Porsjonering**:
- Jevne stykker
- Samme tykkelse
- Pen presentasjon`,
    },
    {
      id: 'restaurant-mat-vg1-16-text-4',
      type: 'text',
      content: `**Tilberedning**

**Posjering**:
- Skånsom metode
- 70-80°C
- Bevarer fuktighet
- Perfekt for hvit fisk

**Steking**:
- Medium høy varme
- Skinnsiden først (fet fisk)
- Kort tid, lett stekt

**Grilling**:
- Fet fisk best
- Olje på risten
- Snu forsiktig

**Damping**:
- Bevarer smak
- Sunnest
- 5-10 min`,
    },
    {
      id: 'restaurant-mat-vg1-16-warning-1',
      type: 'warning',
      title: 'Anisakis (fiskeparasitt)',
      content: `Fisk kan inneholde parasitter. Frysing (-20°C i 24 t) eller varmebehandling (60°C+) dreper parasitter. Viktig hvis fisken skal spises rå.`,
    },
    {
      id: 'restaurant-mat-vg1-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-16-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan kjenner du fersk fisk?',
        solution: 'Klare øyne, røde gjeller, frisk lukt og fast konsistens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-16-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er filetering?',
        solution: 'Å skjære fiskefileter fri fra bein og skinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-16-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken fisketype passer best til grilling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig type.',
            solution: 'Fet fisk (laks, makrell)',
            multipleChoiceOptions: [
              'Fet fisk (laks, makrell)',
              'Hvit fisk (torsk)',
              'Skalldyr',
              'All fisk passer like godt',
            ],
          },
        ],
        solution: 'Fet fisk tåler høy varme bedre og blir ikke like tørr som hvit fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-16-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er posjering en god metode for hvit fisk?',
        solution: 'Det er en skånsom metode som bevarer fuktighet og den delikate strukturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-16-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan drepe parasitter i fisk?',
        solution: 'Frys i -20°C i 24 timer eller varmebeh andle til minimum 60°C.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 17: Grønnsaker og frukt - sesong og bruk
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_17: TextbookChapter = {
  id: 'restaurant-mat-vg1-17',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '17',
  title: 'Grønnsaker og frukt - sesong og bruk',
  description: 'Lær om sesongvariasjon, lagring og bruk av grønnsaker og frukt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til sesongvariasjon',
    'lagre grønnsaker riktig',
    'tilberede grønnsaker på ulike måter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-17-intro',
      type: 'text',
      content: `Grønnsaker og frukt gir farge, smak, tekstur og næring til måltidene. Sesongbasert bruk gir best kvalitet og lavere miljøpåvirkning.`,
    },
    {
      id: 'restaurant-mat-vg1-17-def-1',
      type: 'definition',
      title: 'Sesongvarer',
      content: `Sesongvarer er frukt og grønnsaker som høstes og er på sitt beste på bestemte tider av året. De har best smak, pris og kvalitet i sesong.`,
    },
    {
      id: 'restaurant-mat-vg1-17-text-1',
      type: 'text',
      content: `**Sesongkalender**

**Vår (mars-mai)**:
- Asparges
- Vårløk
- Redd iker
- Spinat
- Ruccola
- Rabarbra

**Sommer (juni-august)**:
- Tomater
- Paprika
- Agurk
- Squash
- Bær (jordbær, bringebær)
- Erter

**Høst (september-november)**:
- Kål (alle typer)
- Gresskar
- Sopp
- Rødbeter
- Epler, pærer

**Vinter (desember-februar)**:
- Lagringsgrønnsaker
- Kålrot, pastinakk
- Purre, seleri
- Lagrede røtter`,
    },
    {
      id: 'restaurant-mat-vg1-17-text-2',
      type: 'text',
      content: `**Lagring**

**Kjøleskap** (+4°C):
- Bladgrønns aker (i pose)
- Bær (bruk raskt)
- Grønne bønner
- Brokkoli, blomkål

**Mørkt og kjølig** (10-15°C):
- Poteter (ikke kjøleskap!)
- Løk (tørr lagring)
- Hvitløk
- Gresskar

**Romtemperatur**:
- Tomater (for best smak)
- Sitrusfrukter
- Bananer
- Avokado (modning)`,
    },
    {
      id: 'restaurant-mat-vg1-17-text-3',
      type: 'text',
      content: `**Tilberedning**

**Rå**:
- Salater
- Grønnsakssnacks
- Dressinger og salsaer
- Bevarer vitaminer

**Damping**:
- Bevarer næring
- Sprø tekstur
- Brokkoli, blomkål, gulrøtter

**Steking**:
- Karamellisering
- Røstet smak
- Løk, paprika, squash

**Koking**:
- Poteter, rotgrønns aker
- Supper
- Mye væske`,
    },
    {
      id: 'restaurant-mat-vg1-17-text-4',
      type: 'text',
      content: `**Forberedelse**

**Vask**:
- Alltid vask grønnsaker
- Fjern jord og skitt
- Spesielt viktig for råkost

**Skrell**:
- Ikke alltid nødvendig
- Økologisk kan spises med skall
- Poteter, gulrøtter

**Kutt**:
- Jevn størrelse for jevn steking
- Presentasjon
- Julienne, brunoise, dice`,
    },
    {
      id: 'restaurant-mat-vg1-17-tip-1',
      type: 'tip',
      title: 'Blankoking',
      content: `Blankoker grønnsaker (koker raskt, så i kaldt vann) for å bevare farge og stoppe koking. Perfekt for å forberede grønnsaker til bruk senere.`,
    },
    {
      id: 'restaurant-mat-vg1-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-17-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er sesongvarer?',
        solution: 'Frukt og grønnsaker som er på sitt beste på bestemte tider av året.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-17-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre sommergrønnsaker.',
        solution: 'Tomater, paprika og agurk (eller squash, bær, erter).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-17-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor skal poteter lagres?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig lagring.',
            solution: 'Mørkt og kjølig (10-15°C), ikke i kjøleskap',
            multipleChoiceOptions: [
              'Mørkt og kjølig (10-15°C), ikke i kjøleskap',
              'I kjøleskap',
              'I frys er',
              'På kjøkken benken i lys',
            ],
          },
        ],
        solution: 'Poteter skal lagres mørkt og kjølig, ikke i kjøleskap (får søt smak).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-17-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er blankoking?',
        solution: 'Å koke grønnsaker raskt og så sjokkavkjøle i kaldt vann for å bevare farge og stoppe koking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-17-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken tilberedning bevarer mest næring?',
        solution: 'Damping eller å spise grønnsakene rå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18: Melk og meieriprodukter
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_18: TextbookChapter = {
  id: 'restaurant-mat-vg1-18',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '18',
  title: 'Melk og meieriprodukter',
  description: 'Lær om melk, ost, smør og bruk av meieriprodukter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til meieriprodukter',
    'forstå ostetyper',
    'bruke meieriprodukter i matlag ing',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-18-intro',
      type: 'text',
      content: `Meieriprodukter er sentrale i norsk og internasjonal matkultur. Fra melk til ost, smør og yoghurt - meieriprodukter tilfører smak og tekstur.`,
    },
    {
      id: 'restaurant-mat-vg1-18-def-1',
      type: 'definition',
      title: 'Pasteurisering',
      content: `Pasteurisering er varmebehandling av melk (72°C i 15 sek) for å drepe skadelige bakterier. Gjør melken trygg å drikke.`,
    },
    {
      id: 'restaurant-mat-vg1-18-text-1',
      type: 'text',
      content: `**Melk og fløte**

**Melketyper**:
- Helmelk: 3,5% fett
- Lettmelk: 1,2% fett
- Skummet melk: 0,1% fett
- Økologisk melk

**Fløte**:
- Kaffefl øte: 10-12% fett
- Matfløte: 35% fett
- Kremfløte: 48% fett
- Lett crème fraîche: 18%

**Bruk**:
- Drikke, kaffe
- Sauser og supper
- Baking
- Desserter`,
    },
    {
      id: 'restaurant-mat-vg1-18-text-2',
      type: 'text',
      content: `**Ost**

**Ostety per**:
- **Fersk ost**: Cottage cheese, ricotta
- **Myk ost**: Brie, camembert
- **Halvhard ost**: Gouda, Jarlsberg
- **Hard ost**: Parmesan, cheddar
- **Blåmuggost**: Roquefort, gorgonzola

**Norsk ost**:
- Brunost (mysost, geitost)
- Nøkkelost
- Jarlsberg
- Norvegia
- Kvitost

**Bruk**:
- Smøreost
- Gratinering
- Sauser
- Ostebrett`,
    },
    {
      id: 'restaurant-mat-vg1-18-text-3',
      type: 'text',
      content: `**Smør og andre produkter**

**Smør**:
- Meierismør: Saltet eller usaltet
- Rørt smør (med urter, hvitløk)
- Klaret smør (ghee)
- Bruk: Steking, baking, smøring

**Yoghurt**:
- Naturell yoghurt
- Gresk yoghurt (tykkere)
- Tyrkisk yoghurt
- Bruk: Frokost, dressing, marinade

**Rømme og cr ème fraîche**:
- Sur, tykk konsistens
- 18-35% fett
- Bruk: Topping, sauser`,
    },
    {
      id: 'restaurant-mat-vg1-18-text-4',
      type: 'text',
      content: `**Matlaging med meieri**

**Sauser**:
- Bechamelsaus (melk + roux)
- Fløtesaus
- Ostesaus

**Baking**:
- Melk i deig
- Smør i kaker
- Fløte i kremer

**Tips**:
- Ikke kok for høyt (brenner lett)
- Tilsett fløte på slutten
- Ost smelter ved lav varme`,
    },
    {
      id: 'restaurant-mat-vg1-18-tip-1',
      type: 'tip',
      title: 'Laktoseintoleranse',
      content: `Mange tåler ikke laktose (melkesukker). Bruk laktosefrie alternativer, eller plantebaserte som havremelk, mandelmelk.`,
    },
    {
      id: 'restaurant-mat-vg1-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-18-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er pasteurisering?',
        solution: 'Varmebehandling av melk (72°C i 15 sek) for å drepe bakterier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-18-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre typer norsk ost.',
        solution: 'Brunost, Jarlsberg og Norvegia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-18-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på matfløte og kremfløte?',
        solution: 'Matfløte har 35% fett, kremfløte har 48% fett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-18-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken ostetype er parmesan?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kategori.',
            solution: 'Hardost',
            multipleChoiceOptions: [
              'Hardost',
              'Mykost',
              'Fersk ost',
              'Blåmuggost',
            ],
          },
        ],
        solution: 'Parmesan er en hard ost med lang modning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 19: Korn, mel og bakevarer
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_19: TextbookChapter = {
  id: 'restaurant-mat-vg1-19',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '19',
  title: 'Korn, mel og bakevarer',
  description: 'Lær om korntyper, melsorter og baketeori.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kjenne til korntyper',
    'forstå glutenstruktur',
    'lage ulike bakevarer',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-19-intro',
      type: 'text',
      content: `Korn er grunnlaget for brød, pasta og mange andre matvarer. Forståelse for mel og baketeknikker er sentralt i kokkefaget.`,
    },
    {
      id: 'restaurant-mat-vg1-19-def-1',
      type: 'definition',
      title: 'Gluten',
      content: `Gluten er et elastisk proteinnettverk som dannes når mel blandes med væske og eltes. Gir deig struktur og evne til å holde på gass.`,
    },
    {
      id: 'restaurant-mat-vg1-19-text-1',
      type: 'text',
      content: `**Korntyper**

**Hvete**:
- Mest brukt i baking
- Inneholder gluten
- Mykt og grove varianter

**Rug**:
- Mørkt, kraftig smak
- Mindre gluten enn hvete
- Rødt brød

**Bygg**:
- Byggryn, byggmel
- Lav glutenhalt
- Flatbrød

**Havre**:
- Havregryn, havremel
- Naturlig glutenfri (kan være kontaminert)
- Havrekjeks, grøt

**Andre**:
- Spelt (eldgammelt hvete)
- Durra (glutenfritt)
- Quinoa (frø, ikke korn)
- Ris (glutenfritt)`,
    },
    {
      id: 'restaurant-mat-vg1-19-text-2',
      type: 'text',
      content: `**Meltyper**

**Hvetemel**:
- **Siktet hvetemel**: Fineste, hvitt
- **Sammalt hvetemel**: Mel + noe klid
- **Kveitemellom**: Middels grovt
- **Grovt hvetemel**: Hele kornet
- **Hvetekli**: Kun skallet

**Proteininnhold**:
- Lav protein (8-10%): Kaker
- Medium protein (10-12%): Allsidig
- Høy protein (12-14%): Brød

**Annet mel**:
- Rugmel (grovt, fint)
- Maismel
- Potetmel (bindemiddel)
- Mandel mel (glutenfritt)`,
    },
    {
      id: 'restaurant-mat-vg1-19-text-3',
      type: 'text',
      content: `**Glutenstruktur**

**Hvordan gluten dannes**:
- Mel + væske
- Elting utvikler gluten
- Hvile lar gluten slappe av

**Glutenstyrke**:
- Mye elting: Sterkt gluten (brød)
- Lite elting: Svakt gluten (kaker)
- Ingen elting: Smørdeig

**Glutenfritt**:
- Cøliakere må unngå gluten
- Bruk glutenfritt mel
- Annen tekstur og smak`,
    },
    {
      id: 'restaurant-mat-vg1-19-text-4',
      type: 'text',
      content: `**Bakevarer**

**Brød**:
- Gjærdeig
- Elting og heving
- Baketid: 30-60 min

**Boller og rundstykker**:
- Søt eller salt deig
- Forming
- Egg-pensling

**Knekkebrød og flatbrød**:
- Tynt og sprøtt
- Rug eller bygg
- Kort baketid

**Pasta**:
- Durum-hvete (hard hvete)
- Egg og mel
- Tørking eller fersk`,
    },
    {
      id: 'restaurant-mat-vg1-19-text-5',
      type: 'text',
      content: `**Hevemidler**

**Gjær**:
- Levende sopp
- Trenger varme og næring
- Produserer CO₂

**Bakepulver**:
- Kjemisk hevemiddel
- Virker ved varme
- Brukes til kaker

**Natron**:
- Trenger syre for å virke
- Kombineres med yoghurt, sitron
- Rask reaksjon

**Surdeig**:
- Naturlig gjæring
- Lange smak
- Sunnere, lengre holdbarhet`,
    },
    {
      id: 'restaurant-mat-vg1-19-tip-1',
      type: 'tip',
      title: 'Vellykket gjærdeig',
      content: `Gjær liker 37°C (kroppstemperatur). For kald = treg heving. For varm = gjæren dør. Test temperatur med fingeren.`,
    },
    {
      id: 'restaurant-mat-vg1-19-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er gluten?',
        solution: 'Elastisk proteinnettverk som dannes når mel blandes med væske og eltes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-19-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket korn brukes mest i baking?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig korn.',
            solution: 'Hvete',
            multipleChoiceOptions: [
              'Hvete',
              'Rug',
              'Havre',
              'Bygg',
            ],
          },
        ],
        solution: 'Hvete er mest brukt pga gluteninnhold og egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-19-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på bakepulver og natron?',
        solution: 'Bakepulver inneholder både syre og base, natron trenger tilsatt syre for å virke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-19-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken temperatur liker gjær best?',
        solution: 'Rundt 37°C (kroppstemperatur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-19-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre glutenfrie kornalternativer.',
        solution: 'Ris, mais og havre (eller quinoa, durra, bokhvete).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-19-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-19-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er surdeig?',
        solution: 'Naturlig gjæret deig med melkesyrebakterier og ville gjærsopper som gir lang smak og bedre holdbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 20: Konservering og foredling
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_20: TextbookChapter = {
  id: 'restaurant-mat-vg1-20',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '20',
  title: 'Konservering og foredling',
  description: 'Lær om sylting, fermentering, røyking og andre konserveringsmetoder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til konserveringsmetoder',
    'sylte og fermentere',
    'forstå matforedling',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-20-intro',
      type: 'text',
      content: `Konservering lar oss bevare mat lenger og utvikle nye smaker. Fra gammelt av var det nødvendig for overlevelse, i dag er det både tradisjonskunst og matglede.`,
    },
    {
      id: 'restaurant-mat-vg1-20-def-1',
      type: 'definition',
      title: 'Fermentering',
      content: `Fermentering er en prosess der bakterier, gjær eller mugg bryter ned mat. Gir nye smaker, bedre holdbarhet og ofte helsemessige fordeler.`,
    },
    {
      id: 'restaurant-mat-vg1-20-text-1',
      type: 'text',
      content: `**Konserveringsmetoder**

**Tørking**:
- Fjerner fuktighet
- Bakterier trenger vann
- Tørrfisk, fenalår, tørket frukt

**Salting**:
- Salt trekker ut vann
- Hemmer bakterievekst
- Spekeskinke, klippfisk

**Sylting**:
- Eddiksyre bevarer
- Agurk, løk, beter
- Lett søt eller sur

**Røyking**:
- Røyk hemmer bakterier
- Gir smak
- Laks, pølser, kjøtt`,
    },
    {
      id: 'restaurant-mat-vg1-20-text-2',
      type: 'text',
      content: `**Fermentering**

**Melkesyregjæring**:
- Bakterier produserer melkesyre
- Surkål, kimchi
- Probiotika (sunt)

**Alkoholgjæring**:
- Gjær lager alkohol
- Vin, øl, cider
- Kre ver kontrollerte forhold

**Annen fermentering**:
- Soyasaus (sopp)
- Tempeh (sopp)
- Miso (sopp og salt)

**Hvordan fermentere**:
1. Forbered råvarer
2. Tilsett salt (2-3%)
3. Pakk tett (uten luft)
4. La stå i romtemperatur
5. Smak etter noen dager`,
    },
    {
      id: 'restaurant-mat-vg1-20-text-3',
      type: 'text',
      content: `**Sylting og marinering**

**Sylting**:
- Oppskrift: Vann, eddik, sukker, krydder
- Kok lagen, hell over råvarer
- Lukk glasset lufttett
- Holdbarhet: Flere måneder

**Marinering**:
- Ikke primært konservering
- Smaksetting og møring
- Olje, eddik, krydder
- Kjøtt, fisk, grønnsaker

**Gravning**:
- Salt, sukker og krydder
- Gravet laks
- 1-3 dager kjøling
- Spesiell smak`,
    },
    {
      id: 'restaurant-mat-vg1-20-text-4',
      type: 'text',
      content: `**Moderne konservering**

**Hermetisering**:
- Varmebehandling i boks
- Steril og lufttett
- Lang holdbarhet
- Industriproduksjon

**Frysing**:
- -18°C eller kaldere
- Stopper bakterievekst
- Bevarer kvalitet godt
- Hjemmebruk

**Vakuumpakking**:
- Fjerner luft
- Forlenger holdbarhet
- Kombineres ofte med frysing
- Sous vide-koking`,
    },
    {
      id: 'restaurant-mat-vg1-20-warning-1',
      type: 'warning',
      title: 'Botulisme-fare',
      content: `Feil konservering (spesielt hermetisering) kan gi livsfarlig botulisme. Følg oppskrifter nøye, bruk riktig temperatur og pH. Ved tvil, kast produktet.`,
    },
    {
      id: 'restaurant-mat-vg1-20-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-20-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fermentering?',
        solution: 'Prosess der mikroorganismer bryter ned mat, gir nye smaker og bedre holdbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-20-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-20-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre konserveringsmetoder.',
        solution: 'Tørking, salting og røyking (eller sylting, fermentering, frysing).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-20-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-20-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er surkål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Fermentert hvit kål',
            multipleChoiceOptions: [
              'Fermentert hvit kål',
              'Syltet rødkål',
              'Kokt kål',
              'Tørket kål',
            ],
          },
        ],
        solution: 'Surkål er hvit kål som er melkesyrefermentert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-20-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-20-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor brukes salt i fermentering?',
        solution: 'Salt hemmer uønskede bakterier og trekker ut væske, samtidig som melkesyrebakterier trives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-20-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-20-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er botulisme?',
        solution: 'Livsfarlig matforgiftning forårsaket av bakterien Clostridium botulinum, ofte fra feil konservering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 21: Smak og sensorikk
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_21: TextbookChapter = {
  id: 'restaurant-mat-vg1-21',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '21',
  title: 'Smak og sensorikk',
  description: 'Lær om smaksopplevelser, smakskombinasjon og sensorisk vurdering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå smaker og lukt',
    'kombinere smaker',
    'utvikle sensoriske ferdigheter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-21-intro',
      type: 'text',
      content: `Smak og sensorikk handler om hvordan vi opplever mat gjennom alle sanser. Som kokk må du forstå smak for å skape gode retter.`,
    },
    {
      id: 'restaurant-mat-vg1-21-def-1',
      type: 'definition',
      title: 'Sensorikk',
      content: `Sensorikk er læren om hvordan vi opplever mat gjennom sanser: smak, lukt, syn, berøring og lyd.`,
    },
    {
      id: 'restaurant-mat-vg1-21-text-1',
      type: 'text',
      content: `**De fem grunnsmakene**

**Søtt**:
- Sukker, frukt, honning
- Energi (karbohydrater)
- Positivt signal

**Surt**:
- Sitrus, eddik, yoghurt
- Friskhet
- Balanserer søtt og fett

**Salt**:
- Salt, soya, buljong
- Livsnødvendig mineral
- Fremhever andre smaker

**Bittert**:
- Kaffe, mørk sjokolade, bladgrønnt
- Advarsel (giftstoffer)
- Avansert smak

**Umami**:
- Kjøtt, sopp, parmesan, soyasaus
- Proteinsignal
- "Den femte grunnsmaken"`,
    },
    {
      id: 'restaurant-mat-vg1-21-text-2',
      type: 'text',
      content: `**Lukt og aroma**

**Luktens betydning**:
- 80% av smaksopplevelsen
- Tusenvis av luktreseptorer
- Knyttes til minner

**Aromakomponenter**:
- Volatile stoffer (fordamper)
- Frigjøres ved varme
- Kombinasjoner gir kompleksitet

**Aromahjulet**:
- Fruktete, blomsteraktige
- Krydret, nøtteaktig
- Røkt, brent
- Animalsk, fermentert`,
    },
    {
      id: 'restaurant-mat-vg1-21-text-3',
      type: 'text',
      content: `**Smakskombinasjon**

**Balanseprinsippet**:
- Surt + søtt = harmoni
- Salt + umami = dybde
- Bittert + fett = balanse

**Kontraster**:
- Varmt/kaldt
- Sprøtt/mykt
- Mildt/sterkt

**Komplimenterende**:
- Tomat + basilikum
- Sitron + fisk
- Sjokolade + kaffe

**Klassiske parringer**:
- Epler + kanel
- Lam + rosmarin
- Fisk + hvitvin`,
    },
    {
      id: 'restaurant-mat-vg1-21-text-4',
      type: 'text',
      content: `**Sensorisk evaluering**

**Utseende**:
- Farge (appetittvekkende?)
- Form og porsjonering
- Presentasjon

**Tekstur**:
- Sprø, myk, saftig, seig
- Variasjon viktig
- Overraskelse

**Lydopplevelse**:
- Sprøhet (potetgull)
- Brusen (drikke)
- Støy påvirker opplevelse

**Smaksprofil**:
- Første inntrykk
- Utvikling i munnen
- Ettersmak`,
    },
    {
      id: 'restaurant-mat-vg1-21-tip-1',
      type: 'tip',
      title: 'Smakstrett het',
      content: `Når du smaker mye, blir du "trett" for smaken. Spis nøytral mat (brød, vann) mellom smakstestinger for å nullstille sansene.`,
    },
    {
      id: 'restaurant-mat-vg1-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-21-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem grunnsmakene?',
        solution: 'Søtt, surt, salt, bittert og umami.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-21-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mye av smaksopplevelsen kommer fra lukt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig andel.',
            solution: 'Rundt 80%',
            multipleChoiceOptions: [
              'Rundt 80%',
              'Rundt 20%',
              'Rundt 50%',
              'Mindre enn 10%',
            ],
          },
        ],
        solution: 'Lukt utgjør rundt 80% av smaksopplevelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-21-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er umami?',
        solution: 'Den femte grunnsmaken, proteinsmak, finnes i kjøtt, sopp, soya og parmesan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-21-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn en klassisk smakskombinasjon.',
        solution: 'Tomat og basilikum (eller sitron og fisk, epler og kanel).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 22: Profesjonell kjøkkendrift og organisering
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_22: TextbookChapter = {
  id: 'restaurant-mat-vg1-22',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '22',
  title: 'Profesjonell kjøkkendrift og organisering',
  description: 'Lær om kjøkkenorganisering, mise en place og arbeidsflyt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'organisere kjøkken effektivt',
    'utføre mise en place',
    'arbeide i team',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-22-intro',
      type: 'text',
      content: `Profesjonell kjøkkendrift handler om organisering, forberedelse og effektiv arbeidsflyt. Et godt organisert kjøkken er nøkkelen til suksess.`,
    },
    {
      id: 'restaurant-mat-vg1-22-def-1',
      type: 'definition',
      title: 'Mise en place',
      content: `Mise en place (fransk for "alt på plass") betyr at alle ingredienser er forberedt, målt og klare før tilberedning starter.`,
    },
    {
      id: 'restaurant-mat-vg1-22-text-1',
      type: 'text',
      content: `**Kjøkkenorganisering**

**Tradisjonell brigade**:
- **Chef de cuisine**: Kjøkkensjef
- **Sous chef**: Nestleder
- **Chef de partie**: Stasjonsansvarlig
- **Commis**: Kokkelærling
- **Plongeur**: Oppvasker

**Stasjoner (partie)**:
- **Saucier**: Sauser og kjøtt
- **Rôtisseur**: Stekt og grillet
- **Poissonnier**: Fisk
- **Entremetier**: Grønnsaker
- **Pâtissier**: Desserter
- **Garde manger**: Kalde retter`,
    },
    {
      id: 'restaurant-mat-vg1-22-text-2',
      type: 'text',
      content: `**Mise en place**

**Forberedelse**:
- Les oppskriften
- Liste ingredienser
- Forbered redskaper
- Kutt og mål alt

**Organisering**:
- Ingredienser i small bokser
- Ordnet rekkefølge
- Lett tilgjengelig
- Rent og ryddig

**Fordeler**:
- Raskere tilberedning
- Mindre stress
- Færre feil
- Bedre oversikt`,
    },
    {
      id: 'restaurant-mat-vg1-22-text-3',
      type: 'text',
      content: `**Arbeidsflyt**

**Effektiv bevegelse**:
- Minimer antall steg
- Alt innen rekkevidde
- Logisk layout
- Unngå krysstrafikk

**Tidsplanlegging**:
- Start med det som tar lengst tid
- Flere oppgaver samtidig
- Bruk ventetid smart
- Koordiner med team

**Kommunikasjon**:
- Tydelige kommandoer
- Bekreft ordrer
- Varsle om ferdig
- Respekt i kjøkkenet`,
    },
    {
      id: 'restaurant-mat-vg1-22-text-4',
      type: 'text',
      content: `**Service og rush**

**Forberedelse før service**:
- All mise en place klar
- Utstyr på plass
- Sjekk ordrer
- Oppvarmet utstyr

**Under service**:
- Hold hodet kaldt
- Følg ordrelistene
- Kommuniser hele tiden
- Kvalitet først

**Etter service**:
- Rydd og rengjør
- Evaluer dagen
- Noter hva som må fylles på
- Forbered neste dag`,
    },
    {
      id: 'restaurant-mat-vg1-22-tip-1',
      type: 'tip',
      title: 'Rydd mens du jobber',
      content: `Hold arbeidsplassen ryddig underveis. Vask opp og rydd bort mens du venter. Et rotete kjøkken er ineffektivt og utr ygt.`,
    },
    {
      id: 'restaurant-mat-vg1-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-22-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr mise en place?',
        solution: 'Alt på plass - alle ingredienser er forberedt før tilberedning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-22-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en sous chef?',
        solution: 'Nestkommanderende i kjøkkenet, støtter kjøkkensjefen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-22-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken stasjon lager sauser?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig stasjon.',
            solution: 'Saucier',
            multipleChoiceOptions: [
              'Saucier',
              'Pâtissier',
              'Poissonnier',
              'Garde manger',
            ],
          },
        ],
        solution: 'Saucier-stasjonen har ansvar for sauser og ofte kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-22-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er mise en place viktig?',
        solution: 'Gir raskere tilberedning, mindre stress, færre feil og bedre oversikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-22-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre prinsipper for effektiv arbeidsflyt.',
        solution: 'Minimer bevegelse, godt organisert plass og tydelig kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 23: Matsvinn og bærekraftig kjøkkendrift
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_23: TextbookChapter = {
  id: 'restaurant-mat-vg1-23',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '23',
  title: 'Matsvinn og bærekraftig kjøkkendrift',
  description: 'Lær å redusere matsvinn og drive kjøkken bærekraftig.',
  estimatedMinutes: 50,
  competenceGoals: [
    'redusere matsvinn',
    'utnytte ressurser maksimalt',
    'drive bærekraftig',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-23-intro',
      type: 'text',
      content: `Matsvinn er et enormt problem globalt. Som kokk har du stor påvirkning på hvor mye mat som kastes. Bærekraftig drift er både etisk og økonomisk smart.`,
    },
    {
      id: 'restaurant-mat-vg1-23-def-1',
      type: 'definition',
      title: 'Matsvinn',
      content: `Matsvinn er mat som kastes selv om den kunne vært spist. I Norge kastes 385 000 tonn mat årlig, mye av dette kunne vært unngått.`,
    },
    {
      id: 'restaurant-mat-vg1-23-text-1',
      type: 'text',
      content: `**Årsaker til matsvinn**

**I kjøkkenet**:
- Dårlig planlegging
- For store innkjøp
- Feil lagring
- Overproduksjon
- Strenge kvalitetskrav

**Porsjoner**:
- For store porsjoner
- Gjester spiser ikke opp
- Buffet-overskudd

**Holdbarhet**:
- Utgått dato
- Dårlig FIFO
- Glemt varer`,
    },
    {
      id: 'restaurant-mat-vg1-23-text-2',
      type: 'text',
      content: `**Redusere matsvinn**

**Planlegging**:
- Kjøp riktig mengde
- Bruk sesongvarer
- Fleksible menyer
- Salgsstatistikk

**Lagring**:
- FIFO-prinsippet
- Riktig temperatur
- God merking
- Oversiktlig lager

**Resteutnyttelse**:
- Grønnsaksskrell → buljong
- Gammelt brød → krutonger
- Overmoden frukt → kompott
- Kjøttben → fond

**Nose to tail**:
- Bruk hele dyret
- Indremat
- Ben og sener
- Minimalt svinn`,
    },
    {
      id: 'restaurant-mat-vg1-23-text-3',
      type: 'text',
      content: `**Kreativ gjenbruk**

**Ukens restegryte**:
- Kombinere resterende råvarer
- Ny rett
- Kreativitet

**Ferske råvarer**:
- Bruk minst holdbare først
- Tilpass meny etter lager
- Dagens spesial

**Personalmåltid**:
- Bruk rester til ansatte
- Reduserer svinn
- Øker trivsel`,
    },
    {
      id: 'restaurant-mat-vg1-23-text-4',
      type: 'text',
      content: `**Bærekraftig drift**

**Energi**:
- Energieffektive apparater
- Skru av når ikke i bruk
- LED-belysning
- Isolering

**Vann**:
- Spare vann ved oppvask
- Moderne oppvaskmaskiner
- Reparer lekkasjer

**Avfall**:
- Kildesortering
- Kompostering
- Resirkulering
- Minimere emballasje

**Leverandører**:
- Velg bærekraftige
- Kortreist
- Økologisk
- Fairtrade`,
    },
    {
      id: 'restaurant-mat-vg1-23-tip-1',
      type: 'tip',
      title: 'Mattilbud',
      content: `Samarbeid med Too Good To Go eller lignende app er for å selge overskuddsmat billig til slutten av dagen. Reduserer svinn og når nye kunder.`,
    },
    {
      id: 'restaurant-mat-vg1-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-23-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er matsvinn?',
        solution: 'Mat som kastes selv om den kunne vært spist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-23-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr "nose to tail"?',
        solution: 'Å bruke hele dyret fra nese til hale, minimere svinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-23-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre måter å redusere matsvinn på.',
        solution: 'FIFO, resteutnyttelse og riktig planlegging av innkjøp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-23-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan grønnsaksskrell brukes til?',
        solution: 'Grønnsaksbuljong eller kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-23-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er bærekraftig drift viktig?',
        solution: 'Reduserer miljøpåvirkning, sparer ressurser, er økonomisk smart og samfunnsansvarlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 24: Matmerking og lovverk
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_24: TextbookChapter = {
  id: 'restaurant-mat-vg1-24',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '24',
  title: 'Matmerking og lovverk',
  description: 'Lær om merkekrav, lovverk og informasjonsplikt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til merkekrav',
    'forstå matlovgivning',
    'håndtere allergener riktig',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-24-intro',
      type: 'text',
      content: `Som serveringssted har du lovpålagt informasjonsplikt overfor gjester. Dette inkluderer allergeninformasjon, merking og mattrygghet.`,
    },
    {
      id: 'restaurant-mat-vg1-24-def-1',
      type: 'definition',
      title: 'Mattilsynet',
      content: `Mattilsynet er norsk myndighet som fører tilsyn med mat og drikkevare, dyrehelse og plantehelse. De sikrer at loven følges.`,
    },
    {
      id: 'restaurant-mat-vg1-24-text-1',
      type: 'text',
      content: `**Viktige lover**

**Matloven**:
- Grunnloven for matproduksjon
- Sikre trygg mat
- Krav til drift

**Allergenetikettloven**:
- Må informere om 14 allergener
- Både pakket mat og restaurant
- Skriftlig eller muntlig

**Alkoholloven**:
- Aldersgrense (18/20 år)
- Skjenkebevilling
- Åpningstider

**Arbeidsmiljøloven**:
- HMS-krav
- Arbeidsforhold
- Rettigheter`,
    },
    {
      id: 'restaurant-mat-vg1-24-text-2',
      type: 'text',
      content: `**Matmerking**

**Obligatorisk informasjon**:
- Produktnavn
- Ingrediensliste
- Allergener (uthevet)
- Nettovekt
- Best før-dato
- Produsent/importør
- Opprinnelsesland
- Oppbevaring
- Næringsdeklarasjon

**Allergener**:
- Må være uthevet
- Alle 14 allergener
- Kryssmitte må nevnes

**Eksempel**: 
Inneholder **melk**, **gluten**, **egg**. Kan inneholde spor av **nøtter**.`,
    },
    {
      id: 'restaurant-mat-vg1-24-text-3',
      type: 'text',
      content: `**Informasjonsplikt i restaurant**

**Allergeninformasjon**:
- Må være tilgjengelig
- Muntlig eller skriftlig
- Alle ansatte må ha kunnskap
- Dokumentasjon må finnes

**Oppskrifter og ingredienslister**:
- Oppbevares tilgjengelig
- Oppdatert informasjon
- Leverandørinfo

**Når gjest spør**:
- Aldri gjett
- Sjekk oppskrift
- Spør kjøkken
- Vær sikker`,
    },
    {
      id: 'restaurant-mat-vg1-24-text-4',
      type: 'text',
      content: `**Mattilsynets tilsyn**

**Tilsynsbesøk**:
- Regelmessige inspeksjoner
- Uanmeldte besøk
- Sjekker hygiene, merking, temperatur

**Smileordningen**:
- Grønt smilefjes: Godt resultat
- Gult smilefjes: Merknader
- Rødt smilefjes: Alvorlige avvik

**Avvik**:
- Kan føre til gebyr
- Stenging i verste fall
- Korrigeres raskt`,
    },
    {
      id: 'restaurant-mat-vg1-24-warning-1',
      type: 'warning',
      title: 'Informasjonsplikt',
      content: `Det er straffbart å ikke gi korrekt allergeninformasjon. Dette kan være livsfarlig for allergikere. Ta alltid allergenspørsmål på alvor.`,
    },
    {
      id: 'restaurant-mat-vg1-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-24-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Mattilsynet?',
        solution: 'Norsk myndighet som fører tilsyn med mat, dyrehelse og plantehelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-24-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange allergener må merkes?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall.',
            solution: '14 allergener',
            multipleChoiceOptions: [
              '14 allergener',
              '7 allergener',
              '10 allergener',
              '20 allergener',
            ],
          },
        ],
        solution: 'De 14 hovedallergenene må alltid merkes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-24-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr grønt smilefjes fra Mattilsynet?',
        solution: 'Godt resultat ved tilsyn, ingen avvik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-24-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva skal du gjøre hvis en gjest spør om allergener?',
        solution: 'Aldri gjett - sjekk oppskrift, spør kjøkken og gi sikker informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 25: Drikke og drikkekultur
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_25: TextbookChapter = {
  id: 'restaurant-mat-vg1-25',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '25',
  title: 'Drikke og drikkekultur',
  description: 'Lær om vin, øl, kaffe og drikkeservering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til ulike drikketyper',
    'forstå drikke paring',
    'servere drikke profesjonelt',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-25-intro',
      type: 'text',
      content: `Drikke er en viktig del av måltidsopplevelsen. Riktig drikke kan løfte maten og skape harmoni på tallerkenen.`,
    },
    {
      id: 'restaurant-mat-vg1-25-def-1',
      type: 'definition',
      title: 'Sommelier',
      content: `En sommelier er en vinekspert som rådgir om vin, drikkepar ing og driver restaurantens vinkjeller.`,
    },
    {
      id: 'restaurant-mat-vg1-25-text-1',
      type: 'text',
      content: `**Vin**

**Vintyper**:
- **Rødvin**: Tanniner, kraftig (Cabernet, Merlot, Pinot Noir)
- **Hvitvin**: Frisk, lett (Chardonnay, Sauvignon Blanc, Riesling)
- **Rosévin**: Mellomting, sommervin
- **Musserende**: Champagne, Cava, Prosecco

**Vinproduksjon**:
- Druer høstes
- Gjæring (sukker → alkohol)
- Lagring (fat eller flaske)
- Modning utvikler smak

**Serveringstemperatur**:
- Rødvin: 16-18°C
- Hvitvin: 8-12°C
- Musserende: 6-8°C`,
    },
    {
      id: 'restaurant-mat-vg1-25-text-2',
      type: 'text',
      content: `**Øl**

**Øltyper**:
- **Lager/Pilsner**: Lett, gylden (mest vanlig)
- **Ale**: Kraftigere, fruktete
- **Stout/Porter**: Mørkt, røstet smak
- **IPA**: Humlete, bittert
- **Hveteøl**: Lett, frisk

**Servering**:
- Riktig glass til øltype
- Skum (ca. 2 cm)
- Rett temperatur (4-8°C)

**Ølparing**:
- Hveteøl til salater
- IPA til sterk mat
- Stout til sjokolade`,
    },
    {
      id: 'restaurant-mat-vg1-25-text-3',
      type: 'text',
      content: `**Kaffe og te**

**Kaffe**:
- Arabica (mild, kompleks)
- Robusta (sterkere, bittert)
- Espresso, filterkaffe, cappuccino
- Serveres fersk og varm

**Te**:
- Svart te (fermentert)
- Grønn te (ufermentert)
- Hvit te (delikat)
- Urte te (ikke egentlig te)

**Servering**:
- Riktig temperatur
- Riktig trekketid
- Rent vann`,
    },
    {
      id: 'restaurant-mat-vg1-25-text-4',
      type: 'text',
      content: `**Drikke paring**

**Prinsipper**:
- Lik intensitet (lett mat = lett drikke)
- Kontrast (fett mat + syre drikke)
- Komplimentering (søt mat = søt vin)

**Klassiske paringer**:
- Fisk + hvitvin
- Rødt kjøtt + rødvin
- Ost + portvin
- Sjokolade + kaffe

**Alkoholfritt**:
- Hjemmelaget brus
- Mocktails
- Saft
- Vann med smak`,
    },
    {
      id: 'restaurant-mat-vg1-25-tip-1',
      type: 'tip',
      title: 'Vinsmak ing',
      content: `Ved vinsmak ing: Se (farge), lukt (aroma), smak (balanse), vurder (etterte smak). Bruk et rent glass og smak i rett rekkefølge (hvit før rød, lett før kraftig).`,
    },
    {
      id: 'restaurant-mat-vg1-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-25-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en sommelier?',
        solution: 'En vinekspert som rådgir om vin og drikkeparing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-25-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken temperatur skal hvitvin serveres ved?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig temperatur.',
            solution: '8-12°C',
            multipleChoiceOptions: [
              '8-12°C',
              '16-18°C',
              '0-4°C',
              '20-22°C',
            ],
          },
        ],
        solution: 'Hvitvin serveres kjølig, mellom 8-12°C.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-25-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre øltyper.',
        solution: 'Pilsner, IPA og Stout (eller Ale, hveteøl, Porter).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-25-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en klassisk drikkeparing til fisk?',
        solution: 'Hvitvin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-25-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen på arabica og robusta kaffe?',
        solution: 'Arabica er mild og kompleks, robusta er sterkere og mer bitter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 26: Catering og selskapsmeny
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_26: TextbookChapter = {
  id: 'restaurant-mat-vg1-26',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '26',
  title: 'Catering og selskapsmeny',
  description: 'Lær å planlegge og produsere mat for større arrangementer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge større arrangementer',
    'kalkulere for mange personer',
    'organisere storproduksjon',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-26-intro',
      type: 'text',
      content: `Catering og selskapsmeny krever god planlegging, organisering og presisjon. Å lage mat til mange er annerledes enn à la carte.`,
    },
    {
      id: 'restaurant-mat-vg1-26-def-1',
      type: 'definition',
      title: 'Catering',
      content: `Catering er levering og servering av mat til arrangement utenfor restauranten, eller større arrangement i restauranten.`,
    },
    {
      id: 'restaurant-mat-vg1-26-text-1',
      type: 'text',
      content: `**Planlegging**

**Kunde samtale**:
- Antall personer
- Budsjett
- Allergier/dietter
- Type arrangement
- Tid og sted

**Menyutvikling**:
- Tilpass sesong
- Produksjonskapasitet
- Transportegnet mat
- Varmt/kaldt

**Tidslinje**:
- Innkjøpsliste
- Produksjonsplan
- Serviceplan
- Backup-plan`,
    },
    {
      id: 'restaurant-mat-vg1-26-text-2',
      type: 'text',
      content: `**Kalkulasjon**

**Porsjoner**:
- Forrett: 100-150g
- Hovedrett: 200-250g
- Dessert: 100-125g
- Buffet: Beregn 20% ekstra

**Råvaremengde**:
- Skalering av oppskrift
- Svinnprosent
- Snitt og tilskjæring

**Kostnader**:
- Råvarer
- Personal
- Transport
- Utstyr lån
- Margin`,
    },
    {
      id: 'restaurant-mat-vg1-26-text-3',
      type: 'text',
      content: `**Storproduksjon**

**Forberedelse**:
- Mise en place for mange
- Effektiv oppstilling
- Flere kokker samarbeider
- Tydelige arbeidslister

**Timing**:
- Ferdig samtidig
- Holdetemperatur
- Kvalitet bevares
- Koordinering kritisk

**Utstyr**:
- Store gryter og panner
- Varmskap
- Transportbeholdere
- Serveutstyr`,
    },
    {
      id: 'restaurant-mat-vg1-26-text-4',
      type: 'text',
      content: `**Service og presentasjon**

**Serverings former**:
- Sittende middag (à la assiett)
- Buffet
- Flying buffet (stående)
- Familie stil (fat på bordet)

**Presentasjon**:
- Ensartet utseende
- Alle får likt
- Pynt og dekor
- Temperatur

**Logistikk**:
- Transport av mat
- Oppvarming på stedet
- Rett utstyr
- Opprydding`,
    },
    {
      id: 'restaurant-mat-vg1-26-tip-1',
      type: 'tip',
      title: 'Testkjøring',
      content: `Test alltid menyen i produksjonsmengde før arrangementet. Dette avdekker utfordringer med timing, kapasitet og smak.`,
    },
    {
      id: 'restaurant-mat-vg1-26-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-26-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er catering?',
        solution: 'Levering og servering av mat til arrangementer utenfor eller inne i restauranten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-26-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-26-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor stor porsjon hovedrett til selskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig mengde.',
            solution: '200-250g',
            multipleChoiceOptions: [
              '200-250g',
              '100-150g',
              '300-400g',
              '50-100g',
            ],
          },
        ],
        solution: 'Hovedrett til selskap er typisk 200-250g per person.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-26-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-26-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal man beregne ekstra mat til buffet?',
        solution: 'Folk tar ofte litt ekstra, og det skal se rikelig ut hele tiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-26-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-26-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre viktige punkter i cateringplanlegging.',
        solution: 'Antall personer, budsjett og allergier/dietter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-26-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-26-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er flying buffet?',
        solution: 'Små retter som serveres stående, gjester går rundt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 27: Vegetarisk og vegansk mat
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_27: TextbookChapter = {
  id: 'restaurant-mat-vg1-27',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '27',
  title: 'Vegetarisk og vegansk mat',
  description: 'Lær om plantebasert kosthold og vegetarisk matlaging.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lage vegetariske retter',
    'forstå vegansk mat',
    'bruke planteprot einer',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-27-intro',
      type: 'text',
      content: `Plantebasert mat vokser i popularitet av helsemessige, etiske og miljømessige årsaker. Som kokk må du kunne lage gode vegetariske og veganske retter.`,
    },
    {
      id: 'restaurant-mat-vg1-27-def-1',
      type: 'definition',
      title: 'Veganer',
      content: `Veganer spiser ingen animalske produkter i det hele tatt - verken kjøtt, fisk, egg, melk eller honning.`,
    },
    {
      id: 'restaurant-mat-vg1-27-text-1',
      type: 'text',
      content: `**Forskjeller**

**Vegetar**:
- Ikke kjøtt eller fisk
- Spiser egg og melk
- Ost, yoghurt OK

**Veganer**:
- Ingen animalske produkter
- Ikke honning heller
- Plantebasert 100%

**Pescetarianer**:
- Spiser fisk
- Ikke kjøtt

**Flexitarianer**:
- Hovedsakelig vegetar
- Spiser kjøtt av og til`,
    },
    {
      id: 'restaurant-mat-vg1-27-text-2',
      type: 'text',
      content: `**Planteproteiner**

**Belgfrukter**:
- Bønner, linser, erter, kikkerter
- Høyt proteininnhold
- Fiber og næring
- Gryteretter, salater, hummus

**Tofu og tempeh**:
- Soyabasert
- Nøytralt, tar smak
- Sterk, grill, wok

**Seitan**:
- Hv etegluten
- Kjøttlignende tekstur
- Ikke for cøliakere

**Nøtter og frø**:
- Mandler, cashew, solsikkefrø
- Protein og sunt fett
- Nøttesmør, topping`,
    },
    {
      id: 'restaurant-mat-vg1-27-text-3',
      type: 'text',
      content: `**Vegetariske retter**

**Hovedretter**:
- Grønnsaks curry
- Pasta primavera
- Vegetar lasagne
- Falafel
- Vegetar burger

**Proteinalternativer**:
- Bruk belgfrukter som base
- Kombinere kornvarer og belgfrukter
- Nøtter og frø
- Varierte grønnsaker

**Smak og tekstur**:
- Krydder viktig
- Variasjon i konsistens
- Sprøtt, mykt, saftig
- Røsting gir dybde`,
    },
    {
      id: 'restaurant-mat-vg1-27-text-4',
      type: 'text',
      content: `**Vegansk matlaging**

**Erstatninger**:
- **Melk**: Havremelk, mandelmelk, soyamelk
- **Smør**: Plantemargarin, kokosolje
- **Egg** (baking): Linfrø, applesaus, "egg replacer"
- **Fløte**: Cashewkrem, kokosk rem
- **Ost**: Vegansk ost (ofte cashewbasert)

**Utfordringer**:
- Mindre proteinrik t
- B12-tilskudd anbefales
- Kreativitet kreves
- Merking viktig

**Tips**:
- Nutritional yeast (ostesmak)
- Aquafaba (kikkertvann som egghvite)
- Umami fra sopp og soya`,
    },
    {
      id: 'restaurant-mat-vg1-27-tip-1',
      type: 'tip',
      title: 'Kryssmitte',
      content: `Bruk egne redskaper og overflater til vegansk mat. Selv små spor av animalske produkter kan være problematisk for strengt veganer.`,
    },
    {
      id: 'restaurant-mat-vg1-27-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-27-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på vegetar og veganer?',
        solution: 'Vegetar spiser egg og melk, veganer spiser ingen animalske produkter i det hele tatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-27-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-27-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre planteproteiner.',
        solution: 'Bønner, tofu og linser (eller kikkerter, seitan, nøtter).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-27-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-27-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kan brukes som melkeerstatning?',
        solution: 'Havremelk, mandelmelk eller soyamelk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-27-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-27-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er tofu laget av?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig råvare.',
            solution: 'Soyabønner',
            multipleChoiceOptions: [
              'Soyabønner',
              'Hvetegluten',
              'Kikkerter',
              'Mandler',
            ],
          },
        ],
        solution: 'Tofu er laget av soyabønner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-27-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-27-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er kryssmitte viktig ved vegansk mat?',
        solution: 'Selv små spor av animalske produkter kan være problematisk for strengt veganer, både etisk og eventuelt helsemessig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 28: Lokal og kortreist mat
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_28: TextbookChapter = {
  id: 'restaurant-mat-vg1-28',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '28',
  title: 'Lokal og kortreist mat',
  description: 'Lær om lokale råvarer, kortreist mat og regional matkultur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til lokale produsenter',
    'forstå kortreist mat',
    'bruke regionale råvarer',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-28-intro',
      type: 'text',
      content: `Lokal og kortreist mat handler om å bruke råvarer fra nærmiljøet. Dette støtter lokale produsenter, reduserer transportutslipp og gir ferske råvarer med god smak.`,
    },
    {
      id: 'restaurant-mat-vg1-28-def-1',
      type: 'definition',
      title: 'Kortreist mat',
      content: `Kortreist mat er råvarer produsert i nærheten av der de konsumeres, ofte definert som innenfor 250 km. Reduserer transport og støtter lokalt.`,
    },
    {
      id: 'restaurant-mat-vg1-28-text-1',
      type: 'text',
      content: `**Fordeler med lokal mat**

**Miljø**:
- Mindre transport
- Lavere klimagassutslipp
- Sesongbasert produksjon
- Mindre emballasje

**Kvalitet**:
- Ferske råvarer
- Kortere tid fra jord til bord
- Bedre smak
- Optimal modning

**Økonomi**:
- Støtter lokale produsenter
- Arbeidsplasser i distriktet
- Penger blir lokalt
- Styrker lokalsamfunn`,
    },
    {
      id: 'restaurant-mat-vg1-28-text-2',
      type: 'text',
      content: `**Finne lokale produsenter**

**Matkulturnettverk**:
- Lokale matprodusenter
- Gårdsbutikker
- Bondemarkeder
- Matfestivaler

**Samarbeid**:
- Besøk gårder
- Bygg relasjoner
- Forstå produksjon
- Tilpass meny etter tilgang

**Sesong**:
- Hva vokser når?
- Planlegg meny etter sesong
- Variasjon gjennom året
- Konserver for vinteren`,
    },
    {
      id: 'restaurant-mat-vg1-28-text-3',
      type: 'text',
      content: `**Regional matkultur**

**Vestlandet**:
- Fisk og sjømat
- Sau og geit
- Frukt og bær
- Geitost, rakfisk

**Østlandet**:
- Korn og poteter
- Melk og ost
- Grønnsaker
- Flatbrød

**Trøndelag**:
- Laks
- Rømmegrøt
- Spekemat
- Kv itost

**Nord-Norge**:
- Torsk, sei
- Rein
- Molter, tyttebær
- Stockfish`,
    },
    {
      id: 'restaurant-mat-vg1-28-text-4',
      type: 'text',
      content: `**Markedsføring**

**Fortell historien**:
- Hvem er produsenten?
- Hvordan produseres maten?
- Hva gjør den spesiell?
- Lokalt engasjement

**På menyen**:
- "Lokalprodusentens lam"
- "Tomater fra X gård"
- Bilde av produsent
- Åpenhet og ærlighet

**Sporing**:
- Full sporbarhet
- Dokumentasjon
- Ekte lokalmat
- Ikke "grønnvasking"`,
    },
    {
      id: 'restaurant-mat-vg1-28-tip-1',
      type: 'tip',
      title: 'Matmanifest',
      content: `Noen restauranter lager et matmanifest der de forplikter seg til lokalmat, bærekraft og gode råvarer. Dette kommuniserer verdier til gjestene.`,
    },
    {
      id: 'restaurant-mat-vg1-28-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-28-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kortreist mat?',
        solution: 'Råvarer produsert nært der de konsumeres, ofte innenfor 250 km.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-28-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-28-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre fordeler med lokal mat.',
        solution: 'Mindre transport, ferske råvarer og støtte til lokale produsenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-28-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-28-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er typisk for matkultur på Vestlandet?',
        solution: 'Fisk, sjømat, sau og geitost.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-28-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-28-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å fortelle historien om lokale produsenter?',
        solution: 'Skaper engasjement, verdi og forståelse for maten, og støtter produsentens arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

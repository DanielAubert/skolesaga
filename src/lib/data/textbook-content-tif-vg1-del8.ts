/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 8: Yrkesliv og bærekraft
 *
 * Kapittel 8.1-8.6
 * Dekker LK20 kompetansemål for yrkesliv, bærekraft og karriere
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ===== KAPITTEL 8.1: Yrker i teknologi- og industrifag =====
const CHAPTER_8_1: TextbookChapter = {
  id: 'tif-vg1-8-1',
  courseId: 'tif-vg1',
  chapterNumber: '8.1',
  title: 'Yrker i teknologi- og industrifag',
  description: 'Lær om ulike yrkesveier og karrieremuligheter.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-1-intro',
      type: 'text',
      content: `# Yrker i teknologi- og industrifag

Teknologi- og industrifag gir mange spennende yrkesmuligheter. Fra tradisjonelle håndverksfag til høyteknologiske spesialiseringer - karrieremulighetene er mange. I dette kapittelet får du oversikt over ulike yrkesveier og hva de innebærer.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Beskrive hovedområdene i teknologi- og industrifag
- Kjenne til ulike fagbrev og yrkesveier
- Forstå utdanningsløpet mot fagbrev
- Reflektere over egne interesser og muligheter`,
    },
    {
      id: 'tif-vg1-8-1-omrader',
      type: 'text',
      content: `## Hovedområder

### Industrimekaniker
Monterer, vedlikeholder og reparerer industrimaskiner og produksjonsutstyr. Jobber med mekanikk, hydraulikk og pneumatikk.

### Sveisefag
Sammenføyer metall med ulike sveisemetoder. Jobber i verft, offshore, bygg og industri.

### CNC-operatør/programmerer
Programmerer og opererer datastyrt produksjonsutstyr. Dreiebenker, fresemaskiner, laserskjærere.

### Plate- og sveisearbeider
Klipper, bøyer og sveiser metallplater til konstruksjoner. Jobber med alt fra ventilasjon til skip.

### Børsemaker
Lager og reparerer håndvåpen. Kombinerer tradisjonelt håndverk med moderne teknologi.`,
    },
    {
      id: 'tif-vg1-8-1-flere',
      type: 'text',
      content: `## Flere yrkesområder

### Industrirørlegger
Installerer og vedlikeholder rørsystemer i industri. Prosessanlegg, kraftverk, offshore.

### Finmekaniker
Presisjonsproduksjon av små komponenter. Medisinskteknisk utstyr, instrumenter, klokker.

### Verktøymaker
Lager verktøy, støpeformer og fikstur for produksjon. Høy presisjon og avansert teknologi.

### NDT-inspektør (ikke-destruktiv testing)
Kontrollerer materialer og sveiser uten å ødelegge dem. Røntgen, ultralyd, magnetpulver.

### Automatiker
Monterer og programmerer automatiserte systemer. Roboter, PLS-styring, sensorer.`,
    },
    {
      id: 'tif-vg1-8-1-utdanning',
      type: 'text',
      content: `## Utdanningsløpet

### Yrkesfaglig løp (2+2)

**VG1**: Teknologi- og industrifag (fellesfag)

**VG2**: Velg spesialisering:
- Industriteknologi
- Kjemiprosess
- Laboratoriefag
- Maritime fag

**Læretid**: 2 år i bedrift
- Praktisk opplæring
- Fagprøve til slutt
- Fagbrev

### Påbygging til studiekompetanse
Etter VG2 eller fagbrev kan du ta påbygging og studere videre.

### Fagskole
Etter fagbrev kan du ta 1-2 års fagskoleutdanning og bli tekniker.`,
    },
    {
      id: 'tif-vg1-8-1-ex1',
      type: 'text',
      content: `### Eksempel: Karrierevei som industrimekaniker

**Ole, 28 år - Industrimekaniker på papierfabrikk**

**Utdanning**:
- VG1 Teknologi- og industrifag
- VG2 Industriteknologi
- 2 år læretid på papierfabrikk
- Fagbrev som industrimekaniker

**Videre utvikling**:
- 3 års erfaring som fagarbeider
- Fagskole (tekniker) på kveldstid
- Nå produksjonsleder med personalansvar

**Arbeidsdag**:
- Feilsøking på maskiner
- Planlegge vedlikehold
- Lede et team på 4 mekanikere
- Prosjekter for forbedring

**Tips**: "Start med å bli god i faget, så åpner dørene seg!"`,
    },
    {
      id: 'tif-vg1-8-1-arbeidsmarked',
      type: 'text',
      content: `## Arbeidsmarkedet

### Hvem ansetter?
- Industribedrifter
- Offshoreindustri
- Verft og skipsindustri
- Bygg og anlegg
- Service og vedlikehold
- Offentlig sektor (forsvar, bane)

### Lønn (2024-nivå)
| Erfaring | Typisk årslønn |
|----------|----------------|
| Lærling | ca. 200 000 - 350 000 kr |
| Nyutdannet fagarbeider | ca. 450 000 - 550 000 kr |
| Erfaren fagarbeider | ca. 550 000 - 700 000 kr |
| Tekniker/arbeidsleder | ca. 600 000 - 800 000 kr |

### Fremtidsutsikter
- God etterspørsel etter fagarbeidere
- Økt automatisering krever ny kompetanse
- Grønn omstilling gir nye muligheter`,
    },
    {
      id: 'tif-vg1-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Teknologi- og industrifag gir mange yrkesmuligheter
- Yrker: Industrimekaniker, sveiser, CNC-operatør, verktøymaker m.fl.
- Utdanningsløp: 2 år skole + 2 år lære = fagbrev
- Videreutdanning: Påbygging, fagskole, høyskole
- Godt arbeidsmarked og konkurransedyktig lønn
- Velg ut fra dine interesser og styrker
- Praktisk arbeid kombinert med teori og teknologi`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-1-oppg1',
      number: '8.1.1',
      type: 'multiple-choice',
      task: 'Hvor lang er læretiden i bedrift for de fleste fagbrev i teknologi- og industrifag?',
      options: [
        { id: 'a', text: '1 år', isCorrect: false },
        { id: 'b', text: '2 år', isCorrect: true },
        { id: 'c', text: '3 år', isCorrect: false },
        { id: 'd', text: '4 år', isCorrect: false },
      ],
      solution: 'Læretiden i bedrift er vanligvis 2 år. Sammen med 2 år på skole (VG1 + VG2) gir dette det klassiske 2+2-løpet som fører til fagbrev.',
    },
    {
      id: 'tif-vg1-8-1-oppg2',
      number: '8.1.2',
      type: 'classic',
      task: 'Beskriv tre forskjellige yrker du kan velge etter VG1 Teknologi- og industrifag.',
      solution: '1) Industrimekaniker: Monterer, vedlikeholder og reparerer industrimaskiner. Jobber med mekanikk, hydraulikk, pneumatikk. Typiske arbeidsplasser: Fabrikker, prosessindustri, offshore. 2) Sveiser: Sammenføyer metall med ulike sveisemetoder (MIG, TIG, MMA). Jobber i verft, offshore, bygg og verksteder. Kan spesialisere seg og ta sertifiseringer. 3) CNC-operatør: Programmerer og betjener datastyrt produksjonsutstyr. Jobber med dreiing, fresing, laserskjæring. Teknologiorientert yrke med god lønn.',
    },
    {
      id: 'tif-vg1-8-1-oppg3',
      number: '8.1.3',
      type: 'classic',
      task: 'Hva er forskjellen mellom å ta påbygging til studiekompetanse og å gå på fagskole etter fagbrev?',
      solution: 'Påbygging til studiekompetanse: Et år med allmennfaglig påbygging som gir generell studiekompetanse. Kvalifiserer for opptak til høyskoler og universiteter. Gir bredde, men ikke faglig fordypning. Fagskole: Typisk 1-2 års utdanning innen ditt fagområde etter fagbrev. Gir tittelen tekniker. Praktisk og yrkesorientert, fordyper i faget (f.eks. maskinteknikk, CNC, vedlikehold). Kvalifiserer for fagskoleutdanninger, noen kan gi overgang til ingeniørstudier.',
    },
    {
      id: 'tif-vg1-8-1-oppg4',
      number: '8.1.4',
      type: 'classic',
      task: 'Hvilke ferdigheter og interesser tror du er viktige for å trives i industrifag? Nevn minst fire.',
      solution: 'Viktige ferdigheter og interesser: 1) Praktisk anlagt - liker å jobbe med hendene og se fysiske resultater. 2) Teknisk interesse - nysgjerrig på hvordan ting fungerer, maskiner og systemer. 3) Problemløsning - evne til å finne løsninger når noe ikke fungerer. 4) Nøyaktighet - oppmerksomhet på detaljer, toleranser og kvalitet. 5) Interesse for matematikk/fysikk - grunnleggende forståelse hjelper. 6) Teamarbeid - jobbe godt sammen med andre. 7) Sikkerhetsfokus - ta HMS på alvor. 8) Læringsvilje - teknologien utvikler seg stadig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-1-oppg5',
      number: '8.1.5',
      type: 'classic',
      task: 'Du har nettopp begynt på VG1 Teknologi- og industrifag. Lag en plan for veien mot ditt drømmeyrke - hvilke valg må du ta de neste årene?',
      solution: 'Eksempel på karriereplan mot industrimekaniker: VG1 (nå): Jobbe godt i alle fag, få praktisk erfaring, vurdere interesser. VG2: Velge Industriteknologi som programområde. Søke sommerjobb i industribedrift. Få kontakter. LÆRETID (2 år): Søke lærlingplass tidlig (i VG2). Jobbe hos bedrift med godt omdømme. Lære så mye som mulig, ta initiativ. FAGPRØVE: Forberede seg godt, bestå praktisk og teoretisk prøve. Få fagbrev. VIDERE: 2-3 år som fagarbeider for å bygge erfaring. Vurdere fagskole/tekniker for lederansvar. Eventuelt: Spesialisering (offshore, vedlikehold) eller påbygging for videre studier. TIPS: Bruk utplasseringer og besøk bedrifter for å finne ut hva som passer deg.',
    },
    {
      id: 'tif-vg1-8-1-oppg6',
      number: '8.1.6',
      type: 'classic',
      task: 'Intervju en person som jobber i industrien (familie, bekjent eller under utplassering). Still minst fem spørsmål om yrket deres og skriv et kort sammendrag.',
      solution: 'Foreslåtte spørsmål for intervju: 1) Hva heter yrket ditt, og hva går jobben ut på i praksis? 2) Hvilken utdanning/bakgrunn har du? 3) Hva liker du best med jobben din? 4) Hva er utfordrende? 5) Hvilke råd vil du gi til en som vurderer dette yrket? 6) Hvordan ser en typisk arbeidsdag ut? 7) Hvordan har yrket endret seg de siste årene? 8) Hvilke muligheter er det for videreutvikling/karriere? SAMMENDRAG: Skriv 100-150 ord der du oppsummerer svarene og reflekterer over om dette yrket kan passe for deg.',
    },
  ],
  keyTerms: [
    'yrkesfag',
    'fagbrev',
    'læretid',
    '2+2-modell',
    'industrimekaniker',
    'sveiser',
    'CNC-operatør',
    'verktøymaker',
    'fagskole',
    'påbygging',
    'studiekompetanse',
    'tekniker',
  ],
  competenceGoals: [
    'reflektere over valg av utdanning og yrke innenfor teknologi- og industrifag',
    'gjøre rede for yrkesmuligheter innenfor teknologi- og industrifag',
  ],
};

// ===== KAPITTEL 8.2: Arbeidslivskunnskap =====
const CHAPTER_8_2: TextbookChapter = {
  id: 'tif-vg1-8-2',
  courseId: 'tif-vg1',
  chapterNumber: '8.2',
  title: 'Arbeidslivskunnskap',
  description: 'Lær om rettigheter, plikter og den norske modellen.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-2-intro',
      type: 'text',
      content: `# Arbeidslivskunnskap

Som arbeidstaker har du både rettigheter og plikter. Det norske arbeidslivet er organisert etter "den norske modellen" med samarbeid mellom arbeidsgivere, arbeidstakere og myndigheter. I dette kapittelet lærer du grunnleggende arbeidslivskunnskap.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare den norske modellen
- Kjenne til arbeidstakers rettigheter og plikter
- Forstå arbeidskontrakt og lønnsslipp
- Beskrive fagforeningenes rolle`,
    },
    {
      id: 'tif-vg1-8-2-modell',
      type: 'text',
      content: `## Den norske modellen

### Trepartssamarbeidet

**Den norske modellen** bygger på samarbeid mellom:
1. **Arbeidstakere** (fagforeninger, LO m.fl.)
2. **Arbeidsgivere** (NHO, Virke m.fl.)
3. **Staten** (lovgiver, mekler)

### Hovedavtalen

Hovedavtalen mellom LO og NHO kalles "arbeidslivets grunnlov":
- Regler for samarbeid
- Tillitsvalgtes rettigheter
- Forhandlingsregler
- Konfliktløsning

### Tariffavtaler

- Avtaler mellom fagforeninger og arbeidsgiverforeninger
- Regulerer lønn, arbeidstid, tillegg
- Forhandles vanligvis hvert annet år
- Ved uenighet: Mekling, evt. streik/lockout`,
    },
    {
      id: 'tif-vg1-8-2-rettigheter',
      type: 'text',
      content: `## Rettigheter og plikter

### Arbeidstakers rettigheter

| Rettighet | Beskrivelse |
|-----------|-------------|
| Skriftlig kontrakt | Innen en måned |
| Lønn | Minimum tariff/lovfestet |
| Arbeidstid | Maks 9t/dag, 40t/uke |
| Overtidsbetaling | Minst 40% tillegg |
| Ferie | Minst 25 virkedager |
| Sykepenger | Fra dag 1 |
| Oppsigelsesrett | Med oppsigelsestid |
| Trygt arbeidsmiljø | Etter AML |

### Arbeidstakers plikter

- Møte til avtalt tid
- Utføre arbeidet etter beste evne
- Følge regler og instrukser
- Være lojal mot arbeidsgiver
- Melde fra om fravær
- Overholde taushetsplikt`,
    },
    {
      id: 'tif-vg1-8-2-kontrakt',
      type: 'text',
      content: `## Arbeidskontrakt

En arbeidskontrakt skal inneholde:

1. Partenes navn og adresse
2. Arbeidssted
3. Stillingsbeskrivelse
4. Tiltredelsesdato
5. Varighet (fast/midlertidig)
6. Prøvetid (maks 6 mnd)
7. Arbeidstid
8. Lønn og tillegg
9. Ferie og feriepenger
10. Oppsigelsesfrister
11. Pensjonsordning
12. Tariffavtale (hvis aktuelt)

### Tips
- Les kontrakten nøye før du signerer
- Spør om det du ikke forstår
- Behold en kopi`,
    },
    {
      id: 'tif-vg1-8-2-ex1',
      type: 'text',
      content: `### Eksempel: Forstå lønnslippen

En lærling mottar lønnsslipp:

| Post | Beløp |
|------|-------|
| Grunnlønn (80% av fagarbeider) | 28 000 |
| Skifttillegg | 2 500 |
| **Bruttolønn** | **30 500** |
| Skatt (28%) | -8 540 |
| Fagforeningskontingent | -450 |
| Pensjonsinnskudd (2%) | -610 |
| **Nettolønn (utbetalt)** | **20 900** |

**Viktige begreper:**
- **Bruttolønn**: Lønn før trekk
- **Nettolønn**: Det du får utbetalt
- **Skatt**: Trekkes og sendes til staten
- **Feriepenger**: Settes av (10,2%/12% av bruttolønn)`,
    },
    {
      id: 'tif-vg1-8-2-fagforening',
      type: 'text',
      content: `## Fagforeninger

### Hva er en fagforening?

En **fagforening** er en sammenslutning av arbeidstakere som arbeider for medlemmenes interesser.

### Hva gjør fagforeningene?

- Forhandler lønn og arbeidsvilkår
- Gir juridisk bistand
- Tilbyr kurs og kompetanseheving
- Representerer medlemmer i konflikter
- Politisk påvirkning

### De største i industri

| Forbund | Tilknytning |
|---------|-------------|
| Fellesforbundet | LO |
| Industri Energi | LO |
| Parat | YS |
| NITO | Uavhengig |

### Hvorfor bli medlem?

- Støtte ved konflikt
- Juridisk hjelp
- Forsikringsordninger
- Kurs og utdanning
- Påvirkning på arbeidsplassen`,
    },
    {
      id: 'tif-vg1-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Den norske modellen**: Samarbeid mellom arbeidstakere, arbeidsgivere og stat
- **Tariffavtaler** regulerer lønn og vilkår
- Arbeidstaker har **rettigheter** (lønn, ferie, trygghet) og **plikter** (oppmøte, innsats, lojalitet)
- **Arbeidskontrakt** skal være skriftlig og inneholde viktig informasjon
- **Lønnsslippen** viser bruttolønn, trekk og nettolønn
- **Fagforeninger** forhandler og bistår medlemmer
- Sett deg inn i dine rettigheter - det er viktig!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-2-oppg1',
      number: '8.2.1',
      type: 'multiple-choice',
      task: 'Hvem er de tre partene i "den norske modellen"?',
      options: [
        { id: 'a', text: 'Arbeidsgivere, banker og myndigheter', isCorrect: false },
        { id: 'b', text: 'Arbeidstakere, arbeidsgivere og staten', isCorrect: true },
        { id: 'c', text: 'Fagforeninger, politikere og media', isCorrect: false },
        { id: 'd', text: 'Bedrifter, kunder og leverandører', isCorrect: false },
      ],
      solution: 'Den norske modellen bygger på trepartssamarbeid mellom arbeidstakere (representert ved fagforeninger), arbeidsgivere (representert ved arbeidsgiverforeninger) og staten (lovgiver og mekler).',
    },
    {
      id: 'tif-vg1-8-2-oppg2',
      number: '8.2.2',
      type: 'classic',
      task: 'Nevn fem ting en arbeidskontrakt skal inneholde ifølge loven.',
      solution: '1) Partenes navn og adresse - hvem er arbeidsgiver og arbeidstaker. 2) Arbeidssted - hvor skal arbeidet utføres. 3) Stillingsbeskrivelse - hva arbeidet går ut på. 4) Tiltredelsesdato - når arbeidsforholdet starter. 5) Lønn og tillegg - hva du får betalt. Andre viktige punkter: arbeidstid, ferie, prøvetid, oppsigelsesfrister, pensjonsordning.',
    },
    {
      id: 'tif-vg1-8-2-oppg3',
      number: '8.2.3',
      type: 'classic',
      task: 'Forklar forskjellen mellom bruttolønn og nettolønn.',
      solution: 'Bruttolønn er lønnen før alle trekk - det arbeidsgiver betaler for arbeidet ditt. Den inkluderer grunnlønn og eventuelle tillegg (skifttillegg, overtid osv.). Nettolønn er det du faktisk får utbetalt - det som kommer inn på konto. Nettolønn = Bruttolønn minus trekk (skatt, fagforeningskontingent, pensjonsinnskudd osv.). Eksempel: Bruttolønn 40 000 kr, skatt 30% = 12 000 kr, andre trekk 1 500 kr. Nettolønn = 40 000 - 12 000 - 1 500 = 26 500 kr.',
    },
    {
      id: 'tif-vg1-8-2-oppg4',
      number: '8.2.4',
      type: 'classic',
      task: 'Gi tre eksempler på arbeidstakers rettigheter og tre eksempler på plikter.',
      solution: 'Rettigheter: 1) Rett til skriftlig arbeidskontrakt. 2) Rett til minst 25 virkedagers ferie per år. 3) Rett til overtidsbetaling (minst 40% tillegg) for arbeid ut over normal arbeidstid. 4) Rett til trygt arbeidsmiljø. Plikter: 1) Plikt til å møte på jobb til avtalt tid. 2) Plikt til å utføre arbeidet etter beste evne og følge instrukser. 3) Plikt til å melde fra ved sykdom eller annet fravær. 4) Plikt til å være lojal mot arbeidsgiver.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-2-oppg5',
      number: '8.2.5',
      type: 'classic',
      task: 'En venn spør hvorfor han bør bli medlem i en fagforening. Gi minst fire gode argumenter.',
      solution: 'Argumenter for fagforeningsmedlemskap: 1) Lønn og vilkår - fagforeninger forhandler frem bedre lønns- og arbeidsvilkår enn du klarer alene. 2) Juridisk hjelp - får gratis juridisk bistand i arbeidskonflikter, oppsigelser osv. 3) Trygghet ved konflikt - støtte og økonomisk hjelp ved streik. 4) Forsikringer - mange fagforeninger tilbyr gode forsikringsordninger for medlemmer. 5) Påvirkning - får være med å påvirke hvordan arbeidsplassen styres gjennom tillitsvalgte. 6) Kurs og utvikling - tilgang til kompetanseheving og kurs. 7) Solidaritet - står sterkere sammen enn alene.',
    },
    {
      id: 'tif-vg1-8-2-oppg6',
      number: '8.2.6',
      type: 'classic',
      task: 'Du har fått tilbud om lærlingplass. Arbeidsgiver gir deg en kontrakt å signere. Hva bør du sjekke at kontrakten inneholder, og hva bør du gjøre før du signerer?',
      solution: 'Sjekkliste før signering: INNHOLD SOM MÅ VÆRE MED: 1) Riktig navn på deg og lærebedriften. 2) Stillingsbeskrivelse som lærling i ditt fag. 3) Startdato og læretidens lengde. 4) Lønn (lærlinglønn, progresjonslønn). 5) Arbeidstid og arbeidssted. 6) Prøvetid (vanligvis 6 mnd). 7) Tariffavtale (om det gjelder). 8) Ansvarlig for opplæring. FØR DU SIGNERER: 1) Les hele kontrakten nøye. 2) Spør om alt du ikke forstår. 3) Sjekk at lønnen er i henhold til tariff. 4) Snakk med opplæringskontoret om du er usikker. 5) Ta gjerne med kontrakten hjem og les i ro. 6) Behold en kopi selv.',
    },
  ],
  keyTerms: [
    'den norske modellen',
    'trepartssamarbeid',
    'tariffavtale',
    'fagforening',
    'arbeidskontrakt',
    'rettigheter',
    'plikter',
    'bruttolønn',
    'nettolønn',
    'oppsigelse',
    'tillitsvalgt',
    'hovedavtalen',
  ],
  competenceGoals: [
    'gjøre rede for arbeidstakerens og arbeidsgiverens rettigheter og plikter',
    'reflektere over yrkesetiske retningslinjer og verdivalg',
  ],
};

// ===== KAPITTEL 8.3: Bærekraft i industrien =====
const CHAPTER_8_3: TextbookChapter = {
  id: 'tif-vg1-8-3',
  courseId: 'tif-vg1',
  chapterNumber: '8.3',
  title: 'Bærekraft i industrien',
  description: 'Lær om miljøutfordringer og bærekraftig produksjon.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-3-intro',
      type: 'text',
      content: `# Bærekraft i industrien

Industrien står overfor store utfordringer med å redusere miljøbelastningen samtidig som produktiviteten opprettholdes. I dette kapittelet lærer du om bærekraftig produksjon, sirkulær økonomi og hva du som fagarbeider kan bidra med.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva bærekraft betyr i industriell sammenheng
- Beskrive utfordringer og muligheter for grønn omstilling
- Kjenne til prinsippene for sirkulær økonomi
- Reflektere over eget bidrag til bærekraft`,
    },
    {
      id: 'tif-vg1-8-3-barekraft',
      type: 'text',
      content: `## Hva er bærekraft?

### FNs bærekraftsmål

FNs 17 bærekraftsmål gir retning for en bærekraftig utvikling. For industrien er spesielt disse viktige:
- Mål 9: Innovasjon og infrastruktur
- Mål 12: Ansvarlig forbruk og produksjon
- Mål 13: Stoppe klimaendringene

### De tre dimensjonene

**Bærekraft** balanserer tre dimensjoner:
1. **Miljømessig**: Redusere forurensning, bevare ressurser
2. **Økonomisk**: Lønnsom virksomhet
3. **Sosial**: Gode arbeidsforhold, samfunnsansvar

### Industriens utfordringer

- Store klimagassutslipp
- Høyt energiforbruk
- Avfall og forurensning
- Ressursknapphet
- Krav fra kunder og myndigheter`,
    },
    {
      id: 'tif-vg1-8-3-omstilling',
      type: 'text',
      content: `## Grønn omstilling

### Hva innebærer grønn omstilling?

**Grønn omstilling** handler om å endre industrien i en mer bærekraftig retning:

| Område | Tradisjonelt | Grønt |
|--------|--------------|-------|
| Energi | Fossil | Fornybar |
| Materialer | Jomfruelige | Resirkulerte |
| Produkt | Bruk og kast | Design for gjenbruk |
| Produksjon | Ressurskrevende | Ressurseffektiv |
| Transport | Diesel/bensin | Elektrisk/hydrogen |

### Norsk industri i omstilling

- Hydrogen til stålproduksjon
- Batteriproduksjon
- Karbonfangst
- Havvind
- Gjenvinningsindustri`,
    },
    {
      id: 'tif-vg1-8-3-sirkuler',
      type: 'text',
      content: `## Sirkulær økonomi

### Fra lineær til sirkulær

**Lineær økonomi**: Ta ut ressurser → Produser → Bruk → Kast

**Sirkulær økonomi**: Ressursene holdes i omløp lengst mulig

### Prinsippene

1. **Reduser** - Bruk mindre materialer og energi
2. **Gjenbruk** - Bruk produkter om igjen
3. **Reparer** - Fiks i stedet for å kaste
4. **Redesign** - Lag produkter som varer og kan demonteres
5. **Resirkuler** - Bruk materialer på nytt

### Eksempler i industri

- Resirkulert stål og aluminium
- Gjenbruk av skjærevæske
- Resirkulering av kapp og avfall
- Redesign av produkter for enklere reparasjon`,
    },
    {
      id: 'tif-vg1-8-3-ex1',
      type: 'text',
      content: `### Eksempel: Bærekraft hos Hydro Aluminium

**Utfordring**: Aluminiumsproduksjon krever mye energi.

**Tiltak Hydro har gjort:**

1. **Fornybar energi**: Bruker vannkraft (lavkarbon aluminium)
2. **Resirkulering**: Samler inn og resirkulerer aluminium (75% mindre energi enn nyproduksjon)
3. **Prosessoptimering**: Redusert energiforbruk per tonn
4. **Produktdesign**: Lager lettere profiler som sparer drivstoff i biler
5. **Mål**: Karbonnøytral innen 2050

**Resultat**: Lavkarbon aluminium selges til premium pris - bærekraft er konkurransefortrinn!`,
    },
    {
      id: 'tif-vg1-8-3-bidrag',
      type: 'text',
      content: `## Ditt bidrag til bærekraft

### Som fagarbeider kan du bidra ved:

**Ressurser**:
- Reduser materialsvinn
- Sorter avfall riktig
- Slå av maskiner som ikke er i bruk
- Bruk skjærevæske og oljer effektivt

**Kvalitet**:
- Lag produkter riktig første gang (unngå vrak)
- Vedlikehold utstyr for lang levetid
- Foreslå forbedringer

**Energi**:
- Slå av lys og utstyr
- Unngå tomgangskjøring
- Rapporter energisløsing

**Innovasjon**:
- Kom med forbedringsforslag
- Tenk på miljø i alt du gjør
- Del kunnskap med kolleger`,
    },
    {
      id: 'tif-vg1-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Bærekraft** balanserer miljø, økonomi og sosiale hensyn
- Industrien må gjennom **grønn omstilling**
- **Sirkulær økonomi**: Hold ressurser i omløp lengst mulig
- Prinsippene: Reduser, Gjenbruk, Reparer, Redesign, Resirkuler
- Bærekraft kan gi konkurransefortrinn
- Alle kan bidra - fra fagarbeider til direktør
- Små tiltak i hverdagen gjør stor forskjell samlet`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-3-oppg1',
      number: '8.3.1',
      type: 'multiple-choice',
      task: 'Hva er hovedforskjellen mellom lineær og sirkulær økonomi?',
      options: [
        { id: 'a', text: 'Sirkulær økonomi er dyrere enn lineær', isCorrect: false },
        { id: 'b', text: 'I sirkulær økonomi holdes ressurser i omløp lengst mulig', isCorrect: true },
        { id: 'c', text: 'Lineær økonomi bruker bare fornybar energi', isCorrect: false },
        { id: 'd', text: 'Sirkulær økonomi handler bare om resirkulering', isCorrect: false },
      ],
      solution: 'I sirkulær økonomi holdes ressurser i omløp lengst mulig gjennom reduksjon, gjenbruk, reparasjon og resirkulering. Lineær økonomi følger "ta-produser-kast"-modellen.',
    },
    {
      id: 'tif-vg1-8-3-oppg2',
      number: '8.3.2',
      type: 'classic',
      task: 'Forklar de tre dimensjonene av bærekraft med eksempler fra industrien.',
      solution: '1) Miljømessig bærekraft: Redusere utslipp og forurensning, bruke fornybar energi, minimere avfall, resirkulere materialer. Eksempel: Bruke vannkraft i stedet for kull til produksjon. 2) Økonomisk bærekraft: Drives lønnsomt over tid, skape verdier, innovere. Eksempel: Energieffektivisering som sparer penger og miljø. 3) Sosial bærekraft: Trygge arbeidsplasser, gode arbeidsforhold, bidra til lokalsamfunnet. Eksempel: Sikre fagopplæring og HMS. Alle tre dimensjonene må balanseres for at industrien skal være bærekraftig over tid.',
    },
    {
      id: 'tif-vg1-8-3-oppg3',
      number: '8.3.3',
      type: 'classic',
      task: 'Gi tre eksempler på hvordan du som fagarbeider kan bidra til bærekraft i hverdagen.',
      solution: '1) Ressurser: Planlegge kapping for å minimere materialsvinn, sortere metallavfall riktig for resirkulering, bruke akkurat nok skjærevæske. 2) Energi: Slå av maskiner som ikke brukes, rapportere energilekkasjer eller ineffektivt utstyr, bruke strømsparende innstillinger. 3) Kvalitet: Produsere riktig første gang for å unngå vrak og omarbeid, vedlikeholde utstyr for å forlenge levetiden, foreslå forbedringer i prosesser som reduserer svinn.',
    },
    {
      id: 'tif-vg1-8-3-oppg4',
      number: '8.3.4',
      type: 'classic',
      task: 'Hvorfor bruker resirkulert aluminium så mye mindre energi enn nyprodusert aluminium?',
      solution: 'Nyproduksjon av aluminium fra bauxitt (aluminiummalm) krever enorme mengder elektrisitet for elektrolyseprosessen - ca. 15 000 kWh per tonn. Resirkulering av aluminium krever bare omsmelting av metallet, som bruker bare ca. 5% av energien (ca. 750 kWh per tonn). Dette er fordi: 1) Bauxitt må først raffineres til aluminiumoksid (energikrevende). 2) Aluminiumoksid må elektrolyseres til rent aluminium (svært energikrevende). 3) Ved resirkulering smeltes allerede rent aluminium direkte. Derfor er resirkulert aluminium både billigere og mye mer miljøvennlig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-3-oppg5',
      number: '8.3.5',
      type: 'classic',
      task: 'Et verksted produserer ståldeler og kaster årlig 2 tonn stålrester i restavfall. Foreslå tiltak for å gjøre avfallshåndteringen mer bærekraftig og kalkuler potensiell miljøgevinst.',
      solution: 'Tiltak: 1) Sortering: Skill stålrester fra restavfall i egen kontainer. 2) Avtale: Inngå avtale med metallgjenvinningsselskap om henting. 3) Intern gjenbruk: Sjekk om noe kan brukes til andre produkter internt. 4) Optimalisering: Analyser kappeplaner for å redusere svinn i utgangspunktet. MILJØGEVINST: Resirkulert stål sparer ca. 1,5 tonn CO₂ per tonn stål sammenlignet med nyproduksjon. 2 tonn stål × 1,5 = 3 tonn CO₂ spart årlig. I tillegg: Sparte deponikostnader (restavfall er dyrt), mulig inntekt fra salg av metall, bedre miljøprofil for bedriften.',
    },
    {
      id: 'tif-vg1-8-3-oppg6',
      number: '8.3.6',
      type: 'classic',
      task: 'Grønn omstilling skaper både muligheter og utfordringer for industrien. Diskuter minst tre av hver.',
      solution: 'MULIGHETER: 1) Nye markeder - etterspørsel etter grønne produkter og tjenester (batterier, havvind, resirkulering). 2) Konkurransefortrinn - lavkarbon-produkter kan selges til høyere pris. 3) Lavere kostnader over tid - energieffektivisering og ressurssparing gir besparelser. 4) Innovasjon - press til omstilling driver ny teknologiutvikling. 5) Finansiering - grønne prosjekter får lettere tilgang på kapital. UTFORDRINGER: 1) Høye investeringskostnader i ny teknologi. 2) Usikkerhet om teknologivalg - hva blir standarden? 3) Kompetansebehov - ansatte må læres opp i nye prosesser. 4) Konkurranse fra land med lavere miljøkrav. 5) Omstillingstempo - kravene kommer raskere enn teknologien modnes.',
    },
  ],
  keyTerms: [
    'bærekraft',
    'FNs bærekraftsmål',
    'grønn omstilling',
    'sirkulær økonomi',
    'lineær økonomi',
    'klimagassutslipp',
    'resirkulering',
    'gjenbruk',
    'fornybar energi',
    'ressurseffektivitet',
  ],
  competenceGoals: [
    'gjøre rede for hvordan egen yrkesutøvelse kan bidra til bærekraftig utvikling',
    'reflektere over hvordan teknologisk utvikling påvirker arbeidsoppgaver og arbeidsprosesser',
  ],
};

// ===== KAPITTEL 8.4: Miljø og avfall =====
const CHAPTER_8_4: TextbookChapter = {
  id: 'tif-vg1-8-4',
  courseId: 'tif-vg1',
  chapterNumber: '8.4',
  title: 'Miljø og avfall',
  description: 'Lær om avfallshåndtering, sortering og miljøkrav.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-4-intro',
      type: 'text',
      content: `# Miljø og avfall

Riktig håndtering av avfall er viktig for miljøet og lovpålagt for bedrifter. I dette kapittelet lærer du om avfallssortering, farlig avfall og miljøstyring i industri.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Sortere avfall riktig på arbeidsplassen
- Identifisere og håndtere farlig avfall
- Kjenne til miljøsertifiseringer og krav
- Forstå ansvaret for miljøriktig avfallshåndtering`,
    },
    {
      id: 'tif-vg1-8-4-sortering',
      type: 'text',
      content: `## Avfallssortering i industri

### Vanlige avfallstyper

| Type | Eksempler | Håndtering |
|------|-----------|------------|
| Metall | Stål, aluminium, kobber | Gjenvinning |
| Plast | Emballasje, avkapp | Sortering, noe gjenvinning |
| Papir/papp | Emballasje, kontor | Gjenvinning |
| Trevirke | Paller, emballasje | Gjenvinning/energi |
| EE-avfall | Elektronikk, kabler | Spesialmottak |
| Farlig avfall | Olje, kjemikalier | Deklareres, hentes |
| Restavfall | Blandet, ikke-sorterbart | Forbrenning |

### Kildesortering lønner seg

- Lavere avgift for sortert avfall
- Verdifulle materialer tas vare på
- Lovpålagt for mange fraksjoner
- Bedre miljøprofil`,
    },
    {
      id: 'tif-vg1-8-4-farlig',
      type: 'text',
      content: `## Farlig avfall

### Hva er farlig avfall?

Avfall som kan skade mennesker eller miljø:
- Giftige stoffer
- Brannfarlige væsker
- Etsende stoffer
- Miljøskadelige kjemikalier

### Eksempler fra industri

- Brukt olje og smøremidler
- Løsemidler og tynner
- Maling og lakkrester
- Batterier
- Kjølevæsker
- Kjemikalierester
- Lysstoffrør og sparepærer

### Håndtering

1. Samle separat fra annet avfall
2. Merke tydelig med innhold
3. Oppbevare sikkert (lekkasjesikkert)
4. Deklarere i Avfallsdeklarering.no
5. Levere til godkjent mottak
6. Dokumentere levering`,
    },
    {
      id: 'tif-vg1-8-4-miljo',
      type: 'text',
      content: `## Miljøstyring

### ISO 14001

**ISO 14001** er den internasjonale standarden for miljøstyring:
- Systematisk arbeid med miljø
- Identifisere miljøaspekter
- Sette mål for forbedring
- Måle og følge opp
- Kontinuerlig forbedring

### Miljøfyrtårn

Norsk sertifiseringsordning for SMB:
- Enklere enn ISO 14001
- Tilpasset norske forhold
- Årlig oppfølging

### Miljørapportering

Bedrifter må rapportere:
- Utslipp til luft og vann
- Avfallsmengder
- Energiforbruk
- Brudd på miljøkrav`,
    },
    {
      id: 'tif-vg1-8-4-ex1',
      type: 'text',
      content: `### Eksempel: Avfallshåndtering i verksted

**Situasjon**: Et mekanisk verksted genererer ulike avfallstyper.

**Sorteringssystem:**

| Beholder | Innhold | Farge |
|----------|---------|-------|
| Stålcontainer | Stålrester, kapp | - |
| Aluminiumskasse | Aluminiumsrester | - |
| Plastdunk | Brukt olje | Rød |
| Fat | Løsemidler | Gul |
| Kasse | Brukte kluter med olje | Rød |
| Container | Restavfall | Grå |

**Rutiner:**
- Alle ansatte har fått opplæring
- Skilt med bilde ved hver beholder
- Månedlig kontroll av sortering
- Kvartalsvis levering av farlig avfall
- Dokumentasjon av alt levert avfall`,
    },
    {
      id: 'tif-vg1-8-4-ansvar',
      type: 'text',
      content: `## Ansvar og konsekvenser

### Hvem har ansvar?

**Bedriften** har hovedansvaret for:
- Oversikt over avfall som genereres
- Sortering og sikker oppbevaring
- Levering til godkjent mottak
- Dokumentasjon

**Du som ansatt** har ansvar for:
- Sortere riktig
- Følge bedriftens rutiner
- Melde fra om feil
- Ikke forsøple

### Konsekvenser ved brudd

- Bøter fra miljømyndigheter
- Tap av sertifiseringer
- Oppryddingskostnader
- Dårlig omdømme
- I alvorlige tilfeller: straffansvar`,
    },
    {
      id: 'tif-vg1-8-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Kildesortering er lovpålagt og lønner seg
- Vanlige fraksjoner: Metall, plast, papir, tre, EE-avfall
- **Farlig avfall** krever spesiell håndtering og deklarering
- **ISO 14001** og **Miljøfyrtårn** er vanlige miljøsertifiseringer
- Bedriften har hovedansvaret, men alle må bidra
- Brudd på miljøregler kan gi alvorlige konsekvenser
- Dokumentér alt avfall som leveres`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-4-oppg1',
      number: '8.4.1',
      type: 'multiple-choice',
      task: 'Hva skal du gjøre med brukt motorolje på arbeidsplassen?',
      options: [
        { id: 'a', text: 'Helle den i avløpet', isCorrect: false },
        { id: 'b', text: 'Kaste den i restavfall', isCorrect: false },
        { id: 'c', text: 'Samle i egen beholder og levere som farlig avfall', isCorrect: true },
        { id: 'd', text: 'La den fordampe utendørs', isCorrect: false },
      ],
      solution: 'Brukt olje er farlig avfall og skal samles i egne beholdere, merkes tydelig, og leveres til godkjent mottak. Det skal deklareres i Avfallsdeklarering.no. Olje i avløp eller natur er forbudt og gir alvorlige konsekvenser.',
    },
    {
      id: 'tif-vg1-8-4-oppg2',
      number: '8.4.2',
      type: 'classic',
      task: 'Gi tre eksempler på farlig avfall som kan oppstå i et industriverksted.',
      solution: '1) Brukt olje og smøremidler - fra maskiner, hydraulikksystemer, smøring. 2) Løsemidler og tynner - fra rengjøring, avfetting, maling. 3) Brukte kluter med olje eller kjemikalier - tekstiler tilsølt med farlige stoffer. Andre eksempler: Kjølevæske, batterier, spraybokser med rest, lysstoffrør, maling og lakkrester, blybatterier, kjemikalierester.',
    },
    {
      id: 'tif-vg1-8-4-oppg3',
      number: '8.4.3',
      type: 'classic',
      task: 'Beskriv prosessen fra farlig avfall oppstår til det er levert til godkjent mottak.',
      solution: '1) Identifisering: Avfallet identifiseres som farlig (basert på sikkerhetsdatablad, merking). 2) Sortering: Avfallet sorteres i riktig kategori (olje, løsemidler osv.). 3) Oppbevaring: Plasseres i egnet, merket beholder på et sikkert sted (lekkasjesikkert, ventilert). 4) Deklarering: Registreres i Avfallsdeklarering.no med type, mengde, opprinnelse. 5) Henting/levering: Godkjent transportør henter, eller bedriften leverer selv til godkjent mottak. 6) Dokumentasjon: Mottaksbevis og deklarering arkiveres som bevis på riktig håndtering.',
    },
    {
      id: 'tif-vg1-8-4-oppg4',
      number: '8.4.4',
      type: 'classic',
      task: 'Hvorfor er kildesortering viktig, og hvorfor lønner det seg økonomisk for bedriften?',
      solution: 'Miljømessig viktig: 1) Verdifulle materialer (metall, papir) kan gjenvinnes i stedet for å lages på nytt. 2) Mindre deponering og forbrenning av restavfall. 3) Farlig avfall håndteres trygt. 4) Reduserte klimagassutslipp. Økonomisk lønnsomt: 1) Lavere avfallsavgift - sortert avfall koster mindre å levere enn restavfall. 2) Inntekt - noe sortert avfall (metall) kan selges. 3) Unngår bøter - lovpålagt sortering. 4) Miljøsertifisering - kan være krav fra kunder. 5) Omdømme - bærekraftige bedrifter er attraktive.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-4-oppg5',
      number: '8.4.5',
      type: 'classic',
      task: 'Du oppdager at en kollega heller løsemiddel i sluken for å bli kvitt det. Hvordan reagerer du, og hvorfor er dette alvorlig?',
      solution: 'Hvordan reagere: 1) Stopp handlingen umiddelbart - forklar at det er forbudt. 2) Informer nærmeste leder om hendelsen. 3) Sørg for at eventuelt søl renses opp riktig. 4) Bidra til at kollegaen får opplæring i riktig håndtering. Hvorfor dette er alvorlig: 1) Miljøskade: Løsemidler kan forurense grunnvann og vassdrag, skade dyr og planter. 2) Lovbrudd: Brudd på forurensningsloven og internkontrollforskriften. 3) Konsekvenser: Bedriften kan få bøter, miste sertifiseringer, i verste fall straffansvar. 4) Helse: Løsemidler er helseskadelige og kan gi dårlig luftkvalitet via avløpssystemet. Kollegaen handlet kanskje i uvitenhet, så opplæring er viktig.',
    },
    {
      id: 'tif-vg1-8-4-oppg6',
      number: '8.4.6',
      type: 'classic',
      task: 'Lag et forslag til et enkelt sorteringssystem for et lite sveiseverksted med 5 ansatte. Inkluder minst 5 avfallstyper og beskriv håndtering.',
      solution: 'Sorteringssystem for sveiseverksted: 1) STÅL: Blå container utendørs. Alt stålkapp og -rester. Hentes av metallgjenvinningsfirma månedlig. Inntekt. 2) ALUMINIUM: Separat kasse. Holdes adskilt fra stål pga høyere verdi. Hentes sammen med stål. 3) BRUKT OLJE: Rød 20L plastdunk med lokk. Olje fra maskiner. Deklareres og hentes kvartalsvis. 4) KLUTER MED OLJE: Rød plastboks med lokk. Kluter/filler tilsølt med olje. Farlig avfall. 5) EMBALLASJE: Gul sekk. Papp, plast fra emballasje. Hentes av renovasjon. 6) RESTAVFALL: Grå beholder. Det som ikke kan sorteres. Merking: Bilde og tekst på hver beholder. Ansvar: Én ansatt har ukentlig ansvar for å sjekke sortering. Dokumentasjon: Logg over hva som leveres når.',
    },
  ],
  keyTerms: [
    'avfallssortering',
    'farlig avfall',
    'kildesortering',
    'gjenvinning',
    'EE-avfall',
    'deklarering',
    'ISO 14001',
    'Miljøfyrtårn',
    'miljøstyring',
    'avfallshåndtering',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'gjøre rede for hvordan egen yrkesutøvelse kan bidra til bærekraftig utvikling',
  ],
};

// ===== KAPITTEL 8.5: Digitalisering og teknologi =====
const CHAPTER_8_5: TextbookChapter = {
  id: 'tif-vg1-8-5',
  courseId: 'tif-vg1',
  chapterNumber: '8.5',
  title: 'Digitalisering og teknologi',
  description: 'Lær om Industri 4.0, digitalisering og fremtidens arbeidsliv.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-5-intro',
      type: 'text',
      content: `# Digitalisering og teknologi

Industrien er i rask endring drevet av ny teknologi. Industri 4.0, kunstig intelligens og automatisering endrer hvordan vi arbeider. I dette kapittelet lærer du om de viktigste teknologitrendene og hva de betyr for din karriere.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva Industri 4.0 innebærer
- Beskrive sentrale teknologier som preger fremtidens industri
- Reflektere over hvordan teknologi endrer arbeidsoppgaver
- Forstå behovet for livslang læring`,
    },
    {
      id: 'tif-vg1-8-5-i40',
      type: 'text',
      content: `## Industri 4.0

### De fire industrielle revolusjonene

| Revolusjon | Periode | Kjennetegn |
|------------|---------|------------|
| 1.0 | 1760-1840 | Dampmaskin, mekanisering |
| 2.0 | 1870-1914 | Elektrisitet, masseproduksjon |
| 3.0 | 1960-2000 | Elektronikk, automatisering |
| **4.0** | 2010- | Digitalisering, AI, IoT |

### Industri 4.0 - Den fjerde revolusjon

**Industri 4.0** handler om digitalt sammenkoblede systemer:
- Maskiner som kommuniserer med hverandre
- Data som samles og analyseres i sanntid
- Automatisk optimalisering av produksjonen
- Fysisk og digital verden smelter sammen`,
    },
    {
      id: 'tif-vg1-8-5-tech',
      type: 'text',
      content: `## Sentrale teknologier

### IoT - Tingenes internett
Sensorer og enheter koblet til internett. Maskiner rapporterer status, temperatur, produksjon.

### Kunstig intelligens (AI)
Datamaskiner som lærer av data og tar beslutninger. Kvalitetskontroll, prosessoptimalisering, prediktivt vedlikehold.

### Roboter og coboter
Industriroboter for automatisering. **Coboter** (samarbeidsroboter) jobber side om side med mennesker.

### Additiv produksjon (3D-printing)
Bygger opp produkter lag for lag. Prototyper, spesialdeler, komplekse geometrier.

### Digital tvilling
Virtuell kopi av fysisk maskin eller prosess. Simulering, optimalisering, opplæring.

### Virtuell/utvidet virkelighet (VR/AR)
Virtuelt miljø (VR) eller digital info lagt over virkeligheten (AR). Opplæring, vedlikehold, design.`,
    },
    {
      id: 'tif-vg1-8-5-endring',
      type: 'text',
      content: `## Endringer i arbeidslivet

### Oppgaver som endres

| Fra | Til |
|----|-----|
| Manuell betjening | Overvåking og styring |
| Papirbasert dokumentasjon | Digitale systemer |
| Periodisk vedlikehold | Prediktivt vedlikehold |
| Standardprodukter | Kundetilpasning |
| Lokal ekspertise | Fjernstøtte og samarbeid |

### Nye roller

- **Robotoperatør**: Programmerer og overvåker roboter
- **Dataanalytiker i produksjon**: Tolker data for forbedring
- **Digital tekniker**: Vedlikeholder digitale systemer
- **VR/AR-spesialist**: Utvikler opplæringsløsninger

### Kompetanse som blir viktig

- Digital forståelse
- Problemløsning
- Samarbeid
- Evne til å lære nytt`,
    },
    {
      id: 'tif-vg1-8-5-ex1',
      type: 'text',
      content: `### Eksempel: Smart fabrikk

**Situasjon**: En moderne fabrikk for bildeler

**Digitale løsninger i bruk:**

1. **IoT**: Sensorer på maskiner rapporterer temperatur, vibrasjoner, produksjonstall i sanntid.

2. **AI**: System analyserer data og varsler før noe går galt (prediktivt vedlikehold).

3. **Coboter**: Samarbeidsroboter hjelper operatører med tunge løft og repetitive oppgaver.

4. **Digital tvilling**: Hele produksjonslinjen er modellert digitalt - endringer testes virtuelt først.

5. **AR-briller**: Vedlikeholdsteknikeren ser instruksjoner overlagt på maskinen under reparasjon.

**Resultat**: Mindre nedetid, høyere kvalitet, bedre arbeidsmiljø.`,
    },
    {
      id: 'tif-vg1-8-5-laering',
      type: 'text',
      content: `## Livslang læring

### Hvorfor livslang læring?

- Teknologien utvikler seg raskere enn før
- Nye verktøy og metoder kommer stadig
- Yrket ditt vil endre seg over karrieren
- Kompetanse blir raskt utdatert

### Hvordan holde seg oppdatert?

- **Bedriftsintern opplæring**: Kurs fra arbeidsgiver
- **Fagskole**: Videreutdanning, deltid/kveld
- **Nettkurs**: Mange gratis og betalte alternativer
- **Sertifiseringer**: Leverandørkurs (sveising, CNC, robot)
- **Læring på jobb**: Nye oppgaver, prosjekter
- **Fagforeningskurs**: Kompetanseheving for medlemmer

### Din holdning er avgjørende

Vær nysgjerrig, si ja til utfordringer, del kunnskap.`,
    },
    {
      id: 'tif-vg1-8-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Industri 4.0** er den fjerde industrielle revolusjon
- Sentrale teknologier: IoT, AI, roboter, 3D-printing, digital tvilling
- Arbeidsoppgaver endres fra manuelt til overvåking og styring
- Nye kompetansekrav: Digital forståelse, problemløsning, samarbeid
- **Livslang læring** er nødvendig i et arbeidsliv i endring
- Teknologi er et verktøy - menneskene er fortsatt sentrale
- Vær åpen for endring og ta ansvar for egen læring`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-5-oppg1',
      number: '8.5.1',
      type: 'multiple-choice',
      task: 'Hva menes med "prediktivt vedlikehold"?',
      options: [
        { id: 'a', text: 'Vedlikehold som gjøres etter at noe har gått i stykker', isCorrect: false },
        { id: 'b', text: 'Vedlikehold etter en fast tidsplan', isCorrect: false },
        { id: 'c', text: 'Vedlikehold basert på data som forutsier når noe vil feile', isCorrect: true },
        { id: 'd', text: 'Vedlikehold utført av roboter', isCorrect: false },
      ],
      solution: 'Prediktivt vedlikehold bruker data fra sensorer og AI til å forutsi når en komponent vil feile. Vedlikehold gjøres da i forkant, noe som unngår uplanlagt stopp og reduserer kostnader.',
    },
    {
      id: 'tif-vg1-8-5-oppg2',
      number: '8.5.2',
      type: 'classic',
      task: 'Forklar hva Industri 4.0 er og nevn tre teknologier som kjennetegner denne utviklingen.',
      solution: 'Industri 4.0 er den fjerde industrielle revolusjon, kjennetegnet av digitalisering og sammenkobling av fysiske og digitale systemer. Maskiner og produkter kommuniserer, samler data og optimaliserer seg selv. Tre sentrale teknologier: 1) IoT (Tingenes internett) - sensorer og enheter koblet til nett for datautveksling. 2) Kunstig intelligens (AI) - systemer som lærer av data og tar beslutninger, f.eks. kvalitetskontroll. 3) Roboter og coboter - automatisering og samarbeidsroboter som jobber med mennesker.',
    },
    {
      id: 'tif-vg1-8-5-oppg3',
      number: '8.5.3',
      type: 'classic',
      task: 'Hva er en "digital tvilling" og hvordan kan den brukes i industrien?',
      solution: 'En digital tvilling er en virtuell kopi av en fysisk maskin, prosess eller system. Den oppdateres kontinuerlig med data fra det virkelige objektet. Bruksområder i industrien: 1) Simulering - teste endringer virtuelt før de gjøres fysisk. 2) Optimalisering - analysere data for å forbedre prosesser. 3) Opplæring - operatører kan øve på den digitale kopien uten risiko. 4) Feilsøking - analysere problemer på den digitale modellen. 5) Design - teste nye produkter før fysisk prototyp. 6) Vedlikehold - overvåke tilstand og planlegge vedlikehold.',
    },
    {
      id: 'tif-vg1-8-5-oppg4',
      number: '8.5.4',
      type: 'classic',
      task: 'Hvilke kompetanser tror du blir viktige for fagarbeidere i fremtiden, og hvorfor?',
      solution: 'Viktige fremtidskompetanser: 1) Digital forståelse - evne til å bruke og forstå digitale verktøy, programmere enkle sekvenser, tolke data. Maskiner blir mer digitale. 2) Problemløsning - når maskiner gjør rutinearbeid, blir menneskene viktigere for å løse uventede problemer. 3) Samarbeid - jobbe med mennesker og maskiner, tverrfaglig. 4) Lærevillighet - teknologien endrer seg raskt, må kunne lære nytt hele tiden. 5) Kritisk tenkning - vurdere informasjon, ta beslutninger. 6) Kommunikasjon - forklare teknisk informasjon, dokumentere. Disse utfyller tradisjonelle håndverksferdigheter.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-5-oppg5',
      number: '8.5.5',
      type: 'classic',
      task: 'Teknologi kan både skape og fjerne arbeidsplasser. Diskuter hvordan automatisering påvirker arbeidsmarkedet for fagarbeidere.',
      solution: 'ARBEIDSPLASSER SOM KAN FORSVINNE: Repetitive, manuelle oppgaver automatiseres (f.eks. enkel maskinbetjening, pakking). Rutinekontroll kan gjøres av sensorer og AI. ARBEIDSPLASSER SOM SKAPES: Robotprogrammering og -vedlikehold. Analyse av data fra produksjon. Installasjon og service av nye systemer. Spesialiserte håndverksoppgaver som ikke kan automatiseres. ARBEIDSPLASSER SOM ENDRES: Fra å betjene maskin til å overvåke flere maskiner. Fra papirdokumentasjon til digitale systemer. Mer vekt på problemløsning, mindre på rutinearbeid. KONKLUSJON: Fagarbeidere vil fortsatt trenges, men kompetansekravene endres. De som tilpasser seg og lærer nye ferdigheter vil ha gode muligheter.',
    },
    {
      id: 'tif-vg1-8-5-oppg6',
      number: '8.5.6',
      type: 'classic',
      task: 'Lag en personlig utviklingsplan for de neste 5 årene. Hvilke kompetanser vil du utvikle, og hvordan?',
      solution: 'Eksempel på personlig utviklingsplan: ÅR 1-2 (Lærling): Fullføre læretid, bestå fagprøve. Ta sveisesertifikat. Lære grunnleggende CNC-programmering. Delta på sikkerhetskurs. ÅR 3 (Fagarbeider): Jobbe som fagarbeider, bygge erfaring. Ta kurs i robotprogrammering (bedriftsintern). Lære om digitale systemer i bruk på arbeidsplassen. ÅR 4-5 (Spesialisering): Vurdere fagskole (deltid) for å bli tekniker. Eller: Spesialisere seg i robotprogrammering/automasjon. Ta ansvar for opplæring av lærlinger. Følge med på bransjetrender. GJENNOMGÅENDE: Delta i forbedringsprosjekter. Si ja til nye utfordringer. Hold meg oppdatert via fagtidsskrifter og kurs.',
    },
  ],
  keyTerms: [
    'Industri 4.0',
    'IoT',
    'kunstig intelligens',
    'cobot',
    'digital tvilling',
    'additiv produksjon',
    '3D-printing',
    'VR',
    'AR',
    'prediktivt vedlikehold',
    'livslang læring',
    'digitalisering',
  ],
  competenceGoals: [
    'reflektere over hvordan teknologisk utvikling påvirker arbeidsoppgaver og arbeidsprosesser',
    'bruke digitale verktøy i eget arbeid',
  ],
};

// ===== KAPITTEL 8.6: Innovasjon og entreprenørskap =====
const CHAPTER_8_6: TextbookChapter = {
  id: 'tif-vg1-8-6',
  courseId: 'tif-vg1',
  chapterNumber: '8.6',
  title: 'Innovasjon og entreprenørskap',
  description: 'Lær om nyskaping, kreativitet og muligheter for å starte egen virksomhet.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-8-6-intro',
      type: 'text',
      content: `# Innovasjon og entreprenørskap

Innovasjon handler om å skape noe nytt som har verdi. Som fagarbeider kan du bidra til nyskaping og kanskje starte egen virksomhet. I dette kapittelet lærer du om innovasjon, kreativitet og veien til å bli entreprenør.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva innovasjon og entreprenørskap innebærer
- Beskrive ulike typer innovasjon
- Kjenne til hvordan man utvikler og tester ideer
- Reflektere over muligheter for egen virksomhet`,
    },
    {
      id: 'tif-vg1-8-6-innovasjon',
      type: 'text',
      content: `## Hva er innovasjon?

**Innovasjon** = å skape noe nytt som har verdi

### Typer innovasjon

| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| Produktinnovasjon | Nytt eller forbedret produkt | Elektrisk bil |
| Prosessinnovasjon | Ny produksjonsmetode | Robotisert sveising |
| Tjenesteinnovasjon | Ny tjeneste | Vedlikehold basert på data |
| Organisatorisk | Ny måte å organisere på | Selvstyrte team |
| Forretningsmodell | Ny måte å tjene penger på | Abonnement i stedet for kjøp |

### Inkrementell vs. radikal

- **Inkrementell innovasjon**: Små, gradvise forbedringer
- **Radikal innovasjon**: Helt nye løsninger, "game changers"

Begge er verdifulle - de fleste innovasjoner er inkrementelle.`,
    },
    {
      id: 'tif-vg1-8-6-kreativitet',
      type: 'text',
      content: `## Kreativitet og idéutvikling

### Hvor kommer ideer fra?

- Problemer du møter i hverdagen
- Kundebehov som ikke dekkes
- Kombinasjon av eksisterende løsninger
- Inspirasjon fra andre bransjer
- Teknologiske muligheter

### Metoder for idéutvikling

**Brainstorming**: Generer mange ideer uten kritikk først.

**Design thinking**:
1. Forstå brukerens behov
2. Definer problemet
3. Generer ideer
4. Lag prototyp
5. Test og lær

**Observasjon**: Se hvordan folk jobber, finn "pain points".

### Tips for kreativitet

- Vær nysgjerrig
- Spør "Hva hvis...?"
- Kombiner ting på nye måter
- Ikke avvis ideer for tidlig`,
    },
    {
      id: 'tif-vg1-8-6-entrepreneur',
      type: 'text',
      content: `## Entreprenørskap

### Hva er en entreprenør?

En **entreprenør** er en person som starter og driver en virksomhet, ofte basert på en ny idé.

### Veien fra idé til bedrift

1. **Idé**: Identifiser et problem eller mulighet
2. **Validering**: Sjekk at noen vil betale for løsningen
3. **Forretningsplan**: Beskriv produkt, marked, økonomi
4. **Finansiering**: Egne midler, lån, investorer, tilskudd
5. **Start**: Registrer firma, start produksjon/salg
6. **Vekst**: Skalér, ansett, utvikle

### Ressurser for gründere

- Innovasjon Norge (tilskudd, lån, rådgivning)
- Næringshager og inkubatorer
- Fylkeskommunen (etablererstipend)
- Mentorer og nettverk
- Ungdomsbedrift (Ungt Entreprenørskap)`,
    },
    {
      id: 'tif-vg1-8-6-ex1',
      type: 'text',
      content: `### Eksempel: Fra fagarbeider til gründer

**Martin, 32 år - Sveiser som startet eget**

**Bakgrunn**: Fagbrev som sveiser, 8 års erfaring i industri.

**Idé**: Spesialiserte reparasjonstjenester for landbruksmaskiner. Så at bønder måtte vente lenge på reparasjoner.

**Gjennomføring**:
1. Testet ideen ved å ta oppdrag på kveldstid
2. Bygde opp kundebase og rykte
3. Sa opp jobben etter 2 år med bijobb
4. Startet AS med servicebil og mobilt sveiseutstyr
5. Ansatte første medarbeider etter 3 år

**Suksessfaktorer**:
- Sterk fagkompetanse
- Dekket et reelt behov
- Testet før han satset alt
- Startet smått, vokste gradvis

**Tips**: "Du trenger ikke en revolusjonerende idé - gjør noe bedre enn andre!"`,
    },
    {
      id: 'tif-vg1-8-6-bidra',
      type: 'text',
      content: `## Bidra til innovasjon på jobb

### Du trenger ikke starte eget for å innovere!

**Som ansatt kan du bidra ved:**

- Komme med forbedringsforslag
- Delta i forbedringsprosjekter
- Teste nye verktøy og metoder
- Dele kunnskap med kolleger
- Utfordre "slik har vi alltid gjort det"

### Bedrifter som lykkes

- Har kultur for ideer og eksperimentering
- Belønner initiativ
- Tåler at noen ideer ikke fungerer
- Involverer ansatte i utvikling

### Dine ideer teller!

Fagarbeidere ser ofte muligheter for forbedring som andre ikke ser. Tør å si fra!`,
    },
    {
      id: 'tif-vg1-8-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Innovasjon** = skape noe nytt med verdi
- Typer: Produkt, prosess, tjeneste, organisatorisk, forretningsmodell
- Kreativitet kan trenes - bruk metoder som brainstorming og design thinking
- **Entreprenørskap** = starte og drive egen virksomhet
- Veien: Idé → Validering → Plan → Finansiering → Start → Vekst
- Fagkompetanse er et godt grunnlag for gründerskap
- Du kan også innovere som ansatt - kom med forslag!
- Små forbedringer teller like mye som store oppfinnelser`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-8-6-oppg1',
      number: '8.6.1',
      type: 'multiple-choice',
      task: 'Hva er inkrementell innovasjon?',
      options: [
        { id: 'a', text: 'Helt nye, revolusjonerende oppfinnelser', isCorrect: false },
        { id: 'b', text: 'Små, gradvise forbedringer av eksisterende løsninger', isCorrect: true },
        { id: 'c', text: 'Innovasjon som skjer tilfeldig', isCorrect: false },
        { id: 'd', text: 'Innovasjon drevet av myndigheter', isCorrect: false },
      ],
      solution: 'Inkrementell innovasjon er små, gradvise forbedringer av eksisterende produkter, prosesser eller tjenester. De fleste innovasjoner er inkrementelle - summen av mange små forbedringer over tid.',
    },
    {
      id: 'tif-vg1-8-6-oppg2',
      number: '8.6.2',
      type: 'classic',
      task: 'Gi ett eksempel på hver av disse innovasjonstypene fra industrien: produktinnovasjon og prosessinnovasjon.',
      solution: 'Produktinnovasjon: Elektriske lastebiler (som Volvo og Scania utvikler) - et nytt produkt som erstatter diesellastebiler. Eller: Nye legeringer med bedre egenskaper (lettere, sterkere). Prosessinnovasjon: Innføring av robotsveising i stedet for manuell sveising - produksjonsmetoden er ny, produktet kan være det samme. Eller: 3D-printing av prototyper i stedet for tradisjonell maskinering.',
    },
    {
      id: 'tif-vg1-8-6-oppg3',
      number: '8.6.3',
      type: 'classic',
      task: 'Beskriv de fem stegene i "Design thinking"-metoden.',
      solution: '1) Forstå (Empathize): Sett deg inn i brukerens situasjon. Observer, intervju, forstå behov og "pain points". 2) Definer (Define): Formuler problemet tydelig basert på innsikten. Hva skal løses? 3) Idégenerer (Ideate): Brainstorm mange mulige løsninger uten å kritisere. Kvantitet først, kvalitet etterpå. 4) Prototyp (Prototype): Lag en enkel, rask versjon av løsningen som kan testes. Trenger ikke være perfekt. 5) Test (Test): Prøv prototypen med brukere. Samle tilbakemeldinger. Lær, forbedre, gjenta om nødvendig.',
    },
    {
      id: 'tif-vg1-8-6-oppg4',
      number: '8.6.4',
      type: 'classic',
      task: 'Hvilke ressurser finnes for de som vil starte egen virksomhet i Norge? Nevn minst tre.',
      solution: '1) Innovasjon Norge: Statlig organisasjon som gir tilskudd, lån, rådgivning og mentorordninger for gründere og bedrifter. 2) Næringshager og inkubatorer: Fysiske og faglige fellesskap der gründere får kontorplass, rådgivning og nettverk. 3) Fylkeskommunen: Etablererstipend og kurs for nye gründere. 4) NAV: Kan gi dagpenger under etablering av egen virksomhet. 5) Banker: Bedriftslån og oppstartslån. 6) Ungt Entreprenørskap: Ungdomsbedrift og studentbedrift for unge. 7) Skatteetaten/Altinn: Veiledning om registrering og drift.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-8-6-oppg5',
      number: '8.6.5',
      type: 'classic',
      task: 'Du ser en mulighet for å forbedre en arbeidsprosess på arbeidsplassen. Beskriv hvordan du ville gått frem for å utvikle og presentere ideen.',
      solution: 'Fremgangsmåte for forbedringsforslag: 1) DOKUMENTER PROBLEMET: Beskriv dagens situasjon - hva fungerer dårlig? Hvor mye tid/penger/kvalitet taper vi? 2) UTVIKLE LØSNING: Tenk gjennom mulige løsninger. Snakk med kolleger - hva mener de? Velg den beste løsningen. 3) BESKRIV FORSLAGET: Lag en kort beskrivelse: Problem, løsning, fordeler, kostnader, gjennomføring. 4) TEST HVIS MULIG: Kan du teste i liten skala? Samle data. 5) PRESENTÉR FOR LEDER: Be om møte, presenter tydelig og kortfattet. Vis at du har tenkt gjennom det. 6) VÆR FORBEREDT PÅ SPØRSMÅL: Hva koster det? Hvor lang tid tar det? Hva er risikoen? 7) FØLG OPP: Tilby deg å være med på gjennomføringen.',
    },
    {
      id: 'tif-vg1-8-6-oppg6',
      number: '8.6.6',
      type: 'classic',
      task: 'Tenk deg at du etter noen år som fagarbeider vurderer å starte eget firma. Hva slags virksomhet kunne vært basert på din fagkompetanse, og hvilke steg ville du tatt?',
      solution: 'Eksempel på virksomhetsidé (sveiser): Mobil sveise- og reparasjonsservice for landbruk og småindustri. STEG 1: Idévalidering - snakk med potensielle kunder (bønder, verksteder). Vil de betale? Hva trenger de? STEG 2: Planlegging - hva trenger jeg av utstyr, bil, sertifiseringer? Hva koster det? Hvilken pris kan jeg ta? STEG 3: Finansiering - sjekk med Innovasjon Norge, bank, spare selv. Kanskje starte ved siden av jobb. STEG 4: Registrering - registrer enkeltpersonforetak eller AS. Ordne forsikringer. STEG 5: Start - markedsfør lokalt, bygg referanser, jobb hardt for å bygge rykte. STEG 6: Vekst - etter hvert vurdere å ansette, utvide tjenestene. NØKKELFAKTORER: God fagkompetanse, kjennskap til kundebehov, nettverk i området.',
    },
  ],
  keyTerms: [
    'innovasjon',
    'entreprenørskap',
    'produktinnovasjon',
    'prosessinnovasjon',
    'inkrementell',
    'radikal',
    'design thinking',
    'brainstorming',
    'prototype',
    'forretningsplan',
    'Innovasjon Norge',
    'gründer',
  ],
  competenceGoals: [
    'reflektere over valg av utdanning og yrke innenfor teknologi- og industrifag',
    'utforske og beskrive muligheter og utfordringer knyttet til å etablere egen virksomhet',
  ],
};

// Eksporter alle kapitler som én samlet array
export const TIF_VG1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_1,
  CHAPTER_8_2,
  CHAPTER_8_3,
  CHAPTER_8_4,
  CHAPTER_8_5,
  CHAPTER_8_6,
];

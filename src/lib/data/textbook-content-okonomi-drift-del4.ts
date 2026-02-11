/**
 * Økonomi og driftsledelse VG3 - Del 4: Kvalitetsledelse
 * Kapittel 4.1-4.5
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for kvalitetsledelse og drøfte hvordan systematisk kvalitetsarbeid kan bidra til å nå virksomhetens mål
 * - vurdere og foreslå tiltak for å forbedre kvaliteten på produkter og tjenester
 * - gjøre rede for relevante standarder og sertifiseringer innenfor kvalitetsledelse
 * - drøfte sammenhengen mellom innovasjon, kvalitet og konkurransekraft
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Kvalitetsbegrepet
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4_1: TextbookChapter = {
  id: 'okonomi-drift-4-1',
  courseId: 'okonomi-drift',
  chapterNumber: '4.1',
  title: 'Kvalitetsbegrepet',
  description: 'En innføring i hva kvalitet betyr i en virksomhetssammenheng. Du lærer om ulike kvalitetsdimensjoner, kundetilfredshet og hvordan kvalitet måles og oppleves forskjellig av ulike interessenter.',
  estimatedMinutes: 35,
  competenceGoals: ['gjøre rede for kvalitetsledelse og drøfte hvordan systematisk kvalitetsarbeid kan bidra til å nå virksomhetens mål'],
  content: [
    {
      id: 'od-4-1-intro',
      type: 'text',
      content: `## Hva er kvalitet?

Kvalitet er et begrep vi bruker daglig. Vi snakker om kvalitetsprodukter, kvalitetstid og kvalitetsforskjeller. Men hva betyr kvalitet egentlig i en virksomhetssammenheng? Og hvem bestemmer hva som er god kvalitet?

I dette kapittelet skal du lære:
- Ulike definisjoner av kvalitet
- Kvalitetsdimensjoner for varer og tjenester
- Sammenhengen mellom kvalitet og kundetilfredshet
- Hvordan kvalitet kan måles og vurderes`,
    },
    {
      id: 'od-4-1-def-1',
      type: 'definition',
      title: 'Kvalitet',
      content: `**Kvalitet** er i hvilken grad et sett med iboende egenskaper ved et produkt, en tjeneste eller en prosess oppfyller krav og forventninger fra kunder og andre interessenter. ISO 9000 definerer kvalitet som "i hvilken grad et sett med iboende egenskaper oppfyller krav."`,
    },
    {
      id: 'od-4-1-text-1',
      type: 'text',
      content: `### Ulike perspektiver på kvalitet

**Produktbasert perspektiv:**
- Kvalitet kan måles objektivt
- Flere funksjoner = høyere kvalitet
- Fokus på egenskaper og spesifikasjoner
- Eksempel: En bil med flere hestekrefter og lavere forbruk

**Brukerbasert perspektiv:**
- Kvalitet er subjektivt og defineres av kunden
- Det som tilfredsstiller kundens behov er god kvalitet
- Ulike kunder har ulike kvalitetskrav
- Eksempel: En bil som passer perfekt til kundens livssituasjon

**Produksjonsbasert perspektiv:**
- Kvalitet handler om å oppfylle spesifikasjoner
- Null feil og avvik er målet
- Fokus på prosessen, ikke bare sluttproduktet
- Eksempel: Hver bil som leveres er identisk med designet

**Verdibasert perspektiv:**
- Kvalitet i forhold til pris
- Riktig kvalitet til riktig pris
- Kunden vurderer hva de får for pengene
- Eksempel: En rimelig bil som gir mye for pengene`,
    },
    {
      id: 'od-4-1-text-2',
      type: 'text',
      content: `### Kvalitetsdimensjoner for varer

David Garvin identifiserte åtte kvalitetsdimensjoner for fysiske produkter:

**1. Ytelse (Performance)**
- Produktets primære egenskaper
- Eksempel: Bilens hastighet, akselerasjon, komfort

**2. Tilleggsfunksjoner (Features)**
- Ekstra egenskaper utover kjernen
- Eksempel: Navigasjon, setevarme, ryggekamera

**3. Pålitelighet (Reliability)**
- Sannsynlighet for feil innen en tidsperiode
- Eksempel: Sjelden behov for verkstedbesøk

**4. Samsvar (Conformance)**
- Oppfyller produktet spesifikasjonene?
- Eksempel: Motor yter som oppgitt

**5. Holdbarhet (Durability)**
- Levetid før utskifting er nødvendig
- Eksempel: Bilen varer i 15 år

**6. Vedlikehold (Serviceability)**
- Hvor enkelt er produktet å reparere?
- Eksempel: Tilgjengelige deler og verksteder

**7. Estetikk (Aesthetics)**
- Utseende, følelse, lyd, smak
- Eksempel: Bilens design og interiørkvalitet

**8. Opplevd kvalitet (Perceived quality)**
- Image og omdømme
- Eksempel: Merkevaren gir følelse av kvalitet`,
    },
    {
      id: 'od-4-1-text-3',
      type: 'text',
      content: `### Kvalitetsdimensjoner for tjenester

Parasuraman, Zeithaml og Berry utviklet SERVQUAL-modellen med fem dimensjoner for tjenestekvalitet:

**1. Pålitelighet (Reliability)**
- Evne til å levere tjenesten nøyaktig og pålitelig
- At det man lover faktisk blir gjort
- Eksempel: Banken behandler overføringen korrekt og i tide

**2. Responsevne (Responsiveness)**
- Vilje til å hjelpe kunder raskt
- Rask responstid og tilgjengelighet
- Eksempel: Kundeservice svarer innen kort tid

**3. Trygghet (Assurance)**
- Ansattes kompetanse og evne til å skape tillit
- Kunnskap, høflighet og troverdighet
- Eksempel: Rådgiveren viser ekspertise og skaper trygghet

**4. Empati (Empathy)**
- Individuell oppmerksomhet og forståelse
- At kunden føler seg sett og forstått
- Eksempel: Legen lytter og tilpasser behandlingen

**5. Fysiske omgivelser (Tangibles)**
- Fysiske fasiliteter, utstyr og personalets fremtoning
- Det synlige og håndgripelige
- Eksempel: Rene og moderne kontorer, profesjonell kleskode`,
    },
    {
      id: 'od-4-1-def-2',
      type: 'definition',
      title: 'Kundetilfredshet',
      content: `**Kundetilfredshet** er differansen mellom kundens forventninger og kundens opplevelse av et produkt eller en tjeneste. Dersom opplevelsen overstiger forventningene, er kunden tilfreds. Dersom opplevelsen er dårligere enn forventningene, er kunden utilfreds.`,
    },
    {
      id: 'od-4-1-text-4',
      type: 'text',
      content: `### Kvalitet og kundetilfredshet

**Forventningsgapet:**
Kundetilfredshet handler ikke bare om objektiv kvalitet, men om forholdet mellom det kunden forventer og det kunden opplever.

- **Opplevelse > Forventning** = Begeistret kunde
- **Opplevelse = Forventning** = Fornøyd kunde
- **Opplevelse < Forventning** = Misfornøyd kunde

**Faktorer som påvirker forventninger:**
- Tidligere erfaringer
- Andres anbefalinger (jungeltelegrafen)
- Markedsføring og reklame
- Pris (høy pris = høye forventninger)
- Merkevare og omdømme

**Konsekvenser av kvalitetssvikt:**
- Misfornøyde kunder forteller flere enn fornøyde
- Tap av kunder (churn)
- Negativ omtale i sosiale medier
- Reklamasjoner og garantikostnader
- Tap av markedsandeler

**Kvalitetskostnader:**
- Forebyggende kostnader (opplæring, kvalitetssystemer)
- Kontrollkostnader (inspeksjon, testing)
- Interne feilkostnader (vrak, omarbeid)
- Eksterne feilkostnader (reklamasjoner, erstatninger)`,
    },
    {
      id: 'od-4-1-tip-1',
      type: 'tip',
      title: 'Kvalitetskostnader som investering',
      content: `Forebyggende kvalitetskostnader er en investering, ikke en utgift. Det koster langt mer å rette opp feil etter at produktet er levert enn å forhindre feilen i utgangspunktet. Tommelfingerregelen "1-10-100" sier at det koster 1 krone å forebygge, 10 kroner å oppdage og 100 kroner å korrigere en feil.`,
    },
    {
      id: 'od-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Kvalitetsanalyse av en restaurant',
      problem: 'En restaurant opplever synkende kundetilfredshet og ønsker å analysere kvaliteten.',
      solution: `**Analyse ved hjelp av SERVQUAL-dimensjonene:**

**Pålitelighet:**
- Maten leveres som bestilt: Noen ganger feil bestilling
- Tilberedningstid: Varierende, ofte lang ventetid
- Konsistens: Samme rett smaker ulikt fra gang til gang

**Responsevne:**
- Servitører er vanskelige å få tak i
- Lang ventetid for å bestille og betale
- Klager håndteres ikke raskt

**Trygghet:**
- Servitørene kjenner ikke menyen godt nok
- Usikkerhet rundt allergener
- Manglende vinkunnskaper

**Empati:**
- Liten oppmerksomhet mot gjestene
- Ingen tilpasning til spesielle ønsker
- Barn og eldre ivaretas ikke spesielt

**Fysiske omgivelser:**
- Slitt interiør og møbler
- Varierende renhold
- Dårlig belysning

**Tiltak:**
1. Standardisere oppskrifter for konsistens (pålitelighet)
2. Innføre servicestandarder med tidskrav (responsevne)
3. Opplæringsprogram for alle ansatte (trygghet)
4. Gjestehåndteringskurs med fokus på oppmerksomhet (empati)
5. Oppussing og vedlikeholdsrutiner (fysiske omgivelser)`,
    },
    {
      id: 'od-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva er kvalitet ifølge ISO 9000?',
        options: [
          { id: 'a', text: 'At produktet har flest mulig funksjoner', isCorrect: false },
          { id: 'b', text: 'I hvilken grad iboende egenskaper oppfyller krav', isCorrect: true },
          { id: 'c', text: 'At produktet er dyrest mulig', isCorrect: false },
          { id: 'd', text: 'At produktet er feilfritt ved levering', isCorrect: false },
        ],
        solution: 'ISO 9000 definerer kvalitet som "i hvilken grad et sett med iboende egenskaper oppfyller krav." Det handler altså om å oppfylle krav og forventninger, ikke nødvendigvis om flest funksjoner eller høyest pris.',
      },
    },
    {
      id: 'od-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom produktbasert og brukerbasert kvalitetsperspektiv.',
        hints: ['Tenk på hvem som definerer kvalitet i hvert perspektiv'],
        solution: 'Produktbasert perspektiv definerer kvalitet objektivt gjennom målbare egenskaper - flere funksjoner og bedre spesifikasjoner betyr høyere kvalitet. Brukerbasert perspektiv definerer kvalitet subjektivt ut fra kundens behov og forventninger. Her er det kunden som avgjør hva som er god kvalitet. Et produkt kan ha mange funksjoner (produktbasert høy kvalitet) men likevel ikke dekke kundens behov (brukerbasert lav kvalitet).',
      },
    },
    {
      id: 'od-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        task: 'Bruk SERVQUAL-modellens fem dimensjoner til å vurdere kvaliteten ved et legekontor du kjenner til.',
        subTasks: [
          {
            label: 'a',
            task: 'Pålitelighet',
            solution: 'Vurder om legekontoren holder avtalte timer, om diagnoser er korrekte, og om prøvesvar leveres som lovet.',
          },
          {
            label: 'b',
            task: 'Responsevne',
            solution: 'Vurder ventetid for å få time, om telefonen besvares raskt, og om akutte henvendelser prioriteres.',
          },
          {
            label: 'c',
            task: 'Trygghet',
            solution: 'Vurder legens kompetanse og evne til å forklare diagnoser og behandling slik at pasienten føler seg trygg.',
          },
          {
            label: 'd',
            task: 'Empati',
            solution: 'Vurder om legen lytter, viser forståelse og tilpasser kommunikasjonen til den enkelte pasient.',
          },
          {
            label: 'e',
            task: 'Fysiske omgivelser',
            solution: 'Vurder venterommet, renhold, utstyr og hvordan kontoret fremstår visuelt.',
          },
        ],
        solution: 'SERVQUAL-modellen kan brukes til å analysere tjenestekvalitet på tvers av bransjer ved å vurdere de fem dimensjonene.',
      },
    },
    {
      id: 'od-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        task: 'Hva menes med at kundetilfredshet handler om gapet mellom forventning og opplevelse? Gi et konkret eksempel.',
        solution: 'Kundetilfredshet bestemmes av differansen mellom hva kunden forventer og hva kunden opplever. Eksempel: En kunde bestiller en billig pizza og forventer grei kvalitet. Pizzaen smaker overraskende godt og leveres raskt. Opplevelsen overstiger forventningen, og kunden er svært fornøyd. En annen kunde bestiller ved en dyr restaurant og forventer perfekt service. Maten er god, men servitøren er uoppmerksom. Selv om maten objektivt er bedre enn pizzaen, er kunden misfornøyd fordi opplevelsen er dårligere enn forventningen.',
      },
    },
    {
      id: 'od-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        task: 'Forklar de fire typene kvalitetskostnader og gi et eksempel på hver.',
        solution: '1) Forebyggende kostnader: Kostnader for å forhindre feil, f.eks. opplæring av ansatte, kvalitetsplanlegging, vedlikehold av maskiner. 2) Kontrollkostnader: Kostnader for å oppdage feil, f.eks. inspeksjon av råvarer, testing av ferdigprodukter, kvalitetsrevisjoner. 3) Interne feilkostnader: Kostnader ved feil oppdaget før levering, f.eks. vrak, omarbeid, ny produksjon, nedetid. 4) Eksterne feilkostnader: Kostnader ved feil oppdaget etter levering, f.eks. reklamasjoner, garantireparasjoner, erstatninger, tapt omdømme.',
      },
    },
    {
      id: 'od-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        task: 'Velg en virksomhet du kjenner til og analyser tre av Garvins åtte kvalitetsdimensjoner for et av produktene deres.',
        solution: 'Eksempel - Apple iPhone: 1) Ytelse: Rask prosessor, godt kamera, lang batteritid. Sammenlignet med konkurrenter scorer iPhone høyt på ytelse. 2) Estetikk: Minimalistisk design, premium materialer, intuitiv brukeropplevelse. Apples designfilosofi er en viktig del av opplevd kvalitet. 3) Opplevd kvalitet: Sterkt merkevarenavn, oppfatning av premium, sosial status. Mange opplever iPhone som høy kvalitet delvis på grunn av merkevaren.',
      },
    },
    {
      id: 'od-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitet** handler om å oppfylle krav og forventninger
- **Fire perspektiver** på kvalitet: produktbasert, brukerbasert, produksjonsbasert og verdibasert
- **Garvins åtte dimensjoner** beskriver kvalitet for fysiske produkter
- **SERVQUAL-modellen** med fem dimensjoner for tjenestekvalitet
- **Kundetilfredshet** bestemmes av gapet mellom forventning og opplevelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kvalitet | I hvilken grad egenskaper oppfyller krav |
| SERVQUAL | Modell for å måle tjenestekvalitet |
| Kundetilfredshet | Opplevelse minus forventning |
| Kvalitetskostnader | Forebygging, kontroll, interne og eksterne feilkostnader |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Kvalitetsstyring (TQM)
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4_2: TextbookChapter = {
  id: 'okonomi-drift-4-2',
  courseId: 'okonomi-drift',
  chapterNumber: '4.2',
  title: 'Kvalitetsstyring (TQM)',
  description: 'Du lærer om Total Quality Management som ledelsesfilosofi og verktøy. Kapittelet dekker PDCA-syklusen, Demings prinsipper, kvalitetssirkler og hvordan TQM involverer hele organisasjonen i kvalitetsarbeidet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for kvalitetsledelse og drøfte hvordan systematisk kvalitetsarbeid kan bidra til å nå virksomhetens mål',
    'vurdere og foreslå tiltak for å forbedre kvaliteten på produkter og tjenester',
  ],
  content: [
    {
      id: 'od-4-2-intro',
      type: 'text',
      content: `## Kvalitet som ledelsesfilosofi

Kvalitet handler ikke bare om å kontrollere ferdige produkter. Moderne kvalitetsledelse ser på kvalitet som en gjennomgripende filosofi som påvirker alt virksomheten gjør - fra toppledelsens strategi til den enkelte ansattes daglige arbeid.

I dette kapittelet skal du lære:
- Hva Total Quality Management (TQM) er
- PDCA-syklusen for kontinuerlig forbedring
- Demings 14 prinsipper for kvalitetsledelse
- Kvalitetssirkler og medarbeiderinvolvering`,
    },
    {
      id: 'od-4-2-def-1',
      type: 'definition',
      title: 'Total Quality Management (TQM)',
      content: `**Total Quality Management (TQM)** er en helhetlig ledelsesfilosofi som fokuserer på kontinuerlig forbedring av alle prosesser i en virksomhet, med kundetilfredshet som overordnet mål. TQM involverer alle ansatte og alle avdelinger i kvalitetsarbeidet.`,
    },
    {
      id: 'od-4-2-text-1',
      type: 'text',
      content: `### Grunnpilarer i TQM

**1. Kundefokus:**
- Kunden definerer kvalitet
- Alle prosesser skal skape verdi for kunden
- Både interne og eksterne kunder
- Måle og følge opp kundetilfredshet

**2. Prosessorientering:**
- Fokus på prosessene, ikke bare resultatet
- Gode prosesser gir gode resultater
- Kartlegge, måle og forbedre prosesser
- Standardisere beste praksis

**3. Kontinuerlig forbedring:**
- Alltid søke bedre løsninger
- Små, gradvise forbedringer over tid
- Lære av feil og avvik
- Ingen prosess er noensinne "ferdig"

**4. Medarbeiderinvolvering:**
- Alle ansatte bidrar til kvalitet
- Opplæring og myndiggjøring
- Teamarbeid og samarbeid
- Ansatte som kjenner prosessene best foreslår forbedringer

**5. Ledelsesforankring:**
- Toppledelsen må gå foran
- Kvalitet som strategisk prioritet
- Avsette ressurser til kvalitetsarbeid
- Skape en kvalitetskultur`,
    },
    {
      id: 'od-4-2-def-2',
      type: 'definition',
      title: 'PDCA-syklusen (Demings hjul)',
      content: `**PDCA-syklusen** er et rammeverk for systematisk forbedring bestående av fire trinn: **Plan** (planlegg forbedringen), **Do** (gjennomfør tiltaket), **Check** (kontroller resultatene) og **Act** (standardiser det som fungerer eller juster tilnærmingen). Syklusen gjentas kontinuerlig.`,
    },
    {
      id: 'od-4-2-text-2',
      type: 'text',
      content: `### PDCA-syklusen i detalj

**Plan (Planlegg):**
- Identifiser problemet eller forbedringsmuligheten
- Samle data og analyser årsaker
- Sett mål for forbedringen
- Utarbeid en plan med tiltak, ansvar og tidsfrister

**Do (Gjennomfør):**
- Implementer tiltakene i henhold til planen
- Start gjerne i liten skala (pilot)
- Dokumenter hva som gjøres
- Samle data underveis

**Check (Kontroller):**
- Sammenlign resultater med målene
- Analyser data - fungerte tiltakene?
- Identifiser uventede effekter
- Dokumenter erfaringer og lærdommer

**Act (Korriger/Standardiser):**
- Hvis tiltaket fungerte: Standardiser som ny praksis
- Hvis tiltaket ikke fungerte: Analyser hvorfor og start ny PDCA-runde
- Spre erfaringene i organisasjonen
- Sett nye forbedringsmål

Syklusen stopper aldri - etter Act starter en ny Plan-fase med fokus på neste forbedring.`,
    },
    {
      id: 'od-4-2-text-3',
      type: 'text',
      content: `### Demings 14 prinsipper

W. Edwards Deming regnes som en av grunnleggerne av moderne kvalitetsledelse. Her er noen av hans viktigste prinsipper:

**1. Skap konstant formål om forbedring**
- Langsiktig tenkning, ikke kortsiktig profitt

**2. Adopter den nye filosofien**
- Kvalitet er alles ansvar, ikke bare inspektørenes

**3. Slutt å stole på masseinspeksjon**
- Bygg kvalitet inn i prosessen, ikke kontroller den ut

**4. Slutt å tildele kontrakter basert på pris alene**
- Langsiktige leverandørforhold basert på kvalitet og tillit

**5. Forbedre produksjons- og servicesystemet kontinuerlig**
- Reduser variasjon og sløsing systematisk

**6. Innfør opplæring**
- Alle ansatte trenger riktig kompetanse

**7. Innfør lederskap**
- Ledere skal hjelpe folk å gjøre jobben bedre

**8. Driv ut frykt**
- Trygghet skaper bedre resultater enn frykt

**9. Bryt ned barrierer mellom avdelinger**
- Samarbeid, ikke silotenkning

**10. Fjern slagord og oppfordringer**
- Forbedring krever systemendring, ikke slagord`,
    },
    {
      id: 'od-4-2-text-4',
      type: 'text',
      content: `### Kvalitetssirkler og medarbeiderinvolvering

**Kvalitetssirkler:**
En kvalitetssirkel er en liten gruppe ansatte (typisk 4-8 personer) som regelmessig møtes for å identifisere, analysere og løse kvalitetsproblemer i sitt arbeidsområde.

**Kjennetegn:**
- Frivillig deltakelse
- Ansatte fra samme arbeidsområde
- Møtes regelmessig (f.eks. ukentlig eller månedlig)
- Bruker strukturerte problemløsningsmetoder
- Presenterer løsningsforslag for ledelsen

**Verktøy kvalitetssirkler bruker:**
- Brainstorming for idégenerering
- Ishikawa-diagram (fiskebensdiagram) for årsaksanalyse
- Paretoanalyse for å prioritere problemer
- Flytskjema for å kartlegge prosesser
- Sjekklister for datainnsamling

**Fordeler med kvalitetssirkler:**
- Utnytter ansattes kompetanse og erfaring
- Øker engasjement og eierskap
- Forbedringer basert på praksisnær kunnskap
- Styrker samarbeid og kommunikasjon
- Kompetanseutvikling for deltakerne`,
    },
    {
      id: 'od-4-2-tip-1',
      type: 'tip',
      title: 'Ishikawa-diagrammet',
      content: `Ishikawa-diagrammet (fiskebensdiagrammet) er et visuelt verktøy for å identifisere mulige årsaker til et problem. Problemet plasseres i "hodet" på fisken, og mulige årsaker kategoriseres langs "beinene" i kategorier som Mennesker, Metoder, Maskiner, Materialer, Målinger og Miljø (de 6 M-ene).`,
    },
    {
      id: 'od-4-2-example-1',
      type: 'example',
      title: 'Eksempel: PDCA-syklus for å redusere leveringstid',
      problem: 'En nettbutikk opplever at mange kunder klager på lang leveringstid. Gjennomsnittlig leveringstid er 7 dager, men kundene forventer 3-4 dager.',
      solution: `**Plan:**
- Problem: Leveringstid er 7 dager (mål: 3-4 dager)
- Datainnsamling viser flaskehalser:
  - Ordrebehandling: 1 dag
  - Plukking og pakking: 2 dager
  - Venting på transport: 2 dager
  - Transport: 2 dager
- Tiltak: Automatisere ordrebehandling, effektivisere lageret, bytte transportør

**Do:**
- Implementerer nytt ordresystem (automatisk behandling innen 1 time)
- Omorganiserer lageret med soner og elektronisk plukkliste
- Inngår avtale med ny transportør som henter daglig

**Check:**
- Etter 4 uker: Gjennomsnittlig leveringstid er nå 4 dager
- Ordrebehandling: 0 dager (automatisk)
- Plukking/pakking: 1 dag
- Venting: 1 dag
- Transport: 2 dager
- Kundeklager redusert med 60 %

**Act:**
- Nye rutiner standardiseres som fast praksis
- Opplæring av alle lageransatte i nytt system
- Neste PDCA: Redusere transporttiden ytterligere gjennom regional lagring`,
    },
    {
      id: 'od-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva står PDCA for?',
        options: [
          { id: 'a', text: 'Plan, Develop, Control, Adjust', isCorrect: false },
          { id: 'b', text: 'Plan, Do, Check, Act', isCorrect: true },
          { id: 'c', text: 'Process, Design, Check, Approve', isCorrect: false },
          { id: 'd', text: 'Plan, Document, Certify, Audit', isCorrect: false },
        ],
        solution: 'PDCA står for Plan (planlegg), Do (gjennomfør), Check (kontroller) og Act (standardiser/korriger). Det er en syklus for kontinuerlig forbedring utviklet av W. Edwards Deming.',
      },
    },
    {
      id: 'od-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        task: 'Forklar de fire grunnpilarene i TQM og hvorfor alle er nødvendige.',
        hints: ['Tenk på hva som skjer hvis én av pilarene mangler'],
        solution: 'De fire grunnpilarene er: 1) Kundefokus - uten dette vet man ikke hva kvalitet betyr for mottakeren. 2) Prosessorientering - uten dette rettes feil i ettertid i stedet for å forebygge. 3) Kontinuerlig forbedring - uten dette stagnerer virksomheten. 4) Medarbeiderinvolvering - uten dette mister man verdifull praksiskunnskap. Alle er nødvendige fordi de utfyller hverandre: Kundefokus gir retning, prosessorientering gir metode, kontinuerlig forbedring gir framdrift, og medarbeiderinvolvering gir gjennomføringskraft.',
      },
    },
    {
      id: 'od-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        task: 'Velg et kvalitetsproblem fra en virksomhet du kjenner, og beskriv hvordan du ville brukt PDCA-syklusen til å løse det.',
        solution: 'Eksempel - Lang ventetid på kafé: Plan: Identifiser at gjennomsnittlig ventetid er 15 min (mål: 5 min). Analyser årsaker: For få ansatte i rushtiden, ineffektiv arbeidsflyt, langsom espressomaskin. Tiltak: Innføre bemanningsplan basert på kundestrøm, ny arbeidsflytplan, og oppgraderingen av maskinen. Do: Teste ny bemanning og arbeidsflyt i én uke, kjøpe ny maskin. Check: Måle ventetid etter endringene - ventetiden er nå 7 minutter. Act: Standardisere bemanningsplanen, fortsette med ny arbeidsflyt, starte ny PDCA-runde for å komme ned mot 5 minutter.',
      },
    },
    {
      id: 'od-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        task: 'Hva er en kvalitetssirkel, og hva er fordelene med å bruke kvalitetssirkler?',
        solution: 'En kvalitetssirkel er en liten gruppe ansatte (4-8 personer) som frivillig møtes regelmessig for å identifisere og løse kvalitetsproblemer i sitt arbeidsområde. Fordelene er: 1) Utnytter kompetansen til de som kjenner prosessene best. 2) Øker ansattes engasjement og eierskap til forbedringer. 3) Gir praktiske og gjennomførbare løsninger. 4) Styrker samarbeid og kommunikasjon mellom ansatte. 5) Bidrar til kompetanseutvikling gjennom bruk av analytiske verktøy. 6) Skaper en kultur for kontinuerlig forbedring nedenfra.',
      },
    },
    {
      id: 'od-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        task: 'Deming sa at man skal "slutte å stole på masseinspeksjon." Hva mente han, og hva er alternativet?',
        solution: 'Deming mente at å kontrollere kvaliteten i ferdige produkter er for sent og for dyrt. Feil som oppdages ved sluttkontroll betyr at ressurser allerede er brukt på et defekt produkt. Alternativet er å bygge kvalitet inn i prosessen fra starten: 1) Designe prosesser som forhindrer feil. 2) Bruke statistisk prosesskontroll for å oppdage avvik tidlig. 3) Gi ansatte ansvar og myndighet til å stoppe produksjonen ved feil. 4) Forebygge feil gjennom opplæring og gode rutiner. Forebygging er billigere og mer effektivt enn inspeksjon.',
      },
    },
    {
      id: 'od-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        task: 'Drøft hvorfor ledelsesforankring er avgjørende for å lykkes med TQM.',
        solution: 'Ledelsesforankring er avgjørende fordi: 1) Ressurser: Toppledelsen må avsette tid og penger til kvalitetsarbeid. 2) Prioritering: Hvis ledelsen ikke prioriterer kvalitet, vil heller ikke resten av organisasjonen gjøre det. 3) Kultur: Ledelsen setter tonen - deres holdninger og handlinger skaper kulturen. 4) Systemendring: TQM krever endringer i systemer og prosesser som bare ledelsen kan beslutte. 5) Langsiktighet: TQM tar tid å implementere, og ledelsen må ha tålmodighet og utholdenhet. 6) Barrierenedbrytning: Bare ledelsen kan bryte ned siloer mellom avdelinger. Uten ledelsens fulle støtte blir TQM et tomt slagord.',
      },
    },
    {
      id: 'od-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **TQM** er en helhetlig ledelsesfilosofi for kvalitet
- **PDCA-syklusen** gir rammeverk for systematisk forbedring
- **Demings prinsipper** understreker forebygging fremfor kontroll
- **Kvalitetssirkler** involverer ansatte direkte i forbedringsarbeidet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| TQM | Total Quality Management - helhetlig kvalitetsledelse |
| PDCA | Plan-Do-Check-Act - syklus for forbedring |
| Kvalitetssirkel | Ansattgruppe som løser kvalitetsproblemer |
| Ishikawa-diagram | Fiskebensdiagram for årsaksanalyse |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: ISO-standarder
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4_3: TextbookChapter = {
  id: 'okonomi-drift-4-3',
  courseId: 'okonomi-drift',
  chapterNumber: '4.3',
  title: 'ISO-standarder',
  description: 'Du lærer om ISO 9001 kvalitetsstyringssystemet, sertifiseringsprosessen og internkontroll. Kapittelet dekker hvordan standarder bidrar til systematisk kvalitetsarbeid og hva det innebærer å være ISO-sertifisert.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for relevante standarder og sertifiseringer innenfor kvalitetsledelse',
    'gjøre rede for kvalitetsledelse og drøfte hvordan systematisk kvalitetsarbeid kan bidra til å nå virksomhetens mål',
  ],
  content: [
    {
      id: 'od-4-3-intro',
      type: 'text',
      content: `## Standardisert kvalitetsarbeid

Hvordan kan en kunde i Norge vite at en leverandør i Japan leverer god kvalitet? Internasjonale standarder gir et felles rammeverk for kvalitetsstyring som er anerkjent over hele verden. ISO 9001 er den mest brukte kvalitetsstandarden globalt.

I dette kapittelet skal du lære:
- Hva ISO-standarder er og hvorfor de finnes
- ISO 9001 kvalitetsstyringssystem i detalj
- Sertifiseringsprosessen og hva den innebærer
- Internkontroll og internrevisjon`,
    },
    {
      id: 'od-4-3-def-1',
      type: 'definition',
      title: 'ISO 9001',
      content: `**ISO 9001** er en internasjonal standard for kvalitetsstyringssystemer utgitt av International Organization for Standardization (ISO). Standarden spesifiserer krav til et kvalitetsstyringssystem som en organisasjon kan bruke for å demonstrere sin evne til konsistent å levere produkter og tjenester som oppfyller krav fra kunder og myndigheter.`,
    },
    {
      id: 'od-4-3-text-1',
      type: 'text',
      content: `### Hva er ISO?

**International Organization for Standardization (ISO):**
- Grunnlagt i 1947 med hovedkontor i Geneve, Sveits
- Over 160 medlemsland
- Har utgitt over 24 000 internasjonale standarder
- Standard Norge representerer Norge i ISO

**Viktige ISO-standarder for virksomheter:**
- **ISO 9001:** Kvalitetsstyring
- **ISO 14001:** Miljøstyring
- **ISO 45001:** Arbeidsmiljø og sikkerhet
- **ISO 27001:** Informasjonssikkerhet
- **ISO 22000:** Mattrygghet
- **ISO 26000:** Samfunnsansvar (veiledning, ikke sertifiserbar)

**Hvorfor bruke ISO-standarder?**
- Felles språk og rammeverk internasjonalt
- Dokumenterer kvalitetsarbeidet
- Gir tillit til kunder og samarbeidspartnere
- Ofte krav i anbud og innkjøp
- Grunnlag for kontinuerlig forbedring`,
    },
    {
      id: 'od-4-3-text-2',
      type: 'text',
      content: `### ISO 9001 - Kjernekrav

ISO 9001 er bygget rundt syv kvalitetsledelsesprinsipper:

**1. Kundefokus:**
- Forstå kundens behov og forventninger
- Sikre at produkter og tjenester oppfyller krav
- Måle kundetilfredshet og handle på resultatene

**2. Lederskap:**
- Ledelsen skal etablere retning og formål
- Skape betingelser for at ansatte bidrar til kvalitetsmålene
- Vise engasjement gjennom handling

**3. Involvering av mennesker:**
- Kompetente, myndiggjorte og engasjerte ansatte
- Anerkjenne bidrag og fremme kompetanseutvikling

**4. Prosesstilnærming:**
- Forstå og styre aktiviteter som sammenkoblede prosesser
- Konsistente og forutsigbare resultater

**5. Forbedring:**
- Kontinuerlig forbedring som permanent mål
- Reagere på endringer i interne og eksterne forhold

**6. Evidensbasert beslutningstaking:**
- Beslutninger basert på analyse av data og informasjon

**7. Relasjonshåndtering:**
- Styre forholdet til relevante interessenter (leverandører, partnere)`,
    },
    {
      id: 'od-4-3-text-3',
      type: 'text',
      content: `### Sertifiseringsprosessen

**Trinn 1: Beslutning og forberedelse**
- Ledelsen beslutter å implementere ISO 9001
- Utnevne kvalitetsansvarlig / prosjektleder
- Gap-analyse: Hva mangler for å oppfylle kravene?

**Trinn 2: Implementering**
- Utvikle kvalitetspolitikk og kvalitetsmål
- Dokumentere prosesser og prosedyrer
- Implementere nødvendige endringer
- Opplæring av alle ansatte

**Trinn 3: Internrevisjon**
- Gjennomføre intern revisjon for å sjekke at systemet fungerer
- Identifisere og lukke avvik
- Ledelsens gjennomgang av kvalitetssystemet

**Trinn 4: Sertifiseringsrevisjon**
- Velge et akkreditert sertifiseringsorgan (f.eks. DNV, Nemko)
- Trinn 1-revisjon: Dokumentgjennomgang
- Trinn 2-revisjon: Verifisering på stedet
- Eventuelle avvik må lukkes

**Trinn 5: Vedlikehold**
- Sertifikatet gjelder i 3 år
- Årlige oppfølgingsrevisjoner
- Re-sertifisering hvert tredje år
- Kontinuerlig forbedring av systemet`,
    },
    {
      id: 'od-4-3-def-2',
      type: 'definition',
      title: 'Internkontroll',
      content: `**Internkontroll** er systematiske tiltak som en virksomhet iverksetter for å sikre at aktiviteter planlegges, organiseres, utføres, vedlikeholdes og dokumenteres i samsvar med krav fastsatt i lover, forskrifter og standarder. I Norge er internkontroll lovpålagt for HMS gjennom internkontrollforskriften.`,
    },
    {
      id: 'od-4-3-text-4',
      type: 'text',
      content: `### Internkontroll og internrevisjon

**Internkontroll omfatter:**
- Kartlegge farer og problemer
- Vurdere risiko knyttet til identifiserte farer
- Utarbeide planer og tiltak for å redusere risiko
- Iverksette rutiner for å avdekke og rette avvik
- Systematisk overvåking og gjennomgang

**Internrevisjon:**
- Planlagt og systematisk gjennomgang av kvalitetssystemet
- Sjekker om virksomheten følger egne prosedyrer
- Identifiserer forbedringsmuligheter
- Rapporterer funn til ledelsen

**Typer funn ved revisjon:**
- **Avvik (stor):** Manglende oppfyllelse av krav som påvirker kvaliteten vesentlig
- **Avvik (mindre):** Enkelttilfelle av manglende oppfyllelse
- **Observasjon:** Noe som kan bli et avvik om det ikke håndteres
- **Forbedring:** Forslag til forbedring utover kravene

**Dokumentasjon:**
- Kvalitetshåndbok
- Prosedyrer og arbeidsinstrukser
- Registreringer og rapporter
- Avviksrapporter og korrigerende tiltak`,
    },
    {
      id: 'od-4-3-warning-1',
      type: 'warning',
      title: 'Sertifisering er ikke en garanti',
      content: `ISO-sertifisering betyr at virksomheten har et kvalitetsstyringssystem som oppfyller kravene i standarden. Det er ikke en garanti for at produktene eller tjenestene er gode. Systemet skal legge til rette for kvalitet, men det er virksomheten selv som må fylle systemet med innhold og kontinuerlig forbedring.`,
    },
    {
      id: 'od-4-3-example-1',
      type: 'example',
      title: 'Eksempel: ISO 9001-implementering i et byggefirma',
      problem: 'Et mellomstort byggefirma ønsker ISO 9001-sertifisering for å kunne delta i offentlige anbud.',
      solution: `**Gap-analyse avdekket:**
- Ingen skriftlige prosedyrer for byggeprosjekter
- Manglende systematisk kundetilfredshetsmåling
- Uformell kompetansestyring
- Ingen systematisk leverandørvurdering

**Implementering:**

1. **Kvalitetspolitikk:**
"Vi skal levere byggverk som oppfyller kundens krav og forventninger, til avtalt tid og budsjett, med fokus på sikkerhet og bærekraft."

2. **Prosesser dokumentert:**
- Tilbudsprosess med sjekkliste
- Prosjektgjennomføring med milepæler
- Kvalitetskontroll på byggeplass
- Avvikshåndtering og korrigerende tiltak
- Leverandørvurdering og innkjøp

3. **Målinger innført:**
- Kundeundersøkelse etter hvert prosjekt
- Registrering av avvik og reklamasjoner
- Leverandørvurdering hvert halvår
- Ansattes kompetansekartlegging

4. **Internrevisjon:**
- To internrevisjoner per år
- Opplæring av interne revisorer
- Ledelsens gjennomgang kvartalsvis

**Resultat etter sertifisering:**
- 30 % færre reklamasjoner
- Bedre prosjektplanlegging
- Kvalifisert for offentlige anbud
- Økt tillit hos kundene`,
    },
    {
      id: 'od-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hvor lenge gjelder et ISO 9001-sertifikat?',
        options: [
          { id: 'a', text: '1 år', isCorrect: false },
          { id: 'b', text: '3 år', isCorrect: true },
          { id: 'c', text: '5 år', isCorrect: false },
          { id: 'd', text: '10 år', isCorrect: false },
        ],
        solution: 'Et ISO 9001-sertifikat gjelder i 3 år, med årlige oppfølgingsrevisjoner. Etter 3 år må virksomheten gjennomgå en re-sertifisering for å beholde sertifikatet.',
      },
    },
    {
      id: 'od-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom internkontroll og internrevisjon.',
        hints: ['Tenk på internkontroll som det daglige systemet og internrevisjon som en sjekk av systemet'],
        solution: 'Internkontroll er det løpende, systematiske arbeidet med å sikre at virksomheten oppfyller krav i lover, forskrifter og standarder. Det omfatter rutiner, prosedyrer og tiltak som gjennomføres daglig. Internrevisjon er en planlagt og systematisk gjennomgang av internkontrollsystemet for å sjekke om det fungerer som tiltenkt. Det er altså en kontroll av kontrollen. Internrevisjonen identifiserer avvik og forbedringsmuligheter og rapporterer dette til ledelsen.',
      },
    },
    {
      id: 'od-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        task: 'Nevn tre fordeler og to ulemper ved ISO 9001-sertifisering.',
        solution: 'Fordeler: 1) Gir tillit og troverdighet overfor kunder og samarbeidspartnere. 2) Systematiserer kvalitetsarbeidet og gir bedre kontroll over prosesser. 3) Ofte et krav i anbud, spesielt offentlige - åpner nye markeder. Ulemper: 1) Ressurskrevende å implementere og vedlikeholde - krever tid, penger og personell. 2) Kan bli byråkratisk hvis fokuset er på dokumentasjon fremfor faktisk forbedring - systemet kan bli et mål i seg selv i stedet for et verktøy.',
      },
    },
    {
      id: 'od-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        task: 'Beskriv de syv kvalitetsledelsessprinsippene i ISO 9001.',
        solution: '1) Kundefokus: Forstå og oppfylle kundebehov. 2) Lederskap: Ledelsen skaper retning og betingelser. 3) Involvering av mennesker: Kompetente og engasjerte ansatte. 4) Prosesstilnærming: Styre aktiviteter som sammenkoblede prosesser. 5) Forbedring: Kontinuerlig forbedring som permanent mål. 6) Evidensbasert beslutningstaking: Beslutninger basert på data og analyse. 7) Relasjonshåndtering: Styre forhold til interessenter som leverandører og partnere.',
      },
    },
    {
      id: 'od-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        task: 'Hva er forskjellen mellom et stort avvik og en observasjon ved en revisjon?',
        solution: 'Et stort avvik er en alvorlig mangel der et krav i standarden ikke oppfylles og det påvirker kvaliteten vesentlig. Eksempel: Virksomheten har ingen rutiner for å håndtere kundeklager. Et stort avvik må lukkes (rettes opp) før sertifikat kan utstedes. En observasjon er noe som kan bli et avvik om det ikke håndteres, men som ennå ikke er et brudd på kravene. Eksempel: Noen prosedyrer er ikke oppdatert med siste endringer, men ansatte følger likevel riktig praksis. Observasjoner bør følges opp, men blokkerer ikke sertifisering.',
      },
    },
    {
      id: 'od-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        task: 'Drøft hvorfor ISO-sertifisering ikke er en garanti for god kvalitet.',
        solution: 'ISO-sertifisering bekrefter at virksomheten har et kvalitetsstyringssystem som oppfyller standardens krav, men: 1) Systemet sikrer prosesser, ikke nødvendigvis sluttproduktets kvalitet direkte. 2) Systemet er bare så godt som virksomhetens vilje til å følge det i praksis. 3) Revisjoner er stikkprøver og kan ikke avdekke alt. 4) Standarden stiller minimumskrav - virksomheten definerer selv ambisjonsnivået. 5) Mellom revisjoner kan praksis falle fra. 6) Dokumentasjon kan være på plass uten at kulturen er endret. Sertifisering er et rammeverk, men det er virksomhetens daglige innsats som skaper faktisk kvalitet.',
      },
    },
    {
      id: 'od-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **ISO** er en internasjonal organisasjon som utvikler standarder
- **ISO 9001** er verdens mest brukte kvalitetsstandard
- **Sertifiseringsprosessen** innebærer implementering, internrevisjon og ekstern revisjon
- **Internkontroll** er systematisk kvalitetsarbeid i hverdagen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| ISO 9001 | Internasjonal standard for kvalitetsstyring |
| Sertifisering | Ekstern bekreftelse på at standarden oppfylles |
| Internrevisjon | Intern sjekk av kvalitetssystemet |
| Internkontroll | Systematiske tiltak for å sikre kvalitet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Prosessforbedring
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4_4: TextbookChapter = {
  id: 'okonomi-drift-4-4',
  courseId: 'okonomi-drift',
  chapterNumber: '4.4',
  title: 'Prosessforbedring',
  description: 'Du lærer om metoder og verktøy for å forbedre prosesser i en virksomhet. Kapittelet dekker verdistrømsanalyse, Six Sigma, statistisk prosesskontroll og Lean-prinsipper for å eliminere sløsing.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere og foreslå tiltak for å forbedre kvaliteten på produkter og tjenester',
    'gjøre rede for kvalitetsledelse og drøfte hvordan systematisk kvalitetsarbeid kan bidra til å nå virksomhetens mål',
  ],
  content: [
    {
      id: 'od-4-4-intro',
      type: 'text',
      content: `## Bedre prosesser, bedre resultater

Hvert produkt og hver tjeneste er resultatet av en prosess. Hvis prosessen har problemer - sløsing, forsinkelser, feil - vil dette gjenspeiles i resultatet. Prosessforbedring handler om å analysere, optimalisere og standardisere prosessene for å levere bedre kvalitet mer effektivt.

I dette kapittelet skal du lære:
- Verdistrømsanalyse (Value Stream Mapping)
- Six Sigma og DMAIC-metoden
- Statistisk prosesskontroll (SPC)
- Lean-prinsipper og eliminering av sløsing`,
    },
    {
      id: 'od-4-4-def-1',
      type: 'definition',
      title: 'Verdistrømsanalyse',
      content: `**Verdistrømsanalyse** (Value Stream Mapping, VSM) er en Lean-metode for å kartlegge alle steg i en prosess fra start til slutt, for å identifisere hvilke steg som skaper verdi for kunden og hvilke som er sløsing. Målet er å eliminere eller redusere ikke-verdiskapende aktiviteter.`,
    },
    {
      id: 'od-4-4-text-1',
      type: 'text',
      content: `### Verdistrømsanalyse i praksis

**Tre kategorier av aktiviteter:**

**1. Verdiskapende aktiviteter:**
- Aktiviteter kunden er villig til å betale for
- Endrer produktet eller tjenesten på en måte kunden verdsetter
- Eksempel: Tilberedning av mat, montering av produkt

**2. Nødvendig ikke-verdiskapende:**
- Kunden betaler ikke for det, men det er nødvendig
- Lovkrav, sikkerhetskrav, administrative krav
- Eksempel: Kvalitetskontroll, fakturabehandling

**3. Sløsing (muda):**
- Aktiviteter som verken skaper verdi eller er nødvendige
- Bør elimineres eller minimeres
- Eksempel: Venting, unødig transport, lager

**De åtte typene sløsing (Lean):**
1. **Overproduksjon:** Produsere mer enn nødvendig
2. **Venting:** Tid brukt på å vente
3. **Transport:** Unødig flytting av materialer
4. **Overbarbeiding:** Gjøre mer enn kunden krever
5. **Lager:** For mye på lager binder kapital
6. **Bevegelse:** Unødvendig bevegelse for ansatte
7. **Defekter:** Feil som krever omarbeid
8. **Ubrukt talent:** Ikke utnytte ansattes kompetanse`,
    },
    {
      id: 'od-4-4-def-2',
      type: 'definition',
      title: 'Six Sigma',
      content: `**Six Sigma** er en datadrevet metodikk for prosessforbedring som har som mål å redusere variasjon og feil i prosesser til maksimalt 3,4 feil per million muligheter. Navnet refererer til seks standardavvik (sigma) fra gjennomsnittet i en normalfordeling.`,
    },
    {
      id: 'od-4-4-text-2',
      type: 'text',
      content: `### Six Sigma og DMAIC

Six Sigma bruker DMAIC-metoden for prosessforbedring:

**D - Define (Definere):**
- Definer problemet klart og tydelig
- Hvem er kunden og hva er deres krav?
- Hva er omfanget av prosjektet?
- Verktøy: Prosjektcharter, SIPOC-diagram

**M - Measure (Måle):**
- Samle data om nåværende prosessytelse
- Etablere en basislinje (baseline)
- Hvor mange feil oppstår? Hvor stor er variasjonen?
- Verktøy: Datainnsamlingsplan, prosessflytskjema

**A - Analyze (Analysere):**
- Identifiser rotårsakene til problemet
- Analyser dataene for mønstre og sammenhenger
- Skille mellom symptomer og årsaker
- Verktøy: Ishikawa-diagram, Paretoanalyse, regresjonsanalyse

**I - Improve (Forbedre):**
- Utvikle og implementere løsninger
- Teste løsninger i liten skala
- Verifisere at forbedringen fungerer
- Verktøy: Brainstorming, pilottest, kostnads-/nytteanalyse

**C - Control (Kontrollere):**
- Standardisere forbedringen
- Overvåke prosessen for å sikre varig effekt
- Dokumentere ny praksis og opplæring
- Verktøy: Kontrollkart, prosedyrer, opplæringsplan`,
    },
    {
      id: 'od-4-4-text-3',
      type: 'text',
      content: `### Statistisk prosesskontroll (SPC)

Statistisk prosesskontroll er en metode for å overvåke og styre en prosess ved hjelp av statistiske metoder.

**Kontrollkart:**
- Et diagram som viser prosessens ytelse over tid
- En senterlinje (gjennomsnitt)
- Øvre kontrollgrense (UCL) og nedre kontrollgrense (LCL)
- Datapunkter plottes fortløpende

**Tolkning av kontrollkart:**
- Punkter innenfor kontrollgrensene = prosessen er under kontroll
- Punkter utenfor kontrollgrensene = spesiell årsak, krever handling
- Mønstre (trend, syklus) kan tyde på systematisk endring

**Vanlig variasjon vs. spesiell variasjon:**

*Vanlig variasjon:*
- Naturlig variasjon i prosessen
- Forutsigbar og stabil
- Kan bare reduseres gjennom systemendringer
- Eksempel: Liten variasjon i vekt av brød

*Spesiell variasjon:*
- Uventet variasjon fra identifiserbar årsak
- Uforutsigbar
- Kan fjernes ved å eliminere årsaken
- Eksempel: Feil innstilling på maskin gir plutselig avvik

**Prosesskapabilitet:**
- Måler om prosessen er i stand til å oppfylle spesifikasjonene
- Cp og Cpk er vanlige kapabilitetsmål
- Cp >= 1,33 anses som god kapabilitet`,
    },
    {
      id: 'od-4-4-text-4',
      type: 'text',
      content: `### Lean-prinsipper for prosessforbedring

**De fem Lean-prinsippene:**

**1. Definer verdi:**
- Verdi defineres av kunden
- Hva er kunden villig til å betale for?

**2. Kartlegg verdistrømmen:**
- Identifiser alle steg i prosessen
- Skill verdiskapende fra ikke-verdiskapende

**3. Skap flyt:**
- Eliminer forstyrrelser og flaskehalser
- La arbeidet flyte jevnt gjennom prosessen

**4. Innfør trekk (pull):**
- Produser bare det kunden etterspør
- Unngå overproduksjon og lager

**5. Søk perfeksjon:**
- Kontinuerlig forbedring (kaizen)
- Det finnes alltid en bedre måte

**Lean-verktøy:**
- **5S:** Sortere, Systematisere, Skinne, Standardisere, Sikre (arbeidsplassorganisering)
- **Kanban:** Visuelt styringssystem for arbeidsflyten
- **Kaizen:** Kontinuerlig forbedring i små steg
- **Poka-yoke:** Feilsikring - gjør det umulig å gjøre feil
- **Just-in-time:** Levere riktig mengde til riktig tid`,
    },
    {
      id: 'od-4-4-tip-1',
      type: 'tip',
      title: 'Poka-yoke i hverdagen',
      content: `Poka-yoke (feilsikring) finnes overalt. USB-kontakter som bare kan settes inn på én måte, mikrobølgeovner som stopper når døren åpnes, og bilnøkler som ikke kan tas ut av tenningen med motoren i gang. Prinsippet er å designe prosesser og produkter slik at feil blir umulige eller umiddelbart oppdages.`,
    },
    {
      id: 'od-4-4-example-1',
      type: 'example',
      title: 'Eksempel: DMAIC for å redusere feilprosent i produksjon',
      problem: 'En matvareprodusent opplever at 5 % av produktene ikke oppfyller vektspesifikasjonen, noe som fører til reklamasjoner og svinn.',
      solution: `**Define:**
- Problem: 5 % av produktene er utenfor vektspesifikasjonen (500g +/- 10g)
- Kunde: Dagligvarekjeder krever konsistent vekt
- Mål: Redusere feilprosent til under 1 %

**Measure:**
- Veier 500 produkter over en uke
- Gjennomsnitt: 498g, standardavvik: 8g
- 5 % ligger utenfor 490-510g-intervallet
- De fleste avvikene er undervekt

**Analyze:**
- Ishikawa-diagram avdekker mulige årsaker
- Data viser at avvikene er størst på nattskiftet
- Maskinene kalibreres ikke mellom skiftene
- Temperaturen i produksjonslokalet varierer

**Improve:**
- Innfører daglig kalibrering av doserings maskiner
- Installerer temperaturkontroll i lokalet
- Justerer gjennomsnittsfylling til 502g (buffer)
- Opplæring av nattskiftpersonell

**Control:**
- Kontrollkart innføres med veiing hver 30. enhet
- Alarm ved avvik fra kontrollgrenser
- Ukentlig rapport til produksjonsleder
- Resultat etter 3 mnd: Feilprosent redusert til 0,8 %`,
    },
    {
      id: 'od-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva står DMAIC for i Six Sigma?',
        options: [
          { id: 'a', text: 'Design, Manage, Assess, Implement, Close', isCorrect: false },
          { id: 'b', text: 'Define, Measure, Analyze, Improve, Control', isCorrect: true },
          { id: 'c', text: 'Develop, Monitor, Adapt, Integrate, Confirm', isCorrect: false },
          { id: 'd', text: 'Document, Measure, Audit, Inspect, Certify', isCorrect: false },
        ],
        solution: 'DMAIC står for Define (definere), Measure (måle), Analyze (analysere), Improve (forbedre) og Control (kontrollere). Det er Six Sigmas strukturerte metode for prosessforbedring.',
      },
    },
    {
      id: 'od-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        task: 'Nevn de åtte typene sløsing i Lean og gi et eksempel på hver.',
        solution: '1) Overproduksjon: Trykke flere brosjyrer enn man trenger. 2) Venting: Ansatte som venter på materialer eller godkjenning. 3) Transport: Flytte varer mellom lagre uten grunn. 4) Overbearbeiding: Polere en overflate som skal males over. 5) Lager: Store mengder råvarer som binder kapital. 6) Bevegelse: Ansatte som må gå langt for å hente verktøy. 7) Defekter: Produkter som må kasseres eller omarbeides. 8) Ubrukt talent: Høyt utdannede ansatte som gjør rutineoppgaver.',
      },
    },
    {
      id: 'od-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom vanlig variasjon og spesiell variasjon i en prosess.',
        hints: ['Tenk på hva som kan gjøres med hver type variasjon'],
        solution: 'Vanlig variasjon er den naturlige, iboende variasjonen i en prosess som alltid er til stede. Den er forutsigbar og stabil, og kan bare reduseres gjennom fundamentale endringer i selve systemet. Eksempel: Liten variasjon i fyllingsnivået i flasker. Spesiell variasjon skyldes identifiserbare, spesifikke årsaker som ikke er en del av prosessens normale oppførsel. Den er uforutsigbar og kan elimineres ved å finne og fjerne årsaken. Eksempel: En feilinnstilt maskin som plutselig gir mye større avvik enn normalt.',
      },
    },
    {
      id: 'od-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        task: 'Hva er poka-yoke, og gi tre eksempler fra dagliglivet.',
        solution: 'Poka-yoke (japansk for "feilsikring") er en teknikk for å designe prosesser, produkter eller systemer slik at feil blir umulige eller umiddelbart oppdages. Eksempler: 1) SIM-kort som bare kan settes inn på én måte på grunn av avskåret hjørne. 2) Bilen starter ikke uten at clutchen er trykket inn (manuelt gir). 3) Mikrobølgeovnen stopper umiddelbart når døren åpnes. 4) Vaskemaskinen låser døren under vask. 5) USB-C-kontakter som kan settes inn begge veier eliminerer feil.',
      },
    },
    {
      id: 'od-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        task: 'Beskriv de fem Lean-prinsippene og forklar hvordan de henger sammen.',
        solution: '1) Definer verdi: Start med å forstå hva kunden faktisk verdsetter. 2) Kartlegg verdistrømmen: Identifiser alle steg fra råvare til ferdig produkt/tjeneste og skille verdiskapende fra sløsing. 3) Skap flyt: Eliminer forstyrrelser slik at arbeidet flyter jevnt uten venting eller flaskehalser. 4) Innfør trekk (pull): Produser bare det kunden etterspør, når det etterspørres. 5) Søk perfeksjon: Gjenta prosessen - det finnes alltid forbedringspotensial. Prinsippene henger sammen som en kjede: Først forstår man verdi, deretter kartlegger man prosessen, optimaliserer flyten, styrer etter etterspørsel, og forbedrer kontinuerlig.',
      },
    },
    {
      id: 'od-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        task: 'Tenk på en hverdagsprosess (for eksempel morgensrutinen din eller en arbeidsprosess) og identifiser eksempler på verdiskapende aktiviteter, nødvendig sløsing og ren sløsing.',
        solution: 'Eksempel - morgenrutine: Verdiskapende: Dusje (hygiene), spise frokost (energi), kle seg (nødvendig). Nødvendig sløsing: Stå i kø på badet (nødvendig flaskehals), låse døren (sikkerhet). Ren sløsing: Lete etter nøkler (mangel på system), sjekke mobilen i 20 minutter (uproduktivt), gå tilbake fordi man glemte noe (defekt planlegging). Forbedring: Legge klart klær kvelden før, ha fast plass for nøkler (5S), sette alarm for mobilbruk.',
      },
    },
    {
      id: 'od-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Verdistrømsanalyse** kartlegger prosesser og identifiserer sløsing
- **Six Sigma** bruker DMAIC-metoden for datadrevet prosessforbedring
- **Statistisk prosesskontroll** overvåker prosesser med kontrollkart
- **Lean-prinsipper** fokuserer på å eliminere sløsing og skape flyt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Verdistrømsanalyse | Kartlegging av verdiskapende og ikke-verdiskapende aktiviteter |
| Six Sigma | Datadrevet metode for å redusere feil og variasjon |
| DMAIC | Define, Measure, Analyze, Improve, Control |
| Lean | Filosofi for å eliminere sløsing og skape flyt |
| Poka-yoke | Feilsikring - gjør det umulig å gjøre feil |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Innovasjon og kvalitet
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_4_5: TextbookChapter = {
  id: 'okonomi-drift-4-5',
  courseId: 'okonomi-drift',
  chapterNumber: '4.5',
  title: 'Innovasjon og kvalitet',
  description: 'Du lærer om sammenhengen mellom innovasjon, kvalitet og konkurransekraft. Kapittelet dekker kontinuerlig forbedring versus radikal innovasjon, design thinking som metode, og hvordan innovasjon kan drive kvalitetsutvikling.',
  estimatedMinutes: 40,
  competenceGoals: [
    'drøfte sammenhengen mellom innovasjon, kvalitet og konkurransekraft',
    'vurdere og foreslå tiltak for å forbedre kvaliteten på produkter og tjenester',
  ],
  content: [
    {
      id: 'od-4-5-intro',
      type: 'text',
      content: `## Kvalitet gjennom nytenkning

Kvalitetsarbeid handler ikke bare om å eliminere feil - det handler også om å skape noe nytt og bedre. Innovasjon er motoren som driver virksomheter fremover, og kvalitet er drivstoffet som holder motoren i gang. Uten innovasjon stagnerer kvaliteten, og uten kvalitet mislykkes innovasjonen.

I dette kapittelet skal du lære:
- Sammenhengen mellom innovasjon og kvalitet
- Forskjellen mellom inkrementell og radikal innovasjon
- Design thinking som innovasjonsmetode
- Hvordan bygge en kultur for innovasjon og forbedring`,
    },
    {
      id: 'od-4-5-def-1',
      type: 'definition',
      title: 'Innovasjon',
      content: `**Innovasjon** er implementeringen av noe nytt eller vesentlig forbedret - et produkt, en tjeneste, en prosess, en markedsføringsmetode eller en organisasjonsform - som skaper verdi for virksomheten eller dens kunder. Det er ikke nok å ha en idé; innovasjon krever at ideen realiseres og tas i bruk.`,
    },
    {
      id: 'od-4-5-text-1',
      type: 'text',
      content: `### Typer innovasjon

**Inkrementell innovasjon (kontinuerlig forbedring):**
- Gradvise, stegvise forbedringer av eksisterende produkter/prosesser
- Lav risiko, forutsigbare resultater
- Bygger på eksisterende kunnskap og teknologi
- Eksempel: Ny versjon av en mobiltelefon med bedre kamera

**Radikal innovasjon (banebrytende):**
- Helt nye produkter, tjenester eller forretningsmodeller
- Høy risiko, potensielt store gevinster
- Kan endre hele bransjer
- Eksempel: Overgangen fra fysiske butikker til netthandel

**Prosessinnovasjon:**
- Nye eller forbedrede måter å produsere på
- Effektivisering, automatisering, digitalisering
- Eksempel: Robotisering av produksjonslinjer

**Organisatorisk innovasjon:**
- Nye måter å organisere arbeidet på
- Nye ledelsesmodeller, samarbeidsformer
- Eksempel: Innføring av selvstyrte team

**Forretningsmodellinnovasjon:**
- Nye måter å skape og fange verdi
- Kan endre hele verdikjeden
- Eksempel: Fra engangssalg til abonnementsmodell`,
    },
    {
      id: 'od-4-5-text-2',
      type: 'text',
      content: `### Sammenhengen mellom innovasjon og kvalitet

**Kvalitet driver innovasjon:**
- Kundetilbakemeldinger avdekker nye behov
- Feilanalyse gir innsikt i forbedringsmuligheter
- Systematisk kvalitetsarbeid frigjør ressurser til innovasjon
- Data fra kvalitetsmålinger gir grunnlag for nye løsninger

**Innovasjon driver kvalitet:**
- Nye teknologier gir bedre produkter
- Prosessinnovasjon reduserer feil og variasjon
- Digitalisering forbedrer overvåking og kontroll
- Nye materialer gir bedre holdbarhet og ytelse

**Kaizen vs. Kaikaku:**

*Kaizen (kontinuerlig forbedring):*
- Mange små forbedringer over tid
- Alle ansatte bidrar
- Lav risiko
- Gradvis resultat
- Eksempel: Daglige forbedringer på arbeidsplassen

*Kaikaku (radikal endring):*
- Store, banebrytende endringer
- Ledelses-drevet
- Høy risiko
- Dramatisk resultat
- Eksempel: Total omlegging av produksjonssystem

De mest suksessfulle virksomhetene mestrer begge tilnærminger.`,
    },
    {
      id: 'od-4-5-def-2',
      type: 'definition',
      title: 'Design thinking',
      content: `**Design thinking** er en menneskesentrert innovasjonsmetodikk som kombinerer empati med brukere, kreativitet i idégenerering og rasjonalitet i testing og implementering. Prosessen er iterativ og starter alltid med en dyp forståelse av brukerens behov.`,
    },
    {
      id: 'od-4-5-text-3',
      type: 'text',
      content: `### Design thinking i praksis

**Fem faser i design thinking:**

**1. Empati (Empathize):**
- Forstå brukeren gjennom observasjon og intervjuer
- Sett deg i brukerens sko
- Ikke anta - spør og observer
- Verktøy: Brukerintervjuer, observasjon, personas

**2. Definer (Define):**
- Formuler problemet basert på innsikten
- Klart og presist problemutsagn
- Fokuser på brukerens faktiske behov
- Verktøy: Problemutsagn, "How might we"-spørsmål

**3. Idégenerer (Ideate):**
- Generer mange mulige løsninger
- Kvantitet før kvalitet
- Bygg på andres idéer
- Verktøy: Brainstorming, tankekart, skisser

**4. Prototype (Prototype):**
- Lag en enkel versjon av løsningen
- Rask og billig å lage
- Konkretiser idéen så den kan testes
- Verktøy: Papirprototyper, mock-ups, modeller

**5. Test (Test):**
- Test prototypen med ekte brukere
- Observer hvordan de bruker den
- Samle tilbakemeldinger
- Iterer: Tilbake til tidligere faser ved behov`,
    },
    {
      id: 'od-4-5-text-4',
      type: 'text',
      content: `### Bygge en innovasjonskultur

**Kjennetegn på innovasjonskulturer:**

**Psykologisk trygghet:**
- Trygt å komme med idéer
- Feil er læringsmuligheter, ikke grunnlag for straff
- Åpen kommunikasjon

**Tid og ressurser:**
- Avsatt tid til eksperimentering
- Budsjett for innovasjonsprosjekter
- Tilgang til nødvendige verktøy og kompetanse

**Tverrfaglig samarbeid:**
- Bryte ned siloer mellom avdelinger
- Team med ulike perspektiver og kompetanser
- Deling av idéer og kunnskap

**Ledelsens rolle:**
- Støtte og oppmuntre innovasjon
- Akseptere at ikke alle idéer lykkes
- Feire forsøk, ikke bare suksesser
- Være rollemodeller for nytenkning

**Kundeinnsikt:**
- Systematisk innhenting av kundebehov
- Involvere kunder i utviklingsprosessen
- Teste løsninger med reelle brukere

**Belønning og anerkjennelse:**
- Anerkjenne innovative bidrag
- Premiering av forbedringsforslag
- Synliggjøre suksesshistorier`,
    },
    {
      id: 'od-4-5-tip-1',
      type: 'tip',
      title: 'Fail fast, learn fast',
      content: `Innovative virksomheter aksepterer at mange idéer ikke vil fungere. Hemmeligheten er å feile raskt og billig gjennom prototyping og testing, slik at man lærer fort og kan justere kursen. Det er bedre å teste ti idéer og finne én som fungerer, enn å bruke all tid på å perfeksjonere én idé som kanskje ikke treffer.`,
    },
    {
      id: 'od-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Design thinking for å forbedre pasientopplevelsen',
      problem: 'Et sykehus ønsker å forbedre opplevelsen for pasienter som venter på poliklinisk behandling.',
      solution: `**Empati:**
- Intervjuer med 20 pasienter
- Observasjon i venterom i en uke
- Funn: Pasienter opplever usikkerhet, kjedsomhet, angst, dårlig informasjon om ventetid

**Definer:**
- Problemutsagn: "Pasienter på poliklinikken opplever unødvendig stress og usikkerhet fordi de ikke vet hvor lenge de må vente eller hva som skal skje."

**Idégenerering:**
- Digital kø-display med estimert ventetid
- App med varsel 15 min før tur
- Informasjonsvideoer om prosedyrer
- Forbedret venterom med aktiviteter
- SMS-system slik at pasienter kan vente andre steder

**Prototype:**
- Enkel papirprototype av kø-display
- Mock-up av SMS-varslingssystem
- Skisse av nytt venterom-layout

**Test:**
- Testet digital kø-display med 50 pasienter
- 85 % sa det reduserte usikkerheten
- SMS-varsling testet med 30 pasienter - svært populært
- Noen eldre pasienter foretrakk det fysiske displayet

**Implementering:**
- Kø-display installert med estimert ventetid
- SMS-varsel innført for de som ønsker det
- Informasjonsvideoer på skjermer i venterom
- Resultat: 40 % bedring i pasienttilfredshet`,
    },
    {
      id: 'od-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom inkrementell og radikal innovasjon?',
        options: [
          { id: 'a', text: 'Inkrementell er billigere enn radikal', isCorrect: false },
          { id: 'b', text: 'Inkrementell er gradvise forbedringer, radikal er banebrytende endringer', isCorrect: true },
          { id: 'c', text: 'Inkrementell er kun for produkter, radikal er for tjenester', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, bare ulike navn for det samme', isCorrect: false },
        ],
        solution: 'Inkrementell innovasjon er gradvise, stegvise forbedringer av eksisterende produkter og prosesser (lav risiko). Radikal innovasjon er helt nye produkter, tjenester eller forretningsmodeller som kan endre hele bransjer (høy risiko, potensielt store gevinster).',
      },
    },
    {
      id: 'od-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        task: 'Beskriv de fem fasene i design thinking og forklar hvorfor prosessen er iterativ.',
        hints: ['Tenk på hva som skjer når testresultatene viser at løsningen ikke fungerer'],
        solution: 'De fem fasene er: 1) Empati - forstå brukernes behov gjennom observasjon og intervjuer. 2) Definer - formuler problemet klart basert på innsikten. 3) Idégenerering - generer mange mulige løsninger kreativt. 4) Prototyping - lag enkle versjoner for testing. 5) Test - test med ekte brukere og samle tilbakemeldinger. Prosessen er iterativ fordi man sjelden finner den perfekte løsningen på første forsøk. Når man tester og oppdager at løsningen ikke fungerer optimalt, går man tilbake til en tidligere fase - kanskje man trenger mer empati, en ny problemdefinisjon, eller nye idéer. Denne syklusen gjentas til man finner en løsning som virkelig fungerer.',
      },
    },
    {
      id: 'od-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        task: 'Drøft sammenhengen mellom innovasjon og kvalitet. Hvordan kan de forsterke hverandre?',
        solution: 'Innovasjon og kvalitet forsterker hverandre gjensidig: Kvalitet driver innovasjon ved at kundetilbakemeldinger avdekker nye behov, feilanalyse gir innsikt, og frigjorte ressurser fra effektivisering kan brukes på utvikling. Innovasjon driver kvalitet ved at ny teknologi gir bedre produkter, prosessinnovasjon reduserer feil, og digitalisering forbedrer overvåking. Virksomheter som mestrer begge er mest konkurransedyktige: De forbedrer eksisterende produkter kontinuerlig (kaizen) og utvikler helt nye løsninger (kaikaku). Uten kvalitetskontroll mislykkes innovasjoner, og uten innovasjon stagnerer kvaliteten.',
      },
    },
    {
      id: 'od-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        task: 'Hva kjennetegner en god innovasjonskultur, og hvorfor er psykologisk trygghet viktig?',
        solution: 'En god innovasjonskultur kjennetegnes av: Psykologisk trygghet, avsatt tid og ressurser, tverrfaglig samarbeid, støttende ledelse, systematisk kundeinnsikt og anerkjennelse av innovative bidrag. Psykologisk trygghet er viktig fordi: 1) Ansatte våger å komme med nye idéer uten frykt for latterliggjøring. 2) Feil ses som læringsmuligheter, ikke grunnlag for straff. 3) Åpen kommunikasjon gjør at problemer avdekkes og løses raskere. 4) Uten trygghet vil ansatte holde tilbake idéer og gjøre som de alltid har gjort. 5) Forskning (bl.a. Googles Project Aristotle) viser at psykologisk trygghet er den viktigste faktoren for effektive team.',
      },
    },
    {
      id: 'od-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        task: 'Bruk design thinking-prosessen til å foreslå en forbedring av en tjeneste du bruker regelmessig (for eksempel skolens kantine, en butikk eller en app).',
        solution: 'Eksempel - forbedring av skolekantinen: Empati: Snakke med elever som bruker kantinen og de som ikke gjør det. Observere atferd i lunsjen. Definer: "Mange elever dropper å kjøpe mat fordi køen er lang og utvalget er uforutsigbart." Idégenerering: Forhåndsbestilling via app, utvidet åpningstid, meny publisert dagen før, flere utleveringspunkter, selvbetjening. Prototype: Papirprototype av en enkel bestillingsapp med meny og bestillingsfunksjon. Test: La 20 elever prøve papirprototypen og gi tilbakemelding. Resultat: Forhåndsbestilling med henting var mest populært. Neste steg: Utvikle digital prototype og teste med flere.',
      },
    },
    {
      id: 'od-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        task: 'Forklar forskjellen mellom kaizen og kaikaku, og gi eksempler på begge fra en virksomhet.',
        solution: 'Kaizen (kontinuerlig forbedring) er mange små, gradvise forbedringer drevet av alle ansatte med lav risiko. Kaikaku (radikal endring) er store, banebrytende endringer drevet av ledelsen med høy risiko. Eksempler fra en produksjonsbedrift: Kaizen: Ansatte foreslår å flytte et verktøy nærmere arbeidsstasjonen (sparer 30 sekunder per operasjon), forbedre sjekklisten for kvalitetskontroll, optimalisere rekkefølgen på arbeidstrinn. Kaikaku: Innføre helt ny robotisert produksjonslinje, gå over til ny forretningsmodell med kundetilpasning, flytte hele produksjonen til ny fabrikk med optimalisert layout. Begge er nødvendige: Kaizen gir stabil, daglig forbedring, mens kaikaku gir kvantesprang i ytelse.',
      },
    },
    {
      id: 'od-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Innovasjon og kvalitet** forsterker hverandre gjensidig
- **Inkrementell vs. radikal** innovasjon krever ulike tilnærminger
- **Design thinking** er en menneskesentrert innovasjonsmetode
- **Innovasjonskultur** krever psykologisk trygghet og lederstøtte

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Innovasjon | Implementering av noe nytt som skaper verdi |
| Design thinking | Menneskesentrert innovasjonsmetodikk |
| Kaizen | Kontinuerlig forbedring i små steg |
| Kaikaku | Radikal, banebrytende endring |
| Psykologisk trygghet | Trygt å ta sjanser uten frykt for straff |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_DRIFT_DEL4_CHAPTERS = [
  CHAPTER_OKONOMI_DRIFT_4_1,
  CHAPTER_OKONOMI_DRIFT_4_2,
  CHAPTER_OKONOMI_DRIFT_4_3,
  CHAPTER_OKONOMI_DRIFT_4_4,
  CHAPTER_OKONOMI_DRIFT_4_5,
];

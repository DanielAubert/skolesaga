/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Sikkerhetsfag (VG2/VG3 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const SIKKERHETSFAG_CHAPTERS: TextbookChapter[] = [
  {
    id: 'sikkerhetsfag-kap1',
    courseId: 'sikkerhetsfag',
    chapterNumber: 1,
    title: 'Introduksjon til sikkerhetsfaget',
    description: 'Grunnleggende forståelse av sikkerhetsbransjen, yrkesroller og etikk',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap1-sek1',
        title: 'Hva er sikkerhetsfaget?',
        content: `# Hva er sikkerhetsfaget?

Sikkerhetsfaget handler om å beskytte mennesker, verdier og informasjon mot uønskede hendelser. Som sikkerhetsarbeider har du en viktig rolle i samfunnet - du bidrar til at folk føler seg trygge og at virksomheter kan drive sin aktivitet uten avbrudd.

## Sikkerhetsbransjens utvikling

Sikkerhetsbransjen har utviklet seg betydelig de siste tiårene:

**Historisk perspektiv:**
- Tradisjonelt vakthold har eksistert i tusenvis av år
- Moderne sikkerhetsbransje vokste frem på 1900-tallet
- Teknologisk utvikling har endret faget fundamentalt
- I dag er sikkerhet en profesjonell bransje med høye krav til kompetanse

**Dagens sikkerhetsbransje:**
- Omsetter for flere milliarder kroner årlig i Norge
- Sysselsetter titusener av mennesker
- Krever formell utdanning og sertifisering
- Omfatter både privat og offentlig sektor

## Sikkerhetens tre grunnpilarer

Sikkerhetsarbeid hviler på tre fundamentale pilarer:

### 1. Forebygging
Forebygging handler om å hindre at uønskede hendelser inntreffer. Dette inkluderer:
- Risikovurderinger og analyser
- Fysiske sikkerhetstiltak (låser, gjerder, barrierer)
- Tekniske systemer (alarmer, kameraer, adgangskontroll)
- Opplæring og bevisstgjøring

### 2. Avdekking
Avdekking dreier seg om å oppdage hendelser tidlig:
- Overvåkingssystemer
- Patruljering og inspeksjoner
- Alarmsystemer
- Rapportering fra ansatte og publikum

### 3. Respons
Respons handler om å håndtere hendelser effektivt:
- Etablerte prosedyrer og rutiner
- Samarbeid med nødetater
- Evakuering og førstehjelp
- Etterforskning og læring

## Verdier vi beskytter

Som sikkerhetsarbeider beskytter du flere typer verdier:

| Verditype | Eksempler |
|-----------|-----------|
| Mennesker | Ansatte, kunder, besøkende |
| Materielle verdier | Bygninger, utstyr, varer |
| Informasjon | Forretningshemmeligheter, persondata |
| Omdømme | Virksomhetens renommé |
| Miljø | Forebygging av utslipp og skader |`
      },
      {
        id: 'sikkerhetsfag-kap1-sek2',
        title: 'Yrkesroller i sikkerhetsbransjen',
        content: `# Yrkesroller i sikkerhetsbransjen

Sikkerhetsbransjen tilbyr et mangfold av karrieremuligheter. Her er de viktigste yrkesrollene:

## Vekter

Vekteren er den mest synlige rollen i sikkerhetsbransjen.

**Arbeidsoppgaver:**
- Adgangskontroll og publikumshåndtering
- Patruljering og inspeksjoner
- Håndtering av hendelser og konflikter
- Førstehjelp og evakuering
- Rapportskriving og dokumentasjon

**Krav til vektere:**
- Fullført vekterutdanning (minimum 105 timer)
- Vandelsattest uten anmerkninger
- God fysisk og psykisk helse
- Gode kommunikasjonsevner
- Vekterlegitimation fra politiet

## Sikkerhetsleder

Sikkerhetslederen har det overordnede ansvaret for sikkerheten i en virksomhet.

**Arbeidsoppgaver:**
- Utvikle sikkerhetsstrategi og policy
- Gjennomføre risikovurderinger
- Lede sikkerhetspersonell
- Budsjett og ressursforvaltning
- Samarbeid med ledelse og myndigheter

**Krav:**
- Relevant høyere utdanning
- Erfaring fra sikkerhetsbransjen
- Lederegenskaper
- Strategisk tenkning

## Sikkerhetsrådgiver

Sikkerhetsrådgiveren gir ekspertråd til virksomheter.

**Arbeidsoppgaver:**
- Gjennomføre sikkerhetsanalyser
- Anbefale sikkerhetstiltak
- Utforme sikkerhetsprosedyrer
- Holde kurs og opplæring
- Følge opp tiltak og evaluere effekt

## Andre roller

**Operatør i alarmsentral:**
- Mottar og håndterer alarmer
- Koordinerer utrykning
- Kommuniserer med kunder og vektere

**Sikkerhetstekniker:**
- Installerer og vedlikeholder sikkerhetssystemer
- Programmerer adgangskontroll
- Feilsøker teknisk utstyr

**Etterforsker:**
- Undersøker hendelser og lovbrudd
- Samler bevis og dokumentasjon
- Intervjuer vitner og mistenkte`
      },
      {
        id: 'sikkerhetsfag-kap1-sek3',
        title: 'Etikk og profesjonalitet',
        content: `# Etikk og profesjonalitet

Som sikkerhetsarbeider har du stor makt og ansvar. Etisk bevissthet og profesjonell opptreden er derfor helt avgjørende.

## Etiske grunnprinsipper

### Integritet
Integritet betyr å handle ærlig og konsekvent:
- Aldri la deg bestikke eller påvirke
- Rapporter alle hendelser sannferdig
- Innrøm feil og ta ansvar
- Hold det du lover

### Respekt
Alle mennesker fortjener å bli behandlet med respekt:
- Diskriminer aldri på bakgrunn av kjønn, etnisitet, religion eller legning
- Bevar folks verdighet, selv når de bryter regler
- Lytt aktivt og vis forståelse
- Unngå unødvendig maktbruk

### Taushetsplikt
Du får tilgang til sensitiv informasjon:
- Del aldri konfidensiell informasjon
- Vær forsiktig i sosiale medier
- Oppbevar dokumenter sikkert
- Taushetsplikten gjelder også etter endt arbeidsforhold

### Lojalitet
Du skal være lojal mot:
- Arbeidsgiveren din
- Kundene du beskytter
- Kollegene dine
- Samfunnet og lovverket

**Merk:** Ved konflikt mellom disse står lojalitet til loven øverst.

## Profesjonell opptreden

**Fremtoning:**
- Korrekt og ren uniform
- God personlig hygiene
- Profesjonelt kroppsspråk
- Rolig og behersket opptreden

**Kommunikasjon:**
- Klar og tydelig tale
- Høflig og serviceinnstilt
- Aktiv lytting
- Unngå slang og upassende språk

**Kompetanse:**
- Hold deg faglig oppdatert
- Kjenn dine begrensninger
- Spør om du er usikker
- Lær av erfaring og feil

## Etiske dilemmaer

I sikkerhetsarbeid møter du ofte vanskelige valgsituasjoner:

**Eksempel 1: Vennetjeneste**
En kollega ber deg om å ikke rapportere at han kom for sent. Hva gjør du?

**Eksempel 2: Lojalitetskonflikt**
Du oppdager at sjefen din stjeler fra arbeidsgiveren. Hva gjør du?

**Eksempel 3: Maktbruk**
En beruset person nekter å forlate lokalet. Hvor mye makt kan du bruke?

Ved etiske dilemmaer bør du:
1. Identifisere hvem som berøres
2. Vurdere handlingsalternativer
3. Tenke gjennom konsekvenser
4. Velge det mest forsvarlige alternativet
5. Dokumentere og rapportere`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap1-oppg1',
        type: 'multiple-choice',
        question: 'Hvilken av følgende er IKKE en av sikkerhetens tre grunnpilarer?',
        options: ['Forebygging', 'Avdekking', 'Straff', 'Respons'],
        correctAnswer: 2,
        explanation: 'Sikkerhetens tre grunnpilarer er forebygging, avdekking og respons. Straff er ikke en del av sikkerhetsarbeidet - det er politi og rettsvesen som håndterer dette.'
      },
      {
        id: 'sikkerhetsfag-kap1-oppg2',
        type: 'multiple-choice',
        question: 'Hva er minimumskravet til vekterutdanning i Norge?',
        options: ['50 timer', '80 timer', '105 timer', '200 timer'],
        correctAnswer: 2,
        explanation: 'I Norge er minimumskravet til vekterutdanning 105 timer. Dette inkluderer både teori og praksis.'
      },
      {
        id: 'sikkerhetsfag-kap1-oppg3',
        type: 'short-answer',
        question: 'Forklar hva som menes med integritet i sikkerhetsarbeid, og gi to eksempler på hvordan du kan vise integritet i jobben.',
        sampleAnswer: 'Integritet betyr å handle ærlig og konsekvent, og å stå for det som er rett selv når det er vanskelig. Eksempler: 1) Rapportere hendelser sannferdig selv om det setter deg selv i et dårlig lys. 2) Si nei til bestikkelser eller vennetjenester som strider mot regler og prosedyrer.'
      },
      {
        id: 'sikkerhetsfag-kap1-oppg4',
        type: 'discussion',
        question: 'Du jobber som vekter på et kjøpesenter. En god venn av deg blir tatt for nasking. Hvordan ville du håndtert denne situasjonen? Diskuter de etiske utfordringene.',
        sampleAnswer: 'Dette er et klassisk lojalitetsdilemma mellom vennskap og yrkesplikt. Det profesjonelle svaret er at du må behandle vennen på samme måte som alle andre. Du kan be en kollega ta saken hvis mulig, men du kan ikke la være å rapportere eller gi vennen særbehandling. Å gjøre unntak ville undergrave din integritet og være illojalt mot arbeidsgiveren.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Sikkerhetsfaget** handler om å beskytte mennesker, verdier og informasjon
- **Tre grunnpilarer:** Forebygging, avdekking og respons
- **Yrkesroller:** Vekter, sikkerhetsleder, sikkerhetsrådgiver, operatør, tekniker
- **Vekterkrav:** 105 timers utdanning, vandelsattest, legitimasjon
- **Etiske prinsipper:** Integritet, respekt, taushetsplikt, lojalitet
- **Profesjonalitet:** God fremtoning, kommunikasjon og kompetanse

Neste kapittel handler om risikovurdering og risikoanalyse.
`
  },
  {
    id: 'sikkerhetsfag-kap2',
    courseId: 'sikkerhetsfag',
    chapterNumber: 2,
    title: 'Risikovurdering og risikoanalyse',
    description: 'Metoder for å identifisere, analysere og vurdere risiko',
    estimatedTime: '120 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap2-sek1',
        title: 'Grunnleggende risikobegreper',
        content: `# Grunnleggende risikobegreper

For å arbeide effektivt med sikkerhet må du forstå de sentrale begrepene innen risiko.

## Hva er risiko?

**Risiko** defineres som kombinasjonen av sannsynlighet for at en uønsket hendelse inntreffer og konsekvensene av hendelsen.

$$\\text{Risiko} = \\text{Sannsynlighet} \\times \\text{Konsekvens}$$

## Sentrale begreper

### Trussel
En trussel er en potensiell årsak til en uønsket hendelse. Trusler kan være:
- **Tilsiktede:** Innbrudd, tyveri, sabotasje, terror
- **Utilsiktede:** Uhell, feil, naturhendelser

### Sårbarhet
Sårbarhet er svakheter som kan utnyttes av en trussel:
- Manglende låser eller alarmer
- Utilstrekkelig opplæring
- Dårlige rutiner
- Tekniske svakheter

### Verdi
Verdi er det som kan skades eller gå tapt:
- Menneskeliv og helse
- Materielle verdier
- Informasjon og data
- Omdømme

### Konsekvens
Konsekvens er resultatet dersom en uønsket hendelse inntreffer:
- Personskade eller død
- Økonomisk tap
- Driftsstans
- Omdømmetap

### Sannsynlighet
Sannsynlighet angir hvor trolig det er at hendelsen vil skje:
- Ofte basert på historikk og statistikk
- Kan uttrykkes i prosent eller kategorier
- Vanskelig å anslå nøyaktig

## Risikomatrisen

Risikomatrisen er et verktøy for å visualisere risiko:

| | Lav konsekvens | Middels konsekvens | Høy konsekvens |
|---|---|---|---|
| **Høy sannsynlighet** | Moderat risiko | Høy risiko | Svært høy risiko |
| **Middels sannsynlighet** | Lav risiko | Moderat risiko | Høy risiko |
| **Lav sannsynlighet** | Svært lav risiko | Lav risiko | Moderat risiko |

## Risikoaksept

Ikke all risiko kan eller bør elimineres. Risikoaksept handler om:
- Hvilken risiko virksomheten kan leve med
- Kost-nytte-vurdering av tiltak
- Restrisiko etter tiltak er implementert`
      },
      {
        id: 'sikkerhetsfag-kap2-sek2',
        title: 'Risikovurderingsprosessen',
        content: `# Risikovurderingsprosessen

En systematisk risikovurdering følger en strukturert prosess med flere trinn.

## Trinn 1: Planlegging og avgrensning

Før du starter må du:
- Definere formål med vurderingen
- Avgrense hva som skal vurderes (område, aktivitet, system)
- Bestemme metode og verktøy
- Sette sammen team med relevant kompetanse
- Samle nødvendig dokumentasjon

## Trinn 2: Identifisere verdier

Kartlegg hva som skal beskyttes:
- Mennesker (ansatte, kunder, besøkende)
- Bygninger og lokaler
- Utstyr og inventar
- Varer og produkter
- Informasjon og IT-systemer
- Omdømme og merkevare

## Trinn 3: Identifisere trusler

Kartlegg mulige trusler:

**Kriminelle trusler:**
- Innbrudd og tyveri
- Ran og vold
- Svindel og bedrageri
- Hærverk og sabotasje
- Industrispionasje

**Naturhendelser:**
- Brann
- Flom
- Storm
- Jordskjelv

**Tekniske feil:**
- Strømbrudd
- IT-havari
- Utstyrsfeil

**Menneskelige feil:**
- Uhell og ulykker
- Feilvurderinger
- Manglende kompetanse

## Trinn 4: Identifisere sårbarheter

Vurder svakheter i dagens sikring:
- Fysiske sikringstiltak
- Tekniske systemer
- Rutiner og prosedyrer
- Kompetanse og opplæring
- Organisering og ledelse

## Trinn 5: Vurdere sannsynlighet

Anslå hvor trolig det er at truslene vil realiseres:

| Kategori | Beskrivelse | Frekvens |
|----------|-------------|----------|
| Svært lav | Kan skje under spesielle omstendigheter | < 1 gang per 10 år |
| Lav | Lite sannsynlig | 1 gang per 1-10 år |
| Middels | Kan skje | 1 gang per år |
| Høy | Sannsynlig | Flere ganger per år |
| Svært høy | Forventet | Månedlig eller oftere |

## Trinn 6: Vurdere konsekvens

Vurder mulige konsekvenser:

| Kategori | Personskade | Økonomisk tap | Omdømme |
|----------|-------------|---------------|---------|
| Ubetydelig | Ingen skade | < 10 000 kr | Ingen |
| Lav | Lettere skade | 10 000-100 000 kr | Lokal omtale |
| Middels | Alvorlig skade | 100 000-1 mill kr | Regional omtale |
| Høy | Varig skade | 1-10 mill kr | Nasjonal omtale |
| Svært høy | Dødsfall | > 10 mill kr | Internasjonal omtale |

## Trinn 7: Beregne risiko

Kombiner sannsynlighet og konsekvens i risikomatrisen og prioriter:
1. Røde risikoer (høy/svært høy) - Krever umiddelbar handling
2. Oransje risikoer (moderat) - Tiltak bør vurderes
3. Grønne risikoer (lav) - Akseptabel, men følges opp`
      },
      {
        id: 'sikkerhetsfag-kap2-sek3',
        title: 'Risikoreduserende tiltak',
        content: `# Risikoreduserende tiltak

Når risiko er identifisert og vurdert, må du velge tiltak for å redusere den.

## Strategier for risikohåndtering

### 1. Unngå risiko
Fjern kilden til risiko helt:
- Avvikle risikofylt aktivitet
- Flytte verdier til tryggere sted
- Endre prosess eller metode

**Eksempel:** En virksomhet slutter å oppbevare kontanter i lokalene.

### 2. Redusere risiko
Implementer tiltak som reduserer sannsynlighet eller konsekvens:
- Installere sikkerhetssystemer
- Forbedre rutiner
- Øke kompetanse

**Eksempel:** Installere alarm og kameraovervåking.

### 3. Overføre risiko
La andre bære risikoen:
- Tegne forsikring
- Sette ut tjenester
- Kontraktsfeste ansvar

**Eksempel:** Forsikre verdifulle gjenstander.

### 4. Akseptere risiko
Leve med risikoen uten ytterligere tiltak:
- Når tiltak koster mer enn risikoen
- Når risikoen er lav
- Når ingen tiltak er tilgjengelige

## Typer sikkerhetstiltak

### Fysiske tiltak
- Gjerder, murer og barrierer
- Låser og beslag
- Sikkerhetsglass
- Belysning
- Sikkerhetsskap og hvelv

### Tekniske tiltak
- Innbruddsalarm
- Brannalarm
- Kameraovervåking
- Adgangskontroll
- IT-sikkerhet

### Organisatoriske tiltak
- Rutiner og prosedyrer
- Opplæring
- Arbeidsfordeling
- Intern kontroll
- Beredskapsplaner

### Menneskelige tiltak
- Vakthold
- Resepsjon og publikumsmottak
- Sikkerhetsledelse
- Bevisstgjøring

## Vurdering av tiltak

Ved valg av tiltak vurder:

**Effekt:** Hvor mye reduserer tiltaket risikoen?

**Kostnad:** Hva koster tiltaket å innføre og drifte?

**Gjennomførbarhet:** Er tiltaket praktisk mulig?

**Sideeffekter:** Har tiltaket negative konsekvenser?

**Aksept:** Vil ansatte og brukere akseptere tiltaket?

## Restrisiko

Etter at tiltak er implementert vil det alltid være en restrisiko:
- Ingen tiltak gir 100% sikkerhet
- Restrisikoen må vurderes og aksepteres
- Dokumenter hva som er akseptabel restrisiko`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap2-oppg1',
        type: 'multiple-choice',
        question: 'Hva er definisjonen på risiko?',
        options: [
          'Sannsynlighet for at noe går galt',
          'Konsekvensen av en hendelse',
          'Sannsynlighet multiplisert med konsekvens',
          'Summen av alle trusler'
        ],
        correctAnswer: 2,
        explanation: 'Risiko defineres som kombinasjonen (produktet) av sannsynlighet og konsekvens. Begge faktorene må vurderes sammen for å få et riktig bilde av risikoen.'
      },
      {
        id: 'sikkerhetsfag-kap2-oppg2',
        type: 'multiple-choice',
        question: 'Hvilken risikohåndteringsstrategi bruker du når du tegner forsikring?',
        options: ['Unngå risiko', 'Redusere risiko', 'Overføre risiko', 'Akseptere risiko'],
        correctAnswer: 2,
        explanation: 'Forsikring er et eksempel på å overføre risiko. Du betaler forsikringsselskapet for å bære den økonomiske risikoen ved en eventuell hendelse.'
      },
      {
        id: 'sikkerhetsfag-kap2-oppg3',
        type: 'short-answer',
        question: 'Forklar forskjellen mellom trussel og sårbarhet, og gi et eksempel på hver.',
        sampleAnswer: 'En trussel er en potensiell årsak til en uønsket hendelse (f.eks. en innbruddstyv). En sårbarhet er en svakhet som kan utnyttes av trusselen (f.eks. en ulåst dør eller manglende alarm). Trusselen utnytter sårbarheten for å skade verdiene.'
      },
      {
        id: 'sikkerhetsfag-kap2-oppg4',
        type: 'practical',
        question: 'Gjennomfør en forenklet risikovurdering av klasserommet ditt. Identifiser minst tre verdier, tre trusler og tre sårbarheter. Vurder risikoen og foreslå tiltak.',
        sampleAnswer: 'Eksempel: Verdier - elever, datautstyr, læremidler. Trusler - brann, tyveri, ulykker. Sårbarheter - manglende brannvarsler i rommet, ulåste skap, glatt gulv. Risiko vurderes i matrise. Tiltak - brannvarsler, låsbare skap, sklisikring.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Risiko** = Sannsynlighet × Konsekvens
- **Sentrale begreper:** Trussel, sårbarhet, verdi, konsekvens
- **Risikovurderingsprosessen:** Planlegging, identifisering av verdier, trusler og sårbarheter, vurdering av sannsynlighet og konsekvens
- **Risikomatrisen** visualiserer risiko basert på sannsynlighet og konsekvens
- **Risikohåndtering:** Unngå, redusere, overføre eller akseptere
- **Tiltak:** Fysiske, tekniske, organisatoriske og menneskelige
- **Restrisiko** er risikoen som gjenstår etter at tiltak er implementert

Neste kapittel handler om forebyggende sikkerhetsarbeid.
`
  },
  {
    id: 'sikkerhetsfag-kap3',
    courseId: 'sikkerhetsfag',
    chapterNumber: 3,
    title: 'Forebyggende sikkerhetsarbeid',
    description: 'Metoder og prinsipper for å forebygge uønskede hendelser',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap3-sek1',
        title: 'Prinsipper for forebygging',
        content: `# Prinsipper for forebygging

Forebyggende sikkerhetsarbeid handler om å hindre at uønskede hendelser inntreffer. Det er alltid bedre å forebygge enn å reparere.

## Sikkerhetssoner

Et grunnleggende prinsipp er å dele inn områder i sikkerhetssoner:

### Sone 1: Offentlig sone
- Områder tilgjengelig for alle
- Minimalt med verdier
- Generell overvåking

### Sone 2: Semi-offentlig sone
- Kontrollert tilgang
- Resepsjon eller skranke
- Oversikt over hvem som er der

### Sone 3: Privat sone
- Kun autoriserte personer
- Adgangskontroll
- Overvåking og logging

### Sone 4: Sikret sone
- Strengt begrenset tilgang
- Flere sikkerhetslag
- Høyverdige eiendeler

## Dybdeforsvar

Dybdeforsvar betyr flere uavhengige sikkerhetslag:

**Lag 1 - Perimetersikring:**
- Gjerde og porter
- Belysning
- Skilting

**Lag 2 - Bygningssikring:**
- Låser og beslag
- Sikkerhetsglass
- Alarm

**Lag 3 - Romsikring:**
- Indre soner
- Sikkerhetsskap
- Bevegelsesdetektorer

**Lag 4 - Objektsikring:**
- Forankring av gjenstander
- Tyverisikring
- GPS-sporing

## CPTED - Crime Prevention Through Environmental Design

CPTED er en metode for kriminalitetsforebygging gjennom utforming av omgivelsene:

### Naturlig overvåking
- God sikt og oversikt
- Belysning
- Vindusplassering
- Unngå gjemmesteder

### Naturlig adgangskontroll
- Tydelig markering av private områder
- Fysiske barrierer
- Innganger synlige fra veien

### Territoriell forsterkning
- Tydelige grenser
- Vedlikehold og orden
- Eierskap til området

### Aktivitetsstøtte
- Oppmuntre til legitim bruk
- Flere mennesker = mer trygghet
- Unngå øde områder`
      },
      {
        id: 'sikkerhetsfag-kap3-sek2',
        title: 'Fysisk sikring',
        content: `# Fysisk sikring

Fysiske sikringstiltak danner grunnmuren i ethvert sikkerhetssystem.

## Perimetersikring

Perimeteren er yttergrensen av området du beskytter.

### Gjerder
- Høyde minimum 2 meter for god effekt
- Piggtrådtopp øker sikringen
- Fundamentering hindrer undergraving
- Regelmessig vedlikehold

### Porter og bommer
- Manuelt eller automatisk styrt
- Integrert med adgangskontroll
- Nødåpning må finnes
- Tilstrekkelig dimensjonert

### Belysning
- Dekke alle adkomstveier
- Unngå blendingspunkter
- Bevegelsesaktiverte lys
- Backup ved strømbrudd

## Bygningssikring

### Dører
**Typer:**
- Sikkerhetsdører (klassifisert etter motstandsevne)
- Branndører
- Nødutganger

**Elementer:**
- Dørkarm og hengsler
- Låsemekanisme
- Sluttstykke
- Dørpumpe/lukkemekanisme

### Låser
**Mekaniske låser:**
- Sylinderlåser (vanligst)
- Sikkerhetslåser (høyere motstandsevne)
- Kodelåser

**Elektroniske låser:**
- Kortleser
- Tastatur
- Biometri

### Vinduer
- Sikkerhetsglass (laminert eller herdet)
- Gitter eller tremmer
- Vindussensorer
- Begrens størrelse på åpningsbare vinduer

## Verdioppbevaring

### Sikkerhetsskap
Klassifiseres etter innbruddsmotstand:
- Klasse S1 - Basis sikkerhet
- Klasse S2 - Standard sikkerhet
- EN 1143-1 - Høy sikkerhet

### Hvelv
- Forsterket konstruksjon
- Kombinasjonslås og tidslås
- Alarm og overvåking

## Vedlikehold

Fysisk sikring krever regelmessig vedlikehold:
- Sjekk låser og beslag
- Test dør- og vindussensorer
- Kontroller belysning
- Reparer skader umiddelbart`
      },
      {
        id: 'sikkerhetsfag-kap3-sek3',
        title: 'Sikkerhetssystemer',
        content: `# Sikkerhetssystemer

Tekniske sikkerhetssystemer forsterker og automatiserer sikkerhetsarbeidet.

## Innbruddsalarm

### Komponenter
- **Sentral:** Hjerne i systemet, mottar signaler og utløser alarm
- **Detektorer:** Registrerer innbrudd eller bevegelse
- **Signalgivere:** Sirene, blinklys, varsling til alarmsentral
- **Betjeningsutstyr:** Tastatur, kortleser, app

### Detektortyper
**Magnetkontakter:**
- Monteres på dører og vinduer
- Registrerer om de åpnes
- Enkel og pålitelig teknologi

**Bevegelsesdetektorer (PIR):**
- Registrerer varmestråling fra mennesker
- Dekker et definert område
- Kan gi falske alarmer (dyr, varmekilder)

**Glassbrudddetektorer:**
- Registrerer lyden av knust glass
- Plasseres nær vinduer
- Supplerer magnetkontakter

**Vibrasjonssensorer:**
- Registrerer vibrasjoner i vegger/tak
- Oppdager gjennombruddsforsøk

### Alarmhåndtering
1. Alarm utløses
2. Signal sendes til alarmsentral
3. Operatør verifiserer (video, telefon)
4. Vekterutrykning eller politimelding
5. Dokumentasjon og oppfølging

## Kameraovervåking (CCTV)

### Kameratyper
- **Faste kameraer:** Dekker ett bestemt område
- **PTZ-kameraer:** Pan-tilt-zoom, kan styres
- **Dome-kameraer:** Diskret, vanskelig å se retning
- **Termiske kameraer:** Registrerer varmestråling

### Opptak og lagring
- Digital lagring (NVR/DVR)
- Lagringstid avhenger av regelverk
- Backup av kritiske opptak
- Sikker tilgang til opptak

### Juridiske krav
- Skilting om kameraovervåking
- Meldeplikt til Datatilsynet
- Begrenset lagringstid
- Personvernhensyn

## Adgangskontroll

Se eget kapittel om adgangskontroll og overvåking.

## Integrerte systemer

Moderne sikkerhetssystemer integrerer:
- Alarm
- Kamera
- Adgangskontroll
- Brannvarsling

Fordeler:
- Helhetlig oversikt
- Automatisert respons
- Effektiv drift
- Bedre dokumentasjon`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap3-oppg1',
        type: 'multiple-choice',
        question: 'Hva er dybdeforsvar i sikkerhetssammenheng?',
        options: [
          'Et system med ekstra dype grøfter rundt bygningen',
          'Flere uavhengige sikkerhetslag som overlapper hverandre',
          'Å grave ned verdifulle gjenstander',
          'Ekstra sikring av kjelleren'
        ],
        correctAnswer: 1,
        explanation: 'Dybdeforsvar handler om å ha flere uavhengige sikkerhetslag slik at hvis ett lag svikter, vil de andre fortsatt gi beskyttelse.'
      },
      {
        id: 'sikkerhetsfag-kap3-oppg2',
        type: 'multiple-choice',
        question: 'Hva står CPTED for?',
        options: [
          'Certified Professional Technical Defense',
          'Crime Prevention Through Environmental Design',
          'Central Protection Technology Defense',
          'Controlled Perimeter Total Defense'
        ],
        correctAnswer: 1,
        explanation: 'CPTED står for Crime Prevention Through Environmental Design - kriminalitetsforebygging gjennom utforming av omgivelsene.'
      },
      {
        id: 'sikkerhetsfag-kap3-oppg3',
        type: 'short-answer',
        question: 'Forklar de fire prinsippene i CPTED og gi et eksempel på hvert.',
        sampleAnswer: '1) Naturlig overvåking - god belysning og sikt. 2) Naturlig adgangskontroll - hekker og gjerder som markerer private områder. 3) Territoriell forsterkning - skilting og vedlikehold. 4) Aktivitetsstøtte - legge til rette for at folk bruker området.'
      },
      {
        id: 'sikkerhetsfag-kap3-oppg4',
        type: 'practical',
        question: 'Tegn en skisse av en tenkt butikk og plasser inn sikkerhetssoner (1-4). Begrunn plasseringen.',
        sampleAnswer: 'Sone 1: Fortau/parkering utenfor. Sone 2: Salgsområdet med kasser. Sone 3: Lager og bakrom med personalinngang. Sone 4: Kontor med safe og verdifulle varer.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Sikkerhetssoner:** Inndeling fra offentlig (1) til sikret (4)
- **Dybdeforsvar:** Flere lag med sikkerhet som overlapper
- **CPTED:** Forebygging gjennom utforming - naturlig overvåking, adgangskontroll, territoriell forsterkning, aktivitetsstøtte
- **Fysisk sikring:** Gjerder, porter, dører, låser, vinduer
- **Innbruddsalarm:** Sentral, detektorer, signalgivere
- **Kameraovervåking:** Ulike kameratyper, opptak, juridiske krav
- **Integrerte systemer:** Alarm, kamera og adgangskontroll i ett

Neste kapittel handler om adgangskontroll og overvåking.
`
  },
  {
    id: 'sikkerhetsfag-kap4',
    courseId: 'sikkerhetsfag',
    chapterNumber: 4,
    title: 'Adgangskontroll og overvåking',
    description: 'Systemer og metoder for å kontrollere adgang og overvåke områder',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap4-sek1',
        title: 'Adgangskontrollsystemer',
        content: `# Adgangskontrollsystemer

Adgangskontroll handler om å sikre at kun autoriserte personer får tilgang til definerte områder.

## Grunnprinsipper

Adgangskontroll baseres på tre faktorer:

### 1. Noe du vet
- PIN-kode
- Passord
- Sikkerhetsspørsmål

### 2. Noe du har
- Adgangskort
- Nøkkel
- Mobil/token

### 3. Noe du er
- Fingeravtrykk
- Ansiktsgjenkjenning
- Iris-skanning

**To-faktor autentisering** kombinerer to av disse for økt sikkerhet.

## Typer adgangskort

### Magnetstripe
- Eldre teknologi
- Enkelt å kopiere
- Slites ved bruk
- Billig

### Proximity-kort (RFID)
- Berøringsfri avlesning
- Vanskeligere å kopiere
- Lang levetid
- Standard i dag

### Smartkort
- Innebygd prosessor
- Kryptert kommunikasjon
- Kan lagre mer data
- Høyere sikkerhet

## Biometriske systemer

### Fingeravtrykk
**Fordeler:**
- Unikt for hver person
- Vanskelig å forfalske
- Rask avlesning

**Ulemper:**
- Kan svikte ved skitne/skadede fingre
- Personvernbekymringer
- Høyere kostnad

### Ansiktsgjenkjenning
**Fordeler:**
- Berøringsfri
- Naturlig for brukeren
- Kan kombineres med kamera

**Ulemper:**
- Kan lures av foto
- Påvirkes av belysning
- Personvernbekymringer

### Iris-skanning
**Fordeler:**
- Svært nøyaktig
- Vanskelig å forfalske
- Stabil over tid

**Ulemper:**
- Dyrt
- Kan oppleves ubehagelig
- Krever samarbeid fra bruker

## Administrasjon av adgangskontroll

### Adgangsrettigheter
- Definer hvem som skal ha tilgang hvor
- Tidsbaserte begrensninger
- Midlertidig tilgang for besøkende
- Regelmessig gjennomgang

### Logging
- Alle passeringer logges
- Hvem, hvor, når
- Viktig for etterforskning
- Oppbevares iht. regelverk

### Besøkshåndtering
1. Forhåndsregistrering
2. ID-kontroll ved ankomst
3. Utstedelse av besøkskort
4. Registrering av vertsperson
5. Innlevering ved avreise`
      },
      {
        id: 'sikkerhetsfag-kap4-sek2',
        title: 'Overvåking og patruljering',
        content: `# Overvåking og patruljering

Overvåking og patruljering er sentrale oppgaver for sikkerhetsarbeidere.

## Stasjonær overvåking

### Resepsjons- og vakttjeneste
- Motta og registrere besøkende
- Besvare henvendelser
- Overvåke alarmer og kameraer
- Første respons ved hendelser

### Kontrollrom
- Sentral for overvåking
- Mange kamerabilder
- Alarm- og adgangskontrollsystem
- Kommunikasjonsutstyr

**Viktige prinsipper:**
- Maksimalt antall skjermer per operatør
- Regelmessige pauser
- Gode rutiner for hendelseshåndtering
- Loggføring av observasjoner

## Mobil overvåking - Patruljering

### Formål med patruljering
- Synlig tilstedeværelse
- Oppdage avvik og feil
- Kontrollere låser og sikringsutstyr
- Forebyggende effekt

### Planlegging
- Faste ruter med variasjon
- Tidspunkt tilpasset risikovurdering
- Fokusområder identifisert
- Sjekklister for kontrollpunkter

### Gjennomføring
**Før patrulje:**
- Gjennomgå tidligere rapporter
- Sjekk kommunikasjonsutstyr
- Få oversikt over spesielle forhold

**Under patrulje:**
- Systematisk gjennomgang
- Dokumenter avvik umiddelbart
- Vær oppmerksom
- Hold kontakt med kontrollrom

**Etter patrulje:**
- Skriv rapport
- Meld fra om funn
- Loggfør tidsbruk

### Teknikker
- Varier rute og tidspunkt
- Vær diskret men synlig
- Bruk alle sanser
- Stol på magefølelsen
- Aldri rutinemessig

## Dokumentasjon

### Vaktjournal
- Kronologisk logg over hendelser
- Alle observasjoner noteres
- Tidspunkt, sted, beskrivelse
- Hvem gjorde hva

### Rapportskriving
God rapport inneholder:
- Dato, tid, sted
- Hva skjedde
- Hvem var involvert
- Hva ble gjort
- Oppfølgingsbehov

**5W + H:**
- What - Hva skjedde?
- When - Når skjedde det?
- Where - Hvor skjedde det?
- Who - Hvem var involvert?
- Why - Hvorfor skjedde det?
- How - Hvordan skjedde det?`
      },
      {
        id: 'sikkerhetsfag-kap4-sek3',
        title: 'Personvern og etikk ved overvåking',
        content: `# Personvern og etikk ved overvåking

Overvåking griper inn i folks privatliv og må derfor utøves med varsomhet og respekt for regelverket.

## Rettslig grunnlag

### Personopplysningsloven
- Basert på EUs personvernforordning (GDPR)
- Regulerer behandling av personopplysninger
- Kameraovervåking er behandling av personopplysninger

### Krav for lovlig kameraovervåking
1. **Behandlingsgrunnlag** - berettiget interesse
2. **Formål** - klart definert og legitimt
3. **Nødvendighet** - overvåking må være nødvendig
4. **Forholdsmessighet** - ikke mer inngripende enn nødvendig
5. **Informasjon** - de som filmes må informeres
6. **Sikkerhet** - opptakene må sikres forsvarlig

## Praktiske krav

### Skilting
- Godt synlig før man kommer inn i overvåket område
- Skal inneholde:
  - At området er kameraovervåket
  - Hvem som er ansvarlig
  - Kontaktinformasjon

### Lagringstid
- Opptak skal slettes når formålet er oppnådd
- Normalt maksimalt 7 dager
- Kan forlenges ved konkrete hendelser
- Dokumenter sletting

### Innsyn
- Den som er filmet har rett til innsyn
- Skal besvares innen 30 dager
- Anonymiser andre personer
- Dokumenter utlevering

### Sikkerhet
- Begrenset tilgang til opptak
- Logging av hvem som ser opptak
- Kryptert lagring og overføring
- Sikker sletting

## Etiske vurderinger

### Balanse mellom sikkerhet og personvern
- Ikke overvåk mer enn nødvendig
- Respekter intimsoner (garderober, toaletter)
- Informer ansatte om overvåking
- Bruk opptak kun til definert formål

### Lydopptak
- Generelt forbudt uten samtykke
- Strengere regulert enn videoopptak
- Krever særskilt begrunnelse

### Overvåking av ansatte
- Tillatt kun ved saklig grunn
- Drøftingsplikt med tillitsvalgte
- Varslingsplikt til den enkelte
- Begrensninger på bruk

## Konsekvenser ved brudd

- Pålegg fra Datatilsynet
- Tvangsmulkt
- Overtredelsesgebyr (opptil 4% av omsetning)
- Erstatningsansvar
- Straffeansvar i grove tilfeller`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap4-oppg1',
        type: 'multiple-choice',
        question: 'Hvilke tre faktorer baseres adgangskontroll på?',
        options: [
          'Kort, kode og kamera',
          'Noe du vet, noe du har, noe du er',
          'Alarm, lås og vakt',
          'Sone, barriere og kontroll'
        ],
        correctAnswer: 1,
        explanation: 'Adgangskontroll baseres på tre faktorer: Noe du vet (passord/PIN), noe du har (kort/nøkkel), og noe du er (biometri). To-faktor autentisering kombinerer to av disse.'
      },
      {
        id: 'sikkerhetsfag-kap4-oppg2',
        type: 'multiple-choice',
        question: 'Hva er normal maksimal lagringstid for kameraopptak?',
        options: ['24 timer', '72 timer', '7 dager', '30 dager'],
        correctAnswer: 2,
        explanation: 'Normal maksimal lagringstid for kameraopptak er 7 dager. Opptak kan kun lagres lenger hvis det er en konkret hendelse som krever det.'
      },
      {
        id: 'sikkerhetsfag-kap4-oppg3',
        type: 'short-answer',
        question: 'Forklar 5W + H-metoden for rapportskriving og hvorfor den er nyttig.',
        sampleAnswer: '5W + H står for What, When, Where, Who, Why og How - altså hva skjedde, når, hvor, hvem var involvert, hvorfor skjedde det og hvordan. Metoden sikrer at rapporten inneholder all vesentlig informasjon og at ingenting blir glemt.'
      },
      {
        id: 'sikkerhetsfag-kap4-oppg4',
        type: 'discussion',
        question: 'Diskuter fordeler og ulemper ved ansiktsgjenkjenning som adgangskontroll. Ta hensyn til både sikkerhet og personvern.',
        sampleAnswer: 'Fordeler: Berøringsfri, vanskelig å miste eller glemme, unikt for person. Ulemper: Personvernbekymringer, kan lures av foto, påvirkes av belysning/endringer i utseende, lagring av biometriske data er sensitivt. Balansen mellom sikkerhet og personvern må vurderes nøye.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Adgangskontroll** baseres på noe du vet, har eller er
- **Korttyper:** Magnetstripe, proximity (RFID), smartkort
- **Biometri:** Fingeravtrykk, ansiktsgjenkjenning, iris-skanning
- **Patruljering:** Planlegging, gjennomføring, variasjon
- **Dokumentasjon:** Vaktjournal og rapportskriving (5W + H)
- **Personvern:** Personopplysningsloven, skilting, lagringstid, innsyn
- **Etikk:** Balanse mellom sikkerhet og personvern

Neste kapittel handler om brann- og evakueringssikkerhet.
`
  },
  {
    id: 'sikkerhetsfag-kap5',
    courseId: 'sikkerhetsfag',
    chapterNumber: 5,
    title: 'Brann- og evakueringssikkerhet',
    description: 'Forebygging av brann og sikker evakuering',
    estimatedTime: '120 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap5-sek1',
        title: 'Brannteori og forebygging',
        content: `# Brannteori og forebygging

For å forebygge og bekjempe brann effektivt må du forstå hvordan brann oppstår og utvikler seg.

## Branntrekanten

Brann krever tre elementer som må være til stede samtidig:

### 1. Brennbart materiale (brensel)
- Fast stoff (tre, papir, plast)
- Væske (bensin, olje, løsemidler)
- Gass (propan, metan, hydrogen)

### 2. Oksygen
- Luft inneholder ca. 21% oksygen
- Brann trenger minst 15-16% oksygen
- Mer oksygen = raskere forbrenning

### 3. Varme (tenntemperatur)
- Tilstrekkelig varme til å antenne materialet
- Ulike materialer har ulik tenntemperatur
- Vedlikeholder seg selv når brannen er etablert

**For å slukke brann:** Fjern ett eller flere av elementene!

## Brannklasser

| Klasse | Materiale | Eksempler | Slokkemiddel |
|--------|-----------|-----------|--------------|
| A | Fast stoff | Tre, papir, tekstil | Vann, skum |
| B | Væske | Bensin, olje, maling | Skum, pulver, CO2 |
| C | Gass | Propan, metan | Pulver, CO2 |
| D | Metall | Magnesium, natrium | Spesialpulver |
| F | Matolje | Frityr, stekepanne | Våtkjemisk |

## Brannårsaker

**Elektriske årsaker (vanligst):**
- Kortslutning
- Overbelastning
- Defekt utstyr
- Løse tilkoblinger

**Menneskelige årsaker:**
- Røyking
- Levende lys
- Matlaging
- Uhell og uforsiktighet

**Påsatte branner:**
- Forsikringssvindel
- Hevn
- Tildekking av annen kriminalitet
- Pyromani

## Forebyggende tiltak

### Orden og ryddighet
- Fjern brennbart avfall
- Ikke blokker rømningsveier
- Ryddig oppbevaring av kjemikalier

### Elektrisk sikkerhet
- Ikke overbelast stikkontakter
- Skift ut gammelt utstyr
- Regelmessig kontroll av el-anlegg

### Brannfarlige stoffer
- Riktig oppbevaring og merking
- God ventilasjon
- Egen oppbevaringsplass`
      },
      {
        id: 'sikkerhetsfag-kap5-sek2',
        title: 'Brannvern og slokking',
        content: `# Brannvern og slokking

Når brann oppstår er rask og riktig respons avgjørende.

## Brannvarslingsanlegg

### Detektortyper

**Røykdetektor:**
- Oppdager røykpartikler
- Vanligst i bolig og næring
- Optisk eller ionisk type

**Varmedetektor:**
- Reagerer på temperaturøkning
- Brukes der røykdetektor gir falske alarmer
- Fast temperatur eller temperaturstigning

**Flammedetektor:**
- Oppdager flamme (UV/IR-stråling)
- Brukes i industri
- Rask respons

### Alarmhåndtering
1. Brannalarm utløses
2. Operatør verifiserer (ringe stedet, sjekke kamera)
3. Varsle brannvesen hvis reell brann
4. Iverksett evakuering
5. Dokumenter hendelsen

## Slokkeutstyr

### Brannslokningsapparater

**Pulverapparat:**
- Effektivt på de fleste branner
- Dekker brannen med pulver
- Gir mye søl og etterarbeid
- Passer ikke for elektronikk

**CO2-apparat:**
- Kveler brannen
- Ingen etterrengjøring
- Passer for elektronikk
- Mindre effektivt på store branner

**Skumapparat:**
- Effektivt på væskebranner
- Kjøler og kveler
- Ikke for elektriske branner

**Vannslokker:**
- Kun for brannklasse A
- Kjøler brannen
- Aldri på elektrisk eller oljebrannn

### Bruk av brannslokker (PASS-metoden)
1. **P**ull - Trekk ut sikringssplinten
2. **A**im - Rett strålerøret mot brannens base
3. **S**queeze - Klem håndtaket
4. **S**weep - Fei fra side til side

### Brannslanger og sprinkler

**Brannslanger:**
- Plassert i veggskap
- Kobles til vannforsyning
- Krever opplæring i bruk

**Sprinkleranlegg:**
- Automatisk utløsning ved varme
- Hver sprinkler utløses individuelt
- Svært effektivt
- Kan gi vannskader

## Førsteinnsats ved brann

**Ved oppdagelse av brann:**
1. Varsle - Utløs brannalarm, ring 110
2. Redde - Hjelp mennesker i fare
3. Slokke - Hvis mulig og trygt
4. Begrense - Lukk dører og vinduer

**Husk:** Din egen sikkerhet først!

**Når du IKKE skal forsøke slokking:**
- Brannen er for stor
- Mye røyk
- Usikker rømningsvei
- Du er usikker på slokkemiddel`
      },
      {
        id: 'sikkerhetsfag-kap5-sek3',
        title: 'Evakuering',
        content: `# Evakuering

Evakuering handler om å bringe mennesker i sikkerhet ved brann eller andre hendelser.

## Evakueringsplan

Enhver virksomhet skal ha en evakueringsplan som beskriver:
- Varslingsprosedyrer
- Rømningsveier og nødutganger
- Møteplass
- Ansvar og roller
- Hensyn til personer med funksjonsnedsettelser

## Rømningsveier

### Krav til rømningsveier
- Alltid åpne (aldri låste eller blokkerte)
- Tilstrekkelig dimensjonert
- Merket med skilt
- Nødbelysning
- Maksimalt 30 meter til nærmeste utgang

### Rømningsskilt
- Grønn farge med hvitt symbol
- Pil viser retning
- Selvlysende eller belyst
- Plassert ved alle utganger og retningsendringer

## Evakueringsprosedyren

### Fase 1: Varsling
- Brannalarm aktiveres
- Automatisk eller manuelt
- Tydelig signal som høres overalt

### Fase 2: Forberedelse
- Avbryt arbeidet
- Sikre kritiske prosesser hvis tid
- Ta med personlige eiendeler kun hvis de er lett tilgjengelige

### Fase 3: Forflytning
- Gå rolig mot nærmeste utgang
- Følg skilting
- ALDRI ta heis
- Hjelp de som trenger det

### Fase 4: Samling
- Gå direkte til oppmøteplass
- Meld deg til leder/vakt
- Ikke forlat området
- Vent på beskjed

### Fase 5: Telling
- Sjekk at alle er ute
- Rapporter savnede til brannvesen
- Dokumenter hendelsen

## Spesielle hensyn

### Rullestolbrukere
- Egne evakueringsstoler
- Assistanse påkrevd
- Brannceller/venterom ved trapper

### Synshemmede
- Verbal veiledning
- Føre ut fysisk

### Hørselshemmede
- Visuelle alarmer (blinklys)
- Direkte varsling

### Mange mennesker
- Kontroller panikk
- Fordel på flere utganger
- Unngå flaskehalser

## Øvelser

Evakueringsøvelser skal gjennomføres regelmessig:
- Minimum årlig
- Varslet og uvarslet
- Evalueres og dokumenteres
- Forbedringspunkter følges opp`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap5-oppg1',
        type: 'multiple-choice',
        question: 'Hvilke tre elementer utgjør branntrekanten?',
        options: [
          'Varme, røyk, lys',
          'Brennbart materiale, oksygen, varme',
          'Ild, luft, brensel',
          'Gnist, gass, metall'
        ],
        correctAnswer: 1,
        explanation: 'Branntrekanten består av brennbart materiale (brensel), oksygen og varme. Alle tre må være til stede for at brann skal oppstå.'
      },
      {
        id: 'sikkerhetsfag-kap5-oppg2',
        type: 'multiple-choice',
        question: 'Hvilket slokkemiddel er best egnet for brann i elektronisk utstyr?',
        options: ['Vann', 'Skum', 'CO2', 'Våtkjemisk'],
        correctAnswer: 2,
        explanation: 'CO2 (karbondioksid) er best egnet for elektronikk fordi det ikke leder strøm og ikke etterlater rester som kan skade utstyret.'
      },
      {
        id: 'sikkerhetsfag-kap5-oppg3',
        type: 'short-answer',
        question: 'Beskriv PASS-metoden for bruk av brannslokningsapparat.',
        sampleAnswer: 'PASS står for: Pull - trekk ut sikringssplinten, Aim - rett strålerøret mot brannens base (ikke flammene), Squeeze - klem håndtaket for å løse ut slokkemiddelet, Sweep - fei fra side til side over hele brannen.'
      },
      {
        id: 'sikkerhetsfag-kap5-oppg4',
        type: 'practical',
        question: 'Lag en evakueringsplan for klasserommet ditt. Inkluder rømningsveier, møteplass og roller.',
        sampleAnswer: 'Plan bør inneholde: Skisse over rommet med rømningsveier, primær og sekundær utgang, møteplass ute, hvem som sjekker at alle er ute, hvem som varsler brannvesen, hensyn til eventuelle med funksjonsnedsettelser.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Branntrekanten:** Brensel, oksygen og varme må til for brann
- **Brannklasser:** A (fast), B (væske), C (gass), D (metall), F (matolje)
- **Slokkemidler:** Pulver, CO2, skum, vann - velg riktig type
- **PASS-metoden:** Pull, Aim, Squeeze, Sweep
- **Brannvarsling:** Røyk-, varme- og flammedetektorer
- **Evakuering:** Varsling, forberedelse, forflytning, samling, telling
- **Rømningsveier:** Alltid åpne, skiltet, nødbelysning
- **Spesielle hensyn:** Funksjonsnedsettelser, mange mennesker

Neste kapittel handler om HMS og arbeidsmiljø.
`
  },
  {
    id: 'sikkerhetsfag-kap6',
    courseId: 'sikkerhetsfag',
    chapterNumber: 6,
    title: 'HMS og arbeidsmiljø',
    description: 'Helse, miljø og sikkerhet i sikkerhetsarbeid',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap6-sek1',
        title: 'HMS-systemet',
        content: `# HMS-systemet

HMS står for Helse, Miljø og Sikkerhet. Alle virksomheter er pålagt å ha et systematisk HMS-arbeid.

## Lovgrunnlag

### Arbeidsmiljøloven
- Sikre et fullt forsvarlig arbeidsmiljø
- Forebygge skader og sykdom
- Gjelder alle arbeidsforhold

### Internkontrollforskriften
- Krav om systematisk HMS-arbeid
- Dokumentasjon av arbeidet
- Kontinuerlig forbedring

## Ansvar og roller

### Arbeidsgivers ansvar
- Overordnet ansvar for HMS
- Sørge for forsvarlig arbeidsmiljø
- Gi opplæring
- Tilrettelegge arbeidet
- Følge opp sykefravær

### Arbeidstakers ansvar
- Medvirke i HMS-arbeidet
- Bruke påbudt verneutstyr
- Melde fra om farer
- Følge instrukser
- Ta vare på egen og andres sikkerhet

### Verneombudet
- Valgt av de ansatte
- Ivareta arbeidstakernes interesser
- Delta i planlegging av HMS
- Stanse farlig arbeid

### Arbeidsmiljøutvalget (AMU)
- Påbudt ved 50+ ansatte
- Likevekt mellom ledelse og ansatte
- Behandle HMS-saker
- Gjennomgå rapporter og statistikk

## Internkontroll

Internkontroll er systematiske tiltak for å sikre at HMS-arbeidet fungerer.

**Kravene:**
1. Sørge for at lover og forskrifter følges
2. Kartlegge farer og vurdere risiko
3. Iverksette tiltak
4. Dokumentere arbeidet
5. Kontinuerlig forbedring

**Dokumentasjon:**
- HMS-håndbok
- Risikovurderinger
- Rutiner og prosedyrer
- Avviksrapporter
- Handlingsplaner`
      },
      {
        id: 'sikkerhetsfag-kap6-sek2',
        title: 'Arbeidsmiljøfaktorer',
        content: `# Arbeidsmiljøfaktorer

Sikkerhetsarbeid innebærer flere arbeidsmiljøutfordringer.

## Fysiske faktorer

### Ergonomi
- Riktig arbeidsstilling
- Variasjon i arbeidet
- Ergonomiske hjelpemidler
- Pauser og avlastning

### Klimatiske forhold
Vektere jobber ofte ute eller i krevende miljøer:
- Kulde og varme
- Trekk og fuktighet
- Riktig bekledning
- Hvilepauser i egnet miljø

### Støy
- Kan forekomme på konserter, industrianlegg, etc.
- Hørselsvern ved behov
- Grense på 85 dB for hørselsskade

### Belysning
- Tilstrekkelig lys for arbeidsoppgaver
- Unngå blending
- Særlig viktig ved patruljering

## Psykososiale faktorer

### Stress
Sikkerhetsarbeid kan være stressende:
- Uforutsigbare hendelser
- Konfliktsituasjoner
- Nattarbeid
- Tidspress

**Forebygging:**
- God opplæring og forberedelse
- Støtte fra kolleger og ledelse
- Debriefing etter hendelser
- Balanse arbeid/fritid

### Vold og trusler
Sikkerhetsarbeidere er særlig utsatt:
- Risiko i møte med aggressive personer
- Kan gi fysiske og psykiske skader
- Krever forebygging og oppfølging

**Tiltak:**
- Risikovurdering
- Opplæring i konflikthåndtering
- Alarmløsninger
- Aldri jobbe alene ved høy risiko
- Oppfølging etter hendelser

### Alenearbeid
- Vurderes spesielt ved risikovurdering
- Kommunikasjonsløsninger
- Innkallingsprosedyrer
- Særlige rutiner

## Organisatoriske faktorer

### Arbeidstid
- Nattarbeid og skiftarbeid vanlig
- Påvirker helse og sosialt liv
- Krav om nok hvile mellom vakter
- Arbeidsmiljøloven setter grenser

### Medvirkning
- Ansatte skal involveres i HMS
- Gi innspill og forslag
- Delta i risikovurderinger
- Oppleves som meningsfullt`
      },
      {
        id: 'sikkerhetsfag-kap6-sek3',
        title: 'Førstehjelp',
        content: `# Førstehjelp

Som sikkerhetsarbeider kan du være først på stedet ved ulykker og medisinske nødsituasjoner.

## Grunnleggende prinsipper

### Sikkerhet først
- Ikke bli offer selv
- Sikre skadestedet
- Bruk verneutstyr ved behov

### ABCDE-prinsippet

**A - Airway (Luftveier)**
- Sjekk om luftveiene er frie
- Fjern fremmedlegemer
- Bøy hodet bakover

**B - Breathing (Pusting)**
- Se etter pustebevegelser
- Lytt etter pustelyder
- Føl etter luftstrøm

**C - Circulation (Sirkulasjon)**
- Sjekk puls
- Se etter ytre blødninger
- Vurder sjokktegn

**D - Disability (Bevissthet)**
- Vurder bevissthetsnivå
- Snakker personen?
- Reagerer på smerte?

**E - Expose (Eksponere)**
- Avdekk skader
- Hold pasienten varm

## Hjerte-lungeredning (HLR)

Hvis personen er bevisstløs og ikke puster normalt:

1. Ring 113
2. Start brystkompresjoner
   - 30 kompresjoner
   - Dyp 5-6 cm
   - Takt 100-120 per minutt
3. Gi 2 innblåsinger
4. Fortsett 30:2 til hjelp kommer
5. Bruk hjertestarter hvis tilgjengelig

### Hjertestarter (AED)
- Automatisk analyse av hjerterytme
- Gir støt ved behov
- Følg talebeskjedene
- Kan redde liv

## Vanlige akutte tilstander

### Brystsmerter (hjerteinfarkt)
- Sterke smerter i brystet
- Utstråling til arm, kjeve, rygg
- Blekhet, kaldsvette
- **Tiltak:** Ring 113, ro, evt. nitro

### Hjerneslag
- Plutselig ansiktslammelse
- Sløret tale
- Armlammelse
- **Tiltak:** Ring 113 umiddelbart

### Kramper/epilepsi
- Beskytt mot skade
- Ikke hold fast
- Legg i stabilt sideleie etterpå
- Ring 113 ved første gang

### Allergisjokk
- Pustevansker, hevelse
- Utslett, kløe
- Blodtrykksfall
- **Tiltak:** Ring 113, adrenalin (EpiPen)

### Blødninger
- Direkte trykk på såret
- Løft skadet kroppsdel
- Legg trykkbandasje
- Ved store blødninger: Ring 113

## Dokumentasjon

Alle førstehjelpstilfeller skal dokumenteres:
- Hva skjedde
- Hvilken hjelp ble gitt
- Tilstanden ved overlevering
- Hvem overtok pasienten`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap6-oppg1',
        type: 'multiple-choice',
        question: 'Hvem har overordnet ansvar for HMS i en virksomhet?',
        options: ['Verneombudet', 'Arbeidsgiver', 'Arbeidsmiljøutvalget', 'Tillitsvalgte'],
        correctAnswer: 1,
        explanation: 'Arbeidsgiver har det overordnede ansvaret for HMS. Verneombudet og AMU har viktige roller, men ansvaret ligger hos arbeidsgiver.'
      },
      {
        id: 'sikkerhetsfag-kap6-oppg2',
        type: 'multiple-choice',
        question: 'Hva står ABCDE for i førstehjelp?',
        options: [
          'Always Be Careful During Emergencies',
          'Airway, Breathing, Circulation, Disability, Expose',
          'Alert, Breathe, Call, Do, Evaluate',
          'Assess, Bandage, Compress, Dress, Elevate'
        ],
        correctAnswer: 1,
        explanation: 'ABCDE står for Airway (luftveier), Breathing (pusting), Circulation (sirkulasjon), Disability (bevissthet) og Expose (eksponere/avdekke).'
      },
      {
        id: 'sikkerhetsfag-kap6-oppg3',
        type: 'short-answer',
        question: 'Hva er forskjellen på arbeidsgivers og arbeidstakers ansvar i HMS-arbeidet?',
        sampleAnswer: 'Arbeidsgiver har overordnet ansvar for å sikre forsvarlig arbeidsmiljø, gi opplæring, tilrettelegge og følge opp. Arbeidstaker har ansvar for å medvirke, bruke verneutstyr, melde fra om farer, følge instrukser og ta vare på egen og andres sikkerhet.'
      },
      {
        id: 'sikkerhetsfag-kap6-oppg4',
        type: 'practical',
        question: 'Øv på HLR: Beskriv trinnvis hva du gjør når du finner en bevisstløs person som ikke puster normalt.',
        sampleAnswer: '1) Sjekk om personen reagerer (snakk, rist forsiktig). 2) Rop på hjelp. 3) Åpne luftveiene (bøy hodet bakover). 4) Sjekk pusting i 10 sekunder. 5) Ring 113. 6) Start brystkompresjoner (30 stk, 5-6 cm dype, 100-120/min). 7) Gi 2 innblåsinger. 8) Fortsett 30:2. 9) Bruk hjertestarter hvis tilgjengelig.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **HMS-systemet:** Arbeidsmiljøloven og internkontrollforskriften
- **Ansvar:** Arbeidsgiver, arbeidstaker, verneombud, AMU
- **Internkontroll:** Systematiske tiltak, dokumentasjon, forbedring
- **Fysiske faktorer:** Ergonomi, klima, støy, belysning
- **Psykososiale faktorer:** Stress, vold, trusler, alenearbeid
- **Førstehjelp:** ABCDE-prinsippet, HLR, hjertestarter
- **Akutte tilstander:** Hjerteinfarkt, slag, kramper, sjokk, blødninger

Neste kapittel handler om lover og forskrifter.
`
  },
  {
    id: 'sikkerhetsfag-kap7',
    courseId: 'sikkerhetsfag',
    chapterNumber: 7,
    title: 'Lover og forskrifter',
    description: 'Juridisk rammeverk for sikkerhetsbransjen',
    estimatedTime: '120 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap7-sek1',
        title: 'Vaktvirksomhetsloven',
        content: `# Vaktvirksomhetsloven

Vaktvirksomhetsloven regulerer ervervsmessig vaktvirksomhet i Norge.

## Formål og virkeområde

Loven skal sikre:
- Forsvarlig utøvelse av vaktvirksomhet
- Rettssikkerhet for publikum
- Kontroll med bransjen

**Gjelder for:**
- Ervervsmessig vaktvirksomhet
- Egenvakthold av en viss størrelse
- Alarmsentraler

## Tillatelse

### Krav til foretaket
- Må ha tillatelse fra politiet
- Tilfredsstillende vandel for eiere/ledelse
- Ansvarsforsikring
- Forsvarlig drift

### Krav til vektere
1. **Alder:** Minimum 18 år
2. **Vandel:** Plettfri vandel (vandelskontroll)
3. **Utdanning:** Godkjent vekterutdanning (105 timer)
4. **Legitimasjon:** Vekterlegitimation fra politiet
5. **Uniform:** Godkjent uniform med firmanavn

## Vekterlegitimation

- Utstedes av politiet
- Gyldig i 5 år
- Viser at kravene er oppfylt
- Skal alltid medbringes under tjeneste
- Skal fremvises på oppfordring

## Uniform og utstyr

### Uniformskrav
- Skal ikke kunne forveksles med politi
- Firmanavn tydelig synlig
- Godkjent av politiet

### Maktmidler
- Håndjern kun med særskilt tillatelse
- Batong med særskilt tillatelse
- Pepperspray tillatt med opplæring
- Skytevåpen ikke tillatt

## Taushetsplikt

Vektere har taushetsplikt om:
- Personlige forhold de får kjennskap til
- Sikkerhetsopplysninger
- Forretningshemmeligheter

Unntak:
- Plikt til å avverge alvorlige forbrytelser
- Opplysningsplikt til politiet
- Vitneplikt i retten`
      },
      {
        id: 'sikkerhetsfag-kap7-sek2',
        title: 'Vekterens myndighet',
        content: `# Vekterens myndighet

Som vekter har du ingen spesiell politimyndighet, men du har samme rett som enhver borger til selvhjelp og nødhjelp.

## Privatrettslige grunnlag

### Nødrett (Straffeloven § 17)
- Tillater lovstridige handlinger i nødsituasjoner
- Faren må ikke kunne avverges på annen måte
- Skaden som voldes må ikke være uforholdsmessig
- Brukes sjelden i sikkerhetsarbeid

### Nødverge (Straffeloven § 18)
- Rett til å forsvare seg mot ulovlige angrep
- Gjelder også forsvar av andre
- Handlingen må ikke gå lenger enn nødvendig
- Må ikke overstige forsvarlige grenser

**Eksempel:** Du kan bruke fysisk makt for å stoppe en person som angriper en annen, men ikke mer makt enn nødvendig.

### Pågripelse (Straffeprosessloven § 176)
- Enhver kan pågripe person som tas på fersk gjerning
- Eller som treffes på flukt fra fersk gjerning
- Gjelder lovbrudd som kan medføre frihetsstraff
- Skal straks overleveres til politiet

**Krav for lovlig pågripelse:**
1. Fersk gjerning eller flukt fra det
2. Handling som kan gi frihetsstraff
3. Ikke mer makt enn nødvendig
4. Umiddelbar overlevering til politiet

### Selvtekt (Straffeloven § 19)
- Rett til å ta tilbake stjålet gjenstand
- Eller å hindre inntrenger
- Må skje umiddelbart
- Lovlig selvtekt

**Eksempel:** Holde tilbake person som har stjålet og ta tilbake gjenstanden.

## Kontraktsrettslige grunnlag

### Husordensregler
- Fastslår regler for opphold på privat område
- Den som bryter reglene kan bortvises
- Eier/leier kan delegere myndighet til vekter

### Bortvisning
Du kan bortvise personer som:
- Bryter husordensregler
- Forstyrrer ro og orden
- Er til sjenanse for andre

**Fremgangsmåte:**
1. Informer om at de bes forlate stedet
2. Gi begrunnelse
3. Gi rimelig tid til å etterkome
4. Varsle politiet hvis de nekter

## Maktbruk

### Proporsjonalitetsprinsippet
- Maktbruken må stå i forhold til situasjonen
- Start alltid med minst inngripende middel
- Øk gradvis om nødvendig
- Aldri mer makt enn strengt nødvendig

### Maktpyramiden (fra minst til mest)
1. Tilstedeværelse
2. Verbal kommunikasjon
3. Fysisk avledning/eskortering
4. Fastholdelse
5. Kontrollgrep
6. Slag/spark (kun i nødverge)`
      },
      {
        id: 'sikkerhetsfag-kap7-sek3',
        title: 'Andre relevante lover',
        content: `# Andre relevante lover

Sikkerhetsbransjen berøres av mange lover og forskrifter.

## Straffeloven

Viktige bestemmelser:
- **§ 261 - Frihetsberøvelse:** Ulovlig å holde noen tilbake uten hjemmel
- **§ 271 - Kroppskrenkelse:** Ulovlig å utøve vold uten hjemmel
- **§ 266 - Hensynsløs atferd:** Truende eller skremmende opptreden
- **§ 231 - Falsk anklage:** Ulovlig å anklage uskyldig person

## Personopplysningsloven (GDPR)

Regulerer behandling av personopplysninger:
- Kameraovervåking
- Logging av adgangskontroll
- Registrering av hendelser
- Besøksregistrering

**Krav:**
- Behandlingsgrunnlag
- Formålsbegrensning
- Dataminimering
- Lagringstidsbegrensning
- Sikkerhet

## Brann- og eksplosjonsvernloven

Viktig for brannforebygging:
- Krav om brannvernrutiner
- Evakueringsplaner
- Brannøvelser
- Brannvarslingsanlegg

## Arbeidsmiljøloven

Regulerer arbeidsforhold:
- Arbeidstid og overtid
- HMS-arbeid
- Verneombud
- Arbeidstakers rettigheter

## Alkoholloven

Relevant for vektere på utesteder:
- Skjenkekontroll
- Alderskontroll
- Ordensregler
- Samarbeid med skjenkebevilling

## Politiloven

Regulerer samarbeid med politiet:
- § 6 - Politiets myndighet
- § 7 - Hjelpeplikt
- Bistand ved pågripelse
- Rapporteringsplikt

## Sivilprosessloven

Regulerer sivile tvister:
- Vitneplikt
- Taushetsplikt
- Fremleggelse av bevis

## Viktige forskrifter

- **Vaktvirksomhetsforskriften:** Utfyllende regler til vaktvirksomhetsloven
- **Internkontrollforskriften:** Krav om systematisk HMS-arbeid
- **Forskrift om kameraovervåking:** Regulerer bruk av overvåkingskamera

## Yrkesetiske retningslinjer

Selv om ikke lovpålagt, følger bransjen etiske retningslinjer:
- NHO Service og Handel sine retningslinjer
- Bransjestandard for vekterutdanning
- Retningslinjer for maktbruk`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap7-oppg1',
        type: 'multiple-choice',
        question: 'Hva er kravet til minimumsalder for å bli vekter i Norge?',
        options: ['16 år', '18 år', '20 år', '21 år'],
        correctAnswer: 1,
        explanation: 'I henhold til vaktvirksomhetsloven må man være minimum 18 år for å få vekterlegitimation og arbeide som vekter.'
      },
      {
        id: 'sikkerhetsfag-kap7-oppg2',
        type: 'multiple-choice',
        question: 'Hvilken paragraf hjemler enhvers rett til pågripelse på fersk gjerning?',
        options: ['Straffeloven § 17', 'Straffeloven § 18', 'Straffeprosessloven § 176', 'Vaktvirksomhetsloven § 12'],
        correctAnswer: 2,
        explanation: 'Straffeprosessloven § 176 gir enhver rett til å pågripe person som treffes på fersk gjerning eller på flukt fra det.'
      },
      {
        id: 'sikkerhetsfag-kap7-oppg3',
        type: 'short-answer',
        question: 'Forklar forskjellen på nødrett og nødverge.',
        sampleAnswer: 'Nødrett (§ 17) gir rett til å begå ellers straffbare handlinger for å redde fra fare, f.eks. bryte seg inn for å slukke brann. Nødverge (§ 18) gir rett til å forsvare seg mot ulovlige angrep, f.eks. bruke fysisk makt for å stoppe en angriper. Nødverge retter seg mot angriperen, nødrett kan ramme uskyldige.'
      },
      {
        id: 'sikkerhetsfag-kap7-oppg4',
        type: 'discussion',
        question: 'En person nekter å forlate et kjøpesenter etter stengetid. Hvilke lovhjemler kan du bruke, og hvordan bør du gå frem?',
        sampleAnswer: 'Hjemmel: Husordensregler og eiers/leiers rett til å bortvise fra privat område. Fremgangsmåte: 1) Informer høflig om at senteret stenger og be personen forlate. 2) Gi begrunnelse. 3) Gi rimelig tid. 4) Hvis personen nekter, varsle politiet. Bruk av fysisk makt kun ved nødvergesituasjon eller hvis personen aktivt hindrer deg.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Vaktvirksomhetsloven:** Krav til tillatelse, utdanning, legitimasjon, uniform
- **Vekterens myndighet:** Basert på privatrettslige grunnlag, ikke politi
- **Nødrett og nødverge:** Lovlige handlinger i nødsituasjoner
- **Pågripelse:** Fersk gjerning, umiddelbar overlevering til politi
- **Bortvisning:** Fra privat område basert på husordensregler
- **Maktbruk:** Proporsjonalitetsprinsippet, maktpyramiden
- **Andre lover:** Straffeloven, GDPR, brannvernloven, arbeidsmiljøloven

Neste kapittel handler om beredskap og krisehåndtering.
`
  },
  {
    id: 'sikkerhetsfag-kap8',
    courseId: 'sikkerhetsfag',
    chapterNumber: 8,
    title: 'Beredskap og krisehåndtering',
    description: 'Planlegging for og håndtering av kriser og alvorlige hendelser',
    estimatedTime: '120 minutter',
    sections: [
      {
        id: 'sikkerhetsfag-kap8-sek1',
        title: 'Beredskapsplanlegging',
        content: `# Beredskapsplanlegging

Beredskap handler om å være forberedt på uønskede hendelser og kunne håndtere dem effektivt.

## Hva er beredskap?

Beredskap omfatter:
- Planlegging for uønskede hendelser
- Etablering av organisasjon og ressurser
- Opplæring og øvelser
- Vedlikehold av planer og utstyr

## Beredskapsprinsippene

### Ansvarsprinsippet
Den som har ansvar i en normalsituasjon har også ansvar under krise.

### Likhetsprinsippet
Organiseringen under krise skal være mest mulig lik normalsituasjonen.

### Nærhetsprinsippet
Kriser skal håndteres på lavest mulig nivå.

### Samvirkeprinsippet
Aktører har selvstendig ansvar for å samarbeide.

## Beredskapsplan

En beredskapsplan beskriver:

### Formål og omfang
- Hva planen dekker
- Hvem den gjelder for
- Hvilke hendelser den omfatter

### Varsling
- Varslingsrutiner
- Varslingslister
- Reserveløsninger

### Organisering
- Kriseledelse
- Roller og ansvar
- Fullmakter

### Ressurser
- Personell
- Utstyr
- Lokaler

### Handlingsplaner
- Konkrete tiltak for ulike scenarier
- Sjekklister
- Eskaleringsrutiner

### Kommunikasjon
- Intern kommunikasjon
- Ekstern kommunikasjon
- Mediekontakt

### Normalisering
- Kriterier for avslutning
- Tilbake til normal drift
- Evaluering og læring

## Scenarioer å planlegge for

**Sikkerhetsrelaterte:**
- Innbrudd og tyveri
- Ran
- Vold og trusler
- Sabotasje
- Terror

**Ulykker:**
- Brann
- Personskade
- Trafikkulykke

**Naturhendelser:**
- Uvær
- Flom
- Strømbrudd

**Andre:**
- IT-havari
- Pandemier
- Omdømmekrise`
      },
      {
        id: 'sikkerhetsfag-kap8-sek2',
        title: 'Krisehåndtering',
        content: `# Krisehåndtering

Når krisen inntreffer, må du handle raskt og effektivt.

## Krisens faser

### Fase 1: Deteksjon
- Oppdage at noe har skjedd
- Vurdere omfang og alvorlighet
- Varsle riktig nivå

### Fase 2: Mobilisering
- Aktivere beredskapsplan
- Samle kriseledelse
- Etablere kommandostruktur

### Fase 3: Akutt respons
- Redde liv og helse
- Begrense skade
- Sikre stedet
- Håndtere media

### Fase 4: Stabilisering
- Kontroll over situasjonen
- Normalisering påbegynnes
- Ivaretakelse av berørte

### Fase 5: Avslutning
- Krisetilstand oppheves
- Normal drift gjenopptas
- Evaluering og læring

## Kriseledelse

### Krisestab
En krisestab består typisk av:
- **Kriseleder:** Beslutninger og overordnet ansvar
- **Operativ leder:** Koordinerer aksjoner
- **Informasjonsleder:** Kommunikasjon og media
- **Loggfører:** Dokumentasjon

### Beslutninger i krise
- Samle tilgjengelig informasjon
- Vurdere alternativer
- Ta beslutning - handling er viktigere enn perfeksjon
- Kommuniser beslutningen tydelig
- Følg opp og juster

### Kommunikasjon i krise

**Interne:**
- Hyppig og ærlig informasjon
- Klare instrukser
- Tilgjengelighet for spørsmål

**Eksterne:**
- Én talsperson
- Forberedte budskap
- Faktabasert informasjon
- Vis empati

**Medier:**
- Vær proaktiv
- Gi faktisk informasjon
- Ikke spekuler
- Vis ansvar og handlekraft

## Spesielle situasjoner

### Ran
1. Behold roen
2. Ikke utsett deg for fare
3. Observer og memorér
4. Følg instrukser fra gjerningsmann
5. Varsle politiet straks det er trygt

### Bombetrussel
1. Ta alle trusler alvorlig
2. Få mest mulig informasjon
3. Varsle politiet umiddelbart
4. Følg politiets instrukser
5. Evakuer ved ordre

### Terror
1. Løp - Kom deg vekk hvis mulig
2. Gjemm - Søk dekning hvis du ikke kan flykte
3. Varsle - Ring 112 når det er trygt`
      },
      {
        id: 'sikkerhetsfag-kap8-sek3',
        title: 'Øvelser og evaluering',
        content: `# Øvelser og evaluering

Beredskapsplaner må øves regelmessig for å fungere i en virkelig krise.

## Formål med øvelser

- Test om planene fungerer
- Identifiser svakheter
- Trene personell
- Bygge erfaring og trygghet
- Oppfylle lovkrav

## Typer øvelser

### Diskusjonsøvelse (bordøvelse)
- Gjennomgang av planer
- Diskusjon av scenarier
- Klargjøring av roller
- Lav kostnad og ressursbruk

### Spilløvelse
- Simulert hendelse
- Deltakere tar beslutninger
- Fasilitator styrer forløpet
- Evaluerer beslutningsprosesser

### Funksjonsøvelse
- Test av enkeltfunksjoner
- F.eks. varsling, kommunikasjon
- Praktisk gjennomføring
- Avdekker tekniske svakheter

### Fullskalaøvelse
- Mest realistisk
- Alle funksjoner aktiveres
- Fysisk gjennomføring
- Ressurskrevende men verdifullt

## Planlegging av øvelser

1. **Mål:** Hva skal testes/læres?
2. **Scenario:** Realistisk og relevant
3. **Deltakere:** Hvem skal delta?
4. **Ressurser:** Tid, sted, utstyr
5. **Sikkerhet:** Sikre at øvelsen er trygg
6. **Evaluering:** Hvordan vurdere resultatet?

## Gjennomføring

**Før øvelsen:**
- Briefing til deltakere
- Avklar at det er øvelse
- Etabler sikkerhetsregler

**Under øvelsen:**
- Følg scenarioet
- Observer og dokumenter
- Injiser nye hendelser ved behov

**Etter øvelsen:**
- Umiddelbar debriefing
- Samle observasjoner
- Hot wash-up (første inntrykk)

## Evaluering

### Evalueringsrapport
- Hva fungerte godt?
- Hva fungerte ikke?
- Hvorfor?
- Hva bør forbedres?
- Konkrete anbefalinger

### Forbedringstiltak
- Prioriter tiltak
- Ansvarliggjør
- Sett tidsfrist
- Følg opp gjennomføring

### Læringskultur
- Del erfaringer
- Ikke fordel skyld
- Fokuser på forbedring
- Verdsett kritiske tilbakemeldinger

## Vedlikehold av beredskap

- Årlig gjennomgang av planer
- Oppdater ved endringer
- Regelmessige øvelser
- Sjekk av utstyr
- Opplæring av nye ansatte`
      }
    ],
    exercises: [
      {
        id: 'sikkerhetsfag-kap8-oppg1',
        type: 'multiple-choice',
        question: 'Hva innebærer ansvarsprinsippet i beredskap?',
        options: [
          'Politiet har alltid ansvar under krise',
          'Den som har ansvar til daglig har også ansvar under krise',
          'Kriseledelsen overtar alt ansvar',
          'Staten har ansvar for all krisehåndtering'
        ],
        correctAnswer: 1,
        explanation: 'Ansvarsprinsippet innebærer at den som har ansvar i en normalsituasjon også har ansvar under en krise. Ansvaret flyttes ikke til andre.'
      },
      {
        id: 'sikkerhetsfag-kap8-oppg2',
        type: 'multiple-choice',
        question: 'Hva er riktig rekkefølge ved terrorsituasjon?',
        options: [
          'Varsle, gjemm, løp',
          'Gjemm, varsle, løp',
          'Løp, gjemm, varsle',
          'Varsle, løp, gjemm'
        ],
        correctAnswer: 2,
        explanation: 'Ved terror er rekkefølgen: 1) Løp - kom deg vekk hvis mulig, 2) Gjemm - søk dekning hvis du ikke kan flykte, 3) Varsle - ring 112 når det er trygt.'
      },
      {
        id: 'sikkerhetsfag-kap8-oppg3',
        type: 'short-answer',
        question: 'Beskriv krisens fem faser og hva som kjennetegner hver fase.',
        sampleAnswer: '1) Deteksjon - oppdage hendelsen og vurdere alvorlighet. 2) Mobilisering - aktivere plan og samle kriseledelse. 3) Akutt respons - redde liv, begrense skade, sikre stedet. 4) Stabilisering - få kontroll, begynne normalisering. 5) Avslutning - oppheve krisetilstand, evaluere og lære.'
      },
      {
        id: 'sikkerhetsfag-kap8-oppg4',
        type: 'practical',
        question: 'Du er vekter i et kontorbygg når du mottar en bombetrussel på telefon. Beskriv trinn for trinn hva du gjør.',
        sampleAnswer: '1) Behold roen og hold samtalen gående. 2) Still spørsmål om bomben (hvor, når, hvorfor). 3) Lytt etter bakgrunnslyder og dialekt. 4) Varsle politiet (110/112) umiddelbart etter samtalen. 5) Varsle sikkerhetsleder/ledelse. 6) Vent på instrukser fra politiet. 7) Gjennomfør evakuering hvis ordre. 8) Dokumenter alt du husker fra samtalen.'
      }
    ],
    summary: `
## Oppsummering

I dette kapittelet har du lært:

- **Beredskapsprinsippene:** Ansvar, likhet, nærhet, samvirke
- **Beredskapsplan:** Varsling, organisering, ressurser, handlingsplaner
- **Krisens faser:** Deteksjon, mobilisering, respons, stabilisering, avslutning
- **Kriseledelse:** Krisestab, beslutninger, kommunikasjon
- **Spesielle situasjoner:** Ran, bombetrussel, terror (løp-gjemm-varsle)
- **Øvelser:** Diskusjons-, spill-, funksjons- og fullskalaøvelser
- **Evaluering:** Læringskultur, forbedringstiltak, vedlikehold

Du har nå gjennomgått hele pensum i Sikkerhetsfag!
`
  }
];

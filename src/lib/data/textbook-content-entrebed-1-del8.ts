/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenorskap og bedriftsutvikling 1 (VG2) - Del 8: Ungdomsbedrift i praksis
 * Kapittel 8.1-8.5
 *
 * Dekker LK20 kompetansemål:
 * - planlegge, gjennomfore og vurdere drift av en ungdomsbedrift
 * - utarbeide regnskap og arsmelding for en ungdomsbedrift
 * - presentere og markedsfore en ungdomsbedrift
 * - reflektere over laeringsutbytte og evaluere arbeidet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Starte ungdomsbedrift
// ============================================================================

export const CHAPTER_ENTREBED_1_8_1: TextbookChapter = {
  id: 'entrebed-1-8-1',
  courseId: 'entrebed-1',
  chapterNumber: '8.1',
  title: 'Starte ungdomsbedrift',
  description: 'Laer hvordan du registrerer en ungdomsbedrift, gjennomforer aksjesalg, holder etableringsmotet og utarbeider vedtekter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge og gjennomfore etablering av en ungdomsbedrift',
    'forstaa prosessen med registrering, aksjesalg og vedtekter',
  ],
  content: [
    {
      id: 'eb-8-1-intro',
      type: 'text',
      content: `## Starte ungdomsbedrift

Ungdomsbedrift (UB) er et pedagogisk program der elever starter og driver en reell bedrift i lopet av et skolear. Gjennom UB far du praktisk erfaring med alle sider av bedriftsdrift - fra ide og etablering til drift og avvikling.

**Hva du laerer i dette kapittelet:**
- Hva en ungdomsbedrift er og hvordan den er organisert
- Hvordan du registrerer en UB hos Ungt Entreprenorskap
- Gjennomforing av aksjesalg og etableringsmotet
- Utforming av vedtekter for bedriften

**Forutsetninger:**
For a starte en ungdomsbedrift trenger dere:
- En gruppe pa 3-10 elever
- En forretningside
- En mentor fra naeringslivet
- Tilknytning til Ungt Entreprenorskap (UE)`,
    },
    {
      id: 'eb-8-1-def-1',
      type: 'definition',
      title: 'Ungdomsbedrift (UB)',
      content: `**Ungdomsbedrift** er et opplaeringsprogram i regi av Ungt Entreprenorskap der elever i videregaende skole starter og driver en reell bedrift i ett skolear. Bedriften registreres hos Ungt Entreprenorskap og far et eget organisasjonsnummer.

**Kjennetegn:**
- Drives av elever i VG1, VG2 eller VG3
- Varer ett skolear (august-mai)
- Aksjekapital mellom 300 og 3000 kroner
- Egen organisasjonsform med styre og daglig leder
- Mentor fra naeringslivet gir radgivning
- Avvikles ved skoleaarets slutt`,
    },
    {
      id: 'eb-8-1-text-1',
      type: 'text',
      content: `### Registrering av ungdomsbedrift

**Steg 1: Registrering hos Ungt Entreprenorskap**
For a bli en formell ungdomsbedrift ma dere registrere bedriften hos det fylkeskommunale kontoret til Ungt Entreprenorskap. Registreringen gir dere:
- Eget organisasjonsnummer
- Tilgang til UB-portalen
- Forsikring gjennom UE
- Mulighet til a delta pa messer og konkurranser

**Steg 2: Registreringsskjema**
Skjemaet krever informasjon om:
- Bedriftens navn (ma vaere unikt)
- Forretningside og produktbeskrivelse
- Navn pa alle deltakere
- Kontaktlaerer og mentor
- Skole og studieprogram

**Steg 3: Bankforbindelse**
Etter registrering kan dere opprette bankkonto for bedriften. Mange banker tilbyr egne kontoer for ungdomsbedrifter uten gebyr.`,
    },
    {
      id: 'eb-8-1-def-2',
      type: 'definition',
      title: 'Aksjesalg i ungdomsbedrift',
      content: `**Aksjesalg** er prosessen der ungdomsbedriften selger aksjer for a skaffe startkapital. Aksjekapitalen brukes til a finansiere oppstarten av bedriften.

**Regler for aksjesalg:**
- Samlet aksjekapital: minimum 300 kr, maksimum 3000 kr
- Hver aksje har en pris (paalydende verdi), ofte 10-50 kr
- Aksjer kan selges til medelever, familie, venner og laerere
- Hver aksjonaer far et aksjebevis
- Aksjonaerene eier en andel av bedriften

**Eksempel:**
Bedriften bestemmer seg for a ha 60 aksjer til 50 kr per stykk. Det gir en aksjekapital pa 3000 kr. Disse selges til familie, venner og medelever.`,
    },
    {
      id: 'eb-8-1-text-2',
      type: 'text',
      content: `### Etableringsmotet

Etableringsmotet er det forste formelle motet i ungdomsbedriften. Her legges grunnlaget for hele bedriftens virksomhet.

**Agenda for etableringsmotet:**

1. **Valg av styre**
   - Styreleder (ofte daglig leder)
   - Nestleder
   - Okonomiansvarlig
   - Eventuelt andre styremedlemmer

2. **Vedta vedtekter**
   - Bedriftens formal
   - Organisering og roller
   - Regler for beslutninger

3. **Fastsette forretningside**
   - Hva skal bedriften selge?
   - Hvem er maalgruppen?
   - Hvordan skal produktet/tjenesten leveres?

4. **Bestemme aksjekapital**
   - Antall aksjer og pris per aksje
   - Plan for aksjesalg

5. **Fordele roller og oppgaver**
   - Daglig leder, markedsforingsansvarlig, produksjonsansvarlig osv.
   - Ansvarsomrader og forventninger

6. **Praktiske avklaringer**
   - Moteplaner og kommunikasjonskanaler
   - Frister og milepaler`,
    },
    {
      id: 'eb-8-1-def-3',
      type: 'definition',
      title: 'Vedtekter',
      content: `**Vedtekter** er bedriftens grunnregler. De fungerer som en "grunnlov" for ungdomsbedriften og regulerer hvordan bedriften skal drives.

**Vedtektene bor inneholde:**
- **Bedriftens navn** og formaal
- **Aksjekapital:** Antall aksjer, paalydende verdi og total aksjekapital
- **Styret:** Sammensetning, valg og funksjonstid
- **Beslutningsmyndighet:** Hvordan beslutninger tas (flertall, enstemmighet)
- **Generalforsamling:** Nar og hvordan den avholdes
- **Overskuddsdisponering:** Hvordan eventuelt overskudd fordeles
- **Avvikling:** Prosedyre for avvikling av bedriften

**Viktig:** Vedtektene vedtas pa etableringsmotet og kan bare endres med kvalifisert flertall (2/3 av stemmene).`,
    },
    {
      id: 'eb-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Rollefordeling i en ungdomsbedrift',
      problem: 'En ungdomsbedrift med seks elever skal fordele roller. Hvilke roller trenger de, og hva innebarer hver rolle?',
      solution: `**Daglig leder (1 person):**
- Leder det daglige arbeidet og koordinerer gruppen
- Representerer bedriften utad
- Sikrer at alle holder tidsfrister

**Okonomiansvarlig (1 person):**
- Forer regnskap og holder oversikt over inntekter og utgifter
- Handterer bankkonto og betalinger
- Lager budsjett og okonomiske rapporter

**Markedsforingsansvarlig (1 person):**
- Planlegger og gjennomforer markedsforing
- Oppretter og vedlikeholder sosiale medier
- Designer markedsforingsmateriell

**Produksjonsansvarlig (1 person):**
- Organiserer produksjon av produktet/tjenesten
- Sikrer kvalitet
- Handler inn materiale og ravaarer

**Salgsansvarlig (1 person):**
- Planlegger og gjennomforer salg
- Har kontakt med kunder
- Folger opp bestillinger

**HR- og administrasjonsansvarlig (1 person):**
- Skriver referater fra moter
- Holder orden pa dokumenter
- Folger opp trivsel og samarbeid i gruppen`,
    },
    {
      id: 'eb-8-1-tip-1',
      type: 'tip',
      title: 'Tips for et godt bedriftsnavn',
      content: `Et godt bedriftsnavn bor vaere:
- **Kort og lett a huske** - maks 2-3 ord
- **Lett a uttale og stave** - unnga kompliserte ord
- **Relevant** - si noe om hva bedriften gjor
- **Unikt** - sjekk at det ikke allerede er i bruk
- **Tilgjengelig** - sjekk at domenenavn og sosiale medier er ledige

**Eksempler pa gode UB-navn:**
- "GronVask" (miljovennlig vaskemiddel)
- "SnackBox" (sunne mellommaltider)
- "KodeHjelp" (programmerings-veiledning)`,
    },
    {
      id: 'eb-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er den maksimale aksjekapitalen i en ungdomsbedrift?',
        options: [
          { id: 'a', text: '1000 kroner', isCorrect: false },
          { id: 'b', text: '3000 kroner', isCorrect: true },
          { id: 'c', text: '5000 kroner', isCorrect: false },
          { id: 'd', text: '10 000 kroner', isCorrect: false },
        ],
        solution: 'I en ungdomsbedrift registrert hos Ungt Entreprenorskap er den maksimale aksjekapitalen 3000 kroner, mens minimum er 300 kroner.',
      },
    },
    {
      id: 'eb-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er IKKE en typisk del av etableringsmotet i en ungdomsbedrift?',
        options: [
          { id: 'a', text: 'Valg av styre', isCorrect: false },
          { id: 'b', text: 'Vedta vedtekter', isCorrect: false },
          { id: 'c', text: 'Utbetale utbytte til aksjonaerer', isCorrect: true },
          { id: 'd', text: 'Fordele roller og oppgaver', isCorrect: false },
        ],
        solution: 'Utbetaling av utbytte skjer forst ved avvikling av bedriften, ikke pa etableringsmotet. Pa etableringsmotet velges styre, vedtekter vedtas, aksjekapital fastsettes, og roller fordeles.',
      },
    },
    {
      id: 'eb-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar hva vedtekter er og hvorfor de er viktige for en ungdomsbedrift.',
        hints: ['Tenk pa vedtektene som bedriftens grunnlov'],
        solution: 'Vedtekter er bedriftens grunnregler som regulerer hvordan bedriften skal drives. De inneholder blant annet bedriftens formal, aksjekapital, styrets sammensetning, beslutningsmyndighet og regler for avvikling. Vedtektene er viktige fordi de skaper forutsigbarhet, forebygger konflikter, og gir klare rammer for beslutninger. De vedtas pa etableringsmotet og kan bare endres med 2/3 flertall.',
      },
    },
    {
      id: 'eb-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Beskriv de ulike rollene i en ungdomsbedrift og forklar hvilke ansvarsomrader hver rolle har.',
        solution: 'De vanligste rollene i en ungdomsbedrift er: 1) Daglig leder - leder det daglige arbeidet, koordinerer gruppen og representerer bedriften utad. 2) Okonomiansvarlig - forer regnskap, holder oversikt over inntekter og utgifter, og lager budsjetter. 3) Markedsforingsansvarlig - planlegger og gjennomforer markedsforing, sosiale medier og design. 4) Produksjonsansvarlig - organiserer produksjon og sikrer kvalitet. 5) Salgsansvarlig - planlegger salg og har kundekontakt.',
      },
    },
    {
      id: 'eb-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Din ungdomsbedrift skal ha 50 aksjer. Dere onsker en aksjekapital pa 2500 kroner. Hva blir prisen per aksje? Lag en plan for hvordan dere kan selge aksjene.',
        solution: 'Pris per aksje: 2500 kr / 50 aksjer = 50 kr per aksje. Salgsplan: 1) Selg aksjer til familiemedlemmer (f.eks. 3-5 aksjer per elev til foreldre og soesken). 2) Selg til medelever og laerere pa skolen. 3) Lag aksjebevis med bedriftens logo og informasjon. 4) Ha en kort presentasjon av forretningsideen klar nar dere selger. 5) Sett en frist for aksjesalget slik at dere kan komme i gang med driften.',
      },
    },
    {
      id: 'eb-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Samleoppgave: Du skal planlegge etableringsmotet for en ny ungdomsbedrift. Skriv en komplett agenda for motet og forklar hva som skal bestemmes under hvert punkt.',
        hints: ['Tenk pa alle elementene som ma vaere pa plass for at bedriften kan starte driften'],
        solution: 'Agenda for etableringsmotet: 1) Apning og presentasjon av forretningsideen - beskriv hva bedriften skal gjore. 2) Vedta vedtekter - formal, aksjekapital, beslutningsmyndighet og avviklingsregler. 3) Fastsette aksjekapital - bestemme antall aksjer, pris og total kapital (maks 3000 kr). 4) Valg av styre - velge styreleder, nestleder og okonomiansvarlig. 5) Fordele roller - daglig leder, markedsforing, produksjon, salg, HR. 6) Lage handlingsplan - sette milepaler, motetider og kommunikasjonskanaler. 7) Planlegge aksjesalg - hvem selger til hvem, frist. 8) Eventuelt - andre saker som bor avklares.',
      },
    },
    {
      id: 'eb-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-8-1-ex-7',
        number: '8.1.7',
        type: 'classic',
        task: 'Samleoppgave: Lag et utkast til vedtekter for en ungdomsbedrift som skal selge hjemmelagde hundegodbiter. Inkluder alle nokkelbestemmelser.',
        solution: 'Vedtekter for "PawTreats UB": Paragraf 1 - Navn: Bedriftens navn er PawTreats UB. Paragraf 2 - Formal: Bedriftens formal er a produsere og selge hjemmelagde, sunne hundegodbiter. Paragraf 3 - Aksjekapital: Aksjekapitalen er 2000 kr fordelt pa 40 aksjer a 50 kr. Paragraf 4 - Styre: Styret bestar av leder, nestleder og okonomiansvarlig, valgt pa etableringsmotet. Paragraf 5 - Beslutninger: Beslutninger fattes med alminnelig flertall. Vedtektsendringer krever 2/3 flertall. Paragraf 6 - Generalforsamling: Ordinaer generalforsamling holdes i mai. Paragraf 7 - Overskudd: Eventuelt overskudd fordeles med 50 % til aksjonaerene og 50 % til et veldedig formal. Paragraf 8 - Avvikling: Bedriften avvikles innen juni. Gjenvaerende midler fordeles til aksjonaerene etter innbetalt kapital.',
      },
    },
    {
      id: 'eb-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Ungdomsbedrift** er et opplaeringsprogram der elever driver en reell bedrift i ett skolear
- **Registrering** gjores hos Ungt Entreprenorskap og gir organisasjonsnummer og forsikring
- **Aksjesalg** gir startkapital (300-3000 kr) og aksjonaerene eier en andel av bedriften
- **Etableringsmotet** er der styre velges, vedtekter vedtas og roller fordeles
- **Vedtekter** er bedriftens grunnregler som regulerer drift og beslutninger

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ungdomsbedrift | Reell bedrift drevet av elever i ett skolear |
| Aksjesalg | Salg av eierandeler for a skaffe startkapital |
| Etableringsmotet | Forste formelle mote der bedriften grunnlegges |
| Vedtekter | Bedriftens grunnregler |
| Mentor | Radgiver fra naeringslivet |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.2: Drift av ungdomsbedrift
// ============================================================================

export const CHAPTER_ENTREBED_1_8_2: TextbookChapter = {
  id: 'entrebed-1-8-2',
  courseId: 'entrebed-1',
  chapterNumber: '8.2',
  title: 'Drift av ungdomsbedrift',
  description: 'Laer om produksjon, salg, markedsforing og okonomi i den daglige driften av en ungdomsbedrift.',
  estimatedMinutes: 25,
  competenceGoals: [
    'planlegge og gjennomfore produksjon, salg og markedsforing i en ungdomsbedrift',
    'handtere okonomistyring i praksis',
  ],
  content: [
    {
      id: 'eb-8-2-intro',
      type: 'text',
      content: `## Drift av ungdomsbedrift

Nar bedriften er etablert, begynner den viktigste fasen: selve driften. Her skal dere produsere og selge produktet eller tjenesten, markedsfore bedriften, og holde styr pa okonomien.

**Hva du laerer i dette kapittelet:**
- Hvordan organisere produksjon effektivt
- Salgsstrategier og kundehandtering
- Markedsforing pa et begrenset budsjett
- Grunnleggende okonomistyring i praksis

**Den daglige driften handler om a:**
- Gjore det dere lovte i forretningsideen
- Levere kvalitet til kundene
- Holde kostnadene nede
- Tjene penger og holde oversikt over okonomien`,
    },
    {
      id: 'eb-8-2-text-1',
      type: 'text',
      content: `### Produksjon

Produksjon handler om a lage produktet eller levere tjenesten dere tilbyr.

**Planlegging av produksjon:**
- Hva trenger dere av materialer og utstyr?
- Hvem gjor hva i produksjonen?
- Hvor lang tid tar det a lage ett produkt?
- Hvor mange kan dere produsere per uke?

**Kvalitetssikring:**
- Sett en standard for produktet
- Kontroller kvaliteten for levering
- Ta imot tilbakemeldinger fra kunder og forbedre
- Varer konsekvent i kvaliteten

**Innkjop:**
- Finn gode leverandorer med rimelige priser
- Kjop inn i riktige mengder - ikke for mye, ikke for lite
- Hold oversikt over lager og beholdning
- Sammenlign priser fra flere leverandorer

**Tidsplanlegging:**
- Lag en produksjonsplan med tidsfrister
- Fordel oppgaver jevnt i gruppen
- Ha en buffer for uforutsette problemer
- Koordiner produksjon med salgstidspunkter`,
    },
    {
      id: 'eb-8-2-def-1',
      type: 'definition',
      title: 'Produksjonskalkyle',
      content: `En **produksjonskalkyle** viser hva det koster a produsere ett produkt eller levere en tjeneste.

**Elementer i en produksjonskalkyle:**
- **Direkte materialkostnader:** Ravaarer og materialer som gar direkte inn i produktet
- **Direkte arbeidskostnader:** Tid brukt pa produksjon (i UB ofte beregnet til 0 kr)
- **Indirekte kostnader:** Emballasje, transport, markedsforing, utstyr
- **Paslag:** Fortjeneste som legges pa for a sette salgspris

**Formel:**
Salgspris = Materialkostnad + Indirekte kostnader + Fortjeneste

**Eksempel:**
Materialkostnad per produkt: 30 kr
Emballasje: 5 kr
Fortjeneste (100 % paslag): 35 kr
Salgspris: 70 kr`,
    },
    {
      id: 'eb-8-2-text-2',
      type: 'text',
      content: `### Salg i praksis

**Salgskanaler for ungdomsbedrifter:**
- **Direkte salg:** Pa skolen, pa messer, dor-til-dor
- **Nettbutikk:** Enkel nettside eller salg via sosiale medier
- **Bestillinger:** Ta imot bestillinger og levere til avtalt tid
- **Pop-up:** Midlertidige salg pa markeder, julemarked osv.
- **Samarbeid:** Selge via butikker eller andre bedrifter

**Salgsteknikk:**
- Vit alt om produktet ditt - varer forberedt pa sporsmal
- Lytt til kunden - hva trenger de?
- Vaer entusiastisk men ikke paatrengene
- Fortell historien bak produktet
- Gjor det enkelt a kjope (Vipps, kontant)

**Kundehandtering:**
- Vaer hoeflig og profesjonell
- Svar raskt pa henvendelser
- Handter klager pa en god maate
- Folg opp fornoeyde kunder - de kan bli faste kunder
- Be om tilbakemeldinger for a forbedre produktet`,
    },
    {
      id: 'eb-8-2-text-3',
      type: 'text',
      content: `### Markedsforing pa budsjett

Ungdomsbedrifter har ofte et lite markedsforingsbudsjett, men det finnes mange gratis og rimelige mater a na ut til kundene pa.

**Sosiale medier (gratis):**
- Instagram: Bilder og stories av produktet og prosessen
- TikTok: Korte videoer om produksjon og bedriften
- Facebook: Spesielt for a na foreldre og voksne
- Tips: Vaer konsekvent, legg ut regelmessig, bruk hashtags

**Jungeltelegrafen (gratis):**
- Fornoyde kunder forteller videre
- Be kunder dele pa sosiale medier
- Gi god service som folk snakker om

**Fysisk markedsforing (billig):**
- Plakater pa skolen
- Flyers i naermiljoet
- Produktprover
- Visittkort

**Markedsforingsplan:**
1. Definer maalgruppen - hvem er kundene?
2. Velg kanaler - hvor er kundene?
3. Lag innhold - hva skal dere kommunisere?
4. Sett tidsplan - nar og hvor ofte?
5. Evaluer - hva fungerer og hva fungerer ikke?`,
    },
    {
      id: 'eb-8-2-def-2',
      type: 'definition',
      title: 'Okonomistyring i ungdomsbedrift',
      content: `**Okonomistyring** handler om a holde kontroll pa bedriftens pengestrommer - hva som kommer inn og hva som gar ut.

**Viktige elementer:**
- **Inntekter:** Penger fra salg av produkter/tjenester
- **Utgifter:** Kostnader til materialer, markedsforing, utstyr osv.
- **Resultat:** Inntekter minus utgifter (overskudd eller underskudd)
- **Likviditet:** Har bedriften nok penger til a betale regningene sine?

**Praktiske tips:**
- Fore regnskap fortlopende - ikke vent til slutten
- Ta vare pa alle kvitteringer
- Bruk et enkelt regneark eller UB-regnskapsprogram
- Ha faste rutiner for nar regnskapet oppdateres
- La okonomiansvarlig rapportere pa hvert mote`,
    },
    {
      id: 'eb-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Budsjett for en ungdomsbedrift',
      problem: 'En ungdomsbedrift som selger hjemmelagde soyalys skal lage et enkelt budsjett for forste semester. De planlegger a selge 100 lys til 89 kr per stykk.',
      solution: `**Inntektsbudsjett:**
Salg: 100 lys x 89 kr = 8900 kr

**Utgiftsbudsjett:**
- Soyavoks: 100 x 15 kr = 1500 kr
- Veker: 100 x 3 kr = 300 kr
- Glass/beholdere: 100 x 12 kr = 1200 kr
- Duft/essensiell olje: 500 kr
- Etiketter og emballasje: 400 kr
- Markedsforing (plakater, flyers): 200 kr
- Diverse/uforutsett: 300 kr
**Sum utgifter:** 4400 kr

**Budsjettert resultat:**
8900 kr - 4400 kr = **4500 kr i overskudd**

**Dekningsbidrag per lys:**
89 kr - 44 kr = 45 kr (ca. 51 % margin)

**Viktig:** Budsjettet er en plan, ikke en fasit. Folg opp og juster underveis.`,
    },
    {
      id: 'eb-8-2-note-1',
      type: 'note',
      title: 'Vanlige feil i UB-drift',
      content: `**Unnga disse vanlige feilene:**
- **For hoy pris:** Kunder koper ikke. Undersok hva maalgruppen er villig til a betale.
- **For lav pris:** Dere tjener ikke penger. Husk a dekke alle kostnader pluss fortjeneste.
- **Daalig planlegging:** Produserer for mye eller for lite. Bruk salgsdata til a forutsi behov.
- **Manglende regnskapsforing:** Mister oversikten over okonomien. For regnskap ukentlig.
- **Ujevn arbeidsfordeling:** Noen gjor alt, andre ingenting. Ha tydelige roller og oppfolging.`,
    },
    {
      id: 'eb-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva er formelen for salgspris i en produksjonskalkyle?',
        options: [
          { id: 'a', text: 'Salgspris = Materialkostnad - Fortjeneste', isCorrect: false },
          { id: 'b', text: 'Salgspris = Materialkostnad + Indirekte kostnader + Fortjeneste', isCorrect: true },
          { id: 'c', text: 'Salgspris = Inntekter - Utgifter', isCorrect: false },
          { id: 'd', text: 'Salgspris = Aksjekapital / Antall produkter', isCorrect: false },
        ],
        solution: 'Salgsprisen beregnes ved a legge sammen alle kostnader (direkte materialkostnader og indirekte kostnader) og legge til en fortjenestemargin. Salgspris = Materialkostnad + Indirekte kostnader + Fortjeneste.',
      },
    },
    {
      id: 'eb-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Hvilken markedsforingskanal er vanligvis gratis og mest effektiv for ungdomsbedrifter?',
        options: [
          { id: 'a', text: 'TV-reklame', isCorrect: false },
          { id: 'b', text: 'Avisannonser', isCorrect: false },
          { id: 'c', text: 'Sosiale medier (Instagram, TikTok)', isCorrect: true },
          { id: 'd', text: 'Reklameplakater i byer', isCorrect: false },
        ],
        solution: 'Sosiale medier som Instagram og TikTok er gratis a bruke og lar ungdomsbedrifter na ut til mange i maalgruppen. De kan vise produktet visuelt, fortelle bedriftens historie, og bygge en folgerbase uten a bruke penger pa reklame.',
      },
    },
    {
      id: 'eb-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Lag en produksjonskalkyle for et produkt din ungdomsbedrift kunne solgt. Vis materialkostnad, indirekte kostnader og salgspris.',
        hints: ['Velg et enkelt produkt som haandlagde armbaaand, hjemmebakt kake eller et digitalt produkt'],
        solution: 'Eksempel - Haandlaget armbaaand: Materialkostnad: Perler 8 kr + Snor 2 kr = 10 kr per armbaaand. Indirekte kostnader: Emballasje 3 kr + andel markedsforing (200 kr / 50 stk) 4 kr = 7 kr. Totale kostnader: 17 kr. Fortjeneste (100 % paslag): 17 kr. Salgspris: 17 kr + 17 kr = 34 kr. Rundet opp til 35 kr for enkel prissetting. Dekningsbidrag: 35 kr - 10 kr = 25 kr per armbaaand.',
      },
    },
    {
      id: 'eb-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Beskriv tre ulike salgskanaler en ungdomsbedrift kan bruke og vurder fordeler og ulemper med hver.',
        solution: '1) Direktesalg pa skolen: Fordeler - lave kostnader, enkel logistikk, maalgruppen er der. Ulemper - begrenset marked, bare i friminutt. 2) Sosiale medier/nettbutikk: Fordeler - nar mange, apent 24/7, kan vise produktet visuelt. Ulemper - krever innholdsproduksjon, leveringskostnader. 3) Markeder og messer: Fordeler - treffer nye kunder, kan demonstrere produktet, inspirerende miljo. Ulemper - standbetaling, krever tid og transport, begrenset til bestemte dager.',
      },
    },
    {
      id: 'eb-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Samleoppgave: Lag en enkel markedsforingsplan for en ungdomsbedrift som selger skolerelaterte produkter. Inkluder maalgruppe, kanaler, budskap, tidsplan og budsjett.',
        hints: ['Tenk pa hvem som er kunder, hvor de er, og hva som appellerer til dem'],
        solution: 'Markedsforingsplan for "StudyKit UB" (selger studietips-plakater): Maalgruppe: Elever 16-19 aar pa videregaende skole. Kanaler: Instagram (hovedkanal), TikTok (studietips-videoer), plakater pa skolen, jungeltelegraf. Budskap: "Gjor studietiden enklere - fine plakater med smarte studieteknikker." Tidsplan: Uke 1-2: Lag profiler og innhold. Uke 3: Lanser med "teaser" pa sosiale medier. Uke 4+: 3 innlegg per uke pa Instagram, 1 TikTok per uke. Budsjett: 0 kr (kun gratis kanaler). Evaluering: Tell folgere, likes, og salg ukentlig. Juster innhold basert pa hva som fungerer.',
      },
    },
    {
      id: 'eb-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Samleoppgave: Din ungdomsbedrift har solgt 80 enheter til 65 kr per stykk. Materialkostnaden per enhet er 20 kr. Dere har brukt 500 kr pa markedsforing og 300 kr pa emballasje. Regn ut totalinntekt, totale kostnader og resultat. Er bedriften lonsom?',
        solution: 'Totalinntekt: 80 enheter x 65 kr = 5200 kr. Totale kostnader: Materialkostnad: 80 x 20 kr = 1600 kr. Markedsforing: 500 kr. Emballasje: 300 kr. Sum kostnader: 1600 + 500 + 300 = 2400 kr. Resultat: 5200 kr - 2400 kr = 2800 kr i overskudd. Ja, bedriften er lonsom. Fortjenestemarginen er 2800/5200 = 53,8 %. Dekningsbidrag per enhet: 65 kr - 20 kr = 45 kr. Dekningsgrad: 45/65 = 69,2 %.',
      },
    },
    {
      id: 'eb-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Produksjon** krever planlegging av materialer, tid, kvalitet og innkjop
- **Produksjonskalkyle** viser kostnaden per produkt og brukes til a sette salgspris
- **Salg** kan skje gjennom flere kanaler: direkte, nett, messer og samarbeid
- **Markedsforing** pa budsjett handler om a utnytte gratis kanaler som sosiale medier
- **Okonomistyring** innebarer a holde oversikt over inntekter, utgifter og resultat

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Produksjonskalkyle | Beregning av kostnader per produkt |
| Dekningsbidrag | Salgspris minus variable kostnader |
| Likviditet | Evne til a betale regninger nar de forfaller |
| Salgskanal | Sted eller metode for a selge produkter |
| Markedsforingsplan | Plan for hvordan na ut til kunder |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.3: Arsregnskap og arsmelding
// ============================================================================

export const CHAPTER_ENTREBED_1_8_3: TextbookChapter = {
  id: 'entrebed-1-8-3',
  courseId: 'entrebed-1',
  chapterNumber: '8.3',
  title: 'Arsregnskap og arsmelding',
  description: 'Laer a utarbeide regnskap for ungdomsbedriften, forstaa resultatregnskap og balanse, og skrive arsmelding.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utarbeide arsregnskap og arsmelding for en ungdomsbedrift',
    'forstaa resultatregnskap, balanse og arsmelding',
  ],
  content: [
    {
      id: 'eb-8-3-intro',
      type: 'text',
      content: `## Arsregnskap og arsmelding

Mot slutten av skoleaaret skal ungdomsbedriften utarbeide et arsregnskap og en arsmelding. Disse dokumentene oppsummerer bedriftens okonomiske situasjon og aktiviteter gjennom aret.

**Hva du laerer i dette kapittelet:**
- Hva et arsregnskap bestar av
- Hvordan sette opp resultatregnskap og balanse
- Hva en arsmelding inneholder
- Hvordan presentere regnskapet for aksjonaerene

**Hvorfor er dette viktig?**
- Gir oversikt over bedriftens okonomiske prestasjon
- Viser aksjonaerene hva pengene har gatt til
- Danner grunnlag for avvikling og utbetaling
- Gir verdifull laering i praktisk okonomi`,
    },
    {
      id: 'eb-8-3-def-1',
      type: 'definition',
      title: 'Resultatregnskap',
      content: `**Resultatregnskapet** viser bedriftens inntekter og kostnader i en bestemt periode, og om bedriften har gatt med overskudd eller underskudd.

**Oppbygning:**
| Post | Belop |
|------|-------|
| **Salgsinntekter** | + |
| - Varekostnad (materialer) | - |
| = **Bruttofortjeneste** | = |
| - Driftskostnader | - |
| = **Driftsresultat** | = |
| + Renteinntekter | + |
| = **Arsresultat** | = |

**Driftskostnader kan vaere:**
- Markedsforing og reklame
- Emballasje og frakt
- Kontorutstyr
- Messedeltakelse
- Andre driftsrelaterte kostnader`,
    },
    {
      id: 'eb-8-3-def-2',
      type: 'definition',
      title: 'Balanse',
      content: `**Balansen** viser bedriftens eiendeler og hvordan de er finansiert pa et bestemt tidspunkt. Balansen ma alltid ga i balanse: eiendeler = egenkapital + gjeld.

**Eiendeler (hva bedriften eier):**
- Bankinnskudd
- Varelager (usolgte produkter)
- Utstyr
- Utestaaende fordringer (penger andre skylder bedriften)

**Egenkapital og gjeld (hvordan det er finansiert):**
- Aksjekapital (innskutt fra aksjonaerer)
- Opptjent egenkapital (overskudd fra driften)
- Eventuell gjeld (lan eller leverandorgjeld)

**Balanselikningen:**
Eiendeler = Egenkapital + Gjeld`,
    },
    {
      id: 'eb-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Resultatregnskap for en UB',
      problem: 'Ungdomsbedriften "EcoSoap UB" har hatt folgende inntekter og kostnader gjennom skolearet. Sett opp et resultatregnskap.',
      solution: `**Resultatregnskap for EcoSoap UB**
**Driftsinntekter:**
Salgsinntekter: 12 500 kr

**Driftskostnader:**
Varekostnad (ravaarer): 3 200 kr
Emballasje: 800 kr
Markedsforing: 600 kr
Messedeltakelse: 400 kr
Diverse kostnader: 300 kr
**Sum driftskostnader:** 5 300 kr

**Driftsresultat:** 12 500 - 5 300 = **7 200 kr**

Renteinntekter: 45 kr

**Arsresultat: 7 245 kr**

**Tolkning:**
Bedriften har gatt med et overskudd pa 7 245 kr. Dette betyr at for hver krone investert i aksjekapital (anta 2 000 kr), har aksjonaerene fatt en avkastning pa over 360 %.`,
    },
    {
      id: 'eb-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Balanse for en UB',
      problem: 'Sett opp balansen for EcoSoap UB ved arsslutt.',
      solution: `**Balanse for EcoSoap UB per 31. mai**

**EIENDELER:**
Bankinnskudd: 8 845 kr
Varelager (usolgt sape): 400 kr
**Sum eiendeler: 9 245 kr**

**EGENKAPITAL OG GJELD:**
Aksjekapital: 2 000 kr
Arsresultat (opptjent egenkapital): 7 245 kr
Gjeld: 0 kr
**Sum egenkapital og gjeld: 9 245 kr**

**Kontroll:** Eiendeler (9 245) = Egenkapital + Gjeld (9 245). Balansen stemmer!

**Forklaring:**
- Aksjekapitalen pa 2 000 kr er det aksjonaerene skjot inn ved oppstart
- Arsresultatet pa 7 245 kr er overskuddet fra driften
- Alt star pa bankkonto bortsett fra 400 kr i usolgte varer`,
    },
    {
      id: 'eb-8-3-text-1',
      type: 'text',
      content: `### Arsmelding

Arsmeldingen er en skriftlig rapport som beskriver bedriftens virksomhet gjennom aret. Den gir aksjonaerer og andre interessenter et helhetlig bilde av hva bedriften har gjort.

**Innhold i arsmeldingen:**

1. **Innledning**
   - Bedriftens navn, formal og forretningside
   - Kort beskrivelse av produktet/tjenesten

2. **Organisering**
   - Roller og ansvarfordeling
   - Samarbeid i gruppen
   - Mentorens rolle

3. **Drift og aktiviteter**
   - Hva har bedriften gjort gjennom aret?
   - Viktige milepaler og hendelser
   - Produksjon og salg

4. **Markedsforing**
   - Hvilke kanaler har vaert brukt?
   - Hva har fungert godt?

5. **Okonomi**
   - Sammendrag av resultatregnskap og balanse
   - Vurdering av okonomisk resultat
   - Forslag til disponering av overskudd

6. **Evaluering**
   - Hva har dere laert?
   - Hva ville dere gjort annerledes?
   - Kompetanser utviklet gjennom aret

7. **Takk**
   - Takk til mentor, laerer, kunder og stottespillere`,
    },
    {
      id: 'eb-8-3-text-2',
      type: 'text',
      content: `### Disponering av overskudd

Nar arsregnskapet er klart, skal det bestemmes hva som skjer med et eventuelt overskudd.

**Mulige disponeringer:**
- **Utbytte til aksjonaerer:** Fordeles etter antall aksjer
- **Veldedig formal:** Donere hele eller deler til en organisasjon
- **Deling:** Kombinasjon av utbytte og veldedighet

**Eksempel pa disponering:**
Arsresultat: 7 245 kr
- 50 % til aksjonaerer: 3 622,50 kr
- 50 % til veldedig formal: 3 622,50 kr

**Utbytte per aksje:**
Hvis bedriften har 40 aksjer:
3 622,50 kr / 40 aksjer = 90,56 kr per aksje

En aksjonaer som kjopte 2 aksjer a 50 kr (investerte 100 kr) far:
2 x 90,56 kr = 181,12 kr tilbake (81 % avkastning pa investeringen)

**Viktig:** Disponeringen vedtas pa generalforsamlingen.`,
    },
    {
      id: 'eb-8-3-warning-1',
      type: 'warning',
      title: 'Vanlige feil i UB-regnskap',
      content: `**Pass pa disse vanlige feilene:**
- **Manglende kvitteringer:** Ta vare pa ALLE kvitteringer gjennom hele aret
- **Blanding av privat og bedrift:** Hold bedriftens penger adskilt fra private midler
- **Glemmer a bokfore:** For regnskap fortlopende, ikke alt pa slutten
- **Feil i balansen:** Sjekk alltid at eiendeler = egenkapital + gjeld
- **Glemmer varelager:** Usolgte produkter har en verdi og skal med i balansen`,
    },
    {
      id: 'eb-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva viser resultatregnskapet?',
        options: [
          { id: 'a', text: 'Bedriftens eiendeler og gjeld pa et bestemt tidspunkt', isCorrect: false },
          { id: 'b', text: 'Bedriftens inntekter og kostnader i en periode', isCorrect: true },
          { id: 'c', text: 'Hvor mange aksjer bedriften har solgt', isCorrect: false },
          { id: 'd', text: 'Bedriftens markedsforingsplan', isCorrect: false },
        ],
        solution: 'Resultatregnskapet viser bedriftens inntekter og kostnader i en bestemt periode (f.eks. et ar) og gir et bilde av om bedriften har gatt med overskudd eller underskudd. Balansen, derimot, viser eiendeler og gjeld pa et bestemt tidspunkt.',
      },
    },
    {
      id: 'eb-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'Hva ma alltid stemme i en balanse?',
        options: [
          { id: 'a', text: 'Inntekter = Utgifter', isCorrect: false },
          { id: 'b', text: 'Overskudd = Aksjekapital', isCorrect: false },
          { id: 'c', text: 'Eiendeler = Egenkapital + Gjeld', isCorrect: true },
          { id: 'd', text: 'Salg = Produksjon', isCorrect: false },
        ],
        solution: 'Balanselikningen sier at eiendeler alltid ma vaere lik summen av egenkapital og gjeld. Dette er fordi alle eiendeler enten er finansiert med egenkapital (egne penger) eller gjeld (laante penger).',
      },
    },
    {
      id: 'eb-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'En ungdomsbedrift har hatt 15 000 kr i salgsinntekter. Varekostnaden var 4 500 kr. Andre driftskostnader var: markedsforing 800 kr, emballasje 600 kr og messedeltakelse 500 kr. Sett opp et resultatregnskap og finn arsresultatet.',
        solution: 'Resultatregnskap: Salgsinntekter: 15 000 kr. Varekostnad: -4 500 kr. Bruttofortjeneste: 10 500 kr. Markedsforing: -800 kr. Emballasje: -600 kr. Messedeltakelse: -500 kr. Sum driftskostnader: -1 900 kr. Driftsresultat/Arsresultat: 10 500 kr - 1 900 kr = 8 600 kr. Bedriften har gatt med et overskudd pa 8 600 kr.',
      },
    },
    {
      id: 'eb-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom resultatregnskap og balanse. Hvorfor trenger man begge deler?',
        solution: 'Resultatregnskapet viser inntekter og kostnader over en periode og forteller om bedriften har gatt med overskudd eller underskudd. Balansen viser hva bedriften eier (eiendeler) og hvordan det er finansiert (egenkapital og gjeld) pa et bestemt tidspunkt. Man trenger begge fordi resultatregnskapet viser lonnsamhet (tjener bedriften penger?), mens balansen viser formuesstilling (hva eier bedriften og hvor mye skylder den?). Sammen gir de et komplett bilde av bedriftens okonomiske helse.',
      },
    },
    {
      id: 'eb-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Samleoppgave: En ungdomsbedrift har aksjekapital pa 2 500 kr. Ved arsslutt har de 10 200 kr pa bankkonto og 800 kr i varelager. De har ingen gjeld. Sett opp balansen og beregn arsresultatet. Forklar hvordan overskuddet bor disponeres.',
        hints: ['Husk at egenkapital = aksjekapital + opptjent egenkapital (arsresultat)'],
        solution: 'Balanse: EIENDELER: Bankinnskudd 10 200 kr + Varelager 800 kr = Sum eiendeler 11 000 kr. EGENKAPITAL OG GJELD: Aksjekapital 2 500 kr + Opptjent egenkapital (arsresultat) 8 500 kr + Gjeld 0 kr = Sum 11 000 kr. Arsresultat: 11 000 kr - 2 500 kr = 8 500 kr. Disponering: Forslag: 50 % til aksjonaerer (4 250 kr) og 50 % til veldedighet (4 250 kr). Med 50 aksjer a 50 kr far hver aksjonaer 85 kr per aksje tilbake, pluss de opprinnelige 50 kr - totalt 135 kr per aksje, en avkastning pa 70 %.',
      },
    },
    {
      id: 'eb-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Samleoppgave: Skriv et utkast til de viktigste punktene i en arsmelding for en ungdomsbedrift som har solgt hjemmelagde energibarer. Inkluder alle seks hoveddeler.',
        solution: 'Arsmelding for "EnergiBar UB": 1) Innledning: EnergiBar UB produserer og selger hjemmelagde, sunne energibarer til elever og ansatte. Var forretningside var a tilby et sunt alternativ til godteri og brus pa skolen. 2) Organisering: Gruppen bestar av 5 elever med rollene daglig leder, okonomi, markedsforing, produksjon og salg. Var mentor er en lokal baker. 3) Drift: Vi har produsert 300 energibarer i 4 varianter. Salg har foregatt pa skolen og pa to markeder. 4) Markedsforing: Vi brukte Instagram og plakater pa skolen. Smaksprover var var mest effektive markedsforing. 5) Okonomi: Salgsinntekter 9 000 kr, kostnader 3 500 kr, arsresultat 5 500 kr. Vi foreslar 50/50 fordeling mellom aksjonaerer og Rodde Kors. 6) Evaluering: Vi har laert om produksjon, okonomi og samarbeid. Vi ville startet markedsforingen tidligere og tilbudt flere smaker fra starten.',
      },
    },
    {
      id: 'eb-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Resultatregnskapet** viser inntekter minus kostnader og gir arsresultatet
- **Balansen** viser eiendeler = egenkapital + gjeld pa et bestemt tidspunkt
- **Arsmeldingen** er en helhetlig rapport om bedriftens virksomhet
- **Disponering** av overskudd vedtas pa generalforsamlingen

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Resultatregnskap | Viser inntekter og kostnader over en periode |
| Balanse | Viser eiendeler og finansiering pa et tidspunkt |
| Bruttofortjeneste | Salgsinntekter minus varekostnad |
| Arsmelding | Skriftlig rapport om bedriftens virksomhet |
| Disponering | Fordeling av overskudd |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.4: Messer og konkurranser
// ============================================================================

export const CHAPTER_ENTREBED_1_8_4: TextbookChapter = {
  id: 'entrebed-1-8-4',
  courseId: 'entrebed-1',
  chapterNumber: '8.4',
  title: 'Messer og konkurranser',
  description: 'Laer om fylkesmesse, NM for ungdomsbedrifter, presentasjonsteknikk og hvordan du bygger en profesjonell stand.',
  estimatedMinutes: 20,
  competenceGoals: [
    'presentere og markedsfore en ungdomsbedrift pa messer',
    'bruke presentasjonsteknikk for a formidle en forretningside',
  ],
  content: [
    {
      id: 'eb-8-4-intro',
      type: 'text',
      content: `## Messer og konkurranser

En av de mest spennende delene av a drive ungdomsbedrift er a delta pa messer og konkurranser. Her far dere muligheten til a vise frem bedriften, selge produkter, og mote andre ungdomsbedrifter.

**Hva du laerer i dette kapittelet:**
- Hvordan messer og konkurranser for ungdomsbedrifter er organisert
- Hvordan bygge en profesjonell stand
- Presentasjonsteknikk for pitching og jury
- Tips for a lykkes pa fylkesmesse og NM

**Messekalenderen:**
- **Hosten:** Lokale messer pa skolen og i naermiljoet
- **Januar-mars:** Fylkesmesser i regi av Ungt Entreprenorskap
- **April-mai:** NM for ungdomsbedrifter (for fylkesvinnerne)`,
    },
    {
      id: 'eb-8-4-def-1',
      type: 'definition',
      title: 'Fylkesmesse',
      content: `**Fylkesmessen** er den viktigste konkurransen for ungdomsbedrifter pa fylkesniva. Den arrangeres av Ungt Entreprenorskap i hvert fylke.

**Hva skjer pa fylkesmessen:**
- Alle ungdomsbedrifter i fylket kan delta
- Bedriftene har egne stander der de viser frem produkter
- Jurybedomming i flere kategorier
- Salg til publikum
- Nettverksbygging med andre UB-er og naeringslivet

**Kategorier for premiering:**
- Beste ungdomsbedrift (hovedpris)
- Beste stand/utstilling
- Beste forretningsplan
- Mest barekraftige bedrift
- Beste markedsforing
- Mest innovative produkt
- Beste elevbedrift (for ungdomsskoleelever)

**Fylkesvinneren** gar videre til NM for ungdomsbedrifter.`,
    },
    {
      id: 'eb-8-4-def-2',
      type: 'definition',
      title: 'NM for ungdomsbedrifter',
      content: `**NM for ungdomsbedrifter** er den nasjonale finalen der fylkesvinnerne konkurrerer mot hverandre. Arrangementet holdes vanligvis i Oslo i april eller mai.

**Programmet:**
- To dager med konkurranse og aktiviteter
- Jurybedomming med naeringslivsledere og grundere
- Pitch-presentasjoner for dommerpanel
- Utstilling og salg
- Nettverksaktiviteter og foredrag
- Prisutdeling og fest

**Vinneren av NM** kan representere Norge i europeisk finale (JA Europe Company of the Year Competition).

**Hva juryen vurderer:**
- Forretningside og gjennomforing
- Okonomisk resultat
- Teamarbeid og organisering
- Innovasjon og kreativitet
- Presentasjon og kommunikasjon
- Barekraft og samfunnsansvar`,
    },
    {
      id: 'eb-8-4-text-1',
      type: 'text',
      content: `### Bygge en profesjonell stand

Standen er bedriftens ansikt utad pa messen. En god stand tiltrekker kunder, imponerer juryen, og formidler bedriftens identitet.

**Elementer i en god stand:**

**Visuelt:**
- Tydelig bedriftsnavn og logo
- Profesjonelle plakater og roll-ups
- Ryddig og innbydende oppsett
- Farger og design som matcher merkevaren
- God belysning av produktene

**Produktvisning:**
- Produkter tydelig utstilt og tilgjengelig
- Prislapper og produktinformasjon
- Mulighet for a prove eller ta pa produkter
- Emballasje og poser klare for salg

**Informasjon:**
- Visittkort eller flyers
- QR-kode til nettside eller sosiale medier
- Kort bedriftspresentasjon synlig pa standen
- Kontaktinformasjon

**Praktisk:**
- Vekslepenger og betalingslosning (Vipps!)
- Nok produkter pa lager
- Kvitteringsblokk eller salgslogg
- Ren og ryddig stand gjennom hele dagen`,
    },
    {
      id: 'eb-8-4-text-2',
      type: 'text',
      content: `### Presentasjonsteknikk

Pa messer og konkurranser ma dere presentere bedriften bade for kunder og jury. God presentasjonsteknikk er avgjorende.

**Pitch-presentasjon (3-5 minutter):**
1. **Hook** - Fang oppmerksomheten (sporsmal, statistikk, historie)
2. **Problem** - Beskriv problemet dere loser
3. **Losning** - Presenter produktet/tjenesten
4. **Marked** - Hvem er kundene og hvor stort er markedet?
5. **Resultater** - Vis hva dere har oppnadd (salg, kunder, tilbakemeldinger)
6. **Team** - Presenter teamet kort
7. **Avslutning** - Oppsummer og inviter til sporsmal

**Tips for god presentasjon:**
- **Oye kontakt** med publikum, ikke les fra manus
- **Engasjement** - vis at dere er stolte av bedriften
- **Konkret** - bruk tall og eksempler
- **Visuelt** - bruk bilder og demonstrasjoner
- **Oving** - ov presentasjonen mange ganger pa forhand
- **Tidsstyring** - hold deg innenfor tidsrammen

**Handtere sporsmal fra juryen:**
- Lytt ferdig for du svarer
- Svar konkret og aerlig
- Si "det vet jeg ikke" heller enn a gjette
- Ha okonomi- og salgstall klare`,
    },
    {
      id: 'eb-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Pitch-struktur for en UB',
      problem: 'Lag en pitch-struktur for en ungdomsbedrift som selger gjenbruksmobiler.',
      solution: `**Hook (15 sek):**
"Visste dere at nordmenn kaster 5 millioner mobiltelefoner hvert aar? De fleste av dem fungerer fortsatt."

**Problem (30 sek):**
"Mange har gamle mobiler liggende i skuffen. Samtidig er nye mobiler dyre, og produksjonen belaster miljoet."

**Losning (45 sek):**
"Vi i RePhone UB kjoper brukte mobiler, renser dem, sjekker at alt fungerer, og selger dem videre med 3 maaneders garanti. Kundene far en rimelig mobil, og miljoet spares."

**Marked (30 sek):**
"Var maalgruppe er ungdom 13-18 aar som onsker en smarttelefon uten a betale fullpris. Det er 300 000 ungdommer i Norge i denne aldersgruppen."

**Resultater (30 sek):**
"Vi har solgt 45 mobiler, omsatt for 27 000 kr, og har 92 % fornoeyde kunder. Vi har spart miljoet for 45 mobiler som ellers ville blitt e-avfall."

**Team (15 sek):**
"Vi er fem elever med ulik kompetanse innen teknikk, markedsforing og okonomi."

**Avslutning (15 sek):**
"RePhone - gi mobilen et nytt liv. Har dere sporsmal?"`,
    },
    {
      id: 'eb-8-4-tip-1',
      type: 'tip',
      title: 'Slik imponerer du juryen',
      content: `**For presentasjonen:**
- Kle dere profesjonelt og likt (f.eks. med bedriftens t-skjorte)
- Ov presentasjonen minst 10 ganger
- Forbered svar pa sannsynlige sporsmal
- Ha backup hvis teknikk svikter

**Under presentasjonen:**
- Start med energi og engasjement
- Fordel taletid - la alle si noe
- Vis produktet fysisk hvis mulig
- Bruk konkrete tall (ikke "mange kunder" men "47 kunder")

**Pa standen:**
- Vaer aktiv - sta opp, smil, ta kontakt
- Ha en "elevator pitch" pa 30 sekunder klar
- La juryen prove produktet
- Ha regnskap og forretningsplan tilgjengelig`,
    },
    {
      id: 'eb-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er fylkesmessen for ungdomsbedrifter?',
        options: [
          { id: 'a', text: 'En nettbasert konkurranse', isCorrect: false },
          { id: 'b', text: 'En konkurranse pa fylkesniva der UB-er viser frem bedriften og bedommes av jury', isCorrect: true },
          { id: 'c', text: 'Et obligatorisk kurs i entreprenorskap', isCorrect: false },
          { id: 'd', text: 'En eksamen i bedriftsutvikling', isCorrect: false },
        ],
        solution: 'Fylkesmessen er den viktigste konkurransen pa fylkesniva for ungdomsbedrifter, arrangert av Ungt Entreprenorskap. Bedriftene har stander, selger produkter, og bedommes av jury i flere kategorier. Fylkesvinneren gar videre til NM.',
      },
    },
    {
      id: 'eb-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'Hva bor vaere det forste du sier i en pitch-presentasjon?',
        options: [
          { id: 'a', text: 'Teammedlemmenes navn og roller', isCorrect: false },
          { id: 'b', text: 'Bedriftens okonomiske resultater', isCorrect: false },
          { id: 'c', text: 'En hook som fanger oppmerksomheten', isCorrect: true },
          { id: 'd', text: 'En detaljert produktbeskrivelse', isCorrect: false },
        ],
        solution: 'En pitch bor starte med en "hook" - noe som fanger oppmerksomheten umiddelbart. Det kan vaere et overraskende faktum, et sporsmal, eller en kort historie. Deretter folger problem, losning, marked, resultater, team og avslutning.',
      },
    },
    {
      id: 'eb-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Beskriv hva som kjennetegner en god stand pa en messe. Nevn minst fem elementer.',
        solution: 'En god stand kjennetegnes av: 1) Tydelig bedriftsnavn og logo som er synlig pa avstand. 2) Profesjonelt visuelt uttrykk med plakater, roll-ups og farger som matcher merkevaren. 3) Produkter tydelig utstilt med prislapper og produktinformasjon. 4) Ryddig og innbydende oppsett som inviterer besokende. 5) Praktiske losninger for betaling (Vipps, kontant). 6) Engasjerte standmedarbeidere som tar kontakt. 7) Informasjonsmateriale som visittkort, flyers eller QR-koder.',
      },
    },
    {
      id: 'eb-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Forklar hva NM for ungdomsbedrifter er, og hva juryen legger vekt pa i bedsmmelsen.',
        solution: 'NM for ungdomsbedrifter er den nasjonale finalen der fylkesvinnerne fra hele Norge konkurrerer mot hverandre. Det holdes vanligvis i Oslo over to dager. Juryen, som bestar av naeringslivsledere og grundere, vurderer: 1) Forretningside og gjennomforing - er ideen god og godt gjennomfort? 2) Okonomisk resultat - har bedriften tjent penger? 3) Teamarbeid - fungerer gruppen godt sammen? 4) Innovasjon - er produktet nyskapende? 5) Presentasjon - formidler de bedriften godt? 6) Barekraft - tar bedriften samfunnsansvar? Vinneren kan representere Norge i europeisk finale.',
      },
    },
    {
      id: 'eb-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Samleoppgave: Skriv en komplett pitch-presentasjon (3-5 minutter) for en ungdomsbedrift du velger selv. Folg pitch-strukturen med hook, problem, losning, marked, resultater, team og avslutning.',
        hints: ['Bruk konkrete tall og eksempler. Tenk pa hva som gjor produktet unikt.'],
        solution: 'Eksempel for "GreenCase UB" (baerekraftige mobilcovers): Hook: "Hvert aar kastes 1,5 milliarder mobilcovers. De fleste er laget av plast og ender i naturen." Problem: "Mobilcovers gar i stykker og byttes ofte. De fleste er laget av ikke-nedbrytbar plast." Losning: "GreenCase lager mobilcovers av bambus og resirkulert plast. De er slitesterke, ser bra ut, og er 100 % nedbrytbare." Marked: "Var maalgruppe er miljobevisste ungdommer. 85 % av norske 16-19-aaringer har smartphone." Resultater: "Vi har solgt 120 covers, omsatt for 18 000 kr, og fatt 4,8 av 5 i kundetilfredshet." Team: "Vi er fire elever med kompetanse innen design, produksjon, markedsforing og okonomi." Avslutning: "GreenCase - beskytt mobilen og miljoet. Sporsmal?"',
      },
    },
    {
      id: 'eb-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Samleoppgave: Din ungdomsbedrift skal delta pa fylkesmessen om to uker. Lag en detaljert plan for forberedelsene. Inkluder stand, presentasjon, produkter og ansvarsfordeling.',
        solution: 'Forberedelsesplan for fylkesmessen: Uke 1: 1) Standdesign - Produksjonsansvarlig designer layout og bestiller plakater/roll-up. 2) Produktlager - Produksjonsansvarlig sikrer at vi har nok produkter (minst 50 enheter). 3) Presentasjon - Daglig leder skriver pitch-manus og fordeler taletid. 4) Markedsmateriell - Markedsforingsansvarlig lager visittkort, flyers og QR-koder. Uke 2: 5) Oving - Hele teamet over presentasjonen minst 5 ganger. 6) Jurysporsmal - Okonomiansvarlig forbereder okonomi- og salgstall. 7) Praktisk - Salgsansvarlig ordner vekslepenger, Vipps, kvitteringsblokk. 8) Pakking - Lag sjekkliste: produkter, stand-materiell, verktoy, betalingslosninger, mat/drikke. 9) Antrekk - Alle har bedriftens t-skjorte eller lik kleskode. 10) Transport - Avklar hvem som kjorer og nar vi ma vaere pa plass.',
      },
    },
    {
      id: 'eb-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Fylkesmessen** er hovedkonkurransen pa fylkesniva med jurybedomming i flere kategorier
- **NM** er den nasjonale finalen for fylkesvinnere, med mulighet for europeisk finale
- **God stand** krever profesjonelt visuelt uttrykk, produktvisning og aktive medarbeidere
- **Pitch-teknikk** folger strukturen: hook, problem, losning, marked, resultater, team
- **Forberedelse** er nokkkelen til suksess pa messer og konkurranser

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fylkesmesse | Konkurranse pa fylkesniva for ungdomsbedrifter |
| NM | Nasjonal finale for fylkesvinnere |
| Pitch | Kort, overbevisende presentasjon av bedriften |
| Stand | Bedriftens utstillingsomrade pa messe |
| Hook | Oppmerksomhetsfanger i starten av en presentasjon |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.5: Evaluering og avvikling
// ============================================================================

export const CHAPTER_ENTREBED_1_8_5: TextbookChapter = {
  id: 'entrebed-1-8-5',
  courseId: 'entrebed-1',
  chapterNumber: '8.5',
  title: 'Evaluering og avvikling',
  description: 'Laer om generalforsamling, avvikling av ungdomsbedriften, refleksjon over laeringsutbytte og personlig utvikling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomfore avvikling av en ungdomsbedrift pa en ordentlig maate',
    'reflektere over laeringsutbytte og personlig utvikling',
  ],
  content: [
    {
      id: 'eb-8-5-intro',
      type: 'text',
      content: `## Evaluering og avvikling

Alle ungdomsbedrifter skal avvikles ved slutten av skolearet. Avviklingsprosessen er en viktig del av laeringen - den gir dere mulighet til a oppsummere, reflektere og avslutte bedriften pa en profesjonell maate.

**Hva du laerer i dette kapittelet:**
- Hvordan gjennomfore en generalforsamling
- Stegene i avviklingsprosessen
- Hvordan reflektere over laeringsutbytte
- Hva du tar med deg videre fra UB-erfaringen

**Tidslinje for avvikling:**
- **April:** Forberede arsregnskap og arsmelding
- **Mai:** Generalforsamling og vedtak om avvikling
- **Mai-juni:** Gjennomfore avviklingen og levere sluttrapport til UE`,
    },
    {
      id: 'eb-8-5-def-1',
      type: 'definition',
      title: 'Generalforsamling',
      content: `**Generalforsamlingen** er ungdomsbedriftens hoyeste organ. Her moter aksjonaerene for a godkjenne arsregnskap, arsmelding og vedta avvikling av bedriften.

**Hvem deltar:**
- Alle aksjonaerer (har stemmerett)
- Styret og daglig leder
- Mentor og kontaktlaerer (som observatorer)

**Agenda for generalforsamlingen:**
1. Apning og godkjenning av innkalling
2. Valg av moteleder og referent
3. Presentasjon av arsmeldingen
4. Presentasjon og godkjenning av arsregnskapet
5. Vedtak om disponering av overskudd/underskudd
6. Vedtak om avvikling
7. Eventuelt

**Avstemning:**
- Hver aksje gir en stemme
- Vedtak fattes med alminnelig flertall
- Vedtektsendringer krever 2/3 flertall`,
    },
    {
      id: 'eb-8-5-text-1',
      type: 'text',
      content: `### Avviklingsprosessen

Avvikling betyr a avslutte bedriftens virksomhet pa en ryddig maate.

**Steg 1: Avslutte driften**
- Stopp produksjon og salg
- Fullfore alle utestaaende bestillinger
- Selge ut gjenvaerende varelager (eventuelt med rabatt)

**Steg 2: Gjore opp okonomien**
- Betale alle utestaaende regninger
- Toemme bankkontoen
- Ferdigstille arsregnskapet

**Steg 3: Disponere overskudd**
- Betale tilbake aksjekapital til aksjonaerene
- Fordele eventuelt overskudd etter vedtak pa generalforsamlingen
- Utbetale utbytte per aksje

**Steg 4: Formell avvikling**
- Sende avviklingsmelding til Ungt Entreprenorskap
- Avslutte bankkonto
- Levere sluttrapport til UE

**Steg 5: Rydde opp**
- Slette forretningskontoer pa sosiale medier (eventuelt)
- Arkivere viktige dokumenter
- Levere tilbake eventuelt laant utstyr`,
    },
    {
      id: 'eb-8-5-def-2',
      type: 'definition',
      title: 'Avviklingsregnskap',
      content: `**Avviklingsregnskapet** viser den endelige okonomiske oppgjorelsen nar bedriften legges ned.

**Innhold:**
- Sluttbalanse med alle eiendeler og gjeld
- Beregning av belopet som skal fordeles
- Oversikt over utbetalinger til aksjonaerer

**Beregning:**
1. Sum bankinnskudd etter at alt er solgt og betalt
2. Minus aksjekapital som tilbakebetales (paalydende verdi per aksje)
3. = Overskudd til fordeling
4. Fordeles etter vedtak pa generalforsamling

**Eksempel:**
Bankinnskudd ved avvikling: 9 500 kr
Aksjekapital (50 aksjer a 50 kr): 2 500 kr
Overskudd: 7 000 kr
Vedtatt: 50 % til aksjonaerer (3 500 kr), 50 % til Roeide Kors (3 500 kr)
Utbetaling per aksje: 50 kr (tilbakebetaling) + 70 kr (utbytte) = 120 kr`,
    },
    {
      id: 'eb-8-5-text-2',
      type: 'text',
      content: `### Refleksjon over laeringsutbytte

En viktig del av UB-erfaringen er a reflektere over hva du har laert. Denne refleksjonen gir deg innsikt i egne styrker og utviklingsomrader.

**Faglig laering:**
- Forretningsforstaelse og okonomistyring
- Markedsforing og salg
- Produksjon og kvalitetssikring
- Prosjektledelse og planlegging
- Presentasjonsteknikk

**Personlig utvikling:**
- Samarbeidsevner og teamarbeid
- Kommunikasjon og konflikthandtering
- Selvstendighet og initiativ
- Ansvarsfoleelse og palitelighet
- Evne til a handtere motgang og usikkerhet

**Entreprenorskapskompetanse:**
- Kreativitet og ideutvikling
- Risikovurdering og beslutningstaking
- Nettverksbygging
- Evne til a se muligheter
- Handlingskraft`,
    },
    {
      id: 'eb-8-5-text-3',
      type: 'text',
      content: `### Refleksjonsverktoy

For a fa mest mulig ut av refleksjonen kan du bruke disse verktoyene:

**STAR-metoden for a beskrive erfaringer:**
- **S**ituasjon: Hva var konteksten?
- **T**ask: Hva var oppgaven eller utfordringen?
- **A**ction: Hva gjorde du/dere?
- **R**esultat: Hva ble resultatet? Hva laerte du?

**Refleksjonssporsmal:**
- Hva er jeg mest stolt av fra UB-aret?
- Hva var den storste utfordringen, og hvordan handterte jeg den?
- Hva ville jeg gjort annerledes?
- Hvilke nye ferdigheter har jeg utviklet?
- Hvordan har samarbeidet i gruppen fungert?
- Hva tar jeg med meg videre?

**Tilbakemelding:**
- Gi og motta tilbakemeldinger fra gruppemedlemmer
- Be mentor om en evaluering
- Spor kunder om tilbakemeldinger
- Vurder hva markedet fortalte dere`,
    },
    {
      id: 'eb-8-5-text-4',
      type: 'text',
      content: `### Hva du tar med deg videre

UB-erfaringen gir deg kompetanse som er verdifull bade for videre studier og arbeidsliv.

**Pa CVen:**
- UB-erfaring er verdifull pa CVen
- Vis konkrete resultater (omsetning, antall solgte, priser)
- Beskriv din rolle og ditt ansvar
- Nevn ferdigheter du har utviklet

**For videre studier:**
- Forstaelse for okonomi og forretning
- Prosjekterfaring og samarbeidsevner
- Presentasjons- og kommunikasjonsferdigheter
- Evne til a jobbe selvstendig

**For arbeidslivet:**
- Praktisk erfaring med bedriftsdrift
- Forstaelse for verdiskaping og kundetilfredshet
- Evne til a ta initiativ og ansvar
- Erfaring med teamarbeid og prosjektledelse

**Attester:**
- Be kontaktlaerer om en attest
- Be mentor om en referanse
- Ta vare pa diplomer og utmerkelser fra messer
- Samle dokumentasjon av bedriftens resultater`,
    },
    {
      id: 'eb-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Refleksjon med STAR-metoden',
      problem: 'Bruk STAR-metoden til a beskrive en utfordrende situasjon fra en ungdomsbedrift.',
      solution: `**Situasjon:**
Under fylkesmessen oppdaget vi at vi hadde produsert for fa produkter. Halvveis gjennom dagen var vi utsolgt.

**Task:**
Vi matte finne en losning for a fortsette salget resten av dagen og utnytte muligheten til a tjene mer penger.

**Action:**
Vi bestemte oss for a opprette et forhaaandsbestillingssystem. Kundene kunne bestille og betale med Vipps, og vi lovte levering innen en uke. En i gruppen laget en enkel bestillingsliste pa telefonen, mens resten fortsatte a presentere pa standen.

**Resultat:**
Vi tok 28 forhaaandsbestillinger og tjente 2 800 kr ekstra. Vi laerte at vi matte planlegge produksjonen bedre ut fra forventet etterspoorsel. Til neste messe produserte vi 50 % flere produkter, og vi hadde forhaaandsbestilling som fast tilbud.

**Laerdom:**
Fleksibilitet og losningsorientering er viktige egenskaper. Det som foerst virket som et problem ble en mulighet til a oke salget.`,
    },
    {
      id: 'eb-8-5-note-1',
      type: 'note',
      title: 'Husk sluttrapport til UE',
      content: `Alle ungdomsbedrifter ma levere en sluttrapport til Ungt Entreprenorskap. Sluttrapporten inneholder:
- Avsluttende arsregnskap
- Arsmelding
- Bekreftelse pa at bedriften er avviklet
- Oversikt over utbetalinger til aksjonaerer
- Evaluering av UB-programmet

**Frist:** Sluttrapporten skal vanligvis leveres innen 15. juni.`,
    },
    {
      id: 'eb-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva er generalforsamlingens rolle i en ungdomsbedrift?',
        options: [
          { id: 'a', text: 'A drive den daglige driften av bedriften', isCorrect: false },
          { id: 'b', text: 'A godkjenne arsregnskap, arsmelding og vedta avvikling', isCorrect: true },
          { id: 'c', text: 'A selge produkter til aksjonaerene', isCorrect: false },
          { id: 'd', text: 'A ansette nye medarbeidere', isCorrect: false },
        ],
        solution: 'Generalforsamlingen er bedriftens hoyeste organ der aksjonaerene godkjenner arsregnskap og arsmelding, vedtar disponering av overskudd, og fatter vedtak om avvikling. Hver aksje gir en stemme.',
      },
    },
    {
      id: 'eb-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        task: 'I hvilken rekkefolge bor avviklingen skje?',
        options: [
          { id: 'a', text: 'Avslutt bankkonto, stopp salg, betal regninger', isCorrect: false },
          { id: 'b', text: 'Stopp salg, betal regninger, fordel overskudd, send avviklingsmelding', isCorrect: true },
          { id: 'c', text: 'Fordel overskudd, stopp salg, betal regninger', isCorrect: false },
          { id: 'd', text: 'Send avviklingsmelding, stopp salg, fordel overskudd', isCorrect: false },
        ],
        solution: 'Riktig rekkefolge er: 1) Stopp produksjon og salg, 2) Betal alle utestaaende regninger, 3) Ferdigstill arsregnskapet, 4) Fordel overskudd etter generalforsamlingsvedtak, 5) Send avviklingsmelding til UE og avslutt bankkonto.',
      },
    },
    {
      id: 'eb-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Forklar hva en generalforsamling er og hva som skal behandles der. Hvem har stemmerett?',
        solution: 'En generalforsamling er det formelle motet der bedriftens aksjonaerer samles for a fatte viktige beslutninger. I en ungdomsbedrift behandles: 1) Godkjenning av arsmelding, 2) Godkjenning av arsregnskap, 3) Disponering av overskudd eller haandtering av underskudd, 4) Vedtak om avvikling. Alle aksjonaerer har stemmerett, der hver aksje gir en stemme. Vedtak fattes med alminnelig flertall. Styret og daglig leder presenterer, mens mentor og kontaktlaerer kan vaere til stede som observatorer.',
      },
    },
    {
      id: 'eb-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Beskriv fem konkrete ting du kan laere av a drive en ungdomsbedrift som er nyttige for fremtidig arbeidsliv.',
        solution: '1) Okonomistyring - a lage budsjett, fore regnskap og forstaa resultat og balanse er grunnleggende i alle bedrifter. 2) Samarbeid og teamarbeid - a jobbe effektivt i gruppe, fordele oppgaver og handtere konflikter er essensielt i nesten alle jobber. 3) Presentasjonsteknikk - a kunne formidle ideer og resultater overbevisende er viktig bade i jobbintervjuer og pa arbeidsplassen. 4) Problemlosning - a mote uforutsette utfordringer og finne losninger laerer deg a tenke kreativt under press. 5) Prosjektledelse - a planlegge, gjennomfore og evaluere et prosjekt fra start til slutt gir erfaring som er direkte overforbar til arbeidslivet.',
      },
    },
    {
      id: 'eb-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Samleoppgave: Bruk STAR-metoden til a beskrive en situasjon fra et gruppearbeid eller prosjekt du har deltatt i. Forklar hva du laerte og hvordan du kan bruke denne laeringen i fremtiden.',
        hints: ['Velg en situasjon der du moette en utfordring og matte finne en losning'],
        solution: 'Eksempel: Situasjon: I et gruppeprosjekt var det uenighet om hvilken retning vi skulle velge, og to gruppemedlemmer snakket ikke sammen. Task: Som gruppeleder matte jeg lose konflikten og fa prosjektet tilbake pa sporet. Action: Jeg avholdt et eget mote der hver person fikk si sin mening uavbrutt. Deretter fant vi et kompromiss som tok det beste fra begge forslagene. Resultat: Gruppen begynte a samarbeide igjen, og prosjektet ble levert pa tid med god kvalitet. Laerdom: Konflikter ma adresseres tidlig, og a lytte til alle parter er nokkkelen til losning. I fremtiden vil jeg bruke aktiv lytting og tidlig konflikthandtering i teamarbeid.',
      },
    },
    {
      id: 'eb-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Samleoppgave: Lag en komplett agenda for generalforsamlingen i en ungdomsbedrift som har gatt med overskudd. Inkluder alle punkter og skriv et kort forslag til vedtak for hvert punkt.',
        solution: 'Agenda for generalforsamling i StudyKit UB: 1) Apning - Styreleder apner motet og bekrefter at innkallingen er godkjent. Vedtak: Innkallingen godkjennes. 2) Konstituering - Velge moteleder og referent. Vedtak: Styreleder velges som moteleder, HR-ansvarlig som referent. 3) Arsmelding - Daglig leder presenterer arsmeldingen. Vedtak: Arsmeldingen godkjennes. 4) Arsregnskap - Okonomiansvarlig presenterer resultatregnskap og balanse. Arsresultat: 6 200 kr. Vedtak: Arsregnskapet godkjennes. 5) Disponering - Styrets forslag: 40 % til aksjonaerer (2 480 kr), 40 % til Plan Norge (2 480 kr), 20 % til klassetur (1 240 kr). Vedtak: Styrets forslag vedtas. 6) Avvikling - Vedtak: Bedriften avvikles innen 1. juni. Styret far fullmakt til a gjennomfore avviklingen. 7) Eventuelt - Takk til mentor, laerer og aksjonaerer.',
      },
    },
    {
      id: 'eb-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-8-5-ex-7',
        number: '8.5.7',
        type: 'classic',
        task: 'Samleoppgave: Skriv en refleksjonstekst pa 200-300 ord der du evaluerer en tenkt ungdomsbedrift. Diskuter hva som gikk bra, hva som kunne vaert bedre, og hva du ville gjort annerledes.',
        solution: 'Refleksjonstekst for EcoSoap UB: EcoSoap UB har vaert et laerrikt aar. Det vi er mest stolte av er produktkvaliteten - kundene var svart fornoeyde med saapene vaare, og vi fikk mange gjenkjop. Vi hadde et arsresultat pa 7 245 kr, noe som viser at forretningsideen fungerte godt. Samarbeidet i gruppen var generelt bra, men vi hadde noen utfordringer med kommunikasjon. I starten var det uklart hvem som hadde ansvar for hva, noe som forte til at oppgaver falt mellom stolene. Vi loste dette ved a lage en tydelig ansvarsmatrise og ha faste ukentlige moter. Markedsforingen kunne vaert bedre. Vi startet for sent med sosiale medier og gikk glipp av hoestsalget. Hvis vi skulle gjort det igjen, ville vi startet markedsforingen fra dag en og hatt en tydeligere plan. Vi laerte ogsa at vi burde ha produsert i storre partier for a redusere kostnadene per enhet. De viktigste laeringspunktene er: 1) Planlegging er avgjorende - jo bedre plan, jo lettere gjennomforing. 2) Kommunikasjon er noekkelen til godt teamarbeid. 3) Start markedsforingen tidlig. 4) Varer fleksibel og tilpass deg nar ting ikke gar som planlagt. Denne erfaringen tar vi med oss videre og vil vaere verdifull bade for studier og arbeidsliv.',
      },
    },
    {
      id: 'eb-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert:

- **Generalforsamlingen** er bedriftens hoyeste organ der aksjonaerer godkjenner regnskap og vedtar avvikling
- **Avviklingsprosessen** folger faste steg fra driftsstopp til formell avvikling hos UE
- **Refleksjon** over laeringsutbytte er verdifullt for personlig utvikling
- **STAR-metoden** er et nyttig verktoy for a beskrive og laere av erfaringer
- **UB-erfaringen** gir kompetanse som er verdifull for videre studier og arbeidsliv

### Nokkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Generalforsamling | Bedriftens hoyeste organ med aksjonaerstemmerett |
| Avvikling | Prosessen med a avslutte bedriftens virksomhet |
| Avviklingsregnskap | Endelig okonomisk oppgjorelse ved nedleggelse |
| STAR-metoden | Refleksjonsverktoy: Situasjon, Task, Action, Resultat |
| Sluttrapport | Dokumentasjon som leveres til UE ved avvikling |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const ENTREBED_1_DEL8_CHAPTERS = [
  CHAPTER_ENTREBED_1_8_1,
  CHAPTER_ENTREBED_1_8_2,
  CHAPTER_ENTREBED_1_8_3,
  CHAPTER_ENTREBED_1_8_4,
  CHAPTER_ENTREBED_1_8_5,
];

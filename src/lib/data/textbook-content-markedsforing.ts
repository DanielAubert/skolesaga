/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Markedsforing og ledelse (VG3 valgfag)
 *
 * Folger LK20 lareplan for markedsforing og ledelse.
 * Dekker markedsforing, forbrukeratferd, segmentering, merkevarebygging,
 * pris, distribusjon, kommunikasjon, digital markedsforing, ledelse,
 * etikk, baerekraft og strategisk planlegging.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Innforing i markedsforing
// ============================================================================

export const CHAPTER_MARKEDSFORING_1: TextbookChapter = {
  id: 'markedsforing-1',
  courseId: 'markedsforing',
  chapterNumber: '1',
  title: 'Innforing i markedsforing',
  description: 'Forsta grunnleggende markedsforingskonsepter, markedsforingens rolle i bedriften og utviklingen av markedsforingstenkingen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for hva markedsforing er og hvorfor det er viktig',
    'forklare markedsforingens utvikling og ulike orienteringer',
    'beskrive markedsmiksen og dens komponenter',
  ],
  content: [
    {
      id: 'markedsforing-1-intro',
      type: 'text',
      content: `## Hva er markedsforing?

Markedsforing handler om a skape, kommunisere og levere verdi til kunder. Det er en sentral funksjon i enhver bedrift som onsker a lykkes i markedet.

**Markedsforingens kjerneopgaver:**
- Identifisere kundebehov og onsker
- Utvikle produkter og tjenester som tilfredsstiller disse behovene
- Kommunisere verdien til potensielle kunder
- Levere verdi pa en lonsom mate

**Hvorfor er markedsforing viktig?**
- Skaper forbindelse mellom bedrift og kunde
- Bygger merkevarekjennskap og lojalitet
- Driver salg og inntekter
- Gir konkurransefortrinn
- Bidrar til langsiktig verdiskaping`,
    },
    {
      id: 'markedsforing-1-def-1',
      type: 'definition',
      title: 'Markedsforing',
      content: `**American Marketing Association definerer markedsforing som:**
"Aktiviteten, settet av institusjoner og prosesser for a skape, kommunisere, levere og utveksle tilbud som har verdi for kunder, klienter, partnere og samfunnet generelt."

**Nokkelord:**
- *Verdi:* Det kunden far i forhold til det kunden gir (pris, tid, innsats)
- *Utveksling:* Begge parter gir og far noe av verdi
- *Relasjoner:* Langsiktige forbindelser med kunder
- *Tilfredsstillelse:* Mate eller overgå kundens forventninger`,
    },
    {
      id: 'markedsforing-1-def-2',
      type: 'definition',
      title: 'Markedsforingens utvikling',
      content: `**Produksjonsorientering (ca. 1900-1930):**
Fokus pa effektiv produksjon. "Bygg det, sa kommer kundene." Fungerte i tider med knapphet.

**Produktorientering (ca. 1930-1950):**
Fokus pa produktkvalitet og forbedringer. Antakelse om at kunder velger de beste produktene.

**Salgsorientering (ca. 1950-1970):**
Fokus pa aggressivt salg og reklame. "Selg det vi produserer."

**Markedsorientering (ca. 1970-):**
Fokus pa kundens behov. "Finn ut hva kunden vil ha, og lever det."

**Samfunnsorientering (moderne):**
Fokus pa bade kundens og samfunnets interesser. Inkluderer baerekraft og etikk.`,
    },
    {
      id: 'markedsforing-1-def-3',
      type: 'definition',
      title: 'Markedsmiksen (4P)',
      content: `**Produkt (Product):**
Varer eller tjenester som tilbys. Inkluderer design, kvalitet, funksjoner, merkenavn, emballasje.

**Pris (Price):**
Hva kunden betaler. Inkluderer listepriser, rabatter, betalingsbetingelser.

**Plass/Distribusjon (Place):**
Hvordan produktet gjores tilgjengelig. Inkluderer distribusjonskanaler, lokalisering, logistikk.

**Pavirkning/Promosjon (Promotion):**
Hvordan vi kommuniserer med markedet. Inkluderer reklame, PR, salg, sosiale medier.

**Utvidet markedsmiks (7P) for tjenester:**
- People (mennesker)
- Process (prosesser)
- Physical evidence (fysiske bevis)`,
    },
    {
      id: 'markedsforing-1-example-1',
      type: 'example',
      title: 'Eksempel: Spotify',
      problem: 'Hvordan bruker Spotify markedsmiksen?',
      solution: `**Produkt:**
Musikkstrommingstjeneste med personlige spillelister, podcaster, hoykvalitetslyd.

**Pris:**
Freemium-modell (gratis med reklame), Premium-abonnement, familie- og studentrabatter.

**Plass:**
Tilgjengelig via app (iOS, Android), nettleser, smarthoytalere, biler - overalt.

**Promosjon:**
Sosiale medier, "Wrapped"-kampanjen, samarbeid med artister, influencer-markedsforing.

**Suksessfaktorer:**
- Personalisering gjennom algoritmer
- Enkel brukeropplevelse
- Stort musikkbibliotek
- Sosiale funksjoner (dele spillelister)`,
    },
    {
      id: 'markedsforing-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-1-ex-1',
        number: '1.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom produktorientering og markedsorientering. Gi et eksempel pa en bedrift som har gatt fra den ene til den andre.',
        hints: ['Tenk pa hva som star i sentrum - produktet eller kunden'],
        solution: 'Produktorientering fokuserer pa a lage det beste produktet og anta at kunder vil kjope det. Markedsorientering starter med kundens behov og utvikler produkter basert pa dette. Eksempel: Nokia var produktorientert med sine telefoner, mens Apple med iPhone var markedsorientert og forsto at kunder ville ha en enkel smarttelefon med apper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-1-ex-2',
        number: '1.2',
        type: 'classic',
        task: 'Beskriv de fire P-ene i markedsmiksen for en bedrift du kjenner til.',
        hints: ['Velg en bedrift og analyser produkt, pris, plass og promosjon'],
        solution: 'Eksempel IKEA: Produkt - Rimelige, moderne mobler i flatpakke. Pris - Lave priser, verdi for pengene. Plass - Store varehus utenfor bysentrum, nettbutikk. Promosjon - Katalog, sosiale medier, showrooms i butikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Hva menes med "verdi" i markedsforing, og hvorfor er det sentralt?',
        hints: ['Tenk pa hva kunden far vs. hva kunden gir'],
        solution: 'Verdi i markedsforing er forholdet mellom det kunden oppnår (nytte, fordeler, opplevelse) og det kunden ma gi (pris, tid, innsats). Verdi er sentralt fordi kunder velger produkter som gir dem storst verdi. Bedrifter som skaper overlegen kundeverdi far konkurransefortrinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Hvorfor er det viktig for moderne bedrifter a ha en samfunnsorientering i tillegg til markedsorientering?',
        hints: ['Tenk pa baerekraft, etikk og omdamme'],
        solution: 'Samfunnsorientering er viktig fordi: 1) Kunder bryr seg om bedrifters samfunnsansvar, 2) Baerekraft er nodvendig for langsiktig overlevelse, 3) Godt omdamme gir konkurransefortrinn, 4) Regulering og lovverk krever det, 5) Ansatte vil jobbe for ansvarlige bedrifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Forklar hvorfor tjenestebedrifter bruker 7P i stedet for 4P.',
        hints: ['Tenk pa hva som er spesielt med tjenester sammenlignet med fysiske produkter'],
        solution: 'Tjenester er immaterielle, produseres og konsumeres samtidig, og varierer i kvalitet. Derfor trengs: People - ansattes kompetanse og service er avgjorende. Process - hvordan tjenesten leveres pavirker opplevelsen. Physical evidence - fysiske bevis som bygninger, uniformer og dokumenter gjor tjenesten mer handgripelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Forbrukeratferd
// ============================================================================

export const CHAPTER_MARKEDSFORING_2: TextbookChapter = {
  id: 'markedsforing-2',
  courseId: 'markedsforing',
  chapterNumber: '2',
  title: 'Forbrukeratferd',
  description: 'Forsta hvordan forbrukere tenker, foler og handler nar de tar kjopsbeslutninger.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for faktorer som pavirker forbrukeratferd',
    'forklare kjopsbeslutningsprosessen',
    'analysere psykologiske og sosiale pavirknisfaktorer',
  ],
  content: [
    {
      id: 'markedsforing-2-intro',
      type: 'text',
      content: `## Hva er forbrukeratferd?

Forbrukeratferd handler om hvordan enkeltpersoner, grupper og organisasjoner velger, kjoper, bruker og kvitter seg med varer, tjenester, ideer eller opplevelser for a tilfredsstille sine behov og onsker.

**Hvorfor studere forbrukeratferd?**
- Bedre forsta kundenes behov
- Utvikle mer effektive markedsforingsstrategier
- Forutsi markedstrender
- Skape produkter som treffer malgruppa
- Kommunisere pa en mate som resonerer med kunden

**Faktorer som pavirker forbrukeratferd:**
- Kulturelle faktorer
- Sosiale faktorer
- Personlige faktorer
- Psykologiske faktorer`,
    },
    {
      id: 'markedsforing-2-def-1',
      type: 'definition',
      title: 'Kjopsbeslutningsprosessen',
      content: `**1. Problemerkjennelse:**
Kunden blir klar over et behov eller problem. Utloses av interne stimuli (sult) eller eksterne stimuli (reklame).

**2. Informasjonssok:**
Kunden soker informasjon om losninger. Kilder: personlige (venner), kommersielle (reklame), offentlige (anmeldelser), erfaring.

**3. Vurdering av alternativer:**
Kunden sammenligner produkter basert pa attributter, fordeler og verdi.

**4. Kjopsbeslutning:**
Kunden velger et produkt. Kan pavirkes av andres meninger og uventede situasjoner.

**5. Etterkopatferd:**
Kunden vurderer kjopet. Fornoyelse forer til gjenkjop og anbefalinger. Misnoeye forer til klager og negativ vareprat.`,
    },
    {
      id: 'markedsforing-2-def-2',
      type: 'definition',
      title: 'Psykologiske faktorer',
      content: `**Motivasjon:**
Drivkraften bak atferd. Maslows behovspyramide: fysiologiske behov, trygghet, tilhorighet, anerkjennelse, selvrealisering.

**Persepsjon:**
Hvordan vi velger ut, organiserer og tolker informasjon. Selektiv oppmerksomhet, selektiv fordreining, selektiv hukommelse.

**Laring:**
Endringer i atferd som folge av erfaring. Klassisk betinging, operant betinging, observasjonslaring.

**Holdninger:**
Varige vurderinger av objekter. Bestar av kognitiv (kunnskap), affektiv (folelser) og konativ (handlingsintensjon) komponent.

**Personlighet:**
Karakteristiske psykologiske trekk som pavirker atferd.`,
    },
    {
      id: 'markedsforing-2-def-3',
      type: 'definition',
      title: 'Sosiale og kulturelle faktorer',
      content: `**Kultur:**
Grunnleggende verdier, oppfatninger, onsker og atferd lart fra samfunnet. Inkluderer subkulturer og sosial klasse.

**Referansegrupper:**
Grupper som pavirker holdninger og atferd. Medlemsgrupper, aspirerende grupper, dissosierende grupper.

**Familie:**
En av de viktigste pavirknisfaktorene. Ulike roller i kjopsbeslutninger (initiator, pavirker, beslutter, kjoper, bruker).

**Roller og status:**
Posisjoner i grupper med tilhorende forventninger. Produkter brukes for a signalisere status.

**Opinionsledere:**
Personer som pavirker andres holdninger og kjop. Viktige i word-of-mouth markedsforing.`,
    },
    {
      id: 'markedsforing-2-example-1',
      type: 'example',
      title: 'Eksempel: Kjop av smarttelefon',
      problem: 'Hvordan kan vi analysere kjopsbeslutningsprosessen for en smarttelefon?',
      solution: `**1. Problemerkjennelse:**
Gammel telefon er treg, har darlig batteri, eller venner har nyere modeller.

**2. Informasjonssok:**
Leser anmeldelser pa Tek.no, sporr venner, besker butikker, ser YouTube-videoer.

**3. Vurdering av alternativer:**
Sammenligner iPhone vs. Samsung vs. andre. Vurderer pris, kamera, batteri, okosystem.

**4. Kjopsbeslutning:**
Velger iPhone fordi venner har det (sosial pavirkning) og det integrerer med MacBook.

**5. Etterkopatferd:**
Fornoeyd med kameraet, anbefaler til andre. Eller opplever kjopetterklokhet hvis prisen var for hoy.`,
    },
    {
      id: 'markedsforing-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-1',
        number: '2.1',
        type: 'classic',
        task: 'Beskriv de fem trinnene i kjopsbeslutningsprosessen med et selvvalgt eksempel.',
        hints: ['Velg et produkt du nylig har kjopt og analyser prosessen'],
        solution: 'Eksempel kjop av treningssko: 1) Problemerkjennelse - gamle sko slitt. 2) Informasjonssok - sjekket anmeldelser, spurte treningsvenner. 3) Vurdering - sammenlignet Nike, Adidas, Asics pa pris og komfort. 4) Kjopsbeslutning - valgte Nike basert pa passform. 5) Etterkopatferd - fornoeyd, anbefalte til andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-2',
        number: '2.2',
        type: 'classic',
        task: 'Forklar hvordan Maslows behovspyramide kan brukes i markedsforing.',
        hints: ['Tenk pa hvilke behov ulike produkter tilfredsstiller'],
        solution: 'Maslows pyramide hjelper markedsforere a forsta hvilke behov produktet tilfredsstiller. Fysiologiske: mat, drikke. Trygghet: forsikring, alarm. Tilhorighet: sosiale medier, klubber. Anerkjennelse: luksusprodukter, titler. Selvrealisering: kurs, opplevelser. Markedsforing bor appellere til relevante behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Hva er referansegrupper, og hvordan pavirker de forbrukeratferd?',
        hints: ['Tenk pa grupper du sammenligner deg med'],
        solution: 'Referansegrupper er grupper vi bruker som malestokkk for holdninger og atferd. De pavirker gjennom: informasjon (hva er bra), normativt press (hva er akseptert), og identifisering (hvem vil jeg vaere som). Eksempel: ungdom kjoper merker vennene bruker for a passe inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Hva er selektiv persepsjon, og hvorfor er det viktig for markedsforere a forsta dette?',
        hints: ['Tenk pa hvordan vi filtrerer informasjon'],
        solution: 'Selektiv persepsjon er at vi bare legger merke til, tolker og husker en liten del av all informasjon vi utsettes for. Markedsforere ma: skape oppmerksomhet (utheve budskap), sikre riktig tolkning (klar kommunikasjon), og gjore budskapet minneverdig (repetisjon, folelser).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Analyser hvordan kulturelle faktorer kan pavirke markedsforing av et produkt i ulike land.',
        hints: ['Tenk pa verdier, normer og tradisjoner'],
        solution: 'Kultur pavirker produktpreferanser, kommunikasjon og distribusjon. Eksempel: McDonalds tilpasser menyen (ingen storfekjott i India, ris i Asia). Reklame ma tilpasses (individualisme i Vesten vs. kollektivisme i Asia). Farger har ulik betydning (hvit = renhet i Vesten, sar i Asia).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-2-ex-6',
        number: '2.6',
        type: 'classic',
        task: 'Forklar hva kognitiv dissonans er og hvordan bedrifter kan redusere det hos kunder etter kjop.',
        hints: ['Tenk pa ubehag etter store kjop'],
        solution: 'Kognitiv dissonans er ubehag nar holdninger og handlinger ikke stemmer overens, f.eks. tvil etter et dyrt kjop. Bedrifter kan redusere det ved: bekreftende kommunikasjon etter kjop, god kundeservice, garantier og returrett, positive anmeldelser og testimonials.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Markedsanalyse og segmentering
// ============================================================================

export const CHAPTER_MARKEDSFORING_3: TextbookChapter = {
  id: 'markedsforing-3',
  courseId: 'markedsforing',
  chapterNumber: '3',
  title: 'Markedsanalyse og segmentering',
  description: 'Laer a analysere markeder, identifisere malgrupper og posisjonere produkter.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjennomfore enkle markedsanalyser',
    'forklare prinsipper for segmentering, malgruppeutvelgelse og posisjonering',
    'bruke analyseverktoy som SWOT og PESTEL',
  ],
  content: [
    {
      id: 'markedsforing-3-intro',
      type: 'text',
      content: `## Markedsanalyse

Markedsanalyse er systematisk innsamling, analyse og tolkning av informasjon om et marked. Det gir grunnlag for strategiske beslutninger.

**Hvorfor markedsanalyse?**
- Forsta markedets storrelse og vekst
- Identifisere muligheter og trusler
- Kjenne konkurrentene
- Forsta kundenes behov
- Redusere risiko ved beslutninger

**Typer markedsforskning:**
- *Primardata:* Samles inn for formalet (sporreundersokelser, intervjuer, observasjon)
- *Sekundardata:* Eksisterende data (statistikk, rapporter, databaser)
- *Kvalitativ:* Dybdeforstaelse (fokusgrupper, intervjuer)
- *Kvantitativ:* Malbare data (sporreundersokelser, eksperimenter)`,
    },
    {
      id: 'markedsforing-3-def-1',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `SWOT er et verktoy for a analysere bedriftens interne styrker og svakheter, samt eksterne muligheter og trusler.

**Styrker (Strengths) - Internt:**
Hva gjor bedriften bra? Ressurser, kompetanse, konkurransefortrinn.

**Svakheter (Weaknesses) - Internt:**
Hva kan forbedres? Mangler, begrensninger, gap.

**Muligheter (Opportunities) - Eksternt:**
Hvilke muligheter finnes i omgivelsene? Trender, markedsendringer.

**Trusler (Threats) - Eksternt:**
Hvilke utfordringer finnes? Konkurrenter, regulering, teknologiskift.

**Bruk av SWOT:**
Kombiner styrker med muligheter (offensiv strategi), adresser svakheter som hindrer muligheter, og forbered deg pa trusler.`,
    },
    {
      id: 'markedsforing-3-def-2',
      type: 'definition',
      title: 'PESTEL-analyse',
      content: `PESTEL analyserer makroomgivelsene som pavirker bedriften.

**Political (Politiske faktorer):**
Regjeringspolitikk, skatter, handelsavtaler, stabilitet.

**Economic (Okonomiske faktorer):**
Okonomisk vekst, renter, inflasjon, arbeidsledighet, valutakurser.

**Social (Sosiale faktorer):**
Demografi, livsstil, verdier, utdanningsniva, helsetrender.

**Technological (Teknologiske faktorer):**
Innovasjon, automatisering, digitalisering, FoU-aktivitet.

**Environmental (Miljo):**
Klimaendringer, baerekraft, miljoreguleriner, ressursknapphet.

**Legal (Juridiske faktorer):**
Lover og regler, forbrukerbeskyttelse, personvern, arbeidsmiljo.`,
    },
    {
      id: 'markedsforing-3-def-3',
      type: 'definition',
      title: 'STP: Segmentering, Targeting, Posisjonering',
      content: `**Segmentering:**
Dele markedet i distinkte grupper med like behov og karakteristikker.

*Segmenteringskriterier:*
- Geografisk: land, region, by, klima
- Demografisk: alder, kjonn, inntekt, utdanning
- Psykografisk: livsstil, personlighet, verdier
- Atferdsmessig: bruksrate, lojalitet, kjopsanledning

**Targeting (Malgruppeutvelgelse):**
Velge hvilke segmenter bedriften skal betjene.
- Udifferensiert: hele markedet
- Differensiert: flere segmenter med tilpasset tilbud
- Konsentrert: fokus pa ett segment (nisje)

**Posisjonering:**
Skape en distinkt plass i kundens bevissthet. Hvordan onsker vi at malgruppa skal oppfatte oss sammenlignet med konkurrenter?`,
    },
    {
      id: 'markedsforing-3-example-1',
      type: 'example',
      title: 'Eksempel: SWOT for en lokal kafé',
      problem: 'Gjennomfor en SWOT-analyse for en ny kafé i sentrum.',
      solution: `**Styrker:**
- Sentral beliggenhet
- Hjemmelaget bakst
- Hyggelig atmosfaere
- Erfaren barista

**Svakheter:**
- Begrenset kapital
- Lite kjent merkevare
- Fa ansatte

**Muligheter:**
- Okende kaffekultur
- Trend mot lokale produkter
- Samarbeid med lokale bedrifter
- Sosiale medier for markedsforing

**Trusler:**
- Etablerte konkurrenter (Starbucks, Espresso House)
- Okende leiepriser
- Okonomisk usikkerhet
- Endrede forbrukervaner`,
    },
    {
      id: 'markedsforing-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-3-ex-1',
        number: '3.1',
        type: 'classic',
        task: 'Gjennomfor en SWOT-analyse for en bedrift eller organisasjon du kjenner til.',
        hints: ['Vurder interne styrker/svakheter og eksterne muligheter/trusler'],
        solution: 'Eksempel for en lokal bokhandel: Styrker - personlig service, lokalkunnskap, arrangementer. Svakheter - hoye priser, begrenset utvalg. Muligheter - okende interesse for lokalt, bokklubb-trend. Trusler - netthandel (Amazon), e-boker, okende husleie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-3-ex-2',
        number: '3.2',
        type: 'classic',
        task: 'Forklar de fire hovedtypene segmenteringskriterier med eksempler.',
        hints: ['Geografisk, demografisk, psykografisk, atferdsmessig'],
        solution: 'Geografisk: sportsutstyr tilpasset klima (skiutstyr i nord). Demografisk: leker segmentert pa alder. Psykografisk: okologisk mat for miljobevisste. Atferdsmessig: lojalitetsprogram for hyppige kunder. Ofte kombineres flere kriterier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Hva er forskjellen mellom primardata og sekundardata? Nar bor man bruke hver type?',
        hints: ['Tenk pa kostnad, tid og relevans'],
        solution: 'Primardata samles inn spesielt for formalet (dyrere, tar tid, men skreddersydd). Sekundardata er allerede tilgjengelig (billigere, raskere, men kanskje ikke helt relevant). Bruk sekundardata forst for oversikt, deretter primardata for spesifikke sporsmal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Gjennomfor en forenklet PESTEL-analyse for en bransje du er interessert i.',
        hints: ['Analyser politiske, okonomiske, sosiale, teknologiske, miljo og juridiske faktorer'],
        solution: 'Eksempel for restaurantbransjen: Politisk - alkoholpolitikk, koronarestriksjoner. Okonomisk - disponibel inntekt, inflasjon. Sosialt - helsetrender, matlevering. Teknologisk - bestillingsapper, automatisering. Miljo - matsvinn, lokale ravarer. Juridisk - hygienekrav, arbeidsmiljo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Forklar hva posisjonering er og hvorfor det er viktig. Gi et eksempel pa vellykket posisjonering.',
        hints: ['Tenk pa hvordan merkevarer skiller seg ut i kundens bevissthet'],
        solution: 'Posisjonering handler om a skape en unik og verdifull plass i kundens bevissthet. Viktig fordi kunder forenkler beslutninger ved a kategorisere. Eksempel: Volvo = sikkerhet. De har konsekvent kommunisert sikkerhet i aratier, og det er forste assosiasjonen for mange.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Produkt og merkevarebygging
// ============================================================================

export const CHAPTER_MARKEDSFORING_4: TextbookChapter = {
  id: 'markedsforing-4',
  courseId: 'markedsforing',
  chapterNumber: '4',
  title: 'Produkt og merkevarebygging',
  description: 'Forsta produktutvikling, produktlivssyklus og hvordan man bygger sterke merkevarer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for produktbegrepet og produktnivaleer',
    'forklare produktlivssyklusen og dens implikasjoner',
    'analysere hva som kjennetegner sterke merkevarer',
  ],
  content: [
    {
      id: 'markedsforing-4-intro',
      type: 'text',
      content: `## Produktbegrepet

Et produkt er alt som kan tilbys til et marked for a tilfredsstille et onske eller behov. Det inkluderer fysiske varer, tjenester, opplevelser, personer, steder, organisasjoner og ideer.

**Produktnivaleer:**
- *Kjerneprodukt:* Den grunnleggende nytten/fordelen kunden kjoper
- *Forventet produkt:* Attributter kunden forventer (kvalitet, design, emballasje)
- *Utvidet produkt:* Tilleggsfordeler (garanti, service, levering)
- *Potensielt produkt:* Mulige fremtidige forbedringer

**Eksempel - hotellovernatting:**
- Kjerneprodukt: Hvile og sovn
- Forventet produkt: Rent rom, seng, bad
- Utvidet produkt: Roomservice, spa, treningsrom
- Potensielt produkt: Personalisert opplevelse med AI`,
    },
    {
      id: 'markedsforing-4-def-1',
      type: 'definition',
      title: 'Produktlivssyklusen',
      content: `Produktlivssyklusen beskriver faser et produkt gar gjennom fra lansering til det tas ut av markedet.

**1. Introduksjon:**
- Lav salgsvekst, hoye markedsforingskostnader
- Fokus pa a skape kjennskap
- Ofte negativt resultat

**2. Vekst:**
- Rask salgsokning, forbedret lonnsomhet
- Konkurrenter kommer inn
- Fokus pa a bygge markedsandel

**3. Modning:**
- Salget flater ut, konkurransen intensiveres
- Priskrig, differensiering viktig
- Fokus pa a forsvare posisjon

**4. Nedgang:**
- Salget synker, overflodig kapasitet
- Beslutning: opprettholde, hoste eller avvikle
- Fokus pa kostnadsreduksjon`,
    },
    {
      id: 'markedsforing-4-def-2',
      type: 'definition',
      title: 'Merkevare og merkeverdi',
      content: `**Hva er en merkevare?**
Et navn, symbol, design eller kombinasjon som identifiserer en tilbyders produkter og skiller dem fra konkurrentene.

**Merkevarens funksjoner:**
- For kunden: Forenkler valg, kvalitetsgaranti, selvuttrykk
- For bedriften: Differensiering, kundelojalitet, premium-prising

**Merkeverdi (brand equity):**
Den ekstra verdien en merkevare tilforer et produkt.

**Kellers merkepyramide:**
1. Merkekjennskap (hvem er du?)
2. Merkebetydning (hva er du?)
3. Merkereaksjoner (hva foler/tenker jeg om deg?)
4. Merkerelasjoner (hvilken forbindelse har vi?)

**Sterke merkevarer kjennetegnes av:**
Hoy kjennskap, positive assosiasjoner, oppfattet kvalitet, lojalitet.`,
    },
    {
      id: 'markedsforing-4-def-3',
      type: 'definition',
      title: 'Merkevarestrategi',
      content: `**Merkeutvidelse:**
Bruke et etablert merkenavn pa nye produkter. Fordel: utnytter kjennskap. Risiko: kan skade hovedmerket.

**Multimerkestrategi:**
Flere merkevarer i samme kategori. Eksempel: P&G har bade Tide og Ariel vaskemidler.

**Nye merkevarer:**
Nytt merkenavn for nye kategorier. Nodvendig nar eksisterende merkevarer ikke passer.

**Merkepersonlighet:**
Menneskelige karaktertrekk knyttet til merket. Eksempel: Apple = kreativ og innovativ.

**Merkeposisjonering:**
Definere hva merket star for i kundens bevissthet. Bestar av malgruppe, referanseramme, differensieringspunkt.`,
    },
    {
      id: 'markedsforing-4-example-1',
      type: 'example',
      title: 'Eksempel: Apple som merkevare',
      problem: 'Hva gjor Apple til en sterk merkevare?',
      solution: `**Merkekjennskap:**
Eplet-logoen er en av verdens mest gjenkjennelige. Hoy uhjulpet kjennskap.

**Merkeassosiasjoner:**
Innovasjon, design, enkelhet, premium, kreativitet, status.

**Oppfattet kvalitet:**
Oppfattes som hoykvalitet selv om tekniske spesifikasjoner ikke alltid er best.

**Merkepersonlighet:**
Kreativ, innovativ, elegant, selvsikker, premiumorientert.

**Kundelojalitet:**
Ekstremt lojale kunder. Apple-okosystemet gjor det vanskelig a bytte.

**Merkeverdi:**
Kan ta premium-pris. Kunder star i ko for nye produkter. Verdsatt som verdens mest verdifulle merkevare.`,
    },
    {
      id: 'markedsforing-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-4-ex-1',
        number: '4.1',
        type: 'classic',
        task: 'Forklar de fire produktnivalene med et selvvalgt eksempel.',
        hints: ['Kjerneprodukt, forventet, utvidet, potensielt'],
        solution: 'Eksempel - smarttelefon: Kjerneprodukt - kommunikasjon. Forventet - skjerm, kamera, batteri. Utvidet - garanti, kundeservice, gratis sky-lagring. Potensielt - fremtidig helseovervaking, AR-funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-4-ex-2',
        number: '4.2',
        type: 'classic',
        task: 'Beskriv produktlivssyklusen og forklar hvilke markedsforingsstrategier som passer i hver fase.',
        hints: ['Introduksjon, vekst, modning, nedgang'],
        solution: 'Introduksjon: Bygg kjennskap, informativ reklame. Vekst: Bygg merkevare, utvidelse. Modning: Differensier, forsvar posisjon, finn nye segmenter. Nedgang: Kutt kostnader, hoste profitt, eller revitaliser produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Hva er merkeverdi, og hvorfor er det viktig for en bedrift?',
        hints: ['Tenk pa verdi utover det fysiske produktet'],
        solution: 'Merkeverdi er den ekstra verdien et merkenavn tilforer. Viktig fordi det muliggjor premium-prising, skaper kundelojalitet, gjor markedsforing mer effektiv, og gir konkurransefortrinn. Sterke merkevarer er mer motstandsdyktige mot konkurranse og kriser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Analyser merkepersonligheten til en kjent merkevare. Hvilke menneskelige egenskaper forbinder du med merket?',
        hints: ['Tenk pa merket som en person'],
        solution: 'Eksempel Red Bull: Energisk, eventyrlysten, ekstrem, ungdommelig, modig, ukonvensjonell. Dette gjenspeiles i sponsing av ekstremsport, slagordet "gir deg vinger", og reklamer med humor og action.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Hva er fordelene og risikoene ved merkeutvidelse? Gi et eksempel pa vellykket og mislykket merkeutvidelse.',
        hints: ['Tenk pa nar merkenavnet hjelper eller skader'],
        solution: 'Fordeler: Utnytter kjennskap, lavere markedsforingskostnad, umiddelbar troverdighet. Risiko: Kan skade hovedmerket, forvirre kunder, utvanne merkeverdien. Vellykket: Apple fra PC til iPhone. Mislykket: Colgate kjokkenutstyr - tannkrem-assosiasjoner passet ikke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Pris og distribusjon
// ============================================================================

export const CHAPTER_MARKEDSFORING_5: TextbookChapter = {
  id: 'markedsforing-5',
  courseId: 'markedsforing',
  chapterNumber: '5',
  title: 'Pris og distribusjon',
  description: 'Forsta prissetting og distribusjonsstrategier for effektiv markedsforing.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for ulike prisstrategier',
    'forklare faktorer som pavirker prisbeslutninger',
    'beskrive distribusjonskanaler og deres funksjoner',
  ],
  content: [
    {
      id: 'markedsforing-5-intro',
      type: 'text',
      content: `## Prissetting

Pris er det eneste elementet i markedsmiksen som genererer inntekter - de andre representerer kostnader. Prissetting er derfor kritisk for lonnsomhet.

**Faktorer som pavirker pris:**
- *Interne:* Kostnader, mal, markedsforingsstrategi
- *Eksterne:* Marked, etterspørsel, konkurranse, regulering

**Prisens rolle:**
- Signal om kvalitet
- Verktoy for posisjonering
- Konkurransevaapen
- Inntektskilde

**Prisens psykologi:**
Kunder oppfatter pris relativt, ikke absolutt. 99 kr foles mye billigere enn 100 kr. Hoye priser kan signalisere kvalitet (Veblen-effekt).`,
    },
    {
      id: 'markedsforing-5-def-1',
      type: 'definition',
      title: 'Prisstrategier',
      content: `**Kostnadsbasert prissetting:**
Pris = kostnad + paslag. Enkel, men ignorerer etterspørsel og konkurranse.

**Verdibasert prissetting:**
Pris basert pa kundens oppfattede verdi. Krever god forstaelse av kunden.

**Konkurransebasert prissetting:**
Pris satt i forhold til konkurrenter. Under, lik eller over.

**Penetrasjonsprising:**
Lav pris for a oppna rask markedsandel. Brukes ved nye produkter.

**Skummingsprising:**
Hoy pris ved lansering, senkes over tid. Utnytter betalingsvillighet hos tidlige brukere.

**Dynamisk prissetting:**
Pris endres basert pa etterspørsel, tid, kunde. Vanlig i reiseliv og e-handel.`,
    },
    {
      id: 'markedsforing-5-def-2',
      type: 'definition',
      title: 'Priselastisitet',
      content: `**Definisjon:**
Priselastisitet maler hvor sensitiv ettersporselen er for prisendringer.

**Formel:**
Priselastisitet = (% endring i etterspørsel) / (% endring i pris)

**Elastisk etterspørsel (> 1):**
Stor reaksjon pa prisendring. Prisreduksjon oker omsetning.

**Uelastisk etterspørsel (< 1):**
Liten reaksjon pa prisendring. Prisokning oker omsetning.

**Faktorer som pavirker elastisitet:**
- Tilgjengelighet av substitutter
- Andel av budsjett
- Nodvendighet vs. luksus
- Tid til a tilpasse seg`,
    },
    {
      id: 'markedsforing-5-def-3',
      type: 'definition',
      title: 'Distribusjon og kanaler',
      content: `**Hva er distribusjon?**
Alle aktiviteter for a gjore produktet tilgjengelig for sluttkunden.

**Distribusjonskanaler:**
- *Direkte:* Produsent selger direkte til forbruker
- *Indirekte:* Via mellomledd (grossist, detaljist)

**Kanalintensitet:**
- *Intensiv:* Mange utsalgssteder (dagligvarer)
- *Selektiv:* Utvalgte forhandlere (elektronikk)
- *Eksklusiv:* Svart fa forhandlere (luksus)

**Omnikanal:**
Sømløs kundeopplevelse pa tvers av fysiske og digitale kanaler.

**Kanalfunksjoner:**
Informasjon, promosjon, kontakt, tilpasning, forhandling, fysisk distribusjon, finansiering, risikotaking.`,
    },
    {
      id: 'markedsforing-5-example-1',
      type: 'example',
      title: 'Eksempel: Prisstrategier i praksis',
      problem: 'Hvordan bruker ulike bedrifter prisstrategier?',
      solution: `**Apple - Skummingsprising:**
Lanserer nye iPhone til hoy pris. Tidlige brukere betaler premium. Pris senkes gradvis.

**IKEA - Kostnadsbasert med verdi:**
Fokus pa lave kostnader gjennom flatpakking og selvmontering. Verdi for pengene.

**Ryanair - Penetrasjon/Low-cost:**
Lave grunnpriser, ekstra betaling for tillegg. Tar markedsandeler.

**Uber - Dynamisk prissetting:**
Surge pricing ved hoy etterspørsel. Optimerer tilbud og etterspørsel.

**Rolex - Premium-prising:**
Hoye priser signaliserer eksklusivitet og kvalitet. Knapphet opprettholdes.`,
    },
    {
      id: 'markedsforing-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-5-ex-1',
        number: '5.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom penetrasjonsprising og skummingsprising. Nar passer hver strategi?',
        hints: ['Tenk pa ulike markedssituasjoner'],
        solution: 'Penetrasjon: Lav pris for rask markedsandel. Passer nar prissensitivt marked, stordriftsfordeler, og man vil holde konkurrenter ute. Skumming: Hoy startpris, senkes over tid. Passer ved innovasjoner, statusbevisste kunder, og nar man vil dekke FoU-kostnader raskt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-5-ex-2',
        number: '5.2',
        type: 'classic',
        task: 'Hva er priselastisitet, og hvordan kan bedrifter bruke denne kunnskapen?',
        hints: ['Tenk pa hvordan etterspørsel reagerer pa pris'],
        solution: 'Priselastisitet maler hvor mye ettersporselen endres ved prisendring. Ved elastisk etterspørsel bor man vare forsiktig med prisokninger. Ved uelastisk kan man oke priser for hoyre inntekt. Viktig for prisbeslutninger og kampanjeplanlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom intensiv, selektiv og eksklusiv distribusjon med eksempler.',
        hints: ['Tenk pa ulike produkttyper'],
        solution: 'Intensiv: Produktet i flest mulig utsalgssteder (Coca-Cola, tyggegummi). Selektiv: Utvalgte forhandlere som oppfyller kriterier (Samsung-telefoner). Eksklusiv: Svart begrenset antall (Rolex, Tesla). Valget avhenger av produkttype, merkestrategi og kundeforventninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Hva er omnikanal-distribusjon, og hvorfor er det viktig i dag?',
        hints: ['Tenk pa kundens reise pa tvers av kanaler'],
        solution: 'Omnikanal er somloes integrering av alle salgskanaler (butikk, nett, app, sosiale medier). Viktig fordi kunder forventer a kunne starte i en kanal og fullföre i en annen. Gir bedre kundeopplevelse, mer data, og okt salg. Eksempel: Kjop online, hent i butikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved dynamisk prissetting fra bade bedriftens og kundens perspektiv.',
        hints: ['Tenk pa rettferdighet, effektivitet og relasjoner'],
        solution: 'Bedriften: Fordeler - optimerer inntekter, balanserer tilbud/etterspørsel. Ulemper - komplekst, kan skade tilliten. Kunden: Fordeler - kan fa lave priser ved lav etterspørsel. Ulemper - oppfattes som urettferdig, vanskelig a planlegge. Viktig med transparens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Markedskommunikasjon
// ============================================================================

export const CHAPTER_MARKEDSFORING_6: TextbookChapter = {
  id: 'markedsforing-6',
  courseId: 'markedsforing',
  chapterNumber: '6',
  title: 'Markedskommunikasjon',
  description: 'Forsta hvordan bedrifter kommuniserer med kunder gjennom ulike kanaler og virkemidler.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for elementer i kommunikasjonsmiksen',
    'planlegge integrert markedskommunikasjon',
    'vurdere effekten av ulike kommunikasjonskanaler',
  ],
  content: [
    {
      id: 'markedsforing-6-intro',
      type: 'text',
      content: `## Markedskommunikasjon

Markedskommunikasjon omfatter alle mater en bedrift kommuniserer med sine malgrupper pa for a informere, overtale og minne om produkter og merkevarer.

**Kommunikasjonsprosessen:**
- Avsender: Bedriften som sender budskapet
- Koding: Overforsel av budskap til symboler
- Kanal: Medium som brukes
- Dekoding: Mottakers tolkning
- Mottaker: Malgruppa
- Respons: Mottakers reaksjon
- Stoy: Forstyrrelser i prosessen

**Mal for markedskommunikasjon:**
- Skape oppmerksomhet
- Bygge kjennskap
- Pavirke holdninger
- Utlose handling (kjop)`,
    },
    {
      id: 'markedsforing-6-def-1',
      type: 'definition',
      title: 'Kommunikasjonsmiksen',
      content: `**Reklame:**
Betalt, ikke-personlig kommunikasjon via massemedier. TV, radio, print, digital.

**Sales promotion (salgsfremmende tiltak):**
Kortsiktige insentiver for a stimulere kjop. Kuponger, rabatter, konkurranser.

**PR og publicity:**
Bygge gode relasjoner og omdamme. Pressemelding, events, sponsing.

**Personlig salg:**
Direkte interaksjon mellom selger og kunde. B2B, komplekse produkter.

**Direkte markedsforing:**
Direkte kontakt med utvalgte kunder. E-post, direktereklame, telefonmarkedsforing.

**Digital markedsforing:**
Kommunikasjon via digitale kanaler. Sosiale medier, sok, display, innhold.`,
    },
    {
      id: 'markedsforing-6-def-2',
      type: 'definition',
      title: 'Integrert markedskommunikasjon (IMC)',
      content: `**Definisjon:**
Koordinering av alle kommunikasjonsverktoy for a levere et klart, konsistent og overbevisende budskap.

**Prinsipper for IMC:**
- Konsistens i budskap pa tvers av kanaler
- Synergi mellom kommunikasjonsverktoyene
- Kundesentrert tilnaerming
- Langsiktig relasjonsbygging

**Fordeler med IMC:**
- Sterkere merkevareidentitet
- Mer effektiv ressursbruk
- Bedre kundeopplevelse
- Hoyre avkastning pa kommunikasjon

**Utfordringer:**
- Krever koordinering pa tvers av avdelinger
- Vanskelig a male total effekt
- Ulike kanaler har ulike styrker`,
    },
    {
      id: 'markedsforing-6-def-3',
      type: 'definition',
      title: 'AIDA-modellen',
      content: `AIDA beskriver trinnene en kunde gar gjennom fra forste kontakt til kjop.

**Attention (Oppmerksomhet):**
Fa kundens oppmerksomhet. Kreativ reklame, overraskende budskap.

**Interest (Interesse):**
Vekke interesse for produktet. Relevant informasjon, fordeler.

**Desire (Onske):**
Skape et onske om produktet. Emosjonell appell, sosial bevis.

**Action (Handling):**
Fa kunden til a handle. Tydelig oppfordring, enkel kjopsprosess.

**Utvidet modell:**
Noen legger til Satisfaction (tilfredshet) for a inkludere etterkopatferd og lojalitet.`,
    },
    {
      id: 'markedsforing-6-example-1',
      type: 'example',
      title: 'Eksempel: Nikes kommunikasjonsmiks',
      problem: 'Hvordan bruker Nike kommunikasjonsmiksen?',
      solution: `**Reklame:**
Kraftfulle TV-reklamer med kjente idrettsutovere. "Just Do It"-kampanjer.

**Sponsing/PR:**
Sponser toppidrettsutovere (LeBron James, Cristiano Ronaldo), lag og events.

**Sosiale medier:**
Aktiv pa Instagram, Twitter, YouTube med inspirerende innhold.

**Salgsfremmende:**
Medlemsprogram (Nike+), eksklusive lanseringer, Black Friday-tilbud.

**Personlig salg:**
Nike Town-butikker med eksperter og personlig service.

**IMC i praksis:**
Alle kanaler formidler samme budskap: inspirere til aktiv livsstil.`,
    },
    {
      id: 'markedsforing-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-1',
        number: '6.1',
        type: 'classic',
        task: 'Beskriv de seks elementene i kommunikasjonsmiksen og gi et eksempel pa hver.',
        hints: ['Reklame, salgsfremmende, PR, personlig salg, direkte, digital'],
        solution: 'Reklame: TV-spot for Grandiosa. Salgsfremmende: 3 for 2 pa Rema. PR: Telenor sponser skilandslaget. Personlig salg: Bilselger hos BMW. Direkte: Nyhetsbrev fra Komplett. Digital: Instagram-annonser for H&M.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-2',
        number: '6.2',
        type: 'classic',
        task: 'Forklar AIDA-modellen og gi et eksempel pa hvordan en bedrift kan bruke den i en kampanje.',
        hints: ['Attention, Interest, Desire, Action'],
        solution: 'Eksempel ny treningsapp: Attention - ioyefallende annonsebilde med resultat. Interest - informasjon om funksjoner og brukervennlighet. Desire - testimonials og gratis proveperiode. Action - "Last ned na" med direkte lenke til App Store.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Hva er integrert markedskommunikasjon (IMC) og hvorfor er det viktig?',
        hints: ['Tenk pa konsistens og synergi'],
        solution: 'IMC er koordinering av alle kommunikasjonsaktiviteter for et konsistent budskap. Viktig fordi: 1) Kunder mater merket i mange kanaler, 2) Konsistens bygger tillit, 3) Synergier gjor kommunikasjon mer effektiv, 4) Reduserer forvirring, 5) Bedre ressursbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Sammenlign reklame og PR som kommunikasjonsverktoy. Hva er styrker og svakheter ved hver?',
        hints: ['Tenk pa kontroll, troverdighet og kostnad'],
        solution: 'Reklame: Styrker - full kontroll over budskap, kan nå mange. Svakheter - dyrt, lavere troverdighet, folk unngår. PR: Styrker - hoyere troverdighet, billigere, kan skape buzz. Svakheter - mindre kontroll, usikker dekning, vanskelig a male.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Planlegg en enkel kommunikasjonskampanje for et produkt du velger. Hvilke kanaler vil du bruke og hvorfor?',
        hints: ['Definer mal, malgruppe og budskap forst'],
        solution: 'Eksempel ny energidrikk for studenter: Mal - kjennskap og proveversion. Malgruppe - studenter 18-25. Kanaler: Instagram/TikTok (der de er), campus-sampling (prov produktet), influencer-samarbeid (troverdighet), Spotify-annonser (nar de studerer). Budskap: "Energi til eksamen."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-6-ex-6',
        number: '6.6',
        type: 'classic',
        task: 'Hva er stoy i kommunikasjonsprosessen, og hvordan kan markedsforere redusere den?',
        hints: ['Tenk pa alt som forstyrrer budskapet'],
        solution: 'Stoy er alt som forstyrrer kommunikasjonen: konkurrerende reklamer, distraksjoner, fordommer, kulturforskjeller, tekniske problemer. Reduseres ved: enkle og tydelige budskap, repetisjon, valg av riktig kanal, tilpasning til malgruppen, testing av budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Digital markedsforing
// ============================================================================

export const CHAPTER_MARKEDSFORING_7: TextbookChapter = {
  id: 'markedsforing-7',
  courseId: 'markedsforing',
  chapterNumber: '7',
  title: 'Digital markedsforing',
  description: 'Forsta digitale markedsforingskanaler, strategier og maling av digital effekt.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjore rede for sentrale digitale markedsforingskanaler',
    'forklare prinsipper for innholdsmarkedsforing og SEO',
    'analysere og male digital markedsforingseffekt',
  ],
  content: [
    {
      id: 'markedsforing-7-intro',
      type: 'text',
      content: `## Digital markedsforing

Digital markedsforing omfatter all markedsforingsaktivitet som bruker digitale kanaler for a na og engasjere kunder.

**Hvorfor digital markedsforing?**
- Kunder tilbringer mye tid online
- Mulighet for malrettet kommunikasjon
- Malbar effekt i sanntid
- Ofte lavere kostnad enn tradisjonelle medier
- Toveis kommunikasjon og engasjement

**Digitalt landskap:**
- Sosiala medier (Facebook, Instagram, TikTok, LinkedIn)
- Sokemotorer (Google, Bing)
- E-post og nyhetsbrev
- Egne nettsider og apper
- Videoplatformer (YouTube, Vimeo)
- Podcaster og streaming`,
    },
    {
      id: 'markedsforing-7-def-1',
      type: 'definition',
      title: 'SEO og SEM',
      content: `**SEO (Search Engine Optimization):**
Optimering for a rangere hoyt i organiske sokeresultater.

*On-page SEO:*
- Relevante nokkelord i innhold
- Teknisk optimering (hastighet, mobilvennlighet)
- Kvalitetsinnhold
- Brukervennlig struktur

*Off-page SEO:*
- Lenker fra andre nettsider (backlinks)
- Sosiale signaler
- Omdamme og autoritet

**SEM (Search Engine Marketing):**
Betalt sokemotorannonsering (Google Ads, Bing Ads).

*Betalingsmodeller:*
- CPC (Cost Per Click)
- CPM (Cost Per Mille/1000 visninger)
- CPA (Cost Per Action)`,
    },
    {
      id: 'markedsforing-7-def-2',
      type: 'definition',
      title: 'Sosiale medier-markedsforing',
      content: `**Organisk innhold:**
Ikke-betalt innhold pa bedriftens profiler. Bygger fellesskap og engasjement.

**Betalt annonsering:**
Malrettede annonser basert pa demografi, interesser, atferd.

**Plattformvalg:**
- *Facebook:* Bred malgruppe, lokal markedsforing
- *Instagram:* Visuelt, yngre malgrupper, livsstil
- *TikTok:* Gen Z, underholdning, viral potensial
- *LinkedIn:* B2B, profesjonelt, rekruttering
- *X/Twitter:* Nyheter, kundeservice, meningsdannere
- *YouTube:* Video, opplaering, underholdning

**Influencer-markedsforing:**
Samarbeid med personer med stor folgerbase og troverdighet.`,
    },
    {
      id: 'markedsforing-7-def-3',
      type: 'definition',
      title: 'Innholdsmarkedsforing',
      content: `**Definisjon:**
Skape og distribuere verdifullt, relevant innhold for a tiltrekke og engasjere en definert malgruppe.

**Innholdstyper:**
- Blogginnlegg og artikler
- Videoer og webinarer
- Podcaster
- Infografikk
- E-boker og guider
- Case studies
- Sosiale medier-innhold

**Prinsipper:**
- Fokus pa kundens behov, ikke salg
- Konsistent publisering
- Kvalitet over kvantitet
- Tilpasset til kundereisen

**Content funnel:**
- Top of funnel (TOFU): Kjennskap
- Middle of funnel (MOFU): Vurdering
- Bottom of funnel (BOFU): Beslutning`,
    },
    {
      id: 'markedsforing-7-def-4',
      type: 'definition',
      title: 'Digital analyse og KPIer',
      content: `**Viktige KPIer:**
- *Trafikk:* Besokende, sidevisninger, kilder
- *Engasjement:* Tid pa side, bounce rate, interaksjoner
- *Konvertering:* Konverteringsrate, kostnad per konvertering
- *ROI:* Avkastning pa markedsforingsinvestering

**Analyseverktoy:**
- Google Analytics
- Sosiale medier-innsikt
- Markedsforingsplattformer

**Attribution:**
Tilordne verdi til ulike kontaktpunkter i kundereisen. Forste klikk, siste klikk, lineaer, tidsjustert.

**A/B-testing:**
Teste to varianter for a se hva som fungerer best. Overskrifter, bilder, CTA-knapper.`,
    },
    {
      id: 'markedsforing-7-example-1',
      type: 'example',
      title: 'Eksempel: Innholdsmarkedsforing i praksis',
      problem: 'Hvordan bruker HubSpot innholdsmarkedsforing?',
      solution: `**Strategi:**
HubSpot tilbyr gratis, verdifullt innhold for a tiltrekke potensielle kunder.

**Innholdstyper:**
- Blogg med tusenvis av artikler om markedsforing og salg
- Gratis e-boker, maler og verktoy
- Webinarer og online kurs (HubSpot Academy)
- Podcaster
- YouTube-videoer

**Funnel:**
- TOFU: Blogginnlegg som svarer pa sporsmal
- MOFU: E-boker og guider mot e-postregistrering
- BOFU: Produktdemoer og case studies

**Resultat:**
Enormt organisk trafikk, leads og merkevareautoritet.`,
    },
    {
      id: 'markedsforing-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-7-ex-1',
        number: '7.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom SEO og SEM. Nar bor en bedrift bruke hver strategi?',
        hints: ['Organisk vs. betalt sokemotormarkedsforing'],
        solution: 'SEO er organisk rangering gjennom optimering (gratis, tar tid, langsiktig). SEM er betalt annonsering i sokemotorer (umiddelbar effekt, koster per klikk). Bruk SEO for langsiktig synlighet. Bruk SEM for raske resultater, nye produkter, konkurransedyktige nokkelord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-7-ex-2',
        number: '7.2',
        type: 'classic',
        task: 'Hvilke sosiale medier-plattformer passer for ulike malgrupper og formal? Gi eksempler.',
        hints: ['Tenk pa demografi og innholdstype'],
        solution: 'LinkedIn: B2B, profesjonelle, rekruttering. Instagram: Yngre, visuelt, livsstil/mote. TikTok: Gen Z, underholdning, viral. Facebook: Bredere alder, lokal markedsforing, grupper. YouTube: Alle aldre, opplaering, underholdning. Valg avhenger av malgruppe og budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Hva er innholdsmarkedsforing, og hvorfor er det effektivt?',
        hints: ['Tenk pa verdi, tillit og langsiktige relasjoner'],
        solution: 'Innholdsmarkedsforing er a skape verdifullt innhold for a tiltrekke kunder. Effektivt fordi: 1) Bygger tillit og autoritet, 2) Tiltrekker organisk trafikk, 3) Kunder soker informasjon selv, 4) Lavere kostnad per lead over tid, 5) Innhold kan gjenbrukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Nevn fem viktige KPIer for digital markedsforing og forklar hva de maler.',
        hints: ['Trafikk, engasjement, konvertering'],
        solution: '1) Sidevisninger - antall ganger sider sees. 2) Bounce rate - andel som forlater etter en side. 3) Konverteringsrate - andel som utforer onsket handling. 4) CPC - kostnad per klikk pa annonser. 5) ROI - avkastning pa investering. Valg av KPI avhenger av mal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Hva er influencer-markedsforing, og hva bor man tenke pa nar man velger influencere?',
        hints: ['Troverdighet, relevans, rekkevidde'],
        solution: 'Influencer-markedsforing er samarbeid med personer med stor og engasjert folgerbase. Vurder: 1) Relevans for produktet, 2) Autentisitet og troverdighet, 3) Engasjementsrate (ikke bare folgerantal), 4) Malgruppematch, 5) Tidligere samarbeid, 6) Kostnadseffektivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Ledelse og organisasjon
// ============================================================================

export const CHAPTER_MARKEDSFORING_8: TextbookChapter = {
  id: 'markedsforing-8',
  courseId: 'markedsforing',
  chapterNumber: '8',
  title: 'Ledelse og organisasjon',
  description: 'Forsta grunnleggende ledelsesteorier, organisasjonsstrukturer og teamarbeid.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for ulike lederstiler og nar de passer',
    'forklare grunnleggende organisasjonsteorier',
    'analysere faktorer som pavirker motivasjon og teamarbeid',
  ],
  content: [
    {
      id: 'markedsforing-8-intro',
      type: 'text',
      content: `## Hva er ledelse?

Ledelse handler om a pavirke mennesker til a arbeide mot felles mal. En leder ma bade administrere (planlegge, organisere, kontrollere) og lede (inspirere, motivere, utvikle).

**Ledelse vs. administrasjon:**
- Ledelse: Gjore de riktige tingene (visjon, retning)
- Administrasjon: Gjore tingene riktig (effektivitet, systemer)

**Lederens roller (Mintzberg):**
- *Mellommenneskelige:* Frontfigur, leder, kontaktskaper
- *Informasjon:* Overvaker, informasjonsspreder, talsmann
- *Beslutning:* Entreprenør, problemloser, ressursfordeler, forhandler

**Viktige lederegenskaper:**
Kommunikasjon, empati, besluttsomhet, integritet, selvbevissthet.`,
    },
    {
      id: 'markedsforing-8-def-1',
      type: 'definition',
      title: 'Lederstiler',
      content: `**Autoritaer ledelse:**
Lederen tar alle beslutninger. Effektiv i kriser, men kan hemme kreativitet.

**Demokratisk ledelse:**
Medarbeidere involveres i beslutninger. Oker engasjement, men kan vare tregt.

**Laissez-faire:**
Minimal innblanding fra leder. Passer for selvstendige eksperter, risiko for retningslashet.

**Situasjonsbestemt ledelse (Hersey & Blanchard):**
Tilpass lederstil til medarbeidernes modenhet.
- S1 Instruerende: Lav kompetanse, hoy motivasjon
- S2 Selgende: Noe kompetanse, varierende motivasjon
- S3 Deltagende: Hoy kompetanse, lav motivasjon
- S4 Delegerende: Hoy kompetanse, hoy motivasjon

**Transformasjonsledelse:**
Inspirerer og motiverer til a overgå forventninger. Visjonaer, karismatisk.`,
    },
    {
      id: 'markedsforing-8-def-2',
      type: 'definition',
      title: 'Motivasjonsteori',
      content: `**Maslows behovshierarki:**
Fysiologiske, trygghet, sosiale, anerkjennelse, selvrealisering. Lavere behov ma dekkes forst.

**Herzbergs tofaktorteori:**
- *Hygienefaktorer:* Lonn, arbeidsforhold, sikkerhet. Fravear skaper misnoeye.
- *Motivasjonsfaktorer:* Prestasjon, anerkjennelse, ansvar, vekst. Tilstedeværelse skaper tilfredshet.

**Selvbestemmelsesteorien (Deci & Ryan):**
Tre grunnleggende behov:
- Autonomi: Kontroll over egen situasjon
- Kompetanse: Mestring og utvikling
- Tilhorighet: Sosiale relasjoner

**McGregors X og Y:**
- Teori X: Mennesker er late, ma kontrolleres
- Teori Y: Mennesker er motiverte, soker ansvar`,
    },
    {
      id: 'markedsforing-8-def-3',
      type: 'definition',
      title: 'Organisasjonsstruktur',
      content: `**Linjeorganisasjon:**
Hierarkisk struktur med klar kommandolinje. Enkel, tydelig ansvar, men rigid.

**Funksjonsorganisasjon:**
Organisert etter spesialistfunksjoner (markedsføring, okonomi, produksjon).

**Divisjonsorganisasjon:**
Delt etter produkt, geografi eller kunde. Fleksibel, men kan skape siloer.

**Matriseorganisasjon:**
Kombinerer funksjons- og divisjonsstruktur. Fleksibel, men kompleks.

**Nettverksorganisasjon:**
Los struktur med samarbeid mellom uavhengige enheter. Fleksibel, men krever koordinering.

**Organisasjonskultur:**
Delte verdier, normer og antakelser. "Slik gjor vi ting her." Pavirker atferd og resultater.`,
    },
    {
      id: 'markedsforing-8-example-1',
      type: 'example',
      title: 'Eksempel: Google og organisasjonskultur',
      problem: 'Hvordan pavirker Googles organisasjonskultur innovasjon?',
      solution: `**Googles kulturelle trekk:**
- "20%-tid": Ansatte kan bruke tid pa egne prosjekter
- Flat struktur: Lavt hierarki, apne dorer
- Psykologisk trygghet: Trygt a ta risiko og feile
- Datafokus: Beslutninger basert pa data

**Innovasjonsfremmende elementer:**
- Gmail og Google News kom fra "20%-tid"
- Tverrfaglige team med ulik kompetanse
- Rask prototyping og testing
- Toleranse for feil som laeringskilde

**Utfordringer:**
- Vanskelig a skalere kulturen
- Kan skape kaos uten nok struktur
- Ikke alle medarbeidere trives med autonomi`,
    },
    {
      id: 'markedsforing-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-8-ex-1',
        number: '8.1',
        type: 'classic',
        task: 'Beskriv tre ulike lederstiler og diskuter fordeler og ulemper ved hver.',
        hints: ['Autoritaer, demokratisk, laissez-faire'],
        solution: 'Autoritaer: Fordeler - rask beslutning, tydelig. Ulemper - lav motivasjon, kreativitet. Demokratisk: Fordeler - engasjement, bedre beslutninger. Ulemper - tar tid, kan vare uklar. Laissez-faire: Fordeler - autonomi for eksperter. Ulemper - retningslashet, uklarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-8-ex-2',
        number: '8.2',
        type: 'classic',
        task: 'Forklar Herzbergs tofaktorteori og gi eksempler pa hygiene- og motivasjonsfaktorer.',
        hints: ['Hva skaper misnoeye vs. tilfredshet'],
        solution: 'Herzberg skiller mellom faktorer som hindrer misnoeye (hygiene) og skaper tilfredshet (motivasjon). Hygiene: Lonn, arbeidsforhold, jobbtrygghet, ledelse. Motivasjon: Prestasjon, anerkjennelse, ansvar, vekst. Implikasjon: God lonn holder ikke misnoeye borte, men skaper ikke motivasjon alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Hva er situasjonsbestemt ledelse, og hvorfor er det nyttig?',
        hints: ['Tilpasse stil til medarbeidernes modenhet'],
        solution: 'Situasjonsbestemt ledelse tilpasser lederstil til medarbeidernes kompetanse og motivasjon. Nye ansatte trenger instruksjon, erfarne kan delegeres til. Nyttig fordi ingen lederstil passer alle situasjoner, og det hjelper ledere a vare fleksible og effektive med ulike medarbeidere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Sammenlign funksjonsorganisasjon og divisjonsorganisasjon. Nar passer hver struktur?',
        hints: ['Tenk pa spesialisering vs. fleksibilitet'],
        solution: 'Funksjonsorganisasjon: Organisert etter funksjoner (salg, produksjon). Passer for mindre bedrifter, stordriftsfordeler. Divisjon: Organisert etter produkt/marked. Passer for store, diversifiserte bedrifter. Funksjon gir spesialisering men siloer, divisjon gir fleksibilitet men dobbeltarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Hva er organisasjonskultur, og hvordan kan den pavirke bedriftens resultater?',
        hints: ['Verdier, normer og "slik gjor vi ting her"'],
        solution: 'Organisasjonskultur er delte verdier, normer og antakelser. Pavirker resultater gjennom: medarbeidertilfredshet og turnover, innovasjon og risikovilje, kundeservice, tilpasningsevne. Sterk kultur kan vare konkurransefordel, men kan ogsa hindre endring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Etikk og baerekraft i markedsforing
// ============================================================================

export const CHAPTER_MARKEDSFORING_9: TextbookChapter = {
  id: 'markedsforing-9',
  courseId: 'markedsforing',
  chapterNumber: '9',
  title: 'Etikk og baerekraft i markedsforing',
  description: 'Forsta etiske utfordringer og baerekraftig praksis i markedsforing.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for etiske problemstillinger i markedsforing',
    'analysere baerekraftig markedsforing og bedrifters samfunnsansvar',
    'vurdere markedsforing kritisk fra et forbrukerperspektiv',
  ],
  content: [
    {
      id: 'markedsforing-9-intro',
      type: 'text',
      content: `## Etikk i markedsforing

Markedsforing pavirker menneskers valg og samfunnet. Etisk markedsforing handler om a gjore det som er riktig, ikke bare det som er lovlig eller lonnsomt.

**Etiske utfordringer i markedsforing:**
- Villedende reklame og overdrivelser
- Utnyttelse av sarbare grupper (barn, eldre)
- Personvern og databruk
- Skjult reklame og manipulasjon
- Baerekraft og miljopastand
- Prisdiskriminering

**Hvorfor etikk er viktig:**
- Bygger tillit og omdamme
- Unnga skandaler og boikott
- Tiltrekker bevisste forbrukere
- Lovregulering som minimumskrav
- Langsiktig lonnsomt`,
    },
    {
      id: 'markedsforing-9-def-1',
      type: 'definition',
      title: 'Bedrifters samfunnsansvar (CSR)',
      content: `**Definisjon:**
Bedrifters frivillige integrering av sosiale og miljomessige hensyn i virksomheten.

**Carrolls CSR-pyramide:**
1. *Okonomisk ansvar:* Vaere lonnsom (fundament)
2. *Juridisk ansvar:* Folge lover og regler
3. *Etisk ansvar:* Gjore det som er rett
4. *Filantropisk ansvar:* Bidra til samfunnet

**Fordeler med CSR:**
- Bedre omdamme og merkevare
- Tiltrekker og beholder talent
- Reduserer risiko
- Kan gi konkurransefortrinn
- Bidrar til en bedre verden

**Kritikk av CSR:**
"Greenwashing" - overfladisk CSR for a se bra ut uten reell endring.`,
    },
    {
      id: 'markedsforing-9-def-2',
      type: 'definition',
      title: 'Baerekraftig markedsforing',
      content: `**Definisjon:**
Markedsforing som tilfredsstiller navarende behov uten a odelegge for fremtidige generasjoners muligheter.

**Elementer:**
- *Gronn markedsforing:* Miljoansvar i produkter og kommunikasjon
- *Sosial markedsforing:* Fremme sosiale mal (folkehelse, sikkerhet)
- *Sirkulaer okonomi:* Designet for gjenbruk, reparasjon, resirkulering

**Baerekraftig produkt:**
- Miljovennlige materialer
- Energieffektiv produksjon
- Lang levetid
- Mulig a resirkulere
- Rettferdige arbeidsforhold

**Kommunikasjon:**
Transparent og aerlig om baerekraftsinnsats. Unnga greenwashing.`,
    },
    {
      id: 'markedsforing-9-def-3',
      type: 'definition',
      title: 'Forbrukerrettigheter og regulering',
      content: `**Forbrukerrettigheter:**
- Rett til sikkerhet
- Rett til informasjon
- Rett til a velge
- Rett til a bli hort
- Rett til opplaering
- Rett til et sunt miljo

**Norsk regulering:**
- Markedsforingsloven: Forbyr villedende reklame
- Forbrukerkjopsloven: Rettigheter ved kjop
- Personopplysningsloven/GDPR: Personvern
- Forbrukertilsynet: Handhever reglene

**Bransjeregulering:**
- Norsk Reklameforbund
- Etiske retningslinjer
- Selvregulering og etiske rad`,
    },
    {
      id: 'markedsforing-9-example-1',
      type: 'example',
      title: 'Eksempel: Patagonia og baerekraft',
      problem: 'Hvordan integrerer Patagonia baerekraft i markedsforingen?',
      solution: `**Patagonias tilnaerming:**
- "Dont Buy This Jacket"-kampanje oppfordret til mindreforbruk
- Gir 1% av salget til miljoorganisasjoner
- Bruker resirkulerte materialer og okologisk bomull
- Tilbyr reparasjonsservice for a forlenge levetiden
- Aapen om leverandorkjeden

**Autentisitet:**
Baerekraft er kjernen i forretningsmodellen, ikke bare markedsforing. Grunnlegger ga bort eierskap til miljomal.

**Resultater:**
Lojale kunder som deler verdiene. Hoy betalingsvilje. Sterk merkevare tross kontroversielle budskap.

**Laerdom:**
Autentisitet og konsistens mellom handling og budskap.`,
    },
    {
      id: 'markedsforing-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-9-ex-1',
        number: '9.1',
        type: 'classic',
        task: 'Gi tre eksempler pa etiske utfordringer i markedsforing og forklar hvorfor de er problematiske.',
        hints: ['Tenk pa villedende reklame, personvern, sarbare grupper'],
        solution: '1) Villedende miljopastand (greenwashing) - villeder forbrukere, undergraver tilliten. 2) Reklame rettet mot barn - utnytter manglende kritisk sans. 3) Persondata uten samtykke - krenkelse av privatliv, manipulativ malretting. Alle undergraver tillit og kan skade.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-9-ex-2',
        number: '9.2',
        type: 'classic',
        task: 'Forklar Carrolls CSR-pyramide og gi eksempler pa hvert niva.',
        hints: ['Okonomisk, juridisk, etisk, filantropisk'],
        solution: 'Okonomisk: Ga med overskudd for a overleve. Juridisk: Betale skatt, folge arbeidsmiljolov. Etisk: Unnga diskriminering, vaere transparent. Filantropisk: Stotte veldedighet, bidra til lokalsamfunnet. Hver niva bygger pa det under.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Hva er greenwashing, og hvordan kan forbrukere gjenkjenne det?',
        hints: ['Falske eller overdrevne miljopastand'],
        solution: 'Greenwashing er a gi et falsk inntrykk av miljoansvar. Kjennetegn: Vage pastand ("miljøvennlig" uten detaljer), irrelevante argumenter, skjulte avveininger, ingen dokumentasjon, grone farger/bilder uten substans. Forbrukere bor soke dokumentasjon og sertifiseringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Hvordan kan bedrifter bruke baerekraft som konkurransefortrinn i markedsforingen?',
        hints: ['Differensiering, omdamme, kundelojalitet'],
        solution: 'Bedrifter kan: 1) Differensiere produkter (Patagonia), 2) Bygge sterkt omdamme, 3) Tiltrekke bevisste forbrukere, 4) Redusere kostnader gjennom effektivisering, 5) Unnga fremtidig regulering, 6) Tiltrekke talent. Ma vare autentisk - greenwashing slår tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Diskuter: Har bedrifter et ansvar utover a folge loven og tjene penger?',
        hints: ['Ulike perspektiver: aksjonaer vs. interessenter'],
        solution: 'Friedman: Nei, bedriftens ansvar er profitt til aksjonaerer (innenfor loven). Interessentperspektiv: Ja, bedrifter pavirker mange og bor ta hensyn til ansatte, kunder, samfunn, miljo. I dag forventer mange at bedrifter tar ansvar. Langsiktig kan CSR gi bedre resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Markedsplan og strategi
// ============================================================================

export const CHAPTER_MARKEDSFORING_10: TextbookChapter = {
  id: 'markedsforing-10',
  courseId: 'markedsforing',
  chapterNumber: '10',
  title: 'Markedsplan og strategi',
  description: 'Laer a utvikle markedsplaner og forstå strategisk markedsforing.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utvikle en enkel markedsplan',
    'forsta sammenhengen mellom bedriftsstrategi og markedsforingsstrategi',
    'analysere og vurdere markedsforingsstrategier',
  ],
  content: [
    {
      id: 'markedsforing-10-intro',
      type: 'text',
      content: `## Strategisk markedsforing

Strategisk markedsforing handler om a ta langsiktige beslutninger om hvordan bedriften skal konkurrere i markedet.

**Strateginivaleer:**
- *Konsernstrategi:* Hvilke markeder/bransjer skal vi vaere i?
- *Forretningsstrategi:* Hvordan skal vi konkurrere?
- *Funksjonsstrategi:* Hvordan stotter markedsforing forretningsstrategien?

**Strategisk planleggingsprosess:**
1. Definere visjon, misjon og verdier
2. Analysere eksterne og interne forhold
3. Sette mal
4. Utvikle strategier
5. Implementere
6. Evaluere og justere`,
    },
    {
      id: 'markedsforing-10-def-1',
      type: 'definition',
      title: 'Porters generiske strategier',
      content: `Michael Porter beskrev tre grunnleggende konkurransestrategier.

**Kostnadslederskap:**
Vaere billigst i markedet. Krever stordriftsfordeler, effektivitet, stram kostnadskontroll.
*Eksempel:* Ryanair, IKEA, Lidl.

**Differensiering:**
Tilby noe unikt som kundene verdsetter. Krever innovasjon, kvalitet, merkevarebygging.
*Eksempel:* Apple, BMW, Starbucks.

**Fokus/Nisje:**
Konsentrere seg om et smalt segment med kostnadsledelse eller differensiering.
*Eksempel:* Rolls-Royce (luksus), Dollar Shave Club (direkte barbering).

**"Stuck in the middle":**
Risiko ved a ikke ha en klar strategi - konkurrerer pa alt, mestrer ingenting.`,
    },
    {
      id: 'markedsforing-10-def-2',
      type: 'definition',
      title: 'Markedsplanens innhold',
      content: `**1. Sammendrag:**
Kort oversikt over planen og hovedpunktene.

**2. Situasjonsanalyse:**
SWOT, PESTEL, konkurranseanalyse, markedsanalyse.

**3. Mal:**
Spesifikke, malbare, oppnaelige, relevante, tidsbestemte (SMART).

**4. Malgruppe og posisjonering:**
STP - hvem er kunden, og hvordan vil vi oppfattes?

**5. Markedsforingsstrategi:**
Overordnet tilnaerming til markedet.

**6. Markedsforingmiks:**
Detaljerte planer for produkt, pris, plass, promosjon.

**7. Budsjett:**
Ressurser som trengs.

**8. Handlingsplan og tidsplan:**
Hvem gjor hva, nar?

**9. Kontroll og maling:**
Hvordan males suksess? KPIer og oppfolging.`,
    },
    {
      id: 'markedsforing-10-def-3',
      type: 'definition',
      title: 'Vekststrategier (Ansoff-matrisen)',
      content: `Ansoff-matrisen viser fire vekststrategier basert pa produkt og marked.

**Markedspenetrering:**
Eksisterende produkter i eksisterende markeder. Okt markedsandel, mer bruk.
*Lavest risiko.*

**Markedsutvikling:**
Eksisterende produkter i nye markeder. Nye geografier, nye segmenter.
*Middels risiko.*

**Produktutvikling:**
Nye produkter i eksisterende markeder. Innovasjon, produktlinjeutvidelser.
*Middels risiko.*

**Diversifisering:**
Nye produkter i nye markeder. Kan vaere relatert eller urelatert.
*Hoyest risiko.*

**Valg av strategi:**
Avhenger av bedriftens ressurser, kompetanse, risikovillighet og markedsmuligheter.`,
    },
    {
      id: 'markedsforing-10-example-1',
      type: 'example',
      title: 'Eksempel: Markedsplan for ny kafé',
      problem: 'Lag en forenklet markedsplan for en ny kafé.',
      solution: `**Situasjonsanalyse:**
Marked: Okende kaffekultur. Konkurrenter: Starbucks, lokale kaféer. SWOT identifisert.

**Mal:**
500 daglige kunder innen 6 maneder. 15% markedsandel i naerområdet.

**Malgruppe:**
Studenter og unge profesjonelle, 20-35 ar, kvalitetsbevisste.

**Posisjonering:**
"Den koselige hjornekaféen med spesialkaffe og hjemmelaget bakst."

**Markedsmiks:**
- Produkt: Spesialkaffe, hjemmelaget, okologisk
- Pris: Middels-hoy, kvalitetssignal
- Plass: Sentralt, studentnart
- Promosjon: Instagram, lokal PR, soft opening

**Budsjett:**
50.000 kr i oppstartmarkedsforing.

**KPIer:**
Daglige kunder, gjennomsnittskjop, Instagram-folgere.`,
    },
    {
      id: 'markedsforing-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-1',
        number: '10.1',
        type: 'classic',
        task: 'Beskriv Porters tre generiske strategier og gi et eksempel pa en bedrift som bruker hver.',
        hints: ['Kostnadsledelse, differensiering, fokus'],
        solution: 'Kostnadsledelse: Lavest pris (Ryanair - billige flybilletter). Differensiering: Unikt tilbud (Apple - design og innovasjon). Fokus: Smalt segment (Rolex - luksusklokker). Hver strategi krever ulik ressursbruk og gir ulike konkurransefortrinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-2',
        number: '10.2',
        type: 'classic',
        task: 'Forklar Ansoff-matrisen og gi et eksempel pa hver vekststrategi.',
        hints: ['Fire strategier basert pa produkt/marked'],
        solution: 'Markedspenetrering: Coca-Cola markedsforer mer i eksisterende marked. Markedsutvikling: Netflix ekspanderer til nye land. Produktutvikling: Apple lanserer ny iPhone. Diversifisering: Amazon gar inn i dagligvarer (Whole Foods). Risiko oker med avstand fra kjerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Hva er SMART-mal, og hvorfor er de viktige i markedsplanlegging?',
        hints: ['Spesifikke, Malbare, Oppnaelige, Relevante, Tidsbestemte'],
        solution: 'SMART-mal er: Spesifikke (klart definert), Malbare (kan kvantifiseres), Oppnaelige (realistiske), Relevante (stotter strategi), Tidsbestemte (har deadline). Viktig fordi det gjor mal konkrete, muliggjor oppfolging, og sikrer at alle forstar hva som skal oppnas.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Lag en forenklet markedsplan for et produkt eller en tjeneste du velger selv.',
        hints: ['Inkluder mal, malgruppe, posisjonering og markedsmiks'],
        solution: 'Eksempel treningsapp: Mal: 10.000 brukere pa 3 maneder. Malgruppe: Nybegynnere 25-40 ar. Posisjonering: "Din personlige trener i lomma." Produkt: Tilpassede treningsprogrammer. Pris: Freemium. Plass: App Store, Google Play. Promosjon: Instagram, influencere, PR.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Hvordan henger bedriftsstrategi og markedsforingsstrategi sammen?',
        hints: ['Tenk pa strateginivåer og sammenheng'],
        solution: 'Bedriftsstrategi setter overordnet retning (visjon, mal, konkurransestrategi). Markedsforingsstrategi stotter dette ved a definere hvordan man nar markedet. Eksempel: Hvis bedriften vil differensiere, ma markedsforing bygge merkevare og kommunisere unike fordeler. Markedsforing implementerer strategien mot kunden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'markedsforing-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'markedsforing-10-ex-6',
        number: '10.6',
        type: 'classic',
        task: 'Hva er viktig a tenke pa nar man skal implementere en markedsplan?',
        hints: ['Ressurser, ansvar, tidslinje, oppfolging'],
        solution: 'Viktige faktorer: 1) Tydelig ansvarsfordeling - hvem gjor hva. 2) Realistisk tidslinje med milepaler. 3) Tilstrekkelig budsjett. 4) Kommunikasjon internt. 5) Fleksibilitet til a justere. 6) Lopende maling mot KPIer. 7) Ledelsesforankring. Implementering er ofte vanskeligere enn planlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MARKEDSFORING_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_1,
  CHAPTER_MARKEDSFORING_2,
  CHAPTER_MARKEDSFORING_3,
  CHAPTER_MARKEDSFORING_4,
  CHAPTER_MARKEDSFORING_5,
  CHAPTER_MARKEDSFORING_6,
  CHAPTER_MARKEDSFORING_7,
  CHAPTER_MARKEDSFORING_8,
  CHAPTER_MARKEDSFORING_9,
  CHAPTER_MARKEDSFORING_10,
];

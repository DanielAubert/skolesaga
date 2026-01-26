/**
 * Tekstbok innhold for Norsk VG1
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Første år med fokus på grunnleggende ferdigheter og tekstforståelse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Retorikk og argumentasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_1_1: TextbookChapter = {
  id: 'norsk-vg1-1-1',
  courseId: 'norsk-vg1',
  chapterNumber: '1.1',
  title: 'Retorikk og argumentasjon',
  description: 'Lær å analysere og bruke retoriske virkemidler i argumenterende tekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke retoriske appellformer og virkemidler i egen skriving og analyse',
  ],
  content: [
    {
      id: 'norsk-vg1-1-1-intro',
      type: 'text',
      content: `## Retorikk - kunsten å overbevise

Retorikk er læren om talekunst og overtalelse. Begrepet stammer fra antikkens Hellas, der filosofen Aristoteles (384-322 f.Kr.) systematiserte kunnskapen om hvordan man kan overbevise et publikum.

I dag bruker vi retorikk i mange sammenhenger:
- Politiske taler
- Reklame og markedsføring
- Debattinnlegg og kronikker
- Presentasjoner
- Sosiale medier

**Hvorfor lære retorikk?**
- For å bli en bedre skribent og taler
- For å gjennomskue andres argumentasjon
- For å delta aktivt i demokratiske prosesser`,
    },
    {
      id: 'norsk-vg1-1-1-def-1',
      type: 'definition',
      title: 'De retoriske appellformene',
      content: `Aristoteles identifiserte tre måter å overbevise på:

**Etos - troverdighet**
- Handler om avsenderens troverdighet
- Hvordan fremstår taleren? Kompetent? Ærlig? Sympatisk?
- Eksempler: «Som lege med 20 års erfaring...», «Jeg har selv opplevd...»

**Patos - følelser**
- Appell til tilhørernes følelser
- Skaper engasjement og handling
- Eksempler: Sterke historier, bilder, personlige vitnesbyrd

**Logos - fornuft**
- Appell til logikk og fornuft
- Fakta, statistikk, logiske slutninger
- Eksempler: «Forskning viser at...», «Tall fra SSB viser...»

**Kairos - timing**
- Å si rett ting til rett tid
- Kontekst og situasjon påvirker budskapet
- Eksempel: Å ta opp klimasaken etter en naturkatastrofe`,
    },
    {
      id: 'norsk-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av appellformer',
      problem: `Analyser appellformene i denne teksten:

"Som sykepleier med 15 års erfaring har jeg sett hvordan bemanningskrisen rammer pasientene. Tall fra Statistisk sentralbyrå viser at vi mangler 6000 sykepleiere. Tenk på alle de eldre som ikke får den omsorgen de fortjener. Vi trenger handling nå!"`,
      solution: `**Etos:** "Som sykepleier med 15 års erfaring" - avsenderen etablerer troverdighet gjennom yrkeserfaring og førstehåndskunnskap.

**Patos:** "Tenk på alle de eldre" og "omsorgen de fortjener" - følelsesmessig appell som skaper empati og engasjement.

**Logos:** "Tall fra Statistisk sentralbyrå" og "6000 sykepleiere" - henvisning til offisiell statistikk og konkrete tall.

**Kairos:** Teksten spiller på aktualiteten til helsedebatten.

**Hovedappell:** Teksten bruker primært patos (følelser rundt eldres situasjon), støttet av etos (yrkeserfaring) og logos (statistikk). Merk at alle disse appellformene kan brukes i ulike politiske debatter - det viktige er å gjenkjenne hvordan de brukes.`,
    },
    {
      id: 'norsk-vg1-1-1-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler',
      content: `**Språklige virkemidler:**
- **Retoriske spørsmål:** Spørsmål du ikke forventer svar på
- **Gjentakelse:** Repetere ord eller fraser for effekt
- **Kontraster:** Sette motsetninger opp mot hverandre
- **Treleddet oppbygging:** Tre elementer i rekke (kraft, mot og vilje)
- **Metaforer:** Billedlig språk for å forklare abstrakte ting

**Strukturelle virkemidler:**
- **Innledning:** Fange oppmerksomhet, presentere tema
- **Hoveddel:** Argumenter i logisk rekkefølge
- **Avslutning:** Oppsummere, oppfordre til handling`,
    },
    {
      id: 'norsk-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser hvilken appellform som dominerer i disse utsagnene:',
        subTasks: [
          {
            label: 'a',
            task: '"Statistikk fra FN viser at 800 millioner mennesker sulter."',
            solution: 'Logos - bruker fakta og statistikk',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
          {
            label: 'b',
            task: '"Som professor i økonomi ved Universitetet i Oslo..."',
            solution: 'Etos - etablerer troverdighet gjennom ekspertise',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
          {
            label: 'c',
            task: '"Tenk på alle de ensomme eldre som sitter alene hver eneste dag."',
            solution: 'Patos - appellerer til følelser som empati og medfølelse',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
        ],
        solution: 'a) Logos, b) Etos, c) Patos',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn retoriske virkemidler i Martin Luther Kings berømte "I Have a Dream"-tale:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på gjentakelse.',
            solution: '"I have a dream" gjentas flere ganger gjennom talen for å forsterke budskapet.',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på metafor.',
            solution: '"Let freedom ring" - frihet fremstilles som en klokke som ringer.',
          },
          {
            label: 'c',
            task: 'Hvordan bruker King kontraster?',
            solution: 'Han kontrasterer nåtid med fremtid, undertrykkelse med frihet, hat med kjærlighet.',
          },
        ],
        hints: ['Les et utdrag av talen på nett', 'Se etter mønstre i språkbruken'],
        solution: 'King bruker gjentakelse, metaforer og kontraster for å skape et kraftfullt budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser en politisk tale eller et debattinnlegg fra norske medier. Identifiser bruken av etos, patos og logos.',
        hints: ['Finn en aktuell tale på NRK eller i en avis', 'Lag en strukturert analyse'],
        solution: 'En god retorisk analyse identifiserer appellformene, gir eksempler fra teksten, og vurderer hvor effektiv argumentasjonen er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et kort debattinnlegg (200-300 ord) der du bevisst bruker alle tre appellformene.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema du engasjerer deg i.',
            solution: 'Temaet bør være aktuelt og debatterbart.',
          },
          {
            label: 'b',
            task: 'Planlegg hvordan du skal bruke etos, patos og logos.',
            solution: 'Etos: Etabler din troverdighet. Patos: Skape følelsesmessig engasjement. Logos: Bruk fakta og logikk.',
          },
          {
            label: 'c',
            task: 'Skriv innlegget og merk av hvor du bruker hver appellform.',
            solution: 'Innlegget skal ha tydelig struktur og balansert bruk av appellformer.',
          },
        ],
        hints: ['Start med etos for å etablere troverdighet', 'Avslutt med patos for å skape handling'],
        solution: 'Et godt debattinnlegg kombinerer alle tre appellformer på en naturlig måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign to tekster om samme tema som bruker ulike retoriske strategier. Hvilken er mest overbevisende, og hvorfor?',
        hints: ['Velg f.eks. to avisinnlegg om samme sak', 'Vurder målgruppe og kontekst'],
        solution: 'Sammenligningen bør vise forståelse for hvordan ulike retoriske valg påvirker effekten av argumentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Sakprosa og kildebruk
// ============================================================================

export const CHAPTER_NORSK_VG1_1_2: TextbookChapter = {
  id: 'norsk-vg1-1-2',
  courseId: 'norsk-vg1',
  chapterNumber: '1.2',
  title: 'Sakprosa og kildebruk',
  description: 'Lær å finne, vurdere og bruke kilder i egne tekster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere og bruke kilder kritisk og etterrettelig',
  ],
  content: [
    {
      id: 'norsk-vg1-1-2-intro',
      type: 'text',
      content: `## Sakprosa og kilder

Sakprosa er tekster som formidler informasjon, kunnskap eller meninger - ikke fiksjon. I en tid med informasjonsoverflod er det avgjørende å kunne vurdere kilder kritisk.

**Sakprosatyper:**
- **Journalistiske tekster:** Nyhetsartikler, reportasjer, kommentarer
- **Fagartikler:** Akademiske og populærvitenskapelige tekster
- **Administrative tekster:** Rapporter, utredninger, lovtekster
- **Personlige tekster:** Essay, blogginnlegg, leserbrev

**Hvorfor er kildebruk viktig?**
- Styrker troverdigheten til teksten din
- Viser at du bygger på etablert kunnskap
- Gjør det mulig for leseren å sjekke påstandene
- Unngår plagiat`,
    },
    {
      id: 'norsk-vg1-1-2-def-1',
      type: 'definition',
      title: 'Kildetyper og kildekritikk',
      content: `**Primærkilder:**
- Originale dokumenter, forskning, øyenvitneskildringer
- Eksempel: Et forskningsintervju, en historisk dagbok

**Sekundærkilder:**
- Bearbeider og tolker primærkilder
- Eksempel: En lærebok, en Wikipedia-artikkel

**TRAFO-modellen for kildekritikk:**

**T - Troverdighet**
- Hvem er avsenderen? Har de kompetanse?
- Er kilden uavhengig?

**R - Relevans**
- Passer kilden til formålet ditt?
- Er informasjonen relevant for problemstillingen?

**A - Aktualitet**
- Når ble kilden laget? Er den oppdatert?
- Er informasjonen fortsatt gyldig?

**F - Formål**
- Hva er hensikten med teksten?
- Er det skjulte motiver (reklame, propaganda)?

**O - Objektivitet**
- Er fremstillingen balansert?
- Presenteres flere sider av saken?`,
    },
    {
      id: 'norsk-vg1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering',
      problem: `Vurder denne kilden: En artikkel fra Store norske leksikon (SNL) om klimaendringer.`,
      solution: `**Troverdighet:** Høy - SNL har fagansvarlige redaktører og artikkelforfattere med akademisk bakgrunn. Artiklene er kvalitetssikret.

**Relevans:** Avhenger av bruk - God for generell oversikt, men kan være for grunnleggende for spesialiserte oppgaver.

**Aktualitet:** God - SNL oppdaterer artikler jevnlig, og datoen for siste oppdatering vises.

**Formål:** Leksikalsk - Formålet er å informere nøytralt, ikke å overbevise.

**Objektivitet:** God - SNL tilstreber nøytral fremstilling basert på etablert forskning.

**Konklusjon:** En solid kilde for bakgrunnsinformasjon og definisjoner. Bør suppleres med primærkilder for dypere analyse.`,
    },
    {
      id: 'norsk-vg1-1-2-def-2',
      type: 'definition',
      title: 'Kildehenvisning og sitat',
      content: `**Direkte sitat:**
- Brukes når formuleringen er viktig
- Sett i anførselstegn: "..."
- Oppgi forfatter, tittel, årstall

**Indirekte sitat (parafrasering):**
- Gjengi innholdet med egne ord
- Oppgi fortsatt kilden

**Kildehenvisning i teksten:**
- "(Forfatter, år)" eller "Ifølge Forfatter (år)..."
- Eksempel: "Klimaforskere advarer om at temperaturen kan stige med 2 grader (IPCC, 2023)."

**Kildeliste:**
- Settes til slutt i teksten
- Alfabetisk ordnet etter forfatter
- Inneholder all informasjon for å finne kilden

**Eksempel på kildelisteinnegg:**
Forfatter, F. (År). *Tittel på bok*. Forlag.
Forfatter, F. (År). Tittel på artikkel. *Tidsskrift*, volum(nummer), sider.`,
    },
    {
      id: 'norsk-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder disse kildene med TRAFO-modellen:',
        subTasks: [
          {
            label: 'a',
            task: 'En YouTube-video om helse laget av en influencer uten medisinsk bakgrunn.',
            solution: 'Lav troverdighet (mangler faglig kompetanse), usikker objektivitet (kan ha sponsoravtaler), varierende aktualitet.',
          },
          {
            label: 'b',
            task: 'En rapport fra Folkehelseinstituttet om vaksiner.',
            solution: 'Høy troverdighet (offentlig faginstans), god aktualitet (oppdateres jevnlig), høy objektivitet (vitenskapelig fundert).',
          },
          {
            label: 'c',
            task: 'Et debattinnlegg i Aftenposten skrevet av en partileder.',
            solution: 'Middels troverdighet (politisk aktør med agenda), lav objektivitet (subjektiv mening), god aktualitet.',
          },
        ],
        solution: 'Kildevurdering krever at du ser på hvem som står bak, hva formålet er, og hvor oppdatert informasjonen er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Omskriv dette sitatet til et indirekte sitat (parafrasering):',
        subTasks: [
          {
            label: 'a',
            task: '"Ungdommers bruk av sosiale medier har økt med 40 prosent de siste fem årene" (Medietilsynet, 2023).',
            solution: 'Ifølge Medietilsynet (2023) har ungdoms bruk av sosiale medier steget betydelig det siste tiåret.',
          },
        ],
        hints: ['Behold kjerneinnholdet', 'Bruk egne ord', 'Oppgi fortsatt kilden'],
        solution: 'Parafrasering innebærer å gjengi innholdet med egne ord, men likevel oppgi kilden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn tre ulike kilder om samme tema og vurder dem mot hverandre.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et aktuelt tema og finn tre kilder av ulik type (f.eks. avisartikkel, fagartikkel, blogginnlegg).',
            solution: 'Kildene bør representere ulike perspektiver og pålitelighetsnivåer.',
          },
          {
            label: 'b',
            task: 'Vurder hver kilde med TRAFO-modellen.',
            solution: 'Systematisk gjennomgang av troverdighet, relevans, aktualitet, formål og objektivitet.',
          },
          {
            label: 'c',
            task: 'Konkluder: Hvilken kilde er mest pålitelig for en faglig tekst?',
            solution: 'Begrunnet valg basert på kildekritiske kriterier.',
          },
        ],
        hints: ['Sammenlign hvordan kildene behandler samme informasjon', 'Se etter motstridende påstander'],
        solution: 'Kildesammenligning viser kritisk tenkning og evne til å vurdere informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en kort faglig tekst (200-250 ord) med minst tre kildehenvisninger. Lag en korrekt kildeliste.',
        hints: ['Velg et tema du kan finne gode kilder om', 'Bruk både direkte og indirekte sitat', 'Følg oppsettet for kildeliste'],
        solution: 'Teksten skal demonstrere korrekt bruk av kilder og kildehenvisninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen på plagiat og korrekt kildebruk. Gi eksempler på begge.',
        hints: ['Tenk på hva som skjer når du ikke oppgir kilder', 'Hvorfor er plagiat problematisk?'],
        solution: 'Plagiat er å fremstille andres arbeid som sitt eget. Korrekt kildebruk innebærer å oppgi hvor informasjonen kommer fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Skjønnlitteratur - noveller og kortprosa
// ============================================================================

export const CHAPTER_NORSK_VG1_2_1: TextbookChapter = {
  id: 'norsk-vg1-2-1',
  courseId: 'norsk-vg1',
  chapterNumber: '2.1',
  title: 'Skjønnlitteratur - noveller og kortprosa',
  description: 'Lær å analysere og tolke noveller og annen kortprosa.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-2-1-intro',
      type: 'text',
      content: `## Novellen som sjanger

Novellen er en kort, fortellende tekst som skiller seg fra romanen ved sin konsentrasjon og fokus. Mens romanen kan utforske mange temaer og personer over tid, fokuserer novellen gjerne på én hendelse eller ett vendepunkt.

**Kjennetegn på novellen:**
- Kort form (få sider til noen titalls sider)
- Få personer
- Begrenset tidsrom
- Ofte ett sentralt vendepunkt
- Konsentrert handling
- Åpen eller overraskende slutt`,
    },
    {
      id: 'norsk-vg1-2-1-def-1',
      type: 'definition',
      title: 'Novelleanalyse - SVIRP-modellen',
      content: `**S - Sjanger og struktur**
- Hvilken type novelle er det? (realistisk, fantastisk, psykologisk)
- Hvordan er oppbyggingen? (spenningskurve, tidshåndtering)

**V - Virkemidler**
- Språklige virkemidler (metaforer, symboler, kontraster)
- Fortelleteknikk (synsvinkel, fortellerstemme)

**I - Innhold og handling**
- Hva skjer i teksten? (kort sammendrag)
- Hvem er personene og hvordan utvikler de seg?

**R - Relasjon og kontekst**
- Når og hvor ble novellen skrevet?
- Historisk og litteraturhistorisk kontekst

**P - Personlig tolkning**
- Hva er tema og budskap?
- Hvordan kan vi forstå teksten i dag?`,
    },
    {
      id: 'norsk-vg1-2-1-def-2',
      type: 'definition',
      title: 'Fortelleteknikk',
      content: `**Synsvinkel:**
- **Jeg-forteller:** Fortalt fra én persons perspektiv (begrenset innsikt)
- **Tredjeperson begrenset:** Følger én person, men i tredjeperson
- **Allvitende forteller:** Kjenner alle personers tanker og følelser

**Tidshåndtering:**
- **Kronologisk:** Hendelsene fortelles i den rekkefølgen de skjer
- **In medias res:** Starter midt i handlingen
- **Tilbakeblikk (analepse):** Hopper tilbake i tid
- **Frampek (prolepse):** Antyder hva som skal skje

**Spenningskurve:**
1. Eksposisjon (introduksjon av setting og personer)
2. Komplikasjon (konflikt oppstår)
3. Spenningsstigning
4. Klimaks (høydepunkt)
5. Avtrapning
6. Løsning/avslutning`,
    },
    {
      id: 'norsk-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av "Karen" av Alexander Kielland',
      problem: `Analyser novellen "Karen" (1882) med fokus på virkemidler og tema.`,
      solution: `**Sjanger:** Realistisk novelle fra realismen

**Handling:** Karen er en ung tjenestepike som blir gravid med sin arbeidsgiver, men blir kastet ut og ender i fattigdom og prostitusjon.

**Virkemidler:**
- **Kontrastbruk:** Overklassens velstand mot Karens fattigdom
- **Ironi:** Samfunnets "moral" kontra handlingene
- **Naturskildringer:** Speiler Karens sinnstilstand

**Synsvinkel:** Tredjeperson med fokus på Karen

**Tema:** Sosial urettferdighet, dobbeltmoral, kvinneundertrykkelse

**Budskap:** Kielland kritiserer et samfunn der kvinner blir ofre for menns handlinger, mens mennene går fri. Novellen avslører hykleriet i borgerlig moral.

**Kontekst:** Skrevet i realismen, en periode preget av samfunnskritikk og fokus på urettferdighet.`,
    },
    {
      id: 'norsk-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser synsvinkel i disse åpningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg våknet av en lyd jeg ikke kjente igjen."',
            solution: 'Jeg-forteller',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'b',
            task: '"Han visste ikke at hun allerede hadde bestemt seg. Hun på sin side ante ikke at han hadde sett brevet."',
            solution: 'Allvitende forteller - har innsikt i begges tanker',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
          {
            label: 'c',
            task: '"Maren så ut av vinduet. Hva skulle hun gjøre nå? Mannen i gata så opp mot henne."',
            solution: 'Tredjeperson begrenset - vi følger Marens perspektiv',
            multipleChoiceOptions: ['Jeg-forteller', 'Tredjeperson begrenset', 'Allvitende forteller'],
          },
        ],
        solution: 'a) Jeg-forteller, b) Allvitende, c) Tredjeperson begrenset',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Tegn spenningskurven for en novelle du har lest.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser eksposisjonen.',
            solution: 'Beskriv hvordan novellen introduserer personer og setting.',
          },
          {
            label: 'b',
            task: 'Hva er konflikten/komplikasjonen?',
            solution: 'Beskriv hva som setter handlingen i gang.',
          },
          {
            label: 'c',
            task: 'Hvor er klimaks?',
            solution: 'Identifiser det mest intense øyeblikket.',
          },
          {
            label: 'd',
            task: 'Hvordan er avslutningen?',
            solution: 'Er den åpen, lukket, overraskende?',
          },
        ],
        hints: ['Tegn gjerne en visuell kurve', 'Bruk konkrete eksempler fra teksten'],
        solution: 'Spenningskurven viser hvordan novellen bygger opp mot et høydepunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les en novelle og skriv en analyse (300-400 ord) med SVIRP-modellen.',
        hints: ['Velg en novelle fra pensum eller fra et novellehefte', 'Dekk alle punktene i modellen'],
        solution: 'Analysen skal vise forståelse for sjanger, virkemidler, innhold, kontekst og gi en egen tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to noveller med samme tema (f.eks. kjærlighet eller død). Hvordan behandler de temaet ulikt?',
        hints: ['Se på virkemidler, synsvinkel og avslutning', 'Vurder også historisk kontekst'],
        solution: 'Sammenligningen bør vise likheter og forskjeller i form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv åpningen til en egen novelle (150 ord) som starter in medias res.',
        hints: ['Start midt i en spennende scene', 'La leseren lure på hva som skjer'],
        solution: 'Åpningen skal fange leserens interesse og starte midt i handlingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Lyrikk og diktanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_2: TextbookChapter = {
  id: 'norsk-vg1-2-2',
  courseId: 'norsk-vg1',
  chapterNumber: '2.2',
  title: 'Lyrikk og diktanalyse',
  description: 'Lær å lese, analysere og tolke dikt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke lyriske tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-2-2-intro',
      type: 'text',
      content: `## Lyrikk - diktets verden

Lyrikk er en av de eldste litterære sjangrene. Mens prosa forteller, uttrykker lyrikken følelser, stemninger og tanker gjennom et konsentrert, rytmisk språk.

**Hva kjennetegner lyrikk?**
- Konsentrert form - hvert ord teller
- Ofte rytme og klang
- Bruk av bilder og symboler
- Uttrykker følelser og stemninger
- Kan ha rim og fast form, eller være fri vers

**Hvorfor lese dikt?**
- Utvikler språklig bevissthet
- Gir tilgang til andres opplevelser
- Skaper rom for tolkning og refleksjon
- Viser språkets musikalitet`,
    },
    {
      id: 'norsk-vg1-2-2-def-1',
      type: 'definition',
      title: 'Diktets form og oppbygning',
      content: `**Rim:**
- **Parrim:** aa bb (to linjer rimer)
- **Kryssrim:** abab (annenhver linje rimer)
- **Klammerrim:** abba (første og siste, andre og tredje)
- **Fri vers:** Ingen fast rimstruktur

**Rytme:**
- **Jambe:** trykklett-trykk (da-DUM): "I dag"
- **Troke:** trykk-trykklett (DUM-da): "sommer"
- **Versefot:** Grunnenheten i rytmen
- **Metrum:** Det faste rytmemønsteret

**Strofeformer:**
- **Sonett:** 14 linjer, fast struktur
- **Haiku:** 3 linjer (5-7-5 stavelser)
- **Ballade:** Fortellende dikt med refreng
- **Frie vers:** Ingen fast form`,
    },
    {
      id: 'norsk-vg1-2-2-def-2',
      type: 'definition',
      title: 'Lyriske virkemidler',
      content: `**Billedspråk:**
- **Metafor:** Skjult sammenligning ("Livet er en reise")
- **Sammenligning:** Med "som" eller "lik" ("Øynene hennes var som stjerner")
- **Besjeling:** Gi døde ting liv ("Trærne gråt")
- **Symbol:** Konkret ting som står for noe abstrakt (hjerte = kjærlighet)

**Lydlige virkemidler:**
- **Allitterasjon:** Bokstavrim ("Fager fjell og fosser")
- **Assonans:** Vokalrim ("Sol og sorg")
- **Onomatopoetikon:** Lydmalende ord ("sus", "brus", "klirr")

**Andre virkemidler:**
- **Gjentakelse:** Forsterker budskapet
- **Kontraster:** Skaper spenning
- **Enjambement:** Setningen fortsetter over linjeskiftet
- **Apostrofe:** Tiltale til noe fraværende`,
    },
    {
      id: 'norsk-vg1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av "Du må ikke sove" av Arnulf Øverland',
      problem: `Analyser første strofe:

"Du må ikke sitte trygt i ditt hjem
og si: Det er sørgelig, stakkars dem!
Du må ikke tåle så inderlig vel
den urett som ikke rammer dig selv!"`,
      solution: `**Form:**
- Fire linjer (kvartett)
- Parrim: hjem/dem, vel/selv
- Fast rytme med trykk på viktige ord

**Virkemidler:**
- **Gjentakelse:** "Du må ikke" - forsterker budskapet
- **Apostrofe:** Taler direkte til leseren med "du"
- **Kontrast:** "trygt i ditt hjem" vs. andres lidelse
- **Ironi:** "stakkars dem" - avslører likegyldighet

**Innhold og tolkning:**
Diktet kritiserer passivitet overfor urettferdighet. Øverland utfordrer leseren til å ta stilling, ikke bare se på. Skrevet som advarsel mot fascismen i 1936.

**Tema:** Ansvar, solidaritet, moralsk forpliktelse

**Budskap:** Vi har et ansvar for å reagere på urettferdighet, selv når den ikke rammer oss direkte.`,
    },
    {
      id: 'norsk-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser rimtype i disse strofene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg vandret en vår langs elvebredden (a)\nOg tenkte på alt som var sagt og gjort (b)\nDa speilet vannet den gylne redden (a)\nAv sol som dalte mot vest og nord (b)"',
            solution: 'Kryssrim (abab)',
            multipleChoiceOptions: ['Parrim', 'Kryssrim', 'Klammerrim', 'Fri vers'],
          },
          {
            label: 'b',
            task: '"Natten er stille (a)\nOg tanken er fri (b)\nÅ kunne bare ville (a)\nOg være meg og di (b)"',
            solution: 'Kryssrim (abab)',
            multipleChoiceOptions: ['Parrim', 'Kryssrim', 'Klammerrim', 'Fri vers'],
          },
        ],
        solution: 'Begge eksemplene bruker kryssrim (abab).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn billedspråk i disse linjene:',
        subTasks: [
          {
            label: 'a',
            task: '"Hjertet mitt er en stein"',
            solution: 'Metafor - hjertet sammenlignes med stein uten "som"',
          },
          {
            label: 'b',
            task: '"Fjellene stod som vakter ved kysten"',
            solution: 'Sammenligning - bruker "som"',
          },
          {
            label: 'c',
            task: '"Vinden sang gjennom furuskogen"',
            solution: 'Besjeling - vinden får menneskelige egenskaper',
          },
        ],
        solution: 'a) Metafor, b) Sammenligning, c) Besjeling',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et dikt og skriv en analyse (250-350 ord) med fokus på form, virkemidler og innhold.',
        hints: ['Velg et dikt fra pensum', 'Start med å beskrive form og oppbygning', 'Identifiser minst tre virkemidler'],
        solution: 'Analysen skal dekke både form (rim, rytme, strofer) og innhold (tema, budskap, virkemidler).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et eget dikt (minst 8 linjer) med minst to virkemidler fra listen over.',
        hints: ['Velg et tema som betyr noe for deg', 'Eksperimenter med rim eller fri vers', 'Les diktet høyt for å høre rytmen'],
        solution: 'Diktet skal vise bevisst bruk av lyriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign to dikt om samme tema (f.eks. kjærlighet eller natur) fra ulike epoker. Hvordan påvirker tiden diktets form og uttrykk?',
        hints: ['Velg ett klassisk og ett moderne dikt', 'Se på forskjeller i form, språk og virkemidler'],
        solution: 'Sammenligningen bør vise hvordan litterære konvensjoner og samfunn påvirker diktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Muntlig kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_3_1: TextbookChapter = {
  id: 'norsk-vg1-3-1',
  courseId: 'norsk-vg1',
  chapterNumber: '3.1',
  title: 'Muntlig kommunikasjon',
  description: 'Utvikle ferdigheter i muntlig presentasjon og diskusjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere fagstoff muntlig med klar struktur og tilpasning til mottaker',
  ],
  content: [
    {
      id: 'norsk-vg1-3-1-intro',
      type: 'text',
      content: `## Muntlig kommunikasjon

Muntlige ferdigheter er avgjørende i utdanning, arbeidsliv og samfunnsdeltakelse. Å kunne uttrykke seg klart, lytte aktivt og delta i samtaler er grunnleggende kompetanser.

**Muntlige situasjoner:**
- Presentasjoner og foredrag
- Diskusjoner og debatter
- Møter og gruppearbeid
- Jobbintervjuer
- Daglige samtaler

**Hvorfor er muntlige ferdigheter viktige?**
- Formidler kunnskap effektivt
- Bygger relasjoner
- Fremmer demokratisk deltakelse
- Øker selvtillit`,
    },
    {
      id: 'norsk-vg1-3-1-def-1',
      type: 'definition',
      title: 'Presentasjonsteknikk',
      content: `**Forberedelse:**
- Definer formål: Hva vil du oppnå?
- Kjenn publikum: Hvem snakker du til?
- Strukturer innholdet: Innledning - hoveddel - avslutning
- Øv på fremføringen

**Struktur:**
- **Innledning:** Fang oppmerksomheten, presenter tema
- **Hoveddel:** Maks 3-4 hovedpunkter, logisk rekkefølge
- **Avslutning:** Oppsummer, gi en konklusjon eller oppfordring

**Fremføringsteknikk:**
- Øyekontakt med publikum
- Tydelig og variert stemmebruk
- Naturlige pauser
- Kroppsspråk som støtter budskapet
- Bruk av hjelpemidler (stikkord, presentasjon)`,
    },
    {
      id: 'norsk-vg1-3-1-def-2',
      type: 'definition',
      title: 'Deltakelse i samtaler og diskusjoner',
      content: `**Aktiv lytting:**
- Vis at du lytter (blikk, nikk)
- Still oppfølgingsspørsmål
- Oppsummer det andre har sagt
- Unngå å avbryte

**Konstruktiv diskusjon:**
- Respekter andres synspunkter
- Argumenter saklig, ikke personlig
- Begrunn standpunktene dine
- Vær åpen for å endre mening

**Samtaleregler:**
- Vent på tur
- Hold deg til saken
- Bidra til samtalen
- Vær inkluderende`,
    },
    {
      id: 'norsk-vg1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: God presentasjonsstruktur',
      problem: `Lag en struktur for en 5-minutters presentasjon om bærekraftig mote.`,
      solution: `**Innledning (30 sek):**
- Hook: "Visste du at moteindustrien er verdens nest mest forurensende industri?"
- Presentasjon av tema: "I dag skal jeg snakke om bærekraftig mote og hva vi kan gjøre."

**Hoveddel (3,5 min):**
1. Problemet (1 min): Fast fashion, miljøpåvirkning, arbeidsforhold
2. Løsninger (1,5 min): Gjenbruk, kvalitet over kvantitet, bevisste valg
3. Hva du kan gjøre (1 min): Konkrete tips

**Avslutning (1 min):**
- Oppsummering: "Moteindustrien har store utfordringer, men vi kan alle bidra."
- Oppfordring: "Neste gang du handler, tenk over valget ditt."

**Hjelpemidler:**
- Stikkordskort
- Bilder/statistikk på skjerm`,
    },
    {
      id: 'norsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner god muntlig presentasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er viktigst å tenke på i innledningen?',
            solution: 'Fange oppmerksomheten og presentere tema tydelig.',
          },
          {
            label: 'b',
            task: 'Hvorfor er øyekontakt viktig?',
            solution: 'Det skaper kontakt med publikum og viser selvtillit.',
          },
          {
            label: 'c',
            task: 'Når bør du bruke pauser?',
            solution: 'Etter viktige poenger, for å la informasjonen synke inn.',
          },
        ],
        solution: 'God presentasjon krever forberedelse, struktur og bevisst fremføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Planlegg en 3-minutters presentasjon om et selvvalgt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en innledning som fanger oppmerksomheten.',
            solution: 'Bruk en overraskende fakta, et spørsmål eller en kort historie.',
          },
          {
            label: 'b',
            task: 'List opp 2-3 hovedpunkter for hoveddelen.',
            solution: 'Velg de viktigste aspektene ved temaet.',
          },
          {
            label: 'c',
            task: 'Skriv en avslutning med oppfordring eller konklusjon.',
            solution: 'Oppsummer og gi publikum noe å tenke på.',
          },
        ],
        hints: ['Hold det enkelt', 'Øv på tiden'],
        solution: 'En godt planlagt presentasjon gjør fremføringen enklere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gjennomfør en diskusjon med en medelev om et aktuelt tema. Fokuser på aktiv lytting og saklig argumentasjon.',
        hints: ['Velg et tema dere er uenige om', 'Fokuser på å forstå motpartens synspunkt', 'Oppsummer det den andre sier før du svarer'],
        solution: 'God diskusjon krever både å uttrykke egne synspunkter og å lytte til andres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hold presentasjonen du planla for klassen eller en gruppe. Be om tilbakemelding på struktur og fremføring.',
        hints: ['Ta opp presentasjonen om mulig', 'Be om konkret tilbakemelding', 'Reflekter over hva du kan forbedre'],
        solution: 'Øvelse gjør mester - jo mer du presenterer, jo bedre blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over dine egne muntlige ferdigheter. Hva er dine styrker? Hva ønsker du å forbedre?',
        hints: ['Tenk på tidligere presentasjoner', 'Vurder både forberedelse og fremføring', 'Sett deg konkrete mål'],
        solution: 'Selvinnsikt er første steg mot forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_VG1_3_2: TextbookChapter = {
  id: 'norsk-vg1-3-2',
  courseId: 'norsk-vg1',
  chapterNumber: '3.2',
  title: 'Kreativ skriving',
  description: 'Utvikle ferdigheter i kreativ og skjønnlitterær skriving.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av litterære virkemidler',
  ],
  content: [
    {
      id: 'norsk-vg1-3-2-intro',
      type: 'text',
      content: `## Kreativ skriving

Kreativ skriving handler om å uttrykke deg selv gjennom fortelling og fiksjon. Det kan være noveller, kortprosa, dikt eller andre skjønnlitterære sjangre.

**Hvorfor skrive kreativt?**
- Utvikler språklig bevissthet og ordforråd
- Gir rom for å utforske tanker og følelser
- Øker forståelse for litterære tekster
- Skaper glede og mening

**Skriving som prosess:**
1. Idéfase - finn inspirasjon
2. Planlegging - strukturer teksten
3. Utkast - skriv uten å sensurere
4. Revisjon - forbedre og omarbeid
5. Korrektur - rett feil`,
    },
    {
      id: 'norsk-vg1-3-2-def-1',
      type: 'definition',
      title: 'Fortelleteknikk',
      content: `**Synsvinkel:**
- **Jeg-forteller:** Personlig, nær, begrenset innsikt
- **Tredjeperson begrenset:** Følger én karakter
- **Allvitende:** Vet alt om alle karakterer

**Skildringer:**
- **Miljøskildring:** Hvor og når handlingen foregår
- **Personskildring:** Hvordan karakterene ser ut og oppfører seg
- **Sanseskildring:** Syn, hørsel, lukt, smak, berøring

**Dialog:**
- Avslører karakter og relasjoner
- Driver handlingen fremover
- Varierer med replikker og tankestrek

**Indre monolog:**
- Viser karakterens tanker
- Skaper nærhet til leseren
- Kan bryte opp handling`,
    },
    {
      id: 'norsk-vg1-3-2-def-2',
      type: 'definition',
      title: 'Litterære virkemidler i kreativ skriving',
      content: `**Spenning:**
- Frempek og antydninger
- Tilbakeholdelse av informasjon
- Cliffhangers
- Tempo og rytme i språket

**Kontraster:**
- Lys og mørke
- Fortid og nåtid
- Karakterers motsetninger

**Symbolikk:**
- Gjenstander med dypere mening
- Farger som bærer betydning
- Gjentagende motiver

**Språklig stil:**
- Korte setninger: Spenning, tempo
- Lange setninger: Refleksjon, skildring
- Billedspråk: Skaper stemning`,
    },
    {
      id: 'norsk-vg1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Åpninger som fenger',
      problem: `Skriv tre ulike åpninger til en novelle om en person som finner et brev.`,
      solution: `**Åpning 1 - In medias res:**
"Hendene skalv da jeg brettet ut det gulnede papiret. Etter tjue år visste jeg endelig sannheten."

**Åpning 2 - Miljøskildring:**
"Det gamle huset hadde stått tomt siden bestemors død. Støvet lå tykt over møblene, og lukten av tid trengte inn i lungene mine."

**Åpning 3 - Dialog:**
"'Du burde aldri ha åpnet den skuffen,' sa mora mi. Stemmen hennes var fremmed, hard."

**Analyse:**
- Åpning 1 skaper umiddelbar spenning og nysgjerrighet
- Åpning 2 setter stemning og kontekst
- Åpning 3 antyder konflikt og hemmeligheter

Alle tre vekker leserens interesse på ulike måter.`,
    },
    {
      id: 'norsk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv tre ulike versjoner av samme scene fra ulike synsvinkler:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv scenen fra jeg-perspektiv.',
            solution: 'Jeg-forteller gir nærhet og begrenset innsikt.',
          },
          {
            label: 'b',
            task: 'Skriv samme scene fra tredjeperson begrenset.',
            solution: 'Vi følger én karakter, men med litt mer distanse.',
          },
          {
            label: 'c',
            task: 'Skriv scenen fra allvitende perspektiv.',
            solution: 'Fortelleren kan vise flere karakterers tanker.',
          },
        ],
        hints: ['Velg en enkel scene med to personer', 'Se hvordan informasjonen endres med synsvinkelen'],
        solution: 'Ulike synsvinkler gir ulike effekter og påvirker hva leseren får vite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv en miljøskildring (100-150 ord) som skaper en bestemt stemning uten å si hva stemningen er.',
        hints: ['Bruk sanseskildringer', 'La detaljer formidle følelsen', 'Vis, ikke fortell'],
        solution: 'En god miljøskildring bruker konkrete detaljer for å skape stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en dialog (10-15 replikker) mellom to personer der konflikten kommer frem uten at noen sier direkte hva den handler om.',
        hints: ['La det ligge mening mellom linjene', 'Bruk kroppsspråk og pauser', 'Vis spenningen gjennom ordvalg'],
        solution: 'God dialog avslører mer enn den sier direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en kort novelle (400-500 ord) med følgende krav: minst tre litterære virkemidler, tydelig spenningskurve, overraskende avslutning.',
        hints: ['Planlegg strukturen først', 'Marker virkemidlene du bruker', 'Les teksten høyt for å sjekke flyten'],
        solution: 'Novellen skal vise bevisst bruk av virkemidler og god struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi tilbakemelding på en medelevs tekst og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på både styrker og forbedringsområder', 'Vær konkret og konstruktiv', 'Still spørsmål til teksten'],
        solution: 'Revisjon og respons er viktige deler av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Språk og identitet
// ============================================================================

export const CHAPTER_NORSK_VG1_4_1: TextbookChapter = {
  id: 'norsk-vg1-4-1',
  courseId: 'norsk-vg1',
  chapterNumber: '4.1',
  title: 'Språk og identitet',
  description: 'Utforsk sammenhengen mellom språk, identitet og tilhørighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sammenhengen mellom språk, kultur og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-4-1-intro',
      type: 'text',
      content: `## Språk og identitet

Språket er ikke bare et verktøy for kommunikasjon - det former hvem vi er og hvordan vi oppfatter verden. Gjennom språket uttrykker vi tilhørighet, verdier og personlighet.

**Språk og identitet henger sammen:**
- Dialekt viser geografisk tilhørighet
- Sosiolekt viser sosial gruppe
- Fagspråk viser yrkestilhørighet
- Ungdomsspråk viser generasjon

**Spørsmål å reflektere over:**
- Hvordan påvirker språket mitt identiteten min?
- Tilpasser jeg språket mitt til ulike situasjoner?
- Hva sier språkvalgene mine om meg?`,
    },
    {
      id: 'norsk-vg1-4-1-def-1',
      type: 'definition',
      title: 'Språklig variasjon',
      content: `**Dialekt:**
- Geografisk variasjon av språket
- Kjennetegnes av uttale, ord og bøyning
- De fire hoveddialektgruppene: østnorsk, vestnorsk, trøndersk, nordnorsk
- Norsk har stor dialektaksept sammenlignet med andre land

**Sosiolekt:**
- Språkvariasjon knyttet til sosiale grupper
- Påvirkes av utdanning, yrke, alder, kjønn
- Eksempel: akademisk språk vs. arbeiderspråk

**Idiolekt:**
- Din personlige måte å snakke på
- Unik kombinasjon av dialekt, sosiolekt og personlige trekk
- Påvirket av oppvekst, utdanning, interesser

**Kodeveksling:**
- Veksle mellom ulike språkstiler
- Tilpasse språket til situasjonen
- En naturlig del av språklig kompetanse`,
    },
    {
      id: 'norsk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Språk, makt og holdninger',
      content: `**Språk og makt:**
- Standardspråk vs. dialekter
- Hvem bestemmer hva som er "korrekt"?
- Språklig diskriminering

**Språkholdninger:**
- Fordommer basert på talemål
- "Finere" og "grovere" dialekter
- Språklig mangfold som ressurs

**Flerspråklighet:**
- Mange nordmenn er flerspråklige
- Ulike morsmål i Norge
- Samisk, kvensk og andre minoritetsspråk

**Språkpolitikk:**
- Norges to offisielle skriftspråk
- Språklig likestilling
- Språklige rettigheter`,
    },
    {
      id: 'norsk-vg1-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Kodeveksling i praksis',
      problem: `En elev fra Trøndelag går på skole i Oslo. Hvordan kan hen tilpasse språket til ulike situasjoner?`,
      solution: `**Med venner fra Trøndelag:**
- Bruker trønderdialekt
- Lokale uttrykk og ord
- Uformelt språk

**I klasserommet:**
- Kan beholde dialekten, men kanskje dempe noen trekk
- Tilpasser formelliteten til situasjonen
- Bruker fagspråk når det er relevant

**I jobbintervju:**
- Beholder dialekten (det er helt akseptert)
- Mer formelt ordvalg
- Tydelig og klar uttale

**Med besteforeldre:**
- Kanskje bruker mer tradisjonell dialekt
- Unngår ungdomsslang

**Refleksjon:**
Kodeveksling er ikke "falskt" eller "uærlig" - det er en naturlig tilpasning til kommunikasjonssituasjonen. Vi gjør det alle, mer eller mindre bevisst.`,
    },
    {
      id: 'norsk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Reflekter over ditt eget språk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan vil du beskrive din egen dialekt/idiolekt?',
            solution: 'Beskriv særtrekk ved ditt talemål: uttale, ordvalg, typiske uttrykk.',
          },
          {
            label: 'b',
            task: 'I hvilke situasjoner tilpasser du språket ditt?',
            solution: 'Reflekter over hvordan du snakker ulikt med venner, foreldre, lærere osv.',
          },
          {
            label: 'c',
            task: 'Hva sier språkvalgene dine om identiteten din?',
            solution: 'Tenk over hva talemålet ditt forteller om tilhørighet og bakgrunn.',
          },
        ],
        hints: ['Vær ærlig og reflektert', 'Det finnes ingen feil svar'],
        solution: 'Språklig selvrefleksjon øker bevisstheten om egen kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter språkholdninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordommer finnes mot ulike dialekter i Norge?',
            solution: 'Eksempler: Bergen-dialekt oppfattes som arrogant, nordnorsk som koselig, østlandsk som nøytralt.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du disse holdningene finnes?',
            solution: 'Kobling til geografi, sosial status, medierepresentasjon.',
          },
          {
            label: 'c',
            task: 'Hvordan kan vi motvirke språklige fordommer?',
            solution: 'Bevisstgjøring, eksponering for mangfold, holdningsarbeid.',
          },
        ],
        solution: 'Språkholdninger er ofte ubevisste og kan motvirkes gjennom refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk flerspråklighet i Norge: Hvor mange språk snakkes i Norge i dag? Hvilke minoritetsspråk har offisiell status?',
        hints: ['Bruk Språkrådet og SSB som kilder', 'Se på urfolksspråk og innvandrerspråk'],
        solution: 'Norge har stor språklig variasjon, med samisk, kvensk og romani som offisielle minoritetsspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en refleksjonstekst (250-300 ord) om forholdet mellom språk og identitet, med utgangspunkt i ditt eget liv.',
        hints: ['Bruk konkrete eksempler', 'Reflekter over både muntlig og skriftlig språk'],
        solution: 'Teksten skal vise personlig refleksjon og kobling til fagstoff.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør alle i Norge snakke bokmål/standardøstlandsk, eller bør vi bevare dialektene?',
        hints: ['Se saken fra flere sider', 'Tenk på kommunikasjon, identitet og demokrati'],
        solution: 'En god drøfting presenterer argumenter for og mot, og viser evne til nyansering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Digitale tekster og medier
// ============================================================================

export const CHAPTER_NORSK_VG1_4_2: TextbookChapter = {
  id: 'norsk-vg1-4-2',
  courseId: 'norsk-vg1',
  chapterNumber: '4.2',
  title: 'Digitale tekster og medier',
  description: 'Analyser og produser tekster i digitale medier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og produsere sammensatte tekster i digitale medier',
  ],
  content: [
    {
      id: 'norsk-vg1-4-2-intro',
      type: 'text',
      content: `## Digitale tekster

I dagens samfunn er digitale tekster en sentral del av hverdagen. Vi leser, skriver og deler tekster på måter som var utenkelige for få tiår siden.

**Digitale teksttyper:**
- Sosiale medier (Instagram, TikTok, Snapchat)
- Blogger og nettaviser
- Podkaster og videoinnhold
- Kommentarfelt og forum
- Meldinger og chat

**Særtrekk ved digitale tekster:**
- Multimodale (tekst, bilde, lyd, video)
- Interaktive (kommentarer, delinger)
- Flytende (kan endres, slettes, deles)
- Målbare (likes, visninger, rekkevidde)`,
    },
    {
      id: 'norsk-vg1-4-2-def-1',
      type: 'definition',
      title: 'Sammensatte tekster',
      content: `**Modaliteter:**
- **Verbalspråk:** Skriftlig og muntlig tekst
- **Visuell:** Bilder, farger, layout, typografi
- **Auditiv:** Musikk, lydeffekter, stemme
- **Kinestetisk:** Animasjon, bevegelse

**Samspill mellom modaliteter:**
- **Forsterkning:** Modalitetene støtter samme budskap
- **Utfylling:** Hver modalitet tilfører noe eget
- **Kontrast:** Modalitetene står i motsetning (ofte ironisk effekt)

**Digitale virkemidler:**
- Lenker og hypertext
- Interaktive elementer
- Algoritmebasert innhold
- Hashtags og metadata`,
    },
    {
      id: 'norsk-vg1-4-2-def-2',
      type: 'definition',
      title: 'Sosiale medier og påvirkning',
      content: `**Kjennetegn ved sosiale medier:**
- Brukerskapt innhold
- Umiddelbar deling
- Algoritmebasert visning
- Personlig branding

**Påvirkningsmekanismer:**
- **Filterbobler:** Algoritmer viser innhold basert på tidligere aktivitet
- **Ekkokamre:** Eksponering for likesinnede synspunkter
- **Influencer-markedsføring:** Skjult reklame gjennom personligheter
- **FOMO:** Fear Of Missing Out - sosial angst

**Kritisk mediebruk:**
- Vær bevisst på algoritmers påvirkning
- Sjekk kilder før du deler
- Reflekter over personvern
- Vær aktiv produsent, ikke bare konsument`,
    },
    {
      id: 'norsk-vg1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av Instagram-post',
      problem: `Analyser en influencers sponsede Instagram-post om et hudpleieprodukt.`,
      solution: `**Modaliteter:**
- Visuelt: Profesjonelt bilde, god belysning, produktet synlig
- Verbalt: Personlig tekst med "jeg elsker dette produktet"
- Interaktivt: Call-to-action ("link i bio"), hashtags

**Retorisk analyse:**
- **Etos:** Influencerens personlige merkevare og troverdighet
- **Patos:** Personlig anbefaling, "dette endret huden min"
- **Logos:** Eventuell henvisning til ingredienser/forskning

**Kritisk vurdering:**
- Er dette sponset? (bør merkes)
- Hvem er målgruppen?
- Hvilke behov appellerer det til?
- Er det skjulte motiver?

**Konklusjon:**
Innlegget fremstår personlig, men er i realiteten markedsføring. Samspillet mellom modalitetene skaper en følelse av autentisitet som tilslører det kommersielle formålet.`,
    },
    {
      id: 'norsk-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser en digital tekst fra sosiale medier:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke modaliteter brukes?',
            solution: 'Beskriv tekst, bilder, lyd, video og interaktive elementer.',
          },
          {
            label: 'b',
            task: 'Hvordan samspiller modalitetene?',
            solution: 'Forsterker de hverandre, utfyller de hverandre, eller skaper de kontrast?',
          },
          {
            label: 'c',
            task: 'Hva er formålet med teksten?',
            solution: 'Informere, underholde, overbevise, selge?',
          },
        ],
        hints: ['Velg en konkret post eller video', 'Se på kommentarfeltet som en del av teksten'],
        solution: 'Analyse av digitale tekster krever oppmerksomhet på flere lag av mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Reflekter over din egen mediebruk:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke sosiale medier bruker du mest?',
            solution: 'Beskriv bruksmønsteret ditt.',
          },
          {
            label: 'b',
            task: 'Hvordan påvirker algoritmene hva du ser?',
            solution: 'Reflekter over filterbobler og personalisert innhold.',
          },
          {
            label: 'c',
            task: 'Hvordan presenterer du deg selv digitalt?',
            solution: 'Tenk over bevisste og ubevisste valg i selviscenesettelse.',
          },
        ],
        hints: ['Vær ærlig med deg selv', 'Tenk på både positive og negative aspekter'],
        solution: 'Bevissthet om egen mediebruk er første steg mot kritisk forbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en sammensatt tekst for sosiale medier om et tema du bryr deg om.',
        hints: ['Velg plattform og målgruppe', 'Tenk gjennom modalitetsvalg', 'Vær bevisst på retorikk'],
        solution: 'Den sammensatte teksten skal vise bevisst bruk av modaliteter og retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign hvordan samme nyhetssak dekkes i en nettavis og på sosiale medier. Hva er forskjellene?',
        hints: ['Se på vinkling, kilder, modaliteter', 'Vurder troverdighet'],
        solution: 'Sammenligningen bør vise forståelse for ulike sjangerkrav og medieplattformers egenart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kronikk (300-400 ord) om et aktuelt tema knyttet til digitale medier (f.eks. skjermtid, falske nyheter, influencer-kultur).',
        hints: ['Bruk kildehenvisninger', 'Argumenter saklig', 'Ha en tydelig holdning'],
        solution: 'Kronikken skal kombinere personlig engasjement med saklig argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Litteraturhistorie - fra norrøn tid til romantikken
// ============================================================================

export const CHAPTER_NORSK_VG1_5_1: TextbookChapter = {
  id: 'norsk-vg1-5-1',
  courseId: 'norsk-vg1',
  chapterNumber: '5.1',
  title: 'Litteraturhistorie - fra norrøn tid til romantikken',
  description: 'Få oversikt over norsk og europeisk litteraturhistorie frem til romantikken.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg1-5-1-intro',
      type: 'text',
      content: `## Litteraturhistorie

Litteraturhistorien er historien om hvordan mennesker gjennom alle tider har uttrykt seg gjennom tekst. Ved å forstå litterære epoker kan vi bedre forstå tekstenes kontekst og mening.

**Hvorfor studere litteraturhistorie?**
- Forstå tekster i sin samtid
- Se utviklingslinjer og sammenhenger
- Kjenne kulturarven vår
- Lese med historisk bevissthet

**Perioder vi skal dekke:**
1. Norrøn litteratur (ca. 800-1350)
2. Middelalderen (ca. 500-1500)
3. Renessansen (ca. 1350-1600)
4. Barokken (ca. 1600-1700)
5. Opplysningstiden (ca. 1700-1800)
6. Romantikken (ca. 1800-1850)`,
    },
    {
      id: 'norsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Norrøn litteratur (ca. 800-1350)',
      content: `**Kjennetegn:**
- Skrevet på norrønt språk
- Muntlig tradisjon nedskrevet
- Kollektiv forfatterskap
- Religiøse og heroiske tema

**Sentrale sjangre:**
- **Eddadikt:** Gudedikt og heltedikt
- **Sagaer:** Fortellinger om konger, islendinger, helter
- **Skaldekvad:** Kompleks hyllestdiktning

**Viktige verk:**
- *Den eldre Edda* - gudedikt og heltedikt
- *Den yngre Edda* - Snorres lærebok i diktning
- *Heimskringla* - Norges kongesagaer
- Islendingesagaene

**Verdensanskuelse:**
- Skjebnetro (nornene spinner livets tråd)
- Ære og hevn som sentrale verdier
- Gudeverden med åser og vaner`,
    },
    {
      id: 'norsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Middelalderen til renessansen',
      content: `**Middelalderen i Europa (ca. 500-1500):**
- Kirken dominerer kultur og utdanning
- Latin er det litterære språket
- Religiøse tekster: bønner, legender, krøniker
- Folkeviser og eventyr i muntlig tradisjon

**Renessansen (ca. 1350-1600):**
- "Gjenfødelse" av antikkens kultur
- Fokus på mennesket (humanisme)
- Kunst og vitenskap blomstrer
- Boktrykkerkunsten spres

**Sentrale forfattere:**
- Dante Alighieri: *Den guddommelige komedie*
- Francesco Petrarca: Sonettdiktning
- William Shakespeare: Dramatikk
- Miguel de Cervantes: *Don Quijote*`,
    },
    {
      id: 'norsk-vg1-5-1-def-3',
      type: 'definition',
      title: 'Barokken og opplysningstiden',
      content: `**Barokken (ca. 1600-1700):**
- Overdådighet og kontraster
- Religiøse og verdslige tema
- Memento mori (husk at du skal dø)
- Formell diktning med faste regler

**Norsk barokk:**
- Petter Dass: *Nordlands Trompet*
- Dorothe Engelbretsdatter: Salmediktning
- Religiøs og naturlyrikk

**Opplysningstiden (ca. 1700-1800):**
- Fornuft og vitenskap i sentrum
- Kritikk av autoritet og tradisjon
- Tro på fremskritt
- Satire og samfunnskritikk

**Ludvig Holberg:**
- "Den nordiske Platon"
- Komedier som *Erasmus Montanus* og *Jeppe på Bjerget*
- Satirisk samfunnskritikk`,
    },
    {
      id: 'norsk-vg1-5-1-def-4',
      type: 'definition',
      title: 'Romantikken (ca. 1800-1850)',
      content: `**Kjennetegn:**
- Reaksjon mot opplysningstidens fornuft
- Følelser, fantasi og natur
- Det nasjonale og folkelige
- Det geniale og individuelle

**Europeisk romantikk:**
- Goethe og Schiller (Tyskland)
- Byron, Keats, Shelley (England)
- Victor Hugo (Frankrike)

**Norsk romantikk:**
- Henrik Wergeland: Nasjonalromantisk dikter
- Johan Sebastian Welhaven: Klassisistisk romantiker
- Asbjørnsen og Moe: Eventyrsamlere
- Ivar Aasen: Språkforsker og dikter

**Nasjonalromantikken:**
- Søken etter nasjonal identitet
- Interesse for folkediktning
- Bonden og naturen idealiseres
- Nasjonsbygging gjennom kultur`,
    },
    {
      id: 'norsk-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra norrønt til romantikk',
      problem: `Sammenlign hvordan naturen fremstilles i norrøn litteratur og i romantikken.`,
      solution: `**Norrøn litteratur:**
- Naturen er farlig og uforutsigbar
- Havet, fjellene og skogen er hindringer
- Naturen er befolket av vetter og troll
- Mennesket kjemper mot naturkreftene

**Eksempel fra Håvamål:**
"Vær varsom når du vandrer over broer, / på ukjent farvann og i fjellets rike"

**Romantikken:**
- Naturen er vakker og inspirerende
- Fjell og fosser symboliserer frihet
- Naturen speiler menneskets følelser
- Mennesket søker til naturen for ro

**Eksempel fra Wergeland:**
"Norges fjelde, dypt i barm / gjemmer sølv og guld så varm"

**Forskjellen forklart:**
- Norrøn tid: Mennesket lever i naturen, kjemper for overlevelse
- Romantikken: Mennesket lever i byer, lengter til naturen
- Teknologisk utvikling gjør naturen mindre truende
- Nasjonalisme gjør naturen til identitetsmarkør`,
    },
    {
      id: 'norsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Koble epoke til kjennetegn:',
        subTasks: [
          {
            label: 'a',
            task: 'Fornuft, vitenskap, satire',
            solution: 'Opplysningstiden',
            multipleChoiceOptions: ['Norrøn tid', 'Barokken', 'Opplysningstiden', 'Romantikken'],
          },
          {
            label: 'b',
            task: 'Følelser, natur, det nasjonale',
            solution: 'Romantikken',
            multipleChoiceOptions: ['Norrøn tid', 'Renessansen', 'Barokken', 'Romantikken'],
          },
          {
            label: 'c',
            task: 'Ære, skjebne, heltedåd',
            solution: 'Norrøn tid',
            multipleChoiceOptions: ['Norrøn tid', 'Middelalderen', 'Opplysningstiden', 'Romantikken'],
          },
        ],
        solution: 'a) Opplysningstiden, b) Romantikken, c) Norrøn tid',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les et utdrag fra et norrønt verk (f.eks. Håvamål eller en saga) og beskriv kjennetegn ved teksten.',
        hints: ['Se på tema, verdier og språk', 'Plasser teksten i sin samtid'],
        solution: 'Analysen bør identifisere norrøne kjennetegn som skjebnetro, ære, og konkret språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et dikt fra romantikken og analyser hvordan epokens idealer kommer til uttrykk.',
        hints: ['Se etter natur, følelser, nasjonalisme', 'Bruk kunnskap om konteksten'],
        solution: 'Analysen bør koble tekstens innhold og form til romantikkens idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en tidslinje over de litterære epokene fra norrøn tid til romantikken med viktige kjennetegn og forfattere.',
        hints: ['Inkluder årstall, kjennetegn og eksempler', 'Bruk gjerne farger og bilder'],
        solution: 'Tidslinjen gir oversikt og viser utviklingslinjer i litteraturhistorien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvorfor er det viktig å kjenne litteraturhistorien for å forstå tekster fra fortiden?',
        hints: ['Tenk på kontekst, verdier, språk', 'Gi konkrete eksempler'],
        solution: 'Drøftingen bør argumentere for verdien av historisk kunnskap i teksttolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Skriving av fagartikkel
// ============================================================================

export const CHAPTER_NORSK_VG1_5_2: TextbookChapter = {
  id: 'norsk-vg1-5-2',
  courseId: 'norsk-vg1',
  chapterNumber: '5.2',
  title: 'Skriving av fagartikkel',
  description: 'Lær å skrive fagartikler med god struktur og kildebruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler med klar struktur, korrekt kildebruk og tilpasset språk',
  ],
  content: [
    {
      id: 'norsk-vg1-5-2-intro',
      type: 'text',
      content: `## Fagartikkelen

En fagartikkel er en saklig, informerende tekst som formidler kunnskap om et avgrenset tema. Den er en viktig sjanger i skolen og i yrkeslivet.

**Kjennetegn på fagartikkelen:**
- Saklig og informerende
- Klar og logisk struktur
- Kildebasert og etterrettelig
- Tilpasset målgruppe og formål

**Når brukes fagartikkelen?**
- Skoleoppgaver og eksamener
- Akademisk skriving
- Populærvitenskapelig formidling
- Rapporter og utredninger`,
    },
    {
      id: 'norsk-vg1-5-2-def-1',
      type: 'definition',
      title: 'Struktur i fagartikkelen',
      content: `**Innledning:**
- Presentere tema og problemstilling
- Fange leserens interesse
- Gjøre rede for avgrensning
- Eventuelt definere sentrale begreper

**Hoveddel:**
- Systematisk gjennomgang av tema
- Logisk oppbygning (kronologisk, tematisk, fra generelt til spesifikt)
- Hvert avsnitt har ett hovedpoeng
- Avsnittsmarkører og overganger

**Avslutning:**
- Oppsummere hovedpunkter
- Besvare problemstillingen
- Eventuelt peke på videre perspektiver
- Ikke introdusere nytt stoff

**Kildeliste:**
- Alle kilder som er brukt
- Alfabetisk ordnet
- Korrekt formatert`,
    },
    {
      id: 'norsk-vg1-5-2-def-2',
      type: 'definition',
      title: 'Språk og stil',
      content: `**Kjennetegn på faglig språk:**
- Saklig og nøytralt
- Presis ordbruk
- Passende fagtermer
- Variert setningsbygning

**Unngå:**
- Muntlig språk og slang
- For mange personlige pronomen (jeg, vi)
- Følelsesladet språk
- Generaliseringer uten belegg

**Tips for godt fagspråk:**
- Bruk aktive verb der det passer
- Varier mellom korte og lengre setninger
- Unngå unødvendig komplisert språk
- Forklar fagtermer første gang de brukes

**Overganger og sammenheng:**
- "For det første..., for det andre..."
- "I tillegg...", "Dessuten..."
- "På den annen side..."
- "Oppsummert...", "Avslutningsvis..."`,
    },
    {
      id: 'norsk-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra problemstilling til struktur',
      problem: `Planlegg en fagartikkel om temaet "Ungdom og søvn".`,
      solution: `**Problemstilling:**
"Hvordan påvirker søvnmangel ungdommers helse og skoleprestasjoner?"

**Struktur:**

**Innledning:**
- Startpåstand: "Norske ungdommer sover i gjennomsnitt én time mindre enn anbefalt."
- Presentasjon av tema og problemstilling
- Avgrensning: Fokus på helse og skole, ikke årsaker

**Hoveddel:**
1. Hva sier forskningen om ungdom og søvn?
   - Anbefalt søvnmengde
   - Faktisk søvnmengde

2. Fysiske konsekvenser av søvnmangel
   - Immunforsvar
   - Hormonbalanse
   - Overvekt

3. Psykiske konsekvenser
   - Konsentrasjon
   - Hukommelse
   - Følelsesregulering

4. Påvirkning på skoleprestasjoner
   - Forskning på sammenheng søvn-karakterer
   - Konkrete eksempler

**Avslutning:**
- Oppsummering av hovedfunn
- Svar på problemstillingen
- Eventuelt forslag til tiltak

**Kilder:**
- Folkehelseinstituttet, Helsedirektoratet, relevante studier`,
    },
    {
      id: 'norsk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder disse problemstillingene for en fagartikkel:',
        subTasks: [
          {
            label: 'a',
            task: '"Klima"',
            solution: 'For vagt - må avgrenses til et konkret aspekt.',
          },
          {
            label: 'b',
            task: '"Hvordan påvirker klimaendringer nordnorsk fiske?"',
            solution: 'God - avgrenset og undersøkbar.',
          },
          {
            label: 'c',
            task: '"Klimaendringer er farlig"',
            solution: 'For påstående - en fagartikkel skal undersøke, ikke konkludere på forhånd.',
          },
        ],
        solution: 'En god problemstilling er avgrenset, undersøkbar og nøytral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Formuler en problemstilling og lag en disposisjon for en fagartikkel om et selvvalgt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en avgrenset problemstilling.',
            solution: 'Problemstillingen bør være et spørsmål som kan undersøkes.',
          },
          {
            label: 'b',
            task: 'Lag en disposisjon med innledning, 3-4 punkter i hoveddelen, og avslutning.',
            solution: 'Disposisjonen skal vise logisk oppbygning.',
          },
          {
            label: 'c',
            task: 'List opp minst tre relevante kilder du kan bruke.',
            solution: 'Kildene bør være troverdige og relevante for temaet.',
          },
        ],
        hints: ['Velg et tema du har tilgang til gode kilder om', 'Vær realistisk med omfanget'],
        solution: 'God planlegging er halve jobben med en fagartikkel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv innledningen til fagartikkelen (100-150 ord). Den skal presentere tema, problemstilling og avgrensning.',
        hints: ['Start med noe som fanger oppmerksomheten', 'Vær tydelig på hva artikkelen handler om'],
        solution: 'Innledningen skal gi leseren en klar forventning om hva som kommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en fullstendig fagartikkel (500-700 ord) med korrekt kildebruk og kildeliste.',
        hints: ['Følg disposisjonen', 'Bruk kildehenvisninger underveis', 'Les gjennom og sjekk struktur og språk'],
        solution: 'Fagartikkelen vurderes etter struktur, innhold, kildebruk og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi tilbakemelding på en medelevs fagartikkel og revider din egen basert på tilbakemelding.',
        hints: ['Fokuser på struktur, kilder og språk', 'Vær konstruktiv og konkret', 'Bruk vurderingskriteriene'],
        solution: 'Responsarbeid er en viktig del av skriveprosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.1: Norsk språkhistorie
// ============================================================================

export const CHAPTER_NORSK_VG1_6_1: TextbookChapter = {
  id: 'norsk-vg1-6-1',
  courseId: 'norsk-vg1',
  chapterNumber: '6.1',
  title: 'Norsk språkhistorie',
  description: 'Utforsk utviklingen av det norske språket fra urnordisk til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-6-1-intro',
      type: 'text',
      content: `## Det norske språkets historie

Norsk språk har utviklet seg over mer enn tusen år. Fra de eldste runeinnskriftene til dagens digitale kommunikasjon har språket gjennomgått store forandringer.

**Hovedperioder i norsk språkhistorie:**
- **Urnordisk** (ca. 200-700): Felles nordisk språk
- **Norrønt** (ca. 700-1350): Vikingtid og middelalder
- **Mellomnorsk** (ca. 1350-1525): Hansatid og språkblanding
- **Dansk-norsk** (ca. 1525-1814): Unionen med Danmark
- **Moderne norsk** (1814-): Nasjonsbygging og språkstrid`,
    },
    {
      id: 'norsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Fra urnordisk til norrønt',
      content: `**Urnordisk (ca. 200-700)**
De eldste skriftlige kildene er runeinnskrifter. Språket var relativt likt over hele Skandinavia.

**Viktige kjennetegn:**
- 24 runer (den eldre futharken)
- Komplekst bøyningssystem
- Mange kasusformer

**Norrønt (ca. 700-1350)**
I vikingtiden utviklet det seg regionale forskjeller. Norrønt er språket i sagaene og eddadiktningen.

**Viktige trekk:**
- Forenklet runesystem (16 runer)
- Latinsk alfabet innføres med kristendommen
- Rik litterær tradisjon
- Fire kasus (nominativ, akkusativ, dativ, genitiv)`,
    },
    {
      id: 'norsk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Mellomnorsk og dansk-norsk',
      content: `**Mellomnorsk (ca. 1350-1525)**
Svartedauden (1349) førte til stor befolkningsnedgang. Mange skrivekyndige døde, og språket ble mindre standardisert.

**Hanseatisk påvirkning:**
- Tyske kjøpmenn dominerte handelen
- Mange tyske lånord kom inn i norsk
- Eksempler: handel, krig, frue, herskap

**Dansk-norsk periode (ca. 1525-1814)**
Under unionen med Danmark ble dansk skriftspråk. Talespråket forble norsk, men fikk dansk påvirkning.

**Konsekvenser:**
- Dansk ble administrasjonsspråk
- Bibeloversettelser på dansk
- Norske dialekter levde videre i talespråket
- Grunnlag for dagens målformsdebatt`,
    },
    {
      id: 'norsk-vg1-6-1-def-3',
      type: 'definition',
      title: 'Moderne norsk (1814-)',
      content: `**Nasjonsbygging og språkstrid**
Etter 1814 ble spørsmålet om et eget norsk skriftspråk sentralt.

**To hovedretninger:**
1. **Fornorsking av dansk** (Knud Knudsen)
   - Gradvis tilpasning til norsk uttale
   - Førte til riksmål/bokmål

2. **Nytt språk basert på dialekter** (Ivar Aasen)
   - Samlet dialektord fra hele landet
   - Skapte landsmål/nynorsk

**Språkpolitiske vedtak:**
- 1885: Jamstillingsvedtaket - landsmål og riksmål likestilt
- 1929: Navnene nynorsk og bokmål innføres
- 1938-2012: Ulike reformer for tilnærming/normering

**I dag:**
- To offisielle målformer: bokmål og nynorsk
- Kommuner og institusjoner velger målform
- Elever har rett til lærebøker på sin målform`,
    },
    {
      id: 'norsk-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Språkendring gjennom tid',
      problem: 'Sammenlign disse setningene fra ulike perioder:',
      solution: `**Norrønt (ca. 1200):**
"Hann réð fyrir landi sínu."
(Han rådde for landet sitt.)

**Mellomnorsk (ca. 1450):**
"Han raadde for lande sit."

**Dansk-norsk (ca. 1750):**
"Han raadede for sit Land."

**Moderne bokmål:**
"Han styrte landet sitt."

**Moderne nynorsk:**
"Han styrte landet sitt."

**Observasjoner:**
- Bøyningsendelser forsvinner gradvis
- Ordstilling endres
- Skrivemåten forenkles
- Dansk påvirkning synlig i mellomperioden`,
    },
    {
      id: 'norsk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sett riktig periode til disse språktrekkene:',
        subTasks: [
          {
            label: 'a',
            task: 'Runeinnskrifter med 24 tegn.',
            solution: 'Urnordisk periode (ca. 200-700)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
          {
            label: 'b',
            task: 'Mange tyske lånord kommer inn i språket.',
            solution: 'Mellomnorsk periode - hansatiden (ca. 1350-1525)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
          {
            label: 'c',
            task: 'Sagaer og eddadikt skrives ned.',
            solution: 'Norrøn periode (ca. 700-1350)',
            multipleChoiceOptions: ['Urnordisk', 'Norrønt', 'Mellomnorsk', 'Dansk-norsk'],
          },
        ],
        solution: 'a) Urnordisk, b) Mellomnorsk, c) Norrønt',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor vi i dag har to skriftspråk i Norge (bokmål og nynorsk).',
        hints: ['Tenk på unionen med Danmark', 'Hvilke to strategier fantes for å skape et norsk skriftspråk?'],
        solution: 'Under unionen med Danmark ble dansk skriftspråk i Norge. Etter 1814 oppsto to strategier: Knud Knudsen ville fornorske dansk gradvis (→ bokmål), mens Ivar Aasen ville bygge et nytt språk på norske dialekter (→ nynorsk). Begge ble offisielle i 1885.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn fem ord i moderne norsk som er lånt fra tysk i hansatiden.',
        hints: ['Tenk på ord knyttet til handel, håndverk eller samfunn', 'Mange vanlige ord har tysk opprinnelse'],
        solution: 'Eksempler: arbeid, betale, handel, frue, herskap, snekker, skomaker, straff, språk, penger. Disse ordene kom inn i norsk gjennom handelskontakt med hanseatene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter: Burde Norge ha ett felles skriftspråk, eller er det en fordel med to målformer?',
        hints: ['Vurder argumenter for og mot', 'Tenk på identitet, praktiske hensyn og kulturarv'],
        solution: 'Dette er et debattspørsmål uten fasitsvar. Argumenter FOR to målformer: bevarer språkmangfold, styrker dialektene, kulturarv. Argumenter FOR ett språk: praktisk forenkling, mindre kostbart, enklere å lære. Det viktige er å forstå argumentene på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Les en kort tekst på norrønt (f.eks. fra en saga) og prøv å identifisere ord du gjenkjenner.',
        hints: ['Mange ord ligner på moderne norsk', 'Se etter navn og vanlige ord'],
        solution: 'Mange norrøne ord er gjenkjennelige: maðr (mann), kona (kone), skip (skip), land (land). Øvelsen viser kontinuiteten i språket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Nynorsk og bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_6_2: TextbookChapter = {
  id: 'norsk-vg1-6-2',
  courseId: 'norsk-vg1',
  chapterNumber: '6.2',
  title: 'Nynorsk og bokmål',
  description: 'Forstå forskjellene mellom målformene og mestre grunnleggende nynorsk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive tekster på hovedmål og sidemål',
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-6-2-intro',
      type: 'text',
      content: `## To målformer - én norsk kultur

Norge har to offisielle skriftspråk: bokmål og nynorsk. Begge er fullverdige språk med lang historie og rik litteratur.

**Fakta om målformene:**
- Ca. 87% bruker bokmål som hovedmål
- Ca. 13% bruker nynorsk som hovedmål
- Alle elever lærer begge målformer
- Offentlige institusjoner skal svare på den målformen de mottar

**Hvorfor to målformer?**
De to målformene representerer ulike tradisjoner og verdier i norsk språkhistorie, og begge har sin plass i det norske samfunnet.`,
    },
    {
      id: 'norsk-vg1-6-2-def-1',
      type: 'definition',
      title: 'Hovedforskjeller mellom bokmål og nynorsk',
      content: `**Ordformer:**
| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| ikke | ikkje |
| hva | kva |
| hvordan | korleis |
| noe | noko |
| mye | mykje |

**Bøyning av verb:**
| Bokmål | Nynorsk |
|--------|---------|
| kaster | kastar |
| kastet | kasta |
| har kastet | har kasta |

**Bøyning av substantiv:**
| Bokmål | Nynorsk |
|--------|---------|
| bilen | bilen |
| bilene | bilane |
| jenta | jenta |
| jentene | jentene |

**Merk:** Begge målformer har valgfrihet i mange former. Det finnes konservative og radikale varianter av begge.`,
    },
    {
      id: 'norsk-vg1-6-2-def-2',
      type: 'definition',
      title: 'Nynorsk grammatikk',
      content: `**Infinitiv:**
Nynorsk bruker a-infinitiv: å kaste, å lese, å skrive

**Sterke verb:**
Følger ofte andre mønstre enn bokmål:
- skrive - skreiv - har skrive (nynorsk)
- skrive - skrev - har skrevet (bokmål)

**Hunkjønnsord:**
Nynorsk har tydeligere hunkjønn:
- ei jente - jenta - jenter - jentene
- ei bok - boka - bøker - bøkene

**Flertall:**
- -ar for hankjønn: gutar, bilar, hestar
- -er for hunkjønn: jenter, bøker
- Variasjon for intetkjønn: hus, barn

**Adjektiv:**
Samsvarsbøying i nynorsk:
- ein fin bil (hankjønn)
- ei fin jente (hunkjønn)
- eit fint hus (intetkjønn)`,
    },
    {
      id: 'norsk-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Oversettelse mellom målformer',
      problem: 'Oversett denne teksten til nynorsk:\n\n"Jeg vet ikke hva som skjedde. Det var mye støy, og jeg hørte noen rope. Etterpå fant vi bilen ved veien."',
      solution: `**Nynorsk versjon:**
"Eg veit ikkje kva som hende. Det var mykje støy, og eg høyrde nokon rope. Etterpå fann vi bilen ved vegen."

**Forklaring av endringene:**
- jeg → eg
- vet → veit
- ikke → ikkje
- hva → kva
- skjedde → hende
- mye → mykje
- hørte → høyrde
- noen → nokon
- fant → fann
- veien → vegen`,
    },
    {
      id: 'norsk-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Oversett disse setningene til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg liker ikke å lese bøker om natten."',
            solution: '"Eg likar ikkje å lese bøker om natta."',
          },
          {
            label: 'b',
            task: '"Hun sa at hun ikke visste hva hun skulle gjøre."',
            solution: '"Ho sa at ho ikkje visste kva ho skulle gjere."',
          },
          {
            label: 'c',
            task: '"Vi fant mange fine steder i byen."',
            solution: '"Vi fann mange fine stader i byen."',
          },
        ],
        hints: ['Bruk ordliste hvis nødvendig', 'Husk verbendelser'],
        solution: 'Nynorsk har andre ordformer og verbendelser enn bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bøy disse verbene på nynorsk (infinitiv - presens - preteritum - perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å kaste',
            solution: 'å kaste - kastar - kasta - har kasta',
          },
          {
            label: 'b',
            task: 'å skrive',
            solution: 'å skrive - skriv - skreiv - har skrive',
          },
          {
            label: 'c',
            task: 'å finne',
            solution: 'å finne - finn - fann - har funne',
          },
        ],
        solution: 'Sterke verb har vokalendring, svake verb får -a i preteritum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort tekst (100-150 ord) på nynorsk om en aktivitet du liker.',
        hints: ['Bruk ordbok og grammatikkhjelp', 'Les gjennom teksten for å sjekke ordformer'],
        solution: 'Teksten skal vise at du behersker grunnleggende nynorsk grammatikk og ordforråd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn tre nynorske forfattere og les et utdrag fra en av dem. Hva legger du merke til ved språket?',
        hints: ['Jon Fosse, Tarjei Vesaas, Olav H. Hauge er kjente nynorskforfattere'],
        solution: 'Nynorsk litteratur har en rik tradisjon. Språket kan virke annerledes, men formidler de samme følelsene og ideene som bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign en tekst på bokmål og nynorsk. Hvilke forskjeller finner du?',
        hints: ['Se på ordformer, verbendelser og setningsstruktur', 'Bruk en avisartikkel eller offentlig dokument'],
        solution: 'Sammenligningen skal vise forståelse for de systematiske forskjellene mellom målformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.1: Språkmangfold i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_7_1: TextbookChapter = {
  id: 'norsk-vg1-7-1',
  courseId: 'norsk-vg1',
  chapterNumber: '7.1',
  title: 'Språkmangfold i Norge',
  description: 'Utforsk dialekter, sosiolekter og minoritetsspråk i det norske samfunnet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over språklig mangfold i Norge',
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-7-1-intro',
      type: 'text',
      content: `## Språklig mangfold

Norge har et rikt språkmangfold. I tillegg til bokmål og nynorsk har vi dialekter, samiske språk, minoritetsspråk og innvandrerspråk.

**Språk i Norge:**
- **Norsk** (bokmål og nynorsk) - offisielt språk
- **Samiske språk** - offisielle i samiske områder
- **Kvensk, romani og romanes** - nasjonale minoritetsspråk
- **Norsk tegnspråk** - anerkjent språk
- **Innvandrerspråk** - over 150 ulike språk

**Hvorfor er språkmangfold viktig?**
Språk er knyttet til identitet, kultur og tilhørighet. Et samfunn som respekterer språkmangfold, respekterer også menneskene som snakker disse språkene.`,
    },
    {
      id: 'norsk-vg1-7-1-def-1',
      type: 'definition',
      title: 'Dialekter i Norge',
      content: `**Hva er en dialekt?**
En dialekt er en geografisk språkvarietet. Norge har et rikt dialektmangfold sammenlignet med mange andre land.

**De fire hoveddialektområdene:**

**1. Østnorsk**
- Oslo, Østfold, Hedmark, Oppland
- Kjennetegn: Tjukk l, retroflekser (rd, rt, rn blir én lyd)

**2. Vestnorsk**
- Vestlandet fra Rogaland til Møre
- Kjennetegn: Ofte diftongering (stein, røyk, haust)

**3. Trøndersk**
- Trøndelag
- Kjennetegn: Palatalisering (ballj, mannj), apokope

**4. Nordnorsk**
- Nordland, Troms, Finnmark
- Kjennetegn: Nektingsadverb (ikkje/ikke), vokalutjevning

**Dialektbruk i dag:**
Norge har sterk tradisjon for dialektbruk. I motsetning til mange land bruker nordmenn dialekt i de fleste sammenhenger, også i media og offentligheten.`,
    },
    {
      id: 'norsk-vg1-7-1-def-2',
      type: 'definition',
      title: 'Samiske språk',
      content: `**Urfolksspråk i Norge**
Samene er Norges urfolk, og samiske språk har offisiell status i samiske forvaltningsområder.

**Samiske språk i Norge:**
- **Nordsamisk** - flest talere, ca. 15 000-25 000
- **Lulesamisk** - ca. 500-1000 talere
- **Sørsamisk** - ca. 300-500 talere

**Historisk bakgrunn:**
Samiske språk ble lenge undertrykt gjennom fornorskingspolitikk. Barn ble straffet for å snakke samisk på skolen. Denne politikken varte fra ca. 1850 til 1960-tallet.

**I dag:**
- Samiske språk undervises i skolen
- Sametinget arbeider for språkbevaring
- NRK Sápmi sender på samisk
- Det finnes samisk litteratur, musikk og media

**Revitalisering:**
Mange arbeider for å styrke samiske språk. Dette inkluderer språkkurs, barnehager og skoler med samisk som undervisningsspråk.`,
    },
    {
      id: 'norsk-vg1-7-1-def-3',
      type: 'definition',
      title: 'Sosiolekter og språklige varianter',
      content: `**Hva er en sosiolekt?**
En sosiolekt er en språkvarietet knyttet til sosiale grupper, ikke geografi.

**Faktorer som påvirker sosiolekt:**
- Alder (ungdomsspråk vs. voksent språk)
- Sosial bakgrunn
- Utdanning og yrke
- Interesser og subkulturer

**Multietnolekt / kebabnorsk:**
I flerkulturelle bydeler har det utviklet seg nye språkvarieteter. Disse kombinerer norsk med elementer fra innvandrerspråk.

**Kjennetegn:**
- Forenklet grammatikk
- Lånord fra flere språk
- Egen intonasjon

**Språkholdninger:**
Folk har ulike holdninger til språkvarianter. Noen ser på dialekter og sosiolekter som rikdom, andre som avvik fra "korrekt" språk. Det er viktig å være bevisst på egne språkholdninger.`,
    },
    {
      id: 'norsk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser hvilket dialektområde disse trekkene hører til:',
        subTasks: [
          {
            label: 'a',
            task: 'Tjukk l og retroflekser.',
            solution: 'Østnorsk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
          {
            label: 'b',
            task: 'Palatalisering av n og l (ballj, mannj).',
            solution: 'Trøndersk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
          {
            label: 'c',
            task: 'Sterke diftonger (stein, røyk).',
            solution: 'Vestnorsk',
            multipleChoiceOptions: ['Østnorsk', 'Vestnorsk', 'Trøndersk', 'Nordnorsk'],
          },
        ],
        solution: 'a) Østnorsk, b) Trøndersk, c) Vestnorsk',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv din egen dialekt eller talemål. Hvilke kjennetegn har den?',
        hints: ['Tenk på uttale, ordvalg og grammatikk', 'Sammenlign med standardspråk'],
        solution: 'Beskrivelsen bør inkludere konkrete eksempler på særtrekk ved talemålet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk fornorskingspolitikken overfor samer og kvener. Hvordan påvirket den disse gruppenes språk og kultur?',
        hints: ['Bruk kilder som Store norske leksikon eller Sametingets nettsider', 'Se på konsekvenser for språkbruk i dag'],
        solution: 'Fornorskingspolitikken førte til at mange mistet morsmålet sitt. I dag arbeides det med revitalisering av samiske språk og kvensk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter: Bør vi bevare alle dialekter, eller er det greit at språket endrer seg og dialekter forsvinner?',
        hints: ['Vurder argumenter fra ulike synsvinkler', 'Tenk på identitet, praktiske hensyn og språkutvikling'],
        solution: 'Dette er en debatt med gode argumenter på begge sider. Noen mener dialekter er viktig kulturarv, andre mener språkendring er naturlig og uunngåelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Intervju en person med annen dialekt enn deg selv. Hvilke forskjeller oppdager du?',
        hints: ['Spør om ordvalg, uttale og uttrykk', 'Ta notater om konkrete eksempler'],
        solution: 'Intervjuet skal vise forståelse for dialektforskjeller og respekt for språklig variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Språk i endring
// ============================================================================

export const CHAPTER_NORSK_VG1_7_2: TextbookChapter = {
  id: 'norsk-vg1-7-2',
  courseId: 'norsk-vg1',
  chapterNumber: '7.2',
  title: 'Språk i endring',
  description: 'Forstå hvordan og hvorfor språk endrer seg over tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for utvikling og variasjon i norsk språk',
  ],
  content: [
    {
      id: 'norsk-vg1-7-2-intro',
      type: 'text',
      content: `## Språkendring

Alle levende språk endrer seg. Norsk i dag er annerledes enn norsk for 100 år siden, og det vil fortsette å endre seg.

**Hvorfor endrer språk seg?**
- Kontakt med andre språk
- Samfunnsendringer
- Teknologisk utvikling
- Generasjonsforskjeller
- Bevisst språkpolitikk

**Typer språkendring:**
- **Lydendring:** Uttalen endres
- **Grammatisk endring:** Bøyninger og setningsbygning endres
- **Ordforrådsendring:** Nye ord kommer til, gamle forsvinner
- **Betydningsendring:** Ord får ny betydning`,
    },
    {
      id: 'norsk-vg1-7-2-def-1',
      type: 'definition',
      title: 'Nye ord og lånord',
      content: `**Hvor kommer nye ord fra?**

**1. Lånord fra andre språk**
Norsk har alltid lånt ord fra andre språk:
- Tysk (middelalderen): arbeid, straff, handel
- Fransk (1700-1800-tallet): restaurant, sjåfør, garderobe
- Engelsk (1900-tallet →): film, jobb, stress, mail, cool

**2. Nyord (neologismer)**
Ord som skapes for nye fenomener:
- nettbrett, smarttelefon, strømming
- influenser, podcast, meme

**3. Sammensetninger**
Norsk lager mange nye ord ved sammensetning:
- klimakrise, hjemmekontor, vaksineskepsis

**4. Betydningsutvidelse**
Gamle ord får ny betydning:
- "mus" → datamaskinmus
- "nett" → internett
- "sky" → datalagring i skyen

**Språkrøkt:**
Språkrådet arbeider med å finne gode norske ord for nye begreper, men mange engelske ord blir værende.`,
    },
    {
      id: 'norsk-vg1-7-2-def-2',
      type: 'definition',
      title: 'Grammatiske endringer',
      content: `**Forenkling av bøyning**
Norsk har over tid fått enklere bøyning:
- Fra fire kasus til null (norrønt → moderne norsk)
- Færre sterke verb
- Enklere kjønnssystem i noen dialekter

**Endringer i setningsbygning**
- Mer bruk av "det" som formelt subjekt
- Endringer i ordstilling
- Påvirkning fra engelsk syntaks

**Eksempel på påvirkning fra engelsk:**
- "Jeg er sulten" (tradisjonelt: "Jeg er sulten")
- Men: "Jeg trenger ikke det" (påvirket av "I don't need that")

**Ulike syn på språkendring:**
Noen mener språkendringer er naturlige og positive, mens andre er bekymret for at norsk mister egenart. Begge perspektiver er legitime i språkdebatten.`,
    },
    {
      id: 'norsk-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Ord som har endret betydning',
      problem: 'Hvilken betydning hadde disse ordene før, og hva betyr de nå?',
      solution: `**"Dust"**
- Før: Modig, dristig (positivt)
- Nå: Dum, tåpelig (negativt)

**"Snill"**
- Før: Dyktig, flink
- Nå: Vennlig, godhjertet

**"Høvisk"**
- Før: Passende for hoffet, dannet
- Nå: Lite brukt, høytidelig

**"Koste"**
- Norrønt: Å velge (beslektet med "kår")
- Nå: Å ha en pris

Betydningsendring er en naturlig del av språkutviklingen. Ord kan få mer positiv, mer negativ, snevrere eller videre betydning over tid.`,
    },
    {
      id: 'norsk-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Finn fem engelske lånord som har kommet inn i norsk de siste 20 årene. Finnes det norske alternativer?',
        hints: ['Tenk på teknologi, sosiale medier og ungdomskultur'],
        solution: 'Eksempler: poste, streame, influenser, liken, ghoste. Norske alternativer kan være: legge ut, strømme, påvirker, like/gille, forsvinne fra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign en avisartikkel fra 1950-tallet med en fra i dag. Hvilke språklige forskjeller finner du?',
        hints: ['Se på ordvalg, setningslengde og stilnivå', 'Nasjonalbiblioteket har digitaliserte aviser'],
        solution: 'Du vil sannsynligvis finne forskjeller i formelt vs. uformelt språk, ordvalg, og engelske lånord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter: Er det viktig å begrense engelske lånord i norsk, eller er språkblanding naturlig og uproblematisk?',
        hints: ['Vurder argumenter for og mot', 'Tenk på identitet, forståelse og språkutvikling'],
        solution: 'Dette er et debattspørsmål. Noen mener at for mye engelsk truer norsk språk, andre mener at lånord er en naturlig del av språkutvikling og ikke problematisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag fem nye norske ord for engelske uttrykk som brukes mye i dag.',
        hints: ['Bruk sammensetning eller betydningsutvidelse', 'Tenk på hva som ville fungere naturlig på norsk'],
        solution: 'Kreativ oppgave. Eksempler: "livestrømming" for livestream, "nettprater" for influencer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Intervju en eldre person om ord og uttrykk de brukte da de var unge. Hvilke av disse er ukjente for deg?',
        hints: ['Spør om ord for teknologi, arbeid og dagligliv', 'Noter ned ukjente ord og finn ut hva de betyr'],
        solution: 'Intervjuet viser hvordan ordforrådet endres mellom generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1: Debattinnlegg og meningsytring
// ============================================================================

export const CHAPTER_NORSK_VG1_8_1: TextbookChapter = {
  id: 'norsk-vg1-8-1',
  courseId: 'norsk-vg1',
  chapterNumber: '8.1',
  title: 'Debattinnlegg og meningsytring',
  description: 'Lær å skrive effektive debattinnlegg og delta i offentlig debatt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive debattinnlegg og andre argumenterende tekster',
    'bruke retoriske appellformer og virkemidler',
  ],
  content: [
    {
      id: 'norsk-vg1-8-1-intro',
      type: 'text',
      content: `## Å delta i offentlig debatt

I et demokrati er det viktig at borgere kan ytre meninger og delta i debatt. Debattinnlegg er en sentral sjanger for meningsytring.

**Hvor publiseres debattinnlegg?**
- Aviser (Si;D, debattsider)
- Nettaviser
- Sosiale medier
- Blogger

**Hvorfor skrive debattinnlegg?**
- Påvirke offentlig mening
- Dele kunnskap og erfaring
- Bidra til demokratisk samtale
- Øve på argumentasjon`,
    },
    {
      id: 'norsk-vg1-8-1-def-1',
      type: 'definition',
      title: 'Debattinnleggets struktur',
      content: `**Innledning**
- Fang leserens oppmerksomhet
- Presenter tema og standpunkt
- Si hva du mener (tesen)

**Hoveddel**
- 2-4 hovedargumenter
- Begrunn hvert argument
- Bruk eksempler og fakta
- Møt motargumenter

**Avslutning**
- Oppsummer hovedbudskapet
- Oppfordring til handling eller refleksjon
- Avslutt med kraft

**Tips:**
- Skriv kort og konsist
- Bruk enkelt språk
- Vær tydelig på hva du mener
- Respekter meningsmotstandere`,
    },
    {
      id: 'norsk-vg1-8-1-def-2',
      type: 'definition',
      title: 'Argumentasjonsteknikker',
      content: `**Sterke argumenter:**
- **Fakta og statistikk:** Tall og forskning
- **Eksempler:** Konkrete tilfeller som illustrerer poenget
- **Autoritet:** Eksperter som støtter synspunktet
- **Logikk:** Fornuftige slutninger

**Svake argumenter (som bør unngås):**
- **Stråmann:** Forvrenge motstanderens argument
- **Personangrep:** Angripe personen, ikke argumentet
- **Falsk dilemma:** Presentere bare to alternativer
- **Appell til følelser uten fakta:** Kun patos uten logos

**Å møte motargumenter:**
- Anerkjenn gyldige poenger fra motstanderen
- Forklar hvorfor ditt syn likevel er bedre
- Vis at du har forstått saken fra flere sider`,
    },
    {
      id: 'norsk-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av debattinnlegg',
      problem: 'Analyser strukturen i dette debattinnlegget om skolens starttider.',
      solution: `**Eksempel på debattinnlegg:**

"Som elev på videregående våkner jeg klokka 6 hver dag, og jeg er ikke alene om å være trøtt. Forskning viser at ungdom har en forskjøvet døgnrytme og trenger mer søvn om morgenen.

**Argument 1:** Studier fra NTNU viser at elever presterer bedre med senere skolestart.

**Argument 2:** Mange elever får for lite søvn, noe som går ut over både læring og helse.

**Motargument behandlet:** Noen mener at arbeidslivet krever tidlig oppmøte. Men skolen bør prioritere læring, og fleksibel arbeidstid er vanlig i mange yrker.

**Konklusjon:** Skolen bør starte klokka 9, ikke 8. Det vil gi bedre læring og friskere elever."

**Analyse:** Innlegget har tydelig struktur med tese, argumenter støttet av forskning, og behandling av motargument.`,
    },
    {
      id: 'norsk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv et debattinnlegg (200-300 ord) om et tema du engasjerer deg i.',
        hints: ['Følg strukturen: innledning, hoveddel med argumenter, avslutning', 'Bruk minst ett fakta-argument'],
        solution: 'Innlegget vurderes etter struktur, argumentasjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn et debattinnlegg i en avis og analyser argumentasjonen. Hvilke retoriske virkemidler brukes?',
        hints: ['Se etter etos, patos og logos', 'Vurder om argumentene er sterke eller svake'],
        solution: 'Analysen skal identifisere argumenter, virkemidler og vurdere effektiviteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et motinnlegg til debattinnlegget du fant i oppgave 2. Argumenter for motsatt standpunkt.',
        hints: ['Respekter motstanderens synspunkt', 'Bruk egne argumenter, ikke bare kritikk'],
        solution: 'Motinnlegget skal vise evne til å argumentere fra ulike perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Identifiser feilslutninger i disse argumentene:',
        subTasks: [
          {
            label: 'a',
            task: '"Du kan ikke stole på ham, han har jo tattoveringer."',
            solution: 'Personangrep / irrelevant kritikk - tattoveringer har ingenting med troverdighet å gjøre.',
          },
          {
            label: 'b',
            task: '"Enten er du for oss, eller så er du mot oss."',
            solution: 'Falsk dilemma - det finnes flere alternativer enn bare disse to.',
          },
          {
            label: 'c',
            task: '"Alle de andre gjør det, så det må være greit."',
            solution: 'Appell til mengden - at noe er populært betyr ikke at det er riktig.',
          },
        ],
        solution: 'Å gjenkjenne feilslutninger hjelper deg å skrive sterkere argumentasjon selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfør en klassedebatt om et aktuelt tema. Forbered argumenter for begge sider.',
        hints: ['Trekk lodd om hvem som skal argumentere for hva', 'Respekter taletid og debattregler'],
        solution: 'Muntlig debatt øver argumentasjon, lytting og saklig uenighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Essay og kaseri
// ============================================================================

export const CHAPTER_NORSK_VG1_8_2: TextbookChapter = {
  id: 'norsk-vg1-8-2',
  courseId: 'norsk-vg1',
  chapterNumber: '8.2',
  title: 'Essay og kaseri',
  description: 'Lær om essay og kaseri som sjangre, og skriv egne tekster i disse formene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive kreative og reflekterende tekster i ulike sjangre',
    'vurdere og bruke ulike uttrykksformer tilpasset formål og mottaker',
  ],
  content: [
    {
      id: 'norsk-vg1-8-2-intro',
      type: 'text',
      content: `## Essay og kaseri - personlige sjangre

Essay og kaseri er to beslektede, men forskjellige sjangre. Begge gir rom for personlig uttrykk og kreativitet, men har ulike kjennetegn og tradisjoner.

**Felles trekk:**
- Personlig stemme og perspektiv
- Frihet i form og struktur
- Refleksjon over et tema
- Ofte publisert i aviser, tidsskrifter eller som egne utgivelser

**Viktige forskjeller:**
- Essayet er mer reflekterende og utforskende
- Kaseriet er mer humoristisk og underholdende
- Essayet kan vare lenge uten konklusjon
- Kaseriet har ofte en poeng eller punchline`,
    },
    {
      id: 'norsk-vg1-8-2-def-1',
      type: 'definition',
      title: 'Essayets kjennetegn',
      content: `**Hva er et essay?**
Et essay er en personlig, reflekterende tekst der forfatteren utforsker et tema uten nødvendigvis å komme til en endelig konklusjon.

**Kjennetegn:**
- **Personlig stemme:** Forfatteren er tydelig til stede i teksten
- **Refleksjon:** Tanker og undring står sentralt
- **Utforskende:** Prøver ut ideer, veier argumenter
- **Fri form:** Ikke bundet av stram struktur
- **Faglig forankring:** Ofte referanser til litteratur, kultur, vitenskap

**Etymologi:**
Ordet "essay" kommer fra det franske "essayer" som betyr "å forsøke" eller "å prøve". Et essay er altså et forsøk på å forstå noe.

**Essaytyper:**
- **Det personlige essay:** Utgangspunkt i egne erfaringer
- **Det litterære essay:** Refleksjon over litteratur og kunst
- **Det filosofiske essay:** Utforsker abstrakte spørsmål
- **Det kulturkritiske essay:** Kommenterer samfunn og kultur`,
    },
    {
      id: 'norsk-vg1-8-2-def-2',
      type: 'definition',
      title: 'Kaseriets kjennetegn',
      content: `**Hva er et kaseri?**
Et kaseri er en humoristisk, lettsindig tekst med muntlig preg. Kaseriet underholder samtidig som det ofte har et underliggende alvor.

**Kjennetegn:**
- **Humor:** Ironi, overdrivelser, ordspill
- **Muntlig stil:** Som om forfatteren snakker til leseren
- **Subjektivt:** Forfatterens personlige syn dominerer
- **Dagligdagse tema:** Tar utgangspunkt i hverdagslige observasjoner
- **Alvor i bunnen:** Ofte en seriøs undertone under humoren

**Etymologi:**
"Kaseri" kommer fra det franske "causer" som betyr "å prate" eller "å småsnakke".

**Virkemidler i kaseriet:**
- Ironi og selvironi
- Overdrivelser
- Uventede sammenligninger
- Direkte henvendelse til leseren
- Digresjoner og assosiasjoner`,
    },
    {
      id: 'norsk-vg1-8-2-def-3',
      type: 'definition',
      title: 'Kjente essayister',
      content: `**Michel de Montaigne (1533-1592)**
- Regnes som essayets far
- Skrev "Essais" (1580) - personlige refleksjoner over livet
- Stilte spørsmål uten å gi endelige svar
- Kombinerte personlige erfaringer med klassisk lærdom

**Knut Hamsun (1859-1952)**
- Skrev essayistisk prosa med personlig stemme
- "Fra det moderne Amerikas Aandsliv" (1889)
- Brukte essayformen til kulturkritikk
- Merk: Hamsuns politiske valg under andre verdenskrig er kritisert, men hans litterære betydning er uomstridt

**Andre kjente essayister:**
- **Francis Bacon** (1561-1626): Engelske essays om moral og samfunn
- **Virginia Woolf** (1882-1941): Litterære og feministiske essays
- **George Orwell** (1903-1950): Politiske og kulturelle essays
- **Dag Solstad** (f. 1941): Norsk samtidsessayist`,
    },
    {
      id: 'norsk-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Essay vs. kaseri',
      problem: 'Sammenlign hvordan samme tema kan behandles i essay og kaseri.',
      solution: `**Tema: Mobiltelefonen**

**Essay-versjon (utdrag):**
"Mobiltelefonen har blitt en forlengelse av oss selv. Jeg undrer meg over hva det gjør med oppmerksomheten vår, med evnen til å være til stede. Filosofen Martin Heidegger skrev om 'værenkasting' - å bli kastet inn i verden. Kanskje blir vi nå kastet inn i skjermen i stedet..."

**Kaseri-versjon (utdrag):**
"Min telefon og jeg har et komplisert forhold. Den vet alt om meg, og jeg vet ingenting om den. Forholdet er like ensidig som mitt første forsøk på romantikk i åttende klasse. Forskjellen er at telefonen i det minste svarer når jeg tar kontakt..."

**Analyse:**
- Essayet reflekterer, stiller spørsmål, trekker inn filosofi
- Kaseriet bruker humor, selvironi og sammenligning
- Begge tar opp et aktuelt tema på personlig vis
- Essayet er mer alvorlig, kaseriet er mer underholdende`,
    },
    {
      id: 'norsk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom essay og kaseri?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv essayets viktigste kjennetegn.',
            solution: 'Essayet er reflekterende, utforskende, personlig, og har ofte faglige referanser. Det prøver å forstå et tema uten nødvendigvis å konkludere.',
          },
          {
            label: 'b',
            task: 'Beskriv kaseriets viktigste kjennetegn.',
            solution: 'Kaseriet er humoristisk, har muntlig stil, tar opp hverdagslige tema, og har ofte et alvor under humoren.',
          },
          {
            label: 'c',
            task: 'Hva betyr ordene "essay" og "kaseri" opprinnelig?',
            solution: 'Essay kommer fra fransk "essayer" (å forsøke/prøve). Kaseri kommer fra fransk "causer" (å prate/småsnakke).',
          },
        ],
        solution: 'Essay er reflekterende og utforskende, kaseri er humoristisk og underholdende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les et essay av en kjent forfatter (f.eks. Montaigne, Woolf eller en norsk essayist) og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er temaet for essayet?',
            solution: 'Beskriv hovedtemaet og eventuelle undertemaer.',
          },
          {
            label: 'b',
            task: 'Hvordan kommer forfatterens personlige stemme til uttrykk?',
            solution: 'Se etter jeg-form, personlige refleksjoner, og subjektive vurderinger.',
          },
          {
            label: 'c',
            task: 'Kommer forfatteren til en konklusjon? Hvorfor/hvorfor ikke?',
            solution: 'Essays kan ende åpent eller med en refleksjon - begge er gyldige.',
          },
        ],
        hints: ['Du kan finne essays i Samtiden, Vinduet eller andre tidsskrifter', 'Oversatte essays finnes i antologier'],
        solution: 'Analysen viser forståelse for essayets sjangertrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et kort essay (300-400 ord) der du reflekterer over et selvvalgt tema.',
        hints: ['Velg et tema du har tanker om', 'Du trenger ikke konkludere - utforsk heller', 'Bruk gjerne personlige erfaringer'],
        solution: 'Essayet vurderes etter personlig stemme, refleksjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et kaseri (250-350 ord) om en hverdagslig irritasjon eller observasjon.',
        hints: ['Bruk humor og ironi', 'Skriv som om du snakker til leseren', 'Ha gjerne et poeng under humoren'],
        solution: 'Kaseriet vurderes etter humor, muntlig stil og underholdningsverdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ta samme tema og skriv det først som essay (150 ord), deretter som kaseri (150 ord). Sammenlign de to versjonene.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema (f.eks. "ventetid", "lekser", "sosiale medier").',
            solution: 'Temaet bør kunne behandles både reflekterende og humoristisk.',
          },
          {
            label: 'b',
            task: 'Skriv essay-versjonen.',
            solution: 'Fokuser på refleksjon og utforsking av temaet.',
          },
          {
            label: 'c',
            task: 'Skriv kaseri-versjonen.',
            solution: 'Fokuser på humor og underholdning.',
          },
          {
            label: 'd',
            task: 'Reflekter: Hva er forskjellen i tone, stil og effekt?',
            solution: 'Sammenligningen viser forståelse for sjangrenes ulike virkemidler.',
          },
        ],
        solution: 'Oppgaven demonstrerer forståelse for begge sjangre gjennom praktisk skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.1: Drama og teater
// ============================================================================

export const CHAPTER_NORSK_VG1_9_1: TextbookChapter = {
  id: 'norsk-vg1-9-1',
  courseId: 'norsk-vg1',
  chapterNumber: '9.1',
  title: 'Drama og teater',
  description: 'Lær om dramaet som litterær sjanger og teatrets virkemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
    'forstå samspillet mellom tekst og scenisk fremføring',
  ],
  content: [
    {
      id: 'norsk-vg1-9-1-intro',
      type: 'text',
      content: `## Dramaet som sjanger

Drama er litteratur skrevet for scenen. I motsetning til romaner og noveller, er drama ment å fremføres av skuespillere for et publikum.

**Kjennetegn på drama:**
- Handling formidles gjennom dialog og handling
- Ingen fortellerstemme (normalt)
- Skrevet i replikker og sceneanvisninger
- Ment for fremføring

**Dramatiske sjangre:**
- **Tragedie:** Alvorlig handling med ulykkelig utgang
- **Komedie:** Humoristisk handling med lykkelig utgang
- **Tragikomeddie:** Blanding av alvor og humor
- **Moderne drama:** Bryter med klassiske sjangerregler`,
    },
    {
      id: 'norsk-vg1-9-1-def-1',
      type: 'definition',
      title: 'Dramatiske virkemidler',
      content: `**Dialog**
Samtale mellom karakterene. Dialogen driver handlingen fremover og avslører karaktertrekk.

**Monolog**
En lengre tale av én karakter. Kan være:
- **Dialogisk monolog:** Karakteren snakker til andre på scenen
- **Soliloquy (enesamtale):** Karakteren snakker "til seg selv" og avslører tanker for publikum
- **Til publikum:** Karakteren henvender seg direkte til salen

**Sceneanvisninger (didaskalier)**
Forfatterens instruksjoner om:
- Scenografi (hvordan scenen ser ut)
- Karakterenes bevegelser og mimikk
- Lys, lyd og andre effekter
- Pause, stillhet, stemning

**Dramatisk ironi**
Når publikum vet noe karakterene ikke vet. Skaper spenning og engasjement.

**Konfliktsett**
- Ytre konflikt: Mellom karakterer eller mot samfunnet
- Indre konflikt: I karakterens eget sinn`,
    },
    {
      id: 'norsk-vg1-9-1-def-2',
      type: 'definition',
      title: 'Aristoteles dramaturgi',
      content: `**De tre enheter**
Aristoteles (384-322 f.Kr.) beskrev i "Poetikken" idealer for tragedien:

**1. Tidens enhet**
Handlingen bør utspille seg innenfor 24 timer.

**2. Stedets enhet**
Handlingen bør foregå på ett sted.

**3. Handlingens enhet**
Dramaet bør ha én hovedhandling uten sidehistorier.

**Dramatisk struktur**
- **Eksposisjon:** Presentasjon av situasjon og karakterer
- **Komplikasjon:** Konflikten utvikler seg
- **Klimaks:** Vendepunkt, høyeste spenning
- **Peripeti:** Omslaget (ofte mot det verre i tragedien)
- **Katastrofe/løsning:** Utfallet av handlingen

**Katarsis**
Aristoteles mente tragedien skulle rense publikum for følelser som frykt og medlidenhet gjennom innlevelse i handlingen.`,
    },
    {
      id: 'norsk-vg1-9-1-def-3',
      type: 'definition',
      title: 'Moderne drama',
      content: `**Brudd med klassisk dramaturgi**
Fra 1800-tallet brøt dramatikere med de klassiske reglene:

**Realismen (1850-1890)**
- Hverdagslige tema og karakterer
- Naturlig dialog
- Samfunnskritikk
- Henrik Ibsen, August Strindberg

**Naturalismen (1880-1900)**
- Vitenskapelig tilnærming
- Arv og miljø bestemmer skjebnen
- Ofte mørke tema

**Ekspresjonismen (1910-1930)**
- Subjektiv virkelighetsopplevelse
- Forvrengning og overdrivelse
- Drømmeaktige scener

**Absurd teater (1950-tallet)**
- Meningsløshet og fremmedgjøring
- Brudd med logikk og realisme
- Samuel Beckett: "Mens vi venter på Godot"

**Episk teater (Bertolt Brecht)**
- Publikum skal tenke, ikke bare føle
- Brudd med innlevelsen
- Politisk teater`,
    },
    {
      id: 'norsk-vg1-9-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av dramatisk tekst',
      problem: 'Analyser denne replikkvekslingen fra et tenkt drama.',
      solution: `**Eksempel:**
ANNA: (ser ut vinduet) Det regner igjen.
PER: Som alltid.
ANNA: Husker du da vi pleide å danse i regnet?
PER: (uten å se opp fra avisen) Det var lenge siden.
ANNA: (stille) Ja. Det var det.
(Lang pause)

**Analyse:**
- **Dialog:** Kort, ladet. Mye ligger mellom linjene (undertekst).
- **Sceneanvisninger:** Viser at Anna søker kontakt, Per er avvisende.
- **Konfliktet:** Indirekte - noe har endret seg i forholdet.
- **Symbol:** Regnet kan symbolisere tristhet, men også en tapt lidenskap.
- **Undertekst:** Det som ikke sies er viktigere enn det som sies. Anna savner fortiden, Per vil ikke snakke om det.

Dette er typisk for moderne realistisk drama der konflikter uttrykkes indirekte.`,
    },
    {
      id: 'norsk-vg1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar disse dramatiske begrepene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom dialog og monolog?',
            solution: 'Dialog er samtale mellom to eller flere karakterer. Monolog er en lengre tale av én karakter.',
          },
          {
            label: 'b',
            task: 'Hva er sceneanvisninger, og hva er deres funksjon?',
            solution: 'Sceneanvisninger er forfatterens instruksjoner om scene, bevegelse, lys og lyd. De veileder regissør og skuespillere.',
          },
          {
            label: 'c',
            task: 'Hva er dramatisk ironi?',
            solution: 'Dramatisk ironi er når publikum vet noe karakterene ikke vet, noe som skaper spenning.',
          },
        ],
        solution: 'Forståelse av dramatiske begreper er grunnleggende for dramaanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Aristoteles tre enheter og hvorfor moderne drama ofte bryter med dem.',
        hints: ['Tenk på hva de tre enhetene innebærer', 'Hvorfor kan det være kunstnerisk interessant å bryte regler?'],
        solution: 'De tre enheter (tid, sted, handling) skapte konsentrasjon i klassisk drama. Moderne drama bryter med dem for å utforske nye muligheter, vise kompleksitet, og utfordre publikums forventninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les en scene fra et drama (f.eks. Ibsen, Shakespeare eller et moderne stykke) og analyser bruken av virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan brukes dialog til å avsløre karakter og konflikt?',
            solution: 'Se på hva karakterene sier og hvordan de sier det.',
          },
          {
            label: 'b',
            task: 'Hva forteller sceneanvisningene?',
            solution: 'Analyser hva sceneanvisningene bidrar med til forståelsen.',
          },
          {
            label: 'c',
            task: 'Er det undertekst - noe som ligger mellom linjene?',
            solution: 'Undertekst er det som ikke sies direkte, men som likevel kommuniseres.',
          },
        ],
        solution: 'Analysen viser evne til å lese dramatisk tekst med forståelse for sjangeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en kort dramatisk scene (1-2 sider) med to karakterer i konflikt.',
        hints: ['Bruk dialog og sceneanvisninger', 'La konflikten komme frem gjennom det som sies OG det som ikke sies', 'Tenk på undertekst'],
        solution: 'Scenen vurderes etter bruk av dramatiske virkemidler, karaktertegning og konfliktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign klassisk og moderne drama.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan forholder klassisk gresk tragedie seg til de tre enheter?',
            solution: 'Klassisk gresk tragedie følger ofte de tre enheter strengt.',
          },
          {
            label: 'b',
            task: 'Gi eksempler på hvordan moderne dramatikere har brutt med klassiske konvensjoner.',
            solution: 'Eksempler kan være Ibsens realistiske drama, Brechts episke teater, eller absurd teater.',
          },
          {
            label: 'c',
            task: 'Hva kan være fordelene og ulempene med begge tilnærminger?',
            solution: 'Klassisk: konsentrasjon og klarhet. Moderne: frihet og kompleksitet.',
          },
        ],
        solution: 'Sammenligningen viser forståelse for dramatisk utvikling over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: Henrik Ibsen
// ============================================================================

export const CHAPTER_NORSK_VG1_9_2: TextbookChapter = {
  id: 'norsk-vg1-9-2',
  courseId: 'norsk-vg1',
  chapterNumber: '9.2',
  title: 'Henrik Ibsen',
  description: 'Lær om Norges mest kjente dramatiker og hans betydning for verdenslitteraturen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-9-2-intro',
      type: 'text',
      content: `## Henrik Ibsen (1828-1906)

Henrik Ibsen regnes som en av verdens viktigste dramatikere. Hans stykker spilles fortsatt over hele verden, og han har hatt enorm innflytelse på moderne teater.

**Nøkkelopplysninger:**
- Født i Skien 1828, døde i Kristiania 1906
- Bodde 27 år i utlandet (Italia og Tyskland)
- Skrev 26 skuespill
- Kalt "det moderne dramaets far"

**Hvorfor er Ibsen viktig?**
- Fornyet dramaet som kunstform
- Tok opp kontroversielle samtidsemner
- Skapte komplekse, psykologisk troverdige karakterer
- Påvirket dramatikere verden over`,
    },
    {
      id: 'norsk-vg1-9-2-def-1',
      type: 'definition',
      title: 'Biografi og samtid',
      content: `**Oppvekst og bakgrunn**
Ibsen vokste opp i Skien i en velstående familie som opplevde økonomisk nedgang. Som ung arbeidet han som apotekerlærling i Grimstad.

**Karriere i Norge (1850-1864)**
- Skrev sine første stykker i Bergen og Kristiania
- Arbeidet som teaterinstruktør og -leder
- Tidlige verk inspirert av romantikken og nasjonalisme
- Følte seg misforstått og undervurdert i Norge

**Eksil i utlandet (1864-1891)**
- Flyttet til Italia, senere Tyskland
- Skrev sine mest kjente verk i eksil
- Utviklet sin realistiske stil
- Kunne observere Norge på avstand

**Tilbake til Norge (1891-1906)**
- Returnerte som berømt forfatter
- Skrev sine siste, symbolistiske stykker
- Døde i Kristiania 1906

**Samtiden:**
Ibsens tid var preget av industrialisering, urbanisering og store samfunnsendringer. Kvinners stilling, religion, moral og familiestrukturer var under debatt.`,
    },
    {
      id: 'norsk-vg1-9-2-def-2',
      type: 'definition',
      title: 'Et dukkehjem (1879) - analyse',
      content: `**Handling**
Nora Helmer lever tilsynelatende lykkelig med sin mann Torvald og tre barn. Men hun skjuler en hemmelighet: Hun har forfalsket en underskrift for å låne penger til å redde Torvalds liv. Når hemmeligheten truer med å komme ut, avsløres ekteskapets virkelige natur.

**Hovedpersoner:**
- **Nora Helmer:** Hovedperson. Gjennomgår stor utvikling fra "lerkefugl" til selvstendig kvinne.
- **Torvald Helmer:** Noras ektemann. Opptatt av anstendighet og ytre fasade.
- **Krogstad:** Pengeutlåneren som truer med å avsløre Nora.
- **Kristine Linde:** Noras venninne, selvstendig enke.

**Sentrale temaer:**
- Kjønnsroller og kvinners stilling
- Sannhet og løgn i ekteskapet
- Selvrealisering og identitet
- Samfunnets forventninger vs. individets behov

**Dramaturgiske trekk:**
- Følger de tre enheter (tid, sted, handling)
- Retrospektiv teknikk: Fortiden avdekkes gradvis
- Symbolbruk: Tarantellaen, juletre, macaroons
- Åpen slutt som sjokkerte samtiden`,
    },
    {
      id: 'norsk-vg1-9-2-def-3',
      type: 'definition',
      title: 'Ibsens samfunnskritikk',
      content: `**Kontroversiell i sin tid**
Ibsens stykker var kontroversielle da de ble skrevet. Han tok opp temaer som mange mente ikke hørte hjemme i offentligheten.

**Eksempler på kritikk:**
- **Et dukkehjem (1879):** Noras valg om å forlate mann og barn ble sett som skandaløst. I Tyskland måtte Ibsen skrive en alternativ slutt der Nora blir.
- **Gengangere (1881):** Tok opp tabuemner som syfilis og incest. Ble kalt "et åpent kloakk" av kritikere.
- **En folkefiende (1882):** Kritiserte flertallets makt og økonomiske interesser.

**Mottakelse:**
- Mange mente Ibsen gikk for langt
- Andre hyllet ham som en modig sannhetssøker
- Debattene rundt stykkene var ofte like intense som handlingen

**Viktig kontekst:**
Ibsens kritikk må forstås i lys av hans samtid. Han stilte spørsmål som var radikale da, men som vi i dag ser annerledes på. Hans styrke var å utfordre etablerte sannheter og tvinge publikum til å tenke.`,
    },
    {
      id: 'norsk-vg1-9-2-def-4',
      type: 'definition',
      title: 'Ibsens betydning internasjonalt',
      content: `**Påvirkning på moderne teater:**
- Grunnla det realistiske drama
- Viste at teater kunne ta opp samtidsemner
- Skapte psykologisk komplekse karakterer
- Påvirket dramatikere som Tsjekhov, Shaw, Miller, O'Neill

**Ibsen i verden:**
- Den mest spilte dramatikeren etter Shakespeare
- Oversatt til over 100 språk
- Ibsen-festivaler i mange land
- Sentrale verk studeres på universiteter over hele verden

**Hvorfor relevant i dag?**
- Temaene er fortsatt aktuelle
- Karakterene oppleves som virkelige
- Stykkene kan tolkes på nye måter
- Gir innsikt i menneskelig psykologi

**Kritiske perspektiver:**
Som alle klassiske forfattere kan Ibsen leses på ulike måter. Noen fremhever hans radikale kritikk av samfunnet, andre hans konservatisme i andre spørsmål. Det viktige er å lese verkene i kontekst og vurdere dem kritisk.`,
    },
    {
      id: 'norsk-vg1-9-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av scene fra Et dukkehjem',
      problem: 'Analyser den berømte sluttscenen der Nora forlater Torvald.',
      solution: `**Scenen:**
Nora har innsett at Torvald ikke er den hun trodde. Hun bestemmer seg for å forlate ham for å "oppdra seg selv".

**Analyse:**

**Dialog:**
TORVALD: Du er først og fremst hustru og mor.
NORA: Det tror jeg ikke lenger på. Jeg tror jeg er først og fremst et menneske, jeg, likeså vel som du.

**Dramatisk funksjon:**
- Klimaks i Noras utvikling
- Konfrontasjonen avslører verdikonflikten
- Torvald representerer samfunnets normer
- Nora krever retten til å definere seg selv

**Historisk kontekst:**
I 1879 var det uhørt at en gift kvinne skulle forlate mann og barn. Mange tolket stykket som et angrep på ekteskapet som institusjon. Andre så det som et forsvar for individets rett til selvrealisering.

**Ulike tolkninger:**
Scenen har blitt tolket på mange måter: Som feministisk manifest, som kritikk av borgerlig hykleri, eller som en tragedie om manglende kommunikasjon. Det finnes ikke én "riktig" tolkning.`,
    },
    {
      id: 'norsk-vg1-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv Ibsens liv og karriere.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor og når levde Ibsen?',
            solution: 'Henrik Ibsen ble født i Skien i 1828 og døde i Kristiania i 1906.',
          },
          {
            label: 'b',
            task: 'Hvorfor flyttet han til utlandet, og hvordan påvirket det hans forfatterskap?',
            solution: 'Han følte seg misforstått i Norge og søkte frihet. Utlendigheten ga ham avstand til å kritisere norsk og europeisk samfunn.',
          },
          {
            label: 'c',
            task: 'Hvilke kjennetegn har Ibsens realistiske drama?',
            solution: 'Samtidige temaer, naturlig dialog, psykologisk troverdige karakterer, samfunnskritikk.',
          },
        ],
        solution: 'Forståelse av Ibsens biografi gir innsikt i hans verk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les "Et dukkehjem" (eller et utdrag) og analyser Noras utvikling gjennom stykket.',
        hints: ['Se på hvordan Nora fremstilles i begynnelsen vs. slutten', 'Hva får henne til å endre seg?', 'Hvordan reagerer Torvald på endringen?'],
        solution: 'Nora utvikler seg fra underdanig "lerkefugl" til selvstendig individ som krever å bli behandlet som et menneske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor "Et dukkehjem" var kontroversielt i 1879.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke samfunnsnormer utfordret stykket?',
            solution: 'Stykket utfordret synet på ekteskapet, kvinners rolle, og familiestrukturen.',
          },
          {
            label: 'b',
            task: 'Hvordan reagerte samtiden?',
            solution: 'Reaksjonene var delte - fra fordømmelse til begeistring. Mange så stykket som umoralsk.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å forstå denne konteksten når vi leser stykket i dag?',
            solution: 'Konteksten viser hvor radikalt stykket var og hvorfor det fikk slik betydning.',
          },
        ],
        solution: 'Historisk kontekst er avgjørende for å forstå litteraturens betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to ulike tolkninger av Et dukkehjem eller en annen Ibsen-tekst.',
        hints: ['Du kan sammenligne ulike teaterproduksjoner, filmversjoner, eller kritiske lesninger', 'Hvordan påvirker tolkningen vår forståelse av stykket?'],
        solution: 'Sammenligningen viser at klassiske tekster kan leses på mange måter, og at tolkning påvirkes av tid og sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft Ibsens internasjonale betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er Ibsen den mest spilte dramatikeren etter Shakespeare?',
            solution: 'Universelle temaer, psykologisk dybde, dramatisk kvalitet.',
          },
          {
            label: 'b',
            task: 'Hvilke dramatikere har Ibsen påvirket?',
            solution: 'Eksempler: Anton Tsjekhov, George Bernard Shaw, Arthur Miller, Eugene O Neill.',
          },
          {
            label: 'c',
            task: 'Er Ibsens stykker fortsatt relevante i dag? Begrunn svaret.',
            solution: 'Argumenter for relevans: Temaene (identitet, frihet, sannhet) er universelle. Motargumenter kan diskuteres kritisk.',
          },
        ],
        solution: 'Drøftingen viser forståelse for Ibsens plass i verdenslitteraturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.1: Romantikken i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_10_1: TextbookChapter = {
  id: 'norsk-vg1-10-1',
  courseId: 'norsk-vg1',
  chapterNumber: '10.1',
  title: 'Romantikken i Norge',
  description: 'Lær om romantikken som litterær epoke og dens betydning for norsk nasjonalidentitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-10-1-intro',
      type: 'text',
      content: `## Romantikken i Norge (ca. 1814-1850)

Romantikken var en kulturell og intellektuell bevegelse som oppstod i Europa på slutten av 1700-tallet. I Norge falt romantikken sammen med nasjonsbyggingen etter 1814.

**Historisk bakgrunn:**
- 1814: Norge får egen grunnlov og løsriver seg fra Danmark
- Unionen med Sverige gir begrenset selvstendighet
- Behov for å definere norsk nasjonal identitet
- Søken etter det "ekte norske"

**Romantikkens idealer:**
- Følelser over fornuft
- Natur som inspirasjonskilde
- Det nasjonale og folkelige
- Individuell frihet og genialitet
- Lengsel og drømmer`,
    },
    {
      id: 'norsk-vg1-10-1-def-1',
      type: 'definition',
      title: 'Kjennetegn ved romantikken',
      content: `**Naturen**
- Naturen som speil for følelser
- Fjell, fosser, skog symboliserer frihet
- Norsk natur som identitetsmarkør
- Panteisme: Gud i naturen

**Følelser**
- Følelser er viktigere enn fornuft
- Indre liv utforskes i diktningen
- Lengsel (Sehnsucht) etter noe uoppnåelig
- Kjærlighet, sorg, glede som sentrale tema

**Det nasjonale**
- Søken etter nasjonal identitet
- Bonden som bærer av norsk kultur
- Folkediktning samles inn
- Norrøn historie som inspirasjon

**Det folkelige**
- Eventyr, sagn og folkeviser
- Dialekter og landsmål
- Bondekulturen idealiseres
- Motstand mot dansk kulturhegemon

**Det geniale**
- Kunstneren som geni
- Inspirasjon over teknikk
- Originalitet og skaperkraft
- Dikteren som profet`,
    },
    {
      id: 'norsk-vg1-10-1-def-2',
      type: 'definition',
      title: 'Wergeland og Welhaven',
      content: `**Henrik Wergeland (1808-1845)**
- "Norges Byron" - lidenskapelig og produktiv
- Nasjonal-romantisk dikter
- Kjempet for norsk kulturell selvstendighet
- Sosial rettferdighet og demokrati
- Hovedverk: "Skabelsen, Mennesket og Messias", "Den engelske Lods"

**Johan Sebastian Welhaven (1807-1873)**
- Mer klassisistisk orientert
- Verdsatte form og balanse
- Kritiserte Wergelands "formløshet"
- Hovedverk: "Norges Dæmring", diktsamlinger

**"Kulturkampen"**
- Wergeland vs. Welhaven representerte to syn på norsk kultur
- Wergeland: Radikalt brudd med dansk tradisjon, folkelig orientert
- Welhaven: Bygge videre på europeisk dannelse, formbevisst
- Konflikten var personlig og offentlig
- I ettertid ses begge som viktige for norsk litteratur

**Kontekst:**
Denne kulturstriden må forstås i lys av nasjonens behov for å definere seg selv etter 1814. Begge sider bidro til utviklingen av norsk litteratur og kultur.`,
    },
    {
      id: 'norsk-vg1-10-1-def-3',
      type: 'definition',
      title: 'Asbjornsen og Moe',
      content: `**Peter Christen Asbjornsen (1812-1885) og Jorgen Moe (1813-1882)**

**Eventyrinnsamlingen:**
- Samlet norske folkeeventyr fra 1830-tallet
- Inspirert av brødrene Grimm i Tyskland
- "Norske Folkeeventyr" (1841-1844)
- Grunnla norsk eventyrfortelling

**Betydning:**
- Bevarte muntlig tradisjon på skrift
- Skapte et norsk litterært språk
- Dokumenterte norsk folkekultur
- Bidro til nasjonsbygging

**Eventyrtyper:**
- Undereventyr: Overnaturlige hendelser, magiske hjelpere
- Dyreeventyr: Dyr med menneskelige egenskaper
- Skjemteeventyr: Humoristiske fortellinger

**Kjente eventyr:**
- "Askeladden som kappåt med trollet"
- "De tre bukkene Bruse"
- "Pannekaka"
- "Oskeladden og de gode hjelperne"

**Asbjornsen og Moes språk:**
De utviklet en skriftlig stil som fanget det muntlige fortellersproget, og bidro dermed til utviklingen av et norsk skriftspråk.`,
    },
    {
      id: 'norsk-vg1-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Romantiske trekk i dikt',
      problem: 'Analyser romantiske trekk i dette diktet av Henrik Wergeland.',
      solution: `**"Mig selv" (utdrag) av Henrik Wergeland:**

"Jeg er en Flamme, skjønt jeg ei fortærer,
kun varmer, lyser, og mig selv forklarer..."

**Romantiske trekk:**

**Natursymbolikk:**
- Flammen som symbol på lidenskap og liv
- Lys som kunnskap og åndelig oppvåkning

**Det geniale individet:**
- "Mig selv" - fokus på jeget
- Dikteren som noe særskilt
- Selvrefleksjon og selvforståelse

**Følelser:**
- Varme og lys som positive verdier
- Indre liv utforskes

**Form:**
- Personlig tone
- Billedlig språk
- Høytidelig stil

**Kontekst:**
Diktet viser typisk romantisk selvforståelse der dikteren ser seg selv som bærer av et høyere kall - å opplyse og varme andre.`,
    },
    {
      id: 'norsk-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar romantikkens historiske kontekst i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjedde i 1814, og hvordan påvirket det kulturen?',
            solution: 'Norge fikk egen grunnlov og løsrev seg fra Danmark. Dette skapte behov for å definere norsk nasjonal identitet.',
          },
          {
            label: 'b',
            task: 'Hvorfor var romantikken viktig for nasjonsbyggingen?',
            solution: 'Romantikken bidro til å finne og skape en norsk identitet gjennom fokus på natur, folkekultur og historie.',
          },
          {
            label: 'c',
            task: 'Hvilke idealer kjennetegnet romantikken?',
            solution: 'Følelser over fornuft, natur, det nasjonale/folkelige, individuell frihet.',
          },
        ],
        solution: 'Historisk kontekst er avgjørende for å forstå romantikkens betydning i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Wergeland og Welhaven.',
        hints: ['Se på deres syn på norsk kultur og litteratur', 'Hva var de uenige om?', 'Hva hadde de til felles?'],
        solution: 'Wergeland var radikal og folkeorientert, Welhaven var klassisistisk og formorientert. Begge bidro til norsk litteratur, men med ulike virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et norsk folkeeventyr samlet av Asbjornsen og Moe og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags eventyr er det (undereventyr, dyreeventyr, skjemteeventyr)?',
            solution: 'Klassifiser eventyret basert på dets kjennetegn.',
          },
          {
            label: 'b',
            task: 'Hvilke typiske eventyrtrekk finner du (trylletal, hjelpere, prøvelser)?',
            solution: 'Identifiser klassiske eventyrmellementer.',
          },
          {
            label: 'c',
            task: 'Hva kan eventyret fortelle om norsk folkekultur?',
            solution: 'Eventyr speiler verdier, levemåter og forestillinger i den kulturen de kommer fra.',
          },
        ],
        solution: 'Eventyranalyse viser forståelse for sjangeren og dens kulturelle betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Les et romantisk dikt og identifiser romantiske trekk.',
        hints: ['Se etter naturskildringer', 'Er følelser sentrale?', 'Finnes det nasjonale motiver?', 'Hvordan fremstilles dikterjeget?'],
        solution: 'Analysen viser evne til å gjenkjenne og forklare romantiske sjangertrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvordan bidro romantikken til norsk nasjonsbygging?',
        hints: ['Tenk på språk, folkekultur, litteratur, kunst', 'Var alle sider ved romantisk nasjonalisme positive?', 'Hvordan ser vi på dette i dag?'],
        solution: 'Drøftingen bør vise forståelse for romantikkens betydning, samtidig som den reflekterer kritisk over epoken i lys av dagens perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2: Realisme og naturalisme
// ============================================================================

export const CHAPTER_NORSK_VG1_10_2: TextbookChapter = {
  id: 'norsk-vg1-10-2',
  courseId: 'norsk-vg1',
  chapterNumber: '10.2',
  title: 'Realisme og naturalisme',
  description: 'Lær om realismen og naturalismen som litterære retninger med fokus på virkelighetsskildring og samfunnskritikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-10-2-intro',
      type: 'text',
      content: `## Realisme og naturalisme (ca. 1850-1900)

Realismen og naturalismen var litterære retninger som brøt med romantikkens idealisering. De ville skildre virkeligheten slik den faktisk var.

**Historisk bakgrunn:**
- Industrialiseringen endret samfunnet
- Urbanisering og nye sosiale problemer
- Vitenskapelige fremskritt (Darwin, Marx)
- Ny tro på at samfunnet kunne analyseres og forbedres

**Fra romantikk til realisme:**
- Fra følelser til fornuft
- Fra idealisering til virkelighetsskildring
- Fra natur til samfunn
- Fra individ til sosiale forhold`,
    },
    {
      id: 'norsk-vg1-10-2-def-1',
      type: 'definition',
      title: 'Kjennetegn ved realismen',
      content: `**Realismens program:**
Litteraturen skulle "sette problemer under debatt" (Georg Brandes, 1871)

**Kjennetegn:**
- **Virkelighetsnær skildring:** Hverdagslige hendelser og miljøer
- **Samfunnskritikk:** Kritikk av sosiale forhold, religion, moral
- **Psykologisk troverdighet:** Komplekse, realistiske karakterer
- **Objektivitet:** Forfatteren trekker seg tilbake, viser frem
- **Samtidsemner:** Handler om nåtiden, ikke fortiden

**Temaer i realismen:**
- Ekteskap og familieliv
- Kvinners stilling
- Sosiale klasser og urettferdighet
- Religion og dobbeltmoral
- Penger og makt

**Viktige realistiske forfattere:**
- Henrik Ibsen (drama)
- Bjornstjerne Bjornson (drama, romaner)
- Alexander Kielland (romaner, noveller)
- Jonas Lie (romaner)`,
    },
    {
      id: 'norsk-vg1-10-2-def-2',
      type: 'definition',
      title: 'Kjennetegn ved naturalismen',
      content: `**Naturalismens program:**
Litteraturen skulle anvende naturvitenskapelig metode på menneskelivet.

**Kjennetegn:**
- **Determinisme:** Mennesket styres av arv og miljø
- **Vitenskapelig tilnærming:** Forfatteren som "forsker"
- **Mørke tema:** Fattigdom, sykdom, alkoholisme, galskap
- **Pessimisme:** Mennesket kan ikke unnslippe sin skjebne
- **Detaljert skildring:** Nøyaktige beskrivelser av miljø og handling

**Påvirkning fra vitenskap:**
- Charles Darwin: Evolusjonsteorien
- Arvelighet som forklaring på atferd
- Miljøets påvirkning på mennesket
- Sosiale forhold som naturlover

**Naturalisme vs. realisme:**
- Naturalismen er mer radikal og pessimistisk
- Sterkere vekt på arv og miljø
- Mørkere tema og skjebnetro
- Mer detaljert og "vitenskapelig" stil`,
    },
    {
      id: 'norsk-vg1-10-2-def-3',
      type: 'definition',
      title: 'Sentrale forfattere',
      content: `**Alexander Kielland (1849-1906)**
- Realistisk forfatter fra Stavanger
- Samfunnskritiske romaner og noveller
- Kritiserte embetsverk, kirke og borgerskap
- Hovedverk: "Garman & Worse", "Gift", "Skipper Worse"
- Stilistisk elegant og ironisk

**Jonas Lie (1833-1908)**
- Psykologisk orientert forfatter
- Skildret familieforbold og sjøliv
- Utviklet seg mot realisme
- Hovedverk: "Familien på Gilje", "Kommandørens Døttre"

**Amalie Skram (1846-1905)**
- Nordens fremste naturalistiske forfatter
- Skildret kvinners vanskelige kår
- Tok opp tabuemner som seksualitet og galskap
- Hovedverk: "Constance Ring", "Hellemyrsfolket", "Professor Hieronimus"
- Kritisert og hyllet i sin samtid

**Arne Garborg (1851-1924)**
- Skrev på nynorsk
- Psykologiske romaner om bondesamfunnet
- Hovedverk: "Bondestudentar", "Trætte Mænd"`,
    },
    {
      id: 'norsk-vg1-10-2-def-4',
      type: 'definition',
      title: 'Forskjell realisme vs. naturalisme',
      content: `**Realismen:**
- Tro på at samfunnet kan endres
- Kritikk for å forbedre
- Fokus på sosiale forhold
- Relativt optimistisk grunntone
- Karakterene kan ta valg

**Naturalismen:**
- Pessimistisk syn på endring
- Mennesket fanget av arv og miljø
- Fokus på biologiske og sosiale determinanter
- Mørk og fatalistisk grunntone
- Karakterene er ofre for omstendigheter

**Eksempel på forskjellen:**
- **Realistisk tilnærming:** Nora i "Et dukkehjem" velger å forlate mannen - hun har handlefrihet.
- **Naturalistisk tilnærming:** Hovedpersonene i Amalie Skrams "Hellemyrsfolket" er fanget av arv, miljø og fattigdom - de kan ikke unnslippe.

**I praksis:**
Grensen mellom realisme og naturalisme er ikke alltid klar. Mange forfattere kombinerer trekk fra begge retninger.`,
    },
    {
      id: 'norsk-vg1-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av realistisk/naturalistisk tekst',
      problem: 'Sammenlign hvordan en realistisk og en naturalistisk forfatter kan behandle samme tema.',
      solution: `**Tema: Kvinners stilling i ekteskapet**

**Realistisk behandling (Ibsen):**
I "Et dukkehjem" viser Ibsen hvordan Nora er fanget i et ekteskap der hun behandles som et barn. Men hun har mulighet til å handle - hun velger å forlate mannen for å finne seg selv. Stykket kritiserer samfunnet, men viser at endring er mulig.

**Naturalistisk behandling (Skram):**
I "Constance Ring" skildrer Skram en kvinne fanget i et ulykkelig ekteskap. Constance er formet av oppdragelse og samfunnets forventninger. Hennes forsøk på å bryte ut fører til tragedie. Arv og miljø determinerer skjebnen.

**Forskjeller:**
- Ibsen: Kritikk med håp om endring
- Skram: Nådeløs skildring av uunngåelig skjebne
- Ibsen: Karakteren har handlefrihet
- Skram: Karakteren er fanget

**Likheter:**
- Begge kritiserer samfunnets behandling av kvinner
- Begge skildrer ekteskapets problemer realistisk
- Begge skapte debatt i sin samtid`,
    },
    {
      id: 'norsk-vg1-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar den historiske bakgrunnen for realismen og naturalismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke samfunnsendringer skjedde på 1800-tallet?',
            solution: 'Industrialisering, urbanisering, vitenskapelige fremskritt, nye sosiale problemer.',
          },
          {
            label: 'b',
            task: 'Hvordan reagerte litteraturen på disse endringene?',
            solution: 'Litteraturen begynte å skildre virkeligheten og kritisere samfunnsforhold.',
          },
          {
            label: 'c',
            task: 'Hva mente Georg Brandes med at litteraturen skulle "sette problemer under debatt"?',
            solution: 'Litteraturen skulle ta opp aktuelle samfunnsproblemer og bidra til forandring.',
          },
        ],
        solution: 'Historisk kontekst forklarer hvorfor realismen og naturalismen oppstod.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom realisme og naturalisme.',
        hints: ['Tenk på syn på mennesket', 'Tenk på optimisme/pessimisme', 'Tenk på arv og miljø'],
        solution: 'Realismen tror på endring og handlefrihet, naturalismen er mer deterministisk og pessimistisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les en tekst av Alexander Kielland, Jonas Lie eller Amalie Skram og analyser den.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke samfunnsforhold kritiseres?',
            solution: 'Identifiser hva forfatteren kritiserer (f.eks. klasseforskjeller, religion, kjønnsroller).',
          },
          {
            label: 'b',
            task: 'Er teksten realistisk, naturalistisk, eller en blanding?',
            solution: 'Vurder om teksten viser handlefrihet eller determinisme.',
          },
          {
            label: 'c',
            task: 'Hvordan var teksten kontroversiell i sin samtid?',
            solution: 'Mange realistiske/naturalistiske tekster skapte debatt om moral og samfunn.',
          },
        ],
        solution: 'Analysen viser forståelse for epokens kjennetegn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign romantikken med realismen/naturalismen.',
        hints: ['Hvordan skildres naturen?', 'Hva er viktigst - følelser eller fornuft?', 'Idealisering eller virkelighetsskildring?'],
        solution: 'Romantikken idealiserte, realismen/naturalismen skildret virkeligheten. Romantikken fokuserte på følelser og natur, realismen på samfunn og fornuft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Er det rimelig å kritisere forfattere fra 1800-tallet for holdninger som var vanlige i deres samtid?',
        hints: ['Tenk på historisk kontekst', 'Skal vi lese litteratur fra fortiden med nåtidens briller?', 'Hva kan vi lære av å lese kritisk?'],
        solution: 'Drøftingen bør vise refleksjon over forholdet mellom historisk kontekst og nåtidige vurderinger. Det er viktig å forstå tekster i sin samtid, samtidig som vi kan vurdere dem kritisk i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.1: Nyrealisme og modernisme
// ============================================================================

export const CHAPTER_NORSK_VG1_11_1: TextbookChapter = {
  id: 'norsk-vg1-11-1',
  courseId: 'norsk-vg1',
  chapterNumber: '11.1',
  title: 'Nyrealisme og modernisme',
  description: 'Lær om overgangen fra realisme til nyrealisme og tidlig modernisme i norsk litteratur (ca. 1890-1940).',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-11-1-intro',
      type: 'text',
      content: `## Fra realisme til nye retninger

Rundt 1890 begynte forfattere å bevege seg bort fra den strenge realismen og naturalismen. Nye strømninger oppsto:

**Nyromantikk (ca. 1890-1905):**
- Reaksjon mot det grå og hverdagslige i realismen
- Tilbake til stemning, natur og følelser
- Eventyrlige og mystiske elementer
- Knut Hamsun som sentral skikkelse

**Nyrealisme (ca. 1905-1940):**
- Kombinerte realismens virkelighetsskildring med dypere psykologisk innsikt
- Ofte historiske romaner og bygdefortellinger
- Fokus på etikk, moral og menneskets plass i verden
- Sigrid Undset og Olav Duun som hovedfigurer

**Tidlig modernisme:**
- Eksperimentering med form og språk
- Fragmentering og nye perspektiver
- Påvirkning fra europeiske strømninger
- Oppbrudd fra tradisjonelle fortellerteknikker`,
    },
    {
      id: 'norsk-vg1-11-1-def-1',
      type: 'definition',
      title: 'Nyrealismens kjennetegn',
      content: `**Hva er nyrealisme?**

Nyrealismen var en litterær retning i Norge fra ca. 1905 til 1940 som kombinerte elementer fra realismen med nye perspektiver:

**Kjennetegn:**
- Virkelighetsskildring, men med større psykologisk dybde
- Ofte historiske eller regionale miljøer
- Etiske og moralske spørsmål
- Mennesket i konflikt med samfunn eller natur
- Episke fortellinger over lange tidsrom

**Forskjell fra realismen:**
- Mindre fokus på samfunnskritikk som hovedmål
- Mer interesse for det tidløse og allmennmenneskelige
- Religiøse og eksistensielle temaer
- Sterkere psykologisk karaktertegning

**Historisk kontekst:**
Nyrealismen utviklet seg i en tid med store samfunnsendringer: industrialisering, urbanisering, nasjonale bevegelser, og to verdenskriger. Forfatterne søkte å forstå menneskets plass i en verden i endring.`,
    },
    {
      id: 'norsk-vg1-11-1-def-2',
      type: 'definition',
      title: 'Tidlig modernisme i Norge',
      content: `**Modernismens begynnelse**

Modernismen var en internasjonal kunstnerisk bevegelse som påvirket norsk litteratur fra tidlig 1900-tall:

**Kjennetegn på tidlig modernisme:**
- Eksperimentering med fortellerteknikk
- Brudd med kronologisk fortelling
- Indre monolog og strøm av bevissthet
- Fragmentering av virkelighetsoppfatningen
- Fremmedgjøring som tema

**Påvirkning fra Europa:**
- Franske symbolister
- Tysk ekspresjonisme
- Psykoanalysen (Freud)
- Filosofisk modernisme

**I Norge:**
- Knut Hamsun som forløper med "Sult" (1890)
- Sigbjørn Obstfelder og symbolismen
- Senere: Tarjei Vesaas og andre

**Modernismen representerte et brudd med tradisjonelle fortellermåter og åpnet for nye måter å skildre menneskets indre liv og opplevelse av verden på.**`,
    },
    {
      id: 'norsk-vg1-11-1-def-3',
      type: 'definition',
      title: 'Sigrid Undset (1882-1949)',
      content: `**Norges mest berømte kvinnelige forfatter**

Sigrid Undset regnes som en av de største norske forfatterne og mottok Nobelprisen i litteratur i 1928.

**Biografi:**
- Født i Kalundborg, Danmark, oppvokst i Kristiania
- Debuterte i 1907 med "Fru Marta Oulie"
- Konverterte til katolisismen i 1924
- Flyktet til USA under krigen, returnerte i 1945

**Hovedverk:**
- "Kristin Lavransdatter" (1920-1922) - trilogi fra middelalderen
- "Olav Audunssøn" (1925-1927) - todelt roman fra middelalderen
- "Jenny" (1911) - samtidsroman
- "Gymnadenia" og "Den brennende busk" - konversjonsromaner

**Kjennetegn:**
- Historisk realisme med grundig research
- Psykologisk dybde i karakterskildringen
- Etiske og religiøse temaer
- Kvinners liv og valg som sentralt tema
- Konflikt mellom individ og samfunn

**Kristin Lavransdatter:**
Trilogien følger Kristin gjennom hele livet, fra barndom til død, i 1300-tallets Norge. Verket kombinerer historisk nøyaktighet med tidløse menneskelige temaer som kjærlighet, tro, synd og tilgivelse.`,
    },
    {
      id: 'norsk-vg1-11-1-def-4',
      type: 'definition',
      title: 'Olav Duun (1876-1939)',
      content: `**Mester i det episke**

Olav Duun var en av de fremste nyrealistiske forfatterne i Norge, kjent for sine store romanserier fra Namdalen.

**Biografi:**
- Født på Jøa i Namdalen
- Arbeidet som lærer
- Skrev på nynorsk
- Nominert til Nobelprisen flere ganger

**Hovedverk:**
- "Juvikfolke" (1918-1923) - seksbinds romanverk
- "Medmenneske" (1929)
- "Menneske og maktene" (1938)

**Kjennetegn:**
- Episke fortellinger over flere generasjoner
- Bondesamfunnet som ramme
- Mennesket i kamp med naturen og skjebnen
- Etiske og eksistensielle temaer
- Nynorsk språk med dialektpreg

**"Juvikfolke":**
Følger seks generasjoner av Juvikslekta. Temaer inkluderer:
- Arv og miljø
- Individ og fellesskap
- Menneskets forhold til naturen
- Kampen mellom det gode og det onde i mennesket

**Duuns verk utforsker tidløse spørsmål om menneskets natur, moral og plass i verden, ofte i et landlig miljø som blir en arena for universelle dramaer.**`,
    },
    {
      id: 'norsk-vg1-11-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av nyrealistisk tekst',
      problem: 'Analyser nyrealistiske trekk i dette utdraget fra Sigrid Undsets "Kristin Lavransdatter".',
      solution: `**Utdrag (fritt gjengitt):**

"Kristin så utover dalen der solen gikk ned bak åsene. Hun tenkte på alt som hadde hendt - alle valgene hun hadde tatt, alle hun hadde såret. Nå, ved livets slutt, forsto hun at kjærligheten hun hadde søkt, hadde vært der hele tiden - i troen, i tilgivelsen."

**Nyrealistiske trekk:**

**Psykologisk dybde:**
- Indre refleksjon og selvransakelse
- Kristins følelser og tanker i sentrum
- Karakterutvikling over tid

**Etiske og religiøse temaer:**
- Skyld og tilgivelse
- Søken etter mening
- Tro som svar på livets spørsmål

**Historisk ramme:**
- Middelalderen som setting
- Detaljert miljøskildring
- Historisk autentisitet

**Det tidløse:**
- Universelle temaer: kjærlighet, tap, forsoning
- Menneskets søken etter mening
- Gyldige på tvers av tider

**Språk og stil:**
- Høytidelig, verdig tone
- Naturbeskrivelser med symbolsk funksjon
- Episk fortelling over lang tid`,
    },
    {
      id: 'norsk-vg1-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom realisme, nyrealisme og modernisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner realismen?',
            solution: 'Virkelighetsskildring, samfunnskritikk, fokus på hverdagsliv og sosiale forhold.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller nyrealismen seg fra realismen?',
            solution: 'Nyrealismen har mer psykologisk dybde, etiske/religiøse temaer, og fokuserer på det tidløse mer enn samfunnskritikk.',
          },
          {
            label: 'c',
            task: 'Hva er typisk for tidlig modernisme?',
            solution: 'Eksperimentering med form, indre monolog, fragmentering, fremmedgjøring som tema.',
          },
        ],
        solution: 'Å forstå forskjellene mellom disse retningene hjelper deg å plassere tekster i sin litteraturhistoriske kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les om Sigrid Undsets "Kristin Lavransdatter" og svar på spørsmålene.',
        hints: ['Du trenger ikke lese hele verket - les et sammendrag eller utdrag', 'Fokuser på temaer og kjennetegn'],
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler trilogien om?',
            solution: 'Trilogien følger Kristin Lavransdatter gjennom livet i 1300-tallets Norge - fra ungdom til død.',
          },
          {
            label: 'b',
            task: 'Hvilke sentrale temaer behandles?',
            solution: 'Kjærlighet, tro, synd, tilgivelse, kvinners liv, individ vs. samfunn, frihet og ansvar.',
          },
          {
            label: 'c',
            task: 'Hvorfor er verket regnet som nyrealistisk?',
            solution: 'Historisk ramme kombinert med psykologisk dybde, etiske temaer og tidløse menneskelige konflikter.',
          },
        ],
        solution: 'Kristin Lavransdatter er et hovedverk i norsk litteratur og representerer nyrealismen på sitt beste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign en realistisk tekst (f.eks. Ibsen) med en nyrealistisk tekst (f.eks. Undset).',
        hints: ['Se på temaer, karakterskildring, setting og stil', 'Hva er likt? Hva er forskjellig?'],
        solution: 'Sammenligningen bør vise forståelse for hvordan nyrealismen viderefører og fornyer den realistiske tradisjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Undersøk hvordan Olav Duuns "Juvikfolke" behandler forholdet mellom menneske og natur.',
        hints: ['Les et sammendrag eller utdrag', 'Hvordan påvirker naturen menneskenes liv?', 'Er naturen venn eller fiende?'],
        solution: 'I Duuns verk er naturen både livgivende og truende - den former menneskene og setter rammer for deres liv, men mennesket må også kjempe mot naturens krefter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvorfor tror du historiske romaner var så populære i nyrealismen?',
        hints: ['Tenk på nasjonsbygging og identitet', 'Hva gir historiske settinger mulighet til?', 'Hvordan kan fortiden belyse nåtiden?'],
        solution: 'Drøftingen bør vise refleksjon over hvordan historiske romaner kunne behandle tidløse temaer, bidra til nasjonal identitet, og gi distanse til å diskutere vanskelige spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.2: Lyrikk - fra romantikk til modernisme
// ============================================================================

export const CHAPTER_NORSK_VG1_11_2: TextbookChapter = {
  id: 'norsk-vg1-11-2',
  courseId: 'norsk-vg1',
  chapterNumber: '11.2',
  title: 'Lyrikk - fra romantikk til modernisme',
  description: 'Lær om utviklingen i norsk lyrikk fra romantikken til modernismen, med fokus på sentrale lyrikere og diktanalyse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'bruke fagbegreper i analyse av tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-11-2-intro',
      type: 'text',
      content: `## Norsk lyrikk gjennom tidene

Lyrikken har vært en sentral sjanger i norsk litteratur siden romantikken. Gjennom 1800- og 1900-tallet utviklet den seg fra romantiske naturdikt til modernistiske eksperimenter.

**Romantisk lyrikk (ca. 1830-1870):**
- Naturskildringer og nasjonale motiver
- Følelser i sentrum
- Rim og fast rytme
- Wergeland, Welhaven, Bjørnson

**Symbolisme (ca. 1890-1910):**
- Stemninger og antydninger
- Symboler og bilder
- Musikalsk språk
- Sigbjørn Obstfelder

**Modernistisk lyrikk (fra ca. 1910):**
- Brudd med tradisjonelle former
- Frie vers
- Hverdagsspråk og nye temaer
- Senere: Olav H. Hauge, Tarjei Vesaas m.fl.

**Å lese lyrikk krever oppmerksomhet på form, språk og bilder - det som står mellom linjene er ofte like viktig som det som står i dem.**`,
    },
    {
      id: 'norsk-vg1-11-2-def-1',
      type: 'definition',
      title: 'Romantikkens lyrikere',
      content: `**Henrik Wergeland (1808-1845)**
- Norges nasjonalskald
- Lidenskapelig og visjonær
- Temaer: frihet, natur, kjærlighet, menneskelighet
- Kjente dikt: "For Arbejdsklassen", "Til min Gyldenlak"
- Eksperimenterte med form og språk

**Johan Sebastian Welhaven (1807-1873)**
- Klassisist og formbevisst
- Elegant og kontrollert stil
- Temaer: natur, skjønnhet, harmoni
- Kjente dikt: "Norges Dæmring", "Lokkende Toner"
- Wergeland og Welhavens debatt formet norsk kulturliv

**Bjørnstjerne Bjørnson (1832-1910)**
- Forfatter av nasjonalsangen
- Bondefortellinger og dikt
- Temaer: nasjonal stolthet, natur, folkelivet
- Kjente dikt: "Ja, vi elsker", "Arne"
- Nobelprisen i 1903

**Felles trekk i romantisk lyrikk:**
- Rim og rytme
- Naturbilder
- Nasjonale motiver
- Følelsesuttrykk
- Idealisering`,
    },
    {
      id: 'norsk-vg1-11-2-def-2',
      type: 'definition',
      title: 'Symbolismen og Sigbjørn Obstfelder',
      content: `**Hva er symbolisme?**

Symbolismen var en litterær retning som oppsto i Frankrike på 1880-tallet og påvirket norsk lyrikk rundt 1890.

**Kjennetegn:**
- Stemninger fremfor klare budskap
- Symboler og antydninger
- Musikalitet i språket
- Det ubevisste og drømmeaktige
- Avstand fra det hverdagslige

**Sigbjørn Obstfelder (1866-1900)**
Norges fremste symbolist:

- Debuterte med "Digte" (1893)
- Kjent for diktet "Jeg ser"
- Fremmedgjøring og undring som tema
- Musikalsk, drømmende språk
- Kort liv, men stor innflytelse

**"Jeg ser" (1893):**

"Jeg ser på den hvide himmel,
jeg ser på de gråblå skyer,
jeg ser på den blodige sol.

Dette er altså verden.
Dette er altså klodernes hjem.

En regndråpe!"

**Diktet uttrykker fremmedgjøring - dikteren opplever verden som underlig og ukjent, noe som peker fremover mot modernismen.**`,
    },
    {
      id: 'norsk-vg1-11-2-def-3',
      type: 'definition',
      title: 'Tidlig modernistisk lyrikk',
      content: `**Modernismen i lyrikken**

Fra tidlig 1900-tall begynte lyrikken å bryte med tradisjonelle former:

**Kjennetegn:**
- Frie vers uten fast rim og rytme
- Hverdagsspråk blandet med poetisk språk
- Nye temaer: fremmedgjøring, tvil, det urbane
- Eksperimentering med form
- Mindre idealisering, mer ærlighet

**Overgangsfigurer:**
- Knut Hamsun med prosalyrikk
- Nils Collett Vogt
- Herman Wildenvey (tradisjonell form, moderne temaer)

**Mot etterkrigstiden:**
- Rolf Jacobsen - modernismens gjennombrudd
- Tarjei Vesaas - nynorsk modernist
- Olav H. Hauge - modernisme med tradisjon

**Lyrikkens utvikling viser hvordan kunst speiler sin tid: fra romantikkens idealisering, gjennom symbolismens stemninger, til modernismens ærlige konfrontasjon med en verden i endring.**`,
    },
    {
      id: 'norsk-vg1-11-2-def-4',
      type: 'definition',
      title: 'Diktanalyse i praksis',
      content: `**Hvordan analysere et dikt?**

**1. Førsteinntrykk:**
- Hva handler diktet om?
- Hvilken stemning skaper det?
- Hva legger du merke til først?

**2. Form:**
- Strofer og linjedeling
- Rim og rytme (eller fravær av dette)
- Grafisk utforming

**3. Språklige virkemidler:**
- Bilder og metaforer
- Symboler
- Gjentakelser
- Kontraster
- Besjeling/personifikasjon
- Lydmalende ord (onomatopoetikon)

**4. Innhold og tema:**
- Hvem er jeget?
- Hva skildres?
- Hvilke temaer behandles?
- Hva er budskapet?

**5. Kontekst:**
- Når er diktet skrevet?
- Hvilken epoke tilhører det?
- Biografiske forhold (forsiktig med dette)

**6. Helhetlig tolkning:**
- Hvordan virker form og innhold sammen?
- Hva gjør diktet med leseren?
- Hvorfor er diktet betydningsfullt?`,
    },
    {
      id: 'norsk-vg1-11-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av romantisk dikt',
      problem: 'Analyser dette diktet av Henrik Wergeland.',
      solution: `**"Til min Gyldenlak" (utdrag, fritt gjengitt):**

"Lille blomst i vinduet mitt,
du minner meg om våren,
om solen og om livets lys
som skinner gjennom årene."

**Analyse:**

**Form:**
- Fire linjer (kvartett)
- Enkel, sangbar rytme
- Rim (mitt/lys - ikke perfekt)
- Tilgjengelig form

**Språklige virkemidler:**
- Personifikasjon: blomsten tiltales som en venn
- Symbolikk: blomsten = liv, håp, skjønnhet
- Kontrast: liten blomst - store temaer

**Innhold og tema:**
- Jeget: dikteren ved vinduet
- Naturglede og livskraft
- Det lille i det store
- Håp og optimisme

**Romantiske trekk:**
- Naturmotiv
- Følelser i sentrum
- Idealisering
- Personlig tone

**Helhetlig tolkning:**
Diktet er typisk romantisk i sin feiring av naturen og livet. Blomsten blir et symbol på alt det vakre og gode. Wergelands optimisme og livskraft skinner gjennom.`,
    },
    {
      id: 'norsk-vg1-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Obstfelders dikt "Jeg ser" med fokus på symbolistiske trekk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken stemning skaper diktet?',
            solution: 'Diktet skaper en stemning av undring, fremmedgjøring og forvirring. Verden oppleves som underlig og ukjent.',
          },
          {
            label: 'b',
            task: 'Hvilke symboler finner du?',
            solution: 'Himmel, skyer, sol, regndråpe - alle kan tolkes symbolsk. Regndråpen kan symbolisere det lille mennesket i universet.',
          },
          {
            label: 'c',
            task: 'Hvordan bryter diktet med romantikken?',
            solution: 'Ingen idealisering, ingen harmoni - tvert imot fremmedgjøring og forvirring. Naturen er ikke vakker, men underlig.',
          },
        ],
        solution: 'Analysen viser forståelse for symbolismen og Obstfelders særpreg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn et dikt av Bjørnson eller Wergeland og analyser det.',
        hints: ['Bruk analyseskjemaet fra teoridelen', 'Se etter romantiske trekk', 'Hvordan brukes naturen?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og identifisere romantiske trekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign et romantisk dikt med et symbolistisk dikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildres naturen i de to diktene?',
            solution: 'Romantikken idealiserer ofte naturen, mens symbolismen bruker den til å skape stemninger eller uttrykke fremmedgjøring.',
          },
          {
            label: 'b',
            task: 'Hvordan er formen forskjellig?',
            solution: 'Romantiske dikt har ofte fast rim og rytme, symbolistiske dikt kan være friere og mer musikalske.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen i stemning?',
            solution: 'Romantikken uttrykker ofte glede, lengsel eller begeistring. Symbolismen skaper ofte mer tvetydige, drømmeaktige stemninger.',
          },
        ],
        solution: 'Sammenligningen viser forståelse for de to retningenes særpreg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et kort dikt (4-8 linjer) inspirert av romantikken eller symbolismen.',
        hints: ['Velg en stil og hold deg til den', 'Bruk naturmotiver', 'Tenk på stemning'],
        solution: 'Diktet bør vise forståelse for den valgte stilen. Romantisk: naturglede, rim, følelser. Symbolistisk: stemning, symboler, antydninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-11-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-11-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvorfor er lyrikk en viktig sjanger?',
        hints: ['Hva kan lyrikk uttrykke som prosa ikke kan?', 'Hvilken rolle spiller lyrikk i kulturen?', 'Hvorfor leser folk dikt?'],
        solution: 'Drøftingen bør vise refleksjon over lyrikkens særpreg: evnen til å uttrykke følelser, skape stemninger, si mye med få ord, og berøre leseren på en direkte måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.1: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_12_1: TextbookChapter = {
  id: 'norsk-vg1-12-1',
  courseId: 'norsk-vg1',
  chapterNumber: '12.1',
  title: 'Sammensatte tekster',
  description: 'Lær å analysere multimodale tekster som kombinerer ulike uttrykksformer som tekst, bilde og lyd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'bruke fagbegreper i analyse av tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-12-1-intro',
      type: 'text',
      content: `## Hva er sammensatte tekster?

I dag møter vi sjelden tekster som bare består av skrift. De fleste tekstene vi leser, ser og hører kombinerer flere uttrykksformer:

**Sammensatte/multimodale tekster:**
- Kombinerer to eller flere modaliteter
- Eksempler: nettsider, reklame, film, sosiale medier, lærebøker
- Modalitetene virker sammen og forsterker hverandre

**Modaliteter (uttrykksformer):**
- **Skrift:** Tekst, typografi, layout
- **Bilde:** Fotografier, illustrasjoner, grafikk
- **Lyd:** Tale, musikk, lydeffekter
- **Levende bilder:** Video, animasjon
- **Design:** Farger, komposisjon, navigasjon

**Hvorfor er dette viktig?**
- Vi omgis av sammensatte tekster
- For å forstå hvordan vi påvirkes
- For å kunne lage gode tekster selv
- Kritisk medieforståelse

**Sammensatte tekster krever at vi leser på flere plan samtidig - vi må se hvordan de ulike delene virker sammen for å skape mening.**`,
    },
    {
      id: 'norsk-vg1-12-1-def-1',
      type: 'definition',
      title: 'Modaliteter og samspill',
      content: `**De viktigste modalitetene:**

**Verbaltekst (skrift):**
- Overskrifter og brødtekst
- Typografi (skrifttype, størrelse, farge)
- Plassering på siden/skjermen

**Visuelt (bilde):**
- Fotografier vs. illustrasjoner
- Fargebruk og kontraster
- Bildeutsnitt og komposisjon
- Ikoniske symboler

**Auditivt (lyd):**
- Tale og stemmebruk
- Musikk og lydeffekter
- Stillhet som virkemiddel

**Layout og design:**
- Komposisjon
- Hvitrom
- Blikkfang
- Leseretning

**Samspill mellom modaliteter:**

**Forankring:** Tekst forklarer bildet, innsnevrer tolkningen
**Avløsning:** Bilde og tekst utfyller hverandre med ulik informasjon
**Kontrast:** Modalitetene står i motsetning til hverandre (ofte ironisk)
**Forsterkning:** Modalitetene gjentar samme budskap for større effekt`,
    },
    {
      id: 'norsk-vg1-12-1-def-2',
      type: 'definition',
      title: 'Analyse av reklame',
      content: `**Reklame som sammensatt tekst**

Reklame er et godt eksempel på sammensatte tekster fordi de bevisst bruker flere modaliteter for å påvirke.

**Analysemodell for reklame:**

**1. Beskrivelse:**
- Hva vises? (bilde, tekst, logo)
- Hva er produktet/tjenesten?
- Hvem er målgruppen?

**2. Visuell analyse:**
- Farger: Hvilke assosiasjoner skaper de?
- Komposisjon: Hva trekker blikket først?
- Mennesker: Hvem er avbildet? Hvordan fremstilles de?
- Setting: Hvor foregår det?

**3. Verbal analyse:**
- Slagord: Hva sier det? Hvordan?
- Tone: Saklig, humoristisk, følelsesladet?
- Språklige virkemidler: Rim, ordspill, imperativ?

**4. Samspill:**
- Hvordan virker bilde og tekst sammen?
- Forsterker, forankrer eller kontrasterer de?

**5. Retorisk analyse:**
- Etos: Hvordan skaper avsenderen troverdighet?
- Patos: Hvilke følelser appelleres det til?
- Logos: Brukes logiske argumenter?

**6. Vurdering:**
- Er reklamen effektiv? Hvorfor/hvorfor ikke?
- Hvem kan føle seg inkludert/ekskludert?`,
    },
    {
      id: 'norsk-vg1-12-1-def-3',
      type: 'definition',
      title: 'Analyse av nettaviser og sosiale medier',
      content: `**Nettaviser som sammensatte tekster**

Nettaviser er komplekse sammensatte tekster med mange elementer:

**Elementer:**
- Overskrifter (ofte oppsiktsvekkende)
- Ingress og brødtekst
- Bilder og video
- Faktabokser
- Lenker og relaterte saker
- Kommentarfelt
- Reklame

**Analysepunkter:**
- Hvordan fanger forsiden oppmerksomhet?
- Hvordan virker bilde og tekst sammen?
- Hvordan styres leseren gjennom teksten?
- Hva er forholdet mellom journalistikk og reklame?

**Sosiale medier som sammensatte tekster**

**Elementer:**
- Tekst, bilde, video
- Emojier og hashtags
- Lenker og delinger
- Kommentarer og reaksjoner
- Profil og identitet

**Analysepunkter:**
- Hvordan presenterer avsenderen seg?
- Hvordan kombineres tekst og bilde?
- Hvem er målgruppen?
- Hva er formålet? (informere, underholde, påvirke, selge)
- Hvordan inviteres til interaksjon?

**Kritisk lesing av digitale tekster krever bevissthet om algoritmer, viralitet og hvordan plattformenes design påvirker innholdet.**`,
    },
    {
      id: 'norsk-vg1-12-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av reklame',
      problem: 'Analyser denne tenkte reklamen for en sykkel.',
      solution: `**Beskrivelse av reklamen:**
Bildet viser en person som sykler gjennom en grønn skog på en solskinnsdag. Teksten sier: "Frihet på to hjul. Oppdag naturen med [Sykkelmerke]."

**Visuell analyse:**

**Farger:**
- Grønt (natur, helse, miljø)
- Blått (himmel, frihet)
- Sollys (energi, positivitet)

**Komposisjon:**
- Syklisten i bevegelse mot høyre (fremover)
- Naturen dominerer bildet
- Sykkelen er synlig, men ikke påtrengende

**Mennesker:**
- Person i aktivt tøy
- Ser glad og fri ut
- Kan representere mange aldersgrupper

**Verbal analyse:**

**"Frihet på to hjul":**
- Metafor: sykkelen = frihet
- Kort og slagkraftig
- Appellerer til verdier (frihet)

**"Oppdag naturen":**
- Imperativ - oppfordring til handling
- Naturen som noe positivt
- Antyder eventyr og nye opplevelser

**Retorisk analyse:**
- **Etos:** Bildet viser kvalitetssykkel i bruk
- **Patos:** Frihetsfølelse, naturglede, helse
- **Logos:** Implisitt: sykkel = bra for deg og miljøet

**Samspill:**
Bilde og tekst forsterker hverandre - begge kommuniserer frihet, natur og aktivitet.`,
    },
    {
      id: 'norsk-vg1-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med sammensatte/multimodale tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en modalitet?',
            solution: 'En modalitet er en uttrykksform, som skrift, bilde, lyd eller video.',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på sammensatte tekster.',
            solution: 'Eksempler: nettsider, reklame, film, musikkvideoer, lærebøker, sosiale medier-poster.',
          },
          {
            label: 'c',
            task: 'Hva betyr det at modaliteter "virker sammen"?',
            solution: 'Det betyr at de ulike uttrykksformene skaper mening sammen, på måter de ikke kunne gjort alene.',
          },
        ],
        solution: 'Forståelse av sammensatte tekster er viktig for kritisk lesing i dagens mediesamfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn en reklame (på nett, i et blad, eller på TV) og analyser den.',
        hints: ['Beskriv først hva du ser', 'Analyser visuelt og verbalt', 'Vurder samspillet mellom modalitetene', 'Hvem er målgruppen?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og identifisere virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser forsiden til en nettavis.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan er forsiden organisert?',
            solution: 'Beskriv layout, plassering av hovedsaker, reklame, navigasjon.',
          },
          {
            label: 'b',
            task: 'Hva trekker blikket ditt først? Hvorfor?',
            solution: 'Identifiser blikkfang (store bilder, sterke farger, oppsiktsvekkende overskrifter).',
          },
          {
            label: 'c',
            task: 'Hvordan virker overskrifter og bilder sammen?',
            solution: 'Vurder om de forankrer, forsterker eller skaper kontrast.',
          },
        ],
        solution: 'Analysen viser forståelse for hvordan nettaviser er designet for å fange og holde oppmerksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en post fra et nøytralt tema på sosiale medier (f.eks. en matoppskrift, et reisebilde, eller en dyrevideo).',
        hints: ['Beskriv alle elementene', 'Hvem er avsenderen?', 'Hvem er målgruppen?', 'Hva er formålet?'],
        solution: 'Analysen bør vise forståelse for hvordan sosiale medier fungerer som sammensatte tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en enkel sammensatt tekst: en plakat for et skolearrangement.',
        hints: ['Velg et tema (konsert, idrettsdag, teater, etc.)', 'Tenk på målgruppe', 'Kombiner tekst og bilde', 'Tenk på farger, layout og typografi'],
        solution: 'Plakaten bør vise bevisst bruk av flere modaliteter som virker sammen for å kommunisere et tydelig budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.2: Film som tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_12_2: TextbookChapter = {
  id: 'norsk-vg1-12-2',
  courseId: 'norsk-vg1',
  chapterNumber: '12.2',
  title: 'Film som tekst',
  description: 'Lær å analysere film med fokus på filmspråk, virkemidler og adaptasjon av litteratur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'sammenligne tekster og vurdere hvordan samme tema behandles i ulike sjangrer og medier',
  ],
  content: [
    {
      id: 'norsk-vg1-12-2-intro',
      type: 'text',
      content: `## Film som fortelling

Film er en av de mektigste formene for fortelling i vår tid. Som sammensatt tekst kombinerer film mange uttrykksformer:

**Filmens modaliteter:**
- Levende bilder
- Lyd (dialog, musikk, lydeffekter)
- Tekst (undertekster, tekst i bildet)
- Skuespill og mise-en-scène

**Filmspråk:**
Film har sitt eget "språk" - et sett av konvensjoner og teknikker som brukes til å fortelle historier:

- **Kameraføring:** Vinkel, bevegelse, avstand
- **Klipping:** Hvordan scener settes sammen
- **Lyd:** Dialog, musikk, lydeffekter, stillhet
- **Mise-en-scène:** Alt som er i bildet (kulisser, kostyme, lys)

**Å lese film:**
Som med skriftlige tekster kan vi analysere film med faglige begreper. Vi ser på hvordan filmspråket brukes til å fortelle historier, skape stemninger og formidle budskap.

**Film er mer enn underholdning - det er en kunstform og et medium for fortelling som fortjener kritisk analyse.**`,
    },
    {
      id: 'norsk-vg1-12-2-def-1',
      type: 'definition',
      title: 'Kameravinkel og bildeutsnitt',
      content: `**Bildeutsnitt (shot sizes):**

**Totalbilde (extreme long shot):**
- Viser landskap eller store omgivelser
- Mennesker er små
- Etablerer setting, skaper stemning

**Halvtotalt (long shot):**
- Viser hele kroppen til personer
- Ser omgivelsene tydelig
- Viser handling og bevegelse

**Halvnært (medium shot):**
- Viser personer fra livet og opp
- Standard for samtaler
- Balanse mellom person og omgivelser

**Nært (close-up):**
- Viser ansikt eller detaljer
- Viser følelser tydelig
- Skaper intimitet

**Ekstrem nært (extreme close-up):**
- Viser en detalj (øye, hånd, gjenstand)
- Fremhever viktighet
- Kan skape ubehag eller intensitet

**Kameravinkler:**

**Fugleperspektiv:** Ovenfra - gjør personer små, sårbare
**Normalperspektiv:** I øyehøyde - nøytral fremstilling
**Froskeperspektiv:** Nedenfra - gjør personer mektige, truende

**Disse teknikkene brukes bevisst for å styre hvordan vi oppfatter personer og situasjoner.**`,
    },
    {
      id: 'norsk-vg1-12-2-def-2',
      type: 'definition',
      title: 'Klipping og montasje',
      content: `**Klipping (editing):**

Klipping er kunsten å sette sammen enkeltbilder til en sammenhengende film. Klippingen styrer:
- Tempo og rytme
- Hvilken informasjon seeren får
- Hvordan vi oppfatter tid og rom

**Klippeteknikker:**

**Kontinuitetsklipping:**
- Sømløs, usynlig klipping
- Opprettholder illusjonen av sammenhengende tid og rom
- Standard i spillefilm

**Kryssklipping:**
- Veksler mellom parallelle hendelser
- Skaper spenning
- Antyder at ting skjer samtidig

**Jump cut:**
- Brå klipp innenfor samme scene
- Bryter flyten, skaper uro
- Modernistisk teknikk

**Match cut:**
- Klipp mellom lignende former/bevegelser
- Skaper sammenheng mellom ulike scener

**Montasje:**
- Sekvens av korte klipp
- Viser tid som går eller utvikling
- Klassisk: treningssekvens

**Tempo:**
Raske klipp = spenning, action
Langsomme klipp = ettertanke, drama`,
    },
    {
      id: 'norsk-vg1-12-2-def-3',
      type: 'definition',
      title: 'Lyd i film',
      content: `**Filmens lydbilde:**

Lyd er like viktig som bilde i film. Vi deler lyden i:

**Diegetisk lyd:**
- Lyd som kommer fra filmens verden
- Dialog mellom karakterer
- Naturlyder, musikk fra radio i scenen
- Det karakterene selv kan høre

**Ikke-diegetisk lyd:**
- Lyd lagt til utenfor filmens verden
- Filmmusikk (score)
- Fortellerstemme (voice-over)
- Det bare seeren hører

**Lydens funksjoner:**

**Dialog:**
- Formidler informasjon
- Viser karaktertrekk
- Driver handlingen

**Lydeffekter:**
- Skaper realisme
- Forsterker stemning
- Fremhever viktige øyeblikk

**Musikk:**
- Skaper stemning
- Signaliserer sjanger
- Guider følelser
- Kommenterer handling

**Stillhet:**
- Kraftig virkemiddel
- Skaper spenning eller ubehag
- Fremhever det som kommer etter

**Lyden kan fortelle oss like mye som bildet - eller manipulere hvordan vi oppfatter det vi ser.**`,
    },
    {
      id: 'norsk-vg1-12-2-def-4',
      type: 'definition',
      title: 'Adaptasjon: fra bok til film',
      content: `**Når litteratur blir film**

Adaptasjon er når et verk overføres fra ett medium til et annet, for eksempel fra roman til film.

**Utfordringer ved adaptasjon:**
- Bok og film er forskjellige medier
- Indre monolog er vanskelig å filme
- Lang bok må kortes ned
- Leseren ser for seg karakterene selv, filmen viser dem

**Typer adaptasjon:**

**Tro adaptasjon:**
- Følger originalen tett
- Beholder så mye som mulig
- Risiko: kan føles stiv eller for lang

**Fri adaptasjon:**
- Tar utgangspunkt i verket
- Gjør store endringer
- Kan finne nye måter å formidle essensen

**Transformasjon:**
- Bruker elementer fra originalen
- Lager noe helt nytt
- Oppdatering til ny tid/setting

**Analysespørsmål for adaptasjon:**
1. Hva er beholdt fra originalen?
2. Hva er endret? Hvorfor?
3. Hvordan løser filmen det som er vanskelig å filme (tanker, tid, etc.)?
4. Hva tilfører filmen som mediet?
5. Hva mister vi fra boken?
6. Er filmen vellykket på egne premisser?

**En god adaptasjon er ikke nødvendigvis en som følger boken slavisk, men en som finner filmens egen måte å fortelle historien på.**`,
    },
    {
      id: 'norsk-vg1-12-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av filmscene',
      problem: 'Analyser en tenkt filmscene der to personer møtes for første gang.',
      solution: `**Scenebeskrivelse:**
To unge mennesker møtes ved en kafé. Øyekontakt, usikkerhet, så et smil.

**Analyse:**

**Bildeutsnitt:**
- Etablerende totalbilde av kafeen
- Halvnært av person A som ser opp
- Nært av person Bs ansikt
- Nært av person As reaksjon
- Totalt: de går mot hverandre

**Kamerabevegelse:**
- Kameraet nærmer seg sakte Person B (subjektivt fra As perspektiv)
- Skaper intimitet og spenning

**Klipping:**
- Sakte tempo - dveler ved blikk og reaksjoner
- Kryssklipping mellom de to ansiktene
- Bygger opp til møtet

**Lyd:**
- Kafeens diegetiske lyd dempes gradvis
- Ikke-diegetisk musikk kommer inn (romantisk)
- Dialog: "Hei" - enkelt, men ladet

**Mise-en-scène:**
- Varmt lys fra vinduet
- Andre mennesker i bakgrunnen (men uskarpe)
- Fargene på klærne komplementerer hverandre

**Tolkning:**
Filmspråket viser at dette øyeblikket er spesielt. Tempoet sakker, lyden endres, kameraet fokuserer - alt forteller seeren at disse to kommer til å bli viktige for hverandre.`,
    },
    {
      id: 'norsk-vg1-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar sentrale begreper i filmanalyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på nært og totalt bildeutsnitt?',
            solution: 'Nært viser ansikt/detaljer og følelser, totalt viser hele miljøet og etablerer setting.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på diegetisk og ikke-diegetisk lyd?',
            solution: 'Diegetisk lyd kommer fra filmens verden (karakterene kan høre den), ikke-diegetisk lyd er lagt til for seeren (filmmusikk, fortellerstemme).',
          },
          {
            label: 'c',
            task: 'Hva betyr mise-en-scène?',
            solution: 'Alt som er i bildet: kulisser, kostyme, rekvisitter, lyssetting, skuespillernes plassering.',
          },
        ],
        solution: 'Å kjenne fagbegrepene gjør deg i stand til å analysere film presist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg en scene fra en film du liker og analyser bruken av filmspråk.',
        hints: ['Beskriv hva som skjer', 'Se på kameraføring og klipping', 'Hvordan brukes lyd?', 'Hva uttrykker valgene?'],
        solution: 'Analysen bør vise evne til å bruke fagbegreper og forklare hvordan filmspråket skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser en norsk film.',
        hints: ['Velg en scene eller sekvens å fokusere på', 'Hvordan brukes typisk norske virkemidler (naturbilder, stillhet, realisme)?', 'Hva er filmens tema?'],
        solution: 'Analysen bør vise forståelse for norsk filmtradisjon og evne til filmanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign en bok med filmatiseringen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er beholdt fra boken?',
            solution: 'Identifiser elementer som er uendret (handling, karakterer, temaer).',
          },
          {
            label: 'b',
            task: 'Hva er endret? Hvorfor tror du det er endret?',
            solution: 'Vurder praktiske grunner (tid, budsjett) og kunstneriske valg.',
          },
          {
            label: 'c',
            task: 'Er filmen vellykket som selvstendig verk?',
            solution: 'Vurder filmen på egne premisser, ikke bare som kopi av boken.',
          },
        ],
        solution: 'Sammenligningen viser forståelse for forskjeller mellom bok og film som medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-12-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-12-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Kan en film noen gang være "like god som boken"?',
        hints: ['Er det rettferdig å sammenligne?', 'Hva kan film gjøre som bok ikke kan?', 'Hva kan bok gjøre som film ikke kan?', 'Bør de vurderes hver for seg?'],
        solution: 'Drøftingen bør vise forståelse for at bok og film er ulike medier med ulike styrker, og at begge kan være gode på hver sin måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.1: Skriving - prosess og teknikker
// ============================================================================

export const CHAPTER_NORSK_VG1_13_1: TextbookChapter = {
  id: 'norsk-vg1-13-1',
  courseId: 'norsk-vg1',
  chapterNumber: '13.1',
  title: 'Skriving - prosess og teknikker',
  description: 'Lær om skriveprosessen og teknikker for å bli en bedre skribent.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike skrivestrategier og tilpasse skriving til formål og mottaker',
    'gi og motta tilbakemelding på tekster og bruke dette i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-13-1-intro',
      type: 'text',
      content: `## Skriving som prosess

God skriving kommer sjelden av seg selv. De fleste gode tekster er resultat av en prosess med flere faser:

**Skriveprosessens faser:**
1. **Førskriving:** Idéutvikling, planlegging, research
2. **Utkast:** Få ideene ned på papiret
3. **Revisjon:** Omskriving og forbedring
4. **Redigering:** Språkvask og finpuss
5. **Ferdigstilling:** Formatering og levering

**Hvorfor tenke prosess?**
- Reduserer stress og skrivevegring
- Gir bedre tekster
- Gjør skriving mer håndterlig
- Skiller ulike typer arbeid

**Viktig innsikt:**
Førstetkastet trenger ikke være perfekt. Det er i revisjonen teksten blir god. Profesjonelle skribenter skriver om og om igjen.

**"Skriving er omskriving."** - Klassisk skriveråd

**I dette kapittelet lærer du konkrete teknikker for hver fase av skriveprosessen.**`,
    },
    {
      id: 'norsk-vg1-13-1-def-1',
      type: 'definition',
      title: 'Førskriving og idéutvikling',
      content: `**Før du begynner å skrive:**

Førskrivingsfasen handler om å finne ideer, samle materiale og planlegge teksten.

**Teknikker for idéutvikling:**

**Friskriving:**
- Skriv uavbrutt i 5-10 minutter
- Ikke sensurer deg selv
- La tankene flyte fritt
- Se på hva som dukker opp

**Tankekart:**
- Sett temaet i midten
- Skriv assosiasjoner rundt
- Finn sammenhenger
- God for å se strukturer

**Brainstorming:**
- List opp alle ideer
- Ingen er for dumme
- Mengde før kvalitet
- Sorter etterpå

**Spørsmålsteknikk:**
- Hvem? Hva? Hvor? Når? Hvorfor? Hvordan?
- Still spørsmål til emnet ditt
- Svarene gir innhold

**Research:**
- Les om emnet
- Ta notater
- Noter kilder
- Finn eksempler

**Planlegging:**
- Lag disposisjon
- Bestem rekkefølge
- Identifiser hovedpoenger
- Vurder lengde`,
    },
    {
      id: 'norsk-vg1-13-1-def-2',
      type: 'definition',
      title: 'Skrivestrategier og utkast',
      content: `**Å skrive førsteutkastet:**

Når du har planlagt, er det tid for å skrive. Her er strategier for utkastfasen:

**Strategi 1: Skriv uten stopp**
- Ikke stopp for å rette
- Ikke se tilbake
- Få alt ned på papiret
- Rediger senere

**Strategi 2: Start der det er lettest**
- Du trenger ikke starte med innledningen
- Skriv avsnittet du er sikrest på først
- Fyll inn resten etterpå

**Strategi 3: Snakk høyt**
- Forklar argumentet ditt høyt
- Skriv ned det du sa
- Ofte mer naturlig språk

**Strategi 4: Skriv til noen**
- Forestill deg en konkret leser
- Forklar til dem
- Hjelper med å holde fokus

**Tips for utkastfasen:**
- Sett tidsfrist
- Fjern distraksjoner
- Godta "dårlig" skriving - det er bare et utkast
- Marker steder du er usikker på (med [???]) og fortsett
- Ikke perfeksjonisme - fremdrift!

**Husk: Utkastet er råmateriale. Det er i neste fase du former det til noe bra.**`,
    },
    {
      id: 'norsk-vg1-13-1-def-3',
      type: 'definition',
      title: 'Revisjon og tilbakemelding',
      content: `**Revisjon - å se med nye øyne:**

Revisjon betyr å "se igjen". Her forbedrer du teksten på innholds- og strukturnivå.

**Revisjonsnivåer:**

**Globalt nivå:**
- Er strukturen logisk?
- Henger argumentene sammen?
- Er det noe som mangler?
- Er det noe overflødig?

**Avsnittsnivå:**
- Har hvert avsnitt ett hovedpoeng?
- Er det gode overganger?
- Er rekkefølgen god?

**Setningsnivå:**
- Er setningene klare?
- Varierer setningslengden?
- Er det unødvendige ord?

**Tilbakemelding:**

**Gi tilbakemelding:**
- Start med noe positivt
- Vær konkret ("Innledningen fanger oppmerksomhet" er bedre enn "bra")
- Still spørsmål der du er forvirret
- Foreslå forbedringer, ikke bare kritiser
- Vær respektfull - det er personens tekst

**Motta tilbakemelding:**
- Lytt åpent
- Spør om utdyping
- Du trenger ikke bruke alt
- Husk: tilbakemelding på teksten, ikke på deg
- Ta tid til å vurdere før du endrer`,
    },
    {
      id: 'norsk-vg1-13-1-def-4',
      type: 'definition',
      title: 'Egenvurdering',
      content: `**Å vurdere egen tekst:**

Egenvurdering er evnen til å se kritisk på eget arbeid. Det er en ferdighet du kan utvikle.

**Teknikker for egenvurdering:**

**La teksten hvile:**
- Legg den bort en dag eller to
- Du ser den med friske øyne
- Feil og forbedringer blir tydeligere

**Les høyt:**
- Du hører når noe ikke fungerer
- Merkelige setninger avsløres
- Naturlig måte å sjekke flyt

**Sjekkliste:**
Lag en liste med spørsmål du alltid sjekker:
- Svarer teksten på oppgaven?
- Er innledningen engasjerende?
- Er avslutningen god?
- Har jeg belegg for påstandene mine?
- Er språket tilpasset mottaker?

**Vurderingskriterier:**
Se på vurderingskriteriene før du starter og mens du reviderer:
- Hva vektlegges?
- Hvordan ligger teksten an?
- Hva kan forbedres?

**Sammenlign med gode tekster:**
- Les modelltekster
- Hva gjør de bra?
- Hva kan du lære?

**Egenvurdering gjør deg til en mer selvstendig skribent som kan forbedre egne tekster uten å vente på andres tilbakemelding.**`,
    },
    {
      id: 'norsk-vg1-13-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra utkast til ferdig tekst',
      problem: 'Se hvordan en tekst forbedres gjennom revisjon.',
      solution: `**Førsteutkast:**
"Sosiale medier er bra og dårlig. Mange bruker det hver dag. Det kan være bra for å holde kontakt med venner, men det kan også være dårlig."

**Problemer:**
- Vagt og repeterende
- "Bra og dårlig" - ingen konkrete argumenter
- Ingen eksempler eller belegg
- Svak innledning

**Revidert versjon:**
"En gjennomsnittlig norsk ungdom bruker flere timer daglig på sosiale medier. Disse plattformene gir oss mulighet til å holde kontakt med venner og delta i fellesskap uavhengig av avstand. Samtidig viser forskning at mye bruk kan påvirke søvn og selvbilde negativt. I denne teksten vil jeg drøfte både fordeler og ulemper ved sosiale medier."

**Forbedringer:**
- Konkret åpning (fakta)
- Spesifikke argumenter (kontakt, fellesskap)
- Henvisning til forskning (belegg)
- Tydelig fokus (drøfting)
- Veiledende avslutning (hva teksten skal gjøre)

**Neste steg:**
- Utvikle argumentene med eksempler
- Legge til motargumenter
- Skrive en konklusjon
- Sjekke språk og komma`,
    },
    {
      id: 'norsk-vg1-13-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar fasene i skriveprosessen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør du i førskrivingsfasen?',
            solution: 'Idéutvikling, planlegging, research, brainstorming, tankekart.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på revisjon og redigering?',
            solution: 'Revisjon handler om innhold og struktur (store endringer), redigering handler om språk og feil (små endringer).',
          },
          {
            label: 'c',
            task: 'Hvorfor er det lurt å la teksten hvile?',
            solution: 'Du får distanse og ser teksten med friske øyne. Feil og forbedringer blir tydeligere.',
          },
        ],
        solution: 'Å forstå skriveprosessen hjelper deg å jobbe mer systematisk med skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Prøv friskriving om et selvvalgt tema.',
        hints: ['Sett en timer på 10 minutter', 'Skriv uten å stoppe', 'Ikke bry deg om feil', 'Se hva som dukker opp'],
        solution: 'Friskriving skal gi deg råmateriale og overvinne skrivesperre. Resultatet trenger ikke være polert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag et tankekart for en tekst om et tema du kjenner godt.',
        hints: ['Velg et tema (hobby, fag, erfaring)', 'Sett temaet i midten', 'Skriv assosiasjoner', 'Finn sammenhenger'],
        solution: 'Tankekartet skal vise strukturer og sammenhenger i emnet ditt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi tilbakemelding på en medelevs tekst (eller en du har skrevet selv tidligere).',
        hints: ['Start med noe positivt', 'Vær konkret', 'Still spørsmål', 'Foreslå forbedringer'],
        solution: 'Tilbakemeldingen bør være konstruktiv, konkret og respektfull.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-13-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-13-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Revider et avsnitt fra en tidligere tekst du har skrevet.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser hva som kan forbedres.',
            solution: 'Se på struktur, klarhet, belegg, ordvalg.',
          },
          {
            label: 'b',
            task: 'Skriv en revidert versjon.',
            solution: 'Ny versjon bør vise tydelige forbedringer.',
          },
          {
            label: 'c',
            task: 'Forklar hva du endret og hvorfor.',
            solution: 'Refleksjon over egne valg viser metabevissthet om skriving.',
          },
        ],
        solution: 'Øvelsen viser at du kan vurdere og forbedre egen tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.1: De samiske språkene i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_14_1: TextbookChapter = {
  id: 'norsk-vg1-14-1',
  courseId: 'norsk-vg1',
  chapterNumber: '14.1',
  title: 'De samiske språkene i Norge',
  description: 'Lær om de samiske språkene, deres utbredelse og status i Norge.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over språklig mangfold i Norge og Norden',
  ],
  content: [
    {
      id: 'norsk-vg1-14-1-intro',
      type: 'text',
      content: `## Samisk - Norges urfolksspråk

Samene er Norges urfolk, og de samiske språkene har vært talt i Skandinavia i tusenvis av år - lenge før Norges grenser ble trukket. Samisk kultur og språk er en viktig del av Norges kulturarv.

**Sápmi - samenes hjemland:**
Sápmi strekker seg over fire land: Norge, Sverige, Finland og Russland. I Norge bor det samer over hele landet, men de tradisjonelle samiske områdene finnes hovedsakelig i Nord-Norge, Trøndelag og deler av Hedmark.

**Samisk som offisielt språk:**
Siden 1988 har samisk og norsk vært likestilte språk i Norge gjennom Grunnloven. Dette betyr at staten har et ansvar for å bevare og utvikle samisk språk og kultur.

**Hvorfor lære om samisk?**
- Det er en del av Norges historie og kulturarv
- Det er del av læreplanen (LK20)
- Det gir forståelse for språklig mangfold
- Det bidrar til forsoning etter fornorskingspolitikken`,
    },
    {
      id: 'norsk-vg1-14-1-def-1',
      type: 'definition',
      title: 'De tre samiske språkene i Norge',
      content: `Norge har tre samiske språk, som alle er selvstendige språk - ikke dialekter:

**1. Nordsamisk (davvisámegiella)**
- Det største samiske språket
- Ca. 20 000-25 000 talere totalt (Norge, Sverige, Finland)
- Snakkes i Finnmark og Nord-Troms
- Viktige områder: Kautokeino, Karasjok, Tana, Nesseby
- Har mest utviklet skriftspråk og litteratur

**2. Lulesamisk (julevsámegiella)**
- Ca. 500-1000 talere i Norge
- Snakkes i Tysfjord og Hamarøy i Nordland
- Også snakket i Sverige (Jokkmokk-området)
- Klassifisert som truet språk

**3. Sørsamisk (åarjelsaemien gïele)**
- Ca. 500-600 talere totalt
- Snakkes i Trøndelag, Nordland og Hedmark
- Språksentre i Snåsa og Røros
- Alvorlig truet språk
- Svært forskjellig fra nordsamisk

**Viktig:** Disse språkene er ikke gjensidig forståelige. En nordsamisktalende forstår ikke sørsamisk uten å lære det.`,
    },
    {
      id: 'norsk-vg1-14-1-def-2',
      type: 'definition',
      title: 'Språkfamilie og særtrekk',
      content: `**Samisk tilhører den finsk-ugriske språkfamilien:**

Samisk er slekt med finsk, estisk og ungarsk - men IKKE med norsk. Dette gjør samisk til et helt annerledes språk enn norsk.

**Særtrekk ved samiske språk:**

**Kasus-system:**
- Samisk har mange kasus (bøyningsformer for substantiv)
- Nordsamisk har 7 kasus
- Viser grammatiske funksjoner som norsk uttrykker med ordstilling

**Verbsystem:**
- Rik verbbøyning
- Skiller mellom entall, totall og flertall
- "Vi to" har egen form forskjellig fra "vi mange"

**Ordforråd:**
- Rikt ordforråd for natur, vær og reindrift
- Mange ord for snø, is og reinsdyr
- Gjenspeiler tradisjonell levemåte

**Eksempel på nordsamisk:**
- "Buorre beaivi" = God dag
- "Giitu" = Takk
- "Mii lea du namma?" = Hva heter du?

**Samisk i dag:**
Moderne samisk brukes i alle sammenhenger - fra tradisjonell joik til hip-hop, fra reindrift til programmering.`,
    },
    {
      id: 'norsk-vg1-14-1-def-3',
      type: 'definition',
      title: 'Status og truethet',
      content: `**Samiske språks status i dag:**

UNESCO klassifiserer språkenes truethetsnivå:

**Nordsamisk: Definert truet**
- Det sterkeste samiske språket
- Har skoler, medier, litteratur
- Men færre barn lærer det som førstespråk
- Utfordring: Overføring mellom generasjoner

**Lulesamisk: Alvorlig truet**
- Få talere, få barn lærer språket
- Aktive revitaliseringstiltak
- Språksentre jobber for bevaring

**Sørsamisk: Alvorlig truet**
- Svært få førstespråkstalere
- Mange lærer det som andrespråk
- Stor innsats for revitalisering
- Språkreir og språkbad

**Hva truer språkene?**
- Fornorskingspolitikkens langtidsvirkninger
- Urbanisering (samer flytter til byer)
- Dominansen av norsk i samfunnet
- Manglende lærere og læremidler

**Positive utviklinger:**
- Økt interesse for å lære samisk
- Flere samiske barnehager
- Samisk på Duolingo og andre apper
- NRK Sápmi og annen samisk media
- Stolthet over samisk identitet`,
    },
    {
      id: 'norsk-vg1-14-1-example-1',
      type: 'example',
      title: 'Eksempel: Samiske stedsnavn i Norge',
      problem: 'Mange steder i Norge har samiske navn. Hva forteller stedsnavnene oss?',
      solution: `**Samiske stedsnavn finnes over hele Nord-Norge og Trøndelag:**

**Eksempler med betydning:**
- **Tromsø** (Romsa) - kan bety "sted med sterk strøm"
- **Alta** (Áltá) - relatert til "alda" (bølge)
- **Kautokeino** (Guovdageaidnu) - "midtveis"
- **Karasjok** (Kárášjohka) - "elva ved den steinete/barkede"
- **Hammerfest** (Hámmerfeasta) - samisk versjon av det norske navnet

**Hva stedsnavnene viser:**
1. **Samisk tilstedeværelse:** Beviser at samer har bodd i områdene lenge
2. **Naturobservasjon:** Navnene beskriver ofte naturen
3. **Bruksområder:** Viser hvordan landskapet ble brukt
4. **Språkhistorie:** Viser samisk språks utbredelse

**Lovfesting:**
Stedsnavnloven (1990) sikrer at samiske stedsnavn skal tas vare på. Skilting på samisk er blitt vanligere, særlig i samiske forvaltningsområder.

**Refleksjon:** Stedsnavn er kulturminner. De viser hvem som har bodd der og hvordan de har brukt området.`,
    },
    {
      id: 'norsk-vg1-14-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmål om de samiske språkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange samiske språk snakkes i Norge?',
            solution: 'Tre: nordsamisk, lulesamisk og sørsamisk.',
          },
          {
            label: 'b',
            task: 'Hvilket samisk språk har flest talere?',
            solution: 'Nordsamisk, med ca. 20 000-25 000 talere totalt.',
          },
          {
            label: 'c',
            task: 'Hvilken språkfamilie tilhører samisk?',
            solution: 'Den finsk-ugriske (eller uralske) språkfamilien.',
          },
          {
            label: 'd',
            task: 'Er samisk i slekt med norsk? Forklar.',
            solution: 'Nei, samisk tilhører den finsk-ugriske familien, mens norsk tilhører den germanske/indoeuropeiske familien.',
          },
        ],
        solution: 'De samiske språkene er selvstendige språk med lang historie i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Undersøk samiske stedsnavn i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre norske byer eller tettsteder som har samiske navn.',
            solution: 'Eksempler: Tromsø (Romsa), Alta (Áltá), Kautokeino (Guovdageaidnu), Hammerfest (Hámmerfeasta), Vardø (Várggát).',
          },
          {
            label: 'b',
            task: 'Hva betyr stedsnavnloven for samiske stedsnavn?',
            solution: 'Loven sikrer at samiske stedsnavn tas vare på og kan brukes på skilt og kart.',
          },
        ],
        hints: ['Søk på nettstedet til Kartverket', 'Samiske stedsnavn finnes ofte på skilt i Nord-Norge'],
        solution: 'Samiske stedsnavn er kulturminner som viser samisk tilstedeværelse gjennom historien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Reflekter over språklig mangfold.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å bevare samiske språk?',
            solution: 'Svar kan inkludere: kulturarv, identitet, kunnskap, rettigheter, mangfold, forsoning.',
          },
          {
            label: 'b',
            task: 'Hva mister vi hvis et språk dør ut?',
            solution: 'Vi mister en unik måte å forstå verden på, kulturell kunnskap, tradisjonell viten, og et perspektiv som ikke kan gjenskapes.',
          },
        ],
        hints: ['Tenk på hva språk inneholder utover ord', 'Tenk på forholdet mellom språk og identitet'],
        solution: 'Språk bærer med seg kultur, historie og verdensforståelse som går tapt hvis språket dør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn ut mer om samisk i media.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er NRK Sápmi?',
            solution: 'NRKs samiske redaksjon som lager nyheter, programmer og innhold på samisk.',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på moderne samisk kultur (musikk, film, litteratur).',
            solution: 'Eksempler: Mari Boine (musikk), Elle Marja Eira (joik/pop), filmen Sameblod, Sofia Jannok, Maxida Märak.',
          },
        ],
        hints: ['Besøk NRK Sápmis nettsider', 'Søk på samisk musikk på Spotify'],
        solution: 'Samisk kultur er levende og utvikler seg i moderne former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kort tekst (150-200 ord) om hvorfor kunnskap om samiske språk bør være del av norskfaget.',
        hints: ['Tenk på Norges historie', 'Tenk på LK20 og læreplanmål', 'Tenk på forsoning og forståelse'],
        solution: 'Teksten bør argumentere for at kunnskap om samisk er viktig for å forstå norsk historie, kultur og språklig mangfold, og for forsoning etter fornorskingspolitikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.2: Fornorskingspolitikken
// ============================================================================

export const CHAPTER_NORSK_VG1_14_2: TextbookChapter = {
  id: 'norsk-vg1-14-2',
  courseId: 'norsk-vg1',
  chapterNumber: '14.2',
  title: 'Fornorskingspolitikken',
  description: 'Lær om den norske statens assimileringspolitikk overfor samer og kvener.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for den historiske bakgrunnen for samisk og nasjonale minoritetsspråk i Norge',
    'reflektere over hvordan språkpolitikk har påvirket minoritetsgrupper',
  ],
  content: [
    {
      id: 'norsk-vg1-14-2-intro',
      type: 'text',
      content: `## Fornorskingspolitikken - et mørkt kapittel

Fornorskingspolitikken var den norske statens offisielle politikk for å assimilere samer, kvener og andre minoriteter til norsk kultur og språk. Denne politikken varte i over 100 år og har hatt dype konsekvenser som fortsatt merkes i dag.

**Hva var fornorsking?**
Fornorsking innebar at minoriteter skulle bli "norske" - de skulle slutte å snakke sine egne språk, gi opp sin kultur og tilpasse seg det norske majoritetssamfunnet.

**Perioden:**
Fornorskingspolitikken var på sitt sterkeste fra ca. 1850 til 1980, men enkelte tiltak varte enda lenger.

**Hvem ble rammet?**
- Samer i hele Norge
- Kvener (norsk-finner) i Nord-Norge
- Skogfinner i Hedmark
- Romani/tatere

**Hvorfor lære om dette?**
- For å forstå minoritetenes situasjon i dag
- For å bidra til forsoning
- For å unngå å gjenta historiens feil
- Fordi det er del av norsk historie alle bør kjenne`,
    },
    {
      id: 'norsk-vg1-14-2-def-1',
      type: 'definition',
      title: 'Fornorskingspolitikkens metoder',
      content: `**Hvordan foregikk fornorskingen?**

**I skolen:**
- Samisk og kvensk var forbudt som undervisningsspråk
- Barn ble straffet for å snakke morsmålet
- Internatskoler fjernet barn fra familie og kultur
- Lærebøker fremstilte samisk kultur negativt
- Lærere måtte beherske norsk, ikke samisk

**Jordsalgsloven (1902):**
- Krevde at kjøpere av jord måtte kunne norsk
- Samiske stedsnavn ble fornorsket
- Presset samer vekk fra tradisjonelle områder

**I kirken:**
- Gudstjenester bare på norsk
- Konfirmasjon krevde norskkunnskaper
- Samisk religiøs praksis ble motarbeidet

**I offentligheten:**
- Samisk var usynlig i det offentlige rom
- Ingen samiske aviser eller bøker
- Skam knyttet til samisk identitet

**Internatskolene:**
Mange samiske barn ble sendt på internat langt fra hjemmet. De fikk ikke snakke samisk, måtte lære norsk tvang, og mistet kontakt med familie og kultur.`,
    },
    {
      id: 'norsk-vg1-14-2-def-2',
      type: 'definition',
      title: 'Bakgrunn og ideologi',
      content: `**Hvorfor fornorsking?**

Fornorskingspolitikken hadde flere årsaker:

**Nasjonsbygging:**
- Norge ble selvstendig i 1814/1905
- Staten ville skape en enhetlig nasjon
- "Ett folk, ett språk, én kultur"
- Minoriteter ble sett som hindring

**Sosialdarwinisme:**
- Vanlig tankesett på 1800-tallet
- Noen kulturer ble ansett som "høyere" enn andre
- Samisk kultur ble sett som "primitiv"
- Man trodde assimilering var "til deres eget beste"

**Sikkerhetspolitikk:**
- Frykt for finsk/russisk innflytelse i nord
- Kvener og samer ble sett som sikkerhetstrussel
- "Norsk" befolkning i nord var strategisk viktig

**Økonomiske interesser:**
- Ressurser i samiske områder
- Lettere å utnytte land uten samiske rettigheter

**Viktig:** Dette var statlig politikk støttet av lover, bevilgninger og institusjoner - ikke bare holdninger blant enkeltpersoner.`,
    },
    {
      id: 'norsk-vg1-14-2-def-3',
      type: 'definition',
      title: 'Konsekvenser av fornorskingen',
      content: `**Virkninger som fortsatt merkes:**

**Språktap:**
- Mange mistet morsmålet sitt
- Samisk ble ikke overført til nye generasjoner
- Noen samiske språk er nå truet av utryddelse
- Tapt kunnskap om tradisjonell terminologi

**Kulturelt brudd:**
- Tradisjoner, joik og håndverk gikk tapt
- Generasjoner vokste opp uten kulturell forankring
- Skam over samisk bakgrunn
- Mange skjulte sin samiske identitet

**Psykiske konsekvenser:**
- Traumer fra internatskoler
- Skam og mindreverd
- Identitetsforvirring
- Virkninger går i arv gjennom generasjoner

**Sosiale konsekvenser:**
- Brutte familiebånd
- Tap av tradisjonell kunnskap
- Vanskeligheter med å videreføre kultur
- Fortsatte effekter i form av lavere utdanning og helse

**Mange samer i dag har foreldre eller besteforeldre som ikke fikk snakke samisk som barn, og som aldri lærte barna sine språket.**`,
    },
    {
      id: 'norsk-vg1-14-2-def-4',
      type: 'definition',
      title: 'Sannings- og forsoningskommisjonen',
      content: `**Oppgjør med fortiden:**

I 2018 oppnevnte Stortinget Sannhets- og forsoningskommisjonen for å granske fornorskingspolitikken.

**Kommisjonens mandat:**
- Granske fornorskingspolitikken overfor samer, kvener og skogfinner
- Undersøke virkningene frem til i dag
- Foreslå tiltak for forsoning

**Rapporten (2023):**
Kommisjonen la frem sin rapport til Stortinget med:
- Dokumentasjon av overgrep og urett
- Personlige historier fra dem som ble rammet
- Analyse av langtidsvirkninger
- Anbefalinger for veien videre

**Noen funn:**
- Systematisk og bevisst politikk fra staten
- Varige skader på individer og samfunn
- Behov for fortsatt forsoning
- Språkrevitalisering er avgjørende

**Forsoningsarbeidet:**
- Offisielle unnskyldninger fra staten
- Økt støtte til samisk språk og kultur
- Synliggjøring av samisk historie
- Dialog mellom majoritet og minoriteter

**Forsoning er en pågående prosess som krever kunnskap, anerkjennelse og handling.**`,
    },
    {
      id: 'norsk-vg1-14-2-example-1',
      type: 'example',
      title: 'Eksempel: Personlige historier fra fornorskingen',
      problem: 'Hvordan opplevde enkeltpersoner fornorskingspolitikken?',
      solution: `**Autentiske fortellinger (anonymisert/sammensatt):**

**"Jeg fikk ikke snakke samisk på skolen"**
"Da jeg begynte på skolen, kunne jeg bare samisk. Læreren slo meg over fingrene hver gang jeg sa et samisk ord. Jeg lærte fort å tie. Men jeg glemte også morsmålet mitt."

**"Jeg visste ikke at jeg var same"**
"Mine foreldre fortalte aldri at vi var samer. Jeg fant ut det først som voksen, da jeg spurte hvorfor bestemor snakket så rart med de gamle nabokona."

**"Skammen sitter dypt"**
"Selv om fornorskingen er over, bærer jeg fortsatt på skam. Jeg valgte å ikke lære barna mine samisk fordi jeg ville skåne dem for det jeg opplevde."

**"Å finne tilbake"**
"I voksen alder begynte jeg på samiskkurs. Det var som å finne en del av meg selv jeg ikke visste manglet. Nå lærer jeg sammen med barnebarna mine."

**Refleksjon:**
Disse historiene viser hvordan politikk påvirker enkeltmennesker og hvordan virkningene går i arv. Mange lever fortsatt med konsekvensene av fornorskingen.`,
    },
    {
      id: 'norsk-vg1-14-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmål om fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var fornorskingspolitikken?',
            solution: 'Statlig politikk for å assimilere samer, kvener og andre minoriteter til norsk språk og kultur.',
          },
          {
            label: 'b',
            task: 'Hvor lenge varte fornorskingspolitikken omtrent?',
            solution: 'Fra ca. 1850 til 1980 - over 100 år.',
          },
          {
            label: 'c',
            task: 'Nevn tre metoder som ble brukt i fornorskingen.',
            solution: 'Eksempler: Forbud mot samisk i skolen, internatskoler, jordsalgsloven, fornorsking av stedsnavn, straff for å snakke morsmål.',
          },
        ],
        solution: 'Fornorskingspolitikken var systematisk statlig politikk med alvorlige konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser årsakene til fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med nasjonsbygging, og hvordan bidro det til fornorskingen?',
            solution: 'Nasjonsbygging er prosessen med å skape en samlet nasjon. Minoriteter ble sett som hinder for enhet.',
          },
          {
            label: 'b',
            task: 'Hva var sosialdarwinisme, og hvordan påvirket det synet på samer?',
            solution: 'Ideen om at noen kulturer/folk er "høyere" enn andre. Samisk kultur ble sett som "primitiv" og assimilering som "fremskritt".',
          },
        ],
        hints: ['Tenk på konteksten: Norge som ny selvstendig stat', 'Hvilke tankesett var vanlige på 1800-tallet?'],
        solution: 'Fornorskingen hadde ideologiske, politiske og økonomiske årsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft konsekvensene av fornorskingspolitikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke konsekvenser hadde fornorskingen for samisk språk?',
            solution: 'Mange mistet morsmålet, språk ble ikke overført mellom generasjoner, noen samiske språk er nå truet.',
          },
          {
            label: 'b',
            task: 'Hvordan kan traumer fra fornorskingen påvirke senere generasjoner?',
            solution: 'Skam og tabu rundt samisk identitet, brutte familiebånd, manglende språk- og kulturoverføring, psykiske ettervirkninger.',
          },
        ],
        hints: ['Tenk på hva det betyr å ikke kunne snakke med besteforeldrene', 'Tenk på identitet og tilhørighet'],
        solution: 'Fornorskingen har hatt varige konsekvenser for enkeltpersoner, familier og samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Undersøk Sannhets- og forsoningskommisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble kommisjonen oppnevnt og av hvem?',
            solution: 'Stortinget oppnevnte kommisjonen i 2018.',
          },
          {
            label: 'b',
            task: 'Hva var kommisjonens hovedoppgave?',
            solution: 'Å granske fornorskingspolitikken, undersøke virkningene og foreslå tiltak for forsoning.',
          },
          {
            label: 'c',
            task: 'Hvorfor er slike granskninger viktige?',
            solution: 'For å dokumentere urett, anerkjenne lidelse, lære av historien og legge grunnlag for forsoning.',
          },
        ],
        hints: ['Søk på kommisjonens nettsider', 'Tenk på lignende prosesser i andre land'],
        solution: 'Sannhetskommisjoner er viktige for å bearbeide historisk urett og muliggjøre forsoning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en refleksjonstekst (200-250 ord) om hva du tenker om fornorskingspolitikken og dens betydning for Norge i dag.',
        hints: ['Hva har du lært som var nytt?', 'Hvordan kan kunnskap bidra til forsoning?', 'Hva er statens ansvar?', 'Hva kan du som enkeltperson gjøre?'],
        solution: 'Teksten bør vise refleksjon over historien, forståelse for konsekvensene og tanker om forsoning og veien videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.3: Samiske språklige rettigheter
// ============================================================================

export const CHAPTER_NORSK_VG1_14_3: TextbookChapter = {
  id: 'norsk-vg1-14-3',
  courseId: 'norsk-vg1',
  chapterNumber: '14.3',
  title: 'Samiske språklige rettigheter',
  description: 'Lær om lover og rettigheter som beskytter samisk språk i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for språkpolitikk og språklige rettigheter i Norge',
    'reflektere over forholdet mellom språk, makt og identitet',
  ],
  content: [
    {
      id: 'norsk-vg1-14-3-intro',
      type: 'text',
      content: `## Fra undertrykkelse til rettigheter

Etter over 100 år med fornorskingspolitikk har situasjonen for samisk språk endret seg dramatisk. I dag har samisk en rekke lovfestede rettigheter, og staten har ansvar for å bevare og utvikle samisk språk.

**Vendepunkter:**
- 1988: Sameparagrafen i Grunnloven
- 1989: Opprettelse av Sametinget
- 1990: Sameloven med språkregler
- 2021: Ny språklov styrker samisk

**Fra forbud til rettigheter:**
Utviklingen viser hvordan politikk kan endre seg. Det som var forbudt for noen tiår siden, er nå beskyttet av loven.

**I dette kapittelet lærer du:**
- Om sameloven og språkforvaltningsområder
- Om samiske rettigheter i skole og offentlighet
- Om samisk i medier og på internett
- Om utfordringer og muligheter fremover`,
    },
    {
      id: 'norsk-vg1-14-3-def-1',
      type: 'definition',
      title: 'Grunnloven og sameloven',
      content: `**Grunnlovens sameparagraf (§ 108):**

"Det påligger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv."

**Hva betyr dette?**
- Staten har PLIKT til å støtte samisk språk
- Samisk språk og kultur har grunnlovsvern
- Samene har rett til å utvikle sitt samfunnsliv

**Sameloven (1987):**
Gir konkrete rettigheter:
- Rett til å bruke samisk i kontakt med offentlige myndigheter
- Rett til svar på samisk i forvaltningsområdet
- Rett til samiskopplæring i skolen
- Rett til samiske stedsnavn

**Språkforvaltningsområdet:**
Kommuner der samisk og norsk er likestilte:
- Kautokeino, Karasjok, Tana, Nesseby, Porsanger
- Kåfjord, Lavangen, Tysfjord
- Snåsa, Røyrvik, Hattfjelldal
- Flere kan søke om å bli del av området

**I disse kommunene har du rett til å bruke samisk i alle offentlige sammenhenger.**`,
    },
    {
      id: 'norsk-vg1-14-3-def-2',
      type: 'definition',
      title: 'Samisk i skolen',
      content: `**Opplæringsloven gir rettigheter:**

**I samiske distrikt:**
- Samisk som førstespråk i grunnskolen
- Undervisning i og på samisk
- Samisk som hovedspråk i barnehagen

**Utenfor samiske distrikt:**
- Rett til opplæring i samisk hvis eleven ønsker det
- Gjelder uansett hvor i landet du bor
- Kan gis som fjernundervisning

**Praktiske utfordringer:**
- Mangel på samisktalende lærere
- Få læremidler på samisk
- Lange avstander til andre samiske elever
- Fjernundervisning kan være vanskelig

**Samisk videregående:**
- Samisk videregående skole i Karasjok og Kautokeino
- Undervisning på samisk
- Kombinerer akademisk og tradisjonell kunnskap

**Samiskkurs for voksne:**
- Voksne som mistet språket kan få gratis opplæring
- Språksentre tilbyr kurs
- Apper og nettressurser finnes

**Revitalisering i skolen:**
Språkbad og språkreir er metoder der barn lærer samisk gjennom lek og daglig bruk, ikke bare som fag.`,
    },
    {
      id: 'norsk-vg1-14-3-def-3',
      type: 'definition',
      title: 'Samisk i medier og samfunn',
      content: `**Samisk i medier:**

**NRK Sápmi:**
- Nyheter på nordsamisk daglig
- Radioprogrammer på alle tre samiske språk
- TV-programmer og nettinnhold
- Barneprogram på samisk

**Aviser:**
- Ávvir (dagsavis på nordsamisk)
- Ságat (norskspråklig avis om samiske saker)
- Nuorttanaste (sørsamisk)

**Samisk på internett:**
- Samisk på Facebook, Instagram, TikTok
- Wikipedia på nordsamisk
- Oversettelse i Google og Microsoft
- Samisk tastatur på alle enheter

**Samiske stedsnavn:**
- Stedsnavnloven beskytter samiske navn
- Skilting på både norsk og samisk
- Samiske navn på kart
- Økt synlighet de siste årene

**Samisk i offentligheten:**
- Samiske farger og flagg 6. februar (samefolkets dag)
- Samisk i Stortinget
- Økt synlighet i nasjonale arrangementer
- Samisk i offentlige bygg og institusjoner`,
    },
    {
      id: 'norsk-vg1-14-3-def-4',
      type: 'definition',
      title: 'Utfordringer og muligheter',
      content: `**Utfordringer for samisk språk i dag:**

**Strukturelle:**
- For få lærere
- Mangel på læremidler
- Vanskelig å bruke samisk i hverdagen
- Norsk dominerer

**Holdninger:**
- Fortsatt noe stigma
- Manglende kunnskap i majoritetsbefolkningen
- Samisk kan føles "unyttig"

**Praktiske:**
- Få samisktalende i mange områder
- Digitale verktøy mangler
- Vanskelig å bruke i jobb og utdanning

**Muligheter og positive trender:**

**Økt interesse:**
- Flere vil lære samisk
- Stolthet over samisk identitet
- "Samisk er kult" blant unge

**Teknologi:**
- Samisk på Duolingo (kommer/under utvikling)
- Talesyntese og oversettelsesverktøy
- Samisk i smart-teknologi

**Revitalisering:**
- Språkreir gir resultater
- Voksne lærer tilbake språket
- Nye generasjoner vokser opp med samisk

**Det tar tid å rette opp 100 års fornorsking, men utviklingen går i riktig retning.**`,
    },
    {
      id: 'norsk-vg1-14-3-example-1',
      type: 'example',
      title: 'Eksempel: Dine rettigheter',
      problem: 'Hvilke rettigheter har du hvis du vil lære eller bruke samisk?',
      solution: `**Dine samiske språkrettigheter:**

**Som elev:**
- Du har rett til opplæring i samisk uansett hvor du bor
- Du kan velge samisk som valgfag
- Du kan ta eksamen i samisk

**I offentlige tjenester (i forvaltningsområdet):**
- Rett til å henvende deg på samisk
- Rett til svar på samisk
- Rett til tolk hvis nødvendig

**I retten:**
- Rett til å bruke samisk i rettssaker
- Rett til tolk

**I helsevesenet:**
- Rett til informasjon du forstår
- SANKS (Samisk nasjonalt kompetansesenter) tilbyr helsetjenester

**Som voksen:**
- Rett til gratis samiskopplæring (for de som mistet språket)
- Språksentre tilbyr kurs

**Hvordan bruke rettighetene:**
1. Kontakt skolen din om samiskopplæring
2. Kontakt kommunen om tjenester på samisk
3. Besøk Sametingets nettsider for informasjon
4. Bruk språksenteret i din region`,
    },
    {
      id: 'norsk-vg1-14-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmål om samiske språkrettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier Grunnlovens § 108 om samisk?',
            solution: 'Staten har plikt til å legge til rette for at samene kan sikre og utvikle sitt språk, kultur og samfunnsliv.',
          },
          {
            label: 'b',
            task: 'Hva er språkforvaltningsområdet?',
            solution: 'Kommuner der samisk og norsk er likestilte og du har rett til å bruke samisk i offentlige tjenester.',
          },
          {
            label: 'c',
            task: 'Hvilke rettigheter har elever til samiskopplæring?',
            solution: 'Alle elever i Norge har rett til opplæring i samisk hvis de ønsker det, uansett hvor de bor.',
          },
        ],
        solution: 'Samisk har sterkt lovvern i Norge etter Grunnloven og sameloven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Undersøk samisk i medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Besøk NRK Sápmis nettsider. Hva slags innhold finner du der?',
            solution: 'Nyheter, radio, TV-programmer, kulturstoff, barneinnhold - mye på samisk.',
          },
          {
            label: 'b',
            task: 'Hvorfor er samiske medier viktige for språkbevaring?',
            solution: 'De gir folk mulighet til å bruke og høre samisk daglig, viser at samisk er et moderne språk, og styrker identitet.',
          },
        ],
        hints: ['Gå til nrk.no/sapmi', 'Tenk på hva medier betyr for språk'],
        solution: 'Medier på samisk er avgjørende for å holde språket levende og relevant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft forholdet mellom rettigheter og praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Selv om elever har rett til samiskopplæring, er det ikke alltid lett å få. Hvorfor?',
            solution: 'Mangel på lærere, få læremidler, lange avstander, fjernundervisning kan være utfordrende.',
          },
          {
            label: 'b',
            task: 'Hva kan gjøres for å lukke gapet mellom rettigheter og praksis?',
            solution: 'Utdanne flere lærere, utvikle digitale læremidler, mer ressurser, bedre fjernundervisningsløsninger.',
          },
        ],
        hints: ['Tenk på praktiske hindringer', 'Tenk på hva som trengs for at rettigheter skal fungere'],
        solution: 'Rettigheter på papiret må følges opp med ressurser for å fungere i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign samisk med andre minoritetsspråk i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke andre minoritetsspråk har rettigheter i Norge?',
            solution: 'Kvensk, romanes, romani, norsk tegnspråk har status som nasjonale minoritetsspråk.',
          },
          {
            label: 'b',
            task: 'Hvorfor har samisk sterkere rettigheter enn andre minoritetsspråk?',
            solution: 'Samer er urfolk med særskilte rettigheter etter internasjonal lov, og har lengst historie i landet.',
          },
        ],
        hints: ['Søk på nasjonale minoritetsspråk', 'Hva er forskjellen på urfolk og minoritet?'],
        solution: 'Samisk har særstilling som urfolksspråk, men andre minoritetsspråk har også vern.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-14-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-14-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en tekst (200 ord) om hvordan du mener Norge bør jobbe med samisk språk fremover.',
        hints: ['Hva fungerer bra i dag?', 'Hva bør forbedres?', 'Hva kan du selv gjøre?', 'Hvordan kan teknologi hjelpe?'],
        solution: 'Teksten bør vise forståelse for utfordringer og muligheter, og komme med konkrete forslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.1: Setningsanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_15_1: TextbookChapter = {
  id: 'norsk-vg1-15-1',
  courseId: 'norsk-vg1',
  chapterNumber: '15.1',
  title: 'Setningsanalyse',
  description: 'Lær å analysere setninger og identifisere setningsledd.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke grammatisk kunnskap til å analysere og vurdere egen og andres tekst',
    'gjøre rede for setningsoppbygging og bruke dette i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-15-1-intro',
      type: 'text',
      content: `## Setningsanalyse - å forstå hvordan setninger er bygd opp

Setningsanalyse handler om å identifisere de ulike delene (leddene) i en setning og forstå hvordan de fungerer sammen.

**Hvorfor setningsanalyse?**
- Gir deg et språk for å snakke om språk
- Hjelper deg å skrive klarere setninger
- Gjør det lettere å finne feil
- Grunnlag for å lære andre språk
- Viktig på eksamen i norsk

**Hva er et setningsledd?**
Et setningsledd er en del av setningen som har en bestemt funksjon. Hvert ledd svarer på et spørsmål vi kan stille til setningen.

**De viktigste setningsleddene:**
- Verbal (V) - handlingen
- Subjekt (S) - hvem handler
- Objekt (O) - hvem/hva handlingen rammer
- Adverbial (A) - omstendighetene
- Predikativ (P) - beskrivelse av subjekt/objekt

**I dette kapittelet lærer du å identifisere og analysere alle disse leddene.**`,
    },
    {
      id: 'norsk-vg1-15-1-def-1',
      type: 'definition',
      title: 'Verbal (V)',
      content: `**Verbalet er setningens kjerne.**

Verbalet forteller hva som skjer i setningen - handlingen eller tilstanden.

**Hvordan finne verbalet:**
Spør: "Hva skjer?" eller "Hva gjøres?"

**Eksempler:**
- "Lise **leser** en bok." (leser = V)
- "Det **regner** ute." (regner = V)
- "Hun **har jobbet** hele dagen." (har jobbet = V)

**Verbalet kan bestå av flere ord:**
- Hjelpeverb + hovedverb: "har spist", "vil reise", "ble invitert"
- Sammensatt verb: "har blitt gitt"

**Finitt og infinitt verbal:**
- **Finitt:** Bøyd i tid (presens, preteritum): "spiser", "spiste"
- **Infinitt:** Infinitiv eller partisipp: "å spise", "spist"

**Husk:** Enhver fullstendig setning må ha et verbal. Verbalet er obligatorisk.

**Tips:** Finn verbalet først - det gjør det lettere å finne de andre leddene.`,
    },
    {
      id: 'norsk-vg1-15-1-def-2',
      type: 'definition',
      title: 'Subjekt (S)',
      content: `**Subjektet er den eller det som handler eller beskrives.**

Subjektet forteller hvem eller hva setningen handler om.

**Hvordan finne subjektet:**
Spør: "Hvem/hva + verbalet?"

**Eksempler:**
- "**Lise** leser en bok." → Hvem leser? = Lise (S)
- "**Bilen** står i garasjen." → Hva står? = Bilen (S)
- "**Det** regner ute." → Hva regner? = Det (S)

**Subjektet kan være:**
- Substantiv: "Hunden bjeffer."
- Pronomen: "Han kommer."
- Egenavn: "Oslo er Norges hovedstad."
- Setning: "At han kom, overrasket meg."

**Formelt subjekt:**
Noen setninger har "det" som formelt subjekt:
- "Det regner." (hva regner egentlig?)
- "Det er kaldt."
- "Det finnes mange muligheter."

**Samsvarsbøyning:**
Subjektet styrer verbalformen:
- "Jeg **er**" / "Vi **er**"
- "Hun **løper**" / "De **løper**"`,
    },
    {
      id: 'norsk-vg1-15-1-def-3',
      type: 'definition',
      title: 'Objekt (DO og IO)',
      content: `**Objektet er den/det handlingen rammer.**

Vi skiller mellom direkte og indirekte objekt.

**Direkte objekt (DO):**
Spør: "Hvem/hva + verbalet + subjektet?"

**Eksempler på direkte objekt:**
- "Lise leser **en bok**." → Lise leser hva? = en bok (DO)
- "Han kjøpte **en bil**." → Han kjøpte hva? = en bil (DO)
- "Jeg så **henne**." → Jeg så hvem? = henne (DO)

**Indirekte objekt (IO):**
Den som mottar noe. Spør: "Til hvem/for hvem?"

**Eksempler på indirekte objekt:**
- "Hun ga **ham** en gave." → Ga til hvem? = ham (IO)
- "Læreren fortalte **oss** en historie." → Fortalte til hvem? = oss (IO)

**Rekkefølge:**
Normalt kommer IO før DO:
- "Han ga [henne IO] [blomster DO]."

**Ikke alle setninger har objekt:**
- "Solen skinner." (ingen objekt)
- "Hun sover." (ingen objekt)

**Transitive verb** krever objekt: "spise", "se", "lese"
**Intransitive verb** tar ikke objekt: "sove", "le", "gå"`,
    },
    {
      id: 'norsk-vg1-15-1-def-4',
      type: 'definition',
      title: 'Adverbial (A)',
      content: `**Adverbialet forteller om omstendighetene.**

Adverbial gir tilleggsinformasjon om tid, sted, måte, årsak osv.

**Typer adverbial:**

**Tidsadverbial:**
Spør: "Når?"
- "**I går** reiste vi til Bergen."
- "Han kommer **snart**."
- "**Hver dag** trener hun."

**Stedsadverbial:**
Spør: "Hvor?"
- "Boken ligger **på bordet**."
- "De bor **i Oslo**."
- "**Her** er det kaldt."

**Måtesadverbial:**
Spør: "Hvordan?"
- "Hun sang **vakkert**."
- "De arbeidet **hardt**."
- "Han gikk **sakte**."

**Årsaksadverbial:**
Spør: "Hvorfor?"
- "**På grunn av regnet** ble kampen avlyst."
- "De feiret **fordi de vant**."

**Setningsadverbial:**
Modifiserer hele setningen:
- "**Dessverre** kan jeg ikke komme."
- "**Kanskje** har han rett."
- "Hun er **nok** syk."

**En setning kan ha flere adverbialer.**`,
    },
    {
      id: 'norsk-vg1-15-1-def-5',
      type: 'definition',
      title: 'Predikativ (P)',
      content: `**Predikativet beskriver subjektet eller objektet.**

**Subjektspredikativ (SP):**
Beskriver subjektet via kopulaverb (være, bli, virke, synes).

Spør: "Hva er/blir subjektet?"

**Eksempler:**
- "Hun er **lærer**." → Hun = lærer (SP)
- "Maten smaker **godt**." → Maten = godt (SP)
- "Han ble **sur**." → Han = sur (SP)
- "De virker **trøtte**." → De = trøtte (SP)

**Objektspredikativ (OP):**
Beskriver objektet.

**Eksempler:**
- "De kalte ham **feig**." → ham = feig (OP)
- "Vi malte veggen **blå**." → veggen = blå (OP)
- "Hun gjør meg **glad**." → meg = glad (OP)

**Forskjell på predikativ og adverbial:**
- "Han er **rask**." → rask beskriver HAN (predikativ)
- "Han løper **raskt**." → raskt beskriver LØPINGEN (adverbial)

**Kopulaverb:**
Verb som forbinder subjekt og predikativ:
være, bli, virke, synes, føles, lukter, smaker, høres...`,
    },
    {
      id: 'norsk-vg1-15-1-example-1',
      type: 'example',
      title: 'Eksempel: Fullstendig setningsanalyse',
      problem: 'Analyser setningen: "I går ga læreren elevene en vanskelig oppgave på skolen."',
      solution: `**Steg for steg:**

**1. Finn verbalet (V):**
"Hva skjer?" → **ga** (V)

**2. Finn subjektet (S):**
"Hvem ga?" → **læreren** (S)

**3. Finn direkte objekt (DO):**
"Hva ga læreren?" → **en vanskelig oppgave** (DO)

**4. Finn indirekte objekt (IO):**
"Til hvem ga læreren?" → **elevene** (IO)

**5. Finn adverbialene (A):**
"Når?" → **I går** (tidsadverbial)
"Hvor?" → **på skolen** (stedsadverbial)

**Fullstendig analyse:**
| I går | ga | læreren | elevene | en vanskelig oppgave | på skolen |
|-------|-----|---------|---------|---------------------|-----------|
| A (tid) | V | S | IO | DO | A (sted) |

**Setningsskjema:**
Forfelt | V | S | IO | DO | Adverbial
I går | ga | læreren | elevene | en vanskelig oppgave | på skolen`,
    },
    {
      id: 'norsk-vg1-15-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Finn verbalet i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Katten sover på sofaen."',
            solution: 'sover',
          },
          {
            label: 'b',
            task: '"Hun har alltid elsket musikk."',
            solution: 'har elsket',
          },
          {
            label: 'c',
            task: '"Boken ble skrevet av en berømt forfatter."',
            solution: 'ble skrevet',
          },
          {
            label: 'd',
            task: '"De skulle ha kommet tidligere."',
            solution: 'skulle ha kommet',
          },
        ],
        solution: 'Verbalet kan bestå av ett eller flere ord (hjelpeverb + hovedverb).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn subjekt og eventuelt objekt i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Gutten spiste et eple."',
            solution: 'Subjekt: Gutten. Direkte objekt: et eple.',
          },
          {
            label: 'b',
            task: '"Det regner."',
            solution: 'Subjekt: Det (formelt subjekt). Ingen objekt.',
          },
          {
            label: 'c',
            task: '"Moren ga barnet en is."',
            solution: 'Subjekt: Moren. Indirekte objekt: barnet. Direkte objekt: en is.',
          },
          {
            label: 'd',
            task: '"Solen skinner."',
            solution: 'Subjekt: Solen. Ingen objekt.',
          },
        ],
        hints: ['Spør "hvem/hva + verbalet" for å finne subjekt', 'Spør "hvem/hva + verbalet + subjektet" for objekt'],
        solution: 'Alle setninger har subjekt, men ikke alle har objekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identifiser adverbialer og bestem type (tid, sted, måte):',
        subTasks: [
          {
            label: 'a',
            task: '"I morgen skal vi reise til Paris."',
            solution: 'I morgen = tidsadverbial. Til Paris = stedsadverbial.',
          },
          {
            label: 'b',
            task: '"Hun løp fort gjennom skogen."',
            solution: 'Fort = måtesadverbial. Gjennom skogen = stedsadverbial.',
          },
          {
            label: 'c',
            task: '"Dessverre kan jeg ikke komme i kveld."',
            solution: 'Dessverre = setningsadverbial. I kveld = tidsadverbial.',
          },
        ],
        hints: ['Spør når, hvor, hvordan', 'En setning kan ha flere adverbialer'],
        solution: 'Adverbialer gir tilleggsinformasjon om tid, sted, måte og annet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn predikativet og avgjør om det er subjekts- eller objektspredikativ:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun er lege."',
            solution: 'lege = subjektspredikativ (beskriver subjektet "hun")',
          },
          {
            label: 'b',
            task: '"Maten smaker deilig."',
            solution: 'deilig = subjektspredikativ (beskriver subjektet "maten")',
          },
          {
            label: 'c',
            task: '"De malte huset rødt."',
            solution: 'rødt = objektspredikativ (beskriver objektet "huset")',
          },
          {
            label: 'd',
            task: '"Nyheten gjorde ham trist."',
            solution: 'trist = objektspredikativ (beskriver objektet "ham")',
          },
        ],
        solution: 'Predikativet beskriver enten subjektet (SP) eller objektet (OP).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjør fullstendig setningsanalyse av disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Læreren forklarte elevene grammatikken grundig i går."',
            solution: 'Læreren (S) forklarte (V) elevene (IO) grammatikken (DO) grundig (A-måte) i går (A-tid).',
          },
          {
            label: 'b',
            task: '"Den gamle mannen satt stille på benken hele dagen."',
            solution: 'Den gamle mannen (S) satt (V) stille (A-måte) på benken (A-sted) hele dagen (A-tid).',
          },
          {
            label: 'c',
            task: '"Regjeringen ga kommunene mer penger i statsbudsjettet."',
            solution: 'Regjeringen (S) ga (V) kommunene (IO) mer penger (DO) i statsbudsjettet (A-sted/kontekst).',
          },
        ],
        hints: ['Start med verbalet', 'Gå systematisk gjennom ledd for ledd'],
        solution: 'Fullstendig setningsanalyse identifiserer alle leddene og deres funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.2: Tekstbinding
// ============================================================================

export const CHAPTER_NORSK_VG1_15_2: TextbookChapter = {
  id: 'norsk-vg1-15-2',
  courseId: 'norsk-vg1',
  chapterNumber: '15.2',
  title: 'Tekstbinding',
  description: 'Lær hvordan tekster henger sammen gjennom ulike bindeteknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke grammatisk kunnskap til å skape sammenheng i tekst',
    'vurdere og forbedre tekstbinding i egen og andres tekst',
  ],
  content: [
    {
      id: 'norsk-vg1-15-2-intro',
      type: 'text',
      content: `## Tekstbinding - å skape sammenheng

En tekst er mer enn en samling setninger. For at teksten skal fungere godt, må setningene henge sammen på en logisk og tydelig måte. Dette kalles tekstbinding eller kohesjon.

**Hva er tekstbinding?**
Tekstbinding er teknikkene vi bruker for å skape sammenheng mellom setninger og avsnitt.

**Hvorfor er tekstbinding viktig?**
- Gjør teksten lettere å lese
- Viser hvordan ideer henger sammen
- Hjelper leseren følge tankegangen
- Gir teksten flyt
- Viser at du behersker språket

**Hovedtyper tekstbinding:**
1. **Konjunksjoner og subjunksjoner** - bindeord
2. **Referentbinding** - å vise tilbake/fremover
3. **Tematisk binding** - å holde fokus
4. **Leksikalsk binding** - ord som henger sammen

**God tekstbinding = god tekst. Svak tekstbinding = forvirrende tekst.**`,
    },
    {
      id: 'norsk-vg1-15-2-def-1',
      type: 'definition',
      title: 'Konjunksjoner',
      content: `**Konjunksjoner binder sammen likeverdige setningsledd.**

Konjunksjoner (sideordnende bindeord) forbinder ord, fraser eller setninger som er på samme nivå.

**Vanlige konjunksjoner og deres funksjon:**

**Additive (legger til):**
- **og**: "Hun leste og skrev."
- **både...og**: "Både Per og Kari kom."
- **dessuten**: "Han er smart. Dessuten er han snill."
- **også**: "Jeg kommer. Per kommer også."

**Adversative (motsetning):**
- **men**: "Han er ung, men erfaren."
- **ellers**: "Skynd deg, ellers kommer vi for sent."
- **likevel**: "Det regnet. Likevel gikk vi ut."
- **derimot**: "Hun er utadvendt. Han er derimot introvert."

**Alternative:**
- **eller**: "Vil du ha te eller kaffe?"
- **enten...eller**: "Enten vinner vi, eller så taper vi."

**Kausale (årsak):**
- **for**: "Vi ble hjemme, for det regnet."

**Husk:** Konjunksjoner påvirker ikke ordstillingen i setningen.`,
    },
    {
      id: 'norsk-vg1-15-2-def-2',
      type: 'definition',
      title: 'Subjunksjoner',
      content: `**Subjunksjoner innleder leddsetninger.**

Subjunksjoner (underordnende bindeord) innleder setninger som er underordnet hovedsetningen.

**Vanlige subjunksjoner:**

**Tid:**
- **da**: "Da jeg kom hjem, var han der."
- **når**: "Når det regner, blir hun våt."
- **mens**: "Jeg leste mens han sov."
- **etter at**: "Etter at hun dro, ble det stille."
- **før**: "Før du går, må du rydde."

**Årsak:**
- **fordi**: "Jeg gråt fordi jeg var trist."
- **siden**: "Siden du spør, skal jeg svare."
- **ettersom**: "Ettersom det regner, tar vi buss."

**Betingelse:**
- **hvis/dersom**: "Hvis du kommer, blir jeg glad."
- **med mindre**: "Med mindre du slutter, blir det bråk."

**Innrømmelse:**
- **selv om**: "Selv om han var syk, kom han."
- **til tross for at**: "Til tross for at det regnet..."

**Hensikt:**
- **for at**: "Jeg trener for at jeg skal bli sterk."
- **slik at**: "Snakk høyere slik at alle hører."

**At-setninger:**
- **at**: "Jeg vet at du har rett."`,
    },
    {
      id: 'norsk-vg1-15-2-def-3',
      type: 'definition',
      title: 'Referentbinding',
      content: `**Referentbinding viser til noe som er nevnt før eller kommer etterpå.**

**Pronomen:**
Den vanligste formen for referentbinding.

"**Per** kom sent. **Han** hadde sovet."
→ "Han" viser tilbake til "Per"

**Typer pronomenbinding:**
- Personlige: han, hun, de, den, det
- Demonstrative: dette, disse, den der
- Possessive: hans, hennes, sin, sitt

**Synonymer og overbegreper:**
"**Katten** løp over veien. **Dyret** var redd."
→ "Dyret" er overbegrep for "katten"

**Parafrasering:**
"**Oslo** vokser. **Hovedstaden** trenger flere boliger."
→ "Hovedstaden" er alternativ betegnelse

**Ellipse (utelatelse):**
"Per liker fotball. Kari [liker] tennis."
→ Verbet er underforstått

**Feil å unngå:**
- Uklar referanse: "Per og Ole kom. Han var sur." (Hvem?)
- For lang avstand: Pronomen langt fra det det viser til
- Inkonsekvent: Bytte mellom "du" og "man"`,
    },
    {
      id: 'norsk-vg1-15-2-def-4',
      type: 'definition',
      title: 'Tematisk binding',
      content: `**Tematisk binding handler om å holde fokus i teksten.**

**Tema og rema:**
- **Tema**: Det setningen handler om (ofte kjent informasjon)
- **Rema**: Ny informasjon om temaet

"**Per** [tema] kom i går [rema]."
"**Han** [tema] hadde vært på reise [rema]."

**Tematisk progresjon:**
Hvordan teksten utvikler seg fra kjent til ny informasjon.

**Type 1: Konstant tema**
Samme tema gjentas:
- "Hunden løp. Den bjeffet. Den var sulten."
→ Passer for å holde fokus på én ting

**Type 2: Lineær progresjon**
Ny informasjon blir tema i neste setning:
- "Per møtte en mann. Mannen ga ham en bok. Boken handlet om historie."
→ Passer for fortellinger og forklaringer

**Type 3: Overordnet tema**
Flere undertemaer under ett hovedtema:
- "Byen har mye å by på. Museer er gratis. Parkene er vakre. Restaurantene er gode."
→ Passer for beskrivelser og opplistinger

**Tips:** Vær bevisst på hva som er tema i setningene dine. Det hjelper leseren å følge med.`,
    },
    {
      id: 'norsk-vg1-15-2-def-5',
      type: 'definition',
      title: 'Leksikalsk binding',
      content: `**Leksikalsk binding bruker ordvalg for å skape sammenheng.**

**Gjentagelse:**
Samme ord gjentas:
- "Miljøet er truet. Miljøet trenger beskyttelse."
→ Enkel og tydelig, men kan bli monotont

**Synonymer:**
Ord med lignende betydning:
- "Bilen er gammel. Kjøretøyet trenger reparasjon."
→ Variasjon og flyt

**Antonymer:**
Motsetninger:
- "Noen er rike, andre er fattige."
→ Kontrasterer og fremhever

**Kollokasjon:**
Ord som ofte opptrer sammen:
- "Doktor - pasient - sykehus - behandling"
- "Skole - elev - lærer - undervisning"
→ Skaper et semantisk felt

**Ordkjeder:**
Serier av relaterte ord gjennom teksten:
"Klimaet endrer seg. Temperaturen stiger. Isen smelter. Havet stiger."
→ Alle ordene hører til samme tema

**Tips:** Varier ordbruken for å unngå gjentagelser, men behold klarhet. For faglige tekster kan gjentagelse være klargjørende.`,
    },
    {
      id: 'norsk-vg1-15-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av tekstbinding',
      problem: 'Analyser tekstbindingen i dette avsnittet:\n\n"Klimaendringene er vår tids største utfordring. De truer livet på jorda. Derfor må vi handle nå. Hvis vi ikke reduserer utslippene, vil konsekvensene bli katastrofale."',
      solution: `**Analyse av tekstbinding:**

**Setning 1 → 2:**
- **Referentbinding:** "De" viser tilbake til "Klimaendringene"
- **Leksikalsk:** "truer livet" relaterer til "utfordring"

**Setning 2 → 3:**
- **Konjunksjon:** "Derfor" viser årsak-virkning
- **Tematisk:** Konsekvensen av trusselen → handling

**Setning 3 → 4:**
- **Subjunksjon:** "Hvis" innleder betingelse
- **Leksikalsk:** "handle" og "reduserer utslippene" hører sammen tematisk

**Tematisk progresjon:**
Teksten holder fokus på klima hele veien:
klimaendringer → trussel → handling → utslipp → konsekvenser

**Vurdering:**
Avsnittet har god tekstbinding:
- Klare logiske forbindelser
- Tydelige referanser
- Konsekvent tema
- Variasjon i bindemetoder`,
    },
    {
      id: 'norsk-vg1-15-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser konjunksjoner og subjunksjoner og bestem typen:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun kom sent fordi bussen var forsinket."',
            solution: 'fordi = subjunksjon (årsak)',
          },
          {
            label: 'b',
            task: '"Jeg liker kaffe, men foretrekker te."',
            solution: 'men = konjunksjon (motsetning/adversativ)',
          },
          {
            label: 'c',
            task: '"Hvis du øver, blir du bedre."',
            solution: 'Hvis = subjunksjon (betingelse)',
          },
          {
            label: 'd',
            task: '"Han leste både avisen og boken."',
            solution: 'både...og = konjunksjon (additiv)',
          },
        ],
        solution: 'Konjunksjoner binder likeverdige ledd, subjunksjoner innleder leddsetninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn referansene og avgjør hva de viser til:',
        subTasks: [
          {
            label: 'a',
            task: '"Lise kjøpte en bok. Den var spennende."',
            solution: '"Den" viser til "en bok".',
          },
          {
            label: 'b',
            task: '"Per og Ole spilte fotball. Etterpå var de slitne."',
            solution: '"de" viser til "Per og Ole".',
          },
          {
            label: 'c',
            task: '"Regjeringen la fram budsjettet. Dette skapte debatt."',
            solution: '"Dette" viser til at regjeringen la fram budsjettet (hele setningen).',
          },
        ],
        hints: ['Se på pronomenene', 'Hva kommer rett før?'],
        solution: 'Referentbinding bruker pronomen og demonstrativer for å vise tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forbedre tekstbindingen i dette avsnittet:',
        subTasks: [
          {
            label: 'a',
            task: 'Les og vurder: "Skolen vår er gammel. Skolen har dårlige vinduer. Skolen trenger renovering. Kommunen har ikke penger."',
            solution: 'Svak tekstbinding: Monoton gjentagelse av "Skolen", brå overgang til "Kommunen".',
          },
          {
            label: 'b',
            task: 'Skriv avsnittet på nytt med bedre tekstbinding.',
            solution: 'Eksempel: "Skolen vår er gammel og har dårlige vinduer. Den trenger derfor renovering. Dessverre har kommunen ikke penger til dette."',
          },
        ],
        hints: ['Bruk pronomen i stedet for gjentagelse', 'Legg til bindeord som viser sammenheng'],
        solution: 'God tekstbinding krever variasjon og tydelige logiske forbindelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sett inn passende bindeord:',
        subTasks: [
          {
            label: 'a',
            task: '"Det regnet kraftig. ___ ble kampen avlyst."',
            solution: 'Derfor / Følgelig / Dermed',
          },
          {
            label: 'b',
            task: '"Hun trente hardt, ___ hun tapte kampen."',
            solution: 'men / likevel',
          },
          {
            label: 'c',
            task: '"___ du studerer, vil du bestå eksamen."',
            solution: 'Hvis / Dersom',
          },
          {
            label: 'd',
            task: '"Han var sulten. ___ spiste han en stor middag."',
            solution: 'Derfor / Så',
          },
        ],
        hints: ['Tenk på logisk sammenheng', 'Prøv ulike alternativer'],
        solution: 'Riktig bindeord viser den logiske sammenhengen mellom setningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et avsnitt (5-6 setninger) om et selvvalgt tema. Bruk minst tre ulike typer tekstbinding.',
        hints: ['Bruk konjunksjoner/subjunksjoner', 'Bruk pronomen for referanse', 'Hold tematisk fokus', 'Varier ordbruken'],
        solution: 'Avsnittet bør vise bevisst bruk av ulike bindemetoder som skaper god sammenheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16.1: Rettskriving bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_16_1: TextbookChapter = {
  id: 'norsk-vg1-16-1',
  courseId: 'norsk-vg1',
  chapterNumber: '16.1',
  title: 'Rettskriving bokmål',
  description: 'Lær regler for rettskriving på bokmål med fokus på vanlige feil.',
  estimatedMinutes: 50,
  competenceGoals: [
    'mestre rettskriving og formverk på bokmål',
    'bruke grammatisk kunnskap i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-16-1-intro',
      type: 'text',
      content: `## Rettskriving på bokmål

Rettskriving handler om å skrive ordene riktig i henhold til gjeldende normer. God rettskriving gjør teksten lettere å lese og gir et profesjonelt inntrykk.

**Hvorfor rettskriving er viktig:**
- Gjør teksten lettere å forstå
- Viser respekt for leseren
- Gir godt inntrykk på eksamen og jobbsøknader
- Er del av vurderingskriteriene i norsk

**Bokmålets valgfrihet:**
Bokmål har mange valgfrie former. Du kan velge mellom ulike skrivemåter, men du bør være konsekvent i samme tekst.

**Hjelpemidler:**
- Ordbøker (Bokmålsordboka - ordbok.uib.no)
- Rettskrivningsprogrammer
- Språkrådets nettsider

**I dette kapittelet lærer du:**
- Valgfrie former i bokmål
- De vanligste rettskrivingsfeilene
- Tegnsettingsregler
- Hvordan bli en bedre rettskriver`,
    },
    {
      id: 'norsk-vg1-16-1-def-1',
      type: 'definition',
      title: 'Valgfrie former i bokmål',
      content: `**Bokmål har stor valgfrihet. Her er de viktigste:**

**Substantiv - bestemt form flertall:**
- bøkene/bøker, hestene/hester, visene/viser
- -ene eller -er (mange hunkjønnsord og svake hankjønnsord)

**Hunkjønn - valgfritt:**
- ei/en bok, ei/en jente, ei/en dør
- Du kan velge om du bruker hunkjønn eller ikke
- Hvis du bruker hunkjønn: boka, jenta, døra
- Hvis du bruker hankjønn: boken, jenten, døren

**Fortid av verb (preteritum):**
- kastet/kasta, hoppet/hoppa, snakket/snakka
- -et eller -a for svake verb

**Perfektum partisipp:**
- har kastet/kasta, har snakket/snakka

**Infinitiv:**
- å kaste/å kasta, å være/å være
- De fleste holder seg til -e

**Viktig regel:**
**Vær konsekvent i samme tekst!**
Velg EN stil og hold deg til den:
- Enten: boka, jenta, kasta, hoppa (a-endelser)
- Eller: boken, jenten, kastet, hoppet (konservativt)

**Tips:** Finn din stil og vær konsekvent.`,
    },
    {
      id: 'norsk-vg1-16-1-def-2',
      type: 'definition',
      title: 'Vanlige rettskrivingsfeil',
      content: `**De vanligste feilene på bokmål:**

**1. Feil i dobbeltkonsonant:**
- ✗ takk → ✓ tak (verb: å ta)
- ✗ har kommet → ✓ har kommet (riktig)
- ✗ han sat → ✓ han satt
- Regel: Kort vokal = dobbelt konsonant

**2. Sammenskriving vs. særskriving:**
- ✗ is krem → ✓ iskrem
- ✗ fotball kamp → ✓ fotballkamp
- ✗ idag → ✓ i dag
- ✗ tilslutt → ✓ til slutt
- Sammensatte substantiv = ett ord
- Adverbiale uttrykk = ofte to ord

**3. Da/når-feil:**
- ✗ "Når jeg var liten..." → ✓ "Da jeg var liten..."
- Da = fortid, engangshendelase
- Når = nåtid/fremtid, gjentakelse

**4. De/dem:**
- De = subjekt ("De kom")
- Dem = objekt ("Jeg så dem")
- Test: Bytt ut med "vi/oss"

**5. Sin/si/sitt vs. hans/hennes:**
- "Per vasket bilen sin" (Per sin bil)
- "Per vasket bilen hans" (en annens bil)

**6. Og/å:**
- og = konjunksjon (eple og pære)
- å = infinitivsmerke (å gå)`,
    },
    {
      id: 'norsk-vg1-16-1-def-3',
      type: 'definition',
      title: 'Flere vanlige feil',
      content: `**Flere feil å unngå:**

**7. Ikke/ikkje:**
På bokmål: alltid "ikke" (ikkje er nynorsk)

**8. Hvilket/hvilken:**
- Hvilket = intetkjønn ("Hvilket hus?")
- Hvilken = hankjønn/hunkjønn ("Hvilken bok?")

**9. Feil i verb:**
- ✗ jeg synger → ✓ jeg synger
- ✗ jeg skriver → ✓ jeg skriver
- Husk samsvar: jeg er, han er, vi er

**10. Stor/liten bokstav:**
- Små: mandag, januar, norsk (språk), kristendom
- Store: Per, Oslo, Stortinget, Gud (gudsnavn)

**11. Apostrof:**
- ✗ Per's bil → ✓ Pers bil
- Norsk bruker ikke apostrof i genitiv
- Unntak: Når navnet slutter på s: "Hans' bil" eller "til Hans"

**12. Preposisjoner:**
- interessert i (ikke "interessert av")
- forskjellig fra (ikke "forskjellig enn")
- gift med (ikke "gift til")

**13. Det/de:**
- Det = entall, intetkjønn ("Det er fint")
- De = flertall ("De er fine")

**Bruk ordboka når du er usikker!**`,
    },
    {
      id: 'norsk-vg1-16-1-def-4',
      type: 'definition',
      title: 'Tegnsetting',
      content: `**Regler for tegnsetting på bokmål:**

**Komma:**
Komma brukes:
- Mellom helsetninger med konjunksjon: "Han kom, og hun gikk."
- Etter leddsetning først: "Da han kom, gikk hun."
- Ved innskudd: "Boken, som var rød, lå der."
- Ved tiltale: "Per, kom hit!"
- I oppramsinger: "epler, pærer og bananer"

Komma brukes IKKE:
- Mellom subjekt og verbal: ✗ "Per, kom."
- Før "at" (vanligvis): "Jeg vet at du kommer."

**Punktum:**
- Etter fullstendige setninger
- I forkortelser: f.eks., bl.a., osv.

**Kolon:**
- Før oppramsingsledd: "Han kjøpte: epler, pærer og melk."
- Før forklaring: "Resultatet var klart: vi tapte."
- Ved klokken: kl. 14:30

**Semikolon:**
- Mellom nært beslektede setninger
- "Hun er student; han er lærer."
- Sjeldent brukt

**Anførselstegn:**
- Ved sitater: Hun sa: "Jeg kommer."
- «Gåseøyne» eller "engelske"

**Tankestrek:**
- Ved innskudd: Boken – den røde – var fin.
- Lengre enn bindestrek (–)`,
    },
    {
      id: 'norsk-vg1-16-1-example-1',
      type: 'example',
      title: 'Eksempel: Retting av tekst',
      problem: 'Finn og rett feilene i denne teksten:\n\n"Når jeg var liten likte jeg og lese bøker. Per\'s favoritt var detektiv historier, og dem var spennenede. Idag leser jeg fremdeles mye men det er vanskelig og finne tid."',
      solution: `**Feil og rettinger:**

1. "Når jeg var liten" → **"Da jeg var liten"**
   - "Da" for fortid, engangshendelase

2. "og lese" → **"å lese"**
   - Infinitivsmerke, ikke konjunksjon

3. "Per's" → **"Pers"**
   - Ingen apostrof i norsk genitiv

4. "detektiv historier" → **"detektivhistorier"**
   - Sammenskriving

5. "dem var" → **"de var"**
   - "De" som subjekt

6. "spennenede" → **"spennende"**
   - Skrivefeil

7. "Idag" → **"I dag"**
   - To ord

8. "og finne" → **"å finne"**
   - Infinitivsmerke

**Rettet tekst:**
"Da jeg var liten, likte jeg å lese bøker. Pers favoritt var detektivhistorier, og de var spennende. I dag leser jeg fremdeles mye, men det er vanskelig å finne tid."`,
    },
    {
      id: 'norsk-vg1-16-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Velg riktig form:',
        subTasks: [
          {
            label: 'a',
            task: '"(Da/Når) jeg var ti år, flyttet vi til Bergen."',
            solution: 'Da - fortid, engangshendelse',
          },
          {
            label: 'b',
            task: '"Jeg liker (og/å) svømme."',
            solution: 'å - infinitivsmerke',
          },
          {
            label: 'c',
            task: '"(De/Dem) kom tidlig."',
            solution: 'De - subjekt',
          },
          {
            label: 'd',
            task: '"Jeg så (de/dem) i går."',
            solution: 'dem - objekt',
          },
        ],
        solution: 'Riktig ordvalg avhenger av grammatisk funksjon og kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rett opp særskrivingsfeilene:',
        subTasks: [
          {
            label: 'a',
            task: '"Fotball kampen ble avlyst."',
            solution: 'Fotballkampen - sammensatt ord',
          },
          {
            label: 'b',
            task: '"Jeg kjøpte en is krem."',
            solution: 'iskrem - sammensatt ord',
          },
          {
            label: 'c',
            task: '"Skole sekken var tung."',
            solution: 'Skolesekken - sammensatt ord',
          },
          {
            label: 'd',
            task: '"Vi møttes iforveien."',
            solution: 'i forveien - to ord',
          },
        ],
        hints: ['Sammensatte substantiv skrives i ett ord', 'Adverb og preposisjonsuttrykk kan være to ord'],
        solution: 'Særskriving av sammensatte ord er en vanlig feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sett inn riktig tegn (komma, punktum, kolon):',
        subTasks: [
          {
            label: 'a',
            task: '"Han kom _ og hun gikk"',
            solution: '"Han kom, og hun gikk." - komma før og når to helsetninger',
          },
          {
            label: 'b',
            task: '"Da han kom _ gikk hun"',
            solution: '"Da han kom, gikk hun." - komma etter leddsetning først',
          },
          {
            label: 'c',
            task: '"Vi trenger _ melk brød og ost"',
            solution: '"Vi trenger: melk, brød og ost." - kolon før oppramsing',
          },
        ],
        hints: ['Komma mellom helsetninger med konjunksjon', 'Komma etter leddsetning først'],
        solution: 'Tegnsetting følger grammatiske regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn og rett feilene i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Ole\'s hund løpte over veien."',
            solution: '"Oles hund løp over veien." (apostrof + preteritum av løpe)',
          },
          {
            label: 'b',
            task: '"Når jeg kommer hjem, skal jeg og spise."',
            solution: '"Når jeg kommer hjem, skal jeg spise." (å → utelates etter hjelpeverb)',
          },
          {
            label: 'c',
            task: '"Dem likte boken som var spennenede."',
            solution: '"De likte boken som var spennende." (de som subjekt + skrivefeil)',
          },
        ],
        hints: ['Se etter de vanligste feilene', 'Bruk ordboka hvis usikker'],
        solution: 'Å finne egne feil krever øvelse og oppmerksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et avsnitt (100-150 ord) om et selvvalgt tema. Fokuser på riktig rettskriving og tegnsetting.',
        hints: ['Les gjennom teksten flere ganger', 'Sjekk de vanligste feilene', 'Bruk ordbok ved usikkerhet', 'Pass på særskriving og komma'],
        solution: 'Avsnittet bør vise god beherskelse av rettskriving og tegnsetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16.2: Rettskriving nynorsk
// ============================================================================

export const CHAPTER_NORSK_VG1_16_2: TextbookChapter = {
  id: 'norsk-vg1-16-2',
  courseId: 'norsk-vg1',
  chapterNumber: '16.2',
  title: 'Rettskriving nynorsk',
  description: 'Lær nynorskens særtrekk og unngå vanlige bokmålsfeil på nynorsk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'mestre rettskriving og formverk på nynorsk',
    'skrive tekster på nynorsk med god språkføring',
  ],
  content: [
    {
      id: 'norsk-vg1-16-2-intro',
      type: 'text',
      content: `## Nynorsk - et eget språk

Nynorsk er ikke "dårlig bokmål" eller bokmål med andre endelser. Det er et eget skriftspråk med sin egen grammatikk, sine egne ord og sin egen stil.

**Nynorskens bakgrunn:**
Ivar Aasen skapte landsmål (senere nynorsk) på 1800-tallet basert på norske dialekter. Målet var et skriftspråk som lå nærmere folkemålet enn dansk-norsk.

**Viktig å forstå:**
- Nynorsk har andre ord enn bokmål
- Nynorsk har annen grammatikk
- Nynorsk er ikke "bokmål med a-endelser"
- God nynorsk krever å tenke nynorsk

**I dette kapittelet lærer du:**
- Nynorskens viktigste særtrekk
- De vanligste bokmålsfeilene på nynorsk
- Praktiske skriveråd for nynorsk
- Hvordan bygge nynorskkompetanse

**Tips:** Bruk Nynorskordboka (ordbok.uib.no) aktivt!`,
    },
    {
      id: 'norsk-vg1-16-2-def-1',
      type: 'definition',
      title: 'Nynorskens grammatiske særtrekk',
      content: `**Viktige forskjeller fra bokmål:**

**1. Obligatorisk hunkjønn:**
Nynorsk skiller alltid mellom hankjønn, hunkjønn og intetkjønn.
- ei bok - boka - bøker - bøkene
- ein gut - guten - gutar - gutane
- eit hus - huset - hus - husa

**2. Verbbøyning:**
Infinitiv: å kaste, å lese, å bu
Presens: kastar, les, bur
Preteritum: kasta, las, budde

**Sterke verb:**
- å skrive - skriv - skreiv - har skrive
- å finne - finn - fann - har funne
- å ta - tek - tok - har teke

**3. A-infinitiv eller e-infinitiv:**
Begge er tillatt: å kasta/å kaste
Velg én form og vær konsekvent.

**4. Flertallsendelser:**
- Hankjønn: -ar (gutar, bilar)
- Hunkjønn: -er (jenter, bøker)
- Intetkjønn: ofte ingen ending (hus, barn)

**5. Adjektivbøyning:**
- ein fin bil - eit fint hus - fine bilar
- Intetkjønn entall: -t
- Flertall og bestemt: -e`,
    },
    {
      id: 'norsk-vg1-16-2-def-2',
      type: 'definition',
      title: 'Ord som er annerledes på nynorsk',
      content: `**Mange ord er helt forskjellige på nynorsk og bokmål:**

**Vanlige ord:**
| Bokmål | Nynorsk |
|--------|---------|
| ikke | ikkje |
| meg, deg, seg | meg, deg, seg |
| noe, noen | noko, nokon |
| mye | mykje |
| bare | berre |
| hvilken | kva for ein |
| hver | kvar |
| også | òg / også |
| etter | etter |
| mellom | mellom |
| gjøre | gjere |
| spørre | spørje |
| fortelle | fortelje |

**Spørreord:**
| Bokmål | Nynorsk |
|--------|---------|
| hva | kva |
| hvem | kven |
| hvor | kvar |
| hvordan | korleis |
| hvorfor | kvifor |

**Pronomen:**
| Bokmål | Nynorsk |
|--------|---------|
| hun | ho |
| de (subjekt) | dei |
| dem | dei |
| vi | vi |

**Husk:** Disse ordene er ikke valgfrie - de MÅ brukes på nynorsk.`,
    },
    {
      id: 'norsk-vg1-16-2-def-3',
      type: 'definition',
      title: 'Vanlige bokmålsfeil på nynorsk',
      content: `**Feil som mange gjør:**

**1. Pronomen:**
- ✗ "ikke" → ✓ "ikkje"
- ✗ "hun" → ✓ "ho"
- ✗ "noe" → ✓ "noko"
- ✗ "noen" → ✓ "nokon"
- ✗ "mye" → ✓ "mykje"

**2. Spørreord:**
- ✗ "hva" → ✓ "kva"
- ✗ "hvem" → ✓ "kven"
- ✗ "hvor" → ✓ "kvar"
- ✗ "hvordan" → ✓ "korleis"
- ✗ "hvorfor" → ✓ "kvifor"

**3. Verbbøyning:**
- ✗ "han kommer" → ✓ "han kjem"
- ✗ "de gjør" → ✓ "dei gjer"
- ✗ "jeg vet" → ✓ "eg veit"
- ✗ "har gjort" → ✓ "har gjort/gjert"

**4. Substantivbøyning:**
- ✗ "bøkene" → ✓ "bøkene"
- ✗ "gutene" → ✓ "gutane"
- ✗ "husene" → ✓ "husa"

**5. Bokmålsord:**
- ✗ "derfor" → ✓ "difor"
- ✗ "bare" → ✓ "berre"
- ✗ "aldri" → ✓ "aldri" (lik)
- ✗ "sammen" → ✓ "saman"`,
    },
    {
      id: 'norsk-vg1-16-2-def-4',
      type: 'definition',
      title: 'Praktiske skriveråd for nynorsk',
      content: `**Slik skriver du god nynorsk:**

**1. Bruk nynorskordboka:**
Slå opp ord du er usikker på. Ordbok.uib.no har både bokmåls- og nynorskordbok.

**2. Les nynorsk:**
Jo mer du leser, jo bedre blir du. Les:
- NRK Nynorsk
- Dag og Tid (avis)
- Nynorske bøker
- Framtida.no

**3. Lær deg de vanligste ordene:**
Lag en liste over ord du ofte bruker, og lær dem på nynorsk.

**4. Tenk nynorsk - ikke oversett:**
Ikke skriv på bokmål og "oversett". Prøv å tenke direkte på nynorsk.

**5. Bruk dialekten din:**
Hvis du har en dialekt som ligger nær nynorsk, bruk det som støtte.

**6. Skriv mye:**
Øvelse gjør mester. Skriv dagbok, meldinger eller sosiale medier på nynorsk.

**7. Sjekk de vanligste feilene:**
Før du leverer, sjekk at du har:
- ikkje (ikke "ikke")
- kva, kven, kvar, korleis, kvifor
- ho (ikke "hun")
- noko, nokon, mykje

**8. Vær konsekvent:**
Velg former og hold deg til dem gjennom hele teksten.`,
    },
    {
      id: 'norsk-vg1-16-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra bokmål til nynorsk',
      problem: 'Oversett denne teksten til korrekt nynorsk:\n\n"Hun visste ikke hva hun skulle gjøre. Noen hadde fortalt henne at det var farlig, men hun ville gå dit allikevel. Hvorfor var det så vanskelig?"',
      solution: `**Steg for steg:**

**Ord som må endres:**
- Hun → Ho
- visste → visste/visste
- ikke → ikkje
- hva → kva
- skulle → skulle
- gjøre → gjere
- Noen → Nokon
- fortalt → fortalt/fortald
- henne → henne
- det var → det var
- ville → ville
- gå → gå
- dit → dit
- allikevel → likevel
- Hvorfor → Kvifor
- vanskelig → vanskeleg

**Nynorsk versjon:**
"Ho visste ikkje kva ho skulle gjere. Nokon hadde fortalt henne at det var farleg, men ho ville gå dit likevel. Kvifor var det så vanskeleg?"

**Merknader:**
- "allikevel" → "likevel" (vanlegare på nynorsk)
- "farlig/vanskelig" → "farleg/vanskeleg" (typisk nynorsk)
- Alle pronomen og spørjeord er endra`,
    },
    {
      id: 'norsk-vg1-16-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv om til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun vet ikke hva han gjør."',
            solution: '"Ho veit ikkje kva han gjer."',
          },
          {
            label: 'b',
            task: '"Hvorfor kommer de ikke?"',
            solution: '"Kvifor kjem dei ikkje?"',
          },
          {
            label: 'c',
            task: '"Noen har sagt noe."',
            solution: '"Nokon har sagt noko."',
          },
          {
            label: 'd',
            task: '"Hvor mye koster det?"',
            solution: '"Kva/Kor mykje kostar det?"',
          },
        ],
        solution: 'Nynorsk har egne ord for mange vanlige bokmålsord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bøy disse substantivene på nynorsk (ubest. ent. - best. ent. - ubest. fl. - best. fl.):',
        subTasks: [
          {
            label: 'a',
            task: 'gut (hankjønn)',
            solution: 'ein gut - guten - gutar - gutane',
          },
          {
            label: 'b',
            task: 'bok (hunkjønn)',
            solution: 'ei bok - boka - bøker - bøkene',
          },
          {
            label: 'c',
            task: 'hus (intetkjønn)',
            solution: 'eit hus - huset - hus - husa',
          },
          {
            label: 'd',
            task: 'jente (hunkjønn)',
            solution: 'ei jente - jenta - jenter - jentene',
          },
        ],
        hints: ['Hankjønn: -ar i flertall', 'Hunkjønn: -er i flertall', 'Intetkjønn: ofte uendra i flertall'],
        solution: 'Nynorsk har klare mønstre for substantivbøyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Bøy disse verbene på nynorsk (infinitiv - presens - preteritum - perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å kome (komme)',
            solution: 'å kome - kjem - kom - har kome',
          },
          {
            label: 'b',
            task: 'å skrive',
            solution: 'å skrive - skriv - skreiv - har skrive',
          },
          {
            label: 'c',
            task: 'å gjere (gjøre)',
            solution: 'å gjere - gjer - gjorde - har gjort',
          },
          {
            label: 'd',
            task: 'å vite (vite)',
            solution: 'å vite - veit - visste - har visst',
          },
        ],
        hints: ['Bruk nynorskordboka', 'Mange sterke verb har annen vokalveksling enn på bokmål'],
        solution: 'Verbbøyning på nynorsk følger bestemte mønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn og rett bokmålsfeilene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg vet ikke hva hun gjør."',
            solution: '"Eg veit ikkje kva ho gjer."',
          },
          {
            label: 'b',
            task: '"De kom ikke fordi det regnet mye."',
            solution: '"Dei kom ikkje fordi det regna mykje."',
          },
          {
            label: 'c',
            task: '"Hvorfor sa han ikke noe?"',
            solution: '"Kvifor sa han ikkje noko?"',
          },
        ],
        hints: ['Sjekk pronomen, spørreord og vanlige bokmålsord'],
        solution: 'Å finne bokmålsfeil krever at du kjenner nynorskens ordforråd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et kort avsnitt (100-150 ord) på nynorsk om en hobby eller interesse du har.',
        hints: ['Bruk nynorskordboka aktivt', 'Sjekk pronomen og spørreord', 'Les gjennom og se etter bokmålsfeil', 'Vær konsekvent i formvalg'],
        solution: 'Avsnittet bør vise korrekt nynorsk med riktige ordformer og bøyninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.1: Flerkulturell litteratur
// ============================================================================

export const CHAPTER_NORSK_VG1_17_1: TextbookChapter = {
  id: 'norsk-vg1-17-1',
  courseId: 'norsk-vg1',
  chapterNumber: '17.1',
  title: 'Flerkulturell litteratur',
  description: 'Utforsk norsk litteratur av forfattere med innvandrerbakgrunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster som utforsker kulturmøter og identitet',
    'reflektere over hvordan litteratur speiler samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg1-17-1-intro',
      type: 'text',
      content: `## Flerkulturell litteratur i Norge

Norge har blitt et flerkulturelt samfunn, og dette speiles i litteraturen. Forfattere med innvandrerbakgrunn eller flerkulturell erfaring beriker norsk litteratur med nye perspektiver, temaer og stemmer.

**Hva er flerkulturell litteratur?**
Litteratur som utforsker kulturmøter, migrasjon, identitet mellom kulturer, og erfaringen av å tilhøre flere steder.

**Hvorfor lese flerkulturell litteratur?**
- Gir innsikt i andre erfaringer
- Utvider forståelsen av hva "norsk" er
- Utfordrer stereotypier
- Speiler et mangfoldig samfunn
- Er del av LK20s fokus på kulturforståelse

**Viktige norske forfattere:**
- Maria Navarro Skaranger
- Zeshan Shakar
- Sumaya Jirde Ali
- Gulraiz Sharif
- Hassan Khemiri (svensk, men lest i Norge)

**I dette kapittelet utforsker vi:**
- Identitet mellom kulturer
- Tilhørighet og utenforskap
- Språk og identitet
- Representasjon i litteratur`,
    },
    {
      id: 'norsk-vg1-17-1-def-1',
      type: 'definition',
      title: 'Identitet mellom kulturer',
      content: `**Å tilhøre flere steder**

Et gjennomgående tema i flerkulturell litteratur er opplevelsen av å stå mellom kulturer - å føle tilhørighet til flere steder, men kanskje ikke fullt ut til noen.

**Nøkkelbegreper:**

**Hybrididentitet:**
En identitet som kombinerer elementer fra flere kulturer. Ikke halvt-halvt, men noe nytt og eget.

**Tredje rom:**
Begrepet kommer fra Homi Bhabha. Det "tredje rommet" er stedet der kulturer møtes og skaper noe nytt - verken den ene eller andre kulturen, men noe mellom.

**Bindestrek-identitet:**
"Norsk-pakistansk", "norsk-somalisk" - identiteter som kombinerer opprinnelse og tilhørighet. Kan både berike og oppleves begrensende.

**Dobbelthet:**
Opplevelsen av å se verden fra flere perspektiver samtidig, å kunne "kode-veksle" mellom kulturer.

**Litterære eksempler:**
- Karakterer som føler seg "for norske" hjemme og "for utenlandske" ute
- Språklig veksling mellom norsk og andre språk
- Konflikter mellom generasjoner
- Forhandling om tradisjoner og modernitet`,
    },
    {
      id: 'norsk-vg1-17-1-def-2',
      type: 'definition',
      title: 'Maria Navarro Skaranger',
      content: `**Maria Navarro Skaranger (f. 1994)**

En av de viktigste unge stemmene i norsk flerkulturell litteratur.

**Bakgrunn:**
- Vokst opp på Romsås i Oslo
- Mor fra Spania, far fra Chile
- Debuterte som 21-åring

**"Alle utlendinger har lukka gardiner" (2015):**
Debutromanen handler om Mariana, en jente på 16 år som vokser opp i en drabantby i Oslo.

**Viktige temaer:**
- Livet i drabantbyen
- Identitet mellom kulturer
- Klasseforskjeller
- Fordommer og stereotypier
- Vennskap og lojalitet

**Språket:**
Skaranger bruker et muntlig, ekte språk inspirert av Oslo-slang med innslag av flere språk. Dette har vært nyskapende i norsk litteratur.

**Eksempel på stil:**
"Hu moren min var full av hat. Hu hata hu nabodama som hadde BMW og nese i sky."

**Betydning:**
- Viser Oslo fra et nytt perspektiv
- Språklig nyskapende
- Representerer erfaringer som sjelden har vært i litteraturen
- Priser: Talentstipend, kritikerrost`,
    },
    {
      id: 'norsk-vg1-17-1-def-3',
      type: 'definition',
      title: 'Zeshan Shakar',
      content: `**Zeshan Shakar (f. 1982)**

Forfatter og samfunnsøkonom som har skrevet noen av de mest leste romanene i norsk litteratur de siste årene.

**Bakgrunn:**
- Vokst opp på Stovner i Oslo
- Foreldre fra Pakistan
- Utdannet samfunnsøkonom

**"Tante Ulrikkes vei" (2017):**
Gjennombruddsromanen handler om Jamal og Mo, to gutter som vokser opp på Stovner.

**Temaer:**
- Oppvekst i drabantby
- Klasseforskjeller og sosial mobilitet
- Forventninger fra familie og samfunn
- Utdanning som vei ut
- Identitet og tilhørighet

**Fortellerteknikk:**
- Veksler mellom Jamals dagboknotater og Mos e-poster
- Kontrasterer to ulike veier gjennom livet
- Muntlig, autentisk språk

**"Gull" (2020):**
Oppfølgeren som fortsetter å utforske klasse og kulturmøter.

**Betydning:**
- Bestselger og kritikerfavoritt
- Filmatisert
- Setter søkelys på klasseperspektivet
- Viser hvordan bakgrunn påvirker muligheter`,
    },
    {
      id: 'norsk-vg1-17-1-def-4',
      type: 'definition',
      title: 'Andre viktige stemmer',
      content: `**Flere forfattere å kjenne til:**

**Sumaya Jirde Ali (f. 1997):**
- Poet og samfunnsdebattant
- "Ikkje ver redd, jiansen" - diktsamling
- Skriver om identitet, rasisme, kjønn
- Modig og direkte stemme

**Gulraiz Sharif (f. 1984):**
- "Hør her'a!" (2020) - debutroman
- Handler om Mahmoud på 15 som skriver brev til lillebroren
- Temaer: maskulinitet, forventninger, identitet
- Morsom og alvorlig på samme tid

**Hassan Khemiri (f. 1978, svensk):**
- "Et øye rødt" - lest i norsk skole
- Utforsker språk og identitet
- Eksperimenterer med form

**Mona Asadi:**
- Forfatter og komiker
- Skriver om det å være norsk-iraner
- Humoristisk og treffende

**Felles trekk:**
- Utforsker identitet mellom kulturer
- Bruker språk bevisst og nyskapende
- Setter søkelys på klasseperspektiver
- Representerer erfaringer som har manglet i litteraturen
- Balanserer det personlige og det politiske`,
    },
    {
      id: 'norsk-vg1-17-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av flerkulturell tekst',
      problem: 'Les dette utdraget fra "Alle utlendinger har lukka gardiner" og analyser hvordan identitet fremstilles:\n\n"Jeg er jo egentlig bare norsk, sier jeg. Ja, men du er ikke hvit norsk, sier hu. Nei, men hva er jeg da, sier jeg. Du er utlending, sier hu. Men jeg er jo født her, sier jeg."',
      solution: `**Analyse:**

**Tema:**
Dialogen handler om definisjonen av "norsk" og hvem som får lov til å definere seg selv.

**Identitetsforhandling:**
- Jeg-personen identifiserer seg som norsk
- Den andre personen kategoriserer basert på utseende
- Konflikten mellom selvoppfatning og andres kategorisering

**Språklige trekk:**
- Kort, direkte dialog
- Muntlig språk ("hu")
- Gjentagelse av "sier jeg" / "sier hu" understreker fram-og-tilbake
- Enkel setningsstruktur forsterker frustrasjonen

**Samfunnsrelevans:**
Teksten tar opp:
- Hvem definerer "norsk"?
- Betydningen av hudfarge i identitetsspørsmål
- Forskjellen på juridisk og sosial tilhørighet
- "Evig utlending"-opplevelsen

**Litterær betydning:**
Skaranger gir stemme til en erfaring mange har, men som sjelden har vært representert i norsk litteratur. Den enkle dialogen avslører kompliserte maktstrukturer.`,
    },
    {
      id: 'norsk-vg1-17-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmål om flerkulturell litteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "hybrididentitet"?',
            solution: 'En identitet som kombinerer elementer fra flere kulturer og skaper noe nytt og eget.',
          },
          {
            label: 'b',
            task: 'Hvorfor er språket viktig i flerkulturell litteratur?',
            solution: 'Språket speiler identitet og kulturmøter. Mange forfattere bruker nyskapende språk med innslag fra flere kulturer.',
          },
          {
            label: 'c',
            task: 'Hva handler Maria Navarro Skarangers "Alle utlendinger har lukka gardiner" om?',
            solution: 'Romanen handler om Mariana, en jente på 16 år som vokser opp i en drabantby i Oslo, og utforsker identitet, klasseforskjeller og fordommer.',
          },
        ],
        solution: 'Flerkulturell litteratur utforsker identitet, tilhørighet og kulturmøter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Maria Navarro Skaranger og Zeshan Shakar:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de to forfatterne til felles?',
            solution: 'Begge skriver om oppvekst i drabantby i Oslo, bruker muntlig språk, utforsker identitet og klasse.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Forskjellig bakgrunn (latinamerikansk vs. pakistansk), ulik fortellerteknikk (enestående forteller vs. vekslende perspektiver).',
          },
        ],
        hints: ['Se på temaer, språk og fortellerteknikk'],
        solution: 'Begge representerer viktige stemmer i norsk flerkulturell litteratur med noen fellestrekk og noen forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Reflekter over begrepet "bindestrek-identitet".',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "bindestrek-identitet" (f.eks. norsk-pakistansk)?',
            solution: 'Identitet som kombinerer nasjonalitet/opprinnelse med tilhørighet til Norge.',
          },
          {
            label: 'b',
            task: 'Kan slike betegnelser være både berikende og begrensende? Forklar.',
            solution: 'Berikende: anerkjenner flere tilhørigheter. Begrensende: kan oppleves som at man aldri er "helt" norsk.',
          },
        ],
        hints: ['Tenk på hvem som definerer identitet', 'Tenk på forskjellen på selvvalgt og påtvunget betegnelse'],
        solution: 'Identitetsbetegnelser er komplekse og kan oppleves ulikt av ulike mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Les et utdrag eller en hel tekst av en av forfatterne nevnt i kapittelet og gjør en kort analyse.',
        hints: ['Velg en tekst fra pensum eller biblioteket', 'Se på temaer: identitet, tilhørighet, språk', 'Analyser språklige virkemidler', 'Knytt til samfunnet'],
        solution: 'Analysen bør identifisere temaer, analysere språk og virkemidler, og reflektere over tekstens betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvorfor er det viktig at norsk litteratur inkluderer stemmer fra ulike bakgrunner?',
        hints: ['Tenk på representasjon', 'Tenk på hvem som leser', 'Tenk på hva litteratur kan gjøre', 'Tenk på samfunnsendringer'],
        solution: 'Drøftingen bør ta opp representasjon, at lesere kan kjenne seg igjen, at litteratur kan utvide forståelse, og at litteraturen bør speile et mangfoldig samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.2: Postkolonial lesning
// ============================================================================

export const CHAPTER_NORSK_VG1_17_2: TextbookChapter = {
  id: 'norsk-vg1-17-2',
  courseId: 'norsk-vg1',
  chapterNumber: '17.2',
  title: 'Postkolonial lesning',
  description: 'Lær å lese tekster med et kulturkritisk blikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese tekster med et kritisk og kulturelt perspektiv',
    'reflektere over representasjon og stereotypier i tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-17-2-intro',
      type: 'text',
      content: `## Postkolonial lesning - å lese med kritisk blikk

Postkolonial teori gir oss verktøy til å analysere hvordan kulturer fremstilles i tekster, og hvordan maktforhold påvirker hvem som får fortelle og hvordan.

**Hva betyr "postkolonial"?**
- "Post" betyr "etter"
- "Kolonial" viser til kolonitiden
- Postkolonialisme analyserer ettervirkningene av kolonialisme
- Handler om makt, representasjon og hvem som har definisjonsmakt

**Relevans for norsk:**
Selv om Norge ikke var en stormakt, er vi del av en vestlig tradisjon som har fremstilt andre kulturer på bestemte måter. Postkolonial lesning hjelper oss å se disse mønstrene.

**I dette kapittelet lærer du:**
- Grunnleggende begreper fra postkolonial teori
- Hvordan analysere representasjon i tekster
- Hvordan identifisere stereotypier
- Hvordan lese tekster med kulturkritisk blikk`,
    },
    {
      id: 'norsk-vg1-17-2-def-1',
      type: 'definition',
      title: 'Grunnbegreper i postkolonial teori',
      content: `**Viktige begreper å kjenne:**

**Kolonialisme:**
Europeiske stormakters erobring og kontroll over andre områder i verden (ca. 1500-1960-tallet).

**Postkolonialisme:**
Analyse av hvordan kolonialismen fortsetter å påvirke kultur, identitet og maktforhold i dag.

**Den andre (The Other):**
Et sentralt begrep fra Edward Said. "Vi" definerer oss selv i kontrast til "de andre". De andre fremstilles ofte som:
- Eksotiske
- Primitive
- Farlige
- Mystiske
- Underlegne

**Orientalisme:**
Edward Saids begrep for Vestens måte å fremstille Østen (Orienten) på - ofte stereotypt og forenklet.

**Sentrum og periferi:**
- Sentrum: Vestlige, "utviklede" land
- Periferi: Resten av verden, fremstilt som mindre viktig

**Definisjonsmakt:**
Hvem har makt til å definere virkeligheten? Hvem bestemmer hva som er "normalt"?

**Disse begrepene hjelper oss å se mønstre i hvordan kulturer fremstilles.**`,
    },
    {
      id: 'norsk-vg1-17-2-def-2',
      type: 'definition',
      title: 'Representasjon og stereotypier',
      content: `**Hvordan kulturer fremstilles i tekst:**

**Representasjon:**
Hvordan grupper eller kulturer gjengis i tekster, bilder og medier.

**Spørsmål om representasjon:**
- Hvem fremstilles?
- Hvordan fremstilles de?
- Hvem forteller?
- Hva er perspektivet?
- Hva utelates?

**Stereotypier:**
Forenklede, ofte negative fremstillinger av grupper.

**Vanlige stereotypier i litteratur:**
- "Den edle ville" - naturmennesker som enkle og uskyldige
- "Den farlige fremmed" - andre kulturer som truende
- "Den undertrykte kvinnen" - kvinner fra andre kulturer som ofre
- "Den eksotiske" - andre kulturer som spennende og annerledes

**Hvitt blikk (white gaze):**
Når tekster fremstiller andre kulturer primært sett fra et hvitt, vestlig perspektiv.

**Internalisert underlegenhet:**
Når undertrykte grupper overtar majoritetens negative syn på seg selv.

**Å se stereotypier er første steg mot å forstå dem kritisk.**`,
    },
    {
      id: 'norsk-vg1-17-2-def-3',
      type: 'definition',
      title: 'Hvordan lese postkolonialt',
      content: `**Spørsmål å stille til teksten:**

**Om forteller og perspektiv:**
- Hvem forteller historien?
- Fra hvilket perspektiv?
- Er det en insider eller outsider som forteller?
- Hvem har definisjonsmakten?

**Om representasjon:**
- Hvordan fremstilles karakterer fra ulike kulturer?
- Er det stereotypier?
- Hvem er subjekt (handler) og hvem er objekt (passiv)?
- Hvem har stemme og hvem er tause?

**Om makt:**
- Hvilke maktforhold vises i teksten?
- Er det noen som fremstilles som overlegne/underlegne?
- Hvordan fremstilles møtet mellom kulturer?

**Om språk:**
- Hvordan omtales kulturer og grupper?
- Er det eksotifiserende eller generaliserende språk?
- Hvem får snakke "riktig" språk?

**Om kontekst:**
- Når ble teksten skrevet?
- Hvilke holdninger var vanlige da?
- Hvordan leser vi teksten i dag?

**Tips:** Ikke alle tekster er problematiske, men alle kan analyseres kritisk.`,
    },
    {
      id: 'norsk-vg1-17-2-def-4',
      type: 'definition',
      title: 'Eksempler fra norsk litteratur',
      content: `**Postkolonial lesning av norske tekster:**

**Hamsun og "Sult":**
Hamsuns tekster kan leses i lys av hans syn på "primitive" kulturer. Hvordan fremstilles karakterer fra ulike bakgrunner?

**Eventyr og folkeeventyr:**
- "Askeladden og de gode hjelperne" - hvem er "de gode" og "de onde"?
- Fremstilling av "trollet" - den farlige andre?
- Hvordan fremstilles kvinner fra andre kulturer?

**Misjonslitteratur:**
Tekster fra misjonstiden fremstilte ofte afrikanske kulturer stereotypt. Hvordan?

**Moderne tekster:**
Også moderne tekster kan ha problematiske fremstillinger. Kritisk lesning gjelder all litteratur.

**Motfortellinger:**
Flerkulturell litteratur kan leses som motfortellinger - tekster som forteller andre historier enn de dominerende.

**Viktig balanse:**
- Eldre tekster kan ha verdi selv om de har problematiske elementer
- Vi kan kritisere aspekter uten å forkaste hele teksten
- Kontekst er viktig - andre tider hadde andre normer
- Kritisk lesning betyr ikke sensur, men bevissthet`,
    },
    {
      id: 'norsk-vg1-17-2-example-1',
      type: 'example',
      title: 'Eksempel: Postkolonial analyse',
      problem: 'Les dette fiktive utdraget og analyser det postkolonialt:\n\n"Reisende kom til landsbyen i hjertet av Afrika. De innfødte møtte dem med nysgjerrige blikk. En gammel medisinmann kom frem og tilbød dem underlige drikker. De primitive ritualene fascinerte de vestlige gjestene."',
      solution: `**Postkolonial analyse:**

**Perspektiv:**
- Fortalt fra de "reisendes" (vestlige) perspektiv
- Afrika fremstilles som objekt, ikke subjekt
- Afrikanerne har ikke egen stemme i teksten

**Språklige valg:**
- "De innfødte" - generaliserende, objektiverende
- "Hjertet av Afrika" - eksotifiserende
- "Primitive ritualer" - nedvurderende
- "Underlige" - fremmedgjørende
- "Fascinerte" - de vestlige som de aktive tilskuerne

**Stereotypier:**
- "Medisinmannen" - stereotyp fremstilling
- Afrika som mystisk og primitivt
- Innfødte som kuriositeter

**Maktforhold:**
- De vestlige er subjekter (de som handler, ser, fascineres)
- Afrikanerne er objekter (de som blir sett på)
- Ingen dialog - bare enveis observasjon

**Hva mangler:**
- Afrikanernes eget perspektiv
- Individualisering av karakterene
- Kontekst og kompleksitet
- Afrikanernes tanker og følelser

**Konklusjon:**
Teksten reproduserer koloniale blikk og stereotypier, og fremstiller afrikanere som "de andre" sett utenfra.`,
    },
    {
      id: 'norsk-vg1-17-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar disse begrepene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "den andre" (The Other)?',
            solution: 'Begrepet beskriver hvordan "vi" definerer oss i kontrast til "dem" - de andre fremstilles ofte som forskjellige, eksotiske eller underlegne.',
          },
          {
            label: 'b',
            task: 'Hva er orientalisme?',
            solution: 'Edward Saids begrep for Vestens stereotypiske fremstilling av Østen som eksotisk, mystisk og annerledes.',
          },
          {
            label: 'c',
            task: 'Hva betyr definisjonsmakt?',
            solution: 'Makten til å definere virkeligheten - hvem bestemmer hva som er "normalt", hvem som er "vi" og hvem som er "de".',
          },
        ],
        solution: 'Postkoloniale begreper hjelper oss å analysere makt og representasjon i tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identifiser potensielle stereotypier i disse beskrivelsene:',
        subTasks: [
          {
            label: 'a',
            task: '"Den mystiske kvinnen fra Østen"',
            solution: 'Eksotifiserende, generaliserende ("fra Østen"), fremstiller kvinner som mystiske/uforklarlige.',
          },
          {
            label: 'b',
            task: '"De fargerike stammene i jungelen"',
            solution: '"Fargerike" er eksotifiserende, "stammer" er generaliserende, "jungelen" fremstiller som primitive.',
          },
          {
            label: 'c',
            task: '"Den undertrykte muslimske kvinnen"',
            solution: 'Generaliserer alle muslimske kvinner, fremstiller dem som passive ofre uten egen stemme.',
          },
        ],
        hints: ['Se etter generalisering', 'Se etter eksotifisering', 'Se etter forenkling'],
        solution: 'Stereotypier forenkler og generaliserer komplekse grupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en tekst fra pensum og still postkoloniale spørsmål til den:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem forteller og fra hvilket perspektiv?',
            solution: 'Svar avhenger av teksten. Analyser om fortelleren er insider eller outsider, og hvilke konsekvenser det har.',
          },
          {
            label: 'b',
            task: 'Hvordan fremstilles karakterer fra ulike bakgrunner?',
            solution: 'Se etter stereotypier, generalisering, eksotifisering. Er karakterene komplekse eller forenklede?',
          },
          {
            label: 'c',
            task: 'Hva er maktforholdene i teksten?',
            solution: 'Analyser hvem som har stemme, hvem som er aktive/passive, hvem som fremstilles positivt/negativt.',
          },
        ],
        hints: ['Bruk spørsmålene fra definisjonen om postkolonial lesning'],
        solution: 'Postkolonial lesning avdekker mønstre i representasjon og makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan kan vi lese eldre tekster som har problematiske fremstillinger?',
        hints: ['Tenk på historisk kontekst', 'Kan vi kritisere og verdsette samtidig?', 'Hva er forskjellen på kritikk og sensur?', 'Hva kan vi lære av problematiske tekster?'],
        solution: 'Drøftingen bør ta opp kontekstualisering, kritisk lesning, verdien av å forstå historien, og forskjellen på kritikk og sensur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kort analyse (200-250 ord) av hvordan en kultur fremstilles i en selvvalgt tekst, film eller medietekst.',
        hints: ['Bruk postkoloniale begreper', 'Analyser perspektiv og representasjon', 'Se etter stereotypier', 'Vurder maktforhold'],
        solution: 'Analysen bør vise bruk av postkoloniale begreper og evne til å identifisere mønstre i representasjon.',
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

export const NORSK_VG1_CHAPTERS = [
  CHAPTER_NORSK_VG1_1_1,
  CHAPTER_NORSK_VG1_1_2,
  CHAPTER_NORSK_VG1_2_1,
  CHAPTER_NORSK_VG1_2_2,
  CHAPTER_NORSK_VG1_3_1,
  CHAPTER_NORSK_VG1_3_2,
  CHAPTER_NORSK_VG1_4_1,
  CHAPTER_NORSK_VG1_4_2,
  CHAPTER_NORSK_VG1_5_1,
  CHAPTER_NORSK_VG1_5_2,
  CHAPTER_NORSK_VG1_6_1,
  CHAPTER_NORSK_VG1_6_2,
  CHAPTER_NORSK_VG1_7_1,
  CHAPTER_NORSK_VG1_7_2,
  CHAPTER_NORSK_VG1_8_1,
  CHAPTER_NORSK_VG1_8_2,
  CHAPTER_NORSK_VG1_9_1,
  CHAPTER_NORSK_VG1_9_2,
  CHAPTER_NORSK_VG1_10_1,
  CHAPTER_NORSK_VG1_10_2,
  CHAPTER_NORSK_VG1_11_1,
  CHAPTER_NORSK_VG1_11_2,
  CHAPTER_NORSK_VG1_12_1,
  CHAPTER_NORSK_VG1_12_2,
  CHAPTER_NORSK_VG1_13_1,
  // Kapittel 14: Samisk språk og kultur
  CHAPTER_NORSK_VG1_14_1,
  CHAPTER_NORSK_VG1_14_2,
  CHAPTER_NORSK_VG1_14_3,
  // Kapittel 15: Grammatikk og setningsanalyse
  CHAPTER_NORSK_VG1_15_1,
  CHAPTER_NORSK_VG1_15_2,
  // Kapittel 16: Rettskriving og språknorm
  CHAPTER_NORSK_VG1_16_1,
  CHAPTER_NORSK_VG1_16_2,
  // Kapittel 17: Kulturmøter i litteratur
  CHAPTER_NORSK_VG1_17_1,
  CHAPTER_NORSK_VG1_17_2,
];

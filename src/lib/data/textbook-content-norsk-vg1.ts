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
];

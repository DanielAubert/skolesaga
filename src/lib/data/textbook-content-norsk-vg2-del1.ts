/**
 * Norsk VG2 - Del 1: Kapittel 1.1-1.5
 * Norrøn tid og middelalder
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_VG2_HAVAMAL,
  TEKST_VG2_YNGLINGESAGA_AAPNING,
  TEKST_VG2_VOLUSPA,
  TEKST_VG2_TRYMSKVIDA,
  TEKST_VG2_LOKASENNA,
  TEKST_VG2_SONATORREK,
  TEKST_VG2_RAGNARSDRAAPA,
  TEKST_VG2_NJAALS_SAGA_GUNNAR,
  TEKST_VG2_EGILS_SAGA,
  TEKST_VG2_RUNETEKST,
  TEKST_VG2_HOMILIEBOK,
} from './textbook-content-norsk-vg2-tekster';

// ============================================================================
// KAPITTEL 1.1: Innføring i norrøn tid (800-1350)
// ============================================================================

export const CHAPTER_NORSK_VG2_1_1: TextbookChapter = {
  id: 'norsk-vg2-1-1',
  courseId: 'norsk-vg2',
  chapterNumber: '1.1',
  title: 'Innføring i norrøn tid (800-1350)',
  description: 'Lær om vikingtiden og den norrøne kulturen som la grunnlaget for vår litterære arv.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
  ],
  content: [
    {
      id: 'norsk-vg2-1-1-intro',
      type: 'text',
      content: `## Den norrøne verden - en innføring

Den norrøne tiden, som strekker seg fra om lag 800 til 1350 e.Kr., representerer en av de mest fascinerende periodene i skandinavisk historie. I denne epoken utviklet nordboerne en rik og mangfoldig kultur som har satt dype spor i vår litteratur, vårt språk og vår identitet som nordmenn.

**Vikingtiden (ca. 800-1050)**

Vikingtiden innledes tradisjonelt med angrepet på klosteret Lindisfarne i Nord-England i 793 og avsluttes med slaget ved Stamford Bridge i 1066, der den norske kongen Harald Hardråde falt. I denne perioden var nordboerne kjent over hele Europa - og langt utover - som dristige sjøfarere, handelsmenn og krigere.

Men vikingene var langt mer enn bare krigere. De var også bønder, håndverkere, poeter og lovkyndige. De utviklet et sofistikert samfunnssystem med ting (folkeforsamlinger), de skapte imponerende skip som kunne krysse verdenshavene, og de la grunnlaget for en litterær tradisjon som fortsatt fascinerer oss i dag.

**Det norrøne samfunnet**

Det norrøne samfunnet var lagdelt, men ikke like rigid som det føydale systemet i resten av Europa. Øverst fant vi kongene og jarlene, deretter hirdmenn og hauldar (storbønder), så frie bønder, og nederst trellene (ufrie). Kvinner hadde relativt stor frihet sammenlignet med andre deler av Europa - de kunne eie jord, ta ut skilsmisse og delta i religiøse seremonier.

**Religion og verdensbilde**

Før kristendommen ble innført, dyrket nordboerne de norrøne gudene - Odin, Tor, Frøy, Frøya og mange flere. Denne religionen, som vi ofte kaller "den norrøne mytologien", var ikke bare et trossystem, men gjennomsyret hele kulturen. Gudene ble æret gjennom blot (ofringer), og mytene om dem ble fortalt og gjenfortalt gjennom generasjoner.

Det norrøne verdensbildet var preget av skjebnetroen. Selv gudene var underlagt skjebnen (norrønt: "ørlǫg"), og de visste at verden en dag ville gå under i Ragnarok - den endelige kampen mellom guder og jotner. Denne bevisstheten om livets forgjengelighet preger mye av den norrøne litteraturen, hvor heltene strever etter ære og ettermæle, vel vitende om at døden venter alle.

**Overgangen til kristendommen**

Kristningen av Norge skjedde gradvis gjennom 900- og 1000-tallet, med kong Olav Tryggvason (995-1000) og særlig Olav Haraldsson (1015-1028) som sentrale skikkelser. Kristendommen medførte store endringer: Latinen kom inn som skriftspråk for kirke og lærdom, klostervesenet ble etablert, og nye litterære sjangre ble introdusert.

Men overgangen var ikke et rent brudd. De norrøne mytene og sagaene fortsatte å leve, nå nedskrevet av kristne munker som så verdien i å bevare forfedrenes fortellinger. Denne sameksistensen mellom gammel og ny tro preger mye av den norrøne litteraturen vi har bevart.

**Litteraturen tar form**

Den norrøne litteraturen ble i hovedsak nedskrevet på Island på 1200- og 1300-tallet, selv om den bygger på en eldre muntlig tradisjon. Island, som ble befolket av nordmenn fra slutten av 800-tallet, ble et litterært sentrum hvor sagaer, eddadikt og skaldekvad ble samlet og nedtegnet.

Hvorfor akkurat Island? Flere faktorer spilte inn: Island hadde bevart en mer arkaisk form av det norrøne språket, øya hadde en sterk tradisjon for muntlig fortelling, og den islandske eliten hadde interesse av å dokumentere sin historie og kultur. Resultatet er et enestående litterært korpus som gir oss innsikt i middelalderens Skandinavia.`,
    },
    {
      id: 'norsk-vg2-1-1-def-1',
      type: 'definition',
      title: 'Sentrale begreper i norrøn kultur',
      content: `**Viktige begreper:**

**Norrønt:** Fellesbetegnelse på språket som ble snakket i Skandinavia og de norrøne bosetningene fra ca. 700 til 1350. Moderne norsk, svensk, dansk, islandsk og færøysk stammer alle fra norrønt.

**Blot:** Religiøs offerfest hvor dyr (og i sjeldne tilfeller mennesker) ble ofret til gudene. Blotet var sentralt i den førkristne religionsutøvelsen.

**Ting:** Folkeforsamling hvor frie menn møttes for å avgjøre rettssaker, vedta lover og diskutere samfunnsspørsmål. Alltinget på Island (grunnlagt 930) er verdens eldste parlament som fortsatt eksisterer.

**Ættearv:** Begrepet om at ære og skam ikke bare tilhørte individet, men hele slekten. Dette er sentralt for å forstå konfliktene i sagalitteraturen.

**Skjebnetro (ørlǫg):** Forestillingen om at skjebnen er forutbestemt og ikke kan unngås, selv ikke av gudene. Dette preget livsholdningen og litteraturen.

**Ragnarok:** Den norrøne forestillingen om verdens undergang - den endelige kampen mellom guder og kaoskrefter.

**Valhall:** Odins hall hvor de fremste krigerne ble tatt imot etter døden for å forberede seg til Ragnarok.

**Yggdrasil:** Verdenstreet som binder sammen de ni verdener i norrøn kosmologi.`,
    },
    {
      id: 'norsk-vg2-1-1-def-2',
      type: 'definition',
      title: 'De norrøne litterære sjangrene',
      content: `**Hovedsjangre i norrøn litteratur:**

**1. Eddadiktning**
Mytologiske og heroiske kvad, delt i to hovedtyper:
- *Gudedikt:* Forteller om gudenes verden og handlinger
- *Heltedikt:* Forteller om menneskelige helter og deres skjebner

**2. Skaldekvad**
Kunstferdig lyrikk skrevet av navngitte skalder (diktere). Kjennetegnes av:
- Komplisert verseform
- Bruk av kenninger (omskrivinger)
- Ofte knyttet til konkrete historiske hendelser

**3. Sagalitteratur**
Prosatekster som forteller om personer og hendelser. Hovedtyper:
- *Islendingesagaer:* Om islendinger i sagatiden (ca. 930-1030)
- *Kongesagaer:* Om norske konger
- *Fornaldersagaer:* Om helter fra fjern fortid
- *Samtidssagaer:* Om hendelser i forfatterens egen tid

**4. Lovtekster**
Nedtegnelser av muntlige lover, som Gulatingsloven og Frostatingsloven.

**5. Religiøs litteratur**
Etter kristningen: helgenlegender, prekener, bibeloversettelser.`,
    },
    {
      id: 'norsk-vg2-1-1-def-3',
      type: 'definition',
      title: 'De norrøne gudene',
      content: `**Æsene - de viktigste gudene:**

**Odin:** Allfaderen, visdomsguder og krigens gud. Hersker i Valhall. Ofret sitt ene øye for visdom og hengte seg i Yggdrasil for å lære runene.

**Tor:** Tordenguden med hammeren Mjølner. Menneskenes beskytter mot jotner og kaoskrefter. Den mest populære guden blant vanlige folk.

**Frøy:** Fruktbarhetsgud, hersker over regn, solskinn og jordas grøde. Bror til Frøya.

**Frøya:** Kjærlighets- og fruktbarhetsgudinne. Også knyttet til krig og magi (seid).

**Balder:** Den lyse og gode guden. Hans død er et varsel om Ragnarok.

**Loke:** Tricksterskikkelse, halvt gud, halvt jotun. Både hjelper og fiende av gudene.

**Tyr:** Krigsguden som ofret sin hånd for å binde Fenrisulven.

**Heimdall:** Vokteren av Bifrost (regnbuebroen). Skal blåse i Gjallarhornet ved Ragnarok.

**Vanene - den andre gudeslekten:**
Njord (sjøguden), Frøy og Frøya tilhørte opprinnelig vanene før de ble tatt opp blant æsene.`,
    },
    {
      id: 'norsk-vg2-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Norrøn kosmologi - de ni verdener',
      problem: `Beskriv det norrøne verdensbildet med utgangspunkt i Yggdrasil og de ni verdener.`,
      solution: `**Yggdrasil og de ni verdener**

I sentrum av den norrøne kosmologien står Yggdrasil, verdenstreet. Dette gigantiske asketreet binder sammen alle de ni verdener:

**De tre hovedplanene:**

*Øverst:*
1. **Åsgard** - Gudenes verden, hvor Odin og de andre æsene bor
2. **Vanaheim** - Vanegudenes hjem
3. **Alfheim** - Lyse alvenes rike

*I midten:*
4. **Midgard** - Menneskenes verden, vår verden
5. **Jotunheim** - Jotnenes (kjempenes) land
6. **Svartalfheim** - Mørke alvenes/dvergenes rike

*Nederst:*
7. **Niflheim** - Tåkeverdenen, kuldens rike
8. **Muspelheim** - Ildverdenen
9. **Helheim** - Dødsriket, styrt av Hel (Lokes datter)

**Yggdrasils struktur:**
- Tre røtter strekker seg til Niflheim, Jotunheim og Åsgard
- Under røttene finnes tre brønner: Urdbrønnen (ved Åsgard), Mimers brønn (ved Jotunheim) og Hvergelmir (ved Niflheim)
- I trekronen sitter en ørn, og ekornet Ratatosk løper opp og ned stammen
- Slangen Nidhogg gnager på røttene

**Bifrost:**
Regnbuebroen som forbinder Midgard med Åsgard, voktet av Heimdall.

Denne kosmologien reflekterer et verdensbilde der alt henger sammen - guder, mennesker, jotner og underjordiske vesener er alle del av samme helhet.`,
    },
    {
      id: 'norsk-vg2-1-1-tip-1',
      type: 'tip',
      title: 'Kilder til norrøn litteratur',
      content: `**Hvor kommer kunnskapen vår fra?**

Det meste av det vi vet om norrøn litteratur og mytologi kommer fra islandske håndskrifter fra 1200- og 1300-tallet:

**Den eldre Edda (Codex Regius):** En samling gudedikt og heltedikt, trolig nedskrevet ca. 1270.

**Den yngre Edda (Snorres Edda):** Skrevet av Snorre Sturluson ca. 1220 som en lærebok i skaldskap. Inneholder mye mytologisk stoff.

**Heimskringla:** Snorres samling av kongesagaer om de norske kongene.

**Islendingesagaene:** En rekke prosatekster om islendinger i sagatiden.

**Viktig å huske:** Disse tekstene ble nedskrevet av kristne forfattere 200-300 år etter kristningen. Vi må alltid spørre oss: Hvor mye er "autentisk" førkristent materiale, og hvor mye er påvirket av kristendommen?`,
    },
    {
      id: 'norsk-vg2-1-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Havamal (Den hoyes tale)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-1-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_HAVAMAL}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-1-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Fraa Ynglingesaga (Snorre Sturluson)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-1-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_YNGLINGESAGA_AAPNING}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hendelse markerer tradisjonelt begynnelsen på vikingtiden?',
        options: [
          'Grunnleggelsen av Alltinget på Island i 930',
          'Angrepet på klosteret Lindisfarne i 793',
          'Kristningen av Norge under Olav Tryggvason',
          'Nedskrivingen av Codex Regius ca. 1270',
        ],
        answer: 1,
        solution: 'Angrepet på klosteret Lindisfarne i Nord-England i 793 markerer tradisjonelt begynnelsen på vikingtiden. Dette var det første store vikingangrepet på De britiske øyer og sendte sjokkbølger gjennom det kristne Europa.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et "blot" i norrøn sammenheng?',
        options: [
          'Et slag eller en kamp mellom vikinger',
          'En religiøs offerfest til gudene',
          'En type skaldekvad',
          'En folkeforsamling for lovvedtak',
        ],
        answer: 1,
        solution: 'Et blot var en religiøs offerfest hvor dyr (og i sjeldne tilfeller mennesker) ble ofret til de norrøne gudene. Blotet var sentralt i den førkristne religionsutøvelsen og ble holdt ved viktige tidspunkter som midtvinter og midsommer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva som kjennetegner den norrøne perioden og hvorfor den er viktig for norsk litteratur og kultur.',
        subTasks: [
          {
            label: 'a',
            task: 'Når var den norrøne perioden, og hva markerer begynnelsen og slutten?',
            solution: 'Den norrøne perioden varte fra ca. 800 til 1350. Begynnelsen markeres ofte med vikingtoktet til Lindisfarne i 793, mens slutten sammenfaller med Svartedauden (1349-50) som fikk store konsekvenser for kulturen.',
          },
          {
            label: 'b',
            task: 'Beskriv det norrøne samfunnet med hensyn til religion, sosial struktur og verdier.',
            solution: 'Det norrøne samfunnet var lagdelt (konger/jarler, storbønder, frie bønder, treller). Før kristningen dyrket de norrøne guder gjennom blot. Viktige verdier var ære, lojalitet til slekt og ætt, og tro på skjebnen.',
          },
          {
            label: 'c',
            task: 'Hvorfor ble mesteparten av den norrøne litteraturen nedskrevet på Island?',
            solution: 'Island bevarte en arkaisk form av språket, hadde sterk tradisjon for muntlig fortelling, og den islandske eliten ønsket å dokumentere sin historie. De hadde også tilgang til pergament og skrivekunst gjennom kirken.',
          },
        ],
        solution: 'Den norrøne perioden la grunnlaget for vår litterære arv, språk og kulturelle identitet. Litteraturen gir oss unik innsikt i middelalderens Skandinavia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Analyser det norrøne verdensbildet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva Yggdrasil er og hvilken rolle det spiller i norrøn kosmologi.',
            solution: 'Yggdrasil er verdenstreet, en gigantisk ask som binder sammen de ni verdener. Det representerer sammenhengen mellom alle deler av tilværelsen og er sentrum i den norrøne kosmologien.',
          },
          {
            label: 'b',
            task: 'Beskriv minst tre av de ni verdener og hvem som bor der.',
            solution: 'Eksempler: Åsgard (gudenes verden), Midgard (menneskenes verden), Jotunheim (jotnenes land), Helheim (dødsriket), Niflheim (tåke- og kuldeverdenen), Muspelheim (ildverdenen).',
          },
          {
            label: 'c',
            task: 'Hva var Ragnarok, og hvordan påvirket forestillingen om Ragnarok det norrøne menneskesynet?',
            solution: 'Ragnarok var den endelige kampen mellom guder og kaoskrefter som skulle ende med verdens undergang. Bevisstheten om at selv gudene skulle dø, skapte et fokus på ære og ettermæle - det eneste som kunne overleve døden.',
          },
        ],
        hints: ['Tenk på hvordan verdensbildet henger sammen', 'Hva sier dette om synet på liv og død?'],
        solution: 'Det norrøne verdensbildet var helhetlig og sammenbundet, med en sterk bevissthet om forgjengelighet og skjebne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign de norrøne litterære sjangrene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom eddadikt og skaldekvad?',
            solution: 'Eddadikt er anonyme, mytologiske/heroiske kvad med relativt enkel versform. Skaldekvad er kunstferdig lyrikk av navngitte diktere, med komplisert versform og mange kenninger.',
          },
          {
            label: 'b',
            task: 'Nevn og forklar minst tre typer sagalitteratur.',
            solution: 'Islendingesagaer (om islendinger ca. 930-1030), kongesagaer (om norske konger), fornaldersagaer (om helter fra fjern fortid), samtidssagaer (om forfatterens egen tid).',
          },
        ],
        solution: 'De ulike sjangrene hadde forskjellige funksjoner og publikum, men til sammen gir de et rikt bilde av den norrøne kulturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter kristningens betydning for den norrøne litteraturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan påvirket kristningen bevaringen av norrøn litteratur?',
            solution: 'Kristendommen førte med seg skriftkultur og pergamentproduksjon. Kristne munker nedskrev den muntlige tradisjonen, noe som sikret bevaringen av sagaer og eddadikt.',
          },
          {
            label: 'b',
            task: 'Hvilke problemer oppstår når førkristne tekster nedskrives av kristne forfattere?',
            solution: 'Vi kan ikke vite sikkert hva som er "autentisk" førkristent materiale. Forfatterne kan ha sensurert, omtolket eller lagt til kristne elementer. De hadde sine egne motiver og perspektiver.',
          },
        ],
        hints: ['Tenk på hvem som skrev og hvorfor', 'Hva kan ha blitt endret eller utelatt?'],
        solution: 'Kristningen var paradoksalt nok avgjørende for bevaringen av den norrøne litteraturen, men vi må alltid ha et kildekritisk blikk på tekstene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Havamal (primærteksten). Velg to strofer og forklar hva de betyr.',
        subTasks: [
          {
            label: 'a',
            task: 'Gjengi de to strofene du har valgt, og forklar innholdet med egne ord.',
            solution: 'Eleven velger selv strofer. For eksempel strofe 76-77 om at alt er forgjengelig, men ettermælet varer. Forklaringen skal vise at eleven forstår den overførte betydningen.',
          },
          {
            label: 'b',
            task: 'Hva forteller strofene om verdiene i det norrøne samfunnet?',
            solution: 'Strofene viser verdier som gjestfrihet, måtehold, visdom, mot og ære. Spesielt viktig er fokuset på ettermælet - det eneste som overlever døden.',
          },
        ],
        hints: ['Se på primærteksten i den sammenfellbare boksen ovenfor.'],
        solution: 'Havamal gir oss direkte innsikt i vikingtidsmenneskenes verdier og livssyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Ynglingesaga. Hvordan framstiller Snorre forholdet mellom myte og historie i denne teksten?',
        hints: [
          'Legg merke til hvordan Snorre beskriver Odin og de andre gudene.',
          'Prøver Snorre å rasjonalisere mytene?',
        ],
        solution: 'I Ynglingesaga framstiller Snorre de norrøne gudene som historiske personer - mektige høvdinger fra Asia (Asgard tolkes som et geografisk sted). Dette kalles euhemerisme: å forklare myter som forvrengninger av historiske hendelser. Snorre skriver som kristen, men bevarer mytestoffet ved å gjøre det til "historie". Dette viser spenningen mellom kristen forfatterstilling og norrøn tradisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Undersøk hvordan den norrøne arven lever videre i dag.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn eksempler på hvordan norrøne myter brukes i moderne populærkultur.',
            solution: 'Eksempler: Marvel-filmene om Thor, TV-serien "Vikings", videospill som "God of War", Tolkiens verk (påvirket av norrøn mytologi), metalmusikk med norrøne temaer.',
          },
          {
            label: 'b',
            task: 'Hvilke norske stedsnavn, personnavn eller ord stammer fra norrøn tid?',
            solution: 'Stedsnavn: Oslo (Aslo), Trondheim (Throndheimr), navn på -heim, -vin, -by. Personnavn: Tor, Odin, Frøya, Sigurd, Gunnar. Hverdagsord: ting, blot, trolldom.',
          },
          {
            label: 'c',
            task: 'Hvorfor tror du den norrøne kulturen fortsatt fascinerer oss?',
            solution: 'Den representerer vår egen historie og røtter. Mytene tar opp universelle temaer som liv, død, skjebne og ære. Det eksotiske og ukjente ved vikingtiden tiltrekker oss.',
          },
        ],
        solution: 'Den norrøne arven er fortsatt levende i språket, kulturen og populærkulturen vår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilken rolle kvinner hadde i det norrøne samfunnet, og hvordan dette gjenspeiles i litteraturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kvinners rettigheter og roller i det norrøne samfunnet.',
            solution: 'Kvinner kunne eie jord, ta ut skilsmisse og delta i religiøse seremonier. De styrte gården når mennene var borte. Volven (spåkvinnen) hadde religiøs autoritet. Kvinner hadde relativt stor frihet sammenlignet med resten av middelalderens Europa.',
          },
          {
            label: 'b',
            task: 'Gi eksempler på sterke kvinneskikkelser i norrøn litteratur og forklar hvilken rolle de spiller.',
            solution: 'Eksempler: Volven i Voluspå (kosmisk visdom), Brynhild i Sigurd-diktene (valkyrie, stolt og hevngjerrig), Gudrun i Njåls saga (egger mennene til hevn), Hallgerd (sterk vilje, nekter Gunnar hjelp). Disse kvinnene driver ofte handlingen gjennom sine valg.',
          },
          {
            label: 'c',
            task: 'Sammenlign kvinneroller i norrøn litteratur med kvinner i annen middelaldersk europeisk litteratur.',
            solution: 'Norrøne kvinner er ofte sterkere og mer selvstendige enn i europeisk ridderlitteratur, der kvinner gjerne er passive objekter for riddernes begjær. Norrøne kvinner handler, tar avgjørelser og driver konflikter. De er komplekse karakterer med egne motiver.',
          },
        ],
        solution: 'Kvinner i norrøn litteratur gjenspeiler et samfunn der kvinner hadde mer selvstendighet enn i resten av middelalderens Europa, selv om samfunnet fortsatt var patriarkalsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den norrøne skapelsesmyten med en annen skapelsesmyte du kjenner (f.eks. den bibelske skapelsesberetningen, gresk kosmogoni eller en annen tradisjon).',
        subTasks: [
          {
            label: 'a',
            task: 'Gjengi kort den norrøne skapelsesmyten (Ginnungagap, Yme, Ask og Embla).',
            solution: 'I begynnelsen fantes Ginnungagap (urgapet) mellom kulden (Niflheim) og ilden (Muspelheim). Urjotnen Yme ble til av rimfrosten. Gudene Odin, Vile og Ve drepte Yme og skapte verden av kroppen hans. Menneskene Ask og Embla ble skapt av trestammer.',
          },
          {
            label: 'b',
            task: 'Pek på likheter og forskjeller mellom mytene.',
            solution: 'Likheter med Bibelen: Verden skapes av kaos, mennesket skapes til slutt. Forskjeller: I norrøn myte skapes verden av en drept jotun (vold), i Bibelen av Guds ord (fredelig). Norrøn myte har syklisk verdensbilde (Ragnarok + ny verden), Bibelen er lineær.',
          },
          {
            label: 'c',
            task: 'Hva sier de ulike skapelsesmytene om kulturenes verdensbilde og verdier?',
            solution: 'Den norrøne myten gjenspeiler et verdensbilde der kamp og konflikt er naturlig, og der verden er forgjengelig. Den bibelske vektlegger en god skapers ordnende vilje. Hver myte speiler kulturens grunnleggende oppfatning av tilværelsen.',
          },
        ],
        solution: 'Sammenligning av skapelsesmyter avslører dype kulturelle forskjeller i synet på verden, mennesket og gudene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Eddadikt - gudedikt og heltedikt
// ============================================================================

export const CHAPTER_NORSK_VG2_1_2: TextbookChapter = {
  id: 'norsk-vg2-1-2',
  courseId: 'norsk-vg2',
  chapterNumber: '1.2',
  title: 'Eddadikt - gudedikt og heltedikt',
  description: 'Utforsk eddadiktningen med gudedikt som Voluspå og heltedikt fra Sigurd Fåvnesbane-syklusen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-1-2-intro',
      type: 'text',
      content: `## Eddadiktningen - myter og helter i poetisk form

Eddadiktene utgjør en av de viktigste kildene til norrøn mytologi og heltesagn. Disse diktene ble overlevert muntlig i generasjoner før de ble nedskrevet på Island på 1200-tallet. De gir oss et enestående innblikk i hvordan vikingtiden oppfattet verden, gudene og menneskets plass i tilværelsen.

**Den eldre Edda (Den poetiske Edda)**

Det viktigste håndskriftet som inneholder eddadikt, kalles Codex Regius ("kongeboka"). Dette håndskriftet ble trolig skrevet ned rundt 1270, men diktene i det er langt eldre - kanskje fra 800-tallet eller enda før. Håndskriftet inneholder 29 dikt, delt i to hovedgrupper:

**Gudedikt (mythologiske dikt)**
Gudediktene handler om de norrøne gudene, deres verden og skjebne. De viktigste er:
- *Voluspå* ("Volvens spådom") - en visjon om verdens skapelse og undergang
- *Håvamål* ("Den høyes tale") - Odins visdomsord
- *Trymskvida* - komisk fortelling om da Tor måtte kle seg ut som brud
- *Lokasenna* ("Lokes krangel") - Loke fornærmer alle gudene

**Heltedikt (heroiske dikt)**
Heltediktene handler om menneskelige helter, ofte med overnaturlige elementer. Den viktigste syklusen er diktene om Sigurd Fåvnesbane:
- *Reginsmål* - om Sigurds oppvekst hos smeden Regin
- *Fåvnesmål* - om drapet på draken Fåvne
- *Sigrdrivumål* - om møtet med valkyrien Sigrdriva
- *Sigurdskvida* - om Sigurds død

**Muntlig tradisjon**

Eddadiktene bærer tydelig preg av å stamme fra en muntlig tradisjon. De har:
- Faste rytmemønstre som gjør dem lettere å huske
- Gjentakelser og formler
- Dialogform som skaper dramatikk
- En klar, billedrik stil

Diktene ble trolig fremført ved festlige anledninger, kanskje akkompagnert av musikk. De hadde både underholdningsverdi og formidlet viktig kulturell kunnskap om gudene, heltene og verdens beskaffenhet.

**Verseformer**

Eddadiktene bruker hovedsakelig to verseformer:

*Fornyrdislag* ("det gamle versemålet") er den eldste og mest utbredte. Hvert vers består av to halvlinjer bundet sammen av bokstavrim (allitterasjon). Eksempel fra Voluspå:

> Hljóðs bið ek allar / helgar kindir
> (Jeg ber om stillhet / av alle hellige slekter)

*Ljodahått* ("sangtonen") brukes særlig i visdomsdiktning som Håvamål. Det har en friere rytme og en tredje, fullrimet linje.

**Voluspå - det viktigste gudediktet**

Voluspå regnes som det viktigste og mest helhetlige diktet i eddaen. Her forteller en volve (spåkvinne) om verdens skapelse, gudenes historie og Ragnarok - alt på Odins oppfordring. Diktet gir et sammenhengende bilde av den norrøne kosmologien, fra skapelsen av verden fra urgapet Ginnungagap, gjennom gudenes gullalder og fall, til den endelige kampen og gjenfødselen av en ny verden.

**Aktualitet**

Selv om eddadiktene er over tusen år gamle, tar de opp temaer som fortsatt engasjerer oss: spørsmål om livets mening, skjebne og fri vilje, god og ondt, og hva som skjer når vi dør. De har inspirert utallige kunstnere, fra Richard Wagners operaer til moderne fantasy som Tolkien og Marvel-filmene.`,
    },
    {
      id: 'norsk-vg2-1-2-def-1',
      type: 'definition',
      title: 'Sentrale begreper i eddadiktningen',
      content: `**Litterære begreper:**

**Edda:** Navnet betyr trolig "oldemor" eller "poetikk". Brukes om to samlinger: Den eldre (poetiske) Edda og Den yngre (Snorres) Edda.

**Codex Regius:** "Kongeboka" - det viktigste håndskriftet med eddadikt, fra ca. 1270.

**Fornyrdislag:** Det vanligste versemålet i eddadikt. To halvlinjer per vers, bundet av allitterasjon (bokstavrim).

**Ljodahått:** Versemål brukt i visdomsdiktning. Tre linjer, mer lyrisk.

**Allitterasjon:** Bokstavrim - ord i samme vers begynner med samme lyd. Sentral i germansk verskunst.

**Volve:** Spåkvinne med magiske evner. Den fremste i Voluspå taler med gudene.

**Kenning:** Poetisk omskriving (brukes mer i skaldekvad, men finnes også i eddadikt). Eksempel: "Odins kone" = Frigg.

**Heiti:** Poetisk synonym eller tilnavn. Odin har over 150 heiti.

**Mytologiske begreper:**

**Ginnungagap:** Urgapet som eksisterte før skapelsen.

**Ask og Embla:** De første menneskene, skapt av gudene fra trestammer.

**Urd, Verdande, Skuld:** De tre nornene som spinner skjebnens tråder.`,
    },
    {
      id: 'norsk-vg2-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av utdrag fra Voluspå',
      problem: `Les dette utdraget fra Voluspå (strofe 1-2) i oversettelse og analyser det:

**Strofe 1:**
"Hør meg, alle hellige ætter,
store og små, Heimdalls sønner!
Du vil, Valfader, at vel jeg forteller
gamle fortellinger fra menneskenes morgen."

**Strofe 2:**
"Jeg minnes jotner, født i urtiden,
de som fordum har fostret meg opp.
Ni verdner vet jeg, ni rom i treet,
det navnsterke tre, der nede i jord."`,
      solution: `**Analyse av Voluspå strofe 1-2**

**Innledningsformelen (strofe 1):**

Diktet åpner med en klassisk "be om stillhet"-formel. Volven (spåkvinnen) påkaller oppmerksomhet fra alle tilhørere:

*"Hør meg, alle hellige ætter"* - En autoritativ åpning som etablerer høytidelighet og viktighet.

*"Store og små, Heimdalls sønner"* - Menneskene kalles "Heimdalls sønner" (et heiti). Ifølge myten skapte Heimdall de sosiale klassene.

*"Du vil, Valfader"* - Valfader er et heiti for Odin. Dette etablerer at volven taler på Odins oppfordring, noe som gir hennes ord autoritet.

*"Gamle fortellinger fra menneskenes morgen"* - Signaliserer at dette er urgammel visdom om tidenes begynnelse.

**Volvens posisjon (strofe 2):**

*"Jeg minnes jotner, født i urtiden"* - Volven har kunnskap fra tidenes morgen. Hun er eldre enn menneskene, kanskje eldre enn gudene.

*"De som fordum har fostret meg opp"* - Volven ble oppfostret av jotner, som representerer urgamle krefter.

*"Ni verdner vet jeg"* - Referanse til de ni verdener i norrøn kosmologi.

*"Det navnsterke tre"* - Yggdrasil, verdenstreet, beskrevet som "navnsterkt" (mektig, berømt).

**Form:**
- Fornyrdislag-versemål
- Allitterasjon binder halvlinjene sammen
- Høytidelig, formelaktig språk
- Bruk av heiti (Valfader, Heimdalls sønner)

**Funksjon:**
Åpningen etablerer:
1. Viktigheten av det som skal fortelles
2. Volvens autoritet og urgamle visdom
3. Den kosmiske rammen (ni verdener, verdenstreet)
4. At dette er en visjon bestilt av Odin selv`,
    },
    {
      id: 'norsk-vg2-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Ragnarok i Voluspå',
      problem: `Les denne skildringen av Ragnarok fra Voluspå (strofe 52-53) og analyser hvordan undergangen fremstilles:

**Strofe 52:**
"Solen svartner, jord synker i havet,
de blanke stjerner slukkes på himmelen;
ild velter mot himmeltreet,
høy lue leker mot himmelen selv."

**Strofe 53:**
"Hun ser oppkomme, annen gang,
jord av havet, evig grønn;
fosser faller, ørn svever
over, fisker i fjellet."`,
      solution: `**Analyse av Ragnarok-skildringen**

**Strofe 52 - Undergangen:**

Volven bruker kraftfulle, visuelle bilder for å skildre verdens ødeleggelse:

*"Solen svartner"* - Kosmisk mørke. Solen, livets kilde, forsvinner. I norrøn tro slukes solen av ulven Skoll ved Ragnarok.

*"Jord synker i havet"* - Hele verden går under. Midgard oppslukes av verdenshavet.

*"De blanke stjerner slukkes"* - All orden i kosmos bryter sammen. Selv de faste stjernene, symboler på bestandighet, forsvinner.

*"Ild velter mot himmeltreet"* - Yggdrasil, verdenstreet som holder alt sammen, rammes av ild. Muspelheims flammer (representert ved jotnen Surt) brenner verden.

**Strofe 53 - Gjenfødelsen:**

Men etter undergangen kommer fornyelse:

*"Hun ser oppkomme, annen gang, jord av havet"* - Volven ser en ny begynnelse. Som ved skapelsen stiger land opp av vannet.

*"Evig grønn"* - Den nye verden er frodig og udødelig. Ordet "evig" kontrasterer med den forgangne verdens forfall.

*"Fosser faller, ørn svever"* - Naturen gjenoppstår i harmoni. Ørnen er et positivt symbol.

**Tematikk:**

Ragnarok-skildringen viser et syklisk verdensbilde:
- Ødeleggelse er ikke slutten, men en overgang
- Etter kaos kommer ny orden
- Døden er en del av livets syklus

**Stilistiske trekk:**
- Korte, slagkraftige setninger
- Sterke visuelle bilder
- Kontrasten mellom mørke/lys, død/liv
- Naturbilder som bærer kosmisk betydning`,
    },
    {
      id: 'norsk-vg2-1-2-def-2',
      type: 'definition',
      title: 'Heltediktene - Sigurd Fåvnesbane-syklusen',
      content: `**Sigurd Fåvnesbane - helten over alle helter**

Sigurd Fåvnesbane er den fremste helten i germansk heltediktning. Hans historie finnes i flere eddadikt, i Volsungesagaen (prosa), og i den tyske Nibelungenlied.

**Hovedtrekkene i sagnet:**

**1. Sigurds ætt og oppvekst**
Sigurd er sønn av Sigmund (som eide sverdet Gram, gitt av Odin) og Hjordis. Etter farens død vokser han opp hos smeden Regin.

**2. Drapet på draken Fåvne**
Regin egger Sigurd til å drepe draken Fåvne, som vokter en stor skatt. Draken er egentlig Regins bror, forvanlet av grådighet. Sigurd dreper draken, smaker blodet og får evnen til å forstå fuglespråk.

**3. Blodet og kunnskapen**
Fuglene advarer Sigurd om at Regin vil forråde ham. Sigurd dreper Regin og tar skatten.

**4. Møtet med valkyrien**
Sigurd vekker valkyrien Brynhild/Sigrdriva fra en magisk søvn og lover henne ekteskap.

**5. Ved Gjukungehoffen**
Sigurd kommer til kong Gjukes hoff. Gjennom trolldom glemmer han Brynhild og gifter seg med Gudrun. Han hjelper Gunnar med å vinne Brynhild ved å bytte ham.

**6. Sviket og døden**
Når sannheten kommer frem, presser den sårede Brynhild Gunnars brødre til å drepe Sigurd. Sigurd dør, og Brynhild tar sitt eget liv.

**Tematikk:**
- Skjebne vs. fri vilje
- Ære og æresløshet
- Kjærlighetens ødeleggende kraft
- Grådighetens forbannelse (skatten)`,
    },
    {
      id: 'norsk-vg2-1-2-tip-1',
      type: 'tip',
      title: 'Håvamål - Odins visdomsord',
      content: `**Håvamål ("Den høyes tale")** er en samling visdomsdikt lagt i Odins munn. Diktet inneholder:

**Leveregler for vikingtidens mennesker:**
- Råd om gjestfrihet og oppførsel
- Verdien av vennskap
- Forsiktighet og måtehold
- Praktisk livsvisdom

**Kjente strofer:**

*Strofe 77:*
"Feet dør, frender dør,
en selv dør på samme vis;
men ordets glans aldri dør
for den som vinner godt ord."

*Strofe 76:*
"Feet dør, frender dør,
en selv dør på samme vis;
ett vet jeg som aldri dør:
dommen over den døde."

Disse strofene uttrykker det norrøne idealet: Siden alt er forgjengelig, er det bare ettermælet - ryktet og æren - som varer. Å vinne "godt ord" var livets høyeste mål.

**Relevans i dag:**
Håvamåls visdomsord har fortsatt gjenklang. Mange av rådene er tidløse: vær gjestfri, velg vennene dine med omhu, tenk før du handler.`,
    },
    {
      id: 'norsk-vg2-1-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Voluspa (Volvens spaadom)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_VOLUSPA}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Trymskvida (Diktet om Trym)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-2-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_TRYMSKVIDA}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-2-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Lokasenna (Lokes krangel)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-2-primaertekst-3-text',
          type: 'text',
          content: `${TEKST_VG2_LOKASENNA}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Codex Regius?',
        options: [
          'Snorre Sturlusons lærebok i skaldskap',
          'Det viktigste håndskriftet med eddadikt, fra ca. 1270',
          'En samling av islendingesagaer',
          'Et norrønt lovverk fra Alltinget',
        ],
        answer: 1,
        solution: 'Codex Regius ("Kongeboka") er det viktigste håndskriftet med eddadikt, trolig nedskrevet rundt 1270. Det inneholder 29 dikt, delt i gudedikt og heltedikt, og er vår hovedkilde til norrøn eddadiktning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket versemål er det vanligste i eddadiktene?',
        options: [
          'Drottkvætt',
          'Ljodahått',
          'Fornyrdislag',
          'Heksameter',
        ],
        answer: 2,
        solution: 'Fornyrdislag ("det gamle versemålet") er det vanligste versemålet i eddadiktene. Det kjennetegnes av to halvlinjer per vers, bundet sammen av allitterasjon (bokstavrim). Drottkvætt brukes i skaldekvad, ikke eddadikt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva eddadiktning er og hvordan den ble overlevert.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom Den eldre Edda og Den yngre Edda?',
            solution: 'Den eldre Edda (poetiske Edda) er en samling anonyme dikt bevart i Codex Regius. Den yngre Edda er skrevet av Snorre Sturluson ca. 1220 som en lærebok i skaldskap, med mye mytologisk stoff.',
          },
          {
            label: 'b',
            task: 'Forklar forskjellen mellom gudedikt og heltedikt.',
            solution: 'Gudedikt handler om de norrøne gudene, deres verden og handlinger. Heltedikt handler om menneskelige helter, ofte med overnaturlige elementer, men fokuserer på menneskelige konflikter.',
          },
          {
            label: 'c',
            task: 'Hvordan bærer eddadiktene preg av å stamme fra muntlig tradisjon?',
            solution: 'De har faste rytmemønstre, allitterasjon, gjentakelser og formler som gjør dem lettere å huske. Dialogformen skaper dramatikk egnet for fremføring.',
          },
        ],
        solution: 'Eddadiktene er vår hovedkilde til norrøn mytologi og heltesagn, overlevert muntlig før de ble nedskrevet på 1200-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Analyser formelle trekk ved eddadiktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva fornyrdislag er, og gi et eksempel på allitterasjon.',
            solution: 'Fornyrdislag er eddadiktenes vanligste versemål, med to halvlinjer per vers bundet av allitterasjon. Eksempel: "Feet dør, frender dør" - f-lyden binder linjene.',
          },
          {
            label: 'b',
            task: 'Hva er et heiti, og finn eksempler fra tekstene.',
            solution: 'Heiti er poetiske synonymer eller tilnavn. Eksempler: Valfader (Odin), Heimdalls sønner (menneskene).',
          },
        ],
        hints: ['Les gjennom teksteksemplene', 'Let etter gjentatte lyder'],
        solution: 'Formsiden av eddadiktene er nøye gjennomarbeidet med allitterasjon og poetiske omskrivinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft Voluspås verdensbilde.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva forteller Voluspå om verdens skapelse?',
            solution: 'Verden skapes fra urgapet Ginnungagap. Gudene skaper menneskene (Ask og Embla) fra trestammer. Verden ordnes med Yggdrasil i sentrum.',
          },
          {
            label: 'b',
            task: 'Hvordan fremstilles Ragnarok i diktet?',
            solution: 'Ragnarok skildres som total ødeleggelse: solen svartner, jord synker i havet, alt brenner. Men etterpå stiger en ny, grønn verden opp av havet.',
          },
          {
            label: 'c',
            task: 'Hva sier det sykliske mønsteret (skapelse-ødeleggelse-gjenfødelse) om det norrøne verdensbildet?',
            solution: 'Det viser at døden ikke er endelig, men en del av en evig syklus. Selv gudene er underlagt denne syklusen. Alt er forgjengelig, men fornyelse følger alltid ødeleggelse.',
          },
        ],
        solution: 'Voluspå presenterer et helhetlig kosmologisk system med skapelse, historie og eskatologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Sigurd Fåvnesbane-syklusen.',
        subTasks: [
          {
            label: 'a',
            task: 'Fortell kort historien om Sigurd Fåvnesbane.',
            solution: 'Sigurd vokser opp hos smeden Regin, dreper draken Fåvne, vekker valkyrien Brynhild og lover henne ekteskap. Hos Gjukungene glemmer han Brynhild gjennom trolldom og gifter seg med Gudrun. Når sannheten kommer frem, blir Sigurd drept.',
          },
          {
            label: 'b',
            task: 'Hvilke temaer er sentrale i Sigurd-diktene?',
            solution: 'Sentrale temaer: skjebne vs. fri vilje, ære og svik, kjærlighetens ødeleggende kraft, grådighetens forbannelse (skatten som bringer ulykke).',
          },
          {
            label: 'c',
            task: 'Hvordan kan vi forstå "skjebnens forbannelse" i sagnet?',
            solution: 'Skatten bærer en forbannelse som bringer død til alle som eier den. Dette symboliserer grådighet og maktbegjær. Sigurds skjebne er forutbestemt - selv trolldommen som får ham til å glemme Brynhild, er del av et større mønster.',
          },
        ],
        solution: 'Sigurd-diktene er et tragisk drama om ære, svik og uunngåelig skjebne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Trymskvida (primærteksten). Analyser det komiske i diktet.',
        subTasks: [
          {
            label: 'a',
            task: 'Gjengi handlingen i Trymskvida kort.',
            solution: 'Jotnen Trym stjeler Tors hammer Mjølner og krever gudinnen Frøya som brud. Tor må kle seg ut som Frøya og reise til Jotunheim for å hente hammeren tilbake. Under bryllupsfesten avslører Tors oppførsel nesten forkleningen, men Loke redder situasjonen med smarte bortforklaringer.',
          },
          {
            label: 'b',
            task: 'Hva gjør diktet komisk? Pek på konkrete eksempler.',
            solution: 'Den mektige tordenguden Tor kler seg i brudekjole og brudeslør. Kontrasten mellom Tors grovhet og det feminine kostymet er komisk. Tor spiser en hel okse og drikker tre kar mjød under bryllupsmåltidet, og Loke må bortforklare det. De store øynene hans skremmer brudgommen.',
          },
          {
            label: 'c',
            task: 'Hva kan humorens funksjon i diktet ha vært?',
            solution: 'Humoren gjør diktet underholdende for publikum, men kan også ha en dypere funksjon: den avmystifiserer gudene og viser dem som nære og menneskelige. Latteren styrker fellesskapet. Den viser også at kløkt (Lokes) kan være like viktig som styrke (Tors).',
          },
        ],
        hints: ['Se etter kontraster mellom forventning og virkelighet.'],
        solution: 'Trymskvida er et av de mest underholdende eddadiktene, og viser at norrøn litteratur også rommet humor og selvironi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Lokasenna (primærteksten). Hvilken rolle spiller Loke i norrøn mytologi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler Lokasenna om?',
            solution: 'Lokasenna handler om at Loke kommer til gudenes gjestebud og fornærmer dem en etter en. Han avslører deres hemmeligheter, skam og svik. Diktet ender med at Tor truer Loke til stillhet, og Loke fanges og bindes.',
          },
          {
            label: 'b',
            task: 'Beskriv Lokes rolle i norrøn mytologi. Er han ond eller god?',
            solution: 'Loke er en tricksterfigur - verken helt ond eller helt god. Han hjelper gudene flere ganger (f.eks. med å skaffe Tors hammer, Odins hest Sleipner), men skaper også problemer (Balders død). Han bryter regler og utfordrer det etablerte. Han representerer kaos og forandring.',
          },
        ],
        hints: ['Tenk på begrepet "trickster" - en figur som finnes i mange mytologier.'],
        solution: 'Loke er en av de mest komplekse skikkelsene i norrøn mytologi, og illustrerer at norrøne guder ikke er endimensjonale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les følgende strofer fra Håvamål og analyser dem:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva uttrykker strofene "Feet dør, frender dør..." om det norrøne verdenssynet?',
            solution: 'Strofene uttrykker at alt er forgjengelig - eiendom (fe), slekt (frender), livet selv. Det eneste som varer, er ettermælet - ryktet og æren man etterlater seg.',
          },
          {
            label: 'b',
            task: 'Hvorfor var ettermælet så viktig i norrøn kultur?',
            solution: 'I en kultur uten tro på personlig udødelighet var ettermælet den eneste form for "evig liv". Å bli husket for gode gjerninger var livets høyeste mål.',
          },
          {
            label: 'c',
            task: 'Er denne tanken relevant i dag? Begrunn svaret.',
            solution: 'Diskusjon kan fokusere på: Vi husker fortsatt historiske personer for deres gjerninger. Sosiale medier har skapt nytt fokus på "image" og ettermæle. Samtidig har vi andre forestillinger om liv og død.',
          },
        ],
        hints: ['Tenk på hva som var viktig for vikingene', 'Sammenlign med vår tids verdier'],
        solution: 'Håvamål uttrykker tidløs visdom om livets forgjengelighet og betydningen av hvordan vi lever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign et eddadikt med en moderne tekst som bruker norrøne motiver.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en moderne tekst (film, bok, sang, spill) som bruker norrøne motiver.',
            solution: 'Eksempler: Marvel-filmene om Thor, TV-serien Vikings, Tolkiens verk, videospillet God of War, Wardruna eller annen musikk.',
          },
          {
            label: 'b',
            task: 'Sammenlign hvordan motivene brukes i den moderne teksten vs. eddadiktet.',
            solution: 'Analysen bør se på: Hva er bevart? Hva er endret? Hvorfor gjøres endringene? Hva sier dette om vår tids forhold til mytene?',
          },
          {
            label: 'c',
            task: 'Diskuter hva som går tapt og hva som vinnes når gamle myter gjenfortelles i ny form.',
            solution: 'Tapt: Ofte nyanser, det opprinnelige verdensbildet, kulturell kontekst. Vunnet: Tilgjengelighet, nye tolkninger, relevans for nye generasjoner.',
          },
        ],
        solution: 'Sammenligningen viser hvordan myter transformeres og lever videre i nye former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en sammenhengende tekst (400-500 ord) der du drøfter følgende påstand: "Voluspå er det viktigste diktet i norrøn litteratur."',
        hints: [
          'Hva gjør Voluspå spesielt sammenlignet med andre eddadikt?',
          'Tenk på diktet som kosmologisk kilde, litterært verk og kulturhistorisk dokument.',
          'Inkluder motargumenter: Hva med Håvamål, sagaene eller skaldediktningen?',
        ],
        solution: 'En god drøfting bør belyse: (1) Voluspås unike posisjon som helhetlig fremstilling av norrøn kosmologi (skapelse, historie, Ragnarok, gjenfødelse), (2) diktets litterære kvalitet og poetiske kraft, (3) dets betydning som kilde til norrøn religion. Motargumenter kan peke på Håvamåls praktiske visdom, sagaenes bredde, eller at det er problematisk å kåre ett verk som "viktigst". Konklusjonen bør nyansere og vise selvstendig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Skaldekvad og kenninger
// ============================================================================

export const CHAPTER_NORSK_VG2_1_3: TextbookChapter = {
  id: 'norsk-vg2-1-3',
  courseId: 'norsk-vg2',
  chapterNumber: '1.3',
  title: 'Skaldekvad og kenninger',
  description: 'Utforsk skaldediktningens kunstferdige språk med kenninger og kompliserte verseformer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
  ],
  content: [
    {
      id: 'norsk-vg2-1-3-intro',
      type: 'text',
      content: `## Skaldediktningen - ordkunstnere ved kongenes hoff

Mens eddadiktene er anonyme, ble skaldedikt skrevet av navngitte diktere - skaldene. Skaldene var profesjonelle ordkunstnere som virket ved kongenes hoff, og diktene deres ble husket og overlevert sammen med skaldenes navn.

**Skaldenes rolle**

Skaldene hadde en viktig samfunnsfunksjon. De var:
- **Hirdmenn:** Ofte tilknyttet kongens hird (følge)
- **Historieskrivere:** Kvadene dokumenterte kongens bedrifter
- **Underholdere:** Fremførte dikt ved gjestebud og høytider
- **Diplomater:** Kunne formidle budskap gjennom dikt

Å være skald krevde både kunstnerisk talent og politisk kløkt. Et godt kvad kunne sikre skaldens posisjon og rikdom, mens et dårlig - eller fornærmende - kvad kunne koste ham livet.

**Hoff-diktning**

Skaldedikt ble ofte komponert til ære for konger og stormenn. De mest typiske formene var:

*Drapa:* Et lengre lovkvad med refreng (stev), gjerne 20-50 strofer. Drapaen var den mest prestisjefylte formen.

*Flokkr:* Et kortere lovkvad uten refreng.

*Lausavisa:* En enkeltstående strofe, ofte improvisert i en bestemt situasjon.

**Skaldenes kunst**

Skaldediktene er langt mer kompliserte enn eddadiktene. De kjennetegnes av:
- Innviklet versemål (særlig drottkvætt)
- Rikelig bruk av kenninger (poetiske omskrivinger)
- Heiti (poetiske synonymer)
- Kunstferdig ordstilling med leddsetninger flettet inn i hverandre

Denne kompleksiteten var tilsiktet. Jo vanskeligere diktet var å forstå, desto mer imponerende var skaldens kunst. Samtidig fungerte kompleksiteten som en form for kodering - diktet kunne bare fullt ut forstås av de innvidde.

**Berømte skalder**

Mange skalder er kjent ved navn. Blant de mest berømte er:

*Bragi den gamle (800-tallet):* Regnes som den første skalden. Gav navn til diktekunsten (bragr).

*Egil Skallagrimsson (ca. 910-990):* Islandsk skald og vikinghøvding. Hovedpersonen i Egils saga. Hans *Sonatorrek* ("Sønnetapet") er et gripende dikt om sorgen over å miste sønner.

*Øyvind Finnsson skaldespiller (900-tallet):* Hirdskald hos flere norske konger. Diktet *Hákonarmál* om Håkon den godes fall.

*Sigvat Tordsson (ca. 995-1045):* Olav den helliges fremste skald. Kjent for sin diplomatiske bruk av diktkunsten.`,
    },
    {
      id: 'norsk-vg2-1-3-def-1',
      type: 'definition',
      title: 'Kenningen - skaldediktningens varemerke',
      content: `**Hva er en kenning?**

En kenning er en poetisk omskriving som erstatter et enkelt ord med en sammensetning, vanligvis av typen "X av Y" eller "Ys X". Kenningen er skaldediktningens viktigste stilistiske virkemiddel.

**Hvordan fungerer kenninger?**

En kenning bygger på en sammenligning eller assosiasjon:
- **Grunnord:** Det som egentlig omtales
- **Bestemmelsesledd:** Det som definerer eller modifiserer

Eksempel: "havets hest" = skip
(Skipet beveger seg over havet som en hest over land)

**Vanlige kenningtyper:**

**For MANN/KRIGER:**
- "Odins tre" (mannen som det høye treet)
- "Brynjens bærer"
- "Kampens ulv"
- "Sverdets svinger"

**For KVINNE:**
- "Skattens dis" (dis = gudinne)
- "Brynjes Frøya"
- "Mjødens bærer"

**For SKIP:**
- "Havets hest"
- "Bølgenes ski"
- "Sjøens vogn"

**For KAMP:**
- "Sverdenes dans"
- "Våpenstormen"
- "Odins vær"

**For GULL:**
- "Sirs hår" (etter myten om Lokes gave til Sif)
- "Fåvnes leie" (draken som lå på gullet)
- "Armens ild"

**For BLOD:**
- "Kampens dugg"
- "Ørnesø"
- "Ulvevin"

**Utvidede kenninger:**

Kenninger kan utvides i flere ledd:
- "Havet" → "hvalen" vei" → "Hvalens veis hest" = SKIP
- "Gullet" → "Fåvnes leie" → "Fåvnes leies utdeler" = GAVMILD KONGE`,
    },
    {
      id: 'norsk-vg2-1-3-def-2',
      type: 'definition',
      title: 'Drottkvætt - skaldediktningens fremste versemål',
      content: `**Drottkvætt** ("hoffversemål") er det vanligste og mest prestisjefylte versemålet i skaldediktning.

**Strukturen:**

Hver strofe har 8 linjer (4 halvstrofer à 2 linjer):
- Hver linje har 6 stavelser
- 3 av stavelsene er trykksterke
- Hver linje slutter på en trykkletter stavelse etterfulgt av en trykksvak (troké-avslutning)

**Allitterasjon (bokstavrim):**
- I hver halvlinje (2 linjer) skal minst 2 stavelser allitterere
- Den første trykksterke stavelsen i linje 2 bestemmer hvilken lyd som skal rimes

**Innrim (hending):**

Det som særlig utmerker drottkvætt, er innrimene:
- *Skothending* (halvrim) i oddetallslinjer: Vokalene er like, konsonantene forskjellige (eks: "mund - land")
- *Aðalhending* (helrim) i partallslinjer: Både vokal og etterfølgende konsonant er like (eks: "gull - full")

**Eksempel:**

*Úlfr rennr á apalgrýti* (Ulv løper på epletre-grusen)

Her har vi:
- 6 stavelser
- Allitterasjon på "r" (rennr, grýti)
- Rytme med veksling mellom trykk og trykksvak

**Kompleksiteten:**

Kravet om å oppfylle alle disse reglene samtidig - pluss bruke kenninger - gjorde drottkvætt ekstremt krevende å mestre. Bare de beste skaldene behersket det fullt ut.`,
    },
    {
      id: 'norsk-vg2-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en skaldekvad-strofe',
      problem: `Analyser denne strofen fra Egil Skallagrimssons *Sonatorrek* (ca. 960), der han sørger over sønnen som druknet:

Oversettelse:
"Hardt har Odin handlet mot meg;
Havets herre tok min sønn.
Bittert rammet bølgens gud meg,
brøt meg ned med dette tungsinn."

(Forenklet moderne oversettelse som bevarer noe av strukturen)`,
      solution: `**Analyse av strofen fra Sonatorrek**

**Bakgrunn:**
Egil Skallagrimsson diktet Sonatorrek ("Sønnetapet") etter at hans andre sønn, Bodvar, druknet. Diktet er et av de mest personlige og følelsesladede i norrøn litteratur.

**Kenningene i strofen:**

*"Havets herre"* = Ægir/havet personifisert, eller muligens Odin (som hersker over alt)

*"Bølgens gud"* = Samme som over - havet eller Odin

Merk at Egil retter sin klage mot Odin, ikke bare havet. Dette gir diktet en dimensjon av opprør mot skjebnen og gudene selv.

**Tematikk:**

- **Sorg:** Den uutholdelige smerten ved å miste et barn
- **Opprør:** Egil anklager Odin direkte - noe svært dristig
- **Maktesløshet:** Selv den sterke krigeren Egil er "brøtt ned"

**Stilistiske trekk:**

- Gjentakelse av hav-motivet forsterker inntrykket av at havet tok sønnen
- Kontrasten mellom Egils tidligere styrke og nåværende svakhet
- Den personlige tonen - uvanlig direkte i skaldediktning

**Diktet som helhet:**

Sonatorrek er unikt fordi det uttrykker personlig sorg, noe skaldedikt vanligvis ikke gjorde. Egil vurderer selvmord, men konkluderer med at han må leve videre fordi diktkunsten - gitt av Odin - gjør sorgen tålelig. Slik forsones han til slutt med guden han anklaget.

**Kunstnerisk nivå:**

Selv i dyp sorg opprettholder Egil det kompliserte versemålet. Dette demonstrerer hans beherskelse og viser at diktkunsten er hans måte å håndtere krisen på.`,
    },
    {
      id: 'norsk-vg2-1-3-tip-1',
      type: 'tip',
      title: 'Hvordan tolke kenninger',
      content: `**Strategi for å forstå kenninger:**

1. **Identifiser grunnordet:** Hva beskrives egentlig?
   - "Havets hest" → grunnord er "hest"

2. **Se på bestemmelsesledd:** Hva forteller det om grunnordet?
   - "Havets" → dette "hestet" hører til havet

3. **Finn sammenligningen:** Hvilken egenskap deles?
   - Hesten løper over land, dette løper over havet
   - Svar: SKIP

**Vanlige mønstre:**

*X-ets tre/bærer + våpen/rustning* = KRIGER
"Brynjens tre" = mann/kriger

*X-ets Y hvor X = vannmasse, Y = ridedyr/fartøy* = SKIP
"Bølgenes ski" = skip

*X-ets dugg/væske + kamp* = BLOD
"Sverdets dugg" = blod

*X-ets ild + arm/kropp* = GULL/SMYKKER
"Armens ild" = gull (ring)

**Konteksten hjelper:**
Samme kenning kan ha ulik betydning i forskjellige sammenhenger. "Havets ild" kan være gull (som glitrer som ild) eller en meteorologisk referanse.`,
    },
    {
      id: 'norsk-vg2-1-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Egil Skallagrimsson - Sonatorrek (Soennetapet)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-3-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_SONATORREK}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-3-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Bragi Boddason - Ragnarsdraapa',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-3-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_RAGNARSDRAAPA}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en kenning?',
        options: [
          'Et norrønt dikterversemål med 8 linjer',
          'En poetisk omskriving som erstatter et ord med en sammensetning',
          'Et tilnavn for en norrøn gud',
          'En type saga om islandske høvdinger',
        ],
        answer: 1,
        solution: 'En kenning er en poetisk omskriving som erstatter et enkelt ord med en sammensetning, vanligvis av typen "X av Y". For eksempel betyr "havets hest" skip, fordi skipet beveger seg over havet som en hest over land.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner drottkvætt?',
        options: [
          'Det er et enkelt versemål med to linjer per strofe',
          'Det er et versemål brukt bare i eddadikt',
          'Det er et komplisert versemål med 8 linjer, allitterasjon og innrim',
          'Det er en prosastil brukt i sagalitteraturen',
        ],
        answer: 2,
        solution: 'Drottkvætt ("hoffversemålet") er det mest prestisjefylte versemålet i skaldediktning. Hver strofe har 8 linjer med 6 stavelser, og det krever allitterasjon, innrim (hending) og riktig rytme. Det var ekstremt krevende å mestre.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva skaldediktning er og hvordan den skiller seg fra eddadiktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken rolle hadde skaldene i det norrøne samfunnet?',
            solution: 'Skaldene var profesjonelle diktere ved kongenes hoff. De dokumenterte kongens bedrifter, underholdt ved gjestebud, og kunne fungere som diplomater. Deres dikt fungerte som historiske kilder.',
          },
          {
            label: 'b',
            task: 'Hva er de viktigste forskjellene mellom skaldedikt og eddadikt?',
            solution: 'Skaldedikt: Av navngitte diktere, komplisert verseform, mange kenninger, ofte lovprisning av konger. Eddadikt: Anonyme, enklere verseform, mytologisk/heroisk innhold.',
          },
          {
            label: 'c',
            task: 'Nevn minst to berømte skalder og forklar kort hvem de var.',
            solution: 'Egil Skallagrimsson: Islandsk skald og viking, skrev det personlige diktet Sonatorrek. Sigvat Tordsson: Olav den helliges hirdskald, kjent for diplomatisk bruk av diktkunsten.',
          },
        ],
        solution: 'Skaldediktningen var en profesjonell kunstform knyttet til kongemakten, med navngitte utøvere og komplisert form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tolk følgende kenninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "bølgens hest"?',
            solution: 'Skip. Hesten "rir" over bølgene som en hest over land.',
          },
          {
            label: 'b',
            task: 'Hva betyr "kampens ulv"?',
            solution: 'Kriger. Ulven jakter i kampen, krigeren jakter fienden.',
          },
          {
            label: 'c',
            task: 'Hva betyr "armens ild"?',
            solution: 'Gull (ring). Gullet lyser/brenner som ild på armen.',
          },
          {
            label: 'd',
            task: 'Hva betyr "sverdenes storm"?',
            solution: 'Kamp/slag. Sverdene fyker som i en storm.',
          },
        ],
        hints: ['Se på sammenligningsmønsteret', 'Hvilken egenskap deles?'],
        solution: 'Kenninger bygger på analogier og sammenligninger som var innlysende for samtidens publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag egne kenninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en kenning for "bil" i norrøn stil.',
            solution: 'Eksempler: "Veiens hest", "Asfaltens skip", "Bensinens rytter".',
          },
          {
            label: 'b',
            task: 'Lag en kenning for "mobiltelefon".',
            solution: 'Eksempler: "Lommens vindu til verden", "Ordenes bærer", "Nettets portal".',
          },
          {
            label: 'c',
            task: 'Lag en kenning for "fotball".',
            solution: 'Eksempler: "Gressets kamp", "Beinets lek", "Målenes jakt".',
          },
        ],
        hints: ['Tenk på karakteristiske egenskaper', 'Hvilke sammenligninger passer?'],
        solution: 'Ved å lage egne kenninger forstår man bedre hvordan de fungerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser versemålet drottkvætt.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar strukturen i drottkvætt: antall linjer, stavelser og allitterasjon.',
            solution: '8 linjer per strofe, 6 stavelser per linje, 3 trykksterke per linje. Minst 2 stavelser skal allitterere i hver halvlinje.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom skothending og aðalhending?',
            solution: 'Skothending (halvrim): Vokalene er like, konsonantene forskjellige (eks: mund-land). Aðalhending (helrim): Både vokal og etterfølgende konsonant er like (eks: gull-full).',
          },
          {
            label: 'c',
            task: 'Hvorfor tror du skaldene brukte et så komplisert versemål?',
            solution: 'Det demonstrerte skaldisk dyktighet, imponerte publikum og oppdragsgivere, fungerte som en form for "kodering" som bare innvidde fullt ut forsto, og gav dikteren høyere status.',
          },
        ],
        solution: 'Drottkvætts kompleksitet var et bevisst valg som demonstrerte skaldisk kunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Sonatorrek (primærteksten). Analyser Egil Skallagrimssons uttrykk for sorg.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler Sonatorrek om?',
            solution: 'Diktet handler om Egils sorg over sønnen Bodvar som druknet. Egil anklager Odin, vurderer selvmord, men forsones til slutt med guden gjennom diktkunsten.',
          },
          {
            label: 'b',
            task: 'Hvorfor er diktet uvanlig i skaldediktningen?',
            solution: 'Det uttrykker personlig sorg og følelser, noe skaldedikt vanligvis ikke gjorde. Egil er åpen om svakhet og fortvilelse, og han anklager gudene direkte.',
          },
          {
            label: 'c',
            task: 'Hvordan fungerer diktkunsten som trøst for Egil?',
            solution: 'Diktkunsten er en gave fra Odin. Ved å dikte kan Egil uttrykke og bearbeide sorgen. Selv om Odin tok sønnen, gav han også kunsten som gjør sorgen tålelig.',
          },
        ],
        hints: ['Tenk på forholdet mellom Egil og Odin', 'Hva betyr diktkunsten for ham?'],
        solution: 'Sonatorrek viser hvordan kunst kan fungere som terapi og meningsskaping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Ragnarsdraapa (primærteksten). Analyser diktet som eksempel på en drapa.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en drapa, og hvordan skiller den seg fra andre skaldekvadformer?',
            solution: 'En drapa er et lengre lovkvad med refreng (stev), gjerne 20-50 strofer. Den var den mest prestisjefylte formen. Til forskjell fra en flokkr (uten stev) og lausavisa (enkeltstrofe) er drapaen et planlagt og omfattende dikt.',
          },
          {
            label: 'b',
            task: 'Finn eksempler på kenninger i Ragnarsdraapa og forklar hva de betyr.',
            solution: 'Eleven finner kenninger fra teksten og forklarer dem ved hjelp av kenningmønstrene fra definisjonsblokken. Typiske eksempler er kenninger for kriger, skip, kamp og gull.',
          },
        ],
        solution: 'Ragnarsdraapa viser drapaen som kunstform med dens rikdom av kenninger og strukturelle oppbygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign skaldediktningens kenninger med moderne poetiske virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har kenninger til felles med moderne metaforer og billedspråk?',
            solution: 'Begge erstatter direkte uttrykk med billedlige omskrivinger. Begge bygger på sammenligninger og assosiasjoner. Begge krever at leseren tolker og dekoder meningen.',
          },
          {
            label: 'b',
            task: 'Hva skiller kenninger fra moderne metaforer?',
            solution: 'Kenninger fulgte faste mønstre og konvensjoner (f.eks. "havets hest" = skip). De var en del av et system. Moderne metaforer er ofte mer individuelle og uforutsigbare. Kenninger var mer kodifiserte.',
          },
          {
            label: 'c',
            task: 'Finn eksempler på "moderne kenninger" i dagligtale eller slang.',
            solution: 'Eksempler: "Det hvite hus" = den amerikanske presidenten, "Jernhesten" = tog/lokomotiv, "Det grønne skiftet" = bærekraftig omstilling, "Nettroll" = person som provoserer på internett.',
          },
        ],
        solution: 'Kenninger er et tidlig eksempel på noe mennesker alltid har gjort: bruke billedspråk for å forstå og beskrive verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft skaldens rolle i norrønt samfunn sammenlignet med artisters rolle i dag.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv skaldens posisjon og funksjon i det norrøne samfunnet.',
            solution: 'Skalden var hirdmann, historiker, underholder og diplomat. Diktene dokumenterte kongens bedrifter og sikret hans ettermæle. Skalden hadde en offisiell og høytstående posisjon.',
          },
          {
            label: 'b',
            task: 'Hvilke moderne artister eller kunstnere har en lignende rolle i samfunnet?',
            solution: 'Mulige sammenligninger: Rappere og hiphop-artister (som formidler samfunnskritikk og identitet gjennom ordkunst), hoffortografer/offisielle portrettmalere, nasjonalpoeter. Media-kommentatorer som former offentlig mening.',
          },
          {
            label: 'c',
            task: 'Hva er likt og ulikt mellom skaldens situasjon og en moderne artists?',
            solution: 'Likt: Begge lever av sin kunst, begge former offentlig fortelling, begge har makt gjennom ordene. Ulikt: Skalden var knyttet til en bestemt oppdragsgiver, moderne artister har mer frihet. Skalden risikerte livet ved feil ord, moderne artister har ytringsfrihet.',
          },
        ],
        solution: 'Sammenligningen viser at kunsten alltid har hatt en samfunnsfunksjon, men at konteksten endrer betingelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort dikt (4-8 linjer) der du bruker minst tre kenninger og allitterasjon. Forklar deretter kenningene og den formelle strukturen.',
        hints: [
          'Velg et tema du kjenner godt, f.eks. skolelivet, naturen eller en sport.',
          'Bruk kenningmønstrene fra definisjonsblokken som inspirasjon.',
          'Prøv å få inn bokstavrim (allitterasjon) mellom ord i samme linje.',
        ],
        solution: 'Eleven skriver et eget dikt med minst tre kenninger og allitterasjon. Eksempel: "Kunnskapens kilde (skolen) / kaller oss tidlig hver morgen / Tankens tog (tankene) / tordner gjennom / Visdommens haller (klasserommet) / der vishet vokser." Forklaringen identifiserer kenningene og peker på allitterasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Sagalitteraturen
// ============================================================================

export const CHAPTER_NORSK_VG2_1_4: TextbookChapter = {
  id: 'norsk-vg2-1-4',
  courseId: 'norsk-vg2',
  chapterNumber: '1.4',
  title: 'Sagalitteraturen',
  description: 'Utforsk den norrøne prosalitteraturen med islendingesagaer og kongesagaer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-1-4-intro',
      type: 'text',
      content: `## Sagalitteraturen - prosa av verdensklasse

Sagaene regnes som noe av verdenslitteraturens fineste prosa. Disse fortellingene, skrevet på Island på 1200- og 1300-tallet, kombinerer dramatisk spenning med psykologisk dybde og lakonisk stil. De har inspirert forfattere fra Walter Scott til Tolkien, og fortsetter å fascinere lesere i dag.

**Hva er en saga?**

Ordet "saga" kommer fra det norrøne verbet "segja" (å si, fortelle). En saga er altså en fortelling - opprinnelig muntlig, senere nedskrevet. Sagaene er prosatekster som forteller om personer og hendelser, ofte med innlagte kvad (strofer fra skaldekvad).

**Sagaens opprinnelse**

Sagaene bygger på en muntlig fortellertradisjon. I generasjoner ble historiene fortalt og gjenfortalt på Island før de ble skrevet ned. Skriftliggjøringen skjedde primært på 1200- og 1300-tallet, i en periode med stor litterær aktivitet på Island.

Hvorfor akkurat Island? Flere faktorer spilte inn:
- Islendingene hadde utviklet et sterkt nasjonalt fellesskap rundt Alltinget
- De ønsket å dokumentere sin historie og sine forfedre
- Kirkens skriftkultur hadde slått rot
- Samfunnet var stabilt nok til at litterær produksjon var mulig

**Sagaenes troverdighet**

Et sentralt spørsmål er: Hvor historisk korrekte er sagaene? Svaret er komplisert:
- Sagaene inneholder utvilsomt historisk materiale
- Men de ble nedskrevet 200-300 år etter hendelsene de beskriver
- Forfatterne hadde litterære og politiske motiver
- Muntlig tradisjon endrer seg over tid

Moderne forskere behandler sagaene som verdifull, men kildekritisk problematisk historisk kilde. Litterært sett er de mesterverker uavhengig av historisk nøyaktighet.

**Sagastilen**

Sagaene har en distinkt stil som skiller dem fra annen middelaldersk litteratur:

*Nøktern fortellerstil:* Forfatteren holder seg i bakgrunnen og kommenterer sjelden. Handlingen presenteres objektivt, uten moralske dommer.

*"Show, don't tell":* Karakterene avslører seg gjennom handlinger og dialog, ikke gjennom forfatterens beskrivelser.

*Understatement:* Store følelser og dramatiske hendelser beskrives med tilbakeholdenhet. "Han tok det tungt," kan bety dyp fortvilelse.

*Fatalisme:* Karakterene aksepterer sin skjebne med verdighet. De kan forutse sin egen død, men møter den modig.

*Dialog:* Sagaene er rike på dialog, ofte lakonisk og ladet med underforstått mening.`,
    },
    {
      id: 'norsk-vg2-1-4-def-1',
      type: 'definition',
      title: 'Sagasjangre',
      content: `**De viktigste sagasjangerne:**

**1. Islendingesagaer (Islendingasogur)**
Handler om islendinger i "sagatiden" (ca. 930-1030). De mest berømte eksemplene:
- *Njåls saga* - den lengste og mest komplekse
- *Egils saga* - om skalden Egil Skallagrimsson
- *Laksdøla saga* - tragisk kjærlighetshistorie
- *Gisles saga* - om en fredløs
- *Grettis saga* - om Nordens sterkeste mann

**2. Kongesagaer (Konungasogur)**
Handler om skandinaviske, særlig norske, konger:
- *Heimskringla* - Snorre Sturlusons samling om norske konger
- *Sverres saga* - om kong Sverre (delvis selvbiografisk)
- *Fagrskinna* - alternativ kongesagasamling

**3. Fornaldersagaer (Fornaldarsogur)**
Handler om helter fra "forntiden" (før sagatiden):
- *Volsungasaga* - om Sigurd Fåvnesbane (prosaversjon)
- *Ragnar Lodbroks saga*
- *Hervars saga*

**4. Samtidssagaer (Samtidarsogur)**
Handler om hendelser i forfatterens egen tid:
- *Sturlunga saga* - om maktkampene på 1200-tallets Island

**5. Biskopssagaer (Biskupasogur)**
Om islandske biskoper og kirkehistorie.

**6. Riddarasagaer**
Oversettelser og bearbeidelser av europeisk ridderlitteratur.`,
    },
    {
      id: 'norsk-vg2-1-4-def-2',
      type: 'definition',
      title: 'Litterære trekk ved sagaene',
      content: `**Sagastilen - kjennetegn:**

**Fortellerteknikk:**
- **Objektiv forteller:** Holder seg i bakgrunnen, kommenterer ikke
- **Kronologisk:** Handlingen følger tidslinjen
- **Innlagte kvad:** Skaldekvad siteres som "bevis" eller høydepunkter

**Dialog:**
- Ofte kort og ladet med underforstått mening
- Avslører karakter gjennom tale
- Berømte replikker huskes og siteres

**Karakterskildring:**
- Indirekte - gjennom handling og dialog
- Fyldige presentasjoner ved første opptreden
- Karakterene er komplekse, ikke endimensjonale

**Tema og verdier:**
- **Ære og skam:** Sentrale drivkrefter
- **Ætteslojalitet:** Plikten til å hevne sine
- **Skjebne:** Aksept av det uunngåelige
- **Lov og rett:** Tingssystemet som ramme

**Strukturelle mønstre:**
- **Forutanelser:** Drømmer, varsler, spådommer
- **Eskalering:** Konflikter bygges gradvis opp
- **Blodshevn:** Vold avler vold gjennom generasjoner
- **Forsoning:** Ofte kun mulig gjennom ekteskap eller forlik på tinget

**"Sagaens isfjell":**
Det som sies, er bare toppen av isfjellet. Mye ligger under overflaten og må tolkes av leseren.`,
    },
    {
      id: 'norsk-vg2-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av utdrag fra Njåls saga',
      problem: `Les dette utdraget fra Njåls saga, der Gunnar fra Lidarende dør:

"Da sa Gunnar: 'Hvor ille de farer med meg, og vender meg to kvelder etter hverandre mot mitt eget husstrev!' Og med dette kastet han seg ut og hugget av [fienden] foten over kneet og drepte enda en annen mann, før han selv falt død ned, etter å ha fått mange sår."

Analyser utdraget med fokus på sagastilen.`,
      solution: `**Analyse av Gunnars død**

**Bakgrunn:**
Gunnar fra Lidarende er en av sagalitteraturens mest beundrede helter - vakker, sterk, dyktig med våpen, og god. Han er dømt fredløs og blir angrepet i sitt eget hjem av fiender.

**Sagastilens kjennetegn i utdraget:**

**1. Understatement:**
"Hvor ille de farer med meg" - dette sier Gunnar mens han er i kamp mot overmakten og har fått mange sår. Den beherskede tonen kontrasterer med situasjonens dramatikk.

**2. Objektiv fortelling:**
Forfatteren beskriver hendelsene uten å kommentere eller moralisere. Vi får vite at Gunnar "hugget av foten over kneet" og "drepte enda en annen mann" - helt nøkternt.

**3. Handling avslører karakter:**
Gunnars heltemot og ferdigheter demonstreres gjennom det han gjør, ikke gjennom forfatterens vurderinger.

**4. Lakonisk avslutning:**
"før han selv falt død ned, etter å ha fått mange sår" - Gunnars død beskrives helt uten sentimentalitet.

**Den underforståtte meningen:**

*"Mitt eget husstrev"* - Gunnar dør i sitt eget hjem, sveket av manglende støtte fra samfunnet. Buestrengen, laget av konas hår, ryker - hun nektet å gi ham nytt hår da han ba om det. Ordene rommer bitterhet over dette sviket.

**Heltens død:**
Selv døende kjemper Gunnar videre og dreper flere fiender. Dette bekrefter hans status som helt - han dør kampende, ikke flyktende eller tiggende.

**Virkningen:**
Den nøkterne stilen forsterker tragedien. Ved å ikke fortelle oss hvordan vi skal føle, lar sagaforfatteren leseren fylle inn selv. Resultatet er mer gripende enn sentimentale utbrodringer ville vært.`,
    },
    {
      id: 'norsk-vg2-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Snorre Sturluson og Heimskringla',
      problem: `Forklar hvem Snorre Sturluson var og hva som gjør Heimskringla til et viktig verk.`,
      solution: `**Snorre Sturluson (1179-1241)**

Snorre er den mest berømte islandske forfatteren fra middelalderen. Han var ikke bare forfatter, men også:
- Mektig høvding og lovkyndig
- To ganger lovsiemann på Alltinget
- Involvert i Islands politiske maktkamper
- Drept i en politisk feide i 1241

**Snorres verker:**

**Heimskringla ("Jordskiva")**
En samling sagaer om de norske kongene fra mytisk urtid til 1177. Navnet kommer fra åpningsordene "Kringla heimsins" (jordskiva).

**Snorre-Edda (Den yngre Edda)**
En lærebok i skaldskap som inneholder mye mytologisk stoff.

**Muligens Egils saga**
Mange forskere mener Snorre skrev denne sagaen om sin forfader.

**Heimskringlas betydning:**

**1. Historisk kilde:**
Vår viktigste kilde til norsk middelalderhistorie. Snorre brukte eldre sagaer, skaldekvad og muntlig tradisjon.

**2. Litterært mesterverk:**
Dramatisk oppbygging, levende karakterskildringer, spennende scener.

**3. Snorres metode:**
- Kritisk holdning til kilder
- Prioriterer skaldekvad som bevis (vanskelig å endre vers)
- Vil fortelle hva som "virkelig" skjedde

**4. Kjente deler:**

*Ynglingesaga:* Om den mytiske Ynglinge-ætten
*Olav den helliges saga:* Den lengste og mest detaljerte
*Harald Hardrådes saga:* Om den siste vikingkongen

**Snorres historiesyn:**
Snorre var interessert i årsak og virkning, i hvorfor ting skjedde. Han psykologiserer og forklarer handlinger ut fra menneskelige motiver.

**Berømt sitat:**
"Med lov skal land byggjast" - fra prologen, uttrykker Snorres syn på samfunn og styring.`,
    },
    {
      id: 'norsk-vg2-1-4-tip-1',
      type: 'tip',
      title: 'Hvordan lese sagaer',
      content: `**Tips for å få mest ut av sagalesning:**

**1. Les med kontekst:**
Sagaene ble skrevet for et publikum som kjente bakgrunnen. Skaff deg kunnskap om:
- Det norrøne samfunnet
- Ættekonflikter og blodhevn
- Tingssystemet
- Religiøse forestillinger

**2. Vær oppmerksom på understatement:**
Når sagaen sier at noen "tok det tungt", kan det bety dyp fortvilelse. Les mellom linjene.

**3. Følg forutanelsene:**
Drømmer, varsler og spådommer varsler ofte om fremtidige hendelser. Legg merke til dem.

**4. Se dialogens funksjon:**
Replikker er sjelden tilfeldige. De avslører karakter og driver handlingen.

**5. Forstå æresbegrepet:**
Mye av handlingen drives av ære og skam. Fornærmelser må hevnes, løfter holdes.

**6. Aksepter kompleksiteten:**
Sagakarakterer er ikke endimensjonale helter eller skurker. De handler ut fra forståelige motiver, selv når de gjør grusomme ting.

**7. Noter navnene:**
Sagaene har mange personer. Det kan hjelpe å lage en oversikt.`,
    },
    {
      id: 'norsk-vg2-1-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Njaals saga - Gunnars siste kamp',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-4-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_NJAALS_SAGA_GUNNAR}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-4-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Egils saga (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-4-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_EGILS_SAGA}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr ordet "saga"?',
        options: [
          'En poetisk fortelling om gudene',
          'Et lengre lovkvad med refreng',
          'En fortelling - fra det norrøne verbet "segja" (å si)',
          'En lovtekst fra Alltinget',
        ],
        answer: 2,
        solution: 'Ordet "saga" kommer fra det norrøne verbet "segja" (å si, fortelle). En saga er altså bokstavelig talt en fortelling. Sagaene er prosatekster som ble overlevert muntlig før de ble skrevet ned på Island på 1200- og 1300-tallet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem skrev Heimskringla?',
        options: [
          'Egil Skallagrimsson',
          'Ari den frode',
          'Snorre Sturluson',
          'Sigvat Tordsson',
        ],
        answer: 2,
        solution: 'Snorre Sturluson (1179-1241) skrev Heimskringla, en samling sagaer om de norske kongene fra mytisk urtid til 1177. Snorre var den mest berømte islandske forfatteren fra middelalderen, og skrev også Den yngre Edda.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva sagalitteraturen er og hvordan den ble til.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "saga", og hva er en saga?',
            solution: 'Saga kommer fra norrønt "segja" (å si, fortelle). En saga er en prosafortelling om personer og hendelser, opprinnelig muntlig overlevert, senere nedskrevet.',
          },
          {
            label: 'b',
            task: 'Hvorfor ble sagaene nedskrevet på Island på 1200-tallet?',
            solution: 'Islendingene ville dokumentere sin historie og forfedre. Kirkens skriftkultur gjorde det mulig. Samfunnet var stabilt, og det var et sterkt nasjonalt fellesskap rundt Alltinget.',
          },
          {
            label: 'c',
            task: 'Diskuter sagaenes historiske troverdighet.',
            solution: 'Sagaene inneholder historisk materiale, men ble skrevet 200-300 år etter hendelsene. Muntlig tradisjon endres, og forfatterne hadde litterære og politiske motiver. De er verdifulle, men kildekritisk problematiske.',
          },
        ],
        solution: 'Sagaene er prosalitteratur som kombinerer historisk stoff med litterær kunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv de ulike sagasjangerne.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner islendingesagaene?',
            solution: 'De handler om islendinger i sagatiden (ca. 930-1030). Fokus er på ætt, ære og konflikter. Eksempler: Njåls saga, Egils saga, Laksdøla saga.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner kongesagaene, og hvem skrev Heimskringla?',
            solution: 'Kongesagaene handler om skandinaviske konger, særlig norske. Snorre Sturluson skrev Heimskringla, den mest berømte samlingen.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom fornaldersagaer og samtidssagaer?',
            solution: 'Fornaldersagaer handler om helter fra forntiden (før sagatiden), ofte med overnaturlige elementer. Samtidssagaer handler om forfatterens egen tid.',
          },
        ],
        solution: 'De ulike sagasjangerne har forskjellig fokus, tid og stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser sagastilen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med "nøktern fortellerstil" og "understatement" i sagaene.',
            solution: 'Nøktern fortellerstil: Forfatteren holder seg i bakgrunnen og kommenterer ikke. Understatement: Store følelser og hendelser beskrives tilbakeholdent. "Han tok det tungt" kan bety dyp fortvilelse.',
          },
          {
            label: 'b',
            task: 'Hvordan avslører sagaene karakterene til personene?',
            solution: 'Gjennom handling og dialog, ikke forfatterens beskrivelser. "Show, don\'t tell" - vi ser hva karakterene gjør og hører hva de sier, og må tolke selv.',
          },
          {
            label: 'c',
            task: 'Hva er funksjonen til drømmer og varsler i sagaene?',
            solution: 'De fungerer som forutanelser som varsler om fremtidige hendelser. De skaper spenning fordi leseren aner hva som kommer, men ikke nøyaktig hvordan.',
          },
        ],
        solution: 'Sagastilen er karakterisert av tilbakeholdenhet, indirekte karakterisering og forutanelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Njåls saga (primærteksten). Analyser scenen med Gunnars siste kamp.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser trekk ved sagastilen i utdraget.',
            solution: 'Se etter: Objektiv fortelling, dialog, understatement, indirekte karakterisering, lakonisk språk. Gunnars ord "Hvor ille de farer med meg" er et typisk understatement.',
          },
          {
            label: 'b',
            task: 'Hva avslører utdraget om det norrøne samfunnets verdier?',
            solution: 'Utdraget viser verdier som mot, ære, kampdugelighet og verdighet i døden. Gunnar kjemper til siste åndedrag og møter døden modig. Relasjonen til Hallgerd (kona) viser kompleksiteten i æresbegrepet.',
          },
          {
            label: 'c',
            task: 'Hva er Hallgerds rolle i scenen, og hva forteller det om henne som karakter?',
            solution: 'Hallgerd nekter å gi Gunnar en hårstreng til buestrengen, som hevn fordi han slo henne. Hun setter sin egen ære over mannens liv. Dette viser at sagakvinner er sterke aktører med egne motiver, ikke passive bifigurer.',
          },
        ],
        hints: ['Les mellom linjene', 'Tenk på hva som ikke sies direkte'],
        solution: 'Analysen skal vise forståelse for sagastilen og det norrøne verdensbildet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Egils saga (primærteksten). Hvordan framstilles Egil som karakter?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv Egil slik han fremstår i utdraget.',
            solution: 'Egil er en kompleks karakter: sterk og voldsom, men også dikter og følelsesmenneske. Han er modig og handlekraftig, men kan være hensynsløs. Sagaen viser ham gjennom handlinger og dialog, ikke direkte beskrivelser av indre liv.',
          },
          {
            label: 'b',
            task: 'Hvilke sagastiltrekk finner du i utdraget?',
            solution: 'Nøktern fortellerstil, understatement, handlingsbasert karakterisering, dialog som avslører karakter, objektiv fremstilling uten moralske kommentarer fra forfatteren.',
          },
        ],
        solution: 'Egils saga viser sagalitteraturens evne til å skape komplekse, flerdimensjonale karakterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign sagaen med en moderne roman eller TV-serie.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en moderne fortelling (roman, film eller TV-serie) og sammenlign fortelleteknikken med sagaene.',
            solution: 'Mulige sammenligninger: Game of Thrones (komplekse karakterer, konflikter, forutanelser), krimromaner (nøktern stil), Tolkien (påvirket av sagaer).',
          },
          {
            label: 'b',
            task: 'Hva har sagaene og moderne fortellinger til felles? Hva skiller dem?',
            solution: 'Felles: Komplekse karakterer, konflikter, spenning. Skiller: Sagaens lakoniske stil, understatement, fravær av psykologiske forklaringer.',
          },
        ],
        solution: 'Sammenligningen viser sagaens tidløse kvaliteter og historiske særpreg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft sagaenes troverdighet som historisk kilde.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke argumenter taler for at sagaene er pålitelige historiske kilder?',
            solution: 'De bygger på muntlig tradisjon, inneholder skaldekvad som er vanskelige å endre (og dermed trolig autentiske), mange detaljer stemmer med arkeologiske funn, og forfatterne hadde tilgang til eldre kilder og informanter.',
          },
          {
            label: 'b',
            task: 'Hvilke argumenter taler mot?',
            solution: 'Sagaene ble skrevet 200-300 år etter hendelsene, muntlig tradisjon endres over tid, forfatterne hadde politiske og litterære motiver, de bruker litterære konvensjoner (forutanelser, typescener), og det er vanskelig å skille fakta fra fiksjon.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen på å lese sagaene som historisk kilde og som litteratur?',
            solution: 'Som historisk kilde spør vi: Hva er sant? Hva kan bekreftes? Som litteratur spør vi: Hva er godt fortalt? Hvilke temaer behandles? Hva forteller det om verdier og verdensbilde? Begge tilnærminger er verdifulle, men stiller ulike spørsmål.',
          },
        ],
        hints: ['Tenk på hva som kan bekreftes fra andre kilder', 'Hva betyr det at sagaene er skrevet mye senere?'],
        solution: 'Sagaene er verdifulle kilder, men må leses med et kildekritisk blikk som tar hensyn til tidsdistanse, litterære konvensjoner og forfatternes motiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blodhevn og rettssystem i sagaene. Drøft forholdet mellom privat hevn og offentlig lov.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvordan blodhevnsystemet fungerte i det norrøne samfunnet slik det framstilles i sagaene.',
            solution: 'Når en mann ble drept, hadde hans ætt plikt til å hevne ham eller kreve bot (erstatning). Hevnen kunne rettes mot drapsmannen eller hans slektninger. Æren krevde at man handlet - å la et drap gå uhevnet var skammelig.',
          },
          {
            label: 'b',
            task: 'Hvordan fungerte tinget som alternativ til blodhevn?',
            solution: 'Tinget var en folkeforsamling der konflikter kunne løses gjennom lov: forlik, botebetaling eller fredløshet. Alltinget på Island hadde lovsiemann og dommere. Tinget representerte samfunnets forsøk på å regulere vold gjennom rettslige prosesser.',
          },
          {
            label: 'c',
            task: 'Sammenlign den norrøne rettspraksisen med vårt moderne rettssystem.',
            solution: 'Likheter: Begge søker å løse konflikter og sikre orden. Forskjeller: Vi har politi og statlig voldsmonopol, mens vikingene hadde privat hevn. Vi straffer individer, de involverte hele ætten. Vi har fengselsstraff, de hadde bot og fredløshet. Utviklingen viser en bevegelse fra privat til statlig rettshåndhevelse.',
          },
        ],
        solution: 'Spenningen mellom privat hevn og offentlig lov er et sentralt tema i sagalitteraturen og gjenspeiler samfunnsutviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort sagapastisj (200-300 ord) i sagastil. Bruk en moderne hendelse eller situasjon, men fortell den med sagaens virkemidler.',
        hints: [
          'Bruk sagastilens kjennetegn: nøktern fortellerstil, understatement, dialog som avslører karakter.',
          'Start med å presentere hovedpersonen slik sagaene gjør: "Det var en mann som het..."',
          'Bruk korte, lakoniske setninger og la handlingene snakke for seg.',
          'Unngå å fortelle hva personene føler - vis det gjennom det de gjør og sier.',
        ],
        solution: 'Eleven skriver en sagapastisj med moderne innhold i sagastil. En god tekst bruker: (1) nøktern fortellerstil uten følelsesutbrudd, (2) dialog som avslører karakter, (3) understatement, (4) "show, don\'t tell", (5) sagaens typiske presentasjonsform. Eksempel-åpning: "Det var en mann som het Erlend. Han bodde på Østlandet og var kjent for sin dyktighet med data."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Norrønt språk og runer
// ============================================================================

export const CHAPTER_NORSK_VG2_1_5: TextbookChapter = {
  id: 'norsk-vg2-1-5',
  courseId: 'norsk-vg2',
  chapterNumber: '1.5',
  title: 'Norrønt språk og runer',
  description: 'Lær om det norrøne språket, runeskriften og hvordan norsk har utviklet seg fra norrønt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-1-5-intro',
      type: 'text',
      content: `## Det norrøne språket - røttene til moderne norsk

Norrønt er det språket som ble snakket i Skandinavia og de norrøne bosetningene fra omkring 700 til 1350. Det er forgjengeren til moderne norsk, svensk, dansk, islandsk og færøysk. Å forstå norrønt gir oss innsikt i hvordan språket vårt har utviklet seg, og hvorfor norsk er slik det er i dag.

**Fra urnordisk til norrønt**

Norrønt utviklet seg fra urnordisk, som ble snakket i Skandinavia fra ca. 200 til 700 e.Kr. Urnordisk kjenner vi hovedsakelig fra runeinnskrifter. Overgangen til norrønt skjedde gradvis og innebar betydelige endringer i lydsystemet.

**Norrønt som fellesspråk**

I vikingtiden var det norrøne språket relativt ensartet over hele Skandinavia. En nordmann, svenske og danske kunne forstå hverandre uten store problemer. Denne språklige enheten gjorde det mulig for vikingene å kommunisere over hele sitt ekspansjonsområde - fra Vinland i vest til Miklagard (Konstantinopel) i øst.

Etter hvert utviklet det seg regionale forskjeller:
- **Vestnordisk:** Norge og de norrøne atlanterhavsbosetningene (Island, Færøyene, Grønland)
- **Østnordisk:** Danmark og Sverige

**Språket i tekstene**

Det meste av den norrøne litteraturen vi har bevart, er skrevet på Island i klassisk norrønt (ca. 1150-1350). Islandsk har endret seg lite siden den tiden og er det moderne språket som ligner mest på norrønt.

**Norrønt og moderne norsk**

Moderne norsk stammer direkte fra norrønt, men har gjennomgått store endringer. Noen av de viktigste er:
- Forenklet kasussystem (fra fire til i praksis ingen kasus i substantiv)
- Forenklet bøyning generelt
- Lydendringer som har påvirket uttale og rettskriving
- Stor påvirkning fra lavtysk i senmiddelalderen

Likevel kan vi med litt øvelse gjenkjenne mange ord og strukturer. Norrønt er ikke et fremmed språk - det er en eldre versjon av vårt eget.`,
    },
    {
      id: 'norsk-vg2-1-5-def-1',
      type: 'definition',
      title: 'Runeskriften',
      content: `**Hva er runer?**

Runer er de eldste skrifttegnene i Skandinavia. De ble brukt fra ca. 150 e.Kr. til langt inn i middelalderen, parallelt med det latinske alfabetet.

**Runealfabetene:**

**1. Eldre futhark (ca. 150-700 e.Kr.)**
- 24 tegn
- Navnet "futhark" kommer fra de første seks runene: f, u, th, a, r, k
- Brukt for urnordisk

**2. Yngre futhark (ca. 700-1100)**
- 16 tegn (forenklet)
- Brukt i vikingtiden
- To varianter: langkvist (dansk) og kortkvist (svensk-norsk)

**3. Middelalderruner (ca. 1100-1500)**
- Utvidet til ca. 27 tegn
- Tilpasset det latinske alfabetet
- Fortsatt i bruk på Island til 1600-tallet

**Runenes bruk:**

- **Minnesteiner:** Over døde, ofte med korte beskjeder
- **Magiske formler:** Runer ble tillagt magisk kraft
- **Hverdagslig bruk:** Merkinger, korte beskjeder
- **Litterære tekster:** Sjelden, men finnes

**Runenes opprinnelse:**

Runene er trolig inspirert av latinske og/eller etruskiske bokstaver, men tilpasset skandinaviske forhold. De rette linjene var praktiske å risse inn i tre og stein.

**Norske runefunn:**

Norge har tusenvis av runeinnskrifter. De mest kjente stedene er:
- Bryggen i Bergen (over 600 innskrifter)
- Urnesstaven
- Hogganviksteinen`,
    },
    {
      id: 'norsk-vg2-1-5-def-2',
      type: 'definition',
      title: 'Norrøn grammatikk - hovedtrekk',
      content: `**Kasus - fire grammatiske tilfeller:**

Norrønt hadde fire kasus som viste ordets funksjon i setningen:

| Kasus | Funksjon | Eksempel (masc. hestr = hest) |
|-------|----------|------------------------------|
| Nominativ | Subjekt | hestr (hesten) |
| Akkusativ | Direkte objekt | hest |
| Dativ | Indirekte objekt | hesti |
| Genitiv | Eieform | hests |

**Kjønn - tre grammatiske kjønn:**
- Hankjønn (masculinum)
- Hunkjønn (femininum)
- Intetkjønn (neutrum)

**Bøyning av verb:**

Norrønt hadde et rikt verbsystem med:
- Sterke verb (vokalskifte): finna - fann - fundu - fundinn
- Svake verb (endelse): kalla - kalladhi - kalladhir - kalladhr

**Ordstilling:**
Friere ordstilling enn moderne norsk, siden kasus viste ordenes funksjon.

**Eksempel på norrønt:**

*Norrønt:* "Konungr gaf drenginum sverdh."
*Moderne norsk:* "Kongen ga gutten et sverd."

Her viser kasusendelsene hvem som er subjekt (konungr - nominativ), hvem som mottar (drenginum - dativ), og hva som gis (sverdh - akkusativ).`,
    },
    {
      id: 'norsk-vg2-1-5-def-3',
      type: 'definition',
      title: 'Fra norrønt til moderne norsk - lydendringer',
      content: `**Viktige lydendringer:**

**1. Diftonger til monoftonger (i deler av Norge):**
- norrønt *steinn* → norsk *sten/stein*
- norrønt *bein* → norsk *ben/bein*
- norrønt *haukr* → norsk *hauk/høk*

**2. Bortfall av endelser (synkope):**
- norrønt *konungr* → norsk *konge*
- norrønt *hestar* → norsk *hester*

**3. Kj-/g-lydendringer:**
- norrønt *kirkja* → norsk *kirke/kyrkje*
- norrønt *egg* → norsk *egg* [eg]/[egg]

**4. Assimilasjon:**
- norrønt *land* → en del dialekter *lan'*
- norrønt *barn* → en del dialekter *ban'*

**5. Bortfall av h foran konsonant:**
- norrønt *hringr* → norsk *ring*
- norrønt *hvalr* → norsk *hval*

**Ord vi fortsatt gjenkjenner:**

| Norrønt | Moderne norsk |
|---------|---------------|
| vatn | vann |
| hus | hus |
| madhr | mann |
| kona | kone |
| skip | skip |
| barn | barn |
| dagr | dag |
| nott | natt |`,
    },
    {
      id: 'norsk-vg2-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Les norrønt',
      problem: `Prøv å forstå denne norrøne teksten (åpningen av Voluspå) med hjelp av ordliste:

**Norrønt:**
"Hljods bidh ek allar helgar kindir,
meiri ok minni mogu Heimdalar."

**Ordliste:**
- hljodh = stillhet
- bidh = ber (om)
- ek = jeg
- allar = alle
- helgar = hellige
- kindir = slekter
- meiri = større
- minni = mindre
- mogu = sønner (av magr)
- Heimdalar = Heimdalls (genitiv)`,
      solution: `**Oversettelse og analyse:**

**Oversettelse:**
"Jeg ber om stillhet av alle hellige slekter,
større og mindre, Heimdalls sønner."

**Analyse:**

**Ordstilling:**
I norrønt kan verbet komme før subjektet: "bidh ek" (ber jeg). Dette er uvanlig på moderne norsk.

**Kasus i praksis:**
- *hljodhs* er genitiv (stillhets - ber om stillhet)
- *allar helgar kindir* er akkusativ flertall (alle hellige slekter)
- *meiri ok minni* er også akkusativ (bøyd etter kindir)
- *mogu Heimdalar* er akkusativ + genitiv (Heimdalls sønner)

**Gjenkjennelige ord:**
- *ek* → "jeg" (sammenlign engelsk "I")
- *allar* → "alle"
- *meiri* → "mer/større"
- *minni* → "mindre/minne"

**Poetisk betydning:**
Volven (spåkvinnen) ber om stillhet fra alle mennesker - "Heimdalls sønner" er en kenning for menneskeheten, siden Heimdall ifølge mytene skapte de sosiale klassene.

**Tips for å lese norrønt:**
1. Finn verbene og subjektene først
2. Bruk kasusendelsene til å forstå funksjonene
3. Let etter kjente ord
4. Aksepter at ordstillingen er annerledes`,
    },
    {
      id: 'norsk-vg2-1-5-tip-1',
      type: 'tip',
      title: 'Norrøne ord i moderne norsk',
      content: `**Mange vanlige norske ord kommer direkte fra norrønt:**

**Hverdagsord:**
- hus → hus
- skip → skip
- barn → barn
- madhr → mann
- kona → kone/kvinne
- vatn → vann

**Naturen:**
- fjall → fjell
- berg → berg
- dalr → dal
- a → å (elv)
- hafs → hav

**Ukedagene (fra gudene):**
- Tysdagr → tirsdag (Ty/Tyr)
- Odinsdagr → onsdag (Odin)
- Thorsdagr → torsdag (Tor)
- Frjadagr → fredag (Frøya/Frigg)

**Ord som har skiftet betydning:**
- *drottning* (hirdfruen) → dronning
- *karl* (fri mann) → kar/gubbe
- *thraell* (trell) → trell (brukes nå mest om datamaskin)

**Islandsk - "levende norrønt":**
Islandsk har endret seg lite fra norrønt. Islendinger i dag kan lese sagaene i original uten store problemer.`,
    },
    {
      id: 'norsk-vg2-1-5-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Runeinnskrifter fraa Bryggen i Bergen',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-5-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_RUNETEKST}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-5-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Den gammalnorske homilieboka (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-1-5-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_HOMILIEBOK}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "futhark"?',
        options: [
          'Det norrøne ordet for "alfabet"',
          'Navnet på runealfabetet, fra de første seks runene: f, u, th, a, r, k',
          'En type magisk runeformel',
          'Et norrønt ord for "skrift"',
        ],
        answer: 1,
        solution: '"Futhark" er navnet på runealfabetet, dannet av de seks første runene: f, u, th (thorn), a, r, k. Det fungerer på samme måte som ordet "alfabet" er dannet av de greske bokstavene alfa og beta.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange kasus hadde norrønt?',
        options: [
          'To (nominativ og akkusativ)',
          'Tre (nominativ, akkusativ og genitiv)',
          'Fire (nominativ, akkusativ, dativ og genitiv)',
          'Seks (som latin)',
        ],
        answer: 2,
        solution: 'Norrønt hadde fire kasus: nominativ (subjekt), akkusativ (direkte objekt), dativ (indirekte objekt) og genitiv (eieform). I moderne norsk er kasussystemet nesten helt borte fra substantivene, og vi bruker ordrekkefølge og preposisjoner i stedet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva norrønt er og hvordan det forholder seg til moderne norsk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er norrønt, og når ble det snakket?',
            solution: 'Norrønt er det språket som ble snakket i Skandinavia og de norrøne bosetningene fra ca. 700 til 1350. Det er forgjengeren til moderne norsk, svensk, dansk, islandsk og færøysk.',
          },
          {
            label: 'b',
            task: 'Hvilke moderne språk stammer fra norrønt?',
            solution: 'Norsk, svensk, dansk, islandsk og færøysk stammer alle fra norrønt. Islandsk har endret seg minst og ligner fortsatt mye på norrønt.',
          },
          {
            label: 'c',
            task: 'Nevn tre viktige forskjeller mellom norrønt og moderne norsk.',
            solution: 'Norrønt hadde fire kasus (moderne norsk har i praksis ingen i substantiv), rikere verbalsystem, friere ordstilling. Mange lydendringer har skjedd.',
          },
        ],
        solution: 'Norrønt er den historiske forgjengeren til norsk, men har gjennomgått store endringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar runeskriften.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er runer, og hvor kommer navnet "futhark" fra?',
            solution: 'Runer er de eldste skrifttegnene i Skandinavia. "Futhark" kommer fra de første seks runene: f, u, th, a, r, k.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom eldre futhark og yngre futhark?',
            solution: 'Eldre futhark (ca. 150-700) hadde 24 tegn og ble brukt for urnordisk. Yngre futhark (ca. 700-1100) hadde 16 tegn og ble brukt i vikingtiden.',
          },
          {
            label: 'c',
            task: 'Hva ble runene brukt til?',
            solution: 'Minnesteiner over døde, magiske formler, hverdagslig merking og korte beskjeder, sjelden litterære tekster.',
          },
        ],
        solution: 'Runene var Skandinavias eldste skriftsystem med både praktiske og magiske funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar norrønt kasussystem.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fire kasus hadde norrønt, og hva var funksjonen deres?',
            solution: 'Nominativ (subjekt), akkusativ (direkte objekt), dativ (indirekte objekt), genitiv (eieform).',
          },
          {
            label: 'b',
            task: 'Hvorfor har moderne norsk nesten ingen kasus?',
            solution: 'Kasusendelsene ble gradvis borte gjennom lydendringer (bortfall av ustresset endelser). Ordstillingen tok over funksjonen med å vise grammatiske forhold.',
          },
        ],
        hints: ['Tenk på hvordan vi markerer subjekt og objekt i moderne norsk'],
        solution: 'Norrønt brukte kasus for å vise grammatisk funksjon, moderne norsk bruker ordstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn moderne norske ord fra norrønt.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn det moderne norske ordet som tilsvarer: hus, skip, vatn, fjall, dagr.',
            solution: 'hus → hus, skip → skip, vatn → vann, fjall → fjell, dagr → dag.',
          },
          {
            label: 'b',
            task: 'Forklar opphavet til ukedagene tirsdag, onsdag og torsdag.',
            solution: 'Tirsdag: Tysdagr (guden Ty/Tyr). Onsdag: Odinsdagr (Odin). Torsdag: Thorsdagr (Tor).',
          },
          {
            label: 'c',
            task: 'Finn tre norske ord som fortsatt ligner mye på den norrøne formen.',
            solution: 'Eksempler: skip (skip), barn (barn), hus (hus), dag (dagr), berg (berg).',
          },
        ],
        solution: 'Mange vanlige norske ord har direkte opphav i norrønt med lite endring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les runeinnskriftene fra Bryggen i Bergen (primærteksten). Hva forteller de oss om hverdagslivet i middelalderen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags tekster er runeinnskriftene fra Bryggen?',
            solution: 'De er hverdagslige beskjeder: handelsmeldinger, navnmerker, kjærlighetsbeskjeder, skjellsord, religiøse bønner og lignende. De viser at runer ble brukt til praktiske formål, ikke bare monumentale innskrifter.',
          },
          {
            label: 'b',
            task: 'Hva forteller Bryggen-innskriftene om hvem som kunne skrive runer?',
            solution: 'De viser at runeskrift ikke var forbeholdt en liten elite. Vanlige mennesker - kjøpmenn, håndverkere, barn - brukte runer til daglige gjøremål. Runer var et folkelig skriftspråk.',
          },
        ],
        hints: ['Tenk på hva moderne SMS og sosiale medier tilsvarer i dag.'],
        solution: 'Bryggen-innskriftene gir oss et unikt vindu inn i middelalderens hverdag og viser at skriftbruk var mer utbredt enn vi kanskje tror.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Den gammalnorske homilieboka (primærteksten). Analyser teksten som et eksempel på religiøs litteratur i norrøn tid.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en homiliebok, og hvem skrev slike tekster?',
            solution: 'En homiliebok er en samling prekener (homilier) skrevet til bruk i kirken. De ble skrevet av geistlige og representerer kristendommens innflytelse på norrøn skriftkultur. Den gammalnorske homilieboka er fra ca. 1200.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller denne teksten seg fra sagastilen og eddadiktningen?',
            solution: 'Homilieteksten er belærende og moraliserende, i motsetning til sagaens nøkterne stil. Den har et klart budskap (kristent), mens sagaen lar leseren tolke selv. Språket er mer formelt og høytidelig, påvirket av latinsk stilideal.',
          },
        ],
        solution: 'Den gammalnorske homilieboka viser hvordan kristendommen påvirket norrøn litteratur med nye sjangre, stil og tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les og analyser en kort norrøn tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Prøv å forstå denne setningen: "Madhr heitir Gunnarr" (Mann heter Gunnar).',
            solution: 'Direkte oversettelse. Madhr = mann (nominativ). Heitir = heter (verbet). Gunnarr = Gunnar (navnet, nominativ).',
          },
          {
            label: 'b',
            task: 'Hvilke ord kan du gjenkjenne fra moderne norsk?',
            solution: 'Madhr → mann, heitir → heter. Setningsstrukturen ligner også.',
          },
          {
            label: 'c',
            task: 'Oversett følgende norrøne ord til moderne norsk: vatn, hus, skip, kona, dagr, nott.',
            solution: 'vatn → vann, hus → hus, skip → skip, kona → kone, dagr → dag, nott → natt.',
          },
        ],
        hints: ['Se etter ord som ligner', 'Kasusendelsene gir informasjon om ordets funksjon'],
        solution: 'Med litt øvelse kan man gjenkjenne mange ord og strukturer fra norrønt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign utviklingen av norsk og islandsk etter vikingtiden. Begge språkene stammer fra norrønt, men har utviklet seg svært ulikt. Forklar hvorfor.',
        hints: [
          'Island var isolert, Norge var i union med Danmark.',
          'Tenk på geografisk isolasjon, politiske forhold og skrifttradisjon.',
        ],
        solution: 'Islandsk har beholdt mye av den norrøne grammatikken, inkludert kasussystemet, fordi Island var geografisk isolert og hadde en ubrutt skrifttradisjon. Norge ble derimot sterkt påvirket av dansk gjennom unionstiden, lavtysk gjennom handelen, og mistet sin skrivetradisjon etter svartedauden. Resultatet er at en islending i dag kan lese sagaene i original, mens en nordmann trenger oversettelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-1-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: "Uten runene ville vi nesten ingenting visst om urnordisk og tidlig skandinavisk kultur."',
        subTasks: [
          {
            label: 'a',
            task: 'Hva forteller runeinnskriftene oss om urnordisk språk og kultur som vi ikke kan finne andre steder?',
            solution: 'Runeinnskriftene er de eneste direkte skriftlige kildene til urnordisk (ca. 200-700 e.Kr.). De gir oss kunnskap om språkets lydlære, grammatikk, navneskikk, religion og sosiale forhold. Uten dem ville vi bare ha hatt arkeologiske funn og utenlandske kilder.',
          },
          {
            label: 'b',
            task: 'Hvilke begrensninger har runeinnskrifter som historisk kilde?',
            solution: 'De fleste innskrifter er korte og vanskelige å tolke. De er tilfeldige overlevere - det meste er tapt. Tre-gjenstander med runer har sjelden overlevd. Vi kan ikke alltid vite konteksten. Mange innskrifter er skadet eller ufullstendige.',
          },
          {
            label: 'c',
            task: 'Sammenlign runenes begrensninger som kilde med den senere sagalitteraturens begrensninger.',
            solution: 'Runer: Korte, fragmentariske, vanskelige å tolke, men samtidige med hendelsene. Sagaer: Lange, detaljerte, lettere å forstå, men skrevet 200-300 år etter hendelsene av forfattere med egne motiver. Begge kilder har styrker og svakheter - sammen gir de et rikere bilde.',
          },
        ],
        solution: 'Runene og sagaene utfyller hverandre som kilder til norrøn historie og kultur, men begge har sine begrensninger som krever kildekritisk tilnærming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const NORSK_VG2_CHAPTERS_DEL1: TextbookChapter[] = [
  CHAPTER_NORSK_VG2_1_1,
  CHAPTER_NORSK_VG2_1_2,
  CHAPTER_NORSK_VG2_1_3,
  CHAPTER_NORSK_VG2_1_4,
  CHAPTER_NORSK_VG2_1_5,
];

/**
 * Tekstbok innhold for Norsk VG2
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Andre år med fokus på norrøn litteratur, litteraturhistorie 1500-1850,
 * språkhistorie og retorikk.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

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
      id: 'norsk-vg2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-1',
        number: '1',
        type: 'classic',
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
      id: 'norsk-vg2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-2',
        number: '2',
        type: 'classic',
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
      id: 'norsk-vg2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-3',
        number: '3',
        type: 'classic',
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
      id: 'norsk-vg2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-4',
        number: '4',
        type: 'classic',
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
      id: 'norsk-vg2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-1-ex-5',
        number: '5',
        type: 'classic',
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
            solution: 'Stedsnavn: Oslo (Ásló), Trondheim (Þrándheimr), navn på -heim, -vin, -by. Personnavn: Tor, Odin, Frøya, Sigurd, Gunnar. Hverdagsord: ting, blot, trolldom.',
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
      id: 'norsk-vg2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-1',
        number: '1',
        type: 'classic',
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
      id: 'norsk-vg2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-2',
        number: '2',
        type: 'classic',
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
      id: 'norsk-vg2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-3',
        number: '3',
        type: 'classic',
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
      id: 'norsk-vg2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-4',
        number: '4',
        type: 'classic',
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
      id: 'norsk-vg2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-5',
        number: '5',
        type: 'classic',
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
      id: 'norsk-vg2-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-2-ex-6',
        number: '6',
        type: 'classic',
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
      id: 'norsk-vg2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-1',
        number: '1',
        type: 'classic',
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
      id: 'norsk-vg2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-2',
        number: '2',
        type: 'classic',
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
      id: 'norsk-vg2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-3',
        number: '3',
        type: 'classic',
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
      id: 'norsk-vg2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-4',
        number: '4',
        type: 'classic',
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
      id: 'norsk-vg2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter Egil Skallagrimssons Sonatorrek.',
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

**1. Islendingesagaer (Íslendingasögur)**
Handler om islendinger i "sagatiden" (ca. 930-1030). De mest berømte eksemplene:
- *Njåls saga* - den lengste og mest komplekse
- *Egils saga* - om skalden Egil Skallagrimsson
- *Laksdøla saga* - tragisk kjærlighetshistorie
- *Gisles saga* - om en fredløs
- *Grettis saga* - om Nordens sterkeste mann

**2. Kongesagaer (Konungasögur)**
Handler om skandinaviske, særlig norske, konger:
- *Heimskringla* - Snorre Sturlusons samling om norske konger
- *Sverres saga* - om kong Sverre (delvis selvbiografisk)
- *Fagrskinna* - alternativ kongesagasamling

**3. Fornaldersagaer (Fornaldarsögur)**
Handler om helter fra "forntiden" (før sagatiden):
- *Volsungasaga* - om Sigurd Fåvnesbane (prosaversjon)
- *Ragnar Lodbroks saga*
- *Hervars saga*

**4. Samtidssagaer (Samtíðarsögur)**
Handler om hendelser i forfatterens egen tid:
- *Sturlunga saga* - om maktkampene på 1200-tallets Island

**5. Biskopssagaer (Biskupasögur)**
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
      id: 'norsk-vg2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-1',
        number: '1',
        type: 'classic',
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
      id: 'norsk-vg2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-2',
        number: '2',
        type: 'classic',
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
      id: 'norsk-vg2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-3',
        number: '3',
        type: 'classic',
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
      id: 'norsk-vg2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Les et utdrag fra en islendingesaga og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser trekk ved sagastilen i utdraget.',
            solution: 'Se etter: Objektiv fortelling, dialog, understatement, indirekte karakterisering, lakonisk språk.',
          },
          {
            label: 'b',
            task: 'Hva avslører utdraget om det norrøne samfunnets verdier?',
            solution: 'Svar avhenger av utdraget, men vanlige verdier inkluderer: ære, lojalitet til ætt, modig holdning til døden, viktigheten av ettermæle.',
          },
        ],
        hints: ['Les mellom linjene', 'Tenk på hva som ikke sies direkte'],
        solution: 'Analysen skal vise forståelse for sagastilen og det norrøne verdensbildet.',
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

Det meste av den norrøne litteraturen vi har bevart, er skrevet på island i klassisk norrønt (ca. 1150-1350). Islandsk har endret seg lite siden den tiden og er det moderne språket som ligner mest på norrønt.

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
- Navnet "futhark" kommer fra de første seks runene: f, u, þ, a, r, k
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
- Svake verb (endelse): kalla - kallaði - kallaðir - kallaðr

**Ordstilling:**
Friere ordstilling enn moderne norsk, siden kasus viste ordenes funksjon.

**Eksempel på norrønt:**

*Norrønt:* "Konungr gaf drenginum sverð."
*Moderne norsk:* "Kongen ga gutten et sverd."

Her viser kasusendelsene hvem som er subjekt (konungr - nominativ), hvem som mottar (drenginum - dativ), og hva som gis (sverð - akkusativ).`,
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
| hús | hus |
| maðr | mann |
| kona | kone |
| skip | skip |
| barn | barn |
| dagr | dag |
| nótt | natt |`,
    },
    {
      id: 'norsk-vg2-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Les norrønt',
      problem: `Prøv å forstå denne norrøne teksten (åpningen av Voluspå) med hjelp av ordliste:

**Norrønt:**
"Hljóðs bið ek allar helgar kindir,
meiri ok minni mögu Heimdalar."

**Ordliste:**
- hljóð = stillhet
- bið = ber (om)
- ek = jeg
- allar = alle
- helgar = hellige
- kindir = slekter
- meiri = større
- minni = mindre
- mögu = sønner (av magr)
- Heimdalar = Heimdalls (genitiv)`,
      solution: `**Oversettelse og analyse:**

**Oversettelse:**
"Jeg ber om stillhet av alle hellige slekter,
større og mindre, Heimdalls sønner."

**Analyse:**

**Ordstilling:**
I norrønt kan verbet komme før subjektet: "bið ek" (ber jeg). Dette er uvanlig på moderne norsk.

**Kasus i praksis:**
- *hljóðs* er genitiv (stillhet*s* - ber om stillhet)
- *allar helgar kindir* er akkusativ flertall (alle hellige slekter)
- *meiri ok minni* er også akkusativ (bøyd etter kindir)
- *mögu Heimdalar* er akkusativ + genitiv (Heimdalls sønner)

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
- hús → hus
- skip → skip
- barn → barn
- maðr → mann
- kona → kone/kvinne
- vatn → vann

**Naturen:**
- fjall → fjell
- berg → berg
- dalr → dal
- á → å (elv)
- hafs → hav

**Ukedagene (fra gudene):**
- Týsdagr → tirsdag (Ty/Tyr)
- Óðinsdagr → onsdag (Odin)
- Þórsdagr → torsdag (Tor)
- Frjádagr → fredag (Frøya/Frigg)

**Ord som har skiftet betydning:**
- *dróttning* (hirdfruen) → dronning
- *karl* (fri mann) → kar/gubbe
- *þræll* (trell) → trell (brukes nå mest om datamaskin)

**Islandsk - "levende norrønt":**
Islandsk har endret seg lite fra norrønt. Islendinger i dag kan lese sagaene i original uten store problemer.`,
    },
    {
      id: 'norsk-vg2-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-1',
        number: '1',
        type: 'classic',
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
      id: 'norsk-vg2-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar runeskriften.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er runer, og hvor kommer navnet "futhark" fra?',
            solution: 'Runer er de eldste skrifttegnene i Skandinavia. "Futhark" kommer fra de første seks runene: f, u, þ, a, r, k.',
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
      id: 'norsk-vg2-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-3',
        number: '3',
        type: 'classic',
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
      id: 'norsk-vg2-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn moderne norske ord fra norrønt.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn det moderne norske ordet som tilsvarer: hús, skip, vatn, fjall, dagr.',
            solution: 'hús → hus, skip → skip, vatn → vann, fjall → fjell, dagr → dag.',
          },
          {
            label: 'b',
            task: 'Forklar opphavet til ukedagene tirsdag, onsdag og torsdag.',
            solution: 'Tirsdag: Týsdagr (guden Ty/Tyr). Onsdag: Óðinsdagr (Odin). Torsdag: Þórsdagr (Tor).',
          },
          {
            label: 'c',
            task: 'Finn tre norske ord som fortsatt ligner mye på den norrøne formen.',
            solution: 'Eksempler: skip (skip), barn (barn), hus (hús), dag (dagr), berg (berg).',
          },
        ],
        solution: 'Mange vanlige norske ord har direkte opphav i norrønt med lite endring.',
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
        task: 'Les og analyser en kort norrøn tekst.',
        subTasks: [
          {
            label: 'a',
            task: 'Prøv å forstå denne setningen: "Maðr heitir Gunnarr" (Mann heter Gunnar).',
            solution: 'Direkte oversettelse. Maðr = mann (nominativ). Heitir = heter (verbet). Gunnarr = Gunnar (navnet, nominativ).',
          },
          {
            label: 'b',
            task: 'Hvilke ord kan du gjenkjenne fra moderne norsk?',
            solution: 'Maðr → mann, heitir → heter. Setningsstrukturen ligner også.',
          },
        ],
        hints: ['Se etter ord som ligner', 'Kasusendelsene gir informasjon om ordets funksjon'],
        solution: 'Med litt øvelse kan man gjenkjenne mange ord og strukturer fra norrønt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Humanismens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_2_1: TextbookChapter = {
  id: 'norsk-vg2-2-1',
  courseId: 'norsk-vg2',
  chapterNumber: '2.1',
  title: 'Humanismens ideer',
  description: 'Utforsk renessansens humanisme og dens betydning for europeisk kultur og litteratur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
  ],
  content: [
    {
      id: 'norsk-vg2-2-1-intro',
      type: 'text',
      content: `## Humanismen - mennesket i sentrum

Humanismen var en intellektuell bevegelse som oppsto i Italia på 1300-tallet og spredte seg til resten av Europa i de følgende århundrene. Betegnelsen kommer fra det latinske "studia humanitatis" - studiet av det menneskelige. Humanistene vendte tilbake til antikkens tekster og satte mennesket i sentrum for sin tenkning.

**Bakgrunn og opprinnelse**

Middelalderen hadde vært preget av kirkens dominans i alle livets sfærer. Teologien var den høyeste vitenskap, og menneskets hovedoppgave var å forberede seg på det evige liv. Humanismen representerte et skifte: Fokuset ble rettet mot livet her og nå, mot menneskets evner og muligheter i denne verden.

I de italienske bystatene - Firenze, Venezia, Milano - vokste det frem en ny borgerklasse som hadde rikdom og fritid til å dyrke kunst og litteratur. Denne klassen ønsket seg en utdannelse som kunne gjøre dem til veltalende, kultiverte borgere - ikke bare til prester eller munker.

**Humanistenes program**

Humanistene gjenoppdaget og studerte tekster fra gresk og romersk antikk:
- Filosofer som Platon og Aristoteles
- Diktere som Homer, Vergil og Ovid
- Talere som Cicero
- Historikere som Tacitus og Livius

De mente at disse tekstene inneholdt tidløs visdom om menneskets natur og det gode liv. Ved å studere antikken kunne mennesket utvikle sine evner og bli et bedre, mer harmonisk menneske.

**Humanismens menneskesyn**

Humanistene hadde et optimistisk syn på mennesket:
- Mennesket har fornuft og fri vilje
- Mennesket kan forme sin egen skjebne
- Mennesket har uante muligheter for utvikling
- Kroppen er ikke syndig, men en del av skaperverket
- Livet på jorden har egenverdi

Dette var et brudd med middelalderens fokus på arvesynden og menneskets avhengighet av Guds nåde.

**Humanismen i Norden**

Humanismen kom relativt sent til Skandinavia, først på 1500-tallet. Her ble den nært knyttet til reformasjonen. Viktige skikkelser var:
- Christiern Pedersen (dansk) - oversatte Bibelen
- Olaus Magnus (svensk) - skrev om nordisk historie
- Peder Claussøn Friis (norsk) - oversatte Snorres kongesagaer

I Norge, som var under dansk styre, kom humanistiske impulser hovedsakelig gjennom København og kirken.`,
    },
    {
      id: 'norsk-vg2-2-1-def-1',
      type: 'definition',
      title: 'Humanismens kjennetegn',
      content: `**Sentrale begreper:**

**Humanisme:** Intellektuell bevegelse som setter mennesket i sentrum og vektlegger studiet av antikkens kultur.

**Renessanse:** "Gjenfødelse" - betegnelsen på perioden ca. 1400-1600 da antikken ble gjenoppdaget.

**Studia humanitatis:** Humanistenes studieprogram: grammatikk, retorikk, historie, poesi og moralfilosofi.

**Ad fontes:** "Til kildene" - humanistenes motto om å gå tilbake til originaltekstene.

**Homo universalis:** "Det universelle menneske" - idealet om det allsidige dannede menneske.

**Humanismens verdier:**

- **Individualisme:** Fokus på enkeltmenneskets verdi og muligheter
- **Rasjonalitet:** Tillit til menneskets fornuft
- **Dannelse:** Utdannelse former det gode menneske
- **Toleranse:** Åpenhet for ulike synspunkter
- **Skjønnhet:** Estetikk og kunst som verdier i seg selv`,
    },
    {
      id: 'norsk-vg2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Pico della Mirandolas tale om menneskets verdighet',
      problem: `Les dette utdraget fra Giovanni Pico della Mirandolas "Om menneskets verdighet" (1486):

"Vi har ikke gitt deg, Adam, noen bestemt plass, ingen egenart, ingen spesiell oppgave, for at du selv skal kunne skaffe deg og eie den plassen, den egenarten og de oppgavene du selv ønsker deg..."`,
      solution: `**Analyse:**

Pico lar Gud tale til Adam (mennesket). Budskapet er at mennesket ikke er låst til en bestemt natur som dyr og planter. Mennesket har frihet til å forme seg selv.

**Kontrast til middelalderen:**
- Middelalderen: Mennesket er synder som trenger nåde
- Humanismen: Mennesket har uante muligheter

Teksten ble et manifest for humanismens optimistiske menneskesyn.`,
    },
    {
      id: 'norsk-vg2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva humanismen var og hva som kjennetegner den.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "humanisme", og når oppsto bevegelsen?',
            solution: 'Humanisme kommer fra "studia humanitatis". Bevegelsen oppsto i Italia på 1300-tallet.',
          },
          {
            label: 'b',
            task: 'Hvordan skilte humanismens menneskesyn seg fra middelalderens?',
            solution: 'Humanismen fremhevet menneskets muligheter og frie vilje, mens middelalderen fokuserte på arvesynd og Guds nåde.',
          },
        ],
        solution: 'Humanismen representerte et skifte mot fokus på mennesket og livet her og nå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Bibeloversettelser og trykkpressen
// ============================================================================

export const CHAPTER_NORSK_VG2_2_2: TextbookChapter = {
  id: 'norsk-vg2-2-2',
  courseId: 'norsk-vg2',
  chapterNumber: '2.2',
  title: 'Bibeloversettelser og trykkpressen',
  description: 'Lær om reformasjonen, trykkpressens revolusjon og de første tekstene på folkespråket.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-2-2-intro',
      type: 'text',
      content: `## Reformasjonen og språkets frigjøring

Reformasjonen på 1500-tallet var ikke bare en religiøs omveltning - den var også en språklig revolusjon. Da Martin Luther krevde at folk skulle kunne lese Bibelen på sitt eget språk, satte han i gang en prosess som fundamentalt endret europeisk kultur.

**Martin Luther og Bibelen**

Luther oversatte Bibelen til tysk - Det nye testamente i 1522, hele Bibelen i 1534. Oversettelsen ble et språklig mesterverk som formet det tyske språket.

**Trykkpressens betydning**

Gutenbergs trykkpresse (ca. 1450) gjorde det mulig å masseprodusere bøker. Luthers skrifter kunne spres i tusenvis av eksemplarer over hele Europa.

**Reformasjonen i Danmark-Norge**

Danmark-Norge ble protestantisk i 1536. Christian IIIs bibel (1550) ble normen for dansk skriftspråk. For Norge betydde dette at dansk ble offisielt skriftspråk.`,
    },
    {
      id: 'norsk-vg2-2-2-def-1',
      type: 'definition',
      title: 'Reformasjonen - sentrale begreper',
      content: `**Reformasjonen:** Religiøs bevegelse som brøt med den katolske kirken.

**Sola scriptura:** "Skriften alene" - Bibelen som eneste autoritet.

**Trykkpresse:** Gutenbergs oppfinnelse som revolusjonerte spredningen av tekster.

**Christian IIIs bibel (1550):** Første fullstendige danske bibeloversettelse.`,
    },
    {
      id: 'norsk-vg2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar reformasjonens betydning for språk og litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor oversatte Luther Bibelen til tysk?',
            solution: 'Luther mente alle burde kunne lese Guds ord selv, ikke bare de lærde.',
          },
          {
            label: 'b',
            task: 'Hva var konsekvensene for Norge?',
            solution: 'Dansk ble offisielt skriftspråk. Kirken ble luthersk.',
          },
        ],
        solution: 'Reformasjonen frigjorde folkespråkene fra latinens dominans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Petter Dass - dikterpresten
// ============================================================================

export const CHAPTER_NORSK_VG2_2_3: TextbookChapter = {
  id: 'norsk-vg2-2-3',
  courseId: 'norsk-vg2',
  chapterNumber: '2.3',
  title: 'Petter Dass - dikterpresten',
  description: 'Lær om Petter Dass og hans diktning som kombinerer barokk religiøsitet med nordnorsk natur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-2-3-intro',
      type: 'text',
      content: `## Petter Dass - Norges første store dikter

Petter Dass (1647-1707) regnes som den første store dikteren i norsk litteraturhistorie. Som prest i Alstahaug på Helgelandskysten kombinerte han sitt religiøse kall med et usedvanlig diktertalent. Hans verk lever fortsatt i norsk kultur, og "Nordlands Trompet" gir et levende bilde av livet i Nord-Norge på 1600-tallet.

**Liv og virke**

Petter Dass ble født i Herøy på Helgeland i 1647. Faren var skotsk innvandrer (Peter Dundas), moren var norsk. Han studerte teologi i København og ble prest på Nesna i 1672, deretter sogneprest i Alstahaug i 1689.

Som prest hadde Dass ansvar for et enormt område med spredt bosetting. Han måtte reise lange avstander i åpen båt for å betjene menighetene. Denne nærheten til folket og naturen preger diktningen hans.

**Nordlands Trompet**

Dass' hovedverk er "Nordlands Trompet", et topografisk dikt som beskriver Nordland fylke fra sør til nord. Diktet ble ikke trykt før lenge etter hans død (første gang 1739), men sirkulerte i avskrifter.

Verket er unikt i sin tid:
- Det skildrer et konkret norsk landskap
- Det gir detaljerte beskrivelser av fiske, natur og folkeliv
- Det kombinerer lærd barokkstil med folkelig humor
- Det uttrykker kjærlighet til Nord-Norge og dets folk

**Katekismesangene**

Dass skrev også "Katekismesanger" - salmer som forklarte Luthers lille katekisme. Disse ble enormt populære og var i bruk i norske skoler helt frem til 1900-tallet. Sangene viser Dass' evne til å formidle religiøst stoff på en folkelig og sangbar måte.

**Barokke trekk**

Dass hører hjemme i barokken som litterær epoke. Hans diktning viser typiske barokktrekk:
- Kontrastvirkning (himmel og jord, glede og sorg)
- Rik billedbruk og metaforer
- Fokus på livets forgjengelighet
- Religiøs alvor kombinert med livsglede`,
    },
    {
      id: 'norsk-vg2-2-3-def-1',
      type: 'definition',
      title: 'Petter Dass - sentrale begreper',
      content: `**Topografisk dikt:** Et dikt som beskriver et geografisk område systematisk.

**Nordlands Trompet:** Dass' hovedverk som skildrer Nordland fylke - natur, folk, næring.

**Katekismesanger:** Salmer som forklarer Luthers katekisme - brukt i skolen i århundrer.

**Barokk:** Litterær og kunstnerisk epoke ca. 1600-1750, kjennetegnet av kontraster, rik billedbruk og religiøs tematikk.

**Kjennetegn ved Dass' diktning:**
- Konkret skildring av norsk natur og folkeliv
- Folkelig tone kombinert med lærd form
- Humor og livsglede
- Dyp religiøsitet`,
    },
    {
      id: 'norsk-vg2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra Nordlands Trompet - "Herre Gud, dit dyre Navn og Ære"',
      problem: `Les dette utdraget fra en av Dass' mest kjente salmer, opprinnelig fra Nordlands Trompet:

"Herre Gud, dit dyre Navn og Ære
over verden høit i Akt skal være,
Og alle Siele, som i Verden boe,
De skulle Dig dit Navn bekjende,
Og alle Knæ for Dig sig bøie maa
Alt hvad sig rører her paa Jorderige."`,
      solution: `**Analyse:**

**Form:**
- Høytidelig salmestil
- Allitterasjon og rytme
- Bibelsk språk og billedbruk

**Innhold:**
- Lovprisning av Gud
- Alle skapninger skal ære Gud
- Religiøs underkastelse

**Barokke trekk:**
- Kontrasten mellom Guds storhet og menneskets litenhet
- Rik, høytidelig språkføring
- Fokus på det evige fremfor det jordiske

Salmen har levd i norsk tradisjon i over 300 år og synges fortsatt i kirker.`,
    },
    {
      id: 'norsk-vg2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar Petter Dass\' betydning i norsk litteraturhistorie.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem var Petter Dass, og når og hvor levde han?',
            solution: 'Petter Dass (1647-1707) var prest på Helgeland i Nord-Norge. Han regnes som Norges første store dikter.',
          },
          {
            label: 'b',
            task: 'Hva handler "Nordlands Trompet" om, og hvorfor er verket unikt?',
            solution: 'Nordlands Trompet er et topografisk dikt som skildrer Nordland. Det er unikt fordi det gir detaljerte beskrivelser av norsk natur og folkeliv på 1600-tallet.',
          },
        ],
        solution: 'Petter Dass kombinerte barokk religiøsitet med folkelig stil og skildringer av Nord-Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Barokkens kjennetegn
// ============================================================================

export const CHAPTER_NORSK_VG2_3_1: TextbookChapter = {
  id: 'norsk-vg2-3-1',
  courseId: 'norsk-vg2',
  chapterNumber: '3.1',
  title: 'Barokkens kjennetegn',
  description: 'Utforsk barokken som litterær epoke med fokus på kontraster, forgjengelighet og religiøsitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-3-1-intro',
      type: 'text',
      content: `## Barokken - kunstens overdådige epoke

Barokken var en kunst- og litteraturretning som dominerte Europa fra ca. 1600 til 1750. Betegnelsen kommer trolig fra det portugisiske "barroco" - en uregelmessig perle. Barokken kjennetegnes av overdådighet, kontraster og en dyp bevissthet om livets forgjengelighet.

**Historisk bakgrunn**

Barokken oppsto i en urolig tid:
- Religionskrigene herjet Europa etter reformasjonen
- Pest og krig førte til massedød
- Vitenskapen utfordret det gamle verdensbildet
- Den katolske motreformasjonen brukte kunst som propaganda

Denne uroen preger barokkens kunst og litteratur. Kontrasten mellom livets skjønnhet og dødens uunngåelighet er et gjennomgangstema.

**Barokkens litterære kjennetegn**

*Antiteser og kontraster:* Barokken elsket motsetninger - lys og mørke, liv og død, himmel og jord, skjønnhet og forfall.

*Vanitas-motivet:* "Vanitas" (forfengelighet) - alt jordisk er forgjengelig. Livet er kort, døden sikker.

*Carpe diem:* "Grip dagen" - nyt livet mens du kan, for døden kommer.

*Overdådig stil:* Rike metaforer, allegorier, ordspill, lange setninger.

*Religiøs alvor:* Fokus på frelsen, livets mening, menneskets plass i skaperverket.

**Barokken i Danmark-Norge**

Barokken kom sent til Norden. Viktige forfattere var:
- Thomas Kingo (dansk) - salmedikter
- Dorothe Engelbretsdatter (norsk) - religiøs lyrikk
- Petter Dass (norsk) - salmer og topografisk diktning`,
    },
    {
      id: 'norsk-vg2-3-1-def-1',
      type: 'definition',
      title: 'Barokkens litterære begreper',
      content: `**Vanitas:** "Forfengelighet" - alt jordisk er forgjengelig. Vanitas-motiver inkluderer hodeskaller, vissne blomster, timeglass.

**Memento mori:** "Husk at du skal dø" - påminnelse om dødens uunngåelighet.

**Carpe diem:** "Grip dagen" - nyt livet mens du kan.

**Antitese:** Motsetning - barokken elsket kontraster (lys/mørke, liv/død).

**Allegori:** Utvidet billedbruk der konkrete elementer står for abstrakte begreper.

**Emblem:** Kombinasjon av bilde, overskrift og utlegning - populær barokksjanger.

**Barokkstilens kjennetegn:**
- Lange, komplekse setninger
- Rike metaforer og sammenligninger
- Overdådighet og ornamentering
- Patos og følelsesladethet`,
    },
    {
      id: 'norsk-vg2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Thomas Kingo - "Sorrig og Glæde"',
      problem: `Les dette utdraget fra Thomas Kingos salme "Sorrig og Glæde de vandre til Hobe" (1681):

"Sorrig og Glæde de vandre til Hobe,
Lykke, Ulykke de ganger paa Rad,
Medgang og Modgang hinanden mon love,
Soelskin og Skyer de følges og ad."`,
      solution: `**Analyse:**

**Barokke kontraster:**
- Sorg/glede
- Lykke/ulykke
- Medgang/motgang
- Solskin/skyer

Hvert verspar setter to motsetninger opp mot hverandre.

**Tema:**
Livet er vekslende - gode og onde tider følger hverandre. Dette er typisk barokk visdom: ingenting varer, alt forandres.

**Form:**
- Parallellisme (lignende setningsstruktur gjentas)
- Rim og rytme
- Billedbruk fra naturen (solskin/skyer)

Salmen uttrykker barokkens syn på livets ustabilitet og behovet for å finne trøst i det evige.`,
    },
    {
      id: 'norsk-vg2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar barokkens kjennetegn som litterær epoke.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr vanitas-motivet, og hvorfor var det sentralt i barokken?',
            solution: 'Vanitas betyr forfengelighet - alt jordisk er forgjengelig. Motivet var sentralt fordi barokken var preget av krig, pest og religiøs uro.',
          },
          {
            label: 'b',
            task: 'Hva menes med barokkens kontraster (antiteser)?',
            solution: 'Barokken elsket motsetninger: liv/død, lys/mørke, himmel/jord. Disse kontrastene preger både form og innhold.',
          },
        ],
        solution: 'Barokken kombinerte overdådighet med dyptfølt religiøsitet og bevissthet om døden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Dorothe Engelbretsdatter
// ============================================================================

export const CHAPTER_NORSK_VG2_3_2: TextbookChapter = {
  id: 'norsk-vg2-3-2',
  courseId: 'norsk-vg2',
  chapterNumber: '3.2',
  title: 'Dorothe Engelbretsdatter',
  description: 'Lær om Norges første kvinnelige forfatter og hennes religiøse diktning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-3-2-intro',
      type: 'text',
      content: `## Dorothe Engelbretsdatter - Nordens første kvinnelige forfatter

Dorothe Engelbretsdatter (1634-1716) regnes som Nordens første profesjonelle kvinnelige forfatter. Hennes religiøse diktning var enormt populær i sin samtid og ble lest og sunget i generasjoner.

**Liv og virke**

Dorothe ble født i Bergen i 1634. Faren var prest, og hun fikk en god utdannelse. I 1652 giftet hun seg med presten Ambrosius Hardenbech. De fikk ni barn, men syv av dem døde i ung alder. Denne personlige tragedien preger diktningen hennes.

Etter mannens død i 1683 levde hun som enke i Bergen og fikk kongelig pensjon for sin diktning - en anerkjennelse som var svært uvanlig for en kvinne på den tiden.

**Verk**

Dorothes hovedverk er:
- "Siælens Sang-Offer" (1678) - religiøse sanger
- "Taare-Offer" (1685) - sanger om sorg og trøst

Diktene ble trykt i mange opplag og var i bruk i norske hjem i over 100 år.

**Barokke trekk**

Dorothes diktning viser typiske barokktrekk:
- Vanitas-motiver og livets forgjengelighet
- Lengsel etter himmelen og det evige
- Rike bilder og metaforer
- Personlig, følelsesladet tone`,
    },
    {
      id: 'norsk-vg2-3-2-def-1',
      type: 'definition',
      title: 'Dorothe Engelbretsdatter - sentrale trekk',
      content: `**Biografiske fakta:**
- 1634-1716
- Født i Bergen, datter av prest
- Gift med prest, mistet 7 av 9 barn
- Fikk kongelig pensjon for diktningen

**Hovedverk:**
- "Siælens Sang-Offer" (1678)
- "Taare-Offer" (1685)

**Tematikk:**
- Sorg over døde barn
- Lengsel etter himmelen
- Trøst i troen
- Livets forgjengelighet

**Litterær betydning:**
- Nordens første kvinnelige forfatter
- Enormt populær i sin samtid
- Barokk religiøs lyrikk
- Personlig, følelsesladet stil`,
    },
    {
      id: 'norsk-vg2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra Siælens Sang-Offer',
      problem: `Les dette utdraget fra Dorothe Engelbretsdatter:

"Ach! hvad er dog denne Verden,
Med sin Lyst og Pragt og Ære!
Intet uden Skam og Smærte,
Intet uden Sorg at bære."`,
      solution: `**Analyse:**

**Vanitas-motiv:**
Verden med sin "Lyst og Pragt og Ære" er egentlig ingenting - bare "Skam og Smærte" og "Sorg at bære".

**Barokke kontraster:**
- Overflate: Lyst, Pragt, Ære
- Realitet: Skam, Smærte, Sorg

**Personlig tone:**
"Ach!" - utropet gir diktet en personlig, følelsesladet tone.

**Teologisk budskap:**
Det jordiske er forgjengelig. Kun det himmelske gir virkelig verdi.

Utdraget viser hvordan Dorothe kombinerer barokkens vanitas-tenkning med personlig erfaring av sorg.`,
    },
    {
      id: 'norsk-vg2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Dorothe Engelbretsdatters diktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er Dorothe Engelbretsdatter viktig i norsk litteraturhistorie?',
            solution: 'Hun regnes som Nordens første kvinnelige forfatter. Diktene var enormt populære og ble lest i generasjoner.',
          },
          {
            label: 'b',
            task: 'Hvordan preger Dorothes personlige erfaringer diktningen hennes?',
            solution: 'Hun mistet 7 av 9 barn. Sorgen over dette preger diktene, som ofte handler om død, sorg og lengsel etter himmelen.',
          },
        ],
        solution: 'Dorothe Engelbretsdatter kombinerte personlig erfaring med barokkens religiøse tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Thomas Kingo og salmediktning
// ============================================================================

export const CHAPTER_NORSK_VG2_3_3: TextbookChapter = {
  id: 'norsk-vg2-3-3',
  courseId: 'norsk-vg2',
  chapterNumber: '3.3',
  title: 'Thomas Kingo og salmediktning',
  description: 'Lær om den store danske salmedikteren Thomas Kingo og barokkens religiøse lyrikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-3-3-intro',
      type: 'text',
      content: `## Thomas Kingo - barokkens mester i salmesang

Thomas Kingo (1634-1703) regnes som den største danske salmedikteren gjennom tidene, og hans salmer ble sunget i norske kirker og hjem i flere hundre år. Hans diktning kombinerer barokkens stilistiske virtuositet med dyp religiøs innlevelse og har hatt enorm betydning for dansk-norsk kirkeliv og litteratur.

**Liv og bakgrunn**

Thomas Kingo ble født i Slangerup på Sjælland i 1634, samme år som Dorothe Engelbretsdatter. Faren var skotsk handelsmann som hadde slått seg ned i Danmark. Kingo studerte teologi ved Københavns universitet og ble prest i 1661. Hans litterære talent ble tidlig lagt merke til, og han skrev hyllingsdikt til kongen som skaffet ham gunst ved hoffet.

I 1677 ble Kingo utnevnt til biskop i Odense, en stilling han hadde til sin død. Som biskop arbeidet han for å reformere kirkelivet og styrke den religiøse oppbyggelsen i menighetene. Hans store livsprosjekt var å skape en ny salmebok som kunne erstatte de gamle, ofte grove og uvitenskapelige salmene som var i bruk.

**Litterær produksjon**

Kingos hovedverk er salmene. Han utga to store samlinger:

**Aandelige Siunge-Koor (1674, 1681):** Denne samlingen inneholder morgen- og aftensalmer, en for hver ukedag. Salmene følger menneskets liv gjennom hverdagen og året, med fokus på troens betydning i alle livets situasjoner.

**Kingos Salmebog (1699):** Denne autoriserte salmeboken skulle erstatte eldre samlinger og ble brukt i kirken i over hundre år. Den inneholder både Kingos egne salmer og bearbeidelser av eldre tekster.

**Barokke stiltrekk hos Kingo**

Kingos salmer er mesterstykker i barokk diktning. De kjennetegnes av:

*Kontraster og spenninger:*
Kingo elsker å sette motsetninger opp mot hverandre - lys mot mørke, liv mot død, syndefallens elendighet mot frelserens nåde. Disse kontrastene skaper dramatikk og spenning i tekstene.

*Rike bilder og metaforer:*
Salmene er fulle av levende bilder hentet fra naturen, hverdagslivet og Bibelen. Kingo bruker bildespråket til å gjøre abstrakte religiøse sannheter konkrete og følbare.

*Musikalitet og rytme:*
Kingo hadde et utsøkt øre for språkets klang. Hans vers flyter melodiøst og er laget for å synges. Rim, rytme og allitterasjon brukes bevisst for å skape stemning.

*Personlig henvendelse:*
Selv om salmene er ment for fellesskapets sang, har de ofte en personlig, nærmest intim tone. Dikter-jeget henvender seg direkte til Gud eller til sin egen sjel.

**Teologisk innhold**

Kingos salmer er preget av luthersk ortodoksi, men også av pietismens personlige fromhet. Sentrale temaer er:

- Menneskets syndighet og avhengighet av Guds nåde
- Jesu lidelse og forsoningens mysterium
- Naturens vitnesbyrd om skaperens storhet
- Livets forgjengelighet og dødens realitet
- Håpet om evig liv og gjenforening med Gud

Kingo var ikke redd for å skildre livets mørke sider - sykdom, død, sorg og fortvilelse. Men alltid munner tekstene ut i trøst og håp forankret i troen på frelsen.

**Betydning og etterliv**

Kingos salmer ble en sentral del av dansk-norsk fromhetsliv. De ble sunget i kirken, i hjemmene og ved livets store overganger - dåp, konfirmasjon, bryllup og begravelse. Flere av hans salmer synges fortsatt i norske kirker i dag.

Hans innflytelse på senere salmediktere er enorm. Grundtvig, som fornyelsenes mann på 1800-tallet, beundret Kingo og lot seg inspirere av hans språklige kraft. Også i vår tid gjenkjennes Kingos toneleie i nyskrevet salmelyrikk.

Som litterært verk representerer Kingos salmer høydepunktet i dansk-norsk barokkdiktning. Kombinasjonen av stilistisk raffinement og religiøs intensitet gjør dem til varige mesterverk i skandinavisk litteratur.`,
    },
    {
      id: 'norsk-vg2-3-3-def-1',
      type: 'definition',
      title: 'Thomas Kingo - sentrale begreper',
      content: `**Biografiske fakta:**
- 1634-1703
- Født i Slangerup på Sjælland, far av skotsk herkomst
- Prest fra 1661, biskop i Odense fra 1677
- Regnes som den største danske salmedikteren

**Hovedverk:**
- "Aandelige Siunge-Koor" del 1 (1674)
- "Aandelige Siunge-Koor" del 2 (1681)
- "Kingos Salmebog" (1699)

**Litterære kjennetegn:**
- Barokke kontraster (lys/mørke, liv/død)
- Rike metaforer og bilder
- Musikalitet og rytmisk presisjon
- Personlig, intim tone

**Viktige salmer:**
- "Sorrig og Glæde de vandre tilhobe"
- "Far, Verden, far vel"
- "Hver har sin Skæbne"
- "Som den gyldne Sol frembryder"`,
    },
    {
      id: 'norsk-vg2-3-3-def-2',
      type: 'definition',
      title: 'Salmen som sjanger',
      content: `**Salme:** En religiøs sang ment for fellesskapets bruk i gudstjeneste eller andakt.

**Salmetyper:**
- *Lovprisningssalmer:* Hyller Guds storhet
- *Botssalmer:* Uttrykker anger over synder
- *Trøstesalmer:* Gir håp i vanskeligheter
- *Morgen- og aftensalmer:* Knyttet til døgnets rytme
- *Høytidssalmer:* For jul, påske, pinse osv.

**Formelle trekk:**
- Versemål tilpasset melodi
- Enderim (ofte kryssrim eller parrim)
- Refreng eller omkved
- Bibelske referanser

**Salmens funksjoner:**
- Teologisk undervisning
- Fellesskapets uttrykk for tro
- Personlig andakt og trøst
- Markering av livets overganger`,
    },
    {
      id: 'norsk-vg2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: "Sorrig og Glæde de vandre tilhobe"',
      problem: `Les denne strofen fra Kingos mest kjente salme:

"Sorrig og Glæde de vandre tilhobe,
Lykke, Ulykke de ganger paa Rad,
Medgang og Modgang hinanden tilrobe,
Solskin og Skyer de følges og ad.
Jorderigs Guld
Er prægtig Muld,
Himlen er ene af Salighed fuld."

Analyser strofens innhold og virkemidler.`,
      solution: `**Analyse av "Sorrig og Glæde":**

**Tematikk - livets skiftninger:**
Salmen handler om livets uforutsigbarhet. Glede og sorg, lykke og ulykke, medgang og motgang følger hverandre. Dette er en grunnleggende menneskelig erfaring som Kingo formulerer med stor presisjon.

**Barokke kontraster:**
- Sorrig / Glæde
- Lykke / Ulykke
- Medgang / Modgang
- Solskin / Skyer

Disse kontrastparene er typisk barokke. De viser hvordan motsetninger hører sammen og veksler i menneskelivet.

**Personifikasjon:**
Sorrig og Glæde "vandre tilhobe" - de fremstilles som personer som vandrer side om side. Det samme gjelder Medgang og Modgang som "tilrobe" hverandre.

**Vanitas-motivet:**
"Jorderigs Guld / Er prægtig Muld" - det jordiske er bare støv, uansett hvor vakkert det synes. Dette er det klassiske barokke vanitas-motivet.

**Konklusjon og trøst:**
"Himlen er ene af Salighed fuld" - bare himmelen gir virkelig lykke. Det jordiske er forgjengelig, men det himmelske er evig.

**Versemål og musikalitet:**
Strofen har et dansende, vuggende versemål som understreker temaet om veksling og bevegelse. Rimene (tilhobe/tilrobe, Rad/ad) binder versene sammen.

**Helhetlig budskap:**
Kingo trøster leseren: Det er naturlig at livet svinger mellom glede og sorg. Men bak alle svingningene finnes en evig salighet som venter. Denne visdommen gjør det lettere å bære livets motgang.`,
    },
    {
      id: 'norsk-vg2-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Morgensalme - "Som den gyldne Sol frembryder"',
      problem: `Les begynnelsen av Kingos morgensalme:

"Som den gyldne Sol frembryder
Gjennem den kullsorte Sky,
Og sin Straale-Glands udskyder,
At Nat-Mørket maa bort fly:
Saa min Jesu Naades Skin
Trænger og i Sjælen ind."

Analyser hvordan Kingo bruker naturen som bilde på det åndelige.`,
      solution: `**Analyse av morgensalmen:**

**Naturbildet:**
Kingo beskriver soloppgangen: Den gyldne solen bryter gjennom mørke skyer og sender ut stråler som jager nattemørket bort. Dette er et vakkert og gjenkjennelig bilde.

**Sammenligning (simile):**
"Som... Saa" - Kingo sammenligner solen med Jesus. Akkurat som solen bryter gjennom mørket, trenger Jesu nåde inn i sjelen.

**Symbolikk:**
- Sol = Jesus, Guds lys
- Mørke/natt = synd, fortvilelse, uvitenhet
- Stråler = nåden som opplyser

**Teologisk budskap:**
Hver morgen kan vi oppleve nådens under. Akkurat som natten viker for solen, viker syndens mørke for Jesu lys.

**Hverdagsfromhet:**
Salmen knytter den religiøse opplevelsen til hverdagen. Soloppgangen, som alle kjenner, blir et bilde på Guds nåde. Slik gjør Kingo teologien konkret og nær.

**Barokke trekk:**
- Kontrasten lys/mørke
- Rike bilder fra naturen
- Dramatisk bevegelse (solen "frembryder")
- Personlig henvendelse ("min Jesu")

**Salmens funksjon:**
Som morgensalme skulle den synges ved dagens begynnelse. Den minner om Guds godhet og gir styrke til dagens gjerninger.`,
    },
    {
      id: 'norsk-vg2-3-3-tip-1',
      type: 'tip',
      title: 'Tips for salmeanalyse',
      content: `**Slik analyserer du en salme:**

**1. Les salmen høyt:**
Salmer er laget for å synges eller fremføres muntlig. Lytt til rytmen og melodien i språket.

**2. Identifiser sjanger:**
Er det en lovprisning, botssalme, trøstesalme eller høytidssalme? Dette påvirker tolkningen.

**3. Finn kontrastene:**
Barokksalmer er fulle av kontraster. Disse bærer ofte budskapet.

**4. Analyser bildespråket:**
- Hvilke bilder brukes?
- Hva representerer de?
- Hvordan skaper de mening?

**5. Finn det teologiske innholdet:**
- Hva sies om Gud, mennesket, frelsen?
- Hvilken trøst eller formaning gis?

**6. Vurder musikaliteten:**
- Hvordan fungerer rim og rytme?
- Hvordan støtter formen innholdet?

**7. Sett i kontekst:**
- Når skulle salmen brukes?
- Hvem var målgruppen?
- Hva var funksjonen?`,
    },
    {
      id: 'norsk-vg2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Thomas Kingos salmediktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner barokk salmediktning generelt?',
            solution: 'Barokk salmediktning kjennetegnes av sterke kontraster (lys/mørke, liv/død), rike bilder og metaforer, vanitas-motiver (livets forgjengelighet), musikalitet og rytme, samt personlig, følelsesladet tone.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan kontrastene i "Sorrig og Glæde" uttrykker et barokt verdensbilde.',
            solution: 'Kontrastparene (sorg/glede, lykke/ulykke osv.) viser barokkens oppfatning av verden som full av motsetninger og omskiftelser. Det jordiske er forgjengelig og ustabilt, bare det himmelske er evig og fast.',
          },
          {
            label: 'c',
            task: 'Hvorfor ble Kingos salmer så populære og langvarige i bruk?',
            solution: 'Salmene kombinerer kunstnerisk kvalitet med religiøs dybde. De behandler allmennmenneskelige temaer (sorg, glede, dødsangst, håp) på en måte som treffer. Språket er vakkert og melodiøst, og budskapet gir trøst og mening.',
          },
        ],
        solution: 'Kingos salmer representerer høydepunktet i dansk-norsk barokklitteratur og har formet skandinavisk fromhetsliv i generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign barokkens salmediktere.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har Thomas Kingo og Dorothe Engelbretsdatter til felles i sin diktning?',
            solution: 'Begge skriver religiøs lyrikk i barokkstil med sterke kontraster, vanitas-motiver, rike bilder og personlig tone. Begge behandler livets forgjengelighet og lengsel etter det evige.',
          },
          {
            label: 'b',
            task: 'Hva skiller Kingo og Dorothe fra hverandre?',
            solution: 'Kingo skrev for kirkens offisielle bruk og ble biskop. Dorothe skrev mer privat andaktslitteratur preget av personlige sorger. Kingo har et bredere register, Dorothe er mer intimt sorgpreget.',
          },
          {
            label: 'c',
            task: 'Finn en salme i salmeboken som fortsatt brukes, og undersøk om den er fra barokktiden.',
            solution: 'Eksempel: "Herre Gud, ditt dyre navn og ære" (Petter Dass), "Sorrig og Glæde" (Kingo). Mange barokksalmer brukes fortsatt, noen i modernisert språkform.',
          },
        ],
        solution: 'Barokkens salmediktere har satt varige spor i skandinavisk kirkemusikk og fromhetsliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv om salmetradisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor var salmer så viktige i folk liv på 1600-1700-tallet?',
            solution: 'Salmer var hovedkilden til religiøs undervisning for folk flest. De ble sunget i kirken og hjemme, og lærte folk teologi, moral og trøst. I et samfunn uten radio, TV eller internett var salmer en sentral kulturform.',
          },
          {
            label: 'b',
            task: 'Sammenlign salmens funksjon da og nå.',
            solution: 'Før var salmer sentrale i hverdagen og markerte livets overganger. I dag synges de mest i kirken og ved høytider. Færre kan salmevers utenat, men salmer har fortsatt betydning ved bryllup, begravelser og høytider.',
          },
        ],
        solution: 'Salmetradisjonen viser hvordan litteratur og musikk kan forme folks liv og tro over generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Opplysningstidens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_4_1: TextbookChapter = {
  id: 'norsk-vg2-4-1',
  courseId: 'norsk-vg2',
  chapterNumber: '4.1',
  title: 'Opplysningstidens ideer',
  description: 'Utforsk 1700-tallets tro på fornuft, vitenskap og fremskritt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
  ],
  content: [
    {
      id: 'norsk-vg2-4-1-intro',
      type: 'text',
      content: `## Opplysningstiden - fornuftens tidsalder

Opplysningstiden (ca. 1700-1800) var en intellektuell bevegelse som satte fornuften i høysetet. Opplysningsfilosofene trodde at mennesket gjennom fornuft og vitenskap kunne opplyses, forbedres og frigjøres fra overtro, undertrykkelse og uvitenhet.

**Sentrale ideer**

*Fornuft:* Menneskets fornuft er veien til sannhet og fremskritt. Alt skal prøves mot fornuftens dom.

*Vitenskap:* Naturvitenskapelig metode - observasjon og eksperiment - gir sikker kunnskap.

*Fremskritt:* Menneskheten kan forbedres gjennom utdanning og opplysning.

*Toleranse:* Religiøs toleranse og ytringsfrihet er nødvendig for fremskritt.

*Kritikk:* Autoriteter (kirke, konge, tradisjon) må tåle å bli kritisert og utfordret.

**Viktige tenkere**

- Voltaire (Frankrike) - kritikk av kirke og intoleranse
- Montesquieu - maktfordelingsprinsippet
- Rousseau - samfunnskontrakten, naturlig frihet
- Locke (England) - menneskerettigheter
- Kant (Tyskland) - "Sapere aude" (våg å bruke din forstand)

**Opplysningstiden i Danmark-Norge**

I Danmark-Norge ble opplysningsideer fremmet gjennom:
- Ludvig Holberg - forfatter og filosof
- Det Kongelige Danske Videnskabers Selskab (1742)
- Reformer i utdanning og lovgivning
- Aviser og tidsskrifter

Norge fikk sitt første universitet i 1811, delvis inspirert av opplysningstidens idealer.`,
    },
    {
      id: 'norsk-vg2-4-1-def-1',
      type: 'definition',
      title: 'Opplysningstidens begreper',
      content: `**Opplysning (Enlightenment):** Intellektuell bevegelse som vektla fornuft, vitenskap og fremskritt.

**Rasjonalisme:** Filosofisk retning som setter fornuften som kilde til kunnskap.

**Deisme:** Tro på en gud som skapte verden, men som ikke griper inn - forenlig med fornuft.

**Toleranse:** Aksept av ulike meninger og trosretninger.

**Encyklopedien:** Det store franske oppslagsverket (1751-72) som samlet all kunnskap.

**Sapere aude:** "Våg å bruke din forstand" - Kants motto for opplysningstiden.

**Samfunnskontrakten:** Ideen om at staten bygger på en avtale mellom borgerne.

**Naturrett:** Tanken om at mennesker har medfødte rettigheter uavhengig av lover.`,
    },
    {
      id: 'norsk-vg2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Kant om opplysning',
      problem: `Les dette utdraget fra Immanuel Kants essay "Hva er opplysning?" (1784):

"Opplysning er menneskets utgang fra sin selvforskyldte umyndighet. Umyndighet er manglende evne til å bruke sin forstand uten en annens ledelse. Selvforskyldt er denne umyndighet når årsaken ikke ligger i forstandens mangler, men i manglende besluttsomhet og mot til å bruke den uten en annens ledelse. Sapere aude! Ha mot til å bruke din egen forstand!"`,
      solution: `**Analyse:**

**Hovedbudskap:**
Opplysning handler om å frigjøre seg fra andres kontroll over ens tenkning. Mennesket må våge å tenke selv.

**"Selvforskyldt umyndighet":**
Kant mener vi selv er ansvarlige hvis vi lar andre tenke for oss. Det er ikke mangel på evne, men mangel på mot.

**"Sapere aude":**
Det latinske mottoet betyr "våg å vite" eller "våg å bruke din forstand". Det oppsummerer opplysningsprosjektet.

**Kritikk av autoriteter:**
Implisitt kritiserer Kant kirke og myndigheter som holder folk i uvitenhet.

**Relevans:**
Kants budskap er fortsatt aktuelt: Vi må tenke kritisk og ikke ukritisk akseptere det autoriteter forteller oss.`,
    },
    {
      id: 'norsk-vg2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar opplysningstidens sentrale ideer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente opplysningsfilosofene med "fornuft"?',
            solution: 'Fornuften er menneskets evne til å tenke kritisk og logisk. Alt - religion, politikk, tradisjon - skal prøves mot fornuftens dom.',
          },
          {
            label: 'b',
            task: 'Hva mente Kant med "selvforskyldt umyndighet"?',
            solution: 'Kant mente at hvis vi lar andre tenke for oss, er vi selv ansvarlige. Det er mangel på mot, ikke evne.',
          },
        ],
        solution: 'Opplysningstiden handlet om å frigjøre mennesket gjennom fornuft og kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Ludvig Holberg
// ============================================================================

export const CHAPTER_NORSK_VG2_4_2: TextbookChapter = {
  id: 'norsk-vg2-4-2',
  courseId: 'norsk-vg2',
  chapterNumber: '4.2',
  title: 'Ludvig Holberg - forfatter og opplysningsmann',
  description: 'Lær om Ludvig Holberg og hans betydning for dansk-norsk litteratur og kultur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-4-2-intro',
      type: 'text',
      content: `## Ludvig Holberg - den dansk-norske opplysningens far

Ludvig Holberg (1684-1754) var den viktigste forfatteren i Danmark-Norge på 1700-tallet. Født i Bergen, utdannet i København og Europa, ble han professor og senere baron. Hans komedier, essays og historiske verker gjorde ham til en sentral skikkelse i europeisk opplysningstid.

**Liv og bakgrunn**

Holberg ble født i Bergen i 1684, samme år som Dorothe Engelbretsdatter utga sin "Taare-Offer". Familien var borgerlig, og Holberg studerte teologi i København. Han reiste mye i Europa og ble påvirket av europeisk opplysningstenkning.

I 1717 ble han professor i København, først i metafysikk, senere i historie. Han ble adlet i 1747 med tittelen baron.

**Komediene**

Holberg skrev 33 komedier for det danske teater. De mest kjente er:
- "Jeppe på Bjerget" (1722)
- "Erasmus Montanus" (1723)
- "Den politiske Kandestøber" (1722)

Komediene satirierer dumhet, forfengelighet og overtro. De er inspirert av Molière, men med dansk-norsk setting og karakterer.

**Opplysningsprosjektet**

Holberg var mer enn underholder - han var opplysningsmann:
- Han skrev populærvitenskapelige verker
- Han kritiserte overtro og fordommer
- Han fremmet toleranse og fornuft
- Han gjorde lærdom tilgjengelig for flere

**Holbergs syn på mennesker**

Holberg hadde et realistisk syn på mennesker. Han trodde ikke alle kunne bli like kloke, men han mente at utdanning og opplysning kunne forbedre samfunnet. Han satiriserte både bondsk uvitenhet og akademisk pedanteri.`,
    },
    {
      id: 'norsk-vg2-4-2-def-1',
      type: 'definition',
      title: 'Holbergs komedier - sjangertrekk',
      content: `**Komedie:** Dramatisk sjanger som bruker humor og satire til å kritisere og underholde.

**Satire:** Bruk av ironi, overdrivelse og humor for å kritisere samfunnsforhold.

**Type-karakterer:** Karakterer som representerer bestemte egenskaper (den dumme, den forfengelige, den pedantiske).

**Intrige:** Komplisert handling med forviklinger, ofte med forkleding og forveksling.

**Holbergs komiske virkemidler:**
- Dialektbruk for å karakterisere
- Overdrivelse og absurditeter
- Kontrast mellom pretensjoner og virkelighet
- Forviklinger og misforståelser

**Typiske temaer:**
- Kritikk av sosial klatring
- Satire over uvitenhet
- Kritikk av pedanteri
- Fornuft mot overtro`,
    },
    {
      id: 'norsk-vg2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra Erasmus Montanus',
      problem: `I "Erasmus Montanus" (1723) kommer studenten Rasmus Berg hjem til landsbyen etter studier i København. Han vil vise sin lærdom ved å bevise at jorden er rund:

ERASMUS: "Jeg vil bevise at Jorden er rund."
NILLE (Bøndene): "Det er løgn! Jorden er flat som en pandekage!"
ERASMUS: "Så må jeg bevise jer gal med filosofiske argumenter..."`,
      solution: `**Analyse:**

**Konflikten:**
Erasmus har lært filosofi og vitenskap i København. Bygdefolket holder fast ved gammel overtro. Men Holberg ler av begge sider.

**Dobbel satire:**

*Mot bøndene:*
Deres uvitenhet og motstand mot kunnskap er latterlig.

*Mot Erasmus:*
Hans pedanteri og mangel på praktisk klokskap er like latterlig. Han bruker sin lærdom til å vise seg, ikke til å hjelpe.

**Opplysningsbudskapet:**
Kunnskap er viktig, men må kombineres med sunn fornuft og ydmykhet. Pedanteri er like skadelig som uvitenhet.

**Holbergs balanse:**
Han kritiserer overtro uten å idealisere akademisk lærdom. Ekte opplysning krever mer enn boklig kunnskap.`,
    },
    {
      id: 'norsk-vg2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Holberg som opplysningsforfatter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan bruker Holberg humor i opplysningens tjeneste?',
            solution: 'Holberg bruker satire for å kritisere uvitenhet og overtro. Ved å le av dumhet gjør han folk bevisste på sine egne fordommer.',
          },
          {
            label: 'b',
            task: 'Hvorfor satiriserer Holberg både bønder og akademikere i Erasmus Montanus?',
            solution: 'Holberg vil vise at både uvitenhet og pedanteri er problematiske. Ekte opplysning krever både kunnskap og praktisk klokskap.',
          },
        ],
        solution: 'Holberg brukte humor og satire for å fremme opplysningstidens idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3: Holbergs komedier i dybden
// ============================================================================

export const CHAPTER_NORSK_VG2_4_3: TextbookChapter = {
  id: 'norsk-vg2-4-3',
  courseId: 'norsk-vg2',
  chapterNumber: '4.3',
  title: 'Holbergs komedier - Jeppe på Bjerget og Erasmus Montanus',
  description: 'Dykk dypt inn i Holbergs to mest kjente komedier med utfyllende tekstutdrag og analyser.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
    'reflektere over hvordan tekster framstiller enkeltmennesker og grupper',
  ],
  content: [
    {
      id: 'norsk-vg2-4-3-intro',
      type: 'text',
      content: `## Holbergs komedier - mesterverker i dansk-norsk dramatikk

Ludvig Holbergs komedier horer til de fremste verkene i skandinavisk litteratur. Han skrev 33 komedier for Gronnegade Teatret i Kobenhavn mellom 1722 og 1754. To av disse utmerker seg som særlig viktige og mye spilte: "Jeppe på Bjerget" og "Erasmus Montanus".

**Komedien som sjanger**

For å forstå Holbergs komedier må vi kjenne til sjangeren. Komedien har aner tilbake til antikkens Hellas og Roma. Den kjennetegnes av:

- En konflikt som løses lykkelig (i motsetning til tragedien)
- Bruk av humor, ironi og satire
- Typekarakterer som representerer bestemte egenskaper
- Kritikk av samfunnsforhold gjennom latter
- Ofte forviklinger, forkleding og misforståelser

Holberg var sterkt påvirket av den franske komedieforfatteren Molière (1622-1673), men ga sine stykker en særegen dansk-norsk karakter. Han skrev på dansk og brukte figurer og miljøer fra dansk-norsk virkelighet.

**Teateret som opplysningsarena**

For Holberg var teateret ikke bare underholdning. Det var et middel til å opplyse og forbedre folket. Gjennom å le av dumhet, forfengelighet og overtro håpet han at publikum skulle bli klokere og mer selvkritiske.

"Jeg skriver komedier for at korrigere laster gjennom latter", sa Holberg. Dette er opplysningstidens prosjekt i praksis: Bruke kunst til å gjøre mennesker og samfunn bedre.

---

## Jeppe på Bjerget (1722)

**Handling**

Jeppe er en fattig bonde som plages av sin strenge kone Nille og sitt eget alkoholproblem. En dag finner baronen ham sovende og bestemmer seg for å spøke med ham. Jeppe blir brakt til baronens seng, kledd i fine klær og behandlet som en baron. Når han våkner, tror han han er baron og begynner å oppføre seg deretter - med katastrofale resultater.

**Komposisjon**

Stykket er bygget opp som et tankeeksperiment: Hva skjer når en bonde plutselig får makt? Holberg viser at Jeppe, som vi først synes synd på, blir en tyrann når han får muligheten. Han befaler henrettelser og oppfører seg verre enn baronen noensinne ville gjort.

**Utdrag fra Akt 1, Scene 1 - Jeppes monolog**

Jeppe kommer inn på scenen, full og forslått etter å ha blitt slått av kona:

JEPPE: "Hvem kunde vel være mere fornøjet end Jeppe paa Bjerget? Min Far hed Niels, og min Farfar hed Jep. Først var jeg Degnedreng, men saa blev jeg en Soldat, og saa blev jeg en Daglejer, og nu er jeg til sidst bleven den beste Bonde i Bjerget. Min Søn Jakob skal gaae i min Sted, naar jeg døer, og arve Gaarden og den store Flaske...

(han ser på sin pisk)

Ach den forbandede Mester Erich! Jeg er ærlig Mand, men min Ryg seer ud som et Vaskefjæl. Den Nille, jeg har at slaas med, er een af de allerslemmeste Qvinder i hele Byen. Enddog jeg er Husbond i Huset, saa maa jeg ikke raade over det allerringeste. Før jeg holder op at drikke, før gider jeg ikke være Jeppe."

**Analyse av monologen**

Denne åpningsmonologen etablerer flere viktige elementer:

1. **Jeppes bakgrunn:** Han har hatt mange yrker og er nå "den beste Bonde i Bjerget" - en ironisk tittel som viser hans lave status.

2. **Familierelasjonene:** Hans kone Nille styrer ham med pisken "Mester Erich". Holberg viser et omvendt maktforhold der kvinnen dominerer.

3. **Drikkingen:** Jeppe innrømmer at han drikker, men gir kona skylden. Han vil ikke slutte fordi livet er for hardt.

4. **Språket:** Jeppe snakker folkelig dansk med grove uttrykk. Dette skiller ham fra de dannede karakterene og gjør ham komisk.

**Utdrag fra Akt 2, Scene 2 - Jeppe våkner som baron**

JEPPE (våkner i baronens seng): "Hvad Pokker er dette? Hvor er jeg? Er jeg i Himmerig, eller er jeg paa Jorden? Hvem er jeg? Jeg maa sandelig føle paa mig selv... (ser seg omkring) ... Sikke Gardiner, sikke Lagner! Er det mig selv? Er det ikke mig selv? Ney det er ikke mig, for jeg er Jeppe paa Bjerget...

Men vent, lad mig see! Drak jeg mig ikke fuld i gaar? Ja, det giorde jeg, thi mit Hoved værker endnu. Men da skulde jeg have sovet Ruusen ud, og ikke vaagnet saa fornemme... Ney, jeg troer sandelig det er mig selv. (tager sig i skjægget) Ja, for her er mit Skjæg... Og dog - hvordan fanden er jeg bleven saa fornem? Hvad betyder alle disse Gardiner? Hvad betyder denne Silkeskjorte?"

**Analyse:**

Jeppes forvirring er komisk, men også filosofisk interessant. Han stiller spørsmålet: Hva gjør meg til meg? Er det kroppen, er det bevisstheten, er det omgivelsene? Dette er et tidlig eksempel på identitetsproblematikk i litteraturen.

Holberg bruker situasjonen til å utforske forholdet mellom stand og identitet. Er Jeppe en annen person når han behandles som baron? Og hva sier dette om sosiale roller generelt?

---

## Erasmus Montanus (1723)

**Handling**

Rasmus Berg, sønn av en bonde, har studert i København og vender hjem med det latinske navnet Erasmus Montanus. Han har lært filosofi og disputerkunst, og ønsker å imponere med sin lærdom. Men hans akademiske hovmod støter alle fra seg - foreldrene, kjæresten Lisbet og landsbyen. Han ender med å bli tvunget til å fornekte sin egen kunnskap for å bli akseptert.

**Komposisjon**

Stykket er en dobbel satire. På den ene siden ler vi av bondens uvitenhet og motstand mot kunnskap. På den annen side ler vi av Erasmus' pedanteri og mangel på praktisk klokskap.

**Utdrag fra Akt 2 - Erasmus diskuterer med Per Degn**

ERASMUS: "Jorden er rund som en Kugle."

PER DEGN: "Det er Løgn! Jorden er flak som en Pandekage."

ERASMUS: "Men alle Astronomer, alle lærde Mænd i Verden ere enige om, at Jorden er rund."

PER DEGN: "De lyver allesammen."

ERASMUS: "Nu skal jeg bevise dig det med Fornuft og Mathematik..."

PER DEGN: "Jeg veed ikke hvad Mathematik er, men jeg veed at Jorden er flak."

ERASMUS: "Naar et Skib seiler bort, forsvinder først Skroget og tilsidst Masten. Det viser at Jorden er rund."

PER DEGN: "Ney, det viser at mine Øyne ere slemme."

**Analyse:**

Denne scenen er blitt ikonisk. Per Degn representerer den uopplyste bondestand som holder fast ved tradisjon mot all fornuft. Men Holberg lar ikke Erasmus vinne moralsk. Hans måte å argumentere på - nedlatende og abstrakt - overbeviser ingen.

Holbergs budskap er at kunnskap uten visdom er verdiløs. Erasmus har rett i sak (jorden er rund), men feil i metode (han ydmyker i stedet for å opplyse).

**Utdrag fra Akt 3 - Erasmus og foreldrene**

JEPPE (Erasmus' far): "Søn, vi vilde gjerne tale et Ord med dig."

ERASMUS: "Taler kun, jeg skal besvare alle Spørgsmaal med latinsk Veltalenhed."

NILLE (moren): "Vi forstaar ikke Latin."

ERASMUS: "Det er jer Ulykke. Latin er Lærdommens Sprog."

JEPPE: "Men vi er dine Forældre!"

ERASMUS: "In nomine Patris - det er Faderens Navn paa Latin."

NILLE: "Vi vil ikke høre Latin. Vi vil tale om Lisbet."

ERASMUS: "Lisbet? Hun er en simpel Bondepige. Jeg er nu en lærd Mand."

JEPPE: "Men du har lovet hende Ægteskab!"

ERASMUS: "Det var før jeg blev oplyst af Filosofien..."

**Analyse:**

Her ser vi konflikten mellom lærdom og familie. Erasmus har blitt fremmed for sine egne foreldre. Hans latin er en mur mellom ham og dem. Hans akademiske hovmod gjør ham ute av stand til å fungere i sitt eget miljø.

Holberg viser hvordan utdanning kan skape fremmedgjøring. Erasmus har lært mye, men har mistet evnen til å kommunisere med vanlige folk - inkludert sin egen familie.

**Stykkets løsning**

Erasmus ender med å bli tvunget til å erkjenne at "jorden er flat" for å få gifte seg med Lisbet. Hans ydmykelse er straffen for hovmod. Men er løsningen tilfredsstillende? Må sannheten ofres for sosial harmoni?

Holberg gir ikke et enkelt svar. Han viser kompleksiteten i opplysningsprosjektet: Kunnskap er viktig, men hvordan formidles den? Og hva gjør vi når sannhet og samhold står mot hverandre?`,
    },
    {
      id: 'norsk-vg2-4-3-def-1',
      type: 'definition',
      title: 'Dramatiske begreper i Holbergs komedier',
      content: `**Sentrale dramatiske begreper:**

**Monolog:** Tale der en karakter snakker alene på scenen, ofte for å avsløre tanker for publikum.

**Dialog:** Samtale mellom to eller flere karakterer.

**Replikk:** En karakters uttalelse i dialogen.

**Scene:** Del av en akt, ofte avgrenset ved at karakterer kommer eller går.

**Akt:** Større del av stykket, ofte fem i klassisk drama.

**Intrige:** Komplisert handlingsforløp med forviklinger.

**Peripeti:** Vendepunkt i handlingen.

**Anagnorisis:** Gjenkjennelse eller avsløring.

**Holbergs spesielle virkemidler:**

**Typekarakter:** Figur som representerer en egenskap (den dumme, den pedantiske).

**Dialektbruk:** Karakterisering gjennom talespråk.

**Situasjonskomikk:** Humor skapt av situasjoner.

**Verbal ironi:** Når noen sier det motsatte av det de mener.`,
    },
    {
      id: 'norsk-vg2-4-3-def-2',
      type: 'definition',
      title: 'Satire som virkemiddel',
      content: `**Satire:** Bruk av humor, ironi og overdrivelse for å kritisere.

**Satire hos Holberg:**

**Mål for satiren:**
- Uvitenhet og overtro
- Pedanteri og akademisk hovmod
- Sosial klatring og forfengelighet
- Maktmisbruk og undertrykkelse

**Satirens virkemidler:**
- *Overdrivelse:* Karakterer er ekstreme versjoner av menneskelige svakheter
- *Ironi:* Publum forstår mer enn karakterene
- *Kontrast:* Mellom pretensjoner og virkelighet
- *Latterliggjøring:* Svakheter fremstilles komisk

**Satirens formål:**
- Underholde
- Opplyse
- Korrigere feil og laster
- Skape selvrefleksjon

**Holbergs balanse:**
Holberg satirierer alle sider - både bønders uvitenhet og akademikeres pedanteri. Dette gir satiren dybde og troverdighet.`,
    },
    {
      id: 'norsk-vg2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av Jeppe og Erasmus',
      problem: `Sammenlign hovedpersonene i "Jeppe på Bjerget" og "Erasmus Montanus". Hva satirierer Holberg gjennom dem?`,
      solution: `**Sammenlignende analyse:**

**Jeppe på Bjerget:**

*Sosial posisjon:*
Jeppe er en fattig bonde, nederst på den sosiale rangstigen. Han er undertrykt av kona, baronen og samfunnet.

*Hva Holberg satirierer:*
- Bondens drikking og latskap
- Men også: Adelen som leker med folks liv
- Maktens vilkårlighet

*Jeppes forvandling:*
Når han får makt, blir han en tyrann. Dette viser at undertrykte kan bli undertrykkere.

**Erasmus Montanus:**

*Sosial posisjon:*
Erasmus er bondegutt som har steget sosialt gjennom utdanning. Han er mellom to verdener.

*Hva Holberg satirierer:*
- Akademisk pedanteri
- Men også: Bondesamfunnets motstand mot kunnskap
- Utdanningens fremmedgjøring

*Erasmus' fall:*
Han må fornekte sin kunnskap for å få sosial aksept. Dette er tragisk-komisk.

**Fellestrekk:**

Begge stykker handler om makt og avmakt, om hvem som bestemmer hva som er "sant" og "rett". Begge viser at mennesker har svakheter uavhengig av stand.

**Forskjeller:**

Jeppe vekker sympati tross sine feil - han er offer for et urettferdig system. Erasmus vekker irritasjon - han har muligheter men misbruker dem.

**Holbergs budskap:**

Verken uvitenhet eller pedanteri er veien til et godt samfunn. Opplysning må kombineres med ydmykhet og praktisk klokskap.`,
    },
    {
      id: 'norsk-vg2-4-3-tip-1',
      type: 'tip',
      title: 'Tips for å lese Holbergs komedier',
      content: `**Slik får du mest ut av Holberg:**

**1. Les høyt:**
Komedier er skrevet for fremførelse. Les replikkene høyt for å høre rytmen og humoren.

**2. Tenk på scenen:**
Forestill deg hvordan dette ville sett ut på teater. Hvor står karakterene? Hvordan beveger de seg?

**3. Identifiser typekarakterene:**
Hvem representerer dumhet? Pedanteri? Sunn fornuft?

**4. Let etter dobbelt satire:**
Holberg ler sjelden bare av én side. Hvem andre rammes?

**5. Finn samtidsrelevansen:**
Temaene er tidløse. Kjenn du igjen typene i dag?

**6. Vurder språket:**
Hvordan karakteriserer dialektene og talemåtene figurene?

**7. Diskuter løsningene:**
Er slutten tilfredsstillende? Hvem "vinner"? Er det rettferdig?

**8. Se stykket om mulig:**
Holberg spilles fortsatt. En forestilling gir ny forståelse.`,
    },
    {
      id: 'norsk-vg2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Jeppes monolog fra åpningsscenen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva lærer vi om Jeppes liv og situasjon fra monologen?',
            solution: 'Vi lærer at Jeppe er bondesønn som har hatt mange yrker. Han slås av kona med pisken "Mester Erich". Han drikker for å tåle livet. Han føler seg maktesløs i sitt eget hjem.',
          },
          {
            label: 'b',
            task: 'Hvordan bruker Holberg språket for å karakterisere Jeppe?',
            solution: 'Jeppe snakker folkelig dansk med grove uttrykk og enkle setninger. Språket viser hans lave utdanning og bondebakgrunn. Det er også komisk gjennom overdrivelser.',
          },
          {
            label: 'c',
            task: 'Hvem har vi sympati med etter å ha lest monologen? Hvorfor?',
            solution: 'Vi har sympati med Jeppe fordi han fremstår som offer for et hardt liv. Han pryles av kona, har lite, og drikker fordi livet er tungt. Holberg skaper medfølelse før han viser Jeppes svakheter.',
          },
          {
            label: 'd',
            task: 'Hva satirierer Holberg i denne scenen?',
            solution: 'Holberg satirierer både Jeppes drikking og unnskyldninger, og det omvendte maktforholdet i ekteskapet. Han kritiserer også indirekte et samfunn der bønder har så harde liv at de tyr til drikk.',
          },
        ],
        solution: 'Åpningsmonologen etablerer Jeppe som en kompleks figur som vekker både latter og sympati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser konflikten i Erasmus Montanus.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem har rett i diskusjonen om jordens form - Erasmus eller Per Degn?',
            solution: 'Erasmus har objektivt rett - jorden er rund. Men han har "feil" i den sosiale situasjonen fordi han ikke klarer å kommunisere på en måte som overbeviser.',
          },
          {
            label: 'b',
            task: 'Hvorfor klarer ikke Erasmus å overbevise Per Degn?',
            solution: 'Erasmus er nedlatende og bruker abstrakte argumenter. Han vil "bevise gal" i stedet for å opplyse. Per Degn har ingen grunn til å lytte til en som håner ham.',
          },
          {
            label: 'c',
            task: 'Hva sier scenen om forholdet mellom kunnskap og makt?',
            solution: 'Kunnskap alene gir ikke makt. Per Degn har fellesskapets støtte og kan definere hva som er "sant" i landsbyen. Erasmus har rett, men står alene.',
          },
          {
            label: 'd',
            task: 'Hvordan er denne konflikten relevant i dag?',
            solution: 'Vi ser lignende konflikter mellom eksperter og folk som ikke stoler på dem (f.eks. klimaskepsis, vaksinemotstand). Spørsmålet om hvordan vi formidler kunnskap er fortsatt aktuelt.',
          },
        ],
        solution: 'Konflikten mellom Erasmus og Per Degn illustrerer opplysningstidens utfordringer med å spre kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft Holbergs doble satire.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med at Holberg driver "dobbel satire" i Erasmus Montanus.',
            solution: 'Holberg satirierer både Per Degns uvitenhet og Erasmus pedanteri. Han ler av begge sider i konflikten og viser at ingen har monopol på rett oppførsel.',
          },
          {
            label: 'b',
            task: 'Hvorfor er dobbel satire et effektivt virkemiddel?',
            solution: 'Dobbel satire gjør kritikken mer troverdig fordi den ikke er ensidig. Publikum tvinges til å tenke selv i stedet for bare å få pekt ut en "skurk".',
          },
          {
            label: 'c',
            task: 'Finn eksempler på dobbel satire i Jeppe på Bjerget.',
            solution: 'Holberg satirierer Jeppes drikking og latskap, men også adelens vilkårlige maktbruk og Nilles brutalitet. Alle har feil, selv om de har ulik grad av ansvar.',
          },
        ],
        solution: 'Holbergs doble satire gjør komediene mer komplekse og tankevekkende enn enkel moralisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en scene i Holbergs stil.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en kort scene (10-15 replikker) i Holbergs stil der to karakterer diskuterer et tema du velger selv.',
            solution: 'Eksempel: En som har vært på ferie og skryter, og en som er skeptisk. Bruk typekarakterer, overdrivelse og dobbel satire.',
          },
          {
            label: 'b',
            task: 'Forklar hvilke Holberg-trekk du har brukt i scenen.',
            solution: 'Svar bør nevne: typekarakterer, satire, kontraster, overdrivelse, kanskje dialekt eller særegent språk for karakterisering.',
          },
        ],
        solution: 'Å skrive i en forfatters stil er en god måte å forstå virkemidlene på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4: Sakprosa i opplysningstiden
// ============================================================================

export const CHAPTER_NORSK_VG2_4_4: TextbookChapter = {
  id: 'norsk-vg2-4-4',
  courseId: 'norsk-vg2',
  chapterNumber: '4.4',
  title: 'Sakprosa i opplysningstiden',
  description: 'Utforsk opplysningstidens sakprosatradisjoner: essays, pamfletter og vitenskapelig skriving.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosateksters formål og retoriske situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-4-4-intro',
      type: 'text',
      content: `## Sakprosa i opplysningstiden - fornuftens språk

Opplysningstiden (ca. 1700-1800) var sakprosaens gullalder. Aldri før hadde det blitt skrevet så mye om vitenskap, filosofi, politikk og samfunn for et allment publikum. Opplysningsforfatterne ønsket å spre kunnskap og fremme fornuftig tenkning, og sakprosaen ble deres viktigste verktøy.

**Bakgrunn for sakprosaens oppblomstring**

Flere faktorer bidro til sakprosaens vekst på 1700-tallet:

*Trykkekunstens utbredelse:*
Boktrykkerkunsten, oppfunnet på 1400-tallet, var nå vel etablert. Bøker og pamfletter kunne produseres i større opplag og til lavere pris enn før.

*Leseferdighet:*
Stadig flere kunne lese, ikke minst takket være reformasjonens vekt på bibellesning. Det vokste frem et lesende publikum utenfor universitetene og kirken.

*Kaffehus og salonger:*
Nye sosiale arenaer oppsto der mennesker møttes for å diskutere ideer. Aviser, tidsskrifter og pamfletter ble lest og debattert.

*Opplysningsprosjektet:*
Opplysningsfilosofene ønsket å frigjøre mennesker fra uvitenhet og overtro. Til dette trengte de et språk som kunne nå ut til mange - et klart, saklig og argumenterende språk.

**Sakprosasjangrene**

Opplysningstiden utviklet flere sakprosasjangre som fortsatt er sentrale:

**Essayet:**
Essayet er en personlig, resonerende tekst som utforsker et tema. Det ble popularisert av Michel de Montaigne (1533-1592), men fikk sin blomstringstid på 1700-tallet. Essayet kombinerer kunnskap med personlig refleksjon.

Holbergs "Epistler" (1748-1754) er et norsk-dansk eksempel: korte, elegante tekster om alt fra kvinners utdanning til overtro og moral.

**Pamfletten:**
Pamfletten er en kort, polemisk tekst som tar stilling i en aktuell debatt. Den brukes til å påvirke opinion og ofte skrevet anonymt for å unngå straff.

**Den vitenskapelige avhandlingen:**
Naturvitenskapenes fremvekst krevde nye måter å skrive på: systematisk, etterprøvbar og objektiv. Den vitenskapelige artikkelen tok form.

**Encyklopedien:**
Det største sakprosaprosjektet var den franske Encyklopedien (1751-1772), redigert av Diderot og d'Alembert. Den samlet all menneskelig kunnskap i et verk og ble et symbol på opplysningsprosjektet.

**Holberg som sakprosaforfatter**

Ludvig Holberg skrev ikke bare komedier. Han var også en fremragende sakprosaforfatter:

*Historiske verker:*
"Danmarks Riges Historie" (1732-35), "Dannemarks og Norges Beskrivelse" (1729). Holberg ville gjøre historie tilgjengelig for vanlige lesere.

*Filosofiske essays:*
"Moralske Tanker" (1744), "Epistler" (1748-1754). Her drøfter Holberg etiske og samfunnsmessige spørsmål med humor og skarpsindighet.

*Eksempel fra Epistlene:*

I Epistel 347 skriver Holberg om kvinner og utdanning:

"Jeg veed ikke hvorfor man vil nægte det smukke Kiøn saadanne Videnskaber som sigte til at skærpe Forstanden... Erfarenheden viser at Fruentimmer ere ligesaa beqvemme til Videnskaber som Mænd."

Holberg argumenterer for likestilling i utdanning - en radikal tanke i 1750. Han bruker både erfaring ("Erfarenheden viser") og logikk som argumenter.

**Retoriske trekk i opplysningsprosa**

Opplysningstidens sakprosa har kjennetegnende retoriske trekk:

*Klarhet og enkelhet:*
Målet var at alle skulle kunne forstå. Kompliserte tanker skulle formuleres klart. Latin ble erstattet av morsmålene.

*Argumentasjon:*
Påstander skulle begrunnes med logikk og erfaring, ikke med tradisjon eller autoritet alene.

*Ironi og satire:*
Mange opplysningsforfattere brukte humor for å kritisere overtro og dumhet. Voltaire og Holberg er mestere i satirisk sakprosa.

*Appellformer:*
Logos (fornuft) var viktigst, men etos (troverdighet) og patos (følelser) ble også brukt bevisst.

**Sakprosaens arv**

Opplysningstidens sakprosaidealer - klarhet, saklighet, argumentasjon - lever videre i dag. Avislederen, den akademiske artikkelen, det personlige essayet - alle har røtter i 1700-tallet.

Opplysningstiden lærte oss at språk er makt, og at klare tanker krever klart språk. Dette er fortsatt grunnleggende for sakprosaen.`,
    },
    {
      id: 'norsk-vg2-4-4-def-1',
      type: 'definition',
      title: 'Sakprosasjangre i opplysningstiden',
      content: `**Essay:** Personlig, resonerende tekst som utforsker et tema. Kombinerer kunnskap med refleksjon. Eksempel: Holbergs Epistler.

**Pamflett:** Kort, polemisk tekst i en aktuell debatt. Ofte anonym. Brukt til politisk agitasjon.

**Traktat:** Systematisk fremstilling av et emne. Mer formell enn essayet.

**Encyklopedi:** Oppslagsverk som samler kunnskap. Den franske Encyklopedien (1751-72) var opplysningens storprosjekt.

**Tidsskriftartikkel:** Tekster i periodiske publikasjoner for det lesende publikum.

**Brev (epistel):** Offentliggjorte brev som drøfter allmenne temaer. Holbergs Epistler er eksempel.

**Reisebeskrivelse:** Fortelling fra reiser som formidler kunnskap om andre land og folk.`,
    },
    {
      id: 'norsk-vg2-4-4-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler i opplysningsprosa',
      content: `**Klarhet:** Enkel, forståelig fremstilling. Komplekse tanker i enkelt språk.

**Argumentasjon:** Systematisk bruk av begrunnelser. Påstander støttes av logikk og erfaring.

**Ironi:** Si det motsatte av det man mener for å kritisere.

**Satire:** Bruke humor til å kritisere laster og dumhet.

**Retoriske spørsmål:** Spørsmål som ikke forventer svar, men som aktiverer leseren.

**Eksempler:** Konkrete illustrasjoner som gjør abstrakte poenger forståelige.

**Appell til fornuften (logos):** Det viktigste virkemiddelet. Logisk argumentasjon.

**Kildekritikk:** Vurdere hvor informasjon kommer fra. Tidlig form for akademisk metode.`,
    },
    {
      id: 'norsk-vg2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Kants svar på "Hva er opplysning?"',
      problem: `Les dette utdraget fra Kants berømte essay "Besvarelse av spørsmålet: Hva er opplysning?" (1784):

"Opplysning er menneskets utgang fra sin selvforskyldte umyndighet. Umyndighet er manglende evne til å bruke sin forstand uten en annens ledelse. Selvforskyldt er denne umyndighet når årsaken til den ikke ligger i forstandens mangler, men i mangel på mot og besluttsomhet til å bruke den uten en annens ledelse.

Sapere aude! Ha mot til å bruke din egen forstand! - det er opplysningens valgspråk."

Analyser tekstens argumentasjon og retorikk.`,
      solution: `**Analyse av Kants tekst:**

**Definisjon som utgangspunkt:**
Kant starter med å definere "opplysning". Dette er typisk opplysningsprosa: Begrepene må klargjøres før diskusjonen kan begynne.

**Nøkkelbegreper:**
- *Umyndighet:* Å la andre tenke for seg
- *Selvforskyldt:* Det er ikke andres feil, men vår egen
- *Forstand:* Evnen til å tenke selvstendig

**Logisk struktur:**
1. Opplysning = å komme ut av umyndighet
2. Umyndighet = å ikke bruke egen forstand
3. Selvforskyldt = vi kan, men tør ikke
4. Løsning = ha mot til å tenke selv

**Retoriske virkemidler:**

*Klarhet:* Kant definerer hvert begrep. Leseren vet nøyaktig hva han mener.

*Appell til logos:* Argumentet er logisk oppbygd. Konklusjonen følger av premissene.

*Slagord:* "Sapere aude!" (Vår å vite! / Ha mot til å tenke!) Latin gir tyngde og knytter til tradisjonen.

*Provokasjon:* Ved å kalle umyndigheten "selvforskyldt" utfordrer Kant leseren: Det er din egen feil at du ikke tenker selv!

**Tekstens budskap:**
Opplysning handler ikke primært om å få kunnskap, men om å TØR bruke den kunnskapen vi har. Det er en moralsk utfordring like mye som en intellektuell.

**Historisk betydning:**
Dette essayet er blitt selve definisjonen på opplysningstiden. Kant formulerte hva bevegelsen handlet om: frigjøring gjennom selvstendig tenkning.`,
    },
    {
      id: 'norsk-vg2-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Holbergs Epistler',
      problem: `Les dette utdraget fra Holbergs Epistel 347 om kvinners utdanning:

"At Qvindekiønnet har været og endnu er i saa ringe Anseelse hos alle Nationer, kommer ikke af Naturens Forskiel, men af Opdragelsen og Øvelsen. Erfarenheden viser, at Fruentimmer ere ligesaa beqvemme til Videnskaber som Mænd, ja i visse Ting endog beqvemmere.

Man lærer dem intet andet end at læse og skrive, at danse, at spille og at være artige... Men hvo har sagt, at de ikke ere ligesaa beqvemme til grundige Videnskaber?"

Analyser Holbergs argumentasjon.`,
      solution: `**Analyse av Holbergs tekst:**

**Tesen:**
Kvinner er like begavede som menn. Forskjellen skyldes oppdragelse, ikke natur.

**Argumentstrukturen:**

1. *Påstand:* Kvinner har lav anseelse
2. *Årsak:* Ikke naturen, men oppdragelsen
3. *Bevis:* Erfaring viser at kvinner kan lære
4. *Kritikk:* De læres bare "pynteting"
5. *Retorisk spørsmål:* Hvem har sagt de ikke kan mer?

**Retoriske virkemidler:**

*Erfaring som argument:* "Erfarenheden viser" - Holberg appellerer til det observerbare, ikke til autoritet.

*Kontrast:* Mellom hva kvinner læres (dans, musikk) og hva de kunne lære (vitenskap).

*Retorisk spørsmål:* "Men hvo har sagt...?" - Tvinger leseren til å tenke: Ja, hvem har egentlig sagt det?

*Mild ironi:* "at være artige" - Holberg antyder at dette er overfladisk.

**Opplysningsidealer:**
- Fornuften mot fordommer
- Erfaring fremfor tradisjon
- Kritikk av sosiale konvensjoner
- Tro på at mennesker kan forbedres gjennom utdanning

**Historisk kontekst:**
Dette var radikalt i 1750. Holberg argumenterer for kvinners likeverdighet i en tid der dette var kontroversielt. Han bruker saklige argumenter, ikke følelsesmessige appeller.`,
    },
    {
      id: 'norsk-vg2-4-4-tip-1',
      type: 'tip',
      title: 'Tips for analyse av sakprosatekster',
      content: `**Slik analyserer du sakprosa fra opplysningstiden:**

**1. Identifiser sjangeren:**
Er det essay, pamflett, brev? Sjangeren påvirker stil og formål.

**2. Finn hovedtesen:**
Hva er tekstens sentrale påstand? Ofte formulert i begynnelsen.

**3. Kartlegg argumentasjonen:**
- Hvilke argumenter brukes?
- Hvordan henger de sammen?
- Hva er premisser og konklusjoner?

**4. Se på retoriske virkemidler:**
- Appell til fornuft (logos)?
- Appell til følelser (patos)?
- Appell til troverdighet (etos)?
- Ironi, satire, retoriske spørsmål?

**5. Vurder språket:**
- Er det klart og forståelig?
- Hvem er målgruppen?
- Hvordan preger opplysningstiden stilen?

**6. Sett i kontekst:**
- Når ble teksten skrevet?
- Hvilken debatt deltar den i?
- Var synspunktene kontroversielle?

**7. Vurder relevans i dag:**
- Er argumentene fortsatt gyldige?
- Finnes det lignende debatter i dag?`,
    },
    {
      id: 'norsk-vg2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser opplysningstidens sakprosa.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor ble sakprosaen så viktig i opplysningstiden?',
            solution: 'Opplysningsfilosofene ville spre kunnskap og bekjempe overtro. De trengte et klart, saklig språk som kunne nå mange. Sakprosaen ble verktøyet for å opplyse folket.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner opplysningstidens sakprosastil?',
            solution: 'Klarhet og enkelhet, logisk argumentasjon, appell til fornuft og erfaring, bruk av ironi og satire, kritikk av tradisjon og autoritet.',
          },
          {
            label: 'c',
            task: 'Hvilke sakprosasjangre ble særlig viktige?',
            solution: 'Essayet, pamfletten, encyklopedien, tidsskriftartikkelen og brevet (epistelen). Disse nådde ut til det nye, lesende publikummet.',
          },
        ],
        solution: 'Opplysningstiden etablerte sakprosaidealer som fortsatt gjelder: klarhet, saklighet og argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Arbeid med Holbergs Epistler.',
        subTasks: [
          {
            label: 'a',
            task: 'Les utdraget fra Epistel 347. Hva er Holbergs hovedargument?',
            solution: 'Holberg argumenterer for at kvinner er like begavede som menn. Forskjellen skyldes oppdragelse, ikke natur. De får ikke sjansen til å vise hva de kan.',
          },
          {
            label: 'b',
            task: 'Hvilke retoriske virkemidler bruker Holberg?',
            solution: 'Appell til erfaring ("Erfarenheden viser"), retoriske spørsmål, kontrast mellom hva kvinner læres og kunne lære, mild ironi.',
          },
          {
            label: 'c',
            task: 'Var Holbergs synspunkter radikale for sin tid? Begrunn.',
            solution: 'Ja, i 1750 var likestilling kontroversielt. Holberg utfordret rådende oppfatninger om at kvinner var mindre begavede. Han brukte fornuft mot fordommer.',
          },
          {
            label: 'd',
            task: 'Sammenlign Holbergs argumentasjon med dagens debatter om likestilling.',
            solution: 'Holberg bruker logikk og erfaring mot fordommer. Dagens likestillingsdebatt bruker lignende argumenter (forskning, erfaring) mot strukturelle hindre. Noen argumenter er tidløse.',
          },
        ],
        solution: 'Holbergs epistler viser opplysningstidens sakprosa på sitt beste: klar, logisk og samfunnskritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv i opplysningstidens stil.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema som engasjerer deg (f.eks. sosiale medier, miljø, utdanning) og skriv et kort essay (ca. 200 ord) i opplysningstidens stil.',
            solution: 'Eksempel: Bruk klar argumentasjon, appeller til fornuft og erfaring, gjerne et retorisk spørsmål. Unngå for mye følelser, fokuser på logikk.',
          },
          {
            label: 'b',
            task: 'Forklar hvilke opplysningsstrekk du har brukt i teksten.',
            solution: 'Svar bør nevne: klar struktur, logisk argumentasjon, appell til fornuft/erfaring, eventuelt ironi eller retoriske spørsmål.',
          },
        ],
        solution: 'Å skrive i en historisk stil gir dypere forståelse av stilens kjennetegn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Romantikkens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_5_1: TextbookChapter = {
  id: 'norsk-vg2-5-1',
  courseId: 'norsk-vg2',
  chapterNumber: '5.1',
  title: 'Romantikkens ideer og impulser',
  description: 'Utforsk romantikken som reaksjon på opplysningstiden, med fokus på følelser, natur og det nasjonale.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-1-intro',
      type: 'text',
      content: `## Romantikken - følelsenes revolusjon

Romantikken var en kultur- og litteraturbevegelse som oppsto i Europa rundt 1800 som en reaksjon på opplysningstidens rasjonalisme. Mens opplysningstiden hadde satt fornuften i høysetet, fremhevet romantikerne følelser, fantasi, natur og det individuelle.

**Bakgrunn**

Romantikken vokste frem i en tid med store omveltninger:
- Den franske revolusjonen (1789) og dens etterspill
- Napoleonskrigene og nasjonalismens fremvekst
- Industrialiseringen og urbaniseringen
- Misnøye med fornuftens "kalde" verdensbilde

Romantikerne søkte det autentiske, det opprinnelige og det naturlige i en verden som ble stadig mer moderne og fremmedgjort.

**Romantikkens ideer**

*Følelse over fornuft:* Følelsene er mer ekte og dypere enn fornuften. Dikteren føler før han tenker.

*Naturen som åndelig kraft:* Naturen er ikke bare materie, men besjelet og full av mening.

*Det nasjonale:* Hvert folk har sin egen "ånd" uttrykt i språk, eventyr og folkeviser.

*Geniet:* Dikteren er et geni som skaper noe nytt, ikke bare en håndverker som følger regler.

*Lengsel:* Romantisk lengsel (Sehnsucht) etter noe uoppnåelig - det fjerne, det tapte, det ideelle.

*Det overnaturlige:* Interesse for myter, eventyr, drømmer og det mystiske.

**Romantikken i Norge**

I Norge kom romantikken ca. 1814-1850, nært knyttet til nasjonsbyggingen etter løsrivelsen fra Danmark. Viktige forfattere var:
- Henrik Wergeland (1808-1845)
- Johan Sebastian Welhaven (1807-1873)
- Andreas Munch (1811-1884)`,
    },
    {
      id: 'norsk-vg2-5-1-def-1',
      type: 'definition',
      title: 'Romantikkens sentrale begreper',
      content: `**Romantikk:** Kultur- og litteraturbevegelse ca. 1800-1850 som vektla følelse, fantasi og natur.

**Geniet:** Forestillingen om dikteren som et originalt skapende individ, ikke bare en håndverker.

**Sehnsucht:** Tysk ord for romantisk lengsel - lengsel etter noe uoppnåelig.

**Organisme:** Romantikernes syn på naturen og samfunnet som en levende helhet, ikke en maskin.

**Folkånd (Volksgeist):** Ideen om at hvert folk har en egen "ånd" eller karakter.

**Det sublime:** Opplevelsen av naturens overveldende storhet (fjell, hav, stormer).

**Nattside:** Interesse for det mørke, mystiske og ubevisste.

**Romantiske motiver:**
- Den ville naturen
- Ruiner og middelalder
- Lengsel og melankoli
- Kjærlighet og død
- Eventyr og folketro`,
    },
    {
      id: 'norsk-vg2-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Wergelands naturopplevelse',
      problem: `Les dette utdraget fra Henrik Wergelands dikt "Mig Selv" (1833):

"Hvorfor svulmer mit Bryst? Jeg aner,
at Noget der er, som vil ud,
udfolde vidt sine Vinger og svæve
som en Sommerfugl over Gud."`,
      solution: `**Analyse:**

**Romantisk lengsel:**
Dikteren føler noe i brystet som vil ut - en lengsel etter noe større enn det daglige.

**Naturbilder:**
Sommerfuglen symboliserer sjelen, friheten, det å frigjøre seg fra det jordiske.

**Religiøs dimensjon:**
"Svæve over Gud" - dikteren føler seg ett med det guddommelige i naturopplevelsen.

**Romantisk geni:**
Dikteren har en særlig følsomhet som gjør ham i stand til å sanse det andre ikke ser.

**Stil:**
- Spørsmål som uttrykker undring
- Naturbilder som symboler
- Høystemt, følelsesladet tone`,
    },
    {
      id: 'norsk-vg2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar romantikkens ideer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan var romantikken en reaksjon på opplysningstiden?',
            solution: 'Opplysningstiden vektla fornuft og vitenskap. Romantikken reagerte med å fremheve følelser, fantasi og det irrasjonelle.',
          },
          {
            label: 'b',
            task: 'Hva mente romantikerne med at naturen er "besjelet"?',
            solution: 'Naturen er ikke bare død materie, men full av liv og mening. Mennesket kan føle seg ett med naturen.',
          },
        ],
        solution: 'Romantikken var en reaksjon på rasjonalismen og fremhevet følelser, natur og det nasjonale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Henrik Wergeland
// ============================================================================

export const CHAPTER_NORSK_VG2_5_2: TextbookChapter = {
  id: 'norsk-vg2-5-2',
  courseId: 'norsk-vg2',
  chapterNumber: '5.2',
  title: 'Henrik Wergeland - dikter og agitator',
  description: 'Lær om Henrik Wergeland, den store norske romantiske dikteren og folkeopplyseren.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-2-intro',
      type: 'text',
      content: `## Henrik Wergeland - Norges nasjonaldikter

Henrik Wergeland (1808-1845) regnes som Norges viktigste dikter og en av grunnleggerne av norsk nasjonal identitet. I sitt korte liv skrev han et enormt forfatterskap og kjempet for folkeopplysning, frihet og rettferdighet.

**Liv og virke**

Wergeland ble født i Kristiansand, sønn av presten Nicolai Wergeland. Familien flyttet til Eidsvoll, hvor faren var stortingsmann. Henrik studerte teologi, men viet seg til litteratur og samfunnsengasjement.

Han var en eksplosiv personlighet - lidenskapelig, generøs og uberegnelig. Han kjempet for jødenes rettigheter, for folkeopplysning og for et selvstendig norsk kulturliv.

Wergeland døde av tuberkulose i 1845, bare 37 år gammel. Hans siste diktsamling, "Den engelske Lods", ble skrevet på dødsleiet.

**Forfatterskap**

Wergelands forfatterskap er enormt og variert:
- Dramatikk: "Campbellerne"
- Lyrikk: "Digte" (1829), "Den engelske Lods" (1844)
- Epikk: "Skabelsen, Mennesket og Messias" (1830)
- Folkeopplysning: "For Arbeidsklassen"

**Kulturkampen**

Wergeland sto i en bitter strid med Johan Sebastian Welhaven om norsk kulturutvikling. Wergeland ("patriotene") ville bryte med dansk kultur og bygge noe genuint norsk. Welhaven ("intelligenspartiet") mente Norge trengte europeisk dannelse.`,
    },
    {
      id: 'norsk-vg2-5-2-def-1',
      type: 'definition',
      title: 'Wergeland - sentrale trekk',
      content: `**Biografiske fakta:**
- 1808-1845 (37 år)
- Født Kristiansand, oppvokst Eidsvoll
- Dikter, folkeopplyser, aktivist
- Kjempet for jødenes rettigheter

**Litterære kjennetegn:**
- Eksplosiv, visjonær stil
- Rik billedbruk og fantasi
- Naturskildringer
- Optimisme og frihetslengsel

**Hovedtemaer:**
- Frihet og rettferdighet
- Naturen som åndelig kraft
- Norsk identitet
- Menneskets verdighet

**Kulturkampen:**
- Wergeland vs. Welhaven
- Patriotene vs. intelligenspartiet
- Norsk egenart vs. europeisk dannelse`,
    },
    {
      id: 'norsk-vg2-5-2-example-1',
      type: 'example',
      title: 'Eksempel: "Den første Sang"',
      problem: `Les dette utdraget fra "Skabelsen, Mennesket og Messias" (1830), der Wergeland skildrer naturens oppvåkning:

"O, Natur! hvor er du skjøn!
Se, de hvide Skyer flyve,
Fuglene de synge sødt,
Bækkene i Løvsal trylle."`,
      solution: `**Analyse:**

**Naturopplevelse:**
Wergeland uttrykker en intens kjærlighet til naturen. Naturen er "skjøn" - vakker og meningsfull.

**Romantiske motiver:**
- Skyer, fugler, bekker - typiske romantiske naturbilder
- Naturen er levende og aktiv (skyene "flyve", fuglene "synge")

**Personlig tone:**
Utropet "O, Natur!" viser dikterens følelsesmessige engasjement.

**Stil:**
- Enkel, folkelig tone
- Rim og rytme
- Sanseinntrykk (syn, hørsel)

Utdraget viser Wergelands romantiske naturopplevelse, der naturen er besjelet og full av mening.`,
    },
    {
      id: 'norsk-vg2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Wergelands betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjempet Wergeland for utover diktervirksomheten?',
            solution: 'Wergeland kjempet for folkeopplysning, jødenes rettigheter, og et selvstendig norsk kulturliv.',
          },
          {
            label: 'b',
            task: 'Hva var striden mellom Wergeland og Welhaven om?',
            solution: 'Wergeland ville bryte med dansk kultur og bygge noe genuint norsk. Welhaven mente Norge trengte europeisk dannelse.',
          },
        ],
        solution: 'Wergeland var dikter, folkeopplyser og aktivist som kjempet for frihet og rettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Johan Sebastian Welhaven
// ============================================================================

export const CHAPTER_NORSK_VG2_5_3: TextbookChapter = {
  id: 'norsk-vg2-5-3',
  courseId: 'norsk-vg2',
  chapterNumber: '5.3',
  title: 'Johan Sebastian Welhaven - dikteren og kritikeren',
  description: 'Lær om Wergelands store motstander og hans betydning for norsk litteratur og kulturliv.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-5-3-intro',
      type: 'text',
      content: `## Johan Sebastian Welhaven - romantikkens klassisist

Johan Sebastian Welhaven (1807-1873) er kanskje mest kjent som Henrik Wergelands store motstander i den såkalte "kulturstriden" på 1830-tallet. Men Welhaven var også en fremragende dikter, litteraturkritiker og professor som hadde stor innflytelse på norsk kulturliv. Der Wergeland var vulkanen, var Welhaven den stille innsjøen - men begge var uunnværlige for norsk litteratur.

**Liv og bakgrunn**

Welhaven ble født i Bergen i 1807 og vokste opp i et dannet miljø. Faren var prest, og familien hadde sterke bånd til dansk kultur og dannelse. I 1825 begynte han å studere i Christiania (Oslo), hvor han raskt markerte seg som en talentfull poet og skarp kritiker.

I 1840 ble Welhaven utnevnt til lektor, og i 1846 til professor i filosofi ved universitetet i Christiania. Han var gift med Josephine Bidoulac, og deres hjem ble et sentrum for byens kulturelle elite. Welhaven døde i 1873.

**Striden med Wergeland**

Konflikten mellom Wergeland og Welhaven dominerte norsk kulturliv på 1830-tallet og handlet dypest sett om hva slags nasjon Norge skulle være.

*Wergelands standpunkt:*
- Norge måtte bryte helt med dansk kulturarv
- Norsk kultur skulle bygges "nedenifra" fra bondefolket
- Dikteren skulle være folkets talsmann og opplyser
- Entusiasme og nasjonal begeistring var viktigere enn form

*Welhavens standpunkt:*
- Norge trengte europeisk dannelse og kulturtradisjon
- Kvalitet og form var like viktig som innhold
- Dikteren skulle være kunstner, ikke agitator
- Nasjonalt selvskryt uten substans var pinlig

Striden toppet seg med Welhavens dikt "Norges Dæmring" (1834), der han kritiserte det han så som overfladisk patriotisme og kulturelt hovmod. Diktet skapte raseri og skandale, men satte også viktige spørsmål på dagsordenen.

**Welhavens poetikk**

Welhaven tilhørte en mer klassisistisk retning innen romantikken. Han la vekt på:

*Form og håndverk:*
Diktet skulle være et gjennomarbeidet kunstverk. Rim, rytme og komposisjon måtte være perfekte. Welhavens dikt er teknisk briljante.

*Underdrivelse fremfor overdrivelse:*
Der Wergeland brukte store ord og sterke følelser, foretrakk Welhaven det dempede, det antydede, det subtile.

*Naturskildringer:*
Welhavens beste dikt er ofte rolige naturskildringer der landskapet speiler sinnsstemninger. Han regnes som en mester i stemningslyrikk.

*Norsk natur, europeisk form:*
Welhaven skrev om norsk landskap og kultur, men innenfor rammer hentet fra europeisk diktertradisjon.

**Sentrale verk**

*"Norges Dæmring" (1834):*
Kontroversielt dikt som kritiserer overfladisk patriotisme. Skapte skandale men er litterært imponerende.

*"Digte" (1839):*
Welhavens første gedigne diktsamling med noen av hans fineste naturlyriske tekster.

*"Nyere Digte" (1845):*
Inneholder blant annet diktsyklusen "En Digters Hjem", regnet som hans mesterverk.

*"Halvhundrede Digte" (1848):*
Samling som befester hans posisjon som en av tidens fremste lyrikere.

**Litterær betydning**

Welhavens betydning er stor på flere områder:

1. *Som kritiker:* Han hevet nivået på norsk litteraturkritikk og insisterte på kvalitet og form.

2. *Som professor:* Han påvirket generasjoner av studenter og bidro til å profesjonalisere norsk litteraturvitenskap.

3. *Som dikter:* Hans naturlyrikk og stemningsdikt er blant det beste i norsk litteratur fra 1800-tallet.

4. *Som motpol:* Striden med Wergeland tvang begge til å skjerpe sine standpunkter og bidro til å modne norsk kulturliv.

Det er en vanlig misforståelse at Wergeland "vant" striden. I virkeligheten trengte Norge begge: Wergelands energi og folkelighet, og Welhavens kvalitetsbevissthet og europeiske perspektiv. Sammen skapte de grunnlaget for en moden norsk litteratur.`,
    },
    {
      id: 'norsk-vg2-5-3-def-1',
      type: 'definition',
      title: 'Johan Sebastian Welhaven - sentrale begreper',
      content: `**Biografiske fakta:**
- 1807-1873
- Født i Bergen, prestesonn
- Professor i filosofi fra 1846
- Gift med Josephine Bidoulac

**Hovedverk:**
- "Norges Dæmring" (1834)
- "Digte" (1839)
- "Nyere Digte" (1845)
- "Halvhundrede Digte" (1848)

**Litterære kjennetegn:**
- Formell dyktighet og teknisk presisjon
- Dempet, subtil stemning
- Naturlyrikk som speiler sinnsstemninger
- Klassisistiske idealer innen romantikken

**Kulturpolitiske standpunkter:**
- For europeisk dannelse og tradisjon
- Mot overfladisk patriotisme
- For kvalitet fremfor kvantitet
- Dikteren som kunstner, ikke agitator`,
    },
    {
      id: 'norsk-vg2-5-3-def-2',
      type: 'definition',
      title: 'Striden Wergeland-Welhaven',
      content: `**Bakgrunn:**
Den største kulturstriden i norsk historie, 1830-1840-tallet.

**Wergelands parti (Patriotene):**
- Vektla det spesifikt norske
- Ville bryte med dansk kulturarv
- Folkelig orientering
- Dikteren som samfunnsengasjert

**Welhavens parti (Intelligensen/Danomaner):**
- Vektla europeisk dannelse
- Ville bevare kulturelle bånd til Europa
- Eliteorientering
- Dikteren som kunstner

**Stridsspørsmål:**
- Hva er norsk kultur?
- Hvordan bygge en ny nasjon?
- Hva er god litteratur?
- Hvem skal dikteren tale for?

**Resultat:**
Begge sider bidro til å forme norsk kultur. Norge fikk både folkelig og elitekultur, både nasjonal egenart og europeisk tilknytning.`,
    },
    {
      id: 'norsk-vg2-5-3-example-1',
      type: 'example',
      title: 'Eksempel: "Lokkende Toner"',
      problem: `Les Welhavens dikt "Lokkende Toner":

"Der er en Dal i Norden,
Der kommer jeg aldrig mer!
Der tindrer Sneen paa Fjeldet,
Og Bækkene risle der.

Der stander en Hytte ved Fjeldet,
Dens Dør har jeg aldrig seet;
Men tidt i den stille Aften
Har yndige Toner leet.

Det var som en Kvindesmerte,
En Vellyst i smeltende Graad,
En Bøn om Trøst fra et Hjerte,
Som aldrig fandt Raad.

Og det var en stille Klage
I Ensomhed sunget ud, -
Men Tonerne bleve derinde,
Thi Hytten var lukket for Gud."

Analyser diktet med fokus på stemning og symbolikk.`,
      solution: `**Analyse av "Lokkende Toner":**

**Komposisjon:**
Diktet har fire strofer med fast form (kryssrim, vekslende versemål). Denne stramme formen er typisk for Welhaven.

**Setting:**
En dal i Norden med fjell, snø og bekker - typisk romantisk norsk landskap. Men dikter-jeget "kommer aldrig mer" dit.

**Mysteriet:**
En hytte ved fjellet som dikteren aldri har vært inne i. Derfra høres "yndige Toner" - sang fra en ukjent kvinne.

**Sangen:**
Tonene beskrives som "Kvindesmerte", "Vellyst i smeltende Graad", "Bøn om Trøst". Dette er romantisk lengsel og smerte - kanskje uoppnåelig kjærlighet.

**Den lukkede hytten:**
"Hytten var lukket for Gud" - et sterkt bilde. Kvinnen er innestengt, avskåret fra frelse og trøst. Sangen blir aldri hørt.

**Symbolikk:**
- *Dalen:* Et tapt paradis, noe uoppnåelig
- *Hytten:* Isolasjon, lukkethet
- *Sangen:* Lengsel som aldri når frem
- *Sneen og bækkene:* Naturens evige gang kontrastert med menneskets smerte

**Stemning:**
Vemodig, lengtende, melankolsk. Diktet handler om noe tapt og uoppnåelig - en erfaring dikteren aldri kan gjøre, en smerte han aldri kan lindre.

**Welhavens særpreg:**
- Dempet, antydende stil
- Perfekt form
- Naturen som ramme for følelser
- Mysteriet som aldri forklares helt

Diktet er et mesterstykke i romantisk stemningslyrikk og viser Welhavens evne til å skape dyp virkning med enkle midler.`,
    },
    {
      id: 'norsk-vg2-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Fra "Norges Dæmring"',
      problem: `Les dette utdraget fra Welhavens kontroversielle dikt "Norges Dæmring" (1834):

"Hvad er det for en Susen
I Norges gamle Gran?
Hvad er det for en Brusen
I Norges Fos og Strand?
Er det maaskee Normanna-Aand,
Der vaagner i det Fjerne?
Er Fjeldet Vugge, Havet Baand
For Frihedskampens Stjerne?

Ak nei! Det er kun vilde Ord
Og tomme Drikke-Sange
Der summer hen og svinder bort
I Echoløse Gange.
Det er kun Fjas og Skraal og Skrig
Fra dem, som ikke kjender sig,
Fra dem, som ingenting formaar
Og dog saa haardt paa Thronen slaar."

Hva kritiserer Welhaven her?`,
      solution: `**Analyse av "Norges Dæmring":**

**Ironisk åpning:**
Welhaven begynner med romantiske bilder - susende graner, brusende fosser. Han spør retorisk om dette er "Normanna-Aand" som våkner.

**Svaret - "Ak nei!":**
Den romantiske forventningen knuses. Det er ikke nasjonal storhet, men "vilde Ord / Og tomme Drikke-Sange" - patriotisk prat uten substans.

**Kritikkens mål:**
Welhaven kritiserer:
- Overfladisk patriotisme ("Fjas og Skraal og Skrig")
- Folk som tror de er noe uten å ha skapt noe
- Tom selvhevdelse ("paa Thronen slaar")
- Mangel på selvinnsikt ("ikke kjender sig")

**Reaksjonen:**
Diktet skapte skandale. Welhaven ble angrepet fysisk og utskjelt. Men kritikken hadde en kjerne av sannhet: Ung norsk nasjonalisme kunne bli selvtilfreds og tom.

**Retoriske virkemidler:**
- Kontrasten mellom romantisk åpning og syrlig kritikk
- Overdrivelse for komisk/satirisk effekt
- Retoriske spørsmål
- Harde ord (Fjas, Skraal, Skrig)

**Litterær kvalitet:**
Selv kritikerne måtte innrømme at diktet var teknisk briljant. Welhaven behersker formen selv når han provoserer.

**Vurdering:**
Diktet er ensidig og urettferdig mot Wergeland-leiren. Men det peker på et reelt problem: Nasjonalisme uten substans er tom. Norge trengte både Wergelands entusiasme og Welhavens kvalitetskrav.`,
    },
    {
      id: 'norsk-vg2-5-3-tip-1',
      type: 'tip',
      title: 'Tips for å sammenligne Wergeland og Welhaven',
      content: `**Slik kan du sammenligne de to dikterne:**

**Form:**
- Wergeland: Fri, ekspansiv, noen ganger kaotisk
- Welhaven: Stram, kontrollert, formelt perfekt

**Tone:**
- Wergeland: Høylytt, entusiastisk, lidenskapelig
- Welhaven: Dempet, subtil, melankolsk

**Natursyn:**
- Wergeland: Naturen som livskraft og bekreftelse
- Welhaven: Naturen som stemning og refleksjon

**Dikterrolle:**
- Wergeland: Dikteren som folkeopplyser og agitator
- Welhaven: Dikteren som kunstner og håndverker

**Nasjonalisme:**
- Wergeland: Bygge noe nytt fra folkedypet
- Welhaven: Forankre det norske i europeisk tradisjon

**Styrker:**
- Wergeland: Energi, originalitet, engasjement
- Welhaven: Presisjon, dybde, stemning

**Svakheter:**
- Wergeland: Kan bli uferdig og overdreven
- Welhaven: Kan bli kjølig og ekskluderende

**Konklusjon:**
Ikke spør hvem som var "best". Spør hva hver av dem bidro med, og hvorfor norsk litteratur trengte begge.`,
    },
    {
      id: 'norsk-vg2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Welhavens diktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner Welhavens poetikk?',
            solution: 'Welhaven la vekt på formell presisjon, dempet stemning, naturlyrikk som speiler følelser, og klassisistiske idealer. Underdrivelse fremfor overdrivelse.',
          },
          {
            label: 'b',
            task: 'Analyser stemningen i "Lokkende Toner". Hvilke virkemidler skaper stemningen?',
            solution: 'Stemningen er vemodig og lengtende. Virkemidler: mysteriøse bilder (den lukkede hytten), kontraster (naturens skjønnhet vs. isolasjonen), antydning fremfor forklaring.',
          },
          {
            label: 'c',
            task: 'Hvorfor ble "Norges Dæmring" så kontroversielt?',
            solution: 'Diktet kritiserte patriotisme som tom selvskryt. I en tid med sterk nasjonalisme oppfattes dette som forræderi mot fedrelandet og angrep på Wergeland-kretsen.',
          },
        ],
        solution: 'Welhaven var en mester i stemningslyrikk og en skarp kritiker som hevet nivået på norsk litterær debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Wergeland og Welhaven.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var hovedforskjellene i deres syn på norsk kultur?',
            solution: 'Wergeland ville bygge norsk kultur "nedenfra" fra bondefolket og bryte med Danmark. Welhaven ville forankre norsk kultur i europeisk dannelse og bevare kvalitetstradisjoner.',
          },
          {
            label: 'b',
            task: 'Sammenlign et dikt av Wergeland med "Lokkende Toner" av Welhaven. Hva er forskjellene i stil og tone?',
            solution: 'Wergeland: energisk, ekspansiv, høylytt. Welhaven: dempet, subtil, melankolsk. Wergeland bruker store ord, Welhaven antyder.',
          },
          {
            label: 'c',
            task: 'Hvorfor trengte norsk kultur begge disse dikterne?',
            solution: 'Wergeland ga energi, folkelig forankring og nasjonal begeistring. Welhaven ga kvalitetskrav, europeisk perspektiv og formell dyktighet. Sammen skapte de en balansert grunnmur for norsk litteratur.',
          },
        ],
        solution: 'Wergeland og Welhaven representerer komplementære krefter i norsk kulturliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft kulturstriden.',
        subTasks: [
          {
            label: 'a',
            task: 'Var striden mellom Wergeland og Welhaven produktiv for norsk kultur? Begrunn svaret.',
            solution: 'Ja, striden tvang begge sider til å skjerpe argumentene og hevet nivået på kulturdebatten. Norge fikk både folkelig og elitekultur, både nasjonal egenart og europeisk tilknytning.',
          },
          {
            label: 'b',
            task: 'Finnes det lignende kulturdebatter i dag? Gi eksempler.',
            solution: 'Ja, for eksempel: folkekultur vs. elitekultur, norsk vs. internasjonal orientering, underholdning vs. kunst, tilgjengelighet vs. kvalitet.',
          },
        ],
        solution: 'Kulturstriden på 1830-tallet setter viktige spørsmål om nasjonalitet, kvalitet og kulturens rolle i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Romantisk lyrikk og naturopplevelse
// ============================================================================

export const CHAPTER_NORSK_VG2_5_4: TextbookChapter = {
  id: 'norsk-vg2-5-4',
  courseId: 'norsk-vg2',
  chapterNumber: '5.4',
  title: 'Romantisk lyrikk og naturopplevelse',
  description: 'Utforsk hvordan romantikkens diktere skildret naturen og brukte den som uttrykk for følelser og ideer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'analysere og tolke tekster med bruk av fagbegreper',
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-5-4-intro',
      type: 'text',
      content: `## Romantisk naturlyrikk - når naturen taler til sjelen

For romantikerne var naturen langt mer enn kulisser eller ressurser. Naturen var besjelet, levende, full av mening - et speil for menneskets sjel og et vindu mot det guddommelige. Denne oppfatningen preget lyrikken på 1800-tallet og skapte noen av de vakreste diktene i norsk og europeisk litteratur.

**Romantikkens natursyn**

Opplysningstiden hadde sett naturen som en mekanisme som kunne forstås gjennom fornuft og vitenskap. Romantikerne reagerte mot dette. For dem var naturen:

*Besjelet:*
Naturen har liv og ånd. Trær, fjell, bekker og skyer er ikke døde ting, men deltakere i et kosmisk drama. Naturkreftene er uttrykk for en åndelig virkelighet.

*Et speil for sjelen:*
Landskapet reflekterer dikterens sinnstilstand. Stormfulle fjell speiler indre kamper, stille innsjøer speiler fred og kontemplasjon. Naturen og mennesket hører sammen.

*Hellig:*
I naturen kan mennesket møte det guddommelige. Fjelltoppen, skogen, havet blir hellige steder der dikteren kommer nærmere skaperverkets hemmeligheter.

*Nasjonal:*
For norske romantikere var den norske naturen - fjell, fjorder, fosser - et uttrykk for norsk folkekarakter. Landskapet gjorde oss til dem vi er.

**Naturopplevelsens faser**

Romantiske dikt om naturen følger ofte et mønster:

1. *Observasjon:* Dikteren betrakter et landskap eller naturscene
2. *Innlevelse:* Dikteren lever seg inn i naturen, føler seg ett med den
3. *Refleksjon:* Naturen vekker tanker om livet, døden, kjærligheten, Gud
4. *Transformasjon:* Dikteren forvandles av opplevelsen

Denne strukturen finner vi hos både Wergeland, Welhaven og andre romantikere.

**Naturmotiver i romantikken**

Visse naturmotiver går igjen og har symbolsk betydning:

*Fjell og høyder:*
Symboliserer det opphøyde, frihet fra det hverdagslige, nærhet til himmelen. Å bestige fjellet er en åndelig reise.

*Skogen:*
Mysteriets sted, der det ukjente og farlige truer, men også der man kan finne seg selv. Eventyrenes skog.

*Vannet:*
Sjøer, bekker, fosser - symboler på livets strøm, følelsenes dyp, fornyelse og renselse. Også farlig (drukningsdøden).

*Kvelden og natten:*
Tid for refleksjon, drøm og lengsel. Månelys og stjerner inspirerer til metafysiske tanker.

*Årstidene:*
Vår = fornyelse, ungdom, håp. Sommer = fylde, modenhet. Høst = vemod, aldring. Vinter = død, men også renselse.

**Norske romantikeres naturlyrikk**

*Henrik Wergeland (1808-1845):*
Wergelands naturdikt er dynamiske og livskraftige. Naturen hos ham er skaperkraft, bevegelse, entusiastisk liv. Hans mest kjente naturskildringer finnes i "Skabelsen, Mennesket og Messias" og i kortere dikt.

*Johan Sebastian Welhaven (1807-1873):*
Welhavens natur er stillere, mer melankolsk. Han mestrer stemningsdiktet der landskapet speiler vemod, lengsel og forgjengelighet. "Lokkende Toner" og "Dalen" er mesterverk.

*Andreas Munch (1811-1884):*
Munch skrev populære naturlyriske dikt med enkel form og folkelig tone. "Sæterjentens Søndag" er blitt folkelesning.

*Bjørnstjerne Bjørnson (1832-1910):*
I sine tidlige dikt fortsetter Bjørnson den romantiske tradisjonen med storslåtte naturskildringer, som i "Ja, vi elsker dette landet".

**Virkemidler i naturlyrikken**

Romantisk naturlyrikk bruker særegne virkemidler:

*Besjeling (personifikasjon):*
Naturen får menneskelige egenskaper. Vinden sukker, fjellet troner, bekken hvisker.

*Synestesi:*
Sanseinntrykk blandes. Farger "klinger", lyder "skinner".

*Symbolikk:*
Naturmotiver har betydning utover seg selv. Solnedgangen symboliserer død, våren symboliserer håp.

*Kontraster:*
Lys og mørke, storm og stille, høyde og dyp settes mot hverandre for å skape spenning og mening.

*Musikalitet:*
Lyd og rytme i språket gjenspeiler naturens lyder - bekkers risling, vindens sus, fuglens sang.

**Naturlyrikken arv**

Romantikkens naturlyrikk har satt dype spor. Fremdeles skriver norske diktere om naturen, og mange av bildene og motivene stammer fra romantikken. Men forholdet til naturen har endret seg - i dag er naturlyrikken ofte preget av miljøbekymring og tap, ikke bare av andakt og henrykkelse.`,
    },
    {
      id: 'norsk-vg2-5-4-def-1',
      type: 'definition',
      title: 'Romantikkens naturbegreper',
      content: `**Panteisme:** Forestillingen om at Gud er til stede i alt i naturen. Naturen er guddommelig.

**Naturmystikk:** Opplevelse av enhet med naturen, ofte med religiøs overtone.

**Det sublime:** Naturopplevelse av overveldende storhet som vekker både frykt og henrykkelse. Fjell, fosser, stormer.

**Besjelet natur:** Forestillingen om at naturen har liv og ånd, ikke bare er materie.

**Korrespondanse:** Sammenheng mellom natur og sjel. Landskapet speiler følelser.

**Lokalt koloritt:** Bruk av særegne nasjonale landskaper for å uttrykke nasjonal identitet.

**Naturlengsel:** Romantisk lengsel bort fra byen og sivilisasjonen til ren og hellig natur.`,
    },
    {
      id: 'norsk-vg2-5-4-def-2',
      type: 'definition',
      title: 'Virkemidler i naturlyrikk',
      content: `**Besjeling (personifikasjon):** Naturen får menneskelige egenskaper. "Fjellet troner", "bekken synger".

**Symbol:** Naturmotiv som betyr noe mer enn seg selv. Solen = liv/Gud, mørket = død/synd.

**Metafor:** Overført betydning. "Livet er en vandring".

**Simile:** Sammenligning med "som". "Stille som en innsjø".

**Synestesi:** Sanseinntrykk blandes. "Mørke klanger", "lyse toner".

**Allitterasjon:** Bokstavrim. "Susen i skogen".

**Onomatopoetikon:** Lydmalende ord. "Risling", "brus", "sus".

**Rytme og klang:** Versets lyd speiler naturens lyder.`,
    },
    {
      id: 'norsk-vg2-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Wergelands "Til Foraaret"',
      problem: `Les dette utdraget fra Wergelands dikt "Til Foraaret":

"Vaar! Vaar! Vaar! Alt er Vaar!
Vaarens Seiersrop Alt maa høre.
Fuglene synger, Skyerne gaae,
Bækkene larme og Skove sig røre.

Op fra de slumrende Blade og Qviste
Luften vibrerer med tusinde Briste!
Marken er grøn og Himlen er blaa -
Menneske! Glæd dig! Hvad staar du og seer paa?"

Analyser diktet som romantisk naturlyrikk.`,
      solution: `**Analyse av "Til Foraaret":**

**Stemning og energi:**
Diktet eksploderer av energi. Utropstegnene, gjentakelsene ("Vaar! Vaar! Vaar!"), de aktive verbene - alt skaper en følelse av oppbrudd og livskraft.

**Besjelet natur:**
- Fuglene synger (de uttrykker glede)
- Skyene går (de beveger seg med vilje)
- Bækkene larmer (de har stemme)
- Skove seg røre (de våkner)

Naturen er ikke passiv kulisse, men aktive deltakere i vårfesten.

**Sanseinntrykk:**
- Hørsel: sang, larm, brist
- Syn: grønn mark, blå himmel
- Bevegelse: vibrering, rørelse

Wergeland engasjerer flere sanser for å skape en total naturopplevelse.

**Klimaks og henvendelse:**
Diktet bygger opp til en direkte oppfordring: "Menneske! Glæd dig!" Naturen feirer - mennesket må delta!

**Romantiske trekk:**
- Enhet mellom menneske og natur
- Naturen som livskraft og inspirasjon
- Entusiasme og henrykkelse
- Våren som fornyelse og håp

**Wergelands særpreg:**
- Dynamisk, nesten overveldende energi
- Direkte henvendelse til leseren
- Enkel, folkelig form
- Uforbeholden begeistring

Dette er Wergeland på sitt mest karakteristiske: en hyllest til livet selv, uttrykt gjennom naturens våroppvåkning.`,
    },
    {
      id: 'norsk-vg2-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Welhavens "Dalen"',
      problem: `Les Welhavens dikt "Dalen":

"Her ligger Dalen, halvmørk og stille,
Med sine Sletter og Aasers Rad.
Solskinnet legger sig kun saa milde
Over den blinkende Elv og dens Bad.

Her er saa stille. Kun Gjøgen galer
Fjernt over Aasernes blaalige Kam.
Ak, i mit Hjerte det aldrig taler
Den Fred, som hviler paa hver en Dam!"

Analyser diktet med fokus på stemning og kontraster.`,
      solution: `**Analyse av "Dalen":**

**Setting:**
En dal, halvmørk og stille, med sletter, åser, en blinkende elv. Solskinnet er mildt, en gjøk galer i det fjerne.

**Kontrasten:**
Her er hovedelementet. Naturen er fredelig ("stille", "milde", "Fred"), men dikter-jegets hjerte finner ikke denne freden.

- Utvendig: stillhet, fred, harmoni
- Innvendig: uro, lengsel, mangel på fred

**Stemningen:**
Vemodig, melankolsk. Selv vakker natur kan ikke lindre en sjel i uro. Dikteren er fremmed for den freden han ser.

**Virkemidler:**

*"Halvmørk":* Ordet antyder noe tvetydig, ikke helt lyst.

*Gjøkens galing:* Gjøken er tradisjonelt knyttet til vemod og lengsel. Den galer "fjernt" - freden er utenfor rekkevidde.

*"Ak":* Sukket markerer kontrasten. Dikteren erkjenner sitt eget underskudd av fred.

*Rytme:* Regelmessig, rolig - speiler dalens stillhet, men kontrasterer med hjertets uro.

**Romantisk naturopplevelse:**
Naturen speiler - eller i dette tilfellet kontrasterer - sjelen. Welhaven bruker den vakre naturen til å fremheve indre uro, ikke til å feire naturens skjønnhet.

**Welhavens særpreg:**
- Dempet stemning
- Subtil kontrast
- Melankoli
- Perfekt form

Dette er romantisk naturlyrikk der naturen viser frem det sjelen mangler, ikke det den opplever.`,
    },
    {
      id: 'norsk-vg2-5-4-tip-1',
      type: 'tip',
      title: 'Tips for analyse av romantisk naturlyrikk',
      content: `**Slik analyserer du romantisk naturlyrikk:**

**1. Beskriv naturscenen:**
Hva ser dikteren? Hvilken tid på døgnet/året? Hvilket landskap?

**2. Identifiser stemningen:**
Er diktet preget av glede, vemod, lengsel, henrykkelse? Hvordan skapes stemningen?

**3. Let etter besjeling:**
Får naturen menneskelige egenskaper? Snakker, føler, handler den?

**4. Finn symbolikken:**
Hva kan naturmotivene symbolisere? Sol, mørke, vann, fjell, årstider?

**5. Se på forholdet menneske-natur:**
Er dikteren ett med naturen? Fremmed for den? Overveldet av den?

**6. Analyser kontraster:**
Lys-mørke? Indre-ytre? Storm-stille?

**7. Lytt til språket:**
Hvordan støtter rytme og klang innholdet? Lydmalende ord?

**8. Plasser diktet:**
Hvem skrev det? Når? Hvilken type romantikk representerer det?

**9. Sammenlign:**
Hvordan ville Wergeland vs. Welhaven skrevet om samme scene?`,
    },
    {
      id: 'norsk-vg2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser romantisk naturlyrikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med at romantikerne så naturen som "besjelet"?',
            solution: 'Romantikerne mente at naturen ikke var død materie, men hadde liv, ånd og følelser. Naturen kunne kommunisere med mennesket og uttrykke noe guddommelig.',
          },
          {
            label: 'b',
            task: 'Sammenlign Wergelands og Welhavens naturdikt ut fra utdragene i dette kapittelet.',
            solution: 'Wergeland: dynamisk, energisk, entusiastisk, folkelig. Welhaven: stille, melankolsk, subtil, formelt perfekt. Begge besjelder naturen, men med helt ulik stemning.',
          },
          {
            label: 'c',
            task: 'Hvilke naturmotiver går igjen i romantisk lyrikk, og hva kan de symbolisere?',
            solution: 'Fjell (opphøyelse, frihet), skog (mysterium, eventyrets sted), vann (følelser, liv), kveld/natt (refleksjon, lengsel), årstider (livets gang). Alle kan speile sinnstilstander.',
          },
        ],
        solution: 'Romantisk naturlyrikk bruker naturen til å uttrykke følelser, tanker og lengsel mot noe større.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv romantisk naturlyrikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et kort dikt (8-12 linjer) i romantisk stil om en naturopplevelse du har hatt.',
            solution: 'Eksempel: Bruk besjeling av naturen, la landskapet speile en følelse, bruk sanselige beskrivelser, gjerne med symbolikk.',
          },
          {
            label: 'b',
            task: 'Forklar hvilke romantiske virkemidler du har brukt.',
            solution: 'Svar bør nevne: besjeling, symbolikk, sanseinntrykk, stemning, eventuelt kontraster og musikalitet i språket.',
          },
        ],
        solution: 'Å skrive i romantisk stil gir innsikt i epokens natursyn og virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign romantikkens og nåtidens natursyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan så romantikerne på forholdet mellom menneske og natur?',
            solution: 'Mennesket var en del av naturen, kunne bli ett med den, og finne mening og guddommelig nærvær i den. Naturen var hellig og besjelet.',
          },
          {
            label: 'b',
            task: 'Hvordan preger dagens klimakrise vårt forhold til naturen?',
            solution: 'I dag ser vi naturen også som truet og sårbar. Forholdet preges av skyld, ansvar og frykt for tap. Naturlyrikken i dag kan handle om sorg over det som forsvinner.',
          },
          {
            label: 'c',
            task: 'Hva kan vi lære av romantikernes natursyn i dag?',
            solution: 'Romantikernes ærefrykt for naturen og opplevelse av den som meningsfull kan inspirere til større respekt og vilje til å beskytte den. Følelsesmessig tilknytning til naturen kan motivere handling.',
          },
        ],
        solution: 'Romantikkens natursyn utfordrer oss til å tenke over vårt eget forhold til naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.1: Nasjonalromantikken og nasjonsbygging
// ============================================================================

export const CHAPTER_NORSK_VG2_6_1: TextbookChapter = {
  id: 'norsk-vg2-6-1',
  courseId: 'norsk-vg2',
  chapterNumber: '6.1',
  title: 'Nasjonalromantikken og nasjonsbygging',
  description: 'Utforsk hvordan litteratur og kultur bidro til å skape norsk nasjonal identitet på 1800-tallet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-6-1-intro',
      type: 'text',
      content: `## Nasjonalromantikken - jakten på det norske

Nasjonalromantikken var en kulturell bevegelse på 1800-tallet som søkte å definere og dyrke det spesifikt norske. Etter 400 år under dansk styre trengte den nye nasjonen en egen identitet - og denne skulle finnes i språk, folkeviser, eventyr og bondekultur.

**Bakgrunn**

I 1814 fikk Norge sin egen grunnlov og løsrev seg fra Danmark - men gikk i union med Sverige. Landet trengte en nasjonal identitet som var tydelig norsk, verken dansk eller svensk.

De norske nasjonalromantikerne fulgte europeiske forbilder:
- I Tyskland samlet brødrene Grimm eventyr
- I Finland skapte Lönnrot nasjonaleposet "Kalevala"
- Romantikken vektla folkekulturen som uttrykk for "folkånd"

**Nasjonalromantikkens program**

*Samle:* Innsamling av folkeviser, eventyr, sagn, ordspråk fra bondebefolkningen.

*Studere:* Vitenskapelig utforskning av norsk språk, historie og kultur.

*Skape:* Ny litteratur og kunst inspirert av det nasjonale.

*Fornye:* Utvikle et norsk skriftspråk basert på dialektene.

**Sentrale skikkelser**

- P.Chr. Asbjørnsen og Jørgen Moe: Eventyrsamlere
- M.B. Landstad: Samlet folkeviser
- Ivar Aasen: Skapte landsmålet
- J.C. Dahl og Tidemand/Gude: Nasjonalromantisk malerkunst
- Edvard Grieg: Musikk inspirert av folkemusikk`,
    },
    {
      id: 'norsk-vg2-6-1-def-1',
      type: 'definition',
      title: 'Nasjonalromantikkens begreper',
      content: `**Nasjonalromantikk:** Kulturell bevegelse som søkte å definere og dyrke det spesifikt nasjonale.

**Folkånd (Volksgeist):** Ideen om at hvert folk har en egen "ånd" uttrykt i språk og kultur.

**Folkediktning:** Eventyr, sagn, viser, ordspråk skapt av "folket".

**Innsamlingsarbeid:** Systematisk innsamling av folkediktning fra bygdene.

**Bondekultur:** For nasjonalromantikerne representerte bøndene det autentiske norske.

**Stavkirker:** Middelalderske trekirker som symboler på norsk egenart.

**Folkedrakt (bunad):** Regionale drakter som ble gjenoppdaget og idealisert.`,
    },
    {
      id: 'norsk-vg2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar nasjonalromantikkens betydning for norsk identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor var nasjonalromantikken viktig for Norge etter 1814?',
            solution: 'Norge trengte en egen identitet etter 400 år under Danmark. Nasjonalromantikken bidro til å definere hva som var spesifikt norsk.',
          },
          {
            label: 'b',
            task: 'Hva samlet nasjonalromantikerne, og hvorfor?',
            solution: 'De samlet eventyr, folkeviser, sagn og ordspråk. De mente at folkekulturen uttrykte folkets "ånd" og kunne danne grunnlag for nasjonal kultur.',
          },
        ],
        solution: 'Nasjonalromantikken var avgjørende for å skape norsk nasjonal identitet på 1800-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Asbjørnsen og Moe - folkeeventyr
// ============================================================================

export const CHAPTER_NORSK_VG2_6_2: TextbookChapter = {
  id: 'norsk-vg2-6-2',
  courseId: 'norsk-vg2',
  chapterNumber: '6.2',
  title: 'Asbjørnsen og Moe - folkeeventyr',
  description: 'Lær om innsamlingen av norske folkeeventyr og deres betydning for nasjonal identitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-6-2-intro',
      type: 'text',
      content: `## Asbjørnsen og Moe - skaperne av det norske eventyret

Peter Christen Asbjørnsen (1812-1885) og Jørgen Moe (1813-1882) er Norges mest berømte eventyrsamlere. Deres "Norske Folkeeventyr" (første hefte 1841) ble en nasjonal klassiker og bidro sterkt til å forme norsk identitet og språk.

**Innsamlingsarbeidet**

Asbjørnsen og Moe reiste rundt i norske bygder og samlet eventyr fra muntlig tradisjon. De intervjuet bønder og tjenestefolk og skrev ned fortellingene de hørte.

Men de gjorde mer enn å skrive ned - de bearbeidet materialet til litterær form. De skapte en eventyrstil som kombinerte muntlig fortellertone med litterær kunst.

**Eventyrstilen**

Asbjørnsens og Moes språk ble normgivende for norsk prosa:
- Folkelig tone med muntlige vendinger
- Dialektord og uttrykk
- Rytmisk, flytende fortelling
- Humor og ironi

**Betydning**

Folkeeventyrene fikk enorm betydning:
- De definerte "det norske" gjennom fortellinger
- De inspirerte kunstnere, komponister og forfattere
- De bidro til å fornorske skriftspråket
- De ble pensum i norsk skole i generasjoner

**Kjente eventyr**

- "Askeladden og de gode hjelperne"
- "De tre Bukkene Bruse"
- "Mannen som skulle stelle hjemme"
- "Kvitebjørn kong Valemon"
- "Gutten som gikk til Nordavinden"`,
    },
    {
      id: 'norsk-vg2-6-2-def-1',
      type: 'definition',
      title: 'Eventyrsjangeren',
      content: `**Folkeeventyr:** Eventyr fra muntlig tradisjon, samlet og nedskrevet.

**Kunsteventyr:** Eventyr diktet av en forfatter (som H.C. Andersen).

**Eventyrtyper:**
- *Undereventyr:* Overnaturlige elementer (troll, konger, prinsesser)
- *Dyreeventyr:* Dyr er hovedpersoner
- *Skjemteeventyr:* Hverdagslige, humoristiske

**Eventyrstrukturen:**
- Åpningsformel: "Det var en gang..."
- Tretallets lov: Tre brødre, tre oppgaver, tre forsøk
- Hjelpere og motstandere
- Lykkelig slutt
- Avslutningsformel: "Snipp, snapp, snute..."

**Askeladden:**
Den typiske norske eventyrhelten - yngste bror, blir undervurdert, bruker list og vinner.`,
    },
    {
      id: 'norsk-vg2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser folkeeventyrenes betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan arbeidet Asbjørnsen og Moe?',
            solution: 'De reiste i bygdene og samlet eventyr fra muntlig tradisjon. De bearbeidet materialet til litterær form med folkelig tone.',
          },
          {
            label: 'b',
            task: 'Hvorfor ble eventyrene viktige for norsk identitet?',
            solution: 'De definerte "det norske", inspirerte kunst og litteratur, bidro til å fornorske språket.',
          },
        ],
        solution: 'Folkeeventyrene var sentralt i nasjonsbyggingsprosjektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Ivar Aasen og landsmålet
// ============================================================================

export const CHAPTER_NORSK_VG2_6_3: TextbookChapter = {
  id: 'norsk-vg2-6-3',
  courseId: 'norsk-vg2',
  chapterNumber: '6.3',
  title: 'Ivar Aasen og landsmålet',
  description: 'Lær om Ivar Aasens arbeid med å skape et norsk skriftspråk basert på dialektene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med svensk, dansk og norrønt',
  ],
  content: [
    {
      id: 'norsk-vg2-6-3-intro',
      type: 'text',
      content: `## Ivar Aasen - skaperen av nynorsk

Ivar Aasen (1813-1896) skapte et nytt norsk skriftspråk basert på dialektene. Hans arbeid la grunnlaget for det som i dag heter nynorsk, og han regnes som en av de viktigste skikkelsene i norsk språkhistorie.

**Liv og bakgrunn**

Aasen vokste opp på en liten gård på Sunnmøre. Han var i stor grad selvlært, men hadde en usedvanlig språkbegavelse. I 1842 fikk han stipend til å reise rundt i Norge og samle dialekter.

**Språkarbeidet**

Aasens metode var vitenskapelig:
1. Han reiste systematisk gjennom landet
2. Han samlet ordforråd og grammatikk fra dialektene
3. Han sammenlignet med norrønt
4. Han konstruerte en normalform - landsmålet

**Aasens argumenter**

Aasen mente at det danske skriftspråket var fremmed for det norske folk. Bare et skriftspråk bygd på dialektene kunne være ekte norsk. Han så forbindelsen til norrønt som et viktig argument.

**Betydning**

Aasens landsmål (senere: nynorsk) ble et av Norges to offisielle skriftspråk. Hans arbeid:
- Gav Norge et selvstendig skriftspråk
- Bevarte dialektene som grunnlag
- Knytte moderne norsk til norrøn arv
- Inspirerte målrørsla (nynorskbevegelsen)`,
    },
    {
      id: 'norsk-vg2-6-3-def-1',
      type: 'definition',
      title: 'Ivar Aasen - sentrale begreper',
      content: `**Landsmål:** Aasens navn på skriftspråket han skapte (nå: nynorsk).

**Målreising:** Bevegelsen for å fremme landsmål/nynorsk.

**Folkemål:** Betegnelse på dialektene - folkets faktiske talespråk.

**Normalform:** Et standardisert skriftspråk basert på flere dialekter.

**Aasens verker:**
- "Det norske Folkesprogs Grammatik" (1848)
- "Ordbog over det norske Folkesprog" (1850)
- "Norsk Grammatik" (1864)
- "Norsk Ordbog" (1873)

**Aasens prinsipp:**
Landsmålet skulle bygge på de dialektene som hadde bevart mest fra norrønt.`,
    },
    {
      id: 'norsk-vg2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar Ivar Aasens språkarbeid.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan arbeidet Aasen med å skape landsmålet?',
            solution: 'Han reiste systematisk og samlet dialekter, sammenlignet med norrønt, og konstruerte en normalform basert på dialektene.',
          },
          {
            label: 'b',
            task: 'Hvorfor mente Aasen at Norge trengte et nytt skriftspråk?',
            solution: 'Det danske skriftspråket var fremmed for folket. Et ekte norsk skriftspråk måtte bygge på dialektene.',
          },
        ],
        solution: 'Aasen skapte landsmålet for å gi Norge et selvstendig skriftspråk med røtter i folkemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: Norske folkeviser og ballader
// ============================================================================

export const CHAPTER_NORSK_VG2_6_4: TextbookChapter = {
  id: 'norsk-vg2-6-4',
  courseId: 'norsk-vg2',
  chapterNumber: '6.4',
  title: 'Norske folkeviser og ballader',
  description: 'Utforsk den norske folkevisetradisjonen med ridderballader, kjempeviser og trollviser.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske tekster fra romantikken og nasjonalromantikken',
    'lese norrøne tekster i oversettelse og sammenligne med nyere tekster',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-6-4-intro',
      type: 'text',
      content: `## Norske folkeviser - stemmer fra middelalderen

Folkevisene eller balladene er en skatt av dikting som ble skapt i middelalderen og overlevert muntlig gjennom generasjoner. På 1800-tallet samlet M.B. Landstad og andre disse visene fra tradisjonsbarere over hele landet. Samlingen ble en hjørnestein i det norske nasjonsbyggingsprosjektet.

**Hva er en folkevise?**

En folkevise (eller ballade) er en fortellende sang med følgende kjennetegn:

*Muntlig overlevering:*
Visene ble sunget, ikke skrevet. De ble lært utenat og ført videre fra generasjon til generasjon. Derfor finnes ofte mange varianter av samme vise.

*Fortellende innhold:*
Folkevisen forteller en historie - ofte dramatisk, om kjærlighet, død, overnaturlige møter eller heltemot.

*Fast form:*
Visene har strofer, ofte med fast rimmønster, og gjerne et omkved (refreng) som gjentas.

*Anonymt opphav:*
Vi vet ikke hvem som diktet folkevisene. De tilhører fellesskapet.

**Når og hvor oppsto folkevisene?**

De fleste norske folkeviser stammer sannsynligvis fra perioden 1100-1400, altså høy- og senmiddelalder. De ble påvirket av europeiske balladetradisjoner, særlig franske og engelske, men fikk norske særpreg.

Visene levde videre i muntlig tradisjon, særlig i bygde-Norge. Setesdal og Telemark var særlig rike på tradisjonsbarere som kunne mange gamle viser.

**Innsamlingen**

Magnus Brostrup Landstad (1802-1880) ga ut "Norske Folkeviser" i 1853 - en samling på over 100 viser han hadde samlet fra folkemunne. Samlingen ble en sensasjon og en viktig del av nasjonalromantikken.

Også Sophus Bugge, Olea Crøger og andre bidro til innsamlingsarbeidet. Mange viser ble reddet i siste liten, før tradisjonsbærerne døde.

**Typer av folkeviser**

Folkevisene deles gjerne inn etter innhold:

*Ridderballader:*
Forteller om adelsmenn og deres kjærlighetsaffærer, ofte med tragisk utgang. Eksempel: "Roland og Magnus kongen".

*Kjempeviser (legendeviser):*
Bygger på norrøne sagn om helter som kjemper mot troll og jotner. Eksempel: "Åsmund Frægdegjevar".

*Trollviser:*
Handler om møter med overnaturlige vesener - bergtroll, nøkken, hulder. Eksempel: "Margit Hjukse".

*Naturmytiske viser:*
Skildrer naturens makter og menneskets forhold til dem.

*Historiske viser:*
Basert på virkelige hendelser, som kongedrap eller slag.

**Folkevisens stil**

Folkevisene har karakteristiske stiltrekk:

*Formler og faste uttrykk:*
Visse vendinger går igjen: "Han sadlet sin gangare grå", "Tidlig om morgonen". Dette hjalp sangeren å huske.

*Dialogform:*
Mange viser er bygd opp som dialoger mellom personene.

*Dramatisk konsentrasjon:*
Visene hopper rett inn i handlingen og fokuserer på høydepunkter. Bakgrunn og forklaring utelates.

*Antydning fremfor beskrivelse:*
Følelser og motiver antydes ofte indirekte gjennom handling og dialog.

*Symbolspråk:*
Faste symboler: lindetre = vennskap, rosebusk = kjærlighet, svart ravn = ulykke.

**Omkvede**

Omkvede (refreng) er en fast del som gjentas etter hver strofe. Det kan være nonsens-linjer ("falleri fallera"), naturbilder ("- for det lyser på hei") eller tematiske kommentarer. Omkvedet skaper stemning og gir rom for ettertanke mellom strofene.

**Folkevisenes betydning**

Folkevisene har hatt stor betydning:

1. *For nasjonalromantikken:* De beviste at Norge hadde en egen rik kultur, ikke bare dansk import.

2. *For språket:* Visene var på norsk dialekt og ble argumenter for et norsk skriftspråk.

3. *For litteraturen:* Kunstnere som Ibsen, Bjørnson og Grieg hentet inspirasjon fra folkevisene.

4. *For musikken:* Melodiene ble samlet og brukt i ny musikk. Edvard Grieg arbeidet mye med folkemusikk.

5. *For identiteten:* Folkevisene ble en del av norsk selvforståelse - "slik var vi før dansketiden".`,
    },
    {
      id: 'norsk-vg2-6-4-def-1',
      type: 'definition',
      title: 'Folkevisesjangeren - sentrale begreper',
      content: `**Folkevise (ballade):** Fortellende sang fra middelalderen, overlevert muntlig.

**Omkved (refreng):** Fast del som gjentas etter hver strofe.

**Strofe:** Vers-enhet i diktet, ofte 4 linjer.

**Tradisjonsbærer:** Person som kan mange viser utenat og fører dem videre.

**Variant:** Ulik versjon av samme vise, oppstått gjennom muntlig overlevering.

**Typer folkeviser:**
- *Ridderballader:* Om adelsfolk, kjærlighet, ære
- *Kjempeviser:* Om helter som kjemper mot troll
- *Trollviser:* Om møter med overnaturlige vesener
- *Naturmytiske viser:* Om naturens makter
- *Historiske viser:* Basert på virkelige hendelser

**Stilistiske trekk:**
- Formler og faste uttrykk
- Dialogform
- Dramatisk konsentrasjon
- Symbolspråk`,
    },
    {
      id: 'norsk-vg2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: "Draumkvedet"',
      problem: `"Draumkvedet" regnes som den ypperste norske folkevisen. Les dette utdraget:

"Olav Åsteson,
han la seg ned um jólekvelden stærke,
- for de soli kjem-
han vakna 'kje fyrr um trettandagen,
då folkji til kyrkja skulde fara.
- for de lyser på hei, de vegen so lei,
yvir dei djupaste dalar -

Han sette seg upp i sengjestokken,
tok te å fortelja draumane sine.
Eg hev vakje uti trettan nættar
og sovi meg so lang ei svevn,
eg hev vori i himmerik
og dult hjå bånine små."

Analyser visen med fokus på innhold og form.`,
      solution: `**Analyse av "Draumkvedet":**

**Innhold:**
Olav Åsteson sovner julekvelden og våkner ikke før trettendagen (13 dager senere). I søvnen drømmer han seg til de dødes rike og opplever visjoner av himmel og helvete. Når han våkner, forteller han om det han har sett.

**Sjanger:**
Draumkvedet er en visjonsdiktning - en reise til det hinsidige - som blander norrøn folketro med kristne forestillinger. Det er unikt i nordisk tradisjon.

**Omkvedet:**
"- for de soli kjem" og "- for de lyser på hei, de vegen so lei, / yvir dei djupaste dalar -"

Omkvedet skaper stemning med naturbilder. "Soli kjem" varsler lysning, oppvåkning. "Lyser på hei" antyder at det skinner et lys selv over de dypeste daler - håp og frelse.

**Språk:**
Visen er på telemarksdiakekt, noe som ble viktig for målrørsla. Språket er arkaisk og poetisk.

**Kristne og norrøne elementer:**
- Kristent: Himmelrik, dom, frelse
- Norrønt: Gjallarbrua, Grotti-Gråskjegg (hedenske skikkelser)

Blandingen viser hvordan førkristen og kristen tro sameksisterte i folkereligiøsiteten.

**Symbolikk:**
- De 13 nettene: Julens hellige tid, overgangstid
- Drømmen: Portal til det usynlige
- Veien: Livets og dødens vei

**Litterær status:**
Draumkvedet regnes som norsk litteraturs fremste folkevise - et mesterstykke i visjonær dikting som har inspirert kunstnere fra Ibsen til Nils Aslak Valkeapää.`,
    },
    {
      id: 'norsk-vg2-6-4-example-2',
      type: 'example',
      title: 'Eksempel: "Margit Hjukse" (trollvise)',
      problem: `Les begynnelsen av trollvisen "Margit Hjukse":

"Margit Hjukse ho sette seg ned
- og der er inkje mannen min -
ho ville gjera skomakarverk
- å vi sòm elska upp i Lilja -

Berget det let seg upp sò vidt,
der reid so fager ein svein der ut.

Han kom seg ridand i garden inn
og batt sin gangar ve' lindi grøn.

'Høyr du, Margit, kva eg spør deg om:
vil du med meg til berget gonge?'"

Analyser visen som trollvise.`,
      solution: `**Analyse av "Margit Hjukse":**

**Sjanger - trollvise:**
Trollviser handler om møter mellom mennesker og overnaturlige vesener - troll, hulder, nøkken, bergfolk. Ofte er det en erotisk undertone: De overnaturlige lokker mennesker med seg.

**Handlingen:**
Margit sitter og arbeider. Berget åpner seg, en vakker mann (bergmann/huldrekall) rir ut og frister henne til å følge med inn i berget. Visen fortsetter med at hun lokkes og tas.

**Omkvedet:**
"- og der er inkje mannen min -" (Mannen hennes er borte)
"- å vi sòm elska upp i Lilja -" (Vi som elsket opp i Lilja)

Disse mystiske linjene skaper stemning. De antyder lengsel og fravær.

**Symbolikk:**
- *Berget:* Det ukjente, det farlige, det forførende
- *Gangaren:* Hesten - tegn på makt og ridderlighet
- *Lindi grøn:* Lindetre - tradisjonelt møtested og hellig tre

**Trollvisenes budskap:**
Visene advarer mot å la seg lokke av det ukjente. De forteller om farene i grenselandet mellom menneske- og trollverden. Samtidig uttrykker de en dragning mot det forbudte.

**Struktur:**
- Situasjon etableres (Margit sitter alene)
- Det overnaturlige bryter inn (berget åpner seg)
- Fristelsen (vil du med meg?)
- Konflikten (skal hun gå eller bli?)

**Formler:**
"Berget det let seg upp" er en fast vending i trollviser. Den signaliserer at noe overnaturlig skjer.`,
    },
    {
      id: 'norsk-vg2-6-4-tip-1',
      type: 'tip',
      title: 'Tips for analyse av folkeviser',
      content: `**Slik analyserer du en folkevise:**

**1. Identifiser type:**
Er det ridderballade, kjempevise, trollvise, historisk vise?

**2. Kartlegg handlingen:**
Hva skjer? Hvem er personene? Hva er konflikten?

**3. Analyser omkvedet:**
Hva sier det? Hvordan skaper det stemning? Gjentas det likt eller med variasjon?

**4. Se på stilen:**
- Formler og faste uttrykk?
- Dialogform?
- Dramatisk konsentrasjon?
- Symboler?

**5. Finn symbolikken:**
Hva kan naturobjekter og handlinger symbolisere?

**6. Vurder tema:**
Kjærlighet? Død? Skjebne? Lojalitet? Møte med det overnaturlige?

**7. Tenk på kontekst:**
- Når ble visen skapt (middelalderen)?
- Når ble den samlet inn (1800-tallet)?
- Hvordan ble den brukt i nasjonalromantikken?

**8. Sammenlign:**
Finnes lignende viser fra andre land? Hva er særnorsk?

**Les gjerne visene høyt** - de var ment for sang og får ny mening når de fremføres.`,
    },
    {
      id: 'norsk-vg2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser folkevisesjangeren.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner folkevisen som sjanger?',
            solution: 'Muntlig overlevering, fortellende innhold, fast form med strofer og omkved, anonymt opphav, dramatisk konsentrasjon, bruk av formler og symboler.',
          },
          {
            label: 'b',
            task: 'Hvilke typer folkeviser finnes, og hva handler de om?',
            solution: 'Ridderballader (adelsfolk, kjærlighet), kjempeviser (helter mot troll), trollviser (møter med overnaturlige), naturmytiske viser (naturens makter), historiske viser (virkelige hendelser).',
          },
          {
            label: 'c',
            task: 'Hvorfor var innsamlingen av folkeviser viktig for nasjonalromantikken?',
            solution: 'Folkevisene beviste at Norge hadde egen rik kultur. De var på norsk dialekt og støttet argumenter for et norsk skriftspråk. De ga kunstnere nasjonal inspirasjon.',
          },
        ],
        solution: 'Folkevisene er en rik arv fra middelalderen som ble gjenoppdaget og brukt i nasjonsbyggingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Arbeid med Draumkvedet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva forteller Draumkvedet om?',
            solution: 'Olav Åsteson sovner julekvelden og sover i 13 netter. I drømmen reiser han til de dødes rike og ser visjoner av himmel og helvete. Han forteller om det når han våkner.',
          },
          {
            label: 'b',
            task: 'Hvordan blander Draumkvedet norrøne og kristne elementer?',
            solution: 'Kristne elementer: himmelrik, dom, frelse. Norrøne elementer: Gjallarbrua, Grotti-Gråskjegg. Blandingen viser folkereligiøsitetens sammensmeltning av gammel og ny tro.',
          },
          {
            label: 'c',
            task: 'Hva er omkvedets funksjon i Draumkvedet?',
            solution: 'Omkvedet ("for de lyser på hei...") skaper stemning og gir pusterom mellom strofene. Det antyder håp (lys) midt i mørket (de dypeste daler). Det binder visen sammen.',
          },
        ],
        solution: 'Draumkvedet er et unikt mesterverk som viser norsk middelalderkultur på sitt rikeste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign folkeviser med moderne tekster.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en moderne sang (vise, popsang) som handler om kjærlighet eller møte med det ukjente. Sammenlign med en folkevise.',
            solution: 'Svar vil variere. Se på: fortellerteknikk, bruk av symboler, refrengets funksjon, stemning. Er den moderne sangen mer direkte? Bruker folkevisen mer antydning?',
          },
          {
            label: 'b',
            task: 'Finnes det moderne artister som bruker folkevisetradisjonen? Gi eksempler.',
            solution: 'Eksempler: Gåte, Wardruna, Sinikka Langeland, Odd Nordstoga. Disse henter melodier, tekster eller stemning fra folkemusikken.',
          },
        ],
        solution: 'Folkevisetradisjonen lever videre og inspirerer moderne kunstnere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Språkdebatten - landsmål vs riksmål
// ============================================================================

export const CHAPTER_NORSK_VG2_6_5: TextbookChapter = {
  id: 'norsk-vg2-6-5',
  courseId: 'norsk-vg2',
  chapterNumber: '6.5',
  title: 'Språkdebatten - landsmål mot riksmål',
  description: 'Utforsk den store norske språkstriden fra 1800-tallet og dens ettervirkninger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'reflektere over språklige varianter i Norge og holdninger til dem',
  ],
  content: [
    {
      id: 'norsk-vg2-6-5-intro',
      type: 'text',
      content: `## Språkstriden - Norges lengste kulturkamp

Ingen annen kulturstrid har vart så lenge eller engasjert så mange i Norge som språkstriden mellom landsmål (nynorsk) og riksmål (bokmål). Denne striden, som begynte på 1800-tallet, har formet norsk kultur, politikk og identitet på avgjørende måter.

**Bakgrunn: Språksituasjonen i 1814**

Da Norge ble selvstendig i 1814, var språksituasjonen slik:

*Skriftspråk:* Dansk var det eneste skriftspråket. All offisiell, kirkelig og litterær bruk var på dansk.

*Talespråk i byene:* Overklassen og borgerskapet snakket en "dannet dagligtale" - dansk påvirket av norsk uttale.

*Talespråk på bygdene:* Bønder og arbeidsfolk snakket norske dialekter som skilte seg sterkt fra dansk.

Denne kløften mellom skrift og tale ble oppfattet som et problem. Norge var en ny nasjon som trengte et nasjonalt språk.

**To veier til fornorsking**

To ulike strategier ble foreslått for å skape et norsk skriftspråk:

*Ivar Aasens vei (landsmål):*
Aasen skapte et helt nytt skriftspråk basert på dialektene, særlig de som hadde bevart mest fra norrønt. Resultatet var landsmålet (fra 1929: nynorsk).

*Knud Knudsens vei (riksmål):*
Knudsen ville fornorske dansken gradvis ved å ta inn norske ord og bøyninger. Resultatet var en gradvis fornorsket dansk som ble til riksmål (fra 1929: bokmål).

**Den tidlige striden (1850-1900)**

I denne perioden ble frontene etablert:

*Landsmålsfolk:*
- Støttet av bondebevegelsen og venstrebevegelsen
- Argumenterte for at bare et språk fra folkedypet var ekte norsk
- Så dansken som et fremmedspråk
- Knyttet språk til demokrati: Folkets språk mot elitens

*Riksmålsfolk:*
- Støttet av byborgerskap og konservative
- Argumenterte for at gradvis fornorsking var mer praktisk
- Så landsmål som kunstig og vanskelig
- Fryktet kulturelt brudd med europeisk tradisjon

**Politisering (1900-1950)**

Språkstriden ble stadig mer politisk:

*1885:* Landsmål og riksmål likestilt som offisielle språk (jamstillingsvedtaket)

*1907, 1917, 1938:* Store rettskrivningsreformer som forsøkte å nærme de to språkene til hverandre ("samnorsktanken")

*1938-reformen:* Den mest radikale, som innførte såkalte "tilnærmingsformer" i begge språk. Skapte voldsom motstand.

Striden ble knyttet til klassekamp og geografi: By mot land, overklasse mot bondestand, Oslo mot resten.

**Etterkrigstiden (1950-1990)**

*Foreldreaksjonene:* På 1950-tallet protesterte foreldre voldsomt mot "samnorsk" i skolebøkene. Bøker ble brent.

*1959 og 1981:* Nye reformer som tonet ned samnorsktanken

*1972:* Språkrådet opprettet for å overvåke normeringen av begge språk

*Sidemål:* Kravet om sidemål i skolen har vært konstant stridstema

**Situasjonen i dag**

Språkstriden er roligere, men ikke over:

- Nynorsk er hovedmål for ca. 12% av elevene
- Bokmål dominerer i medier og offentlighet
- Sidemålsdebatten blusser jevnlig opp
- Dialektene har fått økt status
- Språkdeling (to parallelle normeringer) er akseptert

**Språkstridens betydning**

Striden har hatt store konsekvenser:

1. *To skriftspråk:* Norge er unikt med to offisielle skriftspråk.

2. *Dialektbevissthet:* Nordmenn har stor toleranse for dialektbruk.

3. *Språkpolitisk bevissthet:* Språk er et politisk tema i Norge som nesten ingen andre steder.

4. *Kulturell splittelse:* Striden har bidratt til regionale og sosiale motsetninger.

5. *Rikdom:* To skriftspråk og mange dialekter gir et rikt språklig repertoar.`,
    },
    {
      id: 'norsk-vg2-6-5-def-1',
      type: 'definition',
      title: 'Språkstrid - sentrale begreper',
      content: `**Landsmål / Nynorsk:** Skriftspråket Ivar Aasen skapte basert på dialektene. Heter nynorsk fra 1929.

**Riksmål / Bokmål:** Det fornorskede danske skriftspråket. Heter bokmål fra 1929.

**Samnorsk:** Tanken om å smelte de to språkene sammen til ett. Dominerte språkpolitikken 1917-1970.

**Jamstillingsvedtaket (1885):** Stortingsvedtak om at landsmål og riksmål er likestilte offisielle språk.

**Tilnærmingsformer:** Former som skulle bringe de to språkene nærmere hverandre.

**Sidemål:** Det andre skriftspråket enn elevens hovedmål, som man må lære på skolen.

**Målrørsla:** Bevegelsen for landsmål/nynorsk.

**Riksmålsforbundet:** Organisasjon for riksmål/bokmål.

**Språkrådet:** Statlig organ for språknormering (opprettet 1972).`,
    },
    {
      id: 'norsk-vg2-6-5-def-2',
      type: 'definition',
      title: 'Viktige personer i språkstriden',
      content: `**For landsmål/nynorsk:**

**Ivar Aasen (1813-1896):** Skapte landsmålet. Ga ut grammatikker og ordbøker.

**Aasmund Olavsson Vinje (1818-1870):** Første store forfatter på landsmål. Ga ut bladet "Dølen".

**Arne Garborg (1851-1924):** Fremragende forfatter som skrev på landsmål.

**For riksmål/bokmål:**

**Knud Knudsen (1812-1895):** Forkjemper for gradvis fornorsking av dansk.

**Bjørnstjerne Bjørnson (1832-1910):** Støttet riksmål, men brukte noen nynorske former.

**Arnulf Øverland (1889-1968):** Sterk forsvarer av riksmålet mot samnorsk.

**For samnorsk:**

**Halvdan Koht (1873-1965):** Historiker og politiker som fremmet samnorsktanken.

**Didrik Arup Seip (1884-1963):** Språkforsker og normeringsstrateg.`,
    },
    {
      id: 'norsk-vg2-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Argumenter i språkstriden',
      problem: `Studer disse argumentene fra språkstriden:

**For landsmål:**
"Det danske Skriftsprog er ikke vort; vi have intet Sprog, vi skrive i, som er vort. At skrive i et fremmed Sprog er at være en Slave." (Aasen)

**Mot landsmål:**
"Landsmålet er et kunstprodukt, et sprogsystem som aldrig nogen Normand har talt." (riksmålstilhenger)

Analyser argumentene: Hvilke verdier og perspektiver ligger bak?`,
      solution: `**Analyse av argumentene:**

**Aasens argument:**

*Verdier:* Nasjonal selvstendighet, frihet, autentisitet

*Retorikk:* Sterk patos - "slave" er et følelsesladet ord. Aasen appellerer til nasjonalfølelse.

*Logikk:* Premisset er at et folk må ha sitt "eget" språk for å være fritt. Dansk er "fremmed", ergo er vi slaver.

*Svakheter:* Er det virkelig slik at man er "slave" av å bruke et annet skriftspråk? Mange folk har klart seg godt med "lånte" skriftspråk.

**Motargumentet:**

*Verdier:* Praktisk, historisk kontinuitet, tradisjon

*Retorikk:* "Kunstprodukt" er negativt ladet - antyder noe unaturlig og konstruert.

*Logikk:* Premisset er at et ekte språk må være naturlig vokst, ikke konstruert. Landsmål er konstruert, ergo er det ikke ekte.

*Svakheter:* Alle standardspråk er i noen grad konstruerte. Også riksmålet ble normert og regulert.

**Felles for begge:**

Begge argumenter appellerer til hva som er "ekte" og "naturlig". Striden handlet mye om identitet: Hva er ekte norsk? Hvem representerer det norske folk?

**Lærdommen:**
Språkdebatten handler aldri bare om språk. Den handler om makt, identitet og hvem som får definere hva nasjonen er.`,
    },
    {
      id: 'norsk-vg2-6-5-tip-1',
      type: 'tip',
      title: 'Tips for å forstå språkstriden',
      content: `**Nøkler til å forstå språkstriden:**

**1. Det handlet om mer enn språk:**
Striden var også en kamp om klasse, region og makt. Hvem skulle definere hva Norge var?

**2. Begge sider hadde poenger:**
Landsmålsfolk hadde rett i at det danske var fremmed for mange. Riksmålsfolk hadde rett i at det var praktiske problemer med et nytt språk.

**3. Begge språk er norske:**
I dag er både bokmål og nynorsk norske språk med lang historie og rik litteratur.

**4. Striden har formet oss:**
Norges unike språksituasjon, dialekttoleranse og språkpolitiske bevissthet kommer fra denne striden.

**5. Den er ikke over:**
Sidemålsdebatten, nynorskprosenten og språkpolitikk generelt viser at spørsmålene fortsatt engasjerer.

**Når du analyserer tekster fra striden:**
- Hvem taler? Hvilken side?
- Hvilke verdier appelleres det til?
- Hvilke retoriske virkemidler brukes?
- Hva er sterke og svake sider ved argumentasjonen?`,
    },
    {
      id: 'norsk-vg2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar språkstridens bakgrunn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan var språksituasjonen i Norge i 1814?',
            solution: 'Dansk var eneste skriftspråk. Overklassen snakket dannet dagligtale, bønder snakket dialekter. Det var stor avstand mellom skrift og tale for mange.',
          },
          {
            label: 'b',
            task: 'Hva var forskjellen på Aasens og Knudsens tilnærming til et norsk skriftspråk?',
            solution: 'Aasen ville bygge nytt skriftspråk fra dialektene (landsmål). Knudsen ville fornorske dansken gradvis (riksmål/bokmål).',
          },
          {
            label: 'c',
            task: 'Hvilke sosiale grupper støttet de ulike sidene, og hvorfor?',
            solution: 'Landsmål: Bønder, venstrebevegelsen, distrikter - fordi det var basert på deres talemål. Riksmål: Byborgerskap, konservative - fordi de allerede brukte dette språket.',
          },
        ],
        solution: 'Språkstriden hadde dype sosiale og geografiske røtter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft språkstridens ettervirkninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor har Norge to offisielle skriftspråk i dag?',
            solution: 'Jamstillingsvedtaket av 1885 likestilte de to språkene. Samnorsktanken mislyktes, og begge språk har blitt videreført med egne tradisjoner og brukermiljøer.',
          },
          {
            label: 'b',
            task: 'Hva er fordelene og ulempene med to skriftspråk?',
            solution: 'Fordeler: Språklig mangfold, dialekttoleranse, rik litteratur. Ulemper: Merarbeid i skole og forvaltning, splittelse, kostnader.',
          },
          {
            label: 'c',
            task: 'Bør sidemål være obligatorisk i skolen? Gi argumenter for og mot.',
            solution: 'For: Kulturforståelse, språklig kompetanse, demokrati (alle skal kunne lese begge). Mot: Merarbeid, tvang, praktisk unødvendig for mange.',
          },
        ],
        solution: 'Språkstriden har gitt Norge en unik, men også utfordrende språksituasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser språkpolitisk argumentasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Les Aasens argument fra eksempelet. Hvilke retoriske virkemidler bruker han?',
            solution: 'Aasen bruker sterk patos (slave-metaforen), appell til nasjonalfølelse, kontraster (vår/fremmed, fri/slave), og implisitt etos som ekspert på språk.',
          },
          {
            label: 'b',
            task: 'Finn et moderne innlegg i språkdebatten (f.eks. om sidemål). Analyser argumentasjonen.',
            solution: 'Svar vil variere. Se på: Hvilke verdier appelleres til? Hvilke retoriske virkemidler brukes? Er argumentasjonen logisk? Hvem er målgruppen?',
          },
        ],
        solution: 'Språkdebatter bruker ofte følelsesladede argumenter fordi språk er knyttet til identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.1: Fra norrønt til moderne norsk
// ============================================================================

export const CHAPTER_NORSK_VG2_7_1: TextbookChapter = {
  id: 'norsk-vg2-7-1',
  courseId: 'norsk-vg2',
  chapterNumber: '7.1',
  title: 'Fra norrønt til moderne norsk',
  description: 'Utforsk hvordan norsk språk har utviklet seg fra norrøn tid til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-7-1-intro',
      type: 'text',
      content: `## Norsk språkhistorie - de store linjene

Norsk språk har gjennomgått store endringer fra norrøn tid til i dag. Forståelsen av denne utviklingen er nøkkelen til å forstå hvorfor vi har to skriftspråk, mange dialekter, og en komplisert språkpolitisk historie.

**Periodene**

*Urnordisk (ca. 200-700):* Det eldste stadiet vi kjenner gjennom runeinnskrifter.

*Norrønt (ca. 700-1350):* Vikingtid og tidlig middelalder. Sagaer og eddadikt ble skrevet.

*Mellomnorsk (ca. 1350-1525):* Perioden etter svartedauden. Stor språklig endring.

*Dansketiden (ca. 1525-1814):* Dansk var offisielt skriftspråk.

*Moderne norsk (fra 1814):* Utvikling av to norske skriftspråk.

**De viktigste endringene**

Fra norrønt til moderne norsk skjedde store endringer:
- Kasussystemet forsvant nesten helt
- Verbsystemet ble forenklet
- Mange lydendringer
- Stor påvirkning fra lavtysk
- Dansk skriftspråk erstattet norsk

**Svartedauden som vendepunkt**

Svartedauden (1349-50) tok livet av kanskje halvparten av befolkningen. Dette fikk store språklige konsekvenser:
- Den gamle overklassen ble desimert
- Skrivetradisjonen ble brutt
- Dansk ble dominerende skriftspråk
- Dialektene utviklet seg fritt`,
    },
    {
      id: 'norsk-vg2-7-1-def-1',
      type: 'definition',
      title: 'Språkhistoriske perioder',
      content: `**Urnordisk (ca. 200-700):** Eldste kjente stadium, runer.

**Norrønt (ca. 700-1350):** Vikingtid, sagalitteratur.

**Mellomnorsk (ca. 1350-1525):** Etter svartedauden, stor endring.

**Dansketiden (ca. 1525-1814):** Dansk skriftspråk.

**Moderne norsk (fra 1814):** Bokmål og nynorsk utvikles.

**Viktige endringer:**
- Kasus forsvinner
- Endelser faller bort
- Lavtysk påvirkning
- Dansk skriftspråk`,
    },
    {
      id: 'norsk-vg2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i norsk språkhistorie.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke hovedperioder deler vi norsk språkhistorie inn i?',
            solution: 'Urnordisk, norrønt, mellomnorsk, dansketiden, moderne norsk.',
          },
          {
            label: 'b',
            task: 'Hvorfor var svartedauden viktig for språkutviklingen?',
            solution: 'Den desimerte overklassen, brøt skrivetradisjonen, og åpnet for dansk dominans.',
          },
        ],
        solution: 'Norsk språkhistorie viser store endringer gjennom tusen år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Dansk-norsk og fornorskning
// ============================================================================

export const CHAPTER_NORSK_VG2_7_2: TextbookChapter = {
  id: 'norsk-vg2-7-2',
  courseId: 'norsk-vg2',
  chapterNumber: '7.2',
  title: 'Dansk-norsk og fornorskning',
  description: 'Utforsk hvordan dansketiden påvirket norsk og hvordan fornorskingen skjedde.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med dansk',
  ],
  content: [
    {
      id: 'norsk-vg2-7-2-intro',
      type: 'text',
      content: `## Dansketiden og språket - 400 år som formet norsk

I nesten 400 år (1397-1814) var Norge i union med Danmark. I denne perioden ble dansk det eneste skriftspråket i Norge, mens dialektene levde videre som talespråk. Fornorskingen av skriftspråket etter 1814 er en av de mest omtalte prosessene i norsk språkhistorie.

**Hvordan dansk ble Norges skriftspråk**

Prosessen skjedde gradvis:

*Kalmarunionen (1397):* Norge, Sverige og Danmark forenes. Dansk blir felles administrasjonsspråk.

*Reformasjonen (1536):* Den danske Bibelen og dansk kirkespråk innføres. Norge blir en dansk provins.

*Skolegang og litteratur:* All utdanning og alt trykt materiale er på dansk.

*Embetsverket:* Alle offentlige dokumenter skrives på dansk av danske eller danskutdannede embetsmenn.

**Hva skjedde med norsk?**

Norsk forsvant som skriftspråk, men levde videre som talespråk:

*Dialektene:* Bønder og arbeidsfolk fortsatte å snakke sine dialekter. Disse var direkte arvtakere fra norrønt/mellomnorsk.

*Dannet dagligtale:* I byene utviklet overklassen et talespråk basert på dansk, men med norsk uttale og noen norske ord.

*Ingen norsk standard:* Det fantes ingen "norsk" å falle tilbake på - bare dansk og lokale dialekter.

**Fornorskingen etter 1814**

Etter at Norge ble selvstendig i 1814, begynte to parallelle prosesser:

*Ivar Aasens vei (landsmål):*
Aasen bygde et nytt skriftspråk fra bunnen, basert på dialektene. Dette ble landsmål (nynorsk).

*Knud Knudsens vei (riksmål):*
Knudsen og andre ville fornorske dansken innenfra - bytte ut danske ord og former med norske. Dette ble riksmål (bokmål).

**Eksempler på fornorsking**

Dansk form -> Bokmål i dag:
- "Bog" -> "Bok"
- "Gade" -> "Gate"
- "Brød" -> "Brød" (samme)
- "mig, dig, sig" -> "meg, deg, seg"
- "have" -> "ha"
- "skrive" (med bløt d) -> "skrive" (med hard d)

Noen danske former er beholdt:
- "Sprog" (dansk) vs. "språk" (norsk form, innført gradvis)

**"Dannet dagligtale" som norm**

Knud Knudsens hovedidé var at skriftspråket skulle gjenspeile "den dannede dagligtale" - slik de utdannede i byene snakket. Dette var et kontroversielt valg:

- Det favoriserte bybefolkningen
- Det holdt på mange danske trekk
- Men det var praktisk - folk måtte ikke lære noe helt nytt

**Fornorskingsreformene**

Gjennom flere rettskrivingsreformer ble bokmål gradvis fornorsket:

*1907:* Obligatorisk harde konsonanter (p, t, k for b, d, g)
*1917:* Mange norske former innført som valgfrie
*1938:* Radikal reform med mange "folkelige" former
*1959, 1981, 2005:* Justeringer og liberaliseringer

**Resultatet**

Bokmål i dag er et særegent språk - verken dansk eller norrønt, men noe midt imellom. Det bærer spor av 400 års danskestyre, men også av 200 års fornorsking.

Nynorsk har holdt seg nærmere dialektene og norrønt, men har også gjennomgått endringer og tilnærminger til bokmål.`,
    },
    {
      id: 'norsk-vg2-7-2-def-1',
      type: 'definition',
      title: 'Dansketiden og fornorsking - begreper',
      content: `**Dansketiden:** Perioden 1397-1814 da Norge var i union med Danmark og dansk var skriftspråk.

**Dannet dagligtale:** Talemålet til utdannede mennesker i byene - dansk med norsk uttale.

**Fornorsking:** Prosessen med å gjøre skriftspråket mer norsk, enten ved å bytte ut danske former (bokmål) eller bygge nytt fra dialektene (nynorsk).

**Eksempler på lydlige forskjeller dansk/norsk:**
- Danske bløte konsonanter (b, d, g) -> norske harde (p, t, k)
- Dansk "stød" finnes ikke i norsk
- Dansk "æ" -> norsk "e" i mange ord

**Viktige reformer:**
- 1907: Harde konsonanter obligatoriske
- 1917: Mange valgfrie norske former
- 1938: Radikal fornorsking
- 1959, 1981, 2005: Justeringer`,
    },
    {
      id: 'norsk-vg2-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Tekstutvikling fra dansk til bokmål',
      problem: `Sammenlign disse versjonene av samme setning:

**Dansk (ca. 1800):**
"Jeg veed ikke hvad jeg skal gjøre med denne Bog."

**Riksmål 1907:**
"Jeg vet ikke hvad jeg skal gjøre med denne Bok."

**Bokmål 1938:**
"Jeg veit ikke hva jeg skal gjøre med denne boka."

**Bokmål i dag:**
"Jeg vet ikke hva jeg skal gjøre med denne boka/boken."

Analyser hvilke endringer som er gjort og hvorfor.`,
      solution: `**Analyse av endringene:**

**"veed" -> "vet":**
Dansk hadde dobbel vokal, norsk har enkel. "vet" speiler norsk uttale.

**"hvad" -> "hva":**
Stumme d-er fjernes. Vi uttaler ikke d-en.

**"gjøre" -> "gjøre":**
Denne formen er lik. Noen danske former beholdes.

**"Bog" -> "Bok" -> "boka/boken":**
- Bløt g -> hard k (uttalen i Norge)
- Stor forbokstav -> liten (norsk praksis)
- "boken" er tradisjonell form, "boka" er folkelig form innført i 1938

**"veed" -> "vet" -> "veit":**
"veit" er den folkelige formen, tillatt fra 1938 men ikke lenger eneform.

**Hva viser dette?**
1. Fornorskingen handlet mye om å speile norsk uttale
2. Reformene ga ofte valgfrihet mellom tradisjonelle og folkelige former
3. Dagens bokmål er et kompromiss med mange valgmuligheter
4. Endringene skjedde gradvis over 200 år`,
    },
    {
      id: 'norsk-vg2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan dansk ble Norges skriftspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke faktorer førte til at dansk erstattet norsk som skriftspråk?',
            solution: 'Kalmarunionen med dansk administrasjon, reformasjonen med dansk bibel og kirkespråk, danske embetsmenn, all utdanning og trykk på dansk.',
          },
          {
            label: 'b',
            task: 'Hva skjedde med det norske talespråket i dansketiden?',
            solution: 'Dialektene levde videre blant folk flest. Overklassen i byene utviklet "dannet dagligtale" - dansk med norsk uttale. Ingen norsk standard fantes.',
          },
          {
            label: 'c',
            task: 'Hva var forskjellen på Aasens og Knudsens fornorskingsstrategier?',
            solution: 'Aasen bygde nytt språk fra dialektene (nynorsk). Knudsen ville fornorske dansken gradvis innenfra (bokmål).',
          },
        ],
        solution: 'Dansketiden skapte den særegne norske språksituasjonen vi fortsatt lever med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Studer fornorskingen av bokmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på ord der bokmål har erstattet danske former med norske.',
            solution: 'Eksempler: veed->vet, gade->gate, bog->bok, mig->meg, have->ha, sprog->språk.',
          },
          {
            label: 'b',
            task: 'Hva menes med "harde" og "bløte" konsonanter?',
            solution: 'Harde: p, t, k. Bløte: b, d, g. Dansk har ofte bløte konsonanter der norsk har harde (f.eks. "gab" vs. "gap").',
          },
          {
            label: 'c',
            task: 'Hvorfor er bokmål verken helt dansk eller helt norsk?',
            solution: 'Bokmål er fornorsket dansk - det beholder mye dansk struktur og ordforråd, men har fått norske lydtrekk og noen norske former. Det er et kompromiss.',
          },
        ],
        solution: 'Bokmål er et unikt språk formet av 400 års danskestyre og 200 års fornorsking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Sammenligning - norsk, svensk, dansk
// ============================================================================

export const CHAPTER_NORSK_VG2_7_3: TextbookChapter = {
  id: 'norsk-vg2-7-3',
  courseId: 'norsk-vg2',
  chapterNumber: '7.3',
  title: 'Sammenligning - norsk, svensk, dansk',
  description: 'Utforsk likhetene og forskjellene mellom de skandinaviske språkene.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke fagspråk til å beskrive særtrekk ved norsk sammenlignet med svensk, dansk og norrønt',
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
  ],
  content: [
    {
      id: 'norsk-vg2-7-3-intro',
      type: 'text',
      content: `## De skandinaviske språkene - søsken med ulike personligheter

Norsk, svensk og dansk stammer alle fra norrønt og er så nært beslektet at vi ofte kan forstå hverandre. Likevel har de utviklet seg i ulike retninger. Å kjenne forskjellene og likhetene mellom de skandinaviske språkene gir innsikt i vår egen språkhistorie.

**Felles opphav**

Alle tre språkene stammer fra urnordisk og norrønt. I vikingtiden (ca. 800-1050) var forskjellene mellom nordboernes språk små - en nordmann og en danske kunne forstå hverandre uten problemer.

Gradvis utviklet østnordisk (dansk, svensk) og vestnordisk (norsk, islandsk, færøysk) seg i ulike retninger. Etter middelalderen forsterket nasjonale grenser og ulik historie forskjellene ytterligere.

**Norsk i dag**

Norge har en unik språksituasjon:

- To offisielle skriftspråk (bokmål og nynorsk)
- Stor dialekttoleranse i offentligheten
- Bokmål ligger nær dansk i struktur, men har norske lydtrekk
- Nynorsk ligger nærmere norrønt og islandsk

**Svensk**

Svensk er det skandinaviske språket med flest morsmålstalere (ca. 10 millioner).

*Kjennetegn:*
- Spesiell tonelagsmelodi ("melodisk aksent")
- Mange ordforrådsforskjeller fra dansk/norsk
- Én skriftspråksstandard (rikssvenska)
- Uttalemessig nærmere norsk enn dansk

**Dansk**

Dansk var lenge det kulturelt dominerende språket i Skandinavia.

*Kjennetegn:*
- Redusert uttale - mange lyder "svelges"
- Stød (glottal lukkelyd) finnes ikke i norsk/svensk
- Tett på bokmål i skrift, men ulikt i uttale
- Mange skandinaver synes dansk er vanskelig å forstå muntlig

**Likheter**

De skandinaviske språkene har mye til felles:

*Ordforråd:*
Det grunnleggende ordforrådet er likt: hus, mann, kvinne, barn, gå, komme, etc.

*Grammatikk:*
- To kjønn (felleskjønn + nøytrum) eller tre kjønn
- Etterstilt artikkel (huset, mannen)
- Lignende setningsstruktur (SVO)
- Lignende verbsystem

*Gjensidig forståelighet:*
Med litt trening kan skandinaver forstå hverandre, særlig i skrift.

**Forskjeller**

*Lydlige forskjeller:*
- Dansk har bløte konsonanter og stød
- Norsk og svensk har tonelag (ordmelodi)
- Svensk har spesiell vokal (u-lyd)
- Dansk uttale er "lukket", svensk mer "melodisk"

*Ordforråd som skiller:*
| Norsk | Svensk | Dansk |
|-------|--------|-------|
| morsom | rolig | sjov |
| rask | snabb | hurtig |
| annerledes | annorlunda | anderledes |
| ganske | ganska | ret |

*Grammatiske forskjeller:*
- Norsk/dansk: to kjønn i bokmål, tre i nynorsk
- Svensk: to kjønn (en-ord, ett-ord)
- Ulike ord for "ikke": norsk "ikke", svensk "inte", dansk "ikke"

**Inter-skandinavisk kommunikasjon**

Skandinaver kan ofte forstå hverandre, men det varierer:

- Nordmenn forstår dansk og svensk best (eksponering for begge)
- Svensker forstår norsk bra, dansk dårligere
- Dansker har oftest størst problemer

Grunner til at nordmenn forstår best:
1. Bokmål ligner dansk i skrift
2. Norsk uttale ligner svensk
3. Vi er vant til to målformer og dialektvariasjon

**Skandinavisk språkfellesskap**

De nordiske landene samarbeider om å bevare den gjensidige forståeligheten. Man kan bruke sitt eget språk i offisielle nordiske sammenhenger. Men engelsk tar over som felles språk blant yngre generasjoner.`,
    },
    {
      id: 'norsk-vg2-7-3-def-1',
      type: 'definition',
      title: 'Skandinaviske språkforskjeller',
      content: `**Lydlige forskjeller:**

**Tonelag:** Norsk og svensk har to toner som skiller ord (bønder/bønner). Dansk har ikke.

**Stød:** Dansk har en "glottal lukkelyd" som norsk/svensk mangler.

**Bløte/harde konsonanter:** Dansk har bløte (b, d, g), norsk ofte harde (p, t, k).

**Ordforråd - eksempler:**
| Norsk | Svensk | Dansk | Betydning |
|-------|--------|-------|-----------|
| morsom | rolig | sjov | funny |
| hyggelig | trevlig | hyggelig | nice |
| ganske | ganska | ret | quite |
| aldri | aldrig | aldrig | never |

**Grammatikk:**
- Etterstilt artikkel i alle tre (huset, huset, huset)
- Norsk/nynorsk har tre kjønn, bokmål/dansk/svensk har to
- Ulik verbøyning i presens: norsk "snakker", svensk "pratar", dansk "taler"`,
    },
    {
      id: 'norsk-vg2-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Samme tekst på tre språk',
      problem: `Les teksten på norsk, svensk og dansk:

**Norsk (bokmål):**
"Det var en gang en mann som bodde i en liten hytte ved sjøen. Hver morgen gikk han ut for å fiske."

**Svensk:**
"Det var en gång en man som bodde i en liten stuga vid sjön. Varje morgon gick han ut för att fiska."

**Dansk:**
"Der var engang en mand som boede i en lille hytte ved søen. Hver morgen gik han ud for at fiske."

Analyser likhetene og forskjellene.`,
      solution: `**Analyse:**

**Fullstendig like ord:**
- en, som, i, han, for

**Nesten like ord (ortografisk variasjon):**
- mann/man/mand (norsk, svensk, dansk)
- bodde/bodde/boede
- liten/liten/lille
- morgen/morgon/morgen
- gikk/gick/gik
- fiske/fiska/fiske

**Helt ulike ord:**
- gang/gång/gang (samme opprinnelse, ulik staving)
- hytte/stuga/hytte (svensk har annet ord)
- sjøen/sjön/søen (ulik vokal)
- hver/varje/hver (svensk skiller seg ut)

**Grammatiske forskjeller:**
- Bestemt form: sjøen/sjön/søen (uttale ulik)
- "at fiske" (dansk) vs. "å fiske" (norsk) vs. "att fiska" (svensk)

**Hovedobservasjoner:**

1. *Norsk og dansk er nærmest i skrift* - bokmålet er fornorsket dansk

2. *Norsk og svensk er nærmest i uttale* - de deler tonelag og har lignende lydstruktur

3. *Grunnvokabularet er svært likt* - alle skandinaver kan følge teksten

4. *Småord og grammatiske markører varierer* - "varje" vs "hver", verbendelser, artikler

**Konklusjon:**
Skandinavene kan lese hverandres tekster med litt øvelse. Norsk har en mellomposisjon: skriftlig nær dansk, lydlig nær svensk.`,
    },
    {
      id: 'norsk-vg2-7-3-tip-1',
      type: 'tip',
      title: 'Tips for å forstå svensk og dansk',
      content: `**Slik forstår du de andre skandinaviske språkene bedre:**

**For dansk:**
- Vær forberedt på at uttalen er annerledes enn skriftbildet
- Lytt til tempoet - danske slår ofte lyder sammen
- Kjenn igjen ordforrådet fra bokmål
- Stødet høres ut som en liten pause midt i ordet

**For svensk:**
- Lytt til melodien - svensk har tydelig "syngende" toneleie
- "U" uttales ofte annerledes enn på norsk
- Mange ord er like, men med annen staving
- Endelsen "-er" blir ofte "-ar" (snakker -> pratar)

**Generelle tips:**
- Les skandinaviske aviser og bøker
- Se svenske og danske filmer/serier
- Besøk nabolandene og snakk med folk
- Ikke vær redd for å spørre om du ikke forstår
- Bruk ditt eget språk tydelig og sakte

**Falske venner - ord som ser like ut men betyr noe annet:**
- Norsk "rar" = svensk "rar" (=kjær), men dansk "rar" (=merkelig)
- "Rolig" betyr "morsom" på svensk, "calm" på norsk
- "Frokost" er tidlig på norsk/dansk, sen på svensk`,
    },
    {
      id: 'norsk-vg2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign de skandinaviske språkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har norsk, svensk og dansk til felles?',
            solution: 'Felles opphav fra norrønt, likt grunnvokabular, lignende grammatikk (etterstilt artikkel, SVO-rekkefølge, lignende verbsystem), gjensidig forståelighet.',
          },
          {
            label: 'b',
            task: 'Hva er de viktigste lydlige forskjellene mellom språkene?',
            solution: 'Dansk har stød og bløte konsonanter, norsk/svensk har tonelag. Dansk uttale er mer "lukket", svensk mer melodisk. Norsk har flest dialektvariasjoner.',
          },
          {
            label: 'c',
            task: 'Hvorfor forstår nordmenn ofte svensk og dansk bedre enn svensker og dansker forstår hverandre?',
            solution: 'Bokmål ligner dansk i skrift, norsk uttale ligner svensk. Nordmenn er vant til to målformer og stor dialektvariasjon, så de er mer fleksible.',
          },
        ],
        solution: 'De skandinaviske språkene er nært beslektet, men har utviklet ulike særtrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Arbeid med ordforråd.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn fem norske ord og oppgi tilsvarende på svensk og dansk. Kommenter likhetene/forskjellene.',
            solution: 'Eksempel: snakke-prata-tale, morsom-rolig-sjov, ganske-ganska-ret, hyggelig-trevlig-hyggelig, annerledes-annorlunda-anderledes. Noen er like, andre helt ulike.',
          },
          {
            label: 'b',
            task: 'Hva er "falske venner" mellom skandinaviske språk? Gi eksempler.',
            solution: 'Ord som ser like ut men betyr noe annet: "rolig" (no: calm, sv: morsom), "rar" (varierende betydning), "frokost" (ulikt tidspunkt).',
          },
        ],
        solution: 'Kunnskap om ordforrådsforskjeller gjør inter-skandinavisk kommunikasjon lettere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Språksituasjonen i Norge i dag
// ============================================================================

export const CHAPTER_NORSK_VG2_7_4: TextbookChapter = {
  id: 'norsk-vg2-7-4',
  courseId: 'norsk-vg2',
  chapterNumber: '7.4',
  title: 'Språksituasjonen i Norge i dag',
  description: 'Utforsk dagens norske språksituasjon med bokmål, nynorsk, dialekter og minoritetsspråk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for historisk bakgrunn for språksituasjonen i Norge',
    'reflektere over språklige varianter i Norge og holdninger til dem',
  ],
  content: [
    {
      id: 'norsk-vg2-7-4-intro',
      type: 'text',
      content: `## Norsk i dag - et språklig mangfold

Norge har en unik og kompleks språksituasjon som er resultat av vår historie. To skriftspråk, mange dialekter, og økende flerspråklighet preger dagens Norge. I dette kapittelet ser vi på status quo og aktuelle debatter.

**De to skriftspråkene**

*Bokmål:*
- Hovedmål for ca. 87% av elevene
- Dominerer i medier, næringsliv og storbyene
- Stor valgfrihet mellom konservative og radikale former
- Ligger nær dansk i struktur, men har norske lydtrekk

*Nynorsk:*
- Hovedmål for ca. 12% av elevene
- Sterkest på Vestlandet og i dalstrøkene
- Obligatorisk sidemål for alle
- Ligger nærmere dialektene og norrønt

*Statusforskjell:*
Selv om språkene er formelt likestilte, har bokmål i praksis høyere status i mange sammenhenger. Nynorskbrukere opplever ofte å måtte forsvare sitt språkvalg.

**Dialektene**

Norge har usedvanlig stor toleranse for dialektbruk i offentligheten:

- Dialekter brukes i radio, TV og politikk
- Ingen krav om standarduttale i de fleste yrker
- Dialektene er sterke identitetsmarkører
- Dialektbruk i skrift (sosiale medier) er vanlig

*Dialekttrussel?*
Noen frykter at dialektene svekkes av økt mobilitet og medier. Andre mener de bare endrer seg, ikke forsvinner.

**Flerspråklighet**

Norge er i dag et flerkulturelt samfunn:

- Ca. 20% av befolkningen har innvandrerbakgrunn
- Mange barn vokser opp med flere språk
- Samisk er urfolksspråk med offisiell status
- Kvensk, romani og norsk tegnspråk har særskilt vern

**Språkpolitiske debatter**

Flere debatter preger dagens språknorge:

*Sidemålsdebatt:*
- Skal sidemål være obligatorisk?
- Bør det være én karakter eller to?
- Hvordan sikre reell kompetanse i begge målformer?

*Nynorsk under press:*
- Synkende andel nynorskbrukere
- Medienes bokmålsdominans
- Målbyte ved overgang til videregående

*Engelsk i akademia og næringsliv:*
- Økende bruk av engelsk i høyere utdanning
- Frykten for "domenetap" - at norsk mister bruksområder
- Debatt om språkkrav i universiteter

*Samisk:*
- Revitalisering av samiske språk
- Samiske rettigheter og synlighet
- Utfordringer med små brukermiljøer

**Språkloven (2021)**

I 2021 fikk Norge en ny språklov som fastslår:

- Norsk er nasjonalspråk
- Bokmål og nynorsk er likeverdige
- Det offentlige har ansvar for å styrke nynorsk
- Samisk er urfolksspråk
- Norsk tegnspråk anerkjennes

Loven markerer et skifte fra "samnorskpolitikk" til "toskriftsspråkspolitikk" - begge språk skal bevares og styrkes, ikke smeltes sammen.

**Fremtiden**

Hvordan vil norsk se ut om 50 år? Noen tendenser:

- Økt globalisering og engelskpåvirkning
- Ny teknologi (AI, sosiale medier) endrer språkbruk
- Mulig konsolidering av dialektene i regiolekter
- Nynorskens skjebne er usikker
- Flerspråklighet blir normalen for mange`,
    },
    {
      id: 'norsk-vg2-7-4-def-1',
      type: 'definition',
      title: 'Språksituasjonen - begreper',
      content: `**Hovedmål:** Skriftspråket eleven har som sitt primære (bokmål eller nynorsk).

**Sidemål:** Det andre skriftspråket, som er obligatorisk å lære.

**Dialekt:** Lokal eller regional talemålsvarietet.

**Sosiolekt:** Språklig variasjon knyttet til sosiale grupper.

**Regiolekt:** Regional standardvarietet som erstatter lokale dialekter.

**Domenetap:** Når et språk mister bruksområder (f.eks. norsk i akademia).

**Språkskifte:** Når individer eller grupper bytter fra ett språk til et annet.

**Revitalisering:** Arbeid for å styrke truede språk.

**Språkloven (2021):** Norges lov om språk, som fastslår norsk som nasjonalspråk og likestiller bokmål og nynorsk.`,
    },
    {
      id: 'norsk-vg2-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Språkdebatt i dag',
      problem: `Les disse synspunktene fra dagens språkdebatt:

**For obligatorisk sidemål:**
"Alle norske elever bør kunne begge skriftspråkene. Det handler om demokrati og kulturforståelse."

**Mot obligatorisk sidemål:**
"Sidemål er bortkastet tid for de fleste. La elevene selv velge hva de vil lære."

Analyser argumentasjonen på begge sider.`,
      solution: `**Analyse:**

**For-argumentet:**

*Verdier:* Demokrati, kulturfellesskap, kunnskap

*Logikk:* Premiss: Begge språk er del av norsk kultur. Konklusjon: Alle bør kunne dem.

*Styrke:* Appellerer til fellesskapsverdier og likeverd mellom målformer.

*Svakhet:* Sier ikke noe om praktisk gjennomføring eller kostnad/nytte.

**Mot-argumentet:**

*Verdier:* Valgfrihet, effektivitet, individuell nytte

*Logikk:* Premiss: Mange har ikke bruk for sidemål. Konklusjon: Det bør være frivillig.

*Styrke:* Appellerer til individuell frihet og praktiske hensyn.

*Svakhet:* Overser fellesskapsdimensjonen og risikoen for at nynorsk marginaliseres ytterligere.

**Hva debatten handler om:**

Kjernen er konflikt mellom:
- Kollektive vs. individuelle verdier
- Kulturell arv vs. praktisk nytte
- Likestilling mellom målformene vs. markedets logikk

**Viktige spørsmål:**
- Er sidemålsopplæringen effektiv nok?
- Finnes det alternativer til tvang?
- Hva skjer med nynorsk om sidemål fjernes?
- Hvordan balansere individets og fellesskapets interesser?`,
    },
    {
      id: 'norsk-vg2-7-4-tip-1',
      type: 'tip',
      title: 'Tips for å forstå språkpolitiske debatter',
      content: `**Slik analyserer du språkdebatter:**

**1. Identifiser verdiene:**
- Hva er viktigst for denne siden? Frihet? Likhet? Tradisjon? Effektivitet?

**2. Se på argumentstrukturen:**
- Hva er premissene?
- Følger konklusjonen logisk?
- Er det skjulte antakelser?

**3. Vurder konsekvensene:**
- Hva skjer hvis dette synet vinner frem?
- Hvem vinner, hvem taper?

**4. Se etter følelser og retorikk:**
- Brukes ladede ord?
- Appelleres det til frykt eller nostalgi?

**5. Plasser i kontekst:**
- Hvem sier dette?
- Hvilke interesser har de?
- Hvilken tradisjon tilhører de?

**6. Finn egne standpunkter:**
- Hva mener du selv?
- Kan du begrunne det?
- Er du åpen for motargumenter?`,
    },
    {
      id: 'norsk-vg2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv dagens norske språksituasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan fordeler bruken av bokmål og nynorsk seg i dag?',
            solution: 'Ca. 87% har bokmål som hovedmål, ca. 12% nynorsk. Bokmål dominerer i medier og storbyene, nynorsk sterkest på Vestlandet og i dalstrøkene.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner den norske dialektsituasjonen?',
            solution: 'Norge har stor dialekttoleranse. Dialekter brukes i offentligheten, medier og politikk. Det er ingen krav om standarduttale i de fleste yrker.',
          },
          {
            label: 'c',
            task: 'Hvilke andre språk har offisiell status i Norge?',
            solution: 'Samisk er urfolksspråk med offisiell status. Kvensk, romani og norsk tegnspråk har særskilt vern. Norge har mange innvandrerspråk.',
          },
        ],
        solution: 'Norge har en kompleks språksituasjon med to skriftspråk, mange dialekter og økende flerspråklighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft språkpolitiske spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er argumentene for og mot obligatorisk sidemål i skolen?',
            solution: 'For: Kulturforståelse, demokrati, likestilling. Mot: Tvang, tidsbruk, manglende praktisk nytte for mange.',
          },
          {
            label: 'b',
            task: 'Hva menes med "domenetap", og hvorfor er det bekymringsfullt?',
            solution: 'Domenetap = at et språk mister bruksområder (f.eks. til engelsk). Bekymringsfullt fordi det kan svekke språkets status og føre til gradvis utfasing.',
          },
          {
            label: 'c',
            task: 'Ta stilling: Bør sidemål være obligatorisk? Begrunn.',
            solution: 'Egenvurdering. Svar bør inneholde: klart standpunkt, begrunnelse, vurdering av motargumenter.',
          },
        ],
        solution: 'Språkpolitikk handler om verdivalg og balanse mellom ulike hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1: Retorikkens grunnbegreper
// ============================================================================

export const CHAPTER_NORSK_VG2_8_1: TextbookChapter = {
  id: 'norsk-vg2-8-1',
  courseId: 'norsk-vg2',
  chapterNumber: '8.1',
  title: 'Retorikkens grunnbegreper',
  description: 'Lær om retorikkens historie og grunnleggende begreper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'skrive fagartikler som drøfter tekster i kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-8-1-intro',
      type: 'text',
      content: `## Retorikk - overtalelsens kunst

Retorikk er kunsten å tale og skrive overbevisende. Faget ble grunnlagt i antikkens Hellas og har siden vært sentralt i utdanning og offentlig liv. I dag er retorisk analyse et viktig verktøy for å forstå hvordan tekster og taler påvirker oss.

**Retorikkens historie**

Retorikken oppsto i Hellas på 400-tallet f.Kr. I demokratiet trengte borgerne å kunne tale i folkeforsamlingen og i retten. Sofistene underviste i talekunst, og filosofer som Aristoteles systematiserte faget.

I Romerriket videreførte Cicero og Quintilian tradisjonen. Retorikk var en del av den klassiske utdannelsen frem til moderne tid.

**Retorikkens tre taletyper (genera)**

Aristoteles delte talene inn i tre typer etter formål:

*Juridisk tale (genus judiciale):* Taler i retten - anklage eller forsvar. Handler om fortiden.

*Politisk tale (genus deliberativum):* Taler i folkeforsamlingen - rådgiving om fremtiden.

*Festtale (genus demonstrativum):* Taler ved seremonier - ros eller klander. Handler om nåtiden.

**De fem arbeidsfasene**

Arbeidet med en tale ble delt i fem faser:
1. Inventio - finne argumenter
2. Dispositio - ordne stoffet
3. Elocutio - formulere språklig
4. Memoria - huske talen
5. Actio - fremføre talen`,
    },
    {
      id: 'norsk-vg2-8-1-def-1',
      type: 'definition',
      title: 'Retoriske grunnbegreper',
      content: `**Retorikk:** Kunsten å tale og skrive overbevisende.

**Retor:** Den som taler eller skriver (avsender).

**Retorisk situasjon:** Konteksten for kommunikasjonen - hvem, hva, hvorfor, når, hvor.

**Kairos:** Det rette øyeblikket - timing og tilpasning til situasjonen.

**Aptum:** Det passende - tilpasning til publikum og situasjon.

**De fem arbeidsfasene:**
1. Inventio - finne stoff
2. Dispositio - ordne stoffet
3. Elocutio - formulere
4. Memoria - huske
5. Actio - fremføre

**De tre talesjangrer:**
- Juridisk tale (rett)
- Politisk tale (folkeforsamling)
- Festtale (seremonier)`,
    },
    {
      id: 'norsk-vg2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar retorikkens grunnbegreper.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er retorikk, og hvor kommer faget fra?',
            solution: 'Retorikk er kunsten å tale og skrive overbevisende. Faget oppsto i antikkens Hellas.',
          },
          {
            label: 'b',
            task: 'Forklar de fem arbeidsfasene.',
            solution: 'Inventio (finne stoff), dispositio (ordne), elocutio (formulere), memoria (huske), actio (fremføre).',
          },
        ],
        solution: 'Retorikken gir oss verktøy til å analysere og lage overbevisende tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Etos, logos, patos
// ============================================================================

export const CHAPTER_NORSK_VG2_8_2: TextbookChapter = {
  id: 'norsk-vg2-8-2',
  courseId: 'norsk-vg2',
  chapterNumber: '8.2',
  title: 'Retoriske appellformer - etos, logos, patos',
  description: 'Lær om de tre appellformene og hvordan de brukes for å overbevise.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  content: [
    {
      id: 'norsk-vg2-8-2-intro',
      type: 'text',
      content: `## De tre appellformene

Aristoteles identifiserte tre måter å overbevise på: etos (troverdighet), logos (fornuft) og patos (følelser). De fleste overbevisende tekster bruker en kombinasjon av alle tre.

**Etos - avsenderens troverdighet**

Etos handler om avsenderens karakter og troverdighet. Vi lar oss lettere overbevise av noen vi stoler på.

Etos bygges gjennom:
- Ekspertise og kunnskap
- Ærlighet og integritet
- Velvilje mot publikum

**Logos - fornuftsargumenter**

Logos handler om selve argumentasjonen. Overbevisning gjennom logikk, fakta og resonnementer.

Logos-argumenter:
- Fakta og statistikk
- Eksempler og bevis
- Logiske slutninger

**Patos - følelsesappell**

Patos handler om å vekke følelser hos publikum. Følelser kan motivere til handling.

Patos-virkemidler:
- Sterke bilder og eksempler
- Personlige fortellinger
- Appell til verdier`,
    },
    {
      id: 'norsk-vg2-8-2-def-1',
      type: 'definition',
      title: 'Appellformene',
      content: `**Etos:** Appell til avsenderens troverdighet og karakter.
- Ekspertise
- Ærlighet
- Velvilje

**Logos:** Appell til fornuft og logikk.
- Fakta
- Statistikk
- Logiske slutninger

**Patos:** Appell til følelser.
- Sterke bilder
- Personlige historier
- Verdier`,
    },
    {
      id: 'norsk-vg2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser bruken av appellformene.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på bruk av etos i en tekst.',
            solution: 'Når en lege uttaler seg om helse, eller når noen refererer til sin erfaring og utdanning.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på bruk av patos.',
            solution: 'Personlige historier om lidelse, bilder av barn, appell til nasjonale verdier.',
          },
        ],
        solution: 'Effektiv overbevisning bruker gjerne alle tre appellformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Analyse av sakprosatekster
// ============================================================================

export const CHAPTER_NORSK_VG2_8_3: TextbookChapter = {
  id: 'norsk-vg2-8-3',
  courseId: 'norsk-vg2',
  chapterNumber: '8.3',
  title: 'Analyse av sakprosatekster',
  description: 'Lær systematisk analyse av sakprosa med retoriske og sjangermessige begreper.',
  estimatedMinutes: 65,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
    'skrive fagartikler som drøfter tekster i kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-8-3-intro',
      type: 'text',
      content: `## Sakprosaanalyse - et verktøy for kritisk lesing

Å analysere sakprosa er å undersøke hvordan tekster er bygget opp og hvordan de forsøker å påvirke oss. I en tid med informasjonsoverflod er dette en nøkkelkompetanse for alle borgere. God sakprosaanalyse kombinerer retorisk, språklig og kontekstuell forståelse.

**Hva er sakprosaanalyse?**

Sakprosaanalyse handler om å undersøke:

1. *Hva teksten sier* - innholdet og påstandene
2. *Hvordan den sier det* - virkemidler og stil
3. *Hvorfor den sier det slik* - formål og kontekst
4. *Hvilken virkning det har* - hvordan leseren påvirkes

**Den retoriske situasjonen**

Enhver sakprosatekst oppstår i en retorisk situasjon. For å forstå teksten må vi kartlegge:

*Avsender (retor):*
- Hvem har skrevet teksten?
- Hvilken bakgrunn og interesser har de?
- Hvilken rolle inntar de i teksten?

*Mottaker (publikum):*
- Hvem er teksten rettet mot?
- Hva vet/mener mottakeren fra før?
- Hvilke behov og forventninger har de?

*Saken (emnet):*
- Hva handler teksten om?
- Hvordan avgrenses emnet?
- Hvilke aspekter vektlegges?

*Situasjonen (kairos):*
- Når og hvor ble teksten skrevet?
- Hva var anledningen?
- Hvilken debatt er den del av?

*Formålet:*
- Hva vil avsenderen oppnå?
- Informere, overbevise, underholde, oppfordre?

**Analysens hovedelementer**

En fullstendig sakprosaanalyse bør inneholde:

*1. Innholdsanalyse:*
- Hva er hovedbudskapet (tesen)?
- Hvilke argumenter brukes?
- Hvordan er stoffet strukturert?

*2. Retorisk analyse:*
- Hvordan brukes etos, logos, patos?
- Hvilke retoriske virkemidler finnes?
- Hvordan bygges argumentasjonen opp?

*3. Språklig analyse:*
- Hvilken stil har teksten (formell/uformell)?
- Hvordan er ordvalget?
- Hvilke bilder og metaforer brukes?

*4. Kontekstuell analyse:*
- Hvordan henger teksten sammen med sin samtid?
- Hvilken sjanger tilhører den?
- Hvordan forholder den seg til andre tekster?

*5. Vurdering:*
- Er argumentasjonen overbevisende?
- Hvilke styrker og svakheter har teksten?
- Er teksten relevant i dag?

**Systematisk fremgangsmåte**

Slik kan du gå frem når du analyserer sakprosa:

1. *Første lesing:* Les teksten raskt for å få et helhetsinntrykk
2. *Kartlegging:* Finn avsender, mottaker, formål, kontekst
3. *Strukturanalyse:* Hvordan er teksten bygget opp?
4. *Detaljanalyse:* Gå gjennom teksten avsnitt for avsnitt
5. *Retorisk analyse:* Identifiser virkemidler og appellformer
6. *Språkanalyse:* Se på ordvalg, stil, bilder
7. *Syntese:* Samle funnene til en helhetlig tolkning
8. *Vurdering:* Hva fungerer, hva fungerer ikke?

**Fallgruver**

Unngå disse feilene i sakprosaanalyse:

- *Parafrase:* Ikke bare gjenfortell innholdet - analyser det
- *Begrepsoppramsing:* Ikke list opp virkemidler - forklar hvordan de virker
- *Ensidighet:* Se på hele teksten, ikke bare enkeltdeler
- *Synsing:* Begrunn påstandene dine med teksteksempler
- *Ureflektert kritikk:* Vær rettferdig, ikke bare negativ`,
    },
    {
      id: 'norsk-vg2-8-3-def-1',
      type: 'definition',
      title: 'Sakprosaanalysens begreper',
      content: `**Den retoriske situasjonen:**
- *Avsender:* Den som skriver/taler
- *Mottaker:* Den teksten er rettet mot
- *Saken:* Emnet for teksten
- *Kairos:* Tid, sted og anledning
- *Formål:* Hva avsenderen vil oppnå

**Argumentasjonstyper:**
- *Faktaargument:* Basert på etterprøvbare fakta
- *Erfaringsargument:* Basert på egne eller andres erfaring
- *Etisk argument:* Basert på verdier og moral
- *Autoritetsargument:* Basert på eksperter eller respekterte kilder

**Teksttyper i sakprosa:**
- *Informerende:* Gir kunnskap
- *Argumenterende:* Vil overbevise
- *Utredende:* Drøfter fra flere sider
- *Appellerende:* Oppfordrer til handling`,
    },
    {
      id: 'norsk-vg2-8-3-def-2',
      type: 'definition',
      title: 'Sakprosasjangre',
      content: `**Kronikk:** Lengre, argumenterende tekst i avis. Personlig vinkling på samfunnsspørsmål.

**Leder:** Avisens offisielle standpunkt til en sak. Unsigned, representerer redaksjonen.

**Debattinnlegg:** Kortere innlegg i offentlig debatt. Klar tese og argumentasjon.

**Essay:** Personlig, resonerende tekst. Utforsker mer enn den konkluderer.

**Artikkel:** Informerende, saklig fremstilling av et emne.

**Tale:** Muntlig sjanger, tilpasset situasjon og publikum.

**Kåseri:** Lett, underholdende tekst med humoristiske innslag.

**Fagartikkel:** Akademisk tekst med kilder og strukturert argumentasjon.`,
    },
    {
      id: 'norsk-vg2-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en kronikk',
      problem: `Analyser denne fiktive kronikken:

**"Mobilen stjeler barndommen"**
av Kari Lærer, rektor

Hver dag ser jeg elever som stirrer ned i skjermene sine i stedet for å leke sammen. Som pedagog gjennom 30 år er jeg dypt bekymret.

Forskning fra NTNU viser at barn som bruker mer enn to timer daglig på skjerm, har dårligere sosiale ferdigheter. Vi vet også at søvnkvaliteten synker.

Men det verste er det vi ikke kan måle: Øyeblikkene som går tapt. Samtalene som aldri skjer. Vennskapene som ikke knyttes.

Det er på tide at foreldre tar ansvar. Legg bort mobilen under middagen. Sett grenser. Barndommen varer så kort.

Analyser tekstens retoriske situasjon og virkemidler.`,
      solution: `**Analyse av "Mobilen stjeler barndommen":**

**Retorisk situasjon:**

*Avsender:* Kari Lærer, rektor
- Etos: Lang erfaring (30 år), autoritetsposisjon (rektor), fagperson (pedagog)

*Mottaker:* Foreldre til skolebarn
- Antas å være bekymret for barna sine
- Har makt til å sette grenser

*Saken:* Barns skjermbruk
- Avgrenset til mobilbruk i fritiden
- Fokus på negative konsekvenser

*Kairos:* Aktuell debatt om barn og skjerm
- Skrevet i en tid med økende bekymring

*Formål:* Få foreldre til å begrense barns skjermbruk
- Argumenterende og appellerende

**Argumentasjon:**

*Logos:*
- Forskning fra NTNU (autoritetsargument + faktaargument)
- Statistikk om timer og sosiale ferdigheter
- Logisk sammenheng: skjerm -> dårlig søvn -> dårligere helse

*Etos:*
- "Som pedagog gjennom 30 år" - erfaring
- "Hver dag ser jeg" - førstehånds observasjon
- Rektor-tittelen - autoritet

*Patos:*
- "stjeler barndommen" - dramatisk, følelsesladet
- "det vi ikke kan måle" - appellerer til det usynlige, verdifulle
- "Barndommen varer så kort" - sentimentalt, minner om forgjengelighet

**Virkemidler:**

*Metafor:* "stjeler" - mobilen som tyv
*Kontrast:* Skjermer vs. lek, alene vs. sammen
*Trikolon:* "Øyeblikkene... Samtalene... Vennskapene"
*Direkte oppfordring:* "Legg bort mobilen", "Sett grenser"

**Struktur:**

1. Personlig observasjon (etos)
2. Forskning (logos)
3. Følelsesmessig appell (patos)
4. Konkret oppfordring (handling)

**Vurdering:**

*Styrker:*
- Tydelig budskap
- Kombinerer appellformer effektivt
- Konkrete råd

*Svakheter:*
- Ensidig fremstilling (ingen positive sider ved teknologi)
- "Vi vet også" uten kilde
- Generalisering ("hver dag ser jeg")`,
    },
    {
      id: 'norsk-vg2-8-3-tip-1',
      type: 'tip',
      title: 'Tips for sakprosaanalyse',
      content: `**Sjekkliste for analyse:**

**1. Før du begynner:**
- Les teksten flere ganger
- Noter førsteinntrykket
- Finn ut hvem som har skrevet og når

**2. Retorisk situasjon:**
- Hvem, til hvem, om hva, hvorfor, når?

**3. Innhold:**
- Hva er tesen/hovedbudskapet?
- Hvilke argumenter brukes?
- Er det motargumenter?

**4. Virkemidler:**
- Etos, logos, patos - finn eksempler!
- Språklige virkemidler?
- Struktur og oppbygning?

**5. Vurdering:**
- Er argumentasjonen god?
- Hva mangler?
- Fungerer teksten for formålet?

**Formuleringer du kan bruke:**
- "Forfatteren bygger etos ved å..."
- "Her appellerer teksten til patos gjennom..."
- "Logosappellen kommer til uttrykk i..."
- "Metaforen 'X' er effektiv fordi..."
- "Strukturen støtter argumentasjonen ved..."`,
    },
    {
      id: 'norsk-vg2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser en kronikk eller debattinnlegg.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en kronikk eller debattinnlegg i en avis. Beskriv den retoriske situasjonen.',
            solution: 'Svar bør inneholde: avsender (hvem, bakgrunn), mottaker (hvem teksten er rettet mot), saken (hva det handler om), kairos (når/hvor), formål (hva avsenderen vil oppnå).',
          },
          {
            label: 'b',
            task: 'Identifiser bruken av etos, logos og patos i teksten.',
            solution: 'Svar bør gi konkrete eksempler fra teksten på hver appellform og forklare hvordan de virker.',
          },
          {
            label: 'c',
            task: 'Vurder: Er argumentasjonen overbevisende? Begrunn.',
            solution: 'Svar bør vurdere både styrker og svakheter, med referanse til konkrete eksempler fra teksten.',
          },
        ],
        solution: 'God sakprosaanalyse krever systematisk gjennomgang og begrunnet vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign to tekster om samme emne.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn to tekster som argumenterer for ulike syn på samme sak. Beskriv hvordan de bruker ulike virkemidler.',
            solution: 'Svar bør vise forskjeller i appellformer, språk, struktur og argumentasjon mellom de to tekstene.',
          },
          {
            label: 'b',
            task: 'Hvilken tekst er mest overbevisende for deg? Begrunn med analyse.',
            solution: 'Svar bør forklare hva som gjør teksten overbevisende, med referanse til retoriske begreper.',
          },
        ],
        solution: 'Å sammenligne tekster gir god trening i kritisk analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Retoriske virkemidler i praksis
// ============================================================================

export const CHAPTER_NORSK_VG2_8_4: TextbookChapter = {
  id: 'norsk-vg2-8-4',
  courseId: 'norsk-vg2',
  chapterNumber: '8.4',
  title: 'Retoriske virkemidler i praksis',
  description: 'Lær å identifisere og bruke retoriske virkemidler i egne og andres tekster.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere over sakprosateksters formål og retoriske situasjon',
    'skrive tekster som kombinerer informasjon, drøfting og argumentasjon',
  ],
  content: [
    {
      id: 'norsk-vg2-8-4-intro',
      type: 'text',
      content: `## Retoriske virkemidler - verktøykassen for overbevisning

Retoriske virkemidler er teknikker som gjør kommunikasjon mer effektiv. Å kjenne dem gjør deg både til en bedre skribent og en mer kritisk leser. I dette kapittelet går vi gjennom de viktigste virkemidlene med eksempler fra ulike teksttyper.

**Hvorfor bruke retoriske virkemidler?**

- Gjør budskapet tydeligere
- Engasjerer leseren/lytteren
- Gjør argumentene mer minneverdige
- Skaper følelsesmessig resonans
- Styrker forfatterens troverdighet

**Kategorier av virkemidler**

Vi kan dele retoriske virkemidler i hovedkategorier:

1. *Argumentasjonsmønstre* - hvordan vi bygger opp resonnementer
2. *Stilistiske figurer* - språklige utforminger
3. *Troper* - overført betydning (metaforer etc.)
4. *Strukturelle virkemidler* - oppbygning og rekkefølge

---

## De viktigste virkemidlene

**Metafor**

Sammenligning uten "som" - noe er noe annet.

*Eksempel:* "Internett er en jungel av informasjon."
*Effekt:* Gjør det abstrakte konkret. Aktiverer assosiasjoner.

**Simile**

Sammenligning med "som" eller "liksom".

*Eksempel:* "Hun talte som en løve."
*Effekt:* Tydeliggjør egenskaper gjennom sammenligning.

**Besjeling (personifikasjon)**

Døde ting eller abstrakte begrep får menneskelige egenskaper.

*Eksempel:* "Naturen gråter over klimaødeleggelsene."
*Effekt:* Skaper emosjonell tilknytning.

**Kontrast (antitese)**

Sette motsetninger opp mot hverandre.

*Eksempel:* "Én liten feil kan gi stor konsekvens."
*Effekt:* Skaper spenning og tydeliggjør poenger.

**Trikolon**

Tre elementer i rekke.

*Eksempel:* "Frihet, likhet, brorskap" / "Vi kom, vi så, vi vant."
*Effekt:* Rytmisk, minneverdig, har en følelse av helhet.

**Anafor**

Gjentakelse av ord/frase i begynnelsen av setninger.

*Eksempel:* "Vi må handle. Vi må handle nå. Vi må handle sammen."
*Effekt:* Bygger intensitet, hamrer inn budskapet.

**Retorisk spørsmål**

Spørsmål som ikke forventer svar.

*Eksempel:* "Kan vi virkelig akseptere dette?"
*Effekt:* Aktiverer leseren, antyder svar.

**Ironi**

Si det motsatte av det man mener.

*Eksempel:* "Strålende timing!" (når noen kommer for sent)
*Effekt:* Kritiserer indirekte, skaper distanse.

**Overdrivelse (hyperbel)**

Forstørre for effekt.

*Eksempel:* "Jeg har sagt det tusen ganger."
*Effekt:* Understreker poeng, kan være humoristisk.

**Underdrivelse (litotes)**

Forminske for effekt.

*Eksempel:* "Det var ikke akkurat billig." (om noe dyrt)
*Effekt:* Diskret fremheving, ofte ironisk.

**Allitterasjon**

Bokstavrim - gjentakelse av begynnelseslyd.

*Eksempel:* "Folk flest føler seg fremmedgjort."
*Effekt:* Musikalitet, gjør teksten minneverdig.

**Eufemisme**

Mildere uttrykk for noe ubehagelig.

*Eksempel:* "Han gikk bort" (døde), "arbeidsledig" (uten jobb)
*Effekt:* Gjør det vanskelige lettere å snakke om.

**Dysefemisme**

Sterkere, mer negativt uttrykk enn nødvendig.

*Eksempel:* "Skattesluket" (om avgifter)
*Effekt:* Skaper negative assosiasjoner.

---

**Virkemidler i kontekst**

Virkemidlene fungerer ulikt i ulike sjangre:

*Politisk tale:* Mye trikolon, anafor, retoriske spørsmål - bygger intensitet
*Kronikk:* Ofte metaforer, kontraster - gjør abstrakte poenger konkrete
*Reklame:* Hyperbel, allitterasjon, eufemisme - selger og forskjønner
*Vitenskapelig tekst:* Få figurer, fokus på klarhet - logosappell

**Kritisk bruk**

Virkemidler kan misbrukes. Vær obs på:
- Overdreven patos som skjuler manglende argumenter
- Ladede ord som manipulerer
- Falske motsetninger (stråmannsargumenter)
- Glatte formuleringer uten substans`,
    },
    {
      id: 'norsk-vg2-8-4-def-1',
      type: 'definition',
      title: 'Retoriske virkemidler - oversikt',
      content: `**Troper (overført betydning):**
- *Metafor:* X er Y
- *Simile:* X er som Y
- *Besjeling:* Dødt får liv
- *Metonymi:* Del for helhet ("kronen" = kongen)
- *Synekdoke:* Helhet for del ("Norge vant" = landslaget)

**Stilistiske figurer:**
- *Trikolon:* Tre elementer
- *Anafor:* Gjentakelse i begynnelsen
- *Allitterasjon:* Bokstavrim
- *Kontrast:* Motsetninger
- *Retorisk spørsmål:* Spørsmål uten svar

**Tonemarkører:**
- *Ironi:* Si motsatt
- *Hyperbel:* Overdrive
- *Litotes:* Underdrive
- *Eufemisme:* Mildere ord
- *Dysefemisme:* Hardere ord`,
    },
    {
      id: 'norsk-vg2-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Virkemidler i tale',
      problem: `Les dette utdraget fra en fiktiv tale:

"Venner, vi står ved et veiskille. Bak oss ligger fortiden - full av feil, men også full av lærdom. Foran oss venter fremtiden - usikker, men full av muligheter.

Spørsmålet er: Vil vi gripe disse mulighetene? Vil vi ta ansvar? Vil vi handle?

Jeg tror vi vil. Jeg tror vi kan. Jeg vet vi må.

For vi skylder ikke bare oss selv å prøve. Vi skylder barna våre. Vi skylder barnebarna våre. Vi skylder alle som kommer etter."

Identifiser virkemidlene og analyser effekten.`,
      solution: `**Analyse av taletutdraget:**

**Virkemidler:**

*1. Tiltaleform:*
"Venner" - skaper nærhet og fellesskap (etos)

*2. Metafor:*
"veiskille" - valget fremstilles som en konkret vei
*Effekt:* Gjør det abstrakte (politiske valg) håndgripelig

*3. Kontrast:*
"Bak oss... Foran oss" / "fortiden... fremtiden"
*Effekt:* Skaper dramatikk, fremhever øyeblikkets viktighet

*4. Trikolon 1:*
"Vil vi gripe... Vil vi ta ansvar... Vil vi handle?"
*Effekt:* Bygger intensitet, hamrer inn spørsmålene

*5. Retoriske spørsmål:*
De tre spørsmålene forventer svar (ja!)
*Effekt:* Aktiverer publikum, antyder rett svar

*6. Anafor 1:*
"Jeg tror vi vil. Jeg tror vi kan. Jeg vet vi må."
*Effekt:* Gradvis stigning fra tro til visshet til plikt

*7. Trikolon 2:*
"oss selv... barna våre... barnebarna våre"
*Effekt:* Utvider ansvaret til kommende generasjoner (patos)

*8. Anafor 2:*
"Vi skylder... Vi skylder... Vi skylder"
*Effekt:* Understreker moralsk forpliktelse

**Helhetlig effekt:**

Talen bygger fra refleksjon ("veiskille") til spørsmål til overbevisning til moralsk appell. Virkemidlene støtter denne oppbyggingen:

- Kontraster skaper drama
- Retoriske spørsmål engasjerer
- Trikolon og anafor skaper rytme og intensitet
- Den moralske appellen til fremtidige generasjoner avslutter med sterk patos

Resultatet er en tale som er lett å følge, lett å huske, og som appellerer til både fornuft og følelser.`,
    },
    {
      id: 'norsk-vg2-8-4-tip-1',
      type: 'tip',
      title: 'Tips for å bruke virkemidler',
      content: `**Slik bruker du virkemidler effektivt:**

**1. Ikke overdriv:**
Noen virkemidler er nok. For mange virker kunstig.

**2. Match sjangeren:**
Trikolon passer i taler, kanskje ikke i fagartikler.

**3. La formen støtte innholdet:**
Virkemidlene skal fremheve budskapet, ikke distrahere.

**4. Øv deg:**
Prøv å skrive med bevisst bruk av virkemidler.

**5. Les gode eksempler:**
Studer taler og tekster som fungerer.

**Slik identifiserer du virkemidler:**

**Spør deg selv:**
- Er det gjentakelser? -> Anafor, trikolon
- Er det sammenligninger? -> Metafor, simile
- Er det motsetninger? -> Kontrast
- Er det spørsmål? -> Retorisk spørsmål
- Er det overdrivelse? -> Hyperbel
- Er det bokstavrim? -> Allitterasjon

**Så analyser effekten:**
- Hva gjør dette med budskapet?
- Hva gjør det med leseren?
- Hvorfor valgte forfatteren dette?`,
    },
    {
      id: 'norsk-vg2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn tre virkemidler i en avisartikkel eller kronikk. Beskriv virkningen.',
            solution: 'Svar bør navngi virkemidlene, sitere eksemplet og forklare effekten (hva det gjør med leseren/budskapet).',
          },
          {
            label: 'b',
            task: 'Finn en reklamertekst og analyser hvilke virkemidler den bruker.',
            solution: 'Reklame bruker ofte: hyperbel, allitterasjon, eufemisme, metaforer om lykke/suksess. Svar bør gi konkrete eksempler.',
          },
        ],
        solution: 'Å identifisere virkemidler er første steg mot kritisk lesing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv med bevisst bruk av virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en kort appell (100-150 ord) om et tema du bryr deg om. Bruk minst tre ulike virkemidler.',
            solution: 'Svar bør inneholde tydelig bruk av navngitte virkemidler (f.eks. trikolon, retorisk spørsmål, kontrast) og ha et klart budskap.',
          },
          {
            label: 'b',
            task: 'Marker hvilke virkemidler du brukte og forklar hvorfor du valgte dem.',
            solution: 'Svar bør vise bevisst refleksjon over valg av virkemidler og deres tiltenkte effekt.',
          },
        ],
        solution: 'Å skrive med bevisste valg gjør deg til en bedre kommunikator.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Kritisk analyse av virkemiddelbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på misbruk av retoriske virkemidler (f.eks. i politikk, reklame). Forklar hva som er problematisk.',
            solution: 'Eksempler: Overdreven patos som skjuler svake argumenter, falske motsetninger, manipulerende ordvalg. Svar bør gi konkret eksempel og analyse.',
          },
          {
            label: 'b',
            task: 'Hvordan kan vi som lesere beskytte oss mot manipulerende retorikk?',
            solution: 'Stille kritiske spørsmål, sjekke fakta, se etter det som utelates, være bevisst på egne følelser, sammenligne kilder.',
          },
        ],
        solution: 'Kritisk retorikkbevissthet er viktig i en demokratisk mediekultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.1: Fagartikkelens oppbygging
// ============================================================================

export const CHAPTER_NORSK_VG2_9_1: TextbookChapter = {
  id: 'norsk-vg2-9-1',
  courseId: 'norsk-vg2',
  chapterNumber: '9.1',
  title: 'Fagartikkelens oppbygging',
  description: 'Lær å skrive fagartikler med god struktur og argumentasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler som drøfter tekster i kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
  ],
  content: [
    {
      id: 'norsk-vg2-9-1-intro',
      type: 'text',
      content: `## Fagartikkelen - akademisk skriving

Fagartikkelen er en sentral sjanger i videregående skole og høyere utdanning. Den kjennetegnes av saklig fremstilling, god struktur og bruk av kilder.

**Struktur**

*Innledning:*
- Presenterer tema og problemstilling
- Vekker interesse
- Avgrenser hva du vil ta opp

*Hoveddel:*
- Utdyper temaet systematisk
- Presenterer argumenter og motargumenter
- Bruker kilder og eksempler

*Avslutning:*
- Oppsummerer hovedpunkter
- Besvarer problemstillingen
- Kan peke fremover

**Krav til fagartikkelen**

- Saklig og nøytral tone
- Kildehenvisninger
- Presis språkbruk
- Logisk oppbygning`,
    },
    {
      id: 'norsk-vg2-9-1-def-1',
      type: 'definition',
      title: 'Fagartikkelens kjennetegn',
      content: `**Fagartikkel:** Saklig, argumenterende tekst om et faglig emne.

**Problemstilling:** Spørsmålet teksten skal besvare.

**Drøfting:** Å belyse en sak fra flere sider, veie argumenter.

**Kildehenvisning:** Referanse til hvor informasjonen kommer fra.

**Struktur:**
1. Innledning (tema, problemstilling)
2. Hoveddel (argumentasjon, drøfting)
3. Avslutning (konklusjon)`,
    },
    {
      id: 'norsk-vg2-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv en disposisjon for en fagartikkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema fra litteraturhistorien og formuler en problemstilling.',
            solution: 'Eksempel: "Hvordan gjenspeiler Wergelands diktning romantikkens ideer?"',
          },
          {
            label: 'b',
            task: 'Lag en disposisjon med innledning, hoveddel og avslutning.',
            solution: 'Innledning: Tema og problemstilling. Hoveddel: Romantikkens ideer, Wergelands dikt, analyse, drøfting. Avslutning: Konklusjon.',
          },
        ],
        solution: 'God planlegging gir bedre fagartikler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: Kildebruk og referanser
// ============================================================================

export const CHAPTER_NORSK_VG2_9_2: TextbookChapter = {
  id: 'norsk-vg2-9-2',
  courseId: 'norsk-vg2',
  chapterNumber: '9.2',
  title: 'Kildebruk og referanser',
  description: 'Lær god kildebruk, referansesystemer og hvordan du unngår plagiat.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler som drøfter tekster i kontekst',
    'bruke kilder og referanser på en etterrettelig måte',
  ],
  content: [
    {
      id: 'norsk-vg2-9-2-intro',
      type: 'text',
      content: `## Kildebruk - akademisk redelighet

God kildebruk er grunnleggende i all akademisk skriving. Det handler om å være ærlig om hvor kunnskapen din kommer fra, å gi anerkjennelse til andre, og å la leseren kunne sjekke påstandene dine. I dette kapittelet lærer du hvorfor og hvordan.

**Hvorfor bruke kilder?**

*Troverdighet:*
Kilder styrker argumentasjonen. Når du viser til forskning, eksperter eller primærkilder, blir påstandene dine mer troverdige.

*Etterprøvbarhet:*
Leseren skal kunne finne frem til kildene dine og vurdere dem selv. Dette er kjernen i akademisk metode.

*Redelighet:*
Å oppgi kilder er ærlig - du viser at du ikke later som om alle tanker er dine egne.

*Ydmykhet:*
Kilder viser at du bygger på andres arbeid. Ingen skaper kunnskap helt alene.

**Hva må refereres?**

Du må oppgi kilde når du:

- Siterer direkte (bruker eksakte ord)
- Parafraserer (gjengir innhold med egne ord)
- Henviser til spesifikke fakta, tall eller funn
- Bruker andres teorier, modeller eller ideer

Du trenger ikke referere:

- Allmennkunnskap (Norge ligger i Europa)
- Egne erfaringer og meninger (som du markerer som det)
- Innlysende fakta (vann koker ved 100 grader)

**Hvordan referere?**

Det finnes flere referansesystemer. De vanligste er:

*APA (American Psychological Association):*
- Brukes ofte i samfunnsvitenskap og psykologi
- Parenteshenvisning i teksten: (Forfatter, årstall)
- Full referanse i litteraturlisten

*Harvard:*
- Lignende APA, mye brukt i Norge
- (Forfatter årstall: sidetal)

*Chicago:*
- Brukes ofte i humaniora
- Fotnoter nederst på siden

**Eksempel på referering (APA-stil):**

*I teksten:*
"Ifølge Aasen (1853) var dialektene 'folkets virkelige maal' (s. 15)."

Eller:

"Dialektene ble sett som det autentiske norske (Aasen, 1853, s. 15)."

*I litteraturlisten:*
Aasen, I. (1853). Norsk Grammatik. Christiania: Werner.

**Sitater vs. parafraser**

*Direkte sitat:*
Bruk eksakte ord i anførselstegn. Korte sitater i løpende tekst, lengre sitater i eget avsnitt.

"Romantikken var 'følelsenes og fantasiens revolusjon' (Hansen, 2019, s. 45)."

*Parafrase:*
Gjengi innholdet med helt egne ord. Fortsatt med kilde!

Hansen (2019) beskriver romantikken som en opprørsbevegelse som satte følelser og fantasi i sentrum.

**Plagiat**

Plagiat er å bruke andres arbeid uten å oppgi kilde. Det er:

- Akademisk juks
- Ulovlig i noen tilfeller (brudd på opphavsrett)
- Lett å oppdage med plagiatkontroll

*Typer plagiat:*
- Kopiere tekst uten anførselstegn og kilde
- Parafrasere uten kilde
- Kjøpe eller låne andres oppgaver
- Bruke egen tekst fra før uten å oppgi det (selvplagiat)

*Konsekvenser:*
I skolen: Annullert oppgave, nedsatt karakter
På universitet: Utvisning, tilbaketrekking av grad

**Litteraturlisten**

Alle kilder skal samles i en alfabetisk ordnet litteraturliste til slutt.

Eksempler på oppføringer:

*Bok:*
Ibsen, H. (1879). Et dukkehjem. København: Gyldendal.

*Artikkel i tidsskrift:*
Hansen, O. (2020). Romantikkens naturlyrikk. Norsk Litteraturvitenskapelig Tidsskrift, 23(2), 45-60.

*Nettside:*
Språkrådet. (2023, 15. mars). Om nynorsk. Hentet fra https://www.sprakradet.no

**Kildeintegrasjon**

God kildebruk er ikke bare teknisk riktig - kildene skal integreres smidig i teksten:

*Dårlig:*
"Ifølge Aasen var..." "I følge Hansen mener..." (kilde etter kilde uten egen drøfting)

*Bedre:*
Sammenlign kilder, kommenter dem, bruk dem som støtte for egne argumenter.`,
    },
    {
      id: 'norsk-vg2-9-2-def-1',
      type: 'definition',
      title: 'Kildebruk - sentrale begreper',
      content: `**Kilde:** Opphav til informasjon - bok, artikkel, nettside, person.

**Primærkilde:** Førstehånds materiale (originaltekst, intervju, statistikk).

**Sekundærkilde:** Andres behandling av primærkilder (lærebok, oversiktsartikkel).

**Referanse:** Henvisning til kilde i teksten.

**Litteraturliste:** Samlet oversikt over alle kilder, til slutt i teksten.

**Sitat:** Eksakte ord fra kilde, i anførselstegn.

**Parafrase:** Gjengivelse av innhold med egne ord.

**Plagiat:** Å bruke andres arbeid uten å oppgi kilde.

**Referansesystem:** Standardisert måte å oppgi kilder på (APA, Harvard, Chicago).`,
    },
    {
      id: 'norsk-vg2-9-2-example-1',
      type: 'example',
      title: 'Eksempel: Kildebruk i praksis',
      problem: `Se på denne teksten uten kilder:

"Romantikken var en kulturbevegelse som oppsto rundt 1800. Den var en reaksjon mot opplysningstidens rasjonalisme. Romantikerne la vekt på følelser, natur og det nasjonale."

Vis hvordan den kunne forbedres med kildebruk.`,
      solution: `**Forbedret versjon med kilder:**

"Romantikken var en kulturbevegelse som oppsto rundt 1800 (Andersen, 2018). Den var en reaksjon mot opplysningstidens rasjonalisme - som Beyer (2020, s. 112) formulerer det: 'Romantikken satte hjertet over hodet, naturen over kulturen.' Romantikerne la vekt på følelser, natur og det nasjonale, noe som fikk særlig stor betydning i land som kjempet for selvstendighet (Andersen, 2018; Hansen, 2019)."

**Litteraturliste:**

Andersen, P.T. (2018). Norsk litteraturhistorie (3. utg.). Oslo: Universitetsforlaget.

Beyer, E. (2020). Romantikken i Norge. I K. Jensen (Red.), Norsk litteratur i europeisk perspektiv (s. 100-150). Bergen: Fagbokforlaget.

Hansen, J. (2019). Nasjonsbygging og litteratur. Norsk Litteraturvitenskapelig Tidsskrift, 22(1), 30-45.

**Hva er forbedret:**

1. *Påstand om tidspunkt* refereres til Andersen (allmennkunnskap, men viser lesning)

2. *Tolkning av romantikken* støttes med sitat fra Beyer - viser at andre er enige

3. *Flere kilder* (Andersen, Hansen) styrker troverdigheten

4. *Sidetall* gjør det mulig å finne igjen informasjonen

5. *Litteraturlisten* gir full informasjon om kildene`,
    },
    {
      id: 'norsk-vg2-9-2-tip-1',
      type: 'tip',
      title: 'Tips for god kildebruk',
      content: `**Sjekkliste for kildebruk:**

**1. Finn gode kilder:**
- Bruk fagbøker og vitenskapelige artikler
- Vær kritisk til nettsider (se kapittel 9.3)
- Primærkilder er best når mulig

**2. Hold orden:**
- Noter kilden med en gang du bruker den
- Bruk referanseverktøy (Zotero, EndNote)
- Lag litteraturlisten underveis

**3. Integrer kildene:**
- Ikke bare list opp kilder - bruk dem aktivt
- Kommenter og sammenlign
- La egen stemme dominere

**4. Varier referansemåten:**
- Noen ganger forfatter i teksten: "Aasen mener at..."
- Noen ganger i parentes: "(Aasen, 1853)"
- Noen ganger med sitat, noen ganger parafrase

**5. Sjekk til slutt:**
- Stemmer referansene med litteraturlisten?
- Er alle påstander som trenger det, referert?
- Er referansestilen konsekvent?

**Husk:**
Når i tvil - oppgi kilde. Det er bedre å referere for mye enn for lite.`,
    },
    {
      id: 'norsk-vg2-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Øv på referering.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv et avsnitt om et selvvalgt tema (f.eks. romantikken) med minst to kilder. Bruk både sitat og parafrase.',
            solution: 'Svar bør inneholde: tydelig markert sitat med sidetal, parafrase med kilde, riktig referanseformat.',
          },
          {
            label: 'b',
            task: 'Lag en litteraturliste for kildene du brukte.',
            solution: 'Litteraturlisten bør være alfabetisk, følge et konsekvent format (f.eks. APA), og inneholde all nødvendig informasjon.',
          },
        ],
        solution: 'God kildebruk krever øvelse og nøyaktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identifiser plagiat.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen på lovlig bruk av kilder og plagiat. Gi eksempler.',
            solution: 'Lovlig: Siterer med anførselstegn og kilde, parafraserer med kilde. Plagiat: Kopierer uten anførselstegn, parafraserer uten kilde, later som tekst er egen.',
          },
          {
            label: 'b',
            task: 'Hva kan være konsekvensene av plagiat i skole og universitet?',
            solution: 'Skole: Annullert oppgave, nedsatt karakter, anmerkning. Universitet: Utvisning, tilbaketrekking av grad, yrkesforbud i alvorlige tilfeller.',
          },
        ],
        solution: 'Kunnskap om plagiat beskytter deg mot feil og lærer akademisk redelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3: Kritisk lesing av kilder
// ============================================================================

export const CHAPTER_NORSK_VG2_9_3: TextbookChapter = {
  id: 'norsk-vg2-9-3',
  courseId: 'norsk-vg2',
  chapterNumber: '9.3',
  title: 'Kritisk lesing av kilder',
  description: 'Lær å vurdere kilders troverdighet og kvalitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere og bruke kilder på en kritisk og etterrettelig måte',
    'reflektere over sakprosateksters formål og kontekst',
  ],
  content: [
    {
      id: 'norsk-vg2-9-3-intro',
      type: 'text',
      content: `## Kritisk kildevurdering - veien til pålitelig kunnskap

I en tid med informasjonsoverflod og desinformasjon er evnen til å vurdere kilder kritisk viktigere enn noensinne. Å være kritisk betyr ikke å være negativ - det betyr å stille spørsmål, undersøke og vurdere før man aksepterer informasjon.

**Hvorfor kritisk kildevurdering?**

- Alle kilder er ikke like pålitelige
- Også "seriøse" kilder kan ta feil
- Kilder kan være partiske uten å si det
- Falsk informasjon spres lett på nett
- Du er ansvarlig for det du skriver

**De fire hovedspørsmålene**

God kildevurdering handler om å stille de rette spørsmålene:

**1. HVEM?**
- Hvem står bak kilden?
- Hvilken bakgrunn/kompetanse har de?
- Hvilke interesser kan de ha?
- Er kilden anonym?

**2. HVA?**
- Hva er innholdet?
- Er påstandene etterprøvbare?
- Er fakta skilt fra meninger?
- Brukes kilder?

**3. HVORFOR?**
- Hva er formålet med teksten?
- Hvem er målgruppen?
- Er det reklame, propaganda, informasjon?
- Hvilken agenda kan ligge bak?

**4. HVORDAN?**
- Hvordan er informasjonen fremskaffet?
- Hvilken metode er brukt (for forskning)?
- Er fremstillingen balansert?
- Hvordan er språket (nøytralt, ladet)?

---

## Ulike kildetyper

**Vitenskapelige kilder**

Fagfellevurderte artikler og fagbøker fra anerkjente forlag.

*Styrker:*
- Kvalitetssikret av eksperter
- Metode gjøres rede for
- Refererer til andre studier

*Svakheter:*
- Kan være utdaterte
- Kan ha faglig uenighet
- Vanskelig tilgjengelig språk

**Leksika og oppslagsverk**

Encyklopedier, Store norske leksikon, Wikipedia.

*Styrker:*
- Gir oversikt
- Nøytral tone (ideelt)
- Lett tilgjengelig

*Svakheter:*
- Kan ha feil (særlig Wikipedia)
- Overfladisk
- Ikke alltid oppdatert

**Nyhetsmedier**

Aviser, TV, radio, nyhetsnettsteder.

*Styrker:*
- Aktuelle
- Journalistiske standarder
- Flere perspektiver

*Svakheter:*
- Kan være vinklet
- Tidsnød gir feil
- Sensasjonalisme

**Sosiale medier og blogger**

Innlegg på Facebook, Twitter, blogger, YouTube.

*Styrker:*
- Kan gi førstehåndsberetninger
- Viser ulike perspektiver
- Aktuelt

*Svakheter:*
- Ofte udokumenterte påstander
- Anonymitet
- Ekkokamre og desinformasjon

---

## Vurderingskriterier

**Relevans**
- Passer kilden til ditt tema?
- Er den oppdatert nok?
- Er detaljeringsnivået riktig?

**Troverdighet**
- Hvem står bak?
- Hvilken kompetanse har de?
- Er kilden fagfellevurdert?

**Objektivitet**
- Er fremstillingen balansert?
- Oppgis interessekonflikter?
- Er språket nøytralt eller ladet?

**Nøyaktighet**
- Stemmer fakta med andre kilder?
- Er det kilder for påstandene?
- Er metoden tydelig?

**Aktualitet**
- Når er kilden publisert?
- Er informasjonen fortsatt gyldig?
- Finnes nyere forskning?

---

## Triangulering

En god strategi er triangulering: Sjekk informasjonen mot flere uavhengige kilder. Hvis flere pålitelige kilder sier det samme, er det mer troverdig.

*Eksempel:*
Du finner en påstand på en blogg. Sjekk om du finner det samme i:
1. En fagbok eller vitenskapelig artikkel
2. En nyhetsartikkel fra seriøs avis
3. Et anerkjent leksikon

Hvis alle tre bekrefter, er påstanden trolig riktig.

---

## Falsk informasjon

Lær å gjenkjenne:

**Desinformasjon:**
Bevisst falsk informasjon spredt for å villede.

**Misinformasjon:**
Feilaktig informasjon spredt uten vond hensikt.

**Propaganda:**
Partisk informasjon for å fremme et syn.

**Clickbait:**
Overdrevne overskrifter for å få klikk.

*Varseltegn:*
- Sensasjonelle påstander uten kilder
- Anonyme eller ukjente avsendere
- Dårlig språk og mange feil
- Appell til frykt eller sinne
- Deling oppfordres
- For godt til å være sant`,
    },
    {
      id: 'norsk-vg2-9-3-def-1',
      type: 'definition',
      title: 'Kritisk kildevurdering - begreper',
      content: `**Kildekritikk:** Systematisk vurdering av kilders troverdighet og relevans.

**Fagfellevurdering:** Eksperter vurderer vitenskapelig arbeid før publisering.

**Triangulering:** Sjekke informasjon mot flere uavhengige kilder.

**Bias (skjevhet):** Systematisk tendens til å fremstille noe ensidig.

**Interessekonflikt:** Når avsenderens interesser kan påvirke innholdet.

**Primærkilde:** Førstehåndsinformasjon (originaltekst, øyenvitneskildring).

**Sekundærkilde:** Andres behandling av primærkilder.

**Desinformasjon:** Bevisst falsk informasjon.

**Misinformasjon:** Utilsiktet spredning av feil.`,
    },
    {
      id: 'norsk-vg2-9-3-example-1',
      type: 'example',
      title: 'Eksempel: Vurdering av en nettside',
      problem: `Du finner en nettside som hevder: "Ny forskning viser at sukker er like avhengighetsskapende som kokain."

Vurder denne kilden kritisk.`,
      solution: `**Kritisk vurdering:**

**1. HVEM?**
- Hvem driver nettsiden? Sjekk "Om oss"
- Er det en kjent organisasjon? Et firma? En privatperson?
- Har de kompetanse på feltet?

*Mulige funn:*
- Hvis det er et helsekostfirma: interessekonflikt
- Hvis det er en privatperson: mangler kanskje kompetanse
- Hvis det er et universitet: mer troverdig

**2. HVA?**
- Hvilken forskning refereres det til? Er det lenke?
- Er påstanden "like avhengighetsskapende som kokain" nøyaktig?
- Er dette sensasjonalisering?

*Mulige funn:*
- Ofte er originale studier mer nyanserte
- "Lignende mekanismer" er ikke det samme som "like avhengighetsskapende"

**3. HVORFOR?**
- Hva er formålet med artikkelen?
- Er det for å informere, skremme, selge noe?

*Mulige funn:*
- Hvis det selges produkter på siden: mistenkelig
- Clickbait-overskrift tyder på ønske om klikk/delinger

**4. TRIANGULERING:**
Sjekk påstanden mot:
- Helsenorge.no eller andre offisielle kilder
- Vitenskapelige artikler (Google Scholar)
- Store norske leksikon

*Mulige funn:*
- Forskning viser visse likheter i hjerneaktivitet
- Men "like avhengighetsskapende" er en overdrivelse
- Seriøse kilder er mer nyanserte

**Konklusjon:**
Påstanden er sannsynligvis overdrevet eller sensasjonalisert. Den originale forskningen finnes, men sier noe mer forsiktig. Vær skeptisk til sterke påstander som mangler nyansering og kilder.`,
    },
    {
      id: 'norsk-vg2-9-3-tip-1',
      type: 'tip',
      title: 'Tips for kritisk kildelesing',
      content: `**Sjekkliste for nettsider:**

**1. Sjekk URL-en:**
- .edu, .gov, .no (offisiell) er ofte mer pålitelig enn tilfeldige domener
- Er det en kjent organisasjon?

**2. Finn "Om oss":**
- Hvem driver siden?
- Hvilke interesser har de?

**3. Se etter kilder:**
- Henvises det til forskning?
- Kan du finne originalkilden?

**4. Vurder språket:**
- Er det nøytralt eller ladet?
- Er det mange skrivefeil?

**5. Sjekk dato:**
- Når er det publisert?
- Er det oppdatert?

**6. Triangulér:**
- Finn minst to andre kilder
- Sier de det samme?

**Sjekkliste for sosiale medier:**

- Hvem delte dette?
- Er det satire?
- Er bildet/videoen ekte?
- Kan du finne originalen?
- Bruk omvendt bildesøk

**Nyttige verktøy:**
- Faktisk.no (norsk faktasjekk)
- Snopes.com (internasjonal faktasjekk)
- Google Scholar (vitenskapelige artikler)
- Store norske leksikon`,
    },
    {
      id: 'norsk-vg2-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder kilder kritisk.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en nettside om et tema du er interessert i. Vurder den etter de fire hovedspørsmålene (hvem, hva, hvorfor, hvordan).',
            solution: 'Svar bør inneholde systematisk vurdering av avsender, innhold, formål og metode, med konkret referanse til nettsiden.',
          },
          {
            label: 'b',
            task: 'Finn en nyhetsartikkel og vurder om den er pålitelig. Begrunn.',
            solution: 'Svar bør vurdere: kilde, balanse, kilder oppgitt, språk, agenda. Konklusjon med begrunnelse.',
          },
          {
            label: 'c',
            task: 'Bruk triangulering: Sjekk en påstand du har funnet mot tre ulike kilder. Hva finner du?',
            solution: 'Svar bør vise konkret sammenligning av tre kilder og konkludere om påstandens troverdighet.',
          },
        ],
        solution: 'Kritisk kildevurdering er en ferdighet som krever øvelse og systematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-9-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser falsk informasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på desinformasjon og misinformasjon?',
            solution: 'Desinformasjon er bevisst falsk informasjon (villedende hensikt). Misinformasjon er feilaktig informasjon som spres uten vond hensikt (uvitende).',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på en falsk eller misvisende påstand som har spredt seg. Hvordan kunne man avslørt den?',
            solution: 'Svar bør beskrive et konkret eksempel og vise hvordan kritisk vurdering (kildesjekk, triangulering, faktasjekk) kunne avslørt feilen.',
          },
        ],
        solution: 'Å forstå hvordan falsk informasjon spres, gjør deg bedre rustet til å oppdage den.',
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

export const NORSK_VG2_CHAPTERS = [
  CHAPTER_NORSK_VG2_1_1,
  CHAPTER_NORSK_VG2_1_2,
  CHAPTER_NORSK_VG2_1_3,
  CHAPTER_NORSK_VG2_1_4,
  CHAPTER_NORSK_VG2_1_5,
  CHAPTER_NORSK_VG2_2_1,
  CHAPTER_NORSK_VG2_2_2,
  CHAPTER_NORSK_VG2_2_3,
  CHAPTER_NORSK_VG2_3_1,
  CHAPTER_NORSK_VG2_3_2,
  CHAPTER_NORSK_VG2_3_3,
  CHAPTER_NORSK_VG2_4_1,
  CHAPTER_NORSK_VG2_4_2,
  CHAPTER_NORSK_VG2_4_3,
  CHAPTER_NORSK_VG2_4_4,
  CHAPTER_NORSK_VG2_5_1,
  CHAPTER_NORSK_VG2_5_2,
  CHAPTER_NORSK_VG2_5_3,
  CHAPTER_NORSK_VG2_5_4,
  CHAPTER_NORSK_VG2_6_1,
  CHAPTER_NORSK_VG2_6_2,
  CHAPTER_NORSK_VG2_6_3,
  CHAPTER_NORSK_VG2_6_4,
  CHAPTER_NORSK_VG2_6_5,
  CHAPTER_NORSK_VG2_7_1,
  CHAPTER_NORSK_VG2_7_2,
  CHAPTER_NORSK_VG2_7_3,
  CHAPTER_NORSK_VG2_7_4,
  CHAPTER_NORSK_VG2_8_1,
  CHAPTER_NORSK_VG2_8_2,
  CHAPTER_NORSK_VG2_8_3,
  CHAPTER_NORSK_VG2_8_4,
  CHAPTER_NORSK_VG2_9_1,
  CHAPTER_NORSK_VG2_9_2,
  CHAPTER_NORSK_VG2_9_3,
];

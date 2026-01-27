/**
 * Tekstbok innhold for Norsk VG3
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Tredje år med fokus på litteraturhistorie fra 1850 til i dag,
 * språkhistorie, retorikk og eksamensforberedelse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: DET MODERNE GJENNOMBRUDDET (1870-1890)
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 Georg Brandes og problemdiktningen
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_1: TextbookChapter = {
  id: 'norsk-vg3-1-1',
  courseId: 'norsk-vg3',
  chapterNumber: '1.1',
  title: 'Georg Brandes og problemdiktningen',
  description: 'Georg Brandes\' programerklæring og starten på det moderne gjennombruddet i nordisk litteratur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg3-1-1-intro',
      type: 'text',
      content: `## Georg Brandes og det moderne gjennombrudd

Det moderne gjennombruddet (1870-1890) markerer et av de viktigste vendepunktene i nordisk litteraturhistorie. Denne perioden innledet en ny æra der litteraturen ikke lenger primært skulle underholde eller forskjønne virkeligheten, men aktivt ta stilling til samtidens brennende spørsmål. Forfatterne skulle være samfunnets samvittighet og bruke pennen som våpen i kampen for sosial rettferdighet, likestilling og frihet.

Den danske litteraturkritikeren Georg Brandes (1842-1927) ble den intellektuelle arkitekten bak denne litterære revolusjonen. I november 1871 innledet han en forelesningsrekke ved Københavns Universitet med tittelen «Hovedstrømninger i det 19de Aarhundredes Litteratur». Disse forelesningene skulle få enorm betydning for skandinavisk åndsliv i tiårene som fulgte.

Brandes' budskap var klart og provoserende: Den nordiske litteraturen hang håpløst etter den europeiske utviklingen. Mens forfattere i Frankrike, England og Russland hadde tatt opp de store samfunnsspørsmålene, dvelte skandinaviske diktere fortsatt i nasjonalromantikkens idylliske drømmeverden. Brandes formulerte sitt berømte krav: «At en Litteratur i vore Dage lever, viser sig i, at den sætter Problemer under Debat.»

**Den europeiske konteksten:**

Brandes' program var dypt påvirket av europeiske strømninger. Han hadde studert i Paris og Berlin, og var sterkt influert av tenkere som Auguste Comte (positivismen), John Stuart Mill (liberalismen), Charles Darwin (evolusjonslæren) og Hippolyte Taine (determinismen). Disse ideene dannet det filosofiske grunnlaget for det moderne gjennombruddet.

Positivismen hevdet at bare det som kunne observeres og måles vitenskapelig, hadde gyldighet. Dette førte til krav om at litteraturen skulle skildre virkeligheten slik den faktisk var, ikke slik man ønsket den skulle være. Determinismen bidro med tanken om at mennesker er formet av arv og miljø - en ide som skulle bli sentral i naturalismen.

**Problemdiktningens kjennetegn:**

Brandes' krav om problemdiktning innebar at litteraturen skulle:
- Ta opp aktuelle samfunnsproblemer
- Kritisere undertrykkende institusjoner
- Avsløre dobbeltmoral og hykleri
- Kjempe for individets frihet
- Støtte kvinnenes kamp for likestilling
- Utfordre religiøs dogmatisme

Dette var kontroversielt i samtiden. Mange så på Brandes som en farlig radikaler som ville undergrave samfunnets moralske grunnlag. Hans forelesninger ble møtt med sterk motstand fra konservative kretser, og han fikk aldri det professoratet han hadde fortjent ved universitetet.

**Virkningshistorien:**

Til tross for motstanden fikk Brandes' ideer enorm gjennomslagskraft. En hel generasjon av skandinaviske forfattere lot seg inspirere av hans program. Henrik Ibsen, Bjørnstjerne Bjørnson, Alexander Kielland, Jonas Lie, August Strindberg og mange andre tok opp hansken og begynte å skrive litteratur som «satte problemer under debatt».

Det moderne gjennombruddet forandret ikke bare litteraturen, men bidro til å forandre samfunnet. Debatten om kvinners rettigheter, ekteskapets institusjoner, klasseforskjeller og religiøs frihet ble intensivert gjennom litteraturen. Forfatterne ble offentlige intellektuelle som deltok aktivt i samfunnsdebatten.`,
    },
    {
      id: 'norsk-vg3-1-1-def-1',
      type: 'definition',
      title: 'Problemdiktning',
      content: `**Problemdiktning** er litteratur som tar opp og drøfter aktuelle samfunnsproblemer. Begrepet er knyttet til Georg Brandes' programerklæring fra 1871.

**Sentrale kjennetegn:**
- Litteraturen skal engasjere seg i samtidige spørsmål
- Forfatteren tar stilling, ofte kritisk til etablerte normer
- Fokus på sosiale, politiske og moralske problemer
- Realistisk fremstilling av virkeligheten
- Ofte samfunnskritisk og reformvennlig

**Typiske temaer:**
- Kvinnens stilling i samfunnet
- Ekteskapets problemer
- Dobbeltmoral (ulike regler for menn og kvinner)
- Klasseskiller og sosial urettferdighet
- Religiøs hykleri og tvang
- Individets kamp mot samfunnets konvensjoner

**Motsetning til:**
- Nasjonalromantikken (idealisering av fortid og natur)
- L'art pour l'art (kunst for kunstens skyld)
- Underholdningslitteratur uten samfunnsengasjement`,
    },
    {
      id: 'norsk-vg3-1-1-def-2',
      type: 'definition',
      title: 'Georg Brandes (1842-1927)',
      content: `**Georg Morris Cohen Brandes** var en dansk litteraturkritiker, filosof og kulturpersonlighet som ble det moderne gjennombruddets fremste ideolog.

**Bakgrunn:**
- Født i København i en jødisk familie
- Studerte juss, estetikk og filosofi
- Studieopphold i Paris, Berlin og andre europeiske byer
- Påvirket av Taine, Mill, Comte og Darwin

**Hovedverk:**
- *Hovedstrømninger i det 19de Aarhundredes Litteratur* (1872-1890)
- Biografier om Kierkegaard, Ibsen, Shakespeare m.fl.
- Tallrike essays og artikler

**Betydning:**
- Formulerte programmet for det moderne gjennombruddet
- Introduserte europeiske ideer i Skandinavia
- Korresponderte med og inspirerte mange forfattere
- Internasjonalt anerkjent litteraturkritiker
- Nominert til Nobelprisen i litteratur gjentatte ganger

**Kontroverser:**
- Møtte sterk motstand fra konservative
- Ble nektet professorat i København
- Kritisert for sin ateisme og radikalisme
- Senere kritisert for sin Nietzsche-begeistring`,
    },
    {
      id: 'norsk-vg3-1-1-def-3',
      type: 'definition',
      title: 'Realisme',
      content: `**Realismen** er en litterær retning som søker å skildre virkeligheten slik den faktisk er, uten idealisering eller forskjønnelse.

**Historisk bakgrunn:**
- Oppsto i Frankrike rundt 1850
- Reaksjon mot romantikkens idealisme
- Påvirket av positivismen og naturvitenskapen
- Nådde Skandinavia med det moderne gjennombruddet

**Litterære kjennetegn:**
- Objektiv, observerende forteller
- Detaljerte miljøskildringer
- Troverdige, typiske karakterer
- Samtidstematikk
- Hverdagslig språk
- Fokus på sosiale forhold

**Sentrale forfattere internasjonalt:**
- Honoré de Balzac (Frankrike)
- Gustave Flaubert (Frankrike)
- Charles Dickens (England)
- Fjodor Dostojevskij (Russland)
- Leo Tolstoj (Russland)

**I Norge:**
- Henrik Ibsen (dramatikk)
- Bjørnstjerne Bjørnson
- Alexander Kielland
- Jonas Lie`,
    },
    {
      id: 'norsk-vg3-1-1-example-1',
      type: 'example',
      title: 'Analyse: Brandes\' programerklæring',
      problem: `Les følgende utdrag fra Brandes' forelesning og analyser innholdet:

«Det, som viser, at en Litteratur i vore Dage lever, er, at den sætter Problemer under Debat. Hvad enten f. Eks. en Forfatter skriver for at forsvare eller for at angribe Ægteskabet [...], saa sætter han noget under Debat, som staar for ham som et Problem. At en Litteratur Intet sætter under Debat, er det samme som, at den er i Færd med at tabe al Betydning.»`,
      solution: `**Analyse av Brandes' programerklæring:**

**1. Hovedpåstanden:**
Brandes hevder at en levende litteratur kjennetegnes ved at den «sætter Problemer under Debat». Litteratur som ikke gjør dette, mister sin betydning.

**2. Eksempelet ekteskapet:**
Brandes bruker ekteskapet som eksempel på et problem litteraturen bør ta opp. Han understreker at det ikke er viktig om forfatteren forsvarer eller angriper institusjonen - det avgjørende er at den problematiseres.

**3. Implisitt kritikk:**
Mellom linjene ligger en kritikk av den samtidige skandinaviske litteraturen, som Brandes mener var for opptatt av fortiden og for lite engasjert i samtidige spørsmål.

**4. Det moderne prosjektet:**
Brandes knytter litteraturens verdi til dens samfunnsrelevans. Dette er et brudd med romantikkens estetikk, der kunstens verdi lå i det skjønne og opphøyde.

**5. Demokratiserende effekt:**
Ved å kreve at litteraturen tar opp allmenne problemer, åpner Brandes for en bredere deltakelse i den offentlige samtalen. Litteraturen blir et forum for debatt.

**6. Historisk betydning:**
Denne korte formuleringen ble et slagord for en hel litterær bevegelse og påvirket skandinavisk litteratur i flere tiår fremover.`,
    },
    {
      id: 'norsk-vg3-1-1-tip-1',
      type: 'tip',
      title: 'Historisk kontekst',
      content: `**Skandinavia på 1870-tallet:**

For å forstå det moderne gjennombruddets betydning, er det viktig å kjenne den historiske konteksten:

- **Industrialiseringen** var i gang og skapte nye sosiale problemer
- **Urbaniseringen** førte folk fra landsbygda til byene
- **Arbeiderbevegelsen** vokste frem
- **Kvinnebevegelsen** kjempet for stemmerett og rettigheter
- **Sekulariseringen** utfordret kirkens autoritet
- **Nasjonalismen** var fortsatt sterk, men ble utfordret

Litteraturen reflekterte og påvirket disse endringene.`,
    },
    {
      id: 'norsk-vg3-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar Brandes\' krav til litteraturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Brandes med at litteraturen skulle «sette problemer under debatt»?',
            solution: 'Brandes mente at litteraturen skulle ta opp aktuelle samfunnsproblemer og drøfte dem kritisk. Forfatterne skulle ikke bare underholde, men engasjere seg i spørsmål som angikk samtiden.',
          },
          {
            label: 'b',
            task: 'Hvilken type litteratur kritiserte Brandes implisitt?',
            solution: 'Brandes kritiserte den nasjonalromantiske litteraturen som var opptatt av fortiden, folkeeventyr og idealiserte naturskildringer, i stedet for å ta opp samtidige samfunnsproblemer.',
          },
          {
            label: 'c',
            task: 'Hvorfor var Brandes\' program kontroversielt i samtiden?',
            solution: 'Programmet utfordret etablerte autoriteter som kirken, tradisjonelle familieverdier og konservative samfunnsstrukturer. Mange så det som moralsk undergravende og farlig radikalt.',
          },
        ],
        solution: 'Brandes\' programerklæring krevde at litteraturen skulle være samfunnsengasjert og ta opp aktuelle problemer, i motsetning til den idealiserende nasjonalromantikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter sammenhengen mellom filosofiske ideer og litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan påvirket positivismen det moderne gjennombruddet?',
            solution: 'Positivismen krevde vitenskapelig observasjon og fakta. Dette førte til at litteraturen skulle skildre virkeligheten objektivt og realistisk, ikke idealisert.',
          },
          {
            label: 'b',
            task: 'Hvilken rolle spilte Darwins evolusjonslære?',
            solution: 'Darwin utfordret den religiøse skapelsesberetningen og støttet et materialistisk verdensbilde. Dette styrket kritikken av religiøs dogmatisme i litteraturen.',
          },
        ],
        solution: 'Det moderne gjennombruddet var dypt påvirket av samtidige filosofiske og vitenskapelige strømninger som positivisme, darwinisme og liberalisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign romantikken og realismen.',
        hints: ['Tenk på forholdet til virkeligheten', 'Hvilke temaer er sentrale?', 'Hvordan er fortellerposisjonen?'],
        solution: 'Romantikken idealiserte følelser, natur og fortid, mens realismen søkte objektiv skildring av samtiden. Romantikken hadde en subjektiv forteller, realismen en observerende. Romantikken fokuserte på det unike individet, realismen på sosiale typer og strukturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over litteraturens samfunnsrolle.',
        subTasks: [
          {
            label: 'a',
            task: 'Er Brandes\' krav om problemdiktning fortsatt relevant i dag?',
            solution: 'Ja, litteratur tar fortsatt opp samfunnsproblemer som klima, ulikhet, rasisme og identitet. Men det finnes også motargumenter om at kunst ikke trenger å være politisk.',
          },
          {
            label: 'b',
            task: 'Hvilke problemer ville en moderne Brandes kreve at litteraturen tok opp?',
            solution: 'Mulige temaer: klimakrisen, migrasjon, sosiale mediers innvirkning, økonomisk ulikhet, kunstig intelligens, identitetspolitikk.',
          },
        ],
        solution: 'Spørsmålet om litteraturens samfunnsansvar er fortsatt aktuelt og debatteres stadig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.2 Henrik Ibsen - dramatiker og samfunnskritiker
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_2: TextbookChapter = {
  id: 'norsk-vg3-1-2',
  courseId: 'norsk-vg3',
  chapterNumber: '1.2',
  title: 'Henrik Ibsen - dramatiker og samfunnskritiker',
  description: 'Henrik Ibsens liv og forfatterskap, med fokus på de realistiske samtidsdramaene.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-1-2-intro',
      type: 'text',
      content: `## Henrik Ibsen - verdensdramatikeren fra Norge

Henrik Johan Ibsen (1828-1906) regnes som en av verdens største dramatikere og som grunnleggeren av det moderne drama. Hans stykker spilles fortsatt på scener over hele verden, og han er den mest spilte dramatikeren etter Shakespeare. Ibsens betydning for verdenslitteraturen kan knapt overvurderes.

**Barndom og ungdom:**

Ibsen ble født i Skien 20. mars 1828 som sønn av kjøpmann Knud Ibsen og Marichen Altenburg. Familien var velstående, men da Henrik var åtte år gammel, gikk faren konkurs. Denne opplevelsen av sosial deklassering preget Ibsen dypt og gjenfinnes som tema i flere av hans verker.

Som 15-åring ble Ibsen sendt til Grimstad for å arbeide som apotekerlærling. Her levde han i trange kår, men begynte å skrive dikt og sitt første drama, «Catilina» (1850). Han fikk også et barn utenfor ekteskap med tjenestepiken Else Sophie Jensdatter - en hemmelighet han bar på livet ut.

**Teaterårene:**

I 1851 fikk Ibsen stilling som sceneinstruktør ved Det norske Theater i Bergen, og fra 1857 var han kunstnerisk leder ved Christiania norske Theater. Disse årene ga ham uvurderlig praktisk teatererfaring, men var også preget av konflikter og skuffelser.

I Bergen og Kristiania skrev Ibsen en rekke historiske dramaer og nasjonalromantiske stykker som «Fru Inger til Østeraad» (1855), «Gildet paa Solhoug» (1856) og «Hærmændene paa Helgeland» (1858). Disse verkene viser Ibsens tekniske utvikling, men hører ikke til hans mest kjente.

**Selvpålagt eksil:**

I 1864 forlot Ibsen Norge, bitter over det han opplevde som manglende støtte og forståelse. Han skulle bli boende i utlandet - først i Italia, senere i Tyskland - i 27 år. Denne perioden ble hans mest produktive.

Fra utlendigheten skrev han de store versdramaene «Brand» (1866) og «Peer Gynt» (1867), som etablerte ham som en betydelig dikter. Men det var med overgangen til realistiske prosadramaer at Ibsen for alvor ble en verdensforfatter.

**De realistiske samtidsdramaene:**

Fra «Samfundets støtter» (1877) og utover skrev Ibsen en rekke dramaer som tok opp aktuelle samfunnsproblemer. Disse stykkene fulgte Georg Brandes' program om problemdiktning og vakte enorm oppsikt - og kontrovers - over hele Europa.

De viktigste verkene fra denne perioden er:
- «Samfundets støtter» (1877)
- «Et dukkehjem» (1879)
- «Gengangere» (1881)
- «En folkefiende» (1882)
- «Vildanden» (1884)
- «Rosmersholm» (1886)
- «Fruen fra havet» (1888)
- «Hedda Gabler» (1890)

**Tematikk:**

Ibsens realistiske dramaer kretser rundt noen gjennomgående temaer:

1. **Sannhet og løgn:** Karakterene lever ofte med hemmeligheter og livsløgner som til slutt avdekkes. Hva skjer når sannheten kommer frem?

2. **Individ og samfunn:** Enkeltmennesket står i konflikt med samfunnets krav og forventninger. Har individet rett til å realisere seg selv på bekostning av andre?

3. **Kvinnens stilling:** Flere av stykkene utforsker kvinners manglende rettigheter og selvstendighet i det borgerlige ekteskapet.

4. **Dobbeltmoral:** Samfunnet har ulike regler for menn og kvinner, for offentlig og privat moral. Ibsen avslører dette hykleriet.

5. **Arv og miljø:** Karakterene er preget av sin bakgrunn og oppdragelse. Kan de frigjøre seg?

**Sene verker:**

I sine siste dramaer bevegde Ibsen seg i en mer symbolsk og psykologisk retning. Verker som «Bygmester Solness» (1892), «Lille Eyolf» (1894), «John Gabriel Borkman» (1896) og «Når vi døde vågner» (1899) utforsker kunstnerens rolle, aldring og livets mening.

Ibsen vendte hjem til Norge i 1891 og døde i Kristiania 23. mai 1906.`,
    },
    {
      id: 'norsk-vg3-1-2-def-1',
      type: 'definition',
      title: 'Henrik Ibsen (1828-1906)',
      content: `**Biografi i kortform:**

**Fødsel og barndom:**
- Født 20. mars 1828 i Skien
- Familiens konkurs i 1836 preget ham dypt
- Apotekerlærling i Grimstad 1843-1850

**Teaterkarriere:**
- Det norske Theater, Bergen 1851-1857
- Christiania norske Theater 1857-1862
- Skrev historiske og nasjonalromantiske dramaer

**Eksil 1864-1891:**
- Bodde i Italia og Tyskland
- Skrev sine største verker
- Internasjonal anerkjennelse

**Hjemkomst og død:**
- Vendte hjem 1891
- Slag i 1900, delvis lam
- Døde 23. mai 1906

**Hovedverk:**
- *Brand* (1866)
- *Peer Gynt* (1867)
- *Et dukkehjem* (1879)
- *Gengangere* (1881)
- *Vildanden* (1884)
- *Hedda Gabler* (1890)

**Betydning:**
- Grunnlegger av det moderne drama
- Verdens mest spilte dramatiker etter Shakespeare
- Påvirket teater og litteratur over hele verden`,
    },
    {
      id: 'norsk-vg3-1-2-def-2',
      type: 'definition',
      title: 'Det realistiske drama',
      content: `**Det realistiske drama** er en dramatisk form som søker å skildre virkeligheten på scenen på en troverdig og naturtro måte.

**Kjennetegn:**
- Hverdagslige omgivelser (stuer, kontorer)
- Samtidige, gjenkjennelige karakterer
- Naturlig, hverdagslig dialog
- Sosiale og psykologiske problemer
- Kausalitet og logisk handling
- «Den fjerde veggen» - publikum er usynlige tilskuere

**Ibsens bidrag:**
- Utviklet den analytiske dramaformen
- Introduserte komplekse kvinneroller
- Brukte symboler innenfor en realistisk ramme
- Skapte den «vellagede» strukturen
- Gjorde dialogen til et instrument for avsløring

**Motsetning til:**
- Romantisk melodrama
- Versedrama
- Historiske kostymestykker
- Farser og lettere underholdning

**Innflytelse:**
Ibsens realistiske drama påvirket dramatikere som Strindberg, Tsjekhov, Shaw og hele det moderne teater.`,
    },
    {
      id: 'norsk-vg3-1-2-def-3',
      type: 'definition',
      title: 'Analytisk drama',
      content: `**Analytisk drama** er en dramatisk form der handlingen primært består i å avdekke fortiden. Ibsen var mesteren i denne teknikken.

**Strukturen:**
1. **Eksposisjon:** Tilsynelatende stabil situasjon presenteres
2. **Avsløring:** Hemmeligheter fra fortiden kommer gradvis frem
3. **Krise:** Avsløringene fører til konflikt
4. **Klimaks:** Sannheten kommer fullstendig frem
5. **Katastrofe/løsning:** Konsekvensene av avsløringen

**Retrospektiv teknikk:**
- Fortiden rekonstrueres gjennom dialog
- Hver scene avdekker nye brikker
- Spenningen ligger i hva som vil komme frem
- Karakterene tvinges til å konfrontere fortiden

**Eksempler fra Ibsen:**
- *Gengangere:* Fru Alvings hemmeligheter om ektemannen
- *Rosmersholm:* Hva skjedde egentlig med Beate?
- *Hedda Gabler:* Heddas forhold til Løvborg

**Fordeler:**
- Komprimert tid (ofte 24 timer)
- Få scener og personer
- Intens psykologisk spenning
- Tematisk dybde`,
    },
    {
      id: 'norsk-vg3-1-2-example-1',
      type: 'example',
      title: 'Analyse: Et dukkehjem (1879)',
      problem: `«Et dukkehjem» regnes som et av verdenslitteraturens viktigste dramaer. Analyser stykkets hovedtema og Noras utvikling.`,
      solution: `**Handling i korthet:**
Nora Helmer har for åtte år siden forfalsket sin døende fars underskrift for å låne penger til en reise som reddet ektemannens liv. Nå truer sakfører Krogstad med å avsløre dette for Torvald. Nora håper at Torvald vil stå ved henne når sannheten kommer frem - «det vidunderlige» - men han reagerer med sinne og forakt. Når faren truer er overstått, vil han tilgi henne, men da innser Nora at ekteskapet har vært falskt. Hun forlater mann og barn.

**Hovedtemaer:**

1. **Kvinnens stilling:**
Nora har levd som et barn, først i farens hus, så i ektemannens. Hun har aldri fått utvikle seg som selvstendig individ. Ekteskapet gir mannen all makt - juridisk, økonomisk og moralsk.

2. **Sannhet og livsløgn:**
Hele ekteskapet er bygget på en fasade. Nora spiller rollen som «lerkefuglen», og Torvald lever i illusjonen om det perfekte hjem. Sannheten avslører tomheten.

3. **Selvrealisering:**
Nora velger å forlate mann og barn for å finne seg selv. Dette var skandaløst i samtiden - en mor som svikter sine «helligste plikter».

**Noras utvikling:**

- **Akt 1:** Tilsynelatende lykkelig, barnlig kone
- **Akt 2:** Angst og desperasjon, men fortsatt håp
- **Akt 3:** Oppvåkning og beslutning

**Dramatisk teknikk:**
- Retrospektiv avsløring av hemmeligheten
- Symboler: Juletræet som visner, tarantellaen
- Kontrast mellom Nora og Kristine
- Den berømte dørsmellingen

**Resepsjon:**
Stykket skapte skandale over hele Europa. Nora ble et symbol for kvinnefrigjøring, selv om Ibsen selv hevdet at han først og fremst skrev om mennesker, ikke kvinner.`,
    },
    {
      id: 'norsk-vg3-1-2-example-2',
      type: 'example',
      title: 'Analyse: Gengangere (1881)',
      problem: `«Gengangere» var enda mer kontroversielt enn «Et dukkehjem». Analyser stykkets tematikk og hvorfor det vakte slik oppsikt.`,
      solution: `**Handling:**
Fru Helene Alving skal innvie et barnehjem til minne om sin avdøde ektemann, kammerherre Alving. Sønnen Osvald har kommet hjem fra Paris, der han har studert kunst. Gradvis avdekkes sannheten: Kammerherren var en forfyllet utsvevende mann, og Osvald har arvet syfilis fra faren. Stykket ender med at Osvald blir gal og ber moren om å gi ham gift.

**Sentrale temaer:**

1. **Arv og miljø:**
Osvald har arvet farens sykdom - et bilde på hvordan fortiden følger oss. Men «gengangere» er også de nedarvede fordommene som fru Alving ikke klarte å frigjøre seg fra.

2. **Sannhet og løgn:**
Fru Alving valgte å bli i ekteskapet og holde opp fasaden. Samfunnet krevde det av henne. Men løgnen får fatale konsekvenser.

3. **Samfunnets tvang:**
Pastor Manders representerer de konvensjonene som holder fru Alving fanget. Hans råd om å bli i ekteskapet førte til tragedien.

4. **Religiøs hykleri:**
Manders fremstår som hyklerisk og feig. Han er mer opptatt av hva folk vil si enn av sannhet og moral.

**Hvorfor kontroversielt:**

- Syfilis var tabu å nevne offentlig
- Kritikk av kirken og borgerskapet
- Eutanasi-temaet i slutten
- Avslører det «respektable» ekteskapets skyggesider

Stykket ble fordømt som «usedelig» og «ubehagelig» av kritikere over hele Europa. Men det ble også forsvart som sannferdig og modig.

**Dramatisk teknikk:**
- Analytisk drama: Fortiden avdekkes lag for lag
- Symbolet brannslukking/barnehjem
- Regnet som stemningsskapende element
- Solen som ironisk kontrast i slutten`,
    },
    {
      id: 'norsk-vg3-1-2-tip-1',
      type: 'tip',
      title: 'Ibsen-sitater',
      content: `**Berømte sitater fra Ibsens dramaer:**

**Et dukkehjem:**
«Jeg tror at jeg først og fremst er et menneske, jeg, ligeså godt som du - eller iallfall, at jeg skal forsøge at blive det.» (Nora)

**Gengangere:**
«Det er ikke bare det vi har arvet fra far og mor, som går igjen i os. Det er allslags gamle, afdøde meninger og allslags gammel, afdød tro og deslige. Det er ikke levende i os; men det sidder i alligevel, og vi kan ikke blive det kvit.» (Fru Alving)

**En folkefiende:**
«Den sterkeste mand i verden, det er han, som står mest alene.» (Doktor Stockmann)

**Vildanden:**
«Tar De livsløgnen fra et gjennemsnitsmenneske, så tar De lykken fra ham med det samme.» (Relling)

Disse sitatene viser Ibsens evne til å formulere komplekse tanker i slagkraftige replikker.`,
    },
    {
      id: 'norsk-vg3-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser Ibsens dramatiske teknikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med «analytisk drama».',
            solution: 'I et analytisk drama ligger hovedhandlingen i å avdekke fortiden. Hemmeligheter og skjulte sannheter kommer gradvis frem gjennom dialog, og konsekvensene av fortiden utspiller seg i nåtiden.',
          },
          {
            label: 'b',
            task: 'Hvordan bruker Ibsen retrospektiv teknikk i Et dukkehjem?',
            solution: 'Noras hemmelighet om lånet og falskneriget avdekkes gradvis gjennom stykket. Hver scene gir ny informasjon om fortiden, som bygger opp mot krisen.',
          },
          {
            label: 'c',
            task: 'Hvilken funksjon har symbolene i Ibsens dramaer?',
            solution: 'Symbolene forsterker tematikken. Juletræet i Et dukkehjem visner parallelt med ekteskapets fasade. Solen i Gengangere kontrasterer ironisk med den mørke avslutningen.',
          },
        ],
        solution: 'Ibsens dramatiske teknikk kombinerer realistisk overflate med symbolsk dybde og analytisk struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les slutten av Et dukkehjem og skriv en analyse.',
        hints: ['Hva representerer dørsmellingen?', 'Hvordan har Nora forandret seg?', 'Hva er Torvalds reaksjon?'],
        solution: 'Analysen bør vise forståelse for Noras utvikling fra «dukke» til selvstendig individ, Torvalds manglende forståelse, og den symbolske betydningen av at hun forlater hjemmet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign Et dukkehjem og Gengangere.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke temaer er felles for de to stykkene?',
            solution: 'Begge handler om ekteskapets problemer, kvinners begrensede handlingsrom, sannhet vs. fasade, og konsekvensene av fortiden.',
          },
          {
            label: 'b',
            task: 'Hvordan er kvinnerollene forskjellige?',
            solution: 'Nora frigjør seg og forlater ekteskapet. Fru Alving ble værende og ser nå konsekvensene. De representerer ulike valg og ulike generasjoner.',
          },
        ],
        solution: 'Stykkene utfyller hverandre og viser ulike aspekter ved kvinners situasjon i samtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter Ibsens aktualitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor spilles Ibsen fortsatt på teatre over hele verden?',
            solution: 'Ibsens temaer - individets frihet, sannhet, kjønnsroller, samfunnets press - er universelle og tidløse. Hans psykologiske dybde og dramatiske håndverk holder seg.',
          },
          {
            label: 'b',
            task: 'Er Noras valg i Et dukkehjem relevant i dag?',
            solution: 'Spørsmålet om selvrealisering vs. familieansvar er fortsatt aktuelt. Forventninger til kvinner og mødre diskuteres stadig.',
          },
        ],
        solution: 'Ibsens relevans ligger i hans evne til å stille grunnleggende spørsmål om menneskers liv og valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.3 Ibsens teknikk og symbolbruk
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_3: TextbookChapter = {
  id: 'norsk-vg3-1-3',
  courseId: 'norsk-vg3',
  chapterNumber: '1.3',
  title: 'Ibsens teknikk og symbolbruk',
  description: 'Dybdeanalyse av Ibsens dramatiske teknikker, symboler og den vellagede strukturen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'skrive litterære analyser og sammenligninger',
    'bruke fagkunnskap i muntlige presentasjoner',
  ],
  content: [
    {
      id: 'norsk-vg3-1-3-intro',
      type: 'text',
      content: `## Ibsens dramatiske håndverk

Henrik Ibsen var ikke bare en stor tenker og samfunnskritiker - han var også en mester i det dramatiske håndverket. Hans tekniske innovasjoner forandret teatret for alltid og dannet grunnlaget for det moderne drama. I dette kapittelet skal vi se nærmere på de viktigste elementene i Ibsens dramatiske teknikk.

**Den vellagede strukturen:**

Ibsen perfeksjonerte det som kalles «the well-made play» (det vellagede stykke). Denne strukturen kjennetegnes av:

1. **Enhet i tid, sted og handling:** Handlingen foregår gjerne over kort tid (ofte 24 timer) på ett sted (typisk en stue).

2. **Eksposisjon:** Nødvendig bakgrunnsinformasjon veves naturlig inn i dialogen.

3. **Stigende spenning:** Hver akt bygger opp mot neste, med økende konfliktnivå.

4. **Vendepunkt:** Et avgjørende øyeblikk snur handlingen.

5. **Klimaks og oppløsning:** Alt kulminerer i en dramatisk avslutning.

**Dialog som handling:**

I Ibsens dramaer skjer den viktigste handlingen gjennom dialogen. Det er ikke fysiske handlinger som driver dramaet fremover, men ord - avsløringer, konfrontasjoner, fortielser. Karakterene avslører seg selv og hverandre gjennom det de sier (og ikke sier).

Ibsens dialog er tilsynelatende naturlig og hverdagslig, men hvert ord er nøye valgt. Under overflaten ligger lag av mening som gradvis avdekkes. Karakterene snakker ofte forbi hverandre eller skjuler sine egentlige tanker.

**Retrospektiv dramaturgi:**

Som vi så i forrige kapittel, bruker Ibsen ofte retrospektiv teknikk - fortiden avdekkes gradvis gjennom nåtiden. Denne teknikken skaper en detektivlignende spenning: Hva skjedde egentlig? Hvorfor reagerer karakterene som de gjør?

**Symbolbruk:**

Et av Ibsens mest karakteristiske trekk er hans bruk av symboler innenfor en tilsynelatende realistisk ramme. Gjenstander, handlinger og replikker får en dypere betydning som forsterker tematikken.

Disse symbolene er alltid integrert i den realistiske handlingen - de fungerer også på et bokstavelig plan - men tilfører samtidig en poetisk dimensjon som løfter dramaene over det rent sosialrealistiske.

**Karakterenes kompleksitet:**

Ibsens karakterer er ikke enkle typer eller talsmenn for bestemte synspunkter. De er komplekse, selvmotsigende og levende. Selv «skurkene» har forståelige motiver, og selv «heltene» har feil og svakheter.

Denne psykologiske realismen var banebrytende og påvirket all senere karakterskildring i litteratur og teater.`,
    },
    {
      id: 'norsk-vg3-1-3-def-1',
      type: 'definition',
      title: 'Symboler i Ibsens dramaer',
      content: `**Viktige symboler og deres betydning:**

**Et dukkehjem:**
- *Juletræet:* Visner gjennom stykket - parallell til ekteskapets fasade
- *Dukkehjemmet:* Noras ufrie tilværelse
- *Maskeradekostymet:* Noras rolle som underholder
- *Tarantellaen:* Desperat dans mot døden
- *Dørsmellingen:* Bruddet, det nye livet

**Gengangere:**
- *Solen:* Livskraft, sannhet (ironisk i slutten)
- *Regnet:* Tungsinn, hemmeligheter
- *Barnehjemmet:* Fasaden som brenner ned
- *Gengangere:* Fortidens synder som forfølger

**Vildanden:**
- *Vildanden:* Hedvig, familien, livsløgnen
- *Loftet:* Illusjonens rom
- *Skogen:* Det autentiske livet de har mistet

**Hedda Gabler:**
- *Pistolene:* Makt, kontroll, død
- *Løvborgs manuskript:* «Barnet» Hedda ødelegger
- *General Gablers portrett:* Farens innflytelse

**Kjennetegn ved Ibsens symboler:**
- Fungerer på både bokstavelig og symbolsk plan
- Integrert i handlingen, ikke påklistret
- Utvikles gjennom stykket
- Forsterker, men erstatter ikke tematikken`,
    },
    {
      id: 'norsk-vg3-1-3-def-2',
      type: 'definition',
      title: 'Understrøm og undertekst',
      content: `**Understrøm** og **undertekst** er begreper som beskriver det som ligger under overflaten i dialogen.

**Undertekst:**
Det karakterene egentlig mener eller føler, men ikke sier direkte. Ibsens karakterer snakker ofte om hverdagslige ting mens det egentlige dramaet utspiller seg mellom linjene.

**Eksempel fra Et dukkehjem:**
Nora og Kristine snakker tilsynelatende om julegaver og husholdning, men underteksten handler om deres vidt forskjellige liv og valg.

**Understrøm:**
Den dypere tematiske strømningen som løper under handlingen. Selv om karakterene snakker om konkrete ting, handler dramaet egentlig om noe større.

**Teknikker:**
- Taushet og pauser
- Avbrutte setninger
- Skifte av tema
- Kroppsspråk (i sceneanvisninger)
- Ironi mellom det sagte og det mente

**Betydning:**
Denne teknikken gjør dialogene rike og flertydige. Publikum må «lese mellom linjene» og blir aktive medskapere av meningen.`,
    },
    {
      id: 'norsk-vg3-1-3-def-3',
      type: 'definition',
      title: 'Den vellagede strukturen',
      content: `**Den vellagede strukturen** (the well-made play) er en dramatisk form som Ibsen perfeksjonerte.

**Opprinnelse:**
Utviklet av franske dramatikere som Eugène Scribe på 1800-tallet. Ibsen lærte teknikken og foredle den til noe langt mer kunstnerisk.

**Strukturelementer:**

1. **Eksposisjon:**
   - Bakgrunnsinformasjon gis naturlig
   - Karakterer og relasjoner etableres
   - Frempek på det som skal komme

2. **Komplikasjon:**
   - Problemet introduseres
   - Konfliktnivået øker
   - Hemmeligheter trues

3. **Krise:**
   - Situasjonen er uholdbar
   - Valg må tas
   - Vendepunkt

4. **Klimaks:**
   - Konfrontasjon
   - Sannheten kommer frem
   - Høyeste spenningsnivå

5. **Oppløsning:**
   - Konsekvenser
   - Ny situasjon etableres
   - (Ofte åpen slutt hos Ibsen)

**Ibsens nyvinning:**
Mens den tradisjonelle vellagede strukturen ofte var mekanisk, fylte Ibsen den med psykologisk dybde og tematisk tyngde.`,
    },
    {
      id: 'norsk-vg3-1-3-example-1',
      type: 'example',
      title: 'Symbolanalyse: Vildanden',
      problem: `Analyser symbolbruken i Ibsens «Vildanden» (1884), med særlig fokus på vildanden selv.`,
      solution: `**Vildanden som symbol:**

Vildanden er stykkets sentrale symbol, og den har flere betydningslag:

**1. Hedvig:**
Den skadeskutte vildanden som lever på loftet, identifiserer seg med Hedvig. Begge er «reddet» fra sin naturlige tilværelse og lever i en kunstig virkelighet.

**2. Familien Ekdal:**
Hele familien lever som skadede fugler i sitt «falske» miljø. De har mistet kontakten med det autentiske livet.

**3. Livsløgnen:**
Vildanden representerer også livsløgnen som holder familien sammen. Relling advarer mot å «ta livsløgnen fra et gjennemsnitsmenneske».

**Loftet som symbol:**

Loftet der vildanden bor, er et kunstig naturlandskap med gamle juletrær og halvdøde kaniner. Det representerer:
- Illusjonens rom
- Flukten fra virkeligheten
- Den falske paradiset

**Dialektikken:**

Ibsen problematiserer sannhet vs. løgn. Gregers Werle vil avsløre sannheten og «redde» familien, men hans idealisme fører til tragedie. Kanskje trenger mennesker sine livsløgner?

**Åpen tolkning:**

Stykket gir ikke enkle svar. Er det bedre å leve i illusjon enn å konfronteres med en sannhet man ikke tåler? Ibsen overlater svaret til publikum.`,
    },
    {
      id: 'norsk-vg3-1-3-example-2',
      type: 'example',
      title: 'Dialoganalyse fra Et dukkehjem',
      problem: `Analyser følgende replikkveksling fra slutten av Et dukkehjem. Hva ligger i underteksten?

HELMER: [...] Du har ikke lenger kjærlighet til meg.
NORA: Nei, det har jeg ikke.
HELMER: Er det også forbi.
NORA: Ja, så er det.`,
      solution: `**Overflatenivå:**
En enkel konstatering av at kjærligheten er over. Torvalds spørsmål, Noras korte svar.

**Undertekstnivå:**

**Torvalds replikk:**
Han stiller det som et spørsmål, men tonen viser at han allerede aner svaret. Det er en desperat appell om å bli motsagt.

**Noras svar:**
De korte, definitive svarene markerer en total forandring. Den «snakkesalige lerkefuglen» er blitt et menneske med få, vektige ord.

**Det usagte:**
- Noras erkjennelse av at det hun trodde var kjærlighet, var underkastelse
- Torvalds manglende evne til å forstå hva som har skjedd
- Hele ekteskapets falskhets som nå er avslørt

**Stilistisk analyse:**
- Korte, avbrutte setninger
- Gjentakelse («Nei» - «Ja»)
- Kontrast til Noras tidligere livlige språk
- Pausene mellom replikkene (sceneanvisninger)

**Dramatisk funksjon:**
Denne korte utvekslingen oppsummerer hele stykkets tematikk: Nora har gått fra dukke til menneske, og ekteskapet avsløres som tomt.`,
    },
    {
      id: 'norsk-vg3-1-3-tip-1',
      type: 'tip',
      title: 'Analysemodell for Ibsen-drama',
      content: `**Sjekkliste for analyse av Ibsens dramaer:**

**1. Struktur:**
- Hvordan er stykket bygget opp?
- Hvilken rolle spiller fortiden?
- Hvor er vendepunktet?

**2. Karakterer:**
- Hva driver hovedpersonen?
- Hvilke konflikter har karakterene?
- Hvem utvikler seg, hvem er statiske?

**3. Tematikk:**
- Hvilke samfunnsproblemer tas opp?
- Hva er forholdet mellom individ og samfunn?
- Hvilke verdier settes mot hverandre?

**4. Symboler:**
- Hvilke symboler finnes i stykket?
- Hvordan utvikles de gjennom handlingen?
- Hva tilfører de tematisk?

**5. Dialog:**
- Hva sies mellom linjene?
- Hvordan avslører karakterene seg selv?
- Hvilken funksjon har taushet og pauser?

**6. Kontekst:**
- Hvordan reflekterer stykket sin samtid?
- Hva var kontroversielt?
- Hvorfor er det relevant i dag?`,
    },
    {
      id: 'norsk-vg3-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser symbolbruken i et Ibsen-drama.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et symbol fra Et dukkehjem, Gengangere eller Vildanden.',
            solution: 'F.eks. juletræet, dørsmellingen, solen, regnet, vildanden, loftet.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan symbolet fungerer på bokstavelig og symbolsk plan.',
            solution: 'Vis at symbolet er integrert i handlingen, men også har dypere betydning.',
          },
          {
            label: 'c',
            task: 'Hvordan forsterker symbolet stykkets tematikk?',
            solution: 'Koble symbolet til hovedtemaene i stykket.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Ibsens integrerte symbolbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør en dialoganalyse.',
        hints: ['Velg en kort scene fra et Ibsen-drama', 'Analyser både det som sies og det usagte', 'Hvordan karakteriserer dialogen rollene?'],
        solution: 'Analysen skal vise evne til å lese undertekst og forstå dialogens funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser strukturen i Et dukkehjem.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser eksposisjon, komplikasjon, krise, klimaks og oppløsning.',
            solution: 'Vis hvordan stykket følger den vellagede strukturen gjennom de tre aktene.',
          },
          {
            label: 'b',
            task: 'Hvordan brukes retrospektiv teknikk?',
            solution: 'Vis hvordan informasjon om fortiden (lånet, falskneriget) gradvis avdekkes.',
          },
        ],
        solution: 'Analysen skal demonstrere forståelse for dramatisk struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to Ibsen-karakterer.',
        hints: ['F.eks. Nora og Hedda, eller Nora og fru Alving', 'Hva er likt, hva er forskjellig?', 'Hvordan representerer de ulike løsninger på samme problem?'],
        solution: 'Sammenligningen skal vise evne til å se mønstre på tvers av verkene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.4 Bjørnstjerne Bjørnson
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_4: TextbookChapter = {
  id: 'norsk-vg3-1-4',
  courseId: 'norsk-vg3',
  chapterNumber: '1.4',
  title: 'Bjørnstjerne Bjørnson',
  description: 'Bjørnstjerne Bjørnsons liv og forfatterskap - dikteren, dramatikeren og samfunnsdebattanten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-1-4-intro',
      type: 'text',
      content: `## Bjørnstjerne Bjørnson - Norges ukronte konge

Bjørnstjerne Martinius Bjørnson (1832-1910) var i sin samtid den mest fremtredende kulturpersonligheten i Norge. Han var dikter, dramatiker, romanforfatter, avisredaktør, taler og samfunnsdebattant. Hans karisma og engasjement gjorde ham til en nasjonal lederskikkelse - «Norges ukronte konge» som han ofte ble kalt.

**Barndom og ungdom:**

Bjørnson ble født 8. desember 1832 i Kvikne i Østerdalen. Faren var prest, og familien flyttet til Nesset i Romsdal da Bjørnstjerne var fem år. Barndomsårene i det vakre vestlandslandskapet preget ham for livet.

Som ung var Bjørnson en karismatisk og energisk student som raskt ble kjent i Kristianias intellektuelle kretser. Han var med på å grunnlegge Det Norske Selskab og ble en sentral figur i datidens litterære miljø.

**Bondefortellingene:**

Bjørnsons gjennombrudd kom med bondefortellingene på 1850-tallet. «Synnøve Solbakken» (1857), «Arne» (1858) og «En glad Gut» (1860) skildret norsk bondeland med varme og idealisme. Disse fortellingene ble enormt populære og bidro til å definere et nasjonalt selvbilde.

Bondefortellingene var nasjonalromantiske i sin idealisering av det norske bondelivet, men inneholdt også realistiske elementer og psykologisk dybde som pekte fremover.

**Dramatikeren:**

Bjørnson skrev en rekke dramaer gjennom hele sitt liv. I 1850- og 60-årene dominerte historiske dramaer som «Mellem Slagene» (1857) og «Maria Stuart i Skotland» (1864). Men med det moderne gjennombruddet slo også Bjørnson inn på sosialrealistisk drama.

Hans viktigste samfunnsdramaer er:
- «En fallit» (1875) - om økonomisk krise og moralsk ansvar
- «Redaktøren» (1875) - om pressens makt og ansvar
- «Kongen» (1877) - kritikk av monarkiet
- «En hanske» (1883) - om seksualmoral og likestilling

**Samfunnsdebattanten:**

Bjørnson var utrættelig i sitt offentlige engasjement. Han reiste land og strand rundt og holdt foredrag om alt fra religion til folkeopplysning til kvinnesak. Hans taler trakk fulle hus, og hans mening ble søkt i enhver viktig samfunnsdebatt.

Særlig engasjerte han seg i:
- Unionsoppløsningen med Sverige
- Republikanisme
- Religiøs fritenkning
- Kvinners rettigheter
- Fredssaken
- Internasjonale rettferdighetssaker (Dreyfus-saken)

**Nobelprisen:**

I 1903 ble Bjørnson tildelt Nobelprisen i litteratur «som en hyllest til hans edle, storslagne og allsidige diktervirke, som alltid har utmerket seg både ved inspirasjonsrikdom og ved den sjeldne renhet i sin stil».

Han var den første nordmannen som mottok Nobelprisen.

**Nasjonalsangen:**

Bjørnson skrev teksten til «Ja, vi elsker dette landet» i 1859. Sangen ble offisiell nasjonalsang og er uløselig knyttet til den norske nasjonalfølelsen. Selv republikaneren Bjørnson skrev altså det mest nasjonalistiske diktet vi har.

Bjørnson døde i Paris 26. april 1910. Begravelsen i Kristiania ble en nasjonal begivenhet.`,
    },
    {
      id: 'norsk-vg3-1-4-def-1',
      type: 'definition',
      title: 'Bjørnstjerne Bjørnson (1832-1910)',
      content: `**Biografi i kortform:**

**Fødsel og oppvekst:**
- Født 8. desember 1832 i Kvikne
- Oppvokst i Nesset, Romsdal
- Prestesønn med privilegert bakgrunn

**Litterær karriere:**
- Bondefortellinger 1857-1860
- Historiske dramaer 1850-60-tallet
- Samfunnsdramaer 1870-80-tallet
- Lyrikk gjennom hele livet

**Hovedverk:**
- *Synnøve Solbakken* (1857)
- *En fallit* (1875)
- *En hanske* (1883)
- «Ja, vi elsker» (1859)

**Offentlig virke:**
- Teaterleder
- Avisredaktør
- Folketaler
- Internasjonal debattant

**Utmerkelser:**
- Nobelprisen i litteratur 1903
- Første nordmann med Nobelpris

**Død:**
- 26. april 1910 i Paris
- Statsbegravelse i Kristiania`,
    },
    {
      id: 'norsk-vg3-1-4-def-2',
      type: 'definition',
      title: 'Bondefortellingene',
      content: `**Bondefortellingene** er en samlebetegnelse på Bjørnsons noveller og korte romaner om norsk bondeliv fra 1850- og 60-tallet.

**Hovedverk:**
- *Synnøve Solbakken* (1857)
- *Arne* (1858)
- *En glad Gut* (1860)
- *Fiskerjenten* (1868)

**Kjennetegn:**
- Idyllisert skildring av bondelivet
- Vakker norsk natur
- Konflikter som løses i harmoni
- Kjærlighetshistorier
- Moralsk oppbyggelighet
- Enkel, poetisk stil

**Betydning:**
- Definerte et nasjonalt selvbilde
- Stor internasjonal suksess
- Påvirket senere bondediktning
- Dannet grunnlag for folkelesning

**Kritikk:**
Senere kritikere har pekt på at fortellingene idealiserer og forskjønner virkeligheten. De skildrer ikke de harde sidene ved bondelivet.`,
    },
    {
      id: 'norsk-vg3-1-4-example-1',
      type: 'example',
      title: 'Analyse: En hanske (1883)',
      problem: `Analyser Bjørnsons drama «En hanske» og dets behandling av dobbeltmoral.`,
      solution: `**Handling:**
Svava er forlovet med Alf. Hun oppdager at han har hatt et forhold til en annen kvinne før forlovelsen. Selv om dette var før de møttes, og selv om det var vanlig for menn, kan ikke Svava godta det. Hun kaster hansken i ansiktet hans og bryter forlovelsen.

**Tematikk:**

**1. Dobbeltmoral:**
Samfunnet aksepterte at menn hadde seksuelle erfaringer før ekteskapet, mens kvinner måtte være «rene». Bjørnson angriper denne dobbeltstandarden.

**2. Likestilling:**
Svava krever at samme moralske standard skal gjelde for begge kjønn. Enten må menn være like «rene» som kvinner, eller så må kvinner ha samme frihet som menn.

**3. Kvinnens rett til å velge:**
Svava nekter å godta det forventede. Hun har mot til å bryte med konvensjonene.

**Symbolet hansken:**
Hansken som Svava kaster, er et symbol på utfordringen hun kaster til samfunnet. Det er et ridderlig symbol som vendes mot mennene selv.

**Resepsjon:**
Stykket skapte voldsom debatt. Mange mente Svavas krav var urimelig og upraktisk. Andre hyllet det som et feministisk manifest.

**Bjørnson vs. Ibsen:**
Mens Ibsen gjerne lot spørsmålene stå åpne, var Bjørnson mer direkte i sitt budskap. Han var agitator mer enn kunstner i sine samfunnsdramaer.`,
    },
    {
      id: 'norsk-vg3-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Bjørnson og Ibsen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var likt i deres forfatterskap?',
            solution: 'Begge skrev samfunnskritiske dramaer, tok opp kvinnespørsmålet, kritiserte dobbeltmoral. Begge var sentrale i det moderne gjennombruddet.',
          },
          {
            label: 'b',
            task: 'Hva skilte dem?',
            solution: 'Ibsen var mer kunstnerisk subtil, Bjørnson mer direkte agitatorisk. Ibsen levde i utlandet, Bjørnson var aktiv i norsk offentlighet. Ibsen var pessimistisk, Bjørnson mer optimistisk.',
          },
          {
            label: 'c',
            task: 'Hvorfor regnes Ibsen som den «større» forfatteren i ettertiden?',
            solution: 'Ibsens psykologiske dybde, symbolikk og universelle temaer har holdt seg bedre. Bjørnsons agitasjon var mer tidsbundet.',
          },
        ],
        solution: 'De to var venner og rivaler som utfylte hverandre, men Ibsens kunstneriske kvaliteter vurderes høyere i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter Bjørnsons bondefortellinger.',
        hints: ['Er idealiseringen et problem?', 'Hvilken funksjon hadde fortellingene?', 'Hvordan passer de inn i nasjonalromantikken?'],
        solution: 'Diskusjonen bør belyse både de litterære kvalitetene og den ideologiske funksjonen fortellingene hadde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser «Ja, vi elsker» som nasjonalsang.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke nasjonale verdier fremheves?',
            solution: 'Historien, naturen, kampen for frihet, samholdet, kjærligheten til landet.',
          },
          {
            label: 'b',
            task: 'Hvordan bygger sangen nasjonal identitet?',
            solution: 'Ved å skape felles referanser, fremheve det unike ved Norge, og appellere til følelser.',
          },
        ],
        solution: 'Nasjonalsangen er et viktig symbol på nasjonsbyggingen på 1800-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.5 Alexander Kielland og Jonas Lie
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_5: TextbookChapter = {
  id: 'norsk-vg3-1-5',
  courseId: 'norsk-vg3',
  chapterNumber: '1.5',
  title: 'Alexander Kielland og Jonas Lie',
  description: 'De to prosamesterne fra det moderne gjennombruddet - eleganse og psykologisk dybde.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-1-5-intro',
      type: 'text',
      content: `## Kielland og Lie - «de fire stores» prosaikere

Mens Ibsen og Bjørnson primært var dramatikere, representerte Alexander Kielland og Jonas Lie prosakunsten i det moderne gjennombruddet. Sammen med Ibsen og Bjørnson utgjør de «de fire store» i norsk litteraturhistorie.

**Alexander Kielland (1849-1906):**

Kielland var en helt annen type forfatter enn Ibsen og Bjørnson. Han kom fra en velstående kjøpmannsfamilie i Stavanger og hadde ikke behøvd å skrive for å leve. Hans forfatterskap preges av eleganse, ironi og en skarp satirisk brodd.

Kielland var utdannet jurist, men ga opp advokaten for pennen. Hans noveller og romaner tok opp de samme temaene som gjennombruddets dramatikere - dobbeltmoral, klasseskiller, religiøs hykleri - men med en egen lett og spottende tone.

Hans mest kjente verk er:
- «Novelletter» (1879) - inkludert «Karen»
- «Garman & Worse» (1880)
- «Arbeidsfolk» (1881)
- «Skipper Worse» (1882)
- «Gift» (1883)

Kiellands styrke ligger i hans stilistiske eleganse og presise ironi. Han kunne dissekere borgerskapets hykleri med noen få velvalgte setninger. Samtidig hadde han dyp sympati med de undertrykte - tjenestepiker, arbeidere, fattige.

**Jonas Lie (1833-1908):**

Jonas Lie representerer en annen type realisme. Hans romaner er preget av psykologisk dybde og poetisk stemning snarere enn satirisk skarphet. Han var særlig opptatt av familieliv, kvinneskjebner og det indre livet.

Lie vokste opp i Tromsø og var sterkt preget av nordnorsk natur og folketro. Han var utdannet jurist og gikk konkurs som forretningsmann før han ble forfatter.

Hans viktigste verker er:
- «Den fremsynte» (1870)
- «Lodsen og hans hustru» (1874)
- «Familien paa Gilje» (1883)
- «Kommandørens døtre» (1886)
- «Trold» (1891-92)

Lies forfatterskap utviklet seg fra sjøfortellinger til psykologiske familieromaner. Han var særlig dyktig til å skildre kvinners indre liv og de uuttalte konfliktene i familier.

I sine siste år skrev Lie «Trold»-fortellingene, som kombinerer realisme med mystikk og eventyr. Disse fortellingene er blitt stående som noe av det mest særpregede i hans forfatterskap.`,
    },
    {
      id: 'norsk-vg3-1-5-def-1',
      type: 'definition',
      title: 'Alexander Kielland (1849-1906)',
      content: `**Bakgrunn:**
- Født 18. februar 1849 i Stavanger
- Velstående kjøpmannsfamilie
- Utdannet jurist, arbeidet som advokat
- Forlot jussen for litteraturen
- Senere borgermester i Stavanger

**Litterære kjennetegn:**
- Elegant, ironisk stil
- Skarp samfunnssatire
- Sympati med de undertrykte
- Kritikk av borgerlig hykleri
- Presist språk

**Hovedverk:**
- *Novelletter* (1879)
- *Garman & Worse* (1880)
- *Arbeidsfolk* (1881)
- *Skipper Worse* (1882)
- *Gift* (1883)

**Tematikk:**
- Klasseskiller
- Religiøs hykleri
- Skolesystemets problemer
- Dobbeltmoral
- Sosial urettferdighet

**Betydning:**
Kielland er regnet som en av Norges fremste prosaister. Hans stil har vært forbilde for senere forfattere.`,
    },
    {
      id: 'norsk-vg3-1-5-def-2',
      type: 'definition',
      title: 'Jonas Lie (1833-1908)',
      content: `**Bakgrunn:**
- Født 6. november 1833 i Hokksund
- Oppvokst i Tromsø
- Utdannet jurist
- Gikk konkurs som forretningsmann
- Levde av å skrive fra 1870

**Litterære kjennetegn:**
- Psykologisk dybde
- Poetisk stemning
- Fokus på familieliv
- Kvinneskildringer
- Kombinasjon av realisme og mystikk

**Hovedverk:**
- *Den fremsynte* (1870)
- *Lodsen og hans hustru* (1874)
- *Familien paa Gilje* (1883)
- *Kommandørens døtre* (1886)
- *Trold* (1891-92)

**Tematikk:**
- Familiekonflikter
- Kvinners livssituasjon
- Nordnorsk natur og kultur
- Det overnaturlige
- Psykologiske dybder

**Betydning:**
Lie var nyskapende i sine kvinneskildringer og psykologiske realisme. Hans «Trold»-fortellinger er blitt klassikere.`,
    },
    {
      id: 'norsk-vg3-1-5-example-1',
      type: 'example',
      title: 'Analyse: «Karen» av Alexander Kielland',
      problem: `Analyser novellen «Karen» (1879) og vis hvordan Kielland bruker ironi for å kritisere samfunnet.`,
      solution: `**Handling:**
Karen er en fattig tjenestepike som blir forført av en velstående mann. Hun blir gravid og mister stillingen. Uten støtte ender hun på gaten, og til slutt tar hun livet av barnet sitt - en handling som fører til at hun blir henrettet.

**Ironien:**

Kielland bruker gjennomgående ironi for å avsløre samfunnets hykleri:

1. **Kirken:**
Presten som skulle hjelpe Karen, er mer opptatt av å moralisere enn av praktisk hjelp. Han representerer en kristendom uten barmhjertighet.

2. **Overklassen:**
Mannen som forførte Karen, går fri. Han tilhører en klasse som ikke holdes ansvarlig for sine handlinger.

3. **Rettsvesenet:**
Karen dømmes til døden, mens den egentlige skylden ligger hos samfunnet som sviktet henne.

**Kiellands teknikk:**
- Nøkternt, tilbakeholdt språk
- Kontrast mellom tone og innhold
- Indirekte kritikk gjennom fremstillingen
- Leseren må selv trekke konklusjonen

**Betydning:**
Novellen er et angrep på hele det borgerlige samfunnets dobbeltmoral. De som burde hjelpe, svikter. De som er ansvarlige, går fri. Offeret straffes.

**Litterær kvalitet:**
Kiellands styrke ligger i det han ikke sier direkte. Ironien tvinger leseren til å tenke selv og trekke de moralske konklusjonene.`,
    },
    {
      id: 'norsk-vg3-1-5-example-2',
      type: 'example',
      title: 'Analyse: «Familien paa Gilje» av Jonas Lie',
      problem: `Analyser Jonas Lies roman «Familien paa Gilje» (1883) med fokus på kvinneskildringen.`,
      solution: `**Handling:**
Romanen skildrer en embetsmannsfamilie på landsbygda gjennom flere tiår. Fokus ligger på døtrenes skjebner - deres drømmer, begrensninger og valg.

**Kvinneskildringen:**

Lie skildrer ulike kvinneskjebner med psykologisk innsikt:

**Inger-Johanna:**
Den eldste datteren drømmer om noe mer enn et liv som gift kone på landet. Men mulighetene er få. Hun ender i et fornuftsekteskap som gir trygghet, men ikke lykke.

**Thinka:**
En mer livlig og opprørsk natur, men også hun må tilpasse seg forventningene.

**Fru Jæger (moren):**
Representerer den eldre generasjonen, preget av plikt og selvoppofrelse.

**Tematikk:**

1. **Kvinners begrensede muligheter:**
Døtrene har få andre valg enn ekteskap. Utdanning og selvstendighet er nesten umulig.

2. **Drømmer vs. virkelighet:**
Konflikten mellom det livet man drømmer om og det man faktisk kan oppnå.

3. **Tidens gang:**
Romanen viser hvordan tiden går og mulighetene snevres inn.

**Lies stil:**
- Indre monolog og tankereferat
- Stemningsskapende naturskildringer
- Detaljerte miljøskildringer
- Langsom, dvelende fortelling

**Betydning:**
Romanen er et viktig dokument over kvinners livssituasjon på 1800-tallet, fortalt med sympati og psykologisk dybde.`,
    },
    {
      id: 'norsk-vg3-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Kielland og Lies stil.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner Kiellands ironi?',
            solution: 'Kielland bruker en tilbakeholdt, elegant tone som kontrasterer innholdet. Han forteller uten å moralisere direkte, men lar leseren trekke konklusjonene.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller Lies psykologiske realisme seg?',
            solution: 'Lie går dypt inn i karakterenes indre liv. Han skildrer tanker, følelser og uuttalte konflikter med poetisk innlevelse.',
          },
        ],
        solution: 'Kielland var satiriker, Lie var psykolog. Begge var mestere i sine former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les novellen «Karen» og skriv en analyse.',
        hints: ['Hvordan bruker Kielland ironi?', 'Hvem er egentlig skyldig?', 'Hva kritiserer novellen?'],
        solution: 'Analysen bør vise forståelse for Kiellands ironiske teknikk og samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter «de fire stores» betydning for norsk litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor kalles de «de fire store»?',
            solution: 'De dominerte norsk litteratur i det moderne gjennombruddet og løftet den til internasjonalt nivå.',
          },
          {
            label: 'b',
            task: 'Er denne kanondannelsen problematisk?',
            solution: 'Kanon kan utelate andre viktige stemmer, særlig kvinner. Men de fire store hadde utvilsomt stor litterær betydning.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over kanondannelse og litteraturhistorieskriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.6 Amalie Skram og kvinneperspektivet
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_1_6: TextbookChapter = {
  id: 'norsk-vg3-1-6',
  courseId: 'norsk-vg3',
  chapterNumber: '1.6',
  title: 'Amalie Skram og kvinneperspektivet',
  description: 'Amalie Skram som naturalistisk forfatter og de kvinnelige stemmene i gjennombruddet.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-1-6-intro',
      type: 'text',
      content: `## Amalie Skram og de kvinnelige stemmene

Mens «de fire store» dominerte det litterære landskapet, fantes det andre viktige stemmer i det moderne gjennombruddet - ikke minst kvinnelige forfattere som skrev fra egne erfaringer. Amalie Skram (1846-1905) er den fremste av disse og regnes i dag som en av periodens viktigste forfattere.

**Amalie Skram - liv og forfatterskap:**

Amalie Alver ble født i Bergen 22. august 1846. Hun vokste opp i en velstående familie, men livet skulle by på store prøvelser. Som 17-åring ble hun giftet bort til sjøkapteinen Bernt Ulrik August Müller. Ekteskapet var ulykkelig, og Amalie led av depresjoner. Etter skilsmissen i 1882 giftet hun seg med den danske forfatteren Erik Skram.

Amalie Skrams forfatterskap er preget av hennes egne erfaringer. Hun skrev med sjokkerende ærlighet om kvinners situasjon - tvungne ekteskap, seksualitet, barnefødsel, sykdom og galskap. Ingen hadde skrevet så uforblommet om disse temaene før.

**Hovedverk:**

- **Constance Ring** (1885): Roman om et ungt ektepar og kvinnens manglende rett til egne følelser.
- **Lucie** (1888): Om en kvinne som utfordrer seksualnormene.
- **Hellemyrsfolket** (1887-1898): Naturalistisk romansyklus i fire bind.
- **Professor Hieronimus** og **Paa St. Jørgen** (1895): Selvbiografiske romaner om innleggelse på sinnssykehus.

**Naturalismen:**

Skram regnes som Norges fremste naturalist. Hun skilte seg fra de andre gjennombruddsforfatterne ved å følge naturalismens program mer konsekvent - med fokus på arv og miljø som determinerende faktorer.

Særlig i «Hellemyrsfolket» er dette tydelig. Over fire generasjoner følger vi hvordan arvelig belastning og sosialt miljø former menneskenes skjebner. Romanserien er et dystert bilde av hvordan fattigdom og alkoholisme går i arv.

**Andre kvinnelige forfattere:**

Amalie Skram var ikke alene. Andre viktige kvinnelige stemmer inkluderer:

- **Camilla Collett** (1813-1895): Pioneren som med «Amtmandens Døtre» (1854-55) innledet realismen i Norge.
- **Aasta Hansteen** (1824-1908): Forfatter og kvinnesaksforkjemper.
- **Magdalene Thoresen** (1819-1903): Dramatiker og novellist.

Disse kvinnene skrev ofte fra egne erfaringer og bidro med perspektiver som de mannlige forfatterne ikke kunne gi.`,
    },
    {
      id: 'norsk-vg3-1-6-def-1',
      type: 'definition',
      title: 'Amalie Skram (1846-1905)',
      content: `**Biografi:**
- Født 22. august 1846 i Bergen
- Gift med sjøkapteinen Müller 1863
- Skilsmisse 1882 etter ulykkelig ekteskap
- Gift med Erik Skram 1884
- Innlagt på sinnssykehus 1894
- Døde 15. mars 1905 i København

**Forfatterskap:**
- Debuterte med «Madam Høiers Leiefolk» (1882)
- Gjennombrudd med «Constance Ring» (1885)
- Naturalistisk hovedverk «Hellemyrsfolket» (1887-98)
- Selvbiografiske sykehusskildringer (1895)

**Litterære kjennetegn:**
- Naturalistisk determinisme
- Ærlig skildring av seksualitet
- Kvinneperspektiv
- Psykologisk dybde
- Sosial kritikk

**Tematikk:**
- Tvungne ekteskap
- Kvinners begrensede handlingsrom
- Arv og miljø
- Galskap og sykdom
- Klasseskiller

**Betydning:**
Skram er i dag anerkjent som en av periodens viktigste forfattere. Hun skrev om tabubelagte temaer med en ærlighet som var sjokkerende for samtiden.`,
    },
    {
      id: 'norsk-vg3-1-6-def-2',
      type: 'definition',
      title: 'Naturalismen',
      content: `**Naturalismen** er en litterær retning som oppsto i Frankrike på 1870-tallet og spredde seg til resten av Europa.

**Filosofisk grunnlag:**
- Determinisme: Mennesker styres av arv og miljø
- Positivisme: Vitenskapelig observasjon
- Darwinisme: Evolusjon og naturlig utvalg
- Materialisme: Avvisning av det åndelige

**Litterære kjennetegn:**
- Objektiv, «vitenskapelig» fremstilling
- Detaljerte miljøskildringer
- Fokus på lavere sosiale lag
- Temaer som sykdom, alkoholisme, kriminalitet
- Pessimistisk menneskesyn
- Determinerte karakterer

**Sentrale forfattere:**
- Émile Zola (Frankrike) - bevegelsens grunnlegger
- August Strindberg (Sverige)
- Herman Bang (Danmark)
- Amalie Skram (Norge)

**Forskjell fra realismen:**
Naturalismen går lenger enn realismen i sin determinisme og i sin interesse for de mørkeste sidene ved tilværelsen.

**Kritikk:**
Naturalismen ble kritisert for pessimisme, for å fokusere på det stygge, og for et deterministisk menneskesyn som ikke ga rom for fri vilje.`,
    },
    {
      id: 'norsk-vg3-1-6-example-1',
      type: 'example',
      title: 'Analyse: Hellemyrsfolket',
      problem: `Analyser Amalie Skrams romansyklus «Hellemyrsfolket» (1887-1898) som naturalistisk verk.`,
      solution: `**Verkene:**
Romansyklusen består av fire bind:
1. «Sjur Gabriel» (1887)
2. «To Venner» (1887)
3. «S.G. Myre» (1890)
4. «Afkom» (1898)

**Handling:**
Vi følger slekten Hellemyr gjennom fire generasjoner, fra fattiggården til et mislykket forsøk på sosial oppstigning. Arv og miljø forfølger slekten - alkoholisme, fattigdom og moralsk forfall.

**Naturalistiske trekk:**

1. **Determinisme:**
Karakterene er fanget av sin arv. Sjur Gabriels svakheter går i arv til sønnene og videre. Det finnes ingen vei ut.

2. **Miljøets makt:**
Fattigdommen på Hellemyrsfolk former menneskene. De sosiale forholdene tillater ikke utvikling.

3. **«Vitenskapelig» observasjon:**
Skram skildrer med nøktern presisjon. Hun moraliserer ikke, men fremstiller.

4. **Det mørke stoffet:**
Alkoholisme, vold, seksualitet, fattigdom - temaer som var tabu i annen litteratur.

**Kvinneskildringen:**
Kvinnene i serien lider under dobbelt undertrykkelse - av klassen og av kjønnet. Skram skildrer deres situasjon med innsikt fra innsiden.

**Litterær kvalitet:**
Selv om stoffet er mørkt, er det formidlet med stor kunstnerisk kraft. Miljøskildringene er levende, karakterene troverdige.

**Resepsjon:**
Verket ble anerkjent av kritikere, men var for mørkt for det brede publikum. I dag regnes det som et hovedverk i norsk naturalisme.`,
    },
    {
      id: 'norsk-vg3-1-6-example-2',
      type: 'example',
      title: 'Analyse: Professor Hieronimus',
      problem: `Analyser Amalie Skrams roman «Professor Hieronimus» (1895) som selvbiografisk skildring av psykiatrien.`,
      solution: `**Bakgrunn:**
I 1894 ble Amalie Skram innlagt på Kommunehospitalets 6te afdeling i København, en lukket psykiatrisk avdeling. Opplevelsen sjokkerte henne, og hun bearbeidet den i to romaner.

**Handling:**
Else Kant legges inn på sinnssykehus av sin ektemann. Der møter hun den autoritære Professor Hieronimus, som behandler henne som et objekt. Romanen skildrer fornedrelsen, maktmisbruket og kampen for å bli hørt.

**Tematikk:**

1. **Psykiatrien som maktapparat:**
Legene har total makt over pasientene. Diagnosen «hysterisk» brukes for å ugyldiggjøre kvinners opplevelser.

2. **Kvinners stemme:**
Else kjemper for å bli trodd. Hennes protester tolkes som symptomer på sykdom.

3. **Ektemannens svik:**
Else ble innlagt av mannen. Romanen problematiserer menns makt over kvinners kropp og sinn.

4. **Systemkritikk:**
Skram avslører et system som krenker menneskeverd og mangler empati.

**Selvbiografisk lesning:**
Romanen er basert på Skrams egne opplevelser. Den vakte oppsikt og bidro til debatt om psykiatriens metoder.

**Litterær betydning:**
Romanen er et tidlig eksempel på pasientperspektivet i litteraturen. Den utfordrer medisinens autoritet og gir stemme til de stemmeløse.

**Aktualitet:**
Temaene - maktmisbruk i helsetjenesten, kvinners troverdighet, psykiatriens metoder - er fortsatt aktuelle.`,
    },
    {
      id: 'norsk-vg3-1-6-tip-1',
      type: 'tip',
      title: 'Camilla Collett - forløperen',
      content: `**Camilla Collett (1813-1895)** regnes som den første realistiske romanforfatteren i Norge.

Med «Amtmandens Døtre» (1854-55) skrev hun en roman som tok opp kvinners situasjon - tvungne ekteskap, manglende selvbestemmelse, følelsenes undertrykkelse.

Romanen var banebrytende:
- Første norske tendensroman
- Kritiserte ekteskapskonvensjonene
- Ga kvinnene stemme
- Påvirket senere forfattere

Collett var søster av Henrik Wergeland og tilhørte en intellektuell elite. Hennes egen ulykkelige kjærlighetshistorie preget romanen.

Hun ble også en viktig essayist og kvinnesaksforkjemper i sine senere år.`,
    },
    {
      id: 'norsk-vg3-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar naturalismens kjennetegn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med determinisme i litteraturen?',
            solution: 'Determinisme betyr at menneskers liv er bestemt av arv og miljø. De har lite fri vilje - skjebnen er gitt av bakgrunn og omstendigheter.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller naturalismen seg fra realismen?',
            solution: 'Naturalismen er mer konsekvent i sin determinisme, mer interessert i de mørke sidene av livet, og mer «vitenskapelig» i sin tilnærming.',
          },
          {
            label: 'c',
            task: 'Hvorfor var naturalismen kontroversiell?',
            solution: 'Den ble kritisert for pessimisme, for å dvele ved det stygge og ubehagelige, og for et menneskesyn som nektet fri vilje og moralsk ansvar.',
          },
        ],
        solution: 'Naturalismen representerte en radikalisering av realismen med fokus på arv, miljø og livets skyggesider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser et utdrag fra Amalie Skram.',
        hints: ['Velg en scene fra Hellemyrsfolket eller Professor Hieronimus', 'Se etter naturalistiske trekk', 'Analyser kvinneperspektivet'],
        solution: 'Analysen bør identifisere naturalistiske virkemidler og vise forståelse for Skrams kvinneperspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor kvinnelige forfattere lenge ble utelatt fra «kanon».',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor ble «de fire store» bare menn?',
            solution: 'Litteraturhistorien ble skrevet av menn som vektla mannlige forfattere. Kvinners erfaringer ble ikke regnet som universelle.',
          },
          {
            label: 'b',
            task: 'Hva har endret seg i synet på Amalie Skram?',
            solution: 'Hun er nå anerkjent som en av periodens viktigste forfattere. Feministisk litteraturforskning har løftet frem hennes bidrag.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over kjønn og kanondannelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign Ibsens og Skrams behandling av kvinnespørsmålet.',
        hints: ['Ibsen skrev om kvinner, Skram skrev som kvinne', 'Forskjell i perspektiv?', 'Hva kan Skram fortelle som Ibsen ikke kan?'],
        solution: 'Sammenligningen bør vise forståelse for hvordan kjønn påvirker perspektiv og fremstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: NATURALISME
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Naturalismens kjennetegn
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_1: TextbookChapter = {
  id: 'norsk-vg3-2-1',
  courseId: 'norsk-vg3',
  chapterNumber: '2.1',
  title: 'Naturalismens kjennetegn',
  description: 'Naturalismen som litterær retning - teori og praksis.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-2-1-intro',
      type: 'text',
      content: `## Naturalismen - litteratur som vitenskap

Naturalismen var en litterær bevegelse som oppsto i Frankrike på 1870-tallet og spredte seg raskt til resten av Europa. Den representerte en radikalisering av realismen, med sterkere vekt på vitenskapelig metode og deterministisk menneskesyn.

**Émile Zola og det naturalistiske programmet:**

Den franske forfatteren Émile Zola (1840-1902) var naturalismens fremste teoretiker og praktiker. I essayet «Le roman expérimental» (Den eksperimentelle roman, 1880) formulerte han bevegelsens program.

Zola argumenterte for at romanen skulle være et vitenskapelig eksperiment. Forfatteren var som en forsker som studerte mennesker under kontrollerte forhold. Ved å plassere karakterer med bestemte arvelige egenskaper i bestemte miljøer, kunne man observere hvordan de utviklet seg - akkurat som i et laboratorium.

Dette menneskesyn var dypt preget av Darwins evolusjonslære og Taines determinisme. Mennesket var et biologisk vesen styrt av instinkter, drifter og arvelige egenskaper. Det sosiale miljøet formet individet ytterligere. Fri vilje var i beste fall en illusjon.

**Naturalismens filosofiske grunnlag:**

1. **Determinisme:** Alt som skjer, har en årsak. Menneskers handlinger bestemmes av arv og miljø.

2. **Positivisme:** Bare det som kan observeres empirisk, har gyldighet. Metafysikk og religion avvises.

3. **Materialisme:** Virkeligheten er materiell. Mennesket er et biologisk vesen, ikke en åndelig skapning.

4. **Darwinisme:** Mennesket er et dyr underlagt evolusjonens lover. Kampen for tilværelsen preger også det sosiale liv.

**Litterære konsekvenser:**

Naturalismen førte til en ny type litteratur:

- **Stoff:** Forfatterne interesserte seg for de lavere sosiale lag, for fattigdom, sykdom, kriminalitet, alkoholisme, prostitusjon. De søkte det «stygge» som realismen hadde unngått.

- **Stil:** Fremstillingen skulle være objektiv, nøktern, «vitenskapelig». Forfatteren skulle observere og rapportere, ikke moralisere.

- **Karakterer:** Personene i naturalistiske verk er determinerte - fanget av sin arv og sitt miljø. De har lite handlingsrom.

- **Handling:** Plottet følger ofte en nedadgående kurve. Karakterene synker dypere og dypere, uten mulighet for frelse.

**Kritikk av naturalismen:**

Naturalismen ble heftig kritisert:

- For pessimisme og mørkt menneskesyn
- For å dvele ved det stygge og ubehagelige
- For determinisme som utelukker moralsk ansvar
- For å redusere mennesket til et dyr

Men forfatterne selv mente de avslørte sannheten om menneskelig tilværelse - en sannhet som borgerskapet helst ville skjule.`,
    },
    {
      id: 'norsk-vg3-2-1-def-1',
      type: 'definition',
      title: 'Émile Zola (1840-1902)',
      content: `**Émile Zola** var en fransk forfatter som regnes som naturalismens grunnlegger.

**Liv:**
- Født i Paris 1840
- Journalist og kritiker før forfatter
- Engasjert i Dreyfus-saken («J'accuse», 1898)
- Døde 1902 (trolig ulykkestilfelle)

**Hovedverk:**
«Les Rougon-Macquart» - romansyklus i 20 bind (1871-1893) som følger en slekt gjennom flere generasjoner. Mest kjent:
- *L'Assommoir* (Fellen, 1877)
- *Nana* (1880)
- *Germinal* (1885)

**Teoretiske skrifter:**
- «Le roman expérimental» (1880)
- «Les romanciers naturalistes» (1881)

**Litterære kjennetegn:**
- Omfattende research
- Detaljerte miljøskildringer
- Fokus på arv og miljø
- Store romanserier

**Betydning:**
Zola definerte naturalismen som bevegelse og inspirerte forfattere over hele Europa, inkludert Amalie Skram i Norge.`,
    },
    {
      id: 'norsk-vg3-2-1-def-2',
      type: 'definition',
      title: 'Den eksperimentelle roman',
      content: `**«Le roman expérimental»** (Den eksperimentelle roman) er Émile Zolas programskrift for naturalismen fra 1880.

**Hovedargument:**
Romanen skal være et vitenskapelig eksperiment. Forfatteren er som en forsker som:
1. Observerer virkeligheten
2. Samler data om mennesker og miljøer
3. Setter opp et «eksperiment» (romanens handling)
4. Observerer utfallet

**Metaforen:**
Som fysiologen studerer kroppen, skal romanforfatteren studere menneskets psykologi og sosiale liv. Litteraturen blir en form for samfunnsvitenskap.

**Konsekvenser:**
- Forfatteren skal være objektiv observatør
- Karakterenes handlinger følger av arv og miljø
- Moralisering unngås
- Research er viktig

**Kritikk:**
Teorien ble kritisert for å være mekanistisk og for å ignorere forskjellen mellom kunst og vitenskap. I praksis var Zolas romaner mer kunstneriske enn teorien tilsa.

**Betydning:**
Selv om teorien var overdrevet, påvirket den generasjoner av forfattere og førte til økt fokus på sosiale forhold i litteraturen.`,
    },
    {
      id: 'norsk-vg3-2-1-def-3',
      type: 'definition',
      title: 'Arv og miljø',
      content: `**Arv og miljø** er de to hovedfaktorene som ifølge naturalismen bestemmer menneskers liv og handlinger.

**Arv (hérédité):**
- Genetiske egenskaper nedarvet fra foreldre
- Både fysiske og psykiske trekk
- Inkluderer «sykdommer» som alkoholisme (ifølge datidens teori)
- Determinerer individets grunnleggende karakter

**Miljø (milieu):**
- Sosiale forhold individet vokser opp i
- Klasse, økonomi, geografi
- Familie, venner, arbeidsplass
- Former individet ytterligere

**Determinisme:**
Kombinasjonen av arv og miljø bestemmer hvordan mennesket blir. Fri vilje er sterkt begrenset eller ikke-eksisterende.

**I litteraturen:**
- Karakterenes skjebne er gitt fra starten
- Ofte nedadgående kurve
- Forsøk på å bryte ut mislykkes
- Tragedien er uunngåelig

**Moderne perspektiv:**
Vi vet i dag at forholdet mellom arv og miljø er mer komplekst enn naturalismen antok. Epigenetikk viser at miljø påvirker hvordan gener uttrykkes, og mennesker har mer handlingsrom enn deterministene mente.`,
    },
    {
      id: 'norsk-vg3-2-1-example-1',
      type: 'example',
      title: 'Naturalisme i praksis: Zolas «Germinal»',
      problem: `Analyser Zolas roman «Germinal» (1885) som naturalistisk verk.`,
      solution: `**Handling:**
Romanen følger gruvearbeideren Étienne Lantier som kommer til en gruveby i Nord-Frankrike. Han blir bevisst arbeidernes elendige kår og leder en streik som ender i tragedie.

**Naturalistiske trekk:**

1. **Arv:**
Étienne tilhører Rougon-Macquart-familien og bærer på en arvelig tilbøyelighet til vold (han har «le coup de folie»). Denne arven spiller inn i handlingen.

2. **Miljø:**
Zola skildrer gruvemiljøet med imponerende detalj - basert på omfattende research. Fattigdommen, sulten, de farlige arbeidsforholdene.

3. **Kollektiv skjebne:**
Romanen handler ikke bare om individer, men om en hel klasse. Gruvearbeiderne er fanget av sitt miljø.

4. **Nedadgående kurve:**
Streiken mislykkes. Mange dør. Étienne overlever, men ingenting er egentlig forandret.

**Symbolikk:**
Tittelen «Germinal» refererer til vårens spiringsmåned i den franske revolusjonære kalenderen. Til tross for tragedien finnes håp om at frøene som er sådd, vil spire.

**Sosial kritikk:**
Romanen er et kraftig angrep på kapitalismen og dens utbytting av arbeiderne. Zola viser systemets brutalitet uten å moralisere direkte.

**Litterær kvalitet:**
Trass i det teoretiske programmet er «Germinal» et sterkt kunstnerisk verk med minneverdige karakterer og gripende scener.`,
    },
    {
      id: 'norsk-vg3-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign realisme og naturalisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de to retningene felles?',
            solution: 'Begge vil skildre virkeligheten troverdig. Begge er opptatt av samtidsproblemer. Begge avviser romantikkens idealisering.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Naturalismen er mer deterministisk, mer interessert i arv og miljø, mer fokusert på de mørke sidene av livet, og mer «vitenskapelig» i sin tilnærming.',
          },
        ],
        solution: 'Naturalismen kan ses som en radikalisering av realismen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter naturalismens menneskesyn.',
        hints: ['Er mennesket fritt eller determinert?', 'Hva med moralsk ansvar?', 'Er naturalismen pessimistisk?'],
        solution: 'Diskusjonen bør belyse spenningen mellom determinisme og fri vilje, og reflektere over naturalismens kritikere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Vurder Zolas teori om «den eksperimentelle roman».',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er styrken i teorien?',
            solution: 'Den oppfordrer til research, observasjon og presisjon. Den retter fokus mot sosiale forhold.',
          },
          {
            label: 'b',
            task: 'Hva er svakhetene?',
            solution: 'Litteratur er ikke vitenskap. Forfatteren skaper, observerer ikke bare. Teorien er mekanistisk og ignorerer kunstens egenart.',
          },
        ],
        solution: 'Teorien var nyttig som programerklæring, men beskriver ikke fullt ut hva litteratur er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.2 Determinisme og arv/miljo
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_2: TextbookChapter = {
  id: 'norsk-vg3-2-2',
  courseId: 'norsk-vg3',
  chapterNumber: '2.2',
  title: 'Determinisme og arv/miljo',
  description: 'Det naturalistiske menneskesynet - hvordan arv og miljo former individet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-2-2-intro',
      type: 'text',
      content: `## Determinisme - mennesket som produkt

Determinismen er den filosofiske posisjonen som hevder at alle hendelser, inkludert menneskelige handlinger, er bestemt av foregaende arsaker. I naturalismen ble denne tankegangen anvendt pa litteraturen med fokus pa arv og miljo som de avgjorende faktorene.

**Den vitenskapelige bakgrunnen:**

Naturalismens determinisme var sterkt pavirket av samtidige vitenskapelige teorier:

1. **Charles Darwin (1809-1882):** Evolusjonslaren viste at mennesket var et dyr blant andre dyr, underlagt naturens lover. Kampen for tilvarelsen preget ogsa det sosiale livet.

2. **Hippolyte Taine (1828-1893):** Den franske filosofen hevdet at alle kulturelle fenomener kunne forklares ut fra tre faktorer: rase, miljo og oyeblikk (historisk kontekst).

3. **Claude Bernard (1813-1878):** Fysiologen demonstrerte hvordan vitenskapelig metode kunne anvendes pa biologiske fenomener. Zola tok ham som forbilde for «den eksperimentelle roman».

**Arv i naturalismen:**

Naturalismens forfester forsto arv i lys av datidens vitenskapelige teorier - som i dag anses som foreldet:

- **Degenerasjon:** Ideen om at familier kunne «degenerere» over generasjoner, med tiltagende sykdom og moralsk forfall
- **Arvelig alkoholisme:** Alkoholisme ble ansett som arvelig, ikke primært som sosial eller psykologisk betinget
- **«Dårlig blod»:** Mentale lidelser, kriminell atferd og moralske svakheter ble antatt a ga i arv

Disse ideene virker i dag uvitenskapelige, men de var allment aksepterte i samtiden og preget litteraturen sterkt.

**Miljo i naturalismen:**

Miljoet var den andre determinerende faktoren:

- Sosial klasse
- Okonomiske forhold
- Geografisk plassering
- Familie og oppvekst
- Arbeidsforhold

Naturalismens forfattere var noyaktige i sine miljoskildringer. De drev research, besoke arbeidsplasser og fattigkvarterer, og dokumenterte forholdene med journalistisk grundighet.

**Konsekvenser for litteraturen:**

Det deterministiske menneskesynet fikk flere litteraere konsekvenser:

1. **Karakterene:** Personene i naturalistiske verk er «produkter» av sin arv og sitt miljo. De har begrenset evne til a forandre sin skjebne.

2. **Handlingen:** Plottet folger ofte en nedadgaende kurve. Karakterene synker dypere og dypere, som om de trekkes ned av en uunngaelig kraft.

3. **Tonen:** Forfatteren holder seg tilbake, moraliserer ikke, men observerer og rapporterer. Medfohelse er tilstede, men dommen overlates til leseren.

4. **Utfallet:** Forsok pa a bryte ut av determinismen mislykkes som regel. Tragedien er uunngaelig.`,
    },
    {
      id: 'norsk-vg3-2-2-def-1',
      type: 'definition',
      title: 'Determinisme',
      content: `**Determinisme** er den filosofiske posisjonen som hevder at alle hendelser er arsaksbestemt.

**I filosofien:**
- Hard determinisme: Alt er bestemt, fri vilje er en illusjon
- Myk determinisme (kompatibilisme): Determinisme og fri vilje kan forenes
- Indeterminisme: Ikke alt er bestemt, tilfeldigheter finnes

**I naturalismen:**
Naturalismens forfattere abonnerte pa en form for hard determinisme anvendt pa menneskelivet:
- Arv bestemmer grunnleggende karakter
- Miljo former individets utvikling
- Handlinger folger nodvendig av disse faktorene
- Moralske valg er egentlig illusjoner

**Kritikk:**
- Undergraver moralsk ansvar
- Pessimistisk og desillusjonerende
- For forenklet syn pa mennesket
- Ignorerer bevissthetens rolle

**Moderne perspektiv:**
Dagens vitenskap viser at forholdet mellom gener og miljo er mer komplekst enn naturalismen antok. Epigenetikk og nevroplastisitet demonstrerer at mennesker har storre handlingsrom enn deterministene mente.`,
    },
    {
      id: 'norsk-vg3-2-2-def-2',
      type: 'definition',
      title: 'Degenerasjonslaren',
      content: `**Degenerasjonslaren** var en pseudovitenskapelig teori som var utbredt pa 1800-tallet og sterkt pavirket naturalismen.

**Hovedideer:**
- Familier og samfunn kunne «degenerere» over generasjoner
- Negative egenskaper ble forsterket gjennom arv
- Alkoholisme, galskap og kriminalitet var arvelige
- Degenerasjonen kunne ikke reverseres

**Tegn pa degenerasjon:**
- Mentale lidelser
- Alkohol- og narkotikamisbruk
- Kriminell atferd
- Fysiske avvik
- «Moralsk svakhet»

**I litteraturen:**
Mange naturalistiske verk skildrer degenerasjon over generasjoner:
- Zolas «Les Rougon-Macquart»
- Skrams «Hellemyrsfolket»
- Strindbergs dramaer

**Kritikk og fall:**
Teorien er i dag fullstendig avvist. Den bygde pa feilaktig forstaelse av arvelighet og ble misbrukt til a rettferdiggjore sosial ulikhet og eugenikk. Men dens innflytelse pa litteraturen er fortsatt synlig.`,
    },
    {
      id: 'norsk-vg3-2-2-example-1',
      type: 'example',
      title: 'Arv og miljo i Hellemyrsfolket',
      problem: `Analyser hvordan arv og miljo fungerer som determinerende faktorer i Amalie Skrams «Hellemyrsfolket».`,
      solution: `**Arvens rolle:**

Gjennom de fire bindene folger vi hvordan negative egenskaper gar i arv:

- **Sjur Gabriel:** Svak karakter, drikking, manglende viljestyrke
- **Sennene:** Arver farens svakheter, forsterket gjennom generasjonene
- **Sivert:** Forsek pa sosial oppstigning, men arven innhenter ham
- **Severin (Afkom):** Den endelige degenerasjonen

**Miljoets rolle:**

Fattigdommen pa Hellemyrsfolk former menneskene:
- Materielle kår som umuliggjor utvikling
- Manglende utdanning og muligheter
- Sosialt stigma som forfølger familien
- Ingen vei ut av fattigdommen

**Determinismen i praksis:**

Skram viser hvordan arv og miljo sammen skaper en ubrytelig sirkel:
- Dårlige kår forer til dårlige valg
- Dårlige valg forsterker de dårlige karene
- Barna arver bade foreldrenes svakheter og deres sosiale posisjon

**Skrams perspektiv:**

Selv om Skram følger det naturalistiske programmet, ligger det sympati i fremstillingen. Hun viser at karakterene er ofre for krefter de ikke kan kontrollere. Ansvaret ligger like mye hos samfunnet som hos individene.`,
    },
    {
      id: 'norsk-vg3-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter determinismens menneskesyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er fordelene med et deterministisk perspektiv pa mennesket?',
            solution: 'Det oppfordrer til forstaelse fremfor fordommelse. Det retter fokus mot sosiale arsaker til problemer. Det kan fore til reformer.',
          },
          {
            label: 'b',
            task: 'Hva er problemene med determinismen?',
            solution: 'Den undergraver moralsk ansvar. Den kan fore til fatalisme. Den ignorerer menneskets evne til forandring.',
          },
        ],
        solution: 'Determinismen reiser fundamentale sporsmål om menneskets natur og frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign datidens og dagens forstaelse av arv.',
        hints: ['Hva mente naturalismens forfattere med arv?', 'Hva vet vi i dag om genetikk?', 'Er alkoholisme arvelig?'],
        solution: 'Sammenligningen bor vise hvordan vitenskapelig forstaelse har utviklet seg siden naturalismen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser et naturalistisk verk med fokus pa arv og miljo.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan fremstilles arv i verket?',
            solution: 'Identifiser hvilke egenskaper som presenteres som arvelige.',
          },
          {
            label: 'b',
            task: 'Hvordan pavirker miljoet karakterene?',
            solution: 'Analyser de sosiale og materielle forholdene og deres konsekvenser.',
          },
          {
            label: 'c',
            task: 'Har karakterene noen mulighet til a unnslippe determinismen?',
            solution: 'Vurder om verket gir rom for fri vilje eller handlingsrom.',
          },
        ],
        solution: 'Analysen skal vise forstaelse for hvordan naturalismen fremstiller mennesket som produkt av arv og miljo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.3 Amalie Skram: Hellemyrsfolket
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_3: TextbookChapter = {
  id: 'norsk-vg3-2-3',
  courseId: 'norsk-vg3',
  chapterNumber: '2.3',
  title: 'Amalie Skram: Hellemyrsfolket',
  description: 'Dybdestudie av Amalie Skrams naturalistiske hovedverk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-2-3-intro',
      type: 'text',
      content: `## Hellemyrsfolket - Norges fremste naturalistiske romansyklus

«Hellemyrsfolket» (1887-1898) er Amalie Skrams hovedverk og regnes som den fremste naturalistiske romansyklusen i norsk litteratur. Over fire bind følger vi en fattig slekt gjennom fire generasjoner - fra elendigheten på fattiggården til et mislykket forsøk på sosial oppstigning.

**De fire bindene:**

1. **Sjur Gabriel** (1887): Vi møter den svake, drikfeldige Sjur Gabriel som bor på fattiggården Hellemyrsfolk med kona Oline. Deres liv preges av fattigdom, sykdom og alkohol.

2. **To Venner** (1887): Fokus på sønnene Sivert og Anders, og deres ulike veier. Anders dør, Sivert forsøker å arbeide seg opp.

3. **S.G. Myre** (1890): Sivert har blitt handelsmann og tatt navnet Myre. Men arven forfølger ham, og forsøket på å bli «respektabel» mislykkes.

4. **Afkom** (1898): Siverts sønn Severin representerer den endelige degenerasjonen. Han ender i kriminalitet og galskap.

**Det naturalistiske programmet:**

Skram følger Zolas program konsekvent:

- **Arv:** Sjur Gabriels svakheter går i arv til sønnene og videre. Alkoholisme, svak vilje og «dårlig blod» forfølger slekten.

- **Miljø:** Fattigdommen på Hellemyrsfolk former menneskene. De sosiale forholdene tillater ikke utvikling eller flukt.

- **Degenerasjon:** Over generasjonene blir det verre, ikke bedre. Forsøk på å bryte ut feiler.

- **Objektivitet:** Skram moraliserer ikke, men fremstiller med nøktern presisjon.

**Litterær kvalitet:**

Selv om Skram følger det naturalistiske programmet, er «Hellemyrsfolket» langt mer enn et ideologisk prosjekt. Romanene er fylt av levende karakterer, gripende scener og et språk som fanger miljøet med stor presisjon.

Særlig kvinneskildringene utmerker seg. Skram gir de undertrykte kvinnene stemme og verdighet, selv innenfor den deterministiske rammen.

**Resepsjon:**

Verket ble anerkjent av kritikere, men nådde aldri det brede publikum. Det var for mørkt, for ubehagelig. Men i ettertid har «Hellemyrsfolket» fått sin rettmessige plass som et hovedverk i norsk litteratur.`,
    },
    {
      id: 'norsk-vg3-2-3-def-1',
      type: 'definition',
      title: 'Romansyklusen som sjanger',
      content: `**Romansyklusen** (eller romanserien) er en rekke romaner som henger sammen gjennom felles karakterer, tema eller setting.

**Kjennetegn:**
- Flere bind som utgjør en helhet
- Ofte følger en familie over generasjoner
- Tematisk sammenheng
- Kan leses separat, men får dybde sammen

**Eksempler:**
- Zolas «Les Rougon-Macquart» (20 bind)
- Skrams «Hellemyrsfolket» (4 bind)
- Undsets «Kristin Lavransdatter» (3 bind)
- Duuns «Juvikfolke» (6 bind)

**Fordeler:**
- Mulighet for episk bredde
- Utforsking av tid og forandring
- Dybde i karakterskildring
- Tematisk kompleksitet

**I naturalismen:**
Romansyklusen var særlig populær i naturalismen fordi den tillot forfølging av arvelige trekk over generasjoner - «det naturlige eksperimentet».`,
    },
    {
      id: 'norsk-vg3-2-3-example-1',
      type: 'example',
      title: 'Analyse av Sjur Gabriel',
      problem: `Analyser det første bindet av «Hellemyrsfolket», «Sjur Gabriel» (1887).`,
      solution: `**Hovedpersoner:**
- **Sjur Gabriel:** Fattig husmann, svak og drikfeldig
- **Oline:** Hans kone, sliter med å holde familien sammen
- **Barna:** Sivert, Anders og flere

**Handling:**
Vi følger livet på Hellemyrsfolk gjennom hverdagens slitasje. Sjur Gabriel drikker, arbeider uregelmessig, og familien sulter. Oline kjemper for barnas overlevelse.

**Naturalistiske trekk:**

1. **Miljøskildring:**
Skram skildrer fattigdommen med nøyaktig realisme. Sulten, kulden, skittenhet - ingenting forskjønnes.

2. **Determinisme:**
Sjur Gabriel fremstilles som et offer for sin natur og sitt miljø. Han har ikke styrke til å forandre seg.

3. **Arv:**
Allerede her antydes at svakhetene vil gå i arv til barna.

**Kvinneperspektivet:**
Oline er en av romanens sterkeste skikkelser. Hun holder ut, kjemper for barna, uten håp om belønning. Skram viser hennes styrke og hennes hjelpeløshet.

**Språk og stil:**
Skram bruker dialekt og muntlig språk for å skape autentisitet. Scenene er korte og intense, uten sentimentalitet.

**Tematikk:**
- Fattigdommens konsekvenser
- Alkoholens ødeleggelser
- Kjønnsroller og makt
- Determinisme og skjebne`,
    },
    {
      id: 'norsk-vg3-2-3-example-2',
      type: 'example',
      title: 'Utviklingen gjennom fire bind',
      problem: `Analyser hvordan «Hellemyrsfolket» utvikler seg gjennom de fire bindene.`,
      solution: `**Den nedadgående kurven:**

Romansyklusen følger en typisk naturalistisk kurve - det blir verre, ikke bedre:

**Bind 1 - Sjur Gabriel:**
- Fattigdom og elendighet
- Men familien holder sammen
- Håp knyttet til barna

**Bind 2 - To Venner:**
- Anders dør - håpet svekkes
- Sivert forsøker å komme seg opp
- Men arven henger ved

**Bind 3 - S.G. Myre:**
- Sivert har blitt handelsmann
- Forsøk på respektabilitet
- Men arven innhenter ham
- Sosial og moralsk kollaps

**Bind 4 - Afkom:**
- Severin er den ultimate degenerasjonen
- Kriminalitet, galskap
- Ingen vei ut
- Syklusen fullføres

**Strukturell analyse:**

Skram bygger opp en uimotståelig bevegelse nedover. Hvert forsøk på oppstigning ender i fall. Arven og miljøet er sterkere enn individets vilje.

**Ironien:**

Det ligger en bitter ironi i at jo mer slekten forsøker å skjule sin bakgrunn, jo mer forfølges de av den. Siverts navneskifte til «Myre» hjelper ikke.

**Avslutningen:**

Med Severin i bind 4 fullføres degenerasjonen. Han representerer enden på linjen - det finnes ingen fremtid, ingen håp. Det naturalistiske eksperimentet er fullført.`,
    },
    {
      id: 'norsk-vg3-2-3-tip-1',
      type: 'tip',
      title: 'Leseveiledning til Hellemyrsfolket',
      content: `**Hvordan lese Hellemyrsfolket:**

1. **Start med Sjur Gabriel**
   Det første bindet gir grunnlaget for å forstå resten.

2. **Følg de arvelige trekkene**
   Legg merke til hvordan egenskaper går igjen fra generasjon til generasjon.

3. **Observer miljøskildringene**
   Skram er mester i å skildre sosiale forhold. Legg merke til detaljene.

4. **Lytt til kvinnestemmene**
   Selv i en patriarkalsk verden gir Skram kvinnene stemme og verdighet.

5. **Unngå å moralisere**
   Skram moraliserer ikke - forsøk å lese med samme åpne blikk.

6. **Tenk over determinismen**
   Reflekter over i hvilken grad karakterene kunne ha handlet annerledes.

**Språket:**
Skram bruker dialekt og muntlig språk. Dette kan kreve tilvanning, men gir autentisitet.`,
    },
    {
      id: 'norsk-vg3-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra «Hellemyrsfolket» og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser naturalistiske trekk i utdraget.',
            solution: 'Se etter determinisme, miljøskildringer, nøktern tone, fokus på arv.',
          },
          {
            label: 'b',
            task: 'Analyser hvordan Skram skildrer karakterene.',
            solution: 'Legg merke til psykologisk dybde, sympati uten sentimentalitet.',
          },
          {
            label: 'c',
            task: 'Hvilken rolle spiller miljøet i utdraget?',
            solution: 'Analyser hvordan de sosiale og materielle forholdene påvirker handlingen.',
          },
        ],
        solution: 'Analysen skal demonstrere forståelse for Skrams naturalistiske teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign «Hellemyrsfolket» med Zolas «Germinal» eller andre naturalistiske verk.',
        hints: ['Hvordan behandles arv og miljø?', 'Er det forskjeller i tone?', 'Hva med kvinneperspektivet?'],
        solution: 'Sammenligningen skal vise forståelse for naturalismen som internasjonal bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter «Hellemyrsfolkets» aktualitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Er temaene i romansyklusen fortsatt relevante?',
            solution: 'Fattigdom, sosial arv, alkoholisme er fortsatt aktuelle problemer. Men forståelsen av arv og miljø har endret seg.',
          },
          {
            label: 'b',
            task: 'Hvorfor leses verket lite i dag?',
            solution: 'Det er mørkt og krevende. Naturalismens pessimisme appellerer ikke til alle. Men litterær kvalitet står seg.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over litteraturens tidsbundethet og tidløshet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: NYROMANTIKK (1890-tallet)
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Reaksjon mot realismen
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_3_1: TextbookChapter = {
  id: 'norsk-vg3-3-1',
  courseId: 'norsk-vg3',
  chapterNumber: '3.1',
  title: 'Reaksjon mot realismen',
  description: 'Nyromantikkens oppgjør med realismen og naturalismen på 1890-tallet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-3-1-intro',
      type: 'text',
      content: `## Nyromantikken - oppgjøret med realismen

På 1890-tallet kom en reaksjon mot realismen og naturalismens dominans. En ny generasjon forfattere fant det realistiske programmet for trangt, for materialistisk, for opptatt av det ytre samfunnet. De søkte noe annet - det indre livet, stemningen, mystikken, det usigelige.

**Bakgrunnen for reaksjonen:**

Flere faktorer bidro til nyromantikkens fremvekst:

1. **Tretthet:** Det moderne gjennombruddets program var blitt en formel. Problemdiktningen føltes utslitt.

2. **Filosofisk endring:** Nye filosofer som Friedrich Nietzsche og Henri Bergson utfordret positivismen og materialismen.

3. **Kunstnerisk lengsel:** Forfatterne ville utforske språkets muligheter, det subjektive, det mystiske.

4. **Internasjonal påvirkning:** Symbolismen i Frankrike, dekadansen i England, impresjonismen i kunsten - nye strømninger nådde Skandinavia.

**Nyromantikkens kjennetegn:**

Den nye retningen skilte seg fra realismen på flere måter:

- **Subjektivitet:** Fokus på det indre livet, stemninger, sanseinntrykk
- **Mystikk:** Interesse for det irrasjonelle, drømmer, det ubevisste
- **Natur:** Naturen som sjelslandskap, ikke bare kulisse
- **Stil:** Poetisk, stemningsskapende prosa
- **Individet:** Det unike jeg-et fremfor den sosiale typen
- **Anti-urbanisme:** Skepsis til sivilisasjonen, lengsel til det primitive

**Kontinuitet og brudd:**

Nyromantikken var ikke et totalt brudd med det foregående. Mange forfattere, som Ibsen og Garborg, utviklet seg i mer symbolsk retning uten å forlate realismens grunnlag. Det var snarere en utvidelse av hva litteraturen kunne handle om.

Samtidig fantes det radikale nyromantikere som Knut Hamsun, som angrep hele den realistiske tradisjonen og krevde en helt ny litteratur.

**Internasjonalt:**

Nyromantikken i Skandinavia var del av en europeisk bevegelse. I Frankrike var det symbolismen med Mallarmé og Verlaine. I England var det estetisismen med Oscar Wilde og Walter Pater. I Tyskland og Østerrike vokste det frem en ny interesse for psykologi og det ubevisste.

Perioden var en overgang fra det 19. århundrets realisme til det 20. århundrets modernisme.`,
    },
    {
      id: 'norsk-vg3-3-1-def-1',
      type: 'definition',
      title: 'Nyromantikk',
      content: `**Nyromantikken** (ca. 1890-1910) er en litterær periode som kjennetegnes av reaksjon mot realismen og interesse for det indre liv.

**Navn:**
Også kalt:
- Fin de siècle (århundreskiftet)
- Dekadens
- Symbolisme (i lyrikk)
- Stemningsimpresjonisme

**Kjennetegn:**
- Subjektivitet og introspeksjon
- Interesse for det mystiske og irrasjonelle
- Poetisk, stemningsskapende stil
- Naturmystikk
- Individualisme
- Skepsis til fremskrittet

**Sentrale forfattere i Norge:**
- Knut Hamsun
- Sigbjørn Obstfelder
- Vilhelm Krag
- Hans E. Kinck

**Internasjonalt:**
- Maurice Maeterlinck (Belgia)
- Oscar Wilde (England)
- Stefan George (Tyskland)

**Forhold til romantikken:**
«Nyromantikk» antyder en gjenopptakelse av romantikkens idealer, men i ny form. Interessen for det subjektive, det mystiske og naturen knytter an til romantikken, men uttrykksformen er moderne.`,
    },
    {
      id: 'norsk-vg3-3-1-def-2',
      type: 'definition',
      title: 'Symbolisme',
      content: `**Symbolismen** er en litterær retning som oppsto i Frankrike på 1880-tallet og spredte seg til resten av Europa.

**Hovedideer:**
- Virkeligheten bak det synlige
- Symboler som vei til dypere sannhet
- Kunst for kunstens skyld
- Avvisning av realismens overfladiskhet

**Litterære kjennetegn:**
- Suggestiv, stemningsskapende
- Bruk av symboler og bilder
- Musikalitet i språket
- Vag, antydende stil
- Interesse for drømmer og det ubevisste

**Sentrale symbolister:**
- Charles Baudelaire (forløper)
- Stéphane Mallarmé
- Paul Verlaine
- Arthur Rimbaud

**I Norge:**
- Sigbjørn Obstfelder
- Vilhelm Krag
- Tidlig Hamsun

**Arv:**
Symbolismen var en viktig forløper for modernismen. Dens eksperimentering med språk og form peker fremover mot 1900-tallets litteratur.`,
    },
    {
      id: 'norsk-vg3-3-1-example-1',
      type: 'example',
      title: 'Hamsuns angrep på realismen',
      problem: `I 1890 holdt Knut Hamsun en forelesning i Studentersamfundet der han angrep den etablerte litteraturen. Analyser hans kritikk.`,
      solution: `**Forelesningen «Om norsk litteratur»:**

I oktober 1890 holdt den unge Hamsun tre forelesninger i Kristiania der han angrep hele det litterære etablissementet - inkludert «de fire store».

**Hamsuns kritikk:**

1. **For ytre:**
Den realistiske litteraturen var for opptatt av det ytre - samfunnsforhold, sosiale problemer. Den overså det indre livet.

2. **For typisk:**
Karakterene var «typer» som representerte sosiale kategorier, ikke unike individer med sin egen psykologi.

3. **For enkle:**
Menneskesinnet er komplekst, motsetningsfylt, uforutsigbart. Realismen forenklet dette.

4. **For moraliserende:**
Litteraturen skulle ikke lære bort moral eller løse sosiale problemer. Den skulle utforske sjelen.

**Hamsuns program:**

I stedet krevde Hamsun en litteratur som skildret:
- «Det ubevisste sjeleliv»
- «Hemmelighetsfulde nervevirksomheter»
- Irrasjonelle impulser og stemningsskifter
- Det unike individet

**Resepsjon:**

Forelesningene skapte skandale. De etablerte forfatterne ble fornærmet. Men Hamsun talte for en ny generasjon som søkte noe annet enn problemdiktning.

**Betydning:**

Hamsuns forelesninger markerte et generasjonsskifte. De formulerte et nytt litterært program som pekte fremover mot modernismen.`,
    },
    {
      id: 'norsk-vg3-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign realismen og nyromantikken.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kritiserte nyromantikerne ved realismen?',
            solution: 'De mente realismen var for ytre, for materialistisk, for opptatt av sosiale problemer. Den overså det indre livet.',
          },
          {
            label: 'b',
            task: 'Hva ville nyromantikerne i stedet?',
            solution: 'De ville utforske subjektivitet, stemning, mystikk, det ubevisste - det som ligger under overflaten.',
          },
          {
            label: 'c',
            task: 'Er dette et totalt brudd eller en videreutvikling?',
            solution: 'Begge deler. Det var et oppgjør med realismens begrensninger, men også en utvidelse av hva litteraturen kunne utforske.',
          },
        ],
        solution: 'Nyromantikken representerte både et brudd med og en videreutvikling av realismen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter Hamsuns kritikk av de etablerte forfatterne.',
        hints: ['Var kritikken rettferdig?', 'Hva overså Hamsun?', 'Hadde han et poeng?'],
        solution: 'Diskusjonen bør belyse både styrken og svakhetene i Hamsuns kritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Plasser nyromantikken i europeisk sammenheng.',
        hints: ['Hva skjedde i Frankrike, England, Tyskland?', 'Hvordan hang strømningene sammen?'],
        solution: 'Besvarelsen bør vise forståelse for nyromantikken som del av en europeisk bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Knut Hamsun - Sult og Mysterier
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_3_2: TextbookChapter = {
  id: 'norsk-vg3-3-2',
  courseId: 'norsk-vg3',
  chapterNumber: '3.2',
  title: 'Knut Hamsun - Sult og Mysterier',
  description: 'Knut Hamsuns tidlige romaner og hans litterære revolusjon.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-3-2-intro',
      type: 'text',
      content: `## Knut Hamsun - modernismens forløper

Knut Hamsun (1859-1952) er en av de mest innflytelsesrike forfatterne i verdenslitteraturen. Med romaner som «Sult» (1890), «Mysterier» (1892) og «Pan» (1894) revolusjonerte han romankunsten og pekte fremover mot modernismen.

**Liv og bakgrunn:**

Knut Pedersen (som han egentlig het) ble født 4. august 1859 i Lom i Gudbrandsdalen. Familien flyttet til Hamarøy i Nordland da han var tre år. Oppveksten i Nord-Norge preget ham dypt.

Han hadde en omflakkende ungdom med mange yrker: butikkmedarbeider, omreisende handelsmann, lærer, tråkkarbeider. Han reiste to ganger til Amerika (1882-84 og 1886-88) og opplevde fattigdom og slit.

Disse erfaringene preget hans tidlige forfatterskap. Han kjente fattigdommen på kroppen og kunne skildre den innenfra.

**Gjennombruddet:**

I 1890 publiserte Hamsun «Sult» i bokform (etter å ha trykt deler i tidsskrift året før). Romanen ble en sensasjon. Ingenting lignende var skrevet før.

«Sult» handler om en navnløs ung mann som går sulten rundt i Kristiania og forsøker å skrive. Men det er ikke handlingen som er det avgjørende - det er måten den indre opplevelsen skildres på. Hamsun går dypt inn i jeg-ets bevissthet med en intensitet og presisjon som var helt ny.

**Det litterære programmet:**

I forelesningene i 1890 formulerte Hamsun sitt litterære program. Han ville bort fra realismens «typer» og samfunnsproblemer. I stedet ville han:

- Skildre «det ubevisste sjeleliv»
- Fange «hemmelighetsfulde nervevirksomheter»
- Utforske irrasjonelle impulser og stemningsskifter
- Gi det unike individet stemme

Dette var en revolusjon. Hamsun pekte fremover mot Joyce, Proust og Woolf - modernismens mestere.

**Nobelprisen og kontroverser:**

I 1920 fikk Hamsun Nobelprisen i litteratur for «Markens grøde» (1917). Men hans forfatterskap ble overskygget av hans støtte til nazismen under andre verdenskrig. Han møtte Hitler og skrev en nekrolog over ham.

Dette har preget resepsjonen av Hamsun siden. Kan vi skille verket fra mannen? Debatten fortsetter.`,
    },
    {
      id: 'norsk-vg3-3-2-def-1',
      type: 'definition',
      title: 'Knut Hamsun (1859-1952)',
      content: `**Biografi:**
- Født 4. august 1859 i Lom
- Oppvokst i Hamarøy, Nordland
- Omflakkende ungdom i Norge og Amerika
- Gjennombrudd med «Sult» 1890
- Nobelpris 1920
- Støttet nazismen under krigen
- Døde 19. februar 1952

**Viktige verk:**
- *Sult* (1890)
- *Mysterier* (1892)
- *Pan* (1894)
- *Victoria* (1898)
- *Markens grøde* (1917)
- *Landstrykere* (1927)

**Litterære kjennetegn:**
- Psykologisk dybde
- Bevissthetsstrøm
- Lyrisk prosa
- Irrasjonelle karakterer
- Naturmystikk
- Sivilisasjonskritikk

**Betydning:**
Hamsun regnes som en forløper for modernismen. Hans teknikker påvirket forfattere som Kafka, Joyce og Hemingway.

**Kontroverser:**
Nazisympatien har preget resepsjonen av Hamsun. Debatten om verk og person fortsetter.`,
    },
    {
      id: 'norsk-vg3-3-2-def-2',
      type: 'definition',
      title: 'Bevissthetsstrøm',
      content: `**Bevissthetsstrøm** (stream of consciousness) er en litterær teknikk som søker å gjengi tankenes strøm slik de oppleves innenfra.

**Kjennetegn:**
- Tanker, sanseinntrykk og følelser blandes
- Assosiativ, ikke logisk struktur
- Ofte uten tradisjonell tegnsetting
- Glidende overganger
- Subjektiv tidsopplevelse

**Hamsuns bidrag:**
Selv om begrepet først ble brukt senere, var Hamsun en pioner i teknikken. I «Sult» skildrer han jeg-ets bevissthet med en intensitet som var ny.

**Senere forfattere:**
- James Joyce (*Ulysses*)
- Virginia Woolf (*Mrs. Dalloway*)
- William Faulkner (*The Sound and the Fury*)
- Marcel Proust (*På sporet av den tapte tid*)

**Filosofisk bakgrunn:**
William James (psykolog) introduserte begrepet «stream of consciousness» i 1890 - samme år som «Sult». Henri Bergson utviklet filosofien om tid og bevissthet.

**Betydning:**
Teknikken ble sentral i modernismen og endret hvordan litteratur kunne skildre indre liv.`,
    },
    {
      id: 'norsk-vg3-3-2-example-1',
      type: 'example',
      title: 'Analyse: Sult (1890)',
      problem: `Analyser «Sult» med fokus på Hamsuns litterære nyskaping.`,
      solution: `**Handling:**
En navnløs ung mann vandrer sulten rundt i Kristiania. Han forsøker å skrive artikler for å tjene penger, men lykkes dårlig. Vi følger hans tanker, impulser og hallusinasjoner gjennom flere uker.

**Det nye:**

1. **Intensitet:**
Vi er inne i jeg-ets hode hele tiden. Det finnes ingen distanse, ingen forteller som ordner og forklarer.

2. **Det irrasjonelle:**
Hovedpersonen handler ofte impulsivt og uforklarlig. Han gir bort penger han trenger, lyver uten grunn, oppsøker ydmykelser.

3. **Fysisk og psykisk:**
Sulten påvirker tanken. Det kroppslige og det mentale er uatskillelige.

4. **Fragmentering:**
Romanen har ingen tradisjonell plot med begynnelse, midtdel og slutt. Den slutter plutselig når hovedpersonen går om bord i et skip.

**Språket:**
Hamsun bruker et nervøst, intenst språk som speiler hovedpersonens tilstand. Setningene kan være lange og assosiative, eller korte og avbrutte.

**Fortelleren:**
Førstepersonsfortelleren er upålitelig. Vi ser alt gjennom hans forvrengte perspektiv.

**Tematikk:**
- Kunstnerens kår
- Stolthet og ydmykelse
- Identitet og fremmedgjøring
- Kropp og sinn

**Betydning:**
«Sult» regnes som en av de første moderne romaner. Den peker fremover mot det 20. århundrets litteratur.`,
    },
    {
      id: 'norsk-vg3-3-2-example-2',
      type: 'example',
      title: 'Analyse: Mysterier (1892)',
      problem: `Analyser «Mysterier» og karakteren Johan Nilsen Nagel.`,
      solution: `**Handling:**
En fremmed mann ved navn Johan Nilsen Nagel kommer til en liten kystby og skaper uro. Han er uforutsigbar, selvmotsigende, provoserende. Han forelsker seg, provoserer, filosoferer - og til slutt drukner han seg.

**Nagel som karakter:**

Nagel er Hamsuns mest komplekse skikkelse:
- Selvmotsigende og uforutsigbar
- Intellektuell og irrasjonell
- Tiltrekkende og frastøtende
- Sannhetssøkende og løgnaktig

Vi vet aldri hvem han egentlig er. Han lyver, spiller roller, skifter identitet.

**Mysteriene:**
Tittelen peker på det uforklarlige - både i Nagel og i tilværelsen. Romanen gir ingen svar, bare gåter.

**Realistisk ramme, irrasjonelt innhold:**
Miljøet er realistisk skildret, men det som skjer er ofte uforklarlig. Hamsun kombinerer realismens overflate med nyromantikkens dybde.

**Kritikk av borgerligheten:**
Nagel provoserer småbyens respektable borgere. Han avslører deres hykleri og konformitet.

**Symbolikk:**
Romanen er full av symboler og gjentakelser som skaper et nettverk av mening - uten at meningen noensinne er klar.

**Betydning:**
«Mysterier» utvider det Hamsun begynte i «Sult». Karakteren Nagel er blitt et ikon på den moderne, splittede bevissthet.`,
    },
    {
      id: 'norsk-vg3-3-2-tip-1',
      type: 'tip',
      title: 'Hamsuns åpning av «Sult»',
      content: `**Den berømte åpningen:**

«Det var i den Tid, jeg gik omkring og sulted i Kristiania, denne forunderlige By, som ingen forlader, før han har faaet Mærker af den...»

**Analyse:**
- Tilbakeskuende perspektiv («Det var i den Tid»)
- Kristiania som karakter
- Antydning om varige merker
- Personlig, bekjennende tone

Denne ene setningen etablerer romanens atmosfære: den navnløse jeg-personens forhold til byen, erfaringen av sult, og følelsen av å være merket.

Sammenlign med tradisjonelle åpninger som etablerer tid, sted og personer. Hamsun kaster oss rett inn i en bevissthet.`,
    },
    {
      id: 'norsk-vg3-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser et utdrag fra «Sult».',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildrer Hamsun tankenes strøm?',
            solution: 'Identifiser assosiative overganger, irrasjonelle impulser, blanding av tanke og sanseinntrykk.',
          },
          {
            label: 'b',
            task: 'Hva er nytt ved denne teknikken?',
            solution: 'Intensiteten, nærheten til bevisstheten, mangelen på distanse og forklaring.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Hamsuns litterære nyskaping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign hovedpersonene i «Sult» og «Mysterier».',
        hints: ['Begge er uforutsigbare og irrasjonelle', 'Men det er også forskjeller', 'Hvordan forholder de seg til omgivelsene?'],
        solution: 'Sammenligningen skal belyse Hamsuns karakterskapning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter forholdet mellom Hamsuns verk og hans politiske holdninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Kan vi skille verket fra mannen?',
            solution: 'Det finnes argumenter for begge sider. Noen mener kunsten må vurderes på egne premisser, andre at forfatterens holdninger ikke kan ignoreres.',
          },
          {
            label: 'b',
            task: 'Hvordan bør vi lese Hamsun i dag?',
            solution: 'Med bevissthet om kontroversene, men også med respekt for den litterære kvaliteten. Kritisk, men ikke sensurerende.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over vanskelige spørsmål om kunst og moral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor Hamsun regnes som modernismens forløper.',
        hints: ['Hva er typisk modernistisk hos Hamsun?', 'Hvem påvirket han?', 'Hva var nytt?'],
        solution: 'Besvarelsen bør koble Hamsuns teknikker til senere modernistisk litteratur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Symbolisme og stemningsdiktning
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_3_3: TextbookChapter = {
  id: 'norsk-vg3-3-3',
  courseId: 'norsk-vg3',
  chapterNumber: '3.3',
  title: 'Symbolisme og stemningsdiktning',
  description: 'Symbolismen i norsk lyrikk og prosa på 1890-tallet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-3-3-intro',
      type: 'text',
      content: `## Symbolisme og stemning i norsk 1890-tallslitteratur

Mens Hamsun revolusjonerte romankunsten, skjedde det parallelle endringer i lyrikken. Symbolismen, som hadde oppstått i Frankrike, nådde Norge og inspirerte en ny generasjon diktere til å søke det usigelige gjennom symboler og stemninger.

**Den franske symbolismen:**

Symbolismen i Frankrike var en reaksjon mot realismens og parnassistenes objektive diktning. Sentrale figurer var:

- **Charles Baudelaire** (1821-1867): Forløperen med «Les Fleurs du Mal»
- **Stéphane Mallarmé** (1842-1898): Mesterstykkets mester
- **Paul Verlaine** (1844-1896): Musikalitet og melankoli
- **Arthur Rimbaud** (1854-1891): Visionær og opprører

**Symbolismens estetikk:**

Symbolistene mente at virkeligheten bak det synlige ikke kunne uttrykkes direkte. Den måtte antydes, suggereres, symboliseres. Dikteren var en seer som kunne ane sammenhengen mellom det materielle og det åndelige.

Sentrale prinsipper:
- Symbolet som vei til dypere sannhet
- Musikalitet i språket
- Suggestiv, antydende stil
- Avvisning av direkte meddelelse
- «Rene» stemninger fremfor handling

**Symbolismen i Norge:**

I Norge fikk symbolismen sitt gjennombrudd på 1890-tallet. Viktige skikkelser var:

- **Sigbjørn Obstfelder** (1866-1900): Den fremste symbolisten
- **Vilhelm Krag** (1871-1933): Stemningslyrikk
- **Nils Collett Vogt** (1864-1937): Påvirket av symbolismen

Også Ibsens sene dramaer, fra «Vildanden» og utover, har symbolistiske trekk. Og Hamsuns prosa kan sees i lys av symbolismen.

**Stemningsdiktning:**

Et særtrekk ved den norske 1890-tallslitteraturen er vekten på stemning. Naturen ble et sjelslandskap der indre tilstander ble speilet. Språket ble musikalsk, suggestivt, ladet med undertoner.

Dette var en bevegelse bort fra realismens klarhet mot noe mer ubestemt og flyktig - en forsmak på modernismens utforsking av bevissthetens gåter.`,
    },
    {
      id: 'norsk-vg3-3-3-def-1',
      type: 'definition',
      title: 'Symbolisme (litterær retning)',
      content: `**Symbolismen** er en litterær og kunstnerisk bevegelse som oppsto i Frankrike på 1880-tallet.

**Filosofisk grunnlag:**
- Platonsk idealisme: En høyere virkelighet bak det synlige
- Interesse for det mystiske og åndelige
- Avvisning av positivisme og materialisme

**Estetiske prinsipper:**
- Symbolet som uttrykk for det usigelige
- Musikalitet i språket
- Suggestiv, antydende stil
- «Kunst for kunstens skyld»
- Motsats til realismens direkte meddelelse

**Litterære kjennetegn:**
- Bruk av symboler og bilder
- Vektlegging av klang og rytme
- Vage, stemningsladde uttrykk
- Interesse for drømmer og syner
- Synestesi (sanseblanding)

**Internasjonalt:**
- Frankrike: Mallarmé, Verlaine, Rimbaud
- Belgia: Maeterlinck
- Tyskland: Stefan George
- Russland: Blok, Ivanov

**I Norge:**
- Sigbjørn Obstfelder
- Vilhelm Krag
- Ibsens sene dramaer`,
    },
    {
      id: 'norsk-vg3-3-3-def-2',
      type: 'definition',
      title: 'Synestesi',
      content: `**Synestesi** er en litterær teknikk der sanseinntrykk fra ett område overføres til et annet.

**Eksempler:**
- «Blå toner» (hørsel + syn)
- «Varm farge» (temperatur + syn)
- «Skarp smak» (berøring + smak)
- «Mørk stemme» (syn + hørsel)

**I symbolismen:**
Synestesi var viktig for symbolistene fordi den antyder at sansene henger sammen i en dypere enhet. Den bryter ned grensene mellom sanseområdene.

**Baudelaires «Correspondances»:**
Det berømte diktet beskriver «correspondances» - skjulte sammenhengen mellom ting:

«Parfymene, fargene og tonene svarer
til hverandre i mystisk harmoni...»

**I norsk litteratur:**
Obstfelder bruker synestesi for å skildre fremmedgjøring og forvirring. Sansene blandes hos hans jeg-personer.

**Funksjon:**
- Skaper poetisk intensitet
- Antyder dypere sammenhenger
- Understreker det subjektive
- Bryter med konvensjonell beskrivelse`,
    },
    {
      id: 'norsk-vg3-3-3-example-1',
      type: 'example',
      title: 'Obstfelders «Jeg ser»',
      problem: `Analyser Sigbjørn Obstfelders dikt «Jeg ser» (1893).`,
      solution: `**Diktet:**

Jeg ser paa den hvide himmel,
jeg ser paa de graablaa skyer,
jeg ser paa den blodige sol.

Dette er altsaa verden.
Dette er altsaa klodernes hjem.

En regndraabe!

Jeg ser paa de høie huse,
jeg ser paa de tusende vinduer,
jeg ser paa det fjerne kirketaarn.

Dette er altsaa jorden.
Dette er altsaa menneskenes hjem.

De graablaa skyer samler sig. Solen blev borte.

Jeg ser paa de velklædte herrer,
jeg ser paa de smilende damer,
jeg ser paa de ludende heste.

Hvor de graablaa skyer blir tunge.

Jeg ser, jeg ser...
Jeg er vist kommet paa en feil klode!
Her er saa underligt...

**Analyse:**

1. **Strukturen:**
Diktet er bygget opp av tre parallelle sekvenser (himmel, jord, mennesker) som kulminerer i den berømte sluttlinjen.

2. **Gjentakelsen:**
«Jeg ser» gjentas som et mantra. Selve sansningen er tematisert.

3. **Fremmedgjøringen:**
Jeg-et ser verden som for første gang, som en fremmed. Det selvfølgelige blir underlig.

4. **Sluttlinjen:**
«Jeg er vist kommet paa en feil klode!» oppsummerer den eksistensielle fremmedgjøringen.

5. **Symbolismen:**
Diktet handler ikke om noe konkret, men om en tilstand - en eksistensiell følelse av å ikke høre til.

**Betydning:**
«Jeg ser» er blitt et av de mest siterte norske dikt. Det fanger en moderne opplevelse av fremmedgjøring med forbausende enkelhet.`,
    },
    {
      id: 'norsk-vg3-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser «Jeg ser» av Obstfelder.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skaper diktet en følelse av fremmedgjøring?',
            solution: 'Gjennom gjentakelse, det distanserte blikket, og kulminasjonen i sluttlinjen.',
          },
          {
            label: 'b',
            task: 'Hvilke symbolistiske trekk finner du?',
            solution: 'Stemningsskapning, antydning fremfor forklaring, det subjektive blikket.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Obstfelders symbolistiske teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign symbolismen med realismen.',
        hints: ['Forskjellig syn på virkeligheten', 'Forskjellig funksjon av kunst', 'Forskjellig stil'],
        solution: 'Sammenligningen bør belyse de grunnleggende forskjellene i estetikk og verdenssyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn et annet symbolistisk dikt og analyser det.',
        hints: ['Se etter symbolbruk', 'Analyser stemningen', 'Hva antydes men sies ikke direkte?'],
        solution: 'Analysen skal demonstrere evne til å anvende kunnskap om symbolismen på et konkret dikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 Sigbjørn Obstfelder
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_3_4: TextbookChapter = {
  id: 'norsk-vg3-3-4',
  courseId: 'norsk-vg3',
  chapterNumber: '3.4',
  title: 'Sigbjørn Obstfelder',
  description: 'Sigbjørn Obstfelders liv og forfatterskap - Norges fremste symbolist.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-3-4-intro',
      type: 'text',
      content: `## Sigbjørn Obstfelder - den fremmede

Sigbjørn Obstfelder (1866-1900) levde bare 33 år, men etterlot seg et forfatterskap som har fått stadig større anerkjennelse. Han regnes som Norges fremste symbolist og som en forløper for modernismen.

**Liv:**

Obstfelder ble født 21. november 1866 i Stavanger. Han studerte filologi og ingeniørfag, men fullførte aldri noen utdanning. Han led av psykiske problemer og var innlagt på asyl i 1891.

Han reiste mye - til Amerika, Tyskland, Frankrike, Danmark - alltid rastløs, alltid søkende. I 1898 giftet han seg med den danske pianisten Ingeborg Weeke. De fikk en datter, Lili, i 1899.

Obstfelder døde av tuberkulose i København 29. juli 1900, bare 33 år gammel.

**Forfatterskap:**

Obstfelders samlede verk er lite i omfang, men rikt i intensitet:

- **Digte** (1893): Den eneste diktsamlingen utgitt i hans levetid
- **To novelletter** (1895): Prosa med symbolistiske trekk
- **Korset** (1896): Et drama
- **En prests dagbog** (utgitt posthumt 1900): Fragmentarisk roman

Det lille omfanget skyldes dels det korte livet, dels Obstfelders strenge krav til seg selv. Han slet med å fullføre.

**Tematikk:**

Obstfelders diktning kretser rundt noen gjennomgående temaer:

1. **Fremmedgjøring:** Følelsen av å ikke høre til, av å se verden utenfra
2. **Ensomhet:** Det isolerte jeg-et som ikke finner kontakt
3. **Lengsel:** Etter noe annet, noe mer, noe ubegripelig
4. **Angst:** Eksistensiell uro overfor tilværelsen

**Stil:**

Obstfelders stil er unik i norsk litteratur:
- Enkel, nesten barnlig overflate
- Dyp undertekst
- Gjentakelser som skaper hypnotisk effekt
- Bruddstykker og fragmenter
- Suggestiv, antydende

**Betydning:**

Obstfelder var lite kjent i sin samtid, men hans betydning har vokst. Han peker fremover mot modernismens fremmedgjøring og eksistensielle tematikk. Diktet «Jeg ser» er blitt en klassiker.`,
    },
    {
      id: 'norsk-vg3-3-4-def-1',
      type: 'definition',
      title: 'Sigbjørn Obstfelder (1866-1900)',
      content: `**Biografi:**
- Født 21. november 1866 i Stavanger
- Studerte filologi og ingeniørfag, fullførte ikke
- Innlagt på asyl 1891
- Reiste til Amerika, Tyskland, Frankrike, Danmark
- Gift 1898 med Ingeborg Weeke
- Døde av tuberkulose 29. juli 1900

**Verk:**
- *Digte* (1893)
- *To novelletter* (1895)
- *Korset* (1896)
- *En prests dagbog* (1900, posthumt)

**Litterære kjennetegn:**
- Symbolistisk stil
- Fremmedgjøring som tema
- Enkel overflate, dyp undertekst
- Fragmentarisk form
- Eksistensiell tematikk

**Berømte linjer:**
«Jeg er vist kommet paa en feil klode!»
«Her er saa underligt...»

**Betydning:**
Obstfelder er Norges fremste symbolist og en forløper for modernismen. Hans korte liv og lille produksjon har fått stadig større anerkjennelse.`,
    },
    {
      id: 'norsk-vg3-3-4-example-1',
      type: 'example',
      title: 'Analyse av Obstfelders prosadikt',
      problem: `Les og analyser følgende prosadikt av Obstfelder:

«Natten er stille. Jeg har siddet og seet paa stjernerne. De er saa fjerne. De er saa mange. De er saa kolde.»`,
      solution: `**Analyse:**

**Struktur:**
Tre korte setninger om natten og stjernene. Parallell oppbygning: «De er saa...» gjentas tre ganger.

**Stemning:**
Stillhet, ensomhet, kulde. Jeg-et er alene i natten og konfronteres med universets uendelighet.

**Gjentakelsen:**
Triaden «saa fjerne», «saa mange», «saa kolde» skaper en hypnotisk effekt og understreker distansen mellom menneske og kosmos.

**Tematikk:**
Menneskets litenhet i universet. Fremmedgjøring. Ensomhet.

**Symbolismen:**
Stjernene er et symbol på det uoppnåelige, det fremmedgjørende ved tilværelsen.

**Obstfelders stil:**
- Enkel, nesten barnlig
- Men med eksistensiell tyngde
- Gjentakelse som virkemiddel
- Korte setninger, stor virkning

**Sammenligning med «Jeg ser»:**
Samme teknikk: gjentakelse, distansert blikk, eksistensiell fremmedgjøring. Stjernene i dette diktet tilsvarer verden i «Jeg ser».`,
    },
    {
      id: 'norsk-vg3-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les flere dikt av Obstfelder og identifiser gjennomgående trekk.',
        hints: ['Se etter gjentakelser', 'Analyser stemningen', 'Hvilke temaer går igjen?'],
        solution: 'Besvarelsen bør vise forståelse for Obstfelders karakteristiske stil og tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Obstfelder med Hamsun.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de felles?',
            solution: 'Begge bryter med realismen, fokuserer på det indre liv, skriver i nyromantisk/symbolistisk stil.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Hamsun er mer vital og energisk, Obstfelder mer melankolsk og innadvendt. Hamsun skriver romaner, Obstfelder lyrikk.',
          },
        ],
        solution: 'Sammenligningen belyser ulike uttrykk for 1890-tallets strømninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter fremmedgjøring som tema i litteraturen.',
        hints: ['Hva betyr fremmedgjøring?', 'Hvorfor er det et sentralt tema?', 'Er det aktuelt i dag?'],
        solution: 'Diskusjonen bør koble Obstfelders tematikk til bredere litterære og eksistensielle spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: TIDLIG MODERNISME (1900-1930)
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Modernismens kjennetegn
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_4_1: TextbookChapter = {
  id: 'norsk-vg3-4-1',
  courseId: 'norsk-vg3',
  chapterNumber: '4.1',
  title: 'Modernismens kjennetegn',
  description: 'Innføring i modernismen som litterær epoke og dens særtrekk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-4-1-intro',
      type: 'text',
      content: `## Modernismen - det 20. århundrets litterære revolusjon

Modernismen er en av de viktigste litterære bevegelsene i det 20. århundre. Den oppsto i de første tiårene av 1900-tallet og representerte et radikalt brudd med tradisjonelle fortellerformer. Modernistene eksperimenterte med språk, form og perspektiv på måter som fortsatt preger litteraturen i dag.

**Historisk bakgrunn:**

Modernismen vokste frem i en tid preget av omveltninger:

- **Første verdenskrig (1914-1918):** Den store krigen knuste troen på fremskritt og sivilisasjon. Millioner døde i meningsløse slag.
- **Teknologisk revolusjon:** Bil, fly, telefon, film endret menneskers opplevelse av tid og rom.
- **Vitenskapelige omveltninger:** Einsteins relativitetsteori og kvantemekanikken utfordret det newtonske verdensbildet.
- **Psykoanalysen:** Freud avdekket det ubevisste og endret synet på menneskesinnet.
- **Urbanisering:** Storbyene vokste og skapte nye livsmåter og erfaringer.

Disse omveltningene skapte en følelse av at den gamle verden var gått under. Den trygge, oversiktlige virkeligheten fantes ikke lenger - om den noensinne hadde eksistert.

**Modernismens program:**

Modernistene mente at litteraturen måtte fornyes for å fange den nye virkeligheten:

1. **Eksperimentering med form:** Tradisjonelle fortellermønstre ble brutt opp. Lineær tid erstattes av fragmenter, flashbacks, parallelle handlinger.

2. **Subjektivitet:** Virkeligheten fremstilles slik den oppleves av bevisstheten, ikke som objektiv sannhet.

3. **Bevissthetsstrøm:** Tankenes og inntrykkenes strøm gjengis direkte, uten ordnende forteller.

4. **Fragmentering:** Helheten er tapt. Litteraturen gjenspeiler dette i fragmentert form.

5. **Intertekstualitet:** Referanser til andre tekster, myter, tradisjoner veves inn i verket.

6. **Mytisk metode:** Samtiden sees i lys av tidløse myter og mønstre.

**Sentrale modernister internasjonalt:**

- **James Joyce** (Irland): «Ulysses» (1922) - bevissthetsstrømmens mester
- **Virginia Woolf** (England): «Mrs. Dalloway» (1925) - subjektiv tid
- **Marcel Proust** (Frankrike): «På sporet av den tapte tid» - erindringens epos
- **Franz Kafka** (Tsjekkia): «Prosessen» - det absurde
- **T.S. Eliot** (England/USA): «The Waste Land» (1922) - modernistisk lyrikk

**Modernismen i Norge:**

Norge var noe sen med å ta til seg modernismen. Mens Joyce og Woolf skrev sine hovedverker på 1920-tallet, kom det modernistiske gjennombruddet i norsk lyrikk først på 1950-tallet.

Men det fantes tidlige modernistiske tendenser. Hamsuns tidlige romaner, Obstfelders lyrikk og Sigrid Undsets samtidsromaner viser modernistiske trekk. Og forfattere som Tarjei Vesaas arbeidet i modernismens ånd lenge før etiketten ble vanlig.`,
    },
    {
      id: 'norsk-vg3-4-1-def-1',
      type: 'definition',
      title: 'Modernisme',
      content: `**Modernismen** er en litterær og kunstnerisk bevegelse som dominerte første halvdel av det 20. århundre.

**Tidsavgrensning:**
- Tidlig modernisme: ca. 1900-1930
- Høymodernisme: ca. 1920-1940
- Senmodernisme: ca. 1940-1960

**Kjennetegn:**
- Eksperimentering med form og språk
- Brudd med lineær fortelling
- Subjektiv virkelighetsoppfatning
- Bevissthetsstrøm
- Fragmentering
- Fremmedgjøring som tema
- Intertekstualitet
- Vektlegging av kunstens autonomi

**Filosofisk bakgrunn:**
- Freuds psykoanalyse
- Bergsons filosofi om tid
- Nietzsche og «Guds død»
- Første verdenskrigs traumer

**Sentrale tekster internasjonalt:**
- Joyce: *Ulysses* (1922)
- Eliot: *The Waste Land* (1922)
- Woolf: *Mrs. Dalloway* (1925)
- Kafka: *Prosessen* (1925)
- Proust: *På sporet av den tapte tid* (1913-27)

**I Norge:**
- Tarjei Vesaas
- Cora Sandel
- Sigrid Undset (delvis)
- Lyrikk: Rolf Jacobsen, Olav H. Hauge`,
    },
    {
      id: 'norsk-vg3-4-1-def-2',
      type: 'definition',
      title: 'Fragmentering',
      content: `**Fragmentering** er et sentralt trekk ved modernistisk litteratur.

**Hva betyr det:**
Verket presenteres ikke som en helhet, men som bruddstykker som leseren må sette sammen.

**Former for fragmentering:**
- Brutt kronologi (tidshopp, flashbacks)
- Skiftende synsvinkler
- Usammenhengende scener
- Ufullstendige setninger
- Manglende overgang
- Åpne slutter

**Hvorfor fragmentering:**
Modernistene mente at den helhetlige, ordnede fortellingen var en løgn. Virkeligheten er kaotisk og fragmentert - litteraturen må gjenspeile dette.

**Eksempler:**
- Eliots «The Waste Land» er et puslespill av sitater og fragmenter
- Joyces «Ulysses» skifter stil fra kapittel til kapittel
- Woolfs «To the Lighthouse» bryter kronologien radikalt

**Leserens rolle:**
Fragmenteringen krever en aktiv leser som skaper mening av bitene. Leseren blir medforfatter.

**I Norge:**
Vesaas' romaner har ofte fragmentarisk struktur med poetiske scener som knyttes løst sammen.`,
    },
    {
      id: 'norsk-vg3-4-1-example-1',
      type: 'example',
      title: 'T.S. Eliots «The Waste Land»',
      problem: `Analyser åpningen av T.S. Eliots «The Waste Land» (1922) som eksempel på modernistisk teknikk.

«April is the cruellest month, breeding
Lilacs out of the dead land, mixing
Memory and desire, stirring
Dull roots with spring rain.»`,
      solution: `**Analyse:**

**Omvendt konvensjon:**
Tradisjonelt er april forbundet med fornyelse og håp (jf. Chaucers Canterbury Tales som begynner med at april vekker naturen). Eliot snur dette: april er «the cruellest month».

**Paradokset:**
Våren er grusom fordi den vekker liv i det døde - «breeding / Lilacs out of the dead land». Den tvinger frem følelser som har ligget begravd: «Memory and desire».

**Tema:**
Tørkelandet («Waste Land») er både et konkret landskap og et bilde på sivilisasjonens åndelige tomhet etter første verdenskrig.

**Fragmentering:**
Diktet er bygget opp av fragmenter fra ulike kilder, språk og tradisjoner. Denne åpningen er relativt sammenhengende, men snart bryter diktet opp i et kaos av stemmer og referanser.

**Intertekstualitet:**
Diktet er full av sitater og allusjoner. Leseren må kjenne tradisjonen for å forstå fullt ut.

**Modernistiske trekk:**
- Bryter med forventninger
- Sammensatt symbolikk
- Fragmentert struktur
- Krav til lærd leser
- Sivilisasjonskritikk`,
    },
    {
      id: 'norsk-vg3-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar modernismens hovedtrekk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med fragmentering i litteraturen?',
            solution: 'At verket ikke fremstår som en ordnet helhet, men som bruddstykker leseren må sette sammen.',
          },
          {
            label: 'b',
            task: 'Hvorfor eksperimenterte modernistene med form?',
            solution: 'De mente at tradisjonelle former ikke kunne fange den nye, kaotiske virkeligheten etter første verdenskrig.',
          },
          {
            label: 'c',
            task: 'Hva er bevissthetsstrøm?',
            solution: 'En teknikk som gjengir tankenes og inntrykkenes strøm direkte, uten ordnende forteller.',
          },
        ],
        solution: 'Modernismen representerte et radikalt brudd med tradisjonelle litterære former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter sammenhengen mellom første verdenskrig og modernismen.',
        hints: ['Hvordan påvirket krigen synet på virkeligheten?', 'Hva mistet man troen på?', 'Hvordan reflekteres dette i litteraturen?'],
        solution: 'Diskusjonen bør vise forståelse for den historiske konteksten for modernismens fremvekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign modernismen med realismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skiller fortellerteknikken seg?',
            solution: 'Realismen har typisk en ordnende forteller, modernismen eksperimenterer med bevissthetsstrøm og fragmentering.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellig i synet på virkeligheten?',
            solution: 'Realismen tror på objektiv virkelighet som kan skildres, modernismen vektlegger subjektiv opplevelse.',
          },
        ],
        solution: 'Modernismen representerer et brudd med realismens konvensjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Olav Duun
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_4_2: TextbookChapter = {
  id: 'norsk-vg3-4-2',
  courseId: 'norsk-vg3',
  chapterNumber: '4.2',
  title: 'Olav Duun',
  description: 'Olav Duuns forfatterskap og romansyklusen Juvikfolke.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-4-2-intro',
      type: 'text',
      content: `## Olav Duun - slektsromanens mester

Olav Duun (1876-1939) regnes som en av Norges største romanforfattere. Hans hovedverk, den seksbinds romansyklusen «Juvikfolke» (1918-1923), er blitt kalt det største episke verket i norsk litteratur.

**Liv og bakgrunn:**

Olav Duun ble født 21. november 1876 på Jøa i Namdalen, Trøndelag. Han vokste opp i et bondemiljø preget av harde livsvilkår og sterk tradisjon. Etter lærerutdanning arbeidet han som lærer i Namdalen og senere i Holmestrand.

Duun begynte å skrive sent og debuterte først i 1907 med romanen «Løglege skruvar og anna folk». Men det var med «Juvikfolke» han fikk sitt gjennombrudd og etablerte seg som en av tidens store forfattere.

Han skrev på nynorsk med et sterkt trøndersk preg - et språk som er blitt stående som et av de kraftigste i norsk litteratur.

**Juvikfolke (1918-1923):**

Seksbindsverket følger slekten på gården Juvika gjennom flere generasjoner, fra vikingtid-lignende tilstander til moderne tid:

1. «Juvikingar» (1918)
2. «I blinda» (1919)
3. «Storbryllaupet» (1920)
4. «I ungdomen» (1921)
5. «I stormen» (1922)
6. «I eventyret» (1923)

Verket er episk i omfang og ambisjon. Duun skildrer kampen mellom godt og ondt, mellom lys og mørke, som en grunnleggende kraft i menneskelivet.

**Tematikk:**

Duuns forfatterskap kretser rundt store temaer:

1. **Kampen mellom godt og ondt:** I mennesket og i slekten kjemper konstruktive og destruktive krefter.

2. **Arv og miljø:** Egenskaper går i arv gjennom generasjonene. Men mennesket kan også overvinne sin arv.

3. **Menneske og natur:** Naturen er en mektig kraft som former mennesket.

4. **Etikk og ansvar:** Mennesket står overfor moralske valg med konsekvenser.

**Stil og språk:**

Duuns stil er særpreget:
- Kraftfullt, poetisk nynorsk
- Episk bredde kombinert med psykologisk dybde
- Mytiske undertoner
- Naturen som stemningsbærende element
- Dialog som karakterisering

**Betydning:**

Duun var nominert til Nobelprisen i litteratur flere ganger, men fikk den aldri. Hans verk har fått status som klassikere, og «Juvikfolke» regnes som noe av det ypperste i norsk romankunst.`,
    },
    {
      id: 'norsk-vg3-4-2-def-1',
      type: 'definition',
      title: 'Olav Duun (1876-1939)',
      content: `**Biografi:**
- Født 21. november 1876 på Jøa, Namdalen
- Lærerutdannet
- Arbeidet som lærer i Namdalen og Holmestrand
- Debuterte 1907
- Gjennombrudd med «Juvikfolke» 1918-23
- Døde 13. september 1939

**Hovedverk:**
- *Juvikfolke* (1918-1923) - 6 bind
- *Medmenneske* (1929)
- *Menneske og maktene* (1938)

**Litterære kjennetegn:**
- Episk slektsskildring
- Kamp mellom godt og ondt
- Nynorsk med trøndersk preg
- Naturmystikk
- Psykologisk dybde
- Etisk alvor

**Tematikk:**
- Arv og miljø
- Menneskets moralske kamp
- Slektens skjebne
- Forholdet til naturen

**Betydning:**
Regnes som en av Norges største romanforfattere. Nominert til Nobelprisen flere ganger. «Juvikfolke» er blitt stående som et hovedverk i norsk litteratur.`,
    },
    {
      id: 'norsk-vg3-4-2-example-1',
      type: 'example',
      title: 'Analyse av Juvikfolke',
      problem: `Analyser hvordan Duun skildrer kampen mellom godt og ondt i «Juvikfolke».`,
      solution: `**Slektens utvikling:**

Gjennom de seks bindene følger vi hvordan godhet og ondskap manifesterer seg i ulike generasjoner av Juvik-slekten.

**Per Anders:**
Den sentrale skikkelsen i serien. Han bærer på slektens mørke arv, men kjemper for å overvinne den. Hans kamp er kjernen i verket.

**Arv og valg:**
Duun viser at mennesket bærer med seg sin arv, men ikke er fullstendig determinert av den. Per Anders kan velge - og hans valg har betydning.

**Kosmisk kamp:**
Kampen mellom godt og ondt er ikke bare individuell, men kosmisk. Den speiles i naturen, i slektens historie, i samfunnet.

**Symbolikk:**
Duun bruker naturen symbolsk. Stormer, lys og mørke, årstider - alt speiler den indre kampen.

**Menneske og maktene:**
Mennesket står overfor krefter som er større enn det selv - naturen, arven, skjebnen. Men det har også mulighet til å handle moralsk.

**Etisk alvor:**
Duuns verk er gjennomsyret av etisk alvor. Valgene har konsekvenser, og mennesket er ansvarlig.

**Episk form:**
Den seksbinds strukturen tillater en utforsking av temaene over tid og generasjoner. Verket har episk tyngde.`,
    },
    {
      id: 'norsk-vg3-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Duuns «Juvikfolke» med Skrams «Hellemyrsfolket».',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er likt i strukturen?',
            solution: 'Begge er romansykluser som følger en slekt over generasjoner.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellig i menneskesynet?',
            solution: 'Skram er mer deterministisk - arven bestemmer. Duun gir mer rom for valg og moralsk kamp.',
          },
        ],
        solution: 'Sammenligningen belyser forskjellen mellom naturalistisk og mer humanistisk slektsskildring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les et utdrag fra «Juvikfolke» og analyser språket.',
        hints: ['Legg merke til det nynorske språket', 'Hvordan brukes naturen?', 'Hva kjennetegner dialogen?'],
        solution: 'Analysen bør vise forståelse for Duuns særpregede språk og stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter kampen mellom godt og ondt som litterært tema.',
        hints: ['Er dette et tidløst tema?', 'Hvordan varierer fremstillingen?', 'Er det relevant i dag?'],
        solution: 'Diskusjonen bør reflektere over temaets universalitet og ulike litterære behandlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Sigrid Undset - Kristin Lavransdatter
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_4_3: TextbookChapter = {
  id: 'norsk-vg3-4-3',
  courseId: 'norsk-vg3',
  chapterNumber: '4.3',
  title: 'Sigrid Undset - Kristin Lavransdatter',
  description: 'Sigrid Undsets middelalderroman og Nobelprisen.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-4-3-intro',
      type: 'text',
      content: `## Sigrid Undset - Nobelprisen og middelalderen

Sigrid Undset (1882-1949) er en av de mest betydningsfulle forfatterne i norsk litteraturhistorie. Hun mottok Nobelprisen i litteratur i 1928, primært for sine middelalderromaner. Trilogien «Kristin Lavransdatter» (1920-1922) regnes som et hovedverk i verdenslitteraturen.

**Liv og bakgrunn:**

Undset ble født 20. mai 1882 i Kalundborg, Danmark. Familien flyttet til Kristiania da hun var to år. Faren, arkeologen Ingvald Undset, døde da hun var elleve, og hun måtte gå ut i arbeid for å forsørge familien.

I ti år arbeidet hun som kontordame, en erfaring som preget hennes tidlige romaner. Samtidig utdannet hun seg selv gjennom lesning og museumsbesøk. Hun utviklet en dyp kunnskap om middelalderen som skulle bli grunnlaget for hovedverket.

I 1912 giftet hun seg med maleren Anders Castus Svarstad. Ekteskapet var vanskelig, og de skilte seg i 1924. Samme år konverterte Undset til katolisismen, en tro som ble sentral i hennes liv og forfatterskap.

Under andre verdenskrig flyktet Undset til USA etter at sønnen Anders falt i kamp mot tyskerne. Hun vendte hjem i 1945 og døde 10. juni 1949.

**Kristin Lavransdatter (1920-1922):**

Trilogien følger Kristin gjennom hele hennes liv i norsk middelalder (1300-tallet):

1. **Kransen** (1920): Kristins ungdom, kjærligheten til Erlend, konflikten med faren.
2. **Husfrue** (1921): Ekteskapet med Erlend, morsrollen, ansvaret.
3. **Korset** (1922): Aldring, tap, soning, forsoning.

**Undsets metode:**

Undsets middelalderroman er basert på omfattende historisk research. Hun studerte sagaer, lover, arkitektur, hverdagsliv. Resultatet er en historisk roman med uovertruffen autentisitet.

Men det er ikke bare det ytre som er overbevisende. Undset skaper karakterer med psykologisk dybde som føles moderne selv i historisk setting. Kristins indre liv - hennes kjærlighet, stolthet, anger, tro - er skildret med en intensitet som overskrider tiden.

**Tematikk:**

Sentrale temaer i trilogien:

1. **Kjærlighet og lidelse:** Kristins kjærlighet til Erlend bringer henne både glede og smerte.
2. **Synd og tilgivelse:** Den katolske tematikken om skyld, anger og forsoning.
3. **Kvinneliv:** Trilogien er en dyp utforskning av kvinnens liv - som datter, kone, mor.
4. **Tid og forandring:** Vi følger Kristin fra ungdom til død - hele livets bue.

**Nobelprisen:**

I 1928 mottok Undset Nobelprisen «for hennes mektige skildringer av livet i Norden i middelalderen». Hun var den tredje kvinnen og den tredje nordmannen som mottok prisen.`,
    },
    {
      id: 'norsk-vg3-4-3-def-1',
      type: 'definition',
      title: 'Sigrid Undset (1882-1949)',
      content: `**Biografi:**
- Født 20. mai 1882 i Kalundborg, Danmark
- Oppvokst i Kristiania
- Kontordame 1899-1909
- Gift med Anders Castus Svarstad 1912
- Konverterte til katolisismen 1924
- Nobelpris 1928
- Flyktet til USA under krigen
- Døde 10. juni 1949 i Lillehammer

**Hovedverk:**
- *Jenny* (1911) - samtidsroman
- *Kristin Lavransdatter* (1920-22) - trilogi
- *Olav Audunssøn* (1925-27) - tetralogi
- *Gymnadenia* (1929) - samtidsroman

**Litterære kjennetegn:**
- Historisk realisme
- Psykologisk dybde
- Katolsk tematikk
- Kvinneperspektiv
- Etisk alvor

**Betydning:**
En av de viktigste norske forfatterne. Nobelprisen bekreftet hennes internasjonale status. «Kristin Lavransdatter» er oversatt til over 80 språk.`,
    },
    {
      id: 'norsk-vg3-4-3-def-2',
      type: 'definition',
      title: 'Historisk roman',
      content: `**Den historiske romanen** er en sjanger som plasserer fiktive karakterer og hendelser i en autentisk historisk setting.

**Kjennetegn:**
- Historisk ramme (tid, sted, miljø)
- Blanding av historiske og fiktive karakterer
- Research og autentisitet
- Ofte fokus på hverdagsliv
- Tematikk som overskrider tiden

**Undsets tilnærming:**
- Omfattende research i kilder
- Fokus på dagligliv og materiale kultur
- Psykologisk troverdige karakterer
- Språk tilpasset perioden (men lesbart)

**Historisk vs. tidløst:**
Den gode historiske romanen gjør fortiden levende uten å gjøre den eksotisk. Karakterenes indre liv føles gjenkjennelig selv i fremmed setting.

**Andre historiske romaner:**
- Walter Scott (Ivanhoe)
- Leo Tolstoj (Krig og fred)
- Umberto Eco (Rosens navn)

**I Norge:**
- Undset: Kristin Lavransdatter, Olav Audunssøn
- Duun: Juvikfolke (delvis)
- Falkberget: Christianus Sextus`,
    },
    {
      id: 'norsk-vg3-4-3-example-1',
      type: 'example',
      title: 'Analyse: Kristin Lavransdatter',
      problem: `Analyser hvordan Undset skildrer Kristins utvikling gjennom trilogien.`,
      solution: `**Kransen - ungdommen:**

Kristin er datterens av Lavrans på Jørundgaard. Hun er vakker, stolt og viljesterk. Mot farens vilje forelsker hun seg i Erlend Nikulaussøn - en mann med dårlig rykte.

Konflikten mellom kjærlighet og plikt, mellom egne ønsker og andres forventninger, er sentral. Kristin velger Erlend, men bærer på skyld.

**Husfrue - modenheten:**

Som Erlends kone og mor til hans mange sønner må Kristin ta ansvar for gården Husaby. Hun sliter med ekteskapets vanskeligheter, Erlends uansvarlighet, og sine egne stolthet.

Denne delen viser hverdagens slitasje og modningens smerte. Kristin blir en sterk kvinne, men også hard.

**Korset - alderdommen:**

Etter Erlends død trekker Kristin seg tilbake. Hun forsones gradvis med fortiden og med Gud. Trilogien ender med at hun dør mens hun pleier pestofre i et kloster - en soning og forsoning.

**Utviklingslinjen:**
Fra opprørsk ungdom gjennom modningens prøvelser til forsoningens ro. Kristin gjennomgår en åndelig reise som speiler menneskelivets bue.

**Psykologisk dybde:**
Undset skildrer indre konflikter med stor innsikt. Kristins stolthet, kjærlighet, sjalusi, anger - alt er troverdig skildret.

**Katolsk tematikk:**
Synd, anger, soning, nåde - den katolske strukturen gir trilogien en åndelig dimensjon. Kristins liv blir en pilegrimsreise.`,
    },
    {
      id: 'norsk-vg3-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra «Kristin Lavransdatter» og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildrer Undset middelalderens dagligliv?',
            solution: 'Se etter konkrete detaljer om mat, klær, arbeid, ritualer - alt som gjør perioden levende.',
          },
          {
            label: 'b',
            task: 'Hva gjør Kristin til en moderne karakter?',
            solution: 'Hennes indre konflikter, selvstendighet og psykologiske kompleksitet føles gjenkjennelig.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Undsets kombinasjon av historisk autentisitet og psykologisk dybde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter kvinneperspektivet i «Kristin Lavransdatter».',
        hints: ['Hvordan skildres kvinners liv i middelalderen?', 'Hva er Kristins handlingsrom?', 'Er dette feministisk litteratur?'],
        solution: 'Diskusjonen bør reflektere over kvinneroller i historisk og litterær kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign Undsets middelalderroman med en moderne historisk roman.',
        hints: ['Hva er likt i tilnærmingen?', 'Hva skiller dem?', 'Hvilken effekt har det?'],
        solution: 'Sammenligningen bør belyse historisk romans sjanger og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Cora Sandel
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_4_4: TextbookChapter = {
  id: 'norsk-vg3-4-4',
  courseId: 'norsk-vg3',
  chapterNumber: '4.4',
  title: 'Cora Sandel',
  description: 'Cora Sandels forfatterskap og Alberte-trilogien.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-4-4-intro',
      type: 'text',
      content: `## Cora Sandel - kvinnens indre kamp

Cora Sandel (pseudonym for Sara Fabricius, 1880-1974) er en av de viktigste kvinnelige forfatterne i norsk litteratur. Hennes Alberte-trilogi (1926-1939) er en mesterlig skildring av en ung kvinnes kamp for selvstendighet og kunstnerisk utfoldelse.

**Liv og bakgrunn:**

Sara Fabricius ble født 20. desember 1880 i Kristiania. Familien flyttet til Tromsø da hun var tolv, og årene i Nord-Norge preget henne dypt - og ble stoff for trilogiens første bind.

Hun drømte om å bli maler og dro til Paris i 1906. Der levde hun et fattig bohembilde-liv, studerte kunst og møtte den svenske skulptøren Anders Jönsson, som hun giftet seg med i 1913.

Ekteskapet var vanskelig, og hun begynte å skrive - først som flukt, så som kall. I 1926 debuterte hun med «Alberte og Jakob» under pseudonymet Cora Sandel. Hun var da 45 år gammel.

Etter skilsmissen i 1926 livnærte hun seg som forfatter. Hun bodde i Sverige fra 1921 til sin død i 1974.

**Alberte-trilogien (1926-1939):**

Trilogien følger Alberte fra ungdomsårene i en nordnorsk by gjennom Paris-årene til kunstnerisk modning:

1. **Alberte og Jakob** (1926): Ungdomsårene i en kvelende nordnorsk by. Alberte drømmer om noe annet.
2. **Alberte og friheten** (1931): Paris. Fattigdom, kjærlighet, kunstnerdrømmer.
3. **Bare Alberte** (1939): Modning. Alberte finner sin stemme som forfatter.

**Tematikk:**

Sandels forfatterskap kretser rundt kvinnens situasjon:

1. **Kunstnerens kamp:** Albertes vei til å bli forfatter er lang og smertefull.
2. **Økonomisk avhengighet:** Kvinner uten egne penger er fanget.
3. **Seksualitet og kropp:** Sandel skriver åpent om kvinners kroppslige erfaringer.
4. **Samfunnets tvang:** De sosiale konvensjonene som begrenser kvinner.

**Stil:**

Sandels stil er særpreget:
- Presis, tilbakeholdt
- Mye usagt mellom linjene
- Skarpe observasjoner
- Ironi uten sentimentalitet
- Scenisk fremstilling

**Betydning:**

Cora Sandel er gjenoppdaget som en av periodens viktigste forfattere. Hennes presise skildring av kvinnelivet er blitt stadig mer verdsatt.`,
    },
    {
      id: 'norsk-vg3-4-4-def-1',
      type: 'definition',
      title: 'Cora Sandel (1880-1974)',
      content: `**Biografi:**
- Født Sara Fabricius 20. desember 1880 i Kristiania
- Oppvokst i Tromsø fra 1892
- Kunstnerstudier i Paris fra 1906
- Gift med Anders Jönsson 1913, skilt 1926
- Debuterte 45 år gammel
- Bodde i Sverige fra 1921
- Døde 3. april 1974

**Hovedverk:**
- *Alberte og Jakob* (1926)
- *Alberte og friheten* (1931)
- *Bare Alberte* (1939)
- Flere novellesamlinger

**Litterære kjennetegn:**
- Presis, tilbakeholdt stil
- Undertekst og det usagte
- Kvinneperspektiv
- Kunstnerproblematikk
- Sosial kritikk

**Betydning:**
Lenge oversett, nå anerkjent som en av periodens viktigste forfattere. Alberte-trilogien regnes som et hovedverk i norsk litteratur.`,
    },
    {
      id: 'norsk-vg3-4-4-example-1',
      type: 'example',
      title: 'Analyse: Alberte og Jakob',
      problem: `Analyser hvordan Sandel skildrer Albertes situasjon i trilogiens første bind.`,
      solution: `**Setting:**
En nordnorsk by (Tromsø) rundt århundreskiftet. Albertes familie har sett bedre dager og kjemper for å opprettholde fasaden.

**Alberte:**
- Drømmer om noe annet, noe mer
- Føler seg fanget i den trange småbyen
- Har kunstneriske lengsler hun knapt tør erkjenne
- Lider under morens kaldhet og familiens fattigdom

**Kulden:**
Den fysiske kulden i den nordnorske vinteren blir et symbol for den emosjonelle kulden i familien og samfunnet.

**Kroppen:**
Sandel skriver uvanlig direkte om Albertes kroppslige ubehag - kulden, sulten, menstruasjonen. Kroppen er en kilde til skam og lidelse.

**Samfunnets tvang:**
Konvensjonene bestemmer alt. Albertes familie må opprettholde fasaden selv om de er fattige. Jentene må oppføre seg «passende».

**Jakob:**
Broren Jakob er den eneste Alberte har et nært forhold til. Men også dette forholdet er komplisert og ladet.

**Stil:**
Sandel bruker en tilbakeholdt stil der mye ligger mellom linjene. Leseren må tolke det usagte.

**Sluttscenen:**
Bind 1 ender med at Alberte reiser fra byen. Det er en åpen slutt, men full av håp.`,
    },
    {
      id: 'norsk-vg3-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra Alberte-trilogien og analyser stilen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner Sandels språk?',
            solution: 'Presis, tilbakeholdt, mye usagt mellom linjene, skarpe observasjoner.',
          },
          {
            label: 'b',
            task: 'Hvordan bruker hun undertekst?',
            solution: 'Det viktigste sies ofte ikke direkte. Leseren må tolke kroppsspråk, pauser, det usagte.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Sandels særpregede stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Alberte med Nora i «Et dukkehjem».',
        hints: ['Begge er kvinner som søker frihet', 'Men situasjonene er forskjellige', 'Hvordan løser de sine problemer?'],
        solution: 'Sammenligningen belyser utviklingen i litteraturens behandling av kvinnespørsmålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor Cora Sandel lenge ble oversett.',
        hints: ['Kjønn og kanon', 'Stil som kan virke «liten»', 'Gjenoppdagelsen'],
        solution: 'Diskusjonen bør reflektere over kjønn og litterær verdsetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: MELLOMKRIGSLITTERATUR
// ============================================================================

export const CHAPTER_NORSK_VG3_5_1: TextbookChapter = {
  id: 'norsk-vg3-5-1',
  courseId: 'norsk-vg3',
  chapterNumber: '5.1',
  title: 'Politisk engasjert litteratur',
  description: 'Litteraturen i mellomkrigstiden - mellom verdenskrigene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg3-5-1-intro',
      type: 'text',
      content: `## Mellomkrigstiden - litteratur i en krisetid

Mellomkrigstiden (1918-1940) var en periode preget av politisk uro, økonomisk krise og ideologisk kamp. Litteraturen reflekterte denne uroen - mange forfattere engasjerte seg direkte i den politiske debatten.

**Historisk bakgrunn:**

Perioden var preget av:
- Ettervirkningene av første verdenskrig
- Den russiske revolusjonen (1917) og kommunismens fremvekst
- Fascismens fremvekst i Italia (1922) og nazismens i Tyskland (1933)
- Den store depresjonen (1929)
- Spansk borgerkrig (1936-1939)

Dette var en tid der nøytralitet syntes umulig. «Den som tier, samtykker» - forfatterne ble presset til å ta stilling.

**Politisk litteratur:**

Mange forfattere lot seg engasjere av tidens konflikter:

- **Arbeiderlitteratur:** Forfattere fra arbeiderklassen skildret arbeidernes kår
- **Antifascistisk litteratur:** Motstand mot nazismen og fascismen
- **Sosialistisk realisme:** Litteratur i tjeneste for arbeiderbevegelsen
- **Eksillitteratur:** Forfattere som flyktet fra nazismen

**Norge:**

I Norge var mellomkrigstiden preget av økonomisk krise, arbeidsledighet og politisk polarisering. Arbeiderpartiet vokste, men også Nasjonal Samling ble stiftet (1933).

Forfattere som Arnulf Øverland og Nordahl Grieg engasjerte seg mot nazismen. Andre, som Knut Hamsun, gikk motsatt vei.

**Dilemmaer:**

Perioden reiser vanskelige spørsmål:
- Bør litteraturen være politisk?
- Kan kunst være nøytral i en krisetid?
- Hva skjer med den kunstneriske kvaliteten når budskapet kommer først?

Disse spørsmålene er fortsatt aktuelle.`,
    },
    {
      id: 'norsk-vg3-5-1-def-1',
      type: 'definition',
      title: 'Tendenskunst',
      content: `**Tendenskunst** er kunst som har et bevisst politisk eller ideologisk budskap.

**Kjennetegn:**
- Klart politisk standpunkt
- Ønske om å påvirke
- Ofte realistisk form
- Karakterer representerer klasser/ideer
- Handling illustrerer tesen

**Forsvar:**
- Kunst er alltid politisk
- I krisetider må man ta stilling
- Litteraturen kan bidra til forandring

**Kritikk:**
- Kunst reduseres til propaganda
- Estetisk kvalitet ofres for budskap
- Karakterer blir talsmenn, ikke mennesker
- Kompleksitet forsvinner

**Eksempler:**
- Nordahl Griegs dramaer
- Sosialistisk realisme
- Deler av arbeiderlitteraturen

**Motsetningen:**
«L'art pour l'art» (kunst for kunstens skyld) - ideen om at kunst skal vurderes estetisk, uavhengig av politisk innhold.`,
    },
    {
      id: 'norsk-vg3-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter forholdet mellom kunst og politikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Bør forfattere ta politisk stilling?',
            solution: 'Argumenter for: ansvar i krisetider, litteraturens påvirkningskraft. Mot: kunstens autonomi, faren for propaganda.',
          },
          {
            label: 'b',
            task: 'Kan politisk litteratur også være god kunst?',
            solution: 'Ja, men det krever at det kunstneriske ikke ofres for budskapet. Kompleksitet og menneskelig innsikt må bevares.',
          },
        ],
        solution: 'Diskusjonen bør belyse spenningen mellom kunst og politikk fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_5_2: TextbookChapter = {
  id: 'norsk-vg3-5-2',
  courseId: 'norsk-vg3',
  chapterNumber: '5.2',
  title: 'Arnulf Øverland',
  description: 'Arnulf Øverlands lyrikk og hans kamp mot nazismen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg3-5-2-intro',
      type: 'text',
      content: `## Arnulf Øverland - dikteren og antifascisten

Arnulf Øverland (1889-1968) var en av Norges mest betydelige lyrikere og en uredd antifascist. Hans tale «Du må ikke sove» (1936) er blitt stående som et sterkt vitnesbyrd fra en mørk tid.

**Liv:**

Øverland ble født 27. april 1889 i Kristiansund. Han debuterte som lyriker i 1911 og utviklet seg til en mester i den tradisjonelle, formbevisste lyrikken.

På 1930-tallet engasjerte han seg sterkt mot nazismen. Talen «Du må ikke sove» advarte mot hva som skjedde i Tyskland og oppfordret til motstand.

Under krigen ble Øverland arrestert og sendt til Sachsenhausen. Han overlevde og fortsatte å skrive etter krigen.

**«Du må ikke sove»:**

Diktet/talen fra 1936 inneholder de berømte linjene:

«Du må ikke sitte trygt i ditt hjem
og si: Det er sørgelig, stakkars dem!
Du må ikke tåle så inderlig vel
den urett som ikke rammer deg selv!»

**Betydning:**

Øverland viste at lyrikk kunne være våpen i kampen mot undertrykkelse. Hans dikt er blitt tidløse uttrykk for moralsk ansvar.`,
    },
    {
      id: 'norsk-vg3-5-2-def-1',
      type: 'definition',
      title: 'Arnulf Øverland (1889-1968)',
      content: `**Biografi:**
- Født 27. april 1889 i Kristiansund
- Debuterte 1911
- Aktiv antifascist på 1930-tallet
- Fanget i Sachsenhausen 1941-45
- Døde 25. mars 1968

**Hovedverk:**
- «Brød og vin» (1919)
- «Hustavler» (1929)
- «Den røde front» (1937)
- «Du må ikke sove» (1936)

**Litterære kjennetegn:**
- Tradisjonell form
- Kraftfullt språk
- Politisk engasjement
- Moralsk alvor

**Berømte linjer:**
«Du må ikke tåle så inderlig vel / den urett som ikke rammer deg selv!»`,
    },
    {
      id: 'norsk-vg3-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser diktet «Du må ikke sove».',
        hints: ['Hvilke virkemidler brukes?', 'Hva er budskapet?', 'Hvorfor er det fortsatt aktuelt?'],
        solution: 'Analysen skal vise forståelse for diktets form, budskap og historiske kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_5_3: TextbookChapter = {
  id: 'norsk-vg3-5-3',
  courseId: 'norsk-vg3',
  chapterNumber: '5.3',
  title: 'Nordahl Grieg',
  description: 'Nordahl Griegs forfatterskap og kamp mot fascismen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg3-5-3-intro',
      type: 'text',
      content: `## Nordahl Grieg - dikteren som falt

Nordahl Grieg (1902-1943) var forfatter, journalist og motstandsmann. Han falt da flyet han var med på ble skutt ned over Berlin i 1943. Hans dikt og dramaer er blitt stående som vitnesbyrd om en generasjons idealisme og offer.

**Liv:**

Grieg ble født 1. november 1902 i Bergen. Han var nevø av komponisten Edvard Grieg. Tidlig viste han litterært talent og politisk engasjement.

Han reiste mye, dekket Spania-krigen som journalist, og engasjerte seg sterkt mot fascismen. Under krigen flyktet han til England der han virket for den norske motstandskampen.

Den 2. desember 1943 var han med som observatør på et bombefly over Berlin. Flyet ble skutt ned. Nordahl Grieg var 41 år gammel.

**Forfatterskap:**

Grieg skrev i mange sjangre:
- **Lyrikk:** «Norge i våre hjerter»
- **Drama:** «Vår ære og vår makt» (1935), «Nederlaget» (1937)
- **Romaner:** «Ung må verden ennu være» (1938)

**Dramaene:**

«Vår ære og vår makt» kritiserer norsk skipsfart som tjente på krigen. «Nederlaget» handler om Paris-kommunen og revolusjonens dilemmaer.

**Diktene:**

Griegs dikt fra krigstiden er blitt folkeeie:
- «Til ungdommen»
- «17. mai 1940»

**Betydning:**

Grieg ble et symbol på den idealistiske kampen mot fascismen. Hans unge død styrket mytologiseringen.`,
    },
    {
      id: 'norsk-vg3-5-3-def-1',
      type: 'definition',
      title: 'Nordahl Grieg (1902-1943)',
      content: `**Biografi:**
- Født 1. november 1902 i Bergen
- Nevø av Edvard Grieg
- Journalist og forfatter
- Dekket Spania-krigen
- Falt over Berlin 2. desember 1943

**Hovedverk:**
- *Vår ære og vår makt* (1935)
- *Nederlaget* (1937)
- «Til ungdommen» (dikt)
- «17. mai 1940» (dikt)

**Litterære kjennetegn:**
- Politisk engasjement
- Idealistisk tone
- Dramatisk nerve
- Lyrisk kraft`,
    },
    {
      id: 'norsk-vg3-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser diktet «Til ungdommen».',
        hints: ['Hva er budskapet?', 'Hvilke virkemidler brukes?', 'Hvorfor er det fortsatt brukt?'],
        solution: 'Analysen skal vise forståelse for diktets appell og betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: ETTERKRIGSLITTERATUREN
// ============================================================================

export const CHAPTER_NORSK_VG3_6_1: TextbookChapter = {
  id: 'norsk-vg3-6-1',
  courseId: 'norsk-vg3',
  chapterNumber: '6.1',
  title: 'Eksistensiell tematikk',
  description: 'Eksistensialismen og dens innflytelse på norsk etterkrigslitteratur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-6-1-intro',
      type: 'text',
      content: `## Eksistensialismen - filosofi og litteratur

Etter andre verdenskrig ble eksistensialismen den dominerende intellektuelle strømningen i Europa. Forfattere og filosofer stilte de store spørsmålene om menneskets eksistens, frihet og ansvar.

**Historisk kontekst:**

Krigen hadde vist sivilisasjonens skrøpelighet. Holocaust avslørte menneskets kapasitet for ondskap. Atombomben truet med total utslettelse. Hvordan leve i en slik verden?

**Eksistensialismens hovedtanker:**

1. **Eksistensen forut for essensen:** Mennesket er ikke skapt med et forhåndsbestemt vesen. Vi skaper oss selv gjennom våre valg.

2. **Frihet og ansvar:** Vi er «dømt til å være frie» (Sartre). Med friheten følger ansvaret for våre valg.

3. **Angst og meningsløshet:** Konfrontert med tilværelsens absurditet opplever mennesket angst.

4. **Autentisitet:** Å leve ekte, i tråd med seg selv, ikke etter andres forventninger.

**Sentrale tenkere:**

- **Jean-Paul Sartre:** «Eksistensen forut for essensen»
- **Albert Camus:** Absurditeten og opprøret
- **Simone de Beauvoir:** Eksistensialistisk feminisme

**I litteraturen:**

Eksistensialismens tematikk preget litteraturen:
- Karakterer som konfronteres med meningsløsheten
- Valgets betydning og konsekvenser
- Fremmedgjøring og ensomhet
- Søken etter autentisitet

**I Norge:**

Tarjei Vesaas, Jens Bjørneboe og andre lot seg inspirere av eksistensialismen, om enn på sine egne måter.`,
    },
    {
      id: 'norsk-vg3-6-1-def-1',
      type: 'definition',
      title: 'Eksistensialisme',
      content: `**Eksistensialismen** er en filosofisk retning som setter menneskets eksistens i sentrum.

**Hovedtanker:**
- «Eksistensen forut for essensen»
- Mennesket definerer seg selv gjennom valg
- Frihet innebærer ansvar
- Angst overfor tilværelsens meningsløshet
- Autentisitet som ideal

**Sentrale tenkere:**
- Jean-Paul Sartre (1905-1980)
- Albert Camus (1913-1960)
- Simone de Beauvoir (1908-1986)
- Martin Heidegger (1889-1976)

**I litteraturen:**
- Camus: *Fremmed*, *Pesten*
- Sartre: *Kvalmen*, *For lukkede dører*
- Beauvoir: *Det annet kjønn*

**Kritikk:**
- Pessimistisk?
- Ignorerer sosiale strukturer?
- Overdriver friheten?`,
    },
    {
      id: 'norsk-vg3-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar eksistensialismens hovedtanker.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr «eksistensen forut for essensen»?',
            solution: 'At mennesket ikke er skapt med et forhåndsbestemt vesen, men skaper seg selv gjennom sine valg.',
          },
          {
            label: 'b',
            task: 'Hva er forholdet mellom frihet og ansvar?',
            solution: 'Med friheten følger ansvaret. Vi kan ikke skylde på skjebnen eller andre - vi er ansvarlige for våre valg.',
          },
        ],
        solution: 'Forklaringen skal vise forståelse for eksistensialismens kjerneideer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_6_2: TextbookChapter = {
  id: 'norsk-vg3-6-2',
  courseId: 'norsk-vg3',
  chapterNumber: '6.2',
  title: 'Tarjei Vesaas',
  description: 'Tarjei Vesaas som modernist og hans hovedverk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-6-2-intro',
      type: 'text',
      content: `## Tarjei Vesaas - Norges fremste modernist

Tarjei Vesaas (1897-1970) regnes som Norges fremste modernistiske forfatter. Med romaner som «Fuglane» (1957) og «Is-slottet» (1963) skapte han et unikt litterært univers preget av poetisk prosa og eksistensiell tematikk.

**Liv:**

Vesaas ble født 20. august 1897 i Vinje i Telemark. Han vokste opp på gården Midtbø, som han senere overtok. Han var gift med forfatteren Halldis Moren Vesaas.

Han skrev på nynorsk og var sterkt knyttet til det telemarkske landskapet. Men hans tematikk er universell.

**Forfatterskap:**

Vesaas' forfatterskap utviklet seg fra tradisjonell bondefortelling til poetisk modernisme:

- Tidlige verker: Realistiske bondeskildringer
- Mellomfasen: Allegoriske romaner
- Modent forfatterskap: Poetisk modernisme

**Hovedverk:**

- **Fuglane** (1957): Om Mattis, en utviklingshemmet mann som lever med søsteren Hege
- **Is-slottet** (1963): Om to jenter, Siss og Unn, og et vennskap som ender tragisk

**Stil:**

Vesaas' stil er særpreget:
- Poetisk, billedrikt språk
- Enkle setninger med dybde
- Naturen som speil for sjelen
- Symboler og undertekst
- Det usagte er viktig

**Tematikk:**

- Annerledeshet og ensomhet
- Kommunikasjonens vanskelighet
- Grensen mellom liv og død
- Menneskets sårbarhet
- Kjærlighet og tap`,
    },
    {
      id: 'norsk-vg3-6-2-def-1',
      type: 'definition',
      title: 'Tarjei Vesaas (1897-1970)',
      content: `**Biografi:**
- Født 20. august 1897 i Vinje, Telemark
- Bonde på Midtbø
- Gift med Halldis Moren Vesaas
- Skrev på nynorsk
- Døde 15. mars 1970

**Hovedverk:**
- *Fuglane* (1957)
- *Is-slottet* (1963)
- *Bruene* (1966)
- *Båten om kvelden* (1968)

**Litterære kjennetegn:**
- Poetisk prosa
- Symbolikk
- Eksistensiell tematikk
- Naturen som stemningsbærer
- Det usagte

**Betydning:**
Norges fremste modernist. Internasjonalt anerkjent. Flere ganger nominert til Nobelprisen.`,
    },
    {
      id: 'norsk-vg3-6-2-example-1',
      type: 'example',
      title: 'Analyse: Fuglane',
      problem: `Analyser «Fuglane» (1957) med fokus på symbolikk og tematikk.`,
      solution: `**Handling:**
Mattis er en utviklingshemmet mann i 30-årene som bor med søsteren Hege. Han er «enkel», men har en dyp forbindelse til naturen. Når en rugdetrekk-fløyte går over, føler Mattis det som et tegn.

En dag kommer fergemannen Jørgen inn i deres liv. Han og Hege forelsker seg. Mattis føler seg utenfor. Romanen ender med at Mattis drukner seg.

**Symbolikk:**

1. **Rugdetrekket:**
Fuglen som trekker over gården blir et symbol på Mattis' identitet og verdi. Når den ikke kommer tilbake, mister han håpet.

2. **Båten:**
Mattis er ferjemann. Båten representerer hans livsvei - og til slutt hans død.

3. **Vannet:**
Grensen mellom liv og død. Mattis' forhold til vannet er ambivalent.

**Tematikk:**

- Annerledeshet og normalitet
- Ensomhet og lengsel etter tilhørighet
- Kommunikasjonens vanskelighet
- Kjærlighet og sjalusi
- Livets mening

**Stil:**
Vesaas skriver enkelt og poetisk. Under den enkle overflaten ligger dybde. Det usagte er like viktig som det sagte.`,
    },
    {
      id: 'norsk-vg3-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra «Fuglane» eller «Is-slottet» og analyser det.',
        hints: ['Se etter symbolikk', 'Hvordan brukes naturen?', 'Hva er underteksten?'],
        solution: 'Analysen skal vise forståelse for Vesaas poetiske stil og symbolbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7-15: VIDERE KAPITLER
// Lyrikk, Drama, Essay, Retorikk, Litterær analyse, Språk, Sidemål, Eksamen
// ============================================================================

export const CHAPTER_NORSK_VG3_7_1: TextbookChapter = {
  id: 'norsk-vg3-7-1',
  courseId: 'norsk-vg3',
  chapterNumber: '7.1',
  title: 'Samtidslitteratur 1970-i dag',
  description: 'Hovedtrekk ved norsk samtidslitteratur fra 1970-tallet til i dag.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-7-1-intro',
      type: 'text',
      content: `## Samtidslitteraturen - fra 1970 til i dag

De siste femti årene har norsk litteratur gjennomgått store endringer. Fra 1970-tallets politiske engasjement gjennom postmodernisme til dagens mangfoldige litterære landskap.

**1970-tallet: Politisk litteratur**

1970-tallet var preget av politisk radikalisering. Litteraturen ble et våpen i kampen for sosialisme, kvinnefrigjøring og antiimperialisme.

- Profilbevegelsen og politisk lyrikk
- Dag Solstads ml-fase
- Kvinnelitteraturens fremvekst
- Dokumentarromanen

**1980-90-tallet: Postmodernisme**

En ny generasjon reagerte mot 70-tallets politiske korrekthet:
- Jan Kjærstad: Romaneksperimenter
- Dag Solstad: Selvrefleksjon og tvil
- Kjartan Fløgstad: Stilistisk virtuositet
- Roy Jacobsen: Nordnorske fortellinger

**2000-tallet og fremover:**

- Karl Ove Knausgård: Autofiskjonens gjennombrudd
- Jon Fosse: Nobelprisen 2023
- Flerkulturelle stemmer
- Klimafiksjon
- Mangfold i sjangre og temaer`,
    },
    {
      id: 'norsk-vg3-7-1-def-1',
      type: 'definition',
      title: 'Autofiskjon',
      content: `**Autofiskjon** er litteratur som blander selvbiografi og fiksjon.

**Kjennetegn:**
- Forfatteren bruker eget navn
- Basert på egne opplevelser
- Men formet som litteratur
- Grensen mellom fakta og fiksjon utviskes

**Eksempler:**
- Karl Ove Knausgård: *Min kamp*
- Tomas Espedal
- Stig Sæterbakken

**Debatter:**
- Etikk: Hva med andre som skrives om?
- Sannhet: Hva er sant?
- Litteratur: Er dette kunst eller bekjennelse?`,
    },
    {
      id: 'norsk-vg3-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter utviklingen i norsk litteratur fra 1970 til i dag.',
        hints: ['Fra politikk til postmodernisme til autofiskjon', 'Hva har endret seg?', 'Hva er konstant?'],
        solution: 'Diskusjonen bør vise oversikt over hovedtrekkene i perioden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_8_1: TextbookChapter = {
  id: 'norsk-vg3-8-1',
  courseId: 'norsk-vg3',
  chapterNumber: '8.1',
  title: 'Lyrikk fra 1850 til i dag',
  description: 'Lyrikkens utvikling og analyse av dikt fra ulike perioder.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-8-1-intro',
      type: 'text',
      content: `## Lyrikk - fra romantikk til samtid

Lyrikken har gjennomgått store endringer fra romantikkens formfaste dikt til samtidens frie vers. Her følger vi utviklingen.

**Romantikken (1800-1850):**
- Henrik Wergeland
- Johan Sebastian Welhaven
- Nasjonale og romantiske temaer
- Fast form: rim og rytme

**Realismen (1850-1890):**
- Lyrikken tapte terreng for prosa og drama
- Men fortsatt diktning hos Ibsen, Bjørnson

**Nyromantikken (1890-tallet):**
- Obstfelder: Symbolistisk lyrikk
- Vilhelm Krag: Stemningsdikt
- Friere former

**Modernismen (1900-tallet):**
- Rolf Jacobsen: Teknologi og natur
- Olav H. Hauge: Enkelt og dypt
- Paal-Helge Haugen: Eksperimentell

**Samtidig:**
- Jan Erik Vold: Lydpoesi
- Tor Ulven: Eksistensiell
- Hanne Bramness, Ruth Lillegraven og mange andre`,
    },
    {
      id: 'norsk-vg3-8-1-def-1',
      type: 'definition',
      title: 'Lyrisk analyse',
      content: `**Modell for lyrisk analyse:**

**1. Førsteinntrykk:**
- Hva handler diktet om?
- Hvilken stemning skapes?

**2. Form:**
- Strofeinndeling
- Rim og rytme (eller fravær)
- Versemål

**3. Språklige virkemidler:**
- Bilder (metafor, simile)
- Gjentakelse
- Kontraster
- Lydlige virkemidler

**4. Innhold:**
- Tema og motiv
- Jeg-et i diktet
- Symboler

**5. Tolkning:**
- Hva vil diktet si?
- Historisk kontekst
- Aktualitet`,
    },
    {
      id: 'norsk-vg3-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Velg et dikt fra pensum og gjør en fullstendig analyse.',
        hints: ['Bruk analysemodellen', 'Vær systematisk', 'Begrunn tolkningene'],
        solution: 'Analysen skal demonstrere evne til systematisk diktanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_9_1: TextbookChapter = {
  id: 'norsk-vg3-9-1',
  courseId: 'norsk-vg3',
  chapterNumber: '9.1',
  title: 'Drama og teater',
  description: 'Dramaets utvikling og analyse av dramatiske tekster.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-9-1-intro',
      type: 'text',
      content: `## Drama - fra Ibsen til Fosse

Norsk drama har en stolt tradisjon fra Ibsen til Jon Fosse, som mottok Nobelprisen i 2023.

**Ibsen og det moderne drama:**
- Grunnleggeren
- Realistisk samtidsdrama
- Symbolsk drama

**Etter Ibsen:**
- Gunnar Heiberg
- Nordahl Grieg
- Helge Krog

**Etterkrigstidens drama:**
- Jens Bjørneboe
- Torborg Nedreaas
- Cecilie Løveid

**Jon Fosse:**
- Nobelprisen 2023
- Minimalistisk stil
- Det usagte
- Eksistensielle temaer`,
    },
    {
      id: 'norsk-vg3-9-1-def-1',
      type: 'definition',
      title: 'Dramaanalyse',
      content: `**Modell for dramaanalyse:**

**1. Handling og struktur:**
- Hva skjer?
- Hvordan er stykket bygget opp?
- Vendepunkt, klimaks

**2. Karakterer:**
- Hvem er de?
- Hvordan utvikler de seg?
- Relasjoner

**3. Sceneanvisninger:**
- Setting
- Kroppsspråk
- Symbolske elementer

**4. Dialog:**
- Undertekst
- Konflikter
- Det usagte

**5. Tematikk:**
- Hva handler det egentlig om?
- Aktualitet`,
    },
    {
      id: 'norsk-vg3-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser en scene fra et drama på pensum.',
        hints: ['Se på dialog og undertekst', 'Hva er konflikten?', 'Hvordan karakteriseres rollene?'],
        solution: 'Analysen skal vise evne til å lese dramatisk tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_10_1: TextbookChapter = {
  id: 'norsk-vg3-10-1',
  courseId: 'norsk-vg3',
  chapterNumber: '10.1',
  title: 'Essay og kreativ sakprosa',
  description: 'Essaysjangeren og skriving av essay.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skrive essay som utforsker tekster',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg3-10-1-intro',
      type: 'text',
      content: `## Essayet - den utforskende sjangeren

Essayet er en sakprosasjanger som kombinerer personlig refleksjon med faglig innsikt. Det er en fri form som tillater utforsking og undring.

**Essayets historie:**
- Michel de Montaigne (1533-1592): Sjangerens far
- Francis Bacon: Mer systematisk
- Norsk tradisjon: Vinje, Garborg, Skram

**Kjennetegn:**
- Personlig stemme
- Utforskende holdning
- Blanding av erfaring og refleksjon
- Fri form
- Assosiativ struktur

**Typer essay:**
- Personlig essay
- Fagessay
- Litterært essay
- Debattessay`,
    },
    {
      id: 'norsk-vg3-10-1-def-1',
      type: 'definition',
      title: 'Essayskriving',
      content: `**Hvordan skrive essay:**

**1. Velg et tema som engasjerer deg**
- Må være interessant å utforske
- Kan kobles til pensum

**2. Utforsk, ikke konkluder for tidlig**
- La tankene vandre
- Følg assosiasjonene
- Vær åpen for overraskelser

**3. Bruk personlig stemme**
- Du er til stede i teksten
- Egne erfaringer kan brukes
- Men ikke bli selvopptatt

**4. Struktur**
- Ikke stiv, men likevel gjennomtenkt
- Innledning som fanger
- Utvikling av tankene
- Avslutning som åpner

**5. Bruk kilder**
- Sitater og referanser
- Dialog med andre tekster
- Men din stemme skal dominere`,
    },
    {
      id: 'norsk-vg3-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv et essay om et litterært tema.',
        hints: ['Velg noe som engasjerer', 'Vær personlig men reflektert', 'Trekk inn tekster fra pensum'],
        solution: 'Essayet skal demonstrere evne til utforskende skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_11_1: TextbookChapter = {
  id: 'norsk-vg3-11-1',
  courseId: 'norsk-vg3',
  chapterNumber: '11.1',
  title: 'Retorisk analyse',
  description: 'Retorisk analyse av sakprosa og taler.',
  estimatedMinutes: 65,
  competenceGoals: [
    'skrive retoriske analyser av sakprosa',
    'bruke fagkunnskap i muntlige presentasjoner',
  ],
  content: [
    {
      id: 'norsk-vg3-11-1-intro',
      type: 'text',
      content: `## Retorikk - overtalelsens kunst

Retorikken har røtter tilbake til antikken. Den handler om hvordan vi bruker språk for å overbevise og påvirke.

**De tre appellformene:**

1. **Etos:** Avsenderens troverdighet
2. **Patos:** Appell til følelsene
3. **Logos:** Logisk argumentasjon

**Toulmins argumentmodell:**
- Påstand (det du vil bevise)
- Belegg (beviset)
- Hjemmel (koblingen mellom påstand og belegg)

**Retorisk situasjon:**
- Hvem taler?
- Til hvem?
- I hvilken sammenheng?
- Med hvilket formål?`,
    },
    {
      id: 'norsk-vg3-11-1-def-1',
      type: 'definition',
      title: 'Retorisk analyse - modell',
      content: `**Modell for retorisk analyse:**

**1. Den retoriske situasjonen:**
- Hvem er avsender?
- Hvem er mottaker?
- Hva er konteksten?
- Hva er formålet?

**2. Innhold:**
- Hva er hovedpåstanden?
- Hvilke argumenter brukes?

**3. Appellformene:**
- Etos: Hvordan bygges troverdighet?
- Patos: Hvordan appelleres til følelser?
- Logos: Hvilken logikk brukes?

**4. Virkemidler:**
- Språklige bilder
- Gjentakelse
- Kontraster
- Retoriske spørsmål

**5. Vurdering:**
- Er teksten effektiv?
- Hva fungerer, hva fungerer ikke?`,
    },
    {
      id: 'norsk-vg3-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-11-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjør en retorisk analyse av en kronikk eller tale.',
        hints: ['Bruk analysemodellen', 'Identifiser appellformene', 'Vurder effektiviteten'],
        solution: 'Analysen skal demonstrere evne til systematisk retorisk analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_12_1: TextbookChapter = {
  id: 'norsk-vg3-12-1',
  courseId: 'norsk-vg3',
  chapterNumber: '12.1',
  title: 'Litterær analyse og tolkning',
  description: 'Analysemetoder og sammenlignende analyse.',
  estimatedMinutes: 70,
  competenceGoals: [
    'skrive litterære analyser og sammenligninger',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  content: [
    {
      id: 'norsk-vg3-12-1-intro',
      type: 'text',
      content: `## Litterær analyse - metoder og tilnærminger

Litterær analyse handler om å tolke og forstå tekster. Det finnes ulike tilnærminger og metoder.

**Nærlesing:**
- Detaljert analyse av språk og form
- Fokus på teksten selv
- Virkemidler og struktur

**Kontekstuell lesning:**
- Teksten i historisk sammenheng
- Forfatterens biografi
- Samtidige hendelser

**Tematisk lesning:**
- Fokus på hva teksten handler om
- Universelle temaer
- Sammenligning på tvers av tekster

**Sammenlignende analyse:**
- Likheterpå og forskjeller
- Utviklings linjer
- Tematiske forbindelser`,
    },
    {
      id: 'norsk-vg3-12-1-def-1',
      type: 'definition',
      title: 'Sammenlignende analyse',
      content: `**Sammenlignende analyse** innebærer å analysere to eller flere tekster i forhold til hverandre.

**Fremgangsmåte:**
1. Velg sammenlignbare tekster
2. Identifiser sammenligningsgrunnlaget (tema, form, periode)
3. Analyser hver tekst
4. Pek på likheter
5. Pek på forskjeller
6. Diskuter betydningen av likheter/forskjeller

**Sammenligningsgrunnlag:**
- Samme tema, ulik tid
- Samme periode, ulik form
- Samme forfatter, ulike verk
- Ulike forfattere, samme tema

**Vær oppmerksom på:**
- Ikke bare liste opp likheter/forskjeller
- Analyser og diskuter
- Trekk konklusjoner`,
    },
    {
      id: 'norsk-vg3-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-12-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv en sammenlignende analyse av to tekster.',
        hints: ['Velg tekster med noe felles', 'Analyser begge grundig', 'Diskuter likheter og forskjeller'],
        solution: 'Analysen skal vise evne til systematisk sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_13_1: TextbookChapter = {
  id: 'norsk-vg3-13-1',
  courseId: 'norsk-vg3',
  chapterNumber: '13.1',
  title: 'Sprak i endring',
  description: 'Talemålsendringer og språk i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare endringer i norsk talemål i dag',
  ],
  content: [
    {
      id: 'norsk-vg3-13-1-intro',
      type: 'text',
      content: `## Språk i endring - norsk talemål i dag

Norsk talemål er i konstant endring. Dialekter utvikler seg, nye språkvarieteter oppstår, og påvirkning utenfra setter spor.

**Hovedtendenser:**

1. **Dialektutjevning:**
- Lokale dialekttrekk svekkes
- Regionale former styrkes
- Men dialektene lever videre

2. **Urbanisering:**
- Bymålene sprer seg
- Oslo-dialekten har stor innflytelse
- Men motreaksjoner finnes

3. **Nye varieteter:**
- Multietnolekter
- Ungdomsspråk
- Påvirkning fra engelsk

4. **Digitalt språk:**
- SMS og sosiale medier
- Forkortelser og emoji
- Uformelt skriftspråk`,
    },
    {
      id: 'norsk-vg3-13-1-def-1',
      type: 'definition',
      title: 'Multietnolekt',
      content: `**Multietnolekt** er en språkvarietet som har oppstått i flerkulturelle bymiljøer.

**Kjennetegn:**
- Trekk fra flere språk
- Særegen intonasjon
- Egen grammatikk
- Spesielle ord og uttrykk

**Eksempler på trekk:**
- Bruk av «liksom» og «sånn»
- Særegne pronomen
- Engelske og andre lånord
- Avvikende ordstilling

**Debatt:**
- Ressurs eller problem?
- Identitetsuttrykk
- Sosiale konsekvenser`,
    },
    {
      id: 'norsk-vg3-13-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-13-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter endringer i norsk talemål.',
        hints: ['Hvilke tendenser ser du?', 'Hva er årsakene?', 'Er det positivt eller negativt?'],
        solution: 'Diskusjonen bør vise oversikt over språklige endringer og refleksjon over dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_14_1: TextbookChapter = {
  id: 'norsk-vg3-14-1',
  courseId: 'norsk-vg3',
  chapterNumber: '14.1',
  title: 'Sidemål og språknormer',
  description: 'Hovedmål og sidemål - praktisk språkkompetanse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'mestre formkrav i hovedmål og sidemål',
  ],
  content: [
    {
      id: 'norsk-vg3-14-1-intro',
      type: 'text',
      content: `## Hovedmål og sidemål

I Norge har vi to offisielle skriftspråk: bokmål og nynorsk. Alle elever lærer begge, ett som hovedmål og ett som sidemål.

**Hvorfor to målformer?**
- Historisk arv
- Demokratisk prinsipp
- Kulturelt mangfold

**Likheter:**
- Samme språk, ulike normer
- Gjensidig forståelige
- Felles ordforråd i stor grad

**Forskjeller:**
- Bøyningsmønstre
- Ordvalg
- Setningsstruktur (delvis)

**Tips for sidemål:**
- Les mye på sidemålet
- Øv regelmessig
- Bruk ordbok
- Lær bøyningsreglene`,
    },
    {
      id: 'norsk-vg3-14-1-def-1',
      type: 'definition',
      title: 'Bokmål og nynorsk - hovedforskjeller',
      content: `**Hovedforskjeller:**

**Bøyning:**
- Nynorsk har ofte flere sterke verb
- Ulike endelser i substantiv og adjektiv
- Nynorsk har ofte -a i infinitiv (å vera)

**Ordvalg:**
- Nynorsk: berre, difor, kvifor
- Bokmål: bare, derfor, hvorfor

**Setningsstruktur:**
- Nynorsk bruker ofte kortere setninger
- Enkelte konstruksjoner er ulike

**Rettskriving:**
- Begge har valgfrihet
- Følg én linje konsekvent`,
    },
    {
      id: 'norsk-vg3-14-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-14-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv en tekst på sidemålet ditt.',
        hints: ['Velg et tema du kjenner', 'Bruk ordbok', 'Les korrektur nøye'],
        solution: 'Teksten skal vise kompetanse i sidemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG3_15_1: TextbookChapter = {
  id: 'norsk-vg3-15-1',
  courseId: 'norsk-vg3',
  chapterNumber: '15.1',
  title: 'Eksamensforberedelse',
  description: 'Forberedelse til skriftlig og muntlig eksamen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'skrive tekster i ulike sjangre',
    'bruke fagterminologi presist',
    'presentere fagstoff muntlig',
  ],
  content: [
    {
      id: 'norsk-vg3-15-1-intro',
      type: 'text',
      content: `## Eksamensforberedelse

Eksamen i norsk har to deler: skriftlig (hovedmål eller sidemål) og muntlig.

**Skriftlig eksamen:**
- 5 timer
- Kortsvar + langsvar
- Velg oppgave du mestrer
- Disponer tiden

**Kortsvar:**
- Tekstanalyse
- Bruk fagbegreper
- Strukturert svar
- Ca. 300-500 ord

**Langsvar:**
- Flere alternativer
- Kreativ, resonnerende eller fagartikkel
- Ca. 1000-1500 ord

**Muntlig eksamen:**
- 24/48 timer forberedelse
- Presentasjon + fagsamtale
- Vis bredde og dybde`,
    },
    {
      id: 'norsk-vg3-15-1-def-1',
      type: 'definition',
      title: 'Vurderingskriterier',
      content: `**Hva vurderes:**

**Innhold:**
- Relevant for oppgaven
- Faglig forståelse
- Selvstendighet

**Struktur:**
- Klar disposisjon
- God sammenheng
- Innledning og avslutning

**Språk:**
- Variert og presist
- Tilpasset sjangeren
- Fagterminologi

**Formelle ferdigheter:**
- Rettskriving
- Tegnsetting
- Grammatikk`,
    },
    {
      id: 'norsk-vg3-15-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-15-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Øv på en eksamensoppgave under tidspress.',
        hints: ['Bruk 5 timer på langsvaret', 'Disponer tiden', 'Les korrektur'],
        solution: 'Øvelsen gir erfaring med eksamenssituasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSTRA KAPITLER FOR DYBDE
// ============================================================================

// ----------------------------------------------------------------------------
// 6.3 Jens Bjørneboe
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_6_3: TextbookChapter = {
  id: 'norsk-vg3-6-3',
  courseId: 'norsk-vg3',
  chapterNumber: '6.3',
  title: 'Jens Bjørneboe',
  description: 'Jens Bjørneboes forfatterskap og samfunnskritikk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-6-3-intro',
      type: 'text',
      content: `## Jens Bjørneboe - opprøreren

Jens Bjørneboe (1920-1976) var en av norsk litteraturs mest kontroversielle og kompromissløse forfattere. Han var romanforfatter, dramatiker, essayist og debattant. Hans forfatterskap er preget av et intenst engasjement mot undertrykkelse og urettferdighet.

**Liv og bakgrunn:**

Bjørneboe ble født 9. oktober 1920 i Kristiansand. Han studerte maleri i Tyskland før krigen, og erfaringene fra mellomkrigstiden preget ham dypt. Han så fascismen på nært hold og forstod dens farer.

Etter krigen arbeidet han som lærer, blant annet ved steinerskolen på Nesodden. Erfaringene fra skolen ble utgangspunkt for romanen «Jonas» (1955), som kritiserte det norske skolesystemet skarpt.

Bjørneboe var hele sitt liv en engasjert debattant. Han tok opp kontroversielle temaer som narkotikapolitikk, fengselsvesen og dødsstraff. Han var også alkoholiker og led av depresjoner.

Den 9. mai 1976 tok Bjørneboe sitt eget liv.

**Hovedverk:**

- **Jonas** (1955): Kritikk av skolesystemet
- **Under en hårdere himmel** (1957): Om nazismen
- **Drømmen og hjulet** (1964): Hamar-trilogiens første del
- **Bestialitetens historie** (triologi):
  - *Frihetens øyeblikk* (1966)
  - *Kruttårnet* (1969)
  - *Stillheten* (1973)
- **Haiene** (1974): Om utbytting i internasjonal skipsfart

**Bestialitetens historie:**

Trilogien er Bjørneboes hovedverk. Gjennom bøddelen som forteller, utforsker Bjørneboe menneskets kapasitet for ondskap gjennom historien - fra inkvisisjonen til Auschwitz.

Tematikken er tung: Torturen, henrettelsene, det systematiske grusomhetene. Men Bjørneboe spør også: Hvordan kan mennesker begå slike handlinger? Og hvordan kan vi forhindre det?

**Stil og tone:**

Bjørneboes stil er direkte, ofte provoserende. Han bruker ironi, sarkasme og overdrivelse for å få frem poengene sine. Tonen er aldri nøytral - Bjørneboe er engasjert.

**Betydning:**

Bjørneboe var en uredd forfatter som tok opp temaer andre unnlot. Hans kritikk av institusjoner og maktstrukturer er fortsatt aktuell. Han påvirket senere generasjoner av samfunnskritiske forfattere.`,
    },
    {
      id: 'norsk-vg3-6-3-def-1',
      type: 'definition',
      title: 'Jens Bjørneboe (1920-1976)',
      content: `**Biografi:**
- Født 9. oktober 1920 i Kristiansand
- Studerte maleri i Tyskland
- Lærer ved steinerskolen
- Forfatter, dramatiker, debattant
- Tok sitt liv 9. mai 1976

**Hovedverk:**
- *Jonas* (1955)
- *Under en hårdere himmel* (1957)
- *Bestialitetens historie* (1966-1973)
- *Haiene* (1974)

**Litterære kjennetegn:**
- Engasjert, provoserende
- Kritikk av institusjoner
- Utforsking av ondskapen
- Ironi og sarkasme

**Tematikk:**
- Maktmisbruk og undertrykkelse
- Menneskets kapasitet for ondskap
- Frihet og ansvar
- Kritikk av skolevesen, fengsel, rettsapparat

**Betydning:**
En av norsk litteraturs mest kompromissløse stemmer. Fortsatt aktuell og omdiskutert.`,
    },
    {
      id: 'norsk-vg3-6-3-def-2',
      type: 'definition',
      title: 'Bestialitetens historie',
      content: `**Bestialitetens historie** er Jens Bjørneboes hovedverk - en trilogi om menneskets kapasitet for ondskap.

**Bindene:**
1. *Frihetens øyeblikk* (1966): Inkvisisjonen og hekseprosessene
2. *Kruttårnet* (1969): Kolonialismen og slaveriet
3. *Stillheten* (1973): Holocaust og moderne tortur

**Strukturen:**
En bøddel forteller sin livshistorie og reflekterer over sin rolle i historiens grusomheter.

**Tematikk:**
- Hvorfor begår mennesker ondskap?
- Systemenes ansvar
- Individets medvirkning
- Kan ondskapen overvinnes?

**Stil:**
Blanding av historisk dokumentasjon og fiksjon. Direkte, til tider grotesk skildring av volden.

**Resepsjon:**
Verket er blitt stående som et av de viktigste i norsk litteratur. Det er ubehagelig, men nødvendig lesning.`,
    },
    {
      id: 'norsk-vg3-6-3-example-1',
      type: 'example',
      title: 'Analyse: Jonas (1955)',
      problem: `Analyser Bjørneboes debutroman «Jonas» som skolekritikk.`,
      solution: `**Handling:**
Jonas er en sensitiv, kunstnerisk gutt som ikke passer inn i skolesystemet. Han blir plaget av medelever og misforstått av lærere. Romanen følger hans lidelseshistorie gjennom skolen.

**Kritikken:**

1. **Konformitet:**
Skolen krever at alle skal være like. Jonas' annerledeshet straffes.

2. **Manglende forståelse:**
Lærerne ser ikke barnets behov. De er mer opptatt av disiplin enn av læring.

3. **Systemets brutalitet:**
Skolesystemet er skildret som undertrykkende. Det knuser individualiteten.

**Biografisk bakgrunn:**
Bjørneboe arbeidet selv som lærer ved steinerskolen, som hadde en alternativ pedagogikk. Romanen reflekterer hans erfaring med forskjellen.

**Resepsjon:**
Romanen skapte debatt om skolepolitikk. Den er fortsatt relevant i diskusjoner om tilpasset opplæring.

**Litterær kvalitet:**
«Jonas» er ikke bare et pamflett - det er en roman med litterær kvalitet. Jonas er en levende karakter, ikke bare et talerør.`,
    },
    {
      id: 'norsk-vg3-6-3-tip-1',
      type: 'tip',
      title: 'Bjørneboe-sitater',
      content: `**Berømte sitater fra Bjørneboe:**

«For å si det rett ut: når det gjelder menneskeslakting og tortur, har menneskeheten aldri vært bedre utrustet enn i dag.»
- *Frihetens øyeblikk*

«Hvor det finnes makt, vil det alltid finnes bødler.»
- *Bestialitetens historie*

«Det er menneskene som utgjør helvete for mennesker.»
- *Under en hårdere himmel*

Sitatene viser Bjørneboes mørke, men nødvendige blikk på menneskets natur.`,
    },
    {
      id: 'norsk-vg3-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra «Bestialitetens historie» og diskuter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildrer Bjørneboe ondskapen?',
            solution: 'Direkte, usentimentalt, med dokumentarisk preg. Han viser det groteske uten å moralisere.',
          },
          {
            label: 'b',
            task: 'Hva er bøddelens rolle som forteller?',
            solution: 'Bøddelen er både deltaker og observatør. Han tvinger leseren til å konfrontere ondskapen innenfra.',
          },
          {
            label: 'c',
            task: 'Er det problematisk å skildre vold så direkte?',
            solution: 'Det er en etisk diskusjon. Bjørneboe mente det var nødvendig for å forstå. Andre mener det kan bli spekulativt.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over litteraturens ansvar og muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Bjørneboe med andre samfunnskritiske forfattere.',
        hints: ['F.eks. Ibsen, Øverland, eller samtidige', 'Hva er likt, hva er forskjellig?', 'Ulike strategier for kritikk?'],
        solution: 'Sammenligningen bør belyse ulike former for litterær samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter Bjørneboes aktualitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Er temaene i «Bestialitetens historie» fortsatt relevante?',
            solution: 'Ja - tortur, folkemord, systematisk vold finnes fortsatt. Bjørneboes spørsmål om ondskapen er tidløse.',
          },
          {
            label: 'b',
            task: 'Hvordan bør vi lese Bjørneboe i dag?',
            solution: 'Som påminnelse om menneskets mørke sider og nødvendigheten av å bekjempe undertrykkelse.',
          },
        ],
        solution: 'Diskusjonen bør vise forståelse for Bjørneboes vedvarende relevans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Kvinnestemmer: Torborg Nedreaas
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_6_4: TextbookChapter = {
  id: 'norsk-vg3-6-4',
  courseId: 'norsk-vg3',
  chapterNumber: '6.4',
  title: 'Kvinnestemmer: Torborg Nedreaas',
  description: 'Torborg Nedreaas og kvinnestemmer i etterkrigslitteraturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-6-4-intro',
      type: 'text',
      content: `## Torborg Nedreaas og kvinnestemmene

Torborg Nedreaas (1906-1987) er en av de viktigste kvinnelige forfatterne i norsk etterkrigslitteratur. Hennes romaner om Herdis er blitt klassikere som skildrer kvinners liv med stor psykologisk innsikt.

**Liv:**

Nedreaas ble født 13. november 1906 i Bergen. Hun debuterte sent, i 1945, med novellesamlingen «Bak skapet står øksene». Gjennombruddet kom med «Trylleglasset» (1950) og de to Herdis-romanene.

Hun var aktiv i motstandsbevegelsen under krigen og forble politisk engasjert hele livet.

**Herdis-romanene:**

- **Musikk fra en blå brønn** (1960): Herdis' barndom og ungdom
- **Ved neste nymåne** (1971): Herdis' voksenliv

Romanene skildrer en kvinnes liv fra barndom gjennom ungdom til voksen alder. Herdis er en sterk, selvstendig kvinne som kjemper for selvstendighet i et samfunn som begrenser kvinner.

**Tematikk:**

- Kvinners begrensede muligheter
- Klasseskiller
- Kjærlighet og seksualitet
- Kunstnerisk utfoldelse
- Politisk bevissthet

**Stil:**

Nedreaas skriver med psykologisk dybde og sosial bevissthet. Hun fanger hverdagens detaljer og store spørsmål i samme grep.

**Andre kvinnestemmer:**

Nedreaas var ikke alene. Andre viktige kvinnelige forfattere i perioden inkluderer:
- Ebba Haslund
- Herbjørg Wassmo
- Liv Køltzow
- Cecilie Løveid`,
    },
    {
      id: 'norsk-vg3-6-4-def-1',
      type: 'definition',
      title: 'Torborg Nedreaas (1906-1987)',
      content: `**Biografi:**
- Født 13. november 1906 i Bergen
- Debuterte 1945
- Aktiv i motstandsbevegelsen
- Døde 30. juni 1987

**Hovedverk:**
- *Trylleglasset* (1950)
- *Musikk fra en blå brønn* (1960)
- *Ved neste nymåne* (1971)

**Litterære kjennetegn:**
- Psykologisk dybde
- Kvinneperspektiv
- Sosial bevissthet
- Detaljert hverdagsskildring

**Betydning:**
En av de viktigste kvinnelige forfatterne i norsk litteratur. Herdis-romanene er blitt klassikere.`,
    },
    {
      id: 'norsk-vg3-6-4-example-1',
      type: 'example',
      title: 'Analyse: Musikk fra en blå brønn',
      problem: `Analyser Herdis som karakter i «Musikk fra en blå brønn» (1960).`,
      solution: `**Herdis:**

Herdis er en fattig jente som vokser opp i Bergen tidlig på 1900-tallet. Hun er intelligent, kunstnerisk og selvstendig - egenskaper som kolliderer med tidens forventninger til kvinner.

**Klasseperspektivet:**

Herdis' fattigdom preger henne. Hun ser klasseskillene tydelig og utvikler en politisk bevissthet. Men hun kjemper også mot skammen over sin bakgrunn.

**Kjønnsperspektivet:**

Som kvinne har Herdis begrensede muligheter. Utdanning, karriere, selvstendighet - alt dette er vanskeligere for kvinner. Men hun nekter å gi opp.

**Kunstnerdømmen:**

Herdis drømmer om musikk og kunst. Denne lengselen er et sentralt tema - kunsten som utvei fra fattigdommen og konvensjonene.

**Psykologisk dybde:**

Nedreaas skildrer Herdis' indre liv med stor innsikt. Vi forstår hennes drømmer, frustrasjoner og håp.

**Romanens struktur:**

«Musikk fra en blå brønn» er ikke en tradisjonell dannelsesroman. Den er mer fragmentarisk, mer poetisk, med fokus på øyeblikk og stemninger.`,
    },
    {
      id: 'norsk-vg3-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Herdis med Alberte (Cora Sandel).',
        hints: ['Begge er kvinner som kjemper for selvstendighet', 'Ulike tider, men lignende problemer?', 'Ulike løsninger?'],
        solution: 'Sammenligningen bør belyse kontinuitet og endring i skildringen av kvinners liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter betydningen av kvinnelige forfattere i norsk litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke perspektiver bidrar kvinnelige forfattere med?',
            solution: 'Erfaringer og perspektiver som mannlige forfattere ofte ikke fanger. Kvinners hverdagsliv, kropp, relasjoner.',
          },
          {
            label: 'b',
            task: 'Hvorfor ble mange kvinnelige forfattere oversett?',
            solution: 'Kanon ble skapt av menn. Kvinners temaer ble ansett som «private» eller «små». Feministisk litteraturforskning har endret dette.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over kjønn og kanondannelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 7.2 Postmodernisme og metafiksjon
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_7_2: TextbookChapter = {
  id: 'norsk-vg3-7-2',
  courseId: 'norsk-vg3',
  chapterNumber: '7.2',
  title: 'Postmodernisme og metafiksjon',
  description: 'Postmodernismen i norsk litteratur og metafiksjonens teknikker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-7-2-intro',
      type: 'text',
      content: `## Postmodernismen - etter det moderne

Postmodernismen oppsto som reaksjon på modernismen og fikk gjennomslag i litteraturen fra 1960-tallet. I Norge kom det postmodernistiske gjennombruddet på 1980-tallet med forfattere som Jan Kjærstad og Dag Solstad.

**Kjennetegn ved postmodernismen:**

1. **Skepsis til store fortellinger:**
Postmodernismen avviser universelle sannheter og ideologier. Det finnes ikke én sannhet, bare perspektiver.

2. **Lek med konvensjoner:**
Sjangergrenser brytes ned. Ironi, pastisj og parodi er vanlige virkemidler.

3. **Intertekstualitet:**
Tekster refererer til andre tekster. Alt er sitat, ingen originalitet.

4. **Metafiksjon:**
Teksten reflekterer over seg selv som tekst. Illusjonen av virkelighet brytes.

5. **Fragmentering:**
Helheten er tapt. Virkeligheten er kaotisk og uoversiktlig.

**Postmodernisme vs. modernisme:**

Mens modernismen søkte mening i fragmentene, aksepterer postmodernismen meningsløsheten med et skuldertrekk - eller et smil.

**I Norge:**

Sentrale postmodernistiske forfattere:
- Jan Kjærstad: Romaneksperimenter
- Dag Solstad: Selvrefleksjon og ironi
- Kjartan Fløgstad: Stilistisk lek
- Erlend Loe: Ironi og minimalisme`,
    },
    {
      id: 'norsk-vg3-7-2-def-1',
      type: 'definition',
      title: 'Metafiksjon',
      content: `**Metafiksjon** er fiksjon som reflekterer over sin egen status som fiksjon.

**Kjennetegn:**
- Teksten kommenterer seg selv
- Illusjonen brytes
- Forfatteren trer inn i teksten
- Leserens rolle tematiseres

**Teknikker:**
- Fortelleren henvender seg til leseren
- Karakterer vet at de er i en bok
- Handlingen kommenterer hvordan den er konstruert
- Flere nivåer av fortelling

**Eksempler internasjonalt:**
- Italo Calvino: *Hvis en vinternatt en reisende*
- John Fowles: *The French Lieutenant's Woman*
- Paul Auster: *New York-trilogien*

**I Norge:**
- Jan Kjærstad
- Dag Solstad (delvis)
- Erlend Loe

**Funksjon:**
Metafiksjon minner leseren om at teksten er konstruert. Den avslører fiksjonen som fiksjon og inviterer til refleksjon over fortellingens natur.`,
    },
    {
      id: 'norsk-vg3-7-2-def-2',
      type: 'definition',
      title: 'Intertekstualitet',
      content: `**Intertekstualitet** betyr at tekster forholder seg til andre tekster.

**Former:**
- Sitater
- Allusjoner
- Pastisj (imitasjon av stil)
- Parodi (ironisk imitasjon)
- Referanser

**Teoretisk bakgrunn:**
Julia Kristeva introduserte begrepet. Roland Barthes: «Teksten er et vev av sitater.»

**Konsekvenser:**
- Ingen tekst er helt original
- Alt er allerede skrevet
- Mening skapes i møtet mellom tekster
- Leseren må kjenne intertekstene

**I postmodernismen:**
Postmodernister bruker intertekstualitet bevisst og lekent. De siterer og blander sjangre, høy og lav kultur.`,
    },
    {
      id: 'norsk-vg3-7-2-example-1',
      type: 'example',
      title: 'Jan Kjærstads romankunst',
      problem: `Analyser Jan Kjærstads romaner som eksempler på postmodernistisk litteratur.`,
      solution: `**Jan Kjærstad (f. 1953):**

Kjærstad er en av Norges fremste postmodernistiske forfattere. Hans Jonas Wergeland-trilogi er et hovedverk.

**Jonas Wergeland-trilogien:**
- *Forføreren* (1993)
- *Erobreren* (1996)
- *Oppdageren* (1999)

**Postmodernistiske trekk:**

1. **Multiperspektivisme:**
Jonas' liv fortelles fra mange vinkler. Ingen versjon er «sann».

2. **Metafiksjon:**
Romanen reflekterer over fortelling, hukommelse, identitet.

3. **Intertekstualitet:**
Referanser til litteratur, populærkultur, vitenskap, historie.

4. **Fragmentering:**
Handlingen presenteres ikke lineært, men som puslespillbiter.

5. **Lek med sjangre:**
Krimi, biografi, essayistikk - alt blandes.

**Tematikk:**
- Identitetens ustabilitet
- Fortellingens makt
- Norsk nasjonalkarakter
- Hukommelse og glemsel

**Litterær kvalitet:**
Kjærstads romaner er ambisiøse og intellektuelt stimulerende. De krever mye av leseren, men belønner innsatsen.`,
    },
    {
      id: 'norsk-vg3-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar postmodernismens hovedtrekk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med «skepsis til store fortellinger»?',
            solution: 'At postmodernismen avviser universelle sannheter og ideologier. Det finnes ikke én riktig versjon av virkeligheten.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller postmodernismen seg fra modernismen?',
            solution: 'Modernismen søkte mening i fragmentene, postmodernismen aksepterer meningsløsheten. Modernismen var alvorlig, postmodernismen er ofte ironisk.',
          },
        ],
        solution: 'Forklaringen skal vise forståelse for postmodernismens særtrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn eksempler på intertekstualitet i en tekst du kjenner.',
        hints: ['Se etter sitater og referanser', 'Hva er effekten?', 'Må leseren kjenne referansene?'],
        solution: 'Analysen skal demonstrere forståelse for intertekstualitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved postmodernistisk litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er styrkene ved postmodernismen?',
            solution: 'Intellektuell stimulans, lek og humor, avslører konstruksjonene, mangfoldig.',
          },
          {
            label: 'b',
            task: 'Hva er innvendingene?',
            solution: 'Kan bli elitistisk, mister emosjonell kraft, relativisme, ironi som unnskyldning.',
          },
        ],
        solution: 'Diskusjonen bør belyse postmodernismen fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 7.3 Jan Kjærstad og Dag Solstad
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_7_3: TextbookChapter = {
  id: 'norsk-vg3-7-3',
  courseId: 'norsk-vg3',
  chapterNumber: '7.3',
  title: 'Jan Kjærstad og Dag Solstad',
  description: 'To sentrale forfattere i norsk samtidslitteratur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-7-3-intro',
      type: 'text',
      content: `## Kjærstad og Solstad - to giganter

Jan Kjærstad (f. 1953) og Dag Solstad (f. 1941) er to av de viktigste forfatterne i norsk samtidslitteratur. Begge har vært sentrale i den litterære debatten og har mottatt en rekke priser.

**Dag Solstad:**

Solstad debuterte i 1965 og har hatt et langt og variert forfatterskap. Han gikk fra eksperimentell prosa via politisk ml-litteratur til selvreflekterende romaner.

Hovedverk:
- «Arild Asnes, 1970» (1971) - ml-roman
- «Roman 1987» (1987) - selvrefleksjon
- «Genanse og verdighet» (1994) - midtlivskrise
- «Professor Andersens natt» (1996)
- «T. Singer» (1999)

Solstads stil er særpreget: lange, buktende setninger, intellektuell refleksjon, en blanding av alvor og ironi.

**Jan Kjærstad:**

Kjærstad er kanskje den mest ambisiøse norske romanforfatteren. Hans verk er preget av intellektuell lek og storslåtte konstruksjoner.

Hovedverk:
- «Homo Falsus» (1984) - metaroman
- Jonas Wergeland-trilogien (1993-1999)
- «Berge» (2017)

Kjærstads romaner er fulle av referanser, strukturelle eksperimenter og tematisk kompleksitet.

**Sammenligning:**

Begge er postmodernistiske, men på ulike måter. Solstad er mer selvutleverende og eksistensiell. Kjærstad er mer konstruerende og leken.`,
    },
    {
      id: 'norsk-vg3-7-3-def-1',
      type: 'definition',
      title: 'Dag Solstad (f. 1941)',
      content: `**Biografi:**
- Født 18. juli 1941 i Sandefjord
- Debuterte 1965
- Ml-fase på 1970-tallet
- Senere selvreflekterende romaner

**Hovedverk:**
- *Arild Asnes, 1970* (1971)
- *Roman 1987* (1987)
- *Genanse og verdighet* (1994)
- *T. Singer* (1999)

**Litterære kjennetegn:**
- Lange, komplekse setninger
- Intellektuell refleksjon
- Selvbevissthet
- Ironi og alvor i blanding

**Utmerkelser:**
Nordisk råds litteraturpris, Brageprisen m.fl.`,
    },
    {
      id: 'norsk-vg3-7-3-example-1',
      type: 'example',
      title: 'Analyse: Genanse og verdighet',
      problem: `Analyser Dag Solstads roman «Genanse og verdighet» (1994).`,
      solution: `**Handling:**
Elias Rukla er en 50 år gammel norsklærer som en dag i timen tar av seg buksene foran elevene og går hjem. Resten av romanen er refleksjon over dette øyeblikket og over Ruklas liv.

**Midtlivskrise:**
Rukla representerer en generasjon som har mistet troen på sine idealer. Han føler seg fremmedgjort fra arbeidet, ekteskapet, seg selv.

**Det pinlige:**
«Genanse» er et nøkkelord. Rukla skammer seg - over seg selv, over sine valg, over situasjonen. Solstad utforsker skammens psykologi.

**Litteraturens rolle:**
Rukla er norsklærer. Romanen reflekterer over litteraturens betydning - eller mangel på betydning - i det moderne samfunnet.

**Stilen:**
Solstads karakteristiske stil er tydelig: lange setninger som buker seg, refleksjon og selvanalyse, ironi som dekke for desperasjon.

**Resepsjon:**
Romanen ble en bestselger og har fått klassikerstatus. Den fanget noe tidstypisk om mannlig midtlivskrise.`,
    },
    {
      id: 'norsk-vg3-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Kjærstad og Solstad.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de felles?',
            solution: 'Begge er postmodernistiske, intellektuelle, selvreflekterende. Begge er sentrale i norsk litteraturdebatt.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Solstad er mer personlig og selvutleverende. Kjærstad er mer konstruerende og leken. Ulik stil og tone.',
          },
        ],
        solution: 'Sammenligningen belyser to ulike tilnærminger til samtidslitteratur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 7.4 Karl Ove Knausgård
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_7_4: TextbookChapter = {
  id: 'norsk-vg3-7-4',
  courseId: 'norsk-vg3',
  chapterNumber: '7.4',
  title: 'Karl Ove Knausgård',
  description: 'Karl Ove Knausgårds «Min kamp» og autofiskjonens gjennombrudd.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-7-4-intro',
      type: 'text',
      content: `## Karl Ove Knausgård - Min kamp

Karl Ove Knausgård (f. 1968) skapte en litterær sensasjon med «Min kamp» (2009-2011), en seksbinds selvbiografisk roman som ble en internasjonal bestselger.

**«Min kamp»:**

De seks bindene følger Knausgårds liv fra barndom til nåtid. Han skriver om familien, farens død, ekteskapet, barna, skrivingen. Ingenting er for privat eller for trivielt.

Bindene:
1. Farens død
2. Barna og familien
3. Barndommen
4. Ungdommen
5. Ung voksen
6. Skrivingen og debatten

**Autofiskjon:**

«Min kamp» blander selvbiografi og fiksjon. Knausgård bruker eget navn og virkelige hendelser, men former det som litteratur. Grensen mellom fakta og fiksjon er uklar.

**Kontroverser:**

Mange av personene i bøkene kjente seg igjen og reagerte. Onkelen saksøkte. Exkona protesterte. Debatten om grenser mellom kunst og privatliv ble intens.

**Stil:**

Knausgårds stil er detaljert, langsom, dveling ved det hverdagslige. Han beskriver tennissko og frokostblanding med samme intensitet som de store følelsene.

**Internasjonalt:**

«Min kamp» ble oversatt til mange språk og etablerte Knausgård som en internasjonal forfatter.`,
    },
    {
      id: 'norsk-vg3-7-4-def-1',
      type: 'definition',
      title: 'Karl Ove Knausgård (f. 1968)',
      content: `**Biografi:**
- Født 6. desember 1968 i Oslo
- Oppvokst på Sørlandet
- Debuterte 1998
- Internasjonal gjennombrudd med «Min kamp»

**Hovedverk:**
- *Min kamp* 1-6 (2009-2011)
- *Om høsten*, *Om vinteren*, osv.
- *Morgenstjernen* (2020)

**Litterære kjennetegn:**
- Autofiskjon
- Detaljert hverdagsskildring
- Selvutlevering
- Lang, dvælende stil

**Debatter:**
- Grensen mellom kunst og privatliv
- Etikk i autofiskjon
- Tittelen «Min kamp» (Hitlers tittel)`,
    },
    {
      id: 'norsk-vg3-7-4-example-1',
      type: 'example',
      title: 'Analyse av «Min kamp»',
      problem: `Diskuter hvorfor «Min kamp» ble så populær og kontroversiell.`,
      solution: `**Populariteten:**

1. **Gjenkjennelse:**
Knausgård skriver om allmennmenneskelige erfaringer - familie, barndom, skam, død. Lesere kjenner seg igjen.

2. **Ærlighet:**
Den tilsynelatende totale ærligheten fascinerer. Knausgård skjuler ingenting.

3. **Detaljene:**
Den detaljerte hverdagsskildringen skaper nærhet og intimitet. Leseren føler seg nær forfatteren.

4. **Lesbarhet:**
Til tross for lengden er bøkene lette å lese. De har driv og nerve.

**Kontroversene:**

1. **Personvern:**
Knausgård skriver om virkelige mennesker uten deres samtykke. Er det etisk forsvarlig?

2. **Tittelen:**
«Min kamp» er tittelen på Hitlers bok. Provoserende eller meningsfullt?

3. **Narcissisme:**
Kritikere har kalt prosjektet navlebeskuende og selvopptatt.

4. **Litterær kvalitet:**
Er det litteratur eller bare bekjennelse?

**Betydning:**
Uansett hva man mener, har «Min kamp» endret norsk litteratur. Autofiskjonen har fått sin klassiker.`,
    },
    {
      id: 'norsk-vg3-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter de etiske spørsmålene ved autofiskjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Har forfatteren rett til å skrive om andre uten samtykke?',
            solution: 'Det finnes argumenter for begge sider. Kunstnerisk frihet vs. personvern. Virkeligheten er kompleks.',
          },
          {
            label: 'b',
            task: 'Hvor går grensen mellom selvbiografi og fiksjon?',
            solution: 'Autofiskjonen utvisker denne grensen. Det er både og - og kanskje det er poenget.',
          },
        ],
        solution: 'Diskusjonen bør reflektere over komplekse etiske spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 7.5 Mangfoldige stemmer i norsk litteratur
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_7_5: TextbookChapter = {
  id: 'norsk-vg3-7-5',
  courseId: 'norsk-vg3',
  chapterNumber: '7.5',
  title: 'Mangfoldige stemmer i norsk litteratur',
  description: 'Flerkulturelle og nye stemmer i samtidslitteraturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over mangfold i litteraturen',
  ],
  content: [
    {
      id: 'norsk-vg3-7-5-intro',
      type: 'text',
      content: `## Mangfold i norsk litteratur

Norsk litteratur har de siste tiårene blitt beriket med nye stemmer og perspektiver. Forfattere med ulik bakgrunn har tilført nye temaer, språk og erfaringer.

**Flerkulturelle stemmer:**

Forfattere med innvandrerbakgrunn har bidratt med nye perspektiver:

- **Maria Navarro Skaranger:** «Alle utlendinger har lukka gardiner» (2015) - ungdom på Romsås
- **Zeshan Shakar:** «Tante Ulrikkes vei» (2017) - to venner fra Stovner
- **Sumaya Jirde Ali:** Lyrikk om identitet og tilhørighet
- **Roda Ahmed:** Romaner om somalisk-norsk erfaring

**Nye temaer:**

- Identitet mellom kulturer
- Rasisme og fordommer
- Tilhørighet og utenforskap
- Språk og kodeskifte
- Generasjonskonflikter

**Språklig fornyelse:**

Mange av disse forfatterne bruker et språk som reflekterer hvordan folk faktisk snakker - med innslag av andre språk, slang, kodeskifte.

**Samisk litteratur:**

Også samiske forfattere har fått større plass:
- Nils-Aslak Valkeapää
- Rauni Magga Lukkari
- Sigbjørn Skåden

**Betydning:**

Mangfoldet beriker litteraturen med nye erfaringer og perspektiver. Det utfordrer hva vi mener med «norsk» litteratur.`,
    },
    {
      id: 'norsk-vg3-7-5-def-1',
      type: 'definition',
      title: 'Flerkulturell litteratur',
      content: `**Flerkulturell litteratur** er litteratur skrevet av forfattere med tilknytning til flere kulturer, eller litteratur som tematiserer flerkulturelle erfaringer.

**Kjennetegn:**
- Erfaring av å leve mellom kulturer
- Tematisering av identitet
- Ofte fokus på innvandringsmiljøer
- Språklig mangfold
- Kritikk av rasisme og fordommer

**I Norge:**
Fremveksten av flerkulturell litteratur reflekterer samfunnsutviklingen. Norge har blitt mer mangfoldig, og litteraturen følger etter.

**Debatter:**
- Er «flerkulturell» en meningsfull kategori?
- Risiko for eksotisering
- Hvem har rett til å fortelle hvilke historier?

**Viktige forfattere:**
- Maria Navarro Skaranger
- Zeshan Shakar
- Sumaya Jirde Ali
- Jonas Hassen Khemiri (Sverige)`,
    },
    {
      id: 'norsk-vg3-7-5-example-1',
      type: 'example',
      title: 'Analyse: Tante Ulrikkes vei',
      problem: `Analyser Zeshan Shakars «Tante Ulrikkes vei» (2017).`,
      solution: `**Handling:**
Romanen veksler mellom to fortellere: Jamal og Mo, barndomsvenner fra Stovner. Jamal dropper ut av skolen og blir kriminell. Mo tar utdanning og får jobb. Romanen følger deres ulike veier.

**Struktur:**
Alternerende kapitler lar oss se samme miljø fra to perspektiver. Dette skaper nyanser og kompleksitet.

**Språket:**
Shakar bruker et autentisk ungdomsspråk med innslag av urdu, engelsk og slang. Dette gir troverdighet og nærhet.

**Tematikk:**
- Klassereise og sosial mobilitet
- Forventninger og muligheter
- Vennskap og lojalitet
- Identitet mellom kulturer

**Samfunnskritikk:**
Romanen viser forskjells-Norge - gapet mellom øst og vest, mellom muligheter og begrensninger.

**Litterær kvalitet:**
«Tante Ulrikkes vei» er ikke bare sosiologi. Den er en velskrevet roman med levende karakterer og god dramaturgi.

**Resepsjon:**
Romanen ble en bestselger og er tatt inn på pensum mange steder.`,
    },
    {
      id: 'norsk-vg3-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter hva «flerkulturell litteratur» betyr.',
        subTasks: [
          {
            label: 'a',
            task: 'Er kategorien meningsfull?',
            solution: 'Det kan argumenteres for begge sider. Det synliggjør nye stemmer, men kan også skape bås.',
          },
          {
            label: 'b',
            task: 'Hva tilfører flerkulturelle stemmer norsk litteratur?',
            solution: 'Nye erfaringer, perspektiver, språk. Utfordrer hva vi mener med «norsk».',
          },
        ],
        solution: 'Diskusjonen bør reflektere over kategorisering og mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 8.2 Modernistisk lyrikk
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_2: TextbookChapter = {
  id: 'norsk-vg3-8-2',
  courseId: 'norsk-vg3',
  chapterNumber: '8.2',
  title: 'Modernistisk lyrikk',
  description: 'Modernismens gjennombrudd i norsk lyrikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-8-2-intro',
      type: 'text',
      content: `## Modernistisk lyrikk i Norge

Mens europeisk modernistisk lyrikk hadde sitt gjennombrudd tidlig på 1900-tallet, kom det modernistiske gjennombruddet i norsk lyrikk først på 1950-tallet. Da ble det derimot desto kraftigere.

**Forløperne:**

Noen forfattere pekte fremover:
- Sigbjørn Obstfelder (1890-tallet)
- Rolf Jacobsen (fra 1933)
- Claes Gill (1930-tallet)

Men den brede anerkjennelsen av modernistisk lyrikk kom først etter krigen.

**1950-tallet:**

«Det modernistiske gjennombrudd» kom på 1950-tallet:
- Paal Brekke introduserte europeisk modernisme
- Debatt mellom tradisjonalister og modernister
- Nye tidsskrifter og forlag

**Kjennetegn ved modernistisk lyrikk:**
- Fri vers (uten rim og fast rytme)
- Bilder fremfor fortelling
- Fragmentering
- Eksperimentelt språk
- Subjektiv opplevelse
- Ofte urban tematikk

**Viktige modernistiske lyrikere:**
- Rolf Jacobsen
- Olav H. Hauge
- Paal-Helge Haugen
- Georg Johannesen
- Jan Erik Vold`,
    },
    {
      id: 'norsk-vg3-8-2-def-1',
      type: 'definition',
      title: 'Fri vers',
      content: `**Fri vers** (vers libre) er dikt uten fast rim eller rytme.

**Kjennetegn:**
- Ingen fast verseform
- Varierende linjelengde
- Rytmen følger innholdet
- Ingen fast rimordning

**Historisk bakgrunn:**
Fri vers ble utviklet i Frankrike på 1880-tallet. Det spredte seg til resten av Europa og ble standardformen for modernistisk lyrikk.

**Argumenter for:**
- Større frihet for dikteren
- Mer naturlig rytme
- Passer moderne innhold

**Argumenter mot:**
- Mister musikaliteten
- For lett?
- Tradisjon har verdi

**I Norge:**
Fri vers ble dominerende fra 1950-tallet. I dag skriver de fleste poeter på fri vers.`,
    },
    {
      id: 'norsk-vg3-8-2-example-1',
      type: 'example',
      title: 'Rolf Jacobsens lyrikk',
      problem: `Analyser Rolf Jacobsens dikt som eksempel på norsk modernistisk lyrikk.`,
      solution: `**Rolf Jacobsen (1907-1994):**

Jacobsen regnes som den første modernisten i norsk lyrikk. Hans debut «Jord og jern» (1933) var banebrytende.

**Tematikk:**
- Teknologi og natur
- Det moderne bylivet
- Menneske og maskin
- Eksistensiell refleksjon

**Stil:**
- Fri vers
- Bilderike dikt
- Enkel overflate, dyp undertekst
- Ofte korte dikt

**Eksempel: «Signaler» (utdrag)**

«Tog i natten
lyser og forsvinner.
Signaler
røde grønne gule
blinker over skinnene.»

**Analyse:**
- Korte, pregnante setninger
- Bilder fra det moderne livet
- Lys og bevegelse
- Tematisering av det flyktige

**Betydning:**
Jacobsen åpnet for modernismen i norsk lyrikk. Hans dikt er blitt klassikere og er mye brukt i skolen.`,
    },
    {
      id: 'norsk-vg3-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser et modernistisk dikt.',
        hints: ['Se etter bilder og symboler', 'Hvordan brukes formen?', 'Hva er temaet?'],
        solution: 'Analysen skal demonstrere forståelse for modernistisk lyrikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 8.3 Olav H. Hauge og Rolf Jacobsen
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_8_3: TextbookChapter = {
  id: 'norsk-vg3-8-3',
  courseId: 'norsk-vg3',
  chapterNumber: '8.3',
  title: 'Olav H. Hauge og Rolf Jacobsen',
  description: 'To mestere i norsk etterkrigslyrikkk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-8-3-intro',
      type: 'text',
      content: `## Hauge og Jacobsen - to lyriske mestere

Olav H. Hauge (1908-1994) og Rolf Jacobsen (1907-1994) er to av de viktigste norske lyrikerne. De representerer ulike tilnærminger til modernismen, men begge er mestere i korte, pregnante dikt.

**Olav H. Hauge:**

Hauge bodde hele livet i Ulvik i Hardanger. Han var fruktbonde og levde et tilbaketrukket liv. Hans lyrikk er preget av naturen, arbeidet, og dype refleksjoner.

Hovedsamlinger:
- «Under bergfallet» (1951)
- «Dropar i austavind» (1966)

Stil: Enkel, dyp, ofte inspirert av japansk haiku. Nynorsk.

**Rolf Jacobsen:**

Jacobsen var journalist og bodde i Hamar. Hans lyrikk tar opp det moderne livet - teknologi, byer, kommunikasjon.

Hovedsamlinger:
- «Jord og jern» (1933)
- «Stillheten efterpå» (1965)

Stil: Bilderik, moderne, urban. Bokmål.

**Sammenligning:**
- Hauge: Natur, tradisjon, enkelhet
- Jacobsen: By, teknologi, modernitet
- Begge: Korte dikt, bilder, dybde`,
    },
    {
      id: 'norsk-vg3-8-3-def-1',
      type: 'definition',
      title: 'Olav H. Hauge (1908-1994)',
      content: `**Biografi:**
- Født 18. august 1908 i Ulvik
- Fruktbonde hele livet
- Selvlært, stor leser
- Døde 23. mai 1994

**Hovedverk:**
- *Under bergfallet* (1951)
- *Dropar i austavind* (1966)
- Dagbøkene (utgitt posthumt)

**Litterære kjennetegn:**
- Enkel, dyp lyrikk
- Påvirket av haiku
- Naturbilder
- Nynorsk

**Berømte dikt:**
- «Det er den draumen»
- «Gjer ikkje dagen større»
- «Eg stend og bit meg i tunga»`,
    },
    {
      id: 'norsk-vg3-8-3-example-1',
      type: 'example',
      title: 'Analyse: «Det er den draumen»',
      problem: `Analyser Olav H. Hauges dikt «Det er den draumen».`,
      solution: `**Diktet:**

Det er den draumen me ber på
at noko vedunderleg skal skje,
at det må skje -
at tidi skal opna seg
at hjarta skal opna seg
at dører skal opna seg
at berget skal opna seg
at kjeldor skal springa -
at draumen skal opna seg,
at me ei morgonstund skal glida inn
på ein våg me ikkje har visst um.

**Analyse:**

**Strukturen:**
Diktet bygger opp gjennom gjentakelse av «at» og «skal opna seg». Dette skaper en stigende bevegelse mot kulminasjonen.

**Gjentakelsen:**
«opna seg» gjentas med ulike subjekter: tid, hjarta, dører, berget, kjeldor, draumen. Åpningen blir universell.

**Tematikk:**
Diktet handler om lengsel - etter noe vidunderlig, noe nytt. Det er en drøm om forvandling og mulighet.

**Sluttbildet:**
«å glida inn / på ein våg me ikkje har visst um» - det ukjente, det nye, håpet.

**Hauges stil:**
Enkelt språk, dype tanker. Diktet er lett å lese, vanskelig å glemme.

**Universalitet:**
Diktet treffer fordi drømmen det beskriver er allmennmenneskelig.`,
    },
    {
      id: 'norsk-vg3-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign et dikt av Hauge med et av Jacobsen.',
        hints: ['Se på tema, stil, språk', 'Hva er likt, hva er forskjellig?', 'Hvordan reflekterer de sin bakgrunn?'],
        solution: 'Sammenligningen belyser to ulike tilnærminger til lyrikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 9.2 Jon Fosse
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_9_2: TextbookChapter = {
  id: 'norsk-vg3-9-2',
  courseId: 'norsk-vg3',
  chapterNumber: '9.2',
  title: 'Jon Fosse',
  description: 'Jon Fosses forfatterskap og Nobelprisen 2023.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-9-2-intro',
      type: 'text',
      content: `## Jon Fosse - Nobelprisen 2023

Jon Fosse (f. 1959) mottok Nobelprisen i litteratur i 2023 «for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege». Han er en av verdens mest spilte nålevende dramatikere og en sentral skikkelse i norsk litteratur.

**Liv og bakgrunn:**

Fosse ble født 29. september 1959 i Haugesund og vokste opp i Strandebarm i Hardanger. Han debuterte som romanforfatter i 1983, men fikk sitt gjennombrudd som dramatiker på 1990-tallet.

Han skriver på nynorsk og har vært en viktig stemme for nynorsk i offentligheten. I 2012 konverterte han til katolisismen.

**Dramatikken:**

Fosses dramaer er minimalistiske og repetitive. Dialogen består ofte av korte, gjentatte fraser. Det usagte er like viktig som det sagte.

Hovedverk:
- «Nokon kjem til å komme» (1996)
- «Eg er vinden» (2007)
- «Trilogien» (2019)

**Prosaen - Septologien:**

Med den syvbinds romanen «Septologien» (2019-2021) etablerte Fosse seg også som en stor prosaist. Verket følger maleren Asle og hans dobbeltgjenger gjennom syv bind skrevet som én lang setning.

**Stil:**

Fosses stil er umiskjennelig:
- Repetisjon og rytme
- Korte setninger
- Det usagte og pausene
- Eksistensiell tematikk
- Mystikk og grenseopplevelser

**Nobelprisen:**

Nobelprisen i 2023 var en anerkjennelse av Fosses unike stemme i verdenslitteraturen. Han er den fjerde nordmannen som mottar prisen.`,
    },
    {
      id: 'norsk-vg3-9-2-def-1',
      type: 'definition',
      title: 'Jon Fosse (f. 1959)',
      content: `**Biografi:**
- Født 29. september 1959 i Haugesund
- Oppvokst i Strandebarm
- Debuterte 1983
- Nobelpris 2023

**Hovedverk:**
- *Nokon kjem til å komme* (1996)
- *Eg er vinden* (2007)
- *Septologien* (2019-2021)

**Litterære kjennetegn:**
- Minimalistisk stil
- Repetisjon og rytme
- Det usagte
- Eksistensielle temaer
- Nynorsk

**Nobelprisen:**
«for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege»`,
    },
    {
      id: 'norsk-vg3-9-2-example-1',
      type: 'example',
      title: 'Analyse av Fosses stil',
      problem: `Analyser Jon Fosses karakteristiske stil med utgangspunkt i et utdrag.`,
      solution: `**Fosses stil:**

**Repetisjon:**
Ord og fraser gjentas med små variasjoner. Dette skaper en hypnotisk effekt og understreker det vanskelige ved kommunikasjon.

**Eksempel:**
«Han kjem
seier ho
Ja
seier han
Han kjem snart
seier ho»

**Pauser:**
Det usagte er like viktig som det sagte. Pausene mellom replikkene er ladet med mening.

**Enkelhet:**
Språket er enkelt, nesten banalt. Men under overflaten ligger dybde.

**Eksistensiell tematikk:**
Fosses karakterer konfronteres med grunnleggende spørsmål: død, kjærlighet, mening.

**Rytme:**
Teksten har en musikalsk kvalitet. Den er komponert, ikke bare skrevet.

**Effekten:**
Fosses stil fremmedgjør og fascinerer. Den tvinger leseren/tilskueren til å lytte på nye måter.`,
    },
    {
      id: 'norsk-vg3-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et utdrag fra Fosse og analyser stilen.',
        hints: ['Se etter repetisjon', 'Hva er det usagte?', 'Hvilken effekt skapes?'],
        solution: 'Analysen skal vise forståelse for Fosses unike stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 10.2 Norske essayister
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_10_2: TextbookChapter = {
  id: 'norsk-vg3-10-2',
  courseId: 'norsk-vg3',
  chapterNumber: '10.2',
  title: 'Norske essayister',
  description: 'Sentrale norske essayister fra Vinje til i dag.',
  estimatedMinutes: 65,
  competenceGoals: [
    'skrive essay som utforsker tekster',
    'orientere seg i faglitteratur og bruke kilder kritisk',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  content: [
    {
      id: 'norsk-vg3-10-2-intro',
      type: 'text',
      content: `## Norske essayister - en tradisjon

Norge har en rik essaytradisjon som strekker seg fra Aasmund Olavsson Vinje på 1800-tallet til samtidige forfattere. Essayet har vært en viktig arena for refleksjon, debatt og kulturkritikk.

**Essayet i Norge:**

Essaysjangeren fikk tidlig fotfeste i norsk litteratur. Mens romanen og dramaet dominerte den skjønnlitterære scenen, utviklet essayet seg til en egen kunstform hvor personlig stemme møter faglig refleksjon.

**Aasmund Olavsson Vinje (1818-1870):**

Vinje regnes som den norske essayets far. Han grunnla bladet Dølen og skrev på landsmål (nynorsk). Hans essay kombinerer humor, ironi og skarp observasjon.

Vinjes viktigste essaysamlinger:
- *Ferdaminne frå sumaren 1860* (1861): Reiseskildringer med kulturkritikk
- Artikler i Dølen om alt fra politikk til hverdagsliv

Vinje var en kritisk observatør av sitt samtid. Han så både det store og det lille, og skrev om det med en blanding av varme og ironi som er blitt karakteristisk for den norske essaytradisjonen.

**Arne Garborg (1851-1924):**

Garborg var både romanforfatter og essayist. Hans essay er preget av filosofisk refleksjon og kulturkritikk.

Viktige essayverk:
- *Haugtussa-studiar* (1895): Litteraturkritikk
- *Den burtkomne faderen* (1899): Selvbiografisk refleksjon

**Sigurd Hoel (1890-1960):**

Hoel var en sentral kulturpersonlighet og essayist. Hans essay tar opp psykologiske og kulturelle spørsmål.

**Aksel Sandemose (1899-1965):**

Selv om Sandemose er mest kjent for romanene, skrev han også essay. Hans refleksjoner over Janteloven har blitt stående som klassisk norsk kulturkritikk.

**Georg Johannesen (1931-2005):**

Johannesen var poet, essayist og retoriker. Hans essay er preget av lek med språk, ironi og kulturkritikk. Han var opptatt av retorikk og maktspråk.

Viktige essayverk:
- *Om den norske skrivemåten* (1981)
- *Rhetorica Norvegica* (1987)

**Jan Kjærstad (1953-):**

Kjærstad er både romanforfatter og essayist. Hans essay reflekterer over litteratur, kultur og samfunn.

**Samtidige essayister:**

I dag finnes en rekke dyktige essayister:
- Espen Stueland
- Karin Sveen
- Trygve Riiser Gundersen
- Agnes Ravatn
- Einar Økland

**Essayets rolle i dag:**

Essayet lever fortsatt som sjanger - i aviser, tidsskrifter og bøker. Det er en arena for refleksjon i en tid preget av rask meningsutveksling på sosiale medier.`,
    },
    {
      id: 'norsk-vg3-10-2-def-1',
      type: 'definition',
      title: 'Aasmund Olavsson Vinje',
      content: `**Aasmund Olavsson Vinje (1818-1870)** regnes som den norske essayets grunnlegger.

**Biografi:**
- Født 6. april 1818 i Vinje, Telemark
- Oppvokst i fattige kår
- Selvlært og målbevisst
- Grunnla bladet Dølen (1858)
- Døde 30. juli 1870

**Hovedverk:**
- *Ferdaminne frå sumaren 1860* (1861)
- Artikler i Dølen

**Litterære kjennetegn:**
- Skarp observasjon
- Humor og ironi
- Personlig stemme
- Landsmål (nynorsk)
- Kulturkritikk

**Betydning:**
Vinje etablerte essayet som kunstform i Norge. Han viste at personlig refleksjon kunne kombineres med skarp samfunnskritikk.`,
    },
    {
      id: 'norsk-vg3-10-2-def-2',
      type: 'definition',
      title: 'Georg Johannesen',
      content: `**Georg Johannesen (1931-2005)** var poet, essayist og retoriker.

**Biografi:**
- Født 17. september 1931 i Bergen
- Poet, essayist, retoriker
- Professor i retorikk
- Døde 24. september 2005

**Viktige verk:**
- *Dikt 1959* - debut
- *Om den norske skrivemåten* (1981)
- *Rhetorica Norvegica* (1987)
- *Ars Moriendi* (1996)

**Litterære kjennetegn:**
- Retorisk bevissthet
- Ironi og lek med språk
- Kritikk av maktspråk
- Tverrfaglig orientering

**Betydning:**
Johannesen fornyet norsk retorikk og essayistikk. Han lærte oss å lese maktens språk kritisk.`,
    },
    {
      id: 'norsk-vg3-10-2-example-1',
      type: 'example',
      title: 'Analyse: Vinjes Ferdaminne',
      problem: `Analyser essaystilen i Vinjes «Ferdaminne frå sumaren 1860».`,
      solution: `**Ferdaminne - essayet som reiseskildring:**

Vinjes «Ferdaminne» er en reiseskildring fra en fotttur fra Kristiania til Trondheim sommeren 1860. Men det er langt mer enn en enkel reisebeskrivelse.

**Struktur:**
Boken følger reisen geografisk, men digresjonene er mange. Vinje lar tankene vandre fritt - fra landskapsobservasjoner til filosofiske refleksjoner.

**Personlig stemme:**
Vinje er til stede i teksten. Han deler sine reaksjoner, meninger og følelser. Leseren blir kjent med ham som person.

**Observasjoner:**
Vinje ser alt - naturen, folk han møter, samfunnsforhold. Han skildrer med detaljrikdom og humor.

**Ironi:**
Vinjes ironi er aldri ond, men den er skarp. Han ser absurditeter og motsetninger, og peker på dem med et skjevt smil.

**Kulturkritikk:**
Gjennom observasjonene kommer kulturkritikken. Vinje reflekterer over norsk identitet, språk, klasse og politikk.

**Språket:**
Vinje skriver på landsmål. Språket er levende, variert og personlig. Han viser at landsmål kan brukes til sofistikert essayistikk.

**Arven:**
«Ferdaminne» etablerte en norsk essaytradisjon der personlig erfaring møter kulturrefleksjon. Mange senere norske forfattere følger i Vinjes spor.`,
    },
    {
      id: 'norsk-vg3-10-2-tip-1',
      type: 'tip',
      title: 'Tips for essaylesing',
      content: `**Hvordan lese essay:**

1. **Les aktivt:**
- Merk deg forfatterens stemme
- Følg tankerekken
- Noter interessante observasjoner

2. **Se etter struktur:**
- Hvordan er essayet bygget opp?
- Følger det en rød tråd?
- Hvordan brukes digresjoner?

3. **Identifiser virkemidler:**
- Ironi og humor
- Personlige anekdoter
- Sitater og referanser

4. **Reflekter selv:**
- Et godt essay inviterer til egen refleksjon
- Hva mener du om temaet?
- Er du enig med forfatteren?

5. **Sett i kontekst:**
- Når er essayet skrevet?
- Hvilken debatt deltar det i?
- Hva var samtidens respons?`,
    },
    {
      id: 'norsk-vg3-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Les et essay av Vinje og analyser stilen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan kommer Vinjes personlighet til uttrykk?',
            solution: 'Gjennom direkte meningsytringer, humor, ironi og personlige observasjoner. Vinje er aldri nøytral - han er alltid til stede i teksten.',
          },
          {
            label: 'b',
            task: 'Hvilken kulturkritikk kommer til uttrykk?',
            solution: 'Avhenger av teksten, men Vinje kritiserer ofte stivhet, hykleri, klasseskiller og unorskhet.',
          },
          {
            label: 'c',
            task: 'Hvordan er forholdet mellom personlig erfaring og allmenn refleksjon?',
            solution: 'Vinje bruker det konkrete som utgangspunkt for det allmenne. En observasjon på reisen blir til refleksjon over norsk identitet.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Vinjes essaystil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign to norske essayister.',
        hints: ['Velg to forfattere fra ulike perioder', 'Se på stil, tematikk, holdning', 'Hva er likt, hva er forskjellig?'],
        solution: 'Sammenligningen bør belyse utviklingen av norsk essaytradisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et essay inspirert av Vinje.',
        hints: ['Velg et tema fra din hverdag', 'La tankene vandre', 'Bruk humor og ironi', 'Koble det personlige til det allmenne'],
        solution: 'Essayet skal demonstrere evne til personlig, reflekterende skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 11.2 Retoriske virkemidler i dybden
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_11_2: TextbookChapter = {
  id: 'norsk-vg3-11-2',
  courseId: 'norsk-vg3',
  chapterNumber: '11.2',
  title: 'Retoriske virkemidler i dybden',
  description: 'Detaljert gjennomgang av retoriske virkemidler og deres effekt.',
  estimatedMinutes: 70,
  competenceGoals: [
    'skrive retoriske analyser av sakprosa',
    'bruke fagkunnskap i muntlige presentasjoner',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg3-11-2-intro',
      type: 'text',
      content: `## Retoriske virkemidler - verktøykassen

Retorikken har gjennom årtusener utviklet et rikt repertoar av virkemidler. Å kjenne disse gir deg verktøy både til analyse og til egen skriving og tale.

**Kategorier av virkemidler:**

Retoriske virkemidler kan deles inn i flere kategorier:

1. **Troper:** Overført betydning (metafor, metonymi, ironi)
2. **Figurer:** Språklige mønstre (anafor, klimaks, antitese)
3. **Appellformer:** Etos, patos, logos
4. **Argumentasjonsteknikker:** Toulmins modell, syllogisme

**Troper - overført betydning:**

**Metafor:**
«Livet er en reise.» En metafor overfører egenskaper fra ett område til et annet. Metaforer strukturerer vår forståelse av verden.

Ulike typer metaforer:
- Døde metaforer: «Stolens ben» (vi tenker ikke over overføringen)
- Kreative metaforer: Nye, overraskende sammenstillinger
- Begrepsmetaforer: Systematiske metaforer som styrer tenkning («Tid er penger»)

**Metonymi:**
«Kronen har bestemt» (= kongen). Metonymi bytter ut et uttrykk med noe nærliggende.

**Synekdoke:**
«Hun fikk tak over hodet» (= hus). En del representerer helheten, eller omvendt.

**Ironi:**
Man sier det motsatte av det man mener. Konteksten avgjør at det er ironi.

**Figurer - språklige mønstre:**

**Anafor:**
Gjentakelse av samme ord i begynnelsen av setninger:
«Jeg har en drøm... Jeg har en drøm...» (Martin Luther King)

**Epifor:**
Gjentakelse på slutten av setninger.

**Klimaks:**
Oppbygging mot et høydepunkt. Elementene øker i intensitet.

**Antiklikmaks:**
Det motsatte - avtagende intensitet, ofte for komisk effekt.

**Antitese:**
Motsetninger stilles mot hverandre:
«Ask not what your country can do for you - ask what you can do for your country.» (Kennedy)

**Retorisk spørsmål:**
Spørsmål som ikke forventer svar, men som inviterer til enighet.

**Trikolon:**
Tre elementer sammen:
«Veni, vidi, vici» - Jeg kom, jeg så, jeg vant.

**Allitterasjon:**
Gjentakelse av konsonantlyder: «Støvet siver stille ned.»

**Assonans:**
Gjentakelse av vokallyder.`,
    },
    {
      id: 'norsk-vg3-11-2-def-1',
      type: 'definition',
      title: 'Metafor',
      content: `**Metafor** er et uttrykk der et ord eller en frase overføres til noe det ikke bokstavelig refererer til.

**Definisjon:**
Fra gresk «metaphora» = overføring. En metafor skaper mening ved å overføre egenskaper fra ett domene til et annet.

**Eksempler:**
- «Livet er en reise»
- «Tiden flyr»
- «Han er en løve i kamp»
- «Ordene fløt som en elv»

**Typer:**

1. **Døde metaforer:**
Så innarbeidet at vi ikke tenker på dem som metaforer: «bordets ben», «fjelltoppen»

2. **Konvensjonelle metaforer:**
Vanlige, men vi merker overføringen: «kampen mot sykdom»

3. **Kreative metaforer:**
Nye, overraskende: «Minnet var en isbre som langsomt beveget seg gjennom landskapet»

**Begrepsmetaforer:**
Kognitive lingvister (Lakoff og Johnson) viser at metaforer strukturerer tenkningen:
- TID ER PENGER: «bruke tid», «spare tid», «kaste bort tid»
- DISKUSJON ER KRIG: «angripe argumenter», «forsvare standpunkt»

**Funksjon:**
- Gjør abstrakt konkret
- Skaper følelsesmessig resonans
- Påvirker hvordan vi tenker om et tema`,
    },
    {
      id: 'norsk-vg3-11-2-def-2',
      type: 'definition',
      title: 'Anafor',
      content: `**Anafor** er gjentakelse av samme ord eller frase i begynnelsen av påfølgende setninger eller verselinjer.

**Fra gresk:** «anaphora» = det som bæres tilbake/gjentas.

**Eksempel:**
«Jeg har en drøm at en dag vil nasjonen vår reise seg...
Jeg har en drøm at en dag, på de røde åsene i Georgia...
Jeg har en drøm at en dag vil selv staten Mississippi...»
- Martin Luther King Jr.

**Effekt:**
- Skaper rytme og musikalitet
- Understreker og forsterker
- Bygger opp intensitet
- Gjør teksten minneverdig

**Relaterte figurer:**
- **Epifor:** Gjentakelse på slutten
- **Symploke:** Gjentakelse både i begynnelse og slutt
- **Anadiplose:** Siste ord i en setning blir første ord i neste

**Bruk:**
Anafor er særlig effektiv i taler og lyrikk. Den skaper forventning hos publikum og gir kraft til budskapet.`,
    },
    {
      id: 'norsk-vg3-11-2-def-3',
      type: 'definition',
      title: 'Antitese',
      content: `**Antitese** er en figur der motsetninger stilles mot hverandre for å skape kontrast.

**Fra gresk:** «antithesis» = motsetning.

**Eksempler:**
- «Det var den beste av tider, det var den verste av tider» (Dickens)
- «Ask not what your country can do for you - ask what you can do for your country» (Kennedy)
- «Én liten skritt for et menneske, ett stort sprang for menneskeheten» (Armstrong)

**Effekt:**
- Skaper klarhet gjennom kontrast
- Gjør poenger minneverdige
- Dramatiserer valg og dilemmaer
- Forenkler komplekse spørsmål

**Relaterte begreper:**
- **Oxymoron:** Motsetninger i samme uttrykk («lysende mørke»)
- **Paradoks:** Tilsynelatende selvmotsigende påstand som likevel er sann

**Bruk i retorikk:**
Antitese er effektiv fordi hjernen lett griper kontraster. Det gjør argumenter tydelige og minneverdige.`,
    },
    {
      id: 'norsk-vg3-11-2-example-1',
      type: 'example',
      title: 'Analyse: Martin Luther Kings «I Have a Dream»',
      problem: `Analyser bruken av retoriske virkemidler i Martin Luther Kings tale «I Have a Dream» (1963).`,
      solution: `**Retorisk analyse av «I Have a Dream»:**

Talen ble holdt 28. august 1963 ved Lincoln Memorial i Washington D.C. Den regnes som en av historiens mest effektive taler.

**Anafor:**
«I have a dream» gjentas åtte ganger. Gjentakelsen bygger opp intensitet og gjør visjonen levende.

«Let freedom ring» gjentas mot slutten, med stadig nye geografiske steder. Klimakset bygges.

**Metaforer:**
- «A check... marked 'insufficient funds'» - Borgerrettigheter som økonomisk gjeld
- «The darkness of segregation» vs. «the light of racial justice»
- «The quicksands of racial injustice» vs. «the solid rock of brotherhood»

Metaforene gjør det abstrakte konkret og følelsesladet.

**Antitese:**
- «Not by the color of their skin but by the content of their character»
Kontrasten er slående og minneverdig.

**Allitterasjon:**
- «Dark and desolate»
- «Marvelous new militancy»

**Klimaks:**
Talen bygger mot et emosjonelt høydepunkt. «Free at last!» gjentas til slutt.

**Etos:**
King står ved Lincoln-monumentet og siterer Lincoln. Han knytter seg til amerikanske verdier og historien.

**Patos:**
Hele talen appellerer til følelser - håp, drømmer, rettferdighet, frihet.

**Logos:**
Logikken er enkel: Amerika lovte likhet. Løftet er ikke holdt. Nå må det holdes.

**Konklusjon:**
Kings tale er et mesterlig eksempel på retorisk håndverk. Den viser hvordan virkemidler forsterker budskapet.`,
    },
    {
      id: 'norsk-vg3-11-2-tip-1',
      type: 'tip',
      title: 'Identifiser retoriske virkemidler',
      content: `**Sjekkliste for retorisk analyse:**

**1. Troper (overført betydning):**
- [ ] Metaforer
- [ ] Metonymier
- [ ] Ironi
- [ ] Hyperboler (overdrivelser)
- [ ] Litotes (underdrivelser)

**2. Figurer (språklige mønstre):**
- [ ] Anafor/epifor
- [ ] Trikolon
- [ ] Antitese
- [ ] Klimaks
- [ ] Retoriske spørsmål
- [ ] Allitterasjon

**3. Appellformer:**
- [ ] Etos (troverdighet)
- [ ] Patos (følelser)
- [ ] Logos (logikk)

**4. Argumentasjonsteknikker:**
- [ ] Påstand-belegg-hjemmel
- [ ] Eksempler og statistikk
- [ ] Autoritetsargument
- [ ] Motargumenter

**Tips:**
Ikke bare list opp virkemidler - analyser effekten! Hvorfor brukes akkurat dette virkemiddelet her? Hva oppnås?`,
    },
    {
      id: 'norsk-vg3-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-11-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser retoriske virkemidler i en tale.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser minst fem ulike retoriske virkemidler.',
            solution: 'Avhenger av talen, men se etter metaforer, anafor, antitese, retoriske spørsmål, trikolon etc.',
          },
          {
            label: 'b',
            task: 'Analyser effekten av hvert virkemiddel.',
            solution: 'Forklar hvordan virkemiddelet forsterker budskapet, skaper følelser, eller gjør argumentet klarere.',
          },
          {
            label: 'c',
            task: 'Vurder samspillet mellom virkemidlene.',
            solution: 'Gode talere kombinerer virkemidler. Se på helheten - hvordan arbeider virkemidlene sammen?',
          },
        ],
        solution: 'Analysen skal demonstrere evne til å identifisere og analysere retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-11-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-11-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv en kort tekst der du bevisst bruker retoriske virkemidler.',
        hints: ['Velg et tema du brenner for', 'Bruk minst tre ulike virkemidler', 'Tenk på effekten du vil oppnå'],
        solution: 'Teksten skal vise bevisst bruk av retoriske virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 12.2 Tolkning og hermeneutikk
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_12_2: TextbookChapter = {
  id: 'norsk-vg3-12-2',
  courseId: 'norsk-vg3',
  chapterNumber: '12.2',
  title: 'Tolkning og hermeneutikk',
  description: 'Tolkningsteori og den hermeneutiske sirkel.',
  estimatedMinutes: 65,
  competenceGoals: [
    'skrive litterære analyser og sammenligninger',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg3-12-2-intro',
      type: 'text',
      content: `## Hermeneutikk - kunsten å tolke

Hermeneutikk er læren om tolkning og forståelse. Ordet kommer fra gresk «hermeneuein» som betyr å fortolke. I litteraturvitenskapen handler hermeneutikk om hvordan vi forstår tekster.

**Hva er tolkning?**

Når vi leser en tekst, tolker vi den. Vi prøver å forstå hva teksten betyr - ikke bare bokstavelig, men også på dypere nivåer. Tolkning er en aktiv prosess der leseren skaper mening.

**Den hermeneutiske sirkel:**

Det viktigste begrepet i hermeneutikken er den hermeneutiske sirkel. Den beskriver forholdet mellom del og helhet i forståelsen:

- Vi forstår delene ut fra helheten
- Vi forstår helheten ut fra delene
- Forståelsen utvikles gjennom stadig veksling mellom del og helhet

Eksempel: Når vi leser en roman, forstår vi hver setning ut fra sammenhengen i boken. Men forståelsen av boken som helhet bygges opp av forståelsen av de enkelte setningene. Vi beveger oss i en sirkel mellom del og helhet.

**Forforståelse:**

Vi møter aldri en tekst uten forutsetninger. Vi har alltid en forforståelse som påvirker hvordan vi leser. Forforståelsen kan inkludere:

- Tidligere leseerfaring
- Kunnskap om sjanger og konvensjoner
- Historisk kunnskap
- Personlige erfaringer
- Fordommer og forventninger

Forforståelsen er ikke bare en hindring - den er nødvendig for forståelse. Uten forforståelse kunne vi ikke forstå noe som helst.

**Hans-Georg Gadamer:**

Den tyske filosofen Hans-Georg Gadamer (1900-2002) utviklet moderne hermeneutikk i verket «Sannhet og metode» (1960). Han argumenterte for at:

- All forståelse er historisk betinget
- Forforståelsen er produktiv, ikke bare en feilkilde
- Tolkning er en dialog mellom tekst og leser
- Mening oppstår i møtet mellom tekst og leser

**Horisontsammensmeltning:**

Gadamer bruker begrepet «horisontsammensmeltning» om forståelsesprosessen. Leseren har sin horisont (forforståelse), teksten har sin horisont (historisk kontekst). I tolkningen smelter disse sammen til noe nytt.

**Tolkningens grenser:**

Kan en tekst bety hva som helst? Nei. Selv om tolkning er subjektiv, er det grenser. En god tolkning må:

- Ta utgangspunkt i teksten selv
- Være konsistent
- Kunne begrunnes
- Være åpen for diskusjon

Men det betyr ikke at det finnes én «riktig» tolkning. Ulike tolkninger kan være gyldige samtidig.`,
    },
    {
      id: 'norsk-vg3-12-2-def-1',
      type: 'definition',
      title: 'Den hermeneutiske sirkel',
      content: `**Den hermeneutiske sirkel** beskriver det gjensidige forholdet mellom del og helhet i forståelsen.

**Definisjon:**
Vi forstår delene ut fra helheten, og helheten ut fra delene. Forståelsen utvikles gjennom stadig veksling mellom de to nivåene.

**Eksempel - lesing av en roman:**
- Vi leser første setning med visse forventninger
- Etter hvert som vi leser, bygger vi opp en forståelse av helheten
- Denne helhetsforståelsen påvirker hvordan vi forstår nye setninger
- Nye setninger kan endre vår helhetsforståelse
- Slik fortsetter vekslingen gjennom hele lesningen

**Utvidet forståelse:**
Den hermeneutiske sirkel gjelder også:
- Tekst og kontekst
- Forfatter og verk
- Del av forfatterskapet og hele forfatterskapet
- Enkelt verk og litterær tradisjon

**Viktig poeng:**
«Sirkel» kan virke lukket, men prosessen er egentlig en spiral. For hver runde øker forståelsen.`,
    },
    {
      id: 'norsk-vg3-12-2-def-2',
      type: 'definition',
      title: 'Forforståelse',
      content: `**Forforståelse** er de forutsetningene vi har med oss når vi møter en tekst.

**Komponenter i forforståelsen:**
- Kunnskap om sjanger og konvensjoner
- Historisk og kulturell kunnskap
- Tidligere leseerfaring
- Personlige erfaringer og verdier
- Forventninger til teksten

**Produktiv forforståelse:**
Forforståelsen er ikke bare en hindring. Den er nødvendig for forståelse. Uten forforståelse ville teksten være uforståelig.

**Problematisk forforståelse:**
Samtidig kan forforståelsen føre til misforståelser hvis vi ikke er bevisst på den. Vi kan lese inn ting som ikke står der.

**Bevisstgjøring:**
En god leser er bevisst på sin forforståelse:
- Hva forventer jeg av denne teksten?
- Hvilke antagelser har jeg?
- Er jeg villig til å revidere?

**Gadamer:**
Hans-Georg Gadamer argumenterte for at forforståelsen ikke er en feil som må elimineres, men en forutsetning for forståelse som må bevisstgjøres.`,
    },
    {
      id: 'norsk-vg3-12-2-example-1',
      type: 'example',
      title: 'Den hermeneutiske sirkel i praksis',
      problem: `Vis hvordan den hermeneutiske sirkel fungerer ved tolkning av et dikt.`,
      solution: `**Eksempel: Tolkning av Olav H. Hauges «Du var vinden»**

**Diktet:**
«Du var vinden
som strauk bortyver torvtaka
og var borte.»

**Første lesning:**
Vi leser ordene og får et umiddelbart inntrykk. Noe om vind, noen som er borte.

**Forforståelse:**
Vi vet at Hauge er kjent for korte, billedsterke dikt. Vi vet at «du» ofte henvender seg til en elsket. Vi vet at dikt om vind og fravær ofte handler om tap.

**Del-analyse:**
- «Du var vinden» - metafor, sammenligning av en person med vinden
- «strauk bortyver torvtaka» - konkret bilde, vinden som stryker over taket
- «og var borte» - plutselig, endelig fravær

**Helhet:**
Diktet handler om tap og fravær. Personen var som vinden - lett, bevegelig, flyktig - og forsvant like plutselig som en vindkast.

**Ny lesning av delene:**
Med helhetsforståelsen blir detaljene klarere:
- «Torvtaka» er jordnært, gammeldags - knyttet til et hjem
- Vinden som stryker er øm, men også flyktig
- «Var borte» - brutalt kort og endelig

**Utvidet tolkning:**
Kanskje handler diktet om døden? Om en kjæreste som forlot? Om et minne som falmet?

**Konklusjon:**
Vi veksler mellom del og helhet. Hver lesning utdyper forståelsen. Sirkelen (spiralen) fortsetter.`,
    },
    {
      id: 'norsk-vg3-12-2-tip-1',
      type: 'tip',
      title: 'Tips for god tolkning',
      content: `**Slik utvikler du gode tolkninger:**

**1. Start med teksten:**
Les teksten nøye, flere ganger. Noter førsteinntrykkene dine.

**2. Vær bevisst på forforståelsen:**
Hva forventer du? Hvilke antagelser har du? Er du åpen for overraskelser?

**3. Analyser delene:**
Gå i detalj: ord, setninger, avsnitt. Hva står det, bokstavelig?

**4. Se på helheten:**
Hvordan henger delene sammen? Hva er tekstens overordnede mening?

**5. Veksle mellom del og helhet:**
La forståelsen utvikle seg. Gå tilbake og les på nytt.

**6. Trekk inn kontekst:**
Historisk sammenheng, forfatterens andre verk, samtidige tekster.

**7. Vurder ulike tolkninger:**
Finnes det alternative lesninger? Hvilken er mest overbevisende?

**8. Begrunn tolkningen:**
En tolkning må kunne begrunnes med referanse til teksten.`,
    },
    {
      id: 'norsk-vg3-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-12-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Bruk den hermeneutiske sirkel på et dikt.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv din forforståelse før du leser.',
            solution: 'Noter hva du vet/forventer om dikteren, sjangeren, temaet.',
          },
          {
            label: 'b',
            task: 'Analyser enkeltdeler av diktet.',
            solution: 'Gå gjennom ordvalg, bilder, rytme, struktur.',
          },
          {
            label: 'c',
            task: 'Formuler en helhetsforståelse.',
            solution: 'Hva handler diktet om? Hvilken mening uttrykker det?',
          },
          {
            label: 'd',
            task: 'Gå tilbake til delene med helhetsforståelsen i bakhodet.',
            solution: 'Hvordan endrer helhetsforståelsen forståelsen av delene?',
          },
        ],
        solution: 'Øvelsen skal demonstrere den hermeneutiske prosessen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-12-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter: Kan en tekst bety hva som helst?',
        hints: ['Hva er tolkningens grenser?', 'Kan to motstridende tolkninger begge være gyldige?', 'Hva gjør en tolkning god?'],
        solution: 'Diskusjonen bør reflektere over forholdet mellom subjektivitet og objektivitet i tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 13.2 Norske dialekter
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_13_2: TextbookChapter = {
  id: 'norsk-vg3-13-2',
  courseId: 'norsk-vg3',
  chapterNumber: '13.2',
  title: 'Norske dialekter',
  description: 'Oversikt over norske dialekter og dialektgeografi.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare endringer i norsk talemål i dag',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-vg3-13-2-intro',
      type: 'text',
      content: `## Norske dialekter - et språklig mangfold

Norge har et rikt dialektlandskap. Dialektene varierer betydelig fra region til region, og dialektbruken er en viktig del av norsk språkidentitet.

**Hvorfor har Norge så mange dialekter?**

Norge har flere dialekter enn de fleste europeiske land i forhold til folketallet. Årsakene er geografiske og historiske:

- Fjell, fjorder og daler skapte isolerte samfunn
- Lite urbanisering historisk
- Ingen sterk sentralmakt som fremmet ett standardspråk
- Bevisst dialektvern fra 1800-tallet

**Hovedgrupper av dialekter:**

Norske dialekter deles tradisjonelt inn i fire hovedgrupper:

**1. Østnorsk:**
Omfatter Østlandet, Trøndelag og deler av Nord-Norge.
- Tonelag (tonem 1 og 2)
- Tjukk l
- Retroflekser (rd, rt, rn, rl)
- Kløyvd infinitiv i tradisjonelle dialekter

**2. Vestnorsk:**
Vestlandet fra Rogaland til Romsdal.
- Tonelag
- Ikke tjukk l
- Palatalisering av k, g
- a-infinitiv

**3. Nordnorsk:**
Nord-Norge fra Nordland til Finnmark.
- Deler trekk med østnorsk og vestnorsk
- Særegne trekk som nektingsadverbet «ikkje/itj»
- Palatalisering

**4. Trøndsk:**
Trøndelag.
- Apokope (bortfall av endevokal)
- Palatalisering
- Spesielle intonasjonsmønstre

**Dialekttrekk:**

**Tonelag/tonem:**
Norsk har to tonemer - to måter å uttale ord på som gir ulik betydning:
- Tonem 1: «bønder» (flertall av «bonde»)
- Tonem 2: «bønner» (flertall av «bønne»)

**Tjukk l:**
En retrofleks l-lyd som finnes i østnorsk og trøndsk, men ikke i vestnorsk.

**Palatalisering:**
Lyden k, g og ng uttales «bløtere» foran i og j.

**Apokope:**
Bortfall av endevokal: «å kaste» blir «å kast».

**Dialektbruk i dag:**

Norge er kjent for toleranse for dialektbruk i offentligheten. Dialekter brukes i radio, TV, Stortinget og i skolen.

Samtidig skjer det endringer:
- Dialektutjevning i retning av regionale standarder
- Bymålenes påvirkning øker
- Globalisering og mobilitet påvirker`,
    },
    {
      id: 'norsk-vg3-13-2-def-1',
      type: 'definition',
      title: 'Dialektgrupper',
      content: `**De fire hovedgruppene av norske dialekter:**

**1. Østnorsk:**
- Område: Østlandet, inkl. Oslo
- Trekk: Tjukk l, retroflekser, tonelag
- Eksempel: «jæi» for «jeg»

**2. Vestnorsk:**
- Område: Vestlandet (Rogaland-Romsdal)
- Trekk: Ikke tjukk l, palatalisering, a-infinitiv
- Eksempel: «eg» for «jeg»

**3. Nordnorsk:**
- Område: Nord-Norge
- Trekk: Blanding av øst- og vestnorske trekk
- Eksempel: varierende pronomen

**4. Trøndsk:**
- Område: Trøndelag
- Trekk: Apokope, palatalisering
- Eksempel: «å kast» for «å kaste»

**Viktig:**
Grensene mellom gruppene er ikke skarpe. Det finnes overgangssoner og lokale variasjoner.`,
    },
    {
      id: 'norsk-vg3-13-2-def-2',
      type: 'definition',
      title: 'Tonelag (tonem)',
      content: `**Tonelag** eller **tonem** er bruk av toneforskjeller til å skille betydning.

**Norsk har to tonemer:**

**Tonem 1 (aksent 1):**
- Enkelt toneforløp
- Ofte i enstavelsesord og lånord

**Tonem 2 (aksent 2):**
- Sammensatt toneforløp
- Ofte i flerstavelsesord av norsk opprinnelse

**Eksempler på minimale par:**
- «bønder» (flertall av bonde) vs. «bønner» (flertall av bønne)
- «tanken» (den tanke) vs. «tanken» (beholder)
- «hender» (flertall av hånd) vs. «hender» (skjer)

**Geografisk fordeling:**
Tonelag finnes i de fleste norske dialekter, men mønstrene varierer. Bergen og deler av Nord-Norge har mistet tonemforskjellen.

**Funksjon:**
Tonelag er viktig for forståelsen og bidrar til den karakteristiske melodien i norsk tale.`,
    },
    {
      id: 'norsk-vg3-13-2-example-1',
      type: 'example',
      title: 'Sammenligning av dialekter',
      problem: `Sammenlign hvordan setningen «Jeg kaster ikke ballen til henne» ville bli uttalt i ulike dialekter.`,
      solution: `**Setningen i ulike dialekter:**

**Standard østnorsk (Oslo):**
«Jæi kaster ikke ballen til henne.»

**Tradisjonell østlandsk:**
«Jæi kaster itte ballen te a.»

**Bergensk:**
«Eg kaster ikkje ballen te ho.»

**Sunnmørsk:**
«E kastar ikkje ballen te ho.»

**Trøndsk:**
«Æ kast itj bansen te a.»
(Merk apokope: «kast» for «kaster», «bansen» for «ballen»)

**Nordnorsk (Tromsø-område):**
«Æ kaste ikkje bansen te ho.»

**Hva varierer?**
- Pronomen: jæi/eg/e/æ for «jeg», henne/a/ho for «henne»
- Nektingsadverb: ikke/itte/ikkje/itj
- Verb: kaster/kastar/kast/kaste
- Artikkel: ballen/bansen

**Konklusjon:**
Samme setning kan høres svært forskjellig ut i ulike deler av landet, men forståelsen er likevel god.`,
    },
    {
      id: 'norsk-vg3-13-2-tip-1',
      type: 'tip',
      title: 'Lær å gjenkjenne dialekter',
      content: `**Tips for dialektgjenkjenning:**

**1. Lytt etter pronomen:**
- «Jeg»: jæi, jei, æi, eg, e, æ
- Disse gir raskt en pekepinn om region

**2. Lytt etter nektingsadverb:**
- ikke, ikkje, itj, itte
- Geografisk markør

**3. Lytt etter tjukk l:**
- Finnes i østnorsk og trøndsk
- Mangler i vestnorsk

**4. Lytt etter tonefall:**
- Hver region har sin melodi
- Bergen, Trondheim og Oslo høres svært forskjellige ut

**5. Lytt etter spesialord:**
- Dialekter har ofte egne ord
- F.eks. «kødd» (Bergen) for «guttunge»

**Ressurser:**
- Dialektarkiver på nett
- NRK-program med dialekter
- Dialektkart og lydopptak`,
    },
    {
      id: 'norsk-vg3-13-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-13-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser din egen dialekt eller en dialekt du kjenner.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken hovedgruppe tilhører dialekten?',
            solution: 'Identifiser østnorsk, vestnorsk, nordnorsk eller trøndsk.',
          },
          {
            label: 'b',
            task: 'Hvilke karakteristiske trekk har den?',
            solution: 'Beskriv pronomen, verbformer, spesialord, tonelag etc.',
          },
          {
            label: 'c',
            task: 'Hvordan endrer dialekten seg?',
            solution: 'Merker du forskjeller mellom generasjoner? Påvirkning utenfra?',
          },
        ],
        solution: 'Analysen skal vise evne til å observere og beskrive språklige trekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-13-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-13-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter: Bør dialekter bevares?',
        hints: ['Hva er verdien av dialektmangfold?', 'Er dialektutjevning uunngåelig?', 'Hva kan gjøres for å bevare dialekter?'],
        solution: 'Diskusjonen bør reflektere over språklig mangfold og identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 14.2 Praktisk sidemålstrening
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_14_2: TextbookChapter = {
  id: 'norsk-vg3-14-2',
  courseId: 'norsk-vg3',
  chapterNumber: '14.2',
  title: 'Praktisk sidemålstrening',
  description: 'Øvelser og tips for bedre sidemålskompetanse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'mestre formkrav i hovedmål og sidemål',
    'skrive tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'norsk-vg3-14-2-intro',
      type: 'text',
      content: `## Sidemålstrening - praktiske strategier

Sidemål kan være utfordrende, men med riktig strategi kan alle bli bedre. Dette kapittelet gir praktiske råd og øvelser.

**Hvorfor er sidemål vanskelig?**

Hovedutfordringen er at vi ikke bruker sidemålet daglig. Vi eksponeres mindre for det, og automatisering mangler. Løsningen er bevisst øving og økt eksponering.

**Strategier for bedre sidemål:**

**1. Les mer på sidemålet:**
- Bøker, aviser, nettsider
- Start med noe du liker
- Lydbøker kombinerer lytting og lesing
- Merk deg ord og vendinger

**2. Skriv mer på sidemålet:**
- Dagbok, notater, meldinger
- Start enkelt, øk gradvis
- Ikke vær redd for å gjøre feil

**3. Lær systematisk:**
- Bøyningsregler for substantiv, verb, adjektiv
- Vanlige feil og hvordan unngå dem
- Ordlister med sidemålsord

**4. Bruk ordbok aktivt:**
- Sjekk usikre ord
- Les eksempelsetninger
- Lær deg å slå opp effektivt

**Vanlige feil:**

**For bokmålsbrukere med nynorsk sidemål:**
- «ikke» → «ikkje»
- «og» → «og» (men «å» foran infinitiv!)
- «jeg» → «eg»
- «hva» → «kva»
- «hvem» → «kven»
- «hvorfor» → «kvifor»

**Verbformer:**
- Bokmål: å kaste - kaster - kastet - har kastet
- Nynorsk: å kaste - kastar - kasta - har kasta

**For nynorskbrukere med bokmål sidemål:**
- «ikkje» → «ikke»
- «eg» → «jeg»
- «kva» → «hva»
- Pass på e-ending i verb: «kaster» ikke «kastar»

**Tips for eksamen:**

- Velg oppgave du mestrer tematisk
- Bruk ordbok systematisk
- Les korrektur med fokus på typiske feil
- Skriv først utkast, så renskrift
- Vær konsekvent i rettskrivingen`,
    },
    {
      id: 'norsk-vg3-14-2-def-1',
      type: 'definition',
      title: 'Bøyning av substantiv - nynorsk',
      content: `**Substantivbøyning i nynorsk:**

**Hankjønn (maskulinum):**
- ein gut - guten - gutar - gutane
- ein bil - bilen - bilar - bilane

**Hokjønn (femininum):**
- ei jente - jenta - jenter - jentene
- ei bok - boka - bøker - bøkene

**Inkjekjønn (nøytrum):**
- eit hus - huset - hus - husa
- eit barn - barnet - born/barn - borna/barna

**Viktige forskjeller fra bokmål:**
- Nynorsk har obligatorisk tre kjønn
- Bestemt flertall: -ane (hankjønn), -ene (hokjønn), -a (inkjekjønn)
- Ubestemt flertall: -ar (hankjønn), -er (hokjønn), - (inkjekjønn)

**Huskeregel:**
Tenk på dialekten din! Mange dialekter har lignende bøyning som nynorsk.`,
    },
    {
      id: 'norsk-vg3-14-2-def-2',
      type: 'definition',
      title: 'Bøyning av verb - nynorsk',
      content: `**Verbbøyning i nynorsk:**

**Svake verb:**

*a-verb (de fleste):*
- å kaste - kastar - kasta - har kasta

*e-verb:*
- å lese - les - las - har lese

*j-verb (med j i infinitiv):*
- å selje - sel - selde - har selt

**Sterke verb:**
- å skrive - skriv - skreiv - har skrive
- å drikke - drikk - drakk - har drukke
- å finne - finn - fann - har funne

**Viktige forskjeller fra bokmål:**
- Presens av a-verb: -ar (ikke -er)
- Preteritum: ofte -a (ikke -et)
- Perfektum partisipp: ofte -a eller -e (ikke -et)

**Hjelpeverb:**
- å vere - er - var - har vore
- å ha - har - hadde - har hatt
- å bli - blir - blei - har blitt`,
    },
    {
      id: 'norsk-vg3-14-2-example-1',
      type: 'example',
      title: 'Oversettelse til sidemål',
      problem: `Oversett følgende tekst fra bokmål til nynorsk.`,
      solution: `**Bokmål (original):**
«Jeg har alltid likt å lese bøker. Når jeg var barn, leste jeg eventyr om prinsesser og drager. Nå leser jeg mest romaner. Ikke alle bøker er gode, men de fleste er verdt å lese. Hva liker du å lese?»

**Nynorsk (oversettelse):**
«Eg har alltid likt å lese bøker. Då eg var barn, las eg eventyr om prinsesser og drakar. No les eg mest romanar. Ikkje alle bøker er gode, men dei fleste er verd å lese. Kva likar du å lese?»

**Endringer:**
- jeg → eg
- Når → Då (når = «når» i nynorsk betyr «når» som spørreord)
- leste → las (sterkt verb)
- drager → drakar
- Nå → No
- romaner → romanar
- Ikke → Ikkje
- de → dei
- Hva → Kva
- liker → likar`,
    },
    {
      id: 'norsk-vg3-14-2-tip-1',
      type: 'tip',
      title: 'Vanlige feil i nynorsk',
      content: `**De vanligste feilene bokmålsbrukere gjør i nynorsk:**

**1. Pronomen:**
- jeg → eg (IKKE «eg» = «egg»!)
- de → dei
- vi → vi (samme!)
- dere → de/de

**2. Spørreord:**
- hva → kva
- hvem → kven
- hvordan → korleis
- hvorfor → kvifor

**3. Nektingsord:**
- ikke → ikkje

**4. Andre vanlige ord:**
- og → og (men «å» foran infinitiv)
- men → men
- nå → no
- noen → nokon/nokre
- bare → berre

**5. Verbformer:**
- kaster → kastar
- kastet → kasta
- har kastet → har kasta

**Tips:**
Lag deg en liste over ord du ofte skriver feil. Repeter dem!`,
    },
    {
      id: 'norsk-vg3-14-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-14-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Oversett en tekst til sidemålet.',
        hints: ['Bruk ordbok', 'Pass på verb- og substantivbøyning', 'Sjekk vanlige feilord'],
        solution: 'Oversettelsen skal vise kompetanse i sidemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-14-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-14-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv et essay på sidemålet.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema og skriv ca. 500 ord.',
            solution: 'Teksten skal være sammenhengende og velformulert.',
          },
          {
            label: 'b',
            task: 'Les korrektur med fokus på typiske feil.',
            solution: 'Bruk sjekklisten for vanlige feil.',
          },
          {
            label: 'c',
            task: 'La noen andre lese og gi tilbakemelding.',
            solution: 'Andres øyne ser ofte feil du overser.',
          },
        ],
        solution: 'Øvelsen gir erfaring med lengre tekst på sidemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 15.2 Muntlig eksamen
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_15_2: TextbookChapter = {
  id: 'norsk-vg3-15-2',
  courseId: 'norsk-vg3',
  chapterNumber: '15.2',
  title: 'Muntlig eksamen',
  description: 'Forberedelse til muntlig eksamen i norsk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke fagkunnskap i muntlige presentasjoner',
    'presentere fagstoff muntlig',
    'bruke fagterminologi presist',
  ],
  content: [
    {
      id: 'norsk-vg3-15-2-intro',
      type: 'text',
      content: `## Muntlig eksamen - forberedelse og gjennomføring

Muntlig eksamen i norsk består av en presentasjon og en fagsamtale. Du får 24 eller 48 timers forberedelse.

**Format:**

**1. Forberedelse (24/48 timer):**
- Du får et tema eller en oppgave
- Du forbereder en presentasjon
- Du kan bruke alle hjelpemidler
- Notater kan tas med inn

**2. Presentasjon (ca. 10-15 min):**
- Du presenterer temaet
- Bruk notater som støtte, ikke manuskript
- Vis fagkunnskap og refleksjon

**3. Fagsamtale (ca. 15-20 min):**
- Sensorene stiller spørsmål
- Du må vise bredde i faget
- Samtalen kan gå ut over presentasjonstemaet

**Forberedelsen:**

**Forstå oppgaven:**
- Les oppgaven nøye
- Hva spør den om?
- Hvilke kompetansemål er relevante?

**Samle stoff:**
- Bruk pensum og notater
- Finn relevante eksempler
- Velg tekster å trekke inn

**Strukturer presentasjonen:**
- Innledning: Hva skal du snakke om?
- Hoveddel: 3-4 hovedpunkter
- Avslutning: Oppsummering og refleksjon

**Lag støttenotater:**
- Stikkord, ikke fullstendig manuskript
- Sitatenkeler og sitater
- Struktur og overganger

**Øv:**
- Presenter for deg selv eller andre
- Ta tiden
- Vær forberedt på spørsmål

**Presentasjonen:**

**Tips for god presentasjon:**
- Snakk fritt, bruk stikkord
- Ha øyekontakt med sensorene
- Varier stemme og tempo
- Bruk fagbegreper presist
- Vis engasjement
- Hold tiden

**Strukturelementer:**
- Klar innledning som fanger interesse
- Tydelige overganger mellom punkter
- Konkret avslutning som samler trådene

**Fagsamtalen:**

**Slik mestrer du fagsamtalen:**
- Lytt nøye til spørsmålene
- Ta deg tid til å tenke
- Svar direkte på det som spørres
- Vis at du kan reflektere
- Innrøm hvis du ikke vet alt
- Koble til det du kan

**Typiske spørsmål:**
- Utdyping av noe fra presentasjonen
- Sammenligning med andre tekster/perioder
- Vurdering og refleksjon
- Breddekunnskaper i faget`,
    },
    {
      id: 'norsk-vg3-15-2-def-1',
      type: 'definition',
      title: 'Presentasjonsteknikk',
      content: `**God presentasjonsteknikk:**

**Kroppsspråk:**
- Stå stødig, ikke vipp
- Hold hendene rolige
- Ha øyekontakt
- Bruk naturlige gester

**Stemmebruk:**
- Snakk tydelig
- Varier tempo
- Bruk pauser bevisst
- Unngå fyllord («eh», «liksom»)

**Struktur:**
- Fortell hva du skal snakke om
- Snakk om det
- Oppsummer hva du snakket om

**Notater:**
- Stikkord, ikke manuskript
- Nummererte kort fungerer godt
- Kjenn strukturen utenat

**Nervøsitet:**
- Er normalt og kan gi energi
- Forberedelse reduserer nervøsitet
- Pust dypt, senk skuldrene
- Fokuser på budskapet, ikke deg selv`,
    },
    {
      id: 'norsk-vg3-15-2-def-2',
      type: 'definition',
      title: 'Fagsamtalen',
      content: `**Fagsamtalen - hva forventes?**

**Formål:**
- Teste breddekunnskaper
- Se om du kan reflektere
- Utdype presentasjonen
- Sjekke faglig forståelse

**Typiske spørsmål:**
- «Kan du utdype...?»
- «Hvordan forholder dette seg til...?»
- «Hva mener du selv om...?»
- «Kan du sammenligne med...?»
- «Hvilke andre eksempler kjenner du?»

**Gode svar:**
- Er direkte og relevante
- Bruker fagbegreper
- Viser refleksjon
- Trekker inn konkrete eksempler
- Er ærlige om usikkerhet

**Strategier:**
- Lytt ferdig før du svarer
- Be om presisering hvis uklart
- Ta deg tid til å tenke
- Koble til det du kan
- Vis engasjement`,
    },
    {
      id: 'norsk-vg3-15-2-example-1',
      type: 'example',
      title: 'Eksempel på presentasjonsstruktur',
      problem: `Lag en struktur for en presentasjon om «Realismen i norsk litteratur».`,
      solution: `**Presentasjon: Realismen i norsk litteratur**

**Innledning (2 min):**
- Åpning: «Tenk deg at litteraturen plutselig skulle handle om vanlige menneskers liv...»
- Tema: Realismen som litterær epoke
- Disposisjon: Historisk bakgrunn, kjennetegn, eksempler, betydning

**Hoveddel:**

**1. Historisk bakgrunn (3 min):**
- Georg Brandes' foredrag 1871
- «Problemdiktning» - litteraturen skal debattere
- Kontekst: Industrialisering, urbanisering, naturvitenskap

**2. Kjennetegn ved realismen (3 min):**
- Samtidssamfunnet som setting
- Sannsynlige karakterer
- Sosiale problemer tematiseres
- Objektiv forteller

**3. Eksempler fra norsk litteratur (4 min):**
- Ibsen: «Et dukkehjem» - kvinnens stilling
  - Kort analyse av Noras utvikling
- Kielland: «Gift» - skolekritikk
- Lie, Garborg

**4. Betydning og aktualitet (2 min):**
- Realismen endret litteraturens rolle
- Fortsatt aktuell: Sosiale problemer diskuteres fortsatt
- Arven: Sosialrealisme, nytt norsk drama

**Avslutning (1 min):**
- Oppsummering av hovedpoenger
- Refleksjon: Realismens vedvarende relevans
- Åpning for spørsmål`,
    },
    {
      id: 'norsk-vg3-15-2-tip-1',
      type: 'tip',
      title: 'Sjekkliste for muntlig eksamen',
      content: `**Før eksamen:**
- [ ] Les oppgaven grundig
- [ ] Lag en klar struktur
- [ ] Velg relevante eksempler
- [ ] Forbered fagbegreper
- [ ] Øv presentasjonen
- [ ] Ta tiden
- [ ] Forbered deg på spørsmål
- [ ] Sov godt natten før

**Under presentasjonen:**
- [ ] Start med å fange interesse
- [ ] Følg strukturen din
- [ ] Bruk fagbegreper
- [ ] Ha øyekontakt
- [ ] Hold tiden
- [ ] Avslutt tydelig

**I fagsamtalen:**
- [ ] Lytt nøye
- [ ] Ta deg tid
- [ ] Svar relevant
- [ ] Vis refleksjon
- [ ] Vær ærlig
- [ ] Hold deg rolig`,
    },
    {
      id: 'norsk-vg3-15-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-15-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Øv på muntlig presentasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema fra pensum og lag en presentasjonsstruktur.',
            solution: 'Strukturen bør ha klar innledning, 3-4 hovedpunkter og avslutning.',
          },
          {
            label: 'b',
            task: 'Presenter for noen og få tilbakemelding.',
            solution: 'Be om konkret tilbakemelding på struktur, faginnhold og fremføring.',
          },
          {
            label: 'c',
            task: 'Øv på å svare på oppfølgingsspørsmål.',
            solution: 'Be den du presenterer for å stille spørsmål etterpå.',
          },
        ],
        solution: 'Øvelsen gir erfaring med muntlig eksamenssituasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-15-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-15-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forbered deg på breddekunnskaper.',
        hints: ['Gå gjennom alle hovedtemaer i pensum', 'Lag stikkordlister', 'Øv på å koble temaer sammen'],
        solution: 'God oversikt over hele pensum gir trygghet i fagsamtalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const NORSK_VG3_CHAPTERS = [
  // Kapittel 1: Det moderne gjennombruddet
  CHAPTER_NORSK_VG3_1_1,
  CHAPTER_NORSK_VG3_1_2,
  CHAPTER_NORSK_VG3_1_3,
  CHAPTER_NORSK_VG3_1_4,
  CHAPTER_NORSK_VG3_1_5,
  CHAPTER_NORSK_VG3_1_6,
  // Kapittel 2: Naturalisme
  CHAPTER_NORSK_VG3_2_1,
  CHAPTER_NORSK_VG3_2_2,
  CHAPTER_NORSK_VG3_2_3,
  // Kapittel 3: Nyromantikk
  CHAPTER_NORSK_VG3_3_1,
  CHAPTER_NORSK_VG3_3_2,
  CHAPTER_NORSK_VG3_3_3,
  CHAPTER_NORSK_VG3_3_4,
  // Kapittel 4: Tidlig modernisme
  CHAPTER_NORSK_VG3_4_1,
  CHAPTER_NORSK_VG3_4_2,
  CHAPTER_NORSK_VG3_4_3,
  CHAPTER_NORSK_VG3_4_4,
  // Kapittel 5: Mellomkrigslitteratur
  CHAPTER_NORSK_VG3_5_1,
  CHAPTER_NORSK_VG3_5_2,
  CHAPTER_NORSK_VG3_5_3,
  // Kapittel 6: Etterkrigslitteratur
  CHAPTER_NORSK_VG3_6_1,
  CHAPTER_NORSK_VG3_6_2,
  CHAPTER_NORSK_VG3_6_3,
  CHAPTER_NORSK_VG3_6_4,
  // Kapittel 7: Samtidslitteratur
  CHAPTER_NORSK_VG3_7_1,
  CHAPTER_NORSK_VG3_7_2,
  CHAPTER_NORSK_VG3_7_3,
  CHAPTER_NORSK_VG3_7_4,
  CHAPTER_NORSK_VG3_7_5,
  // Kapittel 8: Lyrikk
  CHAPTER_NORSK_VG3_8_1,
  CHAPTER_NORSK_VG3_8_2,
  CHAPTER_NORSK_VG3_8_3,
  // Kapittel 9: Drama
  CHAPTER_NORSK_VG3_9_1,
  CHAPTER_NORSK_VG3_9_2,
  // Kapittel 10: Essay
  CHAPTER_NORSK_VG3_10_1,
  CHAPTER_NORSK_VG3_10_2,
  // Kapittel 11: Retorisk analyse
  CHAPTER_NORSK_VG3_11_1,
  CHAPTER_NORSK_VG3_11_2,
  // Kapittel 12: Litterær analyse
  CHAPTER_NORSK_VG3_12_1,
  CHAPTER_NORSK_VG3_12_2,
  // Kapittel 13: Språk i endring
  CHAPTER_NORSK_VG3_13_1,
  CHAPTER_NORSK_VG3_13_2,
  // Kapittel 14: Sidemål
  CHAPTER_NORSK_VG3_14_1,
  CHAPTER_NORSK_VG3_14_2,
  // Kapittel 15: Eksamensforberedelse
  CHAPTER_NORSK_VG3_15_1,
  CHAPTER_NORSK_VG3_15_2,
];

import type { TextbookChapter } from '@/lib/types/textbook';

// DEL 5: LAGIDRETTER OG SAMSPILL

export const CHAPTER_KROPPSOVING_VG1_5_1: TextbookChapter = {
  id: 'kroppsoving-vg1-5-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.1',
  title: 'Fotball og håndball',
  description: 'Lær om grunnleggende teknikk, taktikk, posisjoner og regler i fotball og håndball',
  estimatedMinutes: 55,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-1-intro',
      type: 'text',
      content: `# Fotball og håndball

Fotball og håndball er to av Norges mest populære lagidretter. Begge idrettene krever god teknikk, taktisk forståelse, samarbeid og fysisk kondisjon. I dette kapittelet skal vi se på grunnleggende ferdigheter, spillforståelse og hvordan du kan bidra til lagets suksess.

Både fotball og håndball er dynamiske idretter hvor situasjonene endrer seg raskt. Du må kunne både angripe og forsvare, samarbeide med medspillere og tilpasse deg spillets krav. God ballkontroll, presisjon og romforståelse er viktig i begge idrettene.`
    },
    {
      id: 'kroppsoving-vg1-5-1-def1',
      type: 'definition',
      title: 'Ballkontroll',
      content: 'Evnen til å motta, holde og manøvrere ballen med kroppen (i fotball) eller hendene (i håndball). God ballkontroll er grunnlaget for effektiv spilling.'
    },
    {
      id: 'kroppsoving-vg1-5-1-fotball',
      type: 'text',
      content: `## Fotball - grunnleggende teknikk

**Pasninger:**
- Innsidepasning: Mest presis, brukes for korte og mellomstore pasninger
- Vristpasning: For lange pasninger og skudd
- Innersidepasning: For korte, raske pasninger i trange rom
- Hælpasning: Overraskende pasning bakover

**Mottak av ball:**
- Brystkontroll: For baller i høyden
- Lårkontrollen: Dempe baller som spretter
- Innersidekontroll: Mest vanlig for baller på bakken
- Kontroll i fart: Ta ned ballen mens du løper

**Dribbling:**
- Holde ballen nær foten
- Veksle mellom utsiden og innsiden av foten
- Heve blikket for å se medspillere
- Tempo og retningsendringer for å riste av motstandere`
    },
    {
      id: 'kroppsoving-vg1-5-1-def2',
      type: 'definition',
      title: 'Førsteberøring',
      content: 'Den første kontakten med ballen når du mottar en pasning. En god førsteberøring gir deg kontroll og tid til å bestemme neste handling.'
    },
    {
      id: 'kroppsoving-vg1-5-1-def-gjore-andre-gode',
      type: 'definition',
      title: 'Å gjøre andre gode',
      content: 'Å bruke egne ferdigheter til å hjelpe medspillere til å lykkes. Dette kan være gjennom presise pasninger tilpasset mottakerens nivå, oppmuntring når noen feiler, å skape rom for andre, gi konstruktive tilbakemeldinger, og tilpasse spillet slik at alle kan bidra. God lagspiller handler ikke bare om egne prestasjoner, men om å løfte hele laget.'
    },
    {
      id: 'kroppsoving-vg1-5-1-fotball-pos',
      type: 'text',
      content: `## Fotball - posisjoner og roller

**Keeper:**
- Redde skudd og sikre målet
- Organisere forsvaret
- Starte angrep med kast eller spark

**Forsvarsspillere:**
- Stoppe motstandernes angrep
- Vinne dueller og klarere ballen
- Spille ballen frem til midtbanen

**Midtbanespillere:**
- Koble forsvar og angrep
- Skape scoringsmuligheter
- Jobbe både defensivt og offensivt

**Angrepsspillere:**
- Score mål
- Skape rom for medspillere
- Presse motstandernes forsvar`
    },
    {
      id: 'kroppsoving-vg1-5-1-example1',
      type: 'example',
      title: 'Eksempel: Pasningsspill i fotball',
      problem: 'Et lag ønsker å spille seg gjennom motstanderens forsvar. Hvordan kan de bruke pasningsspill effektivt?',
      solution: `**Løsning:**
1. **Trekantspill:** Tre spillere danner en trekant, slik at spilleren med ball alltid har to pasningsalternativer
2. **Gi-og-gå:** Spiller A passer til B og løper umiddelbart videre for å motta retur
3. **Vekslespill:** Raske, korte pasninger mellom spillere for å flytte motstanderne ut av posisjon
4. **Dyp pasning:** En lang pasning bak forsvarslinjen til en løpende spiss

Nøkkelen er å holde ballen i bevegelse og skape numerisk overtak i ulike soner på banen.`
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken teknikk bruker du når du skal gi en nøyaktig, kort pasning til en medspiller i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det mest presise pasningsalternativet',
            multipleChoiceOptions: [
              'Vristpasning',
              'Innsidepasning',
              'Hælpasning',
              'Spisspassning'
            ],
            solution: 'Innsidepasning'
          }
        ],
        solution: 'Innsidepasning er den mest presise pasningsteknikken for korte og mellomstore avstander i fotball.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hva "gi-og-gå" prinsippet i fotball innebærer.',
        solution: 'Gi-og-gå innebærer at spilleren som passer ballen umiddelbart løper videre for å motta en retur. Dette skaper bevegelse, forvirrer forsvaret og kan bryte ned motstanderens organisering. Spilleren som mottar pasningen må være årvåken og klar til å spille returen.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-haandball',
      type: 'text',
      content: `## Håndball - grunnleggende teknikk

**Kast og pasninger:**
- Skulderkas: Det vanligste kastet, utført fra skulderen
- Sprettkast: Ballen spretter på gulvet før den når medspiller
- Bakromskast: Kast bakover uten å se
- Lobb: Høy pasning over forsvarere

**Mottak:**
- Ta imot ballen med begge hender
- Dempe farten på ballen
- Være klar til raskt å gå videre

**Dribbling:**
- Høy dribbling: For fart og framrykning
- Lav dribbling: For kontroll og beskyttelse
- Retningsendring med driblingen

**Skudd:**
- Overarmskast: Kraftfullt skudd fra skulderen
- Løftet skudd: Skutt i hoppet for bedre vinkel
- Finteskudd: Med håndleddsbevegelse for overraskelse
- Straffekast: Fra 7-metersmerket`
    },
    {
      id: 'kroppsoving-vg1-5-1-def3',
      type: 'definition',
      title: 'Trinnfeil',
      content: 'I håndball får du ta maks tre skritt med ballen uten å drible. Mer enn tre skritt er trinnfeil og gir frispark til motstanderlaget.'
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'I håndball har du mottatt ballen og vil løpe fremover.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange skritt kan du maksimalt ta uten å drible?',
            multipleChoiceOptions: [
              'To skritt',
              'Tre skritt',
              'Fire skritt',
              'Fem skritt'
            ],
            solution: 'Tre skritt'
          },
          {
            label: 'b',
            task: 'Hva heter det når du tar for mange skritt?',
            solution: 'Det heter trinnfeil, og motstanderlaget får frispark.'
          }
        ],
        solution: 'I håndball får du ta maksimalt tre skritt med ballen uten å drible. Tar du flere, er det trinnfeil.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-haandball-pos',
      type: 'text',
      content: `## Håndball - posisjoner og roller

**Keeper:**
- Redde skudd
- Starte tempokontring med lange utkast
- Kommunisere med forsvaret

**Kantspillere (høyre/venstre):**
- Score fra skarpe vinkler
- Være raske i kontringer
- Jobbe defensivt på egen kant

**Bakspillere (høyre/midtre/venstre):**
- Organisere angrepet
- Skyte langskudd
- Spille inn strekspiller

**Strekspiller:**
- Score fra nære hold
- Blokkere keeperens sikt
- Sperre forsvarsspillere

**Linjespiller (i forsvar):**
- Fysisk sterk
- Stoppe gjennombrudd
- Vinne dueller`
    },
    {
      id: 'kroppsoving-vg1-5-1-def4',
      type: 'definition',
      title: 'Kontring (kontra)',
      content: 'Raskt angrep rett etter å ha vunnet ballen, ofte med numerisk overtak. I håndball er tempokontringen en svært effektiv måte å score på.'
    },
    {
      id: 'kroppsoving-vg1-5-1-example2',
      type: 'example',
      title: 'Eksempel: Håndballforsvar',
      problem: 'Et lag skal forsvare seg mot et organisert angrep i håndball. Hvilke forsvarsformasjoner kan de bruke?',
      solution: `**Løsning:**

**6-0 forsvar:**
- Seks spillere står i en linje foran målområdet
- Godt mot langskudd, men sårbart for gjennombrudd
- Krever god kommunikasjon

**5-1 forsvar:**
- Fem spillere i linje, én foran (avansert)
- Den fremste presser bakspillerne
- Skaper usikkerhet i motstanderens oppbygging

**3-2-1 forsvar:**
- Tre bak, to foran disse, én lengst fram
- Aggressivt forsvar som forstyrrer tidlig
- Krever god fysikk og taktisk forståelse

Valg av forsvar avhenger av motstanderens styrker og egne spilleres egenskaper.`
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Du er bakspiller i håndball og skal organisere et angrep mot et 6-0 forsvar.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken spillerposisjon er spesielt viktig for å bryte ned et 6-0 forsvar?',
            multipleChoiceOptions: [
              'Keeper',
              'Kantspiller',
              'Strekspiller',
              'Målvakt'
            ],
            solution: 'Strekspiller'
          },
          {
            label: 'b',
            task: 'Forklar hvordan strekspilleren kan hjelpe laget med å score',
            solution: 'Strekspilleren står mellom forsvarsspillerne og skaper uro. Vedkommende kan blokkere keeperens sikt, binde forsvarsspillere, skape rom for bakspillere til å skyte, og selv score fra nære hold ved innspill.'
          }
        ],
        solution: 'Strekspilleren er nøkkelen til å bryte ned et 6-0 forsvar ved å skape rom og muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-taktikk',
      type: 'text',
      content: `## Taktikk i fotball og håndball

**Offensiv taktikk:**
- Bredde: Spre motstanderens forsvar
- Dybde: Løp bak forsvarslinjen
- Bevegelse uten ball: Skape rom for medspillere
- Tempo: Variere mellom raskt og rolig spill

**Defensiv taktikk:**
- Pressing: Angripe ballen høyt i banen
- Kompakt forsvar: Holde små avstander mellom spillerne
- Dekke rom: Lukke pasningsveier
- Dobbel på ball: To spillere presser ballholderen

**Overganger:**
- Fra forsvar til angrep: Rask kontring eller rolig oppbygging
- Fra angrep til forsvar: Umiddelbar pressing eller organisert tilbaketrekking`
    },
    {
      id: 'kroppsoving-vg1-5-1-def5',
      type: 'definition',
      title: 'Avspillsmuligheter',
      content: 'Alternative pasningsvalg for spilleren med ballen. God spillforståelse innebærer å hele tiden se flere avspillsmuligheter.'
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med "pressing" i fotball og håndball?',
        solution: 'Pressing betyr at laget aktivt angriper motstanderen som har ballen, gjerne høyt i banen. Målet er å vinne ballen raskt tilbake, forstyrre motstanderens oppbygging, og skape scoring ved feil. God pressing krever samarbeid, timing og fysisk kapasitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-tips',
      type: 'text',
      content: `## Tips for bedre lagspill

**Kommunikasjon:**
- Snakk hele tiden på banen
- Si fra når du er åpen
- Gi positive tilbakemeldinger

**Romforståelse:**
- Se hvor medspillere og motstandere er
- Forstå når du skal løpe og når du skal bli stående
- Skap rom for andre

**Beslutninger:**
- Pass, skyt eller dribble?
- Vurder risiko og belønning
- Tilpass tempo til situasjonen

**Holdning:**
- Gi aldri opp
- Støtt medspillerne dine
- Lær av feil

**Hvordan hjelpe en usikker lagkamerat:**
- Start med enkle pasninger som gir suksessopplevelse
- Oppmuntre også når det ikke går perfekt
- Vis tålmodighet og tilpass spillehastigheten
- Gjør medspilleren synlig for laget ved å spille hen inn i gode situasjoner
- Kommuniser tydelig og positivt ("Bra jobbet!" "Jeg er her!")
- Feir også små fremskritt`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-1-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvilke forskjeller er det mellom fotball og håndball når det gjelder ballkontroll?',
        solution: 'I fotball bruker du føttene, brystet, hodet og lårene til å kontrollere ballen, men aldri hendene (unntatt keeper). I håndball bruker du hendene til å holde, kaste og motta ballen. Fotball krever mer fotarbeid og balanse, mens håndball krever god hånd-øye-koordinasjon og kraft i overekstremitetene. Begge krever god romforståelse og taktikk.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-1-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-1-ex7',
        number: '7',
        type: 'classic',
        task: 'Praktisk oppgave: Øv på å gi konstruktiv tilbakemelding til en medspiller etter en øvelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør en god tilbakemelding inneholde?',
            solution: 'En god tilbakemelding bør inneholde: 1) Noe positivt som fungerte bra, 2) Ett konkret forbedringspunkt, 3) Forslag til hvordan man kan forbedre seg, 4) Oppmuntring og støtte. Start alltid med det positive før du kommer med forbedringsforslag.'
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan du kan gi konstruktiv tilbakemelding til en medspiller som sliter med pasningene sine i fotball.',
            solution: 'Eksempel på konstruktiv tilbakemelding: "Du har god oversikt og ser hvem som er åpne! Et tips er å bruke innsiden av foten når du passer - det gir bedre presisjon enn vristen på korte avstander. Prøv også å se på mottakeren før du passer, så du treffer føttene deres. Skal vi øve sammen på dette?" Tilbakemeldingen er positiv, konkret, hjelpsom og inkluderende.'
          }
        ],
        solution: 'God tilbakemelding styrker laget ved å hjelpe alle til å utvikle seg i et trygt og støttende miljø.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_5_2: TextbookChapter = {
  id: 'kroppsoving-vg1-5-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.2',
  title: 'Basketball og volleyball',
  description: 'Lær teknikk, taktikk og spillsystemer i basketball og volleyball',
  estimatedMinutes: 55,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-2-intro',
      type: 'text',
      content: `# Basketball og volleyball

Basketball og volleyball er teknisk krevende lagidretter som krever god koordinasjon, timing og samarbeid. Basketball spilles med hendene og fokuserer på scoring i en kurv, mens volleyball handler om å slå ballen over nettet uten at den berører egen banehalvdel. Begge idrettene er dynamiske og krever både offensive og defensive ferdigheter.

I dette kapittelet skal vi se på grunnleggende teknikker, posisjoner, spillsystemer og hvordan du kan utvikle deg som lagspiller i disse idrettene.`
    },
    {
      id: 'kroppsoving-vg1-5-2-def1',
      type: 'definition',
      title: 'Dribbling (basketball)',
      content: 'Å sprette ballen mot gulvet kontinuerlig med én hånd mens du beveger deg. Når du slutter å drible, må du passe eller skyte - du kan ikke starte å drible igjen.'
    },
    {
      id: 'kroppsoving-vg1-5-2-basketball',
      type: 'text',
      content: `## Basketball - grunnleggende teknikk

**Dribbling:**
- Høy dribbling: For fart i åpent rom
- Lav dribbling: For beskyttelse mot forsvarere
- Kryssdribbling: Bytte hånd ved retningsendring
- Mellom beina/bak ryggen: Avanserte bevegelser

**Pasninger:**
- Brystpasning: Mest vanlig, fra brystet med begge hender
- Bounce pass: Spretter på gulvet før mottaker
- Overhode-pasning: Over forsvarere
- Baseball-pasning: Lang pasning med én hånd

**Skudd:**
- Lay-up: Skudd i fart mot kurven
- Jump shot: Skutt i hoppet
- Frikast: Fra frikastlinjen etter feil
- Tre-poengers: Fra utsiden av tre-poengerslinjen

**Rebounding:**
- Posisjonering under kurven
- Timing for å hoppe
- Sikre ballen med begge hender`
    },
    {
      id: 'kroppsoving-vg1-5-2-def2',
      type: 'definition',
      title: 'Pivoting (tåspiss)',
      content: 'Når du holder ballen, må én fot stå stille (pivotfoten) mens den andre kan bevege seg. Dette lar deg snu kroppen for å se medspillere eller finne skuddposisjon.'
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex1',
        number: '1',
        type: 'classic',
        task: 'I basketball har du akkurat mottatt en pasning og stoppet opp.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kalles teknikken der du holder én fot stille mens du snur kroppen?',
            multipleChoiceOptions: [
              'Dribbling',
              'Pivoting',
              'Screening',
              'Rebounding'
            ],
            solution: 'Pivoting'
          },
          {
            label: 'b',
            task: 'Hvorfor er denne teknikken viktig?',
            solution: 'Pivoting lar deg snu kroppen for å se medspillere, beskytte ballen mot forsvarere, og finne gode pasnings- eller skuddposisjoner uten å få walking (gåfeil).'
          }
        ],
        solution: 'Pivoting er en grunnleggende teknikk i basketball som gir deg bevegelsesfrihet med ballen.',
        allowsUpload: false,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-basketball-pos',
      type: 'text',
      content: `## Basketball - posisjoner

**Point guard (1):**
- Lagets "kaptein" på banen
- Organiserer angrepet
- God driblingskontroll og pasningsferdigheter
- Ofte den minste spilleren

**Shooting guard (2):**
- Primært ansvarlig for scoring
- Gode skuddegenskaper
- Kan skyte både fra distanse og nært

**Small forward (3):**
- Allsidig spiller
- Kan både score og forsvare
- Ofte atletisk og rask

**Power forward (4):**
- Fysisk sterk
- Jobber nært kurven
- Rebounding og korte skudd

**Center (5):**
- Vanligvis lagets høyeste spiller
- Dominerer under kurven
- Blokkering og rebounding`
    },
    {
      id: 'kroppsoving-vg1-5-2-example1',
      type: 'example',
      title: 'Eksempel: Pick and roll i basketball',
      problem: 'To spillere ønsker å samarbeide for å skape en scoringsmulighet. Hvordan utføres en "pick and roll"?',
      solution: `**Løsning:**

1. **Sperring (pick):** Spiller B stiller seg som en "vegg" foran Spiller A's forsvar
2. **Dribbling forbi:** Spiller A dribler rundt sperringen
3. **Rolling:** Spiller B snur og løper mot kurven
4. **Valg:** Spiller A kan enten:
   - Skyte selv (hvis forsvarere følger B)
   - Passe til B som er fri mot kurven
   - Passe til en annen åpen medspiller

Dette er en av basketballs mest effektive taktikker fordi den skaper tvil hos forsvaret.`
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan en "pick and roll" utføres i basketball.',
        solution: 'Pick and roll starter med at en spiller (screener) stiller seg som en "vegg" foran en medspillers forsvar. Medspilleren (ball handler) dribler rundt sperringen. Screener snur så og ruller mot kurven. Ball handler kan nå velge å skyte selv, passe til screener som ruller, eller finne en annen åpen medspiller. Dette skaper tvil hos forsvaret og ofte en scoringsmulighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-volleyball',
      type: 'text',
      content: `## Volleyball - grunnleggende teknikk

**Serve (serve):**
- Underhåndsserve: Trygg, men mindre kraftfull
- Overhåndsserve: Kraftigere, mer offensiv
- Jump serve: Skutt i hoppet for maksimal kraft

**Bump (manchet):**
- Motta serve eller harde slag
- Armene samlet, knærne bøyd
- Plattform med underarmene

**Set (stikk):**
- Forberede angrep
- Hendene over hodet
- Presis og myk berøring

**Spike (smash):**
- Offensivt angrep
- Hoppe og slå ballen ned i motstanderens bane
- Kraft og presisjon

**Block (blokk):**
- Hoppe ved nettet
- Blokkere motstanderens smash
- Timing og armposisjon`
    },
    {
      id: 'kroppsoving-vg1-5-2-def3',
      type: 'definition',
      title: 'Rotasjon (volleyball)',
      content: 'Spillerne roterer én posisjon med klokken hver gang laget vinner serven tilbake. Dette sikrer at alle spiller både foran og bak på banen.'
    },
    {
      id: 'kroppsoving-vg1-5-2-volleyball-pos',
      type: 'text',
      content: `## Volleyball - posisjoner

**Setter (opplegger):**
- Lagets "dirigent"
- Tar den andre berøringen
- Legger opp ballen for angripere
- God oversikt og presisjon

**Outside hitter (ytterspiller):**
- Primær angriper fra venstre side
- Allsidig offensiv spiller
- Også defensivt ansvar

**Opposite (motsatt):**
- Angriper fra høyre side
- Ofte lagets beste angriper
- Færre defensive oppgaver

**Middle blocker (midtblocker):**
- Hurtige angrep fra midten
- Blokkerer motstanderens angrep
- Høy og atletisk

**Libero:**
- Defensiv spesialist
- Annen drakt enn resten av laget
- Kan ikke angripe eller blokkere ved nettet
- Ofte beste mottak`
    },
    {
      id: 'kroppsoving-vg1-5-2-def4',
      type: 'definition',
      title: 'Tre-berøringsregelen',
      content: 'I volleyball har hvert lag maksimalt tre berøringer før ballen må over nettet. Typisk: bump - set - spike.'
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange berøringer har et volleyballag maksimalt før ballen må over nettet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall',
            multipleChoiceOptions: [
              'To berøringer',
              'Tre berøringer',
              'Fire berøringer',
              'Ubegrenset'
            ],
            solution: 'Tre berøringer'
          }
        ],
        solution: 'I volleyball har hvert lag maksimalt tre berøringer (typisk bump-set-spike) før ballen må over nettet.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Hvilken posisjon i volleyball har defensivt spesialistrolle og bærer annen drakt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig posisjon',
            multipleChoiceOptions: [
              'Setter',
              'Middle blocker',
              'Libero',
              'Outside hitter'
            ],
            solution: 'Libero'
          },
          {
            label: 'b',
            task: 'Hva er liberoen ikke lov til å gjøre?',
            solution: 'Libero kan ikke angripe eller blokkere ved nettet, og kan ikke serve i enkelte regelsett. Rollen er rent defensiv.'
          }
        ],
        solution: 'Libero er volleyballspilleren med spesialdrakt og rent defensivt ansvar.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-example2',
      type: 'example',
      title: 'Eksempel: Volleyball-angrep',
      problem: 'Et volleyballag har mottatt motstanderens serve. Beskriv en typisk angrepssituasjon.',
      solution: `**Løsning:**

**1. Første berøring (bump/mottak):**
- Libero eller bakspiller mottar serven med manchet
- Målet er å spille ballen høyt og presist til setter

**2. Andre berøring (set/stikk):**
- Setter løper til ballen
- Legger opp ballen til en angriper (ofte outside hitter)
- Plasserer ballen ca. 1 meter fra nettet

**3. Tredje berøring (spike/smash):**
- Angriper tar tilløp
- Hopper og slår ballen kraftig ned i motstanderens bane
- Sikter på svake punkter i forsvaret

Motstanderlaget prøver å blokkere ved nettet og forsvare ballen.`
    },
    {
      id: 'kroppsoving-vg1-5-2-taktikk',
      type: 'text',
      content: `## Taktikk og spillsystemer

**Basketball-taktikk:**
- Fast break: Raskt angrep før forsvaret kommer på plass
- Half-court offense: Organisert angrep mot etablert forsvar
- Zone defense: Forsvare et område fremfor en spiller
- Man-to-man: Hver spiller dekker en motstander
- Full court press: Presse hele banen

**Volleyball-taktikk:**
- Serve-strategi: Sikte på svake mottakere
- Angrepsvariasjon: Blande hurtige og høye opplegg
- Blokkering: Dobbel- eller trippelblokk
- Forsvar: 2-1-3 eller 2-3 formasjon
- Kommunikasjon: Rope "min" eller "din"

**Fellestrekkk:**
- Tilpasse taktikk til motstanderens svakheter
- Variere mellom offense og defense
- Kommunisere konstant
- Utnytte spillernes styrker`
    },
    {
      id: 'kroppsoving-vg1-5-2-def5',
      type: 'definition',
      title: 'Assist (basketball)',
      content: 'En pasning som direkte leder til at en medspiller scorer. God assist-statistikk viser uselviskhett og lagspill.'
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom "zone defense" og "man-to-man defense" i basketball.',
        solution: 'I man-to-man defense dekker hver forsvarsspiller en bestemt motstander over hele banen. Dette krever god fysikk og individuell forsvarsferdighet. I zone defense forsvarer hver spiller et bestemt område på banen, uavhengig av hvilke motstandere som kommer inn i sonen. Zone defense er bedre mot lag med svake skyttere, mens man-to-man er mer intensivt og personlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Du skal serve i volleyball. Hvilke strategiske valg kan du ta?',
        solution: 'Ved serve kan du: 1) Sikte på motstanderens svakeste mottaker, 2) Serve på sammenstøt mellom to spillere for å skape forvirring, 3) Variere mellom kraft og plassering, 4) Serve kort eller dypt avhengig av motstanderens posisjonering, 5) Serve på libero hvis hen er langt bak, eller 6) Serve på en spiller som akkurat har byttet inn. Målet er å vanskeliggjøre motstanderens mottak og angrep.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-coaching',
      type: 'text',
      content: `## Coaching-ferdigheter og veiledning av andre

En viktig del av lagidrett er å kunne hjelpe og veilede medspillere. Dette kalles coaching-ferdigheter, og handler om mer enn bare å være god selv - det handler om å løfte andre.

**Hvordan veilede en medspiller:**
- **Observer først:** Se nøye på hva medspilleren gjør, før du gir råd
- **Spør før du råder:** "Vil du ha et tips?" - respekter at noen vil prøve selv først
- **Vær konkret:** "Prøv å bøye knærne mer når du tar imot ballen" er bedre enn "du må bli bedre"
- **Vis, ikke bare fortell:** Demonstrer teknikken selv hvis du kan
- **Gi én ting om gangen:** Ikke overveldet med for mange råd samtidig
- **Følg opp med oppmuntring:** "Der ja! Det var mye bedre!"

**Eksempel på god veiledning i basketball:**
Du ser at en medspiller sliter med lay-up. I stedet for å kritisere, sier du: "Jeg la merke til at du treffer godt når du bruker brettet. Skal vi øve sammen på å time hoppet bedre? Jeg kan kaste deg ballen." Dette er konstruktivt, positivt og inkluderende.

**Eksempel på god veiledning i volleyball:**
En medspiller har problemer med å treffe med mancheten. Du sier: "Du har god posisjonering! Et tips er å holde armene litt strammere sammen, så får du en bedre plattform. Vil du at jeg kaster noen baller til deg så du kan øve?" Dette fokuserer på det positive først, gir konkret råd, og tilbyr hjelp.`
    },
    {
      id: 'kroppsoving-vg1-5-2-tips',
      type: 'text',
      content: `## Tips for suksess

**Basketball:**
- Øv på svak hånd for å bli mer uforutsigbar
- Hold blikket oppe når du dribbler
- Kom i skuddposisjon før du får ballen
- Kommuniser på forsvar: "Jeg har min!"

**Volleyball:**
- Hold alltid knærne bøyd og vær på tærne
- Rope tydelig hvem som tar ballen
- Øv på serve - det er ditt eneste kontrollerte angrep
- Følg ballen hele tiden med blikket

**Generelt:**
- Finn din rolle i laget
- Spill med høy energi
- Feir medspilleres suksess
- Lær av feil uten å gi opp`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-2-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex7',
        number: '7',
        type: 'classic',
        task: 'Hvilke likheter og forskjeller er det mellom basketball og volleyball når det gjelder lagsamarbeid?',
        solution: 'Likheter: Begge krever tett samarbeid, kommunikasjon, rolleforståelse og evne til å lese spillet. Begge har spesialiserte posisjoner og krever at spillere støtter hverandre. Forskjeller: Basketball har mer kontinuerlig flyt og individuelle dueller, mens volleyball har tydelige brudd mellom angrep og forsvar. I volleyball må alle berøre ballen i tur og orden (rotasjon), mens basketball har friere bevegelse. Volleyball har streng tre-berøringsregel, basketball har mer frihet med ballen.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-2-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-2-ex8',
        number: '8',
        type: 'classic',
        task: 'Praktisk coaching-oppgave: Velg en medspiller og hjelp vedkommende med å forbedre en teknikk i basketball eller volleyball.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken teknikk valgte du å fokusere på, og hvorfor?',
            solution: 'Eksempel: Jeg valgte å fokusere på manchet-teknikk i volleyball fordi jeg så at medspilleren min slet med å få armene til å fungere som en stabil plattform. Ballen spratt ofte i forskjellige retninger. Dette var et område hvor litt veiledning kunne gi rask forbedring.'
          },
          {
            label: 'b',
            task: 'Beskriv hvordan du veiledet medspilleren. Hva sa og gjorde du?',
            solution: 'Eksempel på veiledning: Jeg startet med å si noe positivt: "Du er flink til å posisjonere deg under ballen!" Så viste jeg teknikken selv: holdt hendene sammen, strakte armene og demonstrerte hvordan jeg bøyer i knærne for å dempe ballen. Jeg kastet noen baller til medspilleren og ga små tips underveis: "Prøv å holde armene enda litt strammere sammen." Hver gang det gikk bedre, sa jeg "Bra! Der har du det!" Etter øvelsen spurte jeg hvordan hen følte det gikk.'
          },
          {
            label: 'c',
            task: 'Hva lærte du selv av å veilede noen andre?',
            solution: 'Eksempel: Jeg lærte at det er vanskelig å forklare noe jeg gjør automatisk. Jeg måtte virkelig tenke gjennom teknikken selv for å kunne forklare den. Jeg lærte også hvor viktig det er å være tålmodig og positiv - det fungerer mye bedre enn å kritisere. Det var faktisk veldig givende å se at medspilleren min ble bedre!'
          }
        ],
        solution: 'Å veilede andre styrker både medspilleren og deg selv, og bygger et sterkere lag.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_5_3: TextbookChapter = {
  id: 'kroppsoving-vg1-5-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.3',
  title: 'Innebandy og andre smålagsspill',
  description: 'Utforsk innebandy, streetbasket, futsal, beachvolleyball og andre smålagsspill',
  estimatedMinutes: 50,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-3-intro',
      type: 'text',
      content: `# Innebandy og andre smålagsspill

Smålagsspill er idretter med færre spillere på banen, noe som gir mer ballkontakt, raskere tempo og større individuelt ansvar. Innebandy, streetbasket, futsal og beachvolleyball er populære varianter som kombinerer elementer fra større idretter med egne unike regler og utfordringer.

Disse idrettene er perfekte for å utvikle tekniske ferdigheter, taktisk forståelse og samarbeid i mindre grupper. Mindre lag betyr at hver spiller får større betydning for lagets prestasjoner.`
    },
    {
      id: 'kroppsoving-vg1-5-3-def1',
      type: 'definition',
      title: 'Smålagsspill',
      content: 'Idretter med 2-6 spillere per lag på banen samtidig. Gir mer ballkontakt, raskere beslutninger og større individuelt ansvar enn fullstore lagidretter.'
    },
    {
      id: 'kroppsoving-vg1-5-3-innebandy',
      type: 'text',
      content: `## Innebandy

Innebandy (floorball) er en rask hallsport med 5 utespillere og 1 keeper per lag. Spilles med en lett plastball og spesielle køller (staver). Spillet minner om ishockey, men uten fysisk kontakt.

**Grunnleggende teknikk:**
- **Køllegrep:** Overgrep og undergrep bestemmer kontroll
- **Dribbling:** Holde ballen nær køllbladet
- **Pasning:** Rett og bakrom passing på gulvet
- **Skudd:** Håndleddskudd, slagskudd, dragskudd
- **Mottak:** Dempe ballen med køllbladet

**Regler:**
- Ingen fysisk kroppskontakt
- Ingen høye køller (over hoften)
- Keeper kan bruke hendene i målområdet
- Frispark ved regelbrudd
- Straff ved alvorlige feil

**Posisjoner:**
- **Center:** Offensiv spiller, ofte lagets playmaker
- **Vinger:** Raske, jobber langs kantene
- **Back:** Defensivt ansvar, støtter angrep
- **Keeper:** Blokkerer skudd, ingen kølle`
    },
    {
      id: 'kroppsoving-vg1-5-3-def2',
      type: 'definition',
      title: 'Backhand og forehand',
      content: 'I innebandy er forehand når du fører kølla på din foretrukne side, backhand er på den andre siden. Å mestre begge er viktig for å være uforutsigbar.'
    },
    {
      id: 'kroppsoving-vg1-5-3-example1',
      type: 'example',
      title: 'Eksempel: Innebandytaktikk',
      problem: 'Et innebandylag ønsker å score mot et godt organisert forsvar. Hvilke taktiske grep kan de bruke?',
      solution: `**Løsning:**

**1. Pasningsspill:**
- Raske pasninger langs kantene
- Spille inn center som står foran mål
- Gi-og-gå for å bryte forsvar

**2. Individuell ferdighet:**
- Driblinger 1-mot-1
- Plutselige retningsendringer
- Skudd fra uventede vinkler

**3. Organisert angrep:**
- 1-2-2 formasjon (1 center, 2 vinger, 2 backer)
- Konstant bevegelse uten ball
- Skape overtalssituasjoner i offensiv sone

**4. Bakromspasning:**
- Lange pasninger bak forsvaret
- Utnytte dybde i banen
- Timing mellom passer og mottaker

Nøkkelen er høyt tempo og mange skudd på mål.`
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex1',
        number: '1',
        type: 'classic',
        task: 'I innebandy er det ikke lov med fysisk kontakt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer hvis du bevisst bruker kroppen til å blokkere en motstander?',
            multipleChoiceOptions: [
              'Ingenting, det er lov',
              'Frispark til motstanderlaget',
              'Du får gult kort',
              'Straff mot ditt lag'
            ],
            solution: 'Frispark til motstanderlaget'
          },
          {
            label: 'b',
            task: 'Hvor høyt kan du løfte kølla?',
            solution: 'Kølla kan maksimalt løftes til hofthøyde. Høyere er farlig og gir frispark til motstanderen.'
          }
        ],
        solution: 'Innebandy er en kontaktfri sport med strenge regler for sikkerhet.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-futsal',
      type: 'text',
      content: `## Futsal

Futsal er fotball i hall, 5 mot 5 (inkludert keeper), med en tyngre ball som spretter mindre. Mindre bane og flere ballberøringer utvikler tekniske ferdigheter raskt.

**Spesielle regler:**
- Ball i spill selv om den treffer taket
- 4-sekunders regel på dødballer
- Ubegrenset antall bytter
- Straff telles opp - etter 5 lagfeil: fri straffe
- Keeper kan ikke motta tilbakepasning

**Teknikk:**
- Hurtig fotarbeid og vendinger
- Presis pasning i trange rom
- Skudd med tå eller innsiden
- God kontroll på første berøring

**Taktikk:**
- 2-2 eller 3-1 formasjon
- Roterende posisjoner
- Press over hele banen
- Utnytte brevinkel`
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom futsal og vanlig fotball?',
        solution: 'Futsal spilles innendørs 5 mot 5 med en tyngre ball som spretter mindre. Det er mindre bane, noe som gir flere ballberøringer og krever raskere tekniske ferdigheter. Det er spesielle regler som 4-sekunders regel på dødballer og opptelling av lagfeil. Keeperen kan ikke motta tilbakepasning to ganger etter hverandre. Futsal utvikler fotballtekniske ferdigheter svært effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-streetbasket',
      type: 'text',
      content: `## Streetbasket (3x3 basketball)

Basketball med 3 spillere per lag på halv bane. Spilles til 21 poeng eller 10 minutter. Rask, intens og teknisk krevende.

**Regler:**
- Etter scoring: Motstanderen tar ballen
- Clearingregel: Ballen må ut av 2-poengerslinjen før angrep
- Ett poeng innenfor buen, to poeng utenfor
- 12-sekunders angrepstid

**Ferdigheter:**
- Alle må kunne drible, skyte og forsvare
- Ingen spesialiserte posisjoner
- Høy basketballintelligens
- Utholdenhet og eksplosivitet

**Taktikk:**
- Pick and roll med tre spillere
- Isolere best 1-mot-1 spiller
- Utnytte sperringer
- Rask overgang fra forsvar til angrep`
    },
    {
      id: 'kroppsoving-vg1-5-3-def3',
      type: 'definition',
      title: 'Clearing (streetbasket)',
      content: 'Regelen om at laget må få ballen utenfor 2-poengerslinjen før de kan angripe på nytt etter å ha tatt en defensiv reboking eller stjålet ballen.'
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex3',
        number: '3',
        type: 'classic',
        task: 'I streetbasket (3x3) finnes en "clearingregel".',
        subTasks: [
          {
            label: 'a',
            task: 'Hva innebærer clearingregelen?',
            solution: 'Clearingregelen sier at etter å ha vunnet ballen defensivt (rebound eller steal), må laget få ballen utenfor 2-poengerslinjen før de kan angripe igjen. Dette sikrer tydelig overgang mellom forsvar og angrep.'
          },
          {
            label: 'b',
            task: 'Hvorfor finnes denne regelen?',
            multipleChoiceOptions: [
              'For å gjøre spillet langsommere',
              'For å tydeliggjøre overgangen mellom forsvar og angrep',
              'For å gi det andre laget en pause',
              'For å hindre for mange skudd'
            ],
            solution: 'For å tydeliggjøre overgangen mellom forsvar og angrep'
          }
        ],
        solution: 'Clearingregelen sikrer struktur og tydelige overganger i streetbasket.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-beachvolley',
      type: 'text',
      content: `## Beachvolleyball

Volleyball på sand med 2 spillere per lag. Krever stor allsidighet siden hver spiller må mestre alle ferdigheter.

**Spesielle forhold:**
- **Sand:** Tyngre å bevege seg, mykere landing
- **Vind og sol:** Påvirker ballen og spillerne
- **Mindre lag:** Større område per spiller
- **Ingen spesialroller:** Begge må kunne alt

**Teknikk:**
- Kraftigere armslag på serve og spike
- Dypere knebøy på bump
- Lengre dykk og rulle i sanden
- Kommunikasjon ekstremt viktig

**Taktikk:**
- Serve på svakeste mottaker
- Variere mellom kraft og plassering på spike
- Defensive posisjoner avhengig av serve
- Utnytte været (vind, sollys)`
    },
    {
      id: 'kroppsoving-vg1-5-3-def4',
      type: 'definition',
      title: 'Block-out (beachvolley)',
      content: 'Når angriperen bevisst sikter på blokkspillerens hender for å få ballen ut av banen. Effektivt mot god blokkering.'
    },
    {
      id: 'kroppsoving-vg1-5-3-example2',
      type: 'example',
      title: 'Eksempel: Beachvolley-samarbeid',
      problem: 'To spillere skal forsvare og angripe sammen i beachvolleyball. Hvordan fordeler de ansvaret?',
      solution: `**Løsning:**

**På mottak/serve:**
- Spiller A: Tar meste av banearealet hvis best mottaker
- Spiller B: Forbereder seg på å sette opp
- Kommuniserer: "Min!" eller "Din!"

**På angrep:**
- Mottaker (A): Bump ballen høyt og presist
- Setter (B): Legger opp for A som nå angriper
- Alternativt: B setter seg selv på andre ball

**På forsvar:**
- En blokker ved nettet
- Den andre dekker resten av banen
- Bytter roller etter hvert rally
- Konstant kommunikasjon om posisjonering

**Tillit og kommunikasjon er alfa og omega når det bare er to spillere!**`
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Beskriv utfordringene ved å spille beachvolleyball sammenlignet med vanlig volleyball.',
        solution: 'Beachvolleyball spilles på sand som gjør det tungt å bevege seg og hoppe. Vind og sol påvirker ballen og spillernes syn. Med bare to spillere må begge mestre alle ferdigheter - serve, mottak, setting, angrep og forsvar. Det er større område per spiller å dekke. På den positive siden er landing mykere, og det sosiale miljøet ofte avslappet. Kommunikasjon blir ekstremt viktig når det bare er to spillere.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-sammenlikning',
      type: 'text',
      content: `## Sammenligning av smålagsspill

| Idrett | Spillere | Bane/sted | Nøkkelferdighet | Fysisk krav |
|--------|----------|-----------|-----------------|-------------|
| Innebandy | 5+keeper | Innendørs hall | Køllekontroll | Utholdenhet, sprints |
| Futsal | 4+keeper | Innendørs | Fotarbeid | Eksplosivitet |
| Streetbasket | 3v3 | Utendørs/inne | Allsidighet | Styrke, hurtighet |
| Beachvolley | 2v2 | Sandstrand | Kommunikasjon | Total utholdenhet |

**Felles trekk:**
- Mer ballkontakt per spiller
- Raskere beslutninger
- Større individuelt ansvar
- Utvikling av allsidighet
- Intensiv trening på kort tid`
    },
    {
      id: 'kroppsoving-vg1-5-3-def5',
      type: 'definition',
      title: 'Spilleintelligens',
      content: 'Evnen til å lese spillet, forutse situasjoner, ta gode beslutninger raskt og tilpasse seg dynamiske spillsituasjoner. Særlig viktig i smålagsspill.'
    },
    {
      id: 'kroppsoving-vg1-5-3-def-inkluderende',
      type: 'definition',
      title: 'Inkluderende spillkultur',
      content: 'En lagkultur hvor alle føler seg velkomne, verdsatt og i stand til å bidra uavhengig av ferdighetsnivå. Dette innebærer å tilpasse regler, spillestil og forventninger slik at alle kan delta, lykkes og ha det gøy. I smålagsspill er dette ekstra viktig siden hver spiller har stor betydning for laget.'
    },
    {
      id: 'kroppsoving-vg1-5-3-inkludering',
      type: 'text',
      content: `## Inkludering i smålagsspill

Smålagsspill gir store muligheter for inkludering, men krever også bevissthet siden få spillere betyr at alle må bidra. Her er strategier for å skape et inkluderende miljø:

**Tilpass regler for inkludering:**
- **Balanserte lag:** Bruk vennskapelig fordeling, ikke alltid "beste mot beste"
- **Berøringsregler:** I futsal kan man kreve minst 3 pasninger før skudd
- **Rotasjonsregler:** Alle må prøve ulike posisjoner i innebandy
- **Poengbonus:** Gi ekstra poeng når visse spillere scorer eller assisterer
- **Bantid-regler:** Alle skal spille minst halvparten av kampen

**Eksempel fra streetbasket:**
Hvis én spiller er mye bedre, kan laget avtale at vedkommende må passe minst én gang før skudd, eller at hen spiller med motsatt hånd. Dette utfordrer den gode spilleren samtidig som det gir andre mer spilletid.

**Eksempel fra beachvolleyball:**
I par med ulike nivåer kan den beste spilleren fokusere på å sette opp perfekte baller for partneren, og la partneren ta flest angrep. Dette utvikler begge spillere og skaper mestringsfølelse.

**Kommunikasjon for inkludering:**
- "Bra forsøk!" i stedet for "Du må treffe bedre"
- "Prøv igjen, du får det til!" når noen feiler
- "Jeg er her hvis du trenger hjelp" - vær tilgjengelig
- Feir alle bidrag, ikke bare poeng`
    },
    {
      id: 'kroppsoving-vg1-5-3-tips',
      type: 'text',
      content: `## Tips for suksess i smålagsspill

**Teknisk:**
- Øv på svak side/hånd/fot
- Vær komfortabel i alle posisjoner
- Tren grunnleggende teknikk mye

**Taktisk:**
- Se hele banen, ikke bare ballen
- Forstå din og andres roller
- Vær fleksibel i spillet

**Fysisk:**
- Bygg utholdenhet for høyt tempo
- Tren eksplosivitet for raske akselerasjoner
- Arbeid med styrke for dueller

**Mentalt:**
- Ta ansvar - du er viktig for laget
- Kommuniser hele tiden
- Vær positiv også når det er vanskelig
- Lær av feil raskt`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-3-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er smålagsspill god trening for å utvikle spilleintelligens?',
        solution: 'I smålagsspill får hver spiller mange flere ballberøringer og må ta beslutninger oftere. Det er mindre å gjemme seg, så alle må bidra både offensivt og defensivt. Med færre spillere ser du konsekvensene av dine valg tydeligere. Du lærer å lese spillet raskere, se rom og muligheter, og forstå timing. Smålagsspill krever også allsidighet - du må mestre mange ferdigheter, ikke bare spesialisere deg. Alt dette utvikler spilleintelligens svært effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Velg en av smålagsidrettene (innebandy, futsal, streetbasket eller beachvolley) og lag en enkel treningsøkt for nybegynnere.',
        solution: 'Eksempel for futsal:\n\n1. Oppvarming (10 min): Løping, dynamisk tøying, lette drillinger\n2. Teknikk (15 min): Innsidepasninger i par, kontroll på første berøring\n3. Småspill (20 min): 2v2 på lite område, fokus på hurtige vendinger\n4. Taktikk (10 min): Gjennomgang av 2-2 formasjon og enkle løp\n5. Match (20 min): 5v5 fullt spill med veiledning underveis\n6. Nedtrapping (5 min): Lett jogg og statisk tøying\n\nTilpass til nivå og fokus!',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-3-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-3-ex7',
        number: '7',
        type: 'classic',
        task: 'Dere skal spille innebandy, men noen i gruppen er helt nybegynnere mens andre er erfarne. Tilpass reglene så alle kan delta og lykkes.',
        subTasks: [
          {
            label: 'a',
            task: 'Foreslå minst tre regelendringer som fremmer inkludering',
            solution: 'Forslag til inkluderende regler: 1) Alle må berøre ballen minst én gang før laget kan score - dette sikrer at nybegynnere får ballkontakt. 2) Erfarne spillere må spille med motsatt hånd på kølla, eller kan bare score etter assist fra nybegynner. 3) Rotasjonsregel hvor alle må prøve ulike posisjoner hvert femte minutt. 4) Doble poeng hvis en nybegynner scorer eller assisterer. 5) Ingen hard fysisk pressing av nybegynnere.'
          },
          {
            label: 'b',
            task: 'Hvordan vil disse regelendringene påvirke spillopplevelsen for både nybegynnere og erfarne?',
            solution: 'For nybegynnere: Gir trygghet, flere ballberøringer, mestringsopplevelser og følelse av å bidra til laget. Reduserer press og frykt for å gjøre feil. For erfarne spillere: Utvikler nye ferdigheter (spille med motsatt hånd), lærer tålmodighet og coaching, fokuserer på lagspill fremfor individuell dominans. Begge grupper lærer å kommunisere bedre og setter pris på hverandres bidrag. Hele gruppen får en mer positiv og inkluderende spillopplevelse.'
          }
        ],
        solution: 'Inkluderende regler sikrer at alle får en positiv opplevelse og bidrar til laget, uavhengig av ferdighetsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_5_4: TextbookChapter = {
  id: 'kroppsoving-vg1-5-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.4',
  title: 'Spillforståelse og taktikk',
  description: 'Lær om angrep, forsvar, overganger og romforståelse i lagidretter',
  estimatedMinutes: 50,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-4-intro',
      type: 'text',
      content: `# Spillforståelse og taktikk

Spillforståelse handler om å lese spillet, forstå situasjoner og ta smarte beslutninger. Taktikk er planlagte strategier for hvordan laget skal opptre i forskjellige situasjoner. God spillforståelse og taktisk bevissthet er det som skiller gode spillere fra meget gode spillere.

I dette kapittelet skal vi utforske grunnleggende taktiske prinsipper som gjelder på tvers av idretter: hvordan angripe effektivt, forsvare smart, gjennomføre overganger og forstå rom på spilleflaten.`
    },
    {
      id: 'kroppsoving-vg1-5-4-def1',
      type: 'definition',
      title: 'Spillforståelse',
      content: 'Evnen til å lese spillet, forutse situasjoner, forstå egne og andres roller, og ta gode beslutninger basert på den dynamiske spillsituasjonen.'
    },
    {
      id: 'kroppsoving-vg1-5-4-angrep',
      type: 'text',
      content: `## Offensive prinsipper

**Bredde:**
- Spre deg over hele spilleflaten
- Tvinge forsvaret til å dekke stort område
- Skape hull og rom å utnytte
- Ikke stå for tett på hverandre

**Dybde:**
- Ha spillere både nært og langt fra mål
- Løp bak forsvarslinjen
- Skape pasningsalternativer på flere nivåer
- Variere angrep kort og langt

**Bevegelse:**
- Konstant bevegelse uten ball
- Skape rom for medspillere
- Dra forsvarere ut av posisjon
- Bytt posisjoner dynamisk

**Tempo:**
- Variere mellom hurtig og rolig spill
- Rask kontring ved mulighet
- Rolig oppbygging når nødvendig
- Overraske med tempoendringer

**Numerisk overtak:**
- Skape situasjoner med flere angripere enn forsvarere
- Utnytte overtalssituasjoner raskt
- 2-mot-1 eller 3-mot-2 situasjoner`
    },
    {
      id: 'kroppsoving-vg1-5-4-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med "bredde" i et angrep?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring',
            multipleChoiceOptions: [
              'At laget har mange spillere',
              'At spillerne sprer seg over hele spilleflaten i bredden',
              'At pasningene går bredt',
              'At angrepet er langsomt og bredt'
            ],
            solution: 'At spillerne sprer seg over hele spilleflaten i bredden'
          },
          {
            label: 'b',
            task: 'Hvorfor er bredde viktig i angrep?',
            solution: 'Bredde tvinger forsvaret til å dekke et større område, noe som skaper rom og hull som kan utnyttes. Det gjør det vanskeligere for forsvaret å være kompakte og gjør det lettere å finne frie spillere eller udekkede områder.'
          }
        ],
        solution: 'Bredde i angrep betyr å spre spillerne over hele bredden av banen for å skape rom.',
        allowsUpload: false,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-4-def2',
      type: 'definition',
      title: 'Romforståelse',
      content: 'Evnen til å se, forstå og utnytte tomme områder på spilleflaten. Inkluderer å vite når og hvor du skal løpe, og når du skal bli stående for å åpne rom for andre.'
    },
    {
      id: 'kroppsoving-vg1-5-4-example1',
      type: 'example',
      title: 'Eksempel: Skape numerisk overtak',
      problem: 'Et lag er i angrep 4 mot 4. Hvordan kan de skape numerisk overtak på en del av banen?',
      solution: `**Løsning:**

**Scenario:** Laget vil skape 2-mot-1 på høyrekanten.

**Utførelse:**
1. Venstre angriper trekker sin forsvarer vekk mot motsatt side
2. Midtbanespiller binder en forsvarer sentralt
3. To angripere rykker frem på høyresiden
4. Ballen spilles raskt til høyresiden
5. Nå er det 2-mot-1 - pasning eller individuelt angrep

**Nøkkel:**
- Timing: Løp kommer i rett øyeblikk
- Koordinering: Spillere trekker forsvarere bevisst
- Hurtighet: Utnytte situasjonen før forsvar kommer tilbake
- Beslutning: Velge rett handling i overtalssituasjonen

Dette prinsippet fungerer i de fleste lagidretter!`
    },
    {
      id: 'kroppsoving-vg1-5-4-forsvar',
      type: 'text',
      content: `## Defensive prinsipper

**Kompakthet:**
- Holde små avstander mellom forsvarsspillere
- Lukke pasningslinjer og rom
- Gjøre det vanskelig for motstanderen å trenge igjennom
- Flytte som en enhet

**Balanse:**
- Dekke alle soner på banen
- Ha spillere i god posisjon bakover
- Ikke la én side bli sårbar
- Sikring bak eventuelle press

**Pressing:**
- Angripe ballen aktivt
- Tvinge motstanderen til feil
- Høyt press vs. lavt press
- Koordinert pressing som lag

**Kommunikasjon:**
- Rope konstant: "Min!", "Bytt!", "Bak deg!"
- Organisere forsvarslinja
- Advare om farlige løp
- Gi positive tilbakemeldinger

**Tvinge retning:**
- Presse motstanderen én vei
- Stenge den beste pasningsveien
- Tvinge til svak fot/side
- Lede mot sidelinjer`
    },
    {
      id: 'kroppsoving-vg1-5-4-def3',
      type: 'definition',
      title: 'Kompakt forsvar',
      content: 'Et forsvar hvor spillerne holder små avstander seg imellom, lukker rom og pasningslinjer, og flytter seg som en koordinert enhet. Vanskelig å spille igjennom.'
    },
    {
      id: 'kroppsoving-vg1-5-4-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva et "kompakt forsvar" innebærer.',
        solution: 'Et kompakt forsvar innebærer at forsvarsspillerne holder små avstander mellom seg, flytter seg som en koordinert enhet, og lukker rom og pasningslinjer. Målet er å gjøre det vanskelig for motstanderen å spille igjennom forsvaret. Spillerne må kommunisere godt og justere posisjonene sine basert på hvor ballen er. Dette prinsippet brukes i fotball, håndball, basketball og mange andre lagidretter.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-4-overganger',
      type: 'text',
      content: `## Overgangsfaser

Overgangene mellom forsvar og angrep (og omvendt) er ofte når mål scores eller store sjanser skapes.

**Fra forsvar til angrep:**

**Rask kontring:**
- Umiddelbart angrep når ballen vinnes
- Utnytte at motstanderen er uorganisert
- Raske pasninger eller individuell fart
- Få mange spillere med fremover

**Rolig oppbygging:**
- Sikre ballen først
- Etablere kontroll og organisering
- Bygge angrep tålmodig
- Vente på riktige muligheter

**Fra angrep til forsvar:**

**Umiddelbar pressing:**
- Prøve å vinne ballen tilbake med en gang
- "5-sekunders regel" - press intenst i 5 sek
- Hindre motstanderen å komme i gang
- Høy risiko, høy gevinst

**Organisert tilbaketrekking:**
- Falle tilbake i formasjoner
- Etablere kompakt forsvar
- Sikre balanse og dekking
- Tryggere, men gir motstanderen tid`
    },
    {
      id: 'kroppsoving-vg1-5-4-def4',
      type: 'definition',
      title: 'Kontring',
      content: 'Raskt angrep umiddelbart etter å ha vunnet ballen, ofte mot et uorganisert forsvar. En av de mest effektive måtene å score på.'
    },
    {
      id: 'kroppsoving-vg1-5-4-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Du har akkurat vunnet ballen i forsvar. Skal du kontre raskt eller bygge rolig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke faktorer bør du vurdere?',
            solution: 'Du bør vurdere: 1) Har vi numerisk overtak fremover? 2) Er motstanderens forsvar uorganisert? 3) Har vi spillere i gode posisjoner? 4) Er vi trygge på ballen? 5) Hva er risikoen ved å miste ballen nå? 6) Hva er lagets taktikk og spillestil?'
          },
          {
            label: 'b',
            task: 'Når er rask kontring best?',
            multipleChoiceOptions: [
              'Når vi har numerisk overtall og motstanderen er uorganisert',
              'Når vi er slitne og trenger pause',
              'Når vi leder stort',
              'Aldri, rolig spill er alltid best'
            ],
            solution: 'Når vi har numerisk overtall og motstanderen er uorganisert'
          }
        ],
        solution: 'Valget mellom rask kontring og rolig oppbygging avhenger av situasjonen og overtallet.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-4-example2',
      type: 'example',
      title: 'Eksempel: Effektiv pressing',
      problem: 'Et lag ønsker å presse høyt for å vinne ballen raskt tilbake. Hvordan organiserer de presset?',
      solution: `**Løsning:**

**Triggerpunkt:**
- Velg når pressen starter (f.eks. når motstanderen passer bakover)

**Første presser:**
- Angriperen løper mot ballholder
- Tvinger retning mot sidekant eller tilbake
- Stenger den beste pasningsveien

**Støttepressing:**
- Medspillere fyller rom rundt første presser
- Lukker alternative pasningsveier
- Skaper "pressing-felle"

**Balansering:**
- Forsvarsspillere dekker dybden
- Sikrer mot lange pasninger over presset
- Holder seg kompakte og klare

**Resultat:**
- Høy sannsynlighet for å vinne ballen
- Kort vei til mål ved ballerobring
- Eller tvinge motstanderen til lange, upresise pasninger`
    },
    {
      id: 'kroppsoving-vg1-5-4-romforstaelse',
      type: 'text',
      content: `## Romforståelse i praksis

**Se tomme rom:**
- Løft blikket fra ballen
- Identifiser hvor det er lite forsvarsspillere
- Vær klar til å utnytte rommet

**Skape rom for andre:**
- Løp som trekker forsvarere med deg
- Gi medspillere plass å operere i
- Ofre egen scoringsmulighet for lagets beste

**Timing av løp:**
- Ikke løp for tidlig - du blir fanget offside eller dekket
- Ikke løp for sent - muligheten er borte
- Perfekt timing er kunst

**Posisjoner mellom linjer:**
- Mellom forsvar og midtbane
- Mellom forsvarsspillere
- Vanskelig å dekke

**Utnytte bredde og dybde:**
- Trekke forsvar bredt, angripe sentralt
- Eller omvendt: komprimere forsvar sentralt, utnytte kant
- Variere angrepsmønster`
    },
    {
      id: 'kroppsoving-vg1-5-4-def5',
      type: 'definition',
      title: 'Mellomromsspiller',
      content: 'En spiller som posisjonerer seg i rommet mellom motstanderens forsvars- og midtbanelinjer. Vanskelig å dekke fordi ansvaret er uklart.'
    },
    {
      id: 'kroppsoving-vg1-5-4-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Hva er en "mellomromsspiller" og hvorfor er denne posisjonen effektiv?',
        solution: 'En mellomromsspiller posisjonerer seg i rommet mellom motstanderens forsvars- og midtbanelinjer. Dette er effektivt fordi det skaper tvil om hvem som skal dekke spilleren - forsvarsspillere vil ikke forlate sin linje, og midtbanespillere må velge mellom å forfølge eller holde posisjon. Spilleren får derfor ofte tid og rom til å motta ballen og skape farlige situasjoner. Denne taktikken brukes mye i fotball og håndball.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-4-tips',
      type: 'text',
      content: `## Tips for bedre spillforståelse

**Observer før du får ballen:**
- Se deg rundt konstant
- Vit hvor medspillere og motstandere er
- Planlegg neste handling

**Kommuniser:**
- Snakk hele tiden
- Hjelp medspillere med informasjon
- Organiser laget verbalt

**Tenk ett skritt fremover:**
- Hva skjer etter denne pasningen?
- Hvor skal jeg være neste?
- Hva vil motstanderen gjøre?

**Lær ved å se:**
- Studer profesjonelle spillere
- Se hvordan de beveger seg uten ball
- Forstå hvorfor de gjør valg

**Øv på beslutninger:**
- Spill smålagsspill med mange valg
- Tren i høyt tempo
- Analyser egne valg etterpå`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-4-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex5',
        number: '5',
        type: 'classic',
        task: 'Beskriv hvordan et lag kan gjennomføre effektiv høy pressing.',
        solution: 'Effektiv høy pressing krever: 1) Enighet om triggerpunkt (f.eks. bakoverpassning), 2) Første presser løper mot ball og tvinger en retning, 3) Medspillere lukker alternative pasningsveier, 4) Bakenforliggende spillere dekker dybde, 5) Hele laget flytter seg oppover kompakt, 6) Kommunikasjon hele tiden. Målet er å "fange" motstanderen i en felle, vinne ballen høyt og få kort vei til scoring. Krever god fysikk, timing og lagforståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-4-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du utvikle bedre romforståelse?',
        solution: 'For å utvikle romforståelse: 1) Løft blikket fra ballen og scan konstant, 2) Øv på å se hele banen, ikke bare din del, 3) Spill smålagsspill hvor du må ta mange beslutninger, 4) Studer video av profesjonelle - se hvordan de beveger seg uten ball, 5) Analyser egne kamper og se på posisjoneringer, 6) Kommuniser med medspillere for å forstå deres intensjoner, 7) Øv på timing av løp i treninger, 8) Spill i forskjellige posisjoner for å forstå ulike perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_5_5: TextbookChapter = {
  id: 'kroppsoving-vg1-5-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.5',
  title: 'Samarbeid og kommunikasjon i lag',
  description: 'Utforsk roller, ledelse og tilbakemelding i lagsammenheng',
  estimatedMinutes: 45,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-5-intro',
      type: 'text',
      content: `# Samarbeid og kommunikasjon i lag

Et godt lag er mer enn summen av individuelle ferdigheter. Samarbeid, kommunikasjon og lagånd er avgjørende for suksess i lagidretter. Hvordan vi kommuniserer, hvilke roller vi tar, og hvordan vi håndterer konflikter påvirker både prestasjoner og trivsel.

I dette kapittelet skal vi se på hvordan du kan bli en bedre lagspiller gjennom effektiv kommunikasjon, forståelse av roller og konstruktiv tilbakemelding.`
    },
    {
      id: 'kroppsoving-vg1-5-5-def1',
      type: 'definition',
      title: 'Lagkultur',
      content: 'De verdier, normer og atferdsmønstre som preger et lag. En god lagkultur fremmer inkludering, respekt, innsats og glede.'
    },
    {
      id: 'kroppsoving-vg1-5-5-roller',
      type: 'text',
      content: `## Roller i laget

**Formelle roller:**
- **Kaptein:** Leder på banen, representerer laget
- **Visekapte in:** Støtter kaptein, overtar ved fravær
- **Spillere:** Ulike posisjoner med spesifikke oppgaver

**Uformelle roller:**
- **Motivatoren:** Heier og løfter lagånden
- **Humoristen:** Skaper god stemning og avslapping
- **Analytikeren:** Leser spillet og gir taktiske innspill
- **Arbeidshesten:** Gjør det som trengs uten å klage
- **Mentorenr:** Hjelper nyere spillere

**Viktighet av rolleforståelse:**
- Alle roller er verdifulle
- Finn din styrke og bidra der
- Respekter andres bidrag
- Være fleksibel og tilpasningsdyktig`
    },
    {
      id: 'kroppsoving-vg1-5-5-def2',
      type: 'definition',
      title: 'Rollefleksibilitet',
      content: 'Evnen til å ta på seg ulike roller etter hva situasjonen og laget trenger. Noen ganger må du lede, andre ganger følge.'
    },
    {
      id: 'kroppsoving-vg1-5-5-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilke uformelle roller kan finnes i et lag?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre uformelle roller',
            solution: 'Motivatoren (heier og løfter lagånden), Humoristen (skaper god stemning), Analytikeren (leser spillet taktisk), Arbeidshesten (gjør det som trengs), Mentoren (hjelper nyere spillere). Andre eksempler kan også aksepteres.'
          },
          {
            label: 'b',
            task: 'Hvorfor er uformelle roller viktige for laget?',
            multipleChoiceOptions: [
              'De er ikke viktige, bare formelle roller teller',
              'De bidrar til lagkultur, trivsel og ulike former for støtte',
              'De erstatter behovet for en trener',
              'De skaper konkurranse om oppmerksomhet'
            ],
            solution: 'De bidrar til lagkultur, trivsel og ulike former for støtte'
          }
        ],
        solution: 'Uformelle roller som motivator, humorist og mentor bidrar til et sterkt lag.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-5-kommunikasjon',
      type: 'text',
      content: `## Effektiv kommunikasjon

**Verbal kommunikasjon:**
- **På banen:** "Min!", "Bak deg!", "Tid!", "Spill!"
- Være tydelig og konsis
- Positiv og konstruktiv tone
- Rope tidlig og høyt nok

**Nonverbal kommunikasjon:**
- Øyekontakt viser tilgjengelighet
- Kroppsspråk signaliserer intensjon
- Løp og bevegelse kommuniserer planer
- Håndsignaler for spesifikke taktikker

**Kommunikasjon utenfor banen:**
- Garderobeprater: Bygge kultur
- Treningsmiljø: Oppfordre og støtte
- Sosiale arenaer: Skape samhold
- Digital kommunikasjon: Planlegging og oppdateringer

**Barrierer for god kommunikasjon:**
- Støy og distraksjoner
- Frykt for å gjøre feil
- Kulturelle forskjeller
- Manglende selvtillit`
    },
    {
      id: 'kroppsoving-vg1-5-5-example1',
      type: 'example',
      title: 'Eksempel: Konstruktiv kommunikasjon',
      problem: 'En medspiller gjør en feil som fører til scoring for motstanderen. Hvordan skal du reagere?',
      solution: `**Dårlig respons:**
"Hva gjør du?! Du ødela alt!"
- Negativ
- Demotiverende
- Ødelegger selvtillit

**God respons:**
"Det er greit, glem det! Vi tar den neste!"
- Positiv
- Fremoverlent
- Bygger trygghet

**Etter kampen/trening (hvis nødvendig):**
"Hei, jeg så situasjonen der. Hva tenkte du? Kanskje vi kan prøve å [alternativ løsning] neste gang?"
- Respektfull
- Utforskende
- Konstruktiv

**Nøkkel:** Støtt under press, analyser i rolige situasjoner.`
    },
    {
      id: 'kroppsoving-vg1-5-5-def3',
      type: 'definition',
      title: 'Psykologisk trygghet',
      content: 'En lagkultur hvor spillere føler de kan ta sjanser, gjøre feil og være seg selv uten frykt for kritikk eller utstøtelse.'
    },
    {
      id: 'kroppsoving-vg1-5-5-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex2',
        number: '2',
        type: 'classic',
        task: 'En medspiller gjør en feil som fører til tap. Hvordan bør du reagere umiddelbart etter situasjonen?',
        solution: 'Du bør reagere støttende og positivt: "Det er greit, glem det! Vi tar den neste!" Dette bygger psykologisk trygghet og holder motivasjonen oppe. Negativ kritikk i øyeblikket ("Hva gjør du?!") demotiverer og svekker selvtilliten. Hvis tekniske justeringer er nødvendige, ta det i en rolig samtale etter kampen, ikke i presset under spillets gang. Støtt under press, analyser i ro.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-5-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med "psykologisk trygghet" i et lag?',
        solution: 'Psykologisk trygghet betyr at spillere føler de kan ta sjanser, gjøre feil, være seg selv og uttrykke meninger uten frykt for kritikk, latterliggjøring eller utstøtelse. I et lag med høy psykologisk trygghet tør spillere å prøve nye ting, innrømme feil, be om hjelp og komme med ideer. Dette skaper et læringsmiljø hvor alle utvikler seg raskere og laget presterer bedre fordi alle bidrar fullt ut.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-5-ledelse',
      type: 'text',
      content: `## Ledelse i lagidretter

**Kapteinens oppgaver:**
- Representere laget overfor dommere og motstandere
- Motivere og organisere medspillere
- Ta beslutninger i pressituasjoner
- Være forbilde på og utenfor banen
- Bygge bro mellom spillere og trener

**Ulike lederstiler:**
- **Demokratisk:** Involverer alle i beslutninger
- **Autoritær:** Tar raske beslutninger alene
- **Coachende:** Utvikler andre spillere
- **Tjene nde:** Setter lagets behov først

**Alle kan lede:**
- Ledelse er ikke bare for kapteiner
- Led ved eksempel (innsats, holdning)
- Led gjennom oppmuntring
- Led ved å ta ansvar

**Egenskaper ved gode lagledere:**
- Kommuniserer tydelig
- Lytter til andre
- Holder hodet kaldt under press
- Viser respekt for alle
- Tar ansvar for egne handlinger`
    },
    {
      id: 'kroppsoving-vg1-5-5-konflikt',
      type: 'text',
      content: `## Konflikthåndtering

**Typer konflikter:**
- **Oppgavekonflikter:** Uenighet om taktikk/strategi
- **Relasjonskonflikter:** Personlige motsetninger
- **Ressurskonflikter:** Spilletid, oppmerksomhet

**Konstruktiv konflikthåndtering:**
1. **Adresser tidlig:** Ikke la det utvikle seg
2. **Privat samtale:** Ikke krenk foran andre
3. **Lytt aktivt:** Forstå den andres perspektiv
4. **Fokuser på løsning:** Ikke hvem som har "rett"
5. **Involver trener hvis nødvendig:** Få hjelp til mediering

**Forebygge konflikter:**
- Tydelige forventninger og roller
- Åpen kommunikasjonskultur
- Feire suksesser sammen
- Akseptere ulikheter`
    },
    {
      id: 'kroppsoving-vg1-5-5-def4',
      type: 'definition',
      title: 'Konstruktiv konflikt',
      content: 'Uenighet som håndteres respektfullt og fører til bedre løsninger, læring eller sterkere relasjoner. Ikke all konflikt er negativ.'
    },
    {
      id: 'kroppsoving-vg1-5-5-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex5',
        number: '4',
        type: 'classic',
        task: 'Et lag har en konflikt mellom to spillere om spilletid. Hvordan kan dette håndteres konstruktivt?',
        solution: 'Konstruktiv håndtering: 1) Adresser konflikten tidlig før den eskalerer, 2) Ha en privat samtale (ikke foran laget), 3) La begge forklare sitt perspektiv uten avbrytelser, 4) Fokuser på løsninger, ikke på hvem som har rett, 5) Forklar trenervurderinger og kriterier for spilletid, 6) Sett klare mål for hva spillerne kan jobbe med for å få mer spilletid, 7) Følg opp senere. Involver trener eller kaptein som mediator hvis nødvendig. Målet er ikke at alle skal være enige, men at alle føler seg hørt og forstår beslutningene.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-5-tilbakemelding',
      type: 'text',
      content: `## Gi og motta tilbakemeldinger

**Effektive tilbakemeldinger (modellen):**

**Situasjon:** Beskriv konkret situasjon
"I den situasjonen da du fikk ballen på kanten..."

**Adferd:** Beskriv hva personen gjorde
"...valgte du å drible i stedet for å passe..."

**Effekt:** Forklar konsekvensen
"...og vi mistet muligheten til å score."

**Alternativ:** Foreslå løsning
"Neste gang, se etter pasning først?"

**Når du mottar tilbakemelding:**
- Lytt uten å forsvare deg umiddelbart
- Still spørsmål for å forstå bedre
- Takk for tilbakemeldingen
- Reflekter over budskapet
- Bestem hva du vil gjøre annerledes

**Balanse mellom ros og konstruktiv kritikk:**
- Mer ros enn kritikk (ideelt 5:1)
- Spesifikk ros: "God pasning!" ikke bare "Bra!"
- Konstruktiv kritikk fokuserer på adferd, ikke person`
    },
    {
      id: 'kroppsoving-vg1-5-5-def5',
      type: 'definition',
      title: 'Feedforward',
      content: 'Tilbakemelding som fokuserer på fremtidige handlinger og forbedringer, ikke bare på hva som gikk galt. Mer utviklende enn tradisjonell feedback.'
    },
    {
      id: 'kroppsoving-vg1-5-5-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex4',
        number: '5',
        type: 'classic',
        task: 'Beskriv hvordan du kan gi en god, konstruktiv tilbakemelding til en medspiller.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken modell kan du bruke?',
            solution: 'Bruk Situasjon-Adferd-Effekt-Alternativ modellen: 1) Beskriv konkret situasjon, 2) Beskriv hva personen gjorde, 3) Forklar konsekvensen, 4) Foreslå alternativ løsning. Eksempel: "Da du fikk ballen på kanten (situasjon), valgte du å drible (adferd), og vi mistet scoringsmuligheten (effekt). Neste gang, se etter pasning først? (alternativ)"'
          },
          {
            label: 'b',
            task: 'Hva er ideell balanse mellom ros og kritikk?',
            multipleChoiceOptions: [
              '1:1 (like mye ros som kritikk)',
              '5:1 (fem ganger mer ros enn kritikk)',
              '1:5 (mer kritikk enn ros)',
              'Kun ros, aldri kritikk'
            ],
            solution: '5:1 (fem ganger mer ros enn kritikk)'
          }
        ],
        solution: 'God tilbakemelding følger en struktur og balanseres med mye mer ros enn kritikk.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-5-example2',
      type: 'example',
      title: 'Eksempel: Bygge lagånd',
      problem: 'Et lag sliter med samholdet. Noen spillere føler seg utenfor. Hva kan gjøres?',
      solution: `**Konkrete tiltak:**

**På trening:**
- Par opp forskjellige spillere i øvelser
- Lag små grupper som roterer
- Feire andres suksess høyt
- Inkluderende oppvarmingsleker

**Utenfor trening:**
- Sosiale sammenkomster (bowling, kino, middag)
- Lagaktiviteter uten idrett
- Lag-chat hvor alle føler seg velkomne
- Bursdagshilsener og støtte i hverdagen

**Kultur-tiltak:**
- Ingen "klikker" - alle hilser på alle
- Rullere hvem som sitter sammen på bussen
- Lag-ritualer (f.eks. samling før kamp)
- Anerkjenne alle bidrag, ikke bare scoringer

**Resultat:** Sterkere samhold gir bedre prestasjoner og mer glede.`
    },
    {
      id: 'kroppsoving-vg1-5-5-tips',
      type: 'text',
      content: `## Tips for bedre lagsamarbeid

**Vær til stede:**
- Kom i tide til trening og kamp
- Delta aktivt, ikke stå og se
- Fokuser på laget, ikke telefonen

**Vis respekt:**
- Lytt når andre snakker
- Respekter ulike ferdighetsnivåer
- Aksepter trenerbeslutninger

**Bidra positivt:**
- Oppmuntre medspillere konstant
- Hjelp nye spillere å føle seg velkomne
- Feir andres suksesser genuine

**Ta ansvar:**
- Innrøm egne feil
- Gjør din del av lagsarbeidet
- Følg opp avtaler

**Kommuniser åpent:**
- Si fra hvis noe er galt
- Del ideer og forslag
- Be om hjelp når du trenger det`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-5-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Foreslå tre konkrete tiltak for å styrke lagånden i et lag som sliter med samholdet.',
        solution: 'Tre konkrete tiltak: 1) Sosiale aktiviteter utenfor trening (bowling, kino, middag) hvor alle inviteres og oppfordres til å delta, 2) Par opp forskjellige spillere i treningsøvelser hver gang for å bygge relasjoner på tvers av vennegruppene, 3) Lag felles ritualer som samling før kamp hvor alle sier noe positivt eller en felles heiarop. Andre gode tiltak: Feire bursdager, lag-chat med inkluderende tone, rotere bussplasser, anerkjenne alle bidrag (ikke bare scoringer), ha lagtøy-dager på skolen.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_5_6: TextbookChapter = {
  id: 'kroppsoving-vg1-5-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.6',
  title: 'Lek og alternative spillformer',
  description: 'Kanonball, stikkball, ultimate frisbee og andre lekbaserte aktiviteter',
  estimatedMinutes: 45,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-6-intro',
      type: 'text',
      content: `# Lek og alternative spillformer

Lek er grunnlaget for all idrett. Alternative spillformer kombinerer elementer fra tradisjonelle idretter med kreativitet, fleksibilitet og fokus på glede. Disse aktivitetene utvikler ferdigheter på en leken og inkluderende måte, og er ofte mindre preget av faste regler og konkurransepress.

I dette kapittelet skal vi utforske lekbaserte aktiviteter som kanonball, stikkball, ultimate frisbee og andre spill som fremmer samarbeid, kreativitet og bevegelsesglede.`
    },
    {
      id: 'kroppsoving-vg1-5-6-def1',
      type: 'definition',
      title: 'Lekbasert læring',
      content: 'En tilnærming hvor læring skjer gjennom lek, eksperimentering og utforskning, med mindre vekt på prestasjon og konkurranse.'
    },
    {
      id: 'kroppsoving-vg1-5-6-kanonball',
      type: 'text',
      content: `## Kanonball (Dodgeball)

Et klassisk ballspill hvor to lag forsøker å treffe motstandere med en myk ball.

**Grunnregler:**
- To lag på hver sin banehalvdel
- Treff under skulderen teller
- Truffet spiller er ute (eller til lagsiden/bakside)
- Fanger du ballen: kaster er ute, eller spiller kommer inn
- Siste lag med spillere vinner

**Variasjoner:**
- **Medisinball:** Spiller som blir truffet går til motstanderens baksone
- **Flere baller:** Økt tempo og kaos
- **Beskytter:** Én spiller kan ikke treffes ut (kongen/dronningen)
- **Zombie:** Truffede blir til "zombier" som hjelper motstanderen

**Ferdigheter som utvikles:**
- Kastepresisjon og kraft
- Fange og reagere raskt
- Taktisk posisjonering
- Samarbeid om hvem som skal angripes

**Sikkerhet:**
- Bruk myke baller
- Ikke kaste i hodet med vilje
- Respekter når noen er ute`
    },
    {
      id: 'kroppsoving-vg1-5-6-def2',
      type: 'definition',
      title: 'Inkluderende spillregler',
      content: 'Regler som sikrer at alle kan delta uavhengig av ferdighetsnivå, og som fremmer samarbeid fremfor individuell dominans.'
    },
    {
      id: 'kroppsoving-vg1-5-6-stikkball',
      type: 'text',
      content: `## Stikkball (Brennball)

En norsk klassiker som kombinerer løping, kasting og feltarbeid.

**Oppsett:**
- Ett lag inne (slår), ett lag ute (felter)
- Innelaget har en slår som kaster ballen høyt og løper
- Utelaget skal hente ballen og kaste den tilbake til base

**Spillegang:**
1. Slår kaster ballen opp og løper mot vendepunkt
2. Utelaget henter ballen og kaster til base
3. Hvis slår når frem og tilbake før ballen: poeng
4. Hvis ballen når base først: ute
5. Bytt lag etter alle er ute eller bestemte runder

**Variasjoner:**
- **Kingball:** Slåeren må treffe en kjegle på vendepunkt
- **Rundball:** Flere baser, mer som baseball
- **Dobbel stikkball:** To vendepunkt

**Læring:**
- Timing av løp og kast
- Feltteknikk og samarbeid
- Strategi: Når løpe langt vs. kort?
- Inkludering: Alle får prøve ulike roller`
    },
    {
      id: 'kroppsoving-vg1-5-6-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex4',
        number: '1',
        type: 'classic',
        task: 'Beskriv kort hvordan stikkball (brennball) spilles.',
        solution: 'Stikkball spilles med to lag: ett inne (slår) og ett ute (felter). Slåeren i innelaget kaster ballen opp, løper mot et vendepunkt og tilbake. Samtidig henter utelaget ballen og kaster den tilbake til base. Hvis slåeren når frem og tilbake før ballen når base, får laget poeng. Hvis ballen når base først, er slåeren ute. Etter alle i innelaget har slått (eller bestemte runder), byttes lagene. Laget med flest poeng vinner.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-5-6-example1',
      type: 'example',
      title: 'Eksempel: Tilpasse regler for inkludering',
      problem: 'I en kanonball-kamp dominerer de sterkeste kastene fullstendig. Hvordan kan reglene justeres for bedre inkludering?',
      solution: `**Tiltak for inkludering:**

1. **Flere liv:** Hver spiller har 2-3 liv før de er ute
2. **Poengballer:** Enkelte baller gir poeng ved treff, ikke ut
3. **Handikap for sterke:** Må kaste med ikke-dominant hånd
4. **Sikre soner:** Områder hvor spillere ikke kan treffes ut
5. **Lag-fangst:** Må fange tre baller for å få én spiller inn
6. **Tid-limit:** Etter 10 min teller antall spillere igjen

**Resultat:**
- Alle får delta lenger
- Fokus på taktikk, ikke bare kraft
- Mer moro for flere
- Bedre samarbeid i laget`
    },
    {
      id: 'kroppsoving-vg1-5-6-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex2',
        number: '2',
        type: 'classic',
        task: 'I en kanonball-kamp dominerer noen få sterke spillere. Foreslå to regelendringer som kan gjøre spillet mer inkluderende.',
        solution: 'To regelendringer for inkludering: 1) Gi hver spiller 2-3 liv i stedet for å være ute etter første treff - dette gjør at alle får delta lenger. 2) Innfør regel om at sterke spillere må kaste med ikke-dominant hånd, eller at man må passe ballen minst én gang før man kan kaste på motstandere - dette reduserer individuell dominans og fremmer lagspill. Andre gode forslag: sikre soner, tid-limit, poengballer i stedet for ut-system.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-6-ultimate',
      type: 'text',
      content: `## Ultimate Frisbee

En lagsport med frisbee som kombinerer elementer fra fotball, håndball og basketball.

**Grunnregler:**
- 7 mot 7 på et fotballbaneaktig felt
- Mål i hver ende (endesoner)
- Score ved å fange frisbeen i motstanderens endesone
- Kan ikke løpe med frisbeen, må passe
- Hvis frisbeen faller, går utenfor eller fanges av motstander: bytter ballbesittelse
- Ingen fysisk kontakt
- **Spirit of the Game:** Selvdømming, respekt, ærlighet

**Teknikker:**
- **Kast:** Backhand, forehand, hammer
- **Fangst:** Med to hender, dykkfangster
- **Pivoting:** Står med én fot fast mens andre beveger seg
- **Posisjonering:** Skape pasningsalternativer

**Hvorfor ultimate er spesiellt:**
- Ingen dommer - spillerne dømmer selv
- Fokus på fair play og respekt
- Alle kan lære raskt
- Morsomt og sosialt`
    },
    {
      id: 'kroppsoving-vg1-5-6-def3',
      type: 'definition',
      title: 'Spirit of the Game',
      content: 'Et prinsipp i Ultimate Frisbee hvor spillerne er ansvarlige for egne og andres handlinger, med vekt på respekt, ærlighet og glede ved spillet.'
    },
    {
      id: 'kroppsoving-vg1-5-6-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex1',
        number: '3',
        type: 'classic',
        task: 'Hva er "Spirit of the Game" i Ultimate Frisbee?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse',
            multipleChoiceOptions: [
              'En spesiell type kast',
              'Et prinsipp om selvdømming, respekt og ærlighet',
              'Navnet på den offisielle frisbeen',
              'En taktikk for å score'
            ],
            solution: 'Et prinsipp om selvdømming, respekt og ærlighet'
          },
          {
            label: 'b',
            task: 'Hvorfor er dette prinsippet spesielt?',
            solution: 'Spirit of the Game er spesielt fordi det gjør Ultimate Frisbee til en selvdømmende idrett uten dommere. Spillerne er selv ansvarlige for å følge reglene og kalle feil. Dette bygger respekt, ærlighet og tillit mellom spillerne, og skaper en positiv lagkultur.'
          }
        ],
        solution: 'Spirit of the Game er et unikt prinsipp i Ultimate Frisbee om selvdømming og respekt.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-6-andre-spill',
      type: 'text',
      content: `## Andre lekbaserte spillformer

**Capture the Flag (Fange fanen):**
- To lag med hver sin "fane" på sin banehalvdel
- Må stjele motstanderens fane og ta den til egen side
- Bli tatt på motstanderens side: fengsel (kan bli fridd)
- Strategi, teamwork, utholdenhet

**Kubb:**
- To lag kaster pinner for å velte motstanderens kubber
- Konge i midten må veltes sist
- Presisjon, strategi, ro under press

**Spikeball/Roundnet:**
- 2v2 rundt et lite trampoline-nett
- Slå ballen ned i nettet, motstanderen må returnere (maks 3 berøringer)
- Rask, teknisk, moro

**Kin-ball:**
- Enorm ball (1,2m diameter), 3-4 lag samtidig
- Ett lag slår ballen, roper navn på et annet lag som må fange
- Samarbeid, kommunikasjon, inkludering

**Gloose:**
- Kombinasjon av basketball og fotball
- To mål med kurv på toppen
- Score i kurv (2 poeng) eller mål (1 poeng)
- Bruke føtter eller hender`
    },
    {
      id: 'kroppsoving-vg1-5-6-def4',
      type: 'definition',
      title: 'Hybrid-idretter',
      content: 'Aktiviteter som kombinerer elementer fra flere tradisjonelle idretter for å skape noe nytt og ofte mer inkluderende.'
    },
    {
      id: 'kroppsoving-vg1-5-6-verdier',
      type: 'text',
      content: `## Verdien av lek og alternative spillformer

**Pedagogiske fordeler:**
- Lavere terskel for deltakelse
- Mindre fokus på prestasjon og konkurranse
- Rom for kreativitet og eksperimentering
- Læring gjennom prøving og feiling

**Sosiale fordeler:**
- Bygger samhold og vennskap
- Utvikler kommunikasjonsevner
- Lærer konflikthåndtering (spesielt med selvdømming)
- Inkluderer ulike ferdighetsnivåer

**Fysiske fordeler:**
- Allsidig bevegelse
- Utvikler koordinasjon og balanse
- Kardiovaskulær trening
- Moro = mer aktivitet

**Overføringsverdi:**
- Ferdigheter fra lek overføres til andre idretter
- Leker utvikler grunnleggende bevegelsesmønster
- Taktisk forståelse fra varierte situasjoner
- Kreativitet i problemløsning`
    },
    {
      id: 'kroppsoving-vg1-5-6-def5',
      type: 'definition',
      title: 'Overføringsverdi',
      content: 'Hvordan ferdigheter, erfaringer og læring fra én aktivitet kan anvendes og har nytte i andre kontekster.'
    },
    {
      id: 'kroppsoving-vg1-5-6-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex3',
        number: '4',
        type: 'classic',
        task: 'Hva er overføringsverdien av å spille varierte lekbaserte spillformer?',
        solution: 'Overføringsverdien er at ferdigheter, taktisk forståelse og erfaringer fra lekbaserte spill kan brukes i andre idretter og situasjoner. For eksempel: Kastepresisjon fra kanonball hjelper i håndball, løpetiming fra stikkball overføres til fotball, samarbeid fra ultimate frisbee gjelder i alle lagidretter. Leker utvikler også grunnleggende bevegelsesmønstre, kreativ problemløsning og sosiale ferdigheter som er verdifulle i alle fysiske aktiviteter og i livet generelt.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-6-tips',
      type: 'text',
      content: `## Tips for å organisere lekbaserte aktiviteter

**Planlegging:**
- Tilpass regler til gruppens nivå og størrelse
- Sørg for nødvendig utstyr
- Forklar regler tydelig før start
- Vær fleksibel og juster underveis

**Inkludering:**
- Lag balanserte lag (ikke alltid de samme kapteiner velger)
- Gi alle mestringsopplevelser
- Feir innsats, ikke bare resultat
- Vær oppmerksom på de som står utenfor

**Variasjon:**
- Bytt spill regelmessig for nysgjerrighet
- Kombiner kjente og nye leker
- La gruppen foreslå og lage egne varianter
- Tilpass vanskelighetsgrad

**Sikkerhet:**
- Tydelig definerte baner og grenser
- Passende utstyr for aktiviteten
- Vær bevisst på kontaktnivå
- Stopp aktiviteten ved konflikt eller skade`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-6-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvilke pedagogiske fordeler har lekbaserte spillformer sammenlignet med tradisjonelle konkurranseidretter?',
        solution: 'Lekbaserte spillformer har flere pedagogiske fordeler: 1) Lavere terskel for deltakelse - alle kan være med uavhengig av tidligere erfaring, 2) Mindre fokus på prestasjon og vinnng - mer fokus på glede og læring, 3) Rom for kreativitet og eksperimentering - spillere kan prøve nye ting uten stor risiko, 4) Læring gjennom prøving og feiling i trygge rammer, 5) Fleksible regler som kan tilpasses gruppen. Dette skaper et mer inkluderende læringsmiljø hvor flere får mestringsopplevelser.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-6-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-6-ex6',
        number: '6',
        type: 'classic',
        task: 'Kreativ storoppgave: Lag deres egen spillvariant! Kombiner elementer fra to idretter til et nytt spill. Dette skal være et spill som alle kan delta i og lykkes med.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke to idretter kombinerer dere, og hva heter det nye spillet?',
            solution: 'Eksempel: Vi kombinerer volleyball og fotball til "Fotvolley". Andre eksempler kan være: Håndball + innebandy = "Håndbandy", Basketball + ultimate frisbee = "Disc-basket", Fotball + rugby = "Rugball". Vær kreative!'
          },
          {
            label: 'b',
            task: 'Beskriv spillets grunnregler: Hvor mange spillere? Hva er målet? Hvordan spilles det?',
            solution: 'Eksempel for Fotvolley: Spilles 4v4 på volleyballbane med nett. Spillere bruker føtter, hode og bryst (ikke hender) til å spille ballen over nettet. Ballen kan sprette én gang mellom berøringer. Maksimalt 3 berøringer per lag før ballen må over. Poeng som i volleyball - første til 21. Dette kombinerer fotballteknikk med volleyballens struktur.'
          },
          {
            label: 'c',
            task: 'Hvilket utstyr trengs?',
            solution: 'Eksempel for Fotvolley: En fotball (eller litt mykere ball), volleyballnett eller tau/rep spent mellom to stolper, volleyballbane eller merket område (ca 6x12 meter), to lag med forskjellige farger. Alternativt kan man bruke gymsal med tape på gulvet.'
          },
          {
            label: 'd',
            task: 'Hvordan sikrer dere at alle kan delta og lykkes? Beskriv inkluderende tiltak.',
            solution: 'Inkluderende tiltak for Fotvolley: 1) Ballen får sprette to ganger for nybegynnere, 2) Alle må berøre ballen minst én gang før det kan scores, 3) Doble poeng hvis en bestemt spiller scorer (rullerende), 4) Lavere nett for mindre grupper, 5) Kan bruke hender ved første berøring for de som sliter. Disse reglene sikrer at alle får ballkontakt og mestringsopplevelser.'
          },
          {
            label: 'e',
            task: 'Hvilke ferdigheter utvikler spillerne gjennom dette spillet?',
            solution: 'Ferdigheter utviklet i Fotvolley: Fotballferdigheter (kontroll, presisjon, hodestøt), koordinasjon (timing, balanse), samarbeid (kommunikasjon, rolleforståelse), taktisk tenkning (plassering, timing av angrep), romforståelse, kondisjon og reaksjonsevne. Dessuten lærer spillerne kreativ problemløsning ved å kombinere teknikker fra to idretter.'
          }
        ],
        solution: 'Å skape egne spillvarianter utvikler kreativitet, regelforståelse og evnen til å tilpasse aktiviteter for inkludering. Dette er en viktig ferdighet både i kroppsøving og i lek generelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    }
  ],
  exercises: []
};


export const CHAPTER_KROPPSOVING_VG1_5_7: TextbookChapter = {
  id: 'kroppsoving-vg1-5-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5.7',
  title: 'Fair play og regler i lagidretter',
  description: 'Respekt, dømmekraft og sportsånd i konkurransesituasjoner',
  estimatedMinutes: 40,
  competenceGoals: ['bruke egne ferdigheter og kunnskaper til å samarbeide og bidra til å gjøre andre gode i aktivitet og samspill'],
  content: [
    {
      id: 'kroppsoving-vg1-5-7-intro',
      type: 'text',
      content: `# Fair play og regler i lagidretter

Fair play handler om å spille rettferdig, vise respekt for motstandere, lagkamerater og dommere, og opptre med integritet. Regler sikrer at konkurransen er rettferdig og trygg for alle. Sportsånd går utover reglene - det handler om holdninger og verdier.

I dette kapittelet skal vi utforske betydningen av fair play, hvordan regler fungerer, og hvordan vi kan bidra til en positiv idrettskultur.`
    },
    {
      id: 'kroppsoving-vg1-5-7-def1',
      type: 'definition',
      title: 'Fair play',
      content: 'Prinsippet om rettferdig spill, respekt for regler og motstandere, og god sportsånd både i seier og nederlag.'
    },
    {
      id: 'kroppsoving-vg1-5-7-prinsipper',
      type: 'text',
      content: `## Grunnprinsipper for fair play

**Respekt:**
- For motstandere: De er ikke fiender, men nødvendige for spillet
- For lagkamerater: Støtt og løft hverandre
- For dommere: De gjør sitt beste, aksepter beslutninger
- For regler: De sikrer rettferdighet for alle

**Ærlighet:**
- Innrøm egne feil (selv om dommer ikke ser det)
- Jukse eller simulere er uakseptabelt
- Vær ærlig om egne ferdigheter
- Ta ansvar for handlinger

**Integritet:**
- Vinne på riktig måte er viktigere enn å vinne for enhver pris
- Holde seg til verdier også under press
- Stå opp mot urettferdig oppførsel
- Være forbilde for andre

**Inkludering:**
- Alle har rett til å delta
- Ingen mobbing eller ekskludering
- Feire mangfold i laget
- Hjelpe de som trenger det`
    },
    {
      id: 'kroppsoving-vg1-5-7-def2',
      type: 'definition',
      title: 'Sportsånd',
      content: 'Holdninger og atferd som reflekterer respekt, ærlighet og generøsitet i idrett - både i seier og nederlag.'
    },
    {
      id: 'kroppsoving-vg1-5-7-example1',
      type: 'example',
      title: 'Eksempel: Hva er god sportsånd?',
      problem: 'En spiller faller i en fotballkamp. Motstanderen får ballen. Hva viser god sportsånd?',
      solution: `**Situasjon:** Spiller A faller og slår seg. Spiller B fra motstanderlaget er nærmest ballen.

**God sportsånd - Spiller B:**
- Sparker ballen ut slik at A kan få behandling
- Sjekker om A har det bra
- Etter innkast: Spiller A's lag gir ballen tilbake til lag B

**God sportsånd - Lag A:**
- Takker for at ballen ble sparket ut
- Gir ballen tilbake etter innkast (uskriven regel)
- Anerkjenner anstendig oppførsel

**Hvorfor er dette viktig?**
- Spillernes sikkerhet kommer først
- Bygger gjensidig respekt
- Holder idretten verdig
- Viser at mennesker er viktigere enn resultater`
    },
    {
      id: 'kroppsoving-vg1-5-7-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex2',
        number: '1',
        type: 'classic',
        task: 'En motstander faller og slår seg. Du får ballen. Hva viser god sportsånd?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig handling',
            multipleChoiceOptions: [
              'Utnytte situasjonen og angripe raskt',
              'Spille ballen ut slik at spilleren kan få behandling',
              'Fortsette som normalt, det er ikke ditt ansvar',
              'Vente og se hva dommeren gjør'
            ],
            solution: 'Spille ballen ut slik at spilleren kan få behandling'
          },
          {
            label: 'b',
            task: 'Hva bør motstanderlaget gjøre etter behandling?',
            solution: 'Etter innkast bør motstanderlaget gi ballen tilbake til laget som sparket den ut. Dette er en uskriven regel som viser gjensidig respekt og sportsånd.'
          }
        ],
        solution: 'God sportsånd betyr å prioritere spillernes sikkerhet over konkurransefordeler.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-7-regler',
      type: 'text',
      content: `## Betydningen av regler

**Hvorfor har vi regler?**
- **Sikkerhet:** Beskytter spillere fra skade
- **Rettferdighet:** Samme betingelser for alle
- **Struktur:** Gjør spillet forståelig og organiserert
- **Konkurranseerfletting:** Muliggjør sammenligning og utvikling

**Typer regler:**
- **Spillregler:** Hvordan spillet spilles (scoring, posisjonering)
- **Sikkerhetsregler:** Beskytte spillere (ingen farlig spill)
- **Oppførselsregler:** Hvordan spillere skal opptre
- **Administrative regler:** Organisering av kamper og turneringer

**Dommernes rolle:**
- Håndheve reglene konsekvent
- Beskytte spillernes sikkerhet
- Holde flyten i spillet
- Være upartiske

**Spillernes ansvar:**
- Kjenne reglene i idretten du driver med
- Akseptere dommeravgjørelser uten protest
- Spille etter intensjonen i reglene, ikke bare bokstaven
- Hjelpe dommeren ved å være ærlig`
    },
    {
      id: 'kroppsoving-vg1-5-7-def3',
      type: 'definition',
      title: 'Regelbrudd vs. usportslig oppførsel',
      content: 'Regelbrudd er handlinger mot spillets regler (offside, hands). Usportslig oppførsel er atferd som bryter med fair play-prinsipper (simulering, respektløshet), ofte strengere straffet.'
    },
    {
      id: 'kroppsoving-vg1-5-7-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex3',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er regler viktige i lagidretter?',
        solution: 'Regler er viktige fordi de: 1) Sikrer spillernes sikkerhet ved å forby farlig spill, 2) Skaper rettferdighet ved å gi alle samme betingelser, 3) Gir struktur som gjør spillet forståelig og organiserbart, 4) Muliggjør rettferdig konkurranse og sammenligning. Uten regler ville lagidretter være kaotiske, farlige og urettferdige. Regler gjør det mulig for alle å delta på like vilkår.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-7-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex1',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom et regelbrudd og usportslig oppførsel?',
        solution: 'Et regelbrudd er en handling som bryter spillets regler (f.eks. offside, hands, fotfeil), og straffes med frispark, innkast eller lignende. Usportslig oppførsel er atferd som bryter med fair play-prinsipper og god sportsånd (f.eks. filming, respektløse kommentarer, bevisst farlig spill), og straffes ofte strengere med kort eller utvisning. Regelbrudd kan være utilsiktede feil, mens usportslig oppførsel handler om holdninger og intensjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-7-utfordringer',
      type: 'text',
      content: `## Utfordringer for fair play

**Press om å vinne:**
- Fra trenere, foreldre, publikum
- Økonomiske insentiver i toppidrett
- Prestisje og status
- **Løsning:** Husk hvorfor du spiller - glede og utvikling

**Frustrasjon:**
- Når ting ikke går din vei
- Uenighet i dommeravgjørelser
- Konflikter med motstandere eller lagkamerater
- **Løsning:** Pusterom, perspektiv, kommunikasjon

**Gruppetrykkk:**
- Lag med dårlig kultur
- "Alle andre gjør det"
- Frykt for å stå utenfor
- **Løsning:** Våg å stå for dine verdier, påvirk kulturen

**Juks og simulering:**
- Filming/diving for å få straffe
- Tidssp illing på uærlig vis
- Bryte regler når dommer ikke ser
- **Løsning:** Husk at integritet er viktigere enn resultatet`
    },
    {
      id: 'kroppsoving-vg1-5-7-def4',
      type: 'definition',
      title: 'Filming/diving',
      content: 'Når en spiller bevisst overdriver eller simulerer en situasjon (f.eks. faller uten kontakt) for å lure dommeren. Ansees som usportslig.'
    },
    {
      id: 'kroppsoving-vg1-5-7-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex5',
        number: '4',
        type: 'classic',
        task: 'Hva er "filming" eller "diving", og hvorfor ansees det som usportslig?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer begrepet',
            solution: 'Filming eller diving er når en spiller bevisst overdriver eller simulerer en situasjon, for eksempel faller uten at det er reell kontakt, for å lure dommeren til å gi straffe, frispark eller kort til motstander.'
          },
          {
            label: 'b',
            task: 'Hvorfor er dette usportslig?',
            multipleChoiceOptions: [
              'Fordi det er mot spillets regler',
              'Fordi det er uærlig og bryter med fair play-prinsipper',
              'Fordi det gjør kampen kjedelig',
              'Fordi det tar for lang tid'
            ],
            solution: 'Fordi det er uærlig og bryter med fair play-prinsipper'
          }
        ],
        solution: 'Filming er usportslig fordi det er bevisst juks som undergraver rettferdighet i spillet.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-7-example2',
      type: 'example',
      title: 'Eksempel: Håndtere nederlag med verdighet',
      problem: 'Ditt lag taper en viktig kamp etter kontroversiell dommeravgjørelse. Hvordan reagerer du?',
      solution: `**Dårlig respons:**
- Klandre dommeren høylytt
- Anklage motstanderlaget for juks
- Nekte å håndhilse etter kampen
- Sulke og ødelegge for lagånden

**God respons umiddelbart etter:**
- Aksepter resultatet med verdighet
- Håndhils med motstanderne
- Takk dommeren for innsatsen
- Støtt lagkamerater som er lei seg

**Senere (i garderoben/neste dag):**
- Analyser hva dere kan lære av kampen
- Diskuter situasjonen rolig hvis nødvendig
- Fokuser på hva dere kan kontrollere
- Bruk det som motivasjon til å bli bedre

**Sportsånd i nederlag viser karakter!**`
    },
    {
      id: 'kroppsoving-vg1-5-7-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex4',
        number: '5',
        type: 'classic',
        task: 'Ditt lag taper en viktig kamp. Beskriv hvordan du kan vise god sportsånd i nederlag.',
        solution: 'God sportsånd i nederlag: 1) Aksepter resultatet med verdighet uten å klandre dommer eller motstandere, 2) Håndhils og gratulerer motstanderlaget genuint, 3) Takk dommeren for innsatsen, 4) Støtt lagkamerater som er lei seg, 5) Senere: Analyser rolig hva dere kan lære, 6) Fokuser på hva dere kan kontrollere neste gang, 7) Bruk det som motivasjon til forbedring. Hvordan du takler nederlag viser karakter og sportsånd mer enn hvordan du feirer seier.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-5-7-rollemodeller',
      type: 'text',
      content: `## Å være rollemodell

**Som spiller:**
- Din oppførsel påvirker medspillere, motstandere og publikum
- Yngre spillere ser opp til deg
- Du representerer laget og idretten
- Vær den spilleren du selv ville beundret

**Positive handlinger:**
- Hjelpe motstander opp fra bakken
- Gratulere med gode prestasjoner (også motstandere)
- Holde hodet høyt i nederlag
- Feire med ydmykhet i seier
- Støtte lagkamerater gjennom vanskelige tider

**Når du ser brudd på fair play:**
- Si fra til den som gjør det (privat, respektfullt)
- Støtt den som blir dårlig behandlet
- Informer trener eller leder hvis nødvendig
- Vær med på å bygge bedre kultur

**Påvirkning utover banen:**
- Hvordan du snakker om motstandere
- Oppførsel i sosiale medier
- Holdninger på skolen/jobb
- Idrettsverdier i hverdagen`
    },
    {
      id: 'kroppsoving-vg1-5-7-def5',
      type: 'definition',
      title: 'Rollemodelleffekten',
      content: 'Hvordan individers oppførsel og holdninger påvirker og inspirerer andre, spesielt yngre eller mindre erfarne personer.'
    },
    {
      id: 'kroppsoving-vg1-5-7-tips',
      type: 'text',
      content: `## Tips for å fremme fair play

**I ditt lag:**
- Lag fair play-avtale sammen
- Feir ikke bare scoringer, men også god sportsånd
- Konfronter usportslig oppførsel direkte
- Vær inkluderende og støttende

**Som kaptein eller leder:**
- Vær forbilde i alle situasjoner
- Snakk med dommeren på en respektfull måte
- Løft frem gode eksempler på fair play
- Adresser problemer raskt og konstruktivt

**I kamp:**
- Start med positivt kroppsspråk og energi
- Kommuniser respektfullt med motstandere
- Aksepter dommeravgjørelser uten diskusjon
- Håndhils og takk alle etter kampen

**Etter kampen:**
- Reflekter over egen oppførsel
- Lær av situasjoner som oppsto
- Gi konstruktiv tilbakemelding til lagkamerater
- Feir det som gikk bra, jobber med det som kan bli bedre`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-5-7-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-7-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du bidra til å fremme fair play i ditt eget lag?',
        solution: 'Du kan fremme fair play ved å: 1) Være rollemodell gjennom egen oppførsel - vis respekt alltid, 2) Feire god sportsånd like mye som scoringer, 3) Konfrontere usportslig oppførsel direkte men respektfullt, 4) Inkludere og støtte alle lagkamerater, 5) Kommunisere respektfullt med motstandere og dommere, 6) Foreslå å lage en lag-avtale om fair play, 7) Løfte frem positive eksempler, 8) Reflektere sammen over oppførsel etter kamper. Hver enkelt spiller har ansvar for lagkulturen.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

// DEL 6: DANS OG BEVEGELSESAKTIVITETER

export const CHAPTER_KROPPSOVING_VG1_6_1: TextbookChapter = {
  id: 'kroppsoving-vg1-6-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.1',
  title: 'Grunnleggende dans og rytme',
  description: 'Takt, tempo og grunnsteg i dans',
  estimatedMinutes: 50,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-1-intro',
      type: 'text',
      content: `# Grunnleggende dans og rytme

Dans er en universell uttrykkform som kombinerer bevegelse, musikk og følelser. Rytme er grunnlaget for all dans - evnen til å bevege seg i takt med musikken. I dette kapittelet skal vi utforske grunnleggende prinsipper for dans, hvordan du finner rytmen, og enkle dansetrinn som fungerer på tvers av sjangere.

Dans handler ikke om å være perfekt, men om å uttrykke seg, ha det gøy og føle musikken i kroppen.`
    },
    {
      id: 'kroppsoving-vg1-6-1-def1',
      type: 'definition',
      title: 'Rytme',
      content: 'Mønsteret av slag og pauser i musikken. I dans betyr det å bevege seg i harmoni med musikkens puls og struktur.'
    },
    {
      id: 'kroppsoving-vg1-6-1-takt-tempo',
      type: 'text',
      content: `## Takt og tempo

**Takt:**
- Tellingen i musikken (oftest 4/4: 1-2-3-4)
- Beats (slag) organisert i mønstre
- Hjelper deg å vite når du skal bevege deg

**Vanlige taktarter:**
- **4/4-takt:** Vanligst - fire slag per takt (pop, rock)
- **3/4-takt:** Vals - tre slag per takt
- **6/8-takt:** To grupper med tre slag

**Tempo:**
- Hvor raskt eller sakte musikken er
- Måles i BPM (beats per minute)
- Sakte: under 100 BPM
- Middels: 100-130 BPM
- Raskt: over 130 BPM

**Å finne rytmen:**
1. Lytt til bass-trommen (den dype duffen)
2. Tell: 1-2-3-4, 1-2-3-4
3. Nikk med hodet eller klappe i takt
4. Føl pulsen i kroppen
5. Begynn å bevege føttene`
    },
    {
      id: 'kroppsoving-vg1-6-1-def2',
      type: 'definition',
      title: 'Downbeat og offbeat',
      content: 'Downbeat er de sterke slagene (1, 3). Offbeat (eller upbeat) er de svake slagene (2, 4). Mange danser vektlegger offbeat.'
    },
    {
      id: 'kroppsoving-vg1-6-1-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom takt og tempo i musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer takt',
            solution: 'Takt er mønsteret av slag (beats) i musikken, organisert i grupper. Vanligst er 4/4-takt hvor du teller 1-2-3-4. Takten forteller deg hvordan musikkens rytme er strukturert.'
          },
          {
            label: 'b',
            task: 'Definer tempo',
            multipleChoiceOptions: [
              'Hvor mange dansetrinn du tar per minutt',
              'Hvor raskt eller sakte musikken spilles',
              'Hvilken type dans du gjør',
              'Hvor mange personer som danser'
            ],
            solution: 'Hvor raskt eller sakte musikken spilles'
          }
        ],
        solution: 'Takt er mønsteret av slag, tempo er hastigheten på musikken.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-1-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan du finner rytmen i en sang.',
        solution: 'For å finne rytmen: 1) Lytt til bass-trommen (den dype dunken), 2) Tell 1-2-3-4 i takt med de sterke slagene, 3) Klappe hendene eller nikke hodet i takt, 4) Føl pulsen i kroppen, 5) Begynn å bevege føttene til rytmen. Start med å bare lytte og kjenne pulsen før du prøver å danse. Mesteparten av populærmusikk har 4/4-takt som er lettestt å følge.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-1-grunnsteg',
      type: 'text',
      content: `## Grunnleggende dansetrinn

**To-steget (grunnsteg):**
- Enklest av alle dansetrinn
- Trinn til siden (1), samle (2), trinn til siden (3), samle (4)
- Fungerer til det meste av musikk

**Trippesteget:**
- Raskere variant
- Tripp-tripp, tripp-tripp (tre raske steg, pause)
- Mer energi

**Grapevine (vinrankesteg):**
- Side, kryss bak, side, sammen
- Populært i linjedans og gruppedans

**Step-touch:**
- Stepp til siden (1), touch (2)
- Skift retning og gjenta
- Veldig enkelt for nybegynnere

**Box step (firkant):**
- Fremover, side, tilbake, side (danner en firkant)
- Grunnlag for mange pardanser

**Rock step:**
- Vekt frem (1), vekt tilbake (2)
- Skaper dynamikk og flow`
    },
    {
      id: 'kroppsoving-vg1-6-1-example1',
      type: 'example',
      title: 'Eksempel: Lære et enkelt dansetrinn',
      problem: 'En nybegynner ønsker å lære å danse, men føler seg usikker. Hvordan kan vedkommende starte?',
      solution: `**Steg-for-steg tilnærming:**

**Steg 1: Finn musikk du liker**
- Velg en låt med tydelig rytme
- Middels tempo (100-120 BPM)
- Noe du føler deg komfortabel med

**Steg 2: Finn pulsen**
- Stå stille og lytt
- Tell 1-2-3-4 i takt med musikken
- Beveg hodet eller klappe hendene

**Steg 3: Beveg føttene**
- Start med enkelt step-touch:
  - Stepp til høyre (1), touch venstre fot (2)
  - Stepp til venstre (3), touch høyre fot (4)

**Steg 4: Legg til armer**
- La armene følge naturlig
- Ikke tenk for mye

**Steg 5: Øv og ha det gøy!**
- Gjenta til det føles naturlig
- Eksperimenter med varianter
- Dans er for alle!`
    },
    {
      id: 'kroppsoving-vg1-6-1-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er "step-touch" og hvorfor er det et godt trinn for nybegynnere?',
        solution: 'Step-touch er et enkelt dansetrinn hvor du stepper til siden (f.eks. høyre) på slag 1, og toucher (berører gulvet med) den andre foten på slag 2. Deretter bytter du retning. Dette er perfekt for nybegynnere fordi: 1) Det er veldig enkelt å lære, 2) Det følger tydelig rytmen, 3) Det gir trygghet å starte med, 4) Det kan brukes til mesteparten av musikk, 5) Det er lett å legge til armbevegelser og varianter når du blir tryggere.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-6-1-def3',
      type: 'definition',
      title: 'Musikalitet',
      content: 'Evnen til å tolke og uttrykke musikken gjennom bevegelse. Inkluderer rytme, dynamikk og følelsesmessig tilknytning til musikken.'
    },
    {
      id: 'kroppsoving-vg1-6-1-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med "musikalitet" i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon',
            multipleChoiceOptions: [
              'Hvor mye musikk du lytter til',
              'Evnen til å tolke og uttrykke musikken gjennom bevegelse',
              'Type musikk du danser til',
              'Hvor høyt musikken spilles'
            ],
            solution: 'Evnen til å tolke og uttrykke musikken gjennom bevegelse'
          },
          {
            label: 'b',
            task: 'Hvordan kan du vise god musikalitet?',
            solution: 'God musikalitet vises ved å: Bevege seg i takt med rytmen, variere dynamikk (energi) i takt med musikkens intensitet, benytte pauser i musikken, tolke følelsene i låten med kroppen, tilpasse stil til musikkens sjanger, og la bevegelsene flyte naturlig med melodien.'
          }
        ],
        solution: 'Musikalitet er evnen til å uttrykke musikken gjennom kroppslige bevegelser.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-1-kroppsdeler',
      type: 'text',
      content: `## Bruke kroppen i dans

**Isolasjon:**
- Bevege én kroppsdel om gangen
- Hodet, skuldre, bryst, hofter, knær
- Øver på kroppsbevissthet og kontroll

**Koordinasjon:**
- Få ulike kroppsdeler til å jobbe sammen
- Armer og bein i koordinasjon
- Overkropp og underkropp

**Postur:**
- Rett rygg, avslappede skuldre
- Vekt på fremre del av føttene
- Lett bøyde knær
- Se fremover, ikke ned

**Balanse:**
- Holde tyngdepunktet stabilt
- Bruke kjernemuskulatur
- Øve på å stå på ett bein

**Rombevissthet:**
- Hvor er du i rommet?
- Beveg deg i ulike retninger
- Unngå kollisjoner
- Bruk nivåer (høyt, middels, lavt)`
    },
    {
      id: 'kroppsoving-vg1-6-1-def4',
      type: 'definition',
      title: 'Kroppslig intelligens',
      content: 'Bevisstheten om egen kropp, dens bevegelser og plassering i rom. Viktig for å danse med kontroll og uttrykk.'
    },
    {
      id: 'kroppsoving-vg1-6-1-musikkforstaelse',
      type: 'text',
      content: `## Forstå musikkens struktur

**Intro:**
- Begynnelsen av låten
- Ofte roligere, etablerer rytme

**Vers:**
- Fortellingen i låten
- Kan være mer dempet

**Refreng:**
- Høydepunktet, mest energi
- Gjentakende melodi
- Her kan du gå "all in" i dansen

**Bro (bridge):**
- Mellomparti med ny energi
- Kontrast til vers og refreng

**Outro:**
- Avslutning
- Ofte roligere ned

**Hvordan bruke dette i dans:**
- Bygg energi gjennom verset
- Slipp løs i refrenget
- Eksperimenter i broen
- Avslutt elegant`
    },
    {
      id: 'kroppsoving-vg1-6-1-def5',
      type: 'definition',
      title: 'Dynamikk i dans',
      content: 'Variasjon i energi, kraft og intensitet i bevegelsene. God dynamikk gjør dansen mer interessant og uttrykksfull.'
    },
    {
      id: 'kroppsoving-vg1-6-1-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du bruke musikkens struktur (vers, refreng, bro) i dansen din?',
        solution: 'Du kan bruke musikkens struktur ved å: I introen: Start rolig og etabler grunnbevegelser. I verset: Bygg energi gradvis, bruk enklere trinn. I refrenget: Slipp løs med mer energi og større bevegelser - dette er høydepunktet. I broen: Eksperimenter med nye bevegelser eller stil, gi kontrast. I outroen: Ro ned og avslutt elegant. Ved å variere dansen etter musikkens struktur blir dansen mer dynamisk, interessant og viser at du forstår musikken.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-1-tips',
      type: 'text',
      content: `## Tips for å bli tryggere på dans

**Øvelse gjør mester:**
- Dans hjemme når du er alene
- Øv foran speil for å se bevegelser
- Start med enkle trinn
- Bygg gradvis kompleksitet

**Slipp løs:**
- Ikke vær redd for å se dum ut
- Alle gjør feil - det er en del av læringen
- Fokuser på glede, ikke perfeksjon
- Dans som om ingen ser på

**Lær av andre:**
- Se på dansere (live eller video)
- Delta i dansetimer eller workshops
- Spør om hjelp fra erfarne dansere
- Dansegrupper og klubber

**Musikk:**
- Lytt aktivt til ulike sjangre
- Finn det som får deg til å bevege deg
- Ikke vær redd for å eksperimentere
- Lag spillelister for dans

**Vær tålmodig:**
- Det tar tid å utvikle rytmefølelse
- Feire små fremskritt
- Sammenlign deg med din egen utvikling
- Ha det gøy underveis!`
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-1-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Hva er de viktigste rådene for noen som er usikker på å begynne å danse?',
        solution: 'Viktigste råd for usikre nybegynnere: 1) Start enkelt med grunntrinn som step-touch, 2) Dans hjemme alene først for å bli trygg, 3) Fokuser på glede og uttrykk, ikke perfeksjon, 4) Husk at alle gjør feil - det er en del av læringen, 5) Øv foran speil for å se fremgang, 6) Velg musikk du liker, 7) Vær tålmodig - det tar tid, 8) Dans som om ingen ser på, 9) Feire små fremskritt. Det viktigste er å ha det gøy!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_6_2: TextbookChapter = {
  id: 'kroppsoving-vg1-6-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.2',
  title: 'Pardans og folkedans',
  description: 'Vals, swing, reinlender, springar og norske folkedanser',
  estimatedMinutes: 50,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-2-intro',
      type: 'text',
      content: `# Pardans og folkedans

Pardans er dans hvor to personer danser sammen i et felles mønster, ofte med fysisk kontakt. Folkedans er tradisjonelle danser som er knyttet til kulturell arv og tradisjoner. I Norge har vi en rik folkedanstradisjon med reinlender, springar og pols.

I dette kapittelet skal vi utforske både internasjonale pardanser som vals og swing, og norske folkedanser som reinlender og springar.`
    },
    {
      id: 'kroppsoving-vg1-6-2-def1',
      type: 'definition',
      title: 'Pardans',
      content: 'Dans hvor to personer danser sammen med fysisk kontakt og felles bevegelsesmønster. Tradisjonelt har en fører og en følger.'
    },
    {
      id: 'kroppsoving-vg1-6-2-vals',
      type: 'text',
      content: `## Vals

Vals er en elegant pardans i 3/4-takt (1-2-3, 1-2-3). Den oppsto i Østerrike og er en av de mest kjente pardansene.

**Grunnsteg:**
1. Frem med høyre (1)
2. Side med venstre (2)  
3. Sammen med høyre (3)
4. Tilbake med venstre (1)
5. Side med høyre (2)
6. Sammen med venstre (3)

**Førerhol (lukket posisjon):**
- Høyre hånd på følgerens venstre skulderblad
- Venstre hånd holder følgerens høyre hånd
- Bryst-til-bryst, men ikke for tett
- Blikket over partneren skulder

**Teknikk:**
- Myk bevegelse, som å sveve
- Lett opp-og-ned bevegelse
- Følg musikkens flyt
- Kommunikasjon gjennom kroppskontakt`
    },
    {
      id: 'kroppsoving-vg1-6-2-def2',
      type: 'definition',
      title: 'Fører og følger',
      content: 'I pardans har tradisjonelt én person (fører) ansvar for å lede bevegelsene, mens den andre (følger) responderer. Moderne dans utforsker mer likeverdig kommunikasjon.'
    },
    {
      id: 'kroppsoving-vg1-6-2-swing',
      type: 'text',
      content: `## Swing

Swing er en energisk pardans fra 1920-30-tallet, danset til jazzmusikk. Det finnes mange stiler: Lindy Hop, East Coast Swing, West Coast Swing.

**Grunnsteg (6-count basic):**
1. Rock step: Tilbake, frem (1-2)
2. Triple step: Tripp-a-lett til venstre (3-and-4)
3. Triple step: Tripp-a-lett til høyre (5-and-6)

**Karakteristikker:**
- Mye energi og personlighet
- "Bounce" i knærne
- Improvisasjon og styling
- Åpen og lukket posisjon
- Kast og svinger

**Swing-kultur:**
- Sosialt og inkluderende
- Kan danse med mange partnere
- Fokus på moro og uttrykk
- Levende dansesamfunn`
    },
    {
      id: 'kroppsoving-vg1-6-2-reinlender',
      type: 'text',
      content: `## Reinlender

Reinlender er en norsk folkedans som danses i par. Den kom til Norge fra Tyskland (rheinländer) på 1800-tallet.

**Grunnsteg:**
- Dans i lukket posisjon
- Veldig lik valsen, men i 2/4-takt
- Lange, glidende skritt
- Rotering mens paret beveger seg rundt gulvet

**Varianter:**
- Halling-reinlender: Med karakteristiske spark
- Vals-reinlender: Blanding av vals og reinlender
- Telemarksvarianter: Lokale tradisjoner

**Kulturell betydning:**
- Populær på bryllup og festligheter
- Del av norsk dansearv
- Enklere enn springar, mer tilgjengelig
- Sosial dans som bringer folk sammen`
    },
    {
      id: 'kroppsoving-vg1-6-2-def3',
      type: 'definition',
      title: 'Folkedans',
      content: 'Tradisjonelle danser knyttet til et folk eller en regions kulturarv, ofte med røtter langt tilbake i tid.'
    },
    {
      id: 'kroppsoving-vg1-6-2-springar',
      type: 'text',
      content: `## Springar og pols

Springar (også kalt pols) er en livlig norsk folkedans i 3/4-takt. Den er mer energisk og kompleks enn reinlender.

**Karakteristikker:**
- Asymmetrisk rytme (dreia pols)
- Partnerne står tett sammen
- Kraftig rotering
- Dansen "hopper" (derav navnet springar)
- Krever god balanse og styrke

**Regionale varianter:**
- Telemarkspols
- Hallingpols
- Setesdalspols
- Valdrespols

**Utfordringer:**
- Vanskeligere enn reinlender
- Krever mye øvelse
- God rytmefølelse nødvendig
- Partner-koordinasjon

**Kulturell kontekst:**
- Danset på leikarring (danseringer)
- Ofte til felemusikk (hardingfele)
- Del av immateriell kulturarv
- Levende tradisjon i mange bygder`
    },
    {
      id: 'kroppsoving-vg1-6-2-example1',
      type: 'example',
      title: 'Eksempel: Lære vals for nybegynnere',
      problem: 'Et par ønsker å lære vals til et bryllup. Hvordan starter de?',
      solution: `**Steg-for-steg tilnærming:**

**1. Lær rytmen:**
- Lytt til valsmusikk (3/4-takt)
- Tell: 1-2-3, 1-2-3
- Klappe eller stempe i takt

**2. Øv enkeltvis:**
- Hver for seg øver grunnsteget
- Frem-side-sammen (1-2-3)
- Tilbake-side-sammen (1-2-3)
- Gjenta til det sitter

**3. Partner opp:**
- Ta førerhol (lukket posisjon)
- Fører starter med høyre frem
- Følger starter med venstre tilbake
- Sakte tempo først

**4. Legg til bevegelse:**
- Begynn å rotere sakte
- Myk opp-og-ned bevegelse
- Opplev flyten

**5. Øvelse:**
- Dans til flere sanger
- Bygg tillit til hverandre
- Ha det gøy!`
    },
    {
      id: 'kroppsoving-vg1-6-2-def4',
      type: 'definition',
      title: 'Dans-etikette',
      content: 'Uskrevne regler for høflighet og respekt i pardans, som å invitere høflig, takke etter dans, og respektere grenser.'
    },
    {
      id: 'kroppsoving-vg1-6-2-tips',
      type: 'text',
      content: `## Tips for pardans

**Som fører:**
- Vær tydelig i signalene
- Led med kroppen, ikke bare armene
- Vær oppmerksom på partner og omgivelser
- Tilpass til følgerens nivå

**Som følger:**
- Vær oppmerksom på signaler
- Oppretthold egen balanse
- Ikke forut hva som kommer
- Stol på føreren

**Generelt:**
- Kommunikasjon er nøkkelen
- Hygiene er viktig (frisk pust, ren kropp)
- Respekter personlig rom
- Vær tålmodig med deg selv og partner
- Bytt partnere for å lære mer
- Ha det gøy - dans er sosialt!

**Dans-etikette:**
- Inviter høflig: "Vil du danse?"
- Aksepter avslag med verdighet
- Takk etter dansen
- Ikke gi ubedt kritikk på dansegulvet`
    },
    {
      id: 'kroppsoving-vg1-6-2-def5',
      type: 'definition',
      title: 'Floorcraft',
      content: 'Evnen til å navigere trygt på dansegulvet, unngå kollisjoner, og vise hensyn til andre par.'
    },
    {
      id: 'kroppsoving-vg1-6-2-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex3',
        number: '1',
        type: 'classic',
        task: 'Hva menes med "fører" og "følger" i pardans?',
        solution: 'I pardans har tradisjonelt én person (fører) ansvar for å lede dansen - bestemme retning, tempo og hvilke figurer som skal danses. Den andre personen (følger) responderer på førerens signaler og tilpasser sine bevegelser. Fører kommuniserer gjennom kroppskontakt, ikke verbalt. Moderne dans utforsker mer likeverdig kommunikasjon hvor begge partnere kan bytte på å lede. Begge rollene krever ferdigheter og er like viktige for en god dans.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-2-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Beskriv grunnsteget i vals.',
        solution: 'Grunnsteget i vals for fører: 1) Frem med høyre fot (1), 2) Side med venstre fot (2), 3) Sammen med høyre fot (3), deretter: 4) Tilbake med venstre fot (1), 5) Side med høyre fot (2), 6) Sammen med venstre fot (3). Dette danner en firkant på gulvet. Følger gjør motsatt: starter med venstre tilbake. Dansen har en myk, glidende kvalitet som føles som å sveve, med lett opp-og-ned bevegelse i takt med musikken (1-2-3, 1-2-3).',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-6-2-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex6',
        number: '3',
        type: 'classic',
        task: 'Hvilke råd vil du gi til noen som skal lære å danse swing?',
        solution: 'Råd for å lære swing: 1) Start med grunnsteget (rock step + triple step x2), 2) Fokuser på "bounce" i knærne - swing har energi, 3) Øv rytmen til du kjenner den i kroppen, 4) Tør å ha personlighet og stil - swing handler om uttrykk, 5) Lytt til mye swing/jazz-musikk for å få følelsen, 6) Swing-miljøet er sosialt - dans med mange partnere, 7) Gå på swingkveld eller workshop, 8) Ikke vær redd for å se dum ut - alle begynner et sted, 9) Ha det gøy og nyt musikken!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-2-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex1',
        number: '4',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom vals og reinlender?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken taktart har vals?',
            multipleChoiceOptions: [
              '2/4-takt',
              '3/4-takt',
              '4/4-takt',
              '6/8-takt'
            ],
            solution: '3/4-takt'
          },
          {
            label: 'b',
            task: 'Hvilken taktart har reinlender?',
            solution: 'Reinlender danses i 2/4-takt, mens vals danses i 3/4-takt. Reinlender er en norsk folkedans som ligner vals, men med annen rytme.'
          }
        ],
        solution: 'Vals er i 3/4-takt, reinlender er i 2/4-takt.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-2-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex4',
        number: '5',
        type: 'classic',
        task: 'Hva er springar og hvordan skiller den seg fra reinlender?',
        solution: 'Springar (også kalt pols) er en livlig norsk folkedans i 3/4-takt. Den skiller seg fra reinlender ved: 1) Mer energisk og kompleks, 2) Asymmetrisk rytme (dreia pols), 3) Kraftig rotering med tett partnerkontakt, 4) "Hopper" i dansen, 5) Krever bedre balanse og styrke, 6) Vanskeligere å lære. Reinlender er enklere, i 2/4-takt, mer lik internasjonal vals. Begge er viktige deler av norsk dansearv og danses til felemusikk på leikarringer.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-2-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-2-ex5',
        number: '6',
        type: 'classic',
        task: 'Hva er viktige prinsipper for god dans-etikette?',
        solution: 'God dans-etikette inkluderer: 1) Invitere høflig og akseptere avslag med verdighet, 2) God hygiene (frisk pust, ren kropp, passende klær), 3) Respektere personlig rom og grenser, 4) Takke partneren etter dansen, 5) Ikke gi ubedt kritikk på dansegulvet, 6) Være oppmerksom på andre par (floorcraft), 7) Vise tålmodighet med partnere på alle nivåer, 8) Være til stede og fokusere på dansen, 9) Smile og ha det gøy. Dans-etikette handler om respekt og å skape et trygt, hyggelig miljø for alle.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_6_3: TextbookChapter = {
  id: 'kroppsoving-vg1-6-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.3',
  title: 'Moderne dans og hiphop',
  description: 'Streetdance, locking, popping og urbane danseformer',
  estimatedMinutes: 50,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-3-intro',
      type: 'text',
      content: `# Moderne dans og hiphop

Hiphop-dans og streetdance er urbane danseformer som oppsto i USA på 1970-tallet som del av hiphop-kulturen. Disse danseformene er preget av energi, kreativitet, improvisasjon og personlig stil. I dag er de blant de mest populære dansestilene i verden.

I dette kapittelet skal vi utforske ulike hiphop-stiler som locking, popping, breaking, og moderne urban dans.`
    },
    {
      id: 'kroppsoving-vg1-6-3-def1',
      type: 'definition',
      title: 'Hiphop-kultur',
      content: 'En kulturell bevegelse som omfatter fire elementer: rap (MCing), DJ-ing, graffiti og dans (B-boying/breaking). Oppsto i Bronx, New York på 1970-tallet.'
    },
    {
      id: 'kroppsoving-vg1-6-3-grunnlag',
      type: 'text',
      content: `## Grunnleggende elementer i hiphop-dans

**Groove:**
- Den underliggende følelsen og flyten
- Naturlig bevegelse til musikken
- Personlig stil og attitude

**Bounce:**
- Opp-og-ned bevegelse i kroppen
- Følger beats i musikken
- Gir energi til dansen

**Isolasjoner:**
- Bevege en kroppsdel isolert fra resten
- Hodet, bryst, hofter, skuldre
- Kontroll og presisjon

**Musicality:**
- Lytte til og tolke musikken
- Danse til ulike lyder (bass, snare, melodi)
- Bruke pauser og aksenter

**Freestyle:**
- Improvisasjon
- Uttrykke seg spontant
- Vise personlighet

**Attitude:**
- Selvtillit og karakter
- "Swag" eller "flavor"
- Eierskap til bevegelsene`
    },
    {
      id: 'kroppsoving-vg1-6-3-def2',
      type: 'definition',
      title: 'Freestyle',
      content: 'Improvisert dans hvor danseren skaper bevegelser spontant til musikken, uten koreografert sekvens. Viser kreativitet og musikalitet.'
    },
    {
      id: 'kroppsoving-vg1-6-3-locking',
      type: 'text',
      content: `## Locking

Locking oppsto på begynnelsen av 1970-tallet, skapt av Don Campbell. Preget av "låsing" av bevegelser - raske bevegelser som plutselig fryser.

**Karakteristiske bevegelser:**
- **Lock:** Fryse plutselig i en posisjon
- **Point:** Peke dramatisk
- **Pace:** Roterende bevegelse av armer
- **Funky Chicken:** Vinge-lignende armbevegelse
- **Leo Walk:** Særegen gangstil

**Stil:**
- Energisk og glad
- Store, åpne bevegelser
- Tydelig rytme
- Smil og uttrykk

**Musikk:**
- Funk-musikk fra 70-tallet
- James Brown, Parliament
- Uptempo, groovy beats`
    },
    {
      id: 'kroppsoving-vg1-6-3-popping',
      type: 'text',
      content: `## Popping

Popping er en funky stil hvor musklene kontraheres og slippes i takt med musikken, og skaper en "poppende" effekt.

**Teknikker:**
- **Pop/Hit:** Rask muskelkontraksjon
- **Wave:** Bevegelse flyter gjennom kroppen
- **Tutting:** Geometriske former med armer
- **Robot:** Mekaniske, stakkato bevegelser
- **Gliding:** Illusjon av å gli over gulvet (Moonwalk)

**Stil:**
- Kontrollert og presis
- Illusjonsbasert
- Robotisk/mekanisk
- Krever god muskelkontroll

**Relaterte stiler:**
- Boogaloo: Mer flytende, rolling av ledd
- Animation: Som en stopp-film
- Strobing: Rykkvise bevegelser i lys`
    },
    {
      id: 'kroppsoving-vg1-6-3-def3',
      type: 'definition',
      title: 'Battle',
      content: 'Dans-konkurranse hvor dansere eller lag utfordrer hverandre, ofte improvisert, for å vise hvem som er best. Viktig del av hiphop-kulturen.'
    },
    {
      id: 'kroppsoving-vg1-6-3-breaking',
      type: 'text',
      content: `## Breaking (B-boying/B-girling)

Breaking er den opprinnelige hiphop-danseformen, også kalt breakdance. Preget av akrobatikk, spinn og freezes.

**Elementer:**
- **Top rock:** Dans stående
- **Go downs:** Overganger ned til gulvet
- **Footwork:** Raske fotbevegelser på gulvet (6-step, 3-step)
- **Power moves:** Spinn og akrobatiske bevegelser (windmill, flare)
- **Freezes:** Holde en vanskelig posisjon (baby freeze, chair freeze)

**Kultur:**
- Battles og cyphers (sirkler hvor dansere tar turns)
- Crew-kultur (lag av breakere)
- Respekt og utfordring
- Nå en olympisk gren!

**Fysiske krav:**
- Styrke (særlig overkropp)
- Fleksibilitet
- Balanse
- Utholdenhet`
    },
    {
      id: 'kroppsoving-vg1-6-3-urban',
      type: 'text',
      content: `## Moderne urban dans

Moderne urban dans er en miks av ulike stiler, ofte sett i musikkvideoer og på sosiale medier.

**Stiler som påvirker:**
- Hiphop foundation
- Jazz funk
- Waacking (arm-fokuserte bevegelser fra disco-æraen)
- Voguing (pose-basert dans fra ballroom-kulturen)
- Afrodans og dancehall

**Karakteristikker:**
- Koreografert til populærmusikk
- Blanding av stiler
- Visuelt tiltalende
- Ofte læres via sosiale medier (TikTok, YouTube)

**Populære koreografer:**
- Parris Goebel
- Jonte Moaning
- Kinjaz
- Les Twins`
    },
    {
      id: 'kroppsoving-vg1-6-3-example1',
      type: 'example',
      title: 'Eksempel: Lære grunnleggende hiphop-groove',
      problem: 'En nybegynner vil lære å danse hiphop. Hvordan starter vedkommende med grooven?',
      solution: `**Steg-for-steg:**

**1. Finn musikken:**
- Velg hiphop med tydelig beat
- 90-100 BPM er bra for å starte

**2. Finn bounce:**
- Bøy lett i knærne
- Bounce opp og ned på hvert beat
- La hele kroppen følge

**3. Legg til groove:**
- La skuldrene bevege seg
- Hodet nikker lett
- Bryst beveger seg frem og tilbake
- Føl musikken i hele kroppen

**4. Legg til footwork:**
- Step-touch til siden
- Criss-cross med føttene
- Rock back og frem

**5. Freestyle:**
- Eksperimenter med det du har lært
- Ikke tenk for mye
- Uttrykk deg!

**Husk:** Hiphop handler om personlighet og stil!`
    },
    {
      id: 'kroppsoving-vg1-6-3-def4',
      type: 'definition',
      title: 'Cypher',
      content: 'En sirkel av dansere hvor folk går inn i midten én eller flere av gangen for å danse/freestyle mens andre ser på og heier. Viktig sosial struktur i hiphop.'
    },
    {
      id: 'kroppsoving-vg1-6-3-tips',
      type: 'text',
      content: `## Tips for hiphop-dans

**For nybegynnere:**
- Start med groove og bounce
- Lær grunnleggende steps
- Ikke sammenlign deg med profesjonelle
- Fokuser på å ha det gøy

**Utvikle stil:**
- Se på forskjellige dansere
- Finn hva som føles naturlig for deg
- Eksperimenter med ulike bevegelser
- Utvikle din egen "flavor"

**Øve effektivt:**
- Bryt ned bevegelser i små deler
- Øv foran speil
- Film deg selv
- Øv i sakte tempo først

**Musikalitet:**
- Lytt mye til hiphop-musikk
- Lær å høre ulike lyder (bass, snare, hi-hat)
- Dans til ulike deler av sangen
- Bruk pauser kreativt

**Kultur:**
- Forstå historien bak dansene
- Respekter de som kom før
- Delta i cyphers og battles
- Bygg fellesskap`
    },
    {
      id: 'kroppsoving-vg1-6-3-def5',
      type: 'definition',
      title: 'Swagger',
      content: 'Selvtillit, karisma og personlig stil i dans. Ikke arroganse, men trygghet og eierskap til egne bevegelser.'
    },
    {
      id: 'kroppsoving-vg1-6-3-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fire elementene i hiphop-kulturen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig liste',
            multipleChoiceOptions: [
              'Rap, DJ-ing, graffiti, dans',
              'Rap, beatbox, dans, kunst',
              'Breaking, locking, popping, krumping',
              'Musikk, dans, mote, sport'
            ],
            solution: 'Rap, DJ-ing, graffiti, dans'
          },
          {
            label: 'b',
            task: 'Hvor og når oppsto hiphop-kulturen?',
            solution: 'Hiphop-kulturen oppsto i Bronx, New York på 1970-tallet. Den vokste frem fra afroamerikanske og latino-samfunn som en kreativ uttrykksform og kulturell bevegelse.'
          }
        ],
        solution: 'Hiphop har fire elementer: rap (MCing), DJ-ing, graffiti og dans.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-3-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex5',
        number: '2',
        type: 'classic',
        task: 'Hva menes med "bounce" og "groove" i hiphop-dans?',
        solution: 'Bounce er den grunnleggende opp-og-ned bevegelsen i kroppen som følger beats i musikken. Det starter med å bøye lett i knærne og bounce på hvert slag, og gir energi til dansen. Groove er den underliggende følelsen og flyten i dansen - hvordan du naturlig beveger deg til musikken med din personlige stil og attitude. Bounce er mer teknisk (selve bevegelsen), mens groove er mer om følelse og musikalitet. Sammen skaper de hiphop-dansens karakteristiske energi.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-3-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex2',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom locking og popping?',
        solution: 'Locking (fra tidlig 70-tall) er preget av raske bevegelser som plutselig "låser" i frosne posisjoner, med store, energiske og glade bevegelser som pointing og pace. Danses til funk-musikk. Popping er preget av rask muskelkontraksjon som skaper en "poppende" effekt, mer kontrollert og presis, ofte med robotiske eller illusjonsbaserte bevegelser som waves og gliding. Begge er funk-styles, men har ulik følelse og teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-3-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Beskriv de fem hovedelementene i breaking (breakdance).',
        solution: 'De fem hovedelementene i breaking er: 1) Top rock - dans stående før du går ned, 2) Go downs - overganger fra stående til gulvet, 3) Footwork - raske fotbevegelser på gulvet som 6-step og 3-step, 4) Power moves - akrobatiske spinn som windmill, flare og headspin, 5) Freezes - holde vanskelige posisjoner som baby freeze eller chair freeze. En god breaker mestrer alle elementene og kombinerer dem kreativt i dans.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-3-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex3',
        number: '5',
        type: 'classic',
        task: 'Hva er en "cypher" i hiphop-dans?',
        solution: 'En cypher er en sirkel av dansere hvor folk går inn i midten (ofte én eller to av gangen) for å danse/freestyle mens de andre ser på, heier og gir energi. Det er en viktig sosial struktur i hiphop hvor dansere kan vise seg frem, lære av hverandre og bygge fellesskap. Cyphers er basert på respekt, der alle får sin tur og dansere responderer på hverandre. Det er mindre formelt og konkurransepreget enn en battle.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    {
      id: 'kroppsoving-vg1-6-3-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du utvikle din egen personlige stil i hiphop-dans?',
        solution: 'For å utvikle personlig stil: 1) Se på mange forskjellige dansere og stiler for inspirasjon, 2) Eksperimenter med ulike bevegelser og finn hva som føles naturlig for deg, 3) Freestyle mye - improvisasjon hjelper deg finne din stemme, 4) Ikke bare kopiere - tilføy din egen twist, 5) Uttrykk din personlighet og følelser i dansen, 6) Vær autentisk - ikke prøv å være noen andre, 7) Øv og bygg selvtillit, 8) Lær grunnlaget godt, så kan du bryte regler kreativt. Din stil utvikler seg over tid!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_6_4: TextbookChapter = {
  id: 'kroppsoving-vg1-6-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.4',
  title: 'Skapende dans og koreografi',
  description: 'Improvisasjon, komposisjon og kreativt danseuttrykk',
  estimatedMinutes: 50,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-4-intro',
      type: 'text',
      content: `# Skapende dans og koreografi

Skapende dans handler om å bruke kroppen til å uttrykke ideer, følelser og historier på egne måter. Koreografi er kunsten å komponere og strukturere dans. I dette kapittelet skal vi utforske hvordan du kan skape egne danseut trykk gjennom improvisasjon, komposisjon og kreative prosesser.

Dans er et språk - og du kan bruke det til å si noe unikt.`
    },
    {
      id: 'kroppsoving-vg1-6-4-def1',
      type: 'definition',
      title: 'Koreografi',
      content: 'Kunsten å komponere og strukturere dans. Å skape en sekvens av bevegelser som uttrykker noe eller forteller en historie.'
    },
    {
      id: 'kroppsoving-vg1-6-4-improvisasjon',
      type: 'text',
      content: `## Improvisasjon i dans

Improvisasjon er å bevege seg spontant uten forhåndsplanlagt koreografi.

**Hvorfor improvisere?**
- Utforske nye bevegelser
- Finne din egen bevegelsesstemme
- Utvikle kreativitet
- Lære å være i øyeblikket
- Bygge selvtillit

**Impro-øvelser:**
- **Fri bevegelse:** Dans til musikk uten regler
- **Speil-øvelse:** Følge en partner
- **Bildekort:** Bevege seg inspirert av bilder
- **Følelsesutforskning:** Dans ut ulike følelser
- **Bevegelseskvaliteter:** Utforske tungt/lett, raskt/sakte

**Tips for improvisasjon:**
- Slå av den indre kritikeren
- La kroppen lede, ikke hodet
- Vær nysgjerrig på hva som skjer
- Aksepter alt som kommer
- Det er ingen feil i impro`
    },
    {
      id: 'kroppsoving-vg1-6-4-def2',
      type: 'definition',
      title: 'Bevegelsesrespons',
      content: 'Hvordan kroppen reagerer spontant på impulser fra musikk, partnere, rom eller indre følelser.'
    },
    {
      id: 'kroppsoving-vg1-6-4-komposisjon',
      type: 'text',
      content: `## Koreografisk komposisjon

Å lage koreografi er som å skrive en fortelling med kroppen.

**Elementer i komposisjon:**

**1. Bevegelse:**
- Hvilke bevegelser brukes?
- Kvalitet (skarpt, mykt, flytende)
- Dynamikk (kraft, energi)

**2. Rom:**
- Hvor på scenen/gulvet?
- Retninger og nivåer
- Formasjoner (hvis gruppe)

**3. Tid:**
- Tempo og rytme
- Pauser og stillhet
- Lengde på seksjoner

**4. Relasjoner:**
- Solo, duett, gruppe?
- Samhandling eller kontrast?
- Fokus og oppmerksomhet

**Strukturelle prinsipper:**
- **Repetisjon:** Gjenta bevegelser for gjenkjennelse
- **Variasjon:** Endre bevegelser for interesse
- **Kontrast:** Motsatte kvaliteter
- **Overgang:** Hvordan gå fra A til B
- **Klimaks:** Høydepunkt i stykket`
    },
    {
      id: 'kroppsoving-vg1-6-4-example1',
      type: 'example',
      title: 'Eksempel: Lage en enkel koreografi',
      problem: 'Du skal lage en koreografi på 30 sekunder til en sang du liker. Hvordan går du frem?',
      solution: `**Steg-for-steg prosess:**

**1. Velg musikk:**
- Finn 30 sekunder som engasjerer deg
- Lytt mange ganger
- Merk refreng, vers, særegne lyder

**2. Improvisasjon:**
- Dans fritt til sangen mange ganger
- Prøv ulike bevegelser
- Finn hva som føles riktig

**3. Velg ut bevegelser:**
- Plukk 4-6 bevegelser du liker
- Sørg for variasjon (tempo, nivå, kvalitet)
- Noter dem (film eller skriv)

**4. Strukturer:**
- Bestem rekkefølge
- Lag overganger mellom bevegelser
- Tilpass til musikkens struktur

**5. Øv:**
- Repetere til det sitter
- Finjustere detaljer
- Legg til uttrykk

**6. Presentere:**
- Vis for andre
- Motta tilbakemelding
- Feire skaperglede!`
    },
    {
      id: 'kroppsoving-vg1-6-4-def3',
      type: 'definition',
      title: 'Bevegelsesmotiv',
      content: 'En kort bevegelsessekvens eller gestus som gjentar seg og fungerer som et gjenkjennelig tema i koreografien.'
    },
    {
      id: 'kroppsoving-vg1-6-4-fortelling',
      type: 'text',
      content: `## Fortelle historier gjennom dans

Dans kan kommunisere uten ord.

**Narrative verktøy:**
- **Karakter:** Hvem er du? Vis gjennom bevegelse
- **Konflikt:** Hva er utfordringen?
- **Reise:** Hvordan utvikler det seg?
- **Løsning:** Hvordan ender det?

**Abstrakt vs. bokstavelig:**
- **Abstrakt:** Uttrykke følelser og stemninger uten spesifikk historie
- **Bokstavelig:** Mime og tydelig fortelling
- **Blanding:** Veksle mellom

**Uttrykk:**
- Ansiktsuttrykk og blikk
- Kvalitet i bevegelse
- Bruk av rom
- Dynamikk og timing

**Lag forbindelse:**
- Dans som om du forteller noen noe
- Tenk på hva du vil publikum skal føle
- Vær tilstede i øyeblikket`
    },
    {
      id: 'kroppsoving-vg1-6-4-def4',
      type: 'definition',
      title: 'Kintetisk empati',
      content: 'Når publikum føler bevegelsene i egen kropp ved å se dans. Vi "speiler" bevegelsene følelsesmessig.'
    },
    {
      id: 'kroppsoving-vg1-6-4-gruppe',
      type: 'text',
      content: `## Skape sammen i gruppe

Gruppekoreografi har egne muligheter og utfordringer.

**Samarbeidsprosess:**
- Brainstorme sammen
- Alle bidrar med ideer
- Demokratiske beslutninger
- Respektere ulike innspill

**Gruppedynamikk:**
- **Unison:** Alle gjør det samme
- **Canon:** Samme bevegelse, forskjellige tidspunkt
- **Complement:** Ulike bevegelser som fungerer sammen
- **Kontrast:** Bevisste forskjeller

**Formasjoner:**
- Linjer og rader
- Sirkler
- Diagonaler
- Klynger
- Overgang mellom formasjoner

**Roller:**
- Hvem har fokus når?
- Solister vs. bakgrunn
- Symmetri og asymmetri

**Praktiske tips:**
- Bruk tid på oppvarming sammen
- Vær åpne for hverandres ideer
- Filmer prosessen
- Ha tålmodighet`
    },
    {
      id: 'kroppsoving-vg1-6-4-def5',
      type: 'definition',
      title: 'Devising',
      content: 'En skapende prosess hvor koreografien utvikles kollektivt gjennom improvisasjon, diskusjon og eksperimentering.'
    },
    {
      id: 'kroppsoving-vg1-6-4-tips',
      type: 'text',
      content: `## Tips for skapende dans

**Finn inspirasjon:**
- Musikk, dikt, kunst
- Naturen, følelser
- Personlige opplevelser
- Sosiale temaer

**Utvikle materiale:**
- Improvisere mye først
- Ikke vær redd for å forkaste
- Bygg på det som fungerer
- Vær tålmodig

**Strukturere verket:**
- Begynn enkelt
- Bygg kompleksitet gradvis
- Husk balanse (variasjon og gjentakelse)
- Avslutt sterkt

**Få tilbakemelding:**
- Vis undervvegs
- Lytt til respons
- Vær åpen for justering
- Stol også på egen intuisjon

**Refleksjon:**
- Hva fungerte?
- Hva ville du gjort annerledes?
- Hva lærte du?
- Hva vil du utforske videre?`
    },
    {
      id: 'kroppsoving-vg1-6-4-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom improvisasjon og koreografi?',
        solution: 'Improvisasjon er spontan bevegelse uten forhåndsplanlagt sekvens - du skaper i øyeblikket. Det handler om utforskning, kreativitet og å være tilstede. Koreografi er planlagt og strukturert dans som er komponert på forhånd og kan gjentas. En koreografi har ofte en fast rekkefølge av bevegelser. Improvisasjon brukes ofte i prosessen med å skape koreografi - du improviserer for å finne bevegelser, så strukturerer du dem til en koreografi.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-4-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre elementer du må tenke på når du lager en koreografi.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tre korrekte elementer',
            solution: 'Tre elementer i komposisjon: 1) Bevegelse (hvilke bevegelser, kvalitet, dynamikk), 2) Rom (hvor på gulvet, retninger, nivåer), 3) Tid (tempo, rytme, pauser). Andre viktige elementer er også: Relasjoner (solo/gruppe), Uttrykk (følelser, budskap), Struktur (begynnelse, klimaks, slutt).'
          }
        ],
        solution: 'Viktige elementer i koreografi: bevegelse, rom, tid og relasjoner.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-4-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Beskriv kort prosessen for å lage en enkel koreografi.',
        solution: 'Prosess for å lage koreografi: 1) Velg musikk som engasjerer deg, 2) Lytt mange ganger og merk struktur, 3) Improvisere fritt til musikken for å finne bevegelser, 4) Velg ut 4-6 bevegelser du liker med variasjon, 5) Strukturer dem i rekkefølge og lag overganger, 6) Tilpass til musikkens struktur, 7) Øv til det sitter, 8) Finjuster detaljer og uttrykk, 9) Presentere og motta tilbakemelding. Husk å filme underveis for å huske!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-4-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Hva er et "bevegelsesmotiv" og hvorfor er det nyttig i koreografi?',
        solution: 'Et bevegelsesmotiv er en kort, gjenkjennelig bevegelsessekvens eller gestus som gjentar seg i koreografien. Det fungerer som et tema eller en rød tråd. Motiver er nyttige fordi: 1) De skaper gjenkjennelse og struktur, 2) De binder koreografien sammen, 3) De kan varieres (raskere, større, annen retning) for å skape interessante utviklinger, 4) De hjelper publikum å følge med, 5) De gir koreografien identitet. Som et refreng i en sang.',
        allowsUpload: true,
        allowsCanvasDrawing: true
      }
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-4-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvilke fordeler og utfordringer er det med å skape koreografi i gruppe?',
        solution: 'Fordeler med gruppekoreografi: 1) Flere ideer og perspektiver, 2) Kan lage interessante formasjoner og dynamikk, 3) Sosialt og gøy å skape sammen, 4) Lærer samarbeid. Utfordringer: 1) Må bli enige - kan ta tid, 2) Ulike ferdighetsnivåer, 3) Alle må lære samme bevegelser, 4) Må koordinere og synkronisere, 5) Krever god kommunikasjon, 6) Logistikk (når kan alle møtes?). Løsninger: Tålmodighet, demokratiske prosesser, klare ansvarsfordelinger, respekt for alle innspill.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-4-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel improvisjonsøvelse som kan hjelpe noen å bli mer komfortabel med å skape dans.',
        solution: 'Enkel improvisjonsøvelse: "Følelse-kort". Skriv ulike følelser på lapper (glede, tristhet, sinne, nysgjerrighet, frykt, forvirring). 1) Trekk en lapp, 2) Dans fritt til musikk og uttrykk den følelsen i 30-60 sekunder, 3) Ikke tenk for mye, la kroppen reagere, 4) Ingen ser på eller dømmer (eller gjør det i gruppe hvor alle danser samtidig), 5) Bytt lapp og gjenta. Denne øvelsen hjelper med å: Koble følelser til bevegelse, Slå av den indre kritikeren, Utforske ulike bevegelseskvaliteter, Bygge selvtillit.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_6_5: TextbookChapter = {
  id: 'kroppsoving-vg1-6-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.5',
  title: 'Bevegelse til musikk og aerobics',
  description: 'Gruppetrening, koordinasjon og rytmisk bevegelse',
  estimatedMinutes: 45,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-5-intro',
      type: 'text',
      content: `# Bevegelse til musikk og aerobics

Bevegelse til musikk kombinerer dans og trening. Aerobics, Zumba, gruppetimer og andre former bruker musikk for å gjøre trening morsomt og motiverende. Disse aktivitetene utvikler kondisjon, koordinasjon og musikalitet samtidig som de gir sosial tilhørighet.

I dette kapittelet skal vi utforske ulike former for rytmisk gruppetrening og hvordan musikk gjør bevegelse mer engasjerende.`
    },
    {
      id: 'kroppsoving-vg1-6-5-def1',
      type: 'definition',
      title: 'Aerobics',
      content: 'Kondisjonstrening til musikk med fokus på store muskelgrupper og vedvarende bevegelse. Utviklet på 1980-tallet av Jane Fonda og Jackie Sorensen.'
    },
    {
      id: 'kroppsoving-vg1-6-5-aerobics',
      type: 'text',
      content: `## Klassisk aerobics

Aerobics er rytmisk gruppetrening til musikk, ofte med en instruktør.

**Grunnleggende bevegelser:**
- March (marsj på stedet)
- Step-touch
- Knee lift (knelftøft)
- Kick
- Grapevine
- V-step
- Jumping jack

**Treningsstruktur:**
1. **Oppvarming (5-10 min):** Rolig start, øke puls gradvis
2. **Kardiotrening (20-30 min):** Høyere intensitet, vedvarende bevegelse
3. **Styrke (10-15 min):** Øvelser for spesifikke muskelgrupper
4. **Nedtrapping (5-10 min):** Senke puls, tøying

**Intensitetsnivåer:**
- **Low impact:** Én fot alltid i bakken
- **High impact:** Hopping og løfting
- **Mixed impact:** Veksler mellom
- **Step aerobics:** Bruker step-platform

**Fordeler:**
- Kardiovaskulær helse
- Koordinasjon
- Sosialt og motiverende
- Tilgjengelig for mange nivåer`
    },
    {
      id: 'kroppsoving-vg1-6-5-def2',
      type: 'definition',
      title: 'Kardiovaskulær trening',
      content: 'Trening som øker hjertefrekvens over tid og styrker hjerte og lunger. Også kalt kondisjonstrening eller cardio.'
    },
    {
      id: 'kroppsoving-vg1-6-5-zumba',
      type: 'text',
      content: `## Zumba og dansebasert trening

Zumba er en latinsk-inspirert dansetrening skapt av Alberto "Beto" Perez i Colombia på 1990-tallet.

**Karakteristikker:**
- Latinamerikansk musikk (salsa, merengue, reggaeton)
- Dansetrinn inspirert fra ulike kulturer
- Party-atmosfære
- Improvisasjon velkommen

**Andre dansebaserte treningsformer:**
- **BollyX:** Bollywood-inspirert
- **Sh'Bam:** Poppmusikk og enkle trinn
- **Dancehall Fitness:** Karibisk dans
- **K-pop Dance Workout:** Koreanske poptrinn

**Fordeler:**
- Føles ikke som "trening"
- Kulturell utforskning
- Selvsikkerhet og uttrykk
- Høy kalorieforbrenning
- Inkluderende miljø`
    },
    {
      id: 'kroppsoving-vg1-6-5-def3',
      type: 'definition',
      title: 'Gruppetrening',
      content: 'Organisert treningsaktivitet med instruktør og flere deltakere, ofte til musikk. Gir struktur, motivasjon og sosial tilhørighet.'
    },
    {
      id: 'kroppsoving-vg1-6-5-moderne',
      type: 'text',
      content: `## Moderne gruppetreningsformer

**HIIT (High-Intensity Interval Training):**
- Korte, intense intervaller
- Aktive pauser
- Kombinasjon av styrke og cardio
- Ofte til musikk med sterk beat

**LES MILLS-programmer:**
- **BodyPump:** Vekttrening til musikk
- **BodyCombat:** Kampsport-inspirert
- **BodyJam:** Urban dans
- **RPM/Spinning:** Sykling innendørs

**Barre:**
- Ballett-inspirerte bevegelser
- Kombinerer styrke, fleksibilitet, balanse
- Ofte til klassisk eller moderne musikk

**Dans Cardio:**
- Koreograferte rutiner
- Ulike dansesjangre
- Fokus på moro og uttrykk

**Tabata:**
- 20 sekunder intensivt, 10 sekunder pause
- 8 runder per øvelse
- Kan kombineres med musikk`
    },
    {
      id: 'kroppsoving-vg1-6-5-example1',
      type: 'example',
      title: 'Eksempel: Planlegge en enkel aerobics-sekvens',
      problem: 'Du skal lede en 5-minutters aerobics-sekvens for en gruppe. Hvordan bygger du den opp?',
      solution: `**5-minutters aerobics-sekvens:**

**0:00-1:00 - Oppvarming:**
- March (marsj på stedet): 16 counts
- Step-touch til side: 16 counts
- Knee lift: 8 høyre, 8 venstre

**1:00-3:00 - Kardio (øk intensitet):**
- Grapevine høyre og venstre: 4 ganger hver
- Kick front: 8 høyre, 8 venstre
- Jumping jack: 16
- Gjenta sekvensen 2 ganger

**3:00-4:30 - Høy intensitet:**
- V-step: 8 ganger
- Jump rope (hoppe tau): 16
- Burpee modifisert eller squat jumps: 8

**4:30-5:00 - Nedtrapping:**
- Step-touch, senke tempo
- March med armstrekk
- Dyp pust

**Musikk:** 130-140 BPM, pop eller dance`
    },
    {
      id: 'kroppsoving-vg1-6-5-def4',
      type: 'definition',
      title: 'Kue (cue)',
      content: 'Verbale eller visuelle signaler instruktøren gir for å fortelle deltakerne hva som kommer. "4 mer, så bytter vi!"'
    },
    {
      id: 'kroppsoving-vg1-6-5-musikk',
      type: 'text',
      content: `## Musikkens rolle i bevegelse

**Hvorfor musikk motiverer:**
- Distraherer fra anstrengelse
- Gir rytme å følge
- Setter stemning
- Bygger energi
- Skaper fellesskap

**Velge musikk:**
- **Tempo (BPM):** 
  - Oppvarming: 120-130 BPM
  - Kardio: 130-150 BPM
  - High intensity: 140-160 BPM
- **Energi:** Velg sanger som gir motivasjon
- **Variasjon:** Ulike sjangre holder interessen
- **Beat:** Tydelig rytme hjelper koordinasjon

**Musikk og intensitet:**
- Raskere musikk = høyere intensitet naturlig
- Pauser i musikken = aktive pauser
- Crescendo = bygg intensitet
- Musikkbyte = bytt øvelse

**Legale hensyn:**
- TONO-avgift for offentlig bruk
- Streamingstjenester i gruppetimer
- Respekter opphavsrett`
    },
    {
      id: 'kroppsoving-vg1-6-5-def5',
      type: 'definition',
      title: 'BPM (Beats Per Minute)',
      content: 'Måleenhet for tempo i musikk. Antall slag per minutt. Viktig for å matche musikk til ønsket treningsintensitet.'
    },
    {
      id: 'kroppsoving-vg1-6-5-tips',
      type: 'text',
      content: `## Tips for suksess i gruppetrening

**For deltakere:**
- Start på ditt nivå (modifiser om nødvendig)
- Fokuser på egen opplevelse, ikke sammenlign
- Hydrering er viktig
- Hør på kroppen - ta pauser ved behov
- Ha det gøy - det er lov å le!

**For instruktører:**
- Varm opp selv før timen
- Gi klare kuer (beskjeder)
- Vis bevegelser tydelig
- Tilby modifikasjoner for ulike nivåer
- Sjekk inn med deltakere
- Vær energisk og motiverende
- Avslutt positivt

**Sikkerhet:**
- Varm alltid opp
- Unngå plutselige, rykkvise bevegelser
- Oppretthold god kroppsholding
- Ikke tøy kalde muskler
- Trapp alltid ned

**Progresjon:**
- Begynn enkelt
- Bygg kompleksitet gradvis
- Vær tålmodig med læringskurven
- Feire fremgang`
    },
    {
      id: 'kroppsoving-vg1-6-5-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom "low impact" og "high impact" aerobics?',
        solution: 'Low impact aerobics er når minst én fot alltid er i kontakt med bakken - ingen hopping. Dette er skånsomt for ledd og passer for nybegynnere, eldre eller personer med skader. High impact innebærer hopping, løfting og begge føtter i luften samtidig - mer intensivt og gir høyere belastning. Mixed impact veksler mellom begge. Low impact kan fortsatt være svært effektiv kondisjonstrening ved å øke tempo eller armarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-5-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex3',
        number: '2',
        type: 'classic',
        task: 'Beskriv strukturen i en typisk aerobics-time.',
        solution: 'En typisk aerobics-time har følgende struktur: 1) Oppvarming (5-10 min): Rolige bevegelser for gradvis å øke puls og varme opp muskler, 2) Kardiotrening (20-30 min): Høyere intensitet med vedvarende bevegelse for å trene kondisjonen, 3) Styrkedel (10-15 min): Øvelser rettet mot spesifikke muskelgrupper, 4) Nedtrapping (5-10 min): Senke pulsen gradvis og tøying av muskler som er brukt. Total varighet ofte 45-60 minutter.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-5-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex4',
        number: '3',
        type: 'classic',
        task: 'Hva er Zumba og hvordan skiller det seg fra tradisjonell aerobics?',
        solution: 'Zumba er latinsk-inspirert dansetrening skapt i Colombia på 1990-tallet. Forskjeller fra aerobics: 1) Musikk: Primært latinamerikansk (salsa, merengue, reggaeton) vs. pop/dance i aerobics, 2) Stil: Mer dans-fokusert med hoftearbeid og kultur-spesifikke bevegelser vs. fitness-bevegelser i aerobics, 3) Atmosfære: Party-følelse med improvisasjon velkommen vs. mer strukturert i aerobics, 4) Undervisning: Mindre verbale kuer, mer "følg meg" vs. tydelige instruksjoner i aerobics. Begge gir god kondisjonstrening!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-5-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex2',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er musikk viktig i bevegelsesbasert trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre grunner',
            solution: 'Musikk er viktig fordi: 1) Den distraherer fra anstrengelse og gjør treningen lettere å gjennomføre, 2) Gir rytme og struktur å følge, 3) Setter stemning og bygger energi, 4) Motiverer og inspirerer, 5) Skaper fellesskap når alle beveger seg til samme musikk. Riktig tempo (BPM) kan også naturlig regulere treningsintensitet.'
          }
        ],
        solution: 'Musikk motiverer, gir rytme, bygger energi og skaper fellesskap i trening.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-5-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvilket tempo (BPM) passer best til ulike deler av en treningstime?',
        subTasks: [
          {
            label: 'a',
            task: 'Match tempo til fase',
            solution: 'Oppvarming: 120-130 BPM (roligere tempo for gradvis oppstart), Kardiotrening: 130-150 BPM (vedvarende energi), High intensity: 140-160 BPM (høy puls og intensitet), Nedtrapping/tøying: Under 120 BPM (ro ned). Høyere BPM gir naturlig høyere intensitet.'
          }
        ],
        solution: 'Tempo (BPM) skal matche intensiteten i treningsfasen.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-5-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvilke råd vil du gi til noen som skal delta på sin første gruppetreningstime?',
        solution: 'Råd for første gangetter: 1) Kom tidlig og presenter deg for instruktør, si at du er ny, 2) Plasser deg midt i rommet (ikke bak, ikke foran) så du ser og høres, 3) Start på ditt nivå - ikke stress med å holde følge med alle, 4) Ta pauser når du trenger - det er helt greit, 5) Ha med vann og drikk underveis, 6) Fokuser på egen opplevelse, ikke sammenlign med andre, 7) Det er lov å le av seg selv, 8) Modifiser øvelser om nødvendig, 9) Vær tålmodig - det blir lettere, 10) Ha det gøy!',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const CHAPTER_KROPPSOVING_VG1_6_6: TextbookChapter = {
  id: 'kroppsoving-vg1-6-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6.6',
  title: 'Dansens kulturelle mangfold',
  description: 'Verdensmusikk, tradisjoner, identitet og dans som kulturuttrykk',
  estimatedMinutes: 45,
  competenceGoals: ['trene på og skape nye varianter av lek, bevegelsesaktivitet og dans sammen med andre'],
  content: [
    {
      id: 'kroppsoving-vg1-6-6-intro',
      type: 'text',
      content: `# Dansens kulturelle mangfold

Dans er universell - alle kulturer har dans som del av sitt uttrykk. Samtidig er dans unik for hver kultur, formet av historie, geografi, tro og sosiale strukturer. I dette kapittelet skal vi utforske hvordan dans fungerer som kulturuttrykk, identitetsmarkør og bro mellom mennesker.

Dans er mer enn bevegelse - det er levende kulturarv.`
    },
    {
      id: 'kroppsoving-vg1-6-6-def1',
      type: 'definition',
      title: 'Kulturell dans',
      content: 'Dans som er dypt forankret i en spesifikk kulturs tradisjoner, ritualer og identitet. Ofte overført fra generasjon til generasjon.'
    },
    {
      id: 'kroppsoving-vg1-6-6-funksjoner',
      type: 'text',
      content: `## Dans som kulturelt uttrykk

**Sosiale funksjoner:**
- **Fellesskap:** Bygge og opprettholde samhørighet
- **Feiringer:** Bryllup, festivaler, høytider
- **Ritualer:** Religiøse seremonier, overgangsriter
- **Kommunikasjon:** Fortelle historier, bevare minner

**Identitetsfunksjoner:**
- **Kulturell tilhørighet:** "Dette er hvem vi er"
- **Generasjonskontinuitet:** Knytte fortid til nåtid
- **Motstand:** Bevare kultur under undertrykkelse
- **Stolthet:** Feire kulturell arv

**Kunstneriske funksjoner:**
- **Estetikk:** Skjønnhet og uttrykk
- **Kreativitet:** Utvikle og fornye former
- **Underholdning:** Glede og moro
- **Profesjonalitet:** Dans som yrke`
    },
    {
      id: 'kroppsoving-vg1-6-6-def2',
      type: 'definition',
      title: 'Immateriell kulturarv',
      content: 'Levende tradisjoner som dans, musikk, håndverk og muntlige fortellinger. Vedlikeholdes gjennom praksis og overføring, ikke fysiske objekter.'
    },
    {
      id: 'kroppsoving-vg1-6-6-eksempler',
      type: 'text',
      content: `## Dans fra hele verden

**Afrika:**
- **Afrikansk dans:** Polyrhythmic (flere rytmer), jordforbindelse, isolasjoner
- **Gumboot:** Sør-Afrika, rytmiske støvelbevegelser
- **Afrobeat:** Moderne fusjon av tradisjonell og urban

**Asia:**
- **Indisk klassisk:** Bharatanatyam, Kathak (mudras, uttrykk)
- **Kinesisk:** Løvedans, viftedans
- **Indonesisk:** Balinesiske danser (presis, detaljert)
- **Japansk:** Butoh (avantgarde), Bon Odori (festivaldans)

**Latin-Amerika:**
- **Salsa:** Cuba/Puerto Rico, pardans
- **Samba:** Brasil, karneval
- **Tango:** Argentina, lidenskap og samspill
- **Capoeira:** Brasil, kampsport-dans hybrid

**Europa:**
- **Flamenc:** Spania, dramatisk, fotarbeid
- **Irsk step:** Stiv overkropp, komplekst fotarbeid
- **Folkedanser:** Varierer per land og region

**Midt-Østen:**
- **Magdans (belly dance):** Isolerte hofterevegelser
- **Dabke:** Levantinsk linjedans

**Oseania:**
- **Hula:** Hawaii, fortellerdan s
- **Haka:** Māori, krigsdans
- **Pacific Islander:** Tahitiansk, samoanst (kraftfulle hofter)`
    },
    {
      id: 'kroppsoving-vg1-6-6-def3',
      type: 'definition',
      title: 'Kulturell appropriasjon',
      content: 'Når elementer fra en kultur tas ut av kontekst og brukes av andre uten forståelse eller respekt. Viktig å unngå ved å lære om og hedre kilden.'
    },
    {
      id: 'kroppsoving-vg1-6-6-example1',
      type: 'example',
      title: 'Eksempel: Dans som motstandsform',
      problem: 'Hvordan har dans blitt brukt som motstand mot undertrykkelse?',
      solution: `**Historiske eksempler:**

**1. Capoeira (Brasil):**
- Afrikanske slaver skjulte kampteknikker som dans
- Overtøkkelse forbød kampsport, men ikke dans
- Bevarte både kultur og selvforsvar

**2. Hiphop (USA):**
- Afroamerikansk ungdom i Bronx
- Kreativt uttrykk i møte med fattigdom og diskriminering
- "Battles" erstattet gjenggvold

**3. Samiske joik og dans:**
- Undertrykt av kristningen
- Bevart i det skjulte
- Nå del av revitalisering av samisk kultur

**4. Palestinsk dabke:**
- Marker identitet og motstand
- Feirer tilhørighet til land
- Bevarer kultur under okkupasjon

Dans gir stemme til de som er undertrykt.`
    },
    {
      id: 'kroppsoving-vg1-6-6-globalisering',
      type: 'text',
      content: `## Dans i en globalisert verden

**Fusjon og utveksling:**
- Danseformer møtes og blandes
- Ny kreativitet oppstår
- Grenser mellom stiler viskes ut
- "World Dance" som kategori

**Utfordringer:**
- Risiko for misforståelse eller appropriasjon
- Tap av kontekst og mening
- Kommersialisering
- Overfladisk behandling

**Muligheter:**
- Kulturell forståelse og respekt
- Kreativ innovasjon
- Globale fellesskap
- Tilgjengeliggjøring

**Respektfull tilnærming:**
- Lær om kulturell kontekst
- Hedre kilden og historien
- Ikke reduser til "eksotisk"
- Støtt kulturbærere økonomisk
- Vær ydmyk og nysgjerrig`
    },
    {
      id: 'kroppsoving-vg1-6-6-def4',
      type: 'definition',
      title: 'Kulturell kompetanse',
      content: 'Evnen til å forstå, kommunisere med og interagere effektivt med mennesker fra ulike kulturer. Inkluderer kunnskap, bevissthet og ferdigheter.'
    },
    {
      id: 'kroppsoving-vg1-6-6-norge',
      type: 'text',
      content: `## Kulturelt mangfold i Norge

**Norsk folkedansarv:**
- Springar, pols, reinlender
- Regionale variasjoner
- Hallingkast (akrobatisk solo)
- Levende tradisjon i mange bygder

**Samisk dans og joik:**
- Tradisjonell dans til joik
- Viktig del av samisk identitet
- Gjenoppliving etter undertrykkelse
- Moderne samisk dans utvikles

**Innvandrerkulturer:**
- Pakistanske/indiske danser (bhangra, klassisk)
- Afrikanske dansegrupper
- Latinamerikanske dansmiljøer
- Tyrkiske/kurdiske folkedanser
- Arabiske danseformer

**Flerkulturell dans i Norge:**
- Festivaler som feirer mangfold
- Interkulturelle danseprosjekter
- Fusion av norsk og andre tradisjoner
- Dans som integreringsarena`
    },
    {
      id: 'kroppsoving-vg1-6-6-def5',
      type: 'definition',
      title: 'Kulturell revitalisering',
      content: 'Prosessen med å gjenopplive og styrke kulturelle praksiser som har vært undertrykt eller er i ferd med å forsvinne.'
    },
    {
      id: 'kroppsoving-vg1-6-6-tips',
      type: 'text',
      content: `## Hvordan engasjere med kulturell dans

**Lær med respekt:**
- Forstå kulturell kontekst
- Lær fra autentiske kilder
- Anerkjenn opphav
- Ikke reduser til kostymer og klisjeer

**Utforsk mangfold:**
- Delta på multikulturelle festivaler
- Ta timer i ulike danseformer
- Se forestillinger fra hele verden
- Snakk med dansere om deres kulturarv

**Støtt kulturbærere:**
- Gå på forestillinger
- Anbefal autentiske lærere
- Del kunnskap med andre
- Vær ambassadør for respekt

**Reflekter:**
- Hva lærer dansen meg om kulturen?
- Hvilke verdier formidles?
- Hvordan kan jeg hedre denne formen?
- Hva kan jeg lære til mitt eget liv?

**Del gjerne:**
- Men med anerkjennelse
- Med forståelse
- Uten å gjøre krav på "eierskap"
- Med ydmykhet`
    },
    {
      id: 'kroppsoving-vg1-6-6-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med at dans er "immateriell kulturarv"?',
        solution: 'Immateriell kulturarv er levende tradisjoner som overføres fra generasjon til generasjon gjennom praksis, ikke gjennom fysiske objekter. Dans er immateriell fordi den eksisterer i kroppslige bevegelser, kunnskap og fremføring - ikke i gjenstander. Den må læres, praktiseres og videreføres aktivt for å overleve. Eksempler: Norsk springar, samisk joik-dans, indisk klassisk dans. UNESCO anerkjenner immateriell kulturarv som viktig å bevare.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-6-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex2',
        number: '2',
        type: 'classic',
        task: 'Gi eksempler på hvordan dans fungerer som kulturelt uttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre funksjoner',
            solution: 'Dans som kulturelt uttrykk: 1) Sosial funksjon - bygger fellesskap ved feiringer, bryllup og festivaler, 2) Identitetsfunksjon - markerer kulturell tilhørighet og stolthet ("dette er hvem vi er"), 3) Kommunikasjonsfunksjon - forteller historier, bevarer minner og overføre verdier, 4) Rituell funksjon - del av religiøse og spirituelle seremonier. Dans kan også være motstand, bevaring under undertrykkelse.'
          }
        ],
        solution: 'Dans har mange kulturelle funksjoner: sosiale, identitet, kommunikasjon og ritual.',
        allowsUpload: false,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-6-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er kulturell appropriasjon og hvorfor er det problematisk i dans?',
        solution: 'Kulturell appropriasjon er når elementer fra en kultur (spesielt marginaliserte kulturer) tas ut av kontekst og brukes av andre uten forståelse, respekt eller anerkjennelse. I dans er det problematisk når: 1) Danseformer reduseres til kostymer og overfladiske bevegelser, 2) Kulturell kontekst og mening fjernes, 3) Folk tjener på andres kulturarv uten å gi kreditt, 4) Det forsterker stereotypier, 5) Kulturbærere ikke får anerkjennelse. Løsning: Lær med respekt, anerkjenn kilde, forstå kontekst, støtt autentiske lærere.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-6-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex4',
        number: '4',
        type: 'classic',
        task: 'Velg en danseform fra en annen kultur enn din egen og beskriv den kort.',
        solution: 'Eksempel - Capoeira (Brasil): Capoeira er en afro-brasiliansk kunstform som kombinerer kampsport, dans, akrobatikk og musikk. Den oppsto blant afrikanske slaver i Brasil som måtte skjule kamptrening som dans. Utøves i en roda (sirkel) hvor to dansere/kjempere beveger seg til berimbau-musikk. Karakteriseres av fluide, akrobatiske bevegelser, sparker, feint og spill. I dag praktiseres over hele verden som dans, sport og kulturuttrykk. Representerer motstand, frihet og kulturell stolthet. (Elevens egne valg aksepteres)',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-6-6-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan dans bidra til interkulturell forståelse?',
        solution: 'Dans kan bidra til interkulturell forståelse ved: 1) Å gi innsikt i andre kulturers verdier og historie gjennom kroppslig erfaring, 2) Bygge broer mellom mennesker uten ord - et universelt språk, 3) Skape respekt når man lærer om kontekst og betydning, 4) Bryte ned stereotypier gjennom genuine møter, 5) Feire mangfold og likeverd, 6) Skape arenaer hvor folk fra ulike kulturer samarbeider, 7) Gjøre det abstrakte konkret - "føle" en kultur. Dans som fellesskap fremmer empati og nysgjerrighet.',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    },
    {
      id: 'kroppsoving-vg1-6-6-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-6-ex6',
        number: '6',
        type: 'classic',
        task: 'Beskriv dansetradisjoner fra minst to ulike kulturer representert i Norge.',
        solution: 'Eksempler: 1) Norsk folkedans (springar/pols): Kraftig roterende pardans i 3/4-takt med asymmetrisk rytme, danses til hardingfele. Viktig på leikarringer og ved feiringer. Representerer norsk bygdekultur. 2) Pakistansk/indisk dans (bhangra): Energisk dans fra Punjab, opprinnelig høstfest-dans. Karakteristiske bevegelser med skuldre og armer. Danses ved bryllup og Vaisakhi. 3) Samisk dans til joik: Tradisjonell dans til samisk vokalmusikk, undertrykt tidligere, nå revitalisert. Viktig identitetsmarkør. (Andre eksempler: somalisk dans, tyrkisk halay, arabisk dabke)',
        allowsUpload: true,
        allowsCanvasDrawing: false
      }
    }
  ],
  exercises: []
};

export const KROPPSOVING_VG1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG1_5_1,
  CHAPTER_KROPPSOVING_VG1_5_2,
  CHAPTER_KROPPSOVING_VG1_5_3,
  CHAPTER_KROPPSOVING_VG1_5_4,
  CHAPTER_KROPPSOVING_VG1_5_5,
  CHAPTER_KROPPSOVING_VG1_5_6,
  CHAPTER_KROPPSOVING_VG1_5_7,
  CHAPTER_KROPPSOVING_VG1_6_1,
  CHAPTER_KROPPSOVING_VG1_6_2,
  CHAPTER_KROPPSOVING_VG1_6_3,
  CHAPTER_KROPPSOVING_VG1_6_4,
  CHAPTER_KROPPSOVING_VG1_6_5,
  CHAPTER_KROPPSOVING_VG1_6_6,
];

/**
 * Tekstbok innhold for Norsk 10. klasse - Del 6 (Kapittel 8.1-8.6)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 6 dekker medier og kritisk lesing: medielandskapet, nyhetsanalyse,
 * kildekritikk, sosiale medier, reklame, propaganda, ytringsfrihet og journalistikk.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1: Medielandskapet i Norge
// LK20: Utforske og vurdere hvordan digitale medier påvirker kommunikasjon
//        og samfunnsdeltaking
// ============================================================================

export const CHAPTER_NORSK_10_8_1: TextbookChapter = {
  id: 'norsk-10-8-1',
  courseId: 'norsk-10',
  chapterNumber: '8.1',
  title: 'Medielandskapet i Norge',
  description: 'Lær om det norske medielandskapet, forskjellen mellom redaktørstyrte og ikke-redaktørstyrte medier, medienes rolle i demokratiet, og hvordan medielandskapet har endret seg med digitaliseringen.',
  estimatedMinutes: 70,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier påvirker og endrer språk og kommunikasjon',
    'gjøre rede for medienes rolle i demokratiet og vurdere medieinnhold kritisk',
    'orientere seg i det norske medielandskapet og forstå forskjellen mellom ulike medietyper',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-1-intro',
      type: 'text' as const,
      content: `## Medielandskapet i Norge: Fra avis til algoritme

Forestill deg en vanlig morgen. Du våkner, tar opp telefonen og scroller gjennom nyhetsvarslene. En overskrift fra VG, en video fra NRK, et innlegg fra en influencer, en tweet fra en politiker, en TikTok-video med «breaking news». Innen du har kommet deg ut av sengen, har du allerede konsumert innhold fra fem helt forskjellige medietyper.

Men har du noen gang stoppet opp og tenkt: **Hvem står bak det du leser? Hvem bestemmer hva du ser? Og kan du stole på det?**

For bare 30 år siden var medielandskapet i Norge oversiktlig. Du hadde NRK på TV, noen få riksaviser, lokalavisen og radioen. Journalister valgte hva som var nyheter, redaktører bestemte hva som ble trykket, og du som leser hadde et begrenset utvalg.

I dag er situasjonen radikalt annerledes. Alle kan publisere. Alle kan være «medier». En 15-åring med en mobiltelefon kan nå flere mennesker enn Norges største avis. Informasjon spres i lysets hastighet, men det gjør også feilinformasjon, rykter og løgn.

Å navigere i dette landskapet er en av de viktigste ferdighetene du kan lære. I dette kapittelet skal du lære å:
- Forstå det norske medielandskapets struktur og historie
- Skille mellom redaktørstyrte medier og andre informasjonskanaler
- Forstå medienes rolle i et demokrati
- Se hvordan digitaliseringen har endret medievanene våre`,
    },

    // ========== DEFINISJON: MEDIER OG MASSEMEDIER ==========
    {
      id: 'norsk-10-8-1-def-1',
      type: 'definition' as const,
      title: 'Medier og massemedier',
      content: `**Medium** (flertall: **medier**) betyr «mellomledd» — altså noe som formidler informasjon mellom en avsender og en mottaker.

**Massemedier** er medier som når ut til et stort publikum. Tradisjonelle massemedier er aviser, radio og TV. Digitale massemedier inkluderer nettaviser, podkaster, YouTube og sosiale medier.

**Redaktørstyrte medier** er medier som har en ansvarlig redaktør. Redaktøren har ansvaret for at innholdet følger presseetiske regler (Vær Varsom-plakaten). Eksempler: NRK, VG, Aftenposten, Bergens Tidende, Dagbladet.

**Ikke-redaktørstyrte medier** har ingen ansvarlig redaktør. Ingen kontrollerer innholdet før det publiseres. Eksempler: Facebook, TikTok, YouTube, X (tidligere Twitter), blogger, podkaster.

**Viktig forskjell:** I redaktørstyrte medier er det kvalitetskontroll *før* publisering. I ikke-redaktørstyrte medier kommer eventuell kontroll *etter* publisering — ofte for sent.`,
    },

    // ========== EKSEMPEL: REDAKTØRSTYRT VS. IKKE-REDAKTØRSTYRT ==========
    {
      id: 'norsk-10-8-1-example-1',
      type: 'example' as const,
      title: 'Forskjellen i praksis',
      problem: 'En nyhet om at en kjent norsk idrettsutøver er tatt for doping spres på sosiale medier. Hvordan ville nyheten blitt behandlet i et redaktørstyrt medium sammenlignet med et ikke-redaktørstyrt medium?',
      solution: `**Redaktørstyrt medium (f.eks. NRK):**
- En journalist undersøker påstanden og kontakter kilder: idrettsutøverens manager, Antidoping Norge, idrettsforbundet
- Redaktøren vurderer om bevisene er sterke nok til å publisere
- Saken fakta-sjekkes av flere personer
- Idrettsutøveren får mulighet til å uttale seg (tilsvarsretten)
- Artikkelen publiseres med kildeangivelser og forsiktig ordbruk: «ifølge kilder», «skal ha testet positivt»
- Hele prosessen kan ta timer eller dager

**Ikke-redaktørstyrt medium (f.eks. X/Twitter):**
- En anonym bruker poster: «BREAKING: [Navn] tatt for doping!!!»
- Posten deles tusenvis av ganger på minutter
- Ingen har sjekket om det er sant
- Kommentarfeltene fylles med spekulasjoner, sinne og hets
- Hvis nyheten viser seg å være falsk, har skaden allerede skjedd

**Forskjellen:** Redaktørstyrte medier ofrer hastighet for kvalitet. Sosiale medier ofrer kvalitet for hastighet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-1-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-1',
        number: '8.1',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hva er den viktigste forskjellen mellom redaktørstyrte og ikke-redaktørstyrte medier?',
        options: [
          {
            id: 'a',
            text: 'Redaktørstyrte medier publiserer bare på papir, mens ikke-redaktørstyrte medier er digitale',
            isCorrect: false,
            feedback: 'Feil. Mange redaktørstyrte medier er digitale — for eksempel nettavisene til VG og NRK. Forskjellen handler ikke om format.',
          },
          {
            id: 'b',
            text: 'Redaktørstyrte medier har en ansvarlig redaktør som sikrer kvalitetskontroll før publisering',
            isCorrect: true,
            feedback: 'Riktig! Den sentrale forskjellen er at redaktørstyrte medier har en ansvarlig redaktør som kontrollerer innholdet før det publiseres.',
          },
          {
            id: 'c',
            text: 'Ikke-redaktørstyrte medier er alltid gratis, mens redaktørstyrte medier alltid koster penger',
            isCorrect: false,
            feedback: 'Feil. NRK er gratis, og mange blogger og podkaster tjener penger. Forskjellen handler om redaktøransvar, ikke pris.',
          },
          {
            id: 'd',
            text: 'Redaktørstyrte medier er alltid objektive, mens ikke-redaktørstyrte medier alltid er subjektive',
            isCorrect: false,
            feedback: 'Feil. Ingen medier er «alltid objektive». Redaktørstyrte medier streber etter objektivitet, men har også vinklinger og prioriteringer.',
          },
        ],
        solution: 'Alternativ B er riktig. Kjerneforskjellen er at redaktørstyrte medier har en ansvarlig redaktør som sikrer kvalitetskontroll og følger presseetiske regler.',
      },
    },

    // ========== MEDIENES ROLLE I DEMOKRATIET ==========
    {
      id: 'norsk-10-8-1-demokrati',
      type: 'text' as const,
      content: `## Medienes rolle i demokratiet

Mediene kalles ofte «den fjerde statsmakt». De tre første er Stortinget (lovgivende), regjeringen (utøvende) og domstolene (dømmende). Mediene har ingen formell makt, men de har enorm innflytelse fordi de bestemmer hva folk får vite — og hva de *ikke* får vite.

### Medienes samfunnsoppdrag

I et demokrati har mediene tre viktige oppgaver:

**1. Informasjonsfunksjonen**
Mediene skal informere befolkningen om det som skjer i samfunnet. Uten pålitelig informasjon kan vi ikke ta gode valg — verken som velgere, forbrukere eller samfunnsborgere.

**2. Vaktbikkjefunksjonen**
Mediene skal overvåke makthaverne og avdekke maktmisbruk, korrupsjon og urettferdighet. Undersøkende journalistikk har avslørt politiske skandaler, skattesvindel, overgrep og ulovlig overvåking.

*Eksempler fra Norge:*
- VG avslørt Giske-saken (2017–2018), som handlet om upassende oppførsel fra en toppolitiker
- Aftenposten avdekket at Nav hadde feiltolket EØS-reglene og urettmessig dømt folk (Nav-skandalen, 2019)
- Dagbladet og Bergens Tidende har avslørt dårlige arbeidsforhold i fiskerinæringen

**3. Arenafunksjonen**
Mediene skal være en arena for offentlig debatt. I et demokrati er det viktig at ulike stemmer og synspunkter kommer til orde. Avisdebatter, TV-debatter, kommentarfelt og leserinnlegg er eksempler på dette.

### Pressefrihet og redaktøransvar

Norge har grunnlovsfestet pressefrihet (Grunnloven § 100). Det betyr at mediene har rett til å publisere uten forhåndssensur fra staten. Men med frihet følger ansvar:

- **Vær Varsom-plakaten** er pressens etiske regelverk. Den stiller krav til kilder, rettferdighet, personvern og integritet.
- **Redaktøransvaret** betyr at redaktøren personlig er ansvarlig for alt som publiseres.
- **Pressens Faglige Utvalg (PFU)** behandler klager fra folk som mener at mediene har brutt god presseskikk.`,
    },

    // ========== DEFINISJON: DEN FJERDE STATSMAKT ==========
    {
      id: 'norsk-10-8-1-def-2',
      type: 'definition' as const,
      title: 'Den fjerde statsmakt',
      content: `**Den fjerde statsmakt** er et uformelt begrep for pressen og mediene. Begrepet understreker at mediene har en viktig kontrollfunksjon i demokratiet, selv om de ikke har formell politisk makt.

De fire «statsmaktene»:
1. **Stortinget** — vedtar lover (lovgivende makt)
2. **Regjeringen** — styrer landet (utøvende makt)
3. **Domstolene** — dømmer i rettssaker (dømmende makt)
4. **Mediene** — overvåker makthaverne (den fjerde statsmakt)

Uten frie medier kan makthavere gjøre som de vil uten at noen stiller spørsmål. Derfor er pressefrihet en grunnstein i ethvert demokrati.`,
    },

    // ========== EKSEMPEL: VAKTBIKKJEFUNKSJONEN ==========
    {
      id: 'norsk-10-8-1-example-2',
      type: 'example' as const,
      title: 'Vaktbikkjefunksjonen i praksis: Nav-skandalen',
      content: `I 2019 avdekket norske medier det som ble kalt **Nav-skandalen** — en av de største rettsskandalene i norsk historie.

**Hva skjedde?**
Nav og domstolene hadde i årevis feiltolket EØS-reglene. De mente at mottakere av sykepenger, arbeidsavklaringspenger og pleiepenger ikke hadde lov til å oppholde seg i andre EØS-land mens de mottok ytelsene. Men EØS-reglene ga dem faktisk rett til det.

**Konsekvensene:**
- Minst 85 personer ble urettmessig dømt for trygdesvindel
- Flere ble fengslet for noe som ikke var ulovlig
- Hundrevis fikk urettmessige tilbakebetalingskrav

**Medienes rolle:**
Det var journalister fra flere redaksjoner — Aftenposten, NRK, Dagbladet — som gravde i saken, stilte kritiske spørsmål og holdt presset oppe. Uten mediene kunne feilen ha fortsatt i mange år til.

**Lærdommen:** Dette viser hvorfor vi trenger frie, uavhengige medier som tør å utfordre myndighetene — selv når myndighetene insisterer på at alt er i orden.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-1-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-2',
        number: '8.2',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Medienes tre samfunnsoppgaver i praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord hva som menes med medienes «vaktbikkjefunksjon».',
            solution: 'Vaktbikkjefunksjonen betyr at mediene overvåker makthavere — politikere, bedrifter, organisasjoner — og avslører det hvis de misbruker makt, bryter lover eller handler uetisk. Mediene fungerer som samfunnets «vaktbikkje» ved å stille kritiske spørsmål og grave frem informasjon som makthaverne helst ville holdt skjult.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en nyhetssak du kjenner til der mediene har fylt informasjonsfunksjonen. Forklar hvorfor informasjonen var viktig for samfunnet.',
            solution: 'Eksempel: Medienes dekning av koronapandemien. Det var viktig at folk fikk oppdatert og pålitelig informasjon om smittetall, vaksinering og restriksjoner, slik at de kunne ta informerte valg for å beskytte seg selv og andre.',
          },
          {
            label: 'c',
            task: 'Diskuter: Hva kunne skje i et samfunn der mediene *ikke* er frie til å kritisere makthaverne?',
            solution: 'I et samfunn uten frie medier kan makthavere skjule korrupsjon, maktmisbruk og feilgrep. Befolkningen mister tilgangen til kritisk informasjon og kan ikke holde politikerne ansvarlige. Det svekker demokratiet og øker risikoen for autoritært styre. Historien viser at land uten pressefrihet ofte har høyere korrupsjon og dårligere menneskerettigheter.',
          },
        ],
        solution: 'Mediene har tre funksjoner: informere befolkningen, overvåke makthaverne og skape en arena for offentlig debatt. Alle tre er avgjørende for et fungerende demokrati.',
      },
    },

    // ========== DIGITALISERINGENS PÅVIRKNING ==========
    {
      id: 'norsk-10-8-1-digitalisering',
      type: 'text' as const,
      content: `## Hvordan digitaliseringen endret medielandskapet

Internett og sosiale medier har snudd medielandskapet på hodet. Her er de viktigste endringene:

### Fra «én-til-mange» til «mange-til-mange»

Tradisjonelle medier fungerte som **én-til-mange-kommunikasjon**: Én avsender (avisen, TV-kanalen) sendte et budskap til mange mottakere. Mottakerne kunne ikke svare tilbake.

Sosiale medier er **mange-til-mange-kommunikasjon**: Alle kan være både avsender og mottaker. Du kan lese en nyhet, kommentere den, dele den med dine venner, og lage din egen versjon.

### Ekkokamre og filterbobler

Algoritmene i sosiale medier viser deg innhold som ligner det du allerede liker og er enig i. Over tid kan dette føre til:

**Ekkokammer:** Du omgir deg bare med folk som mener det samme som deg. Du hører dine egne meninger «ekko» tilbake, og tror at alle er enige med deg.

**Filterboble:** Algoritmene filtrerer bort informasjon som utfordrer ditt syn. Du ser ikke motargumentene, andre perspektiver eller alternative nyheter.

**Konsekvensen:** Økt polarisering. Folk som lever i ulike ekkokamre, forstår ikke hverandre lenger. De leser ulike nyheter, ser ulike «fakta» og lever i ulike virkeligheter.

### Medieøkonomi i endring

Digitaliseringen har også endret hvordan mediene tjener penger:

- **Annonseinntektene** har flyttet fra aviser til Google og Facebook/Meta
- Mange aviser har innført **betalingsmurer** — du må betale for å lese
- Gratisinnhold finansieres av **reklame**, noe som påvirker innholdet
- **Klikk-journalistikk** har vokst frem: Overskriftene er laget for å få deg til å klikke, ikke for å informere
- Lokalaviser sliter økonomisk, og mange har lagt ned. Det skaper **hvite flekker** — steder uten journalistisk dekning

### Informasjonsstøy og overbelastning

Vi lever i en tid med mer informasjon enn noensinne, men det betyr ikke at vi er bedre informert. Tvert imot kan **informasjonsstøy** — den enorme mengden innhold vi bombarderes med — gjøre det vanskeligere å skille det viktige fra det uviktige, det sanne fra det usanne.`,
    },

    // ========== DEFINISJON: EKKOKAMMER OG FILTERBOBLE ==========
    {
      id: 'norsk-10-8-1-def-3',
      type: 'definition' as const,
      title: 'Ekkokammer og filterboble',
      content: `**Ekkokammer** er en situasjon der du bare omgir deg med mennesker og medier som bekrefter dine eksisterende meninger. Du hører dine egne synspunkter «ekko» tilbake, og får inntrykk av at alle er enige med deg.

**Filterboble** er et begrep myntet av internettaktivisten Eli Pariser i 2011. Det beskriver hvordan algoritmer i søkemotorer og sosiale medier tilpasser innholdet til dine interesser og preferanser, og dermed filtrerer bort informasjon som ikke passer inn.

**Forskjellen:**
- Et ekkokammer skaper du delvis selv — ved å følge folk du er enig med
- En filterboble skapes av algoritmene — uten at du nødvendigvis er klar over det

**Begge fører til:** Mindre eksponering for andre perspektiver, økt polarisering og svekket evne til kritisk tenkning.`,
    },

    // ========== EKSEMPEL: FILTERBOBLE ==========
    {
      id: 'norsk-10-8-1-example-3',
      type: 'example' as const,
      title: 'Filterboble i praksis',
      problem: 'To elever, Amina og Lars, søker begge etter «klima» på Google. Vil de få de samme resultatene?',
      solution: `**Sannsynligvis ikke.** Google tilpasser søkeresultatene basert på brukerens søkehistorikk, lokasjon, enhetstype og tidligere klikk.

Hvis **Amina** ofte leser artikler om klimaaktivisme og følger miljøorganisasjoner, vil hun trolig få:
- Nyheter om klimaprotester og klimatiltak
- Artikler om fornybar energi og bærekraft
- Innhold fra miljøorganisasjoner

Hvis **Lars** ofte leser artikler som er kritiske til klimapolitikk, vil han trolig få:
- Artikler som diskuterer kostnadene ved klimatiltak
- Innhold som stiller spørsmål ved klimamodellene
- Kommentarer fra næringslivsaktører

**Begge tror de har søkt nøytralt.** Men algoritmene har allerede formet virkeligheten de ser. Dette er filterboblen i praksis — og det er derfor kritisk medieforståelse er så viktig.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-1-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-3',
        number: '8.3',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hva er en «filterboble»?',
        options: [
          {
            id: 'a',
            text: 'Et sosialt medium der bare venner kan se innleggene dine',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver, ligner mer på personverninnstillinger. En filterboble handler om at algoritmer filtrerer innholdet du ser.',
          },
          {
            id: 'b',
            text: 'En situasjon der algoritmer tilpasser innholdet du ser basert på dine preferanser, og filtrerer bort andre perspektiver',
            isCorrect: true,
            feedback: 'Riktig! En filterboble oppstår når algoritmer styrer hva du ser, uten at du nødvendigvis er klar over det.',
          },
          {
            id: 'c',
            text: 'Et program som blokkerer reklame på nettsider',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver, er en annonseblokkerer (ad blocker). En filterboble er noe helt annet.',
          },
          {
            id: 'd',
            text: 'En betalingsmur som hindrer deg i å lese nyheter gratis',
            isCorrect: false,
            feedback: 'Feil. En betalingsmur er en økonomisk barriere. En filterboble handler om at algoritmene styrer hvilket innhold du får se.',
          },
        ],
        solution: 'Alternativ B er riktig. En filterboble oppstår når algoritmer personaliserer innholdet ditt og filtrerer bort det som ikke passer med dine vaner og preferanser.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-1-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-4',
        number: '8.4',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Kartlegg ditt eget medieforbuk.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en oversikt over alle mediene du bruker i løpet av en typisk dag. Kategoriser dem som «redaktørstyrt» eller «ikke-redaktørstyrt».',
            solution: 'Eksempel: NRK nettavis (redaktørstyrt), TikTok (ikke-redaktørstyrt), Snapchat (ikke-redaktørstyrt), VG (redaktørstyrt), YouTube (ikke-redaktørstyrt), podkast fra Aftenposten (redaktørstyrt). De fleste ungdommer vil oppdage at de bruker langt mer tid på ikke-redaktørstyrte medier.',
          },
          {
            label: 'b',
            task: 'Anslå hvor mange minutter du bruker på hver mediekategori per dag. Hva overrasker deg?',
            solution: 'Her finnes ikke ett riktig svar, men mange vil oppdage at de bruker betydelig mer tid på ikke-redaktørstyrte medier (sosiale medier) enn på redaktørstyrte medier (nyheter). Refleksjonen bør handle om hva dette betyr for kvaliteten på informasjonen du konsumerer.',
          },
          {
            label: 'c',
            task: 'Vurder: Er du i en filterboble? Begrunn svaret ditt med eksempler fra ditt eget mediebruk.',
            solution: 'De fleste er i en viss grad i en filterboble. Tegn på dette kan være: Du ser mest innhold du er enig i, du møter sjelden motargumenter, For You-siden din på TikTok ligner vennenes. En reflektert elev vil også diskutere hva man kan gjøre for å bryte ut — for eksempel lese medier man vanligvis ikke leser.',
          },
        ],
        solution: 'Denne oppgaven handler om selvinnsikt og refleksjon. Et godt svar viser at du kan skille mellom medietyper og reflektere kritisk over eget mediebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-1-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-5',
        number: '8.5',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Skriv en argumenterende tekst (300–400 ord) der du drøfter følgende påstand:

«Sosiale medier er en trussel mot demokratiet.»

Du skal presentere argumenter *for* og *mot* påstanden, og komme med en egen konklusjon. Bruk fagbegreper fra kapittelet (f.eks. ekkokammer, filterboble, den fjerde statsmakt, vaktbikkjefunksjonen).`,
        hints: [
          'Tenk på både fordeler og ulemper med sosiale medier for demokratiet',
          'Bruk konkrete eksempler — ikke bare skriv generelt',
          'En drøftende tekst krever at du ser saken fra flere sider før du konkluderer',
        ],
        solution: 'En god tekst drøfter både truslene (ekkokamre, feilinformasjon, polarisering, svekkelse av redaktørstyrte medier) og mulighetene (flere stemmer, lavere terskel for deltakelse, raskere informasjonsspredning, mobilisering for gode saker). Konklusjonen bør være nyansert og underbygget med eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-1-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Massemedier:** Medier som når ut til et stort publikum — aviser, TV, radio, nettaviser, sosiale medier
- **Redaktørstyrte medier:** Medier med en ansvarlig redaktør som sikrer kvalitetskontroll (NRK, VG, Aftenposten)
- **Ikke-redaktørstyrte medier:** Medier uten ansvarlig redaktør (Facebook, TikTok, YouTube, blogger)
- **Den fjerde statsmakt:** Medienes uformelle rolle som maktkontrollør i demokratiet
- **Vaktbikkjefunksjonen:** Medienes oppgave med å overvåke og avsløre maktmisbruk
- **Ekkokammer:** Å bare omgi seg med meninger man allerede er enig i
- **Filterboble:** Algoritmenes personalisering som filtrerer bort andre perspektiver
- **Klikk-journalistikk:** Overskrifter designet for å få klikk, ikke for å informere

### Viktige sammenhenger
- Det norske medielandskapet har endret seg dramatisk med digitaliseringen
- Alle kan nå publisere, men det betyr ikke at alt som publiseres er pålitelig
- Medienes tre samfunnsoppgaver — informasjon, vaktbikkje og arena — er viktigere enn noensinne
- Ekkokamre og filterbobler truer vår evne til å forstå ulike perspektiver
- Bevisst og kritisk mediebruk er en nøkkelferdighet i det moderne samfunnet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-1-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-6',
        number: '8.6',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: Sammenlign dekningen av en nyhetssak.

Velg en aktuell nyhetssak og finn den i tre ulike medier: ett redaktørstyrt nyhetsmedium (f.eks. NRK eller Aftenposten), ett sosialt medium (f.eks. TikTok eller X) og én annen kilde (f.eks. en blogg, podkast eller YouTube-kanal).

Skriv en analyse (300–400 ord) der du:
a) Beskriver hvordan saken fremstilles i hvert medium
b) Identifiserer forskjeller i vinkling, kildebruk og språk
c) Vurderer hvilken fremstilling som er mest pålitelig, og begrunn svaret
d) Reflekterer over hvilken fremstilling du så *først*, og hvorfor det kan ha påvirket din oppfatning av saken`,
        hints: [
          'Velg en sak som er dekket i flere medier, slik at du har noe å sammenligne',
          'Legg merke til ordvalg, bilder og tone — ikke bare fakta',
          'Tenk over hvem som er avsender, hva formålet er, og hvem målgruppen er',
        ],
        solution: 'En god analyse viser evne til å sammenligne medier systematisk, bruke fagbegreper som vinkling, kildebruk og redaktøransvar, og reflektere over egen rolle som mottaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-1-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-1-ex-7',
        number: '8.7',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hvilken av medienes tre samfunnsoppgaver handler om at mediene skal avdekke maktmisbruk og korrupsjon?',
        options: [
          {
            id: 'a',
            text: 'Informasjonsfunksjonen',
            isCorrect: false,
            feedback: 'Feil. Informasjonsfunksjonen handler om å gi befolkningen nyheter og informasjon. Det du beskriver, er vaktbikkjefunksjonen.',
          },
          {
            id: 'b',
            text: 'Arenafunksjonen',
            isCorrect: false,
            feedback: 'Feil. Arenafunksjonen handler om at mediene skal være en arena for offentlig debatt. Å avdekke maktmisbruk er vaktbikkjefunksjonen.',
          },
          {
            id: 'c',
            text: 'Vaktbikkjefunksjonen',
            isCorrect: true,
            feedback: 'Riktig! Vaktbikkjefunksjonen innebærer at mediene overvåker makthavere og avdekker maktmisbruk, korrupsjon og urettferdighet.',
          },
          {
            id: 'd',
            text: 'Underholdningsfunksjonen',
            isCorrect: false,
            feedback: 'Feil. Underholdning er ikke en av medienes tre sentrale samfunnsoppgaver. Det riktige svaret er vaktbikkjefunksjonen.',
          },
        ],
        solution: 'Alternativ C er riktig. Vaktbikkjefunksjonen handler om at mediene skal avdekke maktmisbruk og holde makthaverne ansvarlige.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Massemedier', definition: 'Medier som når ut til et stort publikum, som aviser, TV, radio og nettaviser' },
    { term: 'Redaktørstyrte medier', definition: 'Medier med en ansvarlig redaktør som sikrer kvalitetskontroll før publisering' },
    { term: 'Ikke-redaktørstyrte medier', definition: 'Medier uten ansvarlig redaktør, der innhold publiseres uten forhåndskontroll' },
    { term: 'Den fjerde statsmakt', definition: 'Medienes uformelle rolle som maktkontrollør i demokratiet' },
    { term: 'Vaktbikkjefunksjonen', definition: 'Medienes oppgave med å overvåke og avsløre maktmisbruk hos makthavere' },
    { term: 'Ekkokammer', definition: 'En situasjon der du bare omgir deg med meninger du allerede er enig i' },
    { term: 'Filterboble', definition: 'Algoritmenes personalisering som filtrerer bort innhold som ikke matcher dine preferanser' },
    { term: 'Vær Varsom-plakaten', definition: 'Pressens etiske regelverk som stiller krav til journalistisk praksis' },
  ],
  nextChapter: 'norsk-10-8-2',
};

// ============================================================================
// KAPITTEL 8.2: Nyhetsanalyse og kildekritikk
// LK20: Vurdere kilders relevans og troverdighet og vise til kilder i
//        egne tekster
// ============================================================================

export const CHAPTER_NORSK_10_8_2: TextbookChapter = {
  id: 'norsk-10-8-2',
  courseId: 'norsk-10',
  chapterNumber: '8.2',
  title: 'Nyhetsanalyse og kildekritikk',
  description: 'Lær å analysere nyhetsartikler systematisk, vurdere kilders troverdighet, gjennomskue feilinformasjon og desinformasjon, og bruke TONE-metoden for kildekritikk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'vurdere kilders relevans og troverdighet og vise til kilder i egne tekster',
    'lese kritisk og vurdere teksters troverdighet ved å bruke kunnskap om kilder og kildebruk',
    'gjenkjenne og vurdere retoriske virkemidler og argumentasjon i sakprosa',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-2-intro',
      type: 'text' as const,
      content: `## Nyhetsanalyse og kildekritikk: Kan du stole på det du leser?

Du scroller gjennom nyhetsfeeden din og ser en overskrift: **«Ny studie: Mobilbruk gjør deg dummere!»** Du kjenner en uro. Er det sant? Bør du legge bort telefonen? Du klikker og leser artikkelen. Den er skrevet av en journalist du ikke kjenner, i et nettmagasin du aldri har sett før. Artikkelen viser til en «studie», men uten å oppgi navn på forskerne eller hvor studien er publisert.

Er dette en troverdig nyhet? Eller er det noe som er blåst opp for å få klikk?

Å kunne svare på slike spørsmål er en av de viktigste ferdighetene du kan ha som samfunnsborger i det 21. århundret. Vi lever i en tid der informasjon er overalt — men der kvaliteten varierer enormt. Du trenger verktøy for å skille godt fra dårlig, sant fra usant, nyansert fra villedende.

I dette kapittelet skal du lære å:
- Analysere nyhetsartikler systematisk
- Vurdere kilders troverdighet
- Forstå forskjellen mellom feilinformasjon og desinformasjon
- Bruke TONE-metoden for kildekritikk
- Gjennomskue manipulasjonsteknikker i nyhetsformidling`,
    },

    // ========== DEFINISJON: KILDE OG KILDEKRITIKK ==========
    {
      id: 'norsk-10-8-2-def-1',
      type: 'definition' as const,
      title: 'Kilde og kildekritikk',
      content: `En **kilde** er opphavet til informasjon. I nyhetssammenheng kan en kilde være:
- En person (vitne, ekspert, politiker, talsmann)
- Et dokument (rapport, statistikk, rettsprotokoll, brev)
- En organisasjon (Statistisk sentralbyrå, Folkehelseinstituttet, FN)
- En annen mediekilde (en annen avis, et nyhetsbyrå)

**Kildekritikk** er å vurdere en kildes troverdighet, pålitelighet og relevans. Du stiller spørsmål som:
- Hvem er kilden? Hva er bakgrunnen deres?
- Har kilden førstehåndskunnskap, eller gjenforteller de noe?
- Har kilden noe å tjene på at du tror på dem?
- Støttes informasjonen av andre, uavhengige kilder?

**Primærkilde:** En kilde som gir deg informasjon direkte fra opphavet. Eksempel: Forskeren som selv har gjennomført studien.

**Sekundærkilde:** En kilde som gjenforteller informasjon fra andre. Eksempel: En journalist som skriver om forskerens studie.

**Huskeregel:** Jo nærmere du er primærkilden, jo mer pålitelig er informasjonen — som regel.`,
    },

    // ========== EKSEMPEL: PRIMÆR- OG SEKUNDÆRKILDE ==========
    {
      id: 'norsk-10-8-2-example-1',
      type: 'example' as const,
      title: 'Fra primærkilde til «stille telefon»',
      content: `Se for deg denne kjeden:

1. **Primærkilde:** En forsker publiserer en studie: «Elever som bruker mobiltelefon mer enn 4 timer daglig utenom skolearbeid, skårer i gjennomsnitt 7 % lavere på konsentrasonstester.»

2. **Sekundærkilde 1 (nyhetsbyrå):** Reuters skriver: «Studie viser sammenheng mellom høyt mobilbruk og lavere konsentrasjon hos elever.»

3. **Sekundærkilde 2 (norsk avis):** VG skriver: «Ny studie: Mobilen ødelegger konsentrasjonen til norske elever.»

4. **Sekundærkilde 3 (nettmagasin):** Et nettmagasin skriver: «Mobilbruk gjør deg dummere!»

5. **Sosiale medier:** Noen deler overskriften fra nettmagasinet med kommentaren: «Visste det! Mobilen er gift for hjernen!»

**Legg merke til hva som skjer:**
- Studien sa «sammenheng» — ikke «årsak». VG endret det til «ødelegger». Nettmagasinet sa «gjør deg dummere». Personen på sosiale medier sa «gift for hjernen».
- For hvert ledd i kjeden ble budskapet litt mer forenklet, litt mer dramatisk og litt mer feil.
- Dette er en form for «stille telefon» — og det er derfor du alltid bør forsøke å finne primærkilden.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-2-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-1',
        number: '8.8',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?',
        options: [
          {
            id: 'a',
            text: 'En primærkilde er alltid skriftlig, mens en sekundærkilde er muntlig',
            isCorrect: false,
            feedback: 'Feil. Begge kan være skriftlige eller muntlige. Forskjellen handler om nærhet til opphavet.',
          },
          {
            id: 'b',
            text: 'En primærkilde er alltid mer troverdig enn en sekundærkilde',
            isCorrect: false,
            feedback: 'Nesten, men ikke helt. Primærkilder er *som regel* mer pålitelige, men ikke alltid. En primærkilde kan lyve eller ha skjulte motiver.',
          },
          {
            id: 'c',
            text: 'En primærkilde gir informasjon direkte fra opphavet, mens en sekundærkilde gjenforteller informasjon fra andre',
            isCorrect: true,
            feedback: 'Riktig! En primærkilde er nærmest opphavet (f.eks. forskeren selv), mens en sekundærkilde gjenforteller (f.eks. journalisten som skriver om forskningen).',
          },
          {
            id: 'd',
            text: 'En primærkilde er offentlig, mens en sekundærkilde er privat',
            isCorrect: false,
            feedback: 'Feil. Begge kan være offentlige eller private. Forskjellen handler om nærhet til den opprinnelige informasjonen.',
          },
        ],
        solution: 'Alternativ C er riktig. Primærkilder gir informasjon direkte fra opphavet, sekundærkilder gjenforteller fra andre kilder.',
      },
    },

    // ========== TONE-METODEN ==========
    {
      id: 'norsk-10-8-2-tone',
      type: 'text' as const,
      content: `## TONE-metoden for kildekritikk

Når du vurderer troverdigheten til en kilde, kan du bruke **TONE-metoden**. Den gir deg fire spørsmål å stille:

### T — Troverdighet
- Hvem er avsenderen? Er det en kjent og pålitelig aktør?
- Har avsenderen kompetanse på området? En lege som uttaler seg om medisin er mer troverdig enn en influencer som gjør det samme.
- Er mediet redaktørstyrt? Følger det presseetiske regler?
- Oppgis kildene? Kan du sjekke informasjonen selv?

### O — Objektivitet
- Fremstiller avsenderen saken balansert, eller er det en tydelig vinkling?
- Er det meningsstoff (kommentar, kronikk, leder) eller nyhetsreportasje? Begge har sin plass, men du må vite forskjellen.
- Brukes ladet språk som appellerer til følelsene dine? Ord som «sjokkerende», «skandaløst», «utrolig» er varseltegn.
- Presenteres motargumenter, eller bare én side av saken?

### N — Nøyaktighet
- Er informasjonen presis og konkret? «En ny studie» er vagere enn «en studie fra Universitetet i Oslo publisert i The Lancet i 2024».
- Stemmer tallene? Sjekk om statistikk brukes korrekt — eller om den er tatt ut av kontekst.
- Er det skrivefeil, dårlig språk eller uprofesjonelt design? Det kan tyde på lav kvalitet.
- Bekreftes informasjonen av andre, uavhengige kilder?

### E — Egnethet (relevans)
- Er kilden relevant for det du undersøker?
- Er informasjonen oppdatert? En artikkel fra 2015 om sosiale medier er utdatert.
- Passer kilden til formålet ditt? En Wikipedia-artikkel kan være et godt utgangspunkt, men er ikke nødvendigvis god nok som kilde i en fagoppgave.`,
    },

    // ========== DEFINISJON: TONE-METODEN ==========
    {
      id: 'norsk-10-8-2-def-2',
      type: 'definition' as const,
      title: 'TONE-metoden',
      content: `**TONE-metoden** er en systematisk måte å vurdere kilders troverdighet på. Forkortelsen står for:

- **T** = **Troverdighet** — Hvem er avsenderen? Er kilden pålitelig og kompetent?
- **O** = **Objektivitet** — Er fremstillingen balansert, eller finnes det en vinkling?
- **N** = **Nøyaktighet** — Er informasjonen presis, korrekt og etterprøvbar?
- **E** = **Egnethet** — Er kilden relevant og oppdatert for det du undersøker?

TONE-metoden hjelper deg med å stille de riktige spørsmålene når du møter ny informasjon. Den erstatter ikke din egen dømmekraft, men gir deg en struktur for kritisk tenkning.`,
    },

    // ========== EKSEMPEL: TONE I PRAKSIS ==========
    {
      id: 'norsk-10-8-2-example-2',
      type: 'example' as const,
      title: 'TONE-metoden i praksis',
      problem: 'Vurder følgende kilde ved hjelp av TONE-metoden: En bloggpost med tittelen «5 matvarer som GARANTERT kurerer forkjølelsen din» skrevet av en livsstilsblogger uten medisinsk utdanning.',
      solution: `**T — Troverdighet:**
Avsenderen er en livsstilsblogger uten medisinsk kompetanse. Det er ikke et redaktørstyrt medium, og det er ingen referanser til forskning. **Lav troverdighet.**

**O — Objektivitet:**
Tittelen bruker ladet språk («GARANTERT kurerer»), noe seriøs helseinformasjon aldri ville gjort. Det er ingen motforestillinger eller nyanser. **Svak objektivitet.**

**N — Nøyaktighet:**
Ingen kilder oppgis. Ordbruken «garantert» er upresist — ingen matvare kan garantere at du blir frisk. Påstandene er ikke etterprøvbare. **Lav nøyaktighet.**

**E — Egnethet:**
Hvis du vil vite om matvarers effekt på forkjølelse, bør du bruke helsekilder som Helsenorge.no, Folkehelseinstituttet eller fagfellevurdert forskning — ikke en livsstilsblogg. **Lav egnethet.**

**Konklusjon:** Denne kilden scorer lavt på alle fire kriteriene. Du bør *ikke* bruke den som grunnlag for helsebeslutninger eller i en fagoppgave.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-2-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-2',
        number: '8.9',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Bruk TONE-metoden til å vurdere følgende kilder. Gi en kort begrunnelse for hver bokstav.',
        subTasks: [
          {
            label: 'a',
            task: 'En artikkel fra NRK.no om nye regler for skoleeksamen, med uttalelser fra utdanningsministeren og Elevorganisasjonen.',
            solution: 'T: Høy — NRK er et redaktørstyrt medium med strenge presseetiske regler. O: Høy — flere parter er representert (ministeren og elevene). N: Trolig høy — NRK er kjent for faktasjekking og presisjon. E: Høy — relevant og oppdatert kilde om skolepolitikk. Konklusjon: En meget troverdig kilde.',
          },
          {
            label: 'b',
            task: 'Et anonymt innlegg på Reddit som påstår at en bestemt skole har dårlig læringsmiljø, med påstanden «alle vet at det er sånn».',
            solution: 'T: Lav — anonym avsender, ingen mulighet til å vurdere kompetanse eller troverdighet. O: Lav — ensidig og subjektiv fremstilling uten dokumentasjon. N: Lav — ingen kilder, upresist («alle vet»). E: Lav — anonyme forumposter er ikke pålitelige kilder. Konklusjon: Kan ikke brukes som kilde.',
          },
          {
            label: 'c',
            task: 'En rapport fra Statistisk sentralbyrå (SSB) om ungdoms medievaner, publisert i 2024.',
            solution: 'T: Svært høy — SSB er Norges offisielle statistikkbyrå med strenge kvalitetskrav. O: Høy — SSB presenterer data uten politisk vinkling. N: Svært høy — SSB bruker anerkjente metoder og publiserer detaljert metodeinformasjon. E: Høy — relevant og oppdatert. Konklusjon: En utmerket kilde.',
          },
        ],
        solution: 'NRK-artikkelen og SSB-rapporten er troverdige kilder. Reddit-innlegget er upålitelig på grunn av anonymitet, mangel på dokumentasjon og subjektiv fremstilling.',
      },
    },

    // ========== FEILINFORMASJON OG DESINFORMASJON ==========
    {
      id: 'norsk-10-8-2-feilinfo',
      type: 'text' as const,
      content: `## Feilinformasjon og desinformasjon

Ikke alt som er feil, er løgn. Og ikke alt som er sant, er hele sannheten. Det er viktig å skille mellom ulike typer upålitelig informasjon:

### Tre kategorier

**Feilinformasjon (misinformation):**
Feil informasjon som spres uten ond hensikt. Avsenderen tror det er sant, men tar feil.
- *Eksempel:* En bestemor deler en artikkel om at 5G-stråling er farlig. Hun mener det godt og tror det er sant, men artikkelen er basert på feil grunnlag.

**Desinformasjon (disinformation):**
Feil informasjon som spres med vilje for å villede. Avsenderen *vet* at det er feil, men sprer det likevel — for å påvirke meninger, skape splittelse eller tjene penger.
- *Eksempel:* Et nettsted publiserer bevisst falske nyheter om en politiker før et valg, for å ødelegge politikerens omdømme.

**Malinformasjon:**
Sann informasjon som brukes i en skadelig kontekst — for eksempel ved å ta den ut av sammenheng, eller lekke privat informasjon.
- *Eksempel:* Noen publiserer et bilde av en politiker fra en privat fest for å sverte vedkommende. Bildet er ekte, men brukt med ond hensikt.

### Varseltegn — hvordan gjennomskue usann informasjon

Her er konkrete tegn som bør få deg til å stoppe opp:

1. **Overskriften er ekstrem:** «SJOKKERENDE!», «Du vil IKKE TRO hva som skjedde!», «Myndighetene vil IKKE at du skal vite dette!»
2. **Ingen kilder oppgis:** Artikkelen sier «forskere har funnet ut at...» uten å si hvem eller hvor.
3. **Bare én side av saken:** Ingen motargumenter, ingen nyanser, ingen eksperter som er uenige.
4. **Appellerer sterkt til følelser:** Du blir sint, redd, opprørt eller trist — og det virker som om det er hensikten.
5. **Du har aldri hørt om mediet:** Sjekk hvem som står bak. Har de en «om oss»-side? En ansvarlig redaktør?
6. **Ingen andre rapporterer det samme:** Hvis en stor og viktig nyhet *bare* finnes i ett obskurt medium, er det grunn til å være skeptisk.
7. **Dårlig språk og design:** Profesjonelle medier har korrekturlesere og designere. Mange feil tyder på lav kvalitet.`,
    },

    // ========== DEFINISJON: FEILINFORMASJON OG DESINFORMASJON ==========
    {
      id: 'norsk-10-8-2-def-3',
      type: 'definition' as const,
      title: 'Feilinformasjon, desinformasjon og malinformasjon',
      content: `**Feilinformasjon (misinformation):** Usann informasjon som spres utilsiktet. Avsenderen tror det er sant.

**Desinformasjon (disinformation):** Usann informasjon som spres med vilje for å villede, manipulere eller skade.

**Malinformasjon:** Sann informasjon som brukes ut av kontekst eller med skadelig hensikt.

**Huskeregel:**
- Feilinformasjon = **feil** + **god tro**
- Desinformasjon = **feil** + **ond hensikt**
- Malinformasjon = **sant** + **ond hensikt**

Alle tre er skadelige, men desinformasjon er den farligste fordi den er bevisst og strategisk.`,
    },

    // ========== EKSEMPEL: GJENNOMSKUE FALSKE NYHETER ==========
    {
      id: 'norsk-10-8-2-example-3',
      type: 'example' as const,
      title: 'Avsløre en falsk nyhet steg for steg',
      problem: 'Du ser følgende overskrift delt på sosiale medier: «Norske forskere bekrefter: Sjokolade gjør deg smartere!» Artikkelen er fra nettstedet «helsesannheter.com». Hvordan undersøker du om dette er troverdig?',
      solution: `**Steg 1: Sjekk avsenderen**
- Hvem er «helsesannheter.com»? Har de en «om oss»-side? En ansvarlig redaktør? Ingen informasjon — dårlig tegn.

**Steg 2: Les forbi overskriften**
- Artikkelen sier at «en studie fra NTNU viste at flavonoider i sjokolade *kan* ha positiv effekt på kognitive funksjoner hos eldre deltakere i kontrollerte tester». Det er noe helt annet enn «sjokolade gjør deg smartere».

**Steg 3: Finn primærkilden**
- Søk etter studien fra NTNU. Den viser en svak korrelasjon hos en liten gruppe eldre, og forskerne selv skriver at «ytterligere forskning er nødvendig».

**Steg 4: Sjekk andre medier**
- Ingen seriøse medier (NRK, VG, Aftenposten) har dekket denne «nyheten» med den vinklingen.

**Steg 5: Bruk TONE**
- T: Lav (ukjent nettsted, ingen redaktør). O: Lav (villedende overskrift). N: Lav (forvrenger forskningen). E: Lav for helseinformasjon.

**Konklusjon:** Nyheten er feilinformasjon. Den er basert på reell forskning, men forvrenger resultatene til det ugjenkjennelige for å få klikk.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-2-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-3',
        number: '8.10',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
        options: [
          {
            id: 'a',
            text: 'Feilinformasjon spres muntlig, desinformasjon spres skriftlig',
            isCorrect: false,
            feedback: 'Feil. Begge kan spres på alle måter. Forskjellen handler om hensikten bak spredningen.',
          },
          {
            id: 'b',
            text: 'Feilinformasjon er usann informasjon spredt i god tro, desinformasjon er usann informasjon spredt med vilje for å villede',
            isCorrect: true,
            feedback: 'Riktig! Den avgjørende forskjellen er hensikten. Feilinformasjon er utilsiktet, desinformasjon er bevisst villedning.',
          },
          {
            id: 'c',
            text: 'Feilinformasjon finnes bare i sosiale medier, desinformasjon finnes bare i aviser',
            isCorrect: false,
            feedback: 'Feil. Begge kan finnes i alle typer medier. Forskjellen handler om hensikt, ikke medium.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — ordene betyr det samme',
            isCorrect: false,
            feedback: 'Feil. Forskjellen er viktig: Feilinformasjon er utilsiktet feil, desinformasjon er bevisst løgn. Hensikten er avgjørende.',
          },
        ],
        solution: 'Alternativ B er riktig. Feilinformasjon spres uten ond hensikt (man tror det er sant), mens desinformasjon spres bevisst for å villede.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-2-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-4',
        number: '8.11',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Kategoriser følgende situasjoner som feilinformasjon, desinformasjon eller malinformasjon. Begrunn svaret ditt.',
        subTasks: [
          {
            label: 'a',
            task: 'En elev deler en artikkel om at en bestemt vaksine er farlig. Artikkelen er basert på en studie som senere er trukket tilbake, men eleven vet ikke dette.',
            solution: 'Feilinformasjon. Eleven sprer usann informasjon, men i god tro — hen tror det er sant og vet ikke at studien er tilbaketrukket.',
            multipleChoiceOptions: ['Feilinformasjon', 'Desinformasjon', 'Malinformasjon'],
          },
          {
            label: 'b',
            task: 'En politisk aktør oppretter falske sosiale medier-profiler som sprer oppdiktede skandaler om en politisk motstander før et valg.',
            solution: 'Desinformasjon. Informasjonen er bevisst falsk, og formålet er å manipulere velgernes oppfatning. Det er strategisk villedning.',
            multipleChoiceOptions: ['Desinformasjon', 'Feilinformasjon', 'Malinformasjon'],
          },
          {
            label: 'c',
            task: 'Noen publiserer en ekte, men gammel video av en offentlig person i en situasjon som er tatt helt ut av kontekst, for å få det til å se ut som om det skjedde nylig.',
            solution: 'Malinformasjon. Videoen er ekte (sant), men brukes bevisst ut av kontekst (ond hensikt) for å skade vedkommendes omdømme.',
            multipleChoiceOptions: ['Malinformasjon', 'Feilinformasjon', 'Desinformasjon'],
          },
        ],
        solution: 'a) Feilinformasjon (usann + god tro), b) Desinformasjon (usann + ond hensikt), c) Malinformasjon (sant + ond hensikt).',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-2-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-5',
        number: '8.12',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Finn en nyhetsartikkel fra et norsk nettmedium og gjør en full kildekritisk analyse ved hjelp av TONE-metoden.

Skriv en analyse (250–350 ord) der du:
a) Oppgir artikkelens tittel, medium og publiseringsdato
b) Vurderer artikkelen med TONE-metoden (én begrunnelse for hver bokstav)
c) Identifiserer hvilke kilder artikkelen bruker, og vurderer om de er primær- eller sekundærkilder
d) Konkluderer med en samlet vurdering av artikkelens troverdighet`,
        hints: [
          'Velg en artikkel som er lang nok til at du har noe å analysere — en kort nyhetsnotis gir lite å jobbe med',
          'Husk at selv troverdige medier kan ha svake artikler — og omvendt',
          'Les hele artikkelen, ikke bare overskriften',
        ],
        solution: 'En god analyse bruker TONE-metoden systematisk, skiller mellom primær- og sekundærkilder, og gir en nyansert konklusjon som viser at du kan vurdere troverdighet på flere nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-2-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Kildekritikk:** Systematisk vurdering av kilders troverdighet, pålitelighet og relevans
- **Primærkilde:** Informasjon direkte fra opphavet (f.eks. forskeren som gjennomførte studien)
- **Sekundærkilde:** Gjenfortelling av andres informasjon (f.eks. journalisten som skriver om studien)
- **TONE-metoden:** Troverdighet, Objektivitet, Nøyaktighet, Egnethet — fire kriterier for kildevurdering
- **Feilinformasjon:** Usann informasjon spredt uten ond hensikt
- **Desinformasjon:** Usann informasjon spredt med vilje for å villede
- **Malinformasjon:** Sann informasjon brukt i en skadelig kontekst

### Viktige sammenhenger
- Jo lenger fra primærkilden, jo større er risikoen for at informasjonen er forvrengt
- TONE-metoden gir deg en systematisk måte å vurdere kilder på
- Det er viktig å skille mellom feilinformasjon (god tro) og desinformasjon (ond hensikt)
- Kritisk lesing handler ikke om å mistenke alt, men om å stille de riktige spørsmålene
- Å lese flere kilder om samme sak gir et mer fullstendig bilde`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-2-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-6',
        number: '8.13',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: «Stille telefon»-eksperiment.

Velg en aktuell nyhetssak. Spor den fra sosiale medier tilbake til primærkilden. Skriv en rapport (300–400 ord) der du:
a) Viser kjeden av kilder — fra der du først så nyheten til primærkilden
b) Beskriver hva som endret seg i hvert ledd (ordvalg, nyanser, konklusjoner)
c) Vurderer om nyheten ble mer eller mindre presis for hvert ledd
d) Reflekterer over hva dette eksperimentet lærte deg om kildekritikk`,
        hints: [
          'Start med noe du har sett på sosiale medier og jobb deg bakover',
          'Bruk søkemotorer for å finne den opprinnelige kilden (forskning, rapport, uttalelse)',
          'Sammenlign ordvalget nøye — små endringer i ordbruk kan endre hele meningen',
        ],
        solution: 'En god rapport viser at du kan spore informasjon tilbake til kilden, identifisere endringer i hvert ledd, og reflektere over hvordan informasjon forvrenger seg gjennom gjentatte gjenfortellinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-2-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-2-ex-7',
        number: '8.14',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Du leser en nyhetsartikkel som sier «forskere har funnet at...», men uten å oppgi hvilke forskere, hvilket universitet eller hvor studien er publisert. Hva bør du gjøre?',
        options: [
          {
            id: 'a',
            text: 'Stole på artikkelen — journalister sjekker alltid kildene sine',
            isCorrect: false,
            feedback: 'Feil. Selv om mange journalister er grundige, bør du alltid sjekke kilder selv — spesielt når de er uklare.',
          },
          {
            id: 'b',
            text: 'Ignorere artikkelen helt — den er helt sikkert falsk',
            isCorrect: false,
            feedback: 'Ikke nødvendigvis. Artikkelen kan inneholde noe sannhet, men mangelen på kilder gjør den vanskelig å vurdere. Du bør undersøke videre.',
          },
          {
            id: 'c',
            text: 'Forsøke å finne primærkilden selv ved å søke etter studien, og bruke TONE-metoden til å vurdere troverdigheten',
            isCorrect: true,
            feedback: 'Riktig! Når en artikkel mangler kildehenvisninger, bør du forsøke å finne primærkilden selv og vurdere troverdigheten kritisk.',
          },
          {
            id: 'd',
            text: 'Dele artikkelen videre med kommentaren «dette er kanskje sant»',
            isCorrect: false,
            feedback: 'Feil. Å dele usikker informasjon — selv med forbehold — bidrar til å spre potensielt uriktig informasjon.',
          },
        ],
        solution: 'Alternativ C er riktig. Du bør alltid forsøke å finne primærkilden og bruke kildekritiske verktøy som TONE-metoden.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av kilders troverdighet, pålitelighet og relevans' },
    { term: 'Primærkilde', definition: 'Kilde som gir informasjon direkte fra opphavet' },
    { term: 'Sekundærkilde', definition: 'Kilde som gjenforteller informasjon fra andre kilder' },
    { term: 'TONE-metoden', definition: 'Systematisk kildevurdering: Troverdighet, Objektivitet, Nøyaktighet, Egnethet' },
    { term: 'Feilinformasjon', definition: 'Usann informasjon spredt utilsiktet, i god tro' },
    { term: 'Desinformasjon', definition: 'Usann informasjon spredt med vilje for å villede eller manipulere' },
    { term: 'Malinformasjon', definition: 'Sann informasjon brukt ut av kontekst eller med skadelig hensikt' },
    { term: 'Klikk-journalistikk', definition: 'Journalistikk der overskriftene er laget for å generere klikk framfor å informere' },
  ],
  prevChapter: 'norsk-10-8-1',
  nextChapter: 'norsk-10-8-3',
};

// ============================================================================
// KAPITTEL 8.3: Sosiale medier og påvirkning
// LK20: Utforske og reflektere over hvordan tekster framstiller virkeligheten,
//        og vurdere teksters troverdighet
// ============================================================================

export const CHAPTER_NORSK_10_8_3: TextbookChapter = {
  id: 'norsk-10-8-3',
  courseId: 'norsk-10',
  chapterNumber: '8.3',
  title: 'Sosiale medier og påvirkning',
  description: 'Lær om hvordan sosiale medier påvirker deg, algoritmenes makt, influencerkultur, kroppspress, identitet på nett, og strategier for å ta kontroll over ditt eget mediebruk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og reflektere over hvordan tekster framstiller virkeligheten',
    'vurdere estetiske virkemidler i sammensatte tekster og reflektere over hvordan de påvirker mottakeren',
    'reflektere over egen og andres bruk av sosiale medier og konsekvensene av digital kommunikasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-3-intro',
      type: 'text' as const,
      content: `## Sosiale medier og påvirkning: Hvem styrer feeden din?

Du åpner TikTok «bare for å sjekke noe». Førti minutter senere legger du fra deg telefonen. Hva skjedde? Du ble sugd inn — av en algoritme som kjenner deg bedre enn du kanskje kjenner deg selv.

Sosiale medier er ikke bare plattformer der du deler bilder og chatter med venner. De er nøye designede systemer som konkurrerer om én ting: **oppmerksomheten din**. Jo lenger du scroller, jo mer penger tjener plattformen. Derfor bruker de verdens smarteste ingeniører og psykologer for å gjøre appene så vanedannende som mulig.

Men sosiale medier er også noe mer: De er en arena for identitet, selvuttrykk og tilhørighet. De gir deg muligheten til å finne likesinnede, uttrykke deg kreativt og delta i samfunnsdebatten. Spørsmålet er ikke om du skal bruke sosiale medier — det gjør nesten alle — men **hvordan** du bruker dem, og **hvor bevisst** du er på påvirkningen.

I dette kapittelet skal du lære å:
- Forstå hvordan algoritmer styrer hva du ser
- Gjenkjenne påvirkningsteknikker i sosiale medier
- Reflektere over influencerkultur og kommersielt innhold
- Vurdere forholdet mellom virkelighet og iscenesettelse
- Utvikle strategier for bevisst mediebruk`,
    },

    // ========== DEFINISJON: ALGORITME ==========
    {
      id: 'norsk-10-8-3-def-1',
      type: 'definition' as const,
      title: 'Algoritme og oppmerksomhetsøkonomi',
      content: `En **algoritme** er i denne sammenhengen et sett med regler og beregninger som bestemmer hva du ser i feeden din. Algoritmene analyserer din atferd — hva du liker, kommenterer, deler, hvor lenge du ser på noe — og bruker dette til å vise deg mer av det du reagerer på.

**Oppmerksomhetsøkonomi** er et begrep som beskriver at oppmerksomheten din er den verdifulle ressursen som sosiale medier konkurrerer om. Plattformene tjener penger på reklame, og jo lenger du er på plattformen, jo mer reklame ser du.

**Dopamin-loop:** Sosiale medier utnytter hjernens belønningssystem. Varsler, likes, kommentarer og «infinite scroll» gir deg små dopaminstøt som får deg til å komme tilbake igjen og igjen. Dette er bevisst design — ikke tilfeldighet.

**Engasjement:** Algoritmene prioriterer innhold som skaper **engasjement** — altså reaksjoner. Forskning viser at innhold som vekker sterke følelser (sinne, frykt, opprørthet, begeistring) får mer engasjement enn nøkternt, nyansert innhold. Det betyr at algoritmene systematisk favoriserer det ekstreme framfor det balanserte.`,
    },

    // ========== EKSEMPEL: ALGORITMEN ==========
    {
      id: 'norsk-10-8-3-example-1',
      type: 'example' as const,
      title: 'Slik fungerer algoritmen',
      content: `**Scenario:** Sara ser en TikTok-video om en ny diett. Hun ser videoen ferdig, men liker den ikke og kommenterer ikke. Likevel dukker det opp flere lignende videoer de neste dagene.

**Hvorfor?** Fordi algoritmen registrerte at Sara så hele videoen. Det tolkes som engasjement — selv om Sara bare var nysgjerrig eller usikker. Algoritmen «tenker»: «Hun likte dette innholdet. Vis henne mer.»

**Konsekvensen:** Sara får en feed full av diettvideoer, slankeråd og «before-and-after»-bilder. Hun begynte aldri aktivt å søke etter dette — algoritmen førte henne dit gradvis.

**Slik bryter du ut:**
- Trykk «Ikke interessert» på innhold du ikke vil se mer av
- Søk aktivt etter annet innhold for å «trene» algoritmen
- Vær bevisst på at det du stopper og ser på, former feeden din
- Bruk tidsbegrensningsfunksjonene som finnes i de fleste apper

**Hovedpoeng:** Du velger ikke bare hva du ser — det du ser, former også hva du tenker og føler. Algoritmene er designet for å holde deg på plattformen, ikke for å gi deg det som er best for deg.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-3-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-1',
        number: '8.15',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hvorfor viser sosiale medier deg innhold som vekker sterke følelser?',
        options: [
          {
            id: 'a',
            text: 'Fordi plattformene ønsker å informere deg om viktige saker',
            isCorrect: false,
            feedback: 'Feil. Plattformene prioriterer ikke informasjonsverdi, men engasjement — fordi engasjement holder deg på plattformen lenger.',
          },
          {
            id: 'b',
            text: 'Fordi følelsesvekkende innhold skaper mer engasjement, og mer engasjement betyr mer tid på plattformen og mer reklameinntekter',
            isCorrect: true,
            feedback: 'Riktig! Sosiale medier tjener penger på oppmerksomheten din. Innhold som vekker sterke følelser holder deg lenger på plattformen.',
          },
          {
            id: 'c',
            text: 'Fordi algoritmene er feil programmert og viser tilfeldig innhold',
            isCorrect: false,
            feedback: 'Feil. Algoritmene er svært nøye programmert — nettopp for å maksimere engasjement. Det er bevisst design.',
          },
          {
            id: 'd',
            text: 'Fordi du selv har bedt om å se følelsesvekkende innhold i innstillingene',
            isCorrect: false,
            feedback: 'Feil. De fleste har ikke endret slike innstillinger. Algoritmene tilpasser seg automatisk basert på din atferd.',
          },
        ],
        solution: 'Alternativ B er riktig. Oppmerksomhetsøkonomien drives av engasjement, og sterke følelser skaper mer engasjement enn saklig innhold.',
      },
    },

    // ========== INFLUENCERKULTUR ==========
    {
      id: 'norsk-10-8-3-influencer',
      type: 'text' as const,
      content: `## Influencerkultur og kommersielt innhold

En **influencer** er en person med mange følgere på sosiale medier som har innflytelse over publikummet sitt. Influencere kan påvirke hva folk kjøper, mener, og til og med hvem de stemmer på.

### Hvordan influencere påvirker deg

Influencere bruker ofte teknikker som skaper en **parasosial relasjon** — du føler at du kjenner dem, at de er en venn, selv om forholdet er ensidig. De deler «hverdagen sin», snakker direkte til kameraet, bruker fornavnet ditt i svar, og skaper en illusjon av nærhet og autentisitet.

Denne opplevde nærheten gjør påvirkningen sterkere. Når en venn anbefaler et produkt, stoler du på det. Når en influencer gjør det, føles det som en venns anbefaling — selv om det egentlig er betalt reklame.

### Merking av reklame

I Norge er det lovpålagt å merke reklame tydelig. Markedsføringsloven krever at kommersielt innhold skal merkes med «annonse» eller «reklame». Men i praksis er grensene ofte uklare:

- **Tydelig merket reklame:** Influenceren skriver «#ad» eller «Annonse» i starten av innlegget
- **Affiliate-lenker:** Influenceren tjener penger hvis du kjøper via deres lenke, noen ganger uten at det er tydelig merket
- **Gratis produkter:** Influenceren har fått produktet gratis og anmelder det positivt, men dette er ikke alltid oppgitt
- **Skjult reklame:** Det mest problematiske: Innholdet er betalt, men fremstår som personlig anbefaling uten merking

### Iscenesettelse av virkeligheten

Det du ser på sosiale medier er nesten alltid **iscenesatt**. Selv innhold som ser spontant og ekte ut, er ofte nøye planlagt:

- Bilder er redigert med filtre, belysning og vinkler
- «Hverdagsøyeblikk» er regissert og filmet flere ganger
- Negative sider av livet er redigert bort
- Livsstilen som vises er ofte urealistisk og utilgjengelig for de fleste

Resultatet er en **forvrengt virkelighet** der alle ser ut til å ha perfekte kropper, perfekte relasjoner og perfekte liv. Forskning viser at eksponering for dette innholdet kan føre til:
- Lavere selvfølelse og kroppspress
- Sammenligningsspiraler («hvorfor ser ikke mitt liv slik ut?»)
- Urealistiske forventninger til eget liv og kropp
- Økt forbruk og materialisme`,
    },

    // ========== DEFINISJON: PARASOSIAL RELASJON ==========
    {
      id: 'norsk-10-8-3-def-2',
      type: 'definition' as const,
      title: 'Parasosial relasjon og iscenesettelse',
      content: `**Parasosial relasjon** er et ensidig forhold der du føler at du kjenner en medieperson (influencer, YouTuber, kjendis), selv om de ikke kjenner deg. Du føler tillit, nærhet og lojalitet — som i et vennskap — men forholdet er asymmetrisk.

**Iscenesettelse** betyr at noe som ser naturlig og ekte ut, egentlig er planlagt og regissert. På sosiale medier er nesten alt iscenesatt i en eller annen grad — fra valg av vinkel og filter til hva som vises og hva som utelates.

**Autentisitet** betyr ekthet og oppriktighet. Mange influencere bygger sin merkevare på å virke «ekte» og «autentiske» — men paradokset er at denne autentisiteten ofte i seg selv er iscenesatt.

**Huskeregel:** Når noe på sosiale medier virker helt naturlig og spontant, er det ofte da det er mest planlagt.`,
    },

    // ========== EKSEMPEL: SKJULT REKLAME ==========
    {
      id: 'norsk-10-8-3-example-2',
      type: 'example' as const,
      title: 'Analyse av et influencer-innlegg',
      problem: 'En influencer poster et bilde på Instagram med teksten: «Elsker den nye smoothie-miksen min! Perfekt start på dagen. Bruk koden SARA20 for 20 % rabatt!» Bildet viser influenceren i et lyst, pent kjøkken med smoothien i forgrunnen. Analyser dette innlegget.',
      solution: `**Er dette reklame?** Ja. Rabattkoden «SARA20» viser at influenceren har en kommersiell avtale med selskapet. Hun tjener sannsynligvis provisjon hver gang noen bruker koden.

**Er det tydelig merket?** Nei. Det står ingen «Annonse» eller «#ad» i innlegget. Innlegget bryter dermed sannsynligvis med markedsføringsloven.

**Påvirkningsteknikker:**
- **Personlig anbefaling:** «Elsker den nye smoothie-miksen min» — det fremstår som en ekte, personlig mening
- **Parasosial relasjon:** Følgerne stoler på henne fordi de «kjenner» henne
- **Visuell iscenesettelse:** Det lyse, pene kjøkkenet signaliserer en drømmelivsstil — og smoothien er en del av den
- **Eksklusivitet:** Rabattkoden gir følgerne en «spesiell» fordel, noe som forsterker lojaliteten
- **Handlingsoppfordring (CTA):** «Bruk koden» — en direkte oppfordring til kjøp

**Hva bør du tenke?** At dette er reklame, uansett om det er merket eller ikke. Influenceren har økonomisk interesse i at du kjøper produktet. Det betyr ikke at smoothie-miksen er dårlig — men det betyr at anbefalingen ikke er nøytral.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-3-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-2',
        number: '8.16',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Analysere influencerinnhold.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et innlegg fra en influencer du følger (eller kjenner til) der du mistenker at det er kommersielt innhold. Beskriv innlegget kort og forklar hva som gjør at du mistenker det er reklame.',
            solution: 'Et godt svar identifiserer konkrete tegn: lenker til nettbutikker, rabattkoder, merkevarer som vises tydelig, overdrevet positivt språk om et spesifikt produkt, eller gjentatte innlegg om samme merke.',
          },
          {
            label: 'b',
            task: 'Forklar hva en «parasosial relasjon» er, og gi et eksempel fra ditt eget mediebruk.',
            solution: 'En parasosial relasjon er et ensidig forhold der du føler at du kjenner en medieperson, selv om de ikke kjenner deg. Eksempel: Å føle sorg når en favorittpodkaster har en dårlig dag, eller å diskutere en YouTubers privatliv som om det var en venns.',
          },
          {
            label: 'c',
            task: 'Diskuter: Bør det være strengere regler for reklamemerking i sosiale medier? Argumenter for eller mot.',
            solution: 'For: Umerket reklame er manipulerende, spesielt overfor unge. Mot: Overregulering kan hemme kreativitet og autentisitet. Et godt svar veier begge sider og tar en begrunnet stilling.',
          },
        ],
        solution: 'Oppgaven handler om å gjenkjenne kommersielle påvirkningsstrategier i sosiale medier og reflektere kritisk over dem.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-3-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-3',
        number: '8.17',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hva er en «parasosial relasjon»?',
        options: [
          {
            id: 'a',
            text: 'Et vennskap mellom to personer som bare kjenner hverandre gjennom sosiale medier',
            isCorrect: false,
            feedback: 'Feil. I et vanlig nettvennskap kjenner begge hverandre. En parasosial relasjon er ensidig — du føler at du kjenner personen, men de kjenner ikke deg.',
          },
          {
            id: 'b',
            text: 'Et ensidig forhold der du føler at du kjenner en medieperson, selv om de ikke kjenner deg',
            isCorrect: true,
            feedback: 'Riktig! En parasosial relasjon er ensidig. Du føler nærhet og tillit til influenceren, men forholdet er ikke gjensidig.',
          },
          {
            id: 'c',
            text: 'En relasjon mellom en influencer og en annonsør',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er en kommersiell avtale. En parasosial relasjon handler om forholdet mellom influenceren og følgerne deres.',
          },
          {
            id: 'd',
            text: 'Et begrep for vennskap som bare eksisterer i kommentarfelt',
            isCorrect: false,
            feedback: 'Feil. Parasosiale relasjoner handler ikke om kommentarfelt, men om det ensidige forholdet mellom en medieperson og deres publikum.',
          },
        ],
        solution: 'Alternativ B er riktig. En parasosial relasjon er et ensidig forhold der publikum føler nærhet til en medieperson som ikke kjenner dem tilbake.',
      },
    },

    // ========== DIGITAL IDENTITET OG SELVPRESENTASJON ==========
    {
      id: 'norsk-10-8-3-identitet',
      type: 'text' as const,
      content: `## Digital identitet og selvpresentasjon

Sosiale medier er ikke bare en kilde til informasjon og underholdning — de er også en arena der du **konstruerer din identitet**. Hvert bilde du poster, hver kommentar du skriver, hver profil du oppretter, er en form for selvpresentasjon.

### Frontstage og backstage

Sosiologen Erving Goffman beskrev allerede på 1950-tallet hvordan mennesker oppfører seg forskjellig i ulike situasjoner. Han brukte teatermetaforer:

**Frontstage** (scenen): Den versjonen av deg selv du viser til andre. Du tilpasser oppførselen din til situasjonen, publikummet og forventningene.

**Backstage** (bak kulissene): Den private versjonen av deg selv, der du slipper rollen og er mer uformell.

På sosiale medier er nesten alt **frontstage**. Du velger nøye hva du viser — de beste bildene, de morsomste øyeblikkene, de mest imponerende prestasjonene. Det som er vanskelig, kjedelig, flaut eller trist, holder du for deg selv.

Problemet oppstår når du **sammenligner din backstage med andres frontstage**. Du ser deres høydepunkter og sammenligner det med din hverdag. Det er som å sammenligne en highlight-reel fra en fotballkamp med din egen treningsøkt i regnvær.

### Digitale fotavtrykk

Alt du gjør på nettet etterlater spor. Disse sporene kalles ditt **digitale fotavtrykk**:

**Aktivt fotavtrykk:** Det du bevisst publiserer — innlegg, bilder, kommentarer, profiler.

**Passivt fotavtrykk:** Det som registreres uten at du aktivt gjør noe — søkehistorikk, lokasjonsdata, hvilke nettsider du besøker, hvor lenge du ser på en video.

Ditt digitale fotavtrykk er varig. Det du publiserer i dag, kan dukke opp igjen om ti år — i en jobbsøknadsprosess, en politisk debatt eller en personlig konflikt. Mange unge har opplevd at gamle innlegg, bilder eller kommentarer har skapt problemer for dem senere.`,
    },

    // ========== DEFINISJON: DIGITALT FOTAVTRYKK ==========
    {
      id: 'norsk-10-8-3-def-3',
      type: 'definition' as const,
      title: 'Digitalt fotavtrykk',
      content: `**Digitalt fotavtrykk** er summen av alle spor du etterlater på nettet. Det inkluderer:

**Aktivt fotavtrykk** — det du bevisst publiserer:
- Innlegg og bilder på sosiale medier
- Kommentarer på nettsider og i forum
- Profiler og brukerkontoer
- E-poster og meldinger

**Passivt fotavtrykk** — det som registreres automatisk:
- Søkehistorikk og nettsidebesøk
- Lokasjonsdata fra telefonen din
- Hvilke apper du bruker og hvor lenge
- Hva du klikker på og hva du scroller forbi

**Viktig:** Ditt digitale fotavtrykk er i praksis permanent. Selv om du sletter noe, kan det allerede være kopiert, screenshottet eller arkivert av andre. Tenk derfor nøye over hva du publiserer.`,
    },

    // ========== EKSEMPEL: FRONTSTAGE VS BACKSTAGE ==========
    {
      id: 'norsk-10-8-3-example-3',
      type: 'example' as const,
      title: 'Frontstage vs. backstage på Instagram',
      content: `**Emils Instagram vs. Emils virkelighet:**

**Frontstage (Instagram):**
- Bilde fra treningsstudioet med teksten «Early bird gets the worm! Treningsøkt nummer 5 denne uken»
- Bilde av en perfekt organisert skrivepult med bøker og kaffe
- Gruppebilde fra fest med venner, alle smiler

**Backstage (virkelighet):**
- Han trente faktisk bare to ganger denne uken, men tok bilde den ene gangen han var tidlig
- Skrivebordet ble ryddet bare for bildet — det er vanligvis rotete
- Rett etter gruppebildet kranglet to av vennene, og stemningen ble dårlig

**Analyse:**
Emil presenterer en **kuratert versjon** av livet sitt. Alt som vises er sant — han *var* på trening, han *har* et skrivebord, han *var* med venner. Men helheten gir et misvisende bilde av livet hans.

**Alle gjør dette.** Det er naturlig å ville vise seg fra sin beste side. Problemet er at når *alle* gjør det, tror *alle* at alle andre har bedre liv enn dem selv.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-3-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-4',
        number: '8.18',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Refleksjon over egen selvpresentasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Tenk over dine siste fem innlegg eller historier på sosiale medier. Hva valgte du å vise? Hva valgte du å *ikke* vise? Beskriv kort forskjellen mellom din «frontstage» og din «backstage».',
            solution: 'Et godt svar viser selvinnsikt og evne til å reflektere over egen selvpresentasjon. Eleven bør identifisere konkrete eksempler på hva de viser og hva de skjuler, og reflektere over hvorfor.',
          },
          {
            label: 'b',
            task: 'Diskuter: Er det problematisk at alle viser en kuratert versjon av livet sitt på sosiale medier? Hvorfor/hvorfor ikke?',
            solution: 'Et godt svar veier både fordeler (det er naturlig å vise seg fra sin beste side, det kan inspirere og motivere) og ulemper (det skaper urealistiske forventninger, sammenligningsspiraler og kroppspress). Konklusjonen bør være nyansert.',
          },
        ],
        solution: 'Oppgaven handler om å bruke Goffmans begreper frontstage/backstage til å analysere egen og andres selvpresentasjon på sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-3-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-5',
        number: '8.19',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Skriv en argumenterende tekst (300–400 ord) der du drøfter følgende problemstilling:

«Bør barn under 16 år ha tilgang til sosiale medier?»

Du skal presentere minst to argumenter for og to argumenter mot, bruke fagbegreper fra kapittelet (algoritme, oppmerksomhetsøkonomi, parasosial relasjon, filterboble, digitalt fotavtrykk), og komme med en begrunnet konklusjon.`,
        hints: [
          'Husk at drøfting betyr at du ser saken fra flere sider',
          'Bruk konkrete eksempler for å underbygge argumentene',
          'Fagbegreper viser at du behersker stoffet — bruk dem naturlig, ikke bare som en liste',
        ],
        solution: 'En god tekst presenterer nyanserte argumenter, bruker relevante fagbegreper naturlig, og konkluderer med en begrunnet mening som viser at eleven har forstått kompleksiteten i problemstillingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-3-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Algoritme:** Beregninger som bestemmer hva du ser i feeden din, basert på din atferd
- **Oppmerksomhetsøkonomi:** Systemet der plattformene tjener penger på oppmerksomheten din
- **Dopamin-loop:** Hjernens belønningssystem som sosiale medier utnytter for å holde deg engasjert
- **Influencer:** Person med mange følgere som har innflytelse over publikummet sitt
- **Parasosial relasjon:** Ensidig forhold der du føler at du kjenner en medieperson
- **Iscenesettelse:** Planlagt innhold som fremstår som naturlig og spontant
- **Frontstage/backstage:** Den offentlige vs. den private versjonen av deg selv
- **Digitalt fotavtrykk:** Alle sporene du etterlater på nettet, både aktivt og passivt

### Viktige sammenhenger
- Algoritmene er designet for å holde deg på plattformen, ikke for å gi deg det beste innholdet
- Influencerkultur er bygget på parasosiale relasjoner og ofte uklare grenser mellom reklame og personlig innhold
- Alle presenterer en kuratert versjon av seg selv — å sammenligne din backstage med andres frontstage er urettferdig
- Ditt digitale fotavtrykk er varig — tenk nøye over hva du publiserer
- Bevisst mediebruk handler om å ta kontroll over algoritmene i stedet for å la dem kontrollere deg`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-3-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-6',
        number: '8.20',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: Digital detox-eksperiment.

Gjennomfør et eksperiment der du begrenser bruken av sosiale medier i tre dager. Skriv en refleksjonstekst (250–350 ord) der du:
a) Beskriver hva du gjorde annerledes i de tre dagene
b) Reflekterer over hvordan det føltes — hva var vanskelig, og hva var positivt?
c) Analyserer hva eksperimentet forteller deg om ditt forhold til sosiale medier
d) Bruker minst tre fagbegreper fra kapittelet i analysen din`,
        hints: [
          'Du trenger ikke kutte ut sosiale medier helt — bare reduser bruken merkbart',
          'Legg merke til øyeblikkene der du automatisk griper etter telefonen — det forteller deg noe om vanene dine',
          'Vær ærlig i refleksjonen — det er mer lærerikt enn å skrive det du tror læreren vil høre',
        ],
        solution: 'En god refleksjonstekst viser selvinnsikt, bruker fagbegreper naturlig, og demonstrerer evne til å analysere egne vaner og reaksjoner kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-3-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-3-ex-7',
        number: '8.21',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hva menes med at sosiale medier utnytter en «dopamin-loop»?',
        options: [
          {
            id: 'a',
            text: 'At sosiale medier inneholder vitamintilskudd som øker dopaminnivået',
            isCorrect: false,
            feedback: 'Feil. Det handler ikke om kjemiske stoffer, men om at sosiale medier er designet for å trigge hjernens belønningssystem gjennom likes, varsler og annet engasjement.',
          },
          {
            id: 'b',
            text: 'At algoritmene gjør deg glad ved å vise bare positivt innhold',
            isCorrect: false,
            feedback: 'Feil. Algoritmene viser ikke bare positivt innhold — de viser innhold som skaper engasjement, også negativt. Dopamin-loopen handler om belønningssystemet.',
          },
          {
            id: 'c',
            text: 'At varsler, likes og nytt innhold gir små belønningssignaler i hjernen som får deg til å komme tilbake igjen og igjen',
            isCorrect: true,
            feedback: 'Riktig! Dopamin-loopen betyr at sosiale medier utnytter hjernens belønningssystem. Hver like, kommentar og varsling gir et lite dopaminstøt som skaper en vane.',
          },
          {
            id: 'd',
            text: 'At du blir avhengig av å trene etter å ha sett treningsvideoer',
            isCorrect: false,
            feedback: 'Feil. Dopamin-loopen handler om selve mekanismen i sosiale medier — ikke om spesifikt innhold som treningsvideoer.',
          },
        ],
        solution: 'Alternativ C er riktig. Sosiale medier utnytter hjernens belønningssystem ved å gi deg små dopaminstøt gjennom varsler, likes og nytt innhold.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Algoritme', definition: 'Beregninger som bestemmer hva du ser i sosiale medier basert på din atferd' },
    { term: 'Oppmerksomhetsøkonomi', definition: 'Systemet der plattformer konkurrerer om oppmerksomheten din for å tjene reklamepenger' },
    { term: 'Influencer', definition: 'Person med mange følgere som har innflytelse over sitt publikum' },
    { term: 'Parasosial relasjon', definition: 'Ensidig forhold der du føler at du kjenner en medieperson som ikke kjenner deg' },
    { term: 'Iscenesettelse', definition: 'Planlagt innhold som fremstår som naturlig og spontant' },
    { term: 'Frontstage/backstage', definition: 'Den offentlige vs. private versjonen av seg selv (Goffmans begreper)' },
    { term: 'Digitalt fotavtrykk', definition: 'Alle sporene du etterlater på nettet, både bevisste og automatiske' },
    { term: 'Dopamin-loop', definition: 'Hjernens belønningssystem som sosiale medier utnytter for å skape vanedannende bruk' },
  ],
  prevChapter: 'norsk-10-8-2',
  nextChapter: 'norsk-10-8-4',
};

// ============================================================================
// KAPITTEL 8.4: Reklame og propaganda
// LK20: Gjenkjenne og vurdere retoriske virkemidler og argumentasjon
//        i ulike typer tekster
// ============================================================================

export const CHAPTER_NORSK_10_8_4: TextbookChapter = {
  id: 'norsk-10-8-4',
  courseId: 'norsk-10',
  chapterNumber: '8.4',
  title: 'Reklame og propaganda',
  description: 'Lær å gjennomskue reklame og propaganda, forstå retoriske påvirkningsteknikker, analysere skjulte budskap, og skille mellom informasjon og manipulasjon.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjenkjenne og vurdere retoriske virkemidler og argumentasjon i ulike typer tekster',
    'utforske og vurdere hvordan ulike medier framstiller virkeligheten',
    'lese og analysere sammensatte tekster kritisk og reflektere over påvirkningskraft',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-4-intro',
      type: 'text' as const,
      content: `## Reklame og propaganda: Kunsten å overtale

Du ser anslagsvis 3 000–5 000 reklamebudskap hver eneste dag. De fleste legger du ikke engang merke til — og det er nettopp poenget. Den beste reklamen er den du ikke oppfatter som reklame. Den glir inn i feeden din, inn i underholdningen din, inn i samtalene dine — uten at du tenker over at noen forsøker å påvirke deg.

Men reklame er bare én form for overtalelse. Gjennom historien har makthavere brukt lignende teknikker for å styre hva folk tenker og mener. Det kalles **propaganda** — og selv om ordet høres gammeldags ut, finnes det i nye former i dag.

Å gjennomskue overtalelse er en livsviktig ferdighet. Ikke fordi all overtalelse er ond, men fordi du fortjener å vite når noen prøver å påvirke deg — slik at du kan ta frie, informerte valg.

I dette kapittelet skal du lære å:
- Forstå forskjellen mellom reklame, PR og propaganda
- Gjenkjenne retoriske påvirkningsteknikker (etos, patos, logos)
- Analysere reklame som sammensatte tekster
- Identifisere propagandateknikker i historisk og moderne kontekst
- Gjennomskue skjulte budskap og manipulasjon`,
    },

    // ========== DEFINISJON: REKLAME, PR OG PROPAGANDA ==========
    {
      id: 'norsk-10-8-4-def-1',
      type: 'definition' as const,
      title: 'Reklame, PR og propaganda',
      content: `**Reklame** er betalt kommunikasjon der en avsender forsøker å selge et produkt, en tjeneste eller en idé. Avsenderen er tydelig (et firma, en organisasjon), og hensikten er kommersiell.

**PR (public relations)** er strategisk kommunikasjon som skal bygge eller beskytte et omdømme. I motsetning til reklame er PR ofte *ikke* tydelig merket — det kan komme i form av pressemeldinger, sponsede arrangementer eller medieutspill som ser ut som nyheter.

**Propaganda** er systematisk spredning av ideer eller informasjon for å påvirke folks meninger og handlinger — ofte med politisk eller ideologisk formål. Propaganda kan bruke sannheter, halvsannheter eller løgner, og appellerer vanligvis sterkt til følelser.

**Forskjellen i korte trekk:**
- **Reklame:** «Kjøp dette produktet» (kommersiell)
- **PR:** «Tenk positivt om oss» (omdømmebygging)
- **Propaganda:** «Tro dette, mene dette, gjør dette» (ideologisk/politisk)

Alle tre bruker **retoriske virkemidler** for å overtale. Teknikkene er de samme — det er formålet og konteksten som er forskjellig.`,
    },

    // ========== RETORIKK: ETOS, PATOS, LOGOS ==========
    {
      id: 'norsk-10-8-4-retorikk',
      type: 'text' as const,
      content: `## Retorikkens verktøykasse: Etos, patos og logos

De retoriske appellformene ble beskrevet av den greske filosofen Aristoteles for over 2 300 år siden — og de er like aktuelle i dag. Alle som forsøker å overtale deg, bruker en eller flere av disse:

### Etos — troverdighetsappellen

**Etos** handler om avsenderens troverdighet. Du lar deg lettere overtale av noen du stoler på, respekterer eller oppfatter som kompetente.

Eksempler i reklame:
- En tannlege anbefaler en tannkrem (ekspertetos)
- Et sertifiseringsmerke som «Svanemerket» eller «Anbefalt av Norges Astma- og Allergiforbund» (organisasjonsetos)
- En idrettsutøver promoterer sportsklær (kjendisethos)
- «9 av 10 kunder anbefaler oss» (sosial bevisetos)

### Patos — følelsesappellen

**Patos** handler om å vekke følelser hos mottakeren. Følelser er kraftige drivere av handling — vi kjøper, stemmer og deler basert på følelser, ofte mer enn på logikk.

Eksempler i reklame:
- Julereklamer med varme familieøyeblikk (nostalgi, kjærlighet)
- Veldedighetsreklamer med bilder av barn i nød (medfølelse, skyld)
- Forsikringsreklamer som viser ulykker (frykt)
- Bilreklamer med frihetsfølelse på åpen vei (frihet, eventyr)

### Logos — fornuftsappellen

**Logos** handler om logikk, fakta og rasjonelle argumenter. Du appellerer til mottakerens fornuft med tall, statistikk og sammenhenger.

Eksempler i reklame:
- «30 % billigere enn konkurrentene» (prisargument)
- «Klinisk testet og dokumentert effekt» (vitenskapelig argument)
- «Brukes av 2 millioner nordmenn» (tallargument)
- «Spar 5 000 kroner i året med vår løsning» (økonomisk argument)

### Kairos — det rette øyeblikket

I tillegg til de tre klassiske appellformene snakker retorikken om **kairos** — å velge riktig tidspunkt for budskapet.

Eksempler: Reklame for solfaktor i juni, influensavaksine i oktober, gaveforslag i november, slankeprodukter i januar. Tidspunktet forsterker budskapet.`,
    },

    // ========== DEFINISJON: ETOS, PATOS, LOGOS ==========
    {
      id: 'norsk-10-8-4-def-2',
      type: 'definition' as const,
      title: 'De retoriske appellformene',
      content: `**Etos** (troverdighetsappell): Overtalelse basert på avsenderens troverdighet, kompetanse eller karakter. «Stol på meg fordi jeg er ekspert/pålitelig/en av dere.»

**Patos** (følelsesappell): Overtalelse basert på å vekke følelser hos mottakeren. «Føl dette — og handle deretter.»

**Logos** (fornuftsappell): Overtalelse basert på logikk, fakta og rasjonelle argumenter. «Se på tallene — dette gir mening.»

**Kairos** (tidspunkt): Å velge det rette øyeblikket for å fremføre budskapet, slik at det treffer mottakeren når de er mest mottakelige.

**I praksis:** De fleste overtalelsesforsøk bruker en kombinasjon av alle tre. En god reklame har en troverdig avsender (etos), vekker følelser (patos) og gir rasjonelle grunner til å handle (logos) — og kommer på riktig tidspunkt (kairos).`,
    },

    // ========== EKSEMPEL: REKLAMEANALYSE ==========
    {
      id: 'norsk-10-8-4-example-1',
      type: 'example' as const,
      title: 'Analyse av en TV-reklame',
      problem: 'Analyser følgende reklame med etos, patos og logos: En reklame for en elektrisk bil viser en familie som kjører gjennom norsk natur en sommerdag. Barna sover fredelig i baksetet, foreldrene smiler til hverandre. En rolig stemme sier: «Med 600 km rekkevidde og Norges beste ladenettverk kjører du lengre — og renere. Valgt til årets bil av Motor.» Skjermen viser prisen: «Fra 399 000 kr.»',
      solution: `**Patos (følelsesappell):**
- Bildet av den lykkelige familien i norsk natur appellerer til følelser som trygghet, kjærlighet og frihet
- Sovende barn = trygghet, foreldrelykke
- Norsk natur = nasjonal stolthet, eventyr, friluftsliv
- Musikk og stemning er designet for å skape varme og lengsel

**Etos (troverdighetsappell):**
- «Valgt til årets bil av Motor» — en ekstern ekspertkilde bekrefter kvaliteten
- Norsk natur antyder at dette er en bil for deg som nordmann
- Rolig, behagelig stemme signaliserer seriøsitet og pålitelighet

**Logos (fornuftsappell):**
- «600 km rekkevidde» — konkret, målbart tall
- «Norges beste ladenettverk» — faktapåstand som kan etterprøves
- «Fra 399 000 kr» — prisen gir mottakeren konkret informasjon for en rasjonell beslutning
- «Renere» — appellerer til miljøbevissthet med et logisk argument

**Kairos (tidspunkt):**
- Reklamen kjøres om sommeren — når folk planlegger bilferie og drømmer om veien

**Samspill:** Reklamen kombinerer alle tre appellformene. Familien og naturen (patos) får deg til å *ønske* bilen. Ekspertprisen og rekkevidden (etos/logos) gir deg *grunner* til å kjøpe den. Prisen (logos) gjør det *mulig* å handle.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-4-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-1',
        number: '8.22',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'En reklame viser en tannlege i hvit frakk som sier: «Jeg anbefaler Whitex tannkrem til alle mine pasienter.» Hvilken retorisk appellform brukes først og fremst?',
        options: [
          {
            id: 'a',
            text: 'Patos — fordi det vekker tillit og varme følelser',
            isCorrect: false,
            feedback: 'Ikke helt. Tillit henger sammen med troverdighet, som er etos. Patos ville vært å vekke sterke følelser som glede, frykt eller medfølelse.',
          },
          {
            id: 'b',
            text: 'Etos — fordi en tannlege er en troverdig ekspert på tannhelse',
            isCorrect: true,
            feedback: 'Riktig! Tannlegen i hvit frakk brukes som ekspertfigur. Vi stoler på anbefalingen fordi avsenderen har faglig troverdighet — det er etos.',
          },
          {
            id: 'c',
            text: 'Logos — fordi det er et logisk argument',
            isCorrect: false,
            feedback: 'Feil. Det er ingen fakta, tall eller logisk resonnement her. Argumentet hviler på tannlegens autoritet — det er etos.',
          },
          {
            id: 'd',
            text: 'Kairos — fordi reklamen vises på riktig tidspunkt',
            isCorrect: false,
            feedback: 'Feil. Kairos handler om tidspunkt, men spørsmålet handler om selve innholdet i reklamen — som er etos (ekspertautoritet).',
          },
        ],
        solution: 'Alternativ B er riktig. Tannlegen er en ekspertfigur som gir produktet troverdighet — et klassisk eksempel på etos.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-4-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-2',
        number: '8.23',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Identifiser appellform i reklameeksempler.',
        subTasks: [
          {
            label: 'a',
            task: 'En veldedighetsreklame viser et underernært barn med store øyne. Teksten lyder: «For 50 kroner i måneden kan du gi Maria mat.» Hvilke appellformer brukes?',
            solution: 'Primært patos (bildet av barnet vekker medfølelse og skyld) kombinert med logos (konkret beløp, «50 kroner i måneden», gjør det enkelt å handle). Barnets navn «Maria» gjør det personlig og forsterker patos.',
            multipleChoiceOptions: ['Patos og logos', 'Bare etos', 'Bare logos', 'Etos og kairos'],
          },
          {
            label: 'b',
            task: '«Norges mest solgte vaskemiddel — brukes av over 1 million husholdninger. Nå 25 % billigere!» Hvilke appellformer brukes?',
            solution: 'Logos (tall og fakta: «over 1 million», «25 % billigere») kombinert med etos (sosialt bevis: Hvis så mange bruker det, må det være bra). Tallene appellerer til fornuften, mens «Norges mest solgte» bygger troverdighet.',
            multipleChoiceOptions: ['Logos og etos', 'Bare patos', 'Patos og kairos', 'Bare logos'],
          },
          {
            label: 'c',
            task: 'En idrettsstjerne holder opp en sportsdrikk og sier: «Dette er hemmeligheten bak mine resultater.» Hvilke appellformer brukes?',
            solution: 'Primært etos (kjendisens troverdighet og suksess gir produktet autoritet) med innslag av patos (vi beundrer idrettsstjernen og ønsker å være som hen). Påstanden «hemmeligheten bak mine resultater» er emosjonell, ikke logisk.',
            multipleChoiceOptions: ['Etos og patos', 'Bare logos', 'Logos og kairos', 'Bare patos'],
          },
        ],
        solution: 'a) Patos og logos, b) Logos og etos, c) Etos og patos. De fleste reklamer kombinerer flere appellformer.',
      },
    },

    // ========== PROPAGANDATEKNIKKER ==========
    {
      id: 'norsk-10-8-4-propaganda',
      type: 'text' as const,
      content: `## Propagandateknikker — fra plakater til algoritmer

Propaganda har eksistert like lenge som makt. Fra antikkens Roma til andre verdenskrig til dagens sosiale medier har makthavere brukt kommunikasjon systematisk for å forme folkemeningen.

### Klassiske propagandateknikker

Disse teknikkene brukes fortsatt i dag — bare i nye formater:

**1. Forenkling og slagord**
Komplekse problemer reduseres til enkle slagord. «Make America Great Again», «Arbeid adler frei» (arbeid gjør fri — nazistisk propaganda). Slagord er lette å huske og vanskelige å argumentere mot.

**2. Gjentakelse**
Hvis noe gjentas ofte nok, begynner folk å tro det er sant. Denne teknikken kalles noen ganger «the Big Lie» — den store løgnen. Josef Goebbels, propagandaminister i Nazi-Tyskland, sa: «En løgn som gjentas ofte nok, blir til slutt akseptert som sannhet.»

**3. Fiendebilde**
Å definere en felles fiende samler gruppen og avleder fra egne svakheter. «Det er *deres* feil.» Fiendebilder forenkler virkeligheten og skaper en «oss mot dem»-mentalitet.

**4. Appell til flertallet (bandwagon)**
«Alle mener dette — du bør også mene det.» Bandwagon-effekten spiller på menneskets behov for å tilhøre gruppen.

**5. Emosjonell manipulasjon**
Bruk av frykt, sinne eller nasjonalstolthet for å overstyre rasjonell tenkning. Når folk er redde eller sinte, er de lettere å manipulere.

**6. Kildeforvirring**
Å blande fakta med løgn, seriøse kilder med useriøse, slik at folk mister evnen til å skille mellom dem. «Hvis alt kan være løgn, er ingenting sant.»

### Moderne propaganda

I dag brukes mange av de samme teknikkene i sosiale medier:
- **Botfabrikker** sprer automatisk falske meldinger for å gi inntrykk av folkelig støtte
- **Trollfabrikker** betaler mennesker for å skrive hatefulle eller villedende kommentarer
- **Deepfakes** er manipulerte videoer der folk ser ut til å si ting de aldri har sagt
- **Mikromålretting** bruker persondata til å vise skreddersydd propaganda til ulike grupper — du og naboen din kan se helt forskjellige «sannheter»`,
    },

    // ========== DEFINISJON: PROPAGANDA ==========
    {
      id: 'norsk-10-8-4-def-3',
      type: 'definition' as const,
      title: 'Propaganda og manipulasjon',
      content: `**Propaganda** er systematisk spredning av ideer, informasjon eller rykter for å påvirke folks meninger og handlinger, vanligvis med politisk eller ideologisk formål.

**Sentrale propagandateknikker:**
- **Forenkling:** Komplekse saker reduseres til enkle slagord
- **Gjentakelse:** Budskapet gjentas til det oppfattes som sant
- **Fiendebilde:** En gruppe pekes ut som skyldig i problemene
- **Bandwagon:** «Alle mener dette — følg flertallet»
- **Emosjonell manipulasjon:** Frykt, sinne og nasjonalstolthet brukes for å overstyre logikk
- **Kildeforvirring:** Fakta og løgn blandes slik at ingenting virker troverdig

**Forskjellen mellom overtalelse og manipulasjon:**
- **Overtalelse** er åpent: Avsenderen er tydelig, argumentene er synlige, du kan vurdere dem fritt
- **Manipulasjon** er skjult: Avsenderen kan være uklar, teknikkene er usynlige, målet er at du ikke skal merke at du blir påvirket`,
    },

    // ========== EKSEMPEL: MODERNE PROPAGANDA ==========
    {
      id: 'norsk-10-8-4-example-2',
      type: 'example' as const,
      title: 'Propagandateknikker i sosiale medier',
      problem: 'Under et fiktivt stortingsvalg dukker det opp hundrevis av lignende kommentarer i nyhetsartiklenes kommentarfelt: «Parti X er landets eneste håp. Alle andre partier ødelegger Norge.» Kommentarene kommer fra kontoer opprettet de siste ukene, alle med generiske profilbilder. Identifiser propagandateknikkene som brukes.',
      solution: `**Teknikk 1: Bandwagon (appell til flertallet)**
Hundrevis av lignende kommentarer gir inntrykk av massiv folkelig støtte. Lesere kan tenke: «Så mange mener dette — kanskje de har rett.»

**Teknikk 2: Forenkling**
«Eneste håp» og «alle andre ødelegger» er ekstrem forenkling av en kompleks politisk virkelighet. Det etterlater ingen rom for nyanser.

**Teknikk 3: Fiendebilde**
«Alle andre partier ødelegger Norge» skaper et fiendebilde der det bare finnes «oss» (Parti X) og «dem» (alle andre).

**Teknikk 4: Emosjonell manipulasjon**
Ordene «eneste håp» og «ødelegger» appellerer til frykt og desperasjon.

**Teknikk 5: Kildeforvirring**
Kontoene er sannsynligvis falske (botter eller trollfabrikk), men blandes inn blant ekte kommentarer. Leseren vet ikke hvem som er ekte og hvem som er falsk.

**Varseltegn:**
- Nye kontoer med generiske profilbilder
- Nesten identisk ordlyd i mange kommentarer
- Ekstremt språk uten nyanser
- Timing: Kort tid før valget

**Konklusjon:** Dette er sannsynligvis en koordinert desinformasjonskampanje som bruker flere klassiske propagandateknikker i et digitalt format.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-4-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-3',
        number: '8.24',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hvilken propagandateknikk brukes når en politiker sier: «Alle nordmenn vet at dette er riktig — det er bare eliten som er uenig»?',
        options: [
          {
            id: 'a',
            text: 'Forenkling — fordi et komplekst spørsmål reduseres til et enkelt slagord',
            isCorrect: false,
            feedback: 'Delvis riktig, men det er en mer spesifikk teknikk som passer bedre. «Alle nordmenn» brukes for å gi inntrykk av at flertallet er enig.',
          },
          {
            id: 'b',
            text: 'Bandwagon og fiendebilde — fordi det appelleres til flertallet og skapes en fiende («eliten»)',
            isCorrect: true,
            feedback: 'Riktig! «Alle nordmenn» er bandwagon (flertallsappell), og «bare eliten» skaper et fiendebilde — en «oss mot dem»-dynamikk.',
          },
          {
            id: 'c',
            text: 'Logos — fordi det er et logisk argument',
            isCorrect: false,
            feedback: 'Feil. Det er ikke et logisk argument. «Alle nordmenn» er en udokumentert påstand, og «eliten» er et vagt fiendebilde. Det er propaganda, ikke logikk.',
          },
          {
            id: 'd',
            text: 'Gjentakelse — fordi budskapet gjentas mange ganger',
            isCorrect: false,
            feedback: 'Feil. Gjentakelse handler om å repetere et budskap over tid. Her brukes bandwagon (flertallsappell) og fiendebilde i én enkelt uttalelse.',
          },
        ],
        solution: 'Alternativ B er riktig. Uttalelsen kombinerer bandwagon («alle nordmenn» = flertallet er enig med meg) og fiendebilde («bare eliten» = det er en fiende som er uenig).',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-4-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-4',
        number: '8.25',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Finn en reklame (fra nett, TV eller sosiale medier) og gjør en retorisk analyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv reklamen kort: Hva er produktet? Hvem er avsenderen? Hva er budskapet? Hvem er målgruppen?',
            solution: 'Eleven bør gi en presis beskrivelse som identifiserer produkt, avsender, budskap og tiltenkt målgruppe.',
          },
          {
            label: 'b',
            task: 'Identifiser bruken av etos, patos og logos i reklamen. Gi konkrete eksempler fra reklamen for hver appellform.',
            solution: 'Eleven bør peke på konkrete elementer: Hvem/hva gir troverdighet (etos)? Hvilke følelser forsøker reklamen å vekke (patos)? Hvilke fakta eller tall presenteres (logos)?',
          },
          {
            label: 'c',
            task: 'Vurder: Er reklamen effektiv? Hvorfor/hvorfor ikke? Hvilke påvirkningsteknikker er sterkest?',
            solution: 'Eleven bør ta stilling til reklamens effektivitet og begrunne vurderingen med referanse til retoriske virkemidler og målgruppens forventede reaksjoner.',
          },
        ],
        solution: 'En god reklameanalyse identifiserer de retoriske appellformene med konkrete eksempler og vurderer reklamens effektivitet kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-4-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-5',
        number: '8.26',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Lag din egen «propagandaplakat» for en ufarlig sak — for eksempel å overtale medelevene til å velge pizza til lunsj i stedet for taco. Bruk bevisst minst tre propagandateknikker.

Skriv deretter en analyse (150–200 ord) der du:
a) Beskriver hvilke teknikker du brukte og hvorfor
b) Forklarer hvordan du appellerte til følelser (patos) framfor fornuft (logos)
c) Reflekterer over hvorfor det er viktig å gjennomskue slike teknikker i mer alvorlige sammenhenger`,
        hints: [
          'Overdiv gjerne — poenget er at du forstår teknikkene, ikke at du tror på dem',
          'Prøv forenkling, gjentakelse, fiendebilde, bandwagon eller emosjonell manipulasjon',
          'Husk: Å lage propaganda som øvelse er den beste måten å lære å gjennomskue den på',
        ],
        solution: 'En god besvarelse viser at eleven forstår propagandateknikkene godt nok til å bruke dem bevisst, og reflekterer over den alvorlige virkeligheten bak øvelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-4-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Reklame:** Betalt kommunikasjon med kommersielt formål
- **PR (public relations):** Strategisk kommunikasjon for å bygge omdømme
- **Propaganda:** Systematisk påvirkning med politisk eller ideologisk formål
- **Etos:** Troverdighetsappell — «Stol på meg fordi jeg er troverdig»
- **Patos:** Følelsesappell — «Føl dette — og handle deretter»
- **Logos:** Fornuftsappell — «Se på fakta — dette gir mening»
- **Kairos:** Det rette tidspunktet for budskapet
- **Bandwagon:** Appell til flertallet — «alle mener dette»
- **Fiendebilde:** Å peke ut en fiende for å samle gruppen
- **Deepfake:** Manipulert video der folk ser ut til å si ting de aldri har sagt

### Viktige sammenhenger
- Reklame, PR og propaganda bruker de samme retoriske teknikkene — forskjellen ligger i formålet
- De fleste reklamer kombinerer etos, patos og logos for maksimal effekt
- Propagandateknikker fra fortiden lever videre i nye digitale former
- Å gjennomskue overtalelsesteknikker handler ikke om å mistro alt, men om å ta informerte valg
- Bevisst bruk av retorikk er legitimt — skjult manipulasjon er det ikke`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-4-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-6',
        number: '8.27',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: Sammenlign historisk og moderne propaganda.

Velg ett historisk eksempel på propaganda (f.eks. plakater fra andre verdenskrig, kald krig-propaganda eller apartheid-propaganda) og sammenlign det med et moderne eksempel (f.eks. en desinformasjonskampanje i sosiale medier, politisk reklame eller statlig propaganda).

Skriv en analyse (300–400 ord) der du:
a) Beskriver begge eksemplene kort
b) Identifiserer propagandateknikkene som brukes i hvert eksempel
c) Sammenligner likheter og forskjeller mellom de to
d) Vurderer om moderne propaganda er farligere enn historisk propaganda — begrunn svaret ditt`,
        hints: [
          'Du kan søke etter historiske propagandaplakater på nett — det finnes mange fritt tilgjengelige',
          'Tenk på hvordan teknologien har endret propagandaens rekkevidde og raffinement',
          'Husk at historisk propaganda ofte er lettere å gjennomskue i ettertid — mens moderne propaganda er designet for å ikke oppdages',
        ],
        solution: 'En god analyse viser evne til å identifisere propagandateknikker i ulike kontekster, se sammenhenger mellom historisk og moderne propaganda, og reflektere nyansert over teknologiens rolle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-4-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-4-ex-7',
        number: '8.28',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hva er den viktigste forskjellen mellom overtalelse og manipulasjon?',
        options: [
          {
            id: 'a',
            text: 'Overtalelse bruker fakta, manipulasjon bruker følelser',
            isCorrect: false,
            feedback: 'Feil. Både overtalelse og manipulasjon kan bruke fakta og følelser. Forskjellen handler om åpenhet og hensikt.',
          },
          {
            id: 'b',
            text: 'Overtalelse er åpen og synlig, manipulasjon er skjult og usynlig',
            isCorrect: true,
            feedback: 'Riktig! Den avgjørende forskjellen er åpenhet. I overtalelse kan du se argumentene og vurdere dem. I manipulasjon er teknikkene skjult — du merker ikke at du blir påvirket.',
          },
          {
            id: 'c',
            text: 'Det er ingen forskjell — alle former for påvirkning er manipulasjon',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig forskjell. Å argumentere åpent for sitt syn er legitimt. Å bruke skjulte teknikker for å styre folks meninger uten at de vet det, er manipulasjon.',
          },
          {
            id: 'd',
            text: 'Overtalelse brukes bare i reklame, manipulasjon brukes bare i politikk',
            isCorrect: false,
            feedback: 'Feil. Begge kan brukes i alle sammenhenger. Forskjellen handler om åpenhet og hensikt, ikke om kontekst.',
          },
        ],
        solution: 'Alternativ B er riktig. Overtalelse er åpen — du kan se og vurdere argumentene. Manipulasjon er skjult — du merker ikke at du blir påvirket.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Reklame', definition: 'Betalt kommunikasjon med kommersielt formål, der avsenderen ønsker å selge et produkt eller en tjeneste' },
    { term: 'Propaganda', definition: 'Systematisk spredning av ideer for å påvirke folks meninger, ofte med politisk formål' },
    { term: 'Etos', definition: 'Retorisk appellform som bygger på avsenderens troverdighet og kompetanse' },
    { term: 'Patos', definition: 'Retorisk appellform som vekker følelser hos mottakeren' },
    { term: 'Logos', definition: 'Retorisk appellform som bruker logikk, fakta og rasjonelle argumenter' },
    { term: 'Kairos', definition: 'Det rette tidspunktet for å fremføre et budskap' },
    { term: 'Bandwagon', definition: 'Propagandateknikk som appellerer til flertallet — alle mener dette' },
    { term: 'Fiendebilde', definition: 'Propagandateknikk der en gruppe pekes ut som årsak til problemer' },
  ],
  prevChapter: 'norsk-10-8-3',
  nextChapter: 'norsk-10-8-5',
};

// ============================================================================
// KAPITTEL 8.5: Ytringsfrihet og ytringsansvar
// LK20: Reflektere over ytringsfrihetens grenser og ytringsansvar i
//        ulike medier
// ============================================================================

export const CHAPTER_NORSK_10_8_5: TextbookChapter = {
  id: 'norsk-10-8-5',
  courseId: 'norsk-10',
  chapterNumber: '8.5',
  title: 'Ytringsfrihet og ytringsansvar',
  description: 'Lær om ytringsfrihetens grunnlag og grenser, forholdet mellom frihet og ansvar, hatefulle ytringer, sensur og selvsensur, og din rolle som ansvarlig deltaker i offentlig debatt.',
  estimatedMinutes: 70,
  competenceGoals: [
    'utforske og reflektere over ytringsfrihetens betydning i et demokrati',
    'reflektere over grensene for ytringsfriheten og forholdet mellom frihet og ansvar',
    'vurdere ulike perspektiver i debatter om kontroversielle temaer og formulere egne standpunkter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-5-intro',
      type: 'text' as const,
      content: `## Ytringsfrihet og ytringsansvar: Retten til å si det du mener — og ansvaret som følger med

«Jeg er uenig i det du sier, men jeg vil forsvare til døden din rett til å si det.» Denne setningen — ofte (feilaktig) tilskrevet den franske filosofen Voltaire — fanger essensen av ytringsfriheten. Du har rett til å mene og si det du vil, selv om andre er dypt uenige.

Men betyr det at du kan si *hva som helst*? Kan du true noen? Oppfordre til vold? Hetse en hel folkegruppe? Spre bevisste løgner som ødelegger noens liv?

Svaret er nei. Ytringsfrihet er en grunnleggende rettighet, men den er ikke ubegrenset. Med friheten til å ytre seg følger et **ansvar** — for ordene du velger, for konsekvensene de har, og for det offentlige rommet vi alle deler.

I dette kapittelet skal du lære å:
- Forstå hva ytringsfrihet betyr og hvorfor den er viktig
- Kjenne grensene for ytringsfriheten i norsk lov
- Reflektere over forholdet mellom ytringsfrihet og ytringsansvar
- Diskutere hatefulle ytringer, netthat og sensur
- Ta stilling til vanskelige dilemmaer om ytringsfrihetens grenser`,
    },

    // ========== DEFINISJON: YTRINGSFRIHET ==========
    {
      id: 'norsk-10-8-5-def-1',
      type: 'definition' as const,
      title: 'Ytringsfrihet og ytringsansvar',
      content: `**Ytringsfrihet** er retten til fritt å uttrykke sine meninger uten forhåndssensur fra staten. I Norge er ytringsfriheten beskyttet av:
- **Grunnloven § 100:** «Ytringsfrihet bør finne sted.» Bestemmelsen beskytter også informasjonsfrihet og mediefrihet.
- **Den europeiske menneskerettighetskonvensjonen (EMK) artikkel 10:** Alle har rett til ytringsfrihet, inkludert retten til å motta og formidle informasjon.

**Ytringsansvar** betyr at du har ansvar for det du ytrer. At du har *rett* til å si noe, betyr ikke at det er *riktig* å si det. Ytringsansvar innebærer:
- Å tenke over konsekvensene av det du sier
- Å ikke spre usannheter bevisst
- Å respektere andres verdighet
- Å bidra konstruktivt til offentlig debatt

**De tre begrunnelsene for ytringsfrihet:**
1. **Sannhetsprinsippet:** Fri debatt fører oss nærmere sannheten — feil ideer avdekkes gjennom diskusjon
2. **Demokratiprinsippet:** Et fungerende demokrati krever at borgerne fritt kan ytre seg og kritisere makthaverne
3. **Autonomiprinsippet:** Fri meningsdannelse er nødvendig for at individet kan utvikle seg som selvstendig person`,
    },

    // ========== EKSEMPEL: YTRINGSFRIHETENS GRENSER ==========
    {
      id: 'norsk-10-8-5-example-1',
      type: 'example' as const,
      title: 'Ytringsfrihetens grenser i praksis',
      problem: 'Bestem om følgende ytringer er beskyttet av ytringsfriheten i Norge, eller om de kan være ulovlige.',
      solution: `**1. «Regjeringens klimapolitikk er fullstendig feilslått og ødelegger fremtiden vår.»**
Beskyttet. Politisk kritikk er kjernen av ytringsfriheten, selv om den er skarp og unyansert. Du har full rett til å kritisere politikere og myndigheter.

**2. «Alle som tilhører [folkegruppe] er kriminelle og bør kastes ut av landet.»**
Sannsynligvis ulovlig. Straffeloven § 185 forbyr hatefulle ytringer rettet mot personer basert på etnisitet, religion, seksuell orientering eller funksjonsevne. Denne ytringen kan rammes av bestemmelsen.

**3. «Jeg skal banke deg opp etter skolen.»**
Ulovlig. Trusler er straffbare etter straffeloven § 263. Ytringen er en direkte trussel om vold.

**4. «Jeg synes det er feil at vi bruker så mye penger på bistand til andre land.»**
Beskyttet. En politisk mening, selv om mange er uenige. Meningsforskjell er selve poenget med ytringsfrihet.

**5. Å dele et privat nakenbilder av en eks-kjæreste på sosiale medier.**
Ulovlig. Straffeloven § 267a forbyr deling av seksualiserte bilder uten samtykke. Dette handler ikke om ytringsfrihet, men om personvern og krenkelse.

**Hovedregelen:** Politisk kritikk, meninger og debatt er beskyttet — selv om det er upopulært eller støtende. Trusler, hatefulle ytringer, ærekrenkelser og deling av privat materiale uten samtykke er *ikke* beskyttet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-5-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-1',
        number: '8.29',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hvilken av følgende ytringer er mest sannsynlig beskyttet av ytringsfriheten?',
        options: [
          {
            id: 'a',
            text: '«Jeg skal ødelegge deg» — en trussel sendt til en medelev på Snapchat',
            isCorrect: false,
            feedback: 'Feil. Trusler er straffbare og ikke beskyttet av ytringsfriheten.',
          },
          {
            id: 'b',
            text: '«Jeg synes skolen bør endre vurderingssystemet — karakterer er utdatert»',
            isCorrect: true,
            feedback: 'Riktig! Politiske og samfunnskritiske meninger er kjernen av ytringsfriheten, selv om de er kontroversielle.',
          },
          {
            id: 'c',
            text: 'Å dele et privat bilde av en medelev uten samtykke for å ydmyke dem',
            isCorrect: false,
            feedback: 'Feil. Deling av bilder uten samtykke er et personvernbrudd og kan være straffbart.',
          },
          {
            id: 'd',
            text: '«Alle som har den religionen er terrorister»',
            isCorrect: false,
            feedback: 'Feil. Denne ytringen kan være en hatefull ytring rettet mot en religiøs gruppe, og kan rammes av straffeloven § 185.',
          },
        ],
        solution: 'Alternativ B er riktig. Politisk meningsytring er beskyttet av ytringsfriheten, mens trusler, hatefulle ytringer og personvernbrudd ikke er det.',
      },
    },

    // ========== NETTHAT OG HATEFULLE YTRINGER ==========
    {
      id: 'norsk-10-8-5-netthat',
      type: 'text' as const,
      content: `## Netthat og hatefulle ytringer

Internett og sosiale medier har gitt alle en stemme. Det er på mange måter positivt — men det har også en mørk side. **Netthat** er et voksende problem som rammer enkeltpersoner, grupper og hele samfunnsdebatten.

### Hva er netthat?

Netthat er hatefulle, truende, krenkende eller trakasserende ytringer som spres digitalt. Det kan være:
- Rasistiske eller diskriminerende kommentarer
- Trusler om vold
- Systematisk mobbing og trakassering
- Spredning av rykter og falske beskyldninger
- Deling av privat informasjon for å skade noen (doxxing)

### Hvem rammes?

Forskning viser at netthat rammer noen grupper mer enn andre:
- **Kvinner** utsettes oftere for seksualisert hat og trusler
- **Minoriteter** utsettes for rasisme og diskriminering
- **Ungdom** er spesielt sårbare for nettmobbing
- **Offentlige personer** som politikere, journalister og debattanter får store mengder hat

### Konsekvensene

Netthat har reelle konsekvenser:
- **For den enkelte:** Angst, depresjon, selvmordstanker, sosial tilbaketrekking
- **For samfunnsdebatten:** Mange velger å ikke delta i debatten av frykt for hat — dette kalles **nedkjølingseffekten** (chilling effect). Resultatet er at viktige stemmer tier, og debatten blir fattigere
- **For demokratiet:** Hvis folk er redde for å ytre seg, svekkes den demokratiske samtalen

### Straffeloven § 185 — hatefulle ytringer

Norsk lov forbyr hatefulle ytringer rettet mot personer basert på:
- Hudfarge, nasjonal eller etnisk opprinnelse
- Religion eller livssyn
- Seksuell orientering
- Kjønnsidentitet eller kjønnsuttrykk
- Nedsatt funksjonsevne

Å bli dømt for hatefulle ytringer kan gi bøter eller fengsel i inntil tre år. Men grensen mellom det som er lovlig (men ubehagelig) og det som er ulovlig, er ikke alltid enkel å trekke.`,
    },

    // ========== DEFINISJON: NEDKJØLINGSEFFEKTEN ==========
    {
      id: 'norsk-10-8-5-def-2',
      type: 'definition' as const,
      title: 'Nedkjølingseffekten (chilling effect)',
      content: `**Nedkjølingseffekten** (også kalt **chilling effect**) er når folk lar være å ytre seg fordi de frykter negative konsekvenser — hat, trusler, trakassering, sosial utstøting eller juridiske sanksjoner.

Nedkjølingseffekten er problematisk fordi den **innskrenker ytringsfriheten i praksis**, selv om den ikke gjør det formelt. Loven sier at du har rett til å ytre deg — men hvis konsekvensene er for store, tør du ikke.

**Eksempler:**
- En politiker lar være å ta opp et kontroversielt tema fordi hun vet det vil utløse netthat
- En elev deltar ikke i klassediskusjonen om innvandring fordi han er redd for å bli kalt rasist
- En journalist unngår å skrive om en mektig person fordi hun frykter trusler

**Konsekvensen:** De som har mest å tape (kvinner, minoriteter, unge) tier oftere. Debatten domineres av de som tåler mest — og det er ikke nødvendigvis de med de beste argumentene.`,
    },

    // ========== EKSEMPEL: DILEMMA ==========
    {
      id: 'norsk-10-8-5-example-2',
      type: 'example' as const,
      title: 'Ytringsfrihetens dilemma',
      content: `**Dilemmaet:** En kontroversielt debattant er invitert til å holde foredrag på en skole. Debattanten har ytret seg svært kritisk til innvandring, og noen av uttalelsene har blitt anmeldt (men ikke dømt) for hatefulle ytringer. Noen elever mener foredraget bør avlyses fordi det kan oppleves som krenkende. Andre mener at avlysning er sensur.

**Argumenter for å la foredraget gjennomføres:**
- Ytringsfrihet betyr at også upopulære meninger skal høres
- Å nekte noen å snakke er en form for sensur
- Det er bedre å møte argumenter med motargumenter enn med taushet
- Elevene kan lære kritisk tenkning ved å vurdere argumentene

**Argumenter for å avlyse:**
- Skolen har ansvar for å skape et trygt læringsmiljø for alle elever
- Noen elever kan oppleve det som direkte truende — spesielt de som tilhører grupper debattanten har uttalt seg negativt om
- Det finnes andre måter å diskutere kontroversielle temaer på
- Å gi noen en talerstol er ikke det samme som sensur — man kan ytre seg andre steder

**Det finnes ikke ett riktig svar.** Dilemmaet viser spenningen mellom to viktige verdier: ytringsfrihet og trygghet. Et demokratisk samfunn må hele tiden forhandle om hvor grensene går — og det er nettopp denne forhandlingen som gjør demokratiet levende.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-5-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-2',
        number: '8.30',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Ytringsfrihet og ytringsansvar i praksis.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar med egne ord forskjellen mellom ytringsfrihet og ytringsansvar.',
            solution: 'Ytringsfrihet er den juridiske retten til å uttrykke sine meninger fritt, uten forhåndssensur fra staten. Ytringsansvar betyr at du har et moralsk og til dels juridisk ansvar for konsekvensene av det du sier. At du har rett til å si noe, betyr ikke at det er riktig eller klokt å si det.',
          },
          {
            label: 'b',
            task: 'Hva er «nedkjølingseffekten», og hvorfor er den et problem for demokratiet?',
            solution: 'Nedkjølingseffekten er når folk lar være å ytre seg fordi de frykter hat, trusler eller andre negative konsekvenser. Det er et problem fordi det i praksis innskrenker ytringsfriheten — viktige stemmer tier, debatten blir fattigere, og demokratiet svekkes.',
          },
          {
            label: 'c',
            task: 'Diskuter: Er det mulig å ha full ytringsfrihet og samtidig beskytte folk mot hatefulle ytringer? Eller er de to tingene i konflikt?',
            solution: 'Et godt svar anerkjenner at det finnes en reell spenning mellom ytringsfrihet og beskyttelse mot hat. Full, absolutt ytringsfrihet ville tillate hatefulle ytringer. Full beskyttelse mot alt som oppleves krenkende, ville innskrenke ytringsfriheten. De fleste demokratier forsøker å finne en balanse — og den balansen er under stadig forhandling.',
          },
        ],
        solution: 'Oppgaven handler om å forstå spenningen mellom ytringsfrihet og ytringsansvar, og å reflektere nyansert over vanskelige avveininger.',
      },
    },

    // ========== SENSUR OG SELVSENSUR ==========
    {
      id: 'norsk-10-8-5-sensur',
      type: 'text' as const,
      content: `## Sensur og selvsensur

**Sensur** betyr at en myndighet eller maktinstans kontrollerer, begrenser eller forbyr ytringer før de når publikum. I Norge er forhåndssensur fra staten forbudt etter Grunnloven § 100. Men sensur finnes i mange former, og noen er mer subtile enn andre:

### Typer sensur

**Statlig sensur:** Myndighetene kontrollerer hva mediene får publisere. Finnes i autoritære regimer som Nord-Korea, Kina og Russland. I disse landene kan journalister fengsles for å kritisere makthaverne.

**Plattformsensur:** Sosiale medier-selskaper (Meta, Google, X/Twitter) har egne regler for hva som kan publiseres. De kan slette innlegg, blokkere kontoer og fjerne innhold — uten å forholde seg til noen domstol. Er dette sensur — eller ansvarlig moderering?

**Økonomisk sensur:** Annonsører kan true med å trekke annonser fra medier som publiserer kontroversielt innhold. Medier som er avhengige av annonseinntekter, kan la dette påvirke hva de publiserer.

**Selvsensur:** Kanskje den mest effektive formen: Du sensurerer deg selv. Du lar være å si det du mener fordi du frykter konsekvensene. Selvsensur kan være fornuftig (å tenke seg om før man snakker), men problematisk når den drives av frykt.

### Forskjellen mellom moderering og sensur

Det er viktig å skille mellom **moderering** (å fjerne innhold som bryter tydelige regler — trusler, hets, ulovlig innhold) og **sensur** (å fjerne innhold fordi makthavere ikke liker det). Grensen er ikke alltid klar:

- Å fjerne dødstrusler fra et kommentarfelt = moderering
- Å fjerne kritikk av regjeringen = sensur
- Å fjerne feilinformasjon om helse = moderering (mener noen) eller sensur (mener andre)

Den siste kategorien er den vanskeligste. Hvem skal bestemme hva som er «feilinformasjon»? Og hva skjer hvis de som bestemmer, tar feil?`,
    },

    // ========== DEFINISJON: SENSUR ==========
    {
      id: 'norsk-10-8-5-def-3',
      type: 'definition' as const,
      title: 'Sensur, selvsensur og moderering',
      content: `**Sensur** er når en myndighet eller maktinstans kontrollerer, begrenser eller forbyr ytringer. Forhåndssensur fra staten er forbudt i Norge.

**Selvsensur** er når du holder tilbake egne ytringer av frykt for konsekvensene — hat, sosial utstøtelse, jobbmessige konsekvenser eller juridiske sanksjoner.

**Moderering** er å fjerne innhold fra en plattform som bryter plattformens regler eller lovverket. Moderering er nødvendig for å hindre trusler, hets og ulovlig innhold.

**Nøkkelforskjellen:** Moderering handler om å håndheve tydelige regler. Sensur handler om å undertrykke meninger makthaverne ikke liker. Men i praksis er grensen ofte uklar — spesielt når plattformer med enorm makt (Google, Meta) bestemmer reglene.`,
    },

    // ========== EKSEMPEL: PLATTFORMSENSUR ==========
    {
      id: 'norsk-10-8-5-example-3',
      type: 'example' as const,
      title: 'Plattformsensur — et moderne dilemma',
      content: `I januar 2021 ble USAs daværende president Donald Trump utestengt fra Twitter, Facebook og flere andre plattformer etter stormingen av Kongressen 6. januar. Plattformene mente at Trumps innlegg bidro til å oppildne vold.

**Argumenter for utestengelsen:**
- Trumps innlegg bidro til vold og fare for demokratiet
- Plattformene har rett til å håndheve egne regler
- Trusler og oppfordring til vold er ikke beskyttet ytringsfrihet
- Det handler om sikkerhet, ikke politikk

**Argumenter mot utestengelsen:**
- En sittende president ble fjernet av private selskaper — uten rettslig dom
- Plattformene har for mye makt over offentlig debatt
- Hvem er neste? Prinsippet kan brukes mot hvem som helst
- Det er velgerne, ikke teknologiselskaper, som bør avgjøre politiske debatter

**Kjerneproblemet:** Sosiale medier er i praksis blitt vår offentlige arena for debatt. Men de eies av private selskaper som ikke er bundet av ytringsfrihetens regler. De kan fjerne hvem de vil, når de vil — uten å stå til ansvar overfor velgerne.

**Spørsmålet:** Bør sosiale medier reguleres som offentlig infrastruktur — med strengere krav til ytringsfrihet? Eller er de private bedrifter som bør få sette egne regler?`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-5-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-3',
        number: '8.31',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hva er «selvsensur», og hvorfor kan det være et problem?',
        options: [
          {
            id: 'a',
            text: 'At staten kontrollerer hva du får publisere på sosiale medier',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er statlig sensur. Selvsensur handler om at *du selv* holder tilbake ytringer.',
          },
          {
            id: 'b',
            text: 'At du redigerer teksten din for å forbedre kvaliteten',
            isCorrect: false,
            feedback: 'Feil. Redigering for kvalitet er normalt og positivt. Selvsensur handler om å holde tilbake meninger av frykt for konsekvensene.',
          },
          {
            id: 'c',
            text: 'At du lar være å ytre deg fordi du frykter negative konsekvenser, noe som kan føre til at viktige stemmer tier',
            isCorrect: true,
            feedback: 'Riktig! Selvsensur er når frykt for hat, trusler eller sosial utstøtelse gjør at du holder tilbake det du egentlig mener. Det er et problem fordi det svekker den demokratiske debatten.',
          },
          {
            id: 'd',
            text: 'At sosiale medier-selskaper sletter innleggene dine',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er plattformsensur eller moderering. Selvsensur handler om det *du selv* velger å holde tilbake.',
          },
        ],
        solution: 'Alternativ C er riktig. Selvsensur er når du holder tilbake ytringer av frykt for konsekvensene. Det er problematisk fordi det innskrenker ytringsfriheten i praksis.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-5-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-4',
        number: '8.32',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Tenk deg at du er ansvarlig for å moderere kommentarfeltet på en stor norsk nettavis. Bestem for hvert tilfelle om du ville slettet kommentaren eller latt den stå. Begrunn svaret ditt.',
        subTasks: [
          {
            label: 'a',
            task: '«Politikerne i dette landet er fullstendig udugelige. De fortjener ikke lønnen sin.»',
            solution: 'Bør stå. Dette er en skarp, men lovlig politisk meningsytring. Kritikk av politikere — selv unyansert — er kjernen av ytringsfriheten. Å fjerne slik kritikk ville vært sensur.',
          },
          {
            label: 'b',
            task: '«Alle [folkegruppe] er kriminelle og bør sendes ut av landet.»',
            solution: 'Bør slettes. Ytringen generaliserer negativt om en hel folkegruppe basert på etnisitet, og kan rammes av straffeloven § 185 om hatefulle ytringer. Det er moderering, ikke sensur.',
          },
          {
            label: 'c',
            task: '«Denne artikkelen er dårlig journalistikk. Journalisten har åpenbart ikke sjekket kildene sine.»',
            solution: 'Bør stå. Kritikk av journalistikk er legitimt og viktig i et demokrati. Det er kanskje ubehagelig for journalisten, men det er en saklig meningsytring.',
          },
        ],
        solution: 'God moderering skiller mellom lovlige, om enn ubehagelige, meningsytringer (a og c) og ytringer som bryter loven eller presseetiske regler (b). Det krever god dømmekraft og kunnskap om ytringsfrihetens grenser.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-5-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-5',
        number: '8.33',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Skriv en drøftende tekst (300–400 ord) om følgende problemstilling:

«Bør sosiale medier-selskaper ha lov til å slette innhold og utestenge brukere, eller bør de reguleres med strengere krav til ytringsfrihet?»

Du skal presentere minst to argumenter for hver side, bruke fagbegreper fra kapittelet, og komme med en begrunnet konklusjon.`,
        hints: [
          'Tenk på at sosiale medier i praksis er vår offentlige debattarena, men eies av private selskaper',
          'Bruk begreper som sensur, moderering, nedkjølingseffekt, ytringsfrihet og ytringsansvar',
          'Husk at en drøfting krever at du ser saken fra flere sider — ikke bare den du er enig i',
        ],
        solution: 'En god tekst viser evne til å se problemstillingen fra flere sider, bruker fagbegreper naturlig, og konkluderer med en nyansert vurdering som tar hensyn til spenningen mellom ytringsfrihet og ansvarlig moderering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-5-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Ytringsfrihet:** Retten til fritt å uttrykke sine meninger uten forhåndssensur fra staten (Grunnloven § 100)
- **Ytringsansvar:** Ansvaret for konsekvensene av det du ytrer
- **Hatefulle ytringer:** Ytringer som hetser eller diskriminerer basert på etnisitet, religion, seksuell orientering etc. (straffeloven § 185)
- **Netthat:** Hatefulle, truende eller trakasserende ytringer spredt digitalt
- **Nedkjølingseffekten:** Når folk tier av frykt for negative konsekvenser
- **Sensur:** Kontroll eller forbud av ytringer fra en myndighet eller maktinstans
- **Selvsensur:** Å holde tilbake egne ytringer av frykt for konsekvenser
- **Moderering:** Å fjerne innhold som bryter plattformens regler eller lovverket

### Viktige sammenhenger
- Ytringsfrihet er grunnleggende for demokratiet, men ikke ubegrenset
- Med frihet følger ansvar — retten til å ytre seg innebærer et ansvar for konsekvensene
- Netthat truer demokratiet ved å skape nedkjølingseffekt — folk tør ikke delta i debatten
- Grensen mellom moderering og sensur er ofte uklar, spesielt i sosiale medier
- Sosiale medier-selskapenes makt over den offentlige debatten reiser vanskelige demokratiske spørsmål`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-5-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-6',
        number: '8.34',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: Ytringsfrihet i praksis.

Gjennomfør en klassedebatt om ett av følgende dilemmaer:

**Dilemma 1:** Bør det være lov å brenne religiøse bøker som en politisk protest?
**Dilemma 2:** Bør hatefulle ytringer som retter seg mot politikere være tillatt?
**Dilemma 3:** Bør skoler ha rett til å sensurere elevaviser?

Forbered deg ved å:
a) Velge ett dilemma og ta stilling — men vær forberedt på å argumentere for *begge* sider
b) Skrive ned minst tre argumenter for og tre argumenter mot
c) Etter debatten: Skriv en refleksjonstekst (150–200 ord) om hva du lærte av å høre andres argumenter`,
        hints: [
          'Velg det dilemmaet du finner vanskeligst — det er der du lærer mest',
          'Å argumentere for noe du er uenig i, er en viktig ferdighet — det skjerper tenkningen din',
          'Bruk fagbegreper som ytringsfrihet, ytringsansvar, sensur, nedkjølingseffekt',
        ],
        solution: 'En god forberedelse og refleksjonstekst viser evne til å se saken fra flere sider, bruke fagbegreper, og reflektere over hva man lærte av debatten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-5-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-5-ex-7',
        number: '8.35',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hvilken av de tre begrunnelsene for ytringsfrihet handler om at fri debatt fører oss nærmere sannheten?',
        options: [
          {
            id: 'a',
            text: 'Demokratiprinsippet',
            isCorrect: false,
            feedback: 'Feil. Demokratiprinsippet handler om at borgerne fritt må kunne kritisere makthaverne. Det du leter etter er sannhetsprinsippet.',
          },
          {
            id: 'b',
            text: 'Autonomiprinsippet',
            isCorrect: false,
            feedback: 'Feil. Autonomiprinsippet handler om at fri meningsdannelse er nødvendig for individuell utvikling. Det riktige er sannhetsprinsippet.',
          },
          {
            id: 'c',
            text: 'Sannhetsprinsippet',
            isCorrect: true,
            feedback: 'Riktig! Sannhetsprinsippet sier at fri debatt — der ideer testes og utfordres — er den beste veien til sannhet. Feil ideer avdekkes gjennom diskusjon.',
          },
          {
            id: 'd',
            text: 'Sensurprinsippet',
            isCorrect: false,
            feedback: 'Feil. Det finnes ikke noe «sensurprinsipp» blant begrunnelsene for ytringsfrihet. Det riktige svaret er sannhetsprinsippet.',
          },
        ],
        solution: 'Alternativ C er riktig. Sannhetsprinsippet sier at fri meningsutveksling og åpen debatt er den beste veien til å finne sannheten.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ytringsfrihet', definition: 'Retten til fritt å uttrykke sine meninger uten forhåndssensur fra staten' },
    { term: 'Ytringsansvar', definition: 'Ansvaret for konsekvensene av det man ytrer' },
    { term: 'Hatefulle ytringer', definition: 'Ytringer som hetser eller diskriminerer basert på gruppetilhørighet, forbudt i straffeloven § 185' },
    { term: 'Nedkjølingseffekten', definition: 'Når folk lar være å ytre seg av frykt for negative konsekvenser' },
    { term: 'Sensur', definition: 'Kontroll eller forbud av ytringer fra en myndighet eller maktinstans' },
    { term: 'Selvsensur', definition: 'Å holde tilbake egne ytringer av frykt for konsekvensene' },
    { term: 'Moderering', definition: 'Å fjerne innhold som bryter plattformens regler eller lovverket' },
    { term: 'Sannhetsprinsippet', definition: 'Begrunnelse for ytringsfrihet: fri debatt fører oss nærmere sannheten' },
  ],
  prevChapter: 'norsk-10-8-4',
  nextChapter: 'norsk-10-8-6',
};

// ============================================================================
// KAPITTEL 8.6: Journalistikk og etikk
// LK20: Gjøre rede for medienes rolle i demokratiet og vurdere
//        medieinnhold kritisk
// ============================================================================

export const CHAPTER_NORSK_10_8_6: TextbookChapter = {
  id: 'norsk-10-8-6',
  courseId: 'norsk-10',
  chapterNumber: '8.6',
  title: 'Journalistikk og etikk',
  description: 'Lær om journalistisk metode, presseetikk og Vær Varsom-plakaten, etiske dilemmaer i journalistikken, og hvordan du selv kan vurdere om journalistikk holder høy standard.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for medienes rolle i demokratiet og vurdere medieinnhold kritisk',
    'utforske og vurdere etiske problemstillinger knyttet til journalistikk og mediebruk',
    'lese sakprosa kritisk og vurdere argumentasjon, kildebruk og retoriske virkemidler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-8-6-intro',
      type: 'text' as const,
      content: `## Journalistikk og etikk: Makten til å forme virkeligheten

Journalister har en unik makt: De bestemmer hva du får vite om verden. Hva de velger å dekke — og hva de velger å *ikke* dekke — former din virkelighetsoppfatning. Men med denne makten følger et enormt ansvar.

Tenk deg at en journalist skriver en artikkel om en person som er mistenkt for en forbrytelse. Artikkelen blir lest av hundretusener. Personen blir gjenkjent i nabolaget, på arbeidsplassen, i butikken. Men hva om det senere viser seg at personen var uskyldig? Skaden er allerede gjort. Omdømmet er ødelagt. Livet er snudd på hodet.

Slike situasjoner er ikke hypotetiske — de skjer regelmessig. Og det er derfor journalistikken trenger etiske regler. Ikke for å begrense journalistene, men for å beskytte enkeltmennesker — og for å opprettholde tilliten mellom medier og publikum.

I dette kapittelet skal du lære å:
- Forstå journalistisk metode og arbeidsprosess
- Kjenne til Vær Varsom-plakaten og presseetiske prinsipper
- Vurdere etiske dilemmaer journalister står overfor
- Analysere journalistikk kritisk — og skille godt fra dårlig håndverk
- Forstå tilsvarsretten, kildevernet og andre journalistiske prinsipper`,
    },

    // ========== DEFINISJON: JOURNALISTISK METODE ==========
    {
      id: 'norsk-10-8-6-def-1',
      type: 'definition' as const,
      title: 'Journalistisk metode',
      content: `**Journalistisk metode** er den systematiske arbeidsprosessen journalister følger for å produsere pålitelig og etisk forsvarlig innhold.

**Kjerneprinsippene:**
1. **Kildemangfold:** Bruk flere uavhengige kilder. Én kilde er ikke nok — spesielt ikke i kontroversielle saker.
2. **Faktasjekking:** Verifiser informasjonen. Kontroller fakta, tall og påstander mot uavhengige kilder.
3. **Tilsvarsretten:** Den som kritiseres eller anklages i en sak, skal få mulighet til å uttale seg og gi sin versjon.
4. **Kildevernet:** Journalister har rett til å beskytte anonyme kilder — selv overfor politiet og domstolene.
5. **Uavhengighet:** Journalisten skal ikke la seg påvirke av eiere, annonsører, politikere eller andre interesser.
6. **Åpenhet:** Journalisten skal være åpen om metoder, kilder og eventuelle feil.

**Nyhetsartikkelens oppbygning:**
- **Overskrift (tittel):** Skal være presis og dekkende for innholdet
- **Ingress:** De første setningene som oppsummerer det viktigste
- **Brodtekst:** Resten av artikkelen med detaljer, kilder og bakgrunn
- **Nyhetspyramiden:** Det viktigste først, detaljer sist. Leseren skal få det essensielle selv om de bare leser overskrift og ingress.`,
    },

    // ========== EKSEMPEL: JOURNALISTISK PROSESS ==========
    {
      id: 'norsk-10-8-6-example-1',
      type: 'example' as const,
      title: 'Slik jobber en journalist',
      content: `**Scenario:** En journalist ved Bergens Tidende får tips om at et lokalt byggefirma har brukt ulovlige materialer i et nytt boligprosjekt.

**Steg 1: Verifisering**
Journalisten sjekker tipset. Er det en konkret kilde bak? Finnes det dokumentasjon? Hun finner byggetillatelser og materialspesifikasjoner gjennom offentlige registre.

**Steg 2: Kildemangfold**
Hun kontakter: en bygningsingeniør (ekspertkilde), beboere i det aktuelle prosjektet (berørte parter), kommunens byggesaksavdeling (myndigheter), og en advokat med kompetanse på byggerett (uavhengig ekspert).

**Steg 3: Tilsvarsretten**
Byggefirmaet kontaktes og får mulighet til å kommentere anklagene. De benekter at de har brukt ulovlige materialer, men kan ikke dokumentere det.

**Steg 4: Faktasjekking**
Alle påstander sjekkes mot dokumentasjon. Bygningsingeniøren bekrefter at materialene ikke oppfyller norske krav.

**Steg 5: Redaktørvurdering**
Redaktøren vurderer saken: Er bevisene sterke nok? Er alle parter hørt? Er det tatt tilstrekkelig hensyn til personvern og rettssikkerhet?

**Steg 6: Publisering**
Artikkelen publiseres med tydelige kilder, tilsvar fra byggefirmaet og ekspertvurderinger.

**Steg 7: Oppfølging**
Etter publisering følger journalisten opp saken: Hva gjør kommunen? Hva skjer med beboerne? Er det flere tilfeller?

**Hele prosessen kan ta uker eller måneder.** Det er det som skiller undersøkende journalistikk fra hverdagens nyhetsproduksjon — og fra sosiale medier, der ting publiseres på sekunder.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-8-6-ex-1-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-1',
        number: '8.36',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hva innebærer «tilsvarsretten» i journalistikken?',
        options: [
          {
            id: 'a',
            text: 'At journalisten har rett til å svare på kritikk fra leserne',
            isCorrect: false,
            feedback: 'Feil. Tilsvarsretten handler ikke om journalistens rett, men om retten til den som omtales i saken.',
          },
          {
            id: 'b',
            text: 'At den som kritiseres eller anklages i en sak, skal få mulighet til å gi sin versjon',
            isCorrect: true,
            feedback: 'Riktig! Tilsvarsretten betyr at den som omtales negativt skal få komme til orde med sin side av saken. Det er et grunnleggende presseetisk prinsipp.',
          },
          {
            id: 'c',
            text: 'At leserne har rett til å publisere leserinnlegg i avisen',
            isCorrect: false,
            feedback: 'Feil. Leserinnlegg er noe annet. Tilsvarsretten handler om at den som omtales i en kritisk sak, skal få mulighet til å uttale seg.',
          },
          {
            id: 'd',
            text: 'At Pressens Faglige Utvalg alltid svarer på klager innen 24 timer',
            isCorrect: false,
            feedback: 'Feil. Tilsvarsretten handler ikke om PFU, men om den omtaltes rett til å gi sin versjon av saken.',
          },
        ],
        solution: 'Alternativ B er riktig. Tilsvarsretten sikrer at den som kritiseres eller anklages, får mulighet til å kommentere og gi sin side av saken.',
      },
    },

    // ========== VÆR VARSOM-PLAKATEN ==========
    {
      id: 'norsk-10-8-6-vvp',
      type: 'text' as const,
      content: `## Vær Varsom-plakaten: Pressens etiske regelverk

Vær Varsom-plakaten er pressens eget etiske regelverk. Den ble første gang vedtatt i 1936 og oppdateres jevnlig. Plakaten er ikke en lov, men et sett med etiske retningslinjer som alle norske medier forplikter seg til å følge.

### De fire hoveddelene

**1. Pressens samfunnsrolle**
Pressen skal verne om ytringsfriheten, informasjonsfriheten og offentlighetsprinsippet. Pressen har en viktig rolle som vaktbikkje og informasjonsformidler.

**2. Integritet og troverdighet**
Redaksjonelle medarbeidere skal verne om sin uavhengighet. De skal unngå dobbeltroller og interessekonflikter. Reklame skal tydelig skilles fra redaksjonelt innhold.

**3. Journalistisk atferd og forholdet til kildene**
Journalisten skal opptre hensynsfullt i kontakten med kilder. Kildevernet er et grunnleggende prinsipp. Skjulte metoder (skjult kamera, falsk identitet) skal bare brukes unntaksvis.

**4. Publiseringsregler**
- **Overskrifter:** Skal ha dekning i stoffet — ikke villede leseren
- **Tilsvar:** Den som utsettes for sterke beskyldninger, skal ha rett til samtidig tilsvar
- **Personvern:** Vær varsom med å identifisere personer i kriminalsaker
- **Barn:** Barn skal ha et ekstra sterkt vern — ikke identifiser mindreårige i kriminalsaker
- **Bilder:** Bilder skal ikke brukes i en villende kontekst
- **Feil:** Feil skal rettes snarest, og rettelsen skal gis rimelig oppmerksomhet

### Pressens Faglige Utvalg (PFU)

PFU er det organet som behandler klager på presseetiske brudd. Hvem som helst kan klage til PFU hvis de mener at et medium har brutt Vær Varsom-plakaten. PFU kan:
- Frifinne mediet
- Gi kritikk (mild form)
- Felle mediet (sterkere reaksjon)

En fellelse i PFU er ikke en straff i juridisk forstand, men den er offentlig og kan skade mediets omdømme. De fleste medier tar PFU-avgjørelser svært alvorlig.`,
    },

    // ========== DEFINISJON: VÆR VARSOM-PLAKATEN ==========
    {
      id: 'norsk-10-8-6-def-2',
      type: 'definition' as const,
      title: 'Vær Varsom-plakaten og PFU',
      content: `**Vær Varsom-plakaten** er pressens etiske regelverk i Norge. Den inneholder retningslinjer for:
- Pressens samfunnsrolle (informasjon, vaktbikkje, debattarena)
- Integritet (uavhengighet, skille mellom reklame og redaksjonelt innhold)
- Journalistisk atferd (hensynsfullhet, kildevern, skjulte metoder)
- Publiseringsregler (overskrifter, tilsvar, personvern, barn, bilder, feilretting)

**Pressens Faglige Utvalg (PFU)** er organet som behandler klager på brudd på god presseskikk. PFU kan frifinne, gi kritikk eller felle et medium.

**Kildevernet** er journalistens rett (og plikt) til å beskytte identiteten til anonyme kilder — selv overfor politi og domstoler. Kildevernet er avgjørende for at varslere og informanter tør å gi viktig informasjon til pressen.

**Samtidig tilsvar** betyr at den som omtales negativt i en sak, skal få mulighet til å kommentere i *samme sak* — ikke bare i en oppfølgingssak dagen etter.`,
    },

    // ========== EKSEMPEL: PRESSEETISK DILEMMA ==========
    {
      id: 'norsk-10-8-6-example-2',
      type: 'example' as const,
      title: 'Et presseetisk dilemma',
      problem: 'En kjent norsk politiker blir fotografert på en privat fest der det brukes narkotika. Fotografiet er tatt uten samtykke. Skal avisen publisere bildet?',
      solution: `**Argumenter for publisering:**
- Politikere er offentlige personer med makt — offentligheten har rett til å vite om lovbrudd
- Narkotikabruk er ulovlig, og en politiker som bryter loven er en sak av offentlig interesse
- Å skjule slik informasjon kan oppfattes som forskjellsbehandling
- Vaktbikkjefunksjonen tilsier at mediene avdekker maktpersoners lovbrudd

**Argumenter mot publisering:**
- Fotografiet er tatt uten samtykke på en privat fest — det er et personvernspørsmål
- Politikeren er ikke tatt av politiet eller dømt — å publisere kan bryte uskyldspresumsjon
- Bildet viser narkotikabruk i omgivelsene, men er det bevist at politikeren *selv* brukte narkotika?
- Kan det verifiseres at bildet er ekte og ikke manipulert?

**Hva Vær Varsom-plakaten sier:**
- Punkt 4.3: Vis respekt for menneskers privatliv
- Punkt 4.7: Vær varsom med bruk av navn og bilde i kriminalsaker
- Men: Offentlige personer må tåle sterkere søkelys enn andre

**Mulig løsning:**
Redaktøren kan velge å omtale saken uten å publisere bildet. Politikeren kontaktes for tilsvar. Saken publiseres først når det er tilstrekkelig dokumentasjon — ikke bare et enkelt bilde.

**Hovedpoenget:** Journalistiske avgjørelser er sjelden svart-hvitt. Det handler om å veie ulike hensyn mot hverandre — offentlig interesse vs. personvern, vaktbikkjefunksjon vs. rettssikkerhet.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-8-6-ex-2-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-2',
        number: '8.37',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Presseetiske vurderinger.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva kildevernet innebærer og hvorfor det er viktig for journalistikken.',
            solution: 'Kildevernet er journalistens rett og plikt til å beskytte anonyme kilders identitet, selv overfor politi og domstoler. Det er viktig fordi det gjør at varslere, informanter og andre tør å gi sensitiv informasjon til pressen uten å frykte represalier. Uten kildevern ville mange viktige avsløringer aldri kommet frem.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en situasjon der hensynet til offentlig interesse kan komme i konflikt med hensynet til personvern. Forklar hvordan du ville veid disse hensynene.',
            solution: 'Eksempel: En lærer blir anmeldt for mobbing av elever. Offentlig interesse tilsier at saken dekkes (foreldre har rett til å vite om læringsmiljøet). Personvern tilsier at læreren ikke identifiseres før eventuell dom. En god løsning kan være å dekke saken uten å identifisere læreren, og gi tilsvar.',
          },
          {
            label: 'c',
            task: 'Forklar forskjellen mellom en overskrift som har «dekning i stoffet» og en villedende overskrift. Gi et eksempel på hver.',
            solution: 'En overskrift med dekning i stoffet gjenspeiler innholdet: «Studie viser mulig sammenheng mellom søvn og konsentrasjon.» En villedende overskrift overdriver eller forvrenger: «Forskere bekrefter: Søvn gjør deg til et geni!» Den siste bryter Vær Varsom-plakaten fordi den villeder leseren.',
          },
        ],
        solution: 'Oppgaven handler om å forstå og anvende presseetiske prinsipper i konkrete situasjoner.',
      },
    },

    // ========== GODT OG DÅRLIG JOURNALISTISK HÅNDVERK ==========
    {
      id: 'norsk-10-8-6-haandverk',
      type: 'text' as const,
      content: `## Godt og dårlig journalistisk håndverk

Som kritisk leser bør du kunne skille mellom god og dårlig journalistikk. Her er noen kjennetegn:

### Tegn på godt journalistisk håndverk
- **Flere uavhengige kilder:** Artikkelen viser til flere kilder som bekrefter informasjonen
- **Tilsvar:** Den som kritiseres, har fått uttale seg
- **Presis overskrift:** Overskriften gjenspeiler innholdet — ingen klikk-agn
- **Nøkternt språk:** Fakta presenteres uten unødvendig dramatisering
- **Kontekst:** Saken settes i sammenheng — bakgrunn og forhistorie forklares
- **Åpenhet om usikkerhet:** Journalisten er ærlig når noe er uklart
- **Korrekte fakta:** Tall, datoer, navn og andre fakta er korrekte
- **Skillet mellom fakta og mening:** Kommentarer og meninger er tydelig merket

### Tegn på dårlig journalistisk håndverk
- **Bare én kilde:** Saken er basert på bare én persons påstand
- **Ingen tilsvar:** Den som omtales negativt, har ikke fått kommentere
- **Villedende overskrift:** Overskriften lover mer enn artikkelen leverer
- **Ladet språk:** Ord som «sjokkerende», «skandale», «avslørt» brukes uten dekning
- **Manglende kontekst:** Saken presenteres uten bakgrunn, og leseren mangler viktig informasjon
- **Sammenblanding av fakta og mening:** Det er uklart hva som er fakta og hva som er journalistens mening
- **Klikk-agn:** Overskriften er designet for å få klikk, ikke for å informere
- **Feil:** Faktafeil, skrivefeil og upresise formuleringer

### Sjangrene du bør kjenne

Det er viktig å vite hvilken sjanger du leser, for forventningene er forskjellige:

- **Nyhetsartikkel:** Skal være faktabasert og balansert. Journalistens mening skal ikke skinne gjennom.
- **Reportasje:** Mer fortellende og personlig, men fortsatt faktabasert. Kan bruke scener og beskrivelser.
- **Kommentar/kronikk:** Meningsstoff — avsenderen argumenterer for et synspunkt. Det er tydelig merket.
- **Lederartikkel:** Avisens offisielle standpunkt, skrevet av redaksjonen.
- **Featureartikkel:** Grundig og ofte personlig fortalt sakprosatekst med mer rom for stilistisk frihet.`,
    },

    // ========== DEFINISJON: KLIKK-AGN ==========
    {
      id: 'norsk-10-8-6-def-3',
      type: 'definition' as const,
      title: 'Klikk-agn (clickbait) og nyhetspyramiden',
      content: `**Klikk-agn (clickbait)** er overskrifter eller innhold som er designet for å lokke deg til å klikke — ofte ved å skape nysgjerrighet uten å gi svar.

Typiske klikk-agn-teknikker:
- «Du vil IKKE TRO hva som skjedde da...»
- «Denne hemmeligheten kan endre livet ditt»
- «Ekspertene er sjokkert over denne oppdagelsen»
- Bruk av tall: «7 ting du aldri visste om...»

**Nyhetspyramiden** (den omvendte pyramide) er den klassiske måten å strukturere en nyhetsartikkel på: Det viktigste først, detaljer sist. Leseren skal få den essensielle informasjonen allerede i overskrift og ingress.

**Klikk-agn snur nyhetspyramiden på hodet:** Den holder tilbake informasjonen for å tvinge deg til å klikke. Det er det motsatte av god journalistikk.`,
    },

    // ========== EKSEMPEL: KLIKK-AGN VS JOURNALISTIKK ==========
    {
      id: 'norsk-10-8-6-example-3',
      type: 'example' as const,
      title: 'Klikk-agn vs. god journalistikk',
      problem: 'Sammenlign disse to overskriftene om samme hendelse:',
      solution: `**Klikk-agn:** «Du vil IKKE tro hva denne 15-åringen gjorde — lærerne er i sjokk!»
**God journalistikk:** «15-åring fra Bergen vinner internasjonal forskerkonkurranse med klimaprosjekt»

**Forskjellen:**
- Klikk-agn-overskriften gir null informasjon. Du vet ikke hva som har skjedd, hvem det gjelder, eller hvorfor det er viktig. Den eneste hensikten er å få deg til å klikke.
- Den journalistiske overskriften gir deg det viktigste: hvem (15-åring fra Bergen), hva (vinner forskerkonkurranse) og om hva (klimaprosjekt). Du kan velge om du vil lese mer.

**Enda et eksempel:**
- Klikk-agn: «Forskere advarer: Denne vanlige matvaren kan være farlig!»
- God journalistikk: «Helsedirektoratet anbefaler å begrense inntak av bearbeidet kjøtt til maks 500 gram per uke»

**Testen:** Hvis overskriften bevisst holder tilbake informasjonen for å gjøre deg nysgjerrig, er det klikk-agn. Hvis den gir deg det viktigste på en presis måte, er det god journalistikk.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-8-6-ex-3-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-3',
        number: '8.38',
        type: 'multiple-choice' as const,
        difficulty: 'medium' as const,
        task: 'Hvilket av følgende er et tegn på godt journalistisk håndverk?',
        options: [
          {
            id: 'a',
            text: 'Overskriften er dramatisk og bruker store bokstaver for å fange oppmerksomheten',
            isCorrect: false,
            feedback: 'Feil. Dramatiske overskrifter med store bokstaver er typisk klikk-agn. God journalistikk bruker presise, informative overskrifter.',
          },
          {
            id: 'b',
            text: 'Artikkelen bruker bare én anonym kilde for å underbygge en sterk påstand',
            isCorrect: false,
            feedback: 'Feil. God journalistikk bruker flere uavhengige kilder, spesielt ved sterke påstander.',
          },
          {
            id: 'c',
            text: 'Den som kritiseres har fått komme til orde med sin versjon i artikkelen',
            isCorrect: true,
            feedback: 'Riktig! Tilsvarsretten er et grunnleggende presseetisk prinsipp og et kjennetegn på god journalistikk.',
          },
          {
            id: 'd',
            text: 'Journalisten uttrykker tydelig sin egen mening om saken i nyhetsartikkelen',
            isCorrect: false,
            feedback: 'Feil. I en nyhetsartikkel skal journalistens mening ikke skinne gjennom. Mening hører hjemme i kommentarer og kronikker — ikke i nyhetsreportasjer.',
          },
        ],
        solution: 'Alternativ C er riktig. At den omtalte har fått uttale seg (tilsvarsretten) er et grunnleggende kjennetegn på god journalistisk praksis.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-8-6-ex-4-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-4',
        number: '8.39',
        type: 'classic' as const,
        difficulty: 'medium' as const,
        task: 'Vurder kvaliteten på journalistikken i en nyhetsartikkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en nyhetsartikkel fra et norsk nettmedium. Bruk listen over «tegn på godt journalistisk håndverk» fra kapittelet og vurder artikkelen på en skala fra 1 til 5 (der 5 er best). Begrunn vurderingen.',
            solution: 'Eleven bør systematisk vurdere artikkelen etter kriteriene: kildemangfold, tilsvar, presisjon i overskrift, nøkternt språk, kontekst, åpenhet om usikkerhet, korrekthet og skille mellom fakta og mening.',
          },
          {
            label: 'b',
            task: 'Identifiser eventuelle svakheter i artikkelen. Hva kunne journalisten gjort bedre?',
            solution: 'Eleven bør identifisere konkrete svakheter med referanse til presseetiske prinsipper — f.eks. manglende tilsvar, for få kilder, villedende overskrift, manglende kontekst.',
          },
          {
            label: 'c',
            task: 'Bestem sjangeren: Er det en nyhetsartikkel, kommentar, reportasje eller noe annet? Begrunn svaret ditt.',
            solution: 'Eleven bør identifisere sjangeren basert på kjennetegn: Er det faktabasert eller meningsbasert? Nøkternt eller personlig? Merket som meningsstoff? Strukturert som nyhetsartikkel (nyhetspyramide)?',
          },
        ],
        solution: 'En god besvarelse viser at eleven kan vurdere journalistikk systematisk ved hjelp av presseetiske kriterier og sjangerkunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-8-6-ex-5-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-5',
        number: '8.40',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Lag en «klikk-agn-overskrift» og en «god journalistisk overskrift» for hver av følgende hendelser. Forklar forskjellen.

a) En ungdomsskole har innført mobilforbud i skoletiden, og elevene er uenige om tiltaket.
b) En ny undersøkelse viser at norske 15-åringer leser mindre bøker enn for ti år siden.
c) En lokal restaurant er anmeldt for brudd på hygieneforskriftene etter at flere gjester ble syke.`,
        hints: [
          'Klikk-agn: Hold tilbake informasjon, bruk sterke følelsesord, skap nysgjerrighet',
          'God journalistikk: Gi det viktigste i overskriften, vær presis, unngå ladet språk',
          'Sammenlign overskriftene dine og forklar hva som gjør den ene god og den andre dårlig',
        ],
        solution: 'Eksempel a) Klikk-agn: «Elevene RASER etter denne kontroversielle avgjørelsen!» vs. God: «Ungdomsskole innfører mobilforbud — elevene delt i synet på tiltaket.» Forskjellen ligger i presisjon, informasjonsverdi og tone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-6-oppsummering',
      type: 'text' as const,
      content: `## Oppsummering

### Nøkkelbegreper
- **Journalistisk metode:** Systematisk arbeidsprosess med kildemangfold, faktasjekking, tilsvarsrett og kildevern
- **Vær Varsom-plakaten:** Pressens etiske regelverk med retningslinjer for samfunnsrolle, integritet, kildeforhold og publisering
- **Pressens Faglige Utvalg (PFU):** Organet som behandler klager på presseetiske brudd
- **Tilsvarsretten:** Retten den omtalte har til å kommentere anklagene i samme sak
- **Kildevernet:** Journalistens rett og plikt til å beskytte anonyme kilder
- **Klikk-agn (clickbait):** Overskrifter designet for å lokke klikk, ikke for å informere
- **Nyhetspyramiden:** Artikkelstruktur der det viktigste kommer først
- **Sjangrer:** Nyhetsartikkel, reportasje, kommentar, kronikk, lederartikkel, featureartikkel

### Viktige sammenhenger
- Journalistikk med høy kvalitet krever tid, kompetanse og etisk bevissthet
- Vær Varsom-plakaten er et levende dokument som oppdateres i takt med medieutviklingen
- Å skille mellom god og dårlig journalistikk er en nøkkelkompetanse for kritiske lesere
- Klikk-agn er det motsatte av god journalistikk — det holder tilbake informasjon i stedet for å gi den
- Som lesere har vi et ansvar for å støtte god journalistikk — og gjennomskue den dårlige`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-8-6-ex-6-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-6',
        number: '8.41',
        type: 'classic' as const,
        difficulty: 'vanskelig' as const,
        task: `Samleoppgave: Skriv din egen nyhetsartikkel.

Velg en hendelse fra skolehverdagen (ekte eller fiktiv) og skriv en nyhetsartikkel (300–500 ord) som følger god journalistisk metode.

Artikkelen skal:
a) Ha en presis, informativ overskrift (ikke klikk-agn)
b) Følge nyhetspyramiden — det viktigste først
c) Inneholde minst to kilder med ulike perspektiver
d) Gi tilsvar til den som eventuelt kritiseres
e) Bruke nøkternt, saklig språk
f) Skille tydelig mellom fakta og eventuelle meninger

Skriv deretter en kort refleksjon (100 ord) om hva som var vanskeligst med å skrive journalistisk.`,
        hints: [
          'Tenk som en journalist: Hvem er kildene? Hva er fakta? Er alle sider hørt?',
          'Unngå å la dine egne meninger skinne gjennom — det er en nyhetsartikkel, ikke en kommentar',
          'Les gjerne en nyhetsartikkel fra NRK eller VG som modell for oppbygning og stil',
        ],
        solution: 'En god nyhetsartikkel viser at eleven forstår journalistisk metode og kan anvende den i praksis: kildemangfold, tilsvar, presisjon, objektivitet og riktig struktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-8-6-ex-7-block',
      type: 'exercise' as const,
      exercise: {
        id: 'norsk-10-8-6-ex-7',
        number: '8.42',
        type: 'multiple-choice' as const,
        difficulty: 'lett' as const,
        task: 'Hva er formålet med Vær Varsom-plakaten?',
        options: [
          {
            id: 'a',
            text: 'Å begrense pressens ytringsfrihet',
            isCorrect: false,
            feedback: 'Feil. Vær Varsom-plakaten begrenser ikke ytringsfriheten — den setter etiske standarder for hvordan ytringsfriheten utøves ansvarlig.',
          },
          {
            id: 'b',
            text: 'Å sette etiske retningslinjer for pressens arbeid, slik at journalistikken er ansvarlig og troverdig',
            isCorrect: true,
            feedback: 'Riktig! Vær Varsom-plakaten er pressens egne etiske retningslinjer som skal sikre ansvarlig journalistikk og opprettholde tilliten mellom medier og publikum.',
          },
          {
            id: 'c',
            text: 'Å bestemme hva mediene har lov til å skrive om',
            isCorrect: false,
            feedback: 'Feil. Vær Varsom-plakaten bestemmer ikke *hva* mediene skriver om, men *hvordan* de gjør det. Den handler om etisk standard, ikke temavalg.',
          },
          {
            id: 'd',
            text: 'Å straffe journalister som skriver feil',
            isCorrect: false,
            feedback: 'Feil. PFU kan kritisere eller felle medier, men det er ikke en straff i juridisk forstand. Vær Varsom-plakaten handler om etiske retningslinjer, ikke strafferett.',
          },
        ],
        solution: 'Alternativ B er riktig. Vær Varsom-plakaten setter etiske standarder for pressens arbeid og sikrer at journalistikken er ansvarlig og troverdig.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Journalistisk metode', definition: 'Systematisk arbeidsprosess med kildemangfold, faktasjekking, tilsvar og kildevern' },
    { term: 'Vær Varsom-plakaten', definition: 'Pressens etiske regelverk med retningslinjer for ansvarlig journalistikk' },
    { term: 'PFU', definition: 'Pressens Faglige Utvalg — behandler klager på presseetiske brudd' },
    { term: 'Tilsvarsretten', definition: 'Retten den omtalte har til å kommentere anklagene i samme sak' },
    { term: 'Kildevernet', definition: 'Journalistens rett og plikt til å beskytte anonyme kilders identitet' },
    { term: 'Klikk-agn', definition: 'Overskrifter designet for å lokke klikk ved å holde tilbake informasjon' },
    { term: 'Nyhetspyramiden', definition: 'Artikkelstruktur der det viktigste presenteres først' },
    { term: 'Samtidig tilsvar', definition: 'At den omtalte får uttale seg i samme publisering, ikke bare i en oppfølging' },
  ],
  prevChapter: 'norsk-10-8-5',
};

// ============================================================================
// Eksporter alle kapitler i del 6
// ============================================================================

export const NORSK_10_DEL6_CHAPTERS = [
  CHAPTER_NORSK_10_8_1,
  CHAPTER_NORSK_10_8_2,
  CHAPTER_NORSK_10_8_3,
  CHAPTER_NORSK_10_8_4,
  CHAPTER_NORSK_10_8_5,
  CHAPTER_NORSK_10_8_6,
];

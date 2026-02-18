/**
 * Norsk VG1 - Narrative versjoner Del 7 (Kapittel 6.1, 6.2, 6.3, 6.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Tema: Sammensatte tekster, film, digitale medier og kildekritikk.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_6_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-6-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '6.1',
  title: 'Sammensatte tekster',
  subtitle: 'Narrativ versjon',
  description: 'Opplev verden gjennom flere sanser - slik leser du tekster som kombinerer ord, bilde og lyd.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'bruke fagbegreper i analyse av tekster',
  ],
  linkedChapterId: 'norsk-vg1-6-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-6-1-n-intro',
      type: 'text',
      content: `## Når tekster snakker med flere stemmer

Tenk deg at du åpner Instagram. Det første du ser er et bilde av en solnedgang over havet, med teksten "Livet er for kort til dårlige vibber" og en rolig låt i bakgrunnen. Uten å tenke over det har du nettopp lest en sammensatt tekst. Bildet, teksten og musikken jobber sammen for å fortelle deg noe om avsenderen og få deg til å føle noe bestemt.

Vi lever i en verden der tekster sjelden bare er ord på papir. Reklamen du passerer på vei til skolen bruker bilder, farger og slagord. Nettavisen du scroller gjennom kombinerer video, tekst og grafikk. Til og med denne læreboken du leser nå bruker overskrifter, mellomrom og layout for å guide blikket ditt.

Dette er sammensatte tekster, eller multimodale tekster som vi ofte kaller dem. Ordet modal kommer fra det latinske modus, som betyr måte eller form. Multimodal betyr rett og slett at teksten bruker flere måter å uttrykke seg på samtidig. Og når du forstår hvordan disse uttrykksmåtene virker sammen, blir du en mye bedre leser av verden rundt deg.

I dette kapittelet skal du lære å se det du vanligvis bare glir forbi. Du skal lære å stille kritiske spørsmål til bilder, lyd og tekst, og du skal oppdage hvordan avsendere bruker sammensatte tekster for å påvirke tankene og følelsene dine.`,
    },

    // ========== SEKSJON 1: Modalitetenes verden ==========
    {
      id: 'norsk-vg1-6-1-n-section1',
      type: 'text',
      content: `## Modalitetenes verden

La oss starte med det grunnleggende. En modalitet er en uttrykksmåte, en kanal for kommunikasjon. Når du snakker med noen ansikt til ansikt, bruker du flere modaliteter samtidig uten å tenke over det. Ordene du sier er verbalspråket. Tonefall og stemmebruk er det auditive. Ansiktsuttrykk og kroppsspråk er det visuelle. Alt dette virker sammen for å formidle budskapet ditt.

I tekster vi leser og ser, finner vi de samme modalitetene, bare i andre former. Den verbale modaliteten handler om skriftlig tekst. Overskrifter, brødtekst, slagord og undertekster hører hjemme her. Men det handler også om typografi. Skrifttypen du velger, størrelsen på bokstavene, om teksten er i fet eller kursiv, alt dette kommuniserer noe. En overskrift i store, røde bokstaver roper noe annet enn den samme teksten i liten, grå skrift.

Den visuelle modaliteten omfatter alt vi ser utover selve teksten. Fotografier og illustrasjoner er åpenbare eksempler, men også fargebruk, komposisjon, hvitrom og layout hører hjemme her. Et bilde av en smilende familie kommuniserer trygghet og harmoni. Et bilde tatt nedenfra får personen til å virke mektig. En side med mye hvitrom føles rolig og eksklusiv.

Den auditive modaliteten finner vi i film, video, podkaster og nettinnhold. Dialog, musikk, lydeffekter og til og med stillhet er alle virkemidler som påvirker hvordan vi oppfatter budskapet. Tenk på hvor forskjellig den samme scenen i en film ville føles med glad popmusikk versus truende strykere.

Når vi analyserer sammensatte tekster, ser vi ikke bare på hver modalitet for seg. Vi undersøker hvordan de spiller sammen, forsterker hverandre, eller noen ganger motarbeider hverandre for å skape mening.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på modaliteter og sammensatte tekster:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-1-n-quiz1-q0',
            task: 'Hva betyr det at en tekst er multimodal?',
            options: [
              { id: 'a', text: 'At teksten er skrevet på flere språk', isCorrect: false },
              { id: 'b', text: 'At teksten kombinerer flere uttrykksmåter som tekst, bilde og lyd', isCorrect: true },
              { id: 'c', text: 'At teksten er publisert på flere plattformer samtidig', isCorrect: false },
              { id: 'd', text: 'At teksten har flere forfattere', isCorrect: false },
            ],
            solution: 'Multimodal kommer av multi (mange) og modal (uttrykksmåte). En multimodal tekst bruker flere modaliteter som virker sammen for å skape mening. Nesten alle moderne tekster vi møter er multimodale.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz1-q1',
            task: 'Hvilken modalitet handler om skriftlig tekst, overskrifter og typografi?',
            options: [
              { id: 'a', text: 'Den auditive modaliteten', isCorrect: false },
              { id: 'b', text: 'Den visuelle modaliteten', isCorrect: false },
              { id: 'c', text: 'Den verbale modaliteten', isCorrect: true },
              { id: 'd', text: 'Den taktile modaliteten', isCorrect: false },
            ],
            solution: 'Den verbale modaliteten omfatter alt skriftlig: brødtekst, overskrifter, slagord og typografi. Valg av skrifttype, størrelse og formatering kommuniserer også mening utover selve ordene.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz1-q2',
            task: 'En overskrift i store, røde bokstaver versus den samme teksten i liten, grå skrift – hva viser dette?',
            options: [
              { id: 'a', text: 'At typografi og visuelle valg påvirker hvordan vi oppfatter budskapet', isCorrect: true },
              { id: 'b', text: 'At farger ikke har betydning for tekstforståelse', isCorrect: false },
              { id: 'c', text: 'At den auditive modaliteten er viktigst', isCorrect: false },
              { id: 'd', text: 'At teksten er multilingval', isCorrect: false },
            ],
            solution: 'Typografi er en del av den verbale og visuelle modaliteten. Store, røde bokstaver roper noe annet enn liten, grå skrift – selv om ordene er identiske. Visuelle valg styrer hvordan budskapet oppfattes.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Når bilde møter tekst ==========
    {
      id: 'norsk-vg1-6-1-n-section2',
      type: 'text',
      content: `## Når bilde møter tekst

En av de vanligste formene for sammensatt tekst er kombinasjonen av bilde og verbaltekst. Tenk på en avisartikkel med et fotografi, en reklame med et slagord, eller en Instagram-post med bildetekst. I alle disse tilfellene spiller bilde og tekst sammen på bestemte måter.

Den franske teoretikeren Roland Barthes identifiserte to hovedformer for samspill mellom bilde og tekst. Den første kalte han forankring. Her fungerer teksten som en slags guide som forteller deg hvordan du skal forstå bildet. Tenk på et nyhetsfoto av en folkemengde. Uten tekst vet du ikke om det er en demonstrasjon, en konsert eller en kø. Bildeteksten forankrer bildet i en bestemt mening. Den begrenser de mulige tolkningene.

Den andre formen kalte Barthes avløsning. Her tilfører bilde og tekst ulik informasjon som sammen skaper en større helhet. I en tegneserie, for eksempel, kan bildet vise en person som står ved et vindu, mens taleboble forteller hva personen tenker. Ingen av delene gir mening alene, men sammen forteller de historien.

Det finnes også en tredje form vi kan legge til, nemlig kontrast. Her sier bilde og tekst tilsynelatende ulike ting, ofte for å skape ironi eller humor. En reklame for et billig flyselskap kan vise et luksuriøst hotellrom med teksten "Nå har du råd til dette også". Motsetningen mellom det billige og det luksuriøse skaper en meningsfull spenning.

Når du analyserer sammensatte tekster, er det alltid lurt å spørre deg selv: Hvordan samspiller elementene her? Forankrer teksten bildet? Utfyller de hverandre? Står de i kontrast?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på samspillet mellom bilde og tekst:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-1-n-quiz2-q0',
            task: 'I en nyhetsartikkel står det under et bilde av en alvorlig statsminister: "Krisemøte i regjeringen etter flomkatastrofen." Hva kalles denne typen samspill?',
            options: [
              { id: 'a', text: 'Avløsning - bilde og tekst utfyller hverandre med ulik informasjon', isCorrect: false },
              { id: 'b', text: 'Kontrast - bilde og tekst står i motsetning til hverandre', isCorrect: false },
              { id: 'c', text: 'Forankring - teksten forklarer og begrenser bildets mening', isCorrect: true },
              { id: 'd', text: 'Montasje - flere bilder er satt sammen', isCorrect: false },
            ],
            solution: 'Bildeteksten forankrer bildet ved å fortelle oss nøyaktig hva situasjonen er. Uten teksten kunne bildet av en alvorlig statsminister betydd mange ting. Teksten innsnevrer tolkningsmulighetene.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz2-q1',
            task: 'I en tegneserie viser bildet en person ved et vindu, mens taleboblen forteller hva personen tenker. Hva kalles dette samspillet?',
            options: [
              { id: 'a', text: 'Forankring', isCorrect: false },
              { id: 'b', text: 'Avløsning', isCorrect: true },
              { id: 'c', text: 'Kontrast', isCorrect: false },
              { id: 'd', text: 'Redundans', isCorrect: false },
            ],
            solution: 'Avløsning betyr at bilde og tekst tilfører ulik informasjon som sammen skaper helheten. Bildet viser det ytre (personen ved vinduet), mens teksten avslører det indre (tankene). Ingen av delene gir full mening alene.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz2-q2',
            task: 'En reklame for et billig flyselskap viser et luksuriøst hotellrom med teksten "Nå har du råd til dette også." Hva slags samspill er dette?',
            options: [
              { id: 'a', text: 'Forankring – teksten forklarer bildet', isCorrect: false },
              { id: 'b', text: 'Avløsning – de utfyller hverandre', isCorrect: false },
              { id: 'c', text: 'Kontrast – bilde og tekst skaper en meningsfull spenning', isCorrect: true },
              { id: 'd', text: 'Montasje – det er en bilderekke', isCorrect: false },
            ],
            solution: 'Kontrast oppstår når bilde og tekst tilsynelatende sier ulike ting. Bildet viser luksus, men flyselskapet er billig. Denne spenningen skaper mening: fordi du sparer på flybilletten, har du råd til luksus.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz2-q3',
            task: 'Hvem var den franske teoretikeren som identifiserte samspillet mellom bilde og tekst?',
            options: [
              { id: 'a', text: 'Michel Foucault', isCorrect: false },
              { id: 'b', text: 'Jean-Paul Sartre', isCorrect: false },
              { id: 'c', text: 'Jacques Derrida', isCorrect: false },
              { id: 'd', text: 'Roland Barthes', isCorrect: true },
            ],
            solution: 'Roland Barthes identifiserte to hovedformer for samspill mellom bilde og tekst: forankring (teksten styrer tolkningen av bildet) og avløsning (bilde og tekst utfyller hverandre med ulik informasjon).',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Reklame - påvirkningens mesterskap ==========
    {
      id: 'norsk-vg1-6-1-n-section3',
      type: 'text',
      content: `## Reklame - påvirkningens mesterskap

Hvis du vil forstå sammensatte tekster, finnes det knapt et bedre studieobjekt enn reklamen. Her er ingenting tilfeldig. Hvert bilde, hver fargevalg, hvert ord er nøye gjennomtenkt for å påvirke deg på bestemte måter.

La oss tenke oss en typisk bilreklame. Bildet viser en skinnende SUV som kjører på en svingete fjellvei ved solnedgang. Fargepaletten er varm, med oransje og gull. Teksten sier enkelt: "Frihet begynner her." Ingen tekniske spesifikasjoner, ingen pris, bare et løfte om en følelse.

Hva skjer her? Det visuelle spiller på drømmer om eventyr og frihet. Fjellveien symboliserer muligheter, solnedgangen er romantikk og skjønnhet. Den varme fargepaletten skaper behagelige følelser. Bilen selv er plassert som nøkkelen til denne drømmen. Slagordet forsterker budskapet med ord som også handler om frihet, ikke om transport.

Legg merke til hva reklamen ikke sier. Den nevner ikke bensinforbruk, ikke månedlige kostnader, ikke miljøkonsekvenser. Den vil at du skal føle, ikke tenke. Og samspillet mellom bilde og tekst er designet for å fremkalle akkurat de følelsene som får deg til å ville ha produktet.

Dette er retorikk i praksis. Reklamen bygger etos gjennom produksjonsverdien og merkevarens image. Den bruker patos til å vekke følelser av frihet, eventyr og tilhørighet. Logos, det logiske argumentet, er ofte nedtonet eller fraværende. Hvem trenger logikk når følelsene allerede har tatt beslutningen?`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på reklame og retoriske virkemidler:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-1-n-quiz3-q0',
            task: 'En reklame viser en lykkelig familie rundt frokostbordet med slagord "Start dagen riktig". Hvilken retorisk appellform dominerer?',
            options: [
              { id: 'a', text: 'Logos - den appellerer til logikk og fornuft', isCorrect: false },
              { id: 'b', text: 'Etos - den bygger troverdighet gjennom ekspertise', isCorrect: false },
              { id: 'c', text: 'Patos - den appellerer til følelser om familie og trygghet', isCorrect: true },
              { id: 'd', text: 'Kairos - den utnytter det rette øyeblikket', isCorrect: false },
            ],
            solution: 'Bildet av den lykkelige familien appellerer direkte til følelser. Vi kobler produktet til familielykke, trygghet og gode minner. Dette er klassisk patos-appell som spiller på våre dypeste ønsker og verdier.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz3-q1',
            task: 'Hvorfor nevner bilreklamen med SUV-en på fjellveien verken pris eller bensinforbruk?',
            options: [
              { id: 'a', text: 'Fordi avsenderen ikke kjenner prisen ennå', isCorrect: false },
              { id: 'b', text: 'Fordi reklamen vil at du skal føle, ikke tenke – logos tones bevisst ned', isCorrect: true },
              { id: 'c', text: 'Fordi det er ulovlig å oppgi pris i bilreklame', isCorrect: false },
              { id: 'd', text: 'Fordi alle allerede vet hva bilen koster', isCorrect: false },
            ],
            solution: 'Reklamen nedtoner logos (logiske argumenter) bevisst. Fakta som pris og bensinforbruk kan få deg til å tenke rasjonelt. I stedet satser reklamen på patos – følelser av frihet og eventyr – fordi følelser driver kjøpsbeslutninger.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz3-q2',
            task: 'Hva bidrar den varme fargepaletten (oransje og gull) med i bilreklamen?',
            options: [
              { id: 'a', text: 'Den gjør at bilen ser billigere ut', isCorrect: false },
              { id: 'b', text: 'Den er tilfeldig valgt av fotografen', isCorrect: false },
              { id: 'c', text: 'Den informerer om bilens tekniske spesifikasjoner', isCorrect: false },
              { id: 'd', text: 'Den skaper behagelige følelser og forsterker drømmen om frihet og eventyr', isCorrect: true },
            ],
            solution: 'Fargevalg i reklame er aldri tilfeldig. Varme farger som oransje og gull skaper behag, romantikk og drømmer om eventyr. Fargepaletten er en del av den visuelle modaliteten som bevisst forsterker det følelsesmessige budskapet.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Nettaviser og sosiale medier ==========
    {
      id: 'norsk-vg1-6-1-n-section4',
      type: 'text',
      content: `## Nettaviser og sosiale medier

Åpne forsiden til en nettavis. Kaos av inntrykk slår mot deg. Store overskrifter roper om krise og dramatikk. Bilder av kjendiser og politikere konkurrerer om oppmerksomheten. Videosnutter starter automatisk. Reklame blinker i margen. Og et sted midt i alt dette skal du forsøke å finne de nyhetene som faktisk betyr noe.

Nettaviser er komplekse sammensatte tekster designet for ett hovedformål: å holde deg scrollende så lenge som mulig. Jo lenger du er på siden, jo flere annonser ser du, jo mer penger tjener avisen. Dette skaper et press mot det sensasjonelle, det følelsesladde, det som fanger oppmerksomheten uansett om det er viktig eller ikke.

Se på overskriftene. Store bokstaver signaliserer viktighet. Ord som sjokkerende, knuser og avslører lover dramatikk. Spørsmålsoverskrifter som "Kan dette være sant?" spiller på nysgjerrigheten din. Bildene er valgt for å vekke følelser, ofte ansikter med sterke uttrykk fordi hjernen vår automatisk trekkes mot ansikter.

Sosiale medier tar dette enda lenger. Her er du ikke bare leser, men også avsender. Hver post du lager er en sammensatt tekst der du velger bilde, filter, tekst, emojier og hashtags. Du kuraterer et image av deg selv, og valgene dine er like gjennomtenkte som reklamemakernes, selv om du kanskje ikke tenker over det.

Kritisk medieforståelse betyr å se gjennom designet. Å spørre hvorfor forsiden ser ut som den gjør. Å forstå at algoritmene viser deg innhold som holder deg engasjert, ikke nødvendigvis informert. Å innse at din egen sosiale medie-tilstedeværelse også er en nøye konstruert sammensatt tekst.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på nettaviser og sosiale medier:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-1-n-quiz4-q0',
            task: 'Hvorfor bruker nettaviser ofte overskrifter med ord som "sjokkerende" og "avslører"?',
            options: [
              { id: 'a', text: 'Fordi journalistene synes disse ordene beskriver nyhetene best', isCorrect: false },
              { id: 'b', text: 'Fordi det er krav fra presseetikken om å bruke sterke ord', isCorrect: false },
              { id: 'c', text: 'Fordi slike ord fanger oppmerksomheten og får folk til å klikke', isCorrect: true },
              { id: 'd', text: 'Fordi leserne har bedt om mer dramatiske overskrifter', isCorrect: false },
            ],
            solution: 'Sensasjonelle overskrifter er designet for å maksimere klikk. Jo flere klikk, jo mer annonseinntekter. Dette fenomenet kalles ofte clickbait. Som kritiske lesere bør vi være oppmerksomme på at dramatiske overskrifter ikke alltid reflekterer innholdets faktiske betydning.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz4-q1',
            task: 'Hva er nettavisers hovedmotivasjon for å holde deg scrollende så lenge som mulig?',
            options: [
              { id: 'a', text: 'Å sørge for at du er godt informert som borger', isCorrect: false },
              { id: 'b', text: 'Jo lenger du er på siden, jo flere annonser ser du, jo mer penger tjener avisen', isCorrect: true },
              { id: 'c', text: 'De prøver å erstatte skolens undervisning', isCorrect: false },
              { id: 'd', text: 'De vil at du skal bli venn med journalistene', isCorrect: false },
            ],
            solution: 'Nettavisers forretningsmodell er basert på annonseinntekter. Jo lenger du er på siden, jo flere annonser ser du. Derfor er forsiden designet med sensasjonelle overskrifter, sterke bilder og automatisk avspilling av video – alt for å holde deg engasjert.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz4-q2',
            task: 'Når du poster på sosiale medier og velger bilde, filter og tekst – hva driver du egentlig med?',
            options: [
              { id: 'a', text: 'Du skaper en sammensatt tekst der du kuraterer et image av deg selv', isCorrect: true },
              { id: 'b', text: 'Du gjør bare noe tilfeldig uten mening', isCorrect: false },
              { id: 'c', text: 'Du følger reglene plattformen har satt opp', isCorrect: false },
              { id: 'd', text: 'Du dokumenterer virkeligheten objektivt', isCorrect: false },
            ],
            solution: 'Hver post du lager er en sammensatt tekst der du velger bilde, filter, tekst, emojier og hashtags. Du kuraterer bevisst et image av deg selv – en selviscenesettelse der du velger hva som vises og hva som skjules.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Å lese mellom modalitetene ==========
    {
      id: 'norsk-vg1-6-1-n-section5',
      type: 'text',
      content: `## Å lese mellom modalitetene

Nå har du verktøyene. Du kjenner modalitetene. Du forstår samspillet mellom bilde og tekst. Du vet at reklame og medier er designet for å påvirke. Men hva gjør du med denne kunnskapen?

Det handler om å utvikle en vane med å spørre. Når du ser en sammensatt tekst, stopp opp og still deg selv noen enkle spørsmål. Hvem har laget denne teksten, og hva vil de oppnå? Hvilke modaliteter brukes, og hvordan samspiller de? Hvilke følelser forsøker teksten å vekke? Hva sies ikke, hva er utelatt?

Ta for eksempel en kampanje for et veldedig formål. Bildet viser et barn med store, triste øyne. Teksten ber om penger. Musikken i bakgrunnen er trist og sakte. Alt er designet for å vekke medlidenhet og skyld. Det betyr ikke at saken er uviktig eller at du ikke bør gi, men det betyr at du bør være bevisst på påvirkningsteknikkene.

Kritisk lesing handler ikke om å bli kynisk. Det handler om å ta informerte valg. Når du forstår hvordan sammensatte tekster virker, kan du velge bevisst hva du lar påvirke deg. Du kan skille mellom informasjon og manipulasjon. Du kan delta i mediesamfunnet med åpne øyne.

Og ikke minst kan du selv lage bedre sammensatte tekster. Når du skal lage en presentasjon, en plakat eller en post på sosiale medier, kan du bruke kunnskapen din til å kommunisere effektivt. Du kan velge modaliteter som støtter budskapet ditt. Du kan skape samspill som gir mening. Du går fra å være bare en mottaker til å bli en bevisst skaper av multimodale tekster.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på kritisk lesing av sammensatte tekster:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-1-n-quiz5-q0',
            task: 'Hva er det viktigste målet med å lære om sammensatte tekster?',
            options: [
              { id: 'a', text: 'Å kunne kritisere all reklame og medieinnhold', isCorrect: false },
              { id: 'b', text: 'Å ta informerte valg som bevisst mottaker og skaper av tekster', isCorrect: true },
              { id: 'c', text: 'Å unngå alle forsøk på påvirkning i hverdagen', isCorrect: false },
              { id: 'd', text: 'Å kunne lage mer effektiv reklame selv', isCorrect: false },
            ],
            solution: 'Målet er ikke å bli kynisk eller avvisende, men å utvikle bevissthet. Når du forstår hvordan sammensatte tekster virker, kan du navigere mediesamfunnet med åpne øyne og kommunisere mer effektivt selv.',
          },
          {
            id: 'norsk-vg1-6-1-n-quiz5-q1',
            task: 'Hvilke fire spørsmål bør du stille deg selv når du møter en sammensatt tekst?',
            options: [
              { id: 'a', text: 'Er teksten lang? Er den på norsk? Er den ny? Er den digital?', isCorrect: false },
              { id: 'b', text: 'Hvem har laget den? Hvilke modaliteter brukes? Hvilke følelser vekkes? Hva er utelatt?', isCorrect: true },
              { id: 'c', text: 'Hva koster den? Hvem anbefaler den? Er den populær? Er den lovlig?', isCorrect: false },
              { id: 'd', text: 'Er den vakker? Er den interessant? Er den morsom? Er den lang?', isCorrect: false },
            ],
            solution: 'Kritisk lesing handler om å stille fire nøkkelspørsmål: Hvem har laget teksten og hva vil de oppnå? Hvilke modaliteter brukes og hvordan samspiller de? Hvilke følelser forsøker teksten å vekke? Og hva sies ikke – hva er utelatt?',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Multimodalitetens verden

Du har nå fått innsikt i hvordan sammensatte tekster fungerer. Her er det viktigste å ta med seg:

**Modaliteter er uttrykksmåter.** De viktigste er verbal (tekst, typografi), visuell (bilder, farger, layout) og auditiv (lyd, musikk, stemme). I moderne tekster virker disse nesten alltid sammen.

**Samspillet mellom modaliteter kan ta ulike former.** Forankring er når teksten forklarer bildet. Avløsning er når bilde og tekst utfyller hverandre. Kontrast er når de står i motsetning, ofte for ironisk effekt.

**Reklame er et mesterskap i sammensatte tekster.** Alt er designet for å påvirke følelsene dine. Vær bevisst på hvilke retoriske virkemidler som brukes.

**Nettaviser og sosiale medier er også sammensatte tekster.** De er designet for å fange og holde oppmerksomheten din. Kritisk medieforståelse betyr å se gjennom designet.

**Nøkkelbegreper å huske:**
Modalitet, multimodal, forankring, avløsning, kontrast, layout, typografi, etos, patos, logos.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Film som tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_6_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-6-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '6.2',
  title: 'Film som tekst',
  subtitle: 'Narrativ versjon',
  description: 'Lær filmens hemmelige språk - hvordan kamera, klipping og lyd forteller historier.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere hvordan de ulike uttrykksformene virker sammen',
    'sammenligne tekster og vurdere hvordan samme tema behandles i ulike sjangrer og medier',
  ],
  linkedChapterId: 'norsk-vg1-6-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-6-2-n-intro',
      type: 'text',
      content: `## Når bildene begynner å bevege seg

Du sitter i en mørk kinosal. Lyset dempes, og plutselig er du ikke lenger i virkeligheten. Du er transportert til en annen verden, en annen tid, et annet liv. Hjertet banker når helten er i fare. Tårene kommer når forholdet ryker. Du ler, du grøsser, du føler med karakterer som ikke eksisterer.

Film er magi. Men det er en magi med regler og teknikker som kan læres. Bak hver scene du ser på skjermen ligger utallige valg tatt av regissør, fotograf, klipper og lyddesigner. Hvor skal kameraet stå? Hvor lenge skal vi dvele ved et ansikt? Hvilken musikk understreker følelsen? Disse valgene utgjør filmens språk, og når du lærer å lese dette språket, åpner det seg et helt nytt lag av mening i filmene du ser.

I dette kapittelet skal du lære filmspråkets grammatikk. Du skal forstå hvorfor enkelte scener får deg til å føle deg utilpass, mens andre gir deg sommerfugler i magen. Du skal se hvordan de samme historiene kan fortelles forskjellig i bok og film. Og du skal oppdage at å analysere film ikke ødelegger gleden ved å se den, det beriker den.`,
    },

    // ========== SEKSJON 1: Kameraets blikk ==========
    {
      id: 'norsk-vg1-6-2-n-section1',
      type: 'text',
      content: `## Kameraets blikk

Kameraet er filmens øye, og hvor dette øyet befinner seg, bestemmer mye av hvordan du oppfatter det du ser. La oss starte med noe så enkelt som avstand.

Tenk deg at du ser en person på skjermen. Hvis kameraet er langt unna og viser hele kroppen pluss omgivelsene rundt, kaller vi det et totalbilde. Dette etablerer scenen, viser oss hvor vi er, gir oss overblikk. Men vi føler ikke nødvendigvis noe sterkt for personen fordi vi er fysisk distansert.

Nå zoomer vi inn. Vi ser personen fra livet og opp, omtrent som om vi sto i en vanlig samtale. Dette er halvnært, og det føles naturlig og komfortabelt. Vi kan se ansiktsuttrykk og kroppsspråk uten at det blir for intimt.

Så kommer nærbilde. Ansiktet fyller skjermen. Vi ser hver rynke, hver tåre, hvert blikk. Dette er intimt og intenst. Vi kan nesten lese tankene til karakteren. Nærbilder brukes når følelser skal formidles, når vi skal føle med noen.

Og i det aller mest ekstreme, ekstrem nært, ser vi kanskje bare et øye, en hånd, en detalj. Dette fokuserer oppmerksomheten vår på noe spesifikt. En ring som tas av. En hånd som griper et våpen. En tåre som triller.

Kameravinkelen spiller også inn. Filmer vi nedenfra, fra froskeperspektiv, ser personen stor og mektig ut. Denne vinkelen brukes ofte for skurker, autoriteter, eller når vi skal føle oss små og underlegne. Filmer vi ovenfra, fra fugleperspektiv, ser personen liten og sårbar ut. Dette kan skape medlidenhet eller gi oss følelsen av å ha kontroll.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kamerateknikk og bildeutsnitt:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-2-n-quiz1-q0',
            task: 'En skurk i en film blir ofte filmet nedenfra så han virker stor og truende. Hva kalles denne kameravinkelen?',
            options: [
              { id: 'a', text: 'Fugleperspektiv', isCorrect: false },
              { id: 'b', text: 'Froskeperspektiv', isCorrect: true },
              { id: 'c', text: 'Normalperspektiv', isCorrect: false },
              { id: 'd', text: 'Totalperspektiv', isCorrect: false },
            ],
            solution: 'Froskeperspektiv betyr at kameraet filmer nedenfra og opp, som om du var en frosk som så opp på personen. Dette får personen til å virke mektig, dominerende eller truende.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz1-q1',
            task: 'Et ansikt fyller hele skjermen, og vi kan se hver tåre og hvert blikk. Hvilket bildeutsnitt er dette?',
            options: [
              { id: 'a', text: 'Totalbilde', isCorrect: false },
              { id: 'b', text: 'Halvnært', isCorrect: false },
              { id: 'c', text: 'Nærbilde', isCorrect: true },
              { id: 'd', text: 'Oversiktsbilde', isCorrect: false },
            ],
            solution: 'Nærbilde viser ansiktet i detalj og er intimt og intenst. Det brukes når følelser skal formidles – vi kan nesten lese tankene til karakteren. Nærbilder skaper nærhet og empati hos seeren.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz1-q2',
            task: 'Kameraet filmer ovenfra og ned på en person. Hvilken effekt gir dette fugleperspektivet?',
            options: [
              { id: 'a', text: 'Personen virker mektig og dominerende', isCorrect: false },
              { id: 'b', text: 'Personen virker naturlig og hverdagslig', isCorrect: false },
              { id: 'c', text: 'Personen virker liten og sårbar', isCorrect: true },
              { id: 'd', text: 'Personen virker usynlig for andre karakterer', isCorrect: false },
            ],
            solution: 'Fugleperspektiv (ovenfra og ned) får personen til å se liten og sårbar ut. Det kan skape medlidenhet hos seeren eller gi en følelse av kontroll og overblikk. Det er det motsatte av froskeperspektiv.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Klippingens rytme ==========
    {
      id: 'norsk-vg1-6-2-n-section2',
      type: 'text',
      content: `## Klippingens rytme

Tenk på klipping som filmens puls. Raske klipp er en hamrende hjertebane i en actionsekvens. Langsomme klipp er den rolige pusten i en romantisk scene. Hvor lenge et bilde varer på skjermen, og hvordan det kobles sammen med neste bilde, styrer hele følelsen av tid og intensitet.

I Hollywood-tradisjonell fortelling er målet at klippingen skal være usynlig. Du skal ikke legge merke til at bildet har skiftet, du skal bare flyte med i historien. Dette kalles kontinuitetsklipping, og det følger strenge regler for å opprettholde illusjonen. Hvis to personer snakker sammen, veksler vi mellom dem på en måte som føles naturlig. Handlingen flyter sømløst fra bilde til bilde.

Men noen ganger vil regissøren at du skal merke klippingen. Et brått kutt midt i en bevegelse, et jump cut, skaper uro og energi. Det bryter flyten og sier at noe er annerledes, intens, kaotisk. Franske nybølgefilmskapere på sekstitallet brukte dette bevisst for å riste i publikum.

Kryssklipping veksler mellom to eller flere parallelle hendelser. Tenk på en scene der helten kjører mot målet mens skurken forbereder fellen. Vi klipper mellom dem, raskere og raskere, og spenningen bygger seg opp. Vi vet at de snart møtes, og ventingen er nesten uutholdelig.

Montasjen er en sekvens av korte klipp som viser tid som går eller utvikling. Den klassiske treningssekvensen i sportsfilmer, der helten pusher seg hardere og hardere mens musikken driver, er en montasje. Den komprimerer uker eller måneder til minutter.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på klipping og filmrytme:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-2-n-quiz2-q0',
            task: 'Hva er formålet med kryssklipping i en film?',
            options: [
              { id: 'a', text: 'Å vise at lang tid har gått i filmens handling', isCorrect: false },
              { id: 'b', text: 'Å veksle mellom parallelle hendelser og bygge spenning', isCorrect: true },
              { id: 'c', text: 'Å skape en drømmeaktig og uvirkelig stemning', isCorrect: false },
              { id: 'd', text: 'Å spare tid i produksjonen ved å gjenbruke scener', isCorrect: false },
            ],
            solution: 'Kryssklipping veksler mellom to eller flere handlingslinjer som skjer samtidig. Dette skaper spenning fordi vi vet mer enn karakterene, og vi venter på at historietrådene skal møtes.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz2-q1',
            task: 'I en sportsfilm ser vi en treningssekvens der helten pusher seg hardere og hardere mens musikken driver. Hva kalles denne klippeteknikken?',
            options: [
              { id: 'a', text: 'Jump cut', isCorrect: false },
              { id: 'b', text: 'Kontinuitetsklipping', isCorrect: false },
              { id: 'c', text: 'Kryssklipping', isCorrect: false },
              { id: 'd', text: 'Montasje', isCorrect: true },
            ],
            solution: 'En montasje er en sekvens av korte klipp som komprimerer tid. Treningssekvensen i sportsfilmer er det klassiske eksempelet: uker eller måneder med trening vises på noen minutter med musikk som driver fremdriften.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz2-q2',
            task: 'Hva er målet med kontinuitetsklipping i Hollywood-film?',
            options: [
              { id: 'a', text: 'At klippingen skal være synlig og skape uro', isCorrect: false },
              { id: 'b', text: 'At klippingen skal være usynlig og opprettholde illusjonen av flyt', isCorrect: true },
              { id: 'c', text: 'At hvert klipp skal vare nøyaktig like lenge', isCorrect: false },
              { id: 'd', text: 'At det aldri skal klippes i en samtale', isCorrect: false },
            ],
            solution: 'Kontinuitetsklipping følger strenge regler for å gjøre overgangene usynlige. Seeren skal flyte med i historien uten å legge merke til at bildet skifter. Handlingen flyter sømløst fra bilde til bilde.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Lydens usynlige kraft ==========
    {
      id: 'norsk-vg1-6-2-n-section3',
      type: 'text',
      content: `## Lydens usynlige kraft

Lukk øynene under en film, og du vil oppdage hvor mye av opplevelsen som faktisk er lyd. Dialogen forteller oss hva som skjer. Lydeffektene plasserer oss i verden. Og musikken, den manipulerer følelsene våre på måter vi knapt er bevisste på.

Vi skiller mellom diegetisk og ikke-diegetisk lyd. Diegetisk lyd er lyd som kommer fra filmens verden, lyd som karakterene selv kan høre. Dialogen de snakker, musikken fra radioen i rommet, lyden av regnet mot vinduet. Ikke-diegetisk lyd er lagt til for oss seere, men eksisterer ikke i filmens univers. Filmmusikken som understreker følelsene, fortellerstemmen som kommenterer, lydeffekter som er forsterket for dramatikk.

Filmmusikk er kanskje det kraftigste verktøyet for følelsesmanipulasjon. De dunkle, truende tonene sier oss at faren lurer. De svulmende strykerne sier oss at nå skal vi røres. Den raske, pulserende rytmen sier at jakten er i gang. Uten musikk ville den samme scenen føles helt annerledes.

Og så har vi stillheten. I en verden full av lyd er stillheten kanskje det mest sjokkerende virkemiddelet. Når lyden plutselig forsvinner, stopper vi opp. Noe viktig er i ferd med å skje. Stillheten før eksplosjonen. Stillheten når karakteren innser sannheten. Stillheten som sier mer enn tusen ord.

Legg merke til lyden neste gang du ser en film. Hva hører du? Hva føler du? Og viktigst, hvordan henger disse sammen?`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på lyd og musikk i film:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-2-n-quiz3-q0',
            task: 'I en scene hører karakteren musikk fra en radio i rommet. I en annen scene spilles dramatisk orkestermusikk som bare vi seere kan høre. Hva kalles disse to typene lyd?',
            options: [
              { id: 'a', text: 'Aktiv og passiv lyd', isCorrect: false },
              { id: 'b', text: 'Intern og ekstern lyd', isCorrect: false },
              { id: 'c', text: 'Diegetisk og ikke-diegetisk lyd', isCorrect: true },
              { id: 'd', text: 'Naturlig og kunstig lyd', isCorrect: false },
            ],
            solution: 'Diegetisk lyd kommer fra filmens verden og kan høres av karakterene. Ikke-diegetisk lyd er lagt til for oss seere. Filmmusikk er det vanligste eksempelet på ikke-diegetisk lyd.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz3-q1',
            task: 'Hvorfor er stillhet et kraftig virkemiddel i film?',
            options: [
              { id: 'a', text: 'Fordi det sparer penger på lyden', isCorrect: false },
              { id: 'b', text: 'Fordi publikum liker pauser fra bråk', isCorrect: false },
              { id: 'c', text: 'Fordi det er teknisk umulig å ha lyd hele tiden', isCorrect: false },
              { id: 'd', text: 'Fordi plutselig stillhet i en verden full av lyd får oss til å stoppe opp – noe viktig er i ferd med å skje', isCorrect: true },
            ],
            solution: 'Stillhet fungerer som et sjokk i en film full av lyd. Når lyden plutselig forsvinner, skjerpes oppmerksomheten. Det signaliserer at noe avgjørende er i ferd med å skje – stillheten før eksplosjonen, øyeblikket av erkjennelse.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz3-q2',
            task: 'Hvilken funksjon har filmmusikk (ikke-diegetisk lyd) primært?',
            options: [
              { id: 'a', text: 'Å overdøve dårlig dialog', isCorrect: false },
              { id: 'b', text: 'Å manipulere følelsene våre og forsterke stemningen i scenen', isCorrect: true },
              { id: 'c', text: 'Å fortelle oss hva karakterene tenker', isCorrect: false },
              { id: 'd', text: 'Å fylle stillheten mellom dialoger', isCorrect: false },
            ],
            solution: 'Filmmusikk er kanskje det kraftigste verktøyet for følelsesmanipulasjon. Truende toner varsler fare, svulmende strykere signaliserer at nå skal vi røres, og rask rytme forteller at jakten er i gang. Uten musikk ville scener føles helt annerledes.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Fra bok til film ==========
    {
      id: 'norsk-vg1-6-2-n-section4',
      type: 'text',
      content: `## Fra bok til film

Du har lest boken og elsket den. Så kommer filmen, og du sitter i kinosalen med blandede følelser. Karakterene ser ikke ut som du forestilte deg. Favorittscenene dine er kuttet. Slutten er endret. Hvorfor kan ikke filmskaperne bare følge boken?

Svaret er at bok og film er fundamentalt forskjellige medier med forskjellige styrker og begrensninger. Å adaptere en bok til film er ikke å kopiere den, det er å oversette den til et nytt språk.

Boken har tilgang til noe filmen ikke har: tankene. Når du leser, kan forfatteren ta deg rett inn i hodet på karakteren. Du vet hva de tenker, hva de føler, hva de tviler på. Filmen kan bare vise utsiden, det som kan ses og høres. En skuespillers blikk, en bevegelse, en tåre. Regissøren må finne visuelle måter å formidle det boken kunne si direkte.

Boken har også tid. En roman kan bruke hundrevis av sider på å utforske et øyeblikk, eller hoppe over tiår i en setning. Filmen har vanligvis to timer. Noe må kuttes. Bikarakterer forsvinner. Handlingslinjer forenkles. Scener som tok femti sider i boken blir til fem minutter på skjermen.

Men filmen har også noe boken ikke har. Den visuelle kraften. Musikken som griper i hjertet. Skuespillernes tilstedeværelse. Øyeblikkene som ingen ord kan fange. En god adaptasjon handler ikke om å være trofast mot hvert ord i boken, men om å finne filmens egen måte å fortelle den samme historien, utforske de samme temaene, vekke de samme følelsene.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på adaptasjon fra bok til film:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-2-n-quiz4-q0',
            task: 'Hvorfor må filmatiseringer ofte kutte eller endre innhold fra bøkene de er basert på?',
            options: [
              { id: 'a', text: 'Fordi filmskaperne ikke har lest hele boken', isCorrect: false },
              { id: 'b', text: 'Fordi bok og film er forskjellige medier med ulike muligheter og begrensninger', isCorrect: true },
              { id: 'c', text: 'Fordi forfatterne nekter å la filmene være for like bøkene', isCorrect: false },
              { id: 'd', text: 'Fordi publikum foretrekker kortere historier i kinosalen', isCorrect: false },
            ],
            solution: 'Bok og film har fundamentalt ulike styrker. Boken kan gå inn i tanker og bruke ubegrenset tid. Filmen må vise alt visuelt og har begrenset tid. God adaptasjon handler om å finne filmens måte å fortelle historien på.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz4-q1',
            task: 'Hva er bokens største fordel sammenlignet med film?',
            options: [
              { id: 'a', text: 'Boken har bedre lydeffekter', isCorrect: false },
              { id: 'b', text: 'Boken har tilgang til karakterenes tanker og kan bruke ubegrenset tid', isCorrect: true },
              { id: 'c', text: 'Boken har vakrere bilder', isCorrect: false },
              { id: 'd', text: 'Boken er alltid mer populær enn filmen', isCorrect: false },
            ],
            solution: 'Boken har tilgang til noe filmen ikke har: tankene. Forfatteren kan ta deg rett inn i hodet på karakteren. Boken har også ubegrenset tid – den kan bruke hundrevis av sider på ett øyeblikk eller hoppe over tiår i én setning.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz4-q2',
            task: 'Hva kjennetegner en god filmadaptasjon av en bok?',
            options: [
              { id: 'a', text: 'At den kopierer boken ord for ord', isCorrect: false },
              { id: 'b', text: 'At den er så ulik boken som mulig', isCorrect: false },
              { id: 'c', text: 'At den finner filmens egen måte å utforske de samme temaene og følelsene', isCorrect: true },
              { id: 'd', text: 'At den bare bruker de mest kjente scenene fra boken', isCorrect: false },
            ],
            solution: 'En god adaptasjon handler ikke om troskap mot hvert ord, men om å finne filmens egen måte å fortelle historien på. Filmen har visuell kraft, musikk og skuespillere som kan formidle det boken uttrykker med ord.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Din tur til å se ==========
    {
      id: 'norsk-vg1-6-2-n-section5',
      type: 'text',
      content: `## Din tur til å se

Nå har du verktøyene til å lese film. Du forstår hvordan kameraets plassering påvirker følelsene dine, hvordan klippingen styrer rytmen, hvordan lyd og musikk manipulerer opplevelsen. Men kunnskap uten praksis er bare teori.

Neste gang du ser en film, velg ut én scene og analyser den nøye. Stopp opp og still spørsmål. Hvorfor er kameraet plassert akkurat der? Hvorfor varer dette bildet akkurat så lenge? Hva forteller musikken oss som dialogen ikke sier? Hvordan ville scenen føles med andre valg?

Prøv å se den samme scenen uten lyd. Se hvordan opplevelsen endres. Lytt til scenen uten å se på skjermen. Hva hører du som du ikke la merke til før? Disse øvelsene åpner øynene dine for filmspråkets elementer.

Sammenlign også film og bok. Hvis du har lest en roman som er filmatisert, studer hvordan adaptasjonen løser utfordringene. Hvordan viser filmen karakterens tanker? Hva er kuttet, og hvorfor? Hva tilfører filmen som boken ikke hadde? Begge medier har sin egen verdi.

Film er både kunst og håndverk. Den er drøm og teknikk. Den er følelse og analyse. Når du lærer å se begge sider, blir filmopplevelsen rikere. Du mister ikke magien, du forstår den bedre. Og kanskje, hvis du vil, kan du en dag skape din egen.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på filmanalyse i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-2-n-quiz5-q0',
            task: 'Hva er den beste måten å utvikle filmanalytiske ferdigheter på?',
            options: [
              { id: 'a', text: 'Å lese så mange teoribøker som mulig om filmhistorie', isCorrect: false },
              { id: 'b', text: 'Å se filmer og aktivt analysere scener med fokus på filmspråkets elementer', isCorrect: true },
              { id: 'c', text: 'Å unngå populære filmer og bare se kunstfilm', isCorrect: false },
              { id: 'd', text: 'Å alltid se filmer sammen med andre for å diskutere etterpå', isCorrect: false },
            ],
            solution: 'Filmanalyse er en praktisk ferdighet som utvikles gjennom bevisst observasjon. Ved å aktivt stille spørsmål til det du ser mens du ser det, blir analyseferdighetene en naturlig del av filmopplevelsen.',
          },
          {
            id: 'norsk-vg1-6-2-n-quiz5-q1',
            task: 'Hva kan du oppdage ved å se en filmscene uten lyd?',
            options: [
              { id: 'a', text: 'Ingenting nytt – lyd er ikke viktig i film', isCorrect: false },
              { id: 'b', text: 'At filmen er bedre uten lyd', isCorrect: false },
              { id: 'c', text: 'Hvor mye av filmopplevelsen som styres av lyd og musikk', isCorrect: true },
              { id: 'd', text: 'At skuespillerne snakker for fort', isCorrect: false },
            ],
            solution: 'Ved å se en scene uten lyd oppdager du hvor mye av følelsene og stemningen som faktisk styres av lyddesignet. Den samme scenen føles helt annerledes uten musikk – dette avslører lydens usynlige kraft i filmspråket.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Filmspråkets grammatikk

Du har nå lært grunnleggende i filmens språk. Her er det viktigste:

**Kameraet forteller.** Avstand (totalbilde, halvnært, nærbilde) styrer intimitet. Vinkel (fugle-, normal-, froskeperspektiv) styrer maktforhold. Hver plassering er et valg med mening.

**Klipping er rytme.** Raske klipp skaper intensitet. Langsomme klipp gir pusterom. Kryssklipping bygger spenning. Montasje viser tid.

**Lyd er følelse.** Diegetisk lyd kommer fra filmens verden. Ikke-diegetisk lyd er lagt til for oss. Musikk manipulerer følelsene. Stillhet er også et virkemiddel.

**Adaptasjon er oversettelse.** Bok og film har ulike styrker. Boken går inn i tanker, filmen viser. God adaptasjon finner filmens egen måte å fortelle på.

**Nøkkelbegreper å huske:**
Bildeutsnitt (totalt, halvnært, nært), kameravinkel (fugle-, froske-, normalperspektiv), klipping, kryssklipping, montasje, diegetisk/ikke-diegetisk lyd, adaptasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Digitale tekster og sosiale medier
// ============================================================================

export const CHAPTER_NORSK_VG1_6_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-6-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '6.3',
  title: 'Digitale tekster og sosiale medier',
  subtitle: 'Narrativ versjon',
  description: 'Forstå algoritmenes verden - hvordan sosiale medier former hva du ser og hvem du blir.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og produsere sammensatte tekster i digitale medier',
  ],
  linkedChapterId: 'norsk-vg1-6-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-6-3-n-intro',
      type: 'text',
      content: `## Velkomst til din personlige verden

Du våkner om morgenen og strekker deg etter telefonen. Før du har åpnet øynene ordentlig, scroller du gjennom feeden. Videoer av katter, nyheter om klimakrisen, en venns nye profilbilde, reklame for sko du så på i går. Det føles tilfeldig, men det er det ikke.

Bak skjermen sitter algoritmer og jobber døgnet rundt. De analyserer hvert klikk, hver like, hver sekund du dveler ved et bilde. De lærer hvem du er, hva du vil ha, hva som holder deg scrollende. Og de serverer deg en virkelighet som er skreddersydd for akkurat deg, en virkelighet som ingen andre ser på nøyaktig samme måte.

Dette er de digitale tekstenes verden. En verden der grensen mellom leser og skribent, mellom forbruker og produsent, er utydelig. En verden der du både blir påvirket og selv påvirker. En verden som former hvordan du tenker, føler og forstår virkeligheten rundt deg.

I dette kapittelet skal du lære å navigere denne verden med åpne øyne. Du skal forstå hvordan digitale tekster virker, hvordan algoritmene former hva du ser, og hvordan du kan ta tilbake kontrollen over din egen digitale opplevelse. For kunnskapen om hvordan du blir påvirket er første steg mot å ta informerte valg.`,
    },

    // ========== SEKSJON 1: Sosiale medier som tekst ==========
    {
      id: 'norsk-vg1-6-3-n-section1',
      type: 'text',
      content: `## Sosiale medier som tekst

Når du legger ut en post på Instagram, lager du en sammensatt tekst. Bildet du velger, filteret du bruker, teksten du skriver, emojiene du legger til, hashtaggene du merker med. Alt dette er valg som kommuniserer noe om hvem du er, eller hvem du vil at andre skal tro at du er.

Tenk på profilen din som en kuratert utstilling av deg selv. Du velger de beste bildene, de morsomste historiene, de fineste øyeblikkene. Du fjerner det som ikke passer inn i bildet du vil skape. Du konstruerer en identitet, en versjon av deg selv som eksisterer bare i det digitale rommet.

Dette er ikke løgn, men det er heller ikke hele sannheten. Det er selviscenesettelse, en naturlig del av all kommunikasjon. Men i sosiale medier er denne selviscenesettelsen intensivert. Vi har tid til å polere, filtrere, redigere. Vi kan slette og prøve igjen. Resultatet er en perfeksjonert fasade som kan føles overveldende å konkurrere med.

Og det er ikke bare individer som driver selviscenesettelse. Merkevarer gjør det. Influencere gjør det. Til og med nyhetsmedier gjør det. Alle kjemper om din oppmerksomhet med nøye kalkulerte sammensatte tekster. Å forstå dette er å forstå at det du ser på sosiale medier aldri er et uskyldig vindu inn i virkeligheten. Det er alltid en konstruksjon, alltid et valg, alltid en tekst som kan analyseres.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sosiale medier som sammensatte tekster:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-3-n-quiz1-q0',
            task: 'Hvorfor kan vi kalle en Instagram-post for en sammensatt tekst?',
            options: [
              { id: 'a', text: 'Fordi den alltid inneholder lange tekster', isCorrect: false },
              { id: 'b', text: 'Fordi den kombinerer flere uttrykksformer som bilde, tekst, filtre og hashtags', isCorrect: true },
              { id: 'c', text: 'Fordi den er skrevet av flere personer sammen', isCorrect: false },
              { id: 'd', text: 'Fordi den publiseres på flere plattformer samtidig', isCorrect: false },
            ],
            solution: 'En sammensatt tekst bruker flere modaliteter for å skape mening. En Instagram-post kombinerer visuelt (bilde, filter), verbalt (bildetekst, hashtags) og interaktivt (likes, kommentarer) for å kommunisere.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz1-q1',
            task: 'Hva menes med "selviscenesettelse" i sosiale medier?',
            options: [
              { id: 'a', text: 'At du lyver om hvem du er', isCorrect: false },
              { id: 'b', text: 'At du konstruerer en kuratert versjon av deg selv ved å velge de beste bildene og øyeblikkene', isCorrect: true },
              { id: 'c', text: 'At du poster så mye som mulig', isCorrect: false },
              { id: 'd', text: 'At du kopierer andre profiler', isCorrect: false },
            ],
            solution: 'Selviscenesettelse er å konstruere en versjon av seg selv for andre. Du velger de beste bildene, polerer og filtrerer. Det er ikke løgn, men heller ikke hele sannheten – det er en naturlig, men intensivert form for kommunikasjon.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz1-q2',
            task: 'Hvem driver selviscenesettelse på sosiale medier?',
            options: [
              { id: 'a', text: 'Bare ungdom og influencere', isCorrect: false },
              { id: 'b', text: 'Bare merkevarer og bedrifter', isCorrect: false },
              { id: 'c', text: 'Alle – individer, merkevarer, influencere og nyhetsmedier', isCorrect: true },
              { id: 'd', text: 'Ingen – alt på sosiale medier er autentisk', isCorrect: false },
            ],
            solution: 'Alle på sosiale medier driver selviscenesettelse. Individer kuraterer profilen sin, merkevarer bygger image, influencere skaper personlige brands, og nyhetsmedier velger hva de fremhever. Det du ser er alltid en konstruksjon.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Algoritmenes usynlige hånd ==========
    {
      id: 'norsk-vg1-6-3-n-section2',
      type: 'text',
      content: `## Algoritmenes usynlige hånd

Har du noen gang lurt på hvorfor akkurat de videoene dukker opp i TikTok-feeden din? Eller hvorfor Instagram viser deg akkurat de vennenes poster? Det er ikke tilfeldig. Det er algoritmer.

En algoritme er i bunn og grunn en oppskrift, et sett med regler som datamaskinen følger. Sosiale mediers algoritmer har ett hovedmål: å holde deg på plattformen så lenge som mulig. Jo lenger du scroller, jo flere annonser ser du, jo mer penger tjener de.

Så algoritmen lærer deg. Den registrerer hva du liker, hva du kommenterer, hvor lenge du dveler ved ulike poster. Den bygger en profil av deg og dine preferanser. Og basert på denne profilen viser den deg mer av det du sannsynligvis vil engasjere deg med.

Dette skaper det vi kaller filterbobler. Du ser stadig mer av det du allerede liker, og stadig mindre av det som utfordrer deg. Hvis du er interessert i miljøsaken, får du mer miljøinnhold. Hvis du er interessert i gaming, får du mer gaming. Problemet er at du samtidig får mindre av alt annet.

Filterbobler kan forsterkes til ekkokamre, der du bare møter meninger du allerede er enig i. Algoritmen gir deg det du vil ha, og du tror at alle tenker som deg fordi alle du ser tenker som deg. Virkeligheten utenfor boblen blir fremmed og uforståelig.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på algoritmer og filterbobler:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-3-n-quiz2-q0',
            task: 'Hva er en filterboble?',
            options: [
              { id: 'a', text: 'Et verktøy for å blokkere uønsket innhold manuelt', isCorrect: false },
              { id: 'b', text: 'Når algoritmer viser deg innhold basert på tidligere aktivitet, slik at du får et begrenset syn', isCorrect: true },
              { id: 'c', text: 'En type filter som gjør bildene dine penere', isCorrect: false },
              { id: 'd', text: 'En sikkerhetsfunksjon som beskytter mot virus', isCorrect: false },
            ],
            solution: 'Filterbobler oppstår når algoritmer viser deg mer av det du allerede liker og mindre av det som utfordrer deg. Du ender opp i en boble der virkeligheten er filtrert etter dine preferanser.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz2-q1',
            task: 'Hva er hovedmålet til sosiale mediers algoritmer?',
            options: [
              { id: 'a', text: 'Å gi deg den viktigste informasjonen du trenger', isCorrect: false },
              { id: 'b', text: 'Å beskytte deg mot falske nyheter', isCorrect: false },
              { id: 'c', text: 'Å holde deg på plattformen så lenge som mulig', isCorrect: true },
              { id: 'd', text: 'Å lære deg nye ting om verden', isCorrect: false },
            ],
            solution: 'Algoritmenes hovedmål er å holde deg på plattformen så lenge som mulig. Jo lenger du scroller, jo flere annonser ser du, jo mer penger tjener selskapet. Algoritmene optimaliserer for engasjement, ikke for din informasjonsnytte.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz2-q2',
            task: 'Hva er forskjellen mellom en filterboble og et ekkokammer?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell – ordene betyr det samme', isCorrect: false },
              { id: 'b', text: 'Filterbobler er skapt av algoritmer, ekkokamre forsterkes i grupper av likesinnede der bare én mening høres', isCorrect: true },
              { id: 'c', text: 'Filterbobler handler om bilder, ekkokamre om lyd', isCorrect: false },
              { id: 'd', text: 'Ekkokamre er positive, filterbobler er negative', isCorrect: false },
            ],
            solution: 'Filterbobler skapes av algoritmer som viser deg mer av det du liker. Ekkokamre er en forsterking der du kun møter likesinnede i grupper. I et ekkokammer bekreftes meninger, og stemmer som stiller spørsmål utestenges.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Influencere og skjult reklame ==========
    {
      id: 'norsk-vg1-6-3-n-section3',
      type: 'text',
      content: `## Influencere og skjult reklame

Hun har en million følgere. Hun deler hverdagen sin, produktene hun bruker, stedene hun besøker. Du føler at du kjenner henne, at hun er en slags venninne. Når hun anbefaler en ansiktskrem, føles det ikke som reklame. Det føles som et tips fra en du stoler på.

Dette er influencermarkedsføringens genialitet. Den utnytter den personlige forbindelsen vi føler til folk vi følger på sosiale medier. I stedet for tradisjonell reklame som vi har lært å ignorere, kommer produktanbefalingene fra noen vi liker og stoler på. Det er som jungeltelegrafen på steroider.

Men det er viktig å huske at dette er forretning. Influencere får betalt, enten i penger, produkter eller andre fordeler. Det som fremstår som en spontan anbefaling kan være et nøye planlagt sponset innlegg. Og selv om de etter loven skal merke slikt innhold, er merkingen ofte diskret og lett å overse.

Problemet er ikke at influencere tjener penger. Problemet er når grensen mellom personlig og kommersielt blir så utydelig at vi ikke lenger vet hva vi kan stole på. Når hver anbefaling potensielt er kjøpt, hvordan kan vi da ta informerte valg?

Kritisk medieforståelse handler om å stille spørsmål. Hvorfor poster denne personen akkurat dette? Hvem tjener på at jeg kjøper dette produktet? Er denne anbefalingen ekte eller betalt? Ikke fordi alt er løgn, men fordi du fortjener å vite når noen prøver å selge deg noe.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på influencere og skjult reklame:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-3-n-quiz3-q0',
            task: 'Hvorfor er influencer-markedsføring så effektiv?',
            options: [
              { id: 'a', text: 'Fordi influencere alltid tester produktene grundig før de anbefaler dem', isCorrect: false },
              { id: 'b', text: 'Fordi vi føler personlig tilknytning til influencere og stoler på deres anbefalinger', isCorrect: true },
              { id: 'c', text: 'Fordi influencere bare anbefaler produkter de virkelig liker', isCorrect: false },
              { id: 'd', text: 'Fordi influencer-reklame er billigere enn vanlig reklame', isCorrect: false },
            ],
            solution: 'Influencer-markedsføring utnytter den parasosiale relasjonen, altså følelsen av personlig forbindelse til noen vi følger. Anbefalinger fra influencere føles som tips fra en venn, ikke som tradisjonell reklame.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz3-q1',
            task: 'Hva bør du spørre deg selv når en influencer anbefaler et produkt?',
            options: [
              { id: 'a', text: 'Hvor mange følgere har denne influenceren?', isCorrect: false },
              { id: 'b', text: 'Er denne anbefalingen ekte eller betalt? Hvem tjener på at jeg kjøper dette?', isCorrect: true },
              { id: 'c', text: 'Har influenceren et pent bilde i posten?', isCorrect: false },
              { id: 'd', text: 'Er produktet populært blant andre influencere?', isCorrect: false },
            ],
            solution: 'Kritisk medieforståelse innebærer å spørre: Hvorfor poster denne personen dette? Er det betalt? Hvem tjener på at du kjøper? Ikke fordi alt er løgn, men fordi du fortjener å vite når noen prøver å selge deg noe.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Din digitale identitet ==========
    {
      id: 'norsk-vg1-6-3-n-section4',
      type: 'text',
      content: `## Din digitale identitet

Hvem er du på nettet? Spørsmålet er mer komplisert enn det høres ut. Du har kanskje én identitet på Instagram, en annen på TikTok, en tredje i kommentarfeltene på YouTube. Hver plattform har sine normer, sin kultur, sine forventninger. Og du tilpasser deg.

Denne digitale identiteten er en sammensatt tekst du skriver kontinuerlig. Hvert bilde, hver kommentar, hver like er et utsagn om hvem du er eller vil være. Og i motsetning til samtaler som forsvinner, blir det digitale værende. Din digitale identitet bygges over tid, lag på lag, og den kan være vanskelig å endre.

Men det finnes også en annen side av din digitale identitet, den som du ikke kontrollerer. Datapunktene. Algoritmenes profil av deg. Hvert søk du gjør, hver side du besøker, hvert produkt du ser på, legges til en profil som brukes til å målrette reklame mot deg. Denne skyggeidentiteten kjenner kanskje sider ved deg du ikke engang er bevisst selv.

Personvern i den digitale verden handler om å forstå denne dobbelheten. Du har kontroll over hva du aktivt deler, men mindre kontroll over hva som samles inn om deg passivt. Bevissthet om dette er første steg. Å aktivt velge hva du deler og med hvem, er neste.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på digital identitet og personvern:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-3-n-quiz4-q0',
            task: 'Hva menes med at du har en digital identitet du ikke kontrollerer?',
            options: [
              { id: 'a', text: 'At andre kan lage falske profiler i ditt navn', isCorrect: false },
              { id: 'b', text: 'At algoritmer bygger en profil av deg basert på data du ikke aktivt har delt', isCorrect: true },
              { id: 'c', text: 'At foreldre og lærere kan se alt du gjør på nettet', isCorrect: false },
              { id: 'd', text: 'At du glemmer passordene dine og mister tilgang', isCorrect: false },
            ],
            solution: 'I tillegg til det du aktivt deler, samles det inn data om din aktivitet: hva du søker på, hva du klikker på, hvor lenge du ser på ting. Dette bygger en skjult profil som brukes til å målrette innhold og reklame.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz4-q1',
            task: 'Hvorfor kan du ha ulike digitale identiteter på ulike plattformer?',
            options: [
              { id: 'a', text: 'Fordi plattformene tvinger deg til å endre identitet', isCorrect: false },
              { id: 'b', text: 'Fordi du tilpasser deg til ulike normer, kulturer og forventninger på hver plattform', isCorrect: true },
              { id: 'c', text: 'Fordi du glemmer hvem du er mellom plattformene', isCorrect: false },
              { id: 'd', text: 'Fordi det er ulovlig å ha lik profil overalt', isCorrect: false },
            ],
            solution: 'Hver plattform har sine normer og sin kultur. Du kan ha én identitet på Instagram (visuell, polert), en annen på TikTok (morsom, uformell), og en tredje på LinkedIn (profesjonell). Du tilpasser deg konteksten, akkurat som i fysiske sosiale situasjoner.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz4-q2',
            task: 'Hva er "skyggeidentiteten" din i den digitale verden?',
            options: [
              { id: 'a', text: 'En falsk profil noen har laget av deg', isCorrect: false },
              { id: 'b', text: 'Profilen din på sosiale medier om natten', isCorrect: false },
              { id: 'c', text: 'Den dataprofilen algoritmer bygger basert på søk, klikk og atferd du ikke aktivt har delt', isCorrect: true },
              { id: 'd', text: 'Ditt gamle brukernavn som du har glemt', isCorrect: false },
            ],
            solution: 'Skyggeidentiteten er algoritmenes profil av deg, bygget på datapunkter du ikke aktivt har delt: hva du søker, hva du klikker, hva du dveler ved. Denne profilen kjenner kanskje sider ved deg du ikke engang er bevisst selv.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Å ta tilbake kontrollen ==========
    {
      id: 'norsk-vg1-6-3-n-section5',
      type: 'text',
      content: `## Å ta tilbake kontrollen

Det høres kanskje dystopisk ut. Algoritmer som styrer hva du ser. Filterbobler som begrenser perspektivet. Skjult reklame overalt. Men kunnskap er makt, og nå som du forstår hvordan systemet fungerer, kan du ta smartere valg.

Start med bevissthet. Neste gang du scroller, stopp opp og spør deg selv hvorfor akkurat dette innholdet vises til deg. Hva har algoritmen lært om deg? Stemmer det med hvem du egentlig vil være? Du trenger ikke passivt akseptere det feeden serverer.

Utfordr boblene dine. Følg noen som mener noe annet enn deg. Les nyheter fra kilder du vanligvis ikke oppsøker. Søk aktivt etter perspektiver som utfordrer. Algoritmen vil fortsatt prøve å gi deg mer av det samme, men du kan bevisst motarbeide den.

Tenk på hva du deler. Hver post du lager bidrar til andres filterbobler. Sprer du informasjon du ikke har sjekket? Forsterker du stereotype? Bidrar du til god eller dårlig samtalekultur? Du er ikke bare en mottaker av digitale tekster, du er også en skaper.

Til slutt, husk at sosiale medier er verktøy, ikke virkeligheten. De er designet for å holde deg engasjert, ikke nødvendigvis for å gjøre deg lykkelig eller informert. Ta pauser. Møt folk ansikt til ansikt. Opplev verden ufiltrert. Den digitale verden er en del av livet ditt, men den trenger ikke være hele livet.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-6-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på digital bevissthet og kontroll:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-3-n-quiz5-q0',
            task: 'Hva er den viktigste måten å motvirke filterbobler på?',
            options: [
              { id: 'a', text: 'Å slutte helt å bruke sosiale medier', isCorrect: false },
              { id: 'b', text: 'Å aktivt oppsøke ulike perspektiver og kilder du vanligvis ikke ser', isCorrect: true },
              { id: 'c', text: 'Å bare bruke én plattform slik at algoritmen blir mer presis', isCorrect: false },
              { id: 'd', text: 'Å slette alle cookies og starte på nytt hver dag', isCorrect: false },
            ],
            solution: 'Filterbobler oppstår fordi algoritmer gir deg mer av det samme. Ved å aktivt oppsøke ulike perspektiver, utfordrer du både algoritmen og ditt eget verdensbilde. Det handler om bevisste valg.',
          },
          {
            id: 'norsk-vg1-6-3-n-quiz5-q1',
            task: 'Hvorfor er det viktig å huske at sosiale medier er verktøy, ikke virkeligheten?',
            options: [
              { id: 'a', text: 'Fordi sosiale medier er designet for å holde deg engasjert, ikke nødvendigvis informert eller lykkelig', isCorrect: true },
              { id: 'b', text: 'Fordi sosiale medier er ulovlige i noen land', isCorrect: false },
              { id: 'c', text: 'Fordi alt på sosiale medier er falskt', isCorrect: false },
              { id: 'd', text: 'Fordi sosiale medier snart forsvinner', isCorrect: false },
            ],
            solution: 'Sosiale medier er designet for engasjement og inntekter, ikke for din trivsel. Å ta pauser, møte folk ansikt til ansikt og oppleve verden ufiltrert er viktige motvekter. Den digitale verden er en del av livet, men trenger ikke være hele livet.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Navigere den digitale verden

Du har nå innsikt i hvordan digitale tekster og sosiale medier fungerer:

**Sosiale medier er sammensatte tekster.** Alt du poster er en konstruksjon som kommuniserer hvem du er eller vil være. Alt du ser er også konstruksjoner, ikke ufiltrert virkelighet.

**Algoritmer former hva du ser.** De analyserer aktiviteten din og viser deg mer av det du engasjerer deg med. Dette skaper filterbobler og potensielt ekkokamre der du bare møter likesinnede.

**Influencer-markedsføring utnytter tillit.** Den parasosiale relasjonen vi føler til influencere gjør at anbefalinger føles personlige, selv når de er betalt reklame.

**Du har en digital identitet du delvis kontrollerer.** Det du aktivt deler er én ting, datapunktene som samles om deg passivt er en annen.

**Du kan ta tilbake kontrollen.** Gjennom bevissthet, aktive valg og vilje til å utfordre egne bobler kan du navigere den digitale verden smartere.

**Nøkkelbegreper å huske:**
Algoritme, filterboble, ekkokammer, influencer, digital identitet, personvern, selviscenesettelse.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Kildekritikk og falske nyheter
// ============================================================================

export const CHAPTER_NORSK_VG1_6_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-6-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '6.4',
  title: 'Kildekritikk og falske nyheter',
  subtitle: 'Narrativ versjon',
  description: 'Lær å skille fakta fra fiksjon - din guide til å avsløre løgn og manipulasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke kilder kritisk og selvstendig i egne tekster',
    'vurdere troverdigheten til ulike typer kilder og informasjon',
    'reflektere over hvordan tekster påvirker og påvirkes av samfunnet',
  ],
  linkedChapterId: 'norsk-vg1-6-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-6-4-n-intro',
      type: 'text',
      content: `## I et hav av informasjon

Det har aldri vært lettere å finne informasjon. Et tastetrykk, og verden ligger foran deg. Svar på alle spørsmål, dokumenter om alle emner, meninger fra alle kanter. Men med denne uendelige tilgangen følger en ubehagelig sannhet: Ikke alt du finner er sant.

Falske nyheter. Desinformasjon. Konspirasjonsteorier. Disse ordene har blitt en del av dagligtalen vår, og med god grunn. I en verden der alle kan publisere hva som helst, der innhold spres med lysets hastighet, der algoritmene forsterker det sensasjonelle, har løgnen aldri hatt bedre vilkår.

Men dette er ikke bare et problem for andre. Det er et problem for deg. Hver gang du deler noe uten å sjekke, risikerer du å bli en brikke i spredningen av usannheter. Hver gang du tror på noe uten å vurdere kilden, risikerer du å bli lurt. Og i verste fall kan falsk informasjon påvirke valg, helse og liv.

I dette kapittelet skal du lære å forsvare deg. Du skal forstå hva falske nyheter egentlig er og hvorfor de spres. Du skal få verktøy for å vurdere troverdigheten til det du leser. Og du skal oppdage at kildekritikk ikke handler om å bli paranoid, men om å bli en klokere, mer informert borger i et demokratisk samfunn.`,
    },

    // ========== SEKSJON 1: Hva er falske nyheter egentlig? ==========
    {
      id: 'norsk-vg1-6-4-n-section1',
      type: 'text',
      content: `## Hva er falske nyheter egentlig?

Begrepet falske nyheter kastes rundt, men det dekker faktisk mange ulike fenomener. Å forstå nyansene hjelper deg å identifisere hva du står overfor.

På den ene enden av spekteret har vi satire og parodi. Når aviser som The Onion eller norske Nansen skriver åpenbart overdrevne artikler for humoristisk effekt, er det ikke ment å lure noen. Problemet oppstår når slike tekster tas ut av kontekst og deles som om de var ekte nyheter.

Så har vi feilinformasjon, eller misinformasjon. Dette er usann informasjon som spres av folk som selv tror det er sant. Bestemoren som deler en artikkel om at kaffe kurerer kreft, tror virkelig på det. Hun vil ikke lure noen, hun er selv lurt. Og uten å vite det bidrar hun til å spre usannheten videre.

Desinformasjon er verre. Her er det bevisst løgn, skapt for å villede. Noen har laget falskt innhold med vilje, enten for å tjene penger på klikk, påvirke politiske meninger, eller skape forvirring og splittelse. Dette er informasjonskrig, og du er målet.

Propaganda hører også hjemme her. Systematisk påvirkning av holdninger gjennom strategisk kommunikasjon. Det trenger ikke være rent løgn, det kan være sannheter presentert på misvisende måter, eller viktig informasjon som utelates. Målet er å forme hvordan du tenker.

Å skille mellom disse kategoriene er viktig fordi løsningene er forskjellige. Misinformasjon krever utdanning og faktasjekk. Desinformasjon krever avslørng og ansvarliggjøring. Propaganda krever kritisk bevissthet om maktstrukturer.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på typer falske nyheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-4-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom feilinformasjon (misinformasjon) og desinformasjon?',
            options: [
              { id: 'a', text: 'Misinformasjon er på nettet, desinformasjon er i aviser', isCorrect: false },
              { id: 'b', text: 'Misinformasjon spres uten ond hensikt, desinformasjon lages bevisst for å villede', isCorrect: true },
              { id: 'c', text: 'Misinformasjon er om politikk, desinformasjon er om helse', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, ordene betyr det samme', isCorrect: false },
            ],
            solution: 'Misinformasjon spres av folk som tror informasjonen er sann. De er selv lurt og sprer den videre i god tro. Desinformasjon er bevisst falsk informasjon skapt for å villede. Hensikten er avgjørende.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz1-q1',
            task: 'En satirisk artikkel fra en humoravis deles på sosiale medier som om den er en ekte nyhet. Hva har skjedd?',
            options: [
              { id: 'a', text: 'Avisen har begått desinformasjon', isCorrect: false },
              { id: 'b', text: 'Satiren er tatt ut av kontekst og blitt til misinformasjon', isCorrect: true },
              { id: 'c', text: 'Leserne har gjort riktig i å dele nyheten', isCorrect: false },
              { id: 'd', text: 'Det er propaganda fra avisen', isCorrect: false },
            ],
            solution: 'Satire og parodi er ikke ment å lure noen, men når de tas ut av kontekst og deles som ekte nyheter, blir de til misinformasjon. De som deler tror det er sant – de har selv blitt lurt av den manglende konteksten.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz1-q2',
            task: 'Hva kjennetegner propaganda sammenlignet med ren løgn?',
            options: [
              { id: 'a', text: 'Propaganda er alltid sann, bare lite kjent', isCorrect: false },
              { id: 'b', text: 'Propaganda trenger ikke være rent løgn – den kan presentere sannheter på misvisende måter eller utelate viktig informasjon', isCorrect: true },
              { id: 'c', text: 'Propaganda finnes bare i diktaturer', isCorrect: false },
              { id: 'd', text: 'Propaganda og løgn er nøyaktig det samme', isCorrect: false },
            ],
            solution: 'Propaganda er systematisk påvirkning som ikke nødvendigvis er ren løgn. Den kan bruke sannheter presentert på misvisende måter, utelate viktig informasjon, eller framheve noe på bekostning av noe annet. Målet er å forme hvordan du tenker.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: TONE-modellen - ditt kildekritiske verktøy ==========
    {
      id: 'norsk-vg1-6-4-n-section2',
      type: 'text',
      content: `## TONE-modellen - ditt kildekritiske verktøy

Du trenger ikke huske en lang liste med kildekritiske spørsmål. Du trenger bare å huske ett ord: TONE. Hvert bokstav står for et viktig aspekt ved kildevurdering.

T er for Troverdighet. Hvem er avsenderen? Er det en anerkjent kilde med kompetanse på området? Oppgir de sine kilder? Har nettstedet kontaktinformasjon og redaksjon? En artikkel fra NRK eller VG har gjennomgått redaksjonell kontroll. En anonym blogg har det ikke.

O er for Objektivitet. Hva er formålet med teksten? Er fremstillingen balansert, eller høres bare én side av saken? Er det skjulte interesser, som reklame eller politisk agenda? Brukes følelsesladet språk som prøver å manipulere mer enn å informere?

N er for Nøyaktighet. Er fakta korrekte og etterprøvbare? Oppgis presise tall og kilder? Stemmer informasjonen med det andre pålitelige kilder sier? Er det skrivefeil og slurv som tyder på manglende kvalitetskontroll?

E er for Egnethet. Er kilden relevant for det du undersøker? Er informasjonen oppdatert? Passer kildens nivå og vinkling til formålet ditt?

Bruk TONE hver gang du møter informasjon du er usikker på. Det trenger ikke ta lang tid. Et raskt mentalt sjekk gjennom de fire punktene kan spare deg for å tro på og spre usannheter.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på TONE-modellen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-4-n-quiz2-q0',
            task: 'Hva står O for i TONE-modellen?',
            options: [
              { id: 'a', text: 'Original - om kilden er den opprinnelige', isCorrect: false },
              { id: 'b', text: 'Objektivitet - om fremstillingen er balansert', isCorrect: true },
              { id: 'c', text: 'Oppdatert - om informasjonen er ny', isCorrect: false },
              { id: 'd', text: 'Offisiell - om kilden er godkjent', isCorrect: false },
            ],
            solution: 'O i TONE står for Objektivitet. Vi spør om fremstillingen er balansert, om flere sider av saken presenteres, og om det finnes skjulte interesser eller agendaer bak informasjonen.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz2-q1',
            task: 'Hva spør du om under T i TONE-modellen?',
            options: [
              { id: 'a', text: 'Om teksten handler om et viktig tema', isCorrect: false },
              { id: 'b', text: 'Om avsenderen er troverdig, med kompetanse og redaksjonell kontroll', isCorrect: true },
              { id: 'c', text: 'Om teksten er tilgjengelig for alle', isCorrect: false },
              { id: 'd', text: 'Om teksten er trykt eller digital', isCorrect: false },
            ],
            solution: 'T står for Troverdighet. Du spør: Hvem er avsenderen? Er det en anerkjent kilde med kompetanse? Oppgir de sine kilder? Har nettstedet kontaktinformasjon og redaksjon? En artikkel fra NRK har gjennomgått kontroll, en anonym blogg har det ikke.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz2-q2',
            task: 'Hva står E for i TONE-modellen?',
            options: [
              { id: 'a', text: 'Emosjonell - om teksten vekker følelser', isCorrect: false },
              { id: 'b', text: 'Etisk - om teksten er moralsk forsvarlig', isCorrect: false },
              { id: 'c', text: 'Egnethet - om kilden er relevant og oppdatert for ditt formål', isCorrect: true },
              { id: 'd', text: 'Ekspert - om forfatteren er professor', isCorrect: false },
            ],
            solution: 'E står for Egnethet. Du spør: Er kilden relevant for det du undersøker? Er informasjonen oppdatert? Passer kildens nivå og vinkling til ditt formål? En kilde kan være troverdig, men likevel uegnet for det du trenger.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz2-q3',
            task: 'Du finner en artikkel med mange skrivefeil og ingen kildehenvisninger. Hvilket TONE-punkt svikter?',
            options: [
              { id: 'a', text: 'Bare E (Egnethet)', isCorrect: false },
              { id: 'b', text: 'Bare O (Objektivitet)', isCorrect: false },
              { id: 'c', text: 'N (Nøyaktighet) – skrivefeil og manglende kilder tyder på lav kvalitetskontroll', isCorrect: true },
              { id: 'd', text: 'Ingen – skrivefeil betyr ingenting', isCorrect: false },
            ],
            solution: 'N står for Nøyaktighet. Skrivefeil og manglende kildehenvisninger tyder på at innholdet ikke har gjennomgått grundig kvalitetskontroll. Hvis det slurves med form, kan det også slurves med fakta.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Faktasjekking i praksis ==========
    {
      id: 'norsk-vg1-6-4-n-section3',
      type: 'text',
      content: `## Faktasjekking i praksis

Du ser en påstand på sosiale medier som høres utrolig ut. Kanskje er den utrolig bra, kanskje utrolig skremmende. Uansett trigger den en følelse. Og det er akkurat da du bør stoppe opp.

Steg én er å ikke dele videre med en gang. Det koster deg bare noen sekunder å sjekke, men det kan spare deg for pinlighet og bidra til å stoppe spredningen av usannheter. Den følelsen av at du må dele det med en gang, er ofte et tegn på at noen prøver å manipulere deg.

Steg to er å søke etter originalkilden. Hvem sa dette først? Finnes det en primærkilde du kan sjekke? Ofte er påstander tatt ut av kontekst, sitater fordreid, eller kilder diktet opp. Gå til kilden og se selv.

Steg tre er å kryssjekke. Rapporterer andre troverdige medier det samme? Hvis en dramatisk nyhet bare finnes på ett obskurt nettsted og ingen etablerte medier har plukket den opp, bør du være skeptisk. Men vær også obs på at mange kan sitere den samme feilaktige kilden.

Steg fire er å bruke faktasjekkere. Faktisk.no er Norges største faktasjekktjeneste. Snopes.com og FullFact.org er gode internasjonale alternativer. Disse tjenestene har allerede undersøkt mange vanlige myter og påstander.

Steg fem, hvis påstanden involverer et bilde eller en video, gjør et omvendt bildesøk. Last opp bildet til Google Bilder eller TinEye og se hvor det dukker opp. Ofte viser det seg at bildet er gammelt, fra en helt annen hendelse, eller manipulert.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-6-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på faktasjekking i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-4-n-quiz3-q0',
            task: 'Et dramatisk bilde deles på sosiale medier med påstand om at det viser en aktuell hendelse. Hva er den beste måten å sjekke om dette stemmer?',
            options: [
              { id: 'a', text: 'Se om bildet har mange likes og delinger, noe som tyder på at det er ekte', isCorrect: false },
              { id: 'b', text: 'Gjøre et omvendt bildesøk for å finne ut når og hvor bildet faktisk ble tatt', isCorrect: true },
              { id: 'c', text: 'Spørre i kommentarfeltet om noen vet om bildet er ekte', isCorrect: false },
              { id: 'd', text: 'Stole på at bildet er ekte hvis det ser profesjonelt ut', isCorrect: false },
            ],
            solution: 'Omvendt bildesøk lar deg finne ut hvor bildet opprinnelig kommer fra. Ofte avslører dette at bildet er gammelt eller fra en helt annen hendelse enn det påstås. Bilder brukes ofte feil for å gi falske påstander troverdighet.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz3-q1',
            task: 'Du ser en sjokkerende påstand på sosiale medier. Hva bør du gjøre FØRST?',
            options: [
              { id: 'a', text: 'Dele den med vennene dine med en gang', isCorrect: false },
              { id: 'b', text: 'Stoppe opp og ikke dele videre før du har sjekket', isCorrect: true },
              { id: 'c', text: 'Blokkere avsenderen umiddelbart', isCorrect: false },
              { id: 'd', text: 'Skrive en sint kommentar under posten', isCorrect: false },
            ],
            solution: 'Det aller første steget er å stoppe og ikke dele videre med en gang. Følelsen av at du MÅ dele noe umiddelbart, er ofte et tegn på at noen prøver å manipulere deg. Noen få sekunders sjekk kan spare deg for å spre usannheter.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz3-q2',
            task: 'En dramatisk nyhet finnes bare på ett obskurt nettsted. Ingen etablerte medier har dekket den. Hva tyder dette på?',
            options: [
              { id: 'a', text: 'At nettstedet har en eksklusiv scoop ingen andre har fått med seg', isCorrect: false },
              { id: 'b', text: 'At de etablerte mediene sensurerer nyheten', isCorrect: false },
              { id: 'c', text: 'At påstanden sannsynligvis ikke er troverdig og bør behandles med stor skepsis', isCorrect: true },
              { id: 'd', text: 'At nyheten er for fersk til at andre har rukket å dekke den', isCorrect: false },
            ],
            solution: 'Kryssjekking er et viktig steg i faktasjekking. Hvis en dramatisk nyhet bare finnes på ett nettsted og ingen troverdige medier har plukket den opp, bør du være svært skeptisk. Ekte, viktige nyheter dekkes vanligvis av flere kilder.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Ekkokamre og algoritmers rolle ==========
    {
      id: 'norsk-vg1-6-4-n-section4',
      type: 'text',
      content: `## Ekkokamre og algoritmers rolle

Falske nyheter spres ikke i et vakuum. De spres i et medielandskap formet av algoritmer, og dette landskapet kan gjøre oss alle mer sårbare for manipulasjon.

Husk filterbobler fra forrige kapittel? De spiller en viktig rolle her. Når algoritmen viser deg mer av det du allerede engasjerer deg med, betyr det at du ser mindre av motstridende informasjon. Hvis du er tilbøyelig til å tro på en type påstander, vil du se flere av den typen, og færre faktasjekker og motargumenter.

Ekkokamre forsterker dette. I grupper av likesinnede, enten det er på Facebook, Reddit eller Discord, blir påstander bekreftet og forsterket. Alle er enige, alle deler de samme artiklene, og stemmer som stiller spørsmål blir utestengt eller nedstemt. I et slikt miljø kan selv de villeste konspirasjonsteorier føles rimelige.

Viralitet spiller også inn. Innhold som vekker sterke følelser, spesielt sinne, frykt eller moralsk harme, spres raskere enn nøkternt og nyansert innhold. Falske nyheter er ofte designet for å treffe disse følelsesmessige triggerne. De vet at det føles godt å dele noe som bekrefter dine allerede eksisterende meninger.

Å forstå dette er ikke å frikjenne deg selv fra ansvar. Det er å forstå terrenget du navigerer i. Du kan velge å bryte ut av ekkokamrene, oppsøke kilder som utfordrer deg, og motstå fristelsen til å dele noe bare fordi det føles riktig.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-6-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på ekkokamre og spredning av falske nyheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-4-n-quiz4-q0',
            task: 'Hvorfor spres falske nyheter ofte raskere enn ekte nyheter?',
            options: [
              { id: 'a', text: 'Fordi folk er dumme og ikke bryr seg om sannheten', isCorrect: false },
              { id: 'b', text: 'Fordi de ofte er designet for å vekke sterke følelser som sinne og frykt', isCorrect: true },
              { id: 'c', text: 'Fordi journalister er trege med å publisere ekte nyheter', isCorrect: false },
              { id: 'd', text: 'Fordi sosiale medier-selskaper aktivt fremmer falske nyheter', isCorrect: false },
            ],
            solution: 'Falske nyheter er ofte designet for å trigge sterke følelser. Innhold som vekker sinne, frykt eller moralsk harme deles mer fordi det føles viktig å reagere. Algoritmer forsterker dette ved å promotere engasjerende innhold.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz4-q1',
            task: 'Hvordan bidrar ekkokamre til spredning av konspirasjonsteorier?',
            options: [
              { id: 'a', text: 'Ekkokamre hindrer spredning av konspirasjonsteorier', isCorrect: false },
              { id: 'b', text: 'I ekkokamre bekreftes påstander av likesinnede, og de som stiller spørsmål utestenges', isCorrect: true },
              { id: 'c', text: 'Ekkokamre er nøytrale rom der alle meninger høres', isCorrect: false },
              { id: 'd', text: 'Ekkokamre finnes bare i diktaturer', isCorrect: false },
            ],
            solution: 'I ekkokamre møter du bare likesinnede. Påstander bekreftes og forsterkes, mens kritiske stemmer utestenges eller nedtemmes. I et slikt miljø kan selv ville konspirasjonsteorier virke rimelige fordi alle rundt deg "vet" at de er sanne.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz4-q2',
            task: 'Hvorfor viser algoritmen deg færre faktasjekker og motargumenter?',
            options: [
              { id: 'a', text: 'Fordi faktasjekker er sensurert av myndighetene', isCorrect: false },
              { id: 'b', text: 'Fordi det ikke finnes nok faktasjekker', isCorrect: false },
              { id: 'c', text: 'Fordi du engasjerer deg mer med innhold du er enig i, og algoritmen gir deg mer av det', isCorrect: true },
              { id: 'd', text: 'Fordi faktasjekker er for dyre for sosiale medier', isCorrect: false },
            ],
            solution: 'Algoritmen optimaliserer for engasjement. Du engasjerer deg mer med innhold du allerede er enig i. Dermed viser algoritmen deg mer av det du liker og mindre av motstridende informasjon – inkludert faktasjekker og motargumenter.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Kildekritikk som demokratisk plikt ==========
    {
      id: 'norsk-vg1-6-4-n-section5',
      type: 'text',
      content: `## Kildekritikk som demokratisk plikt

Dette handler om mer enn skoleoppgaver. Kildekritikk er en demokratisk plikt. La meg forklare hvorfor.

Demokratiet hviler på en forutsetning: at borgerne kan ta informerte valg. Når vi stemmer, når vi deltar i debatter, når vi former meninger om samfunnet, gjør vi det basert på informasjon vi har tilgjengelig. Hvis den informasjonen er falsk, blir valgene våre skjeve.

Historien viser oss konsekvensene. Desinformasjonskampanjer har påvirket valg. Falske helsepåstander har kostet liv. Konspirasjonsteorier har radikalisert mennesker til vold. Dette er ikke abstrakte problemer, dette er reelle konsekvenser av at usannheter får spre seg uhindret.

Du er en del av løsningen. Hver gang du stopper og sjekker før du deler, bryter du kjeden av spredning. Hver gang du korrigerer en feil, høflig og saklig, bidrar du til et sunnere informasjonsmiljø. Hver gang du velger troverdige kilder, styrker du de institusjonene som faktisk gjør jobben med å undersøke og verifisere.

Det betyr ikke at du må bli paranoid og mistro alt. Det betyr at du skal være bevisst. Stol på troverdige kilder, men verifiser uvanlige påstander. Vær åpen for å endre mening når bevisene tilsier det. Og husk at usikkerhet ikke er svakhet, det er ærlighet.

I en verden full av støy er evnen til å skille signal fra bråk en superkraft. Den superkraften heter kildekritikk. Bruk den godt.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-6-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-6-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk og demokrati:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-6-4-n-quiz5-q0',
            task: 'Hvorfor kalles kildekritikk en "demokratisk plikt"?',
            options: [
              { id: 'a', text: 'Fordi det er et lovkrav å sjekke kilder før man stemmer', isCorrect: false },
              { id: 'b', text: 'Fordi demokratiet er avhengig av at borgere tar informerte valg basert på sann informasjon', isCorrect: true },
              { id: 'c', text: 'Fordi politikere har bestemt at alle må lære kildekritikk', isCorrect: false },
              { id: 'd', text: 'Fordi det er uhøflig å dele usannheter med andre', isCorrect: false },
            ],
            solution: 'Demokratiet fungerer bare hvis borgerne kan ta informerte valg. Falsk informasjon forvrenger disse valgene og undergraver demokratiske prosesser. Kildekritikk er derfor ikke bare en skoleferdighet, men en forutsetning for et velfungerende samfunn.',
          },
          {
            id: 'norsk-vg1-6-4-n-quiz5-q1',
            task: 'Hva er den riktige holdningen til kildekritikk ifølge kapittelet?',
            options: [
              { id: 'a', text: 'Vær paranoid og mistro alt du leser', isCorrect: false },
              { id: 'b', text: 'Stol blindt på alle etablerte kilder', isCorrect: false },
              { id: 'c', text: 'Vær bevisst, stol på troverdige kilder, men verifiser uvanlige påstander', isCorrect: true },
              { id: 'd', text: 'Ignorer alle nyheter for sikkerhets skyld', isCorrect: false },
            ],
            solution: 'Kildekritikk handler ikke om å bli paranoid. Det handler om å være bevisst. Stol på troverdige kilder, men verifiser uvanlige påstander. Vær åpen for å endre mening når bevisene tilsier det. Usikkerhet er ærlighet, ikke svakhet.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Din kildekritiske verktøykasse

Du har nå verktøyene til å navigere informasjonslandskapet tryggere:

**Falske nyheter kommer i mange former.** Satire, misinformasjon (uten ond hensikt), desinformasjon (bevisst villedning) og propaganda krever ulike tilnærminger.

**TONE-modellen er din sjekkliste.** Troverdighet, Objektivitet, Nøyaktighet og Egnethet. Fire spørsmål som avslører de fleste usannheter.

**Faktasjekking er praktisk.** Stopp før du deler. Søk etter originalkilden. Kryssjekk med flere kilder. Bruk faktasjekktjenester. Gjør omvendt bildesøk.

**Algoritmer og ekkokamre forsterker problemet.** Filterbobler viser deg mer av det du allerede tror på. Sterke følelser driver viralitet. Vær bevisst på terrenget.

**Kildekritikk er demokratisk nødvendighet.** Informerte valg krever sann informasjon. Hver gang du sjekker og korrigerer, bidrar du til et sunnere samfunn.

**Nøkkelbegreper å huske:**
Misinformasjon, desinformasjon, propaganda, TONE-modellen, faktasjekk, filterboble, ekkokammer, omvendt bildesøk, viralitet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samling av alle kapitler
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_6_1_NARRATIV,
  CHAPTER_NORSK_VG1_6_2_NARRATIV,
  CHAPTER_NORSK_VG1_6_3_NARRATIV,
  CHAPTER_NORSK_VG1_6_4_NARRATIV,
];

/**
 * Norsk 10 - Narrativ versjon DEL 3
 * Kapittel 5.1, 5.2
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_10_5_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-5-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '5.1',
  title: 'Sammensatte tekster',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvordan tekst, bilde, lyd og farge jobber sammen for å påvirke deg, fra reklame til film til nettsider.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lese og analysere sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive samspillet mellom ulike uttrykksmåter i sammensatte tekster',
    'lage og vurdere sammensatte tekster med bevisst bruk av ulike modaliteter',
  ],
  linkedChapterId: 'norsk-10-5-1',
  content: [
    {
      id: 'norsk-10-5-1-n-intro',
      type: 'text',
      content: `## Mer enn bare ord

Tenk deg en reklame for en ny mobiltelefon. Du ser et flott bilde av telefonen svevende i luften, med mørk bakgrunn og gyllent lys. Under bildet står det: «Fremtiden i dine hender.» En rolig, dyp stemme leser teksten mens episk musikk spiller i bakgrunnen.

Fjern nå bildet. Bare teksten igjen: «Fremtiden i dine hender.» Virker det like overbevisende? Neppe. Fjern musikken også, og følelsen forsvinner helt. Det er fordi denne reklamen er en sammensatt tekst, altså en tekst som bruker to eller flere modaliteter, eller uttrykksmåter, for å kommunisere et budskap. Multimodalitet er fagordet for dette: at flere uttrykksmåter brukes sammen.

Du omgir deg med sammensatte tekster hele tiden. Nettsider, Instagram-innlegg, filmtrailere, nyhetssendinger, plakater, dataspill og musikkvideoer. Alle kombinerer ulike måter å kommunisere på. De viktigste modalitetene er verbalspråk (skrevne ord), bilde (fotografier og illustrasjoner), lyd (musikk, lydeffekter, stemmer), bevegelse (video og animasjon), farger (som skaper stemning og assosiasjoner), layout og design (plasseringen av elementene) og typografi (skrifttype og skriftstørrelse). I norskfaget betyr «tekst» alt som kommuniserer et budskap, også en film, et bilde eller en nettside.`,
    },
    {
      id: 'norsk-10-5-1-n-section1',
      type: 'text',
      content: `## Samspillet som skaper mening

Det viktigste med sammensatte tekster er ikke de enkelte modalitetene alene, men samspillet mellom dem. Det finnes tre hovedtyper samspill. Forsterkning, også kalt redundans, er når modalitetene sier det samme. Et nyhetsoppslag om flom har overskriften «Ødeleggende flom» og et bilde av oversvømmede hus. Tekst og bilde forsterker hverandre.

Utfylling, eller komplementaritet, er når modalitetene tilfører ulik informasjon. En matoppskrift har en tekst med ingredienser og fremgangsmåte, og et bilde av det ferdige resultatet. Teksten forteller hva du skal gjøre, bildet viser hva du skal oppnå. Sammen gir de et mer komplett bilde.

Motsetning, eller kontrast, er når modalitetene sier noe forskjellig, kanskje til og med det motsatte. En reklame for forsikring viser en lykkelig familie på stranden, mens teksten lyder: «Du vet aldri hva morgendagen bringer.» Bildet er trygt, teksten er truende. Kontrasten skaper uro, og du begynner å tenke på forsikring.

To klassiske begreper fra tegnforskeren Roland Barthes hjelper oss videre. Forankring er når teksten styrer hvordan vi tolker bildet. Et bilde av en person som gråter kan bety glede eller sorg, men overskriften «Vant Nobelprisen» forankrer tolkningen til gledestårer. Avløsning er når tekst og bilde sier noe forskjellig men utfyller hverandre, som i tegneserier der bildet viser handlingen og snakkeboblene gir dialogen.

Film er den ultimate sammensatte teksten. Kameravinkler som fugleperspektiv (gjør personen liten og sårbar) og froskeperspektiv (gjør personen mektig), klipping som styrer tempo og spenning, lyssetting som skaper stemning, og skillet mellom diegetisk lyd (lyd karakterene kan høre, som en samtale) og ikke-diegetisk lyd (lyd bare publikum hører, som filmmusikk). Neste gang du ser en skummel scene, legg merke til musikken. Du blir redd av musikken vel så mye som av det du ser.`,
    },
    {
      id: 'norsk-10-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte tekster:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-5-1-n-quiz1-q0',
            task: 'Hva betyr begrepet «modalitet» i sammenheng med sammensatte tekster?',
            options: [
              { id: 'a', text: 'En sjanger innen skjønnlitteratur', isCorrect: false },
              { id: 'b', text: 'En uttrykksmåte som brukes for å formidle mening, for eksempel tekst, bilde eller lyd', isCorrect: true },
              { id: 'c', text: 'Den følelsesmessige stemningen i en tekst', isCorrect: false },
              { id: 'd', text: 'Et synonym for «retorikk»', isCorrect: false },
            ],
            solution:
              'En modalitet er en uttrykksmåte, altså en måte å formidle mening på. De viktigste modalitetene er verbalspråk, bilde, lyd, bevegelse, farger, layout og typografi. Sammensatte tekster kombinerer flere modaliteter.',
          },
          {
            id: 'norsk-10-5-1-n-quiz1-q1',
            task: 'I en film ser vi en person filmet nedenfra (froskeperspektiv) med dramatisk musikk. Hva prøver filmskaperen å formidle?',
            options: [
              { id: 'a', text: 'At personen er redd og sårbar', isCorrect: false },
              { id: 'b', text: 'At personen er mektig, truende eller overlegen', isCorrect: true },
              { id: 'c', text: 'At scenen er humoristisk', isCorrect: false },
              { id: 'd', text: 'At kameramannen var uerfaren', isCorrect: false },
            ],
            solution:
              'Froskeperspektiv gjør at vi «ser opp på» personen, noe som skaper en følelse av makt og autoritet. Dramatisk musikk (ikke-diegetisk lyd) forsterker dette. Fugleperspektiv ville gjort personen liten og sårbar.',
          },
          {
            id: 'norsk-10-5-1-n-quiz1-q2',
            task: 'Hva er forskjellen mellom forankring og avløsning?',
            options: [
              { id: 'a', text: 'Forankring forsterker, avløsning svekker', isCorrect: false },
              { id: 'b', text: 'Forankring er når teksten styrer tolkningen av bildet, avløsning er når tekst og bilde utfyller hverandre', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
              { id: 'd', text: 'Forankring brukes i reklame, avløsning brukes i film', isCorrect: false },
            ],
            solution:
              'Forankring er når teksten «låser» tolkningen av bildet, som en bildetekst som forklarer hva vi ser. Avløsning er når tekst og bilde tilfører forskjellig informasjon som til sammen danner en helhet, som i tegneserier.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-5-1-n-section2',
      type: 'text',
      content: `## Reklame og nettsider: Design som påvirker

Reklame er kanskje den mest gjennomtenkte formen for sammensatte tekster. Hvert element er nøye planlagt for å påvirke deg. Når du analyserer en reklame, bør du identifisere alle modalitetene, vurdere hvem målgruppen er, avdekke det egentlige budskapet og undersøke hvordan modalitetene spiller sammen.

Se etter retoriske grep som appell til følelser gjennom patos, appell til fornuft gjennom logos, og appell til autoritet gjennom etos. Fargesymbolikk spiller en stor rolle: grønt signaliserer natur og miljø, rødt signaliserer energi og fare, blått signaliserer tillit og ro. Komposisjon handler om hva som er i sentrum og hva du legger merke til først.

Nettsider er blant de mest komplekse sammensatte tekstene. De kombinerer tekst, bilder, video, lyd, farger, layout, lenker og animasjoner. Det som gjør dem spesielle er interaktiviteten (du klikker, scroller og velger), den ikke-lineære strukturen (du navigerer i mange retninger) og det dynamiske innholdet (algoritmer viser deg tilpasset innhold).

Nettbutikker bruker bevisste grep: «Kun 2 igjen på lager!» spiller på frykten for å gå glipp av noe. Store grønne «Kjøp nå»-knapper gjør handlingen tiltalende. Nyhetsmedier bruker dramatiske overskrifter og store bilder. Sosiale medier er designet med endeløs scrolling og varsler for å holde deg på plattformen. Nesten ingenting på en nettside er tilfeldig. Alt er designet av noen med et bestemt formål.`,
    },
    {
      id: 'norsk-10-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på reklame og nettsider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-5-1-n-quiz2-q0',
            task: 'En nettbutikk viser «Kun 1 igjen!» i rødt under et produkt, med en stor grønn «Legg i handlekurv»-knapp. Hvilken teknikk brukes?',
            options: [
              { id: 'a', text: 'Nøytral informasjon om lagerstatus', isCorrect: false },
              { id: 'b', text: 'Knapphetsprinsippet, som spiller på frykten for å gå glipp av noe', isCorrect: true },
              { id: 'c', text: 'Forankring for å styre tolkningen', isCorrect: false },
              { id: 'd', text: 'Tilfeldig designvalg', isCorrect: false },
            ],
            solution:
              'Nettbutikken bruker knapphetsprinsippet, også kalt FOMO (fear of missing out). Den røde teksten skaper urgens, og den grønne knappen gjør handlingen (å kjøpe) lett og tiltalende. Ingenting er tilfeldig i nettbutikkdesign.',
          },
          {
            id: 'norsk-10-5-1-n-quiz2-q1',
            task: 'Hva er diegetisk lyd i en film?',
            options: [
              { id: 'a', text: 'Filmmusikken som bare publikum hører', isCorrect: false },
              { id: 'b', text: 'Lyd som har en kilde i filmens verden, som karakterene selv kan høre', isCorrect: true },
              { id: 'c', text: 'Fortellerstemmen som kommenterer handlingen', isCorrect: false },
              { id: 'd', text: 'Lydeffekter som legges til i etterarbeidet', isCorrect: false },
            ],
            solution:
              'Diegetisk lyd er lyd med en kilde i filmens verden, som samtaler, trafikk eller en radio som spiller. Ikke-diegetisk lyd er lyd bare publikum hører, som filmmusikk og fortellerstemme.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Sammensatte tekster bruker to eller flere modaliteter (uttrykksmåter) for å kommunisere: verbalspråk, bilde, lyd, bevegelse, farger, layout og typografi. Det viktigste er samspillet mellom modalitetene, som kan ta form av forsterkning (de sier det samme), utfylling (de tilfører ulik informasjon) eller motsetning (de sier noe forskjellig).

Forankring er når teksten styrer tolkningen av bildet. Avløsning er når tekst og bilde utfyller hverandre. I film er skillet mellom diegetisk lyd (som karakterene hører) og ikke-diegetisk lyd (som bare publikum hører) sentralt. Reklame, film og nettsider bruker alle bevisst samspill mellom modaliteter for å påvirke oss. Å forstå dette gjør deg til en kritisk leser som gjennomskuer virkemidlene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_10_5_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-5-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '5.2',
  title: 'Kreativ skriving',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk novelleskrivingens kunst med spenningskurve, virkemidler og kreative teknikker som gjør tekstene dine levende.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av litterære virkemidler',
    'bruke spenningskurve og dramaturgisk oppbygging i egne tekster',
    'eksperimentere med ulike fortellerteknikker og perspektiver',
  ],
  linkedChapterId: 'norsk-10-5-2',
  content: [
    {
      id: 'norsk-10-5-2-n-intro',
      type: 'text',
      content: `## Alle har en historie å fortelle

«Det var en mørk og stormfull natt...» Ja, du har hørt den før. Og nettopp derfor fungerer den ikke. Kreativ skriving handler om å finne din egen stemme, overraske leseren og gjøre det alminnelige uvanlig. Det handler ikke om å bruke store, fancy ord, men om å velge de riktige ordene.

Alle har en historie å fortelle. Du har opplevd ting, sett ting, følt ting som ingen andre har opplevd på nøyaktig samme måte. Kreativ skriving handler om å ta disse opplevelsene og forme dem til tekst som berører andre. Og det beste er at det er en ferdighet du kan øve på. Ingen er «født» forfatter. De beste forfatterne er de som har skrevet mest, lest mest og vært villige til å skrive dårlig på veien til å skrive godt.

I dette kapittelet skal du lære de viktigste verktøyene for kreativ skriving: virkemidler som gjør språket levende, spenningskurven som gir fortellingen driv, og teknikker for å skrive noveller som fenger.`,
    },
    {
      id: 'norsk-10-5-2-n-section1',
      type: 'text',
      content: `## Virkemidler som gjør teksten levende

De viktigste språklige virkemidlene i kreativ skriving er verktøy som forvandler flatt språk til noe som berører. En metafor beskriver noe ved å sammenligne det med noe annet uten å bruke «som»: «Hjertet hennes var en stengt dør.» En sammenligning bruker «som» eller «lik»: «Han løp som vinden.» Besjeling gir menneskelige egenskaper til noe som ikke er levende: «Trærne hvisket hemmeligheter til hverandre.»

Kontraster setter motsetninger opp mot hverandre og skaper spenning: lys mot mørke, håp mot fortvilelse, barndommens trygghet mot voksenlivets usikkerhet. Symboler er gjenstander eller hendelser som representerer noe utover seg selv: en lukket dør kan symbolisere utestengelse, en soloppgang kan symbolisere håp, et knust speil kan symbolisere tapt identitet.

Sanselige beskrivelser er kanskje det viktigste verktøyet. «Vis, ikke fortell» er den gylne regelen. I stedet for å skrive «hun var trist», skriv «hun satt ved vinduet og risset langsomt fingertuppen langs det kalde glasset, mens regnet tegnet striper nedover ruten.» La leseren se, høre, lukte, smake og kjenne. Det er forskjellen mellom å informere om en følelse og å la leseren oppleve den.

Frempek antyder noe som skal skje senere i fortellingen og skaper spenning: «Hun visste ikke at dette var siste gang hun så huset sitt.» Tilbakeblikk gir leseren bakgrunnsinformasjon ved å hoppe tilbake i tid: «Han lukket øynene og husket den sommeren da alt var annerledes.»`,
    },
    {
      id: 'norsk-10-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på litterære virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-5-2-n-quiz1-q0',
            task: 'Hva er forskjellen mellom en metafor og en sammenligning?',
            options: [
              { id: 'a', text: 'De er det samme, bare ulike ord for det samme virkemiddelet', isCorrect: false },
              { id: 'b', text: 'En metafor sier noe «er» noe annet, en sammenligning bruker «som» eller «lik»', isCorrect: true },
              { id: 'c', text: 'Metaforer brukes bare i dikt, sammenligninger brukes i prosa', isCorrect: false },
              { id: 'd', text: 'En sammenligning er sterkere enn en metafor', isCorrect: false },
            ],
            solution:
              '«Hjertet hennes var en stengt dør» er en metafor fordi den sier at hjertet ER en dør. «Hjertet hennes var som en stengt dør» er en sammenligning fordi den bruker «som». Metaforen er ofte sterkere fordi den er mer direkte.',
          },
          {
            id: 'norsk-10-5-2-n-quiz1-q1',
            task: 'Hva betyr regelen «vis, ikke fortell» i kreativ skriving?',
            options: [
              { id: 'a', text: 'At du bør bruke bilder i stedet for tekst', isCorrect: false },
              { id: 'b', text: 'At du bør la leseren oppleve følelser gjennom sanselige beskrivelser i stedet for å forklare dem direkte', isCorrect: true },
              { id: 'c', text: 'At du bør holde presentasjoner i stedet for å skrive', isCorrect: false },
              { id: 'd', text: 'At du aldri bør bruke adjektiver', isCorrect: false },
            ],
            solution:
              '«Vis, ikke fortell» betyr at du lar leseren oppleve følelser og stemninger gjennom sanselige detaljer. I stedet for «hun var trist», beskriv hva hun gjør, ser og hører, slik at leseren føler tristheten selv.',
          },
          {
            id: 'norsk-10-5-2-n-quiz1-q2',
            task: 'Hva er et frempek?',
            options: [
              { id: 'a', text: 'En oppsummering av fortellingens tema', isCorrect: false },
              { id: 'b', text: 'En antydning om noe som skal skje senere i fortellingen', isCorrect: true },
              { id: 'c', text: 'Et tilbakeblikk til noe som har skjedd', isCorrect: false },
              { id: 'd', text: 'En beskrivelse av miljøet rundt karakteren', isCorrect: false },
            ],
            solution:
              'Et frempek antyder noe som skal skje senere og skaper spenning og forventning hos leseren. «Hun visste ikke at dette var siste gang hun så huset sitt» er et klassisk frempek. Tilbakeblikk gjør det motsatte og hopper bakover i tid.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-5-2-n-section2',
      type: 'text',
      content: `## Spenningskurven og novellens oppbygging

En novelle er en kort fortelling med få personer, avgrenset tid og rom, og gjerne et vendepunkt. Spenningskurven er verktøyet som gir fortellingen driv og struktur.

Den begynner med en introduksjon der du presenterer hovedpersonen, settingen og en antydning om hva fortellingen handler om. Så kommer en komplikasjon, en hendelse eller et problem som setter handlingen i gang og skaper spenning. Deretter bygger spenningen seg opp gjennom stigende handling, der konflikten tilspisser seg og leseren blir stadig mer engasjert. Klimakset er det dramatiske høydepunktet, det øyeblikket der alt avgjøres. Til slutt kommer en avslutning med fallende handling og løsning.

En god novelle trenger ikke følge denne strukturen slavisk, men den gir deg et rammeverk å jobbe med. Noen tips for å skrive gode noveller: Start in medias res, altså midt i handlingen, for å fange leseren med en gang. Begrens antall personer og hendelser. Bruk dialog for å vise karakterenes personlighet i stedet for å beskrive den. Og la slutten gi leseren noe å tenke over, gjerne en overraskelse, en tvetydighet eller et åpent spørsmål.

Kreativitet handler ikke om å vente på inspirasjon. Det handler om å sette seg ned og skrive, selv når det føles vanskelig. De beste forfatterne skriver dårlige førsteutkast. Forskjellen er at de redigerer etterpå. Skriv fritt og rått først, så kan du polere teksten i neste runde.`,
    },
    {
      id: 'norsk-10-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på novellens oppbygging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-5-2-n-quiz2-q0',
            task: 'Hva betyr «in medias res»?',
            options: [
              { id: 'a', text: 'At fortellingen har en lykkelig slutt', isCorrect: false },
              { id: 'b', text: 'At fortellingen starter midt i handlingen', isCorrect: true },
              { id: 'c', text: 'At fortellingen er skrevet på latin', isCorrect: false },
              { id: 'd', text: 'At fortellingen har flere fortellere', isCorrect: false },
            ],
            solution:
              'In medias res er latin og betyr «midt i tingene». Det innebærer å starte fortellingen midt i handlingen, uten lang innledning. Dette fanger leserens oppmerksomhet umiddelbart og skaper nysgjerrighet.',
          },
          {
            id: 'norsk-10-5-2-n-quiz2-q1',
            task: 'Hva er de fem delene i spenningskurven?',
            options: [
              { id: 'a', text: 'Innledning, hoveddel, avslutning, oppsummering, refleksjon', isCorrect: false },
              { id: 'b', text: 'Introduksjon, komplikasjon, stigende handling, klimaks, avslutning', isCorrect: true },
              { id: 'c', text: 'Start, midtdel, vendepunkt, slutt, epilog', isCorrect: false },
              { id: 'd', text: 'Karakter, setting, konflikt, løsning, moral', isCorrect: false },
            ],
            solution:
              'Spenningskurven består av introduksjon (presentasjon), komplikasjon (hendelse som starter handlingen), stigende handling (spenningen øker), klimaks (det dramatiske høydepunktet) og avslutning (løsning og fallende handling).',
          },
          {
            id: 'norsk-10-5-2-n-quiz2-q2',
            task: 'Hva kjennetegner en novelle?',
            options: [
              { id: 'a', text: 'Mange personer, langt tidsspenn og detaljerte beskrivelser av alt', isCorrect: false },
              { id: 'b', text: 'Saklig språk med argumentasjon og kildehenvisninger', isCorrect: false },
              { id: 'c', text: 'Få personer, avgrenset tid og rom, og gjerne et vendepunkt', isCorrect: true },
              { id: 'd', text: 'Rytme, rim og verselinjer', isCorrect: false },
            ],
            solution:
              'En novelle er en kort fortelling med få personer, avgrenset tid og rom, og gjerne et vendepunkt eller en overraskende slutt. Den skiller seg fra romanen ved sin konsentrerte form, og fra diktet ved sin prosastruktur.',
          },
        ],
      },
    },
    {
      id: 'norsk-10-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Kreativ skriving handler om å velge de riktige ordene og bruke virkemidler bevisst. Metaforer, sammenligninger, besjeling, kontraster, symboler og sanselige beskrivelser gjør teksten levende. «Vis, ikke fortell» er den gylne regelen. Frempek skaper spenning, tilbakeblikk gir dybde.

Spenningskurven med introduksjon, komplikasjon, stigende handling, klimaks og avslutning gir novellen struktur og driv. Start gjerne in medias res, begrens antall personer, bruk dialog for å vise personlighet, og la slutten gi leseren noe å tenke over. Husk: kreativitet handler om å skrive, ikke om å vente på inspirasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_NORSK_10_5_1_NARRATIV,
  CHAPTER_NORSK_10_5_2_NARRATIV,
];

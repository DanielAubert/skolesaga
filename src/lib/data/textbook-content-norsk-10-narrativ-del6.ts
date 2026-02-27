/**
 * Norsk 10. klasse - Narrative versjoner Del 6 (Kapittel 8.1-8.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-10-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1 NARRATIV: Medielandskapet i Norge
// ============================================================================

export const CHAPTER_NORSK_10_8_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.1',
  title: 'Medielandskapet i Norge',
  subtitle: 'Narrativ versjon',
  description: 'Fra NRK-monopol til TikTok-kaos: Utforsk hvordan det norske medielandskapet har forandret seg og hva det betyr for demokratiet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier påvirker og endrer språk og kommunikasjon',
    'gjøre rede for medienes rolle i demokratiet og vurdere medieinnhold kritisk',
  ],
  linkedChapterId: 'norsk-10-8-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-1-n-intro',
      type: 'text',
      content: `## Da besteforeldrene dine bare hadde NRK

Spør besteforeldrene dine hva de så på TV da de var unge. Svaret er enkelt: NRK. Det var det eneste alternativet. Fra 1960 til 1981 hadde NRK monopol på TV-sendinger i Norge. Alle så de samme programmene, hørte de samme nyhetene og diskuterte de samme sakene rundt middagsbordet.

I dag våkner du til et helt annet medielandskap. Før du har kommet deg ut av sengen, har du kanskje scrollet gjennom TikTok, sjekket varsler fra VG, sett en YouTube-video og fått en nyhetspodkast anbefalt av Spotify. Du konsumerer innhold fra titalls ulike kilder, og mye av det er skapt av folk som ikke er journalister i det hele tatt. Influencere, bloggere, podkastere og vanlige folk på sosiale medier konkurrerer med tradisjonelle medier om oppmerksomheten din.

Denne enorme forandringen har skjedd på bare et par tiår. Og den har konsekvenser. For hvem bestemmer egentlig hva du ser og leser? Hvem kontrollerer informasjonen? Og hva betyr det for demokratiet vårt at medielandskapet har gått fra ett trygt TV-kanal til et uendelig kaos av stemmer?

Mediene har alltid blitt kalt den fjerde statsmakt, ved siden av Stortinget, regjeringen og domstolene. Det betyr at pressen har en uformell, men avgjørende rolle i demokratiet: å granske makten, avdekke kritikkverdige forhold og gi borgerne den informasjonen de trenger for å ta gode valg. Men kan mediene fortsatt fylle denne rollen når alle kan være sin egen redaktør?`,
    },

    // ========== SEKSJON 1: Pressefrihet og den fjerde statsmakt ==========
    {
      id: 'norsk-10-8-1-n-section1',
      type: 'text',
      content: `## Den fjerde statsmakt — Når journalister vokter vokterne

Forestill deg et samfunn uten frie medier. Myndighetene kan gjøre hva de vil uten at noen stiller spørsmål. Korrupsjon kan blomstre i det skjulte. Maktmisbruk kan pågå uten konsekvenser. Det høres ut som en dystopi, men det er virkeligheten i mange land i verden i dag.

I Norge har vi pressefrihet, noe som betyr at mediene fritt kan publisere informasjon og meninger uten forhåndssensur fra myndighetene. Denne friheten er forankret i Grunnloven og er en av bærebjelkene i det norske demokratiet. Men med friheten følger også ansvar. Norske medier styres av Vær Varsom-plakaten, et sett med presseetiske regler som definerer hva som er ansvarlig journalistikk.

NRK har en helt spesiell rolle i det norske medielandskapet. Som statlig kringkaster, finansiert av offentlige midler, har NRK et oppdrag som skiller seg fra de kommersielle mediene. NRK skal sikre et bredt og uavhengig medietilbud til hele befolkningen, uavhengig av bosted, alder og bakgrunn. Mens VG og Dagbladet må tjene penger for å overleve, kan NRK fokusere på innhold som kanskje ikke genererer klikk, men som er viktig for samfunnsdebatten.

Forskjellen mellom redaktørstyrte medier og ikke-redaktørstyrte medier er avgjørende å forstå. Redaktørstyrte medier, som NRK, VG, Aftenposten og Bergens Tidende, har en ansvarlig redaktør som garanterer at innholdet følger presseetiske regler. Sosiale medier som TikTok, Instagram og YouTube har ingen slik redaktør. Der kan hvem som helst publisere hva som helst, og det finnes ingen garanti for at informasjonen er korrekt eller balansert.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på medielandskapet i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-1-n-quiz1-q0',
            task: 'Hvorfor kalles pressen den fjerde statsmakt?',
            options: [
              { id: 'a', text: 'Fordi pressen styrer Stortinget', isCorrect: false },
              { id: 'b', text: 'Fordi pressen har en uformell rolle i å granske makten og informere borgerne', isCorrect: true },
              { id: 'c', text: 'Fordi pressen er nevnt i Grunnloven som en statsmakt', isCorrect: false },
              { id: 'd', text: 'Fordi det finnes fire store medieselskaper i Norge', isCorrect: false },
            ],
            solution: 'Pressen kalles den fjerde statsmakt fordi den fyller en uformell, men viktig demokratisk rolle: å granske myndigheter, avdekke maktmisbruk og gi borgerne nødvendig informasjon.',
          },
          {
            id: 'norsk-10-8-1-n-quiz1-q1',
            task: 'Hva skiller redaktørstyrte medier fra sosiale medier?',
            options: [
              { id: 'a', text: 'Redaktørstyrte medier er alltid gratis', isCorrect: false },
              { id: 'b', text: 'Sosiale medier har bedre journalister', isCorrect: false },
              { id: 'c', text: 'Redaktørstyrte medier har en ansvarlig redaktør som sikrer presseetiske regler', isCorrect: true },
              { id: 'd', text: 'Det er ingen reell forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Redaktørstyrte medier har en ansvarlig redaktør som sikrer at innholdet følger presseetiske regler (Vær Varsom-plakaten). Sosiale medier mangler denne kontrollen.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Det digitale skiftet ==========
    {
      id: 'norsk-10-8-1-n-section2',
      type: 'text',
      content: `## Fra trykte aviser til algoritmer

Overgangen fra papiravis til nettavis har forandret journalistikken på grunnleggende måter. Da avisene var på papir, hadde redaktøren makt til å bestemme hva som havnet på forsiden. Leseren fikk et kuratert utvalg av nyheter, valgt ut av erfarne journalister som vurderte hva som var viktig for samfunnet.

I dag er det algoritmer som i stor grad bestemmer hva du ser. Nettavisene måler klikk i sanntid og tilpasser innholdet etter hva som genererer trafikk. Dette har ført til en uro i mediebransjen for det som kalles klikkjournalistikk, der overskrifter bevisst overdriver eller provoserer for å få deg til å klikke. «Du vil ikke tro hva som skjedde!» og lignende formuleringer er designet for å trigge nysgjerrighet, ikke for å informere.

Finansieringen av mediene har også endret seg dramatisk. Annonseinntektene, som tidligere ga avisene et solid økonomisk grunnlag, har i stor grad flyttet til Google og Meta. Dette har tvunget mange norske medier til å innføre betalingsmurer. I dag må du betale for å lese de fleste nettaviser, noe som reiser spørsmål om hvem som har tilgang til kvalitetsjournalistikk.

Samtidig har digitaliseringen gitt mediene nye muligheter. Podkaster, live-sendinger, interaktive grafikker og multimediale reportasjer gir journalister verktøy til å fortelle historier på måter som var umulige i papiravisen. Og leserne kan delta i debatten på en helt annen måte enn før, gjennom kommentarfelt, deling og direkte kontakt med journalister.

Det viktigste du kan ta med deg, er at medielandskapet er i rask endring, og at din evne til å navigere i det er en av de viktigste ferdighetene du kan utvikle.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på det digitale medieskiftet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-1-n-quiz2-q0',
            task: 'Hva er klikkjournalistikk?',
            options: [
              { id: 'a', text: 'Journalistikk som handler om datateknologi', isCorrect: false },
              { id: 'b', text: 'Journalistikk der overskrifter overdriver for å generere klikk', isCorrect: true },
              { id: 'c', text: 'Journalistikk som bare publiseres på nett', isCorrect: false },
              { id: 'd', text: 'Journalistikk skrevet av kunstig intelligens', isCorrect: false },
            ],
            solution: 'Klikkjournalistikk oppstår når medier prioriterer overskrifter som genererer klikk fremfor grundig, saklig journalistikk. Det er en konsekvens av at nettaviser måler suksess i trafikk.',
          },
          {
            id: 'norsk-10-8-1-n-quiz2-q1',
            task: 'Hva er Vær Varsom-plakaten?',
            options: [
              { id: 'a', text: 'En lov som forbyr ulovlig overvåking av medier', isCorrect: false },
              { id: 'b', text: 'Et sett med presseetiske regler som norske medier skal følge', isCorrect: true },
              { id: 'c', text: 'En reklamekampanje for NRK', isCorrect: false },
              { id: 'd', text: 'Et internasjonalt regelverk for sosiale medier', isCorrect: false },
            ],
            solution: 'Vær Varsom-plakaten er norske mediers etiske regelverk. Den definerer standarder for ansvarlig journalistikk, inkludert krav til kildevern, riktighet og hensynet til privatlivet.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Medier i endring

**NRK** gikk fra monopol (1960-1981) til å bli en av mange aktører. Som statlig kringkaster har NRK et spesielt oppdrag om å sikre bredt og uavhengig innhold.

**Den fjerde statsmakt** er pressens uformelle rolle i å granske makten og informere borgerne. Denne rollen er avgjørende for demokratiet.

**Redaktørstyrte medier** skiller seg fra sosiale medier ved å ha en ansvarlig redaktør og følge presseetiske regler (Vær Varsom-plakaten).

**Digitaliseringen** har endret journalistikken: algoritmer styrer innhold, klikkjournalistikk er en utfordring, og annonseinntekter har flyttet til tech-giganter.

**Pressefrihet** er forankret i Grunnloven og er en forutsetning for et fungerende demokrati.

**Nøkkelbegreper:** NRK, den fjerde statsmakt, pressefrihet, redaktørstyrte medier, Vær Varsom-plakaten, klikkjournalistikk, betalingsmur.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2 NARRATIV: Nyhetsanalyse og kildekritikk
// ============================================================================

export const CHAPTER_NORSK_10_8_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.2',
  title: 'Nyhetsanalyse og kildekritikk',
  subtitle: 'Narrativ versjon',
  description: 'Lær å gjennomskue falske nyheter og bli en mester i kildekritikk med TONE-modellen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'vurdere og kritisere ulike typer kilder og bruke dem i egne arbeider',
    'reflektere kritisk over hvordan medier fremstiller virkeligheten',
  ],
  linkedChapterId: 'norsk-10-8-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-2-n-intro',
      type: 'text',
      content: `## Ville du falt for det?

I 2016 gikk en nyhet viralt på sosiale medier: Paven hadde støttet Donald Trump som presidentkandidat. Millioner delte saken. Problemet? Den var helt oppdiktet. Publisert av et nettsted designet for å se ut som en ekte nyhetsside, spredte den seg som ild i tørt gress fordi folk delte uten å sjekke kilden.

Falske nyheter, eller feilinformasjon og desinformasjon som forskere foretrekker å kalle det, er et av vår tids største utfordringer. Feilinformasjon er usann informasjon spredt uten ond hensikt, du tror det er sant og deler det videre. Desinformasjon er usann informasjon spredt bevisst for å villede. Begge deler er farlige for demokratiet fordi de undergraver vår felles virkelighetsforståelse.

Men det trenger ikke være helt oppdiktede nyheter for at du skal bli villedet. Vinklingen av en ekte nyhet, utvalget av fakta som presenteres, bruken av bilder og overskrifter, alt dette kan forme din oppfatning av virkeligheten uten at noe usant er blitt sagt. En sak om innvandring kan se helt forskjellig ut avhengig av om avisen velger å fokusere på kriminalstatistikk eller integreringssuksesser.

Kildekritikk er verktøyet som beskytter deg. Det handler om å stille de riktige spørsmålene før du tror på, deler eller bruker informasjon. Og i dette kapittelet skal du lære en modell som gjør kildekritikk enkelt og systematisk.`,
    },

    // ========== SEKSJON 1: TONE-modellen ==========
    {
      id: 'norsk-10-8-2-n-section1',
      type: 'text',
      content: `## TONE-modellen — Fire spørsmål som avslører alt

TONE-modellen er et verktøy for systematisk kildekritikk. Navnet er et akronym for de fire spørsmålene du bør stille til enhver kilde: Troverdighet, Objektivitet, Nøyaktighet og Egnethet.

Troverdighet handler om hvem som står bak kilden. Er det en etablert nyhetsorganisasjon med lang tradisjon? En forsker med relevant ekspertise? Eller er det en anonym blogg uten tydelig avsender? En kilde fra Folkehelseinstituttet om vaksiner er mer troverdig enn en tilfeldig Facebook-post. Men selv troverdige kilder kan ta feil, så troverdighet alene er ikke nok.

Objektivitet handler om avsenderens hensikt. Prøver kilden å informere deg nøytralt, eller har den en agenda? En rapport fra et tobakksselskap om at røyking ikke er farlig, har et åpenbart troverdighets­problem. Men det kan også være mer subtilt. En nyhetsartikkel kan være vinklet uten å lyve direkte, for eksempel ved å utelate viktige fakta eller gi uforholdsmessig mye plass til ett synspunkt.

Nøyaktighet betyr at informasjonen er korrekt og kan bekreftes av andre kilder. Stemmer tallene? Er sitatene riktige? Kan du finne den samme informasjonen i andre, uavhengige kilder? Hvis en påstand bare finnes i en kilde og ingen andre medier rapporterer det samme, bør du være skeptisk.

Egnethet handler om at kilden er relevant for det du undersøker. En vitenskapelig artikkel om klima er en utmerket kilde til en oppgave om klimaendringer, men ikke til en oppgave om norsk grammatikk. Kilden må passe til formålet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk og TONE-modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-2-n-quiz1-q0',
            task: 'Hva står TONE for i TONE-modellen?',
            options: [
              { id: 'a', text: 'Tekst, Ordvalg, Nyhet, Ekspertise', isCorrect: false },
              { id: 'b', text: 'Troverdighet, Objektivitet, Nøyaktighet, Egnethet', isCorrect: true },
              { id: 'c', text: 'Tid, Opphav, Nøytralitet, Empiri', isCorrect: false },
              { id: 'd', text: 'Type, Omfang, Nivå, Evaluering', isCorrect: false },
            ],
            solution: 'TONE står for Troverdighet, Objektivitet, Nøyaktighet og Egnethet. Disse fire kriteriene hjelper deg å vurdere enhver kilde systematisk.',
          },
          {
            id: 'norsk-10-8-2-n-quiz1-q1',
            task: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
            options: [
              { id: 'a', text: 'Feilinformasjon er på norsk, desinformasjon er på engelsk', isCorrect: false },
              { id: 'b', text: 'Feilinformasjon spres uten ond hensikt, desinformasjon spres bevisst for å villede', isCorrect: true },
              { id: 'c', text: 'Feilinformasjon er i aviser, desinformasjon er på nett', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Feilinformasjon spres av folk som tror den er sann. Desinformasjon spres bevisst for å villede. Konsekvensene kan være like skadelige, men intensjonen er forskjellig.',
          },
          {
            id: 'norsk-10-8-2-n-quiz1-q2',
            task: 'Hva betyr «objektivitet» i kildekritisk sammenheng?',
            options: [
              { id: 'a', text: 'At kilden inneholder mange tall og fakta', isCorrect: false },
              { id: 'b', text: 'At kilden er publisert i en vitenskapelig journal', isCorrect: false },
              { id: 'c', text: 'At man vurderer om kilden er nøytral eller har en agenda', isCorrect: true },
              { id: 'd', text: 'At kilden handler om objekter, ikke personer', isCorrect: false },
            ],
            solution: 'Objektivitet i kildekritikk handler om å vurdere avsenderens hensikt. Har kilden en agenda? Prøver den å overbevise deg om noe, eller informerer den nøytralt?',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Praktisk nyhetsanalyse ==========
    {
      id: 'norsk-10-8-2-n-section2',
      type: 'text',
      content: `## Å lese nyheter som en detektiv

Kildekritikk er ikke bare teori. Det er en ferdighet du bruker hver dag, bevisst eller ubevisst. Her er noen praktiske tips for å lese nyheter mer kritisk.

Start med å sjekke avsenderen. Hvem publiserte dette? Er det en kjent avis, en blogg, en statlig institusjon eller en anonym side? Klikk deg inn på «Om oss»-siden og se hvem som står bak. Hvis det ikke finnes noen slik side, er det et rødt flagg.

Se deretter på overskriften. Er den nøytral og informativ, eller er den designet for å provosere eller skape frykt? Overskrifter som bruker store ord som «SJOKKERENDE» eller «DU VIL IKKE TRO» er ofte tegn på at innholdet er overdrevet eller vinklet.

Sjekk om saken har flere kilder. God journalistikk baserer seg på flere uavhengige kilder. Hvis en sak bare siterer en person eller en anonym kilde, bør du behandle den med forsiktighet. Og hvis påstanden er oppsiktsvekkende, sjekk om andre medier rapporterer det samme.

Vær oppmerksom på bilder. Bilder kan manipuleres eller brukes i feil sammenheng. Et bilde fra en protest i et annet land kan brukes til å illustrere en helt annen sak. Omvendt bildesøk, der du søker på bildet i stedet for med tekst, kan avsløre om et bilde er brukt utenfor sin opprinnelige kontekst.

Til slutt: Vær ærlig med deg selv. Vi har alle en tendens til å tro på informasjon som bekrefter det vi allerede mener, det som kalles bekreftelsesbias. Den mest kritiske leseren er den som er villig til å utfordre sine egne antagelser.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på praktisk kildekritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-2-n-quiz2-q0',
            task: 'Hva er bekreftelsesbias?',
            options: [
              { id: 'a', text: 'Tendensen til å velge de kildene som har flest bekreftelser', isCorrect: false },
              { id: 'b', text: 'Tendensen til å tro på informasjon som bekrefter det vi allerede mener', isCorrect: true },
              { id: 'c', text: 'Tendensen til å bekrefte alt vi leser som sant', isCorrect: false },
              { id: 'd', text: 'Tendensen til å avvise alle kilder som kritiserer oss', isCorrect: false },
            ],
            solution: 'Bekreftelsesbias er vår tendens til å søke, tolke og huske informasjon som bekrefter våre eksisterende oppfatninger. Det er en av de største hindrene for objektiv kildekritikk.',
          },
          {
            id: 'norsk-10-8-2-n-quiz2-q1',
            task: 'Hva bør du gjøre først når du møter en oppsiktsvekkende nyhet på sosiale medier?',
            options: [
              { id: 'a', text: 'Dele den umiddelbart for å advare andre', isCorrect: false },
              { id: 'b', text: 'Skrive en kommentar om hva du synes', isCorrect: false },
              { id: 'c', text: 'Sjekke hvem som står bak og om andre troverdige medier rapporterer det samme', isCorrect: true },
              { id: 'd', text: 'Ignorere den fordi sosiale medier aldri er til å stole på', isCorrect: false },
            ],
            solution: 'Det viktigste er å sjekke kilden og se om påstanden bekreftes av andre, uavhengige medier. Del aldri en nyhet du ikke har verifisert.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Tenk før du tror

**Falske nyheter** er et alvorlig problem. Skillet mellom feilinformasjon (uten ond hensikt) og desinformasjon (bevisst villedning) er viktig.

**TONE-modellen** gir deg fire kriterier for kildekritikk: Troverdighet, Objektivitet, Nøyaktighet og Egnethet.

**Praktisk kildekritikk** betyr å sjekke avsender, vurdere overskrifter, kreve flere kilder og være oppmerksom på bildebruk.

**Bekreftelsesbias** er vår tendens til å tro på det som passer med det vi allerede mener. Bevissthet om dette gjør deg til en bedre kritisk leser.

**Nøkkelbegreper:** Kildekritikk, TONE-modellen, feilinformasjon, desinformasjon, bekreftelsesbias, falske nyheter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3 NARRATIV: Sosiale medier og påvirkning
// ============================================================================

export const CHAPTER_NORSK_10_8_3_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-3-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.3',
  title: 'Sosiale medier og påvirkning',
  subtitle: 'Narrativ versjon',
  description: 'Forstå hvordan algoritmer, ekkokamre og filterbobler former det du ser, tror og mener.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og vurdere hvordan digitale medier påvirker og endrer språk og kommunikasjon',
    'reflektere kritisk over egen og andres bruk av sosiale medier',
  ],
  linkedChapterId: 'norsk-10-8-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-3-n-intro',
      type: 'text',
      content: `## Telefonen som kjenner deg bedre enn du kjenner deg selv

Tenk tilbake på forrige gang du scrollet gjennom TikTok eller Instagram. Etter noen minutter begynte du sannsynligvis å se innhold som passet perfekt til dine interesser. Hvis du liker fotball, dukket det opp fotballvideoer. Hvis du liker tegning, kom det tegnetips. Og hvis du tilfeldigvis stoppet opp ved et innlegg om konspirasjonsteorier, ville lignende innhold begynne å dukke opp i feeden din.

Dette er ikke magi. Det er algoritmer. Bak kulissene i alle sosiale medier jobber avanserte dataprogrammer som analyserer alt du gjør: hva du liker, hva du deler, hva du kommenterer, hvor lenge du ser på en video, og til og med hva du nesten klikket på, men lot være. Basert på denne informasjonen bygger algoritmene en profil av deg og viser deg innhold som de beregner at du vil engasjere deg i.

Målet er enkelt: å holde deg på plattformen så lenge som mulig. Jo mer tid du bruker på TikTok, jo mer reklame kan de vise deg, og jo mer penger tjener de. Du er ikke kunden. Du er produktet. Annonsørene er kundene, og din oppmerksomhet er det de kjøper.

Men hva gjør dette med oss? Hva skjer med samfunnet når alle lever i sin egen informasjonsboble, skreddersydd av maskiner? Det er det vi skal utforske nå.`,
    },

    // ========== SEKSJON 1: Ekkokamre og filterbobler ==========
    {
      id: 'norsk-10-8-3-n-section1',
      type: 'text',
      content: `## Ekkokamre og filterbobler — Når du bare hører deg selv

Tenk deg at du er i et rom der veggene er speil. Uansett hvilken retning du ser, ser du bare deg selv. Det er et bilde på det som kalles et ekkokammer: et informasjonsmiljø der du bare møter synspunkter som ligner dine egne. Du sier noe, og det kommer tilbake til deg som et ekko.

En filterboble er et beslektet begrep. Det ble lansert av internettaktivisten Eli Pariser i 2011 og beskriver hvordan algoritmene i sosiale medier filtrerer bort innhold som ikke passer med profilen din. Du lever i en boble av informasjon som er skreddersydd for deg, og du vet kanskje ikke engang at det finnes et helt annet informasjonslandskap utenfor boblen.

Konsekvensene kan være alvorlige. Hvis du bare eksponeres for ett synspunkt, risikerer du å tro at alle er enige med deg. Du mister evnen til å forstå andre perspektiver. I verste fall kan ekkokamre radikalisere folk, fordi stadig mer ekstremt innhold anbefales av algoritmer som belønner engasjement. Og det som skaper mest engasjement, er ofte det som provoserer, sjokkerer eller gjør deg sint.

Men det er viktig å ha nyanser her. Forskning viser at ekkokamre-effekten kanskje er mindre dramatisk enn mange tror. De fleste mennesker eksponeres for et bredere spekter av synspunkter enn de tror, blant annet fordi de har venner og bekjente med ulike meninger. Problemet er likevel reelt for de som aktivt oppsøker ensidige informasjonskilder, enten det er i sosiale medier eller i tradisjonelle medier.

Det du kan gjøre, er å være bevisst. Følg kilder du er uenig med. Les aviser med ulik politisk profil. Og neste gang algoritmen serverer deg noe som gjør deg sint, stopp opp og spør deg selv: Blir jeg manipulert?`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på algoritmer og ekkokamre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-3-n-quiz1-q0',
            task: 'Hva er hovedformålet med algoritmene i sosiale medier?',
            options: [
              { id: 'a', text: 'Å gi deg den viktigste informasjonen først', isCorrect: false },
              { id: 'b', text: 'Å holde deg på plattformen så lenge som mulig for å tjene penger på reklame', isCorrect: true },
              { id: 'c', text: 'Å beskytte deg mot falske nyheter', isCorrect: false },
              { id: 'd', text: 'Å hjelpe deg med å finne nye venner', isCorrect: false },
            ],
            solution: 'Algoritmenes hovedformål er kommersielt: å holde deg på plattformen lengst mulig slik at du eksponeres for mer reklame. Din oppmerksomhet er produktet som selges til annonsørene.',
          },
          {
            id: 'norsk-10-8-3-n-quiz1-q1',
            task: 'Hva er forskjellen mellom et ekkokammer og en filterboble?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
              { id: 'b', text: 'Et ekkokammer handler om å bare møte egne synspunkter, en filterboble handler om algoritmisk filtrering av innhold', isCorrect: true },
              { id: 'c', text: 'Ekkokamre finnes bare i sosiale medier, filterbobler finnes overalt', isCorrect: false },
              { id: 'd', text: 'En filterboble er farligere enn et ekkokammer', isCorrect: false },
            ],
            solution: 'Et ekkokammer er et informasjonsmiljø der du bare møter synspunkter som ligner dine egne. En filterboble oppstår spesifikt når algoritmer filtrerer bort innhold som ikke passer din profil.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Bevisst mediebruk ==========
    {
      id: 'norsk-10-8-3-n-section2',
      type: 'text',
      content: `## Å ta tilbake kontrollen

Du er ikke maktesløs overfor algoritmene. Det finnes konkrete ting du kan gjøre for å bruke sosiale medier mer bevisst og kritisk.

For det første kan du variere kildene dine. Ikke bare følg folk som mener det samme som deg. Følg noen nyhetssider med ulik politisk profil. Følg folk fra andre land, andre kulturer, andre aldersgrupper. Jo mer mangfoldig informasjonsdietten din er, jo bedre rustet er du til å tenke selvstendig.

For det andre kan du bli bevisst på dine egne reaksjoner. Algoritmer er designet for å trigge følelser, spesielt sinne, frykt og opprørthet, fordi følelsesladet innhold genererer mest engasjement. Neste gang du kjenner at et innlegg gjør deg sint, stopp opp. Er dette sant? Er dette hele bildet? Er noen interessert i at jeg skal bli sint akkurat nå?

For det tredje kan du begrense skjermtiden. Mange sosiale medieplattformer har innebygde verktøy for å begrense bruken, og det finnes apper som hjelper deg med det. Forskning viser at overdreven bruk av sosiale medier kan påvirke mental helse negativt, spesielt blant unge.

Og for det fjerde: Husk at sosiale medier også har enorme fordeler. De gir stemme til folk som ellers ikke ville blitt hørt. De muliggjør rask mobilisering rundt viktige saker. De kobler mennesker sammen på tvers av landegrenser. Poenget er ikke å slutte med sosiale medier. Poenget er å bruke dem bevisst, med åpne øyne for hvordan de fungerer og påvirker deg.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på bevisst mediebruk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-3-n-quiz2-q0',
            task: 'Hvilken følelse er algoritmene mest designet for å trigge?',
            options: [
              { id: 'a', text: 'Glede og tilfredshet', isCorrect: false },
              { id: 'b', text: 'Kjedsomhet', isCorrect: false },
              { id: 'c', text: 'Sinne, frykt og opprørthet', isCorrect: true },
              { id: 'd', text: 'Søvnighet', isCorrect: false },
            ],
            solution: 'Algoritmer prioriterer innhold som skaper sterkt engasjement. Forskning viser at sinne, frykt og opprørthet genererer mest klikk, kommentarer og delinger.',
          },
          {
            id: 'norsk-10-8-3-n-quiz2-q1',
            task: 'Hva er en viktig strategi for å unngå ekkokamre?',
            options: [
              { id: 'a', text: 'Å slutte helt med sosiale medier', isCorrect: false },
              { id: 'b', text: 'Å bare lese nyheter fra en kilde du stoler på', isCorrect: false },
              { id: 'c', text: 'Å bevisst variere kildene dine og følge folk med ulike synspunkter', isCorrect: true },
              { id: 'd', text: 'Å aldri kommentere på noe', isCorrect: false },
            ],
            solution: 'Å aktivt oppsøke ulike synspunkter og variere informasjonskildene dine er den mest effektive strategien mot ekkokamre. Det gir deg et bredere bilde av virkeligheten.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Se bak algoritmen

**Algoritmer** i sosiale medier analyserer din aktivitet for å vise deg innhold som holder deg på plattformen lengst mulig. Du er produktet, ikke kunden.

**Ekkokamre** er informasjonsmiljøer der du bare møter egne synspunkter. **Filterbobler** oppstår når algoritmer filtrerer bort innhold som ikke passer din profil.

**Følelsestriggende innhold** prioriteres av algoritmer fordi det genererer mest engasjement.

**Bevisst mediebruk** betyr å variere kilder, bli bevisst egne reaksjoner, begrense skjermtid og bruke sosiale medier med åpne øyne.

**Nøkkelbegreper:** Algoritmer, ekkokamre, filterbobler, engasjement, oppmerksomhetsøkonomi, bevisst mediebruk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4 NARRATIV: Reklame og propaganda
// ============================================================================

export const CHAPTER_NORSK_10_8_4_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-4-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.4',
  title: 'Reklame og propaganda',
  subtitle: 'Narrativ versjon',
  description: 'Lær å gjennomskue reklamens virkemidler og forstå forskjellen mellom overtalelse og manipulasjon.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og vurdere reklame og propaganda og gjenkjenne virkemidler',
    'reflektere kritisk over hvordan kommersiell og politisk påvirkning fungerer',
  ],
  linkedChapterId: 'norsk-10-8-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-4-n-intro',
      type: 'text',
      content: `## Du blir påvirket akkurat nå

Visste du at du eksponeres for hundrevis av reklamemeldinger hver eneste dag? De fleste legger du ikke engang merke til. En logo på en t-skjorte. Et merkenavn i bakgrunnen av en film. En influencer som «tilfeldigvis» viser frem et produkt. Reklame er overalt, og den er designet for å påvirke deg uten at du er klar over det.

Reklame er ikke noe nytt. Så lenge det har eksistert markeder, har selgere forsøkt å overbevise kjøpere. Men i vår digitale tidsalder har reklamen blitt smartere, mer sofistikert og vanskeligere å gjennomskue enn noensinne. Den klassiske TV-reklamen der noen sa «Kjøp dette produktet!» er nesten sjarmerende i sin ærlighet sammenlignet med dagens subtile påvirkningsstrategier.

Og så har vi propaganda, som er reklamens farlige fetter. Mens reklame prøver å selge deg et produkt, prøver propaganda å selge deg en idé, en ideologi eller en politisk agenda. Propaganda bruker mange av de samme virkemidlene som reklame, men med langt større konsekvenser for samfunnet. Å forstå disse virkemidlene er å beskytte deg mot manipulasjon.`,
    },

    // ========== SEKSJON 1: Reklamevirkemidler ==========
    {
      id: 'norsk-10-8-4-n-section1',
      type: 'text',
      content: `## Reklamens verktøykasse

Reklamemakere bruker en rekke virkemidler for å påvirke deg. Mange av dem er de samme retoriske virkemidlene du har lært om i tidligere kapitler, bare anvendt kommersielt.

Appellformene er sentrale. Etosappell handler om å bruke troverdige avsendere. Når en tannlege anbefaler en tannkrem, bruker reklamen ekspertautoritet for å overbevise deg. Patosappell spiller på følelser: glede, frykt, tilhørighet, nostalgi. Julekampanjer som viser lykkelige familier rundt bordet, selger ikke bare produkter, de selger en drøm om et perfekt liv. Logosappell bruker fakta og tall: «8 av 10 anbefaler» eller «30 prosent mer effektiv».

Skjult reklame er en av de største utfordringene i dag. Det er reklame som ikke ser ut som reklame. Når en influencer poster et bilde med et bestemt merke synlig, uten å merke det som annonse, driver de skjult reklame. Markedsføringsloven krever at all reklame skal merkes tydelig, men reglene brytes konstant. Produktplassering i filmer, sponsede innlegg i sosiale medier og «native advertising» i nettaviser er alle former for skjult reklame der grensene mellom innhold og reklame bevisst viskes ut.

Et annet viktig virkemiddel er det som kalles sosial bevisføring. Reklamen viser at «alle andre» bruker produktet, og du føler at du også bør gjøre det. Anmeldelser, popularitetslister og «bestselger»-merker bruker dette prinsippet. Mennesker er sosiale vesener som påvirkes sterkt av hva andre gjør, og reklamemakerne vet det.

Det er viktig å understreke at reklame ikke er det samme som manipulasjon. De fleste reklamer er lovlige og legitime. Men evnen til å gjennomskue virkemidlene gjør deg til en mer bevisst forbruker.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på reklamevirkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-4-n-quiz1-q0',
            task: 'Hva er skjult reklame?',
            options: [
              { id: 'a', text: 'Reklame som sendes på TV etter midnatt', isCorrect: false },
              { id: 'b', text: 'Reklame som ikke er tydelig merket som reklame', isCorrect: true },
              { id: 'c', text: 'Reklame som bare er synlig for voksne', isCorrect: false },
              { id: 'd', text: 'Reklame for ulovlige produkter', isCorrect: false },
            ],
            solution: 'Skjult reklame er reklame som ikke er tydelig merket som sådan. Eksempler er umerkede sponsede innlegg hos influencere og produktplassering i film.',
          },
          {
            id: 'norsk-10-8-4-n-quiz1-q1',
            task: 'Hva er sosial bevisføring i reklamesammenheng?',
            options: [
              { id: 'a', text: 'Å bruke vitenskapelige studier i reklame', isCorrect: false },
              { id: 'b', text: 'Å vise at mange andre bruker produktet for å overbevise deg', isCorrect: true },
              { id: 'c', text: 'Å publisere reklame i sosiale medier', isCorrect: false },
              { id: 'd', text: 'Å la forbrukere lage reklamen selv', isCorrect: false },
            ],
            solution: 'Sosial bevisføring spiller på at mennesker påvirkes av hva andre gjør. «Bestselger», anmeldelser og «alle bruker det» er eksempler på dette virkemiddelet.',
          },
          {
            id: 'norsk-10-8-4-n-quiz1-q2',
            task: 'En reklame viser en tannlege i hvit frakk som anbefaler en tannkrem. Hvilken appellform brukes?',
            options: [
              { id: 'a', text: 'Patos — den spiller på følelser', isCorrect: false },
              { id: 'b', text: 'Logos — den bruker logiske argumenter', isCorrect: false },
              { id: 'c', text: 'Etos — den bruker en troverdig ekspert for å overbevise', isCorrect: true },
              { id: 'd', text: 'Kairos — den er publisert til rett tid', isCorrect: false },
            ],
            solution: 'Tannlegen i hvit frakk representerer ekspertautoritet, som er en form for etosappell. Vi stoler på fagfolk, og reklamen utnytter dette.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Propaganda ==========
    {
      id: 'norsk-10-8-4-n-section2',
      type: 'text',
      content: `## Propaganda — Når påvirkning blir farlig

Propaganda er systematisk påvirkning som har som mål å forme folks meninger, holdninger eller handlinger til fordel for en bestemt sak, ideologi eller maktgruppe. Til forskjell fra reklame, som selger produkter, selger propaganda ideer og virkelighetsoppfatninger.

Historien er full av eksempler på propaganda med katastrofale konsekvenser. Nazi-Tysklands propagandaminister Joseph Goebbels brukte film, plakater, radio og aviser til å dehumanisere jøder og bygge opp under Hitlers ideologi. Sovjetunionens propaganda glorifiserte kommunismen og skjulte undertrykkelse. Og i dag bruker autoritære regimer over hele verden propaganda for å kontrollere befolkningen.

Men propaganda finnes ikke bare i diktaturer. I demokratiske samfunn kan politiske partier, interesseorganisasjoner og lobbygrupper også bruke propagandistiske virkemidler. Forskjellen mellom «informasjon», «overtalelse» og «propaganda» er ikke alltid like klar. En miljøorganisasjons kampanje mot oljeleting kan oppfattes som viktig opplysning av noen og som propaganda av andre.

Noen typiske propagandavirkemidler inkluderer forenkling av komplekse saker til slagord, bruk av fiendtbilder og syndebukker, appell til frykt og nasjonal stolthet, gjentakelse av budskap til folk tar dem for gitt, og undertrykking eller latterliggjøring av motargumenter. Jo mer du kjenner igjen disse virkemidlene, jo bedre rustet er du mot dem.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på propaganda:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-4-n-quiz2-q0',
            task: 'Hva er det viktigste skillet mellom reklame og propaganda?',
            options: [
              { id: 'a', text: 'Reklame er lovlig, propaganda er ulovlig', isCorrect: false },
              { id: 'b', text: 'Reklame selger produkter, propaganda selger ideer og virkelighetsoppfatninger', isCorrect: true },
              { id: 'c', text: 'Reklame finnes i medier, propaganda finnes bare i politikken', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Reklame har et kommersielt mål: å selge produkter. Propaganda har et ideologisk eller politisk mål: å forme folks virkelighetsoppfatning og holdninger.',
          },
          {
            id: 'norsk-10-8-4-n-quiz2-q1',
            task: 'Hvilken av disse er et typisk propagandavirkemiddel?',
            options: [
              { id: 'a', text: 'Å presentere balanserte argumenter fra begge sider', isCorrect: false },
              { id: 'b', text: 'Å bruke fiendtbilder og syndebukker for å skape frykt', isCorrect: true },
              { id: 'c', text: 'Å oppgi tydelige kilder og referanser', isCorrect: false },
              { id: 'd', text: 'Å invitere til åpen debatt', isCorrect: false },
            ],
            solution: 'Bruk av fiendtbilder og syndebukker er et klassisk propagandavirkemiddel. Det forenkler komplekse problemer og retter frustrasjon mot en bestemt gruppe.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Gjennomsku påvirkningen

**Reklamevirkemidler** inkluderer appellformene (etos, patos, logos), sosial bevisføring og visuell retorikk. Gjenkjennelse av disse gjør deg til en mer bevisst forbruker.

**Skjult reklame** er reklame som ikke er merket som reklame: influencer-innlegg, produktplassering og native advertising. Markedsføringsloven krever tydelig merking.

**Propaganda** er systematisk påvirkning for å forme folks meninger til fordel for en ideologi eller maktgruppe. Den bruker forenkling, fiendtbilder, frykt og gjentakelse.

**Kritisk bevissthet** er det beste våpenet. Jo bedre du kjenner igjen virkemidlene, jo vanskeligere er det å manipulere deg.

**Nøkkelbegreper:** Reklamevirkemidler, skjult reklame, sosial bevisføring, propaganda, fiendtbilde, appellformer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5 NARRATIV: Ytringsfrihet og ytringsansvar
// ============================================================================

export const CHAPTER_NORSK_10_8_5_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-5-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.5',
  title: 'Ytringsfrihet og ytringsansvar',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk grensene for hva du kan si, og hva som skjer når friheten til å ytre seg kolliderer med andres rettigheter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over ytringsfrihet og ytringsansvar i lys av Grunnloven og menneskerettighetene',
    'drøfte grensene for ytringsfrihet i et demokratisk samfunn',
  ],
  linkedChapterId: 'norsk-10-8-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-5-n-intro',
      type: 'text',
      content: `## Kan du si hva du vil?

Forestill deg dette: Du poster en mening på sosiale medier. Noen timer senere har innlegget ditt fått hundrevis av kommentarer. Noen er enige, men mange er sinte. Du får hatmeldinger. Noen truer deg. Andre krever at innlegget ditt skal slettes. Du lurer på: Hadde jeg lov til å si det jeg sa? Og hadde de lov til å si det de sa tilbake?

Ytringsfrihet er en av de mest grunnleggende rettighetene i et demokrati. Den er nedfelt i Grunnlovens paragraf 100, som sier at «ytringsfridom bør finna stad». Den er også beskyttet av Den europeiske menneskerettskonvensjonen. Uten ytringsfrihet kan ikke demokratiet fungere, for demokrati forutsetter at borgerne fritt kan diskutere, kritisere og foreslå endringer.

Men ytringsfrihet betyr ikke at du kan si absolutt hva som helst uten konsekvenser. Det finnes grenser, og disse grensene er konstant gjenstand for debatt. Hvor går grensen mellom en provoserende mening og en hateful ytring? Mellom satire og injurier? Mellom kritikk og trakassering? Disse spørsmålene er blant de vanskeligste et demokrati må svare på.`,
    },

    // ========== SEKSJON 1: Grunnloven og grensene ==========
    {
      id: 'norsk-10-8-5-n-section1',
      type: 'text',
      content: `## Grunnloven paragraf 100 — Frihetens rammeverk

Grunnlovens paragraf 100 er Norges viktigste bestemmelse om ytringsfrihet. Den slår fast tre sentrale prinsipper. For det første at enhver har rett til å ytre seg fritt. For det andre at forhåndssensur, altså at myndighetene kontrollerer innhold før det publiseres, i utgangspunktet ikke er tillatt. Og for det tredje at det er statens ansvar å legge til rette for en åpen og opplyst offentlig samtale.

Men selv Grunnloven anerkjenner at ytringsfriheten har grenser. Du har ikke lov til å fremsette hatefulle ytringer mot bestemte grupper basert på religion, etnisitet, seksuell orientering eller funksjonsevne. Straffelovens paragraf 185 forbyr slike ytringer. Du har heller ikke lov til å true noen, eller å fremsette ærekrenkende påstander du vet er usanne.

Sensur i klassisk forstand, der staten hindrer publisering, finnes i praksis ikke i Norge. Men det betyr ikke at alt som publiseres, er uten konsekvenser. Private selskaper som Facebook og Twitter har sine egne regler for hva som kan publiseres på deres plattformer. En arbeidsgiver kan reagere hvis en ansatt ytrer seg kontroversielt. Og selv om du har juridisk rett til å si noe, kan du møte sosiale konsekvenser som kritikk, utestengelse eller tap av omdømme.

Det er her begrepet ytringsansvar kommer inn. Ytringsansvaret er ikke en juridisk begrensning, men et etisk prinsipp. Det handler om å bruke ytringsfriheten med omtanke. At du har rett til å si noe, betyr ikke nødvendigvis at du bør si det. Å veie sine ord, vurdere konsekvensene og vise respekt for andre er en del av det å ytre seg ansvarlig.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ytringsfrihet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-5-n-quiz1-q0',
            task: 'Hvilken paragraf i Grunnloven verner om ytringsfriheten?',
            options: [
              { id: 'a', text: 'Paragraf 1', isCorrect: false },
              { id: 'b', text: 'Paragraf 50', isCorrect: false },
              { id: 'c', text: 'Paragraf 100', isCorrect: true },
              { id: 'd', text: 'Paragraf 185', isCorrect: false },
            ],
            solution: 'Grunnlovens paragraf 100 verner om ytringsfriheten. Paragraf 185 i straffeloven er den som forbyr hatefulle ytringer.',
          },
          {
            id: 'norsk-10-8-5-n-quiz1-q1',
            task: 'Hva er ytringsansvar?',
            options: [
              { id: 'a', text: 'En lov som straffer folk for kontroversielle meninger', isCorrect: false },
              { id: 'b', text: 'Et etisk prinsipp om å bruke ytringsfriheten med omtanke', isCorrect: true },
              { id: 'c', text: 'Ansvaret for å moderere kommentarfelt', isCorrect: false },
              { id: 'd', text: 'Plikten til å ytre seg i offentlig debatt', isCorrect: false },
            ],
            solution: 'Ytringsansvar er et etisk, ikke juridisk, prinsipp. Det handler om å bruke friheten til å ytre seg med omtanke for konsekvenser og respekt for andre.',
          },
          {
            id: 'norsk-10-8-5-n-quiz1-q2',
            task: 'Hva betyr forhåndssensur?',
            options: [
              { id: 'a', text: 'At myndighetene straffer folk etter at de har ytret seg', isCorrect: false },
              { id: 'b', text: 'At myndighetene kontrollerer og eventuelt hindrer innhold før det publiseres', isCorrect: true },
              { id: 'c', text: 'At redaktøren velger bort innhold i avisen', isCorrect: false },
              { id: 'd', text: 'At sosiale medier sletter innlegg', isCorrect: false },
            ],
            solution: 'Forhåndssensur betyr at myndighetene kontrollerer innhold før det publiseres. Grunnloven forbyr i utgangspunktet forhåndssensur i Norge.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Hatefulle ytringer og debattens grenser ==========
    {
      id: 'norsk-10-8-5-n-section2',
      type: 'text',
      content: `## Når ord gjør vondt — Hatefulle ytringer i den digitale tidsalderen

Internett og sosiale medier har gitt ytringsfriheten en ny dimensjon. Alle kan ytre seg, til alle, når som helst. Det er fantastisk for demokratiet. Men det har også en mørk side: hatefulle ytringer, trakassering og trusler har eksplodert i omfang.

Hatefulle ytringer er ytringer som angriper en person eller gruppe basert på kjennetegn som religion, etnisitet, seksuell orientering eller funksjonsevne. I Norge er slike ytringer forbudt etter straffelovens paragraf 185. Men grensen mellom en hatefull ytring og en provoserende mening er ikke alltid enkel å trekke. Er det hatefullt å kritisere en religion? Nei, kritikk av ideer er en del av ytringsfriheten. Er det hatefullt å oppfordre til vold mot folk som tilhører en religion? Ja, absolutt.

Netthat er et alvorlig problem, spesielt for unge mennesker. Forskning viser at mange unge har opplevd hets, trakassering eller trusler på nett. Konsekvensene kan være alvorlige: angst, depresjon, selvskading og i verste fall selvmord. Det er viktig å forstå at det du skriver på nett, har reelle konsekvenser for reelle mennesker.

Debatten om ytringsfrihetens grenser er krevende fordi det handler om å balansere to viktige verdier: friheten til å ytre seg og retten til å bli beskyttet mot hat og trakassering. Det finnes ingen enkel løsning, men å forstå kompleksiteten er første steg.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på hatefulle ytringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-5-n-quiz2-q0',
            task: 'Er det lov å kritisere en religion i Norge?',
            options: [
              { id: 'a', text: 'Nei, all religionskritikk er forbudt', isCorrect: false },
              { id: 'b', text: 'Ja, kritikk av ideer og religioner er beskyttet av ytringsfriheten', isCorrect: true },
              { id: 'c', text: 'Bare hvis du selv tilhører den religionen', isCorrect: false },
              { id: 'd', text: 'Bare i akademiske sammenhenger', isCorrect: false },
            ],
            solution: 'Kritikk av ideer, religioner og ideologier er en del av ytringsfriheten. Det som er forbudt, er å angripe mennesker basert på deres religiøse tilhørighet.',
          },
          {
            id: 'norsk-10-8-5-n-quiz2-q1',
            task: 'Hvilken lov forbyr hatefulle ytringer i Norge?',
            options: [
              { id: 'a', text: 'Grunnlovens paragraf 100', isCorrect: false },
              { id: 'b', text: 'Markedsføringsloven', isCorrect: false },
              { id: 'c', text: 'Straffelovens paragraf 185', isCorrect: true },
              { id: 'd', text: 'Personopplysningsloven', isCorrect: false },
            ],
            solution: 'Straffelovens paragraf 185 forbyr hatefulle ytringer rettet mot bestemte grupper basert på religion, etnisitet, seksuell orientering eller funksjonsevne.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Frihet med ansvar

**Ytringsfrihet** er en grunnleggende rettighet beskyttet av Grunnlovens paragraf 100 og Den europeiske menneskerettskonvensjonen.

**Forhåndssensur** er i utgangspunktet forbudt i Norge. Men ytringsfriheten har grenser.

**Hatefulle ytringer** rettet mot grupper basert på religion, etnisitet, seksuell orientering eller funksjonsevne er forbudt etter straffelovens paragraf 185.

**Ytringsansvar** er et etisk prinsipp om å bruke friheten med omtanke. At du har rett til å si noe, betyr ikke at du bør si det.

**Netthat** er et alvorlig problem med reelle konsekvenser for folks helse og trivsel.

**Nøkkelbegreper:** Ytringsfrihet, Grunnloven paragraf 100, straffeloven paragraf 185, forhåndssensur, hatefulle ytringer, ytringsansvar, netthat.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6 NARRATIV: Journalistikk og etikk
// ============================================================================

export const CHAPTER_NORSK_10_8_6_NARRATIV: TextbookChapter = {
  id: 'norsk-10-8-6-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '8.6',
  title: 'Journalistikk og etikk',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk journalistikkens etiske dilemmaer, fra kildevern og PFU til gravejournalistikkens betydning for demokratiet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for presseetiske regler og reflektere over medienes samfunnsansvar',
    'forstå journalistikkens rolle i demokratiet og hva som kjennetegner god journalistikk',
  ],
  linkedChapterId: 'norsk-10-8-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-8-6-n-intro',
      type: 'text',
      content: `## Journalisten som avslørte sannheten

I 2017 begynte VG-journalisten Bernt Jakob Oksnes å jobbe med en sak som skulle bli en av norsk journalistikks viktigste. Han undersøkte forholdene i barnevernssystemet, og det han fant, sjokkerte Norge. Barn som ble flyttet fra fosterhjem til fosterhjem. Familier som ble splittet uten tilstrekkelig grunnlag. Systemsvikt som rammet de mest sårbare.

Denne typen journalistikk kalles gravejournalistikk, og den representerer journalistikken på sitt aller beste. Gravejournalister bruker måneder, noen ganger år, på å undersøke en enkelt sak. De graver i dokumenter, snakker med kilder, og avdekker forhold som makthavere helst vil holde skjult. Det er ressurskrevende, tidkrevende og noen ganger risikabelt. Men det er også uunnværlig for et demokrati.

Samtidig reiser journalistikken vanskelige etiske spørsmål. Hvor langt kan en journalist gå for å få en sak? Er det greit å bruke skjult kamera? Kan du publisere private opplysninger om en person i offentlighetens interesse? Og hvem bestemmer hva som er «offentlighetens interesse»?

I Norge har vi et system for presseetikk som er unikt i verden. Det er basert på selvjustis, altså at mediene selv regulerer seg, ikke at myndighetene gjør det. Sentrale elementer er Vær Varsom-plakaten og Pressens Faglige Utvalg (PFU).`,
    },

    // ========== SEKSJON 1: PFU og kildevern ==========
    {
      id: 'norsk-10-8-6-n-section1',
      type: 'text',
      content: `## PFU — Domstolen uten makt til å straffe

Pressens Faglige Utvalg, forkortet PFU, er norsk presses eget etiske klageorgan. Hvem som helst som mener at et medium har opptrådt i strid med god presseskikk, kan klage til PFU. Utvalget vurderer klagen opp mot Vær Varsom-plakaten og kommer med en uttalelse. Mediet kan enten frikjennes eller få kritikk.

Det viktige med PFU er at det ikke er en domstol. Det kan ikke bøtelegge medier, frata dem lisenser eller stenge dem ned. Dets eneste våpen er offentlig kritikk. Og likevel fungerer systemet. Norske medier tar PFU-fellelser svært alvorlig fordi det handler om omdømme og troverdighet. En PFU-fellelse betyr at hele bransjen har slått fast at du har brutt de etiske reglene, og det er noe de fleste mediehus vil unngå.

Kildevern er en annen hjørnestein i journalistisk etikk. Kildevern betyr at en journalist har rett til å beskytte identiteten til sine kilder, altså menneskene som gir informasjon til journalisten. Denne retten er lovfestet i Norge og er avgjørende for at folk skal tørre å varsle om kritikkverdige forhold. Hvis en ansatt i et selskap vet om juks, men frykter å miste jobben, kan vedkommende kontakte en journalist i visshet om at identiteten vil bli beskyttet.

Uten kildevern ville gravejournalistikken i praksis bli umulig. Kilder ville ikke tørre å snakke. Og uten gravejournalistikk ville mange skandaler aldri blitt avslørt. Kildevernet er derfor ikke bare en rettighet for journalisten, det er en beskyttelse for hele samfunnet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-8-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på PFU og kildevern:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-6-n-quiz1-q0',
            task: 'Hva er PFU?',
            options: [
              { id: 'a', text: 'En statlig myndighet som kontrollerer pressen', isCorrect: false },
              { id: 'b', text: 'Pressens eget etiske klageorgan som vurderer brudd på god presseskikk', isCorrect: true },
              { id: 'c', text: 'En domstol som straffer journalister', isCorrect: false },
              { id: 'd', text: 'En avdeling i NRK som kvalitetssikrer nyheter', isCorrect: false },
            ],
            solution: 'PFU (Pressens Faglige Utvalg) er mediebransjens eget klageorgan. Det vurderer klager mot Vær Varsom-plakaten og kan frikjenne eller kritisere medier, men kan ikke straffe dem.',
          },
          {
            id: 'norsk-10-8-6-n-quiz1-q1',
            task: 'Hvorfor er kildevern viktig?',
            options: [
              { id: 'a', text: 'Fordi journalister ikke vil dele sine kilder med konkurrenter', isCorrect: false },
              { id: 'b', text: 'Fordi det beskytter folk som varsler om kritikkverdige forhold mot represalier', isCorrect: true },
              { id: 'c', text: 'Fordi det gir journalister rett til å dikte opp kilder', isCorrect: false },
              { id: 'd', text: 'Fordi det gjør nyheter mer spennende', isCorrect: false },
            ],
            solution: 'Kildevern beskytter identiteten til journalistens kilder. Uten dette vernet ville folk ikke tørre å varsle om juks, korrupsjon eller annen maktmisbruk.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Gravejournalistikk og etiske dilemmaer ==========
    {
      id: 'norsk-10-8-6-n-section2',
      type: 'text',
      content: `## Gravejournalistikk — Demokratiets vaktbikkje

Gravejournalistikk er undersøkende journalistikk der journalisten bruker lang tid på å avdekke skjulte forhold av offentlig interesse. Det kan handle om korrupsjon, systemsvikt, maktmisbruk eller andre forhold som noen ønsker å holde skjult. Gravejournalister jobber som detektiver: de samler dokumenter, intervjuer kilder, kryssjeiker informasjon og bygger saken bit for bit.

Noen av de mest kjente norske gravejournalistiske sakene inkluderer VGs avsløringer av ukultur i fotballen, Bergens Tidendes dekning av overgrepssaken i den katolske kirken, og Aftenpostens avsløringer av hemmelige norske ubåtbaser under den kalde krigen. Internasjonalt er Watergate-skandalen, der Washington Post avslørte president Nixons involvering i innbrudd og dekkoperasjoner, kanskje det mest kjente eksempelet.

Men gravejournalistikk reiser også etiske dilemmaer. Et sentralt spørsmål er balansen mellom offentlighetens behov for informasjon og individets rett til privatliv. En politiker som misbruker offentlige midler, fortjener å bli avslørt. Men hva med politikerens barn? Har de rett til å bli skjermet fra medieoppmerksomheten?

Et annet dilemma handler om metoder. Er det etisk forsvarlig å bruke skjult kamera for å avsløre juks? Hva med å utgi seg for å være noen andre for å komme inn i en organisasjon? Vær Varsom-plakaten sier at slike metoder bare kan brukes når det ikke er mulig å avdekke forholdene på annen måte, og når sakens alvor forsvarer det.

God journalistikk handler til syvende og sist om å tjene offentligheten. Det betyr å rapportere sannheten, beskytte de sårbare, granske makten og gi folk den informasjonen de trenger for å ta gode valg i et demokrati. Det er et stort ansvar, og det krever høy etisk bevissthet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-8-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-8-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på gravejournalistikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-8-6-n-quiz2-q0',
            task: 'Hva kjennetegner gravejournalistikk?',
            options: [
              { id: 'a', text: 'Journalister som dekker begravelser', isCorrect: false },
              { id: 'b', text: 'Undersøkende journalistikk som bruker lang tid på å avdekke skjulte forhold', isCorrect: true },
              { id: 'c', text: 'Journalistikk som graver i gamle arkiver for underholdningens skyld', isCorrect: false },
              { id: 'd', text: 'Journalister som skriver om arkeologi', isCorrect: false },
            ],
            solution: 'Gravejournalistikk er undersøkende journalistikk der journalisten bruker lang tid på å avdekke skjulte forhold av offentlig interesse, som korrupsjon eller maktmisbruk.',
          },
          {
            id: 'norsk-10-8-6-n-quiz2-q1',
            task: 'Når kan skjult kamera ifølge Vær Varsom-plakaten brukes?',
            options: [
              { id: 'a', text: 'Når som helst, så lenge det gir gode bilder', isCorrect: false },
              { id: 'b', text: 'Aldri, skjult kamera er alltid uetisk', isCorrect: false },
              { id: 'c', text: 'Bare når det ikke er mulig å avdekke forholdene på annen måte og sakens alvor forsvarer det', isCorrect: true },
              { id: 'd', text: 'Bare med politiets tillatelse', isCorrect: false },
            ],
            solution: 'Vær Varsom-plakaten tillater skjult kamera og lignende metoder kun når det ikke finnes andre måter å avdekke forholdene på, og når sakens alvor rettferdiggjør metoden.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-8-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Etikk i praksis

**PFU** (Pressens Faglige Utvalg) er mediebransjens eget klageorgan. Det kan kritisere medier som bryter Vær Varsom-plakaten, men har ingen straffemyndighet.

**Kildevern** beskytter journalistens kilder og er lovfestet i Norge. Det er avgjørende for at folk skal tørre å varsle.

**Gravejournalistikk** er undersøkende journalistikk som avdekker skjulte forhold av offentlig interesse. Den er ressurskrevende, men uunnværlig for demokratiet.

**Etiske dilemmaer** oppstår når offentlighetens informasjonsbehov kolliderer med individets rett til privatliv eller når kontroversielle metoder brukes.

**God journalistikk** tjener offentligheten ved å rapportere sannheten, beskytte de sårbare og granske makten.

**Nøkkelbegreper:** PFU, Vær Varsom-plakaten, kildevern, gravejournalistikk, presseetikk, selvjustis, skjult kamera.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL6_CHAPTERS = [
  CHAPTER_NORSK_10_8_1_NARRATIV,
  CHAPTER_NORSK_10_8_2_NARRATIV,
  CHAPTER_NORSK_10_8_3_NARRATIV,
  CHAPTER_NORSK_10_8_4_NARRATIV,
  CHAPTER_NORSK_10_8_5_NARRATIV,
  CHAPTER_NORSK_10_8_6_NARRATIV,
];

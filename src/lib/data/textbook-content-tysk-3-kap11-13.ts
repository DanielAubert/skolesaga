/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 3 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: Geschichte und Erinnerungskultur (11.1-11.4)
 * - Kapittel 12: Umwelt und Nachhaltigkeit (12.1-12.4)
 * - Kapittel 13: Kunst, Musik und Film (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1: Die Weimarer Republik und der Aufstieg des Nationalsozialismus
// ============================================================================

export const CHAPTER_TYSK_3_11_1: TextbookChapter = {
  id: 'tysk-3-11-1',
  courseId: 'tysk-3',
  chapterNumber: '11.1',
  title: 'Die Weimarer Republik und der Aufstieg des Nationalsozialismus',
  subtitle: 'Weimarrepublikken og nasjonalsosialismens fremvekst',
  description: 'Laer om Weimarrepublikken 1919-1933, den kulturelle blomstringen, den okonomiske krisen og nasjonalsosialismens fremvekst i Tyskland.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-11-1-intro',
      type: 'text',
      content: `## Die Weimarer Republik (1919-1933)

Weimarrepublikken var Tysklands forste demokrati. Etter keiser Wilhelm IIs abdikasjon i november 1918 og Tysklands nederlag i forste verdenskrig, ble en demokratisk grunnlov vedtatt i byen Weimar i 1919. Perioden var preget av enorme motsetninger: kulturell blomstring og dyp okonomisk krise, demokratisk optimisme og politisk radikalisering.

**Hovedperioder:**
- **1919-1923:** Krisear med hyperinflasjon, politiske kuppforsok og okkupasjon av Ruhrområdet
- **1924-1929:** "Die Goldenen Zwanziger" - de gylne tjuearene med okonomisk oppgang og kulturell blomstring
- **1929-1933:** Weltwirtschaftskrise (verdenskrisen) og nasjonalsosialismens fremvekst

Weimarrepublikken er et viktig eksempel pa hvor skarbart et demokrati kan vaere nar okonomiske og politiske kriser rammer.`,
    },
    {
      id: 'tysk-3-11-1-def-1',
      type: 'definition',
      title: 'Vokabular: Die Weimarer Republik',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| die Weimarer Republik | Weimarrepublikken |
| die Verfassung | grunnloven |
| die Goldenen Zwanziger | de gylne tjuearene |
| die Weltwirtschaftskrise | verdenskrisen |
| der Reichstag | riksdagen (parlamentet) |
| die Hyperinflation | hyperinflasjon |
| der Putsch | kupp(forsok) |
| die Arbeitslosigkeit | arbeidsloshet |
| der Reichsprasident | rikspresident |
| die Weimarer Verfassung | Weimar-grunnloven |
| das Frauenwahlrecht | kvinners stemmerett |
| die Reparationszahlungen | krigserstatningsbetalinger |`,
    },
    {
      id: 'tysk-3-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Die Goldenen Zwanziger',
      problem: `Les teksten og svar pa sporsmalene:

"Die Goldenen Zwanziger waren eine Zeit des kulturellen Aufbruchs in Deutschland. In Berlin bluhte das Nachtleben, und die Stadt wurde zu einer Metropole der Kunst und Kultur. Der Expressionismus pragte Malerei und Film, wahrend in der Architektur das Bauhaus neue Massstabe setzte. Frauen trugen kurze Haare und Rocke, tanzten Charleston und forderten Gleichberechtigung. Doch hinter dem Glanz verbarg sich eine tiefe soziale Spaltung: Millionen lebten in Armut, wahrend eine kleine Elite feierte."

a) Hva kjennetegnet de gylne tjuearene?
b) Hvilke kunstretninger nevnes?
c) Hva skjulte seg bak glansen?`,
      solution: `a) De gylne tjuearene var preget av kulturelt opprbrudd (kultureller Aufbruch). Berlin blomstret som metropol for kunst og kultur, nattlivet var livlig, og kvinner krevde likestilling.

b) Ekspresjonismen (der Expressionismus) preget maleri og film, og i arkitekturen satte Bauhaus nye standarder (neue Massstabe setzte).

c) Bak glansen skjulte det seg en dyp sosial splittelse (soziale Spaltung): millioner levde i fattigdom mens en liten elite feiret.

**Spraktips:**
- "blühen" = a blomstre (brukt metaforisk om kulturlivet)
- "sich verbergen" = a skjule seg (verbarg sich = preteritum)
- "Gleichberechtigung" = likestilling (gleich = lik + Berechtigung = rettighet)`,
    },
    {
      id: 'tysk-3-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-ex-1',
        number: '11.1.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var "die Goldenen Zwanziger"?',
        options: [
          { id: 'a', text: 'En periode med kulturell blomstring og okonomisk oppgang pa 1920-tallet', isCorrect: true },
          { id: 'b', text: 'En periode med krig og okonomisk krise pa 1930-tallet', isCorrect: false },
          { id: 'c', text: 'En politisk bevegelse i etterkrigstidens Tyskland', isCorrect: false },
          { id: 'd', text: 'Et kunstnerisk manifest fra Bauhaus-skolen', isCorrect: false },
        ],
        solution: 'Die Goldenen Zwanziger (de gylne tjuearene) var perioden 1924-1929 i Tyskland, preget av kulturell blomstring, okonomisk oppgang og modernisering - spesielt i Berlin.',
        hints: ['Tenk pa hva "golden" (gyllen/gylne) antyder om perioden'],
      },
    },
    {
      id: 'tysk-3-11-1-text-2',
      type: 'text',
      content: `## Die Weltwirtschaftskrise und der Aufstieg des Nationalsozialismus

Borskrakket pa Wall Street i oktober 1929 utloste en verdensomspennende okonomisk krise. Tyskland ble hardt rammet fordi okonomien var avhengig av amerikanske lan. Arbeidsloshet steg til over 6 millioner, og folk mistet troen pa demokratiet.

**Nasjonalsosialismens fremvekst:**
- Adolf Hitler og NSDAP (Nationalsozialistische Deutsche Arbeiterpartei) utnyttet krisen
- Propaganda appellerte til frykt, nasjonalisme og antisemittisme
- NSDAP fikk 37% av stemmene i 1932
- 30. januar 1933: Hitler ble utnevnt til rikskansler (Reichskanzler)

**Maktovertagelsen (die Machtergreifung):**
- Riksdagsbrannen (Reichstagsbrand) i februar 1933 ble brukt som paskudd
- Ermachtigungsgesetz (fullmaktsloven) ga Hitler diktatorisk makt
- Alle partier unntatt NSDAP ble forbudt
- Demokratiet ble avskaffet i lopet av fa maneder`,
    },
    {
      id: 'tysk-3-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Propaganda und Machtergreifung',
      problem: `Les utdraget og analyser:

"Das Ermachtigungsgesetz vom 24. Marz 1933 war der entscheidende Schritt zur Errichtung der nationalsozialistischen Diktatur. Das Gesetz gab der Regierung die Befugnis, Gesetze ohne Zustimmung des Reichstags zu erlassen. Die demokratische Verfassung war damit faktisch ausser Kraft gesetzt. Nur die SPD stimmte dagegen; die KPD war bereits verboten."

a) Hva var Ermachtigungsgesetz?
b) Hvilken konsekvens hadde loven?
c) Hvem stemte imot?`,
      solution: `a) Ermachtigungsgesetz (fullmaktsloven) av 24. mars 1933 ga regjeringen fullmakt til a vedta lover uten riksdagens godkjennelse (ohne Zustimmung des Reichstags).

b) Den demokratiske grunnloven var dermed i praksis satt ut av kraft (ausser Kraft gesetzt). Dette var det avgjorende skrittet mot nazidiktaturet (der entscheidende Schritt zur Errichtung der Diktatur).

c) Bare SPD (sosialdemokratene) stemte imot. KPD (kommunistene) var allerede forbudt.

**Historisk kontekst:** Riksdagsbrannen 27. februar 1933 ble brukt som paskudd for a innfore unntakstilstand og arrestere politiske motstandere for avstemningen fant sted.`,
    },
    {
      id: 'tysk-3-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-ex-2',
        number: '11.1.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til norsk og forklar den historiske sammenhengen:',
        subTasks: [
          { label: 'a', task: 'die Machtergreifung', solution: 'Maktovertagelsen - betegner Hitlers og NSDAPens overtagelse av makten i 1933' },
          { label: 'b', task: 'das Ermachtigungsgesetz', solution: 'Fullmaktsloven - ga regjeringen makt til a vedta lover uten parlamentets godkjennelse' },
          { label: 'c', task: 'die Weltwirtschaftskrise', solution: 'Verdenskrisen - den globale okonomiske krisen fra 1929 som forverret forholdene i Tyskland' },
          { label: 'd', task: 'der Reichstag', solution: 'Riksdagen - det tyske parlamentet, ogsa navnet pa parlamentsbygningen som brant i 1933' },
        ],
        solution: 'a) Maktovertagelsen (1933), b) Fullmaktsloven (1933), c) Verdenskrisen (fra 1929), d) Riksdagen (parlamentet)',
        hints: ['Ermachtigung = fullmakt, Gesetz = lov', 'Machtergreifung: Macht = makt, ergreifen = a gripe'],
      },
    },
    {
      id: 'tysk-3-11-1-text-3',
      type: 'text',
      content: `## Kulturliv i Weimarrepublikken

Weimarrepublikken var en ekstraordinaer periode for tysk kultur:

**Film:** Fritz Lang skapte "Metropolis" (1927), og tysk ekspresjonistisk film pavirket hele verdens filmkunst. "Das Cabinet des Dr. Caligari" (1920) regnes som en milepael.

**Litteratur:** Thomas Mann, Bertolt Brecht og Erich Maria Remarque ("Im Westen nichts Neues") skapte verk som fremdeles leses i dag.

**Arkitektur:** Bauhaus-skolen (1919-1933) revolusjonerte design og arkitektur med sitt prinsipp om a forene kunst og handverk.

**Musikk og teater:** Kabaretscenen blomstret, og Bertolt Brecht utviklet det episke teateret.

| Kulturomrade | Tysk | Viktige navn |
|--------------|------|-------------|
| Film | der Film | Fritz Lang, F.W. Murnau |
| Litteratur | die Literatur | Thomas Mann, Bertolt Brecht |
| Arkitektur | die Architektur | Walter Gropius (Bauhaus) |
| Musikk | die Musik | Kurt Weill, Marlene Dietrich |`,
    },
    {
      id: 'tysk-3-11-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Kulturell analyse',
      problem: `Les dette sitatet fra en historiker:

"Die Weimarer Republik war ein Paradox: Sie brachte einige der grossten kulturellen Errungenschaften des 20. Jahrhunderts hervor, wahrend sie gleichzeitig politisch und wirtschaftlich am Abgrund stand. Das Bauhaus, der Expressionismus und das Berliner Nachtleben standen im scharfen Kontrast zur Massenarbeitslosigkeit und politischen Radikalisierung."

a) Hvilket paradoks beskrives?
b) Hvilke kulturelle prestasjoner nevnes?
c) Hva sto i kontrast til kulturen?`,
      solution: `a) Paradokset var at Weimarrepublikken skapte noen av det 20. arhundrets storste kulturelle prestasjoner (grosste kulturelle Errungenschaften), samtidig som den sto pa randen politisk og okonomisk (am Abgrund stand).

b) De kulturelle prestasjonene som nevnes er Bauhaus, ekspresjonismen og Berlins natteliv.

c) Kulturen sto i skarp kontrast (im scharfen Kontrast) til massearbeidsloshet (Massenarbeitslosigkeit) og politisk radikalisering.

**Spraktips:**
- "hervorbringen" = a frembringe, skape (brachte hervor = preteritum)
- "am Abgrund stehen" = a sta pa randen/stupet
- "die Errungenschaft" = prestasjon, erverv`,
    },
    {
      id: 'tysk-3-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-ex-3',
        number: '11.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst pa tysk (5-7 setninger) om Weimarrepublikken. Bruk folgende begreper: die Weimarer Republik, die Demokratie, die Krise, der Aufstieg, die Kultur.',
        subTasks: [
          { label: 'a', task: 'Beskriv kort hva Weimarrepublikken var.', solution: 'Die Weimarer Republik war die erste Demokratie in Deutschland (1919-1933).' },
          { label: 'b', task: 'Nevn noe positivt fra perioden.', solution: 'Die Goldenen Zwanziger brachten eine kulturelle Blute in Kunst, Film und Architektur.' },
          { label: 'c', task: 'Forklar hva som forte til dens undergang.', solution: 'Die Weltwirtschaftskrise fuhrte zu Massenarbeitslosigkeit und dem Aufstieg des Nationalsozialismus.' },
        ],
        solution: 'Eksempel: "Die Weimarer Republik war die erste Demokratie in Deutschland. Sie wurde 1919 gegrundet. In den Goldenen Zwanzigern bluhte die Kultur. Doch die Weltwirtschaftskrise ab 1929 fuhrte zu einer tiefen Krise. Die Arbeitslosigkeit stieg auf uber sechs Millionen. Dies ermoglichte den Aufstieg des Nationalsozialismus. 1933 kam Hitler an die Macht."',
        hints: ['Bruk preteritum for historiske hendelser', 'Binde setningene sammen med "doch", "jedoch", "dennoch"'],
      },
    },
    {
      id: 'tysk-3-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-ex-4',
        number: '11.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var "das Ermachtigungsgesetz"?',
        options: [
          { id: 'a', text: 'En lov som ga regjeringen fullmakt til a vedta lover uten parlamentets godkjennelse', isCorrect: true },
          { id: 'b', text: 'Weimarrepublikkens grunnlov fra 1919', isCorrect: false },
          { id: 'c', text: 'En lov som innforte demokrati i Tyskland', isCorrect: false },
          { id: 'd', text: 'En handelsavtale mellom Tyskland og USA', isCorrect: false },
        ],
        solution: 'Ermachtigungsgesetz (fullmaktsloven) av 24. mars 1933 var det avgjorende skrittet mot nazidiktaturet. Den ga Hitlers regjering makt til a vedta lover uten riksdagens samtykke.',
        hints: ['Ermachtigung betyr fullmakt, Gesetz betyr lov'],
      },
    },
    {
      id: 'tysk-3-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-1-ex-5',
        number: '11.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble de tyske begrepene med riktig norsk forklaring:',
        subTasks: [
          { label: 'a', task: 'die Hyperinflation', solution: 'Ekstremt hoy inflasjon der pengene mistet sin verdi (1923)' },
          { label: 'b', task: 'das Frauenwahlrecht', solution: 'Kvinners stemmerett - innfort i Tyskland i 1919' },
          { label: 'c', task: 'die Reparationszahlungen', solution: 'Krigserstatninger som Tyskland matte betale etter forste verdenskrig' },
          { label: 'd', task: 'der Reichstagsbrand', solution: 'Brannen i riksdagsbygningen i februar 1933' },
        ],
        solution: 'a) Ekstremt hoy inflasjon (1923), b) Kvinners stemmerett (1919), c) Krigserstatninger etter WW1, d) Riksdagsbrannen (1933)',
        hints: ['Frau = kvinne, Wahl = valg, Recht = rett', 'Reparation = erstatning, Zahlung = betaling'],
      },
    },
    {
      id: 'tysk-3-11-1-note-1',
      type: 'note',
      title: 'Oppsummering: Die Weimarer Republik',
      content: `**Viktige punkter a huske:**

- Weimarrepublikken (1919-1933) var Tysklands forste demokrati
- Die Goldenen Zwanziger (1924-1929) var en tid med kulturell blomstring
- Verdenskrisen fra 1929 forte til massearbeidsloshet og politisk radikalisering
- NSDAP utnyttet krisen til a fa oppslutning
- Ermachtigungsgesetz i 1933 avskaffet demokratiet
- Perioden viser hvor skarbart et demokrati kan vaere

**Nokkelord:** die Weimarer Republik, die Machtergreifung, die Goldenen Zwanziger, die Weltwirtschaftskrise, der Reichstag, das Ermachtigungsgesetz`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Weimarer Republik', definition: 'Weimarrepublikken (1919-1933), Tysklands forste demokrati' },
    { term: 'die Machtergreifung', definition: 'maktovertagelsen - Hitlers overtagelse av makten i 1933' },
    { term: 'die Goldenen Zwanziger', definition: 'de gylne tjuearene (1924-1929), kulturell blomstringsperiode' },
    { term: 'die Weltwirtschaftskrise', definition: 'verdenskrisen fra 1929, utlost av borskrakket pa Wall Street' },
    { term: 'der Reichstag', definition: 'riksdagen - det tyske parlamentet' },
    { term: 'das Ermachtigungsgesetz', definition: 'fullmaktsloven (1933), ga Hitler diktatorisk makt' },
    { term: 'die Hyperinflation', definition: 'ekstremt hoy inflasjon, spesielt i 1923' },
    { term: 'das Frauenwahlrecht', definition: 'kvinners stemmerett, innfort i 1919' },
  ],
};

// ============================================================================
// Kapittel 11.2: Der Holocaust und die Erinnerungskultur
// ============================================================================

export const CHAPTER_TYSK_3_11_2: TextbookChapter = {
  id: 'tysk-3-11-2',
  courseId: 'tysk-3',
  chapterNumber: '11.2',
  title: 'Der Holocaust und die Erinnerungskultur',
  subtitle: 'Holocaust og minnekultur',
  description: 'Laer om Holocaust, konsentrasjonsleirene, Nurnbergprosessene og den tyske erinnerungskulturen med Stolpersteine og minnesmerker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-11-2-intro',
      type: 'text',
      content: `## Der Holocaust - Die Shoah

Holocaust (ogsa kalt die Shoah) er betegnelsen pa nazistenes systematiske folkemord pa seks millioner europeiske joder og millioner av andre ofre under andre verdenskrig (1939-1945). Det er et av historiens verste forbrytelser og har satt dype spor i tysk identitet og minnekultur.

**Hovedtrekk:**
- Forfolgelse av joder begynte allerede i 1933 med boikott og lover (Nurnbergerlovene 1935)
- "Krystallnatten" (Reichspogromnacht) 9.-10. november 1938: synagoger ble brent, butikker knust
- Fra 1941: systematisk utryddelse i konsentrasjonsleirer (Auschwitz, Treblinka, Dachau m.fl.)
- Ca. 6 millioner joder ble drept, samt romaer, funksjonshemmede, homofile og politiske motstandere

A forstå Holocaust er avgjorende for a forstå det moderne Tyskland og dets politiske kultur.`,
    },
    {
      id: 'tysk-3-11-2-def-1',
      type: 'definition',
      title: 'Vokabular: Holocaust und Gedenken',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| der Holocaust | holocaust |
| die Shoah | shoah (hebraisk for katastrofe) |
| das Konzentrationslager (KZ) | konsentrasjonsleir |
| die Vernichtung | tilintetgjorelse, utryddelse |
| die Verfolgung | forfolgelse |
| der Volkermord / der Genozid | folkemord |
| die Nurnberger Gesetze | Nurnbergerlovene |
| die Reichspogromnacht | krystallnatten |
| das Ghetto | ghetto |
| die Deportation | deportasjon |
| der Widerstand | motstand |
| die Befreiung | frigjoring |`,
    },
    {
      id: 'tysk-3-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Zeugnis einer Uberlebenden',
      problem: `Les dette vitnesbyrdet og svar pa sporsmalene:

"Ich war funfzehn Jahre alt, als sie uns nach Auschwitz brachten. Meine Mutter und meine kleine Schwester wurden sofort in die Gaskammern geschickt. Ich uberlebte nur, weil ich stark genug aussah, um zu arbeiten. Jeden Tag dachte ich: Morgen werde ich sterben. Aber ich uberlebte. Nach der Befreiung 1945 hatte ich niemanden mehr. Heute erzahle ich meine Geschichte, damit die Welt nie vergisst."

a) Hvor gammel var vitnet da hun ble sendt til Auschwitz?
b) Hva skjedde med moren og sosteren?
c) Hvorfor forteller hun sin historie?`,
      solution: `a) Vitnet var femten ar gammel (funfzehn Jahre alt) da hun ble sendt til Auschwitz.

b) Moren og den lille sosteren ble sendt direkte til gasskamrene (wurden sofort in die Gaskammern geschickt).

c) Hun forteller sin historie for at verden aldri skal glemme (damit die Welt nie vergisst).

**Spraktips:**
- "sie brachten uns" = de brakte oss (preteritum av bringen)
- "aussehen" = a se ut (aussah = preteritum)
- "damit" = for at, slik at (innleder formal leddsetning)
- "die Gaskammer" = gasskammer (et av nazistenes verktoy for massemord)`,
    },
    {
      id: 'tysk-3-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-ex-1',
        number: '11.2.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var "die Reichspogromnacht" (Krystallnatten)?',
        options: [
          { id: 'a', text: 'Pogrom mot joder 9.-10. november 1938 der synagoger og butikker ble oydelagt', isCorrect: true },
          { id: 'b', text: 'Riksdagsbrannen i februar 1933', isCorrect: false },
          { id: 'c', text: 'Frigjøringen av konsentrasjonsleirene i 1945', isCorrect: false },
          { id: 'd', text: 'Vedtakelsen av Nurnbergerlovene i 1935', isCorrect: false },
        ],
        solution: 'Reichspogromnacht (ogsa kalt Kristallnacht) var pogromen mot joder natten 9.-10. november 1938. Synagoger ble brent, jodiske butikker ble knust, og over 30 000 jodiske menn ble arrestert. Navnet henspeiler pa de knuste glassrutene.',
        hints: ['Pogrom = organisert voldelig aksjon mot en folkegruppe', '"Kristall" henspiller pa knust glass'],
      },
    },
    {
      id: 'tysk-3-11-2-text-2',
      type: 'text',
      content: `## Die Erinnerungskultur - Minnekultur

Etter krigen matte Tyskland konfrontere sin fortid. Prosessen med a bearbeide fortiden kalles **Vergangenheitsbewaltigung** - et av de lengste ordene i tysk og et sentralt begrep i tysk kultur.

**Former for minnekultur:**

**Stolpersteine (snublesteiner):**
Kunstneren Gunter Demnig har lagt ned over 100 000 messingssteiner i fortauet foran hjemmene til Holocaust-ofre i hele Europa. Pa hver stein star: "Hier wohnte..." (Her bodde...) etterfulgt av navn, fodselsàr og skjebne.

**Minnesmerker:**
- Holocaust-Mahnmal (Holocaust-minnesmerket) i Berlin: 2 711 betongsteler
- Dokumentationszentrum (dokumentasjonssenteret) i Nurnberg
- KZ-Gedenkstatten (minnesteder ved konsentrasjonsleirene)

**"Nie wieder" (Aldri igjen):**
Uttrykket "Nie wieder" er et grunnprinsipp i tysk politikk og samfunnsliv. Tyskland har tatt et saerlig ansvar for a minne om Holocaust og forhindre folkemord.`,
    },
    {
      id: 'tysk-3-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Die Stolpersteine',
      problem: `Les teksten og analyser:

"Die Stolpersteine sind das grosste dezentrale Denkmal der Welt. Seit 1992 hat der Kunstler Gunter Demnig uber 100.000 Messingplatten in Gehwege eingelassen. Jeder Stein erinnert an ein einzelnes Opfer des Nationalsozialismus. Die Inschrift beginnt immer mit den Worten 'Hier wohnte...' und endet meist mit Deportationsdatum und Todesort. Die Stolpersteine machen das Gedenken alltaglich - man stolpert nicht physisch, sondern mit dem Herzen und dem Verstand."

a) Hva er Stolpersteine?
b) Hvordan begynner innskriften pa hver stein?
c) Hva betyr det a "snuble med hjertet og forstanden"?`,
      solution: `a) Stolpersteine (snublesteiner) er messingplater nedfelt i fortauet (Gehweg) foran hjemmene til Holocaust-ofre. De utgjor verdens storste desentraliserte minnesmerke (das grosste dezentrale Denkmal).

b) Innskriften begynner alltid med ordene "Hier wohnte..." (Her bodde...) og ender som regel med deportasjonsdato og dodssted.

c) Uttrykket "man stolpert nicht physisch, sondern mit dem Herzen und dem Verstand" betyr at man ikke bokstavelig snubler, men at steinene far en til a stoppe opp og tenke - a "snuble" med folelsene og tankene. De gjor minnearbeidet til en del av hverdagen (alltaglich).

**Kulturnotat:** Det finnes Stolpersteine i over 2 000 byer i Europa, inkludert noen i Norge. De er ment a individualisere ofrene - hvert menneske far sitt eget minnesmerke.`,
    },
    {
      id: 'tysk-3-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-ex-2',
        number: '11.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar begrepene pa norsk med historisk kontekst:',
        subTasks: [
          { label: 'a', task: 'die Vergangenheitsbewaltigung', solution: 'Bearbeidelse av fortiden - den tyske prosessen med a konfrontere og ta oppgjor med nazitiden og Holocaust' },
          { label: 'b', task: 'das Mahnmal', solution: 'Minnesmerke/maningsmonument - et monument som minner om og maner til ettertanke om historiske forbrytelser' },
          { label: 'c', task: 'die Stolpersteine', solution: 'Snublesteiner - messingplater i fortauet som minnes individuelle Holocaust-ofre' },
          { label: 'd', task: '"Nie wieder"', solution: '"Aldri igjen" - et grunnprinsipp i tysk etterkrigskultur om at Holocaust aldri skal gjenta seg' },
        ],
        solution: 'a) Bearbeidelse av fortiden - oppgjor med nazitiden, b) Minnesmerke/maningsmonument, c) Snublesteiner for Holocaust-ofre, d) "Aldri igjen" - grunnprinsipp i tysk politikk',
        hints: ['Vergangenheit = fortid, Bewaltigung = bearbeidelse/mestring', 'Mahnen = a mane, a advare'],
      },
    },
    {
      id: 'tysk-3-11-2-text-3',
      type: 'text',
      content: `## Die Nurnberger Prozesse

Etter krigen ble ledende nazister stilt for retten i Nurnberg (1945-1946). Nurnbergprosessene var de forste internasjonale krigsforbryterdomstolene i historien.

**Viktige aspekter:**
- 24 ledende nazister ble tiltalt
- 12 ble domt til doden, 3 frikjent
- Prinsippet om individuelt ansvar ble fastsatt: "Jeg fulgte bare ordre" var ikke et gyldig forsvar
- Prosessene la grunnlaget for internasjonal strafferett

| Tysk | Norsk |
|------|-------|
| die Nurnberger Prozesse | Nurnbergprosessene |
| der Angeklagte | den tiltalte |
| das Urteil | dommen |
| schuldig sprechen | a doemme skyldig |
| freisprechen | a frikjenne |
| die Todesstrafe | dodsstraff |
| der Kriegsverbrecher | krigsforbryter |
| das Volkerrecht | folkerett |`,
    },
    {
      id: 'tysk-3-11-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Moderne Erinnerungskultur',
      problem: `Les om den moderne minnekulturen:

"Am 27. Januar, dem Tag der Befreiung von Auschwitz, begeht Deutschland den Holocaust-Gedenktag. In Schulen, Parlamenten und Gedenkstatten finden Veranstaltungen statt. Der Bundesprasident halt eine Gedenkrede. Junge Deutsche besuchen ehemalige Konzentrationslager, um aus der Geschichte zu lernen. Die Erinnerung an den Holocaust ist Teil der deutschen Identitat geworden."

a) Hvilket datum er den tyske Holocaust-minnedagen?
b) Hva skjer pa denne dagen?
c) Hvorfor besoker unge tyskere konsentrasjonsleirer?`,
      solution: `a) Holocaust-minnedagen er 27. januar - dagen da Auschwitz ble frigjort (der Tag der Befreiung von Auschwitz) i 1945.

b) Pa denne dagen holdes arrangementer (Veranstaltungen) i skoler, parlamenter og pa minnesteder. Forbundspresidenten holder en minnetale (Gedenkrede).

c) Unge tyskere besoker tidligere konsentrasjonsleirer for a laere av historien (um aus der Geschichte zu lernen).

**Kulturnotat:** Minnet om Holocaust er blitt en del av tysk identitet (Teil der deutschen Identitat). Dette gjenspeiles i skolens laereplaner, der Holocaust er et obligatorisk tema.`,
    },
    {
      id: 'tysk-3-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-ex-3',
        number: '11.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst pa tysk (5-7 setninger) om hvorfor det er viktig a minnes Holocaust. Bruk folgende ord: erinnern (a minne), vergessen (a glemme), die Verantwortung (ansvar), die Zukunft (fremtiden).',
        subTasks: [
          { label: 'a', task: 'Hvorfor er det viktig a minnes?', solution: 'Es ist wichtig, an den Holocaust zu erinnern, damit sich solche Verbrechen nie wiederholen.' },
          { label: 'b', task: 'Hva er vart ansvar?', solution: 'Wir haben die Verantwortung, aus der Geschichte zu lernen.' },
          { label: 'c', task: 'Hva betyr det for fremtiden?', solution: 'Nur wenn wir die Vergangenheit nicht vergessen, konnen wir eine bessere Zukunft gestalten.' },
        ],
        solution: 'Eksempel: "Es ist wichtig, an den Holocaust zu erinnern. Wir durfen die Opfer nicht vergessen. Jeder Mensch tragt die Verantwortung, gegen Hass und Diskriminierung zu kampfen. Wenn wir die Geschichte vergessen, kann sie sich wiederholen. Die Erinnerung hilft uns, eine bessere Zukunft zu gestalten. Nie wieder darf so etwas geschehen."',
        hints: ['sich wiederholen = a gjenta seg', 'gestalten = a forme/utforme'],
      },
    },
    {
      id: 'tysk-3-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-ex-4',
        number: '11.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "Vergangenheitsbewaltigung"?',
        options: [
          { id: 'a', text: 'Prosessen med a bearbeide og ta oppgjor med fortiden, saerlig nazitiden', isCorrect: true },
          { id: 'b', text: 'Et minnesmerke over krigsofre', isCorrect: false },
          { id: 'c', text: 'En type rettssak mot krigsforbrytere', isCorrect: false },
          { id: 'd', text: 'En historiebok om andre verdenskrig', isCorrect: false },
        ],
        solution: 'Vergangenheitsbewaltigung (Vergangenheit = fortid + Bewaltigung = bearbeidelse/mestring) er den tyske prosessen med a konfrontere, bearbeide og ta oppgjor med nazitiden og Holocaust. Det er et sentralt begrep i tysk etterkrigskultur.',
        hints: ['Del opp det sammensatte ordet: Vergangenheit + Bewaltigung'],
      },
    },
    {
      id: 'tysk-3-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-2-ex-5',
        number: '11.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Vi mà aldri glemme.', solution: 'Wir durfen nie vergessen.' },
          { label: 'b', task: 'Minnesmerket star i Berlin.', solution: 'Das Mahnmal steht in Berlin.' },
          { label: 'c', task: 'Holocaust-ofrene skal huskes.', solution: 'Die Holocaust-Opfer sollen in Erinnerung bleiben. / An die Holocaust-Opfer soll erinnert werden.' },
        ],
        solution: 'a) Wir durfen nie vergessen. b) Das Mahnmal steht in Berlin. c) An die Holocaust-Opfer soll erinnert werden.',
        hints: ['durfen nie = ma aldri (med moralsk betydning)', 'in Erinnerung bleiben = a bli husket'],
      },
    },
    {
      id: 'tysk-3-11-2-note-1',
      type: 'note',
      title: 'Oppsummering: Holocaust und Erinnerungskultur',
      content: `**Viktige punkter a huske:**

- Holocaust/Shoah: systematisk folkemord pa 6 millioner joder og millioner av andre
- Nurnbergerlovene (1935), Krystallnatten (1938), konsentrasjonsleirer (1941-1945)
- Nurnbergprosessene (1945-46) satte presedens for internasjonal strafferett
- Vergangenheitsbewaltigung: Tysklands kontinuerlige prosess med a ta oppgjor med fortiden
- Stolpersteine, minnesmerker og minnedager holder minnet levende
- "Nie wieder" er et grunnprinsipp i tysk samfunn

**Nokkelord:** der Holocaust, die Shoah, das Konzentrationslager, die Erinnerungskultur, die Stolpersteine, das Mahnmal, die Vergangenheitsbewaltigung`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Holocaust / die Shoah', definition: 'folkemord pa 6 millioner joder under andre verdenskrig' },
    { term: 'das Konzentrationslager (KZ)', definition: 'konsentrasjonsleir - brukt til masseutryddelse' },
    { term: 'die Erinnerungskultur', definition: 'minnekultur - maten et samfunn minnes sin historie' },
    { term: 'die Stolpersteine', definition: 'snublesteiner - messingplater i fortauet for Holocaust-ofre' },
    { term: 'das Mahnmal', definition: 'minnesmerke/maningsmonument' },
    { term: 'die Vergangenheitsbewaltigung', definition: 'bearbeidelse av fortiden, oppgjor med nazitiden' },
    { term: 'die Reichspogromnacht', definition: 'krystallnatten, 9.-10. november 1938' },
    { term: 'die Nurnberger Prozesse', definition: 'Nurnbergprosessene - rettssaker mot nazistene 1945-46' },
  ],
};

// ============================================================================
// Kapittel 11.3: Die deutsche Teilung und die DDR
// ============================================================================

export const CHAPTER_TYSK_3_11_3: TextbookChapter = {
  id: 'tysk-3-11-3',
  courseId: 'tysk-3',
  chapterNumber: '11.3',
  title: 'Die deutsche Teilung und die DDR',
  subtitle: 'Delingen av Tyskland og DDR',
  description: 'Laer om etterkrigstidens deling av Tyskland, Berlinmurens bygging, hverdagen i DDR, Stasi-overvaking og motstand.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-11-3-intro',
      type: 'text',
      content: `## Die Teilung Deutschlands

Etter andre verdenskrig ble Tyskland delt mellom seiersmaktene. I 1949 ble det opprettet to tyske stater:

**Forbundsrepublikken Tyskland (BRD)** - Vest-Tyskland:
- Demokrati med markedsokonomi
- Tilknyttet NATO og det vestlige samarbeidet
- Hovedstad: Bonn
- "Wirtschaftswunder" (det okonomiske mirakelet) pa 1950-60-tallet

**Den tyske demokratiske republikken (DDR)** - Ost-Tyskland:
- Sosialistisk ettpartistat under SED (Sozialistische Einheitspartei Deutschlands)
- Tilknyttet Warszawapakten og Sovjetunionen
- Hovedstad: Ost-Berlin
- Planøkonomi og statlig kontroll

Berlin ble delt i fire soner, og i 1961 bygde DDR Berlinmuren for a stanse flukten av borgere til vest. Muren ble symbolet pa den kalde krigen.`,
    },
    {
      id: 'tysk-3-11-3-def-1',
      type: 'definition',
      title: 'Vokabular: Die Teilung',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| die Teilung | delingen |
| die Berliner Mauer | Berlinmuren |
| die DDR (Deutsche Demokratische Republik) | DDR (Den tyske demokratiske republikk) |
| die BRD (Bundesrepublik Deutschland) | Forbundsrepublikken Tyskland |
| die Stasi (Staatssicherheit) | Stasi (det hemmelige politiet) |
| der Eiserne Vorhang | jernteppet |
| die Flucht | flukten |
| der Fluchtling | flyktning |
| die Mangelwirtschaft | mangelokonomi |
| die Planwirtschaft | planokonomi |
| die Uberwachung | overvaking |
| der Todesstreifen | dodssonen (ved muren) |`,
    },
    {
      id: 'tysk-3-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Die Berliner Mauer',
      problem: `Les teksten og svar pa sporsmalene:

"Am 13. August 1961 begann die DDR mit dem Bau der Berliner Mauer. Uber Nacht wurden Familien getrennt, Strassen gesperrt und Stacheldraht gezogen. In den folgenden Jahren wurde die Mauer zu einem hochgesicherten Grenzsystem ausgebaut: mit Wachtturmen, Minen und einem Todesstreifen. Mindestens 140 Menschen starben beim Versuch, die Mauer zu uberwinden. Die Mauer stand 28 Jahre lang - bis zum 9. November 1989."

a) Nar begynte byggingen av Berlinmuren?
b) Hva skjedde med familier?
c) Hvor mange mennesker dode ved muren?`,
      solution: `a) Byggingen av Berlinmuren begynte 13. august 1961 (am 13. August 1961).

b) Familier ble skilt over natten (uber Nacht wurden Familien getrennt). Gater ble sperret og piggtrad ble trukket opp.

c) Minst 140 mennesker dode i forsok pa a forsere muren (mindestens 140 Menschen starben beim Versuch, die Mauer zu uberwinden).

**Spraktips:**
- "uber Nacht" = over natten, plutselig
- "der Stacheldraht" = piggtrad (Stachel = pigg, Draht = trad)
- "uberwinden" = a forsere, overvinne (uregelmessig verb)
- "der Todesstreifen" = dodssonen (strimmel mellom to murer)`,
    },
    {
      id: 'tysk-3-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-ex-1',
        number: '11.3.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Nar ble Berlinmuren bygget?',
        options: [
          { id: 'a', text: '13. august 1961', isCorrect: true },
          { id: 'b', text: '9. november 1989', isCorrect: false },
          { id: 'c', text: '3. oktober 1990', isCorrect: false },
          { id: 'd', text: '8. mai 1945', isCorrect: false },
        ],
        solution: 'Berlinmuren ble bygget natten til 13. august 1961 for a stanse flukten av DDR-borgere til Vest-Berlin. Den sto i 28 ar til den falt 9. november 1989.',
        hints: ['9. november 1989 var da muren falt, ikke da den ble bygget'],
      },
    },
    {
      id: 'tysk-3-11-3-text-2',
      type: 'text',
      content: `## Alltag in der DDR - Hverdagen i DDR

Hverdagen i DDR var preget av bade fellesskap og kontroll:

**Mangelwirtschaft (mangelokonomi):**
- Mangel pa forbruksvarer, lange koer
- Trabant-bilen: man ventet 10-15 ar for a fa den
- Intershop: butikker med vestlige varer for vestlig valuta
- Kaffekrise pa 1970-tallet - erstatningskaffe "Mischkaffee"

**Samfunn og fellesskap:**
- Gratis utdanning og helsevesen
- Hoyt yrkesdeltakelse blant kvinner
- FDJ (Freie Deutsche Jugend) - ungdomsorganisasjonen
- Fellesskap i boligblokker (Plattenbauten)

**Overvaking og kontroll:**
- Stasi (Ministerium fur Staatssicherheit) overvakte befolkningen
- Ca. 90 000 ansatte og 180 000 uoffisielle medarbeidere (IM - Inoffizielle Mitarbeiter)
- Brev ble apnet, telefoner avlyttet
- Venner og familie kunne vaere Stasi-informanter`,
    },
    {
      id: 'tysk-3-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Leben in der DDR',
      problem: `Les beskrivelsen av hverdagen i DDR:

"Mein Vater arbeitete im VEB (Volkseigener Betrieb) und meine Mutter in einer Poliklinik. Wir wohnten in einem Plattenbau in Ost-Berlin. Das Leben war einfach, aber sicher: Miete, Brot und Strom waren billig. Dafur gab es vieles nicht zu kaufen - Bananen waren Luxus, und auf einen Trabant wartete man zehn Jahre. Am schlimmsten war die Angst: Man wusste nie, wer fur die Stasi arbeitete. Selbst der beste Freund konnte ein Spitzel sein."

a) Hvor arbeidet foreldrene?
b) Hva var billig i DDR?
c) Hva var det verste?`,
      solution: `a) Faren arbeidet i en VEB (Volkseigener Betrieb - statlig eid bedrift) og moren i en poliklinikk (Poliklinik).

b) Husleie (Miete), brod (Brot) og strom (Strom) var billig. De grunnleggende behovene ble dekket av staten.

c) Det verste var frykten (die Angst): man visste aldri hvem som arbeidet for Stasi. Selv den beste vennen kunne vaere en spion (Spitzel = informant/angiver).

**Kulturnotat:**
- VEB = Volkseigener Betrieb (folkeid bedrift) - alle bedrifter var statlig eid i DDR
- Plattenbau = prefabrikkerte boligblokker, typiske for DDR-byer
- Trabant ("Trabi") = DDR-bilen med karosseri delvis laget av plast`,
    },
    {
      id: 'tysk-3-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-ex-2',
        number: '11.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar disse DDR-begrepene pa norsk:',
        subTasks: [
          { label: 'a', task: 'der VEB (Volkseigener Betrieb)', solution: 'Folkeid bedrift - alle bedrifter i DDR var statlig eid' },
          { label: 'b', task: 'der Plattenbau', solution: 'Prefabrikkert boligblokk - typisk DDR-arkitektur' },
          { label: 'c', task: 'der Trabant', solution: 'DDR-bilen "Trabi" - med ventetid pa 10-15 ar' },
          { label: 'd', task: 'der IM (Inoffizielle Mitarbeiter)', solution: 'Uoffisiell medarbeider - sivil person som spionerte for Stasi' },
        ],
        solution: 'a) Folkeid/statlig bedrift, b) Prefab boligblokk, c) DDR-bilen, d) Uoffisiell Stasi-informant',
        hints: ['Volk = folk, eigen = egen, Betrieb = bedrift', 'Platte = plate, Bau = bygg'],
      },
    },
    {
      id: 'tysk-3-11-3-text-3',
      type: 'text',
      content: `## Widerstand und Flucht - Motstand og flukt

Til tross for overvakingen fantes det motstand i DDR:

**Former for motstand:**
- Fredsbevegelsen og kirkene som motestedeer
- Montagsdemonstrasjoner (mandagsdemonstrasjonene) i Leipzig fra 1989
- Undergrunnskunst og samizdat-litteratur
- Opposisjonsgrupper som Neues Forum

**Fluktforsok:**
- Over 3,5 millioner forlot DDR for muren ble bygget
- Etter 1961: dramatiske fluktforsok gjennom tunneler, i luftballonger, i bilens bagasjerom
- "Republikflucht" (republikk-flukt) var en forbrytelse i DDR
- Mange ble skutt ved grensen (Schiessbefehl = skytingsordre)

| Tysk | Norsk |
|------|-------|
| der Widerstand | motstand |
| die Demonstration | demonstrasjon |
| der Protest | protest |
| die Freiheit | frihet |
| fliehen (floh, geflohen) | a flykte |
| verhaften | a arrestere |
| der Dissident | dissident, opposisjonell |
| das Neue Forum | Nytt Forum (opposisjonsgruppe) |`,
    },
    {
      id: 'tysk-3-11-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Die Montagsdemonstrationen',
      problem: `Les om mandagsdemonstrasjionene:

"Im Herbst 1989 versammelten sich jeden Montag Tausende von Menschen in der Nikolaikirche in Leipzig. Nach dem Friedensgebet gingen sie auf die Strasse und riefen: 'Wir sind das Volk!' Die Demonstrationen wuchsen von Woche zu Woche. Am 9. Oktober 1989 demonstrierten 70.000 Menschen in Leipzig - die Staatsmacht wagte nicht einzugreifen. Es war der Anfang vom Ende der DDR."

a) Hvor samlet demonstrantene seg?
b) Hva ropte de?
c) Hva skjedde 9. oktober 1989?`,
      solution: `a) Demonstrantene samlet seg i Nikolaikirken (Nikolaikirche) i Leipzig. De motte til fredsbonner (Friedensgebet) for de gikk ut pa gaten.

b) De ropte "Wir sind das Volk!" (Vi er folket!) - et slagord som krevde demokrati og folkestyre.

c) Den 9. oktober 1989 demonstrerte 70 000 mennesker i Leipzig, og statsmakten vaget ikke a gripe inn (wagte nicht einzugreifen). Dette ble begynnelsen pa slutten for DDR.

**Historisk kontekst:** Slagordet "Wir sind das Volk!" ble senere endret til "Wir sind ein Volk!" (Vi er ett folk!) - et krav om gjenforening med Vest-Tyskland.`,
    },
    {
      id: 'tysk-3-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-ex-3',
        number: '11.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign BRD og DDR. Skriv pa tysk:',
        subTasks: [
          { label: 'a', task: 'Hvilken type styre hadde BRD og DDR?', solution: 'Die BRD war eine Demokratie, die DDR war eine sozialistische Einparteidiktatur.' },
          { label: 'b', task: 'Hvordan var okonomien forskjellig?', solution: 'Die BRD hatte eine Marktwirtschaft, die DDR hatte eine Planwirtschaft.' },
          { label: 'c', task: 'Hva var Stasi?', solution: 'Die Stasi war der Geheimdienst der DDR, der die Bevolkerung uberwachte.' },
        ],
        solution: 'a) BRD: Demokratie, DDR: Einparteidiktatur. b) BRD: Marktwirtschaft, DDR: Planwirtschaft. c) Die Stasi war der Geheimdienst der DDR.',
        hints: ['Einparteidiktatur = ettpartidiktatur', 'Marktwirtschaft = markedsokonomi, Planwirtschaft = planokonomi'],
      },
    },
    {
      id: 'tysk-3-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-ex-4',
        number: '11.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva ropte demonstrantene i Leipzig hosten 1989?',
        options: [
          { id: 'a', text: '"Wir sind das Volk!" (Vi er folket!)', isCorrect: true },
          { id: 'b', text: '"Nie wieder!" (Aldri igjen!)', isCorrect: false },
          { id: 'c', text: '"Freiheit fur alle!" (Frihet for alle!)', isCorrect: false },
          { id: 'd', text: '"Deutschland uber alles!"', isCorrect: false },
        ],
        solution: '"Wir sind das Volk!" (Vi er folket!) var slagordet til mandagsdemonstrasjionene i Leipzig. Det uttrykte folkets krav om demokrati og medbestemmelse. Senere endret det seg til "Wir sind ein Volk!" (Vi er ett folk!) som krav om gjenforening.',
        hints: ['Volk = folk, sind = er'],
      },
    },
    {
      id: 'tysk-3-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-3-ex-5',
        number: '11.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Berlinmuren delte byen i to.', solution: 'Die Berliner Mauer teilte die Stadt in zwei.' },
          { label: 'b', task: 'Mange mennesker forsøkte a flykte.', solution: 'Viele Menschen versuchten zu fliehen.' },
          { label: 'c', task: 'Friheten var det viktigste.', solution: 'Die Freiheit war das Wichtigste.' },
        ],
        solution: 'a) Die Berliner Mauer teilte die Stadt in zwei. b) Viele Menschen versuchten zu fliehen. c) Die Freiheit war das Wichtigste.',
        hints: ['teilen = a dele', 'versuchen zu + infinitiv = forsøke a'],
      },
    },
    {
      id: 'tysk-3-11-3-note-1',
      type: 'note',
      title: 'Oppsummering: Die deutsche Teilung und die DDR',
      content: `**Viktige punkter a huske:**

- Tyskland ble delt i BRD (vest) og DDR (ost) i 1949
- Berlinmuren ble bygget 13. august 1961
- DDR var en ettpartistat med planokonomi og Stasi-overvaking
- Hverdagen var preget av mangel pa varer, men ogsa fellesskap og sikkerhet
- Motstand vokste, spesielt gjennom mandagsdemonstrasjionene i Leipzig 1989
- "Wir sind das Volk!" ble slagordet for fredelig revolusjon

**Nokkelord:** die Teilung, die Berliner Mauer, die DDR, die Stasi, der Eiserne Vorhang, die Flucht, die Mangelwirtschaft`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Teilung', definition: 'delingen - delingen av Tyskland i BRD og DDR' },
    { term: 'die Berliner Mauer', definition: 'Berlinmuren, bygget 1961, falt 1989' },
    { term: 'die DDR', definition: 'Den tyske demokratiske republikk, Ost-Tyskland' },
    { term: 'die Stasi', definition: 'det hemmelige politiet i DDR (Staatssicherheit)' },
    { term: 'der Eiserne Vorhang', definition: 'jernteppet - grensen mellom ost og vest i Europa' },
    { term: 'die Flucht', definition: 'flukten - mange forsøkte a flykte fra DDR' },
    { term: 'die Mangelwirtschaft', definition: 'mangelokonomi - kronisk mangel pa forbruksvarer' },
  ],
};

// ============================================================================
// Kapittel 11.4: Die Wiedervereinigung und das moderne Deutschland
// ============================================================================

export const CHAPTER_TYSK_3_11_4: TextbookChapter = {
  id: 'tysk-3-11-4',
  courseId: 'tysk-3',
  chapterNumber: '11.4',
  title: 'Die Wiedervereinigung und das moderne Deutschland',
  subtitle: 'Gjenforeningen og det moderne Tyskland',
  description: 'Laer om murens fall i 1989, Die Wende, gjenforeningen i 1990, Ostalgie og utfordringene med a bygge et forent Tyskland.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-11-4-intro',
      type: 'text',
      content: `## Der Mauerfall - Murens fall

Den 9. november 1989 falt Berlinmuren - et av det 20. arhundrets mest dramatiske oyeblikk. Etter uker med massedemonstrasjoner og en politisk krise i DDR-ledelsen, ble det annonsert at grensene var apne. Tusenvis av ost-berlinere strommet til grensene, og grensevaktene apnet sperringene.

**Hva skjedde?**
- DDR-regjeringen var under enormt press etter mandagsdemonstrasjionene
- Ungarn hadde allerede apnet grensen til Osterrike i september 1989
- En pressekonferanse 9. november: pressesekretaer Gunter Schabowski annonserte ved en feil at grensene var apne "umiddelbart" (unverzuglich)
- Folk strommet til muren, og grensevaktene apnet
- Berlinere fra ost og vest feiret sammen pa muren

Murens fall var begynnelsen pa "die Wende" - vendepunktet som ledet til gjenforeningen av Tyskland.`,
    },
    {
      id: 'tysk-3-11-4-def-1',
      type: 'definition',
      title: 'Vokabular: Wiedervereinigung',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| die Wiedervereinigung | gjenforeningen |
| die Wende | vendepunktet (1989-1990) |
| der Mauerfall | murens fall |
| die Ostalgie | ostalgi - nostalgi for DDR-tiden |
| der Solidaritatszuschlag ("Soli") | solidaritetstillegg (skatt for gjenoppbygging i ost) |
| die innere Einheit | den indre enhet |
| die neuen Bundeslander | de nye delstatene (i ost) |
| der Einigungsvertrag | gjenforeningsavtalen |
| die Abwicklung | avvikling (av DDR-institusjoner) |
| der Tag der Deutschen Einheit | Dagen for tysk enhet (3. oktober) |
| die Treuhandanstalt | privatiseringsorganet for DDR-bedrifter |
| bluhende Landschaften | "blomstrende landskap" (Kohls lofte) |`,
    },
    {
      id: 'tysk-3-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Die Nacht des Mauerfalls',
      problem: `Les oeyenvitneskildringen:

"Ich stand am Brandenburger Tor, als die Mauer fiel. Menschen weinten vor Freude, Wildfremde umarmten sich, und uberall knallten die Sektkorken. Auf der Mauer tanzten Ost- und West-Berliner zusammen. Es war der glucklichste Tag meines Lebens. Wir riefen: 'Wahnsinn! Wahnsinn!' - denn niemand konnte glauben, was geschah. 28 Jahre Teilung waren zu Ende."

a) Hvor befant vitnet seg?
b) Hvordan reagerte folk?
c) Hva ropte folk?`,
      solution: `a) Vitnet sto ved Brandenburger Tor (am Brandenburger Tor) da muren falt.

b) Folk grat av glede (weinten vor Freude), vilt fremmede klemte hverandre (Wildfremde umarmten sich), og champagnekorkene smell overalt. Ost- og vest-berlinere danset sammen pa muren.

c) Folk ropte "Wahnsinn! Wahnsinn!" (Galskap! Vanvittig!) - fordi ingen kunne tro det som skjedde.

**Spraktips:**
- "vor Freude weinen" = a grate av glede
- "Wildfremde" = helt fremmede mennesker
- "Wahnsinn!" = vanvittig!/galskap! (utrop av forundring)
- "knallen" = a smelle (om korker)`,
    },
    {
      id: 'tysk-3-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-ex-1',
        number: '11.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Nar falt Berlinmuren?',
        options: [
          { id: 'a', text: '9. november 1989', isCorrect: true },
          { id: 'b', text: '3. oktober 1990', isCorrect: false },
          { id: 'c', text: '13. august 1961', isCorrect: false },
          { id: 'd', text: '9. november 1938', isCorrect: false },
        ],
        solution: 'Berlinmuren falt 9. november 1989. Merk: 3. oktober 1990 er Tysklands nasjonaldag (Tag der Deutschen Einheit) som markerer den formelle gjenforeningen, 13. august 1961 var da muren ble bygget, og 9. november 1938 var Krystallnatten.',
        hints: ['Det er tre viktige datoer i november i tysk historie: 1918 (revolusjon), 1938 (Krystallnatten), 1989 (murens fall)'],
      },
    },
    {
      id: 'tysk-3-11-4-text-2',
      type: 'text',
      content: `## Die Wiedervereinigung - Gjenforeningen

Den 3. oktober 1990 ble Tyskland offisielt gjenforent. DDR ble oppløst, og de fem ostlige delstatene ble en del av Forbundsrepublikken.

**Gjenforeningens utfordringer:**

**Okonomisk:**
- DDR-okonomien kollapset
- Treuhandanstalt privatiserte over 8 000 DDR-bedrifter - mange ble lagt ned
- Massearbeidsloshet i ost (opp til 20%)
- Helmut Kohl lovte "bluhende Landschaften" (blomstrende landskap) i ost
- Solidaritatszuschlag (solidaritetstillegget) ble innfort - en ekstraskatt for gjenoppbygging

**Sosialt:**
- Kulturelle forskjeller mellom "Ossis" og "Wessis"
- Ost-tyskere folte seg som andreklasses borgere
- Mange unge flyttet vestover
- Identitetskrise - plutselig var alt fra DDR "feil"

**Politisk:**
- Avsloring av Stasi-arkivene
- Rettsoppgjor med DDR-regimet
- Debatt om graden av tilgivelse vs. rettferdighet`,
    },
    {
      id: 'tysk-3-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Herausforderungen der Wiedervereinigung',
      problem: `Les teksten og analyser:

"Die Wiedervereinigung war nicht nur eine politische, sondern auch eine menschliche Herausforderung. Viele Ostdeutsche verloren uber Nacht ihre Arbeit, ihre Identitat und ihren Lebensentwurf. Die Abwicklung der DDR-Wirtschaft durch die Treuhand fuhrte zur Schliessung Tausender Betriebe. Gleichzeitig mussten die Menschen in den neuen Bundeslandern eine vollig neue Gesellschaftsordnung erlernen. Der West-Ost-Transfer von Geld allein konnte die 'innere Einheit' nicht herstellen."

a) Hva mistet mange ost-tyskere?
b) Hva gjorde Treuhandanstalt?
c) Hva betyr "die innere Einheit"?`,
      solution: `a) Mange ost-tyskere mistet over natten arbeidet (Arbeit), identiteten (Identitat) og livsprosjektet sitt (Lebensentwurf).

b) Treuhandanstalt avviklet DDR-okonomien (die Abwicklung der DDR-Wirtschaft) og lukket tusenvis av bedrifter (Schliessung Tausender Betriebe) gjennom privatisering.

c) "Die innere Einheit" (den indre enhet) betyr det a virkelig vokse sammen som ett folk - ikke bare formelt og okonomisk, men ogsa sosialt og kulturelt. Poenget er at pengeoverforing (Geld-Transfer) fra vest til ost ikke var nok til a skape ekte enhet.

**Spraktips:**
- "der Lebensentwurf" = livsplan/livsprosjekt
- "die Abwicklung" = avvikling
- "uber Nacht" = over natten (ogsa brukt om murens bygging)
- "herstellen" = a skape, a fremstille`,
    },
    {
      id: 'tysk-3-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-ex-2',
        number: '11.4.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar begrepene og deres historiske betydning:',
        subTasks: [
          { label: 'a', task: 'die Wende', solution: 'Vendepunktet - perioden 1989-1990 da DDR-regimet falt og Tyskland ble gjenforent' },
          { label: 'b', task: 'die Treuhandanstalt', solution: 'Organet som privatiserte DDR-bedrifter - kontroversielt fordi mange bedrifter ble lagt ned' },
          { label: 'c', task: 'der Solidaritatszuschlag', solution: 'Solidaritetstillegget - ekstraskatt innfort for a finansiere gjenoppbyggingen i de ostlige delstatene' },
          { label: 'd', task: '"bluhende Landschaften"', solution: 'Kansler Kohls lofte om at de ostlige delstatene ville bli "blomstrende landskap" - et lofte som tok lang tid a innfri' },
        ],
        solution: 'a) Vendepunktet 1989-1990, b) Privatiseringsorgan for DDR-bedrifter, c) Ekstraskatt for gjenoppbygging ost, d) Kohls lofte om okonomisk blomstring i ost',
        hints: ['Wende = vending/vendepunkt', 'Solidaritat = solidaritet, Zuschlag = tillegg'],
      },
    },
    {
      id: 'tysk-3-11-4-text-3',
      type: 'text',
      content: `## Ostalgie und das moderne Deutschland

**Ostalgie** er et sammensatt ord av "Ost" (ost) og "Nostalgie" (nostalgi). Det beskriver en nostalgisk langsel etter deler av DDR-hverdagen:

**Hva folk savner:**
- Fellesskapet og tryggheten
- Produkter som Spreewald-agurker, Rotkappchen-sekt og Vita Cola
- Ampelmannchen (de ostlige fotgjengerlyssignalene)
- Sandmannchen (TV-figur for barn)

**Moderne tysk identitet:**
Tyskland i dag er et forent land, men det finnes fortsatt forskjeller mellom ost og vest:
- Lonnsforskjeller (ost tjener i gjennomsnitt mindre)
- Politiske forskjeller (storre oppslutning om populistiske partier i ost)
- Kulturelle forskjeller (ulike erfaringer og minner)
- Gradvis utjevning - spesielt blant yngre generasjoner

Tag der Deutschen Einheit (3. oktober) feires som nasjonaldag og markerer gjenforeningen.`,
    },
    {
      id: 'tysk-3-11-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ostalgie in der Popkultur',
      problem: `Les om Ostalgie i populaerkulturen:

"Der Film 'Good Bye, Lenin!' (2003) ist das bekannteste Beispiel fur Ostalgie im Kino. Die Geschichte handelt von einem jungen Mann, der seiner Mutter - einer uberzeugten DDR-Burgerin - nach ihrem Koma die Wiedervereinigung verheimlicht. Er baut ihre Welt in der DDR nach, um sie zu schutzen. Der Film zeigt auf humorvolle und zugleich beruhrende Weise, wie schwierig die Wende fur viele Ostdeutsche war."

a) Hva handler filmen "Good Bye, Lenin!" om?
b) Hvorfor holder sonnen gjenforeningen hemmelig?
c) Hva viser filmen om die Wende?`,
      solution: `a) Filmen handler om en ung mann som holder gjenforeningen (die Wiedervereinigung) hemmelig for sin mor - en overbevist DDR-borger - etter at hun vaker fra koma (nach ihrem Koma). Han gjenskaper DDR-verdenen rundt henne.

b) Han holder det hemmelig for a beskytte henne (um sie zu schutzen), fordi hun var en overbevist DDR-borger og sjokket kunne vaere farlig for hennes helse.

c) Filmen viser pa en humoristisk og berorende mate (auf humorvolle und beruhrende Weise) hvor vanskelig vendepunktet var for mange ost-tyskere. De mistet ikke bare et politisk system, men hele sin livsverden.

**Filmtips:** "Good Bye, Lenin!" er en utmerket film for a forstå Ostalgie og gjenforeningens menneskelige sider.`,
    },
    {
      id: 'tysk-3-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-ex-3',
        number: '11.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst pa tysk (5-7 setninger) om gjenforeningen av Tyskland. Bruk folgende begreper: der Mauerfall, die Wiedervereinigung, die Wende, die innere Einheit.',
        subTasks: [
          { label: 'a', task: 'Beskriv murens fall.', solution: 'Am 9. November 1989 fiel die Berliner Mauer. Die Menschen feierten die Freiheit.' },
          { label: 'b', task: 'Nevn noen utfordringer etter gjenforeningen.', solution: 'Die Wiedervereinigung brachte viele Herausforderungen: Arbeitslosigkeit, kulturelle Unterschiede und wirtschaftliche Probleme.' },
          { label: 'c', task: 'Hva betyr gjenforeningen i dag?', solution: 'Heute feiert Deutschland am 3. Oktober den Tag der Deutschen Einheit. Die innere Einheit ist noch immer ein Prozess.' },
        ],
        solution: 'Eksempel: "Am 9. November 1989 fiel die Berliner Mauer. Dies war der Beginn der Wende. Am 3. Oktober 1990 wurde Deutschland wiedervereinigt. Doch die Wiedervereinigung brachte viele Herausforderungen mit sich. Viele Ostdeutsche verloren ihre Arbeit. Die innere Einheit zwischen Ost und West ist noch heute ein wichtiges Thema. Trotz aller Schwierigkeiten ist die Wiedervereinigung eine grosse Errungenschaft."',
        hints: ['fallen (fiel, gefallen) = a falle', 'mit sich bringen = a bringe med seg, a medfore'],
      },
    },
    {
      id: 'tysk-3-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-ex-4',
        number: '11.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er "Ostalgie"?',
        options: [
          { id: 'a', text: 'Nostalgi for deler av hverdagen i det tidligere DDR', isCorrect: true },
          { id: 'b', text: 'Et politisk parti i det gjenforente Tyskland', isCorrect: false },
          { id: 'c', text: 'Et museum om Berlinmuren', isCorrect: false },
          { id: 'd', text: 'En type ost-tysk musikk fra 1980-tallet', isCorrect: false },
        ],
        solution: 'Ostalgie (Ost + Nostalgie) er nostalgi for deler av DDR-hverdagen, som produkter, TV-programmer og fellesskapet. Det handler ikke om a onske DDR-regimet tilbake, men om a savne deler av oppveksten og dagliglivet.',
        hints: ['Ordet er satt sammen av Ost (ost) og Nostalgie (nostalgi)'],
      },
    },
    {
      id: 'tysk-3-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-11-4-ex-5',
        number: '11.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble dato med hendelse:',
        subTasks: [
          { label: 'a', task: '9. November 1989', solution: 'Murens fall (der Mauerfall)' },
          { label: 'b', task: '3. Oktober 1990', solution: 'Gjenforeningen (die Wiedervereinigung) - na Tysklands nasjonaldag' },
          { label: 'c', task: '13. August 1961', solution: 'Berlinmuren bygges' },
          { label: 'd', task: '8. Mai 1945', solution: 'Krigen tar slutt i Europa (Tag der Befreiung)' },
        ],
        solution: 'a) Murens fall, b) Gjenforeningen, c) Muren bygges, d) Krigens slutt',
        hints: ['Tre av datoene handler om Berlinmuren: bygging, fall og formell gjenforening'],
      },
    },
    {
      id: 'tysk-3-11-4-note-1',
      type: 'note',
      title: 'Oppsummering: Die Wiedervereinigung und das moderne Deutschland',
      content: `**Viktige punkter a huske:**

- 9. november 1989: Berlinmuren falt etter uker med demonstrasjoner
- 3. oktober 1990: Tyskland ble offisielt gjenforent
- Gjenforeningen brakte store utfordringer: okonomiske, sosiale og kulturelle
- Treuhandanstalt privatiserte DDR-bedrifter - mange ble lagt ned
- Solidaritatszuschlag: ekstraskatt for gjenoppbygging i ost
- Ostalgie: nostalgi for deler av DDR-hverdagen
- "Die innere Einheit" er fremdeles et tema i dag

**Nokkelord:** die Wiedervereinigung, die Wende, der Mauerfall, die Ostalgie, der Solidaritatszuschlag, die innere Einheit`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Wiedervereinigung', definition: 'gjenforeningen av Tyskland 3. oktober 1990' },
    { term: 'die Wende', definition: 'vendepunktet - perioden 1989-1990 med DDRs fall' },
    { term: 'der Mauerfall', definition: 'murens fall 9. november 1989' },
    { term: 'die Ostalgie', definition: 'nostalgi for DDR-hverdagen (Ost + Nostalgie)' },
    { term: 'der Solidaritatszuschlag', definition: 'solidaritetstillegg - ekstraskatt for gjenoppbygging i ost' },
    { term: 'die innere Einheit', definition: 'den indre enhet - a virkelig vokse sammen som ett folk' },
  ],
};

// ============================================================================
// KAPITTEL 12: Umwelt und Nachhaltigkeit
// ============================================================================

// ============================================================================
// Kapittel 12.1: Die Energiewende
// ============================================================================

export const CHAPTER_TYSK_3_12_1: TextbookChapter = {
  id: 'tysk-3-12-1',
  courseId: 'tysk-3',
  chapterNumber: '12.1',
  title: 'Die Energiewende',
  subtitle: 'Energiomstillingen',
  description: 'Tysklands energiomstilling fra kjernekraft til fornybar energi, med fokus pa solenergi, vindkraft og Kohleausstieg.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-12-1-intro',
      type: 'text',
      content: `## Die Energiewende - Energiomstillingen

Tyskland er i gang med en av de mest ambisiose energiomstillingene i verden: **die Energiewende**. Begrepet beskriver overgangen fra fossil og kjernefysisk energi til fornybare energikilder som sol, vind og biomasse.

Etter Fukushima-ulykken i 2011 vedtok Tyskland a fase ut all kjernekraft innen 2023. Det siste atomkraftverket ble stengt i april 2023. Samtidig skal landet bli klimanoytral innen 2045.

**Hovedmalene for Energiewende:**
- Utfasing av kjernekraft (fullfort 2023)
- Utfasing av kullkraft innen 2038 (Kohleausstieg)
- 80 % fornybar energi i stromforsyningen innen 2030
- Klimanoytralitet innen 2045

Energiomstillingen er et av de mest diskuterte temaene i tysk politikk og pavirker hele samfunnet - fra industri til privatpersoner.`,
    },
    {
      id: 'tysk-3-12-1-def-1',
      type: 'definition',
      title: 'Vokabular: Energiewende',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| die Energiewende | energiomstillingen |
| die erneuerbare Energie | fornybar energi |
| die Windkraft | vindkraft |
| die Solarenergie | solenergi |
| der Kohleausstieg | utfasing av kull |
| das Atomkraftwerk (AKW) | atomkraftverk |
| der Ausstieg | utfasing / uttreden |
| das Kohlekraftwerk | kullkraftverk |
| die Photovoltaikanlage | solcelleanlegg |
| der Windpark | vindpark |
| die Energieversorgung | energiforsyning |
| der Strom | strom / elektrisitet |`,
    },
    {
      id: 'tysk-3-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Energieformen verstehen',
      problem: `Les teksten og svar pa sporsmalene:

*"Deutschland hat in den letzten zwei Jahrzehnten massiv in erneuerbare Energien investiert. Die Windkraft ist inzwischen die wichtigste Stromquelle des Landes. Vor allem in Norddeutschland und auf der Nord- und Ostsee stehen Tausende von Windkraftanlagen. Auch die Solarenergie hat stark zugenommen - auf vielen Dachern findet man Photovoltaikanlagen."*

a) Hvilken energikilde er viktigst i Tyskland na?
b) Hvor star det flest vindkraftanlegg?
c) Hva er en Photovoltaikanlage?`,
      solution: `a) **Vindkraft** (die Windkraft) er na den viktigste stromkilden i Tyskland.

b) Vindkraftanleggene star hovedsakelig i **Nord-Tyskland** (Norddeutschland) og pa **Nord- og Ostersjoen** (Nord- und Ostsee).

c) En **Photovoltaikanlage** er et solcelleanlegg - paneler som omdanner sollys til elektrisk energi. De finnes pa mange hustak (Dacher) i Tyskland.

**Nyttige ord fra teksten:**
- massiv investiert = investert massivt
- inzwischen = i mellomtiden / na
- die Stromquelle = stromkilde
- vor allem = framfor alt
- zugenommen = okt (fra zunehmen)`,
    },
    {
      id: 'tysk-3-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-ex-1',
        number: '12.1.1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr "die Energiewende" pa norsk?',
        choices: ['Energikrisen', 'Energiomstillingen', 'Energiforsyningen', 'Energiproduksjonen'],
        correctAnswer: 'Energiomstillingen',
        solution: '"Die Energiewende" betyr energiomstillingen. "Wende" betyr vending eller omstilling, og begrepet beskriver Tysklands overgang til fornybar energi.',
      },
    },
    {
      id: 'tysk-3-12-1-def-2',
      type: 'definition',
      title: 'Vokabular: Energiepolitik',
      content: `**Energipolitiske begreper:**

| Tysk | Norsk |
|------|-------|
| der Atomausstieg | utfasing av atomkraft |
| die Laufzeitverlängerung | forlengelse av driftstid |
| das Erneuerbare-Energien-Gesetz (EEG) | loven om fornybar energi |
| die Einspeisevergütung | innatingsavgodgjoring |
| der Netzausbau | utbygging av strommnettet |
| die Energiespeicherung | energilagring |
| die Versorgungssicherheit | forsyningssikkerhet |
| der Strompreis | strompris |`,
    },
    {
      id: 'tysk-3-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Atomausstieg - For og imot',
      problem: `Her er argumenter for og mot utfasing av kjernekraft i Tyskland. Koble argumentene til riktig side:

**Argumenter:**
1. "Atomkraft ist zu gefährlich - Fukushima hat das gezeigt."
2. "Kernenergie produziert keinen CO₂-Ausstoß."
3. "Das Problem der Endlagerung ist ungelöst."
4. "Erneuerbare Energien können den Bedarf allein nicht decken."
5. "Die Risiken eines Unfalls sind nicht kalkulierbar."

Sorter i: **Fur den Ausstieg** / **Gegen den Ausstieg**`,
      solution: `**Fur den Ausstieg (for utfasing):**
1. "Atomkraft ist zu gefährlich" - Kjernekraft er for farlig (sikkerhetsargument)
3. "Das Problem der Endlagerung ist ungelöst" - Problemet med sluttlagring er ulost (avfallsargument)
5. "Die Risiken eines Unfalls sind nicht kalkulierbar" - Risikoen ved en ulykke kan ikke beregnes

**Gegen den Ausstieg (mot utfasing):**
2. "Kernenergie produziert keinen CO₂-Ausstoß" - Kjernekraft produserer ikke CO₂
4. "Erneuerbare Energien können den Bedarf allein nicht decken" - Fornybar energi kan ikke dekke behovet alene

**Nyttige ord:**
- die Endlagerung = sluttlagring (av atomavfall)
- der Bedarf = behov
- decken = dekke
- ungelöst = ulost
- kalkulierbar = kalkulerbar / beregningsbar`,
    },
    {
      id: 'tysk-3-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-ex-2',
        number: '12.1.2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Fornybar energi er viktig for framtiden.', solution: 'Erneuerbare Energie ist wichtig fur die Zukunft.' },
          { label: 'b', task: 'Det siste atomkraftverket ble stengt i 2023.', solution: 'Das letzte Atomkraftwerk wurde 2023 abgeschaltet.' },
          { label: 'c', task: 'Vindkraft er den viktigste energikilden.', solution: 'Windkraft ist die wichtigste Energiequelle.' },
          { label: 'd', task: 'Tyskland vil bli klimanoytral innen 2045.', solution: 'Deutschland will bis 2045 klimaneutral werden.' },
        ],
        solution: 'a) Erneuerbare Energie ist wichtig fur die Zukunft. b) Das letzte Atomkraftwerk wurde 2023 abgeschaltet. c) Windkraft ist die wichtigste Energiequelle. d) Deutschland will bis 2045 klimaneutral werden.',
        hints: ['abschalten = a stenge/sla av', 'bis = innen (tidsfrist)'],
      },
    },
    {
      id: 'tysk-3-12-1-def-3',
      type: 'definition',
      title: 'Vokabular: Erneuerbare Energien',
      content: `**Fornybare energikilder:**

| Tysk | Norsk |
|------|-------|
| die Windenergie / die Windkraft | vindenergi / vindkraft |
| die Solarenergie / die Sonnenenergie | solenergi |
| die Wasserkraft | vannkraft |
| die Biomasse | biomasse |
| die Geothermie | geotermisk energi |
| das Wasserstoff | hydrogen |
| die Offshore-Windanlage | havvindanlegg |
| die Onshore-Windanlage | vindanlegg pa land |

**Fossile energikilder:**

| Tysk | Norsk |
|------|-------|
| die Kohle | kull |
| das Erdgas | naturgass |
| das Erdöl | raolje |
| die Braunkohle | brunkull |
| die Steinkohle | steinkull |`,
    },
    {
      id: 'tysk-3-12-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Herausforderungen der Energiewende',
      problem: `Les om utfordringene med energiomstillingen:

*"Die Energiewende bringt auch Herausforderungen mit sich. Der Ausbau der Stromnetze hinkt dem Ausbau der erneuerbaren Energien hinterher. Im Norden wird viel Windstrom produziert, aber die Leitungen in den Suden fehlen. Auch die Speicherung von Strom ist noch nicht ausreichend gelöst. An windstillen, bewölkten Tagen kann es zu Engpässen kommen."*

a) Was ist das Problem mit dem Stromnetz?
b) Warum ist Speicherung wichtig?`,
      solution: `a) **Problemet med stromnettet:** Utbyggingen av strommnettet henger etter utbyggingen av fornybar energi. Det produseres mye vindkraft i nord, men strommledningene til sor mangler (die Leitungen in den Suden fehlen).

b) **Lagring er viktig** fordi det kan oppsta mangler (Engpasse) pa vindstille, overskya dager. Da produseres lite sol- og vindenergi, og man trenger lagret strom.

**Nyttige ord:**
- hinterherhinken = a henge etter
- die Leitung = ledning
- ausreichend = tilstrekkelig
- bewölkt = overskya
- der Engpass = flaskehals / mangelsituasjon`,
    },
    {
      id: 'tysk-3-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-ex-3',
        number: '12.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5-7 setninger) pa tysk om Energiewende. Bruk minst 5 av disse ordene: die Energiewende, erneuerbar, die Windkraft, der Kohleausstieg, das Atomkraftwerk, klimaneutral, die Solarenergie.',
        solution: 'Eksempel: "Die Energiewende ist eines der wichtigsten Projekte Deutschlands. Das Land will bis 2045 klimaneutral werden. Dafur setzt Deutschland auf erneuerbare Energien wie Windkraft und Solarenergie. Das letzte Atomkraftwerk wurde 2023 abgeschaltet. Auch der Kohleausstieg soll bis 2038 vollzogen werden. Die Herausforderungen sind gross, aber die Fortschritte sind bemerkenswert."',
        hints: ['Bruk setningsinnledere som "Dafur...", "Ausserdem...", "Allerdings..."', 'Husk artikler: die Energiewende, die Windkraft, der Kohleausstieg'],
      },
    },
    {
      id: 'tysk-3-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-ex-4',
        number: '12.1.4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Nar ble det siste tyske atomkraftverket stengt?',
        choices: ['2020', '2022', '2023', '2025'],
        correctAnswer: '2023',
        solution: 'Det siste tyske atomkraftverket ble stengt i april 2023. Beslutningen om Atomausstieg ble tatt etter Fukushima-ulykken i 2011.',
      },
    },
    {
      id: 'tysk-3-12-1-note-1',
      type: 'note',
      title: 'Oppsummering: Die Energiewende',
      content: `**Hovedpunkter i dette kapittelet:**

1. **Die Energiewende** er Tysklands overgang fra fossil og kjernefysisk energi til fornybare kilder
2. **Atomausstieg** - det siste atomkraftverket ble stengt i 2023
3. **Kohleausstieg** - planlagt utfasing av kull innen 2038
4. **Fornybar energi** - vindkraft er na den viktigste stromkilden, fulgt av solenergi
5. **Utfordringer** - nettutbygging, energilagring og forsyningssikkerhet

**Viktige tyske ord a huske:**
die Energiewende, die erneuerbare Energie, die Windkraft, die Solarenergie, der Kohleausstieg, das Atomkraftwerk, der Ausstieg, klimaneutral`,
    },
    {
      id: 'tysk-3-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-1-ex-5',
        number: '12.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Energiewende og Norge',
        subTasks: [
          { label: 'a', task: 'Sammenlign Tysklands og Norges energimiks. Hvilke forskjeller finnes? Skriv pa tysk (3-4 setninger).', solution: 'Norwegen hat viel Wasserkraft und produziert fast seinen gesamten Strom aus erneuerbaren Quellen. Deutschland hingegen ist noch stark von Kohle und Gas abhangig. Deutschland baut Windkraft und Solarenergie aus, wahrend Norwegen hauptsachlich auf Wasserkraft setzt.' },
          { label: 'b', task: 'Hva kan Tyskland laere av Norge, og omvendt? Diskuter pa tysk (3-4 setninger).', solution: 'Deutschland kann von Norwegens Erfahrung mit Wasserkraft lernen. Norwegen kann von Deutschlands Erfahrung mit Solarenergie und Windkraft profitieren. Beide Lander konnen beim Thema Energiespeicherung zusammenarbeiten.' },
        ],
        solution: 'Eksempel pa sammenligning: Norge har mye vannkraft, Tyskland satser pa vind og sol. Begge land kan laere av hverandre.',
        hints: ['hingegen = derimot', 'abhangig von = avhengig av', 'hauptsachlich = hovedsakelig'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Energiewende', definition: 'Energiomstillingen - Tysklands overgang til fornybar energi' },
    { term: 'die erneuerbare Energie', definition: 'Fornybar energi (sol, vind, vann, biomasse)' },
    { term: 'die Windkraft', definition: 'Vindkraft' },
    { term: 'die Solarenergie', definition: 'Solenergi' },
    { term: 'der Kohleausstieg', definition: 'Utfasing av kullkraft' },
    { term: 'das Atomkraftwerk', definition: 'Atomkraftverk (forkortet AKW)' },
    { term: 'der Ausstieg', definition: 'Utfasing / uttreden' },
    { term: 'die Versorgungssicherheit', definition: 'Forsyningssikkerhet' },
  ],
};

// ============================================================================
// Kapittel 12.2: Klimawandel und Umweltpolitik
// ============================================================================

export const CHAPTER_TYSK_3_12_2: TextbookChapter = {
  id: 'tysk-3-12-2',
  courseId: 'tysk-3',
  chapterNumber: '12.2',
  title: 'Klimawandel und Umweltpolitik',
  subtitle: 'Klimaendringer og miljopolitikk',
  description: 'Klimaendringer, Fridays for Future, tysk miljopolitikk, CO₂-avgifter og Parisavtalen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke varierte strategier for spraklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-12-2-intro',
      type: 'text',
      content: `## Klimawandel und Umweltpolitik

Klimaendringer (der Klimawandel) er et av de mest presserende temaene i tysk politikk og samfunnsdebatt. Tyskland har satt seg ambisiose klimamal og spiller en sentral rolle i europeisk og internasjonal klimapolitikk.

**Viktige milæpæler:**
- 1994: Miljoartikel innfort i Grunnloven (Grundgesetz, Art. 20a)
- 2015: Parisavtalen (das Pariser Abkommen) undertegnet
- 2019: Klimapakke (Klimapaket) vedtatt
- 2021: Ny klimavernlov med skjerpede mal
- 2023: Siste atomkraftverk stengt

Samtidig har den tyske klimabevegelsen, anfort av **Fridays for Future**, presset politikerne til handling. Bevegelsen startet etter Greta Thunbergs skolestreik i Sverige og fikk stor oppslutning i Tyskland, med Luisa Neubauer som den mest kjente tyske aktivisten.`,
    },
    {
      id: 'tysk-3-12-2-def-1',
      type: 'definition',
      title: 'Vokabular: Klimawandel',
      content: `**Sentrale klimabegreper:**

| Tysk | Norsk |
|------|-------|
| der Klimawandel | klimaendringer |
| die Umweltpolitik | miljopolitikk |
| der Treibhauseffekt | drivhuseffekten |
| die CO₂-Steuer | CO₂-avgift |
| das Klimaziel | klimamal |
| die Erderwärmung | global oppvarming |
| das Pariser Abkommen | Parisavtalen |
| der Klimaschutz | klimavern |
| die Treibhausgase | drivhusgasser |
| die Emissionen | utslipp |
| die Klimaneutralität | klimanoytralitet |
| der ökologische Fußabdruck | okologisk fotavtrykk |`,
    },
    {
      id: 'tysk-3-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fridays for Future in Deutschland',
      problem: `Les teksten og svar pa sporsmalene:

*"Seit 2019 gehen in Deutschland jeden Freitag Tausende von Schülern und Studenten auf die Straße, um fur mehr Klimaschutz zu demonstrieren. Die Bewegung 'Fridays for Future' wurde von der schwedischen Aktivistin Greta Thunberg inspiriert. In Deutschland ist Luisa Neubauer das bekannteste Gesicht der Bewegung. Die Demonstranten fordern unter anderem den schnelleren Ausstieg aus der Kohle, eine höhere CO₂-Steuer und mehr Investitionen in erneuerbare Energien."*

a) Hva krever demonstrantene?
b) Hvem er det mest kjente ansiktet i Tyskland?
c) Hva betyr "auf die Straße gehen"?`,
      solution: `a) Demonstrantene krever:
- Raskere utfasing av kull (den schnelleren Ausstieg aus der Kohle)
- Hoyere CO₂-avgift (eine höhere CO₂-Steuer)
- Mer investering i fornybar energi (mehr Investitionen in erneuerbare Energien)

b) **Luisa Neubauer** er det mest kjente ansiktet (das bekannteste Gesicht) i den tyske Fridays for Future-bevegelsen.

c) **"Auf die Straße gehen"** betyr bokstavelig "a ga ut i gata", men brukes i overfort betydning om a demonstrere / protestere.

**Nyttige ord:**
- die Bewegung = bevegelse
- fordern = kreve
- unter anderem = blant annet
- der Demonstrant = demonstrant
- inspirieren = inspirere`,
    },
    {
      id: 'tysk-3-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-ex-1',
        number: '12.2.1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er "der Treibhauseffekt" pa norsk?',
        choices: ['Drivkraften', 'Drivhuseffekten', 'Treibstoffeffekten', 'Klimaeffekten'],
        correctAnswer: 'Drivhuseffekten',
        solution: '"Der Treibhauseffekt" betyr drivhuseffekten. "Treibhaus" betyr drivhus, og effekten beskriver hvordan visse gasser i atmosfaeren holder pa varmen, slik et drivhus gjor.',
      },
    },
    {
      id: 'tysk-3-12-2-def-2',
      type: 'definition',
      title: 'Vokabular: Umweltpolitik',
      content: `**Miljopolitiske begreper:**

| Tysk | Norsk |
|------|-------|
| das Klimaschutzgesetz | klimavernloven |
| das Klimapaket | klimapakken |
| die Grünen (Partei) | De gronne (parti) |
| das Umweltbundesamt | miljovernmyndigheten |
| das Bundesministerium fur Umwelt | det tyske miljoverndepartementet |
| die Klimakonferenz | klimakonferanse |
| der Emissionshandel | utslippshandel |
| das Klimaziel verfehlen | a bomme pa klimamalet |
| die Klimaanpassung | klimatilpasning |
| die Dekarbonisierung | dekarbonisering |`,
    },
    {
      id: 'tysk-3-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: CO₂-Steuer und Klimapolitik',
      problem: `Les om CO₂-avgiften i Tyskland:

*"Seit 2021 gibt es in Deutschland eine CO₂-Steuer auf fossile Brennstoffe. Der Preis pro Tonne CO₂ steigt schrittweise an: von 25 Euro im Jahr 2021 auf 45 Euro im Jahr 2024. Ziel ist es, fossile Brennstoffe teurer zu machen und so den Umstieg auf klimafreundliche Alternativen zu fördern. Kritiker bemängeln, dass die Steuer sozial Schwächere besonders belastet."*

a) Hva er formalet med CO₂-avgiften?
b) Hvordan har prisen utviklet seg?
c) Hva er kritikken?`,
      solution: `a) **Formalet:** A gjore fossile brennstoffer dyrere (fossile Brennstoffe teurer zu machen) og dermed fremme overgangen til klimavennlige alternativer.

b) **Prisutviklingen:** CO₂-prisen har steget trinnvis fra 25 euro per tonn i 2021 til 45 euro per tonn i 2024 (steigt schrittweise an).

c) **Kritikken:** Avgiften belaster sosialt svakere grupper spesielt (sozial Schwächere besonders belastet). Det vil si at folk med lav inntekt merker prisokningene mer.

**Nyttige ord:**
- schrittweise = trinnvis / gradvis
- der Umstieg = overgang / bytte
- fördern = fremme
- bemängeln = kritisere / papeke mangler ved
- belasten = belaste`,
    },
    {
      id: 'tysk-3-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-ex-2',
        number: '12.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk og bruk riktige fagtermer:',
        subTasks: [
          { label: 'a', task: 'Klimaendringer er den storste utfordringen i var tid.', solution: 'Der Klimawandel ist die grosste Herausforderung unserer Zeit.' },
          { label: 'b', task: 'Parisavtalen ble undertegnet i 2015.', solution: 'Das Pariser Abkommen wurde 2015 unterzeichnet.' },
          { label: 'c', task: 'CO₂-avgiften skal redusere utslippene.', solution: 'Die CO₂-Steuer soll die Emissionen reduzieren.' },
          { label: 'd', task: 'De gronne vil ha strengere klimamal.', solution: 'Die Grunen wollen strengere Klimaziele.' },
        ],
        solution: 'a) Der Klimawandel ist die grosste Herausforderung unserer Zeit. b) Das Pariser Abkommen wurde 2015 unterzeichnet. c) Die CO₂-Steuer soll die Emissionen reduzieren. d) Die Grunen wollen strengere Klimaziele.',
        hints: ['unterzeichnen = a undertegne', 'Herausforderung = utfordring'],
      },
    },
    {
      id: 'tysk-3-12-2-def-3',
      type: 'definition',
      title: 'Vokabular: Konsequenzen des Klimawandels',
      content: `**Konsekvenser av klimaendringer:**

| Tysk | Norsk |
|------|-------|
| die Uberschwemmung | oversvommelse |
| die Dürre | torke |
| der Anstieg des Meeresspiegels | stigning av havnivaet |
| die Hitzewelle | hetebølge |
| der Starkregen | styrtregn |
| das Extremwetter | ekstremaer |
| das Artensterben | artsutryddelse |
| der Gletscherrückgang | tilbaketrekning av isbreer |
| die Wüstenbildung | orkenspredning |
| der Waldbrand | skogbrann |`,
    },
    {
      id: 'tysk-3-12-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Das Pariser Abkommen',
      problem: `Parisavtalen er sentral i internasjonal klimapolitikk. Les sammendraget:

*"Das Pariser Abkommen von 2015 ist ein internationaler Vertrag, der von 195 Staaten unterzeichnet wurde. Das Hauptziel ist die Begrenzung der globalen Erderwärmung auf deutlich unter 2 Grad Celsius gegenuber dem vorindustriellen Niveau. Deutschland hat sich verpflichtet, seine Treibhausgasemissionen bis 2030 um mindestens 65 Prozent gegenuber 1990 zu senken."*

Forklar folgende begreper fra teksten:
a) "Begrenzung der Erderwärmung auf unter 2 Grad"
b) "vorindustrielles Niveau"
c) "sich verpflichten"`,
      solution: `a) **"Begrenzung der Erderwärmung auf unter 2 Grad"** = Begrensning av den globale oppvarmingen til under 2 grader. "Begrenzung" kommer fra "begrenzen" (a begrense), og "Erderwärmung" er sammensatt av "Erde" (jord) + "Erwärmung" (oppvarming).

b) **"Vorindustrielles Niveau"** = Forindustrielt niva, dvs. temperaturen for den industrielle revolusjon (ca. 1850). "Vor-" er et prefiks som betyr "for".

c) **"Sich verpflichten"** = A forplikte seg. Et refleksivt verb: "Deutschland hat sich verpflichtet" = Tyskland har forpliktet seg.

**Nokkelord:**
- der Vertrag = avtale/traktat
- unterzeichnen = undertegne
- mindestens = minst
- senken = senke / redusere
- gegenuber = sammenlignet med / overfor`,
    },
    {
      id: 'tysk-3-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-ex-3',
        number: '12.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et leserbrev (Leserbrief) pa tysk (8-10 setninger) der du argumenterer for strengere klimamal. Bruk minst 5 fagtermer fra kapittelet.',
        solution: 'Eksempel: "Sehr geehrte Redaktion, ich schreibe Ihnen, weil ich mir Sorgen um den Klimawandel mache. Die Erderwärmung schreitet voran und die Folgen sind bereits sichtbar: Hitzewellen, Uberschwemmungen und Durren nehmen zu. Meiner Meinung nach sind die aktuellen Klimaziele nicht ambitioniert genug. Die CO₂-Steuer muss erhoht werden, um den Umstieg auf erneuerbare Energien zu beschleunigen. Deutschland hat sich im Pariser Abkommen verpflichtet, die Emissionen deutlich zu senken. Wir mussen jetzt handeln. Mit freundlichen Grussen..."',
        hints: ['Leserbrief starter med "Sehr geehrte Redaktion"', 'Bruk meningsuttrykk: "Meiner Meinung nach...", "Ich bin der Uberzeugung, dass..."'],
      },
    },
    {
      id: 'tysk-3-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-ex-4',
        number: '12.2.4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er Tysklands mal for reduksjon av drivhusgasser innen 2030 (sammenlignet med 1990)?',
        choices: ['Minst 40 prosent', 'Minst 55 prosent', 'Minst 65 prosent', 'Minst 80 prosent'],
        correctAnswer: 'Minst 65 prosent',
        solution: 'Tyskland har forpliktet seg til a redusere drivhusgassutslippene med minst 65 prosent innen 2030 sammenlignet med 1990-niva. Dette er en del av Klimaschutzgesetz (klimavernloven).',
      },
    },
    {
      id: 'tysk-3-12-2-note-1',
      type: 'note',
      title: 'Oppsummering: Klimawandel und Umweltpolitik',
      content: `**Hovedpunkter i dette kapittelet:**

1. **Der Klimawandel** er et sentralt tema i tysk politikk og samfunn
2. **Fridays for Future** med Luisa Neubauer har pavirket tysk klimapolitikk
3. **Die CO₂-Steuer** gjor fossile brennstoffer dyrere for a fremme gronne alternativer
4. **Das Pariser Abkommen** forplikter Tyskland til a senke utslippene med 65 % innen 2030
5. **Die Grunen** er et viktig miljopolitisk parti i Tyskland
6. Konsekvensene av klimaendringer er allerede synlige: hetebølger, oversvommelser og torke

**Viktige tyske ord a huske:**
der Klimawandel, die Erderwärmung, der Treibhauseffekt, die CO₂-Steuer, das Pariser Abkommen, das Klimaziel, die Emissionen`,
    },
    {
      id: 'tysk-3-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-2-ex-5',
        number: '12.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Debatt om klimapolitikk',
        subTasks: [
          { label: 'a', task: 'Forbered argumenter FOR strengere klimamal pa tysk (3-4 argumenter).', solution: 'Die Erderwärmung bedroht unsere Zukunft. / Die Folgen des Klimawandels sind schon jetzt sichtbar. / Wir haben eine Verantwortung gegenuber zukunftigen Generationen. / Erneuerbare Energien schaffen neue Arbeitsplatze.' },
          { label: 'b', task: 'Forbered argumenter MOT strengere klimamal pa tysk (3-4 argumenter).', solution: 'Strengere Klimaziele kosten Arbeitsplatze in der Industrie. / Die CO₂-Steuer belastet sozial Schwachere. / Deutschland allein kann den Klimawandel nicht aufhalten. / Die Wirtschaft braucht Zeit fur den Umstieg.' },
          { label: 'c', task: 'Skriv en konklusjon pa tysk der du tar stilling (3-4 setninger).', solution: 'Trotz der wirtschaftlichen Herausforderungen bin ich der Uberzeugung, dass strengere Klimaziele notwendig sind. Die Kosten des Nichthandelns sind langfristig viel hoher. Deutschland sollte als Industrienation eine Vorreiterrolle einnehmen.' },
        ],
        solution: 'Eksempel pa debattoppgave med argumenter for og mot, samt personlig konklusjon pa tysk.',
        hints: ['Bruk debattuttrykk: einerseits... andererseits', 'Konklusjonen bor starte med "Trotz..." eller "Zusammenfassend..."'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Klimawandel', definition: 'Klimaendringer' },
    { term: 'die Umweltpolitik', definition: 'Miljopolitikk' },
    { term: 'der Treibhauseffekt', definition: 'Drivhuseffekten' },
    { term: 'die CO₂-Steuer', definition: 'CO₂-avgift' },
    { term: 'das Klimaziel', definition: 'Klimamal' },
    { term: 'die Erderwärmung', definition: 'Global oppvarming' },
    { term: 'das Pariser Abkommen', definition: 'Parisavtalen (2015)' },
  ],
};

// ============================================================================
// Kapittel 12.3: Nachhaltiger Konsum
// ============================================================================

export const CHAPTER_TYSK_3_12_3: TextbookChapter = {
  id: 'tysk-3-12-3',
  courseId: 'tysk-3',
  chapterNumber: '12.3',
  title: 'Nachhaltiger Konsum',
  subtitle: 'Bærekraftig forbruk',
  description: 'Bærekraft i hverdagen, fair trade, okologisk mat, Mulltrennung, resirkulering og det tyske Pfandsystemet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere med god uttale, variert ordforrad og avanserte strukturer',
  ],
  content: [
    {
      id: 'tysk-3-12-3-intro',
      type: 'text',
      content: `## Nachhaltiger Konsum - Bærekraftig forbruk

Tyskland er kjent for sin sterke miljobevissthet og har et av verdens mest avanserte systemer for avfallshandtering og resirkulering. Bærekraftig forbruk (nachhaltiger Konsum) er et viktig tema i tysk hverdag.

**Typisk tysk miljohverdag:**
- **Mulltrennung** - kildesortering av avfall i opptil 6 kategorier
- **Pfandsystem** - panteordning for flasker og bokser
- **Bio-Produkte** - stort utvalg av okologisk mat i butikkene
- **Unverpackt-Laden** - butikker uten emballasje
- **Fahrradfreundlich** - sykkelvennlige byer med egne sykkelfelt

Mange tyskere er bevisste forbrukere som tenker pa miljoet i hverdagen. Uttrykket "Nachhaltigkeit" (bærekraft) er blitt et nokkelbegrep i alt fra politikk til reklame.`,
    },
    {
      id: 'tysk-3-12-3-def-1',
      type: 'definition',
      title: 'Vokabular: Nachhaltiger Konsum',
      content: `**Bærekraftige forbruksbegreper:**

| Tysk | Norsk |
|------|-------|
| der nachhaltige Konsum | bærekraftig forbruk |
| die Mülltrennung | kildesortering |
| das Pfandsystem | panteordning |
| der ökologische Fußabdruck | okologisk fotavtrykk |
| die Kreislaufwirtschaft | sirkulærokonomi |
| das Bioprodukt | okologisk produkt |
| die Nachhaltigkeit | bærekraft |
| die Müllvermeidung | avfallsforebygging |
| das Recycling | resirkulering |
| die Verpackung | emballasje |
| der Einwegbecher | engangskopp |
| die Mehrwegflasche | flergangs flaske |`,
    },
    {
      id: 'tysk-3-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Die Mulltrennung',
      problem: `I Tyskland sorterer man avfall i ulike beholdere. Koble riktig type avfall til riktig tonne:

**Tonnene:**
- Die Gelbe Tonne (gul beholder)
- Die Blaue Tonne (bla beholder)
- Die Biotonne (brun beholder)
- Die Restmulltonne (gra/svart beholder)
- Der Glascontainer (glasscontainer)

**Avfallet:**
1. Papir og kartong
2. Plastikkemballasje og metall
3. Matrester og hageavfall
4. Vindusflasker og syltetoysglass
5. Stovsugerposer og bleier`,
      solution: `**Losning:**
1. Papir og kartong -> **Die Blaue Tonne** (bla = papir)
2. Plastikkemballasje og metall -> **Die Gelbe Tonne** (gul = emballasje/plast/metall)
3. Matrester og hageavfall -> **Die Biotonne** (brun = biologisk avfall)
4. Vindusflasker og syltetoysglass -> **Der Glascontainer** (glasscontainer, ofte sortert etter farge!)
5. Stovsugerposer og bleier -> **Die Restmulltonne** (gra/svart = restavfall)

**Visste du?**
I Tyskland kan man fa bot for feil kildesortering! Mulltrennung tas svært alvorlig, og det finnes egne "Mullpolizei" (avfallsinspektorer) i noen kommuner.

**Nyttige ord:**
- der Abfall / der Mull = avfall / soppel
- die Tonne = beholder / tonne
- trennen = a sortere / skille
- entsorgen = a kaste / kvitte seg med`,
    },
    {
      id: 'tysk-3-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-ex-1',
        number: '12.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor kaster du plastikkemballasje i Tyskland?',
        choices: ['Die Blaue Tonne', 'Die Gelbe Tonne', 'Die Biotonne', 'Die Restmulltonne'],
        correctAnswer: 'Die Gelbe Tonne',
        solution: 'Plastikkemballasje kastes i den gule beholderen (die Gelbe Tonne). Den gule tonnen er for all slags emballasje - plast, metall og sammensatt emballasje.',
      },
    },
    {
      id: 'tysk-3-12-3-def-2',
      type: 'definition',
      title: 'Vokabular: Pfandsystem und Recycling',
      content: `**Pante- og resirkuleringsbegreper:**

| Tysk | Norsk |
|------|-------|
| das Pfand | pant |
| der Pfandautomat | panteautomat |
| die Einwegflasche | engangsflaske |
| die Mehrwegflasche | flergangsflaske |
| der Pfandbon | pantebon |
| das Einwegpfand | engangspant (25 cent) |
| das Mehrwegpfand | flergangspant (8-15 cent) |
| die Dose | boks |
| zuruckgeben | a levere tilbake |
| wiederverwenden | a gjenbruke |
| die Wertstofftonne | beholder for gjenvinnbart materiale |`,
    },
    {
      id: 'tysk-3-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Das Pfandsystem',
      problem: `Les om det tyske Pfandsystemet:

*"In Deutschland gibt es ein umfassendes Pfandsystem fur Getränkeflaschen und Dosen. Einwegflaschen und Dosen haben ein Pfand von 25 Cent. Mehrwegflaschen aus Glas oder Plastik haben ein Pfand von 8 bis 15 Cent. Die leeren Flaschen gibt man im Supermarkt am Pfandautomaten zuruck und bekommt einen Pfandbon, den man an der Kasse einlosen kann."*

a) Hva er forskjellen pa Einwegpfand og Mehrwegpfand?
b) Hvordan fungerer systemet i praksis?
c) Hva er en "Pfandbon"?`,
      solution: `a) **Forskjellen:**
- **Einwegpfand** (engangspant) = 25 cent. Gjelder engangsflasker og bokser som resirkuleres.
- **Mehrwegpfand** (flergangspant) = 8-15 cent. Gjelder flergangsflasker som vaskes og brukes pa nytt.

b) **I praksis:**
1. Du kjoper en drikke og betaler pant i tillegg til prisen
2. Nar flasken er tom, tar du den med til en **Pfandautomat** i butikken
3. Automaten gir deg en **Pfandbon** (kvittering)
4. Du bruker bongen i kassen for a fa pengene tilbake

c) En **Pfandbon** er en kvittering/bon du far fra panteautomaten, som du kan veksle inn i penger i kassen (einlosen = a lose inn).

**Kulturnotat:** Det tyske Pfandsystemet er veldig effektivt. Nesten 99% av alle Mehrwegflascher blir returnert!`,
    },
    {
      id: 'tysk-3-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-ex-2',
        number: '12.3.2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Kildesortering er viktig for miljoet.', solution: 'Mulltrennung ist wichtig fur die Umwelt.' },
          { label: 'b', task: 'Jeg leverer flaskene tilbake i panteautomaten.', solution: 'Ich gebe die Flaschen am Pfandautomaten zuruck.' },
          { label: 'c', task: 'Okologiske produkter er bedre for miljoet.', solution: 'Biologische/Okologische Produkte sind besser fur die Umwelt.' },
          { label: 'd', task: 'Vi bor redusere emballasjen.', solution: 'Wir sollten die Verpackung reduzieren.' },
        ],
        solution: 'a) Mulltrennung ist wichtig fur die Umwelt. b) Ich gebe die Flaschen am Pfandautomaten zuruck. c) Biologische Produkte sind besser fur die Umwelt. d) Wir sollten die Verpackung reduzieren.',
        hints: ['zuruckgeben = a levere tilbake (separerbart verb)', 'sollten = bor (Konjunktiv II)'],
      },
    },
    {
      id: 'tysk-3-12-3-def-3',
      type: 'definition',
      title: 'Vokabular: Nachhaltiger Lebensstil',
      content: `**Bærekraftig livsstil:**

| Tysk | Norsk |
|------|-------|
| der faire Handel (Fair Trade) | rettferdig handel |
| die Biolebensmittel | okologisk mat |
| der Unverpackt-Laden | butikk uten emballasje |
| das Carsharing | bildeling |
| die Energiesparmassnahme | energisparetiltak |
| der Secondhandladen | bruktbutikk |
| die Lebensmittelverschwendung | matsvinn |
| die vegane Ernährung | vegansk kosthald |
| die regionale Produktion | lokal produksjon |
| der Konsumverzicht | forbruksavhold |`,
    },
    {
      id: 'tysk-3-12-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Nachhaltigkeit im Alltag',
      problem: `Her er en dialog mellom to venner om bærekraft i hverdagen. Les og svar:

*"Lisa: Ich versuche, nachhaltiger zu leben. Ich kaufe jetzt nur noch Bioprodukte und bringe meine eigene Tasche mit zum Einkaufen.*
*Tom: Das ist toll! Ich fahre seit einem Jahr nur noch mit dem Fahrrad zur Arbeit und habe mein Auto verkauft.*
*Lisa: Wow, das ist konsequent! Ich gehe jetzt auch in einen Unverpackt-Laden. Da kauft man alles ohne Verpackung.*
*Tom: Stimmt, die gibt es immer mehr. Ich achte auch darauf, weniger Lebensmittel zu verschwenden."*

a) Hva gjor Lisa for a leve mer bærekraftig?
b) Hva har Tom endret?
c) Hva er en Unverpackt-Laden?`,
      solution: `a) **Lisas tiltak:**
- Kjoper kun okologiske produkter (nur noch Bioprodukte)
- Tar med egen pose nar hun handler (eigene Tasche mitbringen)
- Handler i butikk uten emballasje (Unverpackt-Laden)

b) **Toms tiltak:**
- Sykler til jobb (mit dem Fahrrad zur Arbeit fahren)
- Har solgt bilen (Auto verkauft)
- Passer pa a kaste mindre mat (weniger Lebensmittel verschwenden)

c) En **Unverpackt-Laden** er en butikk der alt selges uten emballasje. Kundene tar med egne beholdere og fyller opp det de trenger. Dette reduserer plastforbruk og emballasje.

**Nyttige uttrykk:**
- versuchen + zu + infinitiv = prove a
- achten auf = passe pa / vaere oppmerksom pa
- verschwenden = sløse / kaste bort`,
    },
    {
      id: 'tysk-3-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-ex-3',
        number: '12.3.3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Lag en liste med 5 ting du kan gjore for a leve mer bærekraftig. Skriv pa tysk med "Ich kann..."',
        subTasks: [
          { label: 'a', task: 'Et tiltak for transport', solution: 'Ich kann mit dem Fahrrad zur Schule fahren.' },
          { label: 'b', task: 'Et tiltak for mat', solution: 'Ich kann weniger Lebensmittel verschwenden und regionale Produkte kaufen.' },
          { label: 'c', task: 'Et tiltak for avfall', solution: 'Ich kann den Mull besser trennen und weniger Einwegplastik benutzen.' },
        ],
        solution: 'Eksempel: Ich kann mit dem Fahrrad fahren, weniger Fleisch essen, den Mull trennen, Secondhandkleidung kaufen und weniger Wasser verbrauchen.',
        hints: ['Bruk modalverbet "kann" + infinitiv', 'Bruk vokabular fra kapittelet'],
      },
    },
    {
      id: 'tysk-3-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-ex-4',
        number: '12.3.4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr "die Kreislaufwirtschaft" pa norsk?',
        choices: ['Kretsokonomi', 'Sirkulærokonomi', 'Rundgangshandel', 'Kretslopsindustri'],
        correctAnswer: 'Sirkulærokonomi',
        solution: '"Die Kreislaufwirtschaft" betyr sirkulærokonomi. "Kreislauf" betyr kretsløp (bokstavelig: sirkellop) og "Wirtschaft" betyr okonomi. Konseptet handler om a gjenbruke og resirkulere ressurser i stedet for a kaste dem.',
      },
    },
    {
      id: 'tysk-3-12-3-note-1',
      type: 'note',
      title: 'Oppsummering: Nachhaltiger Konsum',
      content: `**Hovedpunkter i dette kapittelet:**

1. **Mulltrennung** - kildesortering er en sentral del av tysk hverdag med opptil 6 kategorier
2. **Das Pfandsystem** - et effektivt panteordning for flasker og bokser
3. **Bioprodukte** - stort utvalg av okologisk mat i tyske butikker
4. **Kreislaufwirtschaft** - sirkulærokonomi som ideal for fremtidig forbruk
5. **Nachhaltiger Lebensstil** - fair trade, Unverpackt-Laden og bærekraftige valg i hverdagen

**Viktige tyske ord a huske:**
der nachhaltige Konsum, die Mulltrennung, das Pfandsystem, der okologische Fussabdruck, die Kreislaufwirtschaft, das Bioprodukt, die Verpackung`,
    },
    {
      id: 'tysk-3-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-3-ex-5',
        number: '12.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Sammenlign Norges og Tysklands panteordninger og kildesortering. Skriv en tekst pa 6-8 setninger pa tysk.',
        subTasks: [
          { label: 'a', task: 'Beskriv det norske pantesystemet pa tysk.', solution: 'In Norwegen gibt es auch ein Pfandsystem. Man gibt leere Flaschen und Dosen am Automaten im Supermarkt zuruck. Das Pfand betragt 2 oder 3 norwegische Kronen.' },
          { label: 'b', task: 'Sammenlign med det tyske systemet.', solution: 'In Deutschland ist die Mulltrennung strenger als in Norwegen. Es gibt mehr Kategorien und strengere Regeln. Beide Lander haben ein funktionierendes Pfandsystem.' },
        ],
        solution: 'Eksempel pa sammenligning: Beide Lander haben ein Pfandsystem, aber die deutsche Mulltrennung ist detaillierter. Norwegen recycelt gut, aber Deutschland hat mehr Kategorien bei der Mulltrennung.',
        hints: ['Sammenligningsuttrykk: mehr als, weniger als, genauso wie, im Vergleich zu', 'strenger = strengere, detaillierter = mer detaljert'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der nachhaltige Konsum', definition: 'Bærekraftig forbruk' },
    { term: 'die Mulltrennung', definition: 'Kildesortering av avfall' },
    { term: 'das Pfandsystem', definition: 'Panteordning for flasker og bokser' },
    { term: 'der okologische Fussabdruck', definition: 'Okologisk fotavtrykk' },
    { term: 'die Kreislaufwirtschaft', definition: 'Sirkulærokonomi' },
    { term: 'das Bioprodukt', definition: 'Okologisk produkt' },
    { term: 'die Verpackung', definition: 'Emballasje' },
    { term: 'die Mullvermeidung', definition: 'Avfallsforebygging' },
  ],
};

// ============================================================================
// Kapittel 12.4: Naturschutz und Biodiversität
// ============================================================================

export const CHAPTER_TYSK_3_12_4: TextbookChapter = {
  id: 'tysk-3-12-4',
  courseId: 'tysk-3',
  chapterNumber: '12.4',
  title: 'Naturschutz und Biodiversität',
  subtitle: 'Naturvern og biologisk mangfold',
  description: 'Nasjonalparker i Tyskland, truede arter, naturvernorganisasjoner, NABU, Schwarzwald og Wattenmeer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-12-4-intro',
      type: 'text',
      content: `## Naturschutz und Biodiversität - Naturvern og biologisk mangfold

Tyskland har en lang tradisjon for naturvern (Naturschutz). Allerede i 1836 ble det forste naturvernomradet opprettet, og i dag finnes det 16 nasjonalparker, over 100 naturparker og tusenvis av naturvernomrader.

**Viktige naturvernomrader i Tyskland:**
- **Schwarzwald** (Svarteskogen) - en av Europas mest kjente skogsomrader i sorvest-Tyskland
- **Wattenmeer** (Vadehavet) - UNESCO verdensarvsted langs Nordsjokysten
- **Bayerischer Wald** - Tysklands eldste nasjonalpark (1970)
- **Sächsische Schweiz** - dramatiske sandsteinformasjoner i Sachsen
- **Biosphärenreservat Schorfheide-Chorin** - viktig for biologisk mangfold

Biologisk mangfold (die Biodiversität) er truet av klimaendringer, urbanisering og intensivt landbruk. Naturvernorganisasjoner som **NABU** (Naturschutzbund Deutschland) og **BUND** (Bund fur Umwelt und Naturschutz Deutschland) arbeider for a beskytte arter og leveomrader.`,
    },
    {
      id: 'tysk-3-12-4-def-1',
      type: 'definition',
      title: 'Vokabular: Naturschutz',
      content: `**Naturvernbegreper:**

| Tysk | Norsk |
|------|-------|
| der Naturschutz | naturvern |
| die Biodiversität | biologisk mangfold |
| das Naturschutzgebiet | naturvernomrade |
| die bedrohte Art | truet art |
| das Weltnaturerbe | verdens naturarv |
| der Nationalpark | nasjonalpark |
| das Biosphärenreservat | biosfærereservat |
| die Artenvielfalt | artsmangfold |
| das Aussterben | utryddelse |
| der Lebensraum | leveomrade / habitat |
| die Renaturierung | tilbakeforing til natur |
| die Wildnis | villmark |`,
    },
    {
      id: 'tysk-3-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Das Wattenmeer',
      problem: `Les om Vadehavet og svar pa sporsmalene:

*"Das Wattenmeer an der deutschen Nordseeküste ist seit 2009 UNESCO-Weltnaturerbe. Es ist eines der wichtigsten Feuchtgebiete der Welt und Lebensraum fur Tausende von Tier- und Pflanzenarten. Bei Ebbe kann man auf dem Meeresboden wandern - das nennt man 'Wattwandern'. Millionen von Zugvögeln rasten hier auf ihrem Weg zwischen Afrika und der Arktis. Der Nationalpark Wattenmeer schützt dieses einzigartige Ökosystem."*

a) Siden nar er Wattenmeer UNESCO-verdensarv?
b) Hva er Wattwandern?
c) Hvorfor er Wattenmeer viktig for fugler?`,
      solution: `a) Vadehavet har vært UNESCO-verdensarv **siden 2009** (seit 2009 UNESCO-Weltnaturerbe).

b) **Wattwandern** er a vandre pa havbunnen ved lavvann (Ebbe). Nar tidevannsstromningen trekker seg tilbake, kan man ga pa den blottlagte havbunnen. Det er en populær friluftsaktivitet.

c) Vadehavet er viktig for fugler fordi **millioner av trekkfugler** (Zugvögel) raster her pa sin vei mellom Afrika og Arktis. Det er et kritisk hvileomrade (Rastplatz) pa trekkvegen.

**Nyttige ord:**
- das Feuchtgebiet = vatmarksomrade
- die Ebbe = fjære / lavvann
- die Flut = flo / hoyvann
- der Zugvogel = trekkfugl
- rasten = raste / hvile
- einzigartig = unik / enestående
- schützen = beskytte`,
    },
    {
      id: 'tysk-3-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-ex-1',
        number: '12.4.1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er Wattenmeer?',
        choices: ['En innsjø i Bayern', 'Et fjellomrade i Sveits', 'Et vatmarksomrade ved Nordsjokysten', 'En nasjonalpark i Schwarzwald'],
        correctAnswer: 'Et vatmarksomrade ved Nordsjokysten',
        solution: 'Wattenmeer (Vadehavet) er et vatmarksomrade (Feuchtgebiet) ved den tyske Nordsjokysten. Det er UNESCO-verdensarv og et av verdens viktigste okosystemer for trekkfugler og marine arter.',
      },
    },
    {
      id: 'tysk-3-12-4-def-2',
      type: 'definition',
      title: 'Vokabular: Bedrohte Arten und Tierwelt',
      content: `**Truede arter og dyreliv:**

| Tysk | Norsk |
|------|-------|
| die bedrohte Art | truet art |
| die Rote Liste | den rode listen (truede arter) |
| der Wolf | ulv |
| der Luchs | gaupe |
| der Seeadler | havorn |
| der Biber | bever |
| die Wildkatze | villkatt |
| der Fischotter | oter |
| die Wiederansiedlung | gjeninnforing (av arter) |
| die Schutzzone | vernesone |
| das Artenschutzprogramm | artvernprogram |
| vom Aussterben bedroht | truet av utryddelse |`,
    },
    {
      id: 'tysk-3-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Rückkehr des Wolfs',
      problem: `Les om ulvens tilbakekomst til Tyskland:

*"Nach uber 150 Jahren ist der Wolf nach Deutschland zuruckgekehrt. Seit dem Jahr 2000 leben wieder Wolfe in deutschen Waldern - vor allem in Brandenburg, Sachsen und Niedersachsen. Inzwischen gibt es uber 180 Wolfsrudel. Der Wolf steht unter strengem Schutz. Allerdings gibt es Konflikte mit Landwirten, deren Schafe und Ziegen von Wolfen angegriffen werden. Die Debatte zwischen Naturschützern und Landwirten ist hitzig."*

a) Nar kom ulven tilbake til Tyskland?
b) Hvor i Tyskland finnes det flest ulver?
c) Hva er konflikten?`,
      solution: `a) Ulven kom tilbake til Tyskland rundt **ar 2000** (seit dem Jahr 2000), etter over 150 ars fravar.

b) De fleste ulvene finnes i **Brandenburg, Sachsen og Niedersachsen** (delstater i ost- og nord-Tyskland).

c) **Konflikten:** Ulvene angriper sau og geiter (Schafe und Ziegen) som tilhorer bonder (Landwirte). Naturvernere vil beskytte ulven, mens bonder vil beskytte husdyrene sine. Debatten er heftig (hitzig).

**Nyttige ord:**
- zuruckkehren = a vende tilbake
- das Wolfsrudel = ulveflokk
- unter Schutz stehen = a vaere vernet
- der Landwirt = bonde
- angreifen = a angripe
- hitzig = heftig / opphetet`,
    },
    {
      id: 'tysk-3-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-ex-2',
        number: '12.4.2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Ulven er en truet art i Europa.', solution: 'Der Wolf ist eine bedrohte Art in Europa.' },
          { label: 'b', task: 'Nasjonalparken beskytter mange dyre- og plantearter.', solution: 'Der Nationalpark schutzt viele Tier- und Pflanzenarten.' },
          { label: 'c', task: 'Biologisk mangfold er viktig for okosystemet.', solution: 'Die Biodiversitat ist wichtig fur das Okosystem.' },
          { label: 'd', task: 'Naturvernorganisasjonen arbeider for a beskytte truede arter.', solution: 'Die Naturschutzorganisation arbeitet daran, bedrohte Arten zu schutzen.' },
        ],
        solution: 'a) Der Wolf ist eine bedrohte Art in Europa. b) Der Nationalpark schutzt viele Tier- und Pflanzenarten. c) Die Biodiversitat ist wichtig fur das Okosystem. d) Die Naturschutzorganisation arbeitet daran, bedrohte Arten zu schutzen.',
        hints: ['schutzen = a beskytte', 'arbeiten daran + zu + Infinitiv = arbeide for a'],
      },
    },
    {
      id: 'tysk-3-12-4-def-3',
      type: 'definition',
      title: 'Vokabular: Naturschutzorganisationen',
      content: `**Naturvernorganisasjoner:**

| Tysk | Norsk |
|------|-------|
| der NABU (Naturschutzbund Deutschland) | Tysklands naturvernforbund |
| der BUND (Bund fur Umwelt und Naturschutz) | Forbundet for miljo og naturvern |
| der WWF Deutschland | WWF Tyskland |
| die Deutsche Wildtier Stiftung | Den tyske viltstiftelsen |
| das Umweltbundesamt | Miljovernmyndigheten |
| die ehrenamtliche Arbeit | frivillig arbeid |
| der Freiwillige | frivillig (person) |
| die Spende | donasjon |
| die Petition | underskriftskampanje |
| der Umweltaktivist | miljoaktivist |`,
    },
    {
      id: 'tysk-3-12-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Der Schwarzwald',
      problem: `Les om Schwarzwald og svar:

*"Der Schwarzwald im Sudwesten Deutschlands ist eines der bekanntesten Waldgebiete Europas. Der Name kommt von den dunklen Nadelwaldern, die den Wald prägen. Seit 2014 gibt es den Nationalpark Schwarzwald, der seltene Tier- und Pflanzenarten schützt. Hier leben unter anderem der Auerhahn, der Luchs und seltene Fledermausarten. Der Schwarzwald ist auch fur seine Kuckucksuhren, den Schwarzwälder Kirschtorte und den Schinken bekannt."*

a) Woher kommt der Name "Schwarzwald"?
b) Welche Tiere leben dort?
c) Wofur ist der Schwarzwald kulturell bekannt?`,
      solution: `a) **Navnet** kommer fra de morke barskogene (dunkle Nadelwälder) som preger skogen. "Schwarz" = svart, "Wald" = skog - altsa "Svarteskogen".

b) **Dyr i Schwarzwald:**
- der Auerhahn = storfugl
- der Luchs = gaupe
- seltene Fledermausarten = sjeldne flaggermusarter

c) **Kulturelt** er Schwarzwald kjent for:
- Kuckucksuhren = gjokur (tradisjonelle klokker)
- Schwarzwälder Kirschtorte = Schwarzwalderkake (sjokoladekake med kirsebær)
- Schinken = skinke (rokta skinke)

**Nyttige ord:**
- das Waldgebiet = skogsomrade
- der Nadelwald = barskog
- prägen = prege
- selten = sjelden
- unter anderem = blant annet`,
    },
    {
      id: 'tysk-3-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-ex-3',
        number: '12.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en informasjonstekst pa tysk (6-8 setninger) om et naturvernomrade du kjenner til i Norge eller Tyskland. Bruk minst 5 fagtermer fra kapittelet.',
        solution: 'Eksempel: "Der Hardangervidda Nationalpark ist der grosste Nationalpark Norwegens. Das Naturschutzgebiet schützt eine einzigartige Hochgebirgslandschaft. Hier leben bedrohte Arten wie der Polarfuchs und der Vielfras. Die Biodiversitat ist beeindruckend: uber 100 Vogelarten und zahlreiche Pflanzenarten sind heimisch. Der Lebensraum der wilden Rentiere wird durch den Nationalpark geschutzt. Naturschutz hat in Norwegen eine lange Tradition."',
        hints: ['Bruk adjektivboy: einzigartig = unik, beeindruckend = imponerende', 'Husk artikler pa naturverntermer'],
      },
    },
    {
      id: 'tysk-3-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-ex-4',
        number: '12.4.4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva star NABU for?',
        choices: ['Nationale Abfallbeseitigung und Umweltschutz', 'Naturschutzbund Deutschland', 'Natürliche Artenbestimmung und Umweltforschung', 'Norddeutsche Artenschutz- und Biologieunion'],
        correctAnswer: 'Naturschutzbund Deutschland',
        solution: 'NABU star for "Naturschutzbund Deutschland" (Tysklands naturvernforbund). Det er Tysklands storste naturvernorganisasjon med over 900 000 medlemmer, grunnlagt i 1899.',
      },
    },
    {
      id: 'tysk-3-12-4-note-1',
      type: 'note',
      title: 'Oppsummering: Naturschutz und Biodiversität',
      content: `**Hovedpunkter i dette kapittelet:**

1. **Naturschutz** har lang tradisjon i Tyskland med 16 nasjonalparker og tusenvis av vernede omrader
2. **Wattenmeer** er UNESCO-verdensarv og et av verdens viktigste vatmarksomrader
3. **Schwarzwald** er et ikonisk skogsomrade med nasjonalpark siden 2014
4. **Bedrohte Arten** - ulven har vendt tilbake, men det skaper konflikter med bonder
5. **NABU og BUND** er de storste naturvernorganisasjonene i Tyskland
6. **Biodiversität** er truet av klimaendringer, urbanisering og intensivt landbruk

**Viktige tyske ord a huske:**
der Naturschutz, die Biodiversität, das Naturschutzgebiet, die bedrohte Art, das Weltnaturerbe, der Nationalpark, der Lebensraum`,
    },
    {
      id: 'tysk-3-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-12-4-ex-5',
        number: '12.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Naturvern i Norge og Tyskland',
        subTasks: [
          { label: 'a', task: 'Sammenlign et norsk og et tysk naturvernomrade pa tysk (4-5 setninger). Bruk sammenligningsuttrykk.', solution: 'Der Hardangervidda Nationalpark in Norwegen ist viel grosser als der Nationalpark Schwarzwald in Deutschland. Beide schutzen bedrohte Arten und einzigartige Landschaften. In Norwegen gibt es mehr Wildnis, wahrend Deutschland dichter besiedelt ist. Trotzdem hat Deutschland ein sehr gutes System fur Naturschutzgebiete.' },
          { label: 'b', task: 'Skriv 3-4 setninger pa tysk om hva man kan gjore for a beskytte naturen.', solution: 'Man kann ehrenamtlich bei einer Naturschutzorganisation arbeiten. Man sollte die Natur nicht verschmutzen und keinen Mull in den Wald werfen. Es ist wichtig, bedrohte Arten zu schutzen und ihren Lebensraum zu erhalten.' },
          { label: 'c', task: 'Diskuter pa tysk: Er det riktig a la ulven leve fritt i Tyskland? (4-5 setninger)', solution: 'Diese Frage ist nicht einfach zu beantworten. Einerseits hat der Wolf ein Recht auf seinen naturlichen Lebensraum. Andererseits mussen die Landwirte ihre Tiere schutzen konnen. Ich denke, ein Kompromiss ist notwendig: Der Wolf sollte geschutzt werden, aber die Landwirte mussen besser unterstutzt werden.' },
        ],
        solution: 'Eksempel pa sammenligning og diskusjon om naturvern med bruk av avanserte tyske strukturer.',
        hints: ['Sammenligningsuttrykk: grosser als, mehr als, wahrend, im Gegensatz zu, trotzdem', 'Argumenter for/mot: einerseits... andererseits, zwar... aber'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Naturschutz', definition: 'Naturvern' },
    { term: 'die Biodiversität', definition: 'Biologisk mangfold / artsmangfold' },
    { term: 'das Naturschutzgebiet', definition: 'Naturvernomrade' },
    { term: 'die bedrohte Art', definition: 'Truet art' },
    { term: 'das Weltnaturerbe', definition: 'Verdens naturarv (UNESCO)' },
    { term: 'der Nationalpark', definition: 'Nasjonalpark' },
    { term: 'der Lebensraum', definition: 'Leveomrade / habitat' },
    { term: 'die Renaturierung', definition: 'Tilbakeforing til natur' },
  ],
};

// ============================================================================
// Kapittel 13.1: Das Bauhaus und die moderne Kunst
// ============================================================================

export const CHAPTER_TYSK_3_13_1: TextbookChapter = {
  id: 'tysk-3-13-1',
  courseId: 'tysk-3',
  chapterNumber: '13.1',
  title: 'Das Bauhaus und die moderne Kunst',
  subtitle: 'Bauhaus og moderne kunst',
  description: 'Laer om Bauhaus-bevegelsen, Walter Gropius, funksjonalisme, tysk ekspresjonisme og kunstbevegelsene Die Brucke og Der Blaue Reiter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-13-1-intro',
      type: 'text',
      content: `## Das Bauhaus und die moderne Kunst

Tyskland har spilt en avgjorende rolle i utviklingen av moderne kunst og design. Fra ekspresjonismens folelsesladde uttrykk til Bauhaus-skolens revolusjonerende tilnaerming til kunst, design og arkitektur - tyske kunstnere og bevegelser har formet det 20. arhundrets estetikk.

**Tre sentrale bevegelser:**
- **Die Brucke (1905-1913):** Ekspresjonistisk kunstnergruppe i Dresden, med Ernst Ludwig Kirchner og Emil Nolde. De sokte raatt, folelsesladd uttrykk inspirert av afrikansk kunst og natur.
- **Der Blaue Reiter (1911-1914):** Munchens ekspresjonistiske gruppe med Wassily Kandinsky og Franz Marc. De utforsket farge, abstraksjon og spiritualitet i kunsten.
- **Das Bauhaus (1919-1933):** Skolen i Weimar (senere Dessau og Berlin) som forente kunst, handverk og teknologi under mottoet "Kunst und Technik - eine neue Einheit".

Walter Gropius grunnla Bauhaus i 1919 med visjonen om et "Gesamtkunstwerk" - et helhetlig kunstverk der alle kunstformer arbeider sammen.`,
    },
    {
      id: 'tysk-3-13-1-def-1',
      type: 'definition',
      title: 'Vokabular: Kunst und Bauhaus',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| das Bauhaus | Bauhaus (kunstskolen grunnlagt 1919) |
| die Kunstbewegung | kunstbevegelse |
| der Expressionismus | ekspresjonisme |
| die Avantgarde | avantgarde |
| das Gesamtkunstwerk | totalkunstverk, helhetlig kunstverk |
| die Gestaltung | formgivning, design |
| der Funktionalismus | funksjonalisme |
| die abstrakte Kunst | abstrakt kunst |
| der Entwurf | utkast, design |
| die Werkstatt | verksted |
| das Handwerk | handverk |
| die Ausstellung | utstilling |`,
    },
    {
      id: 'tysk-3-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Das Bauhaus-Manifest',
      problem: `Les utdraget og svar pa sporsmalene:

"Das Endziel aller bildnerischen Tatigkeit ist der Bau! Architekten, Bildhauer, Maler, wir alle mussen zum Handwerk zuruck! Der Kunstler ist eine Steigerung des Handwerkers. Wollen, erdenken, erschaffen wir gemeinsam den neuen Bau der Zukunft." - Walter Gropius, Bauhaus-Manifest 1919

a) Hva er det endelige malet ifølge Gropius?
b) Hvilke kunstnere henvender han seg til?
c) Hva mener han med at kunstneren er "eine Steigerung des Handwerkers"?`,
      solution: `a) Det endelige malet for all bildende virksomhet er bygget/arkitekturen (das Endziel aller bildnerischen Tatigkeit ist der Bau). Gropius sa arkitektur som den overordnede kunstformen.

b) Han henvender seg til arkitekter (Architekten), billedhuggere (Bildhauer) og malere (Maler) - alle som arbeider med visuell kunst.

c) Kunstneren er en foredling/oppgradering av handverkeren (eine Steigerung des Handwerkers). Gropius mente at kunst og handverk burde forenes, og at all kunst bygger pa handverksmessige ferdigheter.

**Spraktips:**
- "der Bau" = bygg, bygning (her: arkitektur som kunstform)
- "die Steigerung" = forokning, oppgradering (av steigern = a oke)
- "erschaffen" = a skape (et sterkt verb: erschuf, erschaffen)`,
    },
    {
      id: 'tysk-3-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-ex-1',
        number: '13.1.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var Bauhaus?',
        options: [
          { id: 'a', text: 'En kunstskole grunnlagt av Walter Gropius i 1919 som forente kunst, handverk og teknologi', isCorrect: true },
          { id: 'b', text: 'En ekspresjonistisk malergruppe i Dresden', isCorrect: false },
          { id: 'c', text: 'Et tysk museum for moderne kunst i Berlin', isCorrect: false },
          { id: 'd', text: 'En arkitekturstil fra middelalderen', isCorrect: false },
        ],
        solution: 'Bauhaus var en kunstskole grunnlagt av Walter Gropius i Weimar i 1919. Skolen forente kunst, handverk og teknologi, og revolusjonerte moderne design og arkitektur. Den ble stengt av nazistene i 1933.',
        hints: ['Bauhaus betyr bokstavelig "byggehus" - Bau (bygg) + Haus (hus)'],
      },
    },
    {
      id: 'tysk-3-13-1-text-2',
      type: 'text',
      content: `## Der Expressionismus - Folelse og opprør

Tysk ekspresjonisme var en av de viktigste kunstbevegelsene i begynnelsen av det 20. arhundret. I motsetning til impresjonismens virkelighetsnære gjengivelse sokte ekspresjonistene a uttrykke indre folelser, angst og opprør.

**Die Brucke (Broen, 1905-1913):**
- Grunnlagt i Dresden av Ernst Ludwig Kirchner, Karl Schmidt-Rottluff, Erich Heckel og Fritz Bleyl
- Raatt, intenst fargesprak inspirert av afrikansk kunst
- Temaer: storbylivets fremmedgjoring, natur versus sivilisasjon

**Der Blaue Reiter (Den bla rytteren, 1911-1914):**
- Grunnlagt i Munchen av Wassily Kandinsky og Franz Marc
- Mer abstrakt og spirituell enn Die Brucke
- Kandinsky regnes som en av de forste abstrakte kunstnerne
- Franz Marc er kjent for sine fargesterke dyremalerier

| Bevegelse | Tysk | Kjennetegn |
|-----------|------|------------|
| Die Brucke | die Brucke | Raatt, folelsesladd, sterke farger |
| Der Blaue Reiter | der Blaue Reiter | Abstrakt, spirituelt, fargeeksperimenter |
| Bauhaus | das Bauhaus | Funksjonalistisk, minimalistisk, enhet av kunst og handverk |`,
    },
    {
      id: 'tysk-3-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Expressionismus in der Kunst',
      problem: `Les teksten og analyser:

"Der Expressionismus war eine Reaktion auf die zunehmende Industrialisierung und Verstadterung der deutschen Gesellschaft. Die Kunstler der Brucke malten nicht, was sie sahen, sondern was sie fuhlten. Ihre Werke zeigen oft verzerrte Formen, grelle Farben und eine tiefe Unruhe. Sie wollten die burgerliche Kunst aufbrechen und etwas vollig Neues schaffen."

a) Hva var ekspresjonismen en reaksjon pa?
b) Hva malte Die Brucke-kunstnerne?
c) Hva kjennetegnet verkene deres?`,
      solution: `a) Ekspresjonismen var en reaksjon pa den okende industrialiseringen (Industrialisierung) og urbaniseringen (Verstadterung) av det tyske samfunnet.

b) Die Brucke-kunstnerne malte ikke det de sa (was sie sahen), men det de folte (was sie fuhlten). De uttrykte altsa indre folelsesmessige tilstander.

c) Verkene kjennetegnes av forvrengte former (verzerrte Formen), grelle farger (grelle Farben) og en dyp uro (tiefe Unruhe). De ville bryte opp den borgerlige kunsten (die burgerliche Kunst aufbrechen).

**Spraktips:**
- "verzerrt" = forvrengt (av verzerren = a forvrenge)
- "grell" = grell, skarp (om farger)
- "aufbrechen" = a bryte opp (separabelt verb)`,
    },
    {
      id: 'tysk-3-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-ex-2',
        number: '13.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble riktig kunstbevegelse med beskrivelse:',
        subTasks: [
          { label: 'a', task: 'Die Brucke', solution: 'Ekspresjonistisk gruppe fra Dresden (1905-1913) med raatt, folelsesladd uttrykk og sterke farger. Grunnlagt av Kirchner, Schmidt-Rottluff m.fl.' },
          { label: 'b', task: 'Der Blaue Reiter', solution: 'Ekspresjonistisk gruppe fra Munchen (1911-1914) med abstrakt, spirituelt uttrykk. Grunnlagt av Kandinsky og Franz Marc.' },
          { label: 'c', task: 'Das Bauhaus', solution: 'Kunst- og designskole (1919-1933) som forente kunst, handverk og teknologi. Grunnlagt av Walter Gropius i Weimar.' },
        ],
        solution: 'a) Die Brucke - Dresden, raatt ekspresjonistisk, b) Der Blaue Reiter - Munchen, abstrakt/spirituelt, c) Das Bauhaus - Weimar, funksjonalistisk design',
        hints: ['Alle tre bevegelsene hadde ulike byer som base', 'Die Brucke var den tidligste bevegelsen'],
      },
    },
    {
      id: 'tysk-3-13-1-text-3',
      type: 'text',
      content: `## Bauhaus: Arven som lever videre

Selv om Bauhaus bare eksisterte i 14 ar (1919-1933), er innflytelsen umåtelig stor. Bauhaus-estetikken preger alt fra mobelfdesign og typografi til arkitektur og webdesign.

**Bauhaus-prinsipper:**
- "Form follows function" - formen skal folge funksjonen
- Samarbeid mellom ulike kunstformer og handverk
- Bruk av nye materialer (stal, glass, betong)
- Minimalistisk, geometrisk design
- Masseproduksjon av godt design for alle

**Bauhaus-mesterne:** Walter Gropius, Ludwig Mies van der Rohe, Paul Klee, Wassily Kandinsky, Marcel Breuer, Laszlo Moholy-Nagy

**I dag:**
Bauhaus-stilen er fremdeles aktuell. IKEA, Apple og moderne arkitektur er alle pavirket av Bauhaus-idealet om enkel, funksjonell og vakker design. I 2019 feiret man 100-arsjubileet for Bauhaus med utstillinger over hele verden.`,
    },
    {
      id: 'tysk-3-13-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Bauhaus heute',
      problem: `Les teksten om Bauhaus i dag:

"Hundert Jahre nach seiner Grundung ist das Bauhaus aktueller denn je. Die Idee, dass gutes Design fur alle zuganglich sein soll, praegt unser heutiges Leben. Vom Smartphone-Design bis zur Stadtplanung - die Bauhaus-Prinzipien sind uberall. Minimalismus, klare Linien und die Verbindung von Form und Funktion - das sind Werte, die direkt vom Bauhaus stammen."

a) Hvorfor er Bauhaus fortsatt aktuelt?
b) Hvor ser vi Bauhaus-pavirkning i dag?
c) Hvilke Bauhaus-verdier nevnes?`,
      solution: `a) Bauhaus er aktuelt fordi ideen om at godt design skal vaere tilgjengelig for alle (fur alle zuganglich) preger livet vart i dag. Prinsippene er mer aktuelle enn noensinne (aktueller denn je).

b) Vi ser Bauhaus-pavirkning i smartphone-design, byplanlegging (Stadtplanung) og overalt (uberall) i moderne design.

c) Verdiene som nevnes er minimalisme (Minimalismus), klare linjer (klare Linien) og forbindelsen mellom form og funksjon (Verbindung von Form und Funktion).

**Spraktips:**
- "aktueller denn je" = mer aktuelt enn noensinne
- "zuganglich" = tilgjengelig (fra Zugang = adgang)
- "stammen von" = a stamme fra, ha opprinnelse i`,
    },
    {
      id: 'tysk-3-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-ex-3',
        number: '13.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket prinsipp er mest sentralt i Bauhaus-filosofien?',
        options: [
          { id: 'a', text: 'Kunst skal vaere dekorativ og luksurios', isCorrect: false },
          { id: 'b', text: 'Form og funksjon skal forenes - godt design for alle', isCorrect: true },
          { id: 'c', text: 'Kunst skal uttrykke kunstnerens indre folelser', isCorrect: false },
          { id: 'd', text: 'Tradisjonelle handverksteknikker er viktigere enn teknologi', isCorrect: false },
        ],
        solution: 'Det sentrale Bauhaus-prinsippet er at form og funksjon skal forenes (Form und Funktion), og at godt design skal vaere tilgjengelig for alle - ikke bare en elite. "Form follows function" er et nokkelbegrep.',
        hints: ['Tenk pa "Form follows function" - formen folger funksjonen'],
      },
    },
    {
      id: 'tysk-3-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-ex-4',
        number: '13.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst pa norsk (5-7 setninger) der du sammenligner Die Brucke og Bauhaus. Bruk minst 4 tyske fagbegreper.',
        subTasks: [
          { label: 'a', task: 'Beskriv hva som kjennetegnet Die Brucke.', solution: 'Die Brucke var en Kunstbewegung som representerte den Expressionismus. Kunstnerne uttrykte sterke folelser gjennom verzerrte Formen og grelle Farben.' },
          { label: 'b', task: 'Beskriv hva som kjennetegnet Bauhaus.', solution: 'Das Bauhaus representerte Funktionalismus og forente Kunst og Handwerk. Gestaltung (formgivning) og Gesamtkunstwerk var sentrale begreper.' },
          { label: 'c', task: 'Hva var den viktigste forskjellen mellom dem?', solution: 'Die Brucke uttrykte folelser og opprør, mens Bauhaus sokte funksjonell design for massene. Die Brucke var individualistisk, Bauhaus var kollektivt og industrielt orientert.' },
        ],
        solution: 'Eksempel: "Die Brucke var preget av Expressionismus med raatt uttrykk og grelle Farben, mens das Bauhaus representerte Funktionalismus. Die Brucke var individualistisk og folelsesladd, Bauhaus var kollektivt og funksjonelt. Begge var viktige Kunstbewegungen, men med svært ulik Gestaltung."',
        hints: ['Bruk kontrasterende uttrykk: wahrend, im Gegensatz zu, aber', 'Tysk har mange sammensatte substantiv: Gesamtkunstwerk, Kunstbewegung'],
      },
    },
    {
      id: 'tysk-3-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-1-ex-5',
        number: '13.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvem grunnla Bauhaus-skolen?',
        options: [
          { id: 'a', text: 'Wassily Kandinsky', isCorrect: false },
          { id: 'b', text: 'Ernst Ludwig Kirchner', isCorrect: false },
          { id: 'c', text: 'Walter Gropius', isCorrect: true },
          { id: 'd', text: 'Ludwig Mies van der Rohe', isCorrect: false },
        ],
        solution: 'Walter Gropius grunnla Bauhaus i Weimar i 1919. Han var arkitekt og sa for seg en skole der alle kunstformer og handverk arbeidet sammen mot et Gesamtkunstwerk.',
        hints: ['Han formulerte det berømte Bauhaus-manifestet i 1919'],
      },
    },
    {
      id: 'tysk-3-13-1-note-1',
      type: 'note',
      title: 'Oppsummering: Das Bauhaus und die moderne Kunst',
      content: `**Viktige punkter a huske:**

- Die Brucke (1905-1913) og Der Blaue Reiter (1911-1914) var ekspresjonistiske kunstbevegelser
- Bauhaus (1919-1933) forente kunst, handverk og teknologi
- Walter Gropius grunnla Bauhaus i Weimar
- Bauhaus-prinsippet "Form follows function" preger moderne design
- Ekspresjonistene uttrykte indre folelser, Bauhaus sokte funksjonell design
- Bauhaus ble stengt av nazistene i 1933, men arven lever videre

**Nokkelord:** das Bauhaus, die Kunstbewegung, der Expressionismus, die Avantgarde, das Gesamtkunstwerk, die Gestaltung, der Funktionalismus`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Bauhaus', definition: 'Bauhaus-skolen (1919-1933), forente kunst, handverk og teknologi' },
    { term: 'die Kunstbewegung', definition: 'kunstbevegelse' },
    { term: 'der Expressionismus', definition: 'ekspresjonisme - kunstretning med folelsesladd uttrykk' },
    { term: 'die Avantgarde', definition: 'avantgarde - kunstnerisk fornyelse og eksperimentering' },
    { term: 'das Gesamtkunstwerk', definition: 'totalkunstverk, helhetlig kunstverk' },
    { term: 'die Gestaltung', definition: 'formgivning, design' },
    { term: 'der Funktionalismus', definition: 'funksjonalisme - formen folger funksjonen' },
    { term: 'die Ausstellung', definition: 'utstilling' },
  ],
};

// ============================================================================
// Kapittel 13.2: Deutsche Musik von Klassik bis Techno
// ============================================================================

export const CHAPTER_TYSK_3_13_2: TextbookChapter = {
  id: 'tysk-3-13-2',
  courseId: 'tysk-3',
  chapterNumber: '13.2',
  title: 'Deutsche Musik von Klassik bis Techno',
  subtitle: 'Tysk musikk fra klassisk til techno',
  description: 'Laer om tyske musikktradisjoner fra Bach og Beethoven til Kraftwerk og techno, samt musikkindustri, festivaler og Schlager.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer',
  ],
  content: [
    {
      id: 'tysk-3-13-2-intro',
      type: 'text',
      content: `## Deutsche Musik - Von Klassik bis Techno

Tyskland har en av verdens rikeste musikktradisjoner. Fra barokkens mester Johann Sebastian Bach via den klassiske og romantiske periodens giganter til etterkrigstidens elektroniske revolusjon - tysk musikk har pavirket hele verden.

**Historisk oversikt:**
- **Barokk (ca. 1600-1750):** Johann Sebastian Bach, Georg Friedrich Handel
- **Klassisisme (ca. 1750-1820):** Ludwig van Beethoven (overgang til romantikken)
- **Romantikk (ca. 1800-1910):** Richard Wagner, Johannes Brahms, Robert Schumann
- **1900-tallet:** Kurt Weill (kabaret), Karlheinz Stockhausen (avantgarde)
- **1970-tallet:** Kraftwerk (elektronisk musikk), Krautrock
- **1980-90-tallet:** Techno-kulturen i Berlin, Rammstein
- **I dag:** Mangfoldig scene fra hip-hop til klassisk

Tyskland er det tredje storste musikkmarkedet i verden, og Berlin regnes som en av verdens viktigste musikk- og klubbyer.`,
    },
    {
      id: 'tysk-3-13-2-def-1',
      type: 'definition',
      title: 'Vokabular: Deutsche Musik',
      content: `**Musikkbegreper:**

| Tysk | Norsk |
|------|-------|
| die klassische Musik | klassisk musikk |
| die Sinfonie | symfoni |
| die Oper | opera |
| der Schlager | schlager (populaermusikk) |
| die elektronische Musik | elektronisk musikk |
| das Musikfestival | musikkfestival |
| der Komponist | komponist |
| der Dirigent | dirigent |
| das Orchester | orkester |
| die Musikindustrie | musikkindustri |
| das Konzert | konsert |
| der Chor | kor |`,
    },
    {
      id: 'tysk-3-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bach und Beethoven',
      problem: `Les teksten og svar pa sporsmalene:

"Johann Sebastian Bach (1685-1750) gilt als einer der grossten Komponisten aller Zeiten. In Leipzig leitete er den Thomanerchor und schuf Meisterwerke wie die Matthaus-Passion und das Wohltemperierte Klavier. Ludwig van Beethoven (1770-1827) revolutionierte die Musik. Seine Neunte Sinfonie mit der 'Ode an die Freude' ist heute die Europaische Hymne. Bemerkenswert ist, dass Beethoven die letzten Jahre seines Lebens fast vollig taub war."

a) Hva gjorde Bach i Leipzig?
b) Hva revolusjonerte Beethoven?
c) Hvilket bemerkelsesverdige faktum nevnes om Beethoven?`,
      solution: `a) I Leipzig ledet Bach Thomanerkoret (den Thomanerchor) og skapte mesterverk (Meisterwerke) som Matteus-pasjonen og Det veltempererte klaver.

b) Beethoven revolusjonerte musikken (revolutionierte die Musik). Hans niende symfoni med "Ode an die Freude" (Ode til gleden) er i dag den europeiske hymnen (die Europaische Hymne).

c) Det bemerkelsesverdige er at Beethoven var naesten helt dov (fast vollig taub) de siste arene av livet. Til tross for dette komponerte han noen av sine storste verk.

**Spraktips:**
- "gelten als" = a gjelde som, bli ansett som (gilt als = presens)
- "schaffen" = a skape (schuf = preteritum, et sterkt verb)
- "taub" = dov`,
    },
    {
      id: 'tysk-3-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-ex-1',
        number: '13.2.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken tysk komponists verk er blitt den europeiske hymnen?',
        options: [
          { id: 'a', text: 'Johann Sebastian Bachs Matteus-pasjon', isCorrect: false },
          { id: 'b', text: 'Ludwig van Beethovens 9. symfoni ("Ode an die Freude")', isCorrect: true },
          { id: 'c', text: 'Richard Wagners "Ride of the Valkyries"', isCorrect: false },
          { id: 'd', text: 'Georg Friedrich Handels "Messias"', isCorrect: false },
        ],
        solution: 'Beethovens 9. symfoni, narmere bestemt koret "Ode an die Freude" (Ode til gleden) med tekst av Friedrich Schiller, ble valgt som den europeiske hymnen. Beethoven fullforte verket i 1824, mens han var naesten helt dov.',
        hints: ['Tenk pa hvilken melodi som spilles ved europeiske seremonier'],
      },
    },
    {
      id: 'tysk-3-13-2-text-2',
      type: 'text',
      content: `## Von Kraftwerk bis Techno

Pa 1970-tallet revolusjonerte den tyske gruppen Kraftwerk musikkscenen med sin elektroniske musikk. De la grunnlaget for synth-pop, techno og elektronisk dansemusikk.

**Kraftwerk (grunnlagt 1970 i Dusseldorf):**
- Pionerer innen elektronisk musikk
- Album som "Autobahn" (1974) og "Die Mensch-Maschine" (1978)
- Pavirket artister fra David Bowie til Daft Punk

**Berlins techno-scene (fra slutten av 1980-tallet):**
- Etter murens fall i 1989 ble tomme fabrikkbygninger i Ost-Berlin til klubber
- Tresor, Berghain og andre legendariske klubber
- Berlin ble verdens techno-hovedstad
- Love Parade (1989-2010): massivt techno-gateparade

**Schlager - Tysk populaermusikk:**
- Melodios, lettfattelig populaermusikk
- Store stjerner: Helene Fischer, Andrea Berg
- Schlager-festivaler trekker millioner av seere pa TV

| Sjanger | Tysk | Periode |
|---------|------|---------|
| Klassisk | die klassische Musik | 1600-1900 |
| Elektronisk | die elektronische Musik | 1970-i dag |
| Techno | der Techno | 1980-i dag |
| Schlager | der Schlager | 1950-i dag |`,
    },
    {
      id: 'tysk-3-13-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Die Berliner Techno-Szene',
      problem: `Les teksten og analyser:

"Nach dem Mauerfall 1989 entstand in den verlassenen Gebauden Ost-Berlins eine einzigartige Musikszene. Leere Fabriken, Bunker und Keller wurden zu illegalen Clubs. Der Techno wurde zum Soundtrack der Wiedervereinigung. Junge Menschen aus Ost und West feierten gemeinsam - die Musik verband, was die Mauer getrennt hatte. Heute ist der Berghain einer der beruhmtesten Clubs der Welt."

a) Hva skjedde i Ost-Berlin etter murens fall?
b) Hva ble techno-musikken et symbol pa?
c) Hva forbinder teksten med klubben Berghain?`,
      solution: `a) I de forlatte bygningene (verlassenen Gebauden) i Ost-Berlin oppsto en unik musikkscene. Tomme fabrikker, bunkere og kjellere ble til illegale klubber.

b) Techno ble til lydsporet til gjenforeningen (Soundtrack der Wiedervereinigung). Musikken forbandt det muren hadde adskilt (die Musik verband, was die Mauer getrennt hatte) - unge fra ost og vest feiret sammen.

c) Berghain beskrives som en av verdens mest berømte klubber (einer der beruhmtesten Clubs der Welt), og representerer Berlins posisjon som techno-hovedstad.

**Spraktips:**
- "der Mauerfall" = murens fall (Mauer = mur + Fall = fall)
- "die Wiedervereinigung" = gjenforeningen (wieder = igjen + Vereinigung = forening)
- "verbinden" = a forbinde (verband = preteritum)`,
    },
    {
      id: 'tysk-3-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-ex-2',
        number: '13.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til norsk og forklar den musikalske sammenhengen:',
        subTasks: [
          { label: 'a', task: 'die Sinfonie', solution: 'Symfoni - et stort orkesterverk, vanligvis i fire satser. Beethovens ni symfonier er blant de mest berømte.' },
          { label: 'b', task: 'der Schlager', solution: 'Schlager - populaer, melodios musikk med enkle tekster. Svært populaer i tyskspraklige land, stor pa TV-show og festivaler.' },
          { label: 'c', task: 'die elektronische Musik', solution: 'Elektronisk musikk - musikk laget med elektroniske instrumenter og synther. Kraftwerk fra Dusseldorf var pionerer pa 1970-tallet.' },
          { label: 'd', task: 'das Musikfestival', solution: 'Musikkfestival - Tyskland har mange store festivaler som Rock am Ring, Wacken Open Air og Wave-Gotik-Treffen.' },
        ],
        solution: 'a) Symfoni, b) Populaermusikk, c) Elektronisk musikk (Kraftwerk), d) Musikkfestival',
        hints: ['Schlager kommer av "schlagen" (a sla) - en "hit"/slagord', 'Sinfonie ligner det norske ordet symfoni'],
      },
    },
    {
      id: 'tysk-3-13-2-text-3',
      type: 'text',
      content: `## Wagner und die Oper

Richard Wagner (1813-1883) er en av musikkhistoriens mest kontroversielle og innflytelsesrike skikkelser. Hans operaer revolusjonerte kunstformen og pavirker film og popkultur den dag i dag.

**Wagners bidrag:**
- Utviklet konseptet "Gesamtkunstwerk" - der musikk, tekst, scenografi og drama smelter sammen
- Skapte "Der Ring des Nibelungen" - en syklus pa fire operaer (ca. 15 timer totalt)
- Bygde sitt eget operahus i Bayreuth (Festspielhaus), som fremdeles arrangerer festivaler
- Bayreuther Festspiele er en av verdens mest prestisjefylte musikkfestivaler

**Kontrovers:**
Wagner var kjent antisemitt, og hans musikk ble brukt av nazistene. Dette gjor hans arv komplisert, og i Israel er det fremdeles uoffisielt tabu a spille Wagners musikk.

Det tyske musikklandskapet spenner fra denne klassiske arven til moderne mangfold - fra hip-hop-artister som Sido og Capital Bra til elektronisk produsent Paul Kalkbrenner.`,
    },
    {
      id: 'tysk-3-13-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Musikk som kulturuttrykk',
      problem: `Les utdraget og diskuter:

"Die deutsche Musiklandschaft ist so vielfältig wie das Land selbst. Von Bachs Fugen uber Beethovens Sinfonien, Wagners Opern und Kraftwerks Synthesizer bis zu Berlins Techno-Clubs - die Musik erzahlt die Geschichte Deutschlands. Jede Epoche hat ihre Klange, und jede Generation hat ihre Stimme gefunden."

a) Hva menes med at musikklandskapet er "so vielfaltig wie das Land selbst"?
b) Hvilke musikalske epoker nevnes?
c) Hva betyr "jede Epoche hat ihre Klange"?`,
      solution: `a) Det betyr at det tyske musikklandskapet er like mangfoldig (vielfaltig) som landet selv - med et enormt spenn fra klassisk til elektronisk, fra opera til techno, fra Schlager til hip-hop.

b) Epokene som nevnes er: barokken (Bach, Fugen), klassisismen/romantikken (Beethoven, Sinfonien), senromantikken (Wagner, Opern), den elektroniske revolusjonen (Kraftwerk, Synthesizer) og samtiden (Berlin, Techno-Clubs).

c) "Jede Epoche hat ihre Klange" betyr at hver epoke har sine lyder/klanger. Musikken reflekterer sin tid - barokkens orden, romantikkens folelse, technoens frihet etter murens fall.

**Spraktips:**
- "vielfaltig" = mangfoldig (viel = mye + faltig = -foldig)
- "der Klang" (pl. die Klange) = klang, lyd
- "die Stimme" = stemme (her brukt metaforisk om musikalsk uttrykk)`,
    },
    {
      id: 'tysk-3-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-ex-3',
        number: '13.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken tysk gruppe regnes som pionerer innen elektronisk musikk?',
        options: [
          { id: 'a', text: 'Rammstein', isCorrect: false },
          { id: 'b', text: 'Die Toten Hosen', isCorrect: false },
          { id: 'c', text: 'Kraftwerk', isCorrect: true },
          { id: 'd', text: 'Scorpions', isCorrect: false },
        ],
        solution: 'Kraftwerk fra Dusseldorf (grunnlagt 1970) regnes som pionerer innen elektronisk musikk. Med album som "Autobahn" og "Die Mensch-Maschine" la de grunnlaget for synth-pop, techno og elektronisk dansemusikk.',
        hints: ['Navnet betyr "kraftverk" - de skapte musikk med elektroniske maskiner'],
      },
    },
    {
      id: 'tysk-3-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-ex-4',
        number: '13.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst pa norsk (5-7 setninger) om utviklingen av tysk musikk fra klassisk til moderne. Bruk minst 5 tyske musikkbegreper.',
        subTasks: [
          { label: 'a', task: 'Beskriv den klassiske perioden.', solution: 'Die klassische Musik i Tyskland naadde sitt hoeydepunkt med Komponisten som Bach og Beethoven. Beethovens Sinfonien er blant de viktigste verkene i musikkhistorien.' },
          { label: 'b', task: 'Beskriv overgangen til moderne musikk.', solution: 'Pa 1970-tallet revolusjonerte Kraftwerk musikken med die elektronische Musik. De brukte Synthesizer og maskiner i stedet for tradisjonelle instrumenter.' },
          { label: 'c', task: 'Beskriv dagens tyske musikkscene.', solution: 'I dag er det tyske Musikfestival-landskapet mangfoldig, fra Schlager pa TV til Techno i Berlins klubber. Die Oper er ogsa fortsatt viktig, med Bayreuther Festspiele som hoeydepunkt.' },
        ],
        solution: 'Eksempel: "Tysk musikk spenner fra die klassische Musik med store Komponisten som Bach og Beethoven til die elektronische Musik fra Kraftwerk. Beethovens Sinfonien er verdens mest kjente. Wagners Opern revolusjonerte musikkdramaet. Pa 1970-tallet kom Kraftwerk med Synthesizer, og etter murens fall ble Berlin verdens Techno-hovedstad. I dag er alt fra Schlager til hip-hop populaert."',
        hints: ['Bruk tidsord: zuerst, dann, spater, heute', 'Nevn spesifikke komponister og sjangre'],
      },
    },
    {
      id: 'tysk-3-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-2-ex-5',
        number: '13.2.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var spesielt med Berlins techno-scene etter 1989?',
        options: [
          { id: 'a', text: 'Den oppsto i forlatte bygninger i Ost-Berlin etter murens fall og ble et symbol pa gjenforeningen', isCorrect: true },
          { id: 'b', text: 'Den ble grunnlagt av den tyske regjeringen som et kulturprosjekt', isCorrect: false },
          { id: 'c', text: 'Den var en viderefoering av Kraftwerks musikkstil fra Dusseldorf', isCorrect: false },
          { id: 'd', text: 'Den oppsto i Vest-Berlin pa 1970-tallet', isCorrect: false },
        ],
        solution: 'Etter murens fall i 1989 ble forlatte fabrikkbygninger og bunkere i Ost-Berlin til illegale klubber. Techno ble "lydsporet til gjenforeningen" (Soundtrack der Wiedervereinigung), der unge fra ost og vest feiret sammen.',
        hints: ['Tenk pa hva som skjedde med bygningene i Ost-Berlin etter 1989'],
      },
    },
    {
      id: 'tysk-3-13-2-note-1',
      type: 'note',
      title: 'Oppsummering: Deutsche Musik',
      content: `**Viktige punkter a huske:**

- Tyskland har en enorm musikkhistorie fra barokk til techno
- Bach og Beethoven er blant verdens mest berømte komponister
- Wagner revolusjonerte operaen med sitt Gesamtkunstwerk-konsept
- Kraftwerk la grunnlaget for elektronisk musikk pa 1970-tallet
- Berlin ble verdens techno-hovedstad etter murens fall i 1989
- Schlager er en stor del av tysk populaerkultur

**Nokkelord:** die klassische Musik, die Sinfonie, die Oper, der Schlager, die elektronische Musik, das Musikfestival, der Komponist`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die klassische Musik', definition: 'klassisk musikk - den store tyske tradisjonen fra Bach til Brahms' },
    { term: 'die Sinfonie', definition: 'symfoni - orkesterverk, Beethovens ni symfonier er verdensberømte' },
    { term: 'die Oper', definition: 'opera - Wagner revolusjonerte kunstformen med Gesamtkunstwerk' },
    { term: 'der Schlager', definition: 'schlager - populaer, melodios tysk underholdningsmusikk' },
    { term: 'die elektronische Musik', definition: 'elektronisk musikk - Kraftwerk var pionerer' },
    { term: 'das Musikfestival', definition: 'musikkfestival - f.eks. Bayreuther Festspiele, Rock am Ring' },
    { term: 'der Komponist', definition: 'komponist - Bach, Beethoven, Wagner m.fl.' },
  ],
};

// ============================================================================
// Kapittel 13.3: Der deutsche Film
// ============================================================================

export const CHAPTER_TYSK_3_13_3: TextbookChapter = {
  id: 'tysk-3-13-3',
  courseId: 'tysk-3',
  chapterNumber: '13.3',
  title: 'Der deutsche Film',
  subtitle: 'Tysk film',
  description: 'Laer om tysk filmhistorie fra stummfilm (Metropolis, Nosferatu) via Neuer Deutscher Film (Fassbinder, Herzog, Wenders) til samtidsfilm (Das Leben der Anderen, Good Bye Lenin!).',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke avanserte tyske tekster i ulike sjangre',
  ],
  content: [
    {
      id: 'tysk-3-13-3-intro',
      type: 'text',
      content: `## Der deutsche Film - Fra Stummfilm til Oscar

Tysk film har en rik historie som strekker seg fra stummfilmens gyldne tid pa 1920-tallet til dagens internasjonalt anerkjente filmer. Tysk film har bidratt med noen av filmhistoriens viktigste verk og mest innflytelsesrike regissorer.

**Tre hovedperioder:**
- **Stummfilm og ekspresjonisme (1910-1930):** Tysk ekspresjonistisk film revolusjonerte filmspraket med verk som "Das Cabinet des Dr. Caligari" (1920), "Nosferatu" (1922) og Fritz Langs "Metropolis" (1927).
- **Neuer Deutscher Film (1960-1980):** En ny generasjon regissorer - Rainer Werner Fassbinder, Werner Herzog, Wim Wenders og Volker Schlondorff - skapte politisk og kunstnerisk ambisios film.
- **Samtidsfilm (1990-i dag):** Etter gjenforeningen har tysk film fatt ny internasjonal oppmerksomhet med filmer som "Das Leben der Anderen" (2006, Oscar for beste fremmedspraklige film).

Tysk film handler ofte om historie, identitet og det a forholde seg til fortiden.`,
    },
    {
      id: 'tysk-3-13-3-def-1',
      type: 'definition',
      title: 'Vokabular: Der deutsche Film',
      content: `**Filmbegreper:**

| Tysk | Norsk |
|------|-------|
| der Stummfilm | stumfilm |
| der Regisseur | regissor |
| die Filmkritik | filmkritikk |
| das Drehbuch | manus, filmmanus |
| die Filmszene | filmscene |
| der Neue Deutsche Film | den nye tyske filmen |
| das Filmfestival | filmfestival |
| der Schauspieler / die Schauspielerin | skuespiller (m/f) |
| die Handlung | handling (i en film) |
| der Hauptdarsteller | hovedrolleinnehaver |
| die Kamera | kamera |
| der Schnitt | klipping, redigering |`,
    },
    {
      id: 'tysk-3-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Metropolis und der Stummfilm',
      problem: `Les teksten og svar pa sporsmalene:

"Fritz Langs 'Metropolis' (1927) ist einer der einflussreichsten Filme aller Zeiten. Der Stummfilm zeigt eine dystopische Zukunftsstadt, in der die Arbeiter unter der Erde schuften, wahrend die Reichen in luxuriosen Wolkenkratzern leben. Der Film war bei seiner Premiere ein kommerzieller Misserfolg, wurde aber spater als Meisterwerk anerkannt. Seine visuellen Effekte und seine Themen - soziale Ungleichheit, Technologie und Menschlichkeit - sind bis heute relevant."

a) Hva handler Metropolis om?
b) Hvordan gikk det med filmen ved premieren?
c) Hvilke temaer i filmen er fortsatt relevante?`,
      solution: `a) Metropolis handler om en dystopisk fremtidsby (dystopische Zukunftsstadt) der arbeiderne sliter under jorden (unter der Erde schuften) mens de rike lever i luksoriose skyskrapere (luxuriose Wolkenkratzer).

b) Filmen var en kommersiell fiasko ved premieren (ein kommerzieller Misserfolg), men ble senere anerkjent som et mesterverk (als Meisterwerk anerkannt).

c) Temaene sosial ulikhet (soziale Ungleichheit), teknologi (Technologie) og menneskelighet (Menschlichkeit) er fortsatt relevante i dag.

**Spraktips:**
- "einflussreich" = innflytelsesrik (Einfluss = innflytelse + reich = rik)
- "schuften" = a slite, a jobbe hardt (uformelt)
- "der Wolkenkratzer" = skyskraper (Wolke = sky + kratzen = a skrape)`,
    },
    {
      id: 'tysk-3-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-ex-1',
        number: '13.3.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken tysk stumfilm fra 1927 regnes som en av filmhistoriens mest innflytelsesrike?',
        options: [
          { id: 'a', text: 'Nosferatu', isCorrect: false },
          { id: 'b', text: 'Das Cabinet des Dr. Caligari', isCorrect: false },
          { id: 'c', text: 'Metropolis', isCorrect: true },
          { id: 'd', text: 'Der letzte Mann', isCorrect: false },
        ],
        solution: 'Fritz Langs "Metropolis" (1927) er en av filmhistoriens mest innflytelsesrike filmer. Den dystopiske science fiction-filmen handlet om sosial ulikhet i en fremtidsby og revolusjonerte filmens visuelle uttrykk.',
        hints: ['Filmen handler om en fremtidsby med stor sosial ulikhet'],
      },
    },
    {
      id: 'tysk-3-13-3-text-2',
      type: 'text',
      content: `## Der Neue Deutsche Film (1960-1980)

Pa 1960-tallet reagerte en ny generasjon tyske regissorer mot det de kalte "Opas Kino" (bestefars kino). I 1962 undertegnet 26 unge filmskapere Oberhausener Manifest, der de erklarte: "Der alte Film ist tot. Wir glauben an den neuen." (Den gamle filmen er dod. Vi tror pa den nye.)

**De fire store regissorene:**

**Rainer Werner Fassbinder (1945-1982):**
- Utrolig produktiv - over 40 filmer pa 16 ar
- Temaer: undertrykkelse, klasse, homofili, Tysklands historie
- Kjente filmer: "Die Ehe der Maria Braun", "Angst essen Seele auf"

**Werner Herzog (f. 1942):**
- Ekstreme, visjonaere filmer, ofte med Klaus Kinski
- Kjente filmer: "Aguirre, der Zorn Gottes", "Fitzcarraldo"
- Ogsa anerkjent dokumentarfilmskaper

**Wim Wenders (f. 1945):**
- Poetiske, kontemplative filmer
- Kjente filmer: "Paris, Texas", "Der Himmel uber Berlin"
- "Der Himmel uber Berlin" (1987) ble remaken "City of Angels" med Hollywood

**Volker Schlondorff (f. 1939):**
- "Die Blechtrommel" (1979) vant Gullpalmen i Cannes og Oscar`,
    },
    {
      id: 'tysk-3-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Neuer Deutscher Film',
      problem: `Les teksten og analyser:

"Das Oberhausener Manifest von 1962 war ein Wendepunkt in der deutschen Filmgeschichte. Die jungen Regisseure lehnten das konventionelle, kommerzielle Kino ab und forderten einen neuen, kunstlerisch ambitionierten Film. Sie wollten Filme machen, die die deutsche Gesellschaft kritisch reflektieren. Fassbinder, Herzog und Wenders wurden zu den wichtigsten Vertretern dieser Bewegung und machten den deutschen Film international bekannt."

a) Hva var Oberhausener Manifest?
b) Hva avviste de unge regissorene?
c) Hva ville de oppna?`,
      solution: `a) Oberhausener Manifest fra 1962 var et vendepunkt (Wendepunkt) i tysk filmhistorie. 26 unge filmskapere krevde fornyelse av tysk film.

b) De unge regissorene avviste det konvensjonelle, kommersielle kinofilmen (lehnten das konventionelle, kommerzielle Kino ab). De ville bort fra underholdningsfilm uten substans.

c) De ville lage filmer som kritisk reflekterer det tyske samfunnet (die deutsche Gesellschaft kritisch reflektieren). Fassbinder, Herzog og Wenders ble de viktigste representantene (die wichtigsten Vertreter) og gjorde tysk film internasjonalt kjent.

**Spraktips:**
- "der Wendepunkt" = vendepunkt (wenden = a vende + Punkt = punkt)
- "ablehnen" = a avvise (separabelt verb: lehnte ab)
- "der Vertreter" = representant, talsperson`,
    },
    {
      id: 'tysk-3-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-ex-2',
        number: '13.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble regissoren med riktig film:',
        subTasks: [
          { label: 'a', task: 'Fritz Lang', solution: '"Metropolis" (1927) - dystopisk stumfilm om fremtidsby med sosial ulikhet' },
          { label: 'b', task: 'Rainer Werner Fassbinder', solution: '"Die Ehe der Maria Braun" - drama om en kvinnes liv i etterkrigs-Tyskland' },
          { label: 'c', task: 'Werner Herzog', solution: '"Aguirre, der Zorn Gottes" - episk film om en spansk conquistadors galskap i Amazonas' },
          { label: 'd', task: 'Wim Wenders', solution: '"Der Himmel uber Berlin" (1987) - poetisk film om to engler som observerer Berlin' },
        ],
        solution: 'a) Fritz Lang - Metropolis, b) Fassbinder - Die Ehe der Maria Braun, c) Herzog - Aguirre, d) Wenders - Der Himmel uber Berlin',
        hints: ['Fritz Lang var aktiv pa 1920-tallet, de andre fra 1960-tallet', 'Wenders\' film handler om engler (Engel) over Berlin'],
      },
    },
    {
      id: 'tysk-3-13-3-text-3',
      type: 'text',
      content: `## Deutscher Film heute

Etter gjenforeningen har tysk film opplevd en ny gullalder, spesielt med filmer som utforsker tysk historie og identitet.

**Viktige samtidsfilmer:**

- **"Good Bye, Lenin!" (2003):** Komedie-drama om en ung mann som prover a skjule DDRs fall for sin syke mor. Filmen ga opphav til begrepet "Ostalgie" (nostalgi for Ost-Tyskland).

- **"Der Untergang" (2004):** Skildrer Hitlers siste dager i bunkeren. Bruno Ganz' portrett av Hitler ble verdenskjent (og et internett-meme).

- **"Das Leben der Anderen" (2006):** Drama om Stasi-overvaking i DDR. Vant Oscar for beste fremmedspraklige film. En av de mest anerkjente tyske filmene noensinne.

- **"Toni Erdmann" (2016):** Tragikomisk film om forholdet mellom en far og datter. Nominert til Oscar og vinner av flere europeiske priser.

**Berlinale:**
Berlin International Film Festival (Berlinale) er en av verdens tre storste filmfestivaler (sammen med Cannes og Venezia). Den deler ut Gullbjornen (Goldener Bar) som hovedpris.`,
    },
    {
      id: 'tysk-3-13-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Das Leben der Anderen',
      problem: `Les filmbeskrivelsen og svar pa sporsmalene:

"'Das Leben der Anderen' (2006) spielt in Ost-Berlin im Jahr 1984. Der Stasi-Hauptmann Gerd Wiesler erhalt den Auftrag, den Dramatiker Georg Dreyman und seine Freundin, die Schauspielerin Christa-Maria Sieland, zu uberwachen. Doch wahrend er ihr Leben belauscht, beginnt Wiesler, seine Uberzeugungen in Frage zu stellen. Der Film zeigt eindringlich, wie totale Uberwachung Menschen zerstort - sowohl die Uberwachten als auch die Uberwacher."

a) Hva handler filmen om?
b) Hva skjer med Stasi-kapteinen?
c) Hva viser filmen ifølge teksten?`,
      solution: `a) Filmen utspiller seg i Ost-Berlin i 1984. Stasi-kapteinen Gerd Wiesler far i oppdrag (erhalt den Auftrag) a overvaake dramatikeren Georg Dreyman og hans kjaereste, skuespillerinnen Christa-Maria Sieland.

b) Mens han avlytter livene deres (ihr Leben belauscht), begynner Wiesler a stille sporsmalstegn ved sine overbevisninger (seine Uberzeugungen in Frage zu stellen). Han gjennomgar en moralsk forvandling.

c) Filmen viser inntrengende (eindringlich) hvordan total overvaking odelegger mennesker - bade de overvakede (die Uberwachten) og overvakerne (die Uberwacher).

**Spraktips:**
- "uberwachen" = a overvaake (Uberwachung = overvaking)
- "belauschen" = a avlytte (lytter i hemmelighet)
- "in Frage stellen" = a stille sporsmalstegn ved, a betvile`,
    },
    {
      id: 'tysk-3-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-ex-3',
        number: '13.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken tysk film vant Oscar for beste fremmedspraklige film i 2007?',
        options: [
          { id: 'a', text: 'Good Bye, Lenin!', isCorrect: false },
          { id: 'b', text: 'Der Untergang', isCorrect: false },
          { id: 'c', text: 'Das Leben der Anderen', isCorrect: true },
          { id: 'd', text: 'Toni Erdmann', isCorrect: false },
        ],
        solution: '"Das Leben der Anderen" (De andres liv) av regissor Florian Henckel von Donnersmarck vant Oscar for beste fremmedspraklige film. Filmen handler om Stasi-overvaking i DDR og er en av de mest anerkjente tyske filmene.',
        hints: ['Filmen handler om overvaking i Ost-Tyskland'],
      },
    },
    {
      id: 'tysk-3-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-ex-4',
        number: '13.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort filmkritikk pa norsk (5-7 setninger) om en av de nevnte tyske filmene. Bruk minst 4 tyske filmbegreper.',
        subTasks: [
          { label: 'a', task: 'Velg en film og presenter den kort (tittel, Regisseur, ar).', solution: '"Das Leben der Anderen" (2006) av Regisseur Florian Henckel von Donnersmarck er et drama som utspiller seg i DDR.' },
          { label: 'b', task: 'Beskriv Handlung (handlingen) i 2-3 setninger.', solution: 'Die Handlung dreier seg om en Stasi-agent som far i oppdrag a overvaake en dramatiker. Gjennom overvakingen begynner han a tvile pa systemet.' },
          { label: 'c', task: 'Gi din vurdering av filmen (Filmkritik).', solution: 'I min Filmkritik vil jeg si at dette er et mesterverk. Der Hauptdarsteller Ulrich Muhe gir en fantastisk prestasjon. Das Drehbuch er intelligent og gir et innblikk i DDR-tidens overvakingssamfunn.' },
        ],
        solution: 'Eksempel: "Das Leben der Anderen er et mesterlig drama av Regisseur Florian Henckel von Donnersmarck. Die Handlung utspiller seg i DDR i 1984. Der Hauptdarsteller Ulrich Muhe spiller en Stasi-agent. Das Drehbuch viser hvordan overvaking odelegger bade overvakere og overvakede. Min Filmkritik: en gripende og viktig film om frihet og samvittighet."',
        hints: ['Bruk ord som Regisseur, Handlung, Drehbuch, Hauptdarsteller, Filmkritik', 'En filmkritikk bor ha bade beskrivelse og vurdering'],
      },
    },
    {
      id: 'tysk-3-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-3-ex-5',
        number: '13.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var Oberhausener Manifest (1962)?',
        options: [
          { id: 'a', text: 'En erklaring der unge tyske filmskapere krevde fornyelse av tysk film', isCorrect: true },
          { id: 'b', text: 'En sensurlov som begrenset tyske filmer', isCorrect: false },
          { id: 'c', text: 'Et manifest for ekspresjonistisk stumfilm', isCorrect: false },
          { id: 'd', text: 'En avtale mellom tyske og amerikanske filmstudioer', isCorrect: false },
        ],
        solution: 'Oberhausener Manifest fra 1962 var et vendepunkt i tysk filmhistorie. 26 unge filmskapere erklarte: "Der alte Film ist tot. Wir glauben an den neuen." De avviste kommersiell underholdningsfilm og krevde kunstnerisk ambisios film som kritisk reflekterte samfunnet.',
        hints: ['Manifestet markerte starten pa "Neuer Deutscher Film"'],
      },
    },
    {
      id: 'tysk-3-13-3-note-1',
      type: 'note',
      title: 'Oppsummering: Der deutsche Film',
      content: `**Viktige punkter a huske:**

- Tysk ekspresjonistisk stumfilm (1920-tallet) revolusjonerte filmspraket
- "Metropolis" (1927) og "Nosferatu" (1922) er milepaler i filmhistorien
- Neuer Deutscher Film (1960-1980) fornyet tysk film med Fassbinder, Herzog og Wenders
- Oberhausener Manifest (1962) markerte starten pa den nye tyske filmen
- "Das Leben der Anderen" (2006) vant Oscar og er en av de viktigste tyske filmene
- Berlinale er en av verdens tre storste filmfestivaler

**Nokkelord:** der Stummfilm, der Regisseur, die Filmkritik, das Drehbuch, die Filmszene, der Neue Deutsche Film, das Filmfestival`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Stummfilm', definition: 'stumfilm - Metropolis og Nosferatu er tyske klassikere' },
    { term: 'der Regisseur', definition: 'regissor - f.eks. Fritz Lang, Fassbinder, Herzog, Wenders' },
    { term: 'die Filmkritik', definition: 'filmkritikk - analyse og vurdering av film' },
    { term: 'das Drehbuch', definition: 'manus/filmmanus (drehen = a dreie/filme + Buch = bok)' },
    { term: 'die Filmszene', definition: 'filmscene - en enkelt scene i en film' },
    { term: 'der Neue Deutsche Film', definition: 'den nye tyske filmen (1960-1980) - kunstnerisk ambisios filmbevegelse' },
    { term: 'das Filmfestival', definition: 'filmfestival - Berlinale er Tysklands storste' },
  ],
};

// ============================================================================
// Kapittel 13.4: Kulturkritik und Kunstdebatte
// ============================================================================

export const CHAPTER_TYSK_3_13_4: TextbookChapter = {
  id: 'tysk-3-13-4',
  courseId: 'tysk-3',
  chapterNumber: '13.4',
  title: 'Kulturkritik und Kunstdebatte',
  subtitle: 'Kulturkritikk og kunstdebatt',
  description: 'Laer om kunstkritikk, debatt om offentlig kunst, finansiering av kultur, kulturpolitikk, sensur og ytringsfrihet i kunsten i Tyskland.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke varierte strategier for spraeklaering, tekstskaping og kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-13-4-intro',
      type: 'text',
      content: `## Kulturkritik und Kunstdebatte

I Tyskland har kulturkritikk og kunstdebatt en lang og viktig tradisjon. Fra opplysningstiden (die Aufklarung) til i dag har tyske intellektuelle diskutert kunstens rolle i samfunnet, forholdet mellom kunst og politikk, og grensene for ytringsfrihet.

**Sentrale debatter i dag:**
- **Kunstfreiheit vs. Zensur:** Hvor gar grensene for kunstnerisk frihet? Kan kunst vaere stotende og likevel vaere beskyttet?
- **Offentliche Forderung:** Skal staten finansiere kunst? Hvem bestemmer hva som er "god" kunst?
- **Kulturpolitik:** Tysklands rike kulturliv er i stor grad offentlig finansiert - fra operahus til museer, teatre og biblioteker.
- **Leitkultur-Debatte:** Hva er "tysk kultur"? Finnes det en felles kulturell identitet i et mangfoldig samfunn?

Tyskland bruker ca. 14 milliarder euro arlig pa offentlig kulturstotte. Hvert av de 16 delstatene har sin egen kulturpolitikk, og det finnes over 80 statsstottede operahus - flere enn noe annet land i verden.`,
    },
    {
      id: 'tysk-3-13-4-def-1',
      type: 'definition',
      title: 'Vokabular: Kulturkritik und Kunstdebatte',
      content: `**Sentrale begreper:**

| Tysk | Norsk |
|------|-------|
| die Kulturkritik | kulturkritikk |
| die Kunstdebatte | kunstdebatt |
| die Kulturpolitik | kulturpolitikk |
| die Zensur | sensur |
| die Kunstfreiheit | kunstnerisk frihet |
| die offentliche Forderung | offentlig stotte/finansiering |
| der Kulturauftrag | kulturoppdraget |
| die Meinungsfreiheit | ytringsfrihet |
| der Kulturbetrieb | kulturbransjen |
| die Provokation | provokasjon |
| die Asthetik | estetikk |
| der Diskurs | diskurs, debatt |`,
    },
    {
      id: 'tysk-3-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Kunstfreiheit im Grundgesetz',
      problem: `Les utdraget fra den tyske grunnloven og svar pa sporsmalene:

"Artikel 5, Absatz 3 des Grundgesetzes: 'Kunst und Wissenschaft, Forschung und Lehre sind frei.' Dieser kurze Satz hat weitreichende Konsequenzen. Er bedeutet, dass der Staat die Kunstfreiheit nicht einschranken darf. Doch in der Praxis gibt es immer wieder Konflikte: Darf ein Kunstler andere Menschen beleidigen? Wo endet die Kunstfreiheit und wo beginnt die Verletzung der Menschenwurde?"

a) Hva sier den tyske grunnloven om kunst?
b) Hvilken praktisk konsekvens har dette?
c) Hvilke konflikter kan opsta?`,
      solution: `a) Artikkel 5, avsnitt 3 i Grundgesetz sier: "Kunst og vitenskap, forskning og undervisning er frie" (Kunst und Wissenschaft, Forschung und Lehre sind frei).

b) Den praktiske konsekvensen er at staten ikke har lov til a begrense den kunstneriske friheten (die Kunstfreiheit nicht einschranken darf).

c) Konflikter oppstar nar det er sporsmal om kunstnerisk frihet kolliderer med andre rettigheter: Har en kunstner lov til a fornærme andre (beleidigen)? Hvor slutter kunstfriheten og hvor begynner krenkelse av menneskeverdet (Verletzung der Menschenwurde)?

**Spraktips:**
- "das Grundgesetz" = grunnloven (Grund = grunn + Gesetz = lov)
- "einschranken" = a begrense, innskrenke
- "die Menschenwurde" = menneskeverd (Mensch = menneske + Wurde = verdighet)`,
    },
    {
      id: 'tysk-3-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-ex-1',
        number: '13.4.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva sier den tyske grunnloven (Grundgesetz) om kunst?',
        options: [
          { id: 'a', text: 'Kunst er fri, men ma godkjennes av staten', isCorrect: false },
          { id: 'b', text: 'Kunst og vitenskap, forskning og undervisning er frie', isCorrect: true },
          { id: 'c', text: 'Kunst er bare beskyttet hvis den er politisk narytral', isCorrect: false },
          { id: 'd', text: 'Kunsten er underlagt kulturministerens godkjennelse', isCorrect: false },
        ],
        solution: 'Artikkel 5, avsnitt 3 i Grundgesetz slår fast: "Kunst und Wissenschaft, Forschung und Lehre sind frei." Dette betyr at kunstnerisk frihet (die Kunstfreiheit) er grunnlovsfestet og ikke kan begrenses av staten.',
        hints: ['Artikkelen nevner bade kunst, vitenskap, forskning og undervisning'],
      },
    },
    {
      id: 'tysk-3-13-4-text-2',
      type: 'text',
      content: `## Offentliche Kulturfoerderung - Offentlig kulturstotte

Tyskland har et av verdens mest generose systemer for offentlig kulturstotte. Prinsippet er at kultur er et offentlig gode som alle skal ha tilgang til - ikke bare en elite.

**Det tyske kulturstoettesystemet:**
- **Bund (staten):** Finansierer nasjonale institusjoner som Stiftung Preussischer Kulturbesitz
- **Lander (delstatene):** Hovedansvaret for kulturpolitikk. Hvert land har egne teatre, museer og orkestre
- **Kommunen (kommunene):** Driver lokale kulturhus, biblioteker og musikkskoler

**I tall:**
- Over 80 offentlig finansierte operahus
- Ca. 130 profesjonelle orkestre
- Over 6.000 museer
- Ca. 820 offentlige teatre
- Totalt ca. 14 milliarder euro i arlig offentlig kulturstotte

**Debatten:**
- Kritikere mener at for mye offentlig stotte gjor kunsten avhengig av politiske beslutninger
- Tilhengere argumenterer for at kultur er et offentlig gode og at markedet alene ikke kan sikre mangfold
- Sporsmal om hvem som far stotte og hvem som bestemmer, er stadig aktuelt`,
    },
    {
      id: 'tysk-3-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Die Leitkultur-Debatte',
      problem: `Les teksten og diskuter:

"Die Leitkultur-Debatte ist seit Jahren ein heisses Thema in Deutschland. Die einen argumentieren, dass es eine gemeinsame deutsche Kultur gibt, die auf Werten wie Demokratie, Gleichberechtigung und Meinungsfreiheit basiert. Die anderen sehen den Begriff als Versuch, kulturelle Vielfalt einzuschranken und Migranten auszugrenzen. In einer globalisierten Welt stellt sich die Frage: Was bedeutet 'deutsche Kultur' uberhaupt noch?"

a) Hva handler Leitkultur-debatten om?
b) Hva argumenterer de to sidene for?
c) Hvilket sporsmal stilles til slutt?`,
      solution: `a) Leitkultur-debatten handler om hvorvidt det finnes en felles tysk kultur (eine gemeinsame deutsche Kultur) og hva den inneholder - det er et hett tema (ein heisses Thema) i Tyskland.

b) Den ene siden argumenterer for at det finnes en felles kultur basert pa verdier som demokrati (Demokratie), likestilling (Gleichberechtigung) og ytringsfrihet (Meinungsfreiheit). Den andre siden ser begrepet som et forsok pa a begrense kulturelt mangfold (kulturelle Vielfalt einzuschranken) og utestenge migranter (Migranten auszugrenzen).

c) Sporsmaliet som stilles er: Hva betyr "tysk kultur" egentlig i en globalisert verden?

**Spraktips:**
- "die Leitkultur" = ledende kultur, referansekultur (leit = ledende + Kultur)
- "ausgrenzen" = a utestenge, ekskludere (separabelt verb)
- "einschranken" = a begrense, innskrenke`,
    },
    {
      id: 'tysk-3-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-ex-2',
        number: '13.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til norsk og forklar begrepets betydning i kulturdebatten:',
        subTasks: [
          { label: 'a', task: 'die Kunstfreiheit', solution: 'Kunstnerisk frihet - grunnlovsfestet rettighet i Tyskland (Grundgesetz art. 5). Beskytter kunstnere mot sensur og statlig innblanding.' },
          { label: 'b', task: 'die offentliche Forderung', solution: 'Offentlig stotte/finansiering - Tyskland bruker ca. 14 milliarder euro arlig pa kulturstotte. Sikrer at kultur er tilgjengelig for alle.' },
          { label: 'c', task: 'die Zensur', solution: 'Sensur - forbudt i Tyskland ifølge Grundgesetz, men debatten om grensene for kunstnerisk uttrykk er stadig aktuell.' },
          { label: 'd', task: 'der Kulturauftrag', solution: 'Kulturoppdraget - ideen om at staten har et ansvar for a sikre og fremme kulturlivet for alle borgere.' },
        ],
        solution: 'a) Kunstnerisk frihet (grunnlovsfestet), b) Offentlig kulturstotte (14 mrd. euro arlig), c) Sensur (forbudt), d) Kulturoppdraget (statens ansvar for kultur)',
        hints: ['Forderung = stotte, Freiheit = frihet', 'Alle begrepene handler om forholdet mellom stat og kultur'],
      },
    },
    {
      id: 'tysk-3-13-4-text-3',
      type: 'text',
      content: `## Provokation und Kontroverse in der Kunst

Kunsten har alltid vaert en arena for provokasjon og debatt. I Tyskland har flere kunstkontroverser utlost brede offentlige diskusjoner:

**Kjente kontroverser:**
- **Documenta (Kassel):** Verdens viktigste kunstutstilling for samtidskunst. I 2022 utloste verket "People's Justice" av den indonesiske gruppen Taring Padi en stor debatt om antisemittisme i kunsten.
- **Christo og Jeanne-Claude:** Innpakningen av Reichstag (1995) var svært kontroversiell, men ble en folkefest med 5 millioner besokende.
- **Gunter Grass:** Nobelprisvinneren (2006-avsloring) innrommet a ha vaert medlem av Waffen-SS, noe som utloste stor debatt om kunst og moral.

**Sentrale sporsmal:**
- Kan stotende kunst vaere verdifull?
- Har kunstnere et moralsk ansvar?
- Bor staten sensurere kunst som provoserer?
- Hvem bestemmer hva som er "god" kunst?

Disse sporsmalene har ingen enkle svar, og debatten er en viktig del av et levende demokrati.`,
    },
    {
      id: 'tysk-3-13-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Kunst und Provokation',
      problem: `Les den korte debatten og analyser:

Person A: "Kunst muss frei sein. Auch wenn sie provoziert und schockiert. Die Kunstfreiheit ist ein Grundrecht, das nicht eingeschrankt werden darf."

Person B: "Kunstfreiheit hat Grenzen. Wenn Kunst Menschen verletzt oder Hass verbreitet, ist das keine Kunst mehr, sondern Missbrauch der Freiheit."

Person C: "Die Frage ist nicht, ob Kunst frei sein soll, sondern wer entscheidet, wo die Grenzen liegen. Der Staat? Die Kunstler selbst? Das Publikum?"

a) Hva er Person As standpunkt?
b) Hva er Person Bs motargument?
c) Hvilket nytt perspektiv bringer Person C inn?`,
      solution: `a) Person A mener at kunst ma vaere fri (frei sein), selv nar den provoserer og sjokkerer. Kunstfriheten er en grunnrettighet (Grundrecht) som ikke kan begrenses.

b) Person B argumenterer for at kunstfriheten har grenser (Grenzen). Nar kunst sarrer mennesker (Menschen verletzt) eller sprer hat (Hass verbreitet), er det ikke lenger kunst, men misbruk av frihet (Missbrauch der Freiheit).

c) Person C bringer inn sporsmaliet om hvem som bestemmer (wer entscheidet) hvor grensene gar: staten, kunstnerne selv eller publikum. Dette forskyver debatten fra om det skal vaere grenser til hvem som skal sette dem.

**Spraktips:**
- "einschranken" = a begrense (wird eingeschrankt = presens passiv)
- "der Missbrauch" = misbruk (miss- = feil- + Brauch = bruk)
- "verbreiten" = a spre (Hass verbreiten = a spre hat)`,
    },
    {
      id: 'tysk-3-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-ex-3',
        number: '13.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor mye bruker Tyskland arlig pa offentlig kulturstotte?',
        options: [
          { id: 'a', text: 'Ca. 2 milliarder euro', isCorrect: false },
          { id: 'b', text: 'Ca. 14 milliarder euro', isCorrect: true },
          { id: 'c', text: 'Ca. 50 milliarder euro', isCorrect: false },
          { id: 'd', text: 'Ca. 100 millioner euro', isCorrect: false },
        ],
        solution: 'Tyskland bruker ca. 14 milliarder euro arlig pa offentlig kulturstotte (offentliche Kulturfoerderung). Dette finansierer over 80 operahus, ca. 130 orkestre, over 6.000 museer og ca. 820 teatre - fordelt pa stat, delstater og kommuner.',
        hints: ['Tyskland har over 80 offentlig finansierte operahus - det koster mye'],
      },
    },
    {
      id: 'tysk-3-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-ex-4',
        number: '13.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort argumenterende tekst pa norsk (5-7 setninger) om hvorvidt staten bor finansiere kunst. Bruk minst 4 tyske begreper.',
        subTasks: [
          { label: 'a', task: 'Presenter problemstillingen.', solution: 'Debatten om die offentliche Forderung av kunst er aktuell i mange land. Bor Kulturpolitik inkludere statlig finansiering av kunst og kultur?' },
          { label: 'b', task: 'Presenter argumenter for offentlig stotte.', solution: 'Tilhengere mener at der Kulturauftrag krever at staten sikrer tilgang til kunst for alle. Uten offentlig stotte ville mange teatre, museer og die Oper vaere utilgjengelige for vanlige folk.' },
          { label: 'c', task: 'Presenter motargumenter og konkluder.', solution: 'Kritikere frykter at offentlig stotte kan true die Kunstfreiheit fordi politikere far makt over kunsten. Likevel mener jeg at fordelene overveier ulempene.' },
        ],
        solution: 'Eksempel: "Die offentliche Forderung av kunst er en viktig del av tysk Kulturpolitik. Uten statlig stotte ville mange Opern og teatre matte stenge. Der Kulturauftrag sikrer at alle borgere har tilgang til kultur, ikke bare de rike. Kritikere mener det kan true die Kunstfreiheit. Likevel viser det tyske eksemplet at offentlig stotte kan fungere uten a begrense kunsten."',
        hints: ['Bruk argumentasjonsord: einerseits/andererseits, trotzdem, dennoch', 'Presenter bade for- og motargumenter'],
      },
    },
    {
      id: 'tysk-3-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-13-4-ex-5',
        number: '13.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er "die Leitkultur-Debatte"?',
        options: [
          { id: 'a', text: 'En debatt om Tysklands ledende rolle i europeisk kulturpolitikk', isCorrect: false },
          { id: 'b', text: 'En debatt om hvorvidt det finnes en felles tysk kultur og hva den inneholder', isCorrect: true },
          { id: 'c', text: 'En debatt om sensur av kontroversielle kunstverk', isCorrect: false },
          { id: 'd', text: 'En debatt om finansiering av offentlige kulturinstitusjoner', isCorrect: false },
        ],
        solution: 'Die Leitkultur-Debatte handler om hvorvidt det finnes en felles tysk referansekultur. Tilhengere mener den baseres pa verdier som demokrati og ytringsfrihet. Kritikere ser begrepet som ekskluderende overfor kulturelt mangfold.',
        hints: ['Leit = ledende, Kultur = kultur - altsaa "ledende kultur" eller "referansekultur"'],
      },
    },
    {
      id: 'tysk-3-13-4-note-1',
      type: 'note',
      title: 'Oppsummering: Kulturkritik und Kunstdebatte',
      content: `**Viktige punkter a huske:**

- Kunstnerisk frihet (die Kunstfreiheit) er grunnlovsfestet i Tyskland
- Tyskland bruker ca. 14 milliarder euro arlig pa offentlig kulturstotte
- Leitkultur-debatten handler om felles tysk kultur og identitet
- Kunst som provoserer utloser viktige debatter om grensene for frihet
- Forholdet mellom kunst, politikk og sensur er et stadig aktuelt tema
- Documenta i Kassel er verdens viktigste utstilling for samtidskunst

**Nokkelord:** die Kulturkritik, die Kunstdebatte, die Kulturpolitik, die Zensur, die Kunstfreiheit, die offentliche Forderung, der Kulturauftrag`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Kulturkritik', definition: 'kulturkritikk - analyse og vurdering av kultur og samfunn' },
    { term: 'die Kunstdebatte', definition: 'kunstdebatt - offentlig diskusjon om kunstens rolle og grenser' },
    { term: 'die Kulturpolitik', definition: 'kulturpolitikk - statlig politikk for kultur og kunst' },
    { term: 'die Zensur', definition: 'sensur - undertrykking av ytringer, forbudt i Tyskland' },
    { term: 'die Kunstfreiheit', definition: 'kunstnerisk frihet - grunnlovsfestet i Grundgesetz art. 5' },
    { term: 'die offentliche Forderung', definition: 'offentlig stotte/finansiering av kultur' },
    { term: 'der Kulturauftrag', definition: 'kulturoppdraget - statens ansvar for a fremme kulturlivet' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra kap 11-13
// ============================================================================

export const TYSK_3_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_TYSK_3_11_1,
  CHAPTER_TYSK_3_11_2,
  CHAPTER_TYSK_3_11_3,
  CHAPTER_TYSK_3_11_4,
  CHAPTER_TYSK_3_12_1,
  CHAPTER_TYSK_3_12_2,
  CHAPTER_TYSK_3_12_3,
  CHAPTER_TYSK_3_12_4,
  CHAPTER_TYSK_3_13_1,
  CHAPTER_TYSK_3_13_2,
  CHAPTER_TYSK_3_13_3,
  CHAPTER_TYSK_3_13_4,
];

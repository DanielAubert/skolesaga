/**
 * Norsk VG3 - Språkhistorie
 *
 * Følger LK20 kompetansemål:
 * - gjøre rede for utviklingen av norsk språk fra urnordisk til norrønt
 * - gjøre rede for utviklingen av de to norske skriftspråkene og drøfte
 *   utfordringer og muligheter i det norske språksamfunnet i dag
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SPRÅKHISTORIE OG SPRÅKPOLITIKK
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 Fra urnordisk til norrønt
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_6_1: TextbookChapter = {
  id: 'norsk-vg3-6-1',
  courseId: 'norsk-vg3',
  chapterNumber: '6.1',
  title: 'Fra urnordisk til norrønt',
  description: 'Norsk språkhistorie fra de eldste tidene til vikingtiden - runene, urnordisk og norrønt.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for utviklingen av norsk språk fra urnordisk til norrønt',
    'sammenligne særtrekk ved norsk med minst ett annet språk og reflektere over hva dette forteller om språk som fenomen',
  ],
  content: [
    {
      id: 'norsk-vg3-6-1-intro',
      type: 'text',
      content: `## Norsk språkhistorie - de lange linjene

Språket du snakker og skriver i dag har en historie som strekker seg over 2000 år tilbake. Fra de eldste runeinnskriftene til dagens nynorsk og bokmål har norsk gjennomgått store forandringer. Å forstå denne historien gir innsikt i hvorfor språket er som det er - og hvorfor vi har to skriftspråk.

**Indoeuropeisk - den felles stammen:**

Norsk tilhører den germanske språkfamilien, som igjen er en del av den indoeuropeiske språkfamilien. De indoeuropeiske språkene stammer fra et felles urspråk som ble snakket for kanskje 5000-6000 år siden.

Slektskapet kan sees i grunnleggende ord:
- Norsk «mor» - engelsk «mother» - tysk «Mutter» - latin «mater» - sanskrit «matar»
- Norsk «tre» - engelsk «three» - tysk «drei» - latin «tres» - sanskrit «trayas»

Den germanske grenen skilte seg ut rundt 500 f.Kr. og utviklet seg til nordgermansk (skandinaviske språk), vestgermansk (engelsk, tysk, nederlandsk) og østgermansk (gotisk, utdødd).

**Urnordisk (ca. 200-700 e.Kr.):**

Den eldste formen for nordisk språk vi har dokumentert kalles urnordisk. Vi kjenner den fra runeinnskrifter på steiner, våpen og smykker.

Urnordisk var felles for hele Skandinavia. En person fra det som nå er Norge kunne forstå en fra det som nå er Sverige eller Danmark - det var i praksis ett språk.

**Kjennetegn ved urnordisk:**
- Komplisert grammatikk med mange kasus (nominativ, akkusativ, dativ, genitiv, instrumentalis)
- Lange ord som senere ble kortet ned
- Eksempel: urnordisk «gastiz» (gjest) → norrønt «gestr» → moderne «gjest»

**De eldste runene:**

Runene var det eldste skriftsystemet i Norden. Den eldste runerekken, «futharken» (oppkalt etter de seks første runene: f-u-þ-a-r-k), hadde 24 tegn.

Viktige runeinnskrifter fra Norge:
- **Øvre Stabu-spydspissen** (ca. 180 e.Kr.): «raunijaz» - muligens «prøveren» eller «den erfarne»
- **Tunestenen** (ca. 400 e.Kr.): Lengre innskrift som viser utviklet språkbruk
- **Eggjastenen** (ca. 700 e.Kr.): Viser overgangen til norrønt

**Synkopetiden (500-700 e.Kr.):**

I denne perioden skjedde store lydendringer. Trykksvake stavelser falt bort eller ble svekket. Dette er «synkope» - bortfall av vokaler.

Eksempler:
- «HaþuwulfaR» → «Hálfr» (mannsnavn)
- «gastiz» → «gestr» (gjest)
- «hariwulfaz» → «Herjólfr» (mannsnavn)

Disse endringene gjorde ordene kortere, men førte også til nye konsonantforbindelser og omlyder som preger norsk fremdeles.

**Overgangen til norrønt:**

Rundt år 700 regner vi overgangen fra urnordisk til norrønt. Samtidig begynte forskjeller mellom øst- og vestnordisk å utvikle seg - forløperne til dagens skandinaviske språk.`,
    },
    {
      id: 'norsk-vg3-6-1-def-1',
      type: 'definition',
      title: 'Urnordisk (ca. 200-700 e.Kr.)',
      content: `**Urnordisk** er den eldste dokumenterte formen for nordisk språk.

**Tidsperiode:**
Ca. 200-700 e.Kr.

**Kilder:**
Runeinnskrifter på steiner, våpen, smykker og andre gjenstander.

**Kjennetegn:**
- Felles for hele Skandinavia
- Kompleks grammatikk med mange kasus
- Lange ord med mange stavelser
- Den eldre futharken med 24 runer

**Lydlige trekk:**
- Bevarte endelser som senere falt bort
- A-lyd der vi nå har æ/e (omlyd hadde ikke skjedd)
- Bevarte diftonger (tvelyder)

**Viktige innskrifter:**
- Øvre Stabu (ca. 180)
- Tunestenen (ca. 400)
- Einangsteinen (ca. 400)
- Rökstenen i Sverige (ca. 800, overgangstid)

**Endringer mot norrønt:**
- Synkope (bortfall av trykksvake vokaler)
- Omlyd (vokalharmoni)
- Bryting (vokalendringer)
- Kortere ord, mer komplekse konsonantgrupper`,
    },
    {
      id: 'norsk-vg3-6-1-def-2',
      type: 'definition',
      title: 'Norrønt (ca. 700-1350)',
      content: `**Norrønt** er fellesbetegnelsen på de skandinaviske språkene i vikingtid og middelalder.

**Tidsperiode:**
Ca. 700-1350 e.Kr.

**Varianter:**
- **Vestnordisk:** Norge og Island (senere også Færøyene, Grønland)
- **Østnordisk:** Danmark og Sverige

**Kjennetegn:**
- Fire kasus: nominativ, akkusativ, dativ, genitiv
- Tre grammatiske kjønn: hankjønn, hunkjønn, intetkjønn
- Sterke og svake bøyninger
- Rik vokalisme med omlyder og diftonger

**Skrift:**
- Runer fortsatte i bruk, men med den yngre futharken (16 tegn)
- Fra ca. 1100: latinsk alfabet tas i bruk

**Viktige tekster:**
- Eddadiktene
- Sagalitteraturen
- Kongespeilet
- Lovtekster (Gulatingsloven, Frostatingsloven)

**Vestnordisk vs. østnordisk:**
Eksempel: norrønt «steinn» (stein)
- Vestnordisk beholdt diftongen: norsk/islandsk «stein»
- Østnordisk monoftongering: dansk/svensk «sten»`,
    },
    {
      id: 'norsk-vg3-6-1-def-3',
      type: 'definition',
      title: 'Runene',
      content: `**Runene** var det eldste skriftsystemet i Norden.

**Den eldre futharken (ca. 200-700):**
24 tegn, brukt i urnordisk tid
ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛟ ᛞ

**Den yngre futharken (ca. 700-1100):**
16 tegn, brukt i vikingtiden
ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ

**Opprinnelse:**
Usikker. Trolig påvirket av latinsk og/eller gresk alfabet, tilpasset rissing i tre og stein.

**Bruk:**
- Magiske formler og beskyttelse
- Minnetekster på bautasteiner
- Eiermerker på gjenstander
- Korte meldinger

**Myten om Odin:**
I norrøn mytologi oppdaget Odin runene da han hang i Yggdrasil i ni netter. Dette viser runenes status som hellige tegn.

**Runene forsvinner:**
Med kristendommen og det latinske alfabetet ble runene gradvis fortrengt, men de fortsatte i bruk i noen sammenhenger helt til 1800-tallet.`,
    },
    {
      id: 'norsk-vg3-6-1-example-1',
      type: 'example',
      title: 'Analyse: Tunestenen (ca. 400 e.Kr.)',
      problem: `Tunestenen fra Østfold er en av de lengste urnordiske runeinnskriftene. Hva forteller den oss om språket?

Innskriften (i latinsk transkripsjon):
«ek wiwaR after wōdurīdē witadahalaiban worahto [rūnōR]»`,
      solution: `**Oversettelse:**
«Jeg, Wīwar, etter/til minne om Wōdurīd, brødherren, gjorde/risset [runene]»

**Språklig analyse:**

**Ordene:**
- **ek** = jeg (sammenlign: islandsk «ég», tysk «ich», engelsk «I»)
- **wiwaR** = Wīwar (mannsnavn, med nominativ-R)
- **after** = etter, til minne om
- **wōdurīdē** = Wōdurīd (mannsnavn, dativ)
- **witadahalaiban** = brødherre/forsørger (sammensatt ord)
- **worahto** = gjorde, laget (fortidsform)

**Kjennetegn på urnordisk:**
1. **Nominativ -R:** «wiwaR» - denne endelsen forsvant i norrønt
2. **Lange sammensatte ord:** «witadahalaiban» = «vit-ada-halaiban»
3. **Dativendelse -ē:** viser komplekst kasussystem
4. **Bevart u i «wōdurīdē»:** blir senere «o» eller bortfaller

**Kulturhistorisk betydning:**
Innskriften viser at skriftbruk var knyttet til minne og ære. Å reise en runestein var en prestisjefull handling.

**Sammenligning med norrønt:**
De samme ordene på norrønt ville vært kortere og med andre endelser:
- «ek» → «ek» (uendret)
- «wiwaR» → «Vívarr» eller lignende
- «worahto» → «orta» (mye kortere!)`,
    },
    {
      id: 'norsk-vg3-6-1-example-2',
      type: 'example',
      title: 'Lydendringer: Fra urnordisk til norrønt',
      problem: `Vis hvordan lydendringer forandret språket fra urnordisk til norrønt.`,
      solution: `**De viktigste lydendringene:**

**1. Synkope (bortfall av trykksvake vokaler):**
| Urnordisk | Norrønt | Betydning |
|-----------|---------|-----------|
| gastiz | gestr | gjest |
| haþuwulfaR | Hálfr | mannsnavn |
| hariwulfaz | Herjólfr | mannsnavn |
| dōmiR | dómr | dom |

**2. Omlyd (vokalharmoni):**
En vokal i en stavelse påvirkes av vokalen i neste stavelse.

*i-omlyd:* a → e foran i/j
- «gastiz» → «gestr» (a → e pga. i)
- «sandijan» → «senda» (a → e)

*u-omlyd:* a → ǫ foran u
- «langu» → «lǫng» (lang, hunkjønn)

**3. Bryting:**
e → ja foran a i neste stavelse
- «erþō» → «jǫrð» (jord)
- «hertō» → «hjarta» (hjerte)

**4. Assimilasjon:**
Konsonanter påvirker hverandre
- «-nR» → «-nn»: «mannR» → «maðr» → «maðrinn»

**Konsekvenser:**
- Kortere ord
- Mer komplekse konsonantgrupper
- Vokalsystemet endret seg drastisk
- Grunnlaget for moderne skandinaviske språk ble lagt`,
    },
    {
      id: 'norsk-vg3-6-1-tip-1',
      type: 'tip',
      title: 'Norrønt i dag',
      content: `**Islandsk - det levende norrøne:**

Islandsk har bevart så mye av det norrøne språket at islendinger kan lese sagaene i original uten store problemer. Dette gjør islandsk til en «tidskapsel».

**Hvorfor bevarte islandsk så mye?**
- Isolasjon på en øy
- Sterk litterær tradisjon
- Bevisst purisme (unngår lånord)
- Få språkkontakter

**Sammenligning:**
| Norrønt | Islandsk | Norsk |
|---------|----------|-------|
| hestr | hestur | hest |
| bók | bók | bok |
| vatn | vatn | vann |
| maðr | maður | mann |

**Spor av norrønt i moderne norsk:**
- Sterke verb: «synge - sang - sunget» (gammelt mønster)
- Uregelmessige former: «mann - menn» (i-omlyd)
- Ordforråd: «fjord», «ting», «lov»
- Stedsnavn: «-heim», «-vin», «-stad»

**Rekonstruksjon:**
Ved å sammenligne skandinaviske språk og islandsk kan vi rekonstruere hvordan norrønt ble uttalt. Det finnes til og med norrøne språkkurs!`,
    },
    {
      id: 'norsk-vg3-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar lydendringene fra urnordisk til norrønt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er synkope, og hvilke konsekvenser fikk den?',
            solution: 'Synkope er bortfall av trykksvake vokaler. Ordene ble kortere, men fikk mer komplekse konsonantgrupper. Eksempel: «gastiz» → «gestr».',
          },
          {
            label: 'b',
            task: 'Forklar i-omlyd med eksempler.',
            solution: 'I-omlyd er når en a-lyd blir til e foran i eller j i neste stavelse. Eksempel: «sandijan» → «senda», «gastiz» → «gestr» (a → e).',
          },
          {
            label: 'c',
            task: 'Hvorfor har moderne norsk fortsatt spor av disse lydendringene?',
            solution: 'Endringene skapte vekslingen vi ser i ord som «mann - menn» (i-omlyd) og sterke verb som «synge - sang». Disse mønstrene har overlevd i 1000+ år.',
          },
        ],
        solution: 'Oppgaven krever forståelse av historisk fonologi og evne til å se sammenhenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign norrønt med moderne skandinaviske språk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor kan islendinger lese norrøne tekster, mens nordmenn ikke kan?',
            solution: 'Islandsk har bevart mye av det norrøne på grunn av isolasjon og bevisst purisme. Norsk har gjennomgått store endringer, særlig i kasussystemet og uttale.',
          },
          {
            label: 'b',
            task: 'Finn tre ord som viser slektskapet mellom norrønt og moderne norsk.',
            solution: 'Eksempler: norrønt «vatn» → norsk «vann»; «hestr» → «hest»; «konungr» → «konge»; «bók» → «bok».',
          },
        ],
        solution: 'Oppgaven krever evne til språklig sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk stedsnavn i ditt nærområde.',
        hints: [
          'Finn stedsnavn som ender på -heim, -vin, -stad, -land, -rud',
          'Hva betyr disse endelsene?',
          'Hva forteller stedsnavnene om bosettingshistorien?',
        ],
        solution: 'Stedsnavn gir innblikk i språkhistorien og bosettingsmønstrene. De eldste navnene (som -vin, -heim) viser hvor det tidligst var bosetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en kort tekst om hva du har lært om urnordisk og norrønt.',
        hints: [
          'Hva visste du fra før?',
          'Hva var overraskende?',
          'Hvordan hjelper dette deg å forstå moderne norsk?',
        ],
        solution: 'Refleksjonsoppgave som skal vise evne til å bearbeide og anvende kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Mellomnorsk og språkendringer
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_6_2: TextbookChapter = {
  id: 'norsk-vg3-6-2',
  courseId: 'norsk-vg3',
  chapterNumber: '6.2',
  title: 'Mellomnorsk og dansketiden',
  description: 'Norsk språkhistorie fra svartedauden til 1814 - hvordan dansk ble Norges skriftspråk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for utviklingen av norsk språk fra urnordisk til norrønt',
    'gjøre rede for utviklingen av de to norske skriftspråkene',
  ],
  content: [
    {
      id: 'norsk-vg3-6-2-intro',
      type: 'text',
      content: `## Fra norrønt til dansk - språket i krisetid

Perioden fra ca. 1350 til 1814 var dramatisk for norsk språk. Svartedauden desimerte befolkningen, unionen med Danmark førte til at dansk ble skriftspråk, og det norrøne skriftspråket døde ut. Likevel levde norsk talemål videre i dialektene - og ventet på sin renessanse.

**Mellomnorsk (ca. 1350-1525):**

Mellomnorsk er betegnelsen på norsk språk i senmiddelalderen, fra svartedauden til reformasjonen. Perioden er preget av rask forenkling og forfall i skriftspråket.

**Svartedauden (1349-1350):**

Svartedauden tok livet av kanskje halvparten av Norges befolkning. Konsekvensene for språket var enorme:
- Mange prester og lærde døde, og med dem kompetansen til å skrive norrønt korrekt
- Kirkens og statens administrasjon kollapset
- Færre dokumenter ble skrevet
- Kvaliteten på det som ble skrevet, sank drastisk

**Språklige endringer i mellomnorsk:**

1. **Kasussystemet forenkles:**
   - Dativ og genitiv glir sammen
   - Forskjellen mellom kasus markeres mindre konsekvent
   - Preposisjoner overtar funksjonene til kasus

2. **Bøyningssystemet forenkles:**
   - Verbbøyningen blir enklere
   - Personendelser i verb forsvinner gradvis

3. **Uttaleendringer:**
   - Mange konsonanter faller bort i utlyd
   - Vokalene endres

**Unionen med Danmark:**

I 1380 fikk Norge og Danmark felles konge. I 1397 ble Kalmarunionen opprettet med Sverige. Etter at Sverige brøt ut (1523), fortsatte Norge i union med Danmark til 1814.

**Konsekvenser for språket:**
- Administrasjonen ble styrt fra København
- Dansk ble stadig mer brukt i offisielle dokumenter
- Norske embetsmenn måtte lære dansk
- Det danske språket hadde høyere prestisje

**Reformasjonen (1537):**

Reformasjonen var et vendepunkt. Den danske bibelen (oversatt fra tysk via latin) ble innført i Norge. Kirkens språk ble dansk. Skolen underviste på dansk. Det norrøne skriftspråket var effektivt dødt.

**Dansketiden (1537-1814):**

I disse nesten 300 årene var dansk det eneste skriftspråket i Norge:
- Alle offisielle dokumenter var på dansk
- All litteratur var på dansk
- Alle bøker, aviser, tidsskrifter var på dansk
- Skolen og universitetet brukte dansk

**Men talemålet levde videre:**

Nordmenn fortsatte å snakke sine dialekter. Den store avstanden mellom skrift (dansk) og tale (norske dialekter) ble grunnlaget for det som skulle komme: to norske skriftspråk.`,
    },
    {
      id: 'norsk-vg3-6-2-def-1',
      type: 'definition',
      title: 'Mellomnorsk',
      content: `**Mellomnorsk** er betegnelsen på norsk språk i perioden ca. 1350-1525.

**Tidsavgrensning:**
- Begynnelse: Svartedauden (1349-50)
- Slutt: Reformasjonen (1537)

**Kjennetegn:**
- Rask forenkling av grammatikken
- Kasussystemet bryter sammen
- Bøyningssystemet forenkles
- Økende innslag av lavtysk lånord
- Synkende skriftspråklig standard
- Overgang til dansk i administrasjon

**Årsaker til endringene:**
- Svartedauden drepte mange lærde
- Administrasjonen kollapset
- Kontakten med Danmark økte
- Hanseatenes innflytelse (lavtysk)

**Kilder:**
- Diplomer (juridiske dokumenter)
- Kirkelige tekster
- Private brev
- (Kvaliteten varierer sterkt)

**Viktige lånord fra lavtysk i denne perioden:**
- «arbeid» (lavtysk «arbeit»)
- «betale» (lavtysk «betalen»)
- «handel» (lavtysk «handel»)
- «pris» (lavtysk «pris»)
- «snakke» (lavtysk «snacken»)`,
    },
    {
      id: 'norsk-vg3-6-2-def-2',
      type: 'definition',
      title: 'Lavtysk innflytelse',
      content: `**Lavtysk** (også kalt plattysk) hadde enorm innflytelse på skandinaviske språk i senmiddelalderen.

**Bakgrunn:**
Hansaforbundet dominerte handelen i Nord-Europa. Tyske kjøpmenn etablerte seg i Bergen og andre byer. Lavtysk ble handelens språk.

**Typer lånord:**

**Handel og økonomi:**
- betale, pris, handel, kjøpmann, regning

**Håndverk:**
- arbeid, skomaker, snekker, bakermester

**Sosiale forhold:**
- herre, frue, jomfru, knekt

**Abstrakte begreper:**
- plikt, makt, kraft, art, skikk

**Prefikser og suffikser:**
- for- (forstå, forsøke)
- be- (betale, besøke)
- an- (ankomme, anvende)
- -het (kjærlighet, frihet)
- -else (fristelse, redsel)

**Omfang:**
Kanskje 30-40% av ordforrådet i moderne norsk har lavtysk opprinnelse. Dette gjelder særlig bokmål, mens nynorsk har beholdt flere nordiske ord.

**Eksempel på forskjell:**
- Bokmål «farge» ← lavtysk «farwe»
- Nynorsk «farge» (også) eller «lit» ← norrønt «litr»`,
    },
    {
      id: 'norsk-vg3-6-2-example-1',
      type: 'example',
      title: 'Analyse: Språkendringer gjennom et dokument',
      problem: `Sammenlign disse tekstutdragene fra ulike perioder. Hva viser de om språkutviklingen?

**Norrønt (ca. 1200):**
«Þat er upphaf laga várrra at vér skulum lúta austr ok biðja til ins helga Krists»

**Mellomnorsk (ca. 1400):**
«Þæt ær ophaw laga worra at wi skulom luta austr oc bidhia til hins hælga Krists»

**Dansk-norsk (ca. 1600):**
«Det er vor Lovs Begyndelse at vi skulle bøie os mod Øst og bede til den hellige Kristus»`,
      solution: `**Analyse av endringene:**

**Fra norrønt til mellomnorsk:**
- «Þat» → «Þæt» (vokalendring)
- «upphaf» → «ophaw» (forenkling av konsonantgruppe)
- «várrra» → «worra» (enklere skrivemåte)
- «vér» → «wi» (formforenkling)
- «skulum» → «skulom» (endret vokal)

Skriveren behersker ikke lenger det klassiske norrøne, men teksten er fortsatt gjenkjennelig norsk.

**Fra mellomnorsk til dansk-norsk:**
- Helt annet språk visuelt
- Danske ord: «Lovs Begyndelse» i stedet for «laga upphaf»
- Dansk syntaks og ordstilling
- Danske bøyningsformer

**Hva viser dette?**
1. Språkendring er gradvis - mellomnorsk er et mellomstadium
2. Overgangen til dansk var ikke bare et skifte, men en prosess
3. De grammatiske endringene (kasusforfall, bøyningsforenkling) begynte før dansk tok over
4. Dansk erstattet ikke norsk plutselig, men tok over funksjonen til et allerede svekket skriftspråk

**Det underliggende:**
Selv om skriftspråket ble dansk, fortsatte folk å snakke norske dialekter. Gapet mellom skrift og tale ble dermed enormt.`,
    },
    {
      id: 'norsk-vg3-6-2-tip-1',
      type: 'tip',
      title: 'Dialektene bevarte norsk',
      content: `**Talemålet i dansketiden**

Selv om skriftspråket var dansk, snakket nordmenn norsk. Dialektene førte det norske videre.

**Geografisk isolasjon:**
Fjellene og fjordene isolerte bygdene fra hverandre - og fra Danmark. Dialektene utviklet seg relativt uforstyrret.

**Sosiale forhold:**
Bøndene - det store flertallet - hadde lite kontakt med det danske skriftspråket. De verken leste eller skrev mye.

**Hva ble bevart?**
- Norrøne ord som forsvant i dansk
- Grammatiske trekk (som dativ i noen dialekter)
- Uttale som lå nærmere norrønt
- Lokale særtrekk

**Eksempler på bevaring:**
- Dativ i setesdal: «i stogo» (i stuen)
- Tjukk l i østnorsk: «soL» uttalt med retrofleks
- Diftonger: «stein» (ikke «sten» som i dansk)
- Norrøne ord: «ku» (ikke «ko»), «auga» (ikke «øye»)

**Grunnlaget for nynorsk:**
Ivar Aasen reiste rundt og dokumenterte dialektene. Han fant at de inneholdt et felles nordisk språk som lå under variasjonen. Dette ble grunnlaget for nynorsk.

**Paradokset:**
Dansketiden som nesten utslettet norsk skriftspråk, førte også til at dialektene ble bevart som «norsk» av folket. Uten dette hadde ikke landsmål vært mulig.`,
    },
    {
      id: 'norsk-vg3-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar overgangen fra norrønt til dansk skriftspråk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke faktorer førte til at det norrøne skriftspråket døde ut?',
            solution: 'Svartedauden (tap av lærde), unionen med Danmark (dansk administrasjon), reformasjonen (dansk bibeløversettelse), og manglende nasjonal elite som opprettholdt norsk.',
          },
          {
            label: 'b',
            task: 'Hvorfor overlevde norsk talemål selv om skriftspråket ble dansk?',
            solution: 'Geografisk isolasjon (fjell, fjorder), sosiale forhold (bøndene leste ikke), og manglende behov for å endre talemål i dagliglivet.',
          },
        ],
        solution: 'Oppgaven krever forståelse av historiske og sosiale faktorer bak språkendring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Undersøk lavtyske lånord i moderne norsk.',
        hints: [
          'Finn minst 10 ord som er lånt fra lavtysk',
          'Hvilke områder av livet dekker de?',
          'Finnes det norske/norrøne alternativer?',
          'Bruker bokmål og nynorsk ulike ord?',
        ],
        solution: 'Oppgaven krever ordundersøkelse og refleksjon over språkkontakt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter: Hva hadde skjedd om Norge ikke hadde vært i union med Danmark?',
        hints: [
          'Ville vi hatt ett eller to skriftspråk?',
          'Hvordan ville norsk språk sett ut?',
          'Sammenlign med islandsk',
          'Husk at Sverige også hadde union med Danmark',
        ],
        solution: 'Kontrafaktisk drøfting som krever historisk forståelse og spekulativ tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 De to norske skriftspråkene
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_6_3: TextbookChapter = {
  id: 'norsk-vg3-6-3',
  courseId: 'norsk-vg3',
  chapterNumber: '6.3',
  title: 'De to norske skriftspråkene',
  description: 'Hvordan Norge fikk to skriftspråk - Ivar Aasen, fornorskning og språkdebatten.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for utviklingen av de to norske skriftspråkene og drøfte utfordringer og muligheter i det norske språksamfunnet i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg3-6-3-intro',
      type: 'text',
      content: `## To skriftspråk - én nasjon

Norge er et av få land i verden med to offisielle skriftspråk: bokmål og nynorsk. Denne situasjonen har røtter i 1800-tallets nasjonsbygging og språkdebatt. Hvorfor fikk vi to skriftspråk, og hvorfor har vi dem fortsatt?

**Bakgrunnen: 1814 og den nye nasjonen**

Da Norge løsrev seg fra Danmark i 1814, arvet vi det danske skriftspråket. Den nye nasjonen hadde et identitetsproblem: Skulle vi fortsette med et språk som minnet om undertrykkelsen, eller skape noe eget?

To hovedsyn utviklet seg:

**1. Fornorskningslinjen:**
Gradvis fornorske det danske skriftspråket ved å ta inn norske ord og former. Dette var «den dannede dagligtales» linje - språket til embetsmenn og borgerskap i byene.

**2. Landsmålslinjen:**
Skape et nytt skriftspråk basert på de norske dialektene, som hadde bevart mer av det norrøne. Dette var Ivar Aasens prosjekt.

**Ivar Aasen (1813-1896):**

Ivar Aasen var en bondegutt fra Sunnmøre som lærte seg latin, gresk og andre språk på egen hånd. Han ble fascinert av dialektene og begynte å samle inn og systematisere dem.

Gjennom omfattende reiser over hele landet dokumenterte han dialektene og påviste at de hadde et felles system - de var ikke bare «fordervet dansk» som mange trodde, men videreføring av det norrøne.

**Aasens verk:**
- «Det norske Folkesprogs Grammatik» (1848)
- «Ordbog over det norske Folkesprog» (1850)
- «Norsk Grammatik» (1864)
- «Norsk Ordbog» (1873)

På grunnlag av dette skapte han «landsmål» - et skriftspråk som kombinerte trekk fra dialektene med røtter i norrønt.

**Knud Knudsen (1812-1895):**

Parallelt arbeidet Knud Knudsen for å fornorske det danske skriftspråket. Han ville ta utgangspunkt i «den dannede dagligtale» - talespråket til de utdannede i byene - og gradvis fjerne danske særtrekk.

Knudsens linje førte til det som ble «riksmål» og senere «bokmål».

**Jamstillingsvedtaket 1885:**

I 1885 vedtok Stortinget at de to skriftspråkene skulle være likestilte. Dette var en seier for landsmålsbevegelsen og etablerte prinsippet om to offisielle skriftspråk som fortsatt gjelder.

**1900-tallet: Rettskrivningsreformer og strid**

Gjennom 1900-tallet gjennomgikk begge skriftspråkene store endringer gjennom rettskrivningsreformer (1907, 1917, 1938, 1959, 1981, 2005 for bokmål; 1901, 1910, 1917, 1938, 1959, 2012 for nynorsk).

Et sentralt mål var «samnorsk» - å bringe språkene nærmere hverandre. Dette møtte sterk motstand, særlig fra riksmålshold. Samnorsk-tanken ble offisielt forlatt på 1960-70-tallet.

**Navnene:**
- 1929: «Riksmål» ble offisielt «bokmål», «landsmål» ble «nynorsk»
- «Riksmål» lever videre som betegnelse på en mer konservativ bokmålsform

**I dag:**

Norge har fortsatt to likestilte skriftspråk. Ca. 87% har bokmål som hovedmål, ca. 13% har nynorsk. Nynorsken står sterkest på Vestlandet.

Debatten om skriftspråkene er blitt mindre intens, men spørsmål om sidemålsundervisning, nynorskens stilling i medier, og språkpolitikk diskuteres fortsatt.`,
    },
    {
      id: 'norsk-vg3-6-3-def-1',
      type: 'definition',
      title: 'Ivar Aasen (1813-1896)',
      content: `**Ivar Andreas Aasen** var språkforsker, dikter og skaperen av landsmål (nynorsk).

**Liv:**
- Født 5. august 1813 på Åsen, Ørsta, Sunnmøre
- Bondebakgrunn, selvlært
- Støttet av Det Kongelige Norske Videnskabers Selskab
- Bodde i Kristiania fra 1847
- Døde 23. september 1896

**Hovedverk:**
- «Det norske Folkesprogs Grammatik» (1848)
- «Ordbog over det norske Folkesprog» (1850)
- «Prøver af Landsmaalet i Norge» (1853)
- «Norsk Grammatik» (1864)
- «Norsk Ordbog» (1873)
- Dikt og teaterstykker på landsmål

**Metode:**
Aasen reiste landet rundt og samlet inn dialektformer systematisk. Han påviste at dialektene hadde et felles system og stammet fra norrønt. På dette grunnlaget konstruerte han et normert skriftspråk.

**Prinsipp:**
Landsmålet skulle bygge på de dialektformene som lå nærmest norrønt og som var felles for flest dialekter. Det skulle være et demokratisk språk for hele folket.

**Betydning:**
Aasen ga nordmenn et alternativ til dansk og skapte grunnlaget for nynorsk. Hans systematiske arbeid var banebrytende i språkvitenskapen.

**Sitat:**
«Det norske Folkesprog er et selvstændigt Sprog med en egen Grammatik og et rigt Ordforraad.»`,
    },
    {
      id: 'norsk-vg3-6-3-def-2',
      type: 'definition',
      title: 'Bokmål og nynorsk',
      content: `**Bokmål:**
- Utviklet fra dansk gjennom gradvis fornorskning
- Bygger på «den dannede dagligtale» i byene
- Hovedmål for ca. 87% av befolkningen
- Dominerer i Oslo og de fleste byer
- Har to hovednormer: moderat og konservativt (riksmål)

**Nynorsk:**
- Utviklet av Ivar Aasen fra norske dialekter
- Bygger på fellestrekk i dialektene med røtter i norrønt
- Hovedmål for ca. 13% av befolkningen
- Sterkest på Vestlandet, i fjellbygdene og Nord-Norge
- Har gjennomgått flere rettskrivningsreformer

**Forskjeller:**

| Bokmål | Nynorsk |
|--------|---------|
| boken | boka |
| huset | huset |
| spiste | åt |
| ikke | ikkje |
| hva | kva |
| og | og |
| jeg | eg |

**Likestilling:**
Begge språkene er offisielle og likestilte. Elever skal lære begge (hoved- og sidemål). Offentlige institusjoner må svare på det språket de blir tilskrevet på.

**Diskusjon:**
Forholdet mellom språkene er omdiskutert. Noen mener nynorsken bør styrkes, andre at sidemålsordningen bør avskaffes. Debatten handler om identitet, demokrati og praktiske hensyn.`,
    },
    {
      id: 'norsk-vg3-6-3-def-3',
      type: 'definition',
      title: 'Språklige rettskrivningsreformer',
      content: `**Viktige rettskrivningsreformer:**

**1907 (riksmål/bokmål):**
Første store fornorskning. Norske former som «nu», «efter», «sne» ble tillatt ved siden av danske former.

**1917 (begge):**
Stor reform som bragte språkene nærmere hverandre. Mange valgfrie former. Kontroversielt.

**1938 (begge):**
Radikal samnorsk-reform. Mange tradisjonelle riksmålsformer ble fjernet fra bokmål. Utløste «foreldreaksjonen» og lærebokstrid.

**1959 (begge):**
Læreboknormalen innført - strengere norm for skolebøker. Samnorsk-linjen fortsatte, men møtte motstand.

**1981 (bokmål):**
Reversering av samnorsk-tendensen. Mange konservative former ble tillatt igjen.

**2005 (bokmål):**
Ny rettskrivning med forenkling. Mange former sløyfet, men fortsatt valgfrihet.

**2012 (nynorsk):**
Ny nynorsk rettskrivning. Forenkling og strammere norm.

**Samnorsk:**
Tanken om å smelte bokmål og nynorsk sammen til ett «samnorsk» preget reformene fra 1917 til ca. 1970. Ideen var at dette ville løse språkstriden. Sterk motstand førte til at prosjektet ble oppgitt.`,
    },
    {
      id: 'norsk-vg3-6-3-example-1',
      type: 'example',
      title: 'Analyse: Språk og identitet i «Peer Gynt»',
      problem: `Ibsens «Peer Gynt» (1867) ble skrevet på dansk-norsk, men med norske elementer. Hva viser dette om språksituasjonen?`,
      solution: `**Kontekst:**
Da Ibsen skrev «Peer Gynt», fantes ikke noe standardisert norsk skriftspråk. Forfattere skrev på dansk med gradvis flere norske innslag.

**Språket i stykket:**

**Grunnspråket:**
Dramaet er skrevet på tidens dansk-norske, men Ibsen bruker:
- Norske dialektord
- Norske talemåter
- Folkeviseaktige innslag

**Eksempel på norsk preg:**
Dovregubben sier: «Vær dig selv nok!» - en formulering med norsk ordstilling.

**Folkevisestilen:**
Mange partier er skrevet i en stil som minner om norske folkeviser. Dette gir teksten et «norsk» preg selv om ordene er danske.

**Tematikken:**
Selve tematikken - den norske bonden, den norske naturen, de norske huldre og troll - er en nasjonal markør.

**Ibsens posisjon:**
Ibsen skrev fra utlandet og sto utenfor språkstriden hjemme. Han fornorsket gradvis språket sitt, men aldri radikalt.

**Sammenligning med Bjørnson:**
Bjørnson gikk lenger i å fornorske språket og brukte mer norske dialektformer, særlig i bondefortellingene.

**Betydning:**
«Peer Gynt» viser overgangsfasen mellom dansk og norsk. Ibsen skrev på det eneste skriftspråket som fantes, men med norsk innhold og smak.`,
    },
    {
      id: 'norsk-vg3-6-3-tip-1',
      type: 'tip',
      title: 'Språkdebatten i dag',
      content: `**Aktuelle spørsmål:**

**Sidemålsundervisning:**
Skal alle elever lære å skrive både bokmål og nynorsk? Argumenter for: felles kulturarv, demokratisk hensyn. Argumenter mot: tidkrevende, lite praktisk nytteverdi for mange.

**Nynorskens stilling:**
Nynorsk brukes av stadig færre. Bør staten gjøre mer for å støtte språket, eller bør markedet avgjøre?

**Dialektenes stilling:**
Moderne medier og mobilitet fører til utjevning. Bør dialekter bevares aktivt, eller er endring naturlig?

**Engelsk innflytelse:**
Stadig flere engelske ord brukes på norsk. Truer dette norsk språk, eller er det naturlig utvikling?

**Språkrådet:**
Norge har et offentlig organ (Språkrådet) som arbeider med språknormering og språkpolitikk. Rådets rolle diskuteres.

**Målloven:**
Loven krever at offentlige institusjoner bruker minst 25% nynorsk. Følges dette opp?

**Din mening:**
Språkdebatten handler om identitet, demokrati og praktiske hensyn. Det finnes ikke enkle svar. Hva mener du?`,
    },
    {
      id: 'norsk-vg3-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Ivar Aasens og Knud Knudsens prosjekter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var utgangspunktet for hver av dem?',
            solution: 'Aasen: dialektene (folkets språk). Knudsen: «den dannede dagligtale» (de utdannedes talespråk i byene).',
          },
          {
            label: 'b',
            task: 'Hva ble resultatet av hvert prosjekt?',
            solution: 'Aasens prosjekt ble landsmål/nynorsk. Knudsens linje førte til gradvis fornorskning av riksmål/bokmål.',
          },
          {
            label: 'c',
            task: 'Hvilket prosjekt var mest «demokratisk»? Begrunn.',
            solution: 'Aasen mente hans var mest demokratisk fordi det bygde på hele folkets språk. Knudsen mente hans var mest praktisk fordi det bygde på det faktiske talespråket i byene. Begge hadde gode argumenter.',
          },
        ],
        solution: 'Oppgaven krever forståelse av de to språkutviklingslinjene og evne til å vurdere dem.',
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
        task: 'Drøft: Bør Norge ha to skriftspråk?',
        hints: [
          'Argumenter for og mot',
          'Historiske, kulturelle og praktiske hensyn',
          'Sammenlign med andre land',
          'Hva mener du selv?',
        ],
        solution: 'Drøftingen skal vise evne til å se saken fra flere sider og formulere en begrunnet konklusjon.',
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
        task: 'Undersøk sidemålets stilling i skolen.',
        hints: [
          'Intervju medelever om deres forhold til sidemålet',
          'Les argumenter fra begge sider i debatten',
          'Hva er de pedagogiske begrunnelsene?',
          'Presenter dine funn og din vurdering',
        ],
        solution: 'Undersøkelsesoppgave som krever selvstendig innhenting av informasjon og analyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et essay om «Språk og identitet».',
        hints: [
          'Bruk eksempler fra norsk språkhistorie',
          'Diskuter hvorfor språk betyr så mye for identitet',
          'Trekk inn egne erfaringer',
          'Vær personlig og reflekterende',
        ],
        solution: 'Essay som viser evne til å kombinere fagkunnskap med personlig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle språkhistorie-kapitler
export const NORSK_VG3_SPRAAKHISTORIE_CHAPTERS = [
  CHAPTER_NORSK_VG3_6_1,
  CHAPTER_NORSK_VG3_6_2,
  CHAPTER_NORSK_VG3_6_3,
];

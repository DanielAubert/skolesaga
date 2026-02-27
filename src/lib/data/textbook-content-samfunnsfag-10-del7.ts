/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 7 (Kapittel 29-34)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Tema: Urfolk, mangfold og livsmestring
 *
 * Kapittel 29: Samene — Urfolk i Norge
 * Kapittel 30: Kulturelt mangfold i Norge
 * Kapittel 31: Likestilling og kjønnsmangfold
 * Kapittel 32: Psykisk helse og livsmestring
 * Kapittel 33: Rus og kriminalitet
 * Kapittel 34: Seksualitet og grensesetting
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 29: Samene — Urfolk i Norge
// LK20: Utforske og beskrive korleis samane og andre urfolk har kjempa for
//        rettane sine, og kva urfolksrettar inneber
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_29: TextbookChapter = {
  id: 'samfunnsfag-10-29',
  courseId: 'samfunnsfag-10',
  chapterNumber: '29',
  title: 'Samene — Urfolk i Norge',
  description: 'Lær om samenes historie og kultur, fornorskingspolitikken, Alta-saken og samiske rettigheter i dag.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og beskrive korleis samane og andre urfolk har kjempa for rettane sine, og kva urfolksrettar inneber',
    'reflektere over kva det inneber å vere medborgar, og ulike former for demokratisk deltaking',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  keyTerms: [
    { term: 'Urfolk', definition: 'Folkegruppe som bodde i et område før nåværende statsgrenser ble trukket, og som har en egen kultur og identitet' },
    { term: 'Sametinget', definition: 'Samenes folkevalgte parlament, opprettet i 1989' },
    { term: 'Fornorskingspolitikken', definition: 'Norsk statlig politikk fra ca. 1850-1960 som hadde som mål å gjøre samer og kvener norske' },
    { term: 'ILO-konvensjon 169', definition: 'Internasjonal avtale som beskytter urfolks rettigheter til land, kultur og selvbestemmelse' },
    { term: 'Alta-saken', definition: 'Konflikten om utbygging av Alta-Kautokeino-vassdraget (1979-1982) som ble et vendepunkt for samiske rettigheter' },
    { term: 'Samisk selvbestemmelse', definition: 'Samenes rett til å bestemme over egne saker knyttet til kultur, språk og naturressurser' },
    { term: 'Kulturell assimilering', definition: 'Politikk der en minoritet presses til å oppgi sin kultur og bli lik majoriteten' },
    { term: 'Sápmi', definition: 'Det samiske landområdet som strekker seg over Norge, Sverige, Finland og Russland' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-29-intro',
      type: 'text',
      content: `## Norges urfolk — en historie om motstand og rettigheter

Visste du at det bor et urfolk i Norge? Samene har levd i det nordlige Skandinavia i tusenvis av år — lenge før det fantes noe som het «Norge». Likevel ble samisk kultur, språk og levemåte i over hundre år aktivt forsøkt fjernet av den norske staten.

I dag har samene rettigheter som urfolk, et eget parlament (Sametinget) og voksende stolthet over sin kultur. Men veien hit har vært lang og smertefull, og mange samer lever fortsatt med konsekvensene av den historiske uretten.

Samenes historie handler ikke bare om fortiden — den handler om grunnleggende spørsmål som er aktuelle i dag: Hvem har rett til å bestemme over land og naturressurser? Hvordan kan et samfunn beskytte minoriteters rettigheter? Og hva skjer når staten bruker sin makt til å undertrykke et folk?

I dette kapittelet skal du lære om:
- Hvem samene er og hva Sápmi betyr
- Fornorskingspolitikken og dens konsekvenser
- Alta-saken som vendepunkt
- Samiske rettigheter i dag
- Sametinget og samisk selvbestemmelse
- Utfordringer og muligheter for samisk kultur i fremtiden`,
    },

    // ========== DEFINISJON: URFOLK ==========
    {
      id: 'samfunnsfag-10-29-def-1',
      type: 'definition',
      title: 'Urfolk og samene',
      content: `**Urfolk** er folkegrupper som bodde i et område før nåværende statsgrenser ble trukket, og som har en egen kulturell identitet som skiller seg fra majoritetsbefolkningen. Urfolk har ofte en spesiell tilknytning til naturen og landområdene de tradisjonelt har brukt.

**Samene** er Norges eneste anerkjente urfolk. De er også urfolk i Sverige, Finland og Russland. Det samiske bosetningsområdet kalles **Sápmi** og strekker seg fra Hedmark i sør til Barentshavet i nord.

**Viktige fakta om samene:**
- Det finnes anslagsvis 50 000-80 000 samer i Norge (nøyaktig tall er usikkert fordi det ikke føres register)
- Samisk kultur er svært mangfoldig — det finnes nordsamisk, lulesamisk, sørsamisk og flere andre samiske språk og kulturer
- Tradisjonelle samiske næringer inkluderer reindrift, fiske, jakt og duodji (samisk håndverk)
- Bare ca. 2 500 personer driver med reindrift i dag, men reindriften har stor kulturell og symbolsk betydning
- Samene har et eget flagg (vedtatt i 1986), en egen nasjonaldag (6. februar) og et eget parlament (Sametinget)

Samene er ikke en ensartet gruppe — de har ulike språk, ulike næringer og ulike erfaringer. En sjøsame fra kysten av Troms har en annen bakgrunn enn en reindriftssame fra Kautokeino eller en sørsame fra Trøndelag.`,
    },

    // ========== EKSEMPEL: SÁPMI ==========
    {
      id: 'samfunnsfag-10-29-eks-1',
      type: 'example',
      title: 'Sápmi — et land uten grenser',
      content: `Sápmi er det samiske navnet på det tradisjonelle samiske området. Det strekker seg over fire land: Norge, Sverige, Finland og Russland. Da statsgrensene ble trukket på 1700- og 1800-tallet, ble det samiske området delt opp — uten at samene ble spurt.

**Tenk deg dette:** Du tilhører et folk som i tusenvis av år har flyttet fritt med reinflokkene mellom kyst og innland, mellom det som i dag er Norge og Sverige. Så bestemmer to konger at det skal gå en grense midt gjennom beitemarken din. Plutselig er du «norsk» eller «svensk» — men du er først og fremst same.

Grensene skapte store praktiske problemer for reindriften og for familier som hadde tilknytning på begge sider. I dag samarbeider de fire landene om samiske spørsmål gjennom Samerådet, og samiske organisasjoner arbeider for at samiske rettigheter skal gjelde uavhengig av statsgrenser.`,
    },

    // ========== OPPGAVE 29.1 ==========
    {
      id: 'samfunnsfag-10-29-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-1',
        number: '29.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Sápmi?',
        options: [
          {
            id: 'a',
            text: 'En samisk kommune i Finnmark',
            isCorrect: false,
            feedback: 'Feil. Sápmi er ikke en kommune, men et mye større geografisk område.',
          },
          {
            id: 'b',
            text: 'Det samiske navnet på det tradisjonelle samiske bosetningsområdet, som strekker seg over Norge, Sverige, Finland og Russland',
            isCorrect: true,
            feedback: 'Riktig! Sápmi er det samiske landområdet som krysser grensene til fire stater.',
          },
          {
            id: 'c',
            text: 'Et samisk politisk parti i Norge',
            isCorrect: false,
            feedback: 'Feil. Sápmi er et geografisk og kulturelt begrep, ikke et politisk parti.',
          },
          {
            id: 'd',
            text: 'Et annet ord for Sametinget',
            isCorrect: false,
            feedback: 'Feil. Sametinget er samenes parlament. Sápmi er det tradisjonelle samiske landområdet.',
          },
        ],
        solution: 'Sápmi er det samiske navnet på det tradisjonelle samiske bosetningsområdet som strekker seg over fire land: Norge, Sverige, Finland og Russland.',
      },
    },

    // ========== DEFINISJON: FORNORSKINGSPOLITIKKEN ==========
    {
      id: 'samfunnsfag-10-29-def-2',
      type: 'definition',
      title: 'Fornorskingspolitikken',
      content: `**Fornorskingspolitikken** var den norske statens systematiske forsøk på å utrydde samisk (og kvensk) språk og kultur fra ca. 1850 til 1960-tallet. Målet var å gjøre samene «norske» — en prosess som kalles **kulturell assimilering**.

**Virkemidlene var mange:**
- **Språkforbud i skolen:** Samiske barn ble forbudt å snakke samisk på skolen. Bare norsk var tillatt, og barn som snakket samisk kunne bli straffet.
- **Internatskole:** Samiske barn ble sendt til internatskoler langt fra familien. Der ble de tvunget til å snakke norsk og leve som norske barn. Mange opplevde dette som traumatisk.
- **Jordloven av 1902:** For å kjøpe jord i Finnmark måtte man beherske norsk. Dette presset samer til å oppgi språket sitt for å få tilgang til egne landområder.
- **Navnepolitikk:** Samiske stedsnavn ble erstattet med norske navn. Samiske personnavn ble fornorsket.
- **Raseforskning:** På tidlig 1900-tall ble samer utsatt for raseforskning — de ble målt, fotografert og kategorisert som en «lavere rase». Dette ga fornorskingspolitikken et pseudovitenskapelig grunnlag.

**Konsekvensene var alvorlige:**
- Flere samiske språk gikk nesten tapt
- Mange samer skammet seg over sin identitet og skjulte sin samiske bakgrunn
- Kulturelle tradisjoner og kunnskap gikk tapt mellom generasjoner
- Mange opplevde traumer som har blitt videreført til nye generasjoner (historisk traume)
- Samer fikk dårligere helse, utdanning og økonomi enn majoritetsbefolkningen

Fornorskingspolitikken må forstås i kontekst av at mange stater på 1800- og 1900-tallet førte en tilsvarende assimileringspolitikk overfor urfolk og minoriteter. Dette gjør den ikke mindre alvorlig, men viser at det var del av en bredere ideologisk tenkning om nasjonsbygging som i dag er grundig diskreditert.

I 2024 la Sannhets- og forsoningskommisjonen frem sin rapport om fornorskingspolitikken og uretten begått mot samer, kvener og norskfinner. Rapporten dokumenterte omfanget av overgrepene og foreslo tiltak for forsoning.`,
    },

    // ========== EKSEMPEL: INTERNATSKOLENE ==========
    {
      id: 'samfunnsfag-10-29-eks-2',
      type: 'example',
      title: 'Internatskolene — barn borte fra familien',
      content: `Under fornorskingspolitikken ble tusenvis av samiske barn sendt til internatskoler. Forestill deg at du er 7 år, snakker bare samisk hjemme, og plutselig blir sendt til en skole der du ikke får lov til å bruke ditt eget språk. Du forstår ikke hva læreren sier, du savner familien, og du blir straffet hvis du snakker samisk med de andre barna.

Mange som vokste opp på internatskole forteller om ensomhet, frykt og skam. Noen sluttet å snakke samisk helt — også med sine egne barn. Resultatet var at mange i neste generasjon aldri lærte foreldrenes morsmål.

**Ellen (tenkt eksempel basert på virkelige beretninger):** «Mamma snakket aldri samisk med oss. Først da jeg ble voksen, forsto jeg hvorfor. Hun ble slått på skolen hver gang hun snakket samisk. Hun ville beskytte oss mot det samme.»

Dette viser hvordan fornorskingspolitikken ikke bare rammet dem som opplevde den direkte — den skapte sår som gikk i arv gjennom generasjoner.`,
    },

    // ========== OPPGAVE 29.2 ==========
    {
      id: 'samfunnsfag-10-29-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-2',
        number: '29.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fornorskingspolitikken og dens konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv minst tre virkemidler som ble brukt i fornorskingspolitikken.',
            solution: 'Tre virkemidler var: (1) Språkforbud i skolen — samiske barn ble forbudt å snakke samisk. (2) Internatskoler — barn ble sendt bort fra familien til norskspråklige skoler. (3) Jordloven av 1902 — krevde norskkunnskaper for å kjøpe jord i Finnmark. Andre mulige svar: navnepolitikk (fornorsking av stedsnavn og personnavn) og raseforskning.',
          },
          {
            label: 'b',
            task: 'Forklar hva som menes med «historisk traume» og hvordan fornorskingspolitikken kan ha påvirket også de som ikke opplevde den direkte.',
            solution: 'Historisk traume betyr at traumatiske opplevelser i én generasjon påvirker neste generasjon. Foreldre som opplevde skam og straff for samisk identitet kunne videreføre dette til barna, for eksempel ved å ikke lære dem samisk språk for å «beskytte» dem. Resultatet var tap av språk, kultur og identitet som vedvarte lenge etter at den aktive fornorskingspolitikken opphørte.',
          },
        ],
        hints: ['Tenk på hvordan det ville vært å ikke få bruke ditt eget språk.'],
        solution: 'Fornorskingspolitikken brukte systematiske virkemidler som språkforbud, internatskoler og jordlov for å assimilere samene, med konsekvenser som språktap og historiske traumer som varer til i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ALTA-SAKEN ==========
    {
      id: 'samfunnsfag-10-29-def-3',
      type: 'definition',
      title: 'Alta-saken — et vendepunkt',
      content: `**Alta-saken** (1979-1982) var en konflikt om utbygging av en vannkraftdam i Alta-Kautokeino-vassdraget i Finnmark. Utbyggingen ville legge samiske reindriftsområder og boplasser under vann.

Saken ble et vendepunkt for samiske rettigheter i Norge fordi den viste for hele nasjonen hvordan samenes interesser ble overkjørt av statlige myndigheter.

**Hva skjedde:**
- Norske myndigheter vedtok å bygge en stor kraftdam i Altaelva
- Samiske organisasjoner og miljøvernere protesterte kraftig
- Det ble organisert demonstrasjoner, sivil ulydighet og sultestreik
- Samiske kvinner slo opp lavvu foran Stortinget i 1979
- I 1981 ble demonstranter fjernet av 600 politifolk — den største politiaksjonen i Norge i fredstid
- Dammen ble til slutt bygget, men i en nedskalert versjon

**Konsekvensene var varige:**
- **Samerettsutvalget** ble opprettet i 1980 for å utrede samiske rettigheter
- **Sameloven** ble vedtatt i 1987
- **Sametinget** ble opprettet i 1989
- **Grunnlovens § 108** (tidligere § 110a) ble vedtatt i 1988: «Det påligger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv»
- Norge ratifiserte **ILO-konvensjon 169** om urfolks rettigheter i 1990

Alta-saken viser at politisk motstand kan føre til varige endringer, selv om man ikke «vinner» selve saken.`,
    },

    // ========== EKSEMPEL: SAMETINGET I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-29-eks-3',
      type: 'example',
      title: 'Sametinget — samenes stemme',
      content: `Sametinget ble åpnet av Kong Olav V i 1989 og har 39 representanter som velges hvert fjerde år. For å stemme ved sametingsvalget må du stå i Sametingets valgmanntall — det vil si at du identifiserer deg som same og oppfyller visse kriterier (f.eks. at du selv, en forelder eller en besteforelder har/hadde samisk som hjemmespråk).

**Hva gjør Sametinget?**
- Uttaler seg i saker som angår samene (f.eks. arealbruk, reindrift, kultur)
- Forvalter tilskudd til samisk kultur, språk og næring
- Arbeider for samiske rettigheter overfor norske myndigheter
- Driver internasjonalt samarbeid om urfolksspørsmål

**Merk:** Sametinget er et rådgivende organ — det har ikke vetorett over norske myndigheters vedtak. Dette er et debattert tema: Noen mener Sametinget bør ha sterkere makt, mens andre mener det fungerer godt som det er.

**Eksempel fra virkeligheten:** I spørsmålet om gruvedrift i samiske områder (f.eks. Fosen-saken og Repparfjord) har det vært konflikter mellom statlige utbyggingsplaner og samiske rettigheter. Sametinget har protestert, men har begrenset formell makt til å stoppe vedtak.`,
    },

    // ========== OPPGAVE 29.3 ==========
    {
      id: 'samfunnsfag-10-29-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-3',
        number: '29.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken konsekvens fikk IKKE Alta-saken?',
        options: [
          {
            id: 'a',
            text: 'Samerettsutvalget ble opprettet',
            isCorrect: false,
            feedback: 'Dette ble en konsekvens av Alta-saken. Samerettsutvalget ble opprettet i 1980.',
          },
          {
            id: 'b',
            text: 'Sametinget ble opprettet i 1989',
            isCorrect: false,
            feedback: 'Dette var en viktig konsekvens av Alta-saken og den påfølgende utredningen av samiske rettigheter.',
          },
          {
            id: 'c',
            text: 'Samene fikk full selvstendighet som egen stat',
            isCorrect: true,
            feedback: 'Riktig! Samene fikk viktige rettigheter, men ble ikke en egen stat. Sametinget er et rådgivende organ innenfor den norske staten.',
          },
          {
            id: 'd',
            text: 'Norge ratifiserte ILO-konvensjon 169 om urfolks rettigheter',
            isCorrect: false,
            feedback: 'Dette var en konsekvens. Norge ratifiserte konvensjonen i 1990, som en del av oppfølgingen av samiske rettighetsspørsmål.',
          },
        ],
        solution: 'Alta-saken førte til opprettelse av Samerettsutvalget, Sameloven, Sametinget, grunnlovsendring og ratifisering av ILO-konvensjon 169 — men samene fikk ikke full selvstendighet som egen stat.',
      },
    },

    // ========== OPPGAVE 29.4 ==========
    {
      id: 'samfunnsfag-10-29-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-4',
        number: '29.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Alta-saken viser at politisk motstand kan føre til endringer, selv om man ikke vinner selve saken. Dammen ble bygget, men samene fikk viktige rettigheter som følge av konflikten.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva Alta-saken handlet om og hvilke virkemidler demonstrantene brukte.',
            solution: 'Alta-saken var en konflikt om bygging av en kraftdam i Alta-Kautokeino-vassdraget som ville ramme samiske reindriftsområder. Demonstrantene brukte sivil ulydighet (lenket seg fast), sultestreik, demonstrasjoner og symbolske aksjoner (lavvu foran Stortinget).',
          },
          {
            label: 'b',
            task: 'Nevn minst tre politiske endringer som kom som følge av Alta-saken.',
            solution: 'Tre endringer: (1) Samerettsutvalget ble opprettet. (2) Sameloven ble vedtatt i 1987. (3) Sametinget ble opprettet i 1989. Andre mulige svar: Grunnlovens § 108 ble vedtatt, Norge ratifiserte ILO-konvensjon 169.',
          },
        ],
        hints: ['Tenk på hva som skjedde før, under og etter konflikten.'],
        solution: 'Alta-saken handlet om kraftutbygging i samisk område. Selv om dammen ble bygget, førte konflikten til en rekke viktige politiske endringer for samiske rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: SAMISKE RETTIGHETER I DAG ==========
    {
      id: 'samfunnsfag-10-29-rettigheter',
      type: 'text',
      content: `## Samiske rettigheter i dag — og aktuelle utfordringer

I dag har samene en rekke rettigheter som urfolk i Norge. Grunnlovens § 108 forplikter staten til å legge til rette for samisk språk, kultur og samfunnsliv. Samiske barn har rett til opplæring i og på samisk. Sametinget gir samene en stemme i politiske prosesser.

Men det betyr ikke at alle utfordringer er løst. Her er noen aktuelle spørsmål:

### Fosen-saken
I 2021 fastslo Høyesterett at vindkraftutbyggingen på Fosen i Trøndelag krenker reindriftssamenes rett til kulturutøvelse etter FNs konvensjon om sivile og politiske rettigheter. Likevel sto vindturbinene fortsatt der over to år etter dommen. Saken vakte stor debatt om forholdet mellom grønn energi og urfolksrettigheter, og om statens vilje til å respektere domstolenes avgjørelser.

### Språkrevitalisering
Flere samiske språk er truet av utryddelse. Lulesamisk har under 2 000 talere, og sørsamisk har rundt 500. Det pågår et viktig arbeid for å redde språkene gjennom samiskundervisning, språksentre og digitale ressurser — men det er en kamp mot klokken.

### Arealpress
Gruvedrift, vindkraft, hyttebygging og annen utbygging legger press på tradisjonelle samiske beiteområder. Dette skaper konflikter mellom ulike samfunnsinteresser.

### Rasisme og fordommer
Samer opplever fortsatt rasisme og fordommer. Undersøkelser viser at samiske ungdommer utsettes for mobbing og hatprat knyttet til sin identitet. Mange samer i Sør-Norge opplever at folk ikke vet at det bor samer der.`,
    },

    // ========== OPPGAVE 29.5 ==========
    {
      id: 'samfunnsfag-10-29-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-5',
        number: '29.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Fosen-saken fastslo Høyesterett at vindkraftutbyggingen krenket reindriftssamenes rettigheter. Likevel ble vindturbinene stående i over to år etter dommen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kan det bety for tilliten til rettsstaten når en Høyesterettsdom ikke følges opp?',
            solution: 'Når staten ikke følger opp en dom fra landets øverste domstol, kan det undergrave tilliten til rettsstaten og rettssikkerheten. Det sender et signal om at rettighetene til urfolk kan ignoreres selv når de er juridisk fastslått. Det kan også skape presedens for at andre dommer ikke trenger å respekteres.',
          },
          {
            label: 'b',
            task: 'Drøft dilemmaet mellom behovet for grønn energi (vindkraft) og samiske rettigheter. Presenter argumenter fra begge sider.',
            solution: 'For vindkraft: Norge trenger fornybar energi for å nå klimamålene; vindkraft skaper arbeidsplasser; energiomstilling er nødvendig for hele samfunnet. For samiske rettigheter: Urfolksrettigheter er beskyttet av internasjonal lov; reindriften er en bærebjelke i samisk kultur; det finnes andre steder å bygge vindkraft; grønn omstilling kan ikke bygges på brudd av menneskerettigheter. Drøftingen bør vise at det ikke er et enkelt enten-eller.',
          },
        ],
        hints: [
          'Tenk på hva som skjer med rettsstaten når dommer ikke respekteres.',
          'Prøv å se saken fra flere sider — både miljø og urfolksrettigheter er viktige verdier.',
        ],
        solution: 'Fosen-saken illustrerer et vanskelig dilemma mellom grønn energi og urfolksrettigheter, og reiser viktige spørsmål om rettsstaten når Høyesterettsdommer ikke følges opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-29-oppsummering',
      type: 'text',
      content: `## Oppsummering: Samene — Urfolk i Norge

**Samene** er Norges urfolk med en rik og mangfoldig kultur som har eksistert i tusenvis av år i Sápmi.

**Nøkkelbegreper:**
- **Sápmi:** Det tradisjonelle samiske bosetningsområdet som strekker seg over fire land
- **Fornorskingspolitikken:** Statlig politikk (ca. 1850-1960) som forsøkte å utrydde samisk språk og kultur gjennom skoleforbud, internatskoler og jordlov
- **Kulturell assimilering:** Å presse en minoritet til å oppgi sin kultur
- **Alta-saken (1979-1982):** Vendepunkt som førte til Samerettsutvalget, Sameloven, Sametinget og ILO-169
- **Sametinget:** Samenes folkevalgte parlament med 39 representanter (opprettet 1989)
- **ILO-konvensjon 169:** Internasjonal avtale om urfolks rettigheter
- **Grunnlovens § 108:** Statens plikt til å legge til rette for samisk språk, kultur og samfunnsliv
- **Fosen-saken:** Aktuell konflikt som viser spenningen mellom utbyggingsinteresser og urfolksrettigheter`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-29-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-6',
        number: '29.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: I 2023 la Sannhets- og forsoningskommisjonen frem sin rapport om fornorskingspolitikken overfor samer, kvener og norskfinner.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor var det viktig at Norge opprettet en sannhets- og forsoningskommisjon?',
            solution: 'Det er viktig for å dokumentere historisk urett, gi ofrene og deres etterkommere anerkjennelse, skape forståelse i majoritetsbefolkningen, og legge grunnlag for forsoning. Uten offisiell anerkjennelse av uretten er det vanskelig å bygge tillit mellom samene og den norske staten.',
          },
          {
            label: 'b',
            task: 'Hva tror du er de viktigste tiltakene for å rette opp skadene etter fornorskingspolitikken? Begrunn svaret ditt.',
            solution: 'Mulige tiltak: Styrke samiskopplæring i skolen, støtte språkrevitalisering, undervise om samisk historie i hele Norge, motarbeide rasisme og fordommer, sikre samiske rettigheter i areal- og ressursforvaltning, og styrke Sametingets posisjon. Eleven bør begrunne hvorfor de valgte tiltakene er viktige.',
          },
        ],
        hints: ['Tenk på hva som trengs for at urett kan bli anerkjent og tillitsforholdet gjenoppbygd.'],
        solution: 'Sannhets- og forsoningskommisjonen dokumenterer historisk urett og foreslår tiltak for forsoning — en nødvendig prosess for å anerkjenne samenes lidelse og bygge et mer rettferdig samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-29-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-29-ex-7',
        number: '29.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om Sametinget er korrekt?',
        options: [
          {
            id: 'a',
            text: 'Sametinget kan vedta lover som gjelder for hele Norge',
            isCorrect: false,
            feedback: 'Feil. Sametinget er et rådgivende organ og vedtar ikke lover for hele landet — det er Stortingets oppgave.',
          },
          {
            id: 'b',
            text: 'Sametinget er samenes folkevalgte organ som uttaler seg i saker som angår samene og forvalter midler til samisk kultur og språk',
            isCorrect: true,
            feedback: 'Riktig! Sametinget er et folkevalgt organ med rådgivende funksjon som arbeider for samiske rettigheter og forvalter tilskudd.',
          },
          {
            id: 'c',
            text: 'Alle som bor nord for Trondheim har stemmerett ved sametingsvalget',
            isCorrect: false,
            feedback: 'Feil. For å stemme ved sametingsvalget må man stå i Sametingets valgmanntall, noe som krever at man identifiserer seg som same og oppfyller visse kriterier.',
          },
          {
            id: 'd',
            text: 'Sametinget ble opprettet allerede i 1905 da Norge ble selvstendig',
            isCorrect: false,
            feedback: 'Feil. Sametinget ble opprettet i 1989, som en konsekvens av Alta-saken og den påfølgende utredningen av samiske rettigheter.',
          },
        ],
        solution: 'Sametinget er samenes folkevalgte parlament (opprettet 1989) med 39 representanter. Det uttaler seg i saker som angår samene og forvalter midler til samisk kultur, språk og næring.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 30: Kulturelt mangfold i Norge
// LK20: Reflektere over likskapar og ulikskapar i identitetar, levesett og
//        kulturuttrykk og drøfte moglegheiter og utfordringar ved mangfald
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_30: TextbookChapter = {
  id: 'samfunnsfag-10-30',
  courseId: 'samfunnsfag-10',
  chapterNumber: '30',
  title: 'Kulturelt mangfold i Norge',
  description: 'Utforsk hva kulturelt mangfold innebærer, hvordan innvandring har formet Norge, og hvilke muligheter og utfordringer et flerkulturelt samfunn gir.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over likskapar og ulikskapar i identitetar, levesett og kulturuttrykk og drøfte moglegheiter og utfordringar ved mangfald',
    'utforske korleis menneske har kjempa og kjempar for likestilling og mot diskriminering',
    'drøfte kva likeverd og likestilling har å seie for eit demokrati',
  ],
  keyTerms: [
    { term: 'Kulturelt mangfold', definition: 'At det finnes mange ulike kulturer, levesett og tradisjoner i et samfunn' },
    { term: 'Integrering', definition: 'Prosess der innvandrere blir en del av samfunnet, samtidig som de beholder deler av sin egen kultur' },
    { term: 'Assimilering', definition: 'At en minoritet oppgir sin egen kultur og fullt ut tilpasser seg majoritetskulturen' },
    { term: 'Diskriminering', definition: 'Urettferdig forskjellsbehandling av personer basert på for eksempel etnisitet, religion eller kjønn' },
    { term: 'Rasisme', definition: 'Ideologi eller handlinger som rangerer mennesker basert på hudfarge, etnisitet eller kulturell bakgrunn' },
    { term: 'Flerkulturelt samfunn', definition: 'Et samfunn der mennesker med ulik kulturell bakgrunn lever side om side' },
    { term: 'Fordommer', definition: 'Forhåndsoppfatninger om en gruppe mennesker som ikke er basert på erfaring eller kunnskap' },
    { term: 'Tilhørighet', definition: 'Følelsen av å være en del av et fellesskap eller en gruppe' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-30-intro',
      type: 'text',
      content: `## Norge — et land i endring

Gå gjennom gatene i en norsk by i dag, og du møter et helt annet Norge enn for 50 år siden. Du hører mange ulike språk, ser butikker med varer fra hele verden, og kan velge mellom mat fra alle kontinenter. I klassen din sitter det kanskje elever med bakgrunn fra ti forskjellige land.

Norge har blitt et **flerkulturelt samfunn**. I dag har omtrent 20 prosent av befolkningen innvandrerbakgrunn — enten fordi de selv har innvandret, eller fordi foreldrene deres har det. De kommer fra over 200 ulike land, og de har med seg ulike språk, tradisjoner, matskikker, religioner og livserfaringer.

For noen er dette mangfoldet først og fremst en berikelse — nye impulser, bredere perspektiver og et mer spennende samfunn. For andre skaper det bekymring — om norsk kultur vil forandre seg for mye, om integreringen fungerer godt nok, eller om forskjellene skaper konflikter.

Begge perspektivene fortjener å bli tatt på alvor. I dette kapittelet skal du lære om:
- Hva kulturelt mangfold betyr i praksis
- Hvordan innvandring har formet Norge
- Forskjellen mellom integrering og assimilering
- Muligheter og utfordringer ved et flerkulturelt samfunn
- Rasisme, fordommer og diskriminering
- Hva som skaper tilhørighet i et mangfoldig samfunn`,
    },

    // ========== DEFINISJON: KULTUR OG MANGFOLD ==========
    {
      id: 'samfunnsfag-10-30-def-1',
      type: 'definition',
      title: 'Kultur og kulturelt mangfold',
      content: `**Kultur** er et vidt begrep som omfatter alt det menneskeskapte i et samfunn: verdier, normer, skikker, språk, kunst, mat, klær, tro og tradisjoner. Kulturen former hvordan vi tenker, handler og forstår verden.

**Kulturelt mangfold** betyr at det i et samfunn finnes mange ulike kulturer, livsstiler og verdisett side om side.

**Viktige nyanser:**
- Kultur er ikke statisk — den endrer seg hele tiden. «Norsk kultur» i 2025 er svært annerledes enn «norsk kultur» i 1950.
- Kultur handler ikke bare om nasjonalitet eller etnisitet. Vi tilhører alle flere ulike kulturelle fellesskap — for eksempel knyttet til alder, bosted, interesser, religion eller yrke.
- Innenfor alle kulturer finnes det stort mangfold. Det gir liten mening å snakke om hva «alle nordmenn» eller «alle somaliere» mener eller gjør.
- **Etnosentrisme** er tendensen til å vurdere andre kulturer ut fra sin egen kulturs standarder — og konkludere med at ens egen kultur er «best». Det er viktig å være bevisst denne fallgruven.

Kulturelt mangfold har alltid eksistert i Norge. Samer, kvener, romani/tatere, norskfinner, jøder og skogfinner er eksempler på nasjonale minoriteter som har vært i Norge i hundrevis av år. Innvandring de siste tiårene har gjort mangfoldet enda større.`,
    },

    // ========== EKSEMPEL: NORSK MATKULTUR ==========
    {
      id: 'samfunnsfag-10-30-eks-1',
      type: 'example',
      title: 'Pizza, taco og kebab — kulturmøter på tallerkenen',
      content: `Et av de tydeligste eksemplene på kulturelt mangfold i hverdagen er maten vi spiser. Tenk over hva du spiste i forrige uke: Pizza? Taco? Kebab? Sushi? Pasta? Wok?

Alle disse rettene har kommet til Norge gjennom kulturmøter:
- **Pizza** kom med italienske innvandrere og turisme fra 1960-tallet
- **Taco** ble populært fra 1990-tallet, inspirert av Tex-Mex-kulturen
- **Kebab** kom med tyrkiske og libanesiske innvandrere fra 1970-tallet
- **Sushi** ble vanlig fra 2000-tallet med japansk kulturpåvirkning

I dag er fredagstaco nesten like «norsk» som brunost og pinnekjøtt. Dette viser hvordan kulturer blander seg og skaper noe nytt. Kulturmøter er ikke noe som truer norsk kultur — de har alltid vært en del av den.

Et annet eksempel: Den norske skolesekken har i generasjoner inneholdt matpakke med brødskiver — en typisk norsk tradisjon. I dag er det helt vanlig at noen barn har med brødskiver, andre har med ris, og noen har med lefse. Mangfoldet er en del av hverdagen.`,
    },

    // ========== OPPGAVE 30.1 ==========
    {
      id: 'samfunnsfag-10-30-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-1',
        number: '30.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «etnosentrisme»?',
        options: [
          {
            id: 'a',
            text: 'At man er stolt av sitt eget land',
            isCorrect: false,
            feedback: 'Å være stolt av sitt land (patriotisme) er ikke det samme som etnosentrisme. Etnosentrisme handler om å vurdere andre kulturer negativt ut fra sin egen.',
          },
          {
            id: 'b',
            text: 'At man vurderer andre kulturer ut fra sin egen kulturs standarder og anser sin egen kultur som overlegen',
            isCorrect: true,
            feedback: 'Riktig! Etnosentrisme er tendensen til å bruke sin egen kultur som målestokk og anse den som «best» eller «normal».',
          },
          {
            id: 'c',
            text: 'At man er interessert i andre kulturer',
            isCorrect: false,
            feedback: 'Feil. Interesse for andre kulturer er positivt. Etnosentrisme handler om å se ned på andre kulturer.',
          },
          {
            id: 'd',
            text: 'At man bor i et flerkulturelt samfunn',
            isCorrect: false,
            feedback: 'Feil. Å bo i et flerkulturelt samfunn er en beskrivelse av et samfunn, ikke en holdning.',
          },
        ],
        solution: 'Etnosentrisme er tendensen til å vurdere andre kulturer ut fra sin egen kulturs standarder og konkludere med at ens egen kultur er overlegen.',
      },
    },

    // ========== DEFINISJON: INTEGRERING ==========
    {
      id: 'samfunnsfag-10-30-def-2',
      type: 'definition',
      title: 'Integrering, assimilering og segregering',
      content: `Når mennesker med ulik kulturell bakgrunn lever i samme samfunn, finnes det ulike måter forholdet mellom minoritet og majoritet kan utvikle seg:

**Integrering** innebærer at innvandrere blir en del av samfunnet — deltar i arbeidslivet, lærer språket, følger lovene — samtidig som de beholder deler av sin egen kultur og identitet. Integrering er en **toveis prosess**: Både innvandrere og det eksisterende samfunnet tilpasser seg.

**Assimilering** innebærer at minoriteten oppgir sin egen kultur og fullt ut tilpasser seg majoriteten. Her er det kun minoriteten som endrer seg. Fornorskingspolitikken overfor samene er et historisk eksempel på tvungen assimilering.

**Segregering** innebærer at grupper lever atskilt fra hverandre — i ulike nabolag, med lite kontakt. Dette kan være påtvunget (som apartheid i Sør-Afrika) eller noe som utvikler seg «naturlig» (når ulike grupper bosetter seg i ulike områder).

**Multikulturalisme** er tanken om at ulike kulturer kan eksistere side om side med respekt og likeverd, og at staten bør legge til rette for kulturelt mangfold.

De fleste i dag mener at **integrering** er det beste alternativet — men folk er uenige om hva god integrering betyr i praksis. Er det greit å beholde alle tradisjoner fra hjemlandet? Hvor mye skal man tilpasse seg? Hvem har ansvaret — innvandreren, staten eller begge?`,
    },

    // ========== EKSEMPEL: PERSPEKTIVER PÅ INTEGRERING ==========
    {
      id: 'samfunnsfag-10-30-eks-2',
      type: 'example',
      title: 'Ulike perspektiver på integrering',
      content: `Spørsmålet om integrering er et av de mest debatterte temaene i norsk politikk. Her er noen ulike perspektiver:

**Perspektiv 1 — Vektlegger tilpasning:**
«Innvandrere som kommer til Norge må lære seg norsk, forstå norske verdier og delta i arbeidslivet. Det er viktig at alle følger norsk lov, og at grunnleggende verdier som likestilling og ytringsfrihet respekteres av alle.»

**Perspektiv 2 — Vektlegger mangfold:**
«Norge berikes av kulturelt mangfold. Innvandrere bidrar med nye perspektiver, kompetanse og tradisjoner. Det viktigste er at alle behandles med respekt og får like muligheter — ikke at alle blir like.»

**Perspektiv 3 — Vektlegger strukturelle barrierer:**
«Mange innvandrere ønsker å integrere seg, men møter barrierer: diskriminering på arbeidsmarkedet, manglende godkjenning av utenlandsk utdanning, og boligsegregering. Vi må fjerne disse barrierene i stedet for bare å kreve tilpasning.»

Alle disse perspektivene inneholder viktige poenger. God debatt om integrering krever at man lytter til ulike synspunkter og unngår forenklinger.`,
    },

    // ========== OPPGAVE 30.2 ==========
    {
      id: 'samfunnsfag-10-30-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-2',
        number: '30.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Integrering, assimilering og segregering.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom integrering og assimilering med egne ord.',
            solution: 'Integrering betyr at innvandrere blir en del av samfunnet (lærer språket, deltar i arbeidslivet) men beholder deler av sin egen kultur. Det er en toveis prosess. Assimilering betyr at minoriteten oppgir sin egen kultur helt og tilpasser seg majoriteten fullstendig — det er en enveisprosess.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på segregering fra historien eller fra dagens samfunn.',
            solution: 'Historisk eksempel: Apartheid i Sør-Afrika der svarte og hvite ble tvunget til å leve atskilt. Moderne eksempel: I noen byer oppstår det nabolag der nesten alle innbyggerne har innvandrerbakgrunn, mens andre nabolag nesten bare har etnisk norske innbyggere. Fornorskingspolitikken var et eksempel på tvungen assimilering, ikke segregering.',
          },
        ],
        hints: ['Tenk på hvem som endrer seg i de ulike modellene.'],
        solution: 'Integrering er en toveis prosess der begge parter tilpasser seg. Assimilering er en enveisprosess der minoriteten oppgir sin kultur. Segregering betyr at grupper lever atskilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RASISME OG DISKRIMINERING ==========
    {
      id: 'samfunnsfag-10-30-def-3',
      type: 'definition',
      title: 'Rasisme, fordommer og diskriminering',
      content: `**Rasisme** er holdninger eller handlinger som rangerer mennesker basert på hudfarge, etnisitet eller kulturell bakgrunn. Rasisme kan ta mange former:

- **Individuell rasisme:** En person sier eller gjør noe rasistisk mot en annen person — for eksempel rasistiske kommentarer eller vold.
- **Strukturell rasisme:** Systemer og strukturer i samfunnet som fører til at noen grupper systematisk stilles dårligere — for eksempel ved at personer med utenlandsk navn har vanskeligere for å bli kalt inn til jobbintervju, selv med samme kvalifikasjoner.
- **Hverdagsrasisme:** Tilsynelatende uskyldige kommentarer eller handlinger som gjør at noen føler seg annerledes eller utenfor — for eksempel «Hvor kommer du egentlig fra?» til en person som er født og oppvokst i Norge.

**Fordommer** er forhåndsoppfatninger om en gruppe mennesker som ikke er basert på kunnskap eller personlig erfaring. Alle mennesker har fordommer — det viktige er å være bevisst dem og ikke handle på grunnlag av dem.

**Diskriminering** er urettferdig forskjellsbehandling. I Norge er diskriminering på grunnlag av etnisitet, religion, kjønn, funksjonsnedsettelse, seksuell orientering og alder forbudt ved lov (likestillings- og diskrimineringsloven).

**Forskning viser at:**
- Jobbsøkere med utenlandske navn har ca. 25 % lavere sjanse for å bli kalt inn til intervju enn søkere med norske navn med ellers like kvalifikasjoner
- Ungdom med innvandrerbakgrunn rapporterer oftere om opplevd diskriminering
- Rasisme har dokumenterte negative konsekvenser for psykisk og fysisk helse`,
    },

    // ========== EKSEMPEL: STRUKTURELL DISKRIMINERING ==========
    {
      id: 'samfunnsfag-10-30-eks-3',
      type: 'example',
      title: 'Navneforsøket — ubevisst diskriminering',
      content: `Forskere ved Institutt for samfunnsforskning gjennomførte et eksperiment der de sendte ut identiske jobbsøknader — med én forskjell: Halvparten hadde norske navn og halvparten hadde pakistanske navn. Kvalifikasjonene var helt like.

Resultatet var tydelig: Søkere med norske navn ble kalt inn til intervju langt oftere enn søkere med pakistanske navn. Dette er et eksempel på **strukturell diskriminering** — det handler ikke nødvendigvis om bevisst rasisme hos den enkelte arbeidsgiver, men om ubevisste mønster som fører til systematisk forskjellsbehandling.

Lignende forskning er gjort i mange land med samme resultat. Det viser at diskriminering kan skje selv uten at noen «mener noe vondt» — og at det derfor ikke er nok å si «jeg er ikke rasist». Vi må også se på systemene og strukturene rundt oss.`,
    },

    // ========== OPPGAVE 30.3 ==========
    {
      id: 'samfunnsfag-10-30-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-3',
        number: '30.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom individuell og strukturell rasisme?',
        options: [
          {
            id: 'a',
            text: 'Individuell rasisme er verre enn strukturell rasisme',
            isCorrect: false,
            feedback: 'Feil. Begge formene for rasisme er skadelige. Strukturell rasisme kan faktisk ramme flere mennesker fordi den er innbakt i systemer.',
          },
          {
            id: 'b',
            text: 'Individuell rasisme handler om enkeltersoners holdninger og handlinger, mens strukturell rasisme handler om systemer og strukturer som fører til systematisk forskjellsbehandling',
            isCorrect: true,
            feedback: 'Riktig! Individuell rasisme er direkte, mens strukturell rasisme handler om mønster i samfunnets systemer.',
          },
          {
            id: 'c',
            text: 'Strukturell rasisme finnes bare i andre land, ikke i Norge',
            isCorrect: false,
            feedback: 'Feil. Forskning viser at strukturell diskriminering finnes også i Norge, for eksempel på arbeidsmarkedet.',
          },
          {
            id: 'd',
            text: 'Individuell rasisme er forbudt ved lov, men strukturell rasisme er ikke det',
            isCorrect: false,
            feedback: 'Feil. Diskriminering er forbudt ved lov uavhengig av om den er individuell eller strukturell. Utfordringen er at strukturell rasisme kan være vanskeligere å påvise.',
          },
        ],
        solution: 'Individuell rasisme handler om enkeltpersoners rasistiske holdninger og handlinger, mens strukturell rasisme handler om systemer og strukturer i samfunnet som fører til at noen grupper systematisk stilles dårligere.',
      },
    },

    // ========== TEKST: TILHØRIGHET ==========
    {
      id: 'samfunnsfag-10-30-tilhorighet',
      type: 'text',
      content: `## Tilhørighet i et mangfoldig samfunn

En av de viktigste tingene for mennesker er å føle **tilhørighet** — at man er en del av et fellesskap og blir akseptert for den man er. I et mangfoldig samfunn kan spørsmålet om tilhørighet være ekstra komplisert.

### Sammensatte identiteter
Mange unge i Norge i dag har det som kan kalles sammensatte identiteter. De kan føle seg norske, men også somaliske, polske eller pakistanske. De beveger seg mellom ulike kulturelle fellesskap — hjemme, blant venner og på skolen.

Denne sammensatte identiteten kan være en styrke — man forstår flere kulturer og kan bygge broer mellom dem. Men den kan også være utfordrende, spesielt når man opplever at andre setter spørsmålstegn ved ens tilhørighet: «Du er jo ikke egentlig norsk» eller «Du har blitt for norsk».

### Hva skaper tilhørighet?
Forskning viser at disse faktorene er viktige for å føle tilhørighet i et samfunn:
- **Deltagelse:** Å være med i arbeidslivet, skolen og fritidsaktiviteter
- **Språk:** Å kunne kommunisere med folk rundt seg
- **Anerkjennelse:** Å bli sett og verdsatt for den man er
- **Representasjon:** Å se folk som ligner seg selv i media, i politikken og i offentligheten
- **Trygghet:** Å ikke oppleve diskriminering eller utestengning

Et godt samfunn legger til rette for at alle innbyggere kan føle tilhørighet — uavhengig av bakgrunn. Det krever innsats fra både majoritet og minoritet.`,
    },

    // ========== OPPGAVE 30.4 ==========
    {
      id: 'samfunnsfag-10-30-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-4',
        number: '30.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tilhørighet og sammensatte identiteter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med «sammensatte identiteter»? Gi et eksempel.',
            solution: 'Sammensatte identiteter betyr at en person føler tilhørighet til flere kulturer eller grupper samtidig. Eksempel: En jente som er født i Norge med foreldre fra Pakistan kan føle seg norsk i mange sammenhenger, men også pakistansk når hun er hjemme hos familien. Hun har en sammensatt identitet som inkluderer begge.',
          },
          {
            label: 'b',
            task: 'Nevn tre ting som ifølge forskning er viktige for å føle tilhørighet i et samfunn.',
            solution: 'Tre viktige faktorer: (1) Deltagelse — å være med i arbeidslivet, skolen og fritidsaktiviteter. (2) Språk — å kunne kommunisere med folk rundt seg. (3) Anerkjennelse — å bli sett og verdsatt for den man er. Andre mulige svar: representasjon og trygghet.',
          },
        ],
        hints: ['Tenk på din egen identitet — tilhører du bare én gruppe, eller flere?'],
        solution: 'Sammensatte identiteter innebærer tilhørighet til flere kulturelle fellesskap. Tilhørighet skapes gjennom deltagelse, språk, anerkjennelse, representasjon og trygghet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-30-oppsummering',
      type: 'text',
      content: `## Oppsummering: Kulturelt mangfold i Norge

Norge har blitt et **flerkulturelt samfunn** der omtrent 20 prosent av befolkningen har innvandrerbakgrunn.

**Nøkkelbegreper:**
- **Kultur:** Alt det menneskeskapte i et samfunn — verdier, normer, skikker, språk og tradisjoner
- **Kulturelt mangfold:** At mange ulike kulturer finnes i ett samfunn
- **Etnosentrisme:** Å vurdere andre kulturer ut fra sin egen som målestokk
- **Integrering:** Toveis prosess der innvandrere og samfunnet tilpasser seg hverandre
- **Assimilering:** Enveis prosess der minoriteten oppgir sin kultur
- **Segregering:** At grupper lever atskilt fra hverandre
- **Individuell rasisme:** Enkeltersoners rasistiske holdninger og handlinger
- **Strukturell rasisme:** Systemer som fører til systematisk forskjellsbehandling
- **Diskriminering:** Urettferdig forskjellsbehandling som er forbudt ved lov
- **Sammensatte identiteter:** At man tilhører flere kulturelle fellesskap samtidig`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-30-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-5',
        number: '30.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Kulturelt mangfold er en berikelse for samfunnet.» Vurder denne påstanden ved å presentere argumenter både for og mot.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter minst to argumenter for at kulturelt mangfold er en berikelse.',
            solution: 'Argumenter for: (1) Mangfold gir nye perspektiver, ideer og kreativitet som kan styrke samfunnet. (2) Kulturmøter beriker mat, kunst, musikk og hverdagsliv. (3) I en globalisert verden er det en fordel å ha innbyggere som forstår ulike kulturer og språk.',
          },
          {
            label: 'b',
            task: 'Presenter minst to argumenter for at kulturelt mangfold kan skape utfordringer.',
            solution: 'Argumenter for utfordringer: (1) Ulike verdier kan skape konflikter, for eksempel om likestilling, ytringsfrihet eller barneoppdragelse. (2) Språkbarrierer kan gjøre det vanskelig å delta i samfunnet. (3) Segregering kan oppstå hvis grupper ikke møtes.',
          },
          {
            label: 'c',
            task: 'Hva mener du selv? Begrunn svaret ditt.',
            solution: 'Eleven gir en begrunnet egen vurdering som tar hensyn til argumenter fra begge sider. Et godt svar nyanserer og viser at mangfold kan være både en berikelse og en utfordring, avhengig av hvordan samfunnet håndterer det.',
          },
        ],
        hints: [
          'Husk å bruke fagbegreper som integrering, assimilering og etnosentrisme.',
          'Vis at du forstår begge sider av debatten før du gir din egen vurdering.',
        ],
        solution: 'En god drøfting viser forståelse for at kulturelt mangfold gir både muligheter og utfordringer, og at mye avhenger av hvordan samfunnet legger til rette for integrering og motarbeider diskriminering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-30-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-30-ex-6',
        number: '30.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva viste navneforsøket som forskere ved Institutt for samfunnsforskning gjennomførte?',
        options: [
          {
            id: 'a',
            text: 'At arbeidsgivere alltid velger den best kvalifiserte søkeren uavhengig av navn',
            isCorrect: false,
            feedback: 'Feil. Forskningen viste det motsatte — at navnet påvirket sjansen for å bli kalt inn til intervju, selv med like kvalifikasjoner.',
          },
          {
            id: 'b',
            text: 'At søkere med utenlandske navn hadde lavere sjanse for å bli kalt inn til intervju enn søkere med norske navn med ellers like kvalifikasjoner',
            isCorrect: true,
            feedback: 'Riktig! Forsøket viste at søkere med norske navn ble kalt inn oftere enn søkere med pakistanske navn, selv når kvalifikasjonene var helt like.',
          },
          {
            id: 'c',
            text: 'At det ikke finnes diskriminering på det norske arbeidsmarkedet',
            isCorrect: false,
            feedback: 'Feil. Forsøket dokumenterte nettopp at det finnes diskriminering på arbeidsmarkedet.',
          },
          {
            id: 'd',
            text: 'At innvandrere ikke søker jobber i Norge',
            isCorrect: false,
            feedback: 'Feil. Forsøket handlet om hvordan arbeidsgivere behandler søknader fra personer med ulike navn, ikke om hvorvidt innvandrere søker jobber.',
          },
        ],
        solution: 'Navneforsøket viste at jobbsøkere med utenlandske navn hadde ca. 25 % lavere sjanse for å bli kalt inn til intervju enn søkere med norske navn, selv med identiske kvalifikasjoner — et eksempel på strukturell diskriminering.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 31: Likestilling og kjønnsmangfold
// LK20: Utforske korleis menneske har kjempa og kjempar for likestilling og
//        mot diskriminering, og drøfte kva likeverd og likestilling har å
//        seie for eit demokrati
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_31: TextbookChapter = {
  id: 'samfunnsfag-10-31',
  courseId: 'samfunnsfag-10',
  chapterNumber: '31',
  title: 'Likestilling og kjønnsmangfold',
  description: 'Lær om kampen for likestilling i Norge, kjønnsroller i endring, kjønnsmangfold og hva likeverd betyr i praksis.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis menneske har kjempa og kjempar for likestilling og mot diskriminering',
    'drøfte kva likeverd og likestilling har å seie for eit demokrati',
    'reflektere over korleis identitet, sjølvbilete og eigne grenser blir påverka og utvikla',
  ],
  keyTerms: [
    { term: 'Likestilling', definition: 'At alle mennesker har like rettigheter, muligheter og plikter uavhengig av kjønn' },
    { term: 'Likeverd', definition: 'At alle mennesker har lik verdi, uavhengig av kjønn, bakgrunn eller egenskaper' },
    { term: 'Kjønnsroller', definition: 'Samfunnets forventninger til hvordan kvinner og menn skal oppføre seg' },
    { term: 'Feminisme', definition: 'Bevegelse og tankeretning som arbeider for kvinners rettigheter og kjønnslikestilling' },
    { term: 'Kjønnsmangfold', definition: 'At det finnes flere måter å oppleve og uttrykke kjønn på enn bare mann og kvinne' },
    { term: 'Kjønnsidentitet', definition: 'Den indre opplevelsen av eget kjønn — som kan eller ikke kan samsvare med biologisk kjønn' },
    { term: 'Seksuell orientering', definition: 'Hvem man føler romantisk eller seksuell tiltrekning til' },
    { term: 'Glasstaket', definition: 'Usynlige barrierer som hindrer kvinner (eller andre grupper) fra å nå toppstillinger' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-31-intro',
      type: 'text',
      content: `## Er Norge verdens mest likestilte land?

Norge topper jevnlig internasjonale rangeringer over likestilling. Vi har høy yrkesdeltagelse blant kvinner, god foreldrepermisjon for begge kjønn, og kvinner i ledende posisjoner i politikk og næringsliv. Mange mener at likestillingskampen er «ferdig» — at vi allerede har oppnådd full likestilling.

Men er det virkelig slik? Kvinner tjener fortsatt i gjennomsnitt mindre enn menn. Arbeidsmarkedet er svært **kjønnsdelt** — kvinner dominerer i helse og omsorg, menn i teknologi og bygg. Kvinner gjør fortsatt mer husarbeid enn menn. Og personer som bryter med tradisjonelle kjønnsroller opplever fortsatt fordommer og diskriminering.

Likestilling handler dessuten ikke bare om kjønn. Det handler om det grunnleggende prinsippet at **alle mennesker har lik verdi** og skal ha like muligheter — uavhengig av hvem de er.

I dette kapittelet skal du lære om:
- Historien bak likestilling i Norge
- Kjønnsroller og hvordan de endrer seg
- Kjønnsmangfold og kjønnsidentitet
- Likestillingsutfordringer som gjenstår
- Hva likeverd betyr i et demokrati
- Diskriminering basert på kjønn og seksuell orientering`,
    },

    // ========== DEFINISJON: LIKESTILLING ==========
    {
      id: 'samfunnsfag-10-31-def-1',
      type: 'definition',
      title: 'Likestilling og likeverd',
      content: `**Likestilling** betyr at alle mennesker har like rettigheter, muligheter og plikter i samfunnet, uavhengig av kjønn. Likestilling handler ikke om at alle skal bli like, men om at kjønn ikke skal begrense hva du kan gjøre, bli eller oppnå.

**Likeverd** er et enda bredere begrep: Det betyr at alle mennesker har lik verdi, uavhengig av kjønn, etnisitet, funksjonsevne, seksuell orientering eller andre egenskaper.

**Formell likestilling** betyr at lovene behandler alle likt. I Norge har vi dette — kvinner og menn har de samme juridiske rettighetene.

**Reell likestilling** betyr at folk faktisk har like muligheter i praksis. Her gjenstår det mer arbeid — selv om lovene er like, kan kulturer, holdninger og strukturer skape ulikhet.

**Eksempel på forskjellen:** Alle har formelt rett til å søke alle jobber. Men hvis en kvinne i praksis ikke blir vurdert for en lederstilling fordi ubevisste fordommer favoriserer mannlige ledere, har hun ikke reell likestilling — selv om den formelle retten er der.`,
    },

    // ========== TEKST: KAMPEN FOR LIKESTILLING ==========
    {
      id: 'samfunnsfag-10-31-historie',
      type: 'text',
      content: `## Kampen for likestilling i Norge — en kort historie

Likestillingen vi har i Norge i dag kom ikke av seg selv. Den er resultatet av generasjoners kamp:

### Viktige milepæler
- **1854:** Kvinner fikk lik arverett som menn
- **1882:** Kvinner fikk adgang til å ta artium (tilsvarende examen)
- **1884:** Norsk Kvinnesaksforening ble stiftet av Gina Krog
- **1901:** Kvinner fikk begrenset stemmerett (for kvinner med en viss inntekt)
- **1913:** Kvinner fikk allmenn stemmerett — Norge var et av de første landene i verden
- **1959:** Likestillingsrådet ble opprettet
- **1978:** Likestillingsloven ble vedtatt — forbud mot kjønnsdiskriminering
- **1981:** Gro Harlem Brundtland ble Norges første kvinnelige statsminister, og utnevnte en regjering med nær halvparten kvinner
- **1993:** Loven om registrert partnerskap ga homofile par juridiske rettigheter
- **2008:** Felles ekteskapslov — homofile og heterofile fikk samme rett til å gifte seg
- **2016:** Lov om endring av juridisk kjønn — du kan selv velge juridisk kjønn uten medisinsk behandling

### Hvem kjempet?
**Feminisme** er bevegelsen som har drevet frem likestilling mellom kjønnene. Feminismen har gjennomgått flere faser (ofte kalt «bølger»):

- **Første bølge (1800-tallet — tidlig 1900-tall):** Kamp for juridiske rettigheter — stemmerett, utdanning, arverett
- **Andre bølge (1960-1980-tallet):** Kamp for reell likestilling — likelønn, rett til abort, barnehageutbygging
- **Tredje bølge (1990-2000-tallet):** Fokus på mangfold — interseksjonalitet, at kvinner ikke er en ensartet gruppe
- **Fjerde bølge (2010-tallet —):** Digitalt engasjement, #metoo-bevegelsen, fokus på seksuell trakassering`,
    },

    // ========== OPPGAVE 31.1 ==========
    {
      id: 'samfunnsfag-10-31-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-1',
        number: '31.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når fikk kvinner i Norge allmenn stemmerett?',
        options: [
          {
            id: 'a',
            text: '1884',
            isCorrect: false,
            feedback: 'Feil. I 1884 ble Norsk Kvinnesaksforening stiftet, men kvinnene fikk ikke stemmerett dette året.',
          },
          {
            id: 'b',
            text: '1901',
            isCorrect: false,
            feedback: 'Feil. I 1901 fikk kvinner begrenset stemmerett — bare kvinner med en viss inntekt. Allmenn stemmerett kom senere.',
          },
          {
            id: 'c',
            text: '1913',
            isCorrect: true,
            feedback: 'Riktig! I 1913 fikk alle kvinner i Norge stemmerett. Norge var et av de første landene i verden som innførte dette.',
          },
          {
            id: 'd',
            text: '1978',
            isCorrect: false,
            feedback: 'Feil. I 1978 ble likestillingsloven vedtatt, men kvinner hadde hatt stemmerett siden 1913.',
          },
        ],
        solution: 'Kvinner i Norge fikk allmenn stemmerett i 1913. Norge var et av de første landene i verden som ga kvinner denne rettigheten.',
      },
    },

    // ========== EKSEMPEL: KJØNNSROLLER ==========
    {
      id: 'samfunnsfag-10-31-eks-1',
      type: 'example',
      title: 'Kjønnsroller i endring',
      content: `**Kjønnsroller** er samfunnets forventninger til hvordan kvinner og menn skal oppføre seg, kle seg, jobbe og leve. Kjønnsroller er ikke biologisk bestemte — de varierer mellom kulturer og endrer seg over tid.

**For 50 år siden** var kjønnsrollene i Norge tydeligere:
- Far jobbet ute og tjente penger
- Mor var hjemme med barna og tok seg av husarbeidet
- Gutter lekte med biler, jenter med dukker
- Det var uvanlig med mannlige sykepleiere eller kvinnelige ingeniører

**I dag** har mye endret seg:
- De fleste kvinner er i lønnet arbeid
- Fedre tar mer ansvar for barn og hjem (fedrekvoten i foreldrepermisjonen ble innført i 1993)
- Det er mer akseptert å bryte med tradisjonelle kjønnsroller
- Likevel er arbeidsmarkedet fortsatt svært kjønnsdelt

**Det kjønnsdelte arbeidsmarkedet:** Norge har et av verdens mest kjønnsdelte arbeidsmarkeder. Kvinner dominerer i helse, omsorg og undervisning. Menn dominerer i teknologi, ingeniørfag og bygg. Dette har konsekvenser for lønn — de kvinnedominerte yrkene er ofte dårligere betalt enn de mannsdominerte, selv om de krever like lang utdanning.`,
    },

    // ========== OPPGAVE 31.2 ==========
    {
      id: 'samfunnsfag-10-31-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-2',
        number: '31.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kjønnsroller og det kjønnsdelte arbeidsmarkedet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med kjønnsroller og gi et eksempel på hvordan de har endret seg i Norge.',
            solution: 'Kjønnsroller er samfunnets forventninger til hvordan kvinner og menn skal oppføre seg. Eksempel på endring: For 50 år siden var det forventet at mødre var hjemme med barna. I dag er det normalt at begge foreldre jobber, og fedre tar langt mer ansvar for barneomsorg — blant annet gjennom fedrekvoten i foreldrepermisjonen.',
          },
          {
            label: 'b',
            task: 'Hva menes med det «kjønnsdelte arbeidsmarkedet», og hvorfor er dette et likestillingsproblem?',
            solution: 'Det kjønnsdelte arbeidsmarkedet betyr at kvinner og menn jobber i ulike yrker — kvinner dominerer i helse og omsorg, menn i teknikk og bygg. Dette er et likestillingsproblem fordi de kvinnedominerte yrkene ofte er dårligere betalt, noe som bidrar til lønnsforskjeller mellom kvinner og menn.',
          },
        ],
        hints: ['Tenk på yrkene til folk du kjenner — er de typisk «kvinneyrker» eller «manneyrker»?'],
        solution: 'Kjønnsroller endrer seg over tid, men det kjønnsdelte arbeidsmarkedet viser at samfunnets forventninger fortsatt påvirker hva kvinner og menn velger å jobbe med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KJØNNSMANGFOLD ==========
    {
      id: 'samfunnsfag-10-31-def-2',
      type: 'definition',
      title: 'Kjønnsmangfold og kjønnsidentitet',
      content: `**Kjønnsmangfold** betyr at det finnes flere måter å oppleve og uttrykke kjønn på enn den tradisjonelle todelingen i mann og kvinne.

**Viktige begreper:**

- **Biologisk kjønn:** De fysiske kjennetegnene som gjør at man vanligvis klassifiseres som hann eller hunn ved fødsel — kromosomer, hormoner og kjønnsorganer. Noen mennesker er intersex, som betyr at de har biologiske kjennetegn som ikke passer inn i den tradisjonelle todelingen.

- **Kjønnsidentitet:** Den indre opplevelsen av eget kjønn. For de fleste mennesker samsvarer kjønnsidentiteten med det biologiske kjønnet de ble tildelt ved fødsel. For noen gjør den ikke det.

- **Transpersoner:** Mennesker der kjønnsidentiteten ikke samsvarer med kjønnet de ble tildelt ved fødsel. En transperson kan for eksempel være biologisk mann, men oppleve seg som kvinne.

- **Ikke-binær:** Mennesker som opplever at verken «mann» eller «kvinne» beskriver deres kjønnsidentitet.

- **Cisperson:** En person der kjønnsidentiteten samsvarer med kjønnet tildelt ved fødsel (de fleste mennesker).

- **Seksuell orientering:** Hvem man føler romantisk eller seksuell tiltrekning til. Noen er heterofile (tiltrukket av det motsatte kjønn), homofile/lesbiske (tiltrukket av samme kjønn), bifile (tiltrukket av flere kjønn) eller aseksuelle (opplever lite eller ingen seksuell tiltrekning).

**Seksuell orientering og kjønnsidentitet er to ulike ting.** En transperson kan være heterofil, homofil, bifil eller aseksuell — akkurat som en cisperson.`,
    },

    // ========== EKSEMPEL: LOVGIVNING OG KJØNNSMANGFOLD ==========
    {
      id: 'samfunnsfag-10-31-eks-2',
      type: 'example',
      title: 'Skeiv historie i Norge — fra straff til rettigheter',
      content: `Historien til skeive (LHBT+) personer i Norge viser en dramatisk utvikling:

**Fra forbrytelse til rettigheter:**
- **1842-1972:** Homofili mellom menn var straffbart i Norge (paragraf 213 i straffeloven)
- **1972:** Avkriminalisering — homofili var ikke lenger straffbart
- **1981:** Norge ble et av de første landene i verden til å vedta forbud mot diskriminering basert på seksuell orientering
- **1993:** Lov om registrert partnerskap for homofile par
- **2008:** Felles ekteskapslov — homofile og heterofile fikk lik rett til å gifte seg og adoptere barn
- **2016:** Lov om endring av juridisk kjønn — personer over 16 år kan selv velge sitt juridiske kjønn

Denne utviklingen har skjedd fordi modige mennesker sto frem og kjempet for sine rettigheter, selv når det var vanskelig og farlig. Skeives organisasjoner, aktivister og støttespillere har over mange tiår arbeidet for å endre lover, holdninger og strukturer.

**I dag** er aksepten for skeive høy i Norge sammenlignet med mange andre land. Men utfordringer gjenstår: Hatprat mot skeive forekommer, og noen skeive opplever fortsatt diskriminering i arbeidslivet eller i nærmiljøet.`,
    },

    // ========== OPPGAVE 31.3 ==========
    {
      id: 'samfunnsfag-10-31-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-3',
        number: '31.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom kjønnsidentitet og seksuell orientering?',
        options: [
          {
            id: 'a',
            text: 'Det er det samme — begge handler om hvem man er tiltrukket av',
            isCorrect: false,
            feedback: 'Feil. Kjønnsidentitet og seksuell orientering er to ulike ting. Kjønnsidentitet handler om opplevelsen av eget kjønn, ikke om tiltrekning.',
          },
          {
            id: 'b',
            text: 'Kjønnsidentitet handler om den indre opplevelsen av eget kjønn, mens seksuell orientering handler om hvem man føler tiltrekning til',
            isCorrect: true,
            feedback: 'Riktig! Kjønnsidentitet handler om hvem du er, mens seksuell orientering handler om hvem du er tiltrukket av.',
          },
          {
            id: 'c',
            text: 'Kjønnsidentitet er biologisk bestemt, mens seksuell orientering er et valg',
            isCorrect: false,
            feedback: 'Feil. Verken kjønnsidentitet eller seksuell orientering er et bevisst valg. Forskning tyder på at begge har biologiske og psykologiske komponenter.',
          },
          {
            id: 'd',
            text: 'Seksuell orientering er medfødt, men kjønnsidentitet er en trend blant unge',
            isCorrect: false,
            feedback: 'Feil. Kjønnsidentitet er en grunnleggende del av en persons identitet. Transpersoner har eksistert i alle tider og alle kulturer.',
          },
        ],
        solution: 'Kjønnsidentitet handler om den indre opplevelsen av eget kjønn (hvem du er), mens seksuell orientering handler om hvem du føler romantisk eller seksuell tiltrekning til (hvem du er tiltrukket av). De to er uavhengige av hverandre.',
      },
    },

    // ========== OPPGAVE 31.4 ==========
    {
      id: 'samfunnsfag-10-31-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-4',
        number: '31.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skeives rettigheter i Norge har endret seg dramatisk de siste 50 årene.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort utviklingen fra da homofili var straffbart til den felles ekteskapsloven i 2008.',
            solution: 'Homofili mellom menn var straffbart i Norge fra 1842 til 1972. I 1972 ble det avkriminalisert. I 1993 kom lov om registrert partnerskap, og i 2008 fikk homofile og heterofile lik rett til å gifte seg gjennom den felles ekteskapsloven.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig at vi kjenner til denne historien?',
            solution: 'Det er viktig fordi det viser at rettigheter aldri er selvfølgelige — de er kjempet frem av modige mennesker. Det minner oss om at holdninger i samfunnet kan endres, og at diskriminering vi i dag tar avstand fra, en gang var akseptert eller lovfestet. Historien minner oss også om å beskytte rettighetene vi har oppnådd.',
          },
        ],
        hints: ['Tenk på hva som driver fremgang i rettigheter — hvem kjemper og hvordan?'],
        solution: 'Utviklingen fra kriminalisering til like rettigheter viser at samfunn kan forandre seg, og at kamp for rettigheter nytter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: UTFORDRINGER I DAG ==========
    {
      id: 'samfunnsfag-10-31-utfordringer',
      type: 'text',
      content: `## Likestillingsutfordringer i dag

Selv om Norge har kommet langt, gjenstår det utfordringer:

### Lønnsforskjeller
Kvinner tjener i gjennomsnitt ca. 87 kroner for hver 100 kroner menn tjener. Mye av dette skyldes det kjønnsdelte arbeidsmarkedet, men det finnes også lønnsforskjeller innenfor samme yrke og stilling.

### Seksuell trakassering
#Metoo-bevegelsen i 2017 viste at seksuell trakassering er utbredt i mange bransjer. Mange kvinner — og noen menn — fortalte om uønsket seksuell oppmerksomhet på arbeidsplassen, i idretten og i kultursektoren.

### Vold i nære relasjoner
Kvinner er langt oftere ofre for vold fra partner enn menn. I Norge opplever ca. 75 000 kvinner vold fra partner hvert år. Dette er et alvorlig likestillingsproblem som ofte er usynlig.

### Maskulinitet under press
Likestillingskampen handler ikke bare om kvinner. Mange gutter og menn opplever press fra snevre maskulinitetsnormer — forventninger om å være «tøff», ikke vise følelser og alltid prestere. Forskning viser at dette kan bidra til psykiske helseproblemer, og at gutter sjeldnere søker hjelp.

### Hatprat og diskriminering
Skeive, og særlig transpersoner, opplever hatprat og diskriminering. Angrepet mot London Pub i Oslo i 2022 — der to personer ble drept under Pride — var en påminnelse om at hat mot skeive fortsatt finnes.`,
    },

    // ========== OPPGAVE 31.5 ==========
    {
      id: 'samfunnsfag-10-31-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-5',
        number: '31.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Likestillingskampen i Norge er ferdig — vi har allerede full likestilling.»',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter argumenter som kan støtte denne påstanden.',
            solution: 'Argumenter for: Norge topper internasjonale likestillingsrangeringer. Kvinner har alle juridiske rettigheter. Begge kjønn har stemmerett, utdanningsmuligheter og yrkesdeltagelse. Homofile kan gifte seg. Det er lovforbud mot diskriminering.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter som taler mot påstanden.',
            solution: 'Argumenter mot: Lønnsforskjeller mellom kvinner og menn eksisterer fortsatt. Arbeidsmarkedet er sterkt kjønnsdelt. Seksuell trakassering er utbredt. Vold i nære relasjoner rammer kvinner uforholdsmessig. Snevre maskulinitetsnormer skaper problemer for gutter. Skeive opplever hatprat og diskriminering.',
          },
          {
            label: 'c',
            task: 'Hva mener du? Er likestillingskampen ferdig? Begrunn svaret ditt.',
            solution: 'Et godt svar skiller mellom formell og reell likestilling, anerkjenner at Norge har kommet langt, men peker på konkrete utfordringer som gjenstår. Eleven tar et begrunnet standpunkt.',
          },
        ],
        hints: [
          'Husk forskjellen mellom formell likestilling (lovene) og reell likestilling (praksis).',
          'Bruk gjerne eksempler fra kapittelet i argumentasjonen.',
        ],
        solution: 'Norge har formell likestilling, men det gjenstår utfordringer med reell likestilling — inkludert lønnsforskjeller, kjønnsdelt arbeidsmarked, seksuell trakassering og diskriminering av skeive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-31-oppsummering',
      type: 'text',
      content: `## Oppsummering: Likestilling og kjønnsmangfold

**Likestilling** er resultatet av generasjoners kamp for like rettigheter og muligheter.

**Nøkkelbegreper:**
- **Likestilling:** Like rettigheter og muligheter uavhengig av kjønn
- **Likeverd:** Alle mennesker har lik verdi
- **Formell vs. reell likestilling:** Lovene kan være like uten at praksis er det
- **Kjønnsroller:** Samfunnets forventninger til kvinner og menn — endrer seg over tid
- **Feminisme:** Bevegelse for kjønnslikestilling, i flere historiske bølger
- **Kjønnsmangfold:** Flere måter å oppleve kjønn på enn tradisjonell todeling
- **Kjønnsidentitet:** Indre opplevelse av eget kjønn
- **Seksuell orientering:** Hvem man er tiltrukket av — uavhengig av kjønnsidentitet
- **Glasstaket:** Usynlige barrierer mot toppstillinger
- **Kjønnsdelt arbeidsmarked:** Kvinner og menn jobber i ulike yrker, med konsekvenser for lønn`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-31-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-6',
        number: '31.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Helhetsoppgave: Koble likestilling til demokrati.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor likestilling er viktig for et demokrati.',
            solution: 'Demokrati bygger på at alle innbyggere har lik innflytelse og like muligheter til å delta. Hvis halve befolkningen (kvinner) ikke har stemmerett eller er utestengt fra beslutningsmakten, er det ikke et fullt demokrati. Likestilling sikrer at alle stemmer blir hørt og at beslutninger reflekterer hele befolkningen.',
          },
          {
            label: 'b',
            task: 'Gi et historisk eksempel og et aktuelt eksempel på sammenhengen mellom likestilling og demokrati.',
            solution: 'Historisk: Kampen for kvinnelig stemmerett (1913) handlet om at halvparten av befolkningen skulle få demokratisk medbestemmelse. Aktuelt: Underrepresentasjon av kvinner i ledende stillinger i næringslivet betyr at viktige beslutninger tas uten tilstrekkelig kjønnsmangfold blant beslutningstakerne.',
          },
        ],
        hints: ['Tenk på hva et demokrati trenger for å fungere godt — og hva som skjer når noen grupper er utelukket.'],
        solution: 'Likestilling er en forutsetning for fullverdig demokrati fordi demokrati handler om at alle innbyggere skal ha lik innflytelse og like muligheter til å delta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-31-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-31-ex-7',
        number: '31.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at Norge har et «kjønnsdelt arbeidsmarked»?',
        options: [
          {
            id: 'a',
            text: 'At kvinner og menn ikke har lov til å jobbe i de samme yrkene',
            isCorrect: false,
            feedback: 'Feil. Alle har formell rett til å jobbe i alle yrker. Det kjønnsdelte arbeidsmarkedet handler om faktiske mønstre, ikke juridiske begrensninger.',
          },
          {
            id: 'b',
            text: 'At kvinner og menn i praksis jobber i ulike yrker — kvinner dominerer helse og omsorg, menn dominerer teknologi og bygg',
            isCorrect: true,
            feedback: 'Riktig! Det kjønnsdelte arbeidsmarkedet betyr at kvinner og menn i stor grad velger ulike yrker, noe som blant annet bidrar til lønnsforskjeller.',
          },
          {
            id: 'c',
            text: 'At menn tjener dobbelt så mye som kvinner i alle yrker',
            isCorrect: false,
            feedback: 'Feil. Lønnsforskjellen er ca. 13 % i gjennomsnitt, ikke dobbelt. Og det handler ikke om at menn tjener mer i alle yrker, men om at kjønnsfordelingen mellom yrker er skjev.',
          },
          {
            id: 'd',
            text: 'At det bare er kvinner som jobber deltid',
            isCorrect: false,
            feedback: 'Feil. Selv om kvinner oftere jobber deltid, handler det kjønnsdelte arbeidsmarkedet om yrkesvalg, ikke arbeidstid.',
          },
        ],
        solution: 'Det kjønnsdelte arbeidsmarkedet betyr at kvinner og menn i praksis jobber i ulike yrker, med kvinner overrepresentert i helse og omsorg og menn overrepresentert i teknologi og bygg.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 32: Psykisk helse og livsmestring
// LK20: Reflektere over korleis identitet, sjølvbilete og eigne grenser blir
//        utvikla og påverka, og kunne handtere utfordringar
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_32: TextbookChapter = {
  id: 'samfunnsfag-10-32',
  courseId: 'samfunnsfag-10',
  chapterNumber: '32',
  title: 'Psykisk helse og livsmestring',
  description: 'Lær om hva psykisk helse er, vanlige utfordringer blant unge, stress og press, og hvordan du kan ta vare på deg selv og andre.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over korleis identitet, sjølvbilete og eigne grenser blir utvikla og påverka',
    'utforske og reflektere over eigen og andres bruk av digitale medium og drøfte kva det har å seie for sjølvbilete og relasjonar',
    'drøfte problemstillingar knytte til livsmestring og folkehelse',
  ],
  keyTerms: [
    { term: 'Psykisk helse', definition: 'Tilstanden til vår mentale og følelsesmessige velvære — evnen til å håndtere livets utfordringer' },
    { term: 'Livsmestring', definition: 'Å utvikle kunnskap og ferdigheter som hjelper deg å håndtere utfordringer i livet' },
    { term: 'Selvbilde', definition: 'Oppfatningen du har av deg selv — dine styrker, svakheter og verdi' },
    { term: 'Stress', definition: 'Kroppens reaksjon på krav og utfordringer — kan være både positivt og negativt' },
    { term: 'Mestringstro', definition: 'Troen på at du kan håndtere utfordringer og oppnå det du ønsker' },
    { term: 'Sosiale medier', definition: 'Digitale plattformer for kommunikasjon og innholdsdeling som kan påvirke psykisk helse' },
    { term: 'Resiliens', definition: 'Evnen til å komme seg etter motgang og tilpasse seg vanskelige situasjoner' },
    { term: 'Stigma', definition: 'Negative holdninger og fordommer knyttet til for eksempel psykiske lidelser' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-32-intro',
      type: 'text',
      content: `## Alle har en psykisk helse

Du tar det som en selvfølge å ta vare på kroppen din — du spiser, sover, trener og går til legen når du er syk. Men hva med den psykiske helsen din? Den indre verdenen av tanker, følelser, relasjoner og selvbilde som avgjør om du har det bra — eller ikke?

**Psykisk helse** er noe alle har, akkurat som fysisk helse. Noen dager er bedre enn andre. Noen perioder er tunge, andre er gode. Det er helt normalt.

Ungdomstiden er spesielt utfordrende for mange. Kroppen endrer seg, identiteten formes, relasjoner er intense, og presset fra skolen, sosiale medier og omgivelsene kan føles overveldende. Forskning viser at psykiske plager blant unge har økt de siste årene — særlig stress, angst og ensomhet.

Livsmestring handler om å utvikle kunnskap og ferdigheter som hjelper deg å håndtere utfordringene du møter. Det handler ikke om å alltid være glad, men om å ha verktøy for å takle vanskelige tider.

I dette kapittelet skal du lære om:
- Hva psykisk helse og livsmestring betyr
- Vanlige psykiske utfordringer blant unge
- Stress, press og sosiale mediers påvirkning
- Selvbilde og identitet
- Hvordan du kan ta vare på din psykiske helse
- Hvor du kan få hjelp — og hvorfor det er viktig å tørre å snakke`,
    },

    // ========== DEFINISJON: PSYKISK HELSE ==========
    {
      id: 'samfunnsfag-10-32-def-1',
      type: 'definition',
      title: 'Psykisk helse',
      content: `**Psykisk helse** handler om hvordan du har det inni deg — dine tanker, følelser og evne til å håndtere hverdagen. God psykisk helse betyr ikke at du alltid er glad, men at du har det grunnleggende bra og klarer å håndtere livets oppturer og nedturer.

Verdens helseorganisasjon (WHO) definerer psykisk helse som «en tilstand av velvære der individet kan realisere sine evner, håndtere normalt stress i livet, arbeide produktivt og bidra til fellesskapet».

**Viktige skiller:**
- **Psykisk helse:** Noe alle har — et kontinuum fra god til dårlig, som varierer gjennom livet
- **Psykiske plager:** Tilstander som er belastende, men som er vanlige og ofte går over — for eksempel søvnproblemer, stress, tristhet eller bekymring
- **Psykiske lidelser:** Mer alvorlige tilstander som påvirker fungering i hverdagen og som kan trenge behandling — for eksempel depresjon, angstlidelser eller spiseforstyrrelser

Ca. **15-20 % av barn og unge** opplever psykiske plager som påvirker hverdagen. Det betyr at i en vanlig skoleklasse har flere elever slike utfordringer — selv om det ikke alltid synes utenpå.

Det er viktig å understreke: **Psykiske plager er ikke et tegn på svakhet.** Det er en naturlig del av å være menneske, og det finnes god hjelp å få.`,
    },

    // ========== EKSEMPEL: PSYKISK HELSE SOM GLIDENDE SKALA ==========
    {
      id: 'samfunnsfag-10-32-eks-1',
      type: 'example',
      title: 'Den psykiske helsen som en glidende skala',
      content: `Tenk deg psykisk helse som en skala fra 1 til 10, der 10 er fantastisk og 1 er veldig dårlig. De fleste av oss beveger oss opp og ned på denne skalaen gjennom livet:

- **8-10:** Du har det bra, føler deg energisk, takler utfordringer, har gode relasjoner og ser lyst på fremtiden.
- **5-7:** Du fungerer i hverdagen, men noe gnager. Kanskje du sover dårlig, er mer irritabel enn vanlig, eller bekymrer deg mye.
- **3-4:** Du sliter. Hverdagen er tung, du trekker deg kanskje unna venner, konsentrasjon er vanskelig, og du føler deg nedfor over tid.
- **1-2:** Du trenger hjelp. Hverdagen fungerer ikke, og du har kanskje tanker om at livet ikke er verdt å leve.

**Det viktige å forstå:** Det er normalt å bevege seg mellom nivåer. Alle har dårlige perioder. Men hvis du ligger lavt over lengre tid, er det viktig å snakke med noen og søke hjelp.

Mange unge tror at alle andre har det bra — at det bare er dem som sliter. Sannheten er at de aller fleste opplever perioder der de har det vanskelig. Du er ikke alene.`,
    },

    // ========== OPPGAVE 32.1 ==========
    {
      id: 'samfunnsfag-10-32-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-1',
        number: '32.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom psykiske plager og psykiske lidelser?',
        options: [
          {
            id: 'a',
            text: 'Det er ingen forskjell — det er det samme',
            isCorrect: false,
            feedback: 'Feil. Det er en viktig forskjell i alvorlighetsgrad og varighet.',
          },
          {
            id: 'b',
            text: 'Psykiske plager er vanlige og ofte forbigående, mens psykiske lidelser er mer alvorlige og kan trenge behandling',
            isCorrect: true,
            feedback: 'Riktig! Psykiske plager (som stress og tristhet) er vanlige og går ofte over. Psykiske lidelser (som depresjon og angstlidelser) er mer alvorlige og påvirker funksjonen i hverdagen.',
          },
          {
            id: 'c',
            text: 'Psykiske plager rammer bare voksne, mens psykiske lidelser rammer bare unge',
            isCorrect: false,
            feedback: 'Feil. Både plager og lidelser kan ramme mennesker i alle aldre.',
          },
          {
            id: 'd',
            text: 'Psykiske lidelser er noe man velger å ha, mens psykiske plager kommer av seg selv',
            isCorrect: false,
            feedback: 'Feil. Ingen velger å ha psykiske lidelser. De kan skyldes en kombinasjon av biologiske, psykologiske og sosiale faktorer.',
          },
        ],
        solution: 'Psykiske plager er vanlige tilstander som stress og tristhet som ofte er forbigående. Psykiske lidelser er mer alvorlige, varer lengre og påvirker hverdagsfunksjonen — de kan trenge profesjonell behandling.',
      },
    },

    // ========== DEFINISJON: STRESS OG PRESS ==========
    {
      id: 'samfunnsfag-10-32-def-2',
      type: 'definition',
      title: 'Stress og press blant unge',
      content: `**Stress** er kroppens reaksjon på krav og utfordringer. Litt stress er normalt og kan faktisk hjelpe deg å prestere — det kalles **positivt stress** (eustress). Men for mye stress over lang tid kan være skadelig — det kalles **negativt stress** (distress).

**Vanlige stresskilder for unge:**
- **Skolepress:** Karakterer, prøver, innleveringer og forventninger om å prestere
- **Sosiale medier:** Konstant sammenligning med andre, press om å se bra ut og ha et «perfekt» liv
- **Venner og relasjoner:** Konflikter, utestengning, press om å passe inn
- **Fremtidsbekymring:** Usikkerhet om videregående, utdanning og jobb
- **Kroppspress:** Urealistiske skjønnhetsidealer fra reklame og sosiale medier
- **Familiesituasjon:** Skilsmisse, konflikter, sykdom eller dårlig økonomi hjemme

**Tegn på for mye stress:**
- Søvnproblemer
- Hodepine eller mageproblemer
- Irritabilitet eller sinne
- Konsentrasjonsvansker
- Tilbaketrekking fra venner og aktiviteter
- Følelse av å ikke mestre noe

Forskning fra Ungdata-undersøkelsen viser at en betydelig andel norske ungdommer rapporterer om høyt stressnivå, særlig knyttet til skolearbeid. Jenter rapporterer oftere psykiske plager enn gutter, men det betyr ikke nødvendigvis at de har det verre — det kan også handle om at gutter sjeldnere rapporterer plager.`,
    },

    // ========== EKSEMPEL: SOSIALE MEDIER ==========
    {
      id: 'samfunnsfag-10-32-eks-2',
      type: 'example',
      title: 'Sosiale medier og selvbilde',
      content: `Sosiale medier er en stor del av mange unges hverdag. De gir muligheter for kontakt, underholdning og informasjon — men forskning viser at de også kan påvirke psykisk helse negativt.

**Sammenligningsfellen:** På Instagram og TikTok ser du andre på sitt beste. Bilder er redigert, øyeblikk er nøye kuratert, og «virkeligheten» som vises er sterkt filtrert. Når du sammenligner ditt vanlige hverdagsliv med andres «highlight reel», kan du fort føle deg utilstrekkelig.

**Likes som validering:** Mange unge knytter selvfølelsen til likes og kommentarer. Får du mange likes, føler du deg bra. Får du få, kan det føles som en avvisning. Dette skaper en avhengighet av ytre bekreftelse.

**Forskning viser:**
- Unge som bruker mer enn 3 timer daglig på sosiale medier har økt risiko for psykiske plager
- Passivt bruk (scrolling uten å delta) er mer negativt enn aktivt bruk (kommunikasjon med venner)
- Sosiale medier kan forsterke kroppspress, særlig blant jenter
- Men sosiale medier kan også gi fellesskap og støtte, spesielt for unge som føler seg annerledes

**Merk:** Sosiale medier er verken bare gode eller bare dårlige. Det viktige er å være bevisst på hvordan de påvirker deg, og å ta pauser når du trenger det.`,
    },

    // ========== OPPGAVE 32.2 ==========
    {
      id: 'samfunnsfag-10-32-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-2',
        number: '32.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sosiale medier og psykisk helse.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med «sammenligningsfellen» på sosiale medier.',
            solution: 'Sammenligningsfellen betyr at man sammenligner sitt eget vanlige hverdagsliv med det filtrerte og nøye kuraterte innholdet andre legger ut på sosiale medier. Fordi andre bare viser sin beste side, kan man føle seg utilstrekkelig — selv om bildet man sammenligner seg med ikke er representativt for virkeligheten.',
          },
          {
            label: 'b',
            task: 'Gi eksempler på både positive og negative sider ved sosiale medier for unges psykiske helse.',
            solution: 'Positive sider: Fellesskap og kontakt med venner, støttegrupper for unge som føler seg annerledes, tilgang til informasjon og selvhjelp. Negative sider: Sammenligning med andre, kroppspress fra filtrerte bilder, avhengighet av likes som validering, søvnproblemer fra skjermbruk, og cybermobbing.',
          },
        ],
        hints: ['Tenk på din egen bruk av sosiale medier — hva gir deg noe positivt, og hva gjør deg urolig?'],
        solution: 'Sosiale medier har både positive og negative sider for psykisk helse. Bevissthet om sammenligningsfellen og egne reaksjoner er viktig for sunn bruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: LIVSMESTRING ==========
    {
      id: 'samfunnsfag-10-32-def-3',
      type: 'definition',
      title: 'Livsmestring og resiliens',
      content: `**Livsmestring** er et begrep som brukes i LK20-læreplanen. Det handler om å utvikle kunnskap, ferdigheter og holdninger som hjelper deg å håndtere utfordringer og ta gode valg i livet.

Livsmestring betyr ikke at du skal mestre alt perfekt — det betyr at du har verktøy for å takle vanskelige situasjoner.

**Viktige aspekter ved livsmestring:**
- **Selvbevissthet:** Å kjenne egne følelser, styrker, svakheter og verdier
- **Emosjonell regulering:** Å håndtere sterke følelser som sinne, frykt og tristhet uten å bli overveldet
- **Relasjonsbygging:** Å danne og opprettholde gode relasjoner med andre mennesker
- **Problemløsning:** Å se utfordringer som noe som kan løses, steg for steg
- **Hjelpsøking:** Å vite når og hvor du kan få hjelp — og å tørre å be om det

**Resiliens** er evnen til å komme seg etter motgang og tilpasse seg vanskelige situasjoner. Resiliens er ikke en fast egenskap — den kan utvikles og styrkes gjennom erfaringer, relasjoner og bevisst øvelse.

**Hva styrker resiliens?**
- Minst én trygg voksen i livet ditt
- Gode vennskap
- Mestringsopplevelser (å oppleve at du får til noe)
- Fysisk aktivitet
- Mulighet til å snakke om følelser
- Opplevelsen av å bety noe for andre`,
    },

    // ========== TEKST: HVOR FÅR DU HJELP ==========
    {
      id: 'samfunnsfag-10-32-hjelp',
      type: 'text',
      content: `## Hvor kan du få hjelp?

Det viktigste budskapet om psykisk helse er: **Du trenger ikke å håndtere alt alene.** Det er et tegn på styrke — ikke svakhet — å be om hjelp.

### Hvem kan du snakke med?
- **En du stoler på:** En forelder, lærer, trener, søsken eller annen voksen du føler deg trygg med
- **Venner:** Å dele med en god venn kan lette byrden, selv om det ikke erstatter profesjonell hjelp
- **Helsesykepleier:** Finnes på alle skoler og er gratis å snakke med — hun/han har taushetsplikt
- **Fastlegen:** Kan hjelpe med videre henvisning til psykolog eller annen behandling

### Anonyme hjelpetjenester
- **Mental Helse: 116 123** — Døgnåpen telefon for alle som trenger noen å snakke med
- **Kirkens SOS: 22 40 00 40** — Døgnåpen lyttelinje
- **Alarmtelefonen for barn og unge: 116 111** — Gratis, døgnåpen
- **ung.no** — Offentlig informasjonskanal for unge med chat-tjeneste

### Når bør du søke hjelp?
- Når du har det vondt over lengre tid (flere uker)
- Når følelsene dine hindrer deg i å gjøre ting du pleier
- Når du har tanker om å skade deg selv
- Når noen du kjenner forteller at de har det vanskelig
- Når du er bekymret for en venn

**Å være en god venn:** Hvis en venn forteller deg at hun/han sliter, er det viktigste å lytte uten å dømme. Du trenger ikke å ha alle svar — det viktige er å vise at du bryr deg. Og husk: Hvis en venn forteller om alvorlige ting (selvskading, selvmordstanker), er det viktig å involvere en voksen — selv om vennen ber deg om å ikke si noe. Å bryte et løfte for å redde et liv er alltid riktig.`,
    },

    // ========== OPPGAVE 32.3 ==========
    {
      id: 'samfunnsfag-10-32-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-3',
        number: '32.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er resiliens?',
        options: [
          {
            id: 'a',
            text: 'En psykisk lidelse som rammer unge',
            isCorrect: false,
            feedback: 'Feil. Resiliens er ikke en lidelse — det er en positiv egenskap som kan utvikles.',
          },
          {
            id: 'b',
            text: 'Evnen til å aldri ha negative følelser',
            isCorrect: false,
            feedback: 'Feil. Resiliens betyr ikke at du aldri har det vondt, men at du klarer å komme deg etter motgang.',
          },
          {
            id: 'c',
            text: 'Evnen til å komme seg etter motgang og tilpasse seg vanskelige situasjoner',
            isCorrect: true,
            feedback: 'Riktig! Resiliens handler om å kunne reise seg igjen etter tunge perioder og tilpasse seg utfordringer.',
          },
          {
            id: 'd',
            text: 'Et annet ord for fysisk styrke',
            isCorrect: false,
            feedback: 'Feil. Resiliens handler om psykisk motstandskraft, ikke fysisk styrke.',
          },
        ],
        solution: 'Resiliens er evnen til å komme seg etter motgang og tilpasse seg vanskelige situasjoner. Det er ikke en fast egenskap, men noe som kan utvikles gjennom trygge relasjoner, mestringsopplevelser og gode vaner.',
      },
    },

    // ========== OPPGAVE 32.4 ==========
    {
      id: 'samfunnsfag-10-32-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-4',
        number: '32.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stigma og psykisk helse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med stigma knyttet til psykisk helse? Gi et eksempel.',
            solution: 'Stigma betyr negative holdninger og fordommer knyttet til psykiske lidelser. Eksempel: En person som er åpen om at hen har depresjon, kan oppleve at andre unngår vedkommende, snakker bak ryggen, eller mener at personen bare bør «ta seg sammen». Stigma kan føre til at folk ikke tør å søke hjelp.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å redusere stigma knyttet til psykisk helse?',
            solution: 'Stigma hindrer folk fra å søke hjelp fordi de er redde for å bli stemplet. Hvis folk ikke søker hjelp, kan plagene bli verre. Ved å snakke åpent om psykisk helse, normalisere at alle har gode og dårlige perioder, og vise at det er styrke i å be om hjelp, kan flere få den støtten de trenger.',
          },
        ],
        hints: ['Tenk på hvordan det ville føles å fortelle noen at du sliter psykisk — hva er du redd for?'],
        solution: 'Stigma rundt psykisk helse hindrer folk fra å søke hjelp. Å snakke åpent om psykisk helse og normalisere at alle har utfordringer er viktig for å redusere stigma.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-32-oppsummering',
      type: 'text',
      content: `## Oppsummering: Psykisk helse og livsmestring

**Psykisk helse** er noe alle har, og det er normalt at den varierer gjennom livet.

**Nøkkelbegreper:**
- **Psykisk helse:** Mental og følelsesmessig velvære — et kontinuum fra god til dårlig
- **Psykiske plager vs. lidelser:** Plager er vanlige og ofte forbigående; lidelser er mer alvorlige og kan trenge behandling
- **Stress:** Kroppens reaksjon på krav — kan være positivt (eustress) eller negativt (distress)
- **Livsmestring:** Kunnskap og ferdigheter for å håndtere utfordringer
- **Resiliens:** Evnen til å komme seg etter motgang — kan styrkes
- **Selvbilde:** Oppfatningen du har av deg selv
- **Mestringstro:** Troen på at du kan håndtere utfordringer
- **Stigma:** Negative holdninger som hindrer folk fra å søke hjelp

**Husk:** Det er et tegn på styrke å be om hjelp. Mental Helse (116 123), Kirkens SOS (22 40 00 40) og helsesykepleier på skolen er der for deg.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-32-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-5',
        number: '32.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Ungdata-undersøkelsene viser at psykiske plager blant unge har økt de siste årene. Hva kan årsakene være, og hva kan gjøres for å snu trenden?',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter minst tre mulige årsaker til at flere unge rapporterer psykiske plager.',
            solution: 'Mulige årsaker: (1) Økt press gjennom sosiale medier og sammenligning med andre. (2) Høyere skolepress og prestasjonspress. (3) Større åpenhet om psykisk helse gjør at flere rapporterer plager (som ikke nødvendigvis betyr at flere har det verre). (4) Ensomhet, delvis forsterket av digitalisering. (5) Økonomisk usikkerhet og fremtidsbekymring.',
          },
          {
            label: 'b',
            task: 'Foreslå tre tiltak som kan bedre unges psykiske helse.',
            solution: 'Mulige tiltak: (1) Styrke skolehelsetjenesten med flere helsesykepleiere. (2) Innføre mer fokus på livsmestring og psykisk helse i skolen. (3) Tilrettelegge for fysisk aktivitet og sosiale møteplasser. (4) Redusere karakterpress, for eksempel færre tester. (5) Digital folkeopplysning om sunn mediebruk.',
          },
          {
            label: 'c',
            task: 'Hvem har ansvaret for unges psykiske helse — individet, familien, skolen eller samfunnet? Begrunn svaret ditt.',
            solution: 'Et godt svar anerkjenner at ansvaret er delt: Individet kan lære mestringsstrategier, familien gir trygghet og støtte, skolen kan tilrettelegge og redusere press, og samfunnet kan sikre gode hjelpetjenester og bekjempe strukturelle problemer. Psykisk helse er et fellesansvar.',
          },
        ],
        hints: [
          'Tenk på hva som påvirker deg og dine venner mest.',
          'Prøv å skille mellom individuelle og strukturelle tiltak.',
        ],
        solution: 'Økningen i psykiske plager blant unge har mange årsaker — fra sosiale medier til skolepress. Løsningene krever innsats fra individet, familien, skolen og samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-32-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-32-ex-6',
        number: '32.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om psykisk helse er riktig?',
        options: [
          {
            id: 'a',
            text: 'Psykiske plager er et tegn på at man er svak',
            isCorrect: false,
            feedback: 'Feil. Psykiske plager er vanlige og kan ramme alle, uavhengig av styrke eller personlighet. Ca. 15-20 % av unge opplever psykiske plager.',
          },
          {
            id: 'b',
            text: 'Hvis en venn forteller om selvmordstanker, bør du alltid holde det hemmelig',
            isCorrect: false,
            feedback: 'Feil. Hvis en venn forteller om selvmordstanker, er det viktig å involvere en voksen. Å bryte et løfte for å redde et liv er alltid riktig.',
          },
          {
            id: 'c',
            text: 'God psykisk helse betyr at du alltid er glad',
            isCorrect: false,
            feedback: 'Feil. God psykisk helse betyr ikke fravær av negative følelser — det betyr at du har evnen til å håndtere livets oppturer og nedturer.',
          },
          {
            id: 'd',
            text: 'Å be om hjelp med psykisk helse er et tegn på styrke, ikke svakhet',
            isCorrect: true,
            feedback: 'Riktig! Det krever mot å erkjenne at man trenger hjelp og å oppsøke den. Helsesykepleier, fastlege og hjelpetjenester som Mental Helse (116 123) er der for deg.',
          },
        ],
        solution: 'Å be om hjelp med psykisk helse er et tegn på styrke. Psykiske plager er vanlige og kan ramme alle. God hjelp finnes — blant annet hos helsesykepleier, fastlegen og hjelpetjenester som Mental Helse (116 123).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 33: Rus og kriminalitet
// LK20: Drøfte problemstillingar knytte til rusmiddel, kriminalitet og
//        uønskt sosial kontroll
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_33: TextbookChapter = {
  id: 'samfunnsfag-10-33',
  courseId: 'samfunnsfag-10',
  chapterNumber: '33',
  title: 'Rus og kriminalitet',
  description: 'Lær om rusmidler og deres konsekvenser, ungdomskriminalitet, strafferettslige reaksjoner og hvordan samfunnet forebygger rus og kriminalitet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'drøfte problemstillingar knytte til rusmiddel, kriminalitet og uønskt sosial kontroll',
    'reflektere over korleis identitet, sjølvbilete og eigne grenser blir utvikla og påverka',
    'drøfte kva rettar og plikter som gjeld for ungdom, og korleis rettssystemet fungerer',
  ],
  keyTerms: [
    { term: 'Rusmiddel', definition: 'Stoffer som påvirker hjernen og endrer stemningsleie, tenkning eller atferd — inkluderer alkohol, narkotika og tobakk' },
    { term: 'Avhengighet', definition: 'Tilstand der en person har mistet kontroll over bruken av et rusmiddel og fortsetter til tross for negative konsekvenser' },
    { term: 'Kriminalitet', definition: 'Handlinger som bryter med straffeloven og kan straffes av rettssystemet' },
    { term: 'Kriminell lavalder', definition: 'Alderen der man kan straffes for lovbrudd — i Norge er denne 15 år' },
    { term: 'Forebygging', definition: 'Tiltak som skal hindre at problemer som rus og kriminalitet oppstår' },
    { term: 'Gruppepress', definition: 'Press fra jevnaldrende om å gjøre noe man egentlig ikke vil — for eksempel å drikke alkohol eller prøve narkotika' },
    { term: 'Sosial kontroll', definition: 'Mekanismer i samfunnet som regulerer folks atferd — kan være formell (lover) eller uformell (normer)' },
    { term: 'Rusreform', definition: 'Forslag om å endre hvordan samfunnet håndterer rusmiddelbruk, for eksempel å gå fra straff til helsehjelp' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-33-intro',
      type: 'text',
      content: `## Valg, konsekvenser og samfunnets grenser

I løpet av ungdomstiden vil du møte situasjoner der du må ta vanskelige valg. Kanskje noen tilbyr deg alkohol på en fest. Kanskje du kjenner noen som har begynt å røyke cannabis. Kanskje du hører om jevnaldrende som har blitt tatt for butikktyveri.

Rus og kriminalitet er temaer som angår unge direkte — ikke fordi alle unge driver med dette, men fordi du før eller senere vil møte situasjoner der du må ta stilling. Da er det viktig å ha kunnskap: Hva gjør rusmidler med kroppen og hjernen? Hva sier loven? Hva skjer hvis du bryter den? Og hva er egentlig de beste måtene å forebygge rus og kriminalitet på?

Dette er også et tema der folk er uenige. Noen mener at strenge straffer er den beste måten å bekjempe narkotikabruk på. Andre mener at helsehjelp og forebygging er mer effektivt. Begge perspektivene fortjener å bli tatt på alvor.

I dette kapittelet skal du lære om:
- Ulike typer rusmidler og deres virkninger
- Hvorfor noen begynner med rus — og hvorfor noen blir avhengige
- Ungdomskriminalitet i Norge
- Strafferettslige reaksjoner for unge lovbrytere
- Forebygging av rus og kriminalitet
- Debatten om norsk ruspolitikk`,
    },

    // ========== DEFINISJON: RUSMIDLER ==========
    {
      id: 'samfunnsfag-10-33-def-1',
      type: 'definition',
      title: 'Rusmidler og deres virkninger',
      content: `**Rusmidler** er stoffer som påvirker hjernen og endrer stemningsleie, tenkning eller atferd. De deles vanligvis inn i:

**Legale rusmidler:**
- **Alkohol:** Det mest brukte rusmiddelet i Norge. Lovlig fra 18 år (øl og vin) og 20 år (brennevin). Alkohol demper hemninger, svekker dømmekraft og koordinasjon, og kan ved stort inntak føre til alkoholforgiftning. Langvarig bruk kan gi leverskader, avhengighet og psykiske problemer.
- **Tobakk og snus:** Inneholder nikotin, et svært avhengighetsskapende stoff. Røyking er den viktigste forebyggbare dødsårsaken i verden. Aldersgrense 18 år.

**Illegale rusmidler (narkotika):**
- **Cannabis (hasj/marihuana):** Det mest brukte illegale rusmiddelet blant unge. Kan gi avslappethet og endret virkelighetsoppfatning, men også angst, paranoia og konsentrasjonsproblemer. Forskning viser at cannabis kan være særlig skadelig for hjerner i utvikling (under 25 år).
- **Amfetamin og kokain:** Sentralstimulerende stoffer som gir økt energi og eufori, men som har høy avhengighetsrisiko og kan gi alvorlige helseskader.
- **MDMA (ecstasy):** Gir eufori og nærhetsfølelse, men kan gi dehydrering, overoppheting og i sjeldne tilfeller død.
- **Opioider (heroin, fentanyl):** Sterkt avhengighetsskapende og potensielt dødelige stoffer.

**Avhengighet** oppstår når hjernen tilpasser seg et rusmiddel slik at man trenger stadig mer for å oppnå samme effekt, og opplever ubehag (abstinens) uten stoffet. Avhengighet er en sykdom, ikke en moralsk svakhet.

Mens de fleste fagfolk i dag betrakter avhengighet som en sykdom, er det politisk uenighet om dette bør føre til avkriminalisering av bruk eller om straffereaksjoner har en viktig forebyggende effekt.`,
    },

    // ========== EKSEMPEL: RISIKOFAKTORER ==========
    {
      id: 'samfunnsfag-10-33-eks-1',
      type: 'example',
      title: 'Hvorfor begynner noen med rus?',
      content: `Det er sjelden én enkelt grunn til at noen begynner med rusmidler. Forskning peker på flere **risikofaktorer:**

- **Nysgjerrighet:** Naturlig utforskertrang i ungdomsårene
- **Gruppepress:** Ønske om å passe inn og bli akseptert av venner
- **Tilgjengelighet:** Lettere tilgang øker sannsynligheten for bruk
- **Vanskelig hjemmesituasjon:** Konflikter, vold, omsorgssvikt eller rusmisbruk i familien
- **Psykiske plager:** Noen bruker rus for å «selvmedisinere» angst, depresjon eller ensomhet
- **Manglende mestring:** Dårlige erfaringer på skolen eller i sosiale sammenhenger

Men det finnes også **beskyttende faktorer:**
- Gode relasjoner til foreldre og andre voksne
- Venner som ikke ruser seg
- Mestringsopplevelser (skole, idrett, hobbyer)
- Kunnskap om konsekvenser
- Godt selvbilde og evne til å si nei

**Viktig:** De aller fleste norske ungdommer bruker ikke narkotika. Ungdata-undersøkelsen viser at de fleste unge har det bra, trives på skolen og har gode venner. Bildet av ungdom som «alltid ruser seg» stemmer ikke med virkeligheten.`,
    },

    // ========== OPPGAVE 33.1 ==========
    {
      id: 'samfunnsfag-10-33-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-1',
        number: '33.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den kriminelle lavalderen i Norge?',
        options: [
          {
            id: 'a',
            text: '13 år',
            isCorrect: false,
            feedback: 'Feil. 13 år er ikke den kriminelle lavalderen i Norge.',
          },
          {
            id: 'b',
            text: '15 år',
            isCorrect: true,
            feedback: 'Riktig! I Norge er den kriminelle lavalderen 15 år. Det betyr at personer under 15 år ikke kan straffes, men barnevernet kan sette inn tiltak.',
          },
          {
            id: 'c',
            text: '16 år',
            isCorrect: false,
            feedback: 'Feil. Den kriminelle lavalderen i Norge er 15 år, ikke 16.',
          },
          {
            id: 'd',
            text: '18 år',
            isCorrect: false,
            feedback: 'Feil. 18 år er myndighetsalderen, men den kriminelle lavalderen er 15 år.',
          },
        ],
        solution: 'Den kriminelle lavalderen i Norge er 15 år. Det betyr at du fra og med 15 år kan bli strafferettslig ansvarlig for lovbrudd.',
      },
    },

    // ========== DEFINISJON: KRIMINALITET ==========
    {
      id: 'samfunnsfag-10-33-def-2',
      type: 'definition',
      title: 'Ungdomskriminalitet og rettssystemet',
      content: `**Kriminalitet** er handlinger som bryter straffeloven. I Norge er den **kriminelle lavalderen 15 år** — det betyr at personer under 15 år ikke kan straffes, men barnevernet kan gripe inn med tiltak.

**Vanlige lovbrudd blant unge:**
- Butikktyveri og nasking
- Narkotikarelaterte lovbrudd (bruk, besittelse, salg)
- Vold og trusler
- Hærverk og skadeverk
- Digital kriminalitet (hacking, deling av bilder uten samtykke)

**Strafferettslige reaksjoner for unge (15-17 år):**
- **Påtaleunnlatelse:** Saken henlegges, men den unge får en advarsel
- **Ungdomsstraff:** Et alternativ til fengsel for unge mellom 15-17 år. Innebærer oppfølging, samtaler og gjennomføring av en ungdomsplan — ofte over 6 måneder til 2 år
- **Ungdomsoppfølging:** Et tiltak for unge under 18 som har begått lovbrudd — innebærer jevnlig kontakt med en koordinator
- **Samfunnsstraff:** Utføre ubetalt arbeid for samfunnet
- **Betinget fengsel:** Dommen utsettes — hvis du holder deg unna ny kriminalitet, slipper du å sone
- **Fengsel:** Brukes sjelden for unge under 18 år — bare ved svært alvorlige lovbrudd

Rettssystemet behandler unge lovbrytere annerledes enn voksne fordi forskning viser at ungdomshjernen ikke er fullt utviklet, og at unge har større mulighet for endring. Formålet med straff for unge er primært **rehabilitering** (å hjelpe dem tilbake til et lovlydig liv), ikke bare avskrekking.`,
    },

    // ========== EKSEMPEL: UNGDOMSSTRAFF ==========
    {
      id: 'samfunnsfag-10-33-eks-2',
      type: 'example',
      title: 'Ungdomsstraff — et alternativ til fengsel',
      content: `Ungdomsstraff ble innført i Norge i 2014 som et alternativ til fengsel for unge mellom 15 og 17 år. I stedet for å bli satt i fengsel, får den unge en individuell plan som kan inneholde:

- Jevnlige samtaler med en koordinator
- Skole- eller yrkesrettet oppfølging
- Rustesting
- Mekling med offeret (gjenopprettende rett)
- Mentorordning med en trygg voksen
- Fritidsaktiviteter

**Tenkt eksempel:** Markus (16) ble tatt for besittelse av cannabis og hærverk. I stedet for fengselsstraff fikk han ungdomsstraff i 12 måneder. Han fikk en koordinator han møtte ukentlig, begynte på en mekanikkutdanning, og møtte offeret for hærverket i et meklingsmøte der han ba om unnskyldning og ble enig om å betale for skadene.

**Hvorfor dette alternativet?** Forskning viser at fengsel ofte gjør ting verre for unge — de møter eldre kriminelle, mister skoletid og sosiale nettverk, og risikoen for å begå nye lovbrudd øker. Ungdomsstraff gir den unge en sjanse til å ta ansvar, rette opp skaden og bygge et bedre liv.`,
    },

    // ========== OPPGAVE 33.2 ==========
    {
      id: 'samfunnsfag-10-33-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-2',
        number: '33.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ungdomskriminalitet og straff.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva ungdomsstraff er og hvorfor det ble innført som alternativ til fengsel.',
            solution: 'Ungdomsstraff er et alternativ til fengsel for unge mellom 15 og 17 år, innført i 2014. Det innebærer individuell oppfølging, samtaler, skole/yrkesrettet tiltak og eventuelt mekling med offeret. Det ble innført fordi forskning viser at fengsel ofte forverrer situasjonen for unge — de møter eldre kriminelle og mister skoletid. Ungdomsstraff fokuserer på rehabilitering.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom rehabilitering og avskrekking som formål med straff?',
            solution: 'Rehabilitering handler om å hjelpe lovbryteren tilbake til et lovlydig liv — gjennom oppfølging, utdanning og behandling. Avskrekking handler om at straffen skal være så ubehagelig at personen (og andre) ikke vil gjøre det igjen. For unge lovbrytere vektlegger det norske systemet rehabilitering fordi ungdomshjernen fortsatt er i utvikling og unge har stor mulighet for endring.',
          },
        ],
        hints: ['Tenk på hva som er mest effektivt for å hindre at en ung person begår nye lovbrudd.'],
        solution: 'Ungdomsstraff fokuserer på rehabilitering fremfor avskrekking, fordi forskning viser at unge har stor mulighet for endring og at fengsel ofte gjør ting verre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: FOREBYGGING ==========
    {
      id: 'samfunnsfag-10-33-def-3',
      type: 'definition',
      title: 'Forebygging av rus og kriminalitet',
      content: `**Forebygging** handler om å sette inn tiltak for å hindre at problemer oppstår. Forebygging skjer på flere nivåer:

**Universell forebygging** retter seg mot alle:
- Informasjon om rusmidler i skolen
- Aldersgrenser for kjøp av alkohol og tobakk
- Tilgjengelige fritidsaktiviteter for unge
- Gode oppvekstvilkår (barnehager, skoler, trygge nabolag)

**Selektiv forebygging** retter seg mot grupper med forhøyet risiko:
- Ekstra støtte til familier med rusproblemer
- Oppfølging av unge som har droppet ut av skolen
- Tiltak i utsatte nabolag

**Indikativ forebygging** retter seg mot enkeltpersoner som allerede har begynt å utvikle problemer:
- Tidlig intervensjon ved tegn på rusbruk
- Samtalegrupper for unge med rusproblemer
- Mentorordninger

**Viktige forebyggingsarenaer:**
- **Familien:** Foreldre som snakker åpent om rus, setter grenser og har gode relasjoner til barna sine, er den viktigste beskyttende faktoren
- **Skolen:** Kunnskap, gode relasjoner og mestringsopplevelser forebygger
- **Fritid:** Tilgang til idrett, kultur og organiserte aktiviteter gir tilhørighet og alternativer
- **Samfunnet:** Lover, kontroll og tilgjengelige hjelpetjenester

Forskning viser at forebygging er mer effektivt og billigere enn å reparere skader i etterkant.`,
    },

    // ========== EKSEMPEL: RUSPOLITISK DEBATT ==========
    {
      id: 'samfunnsfag-10-33-eks-3',
      type: 'example',
      title: 'Rusdebatten i Norge — straff eller hjelp?',
      content: `I 2021 foreslo regjeringen en **rusreform** som ville ha endret norsk ruspolitikk grunnleggende. Forslaget innebar å avkriminalisere bruk og besittelse av narkotika til eget bruk — det vil si å gå fra straff til helsehjelp.

Rusreformen ble nedstemt i Stortinget, men debatten fortsetter. Her er hovedargumentene:

**For avkriminalisering:**
- Straff hjelper ikke rusavhengige — de trenger behandling, ikke bot eller fengsel
- Portugal avkriminaliserte all narkotikabruk i 2001 og har sett færre overdosedødsfall og bedre helsesituasjon for brukerne
- Straff rammer sosialt skjevt — unge fra ressurssvake familier straffes oftere
- Avkriminalisering betyr ikke legalisering — stoffene forblir ulovlige, men brukerne straffes ikke

**Mot avkriminalisering:**
- Å fjerne straff kan sende et signal om at narkotikabruk er greit
- Straff har en forebyggende effekt — frykten for straff holder noen borte fra narkotika
- Det er viktig å beskytte unge mot narkotika, og straff er et av verktøyene
- Vi vet ikke sikkert om Portugals erfaringer kan overføres til Norge

Dette er et godt eksempel på en sak der det finnes gode argumenter på begge sider, og der det er viktig å lytte til ulike perspektiver.`,
    },

    // ========== OPPGAVE 33.3 ==========
    {
      id: 'samfunnsfag-10-33-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-3',
        number: '33.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var hovedinnholdet i rusreformen som ble foreslått i Norge i 2021?',
        options: [
          {
            id: 'a',
            text: 'Å legalisere all narkotika i Norge',
            isCorrect: false,
            feedback: 'Feil. Rusreformen foreslo avkriminalisering, ikke legalisering. Stoffene ville fortsatt vært ulovlige, men brukerne ville fått helsehjelp i stedet for straff.',
          },
          {
            id: 'b',
            text: 'Å gå fra straff til helsehjelp for bruk og besittelse av narkotika til eget bruk',
            isCorrect: true,
            feedback: 'Riktig! Rusreformen foreslo å avkriminalisere bruk og besittelse til eget bruk — det vil si å erstatte straff med helsehjelp. Forslaget ble nedstemt i Stortinget.',
          },
          {
            id: 'c',
            text: 'Å innføre strengere straffer for all narkotikabruk',
            isCorrect: false,
            feedback: 'Feil. Rusreformen foreslo det motsatte — å gå bort fra straff for brukerne.',
          },
          {
            id: 'd',
            text: 'Å forby alkohol i Norge',
            isCorrect: false,
            feedback: 'Feil. Rusreformen handlet om narkotikapolitikk, ikke om alkohol.',
          },
        ],
        solution: 'Rusreformen i 2021 foreslo å avkriminalisere bruk og besittelse av narkotika til eget bruk — å gå fra straff til helsehjelp. Forslaget ble nedstemt i Stortinget, men debatten fortsetter.',
      },
    },

    // ========== OPPGAVE 33.4 ==========
    {
      id: 'samfunnsfag-10-33-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-4',
        number: '33.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gruppepress og rusbruk.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva gruppepress er og hvorfor det kan være vanskelig å motstå.',
            solution: 'Gruppepress er press fra jevnaldrende om å gjøre noe man egentlig ikke vil. Det kan være vanskelig å motstå fordi man ønsker å passe inn, er redd for å bli avvist eller utestengt, og fordi ungdomshjernen er spesielt følsom for sosial aksept. Behovet for tilhørighet er et grunnleggende menneskelig behov som er ekstra sterkt i ungdomsårene.',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på hva du kan si eller gjøre hvis du opplever press til å prøve rusmidler.',
            solution: 'Eksempler: (1) Si «Nei takk, det er ikke noe for meg» — uten å behøve å forklare. (2) Ha en avtalt unnskyldning klar, som «Jeg har trening tidlig i morgen». (3) Foreslå noe annet å gjøre. (4) Gå fra situasjonen. (5) Si det med humor: «Noen må jo kunne kjøre hjem». Det viktigste er at du vet at det er din rett å si nei.',
          },
        ],
        hints: ['Tenk på at de fleste unge IKKE bruker narkotika — selv om det kan virke slik.'],
        solution: 'Gruppepress er vanskelig å motstå i ungdomsårene, men det finnes strategier for å si nei. Det viktigste er å vite at det er din rett å ta egne valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-33-oppsummering',
      type: 'text',
      content: `## Oppsummering: Rus og kriminalitet

**Rus og kriminalitet** er temaer som angår unge direkte og der kunnskap er viktig for å ta gode valg.

**Nøkkelbegreper:**
- **Rusmidler:** Stoffer som påvirker hjernen — legale (alkohol, tobakk) og illegale (cannabis, amfetamin m.fl.)
- **Avhengighet:** Tap av kontroll over rusbruk — en sykdom, ikke en moralsk svakhet
- **Kriminell lavalder:** 15 år i Norge
- **Ungdomsstraff:** Alternativ til fengsel for 15-17-åringer — fokuserer på rehabilitering
- **Forebygging:** Tiltak på universelt, selektivt og indikativt nivå
- **Gruppepress:** Press fra jevnaldrende — viktig å ha strategier for å motstå
- **Risikofaktorer:** Forhold som øker sjansen for rusbruk (gruppepress, vanskelig hjemme)
- **Beskyttende faktorer:** Forhold som reduserer risikoen (gode relasjoner, mestring, kunnskap)
- **Rusreformen:** Debatt om straff vs. helsehjelp for narkotikabrukere`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-33-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-5',
        number: '33.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Bør bruk av narkotika avkriminaliseres i Norge?» Presenter argumenter fra begge sider og ta et begrunnet standpunkt.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter minst to argumenter for avkriminalisering.',
            solution: 'Argumenter for: (1) Rusavhengige trenger hjelp, ikke straff — avkriminalisering gjør det lettere å søke helsehjelp. (2) Portugal har hatt positive erfaringer med avkriminalisering — færre overdosedødsfall og bedre helsesituasjon. (3) Straff rammer sosialt skjevt — unge fra ressurssvake familier straffes oftere.',
          },
          {
            label: 'b',
            task: 'Presenter minst to argumenter mot avkriminalisering.',
            solution: 'Argumenter mot: (1) Å fjerne straff kan sende et signal om at narkotikabruk er akseptabelt, og kan føre til økt bruk. (2) Straff har en forebyggende effekt, særlig for unge som ennå ikke har begynt. (3) Det er usikkert om erfaringene fra Portugal kan overføres direkte til norske forhold.',
          },
          {
            label: 'c',
            task: 'Hva mener du? Begrunn svaret ditt.',
            solution: 'Eleven gir et begrunnet standpunkt som viser forståelse for argumenter fra begge sider. Et godt svar skiller mellom avkriminalisering og legalisering, bruker fagbegreper og viser evne til nyansert tenkning.',
          },
        ],
        hints: [
          'Husk: Avkriminalisering er IKKE det samme som legalisering.',
          'Prøv å se saken fra flere perspektiver — brukere, foreldre, politi, helsepersonell.',
        ],
        solution: 'Rusreformdebatten handler om den mest effektive måten å håndtere narkotikabruk på. Gode argumenter finnes på begge sider, og svaret krever nyansert tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-33-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-33-ex-6',
        number: '33.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste grunnen til at rettssystemet behandler unge lovbrytere annerledes enn voksne?',
        options: [
          {
            id: 'a',
            text: 'Fordi unge ikke vet forskjell på rett og galt',
            isCorrect: false,
            feedback: 'Feil. De fleste unge vet forskjell på rett og galt. Grunnen handler om hjernens utvikling og muligheten for endring.',
          },
          {
            id: 'b',
            text: 'Fordi ungdomshjernen ikke er fullt utviklet og unge har stor mulighet for positiv endring',
            isCorrect: true,
            feedback: 'Riktig! Forskning viser at hjernens prefrontale cortex — som styrer impulsitetet og konsekvenstenkning — ikke er ferdig utviklet før midten av 20-årene. Unge har stor kapasitet for endring.',
          },
          {
            id: 'c',
            text: 'Fordi det er for dyrt å sette unge i fengsel',
            isCorrect: false,
            feedback: 'Feil. Selv om fengsel er dyrt, er ikke økonomi hovedgrunnen. Det handler om at unge har spesielle behov og stor mulighet for rehabilitering.',
          },
          {
            id: 'd',
            text: 'Fordi foreldrene skal ta straffen i stedet',
            isCorrect: false,
            feedback: 'Feil. Foreldrene straffes ikke for barnas lovbrudd (med noen unntak). Grunnen til spesialbehandling er hensynet til den unges utvikling.',
          },
        ],
        solution: 'Unge lovbrytere behandles annerledes fordi ungdomshjernen ikke er fullt utviklet og unge har stor mulighet for positiv endring. Derfor vektlegger rettssystemet rehabilitering for unge.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 34: Seksualitet og grensesetting
// LK20: Reflektere over korleis identitet, sjølvbilete og eigne grenser blir
//        utvikla og påverka, og kunne samtale om seksualitet og grensesetting
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_34: TextbookChapter = {
  id: 'samfunnsfag-10-34',
  courseId: 'samfunnsfag-10',
  chapterNumber: '34',
  title: 'Seksualitet og grensesetting',
  description: 'Lær om seksualitet og identitet, samtykke og grensesetting, seksuell helse, og lover som beskytter deg.',
  estimatedMinutes: 90,
  competenceGoals: [
    'reflektere over korleis identitet, sjølvbilete og eigne grenser blir utvikla og påverka',
    'samtale om seksualitet, grensesetting og respekt',
    'drøfte problemstillingar knytte til uønskt sosial kontroll og seksuelle krenkingar',
  ],
  keyTerms: [
    { term: 'Seksualitet', definition: 'En naturlig del av menneskelivet som omfatter følelser, tiltrekning, identitet og kroppslig nærhet' },
    { term: 'Samtykke', definition: 'En frivillig, entusiastisk og gjensidig enighet om seksuell aktivitet — kan trekkes tilbake når som helst' },
    { term: 'Grensesetting', definition: 'Å kommunisere og respektere personlige grenser for hva man er komfortabel med' },
    { term: 'Seksuell lavalder', definition: 'Alderen der man juridisk kan samtykke til sex — i Norge er denne 16 år' },
    { term: 'Seksuell trakassering', definition: 'Uønsket seksuell oppmerksomhet som oppleves som krenkende eller skremmende' },
    { term: 'Deling av bilder', definition: 'Å dele intime bilder av andre uten samtykke er ulovlig og kan gi alvorlige konsekvenser' },
    { term: 'Seksuell helse', definition: 'Fysisk, emosjonell og sosial velvære knyttet til seksualitet — inkluderer prevensjon og beskyttelse mot kjønnssykdommer' },
    { term: 'Uønsket sosial kontroll', definition: 'Når familie eller miljø bruker press, trusler eller tvang for å begrense en persons frihet, inkludert på det seksuelle området' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-34-intro',
      type: 'text',
      content: `## Din kropp, dine grenser, dine valg

Seksualitet er en naturlig og viktig del av menneskelivet. I ungdomsårene utvikler mange de første romantiske følelsene, opplever forelskelse, og begynner å utforske sin seksuelle identitet. For noen er dette en spennende tid. For andre kan det føles forvirrende, skremmende eller overveldende. Alle reaksjoner er normale.

Det viktigste du trenger å vite om seksualitet kan oppsummeres slik: **Respekt for deg selv og andre.** Du har rett til å bestemme over din egen kropp. Du har rett til å si nei — alltid. Og du har plikt til å respektere andres grenser.

I en tid der mye av det unge lærer om seksualitet kommer fra sosiale medier og pornografi, er det viktigere enn noen gang å snakke åpent og ærlig om disse temaene. Pornografi gir et svært urealistisk bilde av sex og relasjoner, og forskning viser at det kan påvirke unges forventninger og holdninger negativt.

I dette kapittelet skal du lære om:
- Seksualitet som en del av identiteten
- Samtykke — hva det betyr i praksis
- Grensesetting og respekt
- Lover som beskytter deg (seksuell lavalder, forbud mot deling av bilder)
- Seksuell helse og prevensjon
- Uønsket sosial kontroll og tvangsekteskap`,
    },

    // ========== DEFINISJON: SEKSUALITET ==========
    {
      id: 'samfunnsfag-10-34-def-1',
      type: 'definition',
      title: 'Seksualitet og identitet',
      content: `**Seksualitet** er et vidt begrep som handler om mye mer enn sex. Verdens helseorganisasjon definerer seksualitet som en sentral del av å være menneske, som omfatter kjønn, kjønnsidentitet, kjønnsroller, seksuell orientering, erotikk, nytelse, intimitet og reproduksjon.

**Viktige aspekter:**

- **Seksuell orientering:** Hvem du er tiltrukket av — heterofil, homofil/lesbisk, bifil, aseksuell eller annet. Seksuell orientering er en naturlig variasjon, ikke et valg.

- **Forelskelse og romantikk:** Å føle sterke følelser for et annet menneske er en vanlig del av ungdomstiden. Forelskelse kan være vidunderlig, men også smertefullt — begge deler er normalt.

- **Utvikling i ulik takt:** Noen opplever seksuell tiltrekning tidlig, andre sent. Noen er klare for nærhet tidlig, andre trenger mer tid. Det finnes ingen «riktig» alder eller tempo for seksuelle opplevelser.

- **Aseksualitet:** Noen opplever lite eller ingen seksuell tiltrekning. Dette er en naturlig variasjon, ikke noe som trenger å «fikses».

- **Nettbasert seksualitet:** Mange unge utforsker seksualitet på nett — gjennom bilder, videoer eller samtaler. Det er viktig å være bevisst risikoene: Bilder kan spres, og det som deles digitalt kan aldri helt fjernes.

**Det viktigste:** Det finnes ingen «normal» seksualitet. Alle mennesker er forskjellige, og det eneste som gjelder er **gjensidig respekt og samtykke**.`,
    },

    // ========== EKSEMPEL: SAMTYKKE ==========
    {
      id: 'samfunnsfag-10-34-eks-1',
      type: 'example',
      title: 'Samtykke — mer enn bare «ja» eller «nei»',
      content: `**Samtykke** er grunnlaget for all seksuell aktivitet. Det betyr at begge parter frivillig og entusiastisk er enige om det som skjer. Men samtykke er mer enn bare fravær av et «nei»:

**Samtykke ER:**
- En aktiv, frivillig og tydelig enighet
- Noe som gjelder for hver enkelt handling — samtykke til kyssing er ikke samtykke til alt annet
- Noe som kan trekkes tilbake når som helst — selv midt i
- Gjensidig — begge parter må ønske det som skjer
- Mulig å kommunisere både med ord og kroppsspråk

**Samtykke er IKKE:**
- Stillhet eller mangel på motstand
- Noe man «skylder» noen fordi man er i et forhold
- Gyldig hvis en person er ruspåvirket, sovende eller under press
- Noe som gjelder for alltid — at man sa ja én gang betyr ikke ja for alltid
- Bare et juridisk begrep — det er en del av respekt for andre mennesker

**Eksempel på gode måter å sjekke samtykke:**
- «Er dette greit for deg?»
- «Vil du at jeg skal fortsette?»
- «Si fra hvis du vil stoppe»

Å spørre om samtykke er ikke kleint eller stemningsødeleggende — det viser at du bryr deg om den andre personen.`,
    },

    // ========== OPPGAVE 34.1 ==========
    {
      id: 'samfunnsfag-10-34-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-1',
        number: '34.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om samtykke er korrekt?',
        options: [
          {
            id: 'a',
            text: 'Samtykke til kyssing betyr automatisk samtykke til alt annet',
            isCorrect: false,
            feedback: 'Feil. Samtykke gjelder for hver enkelt handling. At man samtykker til én ting betyr ikke at man samtykker til alt annet.',
          },
          {
            id: 'b',
            text: 'Samtykke kan trekkes tilbake når som helst, og begge parter må være frivillig med på det som skjer',
            isCorrect: true,
            feedback: 'Riktig! Samtykke er frivillig, gjensidig og kan trekkes tilbake når som helst — også midt i. Respekt for dette er grunnleggende.',
          },
          {
            id: 'c',
            text: 'Hvis noen ikke sier tydelig «nei», betyr det at de samtykker',
            isCorrect: false,
            feedback: 'Feil. Fravær av «nei» er ikke det samme som samtykke. Samtykke krever en aktiv, frivillig enighet.',
          },
          {
            id: 'd',
            text: 'Samtykke er bare viktig for voksne over 18 år',
            isCorrect: false,
            feedback: 'Feil. Samtykke er viktig i alle relasjoner og i alle aldre. Det handler om respekt for andre mennesker.',
          },
        ],
        solution: 'Samtykke er en frivillig, entusiastisk og gjensidig enighet om seksuell aktivitet. Det kan trekkes tilbake når som helst, og gjelder for hver enkelt handling.',
      },
    },

    // ========== DEFINISJON: LOVVERK ==========
    {
      id: 'samfunnsfag-10-34-def-2',
      type: 'definition',
      title: 'Lover som beskytter deg',
      content: `Norsk lov har flere bestemmelser som beskytter deg på det seksuelle området:

**Seksuell lavalder — 16 år**
Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er straffbart for en person over 16 år å ha sex med en person under 16 år — uavhengig av om den yngre parten «samtykker». Loven er der for å beskytte unge mot seksuell utnyttelse fra eldre personer.

**Merk:** Jevnaldrende unge som er nær hverandre i alder (for eksempel to 15-åringer) vil normalt ikke bli straffeforfulgt, fordi loven er ment å beskytte mot utnyttelse, ikke å straffe jevnaldrendes naturlige utforskning.

**Deling av intime bilder — ulovlig**
Det er ulovlig å dele seksualiserte bilder eller videoer av andre uten deres samtykke. Å dele nakenbilder av personer under 18 år er alltid ulovlig — også for jevnaldrende — og regnes som spredning av overgrepsmateriell. Konsekvensene kan være alvorlige, inkludert strafferettslig forfølgelse.

**Samtykkeloven**
I 2024 fikk Norge en samtykkelov som fastslår at sex uten samtykke er voldtekt — uavhengig av om det ble brukt fysisk tvang. Loven markerer at det er samtykket (eller mangelen på det) som er avgjørende.

**Forbud mot seksuell trakassering**
Uønsket seksuell oppmerksomhet som oppleves som krenkende er forbudt etter likestillings- og diskrimineringsloven. Dette gjelder også på nett.`,
    },

    // ========== EKSEMPEL: DELING AV BILDER ==========
    {
      id: 'samfunnsfag-10-34-eks-2',
      type: 'example',
      title: 'Nakenbilder og digitale spor',
      content: `Deling av nakenbilder («nudes») blant unge er et utbredt problem. Selv om et bilde kanskje sendes i tillit til kjæresten, kan situasjonen endre seg dramatisk:

**Scenario:** Sara (15) sender et nakenbilde til kjæresten sin Lars. De gjør det slutt noen uker senere. I sinne deler Lars bildet med noen kompiser, som deler det videre. Plutselig har halve trinnet sett bildet.

**Konsekvensene:**
- **For Sara:** Ydmykelse, skam, angst, sosial isolasjon og mulige psykiske helseproblemer
- **For Lars:** Han har begått et lovbrudd. Å dele nakenbilder av en person under 18 er straffbart som spredning av overgrepsmateriell — selv om han selv er mindreårig
- **For dem som deler videre:** De gjør seg også skyldige i spredning av overgrepsmateriell

**Hva kan du gjøre?**
- Aldri del intime bilder av andre uten samtykke — det er ulovlig og kan ødelegge liv
- Tenk deg om før du sender bilder av deg selv — digitale spor forsvinner aldri helt
- Hvis du mottar et slikt bilde, IKKE del det videre. Slett det.
- Hvis bilder av deg har blitt delt, er det ikke din feil. Snakk med en voksen du stoler på, og meld det til politiet og til slettmeg.no

**Husk:** Den som deler et bilde uten samtykke er den skyldige — aldri den som er på bildet.`,
    },

    // ========== OPPGAVE 34.2 ==========
    {
      id: 'samfunnsfag-10-34-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-2',
        number: '34.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deling av nakenbilder og lovverket.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor det er ulovlig å dele nakenbilder av personer under 18 år — også for jevnaldrende.',
            solution: 'Det er ulovlig fordi det regnes som spredning av overgrepsmateriell. Loven er der for å beskytte mindreårige mot at intime bilder av dem spres uten kontroll. Alder på den som deler er irrelevant — også mindreårige kan straffes for dette. Bilder som er delt digitalt kan aldri helt fjernes og kan forfølge offeret i mange år.',
          },
          {
            label: 'b',
            task: 'Hva bør du gjøre hvis du oppdager at nakenbilder av en medelev har blitt delt?',
            solution: 'Du bør: (1) IKKE dele bildet videre. (2) Slette bildet hvis du har mottatt det. (3) Fortelle en voksen du stoler på (forelder, lærer, helsesykepleier). (4) Støtte den som er rammet — det er aldri offerets feil. (5) Eventuelt melde forholdet til politiet. Man kan også kontakte slettmeg.no for hjelp.',
          },
        ],
        hints: ['Tenk på konsekvensene for den som er på bildet — og husk at den som deler er den skyldige.'],
        solution: 'Deling av nakenbilder av mindreårige er alltid ulovlig. Hvis det skjer, er det viktig å ikke dele videre, slette bildet, og involvere voksne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: GRENSESETTING ==========
    {
      id: 'samfunnsfag-10-34-def-3',
      type: 'definition',
      title: 'Grensesetting og uønsket sosial kontroll',
      content: `**Grensesetting** handler om å kjenne, kommunisere og respektere personlige grenser — både dine egne og andres.

**Dine grenser:**
- Du har rett til å sette grenser for hva du er komfortabel med — fysisk, emosjonelt og seksuelt
- Du trenger ikke å forklare eller begrunne grensene dine
- Det er OK å endre mening — du kan si nei selv om du først sa ja
- Grensene dine fortjener respekt fra alle rundt deg

**Andres grenser:**
- Respekter alltid andres grenser — også i et forhold
- Et nei er et nei. Overtalelse, masing, press eller trusler er aldri greit
- Kroppsspråk teller — hvis noen virker usikre eller ubehagelige, stopp og spør

**Uønsket sosial kontroll** er når familie, venner eller miljø bruker press, trusler eller tvang for å begrense en persons frihet. Det kan handle om:
- Hvem man får være venner med eller i forhold med
- Hva man får ha på seg
- Om man får delta i sosiale aktiviteter
- Tvungen kontroll av telefon og sosiale medier
- I ytterste konsekvens: tvangsekteskap eller æresrelatert vold

**Tvangsekteskap** er forbudt i Norge. Å presse noen til å gifte seg mot sin vilje er straffbart, uavhengig av kulturell bakgrunn. Hvis du eller noen du kjenner utsettes for tvangsekteskap eller æresrelatert kontroll, kontakt politiet eller den nasjonale hjelpelinjen: **Kompetanseteamet mot tvangsekteskap: 478 090 50**.`,
    },

    // ========== EKSEMPEL: GRENSER I RELASJONER ==========
    {
      id: 'samfunnsfag-10-34-eks-3',
      type: 'example',
      title: 'Grenser i kjæresteforhold',
      content: `I et sunt kjæresteforhold respekterer begge parter hverandres grenser. Men noen ganger kan det oppstå situasjoner der grenser blir utfordret:

**Eksempler på sunn grensesetting:**
- «Jeg er ikke klar for det ennå. Kan vi vente?» — og partneren sier «Selvfølgelig, det er helt greit»
- «Jeg liker ikke at du sjekker telefonen min.» — og partneren respekterer det
- «Jeg vil henge med vennene mine uten deg av og til.» — og partneren aksepterer det

**Varselsignaler i et forhold (røde flagg):**
- Partneren din sjekker telefonen din uten lov
- Du føler deg presset til ting du ikke er klar for
- Partneren din vil kontrollere hvem du er sammen med
- Du er redd for partnerens reaksjon hvis du sier nei
- Partneren truer med å gjøre det slutt hvis du ikke gjør som vedkommende vil

**Husk:** Et godt forhold bygger på tillit, respekt og likeverd. Hvis du føler deg kontrollert, presset eller redd i et forhold, er det et tegn på at noe er galt. Snakk med en voksen du stoler på.`,
    },

    // ========== OPPGAVE 34.3 ==========
    {
      id: 'samfunnsfag-10-34-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-3',
        number: '34.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den seksuelle lavalderen i Norge, og hva betyr den?',
        options: [
          {
            id: 'a',
            text: '15 år — det betyr at alle over 15 kan ha sex med hvem de vil',
            isCorrect: false,
            feedback: 'Feil. Den seksuelle lavalderen er 16 år, og den betyr at det er straffbart å ha sex med noen under 16. Samtykke er alltid nødvendig uavhengig av alder.',
          },
          {
            id: 'b',
            text: '16 år — det betyr at det er straffbart å ha sex med noen under 16 år, for å beskytte unge mot seksuell utnyttelse',
            isCorrect: true,
            feedback: 'Riktig! Den seksuelle lavalderen er 16 år, og loven er der for å beskytte unge mot utnyttelse fra eldre personer.',
          },
          {
            id: 'c',
            text: '18 år — det betyr at all seksuell aktivitet under 18 er forbudt',
            isCorrect: false,
            feedback: 'Feil. Den seksuelle lavalderen i Norge er 16 år, ikke 18. Myndighetsalderen (18) og den seksuelle lavalderen er ulike ting.',
          },
          {
            id: 'd',
            text: '14 år — det betyr at unge over 14 kan samtykke til sex',
            isCorrect: false,
            feedback: 'Feil. Den seksuelle lavalderen i Norge er 16 år, ikke 14.',
          },
        ],
        solution: 'Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er straffbart for en person over 16 å ha sex med en person under 16. Loven beskytter unge mot seksuell utnyttelse.',
      },
    },

    // ========== TEKST: SEKSUELL HELSE ==========
    {
      id: 'samfunnsfag-10-34-helse',
      type: 'text',
      content: `## Seksuell helse

**Seksuell helse** handler om fysisk, emosjonell og sosial velvære knyttet til seksualitet. God seksuell helse innebærer å ta informerte og trygge valg.

### Prevensjon
Prevensjon beskytter mot uønsket graviditet. De vanligste prevensjonsmetodene er:
- **Kondom:** Det eneste prevensjonsmiddelet som også beskytter mot seksuelt overførbare infeksjoner (SOI). Tilgjengelig uten resept.
- **P-piller, p-ring, p-plaster:** Hormonell prevensjon som hindrer eggløsning. Krever resept.
- **P-stav, hormonspiral:** Langtidsvirkende prevensjon med høy sikkerhet.
- **Kobberspiral:** Ikke-hormonell langtidsvirkende prevensjon.

Prevensjon er gratis eller sterkt subsidiert for unge under 22 år i Norge.

### Seksuelt overførbare infeksjoner (SOI)
- **Klamydia:** Den vanligste SOI blant unge i Norge. Kan gi ubehag og ubehandlet føre til fertilitetsproblemer. Behandles enkelt med antibiotika.
- **Genitalherpes:** Vanlig virusinfeksjon som gir blemmer. Kan ikke kureres, men behandles.
- **HPV:** Virus som kan føre til kjønnsvorter og på sikt kreft. Vaksine tilbys gjennom barnevaksinasjonsprogrammet.
- **HIV:** Virus som angriper immunforsvaret. Behandlingen er svært effektiv i dag — personer med velbehandlet HIV kan leve normalt og kan ikke smitte videre.

**Kondom er den beste beskyttelsen mot SOI.** Hvis du er seksuelt aktiv, er det lurt å teste seg regelmessig. Testing er gratis og kan gjøres hos helsesykepleier, fastlege eller på venerologisk poliklinikk.`,
    },

    // ========== OPPGAVE 34.4 ==========
    {
      id: 'samfunnsfag-10-34-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-4',
        number: '34.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Grensesetting og sunne relasjoner.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom sunn grensesetting og uønsket sosial kontroll?',
            solution: 'Sunn grensesetting handler om å kommunisere og respektere egne og andres personlige grenser — det styrker relasjoner og selvfølelse. Uønsket sosial kontroll er når andre bruker press, trusler eller tvang for å begrense friheten din — det er skadelig og kan være ulovlig. Forskjellen er at grensesetting handler om dine egne valg, mens sosial kontroll handler om andres makt over deg.',
          },
          {
            label: 'b',
            task: 'Nevn tre «røde flagg» i et kjæresteforhold og forklar hvorfor de er problematiske.',
            solution: 'Tre røde flagg: (1) Partneren sjekker telefonen din uten lov — dette bryter tilliten og er et tegn på kontrollerende atferd. (2) Du føler deg presset til ting du ikke er klar for — dette er mangel på respekt for grensene dine. (3) Partneren vil bestemme hvem du er sammen med — dette er et tegn på kontroll og isolering.',
          },
        ],
        hints: ['Tenk på hva som kjennetegner et forhold bygget på tillit og respekt.'],
        solution: 'Sunne relasjoner bygger på gjensidig respekt, tillit og likeverd. Kontrollerende atferd, press og grenseoverskridelser er varselsignaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-34-oppsummering',
      type: 'text',
      content: `## Oppsummering: Seksualitet og grensesetting

**Seksualitet** er en naturlig del av menneskelivet, og respekt er grunnlaget for alle seksuelle relasjoner.

**Nøkkelbegreper:**
- **Samtykke:** Frivillig, entusiastisk og gjensidig enighet — kan trekkes tilbake når som helst
- **Grensesetting:** Å kjenne, kommunisere og respektere personlige grenser
- **Seksuell lavalder:** 16 år i Norge — beskytter unge mot utnyttelse
- **Samtykkeloven:** Sex uten samtykke er voldtekt, uavhengig av fysisk tvang
- **Nakenbilder:** Å dele intime bilder uten samtykke er ulovlig — bilder av mindreårige er alltid ulovlig
- **Uønsket sosial kontroll:** Når andre bruker press eller tvang for å begrense friheten din
- **Tvangsekteskap:** Forbudt i Norge — ring 478 090 50 for hjelp
- **Prevensjon:** Kondom beskytter mot både graviditet og SOI
- **SOI:** Seksuelt overførbare infeksjoner — klamydia er vanligst blant unge
- **Røde flagg:** Kontrollerende atferd, press og manglende respekt for grenser`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-34-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-5',
        number: '34.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Mange unge får mye av sin «seksualundervisning» fra pornografi på nett. Drøft hvilke konsekvenser dette kan ha.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er pornografi en dårlig kilde til kunnskap om seksualitet og relasjoner?',
            solution: 'Pornografi gir et urealistisk bilde av sex og relasjoner: Det viser ofte sex uten kommunikasjon, uten samtykke og med urealistiske kropper. Det mangler følelser, nærhet og respekt. Det kan skape forventninger om hvordan sex «bør» være som ikke stemmer med virkeligheten, og kan bidra til kroppspress, prestasjonspress og usunne holdninger til samtykke.',
          },
          {
            label: 'b',
            task: 'Hva kan gjøres for at unge får bedre kunnskap om seksualitet?',
            solution: 'Mulige tiltak: (1) Bedre seksualundervisning i skolen som handler om samtykke, grenser, relasjoner og kropp — ikke bare biologi. (2) Åpen samtalekultur hjemme der unge kan stille spørsmål. (3) Tilgjengelige nettressurser med alderstilpasset, kvalitetssikret informasjon (f.eks. ung.no). (4) Digital mediekompetanse som gjør unge i stand til å vurdere innhold kritisk.',
          },
        ],
        hints: [
          'Tenk på forskjellen mellom virkeligheten og det som vises i media.',
          'Hva trenger unge egentlig å vite om seksualitet for å ta gode valg?',
        ],
        solution: 'Pornografi gir et urealistisk bilde av seksualitet. Unge trenger god seksualundervisning som fokuserer på samtykke, respekt, relasjoner og faktabasert kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-34-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-34-ex-6',
        number: '34.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er uønsket sosial kontroll?',
        options: [
          {
            id: 'a',
            text: 'At foreldre setter rimelige regler for barna sine, som leggetid og lekser',
            isCorrect: false,
            feedback: 'Feil. At foreldre setter rimelige regler er en normal del av barneoppdragelse. Uønsket sosial kontroll handler om press, trusler eller tvang som begrenser noens grunnleggende frihet.',
          },
          {
            id: 'b',
            text: 'Når familie eller miljø bruker press, trusler eller tvang for å begrense en persons frihet — for eksempel hvem man kan være sammen med eller gifte seg med',
            isCorrect: true,
            feedback: 'Riktig! Uønsket sosial kontroll er alvorlig og kan inkludere kontroll over hvem man kan ha kontakt med, hva man kan ha på seg, og i ytterste konsekvens tvangsekteskap.',
          },
          {
            id: 'c',
            text: 'At lærere gir elever regler i klasserommet',
            isCorrect: false,
            feedback: 'Feil. Klasseromsregler er en normal del av skolens virksomhet. Uønsket sosial kontroll handler om å begrense noens grunnleggende frihet gjennom press eller tvang.',
          },
          {
            id: 'd',
            text: 'At venner forteller deg hva de mener om valgene dine',
            isCorrect: false,
            feedback: 'Feil. At venner deler meninger er normalt. Uønsket sosial kontroll innebærer systematisk press, trusler eller tvang som begrenser friheten din.',
          },
        ],
        solution: 'Uønsket sosial kontroll er når familie eller miljø bruker press, trusler eller tvang for å begrense en persons frihet. Det kan handle om klær, venner, kjæreste eller ekteskap. Tvangsekteskap er forbudt i Norge.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 7
// ============================================================================

export const SAMFUNNSFAG_10_DEL7_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_29,
  CHAPTER_SAMFUNNSFAG_10_30,
  CHAPTER_SAMFUNNSFAG_10_31,
  CHAPTER_SAMFUNNSFAG_10_32,
  CHAPTER_SAMFUNNSFAG_10_33,
  CHAPTER_SAMFUNNSFAG_10_34,
];

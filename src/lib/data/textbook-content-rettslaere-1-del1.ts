/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok kapitler for Rettslære 1 (VG2) - Del 1
 * Seksjon 1: Rettssystemet (kapittel 1.1–1.7)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Hva er rett?
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_1: TextbookChapter = {
  id: 'rettslaere-1-1-1',
  courseId: 'rettslaere-1',
  chapterNumber: '1.1',
  title: 'Hva er rett?',
  description: 'Rettens funksjon i samfunnet, forskjellen mellom rettsregler og moralregler, positiv rett og naturrett, og inndelingen i offentlig rett og privatrett.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for hva rett er og hvilken funksjon retten har i samfunnet',
    'skille mellom ulike typer rettsregler og forklare forskjellen mellom offentlig rett og privatrett'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-1-intro',
      type: 'text',
      content: `## Hva er rett?

Tenk deg et samfunn helt uten regler. Hvem bestemmer hvem som eier hva? Hva skjer dersom noen stjeler fra deg? Hvordan kan du vite hva som er lov og hva som er forbudt?

**Retten** er det systemet av regler som regulerer forholdet mellom mennesker i et samfunn, og mellom mennesker og staten. Retten fyller tre hovedfunksjoner:

- **Ordne** – skape forutsigbarhet og orden i samfunnet
- **Beskytte** – verne den enkeltes rettigheter og friheter
- **Fordele** – fordele goder, byrder og ansvar mellom borgerne

Rettssystemet gjør det mulig for oss å leve sammen på en fredelig og organisert måte. Uten rett ville den sterkestes vilje råde.`
    },

    // --- BLOKK 1: Rettsregler vs. moralregler ---
    {
      id: 'rett1-1-1-def-1',
      type: 'definition',
      title: 'Rettsregler',
      content: `**Rettsregler** er regler som er vedtatt av en lovgivende myndighet, og som kan håndheves med tvang av staten. Brudd på rettsregler kan medføre sanksjoner som bot, erstatning eller fengsel.

Eksempler: straffeloven § 321 (tyveri), vegtrafikkloven § 5 (fartsbegrensninger), avtaleloven § 1 (avtalefrihet).`
    },
    {
      id: 'rett1-1-1-def-2',
      type: 'definition',
      title: 'Moralregler',
      content: `**Moralregler** er uskrevne normer for rett og galt som bygger på verdier, tradisjon og kultur. De håndheves gjennom sosiale reaksjoner som kritikk, utfrysing eller dårlig samvittighet – ikke gjennom statlig tvang.

Eksempler: å hilse på naboen, å holde løfter overfor venner, å hjelpe eldre over veien.`
    },
    {
      id: 'rett1-1-1-example-1',
      type: 'example',
      title: 'Rettsregel eller moralregel?',
      problem: 'Martin lover kompisen sin at han skal hjelpe ham med å flytte lørdag. Når lørdagen kommer, velger Martin å sove lenge i stedet. Har Martin brutt en rettsregel eller en moralregel?',
      solution: `**Analyse:**

Et uformelt løfte mellom venner om å hjelpe til med flytting er **ikke** en juridisk bindende avtale. Det finnes ingen skriftlig kontrakt, og det er heller ikke tale om en avtale i avtaleloven sin forstand.

Martin har brutt en **moralregel**. Vennen kan bli skuffet og sur, men han kan ikke saksøke Martin eller kreve erstatning. Den sosiale sanksjonen er at Martin kanskje mister tillit i vennegruppen.

Hadde Martin derimot inngått avtale med et flyttebyrå, ville det vært en rettslig bindende kontrakt etter avtaleloven § 1 – og brudd kunne medført erstatningskrav.`
    },
    {
      id: 'rett1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom rettsregler og moralregler?',
        options: [
          { id: 'a', text: 'Rettsregler er alltid skriftlige, moralregler er alltid muntlige', isCorrect: false },
          { id: 'b', text: 'Rettsregler kan håndheves med tvang av staten, moralregler håndheves gjennom sosiale reaksjoner', isCorrect: true },
          { id: 'c', text: 'Moralregler er viktigere enn rettsregler', isCorrect: false },
          { id: 'd', text: 'Rettsregler gjelder bare for voksne, moralregler gjelder for alle', isCorrect: false }
        ],
        solution: 'Den avgjørende forskjellen er at rettsregler håndheves av staten og kan medføre formelle sanksjoner (bot, fengsel, erstatning), mens moralregler håndheves gjennom uformelle sosiale reaksjoner (kritikk, skam, utfrysing).'
      }
    },
    {
      id: 'rett1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på handlinger som er brudd på både en rettsregel og en moralregel, og ett eksempel på en handling som bryter en moralregel men ikke en rettsregel. Begrunn svarene dine.',
        hints: ['Tenk på handlinger som er straffbare og som de fleste også mener er moralsk galt.'],
        solution: `**Brudd på både rettsregel og moralregel:**
1. **Tyveri** – bryter straffeloven § 321 (rettsregel) og oppfattes som moralsk galt i alle kulturer (moralregel).
2. **Vold mot andre** – bryter straffeloven § 271 om kroppskrenkelse (rettsregel) og er moralsk forkastelig (moralregel).

**Brudd på moralregel, men ikke rettsregel:**
- **Å ikke hjelpe en fremmed som har mistet lommeboken** – det finnes ingen lov som pålegger deg å hjelpe i denne situasjonen, men mange vil mene det er moralsk riktig å hjelpe.`
      }
    },

    // --- BLOKK 2: Positiv rett og naturrett ---
    {
      id: 'rett1-1-1-text-2',
      type: 'text',
      content: `## Positiv rett og naturrett

Gjennom historien har filosofer og jurister diskutert hvor retten kommer fra. To hovedretninger har dominert debatten:

**Positiv rett** (rettspositivisme) hevder at retten er det som faktisk er vedtatt av lovgivende myndighet. Retten er menneskeskapt og kan endres av mennesker. En lov er gyldig fordi den er vedtatt i riktig form, uavhengig av om den er «rettferdig».

**Naturrett** hevder at det finnes overordnede rettigheter som gjelder uavhengig av hva mennesker vedtar. Naturrettens tilhengere mener at en lov som strider mot grunnleggende menneskerettigheter, ikke kan anses som gyldig rett.

Debatten mellom disse retningene ble særlig aktuell etter andre verdenskrig. Nazistene hadde vedtatt lover som tillot folkemord – men var disse lovene «rett» bare fordi de var formelt vedtatt? Naturrettstenkere svarte nei: lover som bryter med grunnleggende menneskeverd, er ikke gyldig rett.`
    },
    {
      id: 'rett1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge naturrettstradisjonen: Kan en lov som er formelt vedtatt av Stortinget, likevel være ugyldig?',
        options: [
          { id: 'a', text: 'Nei, alle lover vedtatt av Stortinget er automatisk gyldige', isCorrect: false },
          { id: 'b', text: 'Ja, dersom loven strider mot grunnleggende menneskerettigheter', isCorrect: true },
          { id: 'c', text: 'Ja, men bare dersom Høyesterett har prøvd loven', isCorrect: false },
          { id: 'd', text: 'Nei, naturrettstradisjonen gjelder bare i andre land', isCorrect: false }
        ],
        solution: 'Naturrettstenkere mener at det finnes overordnede rettigheter og prinsipper som står over menneskeskapt lov. En lov som strider mot disse prinsippene – for eksempel grunnleggende menneskerettigheter – kan ifølge naturretten ikke anses som gyldig rett, uansett om den er formelt vedtatt.'
      }
    },

    // --- BLOKK 3: Offentlig rett og privatrett ---
    {
      id: 'rett1-1-1-text-3',
      type: 'text',
      content: `## Offentlig rett og privatrett

Rettssystemet deles tradisjonelt i to hovedområder:

**Offentlig rett** regulerer forholdet mellom staten/det offentlige og den enkelte borger, eller mellom offentlige organer. Eksempler:
- **Strafferett** – regler om straff for lovbrudd (straffeloven)
- **Forvaltningsrett** – regler for offentlig forvaltning (forvaltningsloven)
- **Statsrett** – regler om statens organisering (Grunnloven)
- **Skatterett** – regler om skatt og avgifter (skatteloven)

**Privatrett** regulerer forholdet mellom private parter (personer og bedrifter). Eksempler:
- **Avtalerett** – regler om inngåelse av avtaler (avtaleloven)
- **Kjøpsrett** – regler om kjøp og salg (kjøpsloven)
- **Erstatningsrett** – regler om erstatning for skade (skadeserstatningsloven)
- **Arverett** – regler om arv (arveloven)
- **Familierett** – regler om ekteskap og barn (ekteskapsloven, barneloven)

Skillet mellom offentlig rett og privatrett har praktisk betydning. I offentlig rett kan staten bruke tvangsmidler (for eksempel fengsel), mens i privatrett må partene selv bringe saken inn for domstolene.`
    },
    {
      id: 'rett1-1-1-example-2',
      type: 'example',
      title: 'Offentlig rett eller privatrett?',
      problem: 'Kari kjøper en mobiltelefon på nett som viser seg å være defekt. Hun vil klage til selgeren. Er dette et spørsmål innenfor offentlig rett eller privatrett?',
      solution: `**Analyse:**

Dette er et spørsmål innenfor **privatretten**, nærmere bestemt **kjøpsretten**. Her er det to private parter – Kari som kjøper og nettbutikken som selger – som er uenige om en avtale.

Kari kan påberope seg forbrukerkjøpsloven § 15 (krav til varen) og § 26 (reklamasjon). Hun kan kreve retting, omlevering, prisavslag eller heving av kjøpet.

Hadde Kari derimot blitt svindlet av selgeren, kunne det i tillegg blitt et **strafferettslig** spørsmål (offentlig rett) – da kan politiet etterforske saken etter straffeloven § 371 (bedrageri).`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Retten** er samfunnets system av regler som skal ordne, beskytte og fordele.
- **Rettsregler** håndheves av staten med tvang, mens **moralregler** håndheves gjennom sosiale reaksjoner.
- **Positiv rett** er menneskeskapt og vedtatt av lovgivende myndighet, mens **naturrett** bygger på overordnede rettigheter som står over menneskeskapt lov.
- **Offentlig rett** regulerer forholdet mellom stat og borger, mens **privatrett** regulerer forholdet mellom private parter.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en oversikt (tabell eller liste) der du plasserer disse lovene i riktig kategori – offentlig rett eller privatrett: straffeloven, kjøpsloven, skatteloven, arveloven, forvaltningsloven, ekteskapsloven. Begrunn kort for hver.',
        hints: ['Tenk på hvem som er parter – er det staten mot en borger, eller to private parter?'],
        solution: `**Offentlig rett:**
- **Straffeloven** – regulerer statens adgang til å straffe borgere for lovbrudd
- **Skatteloven** – regulerer borgernes skatteplikt overfor staten
- **Forvaltningsloven** – regulerer den offentlige forvaltningens saksbehandling overfor borgerne

**Privatrett:**
- **Kjøpsloven** – regulerer kjøp og salg mellom private parter
- **Arveloven** – regulerer fordeling av arv mellom private personer
- **Ekteskapsloven** – regulerer ekteskapets rettsvirkninger mellom ektefellene

Begrunnelse: Offentlig rett kjennetegnes ved at staten er part, mens privatretten handler om rettsforholdet mellom private.`
      }
    },
    {
      id: 'rett1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etter andre verdenskrig ble flere nazistiske tjenestemenn stilt for retten i Nürnberg. De forsvarte seg med at de «bare fulgte loven». Drøft denne problemstillingen i lys av skillet mellom positiv rett og naturrett. Kan en lov som er formelt gyldig, likevel være urettferdig? Bruk gjerne eksempler fra teksten.',
        hints: ['Tenk på hva rettspositivister og naturrettstenkere ville svart.', 'Husk at naturrettstradisjonen mener noen rettigheter står over menneskeskapt lov.'],
        solution: `**Drøfting:**

**Rettspositivistisk syn:** En lov som er vedtatt i riktig form av lovgivende myndighet, er gyldig rett. Nazistenes lover var formelt vedtatt og dermed «gjeldende rett» i Tyskland. De tiltalte fulgte gjeldende lov.

**Naturrettslig syn:** Det finnes overordnede rettigheter – som retten til liv og menneskeverd – som står over enhver menneskeskapt lov. Nazistenes lover om folkemord brøt med disse grunnleggende rettighetene og kan derfor ikke anses som gyldig rett.

**Nürnberg-domstolens tilnærming:** Domstolen la naturrettslige prinsipper til grunn. Den slo fast at det finnes forbrytelser mot menneskeheten som ikke kan rettferdiggjøres av nasjonal lovgivning.

**Konklusjon:** Etter Nürnberg-prosessene har naturrettstenkning fått fornyet betydning. FNs menneskerettighetserklæring (1948) og den europeiske menneskerettskonvensjonen (EMK) bygger på tanken om at visse rettigheter er universelle og ufravikelige – uavhengig av nasjonal lovgivning.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Maktfordeling og rettsstat
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_2: TextbookChapter = {
  id: 'rettslaere-1-1-2',
  courseId: 'rettslaere-1',
  chapterNumber: '1.2',
  title: 'Maktfordeling og rettsstat',
  description: 'Montesquieus maktfordelingsprinsipp, Grunnloven av 1814, de tre statsmaktene og grunnleggende rettssikkerhet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for maktfordelingsprinsippet og dets betydning for rettsstaten',
    'forklare sammenhengen mellom Grunnloven, rettsstat og rettssikkerhet'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-2-intro',
      type: 'text',
      content: `## Maktfordeling og rettsstat

Hva hindrer en regjering fra å misbruke makten sin? Hva hindrer politiet fra å fengsle uskyldige? Svaret ligger i to av de viktigste prinsippene i moderne demokratier: **maktfordeling** og **rettsstat**.

Ideen om maktfordeling ble utviklet av den franske filosofen **Charles de Montesquieu** (1689–1755) i verket *Om lovenes ånd* (1748). Montesquieu mente at all makt i staten måtte deles mellom tre uavhengige organer for å forhindre maktmisbruk. Hvis den samme personen eller gruppen både lager lovene, håndhever dem og dømmer i tvister, er friheten truet.`
    },

    // --- BLOKK 1: De tre statsmaktene ---
    {
      id: 'rett1-1-2-def-1',
      type: 'definition',
      title: 'De tre statsmaktene',
      content: `Montesquieus maktfordelingsprinsipp deler statsmakten i tre:

1. **Den lovgivende makt** (Stortinget) – vedtar lover, bevilger penger og kontrollerer regjeringen. Grunnloven § 75.
2. **Den utøvende makt** (Regjeringen/Kongen i statsråd) – iverksetter lovene, styrer forvaltningen og fører utenrikspolitikk. Grunnloven § 3.
3. **Den dømmende makt** (Domstolene) – avgjør tvister og straffesaker, og prøver om lover og vedtak er i samsvar med Grunnloven. Grunnloven § 88.

Poenget er at ingen av de tre maktene skal dominere de andre. Systemet bygger på **kontroll og balanse** (*checks and balances*).`
    },
    {
      id: 'rett1-1-2-example-1',
      type: 'example',
      title: 'Maktfordeling i praksis',
      problem: 'Stortinget vedtar en ny lov som sier at politiet kan fengsle personer i inntil 30 dager uten rettssak. Hvordan kan maktfordelingsprinsippet forhindre dette?',
      solution: `**Analyse:**

Loven er vedtatt av den lovgivende makt (Stortinget), men den strider trolig mot Grunnloven § 96 som sier at «Ingen kan dømmes uten etter lov, eller straffes uten etter dom».

Den **dømmende makt** (domstolene) kan utøve **konstitusjonell kontroll**: Dersom noen reiser sak, kan Høyesterett prøve om loven er i strid med Grunnloven. Hvis den er det, kan domstolen sette loven til side.

I tillegg kan **Sivilombudet** granske om forvaltningens praksis er i samsvar med loven, og **mediene** spiller en viktig rolle som «den fjerde statsmakt» ved å rette offentlig oppmerksomhet mot maktmisbruk.

Slik sikrer maktfordelingen at ingen av statsmaktene handler utenfor sine grenser.`
    },
    {
      id: 'rett1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem vedtar lovene i Norge?',
        options: [
          { id: 'a', text: 'Regjeringen', isCorrect: false },
          { id: 'b', text: 'Stortinget', isCorrect: true },
          { id: 'c', text: 'Høyesterett', isCorrect: false },
          { id: 'd', text: 'Kongen', isCorrect: false }
        ],
        solution: 'Stortinget er den lovgivende makt i Norge, jf. Grunnloven § 75. Regjeringen forbereder lovforslag (Odelstingsproposisjoner/proposisjoner), men det er Stortinget som vedtar dem.'
      }
    },

    // --- BLOKK 2: Grunnloven 1814 ---
    {
      id: 'rett1-1-2-text-2',
      type: 'text',
      content: `## Grunnloven av 1814

Norges Grunnlov ble vedtatt 17. mai 1814 på Eidsvoll. Den er den nest eldste gjeldende grunnloven i verden (etter USAs grunnlov fra 1787) og bygger direkte på Montesquieus maktfordelingsprinsipp.

Grunnloven har flere viktige funksjoner:

- **Rangerer over alle andre lover** – ingen lov kan stride mot Grunnloven
- **Fastsetter statens organisering** – hvordan Stortinget, regjeringen og domstolene er oppbygd
- **Beskytter menneskerettigheter** – kapittel E (§§ 92–113) inneholder en menneskerettighetskatalog
- **Er vanskelig å endre** – krever 2/3 flertall i Stortinget og må fremmes i én stortingsperiode og vedtas i neste (Grunnloven § 121)

Grunnloven sikrer at den grunnleggende samfunnsordningen ikke kan endres ved simpelt flertall, noe som gir stabilitet og forutsigbarhet.`
    },
    {
      id: 'rett1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kreves for å endre Grunnloven i Norge?',
        options: [
          { id: 'a', text: 'Simpelt flertall i Stortinget', isCorrect: false },
          { id: 'b', text: 'Folkeavstemning med over 50 % oppslutning', isCorrect: false },
          { id: 'c', text: '2/3 flertall i Stortinget, forslaget fremmes i én stortingsperiode og vedtas i neste', isCorrect: true },
          { id: 'd', text: 'Enstemmig vedtak i Stortinget', isCorrect: false }
        ],
        solution: 'Etter Grunnloven § 121 må et grunnlovsforslag fremmes i løpet av de tre første storting i en stortingsperiode, og det kan tidligst vedtas av det første, andre eller tredje storting etter neste stortingsvalg. Det kreves 2/3 flertall for vedtakelse. Denne prosessen sikrer at grunnlovsendringer er grundig gjennomtenkte.'
      }
    },

    // --- BLOKK 3: Rettsstat og rettssikkerhet ---
    {
      id: 'rett1-1-2-text-3',
      type: 'text',
      content: `## Rettsstat og rettssikkerhet

En **rettsstat** er en stat der myndighetene er bundet av loven og der borgerne har grunnleggende rettigheter som myndighetene ikke kan krenke. Det motsatte er en **politistat** der myndighetene handler vilkårlig uten rettslige skranker.

Rettsstaten bygger på flere grunnprinsipper:

- **Legalitetsprinsippet** – myndighetene kan bare gripe inn i borgernes rettigheter når de har hjemmel i lov (Grunnloven § 96 og § 113)
- **Likhet for loven** – alle skal behandles likt av rettssystemet, uavhengig av bakgrunn, status eller formue (Grunnloven § 98)
- **Rettssikkerhet** – borgerne skal beskyttes mot vilkårlige inngrep fra myndighetene
- **Uavhengige domstoler** – domstolene skal dømme fritt uten påvirkning fra politikere (Grunnloven § 95)
- **Kontradiksjonsprinsippet** – begge parter i en sak skal få uttale seg før avgjørelse treffes`
    },
    {
      id: 'rett1-1-2-def-2',
      type: 'definition',
      title: 'Konstitusjonell kontroll',
      content: `**Konstitusjonell kontroll** (prøvingsretten) er domstolenes rett til å prøve om lover vedtatt av Stortinget er i samsvar med Grunnloven. Dersom en lov strider mot Grunnloven, kan domstolen sette loven til side i den konkrete saken.

Denne retten er nå lovfestet i Grunnloven § 89: «I saker som reises for domstolene, har domstolene rett og plikt til å prøve om det strider mot Grunnloven å anvende andre lovbestemmelser.»

Konstitusjonell kontroll er en sentral del av maktbalansen – den sikrer at Stortinget ikke vedtar lover som bryter med de grunnleggende rettighetene i Grunnloven.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Maktfordelingsprinsippet** (Montesquieu) deler statsmakten i lovgivende, utøvende og dømmende makt for å forhindre maktmisbruk.
- **Grunnloven** av 1814 rangerer over alle andre lover, fastsetter statens organisering og beskytter menneskerettigheter.
- En **rettsstat** er en stat der myndighetene er bundet av loven og borgerne har grunnleggende rettigheter.
- **Rettssikkerhet** betyr at borgerne er beskyttet mot vilkårlige inngrep, blant annet gjennom legalitetsprinsippet og uavhengige domstoler.
- **Konstitusjonell kontroll** gir domstolene rett til å sette til side lover som strider mot Grunnloven.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hvorfor det er viktig at domstolene er uavhengige av Stortinget og regjeringen. Hva kunne skjedd dersom en politiker bestemte utfallet av en rettssak?',
        hints: ['Tenk på hva som skjer med borgernes rettssikkerhet dersom en statsmakt kontrollerer en annen.'],
        solution: `Dersom politikere kunne bestemme utfallet av rettssaker, ville rettssystemet miste sin funksjon som kontrollmekanisme. Borgere som kritiserte makthaverne, kunne bli dømt «etter ordre». Regjeringen kunne bruke domstolene til å forfølge politiske motstandere.

Uavhengige domstoler sikrer at alle – også mektige politikere og rike næringslivsledere – er underlagt loven. Dommerne skal bare rette seg etter loven og bevisene, ikke etter press fra politikere. Dette er et grunnleggende krav i rettsstaten, jf. Grunnloven § 95 som sier at «enhver har rett til å få sin sak avgjort av en uavhengig og upartisk domstol».`
      }
    },
    {
      id: 'rett1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn eller beskriv en modell som viser de tre statsmaktene i Norge og hvordan de kontrollerer hverandre. Inkluder minst ett konkret eksempel på kontroll mellom to av statsmaktene.',
        hints: ['Tenk på kontrollmekanismer: mistillit, prøvingsrett, lovforslag.'],
        solution: `**Modell:**

**Stortinget (lovgivende)** → vedtar lover som Regjeringen må følge, kan vedta mistillit mot regjeringen
**Regjeringen (utøvende)** → forbereder lovforslag til Stortinget, iverksetter lovene i praksis
**Domstolene (dømmende)** → kan prøve om lover er i strid med Grunnloven (konstitusjonell kontroll), kan prøve om forvaltningsvedtak er lovlige

**Konkret eksempel:** I 1976 avsa Høyesterett dom i «Kløfta-saken» der domstolen satte til side en lov om erstatning ved ekspropriasjon fordi den stred mot Grunnloven § 105 om full erstatning. Her kontrollerte den dømmende makt den lovgivende makt.`
      }
    },
    {
      id: 'rett1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I noen land styres domstolene av regjeringen. Drøft hva slags konsekvenser det kan ha for rettssikkerheten til borgerne. Bruk begrepene maktfordeling, rettsstat og legalitetsprinsippet i svaret ditt.',
        hints: ['Tenk på hva som skjer med kontradiksjonsprinsippet og likhet for loven.'],
        solution: `**Drøfting:**

Dersom regjeringen styrer domstolene, brytes **maktfordelingsprinsippet** – den utøvende makt kontrollerer den dømmende makt. Dette undergraver grunnlaget for **rettsstaten**.

**Konsekvenser for rettssikkerheten:**
1. **Legalitetsprinsippet svekkes** – regjeringen kan i praksis gripe inn i borgernes rettigheter uten reell rettslig kontroll, fordi domstolene ikke lenger fungerer som uavhengig kontrollinstans.
2. **Likhet for loven trues** – regjeringens venner og allierte kan få mild behandling, mens kritikere og opposisjonspolitikere kan bli strengt behandlet.
3. **Konstitusjonell kontroll umuliggjøres** – domstolene vil ikke tørre å sette regjeringens lover til side.

**Eksempler:** I land som Russland og Tyrkia har man sett at manglende domstolsuavhengighet fører til at opposisjonelle fengsles på tvilsomt grunnlag, medier knebles, og menneskerettigheter krenkes systematisk.

**Konklusjon:** Uavhengige domstoler er selve bærebjelken i rettsstaten. Uten dem er maktfordelingen bare en formalitet.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Domstolshierarkiet
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_3: TextbookChapter = {
  id: 'rettslaere-1-1-3',
  courseId: 'rettslaere-1',
  chapterNumber: '1.3',
  title: 'Domstolshierarkiet',
  description: 'Tingrett, lagmannsrett og Høyesterett – oppbygningen av det norske domstolssystemet, ankemuligheter og spesialdomstoler.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for oppbygningen av det norske domstolssystemet',
    'forklare hvordan en sak behandles i de ulike rettsinstansene og hva anke innebærer'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-3-intro',
      type: 'text',
      content: `## Domstolshierarkiet

Forestill deg at du er uenig i en dom i tingretten. Må du bare godta den? Heldigvis ikke. Det norske domstolssystemet er bygd opp som et **hierarki** med tre nivåer, der du kan **anke** en dom til et høyere nivå dersom du mener den er feil.

Domstolshierarkiet sikrer kvalitetskontroll av rettsavgjørelser og gir borgerne trygghet for at feil kan rettes opp.`
    },

    // --- BLOKK 1: Tingretten ---
    {
      id: 'rett1-1-3-def-1',
      type: 'definition',
      title: 'Tingretten – første instans',
      content: `**Tingretten** er den laveste rettsinstansen i det alminnelige domstolssystemet. De fleste sivile saker og straffesaker starter her.

**Fakta om tingretten:**
- Norge har omtrent **60 tingretter** fordelt over hele landet
- Retten ledes av en **tingrettsdommer** (fagdommer)
- I straffesaker deltar vanligvis **to meddommere** (lekdommere) sammen med fagdommeren
- Tingretten behandler både **sivile saker** (tvister mellom parter) og **straffesaker** (lovbrudd)
- Før en sivil sak går til tingretten, skal partene som hovedregel forsøke **mekling** i forliksrådet`
    },
    {
      id: 'rett1-1-3-note-1',
      type: 'note',
      title: 'Forliksrådet',
      content: `Forliksrådet er ikke en domstol i vanlig forstand, men et meklingsorgan. Hvert forliksråd har tre lekdommere. Formålet er å løse sivile tvister gjennom mekling før saken eventuelt går til tingretten. De fleste sivile saker under en viss verdi må innom forliksrådet først.`
    },
    {
      id: 'rett1-1-3-example-1',
      type: 'example',
      title: 'En sak i tingretten',
      problem: 'Ahmed blir tiltalt for butikktyveri (straffeloven § 321). Han erkjenner ikke straffskyld. Hvordan vil saken behandles i tingretten?',
      solution: `**Saksgangen:**

1. **Påtalemyndigheten** (statsadvokaten) sender tiltale til tingretten.
2. Ahmed får oppnevnt en **forsvarer** (advokat) som forbereder forsvaret.
3. **Hovedforhandling** gjennomføres med én fagdommer og to meddommere.
4. **Bevisføring:** Påtalemyndigheten legger frem bevis (overvåkningsvideo, vitner). Forsvareren får anledning til å imøtegå bevisene.
5. **Prosedyre:** Aktor (påtalemyndighetens representant) og forsvarer holder hver sin prosedyre.
6. Retten trekker seg tilbake for **domskonferanse** og avsier dom.

Dersom Ahmed dømmes, kan han **anke** dommen til lagmannsretten innen **to uker**.`
    },
    {
      id: 'rett1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem deltar normalt i en straffesak i tingretten?',
        options: [
          { id: 'a', text: 'Tre fagdommere', isCorrect: false },
          { id: 'b', text: 'Én fagdommer og to meddommere (lekdommere)', isCorrect: true },
          { id: 'c', text: 'Tolv jurymedlemmer og én dommer', isCorrect: false },
          { id: 'd', text: 'Bare én fagdommer uten meddommere', isCorrect: false }
        ],
        solution: 'I ordinære straffesaker i tingretten deltar én fagdommer (tingrettsdommer) og to meddommere (lekdommere). Meddommerne er vanlige borgere som er med på å avgjøre skyld- og straffespørsmålet.'
      }
    },

    // --- BLOKK 2: Lagmannsretten ---
    {
      id: 'rett1-1-3-def-2',
      type: 'definition',
      title: 'Lagmannsretten – andre instans',
      content: `**Lagmannsretten** er ankeinstansen over tingretten. Saker som er avgjort i tingretten kan ankes hit.

**Fakta om lagmannsretten:**
- Norge er delt inn i **6 lagdømmer**, hver med sin lagmannsrett: Borgarting, Eidsivating, Agder, Gulating, Frostating og Hålogaland
- Sivile saker behandles normalt av **tre fagdommere**
- Straffesaker med strafferamme over 6 år behandles av **tre fagdommere og fire meddommere** (meddomsrett)
- Lagmannsretten kan overprøve både **bevisbedømmelsen** og **rettsanvendelsen** fra tingretten
- Lagmannsretten kan **nekte å behandle en anke** dersom den finner det klart at anken ikke vil føre frem (såkalt ankesiling)`
    },
    {
      id: 'rett1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor mange lagdømmer er det i Norge?',
        options: [
          { id: 'a', text: '4', isCorrect: false },
          { id: 'b', text: '5', isCorrect: false },
          { id: 'c', text: '6', isCorrect: true },
          { id: 'd', text: '10', isCorrect: false }
        ],
        solution: 'Norge har 6 lagdømmer: Borgarting (Oslo-området), Eidsivating (Innlandet/Buskerud), Agder (Sørlandet/Telemark), Gulating (Vestland/Rogaland), Frostating (Trøndelag/Møre og Romsdal) og Hålogaland (Nord-Norge).'
      }
    },

    // --- BLOKK 3: Høyesterett ---
    {
      id: 'rett1-1-3-def-3',
      type: 'definition',
      title: 'Høyesterett – øverste instans',
      content: `**Høyesterett** er Norges øverste domstol, jf. Grunnloven § 88. Dommer fra Høyesterett kan ikke ankes videre.

**Fakta om Høyesterett:**
- Består av **20 dommere** (høyesterettsdommere), ledet av **justitiarius**
- Saker behandles normalt i **avdeling** med **5 dommere**
- Særlig viktige saker behandles i **storkammer** (11 dommere) eller **plenum** (alle dommere)
- Høyesterett tar bare inn saker som har prinsipiell betydning – **Høyesteretts ankeutvalg** (3 dommere) avgjør om anken skal slippe inn
- Høyesterett prøver bare **rettsanvendelsen**, ikke bevisbedømmelsen – det vil si at Høyesterett vurderer om loven er tolket og anvendt riktig
- Høyesteretts avgjørelser skaper **prejudikater** – rettslige forbilder som lavere domstoler følger`
    },
    {
      id: 'rett1-1-3-example-2',
      type: 'example',
      title: 'Saksgangen gjennom domstolshierarkiet',
      problem: 'Lisa blir dømt i tingretten for grovt tyveri etter straffeloven § 322 og får 8 måneders fengsel. Hun mener straffen er for streng. Beskriv hvordan hun kan bringe saken videre oppover i systemet.',
      solution: `**Ankeprosessen:**

**1. Anke til lagmannsretten:**
Lisa har **to uker** fra dommen ble avsagt til å anke. Hun kan anke over straffeutmålingen (at 8 måneder er for strengt). Lagmannsrettens ankeutvalg vurderer om anken skal slippe inn. Dersom anken behandles, vurderer lagmannsretten saken på nytt med ny bevisføring.

**2. Anke til Høyesterett:**
Dersom Lisa taper i lagmannsretten, kan hun søke om at saken tas inn av Høyesterett. Høyesteretts ankeutvalg (3 dommere) avgjør om anken slipper inn. Anken slipper bare inn dersom saken har **prinsipiell betydning** – for eksempel dersom det er uklarhet i loven om straffenivået for grovt tyveri.

**3. I Høyesterett:**
Fem dommere vurderer om lagmannsretten har anvendt loven riktig. De foretar ikke ny bevisføring, men bygger på bevisene fra lagmannsretten. Høyesteretts dom er endelig.

**Viktig:** Selv om man har rett til å anke, betyr det ikke at anken alltid slipper inn til behandling.`
    },

    // --- BLOKK 4: Spesialdomstoler ---
    {
      id: 'rett1-1-3-text-4',
      type: 'text',
      content: `## Spesialdomstoler

I tillegg til de alminnelige domstolene (tingrett, lagmannsrett, Høyesterett) har Norge flere **spesialdomstoler** som behandler bestemte typer saker:

- **Jordskifteretten** – behandler saker om eiendomsgrenser, bruksrettigheter og fordeling av fast eiendom. Finnes over hele landet.
- **Arbeidsretten** – behandler tvister om tariffavtaler mellom arbeidsgiver- og arbeidstakerorganisasjoner. Saker kan ikke ankes videre.
- **Trygderetten** – behandler klager på vedtak fra NAV. Er formelt et uavhengig forvaltningsorgan, men fungerer i praksis som en domstol.
- **Riksretten** – dømmer i saker om straffansvar for stortingsrepresentanter, regjeringsmedlemmer og høyesterettsdommere for brudd på konstitusjonelle plikter. Har aldri vært brukt i nyere tid.

Spesialdomstolene sikrer at saker med spesialisert fagkunnskap behandles av dommere med relevant kompetanse.`
    },
    {
      id: 'rett1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et prejudikat?',
        options: [
          { id: 'a', text: 'En dom som er avsagt av en dommer med fordommer', isCorrect: false },
          { id: 'b', text: 'En avgjørelse fra Høyesterett som fungerer som rettslig forbilde for lavere domstoler', isCorrect: true },
          { id: 'c', text: 'En dom som er anket og opphevet av lagmannsretten', isCorrect: false },
          { id: 'd', text: 'En foreløpig dom som kan endres senere', isCorrect: false }
        ],
        solution: 'Et prejudikat er en avgjørelse fra Høyesterett som blir retningsgivende for hvordan lavere domstoler skal avgjøre lignende saker. Selv om Norge formelt ikke har presedenssystem som i engelsktalende land, har Høyesteretts praksis i praksis stor vekt som rettskilde.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Domstolshierarkiet** har tre nivåer: tingrett, lagmannsrett og Høyesterett.
- **Tingretten** (ca. 60 stykker) er første instans der de fleste saker starter.
- **Lagmannsretten** (6 lagdømmer) er ankeinstans over tingretten.
- **Høyesterett** (20 dommere) er øverste instans og tar bare inn saker med prinsipiell betydning.
- **Anke** gir mulighet til å få en dom overprøvd av en høyere instans.
- **Spesialdomstoler** som jordskifteretten og arbeidsretten behandler bestemte sakstyper.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en rangert oversikt over det norske domstolshierarkiet fra laveste til høyeste nivå. Skriv ved hvert nivå hvor mange domstoler/dommere det er, og hva slags saker som behandles der.',
        hints: ['Start med tingretten og jobb deg oppover.'],
        solution: `**Domstolshierarkiet:**

**1. Tingretten (laveste nivå)**
- Ca. 60 tingretter over hele landet
- Behandler sivile saker og straffesaker som første instans
- Én fagdommer + to meddommere i straffesaker

**2. Lagmannsretten (mellomste nivå)**
- 6 lagdømmer: Borgarting, Eidsivating, Agder, Gulating, Frostating, Hålogaland
- Behandler anker over tingrettens dommer
- Tre fagdommere i sivile saker; tre fagdommere + fire meddommere i alvorlige straffesaker

**3. Høyesterett (øverste nivå)**
- 20 dommere, ledet av justitiarius
- Behandler saker med prinsipiell betydning
- Normalt fem dommere i avdeling, viktige saker i storkammer (11) eller plenum (alle)
- Prøver bare rettsanvendelsen, ikke bevisbedømmelsen`
      }
    },
    {
      id: 'rett1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En nabotvist om en eiendomsgrense har pågått i mange år. Per mener tomtegrensen går to meter lenger inn på Karins tomt enn det Karin hevder. Forklar hvilken domstol som først bør behandle saken, og beskriv hvordan saken kan bevege seg oppover i systemet dersom partene er uenige med resultatet.',
        hints: ['Tenk på hva slags sak dette er, og om det finnes en spesialdomstol for eiendomstvister.'],
        solution: `**Riktig domstol:**

Saken gjelder en eiendomsgrense, og bør først behandles i **jordskifteretten**, som er spesialdomstolen for eiendomstvister. Jordskifteretten har fagkompetanse på eiendomsgrenser, oppmåling og bruksrettigheter.

**Saksgangen:**
1. **Jordskifteretten** behandler saken. En jordskiftedommer med landmålerkompetanse fastsetter grensen basert på gammel dokumentasjon, kart og befaring.
2. Dersom Per eller Karin er uenig, kan dommen **ankes til lagmannsretten** (jordskifteavdelingen).
3. Dersom saken reiser prinsipielle spørsmål, kan den videre **ankes til Høyesterett** – men bare rettsanvendelsen, ikke selve bevisbedømmelsen av hvor grensen går.

**Alternativt:** Dersom saken gjelder et rent privatrettslig erstatningskrav (for eksempel at Karin har bygget på Pers tomt), kan den også behandles av **tingretten** som sivil tvist.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Rettskilder
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_4: TextbookChapter = {
  id: 'rettslaere-1-1-4',
  courseId: 'rettslaere-1',
  chapterNumber: '1.4',
  title: 'Rettskilder',
  description: 'Rettskildehierarkiet fra Grunnloven til reelle hensyn, Eckhoffs rettskildelære og hvordan jurister finner gjeldende rett.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for de viktigste rettskildene i norsk rett og hvordan de rangeres',
    'anvende rettskilder til å løse enkle juridiske problemstillinger'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-4-intro',
      type: 'text',
      content: `## Rettskilder

Når en jurist skal finne ut hva som er gjeldende rett i en sak, kan hun ikke bare lese én lov og trekke en konklusjon. Hun må vurdere flere **rettskilder** – det vil si de kildene som kan gi informasjon om hva som er gjeldende rett.

Men hva gjør man når rettskildene peker i ulike retninger? Hva om ordlyden i loven sier én ting, mens en dom fra Høyesterett sier noe annet? Da trenger man et system for å rangere kildene. Dette kalles **rettskildehierarkiet**.

Den norske rettskildelæren bygger i stor grad på professor **Torstein Eckhoffs** verk *Rettskildelære* (1971), som fortsatt er pensum på alle juridiske fakulteter i Norge.`
    },

    // --- BLOKK 1: Lov og Grunnlov ---
    {
      id: 'rett1-1-4-def-1',
      type: 'definition',
      title: 'Rettskildehierarkiet',
      content: `**Rettskildehierarkiet** er en rangordning av rettskilder etter deres autoritet. Ved motstrid mellom rettskilder, går den høyere rangerte kilden foran:

1. **Grunnloven** – øverste rettskilde, all annen lov må være i samsvar med Grunnloven
2. **Formell lov** – lover vedtatt av Stortinget (for eksempel straffeloven, avtaleloven)
3. **Forskrifter** – detaljregler gitt av regjeringen eller forvaltningen med hjemmel i lov
4. **Rettspraksis** – dommer fra domstolene, særlig Høyesterett (prejudikater)
5. **Lovforarbeider** – dokumenter fra lovgivningsprosessen (NOUer, proposisjoner)
6. **Sedvanerett** – uskreven rett som har dannet seg gjennom langvarig praksis
7. **Juridisk teori** – fagbøker og artikler skrevet av juridiske forfattere
8. **Reelle hensyn** – vurderinger av hva som er rimelig og rettferdig i det konkrete tilfellet`
    },
    {
      id: 'rett1-1-4-example-1',
      type: 'example',
      title: 'Rettskildehierarkiet i praksis',
      problem: 'En forskrift sier at butikker ikke kan ha åpent etter kl. 22:00. Stortinget vedtar en ny lov som sier at butikker kan ha åpent døgnet rundt. Hvilken regel gjelder?',
      solution: `**Analyse:**

I rettskildehierarkiet rangerer **formell lov** (vedtatt av Stortinget) over **forskrift** (gitt av regjeringen/forvaltningen).

Når det er motstrid mellom en lov og en forskrift, gjelder prinsippet **lex superior** – den høyere rangerte rettskilden går foran. Her vil loven som tillater døgnåpent, gå foran forskriften som begrenser åpningstiden.

I tillegg gjelder prinsippet **lex posterior** – nyere regler går foran eldre. Selv om begge hadde vært på samme nivå, ville den nyere loven gått foran den eldre forskriften.

**Konklusjon:** Butikker kan ha åpent døgnet rundt i henhold til den nye loven.`
    },
    {
      id: 'rett1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den høyest rangerte rettskilden i Norge?',
        options: [
          { id: 'a', text: 'Straffeloven', isCorrect: false },
          { id: 'b', text: 'Grunnloven', isCorrect: true },
          { id: 'c', text: 'Høyesteretts praksis', isCorrect: false },
          { id: 'd', text: 'Forskrifter fra regjeringen', isCorrect: false }
        ],
        solution: 'Grunnloven er den høyest rangerte rettskilden i Norge. All annen lov, forskrift og praksis må være i samsvar med Grunnloven. Dersom en vanlig lov strider mot Grunnloven, kan domstolene sette loven til side (konstitusjonell kontroll, jf. Grunnloven § 89).'
      }
    },
    {
      id: 'rett1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med prinsippet «lex superior»?',
        options: [
          { id: 'a', text: 'Den nyeste loven går foran den eldste', isCorrect: false },
          { id: 'b', text: 'Den mest spesielle loven går foran den generelle', isCorrect: false },
          { id: 'c', text: 'Den høyere rangerte rettskilden går foran den lavere rangerte', isCorrect: true },
          { id: 'd', text: 'Høyesteretts tolkning er alltid riktig', isCorrect: false }
        ],
        hints: ['«Superior» betyr «over» eller «høyere» på latin.'],
        solution: '«Lex superior» betyr at den høyere rangerte rettskilden går foran den lavere rangerte ved motstrid. For eksempel: Grunnloven går foran vanlig lov, og vanlig lov går foran forskrift. De to andre prinsippene heter «lex posterior» (nyere lov går foran eldre) og «lex specialis» (spesiell lov går foran generell).'
      }
    },

    // --- BLOKK 2: Rettspraksis og forarbeider ---
    {
      id: 'rett1-1-4-text-2',
      type: 'text',
      content: `## Rettspraksis og lovforarbeider

**Rettspraksis** – altså dommer fra domstolene – er en viktig rettskilde. Særlig Høyesteretts avgjørelser har stor vekt fordi de fungerer som **prejudikater**. Når Høyesterett har tolket en lovbestemmelse på en bestemt måte, vil lavere domstoler normalt følge den samme tolkningen.

**Lovforarbeider** er dokumentene som ble laget under lovgivningsprosessen:
- **NOU** (Norges offentlige utredninger) – utredning fra et lovutvalg
- **Proposisjon til Stortinget** (Prop. L) – regjeringens lovforslag til Stortinget
- **Innstilling fra Stortingets komité** – komiteens behandling av forslaget

Forarbeider brukes til å forstå hva lovgiveren mente med en bestemmelse. Dersom lovteksten er uklar, kan forarbeidene gi veiledning om hva Stortinget hadde til hensikt.`
    },
    {
      id: 'rett1-1-4-example-2',
      type: 'example',
      title: 'Bruk av forarbeider',
      problem: 'Avtaleloven § 36 sier at en avtale kan settes til side dersom den er «urimelig». Men hva betyr egentlig «urimelig»? Hvordan finner juristen ut hva lovgiveren mente?',
      solution: `**Analyse:**

Ordet «urimelig» i avtaleloven § 36 er et skjønnsmessig begrep – det har ikke ett klart svar. For å forstå hva lovgiveren mente, kan juristen se på:

1. **Forarbeidene** (Ot.prp. nr. 5 (1982–83)) – der forklares det at «urimelig» skal forstås som «i strid med alminnelig rettsfølelse» og at terskelen skal være høy.

2. **Rettspraksis** – Høyesterett har i en rekke dommer konkretisert hva som er urimelig. For eksempel: i Rt. 1988 s. 276 ble en leieavtale som ga utleier rett til å øke husleien ubegrenset, ansett som urimelig.

3. **Reelle hensyn** – domstolen vurderer hva som er rimelig i det konkrete tilfellet, blant annet partenes styrkeforhold og avtalens innhold.

Slik bruker juristen flere rettskilder sammen for å finne gjeldende rett.`
    },

    // --- BLOKK 3: Sedvane, juridisk teori og reelle hensyn ---
    {
      id: 'rett1-1-4-text-3',
      type: 'text',
      content: `## Sedvanerett, juridisk teori og reelle hensyn

De lavest rangerte rettskildene har minst autoritativ vekt, men kan likevel ha betydning i saker der lovteksten er uklar:

**Sedvanerett** er uskreven rett som har dannet seg gjennom langvarig og fast praksis i samfunnet. For at noe skal anses som sedvanerett, kreves det at praksisen har vært fulgt over lang tid, at folk oppfatter den som rettslig bindende, og at den ikke strider mot skreven lov. Eksempel: allemannsretten (retten til å ferdes i utmark) var opprinnelig sedvanerett, men er nå lovfestet i friluftsloven.

**Juridisk teori** er fagbøker og vitenskapelige artikler skrevet av jussprofessorer og andre rettsforskere. Juridisk teori har liten formell vekt, men kan være overbevisende dersom forfatteren gir gode argumenter.

**Reelle hensyn** er vurderinger av hva som gir et rimelig, rettferdig og hensiktsmessig resultat. Domstolene bruker reelle hensyn som et supplement når de andre rettskildene ikke gir et klart svar. Det handler om å finne den løsningen som «passer best» i rettssystemet som helhet.`
    },
    {
      id: 'rett1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva «reelle hensyn» er, og gi et eksempel på en situasjon der en dommer kan bruke reelle hensyn i sin vurdering.',
        hints: ['Tenk på situasjoner der lovteksten ikke gir et klart svar.'],
        solution: `**Reelle hensyn** er vurderinger av hva som er rimelig, rettferdig og fornuftig i det konkrete tilfellet. Det er en sikkerhetsventil i rettssystemet som brukes når de andre rettskildene ikke gir et klart svar.

**Eksempel:** En person kjøper en bruktbil som viser seg å ha en skjult mangel. Selgeren hevder at bilen ble solgt «som den er» (kjøpsloven § 19). Lovteksten er uklar om denne konkrete typen mangel.

Dommeren kan da bruke reelle hensyn: Er det rimelig at selgeren slipper unna når han visste om mangelen? Er det rettferdig at kjøperen bærer hele risikoen? En vurdering basert på rimelighet og rettferdighet kan trekke i retning av at selgeren har ansvar – selv om lovteksten er tvetydig.`
      }
    },

    // --- BLOKK 4: Eckhoffs rettskildelære ---
    {
      id: 'rett1-1-4-def-2',
      type: 'definition',
      title: 'Eckhoffs rettskildelære',
      content: `Professor **Torstein Eckhoff** (1916–1993) systematiserte den norske rettskildelæren i sitt verk *Rettskildelære* (1971). Han identifiserte syv hovedkategorier av rettskildefaktorer:

1. **Lovtekst** (og Grunnlov, forskrift)
2. **Lovforarbeider** (NOU, proposisjoner, innstillinger)
3. **Rettspraksis** (dommer, særlig fra Høyesterett)
4. **Andre myndigheters praksis** (forvaltningspraksis, sivilombudets uttalelser)
5. **Privates praksis** (avtaler, bransjenormer, sedvane)
6. **Juridisk teori** (rettsvitenskap)
7. **Reelle hensyn** (rimelighet, rettferdighet, hensiktsmessighet)

Eckhoff viste at rettsanvendelse ikke bare handler om å lese lovteksten, men om å veie ulike rettskilder mot hverandre i en samlet vurdering. Hans modell brukes fortsatt som grunnlag for juridisk metode i Norge.`
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Rettskilder** er kildene jurister bruker for å finne gjeldende rett.
- **Rettskildehierarkiet** rangerer kildene: Grunnlov > lov > forskrift > rettspraksis > forarbeider > sedvane > juridisk teori > reelle hensyn.
- Ved motstrid gjelder prinsippene **lex superior** (høyere rang foran), **lex posterior** (nyere foran eldre) og **lex specialis** (spesiell foran generell).
- **Eckhoffs rettskildelære** er grunnlaget for norsk juridisk metode og identifiserer syv kategorier av rettskildefaktorer.
- Rettsanvendelse handler om å veie flere rettskilder mot hverandre for å finne det riktige resultatet.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ranger følgende rettskilder fra høyest til lavest vekt: rettspraksis fra Høyesterett, en forskrift fra regjeringen, Grunnloven, juridisk teori, en lov vedtatt av Stortinget, reelle hensyn. Begrunn rangeringen kort.',
        hints: ['Bruk rettskildehierarkiet fra teksten.'],
        solution: `**Rangering (høyest til lavest):**

1. **Grunnloven** – øverste rettskilde, all annen rett må være i samsvar
2. **Lov vedtatt av Stortinget** – formell lov, direkte uttrykk for folkeviljen gjennom Stortinget
3. **Forskrift fra regjeringen** – gitt med hjemmel i lov, detaljregulering
4. **Rettspraksis fra Høyesterett** – prejudikater med stor autoritet, men kan ikke gå foran lov
5. **Juridisk teori** – kan gi gode argumenter, men har ingen formell bindende kraft
6. **Reelle hensyn** – lavest i hierarkiet, brukes som supplement når andre kilder er uklare

Rangeringen bygger på **lex superior**-prinsippet: rettskilder som er nærmere folkeviljen (Grunnlov, lov) rangerer over kilder med mindre demokratisk forankring.`
      }
    },
    {
      id: 'rett1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sara har inngått en avtale om å kjøpe en leilighet. Etter signering oppdager hun at leiligheten har fuktskader som selgeren ikke opplyste om. Selgeren hevder at Sara godtok leiligheten «som den er». Løs denne problemstillingen ved å bruke minst tre ulike rettskilder fra Eckhoffs rettskildelære. Forklar hva hver rettskilde sier og hvordan du veier dem mot hverandre.',
        hints: ['Tenk på avhendingsloven, rettspraksis og reelle hensyn.', 'Avhendingsloven § 3-9 handler om eiendommer solgt «som den er».'],
        solution: `**Juridisk analyse med tre rettskilder:**

**1. Lovtekst – Avhendingsloven § 3-9:**
Selv om en eiendom er solgt «som den er», har den mangel dersom selgeren har gitt uriktige opplysninger eller holdt tilbake opplysninger som kjøperen hadde grunn til å regne med å få. Sara kan påberope seg at selgeren ikke opplyste om fuktskadene.

**2. Rettspraksis – Høyesteretts dom i Rt. 2002 s. 1425 (Bukkebo-dommen):**
Høyesterett har slått fast at selgerens opplysningsplikt er streng. Selgeren har plikt til å opplyse om forhold ved eiendommen som han kjenner til og som kjøperen har grunn til å regne med å få opplysning om. Fuktskader er typisk noe selgeren plikter å opplyse om.

**3. Reelle hensyn:**
Det er rimelig at selgeren bærer risikoen for skjulte mangler han kjente til. Formålet med «som den er»-klausulen er å fordele risiko for ukjente feil, ikke å la selgeren skjule kjente mangler. Det ville undergrave tilliten i boligmarkedet dersom selgere kunne unnlate å opplyse om alvorlige feil.

**Konklusjon:** Alle tre rettskildene peker i samme retning – Sara har sannsynligvis et krav mot selgeren. Avhendingsloven, rettspraksis og reelle hensyn tilsier at selgerens manglende opplysning om fuktskadene utgjør en mangel, selv om leiligheten ble solgt «som den er».`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Lovtolkning
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_5: TextbookChapter = {
  id: 'rettslaere-1-1-5',
  courseId: 'rettslaere-1',
  chapterNumber: '1.5',
  title: 'Lovtolkning',
  description: 'Ordlydstolkning, formålstolkning, antitetisk tolkning og analogisk tolkning – hvordan jurister tolker lovtekster for å finne gjeldende rett.',
  estimatedMinutes: 30,
  competenceGoals: [
    'anvende lovtolkningsprinsipper'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-5-intro',
      type: 'text',
      content: `## Lovtolkning

Lovtekster er skrevet i et generelt språk som skal dekke mange ulike situasjoner. Men virkeligheten er ofte mer komplisert enn lovgiveren kunne forutse. Hva gjør man når det er uklart om en konkret situasjon faller inn under en lovbestemmelse?

Da må juristen **tolke** loven – det vil si finne frem til det meningsinnholdet lovteksten har. Lovtolkning er en sentral del av juridisk metode, og det finnes flere anerkjente tolkningsprinsipper som jurister bruker systematisk.

De viktigste tolkningsprinsippene er:

- **Ordlydstolkning** – hva sier ordene i lovteksten?
- **Formålstolkning** – hva var lovgiverens hensikt?
- **Antitetisk tolkning** – kan man slutte motsetningsvis fra loven?
- **Analogisk tolkning** – kan loven anvendes på lignende tilfeller?`
    },

    // --- BLOKK 1: Ordlydstolkning ---
    {
      id: 'rett1-1-5-def-1',
      type: 'definition',
      title: 'Ordlydstolkning',
      content: `**Ordlydstolkning** (også kalt språklig eller grammatisk tolkning) betyr at man tar utgangspunkt i lovtekstens ordlyd – altså den naturlige språklige forståelsen av ordene.

Ordlydstolkning er det primære tolkningsprinsippet i norsk rett. Utgangspunktet er alltid hva lovteksten sier, forstått slik en alminnelig person ville forstå ordene.

**Eksempel:** Straffeloven § 321 sier at den som «tar» en gjenstand som tilhører en annen, kan straffes for tyveri. Her betyr «tar» at man fysisk fjerner gjenstanden fra eierens besittelse. Man «tar» ikke noe bare ved å se på det.

Ordlyden setter yttergrensene for tolkningen – særlig i strafferetten, der **legalitetsprinsippet** (Grunnloven § 96) krever at ingen kan straffes uten hjemmel i lov.`
    },
    {
      id: 'rett1-1-5-example-1',
      type: 'example',
      title: 'Ordlydstolkning i praksis',
      problem: 'Vegtrafikkloven § 3 pålegger førere av «motorvogn» å opptre aktsomt. Ola kjører en elektrisk sparkesykkel og kjører på en fotgjenger. Er en elektrisk sparkesykkel en «motorvogn» etter ordlyden?',
      solution: `**Analyse med ordlydstolkning:**

Vegtrafikkloven § 2 definerer «motorvogn» som «kjøretøy som blir drevet frem med motor». En elektrisk sparkesykkel har en motor og drives frem av den.

Etter en ren ordlydstolkning kan det argumenteres for at en elektrisk sparkesykkel er en «motorvogn». Men tradisjonelt har begrepet vært forstått som biler, busser og motorsykler.

I praksis har lovgiver valgt å regulere elektriske sparkesykler som «små elektriske kjøretøy» i en egen forskrift (2022), nettopp fordi den opprinnelige ordlyden var uklar.

**Lærdom:** Ordlydstolkning er startpunktet, men noen ganger trenger man andre tolkningsprinsipper for å finne det rette svaret.`
    },
    {
      id: 'rett1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er utgangspunktet for all lovtolkning i norsk rett?',
        options: [
          { id: 'a', text: 'Hva dommeren personlig mener er rettferdig', isCorrect: false },
          { id: 'b', text: 'Lovtekstens ordlyd – den naturlige språklige forståelsen av ordene', isCorrect: true },
          { id: 'c', text: 'Hva politikerne mente da loven ble vedtatt', isCorrect: false },
          { id: 'd', text: 'Hva juridiske professorer har skrevet i lærebøker', isCorrect: false }
        ],
        solution: 'Ordlydstolkning er det primære tolkningsprinsippet i norsk rett. Man starter alltid med hva lovteksten sier, forstått slik en alminnelig person ville lese ordene. De andre tolkningsprinsippene brukes som supplement dersom ordlyden er uklar.'
      }
    },

    // --- BLOKK 2: Formålstolkning ---
    {
      id: 'rett1-1-5-def-2',
      type: 'definition',
      title: 'Formålstolkning',
      content: `**Formålstolkning** (teleologisk tolkning) betyr at man tolker lovteksten i lys av det formålet loven er ment å ivareta. Juristen spør: «Hva ønsket lovgiveren å oppnå med denne bestemmelsen?»

Formålet kan ofte finnes i:
- **Formålsbestemmelsen** – mange lover har en egen paragraf som angir lovens formål (for eksempel arbeidsmiljøloven § 1-1)
- **Lovforarbeidene** – proposisjoner og innstillinger som forklarer bakgrunnen for loven
- **Den generelle sammenhengen** – hva lovregelen logisk sett er ment å beskytte

Formålstolkning er særlig viktig der ordlyden er tvetydig eller der en streng ordlydstolkning ville gi et urimelig resultat som lovgiveren neppe kan ha tilsiktet.`
    },
    {
      id: 'rett1-1-5-example-2',
      type: 'example',
      title: 'Formålstolkning i praksis',
      problem: 'Arbeidsmiljøloven § 15-7 sier at en arbeidstaker ikke kan sies opp uten «saklig grunn». Bedriften Solvik AS sier opp Lars fordi han har hatt tre sykedager det siste halvåret. Er dette «saklig grunn»?',
      solution: `**Analyse med formålstolkning:**

Ordlyden «saklig grunn» er et vidt begrep. For å finne innholdet bruker vi formålstolkning:

**Formålet med oppsigelsesvernet** (aml. § 1-1) er å sikre «trygge ansettelsesforhold» og beskytte arbeidstakere mot vilkårlige oppsigelser.

**Forarbeidene** (Ot.prp. nr. 49 (2004–2005)) presiserer at korttidsfravær på grunn av sykdom normalt ikke er saklig grunn for oppsigelse. Arbeidstakeren har lovfestet rett til sykefravær (aml. § 15-8).

**Konklusjon:** Tre sykedager på et halvt år er helt vanlig sykefravær. En oppsigelse basert på dette ville stride mot formålet med oppsigelsesvernet og arbeidstakerens rett til sykefravær. Lars' oppsigelse er med all sannsynlighet usaklig.`
    },
    {
      id: 'rett1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva vil det si å tolke en lov «teleologisk»?',
        options: [
          { id: 'a', text: 'Man tolker loven ut fra hva ordene betyr på gresk', isCorrect: false },
          { id: 'b', text: 'Man tolker loven i lys av det formålet lovgiveren ønsket å oppnå', isCorrect: true },
          { id: 'c', text: 'Man tolker loven ut fra hva flertallet i befolkningen mener', isCorrect: false },
          { id: 'd', text: 'Man tolker loven strengt etter ordlyden uten å se på formålet', isCorrect: false }
        ],
        solution: 'Teleologisk tolkning (formålstolkning) innebærer at man tolker lovteksten i lys av lovens formål – altså det lovgiveren ønsket å oppnå med bestemmelsen. «Telos» er gresk for «formål» eller «mål». Formålet kan finnes i lovens formålsbestemmelse, forarbeidene eller den generelle sammenhengen loven inngår i.'
      }
    },

    // --- BLOKK 3: Antitetisk og analogisk tolkning ---
    {
      id: 'rett1-1-5-text-3',
      type: 'text',
      content: `## Antitetisk og analogisk tolkning

To tolkningsprinsipper handler om hva man gjør når en situasjon ikke direkte er nevnt i lovteksten:

**Antitetisk tolkning** (motsetningsslutning) betyr at man slutter fra lovens ordlyd at det som *ikke* er nevnt, *ikke* er omfattet. Dersom loven gir en rettighet til gruppe A, kan man tolke det slik at gruppe B – som ikke er nevnt – *ikke* har denne rettigheten.

**Eksempel:** Husleieloven § 9-5 gir leietakere rett til å si opp leieforholdet med tre måneders frist. Bestemmelsen nevner bare leietakere. Ved antitetisk tolkning kan man slutte at *utleiere* ikke har denne oppsigelsesretten etter denne bestemmelsen (de må følge andre regler).

**Analogisk tolkning** (analogi) betyr at man anvender en lovregel på et tilfelle den ikke direkte dekker, fordi tilfellet er så likt det loven regulerer at det gir best mening å behandle det på samme måte.

**Viktig begrensning:** I strafferetten er analogisk tolkning til skade for tiltalte forbudt (legalitetsprinsippet, Grunnloven § 96). Man kan ikke straffe noen for noe som ligner på det loven forbyr, men som ikke direkte er omfattet av ordlyden.`
    },
    {
      id: 'rett1-1-5-example-3',
      type: 'example',
      title: 'Antitetisk vs. analogisk tolkning',
      problem: 'Forbrukerkjøpsloven gir forbrukere (privatpersoner) et sterkt vern ved kjøp av varer fra næringsdrivende. Kjetil driver enkeltpersonforetak og kjøper en printer til firmaet sitt. Kan han påberope seg forbrukerkjøpsloven?',
      solution: `**Analyse:**

**Antitetisk tolkning:** Forbrukerkjøpsloven § 1 sier at loven gjelder «forbrukerkjøp», definert som salg til en «forbruker» – en fysisk person som ikke handler som ledd i næringsvirksomhet. Kjetil kjøper printeren til firmaet sitt, altså som ledd i næringsvirksomhet. Ved antitetisk tolkning faller han utenfor loven: den som *ikke* er forbruker, har *ikke* krav på vern etter forbrukerkjøpsloven.

**Kan analogisk tolkning hjelpe?** Kjetil driver et lite enkeltpersonforetak og ligner på en forbruker i styrkeforholdet overfor selgeren. Likevel er lovens grensedragning klar – næringsdrivende er bevisst holdt utenfor. Analogisk tolkning er derfor ikke aktuelt her.

**Konklusjon:** Kjetil må bruke den alminnelige kjøpsloven (som gir svakere vern enn forbrukerkjøpsloven).`
    },
    {
      id: 'rett1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord forskjellen mellom antitetisk og analogisk tolkning. Gi ett eksempel på hver.',
        hints: ['Tenk på antitetisk som «det som ikke er nevnt, er ikke omfattet» og analogisk som «lignende tilfeller bør behandles likt».'],
        solution: `**Antitetisk tolkning** (motsetningsslutning) innebærer at det som ikke er nevnt i loven, heller ikke er omfattet. Man slutter fra lovens ordlyd at lovgiveren bevisst har utelatt noe.

**Eksempel:** Arveloven § 9 sier at ektefeller har rett til arv etter hverandre. Samboere er ikke nevnt. Ved antitetisk tolkning har samboere *ikke* arverett etter denne bestemmelsen (de må opprette testament).

**Analogisk tolkning** innebærer at en lovregel anvendes på et tilfelle den ikke direkte dekker, fordi tilfellet er så likt at det ville vært urimelig å behandle det annerledes.

**Eksempel:** Kjøpsloven § 17 stiller krav til varens kvalitet ved kjøp. Dersom en lignende tvist oppstår ved en byttehandel (ikke kjøp), kan retten anvende kjøpslovens regler analogisk, fordi byttehandel ligner på kjøp.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Lovtolkning** er prosessen med å finne meningsinnholdet i en lovtekst.
- **Ordlydstolkning** er utgangspunktet – man ser på hva ordene naturlig betyr.
- **Formålstolkning** brukes der ordlyden er uklar – man ser på hva lovgiveren ønsket å oppnå.
- **Antitetisk tolkning** er motsetningsslutning: det som ikke er nevnt, er ikke omfattet.
- **Analogisk tolkning** er utvidende: loven kan anvendes på lignende tilfeller som ikke er direkte dekket.
- I strafferetten gjelder legalitetsprinsippet – analogisk tolkning til skade for tiltalte er forbudt (Grunnloven § 96).`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er analogisk tolkning til skade for tiltalte forbudt i strafferetten?',
        options: [
          { id: 'a', text: 'Fordi Høyesterett har bestemt det i en dom', isCorrect: false },
          { id: 'b', text: 'Fordi legalitetsprinsippet krever at ingen kan straffes uten klar hjemmel i lov', isCorrect: true },
          { id: 'c', text: 'Fordi analogisk tolkning alltid gir feil resultat', isCorrect: false },
          { id: 'd', text: 'Fordi straffeloven forbyr all tolkning av seg selv', isCorrect: false }
        ],
        solution: 'Legalitetsprinsippet i Grunnloven § 96 slår fast at «Ingen kan dømmes uten etter lov, eller straffes uten etter dom.» Dette betyr at straff krever klar hjemmel i lovtekstens ordlyd. Analogisk tolkning – der man straffer for noe som ligner det loven forbyr, men som ikke er direkte nevnt – ville undergrave dette prinsippet og skape rettsusikkerhet.'
      }
    },
    {
      id: 'rett1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Straffeloven § 291 forbyr «voldtekt». Bestemmelsen ble opprinnelig skrevet med tanke på fysiske overgrep. I dag skjer mange overgrep digitalt, for eksempel at noen truer en person til å utføre seksuelle handlinger foran et kamera over internett. Drøft om en slik handling kan rammes av bestemmelsen. Bruk ordlydstolkning, formålstolkning og vurder om det er rom for analogisk tolkning i strafferetten.',
        hints: ['Husk at legalitetsprinsippet setter grenser for tolkningen i strafferetten.', 'Se på formålet bak straffebudet – hva ønsker loven å beskytte?'],
        solution: `**Drøfting med tolkningsprinsipper:**

**Ordlydstolkning:** Straffeloven § 291 rammer den som skaffer seg seksuell omgang «ved vold eller truende atferd». Ordlyden «truende atferd» kan etter en naturlig språklig forståelse omfatte trusler fremsatt digitalt. «Seksuell omgang» kan etter en vid ordlydstolkning omfatte at offeret tvinges til å utføre seksuelle handlinger, selv om gjerningspersonen ikke er fysisk til stede.

**Formålstolkning:** Formålet med bestemmelsen er å beskytte den seksuelle selvbestemmelsesretten. Offeret for digital tvang lider tilsvarende krenkelse som et offer for fysisk tvang. Formålstolkning taler for at bestemmelsen bør omfatte digitale overgrep.

**Analogisk tolkning i strafferetten:** Dersom ordlyden ikke strekker til, setter legalitetsprinsippet (Grunnloven § 96) en absolutt grense. Man kan ikke straffe noen basert på analogi i strafferetten. Hvis handlingen ikke dekkes av ordlyden, må lovgiver eventuelt endre loven.

**Konklusjon:** I dette tilfellet er det mye som taler for at ordlyden «truende atferd» og «seksuell omgang» kan tolkes vidt nok til å dekke digitale overgrep – dette er ordlydstolkning, ikke analogi. Lovgiver har også i nyere tid utvidet bestemmelsene nettopp for å fange opp digitale overgrep.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6: Juridisk metode
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_6: TextbookChapter = {
  id: 'rettslaere-1-1-6',
  courseId: 'rettslaere-1',
  chapterNumber: '1.6',
  title: 'Juridisk metode',
  description: 'Å løse rettsspørsmål fra faktum til konklusjon – subsumsjon, rettsanvendelse og den juridiske fremgangsmåten.',
  estimatedMinutes: 30,
  competenceGoals: [
    'anvende juridisk metode'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-6-intro',
      type: 'text',
      content: `## Juridisk metode

Juridisk metode er den fremgangsmåten jurister bruker for å løse rettsspørsmål. Metoden sikrer at juridiske vurderinger ikke blir vilkårlige, men følger en systematisk og etterprøvbar prosess.

Kjernen i juridisk metode kan sammenfattes i fire steg:

1. **Identifiser faktum** – hva har faktisk skjedd?
2. **Finn rettsregelen** – hvilken lovregel er relevant?
3. **Subsumér** – passer faktum inn under rettsregelen?
4. **Konkludér** – hva blir den juridiske løsningen?

Denne fremgangsmåten brukes av advokater, dommere og studenter for å løse alt fra enkle kontraktstvister til kompliserte straffesaker. I dette kapittelet skal vi lære hvert steg og øve på å bruke dem i praksis.`
    },

    // --- BLOKK 1: Fra faktum til rettsregel ---
    {
      id: 'rett1-1-6-def-1',
      type: 'definition',
      title: 'Faktum og rettsregel',
      content: `**Faktum** er de faktiske omstendighetene i en sak – hva som har skjedd, hvem som er involvert, og hva som er bevist. Faktum er utgangspunktet for enhver juridisk vurdering.

**Rettsregelen** er den lovbestemmelsen (eller annen rettskilde) som regulerer den aktuelle situasjonen. Rettsregelen har typisk to deler:

- **Vilkårssiden** – de betingelsene som må være oppfylt for at regelen skal komme til anvendelse
- **Rettsfølgesiden** – den konsekvensen som inntrer dersom vilkårene er oppfylt

**Eksempel:** Straffeloven § 321 om tyveri:
- **Vilkår:** Den som «tar» en «gjenstand» som tilhører «en annen», med forsett om «å skaffe seg en uberettiget vinning»
- **Rettsfølge:** Straff med bot eller fengsel inntil 2 år`
    },
    {
      id: 'rett1-1-6-example-1',
      type: 'example',
      title: 'Identifisere faktum og rettsregel',
      problem: 'Maria går inn i en butikk og putter en sjokolade til 35 kroner i lommen uten å betale. Hun blir stoppet av vekteren utenfor butikken. Identifiser faktum og relevant rettsregel.',
      solution: `**Faktum:**
- Maria gikk inn i en butikk
- Hun tok en sjokolade (verdi: 35 kr)
- Hun puttet den i lommen uten å betale
- Hun ble stoppet utenfor butikken av vekteren

**Relevant rettsregel:** Straffeloven § 321 om tyveri:
*«Den som tar en gjenstand som tilhører en annen, med forsett om å skaffe seg eller andre en uberettiget vinning ved å selge, forbruke eller på annen måte tilegne seg den, straffes for tyveri med bot eller fengsel inntil 2 år.»*

**Vilkårene som må vurderes:**
1. «tar» – Maria fjernet sjokoladen fra hyllen og puttet den i lommen
2. «gjenstand» – sjokoladen er en fysisk gjenstand
3. «tilhører en annen» – sjokoladen tilhørte butikken
4. «forsett om uberettiget vinning» – Maria hadde til hensikt å ta med sjokoladen uten å betale`
    },
    {
      id: 'rett1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «faktum» i juridisk metode?',
        options: [
          { id: 'a', text: 'Den lovbestemmelsen som er relevant for saken', isCorrect: false },
          { id: 'b', text: 'De faktiske omstendighetene i saken – hva som har skjedd', isCorrect: true },
          { id: 'c', text: 'Dommerens personlige mening om saken', isCorrect: false },
          { id: 'd', text: 'Det samme som konklusjonen', isCorrect: false }
        ],
        solution: 'Faktum er de faktiske omstendighetene i saken – hva som har skjedd, hvem som er involvert, og hva som er bevist. Faktum er alltid utgangspunktet for den juridiske vurderingen. Uten et klart faktum kan man ikke avgjøre hvilken rettsregel som er relevant.'
      }
    },

    // --- BLOKK 2: Subsumsjon ---
    {
      id: 'rett1-1-6-def-2',
      type: 'definition',
      title: 'Subsumsjon',
      content: `**Subsumsjon** er selve kjernen i juridisk metode. Det betyr å anvende en rettsregel på et konkret faktum – altså å vurdere om de faktiske omstendighetene oppfyller vilkårene i rettsregelen.

Subsumsjon følger en fast struktur:

1. **Angi vilkåret** – hva krever loven?
2. **Beskriv faktum** – hva har skjedd i den konkrete saken?
3. **Vurdér** – oppfyller faktum vilkåret? Begrunn.
4. **Konkludér** – er vilkåret oppfylt eller ikke?

**Eksempel på subsumsjon:**
- **Vilkår:** «tar en gjenstand» (straffeloven § 321)
- **Faktum:** Maria puttet sjokoladen i lommen og gikk mot utgangen
- **Vurdering:** Maria fjernet fysisk sjokoladen fra butikkens hylle og tok den med seg – dette er å «ta» en gjenstand
- **Delkonklusjon:** Vilkåret «tar en gjenstand» er oppfylt

Man gjennomfører subsumsjon for hvert vilkår i rettsregelen.`
    },
    {
      id: 'rett1-1-6-example-2',
      type: 'example',
      title: 'Fullstendig subsumsjon',
      problem: 'Petter (17 år) sykler hjem fra skolen og lar sykkelen stå ulåst utenfor kiosken. Når han kommer ut igjen, er sykkelen borte. Overvåkningskameraet viser at Erik (19 år) tok sykkelen og syklet av gårde med den. Gjennomfør en subsumsjon etter straffeloven § 321 om tyveri.',
      solution: `**Subsumsjon etter straffeloven § 321:**

**Vilkår 1: «tar»**
Erik løftet sykkelen fra stedet den sto og syklet bort med den. Han fjernet gjenstanden fra Petters besittelse. *Vilkåret er oppfylt.*

**Vilkår 2: «en gjenstand»**
En sykkel er en fysisk gjenstand. *Vilkåret er oppfylt.*

**Vilkår 3: «som tilhører en annen»**
Sykkelen tilhørte Petter. Erik hadde ingen rett til sykkelen. *Vilkåret er oppfylt.*

**Vilkår 4: «forsett om uberettiget vinning»**
Erik tok bevisst med seg sykkelen og forsvant. Han hadde til hensikt å tilegne seg den, noe som gir ham en vinning (verdien av sykkelen) han ikke har rett på. *Vilkåret er oppfylt.*

**Konklusjon:** Alle vilkårene i straffeloven § 321 er oppfylt. Erik kan straffes for tyveri med bot eller fengsel inntil 2 år.`
    },
    {
      id: 'rett1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva subsumsjon er, og beskriv de fire stegene i en subsumsjon. Bruk gjerne et eget eksempel.',
        hints: ['Tenk på subsumsjon som å legge faktum «under» rettsregelen for å se om det passer.'],
        solution: `**Subsumsjon** er å anvende en rettsregel på et konkret faktum – man vurderer om det som har skjedd, oppfyller vilkårene i loven.

**De fire stegene:**
1. **Angi vilkåret:** Hva krever lovteksten? (For eksempel: «uaktsom kjøring» etter vegtrafikkloven § 3)
2. **Beskriv faktum:** Hva skjedde? (For eksempel: Ole så på mobilen mens han kjørte og kjørte på rødt lys)
3. **Vurder:** Passer faktum inn under vilkåret? (Å se på mobilen mens man kjører er en klar form for uaktsomhet – man utviser ikke tilstrekkelig oppmerksomhet i trafikken)
4. **Konkluder:** Er vilkåret oppfylt? (Ja, Oles kjøring var uaktsom etter vegtrafikkloven § 3)

Subsumsjon gjennomføres for hvert enkelt vilkår i rettsregelen. Først når alle vilkår er oppfylt, slår rettsfølgen inn.`
      }
    },

    // --- BLOKK 3: Rettsanvendelse – den fullstendige prosessen ---
    {
      id: 'rett1-1-6-text-3',
      type: 'text',
      content: `## Rettsanvendelse – den fullstendige prosessen

**Rettsanvendelse** er den samlede prosessen med å løse et juridisk spørsmål. Den omfatter alle stegene fra man mottar et faktum, til man trekker en konklusjon. I praksis kan prosessen oppsummeres slik:

**Steg 1 – Identifisér rettsspørsmålet:** Hva er det juridiske problemet? Eksempel: «Har Maria begått tyveri?»

**Steg 2 – Klarlegg faktum:** Hva er de relevante faktiske omstendighetene? Fjern irrelevant informasjon.

**Steg 3 – Finn rettsregelen:** Identifiser relevant lovbestemmelse og tolk den ved hjelp av lovtolkningsprinsippene (ordlyd, formål, forarbeider).

**Steg 4 – Subsumér:** Anvend rettsregelen på faktum – gå gjennom hvert vilkår systematisk.

**Steg 5 – Konkludér:** Trekk en samlet konklusjon. Hva er den juridiske løsningen?

Denne fremgangsmåten kalles ofte «IRAC-metoden» internasjonalt: **I**ssue (rettsspørsmål), **R**ule (rettsregel), **A**pplication (subsumsjon), **C**onclusion (konklusjon).`
    },
    {
      id: 'rett1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig rekkefølge i juridisk metode?',
        options: [
          { id: 'a', text: 'Konklusjon → Faktum → Rettsregel → Subsumsjon', isCorrect: false },
          { id: 'b', text: 'Rettsregel → Konklusjon → Faktum → Subsumsjon', isCorrect: false },
          { id: 'c', text: 'Faktum → Rettsregel → Subsumsjon → Konklusjon', isCorrect: true },
          { id: 'd', text: 'Subsumsjon → Faktum → Rettsregel → Konklusjon', isCorrect: false }
        ],
        solution: 'Den korrekte rekkefølgen i juridisk metode er: (1) Faktum – hva har skjedd? (2) Rettsregel – hvilken lov gjelder? (3) Subsumsjon – oppfyller faktum vilkårene? (4) Konklusjon – hva er svaret? Denne strukturen sikrer en systematisk og etterprøvbar juridisk vurdering.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Juridisk metode** er den systematiske fremgangsmåten jurister bruker for å løse rettsspørsmål.
- Prosessen har fire hovedsteg: identifiser **faktum**, finn **rettsregelen**, gjennomfør **subsumsjon**, og trekk en **konklusjon**.
- **Faktum** er de faktiske omstendighetene, mens **rettsregelen** er den relevante lovbestemmelsen med vilkårsside og rettsfølgeside.
- **Subsumsjon** er kjernen – man vurderer om faktum oppfyller hvert enkelt vilkår i rettsregelen.
- **Rettsanvendelse** er den samlede prosessen fra faktum til konklusjon, også kjent som IRAC-metoden.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Silje bestiller en jakke til 1 200 kroner fra en nettbutikk. Jakken som ankommer er en annen modell enn den hun bestilte, og den har en synlig flekk på ermet. Silje vil heve kjøpet. Bruk juridisk metode (faktum, rettsregel, subsumsjon, konklusjon) til å vurdere om Silje har rett til å heve kjøpet etter forbrukerkjøpsloven § 26 jf. § 32.',
        hints: ['Forbrukerkjøpsloven § 15 stiller krav om at tingen skal samsvare med avtalen.', 'Heving etter § 32 krever at mangelen ikke er «uvesentlig».'],
        solution: `**Faktum:** Silje bestilte en bestemt jakkemodell fra nettbutikk. Jakken som ble levert var en annen modell med en synlig flekk. Pris: 1 200 kr.

**Rettsregel:** Forbrukerkjøpsloven § 15 – tingen skal samsvare med det som følger av avtalen. § 26 – forbrukeren kan gjøre gjeldende mangel. § 32 – forbrukeren kan heve dersom mangelen ikke er «uvesentlig».

**Subsumsjon:**
*Vilkår 1 – Foreligger det en mangel (§ 15)?* Silje fikk en annen modell enn bestilt, og jakken har en flekk. Tingen samsvarer klart ikke med avtalen. Mangel foreligger.

*Vilkår 2 – Er mangelen «ikke uvesentlig» (§ 32)?* Feil modell er en vesentlig avvikelse fra avtalen – Silje har ikke fått det hun bestilte. I tillegg har jakken en synlig flekk. Samlet sett er mangelen klart ikke uvesentlig.

**Konklusjon:** Silje har rett til å heve kjøpet etter forbrukerkjøpsloven § 32. Hun kan sende jakken tilbake og kreve pengene igjen.`
      }
    },
    {
      id: 'rett1-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Thomas (16 år) inngår en avtale om å kjøpe en spillkonsoll til 5 000 kroner fra en privatperson på Finn.no. Faren til Thomas visste ikke om kjøpet. Selgeren krever at Thomas betaler. Bruk fullstendig juridisk metode til å vurdere om avtalen er bindende. Hint: Se vergemålsloven § 9 om mindreåriges handleevne.',
        hints: ['Vergemålsloven § 9 sier at mindreårige ikke kan binde seg ved rettshandel uten vergens samtykke, med unntak for «sedvanlige» disposisjoner.', 'Vurder om kjøp av en spillkonsoll til 5 000 kr er en «sedvanlig» disposisjon for en 16-åring.'],
        solution: `**Rettsspørsmål:** Er avtalen mellom Thomas (16 år) og selgeren bindende?

**Faktum:** Thomas er 16 år (mindreårig). Han har kjøpt en spillkonsoll til 5 000 kr fra en privatperson på Finn.no. Faren (vergen) visste ikke om kjøpet og har ikke samtykket.

**Rettsregel:** Vergemålsloven § 9 første ledd: «Den som er mindreårig, kan ikke selv foreta rettshandler eller råde over sine midler, med mindre noe annet er bestemt i lov eller følger av særlige omstendigheter.» Andre ledd: Mindreårige kan likevel binde seg ved «sedvanlige» disposisjoner.

**Subsumsjon:**
*Er Thomas mindreårig?* Ja, han er 16 år. Myndighetsalder er 18 år (vergemålsloven § 8). Vilkåret er oppfylt.

*Har vergen samtykket?* Nei, faren visste ikke om kjøpet. Vilkåret for unntak er ikke oppfylt.

*Er kjøpet en «sedvanlig» disposisjon?* En spillkonsoll til 5 000 kr er et relativt dyrt kjøp for en 16-åring. Det er forskjell på å kjøpe en brus til 30 kr og en spillkonsoll til 5 000 kr. Forarbeidene til vergemålsloven (Prop. 46 L (2012–2013)) tilsier at beløpets størrelse og kjøpets art må vurderes. Kjøpet ligger trolig over det som kan anses som «sedvanlig» for en 16-åring uten foreldres viten.

**Konklusjon:** Avtalen er sannsynligvis ikke bindende for Thomas, fordi han er mindreårig, vergen ikke har samtykket, og kjøpet overstiger det som kan anses som en «sedvanlig» disposisjon. Selgeren kan ikke kreve betaling. Avtalen kan gjøres ugyldig etter vergemålsloven § 14.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7: Menneskerettigheter
// ============================================================================

export const CHAPTER_RETTSLAERE_1_1_7: TextbookChapter = {
  id: 'rettslaere-1-1-7',
  courseId: 'rettslaere-1',
  chapterNumber: '1.7',
  title: 'Menneskerettigheter',
  description: 'Den europeiske menneskerettskonvensjonen (EMK), FN-konvensjoner, Grunnloven kapittel E, barnekonvensjonen og vern mot diskriminering.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for sentrale menneskerettigheter'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'rett1-1-7-intro',
      type: 'text',
      content: `## Menneskerettigheter

Menneskerettigheter er grunnleggende rettigheter som tilkommer alle mennesker, uavhengig av nasjonalitet, kjønn, etnisitet, religion eller andre kjennetegn. Disse rettighetene er universelle – de gjelder overalt og for alle.

Etter andre verdenskrig og Holocaust ble det internasjonale samfunnet enig om at stater ikke fritt kan behandle sine borgere som de vil. **FNs verdenserklæring om menneskerettigheter** (1948) slo fast at alle mennesker er «født frie og med samme menneskeverd og menneskerettigheter».

Menneskerettighetene er i dag beskyttet på tre nivåer:

- **Internasjonalt:** FN-konvensjoner (SP, ØSK, barnekonvensjonen m.fl.)
- **Regionalt:** Den europeiske menneskerettskonvensjonen (EMK)
- **Nasjonalt:** Grunnloven kapittel E (§§ 92–113) og menneskerettsloven`
    },

    // --- BLOKK 1: EMK ---
    {
      id: 'rett1-1-7-def-1',
      type: 'definition',
      title: 'Den europeiske menneskerettskonvensjonen (EMK)',
      content: `**Den europeiske menneskerettskonvensjonen (EMK)** ble vedtatt av Europarådet i 1950 og trådte i kraft i 1953. Norge ratifiserte konvensjonen i 1952. EMK er gjort til norsk lov gjennom **menneskerettsloven § 2** og har **forrang** foran annen norsk lov ved motstrid (menneskerettsloven § 3).

**Sentrale rettigheter i EMK:**
- **Art. 2** – Retten til liv
- **Art. 3** – Forbud mot tortur og umenneskelig behandling
- **Art. 5** – Retten til frihet og sikkerhet
- **Art. 6** – Retten til rettferdig rettergang
- **Art. 8** – Retten til respekt for privat- og familieliv
- **Art. 9** – Tanke-, samvittighets- og religionsfrihet
- **Art. 10** – Ytringsfrihet
- **Art. 14** – Forbud mot diskriminering

Borgere som mener at staten har krenket rettighetene deres etter EMK, kan klage til **Den europeiske menneskerettsdomstolen (EMD)** i Strasbourg, etter at nasjonale rettsmidler er uttømt.`
    },
    {
      id: 'rett1-1-7-example-1',
      type: 'example',
      title: 'EMK i norsk rett',
      problem: 'Politiet avlytter telefonsamtalene til journalist Hilde uten at hun vet om det, fordi de mistenker en av kildene hennes for kriminalitet. Hilde oppdager det og klager. Hvilken EMK-artikkel er relevant?',
      solution: `**Analyse:**

**Relevant artikkel:** EMK artikkel 8 – Retten til respekt for privat- og familieliv. Artikkelen beskytter blant annet korrespondanse og kommunikasjon.

**Vurdering:** Telefonavlytting er et inngrep i Hildes rett til privatliv etter EMK art. 8. Et slikt inngrep er bare lovlig dersom tre vilkår er oppfylt:
1. **Lovhjemmel** – inngrepet må ha grunnlag i lov (straffeprosessloven kap. 16a om kommunikasjonskontroll)
2. **Legitimt formål** – inngrepet må forfølge et legitimt formål (for eksempel kriminalitetsbekjempelse)
3. **Nødvendig i et demokratisk samfunn** – inngrepet må være forholdsmessig

**I tillegg:** EMK art. 10 om ytringsfrihet gir journalister et særlig vern for sine kilder. Den europeiske menneskerettsdomstolen (EMD) har i flere saker slått fast at avlytting av journalister for å avsløre kilder er et svært alvorlig inngrep i pressefriheten.

**Konklusjon:** Politiets avlytting kan krenke både EMK art. 8 og art. 10. Hilde kan bringe saken inn for norske domstoler, og eventuelt klage til EMD i Strasbourg.`
    },
    {
      id: 'rett1-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer dersom en norsk lov strider mot Den europeiske menneskerettskonvensjonen (EMK)?',
        options: [
          { id: 'a', text: 'Den norske loven gjelder alltid foran EMK', isCorrect: false },
          { id: 'b', text: 'EMK har forrang foran den norske loven etter menneskerettsloven § 3', isCorrect: true },
          { id: 'c', text: 'Stortinget bestemmer hvilken regel som gjelder', isCorrect: false },
          { id: 'd', text: 'EMK gjelder bare i andre europeiske land, ikke i Norge', isCorrect: false }
        ],
        solution: 'Etter menneskerettsloven § 3 har EMK forrang foran annen norsk lovgivning dersom det er motstrid. Dette betyr at norske domstoler må anvende EMK-bestemmelsen i stedet for den norske loven. EMK har dermed i praksis en stilling mellom Grunnloven og vanlig lov i rettskildehierarkiet.'
      }
    },

    // --- BLOKK 2: FN-konvensjoner og barnekonvensjonen ---
    {
      id: 'rett1-1-7-text-2',
      type: 'text',
      content: `## FN-konvensjoner

FN har vedtatt en rekke konvensjoner som beskytter menneskerettighetene. De viktigste er:

**FN-konvensjonen om sivile og politiske rettigheter (SP, 1966)** beskytter blant annet retten til liv, forbud mot tortur, ytringsfrihet, religionsfrihet, rettferdig rettergang og vern mot vilkårlig fengsling. SP er gjort til norsk lov gjennom menneskerettsloven.

**FN-konvensjonen om økonomiske, sosiale og kulturelle rettigheter (ØSK, 1966)** beskytter blant annet retten til arbeid, utdanning, helse, bolig og en tilfredsstillende levestandard. ØSK er også gjort til norsk lov gjennom menneskerettsloven.

**FNs barnekonvensjon (1989)** gir barn (under 18 år) egne rettigheter. Sentrale prinsipper:
- **Barnets beste** (art. 3) – barnets beste skal være et grunnleggende hensyn i alle avgjørelser som berører barn
- **Retten til å bli hørt** (art. 12) – barn har rett til å uttale seg i saker som angår dem
- **Ikke-diskriminering** (art. 2) – alle barn har like rettigheter
- **Retten til liv og utvikling** (art. 6) – staten plikter å sikre barns overlevelse og utvikling

Barnekonvensjonen er inkorporert i norsk lov gjennom menneskerettsloven og har forrang foran annen norsk lovgivning.`
    },
    {
      id: 'rett1-1-7-example-2',
      type: 'example',
      title: 'Barnets beste i praksis',
      problem: 'I en barnefordelingssak ønsker mor å flytte til Tromsø med datteren Emma (8 år), mens far bor i Oslo. Far motsetter seg flyttingen. Hvordan er «barnets beste» relevant?',
      solution: `**Analyse:**

**Rettsgrunnlag:** Barneloven § 48 sier at avgjørelser om foreldreansvar, fast bosted og samvær «først og fremst» skal rettes etter det som er best for barnet. FNs barnekonvensjon art. 3 krever at barnets beste skal være «et grunnleggende hensyn».

**Vurdering av barnets beste:**
Retten må gjøre en helhetsvurdering der blant annet følgende momenter er relevante:
- Emmas tilknytning til begge foreldrene
- Risikoen for å miste kontakt med far ved flytting
- Emmas eget ønske (barnekonvensjonen art. 12 – barn har rett til å bli hørt, og Emma er 8 år)
- Stabilitet og trygghet i hverdagen
- Tilgang til skole, venner og fritidsaktiviteter

**Barnets rett til å bli hørt:** Emma er 8 år. Etter barneloven § 31 skal barn over 7 år få uttale seg. Domstolen må snakke med Emma og legge vekt på hennes mening, tilpasset hennes alder og modenhet.

**Konklusjon:** Retten vil vurdere alle momentene samlet og treffe den avgjørelsen som best ivaretar Emmas behov og interesser.`
    },
    {
      id: 'rett1-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer prinsippet om «barnets beste» i FNs barnekonvensjon artikkel 3?',
        options: [
          { id: 'a', text: 'Barn skal alltid få viljen sin', isCorrect: false },
          { id: 'b', text: 'Barnets beste skal være et grunnleggende hensyn i alle avgjørelser som berører barn', isCorrect: true },
          { id: 'c', text: 'Foreldrenes ønsker er alltid viktigere enn barnets behov', isCorrect: false },
          { id: 'd', text: 'Prinsippet gjelder bare i barnevernssaker', isCorrect: false }
        ],
        solution: 'FNs barnekonvensjon art. 3 slår fast at barnets beste skal være «et grunnleggende hensyn» i alle handlinger som berører barn – enten det gjelder domstoler, forvaltningsorganer, lovgivende organer eller private velferdsorganisasjoner. Merk at barnets beste ikke er det eneste hensynet, men det skal tillegges stor vekt i den samlede vurderingen.'
      }
    },

    // --- BLOKK 3: Grunnloven kap. E og diskriminering ---
    {
      id: 'rett1-1-7-text-3',
      type: 'text',
      content: `## Grunnloven kapittel E – Menneskerettigheter

I 2014 ble Grunnloven revidert med et eget menneskerettighetskapittel (kapittel E, §§ 92–113). Dette styrket menneskerettighetenes stilling i norsk rett ved å gi dem grunnlovs rang.

**Sentrale bestemmelser i Grunnloven kapittel E:**
- **§ 92** – Statens myndigheter skal respektere og sikre menneskerettighetene
- **§ 95** – Retten til rettferdig rettergang av en uavhengig og upartisk domstol
- **§ 96** – Legalitetsprinsippet: ingen kan dømmes uten etter lov
- **§ 97** – Forbud mot tilbakevirkende lover
- **§ 98** – Likhet for loven og forbud mot usaklig forskjellsbehandling
- **§ 100** – Ytringsfrihet
- **§ 102** – Retten til privatliv
- **§ 104** – Barns rettigheter (barnets beste, rett til å bli hørt)
- **§ 108** – Samenes rettigheter
- **§ 110** – Retten til arbeid og trygge arbeidsforhold`
    },
    {
      id: 'rett1-1-7-def-2',
      type: 'definition',
      title: 'Diskriminering',
      content: `**Diskriminering** betyr usaklig forskjellsbehandling. Norsk rett skiller mellom:

**Direkte diskriminering:** En person behandles dårligere enn andre i en tilsvarende situasjon, på grunn av et beskyttet kjennetegn (for eksempel kjønn, etnisitet, religion, funksjonsnedsettelse, seksuell orientering).

**Indirekte diskriminering:** En tilsynelatende nøytral regel eller praksis som i praksis rammer en bestemt gruppe uforholdsmessig hardt.

**Rettslig vern:** Diskrimineringsvernet er nedfelt i:
- **Grunnloven § 98** – likhet for loven og forbud mot usaklig forskjellsbehandling
- **Likestillings- og diskrimineringsloven** – forbyr diskriminering på grunnlag av kjønn, graviditet, etnisitet, religion, funksjonsnedsettelse, seksuell orientering, kjønnsidentitet og alder
- **EMK art. 14** – forbud mot diskriminering i utøvelsen av konvensjonens rettigheter
- **Arbeidsmiljøloven kap. 13** – forbud mot diskriminering i arbeidsforhold

**Diskrimineringsnemnda** er et uavhengig forvaltningsorgan som behandler klager om diskriminering. Nemnda kan fatte bindende vedtak og ilegge oppreisningserstatning.`
    },
    {
      id: 'rett1-1-7-example-3',
      type: 'example',
      title: 'Diskriminering i arbeidslivet',
      problem: 'Fatima søker jobb som resepsjonist på et hotell. Hun er best kvalifisert av alle søkerne, men får avslag. Hotellet innrømmer i etterkant at de ikke ønsket en ansatt med hijab i resepsjonen. Foreligger det diskriminering?',
      solution: `**Analyse:**

**Rettsgrunnlag:** Likestillings- og diskrimineringsloven § 6 forbyr diskriminering på grunn av religion. Arbeidsmiljøloven § 13-1 forbyr diskriminering ved ansettelse.

**Vurdering:**
Fatima var best kvalifisert, men fikk avslag fordi hun bruker hijab. Hijab er et religiøst plagg. Hotellets begrunnelse er direkte knyttet til Fatimas religion.

Dette er **direkte diskriminering** – Fatima behandles dårligere enn andre søkere i en tilsvarende situasjon, utelukkende på grunn av et beskyttet kjennetegn (religion).

**Unntak?** Forskjellsbehandling er bare lovlig dersom den har et «saklig formål», er «nødvendig» og ikke er «uforholdsmessig inngripende» (likestillings- og diskrimineringsloven § 9). Et ønske om ikke å ha ansatte med hijab i resepsjonen er ikke et saklig formål.

**Konklusjon:** Hotellet har brutt forbudet mot diskriminering. Fatima kan klage til Diskrimineringsnemnda og kreve erstatning og oppreisning.`
    },
    {
      id: 'rett1-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom direkte og indirekte diskriminering. Gi ett eksempel på hver.',
        hints: ['Direkte: personen behandles ulikt på grunn av et kjennetegn. Indirekte: en nøytral regel rammer en gruppe uforholdsmessig.'],
        solution: `**Direkte diskriminering** er når en person behandles dårligere enn andre i en tilsvarende situasjon, på grunn av et beskyttet kjennetegn.

**Eksempel:** En utleier nekter å leie ut til en person fordi vedkommende har en annen etnisk bakgrunn. Her er forskjellsbehandlingen direkte knyttet til etnisitet.

**Indirekte diskriminering** er når en tilsynelatende nøytral regel eller praksis i praksis stiller en bestemt gruppe dårligere enn andre.

**Eksempel:** En arbeidsgiver krever at alle ansatte må jobbe på lørdager. Regelen er nøytral – den gjelder alle likt. Men i praksis rammer den jødiske og adventistarbeidere uforholdsmessig hardt, fordi lørdag er sabbat i disse religionene. Dersom kravet ikke er saklig begrunnet, kan det utgjøre indirekte diskriminering.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'rett1-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Menneskerettigheter** er universelle rettigheter som tilkommer alle mennesker, beskyttet på internasjonalt, regionalt og nasjonalt nivå.
- **EMK** er gjort til norsk lov og har forrang foran annen lovgivning. Borgere kan klage til EMD i Strasbourg.
- **FN-konvensjonene** (SP, ØSK, barnekonvensjonen) er inkorporert i norsk rett gjennom menneskerettsloven.
- **Barnekonvensjonen** gir barn egne rettigheter, der prinsippet om **barnets beste** og **retten til å bli hørt** er sentrale.
- **Grunnloven kapittel E** (2014) gir menneskerettighetene grunnlovs rang i norsk rett.
- **Diskriminering** (direkte og indirekte) er forbudt etter likestillings- og diskrimineringsloven, EMK art. 14 og Grunnloven § 98.`
    },

    // --- Samleoppgaver ---
    {
      id: 'rett1-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en oversikt over de tre nivåene menneskerettighetene er beskyttet på (internasjonalt, regionalt, nasjonalt). Skriv minst ett eksempel på en rettighet og en tilhørende bestemmelse for hvert nivå.',
        hints: ['Tenk på FN, Europarådet/EMK og norsk Grunnlov/lov.'],
        solution: `**Internasjonalt nivå (FN):**
- FNs konvensjon om sivile og politiske rettigheter (SP): Retten til ytringsfrihet (art. 19)
- FNs barnekonvensjon: Barnets beste (art. 3)

**Regionalt nivå (Europarådet):**
- Den europeiske menneskerettskonvensjonen (EMK): Retten til rettferdig rettergang (art. 6)
- Håndheves av Den europeiske menneskerettsdomstolen (EMD) i Strasbourg

**Nasjonalt nivå (Norge):**
- Grunnloven § 100: Ytringsfrihet
- Grunnloven § 104: Barns rettigheter
- Menneskerettsloven: Inkorporerer EMK, SP, ØSK og barnekonvensjonen i norsk rett med forrang

Alle tre nivåene virker sammen for å sikre at menneskerettighetene ivaretas. Det nasjonale nivået er viktigst i praksis, fordi det er norske domstoler og myndigheter som håndhever rettighetene i det daglige.`
      }
    },
    {
      id: 'rett1-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rett1-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune innfører forbud mot tigging i sentrum. En gruppe romfolk som livnærer seg ved tigging, mener forbudet er diskriminerende og i strid med menneskerettighetene. Drøft om forbudet kan være i strid med EMK art. 8 (retten til privatliv), EMK art. 14 (forbud mot diskriminering) og/eller Grunnloven § 98 (likhet for loven). Vurder også om det kan finnes saklige grunner for forbudet.',
        hints: ['Tenk på at et tilsynelatende nøytralt forbud kan ramme en bestemt gruppe uforholdsmessig (indirekte diskriminering).', 'Vurder om kommunen har et legitimt formål, og om forbudet er forholdsmessig.'],
        solution: `**Drøfting:**

**EMK art. 8 – Retten til privatliv:**
Tigging kan ses som en del av privatlivets utøvelse – det handler om hvordan en person skaffer seg livsopphold. Et forbud griper inn i denne retten. Inngrepet må ha lovhjemmel, forfølge et legitimt formål og være nødvendig i et demokratisk samfunn.

**EMK art. 14 / Grunnloven § 98 – Diskriminering:**
Tiggingsforbudet er tilsynelatende nøytralt – det gjelder alle. Men i praksis rammer det romfolk uforholdsmessig, fordi tigging er en viktig inntektskilde for denne gruppen. Dette kan utgjøre **indirekte diskriminering**.

**Saklige grunner for forbudet:**
Kommunen kan anføre:
- Hensynet til offentlig orden og trygghet
- Forebygging av organisert kriminalitet knyttet til tigging
- Ønsket om et trivelig sentrum for alle

**Forholdsmessighetsvurdering:**
Er et totalforbud nødvendig og forholdsmessig? Eller finnes det mindre inngripende tiltak (for eksempel forbud mot aggressiv tigging, men ikke fredelig tigging)?

**Konklusjon:** Et totalforbud mot tigging er problematisk etter EMK og Grunnloven. EMD har i flere saker (bl.a. Lăcătuș mot Sveits, 2021) uttalt at straff for fredelig tigging kan krenke EMK art. 8. Forbudet kan også utgjøre indirekte diskriminering av romfolk. Kommunen bør vurdere mindre inngripende tiltak.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samleeksport – kapittel 1.1–1.7
// ============================================================================

export const RETTSLAERE_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RETTSLAERE_1_1_1,
  CHAPTER_RETTSLAERE_1_1_2,
  CHAPTER_RETTSLAERE_1_1_3,
  CHAPTER_RETTSLAERE_1_1_4,
  CHAPTER_RETTSLAERE_1_1_5,
  CHAPTER_RETTSLAERE_1_1_6,
  CHAPTER_RETTSLAERE_1_1_7,
];

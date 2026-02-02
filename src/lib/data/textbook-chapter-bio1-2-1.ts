/**
 * Biologi 1 - Kapittel 2.1: ATP og enzymers rolle
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_2_1: TextbookChapter = {
  id: 'bio1-2-1',
  courseId: 'biologi-1',
  chapterNumber: '2.1',
  title: 'ATP og enzymers rolle',
  description:
    'Cellens energivaluta ATP, enzymers struktur og funksjon, og hvordan enzymer katalyserer biokjemiske reaksjoner.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare hvordan ATP fungerer som universell energivaluta i cellen',
    'beskrive strukturen til ATP og sammenhengen mellom ATP og ADP',
    'forklare hva enzymer er og hvordan de katalyserer biokjemiske reaksjoner',
    'gjøre rede for faktorer som påvirker enzymaktivitet',
    'beskrive ulike former for enzymregulering, inkludert inhibering og allosterisk regulering',
    'forklare rollen til koenzymer og energibærere som NAD+ og FAD',
  ],
  content: [
    // ====================================================================
    // INTRODUKSJON
    // ====================================================================
    {
      id: 'bio1-2-1-intro',
      type: 'text',
      title: 'Hvorfor trenger celler energi?',
      content: `# Energi i levende systemer

Alle levende celler er i konstant aktivitet. Selv når vi sover, arbeider cellene våre uopphørlig: de bygger nye proteiner, transporterer stoffer over membraner, sender nervesignaler og opprettholder sin indre orden. Alt dette krever **energi**.

Men energi i biologiske systemer er ikke som elektrisitet i en ledning eller bensin i en motor. Cellene har utviklet et elegant og universelt system for å fange, lagre og bruke energi -- et system som er felles for alle levende organismer, fra de enkleste bakteriene til de mest komplekse dyrene.

I dette kapittelet skal vi se på to sentrale temaer i cellebiologien:

1. **ATP** -- molekylet som fungerer som cellens "energivaluta"
2. **Enzymer** -- proteinene som styrer og muliggjør alle kjemiske reaksjoner i cellen

Uten ATP ville cellen mangle drivstoff. Uten enzymer ville de kjemiske reaksjonene gå så sakte at livet slik vi kjenner det ville være umulig. Sammen utgjør ATP og enzymer grunnlaget for alt stoffskifte.`,
    },

    // ====================================================================
    // ENERGI I BIOLOGISKE SYSTEMER
    // ====================================================================
    {
      id: 'bio1-2-1-energi',
      type: 'text',
      title: 'Energi i biologiske systemer',
      content: `# Fri energi og kjemiske reaksjoner

I kjemien og biologien bruker vi begrepet **fri energi** (Gibbs fri energi, $G$) for å beskrive hvor mye energi som er tilgjengelig til å utføre arbeid i en kjemisk reaksjon. Endringen i fri energi ($\\Delta G$) forteller oss om en reaksjon frigjør eller krever energi.

## Eksergone reaksjoner ($\\Delta G < 0$)

**Eksergone reaksjoner** frigjør energi. Produktene har lavere fri energi enn reaktantene, og reaksjonen skjer spontant (selv om den kan gå sakte uten katalysator).

- Energi frigjøres til omgivelsene
- Eksempel: Nedbrytning av glukose (celleånding)
- Eksempel: Hydrolyse av ATP til ADP

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi}$$

## Endergone reaksjoner ($\\Delta G > 0$)

**Endergone reaksjoner** krever tilførsel av energi. Produktene har høyere fri energi enn reaktantene, og reaksjonen skjer ikke spontant.

- Energi må tilføres fra omgivelsene
- Eksempel: Fotosyntese (bygger opp glukose fra CO$_2$ og H$_2$O)
- Eksempel: Proteinsyntese (bygger opp proteiner fra aminosyrer)

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

## Kobling mellom reaksjoner

Cellen løser utfordringen med endergone reaksjoner ved å **koble** dem til eksergone reaksjoner. Den mest brukte eksergone reaksjonen er hydrolyse av ATP. Energien som frigjøres fra ATP-spalting, driver endergone reaksjoner fremover. Denne koplingen er helt sentral i alt cellulært stoffskifte.`,
    },
    {
      id: 'bio1-2-1-note-termodyn',
      type: 'note',
      title: 'Termodynamikkens lover i biologien',
      content:
        'Biologiske systemer følger termodynamikkens lover. **Første lov:** Energi kan verken skapes eller ødelegges, bare omdannes. **Andre lov:** Ved alle energiomvandlinger øker entropien (uordenen) i universet totalt sett. Celler opprettholder sin indre orden ved å øke uordenen i omgivelsene -- blant annet ved å avgi varme.',
    },

    // ====================================================================
    // ATP -- STRUKTUR OG FUNKSJON
    // ====================================================================
    {
      id: 'bio1-2-1-atp-struktur',
      type: 'text',
      title: 'ATP: struktur og funksjon',
      content: `# ATP -- cellens energivaluta

**Adenosintrifosfat (ATP)** er det viktigste energimolekylet i alle levende celler. Det fungerer som en universell "energivaluta" som kan brukes til å drive nesten alle energikrevende prosesser.

## Strukturen til ATP

ATP er bygd opp av tre deler:

**1. Adenin** (en nitrogenbase)
- Samme nitrogenbase som finnes i DNA og RNA
- En purinbase med dobbel ringstruktur

**2. Ribose** (et sukkermolekyl)
- Et femkarbonsukkermolekyl
- Adenin + ribose = **adenosin**

**3. Tre fosfatgrupper**
- Tre fosfatgrupper ($\\text{PO}_4^{3-}$) er bundet i rekke til ribose
- Fosfatgruppene kalles $\\alpha$, $\\beta$ og $\\gamma$ (alfa, beta, gamma) fra innerst til ytterst
- Bindingene mellom fosfatgruppene kalles **fosfoanhydridbindinger**

## Fosfoanhydridbindinger -- energirike bindinger

Bindingene mellom de tre fosfatgruppene er **energirike bindinger**. Grunnen er at fosfatgruppene er negativt ladede og frastøter hverandre. Denne elektrostatiske frastøtningen gjør at bindingene inneholder mye potensiell energi.

Når den ytterste fosfatgruppen ($\\gamma$) spaltes av ved **hydrolyse** (reaksjon med vann), frigjøres energi:

$$\\text{ATP} + \\text{H}_2\\text{O} \\rightarrow \\text{ADP} + \\text{P}_i + \\text{energi}$$

- **ADP** = adenosindifosfat (med to fosfatgrupper)
- **P$_i$** = uorganisk fosfat (fri fosfatgruppe)
- Energien som frigjøres er ca. **30,5 kJ/mol** under standardbetingelser

I cellens reelle miljø (med faktiske konsentrasjoner, temperatur og pH) frigjøres det gjerne **50--55 kJ/mol**, altså enda mer.`,
    },
    {
      id: 'bio1-2-1-def-atp',
      type: 'definition',
      title: 'ATP (adenosintrifosfat)',
      content:
        'Et nukleotid bestående av adenin, ribose og tre fosfatgrupper. ATP er cellens viktigste energibærer. Når den ytterste fosfatbindingen brytes ved hydrolyse, frigjøres ca. 30,5 kJ/mol energi som kan brukes til å drive cellulære prosesser.',
    },
    {
      id: 'bio1-2-1-atp-syklus',
      type: 'text',
      title: 'ATP/ADP-syklusen',
      content: `# ATP/ADP-syklusen

ATP brukes og regenereres kontinuerlig i cellen. Denne syklusen er blant de raskeste i biologien:

## Hvordan ATP brukes

Når cellen trenger energi, bryter den fosfoanhydridbindingen i ATP:

$$\\text{ATP} \\xrightarrow{\\text{hydrolyse}} \\text{ADP} + \\text{P}_i + \\text{energi (30,5 kJ/mol)}$$

Energien som frigjøres kobles direkte til endergone reaksjoner, for eksempel:
- **Muskelkontraksjon:** Myosinmotorer bruker ATP til å trekke aktinfilamenter
- **Aktiv transport:** Na$^+$/K$^+$-pumpen bruker ATP til å pumpe ioner mot konsentrasjonsgradienten
- **Proteinsyntese:** Ribosomer bruker ATP (via GTP) til å bygge proteiner
- **Signaloverføring:** ATP brukes i intracellulær signalering

## Hvordan ATP regenereres

ADP og P$_i$ settes sammen igjen til ATP ved hjelp av energi fra næringsstoffer:

$$\\text{ADP} + \\text{P}_i + \\text{energi} \\xrightarrow{\\text{fosforylering}} \\text{ATP}$$

Denne prosessen kalles **fosforylering** og skjer hovedsakelig på tre måter:

1. **Substratfosforylering** -- direkte overføring av fosfat fra et organisk substrat til ADP (skjer i glykolysen)
2. **Oksidativ fosforylering** -- energien fra elektrontransportkjeden i mitokondriene driver ATP-syntase (den viktigste kilden til ATP)
3. **Fotofosforylering** -- lysenergi driver ATP-syntese i kloroplaster (kun i fotosyntese)

## ATP-omsetning i kroppen

En gjennomsnittlig menneskekropp inneholder til enhver tid bare ca. **50 gram ATP**. Likevel bruker vi ca. **40--70 kg ATP per døgn**! Dette betyr at hvert ATP-molekyl resirkuleres ca. **500--750 ganger om dagen**. Syklusen mellom ATP og ADP er altså ekstremt rask.`,
    },
    {
      id: 'bio1-2-1-warning-atp',
      type: 'warning',
      title: 'Vanlig misforståelse om ATP',
      content:
        'ATP "inneholder" ikke energi på samme måte som et batteri. Det er mer presist å si at energi frigjøres når fosfoanhydridbindingen brytes og nye, mer stabile bindinger dannes i produktene (ADP + P$_i$ + vann). Det er den totale energiendringen i reaksjonen som gjør energi tilgjengelig for cellen -- ikke energi lagret "i" en enkelt binding.',
    },
    {
      id: 'bio1-2-1-atp-kobling',
      type: 'text',
      title: 'Energikobling med ATP',
      content: `# Energikobling -- hvordan ATP driver endergone reaksjoner

Mange reaksjoner i cellen er endergone, det vil si at de krever energi. Alene ville de aldri skjedd spontant. Cellen løser dette ved å koble den endergone reaksjonen til ATP-hydrolyse.

## Prinsippet for energikobling

Tenk deg en endergon reaksjon med $\\Delta G = +15$ kJ/mol:

$$A \\rightarrow B \\qquad \\Delta G = +15 \\text{ kJ/mol (skjer ikke spontant)}$$

ATP-hydrolyse frigjør energi:

$$\\text{ATP} \\rightarrow \\text{ADP} + \\text{P}_i \\qquad \\Delta G = -30{,}5 \\text{ kJ/mol}$$

Når disse kobles, blir den totale $\\Delta G$ negativ:

$$A + \\text{ATP} \\rightarrow B + \\text{ADP} + \\text{P}_i \\qquad \\Delta G = -15{,}5 \\text{ kJ/mol}$$

Den koblede reaksjonen er eksergon og skjer spontant!

## Fosforylering av substrater

I praksis skjer koblingen ofte ved at en fosfatgruppe fra ATP overføres midlertidig til et av molekylene i reaksjonen. Det fosforylerte mellomproduktet har høyere energi og reagerer lettere videre. Enzymer styrer hele prosessen slik at energien utnyttes effektivt og ikke bare avgis som varme.

## Eksempler på ATP-koblede prosesser

| Prosess | Hva ATP brukes til |
|---|---|
| Muskelkontraksjon | Myosin endrer form og trekker aktinfilamenter |
| Aktiv transport | Na$^+$/K$^+$-pumpen pumper ioner mot gradient |
| Biosyntese | Aminosyrer kobles til proteiner |
| Celledeling | Spindelapparat og DNA-replikasjon |
| Bioluminescens | Luciferin oksideres og sender ut lys |`,
    },

    // ====================================================================
    // ENZYMER SOM BIOLOGISKE KATALYSATORER
    // ====================================================================
    {
      id: 'bio1-2-1-enzymer-intro',
      type: 'text',
      title: 'Enzymer som biologiske katalysatorer',
      content: `# Enzymer -- biologiske katalysatorer

De fleste kjemiske reaksjoner i cellen ville gått altfor sakte uten hjelp. Selv om en reaksjon er eksergon ($\\Delta G < 0$), betyr ikke det at den skjer raskt. Reaktantmolekylene må først overvinne en energibarriere -- **aktiveringsenergien** ($E_a$) -- for at reaksjonen skal starte.

## Hva er en katalysator?

En **katalysator** er et stoff som øker hastigheten på en kjemisk reaksjon uten selv å bli brukt opp. Katalysatoren senker aktiveringsenergien, slik at flere molekyler har nok energi til å reagere.

I biologien er de viktigste katalysatorene **enzymer**: spesialiserte proteiner som katalyserer biokjemiske reaksjoner med enorm hastighet og presisjon.

## Hvorfor trenger celler enzymer?

Uten enzymer ville de fleste biokjemiske reaksjoner ta timer, dager eller til og med år. Med enzymer kan de skje på brøkdelen av et sekund. Enzymet **karbanhydrase** er et godt eksempel: det katalyserer omdanning av CO$_2$ og vann til karbonsyre med en hastighet på ca. **1 million reaksjoner per sekund**!

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{karbanhydrase}} \\text{H}_2\\text{CO}_3$$

Uten enzymet ville denne reaksjonen tatt ca. 100 sekunder for hvert molekyl. Enzymet øker hastigheten med en faktor på $10^7$ (ti millioner ganger).

## Enzymers egenskaper

Enzymer har noen viktige egenskaper:

1. **De er spesifikke** -- hvert enzym katalyserer bare én type reaksjon (eller svært få beslektede reaksjoner)
2. **De brukes ikke opp** -- enzymet er uendret etter reaksjonen og kan gjenbrukes
3. **De senker aktiveringsenergien** -- men endrer ikke den totale energiforskjellen ($\\Delta G$) i reaksjonen
4. **De er regulerbare** -- cellen kan skru enzymaktiviteten opp eller ned etter behov
5. **De er proteiner** -- med noen få unntak (ribozymer er RNA-enzymer)`,
    },
    {
      id: 'bio1-2-1-def-enzym',
      type: 'definition',
      title: 'Enzym',
      content:
        'Et protein som fungerer som biologisk katalysator. Enzymer senker aktiveringsenergien for biokjemiske reaksjoner og øker reaksjonshastigheten dramatisk, uten selv å bli forbrukt. De fleste enzymer har navn som ender på "-ase" (f.eks. lipase, amylase, laktase).',
    },
    {
      id: 'bio1-2-1-def-aktiveringsenergi',
      type: 'definition',
      title: 'Aktiveringsenergi ($E_a$)',
      content:
        'Den minste energimengden som reaktantmolekylene må ha for at en kjemisk reaksjon skal starte. Enzymer virker ved å senke aktiveringsenergien, slik at reaksjonen skjer raskere. Selv eksergone reaksjoner trenger aktiveringsenergi for å komme i gang.',
    },
    {
      id: 'bio1-2-1-enzym-struktur',
      type: 'text',
      title: 'Enzymers struktur',
      content: `# Enzymers struktur

Enzymer er **globulære proteiner** -- de er foldet sammen til en kompakt, kuleaktig tredimensjonal struktur. Denne strukturen er helt avgjørende for enzymets funksjon.

## Det aktive setet

Hvert enzym har et **aktivt sete** -- en spesifikk lomme eller fordypning på enzymoverflaten der den kjemiske reaksjonen finner sted.

Det aktive setet har noen viktige egenskaper:

- **Tredimensjonal form:** Det aktive setet har en svært spesifikk romlig struktur
- **Kjemisk miljø:** Aminosyrene i det aktive setet skaper et kjemisk miljø (ladning, polaritet, hydrofobisitet) som er tilpasset substratet
- **Lite areal:** Det aktive setet utgjør bare en liten del av enzymets totale overflate
- **Fleksibilitet:** Det aktive setet kan endre form noe for å tilpasse seg substratet

## Substrat og substratspesifisitet

Molekylet (eller molekylene) som enzymet virker på, kalles **substratet**. Produktet av den enzymkatalyserte reaksjonen kalles **produktet**.

$$\\text{Substrat} \\xrightarrow{\\text{enzym}} \\text{Produkt}$$

Enzymer er svært **substratspesifikke** -- de binder bare substrater med riktig form og kjemiske egenskaper. Denne spesifisiteten skyldes den nøyaktige tredimensjonale strukturen til det aktive setet.

**Eksempler:**
- **Laktase** spalter bare laktose (melkesukker), ikke andre sukkertyper
- **Amylase** spalter bare stivelse, ikke cellulose (selv om begge er polysakkarider)
- **Lipase** spalter bare fett (lipider), ikke proteiner eller karbohydrater`,
    },
    {
      id: 'bio1-2-1-def-aktivt-sete',
      type: 'definition',
      title: 'Aktivt sete',
      content:
        'Det spesifikke området på et enzym der substratet binder seg og den katalyserte reaksjonen finner sted. Det aktive setet har en tredimensjonal form som er komplementær til substratets form, noe som gir enzymet dets spesifisitet.',
    },
    {
      id: 'bio1-2-1-def-substrat',
      type: 'definition',
      title: 'Substrat',
      content:
        'Molekylet som et enzym virker på (reagerer med). Substratet binder seg til enzymets aktive sete og omdannes til produkt(er). Et enzym er vanligvis spesifikt for ett bestemt substrat eller en gruppe nært beslektede substrater.',
    },

    // ====================================================================
    // ENZYMMEKANISMER
    // ====================================================================
    {
      id: 'bio1-2-1-mekanismer',
      type: 'text',
      title: 'Enzymmekanismer',
      content: `# Hvordan enzymer virker -- nøkkel-lås og indusert tilpasning

For å forstå hvordan enzymer katalyserer reaksjoner, bruker vi to modeller som beskriver samspillet mellom enzym og substrat.

## Nøkkel-lås-modellen (Fischer, 1894)

Den tyske kjemikeren Emil Fischer foreslo i 1894 at enzymet og substratet passer sammen som en **nøkkel i en lås**:

- Enzymets aktive sete har en fast, rigid form
- Substratet (nøkkelen) har en komplementær form
- Bare substrater med riktig form kan binde seg til det aktive setet
- Andre molekyler passer ikke og kan ikke binde seg

Denne modellen forklarer godt **substratspesifisitet**, men den er en forenkling. Vi vet nå at enzymer ikke er helt rigide.

## Indusert tilpasning-modellen (Koshland, 1958)

Daniel Koshland foreslo en mer presis modell kalt **indusert tilpasning** (eng. *induced fit*):

- Enzymets aktive sete er **fleksibelt**, ikke rigid
- Når substratet nærmer seg, **endrer det aktive setet form** for å omfavne substratet tettere
- Denne formendringen skaper optimale betingelser for reaksjonen
- Enzymet "klemmer" seg rundt substratet, noe som stabiliserer overgangstilstanden
- Etter at produktet er dannet, slippes det ut, og enzymet vender tilbake til sin opprinnelige form

Indusert tilpasning-modellen er den mest aksepterte modellen i dag fordi den forklarer flere observasjoner enn nøkkel-lås-modellen, blant annet at noen enzymer kan virke på flere beslektede substrater.

## Enzym-substrat-komplekset

Uansett modell er prinsippet det samme:

$$\\text{E} + \\text{S} \\rightleftharpoons \\text{ES} \\rightarrow \\text{E} + \\text{P}$$

- **E** = enzym
- **S** = substrat
- **ES** = enzym-substrat-kompleks
- **P** = produkt

Trinnene er:

1. **Binding:** Substratet binder seg til det aktive setet og danner et enzym-substrat-kompleks (ES)
2. **Katalyse:** Enzymets aktive sete senker aktiveringsenergien -- substratet omdannes til produkt
3. **Frigjøring:** Produktet løsner fra enzymet, som er klart for et nytt substratmolekyl

Enzymet kan senke aktiveringsenergien på flere måter:
- Bringe substrater i riktig orientering
- Strekke eller bøye bindinger i substratet (destabilisere substratet)
- Skape et kjemisk gunstig mikromiljø (f.eks. surt eller basisk)
- Midlertidig danne kovalente bindinger med substratet`,
    },

    // ====================================================================
    // FAKTORER SOM PÅVIRKER ENZYMAKTIVITET
    // ====================================================================
    {
      id: 'bio1-2-1-faktorer',
      type: 'text',
      title: 'Faktorer som påvirker enzymaktivitet',
      content: `# Faktorer som påvirker enzymaktivitet

Enzymaktiviteten -- altså hvor raskt enzymet katalyserer en reaksjon -- påvirkes av flere miljøfaktorer. De viktigste er temperatur, pH, substratkonsentrasjon og enzymkonsentrasjon.

## 1. Temperatur

Enzymaktiviteten øker generelt med temperaturen, opp til et **optimum**:

- **Lav temperatur:** Molekylene beveger seg sakte, færre kollisjoner mellom enzym og substrat. Lav reaksjonshastighet.
- **Optimal temperatur:** Reaksjonshastigheten er på sitt høyeste. For de fleste menneskelige enzymer er optimum ca. **37 °C** (kroppstemperatur).
- **Høy temperatur:** Proteinstrukturen begynner å brytes ned. Enzymets tredimensjonale form forstyrres, og det aktive setet mister sin form. Dette kalles **denaturering**.

**Denaturering** er vanligvis irreversibel -- enzymet kan ikke "folde seg tilbake" og er permanent ødelagt.

Noen organismer har enzymer med svært høye temperaturoptima:
- **Termofile bakterier** i varme kilder har enzymer som tåler 80--100 °C
- **Taq-polymerase** fra bakterien *Thermus aquaticus* brukes i PCR-teknikk fordi den tåler gjentatt oppvarming til 95 °C

## 2. pH

Hvert enzym har en **optimal pH** der aktiviteten er høyest. Avvik fra optimal pH endrer ladningen på aminosyrene i det aktive setet og kan forstyrre bindingen av substratet.

**Eksempler:**
- **Pepsin** (mageenzym): Optimal pH ca. **2** (svært surt) -- tilpasset det sure miljøet i magen
- **Trypsin** (tarmenzym): Optimal pH ca. **8** (svakt basisk) -- tilpasset tolvfingertarmen
- **Amylase** (spyttenzym): Optimal pH ca. **7** (nøytralt) -- tilpasset munnen

Ekstrem pH (svært surt eller svært basisk) kan denaturere enzymet permanent.

## 3. Substratkonsentrasjon

Når enzymkonsentrasjonen holdes konstant:

- **Lav substratkonsentrasjon:** Reaksjonshastigheten øker tilnærmet lineært med substratkonsentrasjonen. Mange aktive seter er ledige.
- **Høy substratkonsentrasjon:** Reaksjonshastigheten flater ut og nærmer seg en maksimumsverdi ($V_{\\text{max}}$). Alle aktive seter er opptatt -- enzymet er **mettet**.

Denne mettningskinetikken ble matematisk beskrevet av Michaelis og Menten:
- **$K_m$ (Michaelis-konstanten):** Substratkonsentrasjonen der reaksjonshastigheten er halvparten av $V_{\\text{max}}$. Lav $K_m$ betyr at enzymet binder substratet effektivt.

## 4. Enzymkonsentrasjon

Når substratkonsentrasjonen holdes konstant (og er i overskudd):

- Reaksjonshastigheten øker lineært med enzymkonsentrasjonen
- Flere enzymmolekyler betyr flere aktive seter som kan katalysere reaksjonen samtidig
- Cellen regulerer enzymkonsentrasjonen ved å kontrollere genuttrykket (produksjon av enzymet)`,
    },
    {
      id: 'bio1-2-1-def-denaturering',
      type: 'definition',
      title: 'Denaturering',
      content:
        'Tap av et proteins tredimensjonale struktur, vanligvis forårsaket av ekstrem temperatur, pH eller kjemiske stoffer. Når et enzym denatureres, mister det aktive setet sin form, og enzymet kan ikke lenger binde substratet. Denaturering er som regel irreversibel.',
    },

    // ====================================================================
    // ENZYMREGULERING
    // ====================================================================
    {
      id: 'bio1-2-1-regulering',
      type: 'text',
      title: 'Enzymregulering',
      content: `# Enzymregulering

Cellen må kunne **regulere** enzymaktiviteten for å tilpasse stoffskiftet til skiftende behov. En celle trenger ikke alltid like mye av alle produkter, og det ville være sløsing å la alle reaksjoner gå med full hastighet hele tiden. Det finnes flere måter å regulere enzymer på.

## Kompetitiv (konkurransehemming) inhibering

Ved **kompetitiv inhibering** konkurrerer et hemmemolekyl (inhibitor) med substratet om å binde seg til enzymets **aktive sete**:

- Inhibitoren har en form som likner substratet
- Når inhibitoren binder seg til det aktive setet, blokkerer den substratet
- Hemmingen kan oppheves ved å øke substratkonsentrasjonen (substratet "vinner" konkurransen)

**Eksempel:** Medisinen **metotreksat** hemmer enzymet dihydrofolatreduktase kompetitivt. Dette brukes i kreftbehandling fordi enzymet er nødvendig for celledeling.

## Ikke-kompetitiv (allosterisk) inhibering

Ved **ikke-kompetitiv inhibering** binder inhibitoren seg til et annet sted på enzymet enn det aktive setet -- et **allosterisk sete**:

- Bindingen endrer enzymets tredimensjonale form
- Det aktive setet forandres slik at substratet ikke lenger kan binde seg effektivt
- Hemmingen kan **ikke** oppheves ved å øke substratkonsentrasjonen, fordi substratet og inhibitoren ikke konkurrerer om samme plass

**Eksempel:** Tungmetaller som bly og kvikksølv kan binde seg til allosteriske seter på enzymer og hemme dem. Dette er en del av grunnen til at tungmetallforgiftning er farlig.

## Tilbakekoblingshemming (feedback-inhibering)

I metabolske veier der flere enzymer samarbeider i en rekke trinn, bruker cellen **tilbakekoblingshemming**:

$$A \\xrightarrow{E_1} B \\xrightarrow{E_2} C \\xrightarrow{E_3} D \\xrightarrow{E_4} \\text{Produkt}$$

- Sluttproduktet hemmer det første enzymet ($E_1$) i reaksjonsveien
- Når det er nok av sluttproduktet, stopper hele veien
- Når sluttproduktet brukes opp, starter veien igjen

Dette er et elegant selvregulerende system som hindrer overproduksjon.

**Eksempel:** I syntesen av aminosyren isoleucin hemmer isoleucin (sluttproduktet) det første enzymet i biosyntesekjeden (treonin-deaminase).`,
    },
    {
      id: 'bio1-2-1-def-allosterisk',
      type: 'definition',
      title: 'Allosterisk regulering',
      content:
        'Regulering av enzymaktivitet ved at et molekyl binder seg til et allosterisk sete (et annet sted enn det aktive setet). Bindingen endrer enzymets tredimensjonale form og dermed aktiviteten. Allosterisk regulering kan både hemme (inhibere) og aktivere enzymer.',
    },
    {
      id: 'bio1-2-1-koenzymer',
      type: 'text',
      title: 'Kofaktorer og koenzymer',
      content: `# Kofaktorer og koenzymer

Mange enzymer trenger hjelp fra andre molekyler for å fungere. Disse hjelpemolekylene kalles **kofaktorer**.

## Typer kofaktorer

**1. Uorganiske kofaktorer** -- metallioner som binder seg til enzymet:
- Sink ($\\text{Zn}^{2+}$) i karbanhydrase
- Jern ($\\text{Fe}^{2+}$) i katalase
- Magnesium ($\\text{Mg}^{2+}$) i mange ATP-avhengige enzymer

**2. Koenzymer** -- organiske molekyler som deltar i reaksjonen:
- Mange koenzymer er **vitaminer** eller avledet fra vitaminer
- Koenzymer bærer ofte kjemiske grupper, elektroner eller hydrogen mellom reaksjoner

## Viktige koenzymer i cellens stoffskifte

Noen koenzymer fungerer som **energibærere** -- de transporterer elektroner og hydrogen mellom ulike metabolske reaksjoner:

**NAD$^+$ / NADH** (nikotinamid-adenin-dinukleotid)
- Avledet fra vitamin B3 (niacin)
- NAD$^+$ er den oksiderte formen, NADH er den reduserte formen
- Tar opp $2e^-$ og $\\text{H}^+$: $\\text{NAD}^+ + 2e^- + \\text{H}^+ \\rightarrow \\text{NADH}$
- Sentral i celleånding (glykolyse, sitronsyresyklus)
- NADH leverer elektroner til elektrontransportkjeden, som bruker energien til å lage ATP

**FAD / FADH$_2$** (flavin-adenin-dinukleotid)
- Avledet fra vitamin B2 (riboflavin)
- Fungerer på lignende måte som NAD$^+$/NADH
- $\\text{FAD} + 2e^- + 2\\text{H}^+ \\rightarrow \\text{FADH}_2$
- Sentral i sitronsyresyklus og fettsyrenedbrytning

**NADP$^+$ / NADPH** (nikotinamid-adenin-dinukleotid-fosfat)
- Ligner NAD$^+$, men med en ekstra fosfatgruppe
- Brukes hovedsakelig i **anabolske** (oppbyggende) reaksjoner
- Sentral i fotosyntese og fettsyresyntese
- NADPH leverer elektroner til biosyntesereaksjoner`,
    },
    {
      id: 'bio1-2-1-def-koenzym',
      type: 'definition',
      title: 'Koenzym',
      content:
        'Et lite organisk molekyl som er nødvendig for at et enzym skal fungere. Koenzymer binder seg midlertidig til enzymet og deltar i reaksjonen, ofte ved å overføre kjemiske grupper, elektroner eller hydrogenatomer. Mange koenzymer er avledet fra vitaminer (f.eks. NAD$^+$ fra vitamin B3).',
    },
    {
      id: 'bio1-2-1-note-vitaminer',
      type: 'note',
      title: 'Vitaminer som koenzymer',
      content:
        'Mange vannløselige vitaminer (B-vitaminer og vitamin C) fungerer som koenzymer eller forløpere til koenzymer. Derfor fører vitaminmangel til enzymsvikt og sykdom. For eksempel kan mangel på vitamin B1 (tiamin) forårsake beriberi, fordi tiamin er nødvendig for et nøkkelenzym i karbohydratstoffskiftet.',
    },

    // ====================================================================
    // METABOLSKE VEIER
    // ====================================================================
    {
      id: 'bio1-2-1-metabolisme',
      type: 'text',
      title: 'Metabolske veier -- katabolisme og anabolisme',
      content: `# Metabolske veier

Cellens stoffskifte (metabolisme) er organisert i **metabolske veier** -- serier av enzymkatalyserte reaksjoner der produktet fra én reaksjon er substratet for den neste.

## Katabolisme -- nedbrytningsreaksjoner

**Katabolske reaksjoner** bryter ned store molekyler til mindre:
- Eksergone ($\\Delta G < 0$) -- frigjør energi
- Energien fanges opp i ATP, NADH og FADH$_2$
- Eksempler: Celleånding (glukose $\\rightarrow$ CO$_2$ + H$_2$O), fettsyrenedbrytning, proteinnedbrytning

## Anabolisme -- oppbyggingsreaksjoner

**Anabolske reaksjoner** bygger opp store molekyler fra mindre:
- Endergone ($\\Delta G > 0$) -- krever energi
- Bruker ATP og NADPH som energi- og elektronkilder
- Eksempler: Proteinsyntese, DNA-replikasjon, fettsyresyntese, fotosyntese (Calvin-syklus)

## Sammenhengen

Katabolisme og anabolisme er tett koblet:

- **Katabolisme** produserer ATP og reduserte koenzymer (NADH, FADH$_2$, NADPH)
- **Anabolisme** bruker ATP og NADPH til å bygge opp nye molekyler
- De to prosessene er i dynamisk likevekt, regulert av enzymaktivitet og cellens behov

Denne balansen mellom nedbrytning og oppbygging er helt grunnleggende for cellens overlevelse. ATP og energibærerne (NAD$^+$/NADH, FAD/FADH$_2$, NADP$^+$/NADPH) er "bindeleddene" som kobler katabolisme til anabolisme.`,
    },

    // ====================================================================
    // EKSEMPLER
    // ====================================================================
    {
      id: 'bio1-2-1-ex-atp-hydrolyse',
      type: 'example',
      title: 'Eksempel: Energi fra ATP-hydrolyse',
      problem:
        'Under standardbetingelser frigjør hydrolyse av ATP ca. 30,5 kJ/mol. En celle bruker ATP til å drive en endergon reaksjon som krever 18 kJ/mol. a) Er det nok energi fra ett mol ATP til å drive denne reaksjonen? b) Hva skjer med den resterende energien?',
      solution: `**a)** Ja, det er nok energi. ATP-hydrolyse frigjør 30,5 kJ/mol, og reaksjonen krever bare 18 kJ/mol.

Total energiendring for den koblede reaksjonen:
$$\\Delta G_{\\text{total}} = (-30{,}5) + (+18) = -12{,}5 \\text{ kJ/mol}$$

Siden $\\Delta G_{\\text{total}} < 0$, er den koblede reaksjonen eksergon og skjer spontant.

**b)** Den resterende energien (12,5 kJ/mol) frigjøres som **varme** til omgivelsene. Denne varmen bidrar blant annet til å opprettholde kroppstemperaturen hos varmblodige dyr.

I praksis er energikoblingen aldri 100 % effektiv. Noe energi vil alltid gå tapt som varme (i tråd med termodynamikkens andre lov).`,
    },
    {
      id: 'bio1-2-1-ex-inhibering',
      type: 'example',
      title: 'Eksempel: Kompetitiv vs. ikke-kompetitiv inhibering',
      problem:
        'Et enzym har substrat A og produserer produkt B. En forsker tester to ulike inhibitorer (X og Y). Med inhibitor X øker $V_{\\text{max}}$ ikke uansett hvor mye substrat som tilsettes. Med inhibitor Y kan $V_{\\text{max}}$ nås dersom substratkonsentrasjonen økes tilstrekkelig. Hvilken inhibitor er kompetitiv og hvilken er ikke-kompetitiv?',
      solution: `**Inhibitor Y er kompetitiv:**
- Ved kompetitiv inhibering konkurrerer inhibitoren med substratet om det aktive setet
- Dersom man øker substratkonsentrasjonen, kan substratet "utkonkurrere" inhibitoren
- $V_{\\text{max}}$ kan nås når [S] er tilstrekkelig høy
- Inhibitor Y oppfører seg slik, altså er Y kompetitiv

**Inhibitor X er ikke-kompetitiv (allosterisk):**
- Ved ikke-kompetitiv inhibering binder inhibitoren seg til et allosterisk sete
- Selv om substratkonsentrasjonen økes, forblir enzymet hemmet (det aktive setets form er endret)
- $V_{\\text{max}}$ kan aldri nås fullt ut
- Inhibitor X oppfører seg slik, altså er X ikke-kompetitiv

**Nøkkelpunkt:** Den avgjørende forskjellen er om økt substratkonsentrasjon kan overvinne hemmingen.`,
    },
    {
      id: 'bio1-2-1-ex-enzymer-hverdag',
      type: 'example',
      title: 'Eksempel: Enzymer i hverdagen',
      problem:
        'Gi eksempler på enzymer du møter i hverdagen, og forklar hva de gjør.',
      solution: `**1. Laktase** (i tynntarmen)
- Spalter laktose (melkesukker) i galaktose og glukose
- Mange mennesker mister laktaseproduksjonen med alderen, noe som gir laktoseintoleranse
- Laktasepiller inneholder dette enzymet og hjelper med å fordøye melkeprodukter

**2. Amylase** (i spytt og bukspytt)
- Spalter stivelse til maltose og glukose
- Du kan teste dette selv: Tygge en brødbit lenge, og den blir søt (stivelse omdannes til sukker)

**3. Pepsin og trypsin** (i mage og tarm)
- Spalter proteiner i maten til mindre peptider og aminosyrer
- Pepsin virker i magens sure miljø (pH 2), trypsin virker i tarmens basiske miljø (pH 8)

**4. Enzymer i vaskemidler**
- Protease spalter proteinflekker (blod, gress)
- Lipase spalter fettflekker
- Amylase spalter stivelseflekker
- Disse enzymene gjør at vaskemidler kan vaske effektivt ved lave temperaturer

**5. Enzymer i osteproduksjon**
- Rennet (chymosin) får melkeproteinet kasein til å koagulere
- Denne enzymatiske reaksjonen er grunnlaget for all osteproduksjon`,
    },

    // ====================================================================
    // OPPGAVER (inline i content)
    // ====================================================================
    {
      id: 'bio1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står forkortelsen ATP for?',
        options: [
          'Adenosintetrafosfat',
          'Adenosintrifosfat',
          'Adenosindifosfat',
          'Adeninfosfotriose',
        ],
        answer: 1,
        solution:
          'ATP står for **adenosintrifosfat**. Molekylet består av adenin (en nitrogenbase), ribose (et sukker) og tre fosfatgrupper. "Tri" betyr tre, som refererer til de tre fosfatgruppene.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om enzymer er FEIL?',
        options: [
          'Enzymer senker aktiveringsenergien for en reaksjon',
          'Enzymer er vanligvis proteiner',
          'Enzymer brukes opp i reaksjonen de katalyserer',
          'Enzymer er substratspesifikke',
        ],
        answer: 2,
        solution:
          'Det er feil at enzymer brukes opp. Enzymer er **katalysatorer** -- de fremskynder reaksjoner uten selv å bli forbrukt. Etter at reaksjonen er fullført, er enzymet uendret og klart til å katalysere en ny reaksjon. De tre andre påstandene er korrekte.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer når et enzym denatureres?',
        options: [
          'Enzymet deler seg i to like deler',
          'Enzymet mister sin tredimensjonale form og slutter å fungere',
          'Enzymet binder substratet sterkere enn normalt',
          'Enzymet skifter fra å være en katalysator til å bli en inhibitor',
        ],
        answer: 1,
        solution:
          'Ved denaturering mister enzymet sin tredimensjonale struktur. Det aktive setet endrer form, slik at substratet ikke lenger kan binde seg. Enzymet mister dermed sin katalytiske funksjon. Denaturering kan skyldes høy temperatur, ekstrem pH eller kjemiske stoffer, og er vanligvis irreversibel.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom kompetitiv og ikke-kompetitiv inhibering?',
        options: [
          'Kompetitiv inhibering er irreversibel, ikke-kompetitiv er reversibel',
          'Kompetitiv inhibitor binder det aktive setet, ikke-kompetitiv binder et allosterisk sete',
          'Kompetitiv inhibering øker reaksjonshastigheten, ikke-kompetitiv senker den',
          'Kompetitiv inhibering virker kun på enzymer, ikke-kompetitiv virker på alle proteiner',
        ],
        answer: 1,
        solution:
          'Ved **kompetitiv inhibering** konkurrerer inhibitoren med substratet om å binde seg til enzymets aktive sete. Inhibitoren har en form som likner substratet. Ved **ikke-kompetitiv inhibering** binder inhibitoren seg til et allosterisk sete (et annet sted på enzymet), noe som endrer enzymets form slik at det aktive setet ikke fungerer optimalt. Effekten av kompetitiv inhibering kan overvinnes ved å øke substratkonsentrasjonen, men dette virker ikke mot ikke-kompetitiv inhibering.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'NAD$^+$ er viktig i cellens stoffskifte. Hva er NAD$^+$s hovedfunksjon?',
        options: [
          'Det er et enzym som bryter ned glukose',
          'Det er en energibærer som transporterer elektroner mellom reaksjoner',
          'Det er et hormon som regulerer celledelingen',
          'Det er en strukturell del av cellemembranen',
        ],
        answer: 1,
        solution:
          'NAD$^+$ (nikotinamid-adenin-dinukleotid) er et **koenzym** som fungerer som energibærer. Det tar opp elektroner og hydrogenioner under katabolske reaksjoner og danner NADH. NADH leverer deretter elektronene til elektrontransportkjeden i mitokondriene, der energien brukes til å produsere ATP. NAD$^+$/NADH er et av de viktigste "bindeleddene" mellom katabolisme og ATP-produksjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv de tre delene som ATP er bygd opp av. Tegn gjerne en skisse av molekylet.',
        solution:
          'ATP (adenosintrifosfat) er bygd opp av tre hoveddeler:\n\n**1. Adenin** -- en nitrogenbase (purinbase) med dobbel ringstruktur. Denne er den samme nitrogenbasen som finnes i DNA og RNA.\n\n**2. Ribose** -- et femkarbonsukkermolekyl. Sammen med adenin utgjør dette nukleotidet **adenosin**.\n\n**3. Tre fosfatgrupper** (PO$_4^{3-}$) -- bundet i rekke til ribose. Fosfatgruppene kalles alfa ($\\alpha$), beta ($\\beta$) og gamma ($\\gamma$) fra innerst til ytterst. Bindingene mellom fosfatgruppene (fosfoanhydridbindinger) er energirike fordi de negativt ladede fosfatgruppene frastøter hverandre.',
        hints: [
          'Tenk på navn: adenosin-tri-fosfat',
          'Adenosin = adenin + ribose',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor enzymer er substratspesifikke. Beskriv både nøkkel-lås-modellen og indusert tilpasning-modellen, og forklar hvorfor indusert tilpasning regnes som den mest nøyaktige.',
        solution:
          'Enzymer er substratspesifikke fordi det aktive setets tredimensjonale form og kjemiske miljø er tilpasset ett bestemt substrat (eller en svært liten gruppe beslektede substrater).\n\n**Nøkkel-lås-modellen (Fischer, 1894):**\n- Enzymets aktive sete har en fast, rigid form som passer perfekt til substratet\n- Substratet er "nøkkelen" som passer i enzymets "lås"\n- Andre molekyler har feil form og passer ikke\n- Modellen forklarer spesifisitet godt, men er for enkel\n\n**Indusert tilpasning-modellen (Koshland, 1958):**\n- Det aktive setet er fleksibelt, ikke rigid\n- Når substratet nærmer seg, endrer enzymet form for å omfavne substratet tettere\n- Denne tilpasningen skaper optimale betingelser for katalyse\n- Etter reaksjonen vender enzymet tilbake til sin opprinnelige form\n\n**Hvorfor er indusert tilpasning mer nøyaktig?**\n1. Den forklarer at noen enzymer kan virke på flere beslektede substrater (noe nøkkel-lås ikke forklarer)\n2. Eksperimentelle studier (røntgenkrystallografi) viser at enzymer faktisk endrer form når substratet bindes\n3. Formendringen bidrar aktivt til katalysen ved å destabilisere substratet og stabilisere overgangstilstanden',
        hints: [
          'Hva er forskjellen mellom rigid og fleksibel?',
          'Hva viser eksperimentelle studier om enzymers form?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker undersøker et enzym ved ulike temperaturer og får følgende resultater:\n\n| Temperatur (°C) | Relativ hastighet (%) |\n|---|---|\n| 10 | 15 |\n| 20 | 35 |\n| 30 | 70 |\n| 37 | 100 |\n| 45 | 60 |\n| 55 | 10 |\n| 65 | 0 |\n\na) Hva er enzymets optimale temperatur?\nb) Forklar hvorfor aktiviteten øker fra 10 til 37 °C.\nc) Forklar hvorfor aktiviteten faller kraftig over 37 °C.\nd) Hva betyr det at aktiviteten er 0 ved 65 °C?',
        solution:
          '**a)** Enzymets optimale temperatur er **37 °C**, der den relative hastigheten er 100 %. Dette tilsvarer normal kroppstemperatur hos mennesker.\n\n**b)** Aktiviteten øker fra 10 til 37 °C fordi:\n- Høyere temperatur gir molekylene mer kinetisk energi\n- Substrat- og enzymmolekylene beveger seg raskere og kolliderer oftere\n- Flere kollisjoner har nok energi til å overvinne aktiveringsenergien\n- Tommelregel: Reaksjonshastigheten dobles omtrent for hver 10 °C økning\n\n**c)** Aktiviteten faller kraftig over 37 °C fordi:\n- Høy temperatur begynner å bryte de svake bindingene (hydrogenbindinger, Van der Waals-krefter) som holder enzymets tredimensjonale struktur sammen\n- Enzymet begynner å **denaturere** -- det aktive setet mister sin form\n- Substratet kan ikke lenger binde seg effektivt\n- Ved enda høyere temperaturer er enzymet fullstendig denaturert\n\n**d)** At aktiviteten er 0 ved 65 °C betyr at enzymet er **fullstendig denaturert**. Alle enzymmolekylene har mistet sin funksjonelle form. Denne denatureringen er vanligvis irreversibel -- enzymet vil ikke gjenopprette sin funksjon selv om temperaturen senkes tilbake til 37 °C.',
        hints: [
          'Se på tabellen: Ved hvilken temperatur er hastigheten høyest?',
          'Hva skjer med proteiner ved høy temperatur?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva tilbakekoblingshemming (feedback-inhibering) er. Bruk et eksempel for å illustrere svaret ditt.',
        solution:
          '**Tilbakekoblingshemming** er en reguleringsmekanisme der sluttproduktet i en metabolsk reaksjonsvei hemmer det første enzymet i veien.\n\n**Prinsipp:**\n- En metabolsk vei består av flere enzymer som arbeider i serie:\n  A $\\xrightarrow{E_1}$ B $\\xrightarrow{E_2}$ C $\\xrightarrow{E_3}$ D (sluttprodukt)\n- Når konsentrasjonen av sluttprodukt D øker, binder D seg til et allosterisk sete på enzym E$_1$\n- Dette hemmer E$_1$, og hele reaksjonsveien stopper\n- Når D brukes opp, frigjøres E$_1$ og veien starter igjen\n\n**Eksempel -- isoleucinsyntese:**\nAminosyren isoleucin syntetiseres fra treonin gjennom fem enzymtrinn. Når det er nok isoleucin i cellen, binder isoleucin seg til det første enzymet (treonin-deaminase) og hemmer det allosterisk. Dette hindrer overproduksjon.\n\n**Hvorfor er dette viktig?**\n- Det er energieffektivt: Cellen sløser ikke ressurser på å lage stoffer den allerede har nok av\n- Det er selvregulerende: Systemet justerer seg automatisk etter cellens behov\n- Det gir rask respons: Enzyminhibering er mye raskere enn å skru av genuttrykk',
        hints: [
          'Tenk på en fabrikk der sluttproduktet "rapporterer" tilbake til starten',
          'Hva skjer med det første enzymet i kjeden?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et legemiddelfirma utvikler en medisin som skal hemme et bestemt enzym involvert i kreftcellers vekst. Forskerne kan velge mellom å lage en kompetitiv eller en ikke-kompetitiv inhibitor.\n\na) Forklar forskjellen mellom de to typene inhibitorer.\nb) Diskuter fordeler og ulemper ved hver type i medisinsk sammenheng.\nc) Hvilket valg ville du anbefalt, og hvorfor?',
        solution:
          '**a) Forskjellen:**\n\n**Kompetitiv inhibitor:**\n- Binder seg til enzymets aktive sete\n- Konkurrerer med substratet om bindingsplass\n- Effekten kan overvinnes av høy substratkonsentrasjon\n- Har vanligvis en form som likner substratet\n\n**Ikke-kompetitiv (allosterisk) inhibitor:**\n- Binder seg til et allosterisk sete (utenfor det aktive setet)\n- Endrer enzymets form slik at det aktive setet ikke fungerer optimalt\n- Effekten kan IKKE overvinnes av økt substratkonsentrasjon\n\n**b) Fordeler og ulemper:**\n\n**Kompetitiv inhibitor:**\n- Fordel: Høy spesifisitet (binder bare enzymer med riktig aktivt sete)\n- Fordel: Lettere å designe fordi man kjenner substratets form\n- Ulempe: Kan overvinnes av høy substratkonsentrasjon i cellen\n- Ulempe: Krever høye doser for å opprettholde hemming\n\n**Ikke-kompetitiv inhibitor:**\n- Fordel: Kan ikke overvinnes av økt substratkonsentrasjon\n- Fordel: Kan virke ved lavere doser\n- Ulempe: Vanskeligere å designe (allosteriske seter er mindre studert)\n- Ulempe: Potensielt lavere spesifisitet (kan påvirke andre enzymer med lignende allosteriske seter)\n\n**c) Anbefaling:**\n\nI kreftbehandling er en **ikke-kompetitiv inhibitor** ofte foretrukket fordi:\n1. Kreftceller kan ha høye substratkonsentrasjoner, som ville svekke en kompetitiv inhibitor\n2. Man ønsker pålitelig, varig hemming av enzymet\n3. Lavere doser kan gi færre bivirkninger\n\nI praksis vurderes begge strategiene, og valget avhenger av det spesifikke enzymet og den kliniske situasjonen. Metotreksat (mot kreft) er for eksempel en kompetitiv inhibitor som fungerer godt fordi den binder svært sterkt.',
        hints: [
          'Tenk på hva som skjer når substratkonsentrasjonen øker',
          'Hva er viktig for et medikament som skal virke pålitelig i kroppen?',
          'Kan kreftceller ha uvanlige konsentrasjoner av substrater?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-11',
        number: '11',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Pepsin har en optimal pH på ca. 2, mens trypsin har en optimal pH på ca. 8. Hva ville skjedd dersom trypsin havnet i magen?',
        options: [
          'Trypsin ville jobbet raskere enn pepsin i det sure miljøet',
          'Trypsin ville denaturert og mistet sin funksjon på grunn av den lave pH-en',
          'Trypsin ville omdannet pepsin til et nytt enzym',
          'Trypsin ville fungert normalt, fordi pH ikke påvirker enzymer',
        ],
        answer: 1,
        solution:
          'Trypsin har en optimal pH på ca. 8 og er tilpasset det svakt basiske miljøet i tynntarmen. I magens sterkt sure miljø (pH ca. 2) ville den lave pH-en endre ladningen på aminosyrene i trypsins aktive sete, forstyrre hydrogenbindinger og andre svake bindinger, og til slutt **denaturere** enzymet. Trypsin ville dermed miste sin tredimensjonale struktur og slutte å fungere. Dette illustrerer at hvert enzym er tilpasset sitt spesifikke miljø.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar sammenhengen mellom ATP, NAD$^+$/NADH og enzymers rolle i celleåndingen. Beskriv hvordan disse tre komponentene arbeider sammen for å frigjøre energi fra glukose.',
        solution:
          '**Oversikt over celleåndingen:**\n\nCelleånding er den prosessen der glukose brytes ned trinnvis, og energien fanges opp i ATP. Enzymer, ATP og NAD$^+$/NADH har komplementære roller:\n\n**1. Enzymer som katalysatorer:**\n- Celleåndingen består av mange trinn, og hvert trinn katalyseres av et spesifikt enzym\n- Uten enzymer ville nedbrytningen av glukose gått ekstremt sakte\n- Eksempler: Heksokinase (glykolyse), isocitrat-dehydrogenase (sitronsyresyklus), ATP-syntase (oksidativ fosforylering)\n\n**2. NAD$^+$/NADH som elektronbærer:**\n- Under nedbrytningen av glukose fjernes elektroner og hydrogen fra mellomproduktene\n- NAD$^+$ tar opp disse og danner NADH: $\\text{NAD}^+ + 2e^- + \\text{H}^+ \\rightarrow \\text{NADH}$\n- NADH transporterer elektronene til elektrontransportkjeden i mitokondriene\n- Der overleveres elektronene trinnvis til oksygen, og energien brukes til å lage ATP\n- Totalt produseres ca. 10 NADH per glukosemolekyl\n\n**3. ATP som energivaluta:**\n- Noe ATP lages direkte (substratfosforylering) i glykolysen og sitronsyresyklus\n- Mesteparten av ATP lages i oksidativ fosforylering, drevet av elektroner fra NADH og FADH$_2$\n- Totalt produseres ca. 30--32 ATP per glukosemolekyl\n- ATP brukes deretter til å drive alle energikrevende prosesser i cellen\n\n**Sammenhengen:**\n\nEnzymer katalyserer hvert trinn $\\rightarrow$ NAD$^+$ fanger opp frigjorte elektroner $\\rightarrow$ NADH leverer elektroner til elektrontransportkjeden $\\rightarrow$ Energien brukes til å pumpe protoner $\\rightarrow$ ATP-syntase (et enzym!) bruker protongradienten til å lage ATP.\n\nDette illustrerer den elegante sammenhengen mellom enzymer, koenzymer og ATP i cellens energistoffskifte.',
        hints: [
          'Tenk på celleåndingens tre hoveddeler: glykolyse, sitronsyresyklus, oksidativ fosforylering',
          'Hva er NADHs rolle i å koble de tidlige trinnene til ATP-produksjonen?',
          'Husk at enzymer driver hvert enkelt trinn',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar forskjellen mellom katabolisme og anabolisme. Gi to eksempler på hver.',
        solution:
          '**Katabolisme (nedbrytningsreaksjoner):**\n- Store, komplekse molekyler brytes ned til mindre, enklere molekyler\n- Frigjør energi (eksergone reaksjoner, $\\Delta G < 0$)\n- Energien fanges opp i ATP, NADH og FADH$_2$\n\nEksempler:\n1. **Celleånding:** Glukose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) brytes ned til CO$_2$ og H$_2$O\n2. **Proteinfordøyelse:** Proteiner i maten brytes ned til aminosyrer av pepsin og trypsin\n\n**Anabolisme (oppbyggingsreaksjoner):**\n- Små, enkle molekyler bygges opp til store, komplekse molekyler\n- Krever energi (endergone reaksjoner, $\\Delta G > 0$)\n- Bruker ATP og NADPH som energi- og elektronkilder\n\nEksempler:\n1. **Proteinsyntese:** Aminosyrer settes sammen til proteiner ved ribosomene\n2. **Fotosyntese (Calvin-syklus):** CO$_2$ bygges opp til glukose ved hjelp av lysenergi\n\n**Sammenheng:** Katabolisme produserer energien (ATP) og byggesteinene som anabolisme trenger. De to prosessene er tett koblet og utgjør cellens totale stoffskifte (metabolisme).',
        hints: [
          'Kata = ned, ana = opp',
          'Hvilke prosesser frigjør energi? Hvilke krever energi?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'bio1-2-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-14',
        number: '14',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En forsker studerer et enzym og måler reaksjonshastigheten ved økende substratkonsentrasjon. Kurven flater ut og nærmer seg $V_{\\text{max}}$. Hva er den mest sannsynlige forklaringen på at kurven flater ut?',
        options: [
          'Substratet begynner å hemme enzymet ved høye konsentrasjoner',
          'Alle enzymets aktive seter er opptatt (enzymet er mettet med substrat)',
          'Enzymet denatureres av det ekstra substratet',
          'Produktet fra reaksjonen hemmer enzymet allosterisk',
        ],
        answer: 1,
        solution:
          'Når substratkonsentrasjonen øker, binder stadig flere enzymmolekyler et substrat. Ved svært høye substratkonsentrasjoner er **alle enzymets aktive seter opptatt** til enhver tid -- enzymet er **mettet**. Å tilføre mer substrat har ingen effekt fordi det ikke finnes ledige aktive seter. Reaksjonshastigheten når da sin maksimumsverdi, $V_{\\text{max}}$. For å øke hastigheten utover dette måtte man tilføre flere enzymmolekyler.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'bio1-2-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'bio1-2-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Menneskets kropp inneholder ca. 50 g ATP til enhver tid, men bruker ca. 40--70 kg ATP per døgn.\n\na) Beregn omtrent hvor mange ganger hvert ATP-molekyl må resirkuleres i løpet av ett døgn.\nb) Diskuter hva dette forteller oss om hastigheten på ATP/ADP-syklusen.\nc) Hva ville skjedd dersom celleåndingen plutselig stoppet?',
        solution:
          '**a) Beregning:**\n\nVi bruker gjennomsnittsverdier:\n- ATP i kroppen: 50 g\n- ATP-forbruk per døgn: 55 kg (middelverdi mellom 40 og 70 kg) = 55 000 g\n\nAntall resirkuleringer:\n$$\\frac{55\\,000 \\text{ g}}{50 \\text{ g}} = 1\\,100 \\text{ ganger per døgn}$$\n\nHvert ATP-molekyl resirkuleres altså omtrent **1 000--1 400 ganger per døgn** (avhengig av aktivitetsnivå).\n\nPer minutt: $\\frac{1\\,100}{1\\,440 \\text{ min}} \\approx 0{,}76$ ganger per minutt, altså omtrent én gang hvert 80. sekund.\n\n**b) Hastigheten:**\n\nDette forteller oss at ATP/ADP-syklusen er ekstremt rask. ATP er ikke et langtidslager for energi -- det er en korttids energivaluta som stadig sirkulerer. Cellene produserer og forbruker ATP nesten like raskt. Mitokondriene arbeider kontinuerlig med å regenerere ATP fra ADP.\n\n**c) Dersom celleåndingen stoppet:**\n\n- ATP-produksjonen ville stanse nesten umiddelbart\n- De 50 g ATP som er tilgjengelig ville bli brukt opp i løpet av **sekunder**\n- Uten ATP ville cellen miste evnen til:\n  - Aktiv transport (ionepumper stopper, cellemembranpotensialet kollapser)\n  - Muskelkontraksjon (hjertet stopper)\n  - Proteinsyntese\n  - Alle andre energikrevende prosesser\n- Resultatet ville være celledød i løpet av minutter\n- I kroppen ville dette bety død (dette er grunnen til at oksygenmangel/cyanidforgtning er så dødelig -- begge blokkerer oksidativ fosforylering)',
        hints: [
          'Del total mengde brukt på mengde tilgjengelig',
          'Tenk på hva dette betyr for hvor raskt ATP må lages',
          'Hva trenger cellen ATP til?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

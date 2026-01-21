/**
 * Naturfag VG1 - Kapittel 4.3: Hormonsystemet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_NAT_VG1_4_3: TextbookChapter = {
  id: 'nat-vg1-4-3',
  courseId: 'nat-vg1',
  chapterNumber: '4.3',
  title: 'Hormonsystemet',
  description: 'Lær om hormoner, kjertler og hvordan hormonsystemet regulerer kroppsfunksjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hormonsystemets oppbygging og funksjon',
    'forklare samspillet mellom nerve- og hormonsystemet',
    'beskrive viktige hormoner og deres effekter',
    'forklare negativ tilbakekobling i hormonsystemet',
  ],
  content: [
    {
      id: 'nat-vg1-4-3-intro',
      type: 'text',
      content: `# Hormonsystemet

**Hormonsystemet** (endokrine system) er kroppens andre kommunikasjonssystem, ved siden av nervesystemet. Det bruker **hormoner** (kjemiske signalstoffer) som sendes via blodet for å styre kroppsf unksjoner.

## Nervesystem vs. Hormonsystem

Begge systemene sender signaler, men på forskjellige måter:

| Egenskap | Nervesystem | Hormonsystem |
|----------|-------------|--------------|
| Signaltype | Elektrisk (aksjonspotensial) + kjemisk (nevrotransmitter) | Kjemisk (hormoner) |
| Transportvei | Nerveceller | Blodbanen |
| Hastighet | Meget rask (ms) | Langsom (sekunder-minutter) |
| Varighet | Kort (ms-sekunder) | Lang (minutter-timer-dager) |
| Mål | Spesifikke celler (synapser) | Alle celler med riktig reseptor |
| Eksempel | Refleks (50 ms) | Vekst (år) |

**Samarbeid:**
Nerve- og hormonsystemet samarbeider tett. Hypothalamus i hjernen kobler de to systemene sammen.`,
    },
    {
      id: 'nat-vg1-4-3-def-hormon',
      type: 'definition',
      title: 'Hormon',
      content: 'Et kjemisk signalstoff som produseres i en kjertel, sendes via blodet, og påvirker målceller med riktig reseptor. Hormoner regulerer mange kroppsfunksjoner som vekst, stoffskifte, reproduksjon og homeostase.',
    },
    {
      id: 'nat-vg1-4-3-kjertler',
      type: 'text',
      content: `# Endokrine kjertler

**Endokrine kjertler** produserer hormoner og skiller dem direkte ut i blodet (ingen kanaler).

**Viktige endokrine kjertler:**

## 1. Hypofysen (pituitærk jertelen)

**Plassering:** Bak nesen, under hjernen, festet til hypothalamus

**Kallenavn:** "Masterkjertel" (styrer andre kjertler)

**Struktur:**
- **Fremre del (adenohypofyse):** Produserer egne hormoner
- **Bakre del (neurohypofyse):** Lagrer og frigjør hormoner fra hypothalamus

**Hormoner fra fremre del:**

**a) Veksthormon (GH - Growth Hormone)**
- **Funksjon:** Stimulerer vekst av ben og muskler
- **Effekter:** Øker proteinproduksjon, fettforbrenning
- **Problem:** For lite → Dvergvekst. For mye → Gigantisme (barn), akromegali (voksne)

**b) Tyreoidea-stimulerende hormon (TSH)**
- **Funksjon:** Stimulerer skjoldbruskkjertelen til å produsere tyroksinhormoner
- **Effekt:** Regulerer stoffskifte

**c) Adrenokortikotropt hormon (ACTH)**
- **Funksjon:** Stimulerer binyrene til å produsere kortisol
- **Effekt:** Stressrespons, blodsukkerregulering

**d) Follikkelstimulerende hormon (FSH) og Luteiniserende hormon (LH)**
- **Funksjon:** Styrer kjønnsorganer
- **Kvinner:** Eggmodning, menstruasjonssyklus, østrogen/progesteron
- **Menn:** Sædproduksjon, testosteron

**e) Prolaktin**
- **Funksjon:** Stimulerer melkeproduksjon etter fødsel

**Hormoner fra bakre del (produsert i hypothalamus):**

**a) Oksytocin**
- **Funksjon:** Stimulerer rier under fødsel, melkeutskillelse, sosial binding

**b) Antidiuretisk hormon (ADH/Vasopressin)**
- **Funksjon:** Reduserer vannta p via nyrene (øker vannopptak)
- **Effekt:** Konsentrerer urinen

## 2. Skjoldbrusk kjertelen (tyreoidea)

**Plassering:** I halsen, foran luftrøret

**Hormoner:**
- **Tyroksinhormoner (T3 og T4):** Inneholder jod

**Funksjoner:**
- Regulerer **stoffskifte** (energiforbruk)
- Påvirker hjertefrekvens, kroppstemperatur
- Viktig for hjerneutvikling hos barn

**Problemer:**

**a) Hypotyreose (for lite tyroksinhormoner):**
- Symptomer: Trøtthet, vektøkning, kuldeslengsel, treg puls
- Årsak: Jodmangel, autoimmun (Hashimotos)
- Behandling: Tyroksintabletter

**b) Hypertyreose (for mye tyroksinhormoner):**
- Symptomer: Nervøsitet, vekttap, svetting, rask puls
- Årsak: Autoimmun (Graves sykdom)
- Behandling: Medisiner, radioaktivt jod, kirurgi

## 3. Binskjoldb ruskkjertlene (paratyreoidea)

**Plassering:** Fire små kjertler bak skjoldbruskkjertelen

**Hormon:** Parathormon (PTH)

**Funksjon:**
- Regulerer **kalsium- og fosfatnivå** i blodet
- Øker kalsium: Frigjør kalsium fra ben, øker opptak i tarm og nyre
- Viktig for nervefunksjon, muskelsammentrekning, benstyrke

## 4. Binyrene (adrenale kjertler)

**Plassering:** Toppen av hver nyre

**To deler:**

**a) Binyrebark (ytre lag):**

**Hormoner:**
- **Kortisol:** Stresshormon, øker blodsukker, antiinflammatorisk
- **Aldosteron:** Regulerer salt- og vannbalanse (øker Na⁺-opptak i nyre)
- **Androgener:** Svake mannlige kjønnshormoner

**b) Binyremarg (indre lag):**

**Hormoner:**
- **Adrenalin (epinefrin):** "Kamp eller flukt", øker hjertefrekvens, blodsukker
- **Noradrenalin (norepinefrin):** Lignende effekt som adrenalin

**Funksjon:**
- **Akutt stress:** Binyremarg frigjør adrenalin (sekunder)
- **Kronisk stress:** Binyrebark frigjør kortisol (minutter-timer)

## 5. Bukspyttkjertelen (pankreas)

**Plassering:** Bak magen

**Funksjon:** Både endokrin (hormoner) og eksokrin (fordøyelsesenzymer)

**Hormoner (fra Langerhanske øyer):**

**a) Insulin (β-celler):**
- **Funksjon:** Senker blodsukker
- **Effekt:** Øker glukoseopptak i celler, lagring som glykogen

**b) Glukagon (α-celler):**
- **Funksjon:** Hever blodsukker
- **Effekt:** Frigjør glukose fra leveren

**(Mer om insulin og glukagon i kapittel 4.1)**

## 6. Kjønnskjertler

**a) Eggstokker (ovarier) - kvinner**

**Hormoner:**
- **Østrogen:** Utvikling av kvinnelige kjennetegn, menstruasjonssyklus
- **Progesteron:** Forbereder livmor for graviditet, opprettholder graviditet

**b) Testikler - menn**

**Hormoner:**
- **Testosteron:** Utvikling av mannlige kjennetegn, sædproduksjon, muskelvekst

## 7. Corpus pineale (pinealkjertelen)

**Plassering:** I hjernen

**Hormon:** Melatonin

**Funksjon:**
- Regulerer **søvn-våken-syklus**
- Produseres i mørke, hemmes av lys
- "Kroppens klokke"

## 8. Thymus

**Plassering:** Bak brystbenet

**Hormon:** Thymosin

**Funksjon:**
- Viktig for utvikling av **T-celler** (immunceller) hos barn
- Krymper etter puberteten`,
    },
    {
      id: 'nat-vg1-4-3-hormontyper',
      type: 'text',
      content: `# Hormontyper og virkemåte

Hormoner deles inn i to hovedtyper basert på kjemisk struktur:

## 1. Steroidhormoner (lipidbaserte)

**Struktur:** Avledet fra kolesterol (fettmolekyl)

**Eksempler:**
- Kortisol (binyrene)
- Aldosteron (binyrene)
- Testosteron (testikler)
- Østrogen og progesteron (eggstokker)

**Egenskaper:**
- **Fettløselige** (kan passere gjennom cellemembranen)
- Bindes til transportproteiner i blodet (lite vannløselig)

**Virkemåte:**

**1. Transport:** Hormon transporteres via blodet til målcelle
**2. Diffusjon:** Hormon diffunderer gjennom cellemembranen (fettløselig)
**3. Binding:** Hormon binder seg til **reseptor inne i cellen** (cytoplasma eller kjerne)
**4. Aktivering:** Hormon-reseptor kompleks går inn i cellekjernen
**5. Genaktivering:** Kompleks binder seg til DNA og aktiverer gener
**6. Proteinsyntese:** Nye proteiner produseres
**7. Effekt:** Proteiner endrer cellens funksjon

**Tidsskala:** Timer-dager (langsom, men langvarig effekt)

## 2. Peptidhormoner (proteinbaserte)

**Struktur:** Laget av aminosyrer (små proteiner)

**Eksempler:**
- Insulin og glukagon (bukspyttkjertel)
- Veksthormon (hypofyse)
- Oksytocin og ADH (hypothalamus/hypofyse)
- Adrenalin og noradrenalin (binyrene)
- Tyroksinhormoner (skjoldbruskkjertel)

**Egenskaper:**
- **Vannløselige** (kan ikke passere gjennom cellemembranen)
- Løses fritt i blodet

**Virkemåte:**

**1. Transport:** Hormon transporteres via blodet til målcelle
**2. Binding:** Hormon binder seg til **reseptor på celleoverflaten**
**3. Aktivering:** Reseptor aktiverer et **sekundært budbringersystem** inne i cellen
   - Ofte cAMP (cyklisk AMP)
   - Eller Ca²⁺, IP3, DAG
**4. Signalkaskade:** Sekundære budbringere aktiverer enzymer
**5. Effekt:** Enzymer endrer cellens funksjon (f.eks. åpner ionekanaler, aktiverer/hemmer enzymer)

**Tidsskala:** Sekunder-minutter (rask, men kortvarig effekt)

## Sammenligning

| Egenskap | Steroidhormoner | Peptidhormoner |
|----------|-----------------|----------------|
| Løselighet | Fettløselig | Vannløselig |
| Transport | Transportprotein | Fritt i blod |
| Reseptor | Inne i celle | På celleoverflate |
| Mekanisme | Direkte genaktivering | Sekundært budbringersystem |
| Hastighet | Langsom (timer) | Rask (minutter) |
| Varighet | Lang (dager) | Kort (minutter-timer) |
| Eksempel | Testosteron | Insulin |`,
    },
    {
      id: 'nat-vg1-4-3-negativ-feedback',
      type: 'text',
      content: `# Negativ tilbakekobling

De fleste hormoner reguleres ved **negativ tilbakekobling** (negative feedback) - samme prinsipp som i homeostase.

**Prinsipp:**
1. Et hormon øker i blodet
2. Hormonet har sin effekt
3. Effekten signaliserer tilbake til kjertelen
4. Kjertelen **reduserer** hormonproduksjonen
5. Hormonnivået synker
6. Når nivået er lavt nok, økes produksjonen igjen

**Analogi:** Termostat
- For kaldt → Varmeovn slås på → Varmer opp → Termostat slår av ovnen

## Eksempel 1: Tyroksinhormoner

**Aksen: Hypothalamus → Hypofyse → Skjoldbruskkjertel**

**For lavt tyroksinnivå:**

**1. Sensor:** Hypothalamus registrerer lavt tyroksinnivå (T3/T4)
**2. Respons:** Hypothalamus frigjør TRH (Thyrotropin-Releasing Hormone)
**3. Hypofyse:** TRH stimulerer hypofysen til å frigjøre TSH (Thyroid-Stimulating Hormone)
**4. Skjoldbruskkjertel:** TSH stimulerer skjoldbruskkjertelen til å produsere tyroksinhormoner (T3/T4)
**5. Effekt:** Tyroksinnivået øker, stoffskiftet øker

**For høyt tyroksinnivå:**

**1. Sensor:** Hypothalamus og hypofyse registrerer høyt tyroksinnivå
**2. Negativ tilbakekobling:** T3/T4 hemmer hypothalamus og hypofysen
**3. Respons:** Mindre TRH og TSH frigjøres
**4. Skjoldbruskkjertel:** Produserer mindre tyroksinhormoner
**5. Effekt:** Tyroksinnivået synker

**Resultat:** Tyroksinnivået holdes stabilt

## Eksempel 2: Kortisol (stresshormon)

**Aksen: Hypothalamus → Hypofyse → Binyrene**

**Ved stress:**

**1. Sensor:** Hypothalamus registrerer stress
**2. Respons:** Hypothalamus frigjør CRH (Corticotropin-Releasing Hormone)
**3. Hypofyse:** CRH stimulerer hypofysen til å frigjøre ACTH (Adrenocorticotropic Hormone)
**4. Binyrene:** ACTH stimulerer binyrebark til å produsere kortisol
**5. Effekt:** Kortisolnivået øker, kroppen håndterer stress

**Når stresset er over:**

**1. Sensor:** Hypothalamus og hypofyse registrerer høyt kortisolnivå
**2. Negativ tilbakekobling:** Kortisol hemmer hypothalamus og hypofysen
**3. Respons:** Mindre CRH og ACTH frigjøres
**4. Binyrene:** Produserer mindre kortisol
**5. Effekt:** Kortisolnivået synker

**Problem ved kronisk stress:**
- Kontinuerlig høyt kortisolnivå
- Negativ tilbakekobling fungerer ikke ordentlig
- Konsekvenser: Høyt blodtrykk, svekket immunforsvar, vektøkning, søvnproblemer

## Eksempel 3: Menstruasjonssyklus (positiv OG negativ tilbakekobling)

Menstruasjonssyklusen bruker både negativ og positiv tilbakekobling:

**Negativ tilbakekobling (tidlig i syklusen):**
- Lavt østrogennivå → Hypothalamus frigjør GnRH → Hypofyse frigjør FSH og LH → Eggstokk produserer østrogen
- Moderat østrogennivå → Hemmer GnRH, FSH, LH (negativ tilbakekobling)

**Positiv tilbakekobling (midt i syklusen):**
- **Høyt** østrogennivå → **Stimulerer** hypothalamus og hypofyse (positiv tilbakekobling)
- Stor **LH-topp** frigjøres
- **Eggløsning** (ovulasjon)

Etter eggløsning går systemet tilbake til negativ tilbakekobling.`,
    },
    {
      id: 'nat-vg1-4-3-hypothalamus',
      type: 'text',
      content: `# Hypothalamus - forbindelsen mellom nerve og hormon

**Hypothalamus** er en liten, men ekstremt viktig del av hjernen som kobler nervesystemet og hormonsystemet sammen.

**Plassering:** Under thalamus, over hypofysen

**Funksjoner:**

## 1. Homeostase

Hypothalamus er hovedkontrollsenteret for homeostase:

- **Kroppstemperatur:** Registrerer temperatur, aktiverer svetting eller skjelving
- **Vannbalanse:** Registrerer osmolaritet, styrer tørste og ADH-frigjøring
- **Blodsukker:** Registrerer glukose, styrer sult og metthet
- **Blodtrykk:** Regulerer via nervesystemet
- **Søvn-våken-syklus:** Samarbeider med pinealkorpuset (melatonin)

## 2. Styring av hypofysen

Hypothalamus produserer hormoner som styrer hypofysen:

**Frigjørende hormoner (releasing hormones):**
- **TRH:** Stimulerer TSH-frigjøring (skjoldbruskkjertel)
- **CRH:** Stimulerer ACTH-frigjøring (binyrene)
- **GnRH:** Stimulerer FSH og LH-frigjøring (kjønnsorganer)
- **GHRH:** Stimulerer veksthormon-frigjøring

**Hemmende hormoner (inhibiting hormones):**
- **Somatostatin:** Hemmer veksthormon
- **Dopamin:** Hemmer prolaktin

**Hormoner lagret i bakre hypofyse:**
- **Oksytocin:** Produseres i hypothalamus, lagres i hypofysen
- **ADH:** Produseres i hypothalamus, lagres i hypofysen

## 3. Autonomt nervesystem

Hypothalamus styrer det autonome nervesystemet:
- **Sympatisk:** "Kamp eller flukt"
- **Parasympatisk:** "Hvile og fordøy"

## 4. Atferd

- **Sult og metthet:** Registrerer ghrelin (sulthormon) og leptin (metthetsh ormon)
- **Tørste:** Registrerer osmolaritet
- **Emosjonell respons:** Frykt, sinne, glede
- **Seksuell atferd:** Styrer kjønnshormoner

**Eksempel på samarbeid: Stressrespons**

**1. Hypothalamus registrerer stress**
- Nervesignaler fra hjernen eller sanseorganer

**2. Rask respons (sekunder) - Nervesystem:**
- Hypothalamus aktiverer sympatisk nervesystem
- Binyremarg frigjør adrenalin og noradrenalin
- **Effekter:** Økt hjertefrekvens, blodtrykk, årvåkenhet

**3. Langsom respons (minutter) - Hormonsystem:**
- Hypothalamus frigjør CRH
- Hypofyse frigjør ACTH
- Binyrebark frigjør kortisol
- **Effekter:** Økt blodsukker, immunsuppresjon, antiinflammatorisk

**Begge systemer samarbeider for å håndtere stress.**`,
    },
    {
      id: 'nat-vg1-4-3-ex-sammenligning',
      type: 'example',
      title: 'Eksempel: Nervesystem vs. Hormonsystem i handling',
      problem: 'Sammenlign hvordan nervesystemet og hormonsystemet responderer på en stressende situasjon.',
      solution: `**Situasjon:** Du skal holde en presentasjon foran hele klassen.

**Nervesystemets respons (rask):**

**Tidsramme:** Sekunder

**Mekanisme:**
- Hypothalamus aktiverer sympatisk nervesystem
- Nervesignaler sendes direkte til organer
- Binyremarg frigjør adrenalin og noradrenalin

**Effekter:**
- ❤️ Hjertefrekvens øker umiddelbart
- 💨 Raskere pust
- 👀 Pupiller utvider seg
- 💦 Svetting
- 🤲 Skjelving i hendene
- 🦋 "Sommerfugler i magen" (redusert fordøyelse)

**Formål:** Rask forberedelse til "kamp eller flukt"

**Hormonsystemets respons (langsom):**

**Tidsramme:** Minutter-timer

**Mekanisme:**
- Hypothalamus frigjør CRH
- Hypofyse frigjør ACTH
- Binyrebark frigjør kortisol
- Hormoner sendes via blodet til alle celler

**Effekter:**
- 🍬 Økt blodsukker (energi)
- 🧠 Økt konsentrasjon og årvåkenhet
- 💪 Muskler får mer energi
- 🛡️ Immunforsvar midlertidig svekket (ikke prioritet)
- 😴 Redusert søvn-behov

**Formål:** Vedvarende energi og fokus under langvarig stress

**Etter presentasjonen:**

**Nervesystem:**
- Parasympatisk nervesystem aktiveres
- Hjertefrekvens synker raskt (minutter)
- Pust roligere
- Fordøyelse starter igjen

**Hormonsystem:**
- Kortisol har lang halveringstid
- Nivået synker sakte (timer)
- Du kan fortsatt føle deg "pumped" en stund
- Kan føle seg utmattet senere (kortisol-kollaps)

**Hvorfor begge?**

**Nervesystem:**
- Håndterer øyeblikkelig behov
- Rask respons
- Kort varighet

**Hormonsystem:**
- Opprettholder responsen over tid
- Gir vedvarende energi
- Forbereder kroppen for langvarig stress

**Sammen:** Optimal respons på stress!`,
    },
  ],
  exercises: [
    {
      id: 'nat-vg1-4-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom nervesystemet og hormonsystemet når det gjelder hastighet og varighet?',
      solution: `**Nervesystem vs. Hormonsystem:**

**Nervesystemet:**

**Hastighet:**
- **Meget rask** respons
- Millisekunder til sekunder
- Aksjonspotensial reiser med opptil 100 m/s

**Varighet:**
- **Kort** effekt
- Millisekunder til sekunder
- Nevrotransmittere brytes raskt ned

**Hvorfor:**
- Signaler sendes direkte via nerveceller
- Spesifikke forbindelser (synapser)
- Rask nedbrytning av nevrotransmittere

**Eksempel:**
- Refleks: 50-100 ms
- Muskelsammentrekning: Sekunder
- Rask respons på fare

**Hormonsystemet:**

**Hastighet:**
- **Langsom** respons
- Sekunder til minutter til timer
- Hormoner må transporteres via blodet

**Varighet:**
- **Lang** effekt
- Minutter til timer til dager
- Hormoner har lang halveringstid

**Hvorfor:**
- Hormoner sendes via blodbanen (langsommere transport)
- Må nå målceller overalt i kroppen
- Hormoner brytes ned langsomt

**Eksempel:**
- Adrenalin: Minutter
- Kortisol: Timer
- Veksthormon: Dager-år

**Sammenligning:**

| Egenskap | Nervesystem | Hormonsystem |
|----------|-------------|--------------|
| Hastighet | ms-sekunder | sekunder-timer |
| Varighet | ms-sekunder | minutter-dager |
| Transportvei | Nerveceller | Blod |
| Spesifisitet | Meget spesifikk | Mindre spesifikk |
| Eksempel | Refleks (50 ms) | Pubertet (år) |

**Når brukes hva?**

**Nervesystem:**
- Raske, korte responser
- Reflekser, bevegelser
- Umiddelbar respons på fare

**Hormonsystem:**
- Langsomme, langvarige responser
- Vekst, stoffskifte, reproduksjon
- Vedvarende regulering (homeostase)

**Samarbeid:**
Ofte brukes begge samtidig:
- **Stress:** Nervesystem = øyeblikkelig respons (adrenalin), Hormonsystem = vedvarende respons (kortisol)`,
      hints: ['Tenk på hvor raskt signalet sendes', 'Hvor lenge varer effekten?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv funksjonen til følgende hormoner: a) Insulin, b) Veksthormon, c) Tyroksinhormoner, d) Adrenalin',
      solution: `**a) Insulin:**

**Produseres av:** β-celler i bukspyttkjertelen

**Funksjon:** Senker blodsukkernivået

**Hvordan:**
- Øker opptak av glukose i celler (spesielt muskler og fett)
- Stimulerer lagring av glukose som glykogen i lever og muskler
- Reduserer glukoseproduksjon i leveren

**Når frigjøres det:** Etter måltid (når blodsukkeret er høyt)

**Problem:** Mangel på insulin → Diabetes type 1

**b) Veksthormon (GH):**

**Produseres av:** Fremre del av hypofysen

**Funksjon:** Stimulerer vekst av ben, muskler og vev

**Hvordan:**
- Øker proteinproduksjon
- Stimulerer celledeling
- Øker fettforbrenning
- Stimulerer leveren til å produsere IGF-1 (Insulin-like Growth Factor)

**Når frigjøres det:** Spesielt under søvn (dypest søvn)

**Problemer:**
- For lite → Dvergvekst
- For mye → Gigantisme (barn), akromegali (voksne)

**c) Tyroksinhormoner (T3 og T4):**

**Produseres av:** Skjoldbruskkjertelen

**Funksjon:** Regulerer stoffskiftet (metabolisme)

**Hvordan:**
- Øker celleånding og energiforbruk
- Øker hjertefrekvens
- Øker kroppstemperatur
- Viktig for hjerneutvikling hos barn

**Når frigjøres det:** Kontinuerlig, regulert av TSH fra hypofysen

**Problemer:**
- For lite (hypotyreose) → Trøtthet, vektøkning, kuldeslengsel
- For mye (hypertyreose) → Nervøsitet, vekttap, svetting, rask puls

**d) Adrenalin (epinefrin):**

**Produseres av:** Binyremarg

**Funksjon:** "Kamp eller flukt"-hormon (forberede kroppen på handling)

**Hvordan:**
- Øker hjertefrekvens og slagkraft
- Utvider luftveiene (mer oksygen)
- Utvider pupillene (bedre syn)
- Frigjør glukose fra leveren (energi)
- Reduserer fordøyelse
- Øker blodstrøm til muskler

**Når frigjøres det:** Ved stress, fare, fysisk aktivitet

**Varighet:** Rask virkning (sekunder), kort varighet (minutter)

**Sammenligning:**

| Hormon | Kjertel | Hovedfunksjon |
|--------|---------|---------------|
| Insulin | Bukspyttkjertel | Senker blodsukker |
| Veksthormon | Hypofyse | Stimulerer vekst |
| Tyroksinhormoner | Skjoldbruskkjertel | Regulerer stoffskifte |
| Adrenalin | Binyrene | "Kamp eller flukt" |`,
      hints: ['Hvor produseres hormonene?', 'Hva er hovedfunksjonen?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar hva negativ tilbakekobling er i hormonsystemet. Bruk tyroksinhormoner som eksempel.',
      solution: `**Negativ tilbakekobling:**

**Definisjon:**
Negativ tilbakekobling er en reguleringsmekanisme hvor et hormon **hemmer** sin egen produksjon når nivået blir for høyt. Dette opprettholder stabile hormonnivåer i kroppen.

**Prinsipp:**
1. Hormon øker i blodet
2. Hormonet har sin effekt
3. Høyt hormonnivå signaliserer tilbake til kjertelen
4. Kjertelen **reduserer** produksjonen
5. Hormonnivået synker
6. Når nivået er lavt, økes produksjonen igjen

**Analogi:** Termostat i et rom
- For kaldt → Varmeovn slås på → Rommet varmes opp → Termostat slår av ovnen → Rommet kjøles ned → Varmeovn slås på igjen

**Eksempel: Tyroksinhormoner (T3 og T4)**

**Aksen:** Hypothalamus → Hypofyse → Skjoldbruskkjertel

**Situasjon 1: For lavt tyroksinnivå**

**1. Sensor:**
- Hypothalamus og hypofyse registrerer at tyroksinnivået (T3/T4) er for lavt

**2. Respons:**
- Hypothalamus frigjør **TRH** (Thyrotropin-Releasing Hormone)
- TRH stimulerer hypofysen

**3. Hypofyse:**
- Frigjør **TSH** (Thyroid-Stimulating Hormone)
- TSH sendes via blodet til skjoldbruskkjertelen

**4. Skjoldbruskkjertel:**
- TSH stimulerer skjoldbruskkjertelen
- Produserer mer **T3 og T4** (tyroksinhormoner)
- T3/T4 frigjøres til blodet

**5. Effekt:**
- Tyroksinnivået øker
- Stoffskiftet øker (mer energiforbruk)
- Hjertefrekvens øker
- Kroppstemperatur øker

**Situasjon 2: For høyt tyroksinnivå**

**1. Sensor:**
- Hypothalamus og hypofyse registrerer at tyroksinnivået er for høyt

**2. Negativ tilbakekobling:**
- **T3/T4 hemmer hypothalamus og hypofysen**
- Dette er den sentrale mekanismen

**3. Respons:**
- Hypothalamus produserer **mindre TRH**
- Hypofyse produserer **mindre TSH**

**4. Skjoldbruskkjertel:**
- Mindre TSH → Mindre stimulering
- Produserer **mindre T3 og T4**

**5. Effekt:**
- Tyroksinnivået synker
- Stoffskiftet senkes

**Resultat: Stabil likevekt**

Systemet oscillerer rundt en optimal verdi:
- Tyroksinnivå litt lavt → Mer produksjon → Nivå stiger
- Tyroksinnivå litt høyt → Mindre produksjon → Nivå synker
- **Systemet holder tyroksinnivået relativt konstant**

**Diagram:**

\`\`\`
Lavt T3/T4 → TRH↑ → TSH↑ → T3/T4↑
                                    ↓
Høyt T3/T4 ← TRH↓ ← TSH↓ ← T3/T4 (negativ tilbakekobling)
\`\`\`

**Hvorfor viktig?**

**1. Stabilitet:**
- Hormonnivåer holdes konstante
- Kroppen fungerer optimalt

**2. Automatisk regulering:**
- Ingen bevisst kontroll nødvendig
- Systemet regulerer seg selv

**3. Forhindrer overdose:**
- For mye hormon kan være farlig
- Negativ tilbakekobling beskytter mot dette

**Hva skjer hvis systemet svikter?**

**Hypotyreose (for lite tyroksinhormoner):**
- Skjoldbruskkjertelen responderer ikke på TSH
- Høyt TSH, lavt T3/T4
- Symptomer: Trøtthet, vektøkning

**Hypertyreose (for mye tyroksinhormoner):**
- Skjoldbruskkjertelen produserer for mye T3/T4 (f.eks. Graves sykdom)
- Lavt TSH, høyt T3/T4
- Symptomer: Nervøsitet, vekttap, svetting

**Andre eksempler på negativ tilbakekobling:**
- Kortisol (stresshormon)
- Testosteron og østrogen (kjønnshormoner)
- Blodsukker (insulin og glukagon)`,
      hints: ['Hva skjer når tyroksinnivået er for høyt?', 'Hvordan påvirker T3/T4 hypothalamus og hypofyse?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor kalles hypofysen "masterkjertelen"? Beskriv minst tre hormoner den produserer og hva de gjør.',
      solution: `**Hvorfor "masterkjertelen"?**

Hypofysen kalles "masterkjertelen" fordi den **styrer mange andre endokrine kjertler** i kroppen. Den produserer hormoner som regulerer andre kjertlers aktivitet.

**Plassering:** Bak nesen, under hjernen, festet til hypothalamus

**To deler:**
1. **Fremre del (adenohypofyse):** Produserer egne hormoner
2. **Bakre del (neurohypofyse):** Lagrer hormoner fra hypothalamus

**Tre viktige hormoner fra fremre del:**

**1. Tyreoidea-stimulerende hormon (TSH)**

**Funksjon:** Styrer skjoldbruskkjertelen

**Hvordan:**
- Stimulerer skjoldbruskkjertelen til å produsere tyroksinhormoner (T3 og T4)
- T3/T4 regulerer stoffskiftet

**Effekt:**
- Øker energiforbruk
- Øker hjertefrekvens og kroppstemperatur
- Viktig for vekst og hjerneutvikling

**Regulering:**
- Hypothalamus frigjør TRH → Hypofyse frigjør TSH → Skjoldbruskkjertel produserer T3/T4
- T3/T4 hemmer TRH og TSH (negativ tilbakekobling)

**Problem:**
- For mye TSH → Hypertyreose (overaktiv skjoldbruskkjertel)
- For lite TSH → Hypotyreose (underaktiv skjoldbruskkjertel)

**2. Adrenokortikotropt hormon (ACTH)**

**Funksjon:** Styrer binyrene

**Hvordan:**
- Stimulerer binyrebark til å produsere kortisol (stresshormon)

**Effekter av kortisol:**
- Øker blodsukker (energi under stress)
- Antiinflammatorisk (reduserer betennelse)
- Immunsuppressiv (svekker immunforsvar midlertidig)
- Hjelper kroppen håndtere stress

**Regulering:**
- Hypothalamus frigjør CRH → Hypofyse frigjør ACTH → Binyrene produserer kortisol
- Kortisol hemmer CRH og ACTH (negativ tilbakekobling)

**Problem:**
- For mye ACTH → Cushings sykdom (høyt kortisol)
- Symptomer: Vektøkning, høyt blodtrykk, svake muskler

**3. Veksthormon (GH - Growth Hormone)**

**Funksjon:** Stimulerer vekst av ben, muskler og vev

**Hvordan:**
- Øker proteinproduksjon
- Stimulerer celledeling
- Øker fettforbrenning
- Stimulerer leveren til å produsere IGF-1 (Insulin-like Growth Factor)

**Effekter:**
- Vekst av skjelett (høyde)
- Muskelvekst
- Reparasjon av vev
- Øker blodsukker (ligner glukagon)

**Når frigjøres det:**
- Spesielt under dypeste søvn
- Derfor er søvn viktig for vekst hos barn

**Regulering:**
- Hypothalamus frigjør GHRH → Hypofyse frigjør GH
- Hypothalamus frigjør somatostatin → Hemmer GH
- IGF-1 fra leveren hemmer GH (negativ tilbakekobling)

**Problemer:**
- **For lite GH (barn):** Dvergvekst (kort voksen høyde)
- **For mye GH (barn):** Gigantisme (ekstremt høy)
- **For mye GH (voksne):** Akromegali (store hender, føtter, ansikt)

**Andre viktige hormoner fra hypofysen:**

**4. Follikkelstimulerende hormon (FSH) og Luteiniserende hormon (LH):**
- Styrer kjønnsorganene
- Kvinner: Eggmodning, menstruasjonssyklus, østrogen/progesteron
- Menn: Sædproduksjon, testosteron

**5. Prolaktin:**
- Stimulerer melkeproduksjon etter fødsel

**Fra bakre del (produsert i hypothalamus):**

**6. Oksytocin:**
- Rier under fødsel, melkeutskillelse, sosial binding

**7. Antidiuretisk hormon (ADH):**
- Reduserer vanntap via nyrene

**Oppsummering: Hvorfor "master"?**

Hypofysen styrer:
- **Skjoldbruskkjertelen** (TSH → T3/T4)
- **Binyrene** (ACTH → Kortisol)
- **Kjønnskjertler** (FSH/LH → Testosteron/Østrogen/Progesteron)
- **Vekst** (GH → IGF-1)
- **Brystkjertler** (Prolaktin → Melk)

**Uten hypofysen:**
- De fleste andre kjertler ville slutte å fungere normalt
- Derfor er den så viktig!

**Men hypofysen har også en "sjef":**
- **Hypothalamus** styrer hypofysen
- Så hypothalamus er "grand master"!`,
      hints: ['Hvilke andre kjertler styrer hypofysen?', 'TSH, ACTH, GH er gode eksempler'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan hypothalamus fungerer som en bro mellom nervesystemet og hormonsystemet.',
      solution: `**Hypothalamus - broen mellom nerve og hormon:**

**Plassering:** Under thalamus i hjernen, over hypofysen

**Størrelse:** Liten (størrelsen på en mandel), men ekstremt viktig

**Hovedfunksjon:** Kobler sammen nervesystemet (elektriske signaler) og hormonsystemet (kjemiske signaler)

**Hvordan fungerer broen?**

**1. Hypothalamus mottar informasjon fra nervesystemet**

**Input fra:**
- **Hjernen:** Følelser (frykt, glede), stressresponser
- **Sanseorganer:** Syn, lukt, smak, hørsel
- **Kroppsens reseptorer:**
  - Temperaturreseptorer (hud, blod)
  - Osmoreseptorer (vannbalanse)
  - Glukosereseptorer (blodsukker)
  - Blodtrykkreseptorer

**Eksempler:**
- Du ser en farlig situasjon → Visuell info til hypothalamus
- Du føler kulde → Temperaturinfo til hypothalamus
- Du er tørst → Osmolaritet registreres av hypothalamus

**2. Hypothalamus behandler informasjonen**

- Integrerer signaler fra mange kilder
- Bestemmer passende respons
- Velger mellom nervesystem- eller hormonrespons (eller begge)

**3. Hypothalamus sender ut signaler**

**Via nervesystemet (rask respons):**

Hypothalamus styrer det autonome nervesystemet direkte:

**a) Sympatisk nervesystem ("Kamp eller flukt"):**
- Aktiveres ved stress, fare
- Signaler sendes direkte til organer
- Binyremarg frigjør adrenalin og noradrenalin
- **Tidsramme:** Sekunder

**b) Parasympatisk nervesystem ("Hvile og fordøy"):**
- Aktiveres ved hvile, avslapning
- Signaler sendes til organer for å senke aktivitet
- **Tidsramme:** Sekunder

**Via hormonsystemet (langsom, varig respons):**

Hypothalamus produserer hormoner som styrer hypofysen:

**Frigjørende hormoner (releasing hormones):**
- **TRH** → Stimulerer TSH → Skjoldbruskkjertel (stoffskifte)
- **CRH** → Stimulerer ACTH → Binyrene (kortisol, langvarig stress)
- **GnRH** → Stimulerer FSH/LH → Kjønnsorganer (reproduksjon)
- **GHRH** → Stimulerer veksthormon → Vekst

**Hemmende hormoner:**
- **Somatostatin** → Hemmer veksthormon
- **Dopamin** → Hemmer prolaktin

**Hormoner lagret i bakre hypofyse:**
- **Oksytocin** → Rier, melkeutskillelse, sosial binding
- **ADH** → Vannbalanse

**Eksempler på broen i aksjon:**

**Eksempel 1: Stressrespons**

**Input (nervesystem):**
- Du ser en hund som løper mot deg
- Visuell info til hjerne → Hypothalamus

**Output:**

**a) Rask respons (nervesystem):**
- Hypothalamus aktiverer sympatisk nervesystem
- Binyremarg frigjør **adrenalin**
- **Effekter (sekunder):**
  - Hjertefrekvens øker
  - Pupiller utvider seg
  - Årvåkenhet øker

**b) Langsom respons (hormonsystem):**
- Hypothalamus frigjør **CRH**
- Hypofyse frigjør **ACTH**
- Binyrene frigjør **kortisol**
- **Effekter (minutter-timer):**
  - Blodsukker øker
  - Vedvarende energi
  - Immunforsvar svekkes midlertidig

**Eksempel 2: Temperaturregulering**

**Input (nervesystem):**
- Temperaturreseptorer registrerer høy temperatur

**Output:**

**a) Nervesystem:**
- Hypothalamus aktiverer svettekjertler (sympatisk)
- Signaler til blodårer i huden (vasodilatasjon)
- **Effekt:** Avkjøling (sekunder)

**b) Hormonsystem:**
- Hypothalamus kan justere tyroksinnivå (via TRH)
- **Effekt:** Reduserer stoffskifte (langvarig)

**Eksempel 3: Vannbalanse**

**Input (nervesystem):**
- Osmoreseptorer i hypothalamus registrerer høy osmolaritet (for lite vann)

**Output:**

**a) Nervesystem:**
- Hypothalamus skaper **tørste-følelse**
- Du drikker vann
- **Effekt:** Rask vannopptak

**b) Hormonsystem:**
- Hypothalamus frigjør **ADH** (via bakre hypofyse)
- ADH får nyrene til å ta opp mer vann
- **Effekt:** Mindre urinproduksjon, konsentrert urin

**Oppsummering: Hvorfor er hypothalamus en bro?**

**Nervesystem → Hypothalamus → Hormonsystem**

**1. Mottar nervesignaler:**
- Fra hjernen, sanseorganer, kroppsreseptorer

**2. Oversetter til hormonsignaler:**
- Produserer frigjørende hormoner
- Styrer hypofysen
- Hypofysen styrer andre kjertler

**3. Koordinerer begge systemer:**
- Rask respons (nervesystem)
- Langsom, varig respons (hormonsystem)
- **Begge systemer samarbeider for optimal respons**

**Uten hypothalamus:**
- Ingen kobling mellom nerve og hormon
- Kroppen kunne ikke koordinere raske og langsomme responser
- Homeostase ville kollapse

**Derfor er hypothalamus livsviktig!**`,
      hints: ['Hvordan mottar hypothalamus informasjon?', 'Hvordan sender hypothalamus signaler ut?', 'Nervesystem = rask, Hormonsystem = langsom'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'nat-vg1-4-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom steroidhormoner og peptidhormoner når det gjelder struktur, transport og virkemåte. Gi eksempler på hver.',
      solution: `**Steroidhormoner vs. Peptidhormoner:**

Hormoner deles inn i to hovedgrupper basert på kjemisk struktur. Dette påvirker hvordan de transporteres og virker.

**1. STEROIDHORMONER**

**Struktur:**
- Avledet fra **kolesterol** (fettmolekyl)
- Består av fire sammenkoblede karbonringer (steroidskjelett)
- Små, fettløselige molekyler

**Eksempler:**
- **Kortisol** (binyrene) - Stresshormon
- **Aldosteron** (binyrene) - Regulerer salt/vann
- **Testosteron** (testikler) - Mannlig kjønnshormon
- **Østrogen** (eggstokker) - Kvinnelig kjønnshormon
- **Progesteron** (eggstokker) - Svangerskapshormon

**Transport i blodet:**
- **Fettløselig** → Kan ikke løses fritt i blod (blod er vannbasert)
- Bindes til **transportproteiner** (carrier proteins)
- Eksempel: Kortisol bindes til kortikosteroid-bindende globulin (CBG)
- Kun fri (ubundet) hormon er aktivt

**Virkemåte:**

**Steg 1: Diffusjon inn i cellen**
- Hormon løsner fra transportprotein
- **Diffunderer gjennom cellemembranen** (fettløselig)
- Ingen reseptor på celleoverflaten nødvendig

**Steg 2: Binding til reseptor**
- Hormon binder seg til **reseptor inne i cellen**
- Reseptor kan være i:
  - **Cytoplasma** (f.eks. kortisol)
  - **Cellekjerne** (f.eks. tyroksinhormoner)

**Steg 3: Hormon-reseptor kompleks**
- Hormon + Reseptor = Aktiv kompleks
- Kompleks går inn i cellekjernen (hvis ikke allerede der)

**Steg 4: Genaktivering**
- Kompleks binder seg til **spesifikke DNA-sekvenser** (hormonal response elements)
- Aktiverer eller hemmer **transkripsjonsystemer**
- Gener skrus på eller av

**Steg 5: Proteinsyntese**
- **mRNA produseres** (transkripsjon)
- **Nye proteiner syntetiseres** (translasjon)
- Proteiner endrer cellens funksjon

**Tidsskala:**
- **Langsom respons:** Timer til dager
- **Langvarig effekt:** Dager (proteinene varer lenge)

**Fordeler:**
- Langvarig, vedvarende effekt
- Mange gener kan reguleres samtidig

**Ulemper:**
- Langsom respons (ikke for akutte situasjoner)

**2. PEPTIDHORMONER**

**Struktur:**
- Laget av **aminosyrer** (proteinbyggesteiner)
- Kan være:
  - Små peptider (3-50 aminosyrer) - Eksempel: Oksytocin (9 aminosyrer)
  - Store proteiner (50+ aminosyrer) - Eksempel: Veksthormon (191 aminosyrer)
- Vannløselige molekyler

**Eksempler:**
- **Insulin** og **Glukagon** (bukspyttkjertel) - Blodsukkerregulering
- **Veksthormon** (hypofyse) - Vekst
- **Oksytocin** (hypothalamus/hypofyse) - Fødsel, binding
- **ADH** (hypothalamus/hypofyse) - Vannbalanse
- **Adrenalin** og **Noradrenalin** (binyrene) - Stress
- **TSH, ACTH, FSH, LH** (hypofyse) - Styrer andre kjertler

**Merk:** Tyroksinhormoner (T3/T4) er aminosyreavledede, men virker mer som steroider

**Transport i blodet:**
- **Vannløselig** → Løses fritt i blodet
- Ingen transportproteiner nødvendig
- Alle molekyler er aktive

**Virkemåte:**

**Steg 1: Binding til reseptor på celleoverflaten**
- Hormon **kan ikke** passere gjennom cellemembranen (vannløselig, ikke fettløselig)
- Binder seg til **reseptor på celleoverflaten**
- Reseptoren er ofte en **G-proteinkoblet reseptor** eller **tyrosinkinasereseptor**

**Steg 2: Aktivering av sekundært budbringersystem**
- Reseptor aktiverer proteiner inne i cellen
- Vanlige sekundære budbringere:
  - **cAMP** (cyklisk AMP) - Vanligst
  - **Ca²⁺** (kalsium)
  - **IP3** (inositol trifosfat)
  - **DAG** (diacylglyserol)

**Steg 3: Signalkaskade**
- Sekundære budbringere aktiverer **proteinkinaser** (enzymer)
- Proteinkinaser aktiverer andre enzymer
- **Forsterkning:** Ett hormonmolekyl → Tusenvis av enzymreaksjoner

**Steg 4: Cellulær respons**
- Enzymer endrer cellens funksjon:
  - Åpner/lukker ionekanaler
  - Aktiverer/hemmer enzymer
  - Endrer metabolisme
  - I noen tilfeller: Genaktivering (langsom)

**Tidsskala:**
- **Rask respons:** Sekunder til minutter
- **Kort varighet:** Minutter til timer (hormonet brytes ned raskt)

**Fordeler:**
- Rask respons (godt for akutte situasjoner)
- Stor forsterkning (ett hormon → mange enzymer)

**Ulemper:**
- Kortvarig effekt (hormonet brytes ned raskt)

**SAMMENLIGNING:**

| Egenskap | Steroidhormoner | Peptidhormoner |
|----------|-----------------|----------------|
| **Struktur** | Kolesterol (fett) | Aminosyrer (protein) |
| **Løselighet** | Fettløselig | Vannløselig |
| **Transport** | Transportproteiner | Fritt i blod |
| **Cellemembran** | Passerer gjennom | Kan ikke passere |
| **Reseptor** | Inne i celle | På celleoverflate |
| **Mekanisme** | Genaktivering | Sekundært budbringersystem |
| **Hastighet** | Langsom (timer) | Rask (minutter) |
| **Varighet** | Lang (dager) | Kort (timer) |
| **Eksempel** | Kortisol, Testosteron | Insulin, Adrenalin |

**EKSEMPLER I PRAKSIS:**

**Eksempel 1: Kortisol (steroid) vs. Adrenalin (peptid) ved stress**

**Adrenalin (peptid):**
- Frigjøres fra binyremarg (sekunder)
- Binder seg til reseptor på celleoverflate
- Aktiverer cAMP-systemet
- **Effekt (sekunder):** Økt hjertefrekvens, økt årvåkenhet
- **Varighet:** Minutter

**Kortisol (steroid):**
- Frigjøres fra binyrebark (minutter)
- Diffunderer inn i celler
- Aktiverer gener
- **Effekt (timer):** Økt blodsukker, antiinflammatorisk
- **Varighet:** Dager

**Begge trengs:** Adrenalin for øyeblikkelig respons, kortisol for vedvarende respons

**Eksempel 2: Testosteron (steroid) i puberteten**

- Diffunderer inn i celler
- Aktiverer gener for mannlige egenskaper
- **Effekter (måneder-år):**
  - Dyp stemme
  - Skjeggvekst
  - Muskelvekst
- **Langvarig:** Effektene varer hele livet

**Dette krever steroidhormon** fordi endringene er permanente (genaktivering)

**Hvorfor to typer?**

**Peptidhormoner:**
- For raske, akutte responser
- Eksempel: Blodsukkerregulering, stressrespons

**Steroidhormoner:**
- For langsomme, langvarige endringer
- Eksempel: Vekst, pubertet, vedvarende stressrespons

**Sammen gir de optimal regulering av kroppen!**`,
      hints: ['Fettløselig vs. vannløselig', 'Reseptor inne i celle vs. på celleoverflate', 'Genaktivering vs. sekundært budbringersystem'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

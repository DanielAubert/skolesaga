/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Fysikk 2 VG3 – Del 3: Relativitetsteori
 *
 * Kapittel 6.1–6.5: Spesiell og generell relativitetsteori
 * Dekker LK20-kompetansemål for fysikk 2 (FYS02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Spesiell relativitetsteori – postulater
// ============================================================================

export const CHAPTER_FYSIKK2_6_1: TextbookChapter = {
  id: 'fysikk2-6-1',
  courseId: 'fys2',
  chapterNumber: '6.1',
  title: 'Spesiell relativitetsteori – postulater',
  description:
    'Historisk bakgrunn for relativitetsteorien, Michelson-Morley-eksperimentet, Einsteins to postulater, inertielle referansesystemer og relativitet av samtidighet.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for Einsteins postulater i spesiell relativitetsteori',
    'drøfte hvorfor klassisk mekanikk ikke holder ved høye hastigheter',
    'forklare begrepet inertielt referansesystem',
    'diskutere relativitet av samtidighet',
  ],
  content: [
    // ---- Introduksjon ----
    {
      id: 'fys2-6-1-intro',
      type: 'text',
      content: `# Spesiell relativitetsteori – postulater

Relativitetsteorien er en av de mest banebrytende teoriene i fysikkens historie. Den endret fullstendig vår forståelse av rom, tid, masse og energi. I dette kapittelet skal vi se på den historiske bakgrunnen for teorien og forstå de to grunnleggende postulatene som Albert Einstein formulerte i 1905.

## Hvorfor trenger vi relativitetsteori?

I hverdagen fungerer Newtons mekanikk utmerket. Når vi beregner bevegelsen til en bil, en ball eller et fly, gir Newtons lover svært nøyaktige resultater. Men hva skjer når objekter beveger seg med hastigheter som nærmer seg lysets hastighet?

Mot slutten av 1800-tallet begynte fysikere å oppdage at de klassiske lovene ikke alltid stemte. Spesielt dukket det opp problemer knyttet til lys og elektromagnetisme. Maxwells ligninger – som beskriver elektromagnetiske bølger – forutsa at lyset har en bestemt hastighet $c \\approx 3{,}00 \\times 10^8 \\text{ m/s}$, men de sa ingenting om *i forhold til hva* denne hastigheten gjaldt.`,
    },

    // ---- Eterproblemet ----
    {
      id: 'fys2-6-1-eter',
      type: 'text',
      content: `## Eterproblemet

På 1800-tallet antok fysikerne at lys – i likhet med lyd – trengte et medium å forplante seg gjennom. Lyd forplanter seg gjennom luft, vannbølger gjennom vann, og lys måtte forplante seg gjennom noe som ble kalt **eteren** (eller luminiferous aether).

Eteren ble tenkt som et usynlig stoff som fylte hele universet. Lysets hastighet $c$ ble antatt å være hastigheten i forhold til denne eteren.

### Problemet med eteren

Hvis eteren eksisterte, burde Jorden bevege seg *gjennom* den på sin bane rundt Solen (med en hastighet på ca. $30 \\text{ km/s}$). Dette ville skape en «etervind», akkurat som man kjenner vind når man kjører i åpen bil. En slik etervind skulle påvirke lysets målte hastighet:

- Lys som beveger seg **med** etervinden burde virke raskere
- Lys som beveger seg **mot** etervinden burde virke tregere
- Lys som beveger seg **på tvers** av etervinden burde ha en mellomliggende hastighet

Denne forskjellen kunne i prinsippet måles, og nettopp dette forsøkte Michelson og Morley å gjøre.`,
    },

    // ---- Michelson-Morley ----
    {
      id: 'fys2-6-1-michelson',
      type: 'text',
      content: `## Michelson-Morley-eksperimentet (1887)

Albert A. Michelson og Edward W. Morley utførte i 1887 et av de mest berømte eksperimentene i fysikkens historie. Målet var å påvise eterens eksistens ved å måle forskjellen i lysets hastighet i ulike retninger.

### Eksperimentets oppbygging

Michelson konstruerte et instrument kalt et **interferometer**. Prinsippet var enkelt, men gjennomføringen krevde ekstrem presisjon:

1. En lysstråle ble delt i to ved et halvspeil
2. De to strålene ble sendt i retninger vinkelrett på hverandre
3. Strålene ble reflektert tilbake av speil og møttes igjen
4. Hvis den ene strålen brukte lengre tid (på grunn av etervinden), ville det oppstå et **interferensmønster**

Basert på Jordens hastighet rundt Solen ($v \\approx 30 \\text{ km/s}$) beregnet de at forskjellen i reisetid burde gi et målbart interferensskift.

### Resultatet

Resultatet var overraskende: **Ingen forskjell ble påvist.** Lyset bevegde seg med nøyaktig samme hastighet uansett retning. Eksperimentet ble gjentatt mange ganger, til ulike årstider (for å ta hensyn til ulike retninger av Jordens bevegelse), men resultatet var alltid det samme.

Dette «nullresultatet» var en av fysikkens store gåter. Eteren – slik den var tenkt – fantes ikke. Men hvis lys ikke trengte et medium, hva bestemte da lysets hastighet?`,
    },

    {
      id: 'fys2-6-1-michelson-note',
      type: 'note',
      title: 'Historisk kontekst',
      content: `Michelson fikk Nobelprisen i fysikk i 1907 for sitt arbeid med optiske presisjonsinstrumenter. Ironisk nok var det mest banebrytende ved hans arbeid det eksperimentet som **ikke** ga det forventede resultatet.

Flere fysikere forsøkte å forklare nullresultatet uten å forkaste eteren. Hendrik Lorentz og George FitzGerald foreslo uavhengig at objekter som beveger seg gjennom eteren fysisk *kontraherer* i bevegelsesretningen. Denne «Lorentz-FitzGerald-kontraksjonen» ga riktige matematiske resultater, men manglet en fysisk forklaring. Det var Einstein som ga den elegante løsningen.`,
    },

    // ---- Galileis relativitetsprinsipp ----
    {
      id: 'fys2-6-1-galilei',
      type: 'text',
      content: `## Galileis relativitetsprinsipp

Før vi ser på Einsteins postulater, la oss repetere et viktig konsept fra klassisk mekanikk: **Galileis relativitetsprinsipp**.

Galileo Galilei innså allerede på 1600-tallet at bevegelse er relativ. Hvis du sitter i en jevnt gående båt uten vinduer, kan du ikke ved noe mekanisk eksperiment avgjøre om båten står stille eller beveger seg med konstant hastighet.

### Inertielle referansesystemer

Et **inertielt referansesystem** (også kalt treghetssystem) er et referansesystem der Newtons første lov gjelder: et legeme i ro forblir i ro, og et legeme i bevegelse fortsetter å bevege seg med konstant hastighet med mindre det påvirkes av en kraft.

Eksempler:
- Et rom som står stille på jordoverflaten (tilnærmet)
- En togvogn som kjører med jevn hastighet i rett linje
- Et romskip som driver uten motorer i fritt verdensrom

**Ikke** inertielle referansesystemer:
- En bil som akselererer
- En karusell som roterer
- En heis som bremser

Galileis relativitetsprinsipp sier at **mekanikkens lover er de samme i alle inertielle referansesystemer**. Det finnes ingen foretrukket eller «absolutt» referanseramme for mekanikk.`,
    },

    {
      id: 'fys2-6-1-def-inertiell',
      type: 'definition',
      title: 'Inertielt referansesystem',
      content: `Et **inertielt referansesystem** er et referansesystem der et legeme som ikke påvirkes av noen netto kraft enten er i ro eller beveger seg med konstant hastighet langs en rett linje. Newtons lover gjelder i sin enkleste form i slike systemer.

Alle inertielle referansesystemer beveger seg med konstant hastighet i forhold til hverandre.`,
    },

    // ---- Galileitransformasjonen ----
    {
      id: 'fys2-6-1-galileitransformasjon',
      type: 'text',
      content: `## Galileitransformasjonen

Galileitransformasjonen beskriver hvordan vi oversetter posisjoner og hastigheter mellom to inertielle referansesystemer i klassisk mekanikk.

Tenk deg to referansesystemer $S$ og $S'$, der $S'$ beveger seg med konstant hastighet $v$ langs $x$-aksen i forhold til $S$. Ved tidspunktet $t = 0$ er origo i begge systemer på samme sted.

Da gjelder:

$$x' = x - vt$$
$$y' = y$$
$$z' = z$$
$$t' = t$$

Merk spesielt den siste ligningen: **tiden er den samme i begge systemer**. I klassisk mekanikk er tid absolutt – alle observatører er enige om hva klokken viser.

### Klassisk addisjon av hastigheter

Hvis et objekt beveger seg med hastighet $u'$ i system $S'$, er hastigheten målt i system $S$:

$$u = u' + v$$

**Eksempel:** Hvis du går med 5 km/t fremover i et tog som kjører med 100 km/t, ser en observatør ved sporene at du beveger deg med $5 + 100 = 105$ km/t.`,
    },

    {
      id: 'fys2-6-1-galilei-problem',
      type: 'text',
      content: `### Problemet med Galileitransformasjonen og lys

Her oppstår problemet: Ifølge Maxwells ligninger har lys hastigheten $c$ i vakuum. Hvis vi anvender Galileitransformasjonen, burde lysets hastighet avhenge av referansesystemet:

- En observatør i ro måler lyshastigheten til $c$
- En observatør som beveger seg med hastighet $v$ i samme retning som lyset, burde måle lyshastigheten til $c - v$

Men Michelson-Morley-eksperimentet viste at dette **ikke** skjer. Lysets hastighet er den samme for alle observatører, uansett deres bevegelse.

Galileitransformasjonen – og med den den klassiske addisjonen av hastigheter – kan altså **ikke** være helt korrekt. Den fungerer utmerket for lave hastigheter (mye lavere enn $c$), men bryter sammen når vi nærmer oss lyshastigheten.

Det var dette problemet Einstein løste med sin spesielle relativitetsteori.`,
    },

    // ---- Einsteins postulater ----
    {
      id: 'fys2-6-1-einstein-intro',
      type: 'text',
      content: `## Einsteins revolusjon (1905)

I 1905 publiserte den 26 år gamle Albert Einstein artikkelen «Zur Elektrodynamik bewegter Körper» (Om elektrodynamikken til legemer i bevegelse). I stedet for å forsøke å redde eteren eller modifisere Maxwells ligninger, tok Einstein et radikalt steg: han endret vår forståelse av rom og tid selv.

Einsteins tilnærming var elegant i sin enkelhet. Han startet med bare **to postulater** – to grunnleggende antakelser – og utledet fra disse en helt ny forståelse av virkeligheten.`,
    },

    {
      id: 'fys2-6-1-postulat1',
      type: 'theorem',
      title: 'Einsteins første postulat (relativitetsprinsippet)',
      content: `**Alle naturlover har samme form i alle inertielle referansesystemer.**

Dette er en utvidelse av Galileis relativitetsprinsipp. Galilei sa at *mekanikkens* lover er like i alle inertielle systemer. Einstein utvidet dette til å gjelde *alle* naturlover – inkludert elektromagnetismens lover (Maxwells ligninger).

Det finnes ingen eksperimentell metode for å avgjøre om et inertielt referansesystem er «i ro» eller «i bevegelse». Disse begrepene har bare mening i forhold til noe annet.`,
    },

    {
      id: 'fys2-6-1-postulat2',
      type: 'theorem',
      title: 'Einsteins andre postulat (lyshastighetspostulatet)',
      content: `**Lysets hastighet i vakuum er den samme i alle inertielle referansesystemer, uavhengig av lysets kilde eller observatørens bevegelse.**

$$c = 3{,}00 \\times 10^8 \\text{ m/s}$$

Dette betyr at alle observatører – uansett hvordan de beveger seg i forhold til hverandre – vil måle nøyaktig den samme lyshastigheten. Dette gjelder uavhengig av om lyskilden beveger seg, om observatøren beveger seg, eller begge deler.`,
    },

    {
      id: 'fys2-6-1-postulat-diskusjon',
      type: 'text',
      content: `### Konsekvensene av postulatene

Disse to postulatene kan virke enkle, men konsekvensene er dramatiske og motintuitive:

1. **Tid er relativ**: To hendelser som er samtidige for én observatør, trenger ikke være samtidige for en annen
2. **Lengde er relativ**: Et objekts lengde avhenger av hvem som måler
3. **Masse er relativ**: Et objekts masse øker med hastigheten
4. **Masse og energi er ekvivalent**: $E = mc^2$

Alle disse konsekvensene følger logisk fra de to postulatene. Vi skal utforske dem i de neste kapitlene.

### Hvorfor er dette kontraintuitivt?

Grunnen til at relativitetsteoriens resultater virker merkelige, er at vi aldri opplever dem i hverdagen. Effektene blir merkbare først ved hastigheter som er en vesentlig andel av lyshastigheten. Selv det raskeste menneskeskapte fartøyet (Parker Solar Probe, ca. $190 \\text{ km/s}$) har bare hastighet $0{,}063\\%$ av $c$. De relativistiske effektene ved denne hastigheten er umåtelig små.`,
    },

    {
      id: 'fys2-6-1-warning-addisjon',
      type: 'warning',
      title: 'Klassisk addisjonsformel holder ikke for lys',
      content: `Det er fristende å tenke at hvis et romskip beveger seg med $0{,}5c$ og sender en lysstråle fremover, burde en observatør på Jorden måle lysets hastighet til $c + 0{,}5c = 1{,}5c$. Men dette er **feil**.

Ifølge Einsteins andre postulat måler observatøren på Jorden lyshastigheten til nøyaktig $c$, uansett romskipets hastighet. Den klassiske addisjonsformelen $u = u' + v$ er bare en tilnærming som gjelder for hastigheter mye lavere enn $c$.

Den korrekte relativistiske formelen for addisjon av hastigheter er:

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}}$$

Denne gir $u = c$ dersom enten $u' = c$ eller $v = c$, noe som bekrefter at lys alltid beveger seg med $c$.`,
    },

    // ---- Relativitet av samtidighet ----
    {
      id: 'fys2-6-1-samtidighet',
      type: 'text',
      content: `## Relativitet av samtidighet

En av de mest overraskende konsekvensene av Einsteins postulater er at **samtidighet er relativ**. To hendelser som skjer på samme tidspunkt for én observatør, kan skje på ulike tidspunkt for en annen observatør.

### Einsteins togeksperiment

Einstein illustrerte dette med et berømt tankeeksperiment:

Tenk deg et tog som kjører forbi en perrong med konstant hastighet $v$. I midten av togvognen er det en lyskilde. Lyset sendes samtidig mot begge ender av vognen. En passasjer sitter i midten av vognen.

**Passasjerens perspektiv (på toget):**
Lyset reiser like langt til begge ender og bruker like lang tid. De to lysglimt-hendelsene (lys treffer front og bakvegg) skjer **samtidig**.

**Observatørens perspektiv (på perrongen):**
Mens lyset beveger seg, har toget beveget seg fremover. Bakveggen har kommet lyset i møte, mens frontveggen har beveget seg bort fra lyset. Siden lysets hastighet er $c$ for begge observatører (andre postulat), vil lyset nå **bakveggen først**.

Begge observatørene har rett! Hendelsene som er samtidige i togets referansesystem er **ikke** samtidige sett fra perrongen.`,
    },

    {
      id: 'fys2-6-1-def-samtidighet',
      type: 'definition',
      title: 'Relativitet av samtidighet',
      content: `To hendelser som skjer på forskjellige steder og som er samtidige i ett inertielt referansesystem, er generelt **ikke** samtidige i et annet inertielt referansesystem som beveger seg i forhold til det første.

Kun hendelser som skjer på **samme sted** og **samme tid** er samtidige for alle observatører. Samtidige hendelser på ulike steder er referansesystemavhengige.`,
    },

    {
      id: 'fys2-6-1-note-tid',
      type: 'note',
      title: 'Absolutt og relativ tid',
      content: `I Newtons mekanikk er tiden **absolutt** – den tikker like raskt for alle. Galileitransformasjonen uttrykker dette med $t' = t$.

I Einsteins relativitetsteori er tiden **relativ** – den avhenger av referansesystemet. Ulike observatører kan være uenige om:
- Rekkefølgen til hendelser (hvilken skjedde først)
- Tidsintervallet mellom hendelser
- Om hendelser er samtidige

Det som alle observatører er enige om, er **årsaksrekkefølgen**: Hvis hendelse A forårsaker hendelse B, vil alle observatører se at A skjer før B. Relativitetsteorien bevarer kausaliteten.`,
    },

    // ---- Eksempler ----
    {
      id: 'fys2-6-1-eks-addisjon',
      type: 'example',
      title: 'Eksempel: Relativistisk addisjon av hastigheter',
      problem: `Et romskip beveger seg med hastighet $v = 0{,}80c$ i forhold til Jorden. Romskipet sender en sonde fremover med hastighet $u' = 0{,}60c$ i forhold til romskipet.

a) Hva er sondens hastighet i forhold til Jorden ifølge klassisk fysikk?
b) Hva er sondens hastighet i forhold til Jorden ifølge relativistisk fysikk?`,
      solution: `**a) Klassisk beregning:**

$$u = u' + v = 0{,}60c + 0{,}80c = 1{,}40c$$

Dette gir en hastighet **over lyshastigheten**, noe som bryter med relativitetsteorien.

**b) Relativistisk beregning:**

Vi bruker den relativistiske addisjonsformelen:

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}}$$

Setter inn verdier:

$$u = \\frac{0{,}60c + 0{,}80c}{1 + \\frac{(0{,}60c)(0{,}80c)}{c^2}}$$

$$u = \\frac{1{,}40c}{1 + 0{,}48} = \\frac{1{,}40c}{1{,}48}$$

$$u = 0{,}946c \\approx 0{,}95c$$

Sondens hastighet i forhold til Jorden er $0{,}95c$, som er **mindre enn $c$**, i samsvar med relativitetsteorien. Nevneren $1 + u'v/c^2$ sørger alltid for at resultatet ikke overstiger $c$.`,
    },

    {
      id: 'fys2-6-1-eks-lys',
      type: 'example',
      title: 'Eksempel: Lysstråle fra romskip',
      problem: `Et romskip beveger seg med hastighet $v = 0{,}90c$ mot Jorden. Romskipet sender en lysstråle ($u' = c$) mot Jorden. Hva er lysstråles hastighet målt fra Jorden?`,
      solution: `Vi bruker den relativistiske addisjonsformelen:

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}} = \\frac{c + 0{,}90c}{1 + \\frac{c \\cdot 0{,}90c}{c^2}}$$

$$u = \\frac{1{,}90c}{1 + 0{,}90} = \\frac{1{,}90c}{1{,}90} = c$$

Lysstrålen har hastigheten $c$ uansett romskipets hastighet. Dette er nettopp det Einsteins andre postulat sier, og addisjonsformelen er konstruert for å respektere dette.

**Merk:** Uansett hvilken verdi vi setter inn for $v$ (så lenge $|v| < c$), vil $u = c$ når $u' = c$. Prøv gjerne selv!`,
    },

    {
      id: 'fys2-6-1-eks-galilei',
      type: 'example',
      title: 'Eksempel: Når er klassisk mekanikk god nok?',
      problem: `En passasjer kaster en ball med hastighet $u' = 20 \\text{ m/s}$ fremover i et tog som kjører med $v = 30 \\text{ m/s}$.

a) Beregn ballens hastighet i forhold til bakken klassisk ($u = u' + v$).
b) Beregn ballens hastighet relativistisk.
c) Finn prosentavviket mellom svarene.`,
      solution: `**a) Klassisk:**

$$u = u' + v = 20 + 30 = 50 \\text{ m/s}$$

**b) Relativistisk:**

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}} = \\frac{50}{1 + \\frac{20 \\cdot 30}{(3 \\times 10^8)^2}}$$

$$u = \\frac{50}{1 + \\frac{600}{9 \\times 10^{16}}} = \\frac{50}{1 + 6{,}67 \\times 10^{-15}}$$

$$u \\approx 50{,}000\\,000\\,000\\,000\\,0 \\text{ m/s}$$

**c) Prosentavvik:**

Avviket er ca. $6{,}67 \\times 10^{-13}\\%$, som er fullstendig umålbart. For hverdagshastigheter er den klassiske formelen helt tilstrekkelig.

**Konklusjon:** Relativistiske korreksjonsledd $\\frac{u'v}{c^2}$ er neglisjerbare når $u' \\ll c$ og $v \\ll c$.`,
    },

    {
      id: 'fys2-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Eteren** ble antatt å være mediet lys forplantet seg i, men Michelson-Morley-eksperimentet viste at den ikke eksisterer
- **Galileitransformasjonen** ($x' = x - vt$, $t' = t$) fungerer for lave hastigheter, men ikke nær lyshastigheten
- **Einsteins første postulat**: Alle naturlover har samme form i alle inertielle referansesystemer
- **Einsteins andre postulat**: Lysets hastighet i vakuum er $c$ for alle inertielle observatører
- **Samtidighet er relativ**: To hendelser som er samtidige i ett referansesystem, trenger ikke være det i et annet
- Den relativistiske addisjonsformelen $u = \\frac{u' + v}{1 + u'v/c^2}$ erstatter $u = u' + v$`,
    },
  ],

  exercises: [
    {
      id: 'fys2-6-1-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hva som menes med et inertielt referansesystem. Gi to eksempler på inertielle og to eksempler på ikke-inertielle referansesystemer.`,
      hints: [
        'Tenk på Newtons første lov: gjelder den i referansesystemet?',
        'Er det noen nettokraft som virker på selve referansesystemet?',
      ],
      solution: `Et inertielt referansesystem er et referansesystem der Newtons første lov gjelder. Et legeme som ikke påvirkes av noen kraft, forblir i ro eller beveger seg med konstant hastighet.

**Inertielle referansesystemer:**
1. Et laboratorium på jordoverflaten (tilnærmet, fordi Jordens rotasjon er langsom)
2. Et romskip som driver uten motorer i det ytre verdensrom

**Ikke-inertielle referansesystemer:**
1. En bil som akselererer – en ball på dashbordet ville rulle bakover uten at noen kraft dyttes på den
2. En karusell – objekter opplever «sentrifugalkraft» som er en fiktiv kraft`,
    },
    {
      id: 'fys2-6-1-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Formuler Einsteins to postulater for spesiell relativitetsteori med egne ord.`,
      hints: [
        'Det første postulatet handler om naturlover og referansesystemer.',
        'Det andre postulatet handler om lysets hastighet.',
      ],
      solution: `**Første postulat (relativitetsprinsippet):** Alle naturlover – inkludert fysikkens, kjemiens og elektromagnetismens lover – er nøyaktig de samme for alle observatører som befinner seg i inertielle referansesystemer. Det finnes ingen eksperimentell metode som kan avgjøre om et inertielt system er i absolutt ro eller i jevn bevegelse.

**Andre postulat (lyshastighetspostulatet):** Lysets hastighet i vakuum har alltid verdien $c \\approx 3{,}00 \\times 10^8$ m/s, uansett bevegelsen til lyskilden eller observatøren. Alle inertielle observatører måler den samme lyshastigheten.`,
    },
    {
      id: 'fys2-6-1-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar hvorfor Michelson-Morley-eksperimentet var så viktig for utviklingen av relativitetsteorien. Hva var det forventede resultatet, og hva var det faktiske resultatet?`,
      hints: [
        'Hva forsøkte de å påvise?',
        'Hva betyr det at resultatet var et «nullresultat»?',
      ],
      solution: `Michelson og Morley forsøkte å påvise eksistensen av eteren – mediet lys antatt å forplante seg gjennom – ved å måle forskjeller i lysets hastighet i ulike retninger.

**Forventet resultat:** Siden Jorden beveger seg med ca. 30 km/s i sin bane rundt Solen, burde lyset ha ulik hastighet avhengig av om det beveger seg med eller mot Jordens bevegelsesretning gjennom eteren. Interferometeret burde vise et tydelig interferensskift.

**Faktisk resultat:** Ingen forskjell ble målt. Lysets hastighet var den samme i alle retninger, uansett årstid.

**Betydning:** Resultatet viste at eteren ikke eksisterer og at lysets hastighet er uavhengig av observatørens bevegelse. Dette var en av de sentrale observasjonene som Einstein baserte sin spesielle relativitetsteori på.`,
    },
    {
      id: 'fys2-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Et romskip beveger seg med hastighet $v = 0{,}70c$ bort fra Jorden. Det sender en radiosignal (som beveger seg med lyshastigheten) tilbake mot Jorden.

a) Hva er radiosignalets hastighet målt fra Jorden?
b) Bruk den relativistiske addisjonsformelen til å vise dette.`,
      hints: [
        'Radiosignalet har hastighet $u\' = -c$ i romskipets system (det beveger seg bakover).',
        'Pass på fortegnene i addisjonsformelen.',
      ],
      solution: `**a)** Ifølge Einsteins andre postulat er lyshastigheten $c$ i alle inertielle referansesystemer. Radiosignalet måles til hastigheten $c$ fra Jorden.

**b)** Romskipet beveger seg med $v = 0{,}70c$ bort fra Jorden (positiv retning). Radiosignalet sendes mot Jorden, altså med $u' = -c$ i romskipets referansesystem.

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}} = \\frac{-c + 0{,}70c}{1 + \\frac{(-c)(0{,}70c)}{c^2}}$$

$$u = \\frac{-0{,}30c}{1 - 0{,}70} = \\frac{-0{,}30c}{0{,}30} = -c$$

Radiosignalet beveger seg med hastighet $c$ mot Jorden (negativt fortegn betyr retningen mot Jorden), nøyaktig som postulatet forutsier.`,
    },
    {
      id: 'fys2-6-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `To romskip beveger seg mot hverandre, begge med hastighet $0{,}60c$ i forhold til en romstasjon.

a) Hva er det ene romskipets hastighet i forhold til det andre, beregnet klassisk?
b) Hva er den korrekte relativistiske hastigheten?`,
      hints: [
        'Klassisk: $u = u\' + v$',
        'Relativistisk: $u = \\frac{u\' + v}{1 + u\'v/c^2}$',
        'Tenk deg at du sitter i det ene romskipet. Det andre nærmer seg med $u\' = 0{,}60c$, mens romstasjonen beveger seg med $v = 0{,}60c$ i forhold til deg.',
      ],
      solution: `La oss si at romskip A beveger seg mot høyre med $0{,}60c$ og romskip B beveger seg mot venstre med $0{,}60c$, begge i forhold til romstasjonen.

Fra romskip A sitt perspektiv beveger romstasjonen seg med $v = 0{,}60c$ mot venstre, og i romstasjonens system beveger romskip B seg med $u' = 0{,}60c$ mot venstre.

**a) Klassisk:**

$$u = u' + v = 0{,}60c + 0{,}60c = 1{,}20c$$

Dette gir en hastighet over lyshastigheten!

**b) Relativistisk:**

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}} = \\frac{0{,}60c + 0{,}60c}{1 + \\frac{(0{,}60c)(0{,}60c)}{c^2}}$$

$$u = \\frac{1{,}20c}{1 + 0{,}36} = \\frac{1{,}20c}{1{,}36} = 0{,}882c$$

Det ene romskipet ser det andre nærme seg med hastighet $0{,}882c$, som er godt under lyshastigheten.`,
    },
    {
      id: 'fys2-6-1-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar Einsteins togeksperiment for relativitet av samtidighet. Et tog med lengde $L = 200 \\text{ m}$ (i togets referansesystem) kjører med hastighet $v = 0{,}80c$ forbi en perrong. I midten av toget sendes et lysglimt mot begge ender.

a) Er hendelsene (lyset treffer front og bakvegg) samtidige for passasjeren?
b) Er de samtidige for observatøren på perrongen? Begrunn svaret.`,
      hints: [
        'Tenk på det andre postulatet: Lyshastigheten er $c$ for begge observatører.',
        'I togets system beveger ikke veggen seg, men i perrongens system beveger bakveggen seg mot lyset.',
      ],
      solution: `**a)** I togets referansesystem er passasjeren i midten, og lyset beveger seg med hastighet $c$ i begge retninger. Avstanden til begge veggene er $L/2 = 100$ m. Tiden for lyset å nå begge vegger er:

$$t = \\frac{L/2}{c} = \\frac{100}{3{,}00 \\times 10^8} = 3{,}33 \\times 10^{-7} \\text{ s}$$

Ja, hendelsene er **samtidige** for passasjeren.

**b)** I perrongens referansesystem beveger toget seg med $v = 0{,}80c$. Lyset beveger seg med $c$ i begge retninger (andre postulat). Mens lyset beveger seg:
- Bakveggen beveger seg **mot** lyset, så de møtes raskere
- Frontveggen beveger seg **bort fra** lyset, så det tar lenger tid

Lyset treffer bakveggen **før** frontveggen. Hendelsene er **ikke samtidige** for observatøren på perrongen.

Begge observatørene har rett innenfor sitt eget referansesystem. Samtidighet er relativ!`,
    },
    {
      id: 'fys2-6-1-ex7',
      type: 'classic',
      difficulty: 'medium',
      task: `Vis at den relativistiske addisjonsformelen $u = \\frac{u' + v}{1 + u'v/c^2}$ går over til den klassiske formelen $u = u' + v$ når hastighetene er mye mindre enn $c$.`,
      hints: [
        'Hva skjer med leddet $u\'v/c^2$ når $u\' \\ll c$ og $v \\ll c$?',
      ],
      solution: `Når $u' \\ll c$ og $v \\ll c$, blir produktet $u'v$ mye mindre enn $c^2$:

$$\\frac{u'v}{c^2} \\ll 1$$

Da blir nevneren i den relativistiske formelen:

$$1 + \\frac{u'v}{c^2} \\approx 1$$

Og formelen forenkles til:

$$u = \\frac{u' + v}{1 + u'v/c^2} \\approx \\frac{u' + v}{1} = u' + v$$

**Eksempel:** For $u' = 100$ m/s og $v = 200$ m/s:

$$\\frac{u'v}{c^2} = \\frac{100 \\cdot 200}{(3 \\times 10^8)^2} = \\frac{2 \\times 10^4}{9 \\times 10^{16}} \\approx 2{,}2 \\times 10^{-13}$$

Korreksjonsleddet er neglisjerbart lite, og den klassiske formelen gir i praksis eksakt samme svar.

Dette er et eksempel på **korrespondanseprinsippet**: ny fysikk må gi samme resultater som gammel fysikk i de tilfellene der den gamle fysikken er kjent for å fungere.`,
    },
    {
      id: 'fys2-6-1-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et romskip $A$ beveger seg med hastighet $0{,}50c$ i forhold til Jorden. Romskip $A$ sender ut et annet romskip $B$ som beveger seg med $0{,}50c$ i forhold til $A$. Romskip $B$ sender igjen ut et romskip $C$ som beveger seg med $0{,}50c$ i forhold til $B$.

Hva er romskip $C$s hastighet i forhold til Jorden?`,
      hints: [
        'Du må bruke addisjonsformelen to ganger – først for å finne Bs hastighet i forhold til Jorden, deretter for å finne Cs hastighet.',
        'Bruk resultatet fra første addisjon som $v$ i den andre.',
      ],
      solution: `**Steg 1: Finn hastigheten til romskip B i forhold til Jorden**

$u'_B = 0{,}50c$ (hastighet til B i forhold til A), $v_A = 0{,}50c$ (hastighet til A i forhold til Jorden)

$$v_B = \\frac{u'_B + v_A}{1 + \\frac{u'_B \\cdot v_A}{c^2}} = \\frac{0{,}50c + 0{,}50c}{1 + \\frac{(0{,}50c)(0{,}50c)}{c^2}}$$

$$v_B = \\frac{1{,}00c}{1 + 0{,}25} = \\frac{1{,}00c}{1{,}25} = 0{,}80c$$

**Steg 2: Finn hastigheten til romskip C i forhold til Jorden**

$u'_C = 0{,}50c$ (hastighet til C i forhold til B), $v_B = 0{,}80c$ (hastighet til B i forhold til Jorden)

$$v_C = \\frac{u'_C + v_B}{1 + \\frac{u'_C \\cdot v_B}{c^2}} = \\frac{0{,}50c + 0{,}80c}{1 + \\frac{(0{,}50c)(0{,}80c)}{c^2}}$$

$$v_C = \\frac{1{,}30c}{1 + 0{,}40} = \\frac{1{,}30c}{1{,}40} = 0{,}929c$$

**Svar:** Romskip C beveger seg med $v_C \\approx 0{,}93c$ i forhold til Jorden.

**Kommentar:** Klassisk ville svaret blitt $3 \\times 0{,}50c = 1{,}50c$, men relativistisk forblir resultatet alltid under $c$. Uansett hvor mange ganger vi adderer, kan vi aldri nå lyshastigheten.`,
    },
    {
      id: 'fys2-6-1-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Vis at dersom $u' = c$ i den relativistiske addisjonsformelen, så er $u = c$ uansett verdien av $v$ (forutsatt $|v| < c$). Dette beviser at ingen observatør kan måle en annen lyshastighet enn $c$.`,
      hints: [
        'Sett $u\' = c$ inn i formelen og forenkle.',
        'Faktoriser telleren og nevneren.',
      ],
      solution: `Vi setter $u' = c$ inn i den relativistiske addisjonsformelen:

$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}} = \\frac{c + v}{1 + \\frac{cv}{c^2}}$$

Forenkler nevneren:

$$u = \\frac{c + v}{1 + \\frac{v}{c}}$$

Skriver nevneren med felles nevner:

$$u = \\frac{c + v}{\\frac{c + v}{c}}$$

Dividerer brøk med brøk:

$$u = (c + v) \\cdot \\frac{c}{c + v} = c$$

Vi ser at $(c + v)$ kansellerer, og vi får $u = c$, uansett verdien av $v$.

**Konklusjon:** Relativistisk addisjonsformel garanterer at lyshastigheten er invariant (uforandret) i alle inertielle referansesystemer. Dette er Einsteins andre postulat innebygd i matematikken.`,
    },
    {
      id: 'fys2-6-1-ex10',
      type: 'classic',
      difficulty: 'lett',
      task: `I hverdagslivet merker vi ingenting til relativistiske effekter. Beregn korreksjonsfaktoren $\\frac{u'v}{c^2}$ for følgende situasjoner:

a) En bil ($v = 30 \\text{ m/s}$) som kaster en ball fremover ($u' = 20 \\text{ m/s}$)
b) Et jagerfly ($v = 700 \\text{ m/s}$) som avfyrer et missil ($u' = 1000 \\text{ m/s}$)
c) En partikkel i en akselerator ($v = 0{,}99c$) som sender ut en fotoner ($u' = c$)`,
      hints: [
        'Bruk $c = 3{,}00 \\times 10^8$ m/s',
        'For c) trenger du ikke regne – hva sier det andre postulatet?',
      ],
      solution: `**a) Bil og ball:**

$$\\frac{u'v}{c^2} = \\frac{20 \\cdot 30}{(3{,}00 \\times 10^8)^2} = \\frac{600}{9{,}00 \\times 10^{16}} = 6{,}67 \\times 10^{-15}$$

Korreksjonsfaktoren er $\\approx 0$. Relativistisk effekt er fullstendig neglisjerbar.

**b) Jagerfly og missil:**

$$\\frac{u'v}{c^2} = \\frac{1000 \\cdot 700}{(3{,}00 \\times 10^8)^2} = \\frac{7{,}00 \\times 10^5}{9{,}00 \\times 10^{16}} = 7{,}78 \\times 10^{-12}$$

Fortsatt helt neglisjerbart.

**c) Partikkel og foton:**

Uansett beregning gir formelen $u = c$ når $u' = c$ (som vi viste i forrige oppgave). Lyshastigheten er invariant.

**Konklusjon:** For hverdagshastigheter er korreksjonsfaktoren så liten at klassisk fysikk fungerer utmerket. Relativistiske effekter er bare merkbare for hastigheter som er en vesentlig brøkdel av $c$.`,
    },
  ],
};


// ============================================================================
// Kapittel 6.2: Tidsdilatasjon
// ============================================================================

export const CHAPTER_FYSIKK2_6_2: TextbookChapter = {
  id: 'fysikk2-6-2',
  courseId: 'fys2',
  chapterNumber: '6.2',
  title: 'Tidsdilatasjon',
  description:
    'Egentid, Lorentzfaktoren, tidsdilatasjon, tvillingparadokset, myoneksperimentet og relativistiske korreksjoner i GPS.',
  estimatedMinutes: 80,
  prerequisites: ['fysikk2-6-1'],
  competenceGoals: [
    'forklare begrepene egentid og observert tid',
    'bruke Lorentzfaktoren til å beregne tidsdilatasjon',
    'gjøre rede for eksperimentelle bevis for tidsdilatasjon',
    'diskutere tvillingparadokset',
  ],
  content: [
    // ---- Introduksjon ----
    {
      id: 'fys2-6-2-intro',
      type: 'text',
      content: `# Tidsdilatasjon

I forrige kapittel lærte vi at Einsteins postulater fører til at samtidighet er relativ. Nå skal vi se at postulatene har en enda mer oppsiktsvekkende konsekvens: **tiden går med ulik hastighet for observatører i relativ bevegelse**.

Denne effekten kalles **tidsdilatasjon** (tidsutvidelse) og er en av de mest velbekreftede forutsigelsene i hele fysikken. Den er ikke en illusjon eller en målefeil – klokker som beveger seg, tikker faktisk langsommere.`,
    },

    // ---- Lysklokken ----
    {
      id: 'fys2-6-2-lysklokke',
      type: 'text',
      content: `## Lysklokken – et tankeeksperiment

For å utlede tidsdilatasjonen tenker vi oss en enkel klokke som bruker lys: en **lysklokke**.

### Konstruksjon

Lysklokken består av to parallelle speil med avstand $d$ mellom dem. Et lysglimt spretter frem og tilbake mellom speilene. Hvert gang lyset treffer det ene speilet, registreres et «tikk».

### Klokken i ro

For en observatør som er i ro i forhold til klokken, reiser lyset rett opp og ned. Tiden for ett tikk er:

$$\\Delta\\tau = \\frac{2d}{c}$$

Her bruker vi symbolet $\\Delta\\tau$ (gresk tau) for **egentid** – tiden målt av en observatør som er i ro i forhold til klokken.

### Klokken i bevegelse

Nå tenker vi oss at lysklokken beveger seg horisontalt med hastighet $v$ i forhold til en annen observatør. For denne observatøren beveger speilene seg sidelengs mens lyset spretter.

Lyset kan ikke bare gå rett opp og ned – det må også bevege seg sidelengs for å følge med det bevegelige speilet. Banen lyset følger er **diagonal** (som en V-form). Denne diagonale banen er lengre enn den vertikale banen.

Men ifølge Einsteins andre postulat beveger lyset seg med hastighet $c$ for begge observatører! Siden banen er lengre og hastigheten er den samme, må **tiden være lengre**.`,
    },

    {
      id: 'fys2-6-2-utledning',
      type: 'text',
      content: `## Utledning av tidsdilatasjonsformelen

La oss utlede formelen matematisk.

### Halvt tikk sett utenfra

I løpet av et halvt tikk (lyset reiser én vei mellom speilene) har klokken beveget seg en avstand $v \\cdot \\frac{\\Delta t}{2}$ horisontalt.

Lyset har reist langs hypotenusen i en rettvinklet trekant med:
- **Vertikal katete:** $d$ (avstanden mellom speilene)
- **Horisontal katete:** $v \\cdot \\frac{\\Delta t}{2}$
- **Hypotenuse:** $c \\cdot \\frac{\\Delta t}{2}$ (lyset reiser med hastighet $c$)

### Pytagoras' setning

$$\\left(c \\cdot \\frac{\\Delta t}{2}\\right)^2 = d^2 + \\left(v \\cdot \\frac{\\Delta t}{2}\\right)^2$$

Vi løser for $\\Delta t$:

$$c^2 \\cdot \\frac{\\Delta t^2}{4} - v^2 \\cdot \\frac{\\Delta t^2}{4} = d^2$$

$$\\frac{\\Delta t^2}{4}(c^2 - v^2) = d^2$$

$$\\Delta t^2 = \\frac{4d^2}{c^2 - v^2} = \\frac{4d^2}{c^2(1 - v^2/c^2)}$$

$$\\Delta t = \\frac{2d}{c} \\cdot \\frac{1}{\\sqrt{1 - v^2/c^2}}$$

Vi kjenner igjen at $\\frac{2d}{c} = \\Delta\\tau$ (egentiden), så:

$$\\boxed{\\Delta t = \\frac{\\Delta\\tau}{\\sqrt{1 - v^2/c^2}} = \\gamma \\, \\Delta\\tau}$$`,
    },

    // ---- Lorentzfaktoren ----
    {
      id: 'fys2-6-2-def-lorentz',
      type: 'definition',
      title: 'Lorentzfaktoren',
      content: `Lorentzfaktoren (gamma) er definert som:

$$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$$

der $v$ er den relative hastigheten mellom observatørene og $c$ er lyshastigheten.

**Egenskaper:**
- Når $v = 0$: $\\gamma = 1$ (ingen effekt)
- Når $v \\to c$: $\\gamma \\to \\infty$
- $\\gamma \\geq 1$ for alle hastigheter $0 \\leq v < c$
- $\\gamma$ er udefinert for $v \\geq c$`,
    },

    {
      id: 'fys2-6-2-lorentz-tabell',
      type: 'text',
      content: `### Verdier av Lorentzfaktoren

| Hastighet $v$ | $v/c$ | $\\gamma$ |
|:---|:---|:---|
| $30 \\text{ m/s}$ (bil) | $10^{-7}$ | $1{,}000\\,000\\,000\\,000\\,00$ |
| $300 \\text{ km/s}$ (1 ‰ av $c$) | $0{,}001$ | $1{,}000\\,000\\,5$ |
| $0{,}10c$ | $0{,}10$ | $1{,}005$ |
| $0{,}50c$ | $0{,}50$ | $1{,}155$ |
| $0{,}80c$ | $0{,}80$ | $1{,}667$ |
| $0{,}90c$ | $0{,}90$ | $2{,}294$ |
| $0{,}95c$ | $0{,}95$ | $3{,}203$ |
| $0{,}99c$ | $0{,}99$ | $7{,}089$ |
| $0{,}999c$ | $0{,}999$ | $22{,}37$ |
| $0{,}9999c$ | $0{,}9999$ | $70{,}71$ |

Legg merke til hvordan $\\gamma$ øker dramatisk når hastigheten nærmer seg $c$. Ved $0{,}99c$ er tiden allerede forlenget med en faktor 7!`,
    },

    // ---- Tidsdilatasjon ----
    {
      id: 'fys2-6-2-formel-tidsdilatasjon',
      type: 'formula',
      title: 'Tidsdilatasjon',
      latex: `\\Delta t = \\gamma \\, \\Delta\\tau = \\frac{\\Delta\\tau}{\\sqrt{1 - v^2/c^2}}`,
      description: `Der $\\Delta\\tau$ er egentiden (tiden målt i det referansesystemet der hendelsene skjer på **samme sted**), $\\Delta t$ er den observerte tiden (målt i et referansesystem som beveger seg med hastighet $v$ i forhold til det første), og $\\gamma$ er Lorentzfaktoren. Siden $\\gamma \\geq 1$, er $\\Delta t \\geq \\Delta\\tau$ – den observerte tiden er alltid lengre enn eller lik egentiden.`,
    },

    {
      id: 'fys2-6-2-def-egentid',
      type: 'definition',
      title: 'Egentid',
      content: `**Egentiden** $\\Delta\\tau$ (proper time) er tidsintervallet mellom to hendelser målt av en observatør for hvem hendelsene skjer på **samme sted**.

Egentiden er det korteste mulige tidsintervallet mellom to hendelser. Alle andre observatører vil måle et lengre tidsintervall.

**Eksempel:** Hvis en alarm på romskipet ringer to ganger, er egentiden mellom ringene tiden målt av astronauten om bord (som er i ro i forhold til alarmen). En observatør på Jorden (for hvem alarmen beveger seg) måler et lengre tidsintervall.`,
    },

    {
      id: 'fys2-6-2-note-hvem',
      type: 'note',
      title: 'Hvem opplever tidsdilatasjon?',
      content: `Et vanlig spørsmål er: «Hvem er det som opplever at tiden går saktere?» Svaret er at **hver observatør mener at den andres klokke går saktere**.

Astronauten i romskipet sier: «Min klokke tikker normalt, men klokken på Jorden tikker saktere.»
Observatøren på Jorden sier: «Min klokke tikker normalt, men klokken i romskipet tikker saktere.»

Begge har rett! Tidsdilatasjon er symmetrisk mellom to observatører i uniform relativ bevegelse. Det er ingen motsetning, fordi de to observatørene er i ulike referansesystemer og sammenligner ulike par av hendelser.`,
    },

    {
      id: 'fys2-6-2-warning-egentid',
      type: 'warning',
      title: 'Vanlig feil: Forveksling av egentid og observert tid',
      content: `**Feil:** Å bruke $\\Delta t = \\gamma \\Delta\\tau$ uten å identifisere korrekt hvilken tid som er egentiden.

**Huskeregel:** Egentiden $\\Delta\\tau$ er alltid den **korteste** tiden. Den måles av observatøren som **er til stede** ved begge hendelsene (hendelsene skjer på samme sted i dette referansesystemet).

Spør deg selv: «For hvilken observatør skjer begge hendelsene på samme sted?» Den observatørens klokke viser egentiden.

**Eksempel:** En kosmisk partikkel oppstår og forfaller i et laboratorum som er i ro i forhold til partikkelen. I dette systemet skjer begge hendelsene (opprettelse og forfall) på samme sted. Altså er levetiden i partikkelens eget system **egentiden**.`,
    },

    // ---- Myoneksperimentet ----
    {
      id: 'fys2-6-2-myon',
      type: 'text',
      content: `## Myoneksperimentet – bevis for tidsdilatasjon

Et av de mest overbevisende eksperimentelle bevisene for tidsdilatasjon kommer fra kosmisk stråling og **myoner**.

### Hva er myoner?

Myoner er subatomære partikler som ligner elektroner, men som er ca. 207 ganger tyngre. De oppstår når kosmisk stråling kolliderer med atomer i den øvre atmosfæren, typisk i 10–15 km høyde.

### Myonenes levetid

Myoner er ustabile og henfalder (forfaller) med en gjennomsnittlig levetid på:

$$\\tau = 2{,}2 \\, \\mu\\text{s} = 2{,}2 \\times 10^{-6} \\text{ s}$$

### Det klassiske problemet

Selv om myonene beveger seg nær lyshastigheten ($v \\approx 0{,}998c$), kan vi beregne hvor langt de burde rekke å reise i sin levetid:

$$d = v \\cdot \\tau = 0{,}998 \\times 3{,}00 \\times 10^8 \\times 2{,}2 \\times 10^{-6} \\approx 660 \\text{ m}$$

Myonene dannes i 10–15 km høyde, men kan bare reise ca. 660 m. De burde aldri nå jordoverflaten!

### Observasjonen

Likevel detekterer vi store mengder myoner ved havnivå. Omtrent 10 000 myoner treffer hver kvadratmeter av jordoverflaten hvert minutt. Hvordan er dette mulig?`,
    },

    {
      id: 'fys2-6-2-myon-forklaring',
      type: 'text',
      content: `### Relativistisk forklaring

Svaret er tidsdilatasjon. Myonenes indre klokke (egentid) tikker langsommere sett fra jordoverflaten.

Med $v = 0{,}998c$ blir Lorentzfaktoren:

$$\\gamma = \\frac{1}{\\sqrt{1 - (0{,}998)^2}} = \\frac{1}{\\sqrt{1 - 0{,}996}} = \\frac{1}{\\sqrt{0{,}004}} \\approx 15{,}8$$

Den observerte levetiden fra Jordens referansesystem er:

$$\\Delta t = \\gamma \\cdot \\tau = 15{,}8 \\times 2{,}2 \\times 10^{-6} = 34{,}8 \\times 10^{-6} \\text{ s} \\approx 35 \\, \\mu\\text{s}$$

Avstanden myonet kan tilbakelegge blir da:

$$d = v \\cdot \\Delta t = 0{,}998 \\times 3{,}00 \\times 10^8 \\times 34{,}8 \\times 10^{-6} \\approx 10\\,400 \\text{ m} \\approx 10{,}4 \\text{ km}$$

Dette er mer enn nok til å nå jordoverflaten fra 10–15 km høyde!

Myoneksperimentet er et direkte, målbart bevis på at tidsdilatasjon er reell.`,
    },

    {
      id: 'fys2-6-2-note-myon-perspektiv',
      type: 'note',
      title: 'Myonets eget perspektiv',
      content: `Fra myonets eget referansesystem er det ikke myonets klokke som tikker saktere – det er Jorden som nærmer seg med hastighet $0{,}998c$. I myonets system er det atmosfærens tykkelse som er kontrahert (lengdekontraksjon, se kapittel 6.3), slik at avstanden ned til jordoverflaten er mye kortere enn 10–15 km.

Begge forklaringene – tidsdilatasjon i Jordens system og lengdekontraksjon i myonets system – gir det samme resultatet: myonet rekker ned til jordoverflaten. Relativitetsteorien er konsistent.`,
    },

    // ---- GPS ----
    {
      id: 'fys2-6-2-gps',
      type: 'text',
      content: `## GPS og relativistiske korreksjoner

Et fascinerende hverdagseksempel på tidsdilatasjon er det globale posisjoneringssystemet (GPS).

### Hvordan GPS fungerer

GPS-systemet består av minst 24 satellitter som kretser rundt Jorden i ca. 20 200 km høyde med en hastighet på ca. $v = 3{,}87 \\text{ km/s}$. Hver satellitt har presise atomklokker. Posisjonen din beregnes ved å sammenligne tidssignaler fra flere satellitter.

### Relativistisk tidskorreksjon

GPS-klokkene påvirkes av to relativistiske effekter:

**1. Spesiell relativitet (tidsdilatasjon):**
Satellittene beveger seg i forhold til bakken, så klokkene tikker saktere:

$$\\gamma = \\frac{1}{\\sqrt{1 - (3{,}87 \\times 10^3 / 3 \\times 10^8)^2}} \\approx 1 + 8{,}3 \\times 10^{-11}$$

Dette gir at satelittklokkene går ca. $7 \\, \\mu\\text{s}$ for sakte per dag.

**2. Generell relativitet (gravitasjonell tidseffekt):**
Satellittene er lenger fra Jorden og opplever svakere gravitasjon, noe som gjør at klokkene tikker *raskere*:
Ca. $45 \\, \\mu\\text{s}$ for raskt per dag.

**Netto effekt:** Satelittklokkene tikker ca. $38 \\, \\mu\\text{s}$ for raskt per dag.

### Konsekvens uten korreksjon

Uten relativistiske korreksjoner ville posisjonsfeilen vokse med ca. **10 km per dag**! GPS-systemet er et dagligdags bevis på at Einsteins relativitetsteori er korrekt.`,
    },

    // ---- Tvillingparadokset ----
    {
      id: 'fys2-6-2-tvilling',
      type: 'text',
      content: `## Tvillingparadokset

Et av de mest diskuterte tankeeksperimentene i relativitetsteorien er **tvillingparadokset**.

### Scenariet

Tvillingene Anna og Bjørn er 30 år gamle. Anna reiser ut i verdensrommet med $v = 0{,}80c$ til en stjerne som er 8 lysår unna, snur, og reiser tilbake med samme hastighet.

**Bjørns perspektiv (Jorden):**
Lorentzfaktoren: $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}64}} = \\frac{1}{0{,}60} \\approx 1{,}667$

Reisetid (Jordens klokke): $\\Delta t = \\frac{2 \\times 8}{0{,}80} = 20$ år

Annas aldring: $\\Delta\\tau = \\Delta t / \\gamma = 20 / 1{,}667 = 12$ år

Når Anna kommer tilbake, er Bjørn $30 + 20 = 50$ år, mens Anna er $30 + 12 = 42$ år. Anna er 8 år yngre enn sin tvillingbror!

### Paradokset

Her er det tilsynelatende paradokset: Kunne ikke Anna si at det er Bjørn som beveger seg bort fra henne? I så fall burde Bjørn aldres saktere. Hvem har egentlig rett?

### Oppløsningen

Paradokset oppstår fordi situasjonen **ikke er symmetrisk**. Anna akselererer og deselererer – hun snur! Dette betyr at Anna ikke befinner seg i et inertielt referansesystem gjennom hele reisen. Hun opplever krefter (akselerasjon) når hun snur.

Bjørn, derimot, forblir i (tilnærmet) samme inertielle referansesystem hele tiden. Derfor er det Bjørns analyse som er konsistent med spesiell relativitetsteori: Anna aldres saktere.

Tvillingparadokset er bekreftet eksperimentelt med atomklokker i fly (Hafele-Keating-eksperimentet, 1971).`,
    },

    {
      id: 'fys2-6-2-warning-symmetri',
      type: 'warning',
      title: 'Tvillingparadokset er ikke et ekte paradoks',
      content: `Det er viktig å forstå at tvillingparadokset **ikke** er et reelt paradoks – det har en klar løsning. Den tilsynelatende selvmotsigelsen oppstår kun når man feilaktig antar at situasjonen er symmetrisk.

**Nøkkelpunktet:** Spesiell relativitetsteori gjelder mellom **inertielle** referansesystemer. Anna, som akselererer, dekkes strengt tatt av generell relativitetsteori. Analysen fra Bjørns inertielle system er den enkle og konsistente: Anna aldres saktere fordi hun beveger seg.`,
    },

    // ---- Eksempler ----
    {
      id: 'fys2-6-2-eks-astro',
      type: 'example',
      title: 'Eksempel: Romferd til Proxima Centauri',
      problem: `Et romskip reiser til Proxima Centauri (avstand 4{,}24 lysår fra Jorden) med hastighet $v = 0{,}90c$.

a) Hvor lang tid tar reisen målt fra Jorden?
b) Hvor lang tid tar reisen målt av astronauten om bord?
c) Hvor mye yngre er astronauten sammenlignet med en jevnaldrende som ble på Jorden (bare utreisen)?`,
      solution: `**a) Reisetid fra Jorden:**

$$\\Delta t = \\frac{d}{v} = \\frac{4{,}24 \\text{ lysår}}{0{,}90c} = \\frac{4{,}24}{0{,}90} \\text{ år} = 4{,}71 \\text{ år}$$

**b) Reisetid for astronauten (egentid):**

Lorentzfaktoren:

$$\\gamma = \\frac{1}{\\sqrt{1 - 0{,}90^2}} = \\frac{1}{\\sqrt{1 - 0{,}81}} = \\frac{1}{\\sqrt{0{,}19}} = \\frac{1}{0{,}4359} = 2{,}294$$

Astronautens tid:

$$\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{4{,}71}{2{,}294} = 2{,}05 \\text{ år}$$

**c) Aldersforskjell:**

Personen på Jorden har aldret $4{,}71$ år, mens astronauten har aldret $2{,}05$ år.

Forskjell: $4{,}71 - 2{,}05 = 2{,}66$ år

Astronauten er altså ca. $2{,}7$ år yngre etter bare utreisen.`,
    },

    {
      id: 'fys2-6-2-eks-myon',
      type: 'example',
      title: 'Eksempel: Myonets levetid',
      problem: `Et myon dannes i 12 km høyde og beveger seg nedover med hastighet $v = 0{,}995c$. Myonets levetid i eget referansesystem er $\\tau = 2{,}2 \\, \\mu\\text{s}$.

a) Beregn Lorentzfaktoren.
b) Hva er myonets observerte levetid fra bakken?
c) Hvor langt rekker myonet å reise? Når det jordoverflaten?`,
      solution: `**a) Lorentzfaktoren:**

$$\\gamma = \\frac{1}{\\sqrt{1 - (0{,}995)^2}} = \\frac{1}{\\sqrt{1 - 0{,}990}} = \\frac{1}{\\sqrt{0{,}010}} = \\frac{1}{0{,}1} = 10{,}0$$

**b) Observert levetid:**

$$\\Delta t = \\gamma \\cdot \\tau = 10{,}0 \\times 2{,}2 \\times 10^{-6} \\text{ s} = 2{,}2 \\times 10^{-5} \\text{ s} = 22 \\, \\mu\\text{s}$$

**c) Avstand tilbakelagt:**

$$d = v \\cdot \\Delta t = 0{,}995 \\times 3{,}00 \\times 10^8 \\times 2{,}2 \\times 10^{-5}$$

$$d = 6{,}57 \\times 10^3 \\text{ m} = 6{,}57 \\text{ km}$$

Uten tidsdilatasjon: $d_0 = 0{,}995 \\times 3{,}00 \\times 10^8 \\times 2{,}2 \\times 10^{-6} = 657 \\text{ m}$

Med tidsdilatasjon reiser myonet $6{,}57$ km – mer enn halvparten av de 12 km. Mange myoner vil dermed nå jordoverflaten (fordi gjennomsnittlig levetid betyr at noen lever lengre enn gjennomsnittet).`,
    },

    {
      id: 'fys2-6-2-eks-gamma',
      type: 'example',
      title: 'Eksempel: Finne hastighet fra Lorentzfaktoren',
      problem: `En partikkel har en observert levetid som er 5 ganger lengre enn egentiden. Hva er partikkelens hastighet?`,
      solution: `Vi vet at $\\gamma = 5$ (siden $\\Delta t = \\gamma \\cdot \\Delta\\tau$ og $\\Delta t = 5\\Delta\\tau$).

Vi løser $\\gamma$-formelen for $v$:

$$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = 5$$

$$\\sqrt{1 - v^2/c^2} = \\frac{1}{5} = 0{,}20$$

$$1 - v^2/c^2 = 0{,}04$$

$$v^2/c^2 = 1 - 0{,}04 = 0{,}96$$

$$v = c\\sqrt{0{,}96} = 0{,}980c$$

**Svar:** Partikkelen beveger seg med $v \\approx 0{,}98c$, altså 98 % av lyshastigheten.

**Generell formel:** Hvis vi kjenner $\\gamma$, kan vi finne $v$:

$$v = c\\sqrt{1 - \\frac{1}{\\gamma^2}}$$`,
    },

    {
      id: 'fys2-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Egentid** ($\\Delta\\tau$): Tiden målt i det referansesystemet der hendelsene skjer på samme sted. Egentiden er den korteste mulige tiden.
- **Lorentzfaktoren**: $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} \\geq 1$
- **Tidsdilatasjon**: $\\Delta t = \\gamma \\cdot \\Delta\\tau$ – bevegelige klokker tikker saktere
- **Myoneksperimentet**: Kosmiske myoner overlever reisen gjennom atmosfæren takket være tidsdilatasjon
- **GPS**: Relativistiske korreksjoner er nødvendige for nøyaktig posisjonering
- **Tvillingparadokset**: Tvillingen som reiser (akselererer) aldres saktere – situasjonen er ikke symmetrisk`,
    },
  ],

  exercises: [
    {
      id: 'fys2-6-2-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn Lorentzfaktoren $\\gamma$ for følgende hastigheter:

a) $v = 0{,}10c$
b) $v = 0{,}50c$
c) $v = 0{,}90c$
d) $v = 0{,}99c$`,
      hints: [
        'Bruk formelen $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$',
        'For a): $v^2/c^2 = 0{,}01$',
      ],
      solution: `**a)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}01}} = \\frac{1}{\\sqrt{0{,}99}} = 1{,}005$

**b)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}25}} = \\frac{1}{\\sqrt{0{,}75}} = 1{,}155$

**c)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}81}} = \\frac{1}{\\sqrt{0{,}19}} = 2{,}294$

**d)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}9801}} = \\frac{1}{\\sqrt{0{,}0199}} = 7{,}089$

Merk den dramatiske økningen: fra $0{,}10c$ til $0{,}90c$ øker $\\gamma$ fra 1,005 til 2,3. Fra $0{,}90c$ til $0{,}99c$ øker den videre til over 7.`,
    },
    {
      id: 'fys2-6-2-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `En atomklokke i et fly tikker med egentid $\\Delta\\tau = 1{,}000\\,000\\,0 \\text{ s}$ (nøyaktig 1 sekund). Flyet beveger seg med $v = 250 \\text{ m/s}$.

a) Beregn Lorentzfaktoren.
b) Hvor lang tid måler en observatør på bakken at det tar for klokken å tikke ett sekund?
c) Etter 24 timer flyging, hvor mye har klokken i flyet gått etter sammenlignet med en klokke på bakken?`,
      hints: [
        'For lave hastigheter kan du bruke tilnærmingen $\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$',
      ],
      solution: `**a)** $v/c = 250 / (3{,}00 \\times 10^8) = 8{,}33 \\times 10^{-7}$

$$\\gamma = \\frac{1}{\\sqrt{1 - (8{,}33 \\times 10^{-7})^2}} \\approx 1 + \\frac{1}{2}(8{,}33 \\times 10^{-7})^2 = 1 + 3{,}47 \\times 10^{-13}$$

**b)** $\\Delta t = \\gamma \\cdot \\Delta\\tau = (1 + 3{,}47 \\times 10^{-13}) \\times 1{,}000\\,000\\,0 \\text{ s}$

$$\\Delta t \\approx 1{,}000\\,000\\,000\\,000\\,347 \\text{ s}$$

Forskjellen er $3{,}47 \\times 10^{-13}$ sekunder per sekund.

**c)** Etter 24 timer = $86\\,400$ s:

$$\\delta t = 86\\,400 \\times 3{,}47 \\times 10^{-13} \\approx 3{,}0 \\times 10^{-8} \\text{ s} = 30 \\text{ ns}$$

Klokken i flyet har gått ca. 30 nanosekunder saktere etter ett døgn. Denne lille forskjellen er målbar med moderne atomklokker.`,
    },
    {
      id: 'fys2-6-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `Et myon dannes 15 km over jordoverflaten og beveger seg nedover med hastighet $v = 0{,}998c$. Myonets egentid (levetid i eget system) er $\\tau = 2{,}2 \\, \\mu\\text{s}$.

a) Beregn Lorentzfaktoren.
b) Hva er myonets observerte levetid fra bakken?
c) Hvor langt rekker myonet å reise?
d) Rekker myonet jordoverflaten?`,
      hints: [
        '$\\gamma = 1/\\sqrt{1 - 0{,}998^2}$',
        'Avstand = hastighet × tid',
      ],
      solution: `**a)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}998^2}} = \\frac{1}{\\sqrt{1 - 0{,}996}} = \\frac{1}{\\sqrt{0{,}004}} = \\frac{1}{0{,}0632} = 15{,}8$

**b)** $\\Delta t = \\gamma \\cdot \\tau = 15{,}8 \\times 2{,}2 \\times 10^{-6} = 34{,}8 \\times 10^{-6} \\text{ s} = 34{,}8 \\, \\mu\\text{s}$

**c)** $d = v \\cdot \\Delta t = 0{,}998 \\times 3{,}00 \\times 10^8 \\times 34{,}8 \\times 10^{-6} = 10\\,400 \\text{ m} = 10{,}4 \\text{ km}$

**d)** Myonet reiser 10,4 km, men ble dannet i 15 km høyde. Med den gjennomsnittlige levetiden rekker det ikke helt ned. Men! Levetiden er et gjennomsnitt – mange myoner lever lenger enn $2{,}2 \\, \\mu\\text{s}$, og disse når jordoverflaten. Uten tidsdilatasjon ville myonet bare reist $660 \\text{ m}$, og nesten ingen ville nådd ned.`,
    },
    {
      id: 'fys2-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `En ustabil partikkel har en levetid på $\\tau = 5{,}0 \\times 10^{-8} \\text{ s}$ i eget referansesystem. I laboratoriet observeres partikkelen å leve i $\\Delta t = 2{,}5 \\times 10^{-7} \\text{ s}$.

a) Beregn Lorentzfaktoren.
b) Finn partikkelens hastighet (som andel av $c$).
c) Hvor langt reiser partikkelen i laboratoriet?`,
      hints: [
        '$\\gamma = \\Delta t / \\Delta\\tau$',
        'Bruk $v = c\\sqrt{1 - 1/\\gamma^2}$ for å finne hastigheten',
      ],
      solution: `**a)** $\\gamma = \\frac{\\Delta t}{\\Delta\\tau} = \\frac{2{,}5 \\times 10^{-7}}{5{,}0 \\times 10^{-8}} = 5{,}0$

**b)** Vi bruker $v = c\\sqrt{1 - 1/\\gamma^2}$:

$$v = c\\sqrt{1 - \\frac{1}{25}} = c\\sqrt{\\frac{24}{25}} = c\\sqrt{0{,}96} = 0{,}980c$$

**c)** $d = v \\cdot \\Delta t = 0{,}980 \\times 3{,}00 \\times 10^8 \\times 2{,}5 \\times 10^{-7}$

$$d = 73{,}5 \\text{ m}$$

Uten tidsdilatasjon ville partikkelen bare reist:
$d_0 = 0{,}980 \\times 3{,}00 \\times 10^8 \\times 5{,}0 \\times 10^{-8} = 14{,}7 \\text{ m}$

Tidsdilatasjonen gir partikkelen 5 ganger lenger rekkevidde.`,
    },
    {
      id: 'fys2-6-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Tvillingene Emma og Nora er 25 år gamle. Emma reiser med et romskip med hastighet $v = 0{,}95c$ til en planet som er 10 lysår unna, og returnerer med samme hastighet.

a) Hvor lang tid tar tur-retur ifølge Nora (på Jorden)?
b) Hvor gammel er Nora når Emma returnerer?
c) Hvor gammel er Emma når hun returnerer?`,
      hints: [
        'Avstanden er 10 lysår én vei, 20 lysår tur-retur.',
        'Husk at $\\gamma$ for $0{,}95c$ er ca. 3,2.',
      ],
      solution: `**a)** Tur-retur avstand: $2 \\times 10 = 20$ lysår

Reisetid (Noras klokke):
$$\\Delta t = \\frac{20 \\text{ lysår}}{0{,}95c} = \\frac{20}{0{,}95} \\text{ år} = 21{,}05 \\text{ år}$$

**b)** Noras alder: $25 + 21{,}05 = 46{,}05$ år $\\approx 46$ år

**c)** Lorentzfaktoren: $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}95^2}} = \\frac{1}{\\sqrt{0{,}0975}} = 3{,}203$

Emmas tid (egentid):
$$\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{21{,}05}{3{,}203} = 6{,}57 \\text{ år}$$

Emmas alder: $25 + 6{,}57 = 31{,}57$ år $\\approx 32$ år

**Aldersforskjell:** Nora er ca. $46$ år og Emma ca. $32$ år. Emma er nesten 14 år yngre enn sin tvilling!`,
    },
    {
      id: 'fys2-6-2-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `En GPS-satellitt kretser med hastighet $v = 3{,}87 \\text{ km/s}$ rundt Jorden.

a) Beregn $v/c$.
b) Beregn Lorentzfaktoren (bruk tilnærmingen $\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$).
c) Hvor mange mikrosekunder per dag tikker satelittklokken saktere enn en klokke på bakken (kun spesiell relativitet)?`,
      hints: [
        '$v/c = 3870 / (3 \\times 10^8)$',
        'Et døgn har $86\\,400$ sekunder',
        'Tidsdifferanse per sekund: $\\Delta t - \\Delta\\tau \\approx \\frac{1}{2}\\frac{v^2}{c^2}$ sekunder',
      ],
      solution: `**a)** $v/c = \\frac{3{,}87 \\times 10^3}{3{,}00 \\times 10^8} = 1{,}29 \\times 10^{-5}$

**b)** $\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2} = 1 + \\frac{1}{2}(1{,}29 \\times 10^{-5})^2 = 1 + 8{,}32 \\times 10^{-11}$

$$\\gamma \\approx 1{,}000\\,000\\,000\\,083$$

**c)** Tidsforsinkelse per sekund: $\\delta = \\frac{1}{2}\\frac{v^2}{c^2} = 8{,}32 \\times 10^{-11}$ s

Per døgn ($86\\,400$ s):
$$\\delta_{\\text{dag}} = 86\\,400 \\times 8{,}32 \\times 10^{-11} = 7{,}19 \\times 10^{-6} \\text{ s} \\approx 7{,}2 \\, \\mu\\text{s}$$

Satelittklokken tikker ca. $7{,}2 \\, \\mu\\text{s}$ for sakte per dag kun på grunn av spesiell relativitet. (Generell relativitet gir en effekt i motsatt retning på ca. $45 \\, \\mu\\text{s}$/dag.)`,
    },
    {
      id: 'fys2-6-2-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En ustabil partikkel beveger seg med hastighet $v = 0{,}80c$ gjennom en detektor. Detektoren er $3{,}0 \\text{ m}$ lang (målt i laboratoriet). En viss andel av partiklene henfaller mens de er inne i detektoren.

Partikkelens halveringstid i eget referansesystem er $t_{1/2} = 8{,}0 \\times 10^{-9} \\text{ s}$.

a) Hvor lang tid bruker partikkelen på å passere gjennom detektoren (labsystemet)?
b) Hva er denne tiden i partikkelens referansesystem?
c) Hvor stor andel av partiklene har henfallt innen de passerer gjennom detektoren?`,
      hints: [
        'Tid i lab: $\\Delta t = d/v$',
        'Partikkelen opplever egentid $\\Delta\\tau = \\Delta t / \\gamma$',
        'Andel som gjenstår etter tid $t$: $N/N_0 = (1/2)^{t/t_{1/2}}$',
      ],
      solution: `**a)** Tid i labsystemet:

$$\\Delta t = \\frac{d}{v} = \\frac{3{,}0}{0{,}80 \\times 3{,}00 \\times 10^8} = \\frac{3{,}0}{2{,}40 \\times 10^8} = 1{,}25 \\times 10^{-8} \\text{ s} = 12{,}5 \\text{ ns}$$

**b)** Lorentzfaktor: $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}64}} = \\frac{1}{0{,}60} = 1{,}667$

Egentid for partikkelen:
$$\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{12{,}5 \\times 10^{-9}}{1{,}667} = 7{,}50 \\times 10^{-9} \\text{ s} = 7{,}50 \\text{ ns}$$

**c)** Antall halveringstider i egentid:
$$n = \\frac{\\Delta\\tau}{t_{1/2}} = \\frac{7{,}50 \\times 10^{-9}}{8{,}0 \\times 10^{-9}} = 0{,}9375$$

Andel som gjenstår:
$$\\frac{N}{N_0} = \\left(\\frac{1}{2}\\right)^{0{,}9375} = 2^{-0{,}9375} = 0{,}523$$

Andel som har henfallt: $1 - 0{,}523 = 0{,}477 \\approx 48\\%$

Omtrent 48 % av partiklene henfaller mens de passerer detektoren.`,
    },
    {
      id: 'fys2-6-2-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En astronaut reiser til en galakse som er $d = 100$ lysår unna (målt fra Jorden) med hastighet $v = 0{,}9999c$.

a) Hvor lang tid tar reisen målt fra Jorden?
b) Hvor lang tid opplever astronauten at reisen tar?
c) Sammenlign med en reise med $v = 0{,}99c$. Hvor stor forskjell gjør den ekstra hastigheten for astronautens opplevde reisetid?`,
      hints: [
        'Beregn $\\gamma$ for begge hastigheter',
        '$\\gamma(0{,}9999c) \\approx 70{,}7$ og $\\gamma(0{,}99c) \\approx 7{,}09$',
      ],
      solution: `**a)** Reisetid fra Jorden: $\\Delta t = \\frac{100}{0{,}9999} \\approx 100{,}01$ år

**b)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}9999^2}} = \\frac{1}{\\sqrt{1 - 0{,}9998}} = \\frac{1}{\\sqrt{0{,}0002}} = \\frac{1}{0{,}01414} = 70{,}7$

Astronautens tid: $\\Delta\\tau = \\frac{100{,}01}{70{,}7} = 1{,}41$ år

Astronauten opplever reisen til å ta bare 1 år og 5 måneder!

**c)** Med $v = 0{,}99c$:

$\\Delta t = \\frac{100}{0{,}99} = 101{,}0$ år

$\\gamma = \\frac{1}{\\sqrt{1 - 0{,}99^2}} = \\frac{1}{\\sqrt{0{,}0199}} = 7{,}09$

$\\Delta\\tau = \\frac{101{,}0}{7{,}09} = 14{,}2$ år

**Sammenligning:** Ved å øke hastigheten fra $0{,}99c$ til $0{,}9999c$ (en økning på ca. 1 %) reduseres astronautens opplevde reisetid fra 14,2 år til 1,4 år – en 10-dobling! Ved ekstremt høye hastigheter gjør selv små hastighetsøkninger enorm forskjell.`,
    },
    {
      id: 'fys2-6-2-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Utled formelen $v = c\\sqrt{1 - 1/\\gamma^2}$ som gir hastigheten $v$ når man kjenner Lorentzfaktoren $\\gamma$. Bruk denne til å finne hastigheten til en partikkel der $\\gamma = 3{,}0$.`,
      hints: [
        'Start med $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ og løs for $v$.',
      ],
      solution: `**Utledning:**

Start med definisjonen:
$$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$$

Kvadrer begge sider:
$$\\gamma^2 = \\frac{1}{1 - v^2/c^2}$$

Inverter:
$$\\frac{1}{\\gamma^2} = 1 - \\frac{v^2}{c^2}$$

Løs for $v^2/c^2$:
$$\\frac{v^2}{c^2} = 1 - \\frac{1}{\\gamma^2}$$

Ta kvadratroten:
$$\\boxed{v = c\\sqrt{1 - \\frac{1}{\\gamma^2}}}$$

**Numerisk for $\\gamma = 3{,}0$:**

$$v = c\\sqrt{1 - \\frac{1}{9}} = c\\sqrt{\\frac{8}{9}} = c \\cdot 0{,}9428 = 0{,}943c$$

Partikkelen beveger seg med ca. $94{,}3\\%$ av lyshastigheten.`,
    },
    {
      id: 'fys2-6-2-ex10',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hva som menes med «egentid» og hvorfor den alltid er den korteste mulige tiden mellom to hendelser.`,
      hints: [
        'Tenk på lysklokken: i hvilken situasjon er lysbanen kortest?',
        'Hvem er «til stede» ved begge hendelsene?',
      ],
      solution: `**Egentid** ($\\Delta\\tau$) er tidsintervallet mellom to hendelser målt av en observatør for hvem begge hendelsene skjer på **samme sted**. Denne observatøren «er med» på begge hendelsene uten å bevege seg mellom dem.

**Hvorfor den er kortest:**

Tenk på lysklokken: Når klokken er i ro, beveger lyset seg rett opp og ned – den korteste veien mellom speilene. For en observatør som ser klokken i bevegelse, tar lyset en diagonal (lengre) bane. Siden lyset har hastigheten $c$ for begge, tar den diagonale banen lengre tid.

Alle bevegelige observatører måler en tid $\\Delta t = \\gamma \\Delta\\tau$, der $\\gamma \\geq 1$. Altså er $\\Delta t \\geq \\Delta\\tau$ – den observerte tiden er alltid lik eller lengre enn egentiden.

**Huskeregel:** «Den som er med, har den korteste tid.»`,
    },
  ],
};


// ============================================================================
// Kapittel 6.3: Lengdekontraksjon
// ============================================================================

export const CHAPTER_FYSIKK2_6_3: TextbookChapter = {
  id: 'fysikk2-6-3',
  courseId: 'fys2',
  chapterNumber: '6.3',
  title: 'Lengdekontraksjon',
  description:
    'Egenlengde, Lorentzkontraksjon, sammenheng med tidsdilatasjon, rom-tid-diagrammer og tankeeksperimenter med romskip.',
  estimatedMinutes: 70,
  prerequisites: ['fysikk2-6-2'],
  competenceGoals: [
    'forklare begrepene egenlengde og observert lengde',
    'bruke Lorentzfaktoren til å beregne lengdekontraksjon',
    'gjøre rede for sammenhengen mellom tidsdilatasjon og lengdekontraksjon',
    'drøfte relativistiske tankeeksperimenter',
  ],
  content: [
    // ---- Introduksjon ----
    {
      id: 'fys2-6-3-intro',
      type: 'text',
      content: `# Lengdekontraksjon

I forrige kapittel så vi at tid er relativ – bevegelige klokker tikker saktere. Nå skal vi se at relativitetsteorien har en tilsvarende konsekvens for lengder: **bevegelige objekter er kortere i bevegelsesretningen**.

Denne effekten kalles **lengdekontraksjon** eller **Lorentzkontraksjon** og er uløselig knyttet til tidsdilatasjon. De to effektene er to sider av samme sak og sikrer at relativitetsteorien er konsistent.`,
    },

    // ---- Egenlengde ----
    {
      id: 'fys2-6-3-egenlengde',
      type: 'text',
      content: `## Egenlengde og observert lengde

Tenk deg en stav som ligger i ro i et referansesystem $S$. Lengden av staven målt i dette systemet kalles **egenlengden** (proper length), og vi betegner den $L_0$.

Nå beveger staven seg med hastighet $v$ langs sin egen lengderetning i et annet referansesystem $S'$. En observatør i $S'$ måler stavens lengde. Resultatet er overraskende: staven er **kortere** enn egenlengden!`,
    },

    {
      id: 'fys2-6-3-def-egenlengde',
      type: 'definition',
      title: 'Egenlengde',
      content: `**Egenlengden** $L_0$ (proper length) er lengden av et objekt målt i det referansesystemet der objektet er **i ro**.

Egenlengden er den lengste mulige lengden av objektet. Alle observatører som ser objektet i bevegelse, måler en kortere lengde.`,
    },

    // ---- Utledning ----
    {
      id: 'fys2-6-3-utledning',
      type: 'text',
      content: `## Utledning av lengdekontraksjonsformelen

Vi kan utlede lengdekontraksjonen ved å bruke tidsdilatasjon og kravet om at fysikken er konsistent.

### Tankeeksperiment

Et romskip reiser mellom to romstasjoner $A$ og $B$ med hastighet $v$. Avstanden mellom stasjonene er $L_0$ (egenlengde, målt av stasjonene som er i ro i forhold til hverandre).

**Fra stasjonenes referansesystem:**
Romskipet bruker tiden:
$$\\Delta t = \\frac{L_0}{v}$$

**Fra romskipets referansesystem:**
Romskipet er i ro; det er stasjonene som beveger seg. Romskipet måler egentid (begge hendelsene – «passerer A» og «passerer B» – skjer på samme sted, nemlig ved romskipet):
$$\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{L_0}{\\gamma v}$$

Men fra romskipets perspektiv beveger stasjonene seg med hastighet $v$, og tiden er $\\Delta\\tau$. Avstanden mellom stasjonene, sett fra romskipet, er derfor:
$$L = v \\cdot \\Delta\\tau = v \\cdot \\frac{L_0}{\\gamma v} = \\frac{L_0}{\\gamma}$$`,
    },

    {
      id: 'fys2-6-3-formel',
      type: 'formula',
      title: 'Lengdekontraksjon (Lorentzkontraksjon)',
      latex: `L = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - \\frac{v^2}{c^2}}`,
      description: `Der $L_0$ er egenlengden (lengden målt i objektets hvilesystem) og $L$ er den observerte lengden i et referansesystem der objektet beveger seg med hastighet $v$. Siden $\\gamma \\geq 1$, er $L \\leq L_0$ – den observerte lengden er alltid kortere enn eller lik egenlengden.`,
    },

    {
      id: 'fys2-6-3-viktig',
      type: 'text',
      content: `## Viktige egenskaper ved lengdekontraksjon

### 1. Kun i bevegelsesretningen

Lengdekontraksjonen skjer **bare i bevegelsesretningen**. Dimensjoner vinkelrett på bevegelsesretningen er upåvirket.

Et romskip som beveger seg horisontalt med $0{,}90c$ vil se kortere ut i horisontal retning, men ha normal høyde og bredde. Et kulformet objekt ville se flattrykt ut – som et oblat sfæroid.

### 2. Reell, men ikke «fysisk kompresjon»

Lengdekontraksjonen er ikke forårsaket av noen kraft som presser objektet sammen. Det er en konsekvens av romtidens geometri – av **hvordan rom og tid henger sammen**. Objektet er ikke «egentlig» kortere; lengden avhenger av referansesystemet.

### 3. Symmetrisk effekt

Akkurat som med tidsdilatasjon er lengdekontraksjonen symmetrisk. Observatør A mener at Bs stav er kortere, mens observatør B mener at As stav er kortere. Begge har rett i sitt eget referansesystem.

### 4. Verdier av kontraksjonen

| $v/c$ | $\\gamma$ | $L/L_0$ |
|:---|:---|:---|
| $0{,}10$ | $1{,}005$ | $0{,}995$ (0,5 % kortere) |
| $0{,}50$ | $1{,}155$ | $0{,}866$ (13 % kortere) |
| $0{,}80$ | $1{,}667$ | $0{,}600$ (40 % kortere) |
| $0{,}90$ | $2{,}294$ | $0{,}436$ (56 % kortere) |
| $0{,}99$ | $7{,}089$ | $0{,}141$ (86 % kortere) |
| $0{,}999$ | $22{,}37$ | $0{,}045$ (96 % kortere) |`,
    },

    {
      id: 'fys2-6-3-warning-vinkelrett',
      type: 'warning',
      title: 'Lengdekontraksjon gjelder BARE i bevegelsesretningen',
      content: `En svært vanlig feil er å anvende lengdekontraksjon på alle dimensjoner. **Kun lengden langs bevegelsesretningen kontraheres.** Dimensjoner vinkelrett på bevegelsen er uendret.

**Eksempel:** Et romskip med lengde 100 m, bredde 20 m og høyde 10 m beveger seg langs sin lengdeakse med $0{,}80c$:
- Lengde: $L = 100 / 1{,}667 = 60$ m (kontrahert)
- Bredde: 20 m (uendret)
- Høyde: 10 m (uendret)

Tenk deg at to identiske sylindre passerer hverandre i motsatte retninger. Hvis kontraksjon gjaldt vinkelrett på bevegelsen, ville hver observatør mene at den andres sylinder er smalere, og at den ene skulle passe inni den andre. Men de kan ikke begge ha rett – det ville bryte med kausalitet. Derfor skjer kontraksjon bare langs bevegelsesretningen.`,
    },

    // ---- Myonets perspektiv ----
    {
      id: 'fys2-6-3-myon-perspektiv',
      type: 'text',
      content: `## Myoneksperimentet – fra myonets perspektiv

I kapittel 6.2 forklarte vi at myoner når jordoverflaten fordi tidsdilatasjon forlenger deres observerte levetid. Men fra myonets eget perspektiv er det ikke myonets klokke som tikker saktere – myonets klokke tikker normalt. Hvordan overlever myonet?

### Myonets perspektiv: lengdekontraksjon

Fra myonets referansesystem er det Jorden (og atmosfæren) som beveger seg oppover med hastighet $v = 0{,}998c$. Atmosfærens tykkelse er lengdekontrahert:

$$L = \\frac{L_0}{\\gamma}$$

Med $L_0 = 15 \\text{ km}$ (atmosfærens tykkelse) og $\\gamma \\approx 15{,}8$:

$$L = \\frac{15\\,000}{15{,}8} \\approx 950 \\text{ m}$$

Fra myonets perspektiv er atmosfæren bare 950 m tykk! Med hastighet $0{,}998c$ og levetid $2{,}2 \\, \\mu\\text{s}$ kan myonet reise:

$$d = 0{,}998 \\times 3{,}00 \\times 10^8 \\times 2{,}2 \\times 10^{-6} \\approx 660 \\text{ m}$$

Mange myoner (de med lenger levetid enn gjennomsnittet) rekker å krysse 950 m. Resultatet er det samme som vi fikk fra tidsdilatasjon – relativitetsteorien er konsistent.`,
    },

    {
      id: 'fys2-6-3-note-konsistens',
      type: 'note',
      title: 'To sider av samme sak',
      content: `Tidsdilatasjon og lengdekontraksjon er ikke uavhengige effekter – de er **to perspektiver på det samme fenomenet**.

| Perspektiv | Effekt | Forklaring |
|:---|:---|:---|
| Jordens system | Tidsdilatasjon | Myonets klokke tikker saktere, så det lever lenger |
| Myonets system | Lengdekontraksjon | Atmosfæren er kortere, så myonet trenger ikke reise like langt |

Begge gir samme fysiske resultat: myonet når jordoverflaten. Denne konsistensen er et sterkt tegn på at teorien er korrekt.`,
    },

    // ---- Garasje-paradokset ----
    {
      id: 'fys2-6-3-garasje',
      type: 'text',
      content: `## Garasjeparadokset (stav-garasje-paradokset)

Et morsomt tankeeksperiment som illustrerer lengdekontraksjon og relativitet av samtidighet:

### Scenariet

En stav med egenlengde 20 m beveger seg med $v = 0{,}866c$ ($\\gamma = 2$) mot en garasje med egenlengde 10 m. Garasjen har en dør i hver ende.

**Fra garasjens perspektiv:**
Staven er lengdekontrahert til $L = 20/2 = 10$ m – den passer akkurat i garasjen! Begge dørene kan lukkes samtidig med staven inni.

**Fra stavens perspektiv:**
Garasjen er lengdekontrahert til $L = 10/2 = 5$ m – garasjen er bare en fjerdedel av stavens lengde! Staven passer åpenbart ikke.

### Oppløsningen

Paradokset løses av **relativitet av samtidighet**. «Begge dørene lukkes samtidig» gjelder bare i garasjens referansesystem. I stavens referansesystem lukkes dørene **ikke** samtidig:

- Den bakre døren lukkes først (staven er allerede inne)
- Den fremre døren lukkes senere (etter at staven har kommet ut)

Ingen del av staven opplever å være fanget. Det er ingen selvmotsigelse, bare ulik oppfatning av «når».`,
    },

    // ---- Rom-tid-diagrammer ----
    {
      id: 'fys2-6-3-romtid',
      type: 'text',
      content: `## Introduksjon til rom-tid-diagrammer

Et **rom-tid-diagram** (Minkowski-diagram) er et nyttig verktøy for å visualisere hendelser i spesiell relativitetsteori.

### Oppbygging

- **Horisontal akse**: romkoordinat $x$
- **Vertikal akse**: tidskoordinat $ct$ (vi ganger tiden med $c$ slik at begge akser har enhet lengde)
- **Verdenslinje**: Banen til et objekt gjennom rom-tid

### Viktige elementer

- Et objekt i ro har en vertikal verdenslinje (det beveger seg bare fremover i tid)
- Et objekt med konstant hastighet har en rett, skrå verdenslinje
- Lys har en verdenslinje med 45° vinkel (fordi $x = ct$, altså $x/ct = 1$)
- Lyskjeglen deler rom-tid i «fremtid», «fortid» og «annet sted» (hendelser som ikke kan påvirke hverandre)

### Lengdekontraksjon i diagrammet

I et rom-tid-diagram kan lengdekontraksjon forstås geometrisk. En stav i bevegelse har en skrå «samtidighetsflate» – de to endene er på ulike tidspunkt i det stasjonære systemet. Det vi kaller «lengden» er avstanden mellom endepunktene ved *samme tidspunkt*, og dette gir ulike verdier i ulike referansesystemer.`,
    },

    // ---- Eksempler ----
    {
      id: 'fys2-6-3-eks-romskip',
      type: 'example',
      title: 'Eksempel: Kontrahert romskip',
      problem: `Et romskip har en egenlengde på $L_0 = 120 \\text{ m}$. Det passerer en romstasjon med hastighet $v = 0{,}80c$.

a) Beregn romskipets lengde observert fra romstasjonen.
b) Hva er romskipets bredde og høyde (begge 25 m i eget system) sett fra romstasjonen?
c) Hvor lang tid tar det for romskipet å passere et punkt på romstasjonen, målt fra romstasjonen?`,
      solution: `**a)** Lorentzfaktoren: $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}64}} = \\frac{1}{0{,}60} = 1{,}667$

Observert lengde:
$$L = \\frac{L_0}{\\gamma} = \\frac{120}{1{,}667} = 72{,}0 \\text{ m}$$

**b)** Bredde og høyde er **vinkelrett** på bevegelsesretningen og er **uendret**:
- Bredde: $25 \\text{ m}$
- Høyde: $25 \\text{ m}$

Romskipet ser «flattrykt» ut – 72 m langt, men 25 m bredt og høyt.

**c)** Romstasjonen ser et 72 m langt skip passere med $0{,}80c$:

$$\\Delta t = \\frac{L}{v} = \\frac{72{,}0}{0{,}80 \\times 3{,}00 \\times 10^8} = \\frac{72{,}0}{2{,}40 \\times 10^8} = 3{,}00 \\times 10^{-7} \\text{ s} = 300 \\text{ ns}$$`,
    },

    {
      id: 'fys2-6-3-eks-avstand',
      type: 'example',
      title: 'Eksempel: Reise til Sirius',
      problem: `Stjernen Sirius er $d_0 = 8{,}6$ lysår fra Jorden. Et romskip reiser dit med hastighet $v = 0{,}95c$.

a) Hva er avstanden til Sirius i romskipets referansesystem?
b) Hvor lang tid tar reisen i Jordens referansesystem?
c) Hvor lang tid tar reisen i romskipets referansesystem? (Regn på to måter.)`,
      solution: `$\\gamma = \\frac{1}{\\sqrt{1 - 0{,}95^2}} = \\frac{1}{\\sqrt{0{,}0975}} = 3{,}203$

**a)** Kontrahert avstand:
$$d = \\frac{d_0}{\\gamma} = \\frac{8{,}6}{3{,}203} = 2{,}68 \\text{ lysår}$$

Fra romskipets perspektiv er Sirius bare 2,68 lysår unna.

**b)** Reisetid fra Jorden:
$$\\Delta t = \\frac{d_0}{v} = \\frac{8{,}6}{0{,}95} = 9{,}05 \\text{ år}$$

**c)** Metode 1 – Tidsdilatasjon:
$$\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{9{,}05}{3{,}203} = 2{,}83 \\text{ år}$$

Metode 2 – Kontrahert avstand:
$$\\Delta\\tau = \\frac{d}{v} = \\frac{2{,}68}{0{,}95} = 2{,}82 \\text{ år}$$

Begge metodene gir (tilnærmet) samme svar – forskjellen skyldes avrunding. Tidsdilatasjon og lengdekontraksjon gir konsistente resultater.`,
    },

    {
      id: 'fys2-6-3-eks-akselerator',
      type: 'example',
      title: 'Eksempel: Partikkel i akselerator',
      problem: `I CERN-akseleratoren LHC akselereres protoner til $v = 0{,}999\\,999\\,991c$ ($\\gamma \\approx 7461$). LHC-ringen har en omkrets på $L_0 = 26{,}7 \\text{ km}$.

Hva er ringomkretsen sett fra protonets referansesystem?`,
      solution: `$$L = \\frac{L_0}{\\gamma} = \\frac{26\\,700}{7461} = 3{,}58 \\text{ m}$$

Fra protonets perspektiv er den 26,7 km lange ringen bare 3,6 meter i omkrets! Protonet «ser» hele akseleratoren kontrahert til en liten ring.

Dette illustrerer det ekstreme ved relativistiske effekter: ved hastigheter ekstremt nær $c$ kan kilometer bli til meter.`,
    },

    {
      id: 'fys2-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Egenlengde** ($L_0$): Lengden målt i objektets eget referansesystem – den lengste mulige lengden
- **Lengdekontraksjon**: $L = L_0/\\gamma = L_0\\sqrt{1 - v^2/c^2}$
- Kontraksjonen skjer **bare i bevegelsesretningen** – vinkelrette dimensjoner er uendret
- Tidsdilatasjon og lengdekontraksjon er **to sider av samme sak** og gir konsistente resultater
- Garasjeparadokset løses ved relativitet av samtidighet
- Rom-tid-diagrammer visualiserer hendelser og verdenslinjer i relativistisk fysikk`,
    },
  ],

  exercises: [
    {
      id: 'fys2-6-3-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Et romskip har egenlengde $L_0 = 200 \\text{ m}$. Beregn romskipets observerte lengde for en stasjonær observatør når romskipet beveger seg med:

a) $v = 0{,}10c$
b) $v = 0{,}50c$
c) $v = 0{,}90c$
d) $v = 0{,}99c$`,
      hints: [
        'Bruk $L = L_0 \\sqrt{1 - v^2/c^2}$',
        'Alternativt: $L = L_0 / \\gamma$',
      ],
      solution: `**a)** $L = 200\\sqrt{1 - 0{,}01} = 200\\sqrt{0{,}99} = 200 \\times 0{,}995 = 199 \\text{ m}$

**b)** $L = 200\\sqrt{1 - 0{,}25} = 200\\sqrt{0{,}75} = 200 \\times 0{,}866 = 173 \\text{ m}$

**c)** $L = 200\\sqrt{1 - 0{,}81} = 200\\sqrt{0{,}19} = 200 \\times 0{,}436 = 87{,}2 \\text{ m}$

**d)** $L = 200\\sqrt{1 - 0{,}9801} = 200\\sqrt{0{,}0199} = 200 \\times 0{,}141 = 28{,}2 \\text{ m}$

Ved $0{,}99c$ er romskipet kontrahert til bare 14 % av sin egenlengde!`,
    },
    {
      id: 'fys2-6-3-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar hvorfor lengdekontraksjon kun skjer i bevegelsesretningen. Hva ville konsekvensen vært hvis den også gjaldt vinkelrett på bevegelsen?`,
      hints: [
        'Tenk deg to identiske rør som passerer hverandre i motsatte retninger.',
        'Ville det ene røret passe inni det andre?',
      ],
      solution: `Hvis lengdekontraksjon også gjaldt vinkelrett på bevegelsen, ville det oppstå logiske selvmotsigelser.

**Tankeeksperiment:** Tenk deg to identiske sylindre (f.eks. med diameter 10 cm) som beveger seg mot hverandre langs sin felles akse. Hvis tverrmålet også ble kontrahert:
- Observatør A (i ro med sylinder 1) mener sylinder 2 er smalere → sylinder 2 passer inni sylinder 1
- Observatør B (i ro med sylinder 2) mener sylinder 1 er smalere → sylinder 1 passer inni sylinder 2

Begge kan ikke ha rett – enten passer den ene inni den andre, eller ikke. Dette er en fysisk hendelse som ikke kan avhenge av hvem som observerer.

**Konklusjon:** Transversale dimensjoner kan **ikke** kontraheres. Symmetriargumentet viser at kontraksjon kun kan skje i bevegelsesretningen, og dette er nettopp det relativitetsteorien forutsier.`,
    },
    {
      id: 'fys2-6-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `En partikkel med egenlengde $L_0 = 2{,}0 \\text{ cm}$ observeres å ha lengde $L = 1{,}0 \\text{ cm}$ i laboratoriet.

a) Beregn Lorentzfaktoren.
b) Finn partikkelens hastighet.`,
      hints: [
        '$\\gamma = L_0/L$',
        '$v = c\\sqrt{1 - 1/\\gamma^2}$',
      ],
      solution: `**a)** $L = L_0/\\gamma$ gir:

$$\\gamma = \\frac{L_0}{L} = \\frac{2{,}0}{1{,}0} = 2{,}0$$

**b)** $v = c\\sqrt{1 - \\frac{1}{\\gamma^2}} = c\\sqrt{1 - \\frac{1}{4}} = c\\sqrt{0{,}75} = 0{,}866c$

Partikkelen beveger seg med $0{,}866c \\approx 2{,}6 \\times 10^8$ m/s.`,
    },
    {
      id: 'fys2-6-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Et myon dannes $h = 10 \\text{ km}$ over jordoverflaten og beveger seg nedover med $v = 0{,}990c$. Myonets egentid er $\\tau = 2{,}2 \\, \\mu\\text{s}$.

Forklar hvordan myonet når jordoverflaten fra myonets eget perspektiv (lengdekontraksjon), og vis at resultatet er konsistent med tidsdilatasjonsforklaringen fra Jordens perspektiv.`,
      hints: [
        'Fra myonets system: atmosfæren er kontrahert.',
        'Beregn $\\gamma$ og den kontraherte avstanden.',
        'Sjekk om myonet rekker å reise den kontraherte avstanden.',
      ],
      solution: `**Lorentzfaktor:** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}990^2}} = \\frac{1}{\\sqrt{0{,}0199}} = 7{,}09$

**Myonets perspektiv (lengdekontraksjon):**
Atmosfærens tykkelse er kontrahert:
$$h' = \\frac{h}{\\gamma} = \\frac{10\\,000}{7{,}09} = 1\\,410 \\text{ m} = 1{,}41 \\text{ km}$$

Avstand myonet kan reise i sin egentid:
$$d = v \\cdot \\tau = 0{,}990 \\times 3{,}00 \\times 10^8 \\times 2{,}2 \\times 10^{-6} = 653 \\text{ m}$$

Myonet rekker å reise 653 m, men atmosfæren er 1410 m. Med gjennomsnittlig levetid rekker det ikke helt, men mange myoner lever lenger enn gjennomsnittet.

**Jordens perspektiv (tidsdilatasjon):**
Observert levetid: $\\Delta t = \\gamma \\tau = 7{,}09 \\times 2{,}2 \\times 10^{-6} = 15{,}6 \\, \\mu\\text{s}$
Avstand: $d = 0{,}990 \\times 3{,}00 \\times 10^8 \\times 15{,}6 \\times 10^{-6} = 4\\,630 \\text{ m} = 4{,}63 \\text{ km}$

**Konsistenssjekk:** I begge tilfeller er forholdet mellom tilgjengelig avstand og tilbakelagt avstand det samme:
- Myonets system: $1410/653 \\approx 2{,}16$
- Jordens system: $10000/4630 \\approx 2{,}16$ ✓`,
    },
    {
      id: 'fys2-6-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `En stav med egenlengde $20 \\text{ m}$ beveger seg med $v = 0{,}866c$ ($\\gamma = 2{,}0$) gjennom en garasje med egenlengde $10 \\text{ m}$.

a) Hva er stavens lengde i garasjens referansesystem?
b) Hva er garasjens lengde i stavens referansesystem?
c) Forklar det tilsynelatende paradokset og hvordan det løses.`,
      hints: [
        'Bruk $L = L_0/\\gamma$ med $\\gamma = 2$.',
        'Tenk på relativitet av samtidighet.',
      ],
      solution: `**a)** Staven i garasjens system: $L_{\\text{stav}} = 20/2 = 10 \\text{ m}$. Staven passer akkurat i garasjen!

**b)** Garasjen i stavens system: $L_{\\text{garasje}} = 10/2 = 5 \\text{ m}$. Staven (20 m) er fire ganger lenger enn garasjen!

**c)** **Paradokset:** I garasjens system passer staven inni, og begge dørene kan lukkes samtidig. I stavens system passer staven ikke – den er fire ganger lenger.

**Oppløsning:** Nøkkelen er **relativitet av samtidighet**. «Begge dørene lukkes samtidig» er bare sant i garasjens referansesystem. I stavens system skjer lukningene på ulike tidspunkt:
1. Først lukkes bakdøren (bak staven)
2. Staven fortsetter å bevege seg gjennom
3. Deretter lukkes frontdøren (foran staven)

På intet tidspunkt er staven fanget inne. Begge observatørene enes om de fysiske hendelsene (hvilke deler av staven som er inne i garasjen til hvilke tider), men de er uenige om hvilke hendelser som er samtidige.`,
    },
    {
      id: 'fys2-6-3-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Stjernen Vega er $25{,}0$ lysår fra Jorden. Et romskip reiser dit med hastighet $v = 0{,}99c$.

a) Hva er avstanden til Vega i romskipets referansesystem?
b) Hvor lang tid tar reisen for astronauten? (Bruk lengdekontraksjon.)
c) Kontroller svaret med tidsdilatasjon.`,
      hints: [
        '$\\gamma(0{,}99c) \\approx 7{,}09$',
      ],
      solution: `$\\gamma = 7{,}09$

**a)** $d = \\frac{25{,}0}{7{,}09} = 3{,}53 \\text{ lysår}$

**b)** Reisetid for astronauten:
$$\\Delta\\tau = \\frac{d}{v} = \\frac{3{,}53}{0{,}99} = 3{,}56 \\text{ år}$$

**c)** Kontroll med tidsdilatasjon:
Reisetid fra Jorden: $\\Delta t = \\frac{25{,}0}{0{,}99} = 25{,}25 \\text{ år}$

Astronautens tid: $\\Delta\\tau = \\frac{\\Delta t}{\\gamma} = \\frac{25{,}25}{7{,}09} = 3{,}56 \\text{ år}$ ✓

Begge metoder gir $3{,}56$ år.`,
    },
    {
      id: 'fys2-6-3-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et romskip ($L_0 = 100 \\text{ m}$) beveger seg med $v = 0{,}60c$ forbi en romstasjon. En observatør på romstasjonen måler tiden det tar for romskipet å passere et bestemt punkt.

a) Hva er romskipets kontraherte lengde?
b) Hvor lang tid tar passeringen (romstasjonens klokke)?
c) Hvor lang tid tar passeringen ifølge romskipets klokke?
d) Hvilken av tidene i b) og c) er egentiden? Begrunn svaret.`,
      hints: [
        'For d): Tenk på hvilken observatør som opplever begge hendelsene (front og hale passerer) på samme sted.',
      ],
      solution: `$\\gamma = \\frac{1}{\\sqrt{1 - 0{,}36}} = \\frac{1}{0{,}80} = 1{,}25$

**a)** $L = L_0/\\gamma = 100/1{,}25 = 80{,}0 \\text{ m}$

**b)** Romstasjonen ser et 80 m skip passere med $0{,}60c$:
$$\\Delta t = \\frac{L}{v} = \\frac{80{,}0}{0{,}60 \\times 3{,}00 \\times 10^8} = 4{,}44 \\times 10^{-7} \\text{ s} = 444 \\text{ ns}$$

**c)** Fra romskipets perspektiv beveger punktet seg forbi romskipets egenlengde:
$$\\Delta\\tau_{\\text{skip}} = \\frac{L_0}{v\\gamma^2}$$

Alternativt med tidsdilatasjon: $\\Delta\\tau_{\\text{skip}} = \\gamma \\cdot \\Delta t$?

Nei – her er det romstasjonens observatør som opplever begge hendelsene på samme sted (begge skjer ved punktet). Altså er $\\Delta t$ egentiden:

$$\\Delta t_{\\text{skip}} = \\gamma \\cdot \\Delta t_{\\text{stasjon}} = 1{,}25 \\times 444 = 556 \\text{ ns}$$

**d)** **Romstasjonens tid er egentiden.** Observatøren på romstasjonen opplever begge hendelsene – «romskipets front passerer» og «romskipets hale passerer» – på **samme sted** (det faste punktet). Derfor er romstasjonens klokke egentidsklokken, og den viser det korteste tidsintervallet ($444$ ns < $556$ ns).`,
    },
    {
      id: 'fys2-6-3-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Ved LHC-akseleratoren akselereres bly-ioner (med en diameter på ca. $14 \\text{ fm} = 14 \\times 10^{-15} \\text{ m}$) til $\\gamma = 2510$.

a) Hva er bly-ionens lengde i bevegelsesretningen i labsystemet?
b) Hva er bly-ionens diameter vinkelrett på bevegelsesretningen?
c) Beskriv formen til bly-ionet slik det «ser ut» i labsystemet.`,
      hints: [
        'Husk: kontraksjon gjelder bare i bevegelsesretningen.',
        'En sfære blir et oblat sfæroid (pannekakeform).',
      ],
      solution: `**a)** Lengde i bevegelsesretningen:
$$L = \\frac{L_0}{\\gamma} = \\frac{14 \\times 10^{-15}}{2510} = 5{,}58 \\times 10^{-18} \\text{ m} = 5{,}58 \\text{ am (attometer)}$$

Det er ca. 5,6 tusendeler av en femtometer!

**b)** Diameter vinkelrett på bevegelsesretningen er **uendret**:
$$d_{\\perp} = 14 \\text{ fm} = 14 \\times 10^{-15} \\text{ m}$$

**c)** Bly-ionet, som i ro er tilnærmet sfærisk, ser ut som en ekstremt flat skive (pannekake) i labsystemet:
- Diameter: 14 fm
- Tykkelse: 0,0056 fm

Forholdet mellom diameter og tykkelse er $14/0{,}0056 = 2510$ – ionet er 2510 ganger bredere enn det er tykt! Det ligner en uhyre tynn kredittkort i kosmisk skala.`,
    },
    {
      id: 'fys2-6-3-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Et romskip reiser fra Jorden til en planet som er $d_0 = 40$ lysår unna (målt fra Jorden). Astronauten ønsker at reisen skal ta maksimalt $\\Delta\\tau = 5$ år (skipets klokke).

a) Hvilken hastighet må romskipet ha?
b) Hva er avstanden til planeten i romskipets referansesystem?
c) Hvor lang tid tar reisen målt fra Jorden?`,
      hints: [
        'Fra romskipets system: $d = v \\cdot \\Delta\\tau$, og $d = d_0/\\gamma$.',
        'Kombiner disse til å løse for $v$.',
      ],
      solution: `**a)** Fra romskipets system er avstanden kontrahert: $d = d_0/\\gamma$

Romskipet reiser denne avstanden i egentid $\\Delta\\tau$:
$$d = v \\cdot \\Delta\\tau$$

Altså: $\\frac{d_0}{\\gamma} = v \\cdot \\Delta\\tau$

$$\\frac{d_0}{\\Delta\\tau} = v\\gamma = \\frac{v}{\\sqrt{1 - v^2/c^2}}$$

La $\\beta = v/c$: $\\frac{d_0}{c\\Delta\\tau} = \\frac{\\beta}{\\sqrt{1 - \\beta^2}}$

$$\\frac{40}{5} = 8 = \\frac{\\beta}{\\sqrt{1 - \\beta^2}}$$

$$64(1 - \\beta^2) = \\beta^2$$

$$64 = 65\\beta^2 \\implies \\beta^2 = \\frac{64}{65} \\implies \\beta = \\sqrt{0{,}9846} = 0{,}9923$$

$$v = 0{,}992c$$

**b)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}9846}} = \\frac{1}{\\sqrt{0{,}0154}} = 8{,}06$

$$d = \\frac{40}{8{,}06} = 4{,}96 \\text{ lysår}$$

**c)** $\\Delta t = \\frac{d_0}{v} = \\frac{40}{0{,}992} = 40{,}3 \\text{ år}$ (fra Jorden)

Kontroll: $\\Delta\\tau = \\Delta t/\\gamma = 40{,}3/8{,}06 = 5{,}0$ år ✓`,
    },
    {
      id: 'fys2-6-3-ex10',
      type: 'classic',
      difficulty: 'lett',
      task: `Sammenlign tidsdilatasjon og lengdekontraksjon ved å fylle ut:

a) Egentiden er den \\underline{\\quad} (korteste/lengste) tiden. Hvem måler den?
b) Egenlengden er den \\underline{\\quad} (korteste/lengste) lengden. Hvem måler den?
c) Hva er sammenhengen mellom Lorentzfaktoren i de to formlene?`,
      solution: `**a)** Egentiden er den **korteste** tiden mellom to hendelser. Den måles av observatøren som er til stede ved begge hendelsene (hendelsene skjer på samme sted i dette referansesystemet). Observerte tider er alltid lengre: $\\Delta t = \\gamma \\Delta\\tau \\geq \\Delta\\tau$.

**b)** Egenlengden er den **lengste** lengden av et objekt. Den måles av observatøren som er i ro i forhold til objektet. Observerte lengder er alltid kortere: $L = L_0/\\gamma \\leq L_0$.

**c)** Begge formlene bruker den **samme** Lorentzfaktoren $\\gamma = 1/\\sqrt{1 - v^2/c^2}$:
- Tidsdilatasjon: Tiden **multipliseres** med $\\gamma$ (blir lengre)
- Lengdekontraksjon: Lengden **divideres** med $\\gamma$ (blir kortere)

Denne sammenhengen sikrer at fysikken er konsistent uansett referansesystem.`,
    },
  ],
};


// ============================================================================
// Kapittel 6.4: Relativistisk energi og masse
// ============================================================================

export const CHAPTER_FYSIKK2_6_4: TextbookChapter = {
  id: 'fysikk2-6-4',
  courseId: 'fys2',
  chapterNumber: '6.4',
  title: 'Relativistisk energi og masse',
  description:
    'Relativistisk bevegelsesmengde, total energi, hvileenergi, kinetisk energi, masse-energi-ekvivalens og energi-bevegelsesmengde-relasjonen.',
  estimatedMinutes: 85,
  prerequisites: ['fysikk2-6-2'],
  competenceGoals: [
    'gjøre rede for Einsteins masse-energi-ekvivalens E = mc²',
    'beregne relativistisk bevegelsesmengde og energi',
    'bruke energi-bevegelsesmengde-relasjonen',
    'drøfte hvorfor ingen massiv partikkel kan nå lyshastigheten',
    'beregne energifrigjøring i kjernereaksjoner',
  ],
  content: [
    // ---- Introduksjon ----
    {
      id: 'fys2-6-4-intro',
      type: 'text',
      content: `# Relativistisk energi og masse

Den kanskje mest berømte ligningen i all vitenskap er Einsteins $E = mc^2$. I dette kapittelet skal vi forstå hva denne ligningen egentlig betyr, og utforske de dype konsekvensene av at masse og energi er ekvivalente størrelser.

Vi skal se at den klassiske beskrivelsen av bevegelsesmengde og kinetisk energi må modifiseres ved høye hastigheter, og at dette leder til forbløffende innsikter om naturen.`,
    },

    // ---- Relativistisk bevegelsesmengde ----
    {
      id: 'fys2-6-4-bevegelsesmengde',
      type: 'text',
      content: `## Relativistisk bevegelsesmengde

I klassisk mekanikk er bevegelsesmengden (impulsen) til et objekt med masse $m$ og hastighet $v$:

$$p_{\\text{klassisk}} = mv$$

Denne definisjonen sikrer at bevegelsesmengden er bevart i kollisjoner. Men ved høye hastigheter viser det seg at den klassiske formelen **ikke** gir bevart bevegelsesmengde. Vi trenger en modifikasjon.

### Problemet med klassisk bevegelsesmengde

Tenk deg en perfekt elastisk kollisjon mellom to identiske partikler, analysert i to ulike referansesystemer. Hvis vi bruker den klassiske definisjonen $p = mv$ sammen med den relativistiske hastighetstransformasjonen, finner vi at bevegelsesmengden **ikke** er bevart i det andre referansesystemet. Dette bryter med det første postulatet – naturlovene skal være de samme i alle inertielle systemer.

### Løsningen

Einstein viste at bevegelsesmengden er bevart i alle referansesystemer dersom vi definerer:

$$\\vec{p} = \\gamma m \\vec{v} = \\frac{m\\vec{v}}{\\sqrt{1 - v^2/c^2}}$$

Her er $m$ den **invariante massen** (også kalt hvilemassen) – massen målt i objektets eget referansesystem.`,
    },

    {
      id: 'fys2-6-4-formel-p',
      type: 'formula',
      title: 'Relativistisk bevegelsesmengde',
      latex: `p = \\gamma mv = \\frac{mv}{\\sqrt{1 - v^2/c^2}}`,
      description: `Der $m$ er objektets invariante masse (hvilemasse), $v$ er hastigheten, og $\\gamma$ er Lorentzfaktoren. For $v \\ll c$ gir denne $p \\approx mv$ (klassisk). For $v \\to c$ vokser $p \\to \\infty$, uansett hvor liten massen er.`,
    },

    {
      id: 'fys2-6-4-p-diskusjon',
      type: 'text',
      content: `### Egenskaper ved relativistisk bevegelsesmengde

1. **Lav-hastighets-grense:** For $v \\ll c$ er $\\gamma \\approx 1$, og $p \\approx mv$ (klassisk resultat)
2. **Høy hastighet:** Når $v \\to c$, vokser $\\gamma \\to \\infty$ og dermed $p \\to \\infty$
3. **Uendelig bevegelsesmengde ved $c$:** For å akselerere et massivt objekt til lyshastigheten trengs uendelig bevegelsesmengde – og dermed uendelig energi. **Det er derfor ingen massiv partikkel kan nå lyshastigheten.**

### Historisk merknad: «Relativistisk masse»

I eldre lærebøker møter man begrepet «relativistisk masse» $m_{\\text{rel}} = \\gamma m$, slik at $p = m_{\\text{rel}}v$. Denne tolkingen brukes sjelden i dag. Moderne fysikk foretrekker å bruke **invariant masse** $m$ (uavhengig av hastighet) og legge all hastighetsavhengighet i Lorentzfaktoren.`,
    },

    // ---- Total energi ----
    {
      id: 'fys2-6-4-energi',
      type: 'text',
      content: `## Relativistisk energi

Einstein utledet at den totale energien til en fri partikkel med masse $m$ og hastighet $v$ er:

$$E = \\gamma mc^2 = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}}$$

Denne formelen har to bemerkelseverdige konsekvenser:

### 1. Hvileenergi

Når objektet er i ro ($v = 0$, $\\gamma = 1$), har det fortsatt energi:

$$E_0 = mc^2$$

Dette er **hvileenergien** – den energien som er «lagret» i selve massen. En masse $m$ er ekvivalent med en energi $mc^2$. Dette er den berømte formelen som viser at **masse er en form for energi**.`,
    },

    {
      id: 'fys2-6-4-formel-E',
      type: 'formula',
      title: 'Total relativistisk energi',
      latex: `E = \\gamma mc^2 = \\frac{mc^2}{\\sqrt{1 - v^2/c^2}}`,
      description: `Total energi til et fritt objekt med invariant masse $m$ og hastighet $v$. For et objekt i ro ($v = 0$): $E_0 = mc^2$ (hvileenergi). For $v \\to c$: $E \\to \\infty$.`,
    },

    {
      id: 'fys2-6-4-formel-E0',
      type: 'formula',
      title: 'Masse-energi-ekvivalens (Einsteins berømte ligning)',
      latex: `E_0 = mc^2`,
      description: `Hvileenergien til et objekt er lik massen multiplisert med lyshastigheten i annen potens. Denne ligningen uttrykker at masse og energi er to sider av samme sak. Selv en liten masse inneholder en enorm mengde energi fordi $c^2 \\approx 9 \\times 10^{16} \\text{ m}^2/\\text{s}^2$ er et veldig stort tall.`,
    },

    {
      id: 'fys2-6-4-note-mc2',
      type: 'note',
      title: 'Hvor mye energi er i masse?',
      content: `For å illustrere hvor mye energi som er lagret i masse:

**1 kg masse** inneholder:
$$E = mc^2 = 1 \\times (3{,}00 \\times 10^8)^2 = 9{,}00 \\times 10^{16} \\text{ J} = 90 \\text{ PJ}$$

Dette tilsvarer:
- Energien fra ca. **25 milliarder kWh** (hele Norges strømforbruk i ca. 2 måneder)
- Eksplosjonsenergien til ca. **21 megatonn TNT** (en stor hydrogenbombe)
- Nok energi til å varme opp ca. **215 milliarder kopper kaffe**

Heldigvis kan vi ikke enkelt omdanne all masse til energi. I kjernereaksjoner frigjøres bare en liten brøkdel av masseenergien.`,
    },

    // ---- Kinetisk energi ----
    {
      id: 'fys2-6-4-kinetisk',
      type: 'text',
      content: `## Relativistisk kinetisk energi

Den kinetiske energien er forskjellen mellom total energi og hvileenergi:

$$E_k = E - E_0 = \\gamma mc^2 - mc^2 = (\\gamma - 1)mc^2$$

### Kontroll: Klassisk grense

For $v \\ll c$ kan vi bruke tilnærmingen:

$$\\gamma \\approx 1 + \\frac{1}{2}\\frac{v^2}{c^2}$$

Da blir:

$$E_k = (\\gamma - 1)mc^2 \\approx \\frac{1}{2}\\frac{v^2}{c^2} \\cdot mc^2 = \\frac{1}{2}mv^2$$

Vi gjenfinner den klassiske kinetiske energien! Den relativistiske formelen inneholder den klassiske som et spesialtilfelle.`,
    },

    {
      id: 'fys2-6-4-formel-Ek',
      type: 'formula',
      title: 'Relativistisk kinetisk energi',
      latex: `E_k = (\\gamma - 1)mc^2`,
      description: `Kinetisk energi er total energi minus hvileenergi. For $v \\ll c$: $E_k \\approx \\frac{1}{2}mv^2$ (klassisk). For $v \\to c$: $E_k \\to \\infty$ (det kreves uendelig energi for å nå lyshastigheten).`,
    },

    // ---- Energi-bevegelsesmengde ----
    {
      id: 'fys2-6-4-E-p-relasjon',
      type: 'text',
      content: `## Energi-bevegelsesmengde-relasjonen

Det finnes en viktig relasjon mellom energi, bevegelsesmengde og masse som er uavhengig av hastighet:

$$E^2 = (pc)^2 + (mc^2)^2$$

Denne kan utledes fra definisjonene $E = \\gamma mc^2$ og $p = \\gamma mv$:

$$E^2 - (pc)^2 = (\\gamma mc^2)^2 - (\\gamma mvc)^2 = \\gamma^2 m^2 c^4 (1 - v^2/c^2)$$

Siden $\\gamma^2 (1 - v^2/c^2) = 1$:

$$E^2 - (pc)^2 = m^2c^4 = (mc^2)^2$$

### Spesialtilfelle: Masseløse partikler

For partikler uten masse ($m = 0$), som fotoner, forenkles relasjonen til:

$$E = pc$$

Fotoner har energi og bevegelsesmengde, men ingen masse. Deres energi er utelukkende knyttet til bevegelsesmengden.`,
    },

    {
      id: 'fys2-6-4-formel-Ep',
      type: 'formula',
      title: 'Energi-bevegelsesmengde-relasjonen',
      latex: `E^2 = (pc)^2 + (mc^2)^2`,
      description: `Denne invariante relasjonen knytter total energi $E$, bevegelsesmengde $p$ og invariant masse $m$ sammen. Den gjelder for alle partikler – massive og masseløse. For masseløse partikler ($m = 0$): $E = pc$. For partikler i ro ($p = 0$): $E = mc^2$.`,
    },

    {
      id: 'fys2-6-4-note-trekant',
      type: 'note',
      title: 'Energitrekanten – en huskeregel',
      content: `Energi-bevegelsesmengde-relasjonen kan visualiseres som en rettvinklet trekant:

- **Hypotenusen**: Total energi $E$
- **Katete 1**: Bevegelsesmengde-energi $pc$
- **Katete 2**: Hvileenergi $mc^2$

Pytagoras gir: $E^2 = (pc)^2 + (mc^2)^2$

Denne «energitrekanten» er nyttig for å huske relasjonen og for å se spesialtilfellene:
- Partikkel i ro: $pc = 0$, trekanten er en strek, $E = mc^2$
- Masseløs partikkel: $mc^2 = 0$, trekanten er en strek, $E = pc$
- Ultarelativistisk partikkel ($p \\gg mc$): $E \\approx pc$ (trekanten er nesten flat)`,
    },

    // ---- Hvorfor ikke lyshastigheten? ----
    {
      id: 'fys2-6-4-lyshasighet',
      type: 'text',
      content: `## Hvorfor kan ingen massiv partikkel nå lyshastigheten?

La oss se på dette fra energiperspektivet. For å akselerere et objekt med masse $m$ til hastighet $v$ trengs kinetisk energi:

$$E_k = (\\gamma - 1)mc^2$$

Når $v \\to c$:
- $\\gamma \\to \\infty$
- $E_k \\to \\infty$

Det kreves **uendelig energi** for å akselerere et massivt objekt til lyshastigheten. Siden uendelig energi ikke er tilgjengelig, kan ingen massiv partikkel nå $c$.

### Hva med partikler i akseleratorer?

I partikkelakseleratorer som LHC akselereres protoner til $v = 0{,}999\\,999\\,991c$ ($\\gamma \\approx 7461$). Hvert proton har da en energi på ca. 7 TeV (teraelektronvolt). For å øke hastigheten ytterligere mot $c$ ville det kreves stadig mer energi, uten noen gang å nå $c$.

### Masseløse partikler

Fotoner (lyspartikler) beveger seg alltid med hastighet $c$. De har ingen masse og kan ikke bevege seg med noen annen hastighet. De starter med $v = c$ fra det øyeblikket de oppstår.

Oppsummert:
- **Massive partikler**: Alltid $v < c$, kan akselereres mot men aldri til $c$
- **Masseløse partikler**: Alltid $v = c$, kan ikke bremses eller akselereres`,
    },

    {
      id: 'fys2-6-4-warning-c',
      type: 'warning',
      title: 'Vanlig misforståelse om lyshastigheten',
      content: `**Feil:** «Ingenting kan bevege seg raskere enn lyset.»

**Mer presist:** Ingen *informasjon* eller *energi* kan overføres raskere enn $c$. Ingen massiv partikkel kan akselereres til eller forbi $c$.

Det finnes fenomener som tilsynelatende «beveger seg» raskere enn lys (for eksempel lyspunktet fra en roterende lommelykt på en fjern vegg, eller «superluminal» galakser i astronomien), men disse overfører ikke informasjon eller energi med denne hastigheten.`,
    },

    // ---- Kjernereaksjoner ----
    {
      id: 'fys2-6-4-kjerne',
      type: 'text',
      content: `## Masse-energi-ekvivalens i kjernereaksjoner

Den mest dramatiske demonstrasjonen av $E = mc^2$ finner vi i kjernereaksjoner, der en målbar mengde masse omdannes til energi.

### Massedefekt

Når atomkjerner dannes fra protoner og nøytroner, er kjernen **lettere** enn summen av enkeltpartiklene. Denne masseforskjellen kalles **massedefekten** $\\Delta m$, og den tilsvarende energien er **bindingsenergien**:

$$E_{\\text{binding}} = \\Delta m \\cdot c^2$$

### Fisjon (kjernespalting)

I kjernefysisk fisjon spaltes en tung kjerne (som uran-235) i to lettere kjerner. De lettere kjernene har samlet sett litt mindre masse enn den opprinnelige kjernen. Masseforskjellen frigjøres som energi.

**Eksempel:** Fisjon av $^{235}$U:

$$^{235}_{92}\\text{U} + n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3n + \\text{energi}$$

Massedefekten er ca. $\\Delta m \\approx 3{,}2 \\times 10^{-28} \\text{ kg}$, som gir:

$$E = \\Delta m \\cdot c^2 = 3{,}2 \\times 10^{-28} \\times (3{,}0 \\times 10^8)^2 \\approx 2{,}9 \\times 10^{-11} \\text{ J} \\approx 180 \\text{ MeV}$$

### Fusjon (kjernesammenslåing)

I kjernefusjon smelter lette kjerner (som hydrogen) sammen til tyngre kjerner (som helium). Igjen er produktet lettere enn reaktantene.

**Eksempel:** Fusjon av deuterium og tritium:

$$^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\to ^{4}_{2}\\text{He} + n + 17{,}6 \\text{ MeV}$$

Dette er prosessen som driver Solen. Hvert sekund omdanner Solen ca. 600 millioner tonn hydrogen til helium, og ca. 4,3 millioner tonn masse omdannes til energi – noe som tilsvarer en luminositet på $3{,}8 \\times 10^{26}$ W.`,
    },

    {
      id: 'fys2-6-4-note-enheter',
      type: 'note',
      title: 'Masse i energienheter',
      content: `I partikkelfysikk er det vanlig å oppgi masse i energienheter, typisk $\\text{MeV}/c^2$ eller $\\text{GeV}/c^2$:

| Partikkel | Masse |
|:---|:---|
| Elektron | $0{,}511 \\text{ MeV}/c^2$ |
| Proton | $938{,}3 \\text{ MeV}/c^2$ |
| Nøytron | $939{,}6 \\text{ MeV}/c^2$ |
| Higgs-boson | $125{,}1 \\text{ GeV}/c^2$ |

Å skrive masse i $\\text{MeV}/c^2$ betyr at $E_0 = mc^2$ gir hvileenergien direkte i MeV:
$$E_0 = 938{,}3 \\text{ MeV}/c^2 \\times c^2 = 938{,}3 \\text{ MeV}$$

Enheten $1 \\text{ eV} = 1{,}602 \\times 10^{-19} \\text{ J}$ og $1 \\text{ MeV} = 10^6 \\text{ eV}$.`,
    },

    // ---- Eksempler ----
    {
      id: 'fys2-6-4-eks-proton',
      type: 'example',
      title: 'Eksempel: Proton i LHC',
      problem: `Et proton (masse $m = 1{,}67 \\times 10^{-27} \\text{ kg}$) akselereres til $v = 0{,}999c$ i en partikkelakselerator.

a) Beregn protonets relativistiske bevegelsesmengde.
b) Sammenlign med den klassiske bevegelsesmengden.
c) Beregn protonets totale energi.
d) Beregn protonets kinetiske energi.`,
      solution: `$\\gamma = \\frac{1}{\\sqrt{1 - 0{,}999^2}} = \\frac{1}{\\sqrt{0{,}001998}} = 22{,}37$

**a) Relativistisk bevegelsesmengde:**

$$p = \\gamma mv = 22{,}37 \\times 1{,}67 \\times 10^{-27} \\times 0{,}999 \\times 3{,}00 \\times 10^8$$

$$p = 22{,}37 \\times 5{,}006 \\times 10^{-19} = 1{,}12 \\times 10^{-17} \\text{ kg m/s}$$

**b) Klassisk bevegelsesmengde:**

$$p_{\\text{kl}} = mv = 1{,}67 \\times 10^{-27} \\times 2{,}997 \\times 10^8 = 5{,}00 \\times 10^{-19} \\text{ kg m/s}$$

Den relativistiske bevegelsesmengden er $22{,}4$ ganger større enn den klassiske!

**c) Total energi:**

$$E = \\gamma mc^2 = 22{,}37 \\times 1{,}67 \\times 10^{-27} \\times (3{,}00 \\times 10^8)^2$$

$$E = 22{,}37 \\times 1{,}503 \\times 10^{-10} = 3{,}36 \\times 10^{-9} \\text{ J}$$

$$E = \\frac{3{,}36 \\times 10^{-9}}{1{,}602 \\times 10^{-19}} \\text{ eV} = 2{,}10 \\times 10^{10} \\text{ eV} = 21{,}0 \\text{ GeV}$$

**d) Kinetisk energi:**

$$E_k = (\\gamma - 1)mc^2 = (22{,}37 - 1) \\times 1{,}503 \\times 10^{-10} = 21{,}37 \\times 1{,}503 \\times 10^{-10}$$

$$E_k = 3{,}21 \\times 10^{-9} \\text{ J} \\approx 20{,}1 \\text{ GeV}$$

Merk: Kinetisk energi ($20{,}1$ GeV) er mye større enn hvileenergien ($0{,}938$ GeV) – protonet er ultrarelativistisk.`,
    },

    {
      id: 'fys2-6-4-eks-annihilasjon',
      type: 'example',
      title: 'Eksempel: Elektron-positron-annihilasjon',
      problem: `Når et elektron og et positron (anti-elektron) møtes, annihilerer de og all masse omdannes til energi i form av fotoner. Elektronets masse er $m_e = 9{,}109 \\times 10^{-31} \\text{ kg}$.

a) Beregn den totale energien som frigjøres (forutsatt at begge partiklene er i ro).
b) Oppgi svaret i MeV.
c) Hvor mange fotoner dannes (minst), og hva er energien til hvert foton?`,
      solution: `**a)** Total masse som annihileres: $2m_e = 2 \\times 9{,}109 \\times 10^{-31} = 1{,}822 \\times 10^{-30} \\text{ kg}$

$$E = 2m_e c^2 = 1{,}822 \\times 10^{-30} \\times (3{,}00 \\times 10^8)^2 = 1{,}640 \\times 10^{-13} \\text{ J}$$

**b)** $E = \\frac{1{,}640 \\times 10^{-13}}{1{,}602 \\times 10^{-13}} = 1{,}024 \\text{ MeV} \\approx 1{,}022 \\text{ MeV}$

Altså $2 \\times 0{,}511 \\text{ MeV} = 1{,}022 \\text{ MeV}$.

**c)** Det dannes **minst 2 fotoner**. (Én foton kan ikke bevare bevegelsesmengden – med begge partiklene i ro er total bevegelsesmengde null, men ett foton har alltid $p \\neq 0$.)

Med to fotoner, bevegelsesmengdebevarelse krever at de beveger seg i motsatte retninger med lik energi:

$$E_{\\text{foton}} = \\frac{1{,}022}{2} = 0{,}511 \\text{ MeV}$$

Hvert foton har energi $0{,}511$ MeV, som tilsvarer gammasstrålinger.`,
    },

    {
      id: 'fys2-6-4-eks-sol',
      type: 'example',
      title: 'Eksempel: Solens energiproduksjon',
      problem: `Solen stråler ut energi med en effekt (luminositet) på $L = 3{,}846 \\times 10^{26} \\text{ W}$.

a) Hvor mye masse taper Solen per sekund?
b) Hvor mye masse taper Solen per år?
c) Solens masse er $M = 1{,}989 \\times 10^{30} \\text{ kg}$. Hvor stor brøkdel av sin masse taper Solen per år?`,
      solution: `**a)** Energi per sekund = effekt: $E = L = 3{,}846 \\times 10^{26} \\text{ J}$

$$\\Delta m = \\frac{E}{c^2} = \\frac{3{,}846 \\times 10^{26}}{(3{,}00 \\times 10^8)^2} = \\frac{3{,}846 \\times 10^{26}}{9{,}00 \\times 10^{16}}$$

$$\\Delta m = 4{,}27 \\times 10^{9} \\text{ kg/s} \\approx 4{,}3 \\text{ millioner tonn per sekund}$$

**b)** Per år ($3{,}156 \\times 10^7$ s):

$$\\Delta m_{\\text{år}} = 4{,}27 \\times 10^9 \\times 3{,}156 \\times 10^7 = 1{,}35 \\times 10^{17} \\text{ kg}$$

Ca. 135 billioner tonn per år.

**c)** $\\frac{\\Delta m_{\\text{år}}}{M} = \\frac{1{,}35 \\times 10^{17}}{1{,}989 \\times 10^{30}} = 6{,}78 \\times 10^{-14}$

Solen taper ca. $7 \\times 10^{-12} \\%$ av sin masse per år – en umåtelig liten andel. Solen har nok «drivstoff» til å skinne i flere milliarder år til.`,
    },

    {
      id: 'fys2-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Relativistisk bevegelsesmengde**: $p = \\gamma mv$ – vokser mot uendelig når $v \\to c$
- **Total energi**: $E = \\gamma mc^2$ – inkluderer hvileenergi og kinetisk energi
- **Hvileenergi**: $E_0 = mc^2$ – masse er en form for energi
- **Kinetisk energi**: $E_k = (\\gamma - 1)mc^2$ – gir $\\frac{1}{2}mv^2$ for $v \\ll c$
- **Energi-bevegelsesmengde-relasjonen**: $E^2 = (pc)^2 + (mc^2)^2$
- **Masseløse partikler**: $E = pc$ (fotoner har energi og bevegelsesmengde, men ingen masse)
- **Hastighetsbegrensning**: Ingen massiv partikkel kan nå $c$ – det ville kreve uendelig energi
- **Kjernereaksjoner**: Massedefekten frigjøres som energi ($E = \\Delta m \\cdot c^2$)`,
    },
  ],

  exercises: [
    {
      id: 'fys2-6-4-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn hvileenergien til følgende objekter, og oppgi svaret i joule:

a) Et elektron ($m = 9{,}109 \\times 10^{-31} \\text{ kg}$)
b) Et proton ($m = 1{,}673 \\times 10^{-27} \\text{ kg}$)
c) En 1-kronemynt ($m = 4{,}35 \\text{ g}$)`,
      hints: [
        '$E_0 = mc^2$, der $c = 3{,}00 \\times 10^8$ m/s',
      ],
      solution: `**a)** $E_0 = 9{,}109 \\times 10^{-31} \\times (3{,}00 \\times 10^8)^2 = 8{,}20 \\times 10^{-14} \\text{ J} = 0{,}511 \\text{ MeV}$

**b)** $E_0 = 1{,}673 \\times 10^{-27} \\times 9{,}00 \\times 10^{16} = 1{,}506 \\times 10^{-10} \\text{ J} = 938 \\text{ MeV}$

**c)** $E_0 = 4{,}35 \\times 10^{-3} \\times 9{,}00 \\times 10^{16} = 3{,}92 \\times 10^{14} \\text{ J} = 392 \\text{ TJ}$

En 1-kronemynt inneholder nok hvileenergi til å forsyne et norsk hjem med strøm i ca. 5000 år!`,
    },
    {
      id: 'fys2-6-4-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `En partikkel med masse $m$ beveger seg med hastighet $v = 0{,}80c$.

a) Beregn den kinetiske energien uttrykt som en faktor av $mc^2$.
b) Sammenlign med det klassiske resultatet $E_k = \\frac{1}{2}mv^2$.
c) Hvor stor er den prosentvise feilen hvis man bruker den klassiske formelen?`,
      hints: [
        '$\\gamma(0{,}80c) = 5/3 \\approx 1{,}667$',
        '$E_k = (\\gamma - 1)mc^2$',
      ],
      solution: `**a)** $\\gamma = \\frac{1}{\\sqrt{1 - 0{,}64}} = \\frac{1}{0{,}60} = \\frac{5}{3} = 1{,}667$

$$E_k = (\\gamma - 1)mc^2 = (1{,}667 - 1)mc^2 = 0{,}667 \\, mc^2$$

**b)** Klassisk: $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}m(0{,}80c)^2 = 0{,}32 \\, mc^2$

**c)** Prosentvis feil:
$$\\frac{0{,}667 - 0{,}32}{0{,}667} \\times 100\\% = \\frac{0{,}347}{0{,}667} \\times 100\\% = 52\\%$$

Den klassiske formelen gir en feil på **52 %** ved $v = 0{,}80c$. Den underestimerer den kinetiske energien dramatisk.`,
    },
    {
      id: 'fys2-6-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `Et proton ($m = 938{,}3 \\text{ MeV}/c^2$) har en kinetisk energi på $E_k = 2{,}00 \\text{ GeV} = 2000 \\text{ MeV}$.

a) Finn protonets totale energi.
b) Finn Lorentzfaktoren.
c) Finn protonets hastighet.
d) Finn protonets bevegelsesmengde (i MeV$/c$).`,
      hints: [
        '$E = E_k + mc^2$',
        '$\\gamma = E / (mc^2)$',
        'Bruk energi-bevegelsesmengde-relasjonen for d).',
      ],
      solution: `**a)** $E = E_k + mc^2 = 2000 + 938{,}3 = 2938{,}3 \\text{ MeV}$

**b)** $\\gamma = \\frac{E}{mc^2} = \\frac{2938{,}3}{938{,}3} = 3{,}131$

**c)** $v = c\\sqrt{1 - \\frac{1}{\\gamma^2}} = c\\sqrt{1 - \\frac{1}{9{,}80}} = c\\sqrt{0{,}898} = 0{,}948c$

**d)** Energi-bevegelsesmengde-relasjonen: $E^2 = (pc)^2 + (mc^2)^2$

$$(pc)^2 = E^2 - (mc^2)^2 = 2938{,}3^2 - 938{,}3^2$$

$$(pc)^2 = 8{,}634 \\times 10^6 - 8{,}804 \\times 10^5 = 7{,}753 \\times 10^6$$

$$pc = 2784 \\text{ MeV}$$

$$p = 2784 \\text{ MeV}/c$$

Kontroll: $p = \\gamma mv = 3{,}131 \\times 938{,}3 \\times 0{,}948 / c = 2785 \\text{ MeV}/c$ ✓ (liten forskjell skyldes avrunding)`,
    },
    {
      id: 'fys2-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Et foton (masseløs partikkel) har energi $E = 2{,}0 \\text{ MeV}$.

a) Finn fotonets bevegelsesmengde i kg$\\cdot$m/s.
b) Hva er fotonets hastighet?
c) Kan et foton stå stille? Begrunn.`,
      hints: [
        'For masseløse partikler: $E = pc$',
        '$1 \\text{ MeV} = 1{,}602 \\times 10^{-13}$ J',
      ],
      solution: `**a)** For fotoner: $E = pc$

$$p = \\frac{E}{c} = \\frac{2{,}0 \\times 10^6 \\times 1{,}602 \\times 10^{-19}}{3{,}00 \\times 10^8}$$

$$p = \\frac{3{,}204 \\times 10^{-13}}{3{,}00 \\times 10^8} = 1{,}07 \\times 10^{-21} \\text{ kg m/s}$$

**b)** Fotoner beveger seg alltid med lyshastigheten:
$$v = c = 3{,}00 \\times 10^8 \\text{ m/s}$$

Dette følger fra energi-bevegelsesmengde-relasjonen: med $m = 0$ og $E = pc$ er fotonets hastighet alltid $c$.

**c)** Et foton kan **ikke** stå stille. Hvis et foton hadde $v = 0$, ville det ha $p = 0$ og dermed $E = pc = 0$. Et foton uten energi eksisterer ikke. Fotoner finnes bare med $v = c$.`,
    },
    {
      id: 'fys2-6-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `I fisjon av uran-235 spaltes kjernen i to fragmenter. Den totale massedefekten per fisjonshendelse er ca. $\\Delta m = 3{,}1 \\times 10^{-28} \\text{ kg}$.

a) Beregn energien frigjort per fisjonshendelse (i joule og MeV).
b) Hvor mange fisjonshendelser trengs for å frigjøre 1 kWh energi?
c) Hvor mange gram uran-235 tilsvarer dette?`,
      hints: [
        '$E = \\Delta m \\cdot c^2$',
        '$1 \\text{ kWh} = 3{,}6 \\times 10^6 \\text{ J}$',
        'Massen til ett U-235-atom er ca. $3{,}9 \\times 10^{-25}$ kg.',
      ],
      solution: `**a)** $E = \\Delta m \\cdot c^2 = 3{,}1 \\times 10^{-28} \\times (3{,}00 \\times 10^8)^2$

$$E = 3{,}1 \\times 10^{-28} \\times 9{,}00 \\times 10^{16} = 2{,}79 \\times 10^{-11} \\text{ J}$$

$$E = \\frac{2{,}79 \\times 10^{-11}}{1{,}602 \\times 10^{-13}} \\approx 174 \\text{ MeV}$$

**b)** $1 \\text{ kWh} = 3{,}6 \\times 10^6 \\text{ J}$

$$N = \\frac{3{,}6 \\times 10^6}{2{,}79 \\times 10^{-11}} = 1{,}29 \\times 10^{17} \\text{ fisjoner}$$

**c)** Massen til $N$ U-235-atomer:

$$m = N \\times m_{\\text{U-235}} = 1{,}29 \\times 10^{17} \\times 3{,}9 \\times 10^{-25} = 5{,}0 \\times 10^{-8} \\text{ kg}$$

$$m \\approx 0{,}050 \\text{ mg}$$

Bare 0,050 mg uran-235 trengs for å produsere 1 kWh! (Til sammenligning trengs ca. 300 g kull for det samme.)`,
    },
    {
      id: 'fys2-6-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En partikkel med masse $m_1 = 1000 \\text{ MeV}/c^2$ som er i ro, henfaller (forfall) til to partikler:
- Partikkel 2 med masse $m_2 = 400 \\text{ MeV}/c^2$
- Partikkel 3 med masse $m_3 = 300 \\text{ MeV}/c^2$

a) Beregn den totale kinetiske energien til partiklene 2 og 3.
b) Finn bevegelsesmengden til partikkel 2 (i MeV$/c$).`,
      hints: [
        'Total energi er bevart: $m_1c^2 = E_2 + E_3$',
        'Total bevegelsesmengde er bevart: $0 = p_2 + p_3$, altså $p_2 = p_3$ i størrelse.',
        'Bruk $E^2 = (pc)^2 + (mc^2)^2$ for begge partiklene.',
      ],
      solution: `**a)** Energibevarelse: $E_1 = E_2 + E_3$

$$m_1 c^2 = E_2 + E_3 = 1000 \\text{ MeV}$$

Kinetisk energi for partikkel $i$: $E_{k,i} = E_i - m_i c^2$

Total kinetisk energi:
$$E_{k,\\text{tot}} = (E_2 - m_2c^2) + (E_3 - m_3c^2)$$
$$= (E_2 + E_3) - (m_2 + m_3)c^2$$
$$= 1000 - (400 + 300) = 300 \\text{ MeV}$$

**b)** Bevegelsesmengdebevarelse: $p_2 = p_3 = p$ (motsatte retninger).

For begge partiklene gjelder: $E_i^2 = (pc)^2 + (m_ic^2)^2$

$$E_2^2 = (pc)^2 + 400^2 \\quad \\text{og} \\quad E_3^2 = (pc)^2 + 300^2$$

Vi har $E_2 + E_3 = 1000$. La oss finne $E_2$ og $E_3$:

$$E_2^2 - E_3^2 = 400^2 - 300^2 = 160\\,000 - 90\\,000 = 70\\,000$$

$$(E_2 - E_3)(E_2 + E_3) = 70\\,000$$

$$E_2 - E_3 = \\frac{70\\,000}{1000} = 70 \\text{ MeV}$$

Fra $E_2 + E_3 = 1000$ og $E_2 - E_3 = 70$:

$$E_2 = 535 \\text{ MeV}, \\quad E_3 = 465 \\text{ MeV}$$

Bevegelsesmengden:
$$(pc)^2 = E_2^2 - (m_2c^2)^2 = 535^2 - 400^2 = 286\\,225 - 160\\,000 = 126\\,225$$

$$pc = 355{,}3 \\text{ MeV}$$

$$p = 355 \\text{ MeV}/c$$

Kontroll: $(pc)^2 = E_3^2 - (m_3c^2)^2 = 465^2 - 300^2 = 216\\,225 - 90\\,000 = 126\\,225$ ✓`,
    },
    {
      id: 'fys2-6-4-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Vis at for et objekt med masse $m$ og hastighet $v$ gjelder sammenhengen:

$$\\frac{v}{c} = \\frac{pc}{E}$$

der $p$ er relativistisk bevegelsesmengde og $E$ er total energi.`,
      hints: [
        'Start med $p = \\gamma mv$ og $E = \\gamma mc^2$.',
        'Divider de to uttrykkene.',
      ],
      solution: `Vi starter med:
$$p = \\gamma mv \\quad \\text{og} \\quad E = \\gamma mc^2$$

Danner forholdet:
$$\\frac{p}{E} = \\frac{\\gamma mv}{\\gamma mc^2} = \\frac{v}{c^2}$$

Ganger begge sider med $c$:
$$\\frac{pc}{E} = \\frac{v}{c}$$

Altså: $\\boxed{\\frac{v}{c} = \\frac{pc}{E}}$

Denne formelen er svært nyttig fordi den gir hastigheten direkte fra energi og bevegelsesmengde. Den gjelder også for masseløse partikler: med $E = pc$ gir den $v/c = 1$, altså $v = c$.

Den kan også skrives som $v = pc^2/E$, og brukes mye i partikkelfysikk.`,
    },
    {
      id: 'fys2-6-4-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `I en proton-proton-kollisjon ved LHC har hvert proton kinetisk energi $E_k = 6{,}5 \\text{ TeV} = 6500 \\text{ GeV}$.

a) Finn den totale energien til hvert proton.
b) Finn Lorentzfaktoren.
c) Finn protonets hastighet (bruk $v/c = \\sqrt{1 - 1/\\gamma^2}$).
d) Hvor mange desimaler av $c$ er hastigheten?`,
      hints: [
        'Protonets hvilemasse: $mc^2 = 0{,}938$ GeV',
        '$\\gamma = E/(mc^2)$',
      ],
      solution: `**a)** $E = E_k + mc^2 = 6500 + 0{,}938 = 6500{,}938 \\text{ GeV}$

(Kinetisk energi dominerer fullstendig over hvileenergien.)

**b)** $\\gamma = \\frac{E}{mc^2} = \\frac{6500{,}938}{0{,}938} = 6930$

**c)** $\\frac{v}{c} = \\sqrt{1 - \\frac{1}{\\gamma^2}} = \\sqrt{1 - \\frac{1}{6930^2}} = \\sqrt{1 - 2{,}08 \\times 10^{-8}}$

$$\\frac{v}{c} \\approx 1 - 1{,}04 \\times 10^{-8} = 0{,}999\\,999\\,990c$$

**d)** Protonets hastighet er $c$ til 8 desimaler! Hastigheten avviker fra $c$ med bare ca. $1 \\times 10^{-8}c \\approx 3$ m/s.

Til tross for at protonet er «nesten» ved lyshastigheten, har det enorm kinetisk energi – nok til å gi en nål synlig bevegelse. For en usynlig subatomær partikkel er dette bemerkelsesverdig.`,
    },
    {
      id: 'fys2-6-4-ex9',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord hvorfor ingen massiv partikkel kan akselereres til lyshastigheten. Bruk argumenter basert på energi.`,
      hints: [
        'Hva skjer med $\\gamma$ og dermed $E_k$ når $v \\to c$?',
        'Er det mulig å tilføre uendelig energi?',
      ],
      solution: `For å akselerere et objekt med masse $m$ til hastighet $v$ trengs kinetisk energi $E_k = (\\gamma - 1)mc^2$.

Lorentzfaktoren $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ vokser mot uendelig når $v$ nærmer seg $c$. Konkret:
- Ved $0{,}90c$: $\\gamma = 2{,}3$, $E_k = 1{,}3 \\, mc^2$
- Ved $0{,}99c$: $\\gamma = 7{,}1$, $E_k = 6{,}1 \\, mc^2$
- Ved $0{,}999c$: $\\gamma = 22{,}4$, $E_k = 21{,}4 \\, mc^2$
- Ved $0{,}9999c$: $\\gamma = 70{,}7$, $E_k = 69{,}7 \\, mc^2$

Jo nærmere vi kommer $c$, desto mer energi trengs for å øke hastigheten bare litt. For å nå nøyaktig $v = c$ trengs **uendelig** energi ($\\gamma = \\infty$), noe som er fysisk umulig.

I praksis betyr dette at akseleratorer som LHC kan bringe partikler **svært nær** $c$, men aldri helt til $c$.`,
    },
    {
      id: 'fys2-6-4-ex10',
      type: 'classic',
      difficulty: 'medium',
      task: `I deuterium-tritium-fusjon frigis $17{,}6$ MeV energi:

$$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + n + 17{,}6 \\text{ MeV}$$

a) Beregn massedefekten $\\Delta m$ i kg.
b) Hvor mange slike fusjonsreaksjoner trengs for å produsere $1{,}0 \\text{ GJ}$ energi?
c) Hvor mange gram deuterium-tritium-blanding tilsvarer dette? (Massen til én D-T-reaksjon er ca. $5 \\times 1{,}66 \\times 10^{-27}$ kg.)`,
      hints: [
        '$\\Delta m = E/(c^2)$',
        'Konverter MeV til joule: $1 \\text{ MeV} = 1{,}602 \\times 10^{-13}$ J',
      ],
      solution: `**a)** $E = 17{,}6 \\text{ MeV} = 17{,}6 \\times 1{,}602 \\times 10^{-13} = 2{,}82 \\times 10^{-12} \\text{ J}$

$$\\Delta m = \\frac{E}{c^2} = \\frac{2{,}82 \\times 10^{-12}}{9{,}00 \\times 10^{16}} = 3{,}13 \\times 10^{-29} \\text{ kg}$$

**b)** $N = \\frac{1{,}0 \\times 10^9}{2{,}82 \\times 10^{-12}} = 3{,}55 \\times 10^{20}$ reaksjoner

**c)** Total masse av D-T:
$$m = N \\times 5 \\times 1{,}66 \\times 10^{-27} = 3{,}55 \\times 10^{20} \\times 8{,}30 \\times 10^{-27}$$

$$m = 2{,}95 \\times 10^{-6} \\text{ kg} \\approx 3{,}0 \\text{ mg}$$

Bare 3 mg D-T-blanding trengs for å produsere 1 GJ energi (tilsvarer ca. 280 kWh). Til sammenligning trengs ca. 34 kg naturgass for det samme.`,
    },
  ],
};


// ============================================================================
// Kapittel 6.5: Generell relativitetsteori – introduksjon
// ============================================================================

export const CHAPTER_FYSIKK2_6_5: TextbookChapter = {
  id: 'fysikk2-6-5',
  courseId: 'fys2',
  chapterNumber: '6.5',
  title: 'Generell relativitetsteori – introduksjon',
  description:
    'Ekvivalensprinsippet, krumning av rom-tid, gravitasjonell tidsforlengelse, gravitasjonsbøyning av lys, svarte hull og gravitasjonsbølger.',
  estimatedMinutes: 70,
  prerequisites: ['fysikk2-6-4', 'fysikk2-2-3'],
  competenceGoals: [
    'gjøre rede for ekvivalensprinsippet',
    'forklare kvalitativt hvordan masse krummer rom-tid',
    'beskrive gravitasjonell tidsforlengelse og dens konsekvenser',
    'diskutere observasjonelle bevis for generell relativitetsteori',
    'forklare hva svarte hull og gravitasjonsbølger er',
  ],
  content: [
    // ---- Introduksjon ----
    {
      id: 'fys2-6-5-intro',
      type: 'text',
      content: `# Generell relativitetsteori – introduksjon

I de foregående kapitlene har vi studert **spesiell** relativitetsteori, som handler om fysikk i inertielle referansesystemer – systemer uten akselerasjon. Men hva med gravitasjon og akselerasjon?

I 1915, ti år etter den spesielle relativitetsteorien, fullførte Einstein sin **generelle relativitetsteori** – et mesterverk som revolusjonerte vår forståelse av gravitasjon. I stedet for å tenke på gravitasjon som en kraft (slik Newton gjorde), beskriver Einstein gravitasjon som **krumning av rom-tid** forårsaket av masse og energi.

I dette kapittelet gir vi en kvalitativ introduksjon til de viktigste ideene i generell relativitetsteori.`,
    },

    // ---- Fra spesiell til generell ----
    {
      id: 'fys2-6-5-overgang',
      type: 'text',
      content: `## Fra spesiell til generell relativitetsteori

Spesiell relativitetsteori har en viktig begrensning: den gjelder bare i **inertielle** referansesystemer. Men:

- Jorden roterer – vi lever ikke i et perfekt inertielt system
- Gravitasjon er allestedsnærværende – alle objekter i universet påvirkes av gravitasjon
- For å beskrive gravitasjon trengte Einstein en teori som fungerer i **alle** referansesystemer, også akselererende

Einsteins nøkkelinnsikt var at det er en dyp sammenheng mellom gravitasjon og akselerasjon. Denne innsikten kalles **ekvivalensprinsippet**.`,
    },

    // ---- Ekvivalensprinsippet ----
    {
      id: 'fys2-6-5-ekvivalens-intro',
      type: 'text',
      content: `## Ekvivalensprinsippet

### Tankeeksperiment: Heisen

Forestill deg at du står i en lukket heis uten vinduer. Du slipper en ball, og den faller mot gulvet. Spørsmål: Hvordan kan du avgjøre om:

**Alternativ A:** Heisen står stille på jordoverflaten (gravitasjon $g$ trekker ballen ned)

**Alternativ B:** Heisen er i det ytre verdensrom (null gravitasjon), men akselererer oppover med akselerasjon $g$ (gulvet beveger seg opp mot ballen)

Svaret er: **Du kan ikke!** Ingen eksperiment inne i heisen kan skille de to situasjonene. Ballen oppfører seg identisk. En vekt ville vise samme vekt. En pendel ville svinge med samme periode.

### Einsteins «lykkeligste tanke»

Einstein kalte denne innsikten sin «lykkeligste tanke»: Gravitasjon og akselerasjon er lokalt uatskillelige. Han formulerte dette som et prinsipp:`,
    },

    {
      id: 'fys2-6-5-def-ekvivalens',
      type: 'theorem',
      title: 'Ekvivalensprinsippet',
      content: `Virkningene av gravitasjon er lokalt uatskillelige fra virkningene av akselerasjon. I et lite nok område av rom-tid kan ingen eksperiment avgjøre om man befinner seg i et gravitasjonsfelt eller i et akselererende referansesystem.

**Svak form:** Tung masse (gravitasjon) og treig masse (Newtons andre lov) er ekvivalente.

**Sterk form (Einsteins):** Alle fysikkens lover i et fritt fallende referansesystem er de samme som i fravær av gravitasjon.`,
    },

    {
      id: 'fys2-6-5-fritt-fall',
      type: 'text',
      content: `### Fritt fall: lokal opphevelse av gravitasjon

En viktig konsekvens av ekvivalensprinsippet er at et **fritt fallende** referansesystem er et lokalt inertielt system.

Tenk deg at du er i en heis der kabelen har røket – du er i fritt fall. Inne i heisen:
- Du svever vektløs
- En ball du slipper, svever ved siden av deg
- Ingen eksperiment kan påvise gravitasjon

Du opplever nøyaktig det samme som en astronaut i vektløs tilstand i verdensrommet. ISS-astronauter er ikke «utenfor gravitasjonsfeltet» – de er i fritt fall rundt Jorden, og ekvivalensprinsippet forteller oss at dette er lokalt det samme som null gravitasjon.

### Nøkkelordet «lokalt»

Ekvivalensprinsippet gjelder **lokalt** – i et lite nok område. Over større avstander kan gravitasjonsfeltet variere (for eksempel er gravitasjonen sterkere nærmere Jordens sentrum), og da kan man skille gravitasjon fra uniform akselerasjon. Disse variasjonene kalles **tidevannskrefter**.`,
    },

    {
      id: 'fys2-6-5-note-vektlos',
      type: 'note',
      title: 'ISS og vektløshet',
      content: `Astronauter på ISS er **ikke** utenfor Jordens gravitasjonsfelt. ISS kretser i ca. 408 km høyde, der gravitasjonsakselerasjonen fortsatt er ca. $8{,}7 \\text{ m/s}^2$ (bare 11 % svakere enn på overflaten).

Grunnen til at astronautene er vektløse, er at de er i **fritt fall** – ISS faller kontinuerlig mot Jorden, men «bommer» fordi den også beveger seg sidelengs. Ekvivalensprinsippet forteller oss at fritt fall er lokalt det samme som null gravitasjon.`,
    },

    // ---- Krumning av rom-tid ----
    {
      id: 'fys2-6-5-krumning',
      type: 'text',
      content: `## Gravitasjon som krumning av rom-tid

Einsteins revolusjonerende idé var at gravitasjon ikke er en kraft i vanlig forstand, men en konsekvens av at **masse og energi krummer rom-tid**.

### Fra flat til krum geometri

I fravær av masse og energi er rom-tid «flat» – den vanlige geometrien vi er vant til. Rette linjer er rette, og Pytagoras' setning gjelder eksakt.

Men når masse er til stede, krummes rom-tid. Et objekt som beveger seg gjennom krum rom-tid følger den «rettest mulige» banen – en **geodet**. Denne geodeten ser for oss ut som en kurve – vi tolker det som gravitasjon.

### Gummiduk-analogien

En populær analogi er å tenke seg rom-tid som en stram gummiduk:
- Uten masse er duken flat
- Legg en tung kule på duken → den lager en fordypning (krumning)
- En liten kule som ruller forbi, vil bøye av mot den tunge kulen → dette ligner gravitasjon

**Viktig begrensning:** Analogien er ufullstendig fordi den kun viser romlig krumning i to dimensjoner. Generell relativitetsteori handler om krumning av **fire-dimensjonal rom-tid** (tre romdimensjoner + tid). Tidsaspektet er faktisk viktigere for hverdagslig gravitasjon enn den romlige krumningen.

### Einsteins feltligninger

Sammenhengen mellom masse/energi og rom-tidens krumning uttrykkes av **Einsteins feltligninger**:

$$G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}$$

Vi skal ikke utlede eller bruke denne ligningen, men det er verdt å vite om den:
- Venstre side ($G_{\\mu\\nu}$) beskriver rom-tidens geometri (krumning)
- Høyre side ($T_{\\mu\\nu}$) beskriver fordelingen av masse og energi
- $\\Lambda$ er den kosmologiske konstanten (mørk energi)
- Ligningen sier: «Masse forteller rom-tid hvordan den skal krumme, og rom-tid forteller masse hvordan den skal bevege seg»`,
    },

    {
      id: 'fys2-6-5-note-wheeler',
      type: 'note',
      title: 'John Archibald Wheelers berømte sitat',
      content: `Fysikeren John Wheeler oppsummerte generell relativitetsteori slik:

> «Masse forteller rom-tid hvordan den skal krumme. Rom-tid forteller masse hvordan den skal bevege seg.»

Denne formuleringen fanger essensen av teorien: det er en gjensidig påvirkning mellom materie og geometri. Masse former rommet, og det formede rommet bestemmer hvordan massen beveger seg.`,
    },

    // ---- Gravitasjonell tidsforlengelse ----
    {
      id: 'fys2-6-5-grav-tid',
      type: 'text',
      content: `## Gravitasjonell tidsforlengelse

En viktig forutsigelse av generell relativitetsteori er at **gravitasjon påvirker tidens gang**. Klokker i et sterkt gravitasjonsfelt tikker saktere enn klokker i et svakt felt.

### Kvalitativ forklaring

Ekvivalensprinsippet forbinder gravitasjon med akselerasjon. I spesiell relativitetsteori vet vi at akselerasjon påvirker tid (gjennom tidsdilatasjon). Dermed må også gravitasjon påvirke tid.

Jo sterkere gravitasjonsfelt (jo dypere i «gravitasjonsbrønnen»), desto langsommere tikker klokken.

### Gravitasjonell rødforskyvning

Lys som sendes **oppover** i et gravitasjonsfelt, mister energi (det må «klatre» ut av gravitasjonsbrønnen). Siden fotonets energi er $E = hf$ (der $h$ er Plancks konstant og $f$ er frekvensen), betyr lavere energi lavere frekvens – altså **rødforskyvning**.

Tilsvarende blir lys som faller **nedover** i et gravitasjonsfelt, blåforskjøvet (økt frekvens og energi).

### Tilnærmet formel

For svake gravitasjonsfelt (som nær jordoverflaten) gjelder tilnærmet:

$$\\frac{\\Delta t_{\\text{høy}}}{\\Delta t_{\\text{lav}}} \\approx 1 + \\frac{g \\Delta h}{c^2}$$

der $\\Delta h$ er høydeforskjellen og $g$ er tyngdeakselerasjonen. En klokke i høyde $\\Delta h$ over en annen tikker litt raskere.`,
    },

    {
      id: 'fys2-6-5-formel-grav-tid',
      type: 'formula',
      title: 'Gravitasjonell tidsforlengelse (svakt felt)',
      latex: `\\Delta t_{\\text{høy}} \\approx \\Delta t_{\\text{lav}} \\left(1 + \\frac{g \\Delta h}{c^2}\\right)`,
      description: `En klokke som befinner seg i høyden $\\Delta h$ over en annen klokke i et homogent gravitasjonsfelt, tikker raskere med en faktor $(1 + g\\Delta h/c^2)$. Denne effekten er svært liten i hverdagen, men målbar med atomklokker og avgjørende for GPS-systemet.`,
    },

    {
      id: 'fys2-6-5-gps-grav',
      type: 'text',
      content: `### GPS-korreksjoner revisited

I kapittel 6.2 så vi at GPS-satellitter må korrigere for spesiell relativitet (tidsdilatasjon pga. hastighet). Nå kan vi legge til den generell-relativistiske korreksjonen:

| Effekt | Korreksjon per dag | Retning |
|:---|:---|:---|
| Spesiell relativitet (hastighet) | $-7 \\, \\mu\\text{s}$ | Klokken tikker saktere |
| Generell relativitet (gravitasjon) | $+45 \\, \\mu\\text{s}$ | Klokken tikker raskere |
| **Netto effekt** | **$+38 \\, \\mu\\text{s}$** | **Klokken tikker raskere** |

Den generell-relativistiske effekten er altså ca. **6 ganger større** enn den spesiell-relativistiske! Satellittklokkene tikker raskere fordi de befinner seg i et svakere gravitasjonsfelt (lenger fra Jorden).

Uten denne korreksjonen ville GPS-posisjoner akkumulere en feil på ca. **10 km per dag**.`,
    },

    // ---- Gravitasjonsbøyning av lys ----
    {
      id: 'fys2-6-5-lysboyning',
      type: 'text',
      content: `## Gravitasjonsbøyning av lys

Generell relativitetsteori forutsier at lys bøyes av gravitasjonsfeltet til massive objekter. Siden lys følger geodeter (de «rettest mulige» banene) i krum rom-tid, vil lysstråler avbøyes når de passerer nær en stor masse.

### Einsteins forutsigelse

Einstein beregnet at en lysstråle som passerer like ved Solens overflate, bøyes med en vinkel:

$$\\theta = \\frac{4GM}{Rc^2} \\approx 1{,}75''$$

der $M$ er Solens masse og $R$ er Solens radius. Denne vinkelen er ca. dobbelt så stor som den Newtonsk gravitasjon ville gi (ved å behandle lys som partikler med masse).

### Eddingtons ekspedisjon (1919)

Den britiske astronomen Arthur Eddington organiserte to ekspedisjoner for å observere en total solformørkelse den 29. mai 1919 – én til Sobral i Brasil og én til Príncipe-øyen utenfor Afrikas vestkyst.

Under en solformørkelse kan man se stjerner nær Solens kant. Hvis lyset fra disse stjernene bøyes av Solens gravitasjonsfelt, vil stjernene se ut til å ha forskjøvet posisjon.

**Resultatet:** Eddingtons målinger viste en avbøyning i god overensstemmelse med Einsteins forutsigelse ($1{,}75''$) og utelukket Newtons verdi ($0{,}87''$).

Dette ble en internasjonal sensasjon og gjorde Einstein verdensberømt over natten. Overskrifter verden over proklamerte at Newton var «detronisert».`,
    },

    {
      id: 'fys2-6-5-gravitasjonslinser',
      type: 'text',
      content: `### Gravitasjonslinser

Gravitasjonsbøyning av lys har viktige konsekvenser i moderne astronomi. Massive objekter (galakser, galaksehoper) kan fungere som **gravitasjonslinser** som bøyer og fokuserer lys fra mer fjerne objekter bak dem.

Typer gravitasjonslinser:

1. **Sterke linser:** Skaper multiple bilder eller lysende ringer (Einstein-ringer) av fjerne galakser
2. **Svake linser:** Subtile forvrengninger i formen til fjerne galakser – brukes til å kartlegge mørk materie
3. **Mikrolinser:** Kortvarig oppklarning av en stjerne når et annet objekt passerer foran – brukes til å finne eksoplaneter

Gravitasjonslinser er et av de viktigste verktøyene i moderne kosmologi for å studere universets struktur og mengden mørk materie.`,
    },

    // ---- Svarte hull ----
    {
      id: 'fys2-6-5-svarte-hull',
      type: 'text',
      content: `## Svarte hull

En av de mest dramatiske forutsigelsene av generell relativitetsteori er eksistensen av **svarte hull** – objekter der gravitasjonen er så sterk at ingenting, ikke engang lys, kan unnslippe.

### Schwarzschild-radius

I 1916 fant Karl Schwarzschild en eksakt løsning av Einsteins feltligninger for et sfærisk, ikke-roterende massivt objekt. Løsningen viser at dersom en masse $M$ komprimeres til en radius mindre enn **Schwarzschild-radius** $r_s$, dannes et svart hull:

$$r_s = \\frac{2GM}{c^2}$$

der $G = 6{,}674 \\times 10^{-11} \\text{ N m}^2/\\text{kg}^2$ er gravitasjonskonstanten.

**Eksempler på Schwarzschild-radius:**

| Objekt | Masse | Schwarzschild-radius |
|:---|:---|:---|
| Jorden | $5{,}97 \\times 10^{24}$ kg | $8{,}87 \\text{ mm}$ |
| Solen | $1{,}99 \\times 10^{30}$ kg | $2{,}95 \\text{ km}$ |
| Sagittarius A* (Melkeveiens sentrum) | $4 \\times 10^6 M_{\\odot}$ | $12 \\times 10^6 \\text{ km}$ |

For å lage et svart hull av Jorden måtte vi komprimere hele planeten til en kule med radius under 9 mm!`,
    },

    {
      id: 'fys2-6-5-def-svart-hull',
      type: 'definition',
      title: 'Svart hull',
      content: `Et **svart hull** er et objekt der massen er konsentrert innenfor Schwarzschild-radius $r_s = 2GM/c^2$.

Innenfor denne grensen, kalt **hendelseshorisonten**, er unnslipningshastigheten større enn lyshastigheten. Dermed kan verken masse, lys eller informasjon unnslippe.

Hendelseshorisonten er ikke en fysisk overflate – den er en grense i rom-tid. En person som faller inn i et stort svart hull, ville ikke nødvendigvis merke noe spesielt ved passeringen (for et stort nok hull), men kunne aldri returnere.`,
    },

    {
      id: 'fys2-6-5-svarte-hull-obs',
      type: 'text',
      content: `### Observasjonelle bevis for svarte hull

Svarte hull kan ikke observeres direkte (de sender ikke ut lys), men vi kan observere deres virkninger:

1. **Aksesjonsskiver:** Materie som faller mot et svart hull, danner en glødende skive som sender ut røntgenstråling
2. **Stellare bevegelser:** Stjerner nær Melkeveiens sentrum kretser rundt et usynlig, svært massivt objekt (Nobelprisen 2020 til Penrose, Genzel og Ghez)
3. **Gravitasjonsbølger:** Sammensmelting av svarte hull sender ut gravitasjonsbølger (oppdaget av LIGO i 2015)
4. **Event Horizon Telescope (EHT):** I 2019 tok EHT det første «bildet» av et svart hull – skyggen av det supermassive svarte hullet i galaksen M87

### Typer svarte hull

| Type | Masse | Opprinnelse |
|:---|:---|:---|
| Stellare | $3$–$100 \\, M_{\\odot}$ | Kollaps av massive stjerner |
| Mellommassive | $10^2$–$10^5 \\, M_{\\odot}$ | Uklart (sammenslåing?) |
| Supermassive | $10^6$–$10^{10} \\, M_{\\odot}$ | Sentrum av galakser |`,
    },

    // ---- Gravitasjonsbølger ----
    {
      id: 'fys2-6-5-gravitasjonsbolger',
      type: 'text',
      content: `## Gravitasjonsbølger

Generell relativitetsteori forutsier at akselererende masser skaper bølger i rom-tid – **gravitasjonsbølger**. Disse er analogt med elektromagnetiske bølger fra akselererende ladninger.

### Hva er gravitasjonsbølger?

Gravitasjonsbølger er krusninger i rom-tid som forplanter seg med lyshastigheten. Når en gravitasjonsbølge passerer, strekkes og komprimeres rommet vekselvis i to vinkelrette retninger.

### LIGO-oppdagelsen (2015)

Den 14. september 2015 detekterte **LIGO** (Laser Interferometer Gravitational-Wave Observatory) for første gang gravitasjonsbølger direkte. Signalet, kalt GW150914, kom fra sammensmelting av to svarte hull med masser på ca. $36$ og $29$ solmasser, ca. 1,3 milliarder lysår unna.

**Deteksjonsmetoden:**
LIGO bruker laserinterferometri med «armer» på 4 km. En gravitasjonsbølge endrer armlengden med ca. $10^{-18}$ m – en tusendel av en protondiameter! Denne ekstremt lille endringen kan måles ved å sammenligne interferensmønsteret til laserlyset.

### Nobelprisen 2017

Rainer Weiss, Barry Barish og Kip Thorne mottok Nobelprisen i fysikk 2017 for oppdagelsen av gravitasjonsbølger. Siden 2015 er det detektert hundrevis av gravitasjonsbølgesignaler fra sammenslåinger av svarte hull og nøytronstjerner.

### Gravitasjonsbølgenes betydning

Gravitasjonsbølger har åpnet et helt nytt «vindu» til universet. Mens tradisjonell astronomi bruker elektromagnetisk stråling (lys, radio, røntgen), gir gravitasjonsbølger informasjon om fenomener som er usynlige for tradisjonelle instrumenter – spesielt sammensmelting av kompakte objekter.`,
    },

    {
      id: 'fys2-6-5-note-multimessenger',
      type: 'note',
      title: 'Multi-messenger astronomi',
      content: `I 2017 ble det for første gang observert gravitasjonsbølger (GW170817) og elektromagnetisk stråling fra **samme hendelse** – sammensmelting av to nøytronstjerner.

Dette markerte starten på **multi-messenger astronomi**, der vi kombinerer informasjon fra:
- Gravitasjonsbølger
- Lys (synlig, infrarødt, ultraviolett)
- Røntgen- og gammastråling
- Nevtrinoer
- Kosmisk stråling

Denne hendelsen bekreftet blant annet at gravitasjonsbølger beveger seg med lyshastigheten (til en nøyaktighet på $10^{-15}$) og viste at tunge grunnstoff som gull og platina dannes i nøytronstjernekollisjoner.`,
    },

    // ---- Tidstesting ----
    {
      id: 'fys2-6-5-tester',
      type: 'text',
      content: `## Tester av generell relativitetsteori

Generell relativitetsteori har bestått alle eksperimentelle tester med glans:

### Klassiske tester

1. **Periheldreiningen til Merkur:** Merkurs bane roterer litt for hver omgang. Newton kan forklare det meste, men det gjenstår $43''$ per århundre som bare generell relativitetsteori forklarer.

2. **Lysbøyning ved Solen:** Bekreftet av Eddington (1919) og senere med mye høyere presisjon ved radiointerferometri.

3. **Gravitasjonell rødforskyvning:** Bekreftet av Pound-Rebka-eksperimentet (1959) ved Harvard, der gammasstrålinger sendt oppover i et tårn ble rødforskjøvet i overensstemmelse med teorien.

### Moderne tester

4. **Shapiro-forsinkelsen:** Radarstråler som passerer nær Solen, forsinkes pga. rom-tidens krumning. Bekreftet med høy nøyaktighet.

5. **Gravitasjonell tidsforlengelse:** Bekreftet med atomklokker i fly (Hafele-Keating, 1971) og med GPS-systemet (daglig bruk).

6. **Gravitasjonsbølger:** Direkte deteksjon av LIGO (2015).

7. **Svart hull-bilde:** Event Horizon Telescope (2019).

8. **Frame-dragging:** Gravity Probe B-satellitten (2011) målte hvordan Jordens rotasjon «drar med seg» rom-tid.

Ingen avvik fra generell relativitetsteori er noen gang påvist.`,
    },

    {
      id: 'fys2-6-5-warning-kvante',
      type: 'warning',
      title: 'Generell relativitetsteori er ikke komplett',
      content: `Selv om generell relativitetsteori er ekstremt vellykket, er den ikke den endelige teorien for gravitasjon.

**Problemet:** Generell relativitetsteori er en klassisk (ikke-kvantemekanisk) teori. Ved ekstremt sterke gravitasjonsfelt (inne i svarte hull, ved Big Bang) og ekstremt små avstander (Planck-lengden $\\sim 10^{-35}$ m) forventer vi at kvantemekaniske effekter blir viktige.

**Kvantegravitasjon** – en teori som forener generell relativitetsteori med kvantemekanikk – er et av de største uløste problemene i moderne fysikk. Kandidater inkluderer strengteori og kvanteloop-gravitasjon, men ingen fullstendig teori eksisterer ennå.`,
    },

    // ---- Eksempler ----
    {
      id: 'fys2-6-5-eks-schwarzschild',
      type: 'example',
      title: 'Eksempel: Schwarzschild-radius',
      problem: `Beregn Schwarzschild-radius for:

a) Solen ($M = 1{,}989 \\times 10^{30} \\text{ kg}$)
b) Jorden ($M = 5{,}972 \\times 10^{24} \\text{ kg}$)
c) Et supermassivt svart hull med masse $4 \\times 10^6$ solmasser (Sagittarius A*)`,
      solution: `Vi bruker $r_s = \\frac{2GM}{c^2}$ med $G = 6{,}674 \\times 10^{-11}$ og $c = 3{,}00 \\times 10^8$ m/s.

**a) Solen:**

$$r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 1{,}989 \\times 10^{30}}{(3{,}00 \\times 10^8)^2}$$

$$r_s = \\frac{2{,}654 \\times 10^{20}}{9{,}00 \\times 10^{16}} = 2{,}95 \\times 10^3 \\text{ m} = 2{,}95 \\text{ km}$$

**b) Jorden:**

$$r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 5{,}972 \\times 10^{24}}{9{,}00 \\times 10^{16}}$$

$$r_s = \\frac{7{,}972 \\times 10^{14}}{9{,}00 \\times 10^{16}} = 8{,}86 \\times 10^{-3} \\text{ m} = 8{,}86 \\text{ mm}$$

**c) Sagittarius A*:**

$M = 4 \\times 10^6 \\times 1{,}989 \\times 10^{30} = 7{,}96 \\times 10^{36}$ kg

$$r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 7{,}96 \\times 10^{36}}{9{,}00 \\times 10^{16}} = 1{,}18 \\times 10^{10} \\text{ m} \\approx 11{,}8 \\text{ millioner km}$$

Dette er ca. $0{,}08$ AU (astronomiske enheter) – omtrent en femtedel av avstanden fra Solen til Merkur.`,
    },

    {
      id: 'fys2-6-5-eks-grav-tid',
      type: 'example',
      title: 'Eksempel: Gravitasjonell tidsforskjell',
      problem: `En atomklokke plasseres på toppen av et tårn som er $h = 100 \\text{ m}$ høyt. En annen identisk klokke er på bakken.

a) Beregn den relative tidsforskjellen per sekund.
b) Etter ett døgn (86 400 s), hvor mange nanosekunder har klokken på toppen gått raskere?`,
      solution: `**a)** Den relative tidsforskjellen er:

$$\\frac{\\Delta t_{\\text{topp}} - \\Delta t_{\\text{bunn}}}{\\Delta t_{\\text{bunn}}} = \\frac{g \\Delta h}{c^2}$$

$$= \\frac{9{,}81 \\times 100}{(3{,}00 \\times 10^8)^2} = \\frac{981}{9{,}00 \\times 10^{16}} = 1{,}09 \\times 10^{-14}$$

Per sekund tikker klokken på toppen $1{,}09 \\times 10^{-14}$ s raskere.

**b)** Etter ett døgn:

$$\\delta t = 86\\,400 \\times 1{,}09 \\times 10^{-14} = 9{,}42 \\times 10^{-10} \\text{ s} \\approx 0{,}94 \\text{ ns}$$

Klokken på toppen av det 100 m høye tårnet har gått ca. **1 nanosekund** raskere etter ett døgn. Denne forskjellen, om enn liten, er målbar med moderne atomklokker.

**Historisk merknad:** I 2010 ble gravitasjonell tidsforlengelse målt over en høydeforskjell på bare 33 cm med optiske atomklokker ved NIST (USA).`,
    },

    {
      id: 'fys2-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Ekvivalensprinsippet:** Gravitasjon og akselerasjon er lokalt uatskillelige. Fritt fall er lokalt ekvivalent med null gravitasjon.
- **Krumning av rom-tid:** Masse og energi krummer rom-tid. Objekter følger geodeter (rettest mulige baner) i den krumme rom-tiden.
- **Gravitasjonell tidsforlengelse:** Klokker i sterke gravitasjonsfelt tikker saktere. Effekten er ca. $g\\Delta h/c^2$ per meter høydeforskjell.
- **Gravitasjonsbøyning av lys:** Lys bøyes av gravitasjonsfelt. Bekreftet av Eddington (1919).
- **Svarte hull:** Objekter med $r < r_s = 2GM/c^2$ der ingenting kan unnslippe. Bekreftet observasjonelt.
- **Gravitasjonsbølger:** Krusninger i rom-tid fra akselererende masser. Direkte detektert av LIGO (2015).
- Generell relativitetsteori har bestått alle eksperimentelle tester, men er ikke forenlig med kvantemekanikk.`,
    },
  ],

  exercises: [
    {
      id: 'fys2-6-5-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar ekvivalensprinsippet med et eget tankeeksperiment. Beskriv to situasjoner som er umulige å skille ved lokale eksperimenter.`,
      hints: [
        'Tenk deg en lukket boks uten tilgang til omverdenen.',
        'Hva opplever du i et gravitasjonsfelt vs. i en akselererende rakett?',
      ],
      solution: `**Tankeeksperiment:** Du er i et lukket rom uten vinduer.

**Situasjon A:** Rommet står på overflaten av en planet med tyngdeakselerasjon $g$. Du slipper en ball, og den faller mot gulvet med akselerasjon $g$.

**Situasjon B:** Rommet er en rakett i verdensrommet (uten gravitasjon) som akselererer «oppover» med akselerasjon $g$. Gulvet akselererer mot ballen, og ballen treffer gulvet nøyaktig som i situasjon A.

**Innenfor rommet kan du ikke skille disse situasjonene:**
- En ball faller likt
- En vekt viser samme vekt
- Væske i et glass ligger flatt i begge tilfeller
- Alle fysiske eksperimenter gir identiske resultater

Bare ved å se ut (eller måle over store avstander) kan du se forskjell: gravitasjonsfeltet peker mot planetens sentrum (varierer med avstand), mens akselerasjonen i raketten er uniform.`,
    },
    {
      id: 'fys2-6-5-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Beregn Schwarzschild-radius for følgende objekter:

a) Et menneske ($m = 70 \\text{ kg}$)
b) Solen ($M = 2{,}0 \\times 10^{30} \\text{ kg}$)
c) Et svart hull med masse lik $10$ solmasser`,
      hints: [
        '$r_s = 2GM/c^2$',
        '$G = 6{,}674 \\times 10^{-11}$ N m$^2$/kg$^2$',
      ],
      solution: `**a)** $r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 70}{(3{,}0 \\times 10^8)^2} = \\frac{9{,}34 \\times 10^{-9}}{9{,}0 \\times 10^{16}}$

$$r_s = 1{,}04 \\times 10^{-25} \\text{ m}$$

Mye mindre enn en proton ($\\sim 10^{-15}$ m)! Det er umulig å komprimere et menneske til et svart hull.

**b)** $r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 2{,}0 \\times 10^{30}}{9{,}0 \\times 10^{16}} = \\frac{2{,}67 \\times 10^{20}}{9{,}0 \\times 10^{16}}$

$$r_s = 2{,}97 \\times 10^3 \\text{ m} \\approx 3{,}0 \\text{ km}$$

**c)** $r_s(10 M_{\\odot}) = 10 \\times r_s(M_{\\odot}) = 10 \\times 3{,}0 = 30 \\text{ km}$

(Schwarzschild-radius er proporsjonal med massen.)`,
    },
    {
      id: 'fys2-6-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `Bruk formelen for gravitasjonell tidsforlengelse til å beregne tidsforskjellen mellom en klokke på havnivå og en klokke på toppen av Mount Everest ($h = 8849 \\text{ m}$) i løpet av ett år.`,
      hints: [
        '$\\Delta t / t = g h / c^2$',
        'Et år $\\approx 3{,}156 \\times 10^7$ s',
      ],
      solution: `Relativ tidsforskjell:

$$\\frac{\\delta t}{t} = \\frac{gh}{c^2} = \\frac{9{,}81 \\times 8849}{(3{,}00 \\times 10^8)^2} = \\frac{86\\,809}{9{,}00 \\times 10^{16}} = 9{,}65 \\times 10^{-13}$$

Tidsforskjell per år:

$$\\delta t = 9{,}65 \\times 10^{-13} \\times 3{,}156 \\times 10^7 = 3{,}04 \\times 10^{-5} \\text{ s}$$

$$\\delta t \\approx 30{,}4 \\, \\mu\\text{s}$$

Klokken på toppen av Mount Everest tikker ca. **30 mikrosekunder raskere per år** enn en klokke ved havnivå.

Over et helt liv (80 år) ville forskjellen bli ca. $80 \\times 30 = 2400 \\, \\mu\\text{s} \\approx 2{,}4 \\text{ ms}$. Du aldres altså ca. 2,4 millisekunder mer i løpet av et liv på toppen av Everest enn ved havnivå!`,
    },
    {
      id: 'fys2-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `En GPS-satellitt kretser i 20 200 km høyde over Jorden.

a) Beregn den gravitasjonelle tidsforskjellen per dag sammenlignet med en klokke på bakken.
b) Beregn den spesiell-relativistiske tidsforskjellen per dag (satelitthastighet $v = 3{,}87$ km/s).
c) Hva er netto tidsforskjell per dag?
d) Hvor stor posisjonsfeil ville dette gi per dag uten korreksjon?`,
      hints: [
        'For a): $\\delta t_{\\text{GR}} / t \\approx gh/c^2$. Men for store høyder er det bedre å bruke $\\Delta\\Phi/c^2$ der $\\Delta\\Phi = g \\cdot R_{\\oplus}^2 (1/R_{\\oplus} - 1/(R_{\\oplus}+h))$.',
        'For en enkel beregning: bruk $\\delta t_{\\text{GR}} \\approx +45 \\, \\mu$s/dag.',
        'For b): $\\delta t_{\\text{SR}}/t = -\\frac{1}{2}v^2/c^2$',
      ],
      solution: `**a)** For en mer nøyaktig beregning bruker vi gravitasjonspotensialen:

$$\\frac{\\delta t_{\\text{GR}}}{t} = \\frac{GM}{c^2}\\left(\\frac{1}{R_\\oplus} - \\frac{1}{R_\\oplus + h}\\right)$$

Med $R_\\oplus = 6371$ km og $h = 20\\,200$ km:

$$= \\frac{6{,}674 \\times 10^{-11} \\times 5{,}97 \\times 10^{24}}{(3 \\times 10^8)^2}\\left(\\frac{1}{6{,}371 \\times 10^6} - \\frac{1}{26{,}571 \\times 10^6}\\right)$$

$$\\approx 5{,}28 \\times 10^{-10}$$

Per dag: $\\delta t_{\\text{GR}} = 5{,}28 \\times 10^{-10} \\times 86\\,400 \\approx +45{,}6 \\, \\mu\\text{s}$

Satelittklokken tikker **raskere** (svakere gravitasjon).

**b)** $\\frac{\\delta t_{\\text{SR}}}{t} = -\\frac{1}{2}\\frac{v^2}{c^2} = -\\frac{1}{2}\\frac{(3870)^2}{(3 \\times 10^8)^2} = -8{,}32 \\times 10^{-11}$

Per dag: $\\delta t_{\\text{SR}} = -8{,}32 \\times 10^{-11} \\times 86\\,400 \\approx -7{,}2 \\, \\mu\\text{s}$

Satelittklokken tikker **saktere** (hastighetseffekt).

**c)** Netto: $+45{,}6 - 7{,}2 = +38{,}4 \\, \\mu\\text{s}$/dag

**d)** Posisjonsfeil: $\\delta x = c \\cdot \\delta t = 3 \\times 10^8 \\times 38{,}4 \\times 10^{-6} \\approx 11{,}5$ km per dag!`,
    },
    {
      id: 'fys2-6-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Einsteins forutsigelse for lysbøyning ved Solen er $\\theta = 4GM/(Rc^2)$, der $M$ er Solens masse og $R$ er Solens radius.

a) Beregn bøyningsvinkelen i radianer.
b) Konverter til buesekunder ($1° = 3600''$).
c) Hva ville Newton-verdien vært (halvparten av Einsteins)?`,
      hints: [
        '$M_{\\odot} = 1{,}989 \\times 10^{30}$ kg',
        '$R_{\\odot} = 6{,}96 \\times 10^8$ m',
        `$1 \\text{ rad} = 206\\,265''$`,
      ],
      solution: `**a)** $\\theta = \\frac{4GM}{Rc^2} = \\frac{4 \\times 6{,}674 \\times 10^{-11} \\times 1{,}989 \\times 10^{30}}{6{,}96 \\times 10^8 \\times (3{,}00 \\times 10^8)^2}$

$$\\theta = \\frac{5{,}31 \\times 10^{20}}{6{,}264 \\times 10^{25}} = 8{,}48 \\times 10^{-6} \\text{ rad}$$

**b)** $\\theta = 8{,}48 \\times 10^{-6} \\times 206\\,265 = 1{,}75''$

Bøyningsvinkelen er ca. **1,75 buesekunder**. Dette er en ekstremt liten vinkel – ca. størrelsen på en mynt sett fra 2 km avstand.

**c)** Newton-verdien: $\\theta_N = \\frac{1}{2} \\times 1{,}75'' = 0{,}875'' \\approx 0{,}87''$

Eddingtons målinger i 1919 ga ca. $1{,}6''$–$1{,}8''$, som klart favoriserer Einsteins verdi.`,
    },
    {
      id: 'fys2-6-5-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar kvalitativt (uten matematikk) hvorfor astronauter på ISS er vektløse, selv om de bare er ca. 400 km over jordoverflaten der gravitasjonen fortsatt er sterk.`,
      hints: [
        'Bruk ekvivalensprinsippet.',
        'Hva betyr «fritt fall»?',
      ],
      solution: `Astronauter på ISS er vektløse fordi de er i **fritt fall** rundt Jorden.

ISS beveger seg horisontalt med ca. 7,7 km/s og faller samtidig mot Jorden. Men fordi Jorden er krum, «bommer» ISS hele tiden – den faller, men jordoverflaten kurver bort under den. Resultatet er en sirkulær (eller nær-sirkulær) bane.

**Ekvivalensprinsippet** forteller oss at et fritt fallende referansesystem er lokalt ekvivalent med et system **uten gravitasjon**. Inne i ISS er alt – astronauter, utstyr, vann – i fritt fall sammen. Det er ingen relativbevegelse mellom astronauten og veggen, akkurat som det ville vært i verdensrommet uten gravitasjon.

**Viktig:** Gravitasjonsfeltet på ISS-høyde ($g \\approx 8{,}7$ m/s$^2$) er bare 11 % svakere enn på bakken. Det er altså ikke mangelen på gravitasjon som skaper vektløsheten, men det faktum at alt faller med samme akselerasjon – Galileis prinsipp om at alle objekter faller like raskt, uavhengig av masse.`,
    },
    {
      id: 'fys2-6-5-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Estimér den gravitasjonelle tidsforlengelsen ved overflaten av en nøytronstjerne. En typisk nøytronstjerne har masse $M = 1{,}4 \\, M_{\\odot}$ og radius $R = 10 \\text{ km}$.

a) Beregn forholdet $r_s/R$ (Schwarzschild-radius delt på faktisk radius).
b) Bruk den generell-relativistiske formelen for gravitasjonell tidsforlengelse: $\\Delta t_{\\infty} = \\Delta t_{\\text{overfl}} / \\sqrt{1 - r_s/R}$ for å finne hvor mye langsommere en klokke tikker ved overflaten sammenlignet med en klokke langt borte.`,
      hints: [
        '$r_s = 2GM/c^2$',
        'Denne formelen ligner Lorentzfaktoren, men med $r_s/R$ i stedet for $v^2/c^2$.',
      ],
      solution: `**a)** Schwarzschild-radius for nøytronstjernen:

$M = 1{,}4 \\times 1{,}989 \\times 10^{30} = 2{,}785 \\times 10^{30}$ kg

$$r_s = \\frac{2 \\times 6{,}674 \\times 10^{-11} \\times 2{,}785 \\times 10^{30}}{(3{,}00 \\times 10^8)^2} = \\frac{3{,}716 \\times 10^{20}}{9{,}00 \\times 10^{16}} = 4130 \\text{ m} = 4{,}13 \\text{ km}$$

$$\\frac{r_s}{R} = \\frac{4{,}13}{10{,}0} = 0{,}413$$

Nøytronstjernen er bare ca. 2,4 ganger større enn sin Schwarzschild-radius!

**b)** Tidsforlengelse:

$$\\frac{\\Delta t_{\\infty}}{\\Delta t_{\\text{overfl}}} = \\frac{1}{\\sqrt{1 - r_s/R}} = \\frac{1}{\\sqrt{1 - 0{,}413}} = \\frac{1}{\\sqrt{0{,}587}} = \\frac{1}{0{,}766} = 1{,}306$$

En klokke ved overflaten tikker ca. **23 % saktere** enn en klokke langt borte. Hvis du sendte et lysglimt hvert sekund fra overflaten, ville en fjern observatør motta dem med ca. 1,3 sekunders mellomrom.

Til sammenligning er den tilsvarende effekten ved Jordens overflate bare $\\sim 10^{-9}$. Nøytronstjerner har ekstremt sterk gravitasjon!`,
    },
    {
      id: 'fys2-6-5-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `LIGO detekterte gravitasjonsbølger fra sammensmelting av to svarte hull med masser $m_1 = 36 \\, M_{\\odot}$ og $m_2 = 29 \\, M_{\\odot}$. Det resulterende svarte hullet hadde masse $m_f = 62 \\, M_{\\odot}$.

a) Hvor mye masse «forsvant» i prosessen?
b) Beregn energien som ble utstrålt som gravitasjonsbølger (i joule).
c) Sammenlign med Solens luminositet ($L_{\\odot} = 3{,}85 \\times 10^{26}$ W). Hvor mange år med solstråling tilsvarer dette?`,
      hints: [
        '$\\Delta m = (m_1 + m_2) - m_f$',
        '$E = \\Delta m \\cdot c^2$',
        '$M_{\\odot} = 1{,}989 \\times 10^{30}$ kg',
      ],
      solution: `**a)** Massetap:
$$\\Delta m = (36 + 29 - 62) \\, M_{\\odot} = 3 \\, M_{\\odot}$$

$$\\Delta m = 3 \\times 1{,}989 \\times 10^{30} = 5{,}97 \\times 10^{30} \\text{ kg}$$

Tre solmasser ble omdannet til gravitasjonsbølgeenergi!

**b)** $E = \\Delta m \\cdot c^2 = 5{,}97 \\times 10^{30} \\times (3{,}00 \\times 10^8)^2$

$$E = 5{,}97 \\times 10^{30} \\times 9{,}00 \\times 10^{16} = 5{,}37 \\times 10^{47} \\text{ J}$$

**c)** Antall år med solstråling:

Solens energi per år: $E_{\\odot,\\text{år}} = 3{,}85 \\times 10^{26} \\times 3{,}156 \\times 10^7 = 1{,}215 \\times 10^{34}$ J

$$t = \\frac{5{,}37 \\times 10^{47}}{1{,}215 \\times 10^{34}} = 4{,}42 \\times 10^{13} \\text{ år}$$

Energien utstrålt i gravitasjonsbølger tilsvarer **44 billioner år** med solskinn – ca. 3200 ganger universets alder! Denne enorme energien ble utstrålt i løpet av bare noen tideler av et sekund.`,
    },
    {
      id: 'fys2-6-5-ex9',
      type: 'classic',
      difficulty: 'lett',
      task: `Gi tre eksempler på observasjonelle bevis for generell relativitetsteori, og forklar kort hva hvert bevis viser.`,
      hints: [
        'Tenk på klassiske tester (Merkur, lysbøyning) og moderne oppdagelser.',
      ],
      solution: `**1. Gravitasjonsbøyning av lys (Eddington, 1919):**
Lys fra fjerne stjerner bøyes når det passerer nær Solen. Under en total solformørkelse ble det observert at stjerner nær Solens kant hadde forskjøvet posisjon, i overensstemmelse med Einsteins forutsigelse ($1{,}75''$). Dette viser at gravitasjon påvirker lysets bane, i samsvar med at rom-tid krummes av masse.

**2. Gravitasjonsbølger (LIGO, 2015):**
LIGO-detektoren registrerte krusninger i rom-tid fra to svarte hull som smeltet sammen 1,3 milliarder lysår borte. Signalet matchet nøyaktig generell relativitets forutsigelser. Dette bekreftet at akselererende masser skaper bølger i rom-tid som forplanter seg med lyshastigheten.

**3. GPS-korreksjoner (daglig bruk):**
GPS-satellitter må korrigere for både spesiell og generell relativitet. Uten korreksjoner for gravitasjonell tidsforlengelse ville posisjoneringen bli feil med ca. 10 km per dag. At GPS fungerer, er et dagligdags bevis på at gravitasjon påvirker tidens gang.`,
    },
    {
      id: 'fys2-6-5-ex10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Betrakt et tankeeksperiment: En lysstråle sendes horisontalt fra den ene siden av en heis til den andre (avstand $d = 3{,}0 \\text{ m}$). Heisen akselererer oppover med $g = 9{,}81 \\text{ m/s}^2$.

a) Hvor lang tid bruker lyset å krysse heisen?
b) Hvor langt har heisen akselerert oppover i denne tiden?
c) Bruk ekvivalensprinsippet: Hva betyr dette for lys i et gravitasjonsfelt?`,
      hints: [
        'Lyset bruker tid $t = d/c$ på å krysse.',
        'I denne tiden akselererer heisen: $\\Delta y = \\frac{1}{2}g t^2$',
        'Ekvivalensprinsippet sier at akselerasjon = gravitasjon.',
      ],
      solution: `**a)** $t = \\frac{d}{c} = \\frac{3{,}0}{3{,}00 \\times 10^8} = 1{,}00 \\times 10^{-8} \\text{ s} = 10 \\text{ ns}$

**b)** $\\Delta y = \\frac{1}{2}g t^2 = \\frac{1}{2} \\times 9{,}81 \\times (1{,}00 \\times 10^{-8})^2$

$$\\Delta y = \\frac{1}{2} \\times 9{,}81 \\times 10^{-16} = 4{,}9 \\times 10^{-16} \\text{ m}$$

Dette er ca. en tusendel av en protondiameter – umålbart lite!

**c)** Ifølge ekvivalensprinsippet er akselerasjon oppover i verdensrommet ekvivalent med gravitasjon nedover. Altså: i den akselererende heisen treffer lyset den motsatte veggen litt lavere enn det ble sendt (fordi gulvet har akselerert opp).

I et gravitasjonsfelt betyr dette at **lyset bøyes nedover** – det følger en krum bane. Lysstrålen «faller» i gravitasjonsfeltet, akkurat som en ball.

Denne bøyningen ($4{,}9 \\times 10^{-16}$ m over 3 m) er altfor liten til å måles i en heis, men den tilsvarende effekten ved Solen ($1{,}75''$ avbøyning) **er** målbar og bekreftet.`,
    },
    {
      id: 'fys2-6-5-ex11',
      type: 'classic',
      difficulty: 'medium',
      task: `Sammenlign Newtons og Einsteins syn på gravitasjon ved å fylle ut tabellen:

| Egenskap | Newton | Einstein |
|:---|:---|:---|
| Hva er gravitasjon? | | |
| Hva forårsaker gravitasjon? | | |
| Hvordan virker gravitasjon? | | |
| Påvirker gravitasjon lys? | | |
| Påvirker gravitasjon tid? | | |`,
      solution: `| Egenskap | Newton | Einstein |
|:---|:---|:---|
| Hva er gravitasjon? | En kraft mellom masser | Krumning av rom-tid |
| Hva forårsaker gravitasjon? | Masse | Masse og energi |
| Hvordan virker gravitasjon? | Instantant (øyeblikkelig) på avstand | Gjennom krumning av rom-tid; endringer forplanter seg med lyshastigheten |
| Påvirker gravitasjon lys? | Nei (lys er masseløst) | Ja (lys følger krum rom-tid) |
| Påvirker gravitasjon tid? | Nei (absolutt tid) | Ja (gravitasjonell tidsforlengelse) |

**Kommentar:** Newtons gravitasjonsteori er et utmerket spesialtilfelle av Einsteins teori for svake gravitasjonsfelt og lave hastigheter. For de aller fleste hverdagsberegninger (planeter, satellitter, baller) gir Newton tilstrekkelig nøyaktighet. Einsteins teori trengs for presise beregninger (GPS), sterke felt (svarte hull, nøytronstjerner), og kosmologiske spørsmål.`,
    },
  ],
};


// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const FYSIKK2_CHAPTERS_DEL3: Record<string, TextbookChapter> = {
  'fysikk2-6-1': CHAPTER_FYSIKK2_6_1,
  'fysikk2-6-2': CHAPTER_FYSIKK2_6_2,
  'fysikk2-6-3': CHAPTER_FYSIKK2_6_3,
  'fysikk2-6-4': CHAPTER_FYSIKK2_6_4,
  'fysikk2-6-5': CHAPTER_FYSIKK2_6_5,
};

/**
 * Biologi 1 - Kapittel 3.1: DNA-struktur og replikasjon
 *
 * Innhold:
 * - Historiske oppdagelser (Miescher, Griffith, Avery, Hershey-Chase, Chargaff, Watson & Crick, Franklin)
 * - Nukleotidstruktur og basetyper
 * - DNA-dobbeltheliks (antiparallelle tråder, baseparing, groover)
 * - DNA-pakking i eukaryoter (histoner, nukleosomer, kromatin, kromosomer)
 * - Semikonservativ replikasjon (Meselson-Stahl, enzymer, ledende/etterfølgende tråd)
 * - Telomerer og telomerase
 * - DNA-skader og reparasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_3_1: TextbookChapter = {
  id: 'bio1-3-1',
  courseId: 'biologi-1',
  chapterNumber: '3.1',
  title: 'DNA-struktur og replikasjon',
  description:
    'DNA-molekylets oppbygging, baseparing, dobbeltheliks og semikonservativ replikasjon.',
  estimatedMinutes: 80,
  competenceGoals: [
    'beskrive oppbyggingen av et nukleotid og forklare forskjellen mellom puriner og pyrimidiner',
    'gjøre rede for DNA-dobbeltheliks-strukturen, inkludert antiparallelle tråder og baseparingsregler',
    'forklare hvordan DNA pakkes i eukaryote celler, fra nukleosomer til kromosomer',
    'beskrive semikonservativ replikasjon og de viktigste enzymene som deltar',
    'forklare forskjellen mellom ledende og etterfølgende tråd under replikasjon',
    'drøfte betydningen av telomerer og DNA-reparasjonsmekanismer',
    'gjøre rede for sentrale historiske eksperimenter som viste at DNA er arvematerialet',
  ],
  content: [
    // =========================================================================
    // 1. INTRODUKSJON
    // =========================================================================
    {
      id: 'bio1-3-1-intro',
      type: 'text',
      title: 'DNA - arvemolekyletet',
      content: `# DNA - arvemolekylet

Alle levende organismer lagrer sin arveinformasjon i molekylet **deoksyribonukleinsyre**, bedre kjent som **DNA**. DNA inneholder oppskriftene som bestemmer alt fra øyenfarge og blodtype til hvilke proteiner cellene dine produserer akkurat nå.

I dette kapittelet skal vi først se på hvordan forskere oppdaget at DNA er arvemolekylet. Deretter skal vi studere **strukturen** til DNA-molekylet i detalj, fra de minste byggesteinene (nukleotider) til den ikoniske **dobbeltheliks**-formen. Til slutt skal vi forstå hvordan cellen **kopierer** hele sitt DNA i en prosess kalt **replikasjon** - en prosess som må skje hver gang en celle skal dele seg.

DNA er bemerkelsesverdig både i sin enkelhet og sin kompleksitet. Det er bygd opp av bare fire ulike byggesteiner, men disse fire byggesteinene kan kombineres i et nesten uendelig antall rekkefølger. Hos mennesket inneholder DNA-et i én enkelt celle omtrent **3,2 milliarder basepar** - nok informasjon til å fylle tusenvis av bøker.`,
    },

    // =========================================================================
    // 2. HISTORISKE OPPDAGELSER
    // =========================================================================
    {
      id: 'bio1-3-1-historie',
      type: 'text',
      title: 'Jakten på arvemolekylet',
      content: `# Jakten på arvemolekylet

Ideen om at arv overføres gjennom et kjemisk molekyl modnet langsomt gjennom det 20. århundret. La oss følge de viktigste oppdagelsene.

## Friedrich Miescher (1869): Oppdagelsen av «nuklein»

Den sveitsiske legen **Friedrich Miescher** isolerte et nytt stoff fra hvite blodceller i brukte bandasjer. Stoffet kom fra cellekjernene og inneholdt mye fosfor. Han kalte det **nuklein** (fra latin *nucleus* = kjerne). Uten å vite det hadde Miescher oppdaget DNA - men det skulle gå nesten et århundre før betydningen ble forstått.

## Griffiths transformasjonseksperiment (1928)

Den britiske mikrobiologen **Frederick Griffith** arbeidet med to stammer av pneumokokk-bakterier:

- **S-stamme** (glatt kapsel): Virulent - forårsaket lungebetennelse hos mus
- **R-stamme** (ru, uten kapsel): Avirulent - ufarlig for mus

Griffith gjorde følgende forsøk:

1. Injiserte levende S-bakterier i mus -> musene døde
2. Injiserte levende R-bakterier i mus -> musene overlevde
3. Injiserte varmedrepte S-bakterier i mus -> musene overlevde
4. Injiserte varmedrepte S-bakterier **blandet med** levende R-bakterier -> musene **døde**

Fra de døde musene i forsøk 4 kunne Griffith isolere **levende S-bakterier**. Noe i de døde S-bakteriene hadde **transformert** de ufarlige R-bakteriene til dødelige S-bakterier. Griffith kalte dette ukjente stoffet et **transformerende prinsipp**, men han visste ikke hva det var.

## Avery, MacLeod og McCarty (1944): DNA er det transformerende prinsippet

De amerikanske forskerne **Oswald Avery**, **Colin MacLeod** og **Maclyn McCarty** gjenopptok Griffiths eksperiment og prøvde å identifisere det transformerende prinsippet. De renset ulike stoffer fra varmedrepte S-bakterier og testet hvert stoff:

- Behandling med **proteaser** (bryter ned proteiner): Transformasjon skjedde fortsatt
- Behandling med **RNase** (bryter ned RNA): Transformasjon skjedde fortsatt
- Behandling med **DNase** (bryter ned DNA): Transformasjon **stoppet**

**Konklusjon:** Det transformerende prinsippet måtte være **DNA**. Likevel var mange forskere skeptiske - de trodde proteiner var for komplekse til at et «enkelt» molekyl som DNA kunne bære all arveinformasjon.

## Hershey-Chase-eksperimentet (1952): Bekreftelsen

**Alfred Hershey** og **Martha Chase** brukte **bakteriofager** (virus som angriper bakterier) til å avgjøre spørsmålet en gang for alle. Bakteriofager består av bare to komponenter: DNA og protein.

De merket fagene radioaktivt:
- **$^{32}$P** (radioaktivt fosfor) merket **DNA** (DNA inneholder fosfor, men ikke svovel)
- **$^{35}$S** (radioaktivt svovel) merket **proteiner** (proteiner inneholder svovel, men ikke fosfor)

Etter at fagene hadde infisert bakteriene, ble de adskilt med sentrifuge:
- **$^{32}$P (DNA)** ble funnet **inne i** bakteriene
- **$^{35}$S (protein)** ble funnet **utenfor** bakteriene

**Konklusjon:** Det er **DNA**, ikke protein, som injiseres inn i bakterien og styrer produksjonen av nye virus. DNA er arvemolekylet.`,
    },
    {
      id: 'bio1-3-1-chargaff',
      type: 'text',
      title: 'Chargaffs regler og dobbeltheliks-modellen',
      content: `## Chargaffs regler (1950)

Den østerriksk-amerikanske biokjemikeren **Erwin Chargaff** analyserte DNA fra mange ulike organismer og oppdaget et overraskende mønster:

- Mengden **adenin (A)** var alltid lik mengden **tymin (T)**
- Mengden **guanin (G)** var alltid lik mengden **cytosin (C)**

Med andre ord: **%A = %T** og **%G = %C**

Dette forholdet gjaldt uavhengig av hvilken art DNA-et kom fra, men det totale forholdet mellom A+T og G+C varierte fra art til art. Disse likhetene ble kjent som **Chargaffs regler**, og de ble en nøkkel til å forstå DNA-strukturen.

## Watson og Crick (1953): Dobbeltheliks-modellen

Den 25. april 1953 publiserte **James Watson** og **Francis Crick** sin berømte artikkel i tidsskriftet *Nature*. De foreslo at DNA har formen av en **dobbeltheliks** - to tråder som snor seg rundt hverandre.

Watson og Crick bygde sin modell på tre typer informasjon:
1. **Chargaffs regler** (A = T, G = C) - som tydet på at basene pairer med hverandre
2. **Røntgenkrystallografi** utført av Rosalind Franklin - som viste heliks-formen
3. **Kjemisk kunnskap** om nukleotidenes struktur

## Rosalind Franklin og Foto 51

**Rosalind Franklin** var en britisk biofysiker som brukte **røntgenkrystallografi** til å studere DNA-fibre. Hennes berømte **Foto 51** viste et tydelig X-formet mønster som avslørte at DNA har en heliks-struktur.

Franklin beregnet også viktige mål: Heliksen har en diameter på **2 nm** og en hel omdreining (pitch) er **3,4 nm** med **10 basepar per omdreining**.

Franklins arbeid var avgjørende for Watson og Cricks modell, men hun fikk lite anerkjennelse i sin levetid. Hun døde av kreft i 1958, fire år før Watson, Crick og Maurice Wilkins mottok Nobelprisen i 1962.`,
    },
    {
      id: 'bio1-3-1-note-franklin',
      type: 'note',
      title: 'Rosalind Franklins bidrag',
      content:
        'Rosalind Franklins røntgenbilder var avgjørende for oppdagelsen av DNA-strukturen, men hun ble lenge oversett i historiebøkene. I dag anerkjennes hun som en av de viktigste bidragsyterne til forståelsen av DNA. Hennes historie illustrerer også utfordringene kvinner møtte i naturvitenskapen på 1950-tallet.',
    },

    // =========================================================================
    // 3. NUKLEOTIDSTRUKTUR
    // =========================================================================
    {
      id: 'bio1-3-1-def-dna',
      type: 'definition',
      title: 'DNA (deoksyribonukleinsyre)',
      content:
        'Et makromolekyl som lagrer arveinformasjon i alle levende organismer. DNA er et polymer bygd opp av nukleotider og har formen av en dobbeltheliks. Forkortelsen står for deoksyribonukleinsyre (engelsk: deoxyribonucleic acid).',
    },
    {
      id: 'bio1-3-1-nukleotider',
      type: 'text',
      title: 'Nukleotider - DNA-ets byggesteiner',
      content: `# Nukleotider - DNA-ets byggesteiner

DNA er et **polymer** - et stort molekyl bygd opp av mange like enheter kalt **monomerer**. Monomerene i DNA kalles **nukleotider**.

## Et nukleotid har tre deler

Hvert nukleotid i DNA består av tre komponenter:

**1. Et sukkermolekyl: deoksyribose**
- Et femkarbonsukkermolekyl (pentose)
- Karbonatomene er nummerert 1' til 5' (uttales «en-prim» til «fem-prim»)
- Kalles **deoksyribose** fordi det mangler ett oksygenatom sammenlignet med ribose (sukkeret i RNA)

**2. En fosfatgruppe**
- En $\\text{PO}_4^{3-}$-gruppe festet til 5'-karbonet på sukkeret
- Gir DNA-molekylet negativ ladning
- Fosfatgruppene binder nukleotidene sammen i en kjede

**3. En nitrogenbase**
- Festet til 1'-karbonet på sukkeret
- Basen er den varierende delen som bærer den genetiske informasjonen
- Det finnes fire ulike baser i DNA

## De fire basene i DNA

Basene deles inn i to grupper etter størrelse:

### Puriner (store baser - to ringer)
- **Adenin (A)** - inneholder en aminogruppe ($\\text{NH}_2$)
- **Guanin (G)** - inneholder en karbonylgruppe ($\\text{C=O}$) og en aminogruppe

### Pyrimidiner (små baser - én ring)
- **Tymin (T)** - inneholder to karbonylgrupper; unik for DNA
- **Cytosin (C)** - inneholder en karbonylgruppe og en aminogruppe

En huskeregel: Pu**ri**ner har **to ri**nger. Py**ri**midiner har bare **én ri**ng.

En annen huskeregel for basene: **A**lle **G**utter **T**rengte **C**ola (puriner: A, G; pyrimidiner: T, C).

## Fosfodiesterbindinger og sukker-fosfat-ryggraden

Nukleotidene kobles sammen i en kjede gjennom **fosfodiesterbindinger**. Bindingen dannes mellom:
- **3'-karbonet** på ett sukker (via en OH-gruppe)
- **5'-karbonet** på neste sukker (via fosfatgruppen)

Resultatet er en lang kjede med vekslende sukker- og fosfatgrupper kalt **sukker-fosfat-ryggraden**. Basene stikker ut fra ryggraden som «trinn» på en stige.

Kjeden har en retning:
- Den ene enden har et fritt 5'-fosfat (**5'-enden**)
- Den andre enden har en fri 3'-OH-gruppe (**3'-enden**)

Vi skriver alltid en DNA-sekvens i retningen **5' -> 3'**.`,
    },
    {
      id: 'bio1-3-1-def-nukleotid',
      type: 'definition',
      title: 'Nukleotid',
      content:
        'Byggesteinen (monomeren) i nukleinsyrer. Et nukleotid i DNA består av tre deler: (1) et deoksyribosesukkermolekyl, (2) en fosfatgruppe og (3) en av fire nitrogenbaser (adenin, guanin, tymin eller cytosin). Nukleotidene kobles sammen via fosfodiesterbindinger og danner sukker-fosfat-ryggraden.',
    },

    // =========================================================================
    // 4. DOBBELTHELIKS-STRUKTUREN
    // =========================================================================
    {
      id: 'bio1-3-1-dobbeltheliks',
      type: 'text',
      title: 'DNA-dobbeltheliks',
      content: `# DNA-dobbeltheliks

## To antiparallelle tråder

DNA-molekylet består av **to polynukleotidtråder** som snor seg rundt hverandre og danner en **dobbeltheliks**. De to trådene holdes sammen av **hydrogenbindinger** mellom basene.

Et helt sentralt trekk er at de to trådene er **antiparallelle**:
- Den ene tråden løper i retningen **5' -> 3'**
- Den andre tråden løper i retningen **3' -> 5'**

Tenk på det som to personer som står ved siden av hverandre, men peker i motsatt retning. Denne antiparallelle orienteringen er avgjørende for både replikasjon og avlesning av DNA.

## Baseparingsregler

De to trådene holdes sammen av spesifikke **hydrogenbindinger** mellom basene. Watson og Crick fant at bare bestemte par passer sammen:

- **Adenin (A) pairer alltid med Tymin (T)** - bundet av **2 hydrogenbindinger**
- **Guanin (G) pairer alltid med Cytosin (C)** - bundet av **3 hydrogenbindinger**

Denne regelen skyldes to forhold:
1. **Størelse:** En purin (stor) pairer alltid med et pyrimidin (liten), slik at bredden av dobbeltheliks er konstant (2 nm)
2. **Hydrogenbindinger:** A og T danner to hydrogenbindinger, mens G og C danner tre - andre kombinasjoner gir ikke stabile hydrogenbindinger

Fordi A alltid pairer med T, og G alltid pairer med C, sier vi at trådene er **komplementære**. Kjenner du sekvensen på én tråd, kan du utlede sekvensen på den andre.

## Store og lille fure (major og minor groove)

Når de to trådene snor seg rundt hverandre, oppstår det to spor eller «furer» langs overflaten:

- **Den store furen (major groove):** Bredere spor der proteiner lettere kan lese av bassekvensen
- **Den lille furen (minor groove):** Smalere spor

Mange proteiner som regulerer genuttrykk, binder seg til DNA via den store furen fordi baseparene her er mer tilgjengelige.

## B-form DNA

Watson og Cricks dobbeltheliks beskriver det vi kaller **B-form DNA**, som er standardformen under fysiologiske forhold:

- **Diameter:** 2,0 nm
- **Avstand mellom basepar:** 0,34 nm
- **Basepar per omdreining:** 10
- **Heliksens stigning (pitch):** 3,4 nm (10 x 0,34 nm)
- **Heliksens dreieretning:** Høyredreid

Det finnes også andre former (A-DNA og Z-DNA), men B-form er klart dominerende i levende celler.`,
    },
    {
      id: 'bio1-3-1-def-baseparing',
      type: 'definition',
      title: 'Baseparing',
      content:
        'Den spesifikke hydrogenbindingen mellom komplementære baser i DNA: adenin (A) pairer med tymin (T) via to hydrogenbindinger, og guanin (G) pairer med cytosin (C) via tre hydrogenbindinger. Baseparingsreglene sikrer at trådene i dobbeltheliks er komplementære.',
    },
    {
      id: 'bio1-3-1-warning-hbindinger',
      type: 'warning',
      title: 'Hydrogenbindinger er svake enkeltvis',
      content:
        'Hver enkelt hydrogenbinding er svak, men i et DNA-molekyl med millioner av basepar gir de til sammen en sterk binding mellom trådene. Det er nettopp denne egenskapen som gjør at de to trådene kan separeres (viktig for replikasjon), men likevel holdes stabilt sammen under normale forhold. DNA med mye G-C-innhold er vanskeligere å separere enn DNA med mye A-T-innhold, fordi G-C har tre hydrogenbindinger mot A-T sine to.',
    },

    // =========================================================================
    // 5. EKSEMPEL: KOMPLEMENTAER TRAD
    // =========================================================================
    {
      id: 'bio1-3-1-eks-komplementaer',
      type: 'example',
      title: 'Eksempel: Bestemme den komplementaere tråden',
      problem: `En DNA-tråd har følgende sekvens i 5'->3'-retning:

**5'-ATCGGATCCA-3'**

Hva er sekvensen til den komplementære tråden? Oppgi svaret i 5'->3'-retning.`,
      solution: `**Steg 1:** Skriv den komplementære sekvensen ved å bruke baseparingsreglene (A-T og G-C):

Gitt tråd: 5'-A T C G G A T C C A-3'
Komplementær: 3'-T A G C C T A G G T-5'

**Steg 2:** Snur vi den komplementære tråden slik at den leses i 5'->3'-retning (konvensjon):

**5'-TGGATCCGAT-3'**

**Forklaring:** De to trådene er antiparallelle. Når vi oppgir sekvensen i 5'->3'-retning, må vi lese den komplementære tråden fra høyre mot venstre i diagrammet ovenfor.

Vi kan kontrollere ved å sette dem sammen:
\`\`\`
5'-A T C G G A T C C A-3'
   | | | | | | | | | |
3'-T A G C C T A G G T-5'
\`\`\`

Alle A pairer med T, og alle G pairer med C - korrekt!`,
    },

    // =========================================================================
    // 6. EKSEMPEL: CHARGAFFS REGLER
    // =========================================================================
    {
      id: 'bio1-3-1-eks-chargaff',
      type: 'example',
      title: 'Eksempel: Beregne basesammensetning med Chargaffs regler',
      problem: `I en prøve av DNA fra en organisme utgjør adenin (A) 22 % av alle basene. Beregn prosentandelen av de tre andre basene (T, G og C).`,
      solution: `**Steg 1:** Bruk Chargaffs første regel: %A = %T
Siden %A = 22 %, må **%T = 22 %**.

**Steg 2:** Beregn summen av A + T:
%A + %T = 22 % + 22 % = 44 %

**Steg 3:** Beregn summen av G + C:
Alle fire baser til sammen utgjør 100 %:
%G + %C = 100 % - 44 % = 56 %

**Steg 4:** Bruk Chargaffs andre regel: %G = %C
Dermed: %G = %C = 56 % / 2 = **28 %**

**Svar:**
- Adenin (A) = 22 %
- Tymin (T) = 22 %
- Guanin (G) = 28 %
- Cytosin (C) = 28 %

**Kontroll:** 22 + 22 + 28 + 28 = 100 % ✓`,
    },

    // =========================================================================
    // 7. DNA-PAKKING
    // =========================================================================
    {
      id: 'bio1-3-1-pakking',
      type: 'text',
      title: 'DNA-pakking i eukaryote celler',
      content: `# DNA-pakking i eukaryote celler

DNA-molekylet i en menneskecelle er enormt langt. Legger vi alt DNA-et fra én celle i en rett linje, ville det strekke seg omtrent **2 meter**. Likevel er alt dette pakket inn i en cellekjerne med en diameter på bare omtrent **6 mikrometer** ($6 \\times 10^{-6}$ m). Det tilsvarer å stappe 40 kilometer tynt tau inn i en tennisball! Denne utrolige pakkingen skjer gjennom flere nivåer.

## Nivå 1: Nukleosomer

Det første pakkingsnivået involverer proteiner kalt **histoner**. DNA-tråden vikler seg rundt kuler av histonproteiner og danner strukturer kalt **nukleosomer**.

- Hvert nukleosom består av **8 histonproteiner** (en histonoktamer)
- Omtrent **147 basepar** DNA er viklet nesten **to ganger** rundt hver histonoktamer
- Mellom nukleosomene finnes korte strekker med **linker-DNA** (ca. 20-80 basepar)

Resultatet ser ut som en «perlekjede» der nukleosomene er perlene og linker-DNA-et er snoren mellom dem. Denne strukturen forkorter DNA-et omtrent **7 ganger**.

## Nivå 2: 30 nm kromatinfiber

Nukleosomene pakkes videre til en tykkere fiber med en diameter på omtrent **30 nm** (nanometer). Dette skjer ved hjelp av **linker-histoner** (H1-histoner) som binder nukleosomene tett sammen.

Den nøyaktige strukturen til 30 nm-fiberen er omdiskutert, men to modeller er foreslått:
- **Solenoid-modellen:** Nukleosomene er arrangert i en spiral
- **Sikksakk-modellen:** Nukleosomene folder seg fram og tilbake

## Nivå 3: Løkkedomener

30 nm-fiberen organiseres videre i **løkker** (loops) som er festet til et **proteinskjelett** (scaffold). Hver løkke inneholder omtrent 20 000-100 000 basepar.

## Nivå 4: Kromosomer

Under **celledeling** kondenseres kromatinet til sin mest kompakte form: **kromosomer**. Et kromosom er DNA-et pakket omtrent **10 000 ganger** kortere enn sin utstrakte lengde. Kromosomene er synlige i lysmikroskop under celledeling.

## Eukromatin og heterokromatin

Ikke alt kromatin er pakket like tett til enhver tid:

- **Eukromatin:** Løst pakket kromatin. Gener i eukromatin er **aktive** - de kan avleses og brukes til å lage proteiner.
- **Heterokromatin:** Tett pakket kromatin. Gener i heterokromatin er vanligvis **inaktive** - de kan ikke avleses.

Cellen kan regulere hvilke gener som er aktive ved å endre pakkingsgraden. Dette er en viktig del av **epigenetisk** regulering.`,
    },
    {
      id: 'bio1-3-1-note-pakking',
      type: 'note',
      title: 'Prokaryoter og DNA-pakking',
      content:
        'Prokaryoter (bakterier og arkeer) har ikke histoner som eukaryoter. Deres sirkulære DNA pakkes ved hjelp av andre proteiner og supercoiling (ekstra vridning av DNA-heliksen). Bakterie-DNA ligger fritt i cytoplasmaet i et område kalt nukleoiden. Arkeer har derimot histonlignende proteiner som minner om eukaryoters histoner.',
    },

    // =========================================================================
    // 8. REPLIKASJON
    // =========================================================================
    {
      id: 'bio1-3-1-def-replikasjon',
      type: 'definition',
      title: 'Replikasjon',
      content:
        'Prosessen der DNA-molekylet kopieres slik at cellen får to identiske kopier av sitt DNA før celledeling. Replikasjon er semikonservativ, noe som betyr at hvert nytt DNA-molekyl inneholder én original tråd og én nysyntetisert tråd.',
    },
    {
      id: 'bio1-3-1-replikasjon-intro',
      type: 'text',
      title: 'DNA-replikasjon',
      content: `# DNA-replikasjon

Hver gang en celle skal dele seg, må hele DNA-et kopieres slik at begge dattercellene får en komplett kopi av arvematerialet. Denne kopieringsprosessen kalles **DNA-replikasjon**.

## Semikonservativ replikasjon

Watson og Crick foreslo allerede i sin artikkel fra 1953 at de to trådene i DNA kunne separeres og hver tjene som **mal** (templat) for syntese av en ny komplementær tråd. Dette kalles **semikonservativ** replikasjon fordi hvert nytt DNA-molekyl inneholder:
- Én **gammel** (original) tråd
- Én **ny** (nysyntetisert) tråd

## Meselson-Stahl-eksperimentet (1958)

**Matthew Meselson** og **Franklin Stahl** utførte et elegant eksperiment for å bevise at replikasjonen er semikonservativ.

**Metode:**
1. Bakterier ble dyrket i medium med tungt nitrogen ($^{15}$N) slik at alt DNA-et ble «tungt»
2. Bakteriene ble så overført til medium med normalt nitrogen ($^{14}$N) og fikk dele seg

**Resultater etter sentrifugering (tetthetsgradient):**
- **Generasjon 0 (start):** Alt DNA var tungt ($^{15}$N-$^{15}$N) - én tung bånd
- **Generasjon 1:** Alt DNA var halvtungt ($^{15}$N-$^{14}$N) - én bånd midt mellom tungt og lett
- **Generasjon 2:** Halvparten halvtungt ($^{15}$N-$^{14}$N) og halvparten lett ($^{14}$N-$^{14}$N) - to bånd

Disse resultatene passet **bare** med den semikonservative modellen. De utelukket:
- **Konservativ** replikasjon (hele det gamle molekylet ville vært intakt)
- **Dispersiv** replikasjon (ville gitt gradvis fortynning uten skarpe bånd)`,
    },
    {
      id: 'bio1-3-1-def-semikonservativ',
      type: 'definition',
      title: 'Semikonservativ replikasjon',
      content:
        'Replikasjonsmodell der hvert nytt DNA-molekyl består av én original (gammel) tråd og én nysyntetisert tråd. Betegnelsen «semikonservativ» betyr «halvveis bevart» - halvparten av det originale molekylet bevares i hvert nytt molekyl. Denne modellen ble bekreftet av Meselson-Stahl-eksperimentet i 1958.',
    },

    // =========================================================================
    // 9. EKSEMPEL: MESELSON-STAHL
    // =========================================================================
    {
      id: 'bio1-3-1-eks-meselson',
      type: 'example',
      title: 'Eksempel: Forutsi resultater fra Meselson-Stahl-eksperimentet',
      problem: `I Meselson-Stahl-eksperimentet starter alle bakterier med tungt DNA ($^{15}$N-$^{15}$N) og overføres til medium med lett nitrogen ($^{14}$N).

a) Hva forventer du å finne etter **3 generasjoner** med semikonservativ replikasjon?
b) Hvor mange DNA-molekyler av hver type (tungt, halvtungt, lett) vil det være?`,
      solution: `**a) Etter 3 generasjoner:**

La oss følge DNA-molekylene gjennom hver generasjon. Vi starter med 1 molekyl $^{15}$N-$^{15}$N.

**Generasjon 1** (1 -> 2 molekyler):
- 2 halvtunge ($^{15}$N-$^{14}$N)
- 0 lette

**Generasjon 2** (2 -> 4 molekyler):
- 2 halvtunge ($^{15}$N-$^{14}$N)
- 2 lette ($^{14}$N-$^{14}$N)

**Generasjon 3** (4 -> 8 molekyler):
- 2 halvtunge ($^{15}$N-$^{14}$N)
- 6 lette ($^{14}$N-$^{14}$N)

**b) Forklaring:**

De to originale $^{15}$N-trådene bevares alltid. De forblir i hvert sitt DNA-molekyl som alltid vil være halvtungt. For hver generasjon fordobles det totale antall molekyler, men antall halvtunge forblir **alltid 2**.

Generelt, etter $n$ generasjoner:
- Totalt antall molekyler: $2^n$
- Halvtunge ($^{15}$N-$^{14}$N): **2** (alltid)
- Lette ($^{14}$N-$^{14}$N): $2^n - 2$
- Tunge ($^{15}$N-$^{15}$N): **0** (etter generasjon 1)

Etter 3 generasjoner i sentrifugen ville vi sett to bånd: et sterkt lett bånd og et svakt halvtungt bånd.`,
    },

    // =========================================================================
    // 10. REPLIKASJONSPROSESSEN I DETALJ
    // =========================================================================
    {
      id: 'bio1-3-1-replikasjon-enzymer',
      type: 'text',
      title: 'Enzymer og mekanismer i DNA-replikasjon',
      content: `# Enzymer og mekanismer i DNA-replikasjon

Replikasjon er en kompleks prosess som krever koordinert samarbeid mellom mange enzymer. La oss gå gjennom prosessen steg for steg.

## Steg 1: Initiering - replikasjonsstart

Replikasjonen starter ved spesifikke steder på DNA-et kalt **replikasjonsopprinnelser** (origins of replication).

- **Prokaryoter** har vanligvis **én** replikasjonsopprinnelse på sitt sirkulære kromosom
- **Eukaryoter** har **mange** replikasjonsopprinnelser (tusenvis) - dette er nødvendig fordi genomet er mye større

Ved hver replikasjonsopprinnelse dannes en **replikasjonsboble** som utvider seg i begge retninger. Der boblene møter hverandre, smelter de sammen.

## Steg 2: Åpning av dobbeltheliks

### Helikase
**Helikase** er enzymet som «åpner glidelåsen». Det binder seg til DNA og bruker energi fra ATP til å bryte hydrogenbindingene mellom baseparene og separere de to trådene.

Det punktet der de to trådene separeres, kalles en **replikasjonsgaffel**. Fordi replikasjonen går i begge retninger fra opprinnelsen, dannes det **to** replikasjonsgafler per boble.

### Topoisomerase (gyrase)
Når helikase åpner heliks, oppstår det spenning (positiv supercoiling) foran gaffelen - tenk på hva som skjer når du prøver å separere to snorer som er snurret rundt hverandre. **Topoisomerase** avlaster denne spenningen ved å kutte, rotere og lime DNA-et.

### Single-strand binding proteins (SSB)
Etter at trådene er separert, binder **SSB-proteiner** seg til enkelttråd-DNA for å hindre at trådene pairer seg igjen eller danner sekundærstruktur.

## Steg 3: Primer-syntese

**DNA-polymerase kan ikke starte en ny tråd fra ingenting.** Den kan bare legge til nukleotider til en eksisterende 3'-OH-ende. Derfor trengs det en «startblokk».

**Primase** er et enzym (en RNA-polymerase) som syntetiserer en kort **RNA-primer** (5-10 nukleotider) som gir DNA-polymerase et startpunkt.

## Steg 4: DNA-syntese

### DNA-polymerase III (hos prokaryoter)

**DNA-polymerase III** er hovedenzymet for DNA-syntese. Det:
- Leser maltråden i **3' -> 5'**-retning
- Bygger den nye tråden i **5' -> 3'**-retning
- Legger til frie **deoksynukleosidtrifosfater** (dNTP-er: dATP, dTTP, dGTP, dCTP)
- Bruker energien fra hydrolyse av pyrofosfat (de to siste fosfatgruppene spaltes av)

**Viktig:** DNA-polymerase kan **bare** syntetisere i **5' -> 3'**-retning. Dette skaper et problem fordi de to trådene er antiparallelle.`,
    },
    {
      id: 'bio1-3-1-def-helikase',
      type: 'definition',
      title: 'Helikase',
      content:
        'Et enzym som bryter hydrogenbindingene mellom baseparene i DNA-dobbeltheliks og separerer de to trådene. Helikase bruker energi fra ATP-hydrolyse og beveger seg langs DNA ved replikasjonsgaffelen. Uten helikase kan ikke de to trådene i DNA separeres for replikasjon eller transkripsjon.',
    },
    {
      id: 'bio1-3-1-def-dna-polymerase',
      type: 'definition',
      title: 'DNA-polymerase',
      content:
        'Et enzym som syntetiserer nye DNA-tråder under replikasjon. DNA-polymerase leser maltråden i 3\'->5\'-retning og bygger den nye tråden i 5\'->3\'-retning ved å legge til komplementære nukleotider. DNA-polymerase III er hovedenzymet for replikasjon hos prokaryoter. DNA-polymerase kan bare legge til nukleotider til en eksisterende 3\'-OH-ende og trenger derfor en RNA-primer for å starte.',
    },

    // =========================================================================
    // 11. LEDENDE OG ETTERFØLGENDE TRÅD
    // =========================================================================
    {
      id: 'bio1-3-1-ledende-etterfolgende',
      type: 'text',
      title: 'Ledende og etterfølgende tråd',
      content: `# Ledende og etterfølgende tråd

Fordi DNA-polymerase bare kan syntetisere i **5' -> 3'**-retning, og de to maltrådene løper i motsatt retning, må de to nye trådene syntetiseres på **ulike måter**.

## Den ledende tråden (leading strand)

Den ene maltråden løper i 3' -> 5'-retning mot replikasjonsgaffelen. Her kan DNA-polymerase følge gaffelen og syntetisere **kontinuerlig** i 5' -> 3'-retning.

- Trenger bare **én RNA-primer** i starten
- Syntesen er rask og effektiv
- Kalles den **ledende tråden** fordi den «leder an» ved replikasjonsgaffelen

## Den etterfølgende tråden (lagging strand)

Den andre maltråden løper i 5' -> 3'-retning mot gaffelen. Her kan DNA-polymerase **ikke** følge gaffelen direkte, fordi den da måtte syntetisere i feil retning (3' -> 5').

Løsningen er at syntesen skjer i korte fragmenter som syntetiseres **bort fra** gaffelen:

1. **Primase** lager en RNA-primer
2. **DNA-polymerase III** syntetiserer et kort DNA-fragment (5' -> 3') bort fra gaffelen
3. Polymerasen stopper når den når den forrige primeren
4. Prosessen gjentas: ny primer, nytt fragment

Disse korte fragmentene kalles **Okazaki-fragmenter** (oppkalt etter Reiji og Tsuneko Okazaki som oppdaget dem i 1968):
- Hos prokaryoter: ca. **1000-2000 nukleotider** lange
- Hos eukaryoter: ca. **100-200 nukleotider** lange

## Fjerning av primere og sammenkobling

Etter at Okazaki-fragmentene er syntetisert, gjenstår to problemer: RNA-primerene må fjernes, og fragmentene må kobles sammen.

**1. DNA-polymerase I** (hos prokaryoter):
- Fjerner RNA-primerene
- Erstatter dem med DNA

**2. DNA-ligase:**
- Kobler sammen de enkelte DNA-fragmentene ved å danne **fosfodiesterbindinger** mellom 3'-enden av ett fragment og 5'-enden av neste
- «Limer» altså Okazaki-fragmentene sammen til en sammenhengende tråd

Etter at alle primere er erstattet og alle fragmenter er koblet sammen, er resultatet to komplette DNA-dobbeltheliks-molekyler.`,
    },
    {
      id: 'bio1-3-1-def-okazaki',
      type: 'definition',
      title: 'Okazaki-fragment',
      content:
        'Korte DNA-fragmenter som syntetiseres på den etterfølgende tråden under DNA-replikasjon. Fordi DNA-polymerase bare kan syntetisere i 5\'->3\'-retning, må den etterfølgende tråden bygges i korte biter som senere kobles sammen av DNA-ligase. Fragmentene er oppkalt etter Reiji og Tsuneko Okazaki. Hos prokaryoter er de 1000-2000 nukleotider lange, hos eukaryoter 100-200.',
    },

    // =========================================================================
    // 12. KORREKTURLESING
    // =========================================================================
    {
      id: 'bio1-3-1-korrekturlesing',
      type: 'text',
      title: 'Korrekturlesing og nøyaktighet',
      content: `# Korrekturlesing og nøyaktighet

DNA-replikasjon må være ekstremt nøyaktig. Feil i kopieringen kan føre til **mutasjoner** - endringer i basesekvensen som kan påvirke proteinene cellen lager.

## Korrekturlesing (proofreading)

DNA-polymerase har en innebygd **korrekturlesingsaktivitet** (3' -> 5' eksonukleaseaktivitet):

1. Etter at et nukleotid er lagt til, sjekker polymerasen at det er riktig baseparet
2. Hvis feil nukleotid er satt inn, oppdager polymerasen at baseparingen er ustabil
3. Polymerasen «rygger» tilbake (3' -> 5') og fjerner det feilaktige nukleotidet
4. Deretter prøver den igjen med riktig nukleotid

## Feilrate

Uten korrekturlesing: ca. 1 feil per $10^5$ (100 000) nukleotider

Med korrekturlesing: ca. 1 feil per $10^7$ (10 millioner) nukleotider

Med etterfølgende reparasjonsmekanismer: ca. **1 feil per $10^9$ (1 milliard) nukleotider**

For det menneskelige genomet (3,2 milliarder basepar) betyr dette gjennomsnittlig bare **ca. 3 feil** per celledeling. Denne utrolige nøyaktigheten er avgjørende for å bevare arveinformasjonen gjennom generasjoner.`,
    },
    {
      id: 'bio1-3-1-note-replikasjon-hastighet',
      type: 'note',
      title: 'Replikasjonshastighet',
      content:
        'Hos bakterien E. coli syntetiserer DNA-polymerase III omtrent 1000 nukleotider per sekund, og hele genomet (4,6 millioner basepar) kopieres på ca. 40 minutter fra én replikasjonsopprinnelse. Hos mennesket er polymerasen tregere (ca. 50 nukleotider per sekund), men fordi det er tusenvis av replikasjonsopprinnelser som arbeider samtidig, kopieres hele genomet (3,2 milliarder basepar) på ca. 8 timer under S-fasen av cellesyklus.',
    },

    // =========================================================================
    // 13. TELOMERER
    // =========================================================================
    {
      id: 'bio1-3-1-telomerer',
      type: 'text',
      title: 'Telomerer og telomerase',
      content: `# Telomerer og telomerase

## Endeproblemet

Lineære kromosomer (som i eukaryoter) har et spesielt problem: DNA-polymerase kan ikke kopiere helt til enden av kromosomet. Fordi syntesen av den etterfølgende tråden starter med en RNA-primer, vil det alltid mangle et lite stykke DNA ytterst på kromosomet når primeren fjernes. Det finnes ingen måte å fylle inn dette gapet.

Resultatet er at kromosomene blir **litt kortere** for hver celledeling. Dette kalles **endeproblemet** (end replication problem).

## Telomerer - beskyttende endestykker

Heldigvis har kromosomene en løsning: **telomerer**. Telomerer er lange, repetitive DNA-sekvenser på endene av kromosomene som ikke koder for noen proteiner.

Hos mennesket er telomersekvensen **TTAGGG**, gjentatt **1000-2000 ganger** på hver kromosomende (totalt 5000-15000 basepar).

Telomerene fungerer som **beskyttende hetter**:
- De forhindrer at viktige gener mistes ved forkortelsen
- De beskytter kromosomendene mot nedbrytning og sammensmelting
- De signaliserer cellens alder

## Telomerase

**Telomerase** er et spesielt enzym som kan forlenge telomerer:
- Det er en **revers transkriptase** - det bruker en RNA-mal som er innebygd i enzymet selv
- Det legger til nye TTAGGG-repetisjoner på 3'-enden av kromosomet
- Deretter kan normal replikasjon syntetisere den komplementære tråden

**Telomerase er aktivt i:**
- Stamceller
- Kjønnsceller (egg og sperm)
- Kreftceller (en av grunnene til at de kan dele seg uendelig)

**Telomerase er inaktivt i:**
- De fleste kroppsceller (somatiske celler)
- Derfor forkortes telomerene med hver celledeling

Når telomerene blir for korte, går cellen inn i **senescens** (cellealdring) og slutter å dele seg. Dette er en av mekanismene bak aldring.`,
    },
    {
      id: 'bio1-3-1-def-telomer',
      type: 'definition',
      title: 'Telomer',
      content:
        'Repetitive DNA-sekvenser (hos mennesket: TTAGGG) på endene av lineære kromosomer. Telomerer beskytter kromosomendene mot nedbrytning og forhindrer tap av viktige gener under replikasjon. Telomerer forkortes ved hver celledeling i somatiske celler, noe som bidrar til cellealdring.',
    },

    // =========================================================================
    // 14. DNA-SKADER OG REPARASJON
    // =========================================================================
    {
      id: 'bio1-3-1-reparasjon',
      type: 'text',
      title: 'DNA-skader og reparasjonsmekanismer',
      content: `# DNA-skader og reparasjonsmekanismer

DNA er ikke uforgjengelig. Det utsettes daglig for skader fra både indre og ytre kilder. Heldigvis har cellen flere reparasjonssystemer.

## Typer DNA-skader

**Spontane skader (indre):**
- **Depurinering:** En purinbase (A eller G) løsner fra sukkeret (~5000 ganger per celle per dag)
- **Deaminering:** En aminogruppe fjernes fra en base, f.eks. cytosin -> uracil
- **Oksidative skader:** Reaktive oksygenforbindelser (frie radikaler) fra cellens eget stoffskifte

**Induserte skader (ytre):**
- **UV-stråling:** Får nabopyrimidiner (spesielt to tyminer) til å binde seg direkte til hverandre og danne **tymindimerer**
- **Ioniserende stråling:** Kan bryte DNA-tråden (enkelt- eller dobbeltrådsbrudd)
- **Kjemiske stoffer:** Mange kreftfremkallende stoffer (karsinogener) skader DNA

## Reparasjonsmekanismer

**1. Mismatch-reparasjon**
- Retter feil som slipper gjennom korrekturlesingen
- Spesielle enzymer gjenkjenner og fjerner feilaktige nukleotider
- DNA-polymerase fyller inn riktig nukleotid
- Reduserer feilraten ytterligere med en faktor 100-1000

**2. Baseeksisjonsreparasjon (BER)**
- Reparerer enkeltbaseskader (f.eks. oksidative skader)
- En **glykosylase** kjenner igjen og fjerner den skadede basen
- En **endonuklease** kutter sukker-fosfat-ryggraden
- DNA-polymerase og ligase fyller inn og limer

**3. Nukleotideksisjonsreparasjon (NER)**
- Reparerer større skader som forvrenger heliks (f.eks. tymindimerer fra UV)
- Et stykke av den skadede tråden (12-13 nukleotider hos prokaryoter, ~30 hos eukaryoter) klippes ut
- DNA-polymerase bruker den uskadet tråden som mal og fyller inn
- DNA-ligase limer den nye biten på plass

**4. Reparasjon av dobbeltrådsbrudd**
- Den mest alvorlige typen skade - begge tråder er kuttet
- To mekanismer: **NHEJ** (non-homologous end joining) - rask men upresis, og **homolog rekombinasjon** - nøyaktig men krever en søsterkromatid som mal

## Når reparasjonen svikter

Hvis DNA-skader ikke repareres, kan resultatet være:
- **Mutasjoner** som endrer proteinenes funksjon
- **Kreft** hvis mutasjoner rammer gener som kontrollerer celledeling
- **Celledød** (apoptose) hvis skaden er for alvorlig

Defekter i DNA-reparasjonsgener er koblet til økt kreftrisiko. For eksempel er mutasjoner i **BRCA1** og **BRCA2** (som er involvert i reparasjon av dobbeltrådsbrudd) assosiert med økt risiko for bryst- og eggstokkreft.`,
    },
    {
      id: 'bio1-3-1-warning-mutasjoner',
      type: 'warning',
      title: 'DNA-skader og mutasjoner er ikke det samme',
      content:
        'Det er viktig å skille mellom DNA-skader og mutasjoner. En **DNA-skade** er en fysisk endring i DNA-strukturen (f.eks. en brutt binding eller en modifisert base) som cellen kan gjenkjenne og reparere. En **mutasjon** er en permanent endring i basesekvensen som ikke lenger gjenkjennes som feil av reparasjonssystemene. DNA-skader som ikke repareres riktig, kan bli til mutasjoner.',
    },

    // =========================================================================
    // 15. EKSEMPEL: REPLIKASJONSOPPSUMMERING
    // =========================================================================
    {
      id: 'bio1-3-1-eks-replikasjon-oversikt',
      type: 'example',
      title: 'Eksempel: Steg-for-steg gjennom replikasjonsgaffelen',
      problem:
        'Beskriv hva som skjer ved en replikasjonsgaffel, og identifiser rollen til hvert enzym.',
      solution: `**Steg-for-steg ved replikasjonsgaffelen:**

**1. Åpning av DNA**
- **Helikase** binder seg og bryter hydrogenbindingene mellom baseparene
- De to trådene separeres og danner en Y-formet replikasjonsgaffel
- **Topoisomerase** avlaster spenningen foran gaffelen
- **SSB-proteiner** stabiliserer de separerte enkelttrådene

**2. Primer-syntese**
- **Primase** syntetiserer korte RNA-primere (5-10 nukleotider)
- Ledende tråd: kun én primer i starten
- Etterfølgende tråd: ny primer for hvert Okazaki-fragment

**3. DNA-syntese**
- **DNA-polymerase III** legger til deoksynukleotider i 5'->3'-retning
- Ledende tråd: syntese er **kontinuerlig** og følger gaffelen
- Etterfølgende tråd: syntese er **diskontinuerlig** i korte Okazaki-fragmenter

**4. Primer-fjerning**
- **DNA-polymerase I** fjerner RNA-primerene og erstatter dem med DNA

**5. Sammenkobling**
- **DNA-ligase** kobler sammen Okazaki-fragmentene ved å danne fosfodiesterbindinger

**Resultat:** To identiske DNA-dobbeltheliks-molekyler, hvert med én gammel og én ny tråd (semikonservativ replikasjon).

**Oppsummering av enzymer:**
| Enzym | Funksjon |
|-------|----------|
| Helikase | Separerer de to trådene |
| Topoisomerase | Avlaster spenning foran gaffelen |
| SSB-proteiner | Stabiliserer enkelttråder |
| Primase | Lager RNA-primere |
| DNA-polymerase III | Hovedsyntese av nye tråder |
| DNA-polymerase I | Fjerner primere, fyller inn DNA |
| DNA-ligase | Kobler sammen fragmenter |`,
    },

    // =========================================================================
    // 16. OPPSUMMERING
    // =========================================================================
    {
      id: 'bio1-3-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `# Oppsummering av kapittel 3.1

## Historiske milepæler
- Miescher (1869) oppdaget nuklein (DNA) i cellekjerner
- Griffith (1928) viste at noe kunne transformere bakterier
- Avery, MacLeod og McCarty (1944) identifiserte DNA som det transformerende prinsippet
- Hershey og Chase (1952) bekreftet at DNA, ikke protein, er arvemolekylet
- Chargaff oppdaget at %A = %T og %G = %C
- Watson og Crick (1953) foreslo dobbeltheliks-modellen, med hjelp av Franklins røntgendata
- Meselson og Stahl (1958) beviste semikonservativ replikasjon

## DNA-struktur
- DNA er bygd opp av **nukleotider** (deoksyribose + fosfat + nitrogenbase)
- Fire baser: adenin (A), tymin (T), guanin (G), cytosin (C)
- Puriner (A, G) har to ringer; pyrimidiner (T, C) har én ring
- To antiparallelle tråder danner en **dobbeltheliks**
- Baseparing: A-T (2 H-bindinger), G-C (3 H-bindinger)
- B-form DNA: 2 nm bred, 10 basepar per omdreining, 3,4 nm stigning

## DNA-pakking (eukaryoter)
- DNA vikles rundt histoner og danner **nukleosomer** (perlekjede-struktur)
- Nukleosomer pakkes til **30 nm kromatinfiber**
- Videre komprimering til **løkkedomener** og **kromosomer**
- **Eukromatin** (løst, aktivt) vs. **heterokromatin** (tett, inaktivt)

## DNA-replikasjon
- **Semikonservativ:** Hvert nytt DNA-molekyl har én gammel og én ny tråd
- **Enzymer:** Helikase, topoisomerase, primase, DNA-polymerase III/I, ligase
- **Ledende tråd:** Kontinuerlig syntese i 5'->3'-retning
- **Etterfølgende tråd:** Diskontinuerlig syntese i Okazaki-fragmenter
- **Korrekturlesing:** 3'->5' eksonukleaseaktivitet, feilrate ~1 per 10$^9$ baser

## Telomerer og reparasjon
- **Telomerer** (TTAGGG-repetisjoner) beskytter kromosomendene
- **Telomerase** forlenger telomerer i stamceller og kjønnsceller
- Flere reparasjonssystemer retter DNA-skader (mismatch, BER, NER)`,
    },
  ],

  // ===========================================================================
  // OPPGAVER (exercises-array)
  // ===========================================================================
  exercises: [
    // --- Oppgave 1: Flervalg, lett ---
    {
      id: 'bio1-3-1-ex-1',
      number: '3.1.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Historiske eksperimenter',
      task: 'Hvilket eksperiment viste for første gang at DNA, og ikke protein, er arvemolekylet?',
      options: [
        {
          id: 'a',
          text: 'Griffiths transformasjonseksperiment (1928)',
          isCorrect: false,
          feedback:
            'Griffiths eksperiment viste at et "transformerende prinsipp" fantes, men han identifiserte ikke stoffet som DNA.',
        },
        {
          id: 'b',
          text: 'Avery, MacLeod og McCartys eksperiment (1944)',
          isCorrect: true,
          feedback:
            'Korrekt! De viste at bare DNase (som bryter ned DNA) forhindret transformasjon, og identifiserte dermed DNA som det transformerende prinsippet.',
        },
        {
          id: 'c',
          text: 'Hershey-Chase-eksperimentet (1952)',
          isCorrect: false,
          feedback:
            'Hershey-Chase bekreftet at DNA er arvemolekylet, men Avery og kollegaer viste dette først i 1944.',
        },
        {
          id: 'd',
          text: 'Meselson-Stahl-eksperimentet (1958)',
          isCorrect: false,
          feedback:
            'Meselson-Stahl viste at replikasjon er semikonservativ, ikke at DNA er arvemolekylet.',
        },
      ],
      correctAnswer: 'b',
      solution:
        'Avery, MacLeod og McCartys eksperiment (1944) var det første som viste at DNA er arvemolekylet. De behandlet det transformerende prinsippet med ulike enzymer og fant at bare DNase (som bryter ned DNA) stoppet transformasjonen. Hershey-Chase (1952) bekreftet dette funnet uavhengig.',
      hints: [
        'Griffith oppdaget transformasjon, men identifiserte ikke det kjemiske stoffet.',
        'Tenk på hvem som brukte enzymatisk nedbrytning for å identifisere stoffet.',
      ],
    },

    // --- Oppgave 2: Flervalg, lett ---
    {
      id: 'bio1-3-1-ex-2',
      number: '3.1.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Nukleotidstruktur',
      task: 'Hvilke tre komponenter utgjør et nukleotid i DNA?',
      options: [
        {
          id: 'a',
          text: 'Ribose, fosfatgruppe og nitrogenbase',
          isCorrect: false,
          feedback:
            'Ribose finnes i RNA, ikke DNA. DNA inneholder deoksyribose.',
        },
        {
          id: 'b',
          text: 'Deoksyribose, aminosyre og nitrogenbase',
          isCorrect: false,
          feedback:
            'Aminosyrer er byggesteinene i proteiner, ikke DNA. DNA-nukleotider inneholder en fosfatgruppe.',
        },
        {
          id: 'c',
          text: 'Deoksyribose, fosfatgruppe og nitrogenbase',
          isCorrect: true,
          feedback:
            'Korrekt! Et DNA-nukleotid består av sukkeret deoksyribose, en fosfatgruppe og én av fire nitrogenbaser (A, T, G eller C).',
        },
        {
          id: 'd',
          text: 'Glukose, fosfatgruppe og nitrogenbase',
          isCorrect: false,
          feedback:
            'Glukose er et sekskarbon-sukker brukt i celleånding, ikke i DNA. DNA inneholder femkarbonsukkeret deoksyribose.',
        },
      ],
      correctAnswer: 'c',
      solution:
        'Et nukleotid i DNA består av tre deler: (1) sukkeret deoksyribose (et femkarbonsukkermolekyl), (2) en fosfatgruppe og (3) en av fire nitrogenbaser: adenin (A), tymin (T), guanin (G) eller cytosin (C).',
      hints: [
        'DNA-forkortelsen gir et hint om sukkeret som inngår.',
        'DNA står for deoksyribonukleinsyre - "deoksyribose" er sukkertypen.',
      ],
    },

    // --- Oppgave 3: Flervalg, lett ---
    {
      id: 'bio1-3-1-ex-3',
      number: '3.1.3',
      type: 'multiple-choice',
      difficulty: 'lett',
      topic: 'Baseparing',
      task: 'Hvilken påstand om baseparing i DNA er korrekt?',
      options: [
        {
          id: 'a',
          text: 'Adenin pairer med cytosin, og guanin pairer med tymin',
          isCorrect: false,
          feedback:
            'Feil kombinasjon. Husk Chargaffs regler: A pairer med T, og G pairer med C.',
        },
        {
          id: 'b',
          text: 'Adenin pairer med tymin via tre hydrogenbindinger',
          isCorrect: false,
          feedback:
            'A pairer med T, men via to hydrogenbindinger, ikke tre. Det er G-C som har tre.',
        },
        {
          id: 'c',
          text: 'Guanin pairer med cytosin via tre hydrogenbindinger',
          isCorrect: true,
          feedback:
            'Korrekt! G pairer med C via tre hydrogenbindinger, mens A pairer med T via to hydrogenbindinger.',
        },
        {
          id: 'd',
          text: 'Alle basepar holdes sammen av like mange hydrogenbindinger',
          isCorrect: false,
          feedback:
            'A-T har to hydrogenbindinger, mens G-C har tre. Derfor er G-C-bindingen sterkere.',
        },
      ],
      correctAnswer: 'c',
      solution:
        'I DNA pairer guanin (G) med cytosin (C) via tre hydrogenbindinger, og adenin (A) pairer med tymin (T) via to hydrogenbindinger. G-C-par er derfor sterkere enn A-T-par, noe som betyr at DNA med høyt GC-innhold krever mer energi å denaturere (separere trådene).',
      hints: [
        'Tenk: A-T = 2, G-C = 3.',
        'Chargaffs regler: A=T og G=C.',
      ],
    },

    // --- Oppgave 4: Flervalg, medium ---
    {
      id: 'bio1-3-1-ex-4',
      number: '3.1.4',
      type: 'multiple-choice',
      difficulty: 'medium',
      topic: 'Replikasjon',
      task: 'Hvorfor er den etterfølgende tråden nødt til å syntetiseres i Okazaki-fragmenter?',
      options: [
        {
          id: 'a',
          text: 'Fordi DNA-polymerase bare kan syntetisere i 3\'->5\'-retning',
          isCorrect: false,
          feedback:
            'DNA-polymerase syntetiserer i 5\'->3\'-retning, ikke 3\'->5\'.',
        },
        {
          id: 'b',
          text: 'Fordi DNA-polymerase bare kan syntetisere i 5\'->3\'-retning, og maltråden for den etterfølgende tråden løper i "feil" retning ved gaffelen',
          isCorrect: true,
          feedback:
            'Korrekt! DNA-polymerase kan bare bygge i 5\'->3\'-retning. På den etterfølgende tråden peker dette bort fra gaffelen, så syntesen må skje i korte fragmenter.',
        },
        {
          id: 'c',
          text: 'Fordi helikase ikke klarer å åpne begge trådene samtidig',
          isCorrect: false,
          feedback:
            'Helikase åpner begge trådene samtidig. Problemet er retningsbegrensningen til DNA-polymerase.',
        },
        {
          id: 'd',
          text: 'Fordi det ikke finnes nok primase til å lage lange primere',
          isCorrect: false,
          feedback:
            'Lengden på primere er ikke årsaken. Det er retningsbegrensningen til DNA-polymerase som er den fundamentale grunnen.',
        },
      ],
      correctAnswer: 'b',
      solution:
        'DNA-polymerase kan bare syntetisere nye tråder i 5\'->3\'-retning. På den ledende tråden peker 5\'->3\'-retningen mot replikasjonsgaffelen, slik at syntesen kan gå kontinuerlig. På den etterfølgende tråden peker 5\'->3\'-retningen bort fra gaffelen. Derfor må syntesen starte gjentatte ganger med nye primere og danne korte Okazaki-fragmenter som senere kobles sammen av DNA-ligase.',
      hints: [
        'Tenk på hvilken retning DNA-polymerase kan syntetisere.',
        'De to trådene i DNA er antiparallelle - de løper i motsatt retning.',
      ],
    },

    // --- Oppgave 5: Klassisk, lett ---
    {
      id: 'bio1-3-1-ex-5',
      number: '3.1.5',
      type: 'classic',
      difficulty: 'lett',
      topic: 'Baseparing og Chargaffs regler',
      task: 'I en DNA-prøve utgjør guanin (G) 32 % av alle baser. Beregn prosentandelen av adenin (A), tymin (T) og cytosin (C).',
      hints: [
        'Bruk Chargaffs regler: %A = %T og %G = %C.',
        'Alle fire basene utgjør til sammen 100 %.',
      ],
      solution:
        'Ifølge Chargaffs regler: %G = %C, så %C = 32 %. Summen G + C = 32 % + 32 % = 64 %. Da er A + T = 100 % - 64 % = 36 %. Siden %A = %T, blir %A = %T = 36 % / 2 = 18 %. Svar: A = 18 %, T = 18 %, G = 32 %, C = 32 %.',
      answer: 'A = 18 %, T = 18 %, C = 32 %',
    },

    // --- Oppgave 6: Klassisk, lett ---
    {
      id: 'bio1-3-1-ex-6',
      number: '3.1.6',
      type: 'classic',
      difficulty: 'lett',
      topic: 'DNA-struktur',
      task: 'Forklar forskjellen mellom puriner og pyrimidiner. Hvilke baser i DNA tilhører hver gruppe?',
      hints: [
        'Tenk på antall ringer i basestrukturen.',
        'Huskeregel: Puriner har to ringer.',
      ],
      solution:
        'Puriner er nitrogenbaser med en dobbeltringstruktur (to sammenkoblede ringer). I DNA er purinene adenin (A) og guanin (G). Pyrimidiner er nitrogenbaser med en enkeltringstruktur (én ring). I DNA er pyrimidinene tymin (T) og cytosin (C). I baseparingen pairer alltid en purin med et pyrimidin (A-T og G-C), slik at dobbeltheliks har konstant bredde.',
    },

    // --- Oppgave 7: Klassisk, medium ---
    {
      id: 'bio1-3-1-ex-7',
      number: '3.1.7',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Komplementaer tråd',
      task: `Skriv den komplementære tråden til følgende DNA-sekvens (oppgi svaret i 5'->3'-retning):

5'-GCATTACGGAT-3'`,
      hints: [
        'Baseparingsreglene: A-T og G-C.',
        'Husk at trådene er antiparallelle. Den komplementære tråden skrevet i 3\'->5\'-retning må snus for å oppgi den i 5\'->3\'-retning.',
      ],
      solution: `Først finner vi den komplementære sekvensen:

Gitt:       5'-G C A T T A C G G A T-3'
Komplement: 3'-C G T A A T G C C T A-5'

Snudd til 5'->3'-retning:
5'-ATCCGTAATGC-3'

Kontroll:
5'-G C A T T A C G G A T-3'
   | | | | | | | | | | |
3'-C G T A A T G C C T A-5'

Alle baser pairer korrekt (A-T og G-C).`,
      answer: "5'-ATCCGTAATGC-3'",
    },

    // --- Oppgave 8: Klassisk, medium ---
    {
      id: 'bio1-3-1-ex-8',
      number: '3.1.8',
      type: 'classic',
      difficulty: 'medium',
      topic: 'DNA-pakking',
      task: 'Beskriv de ulike pakkingsnivåene av DNA i en eukaryot celle, fra nukleotidtråd til kromosom. Forklar rollen til histoner.',
      hints: [
        'Start med DNA-dobbeltheliks og tenk steg for steg: hva er den første pakkingsstrukturen?',
        'Tenk perlekjede, tykkere fiber, løkker og til slutt det mest kondenserte nivået.',
      ],
      solution: `DNA pakkes i flere nivåer i eukaryote celler:

1. DNA-dobbeltheliks (2 nm bred)

2. Nukleosomer: DNA vikler seg rundt histonoktamerer (8 histonproteiner). Ca. 147 basepar DNA vikles nesten to ganger rundt hvert nukleosom. Resultatet ser ut som en "perlekjede". Forkorter DNA ca. 7 ganger.

3. 30 nm kromatinfiber: Nukleosomene pakkes tettere med hjelp av linker-histoner (H1). Danner en tykkere fiber med ca. 30 nm diameter.

4. Løkkedomener: 30 nm-fiberen organiseres i løkker festet til et proteinskjelett. Hver løkke inneholder 20 000-100 000 basepar.

5. Kromosomer: Under celledeling pakkes kromatinet til sin mest kompakte form. DNA er nå ca. 10 000 ganger kortere enn sin utstrakte lengde. Kromosomene er synlige i lysmikroskop.

Histonene spiller en nøkkelrolle i pakkingen. De er positivt ladde proteiner som tiltrekkes av det negativt ladde DNA-et (pga. fosfatgruppene). I tillegg til pakking regulerer histoner også gentilgjengelighet: eukromatin (løst pakket) inneholder aktive gener, mens heterokromatin (tett pakket) inneholder inaktive gener.`,
    },

    // --- Oppgave 9: Klassisk, medium ---
    {
      id: 'bio1-3-1-ex-9',
      number: '3.1.9',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Replikasjonsenzymer',
      task: 'Lag en oversikt over de viktigste enzymene i DNA-replikasjon. For hvert enzym, beskriv kort funksjonen.',
      hints: [
        'Tenk gjennom prosessen steg for steg: hva må skje først, og hva kommer etterpå?',
        'De viktigste enzymene er: helikase, topoisomerase, primase, DNA-polymerase III, DNA-polymerase I og DNA-ligase.',
      ],
      solution: `De viktigste enzymene i DNA-replikasjon:

1. Helikase: Bryter hydrogenbindingene mellom baseparene og separerer de to DNA-trådene. Bruker energi fra ATP.

2. Topoisomerase (gyrase): Avlaster spenningen (supercoiling) som oppstår foran replikasjonsgaffelen når helikase vikler opp heliks.

3. SSB-proteiner (Single-strand binding proteins): Binder seg til separerte enkelttråder og forhindrer at de pairer seg igjen eller danner sekundærstruktur.

4. Primase: Syntetiserer korte RNA-primere (5-10 nukleotider) som gir DNA-polymerase et startpunkt med en fri 3'-OH-gruppe.

5. DNA-polymerase III: Hovedenzymet for DNA-syntese. Legger til deoksynukleotider i 5'->3'-retning. Har også korrekturlesingsaktivitet (3'->5' eksonuklease).

6. DNA-polymerase I: Fjerner RNA-primerene og erstatter dem med DNA-nukleotider.

7. DNA-ligase: Kobler sammen Okazaki-fragmenter (og andre brudd) ved å danne fosfodiesterbindinger mellom 3'-enden av ett fragment og 5'-enden av det neste.`,
    },

    // --- Oppgave 10: Flervalg, medium ---
    {
      id: 'bio1-3-1-ex-10',
      number: '3.1.10',
      type: 'multiple-choice',
      difficulty: 'medium',
      topic: 'Meselson-Stahl',
      task: 'I Meselson-Stahl-eksperimentet ble bakterier med tungt DNA (15N-15N) overført til medium med lett nitrogen (14N). Hva observerte de etter to generasjoner celledeling?',
      options: [
        {
          id: 'a',
          text: 'Alt DNA var lett (14N-14N)',
          isCorrect: false,
          feedback:
            'Etter to generasjoner finnes det fortsatt halvtungt DNA (fra de to originale trådene).',
        },
        {
          id: 'b',
          text: 'Alt DNA var halvtungt (15N-14N)',
          isCorrect: false,
          feedback:
            'Dette var resultatet etter én generasjon, ikke to.',
        },
        {
          id: 'c',
          text: 'Halvparten var halvtungt (15N-14N) og halvparten var lett (14N-14N)',
          isCorrect: true,
          feedback:
            'Korrekt! Etter to generasjoner er halvparten av DNA-molekylene halvtunge og halvparten lette - akkurat som den semikonservative modellen forutsier.',
        },
        {
          id: 'd',
          text: 'En fjerdedel var tungt (15N-15N) og tre fjerdedeler var lett (14N-14N)',
          isCorrect: false,
          feedback:
            'Etter generasjon 1 finnes det ikke lenger helt tungt DNA i den semikonservative modellen.',
        },
      ],
      correctAnswer: 'c',
      solution:
        'Etter generasjon 1: alle 2 molekyler er halvtunge (15N-14N), fordi hver beholder én gammel tung tråd og får én ny lett tråd. Etter generasjon 2: 2 av 4 molekyler er halvtunge (inneholder fortsatt en original 15N-tråd) og 2 av 4 er lette (14N-14N). Dette er nøyaktig det semikonservative modellen forutsier, og det er det Meselson og Stahl observerte.',
      hints: [
        'Tenk på hva som skjer med de to originale tunge trådene gjennom to delinger.',
        'Etter generasjon 1 er alle molekyler halvtunge. Hva skjer når disse deler seg?',
      ],
    },

    // --- Oppgave 11: Klassisk, vanskelig ---
    {
      id: 'bio1-3-1-ex-11',
      number: '3.1.11',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Telomerer og celledeling',
      task: 'Forklar "endeproblemet" ved replikasjon av lineære kromosomer. Hvordan løser cellen dette med telomerer og telomerase? Diskuter sammenhengen mellom telomerer, aldring og kreft.',
      hints: [
        'Hva skjer på enden av den etterfølgende tråden når RNA-primeren fjernes?',
        'Tenk på hvilke celletyper som har aktiv telomerase, og hvilke som ikke har det.',
        'Hvorfor er det problematisk at kreftceller reaktiverer telomerase?',
      ],
      solution: `**Endeproblemet:**
Ved replikasjon av lineære kromosomer oppstår et problem på enden av den etterfølgende tråden. DNA-polymerase trenger en RNA-primer for å starte syntese. Når den siste primeren på enden av kromosomet fjernes, kan ikke DNA-polymerase fylle inn gapet fordi det ikke finnes en 3'-OH-ende å forlenge fra. Resultatet er at kromosomet mister et lite stykke DNA fra enden ved hver celledeling.

**Telomerer som løsning:**
Kromosomendene inneholder telomerer - lange repetisjoner av sekvensen TTAGGG (hos mennesker). Disse sekvensene koder ikke for proteiner, så det er "trygt" å miste litt av dem. Telomerer fungerer som en buffer som beskytter de viktige genene lenger inn på kromosomet.

**Telomerase:**
Telomerase er et enzym med en innebygd RNA-mal. Det kan forlenge 3'-enden av kromosomet ved å legge til nye TTAGGG-repetisjoner. Deretter kan vanlig replikasjon syntetisere den komplementære tråden. Telomerase er aktiv i stamceller, kjønnsceller og fosterceller, men er inaktiv i de fleste somatiske celler.

**Sammenheng med aldring:**
I somatiske celler (uten aktiv telomerase) forkortes telomerene gradvis. Når de blir for korte, går cellen inn i senescens (slutter å dele seg) eller apoptose (programmert celledød). Denne begrensningen kalles Hayflick-grensen (ca. 50-70 delinger). Telomerforkortelse er dermed en av mekanismene bak biologisk aldring.

**Sammenheng med kreft:**
Ca. 85-90 % av kreftceller har reaktivert telomerase, noe som gjør at de kan dele seg ubegrenset. Telomerase-hemmere forskes på som mulige kreftterapier, men en utfordring er at dette også kan skade stamceller og kjønnsceller som trenger telomerase.`,
    },

    // --- Oppgave 12: Klassisk, vanskelig ---
    {
      id: 'bio1-3-1-ex-12',
      number: '3.1.12',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'DNA-reparasjon',
      task: 'Beskriv tre ulike DNA-reparasjonsmekanismer og forklar hvilken type skade hver av dem retter. Hva kan konsekvensene være dersom disse mekanismene svikter?',
      hints: [
        'Tenk på mismatch-reparasjon, baseeksisjonsreparasjon (BER) og nukleotideksisjonsreparasjon (NER).',
        'Hva slags skade forårsaker UV-stråling, og hvilken mekanisme reparerer dette?',
        'Tenk på BRCA1/BRCA2-mutasjoner som eksempel på konsekvenser.',
      ],
      solution: `**1. Mismatch-reparasjon:**
- Retter feil som oppstår under replikasjon og slipper gjennom DNA-polymerasens korrekturlesing
- F.eks. hvis G feilaktig er pairer med T i stedet for C
- Spesielle enzymer (MutS, MutL, MutH hos bakterier) gjenkjenner den feilaktige baseparingen, klipper ut det feilaktige nukleotidet, og DNA-polymerase fyller inn riktig base
- Reduserer feilraten med ytterligere 100-1000 ganger

**2. Baseeksisjonsreparasjon (BER):**
- Retter små, enkeltstående baseskader: oksidative skader, deaminering, depurinering
- En DNA-glykosylase gjenkjenner og fjerner den skadede basen, en AP-endonuklease kutter ryggraden, DNA-polymerase fyller inn riktig nukleotid, og DNA-ligase limer
- Den vanligste reparasjonsmekanismen (tusenvis av skader per celle per dag)

**3. Nukleotideksisjonsreparasjon (NER):**
- Retter større skader som forvrenger DNA-heliksen, f.eks. tymindimerer fra UV-stråling
- Et helt stykke av DNA-tråden (ca. 12-30 nukleotider) klippes ut rundt skaden
- DNA-polymerase bruker den uskadet tråden som mal og fyller inn
- DNA-ligase limer det hele sammen

**Konsekvenser ved svikt:**
- Opphopning av mutasjoner som kan endre proteiners funksjon
- Økt kreftrisiko: mutasjoner i onkogener eller tumorsuppressorgener kan gi ukontrollert celledeling
- Spesifikke syndromer: Xeroderma pigmentosum (defekt NER) gir ekstrem UV-følsomhet og hudkreft; Lynch syndrom (defekt mismatch-reparasjon) gir økt risiko for tarmkreft; BRCA1/BRCA2-mutasjoner (defekt dobbelttrådsbruddreparasjon) gir økt risiko for bryst- og eggstokkreft
- Celledød (apoptose) dersom skadene er for omfattende til å repareres`,
    },

    // --- Oppgave 13: Flervalg, vanskelig ---
    {
      id: 'bio1-3-1-ex-13',
      number: '3.1.13',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      topic: 'Replikasjon og komplementaritet',
      task: 'Et DNA-molekyl har totalt 4000 basepar. Av disse er 1200 adenin-tymin-par (A-T). Etter to runder med semikonservativ replikasjon, hvor mange frie tymin-nukleotider (dTTP) har blitt brukt totalt?',
      options: [
        {
          id: 'a',
          text: '1200',
          isCorrect: false,
          feedback:
            'Dette ville vært antallet for bare den ene siden av DNA-et i én replikasjonsrunde.',
        },
        {
          id: 'b',
          text: '2400',
          isCorrect: false,
          feedback:
            'Tenk på at det trengs T-nukleotider for alle nye tråder, og at adenin finnes på begge trådene.',
        },
        {
          id: 'c',
          text: '3600',
          isCorrect: true,
          feedback:
            'Korrekt! Det brukes 1200 dTTP per replikasjon (mot A-basene), og etter to runder lages det totalt 3 nye kopier av de originale trådene (2 i runde 1, pluss 4 i runde 2 minus de 2 som ble laget i runde 1... enklere: antall nye tråder = 6, men A finnes på begge sider. Totalt: 1200 A-basepar gir 2400 A-baser fordelt på begge tråder, 3 replikasjoner gir 2400 x 3 / 2 = 3600.',
        },
        {
          id: 'd',
          text: '4800',
          isCorrect: false,
          feedback:
            'Denne beregningen overestimerer antallet. Tenk nøyere gjennom hvor mange nye tråder som dannes.',
        },
      ],
      correctAnswer: 'c',
      solution: `La oss løse dette systematisk.

Utgangspunkt: 1 DNA-molekyl med 4000 bp, hvorav 1200 er A-T-par.

I hvert DNA-molekyl finnes det 1200 A-baser på den ene tråden og 1200 T-baser på den andre (som pairer med hverandre). Totalt antall A-baser = 1200, totalt antall T-baser = 1200.

Runde 1: 1 molekyl -> 2 molekyler. Det lages 2 nye tråder. Hver ny tråd trenger T-nukleotider der maltråden har A. Totalt A-baser i de 2 maltrådene = 1200. Brukte dTTP i runde 1 = 1200.

Runde 2: 2 molekyler -> 4 molekyler. Det lages 4 nye tråder. Totalt A-baser i de 4 maltrådene = 2 x 1200 = 2400. Brukte dTTP i runde 2 = 2400.

Totalt brukte dTTP = 1200 + 2400 = 3600.`,
      hints: [
        'Hvor mange A-baser finnes det totalt i det opprinnelige DNA-molekylet?',
        'Hvor mange nye tråder lages i runde 1, og hvor mange i runde 2?',
        'dTTP trengs overalt der maltråden har et A.',
      ],
    },

    // --- Oppgave 14: Klassisk, vanskelig ---
    {
      id: 'bio1-3-1-ex-14',
      number: '3.1.14',
      type: 'classic',
      difficulty: 'vanskelig',
      topic: 'Historisk vitenskapelig metode',
      task: 'Hershey og Chase brukte radioaktive isotoper for å avgjøre om DNA eller protein er arvemolekylet. Forklar detaljert (a) hvorfor de valgte akkurat $^{32}$P og $^{35}$S som radioaktive markører, (b) hva resultatene viste, og (c) hvorfor dette eksperimentet var mer overbevisende for det vitenskapelige miljøet enn Averys eksperiment.',
      hints: [
        'Tenk på den kjemiske sammensetningen til DNA vs. protein. Hvilke grunnstoffer er unike for hvert molekyl?',
        'Sentrifugering skiller virusdeler (utenfor) fra bakterieinnhold (innenfor).',
        'Averys eksperiment ble kritisert for mulig forurensning av proteinrester.',
      ],
      solution: `**a) Valg av radioaktive markører:**
Hershey og Chase valgte isotopene basert på den unike kjemiske sammensetningen til DNA og proteiner:
- DNA inneholder fosfor (P) men ikke svovel (S)
- Proteiner inneholder svovel (S, i aminosyrene cystein og metionin) men svært lite fosfor
Ved å merke fager med 32P ble DNA-et radioaktivt, og ved å merke med 35S ble proteinene radioaktive. Dermed kunne de spore hvert molekyl uavhengig av det andre.

**b) Resultater:**
Etter at merkede bakteriofager infiserte E. coli-bakterier og ble separert med blender og sentrifuge:
- 32P (DNA) ble funnet i pelleten (inne i bakteriene)
- 35S (protein) ble funnet i supernatanten (utenfor bakteriene)
Nye fag-partikler produsert av infiserte bakterier inneholdt 32P men ikke 35S.
Konklusjon: Det er DNA som injiseres i bakterien og styrer produksjonen av nye virus.

**c) Hvorfor mer overbevisende enn Averys eksperiment:**
1. Averys eksperiment brukte kjemisk rensing, og kritikere argumenterte for at DNA-preparatet kunne ha vært forurenset med små mengder protein som egentlig var det transformerende prinsippet
2. Hershey-Chase brukte radioaktiv merking som ga direkte fysisk sporing av molekylene uten behov for kjemisk rensing
3. Den elegante bruken av virusbiologi - der DNA og protein har separate funksjoner - ga et rent system uten tvetydighet
4. Hershey og Chase hadde høyere akademisk status i det amerikanske biologimiljøet, noe som dessverre også spilte en rolle
5. Eksperimentet bekreftet Averys resultater med en helt uavhengig metode, og to uavhengige bevis er sterkere enn ett`,
    },

    // --- Oppgave 15: Klassisk, medium ---
    {
      id: 'bio1-3-1-ex-15',
      number: '3.1.15',
      type: 'classic',
      difficulty: 'medium',
      topic: 'Replikasjon og celledeling',
      task: 'En bakteriecelle har et sirkulært kromosom med 4 600 000 basepar og én replikasjonsopprinnelse. DNA-polymerase syntetiserer ca. 1000 nukleotider per sekund. (a) Hvor lang tid tar det å replikere hele kromosomet? (b) Forklar hvorfor eukaryote celler trenger mange replikasjonsopprinnelser.',
      hints: [
        'Replikasjonen går i begge retninger fra opprinnelsen, så det arbeides fra to gafler samtidig.',
        'Tenk på størrelsen til et eukaryot genom sammenlignet med et prokaryot.',
      ],
      solution: `**a) Tid for replikasjon:**
Replikasjonen starter ved én opprinnelse og går i begge retninger. To replikasjonsgafler beveger seg i motsatt retning, slik at hver gaffel trenger å kopiere halvparten av kromosomet.

Hver gaffel kopierer: 4 600 000 / 2 = 2 300 000 basepar.
Hastighet: 1000 nukleotider/sekund.
Tid: 2 300 000 / 1000 = 2300 sekunder = ca. 38 minutter.

(I virkeligheten tar det ca. 40 minutter for E. coli, som stemmer godt!)

**b) Eukaryoter trenger mange replikasjonsopprinnelser fordi:**
1. Eukaryote genomer er mye større (f.eks. 3,2 milliarder bp hos mennesket vs. 4,6 millioner bp hos E. coli - nesten 700 ganger større)
2. Eukaryot DNA-polymerase er tregere (ca. 50 nukleotider/sek vs. 1000 hos bakterier)
3. Med bare én opprinnelse og eukaryot hastighet ville replikasjon av menneskets genom ta: 3 200 000 000 / (2 x 50) = 32 000 000 sekunder = ca. 370 dager!
4. Med tusenvis av opprinnelser (estimert ca. 30 000-50 000) kan hele genomet kopieres på ca. 8 timer (S-fasen av cellesyklus)
5. Replikasjonsboblene fra naboropprinnelser vokser og smelter sammen til hele genomet er kopiert`,
    },
  ],
};

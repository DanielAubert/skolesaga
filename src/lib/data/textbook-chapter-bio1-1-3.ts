/**
 * Biologi 1 - Kapittel 1.3: Biologiske makromolekyler
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_1_3: TextbookChapter = {
  id: 'bio1-1-3',
  courseId: 'biologi-1',
  chapterNumber: '1.3',
  title: 'Biologiske makromolekyler',
  description:
    'Lær om de fire hovedgruppene av biologiske makromolekyler: karbohydrater, lipider, proteiner og nukleinsyrer. Forstå hvordan monomerer bygges sammen til polymerer, hvordan enzymer katalyserer reaksjoner, og hvorfor vann er essensielt for livet.',
  estimatedMinutes: 80,
  competenceGoals: [
    'beskrive struktur og funksjon til de fire hovedgruppene av biologiske makromolekyler',
    'forklare hvordan polymerer dannes ved kondensasjonsreaksjoner og brytes ned ved hydrolyse',
    'gjøre rede for sammenhengen mellom proteinstruktur og proteinfunksjon',
    'forklare hvordan enzymer katalyserer biokjemiske reaksjoner',
    'beskrive faktorer som påvirker enzymaktivitet',
    'forklare vannets spesielle egenskaper og betydning for liv',
  ],
  content: [
    // =========================================================================
    // Introduksjon: Livets kjemi
    // =========================================================================
    {
      id: 'bio1-1-3-intro',
      type: 'text',
      title: 'Livets kjemi',
      content: `# Biologiske makromolekyler

Alle levende organismer er bygd opp av de samme grunnleggende kjemiske byggesteinene. Selv om naturen viser et enormt mangfold av livsformer -- fra bakterier i dyphavets varme kilder til de høyeste trærne i regnskogen -- deler de alle fire grupper av store, komplekse molekyler: **karbohydrater**, **lipider**, **proteiner** og **nukleinsyrer**.

Disse molekylene kalles **biologiske makromolekyler** fordi de er svært store sammenlignet med enkle molekyler som vann eller karbondioksid. De utfører oppgaver som er helt nødvendige for livet: de lagrer energi, gir strukturell støtte, katalyserer kjemiske reaksjoner, lagrer genetisk informasjon og mye mer.

## Karbon -- livets grunnstoff

Karbon (C) er det sentrale grunnstoffet i alle biologiske makromolekyler. Det som gjør karbon så spesielt, er at det har fire valenselektroner og dermed kan danne **fire kovalente bindinger** med andre atomer. Dette gir karbon en unik evne til å danne:

- **Lange kjeder** (lineære og forgrenede)
- **Ringer** (som i glukose og kolesterol)
- **Dobbelt- og trippelbindinger** (som i fettsyrer)
- **Bindinger med mange ulike grunnstoffer** (H, O, N, S, P)

Resultatet er et nesten uendelig antall mulige molekylstrukturer, noe som forklarer mangfoldet vi ser i biologiske molekyler. Studiet av karbonforbindelser kalles **organisk kjemi**, og biologien bygger direkte på denne kjemien.

## Funksjonelle grupper

I tillegg til karbonkjedens grunnstruktur inneholder biologiske molekyler ulike **funksjonelle grupper** som gir dem spesifikke kjemiske egenskaper:

- **Hydroksylgruppe (-OH)**: gjør molekyler polare og vannløselige (f.eks. i karbohydrater)
- **Karboksylgruppe (-COOH)**: gjør molekyler sure (f.eks. i aminosyrer og fettsyrer)
- **Aminogruppe (-NH$_2$)**: gjør molekyler basiske (f.eks. i aminosyrer)
- **Fosfatgruppe (-PO$_4$)**: viktig i energioverføring (ATP) og nukleinsyrer
- **Sulfhydrylgruppe (-SH)**: viktig for disulfidbindinger i proteiner`,
    },

    // =========================================================================
    // Monomerer og polymerer
    // =========================================================================
    {
      id: 'bio1-1-3-def-polymer',
      type: 'definition',
      title: 'Polymer',
      content:
        'En **polymer** er et stort molekyl (makromolekyl) som er bygd opp av mange små, repeterende enheter kalt **monomerer**, koblet sammen med kovalente bindinger. Eksempler er stivelse (polymer av glukose), proteiner (polymer av aminosyrer) og DNA (polymer av nukleotider).',
    },
    {
      id: 'bio1-1-3-def-monomer',
      type: 'definition',
      title: 'Monomer',
      content:
        'En **monomer** er en liten, enkel byggestein som kan kobles sammen med andre monomerer for å danne en polymer. Ordet kommer fra gresk: "mono" (en) og "meros" (del). Eksempler på monomerer er glukose, aminosyrer og nukleotider.',
    },
    {
      id: 'bio1-1-3-polymerisering',
      type: 'text',
      title: 'Kondensasjon og hydrolyse',
      content: `## Hvordan polymerer dannes og brytes ned

### Kondensasjonsreaksjon (dehydreringssyntese)

Polymerer dannes ved at monomerer kobles sammen gjennom en **kondensasjonsreaksjon** (også kalt dehydreringssyntese). I denne reaksjonen:

1. To monomerer bringes sammen
2. Et vannmolekyl ($\\text{H}_2\\text{O}$) fjernes (en -OH fra den ene monomeren og en -H fra den andre)
3. En kovalent binding dannes mellom monomerene
4. Prosessen gjentas for å bygge opp lange kjeder

Denne reaksjonen krever **energi** (den er endergonisk) og katalyseres av spesifikke enzymer i cellen.

### Hydrolyse

**Hydrolyse** er den omvendte prosessen der polymerer brytes ned til monomerer. I denne reaksjonen:

1. Et vannmolekyl tilføres
2. Den kovalente bindingen mellom to monomerer brytes
3. -OH legges til den ene monomeren og -H til den andre
4. De frie monomerene kan gjenbrukes av cellen

Hydrolyse **frigjør energi** og skjer blant annet under fordøyelsen, der store molekyler i maten brytes ned til monomerer som kroppen kan ta opp.

$$\\text{Polymer} + \\text{H}_2\\text{O} \\xrightarrow{\\text{enzym}} \\text{Monomer}_1 + \\text{Monomer}_2$$`,
    },
    {
      id: 'bio1-1-3-note-vann-syntese',
      type: 'note',
      title: 'Kondensasjon i dagliglivet',
      content:
        'Kondensasjonsreaksjoner foregår hele tiden i kroppen din. Hver gang cellene dine bygger et nytt protein, kobles aminosyrer sammen ved kondensasjon. Og hver gang du fordøyer mat, brytes polymerer ned ved hydrolyse. Disse to prosessene er i konstant balanse og er grunnleggende for alt liv.',
    },

    // =========================================================================
    // Karbohydrater
    // =========================================================================
    {
      id: 'bio1-1-3-karbohydrater',
      type: 'text',
      title: 'Karbohydrater',
      content: `## Karbohydrater

Karbohydrater er den mest utbredte gruppen organiske molekyler på jorden. De har den generelle formelen $\\text{C}_n(\\text{H}_2\\text{O})_n$, noe som betyr at de inneholder karbon, hydrogen og oksygen i forholdet 1:2:1. Navnet "karbohydrat" betyr bokstavelig talt "karbon med vann".

Karbohydrater deles i tre hovedgrupper basert på størrelse: **monosakkarider**, **disakkarider** og **polysakkarider**.

### Monosakkarider -- de enkleste sukkertypene

Monosakkarider er de enkleste karbohydratene og kan ikke brytes ned til enda enklere sukkerarter. De viktigste monosakkaridene har 5 eller 6 karbonatomer:

**Heksoser (6 karbonatomer, $\\text{C}_6\\text{H}_{12}\\text{O}_6$):**
- **Glukose** (druesukker): Den viktigste energikilden for celler. Finnes i blodet og er utgangspunktet for celleånding.
- **Fruktose** (fruktsukker): Finnes i frukt og honning. Smaker søtere enn glukose.
- **Galaktose**: Finnes som del av laktose (melkesukker). Har samme kjemiske formel som glukose, men atomene er arrangert annerledes (isomerer).

**Pentoser (5 karbonatomer, $\\text{C}_5\\text{H}_{10}\\text{O}_5$):**
- **Ribose**: Inngår i RNA og ATP
- **Deoksyribose**: Inngår i DNA (mangler ett oksygenatom sammenlignet med ribose)

Monosakkarider kan forekomme i lineær form, men i vandig løsning danner heksoser og pentoser **ringstrukturer**. Glukose danner for eksempel en seksring (pyranoseform).

### Disakkarider -- to monomerer koblet sammen

Disakkarider dannes ved at to monosakkarider kobles sammen gjennom en kondensasjonsreaksjon. Bindingen mellom dem kalles en **glykosidbinding**.

De viktigste disakkaridene er:
- **Sukrose** (vanlig bordsukker) = glukose + fruktose. Transportsukkeret i planter.
- **Laktose** (melkesukker) = glukose + galaktose. Finnes i melk fra pattedyr.
- **Maltose** (maltsukker) = glukose + glukose. Dannes ved nedbrytning av stivelse.

Fordøyelsesenzymer (som laktase, sukrase og maltase) bryter disakkarider ned til monosakkarider ved hydrolyse slik at kroppen kan ta dem opp i tynntarmen.`,
    },
    {
      id: 'bio1-1-3-warning-laktose',
      type: 'warning',
      title: 'Laktoseintoleranse',
      content:
        'Mange voksne mennesker produserer ikke nok av enzymet **laktase** og kan derfor ikke bryte ned laktose i melk. Dette kalles laktoseintoleranse og fører til magesmerter, oppblåsthet og diaré ved inntak av melkeprodukter. Laktosetoleranse hos voksne er en genetisk egenskap som er vanligst i befolkninger med lang tradisjon for melkedrift, som i Skandinavia.',
    },
    {
      id: 'bio1-1-3-polysakkarider',
      type: 'text',
      title: 'Polysakkarider',
      content: `### Polysakkarider -- lange kjeder av monosakkarider

Polysakkarider er store polymerer bygd opp av hundrevis til tusenvis av monosakkarider. De har ulik struktur avhengig av funksjon:

**Stivelse** (planter):
- Lagringsform for glukose i planter
- Finnes i poteter, ris, korn og bønner
- Består av to typer: **amylose** (lineær kjede) og **amylopektin** (forgrenet kjede)
- Kan brytes ned av enzymet amylase i spytt og tynntarm

**Glykogen** (dyr):
- Lagringsform for glukose i dyr og mennesker
- Lagres primært i lever og skjelettmuskler
- Svært forgrenet struktur (mer enn amylopektin) for rask frigjøring av glukose
- Leveren kan lagre ca. 100 g og musklene ca. 400 g glykogen

**Cellulose** (planter):
- Det vanligste organiske molekylet på jorden
- Hovedbestanddel i plantecellers **cellevegg**
- Lineære kjeder av glukose med $\\beta$-1,4-glykosidbindinger
- Mennesker kan **ikke** fordøye cellulose fordi vi mangler enzymet cellulase
- Fungerer som fiber i kostholdet, viktig for fordøyelsen

**Kitin**:
- Strukturmolekyl i leddyrs ytre skjelett (eksoskjelett) og i celleveggen til sopp
- Ligner cellulose, men inneholder nitrogenholdig gruppe (-NHCOCH$_3$)
- Nest mest utbredte polysakkarid etter cellulose

Den viktigste forskjellen mellom stivelse og cellulose er typen glykosidbinding: stivelse har **$\\alpha$-bindinger** som mennesker kan bryte ned, mens cellulose har **$\\beta$-bindinger** som krever spesielle enzymer (cellulase) som de fleste dyr mangler. Drøvtyggere som kyr kan fordøye cellulose fordi de har bakterier i vomma som produserer cellulase.`,
    },
    {
      id: 'bio1-1-3-example-karbo',
      type: 'example',
      title: 'Identifisere typer karbohydrater',
      problem:
        'En ukjent prøve inneholder et karbohydrat med kjemisk formel $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$. Prøven kan brytes ned til to enklere sukkerarter ved tilsetning av syre. Hva slags karbohydrat er dette? Gi et eksempel.',
      solution: `**Analyse:**

1. Formelen $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$ har 12 karbonatomer, noe som er dobbelt av en heksose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$).
2. Prøven kan brytes ned til to enklere sukkerarter -- det betyr at den er satt sammen av to monosakkarider.
3. Formelen har ett vannmolekyl mindre enn summen av to heksoser ($2 \\times \\text{C}_6\\text{H}_{12}\\text{O}_6 - \\text{H}_2\\text{O} = \\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$), noe som stemmer med en kondensasjonsreaksjon.

**Konklusjon:** Prøven inneholder et **disakkarid**. Det kan for eksempel være sukrose (glukose + fruktose), laktose (glukose + galaktose) eller maltose (glukose + glukose).`,
    },

    // =========================================================================
    // Lipider
    // =========================================================================
    {
      id: 'bio1-1-3-lipider',
      type: 'text',
      title: 'Lipider',
      content: `## Lipider

Lipider er en mangfoldig gruppe biologiske molekyler som alle har det til felles at de er **hydrofobe** (vannavstøtende) eller **amfipatiske** (har både hydrofobe og hydrofile deler). I motsetning til de andre makromolekylgruppene er lipider ikke ekte polymerer -- de dannes ikke ved polymerisering av identiske monomerer.

Lipider inneholder hovedsakelig karbon og hydrogen, med mindre oksygen enn karbohydrater. Dette gjør dem **mer energirike** per gram enn karbohydrater.

### Triglyserider (fett og oljer)

Triglyserider er den vanligste lipidtypen og utgjør kroppens viktigste energilager. Et triglyserid består av:
- **Glyserol**: Et lite molekyl med tre hydroksylgrupper (-OH)
- **Tre fettsyrer**: Lange hydrokarbonkjeder med en karboksylgruppe (-COOH) i enden

Fettsyrene kobles til glyserol gjennom kondensasjonsreaksjoner der det dannes **esterbindinger**, og tre vannmolekyler frigjøres.

**Mettede fettsyrer:**
- Har bare enkeltbindinger mellom karbonatomene
- Kjedene er rette og kan pakkes tett sammen
- Fast ved romtemperatur (f.eks. smør, talg)
- Dominerer i animalsk fett
- Høyt inntak er assosiert med økt risiko for hjerte- og karsykdommer

**Umettede fettsyrer:**
- Har en eller flere dobbeltbindinger mellom karbonatomene
- **Enumettede**: Har én dobbeltbinding (f.eks. olivenolje)
- **Flerumettede**: Har flere dobbeltbindinger (f.eks. fiskeolje, solsikkeolje)
- Dobbeltbindingene skaper "knekk" i kjeden (cis-konfigurasjon)
- Kan ikke pakkes like tett -- derfor flytende ved romtemperatur (oljer)

**Transfett:**
- Kunstig fremstilt ved herding av umettet fett (hydrogenering)
- Dobbeltbindingene endres fra cis- til trans-konfigurasjon
- Fast ved romtemperatur tross umettede bindinger
- Øker risikoen for hjerte- og karsykdommer mer enn mettet fett`,
    },
    {
      id: 'bio1-1-3-def-fosfolipid',
      type: 'definition',
      title: 'Fosfolipid',
      content:
        'Et **fosfolipid** er et lipidmolekyl som ligner et triglyserid, men der én av de tre fettsyrene er byttet ut med en **fosfatgruppe** (ofte med en tilkoblet polar gruppe). Fosfolipider er **amfipatiske**: de har en hydrofil (vannelskende) "hode" og to hydrofobe (vannavstøtende) "haler". Denne egenskapen gjør at fosfolipider spontant danner **dobbeltlag** i vann, som utgjør grunnstrukturen i alle biologiske membraner.',
    },
    {
      id: 'bio1-1-3-fosfolipider-steroider',
      type: 'text',
      title: 'Fosfolipider og steroider',
      content: `### Fosfolipider og cellemembranen

Fosfolipidenes amfipatiske natur er nøkkelen til biologiske membraner. I vann danner fosfolipider spontant et **dobbeltlag** (bilayer):
- De hydrofile hodene vender ut mot vannet (på begge sider)
- De hydrofobe halene vender innover, bort fra vannet
- Dette skaper en halvgjennomtrengelig barriere som omslutter cellen

Cellemembranen er ikke stiv -- den er en **flytende mosaikk** der fosfolipider beveger seg lateralt, og der proteiner, kolesterol og karbohydrater er innfelt i eller festet til dobbeltlaget. Membranen regulerer hva som slipper inn og ut av cellen.

### Steroider

Steroider har en helt annen struktur enn triglyserider og fosfolipider. De er bygd opp av fire sammenkoblede karbonringer (tre seksringer og én femring).

**Kolesterol:**
- Viktig bestanddel i cellemembraner hos dyr -- regulerer membranens fluiditet
- Utgangsstoff for syntese av andre steroider
- Transporteres i blodet som LDL ("dårlig kolesterol") og HDL ("godt kolesterol")
- For mye LDL-kolesterol kan gi åreforkalkning

**Steroidhormoner:**
- Testosteron og østrogen (kjønnshormoner)
- Kortisol (stresshormon)
- Aldosteron (regulerer saltbalanse)
- Alle lages fra kolesterol som utgangsmolekyl

### Lipiders funksjoner oppsummert

| Lipidtype | Hovedfunksjon |
|---|---|
| Triglyserider | Langtids energilagring, varmeisolasjon, beskyttelse av organer |
| Fosfolipider | Grunnstruktur i cellemembraner |
| Steroider | Membrankomponent (kolesterol), signalmolekyler (hormoner) |
| Voks | Vannavstøtende belegg (bladoverflater, pelsdyr) |`,
    },
    {
      id: 'bio1-1-3-example-energi',
      type: 'example',
      title: 'Energiinnhold i karbohydrater vs. lipider',
      problem:
        'Fett gir ca. 38 kJ/g energi, mens karbohydrater gir ca. 17 kJ/g. En person trenger ca. 8400 kJ energi per dag. Hvor mange gram rent fett, og hvor mange gram rene karbohydrater, ville dekke dette energibehovet?',
      solution: `**Beregning for fett:**
$$\\frac{8400 \\text{ kJ}}{38 \\text{ kJ/g}} \\approx 221 \\text{ g fett}$$

**Beregning for karbohydrater:**
$$\\frac{8400 \\text{ kJ}}{17 \\text{ kJ/g}} \\approx 494 \\text{ g karbohydrater}$$

**Konklusjon:** Fett lagrer mer enn dobbelt så mye energi per gram som karbohydrater. Derfor er fett et mye mer kompakt energilager. En person som bare spiste fett, ville trenge ca. 221 g, mens en som bare spiste karbohydrater, ville trenge ca. 494 g for å dekke det samme energibehovet.

**Biologisk betydning:** Dyr bruker fett som langtids energilager nettopp fordi det er mer energitett og lettere enn karbohydrater. Trekkfugler og dyr som går i dvale, bygger opp store fettlagre for å ha nok energi til lange perioder uten mat.`,
    },

    // =========================================================================
    // Proteiner
    // =========================================================================
    {
      id: 'bio1-1-3-proteiner',
      type: 'text',
      title: 'Proteiner',
      content: `## Proteiner

Proteiner er de mest allsidige biologiske makromolekylene. De utfører en enorm variasjon av funksjoner i cellen og i organismen som helhet. Det finnes anslagsvis **20 000--25 000** ulike proteiner i menneskekroppen.

### Aminosyrer -- proteinenes byggeklosser

Proteiner er polymerer av **aminosyrer**. Alle aminosyrer har den samme grunnstrukturen:

- Et **sentralt karbonatom** ($\\alpha$-karbon)
- En **aminogruppe** ($-\\text{NH}_2$)
- En **karboksylgruppe** ($-\\text{COOH}$)
- Et **hydrogenatom** ($-\\text{H}$)
- En **variabel sidegruppe** (**R-gruppe**)

Det er R-gruppen som skiller de 20 ulike aminosyrene fra hverandre. R-gruppene varierer i:
- **Størrelse**: fra et enkelt hydrogenatom (glycin) til store ringstrukturer (tryptofan)
- **Ladning**: nøytrale, positive eller negative ved fysiologisk pH
- **Polaritet**: polare (hydrofile) eller upolare (hydrofobe)
- **Spesielle egenskaper**: cystein kan danne disulfidbindinger, prolin danner ringstruktur

Av de 20 aminosyrene er **9 essensielle** for mennesker -- det betyr at kroppen ikke kan lage dem selv, og de må tilføres gjennom kosten. Eksempler er leucin, isoleucin, valin og tryptofan.`,
    },
    {
      id: 'bio1-1-3-def-peptidbinding',
      type: 'definition',
      title: 'Peptidbinding',
      content:
        'En **peptidbinding** er en kovalent binding som dannes mellom karboksylgruppen ($-\\text{COOH}$) til én aminosyre og aminogruppen ($-\\text{NH}_2$) til den neste aminosyren, gjennom en kondensasjonsreaksjon der ett vannmolekyl frigjøres. Resultatet er en $-\\text{CO-NH}-$-binding. En kjede av aminosyrer koblet med peptidbindinger kalles en **polypeptidkjede**.',
    },
    {
      id: 'bio1-1-3-proteinstruktur',
      type: 'text',
      title: 'Proteinstruktur -- fire nivåer',
      content: `### Proteinstruktur

Et proteins funksjon er helt avhengig av dets tredimensjonale form. Vi beskriver proteinstrukturen i fire nivåer:

**Primærstruktur:**
- Rekkefølgen (sekvensen) av aminosyrer i polypeptidkjeden
- Bestemmes av genets nukleotidsekvens
- Selv én endring i primærstrukturen kan ødelegge proteinets funksjon
- Eksempel: Sigdcelleanemi skyldes at én aminosyre (glutaminsyre) er byttet ut med en annen (valin) i hemoglobin

**Sekundærstruktur:**
- Lokale foldingsmønstre som dannes av hydrogenbindinger mellom peptidbindinger
- **$\\alpha$-heliks**: Spiralformet struktur (finnes mye i keratin og hemoglobin)
- **$\\beta$-flak**: Flatere, foldede strukturer der kjedene ligger ved siden av hverandre (finnes i silke og antistoffer)
- De fleste proteiner har begge typer sekundærstruktur

**Tertiærstruktur:**
- Den totale tredimensjonale formen til et enkelt polypeptid
- Stabiliseres av ulike typer interaksjoner mellom R-grupper:
  - **Hydrofobe interaksjoner**: Upolare R-grupper klumper seg sammen i proteinets indre
  - **Hydrogenbindinger**: Mellom polare R-grupper
  - **Ionebindinger**: Mellom positivt og negativt ladde R-grupper
  - **Disulfidbindinger**: Kovalente bindinger mellom to cysteinrester ($-\\text{S-S}-$)
- Tertiærstrukturen gir proteinet sin spesifikke funksjon

**Kvarterstruktur:**
- Organisering av to eller flere polypeptidkjeder (underenheter) til et funksjonelt protein
- Ikke alle proteiner har kvarterstruktur
- Eksempel: **Hemoglobin** består av fire underenheter (to $\\alpha$- og to $\\beta$-kjeder) som sammen binder og transporterer oksygen`,
    },
    {
      id: 'bio1-1-3-def-denaturering',
      type: 'definition',
      title: 'Denaturering',
      content:
        '**Denaturering** er prosessen der et protein mister sin tredimensjonale struktur (sekundær-, tertiær- og kvarterstruktur) uten at peptidbindingene brytes. Det denaturerte proteinet mister normalt sin biologiske funksjon. Denaturering kan skyldes høy temperatur, ekstrem pH, høy saltkonsentrasjon eller kjemiske stoffer som urea. Noen ganger er denaturering reversibel (proteinet kan folde seg tilbake), men ofte er den irreversibel. Et dagligdags eksempel er steking av egg: eggehviten (albumin) blir hvit og fast fordi proteinene denatureres.',
    },
    {
      id: 'bio1-1-3-proteinfunksjoner',
      type: 'text',
      title: 'Proteinenes funksjoner',
      content: `### Proteinenes mangfoldige funksjoner

Proteiner utfører et enormt spekter av oppgaver i levende organismer:

| Funksjonstype | Eksempel | Oppgave |
|---|---|---|
| **Enzymer** | Amylase, DNA-polymerase | Katalyserer kjemiske reaksjoner |
| **Strukturproteiner** | Kollagen, keratin | Gir styrke og støtte til vev |
| **Transportproteiner** | Hemoglobin, kanalproteiner | Transporterer stoffer i blod og gjennom membraner |
| **Forsvarsprotein** | Antistoffer (immunglobuliner) | Bekjemper patogener i immunforsvaret |
| **Signalproteiner** | Insulin, veksthormon | Fungerer som hormoner og signalmolekyler |
| **Motorproteiner** | Myosin, kinesin | Skaper bevegelse (muskelkontraksjon, celletransport) |
| **Reseptorproteiner** | Insulinreseptoren | Mottar signaler på celleoverflaten |
| **Lagringsprotein** | Ferritin, kasein | Lagrer ioner (jern) eller næringsstoffer (melk) |

Det enorme mangfoldet av proteinfunksjoner skyldes at de 20 aminosyrene kan kombineres i et nesten uendelig antall sekvenser og foldinger. Et typisk protein er 200--300 aminosyrer langt, noe som gir $20^{250}$ mulige kombinasjoner -- et astronomisk tall.`,
    },

    // =========================================================================
    // Enzymer
    // =========================================================================
    {
      id: 'bio1-1-3-def-enzym',
      type: 'definition',
      title: 'Enzym',
      content:
        'Et **enzym** er et biologisk katalysatormolekyl, vanligvis et protein, som øker hastigheten på kjemiske reaksjoner i cellen uten selv å bli brukt opp. Enzymer virker ved å senke **aktiveringsenergien** for en reaksjon. De fleste enzymer er svært spesifikke -- hvert enzym katalyserer kun én type reaksjon eller virker bare på ett bestemt substrat.',
    },
    {
      id: 'bio1-1-3-def-aktivt-sete',
      type: 'definition',
      title: 'Aktivt sete',
      content:
        'Det **aktive setet** er det spesifikke området på enzymet der substratet (reaktanten) binder seg. Det aktive setet har en tredimensjonal form som passer til substratets form, omtrent som en nøkkel passer i en lås. Bindingen mellom enzym og substrat danner et **enzym-substrat-kompleks** som gjør at reaksjonen kan skje.',
    },
    {
      id: 'bio1-1-3-def-substrat',
      type: 'definition',
      title: 'Substrat',
      content:
        'Et **substrat** er det molekylet (eller de molekylene) som et enzym virker på. Substratet binder seg til enzymets aktive sete og omdannes til **produkt(er)** i den katalyserte reaksjonen. For eksempel er stivelse substratet for enzymet amylase, og produktet er maltose.',
    },
    {
      id: 'bio1-1-3-enzymer',
      type: 'text',
      title: 'Hvordan enzymer virker',
      content: `## Enzymer -- biologiske katalysatorer

Enzymer er avgjørende for livet. Uten enzymer ville de kjemiske reaksjonene i cellene gå så sakte at livet slik vi kjenner det, ikke ville vært mulig. Et typisk enzym kan øke reaksjonshastigheten med en faktor på $10^6$ til $10^{12}$.

### Låse-og-nøkkel-modellen vs. indusert tilpasning

**Låse-og-nøkkel-modellen** (foreslått av Emil Fischer i 1894):
- Substratet passer nøyaktig i enzymets aktive sete, som en nøkkel i en lås
- Enkel og intuitiv modell, men noe forenklet

**Indusert tilpasning** (induced fit, foreslått av Daniel Koshland i 1958):
- Det aktive setet endrer form litt når substratet binder seg
- Enzymet "omfavner" substratet og tilpasser seg formen
- Mer nøyaktig beskrivelse av hvordan enzymer faktisk fungerer
- Formendringen bidrar til å svekke substratets bindinger og senke aktiveringsenergien

### Enzymkatalysens trinn

1. **Substrat binder** til enzymets aktive sete
2. **Enzym-substrat-kompleks** dannes (enzymets form kan tilpasse seg)
3. **Reaksjonen katalyseres**: Substratets bindinger svekkes, nye bindinger dannes
4. **Produkt(er) frigjøres** fra det aktive setet
5. **Enzymet er uendret** og klar for et nytt substrat

### Faktorer som påvirker enzymaktivitet

**Temperatur:**
- Økt temperatur gir normalt økt enzymaktivitet (flere kollisjoner mellom enzym og substrat)
- Hvert enzym har en **optimal temperatur** der aktiviteten er høyest
- For menneskeenzymer er optimum typisk rundt 37 $\\degree$C (kroppstemperatur)
- Over optimal temperatur faller aktiviteten raskt fordi enzymet **denatureres**

**pH:**
- Hvert enzym har en **optimal pH** der det fungerer best
- De fleste enzymer i menneskekroppen fungerer best ved nøytral pH (ca. 7)
- Pepsin (i magesekken) fungerer best ved pH 2
- Trypsin (i tynntarmen) fungerer best ved pH 8
- Ekstrem pH denaturerer enzymet ved å forstyrre ionebindinger og hydrogenbindinger

**Substratkonsentrasjon:**
- Økt substratkonsentrasjon gir økt reaksjonshastighet -- til et punkt
- Ved **metning** (V$_{\\text{max}}$) er alle enzymets aktive seter opptatt, og ytterligere substrat øker ikke hastigheten
- Reaksjonshastigheten følger en **metningskurve** (hyperbolsk form)

**Enzymkonsentrasjon:**
- Mer enzym gir raskere reaksjon (flere aktive seter tilgjengelig)
- Celler regulerer enzymkonsentrasjonen for å styre stoffskiftet`,
    },
    {
      id: 'bio1-1-3-enzyminhibitorer',
      type: 'text',
      title: 'Enzyminhibitorer',
      content: `### Enzyminhibitorer

Inhibitorer er stoffer som reduserer enzymaktiviteten. De er viktige for regulering av stoffskiftet og brukes i mange medisiner.

**Kompetitiv inhibisjon:**
- Inhibitoren ligner strukturelt på substratet
- Inhibitoren binder seg til enzymets **aktive sete** og blokkerer substratet
- Inhibisjonen kan overvinnes ved å øke substratkonsentrasjonen (substratet "utkonkurrerer" inhibitoren)
- Eksempel: Metotreksat (kreftmedisin) er en kompetitiv inhibitor av enzymet dihydrofolatreduktase

**Ikke-kompetitiv (allosterisk) inhibisjon:**
- Inhibitoren binder seg til et **annet sted** på enzymet (allosterisk sete)
- Bindingen endrer enzymets form slik at det aktive setet ikke lenger passer til substratet
- Kan **ikke** overvinnes ved å øke substratkonsentrasjonen
- Eksempel: Tungmetaller som bly og kvikksølv kan binde seg til allosteriske seter og hemme enzymer

**Irreversibel inhibisjon:**
- Inhibitoren binder seg permanent til enzymet (ofte kovalent)
- Enzymet ødelegges permanent
- Eksempel: Nervegass (som sarin) binder seg irreversibelt til acetylkolinesterase

**Tilbakekoblingsregulering (feedback-inhibisjon):**
- Sluttproduktet i en reaksjonskjede hemmer det første enzymet i kjeden
- Viktig for å regulere stoffskiftet -- hindrer overproduksjon
- Eksempel: Når cellen har nok ATP, hemmes fosfofruktkinase (et nøkkelenzym i glykolysen)`,
    },
    {
      id: 'bio1-1-3-example-enzymtemp',
      type: 'example',
      title: 'Enzymaktivitet og temperatur',
      problem:
        'Et enzym isolert fra en menneskecelle testes ved ulike temperaturer. Resultatene viser at reaksjonshastigheten øker jevnt fra 10 $\\degree$C til 37 $\\degree$C, deretter faller den bratt og er nær null ved 60 $\\degree$C. Forklar denne observasjonen.',
      solution: `**Forklaring:**

**Fase 1: Økning (10--37 $\\degree$C):**
Når temperaturen stiger, øker den kinetiske energien til molekylene. Enzym og substrat kolliderer oftere og med mer energi, noe som gir flere vellykkede reaksjoner per tidsenhet. Reaksjonshastigheten øker tilnærmet eksponentielt.

**Fase 2: Optimum (ca. 37 $\\degree$C):**
Ved 37 $\\degree$C er enzymaktiviteten på sitt høyeste. Dette er optimal temperatur for de fleste humane enzymer, og det er ikke tilfeldig at det også er normal kroppstemperatur.

**Fase 3: Rask nedgang (37--60 $\\degree$C):**
Over optimal temperatur begynner enzymet å **denatureres**. De svake bindingene (hydrogenbindinger, hydrofobe interaksjoner, ionebindinger) som opprettholder enzymets tredimensjonale form, brytes. Det aktive setet endrer form og kan ikke lenger binde substratet effektivt. Ved 60 $\\degree$C er enzymet fullstendig denaturert og inaktivt.

**Viktig poeng:** Denatureringen er vanligvis irreversibel for de fleste enzymer -- enzymet kan ikke folde seg tilbake til riktig form.`,
    },
    {
      id: 'bio1-1-3-note-enzym-medisin',
      type: 'note',
      title: 'Enzymer i medisin',
      content:
        'Mange medisiner virker som enzyminhibitorer. For eksempel hemmer **ibuprofen** enzymet cyklooksygenase (COX) som produserer prostaglandiner, og dermed reduseres smerte og betennelse. **Statiner** (kolesterolsenkende medisiner) hemmer enzymet HMG-CoA-reduktase i leveren. Forståelse av enzymers virkemåte er derfor helt sentralt i moderne medisin og farmasøytisk forskning.',
    },

    // =========================================================================
    // Nukleinsyrer
    // =========================================================================
    {
      id: 'bio1-1-3-nukleinsyrer',
      type: 'text',
      title: 'Nukleinsyrer',
      content: `## Nukleinsyrer

Nukleinsyrer er biologiske makromolekyler som lagrer og overfører **genetisk informasjon**. Det finnes to typer: **DNA** (deoksyribonukleinsyre) og **RNA** (ribonukleinsyre).

### Nukleotider -- nukleinsyrenes byggeklosser

Nukleinsyrer er polymerer av **nukleotider**. Hver nukleotid består av tre deler:

1. **Et sukkermolekyl** (pentose):
   - Deoksyribose i DNA
   - Ribose i RNA

2. **En fosfatgruppe** ($-\\text{PO}_4^{3-}$):
   - Kobler nukleotidene sammen via **fosfodiesterbindinger**
   - Gir nukleinsyren negativ ladning

3. **En nitrogenbase**:
   - **Puriner** (to ringer): Adenin (A) og Guanin (G)
   - **Pyrimidiner** (én ring): Cytosin (C), Tymin (T, bare i DNA) og Uracil (U, bare i RNA)

### DNA vs. RNA

| Egenskap | DNA | RNA |
|---|---|---|
| Sukker | Deoksyribose | Ribose |
| Baser | A, T, G, C | A, U, G, C |
| Struktur | Dobbelttrådet (dobbeltheliks) | Enkelttrådet (kan folde seg) |
| Funksjon | Langtids informasjonslagring | Informasjonsoverføring, katalyse |
| Lokalisering | Hovedsakelig i kjernen | Kjerne og cytoplasma |
| Stabilitet | Svært stabil | Mindre stabil, kortere levetid |

Nukleinsyrenes struktur og funksjon behandles i detalj i kapittel 3.1. Her er det viktigste å forstå at nukleinsyrer er polymerer av nukleotider som lagrer den genetiske oppskriften for alle proteinene i organismen.`,
    },

    // =========================================================================
    // Vannets egenskaper
    // =========================================================================
    {
      id: 'bio1-1-3-vann',
      type: 'text',
      title: 'Vann -- livets medium',
      content: `## Vann -- livets medium

Selv om vann ($\\text{H}_2\\text{O}$) ikke er et makromolekyl, er det helt avgjørende for alle de biologiske makromolekylenes funksjon. Vann utgjør 60--70 % av kroppsvekten og er mediet der livets kjemiske reaksjoner finner sted.

### Vannets spesielle egenskaper

Vannmolekylet er **polart**: oksygenatomet trekker elektronene sterkere til seg enn hydrogenatomene, noe som gir en delvis negativ ladning ($\\delta^-$) på oksygen og delvis positive ladninger ($\\delta^+$) på hydrogenatomene. Dette fører til:

**1. Hydrogenbindinger:**
- Vannmolekyler tiltrekker hverandre gjennom hydrogenbindinger ($\\delta^+$ H tiltrekkes av $\\delta^-$ O på nabomolekylet)
- Hvert vannmolekyl kan danne opptil fire hydrogenbindinger
- Gir vann uvanlig høy koherens (sammenhengskraft)

**2. Høy spesifikk varmekapasitet:**
- Mye energi kreves for å varme opp vann
- Stabiliserer temperaturen i organismer og i miljøet
- Beskytter organismer mot raske temperatursvingninger

**3. Høy fordampningsvarme:**
- Fordamping av vann (svette) krever mye energi og kjøler kroppen effektivt

**4. Løsemiddel for polare stoffer:**
- Vann løser ioner og polare molekyler (hydrofile stoffer)
- Upolare stoffer løses ikke (hydrofobe stoffer)
- Gjør vann til et utmerket biologisk løsemiddel

**5. Lavere tetthet som is:**
- Is flyter på vann fordi det er mindre tett enn flytende vann
- Isolerer innsjøer og hav om vinteren -- livet under isen overlever

### Vannets rolle i makromolekylkjemien

- **Kondensasjonsreaksjoner**: Vann fjernes når monomerer kobles sammen
- **Hydrolyse**: Vann tilsettes for å bryte polymerer
- **Proteinfolding**: Hydrofobe interaksjoner i vann driver proteinfolding
- **Membraner**: Fosfolipiddobbeltlag dannes på grunn av vannets interaksjon med hydrofobe og hydrofile grupper
- **Enzymaktivitet**: De fleste enzymatiske reaksjoner foregår i vandig løsning`,
    },

    // =========================================================================
    // Oppsummering
    // =========================================================================
    {
      id: 'bio1-1-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

De fire gruppene biologiske makromolekyler -- karbohydrater, lipider, proteiner og nukleinsyrer -- danner det molekylære grunnlaget for alt liv.

**Karbohydrater** er raske energikilder og strukturmolekyler. De bygges opp av monosakkarider som kobles sammen til di- og polysakkarider.

**Lipider** er hydrofobe molekyler som lagrer energi effektivt, danner cellemembraner og fungerer som signalmolekyler (hormoner).

**Proteiner** er de mest allsidige makromolekylene og utfører funksjoner som katalyse (enzymer), transport, struktur, forsvar og signalering. Deres funksjon avhenger av tredimensjonal struktur.

**Enzymer** er proteiner som katalyserer biokjemiske reaksjoner ved å senke aktiveringsenergien. De påvirkes av temperatur, pH og substratkonsentrasjon.

**Nukleinsyrer** (DNA og RNA) lagrer og overfører genetisk informasjon gjennom polymerer av nukleotider.

**Vann** er mediet der alle disse molekylene fungerer, og dets polare natur er avgjørende for kondensasjon, hydrolyse, proteinfolding og membrandannelse.

Felles for tre av de fire gruppene (karbohydrater, proteiner og nukleinsyrer) er at de er **polymerer** som bygges opp av monomerer gjennom **kondensasjonsreaksjoner** og brytes ned ved **hydrolyse**.`,
    },
  ],

  // ===========================================================================
  // Oppgaver
  // ===========================================================================
  exercises: [
    {
      id: 'bio1-1-3-ex1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type kjemisk reaksjon kobler monomerer sammen til polymerer?',
      options: [
        { id: 'a', text: 'Kondensasjonsreaksjon (dehydreringssyntese)', isCorrect: true },
        { id: 'b', text: 'Hydrolyse', isCorrect: false },
        { id: 'c', text: 'Oksidasjon', isCorrect: false },
        { id: 'd', text: 'Reduksjon', isCorrect: false },
      ],
      solution:
        'Monomerer kobles sammen til polymerer gjennom kondensasjonsreaksjoner (dehydreringssyntese), der et vannmolekyl fjernes for hver ny binding som dannes. Hydrolyse er den omvendte prosessen der polymerer brytes ned ved tilsetning av vann.',
      hints: ['Tenk på hva som skjer med vann i reaksjonen.'],
    },
    {
      id: 'bio1-1-3-ex2',
      number: '2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av følgende er et monosakkarid?',
      options: [
        { id: 'a', text: 'Sukrose', isCorrect: false },
        { id: 'b', text: 'Glukose', isCorrect: true },
        { id: 'c', text: 'Stivelse', isCorrect: false },
        { id: 'd', text: 'Cellulose', isCorrect: false },
      ],
      solution:
        'Glukose er et monosakkarid (enkel sukkerart med formelen C$_6$H$_{12}$O$_6$). Sukrose er et disakkarid (glukose + fruktose). Stivelse og cellulose er polysakkarider.',
      hints: ['Monosakkarider er de enkleste karbohydratene som ikke kan brytes ned til enklere sukkerarter.'],
    },
    {
      id: 'bio1-1-3-ex3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn de fire hovedgruppene av biologiske makromolekyler og gi ett eksempel på hver.',
      solution:
        'De fire hovedgruppene er:\n\n1. **Karbohydrater** -- f.eks. glukose, stivelse, cellulose\n2. **Lipider** -- f.eks. triglyserider (fett), fosfolipider, kolesterol\n3. **Proteiner** -- f.eks. hemoglobin, insulin, kollagen\n4. **Nukleinsyrer** -- f.eks. DNA, RNA',
      hints: ['Tenk på de ulike typene store molekyler som finnes i alle levende organismer.'],
    },
    {
      id: 'bio1-1-3-ex4',
      number: '4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom stivelse og cellulose?',
      options: [
        {
          id: 'a',
          text: 'Stivelse er bygd av glukose, mens cellulose er bygd av fruktose',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Stivelse har alfa-glykosidbindinger, mens cellulose har beta-glykosidbindinger',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Stivelse finnes i dyr, mens cellulose finnes i planter',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Stivelse er et lipid, mens cellulose er et karbohydrat',
          isCorrect: false,
        },
      ],
      solution:
        'Både stivelse og cellulose er polysakkarider bygd av glukose, men de har ulik type glykosidbinding. Stivelse har $\\alpha$-1,4-bindinger som menneskets fordøyelsesenzymer kan bryte, mens cellulose har $\\beta$-1,4-bindinger som krever enzymet cellulase, som mennesker mangler. Dette forklarer hvorfor vi kan fordøye stivelse, men ikke cellulose.',
      hints: ['Begge er polymerer av glukose, men bindingstypen er forskjellig.'],
    },
    {
      id: 'bio1-1-3-ex5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom mettede og umettede fettsyrer. Hvorfor er mettede fettsyrer faste ved romtemperatur, mens umettede fettsyrer er flytende?',
      solution:
        'Mettede fettsyrer har bare enkeltbindinger mellom karbonatomene, noe som gir rette kjeder som kan pakkes tett sammen. De sterke van der Waals-kreftene mellom de tettepakkede kjedene gjør at mettede fettsyrer er faste ved romtemperatur.\n\nUmettede fettsyrer har en eller flere dobbeltbindinger som skaper "knekk" (cis-konfigurasjon) i karbonkjeden. Disse knekkene hindrer kjedene i å pakkes tett sammen, noe som gir svakere intermolekylære krefter. Derfor er umettede fettsyrer flytende (oljer) ved romtemperatur.',
      hints: [
        'Tenk på hva dobbeltbindinger gjør med formen til karbonkjeden.',
        'Tenk på hvordan formen påvirker pakkingen av molekylene.',
      ],
    },
    {
      id: 'bio1-1-3-ex6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire nivåene av proteinstruktur. Hvilke typer bindinger og interaksjoner stabiliserer hvert nivå?',
      solution:
        '**Primærstruktur:** Rekkefølgen av aminosyrer i polypeptidkjeden. Stabiliseres av peptidbindinger (kovalente bindinger).\n\n**Sekundærstruktur:** Lokale foldingsmønstre som $\\alpha$-heliks og $\\beta$-flak. Stabiliseres av hydrogenbindinger mellom peptidbindinger i ryggraden.\n\n**Tertiærstruktur:** Den totale tredimensjonale formen til polypeptidet. Stabiliseres av hydrofobe interaksjoner, hydrogenbindinger mellom R-grupper, ionebindinger og disulfidbindinger.\n\n**Kvarterstruktur:** Sammensetningen av flere polypeptidkjeder (underenheter). Stabiliseres av de samme typene interaksjoner som i tertiærstruktur, men mellom ulike kjeder.',
      hints: [
        'Start med det enkleste nivået (rekkefølgen av aminosyrer) og bygg deg opp til det mest komplekse.',
      ],
    },
    {
      id: 'bio1-1-3-ex7',
      number: '7',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer med et enzym ved temperaturer langt over dets optimum?',
      options: [
        {
          id: 'a',
          text: 'Enzymet arbeider raskere og raskere',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Enzymet denatureres og mister sin funksjon',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Enzymet binder seg sterkere til substratet',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Enzymet brytes ned til aminosyrer',
          isCorrect: false,
        },
      ],
      solution:
        'Ved temperaturer langt over optimum denatureres enzymet: de svake bindingene som opprettholder enzymets tredimensjonale form (hydrogenbindinger, hydrofobe interaksjoner, ionebindinger) brytes. Det aktive setet endrer form og kan ikke lenger binde substratet. Merk at denaturering ikke er det samme som nedbrytning -- peptidbindingene er intakte, men den romlige strukturen er ødelagt.',
      hints: ['Tenk på hva som skjer med proteiners tredimensjonale form ved høy temperatur.'],
    },
    {
      id: 'bio1-1-3-ex8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom kompetitiv og ikke-kompetitiv enzymhemming. Hvordan kan man skille de to typene eksperimentelt?',
      solution:
        '**Kompetitiv hemming:** Inhibitoren binder seg til enzymets aktive sete og konkurrerer med substratet. Hemningen kan overvinnes ved å øke substratkonsentrasjonen. Ved høy nok substratkonsentrasjon oppnås samme V$_{\\text{max}}$ som uten inhibitor.\n\n**Ikke-kompetitiv hemming:** Inhibitoren binder seg til et allosterisk sete (et annet sted enn det aktive setet) og endrer enzymets form. Hemningen kan ikke overvinnes ved å øke substratkonsentrasjonen. V$_{\\text{max}}$ reduseres.\n\n**Eksperimentell test:** Mål reaksjonshastigheten ved ulike substratkonsentrasjoner med og uten inhibitor. Hvis økt substratkonsentrasjon overvinner hemningen (V$_{\\text{max}}$ er uendret), er hemningen kompetitiv. Hvis V$_{\\text{max}}$ reduseres uavhengig av substratkonsentrasjon, er hemningen ikke-kompetitiv.',
      hints: [
        'Tenk på hvor inhibitoren binder seg og hva som skjer når man øker mengden substrat.',
      ],
    },
    {
      id: 'bio1-1-3-ex9',
      number: '9',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken funksjon har fosfolipider i cellen?',
      options: [
        {
          id: 'a',
          text: 'Lagring av genetisk informasjon',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Grunnstruktur i cellemembranen',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Katalyse av kjemiske reaksjoner',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Transport av oksygen',
          isCorrect: false,
        },
      ],
      solution:
        'Fosfolipider danner grunnstrukturen i cellemembranen. De er amfipatiske (har et hydrofilt hode og hydrofobe haler) og danner spontant et dobbeltlag i vann. Dette dobbeltlaget utgjør en halvgjennomtrengelig barriere som omslutter cellen og regulerer transport inn og ut.',
      hints: ['Tenk på fosfolipidenes amfipatiske egenskaper.'],
    },
    {
      id: 'bio1-1-3-ex10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor karbon er så viktig for biologiske molekyler. Hva er det med karbons kjemiske egenskaper som gjør det egnet som grunnstoff i livets kjemi?',
      solution:
        'Karbon er helt sentralt for biologiske molekyler av flere grunner:\n\n1. **Fire valenselektroner:** Karbon kan danne fire kovalente bindinger, noe som gir enorm strukturell fleksibilitet.\n2. **Kjededannelse:** Karbon kan binde seg til andre karbonatomer og danne lange kjeder, forgrenede strukturer og ringer.\n3. **Bindingsmangfold:** Karbon kan danne enkelt-, dobbelt- og trippelbindinger, noe som gir varierte strukturer.\n4. **Bindinger med mange grunnstoffer:** Karbon binder seg lett til H, O, N, S og P -- alle viktige grunnstoffer i biologien.\n5. **Stabile bindinger:** C-C- og C-H-bindinger er stabile nok til å eksistere over tid, men ikke så sterke at de ikke kan brytes i biokjemiske reaksjoner.\n\nResultatet er et nesten uendelig antall mulige molekylstrukturer, som forklarer mangfoldet i biologiske molekyler.',
      hints: [
        'Tenk på karbons plass i periodesystemet og hvor mange bindinger det kan danne.',
        'Tenk på hva som gjør karbonkjeder så allsidige.',
      ],
    },
    {
      id: 'bio1-1-3-ex11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sigdcelleanemi skyldes en enkelt aminosyreendring i hemoglobinmolekylet: glutaminsyre (en hydrofil aminosyre) er byttet ut med valin (en hydrofob aminosyre) i posisjon 6 i $\\beta$-kjeden. Forklar hvordan denne ene endringen kan føre til at hele proteinet endrer form og funksjon.',
      solution:
        'Selv om endringen bare gjelder én aminosyre av totalt 146 i $\\beta$-kjeden, har den store konsekvenser:\n\n1. **Endret primærstruktur:** Aminosyresekvensen er endret i posisjon 6.\n2. **Endret overflatekarakter:** Glutaminsyre er polart og hydrofilt, mens valin er upolart og hydrofobt. Dette skaper et hydrofob "klebrig" område på hemoglobinets overflate.\n3. **Aggregering:** De hydrofobe valin-restene på ulike hemoglobinmolekyler tiltrekker hverandre og får hemoglobinmolekylene til å klumpe seg sammen i lange fibre.\n4. **Endret celleform:** Fibrene av hemoglobin tvinger de røde blodcellene inn i en sigdform (halvmåne) i stedet for den normale bikonkave diskformen.\n5. **Redusert funksjon:** Sigdcellene er stive, har redusert evne til å transportere oksygen og kan blokkere små blodkar.\n\nDette eksemplet viser hvordan primærstruktur bestemmer proteinets folding, form og funksjon -- og at selv en minimal endring kan ha dramatiske konsekvenser.',
      hints: [
        'Tenk på forskjellen mellom en hydrofil og en hydrofob aminosyre på proteinets overflate.',
        'Hva skjer når hydrofobe grupper eksponeres på overflaten av et protein i vandig løsning?',
      ],
    },
    {
      id: 'bio1-1-3-ex12',
      number: '12',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken påstand om nukleotider er korrekt?',
      options: [
        {
          id: 'a',
          text: 'En nukleotid består av en aminosyre, et sukker og en fosfatgruppe',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'En nukleotid består av en nitrogenbase, et pentosesukker og en fosfatgruppe',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'En nukleotid består av en fettsyre, glyserol og en fosfatgruppe',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'En nukleotid består av glukose, fruktose og en fosfatgruppe',
          isCorrect: false,
        },
      ],
      solution:
        'En nukleotid, som er monomeren i nukleinsyrer (DNA og RNA), består av tre komponenter: en nitrogenbase (A, T/U, G eller C), et pentosesukker (deoksyribose i DNA, ribose i RNA) og en fosfatgruppe. Nukleotidene kobles sammen via fosfodiesterbindinger mellom sukkermolekylene.',
      hints: ['Tenk på de tre komponentene i nukleinsyrenes byggestein.'],
    },
    {
      id: 'bio1-1-3-ex13',
      number: '13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en tabell som sammenligner de fire hovedgruppene makromolekyler med hensyn til: monomerer, type binding mellom monomerer, viktigste funksjoner, og ett konkret eksempel.',
      solution:
        '| Makromolekyl | Monomer | Binding | Viktigste funksjoner | Eksempel |\n|---|---|---|---|---|\n| **Karbohydrater** | Monosakkarider (f.eks. glukose) | Glykosidbinding | Energi, struktur | Stivelse, cellulose |\n| **Lipider** | Fettsyrer + glyserol (ikke ekte polymer) | Esterbinding | Energilagring, membraner, signalering | Triglyserider, fosfolipider |\n| **Proteiner** | Aminosyrer | Peptidbinding | Enzymer, struktur, transport, forsvar | Hemoglobin, kollagen |\n| **Nukleinsyrer** | Nukleotider | Fosfodiesterbinding | Informasjonslagring, informasjonsoverføring | DNA, RNA |\n\nMerk: Lipider er strengt tatt ikke polymerer av identiske monomerer, men de regnes likevel som en av de fire hovedgruppene biologiske makromolekyler.',
      hints: [
        'Bruk informasjonen fra hele kapittelet.',
        'Husk at lipider skiller seg fra de andre ved at de ikke er ekte polymerer.',
      ],
    },
    {
      id: 'bio1-1-3-ex14',
      number: '14',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar tre av vannets spesielle egenskaper og beskriv hvorfor hver av dem er viktig for livet.',
      solution:
        '**1. Høy spesifikk varmekapasitet:** Vann krever mye energi for å endres i temperatur. Dette stabiliserer kroppstemperaturen og klimaet nær store vannmasser. Uten denne egenskapen ville organismers indre temperatur svinge farlig mye.\n\n**2. Godt løsemiddel for polare stoffer:** Vannets polaritet gjør at det kan løse ioner og polare molekyler effektivt. Dette er essensielt for transport av næringsstoffer og avfallsstoffer i blodet, og for at biokjemiske reaksjoner skal skje i vandig løsning.\n\n**3. Høy fordampningsvarme:** Fordamping av vann (svetting) krever mye energi, noe som gir effektiv avkjøling. For mennesker og mange andre organismer er dette en viktig mekanisme for temperaturregulering.',
      hints: ['Tenk på hydrogenbindinger mellom vannmolekylene og hvordan de påvirker egenskapene.'],
    },
    {
      id: 'bio1-1-3-ex15',
      number: '15',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Et enzym har optimal pH ved 2,0 og finnes i et organ der pH er svært sur. Hvor i kroppen finnes dette enzymet mest sannsynlig, og hva kan det hete?',
      options: [
        {
          id: 'a',
          text: 'Tynntarmen -- trypsin',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Magesekken -- pepsin',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Spyttkjertlene -- amylase',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Leveren -- lipase',
          isCorrect: false,
        },
      ],
      solution:
        'Pepsin er et proteinspaltende enzym som finnes i magesekken. Magesaften har en pH rundt 1,5--3,5, som er svært sur. Pepsin har optimal aktivitet ved pH ca. 2,0, noe som er tilpasset det sure miljøet i magesekken. Trypsin har optimum ved ca. pH 8 (tynntarmen), amylase ved ca. pH 7 (munnen), og lipase ved ca. pH 8 (tynntarmen).',
      hints: [
        'Tenk på hvilke organer i fordøyelsessystemet som har svært sur pH.',
        'Magesaften inneholder saltsyre (HCl).',
      ],
    },
  ],
};

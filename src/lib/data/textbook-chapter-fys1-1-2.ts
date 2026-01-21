/**
 * Fysikk 1 - Kapittel 1.2: Modeller i fysikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_1_2: TextbookChapter = {
  id: 'fys1-1-2',
  courseId: 'fys1',
  chapterNumber: '1.2',
  title: 'Modeller i fysikk',
  description: 'Forstå hva fysiske modeller er, hvordan de brukes, og deres begrensninger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva en fysisk modell er og hvorfor vi bruker dem',
    'identifisere forenklinger og idealisering i modeller',
    'vurdere når modeller er gyldige og når de bryter sammen',
    'bruke modeller til å forklare og forutsi fysiske fenomener',
  ],
  content: [
    {
      id: 'fys1-1-2-intro',
      type: 'text',
      content: `# Modeller i fysikk

**Hva er en modell?**

En **fysisk modell** er en forenklet matematisk eller konseptuell beskrivelse av virkeligheten som brukes til å forstå, forklare og forutsi fysiske fenomener.

**Hvorfor trenger vi modeller?**

Virkeligheten er kompleks:
- Et fallende eple påvirkes av tyngdekraft, luftmotstand, vind, Jordens rotasjon, Månens tyngdekraft, osv.
- For å forstå bevegelsen må vi forenkle

**Nøkkelprinsipp:**
> "Alle modeller er feil, men noen er nyttige." — George Box

Dette betyr:
- Ingen modell er perfekt
- Men gode modeller gir verdifull innsikt
- Vi velger modell basert på hva vi vil forstå

## Hva kjennetegner en god modell?

**1. Forenklet, men ikke for enkel**
- Fanger essensen av fenomenet
- Ignorerer irrelevante detaljer

**2. Prediktiv**
- Kan forutsi hva som vil skje
- Kan testes eksperimentelt

**3. Generell**
- Gjelder for mange situasjoner
- Ikke bare én spesifikk situasjon

**4. Matematisk formulerbar**
- Uttrykkes som ligninger
- Tillater kvantitative prediksjoner

**5. Vet sine grenser**
- Vi vet når modellen er gyldig
- Vi vet når modellen bryter sammen

## Nivåer av modeller

Fysikere bruker modeller på forskjellige "oppløsningsnivåer":

**Makroskopisk nivå:**
- Store objekter (baller, biler, planeter)
- Newtons lover

**Mikroskopisk nivå:**
- Atomer og molekyler
- Statistisk mekanikk

**Subatomært nivå:**
- Elektroner, protoner, neutroner
- Kvantemekanikk

**Partikkelnivå:**
- Kvarker, leptoner
- Partikkelfysikk

Hvilket nivå vi velger avhenger av hva vi vil forstå.`,
    },
    {
      id: 'fys1-1-2-def-modell',
      type: 'definition',
      title: 'Fysisk modell',
      content: 'En forenklet matematisk eller konseptuell beskrivelse av virkeligheten som fanger essensen av et fysisk fenomen, men ignorerer irrelevante detaljer. Modellen skal være testbar, prediktiv, og ha kjente gyldighetsgrenser.',
    },
    {
      id: 'fys1-1-2-idealisering',
      type: 'text',
      content: `# Forenklinger og idealisering

For å lage nyttige modeller må vi gjøre forenklinger. Dette kalles **idealisering**.

## Vanlige idealiseringer i fysikk

### 1. Punktmasse

**Definisjon:** Et objekt behandles som om all massen er konsentrert i ett punkt.

**Når brukes det:**
- Objektets størrelse er neglisjerbar sammenlignet med avstander
- Rotasjon er ikke viktig

**Eksempler:**
- Jorda som punktmasse i bane rundt Sola (Jordens radius ≈ 6400 km, avstand til Sola ≈ 150 millioner km)
- En ball i fritt fall (når vi ikke bryr oss om rotasjon)

**Når bryter det sammen:**
- Når størrelsen eller formen er viktig
- Når rotasjon må medregnes
- Eksempel: En spinnende fotball

### 2. Stiv kropp

**Definisjon:** Et objekt som ikke deformeres (endrer form) under påvirkning av krefter.

**Når brukes det:**
- Deformasjon er neglisjerbar
- Vi er interessert i objektets bevegelse som helhet

**Eksempler:**
- En ball som spretter (i første tilnærming)
- En stige som lener mot en vegg

**Når bryter det sammen:**
- Når deformasjon er viktig
- Eksempel: En ball som klemmes, en bilkollisjon

### 3. Friksjonsfri overflate

**Definisjon:** Overflater uten friksjon (glidemotstand).

**Når brukes det:**
- Friksjon er liten sammenlignet med andre krefter
- Vi vil forstå prinsippet uten komplikasjoner

**Eksempler:**
- Isbane (nesten friksjonsfri)
- Luftpute (svever på luftpute)
- Teoretiske eksempler for å forstå bevegelse

**Når bryter det sammen:**
- Når friksjon er betydelig
- Eksempel: Bil på vei, klatring

### 4. Masseløs tau eller stang

**Definisjon:** Tau eller stang uten masse.

**Når brukes det:**
- Massen til tau/stang er neglisjerbar sammenlignet med objektene den forbinder
- Vi vil forenkle kraftanalyse

**Eksempler:**
- Tau i talje (masse av tau << masse av last)
- Stang i enkle maskinleveranser

**Når bryter det sammen:**
- Når massen til tau/stang er betydelig
- Når vi studerer bølger i tau

### 5. Inelastisk og elastisk kollisjon

**Inelastisk kollisjon:**
- Objekter kleber sammen etter kollisjon
- Kinetisk energi bevares IKKE
- Bevegelsesmengde bevares

**Perfekt elastisk kollisjon:**
- Objekter spretter fra hverandre
- Kinetisk energi bevares
- Bevegelsesmengde bevares

**Virkelighet:**
- De fleste kollisjoner er mellom disse ytterpunktene
- Vi velger modell basert på hva som er viktig

### 6. Ingen luftmotstand

**Definisjon:** Objekter beveger seg i vakuum (ingen luft).

**Når brukes det:**
- Luftmotstanden er neglisjerbar
- Objektet er tungt og kompakt
- Hastigheten er lav

**Eksempler:**
- En metallkule som faller (lav hastighet)
- Bevegelse i verdensrommet

**Når bryter det sammen:**
- Lettere objekter (fjær)
- Høye hastigheter (fallskjermhopper)
- Lange avstander

### 7. Konstant tyngdeakselerasjon

**Definisjon:** $g = 9.81$ m/s² overalt.

**Når brukes det:**
- Nær jordoverflaten
- Små høydeforskjeller (< 1 km)

**Virkelighet:**
- $g$ varierer med høyde: $g = \\frac{GM}{r^2}$
- $g$ varierer med breddegrad (Jordens rotasjon)

**Når bryter det sammen:**
- Store høyder (f.eks. satellitter)
- Meget presise målinger

### 8. Ideell gass

**Definisjon:** Gass der:
- Molekyler har neglisjerbar volum
- Ingen intermolekylære krefter (utenom kollisjoner)
- Perfekt elastiske kollisjoner

**Når brukes det:**
- Lave trykk
- Høye temperaturer

**Virkelighet:**
- Ekte gasser har volum og krefter mellom molekyler
- Van der Waals-ligning korrigerer for dette

**Når bryter det sammen:**
- Høye trykk (molekyler nær hverandre)
- Lave temperaturer (nær kondensering)`,
    },
    {
      id: 'fys1-1-2-ex-punktmasse',
      type: 'example',
      title: 'Når er punktmasse-modellen gyldig?',
      problem: 'Vurdér om punktmasse-modellen er passende for følgende situasjoner: (a) Jorda i bane rundt Sola, (b) En spinnende fotball, (c) En tenni sball i fritt fall (uten luftmotstand), (d) En bil som svinger rundt et hjørne.',
      solution: `**a) Jorda i bane rundt Sola**

**Vurdering: JA, punktmasse er passende.**

**Begrunnelse:**
- **Størrelse:** Jordens radius ≈ 6400 km
- **Avstand til Sola:** ≈ 150 millioner km
- **Forhold:** $\\frac{6400}{150\\,000\\,000} \\approx 0.00004 = 0.004\\%$

Jordens størrelse er neglisjerbar sammenlignet med baneradius.

- **Rotasjon:** Jordens egen rotasjon påvirker ikke banebevegelsen rundt Sola
- **Konklusjon:** Vi kan trygt behandle Jorda som en punktmasse for å beskrive banen

**Resultat:** Newtons gravitasjonslov med punktmasser gir excellent beskrivelse av planetbanene.

---

**b) En spinnende fotball**

**Vurdering: NEI, punktmasse er IKKE passende.**

**Begrunnelse:**
- **Rotasjon er viktig:** Spinnen påvirker luftmotstanden (Magnus-effekt)
- **Eksempel:** En spinnende ball kurver i luften
- **Størrelse:** Ballens utstrekning og rotasjon er essensielt for å forklare bevegelsen

**Konklusjon:** Vi trenger en modell som tar hensyn til rotasjon og utstrekning.

**Bedre modell:** Stiv kropp med rotasjon + aerodynamikk.

---

**c) En tennisball i fritt fall (uten luftmotstand)**

**Vurdering: JA, punktmasse er passende.**

**Begrunnelse:**
- **Ingen luftmotstand:** Vi ignorerer luften helt
- **Rotasjon:** Hvis vi ikke bryr oss om spinnen, spiller den ingen rolle for fallet
- **Størrelse:** Ballens størrelse er neglisjerbar for tyngdekraften

**Konklusjon:** For å beskrive fallbevegelsen (posisjon, hastighet, akselerasjon) er punktmasse perfekt.

**Formel:** $s = \\frac{1}{2}gt^2$ gjelder uansett ballens størrelse.

---

**d) En bil som svinger rundt et hjørne**

**Vurdering: AVHENGER av hva vi vil forstå.**

**Scenario 1: Banebevegelse i kurven**
- Hvis vi kun vil vite bilens bane og hastighet:
- **JA, punktmasse kan brukes**
- Bilens størrelse er neglisjerbar sammenlignet med kurvens radius

**Scenario 2: Risiko for velting**
- Hvis vi vil vite om bilen velter:
- **NEI, punktmasse er IKKE passende**
- Bilens høyde og bredde er essensielt
- Tyngdepunktet og hjulenes posisjon er viktige

**Konklusjon:**
- For enkel banebevegelse: Punktmasse OK
- For stabilitet og velting: Trenger utstrekning og form

**GENERELL REGEL:**
Punktmasse er passende når:
1. Objektets størrelse << relevante avstander
2. Rotasjon er ikke viktig
3. Deformasjon er ikke viktig`,
    },
    {
      id: 'fys1-1-2-modeller-eksempler',
      type: 'text',
      content: `# Eksempler på fysiske modeller

## 1. Fritt fall (uten luftmotstand)

**Modell:**
- Objekt i fritt fall
- Kun tyngdekraft virker
- Ingen luftmotstand
- Konstant $g = 9.81$ m/s²

**Ligninger:**
$$v = v_0 + gt$$
$$s = v_0 t + \\frac{1}{2}gt^2$$

**Forenklinger:**
- Ingen luftmotstand
- Konstant $g$
- Punktmasse

**Gyldig når:**
- Tunge, kompakte objekter
- Lave hastigheter
- Korte avstander

**Bryter sammen når:**
- Lette objekter (fjær)
- Høye hastigheter
- Lange avstander

---

## 2. Harmonisk oscillator

**Modell:**
- Masse på fjær
- Fjærkraft: $F = -kx$
- Ingen friksjon
- Ingen dempning

**Likning:**
$$x(t) = A \\cos(\\omega t + \\phi)$$

der $\\omega = \\sqrt{\\frac{k}{m}}$

**Forenklinger:**
- Ideell fjær (følger Hookes lov perfekt)
- Ingen friksjon
- Ingen dempning

**Gyldig når:**
- Små amplituder
- Liten friksjon
- Kort tidsperiode

**Bryter sammen når:**
- Store amplituder (fjær mister elastisitet)
- Betydelig friksjon
- Lange tidsperioder (dempning viktig)

---

## 3. Ideell gaslov

**Modell:**
- Gass består av punktpartikler
- Ingen intermolekylære krefter
- Perfekt elastiske kollisjoner

**Likning:**
$$PV = nRT$$

**Forenklinger:**
- Molekyler har neglisjerbart volum
- Ingen tiltrekningskrefter
- Ingen frastøtningskrefter (utenom kollisjoner)

**Gyldig når:**
- Lave trykk
- Høye temperaturer
- Enkle gasser (H₂, He)

**Bryter sammen når:**
- Høye trykk (molekyler nær hverandre)
- Lave temperaturer (nær kondensering)
- Komplekse molekyler

---

## 4. Punktladning

**Modell:**
- Elektrisk ladning konsentrert i ett punkt
- Coulombs lov: $F = k\\frac{q_1 q_2}{r^2}$

**Forenklinger:**
- Ladningen har ingen utstrekning
- Kun elektrostatikk (ingen magnetfelt)

**Gyldig når:**
- Avstander >> størrelse på ladede objekter
- Statiske (ikke bevegelige) ladninger

**Bryter sammen når:**
- Avstander sammenlignbare med størrelse
- Høye hastigheter (magnetfelt viktig)

---

## 5. Newtonsk mekanikk

**Modell:**
- Absolutt tid og rom
- $F = ma$
- Hastigheter << lysets hastighet

**Forenklinger:**
- Ingen relativistiske effekter
- Deterministisk (ikke kvante)

**Gyldig når:**
- Hastigheter << $c$
- Store objekter (ikke atomer)
- Svake gravitasjonsfelt

**Bryter sammen når:**
- Høye hastigheter (nær $c$) → Relativitetsteori
- Små objekter (atomer) → Kvantemekanikk
- Sterke gravitasjonsfelt → Generell relativitetsteori`,
    },
    {
      id: 'fys1-1-2-gyldighet',
      type: 'text',
      content: `# Gyldighetsområde for modeller

Alle fysiske modeller har et **gyldighetsområde** - et sett av betingelser der modellen gir gode prediksjoner.

## Hvordan identifisere gyldighetsområdet?

**1. Vurdér forenklinger**
- Hvilke forenklinger er gjort?
- Når er disse forenklinger rimelige?

**2. Test eksperimentelt**
- Sammenlign modellens prediksjoner med eksperimenter
- Finn grensene der avviket blir stort

**3. Dimensjonsanalyse**
- Sammenlign relevante størrelser
- Eksempel: Er luftmotstand $F_d$ stor sammenlignet med tyngdekraft $mg$?

## Eksempel: Fritt fall

**Modell:** $s = \\frac{1}{2}gt^2$ (ingen luftmotstand)

**Vurdér:** Når er luftmotstanden neglisjerbar?

**Luftmotstand:**
$$F_d = \\frac{1}{2} C_d \\rho A v^2$$

der:
- $C_d$ = luftmotstandskoeffisient
- $\\rho$ = luftens tetthet
- $A$ = tverrsnittareal
- $v$ = hastighet

**Tyngdekraft:**
$$F_g = mg$$

**Forhold:**
$$\\frac{F_d}{F_g} = \\frac{\\frac{1}{2} C_d \\rho A v^2}{mg} = \\frac{C_d \\rho A v^2}{2mg}$$

**Analyse:**

**Luftmotstand neglisjerbar hvis:**
$$\\frac{F_d}{F_g} << 1$$

Dette gjelder når:
- **Tung, kompakt objekt** (stort $m$, lite $A$)
- **Lav hastighet** (lite $v$)

**Eksempel 1: Metallkule**
- $m = 1$ kg, $A = 0.001$ m² (radius 2 cm)
- $v = 10$ m/s
- $\\frac{F_d}{F_g} \\approx \\frac{0.4 \\times 1.2 \\times 0.001 \\times 100}{2 \\times 1 \\times 9.81} \\approx 0.002$
- **Luftmotstand neglisjerbar!**

**Eksempel 2: Fjær**
- $m = 0.001$ kg, $A = 0.01$ m²
- $v = 10$ m/s
- $\\frac{F_d}{F_g} \\approx \\frac{0.4 \\times 1.2 \\times 0.01 \\times 100}{2 \\times 0.001 \\times 9.81} \\approx 24$
- **Luftmotstand dominerer!**

## Hva gjør vi når modellen bryter sammen?

**Alternativ 1: Forbedre modellen**
- Legg til forsømte effekter
- Eksempel: Inkludér luftmotstand i fallmodellen

**Alternativ 2: Bruk annen modell**
- Velg en mer passende modell for situasjonen
- Eksempel: Bruk relativitetsteori for høye hastigheter

**Alternativ 3: Begrens anvendelsen**
- Bruk modellen kun innenfor gyldighetsområdet
- Eksempel: Newtons lover kun for $v << c$`,
    },
    {
      id: 'fys1-1-2-note-alle-feil',
      type: 'note',
      title: 'Alle modeller er forenklinger',
      content: `**Viktig innsikt:**

Selv våre beste fysiske teorier er modeller:
- **Newtons mekanikk:** Fungerer utmerket for hverdagslige hastigheter, men er egentlig en tilnærming av relativitetsteori
- **Relativitetsteori:** Fungerer utmerket for store objekter, men ignorerer kvante-effekter
- **Kvantemekanikk:** Fungerer utmerket for små objekter, men ignorerer tyngdekraft
- **Standardmodellen:** Fungerer utmerket for partikler, men inkluderer ikke tyngdekraft

**Poenget:**
Fysikk handler ikke om å finne "sannheten", men om å lage stadig bedre modeller som gir stadig mer presise prediksjoner.

**Praktisk tilnærming:**
Velg den enkleste modellen som gir tilstrekkelig nøyaktighet for ditt formål.`,
    },
    {
      id: 'fys1-1-2-ex-luftmotstand',
      type: 'example',
      title: 'Når må vi inkludere luftmotstand?',
      problem: 'En ball slippes fra 10 m høyde. Vurdér om vi kan neglisjere luftmotstanden for (a) en metallkule med masse 100 g og radius 2 cm, (b) en tennisball med masse 60 g og radius 3.5 cm.',
      solution: `**Gitt:**
- Fallhøyde: $h = 10$ m
- Luftens tetthet: $\\rho = 1.2$ kg/m³
- Luftmotstandskoeffisient (kule): $C_d \\approx 0.5$

**Hastighet ved bakken (uten luftmotstand):**
$$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.81 \\times 10} = 14.0 \\text{ m/s}$$

---

**a) Metallkule (m = 0.1 kg, r = 0.02 m)**

**Tverrsnittareal:**
$$A = \\pi r^2 = \\pi \\times 0.02^2 = 0.00126 \\text{ m}^2$$

**Luftmotstand ved v = 14 m/s:**
$$F_d = \\frac{1}{2} C_d \\rho A v^2 = \\frac{1}{2} \\times 0.5 \\times 1.2 \\times 0.00126 \\times 14^2 = 0.074 \\text{ N}$$

**Tyngdekraft:**
$$F_g = mg = 0.1 \\times 9.81 = 0.98 \\text{ N}$$

**Forhold:**
$$\\frac{F_d}{F_g} = \\frac{0.074}{0.98} = 0.076 = 7.6\\%$$

**Konklusjon:** Luftmotstanden er ca. 8% av tyngdekraften. Dette er relativt lite.

**Vurdering:** For de fleste formål kan vi neglisjere luftmotstanden. Feilen i slutthastighetsbere gningen vil være i størrelsesorden 5%.

---

**b) Tennisball (m = 0.06 kg, r = 0.035 m)**

**Tverrsnittareal:**
$$A = \\pi r^2 = \\pi \\times 0.035^2 = 0.00385 \\text{ m}^2$$

**Luftmotstand ved v = 14 m/s:**
$$F_d = \\frac{1}{2} C_d \\rho A v^2 = \\frac{1}{2} \\times 0.5 \\times 1.2 \\times 0.00385 \\times 14^2 = 0.226 \\text{ N}$$

**Tyngdekraft:**
$$F_g = mg = 0.06 \\times 9.81 = 0.59 \\text{ N}$$

**Forhold:**
$$\\frac{F_d}{F_g} = \\frac{0.226}{0.59} = 0.38 = 38\\%$$

**Konklusjon:** Luftmotstanden er ca. 38% av tyngdekraften. Dette er betydelig!

**Vurdering:** Luftmotstanden kan IKKE neglisjeres. Den vil redusere slutthastigheten merkbart.

**Korrekt modell:**
Vi trenger å inkludere luftmotstand:
$$m\\frac{dv}{dt} = mg - \\frac{1}{2}C_d \\rho A v^2$$

Dette er en differensialligning som må løses numerisk (se neste kapittel).

---

**SAMMENLIGNING:**

| Objekt | Masse (kg) | Radius (m) | $A$ (m²) | $F_d/F_g$ | Neglisjere luftmotstand? |
|--------|-----------|------------|---------|-----------|-------------------------|
| Metallkule | 0.1 | 0.02 | 0.00126 | 7.6% | JA (for de fleste formål) |
| Tennisball | 0.06 | 0.035 | 0.00385 | 38% | NEI |

**Generell regel:**
- **Tette, kompakte objekter:** Luftmotstand ofte neglisjerbar
- **Lette, store objekter:** Luftmotstand betydelig

**Fysisk intuisjon:**
- Metallkule: Høy masse, lite areal → stor $m/A$ → liten luftmotstand
- Tennisball: Lav masse, stort areal → liten $m/A$ → stor luftmotstand`,
    },
    {
      id: 'fys1-1-2-warning-overforenkling',
      type: 'warning',
      title: 'Fare for overforenkling',
      content: `**Advarsel:** Alle modeller forenkler, men vær forsiktig med å forenkle for mye!

**Røde flagg:**
- **Resultater stemmer ikke med eksperimenter:** Kanskje du har forsømt en viktig effekt
- **Modellen gir urealistiske prediksjoner:** Sjekk forutsetningene
- **Fysisk intuisjon sier noe annet:** Stol på intuisjonen din

**Eksempel på overforenkling:**
En bil bremser ned en bakke. Hvis vi neglisjerer friksjon helt, vil bilen ikke stoppe (åpenbart feil!). Friksjon er essensielt i denne situasjonen.

**Hvordan unngå:**
1. **Identifiser alle krefter/effekter**
2. **Vurdér størrelse på hver effekt**
3. **Forsøm kun små effekter**
4. **Test modellen eksperimentelt**`,
    },
  ],
  exercises: [
    {
      id: 'fys1-1-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er en fysisk modell? Hvorfor bruker fysikere modeller i stedet for å beskrive virkeligheten helt nøyaktig?',
      solution: `**Hva er en fysisk modell?**

En **fysisk modell** er en forenklet matematisk eller konseptuell beskrivelse av virkeligheten som:
- Fanger essensen av et fysisk fenomen
- Ignorerer irrelevante detaljer
- Kan brukes til å forstå, forklare og forutsi

**Kjennetegn:**
- **Forenklet:** Ikke alle detaljer medtas
- **Matematisk:** Uttrykkes som ligninger
- **Testbar:** Kan testes eksperimentelt
- **Prediktiv:** Kan forutsi hva som vil skje
- **Gyldig innenfor et område:** Vet når modellen fungerer og når den bryter sammen

---

**Hvorfor bruker vi modeller?**

**1. Virkeligheten er for kompleks**

**Eksempel:** Et fallende eple påvirkes av:
- Tyngdekraft fra Jorda
- Luftmotstand
- Vind
- Jordens rotasjon (Coriolis-kraft)
- Månens tyngdekraft
- Solas tyngdekraft
- Relativistiske effekter
- Kvante-effekter

For å forstå fallet trenger vi ikke alle disse effektene!

**Løsning:** Lage en enkel modell som kun inkluderer tyngdekraft.

---

**2. Vi kan ikke vite alt**

Selv om vi ville, kunne vi ikke måle:
- Nøyaktig posisjon til hvert luftmolekyl
- Alle små vibrasjoner i eplet
- Alle små temperaturvariasjoner

**Løsning:** Fokuser på det vi kan måle og det som er viktig.

---

**3. Forenklinger gir innsikt**

En enkel modell gjør det lettere å:
- **Forstå essensen:** Hva er den viktigste faktoren?
- **Kommunisere:** Dele ideer med andre
- **Undervise:** Lære studenter

**Eksempel:** $F = ma$ er utrolig kraftfull nettopp fordi den er så enkel!

---

**4. Prediksjoner er mulige**

Med en enkel, matematisk modell kan vi:
- **Beregne:** Hva vil skje i en ny situasjon?
- **Design:** Hvordan bygge en bro, rakett, eller elektronikk?
- **Optimalisere:** Hva er den beste løsningen?

**Eksempel:** Newtons lover lar oss beregne planetbaner, designe romfartøy, og forutsi formørkelser.

---

**5. Ressurser er begrensede**

Å inkludere alle detaljer ville kreve:
- Enorme datamaskiner
- Ekstrem tid
- Enorm innsats

**Løsning:** Bruk den enkleste modellen som gir tilstrekkelig nøyaktighet.

---

**SITAT:**
> "Å gjøre ting så enkle som mulig, men ikke enklere." — Albert Einstein

**Poenget:**
- Vi forenkler så mye som mulig
- Men vi forsømmer ikke essensielle effekter
- Vi velger riktig nivå av kompleksitet for problemet

---

**ANALOGI: Kart**

Et **kart** er en modell av virkeligheten:
- Et veikart viser veier, men ikke hver stein og tre
- Et topografisk kart viser høyder, men ikke hver bygning
- Et metrokart viser linjer, men ikke nøyaktige avstander

**Poenget:**
- Vi velger kart (modell) basert på hva vi trenger
- Ingen kart er perfekt, men de er nyttige
- "Kartet er ikke terrenget" — Alfred Korzybski

På samme måte:
- **Modellen er ikke virkeligheten**
- Men den er nyttig for å navigere i virkeligheten`,
      hints: ['Tenk på kompleksitet', 'Tenk på innsikt', 'Eksempel: kart'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva betyr det å behandle et objekt som en punktmasse? Gi to eksempler der dette er passende og to eksempler der det ikke er passende.',
      solution: `**Punktmasse-modellen:**

**Definisjon:**
Å behandle et objekt som en punktmasse betyr at:
- All massen antas å være konsentrert i ett enkelt punkt
- Objektet har ingen utstrekning (størrelse)
- Objektets form og rotasjon ignoreres

**Matematisk:**
- Objektet beskrives kun ved sin posisjon $\\vec{r}(t)$ og masse $m$
- Newtons 2. lov: $\\vec{F} = m\\vec{a}$

---

**EKSEMPLER DER PUNKTMASSE ER PASSENDE:**

**1. Jorda i bane rundt Sola**

**Hvorfor passende:**
- Jordens radius: 6400 km
- Avstand til Sola: 150 millioner km
- Forhold: $\\frac{6400}{150\\,000\\,000} \\approx 0.000043 = 0.0043\\%$

Jordens størrelse er **neglisjerbar** sammenlignet med baneradius.

**Resultat:**
- Vi kan beregne Jordens bane nøyaktig ved å behandle den som en punktmasse
- Newtons gravitasjonslov: $F = \\frac{GMm}{r^2}$

**2. En steinkule som faller fra 10 m høyde**

**Hvorfor passende:**
- Vi er interessert i fallbevegelsen (vertikal posisjon og hastighet)
- Kulens størrelse (f.eks. 5 cm) er neglisjerbar sammenlignet med fallhøyden (10 m)
- Vi bryr oss ikke om kula roterer eller ikke

**Resultat:**
- Vi kan bruke $s = \\frac{1}{2}gt^2$ uten å tenke på størrelse
- Samme formel gjelder for en stor eller liten kule

---

**EKSEMPLER DER PUNKTMASSE IKKE ER PASSENDE:**

**1. En spinnende fotball i luften**

**Hvorfor IKKE passende:**
- **Spin er viktig:** Spinnen får ballen til å kurve (Magnus-effekt)
- **Størrelse og form er viktig:** Luftmotstanden avhenger av ballens overflate
- **Rotasjonshastighet er viktig:** Kurven avhenger av hvor raskt ballen spinner

**Hva trenger vi:**
- Modell som inkluderer rotasjon og aerodynamikk
- Stiv kropp med rotasjon

**2. En bil som risikerer å velte i en kurve**

**Hvorfor IKKE passende:**
- **Tyngdepunktets høyde er viktig:** Jo høyere tyngdepunkt, jo lettere å velte
- **Hjulenes posisjon er viktig:** Avstand mellom hjulene påvirker stabilitet
- **Bilens bredde og lengde er viktig:** For å beregne momentene

**Hva trenger vi:**
- Modell som inkluderer bilens utstrekning og tyngdepunktets posisjon
- Stiv kropp med momentlære

---

**GENERELL REGEL:**

**Punktmasse ER passende når:**
1. Objektets størrelse << relevante avstander
2. Vi ikke bryr oss om rotasjon
3. Vi kun vil vite posisjon, hastighet, og akselerasjon av massesenter

**Punktmasse er IKKE passende når:**
1. Objektets størrelse er sammenlignbar med relevante avstander
2. Rotasjon er viktig
3. Stabilitet, velting, eller form er viktig

---

**FLERE EKSEMPLER:**

**Passende:**
- Satellitt i bane rundt Jorda
- Prosjektil (kanonkule) uten rotasjon
- Planets bane rundt en stjerne
- Molekyl i gass (for termodynamikk)

**Ikke passende:**
- Fotballspiller som skrur ballen
- Satellitt som roterer (hvis vi vil studere rotasjonen)
- Stol som tipper
- Bil som kolliderer (deformasjon viktig)`,
      hints: ['Tenk på størrelse vs. avstand', 'Tenk på rotasjon', 'Sammenlign med relevante lengdeskalaer'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Modellen for fritt fall uten luftmotstand sier at alle objekter faller like raskt. Men i virkeligheten faller en fjær langsommere enn en stein. Forklar hvorfor modellen bryter sammen for en fjær, men ikke for en stein.',
      solution: `**Modellen for fritt fall (uten luftmotstand):**

**Antakelser:**
1. Kun tyngdekraft virker: $F = mg$
2. Ingen luftmotstand
3. Konstant $g = 9.81$ m/s²

**Prediksjon:**
Alle objekter faller med samme akselerasjon $a = g$, uavhengig av masse.

**Formel:**
$$s = \\frac{1}{2}gt^2$$

**Konklusjon:** En fjær og en stein slipt fra samme høyde skulle treffe bakken samtidig.

---

**VIRKELIGHET: Fjæren faller langsommere!**

**Årsak:** **Luftmotstand**

---

**LUFTMOTSTAND:**

**Formel:**
$$F_d = \\frac{1}{2} C_d \\rho A v^2$$

der:
- $C_d$ = luftmotstandskoeffisient (avhenger av form)
- $\\rho$ = luftens tetthet (ca. 1.2 kg/m³)
- $A$ = tverrsnittareal (arealet som treffer luften)
- $v$ = hastighet

**Observasjon:** Luftmotstanden øker med $v^2$ (kvadratisk).

---

**ANALYSE: Stein vs. Fjær**

**For et fallende objekt:**

**Tyngdekraft:** $F_g = mg$ (nedover)
**Luftmotstand:** $F_d = \\frac{1}{2} C_d \\rho A v^2$ (oppover)

**Netto kraft:**
$$F_{\\text{netto}} = mg - \\frac{1}{2} C_d \\rho A v^2$$

**Akselerasjon:**
$$a = g - \\frac{C_d \\rho A v^2}{2m}$$

**Observasjon:** Luftmotstanden reduserer akselerasjonen!

---

**STEIN (kompakt, tung):**

**Egenskaper:**
- Høy masse: $m$ = 0.5 kg
- Lite areal: $A$ = 0.001 m² (radius ca. 2 cm)
- Høy tetthet
- Forhold: $\\frac{m}{A}$ = 500 kg/m²

**Ved v = 10 m/s:**

**Luftmotstand:**
$$F_d = \\frac{1}{2} \\times 0.5 \\times 1.2 \\times 0.001 \\times 100 = 0.03 \\text{ N}$$

**Tyngdekraft:**
$$F_g = 0.5 \\times 9.81 = 4.9 \\text{ N}$$

**Forhold:**
$$\\frac{F_d}{F_g} = \\frac{0.03}{4.9} = 0.006 = 0.6\\%$$

**Konklusjon:** Luftmotstanden er **neglisjerbar** (< 1%). Modellen fungerer utmerket!

---

**FJÆR (stor, lett):**

**Egenskaper:**
- Lav masse: $m$ = 0.002 kg (2 gram)
- Stort areal: $A$ = 0.002 m² (bred og flat)
- Lav tetthet
- Forhold: $\\frac{m}{A}$ = 1 kg/m²

**Ved v = 1 m/s:**

**Luftmotstand:**
$$F_d = \\frac{1}{2} \\times 1.0 \\times 1.2 \\times 0.002 \\times 1 = 0.0012 \\text{ N}$$

**Tyngdekraft:**
$$F_g = 0.002 \\times 9.81 = 0.020 \\text{ N}$$

**Forhold:**
$$\\frac{F_d}{F_g} = \\frac{0.0012}{0.020} = 0.06 = 6\\%$$

Allerede ved lav hastighet er luftmotstanden betydelig!

**Ved v = 2 m/s:**
$$F_d = 0.0048 \\text{ N}$$
$$\\frac{F_d}{F_g} = \\frac{0.0048}{0.020} = 0.24 = 24\\%$$

**Konklusjon:** Luftmotstanden er **meget betydelig** (24%). Modellen fungerer IKKE!

---

**TERMINALHASTIGHET:**

Når luftmotstanden blir like stor som tyngdekraften, slutter objektet å akselerere.

**Balanse:**
$$mg = \\frac{1}{2} C_d \\rho A v_{\\text{terminal}}^2$$

**Løs for $v_{\\text{terminal}}$:**
$$v_{\\text{terminal}} = \\sqrt{\\frac{2mg}{C_d \\rho A}}$$

**For stein:**
$$v_{\\text{terminal}} = \\sqrt{\\frac{2 \\times 0.5 \\times 9.81}{0.5 \\times 1.2 \\times 0.001}} \\approx 180 \\text{ m/s}$$

Steinen når aldri terminalhastigheteni normale fall!

**For fjær:**
$$v_{\\text{terminal}} = \\sqrt{\\frac{2 \\times 0.002 \\times 9.81}{1.0 \\times 1.2 \\times 0.002}} \\approx 2.6 \\text{ m/s}$$

Fjæren når terminalhastigheten raskt og flyter sakte ned.

---

**HVORFOR BRYTER MODELLEN SAMMEN?**

**Modellens antakelse:** Ingen luftmotstand ($F_d = 0$)

**For stein:**
- Antakelsen er OK fordi $F_d << F_g$
- Modellen gir gode prediksjoner

**For fjær:**
- Antakelsen er FEIL fordi $F_d \\approx F_g$
- Modellen gir dårlige prediksjoner

**NØKKELFAKTOR: $\\frac{m}{A}$ (masse per areal)**
- Høy $\\frac{m}{A}$: Luftmotstand neglisjerbar → Modell OK
- Lav $\\frac{m}{A}$: Luftmotstand betydelig → Modell bryter sammen

---

**KONKLUSJON:**

**Modellen for fritt fall er gyldig når:**
$$\\frac{F_d}{F_g} = \\frac{C_d \\rho A v^2}{2mg} << 1$$

Dette gjelder når:
- **Tung, kompakt objekt** (høy $m/A$)
- **Lav hastighet** (lite $v$)

**Fjær:** Lav $m/A$ → Modellen bryter sammen
**Stein:** Høy $m/A$ → Modellen fungerer`,
      hints: ['Tenk på luftmotstand', 'Sammenlign masse og areal', 'Hva er forholdet F_d/F_g?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom en perfekt elastisk og en perfekt inelastisk kollisjon. Hvilke størrelser bevares i hver type kollisjon? Gi eksempler på situasjoner som tilnærmet følger hver modell.',
      solution: `**KOLLISJONSMODELLER:**

I virkeligheten er kollisjoner komplekse, men vi bruker to idealiserte modeller:

---

**1. PERFEKT ELASTISK KOLLISJON**

**Definisjon:**
En kollisjon der:
- **Bevegelsesmengde bevares**
- **Kinetisk energi bevares**
- Ingen energi omdannes til varme eller deformasjon

**Bevaringslover:**

**Bevegelsesmengde:**
$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

**Kinetisk energi:**
$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$

der $i$ = initial (før), $f$ = final (etter).

**Fysisk:**
- Objektene spretter fra hverandre
- Ingen energitap
- Perfekt "sprett"

**Eksempler (tilnærmet elastisk):**

**1. Biljardkuler:**
- Harde sfærer
- Minimal deformasjon
- Nesten ingen energitap
- Meget god tilnærming

**2. Stålkuler:**
- Meget stive
- Spretter godt fra hverandre
- God tilnærming

**3. Atomkollisjoner i gass:**
- Ved lave energier er atomkollisjoner nesten perfekt elastiske
- God modell for ideell gass

**4. Kollisjon i verdensrommet:**
- To satellitter som kolliderer (meget sjelden, men teoretisk)
- Ingen friksjon, ingen luftmotstand

---

**2. PERFEKT INELASTISK KOLLISJON**

**Definisjon:**
En kollisjon der:
- **Bevegelsesmengde bevares**
- **Kinetisk energi bevares IKKE**
- Objektene kleber sammen etter kollisjonen
- Maksimalt energitap

**Bevaringslover:**

**Bevegelsesmengde:**
$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f$$

der $v_f$ er den felles slutthastigheten.

**Kinetisk energi:**
$$E_{k,i} > E_{k,f}$$

Differansen omdannes til:
- Varme
- Lyd
- Deformasjon

**Fysisk:**
- Objektene kleber sammen
- Betydelig energitap
- Maksimal deformasjon

**Eksempler (tilnærmet inelastisk):**

**1. To biler kolliderer og blir låst sammen:**
- Bilene deformeres kraftig
- Mye energi omdannes til varme og lyd
- God tilnærming

**2. Leirkule treffer vegg og blir sittende fast:**
- Leiren deformeres
- All bevegelse i retning mot vegg stoppes
- Perfekt inelastisk

**3. Snøball treffer vegg:**
- Snøballen "klister" seg på veggen
- Energi omdannes til deformasjon

**4. Person hopper inn i vogn:**
- Person lander i vogn og beveger seg med vognen
- Ingen "sprett"

---

**SAMMENLIGNING:**

| Egenskap | Elastisk | Inelastisk |
|----------|----------|------------|
| Bevegelsesmengde | ✓ Bevares | ✓ Bevares |
| Kinetisk energi | ✓ Bevares | ✗ Bevares IKKE |
| Etter kollisjon | Objekter skilles | Objekter kleber sammen |
| Energitap | Ingen | Maksimalt |
| "Sprett" | Ja | Nei |
| Eksempel | Biljardkuler | Leirkule mot vegg |

---

**VIRKELIGHET: De fleste kollisjoner er mellom disse ytterpunktene**

**Restitusjoonskoeffisient:**
$$e = \\frac{v_{\\text{relativ etter}}}{v_{\\text{relativ før}}}$$

- $e = 1$: Perfekt elastisk
- $e = 0$: Perfekt inelastisk
- $0 < e < 1$: Delvis elastisk

**Eksempler:**

| Objekt | $e$ | Type |
|--------|-----|------|
| Stålkuler | 0.9-0.95 | Nesten elastisk |
| Biljardkuler | 0.9 | Nesten elastisk |
| Tennisball på hard flate | 0.75 | Delvis elastisk |
| Fotball | 0.6-0.8 | Delvis elastisk |
| Blykuler | 0.2 | Nesten inelastisk |
| Leirkule | 0.0 | Perfekt inelastisk |

---

**ENERGITAP I INELASTISK KOLLISJON:**

**Eksempel:** To like objekter ($m$) kolliderer hodet mot hodet med like hastigheter $v$ og $-v$.

**Før kollisjon:**
$$E_{k,i} = \\frac{1}{2}mv^2 + \\frac{1}{2}m(-v)^2 = mv^2$$

**Bevegelsesmengde:**
$$p_i = mv + m(-v) = 0$$

**Etter kollisjon (inelastisk):**
De kleber sammen og står stille: $v_f = 0$

$$E_{k,f} = 0$$

**Energitap:**
$$\\Delta E = E_{k,i} - E_{k,f} = mv^2$$

**100% av kinetisk energi er omdannet til varme/deformasjon!**

---

**PRAKTISK BETYDNING:**

**Elastiske kollisjoner:**
- Biljard: Strategi avhenger av perfekte sprett
- Atomfysikk: Modellering av gassmolekyler
- Partikkelfysikk: Kollisjoner i akseleratorer

**Inelastiske kollisjoner:**
- Bilsikkerhet: Bilens deformasjonssoner absorberer energi (redder liv)
- Prosjektilfysikk: Kule som treffer og blir i mål
- Rakettfysikk: Deler som kobles sammen

---

**OPPSUMMERING:**

**Bevegelsesmengde:** Alltid bevart (hvis ingen eksterne krefter)
**Kinetisk energi:** Kun bevart i elastiske kollisjoner

**Velg modell basert på situasjonen:**
- Harde objekter, lite deformasjon → Elastisk
- Myke objekter, mye deformasjon → Inelastisk`,
      hints: ['Hva bevares alltid?', 'Hva bevares kun i elastiske kollisjoner?', 'Tenk på "sprett" vs. "kleb"'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Newtons mekanikk er en meget god modell for hverdagslige fenomener, men den bryter sammen under ekstreme forhold. Beskriv tre situasjoner der Newtons mekanikk ikke er tilstrekkelig, og forklar hvilke modeller som må brukes i stedet.',
      solution: `**Newtons mekanikk:**

**Grunnleggende lover:**
1. Lov: $\\vec{F} = \\frac{d\\vec{p}}{dt}$ (konstant $m$: $\\vec{F} = m\\vec{a}$)
2. Lov: $\\vec{F}_{12} = -\\vec{F}_{21}$
3. Gravitasjon: $F = \\frac{Gm_1m_2}{r^2}$

**Antakelser:**
- Absolutt tid og rom
- Tid og rom er uavhengige
- Hastighet kan være hv ilken som helst
- Objekter har definert posisjon og hastighet samtidig
- Deterministisk: Hvis vi vet starttilstand, kan vi beregne fremtiden perfekt

**Gyldighetsområde:**
- Hastigheter $v << c$ (lysets hastighet)
- Store objekter (ikke atomær skala)
- Svake gravitasjonsfelt

---

**SITUASJON 1: HØYE HASTIGHETER (nær lysets hastighet)**

**Problem med Newtons mekanikk:**

Newtons mekanikk sier:
- Tid er absolutt (samme for alle)
- Hastigheter kan adderes: $v_{\\text{tot}} = v_1 + v_2$
- Ingen øvre grense for hastighet

**Virkelighet:**
- Lys beveger seg med $c = 3.0 \\times 10^8$ m/s
- Eksperimenter viser at lys har samme hastighet for alle observatører (uavhengig av deres bevegelse!)
- Ingen objekt med masse kan nå eller overstige $c$

**Eksempel:**

En rakett beveger seg med $0.9c$ og skyter ut et prosjektil med $0.9c$ (relativt til raketten).

**Newtons prediksjon:**
$$v_{\\text{prosjektil}} = 0.9c + 0.9c = 1.8c$$

Dette bryter med lysets hastighetsgrense!

**Riktig modell: Spesiell relativitetsteori (Einstein, 1905)**

**Relativistisk hastighetsaddisjon:**
$$v_{\\text{tot}} = \\frac{v_1 + v_2}{1 + \\frac{v_1 v_2}{c^2}}$$

**For eksemplet:**
$$v_{\\text{prosjektil}} = \\frac{0.9c + 0.9c}{1 + \\frac{0.9c \\times 0.9c}{c^2}} = \\frac{1.8c}{1.81} \\approx 0.99c$$

Hastigheten er fortsatt under $c$! ✓

**Andre relativistiske effekter:**
- **Tidsdilatation:** Klokker går langsommere ved høye hastigheter
- **Lengdekontraksjon:** Objekter blir kortere i bevegelsesretningen
- **Masse-energi-ekvivalens:** $E = mc^2$

**Anvendelser:**
- Partikkelakseleratorer (protoner ved 0.9999c)
- GPS-satellitter (må korrigere for relativistiske effekter)
- Kosmisk stråling (partikler med nesten lysets hastighet)

---

**SITUASJON 2: STERKE GRAVITASJONSFELT**

**Problem med Newtons mekanikk:**

Newtons gravitasjon:
- Tyngdekraft er en kraft som virker øyeblikkelig over avstand
- Rom og tid er uavhengige
- Ingen grense for tyngdekraftens styrke

**Virkelighet:**
- Ved sterke gravitasjonsfelt oppstår avvik
- Merkur har en unormal presesjon (banen roterer)
- Lys bøyes av tyngdekraft
- Svarte hull eksisterer (Newtons teori kan ikke forklare dem)

**Eksempel: Merkurs bane**

Merkurs bane er elliptisk, og ellipsens lengdeakse roterer langsomt (presesjon).

**Newtons prediksjon:** 532 buesekunder per århundre (pga. andre planeter)
**Observasjon:** 574 buesekunder per århundre
**Avvik:** 43 buesekunder per århundre (uforklart av Newton)

**Riktig modell: Generell relativitetsteori (Einstein, 1915)**

**Nøkkelinnsikt:**
- Tyngdekraft er ikke en kraft, men en krumning av rom-tid
- Massive objekter krummer rom-tid
- Objekter følger "rette linjer" (geodesikker) i krummet rom-tid

**Formel:**
$$G_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}$$

(Einsteins feltlikninger - meget komplekse!)

**Prediksjoner:**
- Merkurs presesjon: 43 buesekunder per århundre ✓
- Lys bøyes av Sola (bekreftet i 1919)
- Gravitasjonsbølger (oppdaget 2015)
- Svarte hull (bekreftet mange ganger)
- Gravitasjonell tidsdilatation (klokker går langsommere nær massive objekter)

**Anvendelser:**
- GPS-satellitter (må korrigere for gravitasjonell tidsdilatation)
- Astrofysikk (svarte hull, nøytronstjerner)
- Kosmologi (universets utvidelse)

---

**SITUASJON 3: ATOMÆR SKALA (svært små objekter)**

**Problem med Newtons mekanikk:**

Newtons mekanikk sier:
- Partikler har definert posisjon og hastighet samtidig
- Vi kan måle begge uten å påvirke systemet
- Deterministisk: Fremtiden er fullstendig bestemt av fortiden

**Virkelighet:**
- Atomer og elektroner oppfører seg både som partikler og bølger
- Vi kan ikke måle posisjon og hastighet samtidig med vilkårlig presisjon (Heisenbergs usikkerhetsrelasjon)
- Kun sannsynligheter, ikke determinisme

**Eksempel 1: Dobbeltspalteksperimentet**

Senner elektroner gjennom to spalter.

**Newtons prediksjon:** Elektroner går gjennom én spalte, danner to striper på skjerm

**Observasjon:** Interferensmønster (mange striper) - typisk for bølger!

Elektroner oppfører seg som bølger, ikke klassiske partikler.

**Eksempel 2: Hydrogenatomet**

**Newtons prediksjon:** Elektron i bane rundt proton (som en planet) skulle stråle energi og kollapser inn i proton på $10^{-11}$ sekunder.

**Observasjon:** Atomer er stabile!

**Riktig modell: Kvantemekanikk (Heisenberg, Schrödinger, 1920-tallet)**

**Nøkkelinnsikt:**
- Partikler beskrives av bølgefunksjoner $\\Psi(x,t)$
- $|\\Psi|^2$ gir sannsynlighet for å finne partikkel
- Heisenbergs usikkerhetsrelasjon: $\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}$
- Kun sannsynligheter, ikke sikkerhet

**Schrödingers likning:**
$$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hat{H} \\Psi$$

**Prediksjoner:**
- Atomspektre (energinivåer i atomer) ✓
- Kjemiske bindinger ✓
- Tunneleffekt (partikler kan passere barrierer) ✓
- Kvantesammenfiltring (spooky action at a distance) ✓

**Anvendelser:**
- Halvledere (datamaskiner, telefoner)
- Lasere
- MRI-skannere
- Atomklokker
- Kvantecomputere

---

**SAMMENLIGNING:**

| Situasjon | Newtons mekanikk | Riktig modell | Når nødvendig |
|-----------|------------------|---------------|---------------|
| Høye hastigheter | Feil | Spesiell relativitetsteori | $v \\gtrsim 0.1c$ |
| Sterke gravitasjonsfelt | Feil | Generell relativitetsteori | Nær svarte hull, nøytronstjerner |
| Atomær skala | Feil | Kvantemekanikk | Atomer, molekyler, partikler |

---

**DEN ULTIMATE TEORIEN?**

Ingen av disse teoriene er "fullstendige":
- **Generell relativitetsteori:** Fungerer for tyngdekraft, men ikke for kvantemekanikk
- **Kvantemekanikk:** Fungerer for små partikler, men ikke for tyngdekraft

**Søket etter en "Theory of Everything":**
- Strengteori
- Loop quantum gravity
- Osv.

**Poenget:** Alle teorier er modeller med gyldighetsområder!

---

**OPPSUMMERING:**

Newtons mekanikk er en **utmerket modell** for:
- Hverdagslige hastigheter ($v << c$)
- Store objekter (baller, biler, planeter)
- Svake gravitasjonsfelt

Men den **bryter sammen** ved:
1. **Høye hastigheter** → Spesiell relativitetsteori
2. **Sterke gravitasjonsfelt** → Generell relativitetsteori
3. **Atomær skala** → Kvantemekanikk`,
      hints: ['Tenk på ekstreme forhold', 'Høye hastigheter?', 'Små objekter?', 'Sterke felt?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-1-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal modellere en ball som spretter på gulvet. Hvilke forenklinger vil du gjøre? Diskutér hvilke effekter du vil inkludere og hvilke du vil neglisjere, og begrunn valgene.',
      solution: `**MODELLERING AV SPRETTENDE BALL**

---

**KOMPLEKSITETEN I VIRKELIGHETEN:**

En ekte sprettende ball påvirkes av:
- Tyngdekraft
- Luftmotstand
- Rotasjon (spin)
- Deformasjon under kollisjon
- Energitap ved kollisjon
- Friksjon mot gulvet
- Gulvets elastisitet
- Lydproduksjon
- Varmeproduksjon
- Molekylær struktur i ball og gulv
- Temperaturvariasjoner
- Luftfuktighet
- Osv.

**Vi kan ikke inkludere alt!** Vi må forenkle.

---

**MODELLVALG AVHENGER AV FORMÅLET:**

**Spørsmål 1: Hvor høyt spretter ballen?**
**Spørsmål 2: Hvordan varierer spretthøyden med tiden?**
**Spørsmål 3: Hvorfor spretter ballen lavere for hver gang?**

La oss lage en modell for **Spørsmål 2 og 3**.

---

**VERSJON 1: ENKLESTE MODELL**

**Inkluderinger:**
1. **Tyngdekraft:** $F = mg$
2. **Elastisk kollisjon:** Ballen spretter perfekt

**Forenklinger (neglisjering):**
1. **Ingen luftmotstand**
2. **Ingen energitap ved kollisjon**
3. **Punktmasse** (ingen rotasjon, ingen størrelse)
4. **Ingen deformasjon**
5. **Konstant $g$**

**Matematisk modell:**

**Mellom sprett (fritt fall):**
$$s(t) = h - \\frac{1}{2}gt^2$$
$$v = \\sqrt{2gh}$$ (når den treffer gulvet)

**Ved kollisjon:**
Hastigheten reverseres: $v_{\\text{etter}} = -v_{\\text{før}}$

**Resultat:**
Ballen spretter til samme høyde $h$ hver gang.

**Prediksjon:**
$$h_1 = h_2 = h_3 = ... = h$$

**Problem:** Dette stemmer IKKE med virkeligheten! Ballen spretter lavere for hver gang.

**Konklusjon:** Modellen er for enkel. Vi må inkludere energitap.

---

**VERSJON 2: INKLUDÉR ENERGITAP VED KOLLISJON**

**Inkluderinger:**
1. **Tyngdekraft:** $F = mg$
2. **Delvis elastisk kollisjon:** Restitusjoonskoeffisient $e < 1$

**Restitusjoonskoeffisient:**
$$e = \\frac{v_{\\text{etter}}}{v_{\\text{før}}}$$

For en tennisball: $e \\approx 0.75$

**Ved kollisjon:**
$$v_{\\text{etter}} = e \\cdot v_{\\text{før}}$$

**Kinetisk energi etter kollisjon:**
$$E_{k,\\text{etter}} = \\frac{1}{2}m v_{\\text{etter}}^2 = \\frac{1}{2}m (e v_{\\text{før}})^2 = e^2 E_{k,\\text{før}}$$

**Energitap:**
$$\\Delta E = (1 - e^2) E_{k,\\text{før}}$$

For $e = 0.75$: $\\Delta E = (1 - 0.75^2) E_{k,\\text{før}} = 0.44 E_{k,\\text{før}}$ (44% energitap!)

**Matematisk modell:**

**Første sprett:**
$$v_1 = \\sqrt{2gh_0}$$
$$v_1' = e v_1 = e\\sqrt{2gh_0}$$
$$h_1 = \\frac{(v_1')^2}{2g} = \\frac{e^2 \\cdot 2gh_0}{2g} = e^2 h_0$$

**Andre sprett:**
$$h_2 = e^2 h_1 = e^4 h_0$$

**n-te sprett:**
$$h_n = e^{2n} h_0$$

**Prediksjon:**
Spretthøyden avtar eksponentielt:
$$h_n = h_0 e^{-2n |\\ln e|}$$

For $e = 0.75$:
- $h_1 = 0.56 h_0$ (56% av original høyde)
- $h_2 = 0.32 h_0$ (32%)
- $h_3 = 0.18 h_0$ (18%)

**Resultat:** Dette stemmer godt med observasjoner! ✓

**Konklusjon:** Denne modellen er tilstrekkelig for mange formål.

---

**VERSJON 3: INKLUDÉR LUFTMOTSTAND (mer avansert)**

**Når nødvendig:**
- Høye spretthøyder
- Lette baller (beachball)
- Nøyaktig modellering

**Inkluderinger:**
1. **Tyngdekraft:** $F_g = mg$
2. **Luftmotstand:** $F_d = \\frac{1}{2}C_d \\rho A v^2$
3. **Delvis elastisk kollisjon:** $e < 1$

**Bevegelseslikning (mellom sprett):**
$$m \\frac{dv}{dt} = -mg - \\frac{1}{2}C_d \\rho A v^2$$

(Negativ fordi luftmotstanden motvirker bevegelsen)

**Problem:** Denne differensiallikningen har ikke analytisk løsning. Vi må løse numerisk (se neste kapittel).

**Resultat:** Luftmotstanden reduserer både oppstignings- og fallhastighet, så ballen spretter enda lavere.

---

**VERSJON 4: INKLUDÉR ROTASJON (meget avansert)**

**Når nødvendig:**
- Ballen spinner betydelig
- Studer rotasjonsdynamikk

**Inkluderinger:**
1. **Tyngdekraft:** $F_g = mg$
2. **Luftmotstand:** $F_d$
3. **Magnus-kraft:** $F_M = \\frac{1}{2}C_L \\rho A v^2$ (pga. spin)
4. **Rotasjonsenergi:** $E_{rot} = \\frac{1}{2}I\\omega^2$
5. **Friksjon ved kollisjon:** Endrer spin

**Resultat:** Ballen kan sprette sidelengs eller kurve i luften (spin effect).

**Kompleksitet:** Meget høy! Krever numerisk simulering.

---

**HVILKEN MODELL SKAL VI VELGE?**

**Prinsipp:** **Velg den enkleste modellen som gir tilstrekkelig nøyaktighet for ditt formål.**

**Formål 1: Forstå prinsippet om spretthøyde**
→ Versjon 2 (restitusjonskoe ffisient) er perfekt

**Formål 2: Beregne nøyaktig spretthøyde for tennisball**
→ Versjon 2 (muligens Versjon 3 ved høye høyder)

**Formål 3: Modellere en spinnende fotball**
→ Versjon 4 (kompleks)

**Formål 4: Design av støtdempere i bil**
→ Meget avanserte modeller med materialkunnskap

---

**OPPSUMMERING AV FORENKLINGER:**

| Effekt | Versjon 1 | Versjon 2 | Versjon 3 | Versjon 4 |
|--------|-----------|-----------|-----------|-----------|
| Tyngdekraft | ✓ | ✓ | ✓ | ✓ |
| Energitap ved kollisjon | ✗ | ✓ | ✓ | ✓ |
| Luftmotstand | ✗ | ✗ | ✓ | ✓ |
| Rotasjon | ✗ | ✗ | ✗ | ✓ |
| Kompleksitet | Meget lav | Lav | Middels | Høy |
| Nøyaktighet | Dårlig | God | Meget god | Utmerket |

---

**VALG AV FORENKLINGER - BEGRUNNELSER:**

**1. Neglisjere luftmotstand (Versjon 2):**
- **Begrunnelse:** For tunge, kompakte baller (tennisball, fotball) ved moderate høyder (<5 m) er luftmotstanden < 10% av tyngdekraften
- **Når bryte sammen:** Beachball, høye høyder, meget nøyaktige målinger

**2. Neglisjere rotasjon (Versjon 2):**
- **Begrunnelse:** Hvis ballen ikke spinner mye, påvirker rotasjonen lite
- **Når bryter sammen:** Spinnende fotball, biljardkuler med side-spin

**3. Behandle som punktmasse:**
- **Begrunnelse:** Ballens størrelse er neglisjerbar sammenlignet med spretthøyden
- **Når bryter sammen:** Når deformasjon under kollisjon må studeres

**4. Konstant $g$:**
- **Begrunnelse:** Høydeforskjeller er små (< 100 m)
- **Når bryter sammen:** Satellitter, romfartøy

**5. Gulvet er stivt:**
- **Begrunnelse:** Gulvets deformasjon er neglisjerbar sammenlignet med ballens
- **Når bryter sammen:** Myk overflate (madrass, trampoline)

---

**KONKLUSJON:**

**For en typisk tennisball:**
**Versjon 2 (restitusjonskoe ffisient) er optimal.**

Inkludér:
- Tyngdekraft
- Energitap ved kollisjon ($e \\approx 0.75$)

Neglisjér:
- Luftmotstand (lite betydning for tunge baller ved moderate høyder)
- Rotasjon (hvis ingen spin)
- Deformasjon (fanget av restitusjonskoe ffisienten)

**Resultat:** Enkel modell som gir gode prediksjoner!`,
      hints: ['Hva er viktigst?', 'Hva kan neglisjeres?', 'Test forenklingene'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

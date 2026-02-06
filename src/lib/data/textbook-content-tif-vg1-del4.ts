/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 4: Tegning og dokumentasjon
 *
 * Kapittel 4.1-4.6: Tegning, DAK og dokumentasjon
 * Dekker LK20 kompetansemål for teknisk tegning og DAK
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Teknisk tegning og tegneregler
// ============================================================================

export const CHAPTER_TIF_VG1_4_1: TextbookChapter = {
  id: 'tif-vg1-4-1',
  courseId: 'tif-vg1',
  chapterNumber: '4.1',
  title: 'Teknisk tegning og tegneregler',
  description: 'Grunnleggende regler for teknisk tegning etter norsk og internasjonal standard.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive arbeidsoppgaver innenfor produksjon og tjenester basert på tegningsunderlag og prosedyrer',
  ],
  sections: [
    {
      title: 'Introduksjon til teknisk tegning',
      content: `## Introduksjon til teknisk tegning

Teknisk tegning er industriens universelle språk. En tegning formidler nøyaktig informasjon om hvordan et produkt skal se ut og produseres.

**Hvorfor tekniske tegninger?**
- Entydig kommunikasjon mellom designer og produsent
- Internasjonalt forståelig (standardisert)
- Dokumentasjon for kvalitetskontroll
- Juridisk bindende ved kontrakter
- Grunnlag for beregninger og planlegging

**Standarder:**
- NS-EN ISO-standarder: Norsk/europeisk versjon av ISO
- ISO 128: Generelle prinsipper
- ISO 129: Målsetting
- ISO 1101: Geometriske toleranser

**Tegningstyper:**
- Sammenstillingstegning: Viser delene satt sammen
- Detaljtegning: En enkelt del med alle mål
- Skjematisk tegning: Prinsippskisser, koblingsdiagrammer
- Frihåndsskisse: Rask kommunikasjon av ideer

**Tegningsformat:**
A-serier (A4, A3, A2, A1, A0)
- A4: 210 × 297mm
- A3: 297 × 420mm (dobbelt A4)
- Tittelfelt alltid nederst til høyre`,
    },
    {
      title: 'Linjetyper og linjetykkelser',
      content: `## Linjetyper og linjetykkelser

**Linjetykkelser:**
- Tykk linje: 0,5-0,7mm
- Medium linje: 0,35mm
- Tynn linje: 0,18-0,25mm

**Linjetyper og bruk:**

**Sammenhengende tykk (A):**
Synlige kanter og konturer.

**Sammenhengende tynn (B):**
Mållinjer, hjelplinjer, skravering.

**Stiplet tynn (E):**
Skjulte kanter (bak overflaten).

**Strek-prikk tynn (G):**
Senterlinjer, symmetrilinjer.

**Strek-prikk-prikk (J):**
Omriss av tilstøtende deler, alternativer.

**Frihånd (C):**
Bruddlinjer for lange emner.

**Prioritering:**
Når linjer overlapper:
1. Synlig kontur (A)
2. Skjult kontur (E)
3. Snittplan (G)
4. Senterlinje (G)

**Eksempel - Linjehierarki:**
Et hull i en plate:
- Hullkanten er synlig kontur (tykk hel)
- Senterlinjene er strek-prikk (tynn)
- Bak platen er kanten skjult (stiplet tynn)`,
    },
    {
      title: 'Målsetting',
      content: `## Målsetting

Mål angir dimensjoner og avstander på tegningen.

**Grunnregler:**
- Alle mål i millimeter (mm) uten benevning
- Hvert mål angis kun én gang
- Mål plasseres utenfor konturen
- Mållinjer skal ikke krysse
- Nok mål for entydig produksjon

**Målelementer:**
- Mållinje: Tynn linje med piler
- Hjelpelinje: Fra emnet til mållinjen
- Måltall: Dimensjonen

**Plassering av måltall:**
- Over horisontal mållinje
- Til venstre for vertikal mållinje
- Alltid lesbar nedenfra eller fra høyre

**Målsettingsmetoder:**

**Kjedemålsetting:**
Mål etter hverandre, toleranser akkumuleres.

**Parallellmålsetting:**
Alle mål fra samme referanse, best for toleranser.

**Koordinatmålsetting:**
X- og Y-koordinater fra nullpunkt.

**Diameter og radius:**
- Ø: Diameter (full sirkel)
- R: Radius (sirkelbuene)
- SR: Sfærisk radius
- SØ: Sfærisk diameter

**Eksempel - Målsetting av plate:**
100 × 50mm plate med Ø10 hull i senter:
- Ytre mål: 100 og 50 (parallellmålsetting)
- Hull: Ø10, plassert 50 fra venstre, 25 fra bunn`,
    },
    {
      title: 'Tegnformat og tittelfelt',
      content: `## Tegningsformat og tittelfelt

**Tegningsramme:**
- 10mm ramme fra papirkant (A4/A3)
- 20mm ramme på større formater
- Innklippingsmerker i hjørnene

**Tittelfelt (ISO 7200):**
Plasseres nederst til høyre.

**Obligatorisk informasjon:**
- Firmanavn/skole
- Tegningsnummer
- Bennevning (hva delen heter)
- Målestokk
- Dato og revisjon
- Tegnet av/godkjent av
- Materiale
- Antall
- Prosjeksjonsmåte-symbol

**Målestokk:**
- 1:1 - Full størrelse
- 2:1 - Forstørret (dobbel)
- 1:2 - Forminsket (halv)
- 1:5, 1:10, 1:20 - Større objekter
- 5:1, 10:1 - Små objekter

**Revisjonstabell:**
Logger endringer i tegningen.
- Rev.nummer
- Dato
- Endring
- Signatur

**Stykkliste (for sammenstillinger):**
- Posisjonsnummer
- Antall
- Bennevning
- Delenummer/tegningsnummer
- Materiale
- Merknader`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-1-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom sammenhengende tykk linje og stiplet tynn linje på en teknisk tegning.',
      solution: 'Sammenhengende tykk linje (type A) brukes for synlige kanter og konturer - det som sees når man ser på emnet. Stiplet tynn linje (type E) brukes for skjulte kanter - detaljer som er bak en overflate og ikke direkte synlige fra den aktuelle visningen. Eksempel: Et gjenget hull sett ovenfra viser hullkanten som hel linje, mens gjengene på innsiden vises stiplet.',
    },
    {
      id: 'tif-vg1-4-1-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken linjetype brukes for senterlinjer?',
      options: [
        { id: 'a', text: 'Strek-prikk tynn linje', isCorrect: true },
        { id: 'b', text: 'Stiplet tynn linje', isCorrect: false },
        { id: 'c', text: 'Sammenhengende tykk linje', isCorrect: false },
        { id: 'd', text: 'Sammenhengende tynn linje', isCorrect: false },
      ],
      solution: 'Senterlinjer tegnes med strek-prikk tynn linje (type G). De markerer symmetriakser, senterakser for hull og rotasjonsdeler. Linjen skal starte og slutte med en strek (ikke prikk).',
    },
    {
      id: 'tif-vg1-4-1-ex-3',
      type: 'classic',
      task: 'En tegning har målestokk 2:1. Hva betyr dette, og hvordan stor vil en 50mm del være på tegningen?',
      solution: 'Målestokk 2:1 betyr at tegningen er forstørret til dobbel størrelse. Det første tallet er tegningens størrelse, det andre er virkelig størrelse. En 50mm del vil være 100mm på tegningen (50 × 2 = 100). Dette brukes for små detaljer som er vanskelige å se i 1:1.',
    },
    {
      id: 'tif-vg1-4-1-ex-4',
      type: 'multiple-choice',
      task: 'Hvor plasseres tittelfeltet på en teknisk tegning?',
      options: [
        { id: 'a', text: 'Nederst til høyre', isCorrect: true },
        { id: 'b', text: 'Øverst til venstre', isCorrect: false },
        { id: 'c', text: 'Midt på arket', isCorrect: false },
        { id: 'd', text: 'Øverst til høyre', isCorrect: false },
      ],
      solution: 'Tittelfeltet plasseres alltid nederst til høyre på tegningen i henhold til ISO 7200. Dette sikrer at det alltid er synlig uansett hvordan tegningen brettes eller staplers.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-1-ex-5',
      type: 'classic',
      task: 'Du skal lage en produksjonstegning av en enkel metallplate. Beskriv hvilken informasjon som må være med i tittelfeltet.',
      solution: 'TITTELFELT skal inneholde:\n1. FIRMANAVN/SKOLE: Identifiserer hvem som har laget tegningen.\n2. TEGNINGSNUMMER: Unik identifikator for sporbarhet.\n3. BENNEVNING: Hva delen heter (f.eks. "Bunnplate").\n4. MÅLESTOKK: F.eks. 1:1.\n5. DATO: Når tegningen ble laget.\n6. REVISJON: Versjonsnummer (A, B, C eller 1, 2, 3).\n7. TEGNET AV: Navn/initialer.\n8. GODKJENT AV: For kvalitetssikring.\n9. MATERIALE: F.eks. "Stål S235JR" eller "Aluminium 6082".\n10. ANTALL: Hvis relevant.\n11. PROSJEKSJONSYMBOL: Viser om 1. eller 3. vinkel brukes.',
    },
    {
      id: 'tif-vg1-4-1-ex-6',
      type: 'classic',
      task: 'Forklar forskjellen mellom kjedemålsetting og parallellmålsetting, og når hver metode er best egnet.',
      solution: 'KJEDEMÅLSETTING: Mål angis etter hverandre i en kjede. Fordel: Enkelt å lese enkeltmål. Ulempe: Toleranser akkumuleres - summen av alle toleranser påvirker total lengde. Best når: Relativ avstand mellom naboelementer er viktigst.\n\nPARALLELLMÅLSETTING: Alle mål refererer til samme nullpunkt/referanse. Fordel: Ingen akkumulering av toleranser - hvert mål er uavhengig. Ulempe: Kan kreve mer plass. Best når: Absolutt posisjon fra en referanse er kritisk, f.eks. hull-plasseringer.\n\nTommelfingerregel: Bruk parallellmålsetting for presisjonsdeler, kjedemålsetting for enklere deler der relative avstander er viktigst.',
    },
  ],
  keyTerms: [
    { term: 'Prosjeksjon', definition: 'Metode for å fremstille 3D-objekter på 2D-papir.' },
    { term: 'Målestokk', definition: 'Forholdet mellom tegningens og virkelig størrelse.' },
    { term: 'Tittelfelt', definition: 'Område med informasjon om tegningen og delen.' },
    { term: 'Senterlinje', definition: 'Linje som viser symmetriakse eller senter for hull.' },
    { term: 'Parallellmålsetting', definition: 'Målsetting der alle mål refererer til samme punkt.' },
    { term: 'Kjedemålsetting', definition: 'Målsetting der mål angis etter hverandre.' },
  ],
};

// ============================================================================
// Kapittel 4.2: Ortogonal projeksjon og snittegning
// ============================================================================

export const CHAPTER_TIF_VG1_4_2: TextbookChapter = {
  id: 'tif-vg1-4-2',
  courseId: 'tif-vg1',
  chapterNumber: '4.2',
  title: 'Ortogonal projeksjon og snittegning',
  description: 'Tegning og tolking av ortogonale projeksjoner, snitt og detaljer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive arbeidsoppgaver innenfor produksjon og tjenester basert på tegningsunderlag og prosedyrer',
  ],
  sections: [
    {
      title: 'Ortogonal projeksjon',
      content: `## Ortogonal projeksjon

Ortogonal (rettvinkel) projeksjon viser objektet fra vinkelrett på forskjellige sider.

**Standardvisninger:**
- Frontvisning: Hovedvisning, mest informativ
- Toppvisning: Sett ovenfra
- Sidevisning: Høyre eller venstre side

**1. vinkel projeksjon (Europeisk):**
Brukes i Norge og Europa.
- Objektet er mellom betrakteren og projeksjonsplanet
- Toppvisningen er UNDER frontvisningen
- Høyre sidevisning er til VENSTRE

**3. vinkel projeksjon (Amerikansk):**
Brukes i USA.
- Projeksjonsplanet er mellom betrakter og objekt
- Toppvisningen er OVER frontvisningen
- Høyre sidevisning er til HØYRE

**Symbol:**
Tegningen skal ha symbol som viser prosjeksjonsmetoden.

**Valg av visninger:**
- Velg færrest mulig visninger som gir full informasjon
- Velg hovedvisning som viser mest karakteristisk form
- Unngå unødvendige skjulte linjer

**Eksempel - Rettvinklet profil:**
En L-profil vises i:
- Front: Viser L-formen
- Side: Viser tykkelsen
- Topp: Ikke nødvendig (gir ingen ny info)`,
    },
    {
      title: 'Snitt og snittegning',
      content: `## Snitt og snittegning

Snitt brukes for å vise indre detaljer tydelig.

**Hvorfor snitt?**
- Unngår mange skjulte linjer
- Viser hulrom og indre konstruksjon
- Gjør tegningen lettere å lese

**Snittprinsipper:**
1. Tenk deg at emnet skjæres med et plan
2. Fjern den nærmeste delen mentalt
3. Tegn det som gjenstår
4. Skraver de skårne flatene

**Snittplanmerking:**
- Snittlinjen vises i nabovn med strek-prikk-tykk
- Piler viser synsretningen
- Bokstaver identifiserer snittet (A-A)

**Skravering:**
- Tynne linjer i 45° vinkel
- Avstanden avhenger av størrelsen
- Samme komponent = samme skraveretning
- Ulike komponenter = ulik retning (i sammenstilling)

**Snitttyper:**

**Helt snitt:**
Snitter hele emnet.

**Halvt snitt:**
Halvparten snittet, halvparten usnittet. For symmetriske deler.

**Utsnitt (lokalt snitt):**
Viser kun et lite område. Bruddlinje avgrenser.

**Trappesnitt:**
Snitt som går i flere plan for å vise forskjellige detaljer.

**Roterbar snitt:**
Tverrsnitt rotert 90° inn i visningen.`,
    },
    {
      title: 'Detaljtegninger og forstørrelser',
      content: `## Detaljtegninger og forstørrelser

**Detalj-utsnevelse:**
Når en detalj er for liten til å vises tydelig, lages en forstørret detaljvisning.

**Markering:**
- Sirkel eller rektangel rundt området
- Bokstav-identifikasjon (Detail A)
- Egen visning i større målestokk

**Eksempel:**
Hovedtegning i 1:2, detalj av liten radius i 2:1.

**Partielle visninger:**
Når hele visningen ikke er nødvendig, brytes den av med bruddlinje.

**Symmetriske deler:**
- Kan vises som halvpart
- Symmetrilinjer i enden med to korte streker

**Repeterende mønstre:**
- Vise starten av mønsteret
- Indikere antall og avstand
- Ikke nødvendig å tegne alle

**Avbrudd for lange deler:**
- Bruddlinje med sikksakkmønster
- Begge ender tegnes
- Mål angir total lengde

**Detaljnivå:**
Velg riktig detaljnivå for formålet:
- Oversiktstegning: Kun hovedformer
- Produksjonstegning: Alle detaljer
- Monteringsanvisning: Kun monteringsrelevant info`,
    },
    {
      title: 'Lese og tolke tegninger',
      content: `## Lese og tolke tegninger

**Systematisk tegningslesing:**

**1. Tittelfelt:**
- Hva er dette?
- Hvilket materiale?
- Hvilken målestokk?
- Revisjonsstatus?

**2. Hovedform:**
- Forstå 3D-formen fra visningene
- Identifiser hovedgeometrien

**3. Detaljer:**
- Hull, spor, fasinger
- Indre konstruksjon (fra snitt)
- Overflatebehandling

**4. Mål og toleranser:**
- Hovedmål
- Kritiske toleranser
- Overflatekrav

**5. Merknader:**
- Spesielle krav
- Behandlinger
- Referanser til standarder

**Vanlige symboler:**
- ⌀: Diameter
- □: Firkant
- ⌒: Bue
- ∠: Vinkel
- Rz, Ra: Overflatekrav

**Eksempel - Tolke tegning:**
En tegning viser:
- Front: Rektangel med senter-sirkel
- Topp: Rektangel
- Høyre: Halvt snitt med gjengehull

Tolkning: Rektangulær blokk med gjenget gjennomgående hull.`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-2-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom 1. og 3. vinkel projeksjon, og hvilken metode brukes i Norge.',
      solution: '1. VINKEL (Europeisk): Objektet er mellom betrakter og projeksjonsplan. Toppvisningen plasseres UNDER frontvisningen, høyre sidevisning til VENSTRE. 3. VINKEL (Amerikansk): Projeksjonsplanet er mellom betrakter og objekt. Toppvisningen plasseres OVER frontvisningen, høyre sidevisning til HØYRE. I Norge brukes 1. vinkel projeksjon etter europeisk standard. Tegningen skal ha symbol som viser hvilken metode som er brukt.',
    },
    {
      id: 'tif-vg1-4-2-ex-2',
      type: 'multiple-choice',
      task: 'Hvorfor brukes snittegning?',
      options: [
        { id: 'a', text: 'For å vise indre detaljer tydelig', isCorrect: true },
        { id: 'b', text: 'For å spare plass på tegningen', isCorrect: false },
        { id: 'c', text: 'For å gjøre tegningen finere', isCorrect: false },
        { id: 'd', text: 'For å skjule feil i designet', isCorrect: false },
      ],
      solution: 'Snittegning brukes for å vise indre detaljer (hulrom, kanaler, gjenger, veggtykkeser) som ellers ville kreve mange skjulte linjer. Snittet gjør tegningen lettere å lese og forstå.',
    },
    {
      id: 'tif-vg1-4-2-ex-3',
      type: 'classic',
      task: 'Beskriv hvordan skravering brukes på en snittegning og reglene for retning og avstand.',
      solution: 'SKRAVERING viser de skårne flatene i et snitt. Regler: 1) Tynne linjer i 45° vinkel til tegningens kanter. 2) Avstanden mellom linjene skal være jevn og passe til tegningens størrelse (2-5mm typisk). 3) Samme komponent har samme skraveretning og avstand. 4) I sammenstillinger har ulike deler ulik skraveretning (alternerende 45° og 135°). 5) Tynne vegger, aksler og standarddeler (bolter, lagre) skraveres ikke selv om de er i snittplanet.',
    },
    {
      id: 'tif-vg1-4-2-ex-4',
      type: 'multiple-choice',
      task: 'Hva viser et halvt snitt?',
      options: [
        { id: 'a', text: 'Halvparten snittet, halvparten usnittet for symmetriske deler', isCorrect: true },
        { id: 'b', text: 'Kun halve delen tegnet', isCorrect: false },
        { id: 'c', text: 'Snittet i halvparten av målestokken', isCorrect: false },
        { id: 'd', text: 'Snittet rotert 180 grader', isCorrect: false },
      ],
      solution: 'Et halvt snitt viser én halvdel av en symmetrisk del som snittet (med skravering) og den andre halvdelen usnittet (med synlige kanter). Dette viser både indre konstruksjon og ytre form samtidig, og sparer plass.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-2-ex-5',
      type: 'classic',
      task: 'Du får en tegning av en maskinkomponent. Beskriv systematisk hvordan du leser og tolker tegningen.',
      solution: 'SYSTEMATISK TEGNINGSLESING:\n\n1. TITTELFELT: Les navn, tegningsnummer, materiale, målestokk, revisjon, prosjeksjonssymbol.\n\n2. OVERSIKT: Se på alle visninger samlet, forstå hovedformen i 3D.\n\n3. HOVEDVISNING: Start med frontvisningen, identifiser hovedgeometrien.\n\n4. ANDRE VISNINGER: Se hvordan de andre visningene utfyller informasjonen.\n\n5. SNITT: Les eventuelle snitt for indre detaljer.\n\n6. MÅL: Gå gjennom alle mål systematisk - hovedmål først, deretter detaljer.\n\n7. TOLERANSER: Identifiser kritiske toleranser.\n\n8. OVERFLATERAV: Les overflatesymboler (Ra, Rz).\n\n9. MERKNADER: Les alle tekstnotater, behandlinger, standardreferanser.\n\n10. SPØRSMÅL: Noter uklarheter for avklaring.',
    },
    {
      id: 'tif-vg1-4-2-ex-6',
      type: 'classic',
      task: 'Et emne har form som en sylinder med et gjenget hull gjennom midten. Hvilke visninger og eventuelt snitt vil du velge for produksjonstegningen?',
      solution: 'FOR EN SYLINDER MED GJENGEHULL:\n\nVISNINGER:\n1. FRONTVISNING: Viser sylinderens profil (rektangel) med senterlinje. Hullet vises stiplet eller i snitt.\n\n2. SIDEVISNING: Viser sirkelen i endene. Kan utelates hvis diameteren er angitt i front.\n\nSNITT:\nHALVT SNITT i front anbefales:\n- Øvre halvdel viser ytre form (kontur)\n- Nedre halvdel viser indre gjenger (skravert, gjengeprofil)\n- Viser både ytre og indre samtidig\n\nAlternativt HELT SNITT langs aksen hvis kun indre detaljer er viktig.\n\nMÅLSETTING:\n- Ytre diameter: Ø...\n- Gjengehull: M... × ...\n- Lengde og eventuelle fasinger',
    },
  ],
  keyTerms: [
    { term: '1. vinkel projeksjon', definition: 'Europeisk metode der toppvisning er under frontvisning.' },
    { term: 'Snittegning', definition: 'Tegning som viser emnet kuttet for å vise indre detaljer.' },
    { term: 'Skravering', definition: '45° linjer som markerer skårne flater i snitt.' },
    { term: 'Halvt snitt', definition: 'Snitt som viser halvparten kuttet, halvparten hel.' },
    { term: 'Bruddlinje', definition: 'Linje som viser avkuttet del av langt emne.' },
    { term: 'Detaljvisning', definition: 'Forstørret visning av et lite område.' },
  ],
};

// ============================================================================
// Kapittel 4.3: Isometrisk tegning
// ============================================================================

export const CHAPTER_TIF_VG1_4_3: TextbookChapter = {
  id: 'tif-vg1-4-3',
  courseId: 'tif-vg1',
  chapterNumber: '4.3',
  title: 'Isometrisk tegning',
  description: 'Framstilling av tredimensjonale objekter i isometrisk projeksjon.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke programmer for 2D- og 3D-dataassistert konstruksjon (DAK) og dataassistert produksjon (DAP) til grunnleggende tegning og dokumentasjon',
  ],
  sections: [
    {
      title: 'Isometrisk projeksjon',
      content: `## Isometrisk projeksjon

Isometrisk tegning viser et objekt i 3D-perspektiv der alle tre hovedakser har samme målforhold.

**Kjennetegn:**
- Tre akser: Vertikal + to i 30° fra horisontal
- Samme målforhold langs alle tre akser
- Parallelle linjer forblir parallelle
- Ingen perspektivforkortning

**Fordeler:**
- Lettere å forstå enn ortogonale visninger
- Kan måles direkte på aksene
- God for visualisering og kommunikasjon

**Begrensninger:**
- Ikke egnet for presise målinger av vinkler
- Sirkler blir ellipser
- Ikke realistisk perspektiv

**Akseretninger:**
- Vertikal: Rett opp (høyde)
- Venstre 30°: Dybde/bredde
- Høyre 30°: Bredde/dybde

**Konstruksjon:**
1. Tegn aksekorstet (vertikal + 30°)
2. Marker lengder på aksene
3. Tegn parallelle linjer
4. Fullfør formen`,
    },
    {
      title: 'Tegne isometrisk',
      content: `## Tegne isometrisk

**Rette linjer:**
- Parallelt med aksene: Direkte målsetting
- Andre vinkler: Konstruer via hjørnekoordinater

**Sirkler i isometri:**
Sirkler blir ellipser i isometrisk visning.

**Ellipsekonstruksjon (4-senter-metode):**
1. Tegn romben (isometrisk firkant)
2. Finn midtpunktene på sidene
3. Tegn linjer fra de skarpe hjørnene til motstående midtpunkt
4. Disse linjene møtes i fire punkter
5. Tegn sirkelbuer fra disse punktene

**Praktisk:** Bruk isometrisk mal eller DAK-program for nøyaktige ellipser.

**Frihåndsskisser:**
For rask kommunikasjon:
1. Skiss aksekorset lett
2. Blokk inn hovedformen
3. Legg til detaljer
4. Marker kanter tydeligere

**Tips for frihånd:**
- Start med enkle former (bokser)
- Bygg opp fra enkelt til komplekst
- Sirkler: Tegn romben først, deretter ellipsen inni
- Bruk rutenett-underlag om nødvendig`,
    },
    {
      title: 'Isometri i praksis',
      content: `## Isometri i praksis

**Bruksområder:**
- Monteringsanvisninger
- Illustrasjoner i dokumentasjon
- Kommunikasjon med ikke-tekniske
- Salgsmaterialer
- Rørdiagrammer

**Isometriske rørdiagrammer:**
- Viser rørføringer i 3D
- Standard i prosessindustrien
- Vinkler og bøyer tydelige

**Eksplosjonstegninger:**
- Deler vist fra hverandre
- Monteringsrekkefølge
- Posisjonsnumre
- Meget nyttig for montering

**Fra ortogonal til isometri:**
1. Les ortogonale visninger nøye
2. Forstå 3D-formen
3. Velg best synsvinkel
4. Start med rammeboks
5. Trekk fra materiale
6. Legg til detaljer

**Fra isometri til ortogonal:**
1. Identifiser hovedvisningsretning
2. Tegn frontvisning
3. Projekter andre visninger
4. Legg til skjulte linjer

**Eksempel - Vinkelplate:**
En L-formet vinkelplate tegnes:
1. Tegn rammeboksen (ytre mål)
2. Trekk fra hjørnet (L-formen)
3. Legg til evt. hull som ellipser
4. Tydeligere konturer`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-3-ex-1',
      type: 'classic',
      task: 'Forklar hva som kjennetegner isometrisk projeksjon og hvordan aksene er orientert.',
      solution: 'Isometrisk projeksjon kjennetegnes av: 1) Tre akser med samme målforhold (1:1:1). 2) Den vertikale aksen går rett opp. 3) De to andre aksene går i 30° vinkel fra horisontal (én til venstre, én til høyre). 4) Parallelle linjer forblir parallelle (ingen perspektivforkortning). 5) Lengder kan måles direkte langs aksene. Sirkler blir ellipser fordi visningsplanet er på skrå mot alle flater.',
    },
    {
      id: 'tif-vg1-4-3-ex-2',
      type: 'multiple-choice',
      task: 'Hvordan ser en sirkel ut i isometrisk visning?',
      options: [
        { id: 'a', text: 'Som en ellipse', isCorrect: true },
        { id: 'b', text: 'Som en sirkel', isCorrect: false },
        { id: 'c', text: 'Som en firkant', isCorrect: false },
        { id: 'd', text: 'Som en linje', isCorrect: false },
      ],
      solution: 'En sirkel blir en ellipse i isometrisk visning fordi flaten sirkelen ligger på er på skrå mot betrakteren. Ellipsens lengste akse er vinkelrett på den isometriske aksen som er normal til sirkelflaten.',
    },
    {
      id: 'tif-vg1-4-3-ex-3',
      type: 'classic',
      task: 'Nevn tre typiske bruksområder for isometriske tegninger.',
      solution: 'Tre typiske bruksområder: 1) MONTERINGSANVISNINGER - Viser hvordan deler settes sammen, ofte som eksplosjonstegning der delene vises fra hverandre. 2) RØRDIAGRAMMER - Viser rørføringer i prosessanlegg i 3D, gjør det lett å forstå romlig plassering. 3) TEKNISK DOKUMENTASJON - Illustrasjoner i brukermanualer og instrukser for ikke-teknisk personell som trenger å forstå formen uten å lese ortogonale tegninger.',
    },
    {
      id: 'tif-vg1-4-3-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken vinkel fra horisontal har de to skrå aksene i isometri?',
      options: [
        { id: 'a', text: '30 grader', isCorrect: true },
        { id: 'b', text: '45 grader', isCorrect: false },
        { id: 'c', text: '60 grader', isCorrect: false },
        { id: 'd', text: '15 grader', isCorrect: false },
      ],
      solution: 'I isometrisk projeksjon går de to horisontale aksene i 30° vinkel fra horisontallinjen - én 30° oppover til venstre, én 30° oppover til høyre. Den tredje aksen (høyden) er vertikal.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-3-ex-5',
      type: 'classic',
      task: 'Beskriv trinnvis hvordan du tegner en rektangulær boks (50×30×20mm) isometrisk for hånd.',
      solution: 'TEGNE ISOMETRISK BOKS:\n\n1. Tegn aksekorset: Vertikal linje + to linjer i 30° fra horisontal.\n\n2. Marker lengder: 50mm på høyre 30°-akse (lengde), 30mm på venstre 30°-akse (bredde), 20mm på vertikal (høyde).\n\n3. Tegn bunnflaten: Parallellogram med sidene 50mm og 30mm langs 30°-aksene.\n\n4. Tegn vertikale kanter: Fra alle fire hjørner av bunnen, 20mm opp.\n\n5. Tegn toppflaten: Koble toppunktene med linjer parallelle med bunnflaten.\n\n6. Marker synlige kanter tykt: De tre synlige flatene.\n\n7. Eventuelle skjulte kanter: Stiplet om nødvendig.',
    },
    {
      id: 'tif-vg1-4-3-ex-6',
      type: 'classic',
      task: 'Sammenlign isometrisk tegning med ortogonal tegning. Når foretrekkes hver type?',
      solution: 'ISOMETRISK:\n- Viser 3D-form intuitivt\n- God for visualisering og kommunikasjon\n- Egnet for ikke-tekniske lesere\n- Brukes i monteringsanvisninger, illustrasjoner\n- ULEMPE: Ikke egnet for presise målinger og produksjon\n\nORTOGONAL:\n- Viser eksakte dimensjoner og detaljer\n- Standardisert og presis\n- Brukes for produksjonstegninger\n- Viser toleranser og overflatekrav\n- ULEMPE: Krever trening for å forstå 3D-formen\n\nVALG:\n- Produksjon: Ortogonal\n- Montasjeveiledning: Isometrisk\n- Salgsmateriale: Isometrisk\n- Ingeniørberegninger: Ortogonal',
    },
  ],
  keyTerms: [
    { term: 'Isometrisk', definition: 'Projeksjon der alle tre akser har samme målforhold.' },
    { term: 'Aksekors', definition: 'De tre isometriske aksene - vertikal + to i 30°.' },
    { term: 'Ellipse', definition: 'Hvordan sirkler fremstår i isometrisk visning.' },
    { term: 'Eksplosjonstegning', definition: 'Isometrisk tegning der delene vises fra hverandre.' },
    { term: 'Rammeboks', definition: 'Ytre boks som inneholder hele objektet.' },
  ],
};

// ============================================================================
// Kapittel 4.4: 2D-DAK med tegneprogrammer
// ============================================================================

export const CHAPTER_TIF_VG1_4_4: TextbookChapter = {
  id: 'tif-vg1-4-4',
  courseId: 'tif-vg1',
  chapterNumber: '4.4',
  title: '2D-DAK med tegneprogrammer',
  description: 'Praktisk bruk av 2D-DAK-programvare for teknisk tegning og dokumentasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke programmer for 2D- og 3D-dataassistert konstruksjon (DAK) og dataassistert produksjon (DAP) til grunnleggende tegning og dokumentasjon',
  ],
  sections: [
    {
      title: 'DAK-grunnleggende',
      content: `## DAK-grunnleggende

DAK (Dataassistert Konstruksjon), engelsk CAD, er bruk av dataverktøy for å lage tekniske tegninger.

**Fordeler med DAK:**
- Rask tegning og endring
- Nøyaktig og konsistent
- Lett å kopiere og gjenbruke
- Lagdeling for organisering
- Automatisk målsetting
- Enkel deling og arkivering

**Vanlige 2D-programmer:**
- AutoCAD: Industristandard
- DraftSight: AutoCAD-kompatibel
- LibreCAD: Gratis, åpen kildekode
- Fusion 360: 2D-tegning fra 3D

**Grensesnitt:**
- Tegneområde: Der tegningen lages
- Kommandolinje: Tekstbasert input
- Verktøylinjer: Ikoner for kommandoer
- Egenskapspanel: Endre objekter
- Lag-panel: Administrere lag

**Koordinatsystemer:**
- Absolutte: Fra fast nullpunkt (0,0)
- Relative: Fra siste punkt (@x,y)
- Polare: Vinkel og avstand (@avstand<vinkel)

**Eksempel:**
Tegne linje fra (0,0) til (50,30):
- Absolutt: LINE 0,0 50,30
- Relativ: LINE 0,0 @50,30`,
    },
    {
      title: 'Grunnleggende tegnekommandoer',
      content: `## Grunnleggende tegnekommandoer

**Tegnekommandoer:**

**LINE (Linje):**
Tegner rette linjer mellom punkter.
Kommando: LINE → Velg startpunkt → Velg endepunkt(er)

**CIRCLE (Sirkel):**
Tegner sirkler.
- Senter + radius
- Senter + diameter
- 2-punkt (diameter)
- 3-punkt (gjennom tre punkt)

**ARC (Bue):**
Tegner sirkelbuer.
- 3-punkt
- Start, senter, ende
- Start, senter, vinkel

**RECTANGLE (Rektangel):**
Tegner rektangler.
- Diagonale hjørner
- Eller dimensjoner

**POLYGON (Polygon):**
Regulære flersidede figurer.
- Antall sider
- Innskrevet eller omskrevet

**PLINE (Polylinje):**
Sammenhengende linjer og buer som ett objekt.
- Kan ha varierende bredde
- Nyttig for konturer

**HATCH (Skravering):**
Fyller områder med mønster.
- Velg mønster (ANSI31 for snitt)
- Velg avgrenset område`,
    },
    {
      title: 'Redigering og modifikasjon',
      content: `## Redigering og modifikasjon

**Valg av objekter:**
- Klikk på objekt
- Vindu: Venstre-til-høyre = kun helt inne
- Kryssvindu: Høyre-til-venstre = berørt

**Redigeringskommandoer:**

**MOVE (Flytt):**
Flytter objekter.
- Velg objekter
- Angi basepunkt
- Angi ny posisjon

**COPY (Kopier):**
Kopierer objekter.
Som MOVE, men beholder original.

**ROTATE (Roter):**
Roterer objekter rundt et punkt.
- Velg objekter
- Angi rotasjonspunkt
- Angi vinkel

**MIRROR (Speil):**
Speilvender objekter.
- Velg objekter
- Angi speilakse (to punkter)
- Slett original? J/N

**SCALE (Skaler):**
Endrer størrelse.
- Velg objekter
- Angi basepunkt
- Angi skaleringsfaktor

**TRIM (Trim):**
Kutter linjer ved skjæringspunkt.

**EXTEND (Forleng):**
Forlenger linjer til kantlinje.

**OFFSET (Parallell):**
Lager parallelle kopier.
- Angi avstand
- Velg side

**FILLET (Avrunding):**
Avrunder hjørner.
- Angi radius
- Velg linjer

**CHAMFER (Fas):**
Faser hjørner.
- Angi avstander
- Velg linjer`,
    },
    {
      title: 'Lag og målsetting',
      content: `## Lag og målsetting

**Lag (Layers):**
Organiserer tegningen i logiske "transparenter".

**Typisk lag-struktur:**
- 0: Hjelpekonstruksjon
- KONTUR: Synlige kanter (tykk)
- SKJULT: Skjulte kanter (stiplet)
- SENTER: Senterlinjer (strek-prikk)
- MAL: Målsetting
- TEKST: Merknader
- HATCH: Skravering

**Lag-egenskaper:**
- Navn
- Farge
- Linjetype
- Linjetykkelse
- Synlighet (på/av)
- Frys/tine (minnebesparende)
- Låst (kan ikke redigeres)

**Målsetting (DIMENSION):**

**Lineær mål (DIMLINEAR):**
Horisontale og vertikale mål.

**Aligned (DIMALIGNED):**
Parallelt med linjen som måles.

**Radius (DIMRADIUS):**
Radius på sirkler og buer.

**Diameter (DIMDIAMETER):**
Diameter på sirkler.

**Angular (DIMANGULAR):**
Vinkelmål.

**Målestiler:**
Definer utseende:
- Piltyper
- Teksthøyde
- Toleransevisning
- Presisjon (antall desimaler)`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-4-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom absolutte og relative koordinater i DAK.',
      solution: 'ABSOLUTTE KOORDINATER: Refererer til et fast nullpunkt (origo, 0,0). Eksempel: Punkt (50,30) er 50 enheter i X og 30 enheter i Y fra origo. RELATIVE KOORDINATER: Refererer til siste punkt. Markeres med @ foran. Eksempel: @50,30 betyr 50 i X og 30 i Y fra der du er nå. BRUK: Absolutte når du vet nøyaktig posisjon i tegningen. Relative når du kjenner avstanden fra forrige punkt (vanligst i praksis).',
    },
    {
      id: 'tif-vg1-4-4-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken kommando brukes for å lage parallelle kopier med fast avstand?',
      options: [
        { id: 'a', text: 'OFFSET', isCorrect: true },
        { id: 'b', text: 'COPY', isCorrect: false },
        { id: 'c', text: 'MIRROR', isCorrect: false },
        { id: 'd', text: 'ARRAY', isCorrect: false },
      ],
      solution: 'OFFSET lager parallelle kopier av linjer, sirkler og polylinjer med en spesifisert avstand. COPY lager eksakt kopi, MIRROR speiler, ARRAY lager mønstre av kopier.',
    },
    {
      id: 'tif-vg1-4-4-ex-3',
      type: 'classic',
      task: 'Beskriv en typisk lag-struktur for en mekanisk produksjonstegning.',
      solution: 'TYPISK LAG-STRUKTUR:\n\n1. KONTUR (eller VISIBLE): Synlige kanter, tykk hel linje, svart.\n2. SKJULT (eller HIDDEN): Skjulte kanter, stiplet linje, blå eller grå.\n3. SENTER (eller CENTER): Senterlinjer, strek-prikk, rød.\n4. MAL (eller DIM): Målsetting, tynn linje, grønn.\n5. TEKST (eller NOTE): Merknader og tekst, magenta.\n6. HATCH: Skravering for snitt, cyan.\n7. KONSTR (eller CONSTRUCTION): Hjelpekonstruksjon, slettes før print.\n\nFordeler: Enkelt å skru av/på elementer, konsekvent utseende, lettere redigering.',
    },
    {
      id: 'tif-vg1-4-4-ex-4',
      type: 'multiple-choice',
      task: 'Hva gjør kommandoen TRIM?',
      options: [
        { id: 'a', text: 'Kutter linjer ved skjæringspunkt', isCorrect: true },
        { id: 'b', text: 'Forlenger linjer', isCorrect: false },
        { id: 'c', text: 'Kopierer linjer', isCorrect: false },
        { id: 'd', text: 'Roterer linjer', isCorrect: false },
      ],
      solution: 'TRIM kutter bort delen av en linje som strekker seg forbi et skjæringspunkt med en annen linje. Du velger først "kuttekanter" (linjene som definerer grensen), deretter velger du segmentene som skal fjernes.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-4-ex-5',
      type: 'classic',
      task: 'Beskriv trinnvis hvordan du tegner en enkel 2D-tegning av en rektangulær plate (100×60mm) med et Ø20mm senter-hull i DAK.',
      solution: 'TEGNE PLATE MED HULL:\n\n1. OPPSETT: Sett opp lag (KONTUR, SENTER, MÅL).\n\n2. TEGN KONTUR (lag: KONTUR):\n   RECTANGLE 0,0 100,60\n\n3. TEGN SENTERLINJE (lag: SENTER):\n   Horisontalt: LINE 40,30 60,30\n   Vertikalt: LINE 50,20 50,40\n\n4. TEGN HULL (lag: KONTUR):\n   CIRCLE senter: 50,30 radius: 10 (Ø20)\n\n5. MÅLSETT (lag: MÅL):\n   - Horisontal lengde: 100\n   - Vertikal bredde: 60\n   - Hull-avstand fra venstre: 50\n   - Hull-avstand fra bunn: 30\n   - Diameter: Ø20\n\n6. LEGG TIL TITTELFELT:\n   Innsett standardblokk med informasjon.',
    },
    {
      id: 'tif-vg1-4-4-ex-6',
      type: 'classic',
      task: 'Sammenlign manuell tegning på papir med DAK-tegning. List opp tre fordeler og én ulempe med DAK.',
      solution: 'FORDELER MED DAK:\n\n1. ENDRING: Lett å redigere uten å tegne på nytt. Feil rettes raskt. Iterativ design mulig.\n\n2. NØYAKTIGHET: Perfekte linjer, sirkler og mål. Ingen unøyaktighet fra hånd-tegning.\n\n3. GJENBRUK: Kopier deler av tegninger, bruk blokkbiblioteker, lag maler. Spart tid på gjentakende elementer.\n\nEkstra fordeler: Enkel deling (digitalt), automatisk målsetting, lagdeling, utskrift i alle størrelser.\n\nULEMPE MED DAK:\n\n1. LÆRINGSKURVE: Tar tid å lære programmet. Manuell tegning kan være raskere for helt enkle, engangs-skisser.\n\nAndre ulemper: Programvarekostnad, avhengighet av datamaskin, filformatkompabilitet.',
    },
  ],
  keyTerms: [
    { term: 'DAK/CAD', definition: 'Dataassistert Konstruksjon - tegning med dataverktøy.' },
    { term: 'Lag (Layer)', definition: 'Organisatorisk nivå som grupperer objekter.' },
    { term: 'OFFSET', definition: 'Kommando for parallelle kopier med fast avstand.' },
    { term: 'TRIM', definition: 'Kommando for å kutte linjer ved skjæringspunkt.' },
    { term: 'Polylinje', definition: 'Sammenhengende serie av linjer og buer som ett objekt.' },
    { term: 'Målestil', definition: 'Definerer utseendet på målsetting.' },
  ],
};

// ============================================================================
// Kapittel 4.5: 3D-modellering og konstruksjon
// ============================================================================

export const CHAPTER_TIF_VG1_4_5: TextbookChapter = {
  id: 'tif-vg1-4-5',
  courseId: 'tif-vg1',
  chapterNumber: '4.5',
  title: '3D-modellering og konstruksjon',
  description: 'Introduksjon til 3D-DAK-programvare for modellering av maskindeler.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke programmer for 2D- og 3D-dataassistert konstruksjon (DAK) og dataassistert produksjon (DAP) til grunnleggende tegning og dokumentasjon',
  ],
  sections: [
    {
      title: '3D-modellering grunnleggende',
      content: `## 3D-modellering grunnleggende

3D-modellering lager virtuelle objekter som kan roteres, analyseres og brukes til å generere tegninger og produksjonsdata.

**Fordeler med 3D:**
- Visualiserer design før produksjon
- Genererer 2D-tegninger automatisk
- Muliggjør analyse (styrke, kollisjoner)
- Direkte eksport til CAM/CNC
- Lettere å oppdage feil

**3D-programtyper:**

**Parametrisk modellering:**
- SolidWorks, Inventor, Fusion 360
- Designhistorikk som kan redigeres
- Relasjoner mellom features
- Best for mekaniske deler

**Direkte modellering:**
- SpaceClaim, Fusion 360 Direct
- Manipuler geometri direkte
- Mer intuitivt for rask endring
- Ingen historikk

**Overflatmodellering:**
- For komplekse kurver (bilkarosseri)
- Rhino, CATIA

**Programvare:**
- SolidWorks: Industri-foretrukket
- Fusion 360: Gratis for studenter, sky-basert
- Inventor: Autodesk, god integrering
- FreeCAD: Åpen kildekode`,
    },
    {
      title: 'Feature-basert modellering',
      content: `## Feature-basert modellering

I parametrisk 3D bygges deler opp av features - operasjoner som legger til eller fjerner materiale.

**Grunnleggende arbeidsflyt:**
1. Velg plan å skisse på
2. Tegn 2D-skisse
3. Anvend 3D-operasjon
4. Gjenta for flere features

**Skisse (Sketch):**
2D-profilen som 3D-operasjonen baseres på.
- Tegn linjer, sirkler, buer
- Legg til dimensjoner
- Legg til relasjoner (parallell, tangent)
- "Fullt bestemt" når alt er låst

**Extrude (trekk ut):**
Trekker en lukket profil ut til 3D.
- Blind: Fast lengde
- Til neste: Til neste flate
- Gjennom alle: Hele veien
- Midtplan: Halvt hver vei

**Revolve (roter):**
Roterer profilen rundt en akse.
- 360° for komplett rotasjonsdel
- Mindre vinkel for segmenter

**Sweep (sveip):**
Trekker profil langs en bane.
- For rør, kanaler, etc.

**Loft:**
Blander mellom to eller flere profiler.
- For overganger mellom former`,
    },
    {
      title: 'Modifikasjonfeatures',
      content: `## Modifikasjonsfeatures

**Cut (skjær):**
Fjerner materiale med extrude, revolve, etc.
- Extrude Cut: Hull, spor
- Revolve Cut: Innvendig dreied form

**Fillet (avrunding):**
Avrunder kanter med radius.
- Velg kanter
- Angi radius
- Konstant eller variabel

**Chamfer (fas):**
Skråflate på kanter.
- Avstand × avstand
- Avstand × vinkel

**Shell (skall):**
Huler ut en del.
- Angi veggtykkelse
- Velg åpninger

**Pattern (mønster):**
Gjentar features.
- Lineær: I rad
- Sirkulær: Rundt akse
- Speil: Over plan

**Hole Wizard:**
Standard hull-typer.
- Gjengehull (tapped)
- Forsenket (countersunk)
- Sylinderforsenket (counterbore)

**Eksempel - Bygge en aksel:**
1. Skisse: Sirkel Ø30 på frontplan
2. Extrude: 100mm
3. Skisse: Sirkel Ø25 på endeplaten
4. Extrude Cut: 20mm inn (forsenkning)
5. Chamfer: 1mm × 45° på ender
6. Fillet: R2 på overganger`,
    },
    {
      title: 'Sammenstillinger og tegninger',
      content: `## Sammenstillinger og tegninger

**Sammenstilling (Assembly):**
Sett sammen enkeltdeler til en komplett enhet.

**Mates (forbindelser):**
- Coincident: Flater sammen
- Concentric: Sirkler konsentriske
- Parallel: Flater parallelle
- Distance: Fast avstand
- Angle: Fast vinkel

**Bevegelsesanalyse:**
- Sjekk at deler beveger seg riktig
- Oppdage kollisjoner
- Animere mekanismer

**Tegningsgenerering:**

Fra 3D-modell kan 2D-tegninger genereres automatisk.

**Opprette tegning:**
1. Ny tegning fra mal
2. Velg standard visninger (front, topp, iso)
3. Legg til snitt og detaljer
4. Målsett
5. Legg til merknader

**Assosiativitet:**
- Tegningen er koblet til modellen
- Endring i modell → Tegning oppdateres

**BOM (Bill of Materials):**
Stykkliste genereres automatisk fra sammenstilling.
- Delenummer
- Beskrivelse
- Antall
- Materiale

**Eksempel - Tegning fra modell:**
1. Velg standard A3-mal
2. Dra frontvisning inn
3. Projekter toppvisning
4. Legg til snitt A-A
5. Dimensjoner legges på relevant visning
6. Legg til toleranser og overflatekrav`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-5-ex-1',
      type: 'classic',
      task: 'Forklar hva Extrude og Revolve operasjonene gjør, og gi et eksempel på del som passer for hver.',
      solution: 'EXTRUDE: Trekker en 2D-profil rett ut i én retning for å skape 3D-volum. Eksempel: En rektangulær plate - tegn rektangel som skisse, extrud til ønsket tykkelse. REVOLVE: Roterer en 2D-profil rundt en akse for å skape rotasjonssymmetrisk 3D-volum. Eksempel: En dreid aksel - tegn halve tverrsnittsprofilen, revolve 360° rundt senterlinjen. Tommelregel: Extrude for prismatiske deler, Revolve for dreiede deler.',
    },
    {
      id: 'tif-vg1-4-5-ex-2',
      type: 'multiple-choice',
      task: 'Hva er fordelen med parametrisk 3D-modellering?',
      options: [
        { id: 'a', text: 'Designhistorikk kan redigeres, relasjoner mellom features', isCorrect: true },
        { id: 'b', text: 'Modellene er mindre i filstørrelse', isCorrect: false },
        { id: 'c', text: 'Raskere å lære for nybegynnere', isCorrect: false },
        { id: 'd', text: 'Kan bare brukes for enkle deler', isCorrect: false },
      ],
      solution: 'Parametrisk modellering lagrer designhistorikken slik at tidligere operasjoner kan redigeres. Dimensjoner og relasjoner mellom features oppdateres automatisk ved endringer. Dette gjør iterativ design effektiv - endre én dimensjon og hele modellen oppdateres.',
    },
    {
      id: 'tif-vg1-4-5-ex-3',
      type: 'classic',
      task: 'Beskriv trinnvis hvordan du modellerer en enkel flens (sylinder Ø80×10mm med 4 stk Ø10mm hull på Ø60 deleseringscirkel) i 3D.',
      solution: 'MODELLERE FLENS:\n\n1. SKISSE 1 (frontplan):\n   - Tegn sirkel Ø80mm fra origo\n\n2. EXTRUDE:\n   - Trekk ut 10mm\n\n3. SKISSE 2 (på toppen av flensen):\n   - Tegn sirkel Ø60mm (konstruksjonslinje)\n   - Tegn sirkel Ø10mm på deling sirkelen\n\n4. EXTRUDE CUT:\n   - Kutt gjennom hele (Through All)\n\n5. CIRCULAR PATTERN:\n   - Velg hullet\n   - Akse: Senterlinjen av flensen\n   - Antall: 4\n   - Vinkel: 360° (90° mellom hvert)\n\n6. FILLET (valgfritt):\n   - Avrund ytterkanter R2mm',
    },
    {
      id: 'tif-vg1-4-5-ex-4',
      type: 'multiple-choice',
      task: 'Hva brukes Mates til i en sammenstilling?',
      options: [
        { id: 'a', text: 'Definere geometriske relasjoner mellom deler', isCorrect: true },
        { id: 'b', text: 'Lage kopier av deler', isCorrect: false },
        { id: 'c', text: 'Endre fargen på deler', isCorrect: false },
        { id: 'd', text: 'Slette deler fra sammenstillingen', isCorrect: false },
      ],
      solution: 'Mates (forbindelser) definerer hvordan deler er posisjonert i forhold til hverandre. Eksempler: Coincident (flater sammen), Concentric (hull og aksel på linje), Parallel, Distance, Angle. Mates begrenser frihetsgradene og definerer hvordan sammenstillingen fungerer.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-5-ex-5',
      type: 'classic',
      task: 'Forklar arbeidsflyten fra 3D-modell til ferdig produksjonstegning.',
      solution: 'FRA 3D TIL TEGNING:\n\n1. MODELLERING: Bygg 3D-modellen med alle features.\n\n2. OPPRETT TEGNING: Velg tegningsmal med riktig format og tittelfelt.\n\n3. STANDARD VISNINGER: Plasser frontvisning, projekter topp- og sidevisninger.\n\n4. ISOMETRISK: Legg til isometrisk visning for oversikt.\n\n5. SNITT: Definer og plasser nødvendige snitt for indre detaljer.\n\n6. DETALJVISNINGER: Forstørr små områder om nødvendig.\n\n7. MÅLSETTING: Plasser mål på de mest relevante visningene.\n\n8. TOLERANSER: Legg til toleranser på kritiske mål.\n\n9. OVERFLATEKRAV: Angi overflatefinish.\n\n10. MERKNADER: Legg til tekst for spesialkrav.\n\n11. KONTROLL: Sjekk at all nødvendig informasjon er med.\n\nAssociativitet: Endringer i 3D-modellen oppdaterer tegningen automatisk.',
    },
    {
      id: 'tif-vg1-4-5-ex-6',
      type: 'classic',
      task: 'Sammenlign å lage produksjonstegninger manuelt med å generere dem fra 3D-modell. Diskuter fordeler og ulemper.',
      solution: 'FRA 3D-MODELL:\nFordeler:\n- Raskere når modellen finnes\n- Alltid oppdatert (assosiativitet)\n- Konsistent mellom visninger\n- Mindre feil\n- Enkelt å lage flere varianter\n\nUlemper:\n- Krever 3D-modell først\n- Læringsterskel for 3D-program\n- Kan gi unødvendige detaljer\n\nMANUELL 2D:\nFordeler:\n- Raskere for enkle deler\n- Mer kontroll over detaljer\n- Ingen 3D-modell nødvendig\n\nUlemper:\n- Oppdatering krever ny tegning\n- Inkonsistens mellom visninger mulig\n- Mer arbeid for komplekse deler\n\nKONKLUSJON: 3D-baserte tegninger er standard i moderne industri. Manuell 2D brukes for enkle skisser eller når 3D ikke finnes.',
    },
  ],
  keyTerms: [
    { term: 'Parametrisk', definition: 'Modellering der features og dimensjoner kan redigeres.' },
    { term: 'Feature', definition: 'Operasjon som legger til eller fjerner materiale.' },
    { term: 'Extrude', definition: 'Trekker 2D-profil ut til 3D.' },
    { term: 'Revolve', definition: 'Roterer 2D-profil rundt akse.' },
    { term: 'Mate', definition: 'Geometrisk relasjon mellom deler i sammenstilling.' },
    { term: 'Assosiativitet', definition: 'Kobling mellom modell og tegning som oppdateres.' },
  ],
};

// ============================================================================
// Kapittel 4.6: Toleranser og overflatesymboler
// ============================================================================

export const CHAPTER_TIF_VG1_4_6: TextbookChapter = {
  id: 'tif-vg1-4-6',
  courseId: 'tif-vg1',
  chapterNumber: '4.6',
  title: 'Toleranser og overflatesymboler',
  description: 'Forståelse av dimensjonstoleranser, geometriske toleranser og overflateruhet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive arbeidsoppgaver innenfor produksjon og tjenester basert på tegningsunderlag og prosedyrer',
    'tolke informasjon ved hjelp av digitale hjelpemidler og relevante tabeller for å utføre arbeidsoppgaver innenfor produksjon og tjenesteyting',
  ],
  sections: [
    {
      title: 'Dimensjonstoleranser',
      content: `## Dimensjonstoleranser

Toleranse er tillatt avvik fra nominell dimensjon. Ingen produksjon er perfekt, så toleranser definerer akseptable grenser.

**Hvorfor toleranser?**
- Sikre at deler passer sammen
- Definere kvalitetskrav
- Balansere funksjon mot kostnad
- Tettere toleranse = dyrere produksjon

**Toleranseangivelse:**

**Direkte toleranse:**
25 ±0,1 eller 25 +0,2/-0,1
- Øvre avvik: +0,2 → maks 25,2mm
- Nedre avvik: -0,1 → min 24,9mm

**ISO-toleranser:**
Ø25H7 eller Ø25h6
- Bokstav: Posisjon av toleransefeltet
- Tall: Størrelse på toleransen (IT-grad)

**Allmenne toleranser (ISO 2768):**
Gjelder når ingen toleranse er angitt.
- f (fin)
- m (medium)
- c (grov)

Eksempel: ISO 2768-m i tittelfelt betyr at alle umerkede mål har medium toleranse.

**Kjedning av toleranser:**
Ved kjedemålsetting akkumuleres toleranser.
Bruk parallellmålsetting for kritiske avstander.`,
    },
    {
      title: 'Geometriske toleranser',
      content: `## Geometriske toleranser (GD&T)

Geometriske toleranser kontrollerer form, orientering og posisjon utover dimensjoner.

**Formtoleranser:**
- ⌓ Retthet: Hvor rett en linje er
- ⏥ Flathet: Hvor flat en flate er
- ○ Rundhet: Tverrsnitt av sirkel
- ⌭ Sylinderform: Kombinert rundhet + retthet

**Orienteringstoleranser:**
- ⊥ Vinkelretthet: 90° til referanse
- ∥ Parallellitet: Parallell med referanse
- ∠ Vinkelhet: Vinkel til referanse

**Posisjonstoleranser:**
- ⌖ Posisjon: Nøyaktig plassering
- ◎ Konsistrisitet: Hull på samme akse
- ⌯ Symmetri: Symmetrisk om midtplan

**Løpning (runout):**
- ↗ Sirkulær løpning: Roterer rundt akse
- ⇢ Total løpning: Hele lengden

**Toleranseramme:**
⎣ symbol | toleranse | referanse(r) ⎤

Eksempel: ⎣ ⌖ | Ø0,1 | A | B ⎤
Posisjon innen Ø0,1mm relativt til referanse A og B.

**Referanse (datum):**
- A, B, C markeres i firkant
- Primær, sekundær, tertiær for låsing av frihetsgrader`,
    },
    {
      title: 'Overflateruhet',
      content: `## Overflateruhet

Overflateruhet beskriver overflatens mikrogeometri - de små ujevnhetene fra produksjonen.

**Hvorfor viktig?**
- Friksjon og slitasje
- Tetning
- Utmattingsstyrke
- Utseende
- Adhesjon for maling

**Måleparametere:**

**Ra (aritmetisk middelverdi):**
Gjennomsnittet av avvikene fra midtlinjen.
Mest brukt parameter.

**Rz (midlere ruhetsdybde):**
Gjennomsnitt av høyde fra dal til topp over 5 prøvelengder.
Mer sensitiv for høye topper.

**Rt (total ruhetsdybde):**
Største avstand fra høyeste topp til dypeste dal.

**Typiske Ra-verdier:**

| Prosess | Ra (µm) |
|---------|---------|
| Sandstøping | 12-25 |
| Fresing (grov) | 3-12 |
| Dreiing | 1,6-6,3 |
| Sliping | 0,2-1,6 |
| Polering | 0,05-0,4 |

**Symbolelementer:**
- Grunnlinje: Basic symbol
- Sirkel: Materialavtaking forbudt
- Streke: Materialavtaking påkrevd
- Verdi: Ra-krav

**Eksempel:**
√ 1,6 = Overflateruhet Ra maks 1,6µm

**Plassering:**
På flaten eller med henvisningslinje.`,
    },
    {
      title: 'Lese og bruke toleranser',
      content: `## Lese og bruke toleranser

**Fra tegning til produksjon:**

1. **Les nominell dimensjon**
2. **Finn toleranse:**
   - Direkte på målet
   - ISO-kode (slå opp)
   - Allmenn toleranse (tittelfelt)
3. **Beregn grenseverdier:**
   - Maksimum = nominell + øvre avvik
   - Minimum = nominell + nedre avvik
4. **Velg produksjonsmetode:**
   - Kan prosessen holde toleransen?
5. **Mål og kontroller:**
   - Måleverktøy med nok presisjon

**ISO-tabelloppslag:**
For Ø25H7:
1. Finn H7 i tabell for hull
2. Finn Ø25 i kolonnen
3. Les av: +0,021/0

**Kostnadssammenheng:**
Tettere toleranse koster mer:
- IT14-IT12: Grov maskinering
- IT11-IT9: Normal maskinering
- IT8-IT6: Presisjons-maskinering
- IT5-IT3: Sliping, honing

**Eksempel - Tolke tegning:**
Mål på tegning: Ø30H7/g6
- Hull H7: +0,021/0 → 30,000 - 30,021mm
- Aksel g6: -0,007/-0,020 → 29,980 - 29,993mm
- Dette gir spillepassning
- Minimum spill: 0,007mm
- Maksimum spill: 0,041mm`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-6-ex-1',
      type: 'classic',
      task: 'Et mål er angitt som 50 +0,1/-0,05mm. Beregn maksimum og minimum akseptable dimensjoner.',
      solution: 'Nominell dimensjon: 50mm\nØvre avvik: +0,1mm\nNedre avvik: -0,05mm\n\nMaksimum = 50 + 0,1 = 50,10mm\nMinimum = 50 - 0,05 = 49,95mm\n\nToleranseområde = 50,10 - 49,95 = 0,15mm\n\nAlle deler med mål mellom 49,95mm og 50,10mm er godkjent.',
    },
    {
      id: 'tif-vg1-4-6-ex-2',
      type: 'multiple-choice',
      task: 'Hva beskriver Ra-verdien?',
      options: [
        { id: 'a', text: 'Aritmetisk middelverdi av overflateruheten', isCorrect: true },
        { id: 'b', text: 'Maksimal overflatehøyde', isCorrect: false },
        { id: 'c', text: 'Dimensjonstoleranse', isCorrect: false },
        { id: 'd', text: 'Geometrisk toleranse', isCorrect: false },
      ],
      solution: 'Ra (Roughness average) er den aritmetiske middelverdien av overflatepunktenes avvik fra midtlinjen, målt over en prøvelengde. Det er den mest brukte parameteren for overflateruhet.',
    },
    {
      id: 'tif-vg1-4-6-ex-3',
      type: 'classic',
      task: 'Forklar hva geometriske toleranser kontrollerer som dimensjonstoleranser ikke dekker.',
      solution: 'Geometriske toleranser kontrollerer: 1) FORM: Retthet, flathet, rundhet - selv om en del har riktig dimensjon, kan formen være bølgete eller skjev. 2) ORIENTERING: Vinkelretthet, parallellitet - forhold mellom flater. 3) POSISJON: Nøyaktig plassering av features, konsistrisitet av hull. 4) LØPNING: Hvordan en roterende del oppfører seg. Dimensjonstoleranser forteller kun hvor stor noe er, ikke hvordan formen er eller hvor nøyaktig det er plassert.',
    },
    {
      id: 'tif-vg1-4-6-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken IT-grad brukes typisk for presisjonsmaskinerting?',
      options: [
        { id: 'a', text: 'IT6-IT8', isCorrect: true },
        { id: 'b', text: 'IT14-IT12', isCorrect: false },
        { id: 'c', text: 'IT1-IT3', isCorrect: false },
        { id: 'd', text: 'IT18-IT16', isCorrect: false },
      ],
      solution: 'IT6-IT8 er typiske toleransegrader for presisjonsmaskinering. IT14-IT12 er for grov maskinering. IT5 og lavere krever sliping eller andre presisjonsprosesser og er dyrere.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-4-6-ex-5',
      type: 'classic',
      task: 'En tegning viser Ø40H7/h6. Bruk tabellverdier (H7: +0,025/0, h6: 0/-0,016) til å beregne spillområdet.',
      solution: 'BEREGNING AV SPILL:\n\nHULL H7 på Ø40:\n- Maks: 40,000 + 0,025 = 40,025mm\n- Min: 40,000 + 0 = 40,000mm\n\nAKSEL h6 på Ø40:\n- Maks: 40,000 + 0 = 40,000mm\n- Min: 40,000 - 0,016 = 39,984mm\n\nSPILL:\n- Minimum spill = Minste hull - Største aksel\n  = 40,000 - 40,000 = 0,000mm\n- Maksimum spill = Største hull - Minste aksel\n  = 40,025 - 39,984 = 0,041mm\n\nKONKLUSJON: H7/h6 gir en spillepassning med spill fra 0 til 0,041mm. Ved minimum kan det være "tangering" - akkurat passende.',
    },
    {
      id: 'tif-vg1-4-6-ex-6',
      type: 'classic',
      task: 'Diskuter sammenhengen mellom toleranse, produksjonsmetode og kostnad. Gi eksempler.',
      solution: 'SAMMENHENG TOLERANSE-KOSTNAD:\n\nGROVE TOLERANSER (IT11-IT14):\n- Metoder: Grov fresing, dreiing, boring\n- Lav kostnad\n- Eksempel: Ikke-kritiske dimensjoner, avstander som ikke passer med andre deler\n\nNORMALE TOLERANSER (IT8-IT10):\n- Metoder: Standard maskinering\n- Moderat kostnad\n- Eksempel: Generelle maskindeler, pasningsflater\n\nTETTE TOLERANSER (IT6-IT7):\n- Metoder: Presisjonsmaskinering, sliping\n- Høy kostnad\n- Eksempel: Lagerseter, presisjonshull\n\nMEGET TETTE (IT5 og bedre):\n- Metoder: Sliping, honing, lapping\n- Meget høy kostnad\n- Eksempel: Målekalibrer, hydraulikkkomponenter\n\nTOMMMELREGEL: Spesifiser bare så tett toleranse som funksjonen krever. Unødvendig tette toleranser øker kostnaden betydelig uten å forbedre produktet.',
    },
  ],
  keyTerms: [
    { term: 'Toleranse', definition: 'Tillatt avvik fra nominell dimensjon.' },
    { term: 'IT-grad', definition: 'ISO-klassifisering av toleransestørrelse.' },
    { term: 'Geometrisk toleranse', definition: 'Kontroll av form, orientering og posisjon.' },
    { term: 'Ra', definition: 'Aritmetisk middelverdi av overflateruhet.' },
    { term: 'Referanse (datum)', definition: 'Flate brukt som referanse for geometriske toleranser.' },
    { term: 'Allmenn toleranse', definition: 'Standard toleranse når ingen er spesifisert.' },
  ],
};

// ============================================================================
// Eksport av del 4 kapitler
// ============================================================================

export const TIF_VG1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TIF_VG1_4_1,
  CHAPTER_TIF_VG1_4_2,
  CHAPTER_TIF_VG1_4_3,
  CHAPTER_TIF_VG1_4_4,
  CHAPTER_TIF_VG1_4_5,
  CHAPTER_TIF_VG1_4_6,
];

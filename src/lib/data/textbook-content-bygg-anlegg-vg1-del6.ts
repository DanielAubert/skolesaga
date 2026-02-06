/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Del 6 (Kapittel 39-45)
 * Avsluttende temaer og oppsummering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 39: Riving og sanering
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_39: TextbookChapter = {
  id: 'bygg-anlegg-vg1-39',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '39',
  title: 'Riving og sanering',
  description: 'Sikker riving av bygninger og håndtering av farlige materialer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velge ut og bruke personlig verneutstyr og vurdere konsekvenser av feilbruk',
    'oppbevare, beregne og behandle materialer på en miljøvennlig, faglig og økonomisk måte',
  ],
  sections: [
    {
      title: 'Riving av bygninger',
      content: `## Riving av bygninger

Riving krever nøye planlegging og sikkerhet.

**Typer riving:**
- **Totalriving:** Hele bygningen fjernes
- **Delvis riving:** Deler av bygningen beholdes
- **Selektiv riving:** Nøye demontering for gjenbruk

**Planlegging:**
- Kartlegg farlige materialer
- Søk rivetillatelse
- Lag rivingsplan med HMS
- Planlegg avfallshåndtering

**Sikkerhetstiltak:**
- Avsperring av området
- Støvdemping (vanning)
- Støtdemping ved fall
- Stabil konstruksjon under arbeid
- Fortløpende vurdering av stabilitet`,
    },
    {
      title: 'Farlige materialer',
      content: `## Farlige materialer

Eldre bygninger kan inneholde helsefarlige stoffer.

**Asbest:**
- Brukt 1920-1980
- Isolasjon, plater, gulvbelegg
- Kreft og lungeskader
- Må kartlegges og saneres av sertifisert

**PCB:**
- Brukt 1950-1980
- Fugemasser, maling, betong
- Hormonforstyrrende, kreftfremkallende
- Spesialavfall

**Bly:**
- Eldre maling, vannrør
- Nerveskader, nyreproblemer
- Må behandles som farlig avfall

**Kvikksølv:**
- Gamle termometre, lysrør
- Svært giftig
- Spesialavfall

**Kartlegging:**
Før riving må sertifisert firma kartlegge farlige stoffer. Prøver tas og analyseres. Saneringsplan lages.`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-39-ex-1', task: 'Hva er forskjellen på totalriving og selektiv riving?', solution: 'Totalriving: Hele bygningen rives ned for å fjerne den. Selektiv riving: Bygningen demonteres nøye del for del slik at materialer kan gjenbrukes eller gjenvinnes.' },
    { id: 'bygg-anlegg-vg1-39-ex-2', task: 'Nevn tre farlige materialer som kan finnes i eldre bygninger.', solution: 'Farlige materialer: 1) Asbest - i isolasjon, plater, gulvbelegg. 2) PCB - i fugemasser og maling. 3) Bly - i maling og vannrør. 4) Kvikksølv - i termometre og lysrør.' },
    { id: 'bygg-anlegg-vg1-39-ex-3', task: 'Hvorfor må asbest kartlegges før riving?', solution: 'Asbest er kreftfremkallende når fibrene pustes inn. Kartlegging sikrer at asbestholdig materiale håndteres av sertifiserte firmaer med riktig verneutstyr, og at det ikke spres til omgivelsene.' },
    { id: 'bygg-anlegg-vg1-39-ex-4', task: 'Hvilke tiltak gjøres for sikkerhet ved riving?', solution: 'Sikkerhetstiltak: Avsperring av området, støvdemping med vanning, sikring mot fallende materialer, kontroll av konstruksjonens stabilitet, personlig verneutstyr, fortløpende risikovurdering.' },
    { id: 'bygg-anlegg-vg1-39-ex-5', task: 'Hva må gjøres før riving av en bygning fra 1970?', solution: 'Bygninger fra 1970 må kartlegges for farlige materialer (asbest, PCB) av sertifisert firma. Prøver analyseres, saneringsplan lages. Rivetillatelse søkes. Avfallsplan utarbeides. Først da kan riving starte.' },
    { id: 'bygg-anlegg-vg1-39-ex-6', task: 'Hva er PCB, og hvor kan det finnes?', solution: 'PCB er en gruppe kjemikalier som er hormonforstyrrende og kreftfremkallende. Det ble brukt 1950-1980 i fugemasser (særlig i elementbygg), maling, betong tilsatt PCB. Det er spesialavfall og må håndteres av godkjent firma.' },
    { id: 'bygg-anlegg-vg1-39-ex-7', task: 'Hvordan håndteres asbestholdig materiale som blir oppdaget under riving?', solution: 'Ved funn av asbest: 1) Stopp arbeidet umiddelbart. 2) Avsperr området. 3) Varsle arbeidsleder og myndigheter. 4) Sertifisert saneringsfirma tilkalles. 5) De fjerner asbestmaterialet med spesialutstyr. 6) Materiale pakkes og leveres godkjent mottak som spesialavfall.' },
  ],
  keyTerms: [
    { term: 'Selektiv riving', definition: 'Nøye demontering av bygning for gjenbruk av materialer.' },
    { term: 'Asbest', definition: 'Farlig fiber brukt i byggematerialer 1920-1980, kreftfremkallende.' },
    { term: 'PCB', definition: 'Giftig stoff brukt i fugemasser og maling 1950-1980.' },
    { term: 'Sanering', definition: 'Fjerning av forurensning eller farlige materialer.' },
  ],
};

// ============================================================================
// Kapittel 40: Universell utforming
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_40: TextbookChapter = {
  id: 'bygg-anlegg-vg1-40',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '40',
  title: 'Universell utforming',
  description: 'Tilgjengelighet og universell utforming i bygg.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
  ],
  sections: [
    {
      title: 'Prinsipper for universell utforming',
      content: `## Prinsipper for universell utforming

Universell utforming betyr at bygg skal kunne brukes av alle.

**Definisjon:**
Utforming av produkter og omgivelser slik at de kan brukes av alle mennesker, i så stor utstrekning som mulig, uten behov for tilpasning eller spesiell utforming.

**7 prinsipper:**
1. Like muligheter for bruk
2. Fleksibel bruk
3. Enkel og intuitiv bruk
4. Forståelig informasjon
5. Toleranse for feil
6. Lav fysisk anstrengelse
7. Størrelse og plass for tilgang og bruk

**Hvem gjelder det?**
- Rullestolbrukere
- Synshemmede
- Hørselshemmede
- Eldre med redusert mobilitet
- Foreldre med barnevogn
- Personer med midlertidig skade`,
    },
    {
      title: 'Krav i TEK17',
      content: `## Krav i TEK17

TEK17 stiller konkrete krav til tilgjengelighet.

**Atkomst:**
- Stigning maks 1:20 på uteareal
- Trinnfri atkomst til hovedinngang
- Kontrast mellom flater

**Inngangsparti:**
- Dørbredde min 90 cm (0,9 m)
- Terskel maks 25 mm
- Trinnfritt nivå

**Innvendige dører:**
- Bredde min 80 cm
- Betjeningshøyde 80-110 cm

**Trapper:**
- Rekkverk begge sider
- Kontrastmarkering på trinn
- Repos ved høydeforskjell over 3 m

**Heis:**
- Obligatorisk fra 3 etasjer
- Størrelse for rullestol

**Bad/WC:**
- Snusirkel Ø150 cm
- Håndtak ved toalett
- Kontrastfarger`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-40-ex-1', task: 'Hva menes med universell utforming?', solution: 'Universell utforming betyr at bygg og produkter skal utformes slik at de kan brukes av alle mennesker, uten behov for spesialtilpasning. Dette inkluderer rullestolbrukere, synshemmede, eldre og andre med funksjonsnedsettelser.' },
    { id: 'bygg-anlegg-vg1-40-ex-2', task: 'Hva er minimum dørbredde for hovedinngang ifølge TEK17?', solution: 'Minimum dørbredde for hovedinngang er 90 cm (0,9 m) for å gi tilgang for rullestol.' },
    { id: 'bygg-anlegg-vg1-40-ex-3', task: 'Nevn tre grupper som har nytte av universell utforming.', solution: 'Grupper som har nytte: 1) Rullestolbrukere, 2) Synshemmede, 3) Eldre med redusert mobilitet. Andre: Hørselshemmede, foreldre med barnevogn, personer med midlertidig skade.' },
    { id: 'bygg-anlegg-vg1-40-ex-4', task: 'Hva er maksimal stigning på tilkomstvei utendørs?', solution: 'Maksimal stigning på uteareal er 1:20 (5%), som betyr at det stiger 1 meter for hver 20 meter lengde.' },
    { id: 'bygg-anlegg-vg1-40-ex-5', task: 'Hva er kravet til snusirkel på tilgjengelig bad?', solution: 'Det skal være snusirkel med diameter 150 cm (Ø150) for at en rullestol skal kunne snu.' },
    { id: 'bygg-anlegg-vg1-40-ex-6', task: 'Fra hvor mange etasjer er heis obligatorisk?', solution: 'Heis er obligatorisk fra 3 etasjer for å sikre tilgang for personer som ikke kan bruke trapper.' },
    { id: 'bygg-anlegg-vg1-40-ex-7', task: 'Hvorfor skal det være kontrastmarkering på trappetrinn?', solution: 'Kontrastmarkering på trinn hjelper synshemmede å se hvor trinnene starter og slutter. Det reduserer risikoen for å snuble eller falle fordi kanten på hvert trinn blir tydelig synlig.' },
  ],
  keyTerms: [
    { term: 'Universell utforming', definition: 'Design som gjør bygg brukbare for alle uten spesialtilpasning.' },
    { term: 'Snusirkel', definition: 'Areal for å snu rullestol, diameter 150 cm.' },
    { term: 'Trinnfri atkomst', definition: 'Inngang uten trappetrinn eller høye terskler.' },
  ],
};

// ============================================================================
// Kapittel 41: Akustikk og lydtekniske løsninger
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_41: TextbookChapter = {
  id: 'bygg-anlegg-vg1-41',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '41',
  title: 'Akustikk og lydtekniske løsninger',
  description: 'Grunnleggende akustikk og lyddemping i bygninger.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge og bygge en konstruksjon'],
  sections: [
    {
      title: 'Grunnleggende akustikk',
      content: `## Grunnleggende akustikk

Akustikk handler om lyd i rom og konstruksjoner.

**Lydbegreper:**
- **Frekvens (Hz):** Antall svingninger per sekund, høy/lav tone
- **Lydnivå (dB):** Styrke på lyden
- **Etterklang:** Hvor lenge lyden henger i rommet

**Lydtyper:**
- **Luftlyd:** Lyd som går gjennom luften (tale, musikk)
- **Trinnlyd:** Lyd fra skritt og slag via konstruksjonen
- **Strukturlyd:** Vibrasjoner som overføres i materialer

**Krav i boliger (TEK17):**
- Luftlydisolasjon mellom boliger: min 55 dB
- Trinnlydnivå mellom boliger: maks 53 dB`,
    },
    {
      title: 'Lydtekniske løsninger',
      content: `## Lydtekniske løsninger

Ulike tiltak for bedre lydmiljø.

**Lydabsorpsjon (innvendig):**
- Himlingplater med hull
- Tekstiler og tepper
- Akustikkpaneler
- Reduserer etterklang og støy i rommet

**Lydisolasjon (mellom rom):**
- Tunge materialer (betong, gips)
- Separate konstruksjoner
- Luftspalter
- Lydbro-fri montering

**Trinnlyddemping:**
- Mykt belegg
- Trinnlyddempende matter
- Flytende gulv

**Typiske feil:**
- Lydbroer via vegger og tak
- Hull og spalter i konstruksjonen
- Rør og kanaler som overfører lyd
- Mangelfull tetting`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-41-ex-1', task: 'Hva er forskjellen på luftlyd og trinnlyd?', solution: 'Luftlyd er lyd som går gjennom luften, som tale og musikk. Trinnlyd er lyd fra skritt og slag som overføres via konstruksjonen (gulv, vegger).' },
    { id: 'bygg-anlegg-vg1-41-ex-2', task: 'Hva er kravet til luftlydisolasjon mellom boliger i TEK17?', solution: 'Minimum 55 dB luftlydisolasjon mellom boliger ifølge TEK17.' },
    { id: 'bygg-anlegg-vg1-41-ex-3', task: 'Nevn to tiltak for å redusere trinnlyd.', solution: 'Tiltak for trinnlyd: 1) Trinnlyddempende matte under gulv, 2) Mykt gulvbelegg (tepper, vinyl), 3) Flytende gulvkonstruksjon.' },
    { id: 'bygg-anlegg-vg1-41-ex-4', task: 'Hva er en lydbro?', solution: 'En lydbro er en forbindelse som overfører lyd mellom rom gjennom konstruksjonen, for eksempel via vegger, rør, eller der konstruksjoner er i direkte kontakt.' },
    { id: 'bygg-anlegg-vg1-41-ex-5', task: 'Hvordan bidrar tunge materialer til lydisolasjon?', solution: 'Tunge materialer som betong og gips demper luftlyd fordi massen er vanskeligere å sette i bevegelse. Jo tyngre konstruksjon, jo bedre lydisolasjon.' },
    { id: 'bygg-anlegg-vg1-41-ex-6', task: 'Hva er forskjellen på lydabsorpsjon og lydisolasjon?', solution: 'Lydabsorpsjon tar opp lyd i rommet og reduserer etterklang - gjør det behageligere å oppholde seg. Lydisolasjon hindrer lyd fra å gå mellom rom - gir ro fra naboen.' },
    { id: 'bygg-anlegg-vg1-41-ex-7', task: 'Nevn tre typiske feil som svekker lydisolasjonen.', solution: 'Typiske feil: 1) Lydbroer via gjennomgående vegger og tak, 2) Hull og spalter i konstruksjonen, 3) Rør og ventilasjonskanaler som overfører lyd, 4) Mangelfull tetting rundt dører og vinduer.' },
  ],
  keyTerms: [
    { term: 'Luftlyd', definition: 'Lyd som overføres gjennom luften (tale, musikk).' },
    { term: 'Trinnlyd', definition: 'Lyd fra skritt og slag som overføres via konstruksjonen.' },
    { term: 'Lydbro', definition: 'Forbindelse som overfører lyd mellom rom gjennom konstruksjonen.' },
    { term: 'Lydabsorpsjon', definition: 'Materialer som tar opp lyd og reduserer etterklang.' },
  ],
};

// ============================================================================
// Kapittel 42: Elektrisitet for byggfag
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_42: TextbookChapter = {
  id: 'bygg-anlegg-vg1-42',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '42',
  title: 'Elektrisitet for byggfag',
  description: 'Grunnleggende elkunnskap og samarbeid med elektriker.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge og bygge en konstruksjon'],
  sections: [
    {
      title: 'Grunnleggende elektrisitet',
      content: `## Grunnleggende elektrisitet

Bygningsarbeidere må forstå grunnleggende elektrisitet for sikkerhet og samarbeid.

**Begreper:**
- **Spenning (Volt):** Elektrisk trykk, 230V i Norge
- **Strøm (Ampere):** Mengde elektrisitet som flyter
- **Effekt (Watt):** Strøm × spenning
- **Jording:** Beskyttelse mot elektrisk støt

**Sikkerhet:**
- Kun elektrikere skal jobbe på strømførende utstyr
- Sjekk at strømmen er slått av før arbeid
- Respekter sikkerhetssoner rundt el-tavler
- Bruk godkjent elektrisk verktøy

**Varselskilter:**
- Høyspenning
- Elektrisk fare
- Ikke berør`,
    },
    {
      title: 'Samarbeid med elektriker',
      content: `## Samarbeid med elektriker

God koordinering mellom fag er viktig.

**Utsparinger:**
- Elektriker angir hvor bokser skal være
- Tømrer lager utsparinger i stenderverk
- Elektrikerbokser i vegger
- Gjennomføringer i dekker

**Føringsvei:**
- Rør i betong før støping
- Kanaler i himling
- Kabelstiger i tekniske rom

**Timing:**
- El-rør før betongstøping
- Kabler etter isolasjon, før gipsing
- Armaturer etter maling

**Branntetting:**
- Gjennomføringer må branntettes
- Elektriker melder fra om plassering
- Bygningsarbeider tetter eller elektriker`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-42-ex-1', task: 'Hva er spenningen i vanlige stikkontakter i Norge?', solution: 'Spenningen er 230 Volt i vanlige stikkontakter i Norge.' },
    { id: 'bygg-anlegg-vg1-42-ex-2', task: 'Hvorfor er det viktig å koordinere med elektriker?', solution: 'Koordinering er viktig for at utsparinger og føringsvei skal være klare når elektriker trenger dem, at kabler trekkes før veggen lukkes, og at gjennomføringer branntettes korrekt.' },
    { id: 'bygg-anlegg-vg1-42-ex-3', task: 'Hvem har lov til å jobbe på elektriske anlegg?', solution: 'Kun autoriserte elektrikere har lov til å jobbe på strømførende elektriske anlegg. Bygningsarbeidere skal ikke berøre el-utstyr.' },
    { id: 'bygg-anlegg-vg1-42-ex-4', task: 'Når må el-rør støpes inn i betong?', solution: 'El-rør må legges i forskalingen før betongstøping. Etter støping er det for sent å få rørene på plass i betongen.' },
    { id: 'bygg-anlegg-vg1-42-ex-5', task: 'Hva er jording, og hvorfor er det viktig?', solution: 'Jording er en beskyttelse som leder eventuell feilstrøm direkte til jord i stedet for gjennom en person. Det beskytter mot elektrisk støt hvis det oppstår feil i utstyret.' },
    { id: 'bygg-anlegg-vg1-42-ex-6', task: 'Hva gjør du hvis du oppdager en skadet kabel på byggeplass?', solution: 'Rør ikke kabelen. Varsle elektriker eller arbeidsleder umiddelbart. Avsperr området om nødvendig. Kun elektriker skal undersøke og reparere skadet kabel.' },
    { id: 'bygg-anlegg-vg1-42-ex-7', task: 'Hvorfor må elektriske gjennomføringer i brannvegg branntettes?', solution: 'Gjennomføringer skaper hull i brannveggen. Uten branntetting kan flammer og røyk spre seg gjennom kabelføringer ved brann, og brannveggen mister sin funksjon.' },
  ],
  keyTerms: [
    { term: 'Spenning', definition: 'Elektrisk trykk målt i Volt (V).' },
    { term: 'Jording', definition: 'Beskyttelse som leder feilstrøm trygt til jord.' },
    { term: 'Utsparinger', definition: 'Hull eller rom i konstruksjonen for elektriske bokser.' },
  ],
};

// ============================================================================
// Kapittel 43: Rørleggerarbeid for byggfag
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_43: TextbookChapter = {
  id: 'bygg-anlegg-vg1-43',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '43',
  title: 'Rørleggerarbeid for byggfag',
  description: 'Grunnleggende om rør og VVS for byggfag.',
  estimatedMinutes: 45,
  competenceGoals: ['planlegge og bygge en konstruksjon'],
  sections: [
    {
      title: 'VVS-systemer',
      content: `## VVS-systemer

VVS står for Varme, Ventilasjon og Sanitær.

**Sanitæranlegg:**
- Kaldt vann inn
- Varmt vann fra bereder
- Avløp ut
- Sluk i våtrom

**Varmeanlegg:**
- Radiator eller gulvvarme
- Vannbåren eller elektrisk
- Rør for vannbåren

**Ventilasjon:**
- Tilluft og avtrekk
- Kanaler i tak/vegg
- Aggregat med varmegjenvinning

**Rørtyper:**
- PEX (plast) - vannledning
- Kobber - varme og vann
- PP/PVC - avløp
- Stål - sprinkelanlegg`,
    },
    {
      title: 'Koordinering med rørlegger',
      content: `## Koordinering med rørlegger

Samarbeid mellom byggfag og rørlegger.

**Utsparinger:**
- Slukplassering bestemmes tidlig
- Hull i dekker for rør
- Sjakter for stigeledninger

**Fall på avløp:**
- Minimum 1-2 cm per meter
- Tømrer bygger gulv med fall
- Rørlegger legger rør og sluk

**Veggmontasje:**
- Monteringspunkt for servant, toalett
- Forsterkning i vegg
- Koordiner med rørlegger

**Krav til våtrom:**
- Rørlegger og membranlegger koordinerer
- Slukmansjett før membran
- Fall til sluk

**Isolasjon av rør:**
- Varme rør isoleres mot varmetap
- Kalde rør isoleres mot kondens
- Brannisolasjon i gjennomføringer`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-43-ex-1', task: 'Hva står VVS for?', solution: 'VVS står for Varme, Ventilasjon og Sanitær.' },
    { id: 'bygg-anlegg-vg1-43-ex-2', task: 'Hva er minimum fall på avløpsrør?', solution: 'Minimum fall er 1-2 cm per meter (1-2%) for at vannet skal renne mot avløpet.' },
    { id: 'bygg-anlegg-vg1-43-ex-3', task: 'Nevn to typer rør som brukes til vannledning.', solution: 'Rørtyper for vannledning: 1) PEX-rør (plast), 2) Kobberrør.' },
    { id: 'bygg-anlegg-vg1-43-ex-4', task: 'Hvorfor må fall til sluk koordineres mellom tømrer og rørlegger?', solution: 'Tømrer bygger gulvkonstruksjonen med fall mot der sluket skal være. Rørlegger monterer sluk i riktig posisjon og høyde. Uten koordinering kan fallet bli feil eller sluket komme på feil sted.' },
    { id: 'bygg-anlegg-vg1-43-ex-5', task: 'Hvorfor isoleres varme vannrør?', solution: 'Varme rør isoleres for å hindre varmetap (energisparing) og for å hindre at man brenner seg på rørene.' },
    { id: 'bygg-anlegg-vg1-43-ex-6', task: 'Hva må gjøres med rørgjennomføringer i branncellebegrensende konstruksjoner?', solution: 'Rørgjennomføringer må branntettes med godkjente produkter (brannmansjetter for plastrør, brannmasse rundt metallrør) for å opprettholde brannmotstanden.' },
    { id: 'bygg-anlegg-vg1-43-ex-7', task: 'Når må slukplassering i våtrom bestemmes?', solution: 'Slukplassering må bestemmes tidlig i prosjektet - før gulvkonstruksjon bygges - fordi fallet i gulvet og rørføringen avhenger av hvor sluket skal være.' },
  ],
  keyTerms: [
    { term: 'VVS', definition: 'Varme, Ventilasjon og Sanitær.' },
    { term: 'PEX-rør', definition: 'Plastrør for vannledning, fleksibelt.' },
    { term: 'Stigeledning', definition: 'Vertikale hovedrør som går mellom etasjer.' },
  ],
};

// ============================================================================
// Kapittel 44: Vinterdrift og vinterbygging
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_44: TextbookChapter = {
  id: 'bygg-anlegg-vg1-44',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '44',
  title: 'Vinterdrift og vinterbygging',
  description: 'Bygging under vinterforhold og spesielle tiltak.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge ut og bruke personlig verneutstyr og vurdere konsekvenser av feilbruk',
  ],
  sections: [
    {
      title: 'Utfordringer ved vinterbygging',
      content: `## Utfordringer ved vinterbygging

Vinterforhold skaper spesielle utfordringer.

**Temperatur:**
- Betong herder sakte under +5°C
- Stopper ved frost
- Materialer blir sprø

**Snø og is:**
- Glatte overflater
- Snølast på konstruksjoner
- Is på stillas

**Dagslys:**
- Korte dager
- Behov for belysning
- Begrenset arbeidstid

**Kulde for arbeidere:**
- Nedkjøling
- Frostskader
- Nedsatt konsentrasjon`,
    },
    {
      title: 'Tiltak for vinterbygging',
      content: `## Tiltak for vinterbygging

Riktige tiltak gjør vinterbygging mulig.

**Betongarbeid:**
- Varm betong ved levering
- Isolere forskaling
- Varmetelt over støpested
- Varmekabler i betongen
- Forlenget herdetid

**Trekonstruksjoner:**
- Tørre materialer
- Beskytte mot snø og fukt
- Presenning over arbeid

**Sikkerhet:**
- Rydde snø og strø
- Kontrollere is på stillas
- Godt synlige klær
- Varme pauser

**Verneutstyr:**
- Varme klær i lag
- Hansker som fungerer
- Fottøy med godt grep
- Hjelm med varmt fôr

**Oppvarming:**
- Byggtørker
- Midlertidig oppvarming
- Tetting av bygget
- Kontroll av fukt`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-44-ex-1', task: 'Ved hvilken temperatur stopper betong å herde?', solution: 'Betong slutter å herde ved frost (0°C). Herdingen går sakte under +5°C og stopper helt ved frost.' },
    { id: 'bygg-anlegg-vg1-44-ex-2', task: 'Nevn tre tiltak for betongarbeid om vinteren.', solution: 'Tiltak: 1) Bruke varm betong ved levering, 2) Isolere forskalingen, 3) Sette opp varmetelt, 4) Bruke varmekabler i betongen, 5) Forlenget herdetid.' },
    { id: 'bygg-anlegg-vg1-44-ex-3', task: 'Hvorfor er is på stillas farlig?', solution: 'Is på stillas gjør plattformer og trinn glatte, noe som øker risikoen for fall. Stillaset må kontrolleres for is og om nødvendig strøs eller hackes rent.' },
    { id: 'bygg-anlegg-vg1-44-ex-4', task: 'Hvordan bør man kle seg for arbeid ute om vinteren?', solution: 'Klær i lag (luftlommer isolerer), varme hansker som er praktiske å jobbe med, fottøy med godt grep og isolasjon, hjelm med varmt fôr, synlige klær/refleks i mørke.' },
    { id: 'bygg-anlegg-vg1-44-ex-5', task: 'Hva er en byggtørker?', solution: 'En byggtørker er en oppvarmings- og tørkingsenhet som brukes for å varme opp og tørke ut bygninger under oppføring eller rehabilitering, særlig om vinteren.' },
    { id: 'bygg-anlegg-vg1-44-ex-6', task: 'Hvorfor må trematerialer beskyttes mot snø?', solution: 'Snø smelter og fukter opp treet. Fuktig tre kan få mugg, råte og formforandringer. Materialer må lagres under tak eller dekkes med presenning.' },
    { id: 'bygg-anlegg-vg1-44-ex-7', task: 'Hvilke sikkerhetstiltak må gjøres på byggeplass om vinteren?', solution: 'Tiltak: Rydde snø fra gangveier og arbeidsområder, strø på glatte flater, kontrollere stillas for is, sørge for god belysning i mørke perioder, varme pauserom, synlig arbeidstøy, sjekke at maskiner fungerer i kulde.' },
  ],
  keyTerms: [
    { term: 'Herdetiltak', definition: 'Tiltak for å sikre at betong herder ordentlig i kulde.' },
    { term: 'Byggtørker', definition: 'Utstyr for oppvarming og tørking av bygg.' },
    { term: 'Varmetelt', definition: 'Isolert telt rundt støpested for å holde varmen.' },
  ],
};

// ============================================================================
// Kapittel 45: Oppsummering og fagprøveforberedelse
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_45: TextbookChapter = {
  id: 'bygg-anlegg-vg1-45',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '45',
  title: 'Oppsummering og fagprøveforberedelse',
  description: 'Repetisjon av viktige temaer og forberedelse til videre utdanning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
  ],
  sections: [
    {
      title: 'Viktige kompetanseområder',
      content: `## Viktige kompetanseområder

Oppsummering av sentrale temaer fra VG1.

**Materialkunnskap:**
- Tre, betong, stål, mur
- Egenskaper og bruksområder
- Miljøpåvirkning

**Konstruksjon:**
- Fundament og grunn
- Vegger og dekker
- Tak og fasade

**Tegning og dokumentasjon:**
- Lese byggetegninger
- Målestokk og symboler
- BIM og digitale verktøy

**HMS og sikkerhet:**
- Personlig verneutstyr
- Fallsikring og stillas
- Risikokunnskap

**Kvalitet og kontroll:**
- Kontrollplaner
- Dokumentasjon
- FDV`,
    },
    {
      title: 'Forberedelse til VG2 og læretid',
      content: `## Forberedelse til VG2 og læretid

Tips for videre utdanning.

**VG2 - velg riktig:**
- Tømrer, murer, betongfag
- Anleggsteknikk
- Vurder interesser og styrker

**Gode vaner:**
- Vær punktlig og pålitelig
- Spør når du lurer
- Ta ansvar for egen læring
- Dokumenter det du lærer

**Praktiske ferdigheter:**
- Øv på grunnleggende teknikker
- Bruk verktøy riktig
- Tenk kvalitet

**Holdninger:**
- Respekt for kolleger og kunder
- Ærlighet om feil
- Samarbeidsevne
- Stolthet i arbeidet

**Til fagprøven:**
- Planlegging er halve jobben
- Les oppgaven nøye
- Disponér tiden
- Dokumenter underveis
- Kvalitet fremfor hastighet`,
    },
  ],
  exercises: [
    { id: 'bygg-anlegg-vg1-45-ex-1', task: 'Nevn de fire hovedgruppene av byggematerialer vi har lært om.', solution: 'Hovedgrupper: 1) Tre (gran, furu, limtre), 2) Betong (sement, tilslag, armering), 3) Stål (konstruksjonsstål, armering), 4) Mur (tegl, betongblokk, lettklinker).' },
    { id: 'bygg-anlegg-vg1-45-ex-2', task: 'Hva er de viktigste HMS-tiltakene på en byggeplass?', solution: 'HMS-tiltak: Bruk av personlig verneutstyr (hjelm, sko, briller, hørsel), fallsikring ved arbeid i høyden, ryddige arbeidsplasser, risikovurdering før arbeid, sikkert bruk av verktøy og maskiner.' },
    { id: 'bygg-anlegg-vg1-45-ex-3', task: 'Hva bør du tenke på når du velger VG2-retning?', solution: 'Vurder egne interesser (liker du tre, betong, anlegg?), hvilke styrker du har, jobbmuligheter i ditt område, og snakk gjerne med fagfolk i de ulike yrkene for å få innblikk i hverdagen.' },
    { id: 'bygg-anlegg-vg1-45-ex-4', task: 'Hvorfor er dokumentasjon viktig i byggebransjen?', solution: 'Dokumentasjon sikrer kvalitet, gir bevis på at arbeid er utført riktig, er lovpålagt (FDV), beskytter mot reklamasjoner, og er nyttig for fremtidig vedlikehold og rehabilitering.' },
    { id: 'bygg-anlegg-vg1-45-ex-5', task: 'Hvilke holdninger verdsettes hos en lærling?', solution: 'Holdninger som verdsettes: Punktlighet, pålitelighet, ærlighet (også om feil), samarbeidsevne, respekt for kolleger og kunder, vilje til å lære, stolthet i arbeidet, ta ansvar.' },
    // --- Samleoppgaver ---
    { id: 'bygg-anlegg-vg1-45-ex-6', task: 'Beskriv kort de viktigste trinnene i et byggeprosjekt fra planlegging til ferdig bygg.', solution: 'Trinn: 1) PLANLEGGING: Tegninger, søknader, prosjektering. 2) GRUNNARBEID: Graving, drenering, fundamentering. 3) RÅBYGG: Bærende konstruksjon, vegger, dekker, tak. 4) TETT BYGG: Tak, vinduer, dører, vindsperre. 5) INNVENDIG: Isolasjon, gips, rør og el. 6) OVERFLATER: Gulv, fliser, maling. 7) FERDIGSTILLING: Utstyr, lister, rydding. 8) OVERLEVERING: Kontroll, dokumentasjon, nøkler til byggherre.' },
    { id: 'bygg-anlegg-vg1-45-ex-7', task: 'Du skal gi råd til en som skal begynne som lærling i et byggfag. Hva er de tre viktigste rådene du ville gitt?', solution: 'Tre råd: 1) VÆR LÆREVILLIG: Spør når du lurer på noe, observer erfarne håndverkere, ta notater. Ingen forventer at du kan alt - men de forventer at du vil lære. 2) VÆR PÅLITELIG: Kom presis, hold avtaler, gjør ferdig det du begynner på. Tillit må bygges over tid. 3) TA VARE PÅ DEG SELV: Bruk verneutstyr, ikke ta sjanser med sikkerheten, si fra hvis noe føles farlig. En skade kan ødelegge hele karrieren.' },
  ],
  keyTerms: [
    { term: 'Kompetansemål', definition: 'Det du skal kunne etter endt opplæring, definert i læreplanen.' },
    { term: 'FDV-dokumentasjon', definition: 'Forvaltning, Drift og Vedlikehold - dokumentasjon som følger bygget.' },
    { term: 'Fagprøve', definition: 'Praktisk prøve som avslutter læretiden og gir fagbrev.' },
  ],
};

// ============================================================================
// Eksporter kapitler 39-45
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART6 = [
  CHAPTER_BYGG_ANLEGG_VG1_39,
  CHAPTER_BYGG_ANLEGG_VG1_40,
  CHAPTER_BYGG_ANLEGG_VG1_41,
  CHAPTER_BYGG_ANLEGG_VG1_42,
  CHAPTER_BYGG_ANLEGG_VG1_43,
  CHAPTER_BYGG_ANLEGG_VG1_44,
  CHAPTER_BYGG_ANLEGG_VG1_45,
];

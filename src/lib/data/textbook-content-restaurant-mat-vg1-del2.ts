/**
 * Restaurant- og matfag VG1 - Tekstbokinnhold Del 2
 *
 * Kapittel 29-55 - Utvidede emner for LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 29: Knivsikkerhet og kutteteknikker
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_29: TextbookChapter = {
  id: 'restaurant-mat-vg1-29',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '29',
  title: 'Knivsikkerhet og kutteteknikker',
  description: 'Lær sikker bruk av kniv og profesjonelle kutteteknikker som brunoise, julienne og chiffonade.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke kniv på en sikker og effektiv måte',
    'beherske grunnleggende kutteteknikker',
    'vedlikeholde kniver korrekt',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-29-intro',
      type: 'text',
      content: `Kniven er kokkens viktigste verktøy. God knivsikkerhet og presise kutteteknikker er grunnlaget for effektivt og profesjonelt kjøkkenarbeid. I dette kapittelet lærer du å håndtere kniven trygt og mestre de viktigste kutteteknikkene.`,
    },
    {
      id: 'restaurant-mat-vg1-29-def-1',
      type: 'definition',
      title: 'Brunoise',
      content: `Brunoise er en kutteteknikk der grønnsaker kuttes i små, jevne terninger på 2-3 mm. Brukes ofte til pynt, sauser og supper der jevn størrelse gir fin presentasjon og lik koketid.`,
    },
    {
      id: 'restaurant-mat-vg1-29-text-1',
      type: 'text',
      content: `**Knivsikkerhet**

**Grunnregler**:
- Hold alltid kniven ved skaftet
- Kutt alltid bort fra kroppen
- Bruk alltid skjærebrett
- En skarp kniv er tryggere enn en sløv
- Legg aldri kniven med eggen opp
- Grip aldri etter en fallende kniv

**Riktig grep**:
- Pekefinger og tommel griper om bladet like over skaftet
- De tre andre fingrene holder rundt skaftet
- Gir god kontroll og presisjon

**Klohånd**:
- Fingrene på hånden som holder maten er krummet innover
- Knoklene guider knivbladet
- Fingertuppene er trukket tilbake
- Beskytter mot kutt`,
    },
    {
      id: 'restaurant-mat-vg1-29-text-2',
      type: 'text',
      content: `**Grunnleggende kutteteknikker**

**Julienne** (strimler):
- Lange, tynne strimler på 3-4 cm x 2-3 mm
- Kutt først i skiver, deretter i strimler
- Brukes til wok, salater, garnering

**Brunoise** (fine terninger):
- Terninger på 2-3 mm
- Start med julienne, kutt deretter på tvers
- Til sauser, supper, farsefyll

**Chiffonade** (strimler av blad):
- Ruller opp bladgrønnsaker
- Skjæres i tynne strimler
- Perfekt for basilikum, spinat, salat

**Concassé** (tomat):
- Flå, del og fjern frø
- Kutt i grove terninger
- Til sauser og tilbehør`,
    },
    {
      id: 'restaurant-mat-vg1-29-text-3',
      type: 'text',
      content: `**Flere kutteteknikker**

**Baton/Batonnet** (staver):
- Staver på ca. 6 cm x 6 mm
- Større enn julienne
- Til pommes frites, grønnsaksgarnityr

**Paysanne** (tynne skiver):
- Tynne, flate biter i ulike former
- Runde, firkantede eller trekantede
- Til supper og stuinger

**Mirepoix** (suppegrønnsaker):
- Grove terninger av løk, gulrot, selleri
- Ca. 1 cm terninger
- Smaksbase til fond, saus, suppe

**Tournée** (syvsidet):
- Grønnsaker formet som en liten tønne
- 7 sider, avrundede ender
- Klassisk fransk teknikk, garnering`,
    },
    {
      id: 'restaurant-mat-vg1-29-text-4',
      type: 'text',
      content: `**Knivtyper og vedlikehold**

**Grunnleggende kniver**:
- **Kokkekniv** (20-25 cm): Allroundkniv
- **Urtekniv** (8-10 cm): Små kutt, skrelling
- **Fileteringskniv**: Fleksibel, til fisk
- **Brødkniv**: Tagget, til brød og kaker
- **Utbeningskniv**: Stiv, til kjøtt fra bein

**Sliping og vedlikehold**:
- Slip regelmessig med bryne eller slipestein
- Stryk med stål før bruk for å rette eggen
- Vask for hånd, ikke i oppvaskmaskin
- Oppbevar i knivblokk eller magnetlist
- Tørk alltid kniven etter bruk`,
    },
    {
      id: 'restaurant-mat-vg1-29-warning-1',
      type: 'warning',
      title: 'Ved kuttskader',
      content: `Ved kutt: Skyll såret under rennende vann, press med rent stoff for å stoppe blødning. Dekk med blått plaster (synlig i mat). Ved dype kutt, oppsøk lege. Meld alltid skader til leder.`,
    },
    {
      id: 'restaurant-mat-vg1-29-tip-1',
      type: 'tip',
      title: 'Effektiv kutting',
      content: `Hold kniven i en vippebevegelse der spissen forblir på brettet. Bruk hele bladet. Øv på jevn rytme - presisjon er viktigere enn hastighet i starten.`,
    },
    {
      id: 'restaurant-mat-vg1-29-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er brunoise?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av brunoise.',
            solution: 'Fine terninger på 2-3 mm',
            multipleChoiceOptions: [
              'Fine terninger på 2-3 mm',
              'Lange strimler',
              'Tynne skiver',
              'Grove terninger på 1 cm',
            ],
          },
        ],
        solution: 'Brunoise er en kutteteknikk der grønnsaker kuttes i små, jevne terninger på 2-3 mm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-29-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er klohånd-teknikken?',
        solution: 'En teknikk der fingrene er krummet innover slik at knoklene guider knivbladet og fingertuppene er beskyttet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-29-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er en skarp kniv tryggere enn en sløv?',
        solution: 'En skarp kniv krever mindre kraft og glir lettere gjennom maten, noe som gir bedre kontroll og mindre fare for at kniven sklir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-29-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er julienne?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Lange, tynne strimler på 3-4 cm x 2-3 mm',
            multipleChoiceOptions: [
              'Lange, tynne strimler på 3-4 cm x 2-3 mm',
              'Små terninger',
              'Tykke staver',
              'Runde skiver',
            ],
          },
        ],
        solution: 'Julienne er lange, tynne strimler på ca. 3-4 cm lengde og 2-3 mm tykkelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-29-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er mirepoix og hva brukes det til?',
        solution: 'Mirepoix er grove terninger av løk, gulrot og selleri som brukes som smaksbase til fond, sauser og supper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-29-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv hvordan du ville kuttet grønnsaker til en asiatisk wok-rett med fokus på sikkerhet og teknikk.',
        solution: 'Start med å velge riktig kniv (kokkekniv). Bruk klohånd-teknikken for sikkerhet. Kutt grønnsakene i julienne for rask og jevn tilberedning i wok. Sørg for at alle strimler er like store for lik koketid. Hold arbeidsplassen ryddig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-29-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-29-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en oversikt over hvilke kutteteknikker du ville brukt til: a) fransk løksuppe, b) italiensk bruschetta med tomat, c) klassisk salat nicoise.',
        solution: 'a) Løksuppe: Løk i tynne skiver (eminé), evt. mirepoix som base. b) Bruschetta: Tomater i concassé, basilikum i chiffonade. c) Salat nicoise: Poteter og egg i skiver, haricots verts hele, tomater i båter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 30: Fond og kraft - smaksgrunnlaget
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_30: TextbookChapter = {
  id: 'restaurant-mat-vg1-30',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '30',
  title: 'Fond og kraft - smaksgrunnlaget',
  description: 'Lær å lage profesjonelle fond, kraft og buljong som gir dybde og smak til retter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'lage ulike typer fond og kraft',
    'forstå prinsippene bak god smaksutvikling',
    'bruke fond som base i sauser og supper',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-30-intro',
      type: 'text',
      content: `Fond er grunnsteinen i det profesjonelle kjøkkenet. En velsmakende fond løfter sauser, supper og gryteretter til et helt nytt nivå. I dette kapittelet lærer du å lage klassiske fond fra bunnen av.`,
    },
    {
      id: 'restaurant-mat-vg1-30-def-1',
      type: 'definition',
      title: 'Fond',
      content: `Fond er en smaksfull væske laget ved å koke ben, grønnsaker og urter i vann over lang tid. Deles inn i hvit fond (ubrent), brun fond (brent) og fiskefond.`,
    },
    {
      id: 'restaurant-mat-vg1-30-text-1',
      type: 'text',
      content: `**Grunnleggende om fond**

**Hovedtyper**:
- **Hvit fond**: Ubrent ben og grønnsaker, lys og mild
- **Brun fond**: Brent ben og grønnsaker, mørk og kraftig
- **Fiskefond (fumet)**: Fiskeben og skinn, lys og lett
- **Grønnsaksfond**: Kun grønnsaker, vegetarisk alternativ

**Basisingredienser (mirepoix)**:
- 50% løk
- 25% gulrot
- 25% selleri
- Eventuelt purre og fennikel

**Aromatiske tilsetninger (bouquet garni)**:
- Laurbærblad
- Timian
- Persillestilker
- Hel pepper
- Bindes sammen med tråd`,
    },
    {
      id: 'restaurant-mat-vg1-30-text-2',
      type: 'text',
      content: `**Hvit kyllingfond**

**Ingredienser** (ca. 2 liter):
- 1 kg kyllingben og -skrog
- 2 liter kaldt vann
- 200 g mirepoix
- Bouquet garni

**Fremgangsmåte**:
1. Skyll bena godt i kaldt vann
2. Legg i gryte, dekk med kaldt vann
3. Varm sakte opp uten å koke
4. Skum av urenheter som stiger opp
5. Tilsett mirepoix og bouquet garni
6. La småkoke i 3-4 timer
7. Sil forsiktig gjennom finmasket sil
8. Avfett og avkjøl raskt

**Tips**: Start alltid med kaldt vann for klar fond. Kok aldri kraftig - det gjør fonden uklar.`,
    },
    {
      id: 'restaurant-mat-vg1-30-text-3',
      type: 'text',
      content: `**Brun kalvefond**

**Ingredienser** (ca. 2 liter):
- 1,5 kg kalveben (hakket)
- 3 liter vann
- 300 g mirepoix
- 2 ss tomatpuré
- Bouquet garni

**Fremgangsmåte**:
1. Bren bena i ovn ved 220°C til gyllenbrune
2. Tilsett grønnsaker siste 20 min
3. Rør inn tomatpuré
4. Flytt til gryte, dekk med kaldt vann
5. Skrap løs stekerester med vann (deglassér)
6. Hell over i gryta
7. Kok opp, skum, senk varmen
8. La småkoke 6-8 timer
9. Sil, avfett og reduser om ønsket

**Glace de viande**: Reduser brun fond til 1/10 for intens smakskonsentrat.`,
    },
    {
      id: 'restaurant-mat-vg1-30-text-4',
      type: 'text',
      content: `**Fiskefond (Fumet de poisson)**

**Ingredienser** (ca. 1 liter):
- 1 kg hvitfiskeben (torsk, kveite)
- 1 liter kaldt vann
- 150 g hvit mirepoix (uten gulrot)
- 100 ml hvitvin
- Bouquet garni

**Fremgangsmåte**:
1. Skyll fiskebena svært godt
2. Svits grønnsakene i smør
3. Tilsett fiskeben, stek lett
4. Hell på hvitvin, kok inn
5. Tilsett kaldt vann
6. Kok opp, skum godt
7. La trekke (ikke koke!) i 20-30 min
8. Sil forsiktig

**Viktig**: Fiskefond koker aldri lenge - blir bitter. Unngå fet fisk (makrell, laks).`,
    },
    {
      id: 'restaurant-mat-vg1-30-tip-1',
      type: 'tip',
      title: 'Oppbevaring av fond',
      content: `Kjøl fond raskt ned i isbad. Oppbevares i kjøleskap 3-4 dager eller frys i porsjoner. Frossen fond holder 3-6 måneder. Bruk isterningformer for praktiske porsjoner.`,
    },
    {
      id: 'restaurant-mat-vg1-30-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på hvit og brun fond?',
        solution: 'Hvit fond lages av ubrent ben og grønnsaker og er lys og mild. Brun fond lages av brente ben og grønnsaker og er mørk og kraftig i smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-30-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er mirepoix?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig sammensetning.',
            solution: '50% løk, 25% gulrot, 25% selleri',
            multipleChoiceOptions: [
              '50% løk, 25% gulrot, 25% selleri',
              '50% tomat, 25% paprika, 25% løk',
              '50% gulrot, 50% poteter',
              '33% hver av tomat, agurk og løk',
            ],
          },
        ],
        solution: 'Mirepoix er basisgrønnsaker til fond bestående av 50% løk, 25% gulrot og 25% selleri.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-30-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal fond aldri koke kraftig?',
        solution: 'Kraftig koking gjør fonden uklar ved at fettpartikler emulgeres inn i væsken og proteiner brytes ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-30-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor lenge koker fiskefond?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig koketid.',
            solution: '20-30 minutter',
            multipleChoiceOptions: [
              '20-30 minutter',
              '3-4 timer',
              '6-8 timer',
              '1-2 timer',
            ],
          },
        ],
        solution: 'Fiskefond trekker kun i 20-30 minutter. Lengre koking gir bitter smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-30-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er bouquet garni?',
        solution: 'En bukett av urter (laurbærblad, timian, persillestilker) bundet sammen med tråd, brukes til å smaksette fond og fjernes før servering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-30-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg hvilken type fond du ville brukt til: a) kremet fiskesuppe, b) klassisk brun saus til biff, c) italiensk risotto.',
        solution: 'a) Fiskefond (fumet) for fiskesuppe. b) Brun kalvefond eller oksefond for brun saus. c) Hvit kyllingfond eller grønnsaksfond for risotto.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-30-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-30-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du ville laget en hvit kyllingfond, inkludert viktige tips for å få klar fond.',
        solution: 'Skyll ben godt, legg i gryte med kaldt vann, varm sakte opp uten å koke, skum av urenheter, tilsett mirepoix og bouquet garni, la småkoke 3-4 timer uten at det koker kraftig, sil forsiktig, avfett og avkjøl raskt i isbad.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 31: Emulsjonssauser
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_31: TextbookChapter = {
  id: 'restaurant-mat-vg1-31',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '31',
  title: 'Emulsjonssauser',
  description: 'Lær prinsippene bak emulsjoner og mestre klassiske sauser som hollandaise, bernaise og majones.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå prinsippene bak emulsjoner',
    'lage klassiske emulsjonssauser',
    'feilsøke og redde ødelagte emulsjoner',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-31-intro',
      type: 'text',
      content: `Emulsjonssauser er blant de mest imponerende og smaksrike sausene i det klassiske kjøkkenet. Fra silkemyk hollandaise til luftig majones - mestrer du emulsjoner, har du et viktig verktøy i kokkerepertoaret.`,
    },
    {
      id: 'restaurant-mat-vg1-31-def-1',
      type: 'definition',
      title: 'Emulsjon',
      content: `En emulsjon er en blanding av to væsker som normalt ikke blandes (som olje og vann). Ved hjelp av en emulgator (f.eks. lecitin i eggeplomme) holdes dråpene fordelt i hverandre.`,
    },
    {
      id: 'restaurant-mat-vg1-31-text-1',
      type: 'text',
      content: `**Emulsjonstyper**

**Kalde emulsjoner**:
- Majones (olje-i-vann)
- Vinaigrette (midlertidig)
- Aioli (hvitløksmajones)

**Varme emulsjoner**:
- Hollandaise (smør-i-eggeplomme)
- Béarnaise (hollandaise med estragon)
- Beurre blanc (smør-i-vin)

**Emulgatorer**:
- Eggeplomme (lecitin)
- Sennep
- Hvitløk
- Smør (melkeproteiner)

**Nøkkelprinsipper**:
- Tilsett fett langsomt
- Rør/visp kontinuerlig
- Hold riktig temperatur
- Alle ingredienser romtemperert`,
    },
    {
      id: 'restaurant-mat-vg1-31-text-2',
      type: 'text',
      content: `**Majones**

**Ingredienser**:
- 2 eggeplommer
- 1 ts sennep
- 2 dl nøytral olje
- 1 ss sitronsaft eller eddik
- Salt og pepper

**Fremgangsmåte**:
1. Ha plommer og sennep i bolle
2. Visp sammen
3. Tilsett olje dråpevis i starten
4. Øk til tynn stråle når emulsjonen tar
5. Smak til med syre, salt og pepper

**Variasjoner**:
- Aioli: Tilsett knust hvitløk
- Remoulade: Med kapers og urter
- Thousand Island: Med ketchup og sylteagurk

**Hvis den skiller seg**: Start på nytt med en plomme, tilsett den skilte majonesen dråpevis.`,
    },
    {
      id: 'restaurant-mat-vg1-31-text-3',
      type: 'text',
      content: `**Hollandaisesaus**

**Ingredienser**:
- 3 eggeplommer
- 200 g klaret smør
- 1-2 ss sitronsaft
- Salt og hvit pepper

**Fremgangsmåte**:
1. Visp plommer med 1 ss vann i vannbad
2. Visp til luftig og lys (sabayon)
3. Ta av varmen
4. Tilsett klaret smør i tynn stråle
5. Visp kontinuerlig
6. Smak til med sitron og krydder
7. Server umiddelbart eller hold lunken

**Temperatur**: Hold under 65°C for å unngå at eggene koagulerer.`,
    },
    {
      id: 'restaurant-mat-vg1-31-text-4',
      type: 'text',
      content: `**Béarnaisesaus**

**Ingredienser**:
- Hollandaise-base
- 2 ss hvitvineddik
- 2 ss tørrvin
- 1 ss hakket sjalottløk
- Estragon, kjørvel

**Fremgangsmåte**:
1. Kok eddik, vin og sjalottløk til 2 ss
2. Sil og avkjøl redukasjonen
3. Lag hollandaise med redukasjonen
4. Rør inn finhakkede urter
5. Server til biff, fisk eller grønnsaker

**Beurre blanc**:
- Reduker hvitvin og sjalottløk
- Visp inn kaldt smør bit for bit
- Enklere varm emulsjon
- Perfekt til fisk`,
    },
    {
      id: 'restaurant-mat-vg1-31-warning-1',
      type: 'warning',
      title: 'Ødelagt emulsjon',
      content: `Hvis sausen skiller seg: 1) For hollandaise: Start med ny plomme og 1 ss vann, visp inn den skilte sausen sakte. 2) For majones: Start med sennep og ny plomme. Tilsett den skilte majonesen dråpevis.`,
    },
    {
      id: 'restaurant-mat-vg1-31-tip-1',
      type: 'tip',
      title: 'Perfekt emulsjon',
      content: `Ha alle ingredienser i romtemperatur. Kald olje eller kalde egg gjør emulsjonen vanskeligere. Ved majones: Jo saktere du tilsetter oljen i starten, jo mer stabil blir emulsjonen.`,
    },
    {
      id: 'restaurant-mat-vg1-31-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en emulsjon?',
        solution: 'En blanding av to væsker som normalt ikke blandes (som olje og vann), holdt sammen ved hjelp av en emulgator.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-31-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er emulgatoren i majones?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig emulgator.',
            solution: 'Lecitin i eggeplommen',
            multipleChoiceOptions: [
              'Lecitin i eggeplommen',
              'Salt',
              'Sitronsaft',
              'Olje',
            ],
          },
        ],
        solution: 'Lecitin i eggeplommen fungerer som emulgator og holder olje og vann sammen i majones.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-31-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på hollandaise og béarnaise?',
        solution: 'Béarnaise er en hollandaise tilsatt reduksjon av eddik, vin og sjalottløk, samt urter som estragon og kjørvel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-31-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan redder du en skilt majones?',
        solution: 'Start på nytt med sennep og en ny eggeplomme, visp, og tilsett den skilte majonesen dråpevis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-31-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor skal oljen tilsettes sakte i starten av majonesproduksjonen?',
        solution: 'For å bygge opp en stabil emulsjon. Tilsettes oljen for raskt, har ikke emulgatoren tid til å kapsle inn oljepartiklene og sausen skiller seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-31-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg en meny med tre retter der du bruker tre forskjellige emulsjonssauser. Forklar valg av saus til hver rett.',
        solution: 'Eksempel: Forrett - grillede asparges med hollandaise (klassisk kombinasjon). Hovedrett - grillet biff med béarnaise (estragon passer til kjøtt). Dessert eller tilbehør - hjemmelaget pommes frites med aioli (hvitløk gir god smak).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-31-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-31-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Beskriv de vanligste feilene ved laging av emulsjonssauser og hvordan de kan unngås eller rettes opp.',
        solution: 'Vanlige feil: 1) Olje tilsatt for raskt - tilsett dråpevis i starten. 2) For kalde ingredienser - bruk romtemperert. 3) For høy varme på hollandaise - hold under 65°C. 4) Skilt emulsjon - start på nytt med emulgator og tilsett den skilte blandingen sakte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 32: Sous vide og moderne teknikker
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_32: TextbookChapter = {
  id: 'restaurant-mat-vg1-32',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '32',
  title: 'Sous vide og moderne teknikker',
  description: 'Lær om vakuumpakking, presis temperaturkontroll og moderne tilberedningsteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå prinsippene bak sous vide-tilberedning',
    'bruke vakuumpakker og sirkulatorbad',
    'velge riktig temperatur og tid for ulike råvarer',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-32-intro',
      type: 'text',
      content: `Sous vide (fransk for "under vakuum") er en tilberedningsmetode som gir enestående kontroll over tilberedningen. Ved å pakke maten vakuum og koke den i temperaturkontrollert vannbad oppnår du perfekt resultat hver gang.`,
    },
    {
      id: 'restaurant-mat-vg1-32-def-1',
      type: 'definition',
      title: 'Sous vide',
      content: `Sous vide er en tilberedningsteknikk der maten vakuumpakkes i plastposer og koker i vannbad ved presis, konstant temperatur over lengre tid. Gir jevn gjennomsteking og bevarer saftighet.`,
    },
    {
      id: 'restaurant-mat-vg1-32-text-1',
      type: 'text',
      content: `**Fordeler med sous vide**

**Presisjon**:
- Nøyaktig temperaturkontroll
- Samme resultat hver gang
- Perfekt stekningsgrad uten gjetting

**Kvalitet**:
- Maksimal saftighet bevares
- Mørt kjøtt uten uttørking
- Næringsstoffer beholdes
- Smak konsentreres i posen

**Praktisk**:
- Kan tilberedes på forhånd
- Lang holdbarhet på kjøl
- Enkel finish ved servering
- Frigjør tid under service`,
    },
    {
      id: 'restaurant-mat-vg1-32-text-2',
      type: 'text',
      content: `**Utstyr**

**Vakuumpakker**:
- Trekker ut luft fra posen
- Sikrer god varmeoverføring
- Forlenger holdbarhet

**Immersion sirkulator**:
- Varmer og sirkulerer vannet
- Holder presis temperatur
- Kan brukes i vanlig gryte

**Vannbad med termostat**:
- Dedikert beholder
- Isolert for energisparing
- For større produksjoner

**Plastposer**:
- Må tåle varme
- Vakuumposer eller ziplock
- BPA-fri plast`,
    },
    {
      id: 'restaurant-mat-vg1-32-text-3',
      type: 'text',
      content: `**Temperaturer for kjøtt**

**Biff/oksekjøtt**:
- Rare: 54°C (1-4 timer)
- Medium rare: 57°C (1-4 timer)
- Medium: 60°C (1-4 timer)

**Kylling**:
- Bryst: 63°C (1-4 timer)
- Lår: 65°C (2-8 timer)
- Må være gjennomstekt!

**Svin**:
- Filet: 58-60°C (1-3 timer)
- Ribbe: 65°C (12-24 timer)

**Lam**:
- Medium rare: 57°C (2-4 timer)
- Lammeknoke: 65°C (24-48 timer)

**Fisk**:
- Laks: 50-52°C (30-45 min)
- Torsk: 55-58°C (20-40 min)`,
    },
    {
      id: 'restaurant-mat-vg1-32-text-4',
      type: 'text',
      content: `**Fremgangsmåte**

**1. Forberedelse**:
- Krydre råvaren
- Tilsett gjerne urter, hvitløk, smør
- Vakuumpakk i enkeltlag
- Unngå luftlommer

**2. Tilberedning**:
- Sett vannbadet til ønsket temperatur
- Legg posen i når temperaturen er nådd
- Sørg for at posen er under vann
- Hold riktig tid

**3. Finish**:
- Ta ut av pose, tørk godt
- Bren overflaten i varm panne
- Maillard-reaksjon for smak og farge
- Server umiddelbart

**Oppbevaring**: Avkjøl raskt i isbad, oppbevar på kjøl inntil 5 dager.`,
    },
    {
      id: 'restaurant-mat-vg1-32-warning-1',
      type: 'warning',
      title: 'Mattrygghet ved sous vide',
      content: `Ved temperaturer under 54°C kan bakterier overleve. Hold streng tidskontroll og sørg for rask avkjøling. Følg etablerte tid/temperatur-tabeller. Gravide, eldre og immunsvekkede bør unngå lavtemperatur-tilberedt mat.`,
    },
    {
      id: 'restaurant-mat-vg1-32-tip-1',
      type: 'tip',
      title: 'Bruning etter sous vide',
      content: `Bruk en svært varm panne eller brenne med gassbrenner for rask Maillard-reaksjon. Overflaten må være tørr - tørk med papir. Målet er farge og skorpe uten å steke videre innvendig.`,
    },
    {
      id: 'restaurant-mat-vg1-32-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr sous vide?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oversettelse.',
            solution: 'Under vakuum',
            multipleChoiceOptions: [
              'Under vakuum',
              'Langsom koking',
              'Dampet mat',
              'I vann',
            ],
          },
        ],
        solution: 'Sous vide er fransk og betyr "under vakuum" - mat tilberedes vakuumpakket i temperaturkontrollert vannbad.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-32-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken temperatur brukes til medium rare biff sous vide?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig temperatur.',
            solution: '57°C',
            multipleChoiceOptions: [
              '57°C',
              '65°C',
              '75°C',
              '45°C',
            ],
          },
        ],
        solution: 'Medium rare biff tilberedes ved 57°C sous vide.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-32-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor må kjøttet brennes etter sous vide?',
        solution: 'For å få Maillard-reaksjon som gir farge, skorpe og ekstra smak på overflaten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-32-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre fordeler med sous vide-tilberedning.',
        solution: 'Presis temperaturkontroll, maksimal saftighet bevares, og maten kan tilberedes på forhånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-32-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken temperatur og tid brukes til kyllingbryst sous vide?',
        solution: '63°C i 1-4 timer. Kylling må være gjennomstekt av hensyn til mattryggheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-32-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg sous vide-tilberedning av en treretters middag med kjøtt, fisk og grønnsaker. Oppgi temperaturer og tider.',
        solution: 'Eksempel: Forrett - laks 50°C i 40 min. Hovedrett - biff 57°C i 2 timer. Grønnsaker - gulrøtter 85°C i 1 time. Planlegg rekkefølge slik at alt er klart samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-32-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-32-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Beskriv HACCP-vurderinger ved sous vide-tilberedning. Hvilke kritiske kontrollpunkter må overvåkes?',
        solution: 'CCP-er: 1) Temperatur på vannbad - må være nøyaktig. 2) Tid - følg tabeller. 3) Rask avkjøling i isbad. 4) Oppbevaringstemperatur under 4°C. 5) Merking med dato. 6) Maksimal oppbevaringstid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 33: Anretning og tallerkenpresentasjon
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_33: TextbookChapter = {
  id: 'restaurant-mat-vg1-33',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '33',
  title: 'Anretning og tallerkenpresentasjon',
  description: 'Lær estetiske prinsipper, fargekomposisjon og moderne anretningsteknikker for profesjonell presentasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anrette retter med fokus på estetikk',
    'bruke farger, teksturer og høyde',
    'forstå moderne anretningstrender',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-33-intro',
      type: 'text',
      content: `Vi spiser først med øynene. God anretning løfter en rett fra hverdagslig til ekstraordinær. I dette kapittelet lærer du prinsippene for vakker og profesjonell tallerkenpresentasjon.`,
    },
    {
      id: 'restaurant-mat-vg1-33-def-1',
      type: 'definition',
      title: 'Anretning',
      content: `Anretning er kunsten å plassere mat på tallerkenen på en estetisk og appetittvekkende måte. Inkluderer plassering, farger, teksturer, høyde og garnityr.`,
    },
    {
      id: 'restaurant-mat-vg1-33-text-1',
      type: 'text',
      content: `**Grunnprinsipper for anretning**

**Balanse**:
- Visuell balanse på tallerkenen
- Ikke for mye på én side
- Asymmetri kan være mer interessant enn symmetri

**Farger**:
- Kontrast mellom elementer
- Grønt frister opp
- Unngå ensfargede retter
- Tallerkenfarge påvirker inntrykket

**Teksturer**:
- Bland sprøtt og mykt
- Kremet og fast
- Glatt og ru
- Gir interessant munnfølelse

**Høyde og dybde**:
- Bygg opp retten i høyden
- Lag nivåforskjeller
- Unngå flat, kjedelig presentasjon`,
    },
    {
      id: 'restaurant-mat-vg1-33-text-2',
      type: 'text',
      content: `**Tallerkenlayout**

**Klassisk (sentrert)**:
- Hovedingrediens i midten
- Tilbehør rundt
- Saus som ramme eller drypp
- Tradisjonelt og trygt

**Moderne (asymmetrisk)**:
- Offset plassering
- Tomrom som designelement
- Mer kunstnerisk uttrykk
- Populært i fine dining

**Landskapsstil**:
- Elementer spredt over tallerkenen
- Naturlig, organisk uttrykk
- Flere smakspunkter
- Inspirert av natur

**Stabling**:
- Elementer stablet oppå hverandre
- Gir høyde og dramatikk
- Krever stabile ingredienser`,
    },
    {
      id: 'restaurant-mat-vg1-33-text-3',
      type: 'text',
      content: `**Teknikker og verktøy**

**Sausapplikasjon**:
- Skje: Klassisk drypp eller drag
- Flaske: Prikker, linjer, sirkler
- Smøring: Bred strek med skjebakside
- Sous: Helt i skål ved siden

**Garnityr**:
- Mikrogrønt og spirer
- Urteblader og blomster (spiselige)
- Nøtter og frø
- Oljer og reduksjoner

**Verktøy**:
- Pinsett til presis plassering
- Sprøyteflaske til sauser
- Ring/form til stabling
- Børste til strøk

**Tips**:
- Hold kanten ren
- Ikke overfyll tallerkenen
- Tørk av søl umiddelbart
- Server på varme tallerkener`,
    },
    {
      id: 'restaurant-mat-vg1-33-text-4',
      type: 'text',
      content: `**Moderne trender**

**Nordisk stil**:
- Minimalistisk og rent
- Naturlige farger
- Fokus på råvaren
- Sesongbaserte garnityr

**Rustikk/naturlig**:
- Ujevne skiver og biter
- "Tilfeldig" plassering
- Trefjøler og stein
- Autentisk og ujålete

**Dekonstruert**:
- Klassiske retter i ny form
- Elementene adskilt
- Kreativ nytenkning
- Overraskende presentasjon

**Forbudte ting**:
- Søl på tallerkenkant
- For mange elementer
- Ikke-spiselige garnityr
- Kald mat på varme retter`,
    },
    {
      id: 'restaurant-mat-vg1-33-tip-1',
      type: 'tip',
      title: 'Øvelse gjør mester',
      content: `Ta bilder av dine anretninger. Se på dem kritisk og sammenlign med profesjonelle. Instagram og matmagasiner gir inspirasjon. Øv på samme rett flere ganger for å forbedre teknikken.`,
    },
    {
      id: 'restaurant-mat-vg1-33-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre grunnprinsipper for god anretning.',
        solution: 'Balanse, fargekontrast og variasjon i teksturer (eller høyde og dybde).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-33-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med asymmetrisk anretning?',
        solution: 'En moderne anretningsstil der elementene plasseres offset fra midten, med tomrom som designelement for et mer kunstnerisk uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-33-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke verktøy brukes til profesjonell anretning?',
        solution: 'Pinsett, sprøyteflaske, ringer/former og børste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-33-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner nordisk anretningsstil?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Minimalistisk, naturlige farger, fokus på råvaren',
            multipleChoiceOptions: [
              'Minimalistisk, naturlige farger, fokus på råvaren',
              'Overlesset, mange farger, mye garnityr',
              'Symmetrisk, klassisk, formell',
              'Kaotisk, tilfeldig, uforsiktig',
            ],
          },
        ],
        solution: 'Nordisk stil kjennetegnes av minimalistisk presentasjon, naturlige farger og fokus på råvaren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-33-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du unngå ved anretning?',
        solution: 'Søl på tallerkenkant, for mange elementer, ikke-spiselige garnityr og kald mat på varme retter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-33-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv hvordan du ville anrettet en hovedrett med lammekotelett, potetpuré og grillede grønnsaker i nordisk stil.',
        solution: 'Smør potetpuré i en diagonal linje med skjebakside. Plasser lammekotelettet lent mot pureen. Legg grønnsaker naturlig ved siden. Drypp litt sjy rundt. Garner med friske urter. Hold tallerkenen ren og minimalistisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-33-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-33-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Planlegg anretning av en dessert med sjokolademousse. Inkluder fargekontrast, teksturvariasjoner og høyde.',
        solution: 'Sjokolademousse i quenelle-form for høyde. Ferske bringebær for fargekontrast (rødt mot brunt). Sprø sjokoladeseil eller tuile for tekstur. Prikker av bringebærcoulis. Mintblad som garnityr. Kakaopulver eller gullfnugg som finish.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 34: Grunnleggende sauser - reduksjoner og jevning
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_34: TextbookChapter = {
  id: 'restaurant-mat-vg1-34',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '34',
  title: 'Grunnleggende sauser - reduksjoner og jevning',
  description: 'Lær om klassiske sauser, reduksjonsteknikker og ulike jevningsmetoder.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lage klassiske sauser fra bunnen',
    'beherske ulike jevningsteknikker',
    'forstå reduksjon for smakskonsentrasjon',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-34-intro',
      type: 'text',
      content: `Sauser er det som skiller amatørkokkens mat fra den profesjonelles. En velsmakende saus løfter en rett, binder ingrediensene sammen og tilfører ekstra smaksdimensjoner. Her lærer du grunnlaget for klassisk sauskunst.`,
    },
    {
      id: 'restaurant-mat-vg1-34-def-1',
      type: 'definition',
      title: 'Reduksjon',
      content: `Reduksjon er å koke inn en væske for å konsentrere smaken og tykkelsen. Vannet fordamper mens smaksstoffene blir værende, noe som gir kraftigere smak og tykkere konsistens.`,
    },
    {
      id: 'restaurant-mat-vg1-34-text-1',
      type: 'text',
      content: `**De fem modrene sausene**

**1. Béchamel** (hvit):
- Melk jevnet med hvit roux
- Base for ostesaus, mornay
- Brukes til lasagne, gratenger

**2. Velouté** (lys):
- Lys fond jevnet med lys roux
- Kylling-, fisk- eller kalvevelouté
- Base for mange sauser

**3. Espagnole** (brun):
- Brun fond med brun roux
- Rik, dyp smak
- Utvikles til demi-glace

**4. Hollandaise** (emulsjon):
- Eggeplomme og smør
- Varm emulsjonssaus
- Dekket i eget kapittel

**5. Tomatsaus**:
- Tomater kokt til saus
- Kan være glatt eller chunky
- Italiensk klassiker`,
    },
    {
      id: 'restaurant-mat-vg1-34-text-2',
      type: 'text',
      content: `**Roux - klassisk jevning**

**Hvit roux**:
- Like deler smør og mel
- Stek i 2-3 minutter
- Skal ikke ta farge
- Til béchamel, hvite sauser

**Lys roux**:
- Litt lengre steking
- Svakt gyllen farge
- Nøtteaktig smak
- Til velouté

**Brun roux**:
- Stek til brunfarge
- 10-15 minutter
- Rik, nøtteaktig smak
- Til brune sauser

**Teknikk**:
1. Smelt smør på medium varme
2. Rør inn mel
3. Rør konstant
4. Tilsett væske gradvis
5. Visp til klumpfritt`,
    },
    {
      id: 'restaurant-mat-vg1-34-text-3',
      type: 'text',
      content: `**Andre jevningsmetoder**

**Maisennamel (stivelse)**:
- Rør ut i kald væske først
- Tilsett under omrøring
- Gir blank, glatt saus
- Tåler ikke lang koking

**Smør (monter au beurre)**:
- Kaldt smør i terninger
- Vispes inn i varm saus
- Gir glans og fylde
- Gjøres rett før servering

**Crème fraîche/fløte**:
- Tilsettes og kokes inn
- Gir kremete konsistens
- Runder av syrlige smaker

**Eggeplomme (liaison)**:
- Blandes med litt fløte
- Temperes med varm saus
- Ikke kok etterpå!
- Gir fylde og glans`,
    },
    {
      id: 'restaurant-mat-vg1-34-text-4',
      type: 'text',
      content: `**Reduksjonsteknikk**

**Grunnleggende reduksjon**:
- Kok væske på middels varme
- Reduser til ønsket mengde
- 1/2 = halvt så mye væske
- 1/4 = kvart så mye væske

**Vinreduksjon**:
- Kok inn vin til sirupskonsistens
- Alkoholen fordamper
- Smaken konsentreres
- Base for mange sauser

**Glace de viande**:
- Brun fond redusert til 1/10
- Ekstrem smakskonsentrasjon
- Brukes i små mengder
- Holdbar i kjøleskap

**Tips**:
- Smak underveis
- Salting på slutten
- Pass på at det ikke brenner
- Bruk vid gryte for raskere fordamping`,
    },
    {
      id: 'restaurant-mat-vg1-34-tip-1',
      type: 'tip',
      title: 'Siling av saus',
      content: `Sil alltid sauser gjennom finmasket sil før servering. Fjerner klumper og gir silkemyk konsistens. For ekstra fin saus, bruk osteklede.`,
    },
    {
      id: 'restaurant-mat-vg1-34-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem morsausene i klassisk fransk kokkekunst?',
        solution: 'Béchamel, velouté, espagnole, hollandaise og tomatsaus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-34-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er roux og hvilke typer finnes?',
        solution: 'Roux er en blanding av smør og mel brukt til jevning. Det finnes hvit, lys og brun roux, avhengig av hvor lenge den stekes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-34-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "monter au beurre"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Å vispe inn kaldt smør i sausen for glans og fylde',
            multipleChoiceOptions: [
              'Å vispe inn kaldt smør i sausen for glans og fylde',
              'Å steke smør til det bruner',
              'Å smelte smør i mikrobølgeovn',
              'Å blande smør med mel',
            ],
          },
        ],
        solution: 'Monter au beurre betyr å vispe inn kaldt smør i terninger i varm saus rett før servering, for å gi glans og fylde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-34-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor skal eggeplomme-liaison ikke kokes etter tilsetting?',
        solution: 'Fordi egget vil koagulere (stivne) ved koking og gi klumper i sausen i stedet for jevn konsistens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-34-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er glace de viande?',
        solution: 'Brun fond som er redusert til ca. 1/10 av opprinnelig volum - en svært konsentrert smaksbomme som brukes i små mengder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-34-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du lager en klassisk béchamelsaus, fra roux til ferdig saus.',
        solution: 'Smelt smør, rør inn like mye mel, stek 2-3 min uten farge. Tilsett kald melk gradvis under visping. Kok opp under omrøring. La småkoke 10-15 min. Smak til med salt, pepper, muskat. Sil før servering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-34-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-34-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag en oversikt over hvilken jevningsmetode du ville brukt til: a) kremet kyllingsuppe, b) asiatisk woksaus, c) klassisk peppersteaksaus.',
        solution: 'a) Kyllingsuppe: Roux eller liaison for kremete konsistens. b) Woksaus: Maisennamel for blank, tyktflytende saus. c) Peppersteaksaus: Reduksjon + monter au beurre for rik smak og glans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 35: Wok og asiatiske teknikker
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_35: TextbookChapter = {
  id: 'restaurant-mat-vg1-35',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '35',
  title: 'Wok og asiatiske teknikker',
  description: 'Lær wok-teknikk, asiatiske smaksprofiler og grunnleggende retter fra det asiatiske kjøkkenet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beherske grunnleggende wok-teknikk',
    'forstå asiatiske smaksprinsipper',
    'tilberede autentiske asiatiske retter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-35-intro',
      type: 'text',
      content: `Asiatisk matlagingsteknikk har blitt en sentral del av moderne kjøkken verden over. Wok-teknikken gir rask tilberedning med bevart sprøhet og næringsstoffer. I dette kapittelet lærer du grunnprinsippene.`,
    },
    {
      id: 'restaurant-mat-vg1-35-def-1',
      type: 'definition',
      title: 'Wok hei',
      content: `Wok hei (kantonesisk for "wokens pust") er den røykaktige, karamelliserte smaken som oppstår ved stir-fry på ekstrem varme. Krever svært høy temperatur og rask teknikk.`,
    },
    {
      id: 'restaurant-mat-vg1-35-text-1',
      type: 'text',
      content: `**Wok-utstyr**

**Woktyper**:
- Karbonstål: Tradisjonell, krever innbrenning
- Støpejern: Tung, holder varmen godt
- Non-stick: Enkel, men tåler ikke like høy varme

**Tilbehør**:
- Wokspade (chuan)
- Øse med hull
- Damprist
- Wokring for stabil plassering

**Innbrenning av karbonstål-wok**:
1. Vask og tørk grundig
2. Varm på høy varme
3. Smør med olje
4. La avkjøle og gjenta 3-4 ganger
5. Svart patina = klar til bruk`,
    },
    {
      id: 'restaurant-mat-vg1-35-text-2',
      type: 'text',
      content: `**Stir-fry teknikk**

**Forberedelse (mise en place)**:
- Alt kuttet og klart FØR du starter
- Ingredienser romtemperert
- Sauser blandet på forhånd
- Tilbehør innen rekkevidde

**Grunnleggende teknikk**:
1. Varm woken til den ryker
2. Tilsett olje (høy brennpunkt)
3. Hvitløk/ingefær først (10 sek)
4. Protein (stek, fjern)
5. Harde grønnsaker først
6. Myke grønnsaker sist
7. Protein tilbake
8. Saus, rør raskt
9. Server umiddelbart

**Viktig**:
- Ikke overfyll woken
- Hold ingrediensene i bevegelse
- Arbeid i porsjoner om nødvendig`,
    },
    {
      id: 'restaurant-mat-vg1-35-text-3',
      type: 'text',
      content: `**Asiatiske smaksprofiler**

**De fem smakene i balanse**:
- Salt: Soyasaus, fiskesaus
- Søtt: Sukker, mirin, hoisin
- Surt: Riseddik, lime
- Bittert: Bitter melon, te
- Umami: Soya, østerssaus, dashi

**Kinesisk**:
- Soyasaus, ingefær, hvitløk
- Sesamolje, risvin
- Szechuan-pepper, stjerneanis

**Japansk**:
- Dashi, miso, soyasaus
- Mirin, sake
- Subtilt og rent

**Thai**:
- Fiskesaus, lime, chili
- Kokosmelk, sitrongress
- Søtt-surt-salt-sterkt

**Vietnamesisk**:
- Fiskesaus, friske urter
- Limesaft, chili
- Lett og friskt`,
    },
    {
      id: 'restaurant-mat-vg1-35-text-4',
      type: 'text',
      content: `**Klassiske wok-retter**

**Kinesisk stekt ris**:
- Kald, dagsgammel ris
- Egg, grønnsaker, protein
- Soyasaus, sesamolje
- Vårløk til slutt

**Pad Thai**:
- Risnudler, bløtlagt
- Reker/kylling/tofu
- Tamarindsaus, fiskesaus
- Egg, peanøtter, lime

**Teriyaki**:
- Soyasaus, mirin, sukker
- Reduseres til glasur
- Pensles på protein
- Server med ris

**Grønn karri**:
- Grønn karripasta
- Kokosmelk
- Grønnsaker og protein
- Thai-basilikum, chili`,
    },
    {
      id: 'restaurant-mat-vg1-35-tip-1',
      type: 'tip',
      title: 'Ris til wok',
      content: `Bruk alltid kald ris, helst fra dagen før. Fersk ris er for fuktig og blir klissete. Spread risen utover et fat og kjøl ned i kjøleskap over natten.`,
    },
    {
      id: 'restaurant-mat-vg1-35-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er wok hei?',
        solution: 'Den røykaktige, karamelliserte smaken som oppstår ved stir-fry på ekstrem varme - "wokens pust".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-35-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-2',
        number: '2',
        type: 'classic',
        task: 'I hvilken rekkefølge tilsettes ingredienser ved wok?',
        solution: 'Aromater (hvitløk/ingefær) først, deretter protein som fjernes, så harde grønnsaker, myke grønnsaker, protein tilbake, og saus til slutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-35-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor brukes kald ris til stekt ris?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Kald ris er tørrere og blir sprøere, ikke klissete',
            multipleChoiceOptions: [
              'Kald ris er tørrere og blir sprøere, ikke klissete',
              'Kald ris smaker bedre',
              'Kald ris koker raskere',
              'Det er tradisjon',
            ],
          },
        ],
        solution: 'Kald ris har mistet fuktighet og blir derfor sprøere og mindre klissete ved steking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-35-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre typiske smaker i thailandsk mat.',
        solution: 'Fiskesaus (salt/umami), lime (surt), chili (sterkt) - ofte balansert med søtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-35-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor skal woken være svært varm før tilsetting av ingredienser?',
        solution: 'For å oppnå wok hei - den karakteristiske smaken - og for å svi overflaten raskt så grønnsakene forblir sprø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-35-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg mise en place for en kinesisk stekt ris med kylling og grønnsaker. List opp alt som må forberedes.',
        solution: 'Forbered: Kald ris, kylling i biter marinert i soya, egg pisket, grønnsaker kuttet (gulrot, erter, mais, vårløk), hvitløk og ingefær hakket, saus blandet (soya, sesamolje). Ha alt i separate boller klart ved woken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-35-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-35-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Sammenlign smaksprofilene i kinesisk, japansk og thailandsk mat. Hvilke hovedforskjeller finner du?',
        solution: 'Kinesisk: Soyabasert, ingefær/hvitløk, ofte sterke smaker. Japansk: Subtilt, dashi-basert, rent og minimalistisk. Thai: Balanse mellom søtt, surt, salt og sterkt, mye ferske urter og fiskesaus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 36: Supper fra hele verden
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_36: TextbookChapter = {
  id: 'restaurant-mat-vg1-36',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '36',
  title: 'Supper fra hele verden',
  description: 'Lær om klassiske suppetyper, teknikker og internasjonale suppevarianter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lage ulike suppetyper fra bunnen',
    'forstå forskjellen mellom klare og bundne supper',
    'tilberede internasjonale suppeklassikere',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-36-intro',
      type: 'text',
      content: `Supper finnes i alle verdens kjøkken og varierer fra lette forretter til mettende hovedretter. Fra fransk løksuppe til vietnamesisk pho - suppekunsten krever forståelse for fond, smaksutvikling og tekstur.`,
    },
    {
      id: 'restaurant-mat-vg1-36-def-1',
      type: 'definition',
      title: 'Consommé',
      content: `Consommé er en krystallklar suppe laget ved å klarifisere buljong med eggehviter og hakket kjøtt. Representerer høy fransk kokkekunst.`,
    },
    {
      id: 'restaurant-mat-vg1-36-text-1',
      type: 'text',
      content: `**Suppetyper**

**Klare supper**:
- Buljong: Enkel, smakfull kraft
- Consommé: Klarifisert, raffinert
- Asiatiske nudelsupper: Pho, ramen

**Bundne supper (kremsupper)**:
- Velouté: Jevnet med roux
- Kremet: Med fløte/melk
- Potetsuppe: Naturlig jevning

**Tykkere supper**:
- Bisque: Skalldyrsuppe, silkemyk
- Chowder: Chunky, ofte med melk
- Grytesupper: Mettende, rustikke

**Kalde supper**:
- Gazpacho: Spansk tomatsuppe
- Vichyssoise: Kremet purresuppe
- Fruktsupper: Søte varianter`,
    },
    {
      id: 'restaurant-mat-vg1-36-text-2',
      type: 'text',
      content: `**Klassikere fra Europa**

**Fransk løksuppe**:
- Karamelliserte løk (45-60 min)
- Kraftig oksefond
- Gratinert med brød og ost
- Server i ovnsikre boller

**Minestrone (Italia)**:
- Grønnsakssuppe med pasta/bønner
- Tomat- eller fondbase
- Varierer med sesong
- Pesto på toppen

**Borsjtj (Østeuropa)**:
- Rødbetsuppe
- Kjøtt eller vegetarisk
- Serveres med rømme
- Rød, vakker farge

**Spansk gazpacho**:
- Kald tomatsuppe
- Rå grønnsaker blandet
- Olivenolje, eddik
- Sommerfavoritt`,
    },
    {
      id: 'restaurant-mat-vg1-36-text-3',
      type: 'text',
      content: `**Asiatiske supper**

**Vietnamesisk pho**:
- Klar oksefond (kokt 6-12 timer)
- Risnudler
- Tynne skiver rått kjøtt (koker i suppen)
- Urter, lime, chili

**Japansk ramen**:
- Rik svinebuljong (tonkotsu)
- Eller kylling/soya-basert
- Nudler, egg, chashu-svin
- Kompleks umami

**Thai tom yum**:
- Sur-sterk suppe
- Sitrongress, galangal, kaffirlime
- Reker eller kylling
- Fiskesaus, lime

**Kinesisk wonton-suppe**:
- Klar kylling/svinefond
- Fyllte wonton-dumplings
- Bok choy, vårløk
- Lett og elegant`,
    },
    {
      id: 'restaurant-mat-vg1-36-text-4',
      type: 'text',
      content: `**Teknikker for god suppe**

**Smaksbygging**:
- Start med god fond/buljong
- Svits aromater først
- La smakene utvikles over tid
- Juster krydder på slutten

**Tekstur**:
- Varier mellom chunky og glatt
- Blend delvis for kropp
- Garnityr for kontrast

**Finish**:
- Friske urter ved servering
- Godt brød ved siden
- Fløte/rømme for fylde
- Oljer for glans

**Servering**:
- Varm suppe i varme boller
- Kald suppe i kalde boller
- Ikke overfyll
- Garnityr synlig på toppen`,
    },
    {
      id: 'restaurant-mat-vg1-36-tip-1',
      type: 'tip',
      title: 'Karamelliserte løk',
      content: `Ekte karamellisering tar 45-60 minutter på lav varme. Ikke ta snarveier! Tilsett en klype sukker og salt tidlig. Rør av og til og la løken bli dypt gyllen.`,
    },
    {
      id: 'restaurant-mat-vg1-36-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på buljong og consommé?',
        solution: 'Buljong er en enkel, smakfull kraft, mens consommé er klarifisert (renset) buljong som er krystallklar og representerer høy fransk kokkekunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-36-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke smaker kjennetegner thailandsk tom yum?',
        solution: 'Sur (lime) og sterk (chili), med aromater som sitrongress, galangal og kaffirlimeblader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-36-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er gazpacho?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Spansk kald tomatsuppe med rå grønnsaker',
            multipleChoiceOptions: [
              'Spansk kald tomatsuppe med rå grønnsaker',
              'Italiensk varm grønnsakssuppe',
              'Fransk løksuppe',
              'Asiatisk nudelsuppe',
            ],
          },
        ],
        solution: 'Gazpacho er en spansk kald suppe laget av rå tomater og andre grønnsaker, olivenolje og eddik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-36-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor tar ekte karamellisering av løk så lang tid?',
        solution: 'Fordi sukkerartene i løken må brytes ned og karamelliseres sakte på lav varme for å utvikle dyp, søt smak uten å brenne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-36-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom pho og ramen?',
        solution: 'Pho er vietnamesisk med klar buljong og risnudler, ramen er japansk med ofte rikere buljong og hvetenudler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-36-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg en suppemeny med tre forskjellige supper fra tre verdensdeler. Beskriv hovedingredienser og teknikk for hver.',
        solution: 'Eksempel: Europa - Fransk løksuppe (karamelliserte løk, oksefond, gratinert). Asia - Tom yum (klar fond, sitrongress, reker, sur-sterk). Amerika - Clam chowder (skjell, fløte, poteter, bacon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-36-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-36-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Velg en suppetype og beskriv hvordan den kan tilpasses sesongvariasjoner gjennom året.',
        solution: 'Eksempel minestrone: Vår - asparges, erter, vårløk. Sommer - squash, tomater, basilikum. Høst - gresskar, kål, sopp. Vinter - rotfrukter, belgfrukter, grønnkål. Samme grunnteknikk, varierende ingredienser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 37: Egg i alle former
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_37: TextbookChapter = {
  id: 'restaurant-mat-vg1-37',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '37',
  title: 'Egg i alle former',
  description: 'Lær eggets egenskaper og mestre klassiske eggeretter fra omelett til pocherte egg.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå eggets egenskaper i matlaging',
    'tilberede egg med ulike teknikker',
    'mestre klassiske franske eggeretter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-37-intro',
      type: 'text',
      content: `Egget er en av de mest allsidige ingrediensene i kjøkkenet. Det kan binde, jevne, heve, emulgere og serveres som egen rett. Å mestre egg er et tegn på en dyktig kokk - fra den perfekte omeletten til silkemyke pocherte egg.`,
    },
    {
      id: 'restaurant-mat-vg1-37-def-1',
      type: 'definition',
      title: 'Koagulering',
      content: `Koagulering er prosessen der eggproteiner stivner ved oppvarming. Eggeplomme koagulerer ved ca. 65-70°C, eggehvite ved ca. 62-65°C. Overkoking gir gummig tekstur.`,
    },
    {
      id: 'restaurant-mat-vg1-37-text-1',
      type: 'text',
      content: `**Eggets egenskaper**

**Binde**:
- Holder ingredienser sammen
- Farser, kaker, panering
- Proteinet koagulerer og "limer"

**Heve**:
- Pisket hvite = skum
- Fanger luft
- Soufflé, marengs

**Emulgere**:
- Lecitin i plomme
- Holder fett og vann sammen
- Majones, hollandaise

**Jevne**:
- Cremer, vaniljesaus
- Gir kropp og fylde
- Forsiktig varme!

**Farge og glans**:
- Eggvasking gir gyllen farge
- Brukes på bakst
- Glans på paier`,
    },
    {
      id: 'restaurant-mat-vg1-37-text-2',
      type: 'text',
      content: `**Kokte egg**

**Bløtkokt** (myk plomme):
- Kok vann, senk egg forsiktig ned
- 6-7 minutter fra kokende vann
- Avkjøl i kaldt vann 30 sek
- Perfekt til frokost, ramen

**Smilende** (halvfast plomme):
- 8-9 minutter
- Plomme fortsatt litt flytende i midten
- Populær i salater

**Hardkokt** (fast plomme):
- 10-12 minutter
- Helt fast plomme
- Til eggesalat, pynt
- Unngå grønn ring rundt plomme

**Tips**: Start med egg i romtemperatur for å unngå at de sprekker.`,
    },
    {
      id: 'restaurant-mat-vg1-37-text-3',
      type: 'text',
      content: `**Pocherte egg**

**Teknikk**:
1. Kok vann med dash eddik
2. Lag virvel i vannet
3. Knekk egg i kopp først
4. Slipp egg i virvelen
5. Pocher 3-4 minutter
6. Løft opp med hulløse

**Tips for suksess**:
- Bruk ferskest mulige egg
- Vannet skal sildre, ikke koke
- Eddik hjelper hviten å stivne
- Trim løse "haler"

**Eggs Benedict**:
- Pochert egg på muffin
- Bacon eller skinke
- Hollandaisesaus
- Klassisk brunch-rett`,
    },
    {
      id: 'restaurant-mat-vg1-37-text-4',
      type: 'text',
      content: `**Omelett og eggerøre**

**Fransk omelett**:
- 3 egg, salt, pepper
- Smør i panne på medium varme
- Rør med gaffel til cremig
- Fold når nesten stivnet
- Skal være lys, myk innvendig
- Ingen bruning!

**Eggerøre**:
- Visp egg med litt melk
- Lav varme, rør konstant
- Ta av varmen før helt stivnet
- Fortsetter å koke av restvarme
- Kremig, ikke gummig

**Fritata (italiensk)**:
- Åpen omelett
- Ferdigstekt i ovn
- Med grønnsaker, ost, kjøtt
- Serveres ofte kald`,
    },
    {
      id: 'restaurant-mat-vg1-37-tip-1',
      type: 'tip',
      title: 'Ferskhet av egg',
      content: `Test ferskhet: Senk egg i vann. Ferskt egg synker og ligger flatt. Eldre egg reiser seg. Gammelt egg flyter. Jo eldre egg, jo lettere å skrelle etter koking.`,
    },
    {
      id: 'restaurant-mat-vg1-37-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ved hvilken temperatur koagulerer eggeplomme?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig temperatur.',
            solution: '65-70°C',
            multipleChoiceOptions: [
              '65-70°C',
              '100°C',
              '45-50°C',
              '80-85°C',
            ],
          },
        ],
        solution: 'Eggeplomme koagulerer ved ca. 65-70°C. Eggehvite stivner ved litt lavere temperatur (62-65°C).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-37-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor tilsettes eddik i vannet ved pochering?',
        solution: 'Eddik hjelper eggehviten å koagulere raskere slik at den holder seg samlet rundt plommen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-37-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor lenge koker man et bløtkokt egg?',
        solution: '6-7 minutter fra kokende vann for myk, flytende plomme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-37-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på fransk omelett og fritata?',
        solution: 'Fransk omelett er foldet, myk innvendig og tilberedes raskt på komfyr. Fritata er åpen, ferdigstekt i ovn, og serveres ofte kald.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-37-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn fire funksjoner egg har i matlaging.',
        solution: 'Binde, heve, emulgere og jevne (også farge/glans).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-37-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg en brunchmeny med tre eggeretter tilberedt på forskjellige måter. Beskriv teknikken for hver.',
        solution: 'Eksempel: 1) Eggs Benedict - pochert egg på muffin med hollandaise. 2) Fransk omelett med urter - rask steking, folding. 3) Shakshuka - egg pochert i tomatsaus. Varierer teknikk og presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-37-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-37-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Beskriv hvordan eggets egenskaper utnyttes i: a) majones, b) soufflé, c) vaniljekrem.',
        solution: 'a) Majones: Lecitin i plomme emulgerer olje og eddik. b) Soufflé: Piskede hviter fanger luft og hever retten. c) Vaniljekrem: Plomme jevner og gir kropp når den koagulerer forsiktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 38: Pasta og deigvarer
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_38: TextbookChapter = {
  id: 'restaurant-mat-vg1-38',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '38',
  title: 'Pasta og deigvarer',
  description: 'Lær å lage fersk pasta, velge riktig pastaform og beherske klassiske pastaretter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lage fersk pasta fra bunnen',
    'velge riktig pasta til ulike sauser',
    'tilberede klassiske italienske pastaretter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-38-intro',
      type: 'text',
      content: `Pasta er hjørnesteinen i det italienske kjøkkenet og elsket verden over. Fra silkemyk fersk tagliatelle til al dente spaghetti - god pasta krever forståelse for deig, koking og sauskombinasjoner.`,
    },
    {
      id: 'restaurant-mat-vg1-38-def-1',
      type: 'definition',
      title: 'Al dente',
      content: `Al dente (italiensk for "til tannen") beskriver perfekt kokt pasta som er mør men fortsatt har motstand i midten. Testen er å bite i pastaen - den skal ikke være myk hele veien gjennom.`,
    },
    {
      id: 'restaurant-mat-vg1-38-text-1',
      type: 'text',
      content: `**Fersk pasta**

**Grunnoppskrift** (4 porsjoner):
- 400 g tipo 00 mel (eller hvetemel)
- 4 eggeplommer + 1 helt egg
- 1 ss olivenolje
- Klype salt

**Fremgangsmåte**:
1. Lag brønn av mel på benk
2. Ha egg, olje og salt i midten
3. Arbeid sammen med gaffel
4. Elt til glatt deig (10 min)
5. Hvil innpakket 30 min
6. Kjevle tynt og skjær

**Varianter**:
- Spinatpasta: + 100 g spinat (avvannet)
- Tomatpasta: + 2 ss tomatpuré
- Blekksprutpasta: + blekksprut-blekk`,
    },
    {
      id: 'restaurant-mat-vg1-38-text-2',
      type: 'text',
      content: `**Pastaformer og sausvalg**

**Lange, tynne** (spaghetti, linguine):
- Olje- og tomatbaserte sauser
- Carbonara, aglio e olio
- Sausen "klistrer" seg til pastaen

**Brede, flate** (tagliatelle, pappardelle):
- Rike kjøttsauser
- Bolognese, ragù
- Tåler tyngre sauser

**Rør** (penne, rigatoni):
- Chunky sauser
- Sausen fanges inne i røret
- Arrabbiata, all'amatriciana

**Små** (orecchiette, farfalle):
- Grønnsakssauser
- Broccoli, erter
- Lette kremsauser

**Fylte** (ravioli, tortellini):
- Lette sauser
- Smørsaus, salvie
- La fyllet skinne`,
    },
    {
      id: 'restaurant-mat-vg1-38-text-3',
      type: 'text',
      content: `**Perfekt kokt pasta**

**Grunnregler**:
- Stort volum vann (1 liter per 100 g)
- Godt saltet (som havet)
- Aldri olje i vannet
- Rør første minutt
- Test ofte mot slutten

**Al dente-test**:
- Bit i en pastabit
- Hvit prikk i midten = nesten klar
- Når prikken forsvinner = al dente
- Kok 1-2 min kortere enn pakken sier

**Finish i saus**:
- Spar pastavann!
- Bland pasta og saus i pannen
- Tilsett pastavann for binding
- Stivelsen jevner og binder sausen`,
    },
    {
      id: 'restaurant-mat-vg1-38-text-4',
      type: 'text',
      content: `**Klassiske retter**

**Carbonara** (Roma):
- Guanciale (svinekinn), egg, pecorino
- Ingen fløte!
- Lages av varmen fra pasta

**Bolognese** (Bologna):
- Kjøttdeig, soffritto, tomat
- Langkokt ragù
- Tradisjonelt med tagliatelle

**Cacio e pepe** (Roma):
- Kun pecorino og pepper
- Teknikk-krevende
- Pastavann emulgerer osten

**Pesto alla Genovese** (Genova):
- Basilikum, pinjekjerner, hvitløk
- Pecorino og parmesan
- Serveres med trenette/trofie

**Aglio e olio**:
- Hvitløk, olivenolje, chili
- Enkel og god
- Persillegarnityr`,
    },
    {
      id: 'restaurant-mat-vg1-38-tip-1',
      type: 'tip',
      title: 'Pastavann er gull',
      content: `Spar alltid en kopp pastavann! Stivelsen i vannet binder saus og pasta sammen. Tilsett litt om gangen til sausen har riktig konsistens. Italienerne kaller det "pasta water magic".`,
    },
    {
      id: 'restaurant-mat-vg1-38-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr al dente?',
        solution: 'Italiensk for "til tannen" - pasta som er mør men fortsatt har motstand i midten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-38-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken pasta passer best til bolognese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig pasta.',
            solution: 'Tagliatelle',
            multipleChoiceOptions: [
              'Tagliatelle',
              'Spaghetti',
              'Farfalle',
              'Orzo',
            ],
          },
        ],
        solution: 'Tradisjonelt serveres bolognese med tagliatelle - bred pasta som tåler den rike kjøttsausen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-38-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal man ikke ha olje i pastavannet?',
        solution: 'Olje hindrer sausen fra å feste seg til pastaen. Stivelsen på pastaoverflaten hjelper sausen å binde seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-38-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er hovedingrediensene i ekte carbonara?',
        solution: 'Guanciale (svinekinn), egg, pecorino-ost og pepper. Ingen fløte!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-38-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig å spare pastavann?',
        solution: 'Stivelsen i pastavannet binder saus og pasta sammen og gir sausen bedre konsistens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-38-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du lager fersk pasta fra deig til ferdig kokt.',
        solution: 'Bland mel, egg, olje og salt. Elt 10 min til glatt. Hvil 30 min. Kjevle tynt, skjær i ønsket form. Kok i godt saltet vann i 2-3 min. Test al dente. Bland med saus og pastavann.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-38-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-38-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Velg tre forskjellige pastaformer og beskriv hvilken saus som passer best til hver, og hvorfor.',
        solution: 'Spaghetti - aglio e olio (tynn pasta, lett saus klistrer seg til). Rigatoni - arrabbiata (chunky saus fanges i rørene). Pappardelle - viltragù (bred pasta tåler rik saus).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 39: Poteter - den allsidige råvaren
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_39: TextbookChapter = {
  id: 'restaurant-mat-vg1-39',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '39',
  title: 'Poteter - den allsidige råvaren',
  description: 'Lær om potetsorter, tilberedningsmetoder og klassiske potetretter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velge riktig potetsort til ulike retter',
    'beherske ulike tilberedningsmetoder',
    'lage klassiske potetretter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-39-intro',
      type: 'text',
      content: `Poteten er blant de mest allsidige råvarene i kjøkkenet. Fra kremete potetmos til sprø pommes frites - riktig sort og teknikk er avgjørende for resultatet.`,
    },
    {
      id: 'restaurant-mat-vg1-39-def-1',
      type: 'definition',
      title: 'Stivelsesinnhold',
      content: `Potetens stivelsesinnhold avgjør teksturen. Melne poteter (høy stivelse) egner seg til mos og baking. Faste poteter (lav stivelse) holder formen ved koking og i salater.`,
    },
    {
      id: 'restaurant-mat-vg1-39-text-1',
      type: 'text',
      content: `**Potettyper**

**Melne poteter** (høy stivelse):
- Maris Piper, Russet, King Edward
- Luftig, flakete tekstur
- Perfekt til: Mos, bakte poteter, pommes frites

**Faste poteter** (lav stivelse):
- Mandel, Ratte, fingerling
- Holder formen ved koking
- Perfekt til: Salater, kokte poteter, grateng

**Allround poteter** (middels stivelse):
- Yukon Gold, Gulløye
- Fungerer til det meste
- God til: Stuinger, supper, ovnsbaking

**Nypoteter**:
- Høstes umodne
- Tynt skall, søt smak
- Best kokt eller dampet
- Sesongvare vår/sommer`,
    },
    {
      id: 'restaurant-mat-vg1-39-text-2',
      type: 'text',
      content: `**Klassiske tilberedninger**

**Potetmos**:
- Bruk melne poteter
- Kok fra kaldt vann med salt
- Press mens de er varme
- Rør inn varmt smør og melk
- Aldri bruk stavmikser (blir klissete)!

**Pommes frites**:
- Skjær i jevne staver
- Bløtlegg i kaldt vann
- Forkok ved 130°C til myke
- Avkjøl, fritter ved 180°C til gylne

**Hasselbackpoteter**:
- Skjær skiver, ikke helt gjennom
- Pensle med smør
- Stek ved 200°C i 45-60 min
- Sprø på toppen, myk inni

**Gratinerte poteter**:
- Tynne skiver
- Lag med fløte og ost
- Stek ved 180°C i 1-1,5 time
- Gyllen topp, kremet inni`,
    },
    {
      id: 'restaurant-mat-vg1-39-text-3',
      type: 'text',
      content: `**Profesjonelle teknikker**

**Pommes purée** (fransk luksusmos):
- 50% smør av potetens vekt
- Varmt melk
- Passeres gjennom sikt
- Silkemyk konsistens

**Rösti** (sveitsisk):
- Grovrevet rå eller kokt potet
- Stekt i panne til sprøtt
- Kan tilsettes løk, bacon

**Pommes duchesse**:
- Mos blandet med egg
- Sprøytes i rosetter
- Gratineres i ovn
- Elegant garnityr

**Fondantpoteter**:
- Sylindre skåret ut
- Brunt i smør
- Braiseres i fond
- Karamellisert bunn, myk topp`,
    },
    {
      id: 'restaurant-mat-vg1-39-text-4',
      type: 'text',
      content: `**Tips og triks**

**Oppbevaring**:
- Kjølig, mørkt og tørt
- Ikke i kjøleskap (blir søte)
- Unngå grønne partier (solanin)

**Før tilberedning**:
- Skrell kun om nødvendig
- Legg i kaldt vann mot misfarging
- Tørk godt før fritering

**Koking**:
- Start i kaldt vann for jevn koking
- Salt vannet godt
- Sjekk med kniv - lett motstand = ferdig

**Steketemperaturer**:
- Lav varme (130°C): Forkoking frites
- Medium (160°C): Sakte steking
- Høy (180-200°C): Sprø overflate`,
    },
    {
      id: 'restaurant-mat-vg1-39-tip-1',
      type: 'tip',
      title: 'Perfekt potetmos',
      content: `Press potetene mens de er varme - kald potet blir klissete. Bruk potetpresse eller passersikt, aldri stavmikser. Rør inn romtemperert smør først, deretter varm melk.`,
    },
    {
      id: 'restaurant-mat-vg1-39-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken potettype egner seg best til potetmos?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig type.',
            solution: 'Melne poteter med høy stivelse',
            multipleChoiceOptions: [
              'Melne poteter med høy stivelse',
              'Faste poteter med lav stivelse',
              'Nypoteter',
              'Alle typer fungerer like bra',
            ],
          },
        ],
        solution: 'Melne poteter gir luftig, flakete mos. Faste poteter blir klissete.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-39-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor skal man ikke bruke stavmikser til potetmos?',
        solution: 'Stavmikseren overarbeider stivelsen og gjør mosen klissete og gummig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-39-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv dobbeltfritering av pommes frites.',
        solution: 'Først forkok ved 130°C til myke, avkjøl, deretter friter ved 180°C til gylne og sprø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-39-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor skal poteter oppbevares mørkt?',
        solution: 'Lys får poteter til å bli grønne og utvikle solanin, som er giftig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-39-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er pommes duchesse?',
        solution: 'Potetmos blandet med egg, sprøytet i rosetter og gratinert i ovn - brukes som elegant garnityr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-39-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Planlegg tre potetretter til en meny og forklar valg av potetsort for hver.',
        solution: 'Eksempel: Forrett - varm potetsalat med faste poteter (holder formen). Hovedrett - pommes purée med melne poteter (luftig mos). Tilbehør - hasselback med allround-poteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-39-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-39-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Sammenlign ulike tilberedningsmetoder for poteter og beskriv når hver metode er best egnet.',
        solution: 'Koking - til mos, salat, puré. Steking - for sprøhet, hasselback, rösti. Fritering - pommes frites, chips. Baking - bakte poteter, grateng. Dampkoking - nypoteter, bevarer næring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 40: Ris og korn
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_40: TextbookChapter = {
  id: 'restaurant-mat-vg1-40',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '40',
  title: 'Ris og korn',
  description: 'Lær om ulike rissorter, korntilberedning og klassiske retter som risotto og pilaff.',
  estimatedMinutes: 55,
  competenceGoals: [
    'velge riktig ris til ulike retter',
    'beherske ulike koketeknikker for ris',
    'tilberede klassiske ris- og kornretter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-40-intro',
      type: 'text',
      content: `Ris og korn er basisingredienser i kjøkken verden over. Fra kremete risotto til duftende jasminris - riktig sort og teknikk gir perfekt resultat.`,
    },
    {
      id: 'restaurant-mat-vg1-40-def-1',
      type: 'definition',
      title: 'Risotto',
      content: `Risotto er en italiensk risrett der risen stekes og tilsettes fond sleppevis mens den røres. Resultatet er kremete men med "bite" i riskornet.`,
    },
    {
      id: 'restaurant-mat-vg1-40-text-1',
      type: 'text',
      content: `**Ristyper**

**Langkornet ris**:
- Basmati: Indisk, aromatisk, løse korn
- Jasmin: Thai, duftende, litt klebrig
- Parboiled: Forkokt, vanskelig å overkoke

**Kortkornet ris**:
- Arborio: Italiensk, til risotto
- Carnaroli: Premium risotto-ris
- Sushi-ris: Japansk, klebrig

**Spesialris**:
- Villris: Egentlig frø, nøtteaktig
- Svart ris: Dramatisk farge, nøtteaktig
- Rødbrunris: Fullkorn, mer fiber

**Fullkornsris**:
- Hele riskornet med skall
- Lengre koketid
- Mer næring og fiber`,
    },
    {
      id: 'restaurant-mat-vg1-40-text-2',
      type: 'text',
      content: `**Koketeknikker**

**Absorpsjon** (asiatisk stil):
- Skyll risen godt
- Kok opp med vann (1:1.5)
- Senk varmen, dekk til
- La dampe 15-20 min

**Pasta-metoden**:
- Kok i mye vann
- Hell av når ferdig
- Enkel, men tap av stivelse
- God til pilaff

**Risotto-teknikk**:
- Stek risen i smør
- Tilsett vin, kok inn
- Fond sleppevis under omrøring
- 18-20 min til al dente
- Mantecatura: Rør inn smør og ost

**Pilaff**:
- Stek aromater og ris i fett
- Tilsett fond, dekk til
- Stek i ovn eller på svak varme
- Fluffy, løse korn`,
    },
    {
      id: 'restaurant-mat-vg1-40-text-3',
      type: 'text',
      content: `**Andre kornsorter**

**Quinoa**:
- Komplett protein
- Skyll godt (bitterstoff)
- Koker som ris
- Passer til salater

**Bulgur**:
- Forkokt hvete
- Kun bløtlegging
- Midtøsten-mat
- Tabbouleh-salat

**Couscous**:
- Semulegryn
- Hell over kokende vann
- La svelle 5 min
- Nordafrikansk klassiker

**Byggryn**:
- Norsk tradisjon
- Langtidskoking
- Supper, gryteretter
- Byggrynsgrøt`,
    },
    {
      id: 'restaurant-mat-vg1-40-text-4',
      type: 'text',
      content: `**Klassiske retter**

**Risotto alla Milanese**:
- Safran gir gyllen farge
- Kalvefond
- Serveres med ossobuco

**Sushi-ris**:
- Skyll til vannet er klart
- Kok med kombu
- Vend inn riseddik
- Avkjøl raskt med vifte

**Pilaffris**:
- Stek løk og ris
- Tilsett krydder
- Hell på fond
- Stek i ovn under folie

**Fried rice**:
- Bruk kald, dagsgammel ris
- Høy varme i wok
- Egg, grønnsaker, protein
- Soyasaus og sesamolje`,
    },
    {
      id: 'restaurant-mat-vg1-40-tip-1',
      type: 'tip',
      title: 'Skyll risen',
      content: `Skyll asiatisk ris til vannet er klart for å fjerne overflatestivelse. Men: Skyll IKKE risottoris - stivelsen gir den kremete konsistensen!`,
    },
    {
      id: 'restaurant-mat-vg1-40-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken ris egner seg best til risotto?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig ris.',
            solution: 'Arborio eller Carnaroli',
            multipleChoiceOptions: [
              'Arborio eller Carnaroli',
              'Basmati',
              'Jasmin',
              'Villris',
            ],
          },
        ],
        solution: 'Arborio og Carnaroli er kortkornet ris med høyt stivelsesinnhold som gir kremete risotto.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-40-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er mantecatura?',
        solution: 'Å røre inn kaldt smør og ost i risotto på slutten for kremete konsistens og glans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-40-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal asiatisk ris skylles, men ikke risottoris?',
        solution: 'Asiatisk ris skylles for løse korn. Risottoris trenger stivelsen for kremete konsistens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-40-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er quinoa og hvorfor er den spesiell?',
        solution: 'Quinoa er et frø (ikke korn) som inneholder komplett protein med alle essensielle aminosyrer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-40-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv absorpsjonsmetoden for ris.',
        solution: 'Skyll ris, kok opp med vann (1:1.5 forhold), senk varmen, dekk til og la dampe ferdig i 15-20 min.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-40-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du lager en klassisk risotto.',
        solution: 'Stek løk i smør, tilsett ris og stek til gjennomskinnelig. Hell på hvitvin, kok inn. Tilsett varm fond sleppevis under konstant omrøring. Kok 18-20 min til al dente. Ta av varmen, rør inn smør og parmesan (mantecatura). Hvil 2 min, server.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-40-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-40-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Sammenlign tre ulike rissorter og forklar hvilke retter de passer best til.',
        solution: 'Basmati - indiske curries, pilaff (løse, aromatiske korn). Carnaroli - risotto (kremete, holder al dente). Sushi-ris - sushi, japanske retter (klebrig, holder sammen).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 41: Salater og dressinger
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_41: TextbookChapter = {
  id: 'restaurant-mat-vg1-41',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '41',
  title: 'Salater og dressinger',
  description: 'Lær om ulike salattyper, klassiske dressinger og profesjonell salatkomposisjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'komponere balanserte salater',
    'lage klassiske dressinger fra bunnen',
    'velge riktig salatblad til ulike retter',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-41-intro',
      type: 'text',
      content: `Salater er mer enn bare tilbehør - de kan være hovedretter, forretter eller elegante garnityr. En god salat balanserer smaker, teksturer og farger med en dressing som komplementerer.`,
    },
    {
      id: 'restaurant-mat-vg1-41-def-1',
      type: 'definition',
      title: 'Vinaigrette',
      content: `Vinaigrette er en emulgert dressing av olje og eddik (eller sitrus), vanligvis i forholdet 3:1. Kan smaksettes med sennep, urter, løk og krydder.`,
    },
    {
      id: 'restaurant-mat-vg1-41-text-1',
      type: 'text',
      content: `**Salatblader**

**Sprø og milde**:
- Isbergsalat: Knasende, nøytral
- Romaine/hjertesalat: Sprø, litt bitter
- Vår-/småbladsalat: Myk, mild

**Bitre og peprete**:
- Rucola: Pepper, nøtteaktig
- Frisée: Bitter, dekorativ
- Radicchio: Bitter, vakker farge

**Myke og søtlige**:
- Spinat: Mild, næringsrik
- Feldsalat: Nøtteaktig, delikat
- Eikebladssalat: Myk, mild

**Tips**:
- Vask og tørk godt
- Oppbevar i kjøleskap
- Dress først ved servering
- Bland ulike teksturer`,
    },
    {
      id: 'restaurant-mat-vg1-41-text-2',
      type: 'text',
      content: `**Klassiske dressinger**

**Vinaigrette**:
- 3 deler olje, 1 del eddik
- Salt, pepper, sennep
- Visp eller rist godt

**Caesar dressing**:
- Majones, hvitløk, ansjos
- Parmesan, sitron
- Worcestershire

**Ranch**:
- Majones, rømme
- Urter, hvitløk, løk
- Kjernmelk for konsistens

**Honning-sennep**:
- Sennep, honning
- Eddik, olje
- Søt og syrlig balanse

**Asiatisk**:
- Soyasaus, sesamolje
- Riseddik, ingefær
- Lime, chili`,
    },
    {
      id: 'restaurant-mat-vg1-41-text-3',
      type: 'text',
      content: `**Klassiske salater**

**Caesar salat**:
- Romaine, krutonger, parmesan
- Caesar dressing
- Kan toppe med kylling

**Salade Niçoise**:
- Grønne bønner, poteter, egg
- Tunfisk, oliven, ansjos
- Vinaigrette

**Caprese**:
- Tomat, mozzarella, basilikum
- Olivenolje, salt, pepper
- Enkel og perfekt om sommeren

**Waldorf salat**:
- Eple, selleri, valnøtter
- Majones-dressing
- Klassisk amerikansk

**Gresk salat**:
- Tomat, agurk, løk, paprika
- Oliven, fetaost
- Olivenolje, oregano`,
    },
    {
      id: 'restaurant-mat-vg1-41-text-4',
      type: 'text',
      content: `**Komposisjon**

**Balanse**:
- Søtt (frukt, honning)
- Surt (eddik, sitrus)
- Salt (ost, oliven)
- Bittert (grønne blader)
- Umami (parmesan, ansjos)

**Teksturer**:
- Sprøtt (krutonger, nøtter)
- Mykt (blader, avokado)
- Kremet (ost, dressing)
- Saftig (tomater, frukt)

**Farger**:
- Varier mellom grønt, rødt, hvitt
- Garnityr for farge
- Spis med øynene først

**Dressing-tips**:
- Bland med hender for jevn fordeling
- Dress lett - kan alltid tilsette mer
- Hold dressing på siden for lunch-retter`,
    },
    {
      id: 'restaurant-mat-vg1-41-tip-1',
      type: 'tip',
      title: 'Sprø salat',
      content: `Vask salatblader og sentrifuger tørre. Fuktige blader utvanner dressingen. Legg i iskaldt vann før servering for ekstra sprøhet.`,
    },
    {
      id: 'restaurant-mat-vg1-41-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er standard forholdet mellom olje og eddik i vinaigrette?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forhold.',
            solution: '3 deler olje, 1 del eddik',
            multipleChoiceOptions: [
              '3 deler olje, 1 del eddik',
              '1:1',
              '5 deler olje, 1 del eddik',
              '1 del olje, 3 deler eddik',
            ],
          },
        ],
        solution: 'Standard vinaigrette har 3 deler olje til 1 del eddik, men kan justeres etter smak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-41-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke ingredienser er i en klassisk Caesar-salat?',
        solution: 'Romaine-salat, krutonger, parmesan-ost og Caesar-dressing (med majones, ansjos, hvitløk og sitron).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-41-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal salatblader være tørre før dressing tilsettes?',
        solution: 'Fuktige blader utvanner dressingen og hindrer den fra å feste seg til bladene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-41-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre salatblader med bitter smak.',
        solution: 'Rucola, frisée og radicchio.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-41-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner en Salade Niçoise?',
        solution: 'Fransk salat med grønne bønner, poteter, egg, tunfisk, oliven og ansjos med vinaigrette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-41-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Komponer en sesongbasert salat for høsten. Beskriv ingredienser, teksturer og dressing.',
        solution: 'Eksempel: Base av spinat og frisée. Bakte rødbeter, geiteost, karamelliserte valnøtter, pære. Teksturer: sprø nøtter, myk ost, saftig frukt. Dressing: Balsamico-vinaigrette med honning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-41-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-41-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Lag tre forskjellige dressinger som passer til: a) grillet kylling, b) asiatisk salat, c) italiensk caprese.',
        solution: 'a) Ranch eller honning-sennep - kremet, balanserer grillet smak. b) Asiatisk - soya, sesam, ingefær, lime. c) Enkel olivenolje med balsamico - lar tomatene skinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 42: Steketeknikker i dybden
// ============================================================================

export const CHAPTER_RESTAURANT_MAT_VG1_42: TextbookChapter = {
  id: 'restaurant-mat-vg1-42',
  courseId: 'restaurant-mat-vg1',
  chapterNumber: '42',
  title: 'Steketeknikker i dybden',
  description: 'Lær avanserte steketeknikker, temperaturkontroll og hvordan du oppnår perfekt bruning.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beherske ulike steketeknikker',
    'forstå varmeoverføring og temperaturkontroll',
    'oppnå perfekt Maillard-reaksjon',
  ],
  content: [
    {
      id: 'restaurant-mat-vg1-42-intro',
      type: 'text',
      content: `Steking er en kunstart som krever forståelse for varme, timing og råvarens oppførsel. Fra sautering til braisering - hver teknikk har sitt formål og gir unike resultater.`,
    },
    {
      id: 'restaurant-mat-vg1-42-def-1',
      type: 'definition',
      title: 'Maillard-reaksjonen',
      content: `Maillard-reaksjonen er en kjemisk reaksjon mellom aminosyrer og reduserende sukkerarter ved temperaturer over 140°C. Gir brun farge, kompleks smak og deilig aroma.`,
    },
    {
      id: 'restaurant-mat-vg1-42-text-1',
      type: 'text',
      content: `**Steketeknikker**

**Sautéring**:
- Høy varme, lite fett
- Små biter, rask omrøring
- Grønnsaker, strimlet kjøtt
- Maten skal "hoppe" i pannen

**Pan-frying**:
- Medium-høy varme
- Mer fett enn sautering
- Større stykker, stekt på én side av gangen
- Koteletter, fisk, egg

**Stir-fry**:
- Svært høy varme (wok)
- Lite fett, konstant bevegelse
- Asiatisk teknikk
- Alt ferdig på sekunder

**Deep-frying**:
- Mat nedsenket i olje
- 160-190°C
- Sprø overflate, myk innside
- Krever termometer`,
    },
    {
      id: 'restaurant-mat-vg1-42-text-2',
      type: 'text',
      content: `**Perfekt bruning**

**Forutsetninger**:
- Tørr overflate på maten
- Varm panne før maten tilsettes
- Ikke overfyll pannen
- La maten ligge i ro

**Hvorfor tørke maten?**:
- Vann hindrer Maillard-reaksjon
- Vann fordamper ved 100°C
- Maillard skjer over 140°C
- Fuktig mat damper, ikke steker

**Overfylling**:
- Senker temperaturen drastisk
- Mat avgir væske
- Blir koking i stedet for steking
- Stek i porsjoner!

**La maten ligge**:
- Proteiner fester seg først
- Løsner naturlig når ferdig brunet
- Ikke flytt eller vend for tidlig
- 2-3 min per side for kjøtt`,
    },
    {
      id: 'restaurant-mat-vg1-42-text-3',
      type: 'text',
      content: `**Langsomme steketeknikker**

**Braisering**:
- Bruning først, deretter væske
- Lav varme, lang tid
- Tøffe stykker blir møre
- Lårlokk, grytekjøtt, ribbe

**Confitéring**:
- Koking i eget fett
- Lav temperatur (80-90°C)
- And, gås, hvitløk
- Bevares i fett

**Sakte-steking i ovn**:
- Lav ovnstemperatur (80-120°C)
- Lang tid (flere timer)
- Jevn gjennomsteking
- Perfekt til store stykker

**Reverse searing**:
- Først lav varme til ønsket kjerne
- Deretter høy varme for bruning
- Motsatt av tradisjonell metode
- Perfekt for tykke biffer`,
    },
    {
      id: 'restaurant-mat-vg1-42-text-4',
      type: 'text',
      content: `**Temperaturkontroll**

**Kjernetemperaturer**:
- Biff rare: 50-52°C
- Biff medium: 58-60°C
- Svin: 63-65°C
- Kylling: 74°C
- Lam medium: 58-60°C

**Verktøy**:
- Steketermometer er essensielt
- Mål i tykkeste del
- Unngå bein og fett
- Husk hviling!

**Hviling**:
- La kjøttet hvile etter steking
- 5-10 min avhengig av størrelse
- Saftene omfordeles
- Temperaturen stiger 3-5°C
- Dekk løst med folie

**Carryover cooking**:
- Maten fortsetter å koke etter varme fjernes
- Ta kjøttet av 3-5°C før ønsket temperatur
- Større stykker = mer carryover`,
    },
    {
      id: 'restaurant-mat-vg1-42-warning-1',
      type: 'warning',
      title: 'Røykpunkt',
      content: `Ulike oljer og fett har forskjellig røykpunkt. Over røykpunktet brytes fettet ned og frigir giftige stoffer. Bruk raffinert olje til høy varme: Rapsolje (230°C), solsikkeolje (230°C). Unngå smør og olivenolje til sterk steking.`,
    },
    {
      id: 'restaurant-mat-vg1-42-tip-1',
      type: 'tip',
      title: 'Baste for smak',
      content: `Baste kjøttet med smør, hvitløk og timian mot slutten av stekingen. Øs det smeltede smøret over kjøttet med skje for ekstra smak og glans.`,
    },
    {
      id: 'restaurant-mat-vg1-42-ex-1',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ved hvilken temperatur skjer Maillard-reaksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig temperatur.',
            solution: 'Over 140°C',
            multipleChoiceOptions: [
              'Over 140°C',
              '100°C',
              '80°C',
              '200°C',
            ],
          },
        ],
        solution: 'Maillard-reaksjonen begynner over 140°C og gir bruning, smak og aroma.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-42-ex-2',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor må maten være tørr før steking?',
        solution: 'Vann fordamper ved 100°C og hindrer Maillard-reaksjonen. Fuktig mat damper i stedet for å steke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-42-ex-3',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er braisering?',
        solution: 'En langteknikk der maten først brunes, deretter koker sakte i væske på lav varme. Gjør tøffe kjøttstykker møre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-42-ex-4',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor skal kjøtt hvile etter steking?',
        solution: 'Saftene omfordeles i kjøttet. Uten hviling renner saftene ut når kjøttet skjæres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-42-ex-5',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er reverse searing?',
        solution: 'Først lav varme til ønsket kjernetemperatur, deretter høy varme for bruning - motsatt av tradisjonell metode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'restaurant-mat-vg1-42-ex-6',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-6',
        number: '6',
        type: 'classic',
        task: 'Samleoppgave: Beskriv trinn for trinn hvordan du steker en perfekt biff medium rare.',
        solution: 'Ta biffen ut av kjøleskap 30 min før. Tørk overflaten. Varm panne til svært varm. Salt biffen. Stek 2-3 min per side uten å flytte. Baste med smør og urter. Ta av ved 52°C kjerne. Hvil 5-8 min. Server ved 55-57°C.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'restaurant-mat-vg1-42-ex-7',
      type: 'exercise',
      exercise: {
        id: 'restaurant-mat-vg1-42-ex-7',
        number: '7',
        type: 'classic',
        task: 'Samleoppgave: Sammenlign sautering, pan-frying og braisering. Beskriv forskjeller i teknikk og når hver metode er best.',
        solution: 'Sautering: Høy varme, små biter, rask tilberedning - grønnsaker, strimler. Pan-frying: Medium varme, større stykker, stekte på begge sider - koteletter, fisk. Braisering: Bruning + lang koking i væske - tøffe stykker som blir møre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter kapitlene
export const CHAPTERS_RESTAURANT_MAT_VG1_DEL2 = [
  CHAPTER_RESTAURANT_MAT_VG1_29,
  CHAPTER_RESTAURANT_MAT_VG1_30,
  CHAPTER_RESTAURANT_MAT_VG1_31,
  CHAPTER_RESTAURANT_MAT_VG1_32,
  CHAPTER_RESTAURANT_MAT_VG1_33,
  CHAPTER_RESTAURANT_MAT_VG1_34,
  CHAPTER_RESTAURANT_MAT_VG1_35,
  CHAPTER_RESTAURANT_MAT_VG1_36,
  CHAPTER_RESTAURANT_MAT_VG1_37,
  CHAPTER_RESTAURANT_MAT_VG1_38,
  CHAPTER_RESTAURANT_MAT_VG1_39,
  CHAPTER_RESTAURANT_MAT_VG1_40,
  CHAPTER_RESTAURANT_MAT_VG1_41,
  CHAPTER_RESTAURANT_MAT_VG1_42,
];

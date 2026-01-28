/**
 * Håndverk, design og produktutvikling VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Håndverk, design og produktutvikling på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Design og formgiving
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_1: TextbookChapter = {
  id: 'handverk-design-vg1-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '1',
  title: 'Design og formgiving',
  description: 'Designprinsipper, proporsjoner, balanse, kontrast og harmoni. Estetikk og funksjonalitet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke designprinsipper i utforming av produkter',
    'vurdere estetikk og funksjonalitet i produktdesign',
  ],
  content: [
    {
      id: 'handverk-design-vg1-1-intro',
      type: 'text',
      content: `Design handler om å skape produkter som både fungerer godt og ser bra ut. God design kombinerer estetikk med funksjonalitet og tar hensyn til brukernes behov. I dette kapittelet lærer du grunnleggende designprinsipper som er viktige enten du skal lage møbler, klær, keramikk eller andre produkter.`,
    },
    {
      id: 'handverk-design-vg1-1-def-1',
      type: 'definition',
      title: 'Design',
      content: `Design er prosessen med å planlegge og skape produkter, tjenester eller systemer. Design handler om å løse problemer og dekke behov på en estetisk og funksjonell måte.`,
    },
    {
      id: 'handverk-design-vg1-1-text-1',
      type: 'text',
      content: `**Grunnleggende designprinsipper**

**1. Balanse**
Balanse handler om hvordan visuelle elementer fordeles i et design. Vi skiller mellom:
- **Symmetrisk balanse**: Elementer speiles på hver side av en midtakse
- **Asymmetrisk balanse**: Ulike elementer balanserer hverandre uten å være like
- **Radial balanse**: Elementer stråler ut fra et sentralt punkt

**2. Proporsjon**
Proporsjon handler om størrelsesforholdet mellom ulike deler av et produkt. Gode proporsjoner skaper harmoni:
- Det gylne snitt (1:1,618) brukes ofte i design
- Proporsjoner påvirker hvordan vi oppfatter et objekt
- Menneskekroppens proporsjoner er viktig i ergonomisk design`,
    },
    {
      id: 'handverk-design-vg1-1-def-2',
      type: 'definition',
      title: 'Det gylne snitt',
      content: `Det gylne snitt er et matematisk forhold (cirka 1:1,618) som finnes i naturen og oppleves som harmonisk av mennesker. Det brukes ofte i kunst, arkitektur og design for å skape behagelige proporsjoner.`,
    },
    {
      id: 'handverk-design-vg1-1-text-2',
      type: 'text',
      content: `**3. Kontrast**
Kontrast skaper spenning og interesse i et design:
- **Størrelseskontrast**: Store og små elementer
- **Fargekontrast**: Lyse og mørke, komplementærfarger
- **Teksturkontrast**: Glatte og grove overflater
- **Formkontrast**: Organiske og geometriske former

**4. Harmoni**
Harmoni oppnås når alle elementer i et design fungerer sammen:
- Gjentakelse av former, farger eller materialer
- Enhetlig stil gjennom hele produktet
- Balanse mellom variasjon og enhet

**5. Rytme**
Rytme i design skapes gjennom:
- Gjentakelse av elementer med jevne mellomrom
- Gradvis endring av elementer
- Veksling mellom ulike elementer`,
    },
    {
      id: 'handverk-design-vg1-1-text-3',
      type: 'text',
      content: `**Estetikk og funksjonalitet**

God design balanserer estetikk og funksjonalitet. Et vakkert produkt som ikke fungerer er like mislykket som et funksjonelt produkt som er stygt.

**Funksjonelle krav**:
- Produktet skal oppfylle sitt formål
- Ergonomi og brukervennlighet
- Holdbarhet og kvalitet
- Sikkerhet i bruk

**Estetiske kvaliteter**:
- Visuell appell og tiltrekningskraft
- Materialvalg og overflater
- Proporsjoner og form
- Detaljer og finish

**Form follows function** er et designprinsipp som sier at et produkts utseende bør bestemmes av hva det skal brukes til. Dette prinsippet er sentralt i moderne design.`,
    },
    {
      id: 'handverk-design-vg1-1-tip-1',
      type: 'tip',
      title: 'Analysere design',
      content: `Når du skal analysere et design, still disse spørsmålene: Hva er produktets funksjon? Hvordan er balansen og proporsjonene? Hvilke kontraster brukes? Er det harmoni mellom elementene? Hvordan er forholdet mellom estetikk og funksjonalitet?`,
    },
    {
      id: 'handverk-design-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem grunnleggende designprinsippene?',
        subTasks: [
          {
            label: 'a',
            task: 'List opp de fem prinsippene.',
            solution: 'Balanse, proporsjon, kontrast, harmoni og rytme',
          },
        ],
        solution: 'De fem grunnleggende designprinsippene er balanse, proporsjon, kontrast, harmoni og rytme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom symmetrisk og asymmetrisk balanse.',
        solution: 'Symmetrisk balanse betyr at elementer speiles på hver side av en midtakse, slik at designet er likt på begge sider. Asymmetrisk balanse oppnås når ulike elementer balanserer hverandre uten å være like, for eksempel ved at et stort element balanseres av flere små.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er det gylne snitt, og hvorfor brukes det i design?',
        solution: 'Det gylne snitt er et matematisk forhold på cirka 1:1,618 som finnes i naturen og oppleves som harmonisk. Det brukes i design for å skape behagelige proporsjoner som mennesker intuitivt oppfatter som vakre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr prinsippet "form follows function"?',
        solution: 'Prinsippet "form follows function" betyr at et produkts utseende bør bestemmes av hva det skal brukes til. Funksjonen kommer først, og formen tilpasses deretter. Dette sikrer at produktet fungerer godt samtidig som det ser bra ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg et produkt du har hjemme og analyser designet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke designprinsipper kan du identifisere?',
            solution: 'Svar varierer basert på valgt produkt. Se etter balanse, proporsjon, kontrast, harmoni og rytme.',
          },
          {
            label: 'b',
            task: 'Hvordan er forholdet mellom estetikk og funksjonalitet?',
            solution: 'Vurder om produktet fungerer godt og ser bra ut. Er det en god balanse mellom de to?',
          },
        ],
        solution: 'Analysen bør identifisere designprinsipper som balanse, proporsjon og kontrast, og vurdere hvordan estetikk og funksjonalitet er balansert i produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tegn tre enkle skisser av en kopp med ulike typer balanse: symmetrisk, asymmetrisk og radial.',
        solution: 'Symmetrisk: kopp med identiske former på begge sider av midtaksen. Asymmetrisk: kopp med håndtak på den ene siden, men balansert med et mønster eller element på den andre. Radial: kopp sett ovenfra med elementer som stråler ut fra midten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Design', definition: 'Prosessen med å planlegge og skape produkter som løser problemer på en estetisk og funksjonell måte' },
    { term: 'Balanse', definition: 'Hvordan visuelle elementer fordeles i et design, kan være symmetrisk, asymmetrisk eller radial' },
    { term: 'Proporsjon', definition: 'Størrelsesforholdet mellom ulike deler av et produkt' },
    { term: 'Det gylne snitt', definition: 'Matematisk forhold (1:1,618) som oppleves som harmonisk' },
    { term: 'Kontrast', definition: 'Motsetninger som skaper spenning og interesse i et design' },
    { term: 'Harmoni', definition: 'Når alle elementer i et design fungerer sammen som en helhet' },
    { term: 'Rytme', definition: 'Bevegelse og dynamikk skapt gjennom gjentakelse av elementer' },
    { term: 'Form follows function', definition: 'Designprinsipp om at utseende bør bestemmes av funksjon' },
  ],
};

// ============================================================================
// Kapittel 2: Materialer og teknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2: TextbookChapter = {
  id: 'handverk-design-vg1-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2',
  title: 'Materialer og teknikker',
  description: 'Tre, metall, tekstil, keramikk, plast og kompositter. Materialegenskaper og bearbeidingsmetoder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til egenskapene til ulike materialer',
    'velge riktig materiale til ulike produkter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-intro',
      type: 'text',
      content: `Materialkunnskap er grunnleggende for alle som arbeider med håndverk og design. Hvert materiale har unike egenskaper som påvirker både hvordan det kan bearbeides og hvordan det endelige produktet blir. I dette kapittelet får du en oversikt over de viktigste materialene.`,
    },
    {
      id: 'handverk-design-vg1-2-def-1',
      type: 'definition',
      title: 'Materialegenskaper',
      content: `Materialegenskaper er de karakteristiske trekkene ved et materiale, som styrke, fleksibilitet, vekt, holdbarhet, bearbeidbarhet og utseende. Disse egenskapene avgjør hva materialet egner seg til.`,
    },
    {
      id: 'handverk-design-vg1-2-text-1',
      type: 'text',
      content: `**Tre som materiale**

Tre er et av de mest allsidige materialene i håndverk og design.

**Egenskaper**:
- Naturlig, fornybart materiale
- Lett å bearbeide med håndverktøy og maskiner
- Varierer i hardhet, farge og struktur
- Kan males, beises eller oljes
- Påvirkes av fuktighet

**Vanlige tresorter**:
- **Furu**: Myk, lett å bearbeide, rimelig
- **Bjørk**: Hardere, fin overflate, lys farge
- **Eik**: Hard, slitesterk, vakker struktur
- **Valnøtt**: Hard, mørk, eksklusiv
- **MDF/kryssfiner**: Bearbeidede treprodukter`,
    },
    {
      id: 'handverk-design-vg1-2-text-2',
      type: 'text',
      content: `**Metall som materiale**

Metaller brukes i alt fra smykker til møbler og verktøy.

**Vanlige metaller**:
- **Stål**: Sterkt, kan sveises, ruster (unntatt rustfritt)
- **Aluminium**: Lett, korrosjonsbestandig, lett å forme
- **Messing**: Gul farge, lett å bearbeide, tåler oksidering
- **Kobber**: Rødlig, bøyelig, ledende, får patina
- **Sølv og gull**: Edelmetaller til smykker

**Bearbeidingsmetoder**:
- Smiing (varmt eller kaldt)
- Sveising og lodding
- Bøying og pressing
- Filing og sliping
- Overflatebehandling`,
    },
    {
      id: 'handverk-design-vg1-2-text-3',
      type: 'text',
      content: `**Tekstil som materiale**

Tekstiler brukes til klær, interiør og kunsthåndverk.

**Naturlige fibre**:
- **Bomull**: Myk, pustende, tåler vask
- **Lin**: Sterkt, kjølig, krøller lett
- **Ull**: Varm, elastisk, vannavstøtende
- **Silke**: Glatt, skinnende, luksus

**Syntetiske fibre**:
- **Polyester**: Slitesterkt, tørker raskt
- **Nylon**: Sterkt, elastisk
- **Akryl**: Varmt, lett, allergifritt

**Teknikker**: Sying, strikking, hekling, veving, broderi`,
    },
    {
      id: 'handverk-design-vg1-2-text-4',
      type: 'text',
      content: `**Keramikk som materiale**

Keramikk lages av leire som brennes ved høy temperatur.

**Leirtyper**:
- **Terrakotta**: Porøs, rødlig, lav brenntemperatur
- **Steingods**: Tett, robust, høyere brenntemperatur
- **Porselen**: Finkornet, hvit, høyest brenntemperatur

**Teknikker**:
- Dreiing på dreieskive
- Håndbygde teknikker (pølseteknikk, plateteknikk)
- Støping i gipsformer
- Dekorering og glasering

**Plast og kompositter**:
- **Plast**: Formbart, lett, vanntett, mange typer
- **Kompositter**: Kombinasjoner av materialer (f.eks. glassfiberarmert plast)
- **3D-printmaterialer**: PLA, ABS, resin`,
    },
    {
      id: 'handverk-design-vg1-2-tip-1',
      type: 'tip',
      title: 'Materialvalg',
      content: `Ved valg av materiale, vurder: Hva skal produktet brukes til? Hvilke egenskaper trenger det? Hva er budsjettet? Er miljøhensyn viktig? Hvilke verktøy og teknikker kan brukes?`,
    },
    {
      id: 'handverk-design-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre egenskaper ved tre som materiale.',
        solution: 'Tre er naturlig og fornybart, lett å bearbeide med verktøy, varierer i hardhet og farge, kan overflatebehandles på mange måter, og påvirkes av fuktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom naturlige og syntetiske fibre?',
        solution: 'Naturlige fibre kommer fra planter (bomull, lin) eller dyr (ull, silke), mens syntetiske fibre er menneskapte av kjemiske stoffer (polyester, nylon, akryl). Naturlige fibre puster bedre, mens syntetiske ofte er mer slitesterke og tørker raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke tre hovedtyper av leire brukes i keramikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de tre typene og deres egenskaper.',
            solution: 'Terrakotta (porøs, rødlig, lav brenntemperatur), steingods (tett, robust, middels brenntemperatur), porselen (finkornet, hvit, høyest brenntemperatur)',
          },
        ],
        solution: 'De tre hovedtypene er terrakotta, steingods og porselen. De har ulik brenntemperatur, porøsitet og utseende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal lage en utendørs benk. Hvilke materialer vil du vurdere, og hvorfor?',
        solution: 'Tre (eik eller trykkimpregnert furu) fordi det tåler vær og vind, metall (aluminium eller galvanisert stål) fordi det er sterkt og korrosjonsbestandig, eller kombinasjon av begge. Viktige hensyn er værbestandighet, styrke og vedlikehold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en tabell som sammenligner tre materialer du vil bruke til en lampeskjerm.',
        solution: 'Tabellen bør inkludere materialer som papir, tekstil og metall med kolonner for egenskaper som lysgjennomtrengelighet, varmeutvikling, holdbarhet, utseende og pris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Materialegenskaper', definition: 'Karakteristiske trekk ved et materiale som styrke, fleksibilitet og bearbeidbarhet' },
    { term: 'Hardhet', definition: 'Materialets motstand mot riper og inntrykk' },
    { term: 'Naturfibre', definition: 'Fibre fra naturlige kilder som planter og dyr' },
    { term: 'Syntetiske fibre', definition: 'Menneskapte fibre laget av kjemiske stoffer' },
    { term: 'Brenntemperatur', definition: 'Temperaturen keramikk brennes ved for å bli hardt og varig' },
    { term: 'Kompositt', definition: 'Materiale laget av to eller flere ulike materialer kombinert' },
    { term: 'Korrosjon', definition: 'Nedbrytning av metall gjennom kjemisk reaksjon, for eksempel rust' },
  ],
};

// ============================================================================
// Kapittel 3: Tegning og skissering
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_3: TextbookChapter = {
  id: 'handverk-design-vg1-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '3',
  title: 'Tegning og skissering',
  description: 'Frihåndstegning, perspektiv, skygge, proporsjoner og idéskisser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke skisseteknikker for å visualisere ideer',
    'tegne produkter i perspektiv',
  ],
  content: [
    {
      id: 'handverk-design-vg1-3-intro',
      type: 'text',
      content: `Tegning og skissering er grunnleggende ferdigheter for alle som arbeider med design og håndverk. Å kunne visualisere ideer raskt og tydelig er essensielt i designprosessen. I dette kapittelet lærer du teknikker for å tegne idéskisser, arbeide med perspektiv og skape dybde gjennom skygge.`,
    },
    {
      id: 'handverk-design-vg1-3-def-1',
      type: 'definition',
      title: 'Idéskisse',
      content: `En idéskisse er en rask, enkel tegning som brukes til å fange en idé eller et konsept. Idéskisser trenger ikke være perfekte, men skal kommunisere hovedtrekkene ved en idé.`,
    },
    {
      id: 'handverk-design-vg1-3-text-1',
      type: 'text',
      content: `**Grunnleggende skisseteknikk**

**Linjetyper**:
- **Konstruksjonslinjer**: Lette, hjelpende linjer som skaper struktur
- **Konturlinjer**: Tydelige linjer som definerer objektets form
- **Skravering**: Tette linjer for å skape skygge og volum

**Tips for bedre skisser**:
- Start med lette linjer du kan justere
- Tegn fra skulderen, ikke bare håndleddet
- Øv på grunnformer: kuler, sylindre, kjegler, kuber
- Tegn raskt for å fange essensen
- Gjør flere varianter av samme idé`,
    },
    {
      id: 'handverk-design-vg1-3-def-2',
      type: 'definition',
      title: 'Perspektiv',
      content: `Perspektiv er en teknikk for å gjengi tredimensjonale objekter på en todimensjonal flate slik at de ser realistiske ut. Linjer som går bakover i rommet møtes i ett eller flere forsvinningspunkter.`,
    },
    {
      id: 'handverk-design-vg1-3-text-2',
      type: 'text',
      content: `**Perspektivtegning**

**Ettpunktsperspektiv**:
- Ett forsvinningspunkt på horisonten
- Brukes når du ser rett på en flate
- God for interiør og enkle produkter

**Topunktsperspektiv**:
- To forsvinningspunkter på horisonten
- Brukes når du ser et hjørne av objektet
- Mest vanlig for produkttegning

**Trepunktsperspektiv**:
- Tre forsvinningspunkter
- Det tredje punktet er over eller under motivet
- Brukes for dramatiske vinkler

**Isometrisk tegning**:
- Ingen forsvinningspunkter
- Alle parallelle linjer forblir parallelle
- Gir teknisk, skjematisk uttrykk`,
    },
    {
      id: 'handverk-design-vg1-3-text-3',
      type: 'text',
      content: `**Skygge og volum**

Skygge gir tegningen dybde og gjør at objekter ser tredimensjonale ut.

**Lyskilden**:
- Bestem hvor lyset kommer fra
- Hold lysretningen konsistent
- Jo sterkere lys, jo hardere skygger

**Typer skygge**:
- **Egenskygge**: Skyggen på selve objektet
- **Slagskygge**: Skyggen objektet kaster på underlaget

**Skyggeteknikker**:
- **Skravering**: Parallelle linjer i ulike tettheter
- **Krysseskravering**: Linjer som krysser hverandre
- **Utvisking**: Blyantstreker som viskes ut for myk overgang
- **Stipling**: Prikker som skaper gråtoner`,
    },
    {
      id: 'handverk-design-vg1-3-text-4',
      type: 'text',
      content: `**Proporsjoner**

Gode proporsjoner er viktig for at tegninger skal se riktige ut.

**Teknikker for riktige proporsjoner**:
- Bruk blyanten som måleinstrument
- Del objektet inn i enkle grunnformer
- Sammenlign størrelser internt i objektet
- Tegn hjelplinjer for å holde proporsjonene

**Øvelse gjør mester**:
- Tegn samme objekt fra ulike vinkler
- Skissér hverdagslige gjenstander
- Øv på å tegne raskt og intuitivt
- Ta med skissebok overalt`,
    },
    {
      id: 'handverk-design-vg1-3-tip-1',
      type: 'tip',
      title: 'Skisseboken som verktøy',
      content: `Ha alltid en skissebok tilgjengelig. Bruk den til å dokumentere ideer, tegne observasjoner og øve på teknikker. En skissebok trenger ikke være perfekt - det er et arbeidsverktøy for utvikling.`,
    },
    {
      id: 'handverk-design-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom ettpunktsperspektiv og topunktsperspektiv?',
        solution: 'I ettpunktsperspektiv er det ett forsvinningspunkt på horisonten, og brukes når man ser rett på en flate. I topunktsperspektiv er det to forsvinningspunkter, og brukes når man ser et hjørne av objektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Tegn en kube i topunktsperspektiv.',
        solution: 'Kuben skal ha to forsvinningspunkter på en horisontal linje. Fra hjørnet nærmest betrakteren går linjer til begge forsvinningspunktene. Vertikale linjer forblir vertikale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom egenskygge og slagskygge?',
        solution: 'Egenskygge er skyggen som ligger på selve objektet, på sidene som vender bort fra lyskilden. Slagskygge er skyggen som objektet kaster på underlaget eller andre overflater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag fem raske idéskisser av en kaffekopp, hver på under ett minutt.',
        solution: 'Skissene bør vise ulike vinkler eller designvarianter av koppen. Fokuser på å fange essensen raskt uten å perfeksjonere detaljene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tegn en sylinder med egenskygge og slagskygge. Vis tydelig hvor lyskilden er.',
        solution: 'Tegningen skal vise en sylinder med gradvis overgang fra lys til mørk side (egenskygge), og en oval slagskygge på underlaget på motsatt side av lyskilden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Idéskisse', definition: 'Rask, enkel tegning for å fange en idé eller et konsept' },
    { term: 'Perspektiv', definition: 'Teknikk for å gjengi 3D-objekter på 2D-flate med forsvinningspunkter' },
    { term: 'Forsvinningspunkt', definition: 'Punktet der parallelle linjer ser ut til å møtes i horisonten' },
    { term: 'Egenskygge', definition: 'Skyggen på selve objektet' },
    { term: 'Slagskygge', definition: 'Skyggen objektet kaster på andre overflater' },
    { term: 'Skravering', definition: 'Parallelle linjer som skaper skygge og gråtoner' },
    { term: 'Konturlinje', definition: 'Tydelig linje som definerer objektets ytre form' },
  ],
};

// ============================================================================
// Kapittel 4: Digital design og verktøy
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_4: TextbookChapter = {
  id: 'handverk-design-vg1-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '4',
  title: 'Digital design og verktøy',
  description: 'CAD, 3D-modellering, laserskjæring, 3D-printing og digitale designverktøy.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke digitale verktøy i designprosessen',
    'lage enkle 3D-modeller for produksjon',
  ],
  content: [
    {
      id: 'handverk-design-vg1-4-intro',
      type: 'text',
      content: `Digitale verktøy har revolusjonert måten vi designer og produserer produkter på. Fra idé til ferdig produkt kan vi nå bruke dataprogrammer for å tegne, modellere og til og med produsere. I dette kapittelet får du en innføring i de viktigste digitale designverktøyene.`,
    },
    {
      id: 'handverk-design-vg1-4-def-1',
      type: 'definition',
      title: 'CAD (Computer-Aided Design)',
      content: `CAD er programvare som brukes til å lage presise tekniske tegninger og 3D-modeller på datamaskin. CAD gjør det mulig å designe, visualisere og simulere produkter før de produseres.`,
    },
    {
      id: 'handverk-design-vg1-4-text-1',
      type: 'text',
      content: `**2D-design og vektorgrafikk**

**Vektorgrafikk vs. pikselgrafikk**:
- **Vektorgrafikk**: Basert på matematiske former, kan skaleres uendelig
- **Pikselgrafikk**: Basert på piksler, mister kvalitet ved forstørring

**Vanlige 2D-programmer**:
- **Adobe Illustrator**: Profesjonell standard for vektorgrafikk
- **Inkscape**: Gratis alternativ til Illustrator
- **Figma**: Nettbasert designverktøy
- **Canva**: Brukervennlig for enkel design

**Bruksområder**:
- Logodesign og grafisk identitet
- Mønster for laserskjæring
- Tekniske tegninger
- Illustrasjoner og presentasjoner`,
    },
    {
      id: 'handverk-design-vg1-4-text-2',
      type: 'text',
      content: `**3D-modellering**

**Typer 3D-modellering**:
- **Solid modellering**: Lager massive objekter, god for mekanisk design
- **Overflatemodellering**: Fokuserer på overflaten, god for organiske former
- **Mesh-modellering**: Bruker polygoner, vanlig i spill og animasjon

**Vanlige 3D-programmer**:
- **Tinkercad**: Enkel og gratis, god for nybegynnere
- **Fusion 360**: Profesjonelt, gratis for studenter
- **SketchUp**: Intuitivt, populært for arkitektur
- **Blender**: Gratis, kraftig for organiske former

**Grunnleggende teknikker**:
- Extrude: Trekke ut former fra en flate
- Revolve: Rotere en profil rundt en akse
- Boolean: Kombinere eller trekke fra former
- Fillet/Chamfer: Runde eller skrå kanter`,
    },
    {
      id: 'handverk-design-vg1-4-def-2',
      type: 'definition',
      title: '3D-printing',
      content: `3D-printing er en produksjonsmetode der et tredimensjonalt objekt bygges opp lag for lag basert på en digital 3D-modell. Prosessen kalles også additiv produksjon.`,
    },
    {
      id: 'handverk-design-vg1-4-text-3',
      type: 'text',
      content: `**3D-printing**

**Vanlige 3D-print-teknologier**:
- **FDM (Fused Deposition Modeling)**: Smelter og legger plastfilamenter lag for lag
- **SLA (Stereolithography)**: Herder flytende resin med UV-lys
- **SLS (Selective Laser Sintering)**: Smelter pulver med laser

**Vanlige materialer**:
- **PLA**: Biologisk nedbrytbart, enkelt å printe
- **ABS**: Sterkt, varmebestandig, krever godt ventilert rom
- **PETG**: Kombinerer PLA og ABS sine fordeler
- **Resin**: Gir høy detalj og glatt overflate

**Designhensyn for 3D-print**:
- Minimer overheng over 45 grader
- Tenk på støttestrukturer
- Hul ut store modeller for å spare materiale
- Orienter modellen for best styrke`,
    },
    {
      id: 'handverk-design-vg1-4-text-4',
      type: 'text',
      content: `**Laserskjæring og CNC-fresing**

**Laserskjæring**:
- Skjærer eller graverer materiale med fokusert laserstråle
- Brukes på tre, akryl, kartong, tekstil, lær
- Krever 2D-vektorfiler
- Kan skjære, gravere og markere

**CNC-fresing**:
- Datamaskinert fresesmaskin som skjærer i tre, metall, plast
- Bruker roterende freseverktøy
- Kan lage komplekse 3D-former
- Krever kjennskap til verktøybaner

**Filformater**:
- **SVG**: For laserskjæring
- **STL**: Standard for 3D-printing
- **DXF**: Tekniske tegninger
- **STEP/IGES**: Profesjonelle CAD-formater`,
    },
    {
      id: 'handverk-design-vg1-4-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Begynn med enkle programmer som Tinkercad for 3D-modellering og Inkscape for 2D-design. Når du mestrer grunnprinsippene, kan du gå videre til mer avanserte verktøy.`,
    },
    {
      id: 'handverk-design-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom vektorgrafikk og pikselgrafikk?',
        solution: 'Vektorgrafikk er basert på matematiske former og kan skaleres uendelig uten å miste kvalitet. Pikselgrafikk er basert på piksler og mister kvalitet ved forstørring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre vanlige 3D-printingteknologier og forklar kort hvordan de fungerer.',
        solution: 'FDM smelter og legger plastfilamenter lag for lag. SLA herder flytende resin med UV-lys. SLS smelter pulver med laser for å lage objekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva må du tenke på når du designer en modell for 3D-printing?',
        solution: 'Viktige hensyn inkluderer å minimere overheng over 45 grader, planlegge for støttestrukturer, hule ut store modeller for å spare materiale, og orientere modellen for best styrke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en enkel 3D-modell av en nøkkelring i Tinkercad.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv trinnene du brukte.',
            solution: 'Typiske trinn: Opprett et grunnleggende form (f.eks. sirkel eller firkant), legg til et hull for nøkkelringen, tilpass størrelse og tykkelse, eksporter som STL-fil.',
          },
        ],
        solution: 'Modellen bør ha en solid base med et hull for å feste nøkkelringen. Størrelsen bør være ca. 3-5 cm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke materialer er laserskjæring egnet for?',
        solution: 'Laserskjæring er egnet for tre, akryl, kartong, tekstil, lær, papir og noen typer plast. Materialer som PVC og visse metaller er ikke egnet på grunn av farlige gasser eller refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign FDM og SLA 3D-printing. Når vil du velge hver metode?',
        solution: 'FDM er rimeligere, bruker filamenter og er god for større prototyper og funksjonelle deler. SLA gir høyere detaljnivå og glattere overflater, og er bedre for små, detaljerte modeller og smykker. Velg FDM for kostnadseffektiv prototyping, SLA for høy detaljpresisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'CAD', definition: 'Computer-Aided Design, programvare for presise tegninger og 3D-modeller' },
    { term: 'Vektorgrafikk', definition: 'Grafikk basert på matematiske former som kan skaleres uten kvalitetstap' },
    { term: '3D-printing', definition: 'Produksjonsmetode der objekter bygges lag for lag fra digital modell' },
    { term: 'FDM', definition: 'Fused Deposition Modeling, 3D-print med smeltede plastfilamenter' },
    { term: 'SLA', definition: 'Stereolithography, 3D-print med UV-herdet resin' },
    { term: 'Laserskjæring', definition: 'Skjæring eller gravering av materiale med fokusert laserstråle' },
    { term: 'STL', definition: 'Standard filformat for 3D-printbare modeller' },
    { term: 'Boolean', definition: '3D-modelleringsteknikk for å kombinere eller trekke fra former' },
  ],
};

// ============================================================================
// Kapittel 5: Håndverksteknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5: TextbookChapter = {
  id: 'handverk-design-vg1-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5',
  title: 'Håndverksteknikker',
  description: 'Tradisjonelle teknikker innen tresnekring, smiing, sying, keramikk og annet håndverk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'anvende grunnleggende håndverksteknikker',
    'velge riktig teknikk for ulike oppgaver',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-intro',
      type: 'text',
      content: `Håndverksteknikker er metoder som har blitt utviklet og foredlet gjennom generasjoner. Å mestre tradisjonelle teknikker gir deg et solid fundament for å skape kvalitetsprodukter. I dette kapittelet får du en innføring i grunnleggende teknikker innen ulike håndverkstradisjoner.`,
    },
    {
      id: 'handverk-design-vg1-5-def-1',
      type: 'definition',
      title: 'Håndverksteknikk',
      content: `En håndverksteknikk er en systematisk metode for å bearbeide materiale for hånd, ofte med bruk av verktøy. Teknikkene er utviklet over tid og overføres fra håndverker til lærling.`,
    },
    {
      id: 'handverk-design-vg1-5-text-1',
      type: 'text',
      content: `**Trearbeidsteknikker**

**Grunnleggende operasjoner**:
- **Saging**: Kuttting av tre på tvers eller langs fiberretningen
- **Høvling**: Fjerne materiale for å lage jevne overflater
- **Meisling**: Skjære ut materiale med meisel og klubbe
- **Rasping/filing**: Forme og glatte overflater

**Sammenføyningsteknikker**:
- **Tapping**: Tapp inn i hull, tradisjonell sterk forbindelse
- **Sinkning**: Sammenlåsende fingre i hjørner
- **Skjøting**: Forlenge materialet i lengderetning
- **Liming**: Moderne metode, ofte i kombinasjon med andre

**Overflatebehandling**:
- Sliping med ulik kornstørrelse
- Oljer, voks, lakk eller maling`,
    },
    {
      id: 'handverk-design-vg1-5-text-2',
      type: 'text',
      content: `**Syteknikker**

**Grunnstinger**:
- **Rettsøm**: Enkel, rett søm med jevne stinglenger
- **Sikksakkstøm**: For elastiske stoffer og kanter
- **Overlokk**: Profesjonell kantbehandling

**Håndstinger**:
- **Hefting**: Midlertidig søm for å holde stoffet på plass
- **Prikksting**: Nærmest usynlig på retten
- **Kasting**: Sikrer kanter mot oppflistering
- **Trådløkker**: For knapper og hemper

**Teknikker for ulike stofftyper**:
- Tynne stoffer: Bruk stabilisatorer, fine nåler
- Strikk: Stretchnål og sikksakkstøm
- Tykke stoffer: Sterk nål, lengre stinglender`,
    },
    {
      id: 'handverk-design-vg1-5-text-3',
      type: 'text',
      content: `**Keramikkteknikker**

**Håndbygging**:
- **Pølseteknikk**: Rulle leire til pølser og bygge opp form
- **Plateteknikk**: Valse ut flate plater og sette sammen
- **Knipeteknikk**: Forme fra en klump med tommel og fingre
- **Hulromsteknikk**: Kombinere to halvdeler til hul form

**Dreiing**:
- Sentrere leiren på dreieskiven
- Åpne og trekke opp veggen
- Forme med hender og verktøy
- Skjære av med ståltråd

**Dekorering**:
- Risseteknikk i rå leire
- Pålegging av dekor (barbotine)
- Glasering med ulike effekter
- Oksid og underglasurmaling`,
    },
    {
      id: 'handverk-design-vg1-5-text-4',
      type: 'text',
      content: `**Metallarbeidsteknikker**

**Kaldbearbeiding**:
- **Filing**: Forme og glatte metall med fil
- **Saging**: Kutte metall med metallsag
- **Bøying**: Forme metall kaldt i bukkemaskin
- **Banking**: Forme metall med hammer over stakk

**Varmbearbeiding**:
- **Smiing**: Forme oppvarmet metall med hammer
- **Lodding**: Føye metall med loddetinn
- **Sveising**: Smelte sammen metall

**Overflatebehandling**:
- Sliping og polering
- Oksydering og patinering
- Lakk eller klarlakk
- Galvanisering`,
    },
    {
      id: 'handverk-design-vg1-5-tip-1',
      type: 'tip',
      title: 'Øvelse gjør mester',
      content: `De beste håndverkerne øver de samme teknikkene hundrevis av ganger. Start med enkle prosjekter og fokuser på å mestre grunnteknikkene før du tar fatt på mer avanserte oppgaver.`,
    },
    {
      id: 'handverk-design-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire grunnleggende trearbeidsoperasjoner.',
        solution: 'Saging (kutting av tre), høvling (fjerne materiale for jevne overflater), meisling (skjære ut materiale med meisel), og rasping/filing (forme og glatte overflater).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom pølseteknikk og plateteknikk i keramikk?',
        solution: 'I pølseteknikk rulles leiren til pølser som bygges opp lagvis for å forme en gjenstand. I plateteknikk valses leiren ut til flate plater som kuttes og settes sammen til ønsket form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva tapping er i trearbeid.',
        solution: 'Tapping er en tradisjonell sammenføyningsteknikk der en utspringende del (tappen) passer inn i et tilsvarende hull i et annet trestykke. Dette gir en sterk mekanisk forbindelse uten behov for skruer eller spiker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når bruker du sikksakkstøm i stedet for rettsøm?',
        solution: 'Sikksakkstøm brukes på elastiske stoffer fordi den gir sømmen fleksibilitet til å strekke seg med stoffet. Den brukes også til å sikre kanter mot oppflistering og til dekorative formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom lodding og sveising?',
        solution: 'Ved lodding føyes metalldelene sammen med et tilsatsmateriale (loddetinn) som smelter ved lavere temperatur enn grunnmaterialet. Ved sveising smeltes selve grunnmaterialet sammen, ofte med tilsettmetall, noe som gir sterkere forbindelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tapping', definition: 'Sammenføyningsteknikk der en tapp passer inn i et hull' },
    { term: 'Sinkning', definition: 'Sammenlåsende fingre som gir sterk hjørneforbindelse' },
    { term: 'Pølseteknikk', definition: 'Keramikkteknikk med leirpølser stablet til form' },
    { term: 'Dreiing', definition: 'Forme keramikk på roterende dreieskive' },
    { term: 'Smiing', definition: 'Forme oppvarmet metall med hammer' },
    { term: 'Lodding', definition: 'Føye metall med lavsmeltende tilsatsmateriale' },
    { term: 'Glasering', definition: 'Påføre glasslignende belegg på keramikk' },
  ],
};

// ============================================================================
// Kapittel 6: Produktutvikling og prototyping
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6: TextbookChapter = {
  id: 'handverk-design-vg1-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6',
  title: 'Produktutvikling og prototyping',
  description: 'Idégenerering, konseptutvikling, prototyping og testing av produkter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjennomføre en produktutviklingsprosess',
    'lage og teste prototyper',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-intro',
      type: 'text',
      content: `Produktutvikling er prosessen fra idé til ferdig produkt. En strukturert tilnærming øker sjansen for å lykkes med å lage produkter som dekker reelle behov. I dette kapittelet lærer du om de ulike fasene i produktutvikling og hvordan prototyper brukes til å teste og forbedre ideer.`,
    },
    {
      id: 'handverk-design-vg1-6-def-1',
      type: 'definition',
      title: 'Produktutvikling',
      content: `Produktutvikling er en strukturert prosess for å skape nye produkter eller forbedre eksisterende. Prosessen omfatter alt fra idégenerering og konseptutvikling til prototyping, testing og lansering.`,
    },
    {
      id: 'handverk-design-vg1-6-text-1',
      type: 'text',
      content: `**Fasene i produktutvikling**

**1. Oppdagelse og research**
- Identifisere behov og problemer
- Undersøke målgruppen
- Analysere konkurrenter
- Samle inspirasjon

**2. Idégenerering**
- Brainstorming og idémyldring
- Mind mapping
- Skisser og tegning
- Utfordre antagelser

**3. Konseptutvikling**
- Velge de beste ideene
- Utvikle konsepter videre
- Definere produktets funksjoner
- Lage detaljerte beskrivelser`,
    },
    {
      id: 'handverk-design-vg1-6-def-2',
      type: 'definition',
      title: 'Prototype',
      content: `En prototype er en tidlig versjon av et produkt som brukes til å teste ideer, funksjoner og design. Prototyper kan være alt fra enkle papirmodeller til fullskalautgaver.`,
    },
    {
      id: 'handverk-design-vg1-6-text-2',
      type: 'text',
      content: `**4. Prototyping**

**Typer prototyper**:
- **Konseptprototype**: Enkel modell for å vise ideen (papp, skum, papir)
- **Funksjonell prototype**: Tester funksjonalitet
- **Visuell prototype**: Viser utseende og design
- **Produksjonsprototype**: Nær ferdig produkt

**Raske prototypmetoder**:
- Pappmodeller og kartong
- Skumkjerner
- 3D-print
- Laserskjærte deler
- Lego og byggeklosser

**Prototyp-filosofi**:
"Fail fast, learn faster" - Lag mange enkle prototyper tidlig for å lære raskt hva som fungerer og ikke`,
    },
    {
      id: 'handverk-design-vg1-6-text-3',
      type: 'text',
      content: `**5. Testing og evaluering**

**Brukertesting**:
- La brukere teste prototypen
- Observer hvordan de bruker produktet
- Still åpne spørsmål
- Dokumenter tilbakemeldinger

**Evalueringskriterier**:
- Funksjonalitet: Gjør produktet det det skal?
- Brukervennlighet: Er det intuitivt å bruke?
- Estetikk: Ser det bra ut?
- Holdbarhet: Tåler det normal bruk?
- Produksjonskostnad: Kan det lages til riktig pris?

**6. Iterasjon**
- Analyser testresultatene
- Gjør forbedringer
- Lag nye prototyper
- Test på nytt
- Gjenta til produktet er godt nok`,
    },
    {
      id: 'handverk-design-vg1-6-text-4',
      type: 'text',
      content: `**Verktøy for produktutvikling**

**Kreative metoder**:
- **Brainstorming**: Generer mange ideer uten kritikk
- **Mind mapping**: Visualiser sammenhenger mellom ideer
- **SCAMPER**: Systematisk metode for å utvikle ideer videre
- **Storyboarding**: Fortell historien om bruken av produktet

**Dokumentasjon**:
- Designdagbok eller logg
- Skisser og tegninger
- Fotografier av prosessen
- Prototyper og modeller
- Testrapporter

**Presentasjon**:
- Produktbeskrivelse
- Visualiseringer og render
- Prototyp eller modell
- Brukerhistorier`,
    },
    {
      id: 'handverk-design-vg1-6-tip-1',
      type: 'tip',
      title: 'SCAMPER-metoden',
      content: `SCAMPER er en idéutviklingsmetode: Substitute (erstatte), Combine (kombinere), Adapt (tilpasse), Modify (endre), Put to other uses (andre bruksområder), Eliminate (fjerne), Reverse/Rearrange (omorganisere). Bruk disse spørsmålene på et eksisterende produkt for å finne nye løsninger.`,
    },
    {
      id: 'handverk-design-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de seks fasene i produktutviklingsprosessen.',
        solution: '1. Oppdagelse og research (finne behov), 2. Idégenerering (brainstorming og skissering), 3. Konseptutvikling (velge og utvikle ideer), 4. Prototyping (lage testversjoner), 5. Testing og evaluering (brukertesting), 6. Iterasjon (forbedre basert på tilbakemeldinger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en konseptprototype og en funksjonell prototype?',
        solution: 'En konseptprototype er en enkel modell som viser ideen og formen, ofte laget av papp eller skum. En funksjonell prototype tester om produktet fungerer som det skal, og har faktisk funksjonalitet selv om den ikke nødvendigvis ser ut som det ferdige produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Bruk SCAMPER-metoden på en vanlig kaffekopp. Skriv en idé for hvert punkt.',
        solution: 'S: Erstatt håndtak med isolerende grep. C: Kombiner kopp og underkopp i ett. A: Tilpass for bil-cupholders. M: Endre til termoisolerende materiale. P: Bruk som penneholder. E: Fjern øret for kompakt oppbevaring. R: Gjør bunnen bredere for stabilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en enkel prototype av en mobilholder i papp.',
        subTasks: [
          {
            label: 'a',
            task: 'Dokumenter prosessen med skisser og bilder.',
            solution: 'Vis de ulike stadiene: idéskisse, utskjæringsmønster, sammensetting og ferdig prototype.',
          },
          {
            label: 'b',
            task: 'Test prototypen og beskriv hva som fungerer og hva som kan forbedres.',
            solution: 'Vurder stabilitet, vinkel, passform for ulike telefonmodeller og brukervennlighet.',
          },
        ],
        solution: 'Prototypen bør kunne holde en mobiltelefon i en stabil posisjon for visning. Dokumenter prosessen fra idé til ferdig prototype.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva betyr "fail fast, learn faster" i produktutvikling?',
        solution: 'Det betyr at man bør lage mange enkle prototyper tidlig i prosessen for å raskt oppdage hva som ikke fungerer. Ved å feile tidlig med billige prototyper lærer man raskt og unngår å investere mye tid og penger i feil retning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke kriterier bør du bruke når du evaluerer en prototype?',
        solution: 'Viktige kriterier inkluderer funksjonalitet (gjør den jobben?), brukervennlighet (intuitiv?), estetikk (ser den bra ut?), holdbarhet (tåler den bruk?) og produksjonskostnad (kan den lages til riktig pris?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Produktutvikling', definition: 'Strukturert prosess fra idé til ferdig produkt' },
    { term: 'Prototype', definition: 'Tidlig versjon av et produkt for testing og læring' },
    { term: 'Iterasjon', definition: 'Gjentatt forbedring basert på testing og tilbakemelding' },
    { term: 'Brainstorming', definition: 'Kreativ metode for å generere mange ideer uten kritikk' },
    { term: 'SCAMPER', definition: 'Systematisk metode for idéutvikling med syv tilnærminger' },
    { term: 'Brukertesting', definition: 'La målgruppen teste prototypen for å få tilbakemelding' },
    { term: 'Konseptutvikling', definition: 'Fasen der ideer videreutvikles til konkrete konsepter' },
    { term: 'Mind mapping', definition: 'Visuell metode for å organisere og koble ideer' },
  ],
};

// ============================================================================
// Kapittel 7: Farge og komposisjon
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_7: TextbookChapter = {
  id: 'handverk-design-vg1-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7',
  title: 'Farge og komposisjon',
  description: 'Fargelære, fargeharmonier, kontrast, komplementærfarger og fargebruk i design.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fargelære i design',
    'skape harmoniske fargekombinasjoner',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-intro',
      type: 'text',
      content: `Farge er et av de kraftigste virkemidlene i design. Riktig fargebruk kan skape stemning, trekke oppmerksomhet og kommunisere budskap. I dette kapittelet lærer du grunnleggende fargelære og hvordan du bruker farger bevisst i dine prosjekter.`,
    },
    {
      id: 'handverk-design-vg1-7-def-1',
      type: 'definition',
      title: 'Fargesirkelen',
      content: `Fargesirkelen er et visuelt verktøy som viser forholdet mellom farger. Den består av primærfarger (rød, gul, blå), sekundærfarger (oransje, grønn, lilla) og tertiærfarger.`,
    },
    {
      id: 'handverk-design-vg1-7-text-1',
      type: 'text',
      content: `**Grunnleggende fargelære**

**Primærfarger** (kan ikke blandes):
- Rød, gul, blå (subtraktiv blanding)
- Rød, grønn, blå (additiv/lys)

**Sekundærfarger** (blanding av to primærfarger):
- Oransje = rød + gul
- Grønn = gul + blå
- Lilla = blå + rød

**Tertiærfarger** (blanding av primær og sekundær):
- Rødoransje, guloransje, gulgrønn, blågrønn, blålilla, rødlilla

**Fargens egenskaper**:
- **Kulør**: Selve fargen (rød, blå, grønn)
- **Valør**: Lyshetsgrad (lys eller mørk)
- **Metning**: Renhet eller intensitet (sterk eller dempet)`,
    },
    {
      id: 'handverk-design-vg1-7-def-2',
      type: 'definition',
      title: 'Komplementærfarger',
      content: `Komplementærfarger er farger som ligger rett overfor hverandre i fargesirkelen. De skaper sterk kontrast og forsterker hverandre når de plasseres ved siden av hverandre.`,
    },
    {
      id: 'handverk-design-vg1-7-text-2',
      type: 'text',
      content: `**Fargeharmonier**

**Monokromatisk harmoni**:
- En kulør i ulike valører
- Rolig og enhetlig uttrykk
- Kan virke kjedelig uten variasjon

**Analog harmoni**:
- Nabofager i fargesirkelen
- Harmonisk og behagelig
- Eksempel: Blå, blågrønn, grønn

**Komplementær harmoni**:
- Farger rett overfor hverandre
- Sterk kontrast og spenning
- Eksempel: Rød og grønn

**Triadisk harmoni**:
- Tre farger med lik avstand
- Dynamisk og balansert
- Eksempel: Rød, gul, blå

**Split-komplementær harmoni**:
- En farge pluss naboene til komplementærfargen
- Balansert men interessant
- Eksempel: Blå, guloransje, rødoransje`,
    },
    {
      id: 'handverk-design-vg1-7-text-3',
      type: 'text',
      content: `**Fargekontraster**

**Simultankontrast**:
En farge påvirkes av omgivende farger. Grå virker varmere ved siden av blå.

**Valørkontrast**:
Kontrast mellom lyst og mørkt. Sterk valørkontrast gir dramatikk.

**Kald/varm kontrast**:
- Varme farger: Rød, oransje, gul (fremadrettede)
- Kalde farger: Blå, grønn, lilla (tilbaketrekkende)

**Metningskontrast**:
Sterke, rene farger mot dempede farger.

**Kvantumskontrast**:
Store felt med rolige farger, små felt med sterke aksentfarger.`,
    },
    {
      id: 'handverk-design-vg1-7-text-4',
      type: 'text',
      content: `**Farge i praksis**

**Psykologisk effekt**:
- **Rød**: Energi, lidenskap, fare
- **Blå**: Ro, tillit, profesjonalitet
- **Grønn**: Natur, helse, vekst
- **Gul**: Optimisme, varme, oppmerksomhet
- **Svart**: Eleganse, makt, sofistikasjon
- **Hvit**: Renhet, enkelhet, rom

**Tips for fargevalg**:
- Begynn med 2-3 farger
- Bruk 60-30-10 regelen (hovedfarge-sekundær-aksentfarge)
- Test farger i riktig belysning
- Vurder kulturelle assosiasjoner
- Tenk på målgruppen`,
    },
    {
      id: 'handverk-design-vg1-7-tip-1',
      type: 'tip',
      title: '60-30-10 regelen',
      content: `Bruk 60 % hovedfarge (nøytral eller dempet), 30 % sekundærfarge (støtter hovedfargen), og 10 % aksentfarge (kontrast og fokus). Dette skaper balanse og visuell interesse.`,
    },
    {
      id: 'handverk-design-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er primærfarger og sekundærfarger?',
        solution: 'Primærfarger er farger som ikke kan lages ved blanding: rød, gul og blå. Sekundærfarger lages ved å blande to primærfarger: oransje (rød+gul), grønn (gul+blå) og lilla (blå+rød).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er komplementærfarger? Gi tre eksempler på komplementære fargepar.',
        solution: 'Komplementærfarger ligger rett overfor hverandre i fargesirkelen og skaper sterk kontrast. Eksempler: Rød-grønn, blå-oransje, gul-lilla.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom kulør, valør og metning.',
        solution: 'Kulør er selve fargen (for eksempel rød eller blå). Valør er lyshetsgraden, altså hvor lys eller mørk fargen er. Metning er fargensrenhet eller intensitet, fra sterkt mettet til helt gråtonet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg tre farger som danner en analog harmoni og lag en enkel komposisjon.',
        solution: 'Eksempel: Blå, blågrønn og grønn. Komposisjonen bør vise hvordan fargene glir harmonisk over i hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er 60-30-10 regelen i fargedesign?',
        solution: '60-30-10 regelen sier at du bør bruke 60 % hovedfarge (ofte nøytral), 30 % sekundærfarge (støtter hovedfargen), og 10 % aksentfarge (for kontrast og fokus). Dette skaper balansert og visuelt tiltalende design.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fargesirkelen', definition: 'Visuelt verktøy som viser forholdet mellom farger' },
    { term: 'Primærfarger', definition: 'Grunnfarger som ikke kan blandes: rød, gul, blå' },
    { term: 'Sekundærfarger', definition: 'Farger skapt ved å blande to primærfarger' },
    { term: 'Komplementærfarger', definition: 'Farger som ligger overfor hverandre i fargesirkelen' },
    { term: 'Kulør', definition: 'Selve fargetypen (rød, blå, grønn osv.)' },
    { term: 'Valør', definition: 'Lyshetsgraden av en farge' },
    { term: 'Metning', definition: 'Fargensrenhet eller intensitet' },
    { term: 'Fargeharmoni', definition: 'Behagelig kombinasjon av farger basert på regler' },
  ],
};

// ============================================================================
// Kapittel 8: Designhistorie og tradisjoner
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_8: TextbookChapter = {
  id: 'handverk-design-vg1-8',
  courseId: 'handverk-design-vg1',
  chapterNumber: '8',
  title: 'Designhistorie og tradisjoner',
  description: 'Designhistorie fra antikken til modernismen. Norsk designtradisjon og internasjonale stilretninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til viktige designhistoriske epoker',
    'forstå norsk designtradisjon',
  ],
  content: [
    {
      id: 'handverk-design-vg1-8-intro',
      type: 'text',
      content: `Forståelse av designhistorie gir innsikt i hvorfor ting ser ut som de gjør i dag. Hver epoke har bidratt med ideer, former og teknikker som fortsatt inspirerer moderne design. I dette kapittelet utforsker vi de viktigste designhistoriske periodene og norsk designtradisjon.`,
    },
    {
      id: 'handverk-design-vg1-8-text-1',
      type: 'text',
      content: `**Historiske designepoker**

**Antikken (ca. 800 f.Kr. - 500 e.Kr.)**:
- Gresk og romersk arkitektur og design
- Søyler, proporsjoner og symmetri
- Det gylne snitt
- Keramikk og skulptur

**Middelalderen (ca. 500 - 1500)**:
- Gotisk stil med spisse buer
- Håndverkstradisjoner og laug
- Religiøs kunst og utsmykning
- Tekstil og vev

**Renessansen (ca. 1400 - 1600)**:
- Gjenfødelse av antikkens idealer
- Mennesket i sentrum
- Vitruvius og arkitekturens regler
- Leonardo da Vinci som universalgeni`,
    },
    {
      id: 'handverk-design-vg1-8-def-1',
      type: 'definition',
      title: 'Arts and Crafts-bevegelsen',
      content: `Arts and Crafts var en bevegelse som oppsto i Storbritannia rundt 1880 som reaksjon på industrialiseringen. Bevegelsen verdsatte håndverk, naturlige materialer og funksjonell design fremfor masseproduksjon.`,
    },
    {
      id: 'handverk-design-vg1-8-text-2',
      type: 'text',
      content: `**Den industrielle revolusjonen og reaksjoner**

**Arts and Crafts (1880-1920)**:
- William Morris som frontfigur
- Motstand mot industriell masseproduksjon
- Verdsatte håndverk og naturlige materialer
- Integrert kunst i hverdagen

**Jugend/Art Nouveau (1890-1910)**:
- Organiske, bølgende linjer
- Inspirert av naturen
- Dekorative overflater
- Kombinerte kunst og håndverk

**Art Deco (1920-1940)**:
- Geometriske mønstre
- Luksus og glamour
- Påvirket av maskinens estetikk
- Sterke farger og kontraster`,
    },
    {
      id: 'handverk-design-vg1-8-text-3',
      type: 'text',
      content: `**Modernismen og funksjonalismen**

**Bauhaus (1919-1933)**:
- "Form follows function"
- Enhet mellom kunst og håndverk
- Enkle, rene former
- Masseproduksjon med kvalitet
- Walter Gropius, Ludwig Mies van der Rohe

**Skandinavisk design**:
- Funksjonalitet kombinert med varme
- Naturlige materialer, spesielt tre
- Demokratisk design for alle
- Lys og enkelhet

**Postmodernisme (1970-1990)**:
- Utfordret modernismens regler
- Fargerik, leken og ironisk
- Memphis-gruppen i Italia
- Blanding av stiler og referanser`,
    },
    {
      id: 'handverk-design-vg1-8-text-4',
      type: 'text',
      content: `**Norsk designtradisjon**

**Tradisjonelt norsk håndverk**:
- Rosemaling: Dekorativ maling fra 1700-tallet
- Bunad: Tradisjonsdrakter med regionale variasjoner
- Trearbeid: Stolperkirker, stavkirker, møbler
- Tekstil: Veving og strikking

**Norske designpionerer**:
- **Grete Prytz Kittelsen**: Emaljekunstner (1917-2010)
- **Arne Jacobsen** (dansk): Påvirket norsk design
- **Peter Opsvik**: Ergonomiske stoler
- **Torstein Nilsen**: Grunnla Norway Says

**Moderne norsk design**:
- Funksjonalitet og bærekraft
- Respekt for naturen
- Minimalisme med varme
- Internasjonalt anerkjent industridesign`,
    },
    {
      id: 'handverk-design-vg1-8-tip-1',
      type: 'tip',
      title: 'La deg inspirere',
      content: `Besøk designmuseer og studer klassiske designobjekter. Forstå konteksten de ble skapt i og tenk på hvordan historiske ideer kan brukes på nye måter i dag.`,
    },
    {
      id: 'handverk-design-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var Arts and Crafts-bevegelsen, og hva reagerte den på?',
        solution: 'Arts and Crafts var en bevegelse som oppsto rundt 1880 som reaksjon på industrialiseringen og masseproduksjon. Bevegelsen verdsatte håndverk, naturlige materialer og funksjonell design, og ønsket å bringe kvalitet og skjønnhet tilbake i hverdagsgjenstander.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner Bauhaus-stilen?',
        solution: 'Bauhaus kjennetegnes av prinsippet "form follows function", enhet mellom kunst og håndverk, enkle og rene geometriske former, fokus på masseproduksjon med kvalitet, og fravær av unødvendig dekor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner skandinavisk design?',
        solution: 'Skandinavisk design kjennetegnes av funksjonalitet kombinert med varme, bruk av naturlige materialer (spesielt tre), demokratisk design tilgjengelig for alle, lys og enkelhet, og respekt for håndverkstradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre tradisjonelle norske håndverkstradisjoner.',
        solution: 'Rosemaling (dekorativ maling), bunad (tradisjonsdrakter), trearbeid (stavkirker, møbler), tekstilarbeid (veving, strikking), sølvsmedkunst og treskjæring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom Art Nouveau og Art Deco?',
        solution: 'Art Nouveau (1890-1910) bruker organiske, bølgende linjer inspirert av naturen. Art Deco (1920-1940) bruker geometriske mønstre og former, inspirert av maskinens estetikk. Art Nouveau er naturlig og kurvete, Art Deco er geometrisk og stramt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arts and Crafts', definition: 'Bevegelse som verdsatte håndverk fremfor industriell masseproduksjon' },
    { term: 'Bauhaus', definition: 'Innflytelsesrik designskole (1919-1933) med fokus på funksjon' },
    { term: 'Art Nouveau', definition: 'Stilperiode med organiske, naturinspirerte linjer' },
    { term: 'Art Deco', definition: 'Stilperiode med geometriske mønstre og luksus' },
    { term: 'Skandinavisk design', definition: 'Funksjonell design med naturlige materialer og demokratiske verdier' },
    { term: 'Rosemaling', definition: 'Tradisjonell norsk dekorativ maleteknikk' },
    { term: 'Modernisme', definition: 'Designretning som vektlegger funksjon og enkelhet' },
  ],
};

// ============================================================================
// Kapittel 9: Bærekraftig design
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_9: TextbookChapter = {
  id: 'handverk-design-vg1-9',
  courseId: 'handverk-design-vg1',
  chapterNumber: '9',
  title: 'Bærekraftig design',
  description: 'Miljøvennlige materialer, sirkulær design, gjenbruk, reparasjon og redusert avfall.',
  estimatedMinutes: 50,
  competenceGoals: [
    'designe med tanke på bærekraft',
    'anvende prinsipper for sirkulær design',
  ],
  content: [
    {
      id: 'handverk-design-vg1-9-intro',
      type: 'text',
      content: `Bærekraftig design handler om å skape produkter som tar hensyn til miljøet gjennom hele livssyklusen. Fra materialvalg til produksjon, bruk og avhending må vi tenke på hvilken påvirkning produktene våre har. I dette kapittelet lærer du prinsipper og metoder for å designe mer bærekraftig.`,
    },
    {
      id: 'handverk-design-vg1-9-def-1',
      type: 'definition',
      title: 'Bærekraftig design',
      content: `Bærekraftig design er en tilnærming der miljømessige, sosiale og økonomiske hensyn integreres i designprosessen. Målet er å minimere negativ miljøpåvirkning gjennom produktets hele livssyklus.`,
    },
    {
      id: 'handverk-design-vg1-9-text-1',
      type: 'text',
      content: `**Livssyklustenkning**

Et produkts livssyklus omfatter:

**1. Råvareutvinning**
- Hvor kommer materialene fra?
- Hvordan påvirker utvinning miljøet?
- Er ressursene fornybare?

**2. Produksjon**
- Energiforbruk i produksjonen
- Utslipp og avfall
- Arbeidsforhold

**3. Transport**
- Avstand fra produsent til forbruker
- Transportmiddel og drivstoff
- Emballasje

**4. Bruksfase**
- Energiforbruk ved bruk
- Holdbarhet og vedlikehold
- Reparasjonsmuligheter

**5. Avhending**
- Kan produktet resirkuleres?
- Er det biologisk nedbrytbart?
- Hvordan håndteres avfall?`,
    },
    {
      id: 'handverk-design-vg1-9-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `Sirkulær økonomi er et økonomisk system der ressurser holdes i bruk så lenge som mulig. I stedet for "ta, bruk, kast" designes produkter for gjenbruk, reparasjon og resirkulering.`,
    },
    {
      id: 'handverk-design-vg1-9-text-2',
      type: 'text',
      content: `**Prinsipper for bærekraftig design**

**Design for holdbarhet**:
- Bruk kvalitetsmaterialer
- Tidløst design som ikke går av moten
- Solid konstruksjon
- Slitesterke overflater

**Design for reparasjon**:
- Gjør deler utskiftbare
- Bruk standard festemidler
- Gi tilgang til reservedeler
- Dokumenter reparasjonsmuligheter

**Design for demontering**:
- Enkelt å ta fra hverandre
- Materialer kan sorteres
- Unngå limte forbindelser der skruer fungerer
- Merk materialer tydelig

**Design for resirkulering**:
- Bruk materialer som kan resirkuleres
- Unngå materialblandinger
- Minimer antall materialtyper
- Velg lokalt tilgjengelige materialer`,
    },
    {
      id: 'handverk-design-vg1-9-text-3',
      type: 'text',
      content: `**Bærekraftige materialer**

**Fornybare materialer**:
- Tre fra bærekraftig skogbruk (FSC-sertifisert)
- Bambus (rasktvoksende)
- Kork (høstes uten å felle treet)
- Naturfibre (lin, hamp, ull)

**Resirkulerte materialer**:
- Resirkulert plast
- Gjenvunnet metall
- Resirkulert papir og kartong
- Resirkulert tekstil

**Biologisk nedbrytbare**:
- Mycelium (soppbasert materiale)
- Bioplast fra plantemateriale
- Naturlige kompositter
- Lokalt produserte råmaterialer

**Materialer å unngå**:
- Ikke-resirkulerbar plast
- Giftige overflatebehandlinger
- Materialer fra truede ressurser
- Produkter med høyt klimafotavtrykk`,
    },
    {
      id: 'handverk-design-vg1-9-text-4',
      type: 'text',
      content: `**Redusere avfall**

**Før produksjon**:
- Planlegg for minimal avkapp
- Optimaliser tilskjæringsmønstre
- Velg riktige dimensjoner

**Under produksjon**:
- Bruk avkapp kreativt
- Sorter avfall for gjenvinning
- Minimer emballasje

**Upcycling og redesign**:
- Gi gamle materialer nytt liv
- Transformer kasserte produkter
- Kombiner restmaterialer kreativt

**Cradle to Cradle**:
- Design for biologisk eller teknisk kretsløp
- Materialer som næringsstoffer
- Intet avfall, bare ressurser`,
    },
    {
      id: 'handverk-design-vg1-9-tip-1',
      type: 'tip',
      title: 'Spør deg selv',
      content: `Ved materialvalg, still disse spørsmålene: Trenger produktet virkelig dette materialet? Er det et mer bærekraftig alternativ? Kan materialet gjenvinnes etter bruk? Hva skjer med produktet når det er utslitt?`,
    },
    {
      id: 'handverk-design-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem fasene i et produkts livssyklus?',
        solution: 'De fem fasene er: 1) Råvareutvinning, 2) Produksjon, 3) Transport, 4) Bruksfase, 5) Avhending/End of life.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sirkulær økonomi, og hvordan skiller det seg fra lineær økonomi?',
        solution: 'Sirkulær økonomi er et system der ressurser holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon og resirkulering. I lineær økonomi tas ressurser ut, brukes og kastes ("ta, bruk, kast").',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fire prinsipper for bærekraftig design.',
        solution: 'Design for holdbarhet, design for reparasjon, design for demontering og design for resirkulering. I tillegg kan nevnes design for minimal miljøpåvirkning og bruk av bærekraftige materialer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et hverdagsprodukt og analyser hvordan det kunne vært designet mer bærekraftig.',
        solution: 'Analysen bør vurdere materialvalg, holdbarhet, reparasjonsmuligheter, transport, og hva som skjer ved avhending. Foreslå konkrete forbedringer basert på prinsippene for bærekraftig design.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er upcycling, og hvordan skiller det seg fra resirkulering?',
        solution: 'Upcycling er å gi kasserte materialer eller produkter nytt liv ved å transformere dem til noe av høyere verdi. Resirkulering bryter ned materialet for å lage noe nytt, ofte med lavere kvalitet. Upcycling bevarer mer av materialets opprinnelige verdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bærekraftig design', definition: 'Design som minimerer miljøpåvirkning gjennom produktets livssyklus' },
    { term: 'Livssyklus', definition: 'Alle fasene et produkt går gjennom fra råvare til avhending' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk system der ressurser holdes i bruk lengst mulig' },
    { term: 'Cradle to Cradle', definition: 'Designfilosofi der materialer er næringsstoffer i kretsløp' },
    { term: 'Upcycling', definition: 'Å transformere avfall til produkter med høyere verdi' },
    { term: 'FSC-sertifisert', definition: 'Tre fra bærekraftig forvaltet skog' },
    { term: 'Klimafotavtrykk', definition: 'Total mengde klimagasser et produkt forårsaker' },
  ],
};

// ============================================================================
// Kapittel 10: Entreprenørskap og forretning
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_10: TextbookChapter = {
  id: 'handverk-design-vg1-10',
  courseId: 'handverk-design-vg1',
  chapterNumber: '10',
  title: 'Entreprenørskap og forretning',
  description: 'Å starte egen håndverksbedrift, prissetting, markedsføring og nettbutikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå grunnleggende forretningsdrift',
    'kunne prise egne produkter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-10-intro',
      type: 'text',
      content: `Mange håndverkere og designere drømmer om å leve av det de lager. For å lykkes trenger du ikke bare gode produkter, men også forretningsforståelse. I dette kapittelet lærer du grunnleggende om å starte og drive en håndverksbedrift.`,
    },
    {
      id: 'handverk-design-vg1-10-def-1',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `Entreprenørskap handler om å identifisere muligheter og skape noe nytt, enten det er en bedrift, et produkt eller en tjeneste. En entreprenør tar risiko og jobber for å realisere sine ideer.`,
    },
    {
      id: 'handverk-design-vg1-10-text-1',
      type: 'text',
      content: `**Starte egen virksomhet**

**Organisasjonsformer**:
- **Enkeltpersonforetak**: Enklest å starte, personlig ansvar
- **Aksjeselskap (AS)**: Begrenset ansvar, mer komplisert
- **Samvirkeforetak**: Flere eiere med felles mål

**Registrering**:
- Altinn.no for registrering av foretak
- Brønnøysundregistrene
- Eventuelt momsregistrering (over 50 000 kr)
- Bankkonto for bedriften

**Nødvendige vurderinger**:
- Er det marked for produktene mine?
- Hvem er målgruppen?
- Hva skiller meg fra konkurrentene?
- Har jeg nok kapital til oppstart?`,
    },
    {
      id: 'handverk-design-vg1-10-def-2',
      type: 'definition',
      title: 'Forretningsmodell',
      content: `En forretningsmodell beskriver hvordan en bedrift skaper, leverer og fanger verdi. Den inkluderer hvem kundene er, hva som tilbys, hvordan produktene leveres, og hvordan bedriften tjener penger.`,
    },
    {
      id: 'handverk-design-vg1-10-text-2',
      type: 'text',
      content: `**Prissetting av håndverksprodukter**

**Kostnadskalkyle**:
1. **Materialkostnad**: Alle materialer brukt i produktet
2. **Arbeidstid**: Timer x timelønn
3. **Faste kostnader**: Andel av verksted, verktøy, strøm
4. **Fortjeneste**: Margin for å tjene penger

**Prisformel**:
Pris = Materialer + (Timer x Timelønn) + Faste kostnader + Fortjeneste

**Prissettingsstrategier**:
- **Kostpluss**: Legg til margin på kostnadene
- **Markedspris**: Pris i forhold til konkurrenter
- **Verdipris**: Hva kundene er villige til å betale

**Vanlige feil**:
- Undervurdere arbeidstiden
- Glemme skjulte kostnader
- Prise for lavt av frykt for å miste kunder`,
    },
    {
      id: 'handverk-design-vg1-10-text-3',
      type: 'text',
      content: `**Markedsføring av håndverk**

**Bygge merkevare**:
- Finn din unike stil og historie
- Konsistent visuell profil
- Fortell historien bak produktene
- Vis prosessen, ikke bare resultatet

**Salgskanaler**:
- Egen nettbutikk (Shopify, WooCommerce)
- Markedsplasser (Etsy, Finn.no)
- Fysiske markeder og messer
- Butikker og gallerier (kommisjon)

**Sosiale medier**:
- Instagram for visuelt håndverk
- Pinterest for inspirasjon
- TikTok for prosessvideoer
- Facebook for lokalt marked

**Innholdstips**:
- Del arbeidsprosessen
- Vis materialer og teknikker
- Fortell om inspirasjon
- Presenter deg selv som håndverker`,
    },
    {
      id: 'handverk-design-vg1-10-text-4',
      type: 'text',
      content: `**Nettbutikk og digital tilstedeværelse**

**Hva trenger du**:
- Domenenavn (f.eks. dittmerke.no)
- Nettbutikkløsning
- Gode produktbilder
- Tydelige produktbeskrivelser
- Betalingsløsning
- Fraktløsning

**Produktbilder**:
- God belysning (naturlig lys)
- Nøytral bakgrunn
- Flere vinkler av produktet
- Vis størrelse med referanse
- Detaljbilder av kvalitet

**Kundeservice**:
- Svar raskt på henvendelser
- Vær tydelig på leveringstid
- Ha gode returvilkår
- Lever mer enn forventet`,
    },
    {
      id: 'handverk-design-vg1-10-tip-1',
      type: 'tip',
      title: 'Start smått',
      content: `Du trenger ikke en perfekt nettbutikk fra dag én. Start med å selge på markeder eller gjennom sosiale medier. Lær hva kundene vil ha og bygg opp virksomheten gradvis.`,
    },
    {
      id: 'handverk-design-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom enkeltpersonforetak og aksjeselskap?',
        solution: 'I enkeltpersonforetak har eieren personlig ansvar for bedriftens gjeld, og det er enklest å starte. I aksjeselskap (AS) er ansvaret begrenset til innskutt kapital, men det krever mer kapital ved oppstart og strengere regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Regn ut prisen på et produkt. Materialer: 150 kr, Arbeidstid: 3 timer x 250 kr/time, Faste kostnader: 50 kr, Fortjeneste: 20 %.',
        solution: 'Materialer: 150 kr + Arbeid: 750 kr (3 x 250) + Faste kostnader: 50 kr = 950 kr. Med 20 % fortjeneste: 950 x 1,20 = 1140 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre ulike salgskanaler for håndverksprodukter.',
        solution: 'Egen nettbutikk, markedsplasser som Etsy eller Finn.no, fysiske markeder og messer, butikker og gallerier på kommisjon, direkte salg gjennom sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å fortelle historien bak produktene dine?',
        solution: 'Historien skaper emosjonell tilknytning og differensierer produktet fra masseproduserte varer. Kunder er villige til å betale mer når de vet hvem som har laget produktet, hvordan og hvorfor. Det bygger merkevare og lojalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du tenke på når du tar produktbilder for nettbutikken?',
        solution: 'Bruk god belysning (helst naturlig lys), nøytral bakgrunn, ta bilder fra flere vinkler, vis størrelse med referanse (f.eks. hånd eller mynt), ta detaljbilder som viser kvalitet og finish.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel forretningsplan for et tenkt håndverksprodukt.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv produktet og målgruppen.',
            solution: 'Definer hva produktet er, hva som gjør det unikt, og hvem som vil kjøpe det.',
          },
          {
            label: 'b',
            task: 'Hvordan vil du prise og markedsføre det?',
            solution: 'Beskriv prissetting basert på kostnader og marked, og velg passende markedsføringskanaler.',
          },
        ],
        solution: 'Forretningsplanen bør inneholde produktbeskrivelse, målgruppe, prisberegning, markedsføringsstrategi og salgskanaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Entreprenørskap', definition: 'Å identifisere muligheter og skape noe nytt, som en bedrift eller et produkt' },
    { term: 'Enkeltpersonforetak', definition: 'Enkleste selskapsform med personlig ansvar for gjeld' },
    { term: 'Forretningsmodell', definition: 'Beskrivelse av hvordan bedriften skaper og fanger verdi' },
    { term: 'Prissetting', definition: 'Å bestemme riktig pris på produkter basert på kostnader og marked' },
    { term: 'Merkevare', definition: 'Bedriftens identitet og rykte som skaper gjenkjennelse' },
    { term: 'Kommisjon', definition: 'Salgsavtale der butikken får andel av salget' },
    { term: 'Fortjeneste', definition: 'Det bedriften tjener etter at kostnader er dekket' },
  ],
};

// Export alle kapitlene som en array
export const TEXTBOOK_CONTENT_HANDVERK_DESIGN_VG1_PART1 = [
  CHAPTER_HANDVERK_DESIGN_VG1_1,
  CHAPTER_HANDVERK_DESIGN_VG1_2,
  CHAPTER_HANDVERK_DESIGN_VG1_3,
  CHAPTER_HANDVERK_DESIGN_VG1_4,
  CHAPTER_HANDVERK_DESIGN_VG1_5,
  CHAPTER_HANDVERK_DESIGN_VG1_6,
  CHAPTER_HANDVERK_DESIGN_VG1_7,
  CHAPTER_HANDVERK_DESIGN_VG1_8,
  CHAPTER_HANDVERK_DESIGN_VG1_9,
  CHAPTER_HANDVERK_DESIGN_VG1_10,
];

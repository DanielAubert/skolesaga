/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 6: Landformer og landskapsutvikling
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Detaljerte underkapitler for kapittel 6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Glasiale erosjonsformer
// ============================================================================

export const CHAPTER_GEOFAG_1_6_1: TextbookChapter = {
  id: 'geofag-1-6-1',
  courseId: 'geofag-1',
  chapterNumber: '6.1',
  title: 'Glasiale erosjonsformer',
  description: 'Landformer skapt av isbreenes erosjon gjennom plukking og abrasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'identifisere og forklare glasiale erosjonsformer som botner, U-daler og fjorder',
    'beskrive hvordan isbreer eroderer gjennom plukking og abrasjon',
    'forklare dannelsen av tinder, egger og hengende daler',
    'vurdere betydningen av glasial erosjon for Norges landskap',
  ],
  content: [
    {
      id: 'geo1-6-1-intro',
      type: 'text',
      content: `# Glasiale erosjonsformer

Isbreer er blant de kraftigste erosjonsagensene paa jorda. Gjennom flere istider har isbreer gravd ut fjorder, botner og daler som i dag preger Norges landskap. Glasiale erosjonsformer er landformer skapt ved at isbreer fjerner og transporterer bort bergmateriale.

## Isbreenes erosjonskraft

Isbreer eroderer gjennom to hovedmekanismer:

1. **Plukking (quarrying)** - Is fryser fast i sprekker i berget og river loes bergstykker naar breen beveger seg
2. **Abrasjon (sliping)** - Steiner og grus frosset inn i isbunnen sliper mot underlaget som sandpapir

Erosjonskraften avhenger av:
- Isens tykkelse og vekt
- Breens bevegelseshastighet
- Mengden stein og grus i isen
- Bergartens hardhet`,
    },
    {
      id: 'geo1-6-1-def-plukking',
      type: 'definition',
      title: 'Plukking (quarrying)',
      content: 'Plukking er en glasial erosjonsmekanisme der smeltevann trenger inn i sprekker i berggrunnen, fryser og utvider sprekkene. Naar isbreen beveger seg, rives bergstykker loes og fraktes med. Plukking er mest effektiv paa le-siden av bergknauser der trykket er lavere.',
    },
    {
      id: 'geo1-6-1-def-abrasjon',
      type: 'definition',
      title: 'Abrasjon',
      content: 'Abrasjon er mekanisk sliping der steiner og grus frosset inn i bunnen av isbreen sliper mot berggrunnen. Prosessen produserer skuringsstriper, polerte flater og finkornet materiale kalt bremel eller steinmel.',
    },
    {
      id: 'geo1-6-1-botn',
      type: 'text',
      content: `## Botn (kar)

En botn er en av de mest karakteristiske glasiale erosjonsformene. Det er en amfiteaterformet fordypning i fjellsiden der en isbre har hatt sitt opphav.

### Kjennetegn paa en botn

- **Bratt bakvegg** - Ofte naer loddrett, dannet ved frostsprengning og plukking
- **Flat eller skaalformet bunn** - Utgravet av isens erosjon
- **Terskel ved utgangen** - Ofte med et lite vann (botntjern)
- **Typisk diameter** - Fra noen hundre meter til flere kilometer

### Dannelse

1. Snoe samles i en fordypning i fjellsiden
2. Snoeen omdannes til breis over tid
3. Frostsprengning i bakveggen loeser materiale
4. Isens rotasjonsbevegelse graver ut bunnen
5. Plukking ved bakveggen utvider botnen bakover`,
    },
    {
      id: 'geo1-6-1-def-botn',
      type: 'definition',
      title: 'Botn (kar, cirkus)',
      content: 'En botn er en amfiteaterformet nisje i fjellsiden dannet ved glasial erosjon. Karakteriseres av bratt bakvegg, flat bunn og ofte et botntjern. Botner er utgangspunktet for botnbreer og utvikles ved kombinasjon av frostsprengning og iserosjon.',
    },
    {
      id: 'geo1-6-1-tinder-egger',
      type: 'text',
      content: `## Tinder og egger

Naar flere botner graver seg inn i samme fjellmassiv fra forskjellige sider, dannes karakteristiske spisse former.

### Tind (horn, pyramidetopp)

- Dannes naar tre eller flere botner moetes
- Gir en spiss, pyramideformet topp
- Klassiske eksempler: Matterhorn (Alpene), Stetind (Norge)
- Jo flere botner, desto spissere tind

### Egg (aret)

- Skarp rygg mellom to botner
- Dannes naar to botner graver mot hverandre
- Knivskarp kam med bratte sider
- Eksempel: Besseggen i Jotunheimen

### Nunatak

- Fjelltopp som stakk opp over innlandsisen
- Har ofte rester av forvitringsmateriale paa toppen
- Viser isens maksimale tykkelse`,
    },
    {
      id: 'geo1-6-1-u-dal',
      type: 'text',
      content: `## U-dal

U-daler er brede daler med flat bunn og bratte sider, formet av dalbreer.

### Kjennetegn

- **U-formet tverrsnitt** - I motsetning til V-formede elveeroderte daler
- **Flat dalbunn** - Ofte med elv som slynger seg
- **Bratte dalsider** - Kan vaere naer loddrette
- **Trappetrinnsform** - Vekslende flate og bratte partier i lengderetning

### Dannelse

1. Opprinnelig elveerodert V-dal
2. Isbre fyller dalen under istiden
3. Isen eroderer sidene og bunnen
4. Dalen utvides og faar U-form
5. Etter istiden: Elv i overbred dal

### Eksempler i Norge

- Romsdalen
- Naeroeydalen
- Leirdalsoeyri`,
    },
    {
      id: 'geo1-6-1-hengende-dal',
      type: 'text',
      content: `## Hengende dal

En hengende dal er en sidedal som munner ut hoyt oppe i hoveddalens dalside, ofte med fossefall.

### Hvorfor dannes hengende daler?

- Hoveddalens bre var mye stoerre enn sidedalens
- Stoerre bre = dypere erosjon
- Sidedalen "henger igjen" naar hovedbreen gravde seg dypere ned
- Etter istiden: Elven fra sidedalen faller ned i hoveddalen

### Kjennetegn

- Munner ut hoyt over hoveddalens bunn
- Ofte spektakulaere fossefall
- Viser forskjellen i erosjonsdybde

### Kjente eksempler

- De syv soestrene (Geirangerfjorden)
- Voeringsfossen (Maabodalen)
- Briksdalsfossen`,
    },
    {
      id: 'geo1-6-1-fjord',
      type: 'text',
      content: `## Fjord

Fjorder er Norges mest ikoniske landform - dype, trange havbukter omgitt av bratte fjell.

### Hva er en fjord?

- En druknet U-dal som er gravd under havnivaa
- Dannet av dalbreer som naadde havet
- Karakteriseres av stor dybde og bratte sider

### Terskel ved munningen

De fleste fjorder har en grunn terskel ved munningen:
- Isbreen var tynnest ved kysten
- Mindre erosjon der isen floet
- Resultatet: Dypest inne, grunnest ute

### Norske rekorder

- **Sognefjorden**: 1308 m dyp, 204 km lang
- **Hardangerfjorden**: 800 m dyp, 179 km lang
- Fjordene er gravd opptil 1000 m under havnivaa

### Verdensarv

Geirangerfjorden og Naeroeyfijorden er paa UNESCOs verdensarvliste som eksempler paa spektakulaere glasiale landskap.`,
    },
    {
      id: 'geo1-6-1-def-fjord',
      type: 'definition',
      title: 'Fjord',
      content: 'En fjord er en lang, smal og dyp havbukt dannet ved at en isbre eroderte dalen under havnivaa. Fjorder kjennetegnes av bratte sider, stor dybde og ofte en grunnere terskel ved munningen. Norge har verdens fleste og dypeste fjorder.',
    },
    {
      id: 'geo1-6-1-smaformer',
      type: 'text',
      content: `## Smaaformer fra glasial erosjon

I tillegg til de store landformene etterlater isbreer karakteristiske smaaformer.

### Rundsva

- Avrundede bergknauser
- Glatt, slipt overflate paa lo-siden (mot isen)
- Bratt, ru overflate paa le-siden (plukking)
- Viser isens bevegelsesretning

### Skuringsstriper

- Parallelle riper i bergoverflaten
- Dannet av steiner dratt langs bunnen av isbreen
- Viser eksakt bevegelsesretning
- Finnes over hele Norge

### Jettegryter

- Runde fordypninger i fast fjell
- Dannet av smeltevann under isen
- Virvlende vann med stein slipper ut gropen
- Kan vaere flere meter dype

### Flyttblokker (erratiske blokker)

- Store steinblokker transportert av isen
- Ligger paa helt annen berggrunn enn de kommer fra
- Kan vaere svart store (hus-stoerrelse)
- Beviser isens enorme transportevne`,
    },
    {
      id: 'geo1-6-1-example',
      type: 'example',
      title: 'Tolke glasiale erosjonsformer i Jotunheimen',
      problem: 'Du beseoker Jotunheimen og observerer foelgende: Spisse fjelltopper, skarpe rygger, brede daler med bratte sider, og smaa vann i nisjene under fjelltoppene. Forklar hvordan disse formene har dannet seg.',
      solution: `**Tolkning av landskapet i Jotunheimen:**

1. **Spisse fjelltopper (tinder)**
   - Galdhopiggen, Glittertind er typiske tinder
   - Dannet ved at flere botner har gravd seg inn fra ulike sider
   - Resultatet er pyramideformede topper

2. **Skarpe rygger (egger)**
   - Besseggen er et klassisk eksempel
   - Dannet mellom to botner som gravet mot hverandre
   - Knivskarp kam med bratte sider til begge sider

3. **Brede daler med bratte sider (U-daler)**
   - Visdalen, Leirdalen har klassisk U-form
   - Dalbreer har utvidet opprinnelige elveeroderte V-daler
   - Flat bunn, bratte sider

4. **Smaa vann i nisjer (botntjern)**
   - Ligger i bunnen av botner
   - Dannet bak terskelen som isen etterlot
   - Viser hvor botnbreene hadde sin start

**Konklusjon:** Jotunheimen viser et komplett glasialt erosjonslandskap formet gjennom flere istider.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles den glasiale erosjonsmekanismen der is fryser fast i sprekker og river loes bergstykker?',
      options: [
        { id: 'a', text: 'Plukking', isCorrect: true },
        { id: 'b', text: 'Abrasjon', isCorrect: false },
        { id: 'c', text: 'Korrasjon', isCorrect: false },
        { id: 'd', text: 'Deflasjon', isCorrect: false },
      ],
      solution: 'Plukking (quarrying) er prosessen der smeltevann trenger inn i sprekker i berget, fryser og utvider sprekkene. Naar isbreen beveger seg, rives bergstykker loes og transporteres med isen.',
    },
    {
      id: 'geo1-6-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan en botn (kar) dannes.',
      solution: 'En botn dannes i en fordypning i fjellsiden der snoe akkumuleres og omdannes til breis. Frostsprengning i bakveggen loeser materiale som faller paa breen. Isens rotasjonsbevegelse graver ut bunnen gjennom abrasjon, mens plukking ved bakveggen utvider botnen bakover. Over tid faar botnen sin karakteristiske amfiteaterform med bratt bakvegg, flat bunn og terskel ved utgangen.',
    },
    {
      id: 'geo1-6-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom en U-dal og en V-dal?',
      options: [
        { id: 'a', text: 'U-dalen er formet av isbre, V-dalen av elv', isCorrect: true },
        { id: 'b', text: 'U-dalen er eldre enn V-dalen', isCorrect: false },
        { id: 'c', text: 'U-dalen finnes bare i Norge', isCorrect: false },
        { id: 'd', text: 'U-dalen har brattere sider', isCorrect: false },
      ],
      solution: 'U-daler er formet av isbreer og har flat bunn med bratte sider. V-daler er formet av elver og har spisst tverrsnitt der elven renner i bunnen. Mange norske daler var opprinnelig V-daler som ble omformet til U-daler av isbreer.',
    },
    {
      id: 'geo1-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor fjorder ofte har en terskel (grunnere omraade) ved munningen.',
      solution: 'Fjordterskelen skyldes at isbreen var tynnest ved kysten. Naar isbreen naadde havet, begynte den aa floete og mistet kontakten med bunnen. Uten kontakt med bunnen kunne ikke isen erodere like effektivt. I tillegg var istrykket lavere der isen var tynnere. Resultatet er at fjorden er dypest der isen var tykkest (inne i landet) og grunnere ved munningen.',
    },
    {
      id: 'geo1-6-1-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken landform dannes naar tre eller flere botner moetes fra forskjellige sider av et fjellmassiv?',
      options: [
        { id: 'a', text: 'Tind (horn)', isCorrect: true },
        { id: 'b', text: 'Egg (aret)', isCorrect: false },
        { id: 'c', text: 'Nunatak', isCorrect: false },
        { id: 'd', text: 'Rundsva', isCorrect: false },
      ],
      solution: 'En tind (horn) dannes naar tre eller flere botner graver seg inn i samme fjellmassiv fra forskjellige sider. Det som blir igjen er en spiss, pyramideformet topp. Jo flere botner som moetes, desto spissere blir tinden. Matterhorn i Alpene er et klassisk eksempel.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2: Glasiale avsetningsformer
// ============================================================================

export const CHAPTER_GEOFAG_1_6_2: TextbookChapter = {
  id: 'geofag-1-6-2',
  courseId: 'geofag-1',
  chapterNumber: '6.2',
  title: 'Glasiale avsetningsformer',
  description: 'Morener, eskere og andre landformer skapt av isbreenes avsetninger.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for ulike typer morener og hvordan de dannes',
    'forklare dannelsen av eskere, drumliner og raer',
    'beskrive forskjellen mellom usorterte og sorterte glasiale avsetninger',
    'identifisere glasiale avsetningsformer i norsk natur',
  ],
  content: [
    {
      id: 'geo1-6-2-intro',
      type: 'text',
      content: `# Glasiale avsetningsformer

Naar isbreer smelter, etterlater de store mengder materiale de har transportert. Dette materialet danner karakteristiske landformer som vi kaller glasiale avsetningsformer.

## To hovedtyper avsetninger

1. **Usorterte avsetninger (morene/till)**
   - Avsatt direkte av isen
   - Alle kornstoerrelser blandet
   - Kantede fragmenter

2. **Sorterte avsetninger (glasifluviale)**
   - Avsatt av smeltevann
   - Sortert etter kornstoerelse
   - Mer avrundede fragmenter

Begge typer finnes over hele Norge og forteller historien om istidene.`,
    },
    {
      id: 'geo1-6-2-def-morene',
      type: 'definition',
      title: 'Morene',
      content: 'Morene er usortert materiale (til) transportert og avsatt av en isbre. Materialet inneholder alle kornstoerrelser fra fineste leire til store blokker, og fragmentene er ofte kantede. Morene avsettes direkte av isen uten sortering av smeltevann.',
    },
    {
      id: 'geo1-6-2-morenetyper',
      type: 'text',
      content: `## Morenetyper

Morener klassifiseres etter hvor i forhold til isbreen de avsettes.

### Bunnmorene

- Avsettes under isbreen
- Presset sammen av isens vekt
- Ofte jevn, bolgende overflate
- Kan vaere svart kompakt (loddbunnmorene)
- Dekker store omraader

### Endemorene

- Avsettes ved breens front
- Danner rygger paa tvers av isens bevegelse
- Viser hvor breen stoppet eller hadde pause
- Kan vaere mange titalls meter hoey
- Viktig for aa datere breutbredelse

### Sidemorene

- Avsettes langs breens sider
- Danner langstrakte rygger parallelt med dalen
- Materiale fra forvitring av fjellsidene
- Tydelige langs mange norske breer

### Midtmorene

- Dannes naar to breer flyter sammen
- Sidemorenene moetes og danner stripe midt paa breen
- Synlig som mork stripe paa breoverflaten`,
    },
    {
      id: 'geo1-6-2-def-endemorene',
      type: 'definition',
      title: 'Endemorene',
      content: 'En endemorene er en rygg av morenemateriale avsatt ved fronten av en isbre. Endemorenene viser hvor breen hadde sin maksimale utbredelse eller stoppet under tilbaketrekning. De gaar paa tvers av isens bevegelsesretning.',
    },
    {
      id: 'geo1-6-2-raer',
      type: 'text',
      content: `## Raer - store endemorener

Raer er spesielt store endemorenerygg avsatt av innlandsisen.

### Kjennetegn

- Langstrakte rygger paa tvers av isens bevegelse
- Kan vaere mange kilometer lange
- Hoyde opptil 50-100 meter
- Ofte flere parallelle raer

### Ra-landskapet i Oestfold

- Dannet under isavsmeltingen for 11 000-10 000 aar siden
- Viser hvor iskanten stoppet under tilbaketrekningen
- Inkluderer Onsoyraet, Vestfoldraet og flere
- Viktige grusressurser

### Geologisk betydning

- Daterer isens tilbaketrekning
- Viser klimavariasjoner under avsmeltingen
- Korrelerer med Ra-stadiene i geologisk tid`,
    },
    {
      id: 'geo1-6-2-drumliner',
      type: 'text',
      content: `## Drumliner

Drumliner er stroemlinjede hauger av morenemateriale formet under bevegelig is.

### Kjennetegn

- Langstrakt, stromlinjet form
- Hoyde 5-50 meter, lengde 100-2000 meter
- Bratt side mot der isen kom fra (stotsiden)
- Slak side i isens bevegelsesretning (lesiden)
- Ofte i store grupper (drumlinfelt)

### Dannelse

- Materiale samler seg under isen
- Formes av isens bevegelse til stromlinjet form
- Noyaktig dannelsesmekanisme diskuteres fortsatt

### Eksempler i Norge

- Drumlinfelt paa Jaeren
- Omraader rundt Mjosa
- Innlandet generelt

### Betydning

- Viser isens bevegelsesretning
- Forteller om isens tykkelse og bevegelseshastighet`,
    },
    {
      id: 'geo1-6-2-def-drumlin',
      type: 'definition',
      title: 'Drumlin',
      content: 'En drumlin er en stromlinjeformet haug av morenemateriale dannet under en bevegelig isbre. Drumliner har bratt stoetside mot der isen kom fra og slak leside. De opptrer ofte i store grupper kalt drumlinfelt.',
    },
    {
      id: 'geo1-6-2-glasifluviale',
      type: 'text',
      content: `## Glasifluviale avsetninger

Smeltevann fra isbreer avsetter sortert materiale som skiller seg fra usortert morene.

### Eskere

- Lange, smale rygger av sand og grus
- Dannet i smeltevannstunneler under eller i isen
- Nesten "opp-ned" elvelop
- Viktige sand- og grusressurser
- Kan vaere mange kilometer lange

### Sandur (sandslette)

- Flat avsetning foran isbreen
- Dannet av flettede breelver
- Grovt materiale naermest isen, finere lenger ut
- Eksempel: Skeidararsandur paa Island

### Kame og kameterrasse

- Uregelmessige hauger og terrasser
- Avsatt i sprekker og langs iskanten
- Ofte kollapsstrukturer naar stoetteisen smelter

### Delta i bredemt sjoe

- Avsatt der breelv moette innsjoe demmet av isen
- Flat topp, bratte forsetsider
- Viser tidligere sjoenivaaer`,
    },
    {
      id: 'geo1-6-2-def-esker',
      type: 'definition',
      title: 'Esker',
      content: 'En esker er en lang, smal rygg av sortert sand og grus avsatt av smeltevann i en tunnel under eller inne i en isbre. Naar isen smelter, staar ryggen igjen som et "opp-ned" elvelop. Eskere er viktige kilder til sand og grus.',
    },
    {
      id: 'geo1-6-2-sortert-usortert',
      type: 'text',
      content: `## Sorterte vs. usorterte avsetninger

### Usortert (morene)

**Avsatt av:** Is direkte
**Kornstoerrelser:** Alle blandet (leire til blokker)
**Fragmentform:** Ofte kantet
**Lagdeling:** Ingen eller daarlig
**Eksempler:** Bunnmorene, endemorene

### Sortert (glasifluvialt)

**Avsatt av:** Smeltevann
**Kornstoerrelser:** Sortert etter stoerrelse
**Fragmentform:** Mer avrundet
**Lagdeling:** Ofte tydelig
**Eksempler:** Eskere, sandurer, delta

### Betydning for samfunnet

- Sorterte avsetninger: Sand- og grusressurser
- Morene: God jordbruksjord, men vanskelig aa grave i
- Begge: Grunnvannsmagasiner`,
    },
    {
      id: 'geo1-6-2-example',
      type: 'example',
      title: 'Identifisere glasiale avsetninger i felt',
      problem: 'Du finner en langstrakt rygg som gaar paa tvers av en dal. Materialet er usortert med alt fra leire til store steiner. Hva slags landform er dette, og hva forteller den om isbrehistorien?',
      solution: `**Analyse av landformen:**

1. **Identifikasjon**
   - Langstrakt rygg paa tvers av dalen = typisk for endemorene
   - Usortert materiale = avsatt direkte av is, ikke smeltevann
   - Alle kornstoerrelser = bekrefter morene

2. **Hva landformen forteller**
   - Breen stoppet eller hadde en pause her
   - Materialet ble dyttet opp foran breen
   - Klimaet var stabilt lenge nok til aa bygge ryggen

3. **Geologisk betydning**
   - Markerer en bestemt fase i isavsmeltingen
   - Kan dateres og korreleres med andre morener
   - Gir informasjon om klimaet da morenen ble dannet

4. **Praktisk betydning**
   - Kan fungere som naturlig demning (oppdemmede sjeer)
   - Inneholder blandede losmasser (vanskelig byggegrunn)
   - Viktig for lokal hydrologi

**Konklusjon:** Dette er en endemorene som viser hvor isbreen hadde en stopp under tilbaketrekningen.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner morenemateriale sammenlignet med elveavsatt materiale?',
      options: [
        { id: 'a', text: 'Morene er usortert med alle kornstoerrelser blandet', isCorrect: true },
        { id: 'b', text: 'Morene er godt sortert etter kornstorrelse', isCorrect: false },
        { id: 'c', text: 'Morene inneholder bare store blokker', isCorrect: false },
        { id: 'd', text: 'Morene er alltid avrundet', isCorrect: false },
      ],
      solution: 'Morenemateriale er usortert fordi det avsettes direkte av isen uten at vann har faat sortere det. Det inneholder alle kornstoerrelser fra fineste leire til store blokker, og fragmentene er ofte kantede.',
    },
    {
      id: 'geo1-6-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom en endemorene og en sidemorene.',
      solution: 'En endemorene avsettes ved fronten av isbreen og danner en rygg paa tvers av isens bevegelsesretning. Den viser hvor breen stoppet eller hadde en pause. En sidemorene avsettes langs sidene av breen og danner langstrakte rygger parallelt med dalen. Sidemorenene bestar av materiale som har falt ned fra fjellsidene over breen.',
    },
    {
      id: 'geo1-6-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en esker?',
      options: [
        { id: 'a', text: 'En lang rygg av sortert grus avsatt i tunnel under isen', isCorrect: true },
        { id: 'b', text: 'En usortert haug av morenemateriale', isCorrect: false },
        { id: 'c', text: 'En amfiteaterformet fordypning i fjellet', isCorrect: false },
        { id: 'd', text: 'En spiss fjelltopp mellom botner', isCorrect: false },
      ],
      solution: 'En esker er en lang, smal rygg av sortert sand og grus. Den ble avsatt av smeltevann som rant i en tunnel under eller inne i isbreen. Naar isen smeltet, ble avsetningen staaende igjen som en rygg.',
    },
    {
      id: 'geo1-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan en drumlin ser ut og hva den forteller om isens bevegelse.',
      solution: 'En drumlin er en stromlinjeformet haug av morenemateriale. Den har bratt side (stoetside) mot der isen kom fra og slak side (leside) i isens bevegelsesretning. Drumliner viser derfor tydelig hvilken retning isen beveget seg. De opptrer ofte i store grupper (drumlinfelt) og kan vaere 5-50 meter hoeye og 100-2000 meter lange.',
    },
    {
      id: 'geo1-6-2-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er eskere viktige som sand- og grusressurser?',
      options: [
        { id: 'a', text: 'Fordi materialet er sortert og avrundet av smeltevann', isCorrect: true },
        { id: 'b', text: 'Fordi de inneholder bare leire', isCorrect: false },
        { id: 'c', text: 'Fordi materialet er usortert og kompakt', isCorrect: false },
        { id: 'd', text: 'Fordi de finnes bare i fjellomraader', isCorrect: false },
      ],
      solution: 'Eskere er viktige ressurser fordi materialet er sortert av smeltevann. Dette gir rene lag med sand og grus uten for mye finmateriale. Fragmentene er ogsaa avrundet, noe som gjoer dem egnet til betong og veibygging.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Fluviale landformer
// ============================================================================

export const CHAPTER_GEOFAG_1_6_3: TextbookChapter = {
  id: 'geofag-1-6-3',
  courseId: 'geofag-1',
  chapterNumber: '6.3',
  title: 'Fluviale landformer',
  description: 'Landformer skapt av rennende vann - elver og bekker.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hvordan elver eroderer, transporterer og avsetter materiale',
    'forklare dannelsen av V-daler, meandersvinger og elvedelta',
    'identifisere fluviale landformer i norsk natur',
    'vurdere elvens arbeid i forskjellige deler av loepet',
  ],
  content: [
    {
      id: 'geo1-6-3-intro',
      type: 'text',
      content: `# Fluviale landformer

Fluviale landformer er skapt av rennende vann. Elver er kraftige landskapsformere som graver ut daler, transporterer sedimenter og bygger opp avsetninger. Ordet "fluvial" kommer fra latin "fluvius" som betyr elv.

## Elvens tre typer arbeid

1. **Erosjon** - Graver ut og loeser materiale
2. **Transport** - Flytter materialet nedover
3. **Avsetning** - Legger fra seg materiale

Hvilket arbeid som dominerer avhenger av:
- Vannfoeringen (mengde vann)
- Helningsgraden (gradient)
- Materialets storrelse
- Vegetasjon og klima`,
    },
    {
      id: 'geo1-6-3-def-fluvial',
      type: 'definition',
      title: 'Fluvial',
      content: 'Fluvial betyr "som har med elver aa gjore". Fluviale prosesser er geologiske prosesser drevet av rennende vann. Fluviale landformer inkluderer V-daler, elvesletter, delta og meandersvinger.',
    },
    {
      id: 'geo1-6-3-erosjon',
      type: 'text',
      content: `## Elveerosjon

Elver eroderer gjennom flere mekanismer.

### Erosjonstyper

**Hydraulisk erosjon**
- Vannets kraft loeser materiale direkte
- Turbulens og trykkforskjeller
- Viktigst i bratte partier med sterk stroem

**Korrasjon (slitasje)**
- Steiner og sand i vannet sliper bunnen
- Skaper jettegryter i elveleiet
- Viktigste erosjonsformen

**Korrosjon (opplosning)**
- Kjemisk opplosning av bergarter
- Viktig i kalkrike omraader
- Langsom men kontinuerlig

### Erosjonsretning

**Dybdeerosjon (vertikal)**
- Elven graver seg nedover
- Dominerer i ovre del av elveloepe
- Skaper V-daler og juv

**Sideerosjon (lateral)**
- Elven graver i sidene
- Dominerer i flate omraader
- Utvider dalen og skaper meandersvinger`,
    },
    {
      id: 'geo1-6-3-v-dal',
      type: 'text',
      content: `## V-dal

En V-dal er den klassiske elveeroderte dalformen.

### Kjennetegn

- V-formet tverrsnitt
- Elven renner i bunnen av V-en
- Brattere sider enn U-daler
- Elven fyller hele dalbunnen

### Dannelse

1. Elven starter med aa grave seg nedover (dybdeerosjon)
2. Dalsidene forvitrer og raser ned
3. Materialet transporteres bort av elven
4. Prosessen gjentas og dalen blir dypere
5. Resultatet er en V-formet dal

### V-dal vs. U-dal

| V-dal | U-dal |
|-------|-------|
| Formet av elv | Formet av isbre |
| Spiss bunn | Flat bunn |
| Elv fyller bunnen | Elv i overbred dal |
| Gradvis hellende sider | Ofte bratte sider |`,
    },
    {
      id: 'geo1-6-3-def-vdal',
      type: 'definition',
      title: 'V-dal',
      content: 'En V-dal er en dal med V-formet tverrsnitt, skapt av elveerosjon. V-formen oppstaar fordi elven graver seg nedover (dybdeerosjon), mens dalsidene formes av forvitring og massebevegelse. V-daler er typiske for omraader som ikke har vaert isdekket.',
    },
    {
      id: 'geo1-6-3-meander',
      type: 'text',
      content: `## Meandersvinger

Meandersvinger er buktende elvelop som utvikler seg i flate omraader.

### Hvordan meandre dannes

1. Elven begynner aa svinge svakt
2. Vann strommer raskere paa yttersiden av svingen
3. Erosjon paa yttersiden, avsetning paa innersiden
4. Svingen blir mer uttalt over tid
5. Kan til slutt avsnores og danne krokvatn

### Elvens dynamikk i svingen

**Ytterside (konkav)**
- Rask vannstrøm
- Erosjon (elven graver)
- Bratt elvebredd

**Innerside (konveks)**
- Langsom vannstrøm
- Avsetning (sandbanker)
- Flat strandsone

### Krokvatn (oxbow lake)

- Avsnoert meandersving
- Dannes naar elven bryter gjennom "halsen"
- Blir til halvmaaneformet sjoem
- Gror gradvis igjen`,
    },
    {
      id: 'geo1-6-3-def-meander',
      type: 'definition',
      title: 'Meander',
      content: 'En meander er en bue eller sving i et elvelop. Meandersvinger dannes naar elven har lav gradient og eroderer i sidene. Vannet strommer raskest paa yttersiden av svingen og eroderer der, mens det strommer saktere paa innersiden og avsetter materiale.',
    },
    {
      id: 'geo1-6-3-delta',
      type: 'text',
      content: `## Elvedelta

Et delta dannes der elven moeter stillestaaende vann og mister transportkapasitet.

### Deltadannelse

1. Elven naar innsjoe eller hav
2. Vannhastigheten reduseres kraftig
3. Sedimenter kan ikke lenger transporteres
4. Materialet avsettes i vifteform
5. Elven forgreiner seg i flere lop

### Deltatyper

**Arkuert delta** (buet)
- Klassisk vifteform
- Eksempel: Nildeltaet

**Fuglefotdelta**
- Smale armer som stikker ut
- Eksempel: Mississippi-deltaet

**Cuspate delta** (spisst)
- Spiss form som stikker ut
- Eksempel: Tiberdeltaet

### Norske deltaer

- Laerdalsoyri (Laardal)
- Otta-deltaet
- Deltaer ved fjordender`,
    },
    {
      id: 'geo1-6-3-elvens-lop',
      type: 'text',
      content: `## Elvens lop fra kilde til munning

### Ovre lop (ungdomsstadiet)

- Bratt gradient
- Dybdeerosjon dominerer
- V-daler, fosser, stryk
- Grove sedimenter
- Rask, turbulent stroem

### Midtre lop

- Moderat gradient
- Baade erosjon og avsetning
- Dalbunnen utvides
- Meandrering begynner
- Sandbanker og elvesletter

### Nedre lop (alderdomsstadiet)

- Lav gradient
- Sideerosjon og avsetning dominerer
- Utpregede meandersvinger
- Brede elvesletter
- Delta ved munningen
- Fine sedimenter`,
    },
    {
      id: 'geo1-6-3-example',
      type: 'example',
      title: 'Glomma - Norges lengste elv',
      problem: 'Beskriv hvordan Glomma endrer karakter fra kilde til munning.',
      solution: `**Glommas lop:**

1. **Ovre lop (fjellomraadet)**
   - Starter ved Aursunden i Roeros
   - Bratt gradient, mye stryk
   - Dybdeerosjon dominerer
   - Transporterer grovt materiale

2. **Midtre lop (Osterdalen)**
   - Bredere dal med elvesletter
   - Meandrering begynner
   - Flere bielver (Rena, Atna)
   - Transporterer mye sediment

3. **Nedre lop (Glommaflata)**
   - Flat delta ved Fredrikstad
   - Flere lop gjennom deltaet
   - Avsetter sand og leire
   - Munner ut i Oslofjorden

**Spesielt for Glomma:**
- 621 km lang (Norges lengste)
- Stor vannfoering
- Viktig for toemmerfloeting historisk
- Regulert med kraftverk`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken dalform er typisk for elveerosjon?',
      options: [
        { id: 'a', text: 'V-dal', isCorrect: true },
        { id: 'b', text: 'U-dal', isCorrect: false },
        { id: 'c', text: 'Riftdal', isCorrect: false },
        { id: 'd', text: 'Botn', isCorrect: false },
      ],
      solution: 'Elver graver V-formede daler fordi dybdeerosjon dominerer. Elven graver seg ned i bunnen, mens dalsidene formes av forvitring og massebevegelse. U-daler er derimot dannet av isbreer.',
    },
    {
      id: 'geo1-6-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan en meandersving utvikler seg.',
      solution: 'En meandersving starter som en liten bue i elveleiet. Vannet strommer raskest paa yttersiden av svingen og eroderer der (undergraver bredden). Paa innersiden strommer vannet saktere og avsetter materiale (sandbanker). Over tid blir svingen mer uttalt. Til slutt kan elven bryte gjennom og avsnore svingen, som da blir et krokvatn (oxbow lake).',
    },
    {
      id: 'geo1-6-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer naar en elv moeter stillestaaende vann?',
      options: [
        { id: 'a', text: 'Elven avsetter sedimentene og danner et delta', isCorrect: true },
        { id: 'b', text: 'Elven graver dypere', isCorrect: false },
        { id: 'c', text: 'Sedimentene loeses opp i vannet', isCorrect: false },
        { id: 'd', text: 'Elven begynner aa meandrere', isCorrect: false },
      ],
      solution: 'Naar elven moeter stillestaaende vann (innsjo eller hav), mister den farten og dermed evnen til aa transportere sedimenter. Materialet avsettes og bygger gradvis opp et delta. Elven forgrener seg ofte i flere lop over deltaflaten.',
    },
    {
      id: 'geo1-6-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom elvens arbeid i ovre og nedre lop.',
      solution: 'I ovre lop (naer kilden) er gradienten bratt. Dybdeerosjon dominerer - elven graver seg nedover og skaper V-daler, fosser og stryk. Sedimentene er grove (stein og grus). I nedre lop (naer munningen) er gradienten lav. Sideerosjon og avsetning dominerer. Elven meandrerer, bygger elvesletter og delta. Sedimentene er fine (sand, silt, leire). Overgangen er gradvis, og midtre lop har trekk fra begge.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Marine og eoliske landformer
// ============================================================================

export const CHAPTER_GEOFAG_1_6_4: TextbookChapter = {
  id: 'geofag-1-6-4',
  courseId: 'geofag-1',
  chapterNumber: '6.4',
  title: 'Marine og eoliske landformer',
  description: 'Landformer skapt av hav, boelger og vind.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive boelgeerosjon og kystlandformer',
    'forklare dannelsen av strender, sanddyner og klipper',
    'identifisere eoliske landformer og prosesser',
    'vurdere kystens utvikling under paavirkning av hav og vind',
  ],
  content: [
    {
      id: 'geo1-6-4-intro',
      type: 'text',
      content: `# Marine og eoliske landformer

Havet og vinden er viktige landskapsformere, spesielt langs kysten. Marine landformer skapes av boelger, stroemmer og tidevann, mens eoliske landformer skapes av vind.

## Krefter langs kysten

- **Boelger** - Hovedkraften i kystforming
- **Tidevann** - Utvider sonen som paavirkes
- **Strommer** - Transporterer sedimenter langs kysten
- **Vind** - Danner sanddyner og blaser spray inn over land

Norges lange kystlinje (over 100 000 km med alle oyer) viser et mangfold av marine landformer.`,
    },
    {
      id: 'geo1-6-4-boelgeerosjon',
      type: 'text',
      content: `## Boelgeerosjon

Boelger eroderer kysten gjennom flere mekanismer.

### Erosjonsmekanismer

**Hydraulisk kraft**
- Boelger slaar mot fjellet med stor kraft
- Trykket kan naa flere tonn per kvadratmeter
- Komprimerer luft i sprekker som saa ekspanderer

**Korrasjon**
- Sand og stein slynges mot kysten av boelgene
- Virker som sandblasting
- Mest effektiv ved sterk sjogang

**Opplosning**
- Kjemisk erosjon av loselige bergarter
- Saltvann forsterker prosessen
- Viktig i kalksteinomraader

### Faktorene som styrer erosjon

- Boelgehooyde og energi
- Bergartens hardhet
- Sprekker og svakheter i berget
- Eksponering mot aapent hav`,
    },
    {
      id: 'geo1-6-4-def-boelgeerosjon',
      type: 'definition',
      title: 'Boelgeerosjon',
      content: 'Boelgeerosjon er nedbrytning av kysten foraarsaket av boelger. Prosessene omfatter hydraulisk kraft, korrasjon (sliping med sand og stein), kompresjon av luft i sprekker, og kjemisk opplosning. Bolgeerosjon er mest effektiv ved eksponerte kystlinjer.',
    },
    {
      id: 'geo1-6-4-erosjonsformer',
      type: 'text',
      content: `## Marine erosjonsformer

### Klipper og bratte kystfjell

- Dannes der boelgene eroderer i fast fjell
- Bratthet avhenger av bergartstype
- Kan vaere loddrette eller overhengende

### Boelgeskjaer (notch)

- Innhogning i klippens fot
- Dannes i tidevannssonen
- Kan foere til ras naar overheng blir for stort

### Huler og grotter

- Boelger utvider svakheter i berget
- Kan gaa tvers gjennom odder (buegang/sjoportal)
- Flere kjente eksempler langs Norskekysten

### Stakker

- Frittstaaende soeyler av berg
- Rester av klipper som har rast
- Eroderes videre og forsvinner over tid

### Strandflate

- Flat berggrunn ved havnivaa
- Dannet over lang tid ved boelgeerosjon
- Svart karakteristisk for Norskekysten`,
    },
    {
      id: 'geo1-6-4-avsetningsformer',
      type: 'text',
      content: `## Marine avsetningsformer

### Strender

- Avsetning av sand eller grus
- Dannes i beskyttede omraader
- Materialet sorteres av boelger
- Varierer fra finkornete sandstrender til rullestein

### Odder og nes

- Landtunger som strekker seg ut i sjoen
- Materiale avsatt av kyststrommer
- Vokser i strommens transportretning

### Tombolo

- Sandavsetning som forbinder oey med fastland
- Dannes i le av oeya
- Boelger fra begge sider moetes og avsetter materiale

### Barriere og lagune

- Lang sandbanke parallelt med kysten
- Stenger av en grunn lagune
- Finnes langs deler av Jaerkysten`,
    },
    {
      id: 'geo1-6-4-def-strandflate',
      type: 'definition',
      title: 'Strandflate',
      content: 'Strandflaten er den flate berggrunnsoverflaten som strekker seg fra kystlinjen og utover under havnivaa. Den er dannet ved langvarig boelgeerosjon og frostforvitring i tidevannssonen. Norges strandflate er spesielt velutviklet fra Rogaland til Troms.',
    },
    {
      id: 'geo1-6-4-eolisk',
      type: 'text',
      content: `## Eoliske landformer

Eoliske landformer dannes av vind (fra Aeolus, gresk gud for vinden).

### Vindtransport

- **Suspensjon** - Fineste partikler holdes svevende
- **Saltasjon** - Sandkorn hopper langs bakken
- **Krypning** - Store korn skyves av hoppende korn

### Sanddyner

Dyner dannes naar vind transporterer og avsetter sand.

**Dynetyper:**
- **Barkandyne** - Halvmaaneformet, hornene peker i vindretningen
- **Tverrdyne** - Rygg paa tvers av vinden
- **Langsgaaende dyne** - Parallell med vinden
- **Stjerndyne** - Flere armer, dannes ved variable vindretninger

### Vindslitte former

- **Ventifakter** - Steiner slipt av vindblaast sand
- **Yardanger** - Langstrakte rygger parallelle med vinden
- **Deflasjonsgroper** - Fordypninger der fint materiale er blaast bort`,
    },
    {
      id: 'geo1-6-4-dyner-norge',
      type: 'text',
      content: `## Sanddyner i Norge

Selv om Norge ikke er kjent for oerkener, har vi betydelige dyneomraader langs kysten.

### Viktige dyneomraader

**Lista (Vest-Agder)**
- Norges stoerste aktive dyneomraade
- Vandredyner som beveger seg innover land
- Viktig naturreservat

**Jaeren**
- Omfattende dynesystemer
- Flere fredede omraader
- Truet av utbygging

**Soela og Sola**
- Sanddyner ved flyplassen
- Delvis stabilisert av vegetasjon

### Dynevern

- Vegetasjon stabiliserer dyner
- Traakk og slitasje kan reaktivere dem
- Mange dyneomraader er fredet`,
    },
    {
      id: 'geo1-6-4-example',
      type: 'example',
      title: 'Tolke kystlandskap i Lofoten',
      problem: 'Hvilke marine og eoliske landformer kan du observere i Lofoten, og hvordan har de dannet seg?',
      solution: `**Kystformer i Lofoten:**

1. **Bratte fjellsider mot havet**
   - Boelgeerosjon i hard berggrunn
   - Lite forvitring gir stupbratte klipper
   - Tydelige boelgeskjaer ved fjellfoten

2. **Hvite sandstrender**
   - Avsatt i beskyttede bukter
   - Materialet fra forvitret gneis og skjellsand
   - Sortert av boelger

3. **Strandflate**
   - Flat berggrunn under og ved havnivaa
   - Grunnlag for fiske (oppvekstomraade)
   - Karakteristisk for hele Lofoten

4. **Sanddyner**
   - Finnes ved flere av strendene
   - Dannet av vind som blaser sand opp fra stranden
   - Delvis stabilisert av strandrug og marehalm

5. **Huler og grotter**
   - Boelger har erodert svakheter i berget
   - Flere kjente grotteforekomster

**Konklusjon:** Lofoten viser et komplett spekter av marine landformer, fra erosjonsformer i bratt fjell til avsetningsformer i beskyttede bukter.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedkraften som former kystlandskapet?',
      options: [
        { id: 'a', text: 'Boelger', isCorrect: true },
        { id: 'b', text: 'Tidevann', isCorrect: false },
        { id: 'c', text: 'Vind', isCorrect: false },
        { id: 'd', text: 'Is', isCorrect: false },
      ],
      solution: 'Boelger er hovedkraften i kystforming. De baerer med seg enorm energi som brukes til aa erodere berget, transportere sedimenter og bygge opp avsetninger. Tidevann, vind og is bidrar ogsaa, men boelger er viktigst.',
    },
    {
      id: 'geo1-6-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva strandflaten er og hvordan den har dannet seg.',
      solution: 'Strandflaten er den flate berggrunnsoverflaten langs kysten, baade over og under havnivaa. Den har dannet seg gjennom langvarig boelgeerosjon kombinert med frostforvitring i tidevannssonen. Boelgene eroderer berget ned til havnivaa, mens frostsprengning bidrar i sonen som veksler mellom vaatt og tort. Prosessen har paagaatt gjennom flere havnivaasstadier, noe som har utvidet flaten.',
    },
    {
      id: 'geo1-6-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en tombolo?',
      options: [
        { id: 'a', text: 'En sandavsetning som forbinder en oey med fastlandet', isCorrect: true },
        { id: 'b', text: 'En klippe som staar alene i sjoen', isCorrect: false },
        { id: 'c', text: 'En hule i kystfjellet', isCorrect: false },
        { id: 'd', text: 'Den flate berggrunnen under havnivaa', isCorrect: false },
      ],
      solution: 'En tombolo er en sandavsetning som forbinder en oey med fastlandet. Den dannes i le av oeya der boelger fra begge sider moetes og avsetter materiale. Over tid vokser sandbanken sammen til en landfast forbindelse.',
    },
    {
      id: 'geo1-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan en barkandyne dannes og hvordan den ser ut.',
      solution: 'En barkandyne er halvmaaneformet med hornene pekende i vindretningen. Den dannes naar det er begrenset tilgang paa sand og vinden blaser fra en hovedretning. Sand avsettes i le av et hinder, og dynen faar sin karakteristiske form fordi hornene beveger seg raskere enn midten (mindre sand aa flytte). Dynen vandrer sakte i vindretningen ved at sand blases opp paa lo-siden og raser ned paa le-siden.',
    },
    {
      id: 'geo1-6-4-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er eolisk?',
      options: [
        { id: 'a', text: 'Formet av vind', isCorrect: true },
        { id: 'b', text: 'Formet av vann', isCorrect: false },
        { id: 'c', text: 'Formet av is', isCorrect: false },
        { id: 'd', text: 'Formet av tyngdekraft', isCorrect: false },
      ],
      solution: 'Eolisk kommer fra Aeolus, den greske guden for vinden. Eoliske prosesser og landformer er derfor de som er skapt av vinden, som sanddyner, ventifakter og loess (vindblast silt).',
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Norges landskapsutvikling
// ============================================================================

export const CHAPTER_GEOFAG_1_6_5: TextbookChapter = {
  id: 'geofag-1-6-5',
  courseId: 'geofag-1',
  chapterNumber: '6.5',
  title: 'Norges landskapsutvikling',
  description: 'Hovedtrekk i Norges landskapsutvikling gjennom geologisk tid.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive hovedtrekk i Norges landskapsutvikling',
    'forklare betydningen av istidene for dagens landskap',
    'gjore rede for landhevning og havnivaaendringer etter istiden',
    'vurdere samspillet mellom ulike landskapsformende prosesser',
  ],
  content: [
    {
      id: 'geo1-6-5-intro',
      type: 'text',
      content: `# Norges landskapsutvikling

Norges landskap er resultatet av prosesser som har virket over hundrevis av millioner aar. Fra dannelsen av de eldste bergartene til isbreenes arbeid under istidene - alt har satt sine spor.

## Landskapets alder

- **Bergartene**: Opptil 3 milliarder aar gamle
- **Fjellkjeden**: Kaledonsk fjellkjede 400-500 mill. aar
- **Grunnformen**: Utviklet over 300+ mill. aar
- **Istidsskulpturen**: Siste 2,6 mill. aar
- **Dagens detaljer**: Siste 11 000 aar

Det vi ser i dag er altsaa en blanding av svart gammelt og relativt nytt.`,
    },
    {
      id: 'geo1-6-5-peneplan',
      type: 'text',
      content: `## Paleiske flater og vidder

Store deler av Norges hoeyfjell viser flate vidder i toppen - dette er rester av et eldgammelt slettelandskap.

### Hva er en paleisk flate?

- Gammel erosjonsflate, naesten plan overflate
- Dannet ved langvarig forvitring og erosjon
- Opprinnelig naer havnivaa
- Senere hevet og dissekert av daler

### Viddeflater i Norge

**Hardangervidda**
- Norges stoerste fjellvidde
- Ligger paa ca. 1200 m.o.h.
- Rest av gammel slette fra for istidene
- Isbreene formet detaljer, men grunnformen er eldre

**Andre vidder**
- Finnmarksvidda
- Dovre
- Jotunheimens topper (naesten i hoyde med hverandre)

### Paleiske trapper

- Flere nivaer av flater i ulike hooyder
- Viser episoder med landhevning
- Eldste flater hoeyest, yngste lavest`,
    },
    {
      id: 'geo1-6-5-istidene',
      type: 'text',
      content: `## Istidenes betydning

De siste 2,6 millioner aarene har vaert preget av vekslende istider og mellomistider. Dette har formet det norske landskapet mer enn noen annen enkeltfaktor.

### Istidenes omfang

- Ca. 40 istider i kvartaertiden
- Siste istid: Weichsel (ca. 115 000 - 11 700 aar siden)
- Isen var opptil 3000 m tykk over Skandinavia
- Hele Norge var dekket (unntatt noen nunataker)

### Isens arbeid

**Erosjon:**
- Gravet ut fjorder til over 1000 m dybde
- Utvidet daler til U-form
- Skapt botner, tinder og egger
- Slipt og avrundet bergoverflater

**Avsetning:**
- Morener over hele landet
- Raer viser isens tilbaketrekning
- Eskere, drumliner og sandurer
- Losmasser som dekker berggrunnen`,
    },
    {
      id: 'geo1-6-5-def-kvartaer',
      type: 'definition',
      title: 'Kvartaertiden',
      content: 'Kvartaertiden er den geologiske perioden fra 2,6 millioner aar siden til i dag. Den deles i pleistocen (istidene) og holocen (naavarande mellomistid fra 11 700 aar siden). Kvartaertiden kjennetegnes av store klimasvingninger med vekslende istider og mellomistider.',
    },
    {
      id: 'geo1-6-5-landhevning',
      type: 'text',
      content: `## Landhevning etter istiden

Da isen smeltet, begynte landet aa heve seg - en prosess som fortsetter den dag i dag.

### Isostatisk landhevning

- Tung is presset ned jordskorpen
- Da isen smeltet, begynte landet aa stige
- Prosessen kalles isostatisk landhevning
- Stoerst heving der isen var tykkest

### Havnivaaendringer

**Rett etter istiden:**
- Havet stod hoeyere enn i dag
- Marine grense = hoeyeste havnivaa
- Opptil 220 m over dagens havnivaa (Ostlandet)

**Siden:**
- Landhevning loftet gamle strandlinjer
- Vi finner skjell hoyt over havet
- Havet "trakk seg tilbake"

### Landhevning i dag

- Fortsatt opptil 5-10 mm/aar i indre Skandinavia
- Ca. 3-5 mm/aar rundt Oslofjorden
- Naer null eller svak senkning langs kysten
- Totalt gjenvaerende heving: ca. 100-200 m`,
    },
    {
      id: 'geo1-6-5-def-landhevning',
      type: 'definition',
      title: 'Isostatisk landhevning',
      content: 'Isostatisk landhevning er stigningen av jordskorpen som foelge av at den tunge innlandsisen smeltet. Prosessen skyldes at jordskorpen "flyter" paa den plastiske mantelen og gradvis hever seg naar vekten fjernes. Landhevningen fortsetter i Skandinavia i dag.',
    },
    {
      id: 'geo1-6-5-strandlinjer',
      type: 'text',
      content: `## Gamle strandlinjer

Spor etter tidligere havnivaa finnes over hele Norge og forteller om landhevningen.

### Marin grense

- Hoeyeste nivaa havet naadde etter istiden
- Varierer fra 0 ved kysten til 220+ m inne i landet
- Avhenger av isens tykkelse og hvor fort isen smeltet

### Strandlinjediagram

- Viser marin grense i ulike omraader
- Hoeyest i omraader med tykkest is
- Lavere mot kysten (isen var tynnere der)

### Spor i landskapet

**Terrasser**
- Flate hyller i dalsider
- Gamle elvedelta eller strandvoller
- Ofte brukt til jordbruk og bebyggelse

**Marine avsetninger**
- Leire avsatt paa havbunnen
- Na langt over havnivaa
- Kan danne kvikkleire

**Fossiler**
- Skjell og sjodyrsfossiler i hoeyden
- Beviser at omraadet var under vann`,
    },
    {
      id: 'geo1-6-5-prosesser-i-dag',
      type: 'text',
      content: `## Landskapsprosesser i dag

Landskapet fortsetter aa endre seg, om enn langsommere enn under istidene.

### Forvitring og erosjon

- Frostsprengning i fjellet
- Elveerosjon i dalbunner
- Boelgeerosjon langs kysten
- Kjemisk forvitring overalt

### Massebevegelse

- Steinsprang og steinras
- Jordskred og leirskred
- Snoskred
- Langsom kryping av jordsmonn

### Isbreer i dag

- Ca. 1600 isbreer i Norge
- Dekker ca. 2700 km2
- De fleste trekker seg tilbake
- Fortsetter aa erodere, men i mindre skala

### Menneskelig paavirkning

- Uttak av sand og grus
- Regulering av elver
- Utbygging av kystomraader
- Skogbruk paavirker erosjon`,
    },
    {
      id: 'geo1-6-5-example',
      type: 'example',
      title: 'Landskapsutvikling i Oslofjordomraadet',
      problem: 'Forklar hovedtrekkene i landskapsutviklingen i Oslofjordomraadet.',
      solution: `**Oslofjordomraadets landskapshistorie:**

1. **Grunnfjellet (1+ mrd aar)**
   - Gneis og granitt dannet dypt i jordskorpen
   - Naa eksponert ved overflaten

2. **Kambrosilur (500-400 mill. aar)**
   - Havet dekket omraadet
   - Kalkstein og skifer avsatt

3. **Permtid (300-250 mill. aar)**
   - Vulkansk aktivitet og forkastninger
   - Oslofeltet dannet

4. **Istidene (2,6 mill. - 11 700 aar)**
   - Fjorden gravet ut av isbreer
   - Morener og raer avsatt
   - Marin leire paa fjordbunnen

5. **Etter istiden**
   - Havet dekket lavlandet
   - Marin grense ca. 220 m.o.h.
   - Landhevning loftet omraadet
   - Dagens landskap tok form

**Dagens spor:**
- Raet (endemorene) krysser landskapet
- Marine leiravsetninger (kvikkleire)
- Gamle strandlinjer og terrasser
- Landhevning fortsetter (3-5 mm/aar)`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er marin grense?',
      options: [
        { id: 'a', text: 'Det hoeyeste nivaaet havet naadde etter istiden', isCorrect: true },
        { id: 'b', text: 'Grensen mellom saltvann og ferskvann', isCorrect: false },
        { id: 'c', text: 'Den dypeste delen av fjorden', isCorrect: false },
        { id: 'd', text: 'Grensen for hvor isbreene naadde', isCorrect: false },
      ],
      solution: 'Marin grense er det hoeyeste nivaaet havet naadde etter at istiden var over. Paa Ostlandet ligger marin grense opptil 220 m over dagens havnivaa, noe som viser hvor mye landet har hevet seg.',
    },
    {
      id: 'geo1-6-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor vi finner skjell og andre marine fossiler hoyt over havnivaa i Norge.',
      solution: 'Under istiden presset den tunge isen jordskorpen ned. Da isen smeltet, stod havet hoeyere enn i dag fordi landet fortsatt var nedpresset. Skjell og andre sjodyr levde da i omraader som i dag ligger hoyt over havet. Deretter begynte landet aa heve seg (isostatisk landhevning), og havbunnsomraadene med skjellene ble loftet opp over havnivaa.',
    },
    {
      id: 'geo1-6-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en paleisk flate?',
      options: [
        { id: 'a', text: 'En gammel erosjonsflate som er hevet og bevart', isCorrect: true },
        { id: 'b', text: 'En flate dannet av isbreer', isCorrect: false },
        { id: 'c', text: 'En marin avsetningsflate', isCorrect: false },
        { id: 'd', text: 'En vulkansk slette', isCorrect: false },
      ],
      solution: 'Paleiske flater er gamle erosjonsflater som ble dannet naer havnivaa gjennom langvarig forvitring og erosjon. Senere ble de hevet og delvis bevart i fjellomraader som Hardangervidda, der de danner de karakteristiske viddene.',
    },
    {
      id: 'geo1-6-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv samspillet mellom istider, landhevning og dannelsen av kvikkleire.',
      solution: 'Under istiden la fjordene og dalene under havet. Finkornete marine sedimenter (leire) ble avsatt paa havbunnen. Saltet i sjovannet stabiliserte leirstrukturen. Etter istiden begynte landet aa heve seg (isostatisk landhevning), og de marine leiravsetningene kom over havnivaa. Ferskvann vasket gradvis ut saltet fra leira over tusenvis av aar. Uten salt ble leira ustabil - kvikk. I dag ligger store omraader med kvikkleire paa tidligere fjordbunnomraader, spesielt paa Ostlandet og i Trondelag.',
    },
    {
      id: 'geo1-6-5-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Omtrent hvor fort hever landet seg i indre Skandinavia i dag?',
      options: [
        { id: 'a', text: '5-10 mm per aar', isCorrect: true },
        { id: 'b', text: '5-10 cm per aar', isCorrect: false },
        { id: 'c', text: '5-10 m per aar', isCorrect: false },
        { id: 'd', text: '0,5-1 mm per aar', isCorrect: false },
      ],
      solution: 'I indre Skandinavia (rundt Bottenviken) hever landet seg fortsatt med 5-10 mm per aar. Rundt Oslofjorden er raten ca. 3-5 mm per aar. Langs ytterkysten er landhevningen naer null eller svakt negativ. Totalt gjenvaerer det 100-200 m heving foer likevekt er naad.',
    },
  ],
};

// ============================================================================
// Samle alle Del 6-kapitler
// ============================================================================

export const GEOFAG_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_6_1,
  CHAPTER_GEOFAG_1_6_2,
  CHAPTER_GEOFAG_1_6_3,
  CHAPTER_GEOFAG_1_6_4,
  CHAPTER_GEOFAG_1_6_5,
];

export function getGeofag1Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}

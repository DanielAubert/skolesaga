/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 3 - Kapittel 9-10
 *
 * Kapittel 9: Wissenschaft und Akademie
 * Kapittel 10: Prufungsvorbereitung
 *
 * Avansert tysk med fokus pa akademisk sprak og eksamensforberedelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Akademische Texte lesen
// ============================================================================

export const CHAPTER_TYSK_3_9_1: TextbookChapter = {
  id: 'tysk-3-9-1',
  courseId: 'tysk-3',
  chapterNumber: '9.1',
  title: 'Akademische Texte lesen',
  subtitle: 'Lese akademiske tekster',
  description: 'Laer a lese og forsta akademiske tekster pa tysk, inkludert abstrakt, sammendrag og fagartikler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forsta akademiske tekster pa tysk',
    'identifisere hovedargumenter og struktur i fagartikler',
    'bruke lesestrategier for komplekse tekster',
  ],
  content: [
    {
      id: 'tysk-3-9-1-intro',
      type: 'text',
      content: `## Akademische Texte verstehen

Akademiske tekster pa tysk har en egen stil og struktur som skiller seg fra hverdagssprak. For a lykkes med hoyre utdanning i tysktalende land - eller for a lese tysk faglitteratur - ma du mestre denne teksttypen.

**Kjennetegn ved akademiske tekster:**
- Presist og formelt sprak
- Lange, komplekse setninger
- Fagterminologi (Fachsprache)
- Nominalstil (substantivering av verb)
- Passivkonstruksjoner
- Kildehenvisninger og sitater`,
    },
    {
      id: 'tysk-3-9-1-text-1',
      type: 'text',
      content: `## Teksttyper i akademia

| Teksttype | Tysk | Formål |
|-----------|------|--------|
| Abstrakt | das Abstract / die Zusammenfassung | Kort sammendrag av artikkel |
| Fagartikkel | der Fachartikel | Presenterer forskning |
| Avhandling | die Dissertation / die Doktorarbeit | Doktorgradsavhandling |
| Essay | der Essay / die Abhandlung | Droftende tekst |
| Anmeldelse | die Rezension | Kritisk vurdering |
| Forelesningsnotat | das Vorlesungsskript | Notater fra forelesning |`,
    },
    {
      id: 'tysk-3-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese et abstrakt',
      problem: `Les dette abstraktet fra en vitenskapelig artikkel:

*"Die vorliegende Studie untersucht den Einfluss der Digitalisierung auf das Leseverhalten von Jugendlichen im Alter von 14 bis 18 Jahren. Mittels einer quantitativen Befragung von 500 Schulern wurden Daten zu Lesegewohnheiten, Mediennutzung und Lesekompetenz erhoben. Die Ergebnisse zeigen, dass digitale Medien das traditionelle Bucherlesen nicht verdrangt haben, sondern zu einer Diversifizierung des Leseverhaltens gefuhrt haben. Implikationen fur die padagogische Praxis werden diskutiert."*

a) Hva er hovedtemaet for studien?
b) Hvilken metode ble brukt?
c) Hva er hovedfunnet?`,
      solution: `a) **Hovedtema:** Digitaliseringens innvirkning pa ungdommers lesevaner (Einfluss der Digitalisierung auf das Leseverhalten von Jugendlichen)

b) **Metode:** Kvantitativ sporreundersokelse (quantitative Befragung) med 500 elever. Data ble samlet inn om lesevaner, mediebruk og lesekompetanse.

c) **Hovedfunn:** Digitale medier har ikke fortrengt tradisjonell boklesing, men fort til en diversifisering (mangfoldiggjoring) av lesevanene.

**Nyttige ord fra teksten:**
- die vorliegende Studie = den foreliggende studien
- mittels = ved hjelp av
- erheben = samle inn (data)
- verdrängen = fortrenge
- die Implikation = implikasjon, konsekvens`,
    },
    {
      id: 'tysk-3-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett disse akademiske uttrykkene til norsk.',
        subTasks: [
          { label: 'a', task: 'Die vorliegende Arbeit befasst sich mit...', solution: 'Dette arbeidet tar for seg...' },
          { label: 'b', task: 'Im Folgenden wird erortert...', solution: 'I det folgende vil det drøftes...' },
          { label: 'c', task: 'Es lasst sich feststellen, dass...', solution: 'Det kan fastslas at...' },
          { label: 'd', task: 'Die Ergebnisse deuten darauf hin, dass...', solution: 'Resultatene tyder pa at...' },
        ],
        solution: 'a) Dette arbeidet tar for seg... b) I det folgende vil det drøftes... c) Det kan fastslas at... d) Resultatene tyder pa at...',
        hints: ['Akademisk tysk bruker ofte passiv og upersonlige konstruksjoner', 'Vær oppmerksom pa preposisjoner som "sich befassen mit"'],
      },
    },
    {
      id: 'tysk-3-9-1-text-2',
      type: 'text',
      content: `## Lesestrategier for akademiske tekster

**1. Skumlesing (Uberfliegen)**
Les overskrifter, innledning og avslutning forst. Fa oversikt for du leser detaljert.

**2. Nokkelordstrategi**
Identifiser fagtermer og nokkelord. Slag opp ukjente ord i fagordbok.

**3. Strukturanalyse**
Identifiser tekstens oppbygging:
- Einleitung (innledning)
- Hauptteil (hoveddel)
- Schluss/Fazit (avslutning/konklusjon)

**4. Aktiv lesing**
Still sporsmal til teksten: Hva? Hvorfor? Hvordan? Hva er konsekvensen?

**5. Notatteknikk**
Lag stikkord og sammendrag underveis.`,
    },
    {
      id: 'tysk-3-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere struktur',
      problem: `Les dette utdraget og identifiser hvilken del av en akademisk tekst det tilhorer:

**Tekst A:**
*"Zusammenfassend lasst sich sagen, dass die untersuchten Faktoren einen signifikanten Einfluss auf die Lernergebnisse haben. Zukunftige Forschung sollte diese Zusammenhange in anderen Kontexten uberprufen."*

**Tekst B:**
*"In den letzten Jahren hat das Interesse an nachhaltiger Stadtentwicklung stark zugenommen. Diese Arbeit untersucht, welche Massnahmen europaische Grosstädte ergriffen haben, um den CO2-Ausstoss zu reduzieren."*

Hvilken tekst er fra innledningen og hvilken er fra konklusjonen?`,
      solution: `**Tekst A = Konklusjon (Schluss/Fazit)**
- Signalord: "Zusammenfassend lasst sich sagen" (oppsummerende kan man si)
- Inneholder oppsummering av funn og forslag til fremtidig forskning

**Tekst B = Innledning (Einleitung)**
- Presenterer bakgrunn og kontekst
- Signalord: "In den letzten Jahren" (de siste arene)
- Presenterer hva arbeidet skal undersoke

**Nyttige signalord:**
- Innledning: zunächst, erstens, diese Arbeit untersucht
- Hoveddel: darüber hinaus, ferner, im Vergleich zu
- Konklusjon: zusammenfassend, abschliessend, folglich`,
    },
    {
      id: 'tysk-3-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les tekstutdraget og svar pa sporsmalene.',
        subTasks: [
          {
            label: 'a',
            task: `"Die Globalisierung hat zu tiefgreifenden Veranderungen in der Arbeitswelt gefuhrt. Wahrend einerseits neue Berufsfelder entstanden sind, hat andererseits die Arbeitsplatzunsicherheit in traditionellen Branchen zugenommen." - Hva er tekstens hovedpåstand?`,
            solution: 'Globaliseringen har fort til dyptgripende endringer i arbeidslivet - bade positive (nye yrkesfelt) og negative (usikkerhet i tradisjonelle bransjer).'
          },
          {
            label: 'b',
            task: 'Hvilket retorisk grep brukes i teksten?',
            solution: 'Einerseits... andererseits (pa den ene siden... pa den andre siden) - viser to sider av saken.'
          },
          {
            label: 'c',
            task: 'Forklar ordet "tiefgreifend" pa norsk.',
            solution: 'Dyptgripende, grunnleggende, omfattende'
          },
        ],
        solution: 'a) Globaliseringen har fort til bade positive og negative endringer i arbeidslivet. b) Einerseits... andererseits. c) Dyptgripende.',
        hints: ['Let etter kontrasterende elementer i teksten', 'Sammensatte ord kan ofte oversettes direkte: tief = dyp, greifend = gripende'],
      },
    },
    {
      id: 'tysk-3-9-1-text-3',
      type: 'text',
      content: `## Vanlige akademiske vendinger

**Innledende fraser:**
| Tysk | Norsk |
|------|-------|
| Die vorliegende Studie... | Den foreliggende studien... |
| Im Rahmen dieser Arbeit... | I rammen av dette arbeidet... |
| Gegenstand der Untersuchung ist... | Undersokelsens gjenstand er... |
| Es wird der Frage nachgegangen... | Det undersokes sporsmalet om... |

**Argumenterende fraser:**
| Tysk | Norsk |
|------|-------|
| Es ist anzunehmen, dass... | Det er a anta at... |
| Hieraus folgt... | Av dette folger... |
| Im Gegensatz dazu... | I motsetning til dette... |
| Dem ist entgegenzuhalten, dass... | Mot dette kan innvendes at... |`,
    },
    {
      id: 'tysk-3-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Akademisk ordforrad',
      problem: `Finn det akademiske uttrykket som passer:

1. "Denne studien viser at..." = ___
2. "Resultatene bekrefter hypotesen" = ___
3. "I motsetning til tidligere forskning..." = ___
4. "Det kan konkluderes med at..." = ___`,
      solution: `1. "Denne studien viser at..." = **Diese Studie zeigt, dass...** / **Die vorliegende Untersuchung belegt, dass...**

2. "Resultatene bekrefter hypotesen" = **Die Ergebnisse bestatigen die Hypothese** / **Die Resultate stutzen die Annahme**

3. "I motsetning til tidligere forskning..." = **Im Gegensatz zu fruheren Forschungen...** / **Anders als bisherige Studien...**

4. "Det kan konkluderes med at..." = **Es lasst sich schlussfolgern, dass...** / **Daraus ergibt sich die Schlussfolgerung, dass...**`,
    },
    {
      id: 'tysk-3-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les abstraktet og lag et sammendrag pa norsk (3-4 setninger).',
        subTasks: [
          {
            label: 'a',
            task: `"Die Auswirkungen des Klimawandels auf die alpine Flora stehen im Mittelpunkt dieser Untersuchung. Anhand von Langzeitdaten aus funf Schweizer Regionen wird analysiert, wie sich die Vegetationszonen in den letzten 50 Jahren verschoben haben. Die Befunde zeigen eine deutliche Hohenverschiebung vieler Pflanzenarten um durchschnittlich 200 Meter. Diese Entwicklung hat weitreichende Konsequenzen fur die Biodiversitat in Gebirgsregionen."`,
            solution: 'Studien undersøker klimaendringenes effekt pa alpin flora i Sveits. Ved hjelp av langtidsdata fra fem regioner viser den at plantene har flyttet seg gjennomsnittlig 200 meter høyere opp de siste 50 arene. Dette har store konsekvenser for biologisk mangfold i fjellområder.'
          },
        ],
        solution: 'Studien undersøker klimaendringenes effekt pa alpin flora. Plantesonene har forskjøvet seg 200 meter oppover de siste 50 arene, noe som påvirker biologisk mangfold.',
        hints: ['Fokuser pa hovedfunn og metode', 'Bruk egne ord, ikke direkte oversettelse'],
      },
    },
    {
      id: 'tysk-3-9-1-note-1',
      type: 'note',
      title: 'Eksamentips',
      content: `Ved lesing av akademiske tekster pa eksamen:
1. Les overskrift og ingress forst
2. Identifiser nokkelord for du leser hele teksten
3. Let etter signalord som viser struktur
4. Svar pa sporsmalene med egne ord, men bruk fagtermer fra teksten
5. Pass pa falske venner (f.eks. "aktuell" = nodvendig/dagsaktuell, ikke "faktisk")`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Wissenschaftliches Schreiben
// ============================================================================

export const CHAPTER_TYSK_3_9_2: TextbookChapter = {
  id: 'tysk-3-9-2',
  courseId: 'tysk-3',
  chapterNumber: '9.2',
  title: 'Wissenschaftliches Schreiben',
  subtitle: 'Akademisk skriving',
  description: 'Laer a skrive akademiske tekster pa tysk med korrekt struktur, stil og kildehenvisninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive akademiske tekster med korrekt struktur',
    'bruke akademisk stil og formuleringer',
    'handtere kilder og referanser pa tysk',
  ],
  content: [
    {
      id: 'tysk-3-9-2-intro',
      type: 'text',
      content: `## Wissenschaftliches Schreiben

Akademisk skriving pa tysk folger strenge konvensjoner for struktur, stil og kildebruk. Enten du skriver en semesteroppgave, et essay eller en avhandling, ma du beherske disse reglene.

**Grunnprinsipper:**
- Objektivitet (unnga "ich" og personlige meninger uten belegg)
- Presisjon (noyaktig ordbruk og definisjoner)
- Etterprovarhet (alle pastand ma kunne belegges)
- Struktur (tydelig oppbygging)`,
    },
    {
      id: 'tysk-3-9-2-text-1',
      type: 'text',
      content: `## Oppbygging av en akademisk tekst

**1. Einleitung (Innledning) - ca. 10%**
- Presenterer tema og problemstilling
- Begrunner relevans
- Gir oversikt over struktur

**2. Hauptteil (Hoveddel) - ca. 80%**
- Teoretisk rammeverk
- Metode (hvis relevant)
- Analyse og drofting
- Argumentasjon med belegg

**3. Schluss/Fazit (Avslutning) - ca. 10%**
- Oppsummerer hovedfunn
- Besvarer problemstillingen
- Peker pa videre forskning`,
    },
    {
      id: 'tysk-3-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive en innledning',
      problem: `Du skal skrive en innledning til en oppgave om "Ungdom og sosiale medier". Bruk denne malen:

**Mal for innledning:**
1. Aktualisering (hvorfor er temaet relevant na?)
2. Problemstilling (hva skal undersokes?)
3. Avgrensning (hva inkluderes/ekskluderes?)
4. Oppbygging (hvordan er teksten strukturert?)`,
      solution: `**Eksempel pa innledning:**

*"Soziale Medien sind aus dem Alltag von Jugendlichen kaum noch wegzudenken. Laut einer aktuellen Studie des Statistischen Bundesamtes nutzen 95 Prozent der 14- bis 19-Jahrigen taglich soziale Netzwerke (vgl. Statistisches Bundesamt, 2024). Diese Entwicklung wirft Fragen nach den Auswirkungen auf das Sozialverhalten und die psychische Gesundheit junger Menschen auf.*

*Die vorliegende Arbeit geht der Frage nach, welchen Einfluss die Nutzung sozialer Medien auf das Wohlbefinden von Jugendlichen hat. Der Fokus liegt dabei auf deutschen Jugendlichen im Alter von 14 bis 18 Jahren. Nicht behandelt werden Aspekte der Mediensucht oder des Cybermobbings, da diese eigene Untersuchungen erfordern.*

*Im ersten Teil wird zunachst der theoretische Rahmen dargestellt. Anschliessend werden aktuelle Forschungsergebnisse prasentiert und kritisch diskutiert. Abschliessend werden die Ergebnisse zusammengefasst und Implikationen fur die Praxis formuliert."*`,
    },
    {
      id: 'tysk-3-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en innledning (5-7 setninger) til en oppgave om "Klimawandel und Landwirtschaft" (klimaendringer og landbruk). Bruk akademisk stil.',
        subTasks: [
          { label: 'a', task: 'Inkluder en aktualisering av temaet.', solution: 'Der Klimawandel stellt die Landwirtschaft weltweit vor grosse Herausforderungen.' },
          { label: 'b', task: 'Formuler en problemstilling.', solution: 'Die vorliegende Arbeit untersucht, wie sich veranderte Wetterbedingungen auf den Getreideanbau in Mitteleuropa auswirken.' },
          { label: 'c', task: 'Gi en kort oversikt over oppgavens struktur.', solution: 'Zunachst wird der theoretische Rahmen dargestellt, bevor aktuelle Forschungsergebnisse prasentiert werden.' },
        ],
        solution: 'Eksempel: Der Klimawandel stellt die Landwirtschaft vor neue Herausforderungen. Die vorliegende Arbeit untersucht die Auswirkungen auf den Getreideanbau in Mitteleuropa. Zunachst wird der theoretische Rahmen dargestellt, anschliessend werden Forschungsergebnisse prasentiert und diskutiert.',
        hints: ['Bruk formelle vendinger som "die vorliegende Arbeit"', 'Unnga personlig pronomen "ich"', 'Inkluder signalord for struktur'],
      },
    },
    {
      id: 'tysk-3-9-2-text-2',
      type: 'text',
      content: `## Akademisk stil pa tysk

**Unnga:**
- Forste person entall ("ich denke", "meiner Meinung nach")
- Muntlig sprak og fyllord
- Korte, usammenhengende setninger
- Generaliseringer uten belegg

**Bruk i stedet:**
- Passiv ("es wird untersucht", "es kann festgestellt werden")
- Man-konstruksjon ("man kann davon ausgehen")
- Nominalisering ("die Untersuchung zeigt" i stedet for "wenn man untersucht")
- Kildehenvisninger

**Eksempler pa omformulering:**
| Uformelt | Akademisk |
|----------|-----------|
| Ich finde, dass... | Es lasst sich argumentieren, dass... |
| Das stimmt nicht | Diese Annahme ist zu hinterfragen |
| Alle wissen, dass... | Es ist allgemein anerkannt, dass... |`,
    },
    {
      id: 'tysk-3-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Omformulere til akademisk stil',
      problem: `Gjor disse setningene mer akademiske:

1. "Ich glaube, dass das Internet wichtig ist."
2. "Viele Leute denken so."
3. "Das ist falsch."
4. "In meinem Essay werde ich uber... schreiben."`,
      solution: `**Omformulert:**

1. "Ich glaube, dass das Internet wichtig ist."
   -> **"Es ist unbestreitbar, dass das Internet eine zentrale Rolle in der modernen Gesellschaft spielt."**
   (Fjerner "ich", legger til belegg/kontekst)

2. "Viele Leute denken so."
   -> **"Diese Auffassung wird von zahlreichen Forschern geteilt (vgl. Muller, 2020)."**
   (Legger til kilde, mer presist)

3. "Das ist falsch."
   -> **"Diese Annahme ist aus mehreren Grunden zu hinterfragen."**
   (Mer nyansert, apner for argumentasjon)

4. "In meinem Essay werde ich uber... schreiben."
   -> **"Die vorliegende Arbeit befasst sich mit..."**
   (Fjerner "ich", mer formelt)`,
    },
    {
      id: 'tysk-3-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om setningene til akademisk tysk.',
        subTasks: [
          { label: 'a', task: 'Ich habe herausgefunden, dass Stress schlecht fur die Gesundheit ist.', solution: 'Es konnte nachgewiesen werden, dass Stress negative Auswirkungen auf die Gesundheit hat.' },
          { label: 'b', task: 'Jeder weiss, dass Bewegung gesund ist.', solution: 'Es ist wissenschaftlich belegt, dass korperliche Aktivitat positive Effekte auf die Gesundheit hat.' },
          { label: 'c', task: 'Ich finde diese Theorie interessant.', solution: 'Diese Theorie verdient besondere Beachtung / ist von erheblichem wissenschaftlichem Interesse.' },
        ],
        solution: 'a) Es konnte nachgewiesen werden, dass Stress negative Auswirkungen auf die Gesundheit hat. b) Es ist wissenschaftlich belegt, dass korperliche Aktivitat positive Effekte auf die Gesundheit hat. c) Diese Theorie verdient besondere Beachtung.',
        hints: ['Erstatt "ich" med passiv eller upersonlige konstruksjoner', 'Legg til akademiske vendinger'],
      },
    },
    {
      id: 'tysk-3-9-2-text-3',
      type: 'text',
      content: `## Kildehenvisninger (Quellenangaben)

**I lopende tekst (Zitat im Text):**
- Direkte sitat: "Wortliches Zitat" (Nachname, Jahr, S. Seitenzahl)
- Indirekte gjengivelse: vgl. Nachname (Jahr) / (vgl. Nachname, Jahr)

**Eksempler:**
- Muller (2020) argumentiert, dass...
- Die Forschung zeigt (vgl. Schmidt, 2019), dass...
- "Die Digitalisierung verandert die Gesellschaft grundlegend" (Weber, 2021, S. 45).

**I litteraturlisten (Literaturverzeichnis):**
- Bok: Nachname, Vorname (Jahr): Titel. Verlag.
- Artikkel: Nachname, Vorname (Jahr): Titel. In: Zeitschrift, Jahrgang, S. Seiten.
- Nettside: Nachname, Vorname (Jahr): Titel. URL (Zugriff: Datum).`,
    },
    {
      id: 'tysk-3-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke kilder korrekt',
      problem: `Du har denne kilden:
- Forfatter: Dr. Anna Schmidt
- Ar: 2023
- Tittel: Digitale Bildung in Deutschland
- Forlag: Springer
- Sitat fra side 78: "Die Corona-Pandemie hat die Digitalisierung der Schulen um Jahre beschleunigt."

Vis hvordan du bruker denne kilden:
a) Som direkte sitat
b) Som indirekte gjengivelse
c) I litteraturlisten`,
      solution: `**a) Direkte sitat:**
Schmidt (2023, S. 78) stellt fest: "Die Corona-Pandemie hat die Digitalisierung der Schulen um Jahre beschleunigt."

*Eller:* "Die Corona-Pandemie hat die Digitalisierung der Schulen um Jahre beschleunigt" (Schmidt, 2023, S. 78).

**b) Indirekte gjengivelse:**
Laut Schmidt (2023) hat die Corona-Pandemie zu einer beschleunigten Digitalisierung im Schulwesen gefuhrt.

*Eller:* Die Digitalisierung der Schulen wurde durch die Pandemie erheblich vorangetrieben (vgl. Schmidt, 2023).

**c) Litteraturliste:**
Schmidt, Anna (2023): Digitale Bildung in Deutschland. Berlin: Springer Verlag.`,
    },
    {
      id: 'tysk-3-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort akademisk tekst (8-10 setninger) om et selvvalgt tema. Inkluder: innledning med problemstilling, hoveddel med minst ett argument, og avslutning. Bruk akademisk stil.',
        solution: 'Eksempel: "Die Nutzung erneuerbarer Energien ist ein zentrales Thema der aktuellen Klimadebatte. Die vorliegende Arbeit untersucht, welche Rolle Solarenergie in der deutschen Energiewende spielt. Es ist allgemein anerkannt, dass fossile Brennstoffe erheblich zum Klimawandel beitragen (vgl. IPCC, 2021). Solarenergie bietet eine nachhaltige Alternative, deren Potenzial noch nicht vollstandig ausgeschopft ist. Allerdings stellen Speichertechnologien und Netzinfrastruktur weiterhin Herausforderungen dar. Zusammenfassend lasst sich feststellen, dass Solarenergie ein wichtiger Baustein der Energiewende ist, jedoch weitere Investitionen in Forschung und Infrastruktur erforderlich sind."',
        hints: ['Bruk passiv og upersonlige konstruksjoner', 'Inkluder signalord', 'Husk innledning-hoveddel-avslutning'],
      },
    },
    {
      id: 'tysk-3-9-2-tip-1',
      type: 'tip',
      title: 'Nyttige verktoy',
      content: `For akademisk skriving pa tysk:
- **DWDS** (dwds.de) - Tysk ordbok med akademiske eksempler
- **Duden** (duden.de) - Rettskriving og grammatikk
- **Linguee** - Kontekstoversettelser
- **Citavi/Zotero** - Referansehåndtering`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Fachsprache
// ============================================================================

export const CHAPTER_TYSK_3_9_3: TextbookChapter = {
  id: 'tysk-3-9-3',
  courseId: 'tysk-3',
  chapterNumber: '9.3',
  title: 'Fachsprache',
  subtitle: 'Fagsprak og terminologi',
  description: 'Forstå og bruk tysk fagterminologi, nominalstil og spesialisert vokabular.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå og bruke fagterminologi pa tysk',
    'mestre nominalstil og passivkonstruksjoner',
    'tilpasse spraknivaet til faglig kontekst',
  ],
  content: [
    {
      id: 'tysk-3-9-3-intro',
      type: 'text',
      content: `## Fachsprache - Fagsprak

Hvert fagfelt har sin egen terminologi og stil. Fagsprak (Fachsprache) skiller seg fra hverdagssprak (Alltagssprache) ved:

- Presise definisjoner av begreper
- Standardiserte uttrykk
- Nominalstil (substantivering)
- Forkortelser og akronymer
- Internasjonale laneord (ofte fra latin, gresk, engelsk)

A mestre fagsprak er avgjorende for a lykkes i akademia og profesjonelt liv.`,
    },
    {
      id: 'tysk-3-9-3-text-1',
      type: 'text',
      content: `## Nominalstil (Nominalstil)

Nominalstil er typisk for akademisk og faglig tysk. Verb omgjores til substantiv, noe som gjor teksten mer kompakt og formell.

**Verbalstil -> Nominalstil:**
| Verbalstil | Nominalstil |
|------------|-------------|
| Die Forscher analysierten die Daten | Die Analyse der Daten durch die Forscher |
| Man entwickelt neue Technologien | Die Entwicklung neuer Technologien |
| Die Preise steigen | Die Steigerung der Preise |
| Wir bewerten die Ergebnisse | Die Bewertung der Ergebnisse |

**Vanlige nominaliseringer:**
| Verb | Substantiv |
|------|------------|
| entwickeln | die Entwicklung |
| verbessern | die Verbesserung |
| untersuchen | die Untersuchung |
| durchfuhren | die Durchfuhrung |
| anwenden | die Anwendung |`,
    },
    {
      id: 'tysk-3-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Nominalstil i praksis',
      problem: `Gjor om til nominalstil:

1. "Die Wissenschaftler haben entdeckt, dass..."
2. "Man muss die Probleme losen."
3. "Nachdem die Regierung entschieden hatte, ..."
4. "Bevor man die Daten sammelt, muss man..."`,
      solution: `**Omgjort til nominalstil:**

1. "Die Wissenschaftler haben entdeckt, dass..."
   -> **"Die Entdeckung der Wissenschaftler zeigt, dass..."**

2. "Man muss die Probleme losen."
   -> **"Die Losung der Probleme ist erforderlich."**

3. "Nachdem die Regierung entschieden hatte, ..."
   -> **"Nach der Entscheidung der Regierung..."**

4. "Bevor man die Daten sammelt, muss man..."
   -> **"Vor der Datensammlung / Vor der Erhebung der Daten muss..."**

**Tips:** Nominalstil gjor teksten kortere, men kan bli tung a lese. Bruk med mate!`,
    },
    {
      id: 'tysk-3-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjor om til nominalstil.',
        subTasks: [
          { label: 'a', task: 'Die Experten diskutierten uber das Thema.', solution: 'Die Diskussion der Experten uber das Thema / Die Expertendiskussion uber das Thema' },
          { label: 'b', task: 'Man muss die Ergebnisse kritisch prufen.', solution: 'Die kritische Prufung der Ergebnisse ist erforderlich.' },
          { label: 'c', task: 'Die Forscher haben die Hypothese bestatigt.', solution: 'Die Bestatigung der Hypothese durch die Forscher' },
        ],
        solution: 'a) Die Diskussion der Experten b) Die kritische Prufung der Ergebnisse ist erforderlich c) Die Bestatigung der Hypothese durch die Forscher',
        hints: ['Finn verbet og gjor det om til substantiv (-ung, -tion, osv.)', 'Subjektet blir ofte genitiv eller "durch + akkusativ"'],
      },
    },
    {
      id: 'tysk-3-9-3-text-2',
      type: 'text',
      content: `## Fagterminologi i ulike felt

**Naturvitenskap (Naturwissenschaften):**
| Tysk | Norsk |
|------|-------|
| die Hypothese | hypotese |
| das Experiment | eksperiment |
| die Variable | variabel |
| der Beweis | bevis |
| die Korrelation | korrelasjon |

**Samfunnsvitenskap (Sozialwissenschaften):**
| Tysk | Norsk |
|------|-------|
| die Studie | studie |
| die Befragung | sporreundersokelse |
| die Stichprobe | utvalg |
| die Analyse | analyse |
| der Faktor | faktor |

**Juss (Rechtswissenschaft):**
| Tysk | Norsk |
|------|-------|
| das Gesetz | lov |
| der Vertrag | kontrakt |
| das Urteil | dom |
| der Angeklagte | tiltalte |
| die Klage | soksmal |`,
    },
    {
      id: 'tysk-3-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fagsprak i kontekst',
      problem: `Les disse setningene og identifiser hvilket fagfelt de tilhorer:

1. "Die abhangige Variable korreliert signifikant mit der unabhangigen Variable (r = 0,78, p < 0,05)."

2. "Der Angeklagte wurde vom Vorwurf des Diebstahls freigesprochen."

3. "Die qualitative Befragung umfasste eine Stichprobe von 25 Teilnehmern."

4. "Das Bruttoinlandsprodukt stieg im Vergleich zum Vorjahr um 2,3 Prozent."`,
      solution: `**Fagfelt:**

1. **Statistikk/Naturvitenskap** - Bruker statistiske termer: Variable, korreliert, signifikant, r-verdi, p-verdi

2. **Juss (Rechtswissenschaft)** - Juridiske termer: Angeklagte (tiltalte), Vorwurf (anklage), Diebstahl (tyveri), freigesprochen (frikjent)

3. **Samfunnsvitenskap (Sozialwissenschaften)** - Metodetermer: qualitative Befragung (kvalitativ sporreundersokelse), Stichprobe (utvalg), Teilnehmer (deltakere)

4. **Okonomi (Wirtschaftswissenschaften)** - Okonomiske termer: Bruttoinlandsprodukt (BNP), Vorjahr (foregaende ar), Prozent (prosent)`,
    },
    {
      id: 'tysk-3-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Match fagterminologien med riktig definisjon.',
        subTasks: [
          { label: 'a', task: 'die Hypothese', solution: 'En foreloping antagelse som kan testes' },
          { label: 'b', task: 'die Stichprobe', solution: 'Et utvalg av en storre populasjon' },
          { label: 'c', task: 'die Korrelation', solution: 'Statistisk sammenheng mellom to variabler' },
          { label: 'd', task: 'das Fazit', solution: 'Konklusjon eller oppsummering' },
        ],
        solution: 'a) Foreloping antagelse som kan testes b) Utvalg av storre populasjon c) Statistisk sammenheng d) Konklusjon',
        hints: ['Tenk pa hvordan disse ordene brukes i akademisk kontekst'],
      },
    },
    {
      id: 'tysk-3-9-3-text-3',
      type: 'text',
      content: `## Passiv i fagsprak

Passiv er svart vanlig i fagsprak fordi det:
- Fokuserer pa handlingen, ikke aktoren
- Gir objektivitet
- Er typisk for vitenskapelig skriving

**Dannelse av passiv:**
- Presens: wird + Partizip II (Die Daten werden analysiert)
- Preteritum: wurde + Partizip II (Die Daten wurden analysiert)
- Perfektum: ist + Partizip II + worden (Die Daten sind analysiert worden)

**Eksempler:**
| Aktiv | Passiv |
|-------|--------|
| Man untersucht das Problem | Das Problem wird untersucht |
| Die Forscher haben bewiesen | Es wurde bewiesen / Es ist bewiesen worden |
| Wir mussen analysieren | Es muss analysiert werden |`,
    },
    {
      id: 'tysk-3-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Aktiv til passiv',
      problem: `Gjor om til passiv:

1. "Die Wissenschaftler fuhrten das Experiment durch."
2. "Man kann diese Methode anwenden."
3. "Die Studie hat die These widerlegt."`,
      solution: `**Passiv:**

1. "Die Wissenschaftler fuhrten das Experiment durch."
   -> **"Das Experiment wurde (von den Wissenschaftlern) durchgefuhrt."**
   (Preteritum passiv)

2. "Man kann diese Methode anwenden."
   -> **"Diese Methode kann angewendet werden."**
   (Modalverb + passiv infinitiv)

3. "Die Studie hat die These widerlegt."
   -> **"Die These ist (durch die Studie) widerlegt worden."**
   (Perfektum passiv)

**Merk:** "Von" brukes for person/institusjon, "durch" for middel/instrument.`,
    },
    {
      id: 'tysk-3-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om til passiv.',
        subTasks: [
          { label: 'a', task: 'Die Forscher haben die Daten gesammelt.', solution: 'Die Daten sind (von den Forschern) gesammelt worden.' },
          { label: 'b', task: 'Man muss die Ergebnisse uberprufen.', solution: 'Die Ergebnisse mussen uberpruft werden.' },
          { label: 'c', task: 'Die Universitat veroffentlicht die Studie nachste Woche.', solution: 'Die Studie wird nachste Woche (von der Universitat) veroffentlicht.' },
        ],
        solution: 'a) Die Daten sind gesammelt worden b) Die Ergebnisse mussen uberpruft werden c) Die Studie wird nachste Woche veroffentlicht',
        hints: ['Objektet blir subjekt i passiv', 'Husk riktig tempus', 'Bruk "von" for a angi hvem som gjor handlingen'],
      },
    },
    {
      id: 'tysk-3-9-3-note-1',
      type: 'note',
      title: 'Praktisk tips',
      content: `Nar du leser fagartikler:
1. Lag en ordliste med nye fagtermer
2. Legg merke til nominaliseringer og passivkonstruksjoner
3. Let etter definisjoner i teksten
4. Bruk fagordboker (Fachworterbuch)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Präsentationen
// ============================================================================

export const CHAPTER_TYSK_3_9_4: TextbookChapter = {
  id: 'tysk-3-9-4',
  courseId: 'tysk-3',
  chapterNumber: '9.4',
  title: 'Präsentationen',
  subtitle: 'Muntlig framstilling',
  description: 'Laer a holde akademiske presentasjoner pa tysk med god struktur, retorikk og profesjonell framforing.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og strukturere akademiske presentasjoner',
    'bruke retoriske virkemidler effektivt',
    'handtere sporsmal og diskusjon pa tysk',
  ],
  content: [
    {
      id: 'tysk-3-9-4-intro',
      type: 'text',
      content: `## Akademische Präsentationen

Muntlige presentasjoner er en viktig del av akademia. Pa tysk folger presentasjoner ofte en fast struktur og bruker bestemte formuleringer.

**Typiske presentasjonssituasjoner:**
- Referat (muntlig presentasjon av et tema)
- Seminarvortrag (seminarforedrag)
- Projektprasentation (prosjektpresentasjon)
- Verteidigung (forsvar av oppgave)

**Viktige elementer:**
- Klar struktur
- God innledning som fanger oppmerksomhet
- Logisk argumentasjon
- Overbevisende avslutning`,
    },
    {
      id: 'tysk-3-9-4-text-1',
      type: 'text',
      content: `## Struktur einer Präsentation

**1. Begrüssung und Einleitung (Hilsen og innledning)**
- Presenter deg selv
- Introduser temaet
- Gi oversikt over struktur
- Forklar regler for sporsmal

**2. Hauptteil (Hoveddel)**
- Del inn i logiske seksjoner
- Bruk overganger mellom delene
- Presenter argumenter med belegg
- Bruk visuelle hjelpemidler

**3. Schluss (Avslutning)**
- Oppsummer hovedpunktene
- Konkluder
- Apne for sporsmal og diskusjon
- Takk for oppmerksomheten`,
    },
    {
      id: 'tysk-3-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Innlede en presentasjon',
      problem: `Hvordan innleder du en presentasjon pa tysk? Lag en innledning for et foredrag om "Nachhaltige Stadtentwicklung" (barekraftig byutvikling).`,
      solution: `**Eksempel pa innledning:**

*"Guten Tag, mein Name ist [Name] und ich studiere Stadtplanung an der Universitat [Name].*

*Herzlich willkommen zu meinem Vortrag uber nachhaltige Stadtentwicklung. In den nachsten 20 Minuten werde ich Ihnen vorstellen, wie Stadte umweltfreundlicher gestaltet werden konnen.*

*Zunachst werde ich den Begriff 'Nachhaltigkeit' definieren. Anschliessend prasentiere ich drei konkrete Beispiele aus europaischen Stadten. Zum Schluss diskutiere ich Herausforderungen und Zukunftsperspektiven.*

*Wenn Sie Fragen haben, konnen Sie diese gerne am Ende stellen - oder jederzeit dazwischen, wenn etwas unklar ist.*

*Beginnen wir also mit der Frage: Was bedeutet eigentlich nachhaltige Stadtentwicklung?"*`,
    },
    {
      id: 'tysk-3-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en innledning til en presentasjon (5-7 setninger). Velg ett av temaene: a) Kunstliche Intelligenz, b) Klimawandel, c) Soziale Medien.',
        subTasks: [
          { label: 'a', task: 'Inkluder en hilsen og presentasjon av deg selv.', solution: 'Guten Tag, mein Name ist [Name] und ich werde heute uber [Thema] sprechen.' },
          { label: 'b', task: 'Gi en oversikt over presentasjonens struktur.', solution: 'Zunachst werde ich... Dann... Zum Schluss...' },
          { label: 'c', task: 'Forklar nar publikum kan stille sporsmal.', solution: 'Fragen konnen Sie gerne am Ende stellen / Fragen sind jederzeit willkommen.' },
        ],
        solution: 'Eksempel: Guten Tag, mein Name ist... Heute spreche ich uber... Zunachst erklare ich..., dann prasentiere ich..., zum Schluss diskutiere ich... Fragen sind am Ende willkommen.',
        hints: ['Bruk formuleringer som "Zunachst... Dann... Zum Schluss..."', 'Presenter temaets relevans'],
      },
    },
    {
      id: 'tysk-3-9-4-text-2',
      type: 'text',
      content: `## Nyttige fraser for presentasjoner

**Innledning:**
| Tysk | Norsk |
|------|-------|
| Ich mochte Ihnen heute vorstellen... | Jeg vil i dag presentere for dere... |
| Das Thema meines Vortrags ist... | Temaet for mitt foredrag er... |
| Ich werde in drei Teile gliedern... | Jeg vil dele inn i tre deler... |

**Overganger:**
| Tysk | Norsk |
|------|-------|
| Kommen wir nun zu... | La oss na ga over til... |
| Im nachsten Abschnitt... | I neste avsnitt... |
| Das bringt mich zu meinem nachsten Punkt... | Det bringer meg til mitt neste punkt... |

**Avslutning:**
| Tysk | Norsk |
|------|-------|
| Zusammenfassend lasst sich sagen... | Oppsummerende kan man si... |
| Abschliessend mochte ich betonen... | Avslutningsvis vil jeg understreke... |
| Vielen Dank fur Ihre Aufmerksamkeit. | Tusen takk for oppmerksomheten. |`,
    },
    {
      id: 'tysk-3-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Handtere sporsmal',
      problem: `Hvordan handterer du sporsmal under eller etter en presentasjon pa tysk? Ov pa disse situasjonene:

1. Du forstår ikke sporsmalet
2. Du vet ikke svaret
3. Du er uenig med sporsmalsStilleren`,
      solution: `**Handtering av sporsmal:**

**1. Du forstar ikke sporsmalet:**
- "Entschuldigung, konnten Sie die Frage bitte wiederholen?"
- "Ich bin mir nicht sicher, ob ich Sie richtig verstanden habe. Meinen Sie...?"
- "Konnten Sie das bitte prazisieren?"

**2. Du vet ikke svaret:**
- "Das ist eine sehr gute Frage, auf die ich leider keine eindeutige Antwort habe."
- "Diese Frage geht uber den Rahmen meines Vortrags hinaus, aber ich werde das gerne nachrecherchieren."
- "Dazu musste ich noch weitere Informationen einholen."

**3. Du er uenig:**
- "Das ist ein interessanter Standpunkt. Ich sehe das allerdings etwas anders, weil..."
- "Ich verstehe Ihren Einwand, mochte aber darauf hinweisen, dass..."
- "Da haben Sie einen wichtigen Punkt angesprochen. Die Forschung zeigt jedoch..."`,
    },
    {
      id: 'tysk-3-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett og tilpass disse frasene til presentasjonsbruk.',
        subTasks: [
          { label: 'a', task: '"La meg vise dere et eksempel."', solution: 'Lassen Sie mich Ihnen ein Beispiel zeigen. / Ich mochte Ihnen ein Beispiel zeigen.' },
          { label: 'b', task: '"Som dere kan se pa denne grafen..."', solution: 'Wie Sie auf dieser Grafik sehen konnen... / Diese Grafik zeigt...' },
          { label: 'c', task: '"Har dere sporsmal sa langt?"', solution: 'Haben Sie bis hierhin Fragen? / Gibt es Fragen zu diesem Punkt?' },
          { label: 'd', task: '"Det bringer meg til konklusjonen."', solution: 'Das bringt mich zur Schlussfolgerung. / Damit komme ich zum Fazit.' },
        ],
        solution: 'a) Lassen Sie mich Ihnen ein Beispiel zeigen. b) Wie Sie auf dieser Grafik sehen konnen... c) Haben Sie bis hierhin Fragen? d) Das bringt mich zur Schlussfolgerung.',
        hints: ['Bruk "Sie" for formal tiltale', 'Formelle presentasjoner bruker indirekte formuleringer'],
      },
    },
    {
      id: 'tysk-3-9-4-text-3',
      type: 'text',
      content: `## Retoriske virkemidler

**For a engasjere publikum:**
- **Retoriske sporsmal:** "Wer von Ihnen hat schon einmal...?"
- **Overraskende fakta:** "Wussten Sie, dass...?"
- **Personlige anekdoter:** "Als ich zum ersten Mal..."
- **Publikumsinteraksjon:** "Was glauben Sie...?"

**For a strukturere:**
- **Signalord:** erstens, zweitens, drittens
- **Oppsummeringer:** "Wie wir gesehen haben..."
- **Forhandsvisning:** "Im Folgenden werde ich zeigen..."

**For a overbevise:**
- **Eksempler og case studies:** "Ein gutes Beispiel dafur ist..."
- **Statistikk:** "Laut einer Studie..."
- **Ekspertuttalelser:** "Der renommierte Forscher X sagt..."`,
    },
    {
      id: 'tysk-3-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Avslutte en presentasjon',
      problem: `Lag en avslutning for en presentasjon om "Die Zukunft der Arbeit" (arbeidets fremtid). Inkluder:
- Oppsummering
- Hovedkonklusjon
- Apning for sporsmal
- Takk`,
      solution: `**Eksempel pa avslutning:**

*"Lassen Sie mich nun die wichtigsten Punkte zusammenfassen:*

*Erstens: Die Digitalisierung verandert die Arbeitswelt grundlegend. Zweitens: Neue Berufe entstehen, wahrend andere verschwinden. Drittens: Lebenslanges Lernen wird immer wichtiger.*

*Mein Fazit: Die Zukunft der Arbeit bietet sowohl Chancen als auch Herausforderungen. Wir mussen uns anpassen und offen fur Veranderungen sein.*

*Damit bin ich am Ende meines Vortrags angelangt. Ich freue mich jetzt auf Ihre Fragen und Kommentare.*

*Vielen Dank fur Ihre Aufmerksamkeit!"*`,
    },
    {
      id: 'tysk-3-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg en 5-minutters presentasjon pa tysk. Velg et tema du kjenner godt og skriv: a) Innledning, b) 3 hovedpunkter, c) Avslutning med konklusjon.',
        solution: 'Eksempel-struktur: INNLEDNING: Hilsen, tema, oversikt (30 sek). HOVEDPUNKT 1: Definisjon/bakgrunn (1 min). HOVEDPUNKT 2: Eksempel/analyse (1.5 min). HOVEDPUNKT 3: Diskusjon/vurdering (1.5 min). AVSLUTNING: Oppsummering, konklusjon, sporsmal (30 sek).',
        hints: ['Hold deg til 3 hovedpunkter', 'Bruk overganger mellom delene', 'Ovpresentasjonen hoyt for a sjekke tid'],
      },
    },
    {
      id: 'tysk-3-9-4-tip-1',
      type: 'tip',
      title: 'Presentasjonstips',
      content: `For en vellykket presentasjon:
1. **Forberedelse:** Ov flere ganger, helst foran andre
2. **Tempo:** Snakk sakte og tydelig
3. **Blikkontakt:** Se pa publikum, ikke bare pa notatene
4. **Kroppssprak:** Sta rett, bruk hender naturlig
5. **Visualer:** Bruk bilder og grafer, ikke for mye tekst
6. **Tid:** Hold deg innenfor tidsrammen`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Textverständnis
// ============================================================================

export const CHAPTER_TYSK_3_10_1: TextbookChapter = {
  id: 'tysk-3-10-1',
  courseId: 'tysk-3',
  chapterNumber: '10.1',
  title: 'Textverständnis',
  subtitle: 'Leseforstaelse og strategier',
  description: 'Forbered deg til eksamen med leseforstaelse-strategier og ovelser pa avanserte tekster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og forsta komplekse tekster effektivt',
    'bruke ulike lesestrategier',
    'svare presist pa leseforstaelsessporsmal',
  ],
  content: [
    {
      id: 'tysk-3-10-1-intro',
      type: 'text',
      content: `## Textverständnis - Leseforståelse

Leseforstaelse er en sentral del av tyskeksamen. Du ma kunne lese og forsta ulike teksttyper, identifisere hovedideer og detaljer, og svare pa sporsmal presist.

**Teksttyper pa eksamen:**
- Nyhetsartikler
- Fagartikler
- Litteraere tekster
- Debattinnlegg
- Intervjuer

**Sporsmalstyper:**
- Globalforstaelse (hovedidé)
- Detaljforstaelse (spesifikk informasjon)
- Inferens (lesning mellom linjene)
- Ordforstaelse i kontekst`,
    },
    {
      id: 'tysk-3-10-1-text-1',
      type: 'text',
      content: `## Lesestrategier for eksamen

**For lesing:**
1. Les oppgaveteksten noyaktig
2. Skum gjennom teksten (overskrift, mellomtitler, forste/siste avsnitt)
3. Les sporsmalene for du leser teksten grundig

**Under lesing:**
1. Les teksten grundig
2. Marker nokkelord og viktige passasjer
3. Merk deg avsnitt som relaterer til sporsmalene

**Etter lesing:**
1. Svar pa sporsmalene med egne ord (hvis ikke sitater kreves)
2. Sjekk svarene mot teksten
3. Kontroller at du har svart pa alt som blir spurt om`,
    },
    {
      id: 'tysk-3-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Leseforstaelse - Nyhetsartikkel',
      problem: `Les teksten og svar pa sporsmalene:

**Jugendliche und politisches Engagement**

*Entgegen gangiger Vorurteile interessieren sich viele junge Menschen in Deutschland fur Politik. Eine aktuelle Studie der Universitat Bielefeld zeigt, dass 65 Prozent der 16- bis 25-Jahrigen politisch interessiert sind - ein deutlicher Anstieg gegenuber fruheren Erhebungen.*

*Allerdings hat sich die Form des Engagements verandert. Wahrend traditionelle Parteimitgliedschaften rucklaufig sind, engagieren sich immer mehr Jugendliche in sozialen Bewegungen wie Fridays for Future oder in Online-Aktivismus. "Die Jugend ist nicht unpolitisch, sie ist nur anders politisch", erklart Studienleiterin Prof. Dr. Muller.*

*Die Forscher identifizierten mehrere Grunde fur diesen Wandel: Zum einen bieten soziale Medien neue Moglichkeiten der Vernetzung. Zum anderen wunschen sich viele Jugendliche schnellere und direktere Formen der Partizipation als traditionelle Parteiarbeit.*

**Sporsmal:**
a) Hva viser studien fra Universitetet i Bielefeld?
b) Hvordan har ungdommens politiske engasjement endret seg?
c) Hvilke grunner gis for denne endringen?`,
      solution: `**Svar:**

a) **Hva viser studien?**
Studien viser at 65 prosent av unge mellom 16 og 25 ar er politisk interesserte. Dette er en tydelig okning sammenlignet med tidligere undersokelser, noe som motbeviser fordommen om at unge ikke bryr seg om politikk.

b) **Hvordan har engasjementet endret seg?**
Tradisjonelt partimedlemskap gar ned, mens engasjement i sosiale bevegelser (som Fridays for Future) og online-aktivisme oker. Som Prof. Muller sier: "Ungdommen er ikke upolitisk, den er bare annerledes politisk."

c) **Grunner for endringen:**
1. Sosiale medier gir nye muligheter for nettverksbygging
2. Mange unge onsker raskere og mer direkte deltakelse enn tradisjonelt partiarbeid tilbyr`,
    },
    {
      id: 'tysk-3-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les teksten og svar pa sporsmalene.',
        subTasks: [
          {
            label: 'a',
            task: `"Die Vier-Tage-Woche wird in immer mehr Unternehmen getestet. Befurworter argumentieren, dass kurzere Arbeitszeiten die Produktivitat steigern und die Work-Life-Balance verbessern. Kritiker hingegen warnen vor wirtschaftlichen Nachteilen und Fachkraftemangel." - Hva er hovedtemaet?`,
            solution: 'Hovedtemaet er fire-dagers arbeidsuke og debatten rundt fordeler og ulemper.'
          },
          {
            label: 'b',
            task: 'Hvilke argumenter gis FOR fire-dagers uke?',
            solution: 'Okt produktivitet og bedre balanse mellom arbeid og fritid (Work-Life-Balance).'
          },
          {
            label: 'c',
            task: 'Hvilke argumenter gis MOT?',
            solution: 'Okonomiske ulemper og mangel pa fagfolk (Fachkraftemangel).'
          },
        ],
        solution: 'a) Fire-dagers arbeidsuke og debatten rundt den b) Okt produktivitet, bedre work-life-balance c) Okonomiske ulemper, fachkraftemangel',
        hints: ['Let etter signalord som "Befurworter" (tilhengere) og "Kritiker"', 'Noter argumentene systematisk'],
      },
    },
    {
      id: 'tysk-3-10-1-text-2',
      type: 'text',
      content: `## Forsta ord i kontekst

Pa eksamen vil du mote ukjente ord. I stedet for a ga i panikk, bruk konteksten:

**Strategier:**
1. **Ordklasse:** Er det substantiv, verb, adjektiv?
2. **Orddannelse:** Kan du gjenkjenne deler av ordet?
   - Forstavelser: un-, ver-, be-, ent-
   - Endelser: -ung, -heit, -keit, -lich
3. **Kontekst:** Hva handler setningen om?
4. **Logikk:** Hva gir mening i sammenhengen?

**Eksempel:**
*"Die Umweltverschmutzung hat in den letzten Jahren zugenommen."*
- Um-welt = omkring-verden = miljo
- Ver-schmutz-ung = tilsmusset-tilstand = forurensning
- zu-ge-nommen = okt`,
    },
    {
      id: 'tysk-3-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Ordforstaelse i kontekst',
      problem: `Hva betyr de understrekede ordene? Bruk konteksten.

1. "Die **Wahlbeteiligung** lag bei nur 40 Prozent - ein historischer Tiefstand."

2. "Durch die **Energiewende** will Deutschland bis 2045 klimaneutral werden."

3. "Die **Arbeitslosenquote** ist im Vergleich zum Vorjahr gesunken."`,
      solution: `**Ordanalyse:**

1. **Wahlbeteiligung** (valgdeltakelse)
   - Wahl = valg
   - Beteiligung = deltakelse
   - Kontekst: 40% og "Tiefstand" (lavmål) -> handler om hvor mange som stemte

2. **Energiewende** (energiomstilling)
   - Energie = energi
   - Wende = vending, omstilling
   - Kontekst: klimanøytral innen 2045 -> handler om overgang til fornybar energi

3. **Arbeitslosenquote** (arbeidsledighetsrate)
   - Arbeitslose = arbeidsledige
   - Quote = andel, rate
   - Kontekst: "gesunken" (sunket) og "Vorjahr" (i fjor) -> statistikk om arbeidsløshet`,
    },
    {
      id: 'tysk-3-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar betydningen av disse sammensatte ordene ved a dele dem opp.',
        subTasks: [
          { label: 'a', task: 'Umweltschutz', solution: 'Umwelt (miljo) + Schutz (beskyttelse) = miljovern' },
          { label: 'b', task: 'Meinungsfreiheit', solution: 'Meinung (mening) + Freiheit (frihet) = ytringsfrihet' },
          { label: 'c', task: 'Lebensqualitat', solution: 'Leben (liv) + Qualitat (kvalitet) = livskvalitet' },
          { label: 'd', task: 'Handlungsbedarf', solution: 'Handlung (handling) + Bedarf (behov) = handlingsbehov' },
        ],
        solution: 'a) miljovern b) ytringsfrihet c) livskvalitet d) handlingsbehov',
        hints: ['Del opp i komponenter', 'Gjenkjenn vanlige ord', 'Tenk pa logisk betydning'],
      },
    },
    {
      id: 'tysk-3-10-1-text-3',
      type: 'text',
      content: `## Vanlige sporsmalstyper pa eksamen

**1. Globalforstaelse:**
- "Was ist das Hauptthema des Textes?"
- "Worum geht es in dem Artikel?"
- "Was ist die Kernaussage?"

**2. Detaljforstaelse:**
- "Welche Grunde werden genannt fur...?"
- "Wie viele/Wann/Wo...?"
- "Was sagt der Autor uber...?"

**3. Inferens (tolkning):**
- "Was meint der Autor mit...?"
- "Welche Haltung hat der Autor zu...?"
- "Was kann man schlussfolgern?"

**4. Ordforstaelse:**
- "Was bedeutet das Wort X im Kontext?"
- "Erklaren Sie den Ausdruck..."`,
    },
    {
      id: 'tysk-3-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Lengre lesetekst',
      problem: `Les teksten og svar pa alle sporsmalstyper:

**Homeoffice - Gekommen um zu bleiben?**

*Die Corona-Pandemie hat die Arbeitswelt dauerhaft verandert. Vor 2020 arbeiteten nur etwa 12 Prozent der Beschaftigten regelmassig von zu Hause. Heute sind es uber 30 Prozent - und viele Unternehmen haben hybride Arbeitsmodelle eingefuhrt.*

*Die Vorteile liegen auf der Hand: Arbeitnehmer sparen Zeit und Geld fur den Arbeitsweg, konnen Familie und Beruf besser vereinbaren und berichten oft von hoherer Zufriedenheit. Auch Unternehmen profitieren durch geringere Burokosten und einen grosseren Bewerberpool, da geografische Grenzen weniger relevant werden.*

*Dennoch gibt es Schattenseiten. Manche Mitarbeiter klagen uber Isolation und verschwimmende Grenzen zwischen Arbeit und Privatleben. Fuhrungskrafte berichten von Herausforderungen bei der Teamfuhrung auf Distanz. Experten empfehlen daher klare Regeln und regelmasige Prasenzstage.*

*Fazit: Das Homeoffice wird bleiben, aber die optimale Balance zwischen Buro und Heimarbeit muss jedes Unternehmen fur sich finden.*

**Sporsmal:**
a) (Global) Was ist die Hauptaussage des Textes?
b) (Detail) Wie hat sich der Anteil der Heimarbeiter verandert?
c) (Inferens) Welche Haltung hat der Autor zum Homeoffice?
d) (Ordforstaelse) Was bedeutet "hybride Arbeitsmodelle"?`,
      solution: `**Svar:**

a) **(Globalforstaelse)** Hovedbudskapet er at hjemmekontor har blitt en permanent del av arbeidslivet etter pandemien, med bade fordeler og ulemper, og at hver bedrift ma finne sin egen balanse.

b) **(Detaljforstaelse)** For pandemien jobbet ca. 12% hjemmefra, na er det over 30% - nesten en tredobling.

c) **(Inferens)** Forfatteren har en balansert, men positiv holdning til hjemmekontor. Han presenterer bade fordeler og ulemper, men konkluderer med at det "vil forbli" ("wird bleiben"). Han anbefaler tilpasning, ikke avskaffelse.

d) **(Ordforstaelse)** "Hybride Arbeitsmodelle" = arbeidsmodeller som kombinerer kontor og hjemmekontor (hybrid = blanding av to elementer).`,
    },
    {
      id: 'tysk-3-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ov pa a svare pa leseforstaelsessporsmal med denne teksten.',
        subTasks: [
          {
            label: 'a',
            task: `"Kunstliche Intelligenz verandert die Arbeitswelt grundlegend. Wahrend einige Berufe durch Automatisierung verschwinden, entstehen gleichzeitig neue Tatigkeitsfelder. Entscheidend ist, dass Arbeitnehmer bereit sind, sich weiterzubilden und neue Kompetenzen zu erwerben." - Hva er hovedbudskapet?`,
            solution: 'KI endrer arbeidslivet - noen jobber forsvinner, nye oppstar. Nokkelen er kontinuerlig kompetanseutvikling.'
          },
          {
            label: 'b',
            task: 'Hva anbefales arbeidstakere?',
            solution: 'A vaere villige til videreutdanning og a tilegne seg nye kompetanser.'
          },
        ],
        solution: 'a) KI endrer arbeidslivet, og kontinuerlig laering er avgjorende. b) Videreutdanning og nye kompetanser.',
        hints: ['Finn tekstens hovedpastander', 'Let etter konkrete anbefalinger'],
      },
    },
    {
      id: 'tysk-3-10-1-note-1',
      type: 'note',
      title: 'Eksamentips for leseforstaelse',
      content: `1. Les sporsmalene FORST - da vet du hva du skal se etter
2. Marker nokkelord i teksten
3. Svar med egne ord med mindre sitater kreves
4. Ikke gjett - sjekk alltid svaret mot teksten
5. Disponér tiden: ca. 1-2 minutter per sporsmal`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Schriftlicher Ausdruck
// ============================================================================

export const CHAPTER_TYSK_3_10_2: TextbookChapter = {
  id: 'tysk-3-10-2',
  courseId: 'tysk-3',
  chapterNumber: '10.2',
  title: 'Schriftlicher Ausdruck',
  subtitle: 'Essay og artikkel',
  description: 'Mestre skriftlig produksjon til eksamen: essay, artikler og argumenterende tekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive strukturerte essay og artikler',
    'argumentere overbevisende pa tysk',
    'bruke variert sprak og riktig stil',
  ],
  content: [
    {
      id: 'tysk-3-10-2-intro',
      type: 'text',
      content: `## Schriftlicher Ausdruck - Skriftlig eksamen

Den skriftlige delen av tyskeksamen tester din evne til a uttrykke deg klart, strukturert og grammatisk korrekt. Vanlige oppgavetyper er:

- **Erörterung** (drofting/essay)
- **Stellungnahme** (standpunkttekst)
- **Artikel** (avisartikkel)
- **Kommentar** (kommentar)
- **Brief** (formelt/uformelt brev)

Uansett oppgavetype gjelder: god struktur, variert sprak og tydelig argumentasjon.`,
    },
    {
      id: 'tysk-3-10-2-text-1',
      type: 'text',
      content: `## Essay-struktur (Erörterung)

**Dialektisk erortering (pro/contra):**

**1. Einleitung (10-15%)**
- Hook: Fang leserens oppmerksomhet
- Bakgrunn: Kort kontekst
- Tese/problemstilling: Hva skal droftels?

**2. Hauptteil (70-80%)**
- Pro-argumenter (minst 2-3)
- Contra-argumenter (minst 2-3)
- Hvert argument: Pastanden + Begrunnelse + Eksempel

**3. Schluss (10-15%)**
- Oppsummering
- Egen konklusjon/mening
- Eventuelt fremtidsperspektiv`,
    },
    {
      id: 'tysk-3-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Planlegge et essay',
      problem: `Oppgave: "Sollte der Fuhrerschein erst ab 18 Jahren erlaubt sein? Erortern Sie Pro und Contra."

Lag en disposisjon for dette essayet.`,
      solution: `**Disposisjon:**

**1. Einleitung**
- Hook: Fakta om ungdom og trafikk
- Kontekst: Debatt om alder for forerkort
- Problemstilling: Bor aldersgrensen heves?

**2. Pro-argumenter (for 18 ar):**
- Argument 1: Hoyre modenhet og ansvarsfolelse
  - Begrunnelse: Hjernen er mer utviklet
  - Eksempel: Statistikk om ulykker
- Argument 2: Mindre fare for risikoatferd
  - Begrunnelse: Tenåringer tar storre risiko
  - Eksempel: Forskning pa impulskontroll

**3. Contra-argumenter (mot 18 ar):**
- Argument 1: Behovet for mobilitet pa landet
  - Begrunnelse: Darlig kollektivtilbud
  - Eksempel: Ungdom ma komme seg til skole/jobb
- Argument 2: Tidligere erfaring = tryggere sjaforer
  - Begrunnelse: Ovelse gjor mester
  - Eksempel: Folgebilsystemer

**4. Schluss**
- Oppsummering av hovedargumenter
- Egen mening: Kompromiss med gradvis frigivelse?
- Avsluttende tanke`,
    },
    {
      id: 'tysk-3-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en disposisjon for ett av disse essay-temaene.',
        subTasks: [
          { label: 'a', task: 'Thema: "Sollten Smartphones in der Schule verboten werden?"', solution: 'Einleitung: Smarttelefoners rolle i skolen. Pro: Distraksjon, cybermobbing, ulikhet. Contra: Laeringsverktoy, tilgjengelighet, forberedelse til digital verden. Schluss: Regulering fremfor forbud?' },
          { label: 'b', task: 'Thema: "Ist ein Jahr Auslandsaufenthalt fur junge Menschen sinnvoll?"', solution: 'Einleitung: Trendmed gap year. Pro: Spraklaering, personlig utvikling, kulturforstaelse. Contra: Kostnad, forsinkelse i utdanning, kultursjokk. Schluss: Verdifullt for mange, men ikke for alle.' },
        ],
        solution: 'Disposisjoner bor ha: innledning med problemstilling, 2-3 pro-argumenter, 2-3 contra-argumenter, og konklusjon med egen mening.',
        hints: ['Hvert argument bor ha: pastanden, begrunnelse, eksempel', 'Vær balansert i pro og contra'],
      },
    },
    {
      id: 'tysk-3-10-2-text-2',
      type: 'text',
      content: `## Argumentasjonsteknikk

**Oppbygging av et argument:**
1. **These (påstand):** Hva mener du?
2. **Begrundung (begrunnelse):** Hvorfor?
3. **Beispiel/Beleg (eksempel/belegg):** Bevis

**Koblings- og overgangsord:**

| Funksjon | Tyske uttrykk |
|----------|---------------|
| Legge til | ausserdem, daruber hinaus, ferner, zusatzlich |
| Motsetning | jedoch, allerdings, dennoch, hingegen, andererseits |
| Arsak | denn, weil, da, namlich |
| Konsekvens | deshalb, daher, folglich, somit |
| Eksempel | zum Beispiel, beispielsweise, etwa, wie |
| Oppsummering | zusammenfassend, abschliessend, insgesamt |`,
    },
    {
      id: 'tysk-3-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive et argument',
      problem: `Skriv ut dette argumentet fullstendig:

**Tema:** Bor sosiale medier ha aldersgrense pa 16 ar?
**Pastand:** Ja, aldersgrensen bor heves.
**Begrunnelse:** (fyll ut)
**Eksempel:** (fyll ut)`,
      solution: `**Fullstendig argument:**

*Ein gewichtiges Argument fur die Anhebung der Altersgrenze auf 16 Jahre ist der Schutz der psychischen Gesundheit von Kindern und Jugendlichen.*

*[These] Soziale Medien sollten erst ab 16 Jahren erlaubt sein.*

*[Begrundung] Der Grund dafur ist, dass jungere Kinder besonders anfallig fur negative Auswirkungen sozialer Medien sind. Ihr Selbstbild ist noch nicht gefestigt, und sie sind starker von Likes und Kommentaren abhangig. Ausserdem fehlt ihnen oft die Medienkompetenz, um Fake News und Manipulation zu erkennen.*

*[Beispiel] Dies belegen zahlreiche Studien: Laut einer Untersuchung der Universitat Cambridge haben Kinder unter 16 Jahren, die taglich mehr als drei Stunden in sozialen Medien verbringen, ein deutlich erhohtes Risiko fur Angstzustande und Depressionen.*`,
    },
    {
      id: 'tysk-3-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv ut et fullstendig argument (These + Begrundung + Beispiel) pa tysk.',
        subTasks: [
          { label: 'a', task: 'Tema: Uniform i skolen. Pastand: Uniformer bor innfores.', solution: 'These: Schuluniformen sollten eingefuhrt werden. Begrundung: Sie reduzieren sozialen Druck und Mobbing wegen Kleidung. Beispiel: In Grossbritannien, wo Uniformen ublich sind, berichten Schuler von weniger Stress uber Kleidung.' },
          { label: 'b', task: 'Tema: Kjottfri dag i kantiner. Pastand: Det bor innfores en kjottfri dag.', solution: 'These: In Kantinen sollte ein fleischfreier Tag eingefuhrt werden. Begrundung: Fleischproduktion verursacht hohe CO2-Emissionen. Ein Tag weniger Fleisch pro Woche konnte Millionen Tonnen CO2 einsparen. Beispiel: Die Stadt Freiburg hat dies eingefuhrt und berichtet von positiven Reaktionen.' },
        ],
        solution: 'Hvert argument skal ha: 1) Klar påstand, 2) Logisk begrunnelse, 3) Konkret eksempel eller statistikk.',
        hints: ['Bruk koblingsord', 'Vaer spesifikk i eksemplet', 'Unnga svake formuleringer som "ich glaube"'],
      },
    },
    {
      id: 'tysk-3-10-2-text-3',
      type: 'text',
      content: `## Skrivetips for eksamen

**Innledning - fang oppmerksomheten:**
- Retorisk sporsmal: "Wer hat nicht schon einmal...?"
- Overraskende fakta: "Wussten Sie, dass...?"
- Sitat: "Schon Goethe sagte..."
- Aktuell hendelse: "Die jungsten Ereignisse zeigen..."

**Avslutning - la et sterkt inntrykk:**
- Ikke bare gjenta innledningen
- Gi din egen velgrunnede mening
- Eventuelt: appell eller fremtidsperspektiv

**Språklig variasjon:**
- Unnga gjentakelser (bruk synonymer)
- Varier setningslengde
- Bruk aktiv OG passiv
- Inkluder noen retoriske virkemidler`,
    },
    {
      id: 'tysk-3-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Fullstendig kort essay',
      problem: `Skriv et kort essay (ca. 200 ord) om: "Sollte das Wahlrecht auf 16 Jahre gesenkt werden?"`,
      solution: `**Eksempel-essay:**

*Klimakrise, Bildungspolitik, Rentenreform - Entscheidungen, die heute getroffen werden, betreffen vor allem junge Menschen. Dennoch durfen 16- und 17-Jahrige in den meisten Bundeslandern nicht wahlen. Sollte sich das andern?*

*Befurworter einer Absenkung des Wahlalters argumentieren, dass Jugendliche direkt von politischen Entscheidungen betroffen sind. Mit 16 zahlt man bereits Steuern und tragt strafrechtliche Verantwortung. Warum sollte man dann nicht mitbestimmen durfen? Daruber hinaus zeigen Bewegungen wie Fridays for Future, dass junge Menschen sehr wohl politisch interessiert und engagiert sind.*

*Kritiker hingegen bezweifeln die politische Reife von 16-Jahrigen. Das Gehirn sei noch nicht vollstandig entwickelt, und viele Jugendliche liessen sich leicht von populistischen Parolen beeinflussen. Ausserdem habe man bei anderen wichtigen Entscheidungen - etwa dem Autofahren oder Alkoholkonsum - ebenfalls Altersgrenzen.*

*Meiner Ansicht nach uberwiegen die Argumente fur eine Absenkung. Junge Menschen verdienen eine Stimme, denn sie werden am langsten mit den Konsequenzen politischer Entscheidungen leben. Mit begleitender politischer Bildung kann das Wahlrecht ab 16 die Demokratie bereichern.*`,
    },
    {
      id: 'tysk-3-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (150-200 ord) om ett av temaene. Inkluder innledning, pro/contra-argumenter og konklusjon.',
        subTasks: [
          { label: 'a', task: 'Sollten alle offentlichen Verkehrsmittel kostenlos sein?', solution: 'Essay som droftler gratiskollektivtransport med argumenter for (miljo, tilgjengelighet) og mot (finansiering, overbelastning), og avslutter med egen mening.' },
        ],
        solution: 'Et godt essay har: fengslende innledning, balansert drofting med minst 2 argumenter pa hver side, og en tydelig egen konklusjon.',
        hints: ['Bruk disposisjonen for', 'Husk overganger mellom avsnitt', 'Avslutt med din egen begrunnede mening'],
      },
    },
    {
      id: 'tysk-3-10-2-tip-1',
      type: 'tip',
      title: 'Tidsdisponering pa eksamen',
      content: `For et essay pa 45-60 minutter:
- 5-10 min: Les oppgaven, brainstorm, lag disposisjon
- 30-40 min: Skriv essayet
- 5-10 min: Les gjennom, rett feil, forbedre formuleringer

Husk: En god disposisjon sparer tid under skrivingen!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Mündliche Kommunikation
// ============================================================================

export const CHAPTER_TYSK_3_10_3: TextbookChapter = {
  id: 'tysk-3-10-3',
  courseId: 'tysk-3',
  chapterNumber: '10.3',
  title: 'Mündliche Kommunikation',
  subtitle: 'Samtale og presentasjon',
  description: 'Forbered deg til muntlig eksamen med samtaleteknikker, presentasjonsferdigheter og diskusjonsstrategier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'delta aktivt i samtaler og diskusjoner',
    'presentere et emne muntlig',
    'handtere uforutsette situasjoner i samtale',
  ],
  content: [
    {
      id: 'tysk-3-10-3-intro',
      type: 'text',
      content: `## Mündliche Prüfung - Muntlig eksamen

Den muntlige eksamen i tysk tester din evne til a kommunisere spontant og sammenhengende. Typiske oppgaver:

1. **Prasentation** - Presentere et forberedt emne
2. **Gesprach** - Samtale med sensor om et tema
3. **Diskussion** - Diskutere med medkandidat
4. **Bildbeschreibung** - Beskrive og tolke et bilde
5. **Rollenspiel** - Rollespill i en gitt situasjon

Vurderingskriterier: Innhold, spraklig korrekthet, flyt, ordforrad, uttale.`,
    },
    {
      id: 'tysk-3-10-3-text-1',
      type: 'text',
      content: `## Samtaleteknikker

**Starte en samtale:**
- "Zu diesem Thema mochte ich sagen, dass..."
- "Meiner Meinung nach..."
- "Ich finde es interessant, dass..."

**Holde samtalen i gang:**
- "Das erinnert mich an..."
- "In diesem Zusammenhang..."
- "Ein gutes Beispiel dafur ist..."

**Reagere pa samtalepartner:**
- "Da stimme ich Ihnen zu."
- "Das sehe ich etwas anders, weil..."
- "Das ist ein interessanter Punkt."

**Vinne tid til a tenke:**
- "Das ist eine gute Frage. Lassen Sie mich kurz uberlegen..."
- "Nun, wenn ich daruber nachdenke..."
- "Das ist nicht ganz einfach zu beantworten..."`,
    },
    {
      id: 'tysk-3-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Diskusjonsteknikk',
      problem: `Du er i en diskusjon om "Ist ein Tempolimit auf Autobahnen sinnvoll?" (fartsgrense pa motorvei).

Vis hvordan du:
a) Uttrykker enighet med motpartens poeng
b) Uttrykker hoflig uenighet
c) Ber om avklaring`,
      solution: `**a) Uttrykke enighet:**
- "Da haben Sie absolut recht. Die Sicherheit ist ein wichtiger Aspekt."
- "Ich teile Ihre Meinung, dass Unfalle ein ernstes Problem sind."
- "Das ist ein sehr guter Punkt. Das hatte ich nicht bedacht."

**b) Uttrykke hoflig uenighet:**
- "Ich verstehe Ihren Standpunkt, aber ich sehe das etwas anders. Studien zeigen namlich, dass..."
- "Da bin ich anderer Meinung. Meiner Ansicht nach..."
- "Das mag stimmen, allerdings muss man auch bedenken, dass..."

**c) Be om avklaring:**
- "Konnten Sie das bitte naher erlautern?"
- "Was genau meinen Sie mit...?"
- "Ich bin mir nicht sicher, ob ich Sie richtig verstanden habe. Meinen Sie, dass...?"`,
    },
    {
      id: 'tysk-3-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ov pa a reagere i en diskusjon. Skriv passende svar pa tysk.',
        subTasks: [
          { label: 'a', task: 'Samtalepartneren sier: "Ich glaube, soziale Medien sind nur schadlich fur Jugendliche." Uttrykk hoflig uenighet.', solution: 'Ich verstehe Ihre Bedenken, aber ich sehe das differenzierter. Soziale Medien konnen auch positive Effekte haben, zum Beispiel fur die Vernetzung und den Informationsaustausch.' },
          { label: 'b', task: 'Du forstar ikke et ord samtalepartneren bruker. Be om avklaring.', solution: 'Entschuldigung, konnten Sie mir erklaren, was Sie mit diesem Begriff meinen? / Ich bin mir nicht sicher, ob ich das Wort richtig verstanden habe.' },
          { label: 'c', task: 'Du trenger tid til a tenke. Hva sier du?', solution: 'Das ist eine interessante Frage. Lassen Sie mich kurz daruber nachdenken... / Nun, das ist nicht ganz einfach zu beantworten...' },
        ],
        solution: 'a) Hoflig uenighet + begrunnelse b) Be om forklaring c) Vinn tid med frasersom "Lassen Sie mich nachdenken"',
        hints: ['Vaer alltid hoflig, selv ved uenighet', 'Bruk "Konjunktiv II" for mer hoflige formuleringer'],
      },
    },
    {
      id: 'tysk-3-10-3-text-2',
      type: 'text',
      content: `## Bildbeschreibung (Bildebeskrivelse)

**Struktur:**
1. **Ubersicht:** Hva slags bilde er det? Hovedmotiv?
2. **Details:** Beskrive personer, objekter, handlinger
3. **Interpretation:** Hva formidles? Budskap?

**Nyttige fraser:**

| Fase | Tysk uttrykk |
|------|--------------|
| Oversikt | Auf dem Bild sieht man... / Das Bild zeigt... |
| Plassering | Im Vordergrund / Im Hintergrund / In der Mitte |
| Beskrive | Es scheint, als ob... / Man kann erkennen, dass... |
| Tolke | Das Bild konnte bedeuten... / Vielleicht will der Fotograf zeigen... |`,
    },
    {
      id: 'tysk-3-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Bildebeskrivelse',
      problem: `Beskriv dette bildet (tenk deg et bilde av et fullsatt torg med demonstranter som holder klimaplakater):

**Stikkord:** Demonstration, Klimaschutz, junge Menschen, Plakate, Stadt`,
      solution: `**Eksempel pa bildebeskrivelse:**

*"Auf diesem Bild sieht man eine grosse Menschenmenge auf einem stadtischen Platz. Es handelt sich offensichtlich um eine Demonstration zum Thema Klimaschutz.*

*Im Vordergrund sind mehrere junge Menschen zu sehen, die Plakate hochhalten. Auf einem Schild steht 'There is no Planet B', auf einem anderen 'Fridays for Future'. Die Demonstranten scheinen uberwiegend Jugendliche und junge Erwachsene zu sein.*

*Im Hintergrund erkennt man historische Gebaude, was darauf hindeutet, dass die Demonstration im Stadtzentrum stattfindet. Das Wetter scheint sonnig zu sein, und die Stimmung wirkt friedlich, aber engagiert.*

*Das Bild vermittelt den Eindruck einer lebendigen demokratischen Bewegung. Es zeigt, dass junge Menschen bereit sind, fur ihre Uberzeugungen auf die Strasse zu gehen. Der Fotograf wollte moglicherweise die Starke und Entschlossenheit der Klimabewegung dokumentieren."*`,
    },
    {
      id: 'tysk-3-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ov pa bildebeskrivelse med disse stikkordene.',
        subTasks: [
          { label: 'a', task: 'Stikkord: Klassenzimmer, Schuler, Tablets, Lehrer, digitale Tafel. Beskriv bildet pa tysk (5-7 setninger).', solution: 'Das Bild zeigt ein modernes Klassenzimmer. Im Vordergrund sitzen Schuler an Tischen und arbeiten mit Tablets. Der Lehrer steht an einer digitalen Tafel und erklart etwas. Im Hintergrund sieht man Fenster und Pflanzen. Das Bild zeigt, wie Digitalisierung den Unterricht verandert.' },
        ],
        solution: 'En god bildebeskrivelse har: oversikt, detaljer (forgrunn/bakgrunn), og tolkning.',
        hints: ['Bruk "man sieht", "es scheint", "im Vordergrund/Hintergrund"', 'Avslutt med tolkning'],
      },
    },
    {
      id: 'tysk-3-10-3-text-3',
      type: 'text',
      content: `## Håndtere vanskelige situasjoner

**Nar du ikke forstar:**
- "Entschuldigung, konnten Sie das bitte wiederholen?"
- "Ich habe das leider nicht ganz verstanden."
- "Was meinen Sie genau mit...?"

**Nar du mangler ord:**
- "Das Wort fallt mir gerade nicht ein, aber ich meine..."
- "Auf Deutsch sagt man das vielleicht... oder?"
- "Ich weiss nicht, wie man das nennt, aber es ist..."

**Nar du gjor feil:**
- Rett deg selv raskt og fortsett
- "Entschuldigung, ich meinte..."
- Ikke heng deg opp i feilen

**Nar du trenger tid:**
- "Das ist eine interessante Frage..."
- "Wenn ich daruber nachdenke..."
- "Es gibt verschiedene Aspekte zu bedenken..."`,
    },
    {
      id: 'tysk-3-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Spontan tale',
      problem: `Du far et uventet sporsmal pa muntlig eksamen: "Was wurden Sie tun, wenn Sie Bildungsminister/in waren?"

Hvordan svarer du nar du trenger tid til a tenke?`,
      solution: `**Eksempel pa svar:**

*"Oh, das ist eine interessante Frage! Lassen Sie mich kurz daruber nachdenken...*

*[Kort pause]*

*Also, wenn ich Bildungsminister ware, wurde ich mich auf mehrere Bereiche konzentrieren.*

*Erstens wurde ich die Digitalisierung der Schulen vorantreiben. In der heutigen Welt ist digitale Kompetenz unverzichtbar, und viele Schulen sind noch nicht ausreichend ausgestattet.*

*Zweitens wurde ich mehr in die Lehrerausbildung investieren. Gute Lehrer sind das Wichtigste fur eine gute Bildung.*

*Und drittens wurde ich das Ganztagsschulangebot ausbauen, um Chancengleichheit zu fordern.*

*Naturlich sind das nur erste Gedanken, und in der Realitat gibt es viele Faktoren zu berucksichtigen..."*

**Teknikker brukt:**
- Anerkjenner sporsmalet ("interessante Frage")
- Kjoper tid ("Lassen Sie mich nachdenken")
- Strukturerer svaret ("Erstens, zweitens, drittens")
- Avslutter med nyanse ("naturlich gibt es viele Faktoren")`,
    },
    {
      id: 'tysk-3-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ov pa a svare spontant. Planlegg et kort svar (1 minutt) pa disse sporsmalene.',
        subTasks: [
          { label: 'a', task: 'Was ist der grosste Vorteil, mehrere Sprachen zu sprechen?', solution: 'Man kann mit mehr Menschen kommunizieren, andere Kulturen besser verstehen, und hat bessere Berufschancen. Ausserdem zeigen Studien, dass Mehrsprachigkeit gut fur das Gehirn ist.' },
          { label: 'b', task: 'Welche Erfindung hat die Welt am meisten verandert?', solution: 'Meiner Meinung nach das Internet. Es hat die Kommunikation, den Zugang zu Informationen und die Art, wie wir arbeiten, grundlegend verandert. Allerdings hat es auch Schattenseiten wie Datenschutzprobleme.' },
        ],
        solution: 'Gode svar har: innledning/mening, 2-3 argumenter/punkter, og en kort avslutning.',
        hints: ['Bruk strukturord: erstens, zweitens', 'Gi konkrete eksempler', 'Avslutt med en oppsummering eller nyanse'],
      },
    },
    {
      id: 'tysk-3-10-3-tip-1',
      type: 'tip',
      title: 'Tips for muntlig eksamen',
      content: `1. **Forberedelse:** Ov med en partner eller ta opp deg selv
2. **Uttale:** Snakk tydelig, ikke for fort
3. **Kroppssprak:** Se sensor i oynene, sitt/sta avslappet
4. **Feil:** Alle gjor feil - rett deg selv og fortsett
5. **Engasjement:** Vis interesse for temaet
6. **Struktur:** Bruk signalord for a organisere svaret`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Wiederholung
// ============================================================================

export const CHAPTER_TYSK_3_10_4: TextbookChapter = {
  id: 'tysk-3-10-4',
  courseId: 'tysk-3',
  chapterNumber: '10.4',
  title: 'Wiederholung',
  subtitle: 'Repetisjon av niva 3',
  description: 'Grundig repetisjon av alle viktige temaer fra Tysk niva 3 med fokus pa eksamensforberedelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'repetere og konsolidere grammatikk fra niva 3',
    'ove pa varierte eksamensoppgaver',
    'identifisere og jobbe med egne svakheter',
  ],
  content: [
    {
      id: 'tysk-3-10-4-intro',
      type: 'text',
      content: `## Repetisjon - Niva 3

Dette kapitlet gir en grundig gjennomgang av de viktigste temaene fra Tysk niva 3. Bruk det til a:

- Identifisere omrader du ma jobbe mer med
- Ove pa eksamensrelevante oppgaver
- Friske opp grammatikk og ordforrad
- Fa oversikt for eksamen

**Hovedomrader:**
1. Grammatikk (Konjunktiv, komplekse setninger, passiv)
2. Ordforrad (akademisk, fagsprak, idiomer)
3. Teksttyper (essay, analyse, presentasjon)
4. Kommunikasjon (diskusjon, argumentasjon)`,
    },
    {
      id: 'tysk-3-10-4-text-1',
      type: 'text',
      content: `## Grammatikk-oppsummering

**Konjunktiv I (Indirekte tale):**
| Person | sein | haben |
|--------|------|-------|
| ich | sei | habe |
| er/sie/es | sei | habe |
| wir | seien | haben |
| sie/Sie | seien | haben |

Bruk: Gjengi hva noen har sagt
Eksempel: Er sagt, er sei krank.

**Konjunktiv II (Irrealis/hoflige former):**
| Verb | Konjunktiv II |
|------|---------------|
| sein | ware |
| haben | hatte |
| konnen | konnte |
| mussen | musste |
| werden | wurde |

Bruk: Onsker, hypotetiske situasjoner, hoflige foresporsler
Eksempel: Ich wurde gerne... / Wenn ich reich ware...`,
    },
    {
      id: 'tysk-3-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Grammatikktest',
      problem: `Test deg selv pa Konjunktiv:

1. Gjor om til indirekte tale (Konj. I):
   "Ich habe keine Zeit." -> Er sagt, er ___ keine Zeit.

2. Gjor om til Konjunktiv II:
   "Ich bin reich." -> Wenn ich reich ___, ___ ich...

3. Skriv hoflig:
   "Konnen Sie mir helfen?" -> ___ Sie mir helfen?`,
      solution: `**Losninger:**

1. **habe** (Konjunktiv I av "haben")
   Er sagt, er **habe** keine Zeit.

2. **ware** / **wurde**
   Wenn ich reich **ware**, **wurde** ich ein grosses Haus kaufen.

3. **Konnten** (Konjunktiv II av "konnen")
   **Konnten** Sie mir bitte helfen?

**Husk:**
- Konjunktiv I for indirekte tale (journalistikk, akademisk)
- Konjunktiv II for hypotetisk/hoflig
- Ved tvil om form: bruk "wurde" + infinitiv`,
    },
    {
      id: 'tysk-3-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grammatikkrepetisjon: Fyll ut riktig form.',
        subTasks: [
          { label: 'a', task: 'Die Ministerin sagt, die Wirtschaft ___ (wachsen - Konj. I) stark.', solution: 'wachse' },
          { label: 'b', task: 'Wenn ich mehr Zeit ___ (haben - Konj. II), ___ (werden) ich Deutsch lernen.', solution: 'hatte, wurde' },
          { label: 'c', task: '___ (Konnen - Konj. II) Sie mir bitte den Weg zeigen?', solution: 'Konnten' },
          { label: 'd', task: 'Die Zeitung berichtet, es ___ (geben - Konj. I) neue Entwicklungen.', solution: 'gebe' },
        ],
        solution: 'a) wachse b) hatte, wurde c) Konnten d) gebe',
        hints: ['Konjunktiv I: stamme + e/est/e/en', 'Konjunktiv II: ofte med umlaut', 'Ved sammenfallmed indikativ, bruk Konj. II'],
      },
    },
    {
      id: 'tysk-3-10-4-text-2',
      type: 'text',
      content: `## Setningsstruktur-oppsummering

**Leddsetninger (Nebensatze):**
Verbet star til slutt!
- weil, dass, wenn, obwohl, als, bevor, nachdem, wahrend

Eksempel: Ich lerne Deutsch, **weil** ich in Deutschland studieren **mochte**.

**Relativsetninger:**
| Kasus | m | f | n | pl |
|-------|---|---|---|-----|
| Nom | der | die | das | die |
| Akk | den | die | das | die |
| Dat | dem | der | dem | denen |
| Gen | dessen | deren | dessen | deren |

Eksempel: Der Mann, **der** dort steht,... / Das Buch, **das** ich lese,...

**Infinitivkonstruksjoner:**
- um...zu: Ich lerne, **um** gute Noten **zu** bekommen.
- ohne...zu: Er ging, **ohne** etwas **zu** sagen.
- anstatt...zu: Sie spielt, **anstatt zu** lernen.`,
    },
    {
      id: 'tysk-3-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Komplekse setninger',
      problem: `Kombiner setningene med riktig konjunksjon eller relativpronomen:

1. Ich lerne Deutsch. Ich will in Deutschland arbeiten. (um...zu)
2. Das ist der Student. Ich habe ihm geholfen. (Relativpronomen)
3. Sie ging nach Hause. Es regnete stark. (obwohl)`,
      solution: `**Losninger:**

1. **Ich lerne Deutsch, um in Deutschland zu arbeiten.**
   (um + zu + infinitiv for formalssetning)

2. **Das ist der Student, dem ich geholfen habe.**
   (Dativ maskulin "dem" fordi "helfen" krever dativ)

3. **Sie ging nach Hause, obwohl es stark regnete.**
   (Obwohl = selv om; verbet "regnete" til slutt i bisetningen)

**Alternative:**
- Obwohl es stark regnete, ging sie nach Hause.
  (Nar bisetningen kommer forst, starter hovedsetningen med verbet)`,
    },
    {
      id: 'tysk-3-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kombiner setningene med angitt konjunksjon/pronomen.',
        subTasks: [
          { label: 'a', task: 'Er arbeitet viel. Er will Karriere machen. (um...zu)', solution: 'Er arbeitet viel, um Karriere zu machen.' },
          { label: 'b', task: 'Das ist die Frau. Ich habe ihr Buch gelesen. (deren)', solution: 'Das ist die Frau, deren Buch ich gelesen habe.' },
          { label: 'c', task: 'Ich bleibe zu Hause. Das Wetter ist schlecht. (weil)', solution: 'Ich bleibe zu Hause, weil das Wetter schlecht ist.' },
          { label: 'd', task: 'Er verliess das Haus. Er sagte nichts. (ohne...zu)', solution: 'Er verliess das Haus, ohne etwas zu sagen.' },
        ],
        solution: 'a) um Karriere zu machen b) deren Buch c) weil das Wetter schlecht ist d) ohne etwas zu sagen',
        hints: ['Husk verbets plassering i bisetninger', 'Relativpronomen boyes etter kasus og kjonn'],
      },
    },
    {
      id: 'tysk-3-10-4-text-3',
      type: 'text',
      content: `## Ordforrad-oppsummering

**Akademiske nokkelbegreper:**
| Tysk | Norsk |
|------|-------|
| die Forschung | forskning |
| die Studie | studie |
| die Hypothese | hypotese |
| das Ergebnis | resultat |
| die Schlussfolgerung | konklusjon |
| die Analyse | analyse |
| der Faktor | faktor |
| die Methode | metode |

**Diskusjonsord:**
| Tysk | Norsk |
|------|-------|
| meiner Meinung nach | etter min mening |
| einerseits... andererseits | pa den ene siden... pa den andre siden |
| im Gegensatz zu | i motsetning til |
| zusammenfassend | oppsummerende |
| folglich / daher | folaktig / derfor |
| dennoch / trotzdem | likevel |`,
    },
    {
      id: 'tysk-3-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Integrert oppgave',
      problem: `Skriv et kort avsnitt (5-6 setninger) som kombinerer:
- Minst én Konjunktiv II-setning
- Minst én relativsetning
- Akademisk ordforrad

Tema: Fordelene med a laere fremmedsprak`,
      solution: `**Eksempel:**

*Wenn ich uber die Vorteile des Fremdsprachenlernens nachdenke, fallen mir mehrere Aspekte ein. Studien, **die** in den letzten Jahren durchgefuhrt **wurden**, zeigen, dass Mehrsprachigkeit positive Auswirkungen auf das Gehirn hat. **Wenn** ich nicht Deutsch gelernt **hatte**, **hatte** ich viele interessante Texte nicht lesen konnen. Daruber hinaus offnen Fremdsprachen Turen zu neuen Kulturen, **deren** Verstandnis unseren Horizont erweitert. Zusammenfassend lasst sich sagen, dass Sprachkenntnisse in unserer globalisierten Welt unverzichtbar sind.*

**Elementer brukt:**
- Konjunktiv II: "Wenn ich... gelernt hatte, hatte ich..."
- Relativsetninger: "die... wurden", "deren Verstandnis"
- Akademisk ordforrad: Studien, Auswirkungen, zusammenfassend`,
    },
    {
      id: 'tysk-3-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Eksamensoppgave: Skriv en kort tekst (100-150 ord) om ett av temaene. Bruk variert grammatikk og akademisk stil.',
        subTasks: [
          { label: 'a', task: 'Thema: Die Bedeutung der Digitalisierung fur die Bildung', solution: 'En god besvarelse inkluderer: innledning med tese, argumenter med eksempler, variertgrammatikk (bisetninger, Konjunktiv, passiv), og konklusjon.' },
        ],
        solution: 'Teksten bor ha tydelig struktur, variert sprak (relativsetninger, Konjunktiv, passiv), akademisk ordforrad og en klar konklusjon.',
        hints: ['Planlegg for du skriver', 'Bruk signalord for struktur', 'Varier setningslengde og -struktur'],
      },
    },
    {
      id: 'tysk-3-10-4-text-4',
      type: 'text',
      content: `## Sjekkliste for eksamen

**Grammatikk:**
- [ ] Konjunktiv I og II
- [ ] Relativsetninger (alle kasus)
- [ ] Leddsetninger med korrekt ordstilling
- [ ] Passiv (alle tempus)
- [ ] Infinitivkonstruksjoner

**Ordforrad:**
- [ ] Akademiske uttrykk
- [ ] Diskusjonsord og koblingsord
- [ ] Fagterminologi fra pensumtekster

**Ferdigheter:**
- [ ] Leseforstaelse (skumlesing, detaljlesing)
- [ ] Essay med klar struktur
- [ ] Muntlig presentasjon
- [ ] Diskusjonsteknikk

**Forberedelse:**
- [ ] Ov med tidligere eksamensoppgaver
- [ ] Tidsstyring (hvor lang tid per oppgave?)
- [ ] Lesinnstruksjonene noyaktig`,
    },
    {
      id: 'tysk-3-10-4-note-1',
      type: 'note',
      title: 'Siste tips for eksamen',
      content: `1. **Les oppgavene noyaktig** - svar pa det som blir spurt
2. **Disponer tiden** - ikke bruk for lang tid pa én oppgave
3. **Skriv strukturert** - innledning, hoveddel, avslutning
4. **Varier spraket** - vis at du behersker ulike strukturer
5. **Sjekk gjennom** - rett opplagte feil
6. **Hold roen** - gjor ditt beste og vaer stolt!

Lykke til med eksamen! Viel Erfolg!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_3_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_TYSK_3_9_1,
  CHAPTER_TYSK_3_9_2,
  CHAPTER_TYSK_3_9_3,
  CHAPTER_TYSK_3_9_4,
  CHAPTER_TYSK_3_10_1,
  CHAPTER_TYSK_3_10_2,
  CHAPTER_TYSK_3_10_3,
  CHAPTER_TYSK_3_10_4,
];

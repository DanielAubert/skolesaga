# Bokskjelett: TDT4110 Informasjonsteknologi grunnkurs (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet 2014–2019: 10 eksamenssittinger + 7 offisielle
> løsningsforslag/sensorveiledninger). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke i sin helhet her. Alle kodeeksempler, tall,
> variabelnavn, domener og oppgavetekster i den ferdige boka skal være
> **nyskrevne** (opphavsrett): kodemønstrene er standard prosedyre-Python-idiomer,
> men innpakningen er forfatterens egen.
>
> **Plassering:** TDT4110 er NTNUs store innføringsemne i programmering — motstykket
> til UiOs IN1000/IN1900 — tatt av flere tusen ingeniør- og realfagsstudenter hvert
> år. Emnet er **rent prosedyreorientert** (Python med funksjoner, lister, ordbøker,
> filer — **ingen objektorientering/klasser**) og har i tillegg en stor
> **teori-/flervalgsdel om datamaskinens virkemåte** (~25 %) som ingen av UiO-emnene
> har. Faglig ligger kodesiden nærmest **IN1900** (prosedyre-Python); denne bokas
> skjelett er derfor modellert på `in1900/SKJELETT.md`, med to store tilpasninger:
> (1) **all OOP er fjernet** — TDT4110 er utenfor-pensum for klasser; (2) en **egen
> IT-teoridel (Del 8)** som IN1900 ikke har.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4110` |
| Tittel | **TDT4110 Informasjonsteknologi grunnkurs (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU — visningsnavn «TDT4110 Informasjonsteknologi grunnkurs» |
| Arketype | Regnefag (kvantitativt fag med fast, gjentakende oppgavemal) |
| Antall kapitler | **39** (1 eksamenskart + 35 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 630 min ≈ 44 timer** |
| Quiz totalt | **662** (krav ≥500 — GULV) |
| Flashcards totalt | **558** (krav ≥500 — GULV) |

**Pitch (ett avsnitt):** TDT4110 har hatt en påfallende stabil eksamensmal siden
2014. Vurderingen er **én 4-timers skriftlig skoleeksamen (100 %), hjelpemiddelkode
D** (bare enkel kalkulator), karakter A–F. Settet er **fast tredelt** hvert eneste
år: **Oppgave 1 — teori/flervalg (~25 %)** om datamaskinens virkemåte (maskinvare,
tallrepresentasjon, nettverk, sikkerhet, komprimering, systemutvikling); **en
kodeforståelsesoppgave (~15–20 %)** — «hva skrives ut/returneres», «forklar med én
setning hva funksjonen gjør» og «fyll inn manglende kodelinje»; og **1–2
programmeringsoppgaver (~50–60 %)** som bygger en mini-applikasjon i et domene.
Domeneinnpakningen roterer år for år (reisetid, valg/stemmetelling, Yatzy, priskrig,
auksjon, oppskrifter, fartsmåling …), men den underliggende
**programmeringsøvelsen er identisk**: *les fil → bygg 2D-tabell/ordbok → analysér
(finn maks/tell/gruppér/sortér) → skriv ut eller lagre*, med gjenbruk av egne
funksjoner, input-validering og `try/except`. Denne boka driller de tre ferdighetene
hver for seg — teori-flervalg, kodesporing, og prosedyreorientert kodeproduksjon —
og bygger den store programmeringskjeden opp ledd for ledd i en egen drilldel.

**Kritisk stilregel (gjelder HELE boka):**
1. **Rent prosedyreorientert — INGEN klasser/OOP.** Hele emnet løses med `for`/`while`,
   `if/elif/else`, funksjoner, lister, 2D-lister, ordbøker, tupler, strenger og filer.
   Ingen `class`, `__init__`, arv eller metoder. (Dette er den store forskjellen mot
   UiOs IN1000. Der IN1900-skjelettet har fem klassekapitler, har denne boka **null**.)
   Boka skal ikke nevne OOP som en løsningsvei i noen fasit.
2. **Snarveier er TILLATT og brukes i fasit.** I motsetning til IN1000 (som teller
   manuelt for å trene grunnkonstruksjonene) bruker NTNU-fasiten fritt `max`, `min`,
   `sum`, `sorted`, `set`, `.index`, `.count`, `enumerate`. Boka skal vise **begge**:
   først den eksplisitte løkkevarianten (så konstruksjonen sitter), deretter
   snarveien — og sidestille dem («begge gir full pott»). TDT4110 er pragmatisk «få
   jobben gjort».
3. **KONSISHET vurderes eksplisitt.** Sensor gjentar hvert år: «**Svar kort og klart.
   Er svaret uklart eller lengre enn nødvendig, trekker dette ned.**» Dette gjelder
   særlig teorisvar og sjanger C («forklar med én setning hva funksjonen gjør») —
   svaret skal si *hva* funksjonen oppnår, i **én setning**, ikke *hvordan* koden
   virker linje for linje. Hvert kapittel som trener forklaringer skal ha en `warning`
   om at ordrike/upresise svar trekker ned, og alle fasit-forklaringer i boka skal
   selv være mønstergyldig korte (én setning).
4. **Gjenbruk av egne funksjoner forventes.** De store programmeringsoppgavene er
   kjeder der senere deloppgaver **bygger på** de tidligere (analysefunksjonen bruker
   parse-funksjonen; `main` kaller alt). Sensor belønner gjenbruk framfor kopiert
   kode. Alle kjede-eksempler i boka skal demonstrere gjenbruk eksplisitt.
5. **Flere korrekte løsninger sidestilles.** Fasiten sier eksplisitt at den viste
   løsningen «bare er én av måtene». Alternative løsninger med rett idé gir full pott;
   riktig struktur/mønster belønnes selv med små indeks-/kantfeil. Dette skal stå i
   Del 0 og prege ALLE løsningsforslag (margnotater om hva som gir uttelling).
6. **ROBUSTHET gir toppscore.** Enkelte deloppgaver har eksplisitte fullscore-krav:
   ikke anta fast kolonne-/radrekkefølge (finn indeks dynamisk med
   `data[0].index(navn)`), håndtér tomtilfeller/«ikke funnet» (returnér `[]`/`None`),
   ikke returnér duplikater (`if x not in liste`/`set`), håndtér vilkårlig
   input-rekkefølge. Del 7.6 er et eget robusthets-drillkapittel, og hvert
   analysekapittel skal ha en robusthetsdeloppgave.
7. **Ingen minuspoeng på flervalg (fra 2015).** Blankt = 0 = feil → **kryss alltid
   av**, også ved gjetting. (H2014 hadde −½ for feil; det er historikk.) Dette skal
   stå i Del 0 og i teori-drillen.
8. **Norske ELLER engelske navn går like bra.** Fasiten blander (`les_inn_bilinfo`,
   `item_winner`, `sek_paa_benken`). Boka bruker overveiende **norske** funksjons- og
   variabelnavn, men nevner at engelsk er like gyldig.

**Kritisk ærlighetsregel (pensumdrift etter 2019):** Arkivet stopper i 2019. NTNUs
gjeldende emnebeskrivelse nevner nå også **NumPy og Matplotlib** (for beregning/
visualisering) og **KI som kodehjelp**, og K2019-løsningsforslaget varsler at
**f-strenger** kommer inn i pensum. Ingen av disse er belagt i det historiske
arkivet. Boka skal:
- Bruke **f-strenger** i formatert utskrift (kap. 3.4) SIDE OM SIDE med den eldre
  `.format()`/`.rjust()`-stilen arkivet viser, og merke f-strenger `(verifiser mot
  gjeldende pensum — varslet inn 2019)`.
- Ha ett kort **«Bør kjenne til»-tillegg i Del 8** (egen `tip`/`collapsible`, IKKE
  eget kapittel) om NumPy/Matplotlib og KI-som-kodehjelp, tydelig merket
  `(verifiser mot gjeldende pensum — ikke i arkivet 2014–2019)`. Ikke bygg drill
  eller prøver på dette; det er et differensierende randtema til toppkarakter.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes det
  sjelden matematiske symboler, men et presist konstruksjonsapparat. Blokken heter
  derfor **«API- og konstruksjonsliste»** og lister ALLE Python-konstruksjoner brukt
  i delkapitlet (funksjoner, metoder, idiomer) med presis oppførsel og et minimalt
  eksempel — f.eks. `range(start, stop, step)` (stopp **eksklusiv**),
  `d.get(k, 0)` (default hvis nøkkel mangler), `line.strip().split(';')`. Regelen
  «per delkapittel, ikke arv fra tidligere» beholdes. **Unntak:** de rene
  IT-teorikapitlene i Del 8 har lite kode — der brukes en `collapsible`
  **«Begreps- og enhetsliste»** i stedet (f.eks. bit/byte/prefikser, ACK, MAC,
  Nyquist-regelen), som forklarer alle fagbegreper og enheter kapitlet bruker.
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en bruker
  `theorem` for matematiske resultater, brukes den her for de faste kodemønstrene som
  skal sitte i ryggmargen: *les fil → 2D-tabell*, *teller med ordbok* (`d[k]=d.get(k,0)+1`),
  *finn beste*, *gruppér*, *input-valideringsløkke*, *rekursjon (grunntilfelle + steg)*,
  *iterativt binærsøk*, *boblesortering*. Disse er bokas «teoremer».
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene enten API-/konstruksjonsdefinisjoner (kodesiden — «hva gjør
  denne konstruksjonen») eller **fagbegreps-definisjoner** (teorisiden — «hva er en
  ALU / IPv6-adresse / Nyquist-regelen»). Del 8 bærer derfor uvanlig mange
  faktatunge flashcards.
- **Quiz kalibreres som eksamensdirekte MC.** To sjangre i eksamen ER flervalg:
  teori (Oppgave 1) og deler av kodeforståelsen. Quizbanken skal derfor være
  **direkte eksamenstrening**: (a) **teori-flervalg** (Del 8 — plausible, tett
  formulerte distraktorer der ett ord/tall skiller riktig fra galt, som de reelle),
  og (b) **kodesporing** («hva skrives ut/returneres?», Del 5 og gjennomgående).
  Fordi begge er billige, hyppige eksamenspoeng siktes quiz **høyt** (662).
  `options[0]` = riktig svar (runtime stokker).
- **Drill i temadelen, ikke bare til slutt.** Som IN1900/ECON1310: drillkapitlene
  ligger inne i sine temadeler (kodesporing 5.1, forklar/fyll-inn 5.3, teori-flervalg
  8.7) og hele Del 7 er én stor programmeringskjede-drill — fordi hver sjanger er en
  75–100 %-gjenganger som må drilles umiddelbart. Del 9 beholder de komplette
  tredelte øvingseksamenene.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): kodeverktøyene bygges opp i den
rekkefølgen de forutsetter hverandre, deretter samles alt i programmeringskjede-drillen
(Del 7), og IT-teorien (Del 8) står som en selvstendig blokk (den forutsetter ikke
kodedelen). Frekvensen styrer *omfanget*: de 100 %-temaene får flere kapitler + egne
drillkapitler; lavfrekvente temaer får kompakte kapitler.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Python-grunnlaget: variabler, betingelser og løkker | 4 | Alle 100 % (nivå 1) og fundamentet alt annet står på + bærer kodesporing. |
| 2 | Funksjoner | 2 | **Funksjoner 100 %** (nivå 1) — hele programmeringsdelen er funksjonsskriving; gjenbruk forventes. |
| 3 | Lister, 2D-lister, ordbøker, tupler og strenger | 6 | Lister/2D-lister/strenger 100 %, ordbøker 80 %, tupler 50 % (nivå 1) — den dominerende datastrukturfamilien. |
| 4 | Filbehandling og robusthet | 3 | **Filbehandling 100 %** (nivå 1) — alltid første ledd i kjeden; `try/except` 60 %, `pickle` 30 %. |
| 5 | Kodesporing og rekursjon | 3 | **Kodesporing 100 %** + rekursjon 60 % + NTNU-sjangrene C/D (nivå 1/2) → to drillkapitler + rekursjonsteori. |
| 6 | Algoritmer: binærsøk, sortering og kompleksitet | 3 | Sortering 70 %, binærsøk 30 %, kompleksitet/Big-O 40 % (nivå 2/3) — testes eksplisitt (skiller TDT4110 fra IN1000). |
| 7 | Programmeringskjeden (drilldel) | 7 | **Kjeden 100 %, ~50–60 % av eksamen** (nivå 1) — bokas store øvingssjanger, bygget ledd for ledd + robusthet. |
| 8 | IT-teori: maskinvare, tall, nettverk, sikkerhet | 7 | **Teori ~25 %; maskinvare + tall ~100 %** (nivå 1) — egen del ingen UiO-emne har; 6 teori + 1 flervalgsdrill. |
| 9 | Eksamenstrening | 3 | 3 komplette **tredelte** øvingseksamener (teori + kodeforståelse + programmering). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i
siste del. Her ligger drillkapitlene i temadelene (jf. §1-avviket), og
IT-teoridelen (Del 8) er lagt **etter** kodedelen selv om den er avhengighetsfri —
fordi den er en selvstendig blokk studenten kan lese uavhengig, og fordi den utgjør
en egen «modus» (flervalgspugg) som er lettere å drille samlet. Del 9 beholder de
komplette tredelte simuleringene.

---

## 3. Sjangerkatalog (A–J)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. **Tre familier:** teori/flervalg (A), kodeforståelse (B–D) og
kodeskriving (E–J).

| Kode | Sjanger | Familie | Form | Hyppighet/vekt |
|---|---|---|---|---|
| **A** | Teori/flervalg om datateknologi | Teori | MC (ett riktig) | 100 %; ~20 spm; **~25 %** av settet |
| **B** | «Hva skrives ut / returneres?» — kodesporing | Kodeforståelse | fritekst/MC | 100 %; 1–3 % per deloppgave |
| **C** | «Forklar med én setning hva funksjonen gjør» | Kodeforståelse | fritekst (kort) | 60 %; ~2 % — **distinktiv NTNU-sjanger** |
| **D** | «Fyll inn manglende kodelinje» (velg alternativ) | Kodeforståelse | MC | 50 %; 1–3 % |
| **E** | Filinnlesing → 2D-tabell/streng (ledd 1) | Kodeskriving | fritekst-kode | 100 %; 5–10 % |
| **F** | Parsing og datatransformasjon (ledd 2) | Kodeskriving | fritekst-kode | 100 %; 5–10 % |
| **G** | Analyse: finn maks/tell/gruppér/sortér/rangér (kjernen) | Kodeskriving | fritekst-kode | 100 %; 5–10 % per deloppgave — tyngdepunktet |
| **H** | Input-validering og meny/`main`-løkke | Kodeskriving | fritekst-kode | 80 % / 50 %; 5–10 % |
| **I** | Utskrift/lagring (formatert utskrift, fil, `pickle`) | Kodeskriving | fritekst-kode | 70 %; 5–10 % |
| **J** | Rekursjon / binærsøk (spore + implementere) | Begge | fritekst/MC | 60 % / 30 %; 1–5 % |

**Merk:** E→F→G→H→I er *leddene i den samme store programmeringskjeden*
(sjanger E–I opptrer nesten alltid som deloppgaver a–f i én sammenhengende oppgave).
Del 7 driller hvert ledd og deretter hele kjeden. A er teoridelen (Del 8). B/C/D er
kodeforståelsen (Del 5). J (rekursjon/binærsøk) spores i Del 5 og implementeres i Del 6.

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt** erstatter
«Innholdskontrakt» (eksakte konstruksjoner/idiomer kapitlet SKAL lære, med presis
oppførsel). For de rene teorikapitlene (Del 8) heter feltet **Begrepskontrakt**.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Alle prerequisites er **interne** id-er (boka er et grunnkurs uten forkunnskapskrav i
programmering). Kryssbok-lenker brukes bare der en eksisterende bok i systemet dekker
en forkunnskap bedre — lenk KUN til kapitler som finnes; hvis usikker, hold lenken
intern. Del 8 (IT-teori) har ingen kodeforkunnskaper.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4110

- **id:** `tdt4110-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t, kode D, tredelt sett), temafrekvensene, sjangerkatalogen A–J og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2014–2019. Skal gjengi: (i) **formen** — én avsluttende skriftlig skoleeksamen, **4 timer**, teller **100 %**, karakter A–F, hjelpemiddelkode **D** (bare enkel kalkulator), Python 3, bokmål/nynorsk; obligatoriske øvinger må være godkjent for å gå opp; (ii) den **faste tredelte makrostrukturen** hvert år: Oppgave 1 teori/flervalg **~25 %**, kodeforståelse **~15–20 %**, programmering **~50–60 %** (1–2 oppgaver) — rekkefølgen på kodeforståelse varierer (Oppgave 2 eller 4), men alle tre byggeklossene er der hvert år; (iii) **temafrekvens-tabellen** (kodesiden: funksjoner/løkker/lister/2D-lister/filbehandling/strenger/kodesporing/konvertering alle **100 %**, ordbøker ~80 %, input-validering ~80 %, finn-maks ~80 %, sortering 70 %, formatert utskrift 70 %, rekursjon 60 %, `try/except` 60 %, forklar-én-setning 60 %, tupler 50 %, meny/main 50 %, fyll-inn-linje 50 %, random 50 %, pickle/binærsøk 30 %; teorisiden: maskinvare **~100 %**, tallrepresentasjon **~100 %**, nettverk 90 %, sikkerhet 80 %, komprimering/sampling 80 %, systemutvikling 50 %, algoritmekompleksitet 40 %); (iv) at **domenet roterer** (reisetid, valg, Yatzy, priskrig, auksjon, oppskrifter, fartsmåling …) men **programmeringsøvelsen er identisk** — les fil → tabell/ordbok → analysér → skriv/lagre; (v) **sensors metaregler** (skriv kort hva du antar; **svar kort og klart — uklart/for langt trekker ned**; ingen minuspoeng på flervalg fra 2015 → kryss alltid; prosentvekting per deloppgave er oppgitt → disponér tiden); (vi) **poenggivingen** — flere korrekte løsninger sidestilles, riktig struktur belønnes selv med småfeil, gjenbruk av egne funksjoner belønnes, robusthet gir toppscore; (vii) **pensumdriften** etter 2019 (f-strenger varslet inn; NumPy/Matplotlib/KI i gjeldende emnebeskrivelse — `verifiser`).
- **Kodekontrakt:** Sjangerkatalogen A–J (fra §3) presenteres som studentens sjekkliste med typisk vekt. Pluss **prognosen for neste eksamen**: Oppgave 1 ≈ 20 teori-flervalg (maskinvare + tall + nettverk + sikkerhet + komprimering/sampling, muligens gjeninntog av systemutvikling/kompleksitet); kodeforståelse ≈ 4–6 deloppgaver («hva skrives ut/returneres» for løkker/rekursjon/boolsk logikk/slicing/dict + 1–2 «forklar med én setning» + 1–2 «fyll inn kodelinje»); programmering ≈ 1–2 oppgaver i nytt domene: kjede av 5–8 funksjoner (`les_fil` → parsing → tabell/ordbok → analysefunksjoner → input/meny → utskrift/lagring), med gjenbruk og `try/except`. Avslutt med **leseplan**: Del 1–4 + Del 7 (programmeringskjeden) + Del 5 (kodesporing) + Del 8 (teori) er «må perfekt»; Del 6 (algoritmer) «må kunne»; nivå 3-momentene (pickle, binærsøk-implementasjon, systemutvikling, NumPy/KI) merkes.
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og vekting 25/17/58 — sett opp et tidsbudsjett når teoridelen er ~20 flervalg og programmeringen er to oppgaver à 25–30 %».
- **Typiske feil:** Metafeilene — la et flervalg stå blankt (0 = feil); bruke for lang tid på et lavvektet teorispørsmål; skrive lange, ordrike forklaringer der én setning kreves; hoppe rett på programmeringen uten å lese hele settet først.
- **Quiz: 14 · Flashcards: 14** (form, frekvenser, metaregler, sjangerkatalogen)

---

### Del 1 — Python-grunnlaget: variabler, betingelser og løkker *(alle: PERFEKT)*

> Fundamentet alt annet står på, og samtidig teorigrunnlaget for kodesporing
> (sjanger B): hvert kapittel introduserer en konstruksjon OG dens vanligste
> kodesporingsfelle. Alle temaene har 100 % frekvens.

#### Kapittel 1.1: Variabler, datatyper og konvertering

- **id:** `tdt4110-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Tall, tekst og boolske verdier; heltalls- vs. flyttallsdeling; og `int()`/`float()`/`str()`-konvertering — som er første fallgruve ved fil- og input-data.
- **Eksamensbelegg:** Grunnlag for hele kodesiden; datatype-konvertering har **100 %** frekvens (fildata og `input()` leses alltid som streng og må konverteres). Heltallsdeling `//` og modulo `%` er faste kodesporingsfeller (sjanger B) og brukes i tidskonvertering (sek ↔ h:m:s). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `int`/`float`/`str`/`bool`; tilordning og augmentert tilordning (`+=`, `*=`); aritmetikk `+ - * /` (`/` gir alltid float), `//` (heltallsdeling, avrunder **nedover** også for negative), `%` (modulo), `**` (potens); presedens (`**` > unær `-` > `*`/`/`/`//`/`%` > `+`/`-`); **konvertering** `int('42')`, `float('3.14')`, `str(7)`, `int(3.9)` trunkerer mot 0, `round()` (bankers avrunding); `type(x)`; `.isdigit()` som forhåndssjekk før `int()`. Til bruk og sporing.
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet): «Hva skriver `print(17 // 5, 17 % 5, 17 / 5)` ut, og hva blir resultatet av `int('3') + int('4')` mot `'3' + '4'`?»
- **Typiske feil:** Glemme `int()`/`float()` ved fil-/input-lesing → sammenligning/aritmetikk på streng feiler (§5.1 i analysen); blande `/` og `//` (§5.9); tro at `//` avrunder mot 0 for negative tall; legge sammen strenger i stedet for tall (`'3'+'4'` → `'34'`).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.2: Boolsk logikk og betingelser

- **id:** `tdt4110-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4110-1-1` · **kapitteltype:** teori
- **description:** Sammenligning, `and`/`or`/`not`, nøstede uttrykk og `if/elif/else` — kjernen i både betingelseskoding og den boolske kodesporingen.
- **Eksamensbelegg:** Betingelser (100 %) og nøstede boolske uttrykk som argument til en funksjon er en fast kodesporingssjanger (B — «`myst(val1, val2)`» som grener på sannhetsverdier). Grunnlag for karaktersetting med grenser (`if score >= 90:`). Prioritet: **perfekt**.
- **Kodekontrakt:** Sammenligningsoperatorer (`== != < <= > >=`) og kjeding (`0 <= x < 100`); `and`/`or`/`not` og presedens (`not` > `and` > `or`); «truthiness» (0, `''`, `[]`, `{}` er usanne); `if / elif / else`, nøstede `if`; kortslutning (`and`/`or` evaluerer ikke høyre side unødig); returnere boolsk direkte (`return a > b`). Til bruk og sporing.
- **Oppgavesjangre:** B + betingelseskoding. Mønstereksempel: «Hva returnerer `test(x, y)` for `test(4, 4)`, `test(4, 0)` og `test(0, 4)` når `return (x > 0 and y > 0) or (x == y)`?»
- **Typiske feil:** Feil presedens i blandede `and`/`or`-uttrykk; bruke `=` i stedet for `==`; nøste `if/elif` feil slik at en gren aldri nås; glemme at `elif` bare sjekkes hvis foregående var usann.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.3: Løkker — for, while og range

- **id:** `tdt4110-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4110-1-2` · **kapitteltype:** teori
- **description:** For- og while-løkker, `range` med tre argumenter, nøstede løkker og løkketerminering — ryggraden i all koding og i kodesporing.
- **Eksamensbelegg:** Løkker har **100 %** frekvens og er den vanligste kodesporingssjangeren (B): kvadrér annethvert element (`range(1, len, 2)`), akkumulér sum/produkt, tell forekomster, «finn minste `n` som deler både `t1` og `t2`» (`while`). Nøstede løkker over 2D-tabeller er kjernen i programmeringsdelen. Prioritet: **perfekt**.
- **Kodekontrakt:** `for e in sekvens`, `for i in range(start, stop, step)` (**stopp eksklusiv**, negativ step, `range(1, len(x), 2)` for annethvert); `while betingelse`; `break`/`continue`; nøstede løkker og løkkevariabel-avhengige grenser (`for j in range(i)`); akkumulatormønster (`s = 0; for ...: s += ...`); tellermønster; `enumerate(seq)` → `(indeks, verdi)`; `for i in range(len(x))` for indeksaksess; løkketerminering (blir betingelsen falsk etter endelig antall iterasjoner?). Til bruk og sporing.
- **Oppgavesjangre:** B + D (fyll-inn løkkegrense). Mønstereksempler: (B) «Hva skriver ytre `for i in range(1, 4):` med indre `for j in range(i): print(i*j, end=' ')` ut?»; (B, while) «Fra `n = 12`, hva returnerer løkka `while n % 2 == 0: n = n // 2`?»
- **Typiske feil:** Av-med-én i `range` og indeksering (§5.5); glemme at `range`-stopp er eksklusiv; feil grense i nøstede løkker; `range(1, len(x), 2)` vs. `range(0, len(x), 2)` for annethvert; uendelig `while` når tellevariabelen ikke endres.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 1.4: Input og input-valideringsløkke

- **id:** `tdt4110-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4110-1-3` · **kapitteltype:** teori
- **description:** Lese brukerinput, konvertere til tall, og løkken som spør på nytt til verdien er lovlig — et fast ledd i programmeringsoppgavene.
- **Eksamensbelegg:** Input-valideringsløkke i ~80 % av settene (`readTime`, `enter_line`, `les_gyldig_vitneskilt`): spør på nytt til input er innenfor lovlig intervall/lengde/format, med feilmelding. Grunnlag for menyoppgaven (Del 7.7). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom):** `input(melding)` (returnerer **alltid streng**); `int(input(...))`/`float(input(...))`; **input-valideringsløkke**: `verdi = input(...); while ikke_lovlig(verdi): print('feil'); verdi = input(...)` (eller `while True: … if lovlig: break`); typiske gyldighetstester (`while len(tekst) != lengde:`, `while time < 0 or time > 23:`, `.isdigit()` før konvertering); riktig **sentinel** for «tom input» (`while navn != '':`); returnér den validerte verdien. Til bruk.
- **Oppgavesjangre:** H (input-del). Mønstereksempel: «Skriv `les_time()` som spør brukeren om et klokkeslett-time og gjentar spørsmålet til svaret er et heltall mellom 0 og 23, og returnerer det.»
- **Typiske feil:** Spørre bare én gang i stedet for i en løkke (§5.8); glemme at `input()` gir streng (må konverteres, §5.1); feil sentinel for tom input; validere etter konvertering slik at `int('abc')` krasjer før sjekken (bruk `.isdigit()` først).
- **Quiz: 14 · Flashcards: 14**

---

### Del 2 — Funksjoner *(prioritet: PERFEKT)*

> Funksjoner har 100 % frekvens — hele programmeringsdelen er funksjonsskriving, og
> de store oppgavene er kjeder der funksjoner gjenbruker hverandre. To kapitler: ett
> om selve håndverket, ett om gjenbruk og meny/`main`-dispatcher.

#### Kapittel 2.1: Funksjoner: def, parametere og return

- **id:** `tdt4110-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-1-3` · **kapitteltype:** teori
- **description:** Definere funksjoner, sende parametere, returnere én eller flere verdier — grunnhåndverket alle programmeringsoppgaver hviler på.
- **Eksamensbelegg:** **100 %** frekvens; all programmering er å skrive funksjoner fra en kravbeskrivelse. Flere returverdier (`return a, b`) og default-argumenter (`def f(x='a')`) er faste innslag. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for funksjonsmalen):** `def navn(par1, par2):`, `return` (også `return a, b` → `x, y = f(...)`); posisjons- vs. nøkkelargumenter; **default-argumenter** (`def f(x, sep=';')`); funksjon uten `return` gir `None`; lokal vs. global variabel (tilordning inne i funksjon lager lokal variabel); dokumentere hva funksjonen gjør i én kort setning (kobling til sjanger C); at en funksjon skal gjøre **én ting** (så den kan gjenbrukes). Til bruk og sporing.
- **Oppgavesjangre:** E–I (all kodeskriving) + B (spore funksjonskall). Mønstereksempel: «Skriv `min_og_maks(liste)` som returnerer både minste og største verdi, og vis hvordan du pakker ut begge i kallet.»
- **Typiske feil:** Glemme `return` (funksjonen gir `None`); feil utpakking av flere returverdier; tro at endring av en lokal variabel endrer en global; skrive alt i én stor funksjon i stedet for små gjenbrukbare (straffer gjenbruks-uttelling).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Gjenbruk, hjelpefunksjoner og meny/`main`-dispatcher

- **id:** `tdt4110-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-2-1` · **kapitteltype:** teori
- **description:** Bygge kjeder der funksjoner kaller hverandre, bruke hjelpefunksjoner, og skrive en `main`/meny som binder alt sammen — slik sensor forventer det på de store oppgavene.
- **Eksamensbelegg:** Gjenbruk av egne funksjoner er et **eksplisitt sensorbelønnet** krav (senere deloppgaver bygger på tidligere: `make_result_list` bruker `list_from_string`; `main` kaller alt). Meny/`main`-dispatcher i ~50 % av settene (`menu`/`task`). Prioritet: **perfekt**.
- **Kodekontrakt:** Kalle egne funksjoner inne i andre funksjoner (kjede); hjelpefunksjoner (`beregn_verdi`, `finn_indeks`) for å unngå kopiert kode; **meny-/`main`-mønster** (`theorem`-idiom): `while True: valg = input(meny); if valg == '1': funk1(); elif ... elif valg == 'q': break`; når globale konstanter (`DISTRIKTER`) sendes som parameter vs. defineres globalt (begge greit i fasit); at `main` typisk leser fil én gang og sender tabellen videre til analysefunksjonene. Til bruk.
- **Oppgavesjangre:** H (meny) + kjede-struktur for E–I. Mønstereksempel: «Skriv en `hovedmeny(tabell)` som gjentatt viser valgene 1 (finn beste), 2 (skriv rapport), q (avslutt) og kaller riktig funksjon til brukeren velger q.»
- **Typiske feil:** Kopiere kode i stedet for å kalle en eksisterende funksjon (mister gjenbruks-uttelling); lese fila på nytt i hver funksjon i stedet for å sende tabellen videre; menyløkke som ikke terminerer riktig; glemme å konvertere menyvalget (streng vs. tall).
- **Quiz: 16 · Flashcards: 14**

---

### Del 3 — Lister, 2D-lister, ordbøker, tupler og strenger *(prioritet: PERFEKT)*

> Den dominerende datastrukturfamilien. Lister, 2D-lister og strenger har 100 %
> frekvens; ordbøker ~80 %; tupler ~50 %. 2D-lista (liste av lister fra fil) er selve
> bæreren i programmeringsoppgaven, og ordbok-telleren (`d.get(k,0)+1`) er et fast
> mønster.

#### Kapittel 3.1: Lister og listeoperasjoner

- **id:** `tdt4110-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4110-1-3` · **kapitteltype:** teori
- **description:** Lister, indeksering, slicing og de vanligste metodene — og snarveiene `max`/`min`/`sum`/`sorted` som fasiten bruker fritt.
- **Eksamensbelegg:** **100 %** frekvens; grunnlaget for 2D-tabeller og for alle analyseoppgaver. Slicing med steg (`s[::-1]`, annethvert) er en fast kodesporingssjanger (B). Snarveiene `max`/`sum`/`sorted` er tillatt og brukt i fasit. Prioritet: **perfekt**.
- **Kodekontrakt:** `[...]`, `append`, `insert`, `pop`, `remove`, `index`, `count`, `sort`, `reverse`, `+` (konkatenering), `*` (gjentakelse); indeksering `x[i]`, negativ `x[-k]`; slicing `x[a:b]` (b eksklusiv, gir **liste**), `x[a:b:s]`, `x[::-1]`; `len`, `in`-test, `list(range(...))`; **snarveier**: `max(x)`, `min(x)`, `sum(x)`, `sorted(x)`, `x.index(v)` — vist ved siden av eksplisitt løkkevariant. Til bruk og sporing.
- **Oppgavesjangre:** B (slicing/mutasjon) + G (analyse). Mønstereksempel (B): «La `tall = [8, 3, 5, 1, 9]`. Hva blir `tall[::-1]`, `tall[1::2]` og `sum(tall[:3])`?»
- **Typiske feil:** Tro at slicing gir et element (den gir en liste); av-én på slice-slutt (b eksklusiv); `range(1, len(x), 2)` vs. `range(0, ...)` for annethvert (§5.5); glemme at negativ indeks teller fra `-1`; forveksle `+` (konkatenering) med elementvis addisjon.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.2: 2D-lister (tabeller)

- **id:** `tdt4110-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4110-3-1` · **kapitteltype:** teori
- **description:** Liste av lister som en tabell med rader og kolonner — den sentrale datastrukturen i programmeringsoppgaven, inkludert dynamisk kolonneoppslag.
- **Eksamensbelegg:** **100 %** frekvens — «liste av lister fra fil» er den dominerende strukturen. Kodesporing over matriser (transponér, legg nullramme rundt, snu 0/1) er en fast B-sjanger. **Dynamisk kolonneoppslag** (`tabell[0].index(navn)`) er et eksplisitt fullscore-krav (ikke anta fast kolonnerekkefølge). Prioritet: **perfekt**.
- **Kodekontrakt:** Nøstet liste `tabell[i][j]` (rad i, kolonne j); bygge tabell radvis (`tabell.append(rad)`); iterere over rader (`for rad in tabell:`) og over indekser (`for i in range(len(tabell)):`); **kolonneuttrekk** (`[rad[k] for rad in tabell]` eller løkke); **dynamisk kolonneindeks** (`k = tabell[0].index('pris')`) — kjernen i robusthet; transponering (bytt rad/kolonne); antall rader `len(tabell)`, antall kolonner `len(tabell[0])`. Til bruk og sporing.
- **Oppgavesjangre:** B (matrisesporing) + E/G (tabellbygging og -analyse). Mønstereksempel (G, robust): «Tabellen `data` har en overskriftsrad. Skriv `hent_kolonne(data, navn)` som finner kolonneindeksen dynamisk og returnerer verdiene i den kolonnen — uten å anta hvilken posisjon `navn` har.»
- **Typiske feil:** Anta fast kolonne-/radrekkefølge (§5.4) — regne med at «pris» er kolonne 1; forveksle rad- og kolonneindeks (`tabell[j][i]`); iterere over rader når man vil ha kolonner; av-én når man ser på par av rader (`range(len-1)`).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.3: Strenger: split, strip, join, slicing og bygging

- **id:** `tdt4110-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4110-3-1` · **kapitteltype:** teori
- **description:** Strengmetodene som parser hver fillinje og bygger utdata — `split`, `strip`, `join`, slicing og test-metodene.
- **Eksamensbelegg:** **100 %** frekvens; parsing av linjer (`.strip().split(sep)`) er første ledd i hver programmeringsoppgave, og strengslicing med steg er en fast kodesporingssjanger (B — «The Matrix», «JULENISSEN»). `.split()`-separator og `.strip()` er de to hyppigste fildatafeilene. Prioritet: **perfekt**.
- **Kodekontrakt:** `.split(sep)` (uten argument: på vilkårlig blanktegn — håndterer variabelt antall mellomrom), `.strip()`/`.strip(char)`, `.join(liste)`, `.replace(a, b)`, `.find`/`.index`, `.upper()`/`.lower()`, `.isdigit()`/`.isalpha()`/`.isalnum()`; indeksering/slicing som lister (`s[::-1]`, `s[1::2]`); bygging med `+` og med `.join`; `in`-test; `len(s)`. Til bruk og sporing.
- **Oppgavesjangre:** B (slicing) + F (parsing). Mønstereksempler: (B) «Hva gir `'PROGRAMMERING'[::2]` og `'nynorsk'[::-1]`?»; (F) «Skriv `tall_fra_linje(linje)` som gjør `'12 7 33'` om til lista `[12, 7, 33]` med `.split()` og `int()`.»
- **Typiske feil:** Glemme `.strip()` → `\n` henger med i siste felt (§5.2); feil separator i `.split()` — dele på `,` når det er tab, eller ikke håndtere variabelt antall mellomrom (§5.3); glemme `int()`/`float()` etter split (§5.1); tro at strenger kan endres «in place» (de er uforanderlige).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.4: Formatert utskrift

- **id:** `tdt4110-3-4` · **number:** 3.4 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4110-3-3` · **kapitteltype:** teori
- **description:** Pen kolonneutskrift og tidsformat — `rjust`/`ljust`/`center`, nullpadding, `format` og f-strenger, med `print`-detaljene sensor krever nøyaktig.
- **Eksamensbelegg:** Formatert utskrift i ~70 % av settene (pen tabellutskrift, tidsformat `hh:mm:ss`). Kodesporing der utskriften skal angis **nøyaktig** (mellomrom, `end=`) er en fast B-felle. **f-strenger** er varslet inn i pensum (2019) — vises ved siden av den eldre stilen. Prioritet: **perfekt** (utskrift) / bruk.
- **Kodekontrakt:** `print(a, b)` (skiller med mellomrom), `print(..., end='')` (ingen linjeskift), `print(..., sep=';')`; `.rjust(n)`/`.ljust(n)`/`.center(n)` for kolonnebredde; nullpadding (`str(t).zfill(2)` eller `f'{t:02d}'`); `.join(', ', liste)` for kommaseparert liste; **`.format()`** (`'{:5.2f}'.format(x)`) og **f-strenger** (`f'{x:5.2f}'`, `f'{navn:<10}'`, `f'{t:02d}'`) side om side; tidsformat `hh:mm:ss` fra sekunder. `warning` om at f-strenger er `(verifiser mot gjeldende pensum — varslet inn 2019)`; den eldre `.format()`/`rjust`-stilen er alltid gyldig. Til bruk og sporing.
- **Oppgavesjangre:** B (utskriftssporing) + I (formatert utskrift). Mønstereksempel (I): «Skriv `formater_tid(sek)` som gjør 3725 om til `'01:02:05'` med nullpadding.»
- **Typiske feil:** Glemme at `end=''` fjerner linjeskiftet; feil felt-bredde i `rjust`/f-streng; glemme mellomrommet `print` setter mellom argumenter; glemme nullpadding i tidsformat (`1:2:5` i stedet for `01:02:05`); blande heltalls-/flyttallsdeling i tidskonvertering (§5.9).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 3.5: Ordbøker som oppslag, teller og gruppering

- **id:** `tdt4110-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4110-3-1` · **kapitteltype:** teori
- **description:** Ordboka som oppslagstabell, forekomstteller (`d.get(k,0)+1`) og grupperingsstruktur (`{nøkkel: [elementer]}`) — de tre mønstrene analyseoppgavene bruker.
- **Eksamensbelegg:** Ordbøker i ~80 % av settene; **teller-mønsteret `d[k] = d.get(k, 0) + 1`** og gruppering (`all_recipes_with` → `{ingrediens: [retter]}`) er faste analysesjangre (G). Kodesporing over dict-teller er en B-sjanger. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiomer):** `{nøkkel: verdi}`, `d[k]` (oppslag), `d[k] = v` (innsetting/oppdatering), `k in d`; iterasjon `for k in d`, `d.keys()`, `d.values()`, `d.items()` → `(nøkkel, verdi)`; `d.get(k, default)`; **teller-idiom**: `d[k] = d.get(k, 0) + 1`; **grupperings-idiom**: `if k not in d: d[k] = []` deretter `d[k].append(v)` (eller `d.setdefault(k, []).append(v)`); bygge dict fra tabell (`make_dict`); nøkler er unike (ny tilordning overskriver). Til bruk og sporing.
- **Oppgavesjangre:** B (dict-teller-sporing) + G (tell/gruppér). Mønstereksempel (G): «Skriv `tell_ord(ord_liste)` som returnerer en ordbok fra ord til antall forekomster, med `d.get`-mønsteret; og `grupper_etter_forbokstav(ord_liste)` som returnerer `{bokstav: [ord]}`.»
- **Typiske feil:** Indeksere en dict med posisjon i stedet for nøkkel; slå opp en nøkkel som kanskje ikke finnes uten `.get`/`in` (→ `KeyError`); glemme å opprette den tomme lista før `append` i gruppering; anta at iterasjon over dict er alfabetisk sortert.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.6: Tupler

- **id:** `tdt4110-3-6` · **number:** 3.6 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4110-3-1` · **kapitteltype:** teori
- **description:** Uforanderlige tupler, parallelle tupler (score/bokstav/vekt) og pakking/utpakking — måten karaktergrenser og faste tabeller lagres på.
- **Eksamensbelegg:** Tupler i ~50 % av settene: karaktergrenser, øvelsesnavn og vekter lagret i **parallelle tupler**; flere returverdier som tuppel (`return a, b`). Prioritet: **kunne**.
- **Kodekontrakt:** `(a, b, c)`, `tuple(liste)`; uforanderlighet (kan ikke endres etter oppretting); indeksering/slicing som lister; **pakking/utpakking** (`x, y = par`, `return a, b`); **parallelle tupler** (`grenser = (90, 80, 70)`, `bokstaver = ('A', 'B', 'C')` — samme indeks hører sammen); iterere parallelt med `zip(grenser, bokstaver)` eller felles indeks; tuppel som ordboknøkkel (nevnes kort). Til bruk og sporing.
- **Oppgavesjangre:** B + G (karaktersetting med parallelle tupler). Mønstereksempel (G): «Gitt `grenser = (90, 80, 70, 60)` og `bokstaver = ('A','B','C','D')`: skriv `karakter(poeng)` som returnerer riktig bokstav (eller `'F'`) ved å gå gjennom grensene.»
- **Typiske feil:** Prøve å endre et tuppel (feiler — de er uforanderlige); forskyve indeksene mellom to parallelle tupler; glemme siste/laveste grense (`else: return 'F'`); feil utpakking (feil antall variabler).
- **Quiz: 12 · Flashcards: 12**

---

### Del 4 — Filbehandling og robusthet *(prioritet: PERFEKT)*

> Filbehandling har 100 % frekvens og er nesten alltid **første ledd** i
> programmeringskjeden (les fil → tabell/streng). Filskriving/`pickle` (30–70 %) og
> `try/except` rundt fil-I/O (60 %) hører med for toppscore.

#### Kapittel 4.1: Filinnlesing: les fil → 2D-tabell eller streng

- **id:** `tdt4110-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4110-3-2`, `tdt4110-3-3` · **kapitteltype:** teori
- **description:** Lese en tekstfil linje for linje og bygge en 2D-tabell (liste av lister) eller én streng — det kanoniske første leddet i hver programmeringsoppgave.
- **Eksamensbelegg:** **100 %** frekvens; `read_file`/`file_to_table`/`file_to_list` er nesten alltid deloppgave a. `for line in f: tabell.append(line.strip().split(sep))` er selve kjernemønsteret. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom):** `open(filnavn, 'r')` og `with open(filnavn) as f:` (lukker automatisk); `for line in f:` (én linje av gangen, inkl. `\n`); `.readline()` (hopp over header), `.readlines()`, `.read()`; **les→2D-tabell**: `tabell = []; for line in f: tabell.append(line.strip().split(sep)); return tabell`; typekonvertering av tallkolonner (`int()`/`float()`) under innlesing; `.close()` når man ikke bruker `with`. Til bruk.
- **Oppgavesjangre:** E (fil→tabell). Mønstereksempel (nyskrevet): «Filen `priser.txt` har linjer `butikk;vare;pris`. Skriv `les_tabell(filnavn)` som returnerer en 2D-liste der prisen er konvertert til flyttall og de øvrige feltene er strenger.»
- **Typiske feil:** Glemme `.strip()` (siste felt får med `\n`, §5.2); feil `.split()`-separator (§5.3); glemme `int()`/`float()` på tallkolonner (§5.1); glemme `.readline()` for å hoppe over en overskriftsrad (→ krasjer ved konvertering av headeren).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Filskriving og lagring (tekst og `pickle`)

- **id:** `tdt4110-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-4-1` · **kapitteltype:** teori
- **description:** Skrive resultater til tekstfil, og lagre en hel datastruktur til binærfil med `pickle` — det vanlige siste leddet i kjeden.
- **Eksamensbelegg:** Filskriving i flere sett (skriv rapport/resultat); `pickle` til binærfil i ~30 % (H2018 auksjon: lagre dict), og nevnt i funksjonshjelpen hvert år. Prioritet: **kunne** (tekstskriving) / **kjenne** (`pickle`).
- **Kodekontrakt:** `open(filnavn, 'w')` (overskriv) / `'a'` (legg til) + `.write(tekst)` (husk `'\n'` selv); formatert linje med f-streng/`.format()` før skriving; skrive en tabell/ordbok rad for rad; **binærfil**: `open(filnavn, 'wb')`/`'rb'`; `import pickle`; `pickle.dump(objekt, fil)` og `pickle.load(fil)` for å lagre/laste en hel dict eller liste. Til bruk.
- **Oppgavesjangre:** I (lagring). Mønstereksempel: «Skriv `lagre_resultat(tabell, filnavn)` som skriver hver rad som en semikolonseparert linje til fil, og `lagre_dict(d, filnavn)` som lagrer ordboka til binærfil med `pickle`.»
- **Typiske feil:** Glemme `'\n'` i `.write` (alt havner på én linje); glemme å åpne i binærmodus (`'wb'`/`'rb'`) for `pickle`; åpne i `'w'` når man mente `'a'` (overskriver eksisterende data); glemme å lukke fila (bruk `with`).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 4.3: Unntakshåndtering rundt fil-I/O

- **id:** `tdt4110-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-4-1` · **kapitteltype:** teori
- **description:** `try/except` rundt filoperasjoner: håndtere «fil finnes ikke», gi en feilmelding og returnere `None` i stedet for å krasje.
- **Eksamensbelegg:** `try/except` rundt filoperasjoner i ~60 % av settene; håndtér manglende fil, skriv feilmelding, returnér `None`. Robust fil-I/O er et toppscore-signal. Prioritet: **kunne**.
- **Kodekontrakt:** `try: … except: …` / `except FileNotFoundError:` / `except ValueError:` / `except FeilType as e:` / `else` / `finally`; de vanlige feiltypene ved fil/data: `FileNotFoundError` (filen finnes ikke), `ValueError` (`int('tekst')` på et felt som ikke er tall), `IndexError` (for få felt på en linje); mønster: `try: f = open(...); … return tabell; except FileNotFoundError: print('Fant ikke fila'); return None`; ikke skrive en tom/naken `except` som skjuler feil (nevnes at fasit trekker minimalt for det, men spesifikk er bedre). Til bruk.
- **Oppgavesjangre:** E/I med robusthet + moment i H. Mønstereksempel: «Utvid `les_tabell` med `try/except` slik at den skriver «Fant ikke filen: <navn>» og returnerer `None` når fila mangler, i stedet for å krasje.»
- **Typiske feil:** Ikke fange den riktige feiltypen; tom `except` som skjuler ekte feil; glemme å returnere `None`/en tom struktur i feilgrenen (kalleren krasjer da videre); plassere `try` for bredt slik at også logiske feil svelges.
- **Quiz: 16 · Flashcards: 16**

---

### Del 5 — Kodesporing og rekursjon *(kodesporing: PERFEKT)*

> Kodesporing (sjanger B) har 100 % frekvens og er kjernen i kodeforståelsesoppgaven.
> Rekursjon (60 %) spores hvert år, og de to distinktive NTNU-sjangrene — «forklar med
> én setning» (C) og «fyll inn manglende kodelinje» (D) — samles i eget drillkapittel.
> Kap. 5.1 og 5.3 er drill; 5.2 er rekursjonsteori.

#### Kapittel 5.1: DRILL — Kodesporing: «hva skrives ut / returneres?»

- **id:** `tdt4110-5-1` · **number:** 5.1 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4110-3-5` · **kapitteltype:** drill
- **description:** Systematisk drill i å kjøre kode mekanisk i hodet og angi resultatet nøyaktig — kjernen i kodeforståelsesoppgaven.
- **Eksamensbelegg:** Sjanger B i **hvert eneste** sett (100 %); 1–3 % per deloppgave, 4–6 deloppgaver. Faste konstruksjoner som spores: løkkemutasjon over liste (kvadrér annethvert, snu, sortér synkende), nøstede boolske uttrykk, strengslicing med steg (`s[::-1]`, annenhver), ordbok-teller (`d.get`), 2D-liste/matrise (transponér, nullramme, snu 0/1), `while` som finner et tall (minste `n` som deler `t1` og `t2`). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk sporingsmetode: 1) før en «tavle» over variablenes verdier linje for linje; 2) for løkker: skriv ut iterasjon for iterasjon, tell nøyaktig antall (`range`-stopp eksklusiv); 3) noter hva hvert `print` faktisk skriver, inkl. `end`/`sep`; 4) for lister/dict: hold styr på om du har element eller struktur; 5) for `return`: finn nøyaktig verdi og type. Fast fellekatalog som SKAL demonstreres: `range`-grenser og av-én, negativ indeksering, slicing gir liste, `s[::2]`/`s[::-1]`, `d.get`-teller, nøstede løkker, `and`/`or`-presedens, `while`-terminering. Gjennomsporet eksempel med margnotater om hva som gir uttelling (delvis riktig sporing teller).
- **Oppgavesjangre:** B. 12–18 oppgaver på eksamensnivå som roterer alle fellene: rene «hva skrives ut», «hva returnerer denne funksjonen», matrise-/dict-sporing. Alle med fullstendig sporingsløsning.
- **Typiske feil:** Hele fellekatalogen samlet: av-én i `range`/annethvert (§5.5); nøstede løkkegrenser; slicing gir liste ikke element; feil `and`/`or`-presedens; overse `end=''`; regne `//` feil for negative (§5.9).
- **Quiz: 30 · Flashcards: 12** (quiz er nesten utelukkende ren kodesporing — direkte eksamenstrening)

#### Kapittel 5.2: Rekursjon — spore og skrive

- **id:** `tdt4110-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4110-2-1` · **kapitteltype:** teori
- **description:** Forstå rekursjon gjennom de klassiske eksemplene — fakultet, gcd (Euklid), Fibonacci, tverrsum, potens — og både spore og skrive dem.
- **Eksamensbelegg:** Rekursjon i ~60 % av settene: «hva returnerer denne rekursive funksjonen?» (`myst(x, y)` med `%` = gcd, `myst(0, 1, 7)` = Fibonacci), og av og til skrive en rekursiv funksjon. **TDT4110 tester rekursjon eksplisitt** (til forskjell fra IN1000/IN1900 som nedtoner/utelater det). Prioritet: **kunne** (grensende til perfekt i kodesporing).
- **Kodekontrakt (`theorem`-idiom):** Rekursjonsmalen: **grunntilfelle** (base case — når stopper den?) + **rekursivt steg** (`return f(n-1)`-kall som nærmer seg grunntilfellet); fakultet (`if n <= 1: return 1; return n * fakultet(n-1)`); gcd/Euklid (`if b == 0: return a; return gcd(b, a % b)`); Fibonacci; tverrsum (`n % 10 + tverrsum(n // 10)`); rekursiv potens; hvordan spore et rekursivt kall (bygg kall-stakken utover, deretter fold sammen returverdiene innover). `warning`: feil grunntilfelle/steg → uendelig rekursjon; velge `f(n+1)` i stedet for `f(n-1)`.
- **Oppgavesjangre:** J (spore + skrive). Mønstereksempler: (spor) «Hva returnerer `myst(48, 18)` når `def myst(a, b): return a if b == 0 else myst(b, a % b)`?»; (skriv) «Skriv en rekursiv `tverrsum(n)` som summerer sifrene i et positivt heltall.»
- **Typiske feil:** Feil eller manglende grunntilfelle → uendelig rekursjon (§5.10); velge `myst(n+1)` i stedet for `myst(n-1)`; feil rekkefølge når man folder sammen returverdiene i sporingen; blande fakultet og potens.
- **Quiz: 22 · Flashcards: 16**

#### Kapittel 5.3: DRILL — «Forklar med én setning» og «fyll inn manglende kodelinje»

- **id:** `tdt4110-5-3` · **number:** 5.3 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-5-1` · **kapitteltype:** drill
- **description:** De to distinktive NTNU-sjangrene: beskrive en funksjons formål presist i én setning (C), og velge kodelinjen som får funksjonen til å virke (D).
- **Eksamensbelegg:** Sjanger C i ~60 % (forklar hva funksjonen gjør — «transponerer en matrise», «finner bokstaven det er flest av», «beregner fakultet rekursivt»), typisk 2 %; sjanger D i ~50 % (fyll inn `#KODE1` — primtallsjekk `if num % i == 0`, binærsøk `imid = (imin+imax)//2`, kvadrér annethvert `range(1, len, 2)`, palindrom `s[::-1]`), 1–3 %. Begge er **distinktive NTNU-sjangre** UiO-emnene mangler. **Konsishet vurderes eksplisitt** i C. Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** **Sjanger C**: 1) les hele funksjonen; 2) identifisér *hva* den returnerer/oppnår, ikke *hvordan*; 3) skriv én setning som starter med et verb («Funksjonen teller …», «returnerer …», «sorterer …»); 4) stryk alt om enkeltlinjer/løkkedetaljer. **Sjanger D**: 1) les spesifikasjonen (hva skal funksjonen gjøre?); 2) les løkkegrenser/`range`, betingelser og indeksering nøyaktig; 3) prøv hvert alternativ mentalt mot et lite eksempel; 4) velg linja som gir riktig oppførsel. Gjennomgått eksempel av hver sjanger med margnotater. `warning`: i C trekker ordrike/linje-for-linje-forklaringer ned — svaret skal være én presis setning.
- **Oppgavesjangre:** C + D. 12–16 oppgaver: halvparten «forklar med én setning» (med både en god og en dårlig (for lang) modellforklaring), halvparten «fyll inn kodelinje» (flervalg).
- **Typiske feil:** (C) Beskrive *hvordan* koden virker linje for linje i stedet for *hva* den oppnår (§5.13); for lang/upresis setning (trekker ned). (D) Velge en linje som virker plausibel men gir av-én-feil; ikke teste alternativet mot et konkret eksempel; overse at `range`-stopp er eksklusiv.
- **Quiz: 20 · Flashcards: 12** (quiz blander «hvilken setning beskriver funksjonen best?» og «hvilken linje mangler?» — direkte C/D-trening)

---

### Del 6 — Algoritmer: binærsøk, sortering og kompleksitet *(prioritet: KUNNE/KJENNE)*

> TDT4110 tester **søking, sortering og algoritmekompleksitet eksplisitt** — både i
> kodesporing/implementasjon og som teori — noe som skiller emnet fra IN1000. Sortering
> 70 %, binærsøk 30 %, kompleksitet/Big-O 40 %.

#### Kapittel 6.1: Sortering: boblesortering, `.sort()` og gitt `sort_list`

- **id:** `tdt4110-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4110-3-2` · **kapitteltype:** teori
- **description:** Sortere for hånd med boblesortering, bruke den innebygde `.sort()`/`sorted()`, og bruke en utlevert `sort_list` — for å rangere rader i en tabell.
- **Eksamensbelegg:** Sortering i ~70 % av settene: rangér butikker etter pris (`rank_stores` med boblesortering), ofte gis en `sort_list`-hjelpefunksjon. Både manuell boblesortering og snarveien `sorted(..., key=...)` er gyldige i fasit. Prioritet: **kunne**.
- **Kodekontrakt (`theorem`-idiom for boblesortering):** Boblesortering: `for i in range(len(x)-1): for j in range(len(x)-1-i): if x[j] > x[j+1]: x[j], x[j+1] = x[j+1], x[j]` (bytt naboer til ingen bytter gjenstår); bytte to elementer (`a, b = b, a`); `.sort()` (endrer lista in place) vs. `sorted(x)` (returnerer ny liste); `.sort(reverse=True)`; **sortering av 2D-tabell på en kolonne** med `sorted(tabell, key=lambda rad: rad[k])` eller ved å bruke en gitt `sort_list`; stabil sortering (nevnes kort). Vis boblesortering og snarveien side om side. Til bruk.
- **Oppgavesjangre:** G (rangér/sortér). Mønstereksempel: «Skriv `rangér_etter_pris(tabell)` som returnerer radene sortert stigende på priskolonnen — (a) med boblesortering, (b) med `sorted` og en `key`.»
- **Typiske feil:** Av-én i de doble løkkegrensene i boblesortering; glemme at `.sort()` endrer lista og returnerer `None` (så `x = x.sort()` gir `None`); sortere på feil kolonne; feil retning (stigende/synkende).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 6.2: Søking: sekvensielt søk og binærsøk

- **id:** `tdt4110-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-1-3` · **kapitteltype:** teori
- **description:** Lineært (sekvensielt) søk og iterativt binærsøk — hvordan de virker, forutsetningen om sortert liste, og å fylle inn/spore binærsøk-linjer.
- **Eksamensbelegg:** Binærsøk i ~30 % (H2018 2e: fyll inn binærsøk-linje; ellers i teori/kompleksitet). Testes både som «fyll inn manglende kodelinje» (D: `imid = (imin+imax)//2`) og som teori (forutsetning: **lista må være sortert**). Prioritet: **kjenne**.
- **Kodekontrakt (`theorem`-idiom for iterativt binærsøk):** Sekvensielt søk: `for i in range(len(x)): if x[i] == mål: return i` (returnér `-1` hvis ikke funnet); **iterativt binærsøk** (forutsetter sortert liste): `imin = 0; imax = len(x)-1; while imin <= imax: imid = (imin+imax)//2; if x[imid] == mål: return imid; elif x[imid] < mål: imin = imid+1; else: imax = imid-1; return -1`; hvorfor binærsøk krever sortert liste; forskjellen fra sekvensielt søk (halverer søkerommet hvert steg). Til bruk og fyll-inn.
- **Oppgavesjangre:** D (fyll inn binærsøk-linje) + J (implementér/spor). Mønstereksempel (D): «I binærsøk-funksjonen mangler `#KODE1` som skal oppdatere den nedre grensen. Velg riktig: `imin = imid + 1` / `imin = imid` / `imax = imid - 1` / `imin = imid - 1`.»
- **Typiske feil:** Feil oppdatering av `imin`/`imax` (av-én → uendelig løkke eller bommet element); glemme `+1`/`-1` på grensene; bruke binærsøk på en usortert liste; feil `while`-betingelse (`<` i stedet for `<=`).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Algoritmedefinisjon, pseudokode og kompleksitet (Big-O)

- **id:** `tdt4110-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-6-2` · **kapitteltype:** teori
- **description:** Hva en algoritme er, pseudokode, og kjøretidskompleksitet/Big-O — teoristoffet om binærsøk vs. sekvensielt søk og «brute force».
- **Eksamensbelegg:** Algoritmeteori i ~40 % (mest 2016–2017): algoritmedefinisjon, pseudokode, binærsøk O(log n) vs. sekvensielt søk O(n), «brute force»/travelling salesman. Testes som teori-flervalg (sjanger A). Prioritet: **kjenne** (kan komme igjen — merk trend).
- **Begrepskontrakt (Begreps- og enhetsliste):** Algoritme (entydig, endelig oppskrift som løser et problem); pseudokode; kjøretidskompleksitet og **Big-O** som vekst med input-størrelse `n`; O(1) konstant, O(log n) logaritmisk (binærsøk), O(n) lineært (sekvensielt søk), O(n²) kvadratisk (boblesortering), O(2ⁿ)/O(n!) eksponentiell/faktoriell («brute force», travelling salesman); hvorfor binærsøk er raskere enn sekvensielt (halvering vs. gjennomgang); forutsetningen for binærsøk (sortert). Rent teori — ingen kode kreves.
- **Oppgavesjangre:** A (teori-flervalg). Mønstereksempel: «Hvilken kjøretidskompleksitet har binærsøk i en sortert liste med `n` elementer? (O(1) / O(log n) / O(n) / O(n²))»
- **Typiske feil:** Forveksle O(log n) og O(n); tro at binærsøk virker på usortert liste; blande brute force med en effektiv algoritme; tro at pseudokode må være kjørbar Python.
- **Quiz: 16 · Flashcards: 16**

---

### Del 7 — Programmeringskjeden (drilldel) *(prioritet: PERFEKT — ~50–60 % av eksamen)*

> Bokas store øvingssjanger. Programmeringsdelen er **100 % frekvens og over halve
> eksamen**, og alltid den samme kjeden: *les fil → bygg 2D-tabell/ordbok → analysér
> (finn/tell/gruppér/sortér) → skriv ut/lagre*, med gjenbruk, input-validering og
> `try/except`. Denne delen bygger kjeden **ledd for ledd** (7.2–7.5, 7.7), med et eget
> robusthets-drillkapittel (7.6) for fullscore-kravene. Kap. 7.1 gir helheten.
>
> **Domene-rotasjon (gjelder hele delen):** Hver drilloppgave pakkes inn i et
> **nyskrevet** domene (reisetid/bussruter, karaktersetting, priskrig, auksjon,
> oppskrifter, fartsmåling, valg/stemmetelling, allidrett, storskjerm …). Øvelsen bak
> er identisk uansett innpakning — det er hele poenget. Ingen domenetekst gjengis fra
> reelle sett; alle tall, felt og navn er forfatterens egne.

#### Kapittel 7.1: Løsningsoppskriften — hele programmeringskjeden

- **id:** `tdt4110-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-4-1`, `tdt4110-2-2` · **kapitteltype:** drill
- **description:** Oversikten over den faste fem-ledds-kjeden og en fullt gjennomarbeidet eksamenscase som binder alle leddene sammen med gjenbruk.
- **Eksamensbelegg:** Metakapittel for programmeringsdelen (100 %, ~50–60 %). Skal etablere **løsningsoppskriften** som resten av delen driller: (1) les fil → tabell/ordbok (E), (2) parse/transformér data (F), (3) analysér — finn/tell/gruppér/sortér (G), (4) input/meny (H), (5) skriv ut/lagre (I), med `main` som binder alt og gjenbruk mellom leddene. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Den kanoniske kjeden som `theorem`-oversikt: `main` leser fila én gang → sender tabellen til parse-/analysefunksjoner → hver funksjon gjør én ting og gjenbruker de forrige → resultatet skrives/lagres. Vis en **komplett, gjennomregnet mini-applikasjon** (nytt domene, f.eks. «bibliotekutlån») som kjede av 5–6 små funksjoner, med margnotater om (a) hva som gir uttelling per deloppgave (prosentvekting), (b) hvor gjenbruk belønnes, (c) hvor robusthet trengs. Poengter at deloppgaver kan løses uavhengig, og at flere korrekte løsninger sidestilles.
- **Oppgavesjangre:** E–I samlet. Mønstereksempel: den gjennomgåtte casen selv, deretter 2–3 «skisser kjeden»-oppgaver (list opp hvilke funksjoner du trenger og i hvilken rekkefølge, uten å skrive full kode).
- **Typiske feil:** Skrive én diger funksjon i stedet for en kjede av små (mister gjenbruks- og delpoeng); lese fila på nytt i hver funksjon; hoppe over parse-leddet og analysere rå strenger; ikke disponere tiden etter prosentvekting.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 7.2: DRILL — Ledd 1: les fil → 2D-tabell/ordbok

- **id:** `tdt4110-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-7-1` · **kapitteltype:** drill
- **description:** Full drill på det første leddet: fra tekstfil til ferdig 2D-tabell eller ordbok, med riktig separator, strip og typekonvertering, over roterende domener.
- **Eksamensbelegg:** Sjanger E (100 %), 5–10 %. Innpakninger: målestasjoner, karakterlister, prislister, vitneobservasjoner. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) `with open(...) as f`; 2) hopp evt. header med `.readline()`; 3) `for line in f:` → `.strip().split(sep)`; 4) bygg 2D-tabell (`append`) ELLER ordbok (nøkkelkolonne → resten); 5) konvertér tallkolonner (`int`/`float`); 6) returnér strukturen. Gjennomregnet case med margnotater. 8–12 oppgaver på eksamensnivå, separator og header varierer, både tabell- og ordbokutfall.
- **Oppgavesjangre:** E. Mønstereksempel: «Filen `stasjoner.txt` har header og linjer `id;navn;temp;nedbor`. Skriv `les_til_ordbok(filnavn)` som returnerer `{id: [navn, temp, nedbor]}` med tallene konvertert.»
- **Typiske feil:** §5.2 (strip), §5.3 (separator), §5.1 (konvertering), glemme header-hopp; bruke tabell der ordbok var naturlig (og motsatt).
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 7.3: DRILL — Ledd 2: parsing og datatransformasjon

- **id:** `tdt4110-7-3` · **number:** 7.3 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-7-2` · **kapitteltype:** drill
- **description:** Gjøre om enkeltstrenger og rader til tall og strukturer — `list_from_string`, `str_to_numbers`, tidsstrenger og `make_dict` — leddet mellom rådata og analyse.
- **Eksamensbelegg:** Sjanger F (100 %), 5–10 %. Håndtér variabelt antall mellomrom, tidsstrenger (`2:01.65` → `121.65` sek), bygg ordbok fra tabell. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** `list_from_string(s)` (split + konvertering); `str_to_numbers(liste)` (map `float`/`int`); tidskonvertering (`min:sek` → sekunder og tilbake, `//`/`%`); `make_dict(tabell)` (velg nøkkelkolonne, bygg `{nøkkel: rad}`); håndtér variabelt antall mellomrom (`.split()` uten arg). Gjennomregnet case med margnotater. 8–12 oppgaver, roterende dataformater.
- **Oppgavesjangre:** F. Mønstereksempel: «Skriv `tid_til_sekunder(tekst)` som gjør `'2:01.65'` (minutter:sekunder) om til flyttallet 121.65 sekunder.»
- **Typiske feil:** §5.3 (variabelt antall mellomrom), §5.9 (`/` vs. `//` i tidskonvertering), §5.1 (glemt konvertering), feil nøkkelvalg i `make_dict`.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.4: DRILL — Ledd 3: analysér — finn maks/beste, tell og gruppér

- **id:** `tdt4110-7-4` · **number:** 7.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-7-3` · **kapitteltype:** drill
- **description:** Kjernen i programmeringsdelen: gå gjennom tabellen/ordboken og finn beste/vinner, tell forekomster, og gruppér — både med eksplisitt løkke og med snarvei.
- **Eksamensbelegg:** Sjanger G (100 %), ofte tyngdepunktet, 5–10 % per deloppgave: `item_winner`/«treigeste buss»/«parti i ledelse» (finn beste), `count_items`/dict-teller (tell), `all_recipes_with` → `{ingrediens: [retter]}` (gruppér). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiomer + løsningsoppskrift):** **Finn beste**: `beste = None; beste_verdi = None; for rad in tabell: v = rad[k]; if beste_verdi is None or v > beste_verdi: beste = rad; beste_verdi = v; return beste` — og snarveien `max(tabell, key=lambda rad: rad[k])`. **Tell**: `d.get(k, 0) + 1`-mønsteret (fra 3.5). **Gruppér**: `{nøkkel: [elementer]}` med `setdefault`/`if not in`. Vis eksplisitt løkke og snarvei side om side og sidestill dem. Gjennomregnet case med margnotater. 8–12 oppgaver, alle tre analysetypene.
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv `beste_selger(tabell)` som returnerer navnet i raden med høyest salg — (a) med en løkke som holder styr på beste, (b) med `max` og en `key`. Håndtér at salgskolonnen kan ligge på en ukjent posisjon.»
- **Typiske feil:** Initialisere «beste» til 0 slik at negative verdier aldri velges (bruk `None`); anta fast kolonneindeks (§5.4); glemme tomtilfellet (tom tabell → returnér `None`); telle feil med `d[k] += 1` uten `.get`-default (→ `KeyError`).
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 7.5: DRILL — Ledd 3b: rangér og sortér tabellen

- **id:** `tdt4110-7-5` · **number:** 7.5 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4110-7-4`, `tdt4110-6-1` · **kapitteltype:** drill
- **description:** Rangere hele tabellen på en kolonne — boblesortering, `sorted` med `key`, eller en utlevert `sort_list` — og lage topplister.
- **Eksamensbelegg:** Sjanger G (sortering, ~70 %), 5–10 %: `rank_stores` med boblesortering, ofte gitt `sort_list`. Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** Sortér 2D-tabell på kolonne `k`: bruk `sorted(tabell, key=lambda rad: rad[k])`, eller boblesortering (fra 6.1) som bytter hele rader, eller en gitt `sort_list(tabell, k)`; stigende/synkende (`reverse=True`); topp-N (`sortert[:n]`); dynamisk kolonneindeks (`k = tabell[0].index(navn)`). Gjennomregnet case med margnotater. 6–10 oppgaver, roterende domener.
- **Oppgavesjangre:** G (rangér). Mønstereksempel: «Skriv `topp_tre_butikker(tabell)` som returnerer de tre butikkene med lavest pris, sortert stigende. Bruk gjerne den utleverte `sort_list`.»
- **Typiske feil:** Sortere bare én kolonne løsrevet fra radene (mister koblingen mellom felt); §5.4 (fast kolonneindeks); feil retning; `x = x.sort()` (gir `None`).
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 7.6: DRILL — Robusthet: ukjent rekkefølge, tomtilfeller og ingen duplikater (fullscore)

- **id:** `tdt4110-7-6` · **number:** 7.6 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-7-4` · **kapitteltype:** drill
- **description:** De eksplisitte fullscore-kravene samlet: finn kolonneindeks dynamisk, håndtér tomme/ikke-funnet-tilfeller, og unngå duplikater i resultatet.
- **Eksamensbelegg:** Robusthet er et **eksplisitt fullscore-krav** i flere sett: ikke returnér duplikater (K2019 `all_recipes_with`, H2017 reg.nr.), håndtér ukjent kolonne-/radrekkefølge (H2018 — finn indeks dynamisk), håndtér vilkårlig input-rekkefølge (H2017 biler passerer i tilfeldig rekkefølge). Dette skiller toppkarakter fra middels. Prioritet: **perfekt** (for toppscore).
- **Kodekontrakt (løsningsoppskrift):** 1) **Dynamisk kolonneoppslag**: `k = tabell[0].index(navn)` i stedet for hardkodet indeks; 2) **tomtilfeller**: tom tabell/liste → returnér `[]`/`None`, «ikke funnet» → returnér `-1`/`None` med rimelig antakelse dokumentert i kommentar; 3) **ingen duplikater**: `if x not in resultat: resultat.append(x)` eller `set(...)`; 4) **vilkårlig rekkefølge**: ikke anta at data kommer sortert/ordnet — bygg opp uansett rekkefølge; 5) skriv **kort hva du antar** ved underspesifikasjon (sensorregel). Gjennomregnet case med margnotater om hvor hvert robusthetskrav gir de siste poengene. 8–12 oppgaver som hver har en «gjør den robust»-vri.
- **Oppgavesjangre:** G + robusthet. Mønstereksempel: «Skriv `alle_retter_med(oppskrifter, ingrediens)` som returnerer en liste av alle retter som bruker ingrediensen — **uten duplikater**, og som returnerer en tom liste hvis ingen retter matcher.»
- **Typiske feil:** §5.4 (fast kolonne-/radrekkefølge), §5.6 (glemme tom-/ikke-funnet-tilfelle), §5.7 (returnere duplikater), ikke dokumentere antakelser (sensorkrav).
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.7: DRILL — Ledd 4–5: utskrift/lagring og meny/`main` som binder kjeden

- **id:** `tdt4110-7-7` · **number:** 7.7 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4110-7-6`, `tdt4110-4-2` · **kapitteltype:** drill
- **description:** Det siste leddet og limet: pen formatert utskrift eller lagring til fil, og en `main`/meny-løkke som kaller hele kjeden og gjentar til brukeren avslutter.
- **Eksamensbelegg:** Sjanger I (utskrift/lagring, ~70 %) + H (meny/`main`, ~50 %), 5–10 %: pen kolonneutskrift (`rjust`/`ljust`), skriv resultat til tekst-/binærfil (`pickle`), `main`/`task` som dispatcher. Binder de fem leddene sammen til én komplett applikasjon. Prioritet: **kunne** (perfekt for helheten).
- **Kodekontrakt (løsningsoppskrift):** **Utskrift**: pen kolonne med `rjust`/`ljust`/`center` eller f-streng-bredde, `', '.join(...)`, tidsformat; **lagring**: `write` (tekst, husk `'\n'`) eller `pickle.dump` (binær); **meny/`main`**: `while True: valg = input(meny); if valg == '1': ...; elif ...; elif valg == 'q': break`, med `main` som leser fila én gang og sender tabellen til de andre funksjonene; `try/except` rundt fil-I/O og bruker-tilbakemelding om suksess/feil. Gjennomregnet komplett applikasjon (kjeden fra 7.1 fullført) med margnotater. 6–10 oppgaver: skriv utskrift/lagring, skriv meny, eller bind en gitt kjede sammen.
- **Oppgavesjangre:** I + H. Mønstereksempel: «Skriv `hovedprogram(filnavn)` som leser tabellen, viser en meny (1: beste selger, 2: skriv rapport til fil, q: avslutt), og kaller de tidligere funksjonene til brukeren velger q — med feilmelding hvis fila mangler.»
- **Typiske feil:** §5.8 (menyløkke terminerer ikke riktig), glemme `'\n'` i `write`, lese fila på nytt i hver funksjon, glemme brukertilbakemelding om suksess/feil, ikke gjenbruke de tidligere funksjonene.
- **Quiz: 12 · Flashcards: 12**

---

### Del 8 — IT-teori: maskinvare, tall, nettverk, sikkerhet *(teori ~25 %; maskinvare + tall PERFEKT)*

> Den store teoridelen — ~25 % av eksamen, testet med ~20 flervalg (sjanger A) — som
> ingen av UiO-emnene har. Maskinvare og tallrepresentasjon er nær **100 %**; nettverk
> 90 %, sikkerhet 80 %, komprimering/sampling 80 %; systemutvikling 50 % (tonet ned
> 2018–2019, men kan komme igjen). Delen er **avhengighetsfri** fra kodedelen. Seks
> teorikapitler + ett flervalgsdrillkapittel.
>
> **Distraktor-stil (gjelder hele delen):** De reelle distraktorene er tett formulerte,
> plausible påstander der **ett ord eller ett tall** skiller riktig fra galt (Nyquist
> «minst dobbelt» vs. «minst like»; IPv6 = 128 bit vs. 32/64/256; offentlig vs. privat
> nøkkel). Alle quiz/eksempler i Del 8 skal ha slike nære distraktorer — det er dette
> som trenes. Ingen minuspoeng → kryss alltid av.

#### Kapittel 8.1: Maskinvare og datamaskinens oppbygning

- **id:** `tdt4110-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hvordan en datamaskin er bygd og virker: CPU, ALU, registre, fetch-execute-syklusen, minne (RAM/SSD) og begreper som Moores lov og pipelining.
- **Eksamensbelegg:** Maskinvare i **~100 %** av settene (sjanger A), en av de to tyngste teoriklyngene. Prioritet: **perfekt**.
- **Begrepskontrakt (Begreps- og enhetsliste):** CPU/mikroprosessor; transistor og vakuumrør (historikk); **ALU** (aritmetisk-logisk enhet) og kontrollenhet; **registre** (programteller, instruksjonsregister); **fetch-execute-syklusen** (5 steg: hent, dekod, hent operander, utfør, lagre); pipelining (overlappende instruksjonsbehandling); klokkehastighet og latency; **RAM** («random access» = like rask tilgang uansett adresse, flyktig) vs. **SSD** vs. harddisk; primær- vs. sekundærminne; **Moores lov** (antall transistorer dobles ~hvert 2. år); integrert krets, fotolitografi, hovedkort/datterkort; operativsystemets rolle. Rent teori.
- **Oppgavesjangre:** A. Mønstereksempel: «Hva betyr «random access» i RAM? (a) tilfeldig innhold (b) like rask tilgang til enhver adresse (c) kun sekvensiell lesing (d) ikke-flyktig lagring)» — riktig: b.
- **Typiske feil:** Forveksle registre/cache/RAM; tro at RAM er ikke-flyktig; blande ALU og kontrollenhet; feil antall steg i fetch-execute; misforstå Moores lov (gjelder transistortetthet, ikke klokkehastighet direkte).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 8.2: Tallrepresentasjon og data

- **id:** `tdt4110-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hvordan tall, tegn og bilder lagres binært: `2^n` symboler, binær↔desimal↔hex, toer-komplement, flyttall, ASCII/Unicode, RGB og bildestørrelse.
- **Eksamensbelegg:** Tallrepresentasjon i **~100 %** (sjanger A), den andre tyngste teoriklyngen; inneholder **regnespørsmål** (konvertering, `2^n`, bildestørrelse) der kalkulator er tillatt. Prioritet: **perfekt**.
- **Begrepskontrakt (Begreps- og enhetsliste):** Bit og byte; **`2^n` symboler med `n` bit**; binær↔desimal↔heksadesimal-konvertering (regnes for hånd); binæraddisjon; **toer-komplement** (negative heltall); flyttallsrepresentasjon (fortegn/eksponent/mantisse — prinsipp); **ASCII** (extended/ISO-8859-1 = 8 bit) og **Unicode** (variabel, «worst case» bytes); **RGB/CMYK** og webfargekoder (hex); **bildestørrelse** = piksler × bit-per-piksel / 8 (bytes); lagringsprefikser (kilo/mega/giga — 10³ vs. 2¹⁰); metadata. Inkluder utregningsmetoder (`theorem`-lignende oppskrift for binær↔hex og for bildestørrelse).
- **Oppgavesjangre:** A (inkl. regnespørsmål). Mønstereksempler: «Hvor mange ulike symboler kan representeres med 6 bit?» (64); «Et bilde er 100 × 50 piksler med 24 bit per piksel. Hvor mange byte trengs?» (15 000).
- **Typiske feil:** §5.12 (regnefeil ved binær↔hex, `2^n`, bildestørrelse — glemme å dele på 8); §5.11 (forveksle tett formulerte alternativer); blande ASCII (8 bit) og Unicode; feil ved toer-komplement.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 8.3: Nettverk

- **id:** `tdt4110-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hvordan data flyttes over nett: TCP/IP-lagene, protokollbegrepet, kanalkoding og flytkontroll, IP-adresser og switching.
- **Eksamensbelegg:** Nettverk i ~90 % (sjanger A), tungt fra 2018. Prioritet: **kunne** (grensende til perfekt gitt trend).
- **Begrepskontrakt (Begreps- og enhetsliste):** **TCP/IP-lagene/stakken** og hva hvert lag gjør; protokoll-begrepet; **kanalkoding** (sjekksum, single parity check/SPC, Hamming, syklisk sjekksum/CRC); sekvensering; **flytkontroll** (sliding window vs. stop-and-go); **ACK** og retransmisjon; replay error, jitter, buffer overflow; linje- vs. **pakkesvitsjing**; unicast/multicast; **IPv4 (32 bit)** vs. **IPv6 (128 bit)**; subnett-maske (prefiks/suffiks); **MAC-adresse**; ISP. Rent teori.
- **Oppgavesjangre:** A. Mønstereksempel: «Hvor mange bit er en IPv6-adresse? (32 / 64 / 128 / 256)» — riktig: 128.
- **Typiske feil:** §5.11 IPv4 (32) vs. IPv6 (128); unicast vs. multicast; forveksle sliding window og stop-and-go; blande MAC- og IP-adresse; feil rekkefølge/rolle på TCP/IP-lagene.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 8.4: Sikkerhet

- **id:** `tdt4110-8-4` · **number:** 8.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-8-3` · **kapitteltype:** teori
- **description:** Grunnleggende datasikkerhet: kryptering med offentlig/privat nøkkel, angrepstyper (DoS/DDoS, phishing, wiretapping) og forsvar (brannmur, hashing, VPN).
- **Eksamensbelegg:** Sikkerhet i ~80 % (sjanger A), tungt fra 2018. Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og enhetsliste):** **Asymmetrisk kryptering** (offentlig nøkkel krypterer, privat dekrypterer — og motsatt for signaturer); symmetrisk vs. asymmetrisk; **DoS/DDoS** (tjenestenektangrep); **phishing/pharming**; **wiretapping** (avlytting); brannmur; **hashing** (dataintegritet — envei); **digitale signaturer**; **VPN** (kryptert tunnel). Rent teori.
- **Oppgavesjangre:** A. Mønstereksempel: «Ved sending av en kryptert melding til en mottaker: hvilken nøkkel brukes til å kryptere? (avsenders private / mottakers offentlige / mottakers private / avsenders offentlige)» — riktig: mottakers offentlige.
- **Typiske feil:** §5.11 offentlig vs. privat nøkkel (hvilken krypterer/dekrypterer/signerer); forveksle DoS og DDoS; tro at hashing kan reverseres; blande VPN og brannmur.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.5: Komprimering og sampling

- **id:** `tdt4110-8-5` · **number:** 8.5 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4110-8-2` · **kapitteltype:** teori
- **description:** Hvordan data komprimeres (tapsløst vs. med tap) og hvordan analoge signaler digitaliseres — inkludert Nyquist-regelen og modulasjon.
- **Eksamensbelegg:** Komprimering/sampling i ~80 % (sjanger A). **Nyquist-regelen** er en fast nær-distraktor-felle. Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og enhetsliste):** **Tapsløs** komprimering (run-length encoding) vs. **tap** (JPEG/MPEG/MP3); når hver brukes; **sampling** (analog→digital); **Nyquist-regelen** (samplingsfrekvens ≥ **2×** høyeste frekvens i signalet); konsekvens av for treg samplingsfrekvens (aliasing/tap av informasjon); **modulasjon** (FM/AM); analoge signaler; paritetsbit (enkel feildeteksjon). Rent teori.
- **Oppgavesjangre:** A. Mønstereksempel: «Ifølge Nyquist-regelen må samplingsfrekvensen være minst … høyeste frekvens i signalet. (like høy som / dobbelt så høy som / fire ganger så høy som / halvparten av)» — riktig: dobbelt så høy som.
- **Typiske feil:** §5.11 Nyquist «minst dobbelt» vs. «minst like»/«fire ganger»; tapsløs vs. tap (hvilke formater er hva); tro at MP3/JPEG er tapsløse; blande sampling og modulasjon.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.6: Systemutvikling og prosessmodeller

- **id:** `tdt4110-8-6` · **number:** 8.6 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hvordan programvare utvikles: spesifikasjon, utvikling, validering; vannfalls-, spiral- og inkrementell modell; kravspesifikasjon og akseptansetesting.
- **Eksamensbelegg:** Systemutvikling i ~50 % (sjanger A), **tungt 2014–2017, tonet ned 2018–2019** — kan komme igjen. Prioritet: **kjenne**.
- **Begrepskontrakt (Begreps- og enhetsliste):** Programvarespesifikasjon/-utvikling/-validering; **vannfallsmodellen** (sekvensielle faser); **Boehms spiralmodell** (iterativ, risikodrevet); **inkrementell utvikling**; **kravspesifikasjon** («requirements engineering»); **akseptansetesting**; systemarkitektur. Rent teori.
- **Oppgavesjangre:** A. Mønstereksempel: «Hvilken prosessmodell er kjennetegnet ved sekvensielle, ikke-overlappende faser der man ikke går tilbake? (spiral / vannfall / inkrementell / smidig)» — riktig: vannfall.
- **Typiske feil:** Forveksle vannfall og spiral; tro at inkrementell = vannfall; blande kravspesifikasjon og akseptansetesting; feilplassere fasene i vannfallsmodellen.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 8.7: DRILL — Teori-flervalg (blandet)

- **id:** `tdt4110-8-7` · **number:** 8.7 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4110-8-1` · **kapitteltype:** drill
- **description:** Full flervalgsdrill på tvers av hele teoridelen, i eksamens format (~20 spørsmål med nære distraktorer), inkludert et kort «bør kjenne til»-tillegg om nyere pensum.
- **Eksamensbelegg:** Speiler Oppgave 1 (teori, ~25 %, ~20 flervalg): blanding av maskinvare, tallrepresentasjon (inkl. regnespørsmål), nettverk, sikkerhet, komprimering/sampling og systemutvikling/algoritmekompleksitet. Ingen minuspoeng → kryss alltid. Prioritet: **perfekt** (billige, hyppige poeng).
- **Kodekontrakt (løsningsoppskrift):** Strategi for teori-flervalg: 1) les alle alternativene (ett er «mest riktig»); 2) elimér de åpenbart gale; 3) se etter det ene ordet/tallet som skiller nære alternativer (Nyquist, IPv6, nøkkeltype); 4) på regnespørsmål: regn for hånd (`2^n`, binær↔hex, bildestørrelse); 5) **kryss alltid av** — ingen minuspoeng. Ett gjennomgått «typisk sett» på ~10 spørsmål med forklaring på hvorfor hvert riktig alternativ er riktig OG hvorfor de nære distraktorene er gale. Inkluder en `collapsible` **«Bør kjenne til — nyere pensum»** om NumPy/Matplotlib (array-beregning/plotting) og KI som kodehjelp, tydelig merket `(verifiser mot gjeldende pensum — ikke i arkivet 2014–2019)`.
- **Oppgavesjangre:** A. 18–24 flervalgsspørsmål på tvers av alle teoriklyngene, med nære distraktorer, i eksamensrekkefølge.
- **Typiske feil:** §5.11 (forveksle nære alternativer), §5.12 (regnefeil), la et spørsmål stå blankt (0 = feil), bruke for lang tid på ett lavvektet spørsmål.
- **Quiz: 24 · Flashcards: 8** (quiz er ren teori-flervalg — direkte Oppgave 1-trening; lav flashcard fordi begrepene er dekket i 8.1–8.6)

---

### Del 9 — Eksamenstrening

> Tre komplette **tredelte** øvingseksamener etter den faste malen (teori/flervalg +
> kodeforståelse + programmering, 4 t, kode D). Domeneinnpakningen roterer; til sammen
> dekker de tre settene samtlige sjangre A–J. Løsningsforslag skrevet slik sensor vil
> se dem: kort, idiomatisk prosedyrekode, med margnotater om delpoeng og hva som gir
> uttelling (delvis riktig struktur belønnes).

#### Kapittel 9.1: Øvingseksamen 1 — full tredelt, moderat

- **id:** `tdt4110-9-1` · **number:** 9.1 · **estimatedMinutes:** 240 · **prerequisites:** Del 1–8 · **kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett etter den faste malen: teori-flervalg, kodeforståelse, og én programmeringsoppgave — med nyskrevet domene.
- **Eksamensbelegg/miks:** Speiler et typisk sett (100 %, prosentvekting oppgitt): **Oppgave 1 — teori (~25 %)**: 20 flervalg (maskinvare, tall inkl. ett regnespørsmål, nettverk, sikkerhet, komprimering/sampling — sjanger A); **Kodeforståelse (~17 %)**: 4–6 deloppgaver — «hva skrives ut/returneres» (B: løkke, slicing, dict-teller, rekursjon), 1 «forklar med én setning» (C), 1 «fyll inn kodelinje» (D); **Programmering (~58 %)**: én kjede-oppgave i nytt domene (f.eks. «bibliotekutlån» eller «kollektivruter») — `les_fil` (E) → parsing (F) → analyse finn/tell/gruppér (G) → input/meny (H) → utskrift/lagring (I), med gjenbruk, `try/except` og minst én robusthets-deloppgave. Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave, med `tip` om prosentvekting/delpoeng og hva som gir uttelling. `tip` om tidsbudsjett (teori ~35 min, kodeforståelse ~35 min, programmering ~150 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, F, G, H, I. Teori- og kodesporingsspørsmålene registreres OGSÅ som quiz (kapitlets quizkvote), slik at teoridelen kan tas som en tidsstyrt MC-økt.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 9.2: Øvingseksamen 2 — full tredelt, tyngre (to programmeringsoppgaver)

- **id:** `tdt4110-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4110-9-1` · **kapitteltype:** øvingseksamen
- **description:** Et tyngre sett med to programmeringsoppgaver, rekursjon i kodeforståelsen, og eksplisitte fullscore-krav på robusthet — nervecelle for toppkarakter.
- **Eksamensbelegg/miks:** Speiler et tungt sett (H2018-nivå): **Oppgave 1 — teori (~25 %)**: 20 flervalg med gjeninntog av systemutvikling og algoritmekompleksitet (A); **Kodeforståelse (~18 %)**: «hva returnerer» for rekursjon (gcd/Fibonacci) og matrise-sporing (B), 1 «forklar med én setning» (C), 1 binærsøk-«fyll inn kodelinje» (D/J); **Programmering (~57 %) — to oppgaver**: (a) en kortere kjede med **input-validering + meny** (H) og formatert utskrift (I); (b) en større kjede med **gruppering/sortering** (G), robusthet (ukjent kolonnerekkefølge, ingen duplikater — fullscore), og **lagring med `pickle`** (I). Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip` og delpoeng-signaler; margnotat om at robusthetskravene gir de siste poengene.
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, G, H, I, J — supplerer 9.1 og 9.3.
- **Oppgavesjangre:** A, B, C, D, G, H, I, J.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 3 — full tredelt, algoritme-/random-tung

- **id:** `tdt4110-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4110-9-2` · **kapitteltype:** øvingseksamen
- **description:** Et sett som topper ut algoritmesiden: binærsøk/kompleksitet i teori og kodeforståelse, `random` i programmeringen, og tupler til karaktersetting.
- **Eksamensbelegg/miks:** Speiler et algoritme-/random-tungt sett (K2015/K2016-nivå): **Oppgave 1 — teori (~25 %)**: 20 flervalg med tydelig algoritmekompleksitet/Big-O og tallrepresentasjon-regnespørsmål (A); **Kodeforståelse (~17 %)**: rekursjon (tverrsum/potens) og strengslicing-sporing (B), 1 «forklar med én setning» (C); **Programmering (~58 %) — én til to oppgaver**: en kjede der data genereres/trekkes med **`random`** (`randint`/`choice` — terningkast/tilfeldig lagoppsett), **parallelle tupler** til karaktersetting (G), tidskonvertering (F), og en analyse med **finn-beste + sortering** (G). Til sammen med 9.1–9.2 dekkes sjangrene A–J minst én gang. Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip`.
- **Kodekontrakt:** Dekker sjangrene A, B, C, F, G, J (+ `random`, tupler) — sammen med 9.1/9.2 dekkes A–J. Merk: `random` innføres her (ikke eget kapittel — nevnes i kodekontrakten med `randint`/`choice`/`shuffle`, kobles til 3.6 tupler og 7.4 analyse).
- **Oppgavesjangre:** A, B, C, F, G, J.
- **Quiz: 10 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 14 |
| 1 | 1.1–1.4 | 20+18+22+14 = **74** | 18+16+18+14 = **66** |
| 2 | 2.1–2.2 | 18+16 = **34** | 18+14 = **32** |
| 3 | 3.1–3.6 | 18+18+20+14+20+12 = **102** | 18+16+20+14+18+12 = **98** |
| 4 | 4.1–4.3 | 18+14+16 = **48** | 18+16+16 = **50** |
| 5 | 5.1–5.3 | 30+22+20 = **72** | 12+16+12 = **40** |
| 6 | 6.1–6.3 | 14+16+16 = **46** | 14+16+16 = **46** |
| 7 | 7.1–7.7 | 12+16+14+16+12+14+12 = **96** | 14+14+12+12+10+12+12 = **86** |
| 8 | 8.1–8.7 | 24+24+22+18+18+14+24 = **144** | 24+22+22+18+18+14+8 = **126** |
| 9 | 9.1–9.3 | 12+10+10 = **32** | 0+0+0 = **0** |
| **Sum** | **39 kap.** | **662 ≥ 500 ✓** | **558 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen er skalert til fagets natur (jf. lærdommen «≥500 er et GULV»): TDT4110 har
**to** eksamensdirekte flervalgssjangre (teori + kodesporing), så quiz siktes høyt
(662). Vektingen speiler frekvens og eksamensform:

- **Del 8 (IT-teori) bærer mest quiz (144)** fordi teori-flervalg ER en eksamenssjanger
  (~25 % av settet, ~20 direkte MC-spørsmål) — quizbanken her er ren Oppgave 1-trening
  med nære distraktorer. Del 8 bærer også mest flashcards (126, faktatunge
  begrepsdefinisjoner).
- **Del 5 (kodesporing, 72)** og **Del 7 (programmeringskjeden, 96)** er de andre
  tunge quizbidragene — kodesporing-quiz er direkte kodeforståelsestrening.
- **Del 3 (datastrukturer, 102/98)** er stor fordi den har seks 100 %-kapitler.
- Flashcards vektes mot API-/konstruksjonsdefinisjoner (Del 1–4, 7) og
  fagbegrepsdefinisjoner (Del 8). Øvingseksamenene (Del 9) bidrar quiz (teori/
  kodesporing registreres som MC-økt) men ingen flashcards.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort,
idiomatisk prosedyrekode) og prosentvekting. Prøvekapitler bygges som
`tdt4110-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel.

**Prøve-kvote Del 1:** 4 prøver (Python-grunnlaget)
1. Prøve 1.A (25 min): Datatyper og konvertering — 10 kodesporing (`//`/`%`/konvertering) (B).
2. Prøve 1.B (25 min): Boolsk logikk og betingelser — 8 «hva returnerer»-oppgaver (B).
3. Prøve 1.C (30 min): Løkker og `range` — 10 kodesporing inkl. nøstede løkker/annethvert (B).
4. Prøve 1.D (30 min): Input-validering — skriv 3 valideringsløkker + 6 kodesporing (H + B).

**Prøve-kvote Del 2:** 4 prøver (funksjoner)
1. Prøve 2.A (25 min): `def`/`return`/flere returverdier — skriv 5 småfunksjoner.
2. Prøve 2.B (25 min): Kodesporing av funksjonskall og scope — 8 «hva returnerer» (B).
3. Prøve 2.C (30 min): Gjenbruk — skriv en funksjon som gjenbruker to gitte hjelpefunksjoner.
4. Prøve 2.D (30 min): Meny/`main` — skriv en menyløkke som dispatcher på brukervalg (H).

**Prøve-kvote Del 3:** 4 prøver (datastrukturer)
1. Prøve 3.A (25 min): Lister og slicing — 10 kodesporing (`[::-1]`, `[1::2]`, snarveier) (B).
2. Prøve 3.B (35 min): 2D-lister — bygg/transponér tabell + dynamisk kolonneoppslag (B + G).
3. Prøve 3.C (30 min): Strenger og parsing — split/strip/join + slicing-sporing (F + B).
4. Prøve 3.D (30 min): Ordbøker og tupler — teller (`d.get`), gruppering, karaktersetting (G).

**Prøve-kvote Del 4:** 4 prøver (filbehandling og robusthet)
1. Prøve 4.A (30 min): Les fil → 2D-tabell — separator/strip/konvertering (E).
2. Prøve 4.B (25 min): Les fil → ordbok — nøkkelkolonne + typekonvertering (E).
3. Prøve 4.C (30 min): Filskriving og `pickle` — skriv rapport + lagre dict til binærfil (I).
4. Prøve 4.D (30 min): `try/except` — gjør en filleser robust mot manglende fil (E + robusthet).

**Prøve-kvote Del 5:** 4 prøver (kodesporing og rekursjon)
1. Prøve 5.A (30 min): Kodesporing blandet — 12 «hva skrives ut/returneres» (B).
2. Prøve 5.B (30 min): Rekursjon — spor gcd/Fibonacci/tverrsum + skriv én rekursiv funksjon (J).
3. Prøve 5.C (25 min): «Forklar med én setning» — 8 funksjoner, skriv presise ett-setnings-svar (C).
4. Prøve 5.D (25 min): «Fyll inn manglende kodelinje» — 8 flervalg (range/betingelse/indeks) (D).

**Prøve-kvote Del 6:** 4 prøver (algoritmer)
1. Prøve 6.A (30 min): Boblesortering — skriv den for hånd + sortér en tabell på en kolonne (G).
2. Prøve 6.B (30 min): Binærsøk — fyll inn/skriv iterativt binærsøk + spor det (D + J).
3. Prøve 6.C (25 min): Kompleksitet/Big-O — 10 teori-flervalg om kjøretid og forutsetninger (A).
4. Prøve 6.D (30 min): Integrert — sortér, deretter binærsøk i den sorterte tabellen (G + J).

**Prøve-kvote Del 7:** 4 prøver (programmeringskjeden)
1. Prøve 7.A (35 min): Ledd 1–2 — les fil → tabell/ordbok → parsing, nytt domene (E + F).
2. Prøve 7.B (40 min): Ledd 3 — finn beste/tell/gruppér på en gitt tabell (G).
3. Prøve 7.C (40 min): Robusthet — samme analyse gjort robust (ukjent kolonne, ingen duplikater, tomtilfeller) (G + robusthet).
4. Prøve 7.D (45 min): Full kjede på eksamensnivå — les → analysér → meny → skriv/lagre, med gjenbruk (E–I).

**Prøve-kvote Del 8:** 4 prøver (IT-teori)
1. Prøve 8.A (25 min): Maskinvare + tallrepresentasjon — 15 flervalg inkl. 3 regnespørsmål (A).
2. Prøve 8.B (25 min): Nettverk + sikkerhet — 15 flervalg med nære distraktorer (A).
3. Prøve 8.C (20 min): Komprimering/sampling + systemutvikling — 12 flervalg (Nyquist, prosessmodeller) (A).
4. Prøve 8.D (30 min): Blandet «Oppgave 1» — 20 flervalg på tvers av hele teoridelen, tidsstyrt (A).

### Øvingseksamener (3 komplette sett — se kap. 9.1–9.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.1) | Typisk sett, én prog.oppgave | Teori 20 MC (A) + kodeforståelse (B/C/D) + én kjede (E–I), moderat domene |
| Øvingseksamen 2 (kap. 9.2) | Tungt sett (H2018-nivå), to prog.oppgaver | Teori (A, m/systemutvikling) + rekursjon/binærsøk (B/D/J) + to kjeder m/robusthet + `pickle` (G/H/I) |
| Øvingseksamen 3 (kap. 9.3) | Algoritme-/random-tungt (K2015/K2016-nivå) | Teori (A, m/Big-O) + rekursjon/slicing (B/C) + kjede m/`random` + parallelle tupler (F/G/J) |

Til sammen dekker de tre settene samtlige 10 sjangre (A–J) minst én gang, og alle tre
eksamensbyggeklossene (teori + kodeforståelse + programmering) i full tredelt form.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én 4-timers skoleeksamen (100 %, kode D, A–F), den faste
   tredelte strukturen (teori ~25 % / kodeforståelse ~17 % / programmering ~58 %), og
   prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (de sju 100 %-kodetemaene i Del 1–4 + programmeringskjeden Del 7 +
   kodesporing Del 5 + maskinvare/tall i Del 8), **kunne** (ordbøker, input-validering,
   sortering, `try/except`, forklar-én-setning, nettverk/sikkerhet/komprimering),
   **kjenne** (tupler, `pickle`, binærsøk-implementasjon, algoritmekompleksitet,
   systemutvikling, `random`, NumPy/KI — `verifiser`).
3. **Sjangerguiden** — de 10 oppgavetypene A–J med løsningsoppskriftene fra
   drillkapitlene (5.1, 5.3, 7.1–7.7, 8.7) i kortform, inkludert den kanoniske
   fem-ledds-programmeringskjeden.
4. **Sensorreglene** — metareglene: skriv kort hva du antar; **svar kort og klart —
   uklart/for langt trekker ned** (særlig sjanger C, én setning); ingen minuspoeng på
   flervalg → kryss alltid; disponér tiden etter prosentvekting; flere korrekte
   løsninger sidestilles; riktig struktur belønnes selv med småfeil; gjenbruk og
   robusthet belønnes.
5. **Feilkatalogen** — de 13 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: glemt `int()`/`float()`, glemt
   `.strip()`, feil separator, anta fast kolonnerekkefølge, av-med-én, tomtilfeller,
   duplikater, input-løkke terminerer ikke, `/` vs. `//`, rekursjonens grunntilfelle,
   forveksle nære teori-alternativer, teori-regnefeil, ordrik forklaring.
6. **API- og konstruksjonsark** — alle kodemønstrene fra kodekontraktene på ett
   oppslag: les fil → 2D-tabell/ordbok, `d.get`-teller, gruppering, finn-beste,
   boblesortering, iterativt binærsøk, input-valideringsløkke, rekursjon, meny/`main`,
   formatert utskrift/lagring — med markering «skriv fra bunnen» vs. «snarvei tillatt».
7. **Teoriark** — begreps- og enhetslistene fra Del 8 samlet: maskinvare,
   tallrepresentasjon (med utregningsmetoder), nettverk, sikkerhet, komprimering/
   sampling, systemutvikling — med de faste nær-distraktor-fellene uthevet.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1–4
   (kodegrunnlaget) → Del 7 (programmeringskjeden — bærer over halve eksamen) → Del 5
   (kodesporing) → Del 8 (teori — les parallelt, den er avhengighetsfri) → Del 6
   (algoritmer) → prøvene underveis → de tre tredelte øvingssettene de siste ukene
   under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4110` med alle 39 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert («7.3»), aldri lineær** (bokforsiden
   grupperer på `number.split('.')[0]`).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J og frekvenstallene resten
   refererer til.
3. **Kodegrunnlaget i avhengighetsrekkefølge**: Del 1 (fundamentet) → Del 2
   (funksjoner) → Del 3 (datastrukturer) → Del 4 (filbehandling). Disse forutsetter
   hverandre og kreves av alt senere.
4. **Del 5** (kodesporing/rekursjon; krever Del 3) → **Del 6** (algoritmer; krever
   Del 3) → **Del 7** (programmeringskjeden; krever Del 4 + Del 2 + Del 6.1) — bokas
   tyngdepunkt.
5. **Del 8** (IT-teori) kan bygges når som helst (avhengighetsfri) — egnet for
   parallell agent.
6. **Del 9** (øvingseksamenene) til slutt — de gjenbruker alle sjangrene.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.
8. **Navigasjon**: legg emnet inn i `src/app/trinn/hoyere/institusjoner.ts` under
   **NTNU**, navn = «TDT4110 Informasjonsteknologi grunnkurs».

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **INGEN OOP**: tekstsøk over alle tdt4110-filer — ingen `class`, `__init__`,
      `self`, arv eller metoder i noen fasitkode. Alt er prosedyreorientert (funksjoner
      + lister/2D-lister/ordbøker/tupler/strenger/filer).
- [ ] **Snarvei + eksplisitt side om side**: analyse-/sorteringskapitlene viser BÅDE
      den eksplisitte løkkevarianten OG snarveien (`max`/`sum`/`sorted`), sidestilt.
- [ ] **Konsishet i sjanger C**: alle «forklar hva funksjonen gjør»-fasitsvar er ÉN
      presis setning; kap. 5.3 og alle C-oppgaver har `warning` om at ordrike/upresise
      svar trekker ned; vis en kontrast god (kort) vs. dårlig (lang) forklaring.
- [ ] **Robusthet**: hvert analysekapittel (7.4–7.6) har en robusthetsdeloppgave
      (dynamisk kolonneindeks, tomtilfelle, ingen duplikater); kap. 7.6 dekker
      fullscore-kravene eksplisitt.
- [ ] **Gjenbruk**: de store kjede-eksemplene (7.1, 7.7, Del 9) demonstrerer at senere
      funksjoner kaller de tidligere; `main` leser fila én gang.
- [ ] **f-strenger og pensumdrift markert**: f-strenger vises side om side med
      `.format()`/`rjust` og merket `(verifiser mot gjeldende pensum — varslet inn
      2019)`; NumPy/Matplotlib/KI kun som merket «bør kjenne til»-tillegg i 8.7, ikke
      eget kapittel/drill.
- [ ] **API-/Begrepsliste per delkapittel**: hvert kodekapittel har `collapsible`
      «API- og konstruksjonsliste»; hvert Del 8-teorikapittel har `collapsible`
      «Begreps- og enhetsliste» — rett etter Forkunnskaper, per delkapittel (ikke arv).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Nøyaktig utskrift i kodesporing**: quiz/eksempler i sjanger B angir utskrift
      *nøyaktig* som terminalen (mellomrom, `end`/`sep`-effekt, hakeparenteser,
      desimaler); teori-flervalg (A) har nære, plausible distraktorer.
- [ ] **Ingen minuspoeng understreket**: Del 0 og 8.7 sier eksplisitt «kryss alltid av».
- [ ] **Quiz-sum ≥ 662 og flashcard-sum ≥ 558** per kvotetabellen (§5); quiz kalibrert
      som eksamensdirekte MC (teori-flervalg + kodesporing), `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 tredelte øvingseksamener (kap. 9.1–9.3)
      som sammen dekker sjangrene A–J og alle tre eksamensbyggeklossene.
- [ ] **Opphavsrett**: ALLE oppgaver, kodeeksempler og domener nyskrevne — egne tall,
      egne felt/navn, egen domeneinnpakning; kodemønstrene er standard Python-idiomer,
      men ingen oppgavetekster/fasiter fra reelle sett gjengis.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innhold), jf. lærdommen om `getChapterMeta`.

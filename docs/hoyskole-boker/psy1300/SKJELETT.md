# Bokskjelett: PSY1300 Kognitiv psykologi (UiO) — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (8 komplette oppgavesett med sensorveiledning V2019–V2024-utsatt,
> alle skrevet og sensurert av samme fagansvarlige, Psykologisk institutt, UiO).
> **PSY1300 og PSYC1230 deler eksamen** — settene er identiske og alltid merket
> «PSY1300/PSYC1230». Én bok dekker begge kodene. Alle oppgaver, vignetter, case,
> modellbesvarelser og formuleringer i boka skal være NYSKREVNE (se §6). Pensum-
> litteratur (Gilhooly, Lyddy, Pollick & Buratti; Groome & Eysenck; Stangor & Walinga)
> refereres — aldri siteres i lengde.
>
> **Faglig presisjon er kritisk.** Psykologiske detaljer, teoretiker-attribusjoner
> (Baddeley, Sperling, Lavie, Broadbent, Treisman, Tulving, Loftus, Murphy & Zajonc,
> Coltheart, Garrett, Paivio) og pensum-kapittelnumre forfatteren er usikker på merkes
> `(verifiser)` for fagfellesjekk i fase 6. Referanser til Gilhooly (1./2. utg.) og
> Groome & Eysenck (2. utg. 2016) er utgaveavhengige og merkes ⚠.
>
> **Utfasing/kode (verifiser):** PSY1300 tilbys siste gang **H2026** og fases ut.
> PSYC1230 (profesjonsstudiets parallell) er sannsynlig overlevende kode. **Boka
> bygges innholdsmessig som den er; kurs-id `psy1300` beholdes her**, men vurder
> PSYC1230 som alias/omdirigering ved wiring (fase 5). Se §7.

---

## 1. Bokens identitet

- **Kurs-id:** `psy1300`
- **Tittel:** *PSY1300 Kognitiv psykologi (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo. Visningsnavn i
  `institusjoner.ts`: «PSY1300 Kognitiv psykologi» (vurder alias «PSYC1230» — se §7).
- **Arketype:** **drøfting/fakta-hybrid (BRED REDEGJØRELSE med anvendelseslag)** —
  primærmalen er DNA-drøfting, men temakapitlene bygges som **a/b/c-essaymoduler**
  som speiler eksamens faste tredeling: (a) definer/navngi, (b) forklar mekanisme +
  klassisk eksperiment med tolkning, (c) anvend på et konkret scenario. Hybrid-valget
  er dokumentert i §2 «Arketypetilpasning». Emnet er IKKE et regnefag og ikke et fritt
  drøftingsfag — det er et **kunnskaps- og forståelsesfag** der presis navngiving er
  grunnvalutaen og anvendelse (ledd c) er A/B-differensiereren.
- **Kapittelantall:** 37 (Del 0: 2 · temadeler 1–10: 28 · eksamenstrening Del 11: 7)
- **Estimert totaltid:** ~1 790 minutter (~30 timer) fordelt per kapittel under
- **Quiz totalt:** 532 (krav ≥500) · **Flashcards totalt:** 670 (sikt 600–750,
  navngivings-/studietungt fag — se kvotesammendrag)

**Pitch:** PSY1300-eksamen har én fast logikk: **skriftlig skoleeksamen der du får
FIRE tredelte oppgaver og besvarer TRE** («3 av 4 — hold svarene korte!»). Hver
oppgave gir maks 5 poeng (15 totalt), og karakter settes mekanisk fra poengsum
(F<5≤E<7≤D<9≤C<12≤B<14≤A). Hver oppgave er bygd likt: **(a) definer/navngi et
fenomen eller en modell, (b) forklar mekanismen eller beskriv et klassisk eksperiment,
(c) anvend kunnskapen på et konkret scenario** (huske til eksamen, bilkjøring,
øyenvitne, filmregi, depresjonsbehandling). Sensor gir poeng per delspørsmål og
premierer **presis, navngitt teori/studie** som grunnvaluta — mens **anvendelse og
bonus-nyanser** løfter mot topp. Fordi oppgavebanken gjenbrukes tungt (arbeidsminne,
LTM-gjenhenting+Method of Loci, betinging, emosjon/CBT går igjen nesten ordrett år
etter år), er en fokusert kjernestrategi svært levedyktig. Boka er bygd baklengs fra
dette: hvert kjernetema leveres som en **a/b/c-modul** med differensiert modellsvar
(«bestått-versjon» + «A-versjon» med bonus-nyansene), en **navngi-drill** (fenomen ⇄
navn ⇄ teoretiker/studie) og en anvendelsesbank. **Arbeidsminne (Baddeley)** og
**LTM-gjenhenting + innkodingsspesifisitet + Method of Loci** er bokas ryggrad
(begge faste i 5 av 8 sett).

---

## 2. Makrostruktur

Følger DNA-drøfting-malen (Del 0 eksamenskart + håndverk → temadeler etter analysens
temafrekvens → eksamenstrening), men temadelene følger analysens anbefalte rekkefølge
(§7): fra faget selv, via prosesseringskjeden (oppmerksomhet → sensorisk → arbeids-
minne → langtidsminne → amnesi), til læring, språk, høyere kognisjon, og til slutt
den obligatoriske **anvendte/kliniske delen** (emosjon, depresjon/CBT, øyenvitne,
kognitiv doping). Den anvendte delen er IKKE valgfri — den står i ca. halvparten av
settene og bygger på Groome & Eysenck.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og a/b/c-håndverk | 2 | perfekt (meta) | «3 av 4», poeng-til-karakter, a/b/c-anatomien, navngivingskravet og åpen-bok-regelen (avskrift=0) må etableres FØR fagstoffet. |
| 1 | Hva er kognitiv psykologi | 2 | kunne | Fag/metode-oppgaven (kognisjon, kognitiv revolusjon, dobbel dissosiasjon) er ★ (V2019-u), men rammer resten. Kort bro fra PSY1000. |
| 2 | Oppmerksomhet | 3 | perfekt | Kjernetema: change/inattentional blindness (3/8), Lavies belastningsteori (3/8), Broadbent/Treisman, anvendelse (film/bil/cocktail-party). |
| 3 | Sensorisk minne | 2 | kunne/perfekt | Sperling er fast når sensorisk minne spørres (3/8), ofte koblet til fonologisk løkke. |
| 4 | Arbeidsminne | 3 | perfekt | **Bokas ryggrad (5/8).** Baddeleys 4 komponenter, fonologisk løkke + subvokal rehearsal, span↔ordlengdeeffekt↔Miller 7, artikulatorisk suppresjon. |
| 5 | Langtidshukommelse: koding, gjenhenting, mnemoteknikk | 4 | perfekt | **Bokas andre ryggrad (5/8, ofte ordrett gjenbrukt).** Innkodingsspesifisitet + Method of Loci + teorien bak (Paivio) + anvendelse (eksamen). |
| 6 | Amnesi og hukommelsens organisering | 2 | kunne | Lesjonsstudier (3/8): H.M./C.W./E.P./K.F., dobbel dissosiasjon, anterograd/retrograd, temporal gradient. Bærer drøftende hjemmeeksamen (V2020). |
| 7 | Læring og betinging | 3 | perfekt | Kjerneoppgave (3/8, Stangor & Walinga — «utenfor» kognisjonsboka). Klassisk+operant, forsterkningsskjemaer, fobi/PTSD. |
| 8 | Språk | 3 | perfekt/kunne | Forståelse fast (segmentering+cues, invarians, kategorisk persepsjon — 3/8). Produksjon (Garrett) + lesing (Dual Route) + ordgjenkjenning (Cohort/TRACE) ★. |
| 9 | Kunnskapsrepresentasjon, problemløsing og ekspertise | 2 | bør kjenne til | Grounded/amodal + funksjonell ekvivalens (★ V2022); problemløsing/ekspertise (★ V2019-u). Enkeltstående, men pensumkjerne. |
| 10 | Anvendt og klinisk kognisjon | 4 | perfekt | **Obligatorisk (Groome & Eysenck).** Emosjon (Murphy & Zajonc)+depresjon/CBT (fast 2/8), øyenvitne/feilinformasjon (Loftus), kognitiv doping. |
| 11 | Eksamenstrening | 7 | perfekt (meta) | 3 sjanger-/drillkapitler (a/b/c-drill + navngi-drill + feilvaksine) + 3 modellbesvarelser (DNA-krav ≥3, med bestått/A-versjon) + 1 komplett øvingseksamen i «3 av 4»-format. |

Rasjonale: perfekt-temaene (arbeidsminne, LTM-gjenhenting/Method of Loci, oppmerksom-
het, betinging, emosjon/CBT) får høyest kvote og full a/b/c-drill; kunne-temaene
(sensorisk minne, amnesi, språkforståelse) får solid dybde; bør-kjenne-til-stoffet
(kunnskapsrepresentasjon, problemløsing/ekspertise, Garrett, Dual Route, Cohort/TRACE,
kognitiv doping) dekkes kompakt og merkes eksplisitt «bør kjenne til». **Ingenting i
pensum utelates** — men fordi du velger 3 av 4, styrer prioriteringen *dybde og
drillmengde*, ikke hva som er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og a/b/c-håndverk |
| 1 | Hva er kognitiv psykologi |
| 2 | Oppmerksomhet |
| 3 | Sensorisk minne |
| 4 | Arbeidsminne |
| 5 | Langtidshukommelse: koding, gjenhenting og mnemoteknikk |
| 6 | Amnesi og hukommelsens organisering |
| 7 | Læring og betinging |
| 8 | Språk |
| 9 | Kunnskapsrepresentasjon, problemløsing og ekspertise |
| 10 | Anvendt og klinisk kognisjon |
| 11 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**S1** «(a) Definer/navngi» — presist definert fenomen/modell MED korrekt navn
(sensor krever navnet: «change blindness», «articulatory suppression», «Method of
Loci»; eksempel alene = ikke full pott). · **S2** «(b) Forklar mekanismen / beskriv
klassisk eksperiment» — den underliggende prosessen ELLER et navngitt eksperiment
MED tolkning av hva funnet betyr (Sperling, gorilla, dykkerstudien, Loftus). · **S3**
«(c) Anvend på scenario» — bruk teorien på et konkret tilfelle (film, bilkjøring,
eksamenslesing, øyenvitneavhør, depresjonsbehandling); transfer, ikke gjentakelse —
A/B-differensiereren. · **S4** «Beskriv og diskuter» (hjemmeeksamen-typen, V2020) —
bredere essay med selvstendig struktur, APA-kilder og forsøk på drøfting. **Nesten
hver faktisk oppgave er a/b/c = S1+S2+S3** — boka bygger derfor hvert kjernetema så
det kan besvares på alle tre ledd, pluss bonus-nyansene som løfter mot A.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** eksempel i stedet for definisjon — gir eksempler når definisjon etterspørres
(«definer kognisjon/sensorisk minne/oppmerksomhet») → ikke full pott. · **F2** navngir
ikke fenomenet/teorien — beskriver change blindness / artikulatorisk suppresjon /
Method of Loci-teorien riktig, men uten navn → mister full pott. · **F3** avskrift fra
åpen lærebok = 0 poeng (2021→); må omformuleres og forstås. · **F4** blander KTM og
arbeidsminne uten refleksjon (lagring vs. prosessering). · **F5** overser motsetningen
ordlengdeeffekt ↔ Millers 7 — svarer «7±2» uten å se at span bestemmes av rehearsal-
hastighet. · **F6** beskriver eksperiment uten å tolke resultatet (Sperling/Loftus/
gorilla må ledsages av hva funnet *betyr*). · **F7** hopper over anvendelsesleddet (c)
— gjengir teori men bruker den ikke på scenariet. · **F8** enkel vs. dobbel dissosia-
sjon — nevner dissosiasjon uten å forklare hvorfor *dobbel* gir sterkere bevis. ·
**F9** feiltilordner ruter i Dual Route — bytter om grafem–fonem-ruten (transparente)
og leksikalsk rute (opake/dype). · **F10** blander appraisal-debatten — får ikke fram
at Murphy & Zajonc *utfordrer* Lazarus, eller at debatten er blitt semantisk. · **F11**
utflytende/for langt svar — ignorerer «hold svarene korte», pådrar seg strukturtrekk. ·
**F12** feilinformasjonseffekten uten å se at feilinformasjonen ligger i selve
spørsmålsformuleringen; behandler blitslampeminner som kvalitativt annerledes.

### Sensorkrav og kredittlogikk (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Poeng per delspørsmål, maks 5 per oppgave, 15 totalt.** Karakter settes mekanisk
   fra poengsum (F<5≤E<7≤D<9≤C<12≤B<14≤A). Beståttterskel = 33 % (5 poeng).
2. **Kompensasjon kun innad i én oppgave** — sterkt delsvar dekker svakt delsvar i
   *samme* oppgave, ikke på tvers.
3. **Presis, navngitt begrepsbruk er grunnvalutaen.** Fenomener og teorier MÅ navngis
   eksplisitt for full pott (F2). Eksempler alene er ikke definisjon (F1).
4. **Anvendelse (ledd c) krever transfer** — kandidaten må *bruke* teorien på
   scenariet, ikke gjenta den (F7). Dette er A/B-differensiereren.
5. **Struktur og korthet premieres; utflytende svar trekker** (F11). «Hold svarene
   korte» er en reell instruks.
6. **Åpen bok (2021→): avskrift = 0 poeng** (F3). Ordrett kopiering straffes hardt —
   derfor lærer boka å *forstå og omformulere*.
7. **Tolk eksperimentet** — beskrivelse uten hva funnet *betyr* gir ikke full pott (F6).

### A/B-markører (bonus i veiledningene — «Toppsvar-løftet» per kapittel bygger på disse)

- Knytte oppmerksomhet til **tidlig vs. sen seleksjon** (Broadbent/Lavie) — eksplisitt bonus.
- Påpeke at **gjenhenting er rekonstruksjon**, ikke reproduksjon.
- Se **motsetningen** ordlengdeeffekt (span=rehearsal-hastighet) ↔ Millers faste 7±2.
- Navngi og forklare **artikulatorisk suppresjon** (ikke bare «det forstyrrer»).
- Nevne **dobbel dissosiasjon** (og hvorfor den sier mer enn enkel) i lesjonsstudier;
  beskrive **temporal gradient** ved retrograd amnesi.
- Nevne **rekursjon** ved språklig produktivitet; **objektbasert oppmerksomhet** ved
  inattentional blindness.
- Koble medikamenteffekter til **reseptorer** og til **hvilke kognitive mål** påvirkes.
- Se at Murphy & Zajonc **utfordrer Lazarus' appraisal-krav**, og at debatten er
  blitt semantisk.

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Bred redegjørelse med anvendelseslag, ikke fri drøfting.** PSY1300 ligner PSYC1201/
   PSY1000s «fakta-forklarings-hybrid», men med to forsterkninger: (a) den **faste
   a/b/c-tredelingen** styrer hver temamodul (definer → mekanisme+eksperiment → anvend);
   (b) **presis navngiving** er grunnvalutaen (i motsetning til PSYC1201, der sensor
   uttrykkelig sier «forklaring slår navn»). Her koster manglende navngiving full pott —
   derfor er navngi-drillen (flashcards fenomen⇄navn⇄teoretiker/studie) tyngre vektet.
2. **Den anvendte/kliniske delen (Del 10) er obligatorisk**, ikke perifer — den bygger
   på en egen pensumbok (Groome & Eysenck) og står i ca. halvparten av settene.
3. **Betingingsstoffet (Del 7) er «utenfor» kognisjonsboka** — det bygger på Stangor &
   Walinga, ikke Gilhooly. Lett å overse; går igjen i 3/8 sett.
4. **DNA-drøftings modellbesvarelse-krav (≥3 kapitler)** oppfylles i Del 11, men i
   **bestått/A-versjon**-form (analysens differensierte modellsvar), ikke A/C som i
   PSYC1201 — fordi karakteren her er poengmekanisk, ikke helhetsvurdert.

### Avgrensning mot andre byggede psykologiemner (unngå dublering)

- **PSY1000** (innføring, ★skjelett) berører kognisjon bare i oversikt (ett–to
  breddeessay om hukommelse/sansing/tenkning som del av et 40-temas oversiktsfag).
  **PSY1300 er dybdeemnet:** samme temaer på modell- og eksperimentnivå. Del 1 åpner
  med en kort «dette kjenner du i grove trekk fra PSY1000»-bro (lenk til PSY1000-
  kapitler når de finnes) og går deretter rett på modellene.
- **PSY1010** (metode) og **PSYC1201/PSY1100** (sosialpsykologi) har ingen reell
  innholdsoverlapp med kognisjonskjernen. Betingingsstoffet (Del 7) og appraisal-
  debatten (Del 10) er de eneste berøringspunktene med PSY1000, men behandles her på
  eksperiment-/modellnivå.

---

## 3. Kapitler

Hvert temakapittel følger DNA-drøftings temakapittel-DNA, konkretisert til a/b/c-
malen: `tip` Eksamensvinkel → `text` temaet i fagets landskap → `definition`
kjernebegreper (navngitt, forankret) → `text` mekanisme/posisjoner → `example`
a/b/c-modellsvar (bestått + A-versjon) og anvendelse → `warning` typiske feil →
`exercise` × 4–8 (a/b/c-oppgaver med momentliste-løsning) → `collapsible` pensumkart/
navngi-kort. Symbol-/formelliste er unødvendig (ingen matematikk); unntak: ingen.

### Del 0 — Eksamenskart og a/b/c-håndverk

#### Kapittel 0.1: Slik er PSY1300-eksamen — «3 av 4» og poengmaskinen
**id:** `psy1300-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** (ingen)

- **Kapitteltype:** meta/eksamenskart.
- **Description:** Eksamensformen (skriftlig skoleeksamen, «bare 3 av 4 oppgaver skal
  besvares — hold svarene korte»), poeng-til-karakter-tabellen, hjemmeeksamen-avviket
  (V2020: 2 av 3, 1600 ord), den «to-delte» naturen (teori + anvendt/klinisk i samme
  sett) og åpen-bok-skiftet fra 2021.
- **Eksamensbelegg:** Gjelder alle 8 sett. Sjangre: meta. Prioritet: **perfekt** (rammen).
- **Begrepskontrakt:** «3 av 4»-valget; maks 5 poeng/oppgave, 15 totalt; **poeng-til-
  karakter** (F<5≤E<7≤D<9≤C<12≤B<14≤A, beståttterskel 33 %); kompensasjon kun innad i
  én oppgave; svarspråk (norsk/engelsk/svensk/dansk); vanskelighetsjustering;
  hjemmeeksamen V2020 (2 av 3, 1600 ord, APA, stryk på én = stryk); åpen bok fra 2021
  (avskrift=0). *(Verifiser gjeldende eksamensform i emnebeskrivelsen — arkivet
  dokumenterer ett sett, ikke to atskilte eksamener.)*
- **Toppsvarets momentliste:** ikke aktuelt (meta) — men kapitlet skal lære studenten
  å **velge 3 oppgaver strategisk** (velg der du kan alle tre ledd) og **budsjettere
  tid** (~20–30 min per oppgave, kort og strukturert).
- **Toppsvar-løftet:** forstå at poeng er additive per delledd — et sterkt (c)-ledd kan
  redde et svakt (a); at «hold svarene korte» er en reell scoringsregel.
- **Typiske feil:** F11 (utflytende svar); velge en oppgave man bare kan to ledd av.
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 0.2: A/b/c-anatomien — definer, forklar, anvend (og navngi alltid)
**id:** `psy1300-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-0-1`

- **Kapitteltype:** meta/essayhåndverk.
- **Description:** Den faste a/b/c-malen som håndverk: (a) definer/navngi presist, (b)
  forklar mekanismen eller beskriv et klassisk eksperiment MED tolkning, (c) anvend på
  scenariet. Hva som skiller bestått/C/A ifølge sensorlogikken; navngivingskravet;
  hvorfor eksempel ikke er definisjon; hvorfor avskrift straffes.
- **Eksamensbelegg:** Gjelder hver oppgave i hvert sett. Sjangre: S1–S4 (meta).
  Prioritet: **perfekt** (den viktigste malen i boka).
- **Begrepskontrakt:** **a/b/c-anatomien**; **navngivingskravet** (F2); **definisjon vs.
  eksempel** (F1); **eksperiment + tolkning** (F6); **anvendelse/transfer** (F7);
  **bonus-nyansene** (A/B-markørene fra §2); **avskriftsforbudet** (F3); **nivåbildet**
  (A/B 12–15: navngir+definerer+anvender+bonus; C 9–11: korrekt kjerne, svak anvendelse;
  D/E 5–8: upresist, glemmer navn; F<5: to+ oppgaver ubesvart).
- **Toppsvarets momentliste:** vise et fullt a/b/c-modellsvar i **bestått-versjon**
  (korrekt kjerne) og **A-versjon** (bonus-nyansene lagt på), på et nøytralt eksempel-
  tema — malen alle temakapitlene gjenbruker.
- **Toppsvar-løftet:** internalisere at (c) og bonus-nyansene er det som løfter fra C til A.
- **Typiske feil:** F1, F2, F3, F6, F7, F11 (alle innføres her, drilles i temakapitlene).
- **Kvote:** 12 quiz / 14 flashcards.

### Del 1 — Hva er kognitiv psykologi

#### Kapittel 1.1: Kognisjon, den kognitive revolusjon og dobbel dissosiasjon
**id:** `psy1300-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Hva «kognisjon» er (indre representasjon + kognitive operasjoner),
  den kognitive revolusjon (fra behaviorisme til informasjonsprosessering) og dobbel
  dissosiasjon som fagets metodologiske kjerne. Bro fra PSY1000.
- **Eksamensbelegg:** Fag/vitenskapsteoretisk åpningsoppgave (V2019-utsatt oppg. 1).
  Sjangre: S1, S2. Prioritet: kunne (§7 pkt. 10 — men rammer resten av boka).
- **Begrepskontrakt:** Gilhooly ⚠: **kognisjon** (indre representasjon + operasjoner på
  den — definer, ikke eksemplifiser: F1); **den kognitive revolusjon** (paradigmeskifte
  fra behaviorisme til informasjonsprosessering; datamaskin-metaforen); **dobbel
  dissosiasjon** (funksjonell uavhengighet av to systemer; Broca/Wernicke som klassisk
  eksempel; hvorfor *dobbel* sier mer enn enkel — F8); **lesjons-/kasusmetode**.
- **Toppsvarets momentliste:** (1) definer kognisjon presist (F1); (2) hva den kognitive
  revolusjon var et brudd med; (3) dobbel dissosiasjon definert MED eksempel og MED
  begrunnelse for hvorfor den er sterkere enn enkel dissosiasjon (F8).
- **Toppsvar-løftet:** koble dobbel dissosiasjon fremover til amnesi (Del 6) og språk
  (Broca/Wernicke, Dual Route); ramme informasjonsprosessering som modell-språket boka bruker.
- **Typiske feil:** F1 (eksempler på tenkning i stedet for definisjon av kognisjon);
  F8 (dissosiasjon uten «dobbel»-begrunnelsen); F2 (glemme å navngi «den kognitive revolusjon»).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 1.2: Informasjonsprosesserings-rammen og de tre minnesystemene
**id:** `psy1300-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-1-1`

- **Kapitteltype:** tema (kart/bro).
- **Description:** Et samlekart over prosesseringskjeden (sensorisk register →
  korttids-/arbeidsminne → langtidsminne) som binder Del 2–6 sammen, og skillet
  lagring vs. prosessering (KTM vs. arbeidsminne). Kort «bør kjenne til»-plass til
  modal-modellen (Atkinson & Shiffrin).
- **Eksamensbelegg:** Ikke egen oppgave, men rammen mange oppgaver bygger på (WM-vs-KTM
  spørres direkte, V2022/V2024-u). Sjangre: S1. Prioritet: kunne (kartkapittel).
- **Begrepskontrakt:** Gilhooly ⚠: **sensorisk register**, **korttidsminne vs.
  arbeidsminne** (lagring vs. lagring+prosessering — F4); **langtidsminne**; **modal-
  modellen (Atkinson & Shiffrin)** («bør kjenne til», etter kjernen); informasjons-
  flyt og flaskehalser.
- **Toppsvarets momentliste:** (1) navngi de tre systemene med funksjon; (2) forklar
  KTM↔arbeidsminne-skillet (lagring vs. prosessering, F4); (3) hvor i kjeden
  oppmerksomhet, rehearsal og innkoding virker.
- **Toppsvar-løftet:** bruke kartet til å plassere hvert senere tema; se at
  «arbeidsminne» er en videreutvikling av «korttidsminne», ikke et synonym (F4).
- **Typiske feil:** F4 (KTM=arbeidsminne uten refleksjon); overvekt på modal-modellen
  (lavfrekvent — merk «bør kjenne til»).
- **Kvote:** 12 quiz / 14 flashcards.

### Del 2 — Oppmerksomhet

#### Kapittel 2.1: Inattentional og change blindness — fenomen og klassiske eksperimenter
**id:** `psy1300-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Endringsblindhet og uoppmerksomhetsblindhet: definisjon, navngiving
  og de klassiske eksperimentene (Simons & Chabris' gorilla, Rensink, Mack & Rock) med
  tolkning av hva de viser om selektiv oppmerksomhet.
- **Eksamensbelegg:** Fast oppmerksomhetstema (V2019, V2020, V2023). Sjangre: S1, S2.
  Prioritet: **perfekt** (§7 pkt. 3).
- **Begrepskontrakt:** Gilhooly ⚠: **selektiv oppmerksomhet**; **inattentional
  blindness** (unnlate å oppdage et uventet objekt fordi oppmerksomheten er opptatt);
  **change blindness** (unnlate å oppdage en endring mellom to bilder/scener);
  **Simons & Chabris «gorilla»** (~50 % overser gorillaen når de teller pasninger);
  **Rensink** (flimmer-paradigmet); **Mack & Rock**; **objektbasert oppmerksomhet**
  (A/B-bonus). Navngi fenomen OG studie (F2).
- **Toppsvarets momentliste:** (1) definer og **navngi** begge fenomenene, med skillet
  mellom dem; (2) beskriv ett klassisk eksperiment og **tolk funnet** (F6 — hva det
  sier om oppmerksomhetens rolle); (3) knytt til begrepet objektbasert oppmerksomhet
  (bonus).
- **Toppsvar-løftet:** skillet inattentional vs. change blindness presist; tolke funnet
  (ikke bare fortelle historien om gorillaen); bro til Lavie (2.2) — hvorfor «load»
  avgjør om det uventede oppdages.
- **Typiske feil:** F2 (beskrive uten å navngi fenomenet); F6 (fortelle om gorillaen
  uten tolkning); blande de to blindhetstypene.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 2.2: Seleksjonsteoriene — Broadbent, Lavies belastningsteori og Treismans FIT
**id:** `psy1300-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `psy1300-2-1`

- **Kapitteltype:** tema.
- **Description:** Forklaringsverktøyene bak selektiv oppmerksomhet: Broadbents filter-
  teori (tidlig seleksjon), Lavies (perseptuelle) belastningsteori (load bestemmer
  tidlig/sen seleksjon) og Treismans Feature Integration Theory (features, pop-out,
  top-down søk). Tidlig vs. sen seleksjon er A/B-bonusen.
- **Eksamensbelegg:** Lavies belastningsteori fast forklaringsverktøy (V2019, V2023,
  V2024-u). Sjangre: S2. Prioritet: **perfekt** (§7 pkt. 3).
- **Begrepskontrakt:** Gilhooly ⚠: **Broadbents filterteori** (tidlig seleksjon; én
  kanal slipper gjennom); **Lavies (perseptuelle) belastningsteori** (mengde
  prosessering av ikke-attendert stimulus avhenger av *load* på hovedoppgaven; høy
  load → tidlig seleksjon, lav load → sen seleksjon); **tidlig vs. sen seleksjon**
  (A/B-bonus); **Treismans Feature Integration Theory** (features prosesseres
  parallelt/pre-attentivt; oppmerksomhet «limer» dem sammen; pop-out ved enkelt-
  feature, seriell søk ved konjunksjon); **cocktail-party** (kobling 2.3).
- **Toppsvarets momentliste:** (1) **navngi** teoriene; (2) forklar mekanismen i hver;
  (3) bruk **Lavie** til å forklare NÅR det uventede oppdages (load-avhengig); (4)
  eksplisitt **tidlig vs. sen seleksjon** (bonus); (5) FIT for søk/pop-out.
- **Toppsvar-løftet:** kontrastere Broadbent (fast tidlig filter) mot Lavie (fleksibel,
  load-avhengig); bruke FIT til å forklare hvordan man kan *skjule* et objekt (bro til
  film-anvendelsen i 2.3).
- **Typiske feil:** F2 (forklare uten å navngi teoriene); glemme tidlig/sen-seleksjon-
  bonusen; blande FIT-features med Lavie-load.
- **Kvote:** 20 quiz / 28 flashcards.

#### Kapittel 2.3: Anvendt oppmerksomhet — film, bilkjøring og cocktail-party
**id:** `psy1300-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-2-2`

- **Kapitteltype:** tema (anvendelse).
- **Description:** Ledd (c)-banken for oppmerksomhet: hvordan en filmregissør skjuler
  kontinuitetsfeil ved å overbelaste oppmerksomheten, hvorfor bilkjøring rammes av
  change blindness under høy load, og cocktail-party-effekten (sen seleksjon) som
  svekker Broadbents rene filterteori.
- **Eksamensbelegg:** Filmkontinuitet/bilkjøring (V2019, V2020); cocktail-party
  (V2024-u). Sjangre: S3. Prioritet: **perfekt** (A/B-differensiereren for oppmerksomhet).
- **Begrepskontrakt:** **filmkontinuitet** (kontinuitetsfeil skjules ved høy oppgave-
  load / change blindness); **bilkjøring** (mobilbruk øker load → uoppmerksomhets-
  blindhet); **cocktail-party-effekten** (eget navn i mengden fanges opp → sen
  seleksjon → svekker Broadbents tidlige filter, styrker Lavie/Treisman); anvende
  FIT til å kle et objekt for å skjule det.
- **Toppsvarets momentliste:** (1) velg scenario; (2) **bruk** riktig teori (Lavie/
  Broadbent/FIT) på det (F7 — ikke bare gjenta teorien); (3) forklar hvorfor cocktail-
  party utfordrer tidlig seleksjon.
- **Toppsvar-løftet:** vise transfer eksplisitt (regissøren *bruker* load; sjåføren
  *rammes av* change blindness); knytte cocktail-party til sen seleksjon (bonus).
- **Typiske feil:** F7 (gjengi teori uten å anvende); forklare cocktail-party uten å se
  at det svekker Broadbent.
- **Kvote:** 16 quiz / 18 flashcards.

### Del 3 — Sensorisk minne

#### Kapittel 3.1: Sensorisk register og Sperlings eksperiment
**id:** `psy1300-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `psy1300-1-2`

- **Kapitteltype:** tema.
- **Description:** Det sensoriske registeret (ikonisk/ekkoisk/haptisk, modalitets-
  spesifikt, pre-attentivt, raskt forfall) og Sperlings tachistoskop-eksperiment
  (helrapport vs. delrapport) med korrekt tolkning: stort men raskt forfallende register.
- **Eksamensbelegg:** Fast når sensorisk minne spørres (V2021, V2024, V2024-u).
  Sjangre: S1, S2. Prioritet: **perfekt** når temaet dukker opp.
- **Begrepskontrakt:** Gilhooly ⚠: **sensorisk register**; **ikonisk / ekkoisk /
  haptisk register**; **pre-attentiv lagring**; **rask forfall** (< ~2 sek); **Sperlings
  tachistoskop-eksperiment** (helrapport ~4–5 elementer vs. delrapport ~3 per rad);
  tolkning: **hele registeret var tilgjengelig kort, men forfaller før helrapport
  kan leses ut** (F6).
- **Toppsvarets momentliste:** (1) **navngi** og definer sensorisk register (F1/F2);
  (2) beskriv **Sperling** og **tolk** hvorfor delrapport > helrapport betyr stort,
  raskt forfallende register (F6); (3) hvordan innhold overføres videre via oppmerksomhet.
- **Toppsvar-løftet:** tolke funnet korrekt (F6 — mange gjengir bare tallene); knytte
  ikonisk/ekkoisk til modalitet; bro til fonologisk løkke (3.1→4).
- **Typiske feil:** F1 (eksempel i stedet for definisjon); F6 (Sperling-tall uten
  tolkning); glemme at registeret er pre-attentivt.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 3.2: Fra ekko til fonologisk løkke — koblingen mot arbeidsminnet
**id:** `psy1300-3-2` · **number:** 3.2 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-3-1`

- **Kapitteltype:** tema (bro).
- **Description:** Hvordan ekkoisk innhold overføres via oppmerksomhet til den
  fonologiske bufferen og holdes ved subvokal rehearsal — den faste koblingen mellom
  sensorisk minne og arbeidsminne som flere sett tester samlet.
- **Eksamensbelegg:** Sensorisk minne koblet til fonologisk løkke (V2021, V2024,
  V2024-u — ofte samme oppgave). Sjangre: S2, S3. Prioritet: kunne (bindeledd).
- **Begrepskontrakt:** **ekkoisk → fonologisk buffer**; **oppmerksomhet som filter/
  overføring**; **subvokal rehearsal** (forgriper 4.1); forskjellen på pre-attentivt
  register og aktivt vedlikeholdt buffer.
- **Toppsvarets momentliste:** (1) hvor oppmerksomheten griper inn i overføringen; (2)
  hvordan rehearsal holder innholdet aktivt; (3) hvorfor dette forklarer at vi «hører
  etterklangen» av det siste vi hørte.
- **Toppsvar-løftet:** binde sensorisk register, oppmerksomhet og arbeidsminne til én
  kjede; peke fram mot ordlengdeeffekten (4.2).
- **Typiske feil:** F4 (blande buffer og register); hoppe over oppmerksomhetens rolle.
- **Kvote:** 12 quiz / 14 flashcards.

### Del 4 — Arbeidsminne

#### Kapittel 4.1: Baddeleys modell — de fire komponentene
**id:** `psy1300-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `psy1300-1-2`

- **Kapitteltype:** tema.
- **Description:** Bokas ryggrad: Baddeleys arbeidsminnemodell med fonologisk løkke,
  visuospatial skisseblokk, episodisk buffer og sentral eksekutiv — hver komponents
  funksjon, slavesystem-begrepet og skillet arbeidsminne vs. korttidsminne.
- **Eksamensbelegg:** Den suverene gjengangeren (V2019, V2019-u, V2022, V2024,
  V2024-u — 5/8, fast a/b/c-oppgave). Sjangre: S1, S2. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt:** Gilhooly ⚠: **fonologisk løkke** (fonologisk buffer +
  artikulatorisk kontrollprosess; subvokal rehearsal); **visuospatial skisseblokk**
  (visuell/romlig info); **episodisk buffer** (integrerer på tvers, kobler til LTM);
  **sentral eksekutiv** (styrer, allokerer oppmerksomhet — ikke lagring); **slave-
  systemer** (de tre første, styrt av sentral eksekutiv); **arbeidsminne vs. korttids-
  minne** (lagring+prosessering vs. ren lagring — F4).
- **Toppsvarets momentliste:** (1) **navngi og beskriv kort alle fire** komponentene
  med funksjon; (2) hvilke tre er slavesystemer og hvorfor; (3) skillet WM vs. KTM
  (lagring vs. prosessering, F4).
- **Toppsvar-løftet:** presisere at sentral eksekutiv IKKE lagrer (allokerer
  oppmerksomhet); at episodisk buffer er den nyeste komponenten og hvorfor den ble lagt til.
- **Typiske feil:** F4 (WM=KTM uten refleksjon); F2 (beskrive uten å navngi komponenten);
  glemme episodisk buffer.
- **Kvote:** 20 quiz / 30 flashcards.

#### Kapittel 4.2: Fonologisk løkke i praksis — span, ordlengdeeffekt og Millers tall 7
**id:** `psy1300-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-4-1`

- **Kapitteltype:** tema.
- **Description:** Hva som bestemmer fonologisk WM-span: rehearsal-hastighet, ikke et
  fast antall enheter. Ordlengdeeffekten og irrelevant-tale-effekten som bevis, og den
  kritiske motsetningen mot Millers «magiske tall 7±2».
- **Eksamensbelegg:** Nesten alltid ledd (c) i arbeidsminne-oppgaven (V2019-u, V2022,
  V2024-u). Sjangre: S2, S3. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt:** Gilhooly ⚠: **Millers magiske tall 7±2** (kapasitet i «chunks»);
  **ordlengdeeffekt** (færre lange ord holdes enn korte → span bestemmes av hvor mye
  som rehearses på ~2 sek); **irrelevant-tale-effekt**; **rehearsal-hastighet** som
  span-determinant; **motsetningen** ordlengdeeffekt ↔ fast tall 7 (F5 — bonus).
- **Toppsvarets momentliste:** (1) hva bestemmer span (rehearsal-hastighet); (2)
  ordlengdeeffekten som bevis; (3) **se motsetningen**: span er ikke et fast antall
  enheter (Miller), men et tidsvindu (F5).
- **Toppsvar-løftet:** eksplisitt kontrast ordlengdeeffekt vs. Miller (den store
  A/B-markøren her); knytte irrelevant-tale til bufferens sårbarhet.
- **Typiske feil:** F5 (svare bare «7±2» uten å se rehearsal-forklaringen); F2 (ikke
  navngi ordlengdeeffekten).
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 4.3: Interferens og interaksjon — artikulatorisk suppresjon og telefonnummeret
**id:** `psy1300-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-4-2`

- **Kapitteltype:** tema (anvendelse).
- **Description:** Ledd (b/c)-banken: hvordan komponentene samvirker i en konkret
  oppgave (taste inn et telefonnummer sett på skjerm), og hvorfor det å snakke
  (artikulatorisk suppresjon) forstyrrer — det navngitte fenomenet sensor krever.
- **Eksamensbelegg:** Interaksjon i konkret oppgave + artikulatorisk suppresjon (V2019,
  V2019-u, V2024-u). Sjangre: S2, S3. Prioritet: **perfekt**.
- **Begrepskontrakt:** **komponentinteraksjon** (skisseblokk holder visuell info →
  artikulatorisk kontrollprosess konverterer til fonologisk form → fonologisk buffer
  holder via subvokal rehearsal → sentral eksekutiv styrer); **artikulatorisk
  suppresjon** (samtidig tale okkuperer artikulatorisk kontroll → hindrer rehearsal →
  span faller) — navngi (F2).
- **Toppsvarets momentliste:** (1) spor telefonnummeret gjennom komponentene (F7 —
  bruk modellen, ikke bare list den); (2) **navngi** artikulatorisk suppresjon og
  forklar HVORFOR den forstyrrer (blokkerer rehearsal), ikke bare AT den gjør det.
- **Toppsvar-løftet:** eksplisitt mekanisme for suppresjon (okkuperer artikulatorisk
  kontrollprosess); koble til ordlengdeeffekten (samme buffer-flaskehals).
- **Typiske feil:** F2 (si «det forstyrrer» uten å navngi suppresjon); F7 (liste
  komponentene uten å spore oppgaven gjennom dem).
- **Kvote:** 16 quiz / 20 flashcards.

### Del 5 — Langtidshukommelse: koding, gjenhenting og mnemoteknikk

#### Kapittel 5.1: Hukommelsens taksonomi — deklarativt/ikke-deklarativt, episodisk/semantisk
**id:** `psy1300-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-1-2`

- **Kapitteltype:** tema.
- **Description:** Tulvings inndeling av langtidsminnet: deklarativt (episodisk vs.
  semantisk) vs. ikke-deklarativt (prosedural, priming). Kjerne-taksonomien flere
  oppgaver bygger på, ofte via lesjonsstudier.
- **Eksamensbelegg:** Kjerne-taksonomi (V2020, V2021). Sjangre: S1. Prioritet: kunne
  (rammer amnesi-drøftingen i Del 6).
- **Begrepskontrakt:** Gilhooly ⚠ / Tulving: **deklarativt vs. ikke-deklarativt**;
  **episodisk** (hendelser, tid/sted) **vs. semantisk** (fakta/kunnskap); **prosedural
  hukommelse**; **priming** (kobling 6.2); hvorfor inndelingen støttes av dissosiasjoner.
- **Toppsvarets momentliste:** (1) **navngi** systemene med definisjon; (2) skillet
  episodisk/semantisk med eksempel; (3) at ikke-deklarativt ofte er intakt ved amnesi
  (bro til 6).
- **Toppsvar-løftet:** knytte taksonomien til dobbel dissosiasjon (amnesi bevarer
  ikke-deklarativt); Tulving som avsender.
- **Typiske feil:** F1 (eksempler i stedet for definisjon); blande episodisk/semantisk.
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 5.2: Gjenhenting og innkodingsspesifisitetsprinsippet
**id:** `psy1300-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `psy1300-5-1`

- **Kapitteltype:** tema.
- **Description:** Bokas andre ryggrad: gjenhenting som cue-avhengig rekonstruksjon,
  innkodingsspesifisitetsprinsippet, kontekst-/tilstandsavhengig gjenhenting
  (dykkerstudien, humør/musikk) og hvordan prinsippet testes.
- **Eksamensbelegg:** Fast oppgave, ofte ordrett gjenbrukt (V2019, V2021, V2022, V2023,
  V2024-u — 5/8). Sjangre: S1, S2. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** Gilhooly/Groome & Eysenck ⚠: **cue-avhengig gjenhenting**
  (retrieval cue ↔ minnespor); **gjenhenting som rekonstruksjon** (ikke reproduksjon —
  A/B-bonus); **innkodingsspesifisitetsprinsippet** (gjenhenting bedres når cues ved
  gjenhenting matcher trekk til stede ved innkoding); **kontekst-avhengig gjenhenting**
  (dykkerstudien: land/vann); **tilstandsavhengig** (humør/rus/musikk); testdesign
  (samme vs. ulik kontekst ved innlæring/test).
- **Toppsvarets momentliste:** (1) hvordan gjenhenting foregår (cue ↔ spor); (2)
  **innkodingsspesifisitet** definert + en **testbar studie** (dykker); (3) at
  gjenhenting er **rekonstruksjon** (bonus).
- **Toppsvar-løftet:** rekonstruksjon-poenget (bonus); dykkerstudien som konkret test;
  bro til Method of Loci (5.3) og eksamensanvendelse (5.4).
- **Typiske feil:** F2 (ikke navngi prinsippet); F6 (dykker uten tolkning); glemme
  rekonstruksjonspoenget.
- **Kvote:** 20 quiz / 28 flashcards.

#### Kapittel 5.3: Method of Loci og teorien bak — Paivios dual-koding
**id:** `psy1300-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `psy1300-5-2`

- **Kapitteltype:** tema.
- **Description:** Method of Loci som mnemoteknikk (fast huskerute, gjenstander plassert
  på steder), og — det sensor eksplisitt krever — en **navngitt teori** bak: Paivios
  dual-koding, alternativt level-of-processing, spacing, generation effect.
- **Eksamensbelegg:** Fast ledd (c), teorien MÅ navngis (V2019, V2021, V2022, V2023,
  V2024-u — 5/8). Sjangre: S2, S3. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** Groome & Eysenck ⚠: **Method of Loci** (loci-teknikken: fast
  rute, visualiser hvert element på et sted); **Paivios dual-koding** (verbal +
  visuell koding gir to gjenhentingsveier — den navngitte teorien, F2); **level-of-
  processing** (dyp semantisk koding > overflatisk); **spacing effect**; **generation
  effect**; hvorfor loci fungerer som cue-struktur (innkodingsspesifisitet i praksis).
- **Toppsvarets momentliste:** (1) beskriv **Method of Loci** presist; (2) **navngi og
  forklar** en teori bak (Paivios dual-koding — F2, det eksplisitte kravet); (3) anvend
  på handleliste/eksamen.
- **Toppsvar-løftet:** koble loci til innkodingsspesifisitet (loci = selvlagde cues);
  nevne dual-koding *og* level-of-processing som alternative forklaringer.
- **Typiske feil:** F2 (beskrive teknikken uten å navngi teorien — mister full pott);
  F7 (ikke anvende på et scenario).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 5.4: Anvendt hukommelse — studieteknikk og eksamen
**id:** `psy1300-5-4` · **number:** 5.4 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-5-3`

- **Kapitteltype:** tema (anvendelse).
- **Description:** Ledd (c)-banken for LTM: hvordan hukommelsesteori brukes på
  studieteknikk og eksamen — mental context reinstatement, tilstandsgjenskaping,
  spacing/testing effect — og glemsel (interferens, cue-svikt).
- **Eksamensbelegg:** Fast anvendelsesledd (V2019, V2021). Sjangre: S3. Prioritet:
  **perfekt** (differensierer).
- **Begrepskontrakt:** **mental context reinstatement** (gjenskape innkodingskonteksten
  mentalt ved test); **tilstandsgjenskaping**; **spacing/testing effect** som
  studieteknikk; **glemsel** (interferens: proaktiv/retroaktiv; cue-avhengig glemsel —
  «bør kjenne til» plassert etter kjernen).
- **Toppsvarets momentliste:** (1) velg teknikk; (2) **bruk** innkodingsspesifisitet på
  eksamenssituasjonen (F7); (3) forklar hvorfor spacing/testing slår gjenlesing.
- **Toppsvar-løftet:** eksplisitt transfer fra prinsipp til råd; koble glemsel til
  cue-svikt (ikke bare «forfall»).
- **Typiske feil:** F7 (gjenta teori uten å anvende); glemme å begrunne rådet i et navngitt prinsipp.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 6 — Amnesi og hukommelsens organisering

#### Kapittel 6.1: Amnesi og lesjonsstudier — H.M., C.W., E.P., K.F.
**id:** `psy1300-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-5-1`

- **Kapitteltype:** tema.
- **Description:** Hva lesjons-/amnesistudier lærer oss om hukommelsens organisering:
  de klassiske kasusene, anterograd/retrograd amnesi, temporal gradient, amnesi-
  syndromets kardinalsymptomer, og dobbel dissosiasjon (K.F. vs. amnesikere).
- **Eksamensbelegg:** Bærende i drøftings-/klinisk retning (V2019-u, V2020, V2021 —
  3/8; kjernen i hjemmeeksamen V2020). Sjangre: S2, S4. Prioritet: kunne (§7 pkt. 8).
- **Begrepskontrakt:** Gilhooly ⚠: **anterograd amnesi** (ny innlæring rammes) vs.
  **retrograd amnesi** (gamle minner rammes); **temporal gradient** (nyere minner mer
  sårbare ved retrograd — bonus); **amnesisyndromets kardinalsymptomer**; **H.M.**
  (medial temporallapp/hippocampus; intakt KTM+prosedural, svekket ny deklarativ);
  **C.W.**, **E.P.**; **K.F.** (svekket KTM, intakt LTM); **dobbel dissosiasjon** K.F.
  vs. amnesikere → funksjonell uavhengighet av KTM og LTM (F8).
- **Toppsvarets momentliste:** (1) beskriv et kasus og **hva det viser** (F6); (2)
  anterograd vs. retrograd; (3) **dobbel dissosiasjon** K.F./amnesikere og hvorfor den
  er sterkere enn enkel (F8).
- **Toppsvar-løftet:** temporal gradient (bonus); dobbel dissosiasjon som argument for
  atskilte systemer; knytte til taksonomien (5.1).
- **Typiske feil:** F8 (dissosiasjon uten «dobbel»-begrunnelse); F6 (kasus uten
  tolkning); forveksle anterograd/retrograd.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 6.2: Priming og ikke-deklarativ hukommelse hos amnesipasienter
**id:** `psy1300-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-6-1`

- **Kapitteltype:** tema.
- **Description:** Priming som ikke-deklarativt fenomen, og hvordan man designer et
  eksperiment for å vise at amnesipasienter har intakt priming til tross for svekket
  eksplisitt minne — et klinisk kjernedesign.
- **Eksamensbelegg:** Enkeltstående, men klinisk kjerne (V2021). Sjangre: S1, S2.
  Prioritet: bør kjenne til (§7 pkt. 10 — men konkret designoppgave).
- **Begrepskontrakt:** **priming** (tidligere eksponering letter senere prosessering,
  uten bevisst erindring); **perseptuelt vs. konseptuelt priming** (kort); **design**
  (studieord → ordfragment-/stamme-fullføring; sammenlign amnesikere og kontroller på
  eksplisitt gjenkjenning vs. implisitt fullføring); dissosiasjon (intakt priming,
  svekket eksplisitt minne).
- **Toppsvarets momentliste:** (1) definer og **navngi** priming (F2); (2) skisser et
  **testbart design** (eksplisitt vs. implisitt mål); (3) tolk: intakt priming +
  svekket erindring = ikke-deklarativt system spart.
- **Toppsvar-løftet:** eksplisitt kobling til taksonomien og dobbel dissosiasjon;
  presist skille mellom implisitt og eksplisitt mål i designet.
- **Typiske feil:** F2 (ikke navngi priming); designe en test som egentlig måler
  eksplisitt minne.
- **Kvote:** 12 quiz / 16 flashcards.

### Del 7 — Læring og betinging

#### Kapittel 7.1: Klassisk betinging — Pavlov, US/UR/CS/CR
**id:** `psy1300-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Klassisk betinging fra Stangor & Walinga: US utløser UR, nøytral
  stimulus blir CS, CS alene utløser CR — pluss ekstinksjon, generalisering og
  andreordens betinging. Stoff «utenfor» kognisjonsboka, lett å overse.
- **Eksamensbelegg:** Fast oppgave (V2021, V2022, V2024 — 3/8). Sjangre: S1, S2.
  Prioritet: **perfekt** (§7 pkt. 4).
- **Begrepskontrakt:** Stangor & Walinga (kap. 8) ⚠: **ubetinget stimulus/respons
  (US/UR)**; **betinget stimulus/respons (CS/CR)**; **Pavlov** (mat→salivering →
  bjelle→salivering); **ekstinksjon**; **spontan gjenoppretting**; **generalisering** vs.
  **diskriminering**; **andreordens betinging**. Navngi begrepsparene korrekt (F2).
- **Toppsvarets momentliste:** (1) **navngi** US/UR/CS/CR og forklar rekkefølgen; (2)
  Pavlov som eksempel; (3) ekstinksjon/generalisering (bonus).
- **Toppsvar-løftet:** presis timing (CS presenteres rett før/samtidig med US);
  andreordens betinging; bro til fobier (7.3).
- **Typiske feil:** F2 (forveksle US/CS eller UR/CR); definere betinging med feil eksempel.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 7.2: Operant betinging og forsterkningsskjemaer
**id:** `psy1300-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-7-1`

- **Kapitteltype:** tema.
- **Description:** Operant betinging: atferd formes av konsekvenser (positiv/negativ
  forsterkning og straff), forsterkningsskjemaer (fixed/variable ratio/interval),
  shaping og sekundære forsterkere.
- **Eksamensbelegg:** Fast (V2021, V2022, V2024). Sjangre: S1, S2, S3. Prioritet:
  **perfekt** (§7 pkt. 4).
- **Begrepskontrakt:** Stangor & Walinga (kap. 8) ⚠: **operant betinging**; **positiv/
  negativ forsterkning**; **positiv/negativ straff** (forsterkning øker, straff minker
  atferd — presist skille, F2); **forsterkningsskjemaer** (fixed/variable ratio/interval
  med atferdseffekter: variabel ratio → høy stabil rate, motstandsdyktig mot
  ekstinksjon); **shaping** (suksessive tilnærminger); **sekundære (betingede)
  forsterkere**.
- **Toppsvarets momentliste:** (1) **navngi** de fire konsekvenstypene korrekt (F2 —
  «negativ forsterkning» ≠ straff); (2) et forsterkningsskjema med atferdseffekt (f.eks.
  mobilsjekking = variabelt intervall/ratio); (3) shaping/sekundære forsterkere (bonus).
- **Toppsvar-løftet:** koble variabelt skjema til hverdagsatferd (spilleautomat,
  varsler); presist forsterkning vs. straff (mest forvekslede paret).
- **Typiske feil:** F2 (negativ forsterkning = straff — den klassiske feilen); blande
  ratio/interval.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 7.3: Betinging og psykiske lidelser — fobier og PTSD
**id:** `psy1300-7-3` · **number:** 7.3 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-7-2`

- **Kapitteltype:** tema (anvendelse).
- **Description:** Ledd (c)-banken for læring: hvordan klassisk betinging forklarer
  fobier (og bidrar til PTSD), og hvordan ekstinksjon/eksponering ligger til grunn for
  behandling.
- **Eksamensbelegg:** Klinisk anvendelsesledd (V2021). Sjangre: S3. Prioritet: kunne.
- **Begrepskontrakt:** **fobi** (nøytral stimulus → CS via traumatisk US → CR = frykt;
  Watson «Little Albert»-logikken, omskrevet); **unngåelse** (operant vedlikehold via
  negativ forsterkning); **PTSD** (betingede frykt-cues); **eksponering/ekstinksjon**
  som behandlingsprinsipp. Bro til CBT (10.2).
- **Toppsvarets momentliste:** (1) **bruk** klassisk betinging på hvordan en fobi
  oppstår (F7); (2) forklar hvorfor unngåelse *opprettholder* den (negativ forsterkning
  — kobler klassisk og operant); (3) hvorfor eksponering virker (ekstinksjon).
- **Toppsvar-løftet:** kombinere klassisk (tilegnelse) og operant (vedlikehold);
  behandlingsimplikasjonen (eksponering); bro til CBT.
- **Typiske feil:** F7 (gjengi betinging uten å anvende på fobi); glemme unngåelsens
  operante rolle.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 8 — Språk

#### Kapittel 8.1: Talespråkforståelse — segmentering, invarians og kategorisk persepsjon
**id:** `psy1300-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Kjerneoppgaven i språk: segmenteringsproblemet og holdepunktene
  (cues) som løser det, invarians/variabilitet-problemet, og kategorisk persepsjon.
- **Eksamensbelegg:** Fast språkoppgave (V2019-u, V2023, V2024 — 3/8, ofte samme
  oppgave). Sjangre: S1, S2. Prioritet: **perfekt** (§7 pkt. 7).
- **Begrepskontrakt:** Gilhooly ⚠: **segmenteringsproblemet** (talestrøm har ikke
  tydelige ordgrenser); **cues** (prosodi, fonotaktikk, koartikulasjon, leksikalske/
  semantiske holdepunkter — to cues + eksempel, F1); **invarians/variabilitet**
  (talervariabilitet, koartikulasjon, talehastighet gjør at samme fonem varierer
  fysisk); **kategorisk persepsjon** (kontinuerlig akustisk variasjon oppfattes i
  diskrete kategorier: /r/–/l/, /b/–/p/; vokallengde bønder/bønner).
- **Toppsvarets momentliste:** (1) **navngi** segmenteringsproblemet + **to cues** med
  eksempel (F1/F2); (2) invarians/variabilitet-problemet; (3) kategorisk persepsjon
  med et minimalt par.
- **Toppsvar-løftet:** vise hvorfor variabilitet gjør segmentering vanskelig; kategorisk
  persepsjon som løsning; norsk eksempel (bønder/bønner).
- **Typiske feil:** F1 (eksempler på cues i stedet for å definere problemet); F2 (ikke
  navngi kategorisk persepsjon).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 8.2: Lesing og ordgjenkjenning — Dual Route, Cohort og TRACE
**id:** `psy1300-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-8-1`

- **Kapitteltype:** tema.
- **Description:** Modellene for skrevet og talt ordgjenkjenning: Colthearts Dual
  Route-modell (med korrekt rutetildeling), transparente/opake ortografier, og
  Cohort-/TRACE-modellene for talegjenkjenning.
- **Eksamensbelegg:** Enkeltstående (V2019-u), men pensumkjerne. Sjangre: S1, S2.
  Prioritet: bør kjenne til (§7 pkt. 10) — men Dual Route drilles pga. F9-fella.
- **Begrepskontrakt:** Gilhooly ⚠: **Dual Route-modellen (Coltheart)** — **grafem–
  fonem-ruten** (regelbasert, for regelrette/nye ord; sterk i **transparente/grunne**
  ortografier) vs. **leksikalsk rute** (helords-oppslag; nødvendig for uregelrette ord;
  viktigere i **opake/dype** ortografier) — **riktig tildeling (F9)**; **Cohort-modellen**
  (talt ord aktiverer et «kohort» av kandidater, snevres inn fonem for fonem til
  gjenkjenningspunktet); **TRACE-modellen** (interaktiv aktivering, top-down + bottom-up).
- **Toppsvarets momentliste:** (1) **navngi** Dual Route og de to rutene med **riktig**
  ortografi-tilordning (F9); (2) Cohort: innsnevring til gjenkjenningspunkt; (3) TRACE:
  interaktiv aktivering.
- **Toppsvar-løftet:** kontrastere Cohort (streng bottom-up innsnevring) mot TRACE
  (interaktiv); korrekt rutetildeling er det som skiller.
- **Typiske feil:** **F9 (bytte om rutene — grafem–fonem for opake / leksikalsk for
  transparente)**; F2 (ikke navngi modellene).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 8.3: Språkproduksjon — Garretts stadier, produktivitet og rekursjon
**id:** `psy1300-8-3` · **number:** 8.3 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-8-1`

- **Kapitteltype:** tema.
- **Description:** Taleproduksjon: fonemer som byggeklosser, språkets produktivitet og
  rekursjon, og Garretts fem produksjonsstadier fra idé til artikulasjon.
- **Eksamensbelegg:** Enkeltstående (V2019 ordinær). Sjangre: S1, S2. Prioritet: bør
  kjenne til (§7 pkt. 10).
- **Begrepskontrakt:** Gilhooly ⚠: **fonem** (minste betydningsskillende lydenhet);
  **produktivitet** (uendelig mange nye setninger fra endelig sett); **rekursjon**
  (innsetting av struktur i struktur — A/B-bonus); **Garretts 5 stadier**
  (konseptuelt → funksjonelt → posisjonelt → fonologisk → artikulatorisk); taleglipp
  som evidens for stadiene.
- **Toppsvarets momentliste:** (1) definer fonem/produktivitet; (2) **navngi Garretts
  5 stadier** i rekkefølge; (3) rekursjon som kjennetegn (bonus).
- **Toppsvar-løftet:** bruke taleglipp som bevis for at stadiene er atskilte; rekursjon
  som det som gjør språket ubegrenset.
- **Typiske feil:** F2 (ikke navngi stadiene); glemme rekursjon-bonusen.
- **Kvote:** 12 quiz / 16 flashcards.

### Del 9 — Kunnskapsrepresentasjon, problemløsing og ekspertise

#### Kapittel 9.1: Kunnskapsrepresentasjon — grounded vs. amodal og funksjonell ekvivalens
**id:** `psy1300-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Hvordan kunnskap representeres: grounded (sensori-motorisk simulering)
  vs. amodal (symbolsk) representasjon, og funksjonell ekvivalens mellom visuell
  forestilling og persepsjon (mental rotasjon/skanning, kanin-and-illusjonen).
- **Eksamensbelegg:** Enkeltstående (V2022), men pensumkjerne. Sjangre: S1, S2.
  Prioritet: bør kjenne til (§7 pkt. 10).
- **Begrepskontrakt:** Gilhooly ⚠: **grounded/embodied representasjon** (mening som
  sensori-motorisk simulering) vs. **amodal/symbolsk representasjon** (abstrakte
  symboler); **funksjonell ekvivalens-hypotesen** (visuell forestilling deler prosesser
  med persepsjon); **mental rotasjon** (reaksjonstid ∝ rotasjonsvinkel — Shepard &
  Metzler-logikken, omskrevet); **mental skanning**; **kanin-and-illusjonen** (top-down
  tolkning av forestilling).
- **Toppsvarets momentliste:** (1) **navngi** grounded vs. amodal med skillet; (2)
  funksjonell ekvivalens + en studie (mental rotasjon, tolket — F6); (3) hva kanin-and
  viser om forestillingens tolkbarhet.
- **Toppsvar-løftet:** tolke mental rotasjon-funnet (lineær RT = analog prosess);
  koble funksjonell ekvivalens til grounded-siden av debatten.
- **Typiske feil:** F2 (ikke navngi posisjonene); F6 (mental rotasjon uten tolkning).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 9.2: Problemløsing og ekspertise
**id:** `psy1300-9-2` · **number:** 9.2 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-9-1`

- **Kapitteltype:** tema.
- **Description:** Hva som skiller eksperten fra novisen: deliberate practice / 10-års-
  regelen, chunking og mønstergjenkjenning, prosedural kunnskap, og forward (ekspert)
  vs. backward (novise) søk i problemrommet.
- **Eksamensbelegg:** Enkeltstående (V2019-u), men høyfrekvent pensumtema. Sjangre: S1,
  S2. Prioritet: bør kjenne til (§7 pkt. 10).
- **Begrepskontrakt:** Gilhooly ⚠: **deliberate practice / 10-års-regelen**; **chunking**
  (ekspertens meningsfulle grupperinger — sjakk-studiene, omskrevet); **mønster-
  gjenkjenning**; **prosedural (automatisert) kunnskap**; **forward søk** (data-drevet,
  ekspert) vs. **backward søk** (mål-drevet, novise); problemrom/operatorer.
- **Toppsvarets momentliste:** (1) hva kjennetegner ekspertise (chunking, mønster-
  gjenkjenning, 10-års-regelen); (2) forward vs. backward søk med **hvorfor eksperten
  bruker forward**; (3) prosedural automatisering.
- **Toppsvar-løftet:** koble chunking til arbeidsminne (4) — ekspertens chunks omgår
  span-grensen; forward-søk som følge av mønstergjenkjenning.
- **Typiske feil:** F2 (ikke navngi 10-års-regelen/chunking); bytte om forward/backward.
- **Kvote:** 12 quiz / 16 flashcards.

### Del 10 — Anvendt og klinisk kognisjon

#### Kapittel 10.1: Emosjon og kognisjon — Murphy & Zajonc og appraisal-debatten
**id:** `psy1300-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Den anvendte kjerneoppgaven: Murphy & Zajonc (1993) om ubevisst
  affektiv priming, og hvordan den utfordrer Lazarus' appraisal-nødvendighet —
  debatten som er blitt semantisk.
- **Eksamensbelegg:** Fast klinisk/anvendt oppgave (V2023, V2024-u — 2/8, i praksis
  identiske). Sjangre: S1, S2. Prioritet: **perfekt** (§7 pkt. 5).
- **Begrepskontrakt:** Groome & Eysenck ⚠: **Murphy & Zajonc (1993)** (subliminale
  glade/sinte ansikter før kinesiske tegn påvirker preferanse; forsvinner ved bevisst
  persepsjon → ubevisst persepsjon kan påvirke emosjon); **appraisal (Lazarus)**
  (emosjon krever kognitiv vurdering); **ubevisst affektiv priming**; **hvorfor studien
  svekker appraisal-nødvendigheten**; **at debatten er blitt semantisk** (avhenger av
  hva man kaller «appraisal» — A/B-bonus, F10).
- **Toppsvarets momentliste:** (1) gjør rede for **Murphy & Zajonc** og **tolk** funnet
  (F6); (2) forklar hvorfor det er relevant for **appraisal-debatten** (utfordrer
  Lazarus, F10); (3) at debatten er blitt semantisk (bonus).
- **Toppsvar-løftet:** presist HVORDAN studien svekker appraisal-kravet (affekt uten
  bevisst vurdering); den semantiske vendingen (bonus).
- **Typiske feil:** **F10 (ikke få fram at studien utfordrer Lazarus, eller den
  semantiske vendingen)**; F6 (beskrive studien uten tolkning).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 10.2: Depresjon, negativ hukommelsesbias og kognitiv atferdsterapi (CBT)
**id:** `psy1300-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy1300-10-1`

- **Kapitteltype:** tema.
- **Description:** Den kliniske anvendelsen: negativ hukommelsesbias / mood congruent
  memory og depresjonens onde sirkel, og CBT-antakelsene (Beck, Ellis' ABC, den
  depressive kognitive triade) som begrunner behandling.
- **Eksamensbelegg:** Fast delspørsmål (b)+(c) i emosjonsoppgaven (V2023, V2024-u).
  Sjangre: S2, S3. Prioritet: **perfekt** (§7 pkt. 5).
- **Begrepskontrakt:** Groome & Eysenck ⚠: **negativ hukommelsesbias / mood congruent
  memory** (husker mer negativt i nedstemt humør → føler seg verre → **ond sirkel**);
  **kognitiv atferdsterapi (CBT)** (maladaptiv tenkning/attribusjonsstil bidrar mer enn
  hendelsen selv); **Becks depressive kognitive triade** (negativt syn på selv/verden/
  fremtid); **Ellis' ABC** (Activating event → Belief → Consequence); behandling =
  utfordre tenkningen; **depressiv realisme** som innvending (og nyere funn som svekker
  den — «bør kjenne til»).
- **Toppsvarets momentliste:** (1) hvordan **negativ hukommelsesbias opprettholder
  depresjon** (ond sirkel); (2) **navngi** CBT-antakelsene (Beck-triaden, Ellis' ABC);
  (3) hvordan de begrunner behandling (F7 — anvend på behandling).
- **Toppsvar-løftet:** koble mood congruent memory til innkodingsspesifisitet (5.2 —
  tilstandsavhengig gjenhenting); depressiv realisme som innvending og motinnvending.
- **Typiske feil:** F2 (ikke navngi triaden/ABC); F7 (beskrive teorien uten å knytte
  til behandling); glemme den onde sirkelen.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 10.3: Øyenvitnepsykologi — feilinformasjonseffekten og avhørsdesign
**id:** `psy1300-10-3` · **number:** 10.3 · **estimatedMinutes:** 50 · **prerequisites:** `psy1300-5-2`

- **Kapitteltype:** tema.
- **Description:** Anvendt hukommelse i rettskontekst: blitslampeminner (like sårbare
  som vanlige minner), feilinformasjonseffekten (Loftus) og hvordan et avhør bør
  designes for ikke å plante minner.
- **Eksamensbelegg:** Enkeltstående (V2024), men typisk anvendt tema. Sjangre: S1, S2,
  S3. Prioritet: kunne (§7 pkt. 9).
- **Begrepskontrakt:** Groome & Eysenck ⚠: **blitslampeminner** (livaktige, men samme
  prosesser og like sårbare for rekonstruksjon som vanlige minner — F12); **feil-
  informasjonseffekten (Loftus)** (bilkollisjonsstudien: ordvalg «traff/smadret» endrer
  fartsanslag; **feilinformasjonen ligger i selve spørsmålsformuleringen** — F12);
  **rekonstruksjonsfeil**; **avhørsdesign** (åpne, ikke-ledende spørsmål; ikke press);
  **det kognitive intervju** (kontekstgjenskaping, fri gjenfortelling).
- **Toppsvarets momentliste:** (1) blitslampeminner — **at de ikke er kvalitativt
  annerledes** (F12); (2) **navngi** feilinformasjonseffekten + Loftus-studien og **at
  feilinformasjonen ligger i spørsmålet** (F12); (3) **design** et godt avhør (F7).
- **Toppsvar-løftet:** koble til gjenhenting-som-rekonstruksjon (5.2); det kognitive
  intervju som anvendelse av innkodingsspesifisitet.
- **Typiske feil:** **F12 (feilinformasjon uten kilden i spørsmålet; blitslampeminner
  som kvalitativt annerledes)**; F6 (Loftus uten tolkning).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 10.4: Kognitiv doping — koffein, nikotin og modafinil
**id:** `psy1300-10-4` · **number:** 10.4 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** tema.
- **Description:** Prestasjonsfremmende medikamenter og kognisjon: hvilke stoffer, via
  hvilke reseptorer, som påvirker hvilke kognitive mål (oppmerksomhet, våkenhet,
  arbeidsminne). Kun V2020, men i pensum.
- **Eksamensbelegg:** Kun V2020 (hjemmeeksamen, S4-typen), men i pensum (kap. 10).
  Sjangre: S2, S4. Prioritet: bør kjenne til (§7 pkt. 10).
- **Begrepskontrakt:** Groome & Eysenck ⚠: **koffein** (adenosin-antagonist → økt
  våkenhet/oppmerksomhet); **nikotin** (nikotinerge acetylkolin-reseptorer →
  oppmerksomhet); **modafinil** (våkenhetsfremmende → arbeidsminne/eksekutiv ved
  søvnmangel); **kobling stoff → reseptor → kognitivt mål** (A/B-bonus); begrensninger
  (effekt størst ved underytelse/søvnmangel).
- **Toppsvarets momentliste:** (1) navngi stoffene; (2) **koble hvert til reseptor OG
  kognitivt mål** (bonus); (3) nyansere (effekt kontekstavhengig).
- **Toppsvar-løftet:** reseptornivå-koblingen (bonus); at effekten ofte er størst ved
  utgangssvikt, ikke ubegrenset forbedring.
- **Typiske feil:** liste stoffer uten reseptor/kognitivt mål; overdrive effekten.
- **Kvote:** 12 quiz / 14 flashcards.

### Del 11 — Eksamenstrening

#### Kapittel 11.1: A/b/c-drill — å bygge en tredelt oppgave under tidspress
**id:** `psy1300-11-1` · **number:** 11.1 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** sjanger/drill.
- **Description:** Oppskriften på å disponere en a/b/c-oppgave: tidsbudsjett (~20–30
  min), hvordan sikre poeng i hvert ledd, hvordan velge 3 av 4 strategisk, og hvordan
  «hold svarene korte» konkret gjøres.
- **Eksamensbelegg:** Alle sett. Sjangre: S1–S3 (meta). Prioritet: **perfekt** (meta).
- **Begrepskontrakt:** disponeringsmal (a: navngi+definer på 2–3 setninger; b: mekanisme/
  eksperiment+tolkning; c: transfer); tidsbudsjett; oppgavevalg (velg der du kan alle
  tre ledd); korthetsdisiplin (F11).
- **Toppsvarets momentliste:** vise ett tema disponert live fra oppgavetekst til
  ferdig a/b/c-svar, med margkommentarer om poeng.
- **Toppsvar-løftet:** internalisere at bonus-nyansene legges inn i (b)/(c), ikke som
  eget ledd.
- **Typiske feil:** F11 (for langt); F7 (svakt c-ledd); velge oppgave med hull i ett ledd.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 11.2: Navngi-drill — fenomen ⇄ navn ⇄ teoretiker/studie
**id:** `psy1300-11-2` · **number:** 11.2 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** sjanger/drill.
- **Description:** Den mest lønnsomme drillen: siden manglende navngiving koster full
  pott (F2), systematisk kobling fenomen⇄navn⇄avsender for hele boka (change blindness/
  Simons & Chabris; artikulatorisk suppresjon; Method of Loci/Paivio; feilinformasjons-
  effekten/Loftus; appraisal/Lazarus; Sperling; Garrett; Coltheart; Tulving; Baddeley).
- **Eksamensbelegg:** Alle sett (navngivingskravet). Sjangre: S1 (meta). Prioritet:
  **perfekt** (F2-vaksine).
- **Begrepskontrakt:** komplett navn⇄fenomen⇄studie-matrise (repeterer kjernekortene
  fra hver del); hvorfor «beskrevet riktig, men uten navn» = tap av full pott.
- **Toppsvarets momentliste:** ikke aktuelt — ren drill (flashcard-tungt kapittel).
- **Toppsvar-løftet:** automatisere koblingen navn↔fenomen i begge retninger.
- **Typiske feil:** F2 (den drilles bort her).
- **Kvote:** 10 quiz / 30 flashcards.

#### Kapittel 11.3: Feilvaksine — de 12 typiske feilene
**id:** `psy1300-11-3` · **number:** 11.3 · **estimatedMinutes:** 40 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** sjanger/drill.
- **Description:** Systematisk gjennomgang av feilkodene F1–F12 med «finn feilen»-
  oppgaver: kandidatsvar som begår hver feil, og hvordan de rettes til full pott.
- **Eksamensbelegg:** Destillert fra alle sensorveiledningene. Sjangre: meta.
  Prioritet: **perfekt** (feilvaksine).
- **Begrepskontrakt:** F1–F12 (fra §2) med diagnostiske eksempler og fikser; særlig
  F1 (eksempel≠definisjon), F2 (navngiving), F3 (avskrift), F5 (ordlengde↔Miller),
  F6 (tolk eksperimentet), F7 (anvend), F8 (dobbel dissosiasjon), F9 (Dual Route),
  F10 (appraisal), F12 (feilinformasjon/blitslampe).
- **Toppsvarets momentliste:** for hver feil: vis svakt svar → diagnostiser feilkode →
  vis rettet svar.
- **Toppsvar-løftet:** gjenkjenne egne feil før innlevering.
- **Typiske feil:** alle F1–F12 (målet er å vaksinere).
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 11.4: Modellbesvarelse — arbeidsminne (bestått vs. A)
**id:** `psy1300-11-4` · **number:** 11.4 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-4-3`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Nyskrevet a/b/c-oppgave om arbeidsminne (Baddeley + span/ordlengde +
  suppresjon), besvart i **bestått-versjon** (korrekt kjerne) og **A-versjon** (bonus-
  nyansene lagt på), med sensorkommentar i poeng-språk.
- **Eksamensbelegg:** Modellerer den mest gjenbrukte oppgaven (Del 4). Sjangre: S1–S3.
  Prioritet: **perfekt** (DNA-krav ≥3 modellbesvarelser).
- **Begrepskontrakt:** repeterer 4.1–4.3; **bestått** = alle fire komponenter + span +
  suppresjon navngitt; **A** = ordlengde↔Miller-motsetningen, artikulatorisk-suppresjon-
  mekanismen, WM-vs-KTM-refleksjonen.
- **Toppsvarets momentliste:** full tekst begge versjoner + margnotater («her: navngir
  suppresjon → poeng», «her: ser motsetningen mot Miller → løfter til A»).
- **Toppsvar-løftet:** eksplisitt hva som skiller bestått fra A (poeng per ledd).
- **Typiske feil:** F4, F5, F2 (vises i bestått-versjonens svakheter).
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 11.5: Modellbesvarelse — LTM-gjenhenting + Method of Loci (bestått vs. A)
**id:** `psy1300-11-5` · **number:** 11.5 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-5-4`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Nyskrevet a/b/c-oppgave om gjenhenting, innkodingsspesifisitet og
  Method of Loci, i bestått- og A-versjon med sensorkommentar — bokas nest mest
  gjenbrukte oppgave.
- **Eksamensbelegg:** Modellerer Del 5 (5/8-oppgaven). Sjangre: S1–S3. Prioritet:
  **perfekt**.
- **Begrepskontrakt:** repeterer 5.2–5.4; **bestått** = gjenhenting cue-avhengig +
  innkodingsspesifisitet + MoL beskrevet; **A** = teorien bak MoL navngitt (Paivio),
  rekonstruksjonspoenget, dykkerstudien som test, transfer til eksamen.
- **Toppsvarets momentliste:** full tekst begge versjoner + margnotater («her: navngir
  Paivios dual-koding → full pott på c», «her: rekonstruksjon → A-bonus»).
- **Toppsvar-løftet:** vise at manglende teori-navngiving i MoL koster toppoenget.
- **Typiske feil:** F2 (MoL uten navngitt teori), F6, F7.
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 11.6: Modellbesvarelse — emosjon, depresjon og CBT (bestått vs. A)
**id:** `psy1300-11-6` · **number:** 11.6 · **estimatedMinutes:** 45 · **prerequisites:** `psy1300-10-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Nyskrevet a/b/c-oppgave om Murphy & Zajonc + appraisal, negativ bias/
  depresjon og CBT, i bestått- og A-versjon — modellerer den faste anvendte/kliniske
  oppgaven.
- **Eksamensbelegg:** Modellerer Del 10 (V2023=V2024-u). Sjangre: S1–S3. Prioritet:
  **perfekt**.
- **Begrepskontrakt:** repeterer 10.1–10.2; **bestått** = Murphy & Zajonc + ond sirkel +
  CBT-antakelser beskrevet; **A** = at studien utfordrer Lazarus + semantisk debatt
  (F10), Beck-triaden/Ellis' ABC navngitt, kobling bias↔tilstandsavhengig gjenhenting.
- **Toppsvarets momentliste:** full tekst begge versjoner + margnotater («her: utfordrer
  Lazarus → A», «her: navngir Beck-triaden → poeng»).
- **Toppsvar-løftet:** vise den semantiske vendingen som A-markør.
- **Typiske feil:** F10, F2, F7 (vises i bestått-versjonens svakheter).
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 11.7: Øvingseksamen — komplett «3 av 4»-sett med fasit
**id:** `psy1300-11-7` · **number:** 11.7 · **estimatedMinutes:** 90 · **prerequisites:** `psy1300-0-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Ett nyskrevet, komplett eksamenssett i reelt format (fire tredelte
  oppgaver, besvar tre, maks 15 poeng), spredt over begge innholdsdimensjoner (teori +
  anvendt/klinisk), med poengfasit per delledd og bestått/A-momentlister.
- **Eksamensbelegg:** Speiler settstrukturen i hele arkivet. Sjangre: S1–S3 (helhet).
  Prioritet: **perfekt** (helhetstrening).
- **Begrepskontrakt:** fire oppgaver på tvers av delene (f.eks. O1 arbeidsminne, O2
  oppmerksomhet, O3 LTM+MoL, O4 emosjon/CBT); poengfordeling per ledd; karaktersetting
  fra poengsum; hvordan velge tre.
- **Toppsvarets momentliste:** per oppgave: bestått- og A-momentliste + poeng per ledd.
- **Toppsvar-løftet:** helhetlig tidsstyring og oppgavevalg under realistiske forhold.
- **Typiske feil:** F8/F11 (feil oppgavevalg, tidsstyring); alle temafeil i miniatyr.
- **Kvote:** 6 quiz / 6 flashcards.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 24 | 26 | 0 (dekkes av øvingseksamen) |
| 1 | 2 | 26 | 32 | 4 |
| 2 | 3 | 54 | 70 | 4 |
| 3 | 2 | 28 | 34 | 4 |
| 4 | 3 | 56 | 76 | 4 |
| 5 | 4 | 66 | 86 | 4 |
| 6 | 2 | 30 | 40 | 4 |
| 7 | 3 | 50 | 64 | 4 |
| 8 | 3 | 44 | 56 | 4 |
| 9 | 2 | 26 | 34 | 4 |
| 10 | 4 | 64 | 80 | 4 |
| 11 | 7 | 64 | 72 | 0 (= øvingseksamen 11.7) |
| **Sum** | **37** | **532 ✓ (≥500)** | **670 ✓ (sikt 600–750)** | **40** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 12+12=24 / 12+14=26
- Del 1: 14+12=26 / 18+14=32
- Del 2: 18+20+16=54 / 24+28+18=70
- Del 3: 16+12=28 / 20+14=34
- Del 4: 20+20+16=56 / 30+26+20=76
- Del 5: 14+20+18+14=66 / 18+28+24+16=86
- Del 6: 18+12=30 / 24+16=40
- Del 7: 18+18+14=50 / 24+24+16=64
- Del 8: 18+14+12=44 / 22+18+16=56
- Del 9: 14+12=26 / 18+16=34
- Del 10: 18+18+16+12=64 / 22+24+20+14=80
- Del 11: 12+10+12+8+8+8+6=64 / 8+30+10+6+6+6+6=72
- **Totalt: 532 quiz / 670 flashcards.**

**Flashcard-tetthet (begrunnelse):** PSY1300 er et **navngivings- og studietungt
fag** der manglende navngiving av fenomen/teori/studie koster full pott (F2), og der
hver a/b/c-modul krever presise definisjoner, navngitte klassiske eksperimenter
(Sperling, gorilla, dykker, Loftus, Murphy & Zajonc) og teoretiker-koblinger
(Baddeley, Lavie, Broadbent, Treisman, Tulving, Paivio, Coltheart, Garrett). Per
audit-lærdommen (≥500 er GULV, ikke mål) er flashcards derfor siktet inn i
**600–750-båndet (670)** — over gulvet, drevet av det tunge navn⇄fenomen⇄studie-
behovet, uten å blåses opp. Kjernedelene (4 arbeidsminne, 5 LTM, 10 anvendt/klinisk,
2 oppmerksomhet) har høyest flashcard-tetthet fordi de er mest begreps-/studietunge;
Del 11 (trening) er quiz-tung men har egen tung navngi-drill (11.2 = 30 kort).

**Flashcard-profil:** hovedvekt på **fenomen⇄navn⇄teoretiker/studie-koblinger** (change
blindness↔Simons & Chabris; artikulatorisk suppresjon↔blokkert rehearsal; Method of
Loci↔Paivios dual-koding; innkodingsspesifisitet↔dykkerstudien; feilinformasjons-
effekten↔Loftus; Murphy & Zajonc↔appraisal/Lazarus; Sperling↔stort raskt-forfallende
register; Baddeley↔fire komponenter; Dual Route↔Coltheart) + **begrepspar-driller** (de
skillene sensor tester: KTM/arbeidsminne, forsterkning/straff, anterograd/retrograd,
grafem–fonem-rute/leksikalsk rute, episodisk/semantisk, tidlig/sen seleksjon,
ordlengdeeffekt/Miller 7) + **eksperiment↔funn↔tolkning**-kort (Sperling, gorilla,
dykker, Loftus-bilkollisjon, Murphy & Zajonc, mental rotasjon). **Quiz-profil:**
flervalg med nabobegrep-distraktorer (forsterkning/straff, KTM/arbeidsminne,
inattentional/change blindness, grafem–fonem/leksikalsk, anterograd/retrograd) +
«hva-mangler-i-toppsvaret»-spørsmål (F2/F6/F7-vaksine) + «hvilken feil begår
kandidaten»-spørsmål (F1/F5/F9/F10/F12-vaksine).

---

## 5. Prøver

Fire prøver per temadel (Del 1–10 = 40 prøver). Hver prøve speiler eksamensformatet i
miniatyr: en blanding av begreps-/kontrollspørsmål (flervalg, med fasit) og a/b/c-
kortessay (S1–S3 med bestått/A-momentliste-fasit). Omfang 25–40 min. Alle oppgaver
NYSKREVNE. Prøvekapittel-id `psy1300-<del>-prove`, chapterNumber `<del>.P` (jf.
BYGGEKONTRAKT). Del 0 og Del 11 har ingen egen prøve (øvingseksamen 11.7 dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *Kognisjon* — definer (F1-vaksine) + kognitiv
revolusjon. (2) *Dobbel dissosiasjon* — definer + hvorfor sterkere enn enkel (F8). (3)
*Prosesseringskjeden* — de tre systemene + KTM/arbeidsminne (F4). (4) *Blandet Del 1* —
begrepsdrill fag/metode.

**Prøve-kvote Del 2:** 4 prøver: (1) *Blindhet* — inattentional vs. change + gorilla-
tolkning (F6). (2) *Seleksjonsteoriene* — Broadbent/Lavie/Treisman + tidlig/sen
seleksjon. (3) *Anvendt* — film/bil/cocktail-party (S3, F7). (4) *Blandet Del 2* —
navngi-drill oppmerksomhet.

**Prøve-kvote Del 3:** 4 prøver: (1) *Sperling* — beskriv + tolk (F6). (2) *Registeret*
— ikonisk/ekkoisk/haptisk + pre-attentivt (F1). (3) *Kobling* — ekko→fonologisk løkke
(F4). (4) *Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *Baddeley* — fire komponenter + slavesystemer
(F2). (2) *Span* — ordlengdeeffekt ↔ Miller 7 (F5). (3) *Interaksjon/suppresjon* —
telefonnummer + artikulatorisk suppresjon (F2/F7). (4) *Blandet Del 4* — WM vs. KTM
(F4).

**Prøve-kvote Del 5:** 4 prøver: (1) *Gjenhenting* — cue-avhengighet + rekonstruksjon.
(2) *Innkodingsspesifisitet* — prinsipp + dykker-test (F6). (3) *Method of Loci* —
teknikk + navngi teorien (F2). (4) *Anvendt* — eksamensteknikk (S3, F7).

**Prøve-kvote Del 6:** 4 prøver: (1) *Kasusene* — H.M./K.F. + hva de viser (F6). (2)
*Amnesitype* — anterograd/retrograd + temporal gradient. (3) *Dobbel dissosiasjon* —
K.F. vs. amnesikere (F8). (4) *Priming* — definer + design (F2).

**Prøve-kvote Del 7:** 4 prøver: (1) *Klassisk betinging* — US/UR/CS/CR (F2). (2)
*Operant* — forsterkning/straff + skjemaer (F2). (3) *Anvendt* — fobi/PTSD (S3, F7). (4)
*Blandet Del 7* — begrepsdrill betinging.

**Prøve-kvote Del 8:** 4 prøver: (1) *Forståelse* — segmentering + to cues + kategorisk
persepsjon (F1). (2) *Lesing* — Dual Route med riktig rutetildeling (F9). (3)
*Produksjon* — Garretts 5 stadier + rekursjon (F2). (4) *Blandet Del 8* — Cohort/TRACE.

**Prøve-kvote Del 9:** 4 prøver: (1) *Representasjon* — grounded/amodal + funksjonell
ekvivalens (F6). (2) *Forestilling* — mental rotasjon + kanin-and. (3) *Ekspertise* —
chunking/10-års-regel + forward/backward. (4) *Blandet Del 9*.

**Prøve-kvote Del 10:** 4 prøver: (1) *Emosjon* — Murphy & Zajonc + appraisal (F10). (2)
*Depresjon/CBT* — negativ bias + Beck/Ellis (F2/F7). (3) *Øyenvitne* — feilinformasjon
+ avhør (F12). (4) *Kognitiv doping* — stoff→reseptor→mål.

---

## 6. Opphavsrett og nyskriving

- Eksamensoppgaver og sensorveiledninger er brukt som **grunnlag** (mønstre,
  temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver, vignetter, case
  og modellbesvarelser i boka er NYSKREVNE i samme sjanger — endre tall, navn, scenario
  og formuleringer. Den dokumenterte oppgavegjenbruken i arkivet betyr at boka *må*
  nyskrive særlig grundig på ryggrad-temaene (arbeidsminne, LTM+MoL, betinging, emosjon/
  CBT) for ikke å reprodusere en gjenbrukt oppgave.
- Pensumlitteratur (Gilhooly, Lyddy, Pollick & Buratti *Cognitive Psychology*; Groome &
  Eysenck *Applied Cognitive Psychology*; Stangor & Walinga *Introduction to Psychology*)
  refereres (forfatter/verk/begrep), aldri siteres i lengde.
- Refererte synspunkter tilskrives riktig avsender (Baddeley, Lavie, Broadbent,
  Treisman, Tulving, Loftus, Murphy & Zajonc, Lazarus, Beck, Ellis, Paivio, Coltheart,
  Garrett, Sperling) — aldri oppdiktede referanser. Utgaveavhengige kapittelnumre og
  usikre attribusjoner merkes ⚠ / `(verifiser)` for fase 6.

---

## 7. Byggerekkefølge og wiring-merknad

- **Byggerekkefølge (fase 4):** én agent per hel del. Del 4 (arbeidsminne) og Del 5
  (LTM) er ryggraden — bygg dem tidlig og la modellbesvarelsene (11.4/11.5) leses mot
  dem. Del 11-agenten leser HELE skjelettet.
- **Kurs-id og alias (fase 5):** boka bygges med kurs-id `psy1300`. **Vurder å registrere
  PSYC1230 som alias/omdirigering** i `institusjoner.ts`/navigasjonen, siden eksamen er
  identisk og PSYC1230 sannsynlig er overlevende kode etter H2026 *(verifiser i UiOs
  emnekatalog før alias settes)*. Innholdet er felles uansett kode.
- **Prerequisites er DEL-baserte, aldri lineære** — hvert kapittel peker på det/de
  kapitlene det faktisk bygger på (typisk forrige kapittel i delen, `psy1300-0-2` for
  del-åpnere, eller et konkret tidligere tema ved reell avhengighet: 10.3→5.2, 3.1→1.2).
- **Kryssbok-lenker:** Del 1 skal lenke til PSY1000-kapitler (bro fra oversiktsfaget)
  KUN når de finnes i systemet ved byggetid — ellers utelates lenken (jf. Leserkrav).

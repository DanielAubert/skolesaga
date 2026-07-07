# Bokskjelett: IT2805 Webteknologi (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet: **4 distinkte sett med fullstendig fasit** —
> ett fra **2015** og tre fra **2019**, alle på **engelsk**). Arketype:
> **kodefag-hybrid** — bygger på `DNA-regnefag.md` med kodefag-tilpasningene fra
> `tdt4110/SKJELETT.md` (nærmeste forbilde) og `in1000` (kodesporingsmal). Kapittel-
> DNA-ene (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet
> her. Alle kodeeksempler, tall, HTML-strukturer, CSS-regler, JS-snutter og
> canvas-figurer i den ferdige boka skal være **nyskrevne** (opphavsrett):
> kodemønstrene er standard HTML/CSS/JS-idiomer, men innpakningen er forfatterens egen.
>
> **Plassering:** IT2805 er NTNUs innføringsemne i webteknologi — HTML, CSS,
> JavaScript/DOM, `<canvas>` og web-arkitektur. Faglig ligger kodesiden nær TDT4110
> (samme institusjons kodefag-hybrid, tredelt flervalg + kortsvar + koding), men
> IT2805 skiller seg på tre måter: (1) den trener **tre språk** (HTML/CSS/JS + canvas)
> i stedet for ett; (2) den består av **mange små, selvstendige kodeoppgaver** (skriv
> én CSS-regel, én liten JS-funksjon, én canvas-figur) framfor én stor kjede;
> (3) den har en tyngre andel **syntaks-presisjon** — flervalg der ett tegn avgjør.
> Denne bokas skjelett er derfor modellert på `tdt4110/SKJELETT.md`, med web-vridd
> innhold og et gjennomgående **canvas-verksted**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `it2805` |
| Tittel | **IT2805 Webteknologi (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU — visningsnavn «IT2805 Webteknologi» |
| Arketype | Kodefag-hybrid (tredelt flervalg + kortsvar + koding, tre språk HTML/CSS/JS + canvas) |
| Antall kapitler | **40** (3 eksamenskart/håndverk + 34 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 450 min ≈ 41 timer** |
| Quiz totalt | **698** (krav ≥500 — GULV; siktet høyt fordi flervalg ER 30 % av eksamen) |
| Flashcards totalt | **578** (krav ≥500 — GULV; tag-/selektor-/API-tett fag) |

**Pitch (ett avsnitt):** IT2805 har hatt en påfallende stabil eksamensmal fra 2015 til
2019. Vurderingen er **én avsluttende skriftlig skoleeksamen (4 timer), 100 %**,
karakter A–F, med krav om godkjente øvinger for eksamensadgang. Settet er **fast
tredelt** hvert eneste år, på **engelsk**: **Section A — flervalg/sant-usant (~30 %)**
(HTML-/CSS-/JS-/protokoll-fakta med tett formulerte syntaksdistraktorer), **Section B —
lengre kortsvar (~30 %)** (relative URL-er, TCP/IP-lagene, fyll-inn, kodesporing,
forklaringsoppgaver som POST vs GET og Canvas vs SVG), og **Section C — ren
kodeskriving (~40 %)** (skriv HTML-skjema/tabell, CSS-regler med selektorer/pseudo/
posisjonering/box-model, JavaScript med DOM — og **alltid en canvas-tegneoppgave** til
slutt). En IT2805-bok må derfor trene **tre ferdigheter parallelt**: (1) **presis
syntaks-hukommelse** for flervalget, (2) **mekanisk kodesporing** av små JS-snutter, og
(3) **selvstendig produksjon** av korrekt HTML, CSS og JavaScript, inkludert den
distinktive **canvas-2D-tegningen**. Boka driller alle tre — med korte teoriseksjoner,
mange små avgrensede kodeoppgaver med fasit, flervalgs-/sant-usant-drill per tema, og et
eget canvas-verksted.

**Kritisk stilregel (gjelder HELE boka):**

1. **«Idéene teller» i koding (Section C).** Fasitene innleder kodedelen med at
   *«løsningen er bare én av mange måter — det er idéene som teller»*. Alternative,
   korrekte løsninger gir **full pott**; i canvas godtas en *omtrentlig* figur
   (størrelse/sentrering/farge er ikke poenggivende). Dette skal stå i Del 0 og prege
   ALLE løsningsforslag i Section C-sjangrene (F/G/H/I) som en egen `tip`-note
   **«Idéene teller»** — med margnotater om at rett *tilnærming* belønnes selv med
   små syntaksglipp. **Denne regelen gjelder IKKE flervalget** (se stilregel 2).
2. **Syntaks-presisjon i flervalget (Section A) — INGEN delvis uttelling.**
   Distraktorene er tette syntaksvarianter der **ett tegn/ord avgjør** (`h2+p` vs
   `h2~p` vs `h2.p`; `==` vs `===`; box-model-rekkefølge margin→border→padding;
   `border-width`-verdirekkefølge TRBL; `<link>` vs `<script src>` for ekstern JS).
   Feil selektor/verdi gir **null** — det finnes ingen delvis pott. Hvert kapittel med
   flervalgstrening skal ha en `warning` **«Syntakspresisjon»** som viser de nære
   distraktorene side om side og understreker at presisjon premieres. Dette er
   spenningen som gjør faget vanskelig: løs og idérik i C, knivskarp og presis i A.
3. **Konsishet i forklaringer (Section B).** Forklaringsoppgavene (TCP/IP-lagene,
   Canvas vs SVG, POST vs GET, stilark-typene, de 4 delene av en CSS-regel) besvares
   med **korte, presise kulepunkter** — fasitene er stramme. Alle forklarings-fasiter i
   boka skal selv være mønstergyldig korte.
4. **Flere korrekte svar sidestilles i fyll-inn.** Fasitene noterer eksplisitt at
   f.eks. «PNG kan også være tapskomprimert, så det er også riktig» og «andre svar
   godtas så lenge de er riktige». Fyll-inn-fasiter i boka skal liste alternative
   godkjente svar der de finnes.
5. **Prosentvekting per deloppgave er oppgitt** (2 % per flervalg, 1–10 % per B/C-
   deloppgave) → disponér tiden etter poeng. Dette står i Del 0 og i øvingseksamenene.
6. **Idiomatisk vanilla-kode — ingen rammeverk.** Fasit bruker enkel HTML5, ren CSS
   uten preprosessorer, og JavaScript uten jQuery/build-verktøy. DOM-idiomer forventes
   (`document.getElementById(id).innerHTML = ...`, `getElementById(id).value`,
   `document.forms[0].felt.value`, `onclick="fn()"`). Canvas følger et fast skjelett
   (`window.onload` → hent canvas → sjekk `getContext` → tegn med sti-API-et).
7. **Engelsk fagterminologi.** Settene er på engelsk. Boka skrives på **norsk bokmål**,
   men fagtermer og all kode beholdes på **engelsk** (box model, pseudo-class, TCP/IP,
   `getElementById`, `float`, `position`) — slik studenten møter dem på eksamen.

**Kritisk pensum-divergens (ærlighetsregel — moderne temaer merkes «verifiser»):**
Arkivet 2015–2019 stammer fra samme emneansvarlig-æra med tung oppgavegjenbruk. Det gir
**høy sikkerhet om denne eksamenstypens mønster**, men **lav sikkerhet om dagens
pensum**: fem temafamilier som NTNUs **gjeldende emnebeskrivelse framhever, forekommer
IKKE i noe av de fire settene**. Boka skal **dekke begge deler** og eksplisitt merke de
moderne temaene. Konkret:

- **Semantisk HTML5** (`<header>`/`<nav>`/`<article>`/`<section>`/`<footer>`) —
  kap. 1.5, merket `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`.
- **Flexbox, CSS Grid og responsivt design/media queries** — hele **Del 4**, merket.
- **Ajax / `fetch` / asynkron JS / JSON-uthenting** — **Del 7 (kap. 7.1)**, merket.
- **Universell utforming / WCAG / ARIA** — **Del 8 (kap. 8.1)**, merket.

De merkede temaene får **egne, tydelig merkede kapitler** (dagens pensum), men **ikke**
den samme tunge drillen som de arkivbelagte kjernetemaene — de er differensierende
robusthetsstoff. Én av de tre øvingseksamenene (9.3) legger inn merkede moderne innslag
slik at studenten møter dem under prøvebetingelser. Prognose (fra analysens §7):
strukturen A/B/C 30/30/40 med canvas hver gang er svært sannsynlig uendret, men en ny
emneansvarlig kan legge inn responsivt design / Flexbox / WCAG / Ajax som arkivet ikke
har — derfor dekkes begge.

**Avvik fra DNA/README-malen (dokumentert):**

- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes det
  sjelden matematiske symboler, men et presist konstruksjonsapparat. Blokken heter
  derfor **«API- og konstruksjonsliste»** og lister ALLE konstruksjoner brukt i
  delkapitlet — **HTML-tagger/attributter**, **CSS-selektorer/egenskaper/verdier**,
  **JS-/DOM-metoder** og **canvas 2D-API-kall** — hver med presis oppførsel og et
  minimalt eksempel (f.eks. `h2 + p` = «treffer første `<p>` som er *umiddelbar søsken*
  rett etter en `<h2>`»; `arc(x,y,r,start,end)` = «legg en sirkelbue til stien, vinkler
  i radianer»; `getElementById(id).innerHTML` = «erstatt innholdet i elementet med id
  `id`»). Regelen «per delkapittel, ikke arv fra tidligere» beholdes. **Unntak:** de
  rene konsept-/nettverkskapitlene (Del 2.2–2.5, Del 6.4, Del 8) har lite kode — der
  brukes en `collapsible` **«Begreps- og referanseliste»** i stedet (f.eks.
  TCP/IP-lagene, FTP/DNS, bildeformat-tabellen GIF/JPEG/PNG, Canvas vs SVG-punktene).
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en bruker
  `theorem` for matematiske resultater, brukes den her for de faste kodemønstrene som
  skal sitte i ryggmargen: **HTML-skjemamalen**, **HTML-tabellmalen**, **box-model-
  oppskriften** (utenfra og inn: margin → border → padding), **selektor-familiene**
  (etterkommer/søsken/barn/pseudo), **stilark-koblingen** (`<link>`/`<style>`/`style=`),
  **posisjonerings-oppskriften**, **DOM-oppdateringsmønsteret**
  (`getElementById(...).innerHTML = ...`), **les-skjemafelt-og-regn-funksjonen**,
  **relativ-URL-oppskriften** (tell nivåer opp med `../`), og — viktigst — **canvas-
  skjelettet** (`window.onload` → hent canvas → sjekk `getContext` →
  `getContext("2d")` → `beginPath`/`arc`/`moveTo`/`lineTo` → `fill`/`stroke`). Disse er
  bokas «teoremer».
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene enten **referansedefinisjoner** (tag/selektor/egenskap/API —
  «hva gjør `::before`», «hva gjør `padding`», «hva gjør `getElementById`») eller
  **fagbegreps-definisjoner** (konseptsiden — «hva er box-model», «hva er FTP», «hva er
  en pseudo-klasse»). Fordi faget er tag-/selektor-/API-tett bæres uvanlig mange
  flashcards av referansedefinisjoner (Del 1, 3, 5, 6). Dette er studentens
  syntaks-pugg for flervalget.
- **Quiz kalibreres som eksamensdirekte MC — siktet høyt.** To eksamenssjangre ER
  flervalg-/sporingsformat: **Section A** (flervalg/sant-usant, 30 %) og **JS-
  kodesporing** (Section A/B — «hva skrives ut/hva er verdien»). Quizbanken skal derfor
  være **direkte eksamenstrening**: (a) **syntaks-flervalg** med tett formulerte
  distraktorer der ett tegn skiller riktig fra galt (som de reelle), og
  (b) **kodesporing** av små JS-snutter. Fordi begge er billige, hyppige eksamenspoeng
  siktes quiz **høyt (698)**. `options[0]` = riktig svar (runtime stokker).
- **Drill i temadelene, ikke bare til slutt.** Som TDT4110/IN1900 ligger drillkapitlene
  inne i sine temadeler: **CSS-skrive-/selektor-drill (3.7)**, **JS-kodesporing (5.7)**,
  **finn-og-rett-feil (5.8)** og **canvas-verksted (6.3)** — fordi hver sjanger er en
  100 %-gjenganger som må drilles umiddelbart. Del 9 beholder de komplette tredelte
  øvingseksamenene.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): byggeklossene bygges opp i den
rekkefølgen de forutsetter hverandre — **HTML** (dokumentet) → **web-arkitektur**
(URL-er/nettverk, avhengighetsfritt fakta-stoff) → **CSS** (styling av HTML) →
**moderne CSS-layout** → **JavaScript** (atferd) → **canvas** (JS + tegning) →
**moderne datautveksling** → **universell utforming** → **eksamenstrening**. Frekvensen
styrer *omfanget*: de 100 %-temaene (CSS, canvas, JS/DOM, HTML) får flest kapitler + egne
drillkapitler; de merkede moderne temaene og lavfrekvente fakta får kompakte kapitler.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og det tredelte håndverket | 3 | Prioriteringsverktøyet + de tre håndverkene (flervalgspresisjon / kortsvar / koding). Kjerne i studieguiden. |
| 1 | HTML: struktur, skjema, tabell og semantikk | 5 | HTML-elementer/skjema/tabell **100 %** (perfekt); semantisk HTML5 er merket moderne. |
| 2 | Web-arkitektur: URL-er, nettverk og dataformater | 5 | Relative URL-er ~100 %, TCP/IP ~100 %, protokoller/XML-JSON/bildeformater 75–100 % (kunne) — fast, billig poengkilde. Avhengighetsfri. |
| 3 | CSS: box-model, selektorer, pseudo og posisjonering | 7 | **Alle 100 % (perfekt), størst samlet poengvekt.** Bokas tyngdepunkt: 6 teori + 1 drill. |
| 4 | Moderne CSS-layout: Flexbox, Grid og responsivt design | 3 | **Ny (merket).** Ikke i arkivet, men framhevet i gjeldende emnebeskrivelse (kjenne/verifiser). |
| 5 | JavaScript: syntaks, DOM, hendelser og Date | 8 | **JS/DOM + kodesporing 100 % (perfekt).** 6 teori + 2 drill (kodesporing 5.7, finn-feil 5.8). |
| 6 | Canvas 2D-verksted | 4 | **Canvas 100 %, 6–10 % alene — enkeltstående største oppgave (perfekt).** Eget verksted: 3 bygg + 1 konsept. |
| 7 | Moderne datautveksling: Ajax, fetch og JSON | 1 | **Ny (merket).** Ikke i arkivet, men i gjeldende emnebeskrivelse (kjenne/verifiser). |
| 8 | Universell utforming: WCAG og ARIA | 1 | **Ny (merket).** Ikke i arkivet, men framhevet i gjeldende emnebeskrivelse (kjenne/verifiser). |
| 9 | Eksamenstrening | 3 | 3 komplette **tredelte** øvingseksamener (Section A + B + C, engelsk), ett med merkede moderne innslag. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i siste
del. Her ligger drillkapitlene i temadelene (jf. §1-avviket), fordi hver kodesjanger er
en 100 %-gjenganger som må drilles umiddelbart. Web-arkitekturdelen (Del 2) er lagt
**etter** HTML og **før** CSS selv om den er avhengighetsfri — fordi den er en
selvstendig fakta-blokk studenten kan lese uavhengig, og den knytter naturlig an til
HTML (lenker/URL-er). De merkede moderne delene (4, 7, 8) er plassert rett etter sine
klassiske motstykker (moderne CSS etter klassisk CSS; Ajax etter JS; UU etter alt annet).

---

## 3. Sjangerkatalog (A–J)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. **Tre familier:** flervalg/fakta (A), kodeforståelse/forklaring
(B–E) og kodeskriving (F–J).

| Kode | Sjanger | Familie | Seksjon | Form | Hyppighet/vekt |
|---|---|---|---|---|---|
| **A** | Flervalg og sant/usant (box-model, selektorer, `position`, HTML-attributter, canvas, JS-syntaks, protokoller, XML) | Flervalg/fakta | A | MC / T-F (ett riktig, **ingen delpott**) | 100 %; ~30 % av settet |
| **B** | Kodesporing «hva skrives ut / hva er verdien» (løkker, boolsk logikk, variabelsporing, typetvang, `Math.floor`) | Kodeforståelse | A/B | fritekst/MC | 100 %; 0,3–3 % per punkt |
| **C** | Korte forklaringer (TCP/IP-lagene, POST vs GET, Canvas vs SVG, stilark-typene, de 4 delene av en CSS-regel) | Forklaring | B | fritekst (kort) | 100 %; 4–8 % |
| **D** | Relative URL-er (regn relativ sti i mappetre) | Fakta/anvendelse | B | fritekst | ~100 %; 1–1,5 % per delspm, 4–6 % totalt |
| **E** | Fyll-inn (setninger/tabell: `z-index`, `src`, DNS, bildeformat-tabell, `position`-verdier) | Fakta | B | fritekst | 75–100 %; ~1–1,5 % per felt |
| **F** | Skriv HTML (skjema, tabell, knapp med `onclick`) | Kodeskriving | C | fritekst-kode | 100 %; 4–5 % |
| **G** | Skriv CSS (selektorer, pseudo-klasser/-elementer, box-model, posisjonering, font) | Kodeskriving | C | fritekst-kode | 100 %; **8–12 % — kjernen i C** |
| **H** | Skriv JavaScript (les skjemafelt → regn → oppdater side; `Date`; `prompt`/`alert`; fyll-inn-hull) | Kodeskriving | C | fritekst-kode | 100 %; 4–10 % |
| **I** | Canvas-2D-tegning (fullstendig JS som tegner en figur) | Kodeskriving | C | fritekst-kode | **100 %; 6–10 % — fast siste C-oppgave, største enkeltoppgave** |
| **J** | Finn og rett feil i JS-kode (identifisér N feiltyper, skriv rettet kode, vis utskrift) | Begge | B/C | fritekst-kode | 25 %; 5 %+5 %+2 % — høy uttelling når den kommer |

**Merk:** A og B er de to flervalgs-/sporingssjangrene som quizbanken driller direkte.
C–E er kortsvarsjangrene (Section B). F–I er kjernen i kodeskrivingen (Section C), der
I (canvas) alltid er siste og tyngste oppgave. J er den sjeldne, men høyt vektede
«finn feilene». **Gjennomgående prinsipp:** A driller *presisjon* (ett tegn avgjør),
mens F–I driller *idé* («flere løsninger sidestilles»).

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt** erstatter
«Innholdskontrakt» (eksakte tagger/selektorer/egenskaper/API-kall kapitlet SKAL lære,
med presis oppførsel). For de rene konsept-/nettverkskapitlene heter feltet
**Begrepskontrakt**. Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3). Alle prerequisites er **interne** id-er (boka er et grunnkurs uten
forkunnskapskrav i web). Kryssbok-lenker brukes bare der en eksisterende bok i systemet
dekker en forkunnskap bedre — lenk KUN til kapitler som finnes; hvis usikker, hold
lenken intern.

---

### Del 0 — Eksamenskart og det tredelte håndverket

#### Kapittel 0.1: Eksamenskartet — slik testes IT2805

- **id:** `it2805-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t, tredelt Section A/B/C 30/30/40, engelsk), temafrekvensene, sjangerkatalogen A–J, pensum-divergensen (moderne temaer) og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (2015 + tre 2019-sett). Skal gjengi: (i) **formen** — én avsluttende skriftlig skoleeksamen, **4 timer**, teller **100 %**, karakter A–F, godkjente øvinger for eksamensadgang, settene er på **engelsk**; (ii) den **faste tredelte makrostrukturen** hvert år: **Section A** flervalg/sant-usant **~30 %**, **Section B** lengre kortsvar **~30 %**, **Section C** ren kodeskriving **~40 %** — uendret fra 2015 til 2019; (iii) **temafrekvens-tabellen** (CSS box-model/selektorer/pseudo/posisjonering alle **100 %**, HTML-elementer/skjema/tabell **100 %**, canvas **100 % (6–10 % alene)**, JS-sporing **100 %**, JS/DOM-skriving 75–100 %, funksjoner/løkker/hendelser **100 %**, TCP/IP-lagene **~100 %**, relative URL-er **~100 %**, protokoller FTP/DNS **~100 %**, XML/JSON **100 %**, bildeformater 75 %, POST vs GET 50 %, Canvas vs SVG 75 %, `prompt`/`alert` 75 %, `Date` 75 %, typetvang 50 %, finn-og-rett-feil 25 %); (iv) **pensum-divergensen** — arkivet tester IKKE semantisk HTML5, Flexbox/Grid, responsivt design, Ajax/`fetch`, WCAG/ARIA, men NTNUs gjeldende emnebeskrivelse framhever disse → boka dekker begge, moderne temaer merket `(verifiser mot gjeldende pensum)`; (v) **sensors metaregler** — *koden trenger ikke matche fasit, idéene teller* (Section C, full pott for alternative løsninger, omtrentlig canvas godtas); MEN *flervalget har ingen delpott* (ett tegn avgjør, presisjon premieres); *forklaringer skal være korte/presise*; *prosentvekting per deloppgave er oppgitt* → disponér tiden; (vi) at oppgavene **resirkuleres tungt** mellom sittinger (identiske boolske sporinger, TCP/IP-tekst, canvas-ansikt, klokke- og relativ-URL-oppgaver) — det gir kjente mønstre, men en ny emneansvarlig kan endre temauniverset.
- **Kodekontrakt:** Sjangerkatalogen A–J (fra §3) presenteres som studentens sjekkliste med typisk vekt og hvilken seksjon (A/B/C) hver hører til. Pluss **prognosen for neste eksamen**: Section A ≈ 10 flervalg/sant-usant (box-model, selektorer, `position`, HTML-attributter, canvas, JS-syntaks, protokoller, XML) + 1 boolsk/utskrifts-sporing; Section B ≈ relative URL-er, TCP/IP-lagene, fyll-inn, JS-kodesporing, én forklaringsoppgave (POST/GET eller Canvas vs SVG); Section C ≈ skjema/tabell-HTML, flere CSS-regler (pseudo/posisjonering/box-model), en JS-DOM-funksjon, og **alltid en canvas-tegning**. Avslutt med **leseplan**: Del 3 (CSS) + Del 6 (canvas) + Del 5 (JS/DOM) + Del 1 (HTML) er «må perfekt»; Del 2 (web-arkitektur) «må kunne — billig poengkilde»; Del 4/7/8 (moderne, merket) «bør kjenne til — verifiser mot gjeldende pensum».
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og vekting 30/30/40 — sett opp et tidsbudsjett når Section C ender på en 8 %-canvas og en 10 %-CSS-blokk».
- **Typiske feil:** Metafeilene — la et flervalg stå på gjett uten å sjekke ett-tegns-forskjellen; skrive lange, ordrike forklaringer der korte kulepunkter kreves; bruke for lang tid på et lavvektet fyll-inn-felt; hoppe rett på canvas uten å lese hele Section C først; anta at et nytt sett ser ut som 2019 på temanivå (moderne temaer kan komme).
- **Quiz: 14 · Flashcards: 14** (form, tredeling A/B/C, frekvenser, metaregler, sjangerkatalogen, pensum-divergens)

#### Kapittel 0.2: Håndverk 1 — Flervalgspresisjon (Section A)

- **id:** `it2805-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-0-1` · **kapitteltype:** drill
- **description:** Metoden for Section A: hvordan du løser flervalg og sant/usant der ett tegn skiller riktig fra galt, uten delvis uttelling — og en samlet syntaks-drill på de klassiske fellene.
- **Eksamensbelegg:** Section A er **~30 %** av eksamen (100 % frekvens) og har **ingen delpott** — feil alternativ gir null. Distraktorene er tett formulerte syntaksvarianter (`h2+p`/`h2~p`/`h2.p`; `==`/`===`; box-model-rekkefølge; `border-width` TRBL; `<link>` vs `<script src>`). Dette kapitlet etablerer den presisjonskulturen resten av boka bygger på. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Strategi for Section A: 1) les alle alternativene helt ut (ett er «mest riktig», ofte skiller ett tegn); 2) elimér de åpenbart gale; 3) let etter det ene tegnet/ordet som skiller nære alternativer — selektor-symbol (`+` søsken vs `~` generelt søsken vs `.` klasse vs mellomrom etterkommer), operator (`==` verditvang vs `===` streng), rekkefølge (box-model utenfra→inn; `border-width` topp→høyre→bunn→venstre); 4) på T/F-lister: hver påstand vurderes for seg, husk at «flere kan være sanne»; 5) **det finnes ingen delpott — sjekk syntaksen tegn for tegn før du krysser av**. Ett gjennomgått «typisk sett» på ~10 spørsmål med forklaring på hvorfor hvert riktig alternativ er riktig OG hvorfor hver nær distraktor er gal. Presenteres som en `theorem`-lignende sjekkliste + en `warning` **«Syntakspresisjon»**.
- **Oppgavesjangre:** A. 18–24 flervalgs-/sant-usant-spørsmål på tvers av HTML/CSS/JS/protokoller, med nære distraktorer, i eksamensrekkefølge. Mønstereksempel: «Hvilken selektor treffer et `<p>` som er *umiddelbar søsken* rett etter en `<h2>`? (`h2 p` / `h2+p` / `h2~p` / `h2.p`)» — riktig: `h2+p`.
- **Typiske feil:** Blande selektortyper (`h2.p`/`h2*p` i stedet for `h2 p`/`h2+p`); `==` vs `===`; feil box-model-rekkefølge (svare «border, margin, padding»); feil `border-width`-rekkefølge; tro at `<link>` laster JavaScript; la et spørsmål stå på ren gjetting uten å sjekke ett-tegns-forskjellen.
- **Quiz: 24 · Flashcards: 12** (quiz er ren Section A-trening med nære syntaksdistraktorer; lav flashcard fordi begrepene dekkes i temadelene)

#### Kapittel 0.3: Håndverk 2 og 3 — Kortsvar (Section B) og koding (Section C)

- **id:** `it2805-0-3` · **number:** 0.3 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-0-1` · **kapitteltype:** drill
- **description:** Metodene for Section B (korte, presise forklaringer og kodesporing) og Section C (skriv kode der idéene teller) — de to andre håndverkene, med kontrast god vs. dårlig besvarelse.
- **Eksamensbelegg:** Section B (**~30 %**) består av korte forklaringer (C), relative URL-er (D), fyll-inn (E) og kodesporing (B). Section C (**~40 %**) er ren kodeskriving (F/G/H/I) der fasiten sier *«løsningen er bare én av mange — idéene teller»*. Kapitlet etablerer de to arbeidsmåtene. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** **Section B-metode:** forklaringer (C) besvares med korte kulepunkter — si *hva* som skjer, ikke skriv essay; kodesporing (B) kjøres *mekanisk i hodet* linje for linje (samme mal som Del 5.7); relative URL-er (D) og fyll-inn (E) løses etter faste oppskrifter (Del 2.1, Del 2.5). Vis en **kontrast**: en kort, presis TCP/IP-forklaring (full pott) vs. en lang, vag (trekker ned). **Section C-metode:** les spesifikasjonen → velg riktig verktøy (HTML-tag / CSS-selektor / JS-funksjon / canvas-skjelett) → skriv idiomatisk vanilla-kode → *ikke stress over eksakt fasitmatch* (`tip` **«Idéene teller»**: alternative korrekte løsninger gir full pott, omtrentlig canvas godtas). Presenteres som to `theorem`-lignende oppskrifter.
- **Oppgavesjangre:** C, D, E (Section B) + F, G, H, I (Section C) — introdusert i miniformat. 3–4 «hvordan ville du besvart»-refleksjonsoppgaver, ikke full kode ennå (det driller temadelene).
- **Typiske feil:** Skrive lange, ordrike forklaringer der korte kulepunkter kreves (Section B); i Section C: bruke for lang tid på å pusse en løsning som allerede formidler idéen; glemme at flere løsninger er riktige og «låse seg» på én fasit; hoppe over å lese hele spesifikasjonen.
- **Quiz: 14 · Flashcards: 12**

---

### Del 1 — HTML: struktur, skjema, tabell og semantikk *(prioritet: PERFEKT; 1.5 merket moderne)*

> HTML-elementer, skjema og tabell har **100 %** frekvens — skjema- og/eller
> tabellskriving i hvert sett, pluss HTML-attributt-flervalg i Section A. Fire
> arkivbelagte kapitler + ett merket moderne (semantisk HTML5).

#### Kapittel 1.1: HTML-dokumentet: struktur, elementer og attributter

- **id:** `it2805-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Dokumentskjelettet (`<!DOCTYPE html>`, `<head>`/`<body>`), grunnelementene, attributter, og skillet blokk vs. inline — grunnlaget alt annet HTML/CSS/JS henger på.
- **Eksamensbelegg:** **100 %** frekvens; HTML-attributt-flervalg i Section A og dokumentstruktur som grunnlag for all skriving. **Blokk (`<div>`) vs. inline (`<span>`)** er en fast konseptfelle. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `<!DOCTYPE html>`, `<html>`/`<head>`/`<title>`/`<body>`; overskrifter `<h1>`–`<h6>`, avsnitt `<p>`, linjeskift `<br>`, `<b>`/`<i>`/`<strong>`/`<em>`; lister `<ul>`/`<ol>`/`<li>`; **blokk vs. inline** — `<div>` (blokk, ny linje) vs. `<span>` (inline, i tekststrøm); attributt-syntaks (`attributt="verdi"`), globale attributter `id`, `class`; kommentar `<!-- -->`; velformet nøsting og lukketagger. Til bruk og flervalg.
- **Oppgavesjangre:** A (attributt-/element-flervalg) + F (skriv struktur). Mønstereksempel (A): «Hvilket element er *inline* som standard? (`<div>` / `<p>` / `<span>` / `<ul>`)» — riktig: `<span>`.
- **Typiske feil:** Forveksle blokk (`<div>`) og inline (`<span>`); glemme lukketagg / feil nøsting; blande `id` (unik) og `class` (gjenbrukbar); tro at `<br>` trenger lukketagg.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Skjema (forms)

- **id:** `it2805-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-1-1` · **kapitteltype:** teori
- **description:** Skjemaelementene — `<form>`, `<input>` med typer, `<label>`, `<textarea>`, `<button>` — som skrives fra en spesifikasjon i hvert sett og senere leses av JavaScript.
- **Eksamensbelegg:** **100 %** frekvens; skjemaskriving (F) er fast i Section C, og skjemafelt leses av JS-funksjoner (kobling til Del 5.4). `<input type="...">` og `<label for>` er faste flervalg/skriveelementer. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for HTML-skjemamalen):** `<form>` (evt. `action`/`method`); `<input type="text/email/password/button/submit/checkbox/radio">` med `name`/`id`/`value`/`placeholder`; **`<label for="id">`** koblet til feltets `id`; `<textarea rows cols>`; `<button onclick="fn()">`; `<select>`/`<option>`; skjemamalen: `<form>` → `<label for="x">…</label> <input id="x" type="text">` → `<button>`. Til bruk (skriving).
- **Oppgavesjangre:** F (skriv skjema). Mønstereksempel: «Skriv et skjema med et tekstfelt for navn (med tilhørende `<label>`), et e-postfelt, og en knapp som kaller `send()` ved klikk.»
- **Typiske feil:** Glemme å koble `<label for>` til feltets `id`; feil `type`-verdi; glemme `name`/`id` slik at JS ikke finner feltet; bruke `<input type="text">` der `email`/`button` var spesifisert.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.3: Tabeller

- **id:** `it2805-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-1-1` · **kapitteltype:** teori
- **description:** Tabellstrukturen `<table>`/`<tr>`/`<th>`/`<td>` med `colspan`/`rowspan` og bilder i celler — en fast Section C-skriveoppgave.
- **Eksamensbelegg:** **100 %** frekvens; tabellskriving (F) er fast i Section C, ofte med `<img>` i en celle og `colspan`/`rowspan`. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for HTML-tabellmalen):** `<table>`, `<tr>` (rad), `<th>` (overskriftscelle, fet/sentrert), `<td>` (datacelle); **`colspan="n"`** (celle spenner n kolonner), **`rowspan="n"`** (n rader); `<caption>`; `<img src alt>` i en celle; tabellmalen: `<table>` → `<tr><th>…</th></tr>` → `<tr><td>…</td></tr>`. Til bruk (skriving).
- **Oppgavesjangre:** F (skriv tabell). Mønstereksempel: «Skriv en tabell med en overskriftsrad (tre kolonner) og to datarader, der den øverste cellen spenner alle tre kolonnene med `colspan`, og én celle inneholder et bilde.»
- **Typiske feil:** Forveksle `<th>` og `<td>`; feil `colspan`/`rowspan`-verdi slik at raden får feil antall celler; glemme `<tr>` rundt cellene; blande rad- og kolonnespenn.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.4: Lenker, medier og HTML-/DOM-treet

- **id:** `it2805-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-1-1` · **kapitteltype:** teori
- **description:** Lenker (`<a href>`), bilder/video, kobling av CSS og JS til dokumentet, og hvordan HTML-koden danner et dokument-tre (DOM) — grunnlaget for både relative URL-er og JavaScript.
- **Eksamensbelegg:** Lenker/medier **100 %** (grunnlag for relative URL-er, Del 2.1); **`<link rel="stylesheet">` vs. `<script src>`** er en fast sant/usant-felle (`<link>` laster IKKE JavaScript); **HTML-/DOM-tre-tegning** i ~50 % (Section B). Prioritet: **perfekt** (lenker/kobling) / **kjenne** (tre-tegning).
- **Kodekontrakt (API- og konstruksjonsliste):** `<a href="url">tekst</a>` (absolutt vs. relativ); `<img src alt>`; `<video src controls>`, `<audio>`; **kobling til dokumentet** — `<link rel="stylesheet" href="...">` (ekstern CSS), `<style>…</style>` (intern CSS), `<script src="...">` (ekstern JS), `<script>…</script>` (intern JS); **DOM-treet** — hvordan nøstede elementer danner foreldre/barn/søsken-noder (grunnlag for `getElementById`, Del 5.4); tegne dokumenttreet av en HTML-snutt. Til bruk og forklaring/tegning.
- **Oppgavesjangre:** A/E (kobling) + B (tegn DOM-tre). Mønstereksempel (A): «Hvordan lastes en ekstern JavaScript-fil? (`<link src>` / `<script src>` / `<style src>` / `<js src>`)» — riktig: `<script src>`.
- **Typiske feil:** Tro at `<link>` laster JavaScript (riktig: `<script src>`); forveksle ekstern/intern kobling; feil foreldre/barn-relasjon i DOM-treet; glemme `alt` på `<img>`.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.5: Semantisk HTML5 *(NY — merket moderne)*

- **id:** `it2805-1-5` · **number:** 1.5 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-1-1` · **kapitteltype:** teori
- **description:** De semantiske HTML5-elementene `<header>`/`<nav>`/`<main>`/`<article>`/`<section>`/`<footer>` og hvorfor de er bedre enn `<div>`-supper — moderne pensum, ikke belagt i arkivet.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Arkivet bruker kun `<div>`/`<span>`, men NTNUs gjeldende emnebeskrivelse framhever semantisk HTML5. Kobles til universell utforming (Del 8 — semantikk hjelper skjermlesere). Prioritet: **kjenne** (verifiser).
- **Kodekontrakt (API- og konstruksjonsliste):** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`/`<figcaption>`; forskjellen fra generisk `<div>` (mening vs. bare boks); når hver brukes; at semantikk gir bedre tilgjengelighet og SEO. Til bruk (skriving). **Merk `warning`:** dette er moderne pensum — verifiser mot gjeldende emne før eksamen.
- **Oppgavesjangre:** F (skriv semantisk struktur). Mønstereksempel: «Skriv om en side bygget av `<div class="header">`/`<div class="nav">`/`<div class="footer">` til semantiske HTML5-elementer.»
- **Typiske feil:** Bruke `<section>` som ren stylingboks (bruk `<div>` når det ikke er semantisk mening); nøste `<main>` flere ganger (skal være én per side); forveksle `<article>` (selvstendig innhold) og `<section>` (tematisk gruppe).
- **Quiz: 14 · Flashcards: 14**

---

### Del 2 — Web-arkitektur: URL-er, nettverk og dataformater *(prioritet: KUNNE — fast, billig poengkilde)*

> Section B/A-fakta med høy frekvens og lav vekt per punkt, men de summerer seg og er
> «gratis» poeng: relative URL-er (~100 %), TCP/IP-lagene (~100 %), protokoller
> FTP/DNS (~100 %), XML/JSON (100 %), bildeformater (75 %). Avhengighetsfri fra
> resten av boka. Konsept-/nettverkskapitlene (2.2–2.5) bruker «Begreps- og
> referanseliste» i stedet for API-liste.

#### Kapittel 2.1: Relative URL-er og mappestruktur

- **id:** `it2805-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-1-4` · **kapitteltype:** teori
- **description:** Å regne ut korrekt relativ sti mellom filer i et mappetre — `../` opp et nivå, `mappe/fil.html` ned, bare `fil.html` i samme mappe — en klassisk gjenganger i hvert sett.
- **Eksamensbelegg:** **~100 %** frekvens; egen B-oppgave i tre sett (musikk-/serie-nettsted med samme mappestruktur) + ett flervalg i det fjerde. Sterkt resirkulert. Prioritet: **kunne** (grensende til perfekt — billig, sikker poengkilde).
- **Kodekontrakt (`theorem`-idiom for relativ-URL-oppskriften):** Absolutt vs. relativ URL; **oppskrift**: (1) finn mappa til kildefila; (2) tell nivåer opp til felles forgrening med `../` per nivå; (3) gå ned i målmappa (`mappe/undermappe/`); (4) legg til filnavnet; samme mappe → bare `fil.html`; ett nivå ned → `mappe/fil.html`; ett nivå opp → `../fil.html`. `<a href>`/`<img src>` med relativ sti. Til bruk (regning).
- **Oppgavesjangre:** D (relativ URL). Mønstereksempel (nyskrevet mappetre): «Nettstedet har `index.html` i rota, `bilder/logo.png`, og `sider/om/oss.html`. Skriv den relative stien fra `sider/om/oss.html` til `bilder/logo.png`.» — svar: `../../bilder/logo.png`.
- **Typiske feil:** Glemme `../` for å gå opp et nivå; legge til unødig sti når filene ligger i samme mappe; feil antall `../` (av-med-én i nivåtelling); forveksle retning (opp vs. ned).
- **Quiz: 18 · Flashcards: 12**

#### Kapittel 2.2: TCP/IP-lagene og protokollbegrepet

- **id:** `it2805-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** TCP/IP-modellens fire lag (Application/Transport/Network/Physical), hva hvert lag gjør, og hvilke protokoller som hører til — nesten verbatim gjenbrukt i tre sett.
- **Eksamensbelegg:** **~100 %** frekvens; «navngi de 4 lagene og forklar hvert kort» (C), lag↔protokoll-matching, og fyll-inn (E). Nesten ordrett resirkulert. Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og referanseliste):** De **fire lagene** i TCP/IP-modellen og oppgaven til hvert: **Application** (HTTP, FTP, DNS, SMTP — tjenester for programmer), **Transport** (TCP pålitelig/UDP upålitelig — ende-til-ende-forbindelse, porter), **Network/Internet** (IP — ruting, IP-adresser), **Physical/Link** (WiFi/Ethernet — bits over mediet); protokoll-begrepet (avtalt regelsett); pakke/segment; forskjellen fra OSI-modellens 7 lag (nevnes kort). Rent konsept.
- **Oppgavesjangre:** C (forklar de 4 lagene) + E (fyll-inn lag↔protokoll). Mønstereksempel (C): «Navngi de fire lagene i TCP/IP-modellen og forklar oppgaven til hvert med én setning, med en protokoll per lag.»
- **Typiske feil:** Feil rekkefølge/rolle på lagene; plassere HTTP på Transport (den er Application); forveksle TCP (pålitelig) og UDP (upålitelig); blande TCP/IP-modellens 4 lag med OSI-modellens 7.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.3: HTTP: POST vs GET og forespørsel/respons

- **id:** `it2805-2-3` · **number:** 2.3 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-2-2` · **kapitteltype:** teori
- **description:** Hvordan nettleser og tjener snakker sammen over HTTP, og den faste forklaringsoppgaven POST vs GET (caching, bokmerking, URL-lengde, synlighet av data).
- **Eksamensbelegg:** POST vs GET i ~50 % (egen forklaringsoppgave C + sant/usant A); HTTP-forespørsel/respons som grunnlag. Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og referanseliste):** HTTP-forespørsel (metode + URL + headere) og -respons (statuskode + headere + kropp); **GET** (data i URL-en, kan bokmerkes/caches, begrenset lengde, synlig) vs. **POST** (data i kroppen, ikke bokmerkes/caches, ubegrenset, skjult); statuskoder (200/404/500 — nevnes kort); at HTTPS er kryptert HTTP (nevnes kort). Rent konsept.
- **Oppgavesjangre:** C (forklar POST vs GET) + A (sant/usant). Mønstereksempel (C): «Forklar tre praktiske forskjeller mellom GET og POST med kulepunkter (caching, bokmerking, datasynlighet).»
- **Typiske feil:** Tro at GET-data er skjult (det ligger synlig i URL-en); tro at POST kan bokmerkes/caches; blande hvilken som har lengdebegrensning; forveksle HTTP og HTML.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 2.4: XML og JSON

- **id:** `it2805-2-4` · **number:** 2.4 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Velformet XML (gyldige tagnavn, ett rot-element, tomme elementer) og gyldig JSON — faste innslag i sant/usant-listene og «velg gyldige tagnavn»-oppgaver.
- **Eksamensbelegg:** **100 %** frekvens; XML/JSON-validitet i sant/usant-listene (A) og som egen «velg gyldige tagnavn»-oppgave (E). SVG er XML-basert (kobling til Del 6.4). Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og referanseliste):** **XML** — velformethet (alle tagger lukkes, korrekt nøsting), **ett rot-element**, gyldige tagnavn (kan ikke starte med siffer eller `#`, ingen mellomrom), tomme elementer (`<tag/>`), attributter i anførselstegn, skille store/små bokstaver; **JSON** — objekt `{"nøkkel": verdi}`, array `[...]`, strenger i doble anførselstegn, tallverdier uten anførselstegn, gyldig vs. ugyldig JSON; XML vs. JSON (verbøst vs. kompakt); at SVG er XML. Rent konsept.
- **Oppgavesjangre:** A/E (velg gyldige/ugyldige). Mønstereksempel (E): «Hvilke av disse er gyldige XML-tagnavn? `<2data>`, `<data-2>`, `<my tag>`, `<Data>`» — gyldige: `<data-2>`, `<Data>`.
- **Typiske feil:** Tro at XML kan ha flere rot-elementer; tagnavn som starter med siffer/`#`/mellomrom; glemme å lukke tomme elementer; tro at JSON-nøkler kan stå uten anførselstegn; blande XML-attributt-syntaks og JSON.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.5: Bildeformater og SVG

- **id:** `it2805-2-5` · **number:** 2.5 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-2-4` · **kapitteltype:** teori
- **description:** Egenskapene til GIF, JPEG og PNG (tapsløs/med tap, transparens, animasjon, antall farger) og SVG (vektor, XML) — fyll-inn-tabell og flervalg i tre sett.
- **Eksamensbelegg:** Bildeformater i ~75 % (fyll-inn E, flervalg A, utfyllingstabell). Fasit noterer at «PNG kan også være tapskomprimert» (flere svar godtas). Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og referanseliste + bildeformat-tabell):** **GIF** (tapsløs, 8-bit/256 farger, transparens ja/binær, animasjon ja); **JPEG** (med tap, mange farger, ingen transparens, ingen animasjon — best for foto); **PNG** (tapsløs, mange farger, alfa-transparens, ingen animasjon); raster/piksel vs. **vektor**; **SVG** (vektorgrafikk, XML-basert, skalerer uten kvalitetstap); når hvert format velges. Presenter som en `theorem`-lignende sammenligningstabell (format × tap/transparens/animasjon/farger).
- **Oppgavesjangre:** E (fyll-inn-tabell) + A (flervalg). Mønstereksempel (E): «Fyll inn tabellen: for hvert format (GIF/JPEG/PNG), angi tapsløs/med tap, transparens (ja/nei), animasjon (ja/nei).»
- **Typiske feil:** «JPG begrenset til 256 farger» (nei, det er GIF); «GIF for foto» (nei, JPEG); «GIF er tapskomprimert» (nei, tapsløst); glemme at PNG kan være tapskomprimert (også riktig); forveksle raster og vektor.
- **Quiz: 16 · Flashcards: 16**

---

### Del 3 — CSS: box-model, selektorer, pseudo og posisjonering *(prioritet: PERFEKT — bokas tyngdepunkt)*

> **Størst samlet poengvekt.** Alle temaene har **100 %** frekvens og testes både som
> flervalg (Section A) og skriveoppgaver (Section C, sjanger G — 8–12 %, kjernen i C).
> Seks teorikapitler + ett drillkapittel. Hvert kapittel driller BÅDE presis
> flervalgssyntaks (`warning` «Syntakspresisjon») OG regelskriving.

#### Kapittel 3.1: CSS-regelens anatomi og de tre stilarktypene

- **id:** `it2805-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-1-4` · **kapitteltype:** teori
- **description:** De fire delene av en CSS-regel (selektor, deklarasjon, property, value) og de tre måtene å koble stil på (ekstern, intern, inline) med `!important` — en fast forklaringsoppgave.
- **Eksamensbelegg:** Regelanatomi/stilark-typer i ~75 %: «navngi de 4 delene av en CSS-regel» (C) og «beskriv når du bruker hver stilark-type med kodeeksempel» (C). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for stilark-koblingen + API-liste):** **CSS-regelens 4 deler**: `selektor { property: value; }` — selektor, deklarasjon (`property: value`), property, value; **tre stilarktyper**: ekstern (`<link rel="stylesheet" href="stil.css">` — gjenbruk på tvers av sider), intern (`<style>…</style>` i `<head>` — én side), inline (`style="color:red"` på elementet — enkelt element); **kaskade/spesifisitet** (inline > id > class > element; `!important` overstyrer); kommentarer `/* */`. Til bruk og forklaring.
- **Oppgavesjangre:** C (forklar 4 deler / stilark-typer). Mønstereksempel: «Navngi de fire delene av CSS-regelen `p { color: blue; }` og forklar når du velger ekstern framfor inline stilark.»
- **Typiske feil:** Blande property og value; kalle hele `property: value` for «property»; feil bruk av `!important`; tro at inline stilark er best praksis (ekstern er det for gjenbruk); glemme semikolon mellom deklarasjoner.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.2: Selektorer: element, klasse, etterkommer, søsken og barn

- **id:** `it2805-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `it2805-3-1` · **kapitteltype:** teori
- **description:** Selektorfamiliene — element, `.class`, `#id`, etterkommer (`div p`), umiddelbart søsken (`h2+p`), generelt søsken (`h2~p`), barn (`p>b`) — der ett tegn avgjør hvilke elementer regelen treffer.
- **Eksamensbelegg:** **100 %** frekvens; testes både som flervalg (A — `h2+p` vs `h2~p` vs `h2.p`, tett distraktor-nest) og skriveoppgave (G). En av de vanligste Section A-fellene. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for selektor-familiene + API-liste):** **Element** (`p`), **klasse** (`.navn`), **id** (`#navn`), **universal** (`*`); **etterkommer** (`div p` — alle `<p>` inni en `<div>`, uansett dybde); **umiddelbart søsken** (`h2 + p` — første `<p>` rett etter en `<h2>`); **generelt søsken** (`h2 ~ p` — alle `<p>` som er søsken etter en `<h2>`); **barn** (`p > b` — bare direkte barn); **gruppering** (`h1, h2, h3`); **kombinert** (`p.viktig` = `<p>` med class `viktig`); attributtselektor (`[type="text"]` — nevnes kort). Til bruk og flervalg. `warning` **«Syntakspresisjon»** med alle selektorformene side om side.
- **Oppgavesjangre:** A (velg riktig selektor) + G (skriv selektor). Mønstereksempel (G): «Skriv en selektor som treffer alle `<li>`-elementer som er *direkte barn* av en `<ul>` med class `meny`.» — svar: `ul.meny > li`.
- **Typiske feil:** Blande `h2 p` (etterkommer) / `h2+p` (umiddelbart søsken) / `h2~p` (generelt søsken) / `h2.p` (element med class); forveksle `.class` (class) og element-selektor; forveksle barn (`>`) og etterkommer (mellomrom); mellomrom feil plassert i `p.viktig` vs. `p .viktig`.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 3.3: Pseudo-klasser og pseudo-elementer

- **id:** `it2805-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `it2805-3-2` · **kapitteltype:** teori
- **description:** Lenketilstandene `:link/:visited/:hover/:active` (LVHA), `.klasse:hover`, og pseudo-elementene `::first-line/::first-letter/::before/::after` med `content` — en fast Section C-oppgave.
- **Eksamensbelegg:** **100 %** frekvens; pseudo-elementene (`::first-letter`/`::before`/`::after`) er en fast C-skriveoppgave (G), og lenketilstandene er både flervalg (A — `a:unvisited`/`a:mouseover` finnes ikke) og skriving. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Pseudo-klasser** — `:link`, `:visited`, `:hover`, `:active` (**LVHA-rekkefølgen**), `:focus`, `:first-child`/`:last-child`/`:nth-child(n)`, `.klasse:hover`; **pseudo-elementer** (dobbelt kolon) — `::first-line`, `::first-letter`, `::before`/`::after` med `content: "…"` eller `content: url(...)`; forskjellen pseudo-klasse (tilstand) vs. pseudo-element (del av elementet). Til bruk (skriving) og flervalg. `warning` **«Syntakspresisjon»**: `a:link` finnes, `a:unvisited` finnes ikke; `:hover` vs. `:mouseover`.
- **Oppgavesjangre:** G (skriv pseudo-regel) + A (velg gyldig). Mønstereksempel (G): «Skriv CSS som gjør at (a) besøkte lenker blir grå, (b) lenker blir røde når musen er over, og (c) første bokstav i hvert avsnitt blir dobbelt så stor.»
- **Typiske feil:** Feil lenketilstand-navn (`a:unvisited`/`a:mouseover` finnes ikke — riktig `a:visited`/`a:hover`); feil LVHA-rekkefølge slik at `:hover` overstyres; enkelt kolon på pseudo-element der dobbelt kreves; glemme `content:` på `::before`/`::after` (uten den vises ingenting).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Box-model

- **id:** `it2805-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `it2805-3-1` · **kapitteltype:** teori
- **description:** Box-model utenfra og inn — margin → border → padding → innhold — med `border`-shorthand, `border-radius` og `border-width`-rekkefølgen (TRBL) som er en fast flervalgsfelle.
- **Eksamensbelegg:** **100 %** frekvens; «from outside to inside …» går igjen nesten ordrett i alle sett (A), og box-model-skriving (`border:10px solid green`, `padding`) er kjernen i Section C (G). **Rekkefølge-fellen** (margin→border→padding, og `border-width` TRBL) er en fast distraktor. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for box-model-oppskriften + API-liste):** Boksens lag **utenfra og inn: margin → border → padding → content**; `margin`/`padding` (shorthand med 1/2/4 verdier: 4 verdier = **topp, høyre, bunn, venstre**, klokkeretning/TRBL); `border` (`border: 10px solid green` = bredde/stil/farge), `border-width`/`border-style`/`border-color`, `border-radius` (avrundede hjørner); `width`/`height`; `box-sizing` (nevnes kort); forskjellen margin (utenfor border, mellomrom mot naboer) vs. padding (innenfor border, mellomrom mot innhold). Til bruk og flervalg. `warning` **«Syntakspresisjon»**: box-model-rekkefølgen og TRBL.
- **Oppgavesjangre:** A (rekkefølge/shorthand) + G (skriv box-model-regler). Mønstereksempler: (A) «I hvilken rekkefølge ligger box-model-lagene fra ytterst til innerst?» — margin, border, padding, content; (G) «Skriv en regel som gir et element 20 px padding, en 2 px stiplet blå ramme, og runde hjørner på 8 px.»
- **Typiske feil:** Feil rekkefølge (svare «border, margin, padding»); bytte om høyre/venstre eller topp/bunn i `border-width`-shorthanden (TRBL); forveksle margin og padding; glemme enhet (`px`) på verdier.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.5: Posisjonering

- **id:** `it2805-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `it2805-3-4` · **kapitteltype:** teori
- **description:** `position`-egenskapen (static/relative/absolute/fixed, standard = static), `top`/`left`, `z-index` og `display` — hvordan arkivets layout gjøres posisjonsbasert.
- **Eksamensbelegg:** **100 %** frekvens; både «hva er standardverdien for `position`» (A — svar: `static`) og «skriv riktig verdi for beskrivelsen» (G), pluss `z-index`-fyll-inn (E). Layout er posisjonsbasert i arkivet. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for posisjonerings-oppskriften + API-liste):** `position: static` (**standard**, normal flyt), `relative` (forskjøvet fra egen normalposisjon), `absolute` (relativt til nærmeste posisjonerte forelder, ut av flyten), `fixed` (relativt til vindu, fast ved scrolling); **`top`/`right`/`bottom`/`left`** (offset — virker kun på ikke-static); **`z-index`** (stablingsrekkefølge, høyere = foran); `display: block`/`inline`/`inline-block`/`none`; `float` (nevnes kort, eldre layout). Til bruk, flervalg og fyll-inn.
- **Oppgavesjangre:** A (standardverdi) + G (skriv posisjonsregel) + E (fyll-inn `z-index`). Mønstereksempler: (A) «Hva er standardverdien for `position`?» — `static`; (G) «Plasser en boks 20 px fra toppen og 30 px fra venstre, forankret til nærmeste posisjonerte forelder.»
- **Typiske feil:** Tro at standardverdien er noe annet enn `static`; tro at `top`/`left` virker på `static`; forveksle `absolute` (ut av flyten, ift. forelder) og `fixed` (ift. vindu); forveksle `relative` og `absolute`; glemme at et element må ha `position` for at `z-index` skal virke.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.6: Tekst, font og farge

- **id:** `it2805-3-6` · **number:** 3.6 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-3-1` · **kapitteltype:** teori
- **description:** De vanligste stylingegenskapene for tekst og bakgrunn — `font-family/size/weight/style`, `text-decoration`, `color`, `background-color` og `display:inline` — som fyller ut CSS-skriveoppgavene.
- **Eksamensbelegg:** **100 %** frekvens som del av CSS-skriving (G): font, bakgrunn, farge, `display:inline`. `text-decoration` (fjerne understrek på lenker) er et fast innslag. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `font-family` (med fallback-liste), `font-size` (`px`/`em`/`%`), `font-weight` (`bold`/`normal`/tall), `font-style` (`italic`); `text-decoration` (`underline`/`none`/`line-through`); `text-align`; `color` (navn/hex `#rrggbb`/`rgb()`); `background-color`/`background-image`; `line-height`; `display: inline`/`block`. Til bruk (skriving).
- **Oppgavesjangre:** G (skriv styling). Mønstereksempel: «Skriv en regel for class `tittel` som gir fet, kursiv, 24 px sans-serif-skrift i farge `#333`, uten understrek.»
- **Typiske feil:** Feil enhet eller manglende enhet på `font-size`; forveksle `font-weight` og `font-style`; glemme fallback i `font-family`; feil hex-fargesyntaks (mangler `#` eller feil antall siffer); tro at `text-decoration:none` fjerner all styling.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.7: DRILL — CSS-skriving og selektor-flervalg

- **id:** `it2805-3-7` · **number:** 3.7 · **estimatedMinutes:** 80 · **prerequisites:** `it2805-3-5` · **kapitteltype:** drill
- **description:** Full drill på Section C-kjernen (sjanger G, 8–12 %): skriv korrekte CSS-regler for gitte spesifikasjoner, kombinert med selektor-/box-model-/posisjon-flervalg (Section A) der presisjonen premieres.
- **Eksamensbelegg:** CSS-skriving (G) er **kjernen i Section C, 8–12 %** — ofte tyngdepunktet. Kombinert med Section A-flervalget der ett tegn avgjør. Dette kapitlet driller begge sider samlet. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** For hver skriveoppgave: 1) identifisér hvilke elementer regelen skal treffe → velg riktig selektor (element/class/etterkommer/søsken/barn/pseudo); 2) velg riktige egenskaper (box-model/posisjonering/font/farge); 3) skriv `selektor { property: value; }` med korrekt syntaks og semikolon. Ett gjennomgått «typisk C-oppgave»-sett (5–6 regler: en pseudo-klasse-regel, en pseudo-element-regel, en posisjonsregel, en box-model-regel, en font-regel) med margnotater om hva som gir uttelling (`tip` **«Idéene teller»**: rett selektor + rimelige verdier gir full pott). Deretter en `warning` **«Syntakspresisjon»** med selektor-/box-model-flervalg. 12–16 oppgaver: blanding av skriveoppgaver (G) og flervalg (A), stigende til eksamensnivå.
- **Oppgavesjangre:** G (skriv CSS) + A (selektor-/box-model-flervalg). Mønstereksempel (G): «Skriv CSS som (a) fjerner understrek på alle lenker i en meny (`.meny a`), (b) gjør hver besøkt lenke grå, (c) legger et ★-symbol før hvert `<li>` i menyen med `::before`, (d) gir menyen en 1 px grå ramme og 10 px padding.»
- **Typiske feil:** Feil selektor-symbol (mellomrom/`+`/`~`/`.`/`>`); feil box-model-rekkefølge; enkelt kolon på pseudo-element; glemme `content:` på `::before`/`::after`; glemme semikolon; på flervalget: krysse uten å sjekke ett-tegns-forskjellen.
- **Quiz: 26 · Flashcards: 10** (quiz vekter tungt mot selektor-/box-model-/posisjon-flervalg — direkte Section A-trening; lav flashcard fordi referansene er dekket i 3.1–3.6)

---

### Del 4 — Moderne CSS-layout: Flexbox, Grid og responsivt design *(NY — merket moderne; prioritet: KJENNE / verifiser)*

> `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Arkivet gjør
> layout posisjonsbasert (Del 3.5), men NTNUs gjeldende emnebeskrivelse framhever
> Flexbox, Grid og responsivt design. Tre kompakte kapitler, hvert med en `warning`
> om at dette er moderne pensum. Ikke samme tunge drill som Del 3 — differensierende
> stoff. Ett innslag i øvingseksamen 9.3.

#### Kapittel 4.1: Flexbox *(NY — merket moderne)*

- **id:** `it2805-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-3-5` · **kapitteltype:** teori
- **description:** Én-dimensjonal layout med Flexbox — `display:flex`, `justify-content`, `align-items`, `flex-direction` — den moderne måten å legge ut rader og kolonner på.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Moderne erstatning for posisjonsbasert layout (Del 3.5). Prioritet: **kjenne** (verifiser).
- **Kodekontrakt (API- og konstruksjonsliste):** `display: flex` (på container); `flex-direction: row/column`; `justify-content` (hovedakse: `flex-start`/`center`/`space-between`/`space-around`); `align-items` (kryssakse: `stretch`/`center`/`flex-start`); `flex-wrap`; `flex: 1` (på barn — voks/krymp); `gap`; hovedakse vs. kryssakse. Til bruk. `warning`: moderne pensum, verifiser.
- **Oppgavesjangre:** G (skriv flex-layout). Mønstereksempel: «Legg tre bokser i en horisontal rad med like mellomrom mellom dem og sentrert vertikalt, med Flexbox.»
- **Typiske feil:** Sette flex-egenskaper på barna i stedet for containeren; forveksle `justify-content` (hovedakse) og `align-items` (kryssakse); glemme at `flex-direction` bytter hvilken akse som er hoved-/krysakse; blande Flexbox og Grid.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.2: CSS Grid *(NY — merket moderne)*

- **id:** `it2805-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-4-1` · **kapitteltype:** teori
- **description:** To-dimensjonal layout med CSS Grid — `display:grid`, `grid-template-columns`, `fr`-enheten, `grid-gap` og plassering — for rutenett-baserte sider.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Moderne to-dimensjonal layout. Prioritet: **kjenne** (verifiser).
- **Kodekontrakt (API- og konstruksjonsliste):** `display: grid`; `grid-template-columns`/`grid-template-rows` (med `px`/`%`/**`fr`**/`repeat()`); `gap`/`grid-gap`; `grid-column`/`grid-row` (spenn celler); `fr`-enheten (andel av ledig plass); Grid (2D) vs. Flexbox (1D). Til bruk. `warning`: moderne pensum, verifiser.
- **Oppgavesjangre:** G (skriv grid-layout). Mønstereksempel: «Lag et rutenett med tre kolonner der den midtre er dobbelt så bred som de to andre, med 10 px mellomrom, med CSS Grid.»
- **Typiske feil:** Forveksle `fr` og `%`; bruke Grid der Flexbox holder (1D vs. 2D); glemme `gap`; feil `repeat()`-syntaks; sette grid-egenskaper på barna i stedet for containeren.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.3: Responsivt design og media queries *(NY — merket moderne)*

- **id:** `it2805-4-3` · **number:** 4.3 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-4-1` · **kapitteltype:** teori
- **description:** Sider som tilpasser seg skjermstørrelsen — `@media`-spørringer, `viewport`-metataggen og relative enheter — moderne pensum, ikke i arkivet.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Responsivt design er framhevet i gjeldende emnebeskrivelse. Prioritet: **kjenne** (verifiser).
- **Kodekontrakt (API- og konstruksjonsliste):** `@media (max-width: 600px) { … }` (breakpoint); `<meta name="viewport" content="width=device-width, initial-scale=1">`; relative enheter (`%`/`em`/`rem`/`vw`/`vh`) vs. absolutte (`px`); mobile-first vs. desktop-first; fleksible bilder (`max-width:100%`). Til bruk. `warning`: moderne pensum, verifiser.
- **Oppgavesjangre:** G (skriv media query). Mønstereksempel: «Skriv en media query som stabler en tre-kolonners Flexbox-meny til én kolonne når skjermen er smalere enn 600 px.»
- **Typiske feil:** Glemme viewport-metataggen (siden zoomes på mobil); bruke `px` der relative enheter trengs for responsivitet; feil `@media`-syntaks; sette breakpoint feil vei (`min-width` vs. `max-width`).
- **Quiz: 14 · Flashcards: 12**

---

### Del 5 — JavaScript: syntaks, DOM, hendelser og Date *(prioritet: PERFEKT)*

> JS/DOM-skriving (75–100 %), funksjoner/løkker/hendelser (100 %) og **kodesporing
> (100 %)** — den andre store kodefamilien. Seks teorikapitler + to drillkapitler
> (kodesporing 5.7, finn-og-rett-feil 5.8). Hvert syntaks-kapittel introduserer en
> konstruksjon OG dens vanligste kodesporingsfelle (kobling til 5.7).

#### Kapittel 5.1: JS-syntaks: variabler, typer, operatorer og typetvang

- **id:** `it2805-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Variabler, tall/streng/boolsk, aritmetikk (`%`, `Math.floor`, `Math.max`), strengkonkatenering med `+`, og den beryktede typetvangen `==` vs `===` og streng+tall — kjernen i kodesporingen.
- **Eksamensbelegg:** **100 %** frekvens (grunnlag); typetvang (`==`/`===`, `age + 1` → «181», `Boolean(...)`) er en fast kodesporings- og flervalgsfelle (B/A) i ~50 %. `Math.floor(3.8)=3` går igjen. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `var`/`let`/`const`; typer (number/string/boolean/undefined); aritmetikk `+ - * / %` (`%` modulo); `Math.floor`/`Math.ceil`/`Math.round`/`Math.max`/`Math.min`; **strengkonkatenering** `+` (`"a" + 1` → `"a1"`); **typetvang** — `==` (verditvang, `1 == "1"` er `true`) vs. `===` (streng, `1 === "1"` er `false`); `Boolean(x)` (0/""/null/undefined/NaN er falske); `typeof x`; `Number("5")`/`parseInt`/`String(5)`. Til bruk og sporing. `warning` **«Syntakspresisjon»**: `==` vs `===`.
- **Oppgavesjangre:** B (spor verdi) + A (typetvang-flervalg). Mønstereksempler: (B) «Hva blir verdien av `"5" + 3` og av `"5" - 3`?» — `"53"` og `2`; (A) «Hva returnerer `1 == "1"` og `1 === "1"`?» — `true`, `false`.
- **Typiske feil:** Anta at `prompt`-input + 1 blir tall (blir streng: «181»); forveksle `==` (true) og `===` (false); glemme at `+` konkatenerer ved streng-operand; tro at `Math.floor` avrunder normalt (den runder alltid ned).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.2: Kontrollflyt: betingelser og løkker

- **id:** `it2805-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `it2805-5-1` · **kapitteltype:** teori
- **description:** `if/else`, boolske uttrykk (`&&`/`||`/`!`), og løkkene `for`/`while`/`do-while` med `continue` — den vanligste kodesporingssjangeren (hva skrives ut).
- **Eksamensbelegg:** **100 %** frekvens; løkke-utskrift (`do-while` som skriver 0–9, `for` over array, `continue` som hopper over `i===3`) og boolske uttrykk (`humid`/`isValid`/`sendFile` — ordrett resirkulert) er kjernen i JS-kodesporingen (B). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `if/else if/else`; boolske operatorer `&&`/`||`/`!` og presedens; sammenligning `< <= > >= == === != !==`; **`for (var i=0; i<n; i++)`**; **`while (betingelse)`**; **`do { … } while (betingelse)`** (kjører minst én gang); `break`/`continue` (`continue` hopper til neste iterasjon); nøstede løkker; løkketerminering. Til bruk og sporing.
- **Oppgavesjangre:** B (hva skrives ut). Mønstereksempler: (B) «Hva skriver `for (var i=0; i<5; i++) { if (i===2) continue; document.write(i); }` ut?» — `0134`; (B, boolsk) «Hva returnerer `check(a, b)` for `check(true, false)` når `return a && !b`?» — `true`.
- **Typiske feil:** Av-med-én i løkkegrenser (`i=1` i stedet for `i=0`, `<` vs `<=`); glemme at `do-while` kjører minst én gang; feil effekt av `continue`; `=` i stedet for `==`/`===` i betingelse (uendelig/feil løkke); feil presedens i blandede `&&`/`||`.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 5.3: Funksjoner og hendelser

- **id:** `it2805-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-5-2` · **kapitteltype:** teori
- **description:** Definere funksjoner (`function navn(){}`), returnere verdier, og koble dem til brukerhandlinger med `onclick` og andre hendelser — limet mellom HTML og JavaScript.
- **Eksamensbelegg:** **100 %** frekvens; funksjoner er ryggraden i all JS-skriving, og `onclick`-knapper går igjen (kobling til skjema Del 1.2 og DOM Del 5.4). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for funksjonsmalen + API-liste):** `function navn(par1, par2) { … return verdi; }`; kall `navn(arg)`; parametere og returverdi; funksjon uten `return` gir `undefined`; **hendelser** — `onclick="fn()"` (i HTML) eller `element.onclick = fn`; `window.onload` (kjør når siden er lastet — grunnlag for canvas Del 6); andre hendelser (`onchange`/`onmouseover` — nevnes kort); scope (lokal vs. global variabel). Til bruk og sporing.
- **Oppgavesjangre:** H (skriv funksjon + kobling). Mønstereksempel: «Skriv en funksjon `hilsen()` som viser en `alert` med teksten «Hei!», og en knapp i HTML som kaller den ved klikk.»
- **Typiske feil:** Glemme parentesene i `onclick="fn()"` (kaller ikke); glemme `return` (funksjonen gir `undefined`); forveksle å *referere* funksjonen (`onclick = fn`) og å *kalle* den (`onclick = fn()`); scope-feil (global vs. lokal).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.4: DOM-manipulering

- **id:** `it2805-5-4` · **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** `it2805-5-3` · **kapitteltype:** teori
- **description:** Å lese fra og skrive til siden med DOM-API-et — `getElementById().innerHTML`, `.value`, `document.forms`, `document.write` — måten JS oppdaterer siden på.
- **Eksamensbelegg:** DOM-manipulering i ~75 %; «skriv en funksjon som leser et skjemafelt og oppdaterer siden» (H) er en fast Section C-oppgave. `getElementById(...).innerHTML`/`.value` er de mest brukte idiomene. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for DOM-oppdateringsmønsteret + API-liste):** **`document.getElementById("id")`** → element; **`.innerHTML = "…"`** (erstatt innhold), **`.value`** (les/sett skjemafeltverdi); `document.write("…")` (skriv til dokumentet); `document.forms[0].felt.value` / `document.getElementById("skjema").felt.value`; `getElementsByTagName`/`querySelector` (nevnes); `element.src`/`.style.color`; **les-og-oppdater-mønsteret**: `var x = document.getElementById("inn").value; ... ; document.getElementById("ut").innerHTML = resultat;`. Til bruk (skriving).
- **Oppgavesjangre:** H (les felt → regn → oppdater). Mønstereksempel: «Skriv en funksjon som leser et tall fra feltet med id `alder`, legger til 10, og viser resultatet i elementet med id `svar`.»
- **Typiske feil:** Glemme `.value` når man leser et skjemafelt (får elementet, ikke verdien); glemme `int`/`Number`-konvertering så `+` konkatenerer i stedet for å summere; feil `id` (finner ikke elementet, `null`); forveksle `.innerHTML` (innhold) og `.value` (feltverdi).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.5: Brukerinteraksjon: prompt og alert

- **id:** `it2805-5-5` · **number:** 5.5 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-5-4` · **kapitteltype:** teori
- **description:** Å lese input med `prompt` og vise beskjeder med `alert`/`confirm` — den enkle brukerinteraksjonen som går igjen i «les et tall, regn, og vis svaret»-oppgaver.
- **Eksamensbelegg:** `prompt`/`alert` i ~75 %: les tall fra bruker, regn og vis (trehøyde, gange/dele). **`prompt` returnerer alltid streng** (typetvang-felle, kobling til 5.1). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`prompt("melding")`** (returnerer **streng** eller `null` ved avbryt — må konverteres med `Number`/`parseInt`); **`alert("melding")`** (vis beskjed); `confirm("…")` (ja/nei → boolsk); typisk mønster: `var n = Number(prompt("Tall:")); alert(n * 2);`. Til bruk (skriving).
- **Oppgavesjangre:** H (les → regn → vis). Mønstereksempel: «Skriv kode som spør brukeren om et tall med `prompt`, ganger det med 3, og viser svaret med `alert`.»
- **Typiske feil:** Glemme at `prompt` gir streng (så aritmetikk konkatenerer: «5» + 1 = «51»); glemme `Number()`/`parseInt()`-konvertering; ikke håndtere `null` ved avbryt; forveksle `alert` (vis) og `prompt` (les).
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 5.6: Date-objektet

- **id:** `it2805-5-6` · **number:** 5.6 · **estimatedMinutes:** 40 · **prerequisites:** `it2805-5-4` · **kapitteltype:** teori
- **description:** Å hente dato og klokkeslett med `new Date()` og metodene `getHours`/`getMinutes`/`getDay`, og regne datodifferanser — grunnlaget for «er timen over 12:20?» og «dager til jul».
- **Eksamensbelegg:** `Date`-objektet i ~75 %: «er timen over 12:20?» (identisk i 2015 og 2019), «dager til jul», «trehøyde om n år». Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`new Date()`** (nåtid) / `new Date(år, mnd, dag)` (**måned er 0-indeksert**); `getFullYear()`, `getMonth()` (0–11), `getDate()` (1–31), `getDay()` (0=søndag), `getHours()`, `getMinutes()`; **datodifferanse** — trekk to `Date` fra hverandre → millisekunder, del på `1000*60*60*24` for dager; sammenligne klokkeslett (`h > 12 || (h === 12 && m > 20)`). Til bruk (skriving). `warning`: `getMonth()` er 0-indeksert (januar = 0).
- **Oppgavesjangre:** H (Date-basert). Mønstereksempel: «Skriv en funksjon som returnerer `true` hvis klokka akkurat nå er etter 12:20, ellers `false`.»
- **Typiske feil:** Glemme at `getMonth()` er 0-indeksert; glemme at `getDay()` gir ukedag (0=søndag), ikke datoen; feil ved millisekund→dager-konvertering; bare sammenligne timer og glemme minuttene i «over 12:20».
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.7: DRILL — JS-kodesporing (hva skrives ut / hva er verdien)

- **id:** `it2805-5-7` · **number:** 5.7 · **estimatedMinutes:** 80 · **prerequisites:** `it2805-5-2` · **kapitteltype:** drill
- **description:** Full drill på kodesporing (sjanger B, 100 %): kjør små JS-snutter mekanisk i hodet og angi nøyaktig utskrift/verdi — løkker, boolsk logikk, variabelsporing og typetvang.
- **Eksamensbelegg:** Kodesporing er **100 %** frekvens og en av de billigste, hyppigste poengkildene (Section A/B). Faste konstruksjoner: `do-while`/`for`/`continue`-utskrift, boolske uttrykk (`&&`/`||`), variabelsporing gjennom flere tilordninger, typetvang (`==`/`===`), `Math.floor`, streng+tall. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift — kodesporingsmal, jf. in1000):** 1) sett opp en **sporingstabell** med én kolonne per variabel; 2) kjør koden **linje for linje**, oppdater tabellen ved hver tilordning; 3) for løkker: skriv ut hver iterasjon (verdien av løkkevariabelen og hva som skjer), vær nøye med `continue`/`break` og av-med-én; 4) for boolske uttrykk: evaluér innenfra og ut med presedens (`!` > `&&` > `||`); 5) for typetvang: husk `+` konkatenerer ved streng, `==` gir verditvang, `===` er streng; 6) angi utskrift **nøyaktig** (mellomrom, rekkefølge). Ett gjennomgått eksempel med full sporingstabell. 16–20 sporingsoppgaver, stigende, alle konstruksjonene.
- **Oppgavesjangre:** B. Mønstereksempler: «Hva skriver `var s=''; for (var i=1; i<=3; i++) { s = s + i; } document.write(s);` ut?» — `123`; «Hva returnerer `test(x)` for `test(4)` når `return x > 0 && x % 2 === 0`?» — `true`.
- **Typiske feil:** Av-med-én i løkker; glemme at `do-while` kjører først, sjekker etter; feil `continue`-effekt; bruke feil indeks (`arr[i]` vs. `arr[today]`); typetvang-glipp (`==` vs `===`, streng+tall); ikke angi utskrift nøyaktig (mellomrom/rekkefølge).
- **Quiz: 28 · Flashcards: 8** (quiz er ren kodesporing — direkte eksamenstrening; lav flashcard fordi konstruksjonene er dekket i 5.1–5.6)

#### Kapittel 5.8: DRILL — Finn og rett feil i JS-kode

- **id:** `it2805-5-8` · **number:** 5.8 · **estimatedMinutes:** 50 · **prerequisites:** `it2805-5-7` · **kapitteltype:** drill
- **description:** Den distinktive «finn feilene»-sjangeren (sjanger J): identifisér N *typer* feil i en snutt, skriv rettet kode, og vis hva den rettede koden skriver ut.
- **Eksamensbelegg:** Finn-og-rett-feil i 25 % (fem feiltyper i en dagsløkke, 2015), men **høy uttelling når den kommer** (5 %+5 %+2 %). Krever både feilsøking og kodesporing. Prioritet: **kjenne** (høy uttelling — verdt å drille).
- **Kodekontrakt (løsningsoppskrift):** Strategi: 1) les koden linje for linje og let etter de klassiske feiltypene — `=` i stedet for `==`/`===` i betingelse, manglende `+` ved strengkonkatenering (`"Dag " days[i]`), feil løkkestart (`i=1` hopper over første), feil indeks i utskrift (`days[today]` i stedet for `days[i]`), uquotede strenger i array; 2) identifisér **feiltypen** (samme type flere steder teller som én); 3) skriv rettet kode; 4) spor den rettede koden og vis utskriften. Ett gjennomgått «fem feiltyper»-eksempel med margnotater. 8–12 oppgaver: finn N feiltyper + rett + vis utskrift.
- **Oppgavesjangre:** J. Mønstereksempel: «Koden under skal skrive ut ukedagene, men har flere feiltyper. Identifisér hver *type* feil, skriv rettet kode, og vis hva den rettede koden skriver ut.»
- **Typiske feil:** Overse `=` vs `==` i `if`; glemme `+` i strengkonkatenering; ikke se av-med-én i løkkestart; bruke feil indeks; liste hvert forekomststed som separat feil i stedet for én feiltype.
- **Quiz: 14 · Flashcards: 8**

---

### Del 6 — Canvas 2D-verksted *(prioritet: PERFEKT — 100 %, 6–10 % alene, største enkeltoppgave)*

> **Canvas-2D-tegning er alltid siste C-oppgave og den enkeltstående største
> oppgaven (6–10 % i hvert sett).** Egen del med et gjennomgående verksted: bygg
> skjelettet (6.1), lær sti-API-et (6.2), drill tegning av ansikt/båt/figurer (6.3),
> og lær konseptet Canvas vs SVG (6.4). Fasit sier eksplisitt at figuren bare trenger
> å være *tilnærmet* riktig — `tip` **«Idéene teller»** gjelder sterkt her.

#### Kapittel 6.1: Canvas-grunnlaget: skjelettet

- **id:** `it2805-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-5-3` · **kapitteltype:** teori
- **description:** Det faste canvas-skjelettet — `window.onload`, hent canvas med `getElementById`, sjekk `getContext`, hent 2D-konteksten — som all canvas-kode starter med og som studenten bør automatisere.
- **Eksamensbelegg:** **100 %** frekvens (grunnlag for hver canvas-oppgave). Fasit understreker: «ikke glem å aksessere canvas-elementet og bruke 2D-API-et». Skjelettet er identisk i alle sett. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom for canvas-skjelettet):** `<canvas id="lerret" width="300" height="200">`; **skjelettet**: `window.onload = function() { var canvas = document.getElementById("lerret"); if (canvas && canvas.getContext) { var ctx = canvas.getContext("2d"); /* tegn her */ } };`; hvorfor `window.onload` (canvas må finnes før man tegner); hvorfor `getContext`-sjekken (nettleserstøtte); koordinatsystemet (origo øverst til venstre, x mot høyre, y **nedover**). Til bruk (skriving).
- **Oppgavesjangre:** I (start-skjelett). Mønstereksempel: «Skriv canvas-skjelettet som henter et canvas med id `lerret`, sjekker at 2D-konteksten finnes, og henter den — klar til å tegne.»
- **Typiske feil:** Glemme `window.onload` (tegner før canvas finnes); glemme `getContext("2d")`-hentingen; glemme å hente canvas-elementet først; tro at y-aksen peker oppover (den peker nedover).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.2: Sti-API-et: linjer, rektangler og buer

- **id:** `it2805-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `it2805-6-1` · **kapitteltype:** teori
- **description:** Tegneprimitivene i 2D-API-et — `beginPath`, `moveTo`/`lineTo`, `rect`/`strokeRect`/`fillRect`, `arc` for sirkler, og `fill`/`stroke` med farge og strektykkelse.
- **Eksamensbelegg:** **100 %** frekvens (byggeklossene i hver canvas-figur). `arc` (sirkler/øyne/munn), `moveTo`/`lineTo` (linjer), `strokeRect`/`fillRect` (rektangler) går igjen. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`beginPath()`** (start ny sti), **`moveTo(x,y)`** (flytt penn uten å tegne), **`lineTo(x,y)`** (tegn linje til punkt), **`closePath()`**; **`arc(x, y, r, startVinkel, sluttVinkel, motUrviser)`** (bue/sirkel — full sirkel: `0` til `2*Math.PI`, vinkler i **radianer**); **`rect(x,y,b,h)`**, **`strokeRect(...)`**, **`fillRect(...)`**, `clearRect(...)`; **`fillStyle`**/`strokeStyle` (farge), **`lineWidth`** (strektykkelse); **`fill()`** (fyll sti), **`stroke()`** (tegn omriss); tekst (`fillText` — nevnes kort). Til bruk (skriving).
- **Oppgavesjangre:** I (tegn primitiver). Mønstereksempel: «Skriv koden som tegner en rød, fylt sirkel med radius 40 i punktet (100, 100), og en svart linje fra (0,0) til (200,200) med strektykkelse 3.»
- **Typiske feil:** Glemme `beginPath()` før en ny figur (stier smelter sammen); vinkler i grader i stedet for radianer i `arc`; glemme `fill()`/`stroke()` etter å ha bygget stien (ingenting vises); forveksle `strokeRect` (omriss) og `fillRect` (fylt); sette `fillStyle` etter `fill()` (for sent).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.3: DRILL — Canvas-tegneverksted

- **id:** `it2805-6-3` · **number:** 6.3 · **estimatedMinutes:** 80 · **prerequisites:** `it2805-6-2` · **kapitteltype:** drill
- **description:** Full drill på den faste siste C-oppgaven: tegn en komplett figur (ansikt, seilbåt, geometriske figurer i en ramme) fra bunnen med skjelett + sti-API — den enkeltstående største oppgaven i settet.
- **Eksamensbelegg:** Canvas-tegning er **100 %, 6–10 % alene** — alltid siste C-oppgave. Arkivfigurer: ansikt (ytre sirkel + munn-bue + to øyne), seilbåt (trekant-seil + skrog), sirkel+kryss i ramme. Fasit: **omtrentlig figur godtas** (størrelse/sentrering/farge ikke poenggivende). Prioritet: **perfekt**.
- **Kodekontrakt (canvas-tegneprosedyre — løsningsoppskrift):** 1) **skjelett** (`window.onload` → hent canvas → sjekk `getContext` → `getContext("2d")`, fra 6.1); 2) **planlegg figuren** som primitiver (hvilke sirkler/linjer/rektangler, med omtrentlige koordinater); 3) tegn **hver primitiv**: `beginPath()` → `arc`/`moveTo`+`lineTo`/`rect` → sett `fillStyle`/`strokeStyle`/`lineWidth` → `fill()`/`stroke()`; 4) gjenta per figurdel (én `beginPath` per sammenhengende del). Ett fullt gjennomarbeidet eksempel (nyskrevet figur, f.eks. et hus eller en snømann) med margnotater: `tip` **«Idéene teller»** (rett tilnærming og bruk av 2D-API-et gir full pott, eksakte koordinater kreves ikke). 8–12 tegneoppgaver: ansikt, båt, geometriske figurer i ramme, hus, flagg — alle på eksamensnivå.
- **Oppgavesjangre:** I. Mønstereksempel: «Skriv fullstendig JavaScript som tegner et enkelt ansikt i et canvas: en stor sirkel som hode, to små fylte sirkler som øyne, og en bue som munn. Figuren trenger bare være tilnærmet riktig.»
- **Typiske feil:** Glemme skjelettet (`window.onload`/hente canvas/`getContext("2d")`); glemme `beginPath()` mellom figurdeler (alt fylles med samme farge/smelter sammen); vinkler i grader i `arc`; glemme `fill()`/`stroke()`; overtenke eksakt plassering (fasit godtar omtrentlig).
- **Quiz: 18 · Flashcards: 12** (quiz vekter mot 2D-API-gjenkjenning og skjelett-rekkefølge; flashcards er API-kall)

#### Kapittel 6.4: Canvas vs SVG (konsept)

- **id:** `it2805-6-4` · **number:** 6.4 · **estimatedMinutes:** 35 · **prerequisites:** `it2805-6-1` · **kapitteltype:** teori
- **description:** Den faste forklaringsoppgaven Canvas vs SVG — piksel vs. vektor, DOM-tilgjengelighet, animasjon og skalering — med 4–5 forskjeller sensor ser etter.
- **Eksamensbelegg:** Canvas vs SVG i ~75 %: både flervalg (A) og «forklar 4–5 forskjeller» (C). SVG er XML-basert (kobling til Del 2.4). Prioritet: **kunne**.
- **Begrepskontrakt (Begreps- og referanseliste):** **Canvas** (rasterbasert/piksel, tegnes med JavaScript, ingen DOM for enkeltfigurer, må tegnes på nytt ved endring, god for mange objekter/spill/foto-manipulering); **SVG** (vektorbasert, XML-elementer i DOM, skalerer uten kvalitetstap, hvert element er tilgjengelig/klikkbart, innebygd animasjon, god for ikoner/diagrammer); 4–5 forskjeller: piksel vs. vektor, DOM-tilgang, skalerbarhet, animasjon, ytelse ved mange objekter. Presenter som en `theorem`-lignende sammenligningstabell.
- **Oppgavesjangre:** C (forklar forskjeller) + A (flervalg). Mønstereksempel (C): «List fire forskjeller mellom Canvas og SVG med korte kulepunkter (piksel/vektor, DOM, skalering, animasjon).»
- **Typiske feil:** Tro at Canvas er vektorbasert (det er piksel); tro at canvas-figurer er i DOM-en (de er ikke — kun `<canvas>`-elementet); blande hvilken som skalerer uten tap (SVG); skrive langt essay der 4–5 kulepunkter kreves.
- **Quiz: 14 · Flashcards: 12**

---

### Del 7 — Moderne datautveksling: Ajax, fetch og JSON *(NY — merket moderne; prioritet: KJENNE / verifiser)*

> `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Arkivet nevner
> JSON kun som syntaks-sant/usant (Del 2.4), men NTNUs gjeldende emnebeskrivelse
> framhever asynkron datautveksling. Ett kompakt kapittel, merket. Ikke tung drill —
> differensierende stoff; ett innslag i øvingseksamen 9.3.

#### Kapittel 7.1: Ajax, fetch og JSON *(NY — merket moderne)*

- **id:** `it2805-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `it2805-5-4`, `it2805-2-4` · **kapitteltype:** teori
- **description:** Å hente data fra en tjener uten å laste siden på nytt — Ajax-ideen, `fetch` med løfter (promises), og å tolke et JSON-svar og oppdatere DOM-en — moderne pensum, ikke i arkivet.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Asynkron datautveksling er framhevet i gjeldende emnebeskrivelse; bygger på DOM (5.4) og JSON (2.4). Prioritet: **kjenne** (verifiser).
- **Kodekontrakt (API- og konstruksjonsliste):** **Ajax-ideen** (hent data i bakgrunnen, oppdater deler av siden uten full reload); **`fetch(url)`** returnerer et **løfte (promise)**; `.then(response => response.json())` (tolk JSON), `.then(data => …)` (bruk dataen); `JSON.parse`/`JSON.stringify`; `async`/`await` (moderne alternativ — nevnes kort); synkron vs. asynkron; oppdatere DOM med hentet data (`innerHTML`). Til bruk. `warning`: moderne pensum, verifiser.
- **Oppgavesjangre:** H (hent og vis data). Mønstereksempel: «Skriv kode som henter JSON fra en URL med `fetch`, tolker svaret, og viser feltet `navn` i elementet med id `resultat`.»
- **Typiske feil:** Glemme at `fetch` er asynkron (bruke svaret før det finnes); glemme `.json()`-steget (får `Response`, ikke data); blande `JSON.parse` (streng→objekt) og `JSON.stringify` (objekt→streng); tro at Ajax laster hele siden på nytt.
- **Quiz: 16 · Flashcards: 16**

---

### Del 8 — Universell utforming: WCAG og ARIA *(NY — merket moderne; prioritet: KJENNE / verifiser)*

> `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Helt fraværende
> i arkivet, men **framhevet i NTNUs gjeldende emnebeskrivelse** (og lovpålagt i norsk
> offentlig sektor). Ett kompakt kapittel, merket. Kobles til semantisk HTML5 (1.5).

#### Kapittel 8.1: Universell utforming, WCAG og ARIA *(NY — merket moderne)*

- **id:** `it2805-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `it2805-1-5` · **kapitteltype:** teori
- **description:** Å lage nettsider tilgjengelige for alle — WCAG-prinsippene, `alt`-tekst, ledetekster, kontrast, tastaturnavigasjon og ARIA-attributter — moderne, lovpålagt pensum, ikke i arkivet.
- **Eksamensbelegg:** `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Universell utforming/WCAG/ARIA er framhevet i gjeldende emnebeskrivelse. Bygger på semantisk HTML5 (1.5). Prioritet: **kjenne** (verifiser).
- **Begrepskontrakt (Begreps- og referanseliste):** **Universell utforming** (design brukbart for flest mulig uten tilpasning); **WCAG** og de fire prinsippene **POUR** (Perceivable/Operable/Understandable/Robust — mulig å oppfatte/betjene/forstå/robust); nivå A/AA/AAA; konkrete tiltak: `alt`-tekst på bilder, `<label>` på skjemafelt (kobling 1.2), tilstrekkelig **fargekontrast**, **tastaturnavigasjon**, semantisk HTML (kobling 1.5), overskriftshierarki; **ARIA** (`role`, `aria-label`, `aria-hidden` — for dynamisk innhold der HTML ikke rekker til); skjermlesere. Rent konsept. `warning`: moderne pensum, verifiser.
- **Oppgavesjangre:** C (forklar) + A (flervalg) + F (legg til `alt`/`label`). Mønstereksempel (C): «Nevn fire konkrete tiltak som gjør et skjema mer tilgjengelig (universell utforming).»
- **Typiske feil:** Tro at UU bare handler om syn (også motorikk/hørsel/kognisjon); glemme `alt` på informative bilder (men tom `alt=""` på dekorative er riktig); bruke ARIA der semantisk HTML holder; blande WCAG-nivåene A/AA/AAA.
- **Quiz: 18 · Flashcards: 18**

---

### Del 9 — Eksamenstrening

> Tre komplette **tredelte** øvingseksamener på **engelsk** etter den faste malen
> (Section A flervalg/sant-usant 30 % + Section B lengre kortsvar 30 % + Section C
> koding 40 %, 4 t). Til sammen dekker de samtlige sjangre A–J. Løsningsforslag skrevet
> slik sensor vil se dem: idiomatisk vanilla HTML/CSS/JS, korte forklaringer, med
> margnotater om prosentvekting/delpoeng og hva som gir uttelling (`tip` **«Idéene
> teller»** i Section C; **«Syntakspresisjon»** i Section A). Ett sett (9.3) legger inn
> merkede moderne innslag.

#### Kapittel 9.1: Øvingseksamen 1 — full tredelt, moderat (arkiv-profil)

- **id:** `it2805-9-1` · **number:** 9.1 · **estimatedMinutes:** 240 · **prerequisites:** Del 1–6 · **kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett etter den klassiske arkiv-malen: Section A flervalg, Section B kortsvar, Section C koding med canvas — alt nyskrevet, på engelsk.
- **Eksamensbelegg/miks:** Speiler et typisk sett (prosentvekting oppgitt): **Section A (~30 %)**: ~12 flervalg/sant-usant (box-model-rekkefølge, selektorer `h2+p`/`h2~p`, `position`-standard, HTML-attributter, canvas-primitiver, `==`/`===`, FTP/protokoller, XML-validitet — sjanger A) + 1 boolsk/utskrifts-sporing (B); **Section B (~30 %)**: relative URL-er (D), TCP/IP-lagene (C), bildeformat-fyll-inn (E), JS-kodesporing (B), én forklaringsoppgave POST vs GET (C); **Section C (~40 %)**: skriv et HTML-skjema (F), skriv en HTML-tabell med bilde (F), skriv 4–5 CSS-regler (selektor + pseudo-klasse + pseudo-element + box-model + posisjon — G), skriv en JS-DOM-funksjon som leser et felt og oppdaterer siden (H), og **en canvas-tegneoppgave** (ansikt/figur — I). Alle nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave, med `tip` om prosentvekting/delpoeng. `tip` om tidsbudsjett (Section A ~50 min, B ~70 min, C ~120 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, F, G, H, I. Section A- og sporingsspørsmålene registreres OGSÅ som quiz (kapitlets quizkvote), slik at Section A kan tas som en tidsstyrt MC-økt.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Typiske feil:** (samlet, med henvisning til kapitlene) — box-model-rekkefølge, selektor-symbol, LVHA, `==`/`===`, glemt canvas-skjelett, relativ-URL-nivåtelling, ordrik forklaring; ikke disponere tiden etter prosentvekting.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 9.2: Øvingseksamen 2 — full tredelt, CSS- og canvas-tungt

- **id:** `it2805-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `it2805-9-1` · **kapitteltype:** øvingseksamen
- **description:** Et tyngre sett som topper ut CSS-mestringen og canvas — flere selektor-/posisjon-flervalg, en større CSS-blokk, en mer sammensatt canvas-figur, og «finn feilene».
- **Eksamensbelegg/miks:** Speiler et CSS-/canvas-tungt sett: **Section A (~30 %)**: ~12 flervalg med tette syntaksdistraktorer (`border-width` TRBL, `h2~p` vs `h2+p`, `::first-letter` vs `:first-letter`, `<link>` vs `<script src>`, `position:absolute` vs `fixed`, canvas `beginPath`) + variabelsporing (B); **Section B (~30 %)**: relative URL-er (D), TCP/IP lag↔protokoll-matching (E), Canvas vs SVG-forklaring (C), JS-kodesporing med typetvang (B), stilark-typene-forklaring (C); **Section C (~40 %)**: skriv en stor CSS-blokk (selektorer + pseudo-elementer + posisjonering + box-model — G, tyngdepunkt), skriv en JS-funksjon med `prompt`/`Date` (H), **finn og rett feil** i en JS-snutt (J), og **en sammensatt canvas-figur** (seilbåt/hus med flere primitiver — I). Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip`; margnotat om at presis selektor/box-model i Section A gir de sikre poengene mens canvas godtar omtrentlig.
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, G, H, I, J — supplerer 9.1 og 9.3.
- **Oppgavesjangre:** A, B, C, D, E, G, H, I, J.
- **Typiske feil:** (samlet) — `border-width`-rekkefølge, pseudo-element dobbelt kolon, `content:`-glemsel, `position`-forveksling, `beginPath`-glemsel, `=` vs `==` i «finn feilene», typetvang i sporing.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 3 — full tredelt, med merkede moderne innslag

- **id:** `it2805-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `it2805-9-2` · **kapitteltype:** øvingseksamen
- **description:** Et sett som kombinerer den klassiske kjernen med de moderne temaene fra gjeldende emnebeskrivelse — semantisk HTML5, Flexbox/responsivt, Ajax/JSON og universell utforming — tydelig merket «verifiser».
- **Eksamensbelegg/miks:** Speiler et mulig moderne sett (arkiv-kjerne + merkede temaer): **Section A (~30 %)**: ~10 klassiske flervalg (selektorer, box-model, JS-syntaks, protokoller) + 2 merkede moderne (Flexbox-akse, WCAG-prinsipp) — sjanger A; **Section B (~30 %)**: relative URL-er (D), TCP/IP (C), JS-kodesporing (B), én forklaringsoppgave om universell utforming (C, merket) + XML/JSON-validitet (E); **Section C (~40 %)**: skriv semantisk HTML5-struktur (F, merket), skriv CSS med både klassiske selektorer/box-model (G) og en Flexbox-/media-query-regel (G, merket), skriv en JS-funksjon som henter JSON med `fetch` og oppdaterer DOM (H, merket), og **en canvas-tegning** (klassisk kjerne — I). Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip`; **de merkede oppgavene har egen note** `(moderne pensum — verifiser mot gjeldende emne)`. Til sammen med 9.1–9.2 dekkes sjangrene A–J minst én gang.
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, F, G, H, I (+ merkede moderne: semantisk HTML5, Flexbox/responsivt, Ajax/JSON, WCAG) — sammen med 9.1/9.2 dekkes A–J. Merk: de moderne innslagene testes her bevisst under prøvebetingelser, men er merket usikre mot gjeldende pensum.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Typiske feil:** (samlet) — klassiske kjernefeil + moderne: sette Flexbox-egenskaper på barna, glemme viewport-metatag, glemme `.json()`-steget i `fetch`, glemme `alt`/`label` for UU; ikke merke seg at moderne temaer er usikre.
- **Quiz: 12 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

Denne tabellen er **fasit for alle senere faser** (byggekontrakt, byggebølge,
verifisering). Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri
underskride.

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 14+24+14 = **52** | 14+12+12 = **38** |
| 1 | 1.1–1.5 | 20+18+16+16+14 = **84** | 20+18+16+18+14 = **86** |
| 2 | 2.1–2.5 | 18+22+16+18+16 = **90** | 12+22+14+16+16 = **80** |
| 3 | 3.1–3.7 | 16+24+22+24+22+16+26 = **150** | 16+22+22+20+20+18+10 = **128** |
| 4 | 4.1–4.3 | 14+14+14 = **42** | 14+14+12 = **40** |
| 5 | 5.1–5.8 | 22+22+16+20+12+14+28+14 = **148** | 20+18+16+20+10+14+8+8 = **114** |
| 6 | 6.1–6.4 | 14+16+18+14 = **62** | 16+18+12+12 = **58** |
| 7 | 7.1 | **16** | **16** |
| 8 | 8.1 | **18** | **18** |
| 9 | 9.1–9.3 | 12+12+12 = **36** | 0+0+0 = **0** |
| **Sum** | **40 kap.** | **698 ≥ 500 ✓** | **578 ≥ 500 ✓** |

Fordelingen er skalert til fagets natur (jf. lærdommen «≥500 er et GULV»): IT2805 har
**to eksamensdirekte flervalgs-/sporingssjangre** (Section A-flervalg + JS-kodesporing),
begge billige/hyppige poeng, så quiz siktes **høyt (698)**. Vektingen speiler frekvens
og eksamensform:

- **Del 3 (CSS) bærer mest (150 quiz / 128 flashcards)** fordi den er bokas tyngdepunkt:
  alle temaene 100 %, størst samlet poengvekt, og både flervalg (Section A) og
  skriving (Section C). Kap. 3.7-drillen er ren Section A-/G-trening.
- **Del 5 (JavaScript, 148)** er nest tyngst: kodesporing (5.7, 28 quiz) er direkte
  eksamenstrening (100 %-sjanger), og syntaks-/typetvang-flervalg mates av 5.1–5.2.
- **Del 6 (canvas, 62)** vekter mot API-gjenkjenning og skjelett-rekkefølge; flashcards
  er canvas-2D-API-kall.
- **Del 2 (web-arkitektur, 90/80)** er stor fordi det er fem faktatunge temaer med
  faste sant/usant-/fyll-inn-poeng (TCP/IP, protokoller, XML/JSON, bildeformater).
- **Flashcards** vektes mot **referansedefinisjoner** (HTML-tagger, CSS-selektorer/
  -egenskaper, JS-/DOM-metoder, canvas-API — Del 1, 3, 5, 6) og **fagbegreps-
  definisjoner** (Del 2, 6.4, 8) — studentens syntaks-pugg for flervalget.
- De merkede moderne delene (4/7/8) bidrar moderat (42+16+18 quiz) — dekket, men ikke
  overdrillet, fordi de er usikre mot gjeldende pensum.
- Øvingseksamenene (Del 9) bidrar quiz (Section A / kodesporing registreres som MC-økt)
  men ingen flashcards.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (idiomatisk
vanilla HTML/CSS/JS, korte forklaringer) og prosentvekting. Prøvekapitler bygges som
`it2805-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne
exercise-seksjoner i delens siste kapittel. De merkede moderne delene (4/7/8) får også
4 prøver hver (dekker minimumskravet ≥4 per tema), men markert `(moderne pensum —
verifiser)`.

**Prøve-kvote Del 1:** 4 prøver (HTML)
1. Prøve 1.A (25 min): HTML-struktur og attributter — 10 flervalg (blokk/inline, `id`/`class`, kobling) (A).
2. Prøve 1.B (30 min): Skjema — skriv 3 skjemaer fra spesifikasjon (`<label>`/`<input>`/`<button>`) (F).
3. Prøve 1.C (30 min): Tabell — skriv 3 tabeller med `colspan`/`rowspan` og bilde (F).
4. Prøve 1.D (25 min): Lenker/DOM-tre + semantisk HTML5 (merket) — tegn DOM-tre + skriv om `<div>` til semantisk (A + F).

**Prøve-kvote Del 2:** 4 prøver (web-arkitektur)
1. Prøve 2.A (30 min): Relative URL-er — 8 stier i et mappetre (D).
2. Prøve 2.B (25 min): TCP/IP-lagene — navngi og forklar de 4 lagene + lag↔protokoll-matching (C + E).
3. Prøve 2.C (25 min): HTTP + protokoller — POST vs GET-forklaring + FTP/DNS-flervalg (C + A).
4. Prøve 2.D (25 min): XML/JSON + bildeformater — gyldighet + fyll-inn-tabell GIF/JPEG/PNG (A + E).

**Prøve-kvote Del 3:** 4 prøver (CSS — bokas tyngdepunkt)
1. Prøve 3.A (30 min): Selektorer — 12 flervalg (`h2+p`/`h2~p`/`div p`/`p>b`) + skriv 5 selektorer (A + G).
2. Prøve 3.B (30 min): Pseudo-klasser/-elementer — skriv LVHA-lenkeregler + `::before`/`::first-letter` (G).
3. Prøve 3.C (30 min): Box-model + posisjonering — rekkefølge-flervalg + skriv box-/posisjonsregler (A + G).
4. Prøve 3.D (30 min): Full CSS-blokk — skriv en komplett stilfil for en gitt HTML-side (G).

**Prøve-kvote Del 4:** 4 prøver (moderne CSS — merket, verifiser)
1. Prøve 4.A (25 min): Flexbox — skriv 4 flex-layouter (rad/kolonne, justering) (G, merket).
2. Prøve 4.B (25 min): CSS Grid — skriv 3 rutenett med `fr`/`repeat` (G, merket).
3. Prøve 4.C (25 min): Responsivt — media queries + viewport (G, merket).
4. Prøve 4.D (25 min): Flexbox vs Grid — 10 flervalg + velg riktig verktøy (A, merket).

**Prøve-kvote Del 5:** 4 prøver (JavaScript)
1. Prøve 5.A (30 min): Syntaks/typetvang — 12 kodesporing (`==`/`===`, streng+tall, `Math.floor`) (B).
2. Prøve 5.B (30 min): Løkker og betingelser — 10 «hva skrives ut» (for/while/do-while/continue) (B).
3. Prøve 5.C (30 min): DOM + `prompt`/`Date` — skriv 4 funksjoner (les felt → regn → oppdater) (H).
4. Prøve 5.D (30 min): Finn og rett feil — 3 «finn N feiltyper + rett + utskrift» (J).

**Prøve-kvote Del 6:** 4 prøver (canvas)
1. Prøve 6.A (25 min): Canvas-skjelett + sti-API — 10 flervalg (rekkefølge, `arc`/`beginPath`/`fill`) (A).
2. Prøve 6.B (35 min): Tegn figurer — ansikt + geometriske figurer fra bunnen (I).
3. Prøve 6.C (35 min): Sammensatt figur — seilbåt/hus med flere primitiver (I).
4. Prøve 6.D (20 min): Canvas vs SVG — forklar 4–5 forskjeller + flervalg (C + A).

**Prøve-kvote Del 7:** 4 prøver (Ajax/fetch/JSON — merket, verifiser)
1. Prøve 7.A (25 min): Ajax-konsept + `fetch`-flyt — 10 flervalg (synkron/asynkron, `.json()`) (A, merket).
2. Prøve 7.B (30 min): Hent og vis — skriv `fetch`-kode som oppdaterer DOM med JSON-data (H, merket).
3. Prøve 7.C (25 min): JSON-håndtering — `JSON.parse`/`stringify` + tolke svar (H + B, merket).
4. Prøve 7.D (25 min): Blandet — Ajax + JSON-validitet + DOM-oppdatering (A + H, merket).

**Prøve-kvote Del 8:** 4 prøver (universell utforming — merket, verifiser)
1. Prøve 8.A (25 min): WCAG-prinsippene (POUR) — 10 flervalg + forklar (A + C, merket).
2. Prøve 8.B (25 min): Tilgjengelig skjema/bilde — legg til `alt`/`label`/kontrast (F, merket).
3. Prøve 8.C (25 min): ARIA + semantikk — når brukes hva; forklaringsoppgave (C, merket).
4. Prøve 8.D (25 min): Blandet UU — 12 flervalg på tvers (A, merket).

### Øvingseksamener (3 komplette sett — se kap. 9.1–9.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.1) | Typisk arkiv-sett, moderat | Section A (A/B) + Section B (C/D/E/B) + Section C med canvas (F/G/H/I) |
| Øvingseksamen 2 (kap. 9.2) | CSS-/canvas-tungt | Section A tette syntaksdistraktorer (A/B) + Section B (C/D/E/B) + Section C stor CSS-blokk + finn-feil + sammensatt canvas (G/H/I/J) |
| Øvingseksamen 3 (kap. 9.3) | Moderne innslag (merket) | Klassisk kjerne + semantisk HTML5 + Flexbox/responsivt + Ajax/JSON + UU, alt merket (A/B/C/D/E/F/G/H/I) |

Til sammen dekker de tre settene samtlige sjangre A–J minst én gang, alle tre
seksjonene (A/B/C) i full tredelt form, og både arkiv-kjernen og de merkede moderne
temaene.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én 4-timers skoleeksamen (100 %, A–F, engelsk), den faste
   tredelte strukturen (Section A flervalg 30 % / Section B kortsvar 30 % / Section C
   koding 40 %), canvas hver gang, og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (CSS box-model/selektorer/pseudo/posisjonering Del 3, canvas Del 6,
   JS/DOM + kodesporing Del 5, HTML skjema/tabell Del 1), **kunne** (relative URL-er,
   TCP/IP-lagene, protokoller, XML/JSON, bildeformater, POST/GET, Canvas vs SVG —
   Del 2 + 6.4), **kjenne/verifiser** (semantisk HTML5, Flexbox/Grid/responsivt,
   Ajax/fetch, WCAG/ARIA — Del 4/7/8, merket usikre mot gjeldende pensum).
3. **De tre håndverkene** — (A) **flervalgspresisjon** (Section A: ett tegn avgjør,
   ingen delpott, sjekk syntaksen — fra kap. 0.2); (B) **kortsvar** (Section B: korte,
   presise forklaringer + kodesporingsmal + relativ-URL-/fyll-inn-oppskrifter — fra
   0.3 + Del 2 + 5.7); (C) **koding** (Section C: idéene teller, idiomatisk vanilla,
   canvas-skjelettet — fra 0.3 + drillkapitlene).
4. **Sjangerguiden** — de 10 oppgavetypene A–J med løsningsoppskriftene fra
   drillkapitlene (0.2, 0.3, 3.7, 5.7, 5.8, 6.3) i kortform, inkludert
   canvas-tegneprosedyren og kodesporingsmalen.
5. **Sensorreglene** — metareglene: **idéene teller** i Section C (flere løsninger
   sidestilles, omtrentlig canvas godtas); **ingen delpott** i Section A (presisjon
   premieres); **korte forklaringer** i Section B; flere svar godtas i fyll-inn;
   disponér tiden etter prosentvekting.
6. **Feilkatalogen** — de 14 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: box-model-rekkefølge, selektor-symbol,
   LVHA-navn, `border-width` TRBL, `=` vs `==`, manglende `+` ved konkatenering,
   av-med-én i løkker, feil indeks i utskrift, typetvang, `<link>` vs `<script src>`,
   bildeformat-forvekslinger, canvas-`beginPath`/`getContext`, XML/JSON-validitet,
   relativ-URL-nivåtelling.
7. **Referanse-/API-ark** — alle byggeklossene fra kodekontraktene på ett oppslag:
   HTML-skjema-/tabellmalen, CSS-selektor-familiene + box-model-/posisjonerings-
   oppskriften + pseudo-listen, JS/DOM-idiomene (`getElementById`/`innerHTML`/`value`,
   `prompt`/`alert`, `Date`), og **canvas-skjelettet + 2D-API-et** — med markering
   «skriv fra bunnen» (Section C) vs. «kjenn igjen syntaksen» (Section A).
8. **Konsept-/nettverksark** — Begreps- og referanselistene fra Del 2 + 6.4 + 8 samlet:
   TCP/IP-lagene, POST vs GET, protokoller, XML/JSON-regler, bildeformat-tabellen,
   Canvas vs SVG, WCAG/POUR — med de faste nær-distraktor-fellene uthevet.
9. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (HTML) → Del 3 (CSS — bokas tyngdepunkt) → Del 5 (JavaScript) → Del 6 (canvas —
   verkstedet) → Del 2 (web-arkitektur — les parallelt, avhengighetsfri) → de merkede
   moderne delene 4/7/8 (til toppkarakter, verifiser) → prøvene underveis → de tre
   tredelte øvingssettene de siste ukene under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `it2805` med alle 40 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert («3.4»), aldri lineær** (bokforsiden
   grupperer på `number.split('.')[0]`).
2. **Del 0** (kap. 0.1–0.3) — etablerer eksamensformen, sjangernavnene A–J,
   frekvenstallene og de tre håndverkene (flervalgspresisjon / kortsvar / koding) som
   resten refererer til.
3. **HTML og web-arkitektur**: Del 1 (HTML — grunnlaget alt annet henger på) → Del 2
   (web-arkitektur — avhengighetsfritt fakta-stoff, kobler til lenker/URL-er).
4. **CSS — bokas tyngdepunkt**: Del 3 (box-model/selektorer/pseudo/posisjonering +
   drill 3.7). Krever Del 1. Bygg av **én agent for hele delen** (7 kapitler — jf.
   batching-regelen; hele delens kontrakter til agenten).
5. **Moderne CSS** (Del 4) rett etter Del 3 (bygger på 3.5).
6. **JavaScript**: Del 5 (syntaks/DOM/hendelser/Date + drill 5.7/5.8). Krever Del 1
   (DOM leser HTML). Bygg av **én agent for hele delen** (8 kapitler).
7. **Canvas** (Del 6) etter Del 5 (canvas er JS + tegning; krever 5.3 funksjoner).
8. **Moderne datautveksling** (Del 7) etter Del 5 + Del 2.4 (fetch bruker DOM + JSON).
9. **Universell utforming** (Del 8) etter Del 1.5 (semantikk) — kan bygges parallelt.
10. **Del 9** (øvingseksamenene) til slutt — de gjenbruker alle sjangrene.
11. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
    kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
    exercise-seksjoner.
12. **Navigasjon**: legg emnet inn i `src/app/bok/trinn/hoyere/institusjoner.ts` under
    **NTNU**, navn = «IT2805 Webteknologi».

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn OG i HTML-attributter — `<input type=\"text\">`);
      `npm run build` grønn.
- [ ] **Tre språk, ren vanilla**: all kode er ren HTML5 / ren CSS / vanilla JavaScript —
      ingen jQuery, ingen preprosessorer, ingen build-verktøy i noen fasit.
- [ ] **Idéene teller (Section C)**: alle F/G/H/I-løsningsforslag har `tip` **«Idéene
      teller»** — alternative korrekte løsninger gir full pott, omtrentlig canvas godtas;
      margnotater om hva som gir uttelling.
- [ ] **Syntakspresisjon (Section A)**: hvert kapittel med flervalgstrening har
      `warning` **«Syntakspresisjon»** som viser de nære distraktorene side om side
      (`h2+p`/`h2~p`; `==`/`===`; box-model-rekkefølge; `border-width` TRBL;
      `<link>`/`<script src>`) og understreker at det ikke finnes delpott.
- [ ] **Canvas-skjelettet automatisert**: 6.1/6.3 etablerer det faste skjelettet
      (`window.onload` → hent canvas → sjekk `getContext` → `getContext("2d")` → tegn),
      og canvas-tegneprosedyren (planlegg primitiver → `beginPath`/`arc`/`lineTo` →
      `fill`/`stroke` per del).
- [ ] **Kodesporingsmal**: 5.7 har den eksplisitte sporingstabell-metoden (én kolonne
      per variabel, linje for linje), og utskrift angis **nøyaktig** (mellomrom/
      rekkefølge) i alle B-oppgaver og -quiz.
- [ ] **Konsishet (Section B)**: alle forklarings-fasiter (TCP/IP, Canvas vs SVG,
      POST/GET, stilark-typer, CSS-regelens 4 deler) er korte kulepunkter; vis kontrast
      god (kort) vs. dårlig (lang).
- [ ] **API-/Begrepsliste per delkapittel**: hvert kode-/CSS-/JS-/canvas-kapittel har
      `collapsible` **«API- og konstruksjonsliste»** (tagger/selektorer/egenskaper/
      API-kall); hvert konsept-/nettverkskapittel (2.2–2.5, 6.4, 8.1) har `collapsible`
      **«Begreps- og referanseliste»** — rett etter Forkunnskaper, per delkapittel
      (ikke arv fra tidligere).
- [ ] **Moderne temaer merket**: Del 1.5, 4.1–4.3, 7.1, 8.1 og de merkede oppgavene i
      9.3 har `warning`/note `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende
      pensum)`; ikke overdrillet (moderat kvote), men dekket for dagens emne.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      (0.2, 0.3, 3.7, 5.7, 5.8, 6.3) har løsningsoppskrift + gjennomgått case + 8–16
      oppgaver.
- [ ] **Engelsk fagterminologi/kode**: norsk bokmål brødtekst, men fagtermer og all kode
      på engelsk (box model, pseudo-class, `getElementById`, `position`) — slik studenten
      møter dem på det engelskspråklige settet.
- [ ] **Quiz-sum ≥ 698 og flashcard-sum ≥ 578** per kvotetabellen (§5); quiz kalibrert
      som eksamensdirekte MC (Section A-flervalg med nære distraktorer + JS-kodesporing),
      `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 tredelte øvingseksamener (kap. 9.1–9.3)
      som sammen dekker sjangrene A–J og alle tre seksjonene (A/B/C).
- [ ] **Opphavsrett**: ALLE oppgaver, kodeeksempler, HTML-strukturer, CSS-regler,
      JS-snutter, canvas-figurer, mappetrær og domener nyskrevne — egne tall, egne
      navn/felt, egne figurer; kodemønstrene er standard HTML/CSS/JS-idiomer, men ingen
      oppgavetekster/fasiter fra reelle sett gjengis (særlig: nytt mappetre for
      relativ-URL, ny canvas-figur, ny boolsk sporing).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innhold), jf. lærdommen om `getChapterMeta`.

# Bokskjelett: LING1100 Innføring i semantikk og pragmatikk (UiO) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (12 oppgavesett H2011–H2024 + den ene sensorveiledningen som
> finnes, H2022) fra Institutt for lingvistiske og nordiske studier (ILN), UiO.
> Alle oppgaver, eksempelsetninger, sannhetstabeller, klassifiseringer,
> predikatlogikk-oversettelser og modellbesvarelser i boka skal være NYSKREVNE
> (se §1 «Opphavsrett»). Dette er fabrikkens **første lingvistikkfag**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ling1100` |
| Tittel | **LING1100 Innføring i semantikk og pragmatikk** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO), Institutt for lingvistiske og nordiske studier (ILN) |
| Arketype | **Formell-hybrid** — semantikk-delen bygges som regnefag (`DNA-regnefag.md`: fasit-oppgaver, theorem-blokker, drill), pragmatikk-delen som strukturert redegjørelse (`DNA-drofting.md`: begrepskompendium med egne eksempler, pensumforankring) |
| Antall kapitler | **43** (Del 0: 2 · Semantikk Del 1–7: 24 · Pragmatikk Del 8–10: 9 · Eksamenstrening Del 11: 8) + 10 prøvekapitler (ett per temadel 1–10) |
| Estimert totaltid | **~2 190 min ≈ 36,5 timer** (per kapittel under) |
| Quiz totalt | **681** (krav ≥500; semantikk-fasit er quiz-vennlig → siktet høyt) |
| Flashcards totalt | **678** (krav ≥500; sikt 600–700 for et begrepsrikt begrep↔definisjon↔teoretiker-fag) |

**Pitch (ett avsnitt):** LING1100-eksamen er én **4-timers skriftlig skoleeksamen
uten hjelpemidler**, karakter A–F, gitt hver høst. Emnets viktigste strategiske
funn er at faget er en **formell-hybrid, ikke et drøftingsfag**: ca. **55–60 % av
oppgavene er formell/anvendt løsning med objektivt riktig fasit** (sannhetstabeller,
klassifisering av situasjonstyper etter binære trekk, tilordning av tematiske roller,
entailment-/presupposisjonstester, og fra 2024 predikatlogikk-oversettelse,
modellteoretisk evaluering og Jackendoff-tre), ca. **35–40 % strukturert
redegjørelse med egne eksempler** (Grice, talehandlinger, deiksis), og bare **~5 %
fri drøfting**. Formatet har dessuten dreid kraftig mot formell semantikk: H2024 er
organisert i **5 temablokker (Topics) à 3 spørsmål der kandidaten velger 2** (10
besvarelser totalt), er **kun på engelsk**, og har egen **symbolliste**
(∧ ∨ ¬ → ⟦ ⟧ { } ⟨ ⟩ ∈ ∀ ∃) med mulighet for **digital håndtegning** (tre-diagrammer,
Venn). Boka speiler oppgavesettenes egen todeling — **Semantikk** (Del 1–7, formell
kjerne) og **Pragmatikk** (Del 8–10, redegjørende kjerne) — med presupposisjon i
grenselandet, og bygger en **egen formell verktøykasse-modul (Del 4)** som lærer
2024-ferdighetene fra bunnen. Boka er **tospråklig-bevisst**: norsk brødtekst, men
**alltid** den engelske fagtermen ved siden av ved første forekomst
(«talehandlinger (‘speech acts’)», «implikasjon (‘entailment’)»), fordi
undervisningsspråket nå er engelsk og H2024 er helengelsk.

### 1.1 DNA-valg og hybrid-dokumentasjon (ufravikelig)

Faget kombinerer to arketyper. **Valget er dokumentert her og styrer kapittel-DNA-en
per del:**

- **Semantikk-halvdelen (Del 1–7) bygges etter `DNA-regnefag.md`.** Sannhetstabeller,
  entailment-tester, situasjonstype-klassifisering, rolletilordning,
  predikatlogikk-oversettelse, modell-evaluering og Jackendoff-tre er
  **oppgavetyper med objektivt riktige svar**. Disse kapitlene har derfor:
  `theorem`-blokker for de formelle prosedyrene/reglene, gjennomregnede
  `example`-er med fasit, `exercise`-er med `solution`, og **drillkapitler** med
  løsningsoppskrift + variantkatalog. De egner seg perfekt til quiz/flashcards med
  automatisk retting → sikt høyt på kvoten her.
- **Pragmatikk-halvdelen (Del 8–10) bygges etter `DNA-drofting.md`.** Grice,
  talehandlinger, deiksis, modalitet og relevansteori krever presis begrepsbruk +
  **egne eksempler** + pensumforankring, ikke fasit. Disse kapitlene har:
  `definition`-blokker med teoretiker-forankring (flashcard-kilden),
  posisjoner/spenninger, `example`-anvendelser med egne eksempler, og
  **redegjørelses-drill** (ikke fasit-drill).
- **Grenselandet:** presupposisjon behandles fullt i semantikk-delen (Del 3) fordi
  det testes med formelle tester (negasjonstest), men dens **pragmatiske status**
  berøres kort i Del 10. Setning/ytring/proposisjon (Del 1) er halvformelt.
- **Fri drøfting (Type A4)** er sjelden (~5 %) og får bare ett sjangeravsnitt i
  eksamenstreningen (universalitet/relativitet-temaet), ikke en egen del.

**Avvik fra begge DNA-maler (dokumentert):**
1. **43 kapitler — over DNA-taket (20–35).** Begrunnet i PRODUKSJONSLOYPE-lærdommen
   «≥500 er et gulv»: faget dekker to fagfelt (semantikk + pragmatikk) på hvert
   eneste sett, med sju topptemaer som må beherskes perfekt og en helt ny formell
   verktøykasse som må bygges fra bunnen. Bredden kan ikke kuttes uten å
   underforberede kandidaten.
2. **Egen «formell verktøykasse»-del (Del 4) som ikke finnes i noen DNA-mal.**
   Predikatlogikk-oversettelse, scope/QR, modellteori (tolkningsfunksjon, ordnede
   par, mengdemedlemskap) og semantiske funksjoner (Z&S) er **nye 2024-ferdigheter**
   som eldre pensum ikke trener. Dette er den største systematiske
   kompetansehullrisikoen (analysen §5 pkt. 7) og får derfor en dedikert modul.
3. **Drillkapitler ligger i temadelene** (2.4, 3.5, 4.4, 5.3, 6.3 for semantikk;
   8.3, 9.3, 10.3 som redegjørelses-drill for pragmatikk), ikke samlet i siste del,
   fordi sjangrene må drilles rett etter teorien. Del 11 beholder sjangerbanken,
   feilvaksinen, modellbesvarelsene og øvingseksamenene.
4. **To modellbesvarelses-typer** (11.4 formell semantikk + 11.5 redegjørende
   pragmatikk) fordi karakterterskelen er **kvalitativt ulik** i de to halvdelene:
   nesten binær (riktig/galt) for formelle svar, gradert på eksempelkvalitet og
   begrepspresisjon for essaydelene (analysen §4).

### 1.2 Kritiske stil- og sensurregler (gjelder HELE boka)

1. **Formelle svar har fasit — «slark» er FEIL (egen warning).** For sannhetstabeller,
   sannhetsbetingelser, entailment-tester, rolletilordning, predikatlogikk og
   modell-evaluering finnes **utvetydige fasitsvar**; upresis eller vag formulering
   er direkte feil (H2022-veiledningen er kategorisk). Hvert formelt kapittel har en
   `warning` **«Fasit — ikke slark»** som viser den presise formuleringen mot den
   vage. Løsningene skrives som A-besvarelser: presis tabell/klassifikasjon →
   begrunnelse med test/trekk (ikke bare kategorinavn) → eget eksempel.
2. **Parvise begreper må IKKE forveksles (egen warning).** Faget er bygd på
   nærliggende motsetningspar, og forveksling er den mest sannsynlige
   kunnskapsfeilen. Hvert kapittel som introduserer et par har en `warning`
   **«Ikke bland …»**: **character/content** (Kaplan — character skal helst
   forklares som en *funksjon* fra ytringskontekst til proposisjon), **agens/actor**,
   **proto-agent/proto-patient**, **telisk/atelisk**, **epistemisk/deontisk**,
   **konstativ/performativ**, **entailment/presupposisjon/implikatur**,
   **inklusiv/eksklusiv disjunksjon**, **konvensjonell/konversasjonell implikatur**,
   **sense/reference**, **homonymi/polysemi**.
3. **Egne eksempler er obligatoriske der de bes om (egen krav-blokk i pragmatikk).**
   Å oppgi kategorinavnet uten den etterspurte egne eksempelsetningen gir
   ufullstendig svar. Pragmatikk-kapitlene (og de semantiske redegjørelses-delene)
   har en eksplisitt **«Egne eksempler»-instruks** i oppgavene, og
   modellbesvarelsene demonstrerer forskjellen på «forklart + eget eksempel» og
   «bare kategorinavn».
4. **Mekanismer FORKLARES, ikke bare eksemplifiseres.** Proto-roller, Horn-skalaer
   og Grice-egenskapene skal forklares som mekanismer (proto-roller = knipper av
   entailment-egenskaper; Horn-skala koblet til Q-prinsippet; Huangs 7 egenskaper
   navngitt OG forklart), ikke bare illustreres. Dette er A-aksen i essaydelen.
5. **Tospråklighet.** Norsk brødtekst, **engelsk fagterm i parentes ved første
   forekomst** i hvert kapittel (ikke arv fra tidligere kapittel): «situasjonstyper
   (‘situation types’)», «tematiske roller (‘thematic roles’)»,
   «samarbeidsprinsippet (‘Cooperative Principle’)». Testsetninger kan gis på både
   norsk og engelsk; H2024-gjengangerne bør ha en engelsk variant siden siste sett
   er helengelsk.
6. **Notasjon = eksamenens symbolliste.** Bruk ∧ ∨ ¬ → ↔ ⊻ (XOR), ∀ ∃, ∈, ⟦ ⟧
   (denotasjonsklammer), { } (mengder), ⟨ ⟩ (ordnede par) — samme sett som H2024s
   symbolliste. All logikk/mengdelære i LaTeX (`$\land$`, `$\lnot$`, `$\forall$`,
   `$\llbracket\;\rrbracket$`, `$\langle a,b\rangle$`, `$\in$`). Tre-diagrammer
   (Jackendoff) beskrives i tekst/ASCII slik en A-besvarelse ville håndtegnet dem.
7. **Symbol- og formelliste per delkapittel** (README-leserkrav): hvert formelt
   delkapittel (Del 3, 4, og logikk-innslag ellers) har en `collapsible`
   **«Symbol- og formelliste»** rett etter Forkunnskaper som forklarer ALLE symboler
   brukt i delkapitlet (per delkapittel, ikke arv). Rent redegjørende pragmatikk-
   kapitler uten symboler er unntatt (README-unntaket), men bør ha en kort
   **term-liste** (norsk↔engelsk) i stedet.

### 1.3 Ærlighetskrav og forbehold (ufravikelig — lite arkiv)

- **Arkivet er lite (12 sett) og har bare ÉN sensorveiledning (H2022).** Utsagn om
  sensorpraksis, karakterterskler og «typiske feil» hviler nesten utelukkende på
  H2022 + oppgaveinstruksjonene. Slike punkter merkes **`(verifiser)`**. **Ingen
  karaktergrenser (A–F) er dokumentert** — boka skal ikke oppgi terskeltall.
- **Bare høsteksamener finnes; 2016 og 2023 mangler.** Ingen vår-sett.
- **Fasit/løsningsforslag mangler i arkivet.** Alle fasitsvar til de formelle
  oppgavene er **rekonstruert fra pensumbøkene** ved bokproduksjon — der en konkret
  fasit er faglig standard snarere enn dokumentert, merkes den «⚠️ fasit = faglig
  standard». Forfatteren skal ikke påstå at et svar er «UiOs offisielle fasit».
- **Pensum er i endring (Saeed-regimet 2011–2015 → flerboksregimet 2017→).**
  Kalibrer fullt mot **flerboksregimet og især H2024-formatet**. Eldre essaysett er
  gyldig sjangertrening, men de rene formelle 2024-ferdighetene er nye krav.

### 1.4 Opphavsrett (ufravikelig)

Eksamensoppgaver og H2022-veiledningen brukes som **grunnlag** (mønstre,
temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver,
eksempelsetninger og modellbesvarelser er nyskrevne — endre setninger, navn, tall
og formuleringer. Arkivets gjengangersetninger (bil-/vase-setningene for roller;
presupposisjonstrigger-batteriet; «Har du sluttet å slå …?») gjenskapes med
**endrede fakta og ord**, aldri kopieres. Pensumbøkene (Saeed *Semantics*, Huang
*Pragmatics*, Elbourne *Meaning: A Slim Guide to Semantics*, Zimmermann & Sternefeld
*Introduction to Semantics*) refereres (forfatter/verk/begrep), aldri siteres i lengde.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet, gruppert i emnets to faste eksamenshalvdeler.
**Semantikken kommer først** fordi den bygger det formelle apparatet (mening →
relasjoner → sannhet/slutning → logikk → situasjonstyper → roller → komposisjon) som
pragmatikken hviler på; **pragmatikken** (Grice → talehandlinger → deiksis) er
redegjørende og kommer etter. Presupposisjon ligger i grenselandet (Del 3).
**Frekvensen styrer omfanget**, ikke rekkefølgen: topptemaer (8–10/12) får flere
kapitler + drill; randtemaer (2–3/12) dekkes kompakt og merkes «bør kjenne til».

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og det doble håndverket | 2 | perfekt (meta) | Prioriteringsverktøyet + hybrid-håndverket (fasit uten slark / redegjørelse med egne eksempler) må etableres FØR fagstoffet. |
| 1 | Semantikk: mening, referanse og de tre nivåene | 3 | kunne | Setning/ytring/proposisjon 5/12 (åpningsoppgave); mening-teorier + sense/reference + referanse 5/12, **stigende** (Elbourne/Z&S). |
| 2 | Leksikalsk semantikk: meningsrelasjoner og antonymi | 4 | perfekt | Antonymi i 5 typer 8/12 (fast ordforråd resirkuleres) + øvrige meningsrelasjoner; komponentanalyse + universalitet/relativitet som «bør kjenne til». |
| 3 | Sannhetsbetingelser, entailment og presupposisjon | 5 | perfekt | Entailment 8/12 + presupposisjon 8/12 + logikk/sannhetsbetingelser 6/12 (stigende). De tre slutningstypene skilles her — kjernen i «store fire i semantikk». |
| 4 | Formell verktøykasse: predikatlogikk, kvantorer og modellteori | 4 | kunne (høy) | Ny 2024, stor: predikatlogikk-oversettelse + modellteori + scope/QR + Z&S-funksjoner. Største kompetansehullrisiko — bygges fra bunnen. |
| 5 | Situasjonstyper og aksjonsart (Vendler/Dowty) | 3 | perfekt | 8/12, drillet i undervisningen, «fyldig og riktig» forventet; tre begrepspar + femklassifisering + tempus/aspekt. |
| 6 | Tematiske roller og Dowty proto-roller | 3 | perfekt | 9/12, nest hyppigst; sensor forventer proto-roller FORKLART, ikke bare eksemplifisert; agens/actor. Stor del. |
| 7 | Kompositsjonalitet og konseptuell struktur (Jackendoff) | 2 | kjenne / kunne | Kompositsjonalitet 2/12; Jackendoff-tre ny 2024 (F5, tegn-oppgave). |
| 8 | Pragmatikk: Grice og konversasjonell implikatur | 3 | perfekt | 8/12; samarbeidsprinsippet, 4 maksimer, håning/gardering, Huangs 7 egenskaper, Horn Q/R. Redegjørende kjerne. |
| 9 | Talehandlinger: Austin og Searle | 3 | perfekt | **10/12 — det enkelt hyppigste temaet.** Austin tredeling + Searles fem kategorier + kobling til ansikt. Størst pragmatikk-del. |
| 10 | Deiksis, modalitet og pragmatikkens grenseland | 3 | kunne / kjenne | Deiksis 4/12 + Kaplan character/content (sensor streng); modalitet 3/12, høflighet 3/12, relevansteori 2–3/12, informasjonsstruktur (bør kjenne til). |
| 11 | Eksamenstrening | 8 | — | Formell + redegjørende sjangerbank, feilvaksine, 2 modellbesvarelser (formell + redegjørende), 3 øvingseksamener i temablokk-format (engelsk, symbolliste). |

### 2.1 Sjangerkoder (fra analysen §3 — gjengis i bokas Del 0)

**Formelle sjangre (fasit):** **F1** sannhetstabeller/sannhetsbetingelser · **F2**
predikatlogikk-oversettelse + modellteoretisk evaluering (ny 2024) · **F3**
klassifisering etter binære trekk (situasjonstyper, ±statisk/±telisk/±punktuell +
Vendler/Dowty-klasse) · **F4** identifiser tematiske roller + forklar
actor/proto-roller · **F5** tegn/diagram (Jackendoff-tre, Venn — ny 2024).
**Redegjørende sjangre:** **A1** redegjør + eksemplifiser (arkivets vanligste form —
forklar begrepsapparat + anvend på/lag egne eksempler) · **A2** skille to
nærliggende begreper (avgjør-og-begrunn, med test) · **A3** sammenlign to
teorier/tenkere · **A4** fri drøfting (sjelden — universalitet/relativitet).

### 2.2 Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** svare uten forklaring/eksempel (bare kategorinavnet) · **#2** bytte om
parvise begreper (character/content, agens/actor, proto-roller, telisk/atelisk,
epistemisk/deontisk, konstativ/performativ) · **#3** blande de tre slutningstypene
(entailment/presupposisjon/implikatur — negasjonstest og kansellerbarhet skiller
dem) · **#4** vaghet/«slark» i formelle svar (upresise sannhetsbetingelser,
ufullstendige tabeller, gjettet predikatlogikk) · **#5** gjenfortelle i stedet for
å forklare mekanismen (Horn-assosiasjoner, Grice-egenskaper listet, proto-roller
eksemplifisert men ikke definert) · **#6** behandle situasjonstyper/roller
overfladisk (der sensor forventer «fyldig og riktig») · **#7** hoppe over den
formelle 2024-verktøykassa (predikatlogikk/modell/tre) · **#8** ignorere tempus når
det etterspørres sammen med situasjonstype · **#9** svare på feil antall
valgoppgaver (nøyaktig 2 av 3 per Topic i 2024; min. 2+2 i 2012-formatet) · **#10**
utelate egne eksempler i talehandlings-/implikaturoppgaver.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-treff (av 12) + sjangerkoder (F/A) +
> prioritetsklasse (perfekt/kunne/kjenne, fra analysen §7). **Innholdskontrakt** =
> definisjoner/teoremer/prosedyrer som SKAL med (formell notasjon) for semantikk,
> **Begrepskontrakt** = begreper som SKAL defineres med pensumforankring for
> pragmatikk. **Kvote** = quiz/flashcards (minimum per kapittel; kan overskytes,
> aldri underskrides).

### Del 0 — Eksamenskart og det doble håndverket

#### Kapittel 0.1: Slik testes LING1100
**id:** `ling1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen, temablokk-formatet, den formell-hybride profilen,
  temafrekvensen og gjenbruksmønstrene — og hvordan boka brukes mot eksamen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (12 sett H2011–H2024).
  Skal formidle: (a) **Eksamensform:** 4-timers skriftlig skoleeksamen, **ingen
  hjelpemidler**, karakter A–F, hver høst; én obligatorisk innlevering må være
  godkjent på forhånd (teller ikke på karakteren); hele eksamenen er «uten
  hjelpemidler» (ingen del 1/del 2). (b) **Formatets utvikling** til dagens
  **H2024-form: 5 temablokker (Topics) à 3 spørsmål, velg 2 → 10 besvarelser**, kun
  engelsk, egen symbolliste, digital håndtegning. Eldre former (2012 «5 av 10, min.
  2+2»; 2013–2015 «5 obligatoriske»; 2017–2022 Inspera «8–9 spm med a/b/c») nevnes
  som gyldig sjangertrening. (c) **Formell-hybrid-profilen** (det viktigste
  enkeltfunnet): ~55–60 % formell fasit-løsning, ~35–40 % redegjørelse med egne
  eksempler, ~5 % fri drøfting — andelen formell **stiger** i 2024. (d)
  **Temafrekvens-tabellen** (av 12): talehandlinger 10 · tematiske roller 9 ·
  situasjonstyper 8 · antonymi 8 · presupposisjon 8 · Grice-implikatur 8 · entailment
  8 · logikk/sannhetsbetingelser 6 (stigende) · setning/ytring/proposisjon 5 ·
  referanse/mening 5 · deiksis 4 · modalitet 3 · tempus 3 · høflighet 3 · universalitet
  3 · Jackendoff 2 · relevansteori 2 · predikatlogikk/modellteori (ny 2024). (e) **De
  fire pensumbøkene:** Saeed *Semantics*, Huang *Pragmatics*, Elbourne *Meaning: A
  Slim Guide to Semantics*, Zimmermann & Sternefeld *Introduction to Semantics*. (f)
  **Dokumentert oppgavegjenbruk** (treningsgull): antonymi i 5 typer (H17/H19/H21);
  presupposisjonstrigger-batteriet + «Har du sluttet å slå …?» (H17/H18/H19);
  rolle-setningene bil/vase (H11/H19/H20u/H21/H22); situasjonstyper Vendler/Dowty
  (H15/H17/H19/H21/H22); Austin performativ/konstativ (H20u/H21). Prioritet: perfekt
  (meta).
- **Innholdskontrakt:** Sjangerkatalogen F1–F5 + A1–A4 presenteres som studentens
  sjekkliste med frekvens; **prognose for neste eksamen** (temablokk-format): en
  Topic-struktur der Semantikk-blokkene treffer sannhet/slutning, situasjonstyper,
  roller, referanse/relasjoner + formell verktøykasse, og Pragmatikk-blokkene
  treffer Grice, talehandlinger, deiksis. **Valgstrategi:** velg nøyaktig 2 av 3 per
  Topic (feil #9); ikke svar på alle tre (gir ikke ekstrapoeng, sløser tid).
  Leseplan: Del 3–6 er de formelle tyngdepunktene, Del 4 er den nye
  verktøykassa, Del 8–9 er den redegjørende kjernen.
- **Typiske feil:** #9 feil antall valgoppgaver; #7 hoppe over 2024-verktøykassa;
  metafeilen å lese pensum lineært uten å prioritere de sju topptemaene.
- **Kvote:** 12 quiz / 12 flashcards (eksamensform, temablokk-format, sjangerkatalog,
  de fire pensumbøkene, temafrekvens-topp).

#### Kapittel 0.2: Det doble håndverket — fasit uten slark og redegjørelse med egne eksempler
**id:** `ling1100-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-0-1`

- **Kapitteltype:** håndverk (hybrid — dekker begge svarmodusene).
- **Description:** De to svarhåndverkene faget krever: hvordan et **formelt** svar
  føres uten «slark» (fasit), og hvordan et **redegjørende** svar bygges med presise
  begreper + egne eksempler — og hva H2022-veiledningen belønner og straffer.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4, H2022 + oppgaveinstruks).
  Skal operasjonalisere: (a) **Formell modus (fasit):** oppgi tabellen/klassifikasjonen
  presist → begrunn med test/trekk → gi eget eksempel; «utvetydige fasitsvar» finnes,
  vaghet er feil `(verifiser mot H2022)`. (b) **Redegjørende modus:** definer begrepet
  presist (norsk + engelsk term) → gi taksonomien → anvend på oppgitte eksempler →
  **lag egne eksempler** → forklar mekanismen (ikke bare gjenfortell). (c) **De fem
  sensor-signalene** (H2022): egne eksempler obligatoriske der de bes om; parvise
  begreper ikke forveksles (character/content som funksjon; agens/actor; proto-roller);
  formelle svar har fasit, vaghet straffes; dybde > gjenfortelling (Huangs 7 navngitt
  OG forklart; Horn koblet til Q); situasjonstyper/roller «fyldig og riktig» fordi de
  er drillet. (d) **Tidsbudsjett:** temablokk-formatet gir ~24 min per besvarelse (10
  besvarelser på 4 t) — sensor forventer overskudd til fyldig behandling også av siste
  oppgave. Prioritet: perfekt.
- **Innholdskontrakt:** Svararkitekturen for de to modusene som resten av boka
  refererer. Formell føringsmal: *presist svar → test/begrunnelse → eget eksempel*.
  Redegjørelsesmal: *definisjon (m/engelsk term) → taksonomi → anvendelse → egne
  eksempler → mekanismeforklaring*. Mantraene: «fasit tåler ikke slark», «kategorinavn
  uten forklaring er ufullstendig», «parvise begreper er den farligste fella», «egne
  eksempler er ikke pynt — de er krav».
- **Typiske feil:** #1 svare uten forklaring/eksempel; #4 slark i formelle svar; #5
  gjenfortelle i stedet for å forklare mekanismen; #2 forveksle parvise begreper.
- **Kvote:** 14 quiz / 12 flashcards (de to modusene, føringsmalene, de fem
  sensor-signalene, hva som skiller fullstendig fra ufullstendig svar).

**Prøve-kvote Del 0:** ingen (metadel — dekkes av øvingseksamenene i Del 11).

### Del 1 — Semantikk: mening, referanse og de tre nivåene *(prioritet: KUNNE — typisk åpningsoppgave, 5/12)*

#### Kapittel 1.1: Semantikk vs. pragmatikk — setning, ytring og proposisjon
**id:** `ling1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `ling1100-0-2`

- **Kapitteltype:** teori (halvformell).
- **Description:** Fagets grunnskille (semantikk = setningsbetydning vs. pragmatikk = talermening) og de tre nivåene setning, ytring, proposisjon — den vanligste åpningsoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Ingen eksterne forkunnskaper. Kort **term-liste** norsk↔engelsk (ingen formler).
- **Eksamensbelegg:** Setning/ytring/proposisjon + semantikk/pragmatikk-skillet 5/12 (H11, H17, H18, H19, H21), typisk åpningsoppgave. Sjangre: A1, A2 (skille setning/ytring/proposisjon). Prioritet: kunne (porten til hele faget).
- **Innholdskontrakt:** **semantikk (‘semantics’)** = konvensjonell, kontekstuavhengig setningsbetydning; **pragmatikk (‘pragmatics’)** = mening i bruk/kontekst; **setning (‘sentence’)** (abstrakt grammatisk enhet) vs. **ytring (‘utterance’)** (konkret framføring i kontekst) vs. **proposisjon (‘proposition’)** (det sannhetsverdibærende innholdet); **setningsbetydning (‘sentence meaning’)** vs. **talermening (‘speaker meaning’)**; **språklig underbestemthet (‘linguistic underdeterminacy’)** — setningen underbestemmer det som faktisk kommuniseres. Saeed kap. 1, Huang kap. 1.
- **Oppgavesjangre:** A1/A2. Mønstereksempel: «Forklar skillet mellom setning, ytring og proposisjon, og illustrer med egne eksempler hvordan én setning kan gi ulike proposisjoner i ulike kontekster.»
- **Typiske feil:** #1 forklare skillene uten egne eksempler; #2 forveksle ytring og setning; behandle proposisjon som «setningen selv».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.2: Teorier om mening — referensiell vs. representasjonell, sense vs. reference
**id:** `ling1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** teori (redegjørende med presis begrepsstruktur).
- **Description:** «Betydning ute i verden vs. inne i hodet»: den referensielle/denotasjonelle mot den representasjonelle/internalistiske teorien, og Freges sense vs. reference.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Referanse/mening 5/12 (H18, H19, H20u, H22, H24), **stigende** (Elbourne/Z&S-pensum). A3-par: referensiell vs. representasjonell/internalistisk mening (H18, H22). Sjangre: A1, A3. Prioritet: kunne, høy (differensierer framover).
- **Innholdskontrakt:** **referensiell/denotasjonell teori (‘referential/denotational theory’)** — betydning = forholdet mellom uttrykk og ting i verden (referent/ekstensjon); **representasjonell/internalistisk teori (‘representational/internalist theory’)** — betydning = mental representasjon (Elbourne); **sense vs. reference (‘Sinn/Bedeutung’, Frege)** — sense = presentasjonsmåte, reference = referent (morgenstjerne/aftenstjerne); **ekstensjon vs. intensjon**. Der det ikke finnes fasit (teori-om-mening) skal kandidaten «vise faglig innsikt og forklare hovedposisjonene» forankret i pensum (H2022). Saeed kap. 2, Elbourne kap. 2, Z&S.
- **Oppgavesjangre:** A3. Mønstereksempel: «Sammenlign en referensiell og en representasjonell/internalistisk teori om mening. Hvilke fenomener taler for hver?»
- **Typiske feil:** #2 forveksle sense og reference; #5 gjengi posisjonene uten å forklare hva som skiller dem; #1 mangle egne eksempler.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 1.3: Referanse og bestemte beskrivelser
**id:** `ling1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-1-2`

- **Kapitteltype:** teori.
- **Description:** Referansetyper (konstant/variabel/ingen), bestemte beskrivelser (kongen av Frankrike — Russell vs. Strawson) og egennavn vs. fellesnavn.
- **Forkunnskaper (kryssbok):** Kap. 1.2. Term-liste + evt. enkel `collapsible` Symbol- og formelliste hvis Russells kvantoranalyse formaliseres (∃, ∀ — introduseres fullt i Del 4).
- **Eksamensbelegg:** Del av referanse/mening 5/12; «kongen av Frankrike» eksplisitt H19, H22; referansetyper H19, H20u. Sjangre: A1, A2 (klassifiser referansetype). Prioritet: kunne.
- **Innholdskontrakt:** **referent (‘referent’)** vs. **ekstensjon**; **konstant referanse** (egennavn), **variabel referanse** (indeksikalske/deiktiske uttrykk — bro til Del 10), **ingen referanse** (predikater, «ingen», fiksjoner); **bestemte beskrivelser (‘definite descriptions’)** — Russells kvantoranalyse (eksistens + entydighet + predikasjon) vs. Strawsons presupposisjonsanalyse (bro til Del 3); **egennavn vs. fellesnavn (‘proper vs. common nouns’)**. Saeed kap. 2, Elbourne kap. 2.
- **Oppgavesjangre:** A2. Mønstereksempel: «Avgjør for hvert uttrykk om det har konstant, variabel eller ingen referanse, og begrunn.»
- **Typiske feil:** #2 blande referent og sense (jf. 1.2); #1 klassifisere uten begrunnelse; behandle «kongen av Frankrike» uten Russell/Strawson-kontrasten.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

### Del 2 — Leksikalsk semantikk: meningsrelasjoner og antonymi *(prioritet: PERFEKT — antonymi 8/12, fast resirkulert ordforråd)*

#### Kapittel 2.1: Meningsrelasjoner — homonymi, polysemi, synonymi, hyponymi, meronymi
**id:** `ling1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær).
- **Description:** De leksikalske meningsrelasjonene og hvordan de skilles med tester — grunnlaget for antonymi-oppgaven.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Meningsrelasjoner i mange sett (H11, H12, H13, H17, H19, H21); meronymi eksplisitt H19, H21. Sjangre: A2 (klassifiser relasjon), A1. Prioritet: perfekt (leddet før antonymi).
- **Innholdskontrakt:** **homonymi (‘homonymy’)** (samme form, urelaterte betydninger) vs. **polysemi (‘polysemy’)** (samme form, relaterte betydninger) — skilletest (etymologi/relatert sans); **synonymi (‘synonymy’)** (grad, kontekstavhengig); **hyponymi/hyperonymi (‘hyponymy/hyperonymy’)** (er-en-type; transitiv); **meronymi (‘meronymy’)** (del-av); **antonymi** (peker til 2.2). Fasit-poeng: hver relasjon har en test. Saeed kap. 3.
- **Oppgavesjangre:** A2. Mønstereksempel: «For hvert ordpar, oppgi meningsrelasjonen (homonymi/polysemi/synonymi/hyponymi/meronymi) og begrunn med en test.»
- **Typiske feil:** #2 forveksle homonymi og polysemi; blande hyponymi og meronymi; #1 oppgi relasjon uten test.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 2.2: Antonymi i fem typer
**id:** `ling1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-2-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær, topptema).
- **Description:** Motsetningsrelasjonens fem typer med diagnostiske tester — én av arkivets mest resirkulerte oppgaver, med fast ordforråd.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Term-liste.
- **Eksamensbelegg:** Antonymi i 5 typer 8/12 (H11, H12, H13, H17, H19, H20u, H21, H24), med **fast, resirkulert ordforråd** (H17/H19/H21 nesten identisk). Sjangre: A2 (klassifiser antonymtype), A1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-nær, med tester):** **komplementære antonymer (‘complementary/binary antonyms’)** (levende/død — negasjon av den ene ⇒ den andre); **graderbare antonymer (‘gradable antonyms’)** (varm/kald — mellomtrinn, komparativ, ikke gjensidig implikasjon); **reverser (‘reversives’)** (knytte/knyte opp — motsatt retning); **konverser (‘converses’)** (kjøpe/selge, over/under — samme relasjon, byttede argumenter); **taksonomiske søstre (‘taxonomic sisters/incompatibles’)** (mandag/tirsdag, rød/blå — samme nivå i taksonomi). Hver type har en test. Saeed kap. 3 («Opposites»).
- **Oppgavesjangre:** A2. Mønstereksempel: «Klassifiser hvert ordpar i én av de fem antonymitypene, begrunn med testen, og gi ETT eget ordpar per type.»
- **Typiske feil:** #2 forveksle komplementære og graderbare (negasjonstesten skiller); blande konverser og reverser; #1 oppgi type uten test eller uten egne eksempler.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 2.3: Komponentanalyse, semantiske primitiver — og en note om språk, tanke og virkelighet
**id:** `ling1100-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `ling1100-2-1`

- **Kapitteltype:** teori (+ «bør kjenne til»-hale).
- **Description:** Komponentanalyse med semantiske trekk, og en kompakt «bør kjenne til»-note om universalitet, lingvistisk relativitet og fargetermer.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Term-liste.
- **Eksamensbelegg:** Komponentanalyse 1/12 (H24, med krav om økonomisk representasjon); semantikk/tanke/virkelighet 3/12 (H13, H19, H24); Berlin & Kay fargetermer H13. Sjangre: A1, A4 (fri drøfting av universalitet). Prioritet: komponentanalyse kunne; universalitet/relativitet + Berlin & Kay **kjenne** (plasseres SIST, merkes «bør kjenne til»).
- **Innholdskontrakt:** **komponentanalyse (‘componential analysis’)** — betydning dekomponert i **semantiske trekk (‘semantic features’)** ([±ANIMAT], [±VOKSEN] osv.); prinsippet om **økonomisk representasjon**. **Bør kjenne til:** **semantisk universalitet (‘semantic universality’)**; **lingvistisk relativitet (‘linguistic relativity’, Sapir–Whorf)** vs. **tankespråk-hypotesen (‘Language of Thought’)**; **Berlin & Kay** grunnleggende fargetermer (implikasjonshierarki). Saeed kap. 11 + «Meaning, Thought, and Reality».
- **Oppgavesjangre:** A1 (komponentanalyse), A4 (universalitet — den ene fri-drøftingen, jf. H19 Q9). Mønstereksempel: «Gi en økonomisk komponentanalyse av ordfeltet {mann, kvinne, gutt, jente} med semantiske trekk.»
- **Typiske feil:** #5 liste trekk uten å utnytte økonomien; behandle relativitet og universalitet som samme spørsmål; #1 mangle egne eksempler.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 2.4: Drill — klassifiser meningsrelasjon og antonymitype (fasit)
**id:** `ling1100-2-4` · **number:** 2.4 · **estimatedMinutes:** 70 · **prerequisites:** `ling1100-2-3`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Hele klassifiseringsrepertoaret drillet til automatikk med fasit og obligatorisk test-begrunnelse + egne eksempler.
- **Eksamensbelegg:** Dekker A2 for leksikalske relasjoner samlet (antonymi 8/12 + øvrige relasjoner). Variantkatalog: 5-typers antonymi, homonymi/polysemi, hyponymi/meronymi. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) identifiser relasjonstype-kandidat; (2) kjør testen (negasjon for komplementær/graderbar; argumentbytte for konvers; retning for revers; taksonomisk nivå for søstre); (3) oppgi type + begrunnelse + eget ordpar. Gjennomgått «case» med margnotater om fasit-føring. 12–16 oppgaver på eksamensnivå (nyskrevet ordforråd, ikke arkivets).
- **Oppgavesjangre:** A2, alle varianter.
- **Typiske feil:** Hele fellekatalogen fra 2.1–2.2 under tidspress; #2 forveksling; #4 kategorinavn uten test.
- **Kvote:** 16 quiz / 6 flashcards.

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

### Del 3 — Sannhetsbetingelser, entailment og presupposisjon *(prioritet: PERFEKT — entailment 8/12, presupposisjon 8/12, logikk 6/12 stigende)*

#### Kapittel 3.1: Proposisjon, sannhetsverdi og konnektiver — sannhetstabeller
**id:** `ling1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** teori (formell, fasit — DNA-regnefag).
- **Description:** Sannhetstabellene for de logiske konnektivene og sannhetsbetingelsene for konjunksjon/disjunksjon — fasit uten slark.
- **Forkunnskaper (kryssbok):** Kap. 1.1. `collapsible` **Symbol- og formelliste** (obligatorisk): $p,q$ = proposisjoner; $\lnot$ negasjon, $\land$ konjunksjon, $\lor$ inklusiv disjunksjon, $\veebar$ eksklusiv (XOR), $\rightarrow$ material implikasjon, $\leftrightarrow$ biimplikasjon; sann/usann (T/F).
- **Eksamensbelegg:** Logikk/sannhetsbetingelser 6/12 og **stigende** (H15, H18, H19, H20u, H22, H24). H2022: «utvetydige fasitsvar, slark er feil». Sjangre: F1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **proposisjon** som sannhetsverdibærer; **sannhetstabell (‘truth table’)** for $\lnot, \land, \lor, \veebar, \rightarrow, \leftrightarrow$; **inklusiv vs. eksklusiv disjunksjon (‘inclusive/exclusive or’)** — og at eksklusiv lesning ofte er **pragmatisk** utledet via en Grice-maksime (bro til Del 8); **sannhetsbetingelser (‘truth conditions’)** formulert presist («‘$p$ og $q$’ er sann hviss $p$ er sann og $q$ er sann»); **material implikasjon** (kun usann når $p$ sann og $q$ usann). Saeed kap. 4, Elbourne kap. 4.
- **Oppgavesjangre:** F1. Mønstereksempel: «Sett opp sannhetstabellene for inklusiv og eksklusiv ‘eller’, forklar forskjellen, og gi et eget eksempel der eksklusiv lesning oppstår pragmatisk.»
- **Typiske feil (`warning` «Fasit — ikke slark»):** #4 ufullstendig tabell eller vag sannhetsbetingelse; #2 forveksle inklusiv/eksklusiv; glemme at $\rightarrow$ er sann når $p$ er usann.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.2: Logisk implikasjon (entailment), material implikasjon, analytisk/syntetisk
**id:** `ling1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-3-1`

- **Kapitteltype:** teori (formell, fasit).
- **Description:** Logisk implikasjon og testene for den, forholdet til material implikasjon og tautologi, og analytisk/syntetisk-skillet.
- **Forkunnskaper (kryssbok):** Kap. 3.1. `collapsible` Symbol- og formelliste: $p \vDash q$ (entailer); tautologi; kontradiksjon; analytisk/syntetisk.
- **Eksamensbelegg:** Entailment 8/12 (H11, H13, H17, H18, H20u, H21, H22, H24); analytisk/syntetisk 2/12 (H20u, H21); tautologi H18. Sjangre: F1, A2. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker + tester):** **logisk implikasjon/entailment (‘entailment’)** — $p$ entailer $q$ hviss $q$ er sann i alle situasjoner der $p$ er sann; **entailment-tester** (hvis $p$ og ikke $q$ er selvmotsigende; entailment **forsvinner under negasjon** av $p$ — nøkkeltesten mot presupposisjon); **material implikasjon** vs. entailment (skilles!); **tautologi/kontradiksjon**; **analytisk vs. syntetisk (‘analytic/synthetic’)** (sant i kraft av betydning vs. i kraft av verden). Saeed kap. 4.
- **Oppgavesjangre:** F1/A2. Mønstereksempel: «Avgjør for hvert setningspar om den første entailer den andre, og begrunn med en test.»
- **Typiske feil (`warning`):** #3 blande entailment og presupposisjon/implikatur; #4 påstå entailment uten test; #2 forveksle material implikasjon og entailment.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 3.3: Presupposisjon — leksikalske og strukturelle triggere
**id:** `ling1100-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-3-2`

- **Kapitteltype:** teori (fasit-nær, topptema).
- **Description:** Presupposisjon, triggerbatteriet og den avgjørende negasjonstesten (constancy under negation).
- **Forkunnskaper (kryssbok):** Kap. 3.2. Term-liste + `collapsible` Symbol- og formelliste (presupposisjon, negasjonstest).
- **Eksamensbelegg:** Presupposisjon 8/12 (H11, H13, H15, H17, H18, H19, H20u, H24), med nesten identiske gjengangeroppgaver (trigger-batteriet + «Har du sluttet å slå …?»). Sjangre: A1, A2. Prioritet: **perfekt**.
- **Innholdskontrakt:** **presupposisjon (‘presupposition’)** — bakgrunnsantakelse som **overlever negasjon** (constancy under negation) og som ja/nei-svar begge forutsetter; **leksikalske triggere (‘lexical triggers’)** (faktive verb «visste at»; aspektuelle/endringsverb «slutte å», «igjen»; implikative verb); **strukturelle/konstruksjonelle triggere (‘structural triggers’)** (kløyvde setninger, WH-spørsmål, bestemte beskrivelser, kontrafaktiske betingelser); presupposisjon vs. negasjon vs. entailment. Saeed kap. 4/7, Huang.
- **Oppgavesjangre:** A1/A2. Mønstereksempel: «For hver setning, oppgi presupposisjonen, identifiser triggeren (leksikalsk/strukturell), og vis med negasjonstesten at den overlever.»
- **Typiske feil (`warning`):** #3 blande presupposisjon med entailment (negasjonstesten skiller); #1 oppgi presupposisjon uten trigger eller test; #2 forveksle leksikalsk og strukturell trigger.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 3.4: De tre slutningstypene skilt — pluss mengdelære, Venn og downward entailment
**id:** `ling1100-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-3-3`

- **Kapitteltype:** teori (formell, fasit — syntesekapittel).
- **Description:** Den avgjørende systematiske sammenstillingen: entailment vs. presupposisjon vs. implikatur, med testtabell — pluss mengdeoperasjoner, Venn og downward entailment.
- **Forkunnskaper (kryssbok):** Kap. 3.2–3.3 + forhåndsvisning av implikatur (Del 8). `collapsible` Symbol- og formelliste: $\cap$ snitt, $\cup$ union, $\in$ medlemskap, Venn-diagram; downward entailment.
- **Eksamensbelegg:** «Skille de tre slutningstypene» er gjennomgående (H13, H17, H18, H24); mengdelære/Venn H19; downward entailment H19, H22 (H2022: må vise reell innsikt, «ikke gjetting på ordene nedover+implikasjon»). Sjangre: A2, F1. Prioritet: **perfekt**.
- **Innholdskontrakt (syntese-theorem):** testtabell for **entailment** (forsvinner under negasjon, ikke kansellerbar), **presupposisjon** (overlever negasjon), **konversasjonell implikatur** (kansellerbar, ikke-avtakbar — full behandling i Del 8); **mengdeoperasjoner** ($\cap$, $\cup$, $\in$) og **Venn-diagram** som modell for konnektiver/kvantorer; **downward entailment (‘downward entailment’)** — kontekster der slutning går fra sett til delsett (negasjon, «ingen», «hvis»). Saeed kap. 4, Huang.
- **Oppgavesjangre:** A2/F1. Mønstereksempel: «For hvert eksempel, avgjør om slutningen er entailment, presupposisjon eller implikatur, og bruk negasjons- og kansellerbarhetstesten til å begrunne.»
- **Typiske feil (`warning`):** #3 rote sammen de tre slutningstypene; #5 påstå downward entailment på gjenkjenning uten innsikt; #4 upresis testbruk.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 3.5: Drill — sannhetstabell og slutningstest (fasit)
**id:** `ling1100-3-5` · **number:** 3.5 · **estimatedMinutes:** 75 · **prerequisites:** `ling1100-3-4`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Sannhetstabeller, entailment-, presupposisjons- og implikaturtester drillet til automatikk med fasit.
- **Eksamensbelegg:** Dekker F1 + A2 (slutninger) samlet — de mest fasit-tunge sjangrene (entailment 8/12, presupposisjon 8/12, logikk 6/12). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: for tabeller (oppgi kolonner presist → rad for rad → koble til begrep); for slutninger (kjør negasjonstest → kjør kansellerbarhetstest → klassifiser + begrunn). Gjennomgått case med sensor-margnotater («fasit tåler ikke slark»). 14–18 oppgaver på eksamensnivå: tabeller (inkl. XOR), entailment-avgjørelser, presupposisjonstrigger-identifikasjon, tre-veis slutningsklassifisering, ett Venn/mengde-spørsmål.
- **Oppgavesjangre:** F1, A2.
- **Typiske feil:** #3 slutningsforveksling; #4 slark; #1 svar uten test.
- **Kvote:** 16 quiz / 6 flashcards.

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

### Del 4 — Formell verktøykasse: predikatlogikk, kvantorer og modellteori *(prioritet: KUNNE HØY — ny 2024, stor; bygges fra bunnen)*

> **Bygningsmerknad:** Dette er 2024-ferdighetene eldre sett IKKE trener (analysen §5
> pkt. 7 — største kompetansehullrisiko). Bygg fra bunnen: forutsett ingenting mer
> enn Del 3s sannhetstabeller. Ren DNA-regnefag: theorem-blokker for prosedyrene,
> gjennomregnede eksempler med fasit, drill.

#### Kapittel 4.1: Fra naturlig språk til predikatlogikk — predikater, konstanter, kvantorer
**id:** `ling1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `ling1100-3-1`

- **Kapitteltype:** teori (formell, fasit).
- **Description:** Oversettelse av naturlige setninger til predikatlogikk med relasjonssymboler, konstanter og kvantorene ∀ og ∃ — den ferske F2-ferdigheten.
- **Forkunnskaper (kryssbok):** Kap. 3.1–3.2. `collapsible` **Symbol- og formelliste** (obligatorisk): $P(x)$ predikat, konstanter $a,b$, variabler $x,y$; $\forall$ allkvantor, $\exists$ eksistenskvantor; relasjonssymbol $R(x,y)$; konnektivene fra 3.1.
- **Eksamensbelegg:** Predikatlogikk-oversettelse ny 2024 (H24 Topic 4), F2 — «trolig fast framover». Sjangre: F2. Prioritet: kunne, høy (differensierer).
- **Innholdskontrakt (theorem/prosedyre):** **predikat (‘predicate’)**, **konstant (‘constant’)**, **variabel**, **relasjonssymbol** (aritet); **allkvantor $\forall$** («for alle») og **eksistenskvantor $\exists$** («det finnes»); standard oversettelsesmønstre («alle A er B» → $\forall x(A(x)\rightarrow B(x))$; «noen A er B» → $\exists x(A(x)\land B(x))$ — merk: $\rightarrow$ med $\forall$, $\land$ med $\exists$); negasjon av kvantorer. Prosedyre: identifiser predikater/argumenter → velg symboler → bygg formelen. Zimmermann & Sternefeld, Elbourne kap. 4.
- **Oppgavesjangre:** F2. Mønstereksempel: «Oversett hver setning til predikatlogikk med de oppgitte predikatene og konstantene.»
- **Typiske feil (`warning` «Fasit — ikke slark»):** #4 gjettet oversettelse; den klassiske $\forall$-med-$\land$ / $\exists$-med-$\rightarrow$-feilen; feil kvantorrekkefølge (peker mot 4.2 scope).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 4.2: Scope, kvantorløfting (QR) og flertydighet
**id:** `ling1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-4-1`

- **Kapitteltype:** teori (formell).
- **Description:** Virkefelt (scope), kvantorløfting og hvordan én setning kan ha to logiske lesninger.
- **Forkunnskaper (kryssbok):** Kap. 4.1. `collapsible` Symbol- og formelliste: scope/virkefelt, kvantorløfting (QR), $\forall x\exists y$ vs. $\exists y\forall x$.
- **Eksamensbelegg:** Kvantorløfting/scope 2/12 (H12, H18 Q7). Sjangre: F2, A1. Prioritet: kunne.
- **Innholdskontrakt:** **virkefelt/scope (‘scope’)**; **scope-flertydighet (‘scope ambiguity’)** («alle elsker noen» — $\forall\exists$ vs. $\exists\forall$); **kvantorløfting (‘Quantifier Raising’, QR)** som mekanisme for å representere den ikke-overflatiske lesningen (Elbourne, Z&S). Prosedyre: identifiser kvantorene → vis begge scope-lesninger → knytt hver til en parafrase. Elbourne kap. 4, Z&S.
- **Oppgavesjangre:** F2. Mønstereksempel: «Vis at setningen er scope-flertydig ved å gi begge predikatlogiske lesninger og en parafrase for hver.»
- **Typiske feil (`warning`):** #4 oppgi bare én lesning; forveksle de to scope-rekkefølgene; #5 nevne QR uten å vise hva den gjør.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 4.3: Modellteori — tolkningsfunksjon, ordnede par og evaluering
**id:** `ling1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `ling1100-4-1`

- **Kapitteltype:** teori (formell, fasit — høyeste formaliseringsnivå).
- **Description:** Evaluer en setnings sannhetsverdi mot en gitt modell: tolkningsfunksjon, mengder, ordnede par og mengdemedlemskap — pluss Z&S-funksjonsapparatet.
- **Forkunnskaper (kryssbok):** Kap. 4.1 + 3.4 (mengdelære). `collapsible` **Symbol- og formelliste** (obligatorisk): domene $D$, tolkningsfunksjon $F$/$\llbracket\;\rrbracket$; $F(P)$ = mengde; $F(R)$ = mengde av ordnede par $\langle a,b\rangle$; $\in$ medlemskap; funksjon/verdi/argument (Z&S).
- **Eksamensbelegg:** Modellteori ny 2024 (H24 Topic 4 — evaluer mot modell $F_1$, avgjør om $\langle a,b\rangle \in F_1(R)$); Z&S funksjon/verdi/argument/ordnet par H18 Q6. Sjangre: F2. Prioritet: kunne, høy (den nyeste, tyngste formaliseringen).
- **Innholdskontrakt (theorem/prosedyre):** **modell (‘model’)** = domene $D$ + **tolkningsfunksjon (‘interpretation function’)** $F$; **denotasjon** $\llbracket\alpha\rrbracket$; predikat tolkes som **mengde**, relasjon som mengde av **ordnede par (‘ordered pairs’)** $\langle a,b\rangle$; evaluering: slå opp hvert atom → avgjør **mengdemedlemskap ($\in$)** → bygg sammensatt sannhetsverdi trinnvis (konnektiver fra 3.1, kvantorer over $D$); **semantiske funksjoner/verdi/argument** (Z&S). Prosedyre eksplisitt trinnvis. Zimmermann & Sternefeld.
- **Oppgavesjangre:** F2. Mønstereksempel: «Gitt modellen $M=\langle D,F\rangle$, avgjør sannhetsverdien til hver setning ved å slå opp atomene i $F$ og bygge opp trinnvis.»
- **Typiske feil (`warning` «Fasit — ikke slark»):** #4 hoppe over trinn i oppslaget; forveksle $\langle a,b\rangle$ og $\langle b,a\rangle$ (ordnet!); feil kvantorevaluering over domenet.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 4.4: Drill — oversett til predikatlogikk og evaluer mot modell (fasit)
**id:** `ling1100-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `ling1100-4-3`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Hele F2-repertoaret drillet: oversettelse, scope og modell-evaluering med fasit og trinnvis føring.
- **Eksamensbelegg:** Dekker F2 samlet (ny 2024, den nye verktøykassa). Prioritet: kunne, høy.
- **Innholdskontrakt:** Løsningsoppskrift: (oversettelse) identifiser predikater/argumenter → velg symboler → bygg → dobbeltsjekk kvantor-konnektiv-parring; (evaluering) slå opp hvert atom i $F$ → medlemskap → trinnvis oppbygging → sannhetsverdi. Gjennomgått case med margnotater. 12–16 oppgaver: oversettelser, én scope-flertydighet, flere modell-evalueringer (med en oppgitt $F$), én kombinert.
- **Oppgavesjangre:** F2.
- **Typiske feil:** #4 slark; #7 unngå verktøykassa; ordnet-par-forveksling.
- **Kvote:** 16 quiz / 6 flashcards.

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

### Del 5 — Situasjonstyper og aksjonsart (Vendler/Dowty) *(prioritet: PERFEKT — 8/12, drillet i undervisningen)*

#### Kapittel 5.1: De tre begrepsparene og de diagnostiske testene
**id:** `ling1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær, topptema).
- **Description:** ±statisk, ±durativ/punktuell, ±telisk og de diagnostiske testene som avgjør situasjonstype.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Term-liste norsk↔engelsk (mange doble termer).
- **Eksamensbelegg:** Situasjonstyper 8/12 (H11, H12, H15, H17, H19, H21, H22, H24); H24 ber om å «anvende så mange relevante tester som mulig». Sensor (H2022): forventes «fyldig og riktig». Sjangre: F3. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem + tester):** **statisk vs. dynamisk (‘stative/dynamic’)**; **durativ vs. punktuell (‘durative/punctual’)**; **telisk vs. atelisk (‘telic/atelic’, bounded/unbounded)** — med naturlig endepunkt eller ikke; **diagnostiske tester** (progressiv form; «på/i X tid»; «holde på med»; «slutte å»). Hvert begrepspar illustreres med **én egen eksempelsetning**. Saeed kap. 5.
- **Oppgavesjangre:** F3. Mønstereksempel: «Klassifiser hver setning etter ±statisk, ±durativ, ±telisk, og begrunn med minst to tester.»
- **Typiske feil (`warning`):** #2 forveksle telisk/atelisk; #6 overfladisk behandling; #1 oppgi trekk uten test eller uten egne eksempelsetninger.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 5.2: Vendler/Dowty-klassene, semelfaktiver, tempus vs. aspekt
**id:** `ling1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-5-1`

- **Kapitteltype:** teori (klassifiserende, topptema).
- **Description:** Femklassifiseringen (states/activities/accomplishments/achievements + semelfaktiver) og skillet tempus vs. aspekt med Reichenbach.
- **Forkunnskaper (kryssbok):** Kap. 5.1. `collapsible` Symbol- og formelliste: Reichenbach S/R/E.
- **Eksamensbelegg:** Vendler/Dowty-klassifisering (H15, H17, H19, H21, H22 — samme firedeling + semelfaktiv); tempus/Reichenbach 3/12 (H12, H13, H15); ofte etterspurt SAMMEN med situasjonstype (feil #8). Sjangre: F3. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem):** **Vendler/Dowty-klassene** — **tilstander/states** (−dyn), **aktiviteter/activities** (+dyn −tel), **accomplishments** (+dyn +tel +dur), **achievements** (+dyn +tel −dur), + **semelfaktiver/semelfactives** (+dyn −tel punktuell) som mulig femte klasse; hver klasse = et trekk-knippe fra 5.1; **tempus vs. aspekt (‘tense/aspect’)**; **Reichenbach S/R/E** (speech/reference/event time) for presens/preteritum/perfektum. Saeed kap. 5.
- **Oppgavesjangre:** F3. Mønstereksempel: «Plasser hvert verb i en Vendler/Dowty-klasse, begrunn med trekkene, og oppgi tempus.»
- **Typiske feil (`warning`):** #2 forveksle accomplishment/achievement (durativ-testen); #8 glemme etterspurt tempus; #6 overfladisk.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 5.3: Drill — klassifiser situasjonstype og tempus (fasit)
**id:** `ling1100-5-3` · **number:** 5.3 · **estimatedMinutes:** 70 · **prerequisites:** `ling1100-5-2`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Situasjonstype-klassifisering med tester og tempus drillet til automatikk med fasit.
- **Eksamensbelegg:** Dekker F3 samlet (8/12, drillet i undervisningen — høyt forventningsnivå). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) forklar de tre begrepsparene med én egen eksempelsetning hver; (2) kjør testene per setning; (3) oppgi klasse + trekk/test-begrunnelse; (4) oppgi tempus når etterspurt. Gjennomgått case med margnotater («fyldig og riktig», egne eksempelsetninger obligatoriske). 12–16 nyskrevne testsetninger (ikke arkivets cappuccino-setninger).
- **Oppgavesjangre:** F3.
- **Typiske feil:** #2 klasseforveksling; #8 glemt tempus; #1 klasse uten begrunnelse/eksempel.
- **Kvote:** 16 quiz / 6 flashcards.

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

### Del 6 — Tematiske roller og Dowty proto-roller *(prioritet: PERFEKT — 9/12; proto-roller FORKLARES, ikke bare eksemplifiseres)*

#### Kapittel 6.1: Tematiske roller, theta-grid og argument vs. adjunkt
**id:** `ling1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær, topptema, stor).
- **Description:** Rollekatalogen, skillet argument/adjunkt (theta-grid), mismatch syntaks↔rolle og diateser.
- **Forkunnskaper (kryssbok):** Kap. 0.2. Term-liste norsk↔engelsk (agens/agent osv.).
- **Eksamensbelegg:** Tematiske roller 9/12 (H11, H12, H14, H17, H19, H20u, H21, H22, H24) — nest hyppigst; gjengangersetninger (bil/vase). Sjangre: F4, A1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem):** **tematiske/semantiske roller (‘thematic/semantic roles’, theta-roles)** — **agens (‘agent’)**, **patiens (‘patient’)**, **experiencer**, **stimulus**, **theme**, **instrument**, **recipient**, **location**, **goal**, **source**; **argument vs. adjunkt (‘argument/adjunct’)** og **theta-grid**; **mismatch** mellom syntaktisk funksjon (subjekt/objekt) og semantisk rolle; **diateser (‘diathesis’)** aktiv/passiv/medium. Saeed kap. 6.
- **Oppgavesjangre:** F4. Mønstereksempel: «Oppgi den tematiske rollen til hvert utpekt ledd, og avgjør om det er argument eller adjunkt.»
- **Typiske feil (`warning`):** #2 la syntaktisk subjekt automatisk bli agens (mismatch!); blande argument/adjunkt; #1 oppgi rolle uten begrunnelse.
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 6.2: Agens vs. actor og Dowtys proto-roller
**id:** `ling1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-6-1`

- **Kapitteltype:** teori (topptema — sensorkritisk).
- **Description:** Hvorfor actor foreslås i tillegg til agens, og Dowtys to proto-roller som knipper av entailment-egenskaper — som skal FORKLARES.
- **Forkunnskaper (kryssbok):** Kap. 6.1. Term-liste.
- **Eksamensbelegg:** Del av roller 9/12; H2022 Q7: proto-roller skal **forklares, ikke bare eksemplifiseres**; for «barna knuste vasen» skal både agens og actor nevnes + forskjellen forklares; argumentseleksjonsprinsippet «veier desto tyngre». Sjangre: F4, A1. Prioritet: **perfekt** (sensorkritisk).
- **Begrepskontrakt (forklart mekanisme):** **agens vs. actor (‘agent/actor’)** — hvorfor et videre «actor»-begrep foreslås (setninger med ufrivillig/ikke-intensjonell utfører); **Dowtys proto-roller (‘proto-roles’)** — **proto-agent** og **proto-patient** som knipper av **bidragende egenskaper (‘contributing properties’)** (proto-agent: volisjon, sansing, forårsaking, bevegelse; proto-patient: undergår endring, påvirket, inkremental tema); **argumentseleksjonsprinsippet (‘Argument Selection Principle’)** — flest proto-agent-egenskaper → subjekt. **Mekanismen forklares som graderte entailment-knipper, ikke faste kategorier.** Saeed kap. 6, Dowty.
- **Oppgavesjangre:** F4/A1. Mønstereksempel: «Forklar Dowtys to proto-roller som egenskapsknipper, og bruk dem til å forklare rolletilordningen i en setning der agens og actor kommer i spill.»
- **Typiske feil (`warning` «Ikke bland …»):** #2 forveksle agens/actor og proto-agent/proto-patient; #5 eksemplifisere proto-roller uten å definere mekanismen; utelate argumentseleksjonsprinsippet.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 6.3: Drill — tilordne roller og forklar actor/proto-roller (fasit + forklaring)
**id:** `ling1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `ling1100-6-2`

- **Kapitteltype:** drill (fasit + forklaringskrav, DNA-regnefag).
- **Description:** Rolletilordning drillet med fasit, og proto-roller/actor drillet som forklart mekanisme.
- **Eksamensbelegg:** Dekker F4 samlet (9/12, sensorkritisk). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) definer hver aktuelle rolle kort; (2) tilordn med begrunnelse (ikke bare navn); (3) forklar actor-motivasjonen med en av setningene; (4) forklar proto-rollene som egenskapsknipper + argumentseleksjon. Gjennomgått case med margnotater (både agens og actor nevnt; mekanisme forklart). 12–16 nyskrevne setninger (ikke arkivets bil/vase).
- **Oppgavesjangre:** F4.
- **Typiske feil:** #2 par-forveksling; #5 udefinerte proto-roller; #1 navn uten begrunnelse.
- **Kvote:** 18 quiz / 8 flashcards.

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

### Del 7 — Kompositsjonalitet og konseptuell struktur (Jackendoff) *(prioritet: KJENNE/KUNNE — kompositsjonalitet 2/12; Jackendoff-tre ny 2024)*

#### Kapittel 7.1: Kompositsjonalitetsprinsippet
**id:** `ling1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `ling1100-4-3`

- **Kapitteltype:** teori.
- **Description:** Fregeprinsippet om at helhetens betydning bygges av delenes betydning og måten de settes sammen.
- **Forkunnskaper (kryssbok):** Kap. 4.3 (semantisk oppbygging). Term-liste + evt. Symbol- og formelliste hvis funksjonsapplikasjon formaliseres.
- **Eksamensbelegg:** Kompositsjonalitet 2/12 (H12, H18). Sjangre: A1. Prioritet: kunne.
- **Innholdskontrakt:** **kompositsjonalitetsprinsippet (‘Principle of Compositionality’)**; trinnvis semantisk oppbygging (funksjonsapplikasjon, jf. Z&S/4.3); hvorfor idiomer/kontekst utfordrer streng kompositsjonalitet. Saeed kap. 10, Z&S.
- **Oppgavesjangre:** A1. Mønstereksempel: «Forklar kompositsjonalitetsprinsippet og illustrer med et eget eksempel hvordan betydningen bygges trinnvis.»
- **Typiske feil:** #5 gjengi prinsippet uten å vise oppbygging; #1 mangle eget eksempel.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 7.2: Jackendoffs konseptuelle struktur og tre-diagram
**id:** `ling1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-7-1`

- **Kapitteltype:** teori (formell — tegn/diagram F5, ny 2024) + innebygd drill.
- **Description:** To-plan-analysen (two tiers) og hvordan man tegner et konseptuelt tre-diagram for en setning — den nye F5-ferdigheten.
- **Forkunnskaper (kryssbok):** Kap. 7.1 + 6.1 (roller). `collapsible` **Symbol- og formelliste** (obligatorisk): konseptuelle funksjoner GO, BE, STAY, CAUSE; kategorier Thing, Path, Place, Event; PATH/TO.
- **Eksamensbelegg:** Jackendoff 2/12 (H17 two tiers; H24 Topic 5 — tegn tre for «Sally traveled to India» → GO/PATH/TO). Digital håndtegning tilbys. Sjangre: F5. Prioritet: kunne (ny, differensierer).
- **Innholdskontrakt (theorem/prosedyre):** **konseptuell struktur (‘Conceptual Structure’)**; **to-plan/two tiers**; konseptuelle **hovedfunksjoner** GO, BE, STAY, CAUSE og **kategorier** Thing/Path/Place/Event; prosedyre for tre: identifiser hovedfunksjonen → bygg treet med riktige argumenter → merk løvnodene. Tre-diagram beskrives i ASCII/tekst slik en håndtegning ville sett ut. Saeed kap. 10, Jackendoff.
- **Oppgavesjangre:** F5. Mønstereksempel: «Tegn et konseptuelt tre-diagram (Jackendoff) for en bevegelsessetning, med riktig hovedfunksjon og argumenter.» Innebygd drill: 6–8 setninger å tegne tre for, med fasit-trær.
- **Typiske feil (`warning` «Fasit — ikke slark»):** #4 feil hovedfunksjon (GO vs. BE vs. CAUSE); manglende Path/Place-argument; #7 unngå tegneoppgaven.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

### Del 8 — Pragmatikk: Grice og konversasjonell implikatur *(prioritet: PERFEKT — 8/12; redegjørende kjerne, DNA-drofting)*

> **Bygningsmerknad:** Fra og med Del 8 bygges kapitlene etter `DNA-drofting.md`:
> `definition`-blokker med teoretiker-forankring (flashcard-kilden), egne eksempler
> obligatorisk, mekanismer forklart. «Drill» her betyr redegjørelses-/eksempeltrening,
> ikke fasit.

#### Kapittel 8.1: Samarbeidsprinsippet, de fire maksimene, håning og gardering
**id:** `ling1100-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** temakapittel (redegjørende).
- **Description:** Grices samarbeidsprinsipp, de fire maksimene og hvordan implikaturer oppstår ved håning (flouting) og gardering (hedging).
- **Forkunnskaper (kryssbok):** Kap. 1.1 (semantikk/pragmatikk-skillet). Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Grice/implikatur 8/12 (H11, H13, H14, H18, H19, H21, H22, H24). Sjangre: A1. Prioritet: **perfekt**.
- **Begrepskontrakt (forankret):** **samarbeidsprinsippet (‘Cooperative Principle’, Grice)**; de fire **maksimene (‘maxims’)**: kvantitet, kvalitet, relasjon, måte; **konversasjonell implikatur (‘conversational implicature’)** som utledes; **håning/flouting (‘flouting’)** (åpenlyst brudd → implikatur) vs. **gardering/hedging (‘hedging’, opting out)**; koblingen til eksklusiv «eller» (fra 3.1). Saeed kap. 7, Huang kap. 2.
- **Drøftingsakser/Posisjoner:** når er et maksimebrudd håning (implikatur) vs. faktisk usamarbeid?; forholdet Grice ↔ relevansteori (peker mot 10.2).
- **Case-forslag:** egne dialogeksempler der hver maksime hånes; ett hedging-eksempel.
- **Typiske feil (`warning`):** #10 utelate egne eksempler; #5 liste maksimene uten å vise hvordan implikaturen utledes; #3 kalle en entailment for implikatur.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 8.2: Implikaturens egenskaper (Huangs 7), konvensjonell vs. konversasjonell, Horn Q/R
**id:** `ling1100-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-8-1`

- **Kapitteltype:** temakapittel (redegjørende — sensorkritisk dybde).
- **Description:** Skillet konvensjonell/konversasjonell implikatur, Huangs sju egenskaper (som skal navngis OG forklares), og Horns Q/R-prinsipper med skalaer.
- **Forkunnskaper (kryssbok):** Kap. 8.1. Term-liste.
- **Eksamensbelegg:** Huangs 7 egenskaper H22 (sensor: 4 av 7 må navngis OG forklares); Horn Q/R H22 (må vise innsikt, koble skala til Q-prinsippet, ikke gjenfortelle assosiasjoner); kansellerbarhet H21. Sjangre: A1, A3 (Grice-maksimer vs. Horn Q/R). Prioritet: **perfekt** (dybde belønnes).
- **Begrepskontrakt (forklart mekanisme):** **konvensjonell vs. konversasjonell implikatur (‘conventional/conversational’)**; **Huangs 7 egenskaper**: **kansellerbarhet/defeasibility**, **ikke-avtakbarhet/non-detachability**, **kalkulérbarhet**, **ikke-konvensjonalitet**, **forsterkbarhet**, **universalitet**, **ubestemmelighet** — hver navngitt OG forklart; **Horns Q-prinsipp** (si nok — mot hører) og **R-prinsipp** (ikke si mer enn nødvendig — mot taler); **Horn-skalaer (‘Horn scales’)** (⟨alle, noen⟩) koblet til Q-prinsippet. Huang kap. 2–3, Horn.
- **Drøftingsakser:** Grices maksimer vs. Horns todeling — hva forenkler Horn?; positive vs. negative Horn-skalaer.
- **Case-forslag:** egen skalar implikatur («noen» → «ikke alle») forklart via Q; ett kansellerbarhets-eksempel.
- **Typiske feil (`warning` «Ikke bland …»):** #2 konvensjonell/konversasjonell; #5 liste Huangs egenskaper uten forklaring; #5 gjenfortelle Horn-assosiasjoner uten Q-koblingen.
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 8.3: Redegjørelses-drill — implikaturanalyse med egne eksempler
**id:** `ling1100-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-8-2`

- **Kapitteltype:** redegjørelses-drill (DNA-drofting sjanger).
- **Description:** Å analysere implikaturer, navngi + forklare egenskaper og produsere egne eksempler under tidspress.
- **Eksamensbelegg:** Dekker A1 for Grice/implikatur (8/12). Prioritet: **perfekt**.
- **Innhold:** Oppskrift (A1): identifiser hvilken maksime som hånes → utled implikaturen trinnvis → navngi og forklar de relevante egenskapene → gi eget eksempel. Gjennomskrevet eksempel med margkommentarer (navngitt OG forklart; egne eksempler). 8–10 nyskrevne oppgaver med momentliste-løsninger (ikke fasit, men modellsvar).
- **Typiske feil:** #10 mangle egne eksempler; #5 liste uten å forklare; #3 slutningsforveksling.
- **Kvote:** 16 quiz / 8 flashcards.

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

### Del 9 — Talehandlinger: Austin og Searle *(prioritet: PERFEKT — 10/12, det hyppigste temaet; DNA-drofting, størst pragmatikk-del)*

#### Kapittel 9.1: Austin — performativ/konstativ og lokusjonær/illokusjonær/perlokusjonær
**id:** `ling1100-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-1-1`

- **Kapitteltype:** temakapittel (redegjørende, topptema).
- **Description:** Austins vei fra konstativ/performativ-skillet til tredelingen lokusjonær/illokusjonær/perlokusjonær, med performative verb og hell-vilkår.
- **Forkunnskaper (kryssbok):** Kap. 1.1. Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Talehandlinger 10/12 — hyppigst (H11, H12, H14, H15, H17, H18, H19, H20u, H21, H22); performativ/konstativ + «Jeg lover/tilstår/advarer» H20u, H21. Sjangre: A1. Prioritet: **perfekt**.
- **Begrepskontrakt (forankret):** **konstativ vs. performativ (‘constative/performative’)**; **eksplisitte/implisitte performativer**; **performative verb (‘performative verbs’)**; hvorfor Austin oppga konstativ/performativ-skillet; **lokusjonær/illokusjonær/perlokusjonær (‘locutionary/illocutionary/perlocutionary’)** handling; **hell-vilkår (‘felicity conditions’)**. Saeed kap. 8, Huang kap. 4.
- **Drøftingsakser:** hvorfor kollapser konstativ/performativ-skillet (alle ytringer har illokusjonær kraft)?
- **Case-forslag:** egne ytringer analysert i alle tre lag; egne eksplisitte/implisitte performativer.
- **Typiske feil (`warning` «Ikke bland …»):** #2 konstativ/performativ og lokusjonær/illokusjonær; #1 oppgi handlingstype uten eget eksempel; #10 sluntre unna siste oppgave (H2022: sensor forventer overskudd).
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 9.2: Searles fem kategorier og koblingen til ansikt
**id:** `ling1100-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-9-1`

- **Kapitteltype:** temakapittel (redegjørende, topptema).
- **Description:** Searles fem talehandlingstyper med egne eksempler, og hvordan noen talehandlinger iboende truer «ansikt».
- **Forkunnskaper (kryssbok):** Kap. 9.1. Term-liste.
- **Eksamensbelegg:** Searles fem kategorier gjennomgående (H17, H18, H19, H21, H22); kobling til ansikt/høflighet H12, H14, H22 (Brown & Levinson; Huang FTA). Sjangre: A1, A3 (Austin vs. Grice H12). Prioritet: **perfekt**.
- **Begrepskontrakt (forankret):** **Searles fem kategorier (‘Searle's five types’)**: **representativer/assertiver**, **direktiver**, **kommissiver**, **ekspressiver**, **deklarasjoner** — hver med eget eksempel; kobling til **ansikt (‘face’, Brown & Levinson)**: positivt/negativt ansikt, **ansiktstruende handlinger (‘face-threatening acts’, FTA)**, Huangs kobling talehandling↔ansikt (fullt i 10.2). Saeed kap. 8, Huang kap. 4–5.
- **Drøftingsakser:** hvilke Searle-kategorier er iboende ansiktstruende (direktiver/kommissiver)?; Austin vs. Searle vs. Grice.
- **Case-forslag:** ett eget eksempel per Searle-kategori; en direktiv analysert som FTA.
- **Typiske feil (`warning`):** #1 liste de fem uten egne eksempler; #2 forveksle representativ/ekspressiv; #10 utelate egne eksempler i talehandlingsoppgaver.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 9.3: Redegjørelses-drill — talehandlingsanalyse med egne eksempler
**id:** `ling1100-9-3` · **number:** 9.3 · **estimatedMinutes:** 55 · **prerequisites:** `ling1100-9-2`

- **Kapitteltype:** redegjørelses-drill (DNA-drofting sjanger).
- **Description:** Full talehandlingsanalyse (Austin-lag + Searle-kategori + ansikt) med egne eksempler under tidspress.
- **Eksamensbelegg:** Dekker A1 for talehandlinger (10/12). Prioritet: **perfekt**.
- **Innhold:** Oppskrift (A1): definer begrepene → gi Austins tredeling + Searles fem kategorier → anvend på hvert oppgitt eksempel → lag egne eksempler → knytt til ansikt der relevant. Gjennomskrevet eksempel med margkommentarer (egne eksempler + fyldig behandling, jf. H2022). 8–10 nyskrevne oppgaver med momentliste-løsninger.
- **Typiske feil:** #10 mangle egne eksempler; #2 par-forveksling; #1 kategorinavn uten forklaring.
- **Kvote:** 18 quiz / 8 flashcards.

**Prøve-kvote Del 9:** 4 prøver (spesifisert i §4).

### Del 10 — Deiksis, modalitet og pragmatikkens grenseland *(prioritet: KUNNE/KJENNE — deiksis 4/12 + Kaplan sensorkritisk; øvrige ⭐⭐/⭐)*

#### Kapittel 10.1: Deiksis og Kaplans character vs. content
**id:** `ling1100-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-1-3`

- **Kapitteltype:** temakapittel (redegjørende — Kaplan sensorkritisk).
- **Description:** De tre deiksistypene, sosial deiksis/høflighet, og Kaplans character/content — der sensor er streng på at character er en funksjon fra kontekst til proposisjon.
- **Forkunnskaper (kryssbok):** Kap. 1.3 (variabel referanse). Term-liste; character som funksjon kan noteres $\text{character}: \text{kontekst}\rightarrow \text{content}$.
- **Eksamensbelegg:** Deiksis 4/12 (H12, H13, H15, H22); Kaplan character/content H22 (sensorkritisk: character = funksjon fra ytringskontekst til proposisjon; må IKKE forveksles med content). Sjangre: A1, A2, A3 (character vs. content). Prioritet: kunne.
- **Begrepskontrakt (forankret):** **deiksis (‘deixis’)** person/tid/sted; **deiktiske vs. absolutte retningsord**; **sosial deiksis (‘social deixis’)**/høflighetsformer; **indexicals**; **Kaplans character vs. content (‘character/content’)** — **character** = den kontekstuavhengige betydningsregelen (en **funksjon** fra ytringskontekst til proposisjon), **content** = det som hevdes i en gitt kontekst. Saeed kap. 2/7, Huang, Kaplan (via Elbourne).
- **Drøftingsakser:** hvorfor er indexicals problematiske for en ren referensiell mening-teori (jf. 1.2)?
- **Case-forslag:** egne ytringer der samme setning (samme character) gir ulik content i ulike kontekster.
- **Typiske feil (`warning` «Ikke bland …»):** #2 forveksle character og content; forklare character som «bare betydningen» uten funksjons-poenget; #1 mangle egne eksempler.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 10.2: Modalitet, høflighet/ansikt og relevansteori
**id:** `ling1100-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-9-2`

- **Kapitteltype:** temakapittel (redegjørende — samledel av ⭐⭐/⭐-temaer).
- **Description:** Epistemisk/deontisk modalitet, Brown & Levinsons høflighetsteori, relevansteori (eksplikatur vs. implikatur), og en kort note om informasjonsstruktur og presupposisjonens pragmatiske status.
- **Forkunnskaper (kryssbok):** Kap. 9.2 (ansikt), 8.1 (implikatur), 3.3 (presupposisjon). Term-liste.
- **Eksamensbelegg:** Modalitet 3/12 (H12, H14, H17); høflighet/ansikt 3/12 (H12, H14, H22); relevansteori 2–3/12 (H12, H13 + H21 underbestemthet); informasjonsstruktur H24 (bør kjenne til). Sjangre: A1, A2, A3 (implikatur vs. eksplikatur H13). Prioritet: modalitet/høflighet/relevansteori kunne; informasjonsstruktur **kjenne** (SIST, merkes «bør kjenne til»).
- **Begrepskontrakt (forankret):** **epistemisk vs. deontisk modalitet (‘epistemic/deontic’)** (flertydig modalverb «Kari kan spille piano»); **positivt/negativt ansikt** og **høflighetsstrategier** (Brown & Levinson, full FTA-kobling fra 9.2); **relevansteori (‘Relevance Theory’, Sperber & Wilson)** — **eksplikatur vs. implikatur (‘explicature/implicature’)**, underbestemthet, kontekstuell utfylling. **Bør kjenne til:** **informasjonsstruktur (‘information structure’)** ny/gitt, topikk/fokus; presupposisjonens pragmatiske status (jf. 3.3). Huang kap. 5–7, Saeed kap. 7, Sperber & Wilson.
- **Drøftingsakser:** eksplikatur vs. konversasjonell implikatur — hvor går grensen?; hvordan skiller relevansteori seg fra Grice?
- **Case-forslag:** egne eksempler på epistemisk/deontisk tvetydighet; ett eksplikatur-eksempel.
- **Typiske feil (`warning` «Ikke bland …»):** #2 epistemisk/deontisk; forveksle eksplikatur og implikatur; #1 mangle egne eksempler.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 10.3: Redegjørelses-drill — deiksis, character/content og grenselandsbegreper
**id:** `ling1100-10-3` · **number:** 10.3 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-10-2`

- **Kapitteltype:** redegjørelses-drill (DNA-drofting sjanger).
- **Description:** Deiksis, character/content-skillet og de øvrige grenselandsbegrepene drillet med egne eksempler og par-presisjon.
- **Eksamensbelegg:** Dekker A1/A2 for deiksis + Kaplan + modalitet + relevansteori. Prioritet: kunne.
- **Innhold:** Oppskrift: definer begrepet (m/engelsk term) → gi taksonomien → anvend/lag egne eksempler → hold parene fra hverandre. Gjennomskrevet eksempel med margkommentarer (character som funksjon). 8–10 nyskrevne oppgaver med momentliste-løsninger.
- **Typiske feil:** #2 par-forveksling (character/content, epistemisk/deontisk); #1 mangle egne eksempler.
- **Kvote:** 14 quiz / 8 flashcards.

**Prøve-kvote Del 10:** 4 prøver (spesifisert i §4).

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Formell sjangerbank (F1–F5) — løsningsoppskrifter uten slark
**id:** `ling1100-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 3–7

- **Kapitteltype:** sjangerkapittel (formell, fasit).
- **Description:** Alle fem formelle sjangrene samlet med algoritmisk løsningsoppskrift og fasit-føring.
- **Eksamensbelegg:** F1 (sannhetstabeller), F2 (predikatlogikk/modellteori), F3 (situasjonstyper), F4 (roller/proto-roller), F5 (Jackendoff-tre/Venn) — til sammen ~55–60 % av eksamen. Prioritet: perfekt.
- **Innhold (DNA sjangerkapittel):** Én løsningsoppskrift per sjanger (fra drillkapitlene 3.5/4.4/5.3/6.3/7.2), hver med sensor-margnotater om fasit-føring («slark er feil»), og en gjennomgått eksamenscase per sjanger. Sjekkliste: presist svar → test/begrunnelse → eget eksempel.
- **Typiske feil:** #4 slark; #7 unngå 2024-verktøykassa; #1 svar uten begrunnelse.
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 11.2: Redegjørende sjangerbank (A1–A4) — maler med egne eksempler
**id:** `ling1100-11-2` · **number:** 11.2 · **estimatedMinutes:** 55 · **prerequisites:** Del 8–10

- **Kapitteltype:** sjangerkapittel (redegjørende).
- **Description:** De redegjørende sjangrene med disposisjonsmaler, inkludert den sjeldne fri-drøftingen.
- **Eksamensbelegg:** A1 (redegjør + eksemplifiser — arkivets vanligste), A2 (skille to begreper), A3 (sammenlign to teorier: Austin/Grice, referensiell/representasjonell, Grice/Horn, character/content, relativitet/tankespråk), A4 (fri drøfting — universalitet, H19 Q9). Prioritet: A1/A2/A3 perfekt; A4 kjenne. Prioritet: perfekt.
- **Innhold:** Disposisjonsmal per sjanger (A1: definisjon m/engelsk term → taksonomi → anvend → egne eksempler → mekanisme; A2: kriterium/test → anvend mekanisk → skriv ut begrunnelsen; A3: posisjon A → posisjon B → sammenligningsakser → vurdering; A4: still opp spørsmålet → argumenter for/mot forankret i pensum → begrunnet stillingtaken). Gjennomskrevet eksempel per sjanger med margkommentarer. Samler bokas A3-kontrastpar i én tabell.
- **Typiske feil:** #1/#10 mangle egne eksempler; #5 gjenfortelle; #3 slutningsforveksling.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 11.3: Feilvaksinen — parvise begreper, slark og de tre slutningstypene
**id:** `ling1100-11-3` · **number:** 11.3 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–10

- **Kapitteltype:** sjangerkapittel (tverrgående drill).
- **Description:** De ti dokumenterte feilene drillet med gjenkjenning og før/etter-omskriving.
- **Eksamensbelegg:** Analysen §5 komplett; #2 (parvise begreper) og #4 (slark) er de tyngste, #7 (2024-verktøykassa) den største systematiske risikoen. Prioritet: perfekt (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil #1–#10: (a) feilen slik den rammer, (b) «slik ser den ut»-utdrag, (c) omskrevet korrekt versjon, (d) varsellampe-heuristikk. Særlig drill på **parvise begreper** (character/content, agens/actor, proto-roller, telisk/atelisk, epistemisk/deontisk, konstativ/performativ, entailment/presupposisjon/implikatur) og på **fasit uten slark**. Gjenkjenningsoppgaver (flervalg: «hvilken feil begår denne kandidaten?»).
- **Typiske feil:** kapitlet ER feilene.
- **Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 11.4: Modellbesvarelse — formell semantikk (roller + proto-roller / situasjonstyper)
**id:** `ling1100-11-4` · **number:** 11.4 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-6-3`, `ling1100-5-3`

- **Kapitteltype:** modellbesvarelse (formell).
- **Description:** Full besvarelse av en F3+F4-oppgave som viser fullstendig fasit-svar mot «slark»-svar.
- **Eksamensbelegg:** Situasjonstyper (8/12) + roller/proto-roller (9/12) — de to mest drillede formelle temaene (H2022: «fyldig og riktig»). Oppgave (nyskrevet, H2022/H2024-mønster): «Klassifiser situasjonstypen til hver setning med tester, tilordn de tematiske rollene, og forklar Dowtys proto-roller.»
- **Karakternivåer:** `collapsible` **Fullstendig svar** (full tekst med margnotater: presise klassifikasjoner, test-begrunnelser, både agens og actor nevnt, proto-roller forklart som egenskapsknipper, egne eksempelsetninger). `collapsible` **«Slark»-svar** — korrekt kategorinavn men uten tester, proto-roller bare eksemplifisert, ingen egne eksempler; margnotater om gapet. Avsluttes med `tip` **Sensorblikket** (H2022-krav: fasit uten slark, mekanisme forklart).
- **Typiske feil demonstrert i slark-versjonen:** #4, #5, #6, #1.
- **Kvote:** 6 quiz / 6 flashcards.

#### Kapittel 11.5: Modellbesvarelse — redegjørende pragmatikk (talehandlinger + implikatur)
**id:** `ling1100-11-5` · **number:** 11.5 · **estimatedMinutes:** 50 · **prerequisites:** `ling1100-9-3`, `ling1100-8-3`

- **Kapitteltype:** modellbesvarelse (redegjørende).
- **Description:** Full besvarelse av en A1-oppgave som viser «forklart + egne eksempler» mot «bare kategorinavn».
- **Eksamensbelegg:** Talehandlinger (10/12) + Grice-implikatur (8/12) — de to hyppigste pragmatikk-temaene. Oppgave (nyskrevet, H2022-mønster): «Skisser Austins tredeling og Searles fem kategorier med egne eksempler, forklar hvordan en implikatur oppstår ved håning, og si noe om hvordan noen talehandlinger truer ansikt.»
- **Karakternivåer:** `collapsible` **Fullstendig svar** (full tekst med margnotater: definisjoner m/engelsk term, egne eksempler per kategori, implikatur utledet trinnvis + egenskaper navngitt OG forklart, ansikt-koblingen; overskudd til fyldig behandling). `collapsible` **Ufullstendig svar** — korrekte kategorinavn uten egne eksempler, egenskaper listet uten forklaring; margnotater om gapet. `tip` **Sensorblikket** (egne eksempler obligatoriske, dybde > gjenfortelling).
- **Typiske feil demonstrert i ufullstendig-versjonen:** #10, #1, #5.
- **Kvote:** 6 quiz / 6 flashcards.

#### Kapittel 11.6: Øvingseksamen 1 — temablokk-format (engelsk, symbolliste)
**id:** `ling1100-11-6` · **number:** 11.6 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–10

- **Kapitteltype:** øvingseksamen (H2024-format).
- **Description:** Komplett nyskrevet sett i temablokk-format: 5 Topics à 3 spørsmål, velg 2, engelsk, med symbolliste.
- **Eksamensbelegg:** Speiler H2024: 5 Topics × (velg 2 av 3) = 10 besvarelser, kun engelsk, symbolliste (∧ ∨ ¬ → ⟦ ⟧ { } ⟨ ⟩ ∈ ∀ ∃), digital håndtegning. Bred kjerne: Topic 1 referanse/mening + relasjoner; Topic 2 sannhet/slutning/presupposisjon; Topic 3 formell verktøykasse (predikatlogikk/modell); Topic 4 situasjonstyper + roller; Topic 5 Grice + talehandlinger.
- **Innhold:** Nyskrevne oppgaver med **symbolliste gjengitt øverst**, momentliste-/fasit-løsning per oppgave (formell fasit for semantikk-Topics, modellsvar for pragmatikk-Topics), og `tip` om valgstrategien (nøyaktig 2 av 3, feil #9).
- **Typiske feil:** #9 feil antall valgoppgaver; #7 unngå formell Topic.
- **Kvote:** 5 quiz / 0 flashcards.

#### Kapittel 11.7: Øvingseksamen 2 — temablokk-format (formell tyngde)
**id:** `ling1100-11-7` · **number:** 11.7 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–10

- **Kapitteltype:** øvingseksamen (H2024-format, formell vekt).
- **Description:** Andre komplette sett med tyngre formell profil (predikatlogikk, modellteori, Jackendoff-tre).
- **Eksamensbelegg:** Speiler den formelle dreiningen i H2024. Topics vektlagt mot F2/F5: predikatlogikk-oversettelse + modell-evaluering, sannhetstabeller + downward entailment, Jackendoff-tre, situasjonstyper, + én pragmatikk-Topic (implikatur/Horn).
- **Innhold:** Nyskrevne oppgaver med symbolliste, fasit-løsninger med trinnvis føring (modell-evaluering, tre-diagram i ASCII), momentliste for pragmatikk-delen. `tip` om at den formelle verktøykassa er den største kompetansehullrisikoen.
- **Typiske feil:** #4 slark; #7 verktøykassa; ordnet-par-forveksling.
- **Kvote:** 5 quiz / 0 flashcards.

#### Kapittel 11.8: Øvingseksamen 3 — eldre format (redegjørende tyngde)
**id:** `ling1100-11-8` · **number:** 11.8 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–10

- **Kapitteltype:** øvingseksamen (eldre Inspera-/valgformat, redegjørende vekt).
- **Description:** Tredje sett i eldre format (8–9 spørsmål / valgformat med min. 2 semantikk + 2 pragmatikk) med redegjørende tyngde og egne eksempler.
- **Eksamensbelegg:** Speiler 2012-valgformatet (5 av 10, min. 2+2) og Inspera-fasen (egne eksempler obligatoriske). Bred redegjørende profil: antonymi, talehandlinger, Grice, deiksis/character-content, presupposisjon, referanse — pluss et par formelle innslag.
- **Innhold:** Nyskrevne oppgaver med momentliste-løsninger som demonstrerer egne eksempler + par-presisjon; `tip` om fordelingskravet (min. 2 semantikk + 2 pragmatikk, feil #9) og om at egne eksempler er krav, ikke pynt.
- **Typiske feil:** #9 fordelingskrav; #10 mangle egne eksempler; #2 par-forveksling.
- **Kvote:** 5 quiz / 0 flashcards.

**Prøve-kvote Del 11:** ingen egne temaprøver — de tre øvingseksamenene (11.6–11.8) er delens prøver.

---

## Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+14 = **26** | 12+12 = **24** |
| 1 | 1.1–1.3 | 18+18+16 = **52** | 20+22+20 = **62** |
| 2 | 2.1–2.4 | 18+20+16+16 = **70** | 24+24+20+6 = **74** |
| 3 | 3.1–3.5 | 20+18+20+18+16 = **92** | 22+22+24+22+6 = **96** |
| 4 | 4.1–4.4 | 18+14+18+16 = **66** | 22+16+22+6 = **66** |
| 5 | 5.1–5.3 | 18+20+16 = **54** | 22+24+6 = **52** |
| 6 | 6.1–6.3 | 20+20+18 = **58** | 26+24+8 = **58** |
| 7 | 7.1–7.2 | 14+16 = **30** | 16+18 = **34** |
| 8 | 8.1–8.3 | 20+18+16 = **54** | 24+24+8 = **56** |
| 9 | 9.1–9.3 | 22+20+18 = **60** | 26+24+8 = **58** |
| 10 | 10.1–10.3 | 18+16+14 = **48** | 22+20+8 = **50** |
| 11 | 11.1–11.8 | 16+14+14+6+6+5+5+5 = **71** | 14+12+10+6+6+0+0+0 = **48** |
| **Sum** | **43 kap.** | **681 ≥ 500 ✓** | **678 (mål 600–700) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE-lærdommen «≥500 er GULV»):** LING1100 er
et **begrepsrikt begrep↔definisjon↔teoretiker-fag** med en stor formell fasit-kjerne.
Begge trekk trekker kvoten opp: (1) **semantikk-fasiten er quiz-vennlig** —
sannhetstabeller, klassifiseringer, rolletilordninger, entailment-tester og
modell-evalueringer har objektivt riktige svar og gir naturlig mange presise
quizspørsmål (Del 3 alene 92 quiz; de formelle Del 3–6 bærer 270 av 681). (2)
**Flashcards er satt høyt (678, mot ~510-gulvet)** fordi faget er tett på parvise
begreper og teoretiker-koblinger som må sitte utenat (character↔content↔Kaplan;
agens↔actor↔Dowty; de fem antonymitypene; Searles fem kategorier↔eksempler; Huangs 7
egenskaper; Vendler/Dowty-klassene). Drillkapitlene (2.4, 3.5, 4.4, 5.3, 6.3, 8.3,
9.3, 10.3) holdes lave på flashcards (6–8) fordi verdien der er oppgaver, ikke kort;
øvingseksamenene har 0 flashcards / 5 quiz. **Quiz-fordelingen speiler
eksamensvektene:** de sju topptemaene (Del 2, 3, 5, 6 semantikk + Del 8, 9
pragmatikk) bærer 388 av 681 quiz; den nye formelle verktøykassa (Del 4) 66;
grenseland/randtemaer (Del 1, 7, 10) lavest.

**Flashcard-profil:** hovedvekt på **begrep↔definisjon↔teoretiker** (Grice↔
samarbeidsprinsippet↔maksimene; Austin↔lokusjonær/illokusjonær/perlokusjonær; Searle↔
fem kategorier; Dowty↔proto-roller↔contributing properties; Kaplan↔character/content;
Vendler↔fire klasser; Horn↔Q/R↔skala; Sperber & Wilson↔relevansteori↔eksplikatur;
Russell/Strawson↔bestemte beskrivelser; Berlin & Kay↔fargetermer) + parvise
begreper som presise éndefinisjoner. **Quiz-profil:** flervalg med
nabobegrep-distraktorer (character/content, agens/actor, telisk/atelisk,
epistemisk/deontisk, konstativ/performativ, entailment/presupposisjon/implikatur,
inklusiv/eksklusiv, homonymi/polysemi, accomplishment/achievement) + fasit-spørsmål
(sannhetstabellrader, rolletilordning, situasjonstype-klasse, predikatlogisk
oversettelse, modell-evaluering, ∈-medlemskap) + «hvem hevder hva»-koblinger +
prosedyre-rekkefølge (F2-evaluering, entailment-test, tre-diagram-trinn).

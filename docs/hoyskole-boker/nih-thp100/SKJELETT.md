# Bokskjelett: THP100 Humanfysiologi (Norges idrettshøgskole) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (NIHs THP100-arkiv 2022/23–2024/25: **6 komplette oppgavesett**
> — 3 ordinære + 3 utsatte/kont — og **6 tilhørende sensorveiledninger med fullstendige
> fasitmomenter**, alle lest oppgave for oppgave, bokmål og nynorsk). Alle oppgaver,
> case, figurtekster, tallverdier og formuleringer i boka skal være NYSKREVNE (se §6).
> Anatomiske navn (norsk/latin), fysiologiske sammenhenger, normalverdier og
> standardmekanismer er alminnelig fagstoff og fritt å bruke.
>
> **Fysiologisk presisjon er kritisk.** Normalverdier, likevektspotensialer og
> gassfordelingsprosenter forfatteren er usikker på merkes `(verifiser)` for
> fagfellesjekk i fase 6. Nivået er **klassisk organfysiologi på førsteårsnivå** — den
> **friske** kroppen. IKKE treningsplanlegging, molekylærbiologi, histologibilder eller
> biostatistikk (analysens §0). Fysisk aktivitet er kun INNRAMMING; det testes
> fysiologisk mekanisme, ikke treningslære.

---

## 1. Bokens identitet

- **Kurs-id:** `nih-thp100`
- **Tittel:** *THP100 Humanfysiologi*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «THP100 Humanfysiologi».
- **Arketype:** **fakta/pugg + mekanisme** — et rendyrket fakta- og forståelsesfag som
  ikke passer noen av de tre DNA-malene (regnefag/jus/drøfting) rent. Nærmeste forbilde
  og faglige tvilling er **NOKUT-AFB** (sykepleie, anatomi/fysiologi): samme «ingen
  hjelpemidler + pugg + mekanisme»-profil, stort overlappende pensum, moment-for-moment-
  retting av fritekst. THP100 er likevel **smalere og enda mer formularisk** (samme
  spørsmål går igjen nærmest uendret år etter år). Struktur er skreddersydd (dokumentert
  i §2 «Arketypetilpasning»); låner makrostruktur, mekanismekjede-logikk og
  øvingseksamener fra NOKUT-AFB / DNA-regnefag, og moment-for-moment-vurderingslogikken
  (fritekst rettet mot punktlister) fra DNA-drøfting.
- **Kapittelantall:** 36 (Del 0: 2 · organsystem-/grunnlagsdeler 1–10: 29 ·
  eksamenstrening Del 11: 5)
- **Estimert totaltid:** ~1 795 minutter (~30 timer) fordelt per kapittel under.
- **Quiz totalt:** **554** (krav ≥500) · **Flashcards totalt:** **576** (krav ≥500)

**Pitch:** THP100 er **førsteårsemnet i humanfysiologi** på bachelor i *Trening, helse
og prestasjon* ved NIH, og avlegges av hele det nye årskullet hver vår — en stor,
fornybar målgruppe. Formen er låst og eksepsjonelt forutsigbar: **individuell skriftlig
skoleeksamen, 4 timer, INGEN hjelpemidler, 25 oppgaver = 100 poeng** (nesten alle 4p, et
fåtall deloppgaver 2p), kortsvar/definisjon/mekanismeforklaring/figurnavngiving/tabell.
Kravet «svar kort og presist» gjentas på hver forside — sensor leter etter de riktige
nøkkelbegrepene og mekanismeleddene, ikke lange essays.

Det avgjørende trekket boka bygges baklengs fra: **ekstrem forutsigbarhet.** Alle seks
settene bruker de samme faste temaoverskriftene i (nesten) samme rekkefølge, og et stort
antall spørsmål er ordrette eller nesten ordrette gjengangere fra år til år — enkelte
fasitsvar er klippet uendret fra ett sett til det neste. En student som har drillet de
~15 kjernemekanismene (§2 gjengangertabell) til de sitter, vil kjenne igjen brorparten
av oppgavene. Derfor er quiz kjernetreningen (flervalgs-/sekvenspresisjon, tungt vektet
fordi eksamen er hjelpemiddelfri) og flashcards fakta-/normalverdi-/mekanismekort — med
høy flashcard-tetthet fordi ALT skal memoreres. Boka driller de faste gjengangerne
eksplisitt med **momentbaserte modellsvar** som speiler sensorveiledningens «for full
score må du ha med …»-format.

**Kalibreringsregel (ufravikelig):** THP100 tester **fysiologisk mekanisme**, ikke
treningsplanlegging — fysisk aktivitet («når du løper», «over anaerob terskel»,
«bicepscurl») er kun innramming. Ingen treningslære, ernæringslære eller
prestasjonsoptimalisering som kjernestoff. Ingen molekylærbiologi, histologibilder eller
biostatistikk (der ligger MED1100/andre fag). Latin brukes bare i et fåtall
standardnavn (klaffer, kartyper, nerver) — ikke som selvstendig krav. Bygg aldri tungt
på detaljer sensorveiledningene ikke etterspør.

### Note om fysiologiklyngen ved NIH (standalone-krav)

THP100 er **fundamentet** i NIHs fysiologiklynge og bygges **STANDALONE og komplett** —
den forutsetter INGEN søskenbøker, og alle forkunnskaper dekkes internt eller lenkes til
NOKUT-AFB der en ekstern parallell finnes. Søskenbøkene (bygges senere) vil kunne
forkunnskaps-lenke INN til THP100-kapitler slik:

- **NIH-THP101 (Funksjonell anatomi):** vil lenke til Del 1 (blodåreoppbygning) og Del 6
  (muskelcelletyper) som fysiologisk grunnlag for makroanatomi/bevegelsesapparat.
- **NIH-THP202 (Treningsfysiologi):** bygger direkte på THP100 — vil lenke til Del 2
  (respirasjonsregulering, gasstransport), Del 1 (hjertefrekvens/regulering), Del 8
  (anaerob terskel/laktat) og Del 6 (muskel).
- **NIH-THP204 (Metabolisme):** vil lenke til Del 8 (syre-base, laktatproduksjon) og
  Del 10 (celleorganeller, oksidativ fosforylering).
- **NIH-THP203 (Biomekanikk), NIH-IDR109 (Treningslære), NIH-LKI235, NIH-MA460:** vil
  lenke til muskel-/sirkulasjonskapitlene som anvendelsesgrunnlag.

I THP100 selv peker `prerequisites` KUN bakover til egne kapitler / Del 0 (asyklisk
graf). Kryssbok-lenker i Forkunnskaper-blokkene går til NOKUT-AFB der en ekstern
parallell finnes (samme pensum, allerede bygget), ALDRI til ubygde NIH-søsken.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + eksamensteknikk) → organsystem-deler etter poengvekt
og gjengangertyngde (tyngst først) → grunnlagsstoff (syre-base, temperatur, celler) →
eksamenstrening.** Dette følger NOKUT-AFBs «tyngst først»-logikk (avvik fra DNA-regnefags
«ordne etter faglig avhengighet», begrunnet i avvik 4 under).

| Del | Seksjonstittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og eksamensteknikk | 2 | perfekt (meta) | Formatet (25 oppg/4p/100p, ingen hjelpemidler), kortsvar-disiplinen, spørreordnivåene, momentbasert retting og gjengangerlogikken må etableres FØR fagstoffet. |
| 1 | Sirkulasjon | 5 | perfekt | **Tyngst** (6/6, 3–5 oppg/sitting, ordinære sett åpner alltid her). Hjertesyklus/EKG/klaffer, blodåreoppbygning, blodstrøm/motstand/MAP, hjertefrekvensregulering (6/6), lokal blodstrømregulering. |
| 2 | Respirasjon | 4 | perfekt | **Tyngst** (6/6, 3–4 oppg/sitting). Ventilasjonsmekanikk, gassutveksling, gasstransport m/prosenter, respirasjonsregulering + hyperventilering/dykking. |
| 3 | Nyrer | 3 | perfekt | Tung (6/6, 2–3 oppg). Tre hovedprosesser (6/6), håndtering av natrium/glukose/vann/kalium/proteiner, RAAS/renin. |
| 4 | Endokrinologi | 3 | perfekt | Tung (6/6, 3 oppg). Vann- vs. fettløselige hormoner (5/6), hormontabell (rullerende), insulin/glukagon + diabetes type 1/2 (5/6). |
| 5 | Nervesystemet | 4 | perfekt | Tung (6/6, 2–4 oppg). Aksjonspotensial/hvilemembranpotensial, likevektspotensialer, ganglier autonomt NS (5/6), inhiberende internevron (5/6). |
| 6 | Muskel | 3 | perfekt | Tung (6/6, 2–4 oppg). Muskelkontraksjonskjeden (**6/6 — sikreste enkeltoppgave**), celletyper (4/6), kraftregulering, gap junction/refraktærperiode/tetanus. |
| 7 | Blod | 2 | kunne | Middels (6/6, 1–2 oppg). Blodcelletyper, hematokrit, lymfocytter/klonseleksjon, makrofager. |
| 8 | Syre-base-regulering | 2 | kunne | Middels (6/6, 1–2 oppg). Hyperventilering → respiratorisk alkalose (**6/6**), metabolsk acidose/laktat, bikarbonatlikevekten. |
| 9 | Temperaturregulering | 2 | kunne | Middels (6/6, 1–2 oppg). Fire varmeutvekslingsmåter (5/6, ofte case), feber; utsatte sett åpner alltid med temperatur-case. |
| 10 | Celler | 1 | kjenne | Ny fra 2024/25 (1/6, oppgave 1 i det ene settet). Organeller i muskelcelle. Trolig fast innslag framover; dekkes kompakt men fullstendig. |
| 11 | Eksamenstrening | 5 | perfekt (meta) | 3 sjanger-/feildrillkapitler (mekanisme-momentlister · figur/tabell/kortsvar · «siste spørsmål»-jokere) + 2 komplette øvingseksamener i 25-oppgavers/100-poengsformatet. |

Rasjonale: de fem–seks bæretemaene (Del 1–6) huser ~70 % av poengene og de garanterte
gjengangerne — de får flest kapitler og høyest kvote med full momentdrill. Middels-temaene
(Del 7–9) dekkes solid men kompakt. Del 10 (celler) er ny og volatil, dekkes med ett
fullstendig kapittel. **Ingenting utelates** — settene sampler nesten hele bredden hvert
år; prioriteringen styrer *dybde og drillmengde*, ikke hva som er med.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og eksamensteknikk |
| 1 | Sirkulasjon |
| 2 | Respirasjon |
| 3 | Nyrer |
| 4 | Endokrinologi |
| 5 | Nervesystemet |
| 6 | Muskel |
| 7 | Blod |
| 8 | Syre-base-regulering |
| 9 | Temperaturregulering |
| 10 | Celler |
| 11 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**M** mekanismeforklaring «forklar med egne ord …» (den DOMINERENDE — beskriv en
fysiologisk hendelseskjede skritt for skritt; ofte eksplisitt start-/sluttpunkt; poeng
gis per korrekt ledd) · **K** definisjon/kortsvar «hva menes med …» (presis begrepsbruk +
gjerne et tall: −70 mV, +30 mV, ~100 slag/min, 98,5 %) · **F** figur-/navnsetting
(EKG-kurve P/QRS/T; sirkulasjonsdiagram A–G; fire nerveceller A–D med inhiberende
internevron) · **T** tabell-/listeoppgave (hormontabell produksjonssted + hovedvirkning;
nyrenes håndtering av stoffer) · **C** anvendelses-/case-oppgave (fysiologi på konkret
scenario: bicepscurl, hyperventilering før dykk, bål i kulde) · **S** sammenlign-oppgave
(hjerte- vs. skjelettmuskel; diabetes 1 vs. 2; bronkier vs. bronkioler; vann- vs.
fettløselige hormoner).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**E1** forveksle hjerteklaffene / feil rekkefølge (blodets vei: tricuspidal → pulmonal →
lunge → bicuspidal → aorta) · **E2** blande respiratorisk og metabolsk syre-base-
forstyrrelse (hyperventilering = respiratorisk *alkalose* ↑pH; laktat = metabolsk
*acidose* ↓pH) · **E3** tro at hyperventilering øker O₂ i blodet nevneverdig (Hb allerede
~98,5 % mettet) · **E4** ganglielokalisering feil vei (sympatiske *nær ryggmargen* /
grensestrengen; parasympatiske *nær målorganet*) · **E5** tro at nyrene regulerer
blodsukker (glukose filtreres 100 % og reabsorberes 100 % — nyrene styrer normalt IKKE
blodsukker) · **E6** inhiberende internevron: tro hyperpolarisering skjer via Na⁺ (den
skjer via **K⁺/Cl⁻**-kanaler med negativt likevektspotensial) · **E7** egenrytme vs.
hvilepuls (sinusknutens egenrytme ~100/min; lavere hvilepuls skyldes parasympatisk brems
via n. vagus) · **E8** diabetes type 1 vs. 2 (1 = autoimmun β-celleødeleggelse/manglende
produksjon; 2 = nedsatt insulinsensitivitet) · **E9** varmeutveksling upresist (ledning/
strømning/stråling/fordamping må navngis korrekt OG anvendes på casen; «svette» uten å
koble til fordamping trekker) · **E10** muskelkontraksjonskjeden med hull (hoppe over
spenningsstyrte Ca²⁺-kanaler i nerveenden, eller Ca²⁺ fra sarkoplasmatisk retikulum til
troponin — momentbasert retting straffer manglende ledd) · **E11** feil retning på
diffusjon/blodstrøm (alltid fra høyt til lavt trykk/partialtrykk) · **E12** upresis
omskriving uten fagbegrepene (sensor krever *tricuspidalklaff, sinusknute, n. vagus,
acetylkolin, noradrenalin, sekundær aktiv reabsorpsjon, respiratorisk alkalose,
klonseleksjon, tetanus, refraktærperiode* — omskriving uten begrepet gir tap) · **E13**
feil eller manglende tallverdi (−70 mV, +30 mV, ~100/min, gassprosenter, likevekts-
potensialer) · **E14** på case svare generelt (ramse opp mekanismen) uten å knytte den
til de konkrete kroppsdelene/situasjonen (sensor krever anvendelse for full pott).

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Momentbasert retting.** Fasit er «for full score må du ha med følgende …» +
   punktliste av strukturer/mekanismeledd; poeng per moment. Lengde teller ikke —
   presise fagbegreper og riktige delmomenter gjør.
2. **Presise nøkkelbegreper premieres** (E12): sensor vil se korrekte fagtermer, ikke
   upresis omskriving.
3. **Tall og retninger må stemme** (E13, E11): normalverdier, likevektspotensialer,
   gassprosenter og diffusjons-/blodstrømretning (høyt→lavt) er gjennomgående poeng.
4. **«Egne ord» håndheves** men fasitmomentene må likevel være til stede — forståelse,
   ikke pugget setning, men leddene skal med.
5. **Anvendelse belønnes ekstra på case** (E14): mekanismen må knyttes til de konkrete
   kroppsdelene/situasjonen, ikke bare ramses opp generelt.
6. **Ingen hjelpemidler = pugg forventes**, men listlista ligger på rimelig nivå: sensor
   vil ha kjernemekanismen korrekt, ikke uttømmende detaljer. Ingen minuspoeng — svar
   alltid.

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Ingen ren arketype.** THP100 er pugge-/faktafag med tung mekanismeforståelse.
   Kapittel-DNA er skreddersydd (som NOKUT-AFB) med fire faste komponenter i hvert
   temakapittel: **(a) faktagrunnlag** (definisjoner, struktur, normalverdier, latinske
   kjernenavn — flashcard-kilden), **(b) mekanismekjeder** (nummererte årsakskjeder
   forklart trinnvis, ett ledd = ett moment = ett poeng), **(c) fritekst-momentlister**
   (gjennomskrevne modellsvar som speiler sensorveiledningens «for full score …»-format),
   og **(d) MC-/kortsvardrill** (flervalg/sekvens/figur — quizmodaliteten). Bæretemaene
   (Del 1–6) har alle fire tungt; middels- og grunnlagskapitler kan ha lettere (b)/(c).
2. **«Symbol- og formelliste» → «Nøkkelfakta- og verdiliste».** README-kravet om en
   collapsible rett etter Forkunnskaper omtolkes for et fag nesten uten formler: hvert
   kapittel får en `collapsible` **«Nøkkelfakta- og verdiliste»** som samler
   normalverdier (hvilemembranpotensial −70 mV, aksjonspotensial +30 mV, egenrytme
   ~100/min, gassprosenter, likevektspotensialer Na⁺ +60 / K⁺ −90 / Cl⁻ −70 mV),
   latinske kjernenavn og de mekanismekjedene kapitlet krever — det studenten må ha
   *utenat* i akkurat dette kapitlet. De få reelle formlene (MAP = TPM × MV) føres her.
3. **Quiz tungt vektet, todelt drill.** Fordi eksamen er uten hjelpemidler driller boka
   begge svarformer: quiz = flervalgs-/sekvens-/definisjonspresisjon (nabobegrep-
   distraktorer), flashcards = fakta/normalverdi/mekanisme/latin utenat (svært
   faktatungt → HØY flashcard-tetthet, NOKUT-AFB-lærdommen om at flashcards er GULV, ikke
   mål), og `example`- + `exercise`-blokkene = fritekst-momentlister (mekanismekjedene).
4. **Rekkefølge etter poengvekt/gjengangertyngde, ikke faglig avhengighet (avvik fra
   DNA-regnefag).** Organsystemene er stort sett selvstendige puggeblokker; tyngst-først
   maksimerer avkastning per lesetime og speiler eksamens egen temarekkefølge (ordinære
   sett åpner med SIRKULASJON). Konsekvens: cellegrunnlaget (Del 10) kommer sist. Der et
   organsystemkapittel trenger et grunnbegrep, gir Del 0.2 en kompakt hurtigreferanse og
   Forkunnskaper-blokken lenker. `prerequisites` peker likevel bare BAKOVER for å holde
   metadata-grafen asyklisk.
5. **Gjenganger-drill er ryggraden.** Fordi emnet er ekstremt formularisk (§0/§7 i
   analysen), skal de ~15 gjengangerne (tabell under) drilles eksplisitt med
   momentbaserte modellsvar. En egen **«siste spørsmål»-jokerseksjon** (kap. 11.3)
   dekker de rullerende siste-oppgavene (complianse, shallow water blackout, renin,
   O₂-rikt/-fattig blod i lungearterien).
6. **Ingen oppdiktede verdier.** Normalverdier, likevektspotensialer, gassprosenter og
   latinske navn forankres i standard fysiologipensum; usikre detaljer merkes
   `(verifiser)`. Alle oppgaver, case og tabeller er NYSKREVNE (opphavsrett, §6).

### Gjengangertabell (drilles eksplisitt — fra analysen §2/§7)

Score = antall av 6 sittinger observert. Disse er kjernen; boka driller hver med et
momentbasert modellsvar og eget flashcard-/quizsett i hjemkapitlet + eksamenstreningen.

| Gjenganger | Score | Hjemkapittel |
|---|---|---|
| Muskelkontraksjonskjeden (forhorncelle → kontraksjon) | 6/6 | 6.1 |
| Hyperventilering → respiratorisk alkalose | 6/6 | 8.1 |
| Regulering av hjertefrekvens (sinusknute/n. vagus/sympatikus) | 6/6 | 1.3 |
| Nyrenes tre hovedprosesser + natrium & glukose | 6/6 | 3.1 |
| Vann- vs. fettløselige hormoner | 5/6 | 4.1 |
| EKG-tolkning (P/QRS/T) | 5/6 | 1.2 |
| Insulin/glukagon + diabetes type 1/2 | 5/6 | 4.3 |
| Ganglier i autonomt NS | 5/6 | 5.3 |
| Inhiberende internevron (K⁺/Cl⁻) | 5/6 | 5.4 |
| Fire varmeutvekslingsmåter | 5/6 | 9.1 |
| Lokal regulering av blodstrøm (vasodilatasjon) | 4/6 | 1.5 |
| Muskelcelletyper (tverrstripet/hjerte/glatt) | 4/6 | 6.2 |
| Gasstransport med prosentandeler | 3/6 | 2.3 |
| Blodets vei / lungekretsløpet med klaffer | 3/6 | 1.4 |

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — gjenganger-score/frekvens, hvilke sjangre (M/K/F/T/C/S)
   temaet inngår i, og hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg —
   forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker til
   NOKUT-AFB der en ekstern parallell finnes (README-leserkrav), etterfulgt av
   `collapsible` **Nøkkelfakta- og verdiliste** (normalverdier, likevektspotensialer,
   latinske navn, mekanismekjeder som må sitte utenat — per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor/hvor ofte det
   testes. Ikke et dannelsesfag.
4. `definition` **Kjernefakta og struktur** — begreper, struktur, normalverdier,
   latinske navn i EMNETS terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` **Mekanismekjeder** — de eksamensrelevante årsakskjedene, nummerert
   trinnvis (ett ledd = ett moment = ett poeng). Rekkefølge er kritisk (E10).
6. `example` × 1–3 **Modellsvar** — minst ett «forklar med egne ord / gjør rede for»-svar
   skrevet som full-pott-momentliste, med spørreordet og delpoengene synlige, speiler
   sensorveiledningens «for full score må du ha med …». Første enkelt, siste på
   eksamensnivå.
7. `warning` **Typiske feil** — feilkodene (E1–E14) som gjelder temaet.
8. `exercise` × 6–10 — stigende, i kapitlets sjangre (M/K/F/T/C/S blandet), alle med
   `solution` (momentliste) + `hints`. Hver oppgave merket med sjangerkode. Siste ender
   på eksamensnivå.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter/nøkkelfakta fra kapitlet (og
   forutgående kapitler det bygger på).

Drill- og øvingseksamenskapitlene (Del 11) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = gjenganger-score/frekvens + sjangerkoder
> (M/K/F/T/C/S) + prioritetsklasse (perfekt/kunne/kjenne/meta). **Faktakontrakt** =
> definisjoner/struktur/normalverdier/latin som SKAL med (flashcard-grunnlaget).
> **Mekanismekjeder** = årsakskjeder som må rekonstrueres trinnvis (aktivt). **Fritekst-
> momentlister** = hvilke modellsvar `example`-blokkene skal levere (sensor-«for full
> score …»-format). **MC-/kortsvardrill** = quiz-sjangrene kapitlet skal øve. **Kvote** =
> quiz/flashcards.

### Del 0 — Eksamenskart og eksamensteknikk

#### Kapittel 0.1: Slik testes THP100
**id:** `nih-thp100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (25 oppgaver, 4p-standard, 100 p, 4 timer, ingen
  hjelpemidler), de faste temabolkene, gjengangerlogikken og hvordan boka brukes mot
  eksamen.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2022/23–2024/25). Skal formidle: (a)
  **gjeldende form** — individuell skriftlig skoleeksamen, 4 t, INGEN hjelpemidler, **25
  oppgaver = 100 p**, nesten alle 4p (enkelte deloppgaver 2p), bokstavkarakter A–F,
  bokmål/nynorsk, «svar kort og presist» på hver forside; (b) **de faste temabolkene** i
  fast rekkefølge (sirkulasjon, respirasjon, nyrer, endokrin, nervesystem, muskel, blod,
  syre-base, temperatur + jokerplass) — kart til Del 1–10; (c) **ordinær vs. utsatt
  rekkefølge**: ordinære sett åpner alltid med SIRKULASJON, utsatte alltid med
  TEMPERATUR-case (bål/is); (d) **ekstrem forutsigbarhet** — samme spørsmål går igjen
  nærmest uendret, tabeller roterer innhold (hormonlisten byttes) ikke form; (e)
  **gjengangerne** (§2-tabellen) som drilles eksplisitt. Prioritet: perfekt (meta).
- **Faktakontrakt:** format-oversikten (25 oppg/4p/100p/4t/ingen hjelpemidler);
  temabolk-listen med typisk antall oppgaver; ordinær/utsatt-rekkefølgen;
  spørreordoversikten (peker til 0.2); gjengangertabellen.
- **Mekanismekjeder:** ingen (kartkapittel).
- **Fritekst-momentlister:** «Slik ser en THP100-oppgave ut» — ett nyskrevet mini-sett
  med en mekanismeoppgave (M), en kortsvar-/definisjonsoppgave (K) og en tabelloppgave
  (T), med hvordan poeng høstes momentvis.
- **MC-/kortsvardrill:** gjenkjenn temabolk og sjanger (M/K/F/T/C/S) fra
  oppgaveformuleringen.
- **Typiske feil:** skrive lange essays der kortsvar kreves (bortkastet tid); misforstå
  at man kan «slå opp» (ingen hjelpemidler — alt utenat).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Eksamensteknikk — spørreord, momentlister og sensorreglene
**id:** `nih-thp100-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-thp100-0-1`

- **Kapitteltype:** eksamensteknikk.
- **Description:** Hvordan spørreordet styrer svarnivået, hvordan fritekst rettes moment
  for moment, kortsvarsdisiplinen (presise begreper + tall), case-anvendelseskravet, og
  de faste sensorreglene — pluss en kompakt hurtigreferanse for retningsord og
  grunnbegreper som trengs før fagstoffet.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2022→. Prioritet:
  perfekt (meta). Skal operasjonalisere: (a) **spørreordtrappen** — hva menes med / hva
  er = definisjon + gjerne tall; nevn/navngi = ren oppramsing; forklar med egne ord /
  gjør rede for = vis mekanismen skritt for skritt (momentliste); sett opp en tabell =
  faktakunnskap i rader; på case = knytt mekanismen til situasjonen; (b) **momentliste-
  metoden** — skriv nummererte, presise delmomenter i riktig rekkefølge, ikke lange
  fortellinger (poeng per ledd); (c) **de seks sensorreglene** fra §2; (d)
  **kortsvarsdisiplinen** — sensor vil se fagbegrepet + tallverdien, ikke omskriving;
  (e) **case-anvendelseskravet** (E14) — generell oppramsing gir ikke full pott.
- **Faktakontrakt:** spørreordtrappen; de seks sensorreglene; momentliste-metoden;
  retningsord-/grunnbegrep-hurtigtabell (partialtrykk, diffusjon høyt→lavt, primær vs.
  sekundær aktiv transport, agonist/antagonist, afferent/efferent, systole/diastole) —
  nok til å lese de første fagkapitlene.
- **Mekanismekjeder:** ingen.
- **Fritekst-momentlister:** samme mekanismespørsmål besvart på to nivåer — kort
  oppramsing (koster på «forklar») og riktig «forklar med egne ord»-momentliste — med
  margnotat om hvor poengene faller; en case-oppgave løst med og uten anvendelse (E14).
- **MC-/kortsvardrill:** spørreord-gjenkjenning; «hvilket fagbegrep/tall kreves her».
- **Typiske feil:** E12 (upresis omskriving), E13 (mangle tallverdi), E14 (case uten
  anvendelse), skrive essay der kortsvar kreves.
- **Kvote:** 12 quiz / 10 flashcards.

### Del 1 — Sirkulasjon

#### Kapittel 1.1: Hjertets oppbygning og hjertesyklus
**id:** `nih-thp100-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema.
- **Description:** Hjertets fire kamre og fire klaffer, systole/diastole, og
  hjertesyklusens fyllings- og utpumpingsfaser — grunnlaget for EKG og blodets vei.
- **Eksamensbelegg:** Del av sirkulasjon (tyngst, 6/6). Hjertets oppbygning, klaffer og
  hjertesyklus er fast fakta-/figurstoff. Sjangre: K (definisjon), F (hjertet/klaffer på
  figur), S. Prioritet: perfekt.
- **Faktakontrakt:** fire kamre (høyre/venstre **atrium** (forkammer), høyre/venstre
  **ventrikkel** (hjertekammer)); fire klaffer med plassering — **tricuspidalklaffen**
  (høyre AV), **bicuspidal-/mitralklaffen** (venstre AV), **pulmonalklaffen** (mot
  lungearterien), **aortaklaffen** (mot aorta) + veneklaffer; **systole** (kontraksjon/
  utpumping) vs. **diastole** (fylling/hvile); septum; klaffenes rolle (enveis blodstrøm).
  Norsk og latin.
- **Mekanismekjeder:** (1) hjertesyklus grovt: atriene fylles → AV-klaffene åpner →
  ventriklene fylles → ventrikkelsystole → AV-klaffene lukkes, semilunarklaffene åpner →
  blod pumpes ut → diastole/fylling igjen.
- **Fritekst-momentlister:** «Beskriv hjertets fire klaffer med plassering og forklar
  hva systole og diastole er» (K/S) — full pott krever alle fire klaffene korrekt
  plassert + systole/diastole-definisjonen.
- **MC-/kortsvardrill:** koble klaff til plassering (F); systole vs. diastole (K); atrium
  vs. ventrikkel.
- **Typiske feil:** E1 (blande klaffene / feil plassering); atrium/ventrikkel byttet.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 1.2: EKG — hjertets elektriske aktivitet
**id:** `nih-thp100-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-1-1`

- **Kapitteltype:** tema.
- **Description:** Sinusknuten som pacemaker, og hva P-, QRS- og T-utslagene på et EKG
  betyr, koblet til systole/diastole og klaffestatus — en fast figuroppgave (5/6).
- **Eksamensbelegg:** **EKG-tolkning 5/6** — gjenganger. Sett navn på P/QRS/T og forklar
  hendelsene, koble til systole/diastole og klaffestatus. Sjangre: F (EKG-kurve), K, M.
  Prioritet: perfekt.
- **Faktakontrakt:** **sinusknuten** (SA, pacemaker, egenrytme ~100/min `(verifiser)`);
  ledningsvei grovt (SA → AV → His → grener → Purkinjefibre); **P** = atriedepolarisering,
  **QRS** = ventrikkeldepolarisering, **T** = ventrikkelrepolarisering; kobling til
  syklus: QRS → ventrikkelsystole; klaffestatus i de ulike fasene (kort).
- **Mekanismekjeder:** (1) EKG-utslag koblet til mekanisk hendelse (P → atriene trekker
  seg sammen → QRS → ventriklene trekker seg sammen/systole → T → ventriklene slapper av);
  (2) elektrisk impuls gjennom ledningssystemet i rekkefølge.
- **Fritekst-momentlister:** «Sett navn på P, QRS og T på EKG-kurven og forklar hva hver
  representerer, og hvilken fase av hjertesyklusen de tilsvarer» (F+M) — full pott krever
  alle tre utslagene korrekt + koblingen til de-/repolarisering og systole.
- **MC-/kortsvardrill:** koble EKG-utslag til hendelse (F); hva er sinusknutens
  egenrytme (K); hvilket utslag er repolarisering.
- **Typiske feil:** E13 (feil/mangle egenrytmeverdi ~100/min); E7 (egenrytme vs.
  hvilepuls); blande T-utslaget med atriene.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 1.3: Regulering av hjertefrekvensen
**id:** `nih-thp100-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-1-2`

- **Kapitteltype:** tema (GJENGANGER 6/6).
- **Description:** Hvordan hjertefrekvensen reguleres — sinusknutens egenrytme og det
  autonome nervesystemets brems (n. vagus) og gasspedal (sympatikus + adrenalin). Emnets
  sikreste sirkulasjonsgjenganger (6/6).
- **Eksamensbelegg:** **Regulering av hjertefrekvens 6/6** — nesten garantert. Sinusknute
  egenrytme ~100, n. vagus/acetylkolin senker, sympatikus/noradrenalin + adrenalin øker.
  Sjangre: M (kjernen), K. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **sinusknutens egenrytme ~100 slag/min** `(verifiser)` (uten
  nervepåvirkning); **n. vagus** (parasympatikus) frigjør **acetylkolin** → senker
  frekvensen (derav hvilepuls < egenrytme); **sympatikus** frigjør **noradrenalin**, og
  **adrenalin** (binyremarg) → øker frekvensen og kontraktilitet; hvilepuls vs. egenrytme
  (E7); autonom balanse i hvile vs. arbeid.
- **Mekanismekjeder:** (1) hjertefrekvensregulering: sinusknute gir egenrytme ~100 →
  n. vagus (acetylkolin) bremser i hvile → ved arbeid øker sympatikus (noradrenalin) +
  adrenalin frekvensen; (2) hvorfor hvilepulsen er lavere enn egenrytmen (parasympatisk
  dominans i hvile).
- **Fritekst-momentlister:** «Forklar med egne ord hvordan hjertefrekvensen reguleres»
  (M) — full pott krever: egenrytme ~100 fra sinusknuten + n. vagus/acetylkolin senker +
  sympatikus/noradrenalin + adrenalin øker. Dette ER en toppgjenganger — modellsvaret
  skal speile sensorens momentliste.
- **MC-/kortsvardrill:** hvilken nerve/transmitter senker vs. øker frekvensen (M/K);
  hva er egenrytmen; hvorfor er hvilepuls lavere.
- **Typiske feil:** E7 (oppgi hvilepuls som egenrytme); E12 (mangle n. vagus/acetylkolin/
  noradrenalin-begrepene); E13 (mangle ~100-verdien).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.4: Blodåresystemet, kretsløpet og blodets vei
**id:** `nih-thp100-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp100-1-1`

- **Kapitteltype:** tema.
- **Description:** Blodåreveggens tre lag, kartypene, de to kretsløpene, og blodets vei
  gjennom hjerte og lunger med klaffene — huser en fast figuroppgave (sirkulasjonsdiagram
  A–G).
- **Eksamensbelegg:** Blodåreveggens tre lag og **blodets vei/lungekretsløpet med klaffer
  3/6** (figur A–G: høyre ventrikkel → lungearterie → lungekapillærer → lungevene →
  venstre ventrikkel → aorta → systemiske kapillærer). Sjangre: F (sirkulasjonsdiagram),
  M (blodets vei i rekkefølge), K, S. Prioritet: perfekt.
- **Faktakontrakt:** kartyper — arterier (bort fra hjertet, tykk elastisk vegg),
  **arterioler** (motstandskar), kapillærer (utveksling, ett cellelag), venoler, vener
  (klaffer); **blodåreveggens tre lag**: **tunica intima** (indre endotel), **tunica
  media** (glatt muskulatur — tykkest i arterier), **tunica externa/adventitia** (bindevev);
  systemkretsløp (venstre hjerte → kroppen, O₂-rikt i arteriene) vs. lungekretsløp (høyre
  hjerte → lungene, **O₂-fattig i lungearterien** — merk unntaket); blodets vei med
  klaffer (tricuspidal → pulmonal → lunge → bicuspidal → aorta). Norsk og latin.
- **Mekanismekjeder:** (1) blodets vei: v. cava → høyre atrium → tricuspidal → høyre
  ventrikkel → pulmonalklaff → lungearterie → lungekapillærer (gassutveksling) →
  lungevene → venstre atrium → bicuspidal → venstre ventrikkel → aortaklaff → aorta →
  systemiske kapillærer.
- **Fritekst-momentlister:** «Sett navn på strukturene A–G i sirkulasjonsdiagrammet og
  beskriv blodets vei» (F+M); «Beskriv blodåreveggens tre lag» (K).
- **MC-/kortsvardrill:** blodets vei i rekkefølge (M); hvor er blodet O₂-rikt/-fattig (K,
  lungearterie-fellen); koble kartype til funksjon (S).
- **Typiske feil:** E1 (feil klafferekkefølge); E11 (snu O₂-forholdet i lungekretsløpet —
  lungearterien fører O₂-*fattig* blod); tunica-lagene i feil rekkefølge.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.5: Blodstrøm, motstand, MAP og lokal regulering
**id:** `nih-thp100-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp100-1-4`

- **Kapitteltype:** tema (GJENGANGER 4/6).
- **Description:** Sammenhengen mellom blodstrøm, trykk og motstand (MAP = TPM × MV),
  complianse, og den lokale reguleringen som sender mer blod til arbeidende muskler
  (vasodilatasjon) — inkludert bicepscurl-casen.
- **Eksamensbelegg:** **Lokal regulering av blodstrøm 4/6** (vasodilatasjon ved ↑temp/
  ↑PCO₂/↑H⁺/↓PO₂), ofte som case (mer blod til arbeidende enn hvilende arm ved
  bicepscurl); MAP og complianse forekommer (complianse også som «siste spørsmål»-joker).
  Sjangre: M, C (bicepscurl), K (complianse/MAP). Prioritet: perfekt.
- **Faktakontrakt:** **MAP = TPM × MV** (middelarterietrykk = total perifer motstand ×
  minuttvolum) — føres i Nøkkelfakta-lista med påminnelse om at retningsforståelsen (ikke
  bare formelen) gir poeng; blodstrøm fra høyt til lavt trykk (E11); motstand avhenger av
  kardiameter (arteriolene = motstandskar); **lokal regulering / vasodilatasjon** ved
  **↑temperatur, ↑PCO₂, ↑H⁺, ↓PO₂** (arbeidende vev); **complianse** (ettergivelighet —
  hvor mye et kar/kammer utvider seg per trykkøkning).
- **Mekanismekjeder:** (1) lokal regulering: arbeidende muskel → ↑metabolske
  biprodukter (↑PCO₂/↑H⁺/↑temp, ↓PO₂) → lokal vasodilatasjon → arteriolene utvides → økt
  blodstrøm til den arbeidende muskelen; (2) hvorfor bicepscurl-armen får mer blod enn
  den hvilende (samme kjede anvendt på casen).
- **Fritekst-momentlister:** «Forklar hvorfor det går mer blod gjennom den arbeidende
  enn den hvilende armen ved bicepscurl» (C) — full pott krever den lokale
  vasodilatasjonskjeden KNYTTET til den arbeidende muskelen (E14); «Hva menes med
  complianse?» (K).
- **MC-/kortsvardrill:** hvilke lokale endringer gir vasodilatasjon (M); definer
  complianse (K); MAP = TPM × MV.
- **Typiske feil:** E14 (ramse opp vasodilatasjonsfaktorene generelt uten å knytte til
  den arbeidende muskelen); E11 (blodstrømretning); formel uten forståelse (MAP).
- **Kvote:** 16 quiz / 18 flashcards.

### Del 2 — Respirasjon

#### Kapittel 2.1: Ventilasjon — luftveiene og pustemekanikken
**id:** `nih-thp100-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema.
- **Description:** Luftveiene fra nese til alveole, forskjellen mellom bronkier og
  bronkioler, og den trykkdrevne ventilasjonen (diafragma → ↓trykk → innånding).
- **Eksamensbelegg:** Del av respirasjon (tyngst, 6/6). Ventilasjonsmekanikk og bronkier
  vs. bronkioler er faste. Sjangre: M (pustemekanikk), S (bronkier vs. bronkioler), K, F.
  Prioritet: perfekt.
- **Faktakontrakt:** luftvei nese/svelg → larynx → trakea → **bronkier** (brusk) →
  **bronkioler** (glatt muskel, ingen brusk) → **alveoler**; trykkdrevet ventilasjon —
  **diafragma** kontraherer → thoraxvolum øker → trykk synker → luft inn (innånding aktiv);
  utånding i hvile passiv (elastisk tilbaketrekning) `(verifiser)`; alveolen som
  gassutvekslingssted (stor overflate, tynn permeabel vegg, kort diffusjonsavstand, tett
  kapillærnett).
- **Mekanismekjeder:** (1) innånding: diafragma kontraherer → thoraxvolum øker → trykk i
  lungene synker → luft strømmer inn (fra høyt til lavt trykk, E11); (2) utånding i hvile
  (passiv, elastisk tilbaketrekning).
- **Fritekst-momentlister:** «Forklar med egne ord hvordan innånding skjer» (M) — full
  pott: diafragma → volum → trykk → luft inn; «Hva er hovedforskjellen på bronkier og
  bronkioler?» (S — brusk vs. glatt muskel).
- **MC-/kortsvardrill:** aktiv vs. passiv pustefase; bronkie vs. bronkiole (S); hvorfor
  egner alveolen seg for gassutveksling (K).
- **Typiske feil:** E11 (trykk-/luftstrømretning); bronkie/bronkiole byttet; tro utånding
  i hvile er aktiv.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.2: Gassutveksling og partialtrykk
**id:** `nih-thp100-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-2-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan O₂ og CO₂ diffunderer over alveole-kapillærmembranen langs
  partialtrykkgradienter — retningen (høyt→lavt) er selve poenget.
- **Eksamensbelegg:** Gassutveksling ved partialtrykksdrevet diffusjon er fast. Sjangre:
  M (diffusjonsretning), K (partialtrykk), F. Prioritet: perfekt.
- **Faktakontrakt:** **partialtrykk** (trykket den enkelte gassen bidrar med); diffusjon
  langs partialtrykkgradient (fra høyt til lavt partialtrykk, E11); **ytre respirasjon**
  (alveole↔kapillær: O₂ inn til blodet der pO₂ er høyest, CO₂ ut) vs. **indre respirasjon**
  (kapillær↔celle); Hb-metningskurvens grovform og **høyreforskyvning** ved ↑temp/↑PCO₂/
  ↑H⁺ (mer O₂ avgis til arbeidende vev) `(verifiser)`.
- **Mekanismekjeder:** (1) gassutveksling i lungene: alveolær pO₂ høy → O₂ diffunderer
  inn i blodet; blod-pCO₂ høyt → CO₂ diffunderer ut til alveolen → begge langs
  partialtrykkgradient; (2) O₂-avgivelse i arbeidende vev (lav pO₂ + høyreforskyvning →
  Hb slipper O₂).
- **Fritekst-momentlister:** «Gjør rede for gassutvekslingen i lungene» (M) — full pott:
  begge gasser + retning bestemt av partialtrykk (høyt→lavt).
- **MC-/kortsvardrill:** diffusjonsretning O₂/CO₂ (M); hva er partialtrykk (K); ytre vs.
  indre respirasjon.
- **Typiske feil:** E11 (feil diffusjonsretning); blande ytre/indre respirasjon.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.3: Gasstransport i blodet
**id:** `nih-thp100-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-2-2`

- **Kapitteltype:** tema (GJENGANGER 3/6).
- **Description:** Hvordan O₂ og CO₂ transporteres i blodet — med de faste prosentandelene
  som må sitte utenat, og hvorfor CO-forgiftning er farlig.
- **Eksamensbelegg:** **Gasstransport med prosentandeler 3/6** — O₂ (98,5 % Hb-bundet /
  1,5 % fysisk løst), CO₂ (70 % bikarbonat / 23 % Hb / 7 % løst). CO-forgiftning
  forekommer. Sjangre: K (prosenter, tall kritisk), M, S. Prioritet: perfekt.
- **Faktakontrakt:** **O₂-transport: ~98,5 % bundet til hemoglobin, ~1,5 % fysisk løst**
  `(verifiser)`; **CO₂-transport: ~70 % som bikarbonat (HCO₃⁻), ~23 % Hb-bundet, ~7 %
  fysisk løst** `(verifiser)`; hemoglobin binder O₂ (jern); **CO-forgiftning** — CO har
  mye høyere Hb-affinitet enn O₂, fortrenger O₂, ingen egen «reseptor»/varsel (E13 om
  tall).
- **Mekanismekjeder:** (1) CO₂-transport som bikarbonat (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻);
  (2) hvorfor CO er farlig (høyere Hb-affinitet → fortrenger O₂).
- **Fritekst-momentlister:** «Gjør rede for hvordan O₂ og CO₂ transporteres i blodet, med
  omtrentlige prosentandeler» (K/M) — full pott krever begge gassers fordeling med tall.
- **MC-/kortsvardrill:** prosentandelene for O₂/CO₂ (K, tall); hvorfor er CO farlig (M).
- **Typiske feil:** E13 (feil/mangle prosentandeler); E3 (tro hyperventilering øker O₂
  nevneverdig — Hb er allerede ~98,5 % mettet, kobling til Del 8).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.4: Respirasjonsregulering, hyperventilering og dykking
**id:** `nih-thp100-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-2-3`

- **Kapitteltype:** tema.
- **Description:** Hvordan pusten reguleres (kjemoreseptorer, H⁺/CO₂ som driver), og de to
  klassiske casene: hvorfor hyperventilering før dykk er farlig (shallow water blackout).
- **Eksamensbelegg:** Respirasjonsregulering fast; **hyperventilering + dykking (shallow
  water blackout)** er en «siste spørsmål»-joker. Sjangre: M (regulering), C (dykke-case),
  K. Prioritet: perfekt (dykke-casen deles med kap. 11.3-jokere).
- **Faktakontrakt:** respirasjonsregulering via **perifere kjemoreseptorer** som merker
  **H⁺/CO₂** (stigende CO₂/H⁺ → økt ventilasjon) `(verifiser)`; pO₂ sekundært; kobling
  til at Hb er ~98,5 % mettet ved normal pusting (E3); **shallow water blackout** —
  hyperventilering blåser ut CO₂ (senker pustedriven) men øker O₂ lite; under dykk faller
  O₂ mens CO₂-driven kommer for sent → besvimelse under vann.
- **Mekanismekjeder:** (1) respirasjonsregulering: ↑CO₂/↑H⁺ → kjemoreseptorer →
  respirasjonssenter → økt ventilasjon → CO₂ ut → normalisering; (2) shallow water
  blackout: hyperventilering → ↓CO₂ (svekker pustetrangen) → O₂ endres lite → dykk → O₂
  forbrukes → besvimelse før CO₂ trigger pust.
- **Fritekst-momentlister:** «Forklar hvorfor det er farlig å hyperventilere før et dykk
  på 5 m» (C) — full pott: CO₂ blåses ut → svekket pustetrang, men O₂ endres lite → O₂
  faller under dykk uten at CO₂ varsler → risiko for bevisstløshet under vann (E14: knytt
  til dykke-situasjonen).
- **MC-/kortsvardrill:** hva er viktigste pustedriv (M, CO₂/H⁺ ikke O₂); hvorfor er
  hyperventilering før dykk farlig (C).
- **Typiske feil:** E3 (tro hyperventilering «lader opp» mye ekstra O₂); E14 (dykke-case
  uten å knytte til situasjonen); oppgi pO₂ som primær driver.
- **Kvote:** 16 quiz / 18 flashcards.

### Del 3 — Nyrer

#### Kapittel 3.1: Nyrenes tre hovedprosesser
**id:** `nih-thp100-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema (GJENGANGER 6/6).
- **Description:** Nefronet og de tre hovedprosessene — filtrasjon, reabsorpsjon og
  sekresjon — med håndteringen av natrium og glukose. Nyredelens sikreste gjenganger (6/6).
- **Eksamensbelegg:** **Nyrenes tre hovedprosesser + håndtering av natrium og glukose
  6/6** — nesten garantert. Sjangre: M (tre prosesser), T (håndtering av stoffer i
  tabell), F (nefronfigur), K. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **nefronet** (funksjonell enhet); tre hovedprosesser: **filtrasjon**
  (i Bowmans kapsel/glomerulus), **reabsorpsjon** (særlig proksimale tubulus),
  **sekresjon** (distale tubulus); **glukose** filtreres 100 % og reabsorberes 100 % ved
  **sekundær aktiv transport** (nyrene styrer normalt IKKE blodsukker, E5); **natrium**
  reabsorberes ved **primær aktiv transport** (regulert av aldosteron ↑); vann følger
  osmotisk; kapillær-/filtrasjonstrykk grovt `(verifiser tallverdi)`.
- **Mekanismekjeder:** (1) urinproduksjon: filtrasjon i glomerulus → reabsorpsjon av vann/
  glukose/natrium i tubuli → sekresjon av avfallsstoffer → urin; (2) glukosehåndtering
  (filtreres 100 %, reabsorberes 100 % → normalt ingen glukose i urin).
- **Fritekst-momentlister:** «Forklar med egne ord nyrenes tre hovedprosesser og hvordan
  natrium og glukose håndteres» (M/T) — full pott: filtrasjon + reabsorpsjon + sekresjon
  navngitt og plassert + glukose 100/100 + natrium aktiv/aldosteron. Toppgjenganger —
  modellsvaret speiler sensorens momentliste.
- **MC-/kortsvardrill:** koble prosess til nefronavsnitt (M/F); håndteres glukose i
  urinen normalt (K, E5-vaksine); primær vs. sekundær aktiv (natrium/glukose).
- **Typiske feil:** E5 (tro nyrene regulerer blodsukker); E12 (mangle prosess-/
  transportbegrepene); reabsorpsjon/sekresjon byttet.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 3.2: Håndtering av stoffer i nyrene (tabelloppgaven)
**id:** `nih-thp100-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-3-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan små proteiner, glukose, natrium, vann og kalium håndteres i
  nefronet — den rene tabell-/listeoppgaven som kom inn i 2024/25.
- **Eksamensbelegg:** Tabelloppgave «hvordan håndteres følgende stoffer i nyrene: små
  proteiner / glukose / natrium / vann / kalium» (fra 2425, tendens mot rene lister).
  Sjangre: T (tabell), K. Prioritet: perfekt (tendens-tema).
- **Faktakontrakt:** **små proteiner** (filtreres i liten grad, reabsorberes/brytes ned —
  normalt lite i urin) `(verifiser)`; **glukose** (filtreres 100 %, reabsorberes 100 %);
  **natrium** (filtreres, reabsorberes aktivt, regulert av aldosteron); **vann** (følger
  osmotisk, finregulert av ADH i samlerør); **kalium** (både reabsorberes og sekreres,
  regulert av aldosteron) `(verifiser detalj)`.
- **Mekanismekjeder:** (1) vannreabsorpsjon styrt av ADH (kort — utdypes i 3.3); (2)
  aldosteron øker natriumreabsorpsjon (og kaliumsekresjon).
- **Fritekst-momentlister:** «Sett opp en tabell for hvordan små proteiner, glukose,
  natrium, vann og kalium håndteres i nyrene» (T) — full pott krever korrekt rad per
  stoff.
- **MC-/kortsvardrill:** koble stoff til håndtering (T); reguleres av ADH vs. aldosteron
  (K).
- **Typiske feil:** E5 (glukose «regulert» av nyren); blande ADH- (vann) og aldosteron-
  (natrium/kalium) rollene.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 3.3: RAAS og renin — blodtrykks- og væskeregulering
**id:** `nih-thp100-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-3-1`

- **Kapitteltype:** tema.
- **Description:** Renin-angiotensin-aldosteron-systemet (RAAS), ADH, og hvordan nyrene
  regulerer blodtrykk og væskebalanse — renin er også en «siste spørsmål»-joker.
- **Eksamensbelegg:** **RAAS/renin** fast; renin-produksjon og -effekt er en «siste
  spørsmål»-joker (deles med kap. 11.3). Sjangre: M (RAAS-kjeden), K (renin/ADH).
  Prioritet: perfekt.
- **Faktakontrakt:** **renin** fra **jukstaglomerulære celler** (frigjøres ved lavt
  blodtrykk/lav natrium); **angiotensinogen → angiotensin I → angiotensin II** (I→II i
  lungene via ACE) `(verifiser)`; **angiotensin II** → vasokonstriksjon + stimulerer
  **aldosteron** (binyrebark) → økt natrium-/vannreabsorpsjon → økt blodvolum/-trykk;
  **ADH** (fra hypofysen) → økt vannreabsorpsjon i samlerør (akvaporiner) → konsentrert
  urin; efferent arteriolekonstriksjon (kort).
- **Mekanismekjeder:** (1) RAAS: lavt BT → renin → angiotensin I → II → vasokonstriksjon +
  aldosteron → natrium/vann reabsorberes → BT opp; (2) ADH-effekten (ADH → akvaporiner →
  vann reabsorberes → konsentrert urin).
- **Fritekst-momentlister:** «Forklar hva renin er, hvor det produseres og hvilken effekt
  det har» (K/M) — full pott: jukstaglomerulære celler + utløser RAAS + ender i økt BT/
  natrium-vannretensjon.
- **MC-/kortsvardrill:** RAAS-leddene i rekkefølge (M); hvor produseres renin (K); ADH vs.
  aldosteron-effekt.
- **Typiske feil:** E12 (mangle renin/angiotensin/aldosteron-begrepene); blande ADH- og
  aldosteronrollene; feil rekkefølge i RAAS.
- **Kvote:** 16 quiz / 18 flashcards.

### Del 4 — Endokrinologi

#### Kapittel 4.1: Vann- vs. fettløselige hormoner
**id:** `nih-thp100-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema (GJENGANGER 5/6).
- **Description:** Den grunnleggende inndelingen av hormoner i vann- og fettløselige — med
  konsekvensene for transport, halveringstid og hvor reseptoren sitter. Endokrindelens
  sikreste gjenganger (5/6).
- **Eksamensbelegg:** **Vann- vs. fettløselige hormoner 5/6**. Transport (fritt vs.
  bundet), halveringstid (kort vs. lang), reseptorplassering (membran vs. intracellulær).
  Sjangre: S (sammenlign), M, T. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **vannløselige hormoner** (f.eks. peptid-/aminosyrehormoner) —
  transporteres **fritt** i blod, **kort** halveringstid, binder **reseptor på
  cellemembranen** (kan ikke passere membranen), virker via signalstoff/andre budbringere;
  **fettløselige hormoner** (steroider, tyroksin) — transporteres **bundet** til
  bæreproteiner, **lang** halveringstid, passerer membranen og binder **intracellulær/
  kjernereseptor**, påvirker gentranskripsjon.
- **Mekanismekjeder:** (1) hvorfor fettløselige hormoner har lang halveringstid og virker
  langsomt (bundet transport + genregulering); (2) hvorfor vannløselige må ha
  membranreseptor (kan ikke krysse lipidmembranen).
- **Fritekst-momentlister:** «Sammenlign vann- og fettløselige hormoner med tanke på
  transport, halveringstid og reseptorplassering» (S) — full pott krever alle tre aksene
  for begge typer. Toppgjenganger — momentliste-modellsvar.
- **MC-/kortsvardrill:** koble hormontype til transport/halveringstid/reseptor (S/T); hvor
  sitter reseptoren for et steroidhormon (K).
- **Typiske feil:** E12 (upresis på reseptorplassering); bytte om transport/halveringstid
  mellom typene.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 4.2: Hormontabellen — produksjonssted og hovedvirkning
**id:** `nih-thp100-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-4-1`

- **Kapitteltype:** tema.
- **Description:** Den faste tabelloppgaven «sett opp produksjonssted og hovedvirkning for
  følgende hormoner» — med den rullerende hormonlisten drillet fullstendig.
- **Eksamensbelegg:** Hormontabellen (produksjonssted + hovedvirkning) går igjen i alle
  sett, men **hormonlisten roterer** (Angiotensin II/Adrenalin/TSH/ADH → Aldosteron/
  Adrenalin/TSH-RH/Renin → 8-hormonsliste i 2425). Sjangre: T (tabell), K. Prioritet:
  perfekt (formen er garantert, innholdet roterer → dekk hele bredden).
- **Faktakontrakt:** samlet hormontabell med produksjonssted + hovedvirkning for de
  faste kandidatene: **aldosteron** (binyrebark; natrium-/vannreabsorpsjon), **adrenalin**
  (binyremarg; «fight/flight», ↑HF/blodsukker), **ADH** (hypofysen/produsert i
  hypothalamus; vannreabsorpsjon), **ANP** (hjerteatriene; ↓natrium/blodvolum), **tyroksin/
  T4** (skjoldbruskkjertel; ↑metabolisme), **TSH** (hypofysen; stimulerer
  skjoldbruskkjertel), **TSH-RH/TRH** (hypothalamus; stimulerer TSH), **renin** (nyre/
  jukstaglomerulære celler; utløser RAAS), **angiotensin II** (dannes i blod/lunge;
  vasokonstriksjon + aldosteron), **insulin/glukagon** (pancreas — utdypes i 4.3)
  `(verifiser produksjonssted der usikkert)`.
- **Mekanismekjeder:** ingen egen (tabellkapittel); kryssreferanse til RAAS (3.3) og
  hormontype (4.1).
- **Fritekst-momentlister:** «Sett opp produksjonssted og hovedvirkning for følgende
  hormoner: [8-hormonsliste]» (T) — full pott = korrekt rad per hormon.
- **MC-/kortsvardrill:** koble hormon til produksjonssted (T); koble hormon til
  hovedvirkning (T).
- **Typiske feil:** E12 (upresist produksjonssted, f.eks. «binyre» uten bark/marg);
  blande TSH (hypofyse) og TSH-RH/TRH (hypothalamus); ADH-produksjon vs. -frigjøring.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 4.3: Insulin, glukagon og diabetes
**id:** `nih-thp100-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-4-1`

- **Kapitteltype:** tema (GJENGANGER 5/6).
- **Description:** Blodsukkerreguleringen via insulin og glukagon fra bukspyttkjertelen,
  og forskjellen mellom diabetes type 1 og type 2.
- **Eksamensbelegg:** **Insulin/glukagon + diabetes type 1 vs. 2 5/6**. Sjangre: M
  (blodsukkerregulering), S (diabetes 1 vs. 2), K. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **pancreas** er både eksokrin (fordøyelsesenzymer) og endokrin
  (**Langerhanske øyer**); **insulin** fra **β-celler** → **senker blodsukker** (fremmer
  glukoseopptak via GLUT4, lagring som glykogen); **glukagon** fra **α-celler** → **hever
  blodsukker** (frigjør glukose fra lever); **diabetes type 1** = autoimmun ødeleggelse av
  β-celler → manglende insulinproduksjon; **diabetes type 2** = nedsatt insulinsensitivitet
  (ofte livsstil).
- **Mekanismekjeder:** (1) blodsukkerregulering: høyt blodsukker → insulin (β) → opptak/
  lagring → blodsukker ned; lavt blodsukker → glukagon (α) → glukose fra lever →
  blodsukker opp; (2) hvorfor type 1 og type 2 gir ulik behandling (manglende produksjon
  vs. nedsatt følsomhet).
- **Fritekst-momentlister:** «Forklar hvordan insulin og glukagon regulerer blodsukkeret»
  (M); «Hva er hovedforskjellen på diabetes type 1 og type 2?» (S) — full pott: autoimmun
  β-celleødeleggelse vs. nedsatt insulinsensitivitet.
- **MC-/kortsvardrill:** hvilken celle lager insulin vs. glukagon (K); hever/senker
  blodsukkeret (M); type 1 vs. 2 (S).
- **Typiske feil:** E8 (blande diabetes type 1/2); α/β-celler byttet; insulin/glukagon-
  effekt snudd.
- **Kvote:** 16 quiz / 18 flashcards.

### Del 5 — Nervesystemet

#### Kapittel 5.1: Nervesystemets inndeling og nervecellen
**id:** `nih-thp100-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema.
- **Description:** Nervesystemets anatomiske (CNS/PNS) og funksjonelle (somatisk/autonomt;
  sympatisk/parasympatisk) inndeling, nervecellens deler, og dendrittenes funksjon.
- **Eksamensbelegg:** Del av nervesystemet (tung, 6/6). Inndeling og nevronanatomi er fast
  fakta-/figurstoff. Sjangre: F (nevronets deler), K, S (CNS/PNS, somatisk/autonomt).
  Prioritet: perfekt.
- **Faktakontrakt:** **anatomisk inndeling**: sentralnervesystemet (CNS — hjerne/ryggmarg)
  vs. perifert (PNS); **funksjonell inndeling**: somatisk (viljestyrt) vs. autonomt
  (ufrivillig), autonomt delt i **sympatisk** og **parasympatisk**, samt sensorisk;
  nevronets deler (cellekropp/soma, **dendritter** — mottar signaler, akson — leder
  signaler, aksonterminaler); viktige hjernesentre (hypothalamus, medulla oblongata,
  pons, cortex — kort, kryssref. regulering). Norsk og latin der relevant.
- **Mekanismekjeder:** (1) signalflyt i nevronet (dendritt mottar → soma summerer → akson
  leder → terminal).
- **Fritekst-momentlister:** «Beskriv nervesystemets inndeling (anatomisk og funksjonell)»
  (K/S); «Hva er dendrittenes funksjon?» (K).
- **MC-/kortsvardrill:** plasser en funksjon i riktig systemgren (S); nevronets deler (F);
  hva gjør dendritter (K).
- **Typiske feil:** E12 (upresis systeminndeling); blande somatisk/autonomt.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 5.2: Hvilemembranpotensial og aksjonspotensial
**id:** `nih-thp100-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp100-5-1`

- **Kapitteltype:** tema.
- **Description:** Hvilemembranpotensialet (−70 mV), aksjonspotensialet (+30 mV) og
  likevektspotensialene — med de faste tallverdiene som må sitte utenat.
- **Eksamensbelegg:** Aksjonspotensial/hvilemembranpotensial og likevektspotensialer er
  faste (tallverdier premieres). Sjangre: M (AP-forløp), K (tallverdier — kritisk), F.
  Prioritet: perfekt.
- **Faktakontrakt:** **hvilemembranpotensial −70 mV** `(verifiser)` (negativt inne);
  **aksjonspotensial topp +30 mV** `(verifiser)`; **spenningsstyrte Na⁺-kanaler i
  aksonhalsen** åpner ved terskel (depolarisering, Na⁺ inn) → repolarisering (K⁺ ut);
  **likevektspotensialer**: **Na⁺ ~+60 mV, K⁺ ~−90 mV, Cl⁻ ~−70 mV** `(verifiser)`;
  alt-eller-intet, terskel; refraktærperiode (kort, kobling til 6.3).
- **Mekanismekjeder:** (1) aksjonspotensialet: hvilepotensial −70 mV → stimulus når
  terskel → spenningsstyrte Na⁺-kanaler åpner → depolarisering mot +30 mV → K⁺-kanaler
  åpner → repolarisering → tilbake mot hvile.
- **Fritekst-momentlister:** «Forklar med egne ord hvordan et aksjonspotensial oppstår,
  med tallverdier» (M) — full pott: −70 → terskel → Na⁺ inn → +30 → K⁺ ut →
  repolarisering, med verdiene.
- **MC-/kortsvardrill:** hvilke ioner beveger seg hvilken vei (M); hva er
  hvilemembran-/aksjonspotensialet i mV (K); likevektspotensialene (K).
- **Typiske feil:** E13 (feil/mangle mV-verdier); depolarisering/repolarisering byttet;
  feil ion for hver fase.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.3: Det autonome nervesystemet og ganglier
**id:** `nih-thp100-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-5-1`

- **Kapitteltype:** tema (GJENGANGER 5/6).
- **Description:** Det autonome nervesystemet — sympatikus og parasympatikus, gangliernes
  plassering og transmitterne — med den faste ganglielokaliserings-fellen.
- **Eksamensbelegg:** **Ganglier i autonomt NS 5/6**. Sympatisk grensestreng (nær
  ryggmargen) vs. parasympatisk (nær målorganet); transmittere. Sjangre: S (sympatikus/
  parasympatikus), K (ganglieplassering), M. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **sympatikus** («fight/flight») med **ganglier nær ryggmargen
  (grensestrengen)** — kort preganglionær, lang postganglionær fiber; **parasympatikus**
  («rest/digest») med **ganglier nær målorganet** — lang preganglionær, kort
  postganglionær; transmittere: preganglionært **acetylkolin** (begge); postganglionært
  **noradrenalin** (sympatikus) vs. **acetylkolin** (parasympatikus) `(verifiser)`.
- **Mekanismekjeder:** (1) sympatisk vs. parasympatisk banelengde og gangliebeliggenhet
  (hvorfor sympatiske ganglier ligger nær ryggmargen); (2) transmitterlogikken pre-/
  postganglionært.
- **Fritekst-momentlister:** «Beskriv hvor de sympatiske og parasympatiske gangliene
  ligger, og hvilke transmittere som brukes» (K/S) — full pott: begge plasseringer riktig
  vei + transmitterne.
- **MC-/kortsvardrill:** hvor ligger sympatiske vs. parasympatiske ganglier (K, E4-vaksine);
  hvilken transmitter hvor (M).
- **Typiske feil:** E4 (ganglieplassering feil vei); E12 (mangle grensestreng/
  målorgan-begrepene); transmittere byttet.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 5.4: Synapsen og det inhiberende internevronet
**id:** `nih-thp100-5-4` · **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-5-2`

- **Kapitteltype:** tema (GJENGANGER 5/6).
- **Description:** Den kjemiske synapsen, og det inhiberende internevronet (agonist/
  antagonist-kobling) med hyperpolarisering via K⁺/Cl⁻-kanaler — figuren med fire
  nerveceller A–D.
- **Eksamensbelegg:** **Inhiberende internevron 5/6** (figur med fire nerveceller A–D,
  agonist/antagonist, hyperpolarisering, K⁺/Cl⁻-kanaler). Sjangre: F (fire-nervecelle-
  figur), M (hemming), K. Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** kjemisk synapse kort (Ca²⁺ → transmitterfrigjøring → binding →
  postsynaptisk respons, kobling til muskelkjeden 6.1); **inhiberende internevron** —
  kobler agonist og antagonist slik at når agonisten aktiveres, hemmes antagonisten;
  **hyperpolarisering** skjer ved åpning av **K⁺- eller Cl⁻-kanaler** (negativt
  likevektspotensial: K⁺ ~−90 mV, Cl⁻ ~−70 mV) — IKKE Na⁺; eksitatorisk vs. inhibitorisk
  synapse.
- **Mekanismekjeder:** (1) inhiberende internevron: agonist aktiveres → internevron
  hemmer antagonisten → K⁺/Cl⁻-kanaler åpner → hyperpolarisering → antagonisten
  aktiveres ikke; (2) hvorfor hyperpolarisering krever K⁺/Cl⁻ og ikke Na⁺
  (likevektspotensialene).
- **Fritekst-momentlister:** «Forklar funksjonen til et inhiberende internevron og hvilke
  ionekanaler som gir hyperpolarisering» (M/F) — full pott: agonist/antagonist-hemming +
  K⁺/Cl⁻ (ikke Na⁺) + hyperpolarisering.
- **MC-/kortsvardrill:** hvilke kanaler gir hyperpolarisering (K, E6-vaksine); hva gjør et
  inhiberende internevron (M); navngi nervecellene A–D (F).
- **Typiske feil:** E6 (tro hyperpolarisering skjer via Na⁺); E12 (mangle agonist/
  antagonist); blande eksitatorisk/inhibitorisk.
- **Kvote:** 16 quiz / 18 flashcards.

### Del 6 — Muskel

#### Kapittel 6.1: Muskelkontraksjonskjeden
**id:** `nih-thp100-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp100-5-2`

- **Kapitteltype:** tema (GJENGANGER 6/6 — emnets sikreste enkeltoppgave).
- **Description:** Hele muskelkontraksjonskjeden fra motorisk forhorncelle til
  kontraksjon, ledd for ledd — den mest garanterte oppgaven i hele emnet (6/6), rettet
  momentbasert.
- **Eksamensbelegg:** **Muskelkontraksjonskjeden 6/6** — emnets sikreste. Ofte med
  eksplisitt start-/sluttpunkt («start i cellekroppen på en motorisk forhorncelle og
  avslutt med at kontraksjonen starter»). Fasit = momentliste, poeng per ledd. Sjangre: M
  (kjernen). Prioritet: perfekt (drilles hardest).
- **Faktakontrakt:** hele kjeden med presise ledd: motorisk forhorncelle → aksjonspotensial
  langs motoraksonet → **spenningsstyrte Ca²⁺-kanaler** i nerveenden → **acetylkolin**
  frigjøres i den nevromuskulære endeplaten → binder på muskelmembranen → **Na⁺** inn →
  aksjonspotensial i muskelcellen → sprer seg via T-tubuli → **Ca²⁺ frigjøres fra
  sarkoplasmatisk retikulum (SR)** → Ca²⁺ binder **troponin** → **tropomyosin** flyttes →
  bindingssteder på **aktin** frigjøres → **myosin**hoder binder → kraftslag → filamentene
  glir → kontraksjon `(verifiser rekkefølgedetaljer)`.
- **Mekanismekjeder:** (1) hele kontraksjonskjeden over — ett ledd = ett moment; (2)
  avslutning (Ca²⁺ pumpes tilbake til SR → avslapning).
- **Fritekst-momentlister:** «Forklar med egne ord muskelkontraksjonskjeden, fra
  cellekroppen på en motorisk forhorncelle til kontraksjonen starter» (M) — full pott =
  alle leddene i riktig rekkefølge (Ca²⁺→acetylkolin→Na⁺→SR→troponin/tropomyosin→aktin-
  myosin). Dette er DEN toppgjengangeren — modellsvaret speiler sensorveiledningens «de
  viktigste elementene som må være med».
- **MC-/kortsvardrill:** legg kjedens ledd i rekkefølge (M); hvilket ion utløser
  transmitterfrigjøring i nerveenden (K, Ca²⁺); hva gjør Ca²⁺ ved troponin (M).
- **Typiske feil:** E10 (hoppe over ledd — spenningsstyrte Ca²⁺-kanaler i nerveenden eller
  Ca²⁺ fra SR til troponin); E12 (mangle troponin/tropomyosin/aktin/myosin-begrepene);
  blande Ca²⁺-utløst transmitterfrigjøring (nerve) med Ca²⁺ fra SR (muskel).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 6.2: Muskelcelletypene
**id:** `nih-thp100-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-6-1`

- **Kapitteltype:** tema (GJENGANGER 4/6).
- **Description:** De tre muskelcelletypene — tverrstripet skjelettmuskel, hjertemuskel og
  glatt muskel — med lokalisering og hovedforskjeller, inkludert hjerte- vs. skjelettmuskel.
- **Eksamensbelegg:** **Muskelcelletyper 4/6** (tverrstripet/hjerte/glatt) + hovedforskjell
  hjerte- vs. skjelettmuskel (gap junction). Sjangre: S (sammenlign), T (celletype-tabell),
  K. Prioritet: perfekt.
- **Faktakontrakt:** **tverrstripet skjelettmuskel** (viljestyrt, tverrstripet, flerkjernet);
  **hjertemuskel** (ufrivillig, tverrstripet, **gap junctions** for elektrisk kobling,
  egen automatikk); **glatt muskel** (ufrivillig, ikke tverrstripet, i blodårevegger/
  indre organer); hovedforskjell hjerte vs. skjelett: gap junction + automatikk +
  refraktærperiode (kobling til 6.3).
- **Mekanismekjeder:** (1) hvorfor hjertemuskelen fungerer som en enhet (gap junctions
  sprer impulsen celle til celle).
- **Fritekst-momentlister:** «Nevn de tre muskelcelletypene og gi hovedforskjellen mellom
  hjerte- og skjelettmuskelceller» (S/T) — full pott: tre typer navngitt + gap junction/
  automatikk-forskjellen.
- **MC-/kortsvardrill:** koble celletype til lokalisering/kjennetegn (T); hva skiller
  hjerte- fra skjelettmuskel (S).
- **Typiske feil:** E12 (mangle gap junction-begrepet); blande celletypenes kjennetegn.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.3: Kraftregulering, refraktærperiode og tetanus
**id:** `nih-thp100-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-6-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan muskelkraften reguleres (i enkeltcelle og hel muskel), og
  hvorfor skjelettmuskel kan gi tetanus mens hjertet ikke kan (refraktærperioden).
- **Eksamensbelegg:** Kraftregulering, refraktærperiode og tetanus (skjelettmuskel ja /
  hjerte nei) forekommer. Sjangre: M (kraftregulering), K (tetanus/refraktær), S.
  Prioritet: perfekt.
- **Faktakontrakt:** kraftregulering i **enkeltcelle** (økt fyringsfrekvens → summasjon,
  ~3–5×) vs. **hel muskel** (rekruttering av flere **motoriske enheter** → flere 1000×)
  `(verifiser faktorer)`; **refraktærperiode** (kort i skjelettmuskel → ny stimulus mulig
  raskt → **tetanus** ved høy frekvens); **hjertemuskelen har lang refraktærperiode →
  kan IKKE tetanisere** (må slappe av mellom slag for å fylles); motorisk enhet (ett
  motornevron + dets muskelfibre).
- **Mekanismekjeder:** (1) kraftøkning i hel muskel via rekruttering av motoriske enheter;
  (2) hvorfor hjertet ikke kan tetanisere (lang refraktærperiode).
- **Fritekst-momentlister:** «Forklar hvordan muskelkraften kan reguleres» (M); «Hvorfor
  kan skjelettmuskel gi tetanus, men ikke hjertemuskel?» (K/S — refraktærperioden).
- **MC-/kortsvardrill:** enkeltcelle vs. hel muskel-kraftregulering (M); hvorfor
  tetaniserer ikke hjertet (K).
- **Typiske feil:** E12 (mangle motorisk enhet/refraktærperiode/tetanus-begrepene);
  blande enkeltcelle- og helmuskel-mekanismene.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 7 — Blod

#### Kapittel 7.1: Blodcellene, plasma og hematokrit
**id:** `nih-thp100-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema.
- **Description:** De tre blodcelletypene med funksjon, plasma, og hematokrit — inkludert
  hvorfor hematokrit stiger ved dehydrering.
- **Eksamensbelegg:** Blod (middels, 6/6, 1–2 oppg). Blodcelletyper og hematokrit er faste.
  Sjangre: C (blodcelletyper), K (hematokrit), T. Prioritet: kunne.
- **Faktakontrakt:** **erytrocytter** (røde, O₂-transport via hemoglobin, kjerneløse);
  **leukocytter** (hvite, forsvar: **monocytter**, **granulocytter**, **lymfocytter** —
  utdypes i 7.2); **trombocytter** (blodplater, hemostase); plasma (vann, proteiner,
  elektrolytter); **hematokrit** (andel røde blodceller av totalt blodvolum) — **stiger
  ved dehydrering** (mindre plasmavolum) `(verifiser normalnivå)`.
- **Mekanismekjeder:** (1) hvorfor hematokrit stiger ved dehydrering (plasmavolum synker,
  cellene uendret).
- **Fritekst-momentlister:** «Nevn de tre blodcelletypene og én funksjon for hver» (C);
  «Hva menes med hematokrit, og hvorfor stiger den ved dehydrering?» (K).
- **MC-/kortsvardrill:** koble celletype til funksjon (T); hva er hematokrit (K); effekt
  av dehydrering.
- **Typiske feil:** E12 (blande celletypefunksjoner); tro hematokrit synker ved
  dehydrering.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 7.2: Immunceller — lymfocytter, makrofager og klonseleksjon
**id:** `nih-thp100-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-7-1`

- **Kapitteltype:** tema.
- **Description:** De hvite blodcellenes rolle i immunforsvaret — lymfocytter og
  klonseleksjon, og makrofager fra monocytter.
- **Eksamensbelegg:** **Lymfocytter/klonseleksjon** og makrofager er gjengangere (utsatte
  sett gjenbruker fasitteksten nærmest ordrett). Sjangre: M (klonseleksjon), K, S.
  Prioritet: kunne.
- **Faktakontrakt:** **lymfocytter** (B- og T-celler; spesifikt/adaptivt forsvar);
  **klonseleksjon** — et antigen «velger ut» den lymfocytten med passende reseptor, som
  deler seg til en klon (spesifikk immunitet + hukommelse); **makrofager** dannes fra
  **monocytter** (fagocytose); medfødt (uspesifikt) vs. adaptivt (spesifikt) forsvar kort.
- **Mekanismekjeder:** (1) klonseleksjon: antigen møter lymfocytt med passende reseptor →
  aktivering → kloning → spesifikt forsvar + hukommelsesceller.
- **Fritekst-momentlister:** «Forklar prinsippet om klonseleksjon» (M) — full pott:
  antigen velger passende lymfocytt → kloning → spesifikk respons + hukommelse.
- **MC-/kortsvardrill:** hva er klonseleksjon (M); hvilken celle blir makrofag (K);
  spesifikt vs. uspesifikt forsvar (S).
- **Typiske feil:** E12 (mangle klonseleksjon-begrepet); blande monocytt/makrofag-
  relasjonen.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 8 — Syre-base-regulering

#### Kapittel 8.1: Hyperventilering og respiratorisk alkalose
**id:** `nih-thp100-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-2-3`

- **Kapitteltype:** tema (GJENGANGER 6/6).
- **Description:** Hvorfor hyperventilering gir respiratorisk alkalose (CO₂ ut → H⁺ ned →
  pH opp) — og hva pH-endringen heter. En av emnets sikreste gjengangere (6/6).
- **Eksamensbelegg:** **Hyperventilering → respiratorisk alkalose 6/6**, ofte med spørsmål
  om hva pH-endringen heter. Sjangre: M (mekanismen), K (navnet på forstyrrelsen).
  Prioritet: perfekt (drilles eksplisitt).
- **Faktakontrakt:** **bikarbonatlikevekten**: CO₂ + H₂O ⇌ H₂CO₃ ⇌ **H⁺ + HCO₃⁻**;
  **hyperventilering** → mer CO₂ pustes ut → likevekten forskyves → **H⁺ synker → pH
  stiger** → **respiratorisk alkalose**; normal blod-pH ~7,35–7,45 `(verifiser)`;
  respiratorisk (pust/CO₂-drevet) vs. metabolsk (stoffskifte-drevet) forstyrrelse.
- **Mekanismekjeder:** (1) hyperventilering → respiratorisk alkalose: ↑utpust av CO₂ →
  ↓CO₂ i blod → likevekt forskyves → ↓H⁺ → ↑pH → respiratorisk alkalose.
- **Fritekst-momentlister:** «Forklar hva som skjer med pH ved hyperventilering, og hva
  denne pH-endringen kalles» (M/K) — full pott: CO₂ ut → H⁺ ned → pH opp + navnet
  respiratorisk alkalose. Toppgjenganger — momentliste-modellsvar.
- **MC-/kortsvardrill:** hva skjer med pH ved hyperventilering (M); hva kalles endringen
  (K, respiratorisk alkalose); respiratorisk vs. metabolsk (S).
- **Typiske feil:** E2 (kalle hyperventilering «acidose»); E3 (tro O₂ øker mye); E12
  (mangle «respiratorisk alkalose»-begrepet).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 8.2: Metabolsk acidose og laktat
**id:** `nih-thp100-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-8-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan anaerob metabolisme over anaerob terskel gir laktat og
  metabolsk acidose — kontrasten til respiratorisk alkalose.
- **Eksamensbelegg:** **Metabolsk acidose/laktat** (anaerob metabolisme over anaerob
  terskel) forekommer, ofte kontrastert med respiratorisk forstyrrelse. Sjangre: M, K, S
  (metabolsk vs. respiratorisk). Prioritet: kunne.
- **Faktakontrakt:** **anaerob metabolisme** over **anaerob terskel** → **laktat/
  melkesyre**produksjon → **H⁺ øker → pH synker → metabolsk acidose**; kontrast:
  respiratorisk (pust/CO₂) vs. metabolsk (stoffskifte); bikarbonatbuffer motvirker (kort);
  kobling til treningsinnramming (høyintensiv aktivitet).
- **Mekanismekjeder:** (1) metabolsk acidose ved hardt arbeid: O₂-mangel → anaerob
  glykolyse → laktat + H⁺ → pH synker → metabolsk acidose.
- **Fritekst-momentlister:** «Forklar hvorfor hardt arbeid over anaerob terskel kan gi
  metabolsk acidose» (M); «Hva er forskjellen på respiratorisk og metabolsk syre-base-
  forstyrrelse?» (S).
- **MC-/kortsvardrill:** hva gir laktat metabolsk (M); respiratorisk vs. metabolsk (S);
  pH-retning ved laktatopphopning (K).
- **Typiske feil:** E2 (blande metabolsk acidose med respiratorisk forstyrrelse); pH-
  retning snudd.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 9 — Temperaturregulering

#### Kapittel 9.1: De fire varmeutvekslingsmåtene
**id:** `nih-thp100-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** tema (GJENGANGER 5/6).
- **Description:** De fire måtene kroppen utveksler varme på — ledning, strømning,
  stråling og fordamping — og hvordan de anvendes på kulde-/varmecase (utsatte sett åpner
  alltid her).
- **Eksamensbelegg:** **Fire varmeutvekslingsmåter 5/6**, ofte som **case** (bål i −25 °C,
  gå gjennom isen, fuktige klær). Utsatte sett åpner alltid med en temperatur-case.
  Sjangre: C (case — anvendelse kreves), K (de fire måtene), M. Prioritet: perfekt
  (drilles eksplisitt).
- **Faktakontrakt:** de fire måtene: **ledning** (konduksjon — direkte kontakt),
  **strømning** (konveksjon — via luft/væske i bevegelse, dominerer i kaldt vann),
  **stråling** (radiasjon — elektromagnetisk), **fordamping** (evaporasjon — svette,
  **eneste avgivelse når omgivelsene er varmere enn huden**); varme går fra varmt til
  kaldt (E11); huddgjennomblødning og svette som reguleringsverktøy.
- **Mekanismekjeder:** (1) hvorfor fordamping er eneste varmeavgivelse i varme omgivelser
  (de andre tre krever at omgivelsene er kaldere); (2) hvorfor strømning dominerer
  varmetapet i kaldt vann.
- **Fritekst-momentlister:** «Forklar de fire varmeutvekslingsmåtene og bruk dem på en
  person med fuktige klær foran et bål i kulde» (C) — full pott: alle fire navngitt +
  anvendt på casens konkrete kroppsdeler/situasjon (E14).
- **MC-/kortsvardrill:** navngi de fire måtene (K); hvilken dominerer i kaldt vann (K);
  hvilken er eneste avgivelse i varmt miljø (M).
- **Typiske feil:** E9 (upresise navn / «svette» uten å koble til fordamping); E14 (case
  uten anvendelse på situasjonen); E11 (varmeretning).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 9.2: Feber og temperaturens settpunkt
**id:** `nih-thp100-9-2` · **number:** 9.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-thp100-9-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan feber oppstår — pyrogener hever settpunktet i hypothalamus — og
  hvordan kroppen regulerer temperaturen mot dette settpunktet.
- **Eksamensbelegg:** Feber forekommer i temperaturbolken. Sjangre: M (feberforløp), K.
  Prioritet: kunne.
- **Faktakontrakt:** **hypothalamus** som temperatursenter (settpunkt); **feber** —
  **pyrogener** hever settpunktet → kroppen «tror» det er for kaldt → skjelving/
  vasokonstriksjon → temperatur stiger til nytt settpunkt; nedkjøling når settpunktet
  senkes igjen (svette/vasodilatasjon) `(verifiser)`.
- **Mekanismekjeder:** (1) feberforløpet: pyrogener → hevet settpunkt i hypothalamus →
  varmeproduksjon/-bevaring → temperatur stiger; (2) feberfall (settpunkt normaliseres →
  varmeavgivelse).
- **Fritekst-momentlister:** «Forklar hvordan feber oppstår» (M) — full pott: pyrogener →
  hevet settpunkt i hypothalamus → varmebevarende respons.
- **MC-/kortsvardrill:** hva hever settpunktet ved feber (M); hvilket senter styrer
  temperaturen (K, hypothalamus).
- **Typiske feil:** E12 (svare «hjernen» der svaret er hypothalamus); blande settpunkt-
  hevingen med selve temperaturstigningen.
- **Kvote:** 14 quiz / 14 flashcards.

### Del 10 — Celler

#### Kapittel 10.1: Organeller i muskelcellen
**id:** `nih-thp100-10-1` · **number:** 10.1 · **estimatedMinutes:** 40 · **prerequisites:** `nih-thp100-6-1`

- **Kapitteltype:** tema (NY fra 2024/25).
- **Description:** De viktigste organellene i en muskelcelle — cellekjerne, mitokondrier
  og sarkoplasmatisk retikulum — og hva de gjør. Ny temabolk (CELLER) fra 2024/25.
- **Eksamensbelegg:** **Celler 1/6** — ny temabolk (organeller i muskelcelle, oppgave 1 i
  2425). Trolig fast innslag framover. Sjangre: F (organeller på figur), K, T. Prioritet:
  kjenne (ny, dekkes fullstendig men kompakt).
- **Faktakontrakt:** **cellekjerne** (DNA/arvestoff, styrer proteinsyntese);
  **mitokondrier** (energiproduksjon via **oksidativ fosforylering** — «cellens
  kraftverk», mange i muskel); **sarkoplasmatisk retikulum (SR)** (Ca²⁺-lager, sentralt i
  muskelkontraksjon, kobling til 6.1); øvrige organeller kort (ribosomer, cytoplasma).
- **Mekanismekjeder:** (1) mitokondrienes rolle (oksidativ fosforylering → ATP til
  kontraksjon); (2) SR som Ca²⁺-lager (kobling til muskelkjeden).
- **Fritekst-momentlister:** «Nevn tre organeller i en muskelcelle og gi hovedfunksjonen
  til hver» (K/T) — full pott: cellekjerne + mitokondrier + SR med funksjon.
- **MC-/kortsvardrill:** koble organell til funksjon (T); hvor lagres Ca²⁺ i muskelcellen
  (K, SR); hva gjør mitokondriene (K).
- **Typiske feil:** E12 (mangle organell-navnene); blande mitokondrier/SR-funksjoner.
- **Kvote:** 14 quiz / 14 flashcards.

### Del 11 — Eksamenstrening

> Kombinert drill av de faste gjengangerne + jokerne + to komplette øvingssett i
> 25-oppgavers/100-poengsformatet. Alle oppgaver, figurtekster og case er NYSKREVNE.

#### Kapittel 11.1: Mekanisme-momentdrill (de faste gjengangerkjedene)
**id:** `nih-thp100-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** sjangerdrill (M — momentlister).
- **Description:** Samler alle de faste årsakskjedene som «forklar med egne ord»-oppgaver
  og driller dem som nummererte momentlister — der de fleste poengene ligger.
- **Eksamensbelegg:** Mekanismeforklaring er den dominerende sjangeren; rekkefølge og
  presise fagtermer avgjør (moment-for-moment). Prioritet: perfekt (meta). De faste
  kjedene: muskelkontraksjonskjeden (6/6), hjertefrekvensregulering (6/6), nyrenes tre
  prosesser (6/6), hyperventilering→respiratorisk alkalose (6/6), inhiberende internevron
  (5/6), aksjonspotensialet, RAAS, blodsukkerregulering, gassutveksling, lokal
  blodstrømregulering.
- **Innhold:** `text` **Momentliste-metoden** (nummererte ledd, rett rekkefølge, rett
  fagterm, tallverdier med); `example` full momentliste for 3–4 av de tunge kjedene
  (muskelkjeden, hjertefrekvens, nyrenes tre prosesser, hyperventilering) med delpoeng
  synlig og margnotat om hvor sensor gir/trekker; `exercise` = skriv momentlisten selv,
  sammenlign med fasit.
- **Typiske feil:** E10 (hull i muskelkjeden), E12 (mangle fagbegreper), E13 (mangle
  tallverdier).
- **Kvote:** 20 quiz / 10 flashcards.

#### Kapittel 11.2: Figur-, tabell- og kortsvardrill
**id:** `nih-thp100-11-2` · **number:** 11.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** sjangerdrill (F/T/K).
- **Description:** Tren de faste figurene (EKG, sirkulasjonsdiagram A–G, fire nerveceller
  A–D, nefron, organeller), tabelloppgavene (hormoner, nyrehåndtering) og de tallkrevende
  kortsvarene.
- **Eksamensbelegg:** Figurnavngiving (EKG, sirkulasjonsdiagram, inhiberende internevron-
  figur), tabeller (hormontabell rullerende, nyrehåndtering) og tallkortsvar (mV-verdier,
  gassprosenter, egenrytme) er faste. Prioritet: perfekt (meta).
- **Innhold:** `text` **Oppskrift** (les hele figuren; utfyll tabellrader per stoff/hormon;
  ha tallverdiene klare); `example` gjennomgått figurnavngiving (EKG P/QRS/T,
  sirkulasjonsdiagram A–G) og en fullstendig hormontabell; fast drilltabell: EKG-utslag,
  sirkulasjonsdiagram A–G, likevektspotensialer, gassprosenter, hormontabellen.
- **Typiske feil:** E13 (feil/mangle tallverdi), E1 (feil klaff/rekkefølge i diagrammet),
  E12 (upresist produksjonssted i hormontabellen).
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 11.3: «Siste spørsmål»-jokerne og case-drill
**id:** `nih-thp100-11-3` · **number:** 11.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp100-0-2`

- **Kapitteltype:** sjangerdrill (C — jokere + case).
- **Description:** De rullerende «siste spørsmål»-jokerne og anvendelses-casene drillet
  eksplisitt — complianse, shallow water blackout, renin, O₂-rikt/-fattig blod i
  lungearterien, samt de faste temperatur- og bicepscurl-casene.
- **Eksamensbelegg:** Hvert sett har en rullerende «siste spørsmål»-joker (complianse ved
  reising/sengeleie, shallow water blackout, renin, oksygenrikt/-fattig blod i
  lungearterien) og faste case (temperatur, bicepscurl, dykking); case krever anvendelse
  (E14). Prioritet: perfekt (meta).
- **Innhold:** `text` **Case-oppskrift** (knytt mekanismen til den konkrete situasjonen —
  E14); `example` gjennomgått jokersvar (complianse, shallow water blackout, renin,
  lungearterie-O₂) og et fullt case-modellsvar (temperatur/bål + bicepscurl) med
  anvendelsen markert; `exercise` = løs joker/case med anvendelse.
- **Typiske feil:** E14 (case uten anvendelse), E11 (O₂ i lungearterien snudd), E3
  (hyperventilering/O₂-misforståelsen ved dykk).
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 11.4: Øvingseksamen A (komplett 25-oppgavers/100-poengssett)
**id:** `nih-thp100-11-4` · **number:** 11.4 · **estimatedMinutes:** 90 · **prerequisites:** `nih-thp100-11-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet ordinært sett i gjeldende format: **25 oppgaver
  = 100 p**, 4 t, ingen hjelpemidler, åpner med SIRKULASJON, temafordelt etter §2.
- **Innhold:** temafordeling som et «typisk ordinært» sett (åpner sirkulasjon) — de faste
  temabolkene med 3–5 oppgaver på bæretemaene, 1–2 på middels, én jokerplass. Blanding av
  M/K/F/T/C/S. `collapsible` full fasit per oppgave som momentlister med delpoeng (speiler
  sensorveiledningens «for full score …»); `tip` **Sensorblikket** (poengføring, hva som
  skiller A fra E, hvilke gjengangere som er «gratispoeng»).
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 11.5: Øvingseksamen B (komplett 25-oppgavers/100-poengssett)
**id:** `nih-thp100-11-5` · **number:** 11.5 · **estimatedMinutes:** 90 · **prerequisites:** `nih-thp100-11-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette sett i **utsatt-profil** — åpner med en TEMPERATUR-case,
  med rotert hormonliste og en annen jokerplass, for å vise variasjonen uten å endre
  pensumbredden.
- **Innhold:** som 11.4, men utsatt-form (åpner med temperatur-case, gjenbruker de faste
  kjedene med annen innramming, annen hormonliste i tabelloppgaven, annen joker). Full
  momentliste-fasit + Sensorblikket med A/B/C/D/E-terskelbeskrivelse.
- **Kvote:** 8 quiz / 4 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 18 | 0 (dekkes av øvingseksamenene) |
| 1 | 5 | 86 | 98 | 4 |
| 2 | 4 | 64 | 72 | 4 |
| 3 | 3 | 48 | 54 | 4 |
| 4 | 3 | 48 | 56 | 4 |
| 5 | 4 | 66 | 74 | 4 |
| 6 | 3 | 48 | 54 | 4 |
| 7 | 2 | 28 | 32 | 4 |
| 8 | 2 | 30 | 34 | 4 |
| 9 | 2 | 30 | 32 | 4 |
| 10 | 1 | 14 | 14 | 4 |
| 11 | 5 | 70 | 38 | 0 (= 2 øvingseksamener) |
| **Sum** | **36** | **554 ✓ (≥500)** | **576 ✓ (≥500)** | **40 + 2 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12=22 / 8+10=18
- Del 1: 18+16+18+18+16=86 / 22+18+20+20+18=98
- Del 2: 16+16+16+16=64 / 18+18+18+18=72
- Del 3: 18+14+16=48 / 20+16+18=54
- Del 4: 16+16+16=48 / 18+20+18=56
- Del 5: 16+18+16+16=66 / 18+20+18+18=74
- Del 6: 18+16+14=48 / 20+18+16=54
- Del 7: 14+14=28 / 16+16=32
- Del 8: 16+14=30 / 18+16=34
- Del 9: 16+14=30 / 18+14=32
- Del 10: 14 / 14
- Del 11: 20+18+16+8+8=70 / 10+10+10+4+4=38
- **Totalt: 554 quiz / 576 flashcards.**

**Flashcard-profil (høy tetthet — faget er rendyrket pugg):** fakta-, normalverdi- og
mekanismekort til pugg utenat — struktur↔navn (norsk↔latin: tricuspidalklaffen ↔ høyre
AV-klaff; n. vagus ↔ vagusnerven), normalverdier/tall (hvilemembranpotensial −70 mV,
aksjonspotensial +30 mV, egenrytme ~100/min, O₂ 98,5/1,5 %, CO₂ 70/23/7 %,
likevektspotensialer Na⁺ +60/K⁺ −90/Cl⁻ −70 mV), hormon↔produksjonssted↔virkning
(aldosteron↔binyrebark↔Na⁺-reabsorpsjon), mekanismeledd↔rekkefølge (muskelkjeden:
Ca²⁺→acetylkolin→Na⁺→SR→troponin→aktin-myosin), og «vaksinekort» mot de faste feilene
(hyperventilering = alkalose IKKE acidose; sympatiske ganglier nær ryggmargen;
hyperpolarisering via K⁺/Cl⁻ ikke Na⁺; nyrene styrer IKKE blodsukker). Flashcard-tettheten
er bevisst HØYERE enn quiz-tettheten (576 > 554) fordi eksamen er hjelpemiddelfri og alt
skal memoreres — NOKUT-AFB-lærdommen om at ≥500 er et gulv, ikke et mål.
**Quiz-profil:** flervalg med nabobegrep-distraktorer (systole/diastole, depolarisering/
repolarisering, reabsorpsjon/sekresjon, insulin/glukagon, respiratorisk/metabolsk,
sympatikus/parasympatikus, arterie/vene, bronkie/bronkiole) + sekvensspørsmål
(muskelkjeden, blodets vei, RAAS, aksjonspotensialet, EKG↔syklus) + figurnavngiving med
distraktorer (EKG, sirkulasjonsdiagram, fire nerveceller) + case-gjenkjenning. Tungt
vektet fordi eksamen er uten hjelpemidler — quiz er kjernetreningen for gjengangerne.

---

## 4. Prøver

Fire prøver per organsystem-/grunnlagsdel (Del 1–10 = 40 prøver). Hver prøve speiler
eksamensformatet i miniatyr: en blanding av kortsvar/mekanisme (M/K), figur-/tabell
(F/T) og case (C) med momentliste-fasit. Omfang 20–40 min. Alle oppgaver NYSKREVNE.
Prøvekapittel-id `nih-thp100-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 11 har ingen egen prøve (Del 11s to øvingseksamener dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *Hjertet og EKG* — klaff↔plassering (F) + P/QRS/T-
kobling. (2) *Hjertefrekvensregulering* — «forklar hvordan HF reguleres» (M, 6/6-malen) +
egenrytme vs. hvilepuls (E7). (3) *Kretsløp og blodets vei* — sirkulasjonsdiagram A–G (F)
+ O₂-rikt/-fattig (lungearterie-fellen). (4) *Blodstrøm og lokal regulering* — bicepscurl-
case (C, E14) + MAP/complianse.

**Prøve-kvote Del 2:** 4 prøver: (1) *Ventilasjon* — «forklar innånding» (M) + bronkie vs.
bronkiole (S). (2) *Gassutveksling og -transport* — diffusjonsretning + prosentandelene
(K, E13). (3) *Respirasjonsregulering* — pustedriv (CO₂/H⁺) + shallow water blackout (C).
(4) *Blandet Del 2* — kortsvar-miks + «gjør rede for gassutvekslingen».

**Prøve-kvote Del 3:** 4 prøver: (1) *Nyrenes tre prosesser* — «forklar filtrasjon/
reabsorpsjon/sekresjon + natrium/glukose» (M, 6/6-malen). (2) *Håndtering av stoffer* —
tabelloppgaven (T) + E5-vaksine (nyrene styrer ikke blodsukker). (3) *RAAS og renin* —
RAAS-kjeden i rekkefølge (M) + «hva er renin» (K, joker). (4) *Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *Hormontyper* — vann- vs. fettløselige (S, 5/6-malen).
(2) *Hormontabellen* — produksjonssted + virkning (T, rullerende liste). (3) *Insulin/
glukagon og diabetes* — blodsukkerregulering (M) + diabetes 1 vs. 2 (S, E8). (4) *Blandet
Del 4*.

**Prøve-kvote Del 5:** 4 prøver: (1) *Aksjonspotensial* — AP-forløpet med mV-verdier (M/K,
E13). (2) *Autonomt NS og ganglier* — ganglieplassering (K, E4) + transmittere. (3)
*Inhiberende internevron* — fire-nervecelle-figur (F) + K⁺/Cl⁻-hyperpolarisering (E6). (4)
*Blandet Del 5*.

**Prøve-kvote Del 6:** 4 prøver: (1) *Muskelkontraksjonskjeden* — hele kjeden i rekkefølge
(M, 6/6-malen, hardest drill). (2) *Muskelcelletyper* — celletype-tabell (T) + hjerte vs.
skjelett (S). (3) *Kraftregulering og tetanus* — motoriske enheter (M) + hvorfor hjertet
ikke tetaniserer (K). (4) *Blandet Del 6*.

**Prøve-kvote Del 7:** 4 prøver: (1) *Blodcellene og hematokrit* — celletype↔funksjon (T)
+ hematokrit ved dehydrering (K). (2) *Immunceller og klonseleksjon* — «forklar
klonseleksjon» (M) + monocytt→makrofag. (3) *Blodets forsvar* — spesifikt vs. uspesifikt
(S) + lymfocytter. (4) *Blandet Del 7*.

**Prøve-kvote Del 8:** 4 prøver: (1) *Hyperventilering* — «pH-endring + navn» (M/K, 6/6-
malen, E2). (2) *Metabolsk acidose* — laktat over anaerob terskel (M) + respiratorisk vs.
metabolsk (S). (3) *Syre-base-oversikt* — bikarbonatlikevekten + pH-retninger (K). (4)
*Blandet Del 8*.

**Prøve-kvote Del 9:** 4 prøver: (1) *Varmeutveksling* — de fire måtene (K) + bål/kulde-
case med anvendelse (C, E14). (2) *Varme i vann* — strømning dominerer + fordamping i
varme (M). (3) *Feber* — feberforløpet (M) + hypothalamus som senter (K). (4) *Blandet
Del 9*.

**Prøve-kvote Del 10:** 4 prøver: (1) *Muskelcellens organeller* — organell↔funksjon (T/F).
(2) *Mitokondrier og SR* — energiproduksjon + Ca²⁺-lager (K, kobling til muskelkjeden). (3)
*Cellen som helhet* — cellekjerne/DNA + kortsvar. (4) *Blandet Del 10*.

### Komplette øvingseksamener (2 — kapitlene 11.4–11.5)

To nyskrevne 100-poengssett i gjeldende format (25 oppgaver, 4p-standard, 4 t, ingen
hjelpemidler): ett ordinært (åpner sirkulasjon) og ett utsatt (åpner temperatur-case),
med rotert hormonliste og ulik jokerplass, full momentliste-fasit og A/E-nivåbeskrivelse
per bolk. Begrunnelse: øvingseksamenene er studentens eneste helhetlige formatspeil og
trener tidsdisiplin + momenthøsting på tvers av de faste temabolkene.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — gjeldende form (4 t, ingen hjelpemidler, 25 oppgaver/4p/100 p,
   bokstavkarakter), kortsvarsdisiplinen, spørreordtrappen, temabolkene, ordinær/utsatt-
   rekkefølgen, gjengangerne (fra kap. 0.1–0.2).
2. **Organsystem-kart** — én side per system: kjernestruktur + hovedmekanisme(r) +
   gjenganger-score + typisk oppgaveformulering + farligste feil. Sortert etter vekt
   (sirkulasjon → respirasjon → nyrer → endokrin → nervesystem → muskel → …).
3. **Normalverdi- og faktabank** — alle tall samlet (hvilemembranpotensial −70 mV,
   aksjonspotensial +30 mV, egenrytme ~100/min, gassprosenter O₂ 98,5/1,5 %, CO₂
   70/23/7 %, likevektspotensialer Na⁺ +60/K⁺ −90/Cl⁻ −70 mV, blod-pH 7,35–7,45) —
   flashcard-speilet i prosaform.
4. **Gjenganger-/mekanismekjede-samlingen** — de ~15 faste kjedene som nummererte
   momentlister (muskelkontraksjonskjeden, hjertefrekvensregulering, nyrenes tre
   prosesser, hyperventilering→respiratorisk alkalose, RAAS, aksjonspotensialet,
   inhiberende internevron, blodsukkerregulering, gassutveksling/-transport, lokal
   blodstrømregulering, varmeutveksling, klonseleksjon) — med rekkefølge understreket
   (E10-vaksine).
5. **Latin↔norsk- og hormonlisten** — de faste anatomiske navnene + den fulle
   hormontabellen (produksjonssted + virkning) for hele den rullerende listen.
6. **Sensorreglene** — de seks kredittreglene + spørreordnivåene som huskeliste.
7. **Feilvaksinen** — de 14 typiske feilene (E1–E14) som énlinjers varsellamper, med E2
   (respiratorisk vs. metabolsk), E4 (ganglieplassering), E5 (nyrene og blodsukker), E6
   (K⁺/Cl⁻-hyperpolarisering) og E10 (hull i muskelkjeden) uthevet.
8. **Karakterkalibrering** — hva E-, C- og A-kandidaten gjør (E høster de faste
   gjengangerne; C leverer momentlistene med rett rekkefølge og fagbegreper; A behersker
   alle de tunge kjedene + case-anvendelsen fullstendig).
9. **Ukeplan** — 6-ukers og 2-ukers løp mot eksamen med prøve-innplassering (temadelprøver
   underveis; øvingseksamen A/B de siste to ukene).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives
   til `textbook-courses-hoyskole.ts`): id `nih-thp100`, title, `level: 'Høyskole'`, alle
   36 kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer spørreordtrappen, de seks sensorreglene, momentliste-metoden
   og grunnbegrep-hurtigreferansen som alle senere kapitler bygger på).
3. **Del 1 → 2 → 3 → 4 → 5 → 6** (bæretemaene, full momentdrill) → **Del 7 → 8 → 9**
   (middels) → **Del 10** (celler, ny). Prerequisites peker bakover.
4. **Del 11** til slutt (drill- og øvingseksamenskapitlene gjenbruker mekanismekjeder,
   figurer og case fra temadelene).
5. **Prøver** (`nih-thp100-<del>-prove`) etter at delens kapitler finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel →
text Forkunnskaper + collapsible Nøkkelfakta-/verdiliste → text Oversikt → definition
Kjernefakta (flashcard-kilden — toppnivå med title!) → theorem/text Mekanismekjeder →
example Modellsvar → warning Typiske feil → exercise ×6–10 → collapsible Repetisjon).
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-thp100-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 36 kapittel-id-er har eksisterende content-fil;
      `number` er del-basert («6.1», ALDRI lineær); prosareferanser bruker samme form
      («kap. 6.1»); prerequisites peker på eksisterende id-er (og bakover); `sectionNames`
      satt; narrativ-id-er registrert slik at toggle rendrer (verifiser med prod-server +
      curl at narrativ-ruter gir 200).
- [ ] **Fysiologisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle
      markerte detaljer (hvilemembranpotensial −70 mV, aksjonspotensial +30 mV,
      likevektspotensialer Na⁺+60/K⁺−90/Cl⁻−70 mV, egenrytme ~100/min, gassprosenter O₂
      98,5/1,5 % og CO₂ 70/23/7 %, blod-pH 7,35–7,45, transmittere pre-/postganglionært,
      angiotensin I→II i lungene, kalium-/proteinhåndtering i nyren, kraftreguleringsfaktorer,
      muskelkjede-rekkefølge, feberforløp) fagfellesjekkes i fase 6 mot standard
      fysiologipensum. INGEN oppdiktede tall.
- [ ] **Nivåkalibrering:** ingen treningsplanlegging/ernæringslære/prestasjonsoptimalisering
      som kjernestoff (fysisk aktivitet kun innramming); ingen molekylærbiologi,
      histologibilder eller biostatistikk (der ligger MED1100); latin kun i standardnavn
      (klaffer/kartyper/nerver), aldri selvstendig krav. Frisk kropp — ingen
      patofysiologi/farmakologi utover diabetes 1/2-skillet.
- [ ] **Kvotesum:** quiz ≥554 og flashcards ≥576 fordelt per kapittel som angitt (hardt
      minimum ≥500/≥500); 4 prøver per del for Del 1–10 (40) + 2 øvingseksamener;
      fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i
      staging, runtime stokker).
- [ ] **Gjengangerne drillet:** de ~15 gjengangerne (§2-tabellen) har momentbasert
      modellsvar i hjemkapitlet OG er dekket i Del 11-drillen; muskelkontraksjonskjeden
      (6/6), hjertefrekvensregulering (6/6), nyrenes tre prosesser (6/6) og
      hyperventilering→respiratorisk alkalose (6/6) drilles hardest.
- [ ] **Sensorreglene operasjonalisert:** momentliste-format på fritekst-modellsvar;
      tallverdier med (E13); case knyttet til situasjonen (E14); E5-vaksine (nyrene styrer
      ikke blodsukker) i 3.1/3.2; E4-vaksine (ganglieplassering) i 5.3; E6-vaksine (K⁺/Cl⁻)
      i 5.4; E2-vaksine (respiratorisk vs. metabolsk) i 8.1.
- [ ] **Opphavsrett:** alle oppgaver, figurtekster, case og øvingseksamener er NYSKREVNE
      — ingen formuleringer fra NIH-oppgavesett eller sensorveiledninger, ingen ordrette
      fasitmomenter. Anatomiske navn (norsk/latin), normalverdier og fysiologiske
      sammenhenger er standard fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker (kryssbok kun til NOKUT-AFB der en
      ekstern parallell finnes — ALDRI til ubygde NIH-søsken) + collapsible «Nøkkelfakta-
      og verdiliste» først i hvert kapittel; Eksamensvinkel-`tip` og Typiske feil-`warning`
      i hvert kapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet og merket.

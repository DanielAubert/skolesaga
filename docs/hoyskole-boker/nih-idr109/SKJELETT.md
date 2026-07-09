# Bokskjelett: IDR109 Treningslære (NIH) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (NIHs IDR109-arkiv 2021/22–2023/24: sju filer over tre studieår,
> fem komplette sett med sensorveiledning + to der ett har full veiledning; alle
> sensorveiledninger lest oppgave for oppgave). Alle oppgaver, tallverdier, casenavn og
> formuleringer i boka skal være NYSKREVNE (se §6). Treningsprinsipper, intensitetssoner,
> RM-områder, standard parameterintervaller og faguttrykk er alminnelig fagstoff og fritt
> å bruke.
>
> **Anvendt metode- og planleggingsfag — IKKE rent fysiologi/anatomi.** Sensor understreker
> gjentatte ganger at kandidatene «ikke har hatt inngående anatomi», og at **prinsippforståelse
> og faglig forsvarlige, begrunnede treningsparametere** veier tyngre enn detaljkunnskap.
> Boka skal derfor holde fysiologi-/anatomidybden lett og **lenke til fysiologiklyngen**
> (THP100/THP202/med1100/nokut-afb) for det underliggende «hvorfor», og legge egen tyngde på
> PLANLEGGING, øktdesign og intensitetsstyring. Tallverdier/parametere forfatteren er usikker
> på merkes `(verifiser)` for fagfellesjekk i fase 6 — mange er hentet fra sensorveiledninger
> som speiler kursets pensum i sitt år og skal samkjøres med gjeldende pensum. INGEN oppdiktede
> verdier.

---

## 1. Bokens identitet

- **Kurs-id:** `nih-idr109`
- **Tittel:** *IDR109 Treningslære*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «IDR109 Treningslære».
- **Arketype:** **anvendt metode-/planleggingsfag med flervalgs-faktabunn + case-basert
  øktplan** — en hybrid mellom (1) et **faktalag** testet med flervalg (MC): presise
  definisjoner av muskelaksjoner, styrke-/kondisjonsprinsipper, intensitetssoner, treningsprinsipper,
  og (2) et **anvendt planleggingslag** der kandidaten *lager et konkret treningsopplegg* med
  tallfestede parametere og begrunner det mot arbeidskrav og treningsprinsipper. Nærmeste
  forbilder: DNA-drofting (case-/anvendelseslogikk, momentbaserte kortsvar) + NOKUT-AFBs
  MC-faktadrill (presise definisjoner med nære distraktorer). Ingen ren DNA-mal passer; strukturen
  er skreddersydd som en **anvendt metodebok** og dokumentert i §2.
- **Kapittelantall:** 22 (Del 0: 2 · Del 1 Utholdenhet/intensitet: 6 · Del 2 Styrke/hurtighet: 5 ·
  Del 3 Planlegging: 5 · Del 4 Koordinasjon/bevegelighet/helse/psykologi: 2 · Del 5 Case &
  eksamenstrening: 2)
- **Estimert totaltid:** ~1330 minutter (~22,2 timer) fordelt per kapittel under.
- **Quiz totalt:** **560** (krav ≥500) · **Flashcards totalt:** **560** (krav ≥500)

**Pitch:** IDR109 er *Treningslære* ved NIH og handler om **prinsipper og metoder for å utvikle
fysiske egenskaper** — utholdenhet/kondisjon, styrke, hurtighet, bevegelighet og koordinasjon —
samt **treningsplanlegging** (arbeidskravs-/kapasitetsanalyse, målsetting, testing, prinsipper,
periodisering) og litt idrettspsykologi. Det avgjørende strukturvalget: hvert kjernetema må kunne
besvares på **to nivåer** — (1) som en presis begrepsdefinisjon på MC-nivå, og (2) omsatt til en
konkret **øktplan med tallfestede parametere** i «Hva–Hvordan–Hvorfor–Tid»-format. Den mest
gjenbrukte og mest poenggivende ferdigheten er å designe en **høyintensiv kondisjonsøkt** med
korrekt drag-/pause-/intensitetslogikk og en **maksimal-/eksplosivstyrkeøkt**, begrunnet mot
spesifisitet og idrettens arbeidskrav.

**Om eksamensformen `(verifiser)`.** Gjeldende emnebeskrivelse oppgir **samlet vurdering: muntlig
eksamen (60 %) + digital flervalgs-hjemmeeksamen (40 %)**. Arkivmaterialet dokumenterer derimot i
praksis en **2-timers skriftlig skoleeksamen uten hjelpemidler**, tredelt: **MC (fakta) + kortsvar
(momentbasert) + langsvar/case (øktplan)**. Vurderingsordningen har altså variert over tid, og
formatspesifikke detaljer (poengregel, hjelpemidler, muntlige kriterier) **må sjekkes mot det året
studenten faktisk skal opp** `(verifiser vurderingsordning)`. *Innholdskravene* er robuste på tvers
av format: MC-faktabunnen, de momentbaserte kortsvarene og case-øktplanen er den beste tilgjengelige
øvingsbanken for **både** MC-hjemmeeksamenen og den muntlige/anvendte delen (den rene case-eksamenen
H2024, mål → test → prinsipper → øktplan, speiler trolig muntlig-logikken `(verifiser)`).

**IDR109 er det ANVENDTE motstykket til NIHs fysiologiklynge.** Boka er STANDALONE (alt
eksamensrelevant stoff er dekket internt), men legger **forkunnskaps-lenker**, ikke gjentakelse, til
klyngen: grunnbegrepene VO₂maks, utnyttingsgrad, arbeidsøkonomi, aerob/anaerob energiomsetning,
HFmaks, laktat, muskelfibertyper og motoriske enheter lenkes til **THP202** (Treningsfysiologi) og
**med1100 / nokut-afb** (humanfysiologi). IDR109 bruker disse som *verktøy* i en anvendt trenings-
og planleggingssammenheng — **THP202 forklarer det fysiologiske «hvorfor» bak treningsresponsen;
IDR109 svarer på «hvordan planlegger og doserer jeg treningen».** Forfatteren skal derfor IKKE
utdype fysiologi/anatomi for seg selv (sensor krever eksplisitt ikke inngående anatomi), bare
akkurat det øktdesignen krever, og lenke resten til klyngen.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + de tre sjangrene) → Del 1 UTHOLDENHET/INTENSITET (tyngst) →
Del 2 STYRKE/HURTIGHET → Del 3 PLANLEGGING → Del 4 koordinasjon/bevegelighet/helse/psykologi
(lettere) → Del 5 case-galleri + øvingseksamener.** Fagdelene er ordnet etter frekvens/vekt i
arkivet; prerequisites peker bakover.

| Del | Bolk | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: MC, kortsvar og case-øktplan | 2 | perfekt (meta) | De tre sjangrene (MC-presisjon, momentbasert kortsvar, «Hva–Hvordan–Hvorfor–Tid»-case) og to-nivå-modul-tenkningen må etableres FØR fagstoffet. |
| 1 | utholdenhet | Intensitetsstyring og kondisjonstrening | 6 | perfekt | Emnets absolutte tyngdepunkt. Intensitetsstyring (4 verktøygrupper) ~4+ sett, høyintensiv øktdesign ~5 sett (hvert langsvar), intervall vs. kontinuerlig + hvorfor intervall + HFs begrensninger ~3+ sett, soner/80-20/polarisert + prestasjonsmodell ~3+ sett — bærer MC, kortsvar OG langsvar. |
| 2 | styrke | Styrke, biomekanikk og hurtighet | 5 | perfekt | Muskelaksjoner + hva bestemmer maks styrke ~4 sett (faste MC), vektarmer/dreiemoment (knebøy) ~4 sett, RM-områder ~3 sett, eksplosiv styrke/kraft×hastighet ~2 sett, spesifisitet + hurtighet fotball vs. 100 m ~2 kortsvar. |
| 3 | planlegging | Treningsplanlegging: arbeidskrav, mål, testing, prinsipper, periodisering | 5 | perfekt | Treningsprinsippene anvendt (2 tunge case + berøres ellers), arbeidskravs- vs. kapasitetsanalyse ~2 sett, SMART-mål + testing ~2 case + kortsvar, belastningsfaktorer/totalbelastning ~flere sett, periodisering. Bunnen for hele case-sjangeren. |
| 4 | tverr/psyk | Koordinasjon, bevegelighet, fysisk aktivitet/helse og idrettspsykologi | 2 | «må kunne»/«bør kjenne til» | Lavfrekvente, typisk enkelt-MC: aktivitetsanbefaling barn/unge ~2 sett, bevegelighet/koordinasjon/kompleksitet, mental trening/PETTLEP/selvbestemmelsesteori/motivasjonsklima ~2–3 sett. Dekkes solid men kompakt. |
| 5 | meta | Case-galleri og øvingseksamener | 2 | perfekt (meta) | 1 case-/øktplan-gallerikapittel (ferdige «Hva–Hvordan–Hvorfor–Tid»-modellbesvarelser, C- vs. A-versjon) + 1 komplett øvingseksamen (MC + kortsvar + case, tredelt mal). |

Rasjonale: kondisjons-/utholdenhetsbolken er den absolutte tyngdepunktbolken (bærer alle tre
sjangre i alle sett) og får flest kapitler og tyngst kvote. Styrke/hurtighet og planlegging er
nesten like tunge (faste MC + case-bunn). Koordinasjon/bevegelighet/helse/psykologi holdes kompakt
(lavfrekvent MC). Case-galleriet i Del 5 samler den faste langsvar-/muntlig-sjangeren i ferdige
modellbesvarelser — den mest direkte case-treningen som finnes.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: MC, kortsvar og case-øktplan |
| 1 | Intensitetsstyring og kondisjonstrening |
| 2 | Styrke, biomekanikk og hurtighet |
| 3 | Treningsplanlegging: arbeidskrav, mål, testing, prinsipper, periodisering |
| 4 | Koordinasjon, bevegelighet, fysisk aktivitet og idrettspsykologi |
| 5 | Case-galleri og øvingseksamener |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Type 1 — Flervalg (MC), dominerer i antall (~halvparten av poengene):**
`MC-DEF` presis definisjon blant nære distraktorer (skiller ofte på ett nøkkelord: konsentrisk =
*forkortes* vs. eksentrisk = *forlenges*). `MC-FAKTA` faktaverdi/tallområde (RM-område for mål,
% HFmaks, aktivitetsanbefaling, dose). `MC-MEK` årsak/effekt-påstand (hva bestemmer maks styrke;
kraft×hastighet=effekt). **Poengregel varierte:** V2022 hadde +2 riktig / −1 feil / 0 blankt
(gjetting straffes); fra V2023 oppgis MC samlet uten minuspoeng `(verifiser poengregel for aktuelt
år)`.

**Type 2 — Kortsvar (momentbasert):**
`KS-RED` avgrenset fagredegjørelse som treffer en eksplisitt momentliste (sensor deler poeng per
delmoment, f.eks. «a=2 p, b=3 p med 1 p per gruppe»). `KS-SAM` sammenligning (spesifisitet: hurtighet
fotball vs. 100 m; Cooper vs. 6×2 min — fart vs. puls). `KS-KLASS` klassifiseringssvar (de fire
intensitetsverktøygruppene med fordeler/ulemper per gruppe; 1 p per korrekt behandlet gruppe).

**Type 3 — Langsvar/case (øktplan, poengtyngst per oppgave):**
`CASE-ØKT` lage én konkret økt (bevegelsesform, kont./intervall, draglengde, antall drag, pause,
intensitet, verktøy) i «Hva–Hvordan–Hvorfor–Tid»-format. `CASE-KOMBI` kombinasjonsøkt (styrke +
kondisjon; prioriter primærmål, sekundær som tillegg). `CASE-PLAN` sammensatt plan-case (a–d): mål
(SMART) → tester → treningsprinsippene (hvordan + hvorfor per prinsipp) → øktplan(er). Dette er
H2024-formen og speiler trolig muntlig-logikken `(verifiser)`.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

`F1` forveksle muskelaksjonene (konsentrisk=forkortes / eksentrisk=forlenges / isometrisk=konstant)
· `F2` feil RM-/repetisjonsområde for målet (20–40 reps «for styrke»; blande maks/vekst/eksplosiv)
· `F3` ufullstendig intensitetsverktøy-svar (bare RPE eller bare puls i stedet for å *klassifisere*
alle gruppene med fordeler/ulemper — hver uteglemt gruppe koster poeng) · `F4` øktplan uten tall
(«intervall på høy intensitet» uten drag/antall/pause/intensitet) · `F5` manglende begrunnelse mot
arbeidskrav/spesifisitet (generisk økt som ikke gjenspeiler idrettens krav — C→A-aksen) · `F6`
behandle puls som presist mål ved høy intensitet (glemme pulsdrift, terreng-/bevegelsesformavhengighet,
at HF ikke reflekterer intensitet over VO₂max) · `F7` feil pauseforhold (like/for korte pauser
uavhengig av sone; relativ pause må øke med intensiteten) · `F8` anatomisk overfokus i vektarm-
oppgaven (detaljert muskelanatomi i stedet for dreiemoment/ytre vektarm og enkle tiltak) · `F9`
målsetting uten SMART-struktur eller uten realisme/prosessdelmål · `F10` hoppe over treningsprinsipp-
logikken «hvordan + hvorfor» (liste prinsippene uten å vise hvordan de ivaretas i planen og hvorfor)
· `F11` gjette på MC med negativ uttelling (i sett med −1 er «ønsker ikke svare» bedre enn ren
gjetting) `(verifiser at minuspoeng gjelder aktuelt år)`.

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Presise begreper på MC.** Ett feil nøkkelord = feil svar. Distraktorene er nære; presisjon
   avgjør. Der minuspoeng gjelder, premieres den som *vet* og straffes gjetting.
2. **Kortsvar dekker HELE momentlista.** For intensitetsverktøy kreves *klassifisering* (indre
   subjektiv / indre objektiv / ytre objektiv) med *konkrete* fordeler OG ulemper per gruppe —
   1 p per korrekt behandlet gruppe. Systematikk foran løs prat.
3. **Case: tallfestede, faglig forsvarlige parametere.** Draglengde, antall drag, pause, intensitet
   (% HFmaks / RPE), RM-område, sett — alt må ligge innenfor faglige rammer (se §6-tallene).
   **Flere svar er riktige** («krediteres dersom det angis en fornuftig sammensetning») — det er
   *metodelogikken*, ikke ett fasitsvar, som bedømmes.
4. **Begrunnelse mot arbeidskrav og spesifisitet (A/B-markøren).** Å knytte øktdesign til idrettens
   faktiske krav (fotball: korte drag/retningsforandring; 100 m: rene sprint; Birkebeiner: sykkel,
   kupert grus/sti, fellesstart) er selve differensieringen fra C til A.
5. **Riktig kobling intensitet ↔ pauseforhold ↔ sone.** Vis at relativ pause øker med intensiteten
   (I5 ~75–100 % av dragtid, I4 ~50–75 %, I3 ~0–25 %) og begrunn med restitusjonsbehov for å holde
   nok volum på høy intensitet.
6. **Skille fart fra puls.** Ved intervall «henger pulsen etter» ved dragstart; snittpuls kan bli
   lik selv om fart/pauser skiller øktene — fart og puls samvarierer ikke uten videre.
7. **Prosessdelmål i tillegg til hovedmål.** SMART-hovedmål *pluss* spesifikke prosessdelmål (øke
   VO₂max, styrke, arbeidsøkonomi) løfter målsettingsoppgaven.
8. **Prinsipp foran anatomi / navn.** Inngående anatomi forventes ikke; navn på tester/modeller er
   mindre viktig enn å forklare *hvorfor* metoden er relevant. Nedvarming kan utelates på en kort
   høyintensiv økt hvis valget begrunnes.

### Arketypetilpasning (dokumenterte valg og avvik fra DNA-malene)

1. **To-nivå-modul per kjernetema (hovedgrep).** Hvert kjernetema bygges som (1) et **faktalag på
   MC-nivå** (presis definisjon + typiske feildistraktorer) og (2) et **anvendt lag** som viser
   hvordan temaet omsettes til øktparametere/plan. Dette er bokas signatur og følger analysens
   §7-anbefaling direkte.
2. **«Parameterboks» per relevant kapittel (erstatter «Symbol- og formelliste»).** README-kravet
   omtolkes: hvert kapittel med tallfestede treningsparametere får en `collapsible` **«Parameterboks»**
   rett etter Forkunnskaper, som lister ALLE tallintervaller sensor faktisk bruker (drag/pause per
   sone, RM per mål, % HFmaks/RPE, sett/pauser, aktivitetsanbefaling). Disse boksene er den mest
   direkte case-treningen som finnes. Der kapitlet bruker symboler/formler (f.eks. prestasjonsmodellen)
   forklares alle variabler i samme boks. Et tall/begrep regnes ikke «forklart» fordi et tidligere
   kapittel forklarte det — boksen er per kapittel.
3. **«Øktplan-galleri» i «Hva–Hvordan–Hvorfor–Tid»-format.** Case-sjangeren drilles med ferdige
   modellbesvarelser (høyintensiv kondisjonsøkt løp + sykkel, kombinasjonsøkt, maks-/eksplosiv
   styrkeøkt), hver i en **C-versjon og en A-versjon** der forskjellen ligger i begrunnelse mot
   arbeidskrav/spesifisitet (Del 5.1).
4. **Todelt drill.** Quiz = MC-presisjon med nære distraktorer (dekker hele faktabunnen billig,
   inkludert de lavfrekvente temaene) + case-parameterkontroll; flashcards = definisjoner, RM-/
   sone-/pause-tabeller, treningsprinsipper og verktøyklassifisering til pugg utenat; `example`/
   `exercise` = momentbaserte kortsvar + case-øktplaner i «Hva–Hvordan–Hvorfor–Tid».
5. **Fysiologi/anatomi holdes lett — lenkes.** Forfatteren forklarer bare akkurat den fysiologien
   øktdesignen krever, og lenker VO₂max/energiomsetning/muskelfysiologi/HFmaks til THP202 og
   med1100/nokut-afb. Ingen inngående anatomi (sensor krever det eksplisitt ikke).
6. **Ingen oppdiktede verdier.** Parameterintervaller, RM-områder, prosenttall og soner forankres i
   sensorveiledningene/pensum; usikre detaljer merkes `(verifiser)`. Alle case-navn og tallverdier i
   oppgaver er NYSKREVNE (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilken bolk, form (MC-/KS-/CASE-sjangre), frekvens/vekt fra arkivet,
   og hva sensor ser etter (presise definisjoner; tallfestede begrunnede parametere; begrunnelse mot
   arbeidskrav/spesifisitet). Fylles fra Eksamensbelegg under — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker til fysiologiklyngen
   (THP202/med1100/nokut-afb for VO₂max/energiomsetning/muskelfysiologi — kun lenker, ingen
   gjentakelse), etterfulgt av `collapsible` **Parameterboks** (per kapittel) der kapitlet bruker
   tallfestede parametere eller symboler/formler.
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er, hvorfor/hvor ofte det testes, og på
   hvilke nivåer (MC-fakta ↔ anvendt case).
4. `definition` **Kjernebegreper** — definisjoner, RM-/sone-/pause-tabeller, treningsprinsipper i
   emnets terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `text` **Fra fakta til øktparametere** — hvordan temaet omsettes til konkrete parametere (drag/
   pause/intensitet/RM/sett), knyttet til arbeidskrav og spesifisitet.
6. `example` × 2–4 — første enkelt (MC-/definisjonsnivå), siste på EKSAMENSNIVÅ modellert på reell
   sjanger. Case-eksempler skrives som A-besvarelse i «Hva–Hvordan–Hvorfor–Tid»-tabell med tallfestede,
   begrunnede parametere; kortsvar-eksempler treffer eksplisitt momentliste.
7. `warning` **Typiske feil** — feilkodene (F1–F11) som gjelder temaet.
8. `exercise` × 6–10 — stigende, i kapitlets sjangre (blandet MC + kortsvar + case), alle med
   `solution` + `hints`. MC: 2–4 med nære distraktorer. Kortsvar: 1–3 momentbaserte. Case: 1–2
   øktplaner der relevant. Hver oppgave merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Case-galleri- og øvingseksamenskapitlene (Del 5) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = bolk + form/vekt + frekvens-score + sjangerkoder +
> prioritetsklasse. **Faktakontrakt** = definisjoner/parametere/tallintervaller som SKAL med
> (flashcard-kilden). **Parametere** = de tallfestede intervallene sensor bruker (case-fasit).
> **Momentlister** = hva `example`-blokkene (kortsvar/case) skal levere. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: MC, kortsvar og case-øktplan

#### Kapittel 0.1: Tre sjangre, ett fag — hvordan IDR109 testes
**id:** `nih-idr109-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hva IDR109 er (anvendt treningslære — utvikle fysiske egenskaper + planlegge
  trening, ikke rent fysiologi), hvordan det testes (MC-fakta + momentbaserte kortsvar + case-øktplan),
  hvordan poengene fordeler seg, og hvordan boka brukes som en to-nivå-metodebok (fakta ↔ anvendelse).
- **Eksamensbelegg:** Metakapittel (hele arkivet 2021/22–2023/24). Skal formidle: (a) **de tre
  sjangrene** (MC-presisjon, momentbasert kortsvar, «Hva–Hvordan–Hvorfor–Tid»-case) og hva hver
  krever; (b) at MC utgjør ~halve poengsummen og drilles på gjengangere, mens case-øktplanen er den
  poengtyngste enkeltoppgaven; (c) **to-nivå-modul-tenkningen** (hvert tema både som MC-definisjon og
  som øktparameter); (d) at **prinsippforståelse veier tyngre enn detaljanatomi** (sensor sier det
  direkte); (e) **eksamensformen har variert** — muntlig 60 % + digital MC-hjemmeeksamen 40 % (gjeldende
  emnebeskrivelse) vs. 2-timers tredelt skoleeksamen (arkivet); innholdskravene er robuste uansett
  `(verifiser vurderingsordning for aktuelt år)`. Prioritet: perfekt (meta).
- **Faktakontrakt:** sjangeroversiktstabellen (sjanger/hva kreves/hvordan poeng høstes/typisk vekt);
  kart til de fem fysiske egenskapene + planleggingsdelen (hvor ligger hvilket tema i Del 1–4); to-
  nivå-modul-prinsippet; de tre bærebjelke-øktene (høyintensiv kondisjon, maks-/eksplosiv styrke,
  kombinasjon).
- **Parametere:** ingen (kartkapittel) — men peker fram til parameterboksene i fagdelene.
- **Momentlister:** «Slik ser en oppgave ut i hver sjanger» — ett nyskrevet minieksempel per sjanger
  (en MC-DEF, en KS-KLASS, en CASE-ØKT) med hvordan poeng høstes.
- **Typiske feil:** tro faget er rent fysiologi/anatomi; svare på case med prat uten tall; gjette på
  MC der minuspoeng gjelder.
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 0.2: Eksamensteknikk — presis MC, momentliste-kortsvar og «Hva–Hvordan–Hvorfor–Tid»-case
**id:** `nih-idr109-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-idr109-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i de tre sjangrene — presis MC-avkryssing (med gjettestrategi
  ved minuspoeng), momentbasert kortsvar som treffer sensors delmomenter, og case-øktplanen bygget
  som en «Hva–Hvordan–Hvorfor–Tid»-tabell med tallfestede, begrunnede parametere — operasjonalisert
  fra sensor-kredittreglene.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2021→. Skal operasjonalisere
  kredittreglene: (a) **MC-presisjon** — ett nøkkelord avgjør; ved minuspoeng er «ønsker ikke svare»
  bedre enn gjetting `(verifiser)`; (b) **kortsvar dekker hele momentlista** og *klassifiserer*
  systematisk; (c) **case = tallfestede, begrunnede parametere** i «Hva–Hvordan–Hvorfor–Tid»; (d)
  **begrunn alltid mot arbeidskrav/spesifisitet** (A/B-markøren); (e) **koble intensitet↔pause↔sone**;
  (f) **skill fart fra puls**; (g) **prosessdelmål i tillegg til hovedmål**; (h) **prinsipp foran
  anatomi**. Prioritet: perfekt (meta).
- **Faktakontrakt:** de åtte kredittreglene; **«Hva–Hvordan–Hvorfor–Tid»-malen** (kolonner + oppvarming–
  hoveddel–avslutning); **momentliste-teknikken** (les hvor mange momenter oppgaven ber om, lever ett
  per moment); **klassifiseringsmalen** for intensitetsverktøy (tre grupper × fordel/ulempe); **MC-
  disiplinen** (les distraktorene på nøkkelord; gjettestrategi ved minuspoeng).
- **Parametere:** «Hva–Hvordan–Hvorfor–Tid»-tabellskjelettet + oppvarming ~5–10 min i aktuell
  bevegelsesform (moderat–høy mot slutten); nedvarming kan utelates på kort hard økt hvis begrunnet.
- **Momentlister:** samme case-oppgave besvart på to nivåer (C = økt uten begrunnelse/tall vs. A =
  tallfestet + begrunnet mot arbeidskrav) med margnotat om hvor poengene faller; samme intensitets-
  verktøy-kortsvar med og uten klassifisering.
- **Typiske feil:** `F3` (ufullstendig verktøysvar), `F4` (case uten tall), `F5` (uten begrunnelse),
  `F11` (gjette på MC med minuspoeng); svare på lavere nivå enn oppgaven ber om.
- **Kvote:** 22 quiz / 18 flashcards.

**Prøve-kvote Del 0:** 0 prøver (dekkes av øvingseksamenen i Del 5).

### Del 1 — Intensitetsstyring og kondisjonstrening (UTHOLDENHET — tyngdepunktet)

> Emnets tyngste bolk (bærer MC, kortsvar OG langsvar i alle sett). Forkunnskap lenkes til THP202
> (Treningsfysiologi: VO₂max-mekanismer, energiomsetning, HFmaks) og med1100/nokut-afb — ikke
> gjentatt. Sensor krever tallfestede, begrunnede øktparametere + korrekt intensitet↔pause↔sone-
> kobling + skille fart/puls. Alle case-tall NYSKREVNE.

#### Kapittel 1.1: Utholdenhetstrening — energibegreper og prestasjonsmodellen
**id:** `nih-idr109-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-idr109-0-2`

- **Kapitteltype:** tema (utholdenhet — konseptuelt rammeverk).
- **Description:** Prestasjonsmodellen (energimodellen) som verktøy: fart = energiomsetning ÷
  energikostnad, med VO₂max/utnyttingsgrad/anaerob kapasitet/arbeidsøkonomi som ledd — og hvordan
  vektingen endrer seg med varigheten. Rammeverket resten av kondisjonsdelen hviler på.
- **Eksamensbelegg:** Utholdenhet. **Prestasjonsmodellen ~⭐⭐⭐** (kortsvar V2022 + MC-berøring flere
  sett); **hva bestemmer prestasjon i gitt varighet ~⭐⭐** (V2022, V2023: 8 min → VO₂max viktigst;
  2 vs. 32 min ulik vekting); **prestere bedre uten fysiologisk endring ~⭐⭐** (H2022, H2023: bedret
  arbeidsøkonomi/utnyttingsgrad). Sjangre: MC-MEK, KS-RED. Prioritet: perfekt (rammeverk). Fysiologien
  bak (VO₂max/energiomsetning) LENKES til THP202 — her brukes den som verktøy.
- **Faktakontrakt:** **prestasjonsmodellen:** fart (m/s) = energiomsetning (J/s) ÷ energikostnad
  (J/m); energiomsetning ≈ (VO₂max × utnyttingsgrad) + anaerob energiomsetning; energikostnad ≈
  arbeidsøkonomi; **vekting med varighet:** kort test (~2 min) → VO₂max + anaerob kapasitet +
  arbeidsøkonomi; ~8 min → VO₂max viktigst; lang test (~32 min) → VO₂max + utnyttingsgrad +
  arbeidsøkonomi; **prestere bedre uten fysiologisk endring** = bedret arbeidsøkonomi (redusert ytre
  motstand) eller bedret utnyttingsgrad `(verifiser vektingen mot pensum)`.
- **Parametere:** prestasjonsmodellens ledd + enheter; varighet↔vekting-tabell (2 / 8 / 32 min).
- **Momentlister:** «Forklar prestasjonsmodellen og hvilke ledd som er viktigst for en 2-min vs. en
  32-min innsats» (KS-RED, systematisk per ledd); «Hvordan kan en utøver prestere bedre uten at
  fysiologien endres?» (KS-RED).
- **Typiske feil:** blande energiomsetning og energikostnad; tro VO₂max alltid er viktigst uansett
  varighet; grave i fysiologisk dybde i stedet for å bruke modellen som verktøy (`F8`-slekt).
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 1.2: Intensitetssoner I1–I5 og de to økt-kategoriene
**id:** `nih-idr109-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-idr109-1-1`

- **Kapitteltype:** tema (utholdenhet — sonerammeverk).
- **Description:** Intensitetssonene I1–I5 og hva de trener, de to hovedkategoriene økter (intervall
  vs. kontinuerlig arbeid), og hvorfor intervalltrening brukes (samle nok varighet på høy intensitet).
- **Eksamensbelegg:** Utholdenhet. **Intervall vs. kontinuerlig ~⭐⭐⭐** (3+ sett, ofte definisjon-MC);
  **hvorfor intervall ~⭐⭐⭐** (H2022, H2023, V2024); **intensitetssoner I1–I5 og hva de trener ~⭐⭐⭐**
  (H2022, V2023, V2024). Sjangre: MC-DEF, MC-MEK, KS-RED. Prioritet: perfekt.
- **Faktakontrakt:** **to hovedkategorier økter:** intervallarbeid (varierende intensitet, drag +
  pauser) vs. kontinuerlig arbeid (sammenhengende, relativt stabil intensitet); **hvorfor intervall:**
  for å samle nok *varighet* på høy intensitet (pausene muliggjør større totalvolum på høy intensitet);
  **intensitetssoner I1–I5:** de fleste aerobe prosesser påvirkes i større/mindre grad av trening i
  alle soner (ikke slik at én sone «bare» trener hjertet); over I5 trenes primært *anaerob* utholdenhet
  `(verifiser sonegrenser/HF-%-intervaller mot pensum)`.
- **Parametere:** I1–I5-oversikt (relativ intensitet, hva som trenes) `(verifiser %-intervaller)`;
  intervall vs. kontinuerlig — definisjonskjennetegn.
- **Momentlister:** «Definer intervall- og kontinuerlig arbeid og forklar hvorfor man velger intervall
  for høyintensiv trening» (KS-RED); «Hva trenes i de ulike sonene?» (KS-RED).
- **Typiske feil:** tro én sone bare trener hjertet / bare aerob; forveksle intervall og kontinuerlig;
  glemme volumargumentet for intervall.
- **Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 1.3: Høyintensiv øktdesign — drag, pause og intensitet per sone
**id:** `nih-idr109-1-3` · **number:** 1.3 · **estimatedMinutes:** 75 · **prerequisites:** `nih-idr109-1-2`

- **Kapitteltype:** tema (utholdenhet — kjernefagets tyngste øktdesign, toppgjenganger).
- **Description:** Den store gjengangeren: å designe en høyintensiv kondisjonsøkt med tallfestede
  parametere — draglengde, antall drag, pauselengde, intensitet (% HFmaks/RPE) — per sone (I3/I4/I5)
  og for kont. vs. intervall, i «Hva–Hvordan–Hvorfor–Tid»-format.
- **Eksamensbelegg:** Utholdenhet. **Øktdesign for høyintensiv kondisjon ~⭐⭐⭐** (5 sett — hvert
  langsvar), **pauseforhold vs. dragtid som funksjon av intensitet ~⭐⭐** (H2022 kortsvar). Sjangre:
  CASE-ØKT (poengtyngst), KS-RED (pauseforhold per sone). Prioritet: perfekt (delens tyngste). Sensor:
  relativ pause øker med intensiteten; parametere må være tallfestet OG begrunnet.
- **Faktakontrakt:** **draglengde × intensitet × pause (veiledende):** I3-økt: drag ~3–15 min, relativ
  pause kort (~0–25 % av dragtid), total høyintensiv arbeidstid ~30–60 min; I4-økt: langintervall
  1–6 min drag eller kortintervall (f.eks. 45/15 s), pause ~50–75 % av dragtid (2–4 min på lange),
  total ~20–40 min; I5-økt: pause ~75–100 % av dragtid, total ~15–25 min; **generisk høyintensiv
  case-økt:** drag ~2–8 min, ~90 % av HFmaks (RPE 7–9), pause ~1–2,5 min, 4–12 drag; kortintervall
  20–60 s med arbeid:hvile ≥1 (2:1 eller 3:1) `(verifiser alle intervaller mot pensum)`.
- **Parametere:** hele I3/I4/I5-tabellen + generisk case-økt over — dette er den viktigste
  parameterboksen i boka.
- **Momentlister:** «Sett opp en høyintensiv I4-intervalløkt i «Hva–Hvordan–Hvorfor–Tid»-format med
  draglengde, antall, pause og intensitet, begrunnet» (CASE-ØKT, A-nivå); «Hvordan endres pauseforholdet
  fra I3 til I5 og hvorfor?» (KS-RED).
- **Typiske feil:** `F4` (økt uten tall), `F7` (feil/like pauser uavhengig av sone), `F5` (uten
  begrunnelse), `F4`-slekt: glemme oppvarming/struktur.
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 1.4: Intensitetsstyring — de fire verktøygruppene
**id:** `nih-idr109-1-4` · **number:** 1.4 · **estimatedMinutes:** 70 · **prerequisites:** `nih-idr109-1-2`

- **Kapitteltype:** tema (utholdenhet — emnets mest gjennomgående tema).
- **Description:** Firedelingen indre subjektiv (RPE) – indre objektiv (HF/laktat/pust) – ytre
  subjektiv – ytre objektiv (fart/watt/distanse), med konkrete fordeler OG ulemper per gruppe — det
  temaet som går igjen som MC, kortsvar OG langsvar år etter år.
- **Eksamensbelegg:** Utholdenhet. **Intensitetsstyring: de fire verktøygruppene ~⭐⭐⭐** (4+ sett; MC,
  kortsvar OG langsvar — emnets mest gjennomgående tema). Sjangre: KS-KLASS (klassifiser + fordel/ulempe
  per gruppe; 1 p per gruppe), MC-DEF, CASE-ØKT (velg verktøy til økt). Prioritet: perfekt (delens
  bredeste gjenganger). Sensor: *klassifiser* alle gruppene — hver uteglemt gruppe koster poeng.
- **Faktakontrakt:** **indre subjektiv:** opplevd anstrengelse (RPE) — enkelt, utstyrsfritt, for alle
  og i grupper; men upresist, varierer med alder/kjønn/treningsstatus/dagsform; **indre objektiv:**
  HF, blodlaktat, pustefrekvens — bra på kontinuerlig lav–moderat intensitet; men HF upålitelig på høy
  intensitet (pulsdrift, forsinkelse, makspulsavhengig, ikke over VO₂max), laktat tolkes forsiktig over
  terskel, krever utstyr; **ytre subjektiv:** (nevnes som gruppe, lite brukt); **ytre objektiv:** fart/
  rundetid, watt, distanse — angir faktisk ytre arbeid, fanger raske svingninger; men krever utstyr/
  erfaring, måleusikkerhet (wattpedaler), tar ikke hensyn til dagsform.
- **Parametere:** 2×2-matrisen (indre/ytre × subjektiv/objektiv) med fordel/ulempe-liste per gruppe;
  RPE-skala (Borg) `(verifiser skala mot pensum)`; når passer hvilket verktøy (sone/øktkategori).
- **Momentlister:** «Klassifiser intensitetsstyringsverktøyene og gi fordeler og ulemper for hver
  gruppe» (KS-KLASS — systematisk, 1 p per gruppe); «Hvilket verktøy vil du bruke på en I5-intervalløkt
  og hvorfor?» (KS-RED/CASE, koble til `F6`).
- **Typiske feil:** `F3` (bare RPE eller bare puls i stedet for å klassifisere alle gruppene), `F6`
  (puls som presist mål ved høy intensitet).
- **Kvote:** 34 quiz / 34 flashcards.

#### Kapittel 1.5: HFs begrensninger og skillet fart–puls
**id:** `nih-idr109-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-1-4`

- **Kapitteltype:** tema (utholdenhet — den vanligste sensorfellen).
- **Description:** Hvorfor hjertefrekvens er et upresist mål på høy intensitet (pulsdrift, terreng-/
  bevegelsesformavhengighet, makspulsavhengig, kan ikke stige over VO₂max) og hvorfor fart og puls
  ikke samvarierer uten videre (pulsen «henger etter» ved dragstart).
- **Eksamensbelegg:** Utholdenhet. **HF som mål på høy intensitet — begrensninger ~⭐⭐⭐** (H2022, H2023,
  V2024); **skille fart fra puls (Cooper vs. 6×2 min) ~⭐⭐** (H2023 kortsvar). Sjangre: KS-SAM, MC-MEK,
  CASE-begrunnelse. Prioritet: perfekt (differensierer). Den hyppige felle-kilden `F6`.
- **Faktakontrakt:** HF er upålitelig på høy intensitet: **pulsdrift** (stiger ved samme belastning
  over tid), **forsinkelse** (henger etter ved intervallstart), **makspulsavhengig** (individuelt),
  **kan ikke stige over VO₂max** (over I5 er belastningen anaerob uten at HF fanger det), **avhenger av
  terreng/bevegelsesform**; ved intervall kan **snittpuls bli lik** selv om fart/pauser skiller øktene
  → fart/watt eller RPE mer treffsikkert på korte harde drag; på kontinuerlig lav–moderat er HF derimot
  et godt mål.
- **Parametere:** «når er HF pålitelig / upålitelig»-tabell (sone/øktkategori); anbefalt verktøy per
  intensitetsnivå.
- **Momentlister:** «To utøvere gjør en Coopertest og en 6×2 min-økt med samme snittpuls — forklar
  hvorfor pulsen kan bli lik selv om øktene skiller seg, og hvilket verktøy du heller ville brukt»
  (KS-SAM, skill fart/puls); «Hvorfor er HF et dårlig mål over VO₂max?» (KS-RED).
- **Typiske feil:** `F6` (puls som presist mål ved høy intensitet); tro fart og puls alltid samvarierer;
  glemme pulsdrift/forsinkelse.
- **Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 1.6: 80/20-regelen, polarisert trening og treningsdosen
**id:** `nih-idr109-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-1-2`

- **Kapitteltype:** tema (utholdenhet — treningsfordeling og dose).
- **Description:** Hvordan utholdenhetstrening fordeles over tid (80/20-regelen, polarisert trening)
  og hva som utgjør den totale treningsdosen (frekvens × intensitet × varighet, + utmattelse og
  totalbelastning).
- **Eksamensbelegg:** Utholdenhet/planlegging. **80/20-regelen / polarisert trening ~⭐⭐** (H2022:
  80/20, V2023: polarisert); **treningsdose/total belastning ~⭐⭐⭐** (går igjen som MC «total dose» +
  bunn for planlegging). Sjangre: MC-DEF, MC-FAKTA, KS-RED. Prioritet: perfekt (dose) + «må kunne»
  (80/20). Merk: totalbelastning-temaet forankres her og gjenbrukes i Del 3.3.
- **Faktakontrakt:** **80/20-regelen:** ~80 % av treningstiden på rolig intensitet, ~20 % på høy;
  **polarisert trening:** mye rolig + litt hardt, lite i mellomsonen, gjennom året; **total «dose»** =
  frekvens × intensitet × varighet; **faktorer i treningsbelastning:** intensitet, varighet, hyppighet
  (+ utmattelsesgrad); **totalbelastning** = trening + jobb/skole/andre aktiviteter + søvn/hvile/ernæring
  `(verifiser 80/20-fordelingen mot pensum)`.
- **Parametere:** 80/20-fordeling; dose-formel (frekvens × intensitet × varighet); belastningsfaktor-
  liste (intern i økt + over periode).
- **Momentlister:** «Forklar 80/20-regelen og polarisert trening og hvorfor de brukes» (KS-RED); «Hvilke
  faktorer bestemmer treningsbelastningen, og hva mer inngår i totalbelastningen?» (KS-RED — koble til
  Del 3.3).
- **Typiske feil:** forveksle 80/20 og polarisert; glemme utmattelse/totalbelastning utenfor trening;
  tro dose bare handler om intensitet.
- **Kvote:** 26 quiz / 28 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-idr109-1-prove`, chapterNumber `1.P`): (1) *Soner og øktkategorier*
— MC-DEF intervall/kontinuerlig + KS-RED hvorfor intervall + sonefakta. (2) *Høyintensiv øktdesign
(toppoppgaven)* — CASE-ØKT I4-økt i «Hva–Hvordan–Hvorfor–Tid» med tallfestede, begrunnede parametere +
KS pauseforhold per sone. (3) *Intensitetsstyring* — KS-KLASS fire verktøygrupper (fordel/ulempe per
gruppe) + MC-DEF verktøyklassifisering. (4) *HFs begrensninger og prestasjonsmodellen* — KS-SAM fart vs.
puls + KS-RED prestasjonsmodell/varighetsvekting. Hver prøve blander MC-presisjon og tallfestet, begrunnet
case-/kortsvar med momentliste-fasit. Omfang 20–40 min. Prøvekapittel-id `nih-idr109-1-prove`,
chapterNumber `1.P` (jf. BYGGEKONTRAKT).

### Del 2 — Styrke, biomekanikk og hurtighet (STYRKE/HURTIGHET)

> Nest tyngste bolk (faste MC + case-styrkeøkt). Forkunnskap lenkes til THP202 (muskelfysiologi,
> fibertyper, motoriske enheter) og med1100/nokut-afb — ikke gjentatt. Sensor krever presise
> muskelaksjons-/RM-definisjoner (MC) + dreiemoment-forståelse foran anatomi + tallfestet styrkeøkt.
> Alle case-tall NYSKREVNE.

#### Kapittel 2.1: Muskelaksjoner, agonist/antagonist og hva muskler styres av
**id:** `nih-idr109-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-0-2`

- **Kapitteltype:** tema (styrke — grunnbegrepene, faste MC).
- **Description:** De tre muskelaksjonene (konsentrisk = forkortes, eksentrisk = forlenges, isometrisk
  = konstant lengde), agonist/antagonist, og at muskler styres av nervesystemet via motoriske enheter
  × fyringsfrekvens — den reneste MC-faktabunnen i styrkedelen.
- **Eksamensbelegg:** Styrke. **Muskelaksjoner ~⭐⭐⭐** (4 sett, klassisk MC-felle på ett nøkkelord);
  **hva muskler styres av / motoriske enheter + fyringsfrekvens ~⭐⭐** (H2022, H2023, V2023); **agonist/
  antagonist ~⭐⭐** (V2023, H2023). Sjangre: MC-DEF (dominerer), MC-MEK. Prioritet: perfekt (faste MC).
  Fibertype-/muskelfysiologidybden LENKES til THP202.
- **Faktakontrakt:** **konsentrisk** (muskelen forkortes), **eksentrisk** (forlenges), **isometrisk**
  (konstant lengde); **agonist** = hovedmuskel i bevegelsen, **antagonist** = motsatt virkning; **kraft
  i muskelgruppe** = antall rekrutterte motoriske enheter × fyringsfrekvens på nervesignalet; muskler
  styres av **nervesystemet**.
- **Parametere:** ingen tallparametere — men definisjonstabell muskelaksjon↔kjennetegn (kjernefacit for
  MC-fella).
- **Momentlister:** «Definer de tre muskelaksjonene med ett kjennetegn hver» (KS-RED/MC-fasit); «Forklar
  forskjellen agonist/antagonist med et øvelseseksempel» (KS-RED).
- **Typiske feil:** `F1` (forveksle muskelaksjonene — minimal ordforskjell); blande agonist/antagonist;
  tro muskler «styrer seg selv» uten nervesystemet.
- **Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 2.2: Hva bestemmer maksimal styrke — og muskelvekst-stimuli
**id:** `nih-idr109-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-idr109-2-1`

- **Kapitteltype:** tema (styrke — determinantene, faste MC).
- **Description:** Hva som bestemmer maksimal styrke (viktigst: muskelens tverrsnitt; også aktiverings-
  grad, vektarmer, fibertype) og de to hovedstimuliene for muskelvekst (mekanisk drag + metabolsk
  stress).
- **Eksamensbelegg:** Styrke. **Hva bestemmer maksimal styrke ~⭐⭐⭐** (V2022, V2023, V2024 — «tverrsnitt
  viktigst» er klassisk MC); **to hovedstimuli for muskelvekst ~⭐⭐** (H2023). Sjangre: MC-MEK, MC-DEF,
  KS-RED. Prioritet: perfekt (fast MC). Fibertype-/hypertrofimekanismen LENKES til THP202 — her holdes
  den på anvendt nivå.
- **Faktakontrakt:** **hva bestemmer maksimal styrke:** muskelens tverrsnitt (viktigst), grad av
  muskelaktivering, indre/ytre vektarmer, fibertypesammensetning; **to hovedstimuli for muskelvekst:**
  mekanisk drag + metabolsk stress; **forventet fremgang utrent nybegynner:** ~30–40 % i 1RM over ~12
  uker `(verifiser prosenttall/tidsvindu mot pensum)`.
- **Parametere:** determinant-rangering (tverrsnitt først); nybegynner-fremgang ~30–40 % / 12 uker.
- **Momentlister:** «Hva bestemmer maksimal styrke, og hva er viktigst?» (KS-RED, rangert); «Hvilke to
  stimuli driver muskelvekst?» (KS-RED).
- **Typiske feil:** tro aktiveringsgrad/fibertype er viktigst i stedet for tverrsnitt; glemme ett av de
  to vekststimuliene; overdrive fysiologisk dybde (`F8`-slekt — lenk til THP202).
- **Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 2.3: Vektarmer og dreiemoment i øvelsesanalyse (knebøy-caset)
**id:** `nih-idr109-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `nih-idr109-2-2`

- **Kapitteltype:** tema (styrke/biomekanikk — case-gjenganger).
- **Description:** Dreiemoment og ytre vektarm i øvelsesanalyse, illustrert med knebøy: hvordan
  kroppsbygning (lange bein / kort rygg) øker den ytre vektarmen og ryggbelastningen, og hvilke enkle
  tiltak som reduserer den — prinsipp foran anatomi.
- **Eksamensbelegg:** Styrke/biomekanikk. **Vektarmer/dreiemoment i øvelsesanalyse ~⭐⭐⭐** (4 sett;
  knebøy-caset, kortsvar V2022 + MC ellers). Sjangre: KS-RED (analyse + tiltak), MC-MEK. Prioritet:
  perfekt. Sensor: det viktigste er *forståelsen* av at belastningen øker nederst i ryggsøylen og
  hvordan den reduseres — **ikke inngående anatomi** (`F8`).
- **Faktakontrakt:** **ytre vektarm** = avstand fra kraftens tyngdelinje til rotasjonspunktet
  (hofteleddet); lange bein / kort rygg → mer horisontal rygg i bunnposisjon → **lengre ytre vektarm →
  større ytre dreiemoment → mer belastning på ryggstrekkerne**; **tiltak:** rettere rygg i bunn,
  hælforhøyning, bredere stand / tær utover, evt. frontbøy — alt reduserer den ytre vektarmen til
  hofteleddet; sentrale begreper: vektarm/momentarm, tyngdelinje, indre/ytre dreiemoment.
- **Parametere:** ingen tallparametere — men tiltak-liste (rettere rygg / hælforhøyning / bredere stand
  / frontbøy) og begrepsliste (vektarm/dreiemoment/tyngdelinje).
- **Momentlister:** «Analyser hvorfor en utøver med lange lårbein får stor ryggbelastning i knebøy, og
  foreslå tiltak» (KS-RED — prinsipp + tiltak, ikke anatomi); «Hva menes med ytre vektarm og dreiemoment?»
  (KS-RED).
- **Typiske feil:** `F8` (detaljert muskelanatomi i stedet for dreiemoment/tiltak); blande indre/ytre
  vektarm; glemme de konkrete tiltakene.
- **Kvote:** 30 quiz / 30 flashcards.

#### Kapittel 2.4: RM-områder og treningsmål — maks, vekst, eksplosiv
**id:** `nih-idr109-2-4` · **number:** 2.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-idr109-2-2`

- **Kapitteltype:** tema (styrke — dosering, faste MC + case).
- **Description:** Hvordan repetisjonsområde, motstand, sett og pause doseres etter mål (maksimal styrke,
  muskelvekst, eksplosiv styrke), og hvordan en styrkeøkt settes opp — MC-faktabunn + case-parametere.
- **Eksamensbelegg:** Styrke. **Repetisjonsområde for mål ~⭐⭐⭐** (V2023, H2023, V2024); **eksplosiv
  styrketrening ~⭐⭐⭐** (V2023, V2024: lavere kraft, høyere leddvinkelhastighet); **kraft × hastighet =
  effekt ~⭐⭐** (V2023, V2024). Sjangre: MC-FAKTA (RM-området — klassisk felle), MC-DEF, CASE-ØKT
  (styrkeøkt). Prioritet: perfekt (fast MC + case). Sensor: riktig RM-område per mål.
- **Faktakontrakt:** **maksimal styrke** ~4–8 RM (trente: >80 % 1RM, ~3 sett, lang pause >2 min);
  **muskelvekst** ~6–12 RM (moderat motstand); **eksplosiv styrke** ~1–5 reps, >50 % 1RM, høy hastighet;
  **eksplosiv styrketrening:** lavere kraft, høyere leddvinkelhastighet; **kraft × hastighet = effekt**
  `(verifiser RM-/%-intervaller mot pensum)`.
- **Parametere:** mål→dosering-tabellen (maks / vekst / eksplosiv: RM, % 1RM, sett, pause, hastighet) —
  kjernefacit for MC-fella og for styrke-case.
- **Momentlister:** «Sett opp en maksimalstyrkeøkt for kne-/hoftestrekkere i «Hva–Hvordan–Hvorfor–Tid»
  med RM, sett og pause, begrunnet» (CASE-ØKT); «Hvor mange reps for best mulig maksimal styrke?»
  (MC-FAKTA/KS).
- **Typiske feil:** `F2` (feil RM-område — 20–40 reps «for styrke»; blande maks/vekst/eksplosiv); glemme
  pause-/sett-dosering; tro eksplosiv = høyest kraft.
- **Kvote:** 32 quiz / 34 flashcards.

#### Kapittel 2.5: Hurtighet, spesifisitet og styrke→hurtighet-oppbygging
**id:** `nih-idr109-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `nih-idr109-2-4`

- **Kapitteltype:** tema (hurtighet — spesifisitet anvendt).
- **Description:** Hvordan hurtighet trenes spesifikt etter idrettens arbeidskrav (fotball vs. 100 m),
  hvordan styrke bygges mot hurtighet over ~12 uker (vekst/maks tidlig → eksplosivt sent), og hvorfor
  overføringsverdien styrke→løpshurtighet er begrenset.
- **Eksamensbelegg:** Hurtighet/spesifisitet. **Spesifisitet + hurtighet fotball vs. 100 m ~⭐⭐⭐**
  (H2022, H2023 kortsvar); **styrke→hurtighet 12-ukers oppbygging ~⭐⭐⭐** (V2023 kortsvar); **overførings-
  verdi styrke→løpshurtighet ~⭐** (V2022). Sjangre: KS-SAM (fotball vs. 100 m + øktdesign), KS-RED
  (12-ukers plan). Prioritet: perfekt (differensierende kortsvar). Sensor: ulikt arbeidskrav → ulik
  øktdesign (`F5`).
- **Faktakontrakt:** **spesifisitetsprinsippet:** trening skal etterligne idrettens arbeidskrav best
  mulig; **hurtighet fotball vs. 100 m:** fotball → kortere løp, start–stopp, retningsforandringer,
  posisjonsavhengig; 100 m → rene, lengre sprint — ulik øktdesign følger av ulikt arbeidskrav; **styrke
  → hurtighet over 12 uker:** start med muskelvekst/maksimal styrke (høy motstand), gå mot eksplosiv
  styrke (lav motstand, høy hastighet) mot slutten, med relevante muskelgrupper; **overføringsverdi
  styrke→løpshurtighet** begrenset fordi styrketrening ofte har vertikalt bevegelsesmønster, ulikt
  løpets.
- **Parametere:** 12-ukers oppbygging (vekst/maks → eksplosiv); øktdesign-forskjell fotball vs. 100 m.
- **Momentlister:** «Sammenlign hurtighetskravene i fotball og 100 m og skisser en økt for hver»
  (KS-SAM + øktdesign); «Skisser en 12-ukers styrke→hurtighet-oppbygging for en sprinter» (KS-RED).
- **Typiske feil:** `F5` (generisk hurtighetsøkt uten forankring i arbeidskrav); blande rekkefølgen i
  12-ukers oppbyggingen; overvurdere overføringsverdien styrke→løp.
- **Kvote:** 28 quiz / 28 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-idr109-2-prove`, chapterNumber `2.P`): (1) *Muskelaksjoner og
determinanter* — MC-DEF konsentrisk/eksentrisk/isometrisk + MC-MEK hva bestemmer maks styrke. (2)
*Vektarmer i øvelsesanalyse* — KS-RED knebøy-caset (dreiemoment + tiltak, prinsipp foran anatomi) +
MC-MEK vektarm. (3) *RM-områder og styrkeøkt* — MC-FAKTA RM per mål + CASE-ØKT maksimalstyrkeøkt i
«Hva–Hvordan–Hvorfor–Tid». (4) *Hurtighet og spesifisitet* — KS-SAM fotball vs. 100 m + KS-RED
styrke→hurtighet 12 uker. Hver prøve blander MC-presisjon og tallfestet, begrunnet case/kortsvar med
momentliste-fasit. Omfang 20–40 min. Prøvekapittel-id `nih-idr109-2-prove`, chapterNumber `2.P`
(jf. BYGGEKONTRAKT).

### Del 3 — Treningsplanlegging: arbeidskrav, mål, testing, prinsipper, periodisering

> Bunnen for hele case-/muntlig-sjangeren (2 tunge case + berøres ellers). Forkunnskap peker på Del 1–2
> (øktparametere) + THP202/nokut-afb (fysiologiske testparametere) — ikke gjentatt. Sensor krever
> «hvordan + hvorfor» per treningsprinsipp + SMART-mål med prosessdelmål + testvalg mot arbeidskrav.
> Alle case-tall NYSKREVNE.

#### Kapittel 3.1: Arbeidskravs- og kapasitetsanalyse
**id:** `nih-idr109-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-0-2`

- **Kapitteltype:** tema (planlegging — startpunktet for all plan).
- **Description:** Skillet mellom arbeidskravsanalyse (hvilke krav idretten stiller) og kapasitets-
  analyse (utøvers nivå mot kravene), og hvordan de sammen styrer hva det er «mest å hente på» — det
  første steget i enhver treningsplan.
- **Eksamensbelegg:** Planlegging. **Arbeidskravs- vs. kapasitetsanalyse ~⭐⭐⭐** (H2022, H2023); bunn for
  hele case-sjangeren. Sjangre: MC-DEF, KS-RED, CASE (steg 1 i plan). Prioritet: perfekt (planbunn).
- **Faktakontrakt:** **arbeidskravsanalyse** = hvilke krav idretten stiller utøveren (fysiske egenskaper,
  bevegelsesform, varighet, intensitetsprofil, start–stopp); **kapasitetsanalyse** = utøvers nivå målt
  mot disse kravene; sammen styrer de **hva det er mest å hente på** (der gapet er størst).
- **Parametere:** analyse-mal (arbeidskrav: egenskaper × krav; kapasitet: utøvers nivå × testresultat);
  «gap = prioritet»-logikken.
- **Momentlister:** «Gjør en arbeidskravsanalyse for en gitt idrett og pek på hva utøveren bør prioritere
  gitt en kapasitetsanalyse» (KS-RED/CASE); «Forklar forskjellen på arbeidskrav og kapasitet» (MC-DEF/KS).
- **Typiske feil:** blande arbeidskrav og kapasitet; hoppe rett til øktdesign uten analyse (`F5`-slekt);
  glemme å knytte prioritet til gapet.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 3.2: Målsetting (SMART) og prosessdelmål
**id:** `nih-idr109-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-3-1`

- **Kapitteltype:** tema (planlegging — mål, case-steg).
- **Description:** SMART(E)-målsetting (spesifikt, målbart, attraktivt, realistisk, tidsbestemt) og
  hvorfor prosessdelmål (øke VO₂max, styrke, arbeidsøkonomi) må kombineres med resultatmål — case-steget
  som ofte åpner plan-oppgaven.
- **Eksamensbelegg:** Planlegging. **SMART-målsetting ~⭐⭐⭐** (V2023 langsvar, H2024 case). Sjangre:
  CASE (steg a), KS-RED. Prioritet: perfekt (case-åpner). Sensor: hovedmål *pluss* prosessdelmål løfter
  svaret (`F9`).
- **Faktakontrakt:** **SMART(E)-mål:** spesifikt, målbart, attraktivt, realistisk, tidsbestemt (evt.
  «E» = evaluerbart/enig); **kombiner hovedmål (resultat, f.eks. under 4 t på et ritt) med prosess-
  delmål** (øke VO₂max, styrke, arbeidsøkonomi); mål skal være realistiske for utøverens nivå.
- **Parametere:** SMART-sjekkliste; hovedmål↔prosessdelmål-mal (resultat vs. prosess).
- **Momentlister:** «Sett opp et SMART-hovedmål med to prosessdelmål for en gitt utøver og horisont»
  (CASE/KS-RED); «Hvorfor holder det ikke med bare et resultatmål?» (KS-RED).
- **Typiske feil:** `F9` (urealistisk mål / mangler prosessdelmål); bare resultatmål uten prosess;
  vage, umålbare mål.
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 3.3: Testing og treningsbelastning
**id:** `nih-idr109-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-idr109-3-1`

- **Kapitteltype:** tema (planlegging — testvalg + belastningsstyring).
- **Description:** Hvorfor man tester (kontrollere respons/status, vurdere egenskaper mot arbeidskrav),
  hvordan man velger praktisk anvendbare, spesifikke tester for ulike utøvergrupper, og hvilke faktorer
  som utgjør trenings- og totalbelastningen.
- **Eksamensbelegg:** Planlegging. **Testing: mål og valg av test ~⭐⭐⭐** (V2024 kortsvar, H2024 case);
  **faktorer som påvirker trenings-/totalbelastning ~⭐⭐⭐** (V2024 kortsvar). Sjangre: KS-RED (testvalg
  for tre grupper), CASE (steg b). Prioritet: perfekt. Sensor: velg test mot arbeidskrav; systematiser
  belastningsfaktorene. (Total belastning berører også Del 1.6.)
- **Faktakontrakt:** **testing:** kontrollere treningsrespons/-status og vurdere egenskaper mot
  arbeidskrav/nivå; velg **praktisk anvendbare, spesifikke** tester — utrent: enkel 5–12 min test / lite
  teknisk styrketest; lagspiller: Yo-Yo/korte drag; utholdenhetsutøver: 5–15 min løps-/sykkeltest,
  laktatprofil, VO₂max, spesifikke styrketester; **faktorer i treningsbelastning:** intensitet, varighet,
  hyppighet (+ utmattelsesgrad); **totalbelastning** = trening + jobb/skole/aktiviteter + søvn/hvile/
  ernæring `(verifiser testintervaller mot pensum)`.
- **Parametere:** testvalg-tabell (utrent / lagspiller / utholdenhetsutøver → egnede tester);
  belastningsfaktorer (intensitet/varighet/hyppighet + utmattelse) + totalbelastning-liste. Fysiologiske
  testverdier LENKES til THP202/nokut-afb.
- **Momentlister:** «Forklar målet med testing og velg egnede tester for en utrent, en lagspiller og en
  utholdenhetsutøver» (KS-RED — tre grupper); «Hvilke faktorer bestemmer treningsbelastningen, og hva
  mer inngår i totalbelastningen?» (KS-RED).
- **Typiske feil:** velge test som ikke matcher arbeidskravet; ramse tester uten begrunnelse (`F8`-slekt);
  glemme totalbelastning utenfor trening.
- **Kvote:** 28 quiz / 30 flashcards.

#### Kapittel 3.4: Treningsprinsippene anvendt i en plan
**id:** `nih-idr109-3-4` · **number:** 3.4 · **estimatedMinutes:** 70 · **prerequisites:** `nih-idr109-3-1`

- **Kapitteltype:** tema (planlegging — case-kjernen, toppgjenganger).
- **Description:** De fem treningsprinsippene (spesifisitet, variasjon, individualisering, progresjon,
  periodisering) anvendt i en konkret plan — for hvert prinsipp *hvordan* det ivaretas OG *hvorfor* det
  er viktig. Case-kjernen som bærer et helt langsvar.
- **Eksamensbelegg:** Planlegging. **Treningsprinsippene anvendt ~⭐⭐⭐** (V2024 langsvar, H2024 langsvar;
  spesifisitet + variasjon fremhevet). Sjangre: CASE (steg c — hvert prinsipp hvordan+hvorfor), KS-RED.
  Prioritet: perfekt (case-kjerne). Sensor krever BÅDE «hvordan» og «hvorfor» per prinsipp (`F10`).
- **Faktakontrakt:** **treningsprinsippene:** **spesifisitet** (etterlign arbeidskravet), **variasjon**
  (unngå stagnasjon/monotoni), **individualisering** (tilpass utøverens nivå/forutsetninger),
  **progresjon** (øk belastningen gradvis), **periodisering** (fordel egenskaper over tid); i case skal
  hvert prinsipp beskrives med *hvordan* det ivaretas i planen og *hvorfor*; spesifisitet og variasjon
  fremheves av sensor.
- **Parametere:** prinsipp→(hvordan ivaretas / hvorfor)-matrise — kjernefacit for case-steg c.
- **Momentlister:** «Vis hvordan hvert av de fem treningsprinsippene ivaretas i planen for en gitt utøver,
  og begrunn hvorfor» (CASE — hvordan+hvorfor per prinsipp); «Hvorfor er spesifisitet det viktigste
  prinsippet i denne idretten?» (KS-RED).
- **Typiske feil:** `F10` (liste prinsippene uten hvordan+hvorfor); glemme ett prinsipp; generell
  «treningsprat» uten forankring i planen.
- **Kvote:** 30 quiz / 32 flashcards.

#### Kapittel 3.5: Periodisering, planjustering og øktens oppbygning
**id:** `nih-idr109-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `nih-idr109-3-4`

- **Kapitteltype:** tema (planlegging — periodisering og øktstruktur).
- **Description:** Hvordan styrke og kondisjon periodiseres samtidig (vektlegge/vedlikeholde egenskaper
  for å redusere interferens), hvorfor planen justeres kontinuerlig, hva en øktplan består av (oppvarming
  –hoveddel–avslutning), og hvorfor styrkeutøvere bør trene noe kondisjon.
- **Eksamensbelegg:** Planlegging. **Periodisering av samtidig styrke + kondisjon ~⭐⭐** (V2022);
  **justering av plan ~⭐⭐** (V2023); **hva en øktplan består av ~⭐⭐** (V2024); **hvorfor styrkeutøvere
  bør trene kondisjon ~⭐** (V2023). Sjangre: MC-DEF, KS-RED, CASE (rammen). Prioritet: perfekt
  (periodisering-ramme) + «bør kjenne til» (styrke↔kondisjon-helse). Merk: overlapper THP202s interferens-
  tema — her holdes det anvendt.
- **Faktakontrakt:** **periodisering (lineær eller blokk):** ved samtidig styrke + kondisjon vektlegges
  egenskaper i ulike perioder mens de øvrige *vedlikeholdes*, for å redusere interferens; **justering av
  plan:** kontinuerlig, ut fra respons; **øktplan:** oppvarming – hoveddel – avslutning, i «Hva–Hvordan–
  Hvorfor–Tid»-format; oppvarming ~5–10 min i aktuell bevegelsesform, moderat–høy mot slutten; **hvorfor
  styrkeutøvere bør trene noe kondisjon:** generell helse, særlig hjerte-kar.
- **Parametere:** periodiseringsmodell (lineær/blokk; vektlegg↔vedlikehold); øktstruktur (oppvarming/
  hoveddel/avslutning + oppvarmingsvarighet).
- **Momentlister:** «Skisser en periodisering for en utøver som skal utvikle både styrke og kondisjon,
  og forklar hvordan du reduserer interferens» (CASE/KS-RED); «Hva består en øktplan av?» (MC-DEF/KS).
- **Typiske feil:** tro man kan makse begge egenskaper samtidig (interferens); glemme vedlikehold av
  ikke-prioritert egenskap; hoppe over oppvarming/struktur i øktplan.
- **Kvote:** 26 quiz / 28 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `nih-idr109-3-prove`, chapterNumber `3.P`): (1) *Arbeidskrav og mål*
— KS-RED arbeidskrav vs. kapasitet + CASE SMART-mål med prosessdelmål. (2) *Testing og belastning* —
KS-RED testvalg for tre utøvergrupper + KS-RED belastnings-/totalbelastningsfaktorer. (3)
*Treningsprinsippene (case-kjernen)* — CASE hvert prinsipp hvordan+hvorfor + KS-RED spesifisitet/variasjon.
(4) *Periodisering og øktstruktur* — MC-DEF øktplan-deler + CASE/KS periodisering av samtidig styrke +
kondisjon. Hver prøve blander MC-presisjon og tallfestet, begrunnet case/kortsvar med momentliste-fasit.
Omfang 20–40 min. Prøvekapittel-id `nih-idr109-3-prove`, chapterNumber `3.P` (jf. BYGGEKONTRAKT).

### Del 4 — Koordinasjon, bevegelighet, fysisk aktivitet/helse og idrettspsykologi

> Lavfrekvent bolk (typisk enkelt-MC), men fast innslag i settene og billig å dekke fullt. Sensor krever
> presise faktaverdier (aktivitetsanbefaling, bevegelighet) og begrepsdefinisjoner (mental trening,
> selvbestemmelsesteori). Holdes kompakt (2 kapitler) men dekkes fullt for MC-poengene.

#### Kapittel 4.1: Koordinasjon, bevegelighet og fysisk aktivitet/helse
**id:** `nih-idr109-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-idr109-0-2`

- **Kapitteltype:** tema (tverr — fysiske egenskaper + helse, MC-fakta).
- **Description:** Koordinasjon (bred bevegelseserfaring, kompleksitet), bevegelighetstrening (dynamisk
  vs. statisk), og fysisk aktivitet/helse (anbefaling for barn/unge, effekter av regelmessig aktivitet)
  — lavfrekvent, men fast MC-fakta.
- **Eksamensbelegg:** Tverr/helse. **Aktivitetsanbefaling barn/unge ~⭐⭐⭐** (V2023, V2024: ≥60 min
  moderat–høy hver dag); **dynamisk vs. statisk bevegelighet ~⭐⭐** (V2022); **generell koordinasjon /
  bred bevegelseserfaring ~⭐⭐** (V2024); **effekter av regelmessig aktivitet ~⭐⭐** (V2022); **kompleksitet
  ~⭐** (V2024). Sjangre: MC-FAKTA, MC-DEF. Prioritet: «må kunne» (anbefaling) + «bør kjenne til»
  (resten).
- **Faktakontrakt:** **generell koordinasjon** utvikles gjennom bred bevegelseserfaring; **kompleksitet:**
  lav kompleksitet = få egenskaper kreves for å bli god; **bevegelighet:** dynamisk = kontrollerte
  bevegelser (mer enn statisk); statisk = hold i ytterpunkt ~15–60 s; **aktivitetsanbefaling barn/unge
  (6–17/18 år):** minst 60 min moderat–høy intensitet hver dag; **effekter av regelmessig fysisk
  aktivitet:** lavere blodtrykk og blodsukker, høyere HDL-kolesterol `(verifiser anbefaling/tall mot
  gjeldende retningslinjer)`.
- **Parametere:** aktivitetsanbefaling (≥60 min/dag, 6–17 år); statisk hold 15–60 s; helseeffekt-liste
  (BT↓, blodsukker↓, HDL↑).
- **Momentlister:** «Hva er anbefalingen for fysisk aktivitet for barn og unge?» (MC-FAKTA/KS); «Forklar
  forskjellen på dynamisk og statisk bevegelighetstrening» (KS-RED).
- **Typiske feil:** feil aktivitetsanbefaling (tall/aldersgruppe); blande dynamisk/statisk bevegelighet;
  tro koordinasjon trenes smalt/spesifikt i stedet for bredt.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 4.2: Idrettspsykologi og mental trening
**id:** `nih-idr109-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-idr109-0-2`

- **Kapitteltype:** tema (idrettspsykologi — MC-fakta/definisjon).
- **Description:** Mental trening (øvelser for mentale ferdigheter), visualisering/PETTLEP, selvbestemmelses-
  teorien (autonomi/kompetanse/tilhørighet) og motivasjonsklima (oppgave-/mestringsorientert) — lavfrekvent
  men fast MC/definisjonsstoff.
- **Eksamensbelegg:** Idrettspsykologi. **Mental trening ~⭐⭐⭐** (V2022, H2022, H2023); **PETTLEP ~⭐⭐**
  (H2022, H2023); **visualisering ~⭐⭐** (V2023); **selvbestemmelsesteorien ~⭐⭐** (V2024); **oppgaveorientert
  motivasjonsklima ~⭐⭐** (V2023). Sjangre: MC-DEF, KS-RED. Prioritet: «må kunne»/«bør kjenne til».
- **Faktakontrakt:** **mental trening** = øvelser/prosedyrer utøveren gjør for å styrke mentale
  ferdigheter; **PETTLEP** = rammeverk for (idrettsspesifikk) visualisering; **visualisering** bør være
  mest mulig konkurransespesifikk; **selvbestemmelsesteorien:** tre grunnbehov — autonomi/selvbestemmelse,
  kompetanse, tilhørighet; **motivasjonsklima:** oppgave-/mestringsorientert klima fremmer motivasjon.
- **Parametere:** ingen tallparametere — men definisjonsliste (mental trening / PETTLEP / visualisering /
  SDT tre behov / motivasjonsklima).
- **Momentlister:** «Hva er mental trening, og hvorfor bør visualisering være konkurransespesifikk?»
  (KS-RED); «Nevn de tre grunnbehovene i selvbestemmelsesteorien» (MC-DEF/KS).
- **Typiske feil:** blande PETTLEP-bokstavene / behandle det som annet enn visualiseringsverktøy; glemme
  ett av SDTs tre behov; forveksle oppgave- og resultatorientert klima.
- **Kvote:** 24 quiz / 26 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `nih-idr109-4-prove`, chapterNumber `4.P`): (1) *Aktivitet og helse*
— MC-FAKTA aktivitetsanbefaling barn/unge + KS-RED helseeffekter av regelmessig aktivitet. (2)
*Bevegelighet og koordinasjon* — KS-RED dynamisk vs. statisk bevegelighet + MC-DEF koordinasjon/kompleksitet.
(3) *Mental trening og visualisering* — MC-DEF mental trening/PETTLEP + KS-RED konkurransespesifikk
visualisering. (4) *Motivasjon* — MC-DEF selvbestemmelsesteori (tre behov) + KS-RED oppgaveorientert
motivasjonsklima. Hver prøve er MC-tung (faktabolk) med korte redegjørelser. Omfang 15–30 min.
Prøvekapittel-id `nih-idr109-4-prove`, chapterNumber `4.P` (jf. BYGGEKONTRAKT).

### Del 5 — Case-galleri og øvingseksamener

#### Kapittel 5.1: Øktplan-galleri — «Hva–Hvordan–Hvorfor–Tid» (C- vs. A-versjon)
**id:** `nih-idr109-5-1` · **number:** 5.1 · **estimatedMinutes:** 90 · **prerequisites:** `nih-idr109-3-5`

- **Kapitteltype:** case-galleri (sjangerdrill, langsvar/case).
- **Description:** Ferdige modellbesvarelser i «Hva–Hvordan–Hvorfor–Tid»-format for de faste case-typene
  — høyintensiv kondisjonsøkt (løp + sykkel), kombinasjonsøkt (styrke + kondisjon), maks-/eksplosiv
  styrkeøkt og hele plan-caset (mål → test → prinsipper → øktplan) — hver i en **C-versjon** (tallfestet
  men tynt begrunnet) og en **A-versjon** (begrunnet mot arbeidskrav/spesifisitet). Forskjellen ER
  karakterforskjellen.
- **Eksamensbelegg:** Analysen §3–§4/§7 (case-øktplan er den faste langsvar-/muntlig-sjangeren; hvert
  langsvar ~⭐⭐⭐). Prioritet: perfekt (meta). Sensor: tallfestede, faglig forsvarlige, begrunnede
  parametere; begrunnelse mot arbeidskrav/spesifisitet er C→A-aksen; det finnes flere riktige svar.
- **Innhold:** én seksjon per case-type. Per seksjon: (a) nyskrevet oppgavecase, (b) **C-versjon** (økt
  med tall, men uten begrunnelse mot arbeidskrav), (c) **A-versjon** (samme økt begrunnet mot idrettens
  arbeidskrav/spesifisitet, med prosessdelmål der relevant), (d) margnotat om hvor poengene faller
  (kredittreglene §4). Case-maler for utholdenhetsidrett (Birkebeiner-sykkel `(verifiser om caset skal
  gjenbrukes eller nyskrives fullt)`, mosjonistløp, lagidrett) med hele kjeden mål→test→prinsipper→øktplan.
- **Momentlister:** kapitlet ER momentlistene — én per case-type, med C→A-forskjellen eksplisitt markert.
- **Typiske feil:** hele F-katalogen som case-diagnose: `F4` (uten tall), `F5` (uten begrunnelse), `F7`
  (feil pause), `F9` (mål uten SMART/prosess), `F10` (prinsipp uten hvordan+hvorfor).
- **Kvote:** 20 quiz / 12 flashcards.

#### Kapittel 5.2: Øvingseksamen (tredelt mal — MC + kortsvar + case)
**id:** `nih-idr109-5-2` · **number:** 5.2 · **estimatedMinutes:** 100 · **prerequisites:** `nih-idr109-5-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet sett i den tredelte arkivmalen: MC (fakta) + 2 kortsvar
  (momentbasert) + 1 langsvar/case (øktplan), ~2 timers omfang uten hjelpemidler, med full momentliste-
  fasit og sensorblikk. Treffer alle fire fagdeler.
- **Eksamensbelegg:** Hele arkivet, tredelt mal (V2022–V2024). Prioritet: perfekt (meta). MC: muskel-
  aksjoner, RM-området, soner/intervall, intensitetsverktøy, aktivitetsanbefaling, mental trening —
  nære distraktorer. Kortsvar: intensitetsverktøy-klassifisering + spesifisitet/hurtighet eller
  vektarm-analyse. Langsvar/case: høyintensiv kondisjonsøkt eller plan-case (mål→test→prinsipper→øktplan)
  i «Hva–Hvordan–Hvorfor–Tid». `(verifiser vurderingsordning — MC-hjemmeeksamen vs. skoleeksamen — for
  aktuelt år)`.
- **Innhold:** ~12–15 MC + 2 momentbaserte kortsvar + 1 case-langsvar. `collapsible` full fasit per
  oppgave (MC-begrunnelse for hvert alternativ; kortsvar-momentliste med delpoeng; case-A-besvarelse med
  tallfestede parametere og begrunnelse); `tip` **Sensorblikket** (hva C-kandidaten høster vs. hva A
  krever; MC-presisjon; case = tall + begrunnelse mot arbeidskrav).
- **Kvote:** 12 quiz / 8 flashcards.

**Prøve-kvote Del 5:** 0 prøver (Del 5s case-galleri + øvingseksamen dekker helheten).

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 42 | 36 | 0 (dekkes av øvingseksamen i Del 5) |
| 1 | 6 | 182 | 186 | 4 |
| 2 | 5 | 150 | 156 | 4 |
| 3 | 5 | 134 | 144 | 4 |
| 4 | 2 | 50 | 54 | 4 |
| 5 | 2 | 32 | 20 | 0 (= case-galleri + øvingseksamen) |
| **Sum** | **22** | **590 ✓ (≥500)** | **596 ✓ (≥500)** | **16** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 20+22 = **42** / 18+18 = **36**
- Del 1: 30+30+34+34+28+26 = **182** / 30+32+34+34+28+28 = **186**
- Del 2: 30+30+30+32+28 = **150** / 32+32+30+34+28 = **156**
- Del 3: 26+24+28+30+26 = **134** / 28+26+30+32+28 = **144**
- Del 4: 26+24 = **50** / 28+26 = **54**
- Del 5: 20+12 = **32** / 12+8 = **20**
- **Totalt: 590 quiz / 596 flashcards.**

**Kvotebegrunnelse (jf. audit-lærdommen 7. juli: ≥500 er GULV, ikke mål).** IDR109 er et
begrepsrikt anvendt metodefag med en stor faktabunn som testes med flervalg (~halve poengsummen)
og en tallparameter-tung case-sjanger. Begge trekker kvoten opp: (1) **quiz** — MC-presisjon med
nære distraktorer over hele apparatet i §6 (muskelaksjoner, RM-områder, soner, intensitetsverktøy,
aktivitetsanbefaling, mental trening) pluss case-parameterkontroll, ~26–34/temakapittel; (2)
**flashcards** — definisjoner, RM-/sone-/pause-tabeller, treningsprinsipper og verktøyklassifisering
som må sitte utenat, med noe HØYERE tetthet enn quiz i fagdelene (faget er faktarikt og eksamen kan
være uten hjelpemidler — nokut-afb-lærdommen). De 20 fagkapitlene bærer tettheten, så summene ligger
med margin over gulvet (590/596) uten kunstig oppfylling; meta-, case-galleri- og øvingskapitler har
bevisst lavere kvote (de trener sjanger, ikke fakta). Prøvene ligger på fire per fagdel (Del 1–4 =
16 prøver); Del 0 og Del 5 dekkes av øvingseksamenen/case-galleriet.

**Flashcard-profil:** definisjons-, tabell- og prinsippkort til pugg utenat — muskelaksjoner
(konsentrisk/eksentrisk/isometrisk), agonist/antagonist, RM→mål-tabellen (maks 4–8 / vekst 6–12 /
eksplosiv 1–5), sone→drag/pause-tabellen (I3/I4/I5), % HFmaks/RPE-intervaller, intensitetsverktøy-
klassifisering (indre/ytre × subjektiv/objektiv med fordel/ulempe), treningsprinsippene (hvordan+
hvorfor), SMART-bokstavene, aktivitetsanbefaling (≥60 min/dag), prestasjonsmodellens ledd, vektarm/
dreiemoment-begrepene, PETTLEP/SDT-behovene og «feil-vaksine»-kort (Q vs. relativ pause øker med
intensitet; puls upålitelig over VO₂max; tverrsnitt viktigst for maks styrke). **Quiz-profil:** MC
med nabobegrep-distraktorer (konsentrisk/eksentrisk, maks/vekst/eksplosiv RM, intervall/kontinuerlig,
indre/ytre intensitetsverktøy, agonist/antagonist, dynamisk/statisk bevegelighet) + case-parameter-
kontroll («hvilken pause hører til I5?», «hvilket verktøy på et hardt drag?») + «hva mangler i denne
øktplanen?»-lesetrening. Tungt vektet fordi MC utgjør ~halve poengsummen og distraktorene skiller på
ett nøkkelord.

---

## 4. Prøver

Fire prøver per fagdel (Del 1–4 = 16 prøver). Hver prøve speiler eksamensformatet i miniatyr: en
blanding av MC-presisjon (MC-sjangre), momentbaserte kortsvar (KS-sjangre) og — der delen bærer det —
tallfestet, begrunnet case-øktplan (CASE-sjangre) med momentliste-fasit. Omfang 15–40 min. Alle
oppgaver NYSKREVNE. Prøvekapittel-id `nih-idr109-<del>-prove`, chapterNumber `<del>.P` (jf.
BYGGEKONTRAKT). Del 0 og Del 5 har ingen egen prøve (Del 5s case-galleri + øvingseksamen dekker
helheten). Sensorkravene «tallfestede, begrunnede parametere» (case) og «klassifiser hele momentlista»
(kortsvar) gjelder alle relevante prøver.

**Prøve-kvote Del 1:** 4 prøver (id `nih-idr109-1-prove`): (1) *Soner og øktkategorier* — MC-DEF
intervall/kontinuerlig + KS-RED hvorfor intervall. (2) *Høyintensiv øktdesign (toppoppgaven)* — CASE-ØKT
I4-økt i «Hva–Hvordan–Hvorfor–Tid» + KS pauseforhold per sone. (3) *Intensitetsstyring* — KS-KLASS fire
verktøygrupper + MC-DEF verktøyklassifisering. (4) *HFs begrensninger og prestasjonsmodellen* — KS-SAM
fart vs. puls + KS-RED prestasjonsmodell/varighetsvekting.

**Prøve-kvote Del 2:** 4 prøver (id `nih-idr109-2-prove`): (1) *Muskelaksjoner og determinanter* —
MC-DEF konsentrisk/eksentrisk/isometrisk + MC-MEK hva bestemmer maks styrke. (2) *Vektarmer i
øvelsesanalyse* — KS-RED knebøy-caset (dreiemoment + tiltak) + MC-MEK vektarm. (3) *RM-områder og
styrkeøkt* — MC-FAKTA RM per mål + CASE-ØKT maksimalstyrkeøkt. (4) *Hurtighet og spesifisitet* — KS-SAM
fotball vs. 100 m + KS-RED styrke→hurtighet 12 uker.

**Prøve-kvote Del 3:** 4 prøver (id `nih-idr109-3-prove`): (1) *Arbeidskrav og mål* — KS-RED arbeidskrav
vs. kapasitet + CASE SMART-mål med prosessdelmål. (2) *Testing og belastning* — KS-RED testvalg for tre
utøvergrupper + KS-RED belastningsfaktorer. (3) *Treningsprinsippene (case-kjernen)* — CASE hvert prinsipp
hvordan+hvorfor + KS-RED spesifisitet/variasjon. (4) *Periodisering og øktstruktur* — MC-DEF øktplan-deler
+ CASE/KS periodisering av samtidig styrke + kondisjon.

**Prøve-kvote Del 4:** 4 prøver (id `nih-idr109-4-prove`): (1) *Aktivitet og helse* — MC-FAKTA
aktivitetsanbefaling barn/unge + KS-RED helseeffekter. (2) *Bevegelighet og koordinasjon* — KS-RED
dynamisk vs. statisk + MC-DEF koordinasjon/kompleksitet. (3) *Mental trening og visualisering* — MC-DEF
mental trening/PETTLEP + KS-RED konkurransespesifikk visualisering. (4) *Motivasjon* — MC-DEF
selvbestemmelsesteori + KS-RED oppgaveorientert motivasjonsklima.

---

## 5. Notat til forfatter-agenten (fase 4)

- **To-nivå-modul er bokas signatur.** Hvert kjernetema skal både kunne besvares som en presis
  MC-definisjon OG omsettes til tallfestede øktparametere. Vis begge nivåer i hvert temakapittel.
- **Tallfestede, begrunnede parametere i alle case.** Hver CASE-`example`/`exercise` skal levere en
  «Hva–Hvordan–Hvorfor–Tid»-øktplan med konkrete tall (drag/antall/pause/intensitet/RM/sett) OG
  begrunnelse mot arbeidskrav/spesifisitet — aldri prat uten tall (`F4`), aldri tall uten begrunnelse
  (`F5`). Vis C- vs. A-versjon der det hjelper leseren (særlig i 0.2 og 5.1).
- **Klassifiser hele momentlista i kortsvar.** Særlig intensitetsverktøyene (indre/ytre × subjektiv/
  objektiv) skal klassifiseres systematisk med fordel OG ulempe per gruppe — hver uteglemt gruppe
  koster poeng (`F3`).
- **Prinsipp foran anatomi.** Hold fysiologi/anatomidybden lett; forklar bare det øktdesignen krever.
  Lenk VO₂max/energiomsetning/muskelfysiologi/HFmaks til THP202 og med1100/nokut-afb. INGEN inngående
  anatomi (sensor krever det eksplisitt ikke) — særlig i vektarm-kapitlet (2.3): dreiemoment + tiltak,
  ikke muskelnavn (`F8`).
- **Koble intensitet↔pause↔sone og skill fart/puls.** Relativ pause øker med intensiteten (I3→I5);
  HF er upålitelig på høy intensitet; fart og puls samvarierer ikke uten videre (`F6`, `F7`).
- **MC med nære distraktorer:** options[0] = riktig i staging (runtime stokker); distraktorene bygges
  fra F-feilkodene og skiller på ett nøkkelord. Der V2022-poengregelen med minuspoeng er relevant,
  nevn gjettestrategien (`F11`) `(verifiser at minuspoeng gjelder aktuelt år)`.
- **Forkunnskaps-lenker, ikke gjentakelse:** lenk til THP202/med1100/nokut-afb for basalfysiologi;
  forklar bare treningsresponsen/dosering selv. Lenk kun til kapitler som finnes (verifiser i fase 6).
- **`(verifiser)`-merking:** vurderingsordningen (muntlig+MC vs. skoleeksamen), MC-poengregelen (minus-
  poeng), alle tallintervaller (drag/pause/soner/RM/%HFmaks/aktivitetsanbefaling) og om Birkebeiner-
  caset skal gjenbrukes eller nyskrives — alle merket `(verifiser)` til fagfellesjekk i fase 6.
- **Opphavsrett:** alle oppgavetekster, casenavn og tallverdier NYSKREVNE; treningsprinsipper, RM-/
  sone-intervaller og faguttrykk er alminnelig fagstoff.

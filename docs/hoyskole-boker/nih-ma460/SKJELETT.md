# Bokskjelett: MA460 Exercise Biology and Sport Performance Analysis I (NIH) — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NIHs MA460-arkiv 2022/23–2025/26: 6 sittinger med sensorveiledning/assessment
> guide, alle lest oppgave for oppgave). Arketype: **drøfting/masternivå**
> (`DNA-drofting.md`), tilpasset et treningsbiologisk fordypningsfag der
> vurderingen ikke er begrepspugg alene, men **definisjon + mekanismekjede +
> måling + forskningsmetodisk kritikk** (D-M-M-K) i strukturerte langsvar.
>
> **Alt innhold skal være NYSKREVET.** Oppgaver, casenavn, tallverdier og
> formuleringer omskrives (§9). Fysiologiske/biomekaniske sammenhenger, ligninger
> og standard normalverdier er alminnelig fagstoff og fritt å bruke. Tallverdier
> og evidensgraderinger forfatteren er usikker på merkes `(verifiser)` for
> fagfellesjekk i fase 6 — flere er hentet fra sensorveiledninger som speiler
> kursets pensum i sitt år og skal kontrolleres mot gjeldende pensumlitteratur.
> INGEN oppdiktede verdier, INGEN oppdiktede pensumreferanser.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-ma460` |
| Tittel | **MA460 Exercise Biology and Sport Performance Analysis I — eksamensrettet (NIH)** |
| Level | `'Høyskole'` |
| Institusjon | Norges idrettshøgskole (NIH) |
| Arketype | Drøfting/masternivå (sju likestilte seminartemaer + integrasjon; D-M-M-K-langsvar med forskningskritikk) |
| Antall kapitler | **30** nummererte (Del 0: 2 · Del 1–8: 24 temakapitler · Del 9 eksamenstrening: 4) + **32 temaprøve-kapitler** (`-prove`, 4 per temadel Del 1–8) |
| Estimert totaltid | **~1 810 min ≈ 30,2 timer** |
| Quiz totalt | **662** (krav ≥500) |
| Flashcards totalt | **672** (krav ≥500) |

**Pitch (ett avsnitt):** MA460 er et 15 sp masteremne (master i idrettsvitenskap,
NIH, aktivt hvert studieår) med en **helt uvanlig, gjennomsiktig eksamensstruktur**
som boka må speile: prøven er en **individuell skriftlig skoleeksamen på 3 timer**
(karakter A–F, **kun ordbok tillatt** — ingen formelsamling/kalkulator), og består
**ikke** av et fritt sammensatt sett, men av **én oppgave fra hvert av sju seminarer,
der hver blokk teller nøyaktig 10 poeng — alle likt (100 % flatt vektet)**.
Konsekvensen er avgjørende: faget er **sju nesten uavhengige fagsøyler**, og en
kandidat kan ikke bestå på tre sterke blokker — alle sju må dekkes. Boka er derfor
organisert som **åtte temadeler (fagsøyler) + en integrasjonsdel**, ordnet etter
gjenganger-score, ikke som ett løpende fysiologipensum. Eksamensspråket er
**engelsk** (svar tillatt på engelsk/norsk/svensk/dansk), så boka introduserer
sentrale engelske faguttrykk parallelt med norske (*running economy*, *oxygen
deficit*, *force-velocity profile*, *match analysis*, *satellite cells*). Svarformen
er nesten utelukkende **langsvar/drøfting** — ingen flervalg, lite regning — men
mange oppgaver er nå **eksplisitt oppdelt med delpoeng** (f.eks. 3 × 3,33 p) og
**case-baserte** (en sprinter som spør om kreatin, en 5 km-motbakke i maraton).

**MA460 er den integrerende master-toppen i NIHs fysiologiklynge.** Boka er
STANDALONE (alt eksamensrelevant stoff er dekket internt på det nivået oppgaven
krever), men den **gjentar ikke bachelor-mekanismene i dybde** — den **lenker** til
klyngens bachelorbøker for grunnlaget og legger sin egen tyngde på **masternivået:
mekanismekjede + måling + forskningsmetodisk kritikk**. Forkunnskaps-lenker:
- **Oksygentransport-søylen** (Del 5) bygger på [THP202 Treningsfysiologi](/bok/nih-thp202) (Ficks
  ligning, VO₂maks sentralt/perifert, slagvolum, blodvolum) og THP100 Humanfysiologi
  (oksygenkaskaden, minuttvolum, Frank-Starling). *Nærmeste faglige nabo — MA460
  fordyper med forskningskritikk og kjønnsforskjeller.*
- **Biomekanikk-søylene** (running economy Del 1, muscle mechanics/FV-profil Del 7,
  overuse Del 2) bygger på [THP203 Basal biomekanikk](/bok/nih-thp203) (kraft-lengde/kraft-hastighet,
  moment/vektarm, senestivhet, GRF, spenning–tøyning) og THP101 Funksjonell anatomi
  (fascikkelarkitektur, PCSA, pennasjon). *Forkunnskapsankere for all biomekanikk.*
- **Styrke-søylen** (Del 6) bygger på THP202 (hypertrofi, nevral adaptasjon,
  sarkopeni) — MA460 fordyper cellemekanismene (satellittceller, mekanotransduksjon).
- **Integrert prestasjonsanalyse** (Del 4) og **ergogenic aids** (Del 8) bygger på
  THP204 Metabolisme (energiomsetning bak O₂-underskudd/MAOD og kreatin/PCr).
- IDR109 Treningslære er det anvendte motstykket — MA460 forklarer *hvorfor*
  prinsippene virker og *hvordan* prestasjon analyseres.

Lenk kun til kapitler som finnes; for THP100/THP101/THP204/IDR109 (ennå ikke bygget)
beskrives forkunnskapen kort i teksten og lenken utelates til boka finnes.

**Kritisk kalibrering — de sju sensorkravene (gjelder HELE boka, fra analysen §4):**
Assessment guide-ene er eksplisitte om hva som gir uttelling. De sju kravene skal
modelleres i hver innholdskontrakt og etableres i Del 0.2:
1. **Definer begrepene du bruker.** Definer løpsøkonomi, oksygenunderskudd, MAOD,
   spesifikk styrke, AGR, pronasjon, arteriell O₂-metning FØR du drøfter dem.
   Udefinerte nøkkelbegreper koster.
2. **Mekanisme framfor påstand.** Ikke bare *at* noe skjer — forklar *hvordan/hvorfor*
   via hele årsakskjeden. Veiledningene lister leddene, og delpoeng knyttes til dem.
3. **Koble til måling/utstyr.** Når en variabel nevnes (stivhet, GRF, fascikellengde,
   spatiotemporale variabler) skal kandidaten si hvordan den *måles* (kraftplate,
   ultralyd, EMG, kinematikk, GNSS/GPS) og hva målingen forteller.
4. **Forskningsmetodisk kritikk må være reell.** I metodeblokkene forventes konkret
   drøfting av design, utvalg, definisjoner og konfundere — gjerne med litteratur-
   eksempler. Generell «det trengs mer forskning» er utilstrekkelig.
5. **Struktur og fullstendighet på flerdelte oppgaver.** Der delpoeng er oppgitt
   (f.eks. 3,33 p per delspørsmål), rettes hvert delspørsmål for seg — svar på *alle*.
6. **Bonus for nyanse.** Toppkarakter krever dybde: høyde-effekten på lungas
   begrensning, motstridende funn om myonukleær permanens, «exercise-induced
   arterial hypoxaemia» som term, andel non-respondere på koffein.
7. **Relevans for oppgavens kontekst.** I case-oppgaver premieres at rådet er
   tilpasset *den spesifikke idretten/utøveren* (100 m-sprint vs. 53 km Birken).

**Nivåskille (destillert, fra analysen §4 — etableres i Del 0.2, refereres per kapittel):**
- **Bestått (E–D):** navngir riktige faktorer/begreper, men tynn eller manglende
  mekanisme; overfladisk metodekritikk.
- **Middels (C–B):** korrekte definisjoner + sammenhengende mekanismekjeder + kobling
  til måling; dekker alle delspørsmål.
- **Topp (A):** som B + nyansering, evidensvurdering, kritisk metodeblikk, og presis
  anvendelse på oppgavens kontekst.

**Studiepoeng-/nummererings-merknad:** Emnet er 15 sp *(verifiser mot gjeldende
emnebeskrivelse)*. **Seminarnummereringen er ustabil på tvers av år** — nye/utvidede
blokker (Ergogenic aids, Sex differences) kom i 2025/26 mens Muscle mechanics/FV-
profil falt ut av oppsettet. Boka bruker derfor **TEMAET, ikke seminarnummeret, som
bærende enhet**, og delnummereringen i boka følger gjenganger-score, ikke NIHs
seminarnummer.

---

## 2. Makrostruktur

Rekkefølgen speiler at alle blokker teller likt, men **gjenganger-score styrer
omfanget**: de fem faste kjernesøylene (6/6) og oksygentransport-komplekset (5–6/6)
får full dekning; biomekanikk-fordypningen (muscle mechanics/FV-profil, falt ut av
2526 men signaturstoff) og de nye 2526-blokkene (ergogenic aids/sex differences) får
solide, men noe kompaktere deler. Fordi eksamen er kort (3 t, ~25 min per blokk),
trener boka **effektive, strukturerte langsvar** (D-M-M-K), ikke lange essay.

| Del | Fagsøyle / tema | Kap. | Gjenganger | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | Eksamenskart + masternivå-essayhåndverk | 2 | meta | perfekt (meta) | De sju blokkene à 10 p, D-M-M-K-kravet, de fem svarsjangrene og nivåskillet A/C/E må etableres FØR fagstoffet. |
| 1 | Running economy | 3 | **6/6** | perfekt | Absolutt gjenganger, hver sitting. Fysiologisk + biomekanisk; definisjon, måling, spatiotemporale variabler, stivhet. |
| 2 | Biomechanics of overuse injuries | 3 | **6/6** | perfekt | Absolutt gjenganger + **signatursjangeren forskningskritikk**. Studiedesign, risikofaktorer, pronasjon, beinbelastning/remodellering. |
| 3 | Performance analysis in team sport | 3 | **6/6** | perfekt | Absolutt gjenganger. Hva match-analyse er, kontekst-/metodefaktorer, fartsterskler, GNSS/GPS. |
| 4 | Integrated / racing performance analysis | 3 | **6/6** | perfekt | Absolutt gjenganger. O₂-underskudd/MAOD, pacing, langrenn vs. løp, sammenlignende idrettsanalyse. |
| 5 | Oxygen transport / VO₂maks + kjønnsforskjeller | 4 | **5–6/6** | perfekt | Reelt sjette kjernesøyle; i 2526 splittet i O₂-transport + kjønnsforskjeller → tungt representert hvert år. |
| 6 | Strength training — mekanismer | 3 | **6/6** | perfekt | Gjenganger med skiftende fokus: eldre/spesifikk styrke → satellittceller/mekanotransduksjon. Dekk begge vinkler. |
| 7 | Muscle mechanics + Force-velocity profile | 3 | 4/6 · 3/6 | kunne (signaturstoff) | Dominerte biomekanikk-tyngden 2223–2425, falt ut av 2526 — men faglig tyngdepunkt og kan gjenoppstå. Dekk fullt. |
| 8 | Ergogenic aids (kreatin/koffein) | 2 | 2/6 (nytt) | kunne (antatt fast) | Ny 2526-blokk på både ordinær og utsatt — sterkt signal om fast blokk. Case-basert anvendt rådgivning. |
| 9 | Eksamenstrening | 4 | meta | perfekt (meta) | Sjangerverksted (D-M-M-K + case) + 2 modellbesvarelser (A/C-nivå) + 2 komplette 7-bloks-øvingseksamener. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og masternivå-essayhåndverk |
| 1 | Running economy — løpsøkonomi |
| 2 | Biomekanikk ved belastningsskader (forskningskritikk) |
| 3 | Prestasjonsanalyse i lagidrett (match analysis) |
| 4 | Integrert prestasjonsanalyse — O₂-underskudd, MAOD og pacing |
| 5 | Oksygentransport, VO₂maks og kjønnsforskjeller |
| 6 | Styrketrening — cellulære og nevrale mekanismer |
| 7 | Muskelmekanikk og kraft-hastighet-profil |
| 8 | Ergogene hjelpemidler — kreatin og koffein |
| 9 | Eksamenstrening — de sju blokkene |

**Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under). MA460 har i
praksis bare langsvar/drøfting, men fem distinkte undersjangre:**
- `S-MEK` **mekanisme-forklaring** («explain how/why the mechanism works») — den
  vanligste. Forklar en fysiologisk/biomekanisk *årsakskjede* ledd for ledd, ikke bare
  navngi den. Sensor premierer at hvert ledd er med.
- `S-KRIT` **metode-/forskningskritikk** («discuss challenges and limitations») —
  MA460s signatursjanger (overuse-blokken + deler av match-analyse og FV-profil).
  Drøft studiedesign (tverrsnitt/retrospektiv vs. prospektiv vs. RCT), utvalgsstørrelse/
  statistisk styrke, definisjonsproblemer, oppfølgingstid, konfundere — og foreslå
  avhjelp. Krever forskningsmetodisk modenhet, ikke bare fagfakta.
- `S-KVANT` **kvantitativ modellering / beregningslogikk** (uten tung tallregning) —
  sett opp en *beregningssammenheng* i ord/formel (F_soleus fra ankelmoment/vektarm ×
  PCSA-forhold × cos(pennasjon); kraftpotensial × EMGᵢ/EMG_max). Logikken og variablenes
  rolle testes, ikke kalkulatorregning.
- `S-SAMLIGN` **sammenlignende idrettsanalyse** («compare sport X and Y») —
  integrert/racing-blokken. Kontrastér to idretter langs faste akser (bane-/
  konkurransekarakteristikk, fysiologiske krav, teknisk/taktiske krav,
  treningskonsekvenser, målemetoder). Struktur belønnes.
- `S-CASE` **anvendt rådgivning / case-svar** — nyere sjanger (ergogenic aids).
  Spill ekspert overfor en konkret utøver: mekanisme + evidensnivå + relevans for
  *nettopp denne idretten* + konkret protokollråd (dose, timing, hvordan verifisere
  respons). Både faglig korrekthet og praktisk anvendbarhet vurderes.

**Feilkoder (fra analysen §5 — brukes i «Typiske feil» under):**
- `F1` **Oppramsing uten mekanisme** — liste organer/faktorer uten å forklare *hvordan*
  hvert begrenser/virker (halv uttelling).
- `F2` **Udefinerte begreper** — drøfte «stivhet», «spesifikk styrke», «oksygenunderskudd»
  uten definisjon.
- `F3` **Glemmer måling/utstyr** — nevne en variabel uten hvordan den registreres.
- `F4` **Overfladisk metodekritikk** — kun «lite utvalg»/«trengs mer forskning» uten
  design-, definisjons- og konfunderdrøfting.
- `F5` **Behandle FV som lineær** — glemme at kraft-hastighet-lineariteten er en artefakt
  av segmentdynamikk og gir feilforsterkning ved ekstrapolering til F0/V0.
- `F6` **Feil bruk av hel-muskellengde** — bruke endring i hel-muskellengde som mål på
  fiberforkorting uten fiberrotasjon (AGR).
- `F7` **Ignorerer kontekst i match-analyse** — tolke fysiske data (redusert høyfartsløping)
  som prestasjonsfall uten taktikk, kampstatus, motstander, miljø.
- `F8` **Generisk kostholdsråd** — standardprotokoll uten kobling til idrettens varighet/
  intensitet og uten respons-/non-responder-problematikk.
- `F9` **Hopper over delspørsmål** — svare grundig på ett delspørsmål og droppe de andre.

**Arketypetilpasning (dokumenterte valg og avvik fra DNA-drøfting):**
1. **Sju fagsøyler + integrasjon, ikke løpende pensum (hovedavvik).** Fordi eksamen
   alltid er én blokk per seminar à 10 p og blokkene tester nesten uavhengige
   domener, er hoveddelene organisert PER FAGSØYLE. Temaet, ikke seminarnummeret, er
   bærende (nummereringen skifter år for år).
2. **D-M-M-K erstatter ren begrepsforankring.** DNA-drøftings «definisjon +
   pensumforankring» er beholdt, men vurderingstyngden ligger på **mekanismekjede +
   måling + forskningskritikk** i tillegg — dette er masternivået. Hvert temakapittel
   har derfor både en **mekanismekjede**, en **målekontrakt** (hvordan variablene
   registreres) og — der relevant — en **metodekritikk-akse**.
3. **«Begrepskontrakt» → «D-M-M-K-kontrakt» (per delkapittel).** Hvert temakapittel
   får en `collapsible` **«Definisjons-, mekanisme- og måleliste»** rett etter
   Forkunnskaper: alle nøkkelbegreper med presis definisjon (norsk + engelsk), de
   mekanismekjedene som må sitte, og målemetodene per variabel. Flashcard-kilden.
4. **Pensumforankring er utgave-sensitiv og skal være EKTE.** Analysen navngir
   forelesere/sensorer (Raastad, Paulsen, Rice, Luteberget, Gilgien, Seynnes) og
   sentrale modeller (Samozino-metoden, MAOD, kraftpotensial). Forfatteren refererer
   forfatter/verk/begrep der pensum er kjent, ALDRI oppdiktet, og merker usikre
   koblinger `(verifiser)`. Ingen ordrette sitater (opphavsrett).
5. **Ingen flervalg, ingen tung regning.** Quiz brukes til å drille definisjons-
   presisjon, mekanismekjede-ledd, målekobling og metodekritikk-momenter (kortsvar-/
   begrepsformat), IKKE flervalg-eksamenssimulering. `S-KVANT` er beregningslogikk i
   ord, ikke kalkulatorregning.
6. **Ingen oppdiktede verdier.** Normalverdier, evidensgrader og prosenttall forankres
   i standard pensum; usikre detaljer merkes `(verifiser)`. Alle case/tall NYSKREVNE.

**Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge):**
1. `tip` **Eksamensvinkel** — hvilken fagsøyle, gjenganger-score/vekt (10 p flat),
   sjangre (S-MEK/S-KRIT/S-KVANT/S-SAMLIGN/S-CASE), og hva sensor ser etter (D-M-M-K).
   Fylles fra Eksamensbelegg under — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker til
   klyngen (THP202/THP203 der bygget; THP100/THP101/THP204 beskrevet kort til de
   finnes), etterfulgt av `collapsible` **Definisjons-, mekanisme- og måleliste**
   (per kapittel — flashcard-kilden).
3. `text` **Temaet i fagets landskap** — kort: hva temaet er, hvilket problem det
   svarer på, og hvor/hvor ofte det testes.
4. `definition` **Kjernebegreper** — hvert begrep presist definert (norsk + engelsk)
   OG der mulig forankret (forfatter/verk/modell fra pensum). **Toppnivå med `title`
   — dette er flashcard-kilden.**
5. `text` **Mekanismekjede(r)** — nummerert trinnvis årsakskjede (stimulus → mekanisme
   → effekt); der relevant med tidsaksering.
6. `text` **Måling og forskningskritikk** — hvordan variablene måles (utstyr + hva
   målingen forteller), og — i metodesøylene — designhierarki/utvalg/definisjoner/
   konfundere som skal drøftes.
7. `example` × 2–3 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger,
   skrevet som A-besvarelse: definer → mekanismekjede ledd for ledd → koble til måling
   → (der relevant) kritisk metodeblikk → kontekstrelevans. Med eksplisitte
   pensumreferanser der de er kjent.
8. `warning` **Typiske feil** — feilkodene (F1–F9) som gjelder temaet.
9. `exercise` × 5–8 — stigende, i kapitlets sjangre, alle med `solution` (momentliste
   + disposisjon, ikke fullt essay) + `hints`. 2–3 begreps-/kontroll, 2–3 kortdrøfting,
   1–2 eksamenslike langsvar med delpoeng. Hver oppgave merket med sjangerkode.
10. `collapsible` **Pensumkart / repetisjon** — forfatter→verk→begreper de «eier» +
    4–6 kontrollpunkter (flashcard-råstoff).

Sjanger-/modell-/øvingseksamenskapitlene (Del 9) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = fagsøyle + vekt (10 p flat) + gjenganger-score
> + sjangerkoder + prioritetsklasse. **D-M-M-K-kontrakt** = definisjoner (flashcard-
> kilden) + mekanismekjeder + målemetoder + (der relevant) metodekritikk-akser som
> SKAL med. **Case-forslag** = nyskrevne anvendelseseksempler. **Typiske feil** =
> feilkodene. **Kvote** = quiz/flashcards.

Hvert teorikapittel skal (jf. Kapittel-DNA + Leserkrav) inneholde: `tip`
**Eksamensvinkel**, `text` **Forkunnskaper** + `collapsible` **Definisjons-,
mekanisme- og måleliste** (per kapittel), `text` **Temaet i fagets landskap**,
`definition` **Kjernebegreper** (toppnivå m/title — flashcard-kilden, norsk+engelsk),
`text` **Mekanismekjede(r)**, `text` **Måling og forskningskritikk**, 2–3 `example`
(siste på eksamensnivå, D-M-M-K), `warning` **Typiske feil**, 5–8 `exercise`
(stigende, `solution` + `hints`), `collapsible` **Pensumkart / repetisjon**.

---

### Del 0 — Eksamenskart og masternivå-essayhåndverk

#### Kapittel 0.1: Slik testes MA460 — sju blokker à 10 poeng

- **id:** `nih-ma460-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (3 t skoleeksamen, A–F, kun ordbok, engelsk oppgavetekst / svar på engelsk/norsk/svensk/dansk), den sju-delte strukturen (én blokk per seminar à 10 p, 100 % flatt vektet), temafrekvensene, de fem svarsjangrene S-MEK/S-KRIT/S-KVANT/S-SAMLIGN/S-CASE og hvorfor alle sju søyler må dekkes.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2022/23–2025/26). Skal formidle: (i) **formen** (individuell skriftlig skoleeksamen 3 t, karakter A–F, **kun ordbok** — ingen formelsamling/kalkulator, engelsk oppgavetekst, svar på fire språk); (ii) den **faste strukturen**: én oppgave (evt. m/delspørsmål) fra hvert av **sju seminarer**, hver blokk nøyaktig **10 p — alle likt (100 %)**; (iii) **poengbalansen er flat** — ingen blokk «viktigere», kan ikke kompensere svak blokk; (iv) **temafrekvens-tabellen** (running economy 6/6, overuse 6/6, match analysis 6/6, integrert/racing 6/6, strength 6/6, O₂-transport 5/6, muscle mechanics 4/6, FV-profil 3/6, ergogenic aids 2/6-nytt, sex differences 2/6-nytt); (v) at **seminarnummereringen skifter år for år** — temaet er bærende; (vi) **de fem svarsjangrene** og hvorfor hver trenger sin treningsløype; (vii) **case-trenden** og **delpoeng-trenden** (fleroppgaver med eksplisitt poengfordeling fra 2024/25). Prioritet: **perfekt (meta)**.
- **D-M-M-K-kontrakt:** Presenter **sjanger-katalogen S-MEK/S-KRIT/S-KVANT/S-SAMLIGN/S-CASE** som studentens sjekkliste, med typisk plassering (S-MEK i alle søyler, S-KRIT tungt i Del 2/3/7, S-KVANT i Del 5/7, S-SAMLIGN i Del 4, S-CASE i Del 8). Presenter **temafrekvens-tabellen** og **søyle-kartet** (hvilke temaer i hvilke deler). Presenter **tidsbudsjettet** (~25 min per blokk × 7 = ~175 min effektiv skrivetid) og hvorfor **effektive strukturerte langsvar** slår lange essay. Ingen mekanismekjede/måling her (kartkapittel).
- **Case-forslag:** 3–4 refleksjonsoppgaver: «gitt 3 t og 7 × 10 p — sett opp et tidsbudsjett per blokk»; «avgjør for hver oppgaveformulering hvilken av de fem sjangrene den ber om»; «hvorfor kan du ikke bestå på fire sterke blokker?».
- **Typiske feil:** Tro man kan kompensere svak blokk med sterk; bruke for lang tid på én blokk og miste poeng på de andre (F9); ikke gjenkjenne hvilken sjanger oppgaven ber om; pugge seminarnummer i stedet for tema.
- **Quiz: 20 · Flashcards: 18** (form, sju-bloks-struktur, flat vekting, temafrekvenser, de fem sjangrene, norsk/engelsk begrepspar)

#### Kapittel 0.2: Masternivå-håndverket — definisjon, mekanisme, måling, kritikk (D-M-M-K)

- **id:** `nih-ma460-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ma460-0-1` · **kapitteltype:** essayhåndverk
- **description:** Hvordan man skårer på masternivå: den fire-leddede besvarelsesmalen definisjon → mekanismekjede → måling/utstyr → forskningskritikk (D-M-M-K), operasjonalisert fra de sju sensorkravene, med nivåskillet A/C/E og hvordan case-relevans og delpoeng høstes.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile gjennom hele arkivet. Prioritet: **perfekt (meta)**. Skal operasjonalisere de sju sensorkravene i §1: (a) **definer først** — udefinerte begreper koster; (b) **mekanisme framfor påstand** — kjede, ikke liste; (c) **koble til måling/utstyr**; (d) **reell forskningskritikk** (design/utvalg/definisjon/konfunder, ikke «trengs mer forskning»); (e) **svar på alle delspørsmål** (delpoeng); (f) **nyanse for A** (motstridende funn, presise fagtermer); (g) **kontekstrelevans** i case.
- **D-M-M-K-kontrakt:** de sju sensorkravene; **D-M-M-K-malen** (definer nøkkelbegrepene → sett opp mekanismekjeden ledd for ledd → koble hver variabel til hvordan den måles → drøft metodesvakhetene der relevant → knytt til oppgavens kontekst); **forskningskritikk-sjekklisten** (designhierarki RCT > prospektiv > tverrsnitt/retrospektiv; utvalgsstørrelse/styrke; definisjonsproblemer; oppfølgingstid; konfundere; foreslå avhjelp); **case-malen** (mekanisme + evidensnivå + idretts-relevans + konkret protokoll + hvordan verifisere respons); **spørreord-trappen** (describe/explain/discuss/compare/advise — svar på riktig nivå).
- **Case-forslag:** samme mekanismespørsmål besvart på tre nivåer (E/C/A) med margnotat om hvor poengene faller; ett metodesvar med kun «lite utvalg» (F4) vs. ett med full designkritikk (vis A-løftet); ett case-svar generisk (F8) vs. idrettsspesifikt.
- **Typiske feil:** Liste der kjede kreves (F1); udefinerte begreper (F2); glemme måling (F3); overfladisk metodekritikk (F4); generisk case-råd (F8); hoppe over delspørsmål (F9); svare på lavere nivå enn spørreordet ber om.
- **Quiz: 22 · Flashcards: 18** (D-M-M-K-malen, de sju sensorkravene, forskningskritikk-sjekklisten, case-malen, nivåskillet A/C/E, spørreord-trappen)

**Prøve-kvote Del 0:** 0 prøver (dekkes av modellbesvarelsene og øvingseksamenene i Del 9).

---

### Del 1 — Running economy (løpsøkonomi)  *(prioritet: PERFEKT — 6/6 gjenganger)*

> Fagsøyle 1 (10 p, absolutt gjenganger). Fysiologisk + biomekanisk. Forkunnskap
> lenkes til [THP203 Basal biomekanikk](/bok/nih-thp203) (GRF, stivhet, kraft-lengde) og THP202/THP100
> (VO₂, steady-state) — ikke gjentatt i dybde. Sensor krever definisjon + mekanisme +
> måling. Alle tall NYSKREVNE.

#### Kapittel 1.1: Løpsøkonomi — definisjon, måling og betydning

- **id:** `nih-ma460-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Løpsøkonomi (running economy) presist definert — oksygen-/energikrav per distanse ved gitt submaksimal fart, normalisert til kroppsmasse — hvordan den måles (steady-state VO₂ på tredemølle ved flere farter, interpolert), og hvorfor den er en selvstendig prestasjonsdeterminant ved siden av VO₂maks.
- **Eksamensbelegg:** Running economy **6/6** — hver sitting; definisjonen etterspørres nesten alltid. Sjangre: S-MEK, S-KVANT (energikost per distanse). Prioritet: **perfekt**. Sensor: definer FØR du drøfter (F2); koble til måling (F3).
- **D-M-M-K-kontrakt:** MÅ KUNNE DEFINERE + MÅLE. **Løpsøkonomi (running economy):** O₂-/energikrav per distanse ved gitt submaksimal fart, normalisert til kroppsmasse (mL O₂/kg/km eller J/kg/m). **Måling:** steady-state VO₂ på tredemølle ved flere submaksimale farter, interpolert; forutsetter aerob steady-state. **Kobling til prestasjon:** to utøvere med lik VO₂maks kan ha ulik prestasjon fordi RE skiller — RE + VO₂maks + utnyttingsgrad bestemmer utholdenhetsprestasjon (bro til [THP202](/bok/nih-thp202)). Norsk/engelsk begrepspar. `(verifiser enhetskonvensjon/normalintervall mot pensum)`.
- **Mekanismekjede(r):** (1) hvorfor RE varierer: gitt O₂-behov per distanse settes av metabolsk kost av kraftgenerering + elastisk energigjenvinning + bevegelseseffektivitet → lavere kost = bedre RE. (Detaljerte biomekaniske determinanter i 1.2–1.3.)
- **Måling og forskningskritikk:** tredemølle-protokoll (flere farter, steady-state, RER < 1,0); begrensninger (labmiljø vs. bane, drift, ventilasjonsmaske); at RE er hastighets-/individspesifikk.
- **Case-forslag:** «Definer løpsøkonomi og forklar hvordan den måles i lab; hvorfor kan to løpere med lik VO₂maks ha ulik 10 km-tid?» (S-MEK/S-KVANT).
- **Typiske feil:** `F2` (drøfte RE uten definisjon); `F3` (nevne RE uten målemetode); blande RE med VO₂maks; glemme normaliseringen til kroppsmasse.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Spatiotemporale variabler og løpsmekanikk

- **id:** `nih-ma460-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-1-1` · **kapitteltype:** teori
- **description:** De biomekaniske variablene bak løpsøkonomi: bakkekontakttid (GCT), skrittfrekvens og skrittlengde, horisontal vs. vertikal grunnreaksjonskraft, og hvorfor økt skrittfrekvens (kortere skritt) kan senke de propulsive horisontalkreftene og bedre økonomien.
- **Eksamensbelegg:** Running economy **6/6** — spatiotemporale variabler + GRF er kjernen i den biomekaniske delen. Sjangre: S-MEK, S-KVANT. Prioritet: **perfekt**. Sensor: mekanismekjede (F1) + hvordan variablene *måles* (F3).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Spatiotemporale variabler:** bakkekontakttid (ground contact time, GCT), skrittfrekvens (step frequency), skrittlengde (step length). **GRF:** vertikal (støttekraft) vs. horisontal (bremsende + propulsiv). **Sammenheng:** høyere skrittfrekvens → kortere skritt → lavere horisontale (propulsive/bremsende) krefter → lavere metabolsk kost → bedre RE (individuelt optimum finnes). **Måling:** kraftplate/kontaktmatte (kinetikk/GCT), kinematikk (bevegelsesfangst), harness for kroppsvektavlastning i lab-oppdeling (vektstøtte/propulsjon/beinsving). Forkunnskap: GRF fra [THP203 kap. 4.3](/bok/nih-thp203/nih-thp203-4-3).
- **Mekanismekjede(r):** (1) skrittfrekvens↑ → skrittlengde↓ → lavere horisontal bremse-/propulsjonskraft + lavere vertikal svingning → lavere mekanisk (og metabolsk) arbeid → RE↑. (2) hvorfor et *optimum* finnes (for høy frekvens → økt indre arbeid/beinsvingkost).
- **Måling og forskningskritikk:** kraftplate (GRF-komponenter), motion capture (spatiotemporale variabler), lab-oppdeling av O₂-kost i vektstøtte/propulsjon/beinsving; begrensning: overføring lab→bane.
- **Case-forslag:** «Forklar hvordan økt skrittfrekvens kan bedre løpsøkonomi, og hvordan du ville målt de relevante variablene» (S-MEK).
- **Typiske feil:** `F1` (nevne variablene uten mekanismen); `F3` (glemme kraftplate/kinematikk); tro høyere frekvens alltid er bedre (glemme optimum); blande horisontal/vertikal GRF.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: Stivhet, fascikelarkitektur og elastisk energi i løp

- **id:** `nih-ma460-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-1-2` · **kapitteltype:** teori
- **description:** Vertikal/legg-stivhet og senens elastiske energigjenvinning som determinanter for løpsøkonomi, fascikelarkitekturens rolle (kvasi-isometrisk fiberarbeid mens senen forlenges/forkortes), og hvordan stivhet måles — toppkarakter-nyansene i søylen.
- **Eksamensbelegg:** Running economy **6/6** — stivhet + elastisk energi er A-nivå-nyansene. Sjangre: S-MEK. Prioritet: **perfekt** (nyanse for topp). Sensor: definer stivhet (F2); koble til senemekanikk/måling (F3); mekanisme (F1).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Stivhet (stiffness):** vertikal stivhet og leddstivhet (kraft/deformasjon; bro til [THP203 kap. 3.1](/bok/nih-thp203/nih-thp203-3-1)); **elastisk energilagring** i akilles/patellarsene (strekk-forkortings-syklus) reduserer metabolsk kost; **fascikelarkitektur** — fibre kan arbeide kvasi-isometrisk (lav shortening-hastighet → gunstig FV-punkt, bro til Del 7) mens senen tar forlengelsen. **Måling:** stivhet fra kraftplate + kinematikk (masse-fjær-modell), ultralyd for fascikel-/senedynamikk. Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) senestrekk i støttefasen lagrer elastisk energi → frigjøres i frastøt → mindre aktivt muskelarbeid → lavere O₂-kost → RE↑. (2) optimal stivhet: for lav → energitap/lang GCT; for høy → dårlig støtdemping/høy last (individoptimum).
- **Måling og forskningskritikk:** masse-fjær-modell (bro til [THP203 kap. 4.2](/bok/nih-thp203/nih-thp203-4-2)), ultralyd (fascikel/sene), kraftplate; begrensning: stivhet er en modell-abstraksjon, ikke direkte målt.
- **Case-forslag:** «Forklar hvordan senestivhet og elastisk energigjenvinning påvirker løpsøkonomi, og hvordan fascikelarkitektur bidrar» (S-MEK, A-nivå).
- **Typiske feil:** `F2` (udefinert «stivhet»); `F1` (påstå elastisk energi hjelper uten kjeden); glemme fascikel-vs.-sene-skillet; `F3` (ingen målemetode).
- **Quiz: 22 · Flashcards: 24**

**Prøve-kvote Del 1:** 4 prøver (id `nih-ma460-1-prove`, chapterNumber `1.P`): (1) *Definisjon og måling* — S-MEK/S-KVANT definer RE + labmåling + kobling til VO₂maks. (2) *Spatiotemporale variabler* — S-MEK skrittfrekvens/GRF-mekanisme + målemetode. (3) *Stivhet og elastisk energi* — S-MEK sene-/fascikelmekanisme, A-nivå. (4) *Bred RE-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (definisjon 3,33 + mekanisme 3,33 + måling 3,34). Hver prøve har nyskrevne tall/case + momentliste-løsning.

---

### Del 2 — Biomekanikk ved belastningsskader (forskningskritikk)  *(prioritet: PERFEKT — 6/6, signatursjanger)*

> Fagsøyle 2 (10 p, absolutt gjenganger). **MA460s signatursjanger: forskningskritikk
> (S-KRIT).** Forkunnskap: beinmekanikk/belastning fra [THP203 kap. 3.3](/bok/nih-thp203/nih-thp203-3-3), GRF fra
> [THP203 kap. 4.3](/bok/nih-thp203/nih-thp203-4-3). Sensor krever REELL metodekritikk (design/utvalg/definisjon/
> konfunder), ikke «trengs mer forskning». Alle case NYSKREVNE.

#### Kapittel 2.1: Studiedesign og forskningskritikk i skadeforskning

- **id:** `nih-ma460-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Forskningsmetodisk kjerne: designhierarkiet (RCT > prospektiv > tverrsnitt/retrospektiv) i skadeepidemiologi, hvorfor tverrsnittsdesign ikke gir årsakssammenheng, og hva som skal drøftes — utvalgsstørrelse/statistisk styrke, skadedefinisjon, oppfølgingstid, eksponerings-/konfunderkontroll.
- **Eksamensbelegg:** Overuse injuries **6/6** — forskningskritikk-delen er den mest sikre og MA460s signatur (S-KRIT). Sjangre: S-KRIT (tung), S-MEK. Prioritet: **perfekt**. Sensor: reell design-/utvalgs-/definisjons-/konfunderdrøfting (F4), ikke overfladisk.
- **D-M-M-K-kontrakt:** MÅ KUNNE DRØFTE. **Designhierarki:** RCT (sterkest for årsak) > prospektiv kohort > tverrsnitt/retrospektiv (svakest — kan ikke skille årsak fra konsekvens). **Metodeutfordringer:** utvalgsstørrelse/statistisk styrke (belastningsskader er lavfrekvente → krever stort N, `>1000` **(verifiser)** + lang oppfølging); **skadedefinisjon** (klar, stedsspesifikk, tid-tapt vs. plage); **eksponeringsmål** (treningsvolum, fottøy, underlag); **konfundere** (tidligere skade, treningshistorikk, biologiske forskjeller). Foreslå avhjelp (prospektivt design, standardisert definisjon, eksponeringsregistrering). Norsk/engelsk begrepspar (prospective, retrospective, confounder, injury definition).
- **Mekanismekjede(r):** (1) hvorfor tverrsnittsdesign villeder: en observert biomekanisk «forskjell» hos skadde kan være *følge* av skaden, ikke årsak → prospektiv baseline før skade kreves for kausal tolkning.
- **Måling og forskningskritikk:** dette ER metodekapitlet — vis den fulle kritikk-sjekklisten fra 0.2 anvendt på et skadestudie-eksempel.
- **Case-forslag:** «En tverrsnittsstudie finner høyere pronasjon hos løpere med belastningsskade og konkluderer med at pronasjon forårsaker skade. Drøft svakhetene og foreslå et bedre design» (S-KRIT, eksamensnivå).
- **Typiske feil:** `F4` (kun «lite utvalg»/«mer forskning»); forveksle korrelasjon/kausalitet; glemme definisjonsproblemet; ikke foreslå avhjelp.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.2: Biomekaniske risikofaktorer og pronasjon

- **id:** `nih-ma460-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-2-1` · **kapitteltype:** teori
- **description:** De assosierte biomekaniske risikofaktorene (vertikal belastningsrate, hofteadduksjon, bakre fot-eversjon), pronasjon presist definert (kombinert eversjon + dorsalfleksjon + abduksjon), dens nødvendige rolle i støtdemping, og hvorfor den er omdiskutert som risikofaktor.
- **Eksamensbelegg:** Overuse injuries **6/6** — risikofaktorer + pronasjon (definisjonen etterspørres). Sjangre: S-MEK, S-KRIT. Prioritet: **perfekt**. Sensor: definer pronasjon (F2); koble faktor til måling (F3); nyanser «assosiert, ikke bevist årsak».
- **D-M-M-K-kontrakt:** MÅ KUNNE DEFINERE + MÅLE. **Pronasjon (pronation):** kombinert eversjon + dorsalfleksjon + abduksjon av fot relativt legg; **nødvendig for støtdemping**, men omdiskutert som skaderisiko. **Assosierte risikofaktorer:** vertikal belastningsrate (loading rate), hofteadduksjonsvinkel, bakre fot-eversjon. **Måling:** kraftplate (belastningsrate/GRF), 3D-kinematikk/motion capture (leddvinkler), trykkmatte. Understrek «assosiert» (fra tverrsnittsdata — jf. 2.1). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) høy vertikal belastningsrate → gjentatt høy støtlast → mikroskade > remodelleringskapasitet → belastningsskade (hypotese, ikke bevist kausalt). (2) pronasjon som støtdempingsmekanisme vs. hypotetisk overpronasjon-risiko.
- **Måling og forskningskritikk:** hvordan hver faktor registreres; kritisk: de fleste assosiasjoner er fra tverrsnitt (bro til 2.1) → svak kausal status.
- **Case-forslag:** «Definer pronasjon og forklar dens rolle i støtdemping. Drøft om pronasjon bør regnes som risikofaktor for belastningsskade» (S-MEK/S-KRIT).
- **Typiske feil:** `F2` (udefinert pronasjon); presentere assosiasjon som bevist årsak; `F3` (glemme kraftplate/kinematikk); blande eversjon/pronasjon.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.3: Beinbelastning, remodellering og stressfrakturer

- **id:** `nih-ma460-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-2-1` · **kapitteltype:** teori
- **description:** Beinvevets belastningsmekanikk under løp (aksial belastning + bøying → kompresjon/strekk; intern belastning fra muskelkrefter), remodelleringssyklusen (resorpsjon + nydannelse) og hvorfor tilstrekkelig restitusjon gir sterkere bein mens for rask progresjon gir stressfraktur.
- **Eksamensbelegg:** Overuse injuries **6/6** — beinbelastning/remodellering er den fysiologiske mekanismedelen. Sjangre: S-MEK. Prioritet: **perfekt**. Sensor: full mekanismekjede (F1); koble til belastning/måling.
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Belastningstyper på bein:** aksial belastning + bøying → kompresjon på én side, strekk på motsatt (bein tåler kompresjon best; bro til [THP203 kap. 3.3](/bok/nih-thp203/nih-thp203-3-3)); **intern belastning** fra muskelkrefter kan endre spenningsfordelingen; **remodellering:** resorpsjon (osteoklaster) + nydannelse (osteoblaster) → mekanisk adaptasjon; **stressfraktur** = mikroskade akkumulert raskere enn remodellering rekker → strukturell svikt. Norsk/engelsk begrepspar (remodelling, stress fracture, loading rate).
- **Mekanismekjede(r):** (1) løpsbelastning → mikroskade + mekanisk signal → remodellering (resorpsjon FØR nydannelse → forbigående svekkelse) → ved tilstrekkelig restitusjon: netto sterkere bein; ved for rask volumøkning: mikroskade > nydannelse → stressfraktur. (2) hvorfor aktive muskler kan redusere strekkspenning (og dermed bruddrisiko) i visse beinsegmenter.
- **Måling og forskningskritikk:** modellert intern beinbelastning (musculoskeletal modeling), belastningsrate fra kraftplate; begrensning: intern beinlast er modellert, ikke direkte målt in vivo.
- **Case-forslag:** «Forklar hvordan beinvev remodelleres ved løpsbelastning, og hvorfor en for rask økning i treningsvolum kan gi stressfraktur» (S-MEK).
- **Typiske feil:** `F1` (nevne remodellering uten kjeden); glemme den forbigående svekkelsen (resorpsjon før nydannelse); blande belastningstyper; `F3`.
- **Quiz: 24 · Flashcards: 24**

**Prøve-kvote Del 2:** 4 prøver (id `nih-ma460-2-prove`, chapterNumber `2.P`): (1) *Forskningsdesign* — S-KRIT drøft tverrsnitt vs. prospektiv + foreslå design. (2) *Risikofaktorer og pronasjon* — S-MEK/S-KRIT definer pronasjon + assosiert vs. kausal. (3) *Beinbelastning/remodellering* — S-MEK stressfraktur-mekanisme. (4) *Bred overuse-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (definer 2 + mekanisme 4 + metodekritikk 4). Nyskrevne case + momentliste-løsning.

---

### Del 3 — Prestasjonsanalyse i lagidrett (match analysis)  *(prioritet: PERFEKT — 6/6)*

> Fagsøyle 3 (10 p, absolutt gjenganger). Forkunnskap: GNSS/GPS og fysiske
> variabler; forskningskritikk fra Del 2. Sensor krever kontekstforståelse (F7) —
> fysiske data uten taktikk/kampstatus feiltolkes. Alle case NYSKREVNE.

#### Kapittel 3.1: Hva match-analyse er — formål, variabler og målemetoder

- **id:** `nih-ma460-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Match-analyse (kampanalyse) definert — systematisk registrering av fysiske, tekniske og taktiske prestasjonsvariabler i konkurranse — dens formål (prestasjonsevaluering, treningsstyring, motstanderanalyse), de fysiske variablene (total distanse, høyfartsløping, akselerasjoner) og hvordan de måles (GNSS/GPS, LPS, video/computer vision).
- **Eksamensbelegg:** Team-sport match analysis **6/6** — «hva er match-analyse» + variabler + måling er kjernen. Sjangre: S-MEK, S-KRIT. Prioritet: **perfekt**. Sensor: definer (F2); koble variabel til målesystem (F3).
- **D-M-M-K-kontrakt:** MÅ KUNNE DEFINERE + MÅLE. **Match-analyse (match/performance analysis):** systematisk registrering + kvantifisering av prestasjon i konkurranse (fysisk/teknisk/taktisk). **Fysiske variabler:** total distanse, distanse i fartssoner (høyfartsløping, sprint), akselerasjoner/decelerasjoner, PlayerLoad. **Fartsterskler (speed thresholds):** soneinndeling av løpsintensitet (individuell vs. absolutt). **Målemetoder:** **GNSS/GPS** (utendørs posisjon/fart), **LPS** (lokalt posisjoneringssystem, innendørs), **video/computer vision**, akselerometer/IMU. Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) rå posisjonsdata → derivering til fart/akselerasjon → soneinndeling via fartsterskler → aggregerte fysiske variabler → tolkning (krever kontekst, jf. 3.2–3.3).
- **Måling og forskningskritikk:** GNSS/GPS (samplingsrate, satellittdekning), LPS (kalibrering), video; målefeil og systemforskjeller gjør at data ikke er direkte sammenlignbare på tvers av systemer.
- **Case-forslag:** «Definer match-analyse og redegjør for de fysiske hovedvariablene og hvordan de måles i en utendørs lagidrett» (S-MEK).
- **Typiske feil:** `F2` (udefinert match-analyse); `F3` (variabler uten målesystem); tro GPS/LPS-data er direkte sammenlignbare; blande absolutte/individuelle fartsterskler.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.2: Kontekst- og metodefaktorer i tolkning av kampdata

- **id:** `nih-ma460-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-3-1` · **kapitteltype:** teori
- **description:** Hvorfor fysiske kampdata aldri tolkes isolert: kontekstfaktorene (taktikk/formasjon, kampstatus/resultat, motstanderstyrke, posisjon/rolle, miljø/underlag) og metodefaktorene (fartsterskel-valg, samplingsrate, systemtype) som avgjør om en tilsynelatende «prestasjonsendring» er reell.
- **Eksamensbelegg:** Team-sport match analysis **6/6** — kontekst-/metodefaktorer er A-nivå-nøkkelen og den vanligste feilen (F7). Sjangre: S-KRIT, S-MEK. Prioritet: **perfekt**. Sensor: vis at data må kontekstualiseres, ikke tas for pålydende.
- **D-M-M-K-kontrakt:** MÅ KUNNE DRØFTE. **Kontekstfaktorer:** taktikk/formasjon, kampstatus (leder/underlegen), motstanderstyrke, spillerposisjon/rolle, miljø (bane, vær, underlag), kamp-til-kamp-variasjon. **Metodefaktorer:** valg av fartsterskler (individuell vs. absolutt endrer «høyfartsløping»), samplingsrate, systemtype, databehandling/filtrering. **Kjernepoeng:** redusert høyfartsløping kan skyldes taktikk/kampstatus, ikke fysisk prestasjonsfall (F7). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) hvordan en enkelt variabel (høyfartsløping) påvirkes av flere kontekstlag → hvorfor isolert tolkning villeder → nødvendig å kontrollere for kontekst før konklusjon.
- **Måling og forskningskritikk:** hvordan fartsterskel-valg og systemforskjeller endrer tallene; nødvendigheten av standardisering for sammenligning.
- **Case-forslag:** «Et lag har lavere total høyfartsløping i en kamp enn snittet. Drøft hvilke kontekst- og metodefaktorer som må vurderes før du konkluderer med prestasjonsfall» (S-KRIT, eksamensnivå).
- **Typiske feil:** `F7` (tolke fysiske data som prestasjon uten kontekst); glemme metodefaktorene (fartsterskel/system); tro kamp-til-kamp-variasjon = endring.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.3: Fysiske krav og prestasjonsprofilering i lagidrett

- **id:** `nih-ma460-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ma460-3-1` · **kapitteltype:** teori
- **description:** Hvordan match-analyse brukes til å profilere de fysiske kravene i en lagidrett (posisjonsspesifikke løpsprofiler, intermitterende høyintensitetsmønster), styre belastning og evaluere, og hvordan dette kobles til treningskonsekvenser — det anvendte laget av søylen.
- **Eksamensbelegg:** Team-sport match analysis **6/6** — anvendelsen (fysiske krav/profilering/belastningsstyring). Sjangre: S-MEK, S-CASE. Prioritet: **perfekt** (anvendt vinkel). Sensor: koble analyse til treningskonsekvens + kontekst.
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Fysisk kravprofil:** intermitterende høyintensitetsmønster, posisjonsspesifikke løpsprofiler; **anvendelser:** kravanalyse (dimensjonere trening), belastningsstyring (akutt:kronisk arbeidsbelastning `(verifiser konseptstatus mot pensum)`), prestasjonsevaluering, retur-til-spill. Understrek at profilering forutsetter kontekstkontroll (jf. 3.2). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) kampkrav-data → identifiser fysiske krav per posisjon → dimensjoner treningsbelastning → evaluer effekt via ny match-analyse (lukket sløyfe).
- **Måling og forskningskritikk:** aggregering av kampdata til kravprofil; begrensning: profilen avhenger av kontekst og system (jf. 3.1–3.2), så generalisering krever forsiktighet.
- **Case-forslag:** «Du skal dimensjonere kondisjonstreningen for en spesifikk posisjon i en lagidrett ut fra match-analyse. Hvilke variabler bruker du, og hvilke forbehold tar du?» (S-CASE/S-MEK).
- **Typiske feil:** `F7` (profilere uten kontekstkontroll); generalisere én kamp til «kravet»; glemme systemavhengighet; `F3`.
- **Quiz: 22 · Flashcards: 22**

**Prøve-kvote Del 3:** 4 prøver (id `nih-ma460-3-prove`, chapterNumber `3.P`): (1) *Hva match-analyse er* — S-MEK definer + variabler + målesystemer. (2) *Kontekstfaktorer* — S-KRIT tolk redusert høyfartsløping. (3) *Metodefaktorer* — S-KRIT fartsterskler/system. (4) *Bred match-analyse-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (definisjon 3 + kontekst/metode 4 + anvendelse 3). Nyskrevne case + momentliste-løsning.

---

### Del 4 — Integrert prestasjonsanalyse — O₂-underskudd, MAOD og pacing  *(prioritet: PERFEKT — 6/6)*

> Fagsøyle 4 (10 p, absolutt gjenganger). Signatursjanger: sammenlignende
> idrettsanalyse (S-SAMLIGN). Forkunnskap: energiomsetning (THP204, beskrives kort),
> VO₂ fra [THP202](/bok/nih-thp202). Sensor krever definisjon av O₂-underskudd/MAOD + struktur langs
> faste akser. Alle tall/case NYSKREVNE.

#### Kapittel 4.1: Oksygenkrav, oksygenopptak, oksygenunderskudd og MAOD

- **id:** `nih-ma460-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** De grunnleggende begrepene i integrert prestasjonsanalyse: oksygenkrav (VO₂dem), oksygenopptak (VO₂), oksygenunderskudd (VO₂dem − VO₂) og maksimalt akkumulert oksygenunderskudd (MAOD) som mål på anaerob kapasitet — presist definert og målemessig forankret.
- **Eksamensbelegg:** Integrated/racing **6/6** — begrepsapparatet (O₂-underskudd/MAOD) er fundamentet, etterspørres definert. Sjangre: S-MEK, S-KVANT. Prioritet: **perfekt**. Sensor: definer FØR drøfting (F2); mekanisme (F1).
- **D-M-M-K-kontrakt:** MÅ KUNNE DEFINERE. **Oksygenkrav (VO₂dem):** O₂ som trengs for en intensitet gitt rent aerob dekning. **Oksygenopptak (VO₂):** faktisk opptak. **Oksygenunderskudd (oxygen deficit):** VO₂dem − VO₂. **MAOD (maximal accumulated oxygen deficit):** maksimalt akkumulert underskudd = mål på anaerob kapasitet. **Måling:** VO₂dem ekstrapoleres fra submaksimal VO₂-intensitet-relasjon; MAOD = arealet mellom VO₂dem og målt VO₂ over supramaksimalt arbeid. Bro til metabolisme (THP204) og VO₂ ([THP202](/bok/nih-thp202)). Norsk/engelsk begrepspar. `(verifiser MAOD-protokolldetaljer mot pensum)`.
- **Mekanismekjede(r):** (1) ved arbeidsstart/høy intensitet: VO₂ henger etter VO₂dem → underskudd dekkes anaerobt (PCr + glykolyse) → akkumulert underskudd = anaerobt bidrag; MAOD er taket. (2) hvorfor MAOD måler anaerob kapasitet, ikke aerob.
- **Måling og forskningskritikk:** ekstrapolering av VO₂dem (antakelse om lineær VO₂-intensitet); MAOD-metodens forutsetninger og feilkilder (ekstrapolering, effektivitetsantakelse).
- **Case-forslag:** «Definer oksygenunderskudd og MAOD, og forklar hvordan MAOD måles og hva det forteller om utøverens kapasitet» (S-MEK/S-KVANT).
- **Typiske feil:** `F2` (udefinert underskudd/MAOD); blande VO₂dem og VO₂; tro MAOD måler aerob kapasitet; `F3` (glemme målemetoden).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.2: Pacing og O₂-underskudd i utholdenhetsidretter

- **id:** `nih-ma460-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-4-1` · **kapitteltype:** teori
- **description:** Hvordan oksygenunderskuddet forvaltes gjennom en konkurranse: langrenn (motbakke → underskudd > VO₂peak, utfor → delvis restitusjon → gjentatt MAOD-utnyttelse), baneløp (jevn aerob produksjon, ingen restitusjon) og distansespesifikk pacing (800 m vs. 5000 m vs. maraton), inkludert hvorfor pulsmåler passer i noen idretter men ikke andre.
- **Eksamensbelegg:** Integrated/racing **6/6** — pacing + O₂-underskudd over ulike idretter/distanser er kjernen. Sjangre: S-MEK, S-SAMLIGN. Prioritet: **perfekt**. Sensor: mekanisme (F1) + distanse-/idrettsspesifikk resonnering.
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Langrenn:** motbakker → VO₂dem > VO₂ (underskudd, ofte 120–150 % av VO₂peak i motbakke **(verifiser)**); utforkjøring → delvis restitusjon av underskuddet → gjentatt utnyttelse av MAOD; **pacing** = holde underskuddet innenfor gjenvinnbart nivå; **pulsmåler dårlig** (treg respons vs. raske skift). **Baneløp (800–10 000 m):** flat bane → jevn aerob produksjon, ingen restitusjonsmulighet → pulsmåler egnet; **800 m:** raskere start/slutt, tregere midtdel (utsatt aerob respons + oppbruk av underskudd ved mål); **5000 m/maraton:** jevn pacing. Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) langrenn-pacing: motbakke → stort momentant underskudd → utfor → VO₂ > krav → underskudd «betales ned» → nytt underskudd i neste motbakke; overtrekk uten restitusjonsvindu → for tidlig utmattelse. (2) hvorfor pulsmåler egner seg på flat bane men ikke i variabelt terreng.
- **Måling og forskningskritikk:** intensitetsmål (VO₂, puls, fart, effekt) og deres treghet/egnethet per idrett; begrensning: momentan intensitet vanskelig å måle i felt.
- **Case-forslag:** «Forklar hvordan en langrennsløper forvalter oksygenunderskuddet i en løype med vekslende motbakke og utfor, og hvorfor pulsmåler er et dårlig intensitetsmål her» (S-MEK).
- **Typiske feil:** `F1` (pacing uten underskudds-mekanismen); tro pulsmåler passer overalt; glemme restitusjons-i-utfor-poenget; blande distanseprofilene.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.3: Sammenlignende idrettsanalyse — akser og målemetoder

- **id:** `nih-ma460-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-4-2` · **kapitteltype:** teori
- **description:** Sjangeren S-SAMLIGN gjort til håndverk: kontrastér to idretter (langrenn vs. 10 000 m, svømming vs. alpint) langs de faste aksene — bane-/konkurransekarakteristikk, fysiologiske krav, teknisk/taktiske krav, treningskonsekvenser, målemetoder (kamera/computer vision under vann, GNSS/video i alpint) — og hvordan kontinuerlige prestasjonsmål brytes ned til krefter og teknikk.
- **Eksamensbelegg:** Integrated/racing **6/6** — sammenlignende idrettsanalyse (S-SAMLIGN) er den strukturbelønnende toppsjangeren. Sjangre: S-SAMLIGN, S-MEK. Prioritet: **perfekt**. Sensor: struktur langs faste akser belønnes (veiledningene er selv aksevis ordnet).
- **D-M-M-K-kontrakt:** MÅ KUNNE STRUKTURERE. **Sammenligningsakser:** (1) bane-/konkurransekarakteristikk (varighet, terreng, medium), (2) fysiologiske krav (aerob/anaerob, VO₂dem-profil), (3) teknisk/taktisk krav, (4) treningskonsekvenser, (5) målemetoder. **Kinematikk** (fart, banelengde) vs. **kinetikk** (GRF, drag/lift, tyngdekraft, friksjon). **Målemetoder per idrett:** computer vision/kamera (svømming under vann), GNSS/video (alpint), tidsdifferanser → fart → banelengde → krefter → teknikk (kontinuerlige prestasjonsmål). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) fra kontinuerlig tidsmåling til teknikk: tidsdifferanse → fart/banelengde → utledede krefter → teknisk tolkning (analysekjeden i racing-idretter).
- **Måling og forskningskritikk:** hvilke systemer egner seg per medium (vann/snø/bane); begrensning: indirekte kraftestimering fra kinematikk.
- **Case-forslag:** «Sammenlign de fysiologiske og biomekaniske kravene i langrenn og 10 000 m på bane langs faste akser, og redegjør for hvordan prestasjonen måles i hver» (S-SAMLIGN, eksamensnivå).
- **Typiske feil:** ustrukturert sammenligning (ikke aksevis); blande kinematikk/kinetikk; glemme målemetode-aksen (F3); ensidig fokus på fysiologi.
- **Quiz: 24 · Flashcards: 24**

**Prøve-kvote Del 4:** 4 prøver (id `nih-ma460-4-prove`, chapterNumber `4.P`): (1) *Begrepsapparatet* — S-MEK definer O₂-underskudd/MAOD + måling. (2) *Pacing* — S-MEK langrenn-/baneløp-forvaltning. (3) *Sammenlignende analyse* — S-SAMLIGN to idretter aksevis. (4) *Bred racing-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (definisjon 3 + pacing-mekanisme 4 + sammenligning 3). Nyskrevne case + momentliste-løsning.

---

### Del 5 — Oksygentransport, VO₂maks og kjønnsforskjeller  *(prioritet: PERFEKT — 5–6/6)*

> Fagsøyle 5 (10 p; i 2526 splittet i O₂-transport + kjønnsforskjeller → tungt hvert
> år). Forkunnskap: Ficks ligning + VO₂maks-mekanismer fra [THP202](/bok/nih-thp202) (kap. 1.1–1.5) og
> oksygenkaskaden/Frank-Starling fra THP100 (beskrives kort). **MA460 gjentar ikke
> bachelor-mekanismene i dybde — den fordyper begrensning, høyde og kjønn med
> forskningskritikk.** Alle tall NYSKREVNE.

#### Kapittel 5.1: Oksygenkaskaden og begrensningen av VO₂maks

- **id:** `nih-ma460-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Oksygenkaskadens seks steg (ventilasjon → diffusjon → hemoglobintransport → levering → muskeldiffusjon → mitokondriell respirasjon), hvorfor minuttvolum (cardiac output) er hovedbegrensningen for VO₂maks, og hvordan man drøfter «hva begrenser VO₂maks» som mekanismekjede — ikke oppramsing.
- **Eksamensbelegg:** O₂-transport **5–6/6** — «hva begrenser VO₂maks» er nesten fast. Sjangre: S-MEK. Prioritet: **perfekt**. Sensor: mekanismekjede per ledd (F1), ikke liste; koble til [THP202](/bok/nih-thp202) uten å gjenta i dybde.
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Oksygenkaskaden (oxygen cascade), seks steg:** ventilasjon/alveolær gassutveksling → diffusjon over alveolo-kapillærmembranen → transport med hemoglobin → levering (minuttvolum × kapillær perfusjon) → diffusjon inn i muskelfiber → mitokondriell respirasjon. **Hovedbegrensning: minuttvolum (cardiac output).** Ficks ligning som ramme (bro til [THP202 kap. 1.1](/bok/nih-thp202/nih-thp202-1-1)) — MA460 fordyper *hvorfor* MV begrenser, ikke ligningens grunnutledning. Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) hvorfor MV er hovedbegrensning: sentral O₂-leveringskapasitet (SV × HF) setter taket; perifer ekstraksjon er nær maks ved VO₂maks → økt MV hever taket mest. (2) hvert kaskade-ledd som *potensiell* begrensning og hvorfor de fleste ikke er begrensende hos utrente.
- **Måling og forskningskritikk:** VO₂maks-kriterier (platå, RER, HFmaks); debatten om sentral vs. perifer begrensning; begrensning: platå-kriteriet ikke alltid oppfylt.
- **Case-forslag:** «Gjør rede for hvilke ledd i oksygentransporten som kan begrense VO₂maks, og begrunn hvorfor minuttvolum regnes som hovedbegrensningen» (S-MEK, eksamensnivå).
- **Typiske feil:** `F1` (liste organene uten *hvordan* hvert begrenser); tro perifer ekstraksjon er hovedbegrensning; blande kaskade-leddene; `F2`.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 5.2: Lungas rolle, arteriell O₂-metning og høyde

- **id:** `nih-ma460-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ma460-5-1` · **kapitteltype:** teori
- **description:** Hvorfor lungene normalt ikke begrenser VO₂maks hos utrente (SO₂ ~95–100 %), men kan gjøre det hos svært veltrente («exercise-induced arterial hypoxaemia», SO₂ mot/under 90 % ved maks), og hvordan høyde reduserer SO₂ og VO₂maks — toppkarakter-nyansen i O₂-søylen.
- **Eksamensbelegg:** O₂-transport **5–6/6** — lunge/SO₂/høyde er A-nivå-nyansene (analysen §4.6 gir eksplisitt pluss). Sjangre: S-MEK. Prioritet: **perfekt** (nyanse for topp). Sensor: bruk «exercise-induced arterial hypoxaemia» som term; koble til måling.
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Arteriell O₂-metning (SaO₂/SO₂):** normalt ingen lungebegrensning hos utrente (SO₂ ~95–100 %); hos veltrente kan SO₂ falle mot/under 90 % ved maks → **exercise-induced arterial hypoxaemia (EIAH)** (kort transittid i lungekapillær + diffusjonsbegrensning ved svært høyt MV). **Høyde:** SO₂ og VO₂maks faller ~6 % per 1000 m høyde **(verifiser)** (lavere PO₂ → lavere diffusjonsgradient). **Måling:** pulsoksymetri/arteriell blodgass. Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) EIAH: svært høyt MV → kort erytrocytt-transittid i lungekapillær → ufullstendig O₂-likevekt → SO₂-fall → CaO₂↓ → begrenset O₂-levering. (2) høyde: ↓PO₂ i luft → ↓alveolær PO₂ → ↓diffusjonsgradient → ↓SO₂ → ↓VO₂maks.
- **Måling og forskningskritikk:** pulsoksymetri vs. arteriell blodgass (måleusikkerhet ved bevegelse); begrensning: SO₂-fall varierer individuelt.
- **Case-forslag:** «Forklar hvorfor lungene kan bli en begrensning for VO₂maks hos svært veltrente utøvere, og hvordan høyde påvirker oksygentransporten» (S-MEK, A-nivå).
- **Typiske feil:** tro lungene aldri begrenser; glemme EIAH-termen (mister A-poeng); blande SaO₂ og SvO₂; `F3` (ingen målemetode).
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 5.3: Slagvolum, blodvolum og sentrale determinanter (masternivå)

- **id:** `nih-ma460-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ma460-5-1` · **kapitteltype:** teori
- **description:** De sentrale determinantene for VO₂maks fra et masterperspektiv — hvorfor slagvolumet er høyere hos utholdenhetsutøvere (blodvolum → venøs retur → EDV → Frank-Starling; hjertehypertrofi; compliance) — med vekt på *hvorfor* framfor gjentakelse av bachelor-utledningen, og hvordan determinantene måles.
- **Eksamensbelegg:** O₂-transport **5–6/6** — slagvolum-determinanter etterspørres. Sjangre: S-MEK. Prioritet: **perfekt**. Sensor: mekanismekjede (F1). **Forfatteren gjentar IKKE THP202s SV-utledning i dybde — lenker dit og fordyper på masternivå (måling, forskningsgrunnlag).**
- **D-M-M-K-kontrakt:** MÅ KUNNE (på masternivå — kort, lenkende). **Slagvolum (stroke volume):** høyere hos utholdenhetsutøvere pga. (1) større blodvolum → økt venøs retur → økt ende-diastolisk volum (EDV) → Frank-Starling, (2) større hjerte/venstre ventrikkelmasse (eksentrisk hypertrofi), (3) høyere compliance; ejeksjonsfraksjon lite endret; HFmaks lik/litt lavere. **Blodvolum:** plasmavolum raskt, rødt cellevolum senere. Detaljert kjede + tidsaksering: se [THP202 kap. 1.2–1.3](/bok/nih-thp202/nih-thp202-1-2). **Måling:** ekkokardiografi (EDV/ESV/masse), CO-teknikker, Hb-masse (CO-rebreathing). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) kort, lenkende: blodvolum↑ → EDV↑ → Frank-Starling → SV↑ → MV↑ → VO₂maks↑ (full tidsaksert kjede i [THP202](/bok/nih-thp202/nih-thp202-1-2)). Fokus her: hvordan dette *måles* og *dokumenteres* i forskning.
- **Måling og forskningskritikk:** ekkokardiografi (EDV/masse), CO-rebreathing (Hb-masse/blodvolum); begrensning: tverrsnitt (utøver vs. utrent) vs. longitudinell trening — kausal vs. seleksjon.
- **Case-forslag:** «Forklar de sentrale determinantene for et høyt slagvolum hos en utholdenhetsutøver, og hvordan de kan måles» (S-MEK).
- **Typiske feil:** `F1`; gjenta bachelor-utledningen uten masternivå (måling/forskning); blande EDV-/ESV-determinanter; `F3`.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.4: Kjønnsforskjeller i oksygentransport

- **id:** `nih-ma460-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ma460-5-1` · **kapitteltype:** teori
- **description:** Den nye 2526-blokken: hvorfor VO₂maks per fettfri masse er ~10 % høyere hos menn (primært ~10 % lavere hemoglobinkonsentrasjon hos kvinner), at kapillærtetthet og O₂-ekstraksjon er like, og hvordan man drøfter kjønnsforskjeller mekanistisk uten å overforenkle.
- **Eksamensbelegg:** Sex differences **2/6 (nytt 2526, antatt fast)** — introdusert på både ordinær og utsatt 2526. Sjangre: S-MEK. Prioritet: **kunne** (men bygg som fullverdig kapittel — antatt fast framover). Sensor: mekanisme (F1) + presis lokalisering av forskjellen (Hb-konsentrasjon).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Kjønnsforskjell i VO₂maks:** VO₂maks per fettfri masse ~10 % høyere hos menn **(verifiser)**, primært pga. ~10 % lavere hemoglobinkonsentrasjon hos kvinner (→ lavere CaO₂ → lavere O₂-bærekapasitet); **kapillærtetthet og O₂-ekstraksjon er ~like**; kroppssammensetning (fettfri masse) forklarer en del av rå VO₂maks-forskjellen. Norsk/engelsk begrepspar (haemoglobin concentration, fat-free mass).
- **Mekanismekjede(r):** (1) ↓[Hb] hos kvinner → ↓CaO₂ (per Ficks ligning, bro til [THP202](/bok/nih-thp202/nih-thp202-1-1)) → ↓O₂-levering ved gitt MV → ↓VO₂maks per FFM; ekstraksjon uendret → forskjellen er en *leverings*-, ikke *ekstraksjons*-forskjell.
- **Måling og forskningskritikk:** normalisering (per kg vs. per FFM endrer bildet); Hb-konsentrasjon (blodprøve); begrensning: normaliseringsvalg og konfundering med kroppssammensetning/treningsstatus.
- **Case-forslag:** «Forklar de fysiologiske årsakene til kjønnsforskjellen i VO₂maks, og hvorfor normalisering til fettfri masse er viktig i tolkningen» (S-MEK).
- **Typiske feil:** tilskrive forskjellen ekstraksjon/kapillærer (feil — det er leveringen/[Hb]); glemme normaliseringspoenget; `F2` (udefinert Hb-konsentrasjon vs. Hb-masse).
- **Quiz: 22 · Flashcards: 24**

**Prøve-kvote Del 5:** 4 prøver (id `nih-ma460-5-prove`, chapterNumber `5.P`): (1) *VO₂maks-begrensning* — S-MEK oksygenkaskaden + minuttvolum. (2) *Lunge/SO₂/høyde* — S-MEK EIAH + høyde, A-nivå. (3) *Sentrale determinanter + kjønn* — S-MEK slagvolum + Hb-forskjell. (4) *Bred O₂-transport-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (kaskade/begrensning 4 + lunge/høyde 3 + kjønn 3). Nyskrevne tall/case + momentliste-løsning.

---

### Del 6 — Styrketrening — cellulære og nevrale mekanismer  *(prioritet: PERFEKT — 6/6, skiftende fokus)*

> Fagsøyle 6 (10 p, gjenganger med skiftende fokus: eldre/spesifikk styrke →
> satellittceller/mekanotransduksjon). **Dekk begge vinkler.** Forkunnskap:
> hypertrofi/nevral adaptasjon/sarkopeni fra [THP202](/bok/nih-thp202/nih-thp202-2-1) — MA460 fordyper
> celle-/signalmekanismene. Alle tall NYSKREVNE.

#### Kapittel 6.1: Mekanotransduksjon — fra mekanisk stress til proteinsyntese

- **id:** `nih-ma460-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Hvordan muskelfiberen sanser mekanisk spenning og oversetter den til vekstsignal: integriner (FAK), titin (titinkinase) og Z-skiven → mTORC1 (via fosfatidinsyre, PI3K/Akt), MAPK/ERK og Ca²⁺/ROS → økt proteinsyntese og ribosombiogenese — masternivå-fordypningen av THP202s hypertrofisignalvei.
- **Eksamensbelegg:** Strength **6/6** (2526-fokus: mekanotransduksjon). Sjangre: S-MEK. Prioritet: **perfekt**. Sensor: full signalveikjede navngitt (F1) — pluss for signalveinavn.
- **D-M-M-K-kontrakt:** MÅ KUNNE (signalveinavn utenat — 3 t, kun ordbok). **Mekanotransduksjon (mechanotransduction):** integriner/FAK, titin/titinkinase, Z-skive → **mTORC1** (via fosfatidinsyre, PI3K/Akt), **MAPK/ERK**, **Ca²⁺/ROS** → ↑proteinsyntese + ribosombiogenese. **Treningsvariabler:** last (~30–90 % 1RM nær utmattelse), volum (10–20 harde sett/muskel/uke **(verifiser)**), effort (nær failure), tid under spenning/eksentrikk. Bro: hypertrofidefinisjonen fra [THP202 kap. 2.1](/bok/nih-thp202/nih-thp202-2-1). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) mekanisk stress → deformasjon av integriner/titin/Z-skive → aktivering av mTORC1 (+ MAPK, Ca²⁺/ROS) → ↑translasjon + ribosombiogenese → ↑myofibrillær proteinsyntese → hypertrofi over tid. (2) hvorfor både mekanisk drag og metabolsk stress bidrar.
- **Måling og forskningskritikk:** muskelbiopsi (signalveiaktivering/proteinsyntese via stabil isotop), CSA via MR/ultralyd; begrensning: akutt signalrespons predikerer ikke alltid langtidshypertrofi.
- **Case-forslag:** «Forklar hvordan muskelfiberen sanser mekanisk spenning og hvilke signalveier som fører til økt proteinsyntese» (S-MEK, eksamensnivå).
- **Typiske feil:** `F1` (nevne mTOR uten kjeden/de andre veiene); tro kun mTOR bidrar; glemme mekanosensorene (integrin/titin/Z-skive); `F3`.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 6.2: Satellittceller, myonuklei og muskelminne

- **id:** `nih-ma460-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-6-1` · **kapitteltype:** teori
- **description:** Satellittcellenes rolle i hypertrofi (muskelstamceller mellom basallamina og sarkolemma → aktiveres av mekanisk stress/mikroskade → prolifererer → tilfører myonuklei), myonukleært domene-teorien, og den omdiskuterte «muskelminne»-hypotesen (myonukleær permanens) — inkludert de motstridende funnene sensor gir pluss for å kjenne.
- **Eksamensbelegg:** Strength **6/6** (2526-fokus: satellittceller/muskelminne). Sjangre: S-MEK, S-KRIT (motstridende funn). Prioritet: **perfekt**. Sensor: mekanisme (F1) + nyanse om myonukleær permanens er omdiskutert (A-poeng).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Satellittceller (satellite cells):** muskelstamceller mellom basallamina og sarkolemma; aktiveres av mekanisk stress/mikroskade → prolifererer → differensierer → tilfører **myonuklei** til fiberen (støtter volumøkning via myonukleært domene). **Muskelminne (muscle memory):** hypotese om myonukleær permanens (myonuklei beholdes ved detrening → raskere re-hypertrofi) — **omdiskutert i mennesker** (motstridende funn). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) mekanisk stress/mikroskade → satellittcelle-aktivering → proliferasjon → fusjon → ↑myonuklei → opprettholdt myonukleært domene ved fibervekst → understøtter vedvarende proteinsyntese.
- **Måling og forskningskritikk:** immunhistokjemi (satellittceller/myonuklei i biopsi); **motstridende funn** om myonukleær permanens hos mennesker → drøft evidensgrunnlaget (S-KRIT); begrensning: dyremodell vs. menneske.
- **Case-forslag:** «Forklar satellittcellenes rolle i muskelhypertrofi, og drøft evidensen for «muskelminne» via myonukleær permanens» (S-MEK/S-KRIT, A-nivå).
- **Typiske feil:** `F1`; presentere myonukleær permanens som etablert (glemme kontroversen → mister A-poeng); blande satellittcelle og myonukleus; tro satellittceller gir hyperplasi.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 6.3: Spesifikk styrke, aldring og nevral adaptasjon

- **id:** `nih-ma460-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-6-1` · **kapitteltype:** teori
- **description:** Den eldre 2223–2324-vinkelen som fortsatt kan gjenoppstå: spesifikk styrke (kraft normalisert til tverrsnitt/masse), aldringstapet (styrke, masse og spesifikk kraft) med mekanismer (IMAT, redusert proteinkvalitet/mitokondriefunksjon, svekket aktivering), og skillet nevral vs. strukturell adaptasjon.
- **Eksamensbelegg:** Strength **6/6** (2223–2324-fokus: eldre/spesifikk styrke). Sjangre: S-MEK, S-KVANT (normalisering). Prioritet: **perfekt** (dekk begge vinkler i søylen). Sensor: definer spesifikk styrke (F2); mekanisme for aldringstap (F1).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Spesifikk styrke (specific strength):** kraft normalisert til tverrsnitt/masse (N/cm² eller N/kg). **Aldring:** ~15 % styrketap + ~10 % massetap per tiår etter 50 år; spesifikk kraft 20–40 % lavere hos ~70-åringer **(verifiser)**; mekanismer: intramuskulært fett (IMAT), redusert proteinkvalitet/mitokondriefunksjon, svekket muskelaktivering. **Styrketrening (~12 uker):** ~20–30 % styrkeøkning (1RM), ~5–10 % CSA-økning → bedret spesifikk styrke **(verifiser)**. **Nevral vs. strukturell adaptasjon** (bro til [THP202](/bok/nih-thp202/nih-thp202-2-1)). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) aldringstap: ↓type-II-fibre + fiberatrofi + IMAT + svekket aktivering → ↓kraft mer enn ↓masse → ↓spesifikk styrke. (2) hvorfor tidlig styrkeøkning er mest nevral, senere strukturell (bro til THP202).
- **Måling og forskningskritikk:** CSA (MR/ultralyd), aktivering (interpolert twitch — EMG er dårlig for aktiveringssvikt), 1RM; begrensning: tverrsnitt (alder) vs. longitudinell.
- **Case-forslag:** «Definer spesifikk styrke og forklar hvorfor den faller med alder, med mekanismer» (S-MEK/S-KVANT).
- **Typiske feil:** `F2` (udefinert spesifikk styrke); tro aldringstapet skyldes kortere sener (det er fiberatrofi/type-II-tap); bruke EMG for aktiveringssvikt (feil metode); `F1`.
- **Quiz: 24 · Flashcards: 26**

**Prøve-kvote Del 6:** 4 prøver (id `nih-ma460-6-prove`, chapterNumber `6.P`): (1) *Mekanotransduksjon* — S-MEK signalveikjede. (2) *Satellittceller/muskelminne* — S-MEK/S-KRIT + kontrovers. (3) *Spesifikk styrke/aldring* — S-MEK/S-KVANT. (4) *Bred styrke-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (cellemekanisme 4 + satellittceller 3 + aldring/spesifikk styrke 3). Nyskrevne tall/case + momentliste-løsning.

---

### Del 7 — Muskelmekanikk og kraft-hastighet-profil  *(prioritet: KUNNE — signaturstoff, 4/6 · 3/6)*

> Fagsøyle 7 (10 p; dominerte 2223–2425, falt ut av 2526, men faglig tyngdepunkt og
> kan gjenoppstå — dekk fullt). Forkunnskap: kraft-lengde/kraft-hastighet, moment/
> vektarm fra [THP203](/bok/nih-thp203) (kap. 1.2, 2.1), fascikelarkitektur fra THP101 (beskrives kort).
> Signatursjanger: S-KVANT (beregningslogikk) + S-KRIT (FV-metodekritikk). Alle tall
> NYSKREVNE.

#### Kapittel 7.1: Kraftpotensial, PCSA og synergist-kraftdeling

- **id:** `nih-ma460-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Muskelkraftens teoretiske maksimum ved gitt lengde og hastighet (kraftpotensial fra FL- og FV-relasjonene), øyeblikkelig kraft (kraftpotensial × EMGᵢ/EMG_max), fysiologisk tverrsnitt (PCSA) og synergist-kraftdeling — beregningslogikken (S-KVANT) sensor tester uten kalkulator.
- **Eksamensbelegg:** Muscle mechanics **4/6** — kraftpotensial/PCSA/synergist er kjernen. Sjangre: S-KVANT, S-MEK. Prioritet: **kunne** (signaturstoff). Sensor: sette opp beregningssammenhengen i ord/formel (F2 hvis udefinert).
- **D-M-M-K-kontrakt:** MÅ KUNNE SETTE OPP. **Kraftpotensial (force potential):** teoretisk maks kraft ved gitt øyeblikkelig lengde + kontraksjonshastighet, gitt av kraft-lengde- (FL) og kraft-hastighet- (FV) relasjonene (bro til [THP203 kap. 2.x/FL-FV](/bok/nih-thp203)); lavere enn maksimalt kraftpotensial; kobles til **PCSA** (fysiologisk tverrsnittsareal) og spesifikk spenning. **Øyeblikkelig kraft** = kraftpotensial × (EMGᵢ/EMG_max). **Synergist-kraftdeling:** F_muskel ≈ (leddmoment/vektarm) × (PCSA_muskel/PCSA_synergister). **Effektiv fiberkraft** = muskelkraft × cos(pennasjonsvinkel). Norsk/engelsk begrepspar (physiological cross-sectional area, pennation angle).
- **Mekanismekjede(r):** (1) fra leddmoment til enkeltmuskelkraft: leddmoment / vektarm → total synergist-kraft → fordel etter PCSA → korriger for pennasjon → effektiv fiberkraft. (S-KVANT som ordbeskrevet beregning.)
- **Måling og forskningskritikk:** ultralyd (PCSA/pennasjon/fascikellengde), EMG (aktivering), dynamometer (leddmoment); begrensning: synergist-deling antar PCSA-proporsjonalitet — inter-individuell variasjon.
- **Case-forslag:** «Sett opp beregningssammenhengen for å estimere soleus-kraften under løp fra ankelmoment, akillessenens vektarm og PCSA-forhold, og forklar hver størrelses rolle» (S-KVANT, eksamensnivå).
- **Typiske feil:** `F2` (udefinert kraftpotensial/PCSA); glemme pennasjonskorreksjonen; bruke hel muskelkraft uten synergist-deling; `F3`.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 7.2: Fascikelarkitektur, pennasjon og arkitektur-utvekslingsforhold (AGR)

- **id:** `nih-ma460-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-7-1` · **kapitteltype:** teori
- **description:** Hvordan muskelarkitektur styrer funksjon: arkitektur-utvekslingsforholdet (AGR = muskel-/fascikelkontraksjonshastighet) som lar muskelen kontrahere raskere enn fasciklene alene tillater (fiberrotasjon → gunstigere FV-punkt), og hvorfor sprintere og utholdenhetsløpere har ulik fascikellengde/pennasjon.
- **Eksamensbelegg:** Muscle mechanics **4/6** — AGR + arkitektur er A-nivå-stoffet. Sjangre: S-MEK. Prioritet: **kunne** (signaturstoff). Sensor: definer AGR (F2); mekanisme for fiberrotasjon (F1); ikke bruke hel-muskellengde (F6).
- **D-M-M-K-kontrakt:** MÅ KUNNE. **Arkitektur-utvekslingsforhold (architectural gear ratio, AGR):** muskelkontraksjonshastighet / fascikelkontraksjonshastighet; høy AGR → muskelen forkortes raskere enn fasciklene (via fiberrotasjon/pennasjonsøkning) → gunstigere punkt på FV-kurven. **Sprinter vs. utholdenhetsløper:** sprintere har **lengre fascikler + lavere pennasjon** (fordel ved høy hastighet); utholdenhetsløpere **kortere fascikler + større pennasjon** (lavere energikost). **Effektiv fiberkraft** = muskelkraft × cos(pennasjon). Norsk/engelsk begrepspar.
- **Mekanismekjede(r):** (1) AGR: ved kontraksjon roterer fibrene → pennasjonsvinkel øker → muskelen forkortes mer enn fasciklene → lavere fascikelhastighet ved gitt muskelhastighet → fibrene arbeider på gunstigere FV-punkt (mer kraft). (2) hvorfor arkitekturen er en avveining (kraft vs. hastighet vs. energikost).
- **Måling og forskningskritikk:** ultralyd (fascikellengde/pennasjon i sanntid under kontraksjon); begrensning: 2D-ultralyd fanger ikke full 3D-fiberrotasjon.
- **Case-forslag:** «Forklar arkitektur-utvekslingsforholdet (AGR) og hvorfor det er feil å bruke endring i hel-muskellengde som mål på fiberforkorting» (S-MEK).
- **Typiske feil:** `F6` (hel-muskellengde som fiberforkorting uten fiberrotasjon); `F2` (udefinert AGR); bytte om sprinter/utholdenhets-arkitektur; glemme pennasjonskorreksjonen.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 7.3: Kraft-hastighet-profil og Samozino-metoden (med metodekritikk)

- **id:** `nih-ma460-7-3` · **number:** 7.3 · **estimatedMinutes:** 65 · **prerequisites:** `nih-ma460-7-1` · **kapitteltype:** teori
- **description:** Kraft-hastighet-profilen fra hopp (2–5 SJ/CMJ med ulik belastning → lineær regresjon → F0/V0; optimal profil), Samozino-metodens estimering av kraft/hastighet fra hopphøyde, og — signaturkritikken — hvorfor lineariteten er en artefakt av segmentdynamikk som gir feilforsterkning ved ekstrapolering til F0/V0.
- **Eksamensbelegg:** Force-velocity profile **3/6** — FV-profil + Samozino + metodekritikk. Sjangre: S-KVANT, S-KRIT (tung). Prioritet: **kunne** (signaturstoff). Sensor: reell metodekritikk (F4); ikke behandle FV som virkelig lineær (F5).
- **D-M-M-K-kontrakt:** MÅ KUNNE + KRITISERE. **FV-profil:** 2–5 hopp (SJ/CMJ) med ulik belastning (kun kroppsvekt opp til ~10 cm hopphøyde på tyngste), tilfeldig rekkefølge → **lineær regresjon → F0 og V0**; **optimal profil:** maks effekt ved kun kroppsvekt; ubalanse = maks effekt ved teoretisk høyere/lavere last. **Samozino-metoden:** estimerer kraft/hastighet fra hopphøyde via flytid; krever definert push-off-distanse. **Feilkilder:** (1) antar bare distanse, ikke varighet; (2) ekstrapolering til F0/V0 gir feilforsterkning; (3) skjelettmuskelens FV er egentlig **ulineær** — lineariteten på hoppnivå er en artefakt av segmentdynamikk. Norsk/engelsk begrepspar. `(verifiser protokolldetaljer/hoppnivå mot pensum)`.
- **Mekanismekjede(r):** (1) fra hopp til F0/V0: flere belastninger → punkter i F-V-plan → lineær tilpasning → ekstrapolering til akser (F0, V0) → effektprofil. (2) hvorfor ekstrapolering forsterker feil (kort måleintervall → stor usikkerhet i aksepunktene).
- **Måling og forskningskritikk:** kraftplate vs. flytid (Samozino); **S-KRIT**: lineariteten er tilsynelatende (segmentdynamikk), ekstrapolering usikker, protokollavhengighet — full metodekritikk.
- **Case-forslag:** «Forklar hvordan en kraft-hastighet-profil bestemmes fra hopp, og drøft de metodiske svakhetene ved Samozino-metoden og ved å behandle FV-relasjonen som lineær» (S-KVANT/S-KRIT, eksamensnivå).
- **Typiske feil:** `F5` (behandle FV som virkelig lineær); `F4` (overfladisk kritikk); glemme ekstrapoleringsfeilen; blande F0 og V0.
- **Quiz: 24 · Flashcards: 26**

**Prøve-kvote Del 7:** 4 prøver (id `nih-ma460-7-prove`, chapterNumber `7.P`): (1) *Kraftpotensial/synergist* — S-KVANT beregningslogikk. (2) *Arkitektur/AGR* — S-MEK fiberrotasjon. (3) *FV-profil/Samozino* — S-KVANT/S-KRIT metodekritikk. (4) *Bred muskelmekanikk-oppgave (eksamensnivå)* — full 10 p-blokk med delpoeng (kraftpotensial 3 + AGR 3 + FV-kritikk 4). Nyskrevne tall/case + momentliste-løsning.

---

### Del 8 — Ergogene hjelpemidler — kreatin og koffein  *(prioritet: KUNNE — nytt 2526, antatt fast)*

> Fagsøyle 8 (10 p, nytt 2526 på både ordinær og utsatt → antatt fast). Signatur-
> sjanger: anvendt rådgivning / case-svar (S-CASE). Forkunnskap: PCr/energiomsetning
> (THP204, beskrives kort). Sensor krever mekanisme + evidensnivå + idretts-relevans
> + konkret protokoll + respons-verifisering. Alle case NYSKREVNE.

#### Kapittel 8.1: Kreatin — mekanisme, evidens og protokoll

- **id:** `nih-ma460-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** teori
- **description:** Kreatin som ergogent hjelpemiddel: mekanismene (økt hypertrofi i kombinasjon med styrketrening — sterk evidens; økt PCr-resyntese ved kort høyintensivt arbeid 20–40 s — medium evidens), evidensgradering, protokoll (ladefase vs. direkte vedlikehold) og hvordan respons/non-respons verifiseres — case-svar for en konkret utøver.
- **Eksamensbelegg:** Ergogenic aids **2/6 (nytt, antatt fast)** — kreatin case (f.eks. sprinter). Sjangre: S-CASE, S-MEK. Prioritet: **kunne** (bygg fullverdig). Sensor: mekanisme + evidensnivå + idretts-relevans + protokoll + respons-verifisering (F8 hvis generisk).
- **D-M-M-K-kontrakt:** MÅ KUNNE (mekanisme + evidens + protokoll). **Kreatin (creatine):** mekanismer = (a) økt muskelhypertrofi *i kombinasjon med* styrketrening (**sterk evidens**), (b) økt PCr-resyntese ved kort høyintensivt arbeid 20–40 s (**medium evidens**). **Protokoll:** evt. ladefase 20 g/dag (4 × 5 g) i 1 uke, ellers direkte vedlikehold 3–5 g/dag. **Respons-verifisering:** 1–2 kg vannvektøkning første uke; ingen økning = non-responder. Bro: PCr/energiomsetning (THP204). Norsk/engelsk begrepspar. `(verifiser doser/evidensgrad mot pensum)`.
- **Mekanismekjede(r):** (1) tilskudd → ↑muskelkreatin/PCr → raskere PCr-resyntese → bedret gjentatt kort høyintensivt arbeid; + ↑cellevann/signalering → understøtter hypertrofi ved styrketrening. (2) hvorfor effekten er idrettsspesifikk (kort høyintensiv > langvarig aerob).
- **Måling og forskningskritikk:** kroppsvekt/vannretensjon (respons), muskelbiopsi (kreatininnhold i forskning); evidensgradering (sterk/medium) og non-responder-andel.
- **Case-forslag:** «En 100 m-sprinter spør om kreatin. Gjennomgå mekanisme og evidensnivå for nettopp denne idretten, gi et konkret protokollråd, og forklar hvordan respons verifiseres» (S-CASE, eksamensnivå).
- **Typiske feil:** `F8` (generisk råd uten idretts-relevans); glemme evidensgraderingen; glemme respons-/non-responder-verifisering; blande hypertrofi- og PCr-mekanismen.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 8.2: Koffein — mekanisme, evidens og protokoll

- **id:** `nih-ma460-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ma460-8-1` · **kapitteltype:** teori
- **description:** Koffein som ergogent hjelpemiddel: mekanismene med evidensgradering (sterk for endorfinfrigjøring, bedret nevromuskulær funksjon, årvåkenhet, redusert opplevd anstrengelse; svak/spekulativ for fettoksidasjon og styrke/effekt), protokoll (3–6 mg/kg ~1 t før, tilskudd ikke kaffe), og non-responder-problematikken — case-svar for en utholdenhetsutøver.
- **Eksamensbelegg:** Ergogenic aids **2/6 (nytt, antatt fast)** — koffein case (f.eks. Birken-skiløper). Sjangre: S-CASE, S-MEK. Prioritet: **kunne** (bygg fullverdig). Sensor: mekanisme + evidensnivå + protokoll + non-responder (F8 hvis generisk).
- **D-M-M-K-kontrakt:** MÅ KUNNE (mekanisme + evidens + protokoll). **Koffein (caffeine):** **sterk evidens** for økt endorfinfrigjøring, bedret nevromuskulær funksjon, økt årvåkenhet, redusert opplevd anstrengelse (RPE); **svak/spekulativ** for fettoksidasjon og styrke/effekt. **Protokoll:** 3–6 mg/kg ~1 time før konkurranse (**tilskudd, ikke kaffe** pga. variabelt innhold). **Non-respons:** opptil ~33 % non-respondere i enkelttester **(verifiser)**. Norsk/engelsk begrepspar. `(verifiser doser/evidensgrad mot pensum)`.
- **Mekanismekjede(r):** (1) koffein → adenosinreseptorblokade → ↑årvåkenhet + ↓RPE + endorfinfrigjøring → bedret nevromuskulær funksjon/utholdenhet. (2) hvorfor styrke-/effekt-evidensen er svakere enn utholdenhets-evidensen.
- **Måling og forskningskritikk:** RPE-skalaer, prestasjonstester; evidensgradering (sterk vs. spekulativ) og non-responder-andel; hvorfor tilskudd (standardisert dose) > kaffe.
- **Case-forslag:** «En Birkebeiner-deltaker spør om koffein. Gjennomgå mekanisme og evidensnivå, gi et konkret protokollråd, og forklar non-responder-problematikken» (S-CASE, eksamensnivå).
- **Typiske feil:** `F8` (generisk råd); overselge styrke-/fettoksidasjonseffekten (svak evidens); anbefale kaffe (variabelt innhold); glemme non-responder-andelen.
- **Quiz: 24 · Flashcards: 26**

**Prøve-kvote Del 8:** 4 prøver (id `nih-ma460-8-prove`, chapterNumber `8.P`): (1) *Kreatin* — S-CASE mekanisme/evidens/protokoll for sprinter. (2) *Koffein* — S-CASE for utholdenhetsutøver. (3) *Evidensgradering* — S-MEK sterk vs. svak evidens begge midler. (4) *Bred ergogenic-oppgave (eksamensnivå)* — full 10 p-blokk case med delpoeng (mekanisme/evidens 7 + konkret protokoll+verifisering 3, jf. reell 7+3-fordeling). Nyskrevne case + momentliste-løsning.

---

### Del 9 — Eksamenstrening — de sju blokkene

#### Kapittel 9.1: Sjangerverksted — D-M-M-K og de fem svarsjangrene

- **id:** `nih-ma460-9-1` · **number:** 9.1 · **estimatedMinutes:** 75 · **prerequisites:** `nih-ma460-0-2` · **kapitteltype:** sjangerverksted
- **description:** Sjangerverksted som drilles på de fem svarsjangrene (S-MEK, S-KRIT, S-KVANT, S-SAMLIGN, S-CASE) med D-M-M-K-malen anvendt på tvers av søylene, med tidsbudsjett (~25 min/blokk) og sensor-margnotater om hvor poengene faller.
- **Eksamensbelegg:** Dekker alle fem sjangre samlet — det håndverket alle sju blokker krever. Prioritet: **perfekt (meta)**.
- **D-M-M-K-kontrakt:** Løsningsoppskrift per sjanger (kortform av 0.2): S-MEK (definer → kjede → måling), S-KRIT (designhierarki → utvalg/definisjon/konfunder → avhjelp), S-KVANT (sett opp beregningssammenheng i ord), S-SAMLIGN (faste akser), S-CASE (mekanisme + evidens + relevans + protokoll + verifisering). Deretter **8–10 gjennomskrevne eksempelsvar** som roterer fagsøyle, hver med **sensor-margnotater** (hvor definisjon/mekanisme/måling/kritikk/kontekst gir uttelling). Tren tidsbudsjett (~25 min/blokk).
- **Case-forslag:** ett kort svar per sjanger, i ulike søyler, som modell.
- **Typiske feil:** Hele F1–F9-repertoaret samlet; tidsfella (henge i én blokk, F9); svare på feil nivå enn spørreordet.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 9.2: Modellbesvarelser — A-nivå vs. C-nivå

- **id:** `nih-ma460-9-2` · **number:** 9.2 · **estimatedMinutes:** 70 · **prerequisites:** `nih-ma460-9-1` · **kapitteltype:** modellbesvarelse
- **description:** Fire nyskrevne 10 p-oppgaver (én per hovedsjanger) besvart på både A- og C-nivå, med margnotater som viser presis gapet: hvor A legger til mekanismekjede, måling, metodekritikk og kontekst der C bare gjengir — operasjonaliserer nivåskillet A/C/E.
- **Eksamensbelegg:** Speiler nivåskillet fra analysen §4 på tvers av søylene (S-MEK i O₂/styrke, S-KRIT i overuse, S-KVANT/S-KRIT i FV, S-CASE i ergogenic). Prioritet: **perfekt (meta)**.
- **D-M-M-K-kontrakt:** 4 nyskrevne oppgaver, hver med: (a) `collapsible` **A-besvarelse** — full D-M-M-K med margnotater («her: definisjon + forankring», «her: metodekritikk — dette løfter til A»); (b) `collapsible` **C-besvarelse** — korrekt men flat (gjengivelse uten mekanisme/kritikk, tynn måling), med notater om gapet opp; (c) `tip` **Sensorblikket** — momentliste og delpoeng-fordeling. Nyskrevne oppgaver/tall.
- **Case-forslag:** de fire oppgavene dekker fire ulike søyler + fire ulike sjangre.
- **Typiske feil:** `tip`-notatene fremhever de faste feilene per sjanger (F1 liste, F4 overfladisk kritikk, F8 generisk case, F9 hoppe over delspørsmål).
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 9.3: Øvingseksamen 1 — klassisk seminaroppsett (2223–2425)

- **id:** `nih-ma460-9-3` · **number:** 9.3 · **estimatedMinutes:** 90 · **prerequisites:** `nih-ma460-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 3-timers sett med sju blokker à 10 p som speiler det klassiske oppsettet (running economy, muscle mechanics, O₂-transport, overuse, strength, integrert prestasjonsanalyse, match analysis), med A-løsningsforslag og delpoeng per blokk.
- **Eksamensbelegg:** Speiler en «typisk» 2223–2425-sitting (analysen §1/§7): de fem kjernesøylene + O₂-transport + muscle mechanics/FV. Prioritet: hele nivå 1–2.
- **D-M-M-K-kontrakt:** Komplett sett med **7 blokker à 10 p** (én per fagsøyle, blandede sjangre), **A-løsningsforslag i eget `collapsible` per blokk** (full D-M-M-K), `tip`-notat om delpoeng/vekting per blokk. Nyskrevne case/tall (opphavsrett). Tidsbudsjett ~25 min/blokk.
- **Case-forslag:** klassisk seminarmiks (soleus-kraft under løp, VO₂maks-begrensning, langrenn-pacing, match-analyse-tolkning).
- **Typiske feil:** `tip`-notatene peker på de faste feilene per blokk (F1–F9) og tidsfella.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 9.4: Øvingseksamen 2 — nytt seminaroppsett (2526)

- **id:** `nih-ma460-9-4` · **number:** 9.4 · **estimatedMinutes:** 90 · **prerequisites:** `nih-ma460-9-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 3-timers sett (7 × 10 p) som speiler det nye 2526-oppsettet med Ergogenic aids og Sex differences som egne blokker og styrke dreid mot cellulære hypertrofimekanismer, med A-løsningsforslag og delpoeng (inkludert case-oppgaver).
- **Eksamensbelegg:** Speiler 2526-oppsettet (analysen §1/§2): running economy, overuse, match analysis, integrert/racing, O₂-transport, sex differences, ergogenic aids/kreatin+koffein, cellulær styrke. Prioritet: hele nivå 1–2.
- **D-M-M-K-kontrakt:** Som 9.3, men med Ergogenic aids (case, 7+3-delpoeng) og Sex differences som egne blokker og styrke-blokken på mekanotransduksjon/satellittceller. A-løsningsforslag per blokk med delpoeng og case-relevans-notat. Nyskrevne case/tall.
- **Case-forslag:** 2526-miks (kreatin-sprinter, koffein-skiløper, kjønnsforskjell i VO₂maks, satellittceller).
- **Typiske feil:** `tip`-notatene fremhever case-relevans (F8), delpoeng-disiplin (F9) og metodekritikk (F4).
- **Quiz: 14 · Flashcards: 10**

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 1–8 — 32 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (momentliste
+ disposisjon) og delpoeng-fordeling. **Avvik dokumentert:** Del 0 (eksamenskart) og
Del 9 (eksamenstrening) har ingen egne temaprøver — Del 9 rommer modellbesvarelsene
og de to komplette øvingseksamenene. De **åtte fagsøylene (Del 1–8)** får **4 prøver
hver** = **32 temaprøver**. Prøve-id-ene følger mønsteret `nih-ma460-<del>-prove`
(chapterNumber `<del>.P`), jf. BYGGEKONTRAKT.

De fire prøvene per del er spesifisert i hver dels **Prøve-kvote**-linje over. Mønster:
prøve 1–3 dekker delens tre temakapitler hver for seg (S-MEK/S-KRIT/S-KVANT etter
kapitlets sjanger), prøve 4 er en **bred oppgave på eksamensnivå** — en full 10 p-blokk
med eksplisitte delpoeng (typisk definisjon + mekanisme + måling/metodekritikk), slik
reelle MA460-blokker fra 2024/25 er delt opp.

### Øvingseksamener (2 komplette sett — se kap. 9.3–9.4)

| Sett | Oppsett den speiler | Sju blokker (10 p hver) |
|---|---|---|
| Øvingseksamen 1 (kap. 9.3) | Klassisk 2223–2425 | Running economy · Muscle mechanics · O₂-transport · Overuse · Strength · Integrert/racing · Match analysis |
| Øvingseksamen 2 (kap. 9.4) | Nytt 2526 | Running economy · Overuse · Match analysis · Integrert/racing · O₂-transport · Sex differences · Ergogenic aids (kreatin+koffein) / cellulær styrke |

Til sammen dekker de to settene samtlige åtte fagsøyler flere ganger og alle fem
svarsjangre, med både det klassiske og det nye seminaroppsettet.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 t skoleeksamen, A–F, kun ordbok, engelsk
   oppgavetekst / svar på fire språk) og den sju-delte strukturen (én blokk per
   seminar à 10 p, 100 % flatt vektet) (fra kap. 0.1).
2. **De sju/åtte søylene og prioriteringskartet** — temafrekvens-tabellen omgjort til
   lesenivåer: **perfekt** (Del 1–6: running economy, overuse, match analysis,
   integrert/racing, O₂-transport, strength — alle 5–6/6), **kunne** (Del 7 muscle
   mechanics/FV-profil signaturstoff, Del 8 ergogenic aids nytt-antatt-fast).
3. **Masternivå-håndverket (D-M-M-K)** — definisjon → mekanismekjede → måling →
   forskningskritikk, med de fem svarsjangrene og case-/delpoeng-disiplinen (fra kap. 0.2).
4. **Sjangerguiden** — de fem sjangrene S-MEK/S-KRIT/S-KVANT/S-SAMLIGN/S-CASE med
   løsningsoppskriftene fra sjangerverkstedet (9.1) i kortform.
5. **Sensorkravene** — definer begreper, mekanisme framfor påstand, koble til måling,
   reell forskningskritikk, svar på alle delspørsmål, nyanse for A, kontekstrelevans;
   nivåskillene A/C/E (fra analysen §4).
6. **Feilkatalogen** — de typiske feilene F1–F9 samlet, hver med henvisning til
   kapitlet som forebygger den (særlig: oppramsing uten mekanisme, udefinerte begreper,
   glemt måling, overfladisk metodekritikk, FV som lineær, hel-muskellengde-feilen,
   ignorert kontekst i match-analyse, generisk kostholdsråd, hoppe over delspørsmål).
7. **Studieløp** — anbefalt progresjon: Del 0 → de fem kjernesøylene (Del 1–4 + Del 6)
   → O₂-komplekset (Del 5) → biomekanikk-fordypning (Del 7) → ergogenic aids (Del 8),
   med prøver underveis; de to øvingseksamenene de siste ukene under tidspress (180 min,
   ~25 min/blokk), én per seminaroppsett.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `nih-ma460` med alle 30
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen
   (obligatorisk).
2. **Del 0** (kap. 0.1–0.2) — etablerer sju-bloks-strukturen, de fem sjangrene,
   D-M-M-K-malen, sensorkravene og nivåskillet som resten refererer til.
3. **Kjernesøylene** (Del 1–4 + Del 6, én agent per del jf. batching-regelen) —
   running economy, overuse (forskningskritikk-signaturen), match analysis,
   integrert/racing, strength.
4. **O₂-komplekset** (Del 5, 4 kap — én agent) med lenker til [THP202](/bok/nih-thp202); **gjenta ikke**
   bachelor-mekanismene i dybde.
5. **Biomekanikk-fordypning** (Del 7, 3 kap) og **ergogenic aids** (Del 8, 2 kap) —
   én agent hver.
6. **Del 9** (sjangerverksted 9.1 + modellbesvarelser 9.2 + øvingseksamenene 9.3–9.4
   til slutt — de gjenbruker alt); temaprøvene (§4) legges i respektive delers
   `*-prove`-kapittel (`nih-ma460-<del>-prove`, chapterNumber `<del>.P`).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: matematiske uttrykk i `$...$`/`$$...$$`; `\\` i JSON; konsistent
  notasjon (F_soleus, PCSA, AGR, F0/V0, VO₂dem/VO₂/MAOD, cos(pennasjon)).
- [ ] **D-M-M-K per temakapittel**: definisjon (norsk+engelsk) + mekanismekjede +
  målekontrakt + (der relevant) metodekritikk-akse — grep at hvert temakapittel har
  alle fire lagene.
- [ ] **Definisjoner er flashcard-kilden**: `definition`-blokker på toppnivå med
  `title` (definition-telling ≥ flashcard-kvoten per kapittel).
- [ ] **Forskningskritikk reell**: Del 2/3/7-kapitlene drøfter design/utvalg/
  definisjon/konfunder konkret (ikke «trengs mer forskning») — grep S-KRIT-momenter.
- [ ] **Case-relevans**: Del 8 (og case-oppgaver ellers) knytter råd til den
  spesifikke idretten + respons-verifisering (ikke generisk, F8).
- [ ] **Delpoeng**: prøve 4 per del og øvingseksamenene har eksplisitt delpoeng-
  fordeling (speiler reell 3,33 / 7+3-oppdeling).
- [ ] **Norsk/engelsk begrepspar**: sentrale begreper gis engelsk term i parentes ved
  første forekomst (running economy, oxygen deficit, MAOD, force-velocity profile,
  match analysis, satellite cells, mechanotransduction, pennation angle).
- [ ] **Kryssbok-lenker**: [THP202](/bok/nih-thp202)- og [THP203](/bok/nih-thp203)-lenker peker kun på kapitler som
  finnes; THP100/THP101/THP204/IDR109 beskrives kort i teksten til bøkene finnes
  (ingen døde lenker).
- [ ] **Ikke gjenta bachelor i dybde**: O₂-søylen (Del 5) og styrke (Del 6) lenker til
  [THP202](/bok/nih-thp202) for grunnmekanismene og fordyper på masternivå (måling/forskning/kritikk).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  D-M-M-K-liste-`collapsible`, Kjernebegreper-`definition` (m/title), Mekanismekjede-
  `text`, Måling-og-forskningskritikk-`text`, Typiske feil-`warning`, 2–3 eksempler
  (siste på eksamensnivå), 5–8 øvinger med `solution` + `hints`, pensumkart/
  repetisjons-`collapsible`; Del 9-kapitlene har egne oppsett (§3).
- [ ] **Quiz-sum ≥ 662 og flashcard-sum ≥ 672** per §3/§7 (autoritativ total).
- [ ] **Prøver**: 4 per fagsøyle Del 1–8 (32 stk) + 2 øvingseksamener (9.3–9.4) som
  sammen dekker alle fem sjangre og begge seminaroppsett.
- [ ] **Opphavsrett**: ALLE oppgaver, case, casenavn og tall nyskrevne; ingen
  formuleringer fra reelle sett/sensorveiledninger (skjelettets mønstereksempler er
  selv omskrivninger og varieres videre); ingen oppdiktede pensumreferanser.
- [ ] **`(verifiser)`-markering**: alle usikre tallverdier/evidensgrader/protokoll-
  detaljer merket (grep `-i verifiser`).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

---

## 7. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

**Quiz totalt: 662 · Flashcards totalt: 672** (begge godt over gulvet ≥500).

| Del | Fagsøyle | Kapitler | Quiz | Flashcards |
|---|---|---|---|---|
| 0 — Eksamenskart + håndverk | meta | 0.1–0.2 | 42 | 36 |
| 1 — Running economy | 6/6 | 1.1–1.3 | 66 | 72 |
| 2 — Overuse (forskningskritikk) | 6/6 | 2.1–2.3 | 72 | 72 |
| 3 — Match analysis | 6/6 | 3.1–3.3 | 66 | 66 |
| 4 — Integrert/racing | 6/6 | 4.1–4.3 | 72 | 72 |
| 5 — O₂-transport + kjønn | 5–6/6 | 5.1–5.4 | 92 | 100 |
| 6 — Styrke (mekanismer) | 6/6 | 6.1–6.3 | 72 | 80 |
| 7 — Muskelmekanikk/FV | 4/6·3/6 | 7.1–7.3 | 72 | 78 |
| 8 — Ergogenic aids | 2/6 (nytt) | 8.1–8.2 | 48 | 52 |
| 9 — Eksamenstrening | meta | 9.1–9.4 | 60 | 44 |
| **Sum** | | **30 kap** | **662** | **672** |

**Prøvekvote:** 32 temaprøver (4 per fagsøyle Del 1–8) + 2 komplette øvingseksamener
(kap. 9.3–9.4). Prøve-id: `nih-ma460-<del>-prove` (chapterNumber `<del>.P`).

**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** MA460 er et **masternivå
drøftingsfag med tungt begreps- og mekanismeapparat** som må sitte utenat (3 t
skoleeksamen, **kun ordbok** — ingen formelsamling). Derfor ligger **flashcards (672)
høyere enn quiz (662)**: hver fagsøyle krever presise definisjoner (norsk + engelsk),
mekanismekjede-ledd, målemetode-koblinger og forskningskritikk-momenter utenat, og
disse er flashcard-gull. Quiz drilles på definisjonspresisjon, kjede-ledd og
metodekritikk (kortsvar/begrep — IKKE flervalg, som faget ikke har). **Oksygen-
komplekset (Del 5, 92 quiz / 100 fc)** er tyngst fordi det i realiteten er to blokker
(O₂-transport + kjønnsforskjeller) og har mest normalverdi-/mekanismefakta. De to
kjernesøylene med tyngst mekanisme-/faktalag (overuse Del 2, integrert/racing Del 4,
styrke Del 6, muskelmekanikk Del 7) ligger relativt tett. Ergogenic aids (Del 8, 2
kap) og eksamenstrening (Del 9) holder lavere tetthet — Del 9 fordi verdien der er
hele-blokk-gjennomkjøring under tidspress, ikke enkeltfakta. Alle kapittel-kvotene
summerer eksakt til totalene (verifisert per del).

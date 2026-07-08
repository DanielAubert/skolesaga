# Bokskjelett: Nasjonal deleksamen i matematikk for grunnskolelærerutdanningen (GLU) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NOKUT-arkivet 2015–2026: ~30 sensorveiledninger, alle
> sittinger i det gjeldende regimet 2020→ gjennomgått, de siste ~8 grundig; ~193
> deloppgaver i 1–7 over 12 sett, ~270 i 5–10 over 13 sett). Alle oppgaver,
> elevsvar, figurtekster og formuleringer i boka skal være NYSKREVNE (se §6).
> Matematiske begreper, notasjon og didaktiske standardtermer (relasjonelt
> likhetstegn, variabelbegrep, rekursiv/eksplisitt formel, LK20-kompetansemål) er
> allment fagstoff og fritt å bruke.
>
> **To ting er kritisk for kalibreringen.** (1) Boka skrives mot det GJELDENDE
> regimet: tema = **algebraisk tenkning** (temaskifte V2020, ikke brøk/desimal/
> prosent), form = **skoleeksamen UTEN hjelpemidler** (hjelpemiddelskifte H2022 —
> ALT for hånd, ingen GeoGebra/graftegner/regneark). (2) Eksamen tester **samtidig
> matematisk ferdighet og fagdidaktisk forklaringsevne** — nesten alt er didaktisk
> innrammet (elevsvar, misoppfatninger, LK20, trinntilpasning). Didaktiske detaljer
> forfatteren er usikker på (spesifikke LK20-kompetansemålformuleringer, trinn-
> plassering av mål) merkes `(verifiser)` for fagfellesjekk i fase 6.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nokut-glu-matte` |
| Tittel | **Nasjonal deleksamen i matematikk (GLU)** |
| Institusjon (navigasjon) | NOKUT — nasjonal deleksamen. Visningsnavn i `institusjoner.ts`: «GLU-matte Nasjonal deleksamen i matematikk (GLU)». |
| Level | `'Høyskole'` |
| Arketype | **Didaktikk-regnefag (hybrid)** — se §2 «Arketypevalg» |
| Antall kapitler | **42** (Del 0: 4 · temadeler 1–10: 28 · eksamenstrening Del 11: 10) |
| Estimert totaltid | **~2 320 min ≈ 38,5 timer** fordelt per kapittel under |
| Quiz totalt | **702** (krav ≥500; gulv, ikke mål) |
| Flashcards totalt | **634** (krav ≥500; gulv, ikke mål) |

**Pitch:** Dette er den nasjonale deleksamenen i matematikk som ALLE norske
grunnskolelærerstudenter avlegger — samme dag, hver vår og høst, ved 13
institusjoner. Faget er derfor en av bokas største enkeltmålgrupper. Formen er
låst (2022→): **individuell, skriftlig digital skoleeksamen på 4 timer
(WISEflow/Inspera), INGEN hjelpemidler, karakterskala A–F, ekstern sensur**,
~10 oppgaver / 14–25 deloppgaver som gir **25–33 poeng**. Karaktergrensene settes
**per sitting i etterkant** — det finnes ingen fast bestått-tall; E-grensen har
historisk ligget på **~35–47 % av maks**, A på **~85–90 %**. Alt er fritekst og
tegning, rettet **manuelt moment for moment** med finmasket **2/1/0-poengføring**.
Eksamen finnes i **to varianter etter løp** — GLU 1–7 (barnetrinn/begynner­opplæring)
og GLU 5–10 (mellom-/ungdomstrinn) — som deler tema, format og sensorlogikk, men
skiller seg i vanskegrad og didaktisk vekt. Boka er derfor **ÉN bok med to spor**:
en delt algebra-kjerne pluss differensierte 1–7- og 5–10-spor. Fem temaer bærer
begge variantene hvert eneste år: (1) figurmønster/generalisering med rekursiv +
eksplisitt formel, (2) algebraiske (5–10: rasjonale) uttrykk, (3) likninger/
ulikheter, (4) funksjoner/grafisk representasjon, (5) tallstruktur-bevis «vis
algebraisk». Boka driller for HVERT tema både **studentens egen matematikk for
hånd** OG den **didaktiske skrivingen** (analyser gjengitt elevsvar, beskriv
misoppfatning, forklar tiltak, design oppgave, forankre i LK20), og trener de
faste sensorreglene eksplisitt.

**Kalibreringsregler (ufravikelige):**

1. **Tema = algebraisk tenkning (V2020→).** Brøk/desimal/prosent er IKKE lenger
   eget eksamenstema — forekommer bare som bærer for algebraisk generalisering
   (og som forkunnskap/prosentpoeng-felle for lærerstudenten selv). Settene
   2015–2018 (felles brøk-regime) er ikke representative og omtales kun som
   historisk kontrast i kap. 0.1. Del 1–2 i boka (tallforståelse, brøk/desimal/
   prosent) er derfor **forkunnskaps-/lærerfaglig grunnlag** — de er med fordi
   1–7-studenten skal *undervise* dette og fordi prosentpoeng-fellen og relasjonell
   tallforståelse er reelle eksamensinnslag — men de er IKKE selve algebra-kjernen.

2. **Form = skoleeksamen UTEN hjelpemidler (H2022→).** ALL symbolmanipulasjon,
   ALLE figur-/grafskisser og ALLE generaliseringsbevis skal kunne gjøres for hånd,
   under tidspress. Oppgaver som forutsetter dynamisk programvare (regnearkløsning
   av likningssett, GeoGebra-graf) er BORTE — bygg aldri på dem. Den digitale
   hjemmeeksamenen med «alle hjelpemidler» (V2020–V2022) er en anomali og aldri
   normgivende for drilldesignet.

3. **To spor, ett tema.** Merk HVERT kapittel og HVER oppgave med **[1–7]**,
   **[5–10]** eller **[felles]**, slik at en student kan følge sitt spor. 1–7 er
   ~20–30 % matte / ~70–80 % didaktikk; 5–10 er ~50/50. Den delte kjernen (Del 3)
   og de fem bæretemaene leses av begge; 5–10-tunge teknikker (potenslover,
   kvadratrøtter, rasjonale uttrykk, kvadratsetninger, likningssett, ikke-lineære
   formler) merkes tydelig **[5–10]**.

4. **Sensornøkkelen drilles eksplisitt** (se §2 «De faste sensorreglene»):
   talleksempel ≠ bevis; «ikke bruk symbolsk algebra» krever figur som bevis;
   notasjonsstrenghet (feil variabelbokstav = 0 p); følgefeil trekker ikke dobbelt;
   feil begrunnelse på «ikke begrunn»-oppgaver gir trekk (fra V2024); begge deler
   av et sammensatt krav må stemme; to «ulike» metoder må være kvalitativt ulike;
   bestått krever å høste 1-poengsdelene BREDT.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart + didaktikk-skrivehåndverk + sensurnøkkel) →
lærerfaglig tallgrunnlag (Del 1–2, mest 1–7) → algebra-kjernen (Del 3) → de fem
bæretemaene (Del 4–8) → geometri/statistikk som kontekst (Del 9–10) →
spor-delt eksamenstrening (Del 11).** Innenfor algebraen ordnes delene etter faglig
avhengighet (variabel/likhetstegn før mønster/uttrykk/likninger før bevis);
frekvensen styrer *omfanget* (figurmønster er størst).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Spor | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | Eksamenskart og didaktisk skrivehåndverk | 4 | felles | perfekt (meta) | Format, 2/1/0-rubrikken, de didaktiske sjangrene, «vis algebraisk vs. figurbevis» og notasjonsstrengheten må sitte FØR fagstoffet. Studentens prioriterings- og skriveverktøy. |
| 1 | Tallforståelse, posisjonssystem og regnestrategier | 3 | 1–7 tyngst | kunne | Lærerfaglig grunnlag for begynneropplæringen; relasjonell tallforståelse og generaliserbare regnestrategier er inngangen til algebra. Ikke eget eksamenstema, men bærer 1–7-didaktikken. |
| 2 | Brøk, desimaltall og prosent | 2 | 1–7 tyngst | kjenne | Ikke lenger eksamenstema, men (a) prosentpoeng-vs-prosent-fellen er reell, (b) brøk-/desimalforståelse er forkunnskap for rasjonale uttrykk (5–10). Kompakt, men fullstendig. |
| 3 | Algebraisk tenkning: likhetstegn og variabel | 3 | felles kjerne | perfekt | Den delte kjernen begge spor leser. Relasjonelt likhetstegn (1–7-signaturen), variabelbegrepet (variabel/ukjent/generalisert tall), toveis oversettelse ord↔symbol. Avgjør C mot A. |
| 4 | Figurmønster og generalisering | 5 | felles (+5–10-tillegg) | perfekt | **Tyngste domenet i begge varianter, hvert sett** (~40 deloppg. 1–7, ~48 5–10). Rekursiv + eksplisitt formel, «to elevers formler», formel↔figur. Ikke-lineære følger [5–10]. Får flest kapitler. |
| 5 | Likninger og ulikheter | 3 | felles (+5–10-tillegg) | perfekt | Skålvekt/balanse [1–7], logisk resonnement, ulikheter (opp fra 2023), likningssett + andregrad [5–10]. ~30 (1–7) / ~37 (5–10) deloppg. |
| 6 | Algebraiske og rasjonale uttrykk | 4 | felles + 5–10-spor | perfekt | Sammentrekning/distributiv/ekvivalens [felles]; **rasjonale uttrykk + linjenummerert feilanalyse er 5–10-signaturen** (fast egen oppg. fra V2024); potenslover, kvadratsetninger/faktorisering [5–10]. ~30 (1–7) / ~38 (5–10). |
| 7 | Funksjoner og grafisk representasjon | 3 | felles | perfekt | Representasjonssentrert (graf↔situasjon↔uttrykk, «er dette en funksjon?», grafskisse fra fortelling, lineær modell). ~25 (1–7) / ~40 (5–10) deloppg. |
| 8 | Tallstruktur-bevis: «vis algebraisk» | 3 | felles (+5–10-tillegg) | perfekt | Den «rene matematikken»: partall/oddetall, delelighet, hundrekart, «tenk på et tall». Illustrasjon som bevis [1–7]; formelle bevis + `6n±1` [5–10]. Huser talleksempel≠bevis-drillen. |
| 9 | Geometri og måling som algebra-kontekst | 1 | felles | kjenne | Ikke selvstendig tema — kun som bærer (areal for distributiv lov, volumformel-omskriving som algebra). Ett kompakt kapittel. |
| 10 | Statistikk og sannsynlighet som funksjons-/mønster-kontekst | 1 | felles | kjenne | Ikke selvstendig tema — kun som kontekst for funksjoner/mønster/tabell. Ett kompakt kapittel. |
| 11 | Eksamenstrening | 10 | spor-delt | perfekt (meta) | 4 didaktiske sjangerdrillkapitler + 1 «vis algebraisk/figurbevis»-drill + øvingseksamener PER SPOR: 3 for 1–7, 2 for 5–10 (uten hjelpemidler, 2/1/0-rubrikkfasit). |

Rasjonale: nivå-1-temaene (algebra-kjernen + de fem bæretemaene, Del 3–8) får flest
kapitler og høyest kvote med full drill av BÅDE matematikk og didaktikk; det
lærerfaglige tallgrunnlaget (Del 1–2) er solid men kompakt (mest 1–7); geometri/
statistikk (Del 9–10) er minimalt (kun kontekst). **Ingenting av det som faktisk
testes utelates** — prioriteringen styrer dybde og drillmengde.

### Arketypevalg: didaktikk-regnefag (hybrid, dokumentert)

Ingen enkelt DNA-mal passer. Faget er samtidig et **regnefag** (studenten skal
utføre symbolmanipulasjon, formelutledning og bevis for hånd, med entydige(re)
fasitmomenter og gjentatte oppgavemønstre → drill) OG et **didaktikk-/
skrivetreningsfag** (nesten alt er innrammet i elevsvar, misoppfatninger,
trinntilpasning og LK20; sensor vurderer den didaktiske *forklaringen* moment for
moment slik et drøftingsfag vurderer et essay). Boka bruker derfor **DNA-regnefag
som base** og **låner tungt fra DNA-drofting**:

**Fra DNA-regnefag (base):**
- Makrostruktur: Del 0 eksamenskart → temadeler etter avhengighet, omfang etter
  frekvens → eksamenstrening med sjangerkapitler + øvingseksamener.
- For-hånd-regneprosedyrer presenteres som **`theorem`-blokker** (potenslover,
  kvadratsetninger, løsningsalgoritmer) i emnets notasjon; utledninger som eksamen
  krever aktivt («begrunn potensloven med ord og symboler») vises steg for steg.
- Drill av gjentatte oppgavemønstre; øvingseksamener med A-besvarelses-føring.

**Fra DNA-drofting (lånt):**
- **Del 0 utvides til et fullt skrivehåndverk** (som drøftingsfagets essayhåndverk):
  hvordan man bygger et didaktisk svar (analyser elevsvar → identifiser
  misoppfatning → forklar tiltak → forankre i LK20), og hva som skiller A/C/E.
- **Modellbesvarelse-logikken**: didaktiske oppgaver får gjennomskrevne modellsvar
  på flere nivåer (E-svar korrekt men flatt vs. A-svar med presis misoppfatnings-
  analyse og LK20-forankring), med margnotater om hvor poengene faller.
- **Moment-for-moment-vurdering**: fritekst rettes mot en punktliste (2/1/0), akkurat
  som drøftingsfagets sensorblikk — men her med matematisk fasit i tillegg.

**Nytt/skreddersydd (dokumenterte tillegg — ikke avvik, men fagets natur):**
- **To-spor-merking** på hvert kapittel og hver oppgave ([1–7]/[5–10]/[felles]).
- Fire faste **didaktiske maler** som gjennomgående akse i hvert temakapittel (se
  under): elevsvar-analyse-mal, misoppfatning→tiltak-mal, oppgavedesign-mal m/LK20,
  og «to elevers formler/strategier»-mal.
- To eksplisitte **sensur-warnings** i hvert relevant kapittel: «vis algebraisk ≠
  talleksempel» og notasjonsstrenghet.

**Dokumenterte avvik fra DNA-regnefag (med begrunnelse):**

1. **Didaktikk-vekt over rein regning.** DNA-regnefag antar entydig fasit og
   drillbare regnemønstre. Her er 70–80 % (1–7) / ~50 % (5–10) *didaktisk*, uten
   entydig fasit — sensor retter forklaringen mot en punktliste. Derfor er
   `example`-blokkene ofte **didaktiske modellsvar** (ikke bare regnede eksempler),
   og hvert temakapittel har de fire didaktiske malene. Begrunnelse: analysen §5
   («eksamenens mest karakteristiske trekk») gjør dette til fagets kjerne.

2. **42 kapitler ligger over DNA-vinduet (20–35).** Bredden er forsvart av at
   boka rommer **to spor** (delt kjerne + differensierte 1–7-/5–10-tillegg), et
   fullt didaktisk skrivehåndverk (Del 0), og et lærerfaglig tallgrunnlag (Del 1–2)
   som ikke finnes i et rent regnefag. Ingen del er oppblåst: bæretemaene får full
   dobbeltdrill (matte + didaktikk), grunnlags- og kontekstdelene (1–2, 9–10) er
   slanke.

3. **Symbol-/formelliste → «Notasjons-, begreps- og LK20-liste».** README-kravet om
   en collapsible rett etter Forkunnskaper omtolkes: hvert temakapittel får en
   `collapsible` **«Notasjon, begreper og LK20»** som samler (a) symbolvalg og
   notasjon brukt i delkapitlet, (b) de didaktiske kjernebegrepene (misoppfatning,
   relasjonelt/operasjonelt likhetstegn, rekursiv/eksplisitt formel osv.), og (c)
   de relevante LK20-kompetansemålene i algebra (merket `(verifiser)`). Symbolfrie
   didaktiske kapitler får begrepsdelen uansett.

4. **Eksamenstreningen er spor-delt.** I stedet for felles øvingseksamener har boka
   **egne øvingseksamener per spor** (3 for 1–7, 2 for 5–10) fordi settene faktisk
   er separate faggrupper med ulik vanskegrad. Begrunnelse: analysen §1/§7 (to
   separate sett). Sjangerdrillkapitlene er felles (sjangrene er de samme).

5. **Ingen navngitt pensumforankring (til forskjell fra drøftingsfag).** Forankringen
   er til **LK20-kompetansemålene** og til de didaktiske standardbegrepene (som er
   allmenne, ikke forfatter-eide). ALDRI oppdiktede kompetansemål — usikre mål-
   formuleringer/trinn merkes `(verifiser)`.

### De didaktiske sjangrene (fra analysen §3/§5 — sjangerkoder brukt i «Eksamensbelegg»)

**Matematisk-tunge sjangre:**
**E** figurmønster → formel (tegne neste figur, beskrive utvikling, finne bestemt
ledd, rekursiv+eksplisitt formel, «på to ulike måter») · **L** forenkling av
(rasjonalt) uttrykk med vist framgangsmåte [5–10] · **K** potenslov-utledning (ord
+ symboler) [5–10] · **M** likningssett fra kontekst [5–10] · **A** «vis algebraisk
at … alltid gjelder» (generelt bevis, talleksempel = 0 p) · **J** illustrasjon som
bevis (figur/areal/prikkmønster; «ikke bruk symbolsk algebra») [særlig 1–7].

**Didaktikk-tunge sjangre (de faste formatene):**
**B** feilanalyse med linjehenvisning («beskriv feilen, mellom hvilke linjer»;
følgefeil ikke dobbelt) · **C** multivalgt elevvurdering («avgjør for hver», ofte
uten begrunnelse — feil begrunnelse trekker fra V2024) · **D** «alltid/av og til/
aldri sant» (klassifiser + begrunn med trinntilpassede talleksempler) · **F** «lag
en kontekst/regnefortelling til uttrykket» (oversette symbolsk↔virkelighet) · **G**
«løs på to ulike måter / to strategier elever kan bruke» (kvalitativt ulike) ·
**H** skålvekt/balansemodell for likninger (tilpasset trinn; når modellen svikter)
· **I** likhetstegn-diagnose (relasjonelt vs. operasjonelt elevsvar) [særlig 1–7] ·
**N** oppgavedesign/trinntilpasning (lag oppgave m/løsning for trinn/elevgruppe,
LK20-forankring).

### De fire didaktiske malene (gjennomgående akse i hvert temakapittel)

Hvert temakapittel (Del 3–8) skal — i tillegg til det matematiske innholdet — bruke
disse fire malene så temaet blir koblet til elevperspektivet. De er bokas
didaktikk-DNA og fylles med temaets konkrete misoppfatninger:

1. **Elevsvar-analyse-mal (sjanger B/D):** et NYSKREVET, gjengitt elevsvar (med
   nummererte linjer der relevant) → «Er svaret/resonnementet korrekt? Begrunn» →
   modellsvar som peker på *hva* som er riktig/galt, *hvor* (linjenummer), og skiller
   feil fra følgefeil (som ikke trekker dobbelt).
2. **Misoppfatning→tiltak-mal (sjanger I/H):** navngi misoppfatningen bak feilen
   («likhetstegnet leses operasjonelt», «variabel oppfattes som objekt/forkortelse»,
   «prosentpoeng forveksles med prosent», «feil generalisering av mønster») →
   forklar *hvorfor* eleven tenker slik → konkret tiltak/representasjon tilpasset
   trinn (tallinje, skålvekt, prikkmønster, brikker).
3. **Oppgavedesign-mal m/LK20 (sjanger N):** lag en ny oppgave med løsningsforslag,
   tilpasset et bestemt trinn eller elevgruppe («stort læringspotensial» = vanskeligere;
   «trenger mestring» = lettere), og begrunn nivåtreffet MED henvisning til et LK20-
   kompetansemål (`(verifiser)` formulering/trinn).
4. **To elevers formler/strategier-mal (sjanger E/G):** to ekvivalente formler eller
   to kvalitativt ulike løsningsmetoder → «beskriv hvordan to elever kan ha tenkt» →
   vis koblingen til figuren/situasjonen for hver (to ganger samme metode teller som én).

### De faste sensorreglene (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Moment-/kriteriebasert 2/1/0-retting.** Hver deloppgave gir typisk 2, 1 eller 0
   poeng (noen 3/2/1/0 eller 1/0), med eksplisitte kriterier for hvert nivå.
2. **Delvis pott er finmasket** («2 p ved fullstendig; 1 p ved mindre mangel / bare
   én av to metoder / riktig figur men mangelfull ordforklaring»). Sikre
   1-poengsdelen selv når det tunge glipper.
3. **Talleksempel ≠ bevis.** «Vis algebraisk» → rene talleksempler = **0 p**.
4. **Figur som bevis.** «Ikke bruk symbolsk algebra / bruk figurene» → rent symbolsk
   svar gir ikke uttelling; figuren *er* beviset.
5. **Notasjonsstrenghet.** Fastsatt symbolvalg (f.eks. `p` for planker) → feil bokstav
   = **0 p** selv om strukturen er riktig. Variabler skal defineres.
6. **Følgefeil trekker normalt ikke dobbelt** i feilanalyse- og flertrinnsoppgaver.
7. **To ulike metoder må være kvalitativt ulike;** samme metode to ganger = én.
8. **Begge deler av et sammensatt krav må stemme** (både klassifisering *og* begrunnelse;
   både variabelnavn *og* det variabelen representerer).
9. **«Ikke begrunn» + feil begrunnelse = trekk** (fra V2024).
10. **Trinnkravet er en del av vurderingen** («tilpasset X. trinn / begynneropplæringen»).
11. **Bestått høstes bredt.** E ≈ 35–47 % av maks → sikre 1-poengsdelene, flervalg og
    de enkle mønster-/likningsoppgavene over HELE bredden; A ≈ 85–90 % krever de
    fullstendige generelle bevisene og den presise feilanalysen.

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–N) temaet inngår i,
   spor ([1–7]/[5–10]/[felles]), og hva sensor ser etter. Fylles fra skjelettets
   Eksamensbelegg — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker
   (README-leserkrav), etterfulgt av `collapsible` **Notasjon, begreper og LK20**
   (symbolvalg, didaktiske kjernebegreper, relevante LK20-mål `(verifiser)`).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvorfor temaet er sentralt i
   algebraisk tenkning og i elevenes læring.
4. `definition`/`theorem` — matematiske begreper og for-hånd-prosedyrer i emnets
   notasjon (**toppnivå `definition` med `title` = flashcard-kilden**); prosedyrer/
   lover/setninger som `theorem` med utledning der eksamen krever den aktivt.
5. `text` **Elevperspektivet** — de typiske misoppfatningene for dette temaet, hvorfor
   de oppstår, og hvilke representasjoner/tiltak som hjelper (råstoff for malene).
6. `example` × 2–4 — blandet: minst ett **matematisk** eksempel (for-hånd-prosedyre
   på eksamensnivå, A-føring) OG minst ett **didaktisk modellsvar** (elevsvar-analyse
   eller misoppfatning→tiltak, skrevet som full-pott-momentliste med 2/1/0-poeng synlig).
7. `warning` **Typiske feil** — elevmisoppfatningene OG kandidatfeilene fra sensor-
   veiledningene; inkluder **«vis algebraisk ≠ talleksempel»**-warning og
   **notasjonsstrenghet**-warning der temaet utløser dem.
8. `exercise` × 6–12 — stigende, blandet: matematiske (for hånd) + didaktiske (de fire
   malene). Hver oppgave merket med **sjangerkode (A–N)** og **spor**. Alle med
   `solution` (momentliste-fasit med 2/1/0-poeng) + `hints`.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og fra
   kapitler det bygger på.

Del 0- og Del 11-kapitlene har egne oppsett (se §3).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–N) + spor +
> prioritetsklasse (perfekt/kunne/kjenne/meta). **Innholdskontrakt** = matematiske
> definisjoner/prosedyrer/setninger som SKAL med (i notasjon), utledninger som kreves
> aktivt vs. kun bruk. **Didaktisk kontrakt** = misoppfatninger + hvilke av de fire
> malene kapitlet skal levere. **Oppgavesjangre** = sjangrene kapitlet driller, med
> omskrevet mønstereksempel. **Typiske feil** = elev- OG kandidatfeil. **Kvote** =
> quiz/flashcards.
>
> Prosareferanser i innholdet bruker del-basert form («kap. 4.2», «se kap. 3.1»).

### Del 0 — Eksamenskart og didaktisk skrivehåndverk

#### Kapittel 0.1: Slik testes GLU-matematikkeksamenen
**id:** `nokut-glu-matte-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart. **Spor:** felles.
- **Description:** Eksamensformen, de to variantene, temafrekvensen, de to store
  regimeskiftene, og hvordan boka brukes mot eksamen — studentens prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2015–2026). Skal formidle: (a)
  **gjeldende form** — 4 t digital skoleeksamen (WISEflow/Inspera), 09:00–13:15 (siste
  15 min klargjøring), INGEN hjelpemidler, A–F, ekstern sensur med to sensorer, ~10
  oppgaver / 14–25 deloppgaver = 25–33 p, alt fritekst/tegning rettet manuelt moment
  for moment; (b) **de to variantene** — GLU 1–7 (barnetrinn/begynneropplæring, ~20–30 %
  matte / 70–80 % didaktikk) og GLU 5–10 (mellom-/ungdomstrinn, ~50/50), separate
  faggrupper, felles tema/format/sensorlogikk; (c) **de to regimeskiftene** —
  temaskiftet V2020 (brøk/desimal/prosent → **algebraisk tenkning**) og hjelpemiddel-
  skiftet H2022 (fra digital hjemmeeksamen med «alle hjelpemidler» tilbake til
  skoleeksamen UTEN hjelpemidler — ALT for hånd); (d) **temafrekvens-tabellene** (per
  spor, fra analysen §2): 1–7 — figurmønster/generalisering ~40 (hvert sett),
  algebraiske uttrykk ~30, likninger/ulikheter ~30, funksjoner ~25, variabelbegrep ~22,
  aritmetikk→algebra ~20, likhetstegn ~14, tallstrukturer ~12; 5–10 — figurmønster ~48,
  funksjoner ~40, algebraiske/rasjonale uttrykk ~38, likninger/likningssett ~37,
  tallmønstre/bevis ~30, potenser/potenslover ~14, andregrad/kvadratsetninger ~12; (e)
  **karaktergrenser settes per sitting i etterkant** — ingen fast bestått-tall; E ≈
  35–47 % av maks (ofte 10–13 av 26–33), A ≈ 85–90 % (bruk de dokumenterte spennene fra
  analysen §4, men understrek at grensene varierer); (f) **strategikonsekvensen** —
  bestått høstes ved å ta 1-poengsdelene, flervalg og de enkle oppgavene BREDT; topp
  krever de fullstendige bevisene og den presise feilanalysen.
- **Innholdskontrakt:** Sjangerkatalogen A–N som studentens sjekkliste med spor og
  frekvens; **prognosen for neste eksamen** per spor (fra analysen §7): begge — minst én
  figurmønster-/generaliseringsoppgave med formelkrav og «to elevers formler»; forenkling/
  analyse av algebraiske (1–7) eller rasjonale (5–10) uttrykk med linjenummerert
  feilanalyse; en likning/ulikhet med elevanalyse (skålvekt i 1–7); en funksjons-/
  grafoppgave; et «vis algebraisk»-tallstrukturbevis; en likhetstegn-/variabeldiagnose
  (særlig 1–7); 5–10 i tillegg: potenslov-utledning og/eller likningssett fra kontekst.
- **Kapitteltype-oppgaver:** 3–4 refleksjonsoppgaver: «settet ditt (1–7 eller 5–10) har
  ~18 deloppgaver på 4 timer — hvilke sikrer du først for å bestå?»; «hvorfor gir et
  korrekt talleksempel 0 poeng på en ‘vis algebraisk’-oppgave?».
- **Typiske feil:** Metafeilene — lese mot feil regime (brøk/hjelpemidler); tro at man
  kan slå opp (ingen hjelpemidler); bruke for lang tid på ett tungt bevis når 1-poengs-
  delene ligger igjen; blande de to sporene.
- **Kvote:** 12 quiz / 12 flashcards (format, de to variantene, regimeskiftene,
  sjangerkatalog, frekvenser, karaktermønster).

#### Kapittel 0.2: Didaktisk skrivehåndverk — elevsvar, misoppfatning, tiltak, oppgavedesign
**id:** `nokut-glu-matte-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-0-1`

- **Kapitteltype:** skrivehåndverk. **Spor:** felles (fundamentet for begge).
- **Description:** Hvordan man skriver de fire didaktiske svartypene som bærer eksamen —
  analyser et elevsvar, beskriv en misoppfatning, forklar et tiltak, design en oppgave
  med LK20-forankring — og hva som skiller A/C/E i et didaktisk svar.
- **Eksamensbelegg:** Destillat av analysen §3/§5 (de didaktiske formatene er hyppigst;
  1–7 er ~70–80 % didaktikk). Prioritet: perfekt (meta). Skal operasjonalisere de fire
  malene (§2) som skriveoppskrifter, og etablere spørreord-styringen: «avgjør/begrunn»
  = generell argumentasjon; «beskriv» = gjør rede for mønster/tenkning med ord (+ evt.
  figur); «forklar hvordan du (som lærer) vil hjelpe eleven» = didaktisk handling
  tilpasset trinn; «du trenger ikke begrunne» = bare valget sensureres, MEN feil
  begrunnelse gitt likevel trekker (V2024).
- **Innholdskontrakt (håndverk):** (1) **Elevsvar-analyse**: identifiser hva som er
  riktig, hva som er galt, og *hvor* (linjenummer); skill feil fra følgefeil (ikke
  dobbelttrekk). (2) **Misoppfatningsanalyse**: navngi misoppfatningen presist og forklar
  *hvorfor* eleven tenker slik — ikke bare «eleven regner feil». (3) **Tiltak**: konkret,
  trinntilpasset representasjon/handling (ikke «øve mer»). (4) **Oppgavedesign**: oppgave
  + løsningsforslag + nivåbegrunnelse + LK20-forankring. **A/C/E-kalibreringen for et
  didaktisk svar**: E = korrekt observasjon uten dybde («eleven svarer feil»); C =
  riktig identifikasjon av feilen, men tynn misoppfatningsanalyse eller generisk tiltak;
  A = presis navngitt misoppfatning + *hvorfor* + konkret trinntilpasset tiltak + korrekt
  LK20-forankring.
- **Didaktisk kontrakt:** ALLE fire malene med gjennomskrevne modellsvar; ett
  gjennomgående mini-elevsvar besvart på E-, C- og A-nivå med margnotater om hvor
  poengene faller (lånt fra drøftingsfagets modellbesvarelse-logikk).
- **Typiske feil:** Deskriptiv gjengivelse uten analyse (bare «eleven gjør slik»);
  tiltak uten forankring i misoppfatningen; feil begrunnelse på «ikke begrunn»-oppgaver
  (trekk); oppgavedesign uten LK20-forankring eller uten løsningsforslag.
- **Kvote:** 18 quiz / 16 flashcards (de fire malene, spørreord-styringen, A/C/E-nivåene,
  V2024-regelen).

#### Kapittel 0.3: «Vis algebraisk» vs. figurbevis, og notasjonsstrengheten
**id:** `nokut-glu-matte-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-0-2`

- **Kapitteltype:** bevishåndverk. **Spor:** felles.
- **Description:** De to bevisregimene sensor skiller skarpt mellom — det generelle
  symbolske beviset («vis algebraisk») og figur-/prikkbeviset («ikke bruk symbolsk
  algebra») — pluss notasjonsstrengheten som nuller riktig struktur med feil bokstav.
- **Eksamensbelegg:** Sjanger A + J; sensorreglene 3–5 (analysen §4). Prioritet: perfekt
  (meta). Skal etablere som håndverk: **talleksempel ≠ bevis** (0 p der «vis algebraisk»
  — variabelen må defineres OG knyttes til situasjonen, argumentet må være generelt);
  **figur SOM bevis** (der «ikke bruk symbolsk algebra» kreves, gir rent symbolsk svar
  ikke uttelling — prikkmønster/arealmodell *er* beviset, særlig 1–7); og
  **notasjonsstrengheten** (fastsatt symbolvalg → feil variabelbokstav = 0 p; variabler
  skal alltid defineres).
- **Innholdskontrakt:** (1) **Generelt symbolsk bevis**-oppskrift: definer variabelen,
  knytt den til situasjonen, uttrykk påstanden generelt, manipuler til konklusjon; med
  et NYSKREVET par «talleksempel-svar (0 p)» vs. «generelt bevis (full pott)» side ved
  side. (2) **Figurbevis**-oppskrift: velg representasjon (prikker/areal/brikker), vis at
  konstruksjonen holder for *vilkårlig* størrelse (ikke bare ett tilfelle), beskriv med
  ord. (3) **Notasjonsdisiplin**: les hvilke symboler oppgaven fastsetter, bruk NØYAKTIG
  dem, definer alle variabler.
- **Didaktisk kontrakt:** koble til elevperspektivet — hvorfor elever (og lærerstudenter)
  tror talleksempler «beviser», og hvordan man som lærer bygger bro mot generalisering.
- **Typiske feil:** Talleksempel der «vis algebraisk» kreves (**0 p** — egen warning);
  udefinerte variabler; symbolsk svar der figur kreves; feil variabelbokstav (**0 p** —
  notasjonsstrenghet-warning); figur som bare viser ett tilfelle (ikke generelt).
- **Kvote:** 16 quiz / 14 flashcards (bevisregimene, de to warningene, definerings-kravet).

#### Kapittel 0.4: 2/1/0-rubrikken — slik høstes og mistes poeng
**id:** `nokut-glu-matte-0-4` · **number:** 0.4 · **estimatedMinutes:** 40 · **prerequisites:** `nokut-glu-matte-0-3`

- **Kapitteltype:** sensurhåndverk. **Spor:** felles.
- **Description:** Hvordan finmasket 2/1/0-poengføring fungerer, hvordan man sikrer
  1-poengsdelen når det tunge glipper, og de faste sammensatte-krav- og
  følgefeil-reglene.
- **Eksamensbelegg:** Sensorreglene 1–2, 6–8, 11 (analysen §4). Prioritet: perfekt (meta).
  Skal operasjonalisere: **2/1/0-strukturen** (2 = fullstendig; 1 = mindre mangel / bare
  én av to metoder / riktig figur men mangelfull ordforklaring; 0 = feil/talleksempel-
  bare/feil notasjon); **begge deler av et sammensatt krav** må stemme (klassifisering
  *og* begrunnelse; variabelnavn *og* betydning); **to metoder må være kvalitativt ulike**;
  **følgefeil trekker ikke dobbelt**; **bestått høstes bredt** (1-poengsdelene på tvers).
- **Innholdskontrakt:** en gjennomgått **rubrikk-anatomi** — samme oppgave rettet på 2-,
  1- og 0-nivå med eksplisitte kriterier; en «poengjakt-sjekkliste» for eksamensdagen
  (ta de billige delpoengene først, sikre klassifiseringen selv om begrunnelsen er tynn,
  aldri la et sammensatt krav stå halvferdig).
- **Didaktisk kontrakt:** ingen egen (metakapittel), men rubrikkene brukes på de
  didaktiske svartypene fra 0.2.
- **Typiske feil:** Gi bare halvparten av et sammensatt krav (1 p tapt); to «ulike»
  metoder som er samme metode (teller som én); dobbeltregne følgefeil i eget hode og gi
  opp; jage det tunge beviset og la 1-poengsdelene ligge.
- **Kvote:** 12 quiz / 10 flashcards (2/1/0-kriteriene, sammensatt krav, følgefeil, bredde).

### Del 1 — Tallforståelse, posisjonssystem og regnestrategier *(spor: 1–7 tyngst · prioritet: kunne)*

#### Kapittel 1.1: Posisjonssystemet og tallforståelse
**id:** `nokut-glu-matte-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-0-4`

- **Kapitteltype:** tema (lærerfaglig grunnlag). **Spor:** [1–7] (5–10 leser kort).
- **Description:** Titallssystemet, plassverdi, og hvorfor tallinja og relasjonell
  tallforståelse er inngangen til algebraisk tenkning i begynneropplæringen.
- **Eksamensbelegg:** Ikke eget eksamenstema, men tallforståelse bærer 1–7-didaktikken og
  er forkunnskap for relasjonelt likhetstegn (kap. 3.1). Sjangre: D (talleksempler
  tilpasset trinn), N (oppgavedesign). Prioritet: kunne.
- **Innholdskontrakt:** posisjonssystem (plassverdi, gruppering i tiere), tallinja som
  resonneringsverktøy, mengde-/telletall vs. ordenstall (kort), overslag og
  tallrelasjoner (nabotall, tiervenner). Notasjon: standard desimal plassverdi.
- **Didaktisk kontrakt:** misoppfatninger — plassverdi forvekslet med sifferverdi;
  tallinja lest som «hopp» uten proporsjon. Mal 2 (misoppfatning→tiltak) og mal 3
  (oppgavedesign m/LK20 for begynneropplæring `(verifiser)`).
- **Oppgavesjangre:** D, N. Mønstereksempel: «En elev sier at 40 er ‘større’ enn 400
  fordi ‘4 kommer før’. Beskriv misoppfatningen og et tiltak for 2. trinn.»
- **Typiske feil:** Sifferverdi vs. plassverdi; tiltak uten trinnforankring; oppgavedesign
  uten LK20.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.2: Regnestrategier og de fire regneartene som mønster
**id:** `nokut-glu-matte-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-1-1`

- **Kapitteltype:** tema. **Spor:** [1–7] tyngst.
- **Description:** Addisjons-/subtraksjons-/multiplikasjons-strategier som *generaliserbare
  mønstre*, og hvordan «regnetriks» leder over i algebra.
- **Eksamensbelegg:** Overgang aritmetikk→algebra (~20 deloppg. 1–7, hvert sett):
  generalisere regnetriks og multiplikasjonsmønstre. Sjangre: E (mønster), A/J (generalisere
  triks), G (to strategier). Prioritet: kunne (bygger mot kap. 4 og 8).
- **Innholdskontrakt:** kommutativitet/assosiativitet/distributivitet som *regnegrunnlag*
  (uformelt her, formelt i kap. 6); strategier: telle videre, tiervenner, dobling/halvering,
  kompensasjon, oppdeling (distributiv multiplikasjon); den lille/store multiplikasjons-
  tabellen som mønster. Notasjon: `a·b`, uformell generalisering.
- **Didaktisk kontrakt:** misoppfatninger — «regnetriks» uten forståelse for hvorfor de
  virker. Mal 4 (to strategier) og mal 2 (misoppfatning→tiltak).
- **Oppgavesjangre:** G, E. Mønstereksempel: «Vis to kvalitativt ulike strategier en elev
  kan bruke for `6·8`, og forklar hvilken algebraisk egenskap hver bygger på.»
- **Typiske feil:** To «ulike» strategier som egentlig er samme (teller som én); forklare
  triks uten den underliggende egenskapen.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.3: Fra aritmetikk til algebra — å generalisere en regnesammenheng
**id:** `nokut-glu-matte-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-1-2`

- **Kapitteltype:** tema (broen). **Spor:** [felles] (inngang for begge).
- **Description:** Hvordan et konkret regnemønster («summen av tre etterfølgende tall er
  delelig med 3») løftes til en generell påstand — broen fra tall til bokstav.
- **Eksamensbelegg:** Overgang aritmetikk→algebra + tallstrukturer (bygger direkte mot
  kap. 3, 4 og 8). Sjangre: A (vis algebraisk), D (alltid/av og til/aldri sant), J
  (illustrasjon). Prioritet: kunne (fundament for bæretemaene).
- **Innholdskontrakt:** fra spesielt til generelt tilfelle; introduksjon av bokstav som
  «hvilket som helst tall»; første møte med «vis algebraisk»-kravet (utdypes i kap. 8);
  koblingen konkret regneeksempel → figur → symbol. Notasjon: `n` for generelt tall.
- **Didaktisk kontrakt:** misoppfatningen «talleksempel beviser» (elev OG student);
  hvordan bygge bro mot generalisering. Mal 1 (elevsvar-analyse) og mal 4.
- **Oppgavesjangre:** D, A, J. Mønstereksempel: «Er påstanden ‘summen av to oddetall er
  alltid et partall’ alltid/av og til/aldri sann? Begrunn med et talleksempel tilpasset
  6. trinn OG antyd et generelt argument.»
- **Typiske feil:** Stoppe ved talleksempel når generalisering kreves; klassifisere riktig
  men begrunne feil (begge deler må stemme).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 1:** 4 prøver: (1) *Posisjonssystem og tallforståelse* [1–7] —
misoppfatningsanalyse (plassverdi) + oppgavedesign for begynneropplæring. (2)
*Regnestrategier* [1–7] — to kvalitativt ulike strategier + hvilken egenskap hver bygger
på. (3) *Aritmetikk→algebra* [felles] — «alltid/av og til/aldri sant» + antydet generelt
argument. (4) *Blandet Del 1* — elevsvar-analyse + oppgavedesign m/LK20.

### Del 2 — Brøk, desimaltall og prosent *(spor: 1–7 tyngst · prioritet: kjenne)*

#### Kapittel 2.1: Brøk og desimaltall — forståelse og representasjoner
**id:** `nokut-glu-matte-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-1-1`

- **Kapitteltype:** tema (forkunnskap). **Spor:** [1–7] (forkunnskap for 5–10 rasjonale uttrykk).
- **Description:** Brøk som del av hel / forhold / punkt på tallinja, likeverdige brøker,
  og overgangen brøk↔desimal — forkunnskapen bak rasjonale uttrykk.
- **Eksamensbelegg:** Ikke eget eksamenstema (borte etter temaskiftet), men brøkforståelse
  er forkunnskap for rasjonale uttrykk (kap. 6, [5–10]) og forekommer som didaktisk
  kontekst. Sjangre: F (kontekst), C (elevvurdering), N. Prioritet: kjenne.
- **Innholdskontrakt:** brøkens tre tolkninger (del av hel, forhold, divisjon/tallinjepunkt);
  likeverdige brøker og utviding/forkorting (grunnlaget for forkorting av rasjonale uttrykk);
  brøk↔desimal↔prosent-triangelet; regning med brøk kompakt. Notasjon: `a/b`, `\frac{a}{b}`.
- **Didaktisk kontrakt:** misoppfatninger — «større nevner = større brøk»; brøk lest som to
  hele tall. Mal 2 og mal 1.
- **Oppgavesjangre:** C, F. Mønstereksempel: «En elev mener `1/4 > 1/3` fordi ‘4 er større
  enn 3’. Avgjør, beskriv misoppfatningen, og foreslå en representasjon som avdekker den.»
- **Typiske feil:** Brøk som to uavhengige tall; forveksle utviding med addisjon.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.2: Prosent — og prosentpoeng-fellen
**id:** `nokut-glu-matte-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-2-1`

- **Kapitteltype:** tema. **Spor:** [felles] (fellen gjelder studenten selv).
- **Description:** Prosentregning, prosentvis endring, og det skarpe skillet mellom
  **prosentpoeng** og **prosent** — en klassisk felle for lærerstudenten.
- **Eksamensbelegg:** Prosent er ikke eget tema, men prosentpoeng-vs-prosent er en reell
  felle (analysen §5: «vanlige elevfeil … prosentpoeng-vs-prosent»). Sjangre: C, D, F.
  Prioritet: kjenne (men fellen drilles eksplisitt).
- **Innholdskontrakt:** prosent som brøk med nevner 100; vekstfaktor; prosentvis endring;
  **prosentpoeng vs. prosent** (endring fra 20 % til 25 % = 5 prosentpoeng = 25 % relativ
  økning) — med eksplisitt kontrasteksempel. Notasjon: vekstfaktor `1 + p/100`.
- **Didaktisk kontrakt:** misoppfatningen prosentpoeng↔prosent (elev OG student); hvordan
  forklare skillet konkret. Mal 1 (elevsvar-analyse) og mal 2.
- **Oppgavesjangre:** C, D. Mønstereksempel: «En elev leser en overskrift ‘oppslutningen
  økte med 5 %’ der den egentlig økte fra 20 % til 25 %. Forklar feilen og hvordan du
  ville tydeliggjort skillet.»
- **Typiske feil:** **Prosentpoeng forvekslet med prosent** (egen warning); vekstfaktor
  ved gjentatt endring behandlet additivt.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 2:** 4 prøver: (1) *Brøkforståelse* [1–7] — elevvurdering (brøk-
sammenligning) + representasjonsvalg. (2) *Brøk↔desimal↔prosent* [felles] — overgangene +
kontekstoppgave. (3) *Prosent og prosentpoeng* [felles] — prosentpoeng-fellen + elevanalyse.
(4) *Blandet Del 2* — misoppfatning→tiltak på tvers.

### Del 3 — Algebraisk tenkning: likhetstegn og variabel *(spor: felles KJERNE · prioritet: PERFEKT)*

> **Den delte kjernen begge spor leser.** Etablerer det relasjonelle likhetstegnet
> (1–7-signaturen) og variabelbegrepet som resten av algebraen bygger på.

#### Kapittel 3.1: Likhetstegnet — relasjonell vs. operasjonell forståelse
**id:** `nokut-glu-matte-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-1-1`

- **Kapitteltype:** tema (kjerne). **Spor:** [felles] (tungt [1–7], mindre delspørsmål [5–10]).
- **Description:** Likhetstegnet som **balanse** (relasjonell) mot «regn ut → skriv svar»
  (operasjonell) — den mest gjentatte 1–7-åpningsoppgaven, og fundamentet for likninger.
- **Eksamensbelegg:** Likhetstegnet (~14 deloppg. 1–7, svært ofte oppgave 1; mindre i
  5–10). Den faste «boks-likheten» `a − b = ⎕ + c` skiller relasjonell fra operasjonell
  forståelse. Kandidaten skal svare, forklare misoppfatningen OG velge/lage oppgaven som
  best avdekker den. Sjangre: **I** (likhetstegn-diagnose — kjernen), C, N, D. Prioritet:
  perfekt.
- **Innholdskontrakt:** likhetstegnet som relasjon (venstre side = høyre side, balanse) vs.
  operasjon (utfør-og-skriv-svar); «boks-likhet»/åpen setning; hvordan et operasjonelt syn
  gir feilsvaret i `8 + 4 = ⎕ + 5` (eleven skriver 12). Notasjon: `⎕` som ukjent boks.
- **Didaktisk kontrakt:** misoppfatningen «likhetstegnet betyr *her kommer svaret*»; tiltak
  — skålvekt/balansespråk, sanne/usanne likheter, tallinje. Malene 1, 2 og 3 tungt (dette
  er kjerne-1–7-didaktikken).
- **Oppgavesjangre:** I, C, N. Mønstereksempel: «Gitt likheten `13 − 4 = ⎕ + 2`: skriv
  svaret slik en relasjonelt-forstående elev ville, og slik en operasjonelt-forstående
  ville. Forklar misoppfatningen, og lag en oppgave som best avdekker den.»
- **Typiske feil:** **Likhetstegn lest operasjonelt** (elev-misoppfatning — egen warning);
  besvare bare den ene elevtypen (begge kreves); tiltak uten forankring i misoppfatningen.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.2: Variabelbegrepet — variabel, ukjent og generalisert tall
**id:** `nokut-glu-matte-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-3-1`

- **Kapitteltype:** tema (kjerne). **Spor:** [felles].
- **Description:** Hva et symbol *representerer* — variabel (varierende), ukjent (fast men
  usøkt) eller generalisert tall — og misoppfatningen «variabel som objekt».
- **Eksamensbelegg:** Variabelbegrepet (~22 deloppg. 1–7, nesten hvert sett; 5–10 enkelte).
  Sjangre: C (elevvurdering av variabelbruk), F (kontekst til uttrykk), N. Avgjør C mot A.
  Prioritet: perfekt (nivå 2 «må kunne», men bærende).
- **Innholdskontrakt:** variabelens tre roller (variabel/ukjent/generalisert tall); hva
  symbolet representerer i en kontekst (**en størrelse, ikke en tings navn** — `p` = *antall*
  planker, ikke «planke»); toveis oversettelse ord↔symbol↔situasjon; koblingen til
  notasjonsstrengheten (fastsatt symbolvalg). Notasjon: bokstavsymboler med definisjon.
- **Didaktisk kontrakt:** **misoppfatningen «variabel som objekt/forkortelse»** (`3a` lest
  som «3 epler» ikke «3 ganger antallet»); «bokstav = fast bestemt tall». Malene 1 og 2.
- **Oppgavesjangre:** C, F. Mønstereksempel: «En elev skriver at `b` i `4b` ‘står for
  bananer’. Forklar misoppfatningen om hva en variabel representerer, og gi en kontekst der
  `4b` gir mening med `b` korrekt definert.»
- **Typiske feil:** **Variabel som objekt** (egen warning); definere variabelen som en ting,
  ikke en størrelse; bruke feil/udefinert symbol (kobler til notasjonsstrenghet).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.3: Oversettelse ord↔symbol↔situasjon
**id:** `nokut-glu-matte-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-3-2`

- **Kapitteltype:** tema (kjerne). **Spor:** [felles].
- **Description:** Å oversette begge veier mellom en situasjon, ord og et symbolsk uttrykk
  — å lage kontekst til et uttrykk og uttrykk til en kontekst, med variablene definert.
- **Eksamensbelegg:** Sjanger **F** (lag kontekst/regnefortelling til uttrykk — fast
  format), samt inngang til uttrykk (kap. 6) og likningssett (kap. 5). Sjangre: F, N.
  Prioritet: perfekt.
- **Innholdskontrakt:** systematisk oversettelse ord→symbol (nøkkelord til operasjon) og
  symbol→kontekst (velg situasjon som passer *presist* til strukturen, definer hva hver
  variabel representerer); at konteksten må matche uttrykket (f.eks. `2a + 8b`). Notasjon:
  variabeldefinisjon som eget steg.
- **Didaktisk kontrakt:** misoppfatninger — kontekst som ikke matcher uttrykket; udefinerte
  variabler. Malene 3 og 4.
- **Oppgavesjangre:** F. Mønstereksempel: «Lag en regnefortelling som passer til uttrykket
  `3x + 12`, og definer hva `x` representerer. Lag deretter et uttrykk for situasjonen ‘et
  medlemskap koster 200 kr pluss 50 kr per måned’.»
- **Typiske feil:** Kontekst som ikke passer strukturen; **udefinerte variabler** (begge
  deler av kravet må stemme: variabelnavn *og* betydning).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 3:** 4 prøver: (1) *Likhetstegn-diagnose* [1–7] — boks-likhet besvart som
begge elevtyper + misoppfatning + avdekkende oppgave (sjanger I). (2) *Variabelbegrepet*
[felles] — elevvurdering av variabelbruk + korrekt definisjon (sjanger C). (3) *Oversettelse*
[felles] — lag kontekst til uttrykk + uttrykk til situasjon (sjanger F). (4) *Blandet kjerne*
— likhetstegn + variabel + oversettelse kjedet, med oppgavedesign m/LK20.

### Del 4 — Figurmønster og generalisering *(spor: felles + 5–10-tillegg · prioritet: PERFEKT — TYNGST)*

> **Det tyngste domenet i begge varianter, hvert eneste sett.** Får flest kapitler.
> 1–7: lineære følger, tung vekt på rekursiv beskrivelse og elevresonnement. 5–10:
> ofte ikke-lineære følger (kvadrat-/trekanttall, andregrad) → kvadratisk formelutledning.

#### Kapittel 4.1: Figurmønster — tegne, beskrive, tallfeste
**id:** `nokut-glu-matte-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-3-3`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Å lese et figurmønster: tegne de neste figurene, beskrive utviklingen
  med ord, og finne antall elementer i en bestemt figur — grunnlaget for formlene.
- **Eksamensbelegg:** Figurmønster/generalisering (~40 deloppg. 1–7, ~48 5–10 — tyngst
  hvert sett), åpningsleddene: tegne neste figur, beskrive utvikling, «figur 10/99».
  Sjangre: **E** (kjernen). Prioritet: perfekt.
- **Innholdskontrakt:** lese struktur i en figurfølge; tegne neste ledd og forklare *hva*
  som legges til; telle systematisk (ikke bare telle prikker); knytte figurnummer til
  antall. Notasjon: figur `n`, antall som funksjon av `n` (uformelt her). Utledning kreves
  aktivt (beskrive utviklingen).
- **Didaktisk kontrakt:** misoppfatningen «feil generalisering av mønster» (se bare
  differansen, glem konstantleddet); hvordan strukturell telling forebygger. Mal 1 og mal 4.
- **Oppgavesjangre:** E. Mønstereksempel: «En figurfølge starter med 4, 7, 10 prikker.
  Tegn figur 4, beskriv med ord hvordan mønsteret vokser, og finn antall prikker i figur 10.»
- **Typiske feil:** **Feil generalisering** (egen warning — kun differansen, uten
  startledd); telle uten å se strukturen; beskrivelse uten kobling til figuren.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.2: Rekursiv formel og lineære følger
**id:** `nokut-glu-matte-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-4-1`

- **Kapitteltype:** tema. **Spor:** [felles] (rekursiv-vekt særlig [1–7]).
- **Description:** Den rekursive formelen («neste = forrige + d») for lineære følger, og
  hvorfor den er den naturlige inngangen for yngre elever.
- **Eksamensbelegg:** Rekursiv formel kreves ofte eksplisitt, med tyngre vekt på det
  rekursive og elevresonnementet i 1–7. Sjangre: E, D. Prioritet: perfekt.
- **Innholdskontrakt:** rekursiv beskrivelse (start + fast tilvekst `d`); rekursiv formel
  `a_1 = \ldots,\ a_n = a_{n-1} + d`; forskjellen rekursiv (lokal) vs. eksplisitt (direkte);
  når rekursiv er upraktisk (figur 99). Notasjon: `a_n`, `a_{n-1}`, `d`. Utledning aktivt.
- **Didaktisk kontrakt:** misoppfatninger — bruke rekursiv der eksplisitt trengs; feil
  startledd. Mal 1 (elevsvar med rekursiv resonnering) og mal 4.
- **Oppgavesjangre:** E. Mønstereksempel: «For følgen 4, 7, 10, … skriv en rekursiv formel,
  og beskriv hvordan en elev kan resonnere seg fram til den ut fra figuren.»
- **Typiske feil:** Blande rekursiv og eksplisitt; feil eller manglende startledd; rekursiv
  formel uten definert `a_1`.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.3: Eksplisitt formel og «to elevers formler»
**id:** `nokut-glu-matte-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-4-2`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Den eksplisitte formelen for en lineær følge, koblingen formel↔figur,
  og den faste «to elevers ekvivalente formler»-oppgaven.
- **Eksamensbelegg:** Eksplisitt formel «på to ulike måter» med kobling formel↔figur er
  fast; «beskriv hvordan to elever kan ha tenkt» ut fra to ekvivalente formler er en fast
  underoppgave. Sjangre: **E** (kjernen) + **G** (to måter). Prioritet: perfekt.
- **Innholdskontrakt:** eksplisitt formel for lineær følge `a_n = a_1 + (n-1)d` (og den
  ekvivalente `a_n = dn + b`); utlede formelen fra figurstrukturen på ulike måter (ulik
  gruppering av figuren → ulikt, men ekvivalent, uttrykk); vise ekvivalens algebraisk.
  Notasjon: `a_n`, koblet til figurdeler. Utledning aktivt (flere veier).
- **Didaktisk kontrakt:** «to elevers formler»-malen (mal 4) tungt — to ekvivalente uttrykk,
  begge korrekte, hver knyttet til sin figurlesning; vise ekvivalensen. Mal 1.
- **Oppgavesjangre:** E, G. Mønstereksempel: «To elever gir formlene `a_n = 3n + 1` og
  `a_n = 4 + 3(n-1)` for samme figurfølge. Vis at de er ekvivalente, og beskriv hvordan
  hver elev kan ha sett figuren.»
- **Typiske feil:** **Feil generalisering** (warning); formel uten kobling til figuren;
  hevde to formler er ulike uten å vise ekvivalens; feil variabel (notasjonsstrenghet-warning).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.4: Ikke-lineære følger — kvadrat- og trekanttall *(spor: [5–10])*
**id:** `nokut-glu-matte-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-4-3`

- **Kapitteltype:** tema (5–10-tillegg). **Spor:** [5–10].
- **Description:** Ikke-lineære figurfølger (kvadrat-, trekant- og andregradstall) og
  utledning av den kvadratiske eksplisitte formelen for hånd.
- **Eksamensbelegg:** I 5–10 er følgene ofte ikke-lineære → kvadratisk formelutledning
  (~del av de ~48 deloppg.). Sjangre: E, A (vis formelen holder). Prioritet: perfekt [5–10].
- **Innholdskontrakt:** kvadrattall `n^2`, trekanttall `\frac{n(n+1)}{2}`, andre andregrads-
  følger; andredifferanser som signal på kvadratisk mønster; utlede `an^2 + bn + c` fra tre
  ledd (eller fra figurstruktur); knytte formelen til figuren (arealmodell). Notasjon:
  `a_n = an^2 + bn + c`. Utledning aktivt (for hånd, uten hjelpemidler).
- **Didaktisk kontrakt:** misoppfatningen «konstant differanse» anvendt på ikke-lineær følge;
  hvordan andredifferanser avslører kvadratisk vekst. Mal 1 og mal 4.
- **Oppgavesjangre:** E, A. Mønstereksempel: «En prikkfølge har 1, 3, 6, 10 prikker (trekanttall).
  Finn en eksplisitt formel, vis at den passer, og knytt den til figuren.»
- **Typiske feil:** Anta lineær vekst på ikke-lineær følge; regnefeil i formelutledning for
  hånd; formel uten figurkobling.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.5: Drill: figurmønster som signaturoppgave
**id:** `nokut-glu-matte-4-5` · **number:** 4.5 · **estimatedMinutes:** 75 · **prerequisites:** `nokut-glu-matte-4-4`

- **Kapitteltype:** drill. **Spor:** [felles] (med [5–10]-seksjon for ikke-lineære).
- **Description:** Hele figurmønster-repertoaret som gjennomført eksamensoppgave — tegne →
  beskrive → finne ledd → rekursiv + eksplisitt formel «på to måter» → to elevers tenkning,
  med full føring og 2/1/0-momentnotater.
- **Eksamensbelegg:** Sjanger E + G, alle varianter — den tyngste og sikreste oppgaven hvert
  sett, begge spor. Prioritet: perfekt.
- **Innholdskontrakt:** **Løsningsoppskrift** for figurmønster-sjangeren (1) tegn/beskriv
  struktur, 2) tell systematisk, 3) rekursiv formel med startledd, 4) eksplisitt formel
  koblet til figuren, 5) evt. andre vei / to elevers formler, 6) [5–10] sjekk om lineær
  eller kvadratisk via differanser). **Gjennomregnet eksamenscase** (én sammensatt a–e)
  med 2/1/0-margnotater: hvor 1-poengsdelene ligger (rekursiv/beskrivelse), hvor full pott
  krever eksplisitt formel + figurkobling. 10–14 oppgaver på eksamensnivå (lineære [1–7],
  ikke-lineære [5–10]), med didaktisk delspørsmål på hver.
- **Didaktisk kontrakt:** «to elevers formler»-malen gjennomgående; misoppfatningsanalyse
  på minst tre av oppgavene.
- **Oppgavesjangre:** E + G. Mønstereksempel: «(a) Tegn figur 4. (b) Beskriv utviklingen.
  (c) Finn antall i figur 20. (d) Gi rekursiv OG eksplisitt formel. (e) To elever har hver
  sin formel — vis at de er ekvivalente og beskriv tenkningen.»
- **Typiske feil:** Alle generaliserings- og notasjonsfellene i kjedet form; talleksempel
  der generalisering kreves; formel uten figurkobling; tidsfellen (jage det tunge før de
  billige rekursiv-/beskrivelsespoengene er sikret).
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver: (1) *Tegne–beskrive–tallfeste* [felles] — figuroppgavens
åpningsledd (sjanger E). (2) *Rekursiv og eksplisitt* [felles] — begge formler + kobling til
figur. (3) *Ikke-lineære følger* [5–10] — kvadratisk formelutledning for hånd. (4) *Full
signaturoppgave* [spor-delt] — hele figurmønster-kjeden a–e med «to elevers formler».

### Del 5 — Likninger og ulikheter *(spor: felles + 5–10-tillegg · prioritet: PERFEKT)*

#### Kapittel 5.1: Likninger, balanse og skålvekt *(spor: [1–7] tungt)*
**id:** `nokut-glu-matte-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-3-1`

- **Kapitteltype:** tema. **Spor:** [felles] (skålvekt-didaktikken tungt [1–7]).
- **Description:** Å løse likninger ved logisk resonnement og balanse — skålvekten som
  konkret modell, og når modellen svikter.
- **Eksamensbelegg:** Likninger (~30 deloppg. 1–7, ~del av 37 i 5–10). **Skålvekt/
  balansemodell** er fast innslag: gi en likning tilpasset et trinn (ofte 5.), tegn
  skålvekten, resonner via balanse; også «forklar hvorfor skålvekten IKKE egner seg» ved
  negativt/variabelt ledd på begge sider. Sjangre: **H** (skålvekt — kjernen), G (to
  strategier), B (elevfeil). Prioritet: perfekt.
- **Innholdskontrakt:** likning som balanse; like operasjoner på begge sider; løse ved
  logisk resonnement (ikke bare «flytt over og bytt fortegn»); skålvektmodellen og dens
  grenser (bryter sammen ved negative/variable ledd på begge sider). Notasjon: `x`,
  balanseoperasjoner vist. Utledning aktivt (resonnementet).
- **Didaktisk kontrakt:** misoppfatninger — «flytt over og bytt fortegn» som regel uten
  forståelse; skålvekt brukt der den svikter. Malene 2, 3 (skålvekt-oppgave for 5. trinn
  `(verifiser)` LK20) og 4.
- **Oppgavesjangre:** H, G. Mønstereksempel: «Lag en likning egnet for 5. trinn, tegn en
  skålvekt for den, og resonner deg fram til løsningen via balanse. Forklar deretter hvorfor
  skålvekten er uegnet for `2x - 3 = x + 1`.»
- **Typiske feil:** Regelrytteri uten balanseforståelse; skålvekt der den svikter; likning
  for feil trinn (trinnkravet er del av vurderingen).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.2: Ulikheter og løsning ved resonnement
**id:** `nokut-glu-matte-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-5-1`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Ulikheter løst ved logisk resonnement, retningsbevaring, og
  vendingsregelen ved multiplikasjon med negativt tall.
- **Eksamensbelegg:** Ulikheter opp fra 2023 (del av likningstemaet). Sjangre: B (elevfeil
  i ulikhet), D, H. Prioritet: perfekt.
- **Innholdskontrakt:** ulikhet og løsningsmengde; like operasjoner bevarer retning UNNTATT
  multiplikasjon/divisjon med negativt tall (**vend tegnet**); løse ved resonnement;
  representasjon på tallinje. Notasjon: `<, >, \le, \ge`. Utledning aktivt.
- **Didaktisk kontrakt:** **misoppfatningen «glemme å vende ulikhetstegnet»** (elev OG
  student); tallinja som tiltak. Mal 1 (elevfeil) og mal 2.
- **Oppgavesjangre:** B, D. Mønstereksempel: «En elev løser `-2x < 6` og får `x < -3`.
  Beskriv feilen (mellom hvilke steg), og forklar regelen som ble brutt.»
- **Typiske feil:** **Glemme å vende tegnet** (egen warning); behandle ulikhet som likning;
  følgefeil dobbeltregnet.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 5.3: Likningssett fra kontekst *(spor: [5–10])*
**id:** `nokut-glu-matte-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-3-3`

- **Kapitteltype:** tema (5–10-tillegg). **Spor:** [5–10].
- **Description:** Å sette opp og løse likningssett fra en praktisk situasjon for hånd —
  definere variabler, velge metode (innsetting/addisjon), tolke antall løsninger.
- **Eksamensbelegg:** **Likningssett fra kontekst** (sjanger **M**, 5–10): billettpriser,
  kg varer, dyr/bein; definer variablene, vis metode. Løsning uten variabeldefinisjon gir
  delvis pott. Sjangre: M, F, B. Prioritet: perfekt [5–10].
- **Innholdskontrakt:** oppsett fra kontekst (**definer variablene først** — notasjons-
  strenghet); løse 2×2-system ved innsetting og ved addisjon/eliminasjon (for hånd); antall
  løsninger (0/1/∞) og hva det betyr geometrisk (kort, kobler til kap. 7). Notasjon: system
  med definerte variabler. Utledning aktivt.
- **Didaktisk kontrakt:** misoppfatninger — udefinerte variabler; velge feil metode. Mal 1
  og mal 3.
- **Oppgavesjangre:** M. Mønstereksempel: «To voksen- og tre barnebilletter koster 430 kr;
  én voksen og to barn koster 250 kr. Definer variablene, sett opp likningssettet, og løs
  det med både innsetting og addisjon.»
- **Typiske feil:** **Løsning uten variabeldefinisjon** (delvis pott — notasjons-warning);
  regnefeil for hånd i eliminasjon; feil metodevalg som gir tungvint regning.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver: (1) *Skålvekt og balanse* [1–7] — likning for trinn +
skålvekt-resonnement + når modellen svikter (sjanger H). (2) *Ulikheter* [felles] —
vendingsregel-elevfeil + tallinjerepresentasjon (sjanger B/D). (3) *Likningssett* [5–10] —
oppsett fra kontekst + begge løsningsmetoder for hånd (sjanger M). (4) *Blandet Del 5* —
likning + ulikhet + didaktisk elevanalyse.

### Del 6 — Algebraiske og rasjonale uttrykk *(spor: felles + 5–10-spor · prioritet: PERFEKT)*

#### Kapittel 6.1: Algebraiske uttrykk — sammentrekning og egenskaper
**id:** `nokut-glu-matte-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-3-2`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Trekke sammen like ledd, distributiv/kommutativ/(assosiativ) egenskap,
  ekvivalente uttrykk, og uttrykk fra figur/areal.
- **Eksamensbelegg:** Algebraiske uttrykk (~30 deloppg. 1–7, del av ~38 i 5–10 — hvert
  sett): forenkling, ekvivalens, distributiv/kommutativ egenskap, like ledd. Sjangre: L
  (forenkling), A/J (uttrykk fra areal), C (elevvurdering). Prioritet: perfekt.
- **Innholdskontrakt:** ledd, faktor, koeffisient; **like ledd** og sammentrekning;
  distributiv `a(b+c) = ab + ac`, kommutativ, (assosiativ for 5–10); **ekvivalente uttrykk**
  (samme verdi for alle innsettinger); uttrykk fra figur/arealmodell. Notasjon: `2a + 8b`,
  `3(x+2)`. Utledning aktivt (distributiv via areal).
- **Didaktisk kontrakt:** misoppfatninger — «trekke sammen» ulike ledd (`2a + 3b = 5ab`);
  distributiv anvendt feil (`3(x+2) = 3x + 2`). Malene 1 og 2; arealmodell som tiltak.
- **Oppgavesjangre:** L, C, J. Mønstereksempel: «En elev forenkler `2a + 3b + 4a` til `9ab`.
  Beskriv feilen og misoppfatningen, og bruk en arealmodell for å vise `a(b+c) = ab + ac`.»
- **Typiske feil:** Trekke sammen ulike ledd; distributiv brukt feil; **figur kreves men
  gitt symbolsk** (warning der «bruk figurene»).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 6.2: Potenser og potenslover *(spor: [5–10])*
**id:** `nokut-glu-matte-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-6-1`

- **Kapitteltype:** tema (5–10-tillegg). **Spor:** [5–10].
- **Description:** Potenslovene utledet og begrunnet for hånd — med ord OG symboler,
  forankret i grunntall, eksponent og faktor.
- **Eksamensbelegg:** Potenser/potenslover (~14 deloppg. 5–10, ofte). **Sjanger K**:
  begrunne en potensregel med *både* ord og symboler; ren regel-oppramsing holder ikke.
  Sjangre: K, L, B. Prioritet: perfekt [5–10] (nivå 2 «må kunne»).
- **Innholdskontrakt:** grunntall, eksponent, faktor; potenslovene `a^n \cdot a^m = a^{n+m}`,
  `a^n / a^m = a^{n-m}`, `(a^n)^m = a^{nm}`, `(ab)^n = a^n b^n`, `a^0 = 1`, `a^{-n} = 1/a^n`;
  **utlede/begrunne** hver lov fra definisjonen (potens = gjentatt multiplikasjon), med ord
  og symboler; kvadratrøtter som `a^{1/2}` (kort, kap. 6.3). Notasjon: potenser i LaTeX.
  Utledning kreves AKTIVT (dette er kjernen i sjanger K).
- **Didaktisk kontrakt:** misoppfatninger — `a^n \cdot a^m = a^{nm}`; `a^0 = 0`; hvordan
  begrunnelse (ikke pugg) forebygger. Mal 1 og mal 2.
- **Oppgavesjangre:** K. Mønstereksempel: «Begrunn — med både ord og symboler — hvorfor
  `a^n \cdot a^m = a^{n+m}`, forankret i hva en potens betyr. Beskriv så en elevs feil som
  gir `a^{nm}`.»
- **Typiske feil:** **Regel-oppramsing uten begrunnelse** (ikke full pott — egen warning);
  `a^n \cdot a^m = a^{nm}`; `a^0 = 0`.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.3: Kvadratsetninger, faktorisering og kvadratrøtter *(spor: [5–10])*
**id:** `nokut-glu-matte-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-6-2`

- **Kapitteltype:** tema (5–10-tillegg). **Spor:** [5–10].
- **Description:** Kvadratsetningene, faktorisering og kvadratrøtter/andregradslikninger av
  typen `x^2 + c` — inkludert den arealbaserte begrunnelsen.
- **Eksamensbelegg:** Andregradsuttrykk/kvadratsetninger/faktorisering (~12 deloppg. 5–10,
  ofte); `x^2 = c`-typer, `\pm\sqrt{}`-løsninger, «rot trukket feil» som elevfeil. Sjangre:
  A/J (arealidentitet), L (faktorisering), B (rot-feil). Prioritet: perfekt [5–10] (nivå 3
  «bør kjenne» som eget grep, men kvadratsetning-identiteter er bevis-råstoff i kap. 8).
- **Innholdskontrakt:** kvadratsetningene `(a+b)^2 = a^2 + 2ab + b^2`, `(a-b)^2`,
  `(a+b)(a-b) = a^2 - b^2`; **arealmodell** som begrunnelse; faktorisering (felles faktor,
  konjugat, enkle trinomer); kvadratrøtter `\sqrt{}` og `a^{1/2}`; `x^2 = c` → `x = \pm\sqrt{c}`
  (**begge røtter**); «rot trukket feil»-elevfeilen (`x^2 + 4 = 9` → glemme `\pm`). Notasjon:
  LaTeX. Utledning aktivt (arealmodell).
- **Didaktisk kontrakt:** misoppfatninger — `(a+b)^2 = a^2 + b^2`; glemme `\pm`-roten. Mal 1
  og mal 2; arealmodell som tiltak.
- **Oppgavesjangre:** A, L, B. Mønstereksempel: «Bruk en arealmodell til å begrunne
  `(a+b)^2 = a^2 + 2ab + b^2`. En elev løser `x^2 + 4 = 20` og får bare `x = 4`. Beskriv feilen.»
- **Typiske feil:** `(a+b)^2 = a^2 + b^2`; glemme den negative roten; **arealmodell erstattet
  med symboler der figur kreves** (warning).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.4: Rasjonale uttrykk og linjenummerert feilanalyse *(spor: [5–10])*
**id:** `nokut-glu-matte-6-4` · **number:** 6.4 · **estimatedMinutes:** 65 · **prerequisites:** `nokut-glu-matte-6-3`

- **Kapitteltype:** tema (5–10-signaturen). **Spor:** [5–10].
- **Description:** Forenkling av sammensatte brøkuttrykk med variabel for hånd, og den faste
  «beskriv elevens feil linje for linje»-oppgaven — 5–10-signaturen fra V2024.
- **Eksamensbelegg:** **Rasjonale uttrykk er 5–10-signaturen** (~del av 38 deloppg.): fra
  V2024 er «forenkle et sammensatt brøkuttrykk med variabel + beskriv elevens feil linje for
  linje» nesten fast egen oppgave. Sjangre: **L** (forenkling) + **B** (linjenummerert
  feilanalyse). Prioritet: perfekt [5–10].
- **Innholdskontrakt:** rasjonalt uttrykk (brøk med variabel); felles nevner; **forkorting
  kun av felles faktor** (ikke ledd — `\frac{x+2}{2} \ne x`); addisjon/subtraksjon/
  multiplikasjon av brøkuttrykk; forenkling «så mye som mulig» med **vist framgangsmåte**
  (full forenkling ikke alltid krevd for pott — V2025: `n^2 + 3n + 3` trengs ikke forenkles);
  ulovlig forkorting som elevfeil. Notasjon: `\frac{...}{...}` i LaTeX. Utledning aktivt.
- **Didaktisk kontrakt:** **misoppfatningen ulovlig forkorting** (stryke ledd, ikke faktor);
  dele med `(x-2)` uten å sjekke `\ne 0`; linjenummerert feilanalyse (mal 1) tungt — pek på
  *mellom hvilke linjer* feilen skjer, skill feil fra følgefeil (ikke dobbelttrekk).
- **Oppgavesjangre:** L, B. Mønstereksempel: «(a) Forenkle `\frac{x^2-4}{x^2-2x}` så mye som
  mulig, med vist framgangsmåte. (b) En elev har levert en forenkling i fem nummererte
  linjer med én feil — beskriv hvilken feil, og mellom hvilke linjer.»
- **Typiske feil:** **Ulovlig forkorting** (stryke ledd); dele med `(x-2)` (kan være 0);
  følgefeil dobbeltregnet; forenkle mer enn nødvendig og introdusere feil.
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver: (1) *Uttrykk og egenskaper* [felles] — sammentrekning +
arealbevis for distributiv (sjanger L/J). (2) *Potenslover* [5–10] — utled en potenslov med
ord og symboler (sjanger K). (3) *Kvadratsetninger og røtter* [5–10] — arealbevis + `\pm`-rot
elevfeil (sjanger A/B). (4) *Rasjonale uttrykk* [5–10] — forenkling + linjenummerert
feilanalyse (sjanger L/B — signaturoppgaven).

### Del 7 — Funksjoner og grafisk representasjon *(spor: felles · prioritet: PERFEKT)*

#### Kapittel 7.1: Funksjonsbegrepet og representasjoner
**id:** `nokut-glu-matte-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-3-3`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Hva en funksjon *er* (entydig tilordning), de fire representasjonene
  (ord/tabell/graf/uttrykk), og den faste «er dette en funksjon?»-oppgaven.
- **Eksamensbelegg:** Funksjoner/representasjoner (~25 deloppg. 1–7, ~40 5–10 — nær alle sett):
  «er dette en funksjon?», representasjonsveksling. Sjangre: C («er det en funksjon?»), F, G.
  Prioritet: perfekt.
- **Innholdskontrakt:** funksjon som entydig tilordning (hver `x` gir nøyaktig én `y`);
  representasjonene ord/tabell/graf/uttrykk; **avgjøre om en tabell/graf er en funksjon**
  (vertikallinjetest, konseptuelt); koordinatsystem, avlesning. Notasjon: `f(x)`, `(x, y)`.
- **Didaktisk kontrakt:** misoppfatninger — «funksjon = formel»; tro at en graf alltid er en
  funksjon. Mal 1 og mal 2.
- **Oppgavesjangre:** C, F. Mønstereksempel: «Avgjør for hver av tre tabeller om den viser en
  funksjon. Begrunn kort (du trenger ikke begrunne mer enn det som kreves).»
- **Typiske feil:** «Funksjon = formel»; feil vurdering av entydighet; **feil begrunnelse på
  ‘ikke begrunn’-del** (trekk — V2024-warning).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 7.2: Lineære funksjoner — graf, uttrykk og situasjon
**id:** `nokut-glu-matte-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-7-1`

- **Kapitteltype:** tema. **Spor:** [felles] (sammenligning av modeller tyngre [5–10]).
- **Description:** Lineære modeller: fra graf til uttrykk og omvendt, stigningstall og
  konstantledd, og å sammenligne to lineære modeller i samme koordinatsystem.
- **Eksamensbelegg:** Lineær modell + graf↔uttrykk + sammenligne to modeller er faste.
  Sjangre: F (situasjon↔uttrykk), G (to representasjoner), M-kobling (skjæring = likningssett).
  Prioritet: perfekt.
- **Innholdskontrakt:** lineær funksjon `f(x) = ax + b`; **stigningstall** `a` (endring per
  enhet) og **konstantledd** `b`; graf→uttrykk (les av `a` og `b`) og uttrykk→graf; to
  lineære modeller i samme system, skjæringspunkt som felles løsning (kobler til kap. 5.3).
  Notasjon: `f(x) = ax + b`. Utledning aktivt (graf↔uttrykk).
- **Didaktisk kontrakt:** misoppfatninger — forveksle stigningstall og konstantledd; lese
  graf feil. Malene 1, 3 og 4.
- **Oppgavesjangre:** F, G. Mønstereksempel: «To mobilabonnement: A koster 100 kr + 1 kr/min,
  B koster 40 kr + 2 kr/min. Finn uttrykkene, tegn begge grafer i samme system, og finn ved
  hvilken bruk de koster like mye.»
- **Typiske feil:** Bytte om `a` og `b`; feil avlesning; graf uten enheter/akser.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 7.3: Grafskisse fra fortelling og graf↔situasjon
**id:** `nokut-glu-matte-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-7-2`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Å skisse en graf fra en fortelling (fylle en beholder; gå til/fra kino)
  og lese en situasjon ut av en graf — representasjonsveksling uten hjelpemidler.
- **Eksamensbelegg:** Funksjoner testes representasjonssentrert: «skisser en graf fra en
  fortelling», «gå fra graf til situasjon». Sjangre: F (graf↔fortelling), G. Prioritet:
  perfekt.
- **Innholdskontrakt:** kvalitativ grafskisse (stigende/synkende/konstant, brattere =
  raskere endring, knekkpunkter); fra fortelling til grafform og omvendt; ikke-lineære
  kvalitative former (fylle beholder med ulik tverrsnitt). Notasjon: akser med størrelse
  og enhet. Utledning aktivt (skissere for hånd).
- **Didaktisk kontrakt:** misoppfatningen **«graf-som-bilde»** (tegne grafen som et bilde av
  situasjonen — bakke opp = graf opp); hvordan bygge akse-forståelse. Mal 1 og mal 2.
- **Oppgavesjangre:** F. Mønstereksempel: «Skisser en graf som viser vannhøyden over tid når
  et smalt-så-bredt glass fylles med jevn vannstrøm. Forklar formen. En elev tegner en rett
  strek — hvilken misoppfatning viser det?»
- **Typiske feil:** **Graf-som-bilde**-misoppfatningen; manglende akser/enheter; lineær
  skisse der formen er ikke-lineær.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 7:** 4 prøver: (1) *Funksjonsbegrepet* [felles] — «er dette en funksjon?»
+ representasjonsveksling (sjanger C). (2) *Lineære modeller* [felles] — graf↔uttrykk +
sammenlign to modeller (sjanger F/G). (3) *Grafskisse fra fortelling* [felles] — skisse +
graf-som-bilde-elevanalyse (sjanger F). (4) *Blandet Del 7* — alle representasjoner + LK20-
oppgavedesign.

### Del 8 — Tallstruktur-bevis: «vis algebraisk» *(spor: felles + 5–10-tillegg · prioritet: PERFEKT)*

> **Den «rene matematikken».** Huser talleksempel≠bevis- og figurbevis-drillen. 1–7:
> enklere bevis, ofte med illustrasjon som bevis. 5–10: formelle bevis, `6n\pm1`, generelt
> hundrekart.

#### Kapittel 8.1: «Tenk på et tall» og generalisering av aritmetikk
**id:** `nokut-glu-matte-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `nokut-glu-matte-3-2`

- **Kapitteltype:** tema. **Spor:** [felles].
- **Description:** Å avsløre «tenk på et tall»-triks algebraisk og generalisere
  multiplikasjons-/regnetriks — den vennlige inngangen til algebraisk bevis.
- **Eksamensbelegg:** «Tenk på et tall»-oppgaver (~7 deloppg. 1–7, tilbakevendende) +
  generalisering av aritmetikk. Sjangre: **A** (vis algebraisk), F. Prioritet: perfekt.
- **Innholdskontrakt:** oversette en «tenk på et tall»-prosedyre til et uttrykk i `n`,
  forenkle, og forklare hvorfor resultatet er som det er; generalisere et regnetriks.
  Notasjon: `n` for det valgte tallet, definert. Utledning aktivt (dette ER beviset).
- **Didaktisk kontrakt:** misoppfatningen «talleksempel beviser triks»; hvordan bruke
  «tenk på et tall» til å motivere generalisering. Malene 1 og 4.
- **Oppgavesjangre:** A. Mønstereksempel: «Tenk på et tall, gang med 2, legg til 6, del på
  2, trekk fra det opprinnelige tallet. Vis algebraisk hvorfor svaret alltid er 3.»
- **Typiske feil:** **Talleksempel i stedet for generelt argument** (0 p — warning);
  udefinert variabel; regnefeil i forenklingen.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 8.2: Partall, oddetall og delelighet — symbolsk og som figur
**id:** `nokut-glu-matte-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-8-1`

- **Kapitteltype:** tema. **Spor:** [felles] (figurbevis tungt [1–7], symbolsk [5–10]).
- **Description:** Bevis om partall/oddetall og delelighet — både det generelle symbolske
  argumentet og illustrasjonsbeviset (prikker/areal) der oppgaven krever figur.
- **Eksamensbelegg:** Tallstruktur-bevis er gjenganger. **1–7 krever ofte illustrasjon som
  bevis** (prikkmønster/arealmodell), ikke bare symboler; 5–10 symbolsk. Sjangre: **A**
  (symbolsk) + **J** (figurbevis). Prioritet: perfekt.
- **Innholdskontrakt:** representere partall som `2n`, oddetall som `2n+1`; bevise sum-/
  produktsetninger (partall + oddetall = oddetall; produkt av to partall er delelig med 4);
  delelighet; **illustrasjonsbevis** med prikker/areal for de samme sammenhengene (må vise
  *vilkårlig* tilfelle). Notasjon: `2n`, `2n+1`, definert. Utledning aktivt (begge regimer).
- **Didaktisk kontrakt:** misoppfatninger — talleksempel som bevis; figur som viser bare ett
  tilfelle. Malene 1 og 2; både «vis algebraisk»- og figurbevis-warningene aktive.
- **Oppgavesjangre:** A, J. Mønstereksempel: «Vis algebraisk at summen av et partall og et
  oddetall alltid er et oddetall. Vis deretter det samme med et prikkmønster (ikke bruk
  symbolsk algebra).»
- **Typiske feil:** **Talleksempel der ‘vis algebraisk’ kreves** (0 p); **symbolsk svar der
  figur kreves** (0 p); figur som viser ett tilfelle (ikke generelt); feil variabel.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 8.3: Hundrekart, tallstrukturer og formelle bevis *(felles + [5–10]-tillegg)*
**id:** `nokut-glu-matte-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-8-2`

- **Kapitteltype:** tema. **Spor:** [felles] (formelle bevis + `6n\pm1` [5–10]).
- **Description:** Bevis i tallstrukturer — hundrekart-/korsfigur-differansen, tallpyramider/
  regnetrekanter, og de tyngre 5–10-bevisene (delelighet, primtall på formen `6n\pm1`,
  kvadratsetning-identiteter).
- **Eksamensbelegg:** Tallstrukturer (~12 deloppg. 1–7) + formelle bevis (5–10):
  hundrekart-korsdifferanse, `(a+b)^2 - (a-b)^2` delelig med 4, `6n\pm1`. Sjangre: **A**,
  D, J. Prioritet: perfekt (1–7 enklere; 5–10 formelt).
- **Innholdskontrakt:** hundrekart og posisjonsalgebra (`n`, `n+1`, `n+10` osv.); bevise at
  en korsdifferanse er konstant; tallpyramide/regnetrekant-mønstre; **[5–10]** formelle
  bevis: delelighet, `(a+b)^2 - (a-b)^2 = 4ab`, primtall > 3 på formen `6n\pm1`,
  kvadratsetning-identiteter som bevis. Notasjon: posisjonsuttrykk i `n`, definert.
  Utledning aktivt.
- **Didaktisk kontrakt:** misoppfatninger — sette opp posisjonsuttrykkene feil; talleksempel
  som bevis. Malene 1 og 4; «vis algebraisk»-warning.
- **Oppgavesjangre:** A, D, J. Mønstereksempel: «I et hundrekart velger du et 2×2-kvadrat.
  Vis algebraisk at differansen mellom produktene av diagonalene alltid er den samme,
  uansett hvor kvadratet ligger.»
- **Typiske feil:** Feil posisjonsuttrykk; talleksempel (0 p); ufullstendig generalisering
  (ett tilfelle); feil variabel.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 8:** 4 prøver: (1) *«Tenk på et tall»* [felles] — algebraisk avsløring
(sjanger A). (2) *Partall/oddetall* [spor-delt] — symbolsk bevis [5–10] + figurbevis [1–7]
(sjanger A/J). (3) *Hundrekart* [felles] — korsdifferanse-bevis (sjanger A). (4) *Formelle
bevis* [5–10] — delelighet / `6n\pm1` / kvadratsetning-identitet (sjanger A).

### Del 9 — Geometri og måling som algebra-kontekst *(spor: felles · prioritet: kjenne)*

#### Kapittel 9.1: Geometri og måling som bærer for algebra
**id:** `nokut-glu-matte-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-6-1`

- **Kapitteltype:** tema (kontekst). **Spor:** [felles].
- **Description:** Areal, omkrets og volum som *kontekst* for algebraisk generalisering —
  arealmodell for distributiv lov og omskriving av formler, ikke geometri som eget tema.
- **Eksamensbelegg:** Geometri/måling er IKKE selvstendig tema, men dukker opp som kontekst
  (areal for distributiv lov, volumformel-omskriving som algebra). Sjangre: J (arealmodell),
  A (formelomskriving), F. Prioritet: kjenne.
- **Innholdskontrakt:** areal/omkrets/volum-formler til bruk (ikke pugg for eget formål);
  **arealmodell for distributiv lov og kvadratsetninger** (kobler til kap. 6); omskrive en
  formel med hensyn på en annen variabel (algebraisk manipulasjon); enkle måltall. Notasjon:
  standard formelnotasjon. Utledning aktivt (formelomskriving).
- **Didaktisk kontrakt:** misoppfatninger — forveksle areal og omkrets; formelomskriving som
  «flytt over». Mal 1 og mal 2.
- **Oppgavesjangre:** J, A. Mønstereksempel: «Bruk et rektangel til å begrunne
  `(a+2)(a+3) = a^2 + 5a + 6`. Løs deretter volumformelen `V = \pi r^2 h` for `h`.»
- **Typiske feil:** Areal vs. omkrets; feil i formelomskriving; symbolsk der arealmodell kreves.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 9:** 4 prøver: (1) *Arealmodell for algebra* [felles] — rektangelbevis for
distributiv/kvadratsetning (sjanger J). (2) *Formelomskriving* [felles] — løs en formel for
en variabel (sjanger A). (3) *Måling som kontekst* [felles] — kontekstoppgave + variabel-
definisjon (sjanger F). (4) *Blandet Del 9* — arealmodell + elevanalyse.

### Del 10 — Statistikk og sannsynlighet som funksjons-/mønster-kontekst *(spor: felles · prioritet: kjenne)*

#### Kapittel 10.1: Tabeller, diagram og enkel sannsynlighet som kontekst
**id:** `nokut-glu-matte-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `nokut-glu-matte-7-1`

- **Kapitteltype:** tema (kontekst). **Spor:** [felles].
- **Description:** Tabeller, diagram og enkel sannsynlighet som *kontekst* for
  representasjonsveksling og mønster — ikke statistikk som eget tema.
- **Eksamensbelegg:** Statistikk/sannsynlighet er IKKE selvstendig tema, men opptrer som
  kontekst for funksjoner/mønster/tabell. Sjangre: F (tabell↔graf), C (elevvurdering av
  diagram), N. Prioritet: kjenne.
- **Innholdskontrakt:** lese/lage tabell og diagram; gjennomsnitt/median/typetall til bruk;
  enkel sannsynlighet (gunstige/mulige) som brøk (kobler til kap. 2.1); tabell↔graf-
  representasjonsveksling (kobler til kap. 7). Notasjon: brøk for sannsynlighet. Ingen tung
  utledning.
- **Didaktisk kontrakt:** misoppfatninger — misvisende diagram (avkuttet akse); gjennomsnitt
  vs. median. Mal 1 og mal 3.
- **Oppgavesjangre:** F, C. Mønstereksempel: «En elev leser et søylediagram med avkuttet
  y-akse og konkluderer at den ene søylen er ‘tre ganger så høy’. Beskriv misoppfatningen og
  hvordan du ville tydeliggjort skalaen.»
- **Typiske feil:** Misvisende skala; gjennomsnitt vs. median forvekslet; sannsynlighet
  utenfor `[0, 1]`.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver: (1) *Tabell og diagram* [felles] — tabell↔graf +
misvisende-skala-elevanalyse (sjanger F/C). (2) *Sentralmål* [felles] — gjennomsnitt/median
+ elevvurdering. (3) *Enkel sannsynlighet* [felles] — gunstige/mulige som brøk + kontekst.
(4) *Blandet Del 10* — representasjonsveksling + oppgavedesign m/LK20.

### Del 11 — Eksamenstrening *(spor-delt)*

> Felles didaktiske sjangerdrillkapitler + spor-delte øvingseksamener (3 for 1–7, 2 for
> 5–10), alle uten hjelpemidler med 2/1/0-rubrikkfasit. Alle oppgaver, elevsvar og case
> er NYSKREVNE.

#### Kapittel 11.1: Didaktisk sjangerdrill — elevsvar-analyse og misoppfatninger (B/C/D/I)
**id:** `nokut-glu-matte-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-0-2`

- **Kapitteltype:** sjangerdrill. **Spor:** [felles].
- **Description:** Samler de didaktikk-tunge analyse-sjangrene — avgjør om elevsvar er
  korrekt, linjenummerert feilanalyse, multivalgt elevvurdering, «alltid/av og til/aldri»,
  likhetstegn-diagnose — og driller dem som modellsvar med 2/1/0-fasit.
- **Eksamensbelegg:** De didaktiske analyseformatene er hyppigst (analysen §3/§5). Prioritet:
  perfekt (meta). Sjangre B, C, D, I samlet på tvers av temaene.
- **Innhold:** `text` **Løsningsoppskrift** per sjanger (B: identifiser feilen + linjenummer,
  skill følgefeil; C: vurder hvert utsagn, ikke begrunn mer enn krevd; D: klassifiser +
  trinntilpasset talleksempel; I: begge elevtyper + avdekkende oppgave). `example`
  gjennomskrevne modellsvar på E-, C- og A-nivå med margnotat om hvor poengene faller.
  `exercise` = skriv analysen selv, sammenlign med 2/1/0-fasit. Trekker på de sikreste
  misoppfatningene: likhetstegn operasjon-vs-relasjon, variabel-som-objekt, ulovlig
  forkorting, feil mønster-generalisering, glemme å vende ulikhetstegn.
- **Typiske feil:** Deskriptiv gjengivelse uten analyse; feil begrunnelse på «ikke
  begrunn» (V2024); dobbelttrekk av følgefeil; halvt sammensatt krav.
- **Kvote:** 20 quiz / 12 flashcards.

#### Kapittel 11.2: Didaktisk sjangerdrill — tiltak, oppgavedesign og LK20 (H/N/F)
**id:** `nokut-glu-matte-11-2` · **number:** 11.2 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-0-2`

- **Kapitteltype:** sjangerdrill. **Spor:** [felles].
- **Description:** Driller de konstruktive didaktiske sjangrene — skålvekt/balansemodell,
  oppgavedesign m/LK20, og kontekst↔uttrykk — som modellsvar med nivåbegrunnelse.
- **Eksamensbelegg:** Skålvekt (H), oppgavedesign/trinntilpasning m/LK20 (N) og
  kontekst↔uttrykk (F) er faste konstruktive format. Prioritet: perfekt (meta).
- **Innhold:** `text` **Oppskrift** per sjanger (H: likning for trinn + tegn skålvekt +
  balanse-resonnement + når modellen svikter; N: oppgave + løsning + nivåbegrunnelse +
  LK20-forankring `(verifiser)`; F: kontekst som matcher struktur + definer variabler).
  `example` modellsvar med LK20-forankring og margnotat om nivåtreff. `exercise` = design
  selv, sammenlign med fasit.
- **Typiske feil:** Oppgavedesign uten LK20 eller uten løsning; skålvekt der den svikter;
  kontekst som ikke matcher uttrykket; udefinerte variabler; feil trinn.
- **Kvote:** 18 quiz / 12 flashcards.

#### Kapittel 11.3: For-hånd-regnedrill — uttrykk, likninger, potenser, rasjonale uttrykk
**id:** `nokut-glu-matte-11-3` · **number:** 11.3 · **estimatedMinutes:** 65 · **prerequisites:** `nokut-glu-matte-6-4`

- **Kapitteltype:** sjangerdrill (regne). **Spor:** [felles] + [5–10]-seksjon.
- **Description:** Ren symbolmanipulasjon for hånd under tidspress — sammentrekning,
  distributiv, likninger/ulikheter, [5–10] potenslover, kvadratsetninger, rasjonale
  uttrykk og likningssett — den matematiske ryggraden uten hjelpemidler.
- **Eksamensbelegg:** Uten hjelpemidler må all symbolmanipulasjon sitte for hånd. Sjangre
  L, K, M, A samlet. Prioritet: perfekt (meta). [5–10]-seksjonen dekker de tunge teknikkene.
- **Innhold:** `text` **Løsningsoppskrifter** (forenkling: felles faktor før ledd;
  potenslov: begrunn + bruk; likningssett: definer → metodevalg → løs; kvadratsetning:
  arealkobling). `example` gjennomregnet med A-føring og markert sluttsvar. `exercise`
  15–20 på eksamensnivå med full føring; [5–10]-seksjon for rasjonale uttrykk, potenser,
  likningssett, kvadratrøtter.
- **Typiske feil:** Ulovlig forkorting; potenslov-forveksling; udefinerte variabler i
  likningssett; glemme `\pm`-rot; regnefeil for hånd; regel-oppramsing uten begrunnelse (K).
- **Kvote:** 20 quiz / 10 flashcards.

#### Kapittel 11.4: Figurmønster- og generaliseringsdrill (E/G)
**id:** `nokut-glu-matte-11-4` · **number:** 11.4 · **estimatedMinutes:** 60 · **prerequisites:** `nokut-glu-matte-4-5`

- **Kapitteltype:** sjangerdrill. **Spor:** [felles] + [5–10] (ikke-lineære).
- **Description:** Fokusert drill på det tyngste domenet — figurmønster til rekursiv +
  eksplisitt formel «på to måter» med «to elevers formler», lineære [1–7] og ikke-lineære
  [5–10].
- **Eksamensbelegg:** Figurmønster er tyngst hvert sett, begge spor (analysen §2/§7).
  Prioritet: perfekt (meta). Sjanger E + G.
- **Innhold:** `text` **Oppskrift** (tegn/beskriv → tell → rekursiv m/startledd → eksplisitt
  koblet til figur → to måter → [5–10] differanse-sjekk lineær/kvadratisk). `example`
  gjennomregnet signaturoppgave med 2/1/0-margnotat (1-poengsdelene i rekursiv/beskrivelse,
  full pott i eksplisitt + figurkobling). `exercise` 12–16, lineære og ikke-lineære, hver
  med didaktisk delspørsmål («to elevers formler»).
- **Typiske feil:** Feil generalisering (kun differanse); formel uten figurkobling;
  talleksempel der generalisering kreves; feil variabel; tidsfellen.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 11.5: «Vis algebraisk» og figurbevis-drill (A/J) + notasjonsdisiplin
**id:** `nokut-glu-matte-11-5` · **number:** 11.5 · **estimatedMinutes:** 55 · **prerequisites:** `nokut-glu-matte-8-3`

- **Kapitteltype:** sjangerdrill (bevis). **Spor:** [felles] (figurbevis tungt [1–7], formelt [5–10]).
- **Description:** Bevisdrillen — det generelle symbolske argumentet og illustrasjonsbeviset,
  med talleksempel≠bevis- og notasjonsstrenghet-fellene som ryggmargsrefleks.
- **Eksamensbelegg:** «Vis algebraisk» og figurbevis er faste, med de skarpeste 0-poeng-
  reglene (analysen §4). Prioritet: perfekt (meta). Sjanger A + J.
- **Innhold:** `text` **Oppskrift** (symbolsk: definer variabel + knytt til situasjon +
  generelt argument; figur: representasjon + vilkårlig tilfelle + ord). `example` par av
  «talleksempel-svar (0 p)» vs. «generelt bevis (full pott)» for samme påstand, og et
  figurbevis vs. et symbolsk-der-figur-kreves (0 p). `exercise` 12–15 (partall/oddetall,
  delelighet, hundrekart, «tenk på et tall», [5–10] `6n\pm1` og kvadratsetning-identiteter),
  merket hvilket bevisregime som kreves.
- **Typiske feil:** **Talleksempel der ‘vis algebraisk’ kreves** (0 p); **symbolsk der figur
  kreves** (0 p); figur som viser ett tilfelle; **feil variabelbokstav** (0 p); udefinert
  variabel.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 11.6: Øvingseksamen 1–7 A (komplett sett, uten hjelpemidler)
**id:** `nokut-glu-matte-11-6` · **number:** 11.6 · **estimatedMinutes:** 90 · **prerequisites:** `nokut-glu-matte-11-5`

- **Kapitteltype:** øvingseksamen [1–7]. **Spor:** [1–7].
- **Description:** Et komplett, nyskrevet 1–7-sett i gjeldende format: 4 t, ingen
  hjelpemidler, ~18 deloppgaver = ~26 p, tung didaktisk innramming, med 2/1/0-rubrikkfasit.
- **Innhold:** temafordeling som et typisk 1–7-sett: likhetstegn-diagnose (I), figurmønster
  lineært med rekursiv+eksplisitt+to elevers formler (E/G), skålvekt-likning for trinn (H),
  algebraisk uttrykk / arealbevis (L/J), «er dette en funksjon?» / grafskisse (C/F), «vis
  algebraisk» + figurbevis av partall/oddetall (A/J), oppgavedesign m/LK20 (N). ~70–80 %
  didaktisk. `collapsible` full 2/1/0-momentliste-fasit per oppgave; `tip` **Sensorblikket**
  (hvor E-kandidaten høster 1-poengsdelene bredt vs. hva A krever: fullstendig bevis, presis
  misoppfatningsanalyse, LK20-forankring).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 11.7: Øvingseksamen 1–7 B (komplett sett, uten hjelpemidler)
**id:** `nokut-glu-matte-11-7` · **number:** 11.7 · **estimatedMinutes:** 90 · **prerequisites:** `nokut-glu-matte-11-6`

- **Kapitteltype:** øvingseksamen [1–7]. **Spor:** [1–7].
- **Description:** Andre komplette 1–7-sett med en annen, men typisk, profil (tyngre på
  variabelbegrep og «to elevers formler», mer illustrasjonsbevis).
- **Innhold:** som 11.6 med annen oppgavemiks: variabel-diagnose (C), ikke-lineær-fri
  figurmønster med tung rekursiv-vekt (E), ulikhet med elevfeil (B), oversettelse kontekst↔
  uttrykk (F), hundrekart-bevis enkelt (A), tallinje/relasjonell tallforståelse (D/N). Full
  2/1/0-fasit + Sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 11.8: Øvingseksamen 1–7 C (komplett sett, uten hjelpemidler)
**id:** `nokut-glu-matte-11-8` · **number:** 11.8 · **estimatedMinutes:** 90 · **prerequisites:** `nokut-glu-matte-11-7`

- **Kapitteltype:** øvingseksamen [1–7]. **Spor:** [1–7].
- **Description:** Tredje komplette 1–7-sett, vektlagt mot de tunge didaktiske
  fullpott-svarene (misoppfatningsanalyse + tiltak + LK20) for A-trening.
- **Innhold:** som 11.6/11.7 med minst to tunge didaktiske fullpott-oppgaver (likhetstegn-
  diagnose med avdekkende oppgavedesign; «to elevers formler» med full ekvivalens- og
  tenkningsanalyse). Full 2/1/0-fasit + Sensorblikket med A/C/E-terskelbeskrivelse.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 11.9: Øvingseksamen 5–10 A (komplett sett, uten hjelpemidler)
**id:** `nokut-glu-matte-11-9` · **number:** 11.9 · **estimatedMinutes:** 90 · **prerequisites:** `nokut-glu-matte-11-5`

- **Kapitteltype:** øvingseksamen [5–10]. **Spor:** [5–10].
- **Description:** Et komplett, nyskrevet 5–10-sett i gjeldende format: 4 t, ingen
  hjelpemidler, ~22 deloppgaver = ~31 p, ~50/50 matte/didaktikk, med 2/1/0-rubrikkfasit.
- **Innhold:** temafordeling som et typisk 5–10-sett: figurmønster ikke-lineært med
  kvadratisk formelutledning (E/A), rasjonalt uttrykk-forenkling + linjenummerert
  feilanalyse (L/B — signaturoppgaven), potenslov-utledning (K), likningssett fra kontekst
  (M), funksjoner graf↔uttrykk / sammenlign to modeller (F/G), «vis algebraisk»
  tallstrukturbevis / `6n\pm1` (A), kvadratsetning-arealidentitet (A/J). `collapsible` full
  2/1/0-momentliste-fasit; `tip` **Sensorblikket** (E høster de enkle forenklingene og
  mønstrene bredt; A behersker rasjonale uttrykk, potenslov-begrunnelse og de formelle
  bevisene fullstendig).
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 11.10: Øvingseksamen 5–10 B (komplett sett, uten hjelpemidler)
**id:** `nokut-glu-matte-11-10` · **number:** 11.10 · **estimatedMinutes:** 90 · **prerequisites:** `nokut-glu-matte-11-9`

- **Kapitteltype:** øvingseksamen [5–10]. **Spor:** [5–10].
- **Description:** Andre komplette 5–10-sett med en annen, men typisk, profil (tyngre på
  likningssett, kvadratsetninger og formelle bevis) — for A-trening på de tunge teknikkene.
- **Innhold:** som 11.9 med annen miks: trekanttall-følge med kvadratisk formel «på to
  måter» (E/G), rasjonalt uttrykk med ulovlig-forkorting-feilanalyse (L/B), kvadratrot-
  elevfeil (`\pm`) (B), likningssett med tolkning av antall løsninger (M), grafskisse fra
  fortelling (F), hundrekart-korsdifferanse generelt bevis (A). Full 2/1/0-fasit +
  Sensorblikket med A/C/E-terskler.
- **Kvote:** 6 quiz / 2 flashcards.

**Prøve-kvote Del 11:** ingen egne temaprøver — de fem spor-delte øvingseksamenene (3 for
1–7: 11.6–11.8; 2 for 5–10: 11.9–11.10) er delens helhetlige formatspeil.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 4 | 58 | 52 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 54 | 54 | 4 |
| 2 | 2 | 32 | 36 | 4 |
| 3 | 3 | 58 | 58 | 4 |
| 4 | 5 | 100 | 94 | 4 |
| 5 | 3 | 56 | 56 | 4 |
| 6 | 4 | 76 | 76 | 4 |
| 7 | 3 | 58 | 58 | 4 |
| 8 | 3 | 54 | 54 | 4 |
| 9 | 1 | 16 | 16 | 4 |
| 10 | 1 | 16 | 16 | 4 |
| 11 | 10 | 124 | 64 | 0 (= 5 spor-delte øvingseksamener) |
| **Sum** | **42** | **702** | **634** | **40 + 5 øvingseksamener** |

Begge summer overstiger gulvet ≥500/≥500 med god margin, som fagets bredde (to spor +
didaktikk + matte) tilsier. Del-summene over er identiske med den autoritative
kapittel-for-kapittel-summeringskontrollen under.

Summeringskontroll per del (quiz / flashcards) — AUTORITATIV:
- Del 0: 12+18+16+12 = **58** / 12+16+14+10 = **52**
- Del 1: 18+18+18 = **54** / 18+18+18 = **54**
- Del 2: 16+16 = **32** / 18+18 = **36**
- Del 3: 20+20+18 = **58** / 20+20+18 = **58**
- Del 4: 20+20+22+20+18 = **100** / 20+20+22+20+12 = **94**
- Del 5: 20+18+18 = **56** / 20+18+18 = **56**
- Del 6: 20+18+18+20 = **76** / 20+18+18+20 = **76**
- Del 7: 20+20+18 = **58** / 20+20+18 = **58**
- Del 8: 18+18+18 = **54** / 18+18+18 = **54**
- Del 9: 16 = **16** / 16 = **16**
- Del 10: 16 = **16** / 16 = **16**
- Del 11: 20+18+20+18+18+6+6+6+6+6 = **124** / 12+12+10+10+10+2+2+2+2+2 = **64**
- **Totalt: 702 quiz / 634 flashcards.** (Begge ≥ 500 ✓)

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene og fagets natur: nivå-1-delene (algebra-kjernen Del 3,
figurmønster Del 4 = tyngst, likninger Del 5, uttrykk Del 6, funksjoner Del 7,
tallstruktur-bevis Del 8) bærer flest quiz og flashcards; grunnlags- og kontekstdelene
(1–2, 9–10) er slankere; Del 11-drillkapitlene har lave flashcard-kvoter (få nye
definisjoner) men høye quiz-/oppgavekvoter. Flashcard-tettheten er høy (634) fordi faget
har DOBBELT begrepsapparat — matematiske definisjoner/prosedyrer OG didaktiske begreper
(misoppfatninger, sjangre, LK20-mål, sensorregler) — som begge egner seg for
pugge-/gjenkjenningskort. **Quiz-profil:** metode- og begrepssjekk (er dette en funksjon;
hvilken misoppfatning; er beviset gyldig eller bare et talleksempel; hvilket bevisregime
kreves; rekursiv vs. eksplisitt; hvilken potenslov; vend ulikhetstegnet?) med distraktorer
fra de faste elev-misoppfatningene (likhetstegn operasjon-vs-relasjon, variabel-som-objekt,
prosentpoeng-vs-prosent, feil mønster-generalisering, ulovlig forkorting).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10 = 40 prøver)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre (A–N), med 2/1/0-momentliste-
fasit og spor-merking. Hver prøve speiler eksamensformatet i miniatyr: en blanding av
matematiske (for hånd) og didaktiske oppgaver, ~20–40 min. Prøvekapittel-id
`nokut-glu-matte-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 11
har ingen egen temaprøve (Del 11s fem spor-delte øvingseksamener dekker helheten).
Prøvespesifikasjonene per del står i §3 under hver dels «Prøve-kvote Del N».

### Spor-delte øvingseksamener (5 komplette sett — kapitlene 11.6–11.10)

| Sett | Spor | Form den speiler | Miks (sjangre) |
|---|---|---|---|
| Øvingseksamen 1–7 A (11.6) | 1–7 | Typisk 1–7-sett, ~26 p, ~70–80 % didaktikk | I + E/G + H + L/J + C/F + A/J + N |
| Øvingseksamen 1–7 B (11.7) | 1–7 | Variabel-/rekursiv-tungt 1–7-sett | C + E + B + F + A + D/N |
| Øvingseksamen 1–7 C (11.8) | 1–7 | Didaktikk-fullpott-tungt (A-trening) | I + E/G (full analyse) + A/J + N + H |
| Øvingseksamen 5–10 A (11.9) | 5–10 | Typisk 5–10-sett, ~31 p, ~50/50 | E/A + L/B + K + M + F/G + A + A/J |
| Øvingseksamen 5–10 B (11.10) | 5–10 | Likningssett-/bevis-tungt (A-trening) | E/G + L/B + B + M + F + A |

Til sammen dekker de fem settene samtlige sjangre A–N minst én gang i riktig spor: de tunge
5–10-teknikkene (rasjonale uttrykk, potenslover, likningssett, kvadratrøtter, ikke-lineære
formler, formelle bevis) i 11.9–11.10; den tunge 1–7-didaktikken (likhetstegn-diagnose,
skålvekt, illustrasjonsbevis, relasjonell tallforståelse) i 11.6–11.8; figurmønster og «vis
algebraisk» i alle. Alle uten hjelpemidler, med 2/1/0-rubrikkfasit og Sensorblikk-notat om
E/C/A-tersklene. Begrunnelse: øvingseksamenene er studentens eneste helhetlige, spor-riktige
formatspeil og trener tidsdisiplin + bred poenghøsting (bestått = 1-poengsdelene bredt).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik er eksamen** — gjeldende form (4 t digital, ingen hjelpemidler, A–F, ekstern
   sensur, 25–33 p, 2/1/0-retting), de to variantene (1–7 / 5–10), de to regimeskiftene
   (algebraisk tenkning; uten hjelpemidler), karaktermønsteret (E ≈ 35–47 %, A ≈ 85–90 %,
   grenser satt per sitting) (fra kap. 0.1).
2. **Prioriteringskartet** — de fem bæretemaene + algebra-kjernen som **perfekt**
   (Del 3–8), tallgrunnlaget som **kunne/kjenne** (Del 1–2), geometri/statistikk som
   **kjenne** (Del 9–10) — med spor-merking (hva 1–7 vs. 5–10 må prioritere).
3. **Det didaktiske skrivehåndverket** — de fire malene (elevsvar-analyse, misoppfatning→
   tiltak, oppgavedesign m/LK20, to elevers formler) og A/C/E-kalibreringen for et
   didaktisk svar (fra kap. 0.2), som huskeoppskrifter.
4. **Bevis- og notasjonshåndverket** — «vis algebraisk» vs. figurbevis, talleksempel≠bevis,
   notasjonsstrengheten (fra kap. 0.3), som varsellamper.
5. **Sensorreglene og 2/1/0-rubrikken** — de 11 faste reglene + hvordan poeng høstes og
   mistes (fra kap. 0.4), inkl. V2024-regelen («ikke begrunn» + feil begrunnelse = trekk)
   og bredde-regelen (bestått = 1-poengsdelene bredt).
6. **Misoppfatnings- og sjangerkatalogen** — de faste elev-misoppfatningene (likhetstegn
   operasjon-vs-relasjon, variabel-som-objekt, prosentpoeng-vs-prosent, feil mønster-
   generalisering, ulovlig forkorting, glemme å vende ulikhetstegn, graf-som-bilde) koblet
   til sjangrene (A–N) og til kapitlet som forebygger dem.
7. **For-hånd-notasjon og LK20-liste** — de matematiske prosedyrene/lovene (potenslover,
   kvadratsetninger, eksplisitt/rekursiv formel, likningssett-metoder) i emnets notasjon,
   og de relevante LK20-kompetansemålene i algebra `(verifiser)` — med skille mellom
   *utlede/utføre aktivt* (bevis, formelutledning, symbolmanipulasjon) og *kjenne til*.
8. **Studieløp** — spor-delt semesterplan: begge — Del 0 → Del 3 (kjerne) → Del 4
   (figurmønster) → Del 5 → Del 7 → Del 8; 1–7 legger til Del 1–2 (tallgrunnlag) og de
   didaktikk-tunge sjangrene; 5–10 legger til Del 6 (potenser/kvadratsetninger/rasjonale
   uttrykk) og Del 5.3 (likningssett) — så prøvene, så øvingseksamenene i eget spor de siste
   to ukene. Intensivvariant (2–3 uker) per spor: kjernen + de fem bæretemaene + Del 0 +
   øvingseksamenene i eget spor.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `nokut-glu-matte`, title, `level: 'Høyskole'`, alle
   42 kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen. Institusjon = NOKUT i
   `institusjoner.ts`, visningsnavn «GLU-matte Nasjonal deleksamen i matematikk (GLU)».
2. **Del 0** først (etablerer de fire didaktiske malene, sjangerkatalogen A–N,
   bevisregimene, notasjonsstrengheten og 2/1/0-rubrikken som ALLE senere kapitler bygger på).
3. **Del 1 → 2** (lærerfaglig tallgrunnlag) → **Del 3** (algebra-kjernen) → **Del 4 → 5 → 6
   → 7 → 8** (de fem bæretemaene) → **Del 9 → 10** (kontekst). Prerequisites peker bakover.
   Del 6 bygges etter Del 3 (variabel/uttrykk); Del 8 etter Del 3 og Del 6 (bevis bruker
   uttrykk/kvadratsetninger).
4. **Del 11** til slutt (drill- og øvingseksamenskapitlene gjenbruker maler, sjangre,
   misoppfatninger og figurer fra temadelene). Én agent for de felles sjangerdrillkapitlene
   (11.1–11.5), som leser HELE skjelettet; øvingseksamenene bygges spor-vis.
5. **Prøver** (`nokut-glu-matte-<del>-prove`, chapterNumber `<del>.P`) etter at delens
   kapitler finnes, av delens agent.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Notasjon/begreper/LK20 → text Motivasjon → definition/theorem
(flashcard-kilden — toppnivå med title!) → text Elevperspektivet → example ×2–4 (matte +
didaktisk modellsvar) → warning Typiske feil (inkl. «vis algebraisk»- og notasjons-
warningene) → exercise ×6–12 (matte + de fire malene, merket sjanger + spor) → collapsible
Repetisjon). Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og misoppfatningene
fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nokut-glu-matte-*.json` parser med
      `json.load` (generer via `json.dump`; LaTeX krever `\\` i JSON-strenger). `npm run build`
      grønn — vis output.
- [ ] **Metadata-konsistens:** alle 42 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («4.3», ALDRI lineær); prosareferanser bruker samme form («kap. 4.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-
      ruter gir 200).
- [ ] **Kalibrering mot GJELDENDE regime:** tema = algebraisk tenkning (IKKE brøk/desimal/
      prosent som eget eksamenstema — Del 1–2 er forkunnskap/lærerfaglig, merket slik); form =
      UTEN hjelpemidler (ingen GeoGebra/graftegner/regneark-avhengige oppgaver noe sted); de
      to regimeskiftene omtales korrekt i kap. 0.1; hjemmeeksamen-«alle hjelpemidler»-epoken
      kun som anomali.
- [ ] **To-spor-integritet:** HVERT kapittel og HVER oppgave er merket [1–7]/[5–10]/[felles];
      de tunge 5–10-teknikkene (potenslover 6.2, kvadratsetninger 6.3, rasjonale uttrykk 6.4,
      likningssett 5.3, ikke-lineære følger 4.4) er merket [5–10]; likhetstegn/skålvekt/
      illustrasjonsbevis merket tungt [1–7]; øvingseksamenene er spor-delte (3× 1–7, 2× 5–10).
- [ ] **Didaktikk-DNA i hvert temakapittel (Del 3–8):** alle fire malene forekommer på tvers
      (elevsvar-analyse, misoppfatning→tiltak, oppgavedesign m/LK20, to elevers formler);
      minst ett `example` er et didaktisk modellsvar (ikke bare et regnet eksempel); elevsvar
      er NYSKREVNE.
- [ ] **Sensurnøkkelen operasjonalisert:** «vis algebraisk ≠ talleksempel»-warning i alle
      bevis-/generaliseringskapitler (0.3, 4.x, 8.x, 11.5); figurbevis-kravet der «ikke bruk
      symbolsk algebra» (8.2, 6.1/6.3 arealmodell, 11.5); notasjonsstrenghet-warning der
      symbolvalg fastsettes (3.2, 5.3, 8.x, 11.5); 2/1/0-momentliste-fasit på alle prøver og
      øvingseksamener; V2024-regelen («ikke begrunn» + feil begrunnelse = trekk) i 0.2/0.4/
      7.1; følgefeil-ikke-dobbelt og sammensatt-krav-reglene i feilanalyse-kapitlene (6.4,
      11.1); bredde-regelen (bestått = 1-poengsdelene bredt) i 0.1/0.4/Sensorblikk.
- [ ] **«Vis algebraisk»-integritet:** ingen bevis-modellsvar «beviser» med talleksempler;
      alle generelle bevis definerer variabelen og knytter den til situasjonen; figurbevis
      viser vilkårlig (ikke ett) tilfelle.
- [ ] **LK20-forankring:** oppgavedesign-oppgaver (sjanger N) henviser til et LK20-
      kompetansemål; alle LK20-mål er merket `(verifiser)` for fagfellesjekk i fase 6 — INGEN
      oppdiktede kompetansemål.
- [ ] **Kvotesum:** quiz ≥702 og flashcards ≥634 fordelt per kapittel som angitt (hardt
      minimum ≥500/≥500); 4 prøver per del for Del 1–10 (40) + 5 spor-delte øvingseksamener;
      fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging,
      runtime stokker).
- [ ] **Opphavsrett:** ALLE oppgaver, elevsvar, figurtekster, case og øvingseksamener er
      NYSKREVNE — ingen formuleringer fra NOKUT-oppgavesett eller sensorveiledninger, ingen
      ordrette fasitmomenter. Matematiske begreper, notasjon og didaktiske standardtermer er
      allment fagstoff og fritt (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett).
- [ ] **Ikke-pensum utelatt / riktig vektet:** brøk/desimal/prosent bygges IKKE som eget
      eksamenstema (kun forkunnskap/felle); geometri/måling og statistikk/sannsynlighet KUN
      som algebra-/funksjonskontekst (Del 9–10, kjenne-nivå); verktøyavhengige metoder utelatt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker + collapsible «Notasjon, begreper og LK20»
      først i hvert temakapittel (lenk kun til eksisterende kapitler); Eksamensvinkel-`tip` og
      Typiske feil-`warning` i hvert kapittel; «bør kjenne til»-stoff plassert ETTER
      kjernestoffet og merket; aktiv «du»-form, korte avsnitt, konkret før formelt.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      innholdssjekk), jf. `getChapterMeta`-lærdommen.

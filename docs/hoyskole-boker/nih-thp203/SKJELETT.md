# Bokskjelett: THP203 Basal biomekanikk — eksamensrettet lærebok (NIH)

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
> `EKSAMENSANALYSE.md` (fem lesbare sittinger 2023–26 med fire fullstendige
> sensorveiledninger + én malbasert, alle lest oppgave for oppgave). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Dette er **anvendt klassisk
> mekanikk på biologiske systemer + vevsmekanikk**, ikke ren matematikk: full
> utregning, korrekt frilegemebetraktning, riktig enhet og riktig retning er
> gjennomgående sensorkrav, og «follow-through»-poeng er en bærende
> rettelogikk.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-thp203` |
| Tittel | **THP203 Basal biomekanikk — eksamensrettet (NIH)** |
| Level | `'Høyskole'` |
| Institusjon | Norges idrettshøgskole (NIH) |
| Arketype | Regnefag (anvendt mekanikk på idrett + vevsmekanikk, tredelt eksamen med tre svarlogikker) |
| Antall kapitler | **24** nummererte (1 eksamenskart + 2 forkunnskaper + 9 fysikk inkl. drill + 4 vevsmekanikk + 3 anvendt biomekanikk + 5 eksamenstrening) + **4 temaprøve-kapitler** (`-prove`, ett per Del 1–4) |
| Estimert totaltid | **1 730 min ≈ 28,8 timer** |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **586** (krav ≥500) |

**Pitch (ett avsnitt):** THP203 er ett av de mest forutsigbare emnene i
porteføljen — men det er egentlig **tre nesten uavhengige eksamener i én**. Prøven
er en **individuell stedbunden salseksamen på 3 timer (10:00–13:00)** med **godkjent
kalkulator + utdelt formelsamling** som eneste hjelpemidler. Formelsamlingen er
avgjørende: eksamen tester *bruk* av formlene, ikke memorering. Oppgaveteksten er
engelsk fra 2024–25, men kandidaten svarer på norsk **eller** engelsk — boka lærer
derfor begrepsapparatet parallelt på norsk og engelsk («treghetsmoment / moment of
inertia», «spinn / angular momentum»). Settet er delt i tre seksjoner med
**bunnfast poengvekt 70/20/10** gjennom hele arkivet: **Seksjon 1 Fysikk (70 p)** er
ren regning med full utregning, **Seksjon 2 Vevsmekanikk (20 p)** er
definisjoner/prosedyrer/momentlister, og **Seksjon 3 Anvendt biomekanikk (10 p)** er
kort drøfting + graftolkning. **Fysikkseksjonen er hele slaget** — boka vektes
tilsvarende: mengdetrening på de åtte formelfamiliene i Seksjon 1 (med statikk-/
frilegemeoppgaven som den enkeltviktigste ferdigheten), faktapugg for vev og
modeller som støtte. Oppgavescenariene resirkuleres med ny idrett og nye tall hvert
år (sleggekast, stavhopp, trampoline, dykking, håndball, slalåm, snowboard, tennis,
golf, squash) — **fysikken er identisk**, bare innpakningen skifter.

**Kritisk kalibrering — de fem sensorreglene (gjelder HELE boka):** Fasitene og
fradragsreglene er nesten ordrett like i alle fire fritt skrevne veiledningene. Fem
regler går igjen og skal modelleres eksplisitt i hver innholdskontrakt under:
1. **Vis utregning.** Alternative korrekte metoder godtas, og steg kan hoppes over
   når svaret er riktig. Er kun sluttsvaret oppgitt uten utregning: **1 poeng**.
   Hvert regnekapittel skal modellere ryddig, trinnvis føring.
2. **Enhet i sluttsvaret er obligatorisk.** Manglende/feil enhet: **−1 poeng** — det
   hyppigst nevnte fradraget i hele arkivet. Enhetsføring drilles gjennomgående.
3. **Retning kreves der oppgaven ber om det** (leddreaksjonskrefter, friksjon).
   Manglende/feil retning: **−1 poeng**. Et korrekt frilegemediagram kan gi
   retningspoenget selv om retningen ikke er skrevet ut.
4. **Ikke rund av for tidlig.** Behold minst 3 desimaler underveis, 2 desimaler i
   sluttsvar. For tidlig avrunding: **−1 poeng**. Fasiten regner konsekvent med
   **$g = 9{,}81\ \mathrm{m\,s^{-2}}$** (ALDRI $g=10$).
5. **«Follow-through»-poeng.** En tidlig regnefeil straffes kun én gang; er de
   påfølgende stegene metodisk riktige, gis poeng for dem likevel. Boka skal lære
   studenten at *metoden* bæres selv om et tall glapp — sett alltid opp hele
   løsningsveien.

**Formelsamling-prinsippet (gjelder HVER delkapittel — bokas viktigste didaktiske
grep, analogt med formelark-prinsippet i regnefag-DNA-en):** Fordi en formelsamling
utdeles og «antas kjent», skiller hvert kapittel to slags innhold eksplisitt:
- **«Står i formelsamlingen — tren oppslaget/bruken»**: standardformlene. Ferdigheten
  er å *velge riktig formel, dekomponere riktig og sette inn riktige størrelser med
  riktig enhet*. Dette gjelder bl.a.: $F=mg$; $E_k=\tfrac12 mv^2$; $E_p=mgh$;
  $W=Fd$; $P=W/t=Fv$; $p=mv$; impuls $Ft=\Delta p$; $\Sigma\tau=0,\ \Sigma F=0$;
  $\tau=F\,d_\perp$; $H=I\omega$; $v=r\omega$; $a_\text{sentr}=v^2/r$;
  $F_f=\mu R$, $R=mg\cos\theta$; kinematikkligningene $v=u+at$, $s=ut+\tfrac12at^2$,
  $v^2=u^2+2as$; $E=\text{stress}/\text{strain}$ (Youngs modul).
- **«Må kunnes/settes opp aktivt»**: hele *frilegemebetraktningen* og
  momentbalansen i statikkoppgaven; **dekomponering** av skrått kast i horisontal/
  vertikal; **fortegnskonvensjon** i momentbalansen; **valg av rett kinematikk-
  ligning**; **retningsangivelse** på reaksjonskrefter; **gradkonvertering**
  ($\text{rad}=\text{grader}\cdot\pi/180$) før $H=I\omega$ og $v=r\omega$;
  **fysikalsk tolkning** av spenning–tøyningskurver og gangesyklus-grafer
  (fortegn/stigningstall/areal).

**Notasjonskonvensjoner boka skal speile slavisk** (fra settene, fasitene og norsk/
engelsk fagterminologi):
- **Fysikk:** kraft $F$ (N), vekt $F=mg$ med $g=9{,}81$, masse $m$ (kg), fart $v$
  (m·s⁻¹), akselerasjon $a$ (m·s⁻²); bevegelsesmengde $p=mv$ (kg·m·s⁻¹); impuls
  $Ft=\Delta p$ (N·s); kinetisk energi $E_k=\tfrac12 mv^2$ (J); potensiell energi
  $E_p=mgh$ (J); arbeid $W=Fd$ (J); effekt $P=W/t=Fv$ (W); dreiemoment
  $\tau=F\,d_\perp$ (N·m); statisk likevekt $\Sigma\tau=0,\ \Sigma F=0$; spinn
  (impulsmoment) $H=I\omega$ (kg·m²·s⁻¹); treghetsmoment $I$ (kg·m²);
  vinkelhastighet $\omega$ (rad·s⁻¹); lineær–vinkel-sammenheng $v=r\omega$;
  sentripetalakselerasjon $a_z=v^2/r$; friksjon $F_f=\mu R$, $R=mg\cos\theta$.
- **Vevsmekanikk:** spenning (stress) $\sigma=F/A$ (Pa); tøyning (strain)
  $\varepsilon=\Delta L/L_0$ (dimensjonsløs); Youngs modul $E=\sigma/\varepsilon$
  (Pa); stivhet (stiffness) $k=\Delta F/\Delta x$ (N·m⁻¹, stigningstall i lineær
  sone); elastisk energi = areal under kraft–forlengelseskurven; senestivhet =
  kraft/deformasjon; muskelkraft = korrigert leddmoment / indre momentarm.
- **Anvendt biomekanikk:** grunnreaksjonskraft (ground reaction force, GRF);
  leddvinkel (joint angle), leddmoment (joint moment, indre motvirker ytre);
  invertert pendel (inverted pendulum) vs. masse-fjær-modell (spring-mass model).
- **Enheter oppgis alltid.** SI: N, J, W, kg, m, s, rad, N·m, Pa. Vinkler i grader
  ELLER radian (angi hvilken; konverter FØR $H=I\omega$/$v=r\omega$). Engelsk
  fagterminologi i parentes ved første forekomst.

**Forkunnskapsmerknad:** THP203 er mekanikkfundamentet i NIHs bachelor i trening,
helse og prestasjon og forutsetter den anatomiske oppbygningen fra **THP101
Funksjonell anatomi** (momentarmer, leddakser, muskelvirkeretning, bevegelsesplan).
Boka **lenker** dit for anatomien og gjentar den ALDRI utover det som trengs for å
sette opp en frilegemebetraktning. Kandidater med svak generell fysikkbakgrunn kan
hentes til en generell mekanikkressurs (kraft/moment/energi) — men Del 1 gir den
nødvendige minimumsbroen i boka selv.

**Studiepoeng-merknad:** Kilder oppgir inkonsistent 10 sp vs. 15 ECTS *(verifiser
mot gjeldende emnebeskrivelse)*. Poengvekten i selve eksamen (100 poeng fordelt
70/20/10) er uansett stabil og bekreftet på alle fem sittinger.

---

## 2. Makrostruktur

Rekkefølgen speiler eksamens tredeling og faglig avhengighet (DNA-regelen);
frekvensen og poengvekten styrer *omfanget*: fysikkseksjonen (70 p) får desidert
mest plass — full kapittelkjede + drillkapittel for statikk — mens vevsmekanikk
(20 p) og anvendt biomekanikk (10 p) får kompaktere, faktatette dekninger.

| Del | Tittel | Kap. | Begrunnelse (vekt/frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart — tre seksjoner, tre svarlogikker | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer 70/20/10-strukturen, sjanger-katalogen A–I, sensorreglene og formelsamling-strategien. |
| 1 | Forkunnskaper — kraft, moment og vektor | 2 | Ikke egen eksamensoppgave, men *forutsetning* for hele Seksjon 1: kraft/tyngde/enheter og dreiemoment/momentarm/vektordekomponering. «Bør kjenne» — kompakt bro fra THP101/generell mekanikk. |
| 2 | **Seksjon 1 — Fysikk (70 p)** | 9 | Hele slaget. Åtte formelfamilier bærer 70 % av eksamen → 8 teorikapitler (statikk får to + drill, de andre ett hver) + 1 drillkapittel for statikk. |
| 3 | **Seksjon 2 — Vevsmekanikk (20 p)** | 4 | Mest forutsigbare seksjon; ~7 faste spørsmål roterer. Materialdefinisjoner, bein, muskel/sene + målemetoder. Faktatung → høy flashcard-tetthet. |
| 4 | **Seksjon 3 — Anvendt biomekanikk (10 p)** | 3 | To sikre temaer (faseinndeling, pendel/fjær) + graftolkning. Kompakt, drøfting + figurlesing. |
| 5 | Eksamenstrening | 5 | 2 sjangerverksteder (Seksjon 1-kjede + Seksjon 2/3-kortsvar) + 3 komplette øvingseksamener (3 t, 70/20/10) med A-løsningsforslag. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart — tre seksjoner, tre svarlogikker |
| 1 | Forkunnskaper — kraft, moment og vektor |
| 2 | Seksjon 1 — Fysikk (70 poeng) |
| 3 | Seksjon 2 — Vevsmekanikk (20 poeng) |
| 4 | Seksjon 3 — Anvendt biomekanikk (10 poeng) |
| 5 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **24 kapitler** — innenfor DNA-rammen (20–35). Vekttyngden er ekstrem (70/20/10),
   så Del 2 (fysikk) alene har 9 av 24 kapitler.
2. **Drillkapitlet (2.9) ligger inne i fysikkdelen** i stedet for i siste del —
   statikk-/frilegemeoppgaven er den enkeltviktigste ferdigheten (5/5 gjenganger,
   18–22 p) og må drilles umiddelbart etter statikk-teorien (2.1–2.2). Del 5 beholder
   sjangerverkstedene og øvingseksamenene.
3. **Del 0 (eksamenskart) og Del 5 (eksamenstrening) har ingen egne temaprøver.**
   Del 1 er en ren repetisjonsdel (forutsetning, ikke egen eksamenssjanger) og får
   **2** prøver i stedet for 4 — dokumentert i §4. Del 2, 3 og 4 (de tre reelle
   eksamensseksjonene) får **4** prøver hver. Sum: 14 temaprøver.
4. **Tre øvingseksamener** (over DNA-minimum 2) — fordi eksamensformen er ekstremt
   stabil og prediktiv, gir tre nyskrevne fulle sett (hver 3 t, 70/20/10) høy
   treffsikkerhet på tvers av idrettskontekstene.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–I)** refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**Seksjon 1:** A statikk-/frilegemeoppgave (tyngst) · B enkel formel-innsetting ·
C flertrinns kinematikk · D energiregnskap.
**Seksjon 2:** E definisjonsspørsmål · F oppramsings-/forklaringsspørsmål (momentliste)
· G prosedyrespørsmål (målemetode).
**Seksjon 3:** H kort drøfting med begrunnelse · I graf-/figurtolkning.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (alle symboler og
formler i delkapitlet, per delkapittel — ikke arvet), `text` **Motivasjon**,
`definition`/`theorem` i emnets notasjon **med formelsamling-markering**, `text`
**Utledning med intuisjon** (kun for det som skal kunne *utledes/settes opp*), 2–4
`example` (siste på eksamensnivå, løst som A-besvarelse med full utregning, enhet og
retning), `warning` **Typiske feil**, 6–12 `exercise` (stigende, `solution` +
`hints`), `collapsible` **Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart — tre seksjoner, tre svarlogikker

#### Kapittel 0.1: Slik testes THP203 — 70/20/10 og de tre svarlogikkene

- **id:** `nih-thp203-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, den tredelte strukturen (Fysikk 70 p / Vevsmekanikk 20 p / Anvendt biomekanikk 10 p), temafrekvensene, sjanger-katalogen A–I, de fem sensorreglene og formelsamling-strategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på fem sittinger 2023–26. Skal gjengi: (i) **formen** (individuell stedbunden salseksamen 3 t, 10:00–13:00, godkjent kalkulator + utdelt formelsamling, WISEflow fra 2024–25, engelsk oppgavetekst, svar på norsk/engelsk, KI utelukket); (ii) den **faste tredelingen** med bunnfast vekt Seksjon 1 = 70 p (7 oppgaver, flere deloppgaver a/b/c, 5–18 p hver, statikkoppgaven alene 18–22 p), Seksjon 2 = 20 p (5–8 korte spørsmål à 2–3 p), Seksjon 3 = 10 p (3–6 korte spørsmål à 1–4 p); (iii) **temafrekvens-tabellen** (statisk likevekt 5/5, kinetisk energi 5/5, kollisjon/bevegelsesmengde 4/5, skrått kast 4/5, rotasjon $H=I\omega$ 4/5, arbeid/effekt/potensiell energi 4/5, friksjon i skråplan 3/5, $v=r\omega$/sentripetal 3/5, impuls 3/5, vekt i N nesten alltid; vevsmekanikk: materialdefinisjoner 5/5, senestivhetsmåling 5/5, quadriceps-kraft 5/5, spenning–tøyningskurve 4/5, 8 beinfaktorer 4/5, belastningstyper 3/5, sikkerhetsfaktor 3/5, bruddtyper 3/5; anvendt: faseinndeling 5/5, pendel/fjær 5/5, graftolkning leddvinkel/-moment høy, GRF-impuls 2/5); (iv) **de tre svarlogikkene** (regning m/full utregning → definisjoner/momentlister → drøfting/graftolkning) og hvorfor de krever hver sin treningsløype; (v) **kontekst-resirkuleringen** (samme fysikk, ny idrett/nye tall hvert år).
- **Innholdskontrakt:** Presenter **sjanger-katalogen A–I** som studentens sjekkliste med typisk plassering: A/B/C/D i Seksjon 1, E/F/G i Seksjon 2, H/I i Seksjon 3. Presenter **formelsamling-prinsippet** (fra §1) med den konkrete lista over hva som *står i formelsamlingen* (bruk oppslaget) vs. *må settes opp aktivt* (frilegeme, dekomponering, fortegn, gradkonvertering, tolkning) — gjentas som markør i hvert senere kapittel. **De fem sensorreglene** (fra §1): vis utregning; enhet i sluttsvar; retning der bedt om; ikke rund av for tidlig ($g=9{,}81$); follow-through. **Nivåskillene** (analysen §4): A ≈ feilfri metode m/enheter+retninger, presise definisjoner og fullstendige momentlister, riktig fysikalsk graftolkning; C ≈ riktig metode men enhets-/retningsfradrag eller regnefeil, delvise momentlister; E/bestått ≈ kjenner grunnformlene, setter opp de enkleste oppgavene, gjengir de mest sentrale definisjonene. **Prognose for neste sett** (analysen §7): én tung statikkoppgave (18–22 p), 2–3 energi-/bevegelsesmengde-/kastoppgaver, én rotasjons- og én friksjonsoppgave i Seksjon 1; de faste ~7 vevsspørsmålene i Seksjon 2; fasedeling + pendel/fjær + graftolkning i Seksjon 3; ny idrett, nye tall, identisk fysikk.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 3 timer og 70/20/10 poeng — sett opp et tidsbudsjett» og «avgjør for hvert av disse uttrykkene om det står i formelsamlingen (oppslag) eller må settes opp aktivt (frilegeme/dekomponering)».
- **Typiske feil:** Tidsfella — bruke uforholdsmessig mye tid på 10 p-seksjonen og miste fysikk-poeng; å pugge formelsamlingen i stedet for å trene *oppslag + oppsett*; å undervurdere at halvparten av vevs-poengene ligger i den korte *forklaringen*, ikke i selve oppramsingen.
- **Quiz: 22 · Flashcards: 24** (form, 70/20/10, temafrekvenser, sjanger-katalog A–I, sensorreglene, formelsamling-innhold, norsk/engelsk begrepspar)

---

### Del 1 — Forkunnskaper — kraft, moment og vektor  *(prioritet: KJENNE)*

#### Kapittel 1.1: Kraft, tyngde, enheter og SI-regning

- **id:** `nih-thp203-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fysikkens grunnstørrelser og enhetsregning: kraft $F=ma$, tyngde $F=mg$ med $g=9{,}81$, SI-enheter, gyldige siffer/avrunding og «antall kroppsvekter»-uttrykket — grunnlaget alle Seksjon 1-oppgavene hviler på.
- **Eksamensbelegg:** Ikke egen oppgave, men **forutsetning** for hvert eneste fysikkspørsmål og direkte kilde til «gratispoeng»-delspørsmålet «finn vekten i newton» (nesten alltid, sjanger B). Enhets- og avrundingsdisiplin er selve grunnlaget for sensorregel 2 og 4. Prioritet: **kjenne** (fundament — kompakt, men bærer enhetspoeng i hele boka).
- **Innholdskontrakt:** Alt til *bruk*. **Newtons 2. lov** $F=ma$; **tyngde** $F=mg$ med $g=9{,}81\ \mathrm{m\,s^{-2}}$ (aldri 10); **SI-enheter** (N, kg, m, s, J, W) og enhetsanalyse som feilkontroll; **gyldige siffer/avrunding** (≥3 desimaler underveis, 2 i sluttsvar); «**antall kroppsvekter**» som normalisert kraftmål; masse vs. vekt (kg vs. N). **Formelsamling-markering:** $F=mg$ *står i formelsamlingen*; enhetsdisiplinen og avrundingsregelen *må sitte som vane*.
- **Oppgavesjangre:** Støtte til B. Mønstereksempel: «En utøver har masse 74 kg. Finn tyngden i newton, og uttrykk en landingskraft på 2 200 N som antall kroppsvekter.»
- **Typiske feil:** Bruke $g=10$ i stedet for 9,81; forveksle masse (kg) og vekt (N); glemme enheten i sluttsvaret; runde av for tidlig.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 1.2: Dreiemoment, momentarm og vektordekomponering

- **id:** `nih-thp203-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-1-1 · **kapitteltype:** teori
- **description:** Momentbegrepet ($\tau=F\,d_\perp$), momentarm om en leddakse, fortegnskonvensjon, og dekomponering av en skråstilt kraft i vinkelrett og parallell komponent — det matematiske maskineriet bak statikkoppgaven og skrått kast.
- **Eksamensbelegg:** Ikke egen oppgave, men **forutsetning** for sjanger A (statikk, 5/5) og C (skrått kast, 4/5). Den vanligste feilen i hele emnet — feil momentarm/fortegn — forebygges her. Krever THP101s anatomiske momentarmer/leddakser. Prioritet: **kjenne** (fundament, men bærende).
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP. **Dreiemoment** $\tau=F\cdot d_\perp$ (kraft × vinkelrett momentarm); **momentarm** om en leddakse (fra THP101 — lenk dit for anatomien); **fortegnskonvensjon** (f.eks. mot klokka positiv) og hvorfor den må være konsekvent om samme akse; **vektordekomponering** av en kraft i vinkel $\theta$: vinkelrett komponent $F\sin\theta$ (eller $F\cos\theta$ etter geometri) og parallell komponent; sammenhengen mellom en muskelkrafts *linje* og dens *vinkelrette komponent* om leddaksen. Innfør **frilegemediagrammet** som verktøy (én kropp, alle ytre krefter med angrepspunkt og retning). **Formelsamling-markering:** $\tau=F\,d_\perp$ og de trigonometriske komponentene *står i formelsamlingen*; oppsettet av momentbalanse med konsekvent fortegn og korrekt vinkelrett komponent *må kunnes*.
- **Forkunnskapslenke:** momentarmer, leddakser og muskelvirkeretning hentes fra **THP101 Funksjonell anatomi** — lenk dit (`/nih-thp101/...` når kapitlet finnes) og gjenta ikke anatomien.
- **Oppgavesjangre:** Støtte til A og C. Mønstereksempel: «En muskel trekker med kraft $F$ i vinkel $\theta$ til underarmen, som roterer om albueaksen. Tegn frilegemediagram og skriv momentet muskelen gir om aksen.»
- **Typiske feil:** Bruke hele kraften i stedet for den vinkelrette komponenten i momentet; inkonsekvent fortegn (momenter tatt om ulike akser); forveksle $\sin$ og $\cos$ i dekomponeringen; utelate en ytre kraft i frilegemediagrammet.
- **Quiz: 26 · Flashcards: 28**

---

### Del 2 — Seksjon 1: Fysikk (70 poeng)  *(prioritet: PERFEKT — hele slaget)*

#### Kapittel 2.1: Statisk likevekt I — momentbalanse og muskelkraft

- **id:** `nih-thp203-2-1` · **number:** 2.1 · **estimatedMinutes:** 70 · **prerequisites:** nih-thp203-1-2 · **kapitteltype:** teori
- **description:** Statikkoppgavens første halvdel: sett opp $\Sigma\tau=0$ om leddaksen og løs for muskelkraften, med korrekt vinkelrett komponent og momentarm — den enkeltviktigste ferdigheten i hele emnet.
- **Eksamensbelegg:** Statisk likevekt er **5/5** og ALLTID den tyngste oppgaven (18–22 p) — deltoid (skulder), albue eller kne (sjanger A). Muskelkraften finnes *først*, via momentbalansen. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Statisk likevekt** $\Sigma\tau=0$ om leddaksen; **frilegemediagram** av segmentet (muskelkraft i vinkel, segmentvekt(er) i tyngdepunkt, ytre last, leddreaksjon i aksen); ta alle momenter om **leddaksen** (reaksjonskraften faller da bort) med **konsekvent fortegn**; muskelkraftens **vinkelrette komponent** ($F\sin\theta$ eller $F\cos\theta$) med sin (lille) momentarm; løs for muskelkraften. Deltoid-/albue-/kne-geometrien beskrives tallmessig slik fasit gjør (momentarmer oppgitt). **Formelsamling-markering:** $\Sigma\tau=0$ og $\tau=F\,d_\perp$ *står i formelsamlingen*; frilegemeoppsettet, aksevalget og fortegnskonvensjonen *må kunnes*.
- **Oppgavesjangre:** A (momentdelen). Mønstereksempel: «Deltoid trekker i 15° til humerus, som holder en manual i utstrakt arm. Ta moment om skulderaksen og finn deltoidkraften. Vis utregning og oppgi enhet.»
- **Typiske feil (analysen §5):** Feil momentarm eller fortegn (den vanligste feilen i emnet); bruke hele muskelkraften i stedet for den vinkelrette komponenten; ta moment om feil akse (så reaksjonskraften ikke faller bort); glemme et segmentvekt-moment.
- **Quiz: 28 · Flashcards: 26**

#### Kapittel 2.2: Statisk likevekt II — leddreaksjonskraft med retning

- **id:** `nih-thp203-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** nih-thp203-2-1 · **kapitteltype:** teori
- **description:** Statikkoppgavens andre halvdel: med muskelkraften kjent, bruk $\Sigma F_x=0$ og $\Sigma F_y=0$ til å finne leddets reaksjonskraft i to retninger, og oppgi størrelse **og retning**.
- **Eksamensbelegg:** Andre halvdel av 5/5-statikkoppgaven (sjanger A). Retningsangivelse er eksplisitt sensorkrav (regel 3); et korrekt frilegemediagram kan berge retningspoenget. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Kraftbalanse** $\Sigma F_x=0,\ \Sigma F_y=0$ (etter at muskelkraften er løst i 2.1); dekomponer alle krefter (muskelkraft, segmentvekter, ytre last) i x og y; løs for leddreaksjonens komponenter $R_x,R_y$; **resultant** $R=\sqrt{R_x^2+R_y^2}$ og **retning** (vinkel eller opp/ned + høyre/venstre). Understrek at reaksjonskraften finnes med $\Sigma F=0$, **ikke** $\Sigma\tau=0$, og at muskelkraften må være løst først. **Formelsamling-markering:** $\Sigma F=0$ og resultant/retning-trigonometrien *står i formelsamlingen*; dekomponeringen og retningsangivelsen *må kunnes*.
- **Oppgavesjangre:** A (kraftdelen). Mønstereksempel: «Med deltoidkraften fra 2.1: finn skulderleddets reaksjonskraft i horisontal og vertikal retning, og oppgi resultantens størrelse og retning.»
- **Typiske feil (analysen §5):** Blande momentbalanse og kraftbalanse (reaksjonskraft fra $\Sigma\tau=0$); utelate retningen (−1 p); glemme et kraftbidrag i dekomponeringen; feil fortegn på en komponent.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Kinetisk energi og potensiell energi

- **id:** `nih-thp203-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-1-1 · **kapitteltype:** teori
- **description:** Regn kinetisk energi $E_k=\tfrac12 mv^2$ og potensiell energi $E_p=mgh$, og bruk energibevaring til å finne fart eller høyde — ofte kombinert med kollisjon eller kast.
- **Eksamensbelegg:** Kinetisk energi er **5/5** — en av de fire garantistene i fysikkdelen (sjanger B/D). Ofte koblet med $E_p$ eller kollisjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Kinetisk energi** $E_k=\tfrac12 mv^2$; **potensiell energi** $E_p=mgh$; **energibevaring** $E_k+E_p=\text{konst.}$ (uten tap) → løs for $v$ eller $h$; enhet joule; obs kvadratet på $v$. **Formelsamling-markering:** $E_k$, $E_p$ *står i formelsamlingen*; oppsettet av energibalansen og valget av referansenivå for $h$ *må kunnes*.
- **Oppgavesjangre:** B/D. Mønstereksempel: «En turner (58 kg) forlater trampolinen med 6,2 m/s oppover. Finn kinetisk energi ved avsprang og maks høyde over utgangspunktet (energibevaring).»
- **Typiske feil:** Glemme $\tfrac12$ eller kvadrere ikke $v$; feil referansenivå for $h$; blande $E_k$ og arbeid; enhet mangler.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.4: Bevegelsesmengde og kollisjon (uelastisk)

- **id:** `nih-thp203-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-1-1 · **kapitteltype:** teori
- **description:** Bevegelsesmengde $p=mv$ og bevaring av samlet bevegelsesmengde i en (uelastisk) kollisjon — finn samlet hastighet etter sammenstøt eller en ukjent masse.
- **Eksamensbelegg:** Kollisjon/bevegelsesmengde er **4/5** — en av de fire garantistene (sjanger B/D). To utøvere kolliderer; finn felles fart eller ukjent masse. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Bevegelsesmengde** $p=mv$ (vektor — fortegn/retning); **bevaring** $\Sigma p_\text{før}=\Sigma p_\text{etter}$; **fullstendig uelastisk** støt (partene fortsetter sammen) → $m_1v_1+m_2v_2=(m_1+m_2)v'$; fortegn for motsatt rettede hastigheter. Kort om skillet elastisk/uelastisk (kinetisk energi bevart bare i elastisk). **Formelsamling-markering:** $p=mv$ og bevaringsloven *står i formelsamlingen*; fortegnsoppsettet og valg av positiv retning *må kunnes*.
- **Oppgavesjangre:** B/D. Mønstereksempel: «To håndballspillere (82 kg mot høyre i 4,1 m/s; 68 kg mot venstre i 3,3 m/s) kolliderer og henger sammen. Finn felles fart og retning etterpå.»
- **Typiske feil:** Ignorere fortegn/retning på motsatt rettede hastigheter; bruke energibevaring i en uelastisk støt; blande masse inn/ut av parentesen; enhet mangler.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.5: Skrått kast og prosjektilbevegelse

- **id:** `nih-thp203-2-5` · **number:** 2.5 · **estimatedMinutes:** 65 · **prerequisites:** nih-thp203-1-2 · **kapitteltype:** teori
- **description:** Dekomponer en utkasthastighet i horisontal og vertikal, og bruk kinematikkligningene til å finne svevetid, kastelengde, maks høyde eller utkastvinkel.
- **Eksamensbelegg:** Skrått kast er **4/5** — en av de fire garantistene (sjanger C). Sleggekast, håndballskudd, hopp. Krever dekomponering. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Dekomponering** av utkasthastighet $u$ i $u_x=u\cos\theta$, $u_y=u\sin\theta$; **kinematikk** $v=u+at$, $s=ut+\tfrac12at^2$, $v^2=u^2+2as$ (vertikalt med $a=-g$; horisontalt uten akselerasjon); **svevetid** (fra $u_y$ og $g$), **kastelengde** ($u_x\cdot t$), **maks høyde** ($u_y^2/2g$), **utkastvinkel** ($\tan\theta=u_y/u_x$). Behandle horisontal og vertikal bevegelse **uavhengig**. **Formelsamling-markering:** kinematikkligningene og $\tan\theta=u_y/u_x$ *står i formelsamlingen*; dekomponeringen og valg av rett ligning for det etterspurte *må kunnes*.
- **Oppgavesjangre:** C. Mønstereksempel: «En slegge slippes 1,8 m over bakken med 27 m/s i 42° over horisontalen. Finn svevetid og horisontal kastelengde. Vis dekomponeringen.»
- **Typiske feil (analysen §5):** Ikke dekomponere — bruke samlet hastighet i vertikalligningene; glemme starthøyden i svevetiden; forveksle $\sin$ og $\cos$; bruke $g=10$.
- **Quiz: 28 · Flashcards: 26**

#### Kapittel 2.6: Rotasjon — spinn og treghetsmoment ($H=I\omega$)

- **id:** `nih-thp203-2-6` · **number:** 2.6 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-1-1 · **kapitteltype:** teori
- **description:** Bevaring av spinn $H=I\omega$ når en utøver endrer kroppsstilling (endret treghetsmoment $I$ → endret vinkelhastighet $\omega$), med korrekt grad→radian-konvertering.
- **Eksamensbelegg:** Rotasjon er **4/5** (sjanger B) — trampoline/stuper/turner endrer stilling. Nivå 2-ferdighet som skiller god fra middels. Prioritet: **kunne** (men høyfrekvent).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Spinn (impulsmoment)** $H=I\omega$; **treghetsmoment** $I$ (kg·m²) og at det avhenger av massefordeling om aksen; **bevaring av spinn** i luft (ytre moment ≈ 0) → $I_1\omega_1=I_2\omega_2$ (samlet stilling → lav $I$, høy $\omega$); **grad→radian** ($\omega$ i rad·s⁻¹ — konverter FØR innsetting); lineær–vinkel-sammenheng $v=r\omega$ nevnt som bro til 2.7. **Formelsamling-markering:** $H=I\omega$, $v=r\omega$ *står i formelsamlingen*; bevaringsresonnementet og gradkonverteringen *må kunnes*.
- **Oppgavesjangre:** B. Mønstereksempel: «En stuper roterer med $\omega_1$ i strak stilling ($I_1$), trekker seg sammen til $I_2=0{,}45I_1$. Finn ny vinkelhastighet og antall omdreininger på 1,1 s svevetid.»
- **Typiske feil (analysen §5):** Forveksle grader og radianer (glemme $\pi/180$) før $H=I\omega$ eller $v=r\omega$; tro $\omega$ er konstant når $I$ endres; blande $H$ (spinn) og $I$ (treghetsmoment).
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 2.7: Arbeid, effekt og impuls–bevegelsesmengde

- **id:** `nih-thp203-2-7` · **number:** 2.7 · **estimatedMinutes:** 60 · **prerequisites:** nih-thp203-2-3 · **kapitteltype:** teori
- **description:** Arbeid $W=Fd$, effekt $P=W/t=Fv$ og impuls–bevegelsesmengde-teoremet $Ft=\Delta p$ — regn muskel- og gravitasjonsarbeid separat, og finn utgangshastighet fra en kraftplattform.
- **Eksamensbelegg:** Arbeid/effekt/potensiell energi **4/5**, impuls **3/5** (sjanger B/D). Løft av stang (arbeid av muskel vs. gravitasjon), motbevegelseshopp/squat jump (impuls fra kraftplattform). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Arbeid** $W=Fd$ (kraft langs vei); regn arbeid utført **av muskel** og **av gravitasjon** separat; **effekt** $P=W/t=Fv$; **impuls–bevegelsesmengde** $Ft=\Delta p=m(v_f-v_i)$ — finn impuls som areal under kraft–tid-kurven fra en kraftplattform, eller utgangshastighet fra impuls. **Formelsamling-markering:** $W=Fd$, $P=W/t=Fv$, $Ft=\Delta p$ *står i formelsamlingen*; skillet muskel-/gravitasjonsarbeid og impuls-som-areal *må kunnes*.
- **Oppgavesjangre:** B/D. Mønstereksempel: «En løfter hever en 60 kg stang 0,55 m på 0,8 s. Finn arbeidet mot tyngden og gjennomsnittseffekten. En kraftplattform gir netto impuls 210 N·s ved avsprang — finn utgangshastigheten (kroppsmasse 71 kg).»
- **Typiske feil:** Blande arbeid og effekt (glemme tiden); glemme å skille muskel- vs. gravitasjonsarbeid; feil fortegn/nettokraft i impulsen; enhet (W vs. J) mangler.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.8: Friksjon i skråplan og sentripetalbevegelse

- **id:** `nih-thp203-2-8` · **number:** 2.8 · **estimatedMinutes:** 60 · **prerequisites:** nih-thp203-1-2 · **kapitteltype:** teori
- **description:** Friksjon på skråplan ($F_f=\mu R$, $R=mg\cos\theta$) for ski/snowboard, og lineær–vinkelhastighet + sentripetalakselerasjon ($v=r\omega$, $a_z=v^2/r$) for den «lange armen som roterer» (kast/slag).
- **Eksamensbelegg:** Friksjon i skråplan **3/5** (slalåm/snowboard), $v=r\omega$/sentripetal **3/5** (tennisserve, golfslag, sleggekast) — sjanger B. Nivå 2. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Normalkraft på skråplan** $R=mg\cos\theta$; **friksjonskraft** $F_f=\mu R=\mu mg\cos\theta$; **tyngdekomponent langs planet** $mg\sin\theta$; nettokraft/akselerasjon nedover planet; **retning** på friksjon (motsatt bevegelse — sensorkrav regel 3). **Lineær–vinkelhastighet** $v=r\omega$ (endehastighet på lang arm), **sentripetalakselerasjon** $a_z=v^2/r$. **Formelsamling-markering:** $F_f=\mu R$, $R=mg\cos\theta$, $v=r\omega$, $a_z=v^2/r$ *står i formelsamlingen*; dekomponeringen på skråplanet og retningsangivelsen *må kunnes*.
- **Oppgavesjangre:** B. Mønstereksempel: «En snowboarder (74 kg) i en 18°-bakke, $\mu=0{,}11$. Finn friksjonskraften (med retning) og akselerasjonen ned bakken. En sleggehodefart følger av $v=r\omega$ med $r=1{,}9$ m og $\omega=11$ rad/s — finn $v$ og sentripetalakselerasjonen.»
- **Typiske feil (analysen §5):** Bruke $R=mg$ i stedet for $mg\cos\theta$ på skråplan; utelate friksjonens retning; forveksle $\sin$/$\cos$ på komponentene; glemme gradkonvertering i $v=r\omega$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.9: Drill — statikk-/frilegemeoppgaven fra ende til annen

- **id:** `nih-thp203-2-9` · **number:** 2.9 · **estimatedMinutes:** 90 · **prerequisites:** nih-thp203-2-2 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele statikkoppgaven (18–22 p): frilegemediagram → momentbalanse → muskelkraft → kraftbalanse → leddreaksjon med retning, i A-besvarelsesform med sensor-margnotater — den enkeltviktigste ferdigheten i emnet.
- **Eksamensbelegg:** Dekker sjanger A (5/5) fullt ut — selve den tyngste og sikreste oppgaven i hvert eneste sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) tegn **frilegemediagram** (segment, muskelkraft i vinkel, segmentvekter, ytre last, leddreaksjon); 2) **velg leddaksen** og konsekvent fortegn; 3) $\Sigma\tau=0$ om aksen → løs **muskelkraften** (vinkelrett komponent × momentarm); 4) $\Sigma F_x=0,\ \Sigma F_y=0$ → **leddreaksjon** $R_x,R_y$; 5) resultant + **retning**; 6) enhets- og avrundingskontroll. **Gjennomregnet eksamenscase** med margnotater om hva som gir uttelling ved hvert steg («muskelkraften først», «retning her», «vinkelrett komponent», «behold 3 desimaler»). 10–15 varianter som roterer leddet (skulder/deltoid, albue, kne) og konteksten, alle på eksamensnivå — inkludert follow-through-scenarioet (vis at riktig metode etter en tallfeil fortsatt gir de fleste poengene).
- **Oppgavesjangre:** A. Mønstereksempel (kjedet à la reelle sett): «(a) Tegn frilegemediagram for underarmen som holder en manual, biceps i 75°. (b) Finn bicepskraften ved momentbalanse om albuen. (c) Finn albueleddets reaksjonskraft med størrelse og retning. (d) Vis at metoden gir poeng selv om du hadde brukt feil momentarm i (b).»
- **Typiske feil:** Hele §5-repertoaret for statikk samlet: feil momentarm/fortegn, muskelkraft ikke løst først, reaksjonskraft fra $\Sigma\tau=0$, glemt retning, glemt enhet, for tidlig avrunding.
- **Quiz: 22 · Flashcards: 18**

---

### Del 3 — Seksjon 2: Vevsmekanikk (20 poeng)  *(prioritet: PERFEKT for kjernedefinisjonene / KUNNE for resten)*

#### Kapittel 3.1: Materialbegrepene — stress, strain, Youngs modul og stivhet

- **id:** `nih-thp203-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De sentrale materialdefinisjonene som er praktisk talt garantert hvert år: spenning (stress), tøyning (strain), Youngs modul og stivhet — kort, presist og feilfritt gjengivbart.
- **Eksamensbelegg:** Materialdefinisjonene er **5/5** — garantert (sjanger E). Fasit belønner presis definisjon; bør kunne gjengis ordrett. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE ORDRETT. **Spenning (stress)** $\sigma=F/A$ = kraft per tverrsnittsareal (Pa); **tøyning (strain)** $\varepsilon=\Delta L/L_0$ = deformasjon relativt til opprinnelig lengde (dimensjonsløs); **Youngs modul** $E=\sigma/\varepsilon$ = stress/strain i lineær elastisk område — **normaliserer for dimensjon**, derav sammenlignbar på tvers av vev; **stivhet (stiffness)** = motstand mot deformasjon (stigningstall i kraft–forlengelseskurvens lineære sone); skillet stivhet (avhenger av geometri) vs. Youngs modul (materialegenskap). Norsk/engelsk begrepspar. **Formelsamling-markering:** $E=\sigma/\varepsilon$ *står i formelsamlingen*; de presise definisjonene og skillet stivhet/E *må sitte*.
- **Oppgavesjangre:** E. Mønstereksempel: «Definer Youngs modul og forklar hvorfor den, i motsetning til stivhet, gjør det mulig å sammenligne materialegenskaper på tvers av vev med ulik dimensjon.»
- **Typiske feil:** Forveksle stivhet (geometriavhengig) og Youngs modul (materialegenskap); glemme «i lineær elastisk område» i E-definisjonen; upresis eller manglende enhet.
- **Quiz: 26 · Flashcards: 36**

#### Kapittel 3.2: Spenning–tøyningskurven og elastisk energi

- **id:** `nih-thp203-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** nih-thp203-3-1 · **kapitteltype:** teori
- **description:** Les kraft–forlengelses-/spenning–tøyningskurven for viskoelastisk vev: tå-region, lineær elastisk region, plastisk region — og hvor Youngs modul og elastisk energi ligger i figuren.
- **Eksamensbelegg:** Spenning–tøyningskurven er **4/5** (sjanger E/F/I — kan komme som forklaring eller figurlesing). Prioritet: **kunne** (høyfrekvent).
- **Innholdskontrakt:** MÅ KUNNE. **Tre soner** i kurven: **tå-region** (crimp rettes ut, lav stivhet), **lineær elastisk region** (Youngs modul = **stigningstallet** her), **plastisk region** (varig deformasjon → brudd); **elastisk energi = areal under kurven** i elastisk sone; viskoelastisitet (rate-/tidsavhengig respons) kort. Beskriv figuren slik sensor forventer (akser: forlengelse/tøyning mot kraft/spenning; de tre sonene). **Formelsamling-markering:** ingen ny formel utover $E$; tolkningen (stigningstall = E, areal = energi) *må kunnes*.
- **Oppgavesjangre:** E/F/I. Mønstereksempel: «Skisser spenning–tøyningskurven for en sene, marker de tre sonene, og forklar hvor Youngs modul og lagret elastisk energi kan leses av.»
- **Typiske feil:** Forveksle hvilken sone Youngs modul leses i; tro elastisk energi = kraften (ikke arealet); glemme tå-regionen.
- **Quiz: 24 · Flashcards: 32**

#### Kapittel 3.3: Beinmekanikk — belastningstyper, 8 faktorer og bruddtyper

- **id:** `nih-thp203-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-3-1 · **kapitteltype:** teori
- **description:** Beinvevets mekanikk: de fem belastningstypene, de åtte faktorene som påvirker mekaniske egenskaper, sikkerhetsfaktor og bruddtyper — momentlister der halve poengsummen ligger i den korte forklaringen.
- **Eksamensbelegg:** 8 beinfaktorer **4/5**, belastningstyper **3/5**, sikkerhetsfaktor **3/5**, bruddtyper **3/5** (sjanger F). Momentliste: poeng per element **pluss** forklaring. Prioritet: **kunne** (men flashcard-tungt).
- **Innholdskontrakt:** MÅ KUNNE LISTE + KORT FORKLARE. **5 belastningstyper**: kompresjon, strekk, skjær, bøyning, torsjon (**kompresjon tåles best**); **8 faktorer** for beinets mekaniske egenskaper: materialsammensetning, belastningstype, beinlokalisasjon, belastningsretning, belastningsrate, kjønn, alder, strukturelle egenskaper; **sikkerhetsfaktor** = bruddstyrke (ultimate strength) / daglig belastning (lav → skaderisiko); **bruddtyper**: traumatisk vs. tretthets-/stressbrudd (påvirkes av frekvens, rate, retning); at **aktive muskler** kan endre spenningsfordelingen og redusere bruddrisiko (gluteus medius / trochanter major — redusert strekk, økt kompresjon som bein tåler bedre). **Formelsamling-markering:** ingen formel; sikkerhetsfaktor-forholdet *må kunnes*; listene *må kunne gjengis med kort forklaring per element*.
- **Oppgavesjangre:** F. Mønstereksempel: «Nevn og forklar kort fem faktorer som påvirker beinvevets mekaniske egenskaper, og forklar hvorfor bein tåler kompresjon bedre enn strekk.»
- **Typiske feil (analysen §5):** Ufullstendige momentlister — nevner elementene men glemmer den korte forklaringen der halve poengsummen ligger; blande belastningstyper og faktorer; feil definisjon av sikkerhetsfaktor.
- **Quiz: 26 · Flashcards: 42**

#### Kapittel 3.4: Målemetoder — senestivhet og quadriceps-kraft

- **id:** `nih-thp203-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** nih-thp203-3-1 · **kapitteltype:** teori
- **description:** De to garanterte prosedyrespørsmålene: mål senestivhet (patellarsene) med dynamometer + ultralyd, og estimer quadriceps-muskelkraft fra leddmoment, EMG-korreksjon og momentarm — inkludert regneformelen.
- **Eksamensbelegg:** Senestivhetsmåling **5/5** og quadriceps-kraftestimering **5/5** — garantert hvert år (sjanger G). Kandidaten skal gjengi målemetoden **og** regneformelen. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE GJENGI PROSEDYRE + FORMEL. **Senestivhet**: isometrisk kontraksjon på **dynamometer** → kraft; **ultralyd** → senens deformasjon; **stivhet = kraft/deformasjon** (stigningstall). **Quadriceps-kraft**: leddmoment = kraft × ytre momentarm; **korriger for samaktivering** (hamstrings-EMG legges til nettomomentet); **muskelkraft = korrigert moment / indre (quadriceps) momentarm**. Indre vs. ytre momentarm (bro til THP101/2.1). **Formelsamling-markering:** stivhet = kraft/deformasjon og muskelkraft = moment/momentarm *står i formelsamlingen*; prosedyrebeskrivelsen (hva måles med hva) og EMG-korreksjonen *må kunnes*.
- **Forkunnskapslenke:** indre/ytre momentarm og leddmoment bygger på kap. 2.1 og **THP101 Funksjonell anatomi** — lenk dit for anatomien.
- **Oppgavesjangre:** G. Mønstereksempel: «Beskriv hvordan patellarsenens stivhet måles med dynamometer og ultralyd. Forklar deretter hvordan quadriceps-muskelkraften estimeres fra leddmomentet, og hvorfor hamstrings-EMG må korrigeres for.»
- **Typiske feil:** Glemme EMG/samaktiverings-korreksjonen i quadriceps-kraften; forveksle indre og ytre momentarm; oppgi målemetoden uten regneformelen (eller omvendt).
- **Quiz: 24 · Flashcards: 34**

---

### Del 4 — Seksjon 3: Anvendt biomekanikk (10 poeng)  *(prioritet: PERFEKT for de to sikre / KUNNE for graftolkning)*

#### Kapittel 4.1: Faseinndeling av bevegelser

- **id:** `nih-thp203-4-1` · **number:** 4.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hvorfor bevegelser deles inn i faser, hvordan faseinndelingen gjøres (etter kinematikk/kinetikk/posisjon/hastighet), og de faste eksemplene: gang-/løpssyklus, sprint, hopp og kast.
- **Eksamensbelegg:** Faseinndeling er **5/5** — sikkert hvert år (sjanger H). Kort drøfting; poeng for riktig prinsipp + relevant eksempel. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE. **Hvorfor fase-inndele**: for å **beskrive, analysere, kommunisere og forstå** bevegelser; **hvordan**: skille etter kinematikk/kinetikk/posisjon/hastighet; **eksempler**: gang-/løpssyklus (heel strike / midtstøtte / toe-off), sprint (akselerasjon / toppfart), hopp (brems / akselerasjon), kast (ladning / akselerasjon / deselerasjon). Norsk/engelsk begrepspar. **Formelsamling-markering:** ingen formel; begrunnelsen og faste faseeksempler *må kunnes*.
- **Oppgavesjangre:** H. Mønstereksempel: «Forklar hvorfor idrettsbevegelser deles inn i faser, og angi fasene i et vertikalt hopp med en kort begrunnelse for hver.»
- **Typiske feil:** Gi bare eksempler uten begrunnelsen (hvorfor); ufullstendig fase-liste; blande fasene i ulike bevegelser.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.2: Invertert pendel vs. masse-fjær-modellen (gange vs. løp)

- **id:** `nih-thp203-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** nih-thp203-4-1 · **kapitteltype:** teori
- **description:** De to garanterte bevegelsesmodellene: gange som invertert pendel (~70 % energibevaring) og løp som masse-fjær (elastisk energilagring, flygefase) — forskjellen forklart energetisk.
- **Eksamensbelegg:** Pendel/fjær-modellene er **5/5** — sikkert hvert år (sjanger H). Kobler til energi-/arbeidsbegrepene fra Del 2. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE. **Invertert pendel (gange)**: potensiell og kinetisk energi svinger i **motfase** → energiveksling → ~**70 % energibevaring**, mindre mekanisk (og dermed fysiologisk) arbeid; **masse-fjær-modell (løp)**: energiene mer **i fase**, **flygefase**, lagring/frigjøring av **elastisk energi** i underekstremitetens sener (kobler til 3.2). Forklar hvorfor modellene skiller gange fra løp. **Formelsamling-markering:** ingen ny formel; energetisk resonnement (motfase vs. i fase, elastisk lagring) *må kunnes*.
- **Forkunnskapslenke:** energibegrepene ($E_k$, $E_p$, elastisk energi) fra kap. 2.3 og 3.2; det fysiologiske arbeidet bak modellene kan lenkes til **THP100 Humanfysiologi** når kapitlet finnes.
- **Oppgavesjangre:** H. Mønstereksempel: «Forklar forskjellen mellom den inverterte pendelmodellen for gange og masse-fjær-modellen for løp, med vekt på hvordan energien håndteres i hver.»
- **Typiske feil:** Bytte om modellene (pendel↔fjær); si «i fase» for gange (skal være motfase); glemme flygefasen/elastisk lagring for løp.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.3: Graftolkning — leddvinkel, leddmoment og grunnreaksjonskraft

- **id:** `nih-thp203-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** nih-thp203-4-1 · **kapitteltype:** teori
- **description:** Les grafer gjennom en gangesyklus: leddvinkel (posisjon vs. bevegelse), indre leddmoment (fortegn = retning, motvirker ytre) og horisontal grunnreaksjonskraft (areal = bremsende/akselererende) — med korrekt fysikalsk begrunnelse.
- **Eksamensbelegg:** Graftolkning leddvinkel/-moment **høy frekvens**, GRF-impuls **2/5**, GRF-definisjon **1/5** (sjanger I). Prinsippet (fortegn/stigningstall/areal) er identisk uansett ledd. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE TOLKE. **Leddvinkel**: verdi over 0-linja = flektert **posisjon**; positivt **stigningstall** = fleksjon pågår (bevegelse), negativt = ekstensjon — skill posisjon fra bevegelse; **indre leddmoment**: **fortegn definerer retning** (f.eks. dorsi- vs. plantarfleksjonsmoment i ankel), indre moment **motvirker ytre**; **horisontal GRF**: negativt **areal** = bremsende impuls, positivt = akselererende, like arealer → konstant fart; **GRF-definisjon**: kraften bakken utøver på kroppen (belastning, fremdrift, kraftabsorpsjon, skademekanisme). **Formelsamling-markering:** impuls = areal under kraft–tid (fra 2.7) *står i formelsamlingen*; tolkningsreglene (posisjon vs. stigningstall; fortegn = retning; areal = impuls) *må kunnes*.
- **Oppgavesjangre:** I. Mønstereksempel: «Grafen viser ankelleddvinkelen gjennom en gangesyklus. Angi hvor leddet er flektert, hvor fleksjon pågår, og hvordan du ser det i figuren.»
- **Typiske feil (analysen §5):** Forveksle **posisjon** (verdi over/under 0-linja) med **bevegelse** (stigningstallets fortegn); glemme at indre leddmoment motvirker ytre; feiltolke fortegnet på arealet i GRF.
- **Quiz: 24 · Flashcards: 28**

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Sjangerverksted — Seksjon 1 (fysikk fra ende til annen)

- **id:** `nih-thp203-5-1` · **number:** 5.1 · **estimatedMinutes:** 80 · **prerequisites:** nih-thp203-2-9 · **kapitteltype:** drill
- **description:** Sjangerverksted som kjeder hele fysikkseksjonen: statikk → energi → bevegelsesmengde → kast → rotasjon → friksjon, hver løst som A-besvarelse med full utregning, enhet, retning og follow-through-markering.
- **Eksamensbelegg:** Dekker sjangrene A–D samlet — de fire garantistene (statikk, energi, kollisjon, kast) + rotasjon/friksjon/arbeid, som utgjør ~70 av 100 poeng. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift per sjanger (kortform av 2.1–2.8), deretter **8–12 gjennomregnede eksamenscase** som roterer idrettskontekst (sleggekast, trampoline, dykking, håndball, slalåm, tennis), hver med **sensor-margnotater** (hvor enhet/retning/utregning/follow-through gir uttelling). Tren eksplisitt tidsbudsjett for Seksjon 1 (skal ta ~70 % av eksamenstiden). **Formelsamling-markering:** gjenta at standardformlene hentes fra formelsamlingen; oppsettet (frilegeme/dekomponering/regime) *må kunnes*.
- **Oppgavesjangre:** A+B+C+D. Mønstereksempel: en kjedet fler-idretts-oppgave som speiler et helt Seksjon 1-sett (7 oppgaver, 70 p).
- **Typiske feil:** Hele §5-repertoaret for fysikk samlet; tidsfella (henge i statikken og miste lettpoeng ellers).
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 5.2: Sjangerverksted — Seksjon 2 og 3 (kortsvar, prosedyre, graf)

- **id:** `nih-thp203-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** nih-thp203-3-4 · **kapitteltype:** drill
- **description:** Sjangerverksted for de momentbaserte seksjonene: definisjoner, momentlister med forklaring, målemetode-prosedyrer og graftolkning — trent slik momentlisterettelsen belønner.
- **Eksamensbelegg:** Dekker sjangrene E–I samlet (Seksjon 2 = 20 p, Seksjon 3 = 10 p). Poeng per nevnt/forklart element; retning/fortegn i graftolkning. Prioritet: **perfekt** (billige, høyfrekvente poeng).
- **Innholdskontrakt:** Løsningsoppskrift for momentliste-svar (list + forklar hvert element kort); mal for prosedyresvar (metode + formel); mal for graftolkning (posisjon vs. bevegelse; fortegn = retning; areal = impuls). **8–12 gjennomregnede/gjennomskrevne case** med sensor-margnotater (hvor forklaringen — ikke bare oppramsingen — gir poeng). **Formelsamling-markering:** $E=\sigma/\varepsilon$, stivhet = kraft/deformasjon, muskelkraft = moment/momentarm *står i formelsamlingen*; presise definisjoner og tolkningsregler *må sitte*.
- **Oppgavesjangre:** E+F+G+H+I. Mønstereksempel: et helt Seksjon 2+3-sett (de faste ~7 vevsspørsmålene + fasedeling/pendel-fjær/graftolkning).
- **Typiske feil:** Ufullstendige momentlister (glemt forklaring); posisjon-vs.-bevegelse-forvekslingen i graf; upresise definisjoner.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 5.3: Øvingseksamen 1 — klassisk stabil mal

- **id:** `nih-thp203-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** nih-thp203-5-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 3-timers sett med bunnfast vekt 70/20/10, modellert på den stabile malen: 7 fysikkoppgaver (m/tung statikk) + de faste vevsspørsmålene + fasedeling/pendel/graf. A-løsningsforslag med poengfordeling.
- **Eksamensbelegg:** Speiler en «typisk» sitting (analysen §2/§7): én statikkoppgave (18–22 p), energi/kollisjon/kast, én rotasjon, én friksjon; ~7 vevsspørsmål; fasedeling + pendel/fjær + graftolkning. Prioritet: hele nivå 1–2.
- **Innholdskontrakt:** Komplett sett med **Seksjon 1 (70 p, 7 oppgaver)**, **Seksjon 2 (20 p, ~7 spørsmål)**, **Seksjon 3 (10 p, 3–6 spørsmål)**. **A-løsningsforslag i eget `collapsible` per oppgave**, skrevet som sensor vil se det (full utregning, enhet, retning, symbolsk-før-tall der relevant), med `tip`-notat om delpoeng/vekting og follow-through. Nyskrevne idrettskontekster og tall (opphavsrett). **Formelsamling-markering:** oppgi hvilke formler som forutsettes hentet fra formelsamlingen.
- **Oppgavesjangre:** A–I, vektet 70/20/10. Mønster: klassisk mal (sleggekast + trampoline + håndballkollisjon-kontekst).
- **Typiske feil:** `tip`-notatene peker på de faste fradragene per oppgave (enhet, retning, tidlig avrunding, momentliste-forklaring).
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 5.4: Øvingseksamen 2 — rotasjons-/kast-tung mal

- **id:** `nih-thp203-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** nih-thp203-5-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 3-timers sett (70/20/10) med tyngdepunkt på rotasjon ($H=I\omega$) og skrått kast, samt friksjon i skråplan — for å drille nivå 2-ferdighetene under tidspress.
- **Eksamensbelegg:** Speiler en sitting der rotasjon/kast/friksjon veier tungt i Seksjon 1 (analysen §2), med de faste vevs- og anvendt-spørsmålene. Prioritet: hele nivå 1–2.
- **Innholdskontrakt:** Som 5.3, men med Seksjon 1 vektet mot rotasjon (stuper/turner), skrått kast (håndball/slegge) og friksjon (slalåm/snowboard), fortsatt med én statikkoppgave. A-løsningsforslag per oppgave med delpoeng og follow-through-notat. Nyskrevne tall/kontekster. **Formelsamling-markering:** som 5.3.
- **Oppgavesjangre:** A–I, vektet 70/20/10. Mønster: vinteridretts-/kastkontekst.
- **Typiske feil:** `tip`-notatene fremhever gradkonvertering (rotasjon), dekomponering (kast) og $mg\cos\theta$ (friksjon).
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 5.5: Øvingseksamen 3 — nyeste mal, blandet kontekst

- **id:** `nih-thp203-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** nih-thp203-5-4 · **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 3-timers sett (70/20/10) som speiler den nyeste malbaserte sensorveiledningen, inkludert den sammensatte resultantkraft-varianten (vekt − luftmotstand − friksjon) og full bredde i vevs-/anvendt-spørsmålene.
- **Eksamensbelegg:** Speiler 2025–26-malen (analysen §1/§7): statikk samlet i én stor oppgave, energi/bevegelsesmengde/kast, sammensatt resultantkraft i skråplan (nivå 3-variant), de faste vevsspørsmålene, fasedeling/pendel/graftolkning. Prioritet: nivå 1–3.
- **Innholdskontrakt:** Som 5.3, med bred idrettskontekst (amerikansk fotball, golf, squash, dykking) og den sammensatte resultantkraften $F_\text{res}=F_\text{vekt}-F_\text{luft}-F_\text{friksjon}$ som én oppgave. A-løsningsforslag per oppgave, delpoeng, follow-through. Nyskrevne tall/kontekster. **Formelsamling-markering:** som 5.3; merk at resultantkraft-varianten kombinerer flere formelsamlingsuttrykk.
- **Oppgavesjangre:** A–I + resultantkraft-variant, vektet 70/20/10.
- **Typiske feil:** `tip`-notatene dekker fortegn i resultantkraften og de faste fradragene ellers.
- **Quiz: 16 · Flashcards: 12**

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 2–4; 2 for repetisjonsdel Del 1 — 14 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang i minutter. **Avvik dokumentert:** Del 0 (eksamenskart) og
Del 5 (eksamenstrening) har ingen egne temaprøver; Del 1 er en ren repetisjonsdel
(forutsetning, ikke egen eksamenssjanger) og får **2** prøver i stedet for 4. Del 2
(Fysikk), Del 3 (Vevsmekanikk) og Del 4 (Anvendt biomekanikk) — de tre reelle
eksamensseksjonene — får **4** prøver hver. Prøve-id-ene følger mønsteret
`nih-thp203-<del>-prove` (chapterNumber `<del>.P`).

**Prøve-kvote Del 1 — Forkunnskaper (2 prøver):**
1. Prøve 1.A (20 min): Kraft, tyngde ($F=mg$, $g=9{,}81$), enheter og «antall kroppsvekter» (støtte-B).
2. Prøve 1.B (25 min): Dreiemoment, momentarm, fortegn og vektordekomponering + frilegemediagram (støtte-A/C).

**Prøve-kvote Del 2 — Seksjon 1: Fysikk (4 prøver):**
1. Prøve 2.A (40 min): Statikk-/frilegemeoppgaven — momentbalanse → muskelkraft → leddreaksjon m/retning (sjanger A).
2. Prøve 2.B (30 min): Kinetisk/potensiell energi + bevegelsesmengde/kollisjon (sjanger B/D).
3. Prøve 2.C (30 min): Skrått kast + rotasjon ($H=I\omega$) med gradkonvertering (sjanger B/C).
4. Prøve 2.D (45 min): Friksjon i skråplan + arbeid/effekt/impuls + full statikkoppgave, eksamensnivå (sjanger A+B+D).

**Prøve-kvote Del 3 — Seksjon 2: Vevsmekanikk (4 prøver):**
1. Prøve 3.A (20 min): Materialdefinisjoner — stress, strain, Youngs modul, stivhet (sjanger E).
2. Prøve 3.B (25 min): Spenning–tøyningskurven + beinmekanikk (belastningstyper, 8 faktorer) (sjanger E/F).
3. Prøve 3.C (25 min): Målemetoder — senestivhet + quadriceps-kraft m/EMG-korreksjon (sjanger G).
4. Prøve 3.D (30 min): Bredt vevs-sett — definisjoner + momentlister + prosedyre, eksamensnivå (sjanger E+F+G).

**Prøve-kvote Del 4 — Seksjon 3: Anvendt biomekanikk (4 prøver):**
1. Prøve 4.A (20 min): Faseinndeling — hvorfor + faste faseeksempler (sjanger H).
2. Prøve 4.B (20 min): Invertert pendel vs. masse-fjær-modellen (sjanger H).
3. Prøve 4.C (25 min): Graftolkning — leddvinkel, leddmoment, GRF (sjanger I).
4. Prøve 4.D (30 min): Bredt anvendt-sett — fase + modell + graftolkning, eksamensnivå (sjanger H+I).

### Øvingseksamener (3 komplette sett — se kap. 5.3–5.5)

| Sett | Mal den speiler | Miks (70/20/10) |
|---|---|---|
| Øvingseksamen 1 (kap. 5.3) | Klassisk stabil mal | S1: A(statikk)+B+C+D (sleggekast/trampoline/håndball). S2: E+F+G. S3: H+I |
| Øvingseksamen 2 (kap. 5.4) | Rotasjons-/kast-tung | S1: A+B(rotasjon)+C(kast)+friksjon (vinteridrett). S2: E+F+G. S3: H+I |
| Øvingseksamen 3 (kap. 5.5) | Nyeste malbaserte, blandet | S1: A(samlet)+B+D+resultantkraft (am. fotball/golf/squash/dykking). S2: E+F+G. S3: H+I |

Til sammen dekker de tre settene samtlige eksamenssjangre A–I flere ganger, med den
tunge statikkoppgaven (18–22 p) i alle tre og den sammensatte resultantkraft-
varianten (nivå 3) i sett 3.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 t salseksamen 10–13, kalkulator + utdelt
   formelsamling, engelsk oppgavetekst / svar på norsk eller engelsk, WISEflow), og
   den tredelte strukturen med bunnfast vekt 70/20/10 (fra kap. 0.1).
2. **De tre seksjonene og prioriteringskartet** — temafrekvens-tabellen omgjort til
   tre lesenivåer: **perfekt** (statikk Del 2.1–2.2+2.9, energi/kollisjon/kast
   2.3–2.5, materialdefinisjoner 3.1, senestivhet/quadriceps 3.4, faseinndeling 4.1,
   pendel/fjær 4.2), **kunne** (rotasjon 2.6, arbeid/effekt/impuls 2.7,
   friksjon/sentripetal 2.8, spenning–tøyningskurve 3.2, beinmekanikk 3.3,
   graftolkning 4.3), **kjenne** (forkunnskaper Del 1, sammensatt resultantkraft,
   GRF-definisjon, gluteus/trochanter-eksempelet).
3. **Formelsamling-strategien** — hva som *står i den utdelte formelsamlingen*
   (oppslag/bruk) vs. *må settes opp aktivt* (frilegeme, dekomponering, fortegn,
   gradkonvertering, tolkning), med den konkrete lista fra kap. 0.1.
4. **Sjangerguiden** — de 9 oppgavetypene A–I med løsningsoppskriftene fra
   drillkapitlet (2.9) og sjangerverkstedene (5.1, 5.2) i kortform.
5. **Sensorreglene** — vis utregning, enhet i sluttsvar, retning der bedt om, ikke
   rund av for tidlig ($g=9{,}81$), follow-through; karakterskillene A/C/E (fra
   analysen §4) — feilfri metode m/enheter+retning, fullstendige momentlister,
   riktig fysikalsk graftolkning.
6. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den (særlig: glemt enhet, glemt retning,
   tidlig avrunding, feil momentarm/fortegn, blande moment-/kraftbalanse, ikke
   dekomponere kast, grader/radianer, $g=10$, ufullstendige momentlister,
   posisjon-vs.-bevegelse i graf).
7. **Studieløp** — anbefalt progresjon: Del 0 → 1 → **fysikk-tyngdepunktet** Del 2
   (statikk først, drill 2.9), deretter Del 3 og 4, med prøver underveis; de tre
   øvingseksamenene de siste ukene under tidspress (180 min, vektstyrt tidsbudsjett
   70/20/10 der Seksjon 1 skal ha klart mest tid).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `nih-thp203` med alle 24
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen
   (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer 70/20/10-strukturen, sjanger-katalogen A–I,
   frekvenstallene, sensorreglene og formelsamling-prinsippet som resten refererer til.
3. **Del 1** (kap. 1.1–1.2) — forkunnskapsapparatet (kraft/enheter + moment/vektor),
   med lenke til THP101 for anatomien.
4. **Fysikkseksjonen (Del 2, 9 kap)**: statikk-kjeden 2.1→2.2→drill 2.9 først (den
   viktigste), deretter 2.3–2.8. Én agent for hele Del 2 (jf. batching-regelen).
5. **Vevsmekanikk (Del 3, 4 kap)** og **anvendt biomekanikk (Del 4, 3 kap)** — én
   agent hver, faktatette, høy flashcard-tetthet i Del 3.
6. **Del 5** (sjangerverksteder 5.1–5.2 + de tre øvingseksamenene 5.3–5.5 til slutt
   — de gjenbruker alt); temaprøvene (§4) legges i respektive delers `*-prove`-
   kapittel (`nih-thp203-<del>-prove`, chapterNumber `<del>.P`).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle uttrykk i `$...$`/`$$...$$`; `\\` i JSON; ingen unicode-brøker;
  konsistent notasjon ($F=mg$, $E_k=\tfrac12 mv^2$, $E_p=mgh$, $W=Fd$, $P=Fv$,
  $p=mv$, $Ft=\Delta p$, $\Sigma\tau=0$, $\Sigma F=0$, $\tau=F d_\perp$, $H=I\omega$,
  $v=r\omega$, $a_z=v^2/r$, $F_f=\mu R$, $\sigma=F/A$, $\varepsilon=\Delta L/L_0$,
  $E=\sigma/\varepsilon$).
- [ ] **Formelsamling-markering**: hvert kapittel skiller eksplisitt «står i
  formelsamlingen — tren oppslaget» fra «må settes opp/kunnes aktivt» (grep etter
  begge frasene).
- [ ] **Full utregning + enhet + retning**: hvert regneeksempel fører hele
  løsningsveien, oppgir enhet i sluttsvaret og retning der oppgaven ber om det
  (grep at statikk-/friksjonseksemplene har retningsangivelse).
- [ ] **$g=9{,}81$**: ingen eksempler bruker $g=10$ (grep).
- [ ] **Follow-through**: drillkapitlet 2.9 og sjangerverksted 5.1 viser eksplisitt
  at riktig metode etter en tallfeil fortsatt gir poeng.
- [ ] **Statikk-kjeden**: kap. 2.1 (momentbalanse→muskelkraft) og 2.2
  (kraftbalanse→leddreaksjon m/retning) i riktig rekkefølge; drill 2.9 kjeder hele.
- [ ] **Gradkonvertering**: rotasjons-/sentripetalkapitlene (2.6, 2.8) konverterer
  grader→radianer FØR $H=I\omega$/$v=r\omega$, med egen `warning`.
- [ ] **Dekomponering**: kast-kapitlet 2.5 behandler horisontal/vertikal uavhengig
  (egen `warning` mot å bruke samlet hastighet vertikalt).
- [ ] **Momentliste-forklaring**: vevs-kapitlene (3.3, 3.4) understreker at halve
  poengsummen ligger i den korte forklaringen, ikke ren oppramsing.
- [ ] **Graftolkning**: kap. 4.3 skiller posisjon (verdi vs. 0-linje) fra bevegelse
  (stigningstall), med egen `warning`; indre moment motvirker ytre.
- [ ] **Kryssbok-lenker**: THP101-lenker (anatomi/momentarmer) i kap. 1.2, 2.1, 3.4
  peker kun på kapitler som finnes; ellers beskrives forkunnskapen kort i teksten.
- [ ] **Norsk/engelsk begrepspar**: sentrale begreper gis engelsk term i parentes
  ved første forekomst (moment of inertia, angular momentum, stress/strain, GRF,
  inverted pendulum, spring-mass).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  Symbol-/formelliste-`collapsible`, Typiske feil-`warning`, 2–4 eksempler (siste på
  eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler (2.9, 5.1, 5.2) har løsningsoppskrift + sensor-kommentert case +
  8–15 oppgaver; øvingseksamener (5.3–5.5) har 70/20/10-sett + A-løsning per oppgave.
- [ ] **Quiz-sum ≥ 560 og flashcard-sum ≥ 586** per §3 (autoritativ total).
- [ ] **Prøver**: 4 per temadel 2–4 + 2 for Del 1 (14 stk) + 3 øvingseksamener som
  sammen dekker sjangrene A–I.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, idretter/utøvere og
  kontekst; ingen formuleringer fra reelle sett eller sensorveiledninger
  (skjelettets mønstereksempler er selv omskrivninger og varieres videre).
- [ ] **Studiepoeng**: 10 sp vs. 15 ECTS er merket *(verifiser)* der det nevnes.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

---

## 7. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

**Quiz totalt: 560 · Flashcards totalt: 586** (begge godt over gulvet ≥500).

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 — Eksamenskart | 0.1 | 22 | 24 |
| 1 — Forkunnskaper | 1.1–1.2 | 52 | 56 |
| 2 — Fysikk (70 p) | 2.1–2.9 | 234 | 216 |
| 3 — Vevsmekanikk (20 p) | 3.1–3.4 | 100 | 144 |
| 4 — Anvendt biomekanikk (10 p) | 4.1–4.3 | 68 | 80 |
| 5 — Eksamenstrening | 5.1–5.5 | 84 | 66 |
| **Sum** | **24 kap** | **560** | **586** |

**Prøvekvote:** 14 temaprøver (Del 1: 2 · Del 2: 4 · Del 3: 4 · Del 4: 4) +
3 komplette øvingseksamener (kap. 5.3–5.5). Prøve-id: `nih-thp203-<del>-prove`.

**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** THP203 er formel- og
metodetungt, og fysikkdelen (70 % av eksamen) bærer derfor tyngst quiz-vekt
(234 quiz i Del 2 — mengdetrening på de åtte formelfamiliene). Men emnet har også et
betydelig **faktalag** i vevsmekanikk (Del 3): materialdefinisjoner, 8 beinfaktorer,
5 belastningstyper, målemetode-prosedyrer og norsk/engelsk begrepspar er billige,
høyfrekvente eksamenspoeng og **flashcard-gull** for rask, presis gjengivelse under
tidspress. Derfor ligger Del 3 relativt flashcard-tungt (144 flashcards på 4
kapitler), og totalen for flashcards (586) ligger over quiz (560) og godt over
gulvet. Eksamenstreningen (Del 5) holder lav flashcard-tetthet fordi verdien der er
hele-oppgave-gjennomkjøring under tidspress, ikke enkeltfakta.

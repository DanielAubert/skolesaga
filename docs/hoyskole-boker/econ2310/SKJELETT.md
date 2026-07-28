# Bokskjelett: ECON2310 Makroøkonomi 2 — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (8 ordinære sett H2018–H2025, 8 sensorveiledninger,
> 5 utsatt-sett, 4 utsatt-sensorveiledninger — 13 sett totalt). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Forgjengerbok:** Denne boka bygger EKSPLISITT videre på econ1310-boka
> (`docs/hoyskole-boker/econ1310/SKJELETT.md`). Alle forkunnskaper som dekkes
> der skal IKKE re-undervises her, men lenkes:
> `[tittel](/econ1310/econ1310-X-Y)`. Hvert kapittel under angir sine
> kryssbok-lenker i feltet **Forkunnskaper-lenker**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ2310` |
| Tittel | **Makroøkonomi 2 — eksamensrettet (ECON2310, UiO)** |
| Navigasjonsnavn (institusjoner.ts) | «ECON2310 Makroøkonomi 2» |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt modellfag; symbolsk/grafisk analyse, INGEN tallregning) |
| Antall kapitler | **29** (1 eksamenskart + 24 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 020 min ≈ 34 timer** |
| Quiz totalt | **515** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** ECON2310-eksamen er 3 timer, får–store–oppgaver-formatet
til Halvor Mehlum: ingen kortsvar, ingen begrepsbatterier — bare 5–12 delspørsmål
rundt ett eller to «relasjonssett» som oppgis *uten forklaring*, og som kandidaten
selv skal forklare, utlede og anvende. Eksamen roterer mellom to hovedblokker:
**Solow-vekst** (Weil-pensumet; 7 av 13 sett, og ren Solow på utsatt eksamen tre
år på rad) og **åpen IS-RR-PK med flytende kurs og endogene priser** (Holden
kap. 16 i Mehlums revisjon; dominerer 2022–2025), med **hovedkursmodellen** som
likestilt medspiller i to av de fire siste ordinære settene og
**aktualitetsspørsmål i 7 av 13 sett**. Boka er kalibrert mot nettopp dette: den
driller «forklar relasjonen» som egen sjanger, Solow-figurparet og komparativ
statikk med kort/lang sikt-skille, skiftanalyse med «under panseret»-sporing og
eksplisitt håndtering av ubestemte fortegn, hovedkursutledningen der
π-definisjonen må suppleres selv — og trener studenten i A-differensiatorene:
golden rule, fattigdomsfeller, høy-β-analysen og kontrasten tilbudsdrevet vs.
etterspørselsdrevet, som sensor belønner når den introduseres *uoppfordret*.

**Kritisk notasjonsregel (gjelder HELE boka):**

- **Solow:** sparerate $s$ (Weil-standarden; eldre sett bruker $\gamma$ —
  studenten skal *trenes i å gjenkjenne* $\gamma$-varianten, men boka skriver
  $s$), kapitalslit $\delta$ (nyere sett skriver $d$ — nevnes som variant),
  befolkningsvekst $n$, produktivitetsvekst $g$. Bevegelsesligning
  $\Delta k = s f(k) - (n+\delta)k$; med produktivitetsvekst
  $\Delta k = s f(k) - (n+g+\delta)k$.
- **Åpen IS-RR-PK:** bokstandard er **H2024/H2025-formen** — koeffisienter som
  $g$-parametre ($g_Y, g_E, g_\pi$), utenlandsk rente $i^F$ og forventet
  langsiktskurs $E^e$ eksplisitt med. UIP: $E = E^e + \kappa(i^F - i)$.
  Sjokkvariabler $Z^D, Z^E, Z^\pi, Z^i$; endogene $Y, i, \pi$; eksogene i tillegg
  $Y^n$. Rentekoeffisienten i IS skal alltid *tolkes dekomponert* som de tre
  kanalene (konsum $c_2$, investering $b_2$, valutakurs/eksport $a_2\kappa$ —
  H2022-formens $m(c_2+b_2+a_2\kappa)\,i$ vises som «under panseret»-form).
  Studenten trenes i å gjenkjenne H2022-varianten ($\gamma_Y$ osv.) og
  H2023-varianten (β direkte i multiplikatoren) — settene sier selv at egen
  notasjon er tillatt.
- **Hovedkursmodellen:** vekstrateform, små bokstaver = vekstrater
  ($p_s, w, p_k, p_i, q_k, q_i, v, z_k, z_s, k$; $\alpha$ = importandel i KPI).
  Inflasjonsdefinisjonen $\pi = \alpha p_i + (1-\alpha)p_s$ oppgis IKKE i
  settene — boka skal drille at studenten *legger den til selv*.
- **FORBUDT i hele boka:** IS-LM med LM-kurve, AD-AS, Ramsey-, OLG- og
  DSGE-modeller (0 forekomster på 13 sett), kortsvars-/nasjonalregnskapsstoff
  (1310-repertoar), likviditetsfelle/Ricardiansk ekvivalens/handlingsregelen som
  egne temaer, og **rene tallregningsoppgaver** (null på åtte år — alt er
  symbolsk, grafisk og verbalt). Unntak: Del 0 kan nevne utelatelsene eksplisitt
  som «utenfor eksamenskjernen».

**Gjennomgående sensorregel nr. 1 («forklar relasjonen»):** Relasjonssettene
oppgis bevisst uforklart på eksamen, og sensorveiledningene sier gjentatte
ganger at forklaring *forventes* — å regne på uforklarte ligninger gir ikke
uttelling. Hvert modellkapittel i denne boka skal derfor inneholde en eksplisitt
«slik forklarer du relasjonen på eksamen»-mal (2–5 setninger per relasjon), og
Del 7 har et eget drillkapittel for sjangeren.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | Seksjonstittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Vekst: Solow-modellen | 7 | Hovedblokk 1: 7/13 sett (54 %), ren Solow på utsatt tre år på rad, figurkrav i 6/13; golden rule + flere likevekter er Mehlums faste A-differensiator → nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 2 | Spareparadokset og kontrasten tilbud–etterspørsel | 2 | 2/13 som eksplisitt oppgave (H2018, H2025 b1), men kontrasten er **emnets røde tråd** og belønnes uoppfordret i flere veiledninger; naturlig b-oppgave-kandidat → 2 kompakte kapitler rett etter Solow, der kontrasten er ferskest. |
| 3 | Valutakurs og renteparitet | 2 | UIP/valutakursdrivere direkte spurt i to av de tre siste ordinære settene (H2024, H2025); KPI vs. norske varers prisvekst er eksplisitt H2024-krav → nivå 1 → 2 kapitler som fundament FØR IS-RR-PK (UIP ligger inne i IS). |
| 4 | Åpen økonomi: IS-RR-PK | 6 | Hovedblokk 2: 6/13 sett (46 %), dominerer 2022–2025; «forklar alle tre relasjoner» + skiftanalyse med panser-åpning er nivå 1 → 5 teorikapitler + drillkapittel. |
| 5 | Hovedkursmodellen og lønnsdannelse | 3 | 2/13 (15 %), men likestilt inngang i 2 av de 4 siste ordinære settene og naturlig komplement i alle «prissjokk ute»-scenarier → nivå 2 «kunne» → 3 kompakte kapitler med aktiv utledning. |
| 6 | Drøfting og aktualitet | 4 | Aktualitetsforankring i 7/13 sett; store drøftingsoppgaver uten deloppgaver (H2022/H2024) er egen form; todelt økonomi + beredskapsstoff (kriselikevekter, KI) → 4 kapitler. |
| 7 | Eksamenstrening | 4 | «Forklar relasjonen»-drill på tvers + 3 komplette øvingseksamener etter de tre reelle malene (H2025-formen, H2022/H2024-formen, utsatt-Solow-formen). |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitler inne i temadelene** (1.7 Solow-drill, 4.6 skiftanalyse-drill)
   i stedet for samlet i siste del: begge sjangre er 46–54 %-gjengangere som må
   drilles umiddelbart etter teorien. Del 7 beholder «forklar
   relasjonen»-drillen (som går på tvers av ALLE relasjonssett og derfor må
   ligge sist) og øvingseksamenene. Samme avvik som econ1310-boka gjorde.
2. **Egen liten Del 2 for et 15 %-tema:** kontrasten tilbud/etterspørsel er
   ifølge analysen emnets røde tråd og eksplisitt A-markør når den introduseres
   uoppfordret — den fortjener egne kapitler selv med lav selvstendig frekvens,
   og plasseringen rett etter Solow gjør kontrasten pedagogisk billig.
3. **Ingen kortsvarsdel:** ECON2310 har aldri kortsvar (største formforskjell
   fra 1310) — DNA-ens «kortsvarfundament»-mønster er bevisst droppet.
4. **Ingen tallregningsoppgaver:** DNA-regnefag antar regneoppgaver; her er alt
   symbolsk/grafisk/verbalt (null rene talloppgaver på åtte år). Øvelsene
   skrives deretter: utled, tegn, signér, forklar.
5. **2 020 min totaltid og øvingseksamener à 180 min** (eksamen er 3 timer, ikke
   4 som i 1310).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen i analysen §3, som gjengis for studenten i kap. 0.1.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON2310

- **id:** `econ2310-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, rotasjonen mellom vekst og åpen økonomi, sjangerkatalogen og lesestrategien som styrer hele boka.
- **Forkunnskaper-lenker:** [Eksamenskartet: slik testes ECON1310](/econ1310/econ1310-0-1) (for kontrasten mellom emnene).
- **Eksamensbelegg:** Metakapittel — bygger på alle 13 sett. Skal gjengi: (i) formen: 3 timers skriftlig skoleeksamen i Inspera, A–F, eneste hjelpemiddel ordbok; svar godtas på norsk/svensk/dansk/engelsk; notasjonsinstruksen (greske bokstaver kan erstattes med latinske, fotskrifter kan droppes — «skriv Zd, a2»); (ii) formatet: få, store oppgaver (5–12 delspørsmål totalt), ALDRI kortsvarsbatteri, vekting oppgis normalt ikke (unntak H2025: 75/25), relasjonssettene oppgis uforklart og «kan komme til nytte»; (iii) **rotasjonsmønsteret**: 2018–2021 vekstdominert, 2022–2025 åpen økonomi-dominert, H2025 gjeninnførte vekst/Keynes som b-oppgave, og utsatt eksamen har vært ren Solow tre år på rad — begge blokker må beherskes fullt ut; (iv) temafrekvens-tabellen (Solow 54 %, åpen IS-RR-PK 46 %, aktualitetsspørsmål 54 %, komparativ statikk sparerate 46 %, Solow-figurkrav 46 %, RR fra mål 31 %, flere likevekter/fattigdomsfelle 31 %, befolkningsvekst 31 %, rentens tre kanaler 23 %, UIP 23 %, multiplikator med prisvirkning 23 %, kapitalslit-økning 23 %, hovedkursmodellen 15 %, spareparadoks/Keynes 15 %, kontrasten tilbud/etterspørsel 15 %, penge- vs. finanspolitikk 15 %, todelt økonomi 15 %, golden rule 15 %, produktivitetsvekst g 15 %, kriselikevekter 8 %, KI/roboter 8 %); (v) at IS-LM, AD-AS, Ramsey/OLG og kortsvar/nasjonalregnskap har **0 forekomster** og bevisst er utelatt; (vi) sensorens seks metaregler: forklar relasjonene du bruker (regel nr. 1), ikke mist spørsmålet av syne, åpne panseret på redusert form, presiser forutsetningene og vær konsekvent, figurer er førsteklasses svar, besvarelsen må ikke være plettfri; (vii) karaktersignalene (H2018-skalaen: alt riktig med brukbare forklaringer ≈ B; reell innsikt/selvstendig begrepsbruk ≈ A; mekanisk med uklarheter ≈ C; åpenbare hull ≈ D; A-differensiatoren er alltid de siste, bevisst «kinkige» delspørsmålene, som vurderes mildere); (viii) prognosen for neste ordinære eksamen: åpen økonomi-hovedoppgave (65–75 %), trolig sitat-/aktualitetsforankret, + b-oppgave fra vekst/Keynes (25–35 %) etter H2025-mønsteret — eller retur av vekstblokken som hovedoppgave (sannsynligheten øker for hvert år den uteblir); utsatt: nok en Solow-variant med ny vri på flere likevekter.
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste: A «sett opp Solow fra verbale egenskaper», B steady state-diagram og tilpasningsbane, C komparativ statikk i Solow (s/n/δ/g), D Solow-utvidelser (golden rule, flere likevekter, fattigdomsfelle), E forklar IS (tre rentekanaler + multiplikator med prisvirkning), F forklar RR fra pengepolitikkens mål, G skiftanalyse i IS-RR-PK med panser-åpning, H valutakurs og UIP, I hovedkursmodellen (utled π og w−π, tolk k), J Keynes-kryss/spareparadoks/Solow-kontrast, K penge- vs. finanspolitikk komponent for komponent, L aktualitets-/kreativitetsspørsmål. Avslutt med leseplan: Del 1 + 3 + 4 er «må perfekt», Del 2 + 5 + 6 «må kunne», nivå 3-temaene (kap. 6.3) markeres «bør kjenne».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «eksamen har to oppgaver vektet 75/25 og du har 180 minutter — sett opp tidsbudsjett per delspørsmål, og begrunn hvorfor de siste delspørsmålene ikke skal sluke tiden din».
- **Typiske feil:** Metafeilene: regne på relasjoner uten å forklare dem (C-nivå), miste spørsmålet av syne i drøftingsoppgavene, signere ubestemte fortegn, lese bare den ene hovedblokken fordi «den var oppe i fjor».
- **Quiz: 10 · Flashcards: 10**

---

### Del 1 — Vekst: Solow-modellen *(prioritet: PERFEKT)*

#### Kapittel 1.1: Solow-oppsettet: fra verbale egenskaper til modell

- **id:** `econ2310-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Oversette en punktliste med økonomiske egenskaper til formell vekstmodell — og begrunne hver antakelse, slik utsatt-malen krever.
- **Forkunnskaper-lenker:** [Nasjonalregnskapet: BNP, BNI og disponibel inntekt](/econ1310/econ1310-1-1) (S = I i lukket økonomi), [Modellens anatomi: atferdsligninger, endogene variabler og telleregelen](/econ1310/econ1310-2-1) (endogen/eksogen-skillet).
- **Eksamensbelegg:** Sjanger A er fast åpning i utsatt-settene H2023u/H2024u/H2025u («Sett opp en modell med fire hovedegenskaper …») og ordinært H2020 spm 1–2 («hvilke antagelser ligger bak»; når er «sparerate» et dekkende navn). Del av Solow-blokkens 7/13 = 54 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP OG BEGRUNNES AKTIVT: produktfunksjonen $Y = F(K, L)$ med konstant skalaavkastning; per arbeider-formen $y = f(k)$ der $y = Y/L$, $k = K/L$; $f'(k) > 0$, $f''(k) < 0$ — konkaviteten skal *begrunnes fra skalaavkastningen*: når bare K øker (L fast), avtar avkastningen; bevegelsesligningen $\Delta k = s f(k) - (n+\delta)k$ med tolkning ledd for ledd (spart/investert per arbeider minus «utvanning» fra befolkningsvekst og kapitalslit); investeringene som fast andel $s$ av produksjonen; koblingen sparing = investering. Nyansen fra H2020: «sparerate» er et dekkende navn KUN i lukket økonomi — i åpen økonomi kan kapitalvekst også finansieres med utenlandske direkteinvesteringer, lån og bistand (nivå 3-poeng, men billig å sikre her). Notasjonsvarianter: eldre sett bruker $\gamma$ for sparerate og nyere skriver $d$ for kapitalslit — studenten skal gjenkjenne begge, boka bruker $s$ og $\delta$. Homogenitets-/skalaavkastningsresonnementet forklares kvalitativt (dobling av begge innsatsfaktorer dobler produksjonen).
- **Oppgavesjangre:** A. Mønstereksempel (omskrevet): «En økonomi har disse egenskapene: produksjonen per arbeider øker med kapitalen per arbeider, men stadig mindre; investeringene er en fast andel av produksjonen; befolkningen vokser med fast rate; kapitalen slites. Formuler modellen matematisk og begrunn hver antakelse økonomisk.»
- **Typiske feil:** Postulere $f'' < 0$ uten begrunnelse fra skalaavkastningen; glemme å tolke leddene i bevegelsesligningen med ord; blande totalstørrelser og per arbeider-størrelser allerede i oppsettet; anta åpen økonomi og likevel kalle $s$ «spareraten» uten forbehold.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 1.2: Steady state, fasediagram og tilpasningsbane

- **id:** `econ2310-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ2310-1-1`
- **kapitteltype:** teori
- **description:** Begge figurtypene sensor krever, dynamikken mot likevekt — og presiseringen som skiller «positivt feil» fra fullt hus.
- **Forkunnskaper-lenker:** ingen utover kap. 1.1.
- **Eksamensbelegg:** Sjanger B i H2018(b), H2020(3–4), H2021(1); H2023u(2–4), H2024u(3), H2025u(1, 3–4) — 6/13 = 46 %, og figurkravet er alltid eksplisitt. Veiledningene godtar at en korrekt figur med forklarende tekst er fullgodt svar. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE TEGNES OG FORKLARES AKTIVT: (i) **fasediagrammet** ($k$ horisontalt): konkav stigende sparekurve $s f(k)$ mot rett stråle $(n+\delta)k$; skjæringen gir $k^*$ der $s f(k^*) = (n+\delta)k^*$; (ii) dynamikken: for $k < k^*$ er $s f(k) > (n+\delta)k$, altså $\Delta k > 0$ — vekst som er sterkest i starten og avtar mot likevekten (og speilvendt for $k > k^*$; likevekten er stabil); (iii) **tidsbanediagrammet** ($t$ horisontalt): $k$ og $y$ stiger asymptotisk mot $k^*$ og $f(k^*)$, konkav bane (kan starte konveks/S-formet); konsum per arbeider $(1-s)f(k)$ følger samme form. **Obligatorisk presisering (H2021-veiledningen kaller motsatt påstand «positivt feil»):** i steady state er *per arbeider*-størrelsene konstante, mens totalt $K$ og $Y$ vokser med rate $n$ — å hevde at $K$ og $Y$ står stille er feil, ikke bare upresist. «Veien ut til likevekten er også viktig» — steady state uten tilpasningsbane er halvt svar.
- **Oppgavesjangre:** B. Mønstereksempel: «Kapitalen per arbeider starter langt under likevektsnivået. Tegn én figur som bestemmer likevekten og én som viser utviklingen over tid, og forklar hvorfor veksten er sterkest i starten. Hva skjer med samlet produksjon i likevekten?»
- **Typiske feil:** «K og Y er konstante i steady state» (positivt feil); tegne sparekurven lineær eller strålen konkav; utelate tidsbanefiguren når begge kreves; figur uten forklarende tekst (figur + ord er standarden); glemme stabilitetsargumentet (hvorfor økonomien beveger seg *mot* $k^*$ fra begge sider).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.3: Komparativ statikk i Solow: sparerate, befolkningsvekst og kapitalslit

- **id:** `econ2310-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** `econ2310-1-2`
- **kapitteltype:** teori
- **description:** Standardskiftene s, n og δ med kort/lang sikt-skille — vekstblokkens kjerneteknikk, alltid med ord og figur.
- **Forkunnskaper-lenker:** ingen utover Del 1.
- **Eksamensbelegg:** Sjanger C i samtlige Solow-sett: sparerate opp i 6/13 (H2018, H2020, H2021; H2023u, H2024u, H2025u), befolkningsvekst i 4/13 (H2018 d, H2021; H2023u 6, H2024u), kapitalslit-økning i 3/13 (H2023u 5, H2024u 6, H2025u 7). Dette er emnets svar på 1310s «tilvekstform-multiplikator» — kjerneteknikken. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT, alltid med kort/lang sikt-skille og ord, ikke bare graf: (i) **$s$ opp:** sparekurven svinger opp → høyere $k^*$ og $y^*$; overgangsfase med midlertidig ekstra vekst (ny steady state, ikke varig høyere *vekst*); konsum per arbeider $(1-s)y$ **faller på kort sikt** (mer spares av samme inntekt) og kan ende høyere eller lavere på lang sikt — fortegnet kan ikke signeres uten å vite om utgangspunktet lå under eller over golden rule (bro til kap. 1.5); (ii) **$n$ opp:** strålen brattere → $k^*$ og $y^*$ ned; nyansen fra H2023u: for *totalstørrelsene* virker økt $n$ mindre negativt enn økt $\delta$, fordi flere arbeidere også produserer; (iii) **$\delta$ opp:** samme retning som $n$ for per arbeider-størrelsene, men: starter økonomien i likevekt, skjer ingenting *på kort sikt* — $y$ og $(1-s)y$ synker gradvis mot ny likevekt. Hvert skift: figur (skiftet kurve/stråle, gammel og ny $k^*$) + tidsbane + mekanisme i ord.
- **Oppgavesjangre:** C. Mønstereksempel: «Spareraten øker varig. Gjør rede for hva som skjer med produksjon og konsum per arbeider på kort og lang sikt, og forklar hvorfor konsumeffekten på lang sikt ikke kan signeres uten mer informasjon.»
- **Typiske feil:** Signere langsiktig konsum ved $s$-økning (ubestemt uten golden rule-informasjon); påstå varig høyere *vekstrate* av høyere $s$ (kun nivåeffekt + overgangsvekst); glemme kort/lang sikt-skillet; behandle $n$- og $\delta$-økning som identiske for totalstørrelsene; hoppe over overgangsdynamikken.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 1.4: Produktivitetsvekst: Solow med effektive arbeidere

- **id:** `econ2310-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ2310-1-3`
- **kapitteltype:** teori
- **description:** Modellen med teknologisk fremgang — den eneste kilden til varig vekst per arbeider, og en dokumentert A-differensiator.
- **Forkunnskaper-lenker:** ingen utover Del 1.
- **Eksamensbelegg:** Sjanger C-utvidelse i H2021(3) og H2023u(7–8) — 2/13 = 15 %, men H2023u 7–8 er eksplisitt A-differensiator («tror ikke kandidaten har sett dette» gjelder samme sjikt i H2021 spm 3), og presisjonen herfra kreves implisitt i alle steady state-svar. Prioritet: **perfekt** (som del av Solow-komplekset).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: arbeidskraft i effektivitetsenheter som vokser med $n+g$; bevegelsesligning $\Delta k = s f(k) - (n+g+\delta)k$ der $k$ nå er kapital per *effektivitetsenhet*; i steady state er per effektivitetsenhet-størrelsene konstante, mens **produksjon og konsum per arbeider vokser med rate $g$ også på lang sikt** — og totalstørrelsene med $n+g$. Skiftanalysen: økt $g$ (f.eks. fra 1 % til 2 %) gjør strålen brattere → $k^*$ per effektivitetsenhet *synker*, ingen kortsiktseffekt på nivået, men den langsiktige *vekstbanen* for $y$ per arbeider blir brattere — nivå vs. bane-skillet er selve poenget. Konsistenskravet fra H2021(3): der flere utgangspunkt er mulige (med eller uten produktivitetsvekst) godtar sensor begge spor, men antakelsen skal sies eksplisitt og holdes konsekvent gjennom hele analysen.
- **Oppgavesjangre:** C. Mønstereksempel: «Teknologisk fremgang gjør arbeiderne jevnt mer produktive, og veksttakten i produktiviteten dobles. Forklar hva som skjer med kapitalintensiteten målt per effektivitetsenhet, og med produksjonen per arbeider på kort og lang sikt.»
- **Typiske feil:** Bytte mellom modell med og uten produktivitetsvekst midt i analysen uten å si fra (H2021 spm 3 er konstruert for å avsløre dette); tolke lavere $k^*$ per effektivitetsenhet som «lavere velstand»; glemme at per arbeider-vekst med rate $g$ er *forenlig med* steady state; blande $g$ inn i modellen fra 1.1–1.3 uten å endre strålen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.5: Golden rule: den optimale spareraten

- **id:** `econ2310-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-1-3`
- **kapitteltype:** teori
- **description:** Hvorfor høy inntekt ikke er det samme som høyt forbruk — og betingelsen som maksimerer konsumet per arbeider på lang sikt.
- **Forkunnskaper-lenker:** ingen utover Del 1.
- **Eksamensbelegg:** Sjanger D i H2020(7) («dette har de ikke sett» — eksplisitt A-differensiator) og som referanse i H2021-veiledningens spm 3; løser dessuten opp fortegnsubestemtheten fra kap. 1.3. 2/13 = 15 %, men A-skille når den kommer. Prioritet: **perfekt** (A-differensiator med lav dekningskostnad).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: golden rule-spareraten maksimerer langsiktig konsum per arbeider $(1-s)f(k^*)$; betingelsen er at $f'(k^*) = n+\delta$ — grafisk: helningen på $f(k)$ er lik strålens helning i golden rule-punktet (vis i fasediagrammet: konsum = vertikal avstand mellom $f(k)$ og strålen i steady state, størst der tangenten er parallell). Kjernepoenget sensor vil ha: **høy inntekt ≠ høyt forbruk** — det går an å spare for mye; $s = 1$ gir maksimal produksjon og null konsum. Kobling tilbake til 1.3: ligger økonomien *under* golden rule-nivået, gir høyere $s$ høyere langsiktig konsum; ligger den *over*, gir høyere $s$ lavere — det er derfor fortegnet var ubestemt. Mikrofundament-grensen: dette er så langt emnet går (ingen Ramsey/intertemporal optimering).
- **Oppgavesjangre:** D. Mønstereksempel: «En politiker hevder at jo mer landet sparer, desto bedre får innbyggerne det på lang sikt. Bruk vekstmodellen til å vurdere påstanden, og utled betingelsen for den spareraten som gir høyest varig forbruk per arbeider.»
- **Typiske feil:** Forveksle maksimal *produksjon* med maksimalt *konsum*; oppgi betingelsen uten grafisk/økonomisk tolkning; tro at økonomien av seg selv beveger seg mot golden rule (den forblir der spareraten sender den); glemme at poenget nettopp løser 1.3-ubestemtheten.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.6: Flere likevekter og fattigdomsfeller

- **id:** `econ2310-1-6` · **number:** 1.6 · **estimatedMinutes:** 55 · **prerequisites:** `econ2310-1-5`
- **kapitteltype:** teori
- **description:** Mehlums favorittvri: la en parameter avhenge av inntektsnivået, og kurvene krysses to steder — grepet bak de fleste A-delspørsmålene i vekstblokken.
- **Forkunnskaper-lenker:** ingen utover Del 1.
- **Eksamensbelegg:** Sjanger D i H2020(6, 8); H2022u(2), H2024u(7), H2025u(8) — 4/13 = 31 %, analysen kaller det **Mehlums signatur** og den vanligste A-differensiatoren i vekstblokken. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT — tre varianter av samme grep: (i) **trappetrinns-sparerate** (lav $s$ under en terskel for $k$/inntekt, høy over): sparekurven får et hopp og kan krysse strålen to ganger → to stabile likevekter (og en ustabil terskel mellom dem); den nederste er fattigdomsfella; (ii) **endogen befolkningsvekst** (høy $n$ ved lav inntekt, lav ved høy): strålen får to helninger — bratt først, slak etterpå → samme dobbeltkryssing fra strålesiden; (iii) logikken i felles form: midlertidige sjokk kan flytte økonomien *varig* ned i lavlikevekten, og et stort nok løft (bistand/investeringspakke over terskelen) kan flytte den varig opp — derfor «felle». H2020(8)-kombinasjonen som strekkstoff: en «fattigdomsfelle» der lavlikevekten faktisk gir *høyest konsum* (kobling til golden rule — høy inntekt ≠ høyt forbruk). Grafisk presisjon: marker begge stabile likevekter, terskelpunktet og pilene for dynamikken i hvert intervall.
- **Oppgavesjangre:** D. Mønstereksempel: «Anta at husholdningene sparer en lav andel av inntekten når inntekten er lav, og en høy andel når den er høy. Vis grafisk at økonomien kan ha to stabile likevekter, forklar hvorfor den nederste kan kalles en felle — og hva som skal til for å komme ut av den.»
- **Typiske feil:** Tegne dobbeltkryssing uten å drøfte stabiliteten i hvert skjæringspunkt; glemme dynamikkpilene som viser hvorfor terskelen er vippepunkt; anta at små, midlertidige tiltak løfter økonomien ut av fella; behandle varianten med endogen $n$ som en annen modell (samme grep, annen kurve).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.7: Drill: Solow-sjangeren fra a til å

- **id:** `econ2310-1-7` · **number:** 1.7 · **estimatedMinutes:** 90 · **prerequisites:** `econ2310-1-6`
- **kapitteltype:** drill
- **description:** Hele utsatt-malen som algoritme: fra verbale egenskaper via begge figurer og komparativ statikk til utvidelses-vrien på slutten.
- **Forkunnskaper-lenker:** ingen utover Del 1.
- **Eksamensbelegg:** Dekker sjangrene A–D samlet: Solow bærer 7/13 sett, er ren mal på utsatt tre år på rad (H2023u/H2024u/H2025u følger samme oppgavekjede) og har høy sannsynlighet for retur ordinært (har ikke båret et ordinært sett siden 2021). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) oversett de verbale egenskapene til $y = f(k)$, fortegn på $f'$/$f''$ med begrunnelse, og $\Delta k = s f(k) - (n+\delta)k$; 2) tolk hvert ledd med ord; 3) tegn fasediagrammet, marker $k^*$, argumentér for stabilitet; 4) tegn tidsbanen; 5) presisér «per arbeider konstant — totalt vokser med $n$»; 6) kjør det etterspurte skiftet med kort/lang sikt-skille, figur og mekanisme; 7) møt utvidelses-vrien (golden rule / flere likevekter / endogen parameter / $g$) med grepet fra 1.4–1.6 — og flagg eksplisitt hva som er ubestemt. Gjennomregnet eksamenscase med sensor-margnotater (hva som gir uttelling ved hvert steg, hvor «positivt feil»-fellene ligger). 10–15 oppgaver som roterer hele katalogen: oppsett-varianter, $s$/$n$/$\delta$/$g$-skift i begge retninger, trappetrinns-$s$, endogen $n$, golden rule-hale, konsistensfellen med/uten produktivitetsvekst — alle på eksamensnivå, alle med nyskrevne kontekster.
- **Oppgavesjangre:** A + B + C + D. Mønstereksempel (full utsatt-kjede): «(1) Sett opp en vekstmodell med de fire oppgitte egenskapene og begrunn antakelsene. (2) Bestem likevekten grafisk og forklar dynamikken. (3) Vis effekten av høyere kapitalslit på kort og lang sikt. (4) Anta så at befolkningsveksten er høy ved lav inntekt og lav ved høy inntekt — vis at det kan gi to stabile likevekter, og drøft hva det betyr for fattige land.»
- **Typiske feil:** Hele katalogen fra 1.1–1.6 samlet; i tillegg drill-spesifikt: hoppe rett til figuren uten modelloppsett når oppgaven ber om begge; bruke tiden på de første, lette delspørsmålene og møte utvidelses-vrien uforberedt.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A oppsett og begrunnelser, 40 min, sjanger A; 1.B steady state med begge figurer og tilpasningsbane, 45 min, sjanger B; 1.C komparativ statikk $s$/$n$/$\delta$/$g$ med kort/lang sikt, 50 min, sjanger C; 1.D full Solow-kjede på eksamensnivå med golden rule- eller fattigdomsfelle-hale, 60 min, sjanger A–D).

---

### Del 2 — Spareparadokset og kontrasten tilbud–etterspørsel

#### Kapittel 2.1: Keynes-krysset og spareparadokset

- **id:** `econ2310-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-1-3`
- **kapitteltype:** teori
- **description:** Den enkleste etterspørselsmodellen gjenbrukt fra ECON1310 — og paradokset der økt sparevilje senker aktiviteten uten å øke sparingen.
- **Forkunnskaper-lenker:** [Multiplikatoren på tilvekstform: kjerneteknikken](/econ1310/econ1310-2-2), [Følgestørrelsene: ΔC, ΔT, ΔB og ΔS](/econ1310/econ1310-2-3) (sparebegrepene og $S = I$).
- **Eksamensbelegg:** Sjanger J i H2018(2) og H2025(b1) — 2/13 = 15 %; H2025 viser at stoffet er den naturlige b-oppgaven (25 %) når åpen økonomi bærer hovedoppgaven. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (enkleste form): $Y = C + I_0$ med $C = c_0 + c_1 Y$ → $Y = (c_0 + I_0)/(1 - c_1)$; **spareparadokset**: ønsket sparing opp ($c_0$ eller $c_1$ ned) → etterspørsel ned → $Y$ ned, mens *realisert* sparing er uendret — i likevekt må sparingen være lik den gitte investeringen $I_0$, så det er $Y$ som bærer tilpasningen. **H2018-varianten** skal også beherskes: sparing $\gamma Y$ (der $\gamma = 1 - c_1$ er spareraten) mot investeringsfunksjon $I = I_0 + \alpha Y$ i et $(Y, I)$-diagram; likevekt $Y = I_0/(\gamma - \alpha)$ — som godt kan ligge under full sysselsetting (det er poenget). Presisjonskravet: skill sparerate $\gamma$ fra konsumtilbøyelighet $c_1$ ($\gamma = 1 - c_1$) — H2018 veksler bevisst mellom dem. Modellen forutsettes kjent fra 1310; her er jobben tolkning og paradoks, ikke ny teknikk.
- **Oppgavesjangre:** J. Mønstereksempel: «Husholdningene ønsker å spare en større del av inntekten. Forklar, gjerne med en enkel modell, hvorfor samlet sparing likevel kan ende uendret — og hva som i stedet endres.»
- **Typiske feil:** Forveksle sparerate og konsumtilbøyelighet; «bevise» paradokset uten likevektsargumentet $S = I_0$; behandle investeringene som endogene i grunnvarianten; presentere modellen uten å forklare relasjonene (sensorregel nr. 1 gjelder også her).
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.2: Emnets røde tråd: tilbudsdrevet vs. etterspørselsdrevet produksjon

- **id:** `econ2310-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ2310-2-1`
- **kapitteltype:** teori
- **description:** Kontrasten som binder pensum sammen: hvorfor mer sparing er entydig bra i Solow og et problem i Keynes — og hvorfor sensor belønner den uoppfordret.
- **Forkunnskaper-lenker:** [Eksamenskartet: slik testes ECON1310](/econ1310/econ1310-0-1) (etterspørselssidens plass i 1310).
- **Eksamensbelegg:** Sjanger J/kontrasten i H2018(2c) og H2025(b1↔b2), relevant i H2020(2) — 2/13 eksplisitt, men H2018-veiledningen sier rett ut at oppgaveteksten bevisst *ikke* nevner «tilbud vs. etterspørsel», og at gode besvarelser introduserer begrepsparet selv — det er den dokumenterte forskjellen på B og A. Prioritet: **kunne** (A-markør).
- **Innholdskontrakt:** Kontrasten settes opp systematisk: i **Solow** er produksjonen *tilbudsbestemt* (kapital, arbeidskraft, teknologi); mer sparing → mer kapital → høyere $y^*$ — sparing er entydig vekstfremmende (modulo golden rule). I **Keynes** er produksjonen *etterspørselsbestemt* på kort sikt; mer sparing → mindre etterspørsel → lavere $Y$ — sparing er et problem. Forsoningen: horisonten — Keynes-logikken gjelder kort sikt med ledige ressurser, Solow-logikken lang sikt der tilbudssiden binder; en god kandidat sier *hvilken* horisont og *hvilke* forutsetninger som gjør hvilken modell relevant. Treningsmål: kunne skrive et 10–15-linjers kontrastavsnitt som introduserer begrepsparet uoppfordret, og kunne peke på kontrasten når to deloppgaver (à la H2025 b1/b2) står ved siden av hverandre. Broen videre: høy-β-analysen i kap. 4.3 («minner om en bindende tilbudsside») viser kontrasten *inne i* IS-RR-PK.
- **Oppgavesjangre:** J. Mønstereksempel: «Forklar spareparadokset, og forklar deretter hvorfor økt sparevilje gir motsatt konklusjon i vekstmodellen fra første del av pensum. Hva er det ved de to modellene som driver forskjellen?»
- **Typiske feil:** Beskrive de to konklusjonene uten å navngi mekanismen (tilbuds- vs. etterspørselsbestemt produksjon); presentere kontrasten som at «én av modellene tar feil»; glemme horisont-forsoningen; utelate golden rule-forbeholdet på Solow-siden.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A spareparadokset med enkel modell, 30 min, sjanger J; 2.B H2018-varianten: $\gamma Y$ mot $I = I_0 + \alpha Y$ i diagram, 35 min, sjanger J; 2.C kontrast-essay der begrepsparet skal introduseres uoppfordret, 35 min, sjanger J; 2.D b-oppgave-simulering: spareparadoks + vekstspørsmål side ved side à la H2025 b1–b2, 45 min, sjanger J + D).

---

### Del 3 — Valutakurs og renteparitet *(prioritet: PERFEKT)*

#### Kapittel 3.1: UIP: hva som styrker og svekker krona

- **id:** `econ2310-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Paritetsbetingelsen som ligger «skjult» i IS-relasjonen — og fortegnsfasiten for valutakursdriverne som tre av de fire siste settene spør direkte om.
- **Forkunnskaper-lenker:** [Valutakurs og åpen økonomi: nominell kurs, realkurs og trilemmaet](/econ1310/econ1310-1-5) (E-konvensjonen: høyere E = svakere krone).
- **Eksamensbelegg:** Sjanger H i H2019(2a), H2024(2–3), H2025(a1) — 3/13 = 23 %, og to av de tre siste ordinære settene (H2024, H2025) spør direkte, og UIP inngår implisitt i alle skiftanalyser med $Z^E$. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: paritetsbetingelsen $E = E^e + \kappa(i^F - i)$ — valutakursen settes slik at forventet kronesvekkelse tilsvarer rentedifferansen mot utlandet; forklar logikken fra investorenes valg mellom kroneplasseringer og utenlandske plasseringer (arbitrasjeresonnementet, kvalitativt — ingen formell utledning kreves utover dette). **Fortegnsfasiten (skal sitte som refleks):** krona **svekkes** ($E$ opp) når utenlandsk rente $i^F$ stiger, når forventet langsiktskurs $E^e$ stiger (svekket tillit til norsk økonomi/eksportevne) eller når risikopremien på kroner øker; en **uventet norsk renteøkning styrker krona** (gitt $E^e$). Tolk $E^e$ som ankeret: alt som endrer synet på kronas langsiktige verdi, flytter kursen i dag. $\kappa$ som følsomheten. Forbered koblingen til IS (kap. 4.1): valutakurskanalen for renta går gjennom nettopp denne betingelsen.
- **Oppgavesjangre:** H. Mønstereksempel: «Hva bestemmer kronekursen utover norsk rente? Ta utgangspunkt i paritetsbetingelsen, og forklar hvorfor en uventet renteheving hjemme styrker krona, mens en renteheving ute svekker den.»
- **Typiske feil:** Feil fortegn på valutakursmekanismen (den hyppigst flaggede fellen: norsk renteøkning *styrker*, utenlandsk *svekker*); blande retningen på $E$ (høyere E = svakere krone — 1310-konvensjonen gjelder); presentere UIP som empirisk lov i stedet for likevektsbetingelse; glemme risikopremien/tillitskanalen via $E^e$.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 3.2: Valutakurs og inflasjon: KPI vs. prisveksten på norske varer

- **id:** `econ2310-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ2310-3-1`
- **kapitteltype:** teori
- **description:** Presisjonen H2024 krever: kronesvekkelse slår direkte inn i KPI via importandelen, men bare indirekte i norske varepriser.
- **Forkunnskaper-lenker:** [Phillips-kurven: β-mekanismen og kausalkjeden](/econ1310/econ1310-4-2) (PK-mekanismen som den indirekte kanalen bygger på).
- **Eksamensbelegg:** Eksplisitt H2024-krav (veiledningen gjør skillet til vurderingspunkt); inngår i sjanger G/H hver gang valutakurs og inflasjon kobles (alle åpen økonomi-sett). Prioritet: **perfekt** (presisjonskrav, lite volum).
- **Innholdskontrakt:** MÅ KUNNE FORKLARES PRESIST: konsumprisene er en veid sum av importerte og norskproduserte varer (importandel $\alpha$ — samme $\alpha$ som i hovedkursmodellens KPI-definisjon, kap. 5.1). **Direkte kanal:** kronesvekkelse → importerte varer dyrere i kroner → KPI opp med vekt $\alpha$, raskt og mekanisk. **Indirekte kanal:** kronesvekkelse → bedret konkurranseevne → høyere aktivitet $Y$ → lavere ledighet → høyere lønnsvekst → høyere prisvekst på *norske* varer (via Phillips-kurven) — tregere og betinget. Konklusjonskravet: ved valutakurssjokk er effekten på KPI-inflasjonen entydig positiv, mens effekten på norske varers prisvekst går via aktiviteten og er *ubestemt uten mer informasjon* (avhenger bl.a. av sentralbankens respons). Denne presiseringen skal alltid med når «inflasjon» analyseres etter kurssjokk.
- **Oppgavesjangre:** H + G-moment. Mønstereksempel: «Krona svekker seg markert. Gjør rede for hvordan dette påvirker inflasjonen — og presiser hvilke priser som påvirkes direkte, og hvilke som bare påvirkes indirekte.»
- **Typiske feil:** Ikke skille KPI-inflasjon fra prisvekst på norske varer (eksplisitt H2024-trekk); signere effekten på norske varepriser entydig; glemme at importandelen $\alpha$ bestemmer det direkte gjennomslaget; behandle den indirekte kanalen som umiddelbar.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 3:** 4 prøver (3.A paritetsbetingelsen forklart fra investoradferd, 30 min, sjanger H; 3.B fortegnsdrill: åtte hendelser, signer kroneeffekten med begrunnelse, 30 min, sjanger H; 3.C KPI vs. norske varepriser etter kurssjokk, 30 min, sjanger H; 3.D integrert valutakursanalyse på eksamensnivå: renteendring ute + tillitsskifte i $E^e$, full sporing til begge inflasjonsbegreper, 45 min, sjanger H + G).

---

### Del 4 — Åpen økonomi: IS-RR-PK *(prioritet: PERFEKT)*

#### Kapittel 4.1: IS-relasjonen: tre rentekanaler og multiplikatoren med prisvirkning

- **id:** `econ2310-4-1` · **number:** 4.1 · **estimatedMinutes:** 70 · **prerequisites:** `econ2310-3-1`
- **kapitteltype:** teori
- **description:** Den åpne IS-relasjonen forklart slik sensor forventer: alle tre rentekanaler, og multiplikatoren som dempes av både import og priser.
- **Forkunnskaper-lenker:** [Multiplikatoren på tilvekstform: kjerneteknikken](/econ1310/econ1310-2-2), [Modellvarianter: åpen økonomi, eksogen skatt og finanspolitiske regler](/econ1310/econ1310-2-4) (importlekkasjen — prisvirkningen er det NYE her).
- **Eksamensbelegg:** Sjanger E i H2019(1a, 1c), H2022, H2023(2), H2024(1), H2025(a2–a3) — i praksis hver gang åpen økonomi testes (6/13 = 46 %); rentens tre kanaler etterspørres nesten ordrett i tre sett; H2023(2) spør direkte hvorfor høyere β gir mindre multiplikator. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE FORKLARES OG TOLKES AKTIVT (relasjonen oppgis på eksamen — jobben er forklaringen): bokstandard-formen (H2024/H2025-typen med $g$-parametre, $i^F$ og $E^e$); «under panseret»-formen fra H2022 brukes til tolkning: $Y = m Z^D + m a_2 Z^E - m a_3 Z^\pi - m(c_2 + b_2 + a_2\kappa)\,i$. (i) **Rentens tre kanaler** — rentekoeffisienten dekomponert: $c_2$ lavere konsum, $b_2$ lavere investeringer, $a_2\kappa$ sterkere krone → lavere eksport (og billigere import). Alle tre skal ALLTID med. (ii) **Multiplikatoren $m$**: forsterkes av konsum- og investeringsetterspørselen (inntekt → konsum → inntekt …), dempes av importlekkasjen **og av prisvirkningen (β-kanalen)**: høyere $Y$ → lavere ledighet → høyere lønnsvekst → norske varer dyrere → svekket konkurranseevne → lavere eksport/høyere import. Prisvirkningen er det nye i forhold til 1310 og obligatorisk («bør absolutt være med» — H2019-veiledningen); H2023-svaret: høyere β gir sterkere prisdemping → mindre $m$. (iii) Sjokkvariablene tolket: $Z^D$ (etterspørsel: G, investeringsvilje, eksportetterspørsel), $Z^E$ (valutakursimpulser: $i^F$, $E^e$, risikopremie), $Z^\pi$ (inflasjonsimpulser). (iv) «Forklar relasjonen»-malen: 4–6 setninger som dekker retning, kanaler og dempere — skrives ut som eksplisitt eksamensmal. Merknad: Holdens lærebok har en parameter $m_i$ som i eksamensformene er satt lik 1 — nevnes så studenten ikke forvirres av pensumboka.
- **Oppgavesjangre:** E. Mønstereksempel: «Forklar hvilke mekanismer som gjør at en renteøkning demper aktivitetsnivået, og hvorfor gjennomslaget avhenger av multiplikatoren. Hva gjør Phillips-kurvens helning med multiplikatorens størrelse?»
- **Typiske feil:** Utelate én av de tre rentekanalene (hyppigst: valutakurs/eksport-kanalen); glemme prisvirkningen i multiplikatoren — og få kjeden feil vei (riktig: høyere $Y$ → *lavere* ledighet → høyere lønnsvekst → *lavere* eksport); regne på relasjonen uten å forklare den; blande $Z^E$ og $Z^\pi$.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 4.2: RR-relasjonen: reaksjonsfunksjonen fra mandatet — og hva Yⁿ gjør der

- **id:** `econ2310-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ2310-4-1`
- **kapitteltype:** teori
- **description:** RR er ikke en markedslikevekt, men sentralbankens begrunnede regel — utledet fra fleksibel inflasjonsstyring, med potensielt BNP som anker.
- **Forkunnskaper-lenker:** [Renteregelen og RR-kurven](/econ1310/econ1310-5-1), [Lønns- og priskurvemodellen og likevektsledigheten](/econ1310/econ1310-4-1) ($Y^n$/likevektsledighet), [Pengepolitikk i praksis: fleksibel inflasjonsstyring, gradvishet og likviditetsfellen](/econ1310/econ1310-5-6) (mandatet).
- **Eksamensbelegg:** Sjanger F i H2019(1b), H2023(1, 3), H2025(a5); H2021u (formålet med pengepolitikken) — 4/13 = 31 %; H2023(3) spør eksplisitt hva som bestemmer $Y^n$ og hvorfor den står i RR. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE BEGRUNNES AKTIVT: RR-formen $i = Z^i + g_Y (Y - Y^n)/Y^n + g_E Z^E + g_\pi Z^\pi$ (bokstandard; H2022 skriver koeffisientene som $\gamma$-er — gjenkjennes). (i) **RR er en reaksjonsfunksjon, ikke en markedsligning** — den begrunnes fra det pengepolitiske mandatet: inflasjon nær målet + stabil sysselsetting/produksjon (fleksibel inflasjonsstyring). (ii) Hvorfor renta settes opp når $Y > Y^n$: PK gir da prispress — Phillips-kurven er «bakt inn» i koeffisienten $g_Y$. (iii) Hvorfor banken reagerer på eksogene inflasjonsimpulser: kronesvekkelse ($Z^E$), prisvekst hjemme/ute ($Z^\pi$), renteøkning ute. (iv) **$Y^n$ forklares som produksjonsnivået forenlig med stabil inflasjon**, koblet til likevektsledigheten (lønns-/priskurve-apparatet fra 1310): bare $Y = Y^n$ gir inflasjon i tråd med forventningene — derfor reagerer banken på gapet. (v) «Forklar relasjonen»-mal for RR. Arbeidsdelingen mot finanspolitikken og finansielle ubalanser som selvstendig renteargument (H2021u) tas kort her og utdypes i 4.5.
- **Oppgavesjangre:** F. Mønstereksempel: «Renteregelen er oppgitt uten begrunnelse. Forklar hvordan den kan utledes fra det pengepolitiske mandatet, og hvorfor potensielt BNP inngår i regelen.»
- **Typiske feil:** Behandle RR som markedsligning («renta følger regelen» uten begrunnelse); ikke kunne forklare hva som bestemmer $Y^n$; glemme at PK ligger inne i $g_Y$-koeffisienten; utelate valutakurs-/inflasjonsleddene når banken reagerer på importert prispress.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.3: Systemet samlet: PK, likevekten — og høy-β-analysen

- **id:** `econ2310-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ2310-4-2`
- **kapitteltype:** teori
- **description:** De tre relasjonene som system i (Y, i)-diagrammet — og A-spørsmålet fremfor noen: hva skjer når Phillips-kurven er bratt?
- **Forkunnskaper-lenker:** [Phillips-kurven: β-mekanismen og kausalkjeden](/econ1310/econ1310-4-2), [IS-RR-PK-diagrammet: etterspørselssjokk](/econ1310/econ1310-5-2) (det lukkede diagrammet som utgangspunkt).
- **Eksamensbelegg:** PK/Yⁿ-teori i H2023; høy-β-analysen er H2023(5) — eksplisitt «vil skille de aller beste fra de nest beste» (A/B-skillet i settet); systemforståelsen bærer alle skiftanalyser (6/13). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: (i) PK: $\pi = Z^\pi + \beta (Y - Y^n)/Y^n$ — mekanismen bak β (aktivitet → ledighet → lønnsvekst → priser) forutsettes fra 1310 og gjenfortelles kort; (ii) systemet: $Y, i, \pi$ endogene; $Z^D, Z^E, Z^\pi, Z^i, Y^n$ eksogene; alle parametre positive; likevekten i $(Y, i)$-diagram med fallende IS og stigende RR, π bestemt residualt av PK; (iii) telle-/strukturforståelse: hvilke relasjoner et gitt sjokk treffer (forberedelse til 4.4); (iv) **høy-β-analysen (H2023 5)**: når β er særlig stor blir IS brattere *og* RR brattere *og* skiftvirkningen av $Z^D$ mindre — et etterspørselssjokk gir da nesten uendret $Y$ mens $i$ stiger → C og I må falle, handelsbalansen svekkes; økonomien «minner om en bindende tilbudsside» (kobling til rød tråd-kontrasten i kap. 2.2). Poenget: høy β *avklarer* fortegn som var ubestemte i standardtilfellet — dette er typisk A-spørsmål og skal drilles; (v) H2023-varianten av apparatet (β direkte i multiplikatoren, lukket-lignende redusert form) vises som gjenkjenningsøvelse.
- **Oppgavesjangre:** E + G. Mønstereksempel: «Anta at lønns- og prisveksten reagerer svært sterkt på presset i økonomien. Forklar hva dette gjør med kurvene i diagrammet og med virkningen av en finanspolitisk ekspansjon — og hvilke fortegn som nå kan bestemmes.»
- **Typiske feil:** Behandle β som «bare PK-helning» uten å se at den også sitter i IS (via prisdempingen av m) og i RR (via innbakt PK); analysere høy-β-tilfellet som standardtilfellet; glemme at nesten uendret $Y$ + høyere $i$ *tvinger* C og I ned; miste kontrast-poenget (bindende tilbudsside).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Skiftanalyse med panser-åpning: sjokkene gjennom systemet

- **id:** `econ2310-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ2310-4-3`
- **kapitteltype:** teori
- **description:** Standardsjokkene i åpen IS-RR-PK — og sensorens viktigste krav: redusert form viser bare Y og i, en A-besvarelse sporer alt som skjer bak.
- **Forkunnskaper-lenker:** [IS-RR-PK-diagrammet: etterspørselssjokk](/econ1310/econ1310-5-2), [Kostnadssjokk og sentralbankens målkonflikt](/econ1310/econ1310-5-3) (lukket skiftanalyse som base).
- **Eksamensbelegg:** Sjanger G i alle åpen økonomi-sett (6/13 = 46 %): kronesvekkelse H2019(2b)/H2024(4), ΔG H2023(4), etterspørselsfall H2025(a4–a5), prissjokk ute H2022. «Åpne panseret»-kravet gjentas i fire veiledninger. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT — sjokk-katalogen med figur, mekanisme og panser-åpning: (i) **kronesvekkelse ($Z^E$ opp):** både IS og RR skifter opp → $i$ opp *entydig*; **Y-effekten er ubestemt** — avhenger av styrken i sentralbankens valutakursrespons; importerte varer dyrere uansett (KPI opp via α), effekten på norske varepriser ubestemt (kap. 3.2-skillet); (ii) **ΔG > 0 ($Z^D$ opp):** IS til høyre → $Y$ og $i$ opp, krona styrker seg (UIP), ledighet ned, priser opp, handelsbalansen svekkes; **C og I kan gå begge veier** (inntektseffekt opp mot renteeffekt ned); (iii) **fall i privat etterspørsel:** speilvendt; renteresponsen *demper* fallet, nøytraliserer ikke; (iv) **prissjokk ute:** IS ut (bedret konkurranseevne) + RR opp (importert inflasjon) → $i$ opp, krona styrkes; $Y$ kan falle hvis banken er inflasjonsstreng nok. Metodemalen: 1) identifiser hvilke relasjoner sjokket treffer; 2) skift riktig kurve i $(Y, i)$-diagrammet; 3) ny likevekt; 4) mekanismen i ord; 5) **åpne panseret**: spor konsum, investeringer, eksport/import, valutakurs, ledighet og inflasjon (begge begreper); 6) **flagg ubestemte fortegn og si hva de avhenger av** — å signere det usignerbare er feil, å påpeke ubestemtheten er A-adferd.
- **Oppgavesjangre:** G. Mønstereksempel: «Offentlige kjøp øker. Vis i diagrammet hva som skjer med produksjon og rente, og gjør deretter rede for hva som skjer med valutakursen, konsumet, investeringene og handelsbalansen — og hvilke av disse effektene som ikke kan signeres entydig.»
- **Typiske feil:** Stoppe ved $Y$ og $i$ (ikke åpne panseret); signere Y-effekten av kronesvekkelse eller C/I-effekten av ΔG; glemme at kronesvekkelse skifter *begge* kurver; glemme sentralbankens respons langs/i RR; blande hvilke priser som stiger (KPI vs. norske varer).
- **Quiz: 30 · Flashcards: 25**

#### Kapittel 4.5: Penge- vs. finanspolitikk: samme Y, ulik sammensetning

- **id:** `econ2310-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-4-4`
- **kapitteltype:** teori
- **description:** H2025-malen: to virkemidler dosert til samme BNP-effekt — og hvorfor «samme Y» skjuler ulik fordeling på komponentene og ulik valutakurs.
- **Forkunnskaper-lenker:** [Virkemiddellæren: offentlige kjøp, skatt og automatiske stabilisatorer](/econ1310/econ1310-3-1), [Pengepolitikk i praksis: fleksibel inflasjonsstyring, gradvishet og likviditetsfellen](/econ1310/econ1310-5-6).
- **Eksamensbelegg:** Sjanger K i H2025(a5–a7) og H2021u — 2/13 = 15 %, men H2025-malen er fersk og analysen rangerer temaet nivå 2 med retursannsynlighet. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: et etterspørselsfall kan motvirkes enten av sentralbanken (rentekutt via regelen) eller, ved fast rente, av finanspolitikken (økt G/skattekutt). Doseres begge til **samme Y-effekt**, er sammensetningen ulik — komponent for komponent: **pengepolitikk** gir mindre fall i investeringene (lavere rente), større økning i nettoeksporten (svakere krone via UIP), større økning i privat konsum, lavere rente; **finanspolitikk** løfter G direkte uten renteendring — og dermed uten valutakurseffekt. Konklusjonsformen: «samme Y» skjuler ulik fordeling på C, I, G og nettoeksport — og ulik valutakurs. Kvalitativt tillegg (H2021u): arbeidsdelingen mellom Norges Bank og statsbudsjettet; finansielle ubalanser som selvstendig argument i rentesettingen. Ingen likviditetsfelle-/handlingsregel-teori her (1310-stoff, testes ikke i 2310).
- **Oppgavesjangre:** K. Mønstereksempel: «Et investeringsfall motvirkes i ett scenario av sentralbanken, i et annet av finanspolitikken — begge slik at BNP blir uendret. Sammenlign de to scenarioene komponent for komponent, og forklar hvorfor valutakursen bare endres i det ene.»
- **Typiske feil:** Konkludere med at virkemidlene er «like» fordi Y er lik; glemme valutakurs-/nettoeksportforskjellen; blande inn 1310-temaer (handlingsregel, likviditetsfelle) som selvstendige poenger; ikke dosere eksplisitt (sammenligningen forutsetter samme Y-effekt).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.6: Drill: skiftanalyse i åpen IS-RR-PK

- **id:** `econ2310-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** `econ2310-4-5`
- **kapitteltype:** drill
- **description:** Hele sjokk-katalogen gjennom systemet, med sensor-kommentert eksempelbesvarelse og panser-åpning i hver eneste oppgave.
- **Forkunnskaper-lenker:** ingen utover Del 3–4.
- **Eksamensbelegg:** Dekker sjangrene E + F + G + H samlet — blokken som bærer 2022–2025 (4 ordinære sett på rad) og 6/13 totalt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) forklar relasjonene du skal bruke (2–4 setninger hver — aldri hopp over); 2) klassifiser sjokket: hvilke relasjoner treffes ($Z^D$ → IS; $Z^E$ → IS *og* RR; $Z^\pi$ → RR og PK; $Z^i$ → RR); 3) retning; 4) tegn skiftet, marker gammel og ny likevekt; 5) mekanisme i ord inkludert sentralbankens respons; 6) åpne panseret: C, I, eksport/import, E, ledighet, π (KPI *og* norske varer); 7) flagg ubestemte fortegn med hva de avhenger av; 8) møt halen (høy β, dosering, aktualitetsvri) med grepene fra 4.3/4.5/Del 6. Gjennomregnet eksamenscase med sensor-margnotater. 10–15 oppgaver på eksamensnivå som roterer: kronesvekkelse/-styrking, ΔG i begge retninger, privat etterspørselsfall, prissjokk ute, renteøkning ute, tillitsskifte i $E^e$, høy-β-varianter og kombinasjonssjokk — alle med nyskrevne kontekster.
- **Oppgavesjangre:** E, F, G, H, K. Mønstereksempel (full kjede à la H2023): «(1) Forklar de tre oppgitte relasjonene. (2) Hvorfor demper en brattere Phillips-kurve multiplikatoren? (3) Hva bestemmer potensielt BNP, og hvorfor inngår det i renteregelen? (4) Utenlandske renter settes kraftig opp — analyser virkningen på produksjon, rente, valutakurs og inflasjon, og pek på hva som ikke kan signeres. (5) Hva endres i analysen hvis lønnsveksten er svært følsom for presset i økonomien?»
- **Typiske feil:** Hele katalogen fra 4.1–4.5 samlet; drill-spesifikt: gjenta hele modellforklaringen for hvert delspørsmål (forklar én gang, referer siden); tømme sekken i stedet for å svare på spørsmålet.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A «forklar IS»: tre kanaler + multiplikator med prisvirkning, 40 min, sjanger E; 4.B «forklar RR + Yⁿ»: reaksjonsfunksjon fra mandatet, 35 min, sjanger F; 4.C skiftanalyse: to sjokk med full panser-åpning, 50 min, sjanger G; 4.D full modelloppgave på eksamensnivå med høy-β- eller doserings-hale, 60 min, sjanger E + F + G + K).

---

### Del 5 — Hovedkursmodellen og lønnsdannelse

#### Kapittel 5.1: Hovedkurslogikken: frontfag, to sektorer og relasjonssettet

- **id:** `econ2310-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-3-1`
- **kapitteltype:** teori
- **description:** Frontfagslogikken på vekstrateform — og relasjonen eksamen aldri oppgir: KPI-definisjonen du må legge til selv.
- **Forkunnskaper-lenker:** [Frontfagsmodellen og koordinert lønnsdannelse](/econ1310/econ1310-4-3), [Lønns- og priskurvemodellen og likevektsledigheten](/econ1310/econ1310-4-1).
- **Eksamensbelegg:** Sjanger I i H2022 og H2024 — 2/13 = 15 %, men begge ganger som **likestilt inngang** ved siden av IS-RR-PK i store drøftingsoppgaver, og naturlig komplement i alle «prissjokk ute»-scenarier. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE FORKLARES AKTIVT: (i) logikken — konkurranseutsatt sektor (K-sektor) er lønnsledende (frontfaget): lønnsevnen der bestemmes av priser og produktivitet i verdensmarkedet; skjermet sektor priser seg etter lønn og produktivitet; (ii) relasjonssettet på **vekstrateform** (små bokstaver = vekstrater): $p_s = w - z_s$ (skjermet sektor), $w = p_k + z_k + k$ (lønnsveksten følger K-sektors priser og produktivitet; $k$ = ekstraordinær lønnsvekst), $p_k = q_k + v$ og $p_i = q_i + v$ (kronepriser = utenlandske priser + valutakursvekst); tolk hver relasjon med ord («forklar relasjonen»-malen); (iii) **KPI-definisjonen som eksamen IKKE oppgir og som skal legges til selv**: $\pi = \alpha p_i + (1-\alpha)p_s$ — dette suppleringsgrepet er eksplisitt belønnet (H2022) og drilles som refleks; merknad: H2024 kaller den $\pi^C$, forelesningene bruker annet symbol — settene bemerker det selv, studenten skal ikke la seg forvirre; (iv) vekstrateform-konvensjonen forklares (nivå vs. vekstrate — hvorfor alle relasjoner er i prosentvise endringer).
- **Oppgavesjangre:** I. Mønstereksempel: «Relasjonssettet for lønns- og prisdannelsen er oppgitt uten forklaring. Gjør rede for den økonomiske logikken bak hver relasjon — og pek på hvilken relasjon som mangler for å si noe om konsumprisveksten.»
- **Typiske feil:** Ikke legge til inflasjonsdefinisjonen selv (settet oppgir den ikke); blande nivåer og vekstrater; snu frontfagslogikken (skjermet sektor som lønnsledende); tolke $k$ som produktivitet (det er *ekstraordinær lønnsvekst* — full tolkning i 5.3).
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 5.2: Utledningene: inflasjon og reallønnsvekst av hovedkursen

- **id:** `econ2310-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ2310-5-1`
- **kapitteltype:** teori
- **description:** Fra relasjonssettet til uttrykkene for π og w − π, steg for steg — og spesialtilfellet som gir de eksamensklare konklusjonene.
- **Forkunnskaper-lenker:** ingen utover kap. 5.1.
- **Eksamensbelegg:** Kjerneøvelsen i sjanger I (H2022, H2024): kombiner relasjonene til uttrykk for inflasjonen og reallønnsveksten, og analyser sjokket (typisk prisvekst ute). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT, med intuisjon per steg: sett $w = p_k + z_k + k$ inn i $p_s = w - z_s$, og begge inn i $\pi = \alpha p_i + (1-\alpha)p_s$:
  $$\pi = \alpha q_i + (1-\alpha)q_k + v + (1-\alpha)(z_k + k - z_s)$$
  $$w - \pi = \alpha(q_k - q_i) + \alpha z_k + (1-\alpha)z_s + \alpha k$$
  **Spesialtilfellet** $q_k = q_i = \pi^*$, $z_k = z_s = z$: $\pi = \pi^* + v + (1-\alpha)k$ og $w - \pi = z + \alpha k$. Kjerneresultatene som skal kunne formuleres: med lik prisvekst ute og lik produktivitetsvekst stiger norsk inflasjon én-til-én med utenlandsk (gitt kurs), mens reallønnsveksten er upåvirket av utenlandsk prisvekst; skal inflasjonen holdes nede (inflasjonsmål) uten kronestyrking, må $k$ være negativ. Sjokkanalysen: internasjonalt prisløft ($q_k, q_i$ høye) gjennom begge uttrykk — hva skjer med π og w − π, og hvilke ledd bærer effekten.
- **Oppgavesjangre:** I. Mønstereksempel: «Prisene på både import- og eksportvarer stiger internasjonalt. Bruk hovedkursmodellen til å avgjøre hva som skjer med norsk inflasjon og reallønnsvekst — utled uttrykkene du trenger, og tolk hvert ledd.»
- **Typiske feil:** Regnefeil i innsettingen (drill mellomregningene); glemme å supplere π-definisjonen før utledningen; utlede uten å tolke leddene økonomisk (mekanisk = C-nivå); ikke kunne spesialtilfellets rene konklusjoner.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Tolkningen av k — og samspillet med IS-RR-PK

- **id:** `econ2310-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-5-2`
- **kapitteltype:** teori
- **description:** Det obligatoriske tolkningskravet: hva fortegnet på den ekstraordinære lønnsveksten betyr — og hvordan hovedkursen og IS-RR-PK brukes som to innganger til samme spørsmål.
- **Forkunnskaper-lenker:** [Skiftanalyse med panser-åpning](/econ2310/econ2310-4-4) er intern; kryssbok: [Frontfagsmodellen og koordinert lønnsdannelse](/econ1310/econ1310-4-3).
- **Eksamensbelegg:** Tolkningen av $k$ er flagget som obligatorisk i både H2022 og H2024; sensor belønner eksplisitt at hovedkurs og IS-RR-PK brukes som **komplementære innganger** (hovedkursen for lønns-/prisdannelsen, IS-RR-PK for aktivitet og rente) — ingen premie for flest mulig modeller, men for at modell nr. 2 tilfører noe. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: (i) **tolkningen av $k$**: $k$ er lønnsvekst utover hovedkursen — **positiv $k$** presser lønnsomheten i K-sektor og varsler nedleggelser/utflytting; **negativ $k$** gir økte overskudd (og på sikt etableringer); negativ $k$ betyr at reallønnsveksten blir lavere enn produktivitetsveksten tilsier ($w - \pi = z + \alpha k < z$); (ii) politikk-koblingen fra 5.2: inflasjonsmål uten kronestyrking krever negativ $k$ når prisveksten ute er høy; (iii) **samspillsmetoden** (H2022/H2024-formen): samme sjokk (f.eks. internasjonalt prisløft) analyseres med begge apparater — hovedkursen svarer på lønns- og prisdannelsen (π, w − π, k-presset), IS-RR-PK på aktivitet, rente og valutakurs; en A-besvarelse lar konklusjonene møtes (f.eks. renteresponsen fra RR påvirker $v$, som går inn i hovedkursens kronepriser); (iv) disponeringsregelen: si eksplisitt hvilken modell som brukes til hva.
- **Oppgavesjangre:** I + G. Mønstereksempel: «Internasjonal prisvekst skyter fart. Bruk hovedkursmodellen til å analysere lønns- og prisdannelsen, og rente-/aktivitetsmodellen til å analysere pengepolitikken — og forklar hva fortegnet på den ekstraordinære lønnsveksten betyr for konkurranseutsatt sektor.»
- **Typiske feil:** Utelate k-tolkningen (obligatorisk); bruke to modeller uten at den andre tilfører noe; motstridende konklusjoner fra de to apparatene uten kommentar; glemme at valutakursen er broen mellom dem.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 5:** 4 prøver (5.A relasjonsforklaring + suppler π-definisjonen, 30 min, sjanger I; 5.B utledningene av π og w − π med spesialtilfellet, 45 min, sjanger I; 5.C k-tolkning og politikk-koblingen, 30 min, sjanger I; 5.D samspillsoppgave hovedkurs + IS-RR-PK på eksamensnivå (prissjokk ute), 60 min, sjanger I + G).

---

### Del 6 — Drøfting og aktualitet

#### Kapittel 6.1: Fra nyhetsbilde til sjokkvariabel: aktualitetsoversettelsen

- **id:** `econ2310-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2310-4-4`
- **kapitteltype:** teori
- **description:** Sjangeren som dukker opp i 7 av 13 sett: oversette et dagsaktuelt fenomen til modellenes eksogene variabler og resonnere stringent.
- **Forkunnskaper-lenker:** [Fra nyhetsbilde til modell: aktualitetstrening](/econ1310/econ1310-6-3) (1310-versjonen av samme øvelse — 2310-varianten har andre modeller og friere form).
- **Eksamensbelegg:** Sjanger L i 7/13 sett (54 %): global CO₂-avgift (H2019), covid (H2020, H2021), internasjonalt prissjokk (H2022), sitat fra Nasjonalbudsjettet (H2024), KI/roboter (H2025), Pengepolitisk rapport-utdrag (H2021u). Sensor gir eksplisitt rom for kreativitet så lenge analysen henger sammen; disse delspørsmålene vurderes mildere og er A-differensiatorer. Prioritet: **kunne**.
- **Innholdskontrakt:** Oversettelseskatalogen som SKAL med (alle omskrevet fra analysen): (i) **CO₂-avgift/oljeprisfall:** oljeinvesteringer ($Z^D$) ned; oljefondet vokser mindre → lavere fremtidig etterspørsel; motpost: grønne investeringer opp; aktiviteten ute kan falle; (ii) **pandemi i Solow-språk:** dødelighet/lavere $n$, tvungen sparing ($s$ opp) mot få lønnsomme prosjekter ($s$ ned), produktivitetsfall ($f$ ned), kapitalslit begge veier (maskiner står stille vs. ruster); (iii) **internasjonalt prissjokk:** $q_k, q_i$ opp (hovedkurs) + $Z^\pi$/IS-skift (IS-RR-PK); (iv) **KI/roboter:** se kap. 6.3; (v) **dagens bilde (nyskrevne caser):** forsvarsopprustning ($Z^D$/ΔG), handelspolitikk/tollsjokk (eksportetterspørsel + importpriser), kronekursdebatt ($E^e$/risikopremie). Metoden: 1) identifiser hvilke modeller som er relevante; 2) oversett fenomenet til eksogene variabler — én hendelse kan være flere sjokk med motsatt retning (si det!); 3) kjør standardanalysen; 4) vær eksplisitt på forutsetninger og usikkerhet. Sitat-/utdragshåndtering (H2024-formen): les utdraget, plukk påstandene som kan oversettes, analyser dem — ikke kommenter alt.
- **Oppgavesjangre:** L. Mønstereksempel: «En internasjonal klimaavtale gjør fossil energi vesentlig dyrere. Oversett hendelsen til modellenes eksogene variabler — pek på minst to motstridende effekter — og analyser konsekvensene for norsk økonomi.»
- **Typiske feil:** Overse at én hendelse er flere sjokk; velge modell før fenomenet er oversatt; kreativ historie uten modellforankring (motsatt felle: modell uten kobling til fenomenet); miste spørsmålet av syne.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 6.2: Todelt økonomi: asymmetriske sjokk og målrettet politikk

- **id:** `econ2310-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ2310-6-1`
- **kapitteltype:** teori
- **description:** Korona-modellens ramme: to sektorer med kryssvise ringvirkninger — gjenbrukbar for alle asymmetriske sjokk.
- **Forkunnskaper-lenker:** [Multiplikatoren på tilvekstform: kjerneteknikken](/econ1310/econ1310-2-2) (multiplikatorlogikken per sektor).
- **Eksamensbelegg:** H2021 (hovedinnslag) og H2021u (mulig modellvalg) — 2/13 = 15 %; bygger på Mehlums artikkel om todelt koronaøkonomi (ROKE 2021). Analysen: gjenbrukbar ramme for alle asymmetriske sjokk. Prioritet: **kunne** (kvalitativt).
- **Innholdskontrakt:** Kvalitativ beherskelse (ingen formell utledning kreves): to sektorer (varer/tjenester) med hver sin multiplikator og **kryssvis etterspørsel**; en nedstengingsparameter i tjenestesektoren smitter til varesektoren via ringvirkninger (inntektsbortfall hos tjenesteansatte → lavere vareetterspørsel); politikkanalysen: (i) offentlige kjøp rettet mot den *åpne* sektoren gir mest etterspørsel per krone (ingen sparelekkasje mot stengte tilbud); (ii) overføringer til ledige demper ulikhet og hindrer videre smitte av ledighet; (iii) generell stimulans treffer dårlig når én sektor er administrativt stengt. Generalisering: rammen brukes på alle asymmetriske sjokk (sektorspesifikke tollsjokk, energipriser som treffer industrien, reiselivssvikt).
- **Oppgavesjangre:** L. Mønstereksempel: «Et smitteverntiltak stenger deler av tjenestesektoren, mens vareproduksjonen kan fortsette. Forklar hvordan nedstengingen likevel rammer varesektoren, og drøft hvilke finanspolitiske virkemidler som gir mest per krone i denne situasjonen.»
- **Typiske feil:** Analysere som ett aggregert etterspørselssjokk (mister hele poenget); glemme kryssvirkningen (ringvirkningene); anbefale generell stimulans mot en administrativt stengt sektor; drøfte uten fordelingsargumentet.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 6.3: Beredskapsstoff: kriselikevekter og KI i vekstmodellen *(bør kjenne til)*

- **id:** `econ2310-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ2310-1-6`
- **kapitteltype:** teori
- **description:** To lavfrekvente, men billige temaer: endogen risikopremie med flere likevekter — og roboter som «nye arbeidere» i nyklassisk vekst.
- **Forkunnskaper-lenker:** [Penger, banker og finanssystemet](/econ1310/econ1310-1-3) (risikopremie i lånerenten).
- **Eksamensbelegg:** Kriselikevekter: kun H2022u (1/13 = 8 %) — men kombinerer flere likevekter-grepet (kap. 1.6) med IS-logikk og kan dukke opp ordinært. KI/roboter: H2025(b2) (1/13 = 8 %) — ny sjanger, analysen: «forvent gjentakelse», lav kostnad å dekke. Prioritet: **kjenne** — dette stoffet merkes eksplisitt «bør kjenne til» og legges ETTER kjernestoffet.
- **Innholdskontrakt:** Kvalitativt, kompakt: (i) **kriselikevekter med endogen risikopremie** (H2022u-varianten): lånerenta stiger når aktiviteten faller (bankenes risikovurdering) → selvforsterkende spiral → flere likevekter i IS-logikken; midlertidige sjokk kan flytte økonomien varig ned i en lavlikevekt; finanspolitikk kan løfte den tilbake over terskelen — samme grep som fattigdomsfella, anvendt på kort sikt; (ii) **KI/roboter i vekstmodellen** (H2025 b2-varianten): roboter som «nye arbeidere» byr ned lønna til vanlig arbeidskraft, og «robotlønna» tilfaller eierne — funksjonell inntektsfordeling; eier arbeiderne robotene (direkte eller via fond), kan samlet inntekt likevel stige; KI som *produktivitetsforsterker* for eksisterende arbeidere trekker derimot lønna opp — svaret avhenger av hva teknologien gjør (erstatter vs. forsterker) og hvem som eier den.
- **Oppgavesjangre:** D + L. Mønstereksempel: «Diskuter kort hvordan kunstig intelligens påvirker lønningene, og hvorfor svaret avhenger av både hva KI gjør og hvem som eier teknologien.»
- **Typiske feil:** Signere KI-effekten på lønn uten skillet erstatte/forsterke; glemme eierskapsdimensjonen; behandle kriselikevekten som ordinær konjunkturnedgang (poenget er varigheten/terskelen); bruke uforholdsmessig lesetid her — det er nivå 3-stoff.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 6.4: Den store drøftingsoppgaven: metode for H2022/H2024-formen

- **id:** `econ2310-6-4` · **number:** 6.4 · **estimatedMinutes:** 60 · **prerequisites:** `econ2310-5-3`, `econ2310-6-1`
- **kapitteltype:** drill
- **description:** Én stor oppgave uten deloppgaver, to relasjonssett og 3 timer: disponering, modellvalg og regelen «ikke mist spørsmålet av syne».
- **Forkunnskaper-lenker:** ingen utover Del 4–6.
- **Eksamensbelegg:** H2022 og H2024 var **én stor drøftingsoppgave** uten deloppgaver, med to oppgitte relasjonssett (hovedkurs + IS-RR-PK) og invitasjonen «kombinér gjerne innsikt fra flere modeller»; H2024 i tillegg sitatbasert (utdrag fra Nasjonalbudsjettet). Formuleringen «bruk modellene på en konstruktiv og informert måte og ikke mist spørsmålet av syne» avslutter begge veiledningene. H2023 krever at kandidaten «disponerer besvarelsen og ser koblingene mellom delene». Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift for formen: 1) les spørsmålet to ganger — formuler med egne ord hva som faktisk spørres; 2) diagnostiser scenariet i modellspråk (hvilke sjokk, hvilke eksogene variabler); 3) velg innganger: hvilket relasjonssett svarer på hva (hovedkurs → lønn/priser; IS-RR-PK → aktivitet/rente/valutakurs) — og si det eksplisitt; 4) **forklar relasjonene du bruker** før du bruker dem; 5) disponér med mellomtitler; 6) analyser — åpne panseret, flagg ubestemtheter; 7) la modellene *møtes* (valutakursen som bro); 8) avslutt med å svare direkte på spørsmålet — ikke med sammendrag av alt du kan. Sitathåndteringen fra 6.1 gjentas i drillform. Sensor-kommentert eksempelbesvarelse (nyskrevet scenario: internasjonalt kostnadssjokk med svak krone) med margnotater om disponering og uttelling. 6–10 drøftingsoppgaver i formen, inkludert minst to sitatbaserte (nyskrevne, oppdiktede utdrag).
- **Oppgavesjangre:** G + I + L kombinert (formen). Mønstereksempel: «"Prisveksten hos handelspartnerne er fortsatt høy, og kronen har svekket seg gjennom året." Diskutér konsekvensene for norsk inflasjon, reallønn og rentesetting. To relasjonssett er oppgitt og kan komme til nytte.»
- **Typiske feil:** Tømme sekken (gjengi alt om begge modeller i stedet for å analysere det konkrete spørsmålet); bruke to modeller uten at nr. 2 tilfører noe; ingen disposisjon (vurderes ved toppkarakter); regne uten å forklare relasjonene; kommentere hele sitatet i stedet for de analyserbare påstandene.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A aktualitetsoversettelse: fire hendelser → sjokkvariabler med begrunnelse, 35 min, sjanger L; 6.B todelt økonomi-analyse av asymmetrisk sjokk, 35 min, sjanger L; 6.C beredskapstemaene: kriselikevekt + KI-drøfting, 30 min, sjanger D + L; 6.D miniatyr-drøftingsoppgave i H2022/H2024-form med oppdiktet sitat, 60 min, sjanger G + I + L).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Drill: «forklar relasjonen» — sjangeren på tvers av pensum

- **id:** `econ2310-7-1` · **number:** 7.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–6
- **kapitteltype:** drill
- **description:** Emnets viktigste enkeltferdighet drillet isolert: 2–5 presise setninger per relasjon, for hvert relasjonssett i pensum.
- **Forkunnskaper-lenker:** ingen (oppsummerende drill).
- **Eksamensbelegg:** Sensorens metaregel nr. 1 i samtlige veiledninger: relasjonene oppgis uforklart, og forklaring *forventes* — H2022, H2024 og H2025 skriver det eksplisitt i settet; å regne på uforklarte ligninger gir ikke uttelling; «å legge til de manglende relasjonene selv» (π-definisjonen, UIP-formen, Solow-oppsettet fra verbale egenskaper) er dokumentert A-adferd. Prioritet: **perfekt**.
- **Innholdskontrakt:** Forklaringsmal per relasjon (definer symbolene → økonomisk logikk → fortegn/mekanisme → hva som er eksogent): dekker **hele relasjonsbiblioteket**: Solow-bevegelsesligningen (med og uten $g$), golden rule-betingelsen, IS (tre kanaler + m med dempere), RR (fra mandatet, med $Y^n$-forklaring), PK (kausalkjeden), UIP, hovedkursens fire relasjoner + den supplerte π-definisjonen, Keynes-krysset/spareparadoks-oppsettet. I tillegg: «legg til det som mangler»-øvelser (gitt et amputert relasjonssett — hvilken relasjon må du selv supplere for å svare?) og gjenkjenningsøvelser på tvers av notasjonsvarianter ($\gamma$ vs. $s$, $d$ vs. $\delta$, $\gamma$-koeffisienter vs. $g$-koeffisienter, H2023s lukket-lignende form). 12–15 oppgaver: «Relasjonssettet under er oppgitt uten forklaring — forklar hver relasjon slik at en sensor ser at du forstår den, og pek på hva som mangler.»
- **Oppgavesjangre:** E, F, H, I, A (forklaringsdimensjonen av alle). Mønstereksempel: «Nedenfor står tre relasjoner uten forklaring. Gi en presis økonomisk begrunnelse for hver — maks fem setninger per relasjon — og angi hvilken relasjon du selv må legge til for å analysere konsumprisveksten.»
- **Typiske feil:** Parafrasere symbolene i stedet for å forklare økonomien («renta avhenger av Y» er ikke en forklaring); for lange forklaringer (presisjon > volum); glemme suppleringsrefleksen; stivne når notasjonen avviker fra bokas standard.
- **Quiz: 25 · Flashcards: 45**

#### Kapittel 7.2: Øvingseksamen 1: H2025-malen — åpen økonomi 75 % + vekst/Keynes 25 %

- **id:** `econ2310-7-2` · **number:** 7.2 · **estimatedMinutes:** 180 · **prerequisites:** `econ2310-7-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter den nyeste ordinære malen med eksplisitt vekting og b-oppgave.
- **Eksamensbelegg/miks:** Speiler H2025-formen: **oppgave a (75 %, 6–7 delspørsmål, åpen økonomi):** relasjonssett oppgitt uforklart → valutakursdrivere (UIP) → rentens kanaler → skiftanalyse av et privat etterspørselsfall med panser-åpning → penge- vs. finanspolitikk dosert til samme Y → «kinkig» hale (høy β eller doserings-vri); **oppgave b (25 %):** b1 spareparadokset, b2 et vekst-/aktualitetsspørsmål (KI-typen) — kontrasten tilbud/etterspørsel skal kunne introduseres uoppfordret. Alle oppgaver nyskrevne (nye scenarioer, nye formuleringer). Løsningsforslag som A-besvarelse i `collapsible` per delspørsmål, med `tip`-notat om vekting og tidsbudsjett (135 min / 45 min) og margnotater om hvor forklaringspoengene ligger.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2: H2022/H2024-malen — én stor drøftingsoppgave med to relasjonssett

- **id:** `econ2310-7-3` · **number:** 7.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ2310-7-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i den åpne formen: sitatforankret drøfting uten deloppgaver, hovedkurs og IS-RR-PK som komplementære innganger.
- **Eksamensbelegg/miks:** Speiler H2022/H2024-formen: et oppdiktet, nyskrevet utdrag i nasjonalbudsjett-stil (internasjonalt kostnadssjokk + svak krone + stramt arbeidsmarked) etterfulgt av **én stor drøftingsoppgave** («diskutér konsekvensene for inflasjon, reallønn, aktivitet og rentesetting») med to oppgitte relasjonssett: hovedkursmodellen (uten π-definisjonen — den skal suppleres!) og åpen IS-RR-PK. Løsningsforslaget er en full A-besvarelse med disposisjon, «forklar relasjonen»-avsnitt, samspillsanalyse og eksplisitt flagging av ubestemte fortegn — pluss `tip`-notater om hva som skiller B fra A (disponering, koblingene, ikke miste spørsmålet av syne).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3: utsatt-malen — ren Solow

- **id:** `econ2310-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ2310-7-3`
- **kapitteltype:** øvingseksamen
- **description:** Generalprøven på vekstblokken: hele Solow-kjeden fra verbalt oppsett til flere likevekter-vri, i utsatt-settenes faste mal.
- **Eksamensbelegg/miks:** Speiler H2023u/H2024u/H2025u-malen (og en sannsynlig ordinær vekst-retur): 8–9 nummererte spørsmål i én kjede — «sett opp en modell med fire hovedegenskaper» → begrunn antakelsene → likevekt grafisk → tilpasningsbane over tid → komparativ statikk (to av $s$/$n$/$\delta$) → produktivitetsvekst-spørsmål ($g$ opp: nivå vs. bane) → utvidelses-vri (endogen $n$ eller trappetrinns-$s$ → to likevekter → felle-drøfting) → kort aktualitetshale i Solow-språk (pandemityper/KI). Alle spørsmål nyskrevne. Løsningsforslag som A-besvarelse med figurer beskrevet slik sensor forventer dem, «positivt feil»-presiseringen demonstrert, og `tip`-notat om at de siste spørsmålene vurderes mildere men skiller A fra B.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.7 | 20+25+30+20+20+20+20 = **155** | 25+25+30+20+20+20+10 = **150** |
| 2 | 2.1–2.2 | 20+15 = **35** | 15+15 = **30** |
| 3 | 3.1–3.2 | 25+15 = **40** | 25+15 = **40** |
| 4 | 4.1–4.6 | 30+25+20+30+15+20 = **140** | 30+25+20+25+15+10 = **125** |
| 5 | 5.1–5.3 | 15+20+15 = **50** | 20+20+15 = **55** |
| 6 | 6.1–6.4 | 15+10+10+10 = **45** | 20+15+10+10 = **55** |
| 7 | 7.1–7.4 | 25+5+5+5 = **40** | 45+0+0+0 = **45** |
| **Sum** | **29 kap.** | **515 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Denne tabellen er **AUTORITATIV for alle senere faser** (byggekontrakt,
byggebølge, verifisering). Kvotene er minimum per kapittel; forfatteren kan
overskyte, aldri underskride. Fordelingen speiler frekvens: Del 1 + Del 4
(hovedblokkene, nivå 1) bærer 295 av 515 quiz.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
og poengfordeling. Prøvene er spesifisert i «Prøve-kvote Del N»-blokkene over;
samlet oversikt:

| Del | Prøver | Sjangre dekket |
|---|---|---|
| 1 | 1.A oppsett/begrunnelser · 1.B steady state + figurer · 1.C komparativ statikk · 1.D full Solow-kjede m/utvidelses-hale | A, B, C, D |
| 2 | 2.A spareparadoks · 2.B H2018-varianten i diagram · 2.C kontrast-essay · 2.D b-oppgave-simulering | J, D |
| 3 | 3.A UIP fra investoradferd · 3.B fortegnsdrill krona · 3.C KPI vs. norske varepriser · 3.D integrert valutakursanalyse | H, G |
| 4 | 4.A forklar IS · 4.B forklar RR + Yⁿ · 4.C skiftanalyse m/panser-åpning · 4.D full modelloppgave m/hale | E, F, G, K |
| 5 | 5.A relasjonsforklaring + π-supplering · 5.B utledningene · 5.C k-tolkning · 5.D samspill hovedkurs/IS-RR-PK | I, G |
| 6 | 6.A aktualitetsoversettelse · 6.B todelt økonomi · 6.C beredskapstemaer · 6.D miniatyr-drøfting m/sitat | L, D, G, I |

Prøvene legges som prøvekapitler `econ2310-<del>-prove` med chapterNumber
`<del>.P` etter byggekontraktens spesifikasjon.

### Øvingseksamener (3 komplette sett — kap. 7.2–7.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | H2025 (nyeste ordinære) | Oppgave a 75 % åpen økonomi (UIP → kanaler → skiftanalyse → dosering → kinkig hale) + oppgave b 25 % (spareparadoks + vekst/KI) |
| Øvingseksamen 2 (kap. 7.3) | H2022/H2024 (stor drøfting) | Oppdiktet sitat + én drøftingsoppgave uten deloppgaver, to relasjonssett (hovedkurs uten π-definisjon + IS-RR-PK) |
| Øvingseksamen 3 (kap. 7.4) | Utsatt-malen (H2023u–H2025u) | Ren Solow-kjede: oppsett → figurer → komparativ statikk → g → flere likevekter → aktualitetshale |

Til sammen dekker de tre settene samtlige 12 sjangre (A–L) minst én gang, og
alle tre historiske eksamensformer.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 t, få store oppgaver, relasjonssett
   uforklart, vekting normalt ikke oppgitt), rotasjonsmønsteret vekst ↔ åpen
   økonomi, utsatt-mønsteret (ren Solow) og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 1 Solow komplett m/utvidelser, Del 3 UIP, Del 4 IS-RR-PK
   m/forklaringer og skiftanalyse, kontrasten i 2.2 som A-markør), kunne
   (Del 2, Del 5 hovedkursen, penge/finans-dosering, aktualitetsoversettelsen,
   todelt økonomi), kjenne (kap. 6.3: kriselikevekter, KI/roboter,
   FDI-nyansen i Solow).
3. **Sjangerguiden** — de 12 oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (1.7, 4.6, 6.4, 7.1) i kortform.
4. **Sensorreglene** — de seks metareglene (forklar relasjonene; ikke mist
   spørsmålet av syne; åpne panseret; presiser forutsetninger og vær
   konsekvent; figurer er førsteklasses svar; helhet slår plettfrihet) +
   karakterskille-listen (selvstendig begrepsbruk, supplere manglende
   relasjoner, to modeller i samspill, se hva som er ubestemt) fra kap. 0.1.
5. **Feilkatalogen** — de 12 typiske feilene samlet (K/Y-konstans-fellen,
   manglende rentekanal, glemt prisvirkning, KPI vs. norske varer, snudd
   valutakursfortegn, RR som markedsligning, regne uten å forklare, miste
   spørsmålet, inkonsistente forutsetninger, signere det usignerbare,
   sparerate vs. konsumtilbøyelighet, glemt tilpasningsbane), hver med
   henvisning til kapitlet som forebygger den.
6. **Relasjonsbiblioteket** — alle relasjonssett i bokas standardnotasjon på
   én side (Solow ± g, golden rule, IS/RR/PK åpen form, UIP, hovedkursens
   fem relasjoner inkl. den supplerte π-definisjonen, Keynes-krysset), hver
   med markering «forklaringsmal i kap. X.Y» og utlede aktivt vs. kun bruke.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 (vekstblokken + kontrasten) → 3 → 4 (åpen økonomi-blokken)
   → 5 → 6, prøver underveis; øvingseksamenene de tre siste ukene under
   tidspress (180 min, vektstyrt tidsbudsjett), i rekkefølgen 7.2 → 7.3 → 7.4;
   7.1 («forklar relasjonen»-drillen) repeteres siste uka.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ2310` med alle 29
   kapitler + prøvekapitler (id/number/title/description/estimatedMinutes/
   topics/prerequisites), `sectionNames` fra §2-tabellen, etter mønsteret i
   `src/lib/data/textbook-courses-hoyskole.ts` (econ1310-oppføringen).
   Navigasjon: «ECON2310 Makroøkonomi 2» under UiO i
   `src/app/trinn/hoyere/institusjoner.ts`.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L og frekvenstallene som
   resten refererer til.
3. **Hovedblokkene i avhengighetsrekkefølge**: Del 1 (Solow) → Del 2
   (kontrasten trenger 1.3) → Del 3 (UIP, uavhengig) → Del 4 (krever 3.1) →
   Del 5 (krever 3.1) → Del 6 (krever 4.4/5.3/1.6).
4. Del 7 til slutt — øvingseksamenene gjenbruker alt; 7.1 refererer alle
   relasjonssett.
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene som egne prøvekapitler
   `econ2310-<del>-prove` etter hver temadel.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load` (generer
      gjerne via `json.dump`); `npm run build` grønn.
- [ ] **LaTeX**: alle ligninger i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistente symboler ($s$, $\delta$, $n$, $g$, $k^*$, $f'(k)$, $Z^D$,
      $Z^E$, $Z^\pi$, $Z^i$, $Y^n$, $g_Y$, $g_E$, $g_\pi$, $i^F$, $E^e$,
      $\kappa$, $\beta$, $\alpha$, $p_s$, $p_k$, $p_i$, $q_k$, $q_i$, $v$,
      $z_k$, $z_s$, $k$, $\pi$, $w$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ2310-filer — forbudte
      termer: «LM-kurve», «IS-LM», «AD-AS», «Ramsey», «OLG», «DSGE» (unntatt
      Del 0-avsnittet som eksplisitt avgrenser); sparerate skrives $s$ i bokas
      egen fremstilling ($\gamma$ kun i gjenkjenningsøvelser, tydelig merket).
- [ ] **«Forklar relasjonen»-mal** finnes i hvert modellkapittel (1.1, 2.1,
      3.1, 4.1, 4.2, 4.3, 5.1) og drilles i 7.1.
- [ ] **Ubestemte fortegn flagges** overalt der analysen krever det
      (Y ved kronesvekkelse, C/I ved ΔG, langsiktig konsum ved s-økning,
      norske varepriser ved kurssjokk) — aldri signert.
- [ ] **«Positivt feil»-presiseringen** (K og Y vokser med n i steady state)
      står i 1.2, 1.7 og øvingseksamen 3.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      tallene fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker
      til econ1310 (KUN lenker til kapitler som finnes — id-ene i dette
      skjelettet er verifisert mot econ1310-skjelettet), Symbol- og
      formelliste-`collapsible` per delkapittel, Typiske feil-`warning`,
      2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints` og eksplisitt sjangerforankring, repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15
      oppgaver.
- [ ] **Ingen tallregningsoppgaver** — alle øvinger er symbolske, grafiske
      eller verbale (grafbeskrivelser i løsningene der sensor forventer figur).
- [ ] **Quiz-sum ≥ 515 og flashcard-sum ≥ 510** per kvotetabellen
      (kontrollsummér mot §3-tabellen; flashcards kun fra toppnivå
      `definition`-blokker med `title`).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener som sammen
      dekker sjangrene A–L og alle tre eksamensformer.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne scenarioer, egne
      formuleringer, egne (fiktive) sitater; ingen formuleringer fra reelle
      sett eller sensorveiledninger (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      pensumlitteratur (Holden, Weil, Mehlums notater) refereres, aldri
      siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + innholdssjekk), jf. lærdommen om `getChapterMeta`.

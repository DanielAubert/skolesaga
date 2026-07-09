# Bokskjelett: MAT2410 Innføring i kompleks analyse — eksamensrettet lærebok (UiO)

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (11 MAT2410-sett med full oppgavetekst 2013–2023 + 8 grundig leste
> løsningsforslag/sensorfasiter + MAT2300-epoken 2003–2009 skumlest + oblig-
> innleveringene h22/h23). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) med
> **bevistungt innslag** (kompleks analyse er et blandet regne- OG bevisemne) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Pensumbok identifisert via fasitreferansene: **Theodore W. Gamelin,
> _Complex Analysis_ (Springer, UTM)**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat2410` |
| Tittel | **MAT2410 Innføring i kompleks analyse — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Institusjon | UiO (Universitetet i Oslo) |
| Arketype | Regnefag med bevistungt innslag (blandet regne-/bevisemne) |
| Antall kapitler | **28** (1 eksamenskart + 24 tema, hvorav 4 drill + 3 eksamenstrening) |
| Estimert totaltid | **2 070 min ≈ 34,5 timer** |
| Quiz totalt | **564** (krav ≥500) |
| Flashcards totalt | **566** (krav ≥500) |

**Pitch (ett avsnitt):** MAT2410 er innholdsmessig stabilt fra 2003 til 2023 —
det er kompleks analyse hele veien, og fra 2018 med en **fast eksamensmal**.
Fem søyler bærer eksamen: **(1) residyregning + reelt integral via halvsirkel +
ML** — signaturarketypen, ~7/11 og alltid tyngst vektet (20–30 %); **(2) «vis at
f er konstant» via Cauchy–Riemann / harmonisk / Liouville** — ~9/11, den mest
gjentatte korte oppgaven og fagets tryggeste poengkilde; **(3) argument-
prinsippet / Rouché** — ~7/11 og stigende; **(4) Laurent-/potensrekker +
konvergensområde** — ~8/11, tett koblet til residy; **(5) isolerte singulariteter
+ klassifisering** — ~7/11. Eksamen er en **4-timers skriftlig skoleeksamen,
ingen hjelpemidler, ingen utdelt tabell**, 5–7 vektede oppgaver, karakter A–F,
alt begrunnet. Fordi **ingen tabell deles ut**, må residyformlene (enkel pol, pol
av orden $n$), Möbius-/Blaschke-formelen og standardrekkene ($e^z$, $\sin$,
$\cos$, $\tan$, $\operatorname{Log}(1+z)$, geometrisk rekke) **kunnes utenat og
utledes** — dette er bokas viktigste didaktiske premiss. Denne boka drilles søyle
for søyle, trener studenten i den kjedede a)→b)→c)-signaturoppgaven (klassifiser
→ konturintegral → reelt integral via ML), og bygger ut den brede
kompleks-analyse-flanken som er MAT2410s egenart: **argumentprinsippet/Rouché,
Möbius-/konforme avbildninger med bildemengder, maksimumsprinsippet/Schwarz'
lemma, og primitiv/grenoppdelt logaritme**.

**Kritisk kalibrering — «alt skal begrunnes» (gjelder HELE boka):** Fast instruks
på alle nyere sett («remember to include appropriate justifications», «svaret
skal begrunnes»). Et bart tallsvar (f.eks. verdien av et integral) uten utledning
gir **ikke** full uttelling — heller ikke i «regne»-oppgaver. Fire sensorregler
går igjen i alle innholdskontrakter under:
1. **Teoremnavn skal bæres eksplisitt** — fasitene skriver «by the residue
   theorem», «by Rouché's theorem», «by Liouville's theorem», «by the Casorati–
   Weierstrass theorem», «by the maximum modulus principle», «by Cauchy's
   integral theorem», «by the fundamental theorem of algebra». Det skal boka også.
2. **Forutsetninger skal sjekkes FØR et teorem påberopes** — Rouché krever
   $|f|>|g|$ på **hele** randen; Liouville krever begrensethet **og** entire;
   primitiv krever enkeltsammenheng (eller nullkonturer); maksimumsprinsippet
   krever kontinuitet ut til randen. Å hoppe over forutsetningssjekken er en
   toppsjikt-markør som skiller karakterene.
3. **Flere gyldige metoder honoreres alle** — residy via $a_{-1}$ fra Laurent-
   rekka **vs.** grenseformel; konturintegral via residysetningen **vs.** direkte
   fra Laurent-koeffisienten; deformasjon av kontur **vs.** samlet residysetning.
   Der en sjanger har flere veier skal kapitlet vise **minst to** og navngi dem
   (fasitene skriver eksplisitt «Alternatively:»).
4. **ML-argumentet for halvsirkelbuen er ikke valgfritt** — hver eneste reelt-
   integral-oppgave bruker trekantulikhet for nedre skranke på nevner + $|e^{iz}|
   \le 1$, og konkluderer $\int_{\text{buen}}\le ML\to 0$. Å hoppe over dette er
   den dyreste enkeltfeilen i signaturoppgaven.

**«Ingen tabell»-prinsippet (gjelder HVER delkapittel — motstykket til tma4121s
formelark):** MAT2410 har **ingen utdelt formeltabell**. Der en søsterbok kan
skrive «slå opp raden», må MAT2410-studenten **reprodusere fra hukommelsen og
utlede**. Hvert kapittel skal derfor eksplisitt merke to slags innhold:
- **«Må kunnes utenat / reproduseres»**: residyformlene for enkel pol
  ($\operatorname{Res}[f,z_0]=\lim_{z\to z_0}(z-z_0)f$) og pol av orden $n$
  ($\operatorname{Res}=\tfrac1{(n-1)!}\lim\tfrac{d^{n-1}}{dz^{n-1}}[(z-z_0)^nf]$),
  standardrekkene ($e^z,\sin,\cos,\tan,\operatorname{Log}(1+z)$, geometrisk
  rekke), Cauchy–Riemann-likningene, Cauchys integralformel, Möbius-/kryssforholds-
  formelen, Blaschke-faktoren.
- **«Må kunnes utledes aktivt»**: sette opp og gjennomføre residyregningen på en
  gitt funksjon; ML-estimatet på buen (nedre skranke fra trekantulikheten); riktig
  annulus for hver Laurent-rekke; Rouché-oppdelingen $p=f+g$ med sjekk på hele
  randen; utledning av at alle fire partiellderiverte er 0 i «vis f konstant»;
  singularitet-i-$\infty$-analyse via $f(1/z)$; sidebestemmelse av Möbius-bilde ved
  ett indre punkt; grenkontur/nøkkelhull for $z^\alpha$.

**Notasjonskonvensjoner boka skal speile slavisk** (fra settene, fasitene og
Gamelin):
- Analytisk funksjon $f=u+iv$; **Cauchy–Riemann** $u_x=v_y$, $u_y=-v_x$; harmonisk
  $u_{xx}+u_{yy}=0$.
- Residy $\operatorname{Res}[f,z_0]$ (eller $\operatorname{Res}(f;z_0)$);
  Laurent-koeffisient $a_{-1}$; residysetningen $\oint=2\pi i\sum\operatorname{Res}$.
- Kontur $\Gamma_r$; halvsirkelbue $C_R$/$\beta_r$; lukket kurve $\oint_{|z|=r}$;
  annulus $r<|z-z_0|<R$.
- Prinsipalgren $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$,
  $-\pi<\operatorname{Arg}z\le\pi$; kompleks potens $z^\alpha=e^{\alpha\log z}$.
- Möbius $f(z)=(az+b)/(cz+d)$, kryssforhold; Blaschke-faktor
  $e^{i\theta}\dfrac{z-a}{1-\bar a z}$.
- **ML-estimatet** $|\int_\gamma f|\le(\max|f|)\cdot L$.
- Svar oppgis som **eksakt uttrykk**. Fasitspråket «Rule 2/Rule 3 (Gamelin)» for
  ordens-$n$-residy skal nevnes én gang (kap. 4.1) og deretter erstattes av det
  utskrevne navnet «residyformelen for pol av orden $n$».
- Emnet undervises på norsk (bokmål) eller engelsk; boka skrives på **bokmål** med
  engelsk fagterm i parentes ved første forekomst der den er innarbeidet
  (f.eks. «argumentprinsippet (argument principle)»).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:
«må beherskes perfekt»-søyler får full kapittelkjede + drillkapittel, «må kunne»-
temaer kompaktere dekning, «bør kjenne»-stoff kortest.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og «ingen tabell»-strategi | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer sjanger-katalogen A–K og «må kunnes utenat»-prinsippet. |
| 1 | Analytiske og harmoniske funksjoner (Cauchy–Riemann) | 4 | **CR/«vis f konstant» 9/11 ≈ 82 %** → nivå 1 «perfekt». Inkl. komplekse tall/elementærfunksjoner (fundament) + harmonisk konjugert + middelverdi. Fagets tryggeste poengkilde. |
| 2 | Kompleks integrasjon: Cauchys teoremer, primitiv, logaritme | 3 | Cauchys integralteorem/-formel underliggende overalt (eksplisitt 4/11); primitiv/grenoppdelt log 4/11 og stigende → «kunne/perfekt». Grunnlaget for residyer. |
| 3 | Potens- og Laurentrekker + isolerte singulariteter | 4 | **Laurent 8/11 ≈ 73 %**, **singularitetsklassifisering 7/11 ≈ 64 %** → nivå 1 «perfekt» + drillkapittel. Geometrisk rekke, annuli, pol/vesentlig/hevbar, singularitet i $\infty$ via $f(1/z)$. |
| 4 | Residyregning og reelle integraler | 5 | **91 % residy, 64 % reelt integral** — den tyngste, mest gjentakende og tyngst vektede blokken (signaturarketypen) → nivå 1 «perfekt» + drillkapittel. Halvsirkel + ML, enhetssirkel, nøkkelhull/gren $z^\alpha$. |
| 5 | Argumentprinsippet, Rouché og entire funksjoner | 3 | **Rouché 7/11 ≈ 64 % og stigende**; entire/Liouville/polynom-karakterisering 5/11 → nivå 1/2. MAT2410-signatur (svak i tma4121) → drillkapittel. |
| 6 | Konforme avbildninger og maksimumsprinsippet | 3 | **Möbius 6/11 ≈ 55 %**, maksimumsprinsipp/Schwarz 4/11 → nivå 2. MAT2410-signatur (fraværende/svak i tma4121). Bildemengder + sidebestemmelse, Blaschke/Schwarz. |
| 7 | Randtema: Fourier-rekke og harmonisk anvendelse | 2 | Fourier-rekke 2/11 (kun 2017, 2019 — grensesone mot tma4121); væskestrøm/hastighetspotensial 1/11 (kun 2021). **Bør kjenne** — kort dekning, merket «sporadisk». |
| 8 | Eksamenstrening | 3 | Sjangerverksted (bygg din egen formel-liste + a)→b)→c)-drill) + 2 komplette øvingseksamener (5–7 vektede oppgaver) med A-løsningsforslag. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og «ingen tabell»-strategi |
| 1 | Analytiske og harmoniske funksjoner |
| 2 | Kompleks integrasjon: Cauchys teoremer og primitiv |
| 3 | Potens- og Laurentrekker + singulariteter |
| 4 | Residyregning og reelle integraler |
| 5 | Argumentprinsippet, Rouché og entire funksjoner |
| 6 | Konforme avbildninger og maksimumsprinsippet |
| 7 | Randtema: Fourier-rekke og harmonisk anvendelse |
| 8 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Bevistungt innslag i regnefag-arketypen** — ~30 % av deloppgavene er
   «vis at / bevis at» (mot ~60 % «regn ut»). Kapittel-DNA-ene beholdes, men hvert
   teorikapittel skal ha minst ett `example` som er et **fullt bevis skrevet som en
   A-besvarelse** (ikke bare et regnestykke), og eksamenskloner inkluderer
   bevisoppgaver. Sensorregel 1 og 2 (teoremnavn + forutsetningssjekk) er ekstra
   viktige her.
2. **Kompleks analyse er delt på fem deler (1–5)** i stedet for én — DNA sier én
   del per hovedtema, men kompleks-analyse-blokken er for stor og faglig heterogen
   (analytisitet vs. integrasjon vs. rekker vs. residyer vs. telling) for én del;
   splitten følger naturlige undertema (samme grep som tma4121) og gir hver sitt
   drill-/prøvenivå. Residydelen (Del 4) er størst fordi den er signaturarketypen
   (91 %, tyngst vektet).
3. **To drillkapitler (3.4, 4.5)** ligger inne i temadelene, pluss ett i Del 5
   (5.3) — sjangrene er 64–91 %-gjengangere (Laurent/singularitet, residy/reelt
   integral, Rouché) som må drilles umiddelbart etter teorien. Del 8 beholder
   sjangerverkstedet og øvingseksamenene.
4. **Del 7 (randtema) er ren «kjenne»-dekning** på to kapitler og får **2 prøver**
   i stedet for 4 (sporadisk arkivfrekvens, ikke egen kjerne-sjanger) —
   dokumentert i §4.
5. **28 kapitler** — innenfor DNA-rammen (20–35). Litt over midten fordi emnet har
   fem høyfrekvente søyler + to signaturflanker (Rouché, konform) som tma4121 ikke
   dekker, og «ingen tabell» krever mer utledningsstoff per kapittel.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–K)** refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
A klassifiser singulariteter + finn residuer · B reelt uegentlig integral via
halvsirkel + ML (signaturarketypen) · C argumentprinsippet / Rouché ·
D Laurent-/potensrekke + konvergensområde · E Möbius-/konform avbildning +
bildemengde · F entire funksjoner: Liouville / polynom-karakterisering /
singularitet i $\infty$ · G «vis at f er konstant» (Cauchy–Riemann / harmonisk) ·
H maksimumsprinsippet / Schwarz' lemma / middelverdi · I primitiv / eksistens av
primitiv / grenoppdelt logaritme · J kompleks likning / røtter ·
K Fourier-rekke (epoke-rest). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (alle symboler
og formler i delkapitlet, per delkapittel — ikke arvet), `text` **Motivasjon**,
`definition`/`theorem` i emnets notasjon **med «må kunnes utenat»/«må utledes»-
markering**, `text` **Utledning med intuisjon** (kun for det som skal kunne
*utledes*), 2–4 `example` (siste på eksamensnivå, løst som A-besvarelse, minst ett
fullt bevis), `warning` **Typiske feil**, 6–12 `exercise` (stigende, `solution` +
`hints`), `collapsible` **Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart og «ingen tabell»-strategi

#### Kapittel 0.1: Slik testes MAT2410 — de fem søylene og «ingen tabell»

- **id:** `mat2410-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fem bærende søylene, temafrekvensene, sjanger-katalogen A–K og «ingen tabell»-strategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 11 velkarakteriserte MAT2410-sett 2013–2023. Skal gjengi: (i) **formen** (4-timers skriftlig skoleeksamen, **ingen hjelpemidler, ingen utdelt tabell**, 5–7 vektede oppgaver med eksplisitt vektprosent sum 100 %, A–F, alt begrunnet; svarspråk norsk eller engelsk); (ii) **formathistorikken** kort (2003–2009 MAT2300 «Analyse 2», 3 t, teori-/definisjonsspørsmål; 2010–2017 overgang, 4 t; **fast mal fra 2018**: én tung residy-/kontur-/reelt-integral-oppgave 20–30 %, én kort «vis f konstant» 10 %, én Rouché/argumentprinsipp 10 %); (iii) **temafrekvens-tabellen** (residy+reelt integral 91 %/64 %, CR/«vis f konstant»/harmonisk 82 %, Laurent-/potensrekke 73 %, argumentprinsipp/Rouché 64 %, singularitetsklassifisering 64 %, Möbius/konform 55 %, entire/Liouville 45 %, maksimumsprinsipp/Schwarz 36 %, primitiv/log 36 %, Cauchy integralformel eksplisitt 36 %, kompleks likning/røtter 27 %, konvergensradius 36 %, Fourier-rekke 18 %, trig-integral enhetssirkel 18 %, væskestrøm 9 %); (iv) **«ingen tabell»-prinsippet** — hva som må reproduseres fra hukommelsen (residyformler, standardrekker, CR, Cauchys integralformel, Möbius/Blaschke) vs. hva som må utledes aktivt; (v) **pandemi-unntaket**: 2020 og 2021 var hjemmeeksamener med «alle hjelpemidler», men oppgavene forble rene bevis-/regneoppgaver; standarden er igjen «ingen hjelpemidler» fra 2022 *(verifiser mot første sett fra 2024)*; (vi) **prognose** for neste ordinære sett (fra analysen §7).
- **Innholdskontrakt:** Presenter **sjanger-katalogen A–K** som studentens sjekkliste med typisk plassering: B den tunge signaturoppgaven (20–30 %, kjedet A→B), G/H kort «vis f konstant» (10 %), C Rouché (10 %), D Laurent-oppgave (ofte koblet til A), E Möbius/bildemengde (10–20 %), J kompleks-likning-åpning (lav vekt). Presenter **«ingen tabell»-prinsippet** (fra §1) med konkret liste over «reproduser utenat» vs. «utled». **Sensorens fire metaregler:** begrunn alt; bær teoremnavn eksplisitt; sjekk forutsetninger FØR teoremet; ML-argumentet er obligatorisk; flere metoder premieres. **Karakterskillene** (fra analysen §4): bestått ≈ de mekaniske delene (finn singulariteter, sett opp én residy, sett inn 3 punkter i en Möbius, skriv geometrisk rekke, verifiser CR); midtsjikt ≈ dobbelpol-residy med derivasjon, ML-argumentet, riktig annulus, Rouché med sjekk på hele randen, harmonisk konjugert; toppsjikt ≈ presis håndtering av *når* et teorem gjelder (enkeltsammenheng før primitiv, begrensethet før Liouville, kontinuitet til randen før maksimumsprinsipp), singularitet-i-$\infty$ via $f(1/z)$ + Casorati–Weierstrass, nøkkelhull/gren for $z^\alpha$, å se og bruke a)→b)→c)-koblingen, subtiliteter (ubegrenset harmonisk uten motsetning med maksimumsprinsippet, 2023-7-typen). **Prognose:** én tung residy-/kontur-/reelt-integral (20–30 %, nesten sikker), én kort «vis f konstant» (10 %), én Rouché/argumentprinsipp (10 %), én Laurent m/konvergensområde, én Möbius/bildemengde eller konform (10–20 %), muligens én maksimumsprinsipp-/harmonisk- eller primitiv-/log-oppgave + en lav-vekts kompleks-likning-åpning.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og et sett med den tunge B-oppgaven (30 %) + fem 10–15 %-oppgaver — sett opp et vektstyrt tidsbudsjett» og «avgjør for hvert uttrykk (residyformel for dobbelpol, standard geometrisk rekke, Möbius-formelen) om det må reproduseres utenat eller utledes».
- **Typiske feil:** Tidsfella — bruke for lang tid på den tunge B-oppgaven og miste de faste 10 %-oppgavene (G, C) som er tryggere poeng; å stole på en «utdelt tabell» som ikke finnes; å hoppe over ML-argumentet fordi det «er åpenbart».
- **Quiz: 14 · Flashcards: 16** (form, frekvenser, sjanger-katalog A–K, «ingen tabell»-innhold, metaregler)

---

### Del 1 — Analytiske og harmoniske funksjoner (Cauchy–Riemann)  *(prioritet: PERFEKT)*

#### Kapittel 1.1: Komplekse tall og elementære funksjoner — planet, polar form, log og røtter

- **id:** `mat2410-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fundamentet hele boka står på: kartesisk/polar form, Eulers formel, de komplekse elementærfunksjonene, prinsipalgren-logaritmen og komplekse røtter.
- **Eksamensbelegg:** Delvis egen sjanger (J kompleks likning/røtter, 3/11 ≈ 27 %, typisk lav-vekts åpning: 2023-1 `½+(√3/2)i=e^{iπ/3}` → likesidet trekant, `z⁶=1`), men først og fremst **forutsetning** i alle senere kapitler (CR, Laurent, residy, Möbius, log/primitiv). Prioritet: **kjenne** (fundament), med J-innslaget som **kunne**. Kryssref søsterbok: `tma4121` og `tma4110` dekker komplekse tall — lenk kun hvis kapitlet finnes ved bygg.
- **Innholdskontrakt:** Mest til *bruk*. Kartesisk vs. polar form $z=re^{i\theta}=r(\cos\theta+i\sin\theta)$; **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$ og følgene $\cos\theta=\tfrac12(e^{i\theta}+e^{-i\theta})$, $\sin\theta=\tfrac1{2i}(e^{i\theta}-e^{-i\theta})$; modulus $|z|$, argument $\operatorname{Arg}z\in(-\pi,\pi]$, konjugat $\bar z$, $|z|^2=z\bar z$; **De Moivre** og **de $n$ røttene** $z^{1/n}=r^{1/n}e^{i(\theta+2\pi k)/n}$, $k=0,\dots,n-1$; kompleks $e^z=e^x(\cos y+i\sin y)$, $\sin z,\cos z,\tan z$ via eksponensialer; **prinsipalgren-logaritmen** $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$ og flertydigheten $\log z=\operatorname{Log}z+2\pi in$; **kompleks likning** $z^n=w$ (polarform, $n$ løsninger) og $e^z=w$ / $e^{z^2}=1$ (kompleks log, uendelig mange løsninger). **«Ingen tabell»-markering:** alt *må reproduseres utenat*; ingen tabell.
- **Oppgavesjangre:** J + støttesjanger til alle. Mønstereksempel: «Løs $z^4=-8+8\sqrt3\,i$ ved polarform, og finn alle løsninger av $e^{2z}=1$.»
- **Typiske feil (analysen §5.10):** Tape løsninger — glemme at $e^z=w$/$z^n=w$ har uendelig/$n$ løsninger; feil argumentgren/kvadrant; rote med fortegn i $\tfrac1{2i}$-formelen for $\sin$; behandle $|\cos z|\le 1$ som om det gjaldt komplekst (det gjør det ikke).
- **Quiz: 18 · Flashcards: 22** (polarform, Euler, standardidentiteter, log-flertydighet — reproduksjon utenat er kjernen)

#### Kapittel 1.2: Analytisitet og Cauchy–Riemann-likningene

- **id:** `mat2410-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-1-1 · **kapitteltype:** teori
- **description:** Hva det vil si at $f$ er analytisk, Cauchy–Riemann-likningene som test, og koblingen til at $f'=0$ på et sammenhengende område gir konstant.
- **Eksamensbelegg:** Del av 82 %-CR-blokken. Grunnlaget for hele Del 1 og for «vis f konstant» (kap. 1.3). CR verifiseres eksplisitt i mange sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Kompleks deriverbarhet (grensedefinisjon); **Cauchy–Riemann-likningene** $u_x=v_y$, $u_y=-v_x$ (MÅ kunnes utenat — motoren i hele delen); teoremet: $f=u+iv$ analytisk $\Rightarrow$ CR gjelder + partiellderiverte kontinuerlige; omvendt (CR + $C^1$ $\Rightarrow$ analytisk); $f'=u_x+iv_x$; **analytisk på et sammenhengende område med $f'\equiv0$ $\Rightarrow$ $f$ konstant** (nøkkelen i kap. 1.3). Analytisitet krever åpenhet i en **hel omegn**, ikke bare langs en linje. **«Ingen tabell»-markering:** CR-likningene og konstant-teoremet *må reproduseres*; verifikasjonen på en gitt $f$ *må gjennomføres*.
- **Oppgavesjangre:** G-forberedelse. Mønstereksempel: «Avgjør hvor $f(z)=z\,\bar z$ er kompleks deriverbar ved å sjekke Cauchy–Riemann-likningene.»
- **Typiske feil:** Sjekke CR bare i ett punkt og konkludere «analytisk» (kreves i hel omegn); fortegnsfeil i $u_y=-v_x$; forveksle deriverbar i et punkt med analytisk.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: «Vis at f er konstant» — Cauchy–Riemann-maskineriet

- **id:** `mat2410-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-1-2 · **kapitteltype:** teori
- **description:** Fagets mest gjentatte korte oppgave: fra en antakelse om $f$, bruk Cauchy–Riemann til å vise at alle fire partiellderiverte er 0, altså at $f$ er konstant på et sammenhengende område.
- **Eksamensbelegg:** Sjanger G — kjernen i 82 %-blokken (9/11 bredt tolket), den tryggeste poengkilden i faget. Opptrer i mange forkledninger, alle med samme kjerne: $u=2v$ (2022), $g=\bar u-i\bar v$ analytisk (2021), $\bar f$ analytisk (2023), $f$ reellverdig (2013), $\operatorname{Re}f=\operatorname{Im}f$ (2013), $f$ reell på randen + maksimumsprinsipp på $\operatorname{Im}f$ (2016). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (bevisdrill). Standardoppskriften: skriv $f=u+iv$; bruk CR på antakelsen til å utlede at **alle fire** partiellderiverte er 0; konkludér $u,v$ konstante på det **sammenhengende** området, altså $f$ konstant. Behandle de faste forkledningene ($\bar f$ analytisk, $u=cv$, $f$ reell, $\operatorname{Re}f=\operatorname{Im}f$) hver som en variant av samme argument. Alternativ vei: $|f|$ konstant $\Rightarrow$ $f$ konstant (via CR eller maksimumsprinsipp — kobling kap. 6.2). **«Ingen tabell»-markering:** oppskriften *må kunnes*; sammenhengs-argumentet må skrives ut (ikke underforstås).
- **Oppgavesjangre:** G. Mønstereksempel: «La $f=u+iv$ være analytisk på et sammenhengende område med $2u=3v$. Vis at $f$ er konstant.»
- **Typiske feil (analysen §5.8):** Stoppe for tidlig — utlede at ett par partiellderiverte er 0 uten å konkludere at **alle** er 0; glemme kravet om at området er **sammenhengende**; behandle en forkledning som et nytt problem i stedet for samme CR-maskineri.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.4: Harmoniske funksjoner, harmonisk konjugert og middelverdi

- **id:** `mat2410-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-1-2 · **kapitteltype:** teori
- **description:** Real- og imaginærdel av en analytisk funksjon er harmonisk; hvordan finne den harmoniske konjugerte, og middelverdiegenskapen.
- **Eksamensbelegg:** Harmonisk-varianten av G-blokken (del av 82 %): vis at $u$ er harmonisk, finn harmonisk konjugert $v$ (2018-2, 2023-6); middelverdiegenskap (2023-6b). Prioritet: **perfekt** (harmonisk konjugert), **kunne** (middelverdi).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Harmonisk funksjon $u_{xx}+u_{yy}=0$; **real-/imaginærdel av analytisk er harmonisk** (utledes fra CR); **harmonisk konjugert** $v$ finnes på et enkeltsammenhengende/stjerneformet område ved å integrere $v_x=-u_y$ og $v_y=u_x$ og matche integrasjonskonstanten; **middelverdiegenskapen** — verdien av en harmonisk funksjon i sentrum er gjennomsnittet over en sirkel. **«Ingen tabell»-markering:** definisjonen og konstruksjonsmetoden *må kunnes*; integrasjonen *må gjennomføres* med konsistenssjekk mellom de to veiene.
- **Oppgavesjangre:** G (harmonisk). Mønstereksempel: «Vis at $u(x,y)=x^3-3xy^2$ er harmonisk og finn en harmonisk konjugert $v$ slik at $f=u+iv$ er analytisk.»
- **Typiske feil:** Glemme å sjekke at $u$ faktisk er harmonisk før man leter etter konjugert; inkonsistent integrasjonskonstant mellom $v_x$- og $v_y$-veien; anta at harmonisk konjugert alltid finnes (krever enkeltsammenheng).
- **Quiz: 18 · Flashcards: 18**

*(Del 1 drilles løpende; den samlede G-sjangeren repeteres i eksamenstreningen kap. 8.1. Egen drillkapittel ikke nødvendig — «vis f konstant» er kort og øves gjennom eksempel + øvinger i 1.3.)*

---

### Del 2 — Kompleks integrasjon: Cauchys teoremer, primitiv, logaritme

#### Kapittel 2.1: Komplekse kurveintegraler og Cauchys integralteorem

- **id:** `mat2410-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-1-2 · **kapitteltype:** teori
- **description:** Hvordan et komplekst kurveintegral defineres og parametriseres, ML-estimatet, og Cauchys integralteorem ($\oint=0$ for analytisk på enkeltsammenhengende område).
- **Eksamensbelegg:** Underliggende i alle konturintegraloppgaver; eksplisitt påberopt i flere sett (2020-3b, 2023-2). ML-estimatet (36 %+ eksplisitt) er obligatorisk verktøy i signaturoppgaven (Del 4). Prioritet: **perfekt** (apparatet), **kunne** (teoremet som selvstendig oppgave).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Kurveintegral $\int_\gamma f\,dz$ via parametrisering $z=\gamma(t)$; **ML-estimatet** $|\int_\gamma f\,dz|\le(\max_\gamma|f|)\cdot L(\gamma)$ (MÅ kunnes — bærer bueargumentet i Del 4); **Cauchys integralteorem** $\oint_\gamma f\,dz=0$ for $f$ analytisk på et enkeltsammenhengende område; **veiuavhengighet** og deformasjon av kontur (deform til små sirkler om singularitetene, 2013-3d). **«Ingen tabell»-markering:** ML-estimatet og Cauchys integralteorem *må reproduseres*; parametriseringen og estimeringen *må gjennomføres*.
- **Oppgavesjangre:** Apparat for B (Del 4) + C-støtte. Mønstereksempel: «Regn $\int_\gamma \bar z\,dz$ langs den rette linjen fra $0$ til $1+i$, og forklar hvorfor Cauchys integralteorem *ikke* gjelder her.»
- **Typiske feil:** Bruke Cauchys integralteorem på en funksjon som ikke er analytisk (f.eks. $\bar z$); glemme $|\gamma'(t)|$ i parametriseringen; feil buelengde $L$ i ML.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Cauchys integralformel og estimatene

- **id:** `mat2410-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** mat2410-2-1 · **kapitteltype:** teori
- **description:** Cauchys integralformel for $f$ og de deriverte, og Cauchy-estimatene som brukes til å karakterisere entire funksjoner.
- **Eksamensbelegg:** Eksplisitt teorem i 4/11 (2020-3, 2023-2), og grunnlaget for Liouville og polynom-karakterisering (Del 5). Cauchy-estimatet på deriverte: $f''=0\Rightarrow f=az+b$ (2020-3). Prioritet: **kunne** (grensende til perfekt — bærer Del 5).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Cauchys integralformel** $f(z_0)=\tfrac1{2\pi i}\oint\tfrac{f(\zeta)}{\zeta-z_0}\,d\zeta$ og for deriverte $f^{(n)}(z_0)=\tfrac{n!}{2\pi i}\oint\tfrac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta$; **Cauchy-estimatene** $|f^{(n)}(z_0)|\le\tfrac{n!\,M}{R^n}$ (grunnlaget for Liouville, kap. 5.1); analytisk $\Rightarrow$ uendelig ganger deriverbar. **«Ingen tabell»-markering:** integralformelen (begge former) og estimatet *må reproduseres utenat*.
- **Oppgavesjangre:** F-forberedelse. Mønstereksempel: «Bruk Cauchys integralformel for den deriverte til å regne $\oint_{|z|=2}\tfrac{e^z}{(z-1)^2}\,dz$.»
- **Typiske feil:** Feil potens $(\zeta-z_0)^{n+1}$ i formelen for deriverte; glemme faktoren $n!$; bruke formelen når $z_0$ ligger utenfor kurven (da gir Cauchys integralteorem 0).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Primitiv, eksistens av primitiv og grenoppdelt logaritme

- **id:** `mat2410-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-2-1 · **kapitteltype:** teori
- **description:** Når en analytisk funksjon har en primitiv, hvorfor $1/z$ ikke har det på $\mathbb{C}\setminus\{0\}$, og hvordan man konstruerer primitiver via grenoppdelt logaritme.
- **Eksamensbelegg:** Sjanger I — 4/11 ≈ 36 % og **stigende** (2019, 2020, 2022, 2023). $1/z$ mangler primitiv fordi $\oint_{|z|=1}dz/z=2\pi i\neq0$ (2023-2); primitiv via delbrøk + $\operatorname{Log}$ (2022-5a: $F=i\operatorname{Log}(z+i)-i\operatorname{Log}(z-i)$). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Grunnleggende teorem for komplekse kurveintegraler** $\int_\gamma f\,dz=F(\text{slutt})-F(\text{start})$ når $F'=f$; **eksistens av primitiv** — en analytisk funksjon har primitiv på et **enkeltsammenhengende** område (eller når alle lukkede konturintegraler er 0); $1/z$ har **ingen** primitiv på $\mathbb{C}\setminus\{0\}$ fordi $\oint_{|z|=1}dz/z=2\pi i$; konstruksjon av primitiver via delbrøk + prinsipalgren $\operatorname{Log}$, gyldig der argumentet unngår den negative reelle aksen (grenkuttet). **«Ingen tabell»-markering:** teoremet og enkeltsammenhengs-kravet *må reproduseres*; konstruksjonen (delbrøk + gren) *må gjennomføres* med angivelse av gyldighetsområdet.
- **Oppgavesjangre:** I. Mønstereksempel: «Vis at $1/z$ ikke har noen primitiv på $\mathbb{C}\setminus\{0\}$, og konstruer en primitiv til $\tfrac{2}{z^2+4}$ på et passende område.»
- **Typiske feil (analysen §5.9):** Anta primitiv uten å sjekke enkeltsammenheng; overse at $\oint dz/z\neq0$; glemme å angi hvilket område $\operatorname{Log}$-primitiven er gyldig på (grenkuttet).
- **Quiz: 16 · Flashcards: 16**

---

### Del 3 — Potens- og Laurentrekker + isolerte singulariteter  *(prioritet: PERFEKT)*

#### Kapittel 3.1: Potensrekker — konvergensradius og leddvis operasjoner

- **id:** `mat2410-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** mat2410-2-2 · **kapitteltype:** teori
- **description:** Potensrekker, konvergensradius som avstand til nærmeste singularitet, og leddvis derivasjon/integrasjon innenfor radius.
- **Eksamensbelegg:** Konvergensradius + leddvis operasjoner 4/11 ≈ 36 %, som verktøy under Laurent (D-blokken 73 %). Prioritet: **kunne** (verktøy for perfekt-blokken).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Potensrekke $\sum a_n(z-z_0)^n$; **konvergensradius** $R$ = avstand fra $z_0$ til nærmeste singularitet (og formelen $1/R=\limsup|a_n|^{1/n}$); analytisitet innenfor radius; **leddvis derivasjon/integrasjon** bevarer radius; kjente **Maclaurin-rekker** $e^z=\sum z^n/n!$, $\sin z$, $\cos z$, $\tfrac1{1-z}=\sum z^n$ ($|z|<1$), $\operatorname{Log}(1+z)$. **«Ingen tabell»-markering:** standardrekkene *må reproduseres utenat* (ingen tabell); radiusbestemmelse *må gjennomføres*.
- **Oppgavesjangre:** D-forberedelse. Mønstereksempel: «Finn Taylor-rekka til $f(z)=\tfrac{1}{2-z}$ om $z_0=0$ og bestem konvergensradiusen.»
- **Typiske feil:** Feil konvergensradius (glemme at den bestemmes av nærmeste singularitet, ikke bare i én retning); rote med indeksskift i geometrisk rekke.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.2: Laurentrekker og konvergensområde (annuli)

- **id:** `mat2410-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** mat2410-3-1 · **kapitteltype:** teori
- **description:** Laurentrekka i en ringregion, «ut/inn»-substitusjonen i geometrisk rekke, og hvorfor hver annulus gir sin egen rekke.
- **Eksamensbelegg:** Sjanger D — **8/11 ≈ 73 %**, tett koblet til residy og singularitet. Hver annulus (bestemt av avstanden fra sentrum til singularitetene) gir sin egen rekke (2013-3c, 2016-2, 2017-2, 2020-2c: $f=\operatorname{Log}(z/(z-1))$ gir $-\sum(1/j)z^{-j}$ for $|z|>1$). Koeffisienten $a_{-1}$ = residyen (kobling til Del 4). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Laurentrekka** $f=\sum_{n=-\infty}^{\infty}a_n(z-z_0)^n$ i en annulus $r<|z-z_0|<R$; **geometrisk rekke** $\tfrac1{1-w}=\sum w^n$ ($|w|<1$) med passende substitusjon, inkl. **«ut/inn»-varianten** $\tfrac1z\cdot\tfrac1{1-a/z}=\sum a^n z^{-n-1}$ for $|z|>|a|$; hver annulus (mellom to nabo-singulariteter) gir sin egen rekke; bruk kjente Maclaurin-rekker delt på potenser av $z$ for Laurent om 0 ($\tan z/z^3$, $(\cos z-1)/z^2$); **$a_{-1}$ = residyen** (broen til Del 4). **«Ingen tabell»-markering:** geometrisk rekke og «ut/inn»-substitusjonen *må kunnes*; hver rekke *må ledsages av annulusen den gjelder i*.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn Laurent-rekka til $f(z)=\tfrac{1}{z(z-2)}$ i hver av de to ringregionene $0<|z|<2$ og $|z|>2$.»
- **Typiske feil (analysen §5.6):** Feil annulus / manglende konvergensområde (Laurent-rekke oppgitt uten ringen den gjelder i); feil «ut/inn»-substitusjon i geometrisk rekke; blande rekkene for de ulike annuli.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Isolerte singulariteter — klassifisering og singularitet i uendelig

- **id:** `mat2410-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-3-2 · **kapitteltype:** teori
- **description:** Hevbar / pol av orden $n$ / vesentlig singularitet, klassifisering via Laurent-rekke eller nullpunktsorden i teller/nevner, og singularitet i $\infty$ via $f(1/z)$.
- **Eksamensbelegg:** Sjanger A (klassifiseringsdelen) — 7/11 ≈ 64 %, ofte del av residyoppgaven. Ordensregnestykke ved sammenfallende null (2016-5: $e^{iz}-1$ har enkelt null i $2\pi k$ ⇒ hevbar i 0; 2022-4: $\tan z/z^3$ ⇒ pol av orden $3-1=2$ i 0). Vesentlig sing. i $\infty$ via uendelig mange ikke-null-ledd i $f(1/z)$ (2022-6). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Hevbar** (Riemanns teorem — begrenset nær $z_0$), **pol av orden $n$** (Laurent har endelig hovedledd t.o.m. $(z-z_0)^{-n}$), **vesentlig** (uendelig mange negative ledd; **Casorati–Weierstrass**: bildet ligger tett i $\mathbb{C}$); klassifisering via **Laurent-rekke** eller **nullpunktsorden i teller/nevner** (enkelt null i nevner der teller ≠ 0 ⇒ enkel pol; sammenfallende null i teller senker orden); **singularitet i $\infty$** via substitusjonen $g(z)=f(1/z)$ og klassifisering av $g$ i 0. **«Ingen tabell»-markering:** de tre typene + Casorati–Weierstrass *må reproduseres*; ordensregningen (inkl. sammenfallende null) *må gjennomføres*.
- **Oppgavesjangre:** A (klassifisering). Mønstereksempel: «Klassifiser singulariteten til $f(z)=\tfrac{\tan z}{z^3}$ i $z=0$ og bestem ordenen på polen.»
- **Typiske feil (analysen §5.3):** Feil poltype/orden — forveksle hevbar (teller og nevner har sammenfallende null) med pol; feiltelle orden når teller også har null; overse Casorati–Weierstrass ved vesentlig singularitet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.4: Drill — Laurent-rekke + singularitet fra ende til annen

- **id:** `mat2410-3-4` · **number:** 3.4 · **estimatedMinutes:** 75 · **prerequisites:** mat2410-3-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele D/A-komplekset: finn singularitetene, velg annulus, skriv Laurent-rekka, les av $a_{-1}$, klassifiser — i A-besvarelsesform.
- **Eksamensbelegg:** Dekker sjanger D (73 %) og klassifiseringsdelen av A (64 %) i alle varianter (rasjonal funksjon, $\operatorname{Log}$-argument, Maclaurin delt på potens, singularitet i $\infty$). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) finn alle singulariteter (nevner = 0); 2) velg annulus (mellom nabo-singulariteter); 3) skriv hver faktor som geometrisk rekke med riktig «ut/inn»-substitusjon for annulusen; 4) klassifiser hver singularitet (orden via nullpunktstelling eller hovedledd i Laurent); 5) les av $a_{-1}$ = residyen (bro til Del 4); 6) angi alltid konvergensområdet. **Gjennomregnet eksamenscase** med margnotater om hva som gir uttelling. 10–15 varianter (rasjonal, $\operatorname{Log}$-argument, $\tan z/z^3$-type, singularitet i $\infty$), alle på eksamensnivå.
- **Oppgavesjangre:** A, D. Mønstereksempel (kjedet): «(a) Finn og klassifiser singularitetene til $f(z)=\tfrac{z}{(z-1)(z-3)}$. (b) Skriv Laurent-rekka i $1<|z|<3$. (c) Les av residyen i hver pol.»
- **Typiske feil:** Hele §5.6-repertoaret (feil annulus, manglende konvergensområde) + §5.3 (feil poltype/orden) samlet; hoppe over konvergensområdet.
- **Quiz: 14 · Flashcards: 10**

---

### Del 4 — Residyregning og reelle integraler  *(prioritet: PERFEKT — signaturarketypen)*

#### Kapittel 4.1: Residysetningen og residyformlene

- **id:** `mat2410-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** mat2410-3-3 · **kapitteltype:** teori
- **description:** Residysetningen $\oint=2\pi i\sum\operatorname{Res}$, residyformlene for enkel pol og pol av orden $n$, og koblingen $a_{-1}=\operatorname{Res}$.
- **Eksamensbelegg:** Sjanger A — kursets ryggrad, **10/11 ≈ 91 %**, gjennomgående. Enkel pol $\operatorname{Res}=\lim(z-z_0)f$; pol av orden $n$ via derivasjon («Rule 2/Rule 3, Gamelin p. 197»); eller $\operatorname{Res}=a_{-1}$ fra Laurent. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + reprodusere utenat. **Residysetningen** $\oint_\gamma f\,dz=2\pi i\sum_k\operatorname{Res}[f,z_k]$ for singulariteter innenfor $\gamma$; **residy for enkel pol** $\operatorname{Res}[f,z_0]=\lim_{z\to z_0}(z-z_0)f(z)$, og for kvotient $g/h$ med enkelt null i $h$: $g(z_0)/h'(z_0)$; **residy for pol av orden $n$** $\operatorname{Res}=\tfrac1{(n-1)!}\lim_{z\to z_0}\tfrac{d^{n-1}}{dz^{n-1}}\big[(z-z_0)^nf(z)\big]$ (nevn «Rule 2/Rule 3 (Gamelin)» én gang, bruk deretter det utskrevne navnet); **$\operatorname{Res}=a_{-1}$** fra Laurent-rekka; hevbar singularitet gir residy 0. **«Ingen tabell»-markering:** begge residyformlene og residysetningen *må reproduseres utenat*; ordensbestemmelsen og derivasjonen *må gjennomføres*.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn alle singulariteter til $f(z)=\tfrac{e^z}{(z-1)^2(z+2)}$, bestem ordenen på polene, og regn residuene.»
- **Typiske feil (analysen §5.2):** Feil residyformel for pol av orden $\ge2$ (bruke enkel grenseformel uten derivasjon); feil ordenstelling; glemme at hevbar gir residy 0.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.2: Reelt uegentlig integral via halvsirkel + ML-estimatet

- **id:** `mat2410-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** mat2410-4-1 · **kapitteltype:** teori
- **description:** Den faste tredelsmalen for $\int_{-\infty}^{\infty}$: lukk med halvsirkel, residysetningen, vis at buen → 0 med ML, ekstrahér real-/imaginærdel.
- **Eksamensbelegg:** Sjanger B — signaturarketypen, **7/11 ≈ 64 %** og alltid tyngst vektet (20–30 %). Malen går nesten ordrett igjen (2013 $\cos ax/(1+x^2)$, 2016 $\sin x/(x+x^3)$, 2021 $\cos x/(x^4+2x^2+1)$, 2022 $2e^{ix}/(1+x^2)$, 2023 $1/(z^2+1)^2$). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Den faste tredelsmalen:** (i) lukk med halvsirkel $\Gamma_r$ i øvre halvplan; residysetningen gir $\oint_{\Gamma_r}=2\pi i\sum_{\text{øvre halvplan}}\operatorname{Res}$; (ii) vis at buebidraget $\int_{\text{buen}}\to0$ med **ML-estimatet** — nesten alltid via $|e^{iz}|=e^{-\operatorname{Im}z}\le1$ (for $y\ge0$) og en **nedre skranke på nevner** fra trekantulikheten (f.eks. $|z^4+2z^2+1|\ge r^4-2r^2-1$, **minus** ikke pluss); (iii) ta grensen $r\to\infty$ og ekstrahér real-/imaginærdel for $\cos/\sin$. **Varianter:** dobbelpol (2021, 2023: residy via derivasjon). **«Ingen tabell»-markering:** malen *må kunnes*; ML-argumentet er obligatorisk og *må skrives ut fullt* (sensorregel 4).
- **Oppgavesjangre:** B. Mønstereksempel: «Regn $\int_{-\infty}^{\infty}\tfrac{\cos x}{x^2+4}\,dx$ ved å lukke med en halvsirkel i øvre halvplan; husk å begrunne at buen forsvinner.»
- **Typiske feil (analysen §5.1):** Glemme ML-argumentet (obligatorisk, den dyreste feilen); feil nedre skranke på nevner ($r^4-2r^2-1$, ikke $+$); ta feil halvplan; ikke sjekke at integralet konvergerer; ta bart svar uten begrunnelse.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.3: Trigonometrisk integral via enhetssirkelen

- **id:** `mat2410-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** mat2410-4-1 · **kapitteltype:** teori
- **description:** $\int_0^{2\pi}R(\cos\theta,\sin\theta)\,d\theta$ via substitusjonen $z=e^{i\theta}$, som gjør integralet til et lukket konturintegral over enhetssirkelen.
- **Eksamensbelegg:** Reelt trigonometrisk integral 2/11 ≈ 18 % (2019-4c, 2020-konte-3). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Substitusjon $z=e^{i\theta}$, $dz=iz\,d\theta$, $\cos\theta=\tfrac12(z+z^{-1})$, $\sin\theta=\tfrac1{2i}(z-z^{-1})$; integralet blir $\oint_{|z|=1}$; finn polene **innenfor** enhetssirkelen, bruk residysetningen. **«Ingen tabell»-markering:** substitusjonsformlene *må reproduseres*; polutvelgelsen (kun de innenfor $|z|=1$) *må gjennomføres*.
- **Oppgavesjangre:** B (enhetssirkel-variant). Mønstereksempel: «Regn $\int_0^{2\pi}\tfrac{d\theta}{2+\cos\theta}$ ved å sette $z=e^{i\theta}$.»
- **Typiske feil:** Ta med poler utenfor enhetssirkelen; feil $dz$-faktor ($dz=iz\,d\theta$); rote med $\cos/\sin$-substitusjonene.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.4: Nøkkelhull- og grenkonturer for $z^\alpha$

- **id:** `mat2410-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** mat2410-4-2 · **kapitteltype:** teori
- **description:** Integraler med en ikke-heltallig potens $z^\alpha$ (eller $\log z$) løses med en nøkkelhullskontur langs et grenkutt, der faktoren $1-e^{i2\pi\alpha}$ er nøkkelen.
- **Eksamensbelegg:** Grenkontur/nøkkelhull for $z^\alpha/(z^2+1)$ (2020-4) — toppsjikt-markør. Prioritet: **kunne** (toppsjikt-teknikk).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. For $\int_0^{\infty}\tfrac{x^\alpha}{\dots}\,dx$ ($0<\alpha<1$): bruk en gren av $z^\alpha$ diskontinuerlig langs positiv realakse, en **nøkkelhullskontur** (over aksen, stor sirkel, under aksen, liten sirkel om 0); over- og undersiden gir en faktor $1-e^{i2\pi\alpha}$; residysetningen om de innelukkede polene; vis at de to sirkelbidragene → 0. **«Ingen tabell»-markering:** konturen og $1-e^{i2\pi\alpha}$-faktoren *må kunnes*; grensene *må vises*.
- **Oppgavesjangre:** B (grenkontur-variant, toppsjikt). Mønstereksempel: «Regn $\int_0^{\infty}\tfrac{x^{1/3}}{x^2+1}\,dx$ med en nøkkelhullskontur.»
- **Typiske feil (analysen §5.12):** Overse $1-e^{i2\pi\alpha}$-faktoren mellom over- og undersiden av kuttet; feil gren av $z^\alpha$; glemme å vise at de små/store sirklene forsvinner.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 4.5: Drill — signaturoppgaven a) → b) → c) fra ende til annen

- **id:** `mat2410-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** mat2410-4-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på den kjedede signaturoppgaven: klassifiser singulariteter + residuer → lukket konturintegral → reelt integral via halvsirkel + ML, i A-besvarelsesform.
- **Eksamensbelegg:** Dekker signaturarketypen (B, 20–30 % vekt) som er nesten sikker på hvert sett, kjedet à la reelle sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) skriv funksjonen som brøk, finn singularitetene, bestem orden; 2) regn residuene (velg enkel- eller ordens-$n$-formel; nevn $a_{-1}$-alternativet); 3) sett opp lukket kontur (halvsirkel øvre halvplan eller $|z|=r$), residysetningen; 4) vis at buen → 0 med ML (obligatorisk, full utskrift); 5) grense $r\to\infty$; 6) ekstrahér real-/imaginærdel for $\cos/\sin$; 7) oppgi eksakt svar. **Gjennomregnet eksamenscase** med sensor-margnotater om uttelling ved hvert steg (ML-steget markeres som poengbæreren). 10–15 varianter (enkel pol, dobbelpol via derivasjon, $\cos/\sin$-teller, enhetssirkel, nøkkelhull), alle på eksamensnivå med a)→b)→c)-kjeding.
- **Oppgavesjangre:** A, B. Mønstereksempel (kjedet): «(a) Finn og klassifiser singularitetene til $f(z)=\tfrac{1}{(z^2+1)^2}$ og regn residuene i øvre halvplan. (b) Regn $\oint_{\Gamma_r}f\,dz$ for en halvsirkel med stor $r$. (c) Bruk (a) og (b) til å finne $\int_{-\infty}^{\infty}\tfrac{dx}{(x^2+1)^2}$; begrunn at buen forsvinner.»
- **Typiske feil:** Hele §5-repertoaret for residy/integral samlet: manglende ML (§5.1), feil dobbelpol-residy (§5.2), feil halvplan, bart svar uten begrunnelse (§5.11), ikke se a)→b)→c)-koblingen.
- **Quiz: 14 · Flashcards: 10**

---

### Del 5 — Argumentprinsippet, Rouché og entire funksjoner  *(MAT2410-signatur — svak i tma4121)*

#### Kapittel 5.1: Entire funksjoner — Liouville og polynom-karakterisering

- **id:** `mat2410-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-2-2 · **kapitteltype:** teori
- **description:** Liouvilles teorem (begrenset entire ⇒ konstant), polynom-karakterisering via singularitet i $\infty$, og hvordan Casorati–Weierstrass utelukker vesentlig singularitet.
- **Eksamensbelegg:** Sjanger F — entire/Liouville 5/11 ≈ 45 % og **stigende** (2016, 2020, 2021, 2022). «Vis at $f$ er et polynom»: analysér $g(z)=f(1/z)$ i 0 (2022-6); Cauchy-estimatet på deriverte: $f''=0\Rightarrow f=az+b$ (2020-3). Prioritet: **kunne** (grensende til perfekt — bærer «vis f konstant/polynom»-varianten).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Liouvilles teorem** (begrenset entire ⇒ konstant, bevises via Cauchy-estimatet fra kap. 2.2); **polynom-karakterisering** — analysér singulariteten til $g(z)=f(1/z)$ i 0: pol/hevbar ⇒ polynom, vesentlig ⇒ ikke polynom; **Casorati–Weierstrass** utelukker vesentlig når $|g|$ er begrenset i en punktert omegn; Cauchy-estimatet $\Rightarrow$ $f^{(n)}=0\Rightarrow f$ polynom av grad $<n$. **«Ingen tabell»-markering:** Liouville, Casorati–Weierstrass og $f(1/z)$-metoden *må reproduseres*; analysen *må gjennomføres* med forutsetningssjekk (begrensethet + entire).
- **Oppgavesjangre:** F. Mønstereksempel: «La $f$ være entire med $|f(z)|\le 3|z|^2+5$ for alle $z$. Vis at $f$ er et polynom av grad $\le 2$.»
- **Typiske feil (analysen §5.7):** Påberope Liouville uten begrensethet **eller** uten entire; forveksle pol i $\infty$ med vesentlig; glemme Casorati–Weierstrass-argumentet.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.2: Argumentprinsippet og Rouchés teorem

- **id:** `mat2410-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** mat2410-4-1 · **kapitteltype:** teori
- **description:** Tell nullpunkt i et område: argumentprinsippet via konturintegral, og Rouché ved å velge et dominerende ledd på randen.
- **Eksamensbelegg:** Sjanger C — 7/11 ≈ 64 % og **stigende**, nesten årlig 2018–2023. «Hvor mange nullpunkt har $p(z)$ i D?» løses ved Rouché: velg $f$ med $|f|>|g|$ på $\partial D$. Domenene varierer (enhetsdisk, $|z|<2$, kvart-disk-sektor, annulus, rektangel, halvplan). Ofte kombinert med **algebraens fundamentalteorem** for komplementet. Prioritet: **perfekt** (MAT2410-signatur).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Argumentprinsippet** $\tfrac1{2\pi i}\oint_{\partial D}\tfrac{f'}{f}\,dz=Z-P$ (antall nullpunkt minus poler, med multiplisitet); **Rouchés teorem** — hvis $|f|>|g|$ på hele $\partial D$, har $f$ og $f+g$ like mange nullpunkt (med multiplisitet) i D; oppskrift: skriv $p=f+g$ med $f$ = det ledd som dominerer på randen, tell nullpunktene til $f$ (enkelt); for **sammensatte områder** (sektor, annulus, rektangel) sjekk ulikheten på **hver del** av randen; kombinér med **algebraens fundamentalteorem** (grad = totalt antall nullpunkt) for komplementære områder. **«Ingen tabell»-markering:** begge teoremene *må reproduseres*; oppdelingen $p=f+g$ og randsjekken *må gjennomføres på hele randen*.
- **Oppgavesjangre:** C. Mønstereksempel: «Bruk Rouché til å bestemme antall nullpunkt (med multiplisitet) av $z^8-3z^3+1$ i $|z|<1$ og i $|z|>1$.»
- **Typiske feil (analysen §5.4):** Rouché uten å sjekke hele randen (ved sektor/annulus/rektangel må $|f|>|g|$ verifiseres på hver randkomponent); feil valg av dominerende ledd; glemme å kombinere med algebraens fundamentalteorem for komplementet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Drill — nullpunktstelling (Rouché) og entire karakterisering

- **id:** `mat2410-5-3` · **number:** 5.3 · **estimatedMinutes:** 70 · **prerequisites:** mat2410-5-2 · **kapitteltype:** drill
- **description:** Sjangerdrill på C og F: velg dominerende ledd, sjekk hele randen, tell nullpunkt i disk/annulus/sektor, og karakteriser entire funksjoner via Liouville / $f(1/z)$.
- **Eksamensbelegg:** Dekker sjanger C (64 %, stigende) og F (45 %, stigende) i alle domenevarianter (enhetsdisk, $|z|<2$, annulus, sektor, rektangel, halvplan) + entire/polynom-karakterisering. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser domenet $D$ og randen $\partial D$; 2) skriv $p=f+g$ med $f$ = dominerende ledd på randen; 3) verifiser $|f|>|g|$ på **hver** randkomponent (skriv ut ulikheten); 4) tell nullpunktene til $f$; 5) for komplementet: bruk algebraens fundamentalteorem; 6) for entire: sjekk forutsetningene (begrenset? entire?) og bruk Liouville / $f(1/z)$-analyse. **Gjennomregnet eksamenscase** med margnotater. 10–15 varianter (polynom i disk, i annulus, i sektor; entire med vekstbetingelse), alle på eksamensnivå.
- **Oppgavesjangre:** C, F. Mønstereksempel: «(a) Hvor mange nullpunkt har $z^5+3z^2+1$ i annulusen $1<|z|<2$? (b) Vis at en entire funksjon med $|f(z)|\le e^{|z|}$ og $|f(z)|\ge 1$ overalt er konstant.»
- **Typiske feil:** §5.4 (Rouché uten hele randen) og §5.7 (Liouville uten forutsetninger) samlet; feil dominerende ledd; glemme algebraens fundamentalteorem for komplementet.
- **Quiz: 14 · Flashcards: 10**

---

### Del 6 — Konforme avbildninger og maksimumsprinsippet  *(MAT2410-signatur — fraværende i tma4121)*

#### Kapittel 6.1: Möbius-avbildninger og bildemengder

- **id:** `mat2410-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** mat2410-1-1 · **kapitteltype:** teori
- **description:** Möbius-avbildninger, kryssforholdet, og hvordan man finner bildet av en disk/sirkel ved å avbilde randen og bestemme siden med ett indre punkt.
- **Eksamensbelegg:** Sjanger E — 6/11 ≈ 55 %, stabil klassiker. Gitt tre punkt-korrespondanser eller en formel: bestem bildet av en disk/sirkel. Metoden er alltid den samme (rand + sidebestemmelse). Prioritet: **kunne** (MAT2410-signatur, grensende til perfekt).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Möbius-avbildning** $f(z)=\tfrac{az+b}{cz+d}$ ($ad-bc\neq0$); **kryssforholdet** for å finne $f$ fra tre punkt-korrespondanser; en Möbius sender **generaliserte sirkler til generaliserte sirkler**; oppskrift for bildet av en disk/sirkel: (i) finn bildet av **randen** ved 3 punkter (blir en **linje** hvis et randpunkt sendes til $\infty$, ellers en sirkel); (ii) avgjør **hvilken side** disken avbildes på ved å sjekke ett indre punkt (typisk $f(0)$). **«Ingen tabell»-markering:** kryssforholdsformelen og «sirkel→sirkel»-prinsippet *må kunnes*; randavbildningen + sidebestemmelsen *må gjennomføres*.
- **Oppgavesjangre:** E. Mønstereksempel: «La $h(z)=\tfrac{z}{z-1}$. Bestem bildet $h(\{|z|<1\})$ og begrunn hvilket halvplan disken avbildes på.» (svar: $\operatorname{Re}w<\tfrac12$).
- **Typiske feil (analysen §5.5):** Bildets side ikke bestemt — å finne randlinjen uten å sjekke ett indre punkt for å avgjøre riktig halvplan; feil kryssforhold; overse at et randpunkt på $\infty$ gir linje (ikke sirkel).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Maksimumsprinsippet, Schwarz' lemma og konforme selv-avbildninger

- **id:** `mat2410-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** mat2410-6-1 · **kapitteltype:** teori
- **description:** Maksimumsprinsippet (max $|f|$ på randen), Schwarz' lemma, og de konforme selv-avbildningene av enhetsdisken (Blaschke-faktorer).
- **Eksamensbelegg:** Sjanger H — maksimumsprinsipp/Schwarz 4/11 ≈ 36 % (2016-4, 2017-3, 2020-konte-4c). Konform selv-avbildning av disken med gitt $f(0)$, $f'(0)$ (2019-2, Schwarz/Blaschke). Subtilitet (2023-7): harmonisk $u$ kan være ubegrenset på åpen disk men begrenset på randsirkelen minus ett punkt — ingen motsetning fordi $u$ ikke er kontinuerlig helt ut til randen. Prioritet: **kunne** (MAT2410-signatur).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Maksimumsprinsippet** — en ikke-konstant analytisk $f$ oppnår $\max|f|$ på **randen** (og maksimumsprinsippet for harmoniske funksjoner); brukes til: vise at $f$ er konstant (hvis max oppnås innvendig), estimere $\max|f|$, argumentere for entydighet; **Schwarz' lemma** — $f:\mathbb{D}\to\mathbb{D}$ analytisk med $f(0)=0$ $\Rightarrow$ $|f(z)|\le|z|$ og $|f'(0)|\le1$; likhet ⇒ rotasjon; **konforme selv-avbildninger** av disken er **Blaschke-faktorer** $e^{i\theta}\tfrac{z-a}{1-\bar a z}$, bestemt av $f(0)$ og $f'(0)$. **Subtilitet:** maksimumsprinsippet krever **kontinuitet ut til randen** (2023-7). **«Ingen tabell»-markering:** maksimumsprinsippet, Schwarz' lemma og Blaschke-faktoren *må reproduseres*; forutsetningssjekken (kontinuitet til randen) *må skrives ut*.
- **Oppgavesjangre:** H, E (konform selv-avbildning). Mønstereksempel: «Finn en konform selv-avbildning $f$ av enhetsdisken med $f(0)=\tfrac12$ og vis at $|f'(0)|\le\tfrac34$ via Schwarz' lemma.»
- **Typiske feil (analysen §5.7):** Påberope maksimumsprinsippet uten kontinuitet til randen; bruke Schwarz' lemma uten å ha normalisert $f(0)=0$; glemme at max oppnås **på randen** for ikke-konstante funksjoner.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.3: Harmonisk anvendelse — Poisson og randverdiintuisjon

- **id:** `mat2410-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** mat2410-1-4 · **kapitteltype:** teori
- **description:** Hvordan harmoniske funksjoner løser randverdiproblemer på disken (Poisson-integralet), og koblingen til middelverdiegenskapen og maksimumsprinsippet.
- **Eksamensbelegg:** Randverdi-/harmonisk anvendelse berøres i middelverdi-/maksimumsprinsipp-oppgavene (2023-6, 2023-7). Broen mellom Del 1 (harmonisk) og Del 6 (maksimumsprinsipp). Prioritet: **kunne/kjenne**.
- **Innholdskontrakt:** MÅ KJENNE + delvis anvende. **Poisson-integralet** (løsningen av Dirichlet-problemet på disken — nevnes, brukes lett); middelverdiegenskapen som spesialtilfelle ($r=0$); maksimumsprinsippet for harmoniske funksjoner (max og min på randen); subtiliteten fra 2023-7 (kontinuitet til randen). **«Ingen tabell»-markering:** Poisson-integralet *nevnes* (ikke pugges i detalj); middelverdi og maksimumsprinsipp for harmoniske *må kunnes*.
- **Oppgavesjangre:** H (harmonisk anvendelse). Mønstereksempel: «En harmonisk funksjon $u$ på enhetsdisken har $u=3$ på randen. Hva er $u(0)$, og hvorfor?»
- **Typiske feil:** Anta at middelverdien gjelder uten kontinuitet til randen; forveksle maksimumsprinsippet for analytiske ($|f|$) med det for harmoniske ($u$ selv, både max og min).
- **Quiz: 14 · Flashcards: 14**

---

### Del 7 — Randtema: Fourier-rekke og harmonisk anvendelse  *(prioritet: KJENNE — sporadisk)*

#### Kapittel 7.1: Kompleks Fourier-rekke og tallrekkesummer

- **id:** `mat2410-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** mat2410-3-1 · **kapitteltype:** teori
- **description:** Den sporadiske Fourier-oppgaven: kompleks Fourier-koeffisient, uniform konvergens, og å summere en tallrekke ved innsetting av et punkt.
- **Eksamensbelegg:** Sjanger K — **epoke-rest, kun 2017 og 2019** (2/11 ≈ 18 %). Grensesone mot tma4121 (se analysen §7–8). Kompleks Fourier-koeffisient $c_k=\tfrac1{2\pi}\int_{-\pi}^{\pi}f(e^{it})e^{-ikt}\,dt$; uniform konvergens; summér tallrekke (2017-4 $\cos(t/2)$; 2019-5 firkantbølge → $1-\tfrac13+\tfrac15-\dots=\tfrac\pi4$). Prioritet: **kjenne** — dekk lett, merk «sporadisk / grensesone mot tma4121». *(verifiser om Fourier gjentas i sett fra 2024.)*
- **Innholdskontrakt:** MÅ KJENNE. **Kompleks Fourier-koeffisient** $c_k=\tfrac1{2\pi}\int_{-\pi}^{\pi}f(t)e^{-ikt}\,dt$; utnytt paritet/eksponensialform; **uniform konvergens** ($\sum|c_k|<\infty$ ⇒ M-test, eller $f\in C^2$); **summering av en tallrekke** ved å sette inn et konkret punkt i den konvergerte rekka. **«Ingen tabell»-markering:** koeffisientformelen *må kunnes*; M-testen og innsettingen *må gjennomføres*. Kryssref tma4121 (Fourier-rekker) om kapitlet finnes ved bygg.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn den komplekse Fourier-rekka til en firkantbølge på $[-\pi,\pi]$ og bruk et passende punkt til å vise at $1-\tfrac13+\tfrac15-\dots=\tfrac\pi4$.»
- **Typiske feil:** Fortegn i eksponenten ($e^{-ikt}$ i integralet, $e^{+ikt}$ i rekka); glemme $k=0$-leddet; glemme midling i diskontinuiteter før tallrekke-innsetting.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 7.2: Kompleks hastighetspotensial og væskestrøm

- **id:** `mat2410-7-2` · **number:** 7.2 · **estimatedMinutes:** 40 · **prerequisites:** mat2410-1-4 · **kapitteltype:** teori
- **description:** En kort anvendelse av harmoniske funksjoner: det komplekse hastighetspotensialet for en todimensjonal, inkompressibel, virvelfri strømning.
- **Eksamensbelegg:** Væskestrøm/hastighetspotensial **kun 2021** (1/11 ≈ 9 %). Kort dekning som harmonisk anvendelse. Prioritet: **kjenne**.
- **Innholdskontrakt:** MÅ KJENNE. Komplekst hastighetspotensial $\Omega(z)=\varphi+i\psi$ ($\varphi$ = hastighetspotensial, $\psi$ = strømfunksjon, begge harmoniske); hastighetsfeltet $\overline{\Omega'(z)}=u-iv$; strømlinjer = nivåkurver til $\psi$; koblingen til analytisitet (CR ⇔ inkompressibel + virvelfri). **«Ingen tabell»-markering:** definisjonene *nevnes/kjennes*; enkel avlesning av strømlinjer *må kunnes*.
- **Oppgavesjangre:** Harmonisk anvendelse (lav-frekvens). Mønstereksempel: «Gitt hastighetspotensialet $\Omega(z)=z^2$, finn strømfunksjonen $\psi$ og skissér strømlinjene.»
- **Typiske feil:** Blande $\varphi$ og $\psi$; feil fortegn i $\overline{\Omega'}$; anta at ethvert harmonisk par gir en fysisk strømning uten CR-kobling.
- **Quiz: 12 · Flashcards: 12**

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Sjangerverksted — din egen formel-liste og «vis f konstant»-drill

- **id:** `mat2410-8-1` · **number:** 8.1 · **estimatedMinutes:** 75 · **prerequisites:** mat2410-6-2 · **kapitteltype:** drill
- **description:** «Ingen tabell»-verkstedet: bygg din egen mentale formel-liste (residyformler, standardrekker, Möbius/Blaschke), og drill den korte, høyfrekvente G-sjangeren («vis f konstant») samlet.
- **Eksamensbelegg:** Metakapittel + G-drill. Dekker det studenten må ha utenat (fordi ingen tabell deles ut) og den tryggeste poengkilden (G, 82 %). Prioritet: **perfekt** (G) / **kjenne** (verkstedet).
- **Innholdskontrakt:** To deler. **(1) Formel-listeverksted:** en systematisk gjennomgang av alt som *må reproduseres utenat* (CR-likningene, residyformlene enkel/orden $n$, residysetningen, ML-estimatet, Cauchys integralformel, standardrekkene $e^z,\sin,\cos,\tan,\operatorname{Log}(1+z)$ + geometrisk, Möbius-/kryssforholds-formelen, Blaschke-faktoren, Liouville, Casorati–Weierstrass, argumentprinsippet/Rouché) med en oppgave «skriv opp alle av hukommelsen». **(2) G-drill:** 8–12 «vis f konstant»-varianter (alle forkledninger: $\bar f$ analytisk, $u=cv$, $f$ reell, $\operatorname{Re}f=\operatorname{Im}f$, $|f|$ konstant, harmonisk konjugert) på eksamensnivå, med sensor-margnotater om at sammenhengs-argumentet må skrives ut.
- **Oppgavesjangre:** G + reproduksjon. Mønstereksempel: «(a) Skriv opp residyformelen for en pol av orden 3 og standardrekka for $\tan z$ av hukommelsen. (b) La $f$ være analytisk på et sammenhengende område med $\overline{f}$ analytisk. Vis at $f$ er konstant.»
- **Typiske feil:** Hele §5-repertoaret for G (stoppe før alle fire partiellderiverte er 0, glemme sammenheng); stole på en tabell som ikke finnes på eksamen.
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 8.2: Øvingseksamen 1 — den faste 2018–2023-malen

- **id:** `mat2410-8-2` · **number:** 8.2 · **estimatedMinutes:** 90 · **prerequisites:** mat2410-8-1 · **kapitteltype:** øvingseksamen
- **description:** Et komplett sett som speiler den faste malen (5–7 vektede oppgaver, 4 t, ingen hjelpemidler), med A-løsningsforslag og vekting.
- **Eksamensbelegg:** Speiler den faste 2018–2023-sammensetningen (analysen §7). Prioritet: dekker A, B, C, D, G på eksamensnivå.
- **Innholdskontrakt:** Nyskrevne oppgaver med vektprosent (sum 100 %): O1 kompleks-likning-åpning (J, 10 %) + O2 «vis f konstant» (G, 10 %) + O3 Laurent m/konvergensområde + klassifisering (D+A, 15 %) + O4 Rouché-nullpunktstelling (C, 15 %) + O5 **tung signaturoppgave** kjedet a)→b)→c) residy→kontur→reelt integral m/ML (B, 30 %) + O6 Möbius/bildemengde (E, 20 %). Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse, med `tip`-notat om delpoeng og hva sensor belønner (ML-steget, teoremnavn, forutsetningssjekk).
- **Oppgavesjangre:** J, G, D, A, C, B, E. Alle nyskrevne (egne tall/funksjoner).
- **Typiske feil:** Tidsbudsjett (30 %-oppgaven må ikke spise de faste 10 %-oppgavene); ML-argumentet i O5; hele randen i O4.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2 — signatur-flanken (Rouché, konform, entire, primitiv)

- **id:** `mat2410-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** mat2410-8-2 · **kapitteltype:** øvingseksamen
- **description:** Et komplett sett som vektlegger MAT2410-signaturen (argumentprinsipp/Rouché, konform, entire, primitiv/log) i tillegg til residy-kjernen — med A-løsningsforslag.
- **Eksamensbelegg:** Speiler et sett med tyngre signatur-flanke (analysen §7 + §8). Prioritet: dekker C, E, F, I, B, H på eksamensnivå.
- **Innholdskontrakt:** Nyskrevne oppgaver med vektprosent (sum 100 %): O1 harmonisk konjugert + middelverdi (G/H, 10 %) + O2 primitiv/eksistens + grenoppdelt $\operatorname{Log}$ (I, 15 %) + O3 entire/polynom-karakterisering via $f(1/z)$ + Liouville (F, 15 %) + O4 argumentprinsipp/Rouché i annulus + algebraens fundamentalteorem (C, 15 %) + O5 **tung signaturoppgave** m/dobbelpol eller nøkkelhull $z^\alpha$ (B, 25 %) + O6 konform selv-avbildning av disken (Schwarz/Blaschke) + bildemengde (E/H, 20 %). Løsningsforslag som A-besvarelse i `collapsible`, med `tip`-notat om forutsetningssjekk (enkeltsammenheng, begrensethet, kontinuitet til randen) som toppsjikt-markør.
- **Oppgavesjangre:** G, H, I, F, C, B, E. Alle nyskrevne.
- **Typiske feil:** Forutsetningssjekk (enkeltsammenheng før primitiv, begrensethet før Liouville, hele randen i Rouché, kontinuitet til randen i maksimumsprinsipp); $1-e^{i2\pi\alpha}$-faktoren i O5 hvis nøkkelhull.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3 — bred blanding med sporadiske tema

- **id:** `mat2410-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** mat2410-8-3 · **kapitteltype:** øvingseksamen
- **description:** Et tredje komplett sett som blander kjernen med de sporadiske temaene (Fourier-rekke, enhetssirkel-integral, væskestrøm) så studenten er robust mot uvanlige år.
- **Eksamensbelegg:** Speiler et «bredt» sett inkl. epoke-rester (2017/2019-Fourier, 2019/2020-konte-enhetssirkel, 2021-væskestrøm). Prioritet: robusthet — dekker gjenværende sjangre (K, enhetssirkel-B, harmonisk anvendelse) minst én gang.
- **Innholdskontrakt:** Nyskrevne oppgaver med vektprosent (sum 100 %): O1 kompleks likning/røtter (J, 10 %) + O2 CR/analytisitet + hvor deriverbar (G, 10 %) + O3 trig-integral via enhetssirkel (B enhetssirkel-variant, 15 %) + O4 singularitet-i-$\infty$ + klassifisering (A/F, 15 %) + O5 **tung residy-/reelt-integral** m/ML (B, 25 %) + O6 kompleks Fourier-rekke + tallrekkesum (K, 15 %) + O7 væskestrøm/hastighetspotensial (harmonisk anvendelse, 10 %). Løsningsforslag som A-besvarelse i `collapsible`, med `tip` om at de sporadiske temaene er lavvekts men gir trygge poeng når de dukker opp.
- **Oppgavesjangre:** J, G, B, A, F, K, harmonisk anvendelse. Alle nyskrevne.
- **Typiske feil:** Ta med poler utenfor enhetssirkelen (O3); glemme midling i Fourier-tallrekka (O6); tidsbudsjett med sju oppgaver.
- **Quiz: 10 · Flashcards: 0**

Til sammen dekker de tre øvingseksamenene samtlige sjangre A–K minst én gang.

---

## Summeringskontroll (quiz/flashcards)

Denne tabellen er **AUTORITATIV (FASIT) for alle senere faser**. Flashcard-tallene
her er hevet over de foreløpige tallene i enkelte kapittelavsnitt over (§3) fordi
faget er teorem- og notasjonstungt uten utdelt tabell; **der brødteksten avviker,
gjelder tallene i denne tabellen**. Per-kapittel-fordelingen av flashcards følger
den korrigerte kolonnen (summene under stemmer med den).

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 18 |
| 1 | 1.1–1.4 | 18+20+20+18 = **76** | 26+26+22+22 = **96** |
| 2 | 2.1–2.3 | 18+16+16 = **50** | 22+22+22 = **66** |
| 3 | 3.1–3.4 | 16+20+20+14 = **70** | 22+26+26+12 = **86** |
| 4 | 4.1–4.5 | 22+20+14+12+14 = **82** | 30+24+18+16+12 = **100** |
| 5 | 5.1–5.3 | 18+20+14 = **52** | 26+26+12 = **64** |
| 6 | 6.1–6.3 | 20+18+14 = **52** | 26+24+18 = **68** |
| 7 | 7.1–7.2 | 14+12 = **26** | 18+16 = **34** |
| 8 | 8.1–8.4 | 12+10+10+10 = **42** | 16+0+0+0 = **16** |
| **Sum** | **28 kap.** | **564 ≥ 500 ✓** | **566 ≥ 500 ✓** |

**Autoritativ, endelig kvotesum (FASIT):** **Quiz 564 · Flashcards 566** — begge
godt over gulvet på 500. Kvotene er minimum per kapittel; forfatteren kan
overskyte, aldri underskride. Øvingseksamenene (Del 8) bidrar med quiz, ikke
flashcards (de har ingen toppnivå-`definition`-blokker).

**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** MAT2410 er teorem- og
notasjonstungt, og **ingen tabell deles ut** — derfor er flashcards
(residyformler, teoremnavn med forutsetninger, standardrekker, notasjonspar,
Möbius/Blaschke) særlig verdifulle for rask reproduksjon under tidspress. Derfor
ligger flashcards (566) marginalt over quiz (564) og godt over gulvet, med
tyngdepunkt i perfekt-søylene: Del 1 (CR/harmonisk, 96 fc), Del 3 (Laurent/
singularitet, 86 fc) og Del 4 (residy/signatur, 100 fc) bærer 282 av 566
flashcards. Øvingseksamenene (Del 8) bidrar med quiz, ikke flashcards (de har
ingen toppnivå-`definition`-blokker).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 1–6; 2 for randtema-delen Del 7 — 26 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang i minutter. **Avvik dokumentert:** Del 0 (eksamenskart) og
Del 8 (eksamenstrening) har ingen egne prøver; Del 7 er ren «kjenne»-dekning på to
kapitler (sporadiske tema) og får **2** prøver i stedet for 4.

**Del 1 — Analytiske og harmoniske funksjoner** (`mat2410-1-prove`)
1. Prøve 1.A (30 min): Komplekse tall, polarform, røtter og kompleks likning (sjanger J).
2. Prøve 1.B (30 min): Analytisitet og Cauchy–Riemann-verifikasjon (sjanger G-forb.).
3. Prøve 1.C (35 min): «Vis at f er konstant» i tre forkledninger (sjanger G).
4. Prøve 1.D (35 min): Harmonisk konjugert + middelverdi, full oppgave (sjanger G, eksamensnivå).

**Del 2 — Kompleks integrasjon** (`mat2410-2-prove`)
1. Prøve 2.A (30 min): Kurveintegral + parametrisering + ML-estimat (apparat for B).
2. Prøve 2.B (30 min): Cauchys integralformel for f og deriverte (sjanger F-forb.).
3. Prøve 2.C (35 min): Primitiv/eksistens + $\oint dz/z$ + grenoppdelt $\operatorname{Log}$ (sjanger I).
4. Prøve 2.D (35 min): Blandet integrasjonsoppgave (Cauchy-teorem + primitiv, eksamensnivå).

**Del 3 — Potens- og Laurentrekker + singulariteter** (`mat2410-3-prove`)
1. Prøve 3.A (30 min): Potensrekke + konvergensradius + leddvis operasjon (sjanger D-forb.).
2. Prøve 3.B (35 min): Laurentrekke i flere annuli med konvergensområde (sjanger D).
3. Prøve 3.C (35 min): Klassifiser singulariteter + orden + singularitet i $\infty$ (sjanger A).
4. Prøve 3.D (40 min): Full Laurent + klassifisering + $a_{-1}$ (sjanger A+D, eksamensnivå).

**Del 4 — Residyregning og reelle integraler** (`mat2410-4-prove`)
1. Prøve 4.A (35 min): Residysetningen + begge residyformlene (enkel/orden n) (sjanger A).
2. Prøve 4.B (45 min): Reelt integral via halvsirkel + ML, $\cos/\sin$-variant (sjanger B).
3. Prøve 4.C (35 min): Trig-integral via enhetssirkel + nøkkelhull $z^\alpha$ (sjanger B-varianter).
4. Prøve 4.D (45 min): Signaturoppgaven kjedet a)→b)→c), full vekt (sjanger A+B, eksamensnivå).

**Del 5 — Argumentprinsippet, Rouché og entire funksjoner** (`mat2410-5-prove`)
1. Prøve 5.A (35 min): Liouville + polynom-karakterisering via $f(1/z)$ (sjanger F).
2. Prøve 5.B (35 min): Rouché i disk + algebraens fundamentalteorem (sjanger C).
3. Prøve 5.C (35 min): Argumentprinsippet i annulus/sektor, sjekk hele randen (sjanger C).
4. Prøve 5.D (40 min): Blandet C+F på eksamensnivå (nullpunktstelling + entire).

**Del 6 — Konforme avbildninger og maksimumsprinsippet** (`mat2410-6-prove`)
1. Prøve 6.A (35 min): Möbius fra tre punkter + bildemengde + sidebestemmelse (sjanger E).
2. Prøve 6.B (35 min): Maksimumsprinsippet + Schwarz' lemma (sjanger H).
3. Prøve 6.C (35 min): Konform selv-avbildning av disken (Blaschke/Schwarz) (sjanger E/H).
4. Prøve 6.D (40 min): Bildemengde + maksimumsprinsipp kombinert (eksamensnivå).

**Del 7 — Randtema (sporadisk)** (`mat2410-7-prove`)
1. Prøve 7.A (35 min): Kompleks Fourier-rekke + uniform konvergens + tallrekkesum (sjanger K).
2. Prøve 7.B (30 min): Harmonisk anvendelse — hastighetspotensial/strømfunksjon (harmonisk anvendelse).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Mal den speiler | Miks (oppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Fast 2018–2023-mal, 6 vektede oppg. | Kompleks likning (J) + «vis f konstant» (G) + Laurent+klassifisering (D+A) + Rouché (C) + tung residy→kontur→reelt integral m/ML (B, 30 %) + Möbius/bildemengde (E) |
| Øvingseksamen 2 (kap. 8.3) | Tyngre signatur-flanke, 6 vektede oppg. | Harmonisk konjugert+middelverdi (G/H) + primitiv/log (I) + entire/polynom (F) + argumentprinsipp/Rouché i annulus (C) + tung residy m/dobbelpol el. nøkkelhull (B, 25 %) + konform selv-avbildning (E/H) |
| Øvingseksamen 3 (kap. 8.4) | Bred blanding m/sporadiske tema, 7 vektede oppg. | Kompleks likning (J) + CR/analytisitet (G) + enhetssirkel-integral (B) + singularitet i $\infty$ (A/F) + tung residy m/ML (B, 25 %) + kompleks Fourier-rekke (K) + væskestrøm (harmonisk anvendelse) |

Til sammen dekker de tre settene samtlige sjangre A–K minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, ingen hjelpemidler, **ingen utdelt
   tabell**, 5–7 vektede oppgaver, alt begrunnet), formathistorikken (MAT2300 →
   MAT2410, fast mal fra 2018) og pandemi-unntaket 2020/2021 (fra kap. 0.1).
2. **De fem søylene og prioriteringskartet** — temafrekvens-tabellen omgjort til
   tre lesenivåer: **perfekt** (residy/signatur Del 4, «vis f konstant» Del 1,
   Rouché Del 5, Laurent/singularitet Del 3), **kunne** (Möbius/maksimumsprinsipp
   Del 6, primitiv/log Del 2, entire Del 5), **kjenne** (Fourier-rekke, væskestrøm
   Del 7, kompleks likning som åpning).
3. **«Ingen tabell»-strategien** — hva som *må reproduseres utenat* (residyformler,
   standardrekker, CR, Cauchys integralformel, Möbius/Blaschke) vs. *må utledes*,
   og oppskriften på studentens egen mentale formel-liste (fra kap. 8.1).
4. **Sjangerguiden** — de 11 oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (3.4, 4.5, 5.3) og sjangerverkstedet (8.1) i kortform, med
   signaturoppgavens a)→b)→c)-kjede fremhevet.
5. **Sensorreglene** — «alt begrunnes», bær teoremnavn eksplisitt, sjekk
   forutsetninger FØR teoremet, ML-argumentet er obligatorisk, flere metoder
   premieres; karakterskille-listen (enkeltsammenheng før primitiv, begrensethet
   før Liouville, kontinuitet til randen før maksimumsprinsipp, singularitet i
   $\infty$ via $f(1/z)$, hele randen i Rouché).
6. **Feilkatalogen** — de 12 typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → perfekt-søylene 3 → 4 (residy/signatur) → 5 (Rouché), deretter 2
   (integrasjon/primitiv) og 6 (konform/maksimum), Del 7 sist; prøver underveis,
   øvingseksamenene de tre siste ukene under tidspress (240 min, vektstyrt budsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat2410` med alle 28
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer sjanger-katalogen A–K, frekvenstallene og
   «ingen tabell»-prinsippet som resten refererer til.
3. **Del 1** (kap. 1.1–1.4) — fundamentet (komplekse tall/log) + CR-maskineriet
   («vis f konstant») + harmonisk konjugert. Kap. 1.1 er forutsetning for alt.
4. **Perfekt-søylene i avhengighetsrekkefølge**: Del 2 (integrasjon, krever 1.2) →
   Del 3 (rekker/singulariteter, krever 2.2) → Del 4 (residy/signatur, krever 3.3)
   → Del 5 (Rouché/entire, krever 4.1 og 2.2).
5. **Signatur-flanken**: Del 6 (konform/maksimum, krever 1.1 og 6.1-kjede).
6. **Del 7** (randtema, sporadisk) og **Del 8** (øvingseksamenene til slutt — de
   gjenbruker alt); prøvene (§4) legges som prøvekapittel per del med id
   `mat2410-<del>-prove` og chapterNumber `<del>.P`.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Arbeidsdeling mot tma4121 (unngå kopiering)

MAT2410 og tma4121 deler en **nesten identisk residy-/Laurent-/CR-kjerne**
(analysen §8). For å unngå duplisering:
- **Delt kjerne (kan kryssrefereres, MEN skrives med UiO-vekting og «ingen
  tabell»-vinkel, ikke kopieres fra tma4121s «kode E»-formuleringer):**
  residysetningen + residyformler (Del 4), ML-halvsirkel-integralet (kap. 4.2),
  Laurent-rekker med annuli (Del 3), Cauchy–Riemann/harmonisk konjugert (Del 1),
  singularitetsklassifisering (kap. 3.3). Samme teoremer og notasjon; MAT2410
  bruker `Res[f,z_0]`/`Log`/`Arg`-konvensjonen og vektlegger memorering+utledning
  (ingen tabell), mens tma4121 refererer sitt formelark.
- **MAT2410 EIER (bygg ut her — svakt/fraværende i tma4121):**
  **argumentprinsippet/Rouché** (Del 5, 64 % og stigende), **Möbius-/konforme
  avbildninger med bildemengder** (Del 6, 55 %), **maksimumsprinsippet/Schwarz'
  lemma** (kap. 6.2, 36 %), **primitiv/grenoppdelt logaritme** (kap. 2.3, 36 %),
  og **singularitet i $\infty$ via $f(1/z)$ + Casorati–Weierstrass** (kap. 3.3/5.1).
  Disse er MAT2410s signatur og har egne, tyngre kapitler her.
- **Utenfor MAT2410 (dekkes IKKE her — tma4121-territorium):** flervariabel
  kalkulus, lineær algebra, Laplace-transform, Fourier-transform/DFT og PDE-
  separasjon. MAT2410s eneste transform-berøring er den **sporadiske** kompleks
  Fourier-rekka (kap. 7.1), som dekkes lett og merkes «grensesone mot tma4121».
- **mat2400 (reell analyse):** svakt overlapp (kun grunnbegreper + Fourier i
  Hilbertrom-forstand) — ingen gjenbruk utover felles kontinuitets-/
  konvergensbegreper. Ikke kryssref med mindre kapitlet finnes ved bygg.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle uttrykk i `$...$`/`$$...$$`; `\\` i JSON; ingen unicode-brøker;
  konsistent notasjon ($f=u+iv$, $u_x=v_y$, $u_y=-v_x$, $\operatorname{Res}[f,z_0]$,
  $a_{-1}$, $\oint=2\pi i\sum\operatorname{Res}$, $\Gamma_r$, annulus $r<|z-z_0|<R$,
  $\operatorname{Log}z$, $\operatorname{Arg}z$, Möbius $(az+b)/(cz+d)$,
  Blaschke $e^{i\theta}(z-a)/(1-\bar a z)$).
- [ ] **«Ingen tabell»-markering**: hvert kapittel skiller eksplisitt «må kunnes
  utenat / reproduseres» fra «må utledes aktivt» (grep etter begge frasene).
- [ ] **Teorem-/metodenavn båret eksplisitt**: residysetningen, Cauchys integral-
  teorem/-formel, Liouville, Casorati–Weierstrass, maksimumsprinsippet, Rouché,
  argumentprinsippet, algebraens fundamentalteorem, Schwarz' lemma skrives ut
  der de brukes (grep).
- [ ] **Forutsetningssjekk-warnings**: enkeltsammenheng før primitiv (2.3),
  begrensethet+entire før Liouville (5.1), hele randen i Rouché (5.2), kontinuitet
  til randen i maksimumsprinsippet (6.2) — hver med egen `warning`.
- [ ] **ML-argumentet obligatorisk**: kap. 4.2 og 4.5 skriver ut ML-estimatet fullt
  (nedre skranke via trekantulikhet, $|e^{iz}|\le1$), aldri hoppet over.
- [ ] **Flere metoder vist** der sjangeren har dem (residy via $a_{-1}$ vs.
  grenseformel; konturintegral via residysetning vs. Laurent-koeffisient).
- [ ] **Bevis-eksempler**: hvert teorikapittel har minst ett `example` som er et
  fullt bevis skrevet som A-besvarelse (ikke bare regnestykke).
- [ ] **Sporadiske tema merket**: Fourier-rekke (7.1) og væskestrøm (7.2) har
  `tip`-notat «sporadisk / grensesone mot tma4121 / verifiser mot 2024-sett».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  Symbol-/formelliste-`collapsible`, Typiske feil-`warning`, 2–4 eksempler (siste
  på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler (3.4, 4.5, 5.3, 8.1) har løsningsoppskrift + sensor-kommentert case
  + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 564 og flashcard-sum ≥ 566** per den korrigerte kvotetabellen (§3).
- [ ] **Prøver**: 4 per temadel 1–6 + 2 for Del 7 (26 stk, id `mat2410-<del>-prove`)
  + 3 øvingseksamener som sammen dekker sjangrene A–K.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og kontekst;
  ingen formuleringer fra reelle sett eller løsningsforslag (skjelettets
  mønstereksempler er selv omskrivninger og varieres videre, kopieres ikke inn ordrett).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

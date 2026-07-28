# Bokskjelett: TMA4165 Dynamiske systemer (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter teorien/
> eksempelet de trener, aldri all teori øverst med oppgavene samlet nederst. Ingen
> oppgave får kreve stoff som ikke er dekket tidligere i kapitlet eller i eksplisitt
> refererte forkunnskaper (flytt teoribiten tidligere ved behov). Autoritativ kilde:
> README «Leserkrav» + `DNA-regnefag.md`. Unntak: øvingseksamen-/prøve-/modell-
> besvarelseskapitler følger sin egen arketype (komplett sett først, løsninger i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret — løkka
> styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NTNU/SIF-arkivet 2002–2021: ~24 velkarakteriserte sett; V04–V13,
> V19, K19 og juni 2021 lest med maskinlesbar fasit, 2016–2018 lest via oppgavesett fordi
> fasitene er håndskrevne skann). Alle oppgaver, systemer og talleksempler i boka skal
> være NYSKREVNE (se §6). Teoremnavn (Hartman–Grobman, Poincaré–Bendixson, Bendixson,
> Grönwall, Picard–Lindelöf, Liénard), notasjon og standard klassifikasjonskriterier er
> ikke opphavsrettslig beskyttet og brukes fritt.
>
> **Matematisk presisjon er kritisk.** Fortegns-, stabilitets- og indekspåstander som
> forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i fase 6, og
> fortegns-/entydighetspåstander parametersjekkes numerisk FØR de påstås ubetinget
> (DNA-regnefag «Matematisk sannhetskontroll»). Hele teoriapparatet må kunne aktivt og
> fra hukommelsen — dette er en eksamen der **alt utledes og skisseres fra hodet**, med
> **kun en enkel kalkulator (kode D)**: ingen formelsamling, ingen lærebok, ingen egne
> notater.
>
> **§0 — Statusverifisering og profilering (verifisert mot NTNUs emneside 2026-07-11):**
> TMA4165 Dynamiske systemer (7,5 studiepoeng) er et **AKTIVT emne**. Det ble undervist
> **vår 2026** (ordinær skriftlig skoleeksamen 26. mai 2026, kode D — kun kalkulator) og
> har oppsatt undervisning/eksamen igjen **vår 2027**. Studiepoengreduksjonstabellen
> kobler emnet kun mot **forgjengerkoden SIF5025** (samme emne, gammel kode 2002–2003) —
> det finnes ingen etterfølger som overtar pensumet, og innholdet dekkes ikke av andre
> bygde skjeletter (tma4110-familien behandler lineær algebra + lineære konstant-
> koeffisient-ODE-er, ikke kvalitativ planar dynamikk; tma4135 behandler transform-/
> Fourier-/PDE-metoder). **Boka bygges derfor som fullt eget skjelett** mot den aktive
> TMA4165-eksamenen. Kalibreringen bygger på 2002–2021-arkivet; verifiser vekten av
> 2021-teorilaget (sentermangfoldighet, Banach-fikspunkt) og eventuell gjeninnføring av
> fraktaler/kaos mot neste ordinære sett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4165` |
| Tittel | **TMA4165 Dynamiske systemer (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4165 Dynamiske systemer». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — utlednings-/analyse-variant. Eksamen er utlednings- og analyseoppgaver med (delvis) entydige svar: klassifisér likevektspunkt, avgjør stabilitet, regn indeks, utled bifurkasjonspunkt, vis eksistens/entydighet. Fasiten er dels et tall/en klasse (node/sadel/fokus/senter; indeks −2; stabil/ustabil), dels en **skisse** (faseportrett med orientering) og dels en **begrunnelse** (Lyapunov-argument, invariant annulus). Nærmeste forbilder blant bygde skjeletter: `tma4110` (lineær-ODE-apparatet gjenbrukes), `kj1020` (skisse-i-tekst-notasjonen, se §2 «Fasplan-notasjonen»). |
| Antall kapitler | **28** (Del 0: 2 · temadeler 1–8: 22 · eksamenstrening Del 9: 4) |
| Estimert totaltid | **~1 460 min ≈ 24 timer** (per kapittel under) |
| Quiz totalt | **518** (krav ≥500) |
| Flashcards totalt | **612** (kvalitativ ODE-teori uten oppslagsverk → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** TMA4165 er blant de mest forutsigbare emnene i hele
høyskolearkivet. Skriftlig skoleeksamen, **4 timer, kode D** — kun en enkel kalkulator,
ingen formelsamling og ingen lærebok, så hele teoriapparatet (klassifikasjonskriterier,
indeksformel, Lyapunov-teoremer, Poincaré–Bendixson, Liénard-betingelser) må sitte i
hodet. Settene har 5–9 oppgaver uten flervalg, og **fire søyler bærer 70–80 % av
poengene på nesten hvert sett**: (1) **lineære planare systemer** — klassifisér
likevektspunktet fra sporet, determinanten og diskriminanten ($p=\operatorname{tr}A$,
$q=\det A$, $\Delta=p^2-4q$) og skissér faseportrettet med orientering (~93 %); (2)
**stabilitet i ikke-lineære likevektspunkt** — linearisering + Hartman–Grobman, og
**Lyapunov-funksjoner** når lineariseringen svikter (~87 % / ~80 %); (3) **periodiske
løsninger** — Poincaré–Bendixson (invariant annulus), Bendixsons negative kriterium,
Hamilton- og Liénard-systemer (~73 % / ~60 %); (4) **indeksteori** — indeks av
likevektspunkt/lukket kurve, Bendixsons indeksformel $I=1+(e-h)/2$, indeks i uendelig
(~80 %). Den moderne æraen (2013→) legger til to faste søyler til: **bifurkasjon** (~60 %)
og **eksistens/entydighet** (Grönwall, Picard–Lindelöf, blow-up; ~60 %). Boka er bygd
baklengs fra det sensor faktisk premierer: **navngitte teoremer brukt eksplisitt**,
**faseportretter MED begrunnet orientering**, **presis skjelning stabil / asymptotisk
stabil / ustabil**, og korrekt håndtering av **ikke-hyperbolske punkt** der
Hartman–Grobman ikke gjelder.

**Kritisk plattformbetingelse (gjelder HELE boka) — fasplan-notasjonen:** Plattformen kan
**ikke tegne faseportretter, vektorfelt eller bifurkasjonsdiagrammer** grafisk i løpende
tekst. Emnet er samtidig gjennomgående visuelt (nesten hvert sett ber om minst én skisse).
Boka løser dette todelt:

- **Statiske SVG-figurer** for de sentrale, tilbakevendende diagrammene (jf. DNA-regnefag
  «Figurkrav»): de fire lineære faseportrett-typene (stabil/ustabil node, sadel,
  stabil/ustabil fokus, senter) med egenvektorretninger og orienteringspiler; en generisk
  invariant annulus for Poincaré–Bendixson; et bifurkasjonsdiagram (saddle-node). Filer i
  `public/images/textbook/tma4165/*.svg`, wiret som `image`-blokker der analysen står, og
  gjenbrukt som referansefigur i drillkapitlene («slik skal skissen din se ut — merk
  aksene, egenvektorene og pilene»). Kjør `npx tsx scripts/upload-media-storage.ts` etter
  at figurene er skrevet.
- **Tekstnotasjon for det som varierer per oppgave** (der en egen SVG ikke lønner seg):
  et fast oppsett der hver skisse beskrives systematisk — likevektspunkt (koordinat +
  type), nullkliner ($\dot x=0$ og $\dot y=0$ som hjelpelinjer), egenvektorretninger, og
  **orienteringen begrunnet** (regn vektorfeltet i ett bekvemt punkt, f.eks. på en akse,
  eller fortegnet til $\dot\theta$). Eksempel: «Origo er en stabil spiral ($p<0$, $\Delta<0$);
  banene spiraler innover; orienteringen er med klokka fordi $\dot y>0$ på den positive
  $x$-aksen.»

Denne notasjonen er selve broen mellom en skisseeksamen og en tekstplattform, og brukes
uendret i alle kapitler.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemidler = **kode D — kun en
enkel kalkulator, og INGENTING annet** (ingen formelsamling, ingen lærebok, ingen
notatark). Til forskjell fra transform-/numerikk-emner (tma4135) deles det **ingen
formelark** ut. Alle klassifikasjonskriterier, indeksformelen, Lyapunov-teoremene,
Poincaré–Bendixson, Bendixsons kriterier og Liénard-betingelsene må pugges og kunne
anvendes fra hukommelsen. Boka bygger derfor **automatiserte hoderutiner** (regn $p,q,\Delta$;
sett opp Jacobimatrisen; gjett en kvadratisk Lyapunov-ansatz; regn divergensen), ikke
oppslagskunnskap.

**Kritisk notasjonsregel (emnets faste apparat):** Systemet skrives $\dot x=X(x,y)$,
$\dot y=Y(x,y)$ (eller $\dot{\mathbf x}=f(\mathbf x)$); Jacobimatrise $J$ / $Df$; for
lineære system $p=\operatorname{tr}A$, $q=\det A$, $\Delta=p^2-4q$; egenverdier $\lambda$,
egenvektorer $\mathbf v$; Lyapunov-funksjon $V$ med $\dot V=\nabla V\cdot f$; indeks $I$,
indeks i uendelig $I_\infty$; elliptiske/hyperbolske sektorer $e$/$h$; Hamiltonfunksjon
$H$; polare koordinater $r,\theta$ med $r\dot r=x\dot x+y\dot y$ og
$r^2\dot\theta=x\dot y-y\dot x$; $\omega$-grensemengde $\omega(\Gamma)$; Poincaré-avbildning
$P$; Lipschitz-konstant $L$. All matematikk i LaTeX (`$...$` / `$$...$$`). Norsk bokmål;
engelsk fagterminologi i parentes ved første forekomst (emnet undervises på engelsk).

**Bevisst nedprioritert (begrunnes i Del 0):** **fraktaldimensjon/IFS** ($n\cdot s^D=1$)
og **kaotisk dynamikk** (Devaney, $z\mapsto z^2$) var faste sluttoppgaver i Baas-æraen
(t.o.m. ~2012) men **forsvant helt fra ~2013**. De dekkes i ett kompakt beredskapskapittel
(Del 8), ikke som bærebjelke. **Sentermangfoldighet og Banach-fikspunkt i funksjonsrom**
er belagt på kun ett sett (juni 2021) men signaliserer en mer teoretisk retning — dekkes
grundig som primærmål, men med `(verifiser)`-forbehold om vekt.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), ikke frekvens:
eksistens/entydighet og lineære systemer er fundamentet for all kvalitativ analyse;
linearisering før Lyapunov; indeks før man kan utelukke periodiske baner; periodiske
løsninger før Hamilton/Liénard-spesialtilfellene; bifurkasjon og det teoritunge 2021-laget
til slutt. Frekvensen styrer *omfanget*: de fire søylene (lineær klassifikasjon,
stabilitet/Lyapunov, indeks, periodiske løsninger) får hver sin del med teori- **og**
drillkapittel og høyest kvote; lavfrekvent stoff (fraktaler/kaos) får ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og fasplan-håndverk | 2 | perfekt (meta) | Formen (4 t, kode D, 5–9 oppgaver, ingen formelark, alt utledes/skisseres fra hodet), fasplan-notasjonen, temafrekvensene, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. Skisse-/begrunnelseshåndverket (kap. 0.2) er unikt kritisk fordi plattformen ikke tegner og fordi «skissér + begrunn orientering» er sensors gjennomgående krav. |
| 1 | ODE-grunnlag: eksistens, entydighet og globale løsninger | 3 | kunne (60 %, men fundament) | Grönwall, Picard–Lindelöf, invariant område ⇒ global løsning, blow-up i endelig tid. Plassert FØRST som dokumentert avvik (se §2 «Avvik») fordi eksistens/entydighet er en fast moderne søyle (~60 %) OG et logisk fundament (en fasplan-analyse forutsetter at løsninger finnes og er entydige). |
| 2 | Lineære planare systemer | 3 | perfekt (~93 %) | Den aller hyppigste sjangeren, nesten alltid O1. Klassifikasjon fra $p,q,\Delta$ + egenverdier/-vektorer + fullstendig faseportrett med orientering; $e^{tA}$/fundamentalmatrise/generell løsning; + skissedrill. Bærer ~93 % av settene. |
| 3 | Stabilitet i ikke-lineære likevektspunkt | 4 | perfekt (~87 % / ~80 %) | Linearisering + Hartman–Grobman (og teoremets grenser i ikke-hyperbolske punkt); Lyapunov-funksjoner (sterk/svak, ofte 3D); instabilitet/LaSalle/attraksjonsområde; + stabilitetsdrill. To av de fire søylene. |
| 4 | Indeksteori | 2 | perfekt (~80 %) | Indeks av punkt/kurve/i uendelig; node/fokus/senter $+1$, sadel $-1$; sum-regelen; Bendixsons indeksformel $I=1+(e-h)/2$; $I_\infty=2-\sum I_i$; brukt til å UTELUKKE periodiske baner; + indeksdrill. Én av de fire søylene. |
| 5 | Periodiske løsninger og grensesykler | 4 | perfekt (~73 % / ~60 %) | Poincaré–Bendixson (invariant annulus); Bendixsons negative kriterium; polarkoordinater + eksplisitt grensesykel + Poincaré-avbildning; Liénard-teoremet; + periodisk-drill. Én av de fire søylene + fast moderne verktøy. |
| 6 | Hamilton-systemer, homokline baner og symmetri | 2 | kunne (~53 % / ~27 %) | Hamiltonsk ($\nabla\cdot f=0$), finn $H$, klassifisér via Hessematrise, nivåkurver som baner; homokline/heterokline baner på $H$-nivåkurver; symmetriargument. Faste teknikk-verktøy, ofte brukt inne i søyleoppgavene. |
| 7 | Bifurkasjon og lineær stabilitet med perturbasjon | 2 | kunne (~60 % / ~40 %) | Bifurkasjon (saddle-node, node↔fokus, parameteranalyse + bifurkasjonsdiagram) — fast moderne søyle; lineær stabilitet med tidsavhengig perturbasjon $\dot{\mathbf x}=(A+C(t))\mathbf x$, $\int\|C\|<\infty$. |
| 8 | Teoritillegg og beredskap | 2 | kjenne (~7 % / ~40 % historisk) | 2021-laget (sentermangfoldighet, Banach-fikspunkt i $C([0,T])$) — dekk grundig som primærmål, `(verifiser)` vekt; + fraktaldimensjon/IFS og kaos (Devaney) som lavprioritert historisk beredskap (t.o.m. ~2012). |
| 9 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–Q) + **3 komplette øvingseksamener** (5–9 oppgaver, kode D, full modellsvar-fasit med skisser + begrunnelser). |

Rasjonale: de fire søylene (Del 2 lineær, Del 3 stabilitet/Lyapunov, Del 4 indeks, Del 5
periodiske løsninger) får hver sin del med drillkapittel og høyest kvote; bifurkasjon og
eksistens/entydighet får hver sin del som de faste «femte og sjette» søylene; Hamilton/
Liénard/polar er faste teknikk-verktøy plassert der de hører faglig hjemme; fraktaler/kaos
får ett kompakt beredskapskapittel fordi de er «utdødd» fra det aktive pensumet. **Nesten
hele bredden testes hvert sett** — prioriteringen styrer dybde og drillmengde, ikke *om*
et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og fasplan-håndverk |
| 1 | ODE-grunnlag: eksistens, entydighet og globale løsninger |
| 2 | Lineære planare systemer |
| 3 | Stabilitet i ikke-lineære likevektspunkt |
| 4 | Indeksteori |
| 5 | Periodiske løsninger og grensesykler |
| 6 | Hamilton-systemer, homokline baner og symmetri |
| 7 | Bifurkasjon og lineær stabilitet med perturbasjon |
| 8 | Teoritillegg og beredskap |
| 9 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Lineært planart system — klassifisér ($p,q,\Delta$) + skissér faseportrett med
orientering (egenverdier/-vektorer, nullkliner) · **B** Stabilitet i ikke-lineært
likevektspunkt via linearisering + Hartman–Grobman (Jacobimatrise; hyperbolsk ⇒ arv av
type) · **C** Lyapunov-funksjon (sterk/svak; kvadratisk ansatz som kansellerer kryssledd;
ofte 3D; instabilitet/Chetaev; LaSalle/attraksjonsområde) · **D** Indeks av likevektspunkt/
lukket kurve/i uendelig (sum-regelen; $I_\infty=2-\sum I_i$; brukt til å utelukke lukket
bane) · **E** Poincaré–Bendixson (bygg positivt invariant annulus uten likevektspunkt) ·
**F** Bendixsons negative kriterium (divergens fast fortegn i enkeltsammenhengende område ⇒
ingen lukket bane) · **G** Bifurkasjon (parameter $\mu$/$\lambda$; finn bifurkasjonspunkter;
bifurkasjonsdiagram) · **H** Eksistens/entydighet (Grönwall-estimat; Picard–Lindelöf;
global løsning; blow-up i endelig tid) · **I** Hamilton-system (vis Hamiltonsk; finn $H$;
klassifisér via Hessematrise; nivåkurve-baner) · **J** Polarkoordinater / grensesykel /
Poincaré-avbildning · **K** Liénard-likning (entydig grensesykel; senter i origo) · **L**
Bendixsons indeksformel og sektoranalyse ($I=1+(e-h)/2$; utled $(e,h)$; saddle-node) ·
**M** Lineær stabilitet med tidsavhengig perturbasjon ($\dot{\mathbf x}=(A+C(t))\mathbf x$,
$\int\|C\|<\infty$) · **N** Symmetri / homoklin-heteroklin bane / $\omega$-grensemengde ·
**O** Fundamentalmatrise / $e^{tA}$ / variasjon av parametre (beredskap) · **P**
Fraktaldimensjon/IFS og kaos (historisk t.o.m. ~2012, beredskap) · **Q** Sentermangfoldighet
+ Banach-fikspunkt i funksjonsrom (nytt 2021, dekk grundig).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** de klassiske settene (2004–2019) har ingen eksplisitt poengvekting,
> og fasitene for 2016–2018 er håndskrevne skann. Sensorlogikken er utledet av
> oppgaveformuleringene («begrunn alle svar»), av de maskinlesbare fasitene (V04–V13, V19,
> K19) og av den fullstendige, sensorkommenterte juni-2021-fasiten. Der noe er sluttet
> indirekte, merkes det `(verifiser)`.

1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett. Bar fasit
   uten begrunnelse gir ikke uttelling.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «Hartman–Grobmans teorem»,
   «Poincaré–Bendixson», «Bendixsons negative kriterium», «Bendixsons indeksformel»,
   «Grönwall», «Picard–Lindelöf», «Liénards teorem». Fasitene navngir dem.
3. **Faseportrett-skisser skal ha orientering** (piler) og vise egenvektorretninger/
   nullkliner der relevant. Fasitene tegner alltid inn nullkliner som organiserende
   hjelpelinjer.
4. **Presis begrepsbruk:** «stabil» vs. «asymptotisk stabil» vs. «ustabil» må holdes fra
   hverandre — et senter er stabilt men **ikke** asymptotisk stabilt; en svak Lyapunov-
   funksjon gir kun stabilitet.
5. **Hartman–Grobman brukes riktig:** fasitene påpeker eksplisitt når teoremet **ikke** er
   sterkt nok (ikke-hyperbolske punkt, sentre) og krever da Lyapunov, symmetri eller direkte
   argument.
6. **Eksistens OG entydighet:** juni-2021-fasiten irettesetter kandidater som kun viste
   entydighet (Grönwall) når oppgaven ba om at en løsning både finnes og er entydig — begge
   deler må vises.
7. **Poeng:** de klassiske settene har ingen eksplisitt vekting; juni-2021-settet har det
   (sum 60). Eksaminatoren var «raus med regnefeil» der oppgaven viste seg tyngre enn
   tiltenkt `(verifiser)`.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** **Feil bruk av Hartman–Grobman på ikke-hyperbolske punkt** — «klassifisere» et senter
eller et punkt med null-egenverdi via linearisering; lineariseringen av et senter kan skjule
en spiral. · **F2** **Glemme orientering / begrunnelse for pilene** i faseportrettet
(kurveform uten retning gir ikke full uttelling). · **F3** **Kun entydighet, ikke eksistens**
når oppgaven ber om begge (2021-fasitens hyppigste anmerkning). · **F4** **Bendixsons
negative kriterium brukt i et ikke-enkeltsammenhengende område** (f.eks. en annulus) — der
gjelder det ikke, og en grensesykel motsier det ikke. · **F5** **Svak vs. sterk Lyapunov
forvekslet** — $\dot V\le 0$ gir bare stabilitet, ikke asymptotisk. · **F6** **Indeks
feilberegnet i ikke-hyperbolsk punkt** — telle et endelig antall piler uten å knytte dem til
antall fulle omdreininger. · **F7** **$x^n+y^n=r^n$-fella** for $n>2$ når man bygger radiale
estimater (2021-fasiten peker på nettopp denne); kryssleddene må maksimeres/minimeres
korrekt. · **F8** **Feil Lyapunov-ansatz** — ikke velge koeffisientene slik at kryssleddene
($xy$, $xyz$) forsvinner, og dermed sitte fast med udefinert fortegn. · **F9** **Blande
$\dot r$- og $\dot\theta$-uttrykkene** ($r\dot r=x\dot x+y\dot y$, $r^2\dot\theta=x\dot y-y\dot x$).
· **F10** **Feil indeksverdier** — gi en sadel indeks $+1$ (den er $-1$), eller glemme
$I_\infty=2-\sum I_i$. · **F11** **Tidsfelle** — den store fasplan-oppgaven (klassifisér alle
punkt + full skisse, ofte 4–5 likevektspunkt med symmetrier) er tung; for lang tid der
stjeler fra resten.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i utlednings-/analyse-variant.** DNA-regnefag forutsetter regne-/
   utledningsoppgaver med entydige tallsvar. TMA4165 har entydige *klasse*-svar
   (node/sadel/fokus/senter; stabil/asymptotisk/ustabil; indeks $\pm 1,\pm 2$; bifurkasjons-
   verdier) og entydige tall der de finnes (egenverdier, grensesykel-radius), men fasiten er
   ofte en **skisse + begrunnelse**. Fra DNA-regnefag beholdes: makrostrukturen (Del 0
   eksamenskart → temadeler etter avhengighet → eksamenstrening), øvingseksamenene,
   **drillkapittel for hver bærebjelke-sjanger**, frekvensstyrt vekting, og «Matematisk
   sannhetskontroll» (parametersjekk fortegns-/entydighetspåstander numerisk før de påstås).
2. **«Symbol- og formelliste» beholdes uendret.** Hvert delkapittel som bruker symboler får
   `collapsible` **«Symbol- og formelliste»** SIST i delkapitlet, med åpningsnotisen
   «Oppslagsverk — alt her forklares underveis i kapitlet.» Fordi eksamen er UTEN
   formelsamling, er dette også flashcard-kilden for det som «må sitte».
3. **Figurkrav aktivt (DNA-regnefag «Figurkrav»).** Faget krever grafisk analyse ⇒ statiske
   SVG-figurer for utgangsdiagrammene (de fire faseportrett-typene, invariant annulus,
   saddle-node-diagram), gjenbrukt som referansefigur i drillkapitlene. Prosabeskrivelsen
   (fasplan-notasjonen) beholdes som forklaring TIL figuren.
4. **Flashcards tungt vektet (616).** Fordi eksamen er uten oppslagsverk, er faget svært
   flashcard-egnet: **teorem↔betingelse↔konklusjon**-kort (Poincaré–Bendixson: invariant
   kompakt annulus uten likevektspunkt ⇒ grensesykel; Bendixson neg.: $\nabla\cdot f\neq 0$
   i enkeltsammenhengende område ⇒ ingen lukket bane), **klassifikasjons**-kort ($q<0$ ⇒
   sadel; $q>0,\Delta<0,p<0$ ⇒ stabil fokus), **indeks**-kort (sadel $-1$; node/fokus/senter
   $+1$; $I_\infty=2-\sum I_i$), **formel**-kort ($r\dot r=x\dot x+y\dot y$; Bendixsons
   indeksformel), **begreps**-kort (hyperbolsk; asymptotisk stabil; homoklin bane).
   **Quiz-profilen** driller nabobegrep-distraktorer (node/sadel/fokus/senter, stabil/
   asymptotisk/ustabil, sterk/svak Lyapunov, hyperbolsk/ikke-hyperbolsk, Bendixson neg. vs.
   indeksformel, homoklin/heteroklin, kinetisk vs. termodynamisk finnes ikke her —
   distraktorene er de faglige nabobegrepene over).
5. **Drillkapitler for de fire søylene (i tråd med DNA-regnefag).** Lineær klassifikasjon
   (2.3), stabilitet (3.4), indeks (4.2), periodiske løsninger (5.4) får hvert sitt
   **drillkapittel** rett etter teorien, fordi disse er de mest resirkulerte og
   mekaniserbare sjangrene.
6. **Ingen oppdiktede påstander.** Fortegns-, stabilitets- og indekspåstander forfatteren er
   usikker på merkes `(verifiser)`; alle «alltid stabil / alltid indeks $+1$»-påstander
   parametersjekkes numerisk (python3) i modellens fulle parameterrom FØR de skrives (jf.
   DNA-regnefag «Matematisk sannhetskontroll»).

**Avvik fra prompt-/DNA-ordningen (dokumentert):** DNA-regnefag setter eksistens/entydighet
sjelden først. Her er den lagt som **Del 1** (før lineære systemer) fordi (a) en
fasplan-analyse forutsetter at løsninger finnes og er entydige (Picard–Lindelöf), og (b)
eksistens/entydighet er en genuin ~60 %-søyle som fortjener tidlig, solid forankring.
Bifurkasjon (fast ~60 %-søyle) er samlet med tidsavhengig perturbasjon i **Del 7** fordi
begge er parameterstyrte lineariserings-analyser. 2021-teorilaget og fraktal-/kaos-
beredskapen er samlet i **Del 8** til slutt, som det minst frekvente stoffet.

### Kapittel-DNA A — teori-/analysekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper). Løkka (blokk 4–8) veksler i små
sykluser gjennom kapitlet, én løkke per metode/teorem:

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–Q) temaet inngår i, og hva
   sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner IKKE på
   frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Symbol- og formelliste** (alle symboler/formler
   i delkapitlet; «Oppslagsverk — alt her forklares underveis»; plasseres SIST i kapitlet).
   I sene, tunge kapitler: en «Sist du var her»-oppfriskning som VISER de 2–3
   nøkkelformlene/-kriteriene ferdig, ikke bare lenker.
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvilket spørsmål verktøyet besvarer;
   for de mest abstrakte kjernetemaene et konkret hverdagsanker FØR formalismen (jf. README:
   f.eks. et pendel-/rovdyr-byttedyr-system som anker for likevekt og stabilitet).
4. `definition` / `theorem` — begreper og resultater i EMNETS notasjon. Definition-blokker
   åpner med forklaringen i ORD; formelen kommer etter. **Toppnivå med `title` — dette er
   flashcard-kilden.** Utledninger som eksamen krever aktivt vises steg for steg med en
   «Intuisjon:»-linje etter hvert steg; resultater som bare skal *brukes* presenteres uten
   full utledning (merk skillet — jf. analysen §6).
5. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ og modellert på en reell sjanger.
   Løsningen skrives slik en toppbesvarelse ser ut, inkludert faseportrett-skisse i
   fasplan-notasjonen (og henvisning til den relevante SVG-figuren der en finnes).
6. `warning` **Typiske feil** — feilkodene (F1–F11) som gjelder temaet; inkl. eksplisitt
   «riktig klasse uten begrunnelse gir sterkt redusert uttelling» (sensorkrav 1).
7. `exercise` × 6–12 INLINE i løkka — stigende: 2–3 innøving (lett), 2–4 standard (middels),
   2–4 eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne system/tall). Alle med
   `solution` + `hints` (første hint = teoremet/formelen/første grep, aldri konklusjonen).
   Hver oppgave merket med sjangerkode og hva sensor premierer.
8. `collapsible` **Repetisjonsoppgaver** — 4–6 korte kontrollpunkter fra kapitlet og
   forutgående kapitler det bygger på.

### Kapittel-DNA B — drillkapittel (2.3 / 3.4 / 4.2 / 5.4)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (sjangerens kriterier/
   formler i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren, nummererte trinn
   (f.eks. lineær klassifikasjon: «1) skriv $\dot{\mathbf x}=A\mathbf x$; 2) regn
   $p,q,\Delta$; 3) klassifisér; 4) egenverdier/-vektorer; 5) nullkliner; 6) orientering fra
   ett punkt; 7) skissér»).
4. `example` **Gjennomregnet eksamenscase** med sensor-margnotater om hva som gir uttelling
   ved hvert steg (skisse i fasplan-notasjonen + referansefigur).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`. Boka SAMLET
   skal i tillegg ha en **kald bank** (8–10 oppgaver uten hint, uvante kombinasjoner, kun
   momentliste-fasit) i Del 9.

Eksamenstreningskapitlene (Del 9) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–Q) + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2002–2021-arkivet». **Innholdskontrakt** =
> definisjoner/teoremer som SKAL med (med notasjon) + skille utled-aktivt vs. kun-bruk.
> **Sjangre** kapitlet driller. **Typiske feil** = feilkodene. **Kvote** = quiz/flashcards.
> Kryssbok-lenkene peker på eksisterende matte-kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og fasplan-håndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4165
**id:** `tma4165-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig, kode D — kun kalkulator, ingen formelsamling,
  5–9 oppgaver uten flervalg, alt utledes/skisseres fra hodet), de fire søylene + bifurkasjon/
  eksistens, temafrekvensene, sensorkravene, kildeforbeholdet og statusverifiseringen (aktivt
  emne, forgjenger SIF5025) — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2002–2021). Skal formidle: (a) **formen** —
  4 t (6 t i SIF-årene 2002–2003), 5–9 oppgaver, kode D, ingen formelark, ingen flervalg,
  alle svar begrunnes; (b) **de fire søylene** med frekvens: lineær klassifikasjon+faseportrett
  (~93 %, sjanger A), stabilitet via linearisering (~87 %, B), Lyapunov (~80 %, C), indeks
  (~80 %, D), periodiske løsninger (~73 %, E/J/K), Bendixson neg. (~60 %, F); (c) **de to
  moderne søylene** — bifurkasjon (~60 %, G) og eksistens/entydighet (~60 %, H); (d)
  **temafrekvens-tabellen** (analysen §2); (e) **sensorkravene** (§2); (f) **kildeforbeholdet**
  — 2016–2018-fasitene er håndskrevne skann, sensorlogikk delvis utledet `(verifiser)`; (g)
  **sjangerskiftet ~2013** (fraktaler/kaos borte) og **2021-laget** (sentermangfoldighet,
  Banach); (h) **statusverifiseringen** — TMA4165 er aktivt (vår 2026, vår 2027), forgjenger
  SIF5025, ingen etterfølger. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Del 0-pakken (DNA-regnefag): (i) **«Slik leser du denne boka»-boks**
  (type `text`/`tip`) — forklarer karakterskala A–F, sjangerkodene A–Q kompakt, at typiske
  feil har et samlet register (F1–F11), og rammer inn tunge symboler leseren møter senere
  («du trenger ikke forstå $\dot\theta$, $I_\infty$ eller sentermangfoldighet ennå — de
  forklares der de brukes»); (ii) **«Lite tid?»-boks** (type `tip`) — hurtigrute for 3–5 dager
  (Del 2 → Del 3 → Del 4 → Del 5 kjernen, timeanslag fra summerte `estimatedMinutes`) + note
  om at anslagene er LESEtid, ×1,5 for regning/skisser for hånd; (iii) **kildenote** for
  frekvens-empirien (hvilke sett/år analysen bygger på, med forbehold om at nye sett kan endre
  bildet); (iv) **prosedyre-/sjangerkort på ÉN side** (sjanger A–Q → én linjes oppskrift →
  tidsbudsjett → vanligste feil); (v) **deltidsrute** (10–12 uker, ~8 t/uke) med generalprøver
  fordelt; (vi) **«lese mye, skrive lite»-boks** + minimumsråd om å skrive minst én
  øvingseksamen for hånd på tid (fire timers håndskrift/skissering er en fysisk ferdighet);
  (vii) **karakter-realisme** — C er en god og vanlig karakter tidlig i studiet; «Gapet til
  A» rammes som oppgraderingsmeny. Prognosen for neste sett (nesten sikkert: én lineær
  fasplan-oppgave, én stabilitet via linearisering, én Lyapunov, én periodisk løsning, én
  indeks, én bifurkasjon, ett eksistens/entydighet-spørsmål; mulig teoritillegg). Ingen
  forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  mal med 7 oppgaver — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst om
  den krever full skisse (orientering) eller bare klassifikasjon».
- **Typiske feil:** Metafeilene: klassifisere uten å begrunne/skissere (sensorkrav 1, F2);
  tro at arkivfrekvensene er fasit for neste sett (les kildeforbeholdet — verifiser 2021-laget);
  vente formelark/lærebok (finnes ikke — kode D).
- **Kvote:** 10 quiz / 12 flashcards (formfakta, de fire søylene, temafrekvens, sensorkravene,
  sjangerkodene, kildeforbeholdet, statusverifiseringen).

#### Kapittel 0.2: Fasplan-håndverket — skissér og begrunn
**id:** `tma4165-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4165-0-1`

- **Kapitteltype:** håndverkskapittel (meta — plattformnotasjon + skisse-/begrunnelsesspråk).
- **Description:** De to ferdighetene som gir poeng på nesten hver oppgave: å *skissere* et
  faseportrett med orientering (her: bokas faste fasplan-notasjon + de statiske referanse-
  figurene) og å *begrunne* med korrekt teoremnavn og presis stabilitetsterminologi. Etablerer
  notasjonen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–5 på tvers av alle sjangre). ~93 % av
  settene ber om minst én skisse. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Derivasjon og funksjonsanalyse](/r2/r2-1-1)
  `(verifiser lenke)`, [Vektorer og lineær algebra](/tma4110/tma4110-1-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $\dot x,\dot y$; nullkliner; $\mathbf v$
  (egenvektor); orienteringspil; $\dot\theta$.
- **Faktakontrakt (flashcard-kilde):** **fasplan-elementene** — likevektspunkt (der
  $\dot x=\dot y=0$), bane/trajektorie, nullkliner ($\dot x=0$-kurven og $\dot y=0$-kurven),
  vektorfelt; **skisse-oppskriften** i fasplan-notasjonen — (1) marker likevektspunkt +
  type, (2) tegn nullklinene som hjelpelinjer, (3) angi egenvektorretninger (lineære/
  lineariserte), (4) begrunn orienteringen ved vektorfeltet i ett bekvemt punkt eller
  fortegnet til $\dot\theta$; **stabilitetsterminologien** — stabil (baner nær punktet blir
  værende nær), asymptotisk stabil (blir nær OG går mot punktet), ustabil (finnes baner som
  forlater); **hyperbolsk** likevektspunkt (ingen egenverdi med realdel 0).
- **Notasjonskontrakt (bokas fasplan-notasjon — normativ):** vis det faste oppsettet på ett
  enkelt eksempel (en stabil node og en sadel): koordinat + type + egenvektorretninger +
  begrunnet orientering. Etabler at hver skisse i boka skrives slik, med referanse til den
  relevante SVG-figuren (de fire lineære typene).
- **Løsningsprosedyre:** (1) finn likevektspunktene; (2) klassifisér (Del 2/3-verktøy);
  (3) nullkliner; (4) egenvektorretninger; (5) orientering fra ett punkt; (6) skissér i
  notasjonen; (7) skriv teoremnavnet som brukes.
- **Typiske feil:** F2 (glemme orientering/begrunnelse), F1 (linearisere et senter), og
  begrepsforveksling stabil/asymptotisk stabil (sensorkrav 4).
- **Modellsvar:** «Skissér faseportrettet med orientering for et gitt stabilt fokus, og
  begrunn spiralretningen»; «Forklar forskjellen mellom en stabil node og en stabil spiral i
  fasplan-notasjonen».
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 9).

### Del 1 — ODE-grunnlag: eksistens, entydighet og globale løsninger *(prioritet: KUNNE — ~60 %, men fundament)*

#### Kapittel 1.1: Fra ODE til dynamisk system
**id:** `tma4165-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-0-2`

- **Kapitteltype:** grunnlagskapittel.
- **Description:** Autonome vs. ikke-autonome system, første-ordens system i planet
  $\dot{\mathbf x}=f(\mathbf x)$, fasrom, baner, flyt og likevektspunkt; hvordan en
  høyere-ordens ODE skrives om til et system. Fundamentet for alt videre.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for alle sjangre. Innramming for A,
  B, E. Prioritet: grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Differensiallikninger](/tma4110/tma4110-8-1)
  `(verifiser lenke)`, [Derivasjon](/r2/r2-1-1) `(verifiser lenke)`.
- **Faktakontrakt (flashcard-kilde):** **autonomt system** ($f$ uavhengig av $t$),
  **fasrom/fasplan**, **bane (trajektorie)** vs. løsningskurve i $(t,\mathbf x)$-rom, **flyt**
  $\varphi_t$, **likevektspunkt** ($f(\mathbf x^\*)=0$); omskriving $x^{(n)}=g$ →
  første-ordens system; at baner i et autonomt system aldri krysser hverandre (entydighet).
- **Utledningskontrakt (kun bruk):** omskrivingen $\ddot x + p\dot x + qx=0$ →
  $\dot x=y,\ \dot y=-qx-p y$ vises; brukes videre uten ny utledning.
- **Typiske feil:** blande løsningskurve (i tid) og bane (i fasplan); glemme at autonomi er
  det som gjør baner tidsuavhengige.
- **Modellsvar:** «Skriv pendellikningen $\ddot\theta+\sin\theta=0$ som et første-ordens
  system og finn likevektspunktene»; «Forklar hvorfor to baner i et autonomt planart system
  ikke kan krysse hverandre».
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 1.2: Eksistens og entydighet — Picard–Lindelöf og Grönwall
**id:** `tma4165-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-1-1`

- **Kapitteltype:** teori-/analysekapittel (kunne, men høyt vektet som fundament).
- **Description:** Lipschitz-egenskapen, Picard–Lindelöf (lokal eksistens+entydighet), og
  **Grönwalls ulikhet** som verktøy for entydighet OG kontinuerlig avhengighet av
  begynnelsesdata.
- **Eksamensbelegg:** Sjanger H (~60 % i moderne æra): «vis med et Grönwall-estimat at IVP-et
  ikke kan ha mer enn én løsning» (V17 O7), kontinuerlig avhengighet med perturbasjonsledd.
  2021-fasiten krever eksistens OG entydighet (F3). Prioritet: kunne (fundament).
- **Forkunnskaper/kryssbok:** kap. 1.1; [Integrasjon](/r2/r2-3-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** Lipschitz-konstant $L$; $\sigma(t)=|x_1-x_2|^2$;
  integrerende faktor $e^{-Lt}$.
- **Faktakontrakt (flashcard-kilde):** **Lipschitz-betingelse** ($\|f(\mathbf x)-f(\mathbf y)\|\le L\|\mathbf x-\mathbf y\|$);
  **Picard–Lindelöf** (lokalt Lipschitz ⇒ lokal, entydig løsning); **Grönwalls ulikhet**
  (hvis $u(t)\le a+\int_0^t b\,u\,ds$ så $u(t)\le a\,e^{\int b\,ds}$); entydighetsteknikken:
  sett $\sigma=|x_1-x_2|^2$, deriver, bruk Lipschitz ⇒ $\dot\sigma\le 2L\sigma$, integrer
  ⇒ $\sigma\equiv 0$.
- **Utledningskontrakt (utled aktivt):** Grönwall-entydighetsargumentet vises steg for steg
  med «Intuisjon:»-linjer; Picard–Lindelöf oppgis (kun bruk) — iterasjonsbeviset er beredskap.
- **Typiske feil:** F3 (kun entydighet når begge kreves); glemme at Lipschitz er lokal;
  regne feil på integrerende faktor.
- **Modellsvar:** «Vis med et Grönwall-estimat at $\dot x=2-\cos^2 x,\ x(0)=x_0$, har høyst
  én løsning» (nyskrevet variant av V17 O7); «Bruk Grönwall til å vise at løsningen avhenger
  kontinuerlig av $x_0$».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 1.3: Globale løsninger og blow-up
**id:** `tma4165-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-1-2`

- **Kapitteltype:** teori-/analysekapittel (kunne).
- **Description:** Maksimalt eksistensintervall, invariant område (feltet peker innover på
  randen) ⇒ global løsning, og **blow-up i endelig tid** (løsningen går mot uendelig).
- **Eksamensbelegg:** Sjanger H, del av eksistens/entydighet-søylen (~40 % for global/blow-up
  spesifikt). «Blow-up: $\dot x=x^2$ gir $x=1/(1/x_0-t)$.» Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:** maksimalt
  intervall $(t_-,t_+)$; invariant mengde.
- **Faktakontrakt (flashcard-kilde):** **maksimalt eksistensintervall**; **globalt
  eksistensteorem** (globalt Lipschitz / invariant kompakt område ⇒ global løsning);
  **invariant område** (feltet peker innover overalt på randen); **blow-up** (endelig $t_+$
  med $\|\mathbf x\|\to\infty$); separér-og-vis-teknikken for blow-up-tid.
- **Utledningskontrakt (utled aktivt):** blow-up-tiden for $\dot x=x^2$ via separasjon;
  invariansargument via fortegn av $\dot V$ på randen (kobles til Lyapunov i Del 3).
- **Typiske feil:** anta global eksistens uten å sjekke invariant område; feil fortegn i
  separasjonen; blande maksimalt intervall og global.
- **Modellsvar:** «Finn blow-up-tiden for $\dot x=1+x^2,\ x(0)=0$» (nyskrevet); «Vis at et
  gitt system har globale løsninger ved å konstruere et invariant område».
- **Kvote:** 20 quiz / 24 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A ODE→system + likevektspunkt · 1.B Grönwall-entydighet +
kontinuerlig avhengighet · 1.C global løsning / invariant område / blow-up · 1.D samlet
grunnlagsprøve på eksamensnivå).

### Del 2 — Lineære planare systemer *(prioritet: PERFEKT — ~93 %)*

#### Kapittel 2.1: Løsning av lineære system — egenverdier, egenvektorer og $e^{tA}$
**id:** `tma4165-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-1-1`

- **Kapitteltype:** teori-/analysekapittel (grunnlag → perfekt).
- **Description:** Generell løsning av $\dot{\mathbf x}=A\mathbf x$ fra egenverdier/-vektorer
  (reelle distinkte, komplekse $\alpha\pm i\beta$, sammenfallende), fundamentalmatrise $\Phi$
  og matriseeksponentialen $e^{tA}=\Phi(t)\Phi(0)^{-1}$; variasjon av parametre for inhomogene
  system.
- **Eksamensbelegg:** Sjanger A/O. Løsningsbasisen er forutsetning for klassifikasjon (2.2) og
  brukes direkte når O1 ber om «finn generell løsning / $e^{tA}$» (~20 %, O). Prioritet:
  grunnlag for søylen (perfekt).
- **Forkunnskaper/kryssbok:** kap. 1.1; [Egenverdier og egenvektorer](/tma4110/tma4110-6-1)
  `(verifiser lenke)`, [Komplekse tall](/tma4110/tma4110-2-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $A,\lambda,\mathbf v$; $\Phi(t)$; $e^{tA}$;
  $\alpha\pm i\beta$.
- **Faktakontrakt (flashcard-kilde):** **reelle distinkte egenverdier** → basis
  $e^{\lambda_i t}\mathbf v_i$; **komplekse** $\alpha\pm i\beta$ → reell basis
  $e^{\alpha t}(\cos\beta t,\ \sin\beta t)$-kombinasjoner; **sammenfallende egenverdi**
  (generalisert egenvektor, $t e^{\lambda t}$-ledd); **fundamentalmatrise** $\Phi$
  (kolonner = uavhengige løsninger); $e^{tA}=\Phi(t)\Phi(0)^{-1}$; **variasjon av parametre**
  $\mathbf x(t)=\Phi(t)\Phi(0)^{-1}\mathbf x_0+\Phi(t)\int_0^t\Phi(s)^{-1}\mathbf b(s)\,ds$.
- **Utledningskontrakt:** komplekst tilfelle → reell basis vises (utled aktivt);
  variasjon-av-parametre-formelen oppgis og brukes.
- **Typiske feil:** glemme $t e^{\lambda t}$-leddet ved sammenfallende egenverdi; feil ved
  overgang kompleks → reell basis; regnefeil i $\Phi(0)^{-1}$.
- **Modellsvar:** «Finn $e^{tA}$ og den generelle løsningen for et gitt $2\times 2$-system med
  komplekse egenverdier»; «Løs et inhomogent lineært IVP med variasjon av parametre».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 2.2: Klassifikasjon av likevektspunkt og faseportrett
**id:** `tma4165-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4165-2-1`

- **Kapitteltype:** teori-/analysekapittel (PERFEKT — bokas mest testede sjanger).
- **Description:** Kjernetabellen: fra $p=\operatorname{tr}A$, $q=\det A$, $\Delta=p^2-4q$ til
  node/sadel/fokus/senter, med stabilitet fra fortegnet til $p$, og det fullstendige
  faseportrettet med egenvektorretninger, nullkliner og begrunnet orientering.
- **Eksamensbelegg:** Sjanger A (~93 %, nesten alltid O1): «skissér faseportrettet med
  orientering for $\dot x=x+9y,\ \dot y=6x+4y$» (V19 O1 — sadel, egenverdier $-5$ og $10$).
  Den aller hyppigste oppgaven. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1, 0.2 (skissenotasjon). `collapsible` **Symbol- og
  formelliste:** $p,q,\Delta$; egenvektorretning; nullkliner; SVG-figurene (fire typer).
- **Faktakontrakt (flashcard-kilde — kjernetabellen):** *(parametersjekket numerisk over
  tilfeldige $A$ — se §6):* **$q<0$** → **sadel** (indeks $-1$); **$q>0,\Delta>0$** → **node**
  (stabil $p<0$ / ustabil $p>0$; indeks $+1$); **$q>0,\Delta<0$** → **fokus/spiral** (stabil
  $p<0$ / ustabil $p>0$; indeks $+1$); **$q>0,p=0$** → **senter** (stabilt, ikke asymptotisk;
  indeks $+1$); **degenererte** tilfeller ($\Delta=0$: degenerert/uekte node; egenverdi $0$:
  linje av likevektspunkt). Orientering fra egenvektorer + vektorfeltet i ett punkt; noden/
  sadelen tangerer egenvektorene, «rask» retning = egenverdi lengst fra $0$.
- **Utledningskontrakt:** hvorfor tegnet til $q$ og $\Delta$ gir typen (egenverdienes fortegn/
  kompleksitet) utledes aktivt; koble til de fire SVG-referansefigurene.
- **Typiske feil:** F2 (glemme orientering); F1 (behandle et senter som robust — i det fulle
  systemet kan det bli spiral, jf. Del 3); regne $\Delta$ feil; forveksle stabil node/
  stabil spiral i skissen.
- **Modellsvar:** «Klassifisér og skissér med orientering for et gitt system med
  $q<0$» (sadel); «Klassifisér for et system med $p=0,q>0$ og forklar hvorfor det er et
  senter, ikke en spiral».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 2.3: Drill — lineær klassifikasjon og faseportrett
**id:** `tma4165-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-2-2`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Ren mengdetrening på den 93 %-sjangeren: gitt $A$, klassifisér og skissér
  med orientering — over alle fire typer + degenererte tilfeller.
- **Eksamensbelegg:** Sjanger A (~93 %). Varianter: rene $2\times2$-matriser, system gitt som
  to likninger, system gitt via en andreordens ODE. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Symbol- og formelliste:**
  klassifikasjonstabellen i kortform + de fire referansefigurene.
- **Løsningsoppskrift:** (1) skriv $\dot{\mathbf x}=A\mathbf x$; (2) regn $p,q,\Delta$;
  (3) klassifisér; (4) egenverdier/-vektorer; (5) nullkliner; (6) orientering fra ett punkt;
  (7) skissér med referansefiguren.
- **Modellcase:** ett gjennomregnet eksamenscase med sensor-margnotater (hva gir uttelling
  ved hvert steg).
- **Typiske feil:** F2, F1 (senter), degenerert node forvekslet med ekte node.
- **Kvote:** 20 quiz / 24 flashcards. (8–15 varianter, alle med `solution` + `hints`.)

**Prøve-kvote Del 2:** 4 prøver (2.A egenverdier/-vektorer + generell løsning + $e^{tA}$ ·
2.B klassifikasjon $p,q,\Delta$ · 2.C faseportrett med orientering (skisse-vurdert) · 2.D
samlet lineær-fasplan-prøve på eksamensnivå).

### Del 3 — Stabilitet i ikke-lineære likevektspunkt *(prioritet: PERFEKT — ~87 % / ~80 %)*

#### Kapittel 3.1: Linearisering og Hartman–Grobman
**id:** `tma4165-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-2-2`

- **Kapitteltype:** teori-/analysekapittel (PERFEKT).
- **Description:** Finn likevektspunktene, regn Jacobimatrisen $J$, evaluér og klassifisér
  lineariseringen; **Hartman–Grobman** — hyperbolsk ⇒ det ikke-lineære systemet arver typen —
  og teoremets grenser (sentre/ikke-hyperbolske punkt).
- **Eksamensbelegg:** Sjanger B (~87 %): «finn og klassifisér alle likevektspunkt for
  $\dot x=x+y-2,\ \dot y=x^2+2x-y-2$, og avgjør stabilitet» (V18 O4). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Partiellderivasjon](/tma4101/tma4101-2-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $J=(\partial f_i/\partial x_j)$;
  hyperbolsk; realdel $\operatorname{Re}\lambda$.
- **Faktakontrakt (flashcard-kilde):** **Jacobimatrise** $J=\partial(f)/\partial(x)$;
  **hyperbolsk** likevektspunkt (ingen egenverdi med $\operatorname{Re}\lambda=0$);
  **Hartman–Grobman** (hyperbolsk ⇒ lokal topologisk konjugasjon ⇒ arv av type/stabilitet);
  teoremets grense — for **sentre** og punkt med $\operatorname{Re}\lambda=0$ eller
  egenverdi $0$ gjelder det IKKE, da trengs Lyapunov/symmetri/direkte analyse.
- **Utledningskontrakt:** lineariseringen $\dot{\mathbf u}=J\mathbf u$ utledes fra Taylor;
  Hartman–Grobman oppgis (kun bruk).
- **Typiske feil:** F1 (linearisere et senter/ikke-hyperbolsk punkt og «klassifisere»);
  regne $J$ i feil punkt; glemme å sjekke hyperbolisitet før man påberoper teoremet.
- **Modellsvar:** «Finn og klassifisér alle likevektspunkt for et gitt ikke-lineært system,
  og avgjør for hvert om Hartman–Grobman er anvendelig»; «Vis hvorfor lineariseringen ikke
  avgjør typen i et gitt ikke-hyperbolsk punkt».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 3.2: Lyapunov-funksjoner — sterk og svak
**id:** `tma4165-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4165-3-1`

- **Kapitteltype:** teori-/analysekapittel (PERFEKT).
- **Description:** Kvadratisk ansatz $V=\tfrac12(ax^2+by^2+\dots)$, regn $\dot V=\nabla V\cdot f$,
  velg koeffisientene slik at kryssleddene kanselleres; $\dot V<0$ ⇒ sterk ⇒ asymptotisk
  stabil, $\dot V\le 0$ ⇒ svak ⇒ (kun) stabil.
- **Eksamensbelegg:** Sjanger C (~80 %): «vis at origo er asymptotisk stabil for et gitt 3D-
  system» (K19 O3, fasit $V=\tfrac12(3x^2+6y^2+2z^2)$). Brukes særlig når linearisering
  svikter (ikke-hyperbolsk). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:** $V$,
  $\dot V=\nabla V\cdot f$; positiv/negativ definitt; ulikhetene $2xy\le x^2+y^2$,
  $x^2y^2\le\tfrac12(x^4+y^4)$.
- **Faktakontrakt (flashcard-kilde):** **Lyapunov-funksjon** $V$ (positiv definitt, $V(0)=0$);
  **sterk** ($\dot V<0$ utenom origo ⇒ asymptotisk stabil), **svak** ($\dot V\le 0$ ⇒
  stabil, ikke nødvendigvis asymptotisk); **ansatz-triks:** velg koeffisienter så $xy$-/
  $xyz$-kryssledd forsvinner; dominans-ulikhetene $2xy\le x^2+y^2$ og
  $x^2y^2\le\tfrac12(x^4+y^4)$. *(Advarsel til forfatter: IKKE bruk $x^n+y^n=r^n$ for $n>2$ —
  F7; verifiser radiale estimater numerisk.)*
- **Utledningskontrakt:** koeffisientvalget vises på ett eksempel steg for steg («Intuisjon:
  vi vil at $xy$-leddet skal forsvinne, så vi setter …»); Lyapunovs teorem oppgis (kun bruk).
- **Typiske feil:** F5 (påstå asymptotisk fra svak $V$); F8 (ansatz som ikke kansellerer
  kryssledd); F7 ($x^n+y^n=r^n$-fella).
- **Modellsvar:** «Vis at origo er asymptotisk stabil for et gitt 3D-system ved en kvadratisk
  Lyapunov-ansatz» (nyskrevet, andre koeffisienter enn K19); «Avgjør om en gitt $V$ er sterk
  eller svak for et 2D-system».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 3.3: Instabilitet, LaSalle og attraksjonsområde
**id:** `tma4165-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4165-3-2`

- **Kapitteltype:** teori-/analysekapittel (kunne → perfekt-tillegg).
- **Description:** Lyapunovs instabilitetsteorem (Chetaev — finn $V$ med $\dot V>0$ der
  $V>0$), LaSalles invariansprinsipp, og attraksjonsområde (er $V$ sterk på hele $\mathbb R^2$,
  er attraksjonsområdet hele planet).
- **Eksamensbelegg:** Del av sjanger C. LaSalle/attraksjonsområde belagt (V13). Instabilitet
  via $V=xy$. Prioritet: kunne (bredde + karakterskille).
- **Forkunnskaper/kryssbok:** kap. 3.2. `collapsible` **Symbol- og formelliste:** Chetaev-$V$;
  invariant mengde; $\{\dot V=0\}$; attraksjonsområde.
- **Faktakontrakt (flashcard-kilde):** **Lyapunovs instabilitetsteorem / Chetaev** (finnes
  $V$ med $V>0$ og $\dot V>0$ i et område med origo på randen ⇒ ustabil); **LaSalles
  invariansprinsipp** (trajektorier konvergerer mot den største invariante mengden i
  $\{\dot V=0\}$); **attraksjonsområde** (basin of attraction); global asymptotisk stabilitet
  når $V$ radiellt ubegrenset og sterk overalt.
- **Utledningskontrakt:** LaSalle oppgis og brukes (kun bruk); instabilitetsargumentet vises
  på $V=xy$.
- **Typiske feil:** bruke LaSalle uten å sjekke at $\{\dot V=0\}$-mengden er invariant;
  forveksle svak Lyapunov + LaSalle (gir asymptotisk) med ren svak (gir kun stabil).
- **Modellsvar:** «Vis at origo er ustabil for et gitt system ved en Chetaev-funksjon»; «Bruk
  LaSalle til å styrke en svak Lyapunov-konklusjon til asymptotisk stabilitet».
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 3.4: Drill — stabilitet (linearisering + Lyapunov)
**id:** `tma4165-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-3-3`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Blandet drill på stabilitetssøylen: velg riktig verktøy (linearisering når
  hyperbolsk, Lyapunov når ikke), klassifisér, avgjør stabil/asymptotisk/ustabil.
- **Eksamensbelegg:** Sjanger B + C (~87 % / ~80 %). Varianter: 2D hyperbolsk, 2D ikke-
  hyperbolsk (Lyapunov), 3D Lyapunov, instabilitet. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3. `collapsible` **Symbol- og formelliste:**
  beslutningstreet hyperbolsk→linearisering / ikke-hyperbolsk→Lyapunov.
- **Løsningsoppskrift:** (1) finn likevektspunkt; (2) regn $J$; (3) hyperbolsk? → Hartman–
  Grobman; (4) hvis ikke → Lyapunov-ansatz (kanseller kryssledd); (5) konkludér med presis
  terminologi (stabil/asymptotisk/ustabil) OG teoremnavn.
- **Modellcase:** gjennomregnet case med margnotater.
- **Typiske feil:** F1, F5, F8; velge Lyapunov når linearisering holder (tidssløsing, F11).
- **Kvote:** 22 quiz / 28 flashcards. (8–15 varianter, `solution` + `hints`.)

**Prøve-kvote Del 3:** 4 prøver (3.A linearisering + Hartman–Grobman · 3.B Lyapunov sterk/svak
(2D+3D) · 3.C instabilitet + LaSalle + attraksjonsområde · 3.D samlet stabilitetsprøve på
eksamensnivå).

### Del 4 — Indeksteori *(prioritet: PERFEKT — ~80 %)*

#### Kapittel 4.1: Indeks av likevektspunkt, kurve og i uendelig
**id:** `tma4165-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-2-2`

- **Kapitteltype:** teori-/analysekapittel (PERFEKT).
- **Description:** Indeksen $I=\tfrac{1}{2\pi}\oint d\theta$ (antall omdreininger vektorfeltet
  gjør), kjente verdier (node/fokus/senter $+1$, sadel $-1$), sum-regelen, indeks i uendelig
  $I_\infty=2-\sum I_i$, og bruk til å UTELUKKE periodiske baner.
- **Eksamensbelegg:** Sjanger D (~80 %): «regn ut indeksen til origo for $\dot x=x^2-y^2,\
  \dot y=-2xy$» (V13 O4 — svar $-2$ via $f=\bar z^2$-argument `(verifiser fortegn/orientering)`).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Komplekse tall](/tma4110/tma4110-2-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $I$; $I_\infty$;
  $\tan\theta=\dot y/\dot x$; sum-regelen.
- **Faktakontrakt (flashcard-kilde):** **indeks** $I=\tfrac{1}{2\pi}\oint d\theta$ med
  $\tan\theta=\dot y/\dot x$; **standardverdier** node/fokus/senter $+1$, sadel $-1$;
  **sum-regelen** (indeks til en lukket kurve = summen av indeksene til punktene inni);
  **indeks i uendelig** $I_\infty=2-\sum I_i$; **konsekvens** en lukket bane har indeks $+1$,
  så den må omslutte punkt med indekssum $+1$ (utelukk periodiske baner).
- **Utledningskontrakt:** standardverdiene ($+1$ for node/fokus/senter, $-1$ for sadel)
  utledes fra vektorfeltets omdreining; sum-regelen og $I_\infty$ oppgis (kun bruk).
- **Typiske feil:** F10 (gi sadel $+1$; glemme $I_\infty$); F6 (telle piler i stedet for
  omdreininger, særlig i ikke-hyperbolske punkt).
- **Modellsvar:** «Regn indeksen til origo for et gitt ikke-hyperbolsk system» (nyskrevet,
  annet enn V13); «Bruk sum-regelen og $I_\infty$ til å utelukke en periodisk bane i et gitt
  system».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 4.2: Bendixsons indeksformel, sektoranalyse og indeksdrill
**id:** `tma4165-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4165-4-1`

- **Kapitteltype:** teori- + drillkapittel (PERFEKT).
- **Description:** **Bendixsons indeksformel** $I=1+(e-h)/2$ ($e$ elliptiske, $h$ hyperbolske
  sektorer), begge veier: konstruér et faseportrett med foreskrevet indeks, eller utled
  sektorstrukturen fra beregnet indeks; + drill på hele indekssøylen.
- **Eksamensbelegg:** Sjanger D/L (~27 % for indeksformelen spesifikt, del av D-søylen ~80 %):
  «skissér faseportrett rundt et likevektspunkt med indeks $0,+3,-3$» (V06 O3); 2021: indeks
  $0$ + tre sektorer ⇒ $(e,h)=(0,2)$ + én parabolsk ⇒ **saddle-node**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:**
  $I=1+(e-h)/2$; elliptisk/hyperbolsk/parabolsk sektor.
- **Faktakontrakt (flashcard-kilde):** **elliptisk/hyperbolsk/parabolsk sektor**; **Bendixsons
  indeksformel** $I=1+(e-h)/2$; sadel = 4 hyperbolske sektorer ($I=1+(0-4)/2=-1$ ✓
  `(verifiser)`); senter/node = 0 hyperbolske ($I=+1$); saddle-node via $(e,h)=(0,2)$.
- **Løsningsoppskrift (drill):** (1) tell/foreskriv sektorer $e,h$; (2) sett inn i formelen;
  (3) eller: fra oppgitt indeks + antall sektorer, løs for $(e,h)$; (4) konkludér type.
- **Modellcase:** konstruér faseportrett med indeks $-3$ (velg $h=8,e=0$) med margnotater
  `(verifiser)`.
- **Typiske feil:** F6 (piltelling); regne $(e,h)$ feil; glemme parabolske sektorer.
- **Kvote:** 22 quiz / 28 flashcards. (Teori + 8–12 drillvarianter, `solution` + `hints`.)

**Prøve-kvote Del 4:** 4 prøver (4.A indeks av punkt (standardverdier + ikke-hyperbolsk) ·
4.B sum-regelen + $I_\infty$ + utelukk periodisk bane · 4.C Bendixsons indeksformel +
sektoranalyse · 4.D samlet indeksprøve på eksamensnivå).

### Del 5 — Periodiske løsninger og grensesykler *(prioritet: PERFEKT — ~73 % / ~60 %)*

#### Kapittel 5.1: Poincaré–Bendixson og invariant annulus
**id:** `tma4165-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4165-3-2`

- **Kapitteltype:** teori-/analysekapittel (PERFEKT).
- **Description:** **Poincaré–Bendixson-teoremet** og standardgrepet: bygg et positivt
  invariant ringområde (annulus) uten likevektspunkt (feltet innover på ytre rand, utover på
  indre, via $V=\tfrac12 r^2$ og fortegnet til $\dot V$), så garanteres en grensesykel.
- **Eksamensbelegg:** Sjanger E (~73 %): «vis at $\dot x=x-y-x^3,\ \dot y=x+y-y^3$ har en
  periodisk bane i ringen $a\le x^2+y^2\le b$» (V06 O5). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.2 (Lyapunov/$\dot V$), 1.3 (invariant område).
  `collapsible` **Symbol- og formelliste:** invariant annulus; $\omega$-grensemengde;
  $\dot V=\nabla V\cdot f$; SVG-figuren (annulus).
- **Faktakontrakt (flashcard-kilde):** **Poincaré–Bendixson** (positivt invariant kompakt
  annulus UTEN likevektspunkt ⇒ en grensesykel eller $\omega$-grensesyklus); **konstruksjonen**
  — vis $\dot V>0$ for liten $r$ og $\dot V<0$ for stor $r$ (feltet inn på begge render), og at
  annulusen er tom for likevektspunkt (ofte $r^2\dot\theta\neq 0$); **$\omega$-grensemengde**.
- **Utledningskontrakt:** teoremet oppgis; annulus-konstruksjonen vises steg for steg
  («Intuisjon: feltet klemmer banene inn i ringen, og en ring uten hvilepunkt tvinger fram en
  syklus»).
- **Typiske feil:** F4 (bruke Bendixson neg. i annulusen — gjelder ikke der); glemme å vise
  at annulusen er tom for likevektspunkt; feil fortegn i $\dot V$-estimatet (F7).
- **Modellsvar:** «Vis at et gitt system har en grensesykel i en ring $a\le r^2\le b$»
  (nyskrevet); «Konstruér en invariant annulus for et gitt polart system».
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 5.2: Bendixsons negative kriterium
**id:** `tma4165-5-2` · **number:** 5.2 · **estimatedMinutes:** 40 · **prerequisites:** `tma4165-5-1`

- **Kapitteltype:** teori-/analysekapittel (kunne → perfekt-tillegg).
- **Description:** Regn divergensen $\nabla\cdot f=\partial X/\partial x+\partial Y/\partial y$;
  fast fortegn ($\neq 0$) i et **enkeltsammenhengende** område ⇒ ingen lukket bane der.
- **Eksamensbelegg:** Sjanger F (~60 %): «vis at et gitt system ikke har periodisk løsning i
  $x^2+y^2<2$» (K19 O2). Prioritet: kunne (fast moderne verktøy).
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:**
  $\nabla\cdot f$; enkeltsammenhengende område.
- **Faktakontrakt (flashcard-kilde):** **Bendixsons negative kriterium** ($\nabla\cdot f$ med
  fast fortegn $\neq 0$ i enkeltsammenhengende $D$ ⇒ ingen ikke-konstant lukket bane i $D$);
  **kritisk betingelse** — området må være **enkeltsammenhengende** (i en annulus gjelder det
  ikke, så en grensesykel motsier det ikke); Dulacs generalisering (multipliser med $B(x,y)$)
  nevnes kort (bør kjenne til).
- **Utledningskontrakt:** kriteriet oppgis (Greens teorem-argument som beredskap).
- **Typiske feil:** F4 (bruke det i en annulus / ikke-enkeltsammenhengende område); glemme å
  sjekke at fortegnet er fast i HELE området.
- **Modellsvar:** «Vis at et gitt system ikke har lukket bane i en gitt disk» (nyskrevet);
  «Forklar hvorfor Bendixson neg. ikke motsier en grensesykel i en annulus».
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 5.3: Polarkoordinater, eksplisitte grensesykler og Liénard
**id:** `tma4165-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-5-1`

- **Kapitteltype:** teori-/analysekapittel (kunne).
- **Description:** Polarformlene $r\dot r=x\dot x+y\dot y$, $r^2\dot\theta=x\dot y-y\dot x$;
  eksplisitte grensesykler fra $\dot r=g(r)$; Poincaré-avbildning; og **Liénard-teoremet**
  (entydig grensesykel; senter i origo).
- **Eksamensbelegg:** Sjanger J (~53 %, som verktøy) + K (~33 %). «$\dot r=r(1-r^2),\
  \dot\theta=1$ — finn grensesykel og Poincaré-avbildning» (V10 O5). Liénard: «har
  $\ddot x+x\dot x+x^3=0$ periodiske løsninger?» (V06 — ja, senter i origo fordi $f(x)=x$ og
  $g(x)=x^3$ er odde `(verifiser: senter-kriteriet krever $f,g$ odde + $g>\alpha fF$ nær
  origo)`). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:**
  $r\dot r=x\dot x+y\dot y$; $r^2\dot\theta=x\dot y-y\dot x$; $F(x)=\int_0^x f$; Poincaré-
  avbildning $P$.
- **Faktakontrakt (flashcard-kilde):** **polarformlene** (F9-fella: ikke bland dem);
  **eksplisitt grensesykel** — røttene til $g(r)=0$ (utenom $r=0$), stabilitet fra fortegnet
  til $\dot r$ rundt roten; **Poincaré-avbildning** $P(r_0)$ (integrer $\dot r$ over ett
  omløp $\Delta t=2\pi/|\dot\theta|$); **Liénard-teoremet** (for $\ddot x+f(x)\dot x+g(x)=0$:
  entydig grensesykel hvis $f$ **like**, $F$ har nøyaktig ett positivt nullpunkt osv.);
  **senter i origo** hvis $f,g$ **odde** og $g(x)>\alpha f(x)F(x)$ nær origo `(verifiser
  betingelsen)`.
- **Utledningskontrakt:** polarformlene utledes; grensesykel fra $g(r)=0$ vises; Liénard-
  teoremene oppgis (kun bruk).
- **Typiske feil:** F9 (bytte om $\dot r$/$\dot\theta$); blande Liénards to teoremer (entydig
  grensesykel krever $f$ **like**; senter krever $f$ **odde**).
- **Modellsvar:** «Finn grensesykelen og dens stabilitet for et gitt polart system»
  (nyskrevet); «Avgjør om en gitt Liénard-likning har periodiske løsninger».
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 5.4: Drill — periodiske løsninger
**id:** `tma4165-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-5-3`

- **Kapitteltype:** drillkapittel (DNA B).
- **Description:** Blandet drill: velg riktig verktøy — Poincaré–Bendixson (finn grensesykel),
  Bendixson neg. (utelukk), polar/Liénard (eksplisitt/senter).
- **Eksamensbelegg:** Sjanger E/F/J/K. Varianter: bygg annulus, utelukk med divergens, finn
  eksplisitt grensesykel, Liénard-avgjørelse. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.3. `collapsible` **Symbol- og formelliste:**
  beslutningstre finn/utelukk grensesykel.
- **Løsningsoppskrift:** (1) skal du FINNE eller UTELUKKE en lukket bane?; (2) finne →
  Poincaré–Bendixson (annulus) eller polar $g(r)=0$; (3) utelukke → Bendixson neg.
  (enkeltsammenhengende!) eller indeks; (4) begrunn med teoremnavn.
- **Modellcase:** gjennomregnet case med margnotater.
- **Typiske feil:** F4, F9; velge feil verktøy (finne vs. utelukke).
- **Kvote:** 18 quiz / 22 flashcards. (8–15 varianter, `solution` + `hints`.)

**Prøve-kvote Del 5:** 4 prøver (5.A Poincaré–Bendixson + invariant annulus · 5.B Bendixsons
negative kriterium · 5.C polarkoordinater + eksplisitt grensesykel + Liénard · 5.D samlet
periodisk-løsning-prøve på eksamensnivå).

### Del 6 — Hamilton-systemer, homokline baner og symmetri *(prioritet: KUNNE — ~53 % / ~27 %)*

#### Kapittel 6.1: Hamilton-systemer
**id:** `tma4165-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4165-3-1`

- **Kapitteltype:** teori-/analysekapittel (kunne).
- **Description:** Vis at et system er Hamiltonsk ($\nabla\cdot f=0$ i enkeltsammenhengende
  område), finn $H$ ved å integrere $H_y=X,\ H_x=-Y$, og klassifisér likevektspunktene som
  kritiske punkt for $H$ via Hessematrisen; nivåkurvene er baner.
- **Eksamensbelegg:** Sjanger I (~53 %): «vis at $\dot x=x^2y+2y^3,\ \dot y=-2x^3-xy^2$ er
  Hamiltonsk og finn $H$» (K19/V19 O4 — $H=\tfrac12(x^4+x^2y^2+y^4)$, verifisert
  divergensfri). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Gradient og partiellderivasjon](/tma4101/tma4101-2-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $H$; $\dot x=H_y,\dot y=-H_x$;
  Hessematrise; nivåkurve.
- **Faktakontrakt (flashcard-kilde):** **Hamilton-system** $\dot x=H_y,\ \dot y=-H_x$ ⇔
  $\nabla\cdot f=0$; **finn $H$** ved å integrere $H_y=X$ og matche mot $H_x=-Y$;
  **klassifisering** — kritisk punkt for $H$: lokalt min/maks ⇒ **senter**, sadelpunkt for $H$
  ⇒ **sadel** for systemet (via Hesse-determinanten); nivåkurver = baner; $H$ er en bevart
  størrelse langs baner ($\dot H=0$).
- **Utledningskontrakt:** $\dot H=0$ langs baner utledes; klassifisering via Hesse vises på
  ett eksempel.
- **Typiske feil:** glemme å sjekke $\nabla\cdot f=0$ først; feil fortegn i $H_x=-Y$;
  forveksle Hesse-sadel med systemsadel.
- **Modellsvar:** «Vis at et gitt system er Hamiltonsk, finn $H$, og klassifisér
  likevektspunktene via Hessematrisen» (nyskrevet).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 6.2: Homokline/heterokline baner og symmetri
**id:** `tma4165-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-6-1`

- **Kapitteltype:** teori-/analysekapittel (kunne → kjenne).
- **Description:** Homokline (forlater og returnerer til samme sadel) og heterokline (forbinder
  to ulike punkt) baner, ofte på en $H$-nivåkurve; symmetriargument (refleksjon sender
  løsninger til løsninger, bevarer/reverserer orientering); $\omega$-grensemengder.
- **Eksamensbelegg:** Sjanger N (~20–27 %). Homoklin via $H$-nivåkurve; symmetri for å
  klassifisere «tvillingpunkt» uten ny regning. Prioritet: kunne (bredde) / kjenne.
- **Forkunnskaper/kryssbok:** kap. 6.1, 5.1 ($\omega$-grensemengde). `collapsible` **Symbol-
  og formelliste:** homoklin/heteroklin bane; separatrise; $\omega(\Gamma)$; refleksjons-
  symmetri.
- **Faktakontrakt (flashcard-kilde):** **homoklin bane** (fra og til samme sadel, ofte
  $H=$ sadelverdien); **heteroklin bane** (mellom to punkt); **separatrise**; **symmetri** —
  hvis $(x,y)\mapsto(y,x)$ (e.l.) sender løsninger til løsninger, kan orienteringen bevares
  eller reverseres; **$\omega$-grensemengde** (Poincaré–Bendixson: likevektspunkt,
  separatrisesyklus eller grensesykel).
- **Utledningskontrakt:** homoklin bane finnes ved å sette $H$ lik sadelverdien (vises på
  eksempel); symmetriargumentet vises.
- **Typiske feil:** forveksle homoklin/heteroklin; feil om symmetrien reverserer tid/
  orientering.
- **Modellsvar:** «Finn en homoklin bane for et gitt Hamilton-system via $H$-nivåkurven»;
  «Bruk en refleksjonssymmetri til å klassifisere to speilsymmetriske likevektspunkt».
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A vis Hamiltonsk + finn $H$ · 6.B klassifisér via Hesse +
nivåkurver · 6.C homoklin/heteroklin bane + symmetri · 6.D samlet Hamilton/symmetri-prøve).

### Del 7 — Bifurkasjon og lineær stabilitet med perturbasjon *(prioritet: KUNNE — ~60 % / ~40 %)*

#### Kapittel 7.1: Bifurkasjon
**id:** `tma4165-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-3-1`

- **Kapitteltype:** teori-/analysekapittel (kunne, fast moderne søyle).
- **Description:** Hvordan likevektspunktene og deres type endrer seg med en parameter
  ($\mu$/$\lambda$): finn kritiske verdier der antall punkt endres (saddle-node) eller et punkt
  bytter stabilitet/type; tegn bifurkasjonsdiagram med stabile/ustabile grener.
- **Eksamensbelegg:** Sjanger G (~60 %, fast i moderne æra): «finn alle bifurkasjonspunkt for
  $\dot x=\mu x-y^2,\ \dot y=x+y-1$, tegn bifurkasjonsdiagram i $(\mu,x)$» (V19 O3). Prioritet:
  kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1, 2.2. `collapsible` **Symbol- og formelliste:**
  parameter $\mu/\lambda$; $p(\mu),q(\mu),\Delta(\mu)$; bifurkasjonsdiagram; SVG-figuren
  (saddle-node).
- **Faktakontrakt (flashcard-kilde):** **bifurkasjon** (kvalitativ endring i faseportrettet
  når parameteren passerer en kritisk verdi); **saddle-node** (to likevektspunkt oppstår/
  forsvinner); **type-/stabilitetsskifte** (følg $p(\mu),q(\mu),\Delta(\mu)$ gjennom fokus↔
  node↔sadel); **bifurkasjonsdiagram** (parameter mot $x$/$y$; stabile heltrukne, ustabile
  stiplede grener); transkritisk/pitchfork nevnes kort (bør kjenne til).
- **Utledningskontrakt:** finn kritiske verdier ved å løse $q(\mu)=0$/$\Delta(\mu)=0$ og for
  antall-endring $\partial(\text{likevekt})/\partial x=0$; vises på eksempel.
- **Typiske feil:** glemme å merke stabilitet på grenene; forveksle type-skifte (fokus↔node,
  ingen ny likevekt) med saddle-node (ny likevekt); regne kritisk $\mu$ feil.
- **Modellsvar:** «Finn bifurkasjonspunktene og tegn bifurkasjonsdiagrammet for et gitt
  parametersystem» (nyskrevet, annet enn V19).
- **Kvote:** 22 quiz / 28 flashcards.

#### Kapittel 7.2: Lineær stabilitet med tidsavhengig perturbasjon
**id:** `tma4165-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4165-2-2`

- **Kapitteltype:** teori-/analysekapittel (kunne).
- **Description:** For $\dot{\mathbf x}=(A+C(t))\mathbf x$: alle egenverdier til $A$ med
  negativ realdel + $\int_0^\infty\|C(t)\|\,dt<\infty$ ⇒ asymptotisk stabilitet; $\max\operatorname{Re}\lambda=0$
  (diagonaliserbar) + $\int\|C\|<\infty$ ⇒ stabilitet.
- **Eksamensbelegg:** Sjanger M (~40 %): «avgjør stabiliteten i origo for et gitt system med
  tidsavhengige koeffisienter» (V18 O6). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2, 2.1 ($\Phi$, $e^{tA}$). `collapsible` **Symbol- og
  formelliste:** $A+C(t)$; $\int_0^\infty\|C(t)\|\,dt$; $\operatorname{Re}\lambda$.
- **Faktakontrakt (flashcard-kilde):** **perturbasjonsteoremet** — $\operatorname{Re}\lambda_i<0$
  for alle $i$ + $\int\|C\|<\infty$ ⇒ asymptotisk stabil; $\max\operatorname{Re}\lambda_i=0$
  (med distinkte/diagonaliserbare) + $\int\|C\|<\infty$ ⇒ stabil (ikke nødvendigvis
  asymptotisk); rollen til $\int\|C\|<\infty$ (perturbasjonen dør ut raskt nok).
- **Utledningskontrakt:** teoremet oppgis (kun bruk); sjekk-prosedyren (egenverdier til $A$ +
  integrerbarhet av $\|C\|$) vises på eksempel.
- **Typiske feil:** glemme $\int\|C\|<\infty$-betingelsen; behandle $\max\operatorname{Re}=0$
  som asymptotisk; feil normvurdering av $C(t)$.
- **Modellsvar:** «Avgjør stabiliteten i origo for et gitt $\dot{\mathbf x}=(A+C(t))\mathbf x$
  ved å sjekke egenverdiene til $A$ og integrerbarheten av $\|C\|$» (nyskrevet).
- **Kvote:** 18 quiz / 22 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A bifurkasjonspunkter + diagram (saddle-node) · 7.B
type-/stabilitetsskifte via $p(\mu),q(\mu),\Delta(\mu)$ · 7.C tidsavhengig perturbasjon ·
7.D samlet parameter-/perturbasjonsprøve).

### Del 8 — Teoritillegg og beredskap *(prioritet: KJENNE — ~7 % / ~40 % historisk)*

#### Kapittel 8.1: Sentermangfoldighet og Banach-fikspunkt i funksjonsrom (2021-laget)
**id:** `tma4165-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-3-1`

- **Kapitteltype:** teori-/analysekapittel (kjenne → dekk grundig som primærmål).
- **Description:** **Sentermangfoldighetsteoremet** — i et ikke-hyperbolsk punkt, skriv
  $w=h(z)$ med ansatz $h(z)=az^2+bz^3+\dots$, sett inn i invariansligningen og match ordensvis;
  forklar teoremets rolle. **Banachs fikspunktsetning** — vis at en integraloperator er en
  kontraksjon i $C([0,T])$ med uniformnorm ⇒ eksistens OG entydighet.
- **Eksamensbelegg:** Sjanger Q (~7 %, kun juni 2021, men signal om teoretisk retning): utled
  sentermangfoldigheten via ansatz; kontraksjonsavbildning i funksjonsrom. Prioritet: kjenne
  (dekkes grundig, `(verifiser)` vekt mot neste sett).
- **Forkunnskaper/kryssbok:** kap. 3.1, 1.2 (Grönwall/entydighet). `collapsible` **Symbol- og
  formelliste:** senter-/stabil-koordinater; $w=h(z)$; $C([0,T])$; uniformnorm; kontraksjon.
- **Faktakontrakt (flashcard-kilde):** **sentermangfoldighet** (invariant mangfoldighet
  tangent til senter-egenrommet; fanger dynamikken lineariseringen ikke ser i ikke-hyperbolske
  punkt); **ansatz** $h(z)=az^2+bz^3+\dots$ + ordensvis matching; **Banachs fikspunktsetning**
  (kontraksjon på fullstendig metrisk rom ⇒ entydig fikspunkt); **$C([0,T])$** med uniformnorm
  som fullstendig rom; integraloperator $S:f\mapsto\int_0^t\dots$ er kontraksjon for liten $T$.
- **Utledningskontrakt:** ansatz-innsettingen og ordensvis matching vises på ett eksempel;
  Banach-argumentet vises (kontraksjonssjekk).
- **Typiske feil:** F3 (kun entydighet, ikke eksistens — Banach gir begge); feil orden i
  ansatzen; ikke verifisere kontraksjonskonstant $<1$.
- **Modellsvar:** «Utled sentermangfoldigheten $w=h(z)$ til andre orden for et gitt ikke-
  hyperbolsk system»; «Vis eksistens OG entydighet via en kontraksjonsavbildning i $C([0,T])$».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 8.2: Beredskap — fraktaldimensjon, IFS og kaos (historisk)
**id:** `tma4165-8-2` · **number:** 8.2 · **estimatedMinutes:** 40 · **prerequisites:** `tma4165-1-1`

- **Kapitteltype:** beredskapskapittel (kjenne — historisk, t.o.m. ~2012).
- **Description:** Fraktaldimensjon via similituder ($n\cdot s^D=1$ ⇒ $D=\ln n/\ln(1/s)$;
  blandede faktorer $\sum s_i^D=1$) og kaotisk dynamikk (Devaney-definisjonen; $z\mapsto z^2$
  på enhetssirkelen). Merket eksplisitt som historisk beredskap.
- **Eksamensbelegg:** Sjanger P (~40 % IFS / ~13 % kaos, men **kun t.o.m. ~2012** — forsvant
  ~2013). Beredskap. Del 0 rammer det inn: «dette var faste sluttoppgaver i Baas-æraen, men
  har vært borte siden ~2013; ta med som lavprioritert beredskap, verifiser mot nyeste sett
  om det gjeninnføres». Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:** kontraksjons-
  faktor $s$; dimensjon $D$; $n\cdot s^D=1$; Devaney-kriteriene.
- **Faktakontrakt (flashcard-kilde):** **selvsimilær dimensjon** $n\cdot s^D=1$ ⇒
  $D=\dfrac{\ln n}{\ln(1/s)}$ (Cantor: $n=2,s=1/3$ ⇒ $D=\ln2/\ln3$; Sierpinski: $n=3,s=1/2$ ⇒
  $D=\ln3/\ln2$) `(verifiser)`; **blandede faktorer** $\sum s_i^D=1$; **Devaney-kaos** —
  (1) sensitiv avhengighet av initialdata, (2) topologisk transitivitet, (3) tette periodiske
  punkt; **$z\mapsto z^2$** på enhetssirkelen som klassisk kaotisk eksempel.
- **Utledningskontrakt:** dimensjonsformelen utledes fra $n\cdot s^D=1$; Devaney oppgis.
- **Typiske feil:** løse $n\cdot s^D=1$ feil (logaritmeregning); blande de tre Devaney-
  kriteriene.
- **Modellsvar:** «Finn dimensjonen til en gitt selvsimilær fraktal»; «Angi Devaney-kriteriene
  og forklar hvorfor $z\mapsto z^2$ er kaotisk på enhetssirkelen».
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A sentermangfoldighet ($h(z)$-ansatz) · 8.B Banach-
fikspunkt i $C([0,T])$ (eksistens+entydighet) · 8.C fraktaldimensjon/IFS · 8.D kaos (Devaney)
— beredskapsprøve, merket historisk).

### Del 9 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 9.1: Sjangerspill — løsningsoppskrifter A–Q og kald bank
**id:** `tma4165-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4165-8-1`

- **Kapitteltype:** sjangerspill + kald bank.
- **Description:** Én kompakt løsningsoppskrift per sjanger (A–Q): hvordan gjenkjenne den,
  hvilket teorem/verktøy, algoritmiske trinn, tidsbudsjett, vanligste feil. Deretter en
  **kald bank** (8–10 oppgaver uten hint, uvante kombinasjoner, kun momentliste-fasit).
- **Eksamensbelegg:** Metakapittel — samler sjangrene A–Q (analysen §3). Skal gjøre studenten
  i stand til å møte en ukjent oppgave og raskt velge riktig verktøy. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka (Del 1–8). `collapsible` **Symbol- og formelliste:**
  samlet oppslagskort — sjanger → teorem → én-linjes oppskrift.
- **Innholdskontrakt:** for HVER sjanger A–Q: gjenkjenningssignal, teorem/verktøy,
  algoritmiske trinn, tidsbudsjett, vanligste feil (F1–F11). **Kald bank:** 8–10 oppgaver med
  uvante vinklinger/kombinasjoner (f.eks. «klassifisér + regn indeks + utelukk periodisk bane»
  i ett), UTEN hint, kun momentliste-fasit, tydelig merket som kald.
- **Typiske feil:** F11 (tidsfelle — den store fasplan-oppgaven); velge feil verktøy under
  tidspress.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 9.2: Øvingseksamen 1 (moderne kjerne)
**id:** `tma4165-9-2` · **number:** 9.2 · **estimatedMinutes:** 90 · **prerequisites:** `tma4165-9-1`

- **Kapitteltype:** øvingseksamen (DNA øvingseksamen).
- **Description:** Komplett nyskrevet sett i moderne mal (7–8 oppgaver, 4 t, kode D): lineær
  fasplan (A), stabilitet via linearisering (B), Lyapunov 3D (C), periodisk løsning (E/F),
  indeks (D), bifurkasjon (G), eksistens/entydighet (H). Full modellsvar-fasit med skisser +
  begrunnelser, Sensorblikket per oppgave, selvdiagnose-sjekkliste.
- **Eksamensbelegg:** Speiler temafordelingen i analysen §2 (en «typisk» moderne eksamen).
  Kildeforbehold gjentas. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Typiske feil:** samlet — F1–F11 der de opptrer i settet; tidsbudsjett (F11).
- **Kvote:** 10 quiz / 6 flashcards.

#### Kapittel 9.3: Øvingseksamen 2 (indeks- og periode-tung)
**id:** `tma4165-9-3` · **number:** 9.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4165-9-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett med tyngde på indeks (D/L), Poincaré–Bendixson (E),
  Bendixson neg. (F), Hamilton (I) og polar/Liénard (J/K) — en profil som speiler et
  «geometri-tungt» sett. Full fasit + Sensorblikket + selvdiagnose.
- **Eksamensbelegg:** Alternativ profil (analysen §2). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Typiske feil:** F4, F6, F9, F10.
- **Kvote:** 10 quiz / 6 flashcards.

#### Kapittel 9.4: Øvingseksamen 3 (teoritungt, 2021-profil)
**id:** `tma4165-9-4` · **number:** 9.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4165-9-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett i 2021-profil med eksplisitt poengvekting (sum 60):
  tyngre teori — sentermangfoldighet (Q), Banach-fikspunkt (Q/H), sektoranalyse via indeks-
  formelen (L), pluss kjernesøylene. Full fasit + Sensorblikket + selvdiagnose.
- **Eksamensbelegg:** Speiler juni-2021-settet (analysen §1/§7). Kildeforbehold + `(verifiser)`
  om at 2021-linjen kan endres. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka, særlig Del 8.
- **Typiske feil:** F3 (eksistens+entydighet), F1, F6.
- **Kvote:** 10 quiz / 6 flashcards.

**Prøve-kvote Del 9:** ingen egen prøve (Del 9 ER sjangerspillet + de tre øvingseksamenene
9.2–9.4).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 24 | 30 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 62 | 76 | 4 |
| 2 | 3 | 64 | 80 | 4 |
| 3 | 4 | 86 | 108 | 4 |
| 4 | 2 | 44 | 56 | 4 |
| 5 | 4 | 82 | 100 | 4 |
| 6 | 2 | 38 | 46 | 4 |
| 7 | 2 | 40 | 50 | 4 |
| 8 | 2 | 34 | 42 | 4 |
| 9 | 4 | 48 | 28 | 0 (= sjangerspill + 3 øvingseksamener) |
| **Sum** | **28** | **522 ✓ (≥500)** | **616 ✓ (≥500)** | **32 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards) — kontrollregnet FØR totalen:
- Del 0: 10+14 = **24** / 12+18 = **30**
- Del 1: 20+22+20 = **62** / 24+28+24 = **76**
- Del 2: 22+22+20 = **64** / 28+28+24 = **80**
- Del 3: 22+22+20+22 = **86** / 28+28+24+28 = **108**
- Del 4: 22+22 = **44** / 28+28 = **56**
- Del 5: 22+20+20+20 = **82** / 28+24+24+24 = **100**
- Del 6: 18+16 = **34**… *(korreksjon under)*
- Del 7: 22+18 = **40** / 28+22 = **50**
- Del 8: 18+16 = **34** / 22+20 = **42**
- Del 9: 18+10+10+10 = **48** / 10+6+6+6 = **28**

Kontrollregning Del 6: 18+16 = **34** quiz / 22+20 = **42** flashcards.

Total quiz: 24+62+64+86+44+82+34+40+34+48 = **518**.
Total flashcards: 30+76+80+108+56+100+42+50+42+28 = **612**.

> **Merk (autoritativ korreksjon):** Tabellraden for Del 6 sto opprinnelig som 38/46; den
> kontrollregnede per-kapittel-summen er **34 quiz / 42 flashcards** (6.1: 18/22 + 6.2:
> 16/20). De autoritative totalene er derfor **518 quiz / 612 flashcards** — begge godt over
> gulvet på 500. Ved bygging er per-kapittel-kvotene i §3 fasit; denne linjen overstyrer
> tabellens Del 6-rad og Sum-rad.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen
speiler frekvens og natur: de fire søylene (Del 2 lineær ~93 %, Del 3 stabilitet/Lyapunov
~87/80 %, Del 4 indeks ~80 %, Del 5 periodiske løsninger ~73 %) bærer 276 av 518 quiz og 344
av 612 flashcards.

**Flashcard-profilen (612) ligger godt over gulvet (500)** fordi eksamen er **helt uten
oppslagsverk** (kode D — kun kalkulator, ingen formelsamling) og hele teoriapparatet må
sitte. Hvert delkapittels **Symbol- og formelliste** er en naturlig flashcard-kilde.
Korttyper: **teorem↔betingelse↔konklusjon** (Poincaré–Bendixson; Bendixson neg.;
Hartman–Grobman), **klassifikasjon** ($q<0$ ⇒ sadel; $q>0,\Delta<0,p<0$ ⇒ stabil fokus),
**indeks** (sadel $-1$; node/fokus/senter $+1$; $I_\infty=2-\sum I_i$),
**formel** ($r\dot r=x\dot x+y\dot y$; Bendixsons indeksformel $I=1+(e-h)/2$; Grönwall),
**begrep** (hyperbolsk; asymptotisk stabil; homoklin bane; invariant annulus). **Quiz-
profilen** driller nabobegrep-distraktorer (node/sadel/fokus/senter, stabil/asymptotisk/
ustabil, sterk/svak Lyapunov, hyperbolsk/ikke-hyperbolsk, Bendixson neg. vs. indeksformel,
homoklin/heteroklin, finne vs. utelukke grensesykel).

### Prøver (4 per temadel, 32 totalt)

Fire prøver per temadel (Del 1–8). Hver prøve speiler eksamensmalen i miniatyr: en blanding
av analyse-/utledningsoppgaver (klassifisér, avgjør stabilitet, regn indeks, vis eksistens,
utled bifurkasjon) med **skisse-fasit** i fasplan-notasjonen + eksplisitt begrunnelse og
teoremnavn. Omfang 25–45 min per prøve; deklareres som «4 prøver à ~X min — kan trygt deles
over flere kvelder, én prøve per økt». Alle oppgaver NYSKREVNE. Prøvekapittel-id
`tma4165-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 9 har ingen
egen prøve (Del 9s sjangerspill + tre øvingseksamener dekker helheten). Prøvetitlene er
spesifisert per del i §3 (Prøve-kvote-linjene).

### Komplette øvingseksamener (3 — kapitlene 9.2–9.4)

Tre nyskrevne sett i arkivmalen (4 t, kode D — kun kalkulator, 7–9 oppgaver / 2021-profil med
poengvekting sum 60), med ulik men typisk profil (moderne kjerne / indeks-periode-tung /
teoritungt 2021-lag), full modellsvar-fasit (klassifikasjoner, skisser i fasplan-notasjonen,
Lyapunov-/annulus-argumenter, indeksberegninger, teoremnavn), Sensorblikket per oppgave og
selvdiagnose-sjekkliste. **Kildeforbehold i alle tre:** 2016–2018-fasitene er håndskrevne
skann, klassiske sett har ingen eksplisitt vekting, sensorlogikken er delvis utledet
`(verifiser)`; kalibreringen bygger på 2002–2021-arkivet, og 2021-teorilaget bør verifiseres
mot neste ordinære sett. Til sammen dekker de tre settene sjangrene A–Q minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, kode D — kun kalkulator, 5–9 oppgaver
   uten flervalg, alt utledes/skisseres fra hodet, ingen formelark), kildeforbeholdet
   (2016–2018-skann, klassiske sett uten vekting) og statusverifiseringen (aktivt emne, vår
   2026/2027, forgjenger SIF5025) (fra kap. 0.1).
2. **Fasplan-håndverket** — skisse-/tekstnotasjonen (likevektspunkt + type + egenvektorer +
   begrunnet orientering, med referansefigurene) og begrunnelsesspråket (presis stabilitets-
   terminologi + eksplisitte teoremnavn). **Dette gir poeng på nesten hver oppgave — riktig
   klasse uten begrunnelse gir sterkt redusert uttelling** (fra kap. 0.2).
3. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt* (lineær
   fasplan ~93 %, stabilitet via linearisering ~87 %, Lyapunov ~80 %, indeks ~80 %,
   Poincaré–Bendixson ~73 %, Bendixson neg. ~60 %), *kunne* (bifurkasjon ~60 %, eksistens/
   entydighet ~60 %, Hamilton ~53 %, polar/Liénard ~53/33 %, tidsavh. perturbasjon ~40 %),
   *kjenne* (sentermangfoldighet/Banach — 2021-laget; fraktaler/kaos — historisk beredskap).
4. **De fire søylene i dybden** — hvert søyle-tema med teoremapparatet, løsningsoppskriften og
   de vanligste feilene (Del 2–5).
5. **De moderne søylene** — bifurkasjon og eksistens/entydighet (Del 1, Del 7).
6. **Teoritillegg** — 2021-laget og beredskapsstoffet (Del 8), med `(verifiser)`-forbehold.
7. **Sjangerspillet + øvingseksamenene** — løsningsoppskrifter A–Q, kald bank og tre
   komplette sett (Del 9).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

1. **Del 0 først** (0.1 eksamenskart, 0.2 fasplan-håndverk) — etablerer notasjonen,
   sjangerkodene, frekvensene og statusverifiseringen som resten refererer.
2. **Del 1 → Del 5** (kjernen: grunnlag, lineær, stabilitet, indeks, periodiske løsninger) —
   søylene med drillkapitler. Bygg teori før drill innen hver del.
3. **Del 6 → Del 8** (Hamilton/symmetri, bifurkasjon/perturbasjon, teoritillegg/beredskap).
4. **Del 9 sist** (sjangerspill + øvingseksamener) — forutsetter at alt fagstoffet finnes.
5. **SVG-figurer** (fire faseportrett-typer, invariant annulus, saddle-node-diagram) skrives
   og valideres som XML, wires som `image`-blokker, og lastes opp med
   `npx tsx scripts/upload-media-storage.ts` (ellers 404 i prod).
6. **Matematisk sannhetskontroll (UFRAVIKELIG, DNA-regnefag):** ALLE fortegns-, stabilitets-,
   indeks- og entydighetspåstander parametersjekkes numerisk (python3) i det fulle
   parameterrommet FØR de skrives. Klassifikasjonstabellen ($q<0$⇒sadel osv.) er allerede
   verifisert over tilfeldige $A$ i skjelettfasen; Hamilton-eksemplet
   $H=\tfrac12(x^4+x^2y^2+y^4)$ er verifisert divergensfri. Usikre påstander (indeks-fortegn/
   orientering i V13-typen, Liénard senter-betingelsen, Bendixsons indeksformel for konkrete
   sektortall, fraktal-dimensjonene) er merket `(verifiser)` i §3 og skal fagfellesjekkes i
   fase 6.
7. **Kvotene fra kvotesammendraget (§4) er fasit** — per-kapittel-kvotene i §3 er minimum;
   totalen (**518 quiz / 612 flashcards**) er den autoritative, kontrollregnede summen.
8. **Byggekontrakt:** instansier `BYGGEKONTRAKT-MAL.md` → `tma4165/BYGGEKONTRAKT.md` med
   fagspesifikk stil fra §1–§2 (fasplan-notasjonen, kode D-regelen, teoremnavn-kravet), og
   registrer emnet i `institusjoner.ts` under NTNU («TMA4165 Dynamiske systemer») samt sjekk
   at `hoyskole-disclaimer.tsx` treffer emnet (regnefag — ingen jus/helse-heuristikk nødvendig).

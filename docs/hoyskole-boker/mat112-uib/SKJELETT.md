# Bokskjelett: MAT112 Grunnkurs i matematikk II (UiB) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (~10 grundig dokumenterte sett med fasit, 2005–2014, to sett per år; ~55 eldre
> sett skummet; 5 pensumlister). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her.
>
> **Institusjon: UiB (ikke UiO).** MAT112 er den direkte oppfølgeren til
> **MAT111** (`../mat111-uib/`). Progresjonen er kartlagt i analysen §1: MAT112
> tar over der MAT111 slapp — enkeltvariabel-derivasjon/-integrasjon, l'Hôpital,
> kjerneregel, substitusjon og delvis integrasjon **forutsettes** og brukes uten
> forklaring inne i rekke- og flervariabeloppgavene. MAT111-boken er ennå IKKE
> bygget; forkunnskaps-referanser til den skrives derfor i **klartekst** (ikke
> som lenker), markert «MAT111 kap. X (bygges — ikke lenkbar ennå)», og
> aktiveres til ekte lenker når MAT111 er live. Flervariabel- og analysestoffet
> er sammenlignet mot UiO-emnene MAT1110/MAT2400 (kun formatforbilde).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat112-uib` |
| Tittel | **MAT112 Grunnkurs i matematikk II (UiB)** |
| Institusjon | Universitetet i Bergen |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk, én **lukket bok**-slutteksamen) |
| Antall kapitler | **36** (1 eksamenskart + 30 tema/drill + 1 føringsstandard + 3 øvingseksamener) + **28 prøvekapitler** |
| Estimert totaltid | **≈ 2 550 min ≈ 42,5 timer** (uten prøver) |
| Quiz totalt | **576** (krav ≥500) |
| Flashcards totalt | **640** (sikt 600–700 — teorem-/testrikt, lukket bok) |

**Pitch (ett avsnitt):** MAT112 vurderes med **én avsluttende skriftlig
skoleeksamen på 5 timer (kl. 09–14)** som teller 100 %. Settet avholdes både i
mai/juni (ordinær) og september (kontinuasjon) med samme temaprofil. Den
avgjørende rammeforskjellen mot forgjengeren MAT111: **MAT112 er lukket bok** —
kun kalkulator er tillatt, læreboken (Adams & Essex, *Calculus: A Complete
Course*) er *ikke* tillatt. Det snur oppgavedesignet: konvergenskriterier,
standard Maclaurin-rekker og navngitte teoremer **må memoreres**, og eksamen
tester like mye *kjennskap til teoremer og definisjoner* som regneferdighet.
Settets to bærende søyler er **uendelige rekker + potensrekker** (praktisk talt
hvert sett, 3–4 deloppgaver) og **flervariabel differensialregning**
(gradient/retningsderivert ~90 %, global optimering ~80 %, tangentplan ~60 %).
Tre analyse-teoretiske signaturoppgaver — kontinuitet/deriverbarhet av en
flervariabel funksjon i et punkt, uniform kontinuitet og Riemann-integrerbarhet
— lukker gjerne settet og avgjør toppkarakterene. Denne boka driller de 15
dokumenterte sjangrene (A–O) rett mot dette settet, med løsningsforslag skrevet
slik sensor vil se dem: **teoremene navngis**, eksistens leveres som eget steg,
og alle endepunkter/randpunkter sjekkes.

**Kritiske stil- og notasjonsregler (gjelder HELE boka):**

1. **Lukket bok forplikter til teoremkjennskap — navngi setningene.**
   Løsningsforslagene navngir og paragrafhenviser konsekvent hvert teorem de
   bruker: forholdstesten ($\S$9.3), ekstremalverdisetningen ($\S$13.1 Teorem 2,
   *Extreme Value Theorem*), Teorem 12.6 ($\nabla f \perp$ nivåflate), Abels
   teorem, kompletthetsaksiomet, Sats 2.2 i uniform-kontinuitet-notatet.
   **Å bare regne seg fram uten å navngi det bærende teoremet gir trekk.**
   Konvergenstestene, de geometriske/Maclaurin-standardrekkene og
   teoremformuleringene skal presenteres slik at de kan *memoreres* (flashcard-gull).
2. **Eksistens er en egen leveranse — føres FØR resultatet.** Emnets hyppigste
   sensoranmerkning. Boka fører den alltid som eget steg: (i) i optimering
   påberopes **ekstremalverdisetningen** ($f$ kontinuerlig, $D$ **lukket og
   begrenset** — begge uttales) *før* kandidatjakt; (ii) i rekursive følger vises
   **monoton + begrenset** *før* grensen regnes ut; (iii) et **Lagrange-punkt er
   ikke et ekstremum** før ekstremum er vist å finnes. Å hoppe over eksistensen
   er byggefeil.
3. **Endepunkter og randpunkter sjekkes alltid eksplisitt.** To dokumenterte
   feller: (i) **potensrekkers konvergensintervall** — de to endepunktene $x = \pm R$
   undersøkes *separat* (der forholdstesten er taus); (ii) **randanalyse i global
   optimering** — når randen reduseres til én variabel, sjekkes også dens
   endepunkter (eksplisitt V2012-merknad: «mange glemte de siste»). Alle tre
   kandidatkategoriene (kritiske / singulære / randpunkter) nevnes.
4. **Alternerende rekker krever monotonisjekk.** Leibniz' test har *tre*
   betingelser: alternerende, $|a_n|\to 0$, og $|a_n|$ **avtagende**. Boka sjekker
   alltid alle tre; monotonikravet dropppes aldri (fellen $\sum (-1)^{n-1}/(3+(-1)^n n)$
   der leddene veksler mellom to størrelsesordener).
5. **Eksistens av partielle deriverte er IKKE deriverbarhet.** I flere variable
   skilles de to alltid: $\sqrt{|xy|}$ har partielle deriverte i origo, men er
   *ikke* deriverbar der (vis via linja $y=x$). Kontinuitet «vist» langs én sti
   beviser ingenting — divergens krever to stier med ulike grenser; konvergens
   krever polar/skvis/$\varepsilon$-$\delta$.
6. **Alternative løsninger honoreres.** Der fasit fører 2–4 likeverdige veier
   (kontinuitet via $\varepsilon$-$\delta$ *eller* polar *eller* skvis; rand via
   parametrisering *eller* Lagrange *eller* innsetting; lukket sum via ledvis
   derivasjon *eller* delbrøk-omskriving), viser boka begge og markerer «Alternativt:».
7. **Standardnotasjon og -føring boka speiler** (fra fasitspråket, analysen §6):
   gradient $\nabla f = f_1\,\mathbf{i} + f_2\,\mathbf{j}$ (indeks for partiell
   derivert); retningsderivert $D_{\mathbf u} f = \hat{\mathbf u}\cdot\nabla f$
   med **normalisert** retningsvektor; polart areal $\tfrac12\int r^2\,d\theta$;
   øvre/nedre Riemann-summer $U(f,P)$, $L(f,P)$ med $\sup/\inf$; uniform
   kontinuitet med $\delta=\delta(\varepsilon)$ uavhengig av punkt, $\delta=\varepsilon^2$-
   og $\delta=\min\{\dots\}$-maler; geometrisk rekke $\sum ar^n = a/(1-r)$;
   konvergensintervall skrevet med eksplisitt endepunktsstatus.
8. **Internasjonal kandidatgruppe.** Eksamen gis på bokmål/nynorsk/engelsk
   parallelt. Boken er på **norsk bokmål**, men gir **engelske teoremnavn i
   parentes ved første forekomst** (Extreme Value Theorem, Mean Value Theorem,
   Ratio Test, Squeeze Theorem) slik oppgavesettene selv gjør.
9. **Ærlighet om arkivet og pensum.** Kalibreringen bygger på det svært stabile
   **2005–2014**-vinduet; **arkivet stopper ved V2014**, men emnet undervises
   fortsatt aktivt ved UiB. Kapittelavgrensninger (hvilke $\S$-er av kap. 12/13
   som er med) merkes «verifiser mot gjeldende pensumliste (uib.no/emne/MAT112)».
   **Byggefasen bør skaffe sett fra 2015+** hvis de er tilgjengelige, og justere
   vekting/vanskelighet deretter. Boken skal **IKKE** dekke multiple integraler,
   vektorfelt eller Green/Gauss/Stokes (var M101 t.o.m. 2003, hører nå til senere
   UiB-emner) — disse gis kun en kort «bør kjenne til»-omtale i Del 0 om hvor
   MAT112 slutter. Ordinære differensiallikninger som eget tema er MAT111-stoff
   og er ute; de opptrer kun som *verktøy* i gradientflyt-sjangeren (K).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen) og analysens progresjon fra
MAT111; frekvensen styrer *omfanget* (nivå 1 «perfekt» → 3–5 kapitler + drill;
nivå 3 «kjenne» → ett kompakt kapittel). Seksjonstitler (blir `sectionNames` i
metadata — vises som «Kapittel N: …» på bokforsiden):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Følger, kompletthet og grenser i R | 3 | Fundament for rekker; følger ~60 % (nivå 2), kompletthet/monoton-begrenset ~30 % (nivå 2, toppdifferensiator) → 2 teori + rekursjonsdrill. |
| 2 | Uendelige rekker og konvergenstester | 5 | **~95–100 %, emnets tyngste ryggrad** → nivå 1 «perfekt» → 4 teorikapitler (én per testfamilie) + drill «velg og navngi test». |
| 3 | Potensrekker og Taylor-rekker | 4 | **Potensrekker ~95 %** (nivå 1) + Taylor/Maclaurin ~50 % (nivå 2) → 3 teori + drill; standardrekkene må memoreres (lukket bok). |
| 4 | Flervariabel differensialregning | 6 | **Gradient/retningsderivert ~90 %** (nivå 1) + tangentplan ~60 % + kontinuitet/deriverbarhet i punkt ~40 % (nivå 2) + R³-vektorgeometri ~35 % (nivå 3) → 5 teori + gradientdrill. |
| 5 | Flervariabel optimering | 6 | **Global optimering på lukket område ~80 %** (nivå 1) + Lagrange ~45 % + anvendt ~50 % (nivå 2) + gradientflyt ~15 % (nivå 3) → 4 teori + kjenne-kapittel + randanalyse-drill. |
| 6 | Kjeglesnitt, parametriske og polare kurver | 4 | **Polar ~80 %** (nivå 1) + parametrisk ~55 % + kjeglesnitt ~50 % (nivå 2) → 3 teori + drill; stabil «bredde-poeng»-klynge fra Adams kap. 8. |
| 7 | Reell analyse: uniform kontinuitet og Riemann | 3 | **Uniform kontinuitet ~70 % + Riemann-integrerbarhet ~70 %** (nivå 1, UiB-signatur) → 2 teori + drill for de tre analyse-signaturene. |
| 8 | Eksamenstrening | 4 | Lukket bok-/føringsstandard-kapittel + 3 komplette 5-timers øvingseksamener (Knutsen-, Svärd- og teoritung profil). |

**Avvik fra DNA-malen (dokumentert):**

1. **Polare/parametriske kurver (Del 6) ligger etter flervariabel/optimering**,
   ikke rett etter rekker. Faglig er kap. 8-stoffet nesten selvstendig (bygger
   kun på MAT111-integrasjon: buelengde, polart areal), og settdramaturgien
   plasserer det ofte som *åpning* sammen med gradient. Rekkefølgen her følger
   den eksplisitt spesifiserte makrostrukturen for boka; ingen avhengighet brytes
   (Del 6 forutsetter kun MAT111-integrasjon, ikke Del 2–5).
2. **Drillkapitlene ligger i temadelene sine** (1.3, 2.5, 3.4, 4.6, 5.6, 6.4,
   7.3) i stedet for i siste del: dette er nivå 1-/høyfrekvente gjengangere som
   må drilles rett etter teorien. Del 8 beholder føringsstandarden og
   øvingseksamenene. Tillegg i tråd med DNA-ens drillkapittel-mønster.
3. **36 kapitler** ligger i øvre halvdel av DNA-vinduet (20–35, marginalt over).
   Lukket bok + et bredt teorem-/sjangerregister (A–O) og to bærende søyler som
   hver krever 4–5 kapitler forsvarer bredden; ingen enkeltdel er oppblåst.
4. **Kapittel 8.1 (lukket bok / føringsstandard) finnes ikke i DNA-malen**:
   teoremnavning og eksistens-som-egen-leveranse er MAT112s viktigste
   tverrgående regler og fortjener samlet trening + en teoremnavn-/standardrekke-bank
   (flashcard-gull).
5. **Del 7 samler den analyse-teoretiske trioen** som en UiB-signatur. De tre
   signaturoppgavene (kontinuitet/deriverbarhet i punkt [teori i 4.2],
   uniform kontinuitet [7.1], Riemann [7.2]) drilles sammen i 7.3 fordi de
   opptrer sammen og lukker Knutsen-settene.
6. **Quizbanken er teorem-/testvalg-sjekk**, ikke ren repetisjon: hvilken test
   passer denne rekken, hvilket teorem bærer argumentet, hvilken betingelse
   mangler, er retningsvektoren normalisert. Distraktorene bygges på feilkatalogen
   (§5 i analysen). Tillegg til DNA-en, ikke avvik.
7. **Flashcard-tettheten er høyere enn i et typisk regnefag** (640, ikke ~510):
   lukket bok gjør konvergenstester, standardrekker, teoremformuleringer og
   definisjoner (uniform kontinuitet, Riemann-integrerbarhet) til rent
   pugge-stoff. Fordelingen er tyngst i Del 2 (rekker), Del 3 (standardrekker),
   Del 7 (analyse-definisjoner) og kap. 8.1 (teoremnavn-bank).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0:
**A** rekkekonvergens (velg og navngi test),
**B** potensrekker (konvergensintervall + lukket sum),
**C** Taylor-/Maclaurin-rekker med feilskranke,
**D** følger (rekursjon, monotoni/begrensethet, konvergens),
**E** gradient, retningsderivert og tangentplan,
**F** global optimering på lukket, begrenset område,
**G** Lagranges multiplikatorer,
**H** anvendt/modellert optimering,
**I** kjeglesnitt, parametriske og polare kurver,
**J** kontinuitet/deriverbarhet av flervariabel funksjon i et punkt,
**K** gradientflyt → separabel differensiallikning,
**L** uniform kontinuitet,
**M** Riemann-integrerbarhet,
**N** kompletthet, følgekonvergens og deriverbar ⇒ kontinuerlig (App. III),
**O** vektorgeometri i R³.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Prosareferanser i innholdet bruker del-basert form («kap. 2.4», «se kap. 4.4»).

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: én lukket bok-eksamen på fem timer

- **id:** `mat112-uib-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT112: én 5-timers lukket bok-eksamen, temafrekvensene, settets to bærende søyler og de tre analyse-signaturene, og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele det dokumenterte arkivet (~10 sett med fasit, 2005–2014). Skal gjengi: (i) vurderingsformen — én skriftlig skoleeksamen 5 timer (kl. 09–14), 100 %, fullt sett både mai/juni og september med samme profil; **lukket bok** (kun kalkulator — motsatt MAT111); enten ~8 hovedoppgaver / **~16 likt vektede deloppgaver** (Knutsen-mal, ~17–19 min/del) eller ~11 kortere oppgaver (Svärd-mal); stående instruks «Alle svar skal begrunnes, men begrunnelsene skal være korte», og «det gis godt med poeng for riktig fremgangsmåte selv uten korrekt svar»; (ii) **hva lukket bok betyr**: konvergenskriterier, Maclaurin-rekker og teoremer må memoreres — å velge riktig test og *navngi* den er selve ferdigheten; fasit siterer alltid navngitte teoremer; (iii) settets faste dramaturgi (Knutsen): åpner med **gradient/retningsderivert/tangentplan** eller **polar/parametrisk**, midtparti med **rekker/potensrekker** og **flervariabel optimering**, avslutter med de tre **analyse-signaturene**; (iv) temafrekvens-tabellen (rekkekonvergens ~95–100 %, potensrekker ~95 %, gradient/retningsderivert ~90 %, global optimering ~80 %, polar ~80 %, uniform kontinuitet ~70 %, Riemann ~70 %, tangentplan ~60 %, følger ~60 %, parametrisk ~55 %, Taylor/Maclaurin ~50 %, kjeglesnitt ~50 %, anvendt optimering ~50 %, Lagrange ~45 %, kontinuitet/deriverbarhet i punkt ~40 %, nivåkurver ~40 %, R³-vektorgeometri ~35 %, kompletthet/følgekonvergens ~30 %, deriverbar⇒kontinuerlig ~30 %, ε-δ ~20 %, kjerneregel flere variable ~20 %, gradientflyt ~15 %); (v) at lukket bok flytter poeng fra oppslag til *memorert teorem + korrekt anvendelse*; (vi) karakterskillene (se under); (vii) **hvor MAT112 slutter**: multiple integraler, vektorfelt og Green/Gauss/Stokes er IKKE pensum (senere emner) — kort orientering; (viii) ærlighetsforbeholdet (arkiv stopper V2014, sjekk 2015+).
- **Innholdskontrakt:** Sjangerkatalogen A–O presenteres som studentens sjekkliste med frekvens per sjanger; **prognosen for neste ordinære eksamen** (5 timer, lukket bok): 1–2 **rekkekonvergens** (velg/navngi test, betinget vs. absolutt); én **potensrekke** (konvergensintervall + endepunkter + lukket sum); én **gradient/retningsderivert/tangentplan**; én **global optimering på lukket område** (evt. anvendt eller Lagrange); én **polar** (areal/skjæringspunkt) og/eller **parametrisk** (buelengde) og/eller **kjeglesnitt** (standardform); ofte én **følge** (rekursjon/induksjon/grense); og de tre **analyse-signaturene** (kontinuitet/deriverbarhet i punkt, uniform kontinuitet, Riemann-integrerbarhet). Toppkarakter-differensiatorer: **Taylor-nærming med feilskranke** eller **kompletthets-/følgekonvergensbevis**. **MAT111 → MAT112-broen** forklares: enkeltvariabel-integrasjon (substitusjon/delvis/delbrøk/trig-sub), l'Hôpital, kjerneregel, difflikninger forutsettes kjent. Karakterskille-listen (fra §4 under).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 16 likt vektede deler på 5 timer — sett opp tidsbudsjett og avgjør hvilke sjangre du sikrer først (rekker + gradient + polar er tryggest)» og «lukket bok: hvilke teoremer/standardrekker MÅ du kunne utenat, og hvordan pugger du dem?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten frekvensprioritering; tro at lukket bok bare betyr mindre å slå opp (det betyr mer å memorere); regne uten å navngi teoremet; hoppe over eksistensleddet; glemme endepunkter/randpunkter; bruke tid på multiple-integral-stoff som ikke er pensum.
- **Quiz: 12 · Flashcards: 14** (frekvenser, dramaturgi, lukket bok-regler, sjangerkatalog A–O, hva som er/ikke er pensum)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Følger, kompletthet og grenser i R *(nivå 2 «kunne»; kompletthetsbevis er toppdifferensiator)*

#### Kapittel 1.1: Følger: konvergens, monotoni og begrensethet

- **id:** `mat112-uib-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Følgebegrepet, grense av en følge, og de to egenskapene som garanterer konvergens — monotoni og begrensethet — som grunnlag for både rekker (Del 2) og de rekursive følgeoppgavene.
- **Forkunnskaper (kryssbok):** [Følger og tallmønstre](/bok/r2/r2-1-1), [Aritmetiske følger](/bok/r2/r2-1-2), [Geometriske følger](/bok/r2/r2-1-3), [Grenseverdi](/bok/r1/r1-3-1). Fra MAT111: grenseregning og l'Hôpital (MAT111 kap. 2.2 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Fundament for sjanger D (følger ~60 %) og for hele Del 2 (rekker som følger av delsummer). Følgegrenser og monotoni-/begrensethetsanalyse er innøvings-stoffet den rekursive signaturoppgaven bygger på. Prioritet: **kunne** (fundament: perfekt).
- **Innholdskontrakt:** Følge $\{a_n\}$; konvergens $\lim_{n\to\infty} a_n = L$ (intuitivt + $\varepsilon$-$N$-definisjonen, den siste til bruk i toppsjikt-varianten); regneregler for følgegrenser; **monoton følge** (voksende/avtagende, strengt vs. svakt) og **begrenset følge** (oppad/nedad); standard grensegrep: l'Hôpital på den kontinuerlige utvidelsen, veksthierarki $\ln n \ll n^p \ll a^n \ll n!$, skvis for følger; kontinuitet gir $\lim f(a_n) = f(\lim a_n)$ når $f$ er kontinuerlig (brukes til å finne grensen i rekursjon, kap. 1.3). Notasjon: $\{a_n\}_{n\ge 0}$, indeksstart markeres.
- **Oppgavesjangre:** D (fundament). Mønstereksempel: «Avgjør om $a_n = \frac{n^2}{2^n}$ konvergerer, og finn grensen.» Mønstereksempel: «Vis at $a_n = \left(1+\tfrac1n\right)^n$ er voksende og oppad begrenset.»
- **Typiske feil:** Bruke veksthierarkiet feil (fakultet vs. eksponentiell); regne grensen som om følgen var kontinuerlig uten begrunnelse; blande «begrenset» og «konvergent» (begrenset alene garanterer ikke konvergens); glemme å begrunne monotoni før man påberoper den.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Kompletthet og teoremet om monoton, begrenset følge

- **id:** `mat112-uib-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-1-1`
- **kapitteltype:** teori
- **description:** Kompletthetsaksiomet for R og beviset for at en monoton, begrenset følge konvergerer — App. III-teorien som bærer eksistensargumentet i rekursive følger og lukker Knutsen-settene.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Induksjonsbevis](/bok/r2/r2-1-6), [Induksjon](/bok/r1/r1-9-2). Fra MAT111: kontinuitet og ekstremalverdisetningen i én variabel, deriverbar ⇒ kontinuerlig (MAT111 kap. 2.3, 3.1 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger N (kompletthet/følgekonvergens ~30 % eksplisitt, men det underliggende apparatet brukes i sjanger D og L). «Formulér kompletthetsaksiomet og bruk det til å bevise at en monoton, begrenset følge konvergerer» er typisk oppgave 8a i Knutsen-settene og en **toppkarakter-differensiator**. Prioritet: **kunne** (bevisføring: krever presisjon).
- **Innholdskontrakt:** **Kompletthetsaksiomet** (minste øvre skranke / supremumsegenskapen) for $\mathbb{R}$; supremum/infimum, øvre/nedre skranke; **Teorem: en voksende, oppad begrenset følge konvergerer** (mot sitt supremum) — fullt bevis via kompletthet; den avtagende, nedad begrensede varianten (mot infimum); App. III-teoremene for kontinuerlige funksjoner brukt her: begrensningssetningen (Teorem 5) og ekstremalverdisetningen (Teorem 6), samt $\lim f(x_n) = f(\lim x_n)$ (Teorem 4); **deriverbar ⇒ kontinuerlig** i ett punkt (kort bevis via $\lim(f(x)-f(a)) = f'(a)\lim(x-a) = 0$) og moteksempel for det omvendte ($|x|$ i $0$) — App-teori som gjenbrukes i flervariabel-kapitlet 4.3. Engelske navn i parentes (Completeness Axiom, Monotone Convergence Theorem).
- **Oppgavesjangre:** N. Mønstereksempel: «Formulér kompletthetsaksiomet for $\mathbb{R}$ og bruk det til å bevise at en avtagende, nedad begrenset følge konvergerer.» Mønstereksempel: «Vis at deriverbarhet i $a$ medfører kontinuitet i $a$, og gi et moteksempel for den omvendte påstanden.»
- **Typiske feil:** Bruke teoremet uten å nevne kompletthet; forveksle «begrenset» med «konvergent»; påstå konvergens uten monotoni; bevise deriverbar ⇒ kontinuerlig med feil grenseoppsett; tro at det omvendte gjelder.
- **Quiz: 14 · Flashcards: 26**

#### Kapittel 1.3: Drill: rekursive følger — induksjon, eksistens før grense

- **id:** `mat112-uib-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `mat112-uib-1-2`
- **kapitteltype:** drill
- **description:** Signatursjangeren for følger: gitt $a_{n+1}=f(a_n)$, vis ved induksjon at følgen er monoton og begrenset, konkludér konvergens, og finn grensen — i den rekkefølgen sensor krever.
- **Eksamensbelegg:** Sjanger D — ~60 %. Sensorinnsikt (H2011/V2011): det er **nødvendig å begrunne at følgen konvergerer FØR man snakker om grensen** — å regne $L = f(L)$ uten eksistensbegrunnelse gir trekk. Den anvendte varianten oversetter en modelleringssituasjon (forurensning i vassdrag, saltkonsentrasjon i akvarie, avfallsutslipp) til en rekursjonsformel. Prioritet: **kunne** (eksistensdisiplinen: perfekt).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) beregn de første leddene, gjett monotoniretning og en skranke; (2) **induksjonsbevis** for monotoni og begrensethet (basissteg + induksjonstrinn, begge eksplisitt); (3) konkludér konvergens via **teoremet om monoton, begrenset følge** (kap. 1.2) — *navngi det*; (4) finn grensen $L$ ved å la $n\to\infty$ i rekursjonen, med begrunnelsen $\lim f(a_n) = f(\lim a_n)$ ($f$ kontinuerlig), og løs likningen $L = f(L)$ (velg riktig rot mot skranken). **Gjennomregnet eksamenscase** med sensor-margnotater om at eksistens er eget steg og at feil rot forkastes mot skranken. 10–14 oppgaver på eksamensnivå (varierte $f$: $\sqrt{a_n + c}$, $\tfrac12(a_n + c/a_n)$, brøkrekursjoner + minst 3 anvendte modeller).
- **Oppgavesjangre:** D. Mønstereksempel: «La $a_0 = 5$, $a_{n+1} = \sqrt{a_n + 6}$. Vis at følgen er strengt avtagende og nedad begrenset, og finn grensen.» ($L^2 = L+6 \Rightarrow L=3$.) Mønstereksempel (anvendt): «En innsjø får årlig tilført en brøkdel av forrige års forurensning pluss et fast utslipp — sett opp rekursjonen, vis konvergens og finn likevektsnivået.»
- **Typiske feil:** **Grensen regnet før konvergens er vist** (kjernefeilen — H2011: «hvis ikke, gir det ikke mening å snakke om grensen»); induksjonstrinnet hoppet over; feil rot av $L=f(L)$ beholdt (mot skranken); monotoni påstått uten induksjon; glemme å navngi teoremet.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Uendelige rekker og konvergenstester *(prioritet: PERFEKT — emnets tyngste ryggrad, ~95–100 %)*

#### Kapittel 2.1: Rekker, delsummer og de nødvendige testene

- **id:** `mat112-uib-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-1-1`
- **kapitteltype:** teori
- **description:** Rekke som følge av delsummer, den geometriske grunnrekken, n-teleddstesten som nødvendig divergenskriterium, og p-rekkene — startrepertoaret hver konvergensoppgave hviler på.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Rekker og summasjon](/bok/r2/r2-1-4), [Uendelige rekker og konvergens](/bok/r2/r2-1-5), [Geometriske rekker](/bok/s2/s2-7-2), [Uendelige rekker og konvergens](/bok/s2/s2-7-3).
- **Eksamensbelegg:** Sjanger A — rekkekonvergens ~95–100 %, emnets tyngste ryggrad. Dette kapitlet legger grunnmuren (geometrisk rekke, $n$-teledd, $p$-rekker) som de andre testene sammenligner mot. Lukket bok: $\sum ar^n = a/(1-r)$ og $p$-rekkenes konvergensgrense må memoreres. Prioritet: **perfekt**.
- **Innholdskontrakt:** Rekke $\sum_{n=1}^\infty a_n$ som grense av **delsummene** $s_N = \sum_{n=1}^N a_n$; konvergens/divergens; **geometrisk rekke** $\sum_{n=0}^\infty ar^n = \frac{a}{1-r}$ for $|r|<1$ (divergerer ellers) — memorert, med teleskop-/delsumbevis; **$n$-teleddstesten** (Divergence Test): $a_n \not\to 0 \Rightarrow$ divergens (og at $a_n\to 0$ *ikke* er tilstrekkelig — harmonisk rekke); **$p$-rekker** $\sum 1/n^p$: konvergerer $\Leftrightarrow p>1$ (memorert, bevises via integraltest i kap. 2.2); harmonisk rekke $\sum 1/n$ som grensetilfelle; teleskoprekker (delbrøk → delsum kollapser); linearitet (sum/differens/konstantmultippel av konvergente rekker). Engelske navn i parentes (Geometric Series, Divergence/nth-term Test, p-series).
- **Oppgavesjangre:** A. Mønstereksempel: «Finn summen av $\sum_{n=1}^\infty \frac{3}{4^n}$ og avgjør om $\sum \frac{n}{n+1}$ konvergerer.» Mønstereksempel (teleskop): «Vis at $\sum_{n=1}^\infty \frac{1}{n(n+1)}$ konvergerer og finn summen.»
- **Typiske feil:** Tro at $a_n\to 0$ medfører konvergens (harmonisk moteksempel); feil $r$-område for geometrisk konvergens; feil $p$-grense; glemme å sjekke $|r|<1$ før $a/(1-r)$ brukes; indeksfeil i delsum.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.2: Sammenligning, grensesammenligning og integraltest

- **id:** `mat112-uib-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-2-1`
- **kapitteltype:** teori
- **description:** De tre testene for rekker med positive ledd: direkte sammenligning, grensesammenligning mot p-rekke/geometrisk, og integraltesten — med formsjekk-disiplinen som avgjør hvilken som passer.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Analysens fundamentalsetning](/bok/r2/r2-2-5), [Bestemt integral som grenseverdi](/bok/r2/r2-2-4). Fra MAT111: uegentlige integraler og sammenligningskriteriet, $p$-integraler (MAT111 kap. 5.5 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger A (positive ledd). Integraltesten brukes for ledd som $1/((n+1)\ln(n+1))$; grensesammenligning mot $p$-rekke/harmonisk er standard for rasjonale ledd. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sammenligningstesten** (Comparison Test): $0\le a_n\le b_n$, $\sum b_n$ konvergerer $\Rightarrow \sum a_n$ konvergerer (og divergens-varianten); **grensesammenligningstesten** (Limit Comparison Test): $\lim a_n/b_n = c\in(0,\infty) \Rightarrow$ samme oppførsel — velg $b_n$ etter «dominerende ledd» (memorert håndverk: rasjonale ledd → $p$-rekke med $p = $ nevnergrad $-$ tellergrad); **integraltesten** (Integral Test): $f$ positiv, avtagende, kontinuerlig med $f(n)=a_n$ ⇒ $\sum a_n$ og $\int_1^\infty f$ har samme status (parallellen til uegentlige integraler; brukes til å bevise $p$-rekke-grensen); formsjekk-disiplin: sjekk positivitet + avtagende *før* integraltest. Notasjon: $\sim$ for asymptotisk likhet, navngitt sammenligningsrekke alltid oppgitt.
- **Oppgavesjangre:** A. Mønstereksempel: «Avgjør om $\sum_{n=1}^\infty \frac{2n+1}{n^3+5}$ konvergerer (grensesammenligning mot $\sum 1/n^2$).» Mønstereksempel: «Avgjør om $\sum_{n=2}^\infty \frac{1}{n\ln n}$ konvergerer (integraltest).»
- **Typiske feil:** Integraltesten uten å sjekke positiv + avtagende; feil sammenligningsrekke (galt dominerende ledd); grensesammenligning konkludert når grensen er $0$ eller $\infty$ uten tilleggsargument; sammenligning i «feil retning» (majorant der man trenger minorant).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 2.3: Forholdstest, rottest og absolutt konvergens

- **id:** `mat112-uib-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-2-2`
- **kapitteltype:** teori
- **description:** Forholds- og rottesten for fakultet-/eksponentielle ledd, og begrepet absolutt konvergens — testene som også bærer potensrekkenes konvergensradius (Del 3).
- **Forkunnskaper (kryssbok):** Kap. 2.2. Fra MAT111: fakultet og eksponentialfunksjonens vekst (MAT111-repetisjon; ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger A. Forholdstesten er standard for fakultet/eksponentielle ledd og er verktøyet for konvergensradius i kap. 3.1. Skillet **absolutt vs. betinget** konvergens spørres eksplisitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Forholdstesten** (Ratio Test, $\S$9.3 Teorem 11): $\rho = \lim |a_{n+1}/a_n|$ — $\rho<1$ konvergerer (absolutt), $\rho>1$ divergerer, $\rho=1$ **uavgjort** (bruk annen test); **rottesten** (Root Test): $\lim |a_n|^{1/n}$, samme konklusjon; når hver passer (fakultet/potens → forhold; $n$-te potenser → rot); **absolutt konvergens** ($\sum|a_n|$ konvergerer) $\Rightarrow$ konvergens; **betinget konvergens** (konvergerer, men ikke absolutt); at forholds-/rottesten faktisk tester *absolutt* konvergens. Notasjon: $\rho$ for grenseforholdet; $\sum|a_n|$-skrivemåte for absoluttrekken.
- **Oppgavesjangre:** A. Mønstereksempel: «Avgjør om $\sum_{n=1}^\infty \frac{n!}{n^n}$ konvergerer (forholdstest).» Mønstereksempel: «Avgjør om $\sum \frac{(-2)^n}{n^2}$ konvergerer absolutt, betinget eller ikke.»
- **Typiske feil:** Konkludere ved $\rho = 1$ (uavgjort — må bytte test); forholdstest der leddene ikke er fakultet/eksponentielle (unødig tungt); blande absolutt og betinget; regnefeil i $|a_{n+1}/a_n|$-forenklingen.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 2.4: Alternerende rekker, betinget konvergens og monotonisjekk-fellen

- **id:** `mat112-uib-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-2-3`
- **kapitteltype:** teori
- **description:** Leibniz' test for alternerende rekker med alle tre betingelsene, restleddsskranken, og den dokumenterte fellen der monotonikravet svikter — der betinget konvergens avgjøres.
- **Forkunnskaper (kryssbok):** Kap. 2.3.
- **Eksamensbelegg:** Sjanger A. **Åpen felle (V2011, H2007):** alternerende test brukt uten å sjekke at $|a_n|$ er avtagende — når leddene veksler mellom to størrelsesordener (f.eks. $1/(3+(-1)^n n)$) er monotonikravet brutt og rekken kan divergere selv om leddene veksler fortegn og går mot $0$. Fasit lager en «eksamensfest»-fortelling rundt fellen. Restleddsskranken (feil $<$ første utelatte ledd) brukes i tallnærming (kap. 3.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Alternerende rekkers test** (Leibniz / Alternating Series Test): $\sum (-1)^n b_n$ med $b_n>0$ konvergerer hvis **alle tre**: (i) leddene alternerer, (ii) $b_n\to 0$, (iii) $b_n$ **avtagende** ($b_{n+1}\le b_n$) — alle tre uttales og verifiseres; **restleddsskranken**: $|s - s_N| \le b_{N+1}$ (feilen er mindre enn første utelatte ledd) — brukes til nøyaktighet; **absolutt vs. betinget** avgjort ved å teste $\sum |a_n|$ separat (typisk: alternerende harmonisk $\sum(-1)^{n-1}/n$ konvergerer betinget); **monotonisjekk-fellen**: eksplisitt gjennomgått moteksempel der (i) og (ii) holder men (iii) svikter. Notasjon: $b_n = |a_n|$ for absoluttleddene.
- **Oppgavesjangre:** A. Mønstereksempel: «Avgjør om $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{\sqrt n}$ konvergerer, og om konvergensen er absolutt eller betinget.» Mønstereksempel (fellen): «Undersøk $\sum_{n=2}^\infty \frac{(-1)^{n-1}}{3+(-1)^n n}$ — sjekk om monotonikravet er oppfylt.»
- **Typiske feil:** **Alternerende test uten monotonisjekk** (de tre betingelsene reduseres til to — emnets mest dokumenterte felle); konkludere «konvergent» fra fortegnsveksling + $b_n\to 0$ alene; blande absolutt og betinget; feil restleddsskranke.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.5: Drill: velg og navngi test — rekkekonvergens som eksamenssjanger

- **id:** `mat112-uib-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `mat112-uib-2-4`
- **kapitteltype:** drill
- **description:** Hele testrepertoaret samlet i ett beslutningstre: gjenkjenn formen, velg riktig test, navngi den, og avgjør absolutt vs. betinget — ferdigheten som bærer ~95–100 % av settene.
- **Eksamensbelegg:** Sjanger A (~95–100 %), typisk 1–2 deloppgaver per sett, ofte flere rekker i samme oppgave. Lukket bok: å *velge riktig test og navngi den* er selve ferdigheten. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningstre for testvalg** (memorert): (1) $a_n\not\to 0$? → $n$-teleddstest (divergens); (2) geometrisk/$p$-rekke? → kjent status; (3) fakultet/eksponentielt ledd? → forholdstest; (4) $n$-te potens? → rottest; (5) positive rasjonale/logaritmeledd? → grensesammenligning eller integraltest; (6) alternerende? → Leibniz (alle tre betingelser) + absolutt/betinget via $\sum|a_n|$. **Gjennomregnet eksamensblokk** (én oppgave med 3–4 rekker som treffer ulike grener) med sensor-margnotat om at hvert svar må navngi testen og at monotoni/betingelser må uttales. 12–16 rekker på eksamensnivå med full begrunnelse, inkludert minst to felle-varianter (monotoni-svikt, $\rho=1$-uavgjort som må byttes test).
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «Avgjør konvergens (og absolutt/betinget der relevant) for: (a) $\sum \frac{n^2}{e^n}$, (b) $\sum \frac{1}{n\ln^2 n}$, (c) $\sum \frac{(-1)^n n}{n+1}$, (d) $\sum \frac{(2n)!}{(n!)^2 4^n}$ — navngi hver test.»
- **Typiske feil:** Alle fellene fra 2.1–2.4 i blandet form; ikke navngi testen (lukket bok-trekk); konkludere ved $\rho=1$; monotoni ikke sjekket i alternerende; feil dominerende ledd i sammenligning.
- **Quiz: 22 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

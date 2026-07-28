# Bokskjelett: MAT112 Grunnkurs i matematikk II (UiB) — eksamensrettet lærebok

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
- **Forkunnskaper (kryssbok):** [Følger og tallmønstre](/r2/r2-1-1), [Aritmetiske følger](/r2/r2-1-2), [Geometriske følger](/r2/r2-1-3), [Grenseverdi](/r1/r1-3-1). Fra MAT111: grenseregning og l'Hôpital (MAT111 kap. 2.2 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Fundament for sjanger D (følger ~60 %) og for hele Del 2 (rekker som følger av delsummer). Følgegrenser og monotoni-/begrensethetsanalyse er innøvings-stoffet den rekursive signaturoppgaven bygger på. Prioritet: **kunne** (fundament: perfekt).
- **Innholdskontrakt:** Følge $\{a_n\}$; konvergens $\lim_{n\to\infty} a_n = L$ (intuitivt + $\varepsilon$-$N$-definisjonen, den siste til bruk i toppsjikt-varianten); regneregler for følgegrenser; **monoton følge** (voksende/avtagende, strengt vs. svakt) og **begrenset følge** (oppad/nedad); standard grensegrep: l'Hôpital på den kontinuerlige utvidelsen, veksthierarki $\ln n \ll n^p \ll a^n \ll n!$, skvis for følger; kontinuitet gir $\lim f(a_n) = f(\lim a_n)$ når $f$ er kontinuerlig (brukes til å finne grensen i rekursjon, kap. 1.3). Notasjon: $\{a_n\}_{n\ge 0}$, indeksstart markeres.
- **Oppgavesjangre:** D (fundament). Mønstereksempel: «Avgjør om $a_n = \frac{n^2}{2^n}$ konvergerer, og finn grensen.» Mønstereksempel: «Vis at $a_n = \left(1+\tfrac1n\right)^n$ er voksende og oppad begrenset.»
- **Typiske feil:** Bruke veksthierarkiet feil (fakultet vs. eksponentiell); regne grensen som om følgen var kontinuerlig uten begrunnelse; blande «begrenset» og «konvergent» (begrenset alene garanterer ikke konvergens); glemme å begrunne monotoni før man påberoper den.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Kompletthet og teoremet om monoton, begrenset følge

- **id:** `mat112-uib-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-1-1`
- **kapitteltype:** teori
- **description:** Kompletthetsaksiomet for R og beviset for at en monoton, begrenset følge konvergerer — App. III-teorien som bærer eksistensargumentet i rekursive følger og lukker Knutsen-settene.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Induksjonsbevis](/r2/r2-1-6), [Induksjon](/r1/r1-9-2). Fra MAT111: kontinuitet og ekstremalverdisetningen i én variabel, deriverbar ⇒ kontinuerlig (MAT111 kap. 2.3, 3.1 — bygges, ikke lenkbar ennå).
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
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Rekker og summasjon](/r2/r2-1-4), [Uendelige rekker og konvergens](/r2/r2-1-5), [Geometriske rekker](/s2/s2-7-2), [Uendelige rekker og konvergens](/s2/s2-7-3).
- **Eksamensbelegg:** Sjanger A — rekkekonvergens ~95–100 %, emnets tyngste ryggrad. Dette kapitlet legger grunnmuren (geometrisk rekke, $n$-teledd, $p$-rekker) som de andre testene sammenligner mot. Lukket bok: $\sum ar^n = a/(1-r)$ og $p$-rekkenes konvergensgrense må memoreres. Prioritet: **perfekt**.
- **Innholdskontrakt:** Rekke $\sum_{n=1}^\infty a_n$ som grense av **delsummene** $s_N = \sum_{n=1}^N a_n$; konvergens/divergens; **geometrisk rekke** $\sum_{n=0}^\infty ar^n = \frac{a}{1-r}$ for $|r|<1$ (divergerer ellers) — memorert, med teleskop-/delsumbevis; **$n$-teleddstesten** (Divergence Test): $a_n \not\to 0 \Rightarrow$ divergens (og at $a_n\to 0$ *ikke* er tilstrekkelig — harmonisk rekke); **$p$-rekker** $\sum 1/n^p$: konvergerer $\Leftrightarrow p>1$ (memorert, bevises via integraltest i kap. 2.2); harmonisk rekke $\sum 1/n$ som grensetilfelle; teleskoprekker (delbrøk → delsum kollapser); linearitet (sum/differens/konstantmultippel av konvergente rekker). Engelske navn i parentes (Geometric Series, Divergence/nth-term Test, p-series).
- **Oppgavesjangre:** A. Mønstereksempel: «Finn summen av $\sum_{n=1}^\infty \frac{3}{4^n}$ og avgjør om $\sum \frac{n}{n+1}$ konvergerer.» Mønstereksempel (teleskop): «Vis at $\sum_{n=1}^\infty \frac{1}{n(n+1)}$ konvergerer og finn summen.»
- **Typiske feil:** Tro at $a_n\to 0$ medfører konvergens (harmonisk moteksempel); feil $r$-område for geometrisk konvergens; feil $p$-grense; glemme å sjekke $|r|<1$ før $a/(1-r)$ brukes; indeksfeil i delsum.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.2: Sammenligning, grensesammenligning og integraltest

- **id:** `mat112-uib-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-2-1`
- **kapitteltype:** teori
- **description:** De tre testene for rekker med positive ledd: direkte sammenligning, grensesammenligning mot p-rekke/geometrisk, og integraltesten — med formsjekk-disiplinen som avgjør hvilken som passer.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Analysens fundamentalsetning](/r2/r2-2-5), [Bestemt integral som grenseverdi](/r2/r2-2-4). Fra MAT111: uegentlige integraler og sammenligningskriteriet, $p$-integraler (MAT111 kap. 5.5 — bygges, ikke lenkbar ennå).
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

### Del 3 — Potensrekker og Taylor-rekker *(prioritet: PERFEKT — potensrekker ~95 %)*

#### Kapittel 3.1: Potensrekker: konvergensradius og konvergensintervall med endepunkter

- **id:** `mat112-uib-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-2-3`
- **kapitteltype:** teori
- **description:** Konvergensradius via forholds-/rottest og konvergensintervall der begge endepunkter undersøkes separat — den ene halvparten av potensrekke-sjangeren, med den mest dokumenterte fellen (glemte endepunkter).
- **Forkunnskaper (kryssbok):** Kap. 2.3–2.4; [Potensrekker og Taylor-rekker](/s2/s2-7-4).
- **Eksamensbelegg:** Sjanger B — potensrekker ~95 %, nesten alltid 1–2 deloppgaver. Konvergensintervall **med separat endepunktssjekk** er standard. **Felle (analysen §5.2):** intervallet leveres som det åpne intervallet uten å undersøke $x=\pm R$ der forholdstesten er taus. Prioritet: **perfekt**.
- **Innholdskontrakt:** Potensrekke $\sum a_n (x-c)^n$; **konvergensradius** $R$ via forholdstest ($R = \lim |a_n/a_{n+1}|$) eller rottest; Teorem 17 i $\S$9.5 (rekken konvergerer absolutt på $(c-R, c+R)$, divergerer utenfor, uavgjort i endepunktene); **endepunktsanalyse**: sett inn $x = c\pm R$ og bruk en *annen* test (ofte alternerende eller $p$-rekke) på hvert endepunkt separat; skriv **konvergensintervallet** med korrekt endepunktsstatus (åpen/halvåpen/lukket); $R=0$ og $R=\infty$ som grensetilfeller. Notasjon: $R$ for radius, intervall skrevet ut med $[\,]/(\,)$.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn konvergensintervallet til $\sum_{n=1}^\infty \frac{(x-2)^n}{n\,3^n}$ (endepunktene undersøkes hver for seg).» Mønstereksempel: «For hvilke $x$ konvergerer $\sum \frac{x^n}{n^2}$? Er endepunktene med?»
- **Typiske feil:** **Endepunktene glemt** (intervallet levert åpent); feil test i endepunktet; blande konvergensradius og -intervall; regnefeil i $\lim|a_n/a_{n+1}|$; glemme absoluttverdien.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.2: Lukket sum: ledvis derivasjon, integrasjon og Abels teorem

- **id:** `mat112-uib-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-3-1`
- **kapitteltype:** teori
- **description:** Å finne et lukket uttrykk for summen ved å manipulere mot den geometriske grunnrekken — ledvis derivasjon/integrasjon, indeksskift — og Abels teorem for kontinuerlig utvidelse til endepunktene.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 2.1 (geometrisk rekke); [Variabelskifte (substitusjon)](/r2/r2-3-1). Fra MAT111: ledvis integrasjon forutsetter integrasjonsteknikk (MAT111 kap. 5.2 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger B (sum-delen). Standardgrepet: manipulér mot $\sum x^n = 1/(1-x)$ via ledvis derivasjon (Teorem 19 i $\S$9.5), ledvis integrasjon, indeksskift og splitting. **Abels teorem** brukes til å utvide summen kontinuerlig til et konvergent endepunkt (f.eks. $\ln 2$ fra $\ln(1+x)$-rekken i $x=1$). Prioritet: **perfekt**.
- **Innholdskontrakt:** Geometrisk grunnrekke $\sum_{n=0}^\infty x^n = \frac{1}{1-x}$, $|x|<1$; **ledvis derivasjon og integrasjon** (Teorem 19, $\S$9.5): en potensrekke kan deriveres/integreres ledd for ledd innenfor konvergensintervallet, med bevart radius; **teknikk-katalog for lukket sum**: (i) derivér/integrer den geometriske rekken for å få $\sum n x^{n-1}$, $\sum x^n/n$ osv.; (ii) **indeksskift** for å justere startindeks og potens; (iii) splitt/kombiner rekker; (iv) faktoriser ut $x$-potenser; **Abels teorem** (Abel's Theorem): hvis potensrekken konvergerer i et endepunkt, er summen kontinuerlig dit — brukes til å evaluere summen i endepunktet som grense. Notasjon: manipulasjonene føres eksplisitt ledd for ledd; «Alternativt:»-vei via delbrøk der den finnes.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn konvergensintervallet til $\sum_{n=0}^\infty (n+3)x^n$ og et enkelt uttrykk for summen.» (Derivér $\sum x^{n+3}$ → $(3-2x)/(1-x)^2$.) Mønstereksempel (Abel): «Vis at $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = \ln 2$ ved å bruke $\ln(1+x)$-rekken og Abels teorem.»
- **Typiske feil:** Ledvis derivasjon/integrasjon utenfor konvergensintervallet; glemme integrasjonskonstanten (bestem via ett kjent punkt); indeksskift-feil (potens og startindeks ikke justert samtidig); bruke endepunktsverdien uten Abels teorem.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.3: Taylor- og Maclaurin-rekker, standardrekker og tallnærming med feilskranke

- **id:** `mat112-uib-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-3-2`
- **kapitteltype:** teori
- **description:** De memorerte standard-Maclaurin-rekkene, substitusjon i dem for nye rekker, og tallnærming av integraler/funksjonsverdier med feilskranke via alternerende-restleddet — lukket bok-kjernen.
- **Forkunnskaper (kryssbok):** Kap. 3.2, 2.4 (alternerende restledd). Fra MAT111: Taylorpolynom med Lagrange-restledd — samme apparat, videreført til rekke (MAT111 kap. 4.3 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger C — Taylor/Maclaurin ~50 %, men koblet til B er «potensrekke-stoff» nesten universelt. Standardoppgave: skriv Maclaurin-rekken (binomialrekke $\sqrt{1-x^2}$, $1/(1-x^4)$, $\tan^{-1}x$, $e^x$, Bessel-funksjon) ved **substitusjon i en kjent rekke**, tilnærm et integral/en verdi, og **skranker feilen**. **Lukket bok: kjerne-Maclaurinrekkene MÅ kunnes** (evt. fra vedlegg). Prioritet: **kunne** (standardrekkene: perfekt-pugg).
- **Innholdskontrakt:** Taylor-rekke $\sum \frac{f^{(n)}(c)}{n!}(x-c)^n$; Maclaurin-rekke ($c=0$); **de memorerte standardrekkene** (flashcard-gull): $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $\tan^{-1}x$, $\frac{1}{1-x}$, **binomialrekken** $(1+x)^\alpha$; **substitusjonsteknikk**: sett $x\to -x^2$, $x^5$ osv. i en kjent rekke for å få en ny (med bevart/justert radius); **tallnærming**: integrer en Maclaurin-rekke ledvis for $\int_0^a f$, eller sett inn en verdi; **feilskranke**: for alternerende rekke er feilen $<$ første utelatte ledd (fra kap. 2.4) — tell ledd til ønsket desimalnøyaktighet; Lagrange-restleddet som alternativ skranke (kobling til MAT111). Notasjon: eksplisitt hvilken standardrekke som gjenbrukes.
- **Oppgavesjangre:** C. Mønstereksempel: «Beregn $\int_0^{0.5} e^{-t^2}\,dt$ med tre korrekte desimaler ved å integrere Maclaurin-rekken ledvis, og begrunn feilskranken.» Mønstereksempel: «Finn Maclaurin-rekken til $\frac{1}{\sqrt{1+x^2}}$ (binomialrekke, substitusjon) og de tre første leddene.»
- **Typiske feil:** Feil binomialkoeffisient/fortegn i binomialrekken; substituere feil (glemme å justere radius); feilskranke sitert men ikke brukt til å bestemme antall ledd; blande Taylor-*polynom* (endelig, restledd) og Taylor-*rekke* (uendelig, konvergens); glemme å begrunne at rekken konvergerer mot $f$.
- **Quiz: 18 · Flashcards: 30**

#### Kapittel 3.4: Drill: potensrekker fra ende til annen

- **id:** `mat112-uib-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat112-uib-3-3`
- **kapitteltype:** drill
- **description:** Den komplette potensrekke-oppgaven: konvergensintervall med endepunkter, lukket sum via ledvis manipulasjon, og tallnærming med feilskranke — kjedet slik reelle deloppgaver kjeder dem.
- **Eksamensbelegg:** Sjanger B (+C) — ~95 %. Deloppgave (a) finner intervallet, (b) summen, (c) bruker rekken til nærming — kjedene i settdesignet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) konvergensradius (forhold/rot) → (2) endepunkter separat → (3) lukket sum (manipulér mot geometrisk, ledvis der/int, indeksskift, Abel i endepunkt) → (4) evt. tallnærming med feilskranke. **Gjennomregnet eksamens-potensrekke** (sammensatt a–d) med sensor-margnotater om endepunktsdisiplinen og om at flere veier til summen honoreres. 12–15 oppgaver på eksamensnivå, alle med full føring og «Alternativt:»-vei der den finnes.
- **Oppgavesjangre:** B + C. Mønstereksempel: «(a) Finn konvergensintervallet til $\sum_{n=1}^\infty \frac{x^n}{n}$. (b) Finn summen som lukket uttrykk. (c) Bruk resultatet til å finne $\sum \frac{1}{n\,2^n}$.»
- **Typiske feil:** Endepunkter glemt; ledvis manipulasjon uten radius-kontroll; feil rot/rekke gjenbrukt; endepunktssum uten Abel; tallnærming uten feilskranke.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Flervariabel differensialregning *(prioritet: PERFEKT — gradient/retningsderivert ~90 %)*

#### Kapittel 4.1: Vektorer, linjer og plan i R³

- **id:** `mat112-uib-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Prikk- og kryssprodukt, plan- og linjelikninger og skjæringslinjer i rommet — verktøykassen tangentplan- og optimeringsoppgavene bygger på, mest innbakt heller enn frittstående.
- **Forkunnskaper (kryssbok):** [Vektorer i tre dimensjoner](/r2/r2-5-1), [Skalarproduktet](/r2/r2-5-3), [Kryssproduktet](/r2/r2-5-4), [Ligninger for plan](/r2/r2-5-6), [Linjer i rommet](/r2/r2-5-7), [Areal og volum med vektorer](/r2/r2-5-5).
- **Eksamensbelegg:** Sjanger O — vektorgeometri i R³ ~35 %, oftere innbakt i tangentplan-/optimeringsoppgaver (normalvektor = gradient) enn frittstående. «Finn skjæringslinjen mellom to plan» (kryssprodukt av normalvektorene) er standardtillegg. Prioritet: **kjenne** (som byggekloss: kunne).
- **Innholdskontrakt:** Prikkprodukt $\mathbf u\cdot\mathbf v$ (vinkel, projeksjon) og **kryssprodukt** $\mathbf u\times\mathbf v$ (normalvektor, areal; regneregler + geometrisk tolkning, evt. bevis for distributivitet $\mathbf u\times(\mathbf v+\mathbf w)=\mathbf u\times\mathbf v+\mathbf u\times\mathbf w$ via komponenter); **plan** $\mathbf n\cdot(\mathbf r - \mathbf r_0)=0$ / $ax+by+cz=d$; **linje** på parameterform $\mathbf r = \mathbf r_0 + t\mathbf v$; **skjæringslinje mellom to plan** (retningsvektor $= \mathbf n_1\times\mathbf n_2$, ett punkt fra likningssystemet); avstand punkt–plan. Notasjon: $\mathbf i,\mathbf j,\mathbf k$-basis, fet skrift for vektorer.
- **Oppgavesjangre:** O. Mønstereksempel: «Finn en likning for planet gjennom $(1,0,2)$ med normalvektor $(2,-1,3)$, og skjæringslinjen med planet $x+y+z=1$.»
- **Typiske feil:** Bytte om prikk- og kryssprodukt; feil fortegn i kryssproduktets komponenter; normalvektor forvekslet med retningsvektor; glemme å finne et punkt på skjæringslinjen (bare retning).
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 4.2: Grenser og kontinuitet i flere variable: polar, skvis og sti-argument

- **id:** `mat112-uib-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-1-1`
- **kapitteltype:** teori
- **description:** Grense av en flervariabel funksjon i et punkt — konvergens via polare koordinater eller skvis, og divergens via to stier med ulike grenser — den ene av de tre analyse-signaturene.
- **Forkunnskaper (kryssbok):** [Grenseverdi](/r1/r1-3-1), [Kontinuitet](/r1/r1-3-2). Fra MAT111: $\varepsilon$-$\delta$-grensebevis og skvis i én variabel (MAT111 kap. 2.1 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger J (kontinuitetsdelen) — kontinuitet/deriverbarhet i punkt ~40 %; en av signaturoppgavene som lukker Knutsen-settene. **Felle (analysen §5.7):** kontinuitet «vist» langs én sti — likhet av grensen langs én linje beviser ikke eksistens. Prioritet: **kunne** (signatur: perfekt-presisjon).
- **Innholdskontrakt:** Grense $\lim_{(x,y)\to(0,0)} f(x,y)$; **kontinuitet i punkt**: $\lim = f(0,0)$; **for konvergens** (grensen finnes): **polare koordinater** ($x=r\cos\theta$, $y=r\sin\theta$, la $r\to0$ og vis uavhengighet av $\theta$ — skranke uavhengig av $\theta$), **skviseteoremet** i flere variable, eller $\varepsilon$-$\delta$; **for divergens**: finn **to stier** (typisk $y=x$ og aksene, eller $y=kx^2$) som gir ulike grenser; sammenhengen at grense langs alle rette linjer ikke er nok (parabel-moteksempel). Notasjon: $r,\theta$ eksplisitt; sti angitt som $y=g(x)$.
- **Oppgavesjangre:** J (kontinuitetsdel). Mønstereksempel: «Er $f(x,y)=\frac{xy}{x^2+y^2}$ (med $f(0,0)=0$) kontinuerlig i origo? Undersøk langs $y=x$ og $y=0$.» Mønstereksempel: «Vis at $\lim_{(x,y)\to(0,0)}\frac{x^2 y}{x^2+y^2} = 0$ via polare koordinater.»
- **Typiske feil:** **Kontinuitet «vist» langs én sti**; divergens påstått uten to konkrete stier med ulike grenser; polart argument der $\theta$-avhengigheten ikke elimineres; blande grensen og funksjonsverdien.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Partielle deriverte og deriverbarhet

- **id:** `mat112-uib-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-4-2`
- **kapitteltype:** teori
- **description:** Partielle deriverte, det avgjørende skillet mellom eksistens av partielle deriverte og deriverbarhet, og kjerneregelen i flere variable — der toppkarakterene skilles i punkt-oppgaven.
- **Forkunnskaper (kryssbok):** Kap. 4.2; [Kjerneregelen](/r1/r1-4-3), [Derivasjonens definisjon](/r1/r1-3-3). Fra MAT111: deriverbar ⇒ kontinuerlig (MAT111 kap. 3.1 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger J (deriverbarhetsdelen). **Kjernefelle (analysen §5.8):** eksistens av partielle deriverte forvekslet med deriverbarhet — $\sqrt{|xy|}$ har partielle deriverte i origo men er ikke deriverbar (vis via $y=x$). Kjerneregel i flere variable ~20 %, ofte innbakt. Prioritet: **kunne** (skillet: perfekt).
- **Innholdskontrakt:** **Partielle deriverte** $f_1 = \partial f/\partial x$, $f_2 = \partial f/\partial y$ (indeksnotasjon); partielle deriverte i et punkt fra definisjonen (grense) når $f$ er stykkevis definert; **deriverbarhet** ($\S$12.3): $f$ deriverbar i $(a,b)$ hvis den har en lineær tilnærming med restledd $o(\|\Delta\|)$; **kontinuerlige partielle deriverte ⇒ deriverbar** (Teorem 4, $\S$12.6) og **deriverbar ⇒ kontinuerlig** (så diskontinuitet ⇒ ikke deriverbar); **eksistens av partielle deriverte er IKKE nok for deriverbarhet** — $\sqrt{|xy|}$-familien (partielle deriverte finnes i origo, men ikke deriverbar, vis via $y=x$); **kjerneregelen i flere variable** ($\S$12.5): $\frac{d}{dt}f(x(t),y(t)) = f_1 x' + f_2 y'$, tregraf-oppsett. Notasjon: $f_1,f_2$ (indeks), $\nabla f$ introduseres.
- **Oppgavesjangre:** J (deriverbarhetsdel). Mønstereksempel: «For $f(x,y)=\frac{x^2+y^2+x^3}{x^2+y^2}$ ($f(0,0)=1$): finn de partielle deriverte i origo og avgjør om $f$ er deriverbar der.» Mønstereksempel: «Vis at $f(x,y)=\sqrt{|xy|}$ har $f_1(0,0)=f_2(0,0)=0$, men ikke er deriverbar i origo.»
- **Typiske feil:** **Partielle deriverte forvekslet med deriverbarhet**; deriverbarhet «vist» ved bare å regne $f_1,f_2$; glemme kjerneregel-leddene; regne $f_1(0,0)$ med formelen i stedet for definisjonen når $f$ er stykkevis.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.4: Gradient og retningsderivert

- **id:** `mat112-uib-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-4-3`
- **kapitteltype:** teori
- **description:** Gradienten, retningsderiverten med normalisert retning, og retningen for raskest vekst — settets hyppigste åpningsoppgave, med den mest dokumenterte slurvefeilen (glemt normalisering).
- **Forkunnskaper (kryssbok):** Kap. 4.3.
- **Eksamensbelegg:** Sjanger E (gradient-delen) — gradient/retningsderivert ~90 %, ofte åpningsoppgaven. **Felle (analysen §5.3):** retningsvektor ikke normalisert — $D_{\mathbf u}f$ regnes som $\hat{\mathbf u}\cdot\nabla f$ uten å dele på $|\mathbf u|$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Gradient** $\nabla f = f_1\,\mathbf i + f_2\,\mathbf j$ (i R² og R³); **retningsderivert** $D_{\mathbf u}f = \hat{\mathbf u}\cdot\nabla f$ der $\hat{\mathbf u} = \mathbf u/|\mathbf u|$ — **normaliser alltid**; **retning for raskest vekst** er $\nabla f$, med veksttakt $|\nabla f|$ (og raskest avtaking $-\nabla f$); retningsderivert null $\perp \nabla f$; geometrisk tolkning. Notasjon: $\nabla f$, $\hat{\mathbf u}$ (hatt for enhetsvektor), $D_{\mathbf u}f$.
- **Oppgavesjangre:** E. Mønstereksempel: «La $f(x,y,z)=e^{2x}\sin(\pi yz)$. Finn retningsderiverten i $(0,1,1)$ i retning $(1,1,0)$.» Mønstereksempel: «I hvilken retning vokser $f(x,y)=x^2-y^2$ raskest i $(1,2)$, og hvor stor er den maksimale veksttakten?»
- **Typiske feil:** **Retningsvektor ikke normalisert** (den dokumenterte slurvefeilen); glemme at raskest vekst er $\nabla f$ selv (ikke $|\nabla f|$-retningen forvekslet); regnefeil i partielle deriverte; fortegnsfeil ved raskest avtaking.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.5: Tangentplan og nivåflater

- **id:** `mat112-uib-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-4-4`, `mat112-uib-4-1`
- **kapitteltype:** teori
- **description:** Tangentplanet til en graf z=f(x,y) og til en nivåflate g=c via normalvektoren ∇g, og skjæringslinjen mellom tangentplan og et gitt plan — gradienten som geometrisk normalvektor.
- **Forkunnskaper (kryssbok):** Kap. 4.4, 4.1 (plan og kryssprodukt).
- **Eksamensbelegg:** Sjanger E (tangentplan-delen) — tangentplan ~60 %, ofte koblet til gradient. Teorem 12.6 ($\nabla f \perp$ nivåkurve/-flate) er det navngitte teoremet fasit siterer. Tilleggsledd: skjæringslinje mellom tangentplan og et plan (kryssprodukt av normalvektorer). Prioritet: **kunne** (som del av E-klyngen: perfekt).
- **Innholdskontrakt:** **Tangentplan til graf** $z=f(x,y)$: $z = f(a,b) + f_1(a,b)(x-a) + f_2(a,b)(y-b)$; **tangentplan til nivåflate** $g(x,y,z)=c$: normalvektor $\nabla g$, plan $\nabla g\cdot(\mathbf r - \mathbf r_0)=0$; **Teorem 12.6** ($\S$12.7): $\nabla g$ står normalt på nivåflaten/-kurven — grunnlaget for begge; normallinje til flaten; **skjæringslinje** mellom tangentplanet og et gitt plan (retning $=\nabla g\times\mathbf n$); nivåkurver/-flater: identifiser type (ofte kjeglesnitt-nivåkurver), skissér. Notasjon: $\nabla g$ som normalvektor, tangentplan-formelen med $f_1,f_2$.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn tangentplanet til flaten $x^2+2y^2+3z^2=6$ i punktet $(1,1,1)$.» Mønstereksempel: «Finn tangentplanet til $z=x^2-y^2$ i $(2,1)$ og skjæringslinjen med planet $z=0$.»
- **Typiske feil:** Bruke graf-formelen på en nivåflate (eller omvendt); feil normalvektor; glemme å sette inn punktet i $f_1,f_2$; blande nivåkurve (R²) og nivåflate (R³); glemme punktet på skjæringslinjen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.6: Drill: gradient, retningsderivert og tangentplan

- **id:** `mat112-uib-4-6` · **number:** 4.6 · **estimatedMinutes:** 85 · **prerequisites:** `mat112-uib-4-5`
- **kapitteltype:** drill
- **description:** Hele E-klyngen samlet som gjennomført åpningsoppgave: gradient, normalisert retningsderivert, tangentplan begge veier og skjæringslinje — settets vanligste startpunkt.
- **Eksamensbelegg:** Sjanger E — ~90 % (gradient), ~60 % (tangentplan), ofte åpningen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) $\nabla f$; (2) retningsderivert med **normalisert** retning; (3) raskest vekst = $\nabla f$, takt $|\nabla f|$; (4) tangentplan (velg graf- eller nivåflate-formel etter hvordan flaten er gitt); (5) skjæringslinje via kryssprodukt av normalvektorer. **Gjennomregnet eksamens-åpning** (sammensatt a–e) med sensor-margnotater om normaliseringen og om at $\nabla g$ er normalvektoren. 10–14 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** E, alle varianter. Mønstereksempel: «La $f(x,y,z)=x^2+y^2-z$. (a) Finn $\nabla f$ i $(1,1,2)$. (b) Retningsderiverten mot $(2,1,2)$. (c) Tangentplanet til nivåflaten $f=0$ der. (d) Skjæringslinjen med $z=0$.»
- **Typiske feil:** Alle fellene fra 4.4–4.5; manglende normalisering; feil planformel; glemme punktet.
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Flervariabel optimering *(prioritet: PERFEKT — global optimering på lukket område ~80 %)*

#### Kapittel 5.1: Kritiske punkter, singulære punkter og ekstremalverdisetningen

- **id:** `mat112-uib-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-4-4`
- **kapitteltype:** teori
- **description:** De tre kandidatkategoriene (kritiske, singulære, randpunkter) og ekstremalverdisetningen som garanterer at globale ekstremalverdier finnes — eksistensleddet sensor krever FØR kandidatjakt.
- **Forkunnskaper (kryssbok):** Kap. 4.4, 4.3; [Globale ekstremalpunkter](/r1/r1-4-8), [Funksjonsdrøfting](/r1/r1-4-6). Fra MAT111: ekstremalverdisetningen i én variabel (MAT111 kap. 2.3 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger F (eksistens-/oppsett-delen). **Sensorkrav (analysen §4.4, §5.4):** eksistens av ekstremalverdi må begrunnes via ekstremalverdisetningen ($f$ kontinuerlig, $D$ **lukket og begrenset** — begge uttales) FØR kandidatjakt; kandidatene finnes kun i kritiske/singulære/randpunkter (alle tre nevnes). Merk: den *generelle* andrederiverttesten (Teorem 3, $\S$13.1) er unntatt pensum — kun spesialtilfellet («Remark» etter eks. 6) er med. Prioritet: **perfekt** (eksistensdisiplinen bærer sjangeren).
- **Innholdskontrakt:** **Kritiske punkter** ($\nabla f = \mathbf 0$), **singulære punkter** (partiell derivert eksisterer ikke), **randpunkter** — de tre kandidatkategoriene (Teorem 1, $\S$13.1); **ekstremalverdisetningen** (Extreme Value Theorem, Teorem 2, $\S$13.1): en kontinuerlig funksjon på et **lukket og begrenset** område antar globale ekstremalverdier — begge betingelser uttales; **spesialtilfellet av andrederiverttesten** (kun det som er pensum) for å klassifisere et enkelt kritisk punkt der det trengs; **sensorinnsikt (V2012):** andrederiverttesten alene beviser IKKE at et lokalt minimum er globalt selv om det er eneste kritiske punkt (eksplisitt moteksempel) — globalt krever lukket/begrenset område eller vekst-mot-$\infty$-innramming. Notasjon: $\nabla f = \mathbf 0$, $D$ for området, $\partial D$ for randen.
- **Oppgavesjangre:** F (oppsett). Mønstereksempel: «Forklar hvorfor $f(x,y)=x^2+y^2-xy$ antar globale ekstremalverdier på disken $x^2+y^2\le 4$, og finn de kritiske punktene i det indre.» Mønstereksempel: «Gi et eksempel som viser at eneste kritiske punkt ikke trenger å være globalt ekstremum på et ubegrenset område.»
- **Typiske feil:** **Eksistens ikke begrunnet** (kritiske punkter funnet uten ekstremalverdisetningen); bare én av «lukket» og «begrenset» uttalt; andrederiverttesten brukt som globalt argument; singulære/randpunkter ikke nevnt som kandidater; bruke den generelle (unntatte) andrederiverttesten.
- **Quiz: 14 · Flashcards: 24**

#### Kapittel 5.2: Global optimering på lukket, begrenset område: randanalyse

- **id:** `mat112-uib-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-5-1`
- **kapitteltype:** teori
- **description:** Full randanalyse: reduser randen til en enkeltvariabel-funksjon, finn dens ekstremalverdier inkludert endepunktene, og sammenlign alle kandidatverdier — der endepunktene hyppigst glemmes.
- **Forkunnskaper (kryssbok):** Kap. 5.1; [Optimering i praksis](/r1/r1-4-9). Fra MAT111: enkeltvariabel-drøfting og optimering på lukket intervall (MAT111 kap. 3.5 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger F — global optimering på lukket område ~80 %, kjerne-optimeringssjanger. **Felle (analysen §5.5, V2012):** endepunktene glemt når randen reduseres til én variabel («mange glemte de siste»). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (1) eksistens via ekstremalverdisetningen (fra 5.1); (2) kritiske punkter i det **indre** ($\nabla f=\mathbf 0$); (3) singulære punkter; (4) **randanalyse**: parametrisér randen *eller* sett inn bibetingelsen for å redusere $f|_{\partial D}$ til en enkeltvariabel-funksjon, finn dens ekstremalverdier **inkludert endepunktene** (hjørner der randen skifter parametrisering); (5) sammenlign **alle** kandidatverdier, konkludér maks/min. **Alternativt:** Lagrange på randen (kap. 5.3). Notasjon: rand parametrisert som $\mathbf r(t)$, $t\in[t_0,t_1]$; endepunktene $t_0,t_1$ eksplisitt sjekket.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn maks og min til $f(x,y)=e^{x^2-y^3}$ over disken $x^2+y^2\le 1$. Begrunn først hvorfor ekstremalverdiene finnes.» Mønstereksempel: «Finn globale ekstremalverdier for $f(x,y)=x^2+2y^2-x$ på trekanten med hjørner $(0,0),(2,0),(0,2)$ (husk hjørnene).»
- **Typiske feil:** **Randens endepunkter/hjørner glemt**; eksistens ikke begrunnet; bare indre kritiske punkter sjekket; feil parametrisering av randen; kandidatverdiene ikke sammenlignet til slutt.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: Lagranges multiplikatorer

- **id:** `mat112-uib-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-5-1`
- **kapitteltype:** teori
- **description:** Optimering under bibetingelse med Lagrange-funksjonen, elimineringsknepet for λ, og den avgjørende eksistensbegrunnelsen — et Lagrange-punkt er ikke et ekstremum før ekstremum er vist å finnes.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 4.4.
- **Eksamensbelegg:** Sjanger G — Lagrange ~45 %, ofte som *alternativ* til randparametrisering i sjanger F; egen sjanger fra ~2011. **Sensorkrav (analysen §5.4, V2011/H2011):** metoden forutsetter at ekstremalverdien finnes — dette må begrunnes separat (ekstremalverdisetningen), ellers er et kritisk Lagrange-punkt ikke garantert et ekstremum. Prioritet: **kunne**.
- **Innholdskontrakt:** Optimér $f$ under bibetingelse $g=0$; **kvalifikasjon** $\nabla g\ne\mathbf 0$ på betingelsen; **Lagrange-funksjonen** $L = f + \lambda g$ (eller $\nabla f = \lambda\nabla g$), Teorem 4, $\S$13.3; **elimineringsknep**: gang likninger med variablene og trekk fra hverandre for å eliminere $\lambda$; **eksistensbegrunnelse** (ekstremalverdisetningen på det lukkede/begrensede betingelsessettet) — FØR kandidatpunktene tolkes som ekstremum; sammenlign funksjonsverdiene i kandidatpunktene. **Alternativt:** samme problem via randparametrisering (sjanger F). Notasjon: $\lambda$ multiplikator, $\nabla f = \lambda\nabla g$.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn største og minste verdi av $f(x,y)=xy$ på ellipsen $x^2/4+y^2=1$ (Lagrange, med eksistensbegrunnelse).» Mønstereksempel: «Finn det rettvinklede triangelet med gitt hypotenus som har størst areal (Lagrange).»
- **Typiske feil:** **Lagrange-punkt tolket som ekstremum uten eksistensbegrunnelse**; kvalifikasjonen $\nabla g\ne\mathbf 0$ ikke sjekket; feil i $\lambda$-elimineringen; glemme en løsningsgren; ikke sammenligne kandidatverdiene.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.4: Anvendt optimering: modeller, eliminering og tolkning

- **id:** `mat112-uib-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-5-3`
- **kapitteltype:** teori
- **description:** Oversett en fysisk/geometrisk situasjon til en flervariabel optimering, eliminér en variabel via bibetingelsen, og tolk svaret med enhet — sjanger F/G i modelleringsdrakt.
- **Forkunnskaper (kryssbok):** Kap. 5.2–5.3; [Optimering i praksis](/r1/r1-4-9).
- **Eksamensbelegg:** Sjanger H — anvendt optimering ~50 %. Kontekster: minimer overflateareal av et kar med gitt volum; minimer total rørlengde i et telt-reisverk; maksimer bæreevne $kxy^2$ av en bjelke skåret av en sylinderstokk $x^2+y^2=4r^2$. **Sensorinnsikt (V2011):** se kjedene — en tidligere deloppgaves resultat mates inn i en senere. Prioritet: **kunne**.
- **Innholdskontrakt:** **Modelleringsoppskrift:** (1) navngi variabler + figur; (2) sett opp målfunksjon og bibetingelse; (3) eliminér en variabel via bibetingelsen (eller bruk Lagrange); (4) optimér med eksistensbegrunnelse; (5) **tolk svaret** (dimensjoner med enhet, sjekk rimelighet). Kobler sjanger F/G med modellering; se kjedene i settdesignet (deloppgave a mater inn i c). Notasjon: kontekstvariabler navngitt, enhet i konklusjonen.
- **Oppgavesjangre:** H. Mønstereksempel: «Et rektangulært kar uten lokk skal ha volum 32 liter. Finn dimensjonene som minimerer overflatearealet.» Mønstereksempel: «En bjelke med rektangulært tverrsnitt $x\times y$ skjæres av en sylinderstokk $x^2+y^2=4r^2$; bæreevnen er $kxy^2$. Finn tverrsnittet som maksimerer bæreevnen.»
- **Typiske feil:** Feil målfunksjon/bibetingelse fra teksten; eliminering som introduserer falske løsninger; eksistens/globalt-argument glemt; svar uten enhet/tolkning; ikke se kjeden til en tidligere deloppgave.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 5.5: Gradientflyt og separabel differensiallikning

- **id:** `mat112-uib-5-5` · **number:** 5.5 · **estimatedMinutes:** 45 · **prerequisites:** `mat112-uib-4-4`
- **kapitteltype:** teori (kjenne — kompakt)
- **description:** Syntese-sjangeren: en varmesøkende partikkel følger gradienten, banen finnes ved en separabel differensiallikning, og krysser normalt på nivåkurvene — MAT111-difflikning gjenbrukt i flervariabel-kontekst.
- **Forkunnskaper (kryssbok):** Kap. 4.4; [Separable differensiallikninger](/s2/s2-2-2), [Introduksjon til differensiallikninger](/s2/s2-2-1). Fra MAT111: separabel difflikning som teknikk (MAT111 kap. 6.1 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger K — gradientflyt ~15 % (sjelden, men en fin syntese-sjanger; V2011 oppg. 5c). Kobler MAT111s difflikningsteknikk inn i MAT112s gradient-kontekst. Prioritet: **kjenne**.
- **Innholdskontrakt:** En partikkel følger til enhver tid retningen der $T(x,y)$ øker mest, dvs. tangenten er parallell med $\nabla T$; **sett opp forholdet** $\frac{dy}{dx} = \frac{T_y}{T_x}$; løs den resulterende **separable differensiallikningen**; bestem konstanten fra startpunktet; forklar at banen krysser **normalt** på nivåkurvene (fordi $\nabla T \perp$ nivåkurve, Teorem 12.6). Kompakt kapittel — én løsningsoppskrift, ett gjennomregnet case. Notasjon: $dy/dx = T_y/T_x$, separabel form.
- **Oppgavesjangre:** K. Mønstereksempel: «$T(x,y)=1+2x+12y-x^2-2y^2$. En varmesøkende partikkel gjennom origo følger alltid retningen for raskest temperaturøkning. Finn likningen for banen.»
- **Typiske feil:** Feil oppsett av $dy/dx$ (bytte om $T_x,T_y$); glemme at banen er normal på nivåkurvene; feil i den separable integrasjonen; konstanten ikke bestemt fra startpunktet.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 5.6: Drill: global optimering og randanalyse

- **id:** `mat112-uib-5-6` · **number:** 5.6 · **estimatedMinutes:** 90 · **prerequisites:** `mat112-uib-5-4`
- **kapitteltype:** drill
- **description:** Hele optimeringssjangeren fra ende til annen: eksistens først, deretter indre kritiske punkter, singulære punkter og full randanalyse med endepunkter — begge veier (randparametrisering og Lagrange).
- **Eksamensbelegg:** Sjanger F (+G, H) — ~80 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift** (fra 5.1–5.4): (1) eksistens (ekstremalverdisetning, begge betingelser); (2) indre kritiske + singulære punkter; (3) rand via parametrisering ELLER Lagrange, med endepunkter/hjørner; (4) sammenlign alle kandidatverdier. **Gjennomregnet eksamenscase** som løser samme rand **begge veier** (parametrisering og Lagrange, «Alternativt:») med sensor-margnotater om eksistens-steget og endepunktene. 10–14 oppgaver på eksamensnivå, inkludert minst 3 anvendte (sjanger H) og 2 der Lagrange er raskeste vei.
- **Oppgavesjangre:** F + G + H. Mønstereksempel: «Finn maks og min til $f(x,y)=x^2+y^2-x-y$ på disken $x^2+y^2\le 1$ — bruk både randparametrisering og Lagrange på randen.»
- **Typiske feil:** Alle fellene fra 5.1–5.4; eksistens hoppet over; endepunkter/hjørner glemt; Lagrange-punkt uten eksistens; kandidatverdiene ikke sammenlignet.
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Kjeglesnitt, parametriske og polare kurver *(prioritet: PERFEKT for polar ~80 %; kunne for resten)*

#### Kapittel 6.1: Kjeglesnitt på standardform: fullføre kvadrat og klassifisering

- **id:** `mat112-uib-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Annengradslikninger skrevet på standardform ved å fullføre kvadratet, klassifisert som ellipse/parabel/hyperbel, med sentrum, halvakser og brennpunkt — stabile bredde-poeng fra Adams kap. 8.
- **Forkunnskaper (kryssbok):** [Fullstendig kvadrat](/1t/1t-2-4), [Andregradsfunksjoner](/1t/1t-3-4), [Linjer og sirkler i planet](/r1/r1-6-5).
- **Eksamensbelegg:** Sjanger I (kjeglesnitt-delen) — kjeglesnitt ~50 %. Standardoppgave: fullfør kvadratet, klassifisér, finn sentrum/halvakser/brennpunkt. Ofte også som nivåkurver til flervariabel funksjon (kap. 4.5). Prioritet: **kunne**.
- **Innholdskontrakt:** **Standardform** for ellipse $\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1$, parabel og hyperbel; **fullføre kvadratet** for å bringe en generell annengradslikning på standardform; klassifisering (fortegn/koeffisientmønster); sentrum $(h,k)$, halvakser, **brennpunkt** ($c^2=a^2-b^2$ ellipse, $c^2=a^2+b^2$ hyperbel), eksentrisitet; skisse. Notasjon: standardform med senter $(h,k)$; brennpunktformlene.
- **Oppgavesjangre:** I. Mønstereksempel: «Skriv $4x^2+9y^2-16x+18y-11=0$ på standardform, klassifisér kurven, og finn sentrum og brennpunkter.» Mønstereksempel: «Hvilken kjeglesnitt-type er nivåkurven $f(x,y)=c$ når $f(x,y)=x^2-4y^2$?»
- **Typiske feil:** Fortegnsfeil ved fullføring av kvadratet; glemme å balansere konstanten som legges til; feil brennpunktformel (ellipse vs. hyperbel); feilklassifisering; blande halvakse og brennpunktavstand.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.2: Parametriske kurver: buelengde og tangenter

- **id:** `mat112-uib-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat112-uib-6-1`
- **kapitteltype:** teori
- **description:** Buelengde av en parametrisk kurve, punkter med horisontal/vertikal tangent, og kurveidentifikasjon ved å eliminere parameteren — regnetunge, gjennomførbare bredde-poeng.
- **Forkunnskaper (kryssbok):** [Parameterframstilling av kurver](/r2/r2-6-1), [Derivasjon av vektorfunksjoner](/r2/r2-6-2), [Parameterframstilling](/r1/r1-6-3), [Bestemt integral som grenseverdi](/r2/r2-2-4). Fra MAT111: integrasjonsteknikk for buelengdeintegraler (MAT111 kap. 5.2 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger I (parametrisk-delen) — parametrisk ~55 %. Buelengde $\int\sqrt{x'^2+y'^2}\,dt$ er standard; horisontal/vertikal tangent; identifiser kurven ved parametereliminasjon. Prioritet: **kunne**.
- **Innholdskontrakt:** Parametrisk kurve $(x(t),y(t))$; **buelengde** $L = \int_a^b \sqrt{x'(t)^2 + y'(t)^2}\,dt$ ($\S$8.4); tangentens stigning $dy/dx = y'/x'$; **horisontal tangent** ($y'=0$, $x'\ne 0$) og **vertikal tangent** ($x'=0$, $y'\ne 0$); **kurveidentifikasjon** ved å eliminere $t$; sykloide/astroide/ellipse som standardeksempler. Notasjon: $x'(t),y'(t)$, buelengdeintegralet.
- **Oppgavesjangre:** I. Mønstereksempel: «Finn buelengden av kurven $x=t^2$, $y=t^3$ for $t\in[0,1]$.» Mønstereksempel: «Finn punktene med horisontal og vertikal tangent på $x=\cos t$, $y=\sin 2t$, og identifiser kurven.»
- **Typiske feil:** Feil buelengdeintegrand (glemme kvadratrot eller en av $x'^2/y'^2$); bytte om horisontal/vertikal tangent-betingelse; parametereliminasjon som mister deler av kurven; integrasjonsteknikk-feil i buelengden.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Polare koordinater: kurver, areal og skjæringspunkter

- **id:** `mat112-uib-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-6-2`
- **kapitteltype:** teori
- **description:** Polare kurver, areal ½∫r²dθ og areal mellom kurver, skjæringspunkter (inkludert r₁=−r₂-tilfellet og origo) og kartesisk↔polar konvertering — den hyppigste kap. 8-sjangeren.
- **Forkunnskaper (kryssbok):** Kap. 6.2; [Radianer og vinkelmål](/r2/r2-4-1), [Enhetssirkelen og trigonometriske definisjoner](/r2/r2-4-2), [Trigonometriske formler](/r2/r2-4-6), [Areal mellom kurver](/r2/r2-2-7).
- **Eksamensbelegg:** Sjanger I (polar-delen) — polar ~80 %, den hyppigste kap. 8-sjangeren. **Felle (analysen §5.11):** skjæringspunkter funnet uten å sjekke $r_1=-r_2$-tilfellet og origo separat; areal mellom kurver med feil integrasjonsgrenser/stråleintervall. Prioritet: **perfekt**.
- **Innholdskontrakt:** Polare koordinater $(r,\theta)$, **kartesisk↔polar** ($x=r\cos\theta$, $y=r\sin\theta$, $r^2=x^2+y^2$); skissér $r=f(\theta)$ (sirkler $r=2a\cos\theta$, kardioider, rosekurver); **polart areal** $A = \tfrac12\int_\alpha^\beta r^2\,d\theta$ ($\S$8.6); **areal mellom to polare kurver** (og innenfor begge — riktig stråleintervall og hvilken kurve som er ytterst); **skjæringspunkter**: løs $r_1=r_2$, men sjekk også **$r_1=-r_2$ med vinkelskift** og **origo separat** (et punkt kan ha flere $(r,\theta)$-representasjoner). Notasjon: $\tfrac12\int r^2\,d\theta$; stråleintervall $[\alpha,\beta]$.
- **Oppgavesjangre:** I. Mønstereksempel: «Finn arealet innenfor kardioiden $r=1+\cos\theta$.» Mønstereksempel (geit): «En geit er festet med et tau av lengde $a$ inne i en sirkulær innhegning med radius $l>a$. Finn beiteområdets areal.» (Kombinerer to polare sirkler $r=a$ og $r=2l\cos\theta$.)
- **Typiske feil:** **Skjæringspunkter uten $r_1=-r_2$/origo-sjekk**; feil stråleintervall i areal mellom kurver; glemme $\tfrac12$-faktoren; feil ytterste/innerste kurve; kartesisk↔polar-konvertering med feil kvadrant.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.4: Drill: polare og parametriske kurver

- **id:** `mat112-uib-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `mat112-uib-6-3`
- **kapitteltype:** drill
- **description:** Kap. 8-klyngen samlet: kjeglesnitt på standardform, parametrisk buelengde/tangent og polart areal/skjæring — bredde-poengene som ofte åpner settet.
- **Eksamensbelegg:** Sjanger I — polar ~80 %, parametrisk ~55 %, kjeglesnitt ~50 %. Ofte åpningen sammen med gradient. Prioritet: **perfekt** (polar) / **kunne** (resten).
- **Innholdskontrakt:** **Løsningsoppskrifter**: (1) kjeglesnitt: fullfør kvadrat → klassifisér → sentrum/brennpunkt; (2) parametrisk: buelengde $\int\sqrt{x'^2+y'^2}$, tangenter ($x'=0$/$y'=0$), eliminér $t$; (3) polar: skissér, areal $\tfrac12\int r^2$, skjæring ($r_1=r_2$, $r_1=-r_2$, origo). **Gjennomregnet eksamens-åpning** (én polar arealoppgave med skjæringspunkt + én parametrisk buelengde) med sensor-margnotater om skjæringsfellen og stråleintervallene. 10–14 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** I, alle varianter. Mønstereksempel: «Finn arealet som ligger innenfor både $r=1$ og $r=2\cos\theta$ (finn skjæringspunktene først, sjekk origo).»
- **Typiske feil:** Alle fellene fra 6.1–6.3; skjæringsfellen; feil stråleintervall; $\tfrac12$-faktoren glemt; buelengde-integranden feil.
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Reell analyse: uniform kontinuitet og Riemann *(prioritet: PERFEKT — hver ~70 %, UiB-signatur)*

#### Kapittel 7.1: Uniform kontinuitet: definisjon, de tre verktøyene og moteksempler

- **id:** `mat112-uib-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-1-2`
- **kapitteltype:** teori
- **description:** Uniform kontinuitet på et vilkårlig intervall — definisjonen med δ uavhengig av punkt, de tre verktøyene (kompakt, begrenset derivert, union) og moteksemplene der uniform kontinuitet svikter.
- **Forkunnskaper (kryssbok):** Kap. 1.2; [Kontinuitet](/r1/r1-3-2). Fra MAT111: $\varepsilon$-$\delta$-mal og sekantsetningen/MVT (MAT111 kap. 2.1, 4.1 — bygges, ikke lenkbar ennå).
- **Eksamensbelegg:** Sjanger L — uniform kontinuitet ~70 %, fast analyse-signatur (nesten hvert Knutsen-sett). **Sensorkrav (analysen §5.9):** uniform kontinuitet «vist» ved punktvis kontinuitet uten en $\delta$ uavhengig av punktet, eller uten et navngitt resultat, gir trekk. Prioritet: **perfekt** (definisjonspresisjon avgjør).
- **Innholdskontrakt:** **Definisjon** (Uniform Continuity): $\forall\varepsilon>0\ \exists\delta>0$ slik at $|x_1-x_2|<\delta \Rightarrow |f(x_1)-f(x_2)|<\varepsilon$ for **alle** $x_1,x_2$ i intervallet ($\delta$ uavhengig av punkt); **de tre verktøyene** (fra notatet + App. III): (i) kontinuerlig på **lukket, begrenset** (kompakt) intervall ⇒ uniformt kontinuerlig (Teorem 2.1); (ii) **begrenset derivert** ⇒ uniformt kontinuerlig (Sats 2.2, via sekantsetningen); (iii) **union-egenskapen** (Observasjon 2.4): u.k. på to intervaller med felles punkt ⇒ u.k. på unionen; **typisk strategi for $[0,\infty)$**: del i $[0,1]$ (kompakt ⇒ u.k.) og $[1,\infty)$ (begrenset derivert ⇒ u.k.), lim dem; **direkte fra definisjonen**: finn $\delta(\varepsilon)$ uavhengig av punkt (for $\sqrt x$: $|\sqrt{x_1}-\sqrt{x_2}|\le\sqrt{|x_1-x_2|}$, velg $\delta=\varepsilon^2$); **moteksempel-varianten**: kontinuerlig men *ikke* uniformt kontinuerlig på $(0,1)$ ($1/x$, $\sin(1/x)$ — ubegrenset derivert / oscillasjon nær 0). Notasjon: $\delta=\varepsilon^2$-mal, Sats/Teorem-navn fra notatet. (Kort: $\varepsilon$-$\delta$ formelle grensebevis ~20 %, «bør kjenne til», som del av definisjonsvarianten.)
- **Oppgavesjangre:** L. Mønstereksempel: «Vis at $f(x)=\ln x/(x-1)$ er uniformt kontinuerlig på $(1,\infty)$.» (Vis $|f'|<1$ via $\ln x\le x-1$, deretter Sats 2.2.) Mønstereksempel: «Vis at $f(x)=1/x$ ikke er uniformt kontinuerlig på $(0,1)$.»
- **Typiske feil:** **Uniform kontinuitet «vist» ved punktvis kontinuitet** (ingen $\delta$ uavhengig av punkt); ikke navngi verktøyet (kompakt/begrenset derivert/union); glemme et delintervall i union-strategien; moteksempel uten å vise ubegrenset derivert/oscillasjon.
- **Quiz: 16 · Flashcards: 28**

#### Kapittel 7.2: Riemann-integralet: øvre/nedre summer og ε-kriteriet

- **id:** `mat112-uib-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat112-uib-1-2`
- **kapitteltype:** teori
- **description:** Riemann-integrerbarhet fra definisjonen med øvre/nedre summer og ε-kriteriet, Dirichlet-moteksemplet, integrerbarhetsbevis og additivitet — den andre analyse-signaturen.
- **Forkunnskaper (kryssbok):** Kap. 1.2; [Bestemt integral som grenseverdi](/r2/r2-2-4), [Analysens fundamentalsetning](/r2/r2-2-5).
- **Eksamensbelegg:** Sjanger M — Riemann-integrerbarhet ~70 %, fast analyse-signatur. Standardoppgaver: begrenset ikke-integrerbart eksempel (Dirichlet), integrerbarhetsbevis, trappefunksjon via Riemann-summer, additivitet. **Felle (analysen §5.10):** $U$ og $L$ ikke regnet for *vilkårlig* partisjon i ikke-integrerbarhetsbevis. Prioritet: **perfekt**.
- **Innholdskontrakt:** Partisjon $P$; **øvre og nedre Riemann-summer** $U(f,P)=\sum M_i\Delta x_i$, $L(f,P)=\sum m_i\Delta x_i$ ($M_i=\sup$, $m_i=\inf$ på delintervallet); øvre/nedre integral $I^*=\inf_P U$, $I_*=\sup_P L$; **integrerbarhet** hviss $I^*=I_*$, ekvivalent med **$\varepsilon$-kriteriet** (Teorem 3, App. IV): $\forall\varepsilon>0\ \exists P$ med $U(f,P)-L(f,P)<\varepsilon$; **standardresultater**: (a) **Dirichlet-funksjonen** (rasjonal↦1, irrasjonal↦0) er begrenset men ikke integrerbar ($U=1$, $L=0$ for *enhver* partisjon); (b) integrerbarhetsbevis (kontinuerlig unntatt i endelig mange punkter; monoton funksjon; begrenset + kontinuerlig i det indre); (c) beregn $\int$ av trappe-/stykkevis funksjon via Riemann-summer; (d) **additivitet** $\int_a^b=\int_a^c+\int_c^b$ via partisjonsforfining. Notasjon: $U(f,P)$, $L(f,P)$, $\sup/\inf$, $\varepsilon$-kriteriet.
- **Oppgavesjangre:** M. Mønstereksempel: «Gi et eksempel på en begrenset funksjon på $[0,1]$ som ikke er Riemann-integrerbar, og vis det.» (Dirichlet, $U-L=1$ for alle $P$.) Mønstereksempel: «Bruk $\varepsilon$-kriteriet til å vise at en voksende funksjon på $[a,b]$ er integrerbar.»
- **Typiske feil:** **$U,L$ ikke regnet for vilkårlig partisjon** i ikke-integrerbarhetsbevis; singulariteter/hoppunkter inne i intervallet oversett; blande $\sup$ og $\inf$; $\varepsilon$-kriteriet uten eksplisitt partisjonskonstruksjon; feil i additivitetsbeviset.
- **Quiz: 16 · Flashcards: 28**

#### Kapittel 7.3: Drill: de tre analyse-signaturene

- **id:** `mat112-uib-7-3` · **number:** 7.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat112-uib-7-2`, `mat112-uib-4-2`
- **kapitteltype:** drill
- **description:** De tre oppgavene som lukker Knutsen-settet, drillet sammen: kontinuitet/deriverbarhet av en flervariabel funksjon i et punkt, uniform kontinuitet, og Riemann-integrerbarhet — der karakterene avgjøres.
- **Eksamensbelegg:** Sjanger J + L + M — hver ~40–70 %, lukker settet i Knutsen-årene. Krever presis definisjonsbruk og teoremsitering, ikke regning. Prioritet: **perfekt** (toppkarakter-differensiator).
- **Innholdskontrakt:** **Tre løsningsoppskrifter samlet**: (1) **flervariabel kontinuitet/deriverbarhet i punkt** (fra 4.2–4.3): kontinuitet via polar/skvis eller divergens via to stier; deriverbarhet skilt fra partielle deriverte; (2) **uniform kontinuitet** (fra 7.1): velg verktøy (kompakt/begrenset derivert/union) eller $\delta(\varepsilon)$ direkte, eller moteksempel; (3) **Riemann-integrerbarhet** (fra 7.2): $\varepsilon$-kriteriet med partisjonskonstruksjon, Dirichlet-moteksempel, additivitet. **Gjennomregnet analyse-avslutning** (de tre signaturene som oppgave 8a–c) med sensor-margnotater om at alt hviler på definisjonsbruk og navngitte teoremer, og at «Alternativt:»-veier (ε-δ/polar/skvis) honoreres. 10–14 oppgaver på eksamensnivå fordelt på de tre sjangrene.
- **Oppgavesjangre:** J + L + M. Mønstereksempel: «(a) Er $f(x,y)=\frac{x^3}{x^2+y^2}$ (med $f(0,0)=0$) kontinuerlig og deriverbar i origo? (b) Er $g(x)=\sqrt x$ uniformt kontinuerlig på $[0,\infty)$? (c) Er Dirichlet-funksjonen integrerbar på $[0,1]$?»
- **Typiske feil:** Alle fellene fra 4.2–4.3, 7.1, 7.2; definisjon ikke skrevet ned; teorem ikke navngitt; partielle deriverte forvekslet med deriverbarhet; $\delta$ avhengig av punkt; $U,L$ ikke for vilkårlig partisjon.
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Lukket bok: teoremnavning og føringsstandard

- **id:** `mat112-uib-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `mat112-uib-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Lukket bok-regelen operasjonalisert: teoremnavning, eksistens som eget steg, endepunkts-/randdisiplin, definisjonsbruk — samlet med en memorert teoremnavn- og standardrekke-bank (flashcard-gull).
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis 2009–2014: (i) «Alle svar skal begrunnes, men begrunnelsene skal være korte», og «godt med poeng for riktig fremgangsmåte selv uten korrekt svar»; (ii) **lukket bok forplikter til teoremkjennskap** — fasit navngir og paragrafhenviser hvert teorem (forholdstesten $\S$9.3, ekstremalverdisetningen $\S$13.1, Teorem 12.6, Abels teorem, Sats 2.2); å bare regne uten å navngi gir trekk; (iii) **eksistens er egen leveranse** (ekstremalverdisetning før kandidatjakt, monoton+begrenset før følgegrense, Lagrange-punkt ikke ekstremum uten eksistens); (iv) **endepunkter/randpunkter alltid sjekket** (potensrekker OG randanalyse); (v) **definisjoner brukes presist** (uniform kontinuitet, Riemann — skriv definisjonen, verifiser betingelsene); (vi) alternative løsninger honoreres; (vii) internasjonal kandidatgruppe → engelske teoremnavn. Prioritet: **perfekt** (regelen bærer hele karakteren).
- **Innholdskontrakt:** **Teoremnavn-banken** (flashcard-gull, memorert for lukket bok): alle konvergenstestene (n-teledd, sammenligning, grensesammenligning, integral, forhold, rot, Leibniz) med betingelser; standardrekkene ($e^x$, $\sin$, $\cos$, $\ln(1+x)$, $\tan^{-1}$, geometrisk, binomial); ekstremalverdisetningen, kandidatsetningen, Lagrange (Teorem 4 $\S$13.3), Teorem 12.6 ($\nabla\perp$ nivåflate), Teorem 4 $\S$12.6 (kont. partielle ⇒ deriverbar), Abels teorem, kompletthetsaksiomet, monoton-begrenset-teoremet, uniform-kontinuitet-satsene (2.1, 2.2, 2.4), Riemanns $\varepsilon$-kriterium; **begrunnelsestrappen per sjanger A–O** (hva som er tilstrekkelig begrunnelse for hver — én tabell); **standardføringene** (normalisert retningsderivert, polart areal $\tfrac12\int r^2$, $\delta=\varepsilon^2$-mal, $U/L$-summer, endepunktssjekk, eksistens-steget); to kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon — ett rekke- og ett optimeringseksempel med margnotater); **sjekkliste før innlevering** (teoremnavn på plass? eksistens levert? endepunkter/rand sjekket? monotoni i alternerende? partielle vs. deriverbarhet skilt? definisjoner skrevet ned?); tidsdisiplin (~17–19 min/deloppgave).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under finner riktig grense av en rekursiv følge, men ville fått trekk. Pek på det manglende eksistens-steget og skriv om til full pott.»
- **Typiske feil:** Hele feilkatalogens føringsdel: teorem ikke navngitt, eksistens hoppet over, endepunkter/randpunkter glemt, monotoni ikke sjekket i alternerende, partielle deriverte forvekslet med deriverbarhet, $\delta$ avhengig av punkt, $U,L$ ikke for vilkårlig partisjon.
- **Quiz: 12 · Flashcards: 48** (teoremnavn-bank + standardrekke-bank + føringsregler — flashcard-gull)

#### Kapittel 8.2: Øvingseksamen 1: Knutsen-profil (16 deloppgaver, 5 timer)

- **id:** `mat112-uib-8-2` · **number:** 8.2 · **estimatedMinutes:** 300 · **prerequisites:** `mat112-uib-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 5-timers Knutsen-sett: 16 likt vektede deloppgaver med settets faste dramaturgi (åpner med gradient/polar, midt med rekker/optimering, lukker med de tre analyse-signaturene) og full A-besvarelse-fasit med navngitte teoremer.
- **Eksamensbelegg/miks:** Speiler Knutsen-malen (5 timer, 16 likt vektede deler, lukket bok, «begrunn kort»): **åpning gradient/tangentplan** (2: retningsderivert normalisert + tangentplan til nivåflate, sjanger E) → **polart areal** (1, med skjæringspunkt, sjanger I) → **rekkekonvergens** (2: velg/navngi test + absolutt/betinget, sjanger A) → **potensrekke** (2: konvergensintervall med endepunkter + lukket sum, sjanger B) → **rekursiv følge** (1: induksjon + eksistens før grense, sjanger D) → **global optimering på lukket område** (2: eksistens + full randanalyse, sjanger F) → **kontinuitet/deriverbarhet i punkt** (2: polar/skvis + partielle vs. deriverbarhet, sjanger J) → **uniform kontinuitet** (1: verktøyvalg + navngi sats, sjanger L) → **Riemann-integrerbarhet** (1: $\varepsilon$-kriterium/Dirichlet, sjanger M) → **kompletthet** (1: formulér aksiom + bevis monoton-begrenset, sjanger N) → **Maclaurin-nærming** (1: feilskranke, sjanger C). Alle oppgaver nyskrevne; løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 8.1-standarden (teoremer navngitt, eksistens som eget steg), med `tip`-notat om tidsbudsjett (~18 min/del) og hvor toppsjikt-poengene sitter.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: Svärd-profil (11 kortere oppgaver, 5 timer)

- **id:** `mat112-uib-8-3` · **number:** 8.3 · **estimatedMinutes:** 300 · **prerequisites:** `mat112-uib-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Svärd-malens mer oppstykkede, regnetunge sett: 11 kortere oppgaver som dekker samme temaprofil, med tyngdepunkt på regning (rekker, potensrekker, kjeglesnitt, parametrisk, gradient, optimering).
- **Eksamensbelegg/miks:** Speiler Svärd-malen (5 timer, ~11 kortere oppgaver, mer regnetung enn Knutsen): **kjeglesnitt på standardform** (1, fullfør kvadrat + klassifiser, sjanger I) → **parametrisk buelengde** (1, sjanger I) → **rekkekonvergens** (2: forhold/integral/grensesammenligning + alternerende med monotonisjekk, sjanger A) → **potensrekke** (1: intervall + endepunkter + sum, sjanger B) → **Maclaurin med substitusjon** (1: binomialrekke + nærming, sjanger C) → **gradient/retningsderivert** (1: normalisert, sjanger E) → **global optimering / Lagrange** (2: randanalyse + Lagrange-variant med eksistens, sjanger F+G) → **anvendt optimering** (1: modeller + tolk, sjanger H) → **uniform kontinuitet** (1: $\delta=\varepsilon^2$-variant, sjanger L). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` per oppgave med tids-/vektingsnotat. Sammen med 8.2 dekkes A–O.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: teoritung analyse-variant (5 timer)

- **id:** `mat112-uib-8-4` · **number:** 8.4 · **estimatedMinutes:** 300 · **prerequisites:** `mat112-uib-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Bevis- og teoritung variant som fanger sjangrene 8.2–8.3 vektlegger mindre: gradientflyt, vektorgeometri i R³, kompletthetsbevis, deriverbar⇒kontinuerlig, Abels teorem og Riemann-additivitet.
- **Eksamensbelegg/miks:** Speiler de teoritunge Knutsen-/analyse-settene (5 timer, tung på bevis/definisjonsbruk): **vektorgeometri i R³** (1: skjæringslinje mellom to plan, sjanger O) → **gradientflyt → separabel difflikning** (1, sjanger K) → **rekkekonvergens med felle** (1: alternerende der monotoni svikter, sjanger A) → **potensrekke med Abel** (1: endepunktssum via Abels teorem, sjanger B) → **rekursiv følge + kompletthet** (2: induksjon-eksistens + formulér kompletthetsaksiom og bevis monoton-begrenset, sjanger D+N) → **deriverbar ⇒ kontinuerlig + moteksempel** (1, sjanger N) → **flervariabel deriverbarhet** (1: $\sqrt{|xy|}$ — partielle finnes, ikke deriverbar, sjanger J) → **uniform kontinuitet, moteksempel** (1: $1/x$ på $(0,1)$, sjanger L) → **Riemann: additivitet + integrerbarhetsbevis** (2, sjanger M) → **Lagrange med eksistensbegrunnelse** (1, sjanger G). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt (definisjonsbruk, teoremnavn, eksistens, alternative veier).
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 14 |
| 1 | 1.1–1.3 | 18+14+18 = **50** | 22+26+8 = **56** |
| 2 | 2.1–2.5 | 20+18+18+18+22 = **96** | 26+26+26+24+12 = **114** |
| 3 | 3.1–3.4 | 18+18+18+20 = **74** | 22+20+30+10 = **82** |
| 4 | 4.1–4.6 | 14+16+16+18+16+20 = **100** | 18+18+22+22+18+8 = **106** |
| 5 | 5.1–5.6 | 14+18+16+14+10+20 = **92** | 24+18+18+12+10+8 = **90** |
| 6 | 6.1–6.4 | 16+16+18+20 = **70** | 20+16+20+8 = **64** |
| 7 | 7.1–7.3 | 16+16+20 = **52** | 28+28+10 = **66** |
| 8 | 8.1–8.4 | 12+6+6+6 = **30** | 48+0+0+0 = **48** |
| **Sum** | **36 kap.** | **576 ≥ 500 ✓** | **640 (600–700 ✓)** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene og lukket bok-naturen: **Del 2 (rekker,
~95–100 %)** bærer flest flashcards (114) fordi hver konvergenstest og
standardrekke er rent pugge-stoff; **Del 7 (analyse-signaturene)** og **kap. 8.1
(teoremnavn-/standardrekke-bank, 48 fc)** har høy flashcard-tetthet av samme
grunn (definisjoner + teoremnavn må memoreres). **Del 4 (flervariabel, ~90 %)**
bærer flest quiz (100). Drillkapitlene (1.3, 2.5, 3.4, 4.6, 5.6, 6.4, 7.3) har
lave flashcard-kvoter (få nye definisjoner) men høye quiz-/oppgavekvoter.
Øvingseksamenene har 6 quiz / 0 flashcards. Quizzene skrives som
teorem-/testvalg-sjekk (hvilken test passer, hvilket teorem bærer argumentet,
hvilken betingelse mangler, er retningen normalisert) med distraktorer fra
feilkatalogen — ikke ren repetisjon. **Flashcard-summen (640) ligger bevisst i
600–700-båndet** fordi lukket bok gjør faget puggetungt (jf. PRODUKSJONSLOYPE:
«≥500 er GULV; teorem-/testrikt fag → sikt 600–700»).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (kap. 8.1: teoremer navngitt, eksistens som eget steg,
endepunkter/randpunkter sjekket) og poengfordeling. Prøvekapitler legges som
`mat112-uib-<del>-prove`, chapterNumber `<del>.P`.

**Del 1 — Følger, kompletthet og grenser**
1. Prøve 1.A (35 min): Følgegrenser, monotoni og begrensethet (kap. 1.1, sjanger D).
2. Prøve 1.B (40 min): Kompletthetsaksiomet + bevis for monoton, begrenset følge + deriverbar⇒kontinuerlig med moteksempel (kap. 1.2, sjanger N).
3. Prøve 1.C (45 min): Rekursiv følge — induksjon på monotoni/begrensethet, eksistens før grense (kap. 1.3, sjanger D).
4. Prøve 1.D (45 min): Blandet — anvendt rekursjonsmodell + kompletthetsbevis (hele delen).

**Del 2 — Uendelige rekker og konvergenstester**
1. Prøve 2.A (35 min): Geometrisk/p-rekke/n-teledd + sammenligning og integraltest (kap. 2.1–2.2, sjanger A).
2. Prøve 2.B (35 min): Forholds-/rottest + absolutt vs. betinget (kap. 2.3, sjanger A).
3. Prøve 2.C (40 min): Alternerende rekker med monotonisjekk-fellen + restleddsskranke (kap. 2.4, sjanger A).
4. Prøve 2.D (45 min): Blandet «velg og navngi test» — 4–5 rekker som treffer ulike grener, med felle-varianter (hele delen).

**Del 3 — Potensrekker og Taylor-rekker**
1. Prøve 3.A (40 min): Konvergensradius og -intervall med separat endepunktssjekk (kap. 3.1, sjanger B).
2. Prøve 3.B (40 min): Lukket sum via ledvis derivasjon/integrasjon + Abels teorem i endepunkt (kap. 3.2, sjanger B).
3. Prøve 3.C (40 min): Maclaurin-rekker ved substitusjon + tallnærming med feilskranke (kap. 3.3, sjanger C).
4. Prøve 3.D (45 min): Full potensrekke a–d — intervall + sum + nærming, kjedet (hele delen).

**Del 4 — Flervariabel differensialregning**
1. Prøve 4.A (35 min): R³-vektorgeometri — plan, linje, skjæringslinje (kap. 4.1, sjanger O).
2. Prøve 4.B (45 min): Kontinuitet/deriverbarhet i punkt — polar/skvis/to stier + partielle vs. deriverbarhet (kap. 4.2–4.3, sjanger J).
3. Prøve 4.C (40 min): Gradient og retningsderivert — normalisert, raskest vekst (kap. 4.4, sjanger E).
4. Prøve 4.D (45 min): Tangentplan og nivåflater — begge formler + skjæringslinje (kap. 4.5–4.6, sjanger E).

**Del 5 — Flervariabel optimering**
1. Prøve 5.A (45 min): Global optimering på lukket område — eksistens + full randanalyse med endepunkter (kap. 5.1–5.2, sjanger F).
2. Prøve 5.B (40 min): Lagranges multiplikatorer med eksistensbegrunnelse (kap. 5.3, sjanger G).
3. Prøve 5.C (45 min): Anvendt optimering — modeller + eliminering + tolkning (kap. 5.4, sjanger H).
4. Prøve 5.D (40 min): Blandet — global optimering begge veier (rand + Lagrange) + gradientflyt-syntese (kap. 5.5–5.6, sjanger F+G+K).

**Del 6 — Kjeglesnitt, parametriske og polare kurver**
1. Prøve 6.A (35 min): Kjeglesnitt på standardform — fullfør kvadrat + klassifisér + brennpunkt (kap. 6.1, sjanger I).
2. Prøve 6.B (40 min): Parametriske kurver — buelengde + horisontal/vertikal tangent + kurveidentifikasjon (kap. 6.2, sjanger I).
3. Prøve 6.C (45 min): Polart areal + skjæringspunkter (med $r_1=-r_2$/origo-sjekk) + areal mellom kurver (kap. 6.3, sjanger I).
4. Prøve 6.D (45 min): Blandet kap. 8 — polar areal-oppgave + parametrisk buelengde, som åpningsblokk (hele delen).

**Del 7 — Reell analyse: uniform kontinuitet og Riemann**
1. Prøve 7.A (45 min): Uniform kontinuitet — de tre verktøyene + $\delta=\varepsilon^2$-variant + moteksempel (kap. 7.1, sjanger L).
2. Prøve 7.B (45 min): Riemann-integrerbarhet — $\varepsilon$-kriterium + Dirichlet + integrerbarhetsbevis (kap. 7.2, sjanger M).
3. Prøve 7.C (45 min): Riemann additivitet + trappefunksjon via Riemann-summer (kap. 7.2, sjanger M).
4. Prøve 7.D (50 min): De tre analyse-signaturene samlet (kontinuitet/deriverbarhet i punkt + uniform kontinuitet + Riemann), som settets avslutning (kap. 7.3, sjanger J+L+M).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Form den speiler | Miks (deloppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Knutsen-profil (16 likt vektede deler) | E(2) + I(1) + A(2) + B(2) + D(1) + F(2) + J(2) + L(1) + M(1) + N(1) + C(1) |
| Øvingseksamen 2 (kap. 8.3) | Svärd-profil (11 kortere, regnetung) | I(2) + A(2) + B(1) + C(1) + E(1) + F+G(2) + H(1) + L(1) |
| Øvingseksamen 3 (kap. 8.4) | Teoritung analyse-variant | O(1) + K(1) + A(1) + B(1) + D+N(2) + N(1) + J(1) + L(1) + M(2) + G(1) |

Til sammen dekker de tre settene samtlige sjangre A–O minst én gang (O og K i
8.4; H i 8.3; N-bevis i 8.2 og 8.4; de tre analyse-signaturene J/L/M i alle).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Én lukket bok-eksamen** — vurderingsformen (5 timer, 100 %, to sett per år,
   Knutsen- vs. Svärd-mal), den faste dramaturgien (gradient/polar → rekker/
   optimering → de tre analyse-signaturene), formathistorikken og prognosen (fra
   kap. 0.1), med **lukket bok-forpliktelsen** (teoremer og standardrekker
   memoreres; navngi = poeng) og hvor MAT112 slutter (ikke multiple integraler/
   vektorfelt).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 2 rekker, Del 3 potensrekker, Del 4 gradient/tangentplan,
   Del 5 global optimering, kap. 6.3 polar, Del 7 uniform kontinuitet + Riemann),
   **kunne** (Del 1 følger/kompletthet, resten av Del 4/5/6, Taylor-nærming,
   kjeglesnitt, Lagrange, anvendt optimering, kontinuitet/deriverbarhet i punkt),
   **kjenne** (R³-vektorgeometri, gradientflyt, ε-δ-bevis) — med
   ærlighetsnotatet om at arkivet stopper V2014.
3. **Sjangerguiden** — A–O med løsningsoppskriftene fra drillkapitlene
   (1.3, 2.5, 3.4, 4.6, 5.6, 6.4, 7.3) i kortform.
4. **Sensorreglene** — lukket bok-forpliktelsen (teoremnavning), «begrunn kort
   men vis fremgangsmåten», **eksistens som egen leveranse** (ekstremalverdisetning
   før kandidatjakt, monoton+begrenset før følgegrense, Lagrange-punkt ikke
   ekstremum uten eksistens), **endepunkts-/randdisiplin** (potensrekker OG
   randanalyse), **definisjonsbruk** (uniform kontinuitet, Riemann), alternative
   løsninger honoreres (fra kap. 8.1) + karakterskille-listen (betinget vs.
   absolutt inkl. alternerende-fellen, Abels teorem i endepunkter, kontinuitet i
   flere variable via polar/skvis + to-sti-divergens, deriverbarhet skilt fra
   partielle deriverte, Riemann fra ε-kriteriet, kompletthet brukt til å *bevise*
   følgekonvergens, se kjedene i settet).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet, hver med
   henvisning til kapitlet som forebygger den (alternerende uten monotonisjekk →
   2.4; endepunkter glemt → 3.1 og 5.2; retning ikke normalisert → 4.4; eksistens
   ikke begrunnet → 5.1; partielle vs. deriverbarhet → 4.3; kontinuitet langs én
   sti → 4.2; uniform kontinuitet punktvis → 7.1; Riemann-summer for vilkårlig
   partisjon → 7.2; polar skjæringsfelle → 6.3; teoremer ikke navngitt → 8.1).
6. **Teorem-, test- og formelbank i kursets notasjon** — apparatet fra
   innholdskontraktene: konvergenstestene (n-teledd, sammenligning,
   grensesammenligning, integral, forhold, rot, Leibniz) med betingelser;
   standardrekkene ($e^x$, $\sin$, $\cos$, $\ln(1+x)$, $\tan^{-1}$, geometrisk,
   binomial); potensrekke-apparatet (radius, intervall, ledvis der/int, Abel);
   gradient/retningsderivert/tangentplan (Teorem 12.6); ekstremalverdisetningen +
   kandidatsetningen + Lagrange; kjeglesnitt-standardformer + brennpunktformler;
   parametrisk buelengde; polart areal $\tfrac12\int r^2$; uniform-kontinuitet-
   satsene (2.1, 2.2, 2.4); Riemanns $U/L$ + ε-kriterium; kompletthet +
   monoton-begrenset — med markering *utlede aktivt* vs. *kun bruke* (jf. analysen
   §6). **Denne banken er studentens lukket bok-pugg-ark.**
7. **Studieløp** — semesterplan (emnet undervises om våren): Del 0 → Del 1–2 →
   Del 3 → Del 4–5 → Del 6 → Del 7 → prøver → øvingseksamenene de to siste ukene
   under tidspress (300 min, ~17–19 min/deloppgave). Intensivvariant (3 uker):
   Del 2 + Del 3 + Del 4 (gradient/tangentplan) + Del 5 (global optimering) +
   kap. 6.3 + Del 7 + kap. 8.1 + øvingseksamenene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat112-uib` med alle 36
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra §2-tabellen; institusjon =
   UiB i `institusjoner.ts`, visningsnavn «MAT112 Grunnkurs i matematikk II».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–O og frekvenstallene resten
   refererer til.
3. **Temadeler i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   → Del 6 → Del 7. Én Opus-agent per hel del (jf. PRODUKSJONSLOYPE fase 4); Del 4
   og Del 5 (6 kap. hver) kan deles, men gi begge agentene HELE delens kontrakter
   og flagg for konsistenssjekk. Drillkapitlene bygges av samme agent som delen.
4. **Del 8** (føringsstandard + 3 øvingseksamener) til slutt av én agent som
   leser HELE skjelettet — settene gjenbruker alle sjangre.
5. **Prøvekapitler** (§4, 28 stk) legges som `mat112-uib-<del>-prove`,
   chapterNumber `<del>.P`, bygget av delens agent.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump` (LaTeX krever `\\` i JSON-strenger); `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon: $\nabla f = f_1\mathbf i + f_2\mathbf j$,
      $D_{\mathbf u}f = \hat{\mathbf u}\cdot\nabla f$, $\tfrac12\int r^2\,d\theta$,
      $U(f,P)/L(f,P)$, $\delta=\varepsilon^2$, $\sum ar^n = a/(1-r)$.
- [ ] **Notasjonskonsistens (grep over alle mat112-uib-filer)**: gradient med
      indeksnotasjon $f_1,f_2$; retningsvektor alltid normalisert; polart areal med
      $\tfrac12$; teoremnavn stavet likt (forholdstesten, ekstremalverdisetningen,
      Abels teorem, kompletthetsaksiomet, Sats 2.1/2.2/2.4); engelske teoremnavn i
      parentes ved første forekomst.
- [ ] **Lukket bok-teoremnavning i ALLE løsningsforslag**: hvert bærende teorem
      navngis (forholdstest, ekstremalverdisetning, Teorem 12.6, Abel,
      kompletthet, uniform-kontinuitet-satsene, Riemanns ε-kriterium). En løsning
      som «regner seg fram» uten teoremnavn er byggefeil.
- [ ] **Eksistens som eget steg**: hver F/G-løsning påberoper ekstremalverdisetningen
      (lukket OG begrenset) FØR kandidatjakt; hver D-løsning viser monoton+begrenset
      FØR grensen; INGEN Lagrange-løsning tolker et kritisk punkt som ekstremum uten
      eksistensbegrunnelse.
- [ ] **Endepunkts-/randdisiplin**: hver potensrekke-løsning undersøker begge
      endepunkter separat; hver randanalyse sjekker randens endepunkter/hjørner.
- [ ] **Alternerende rekker**: hver Leibniz-løsning verifiserer alle tre
      betingelsene inkl. monotoni; minst én felle-variant (monotoni-svikt) er med.
- [ ] **Partielle deriverte ≠ deriverbarhet**: hver flervariabel deriverbarhets-
      løsning skiller de to; INGEN løsning konkluderer deriverbarhet fra at $f_1,f_2$
      finnes; kontinuitet aldri «vist» langs én sti.
- [ ] **Definisjonsbruk i analyse**: uniform-kontinuitet-løsninger leverer $\delta$
      uavhengig av punkt (eller navngir en sats); Riemann-løsninger regner $U,L$ for
      vilkårlig partisjon i ikke-integrerbarhetsbevis og bruker ε-kriteriet.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — R2/R1/S2/1T-id-ene i §3 er verifisert mot
      `textbook-courses-matte.ts`; MAT111-referanser er klartekst, ikke lenker),
      `collapsible` Symbol- og formelliste per delkapittel, Typiske feil-`warning`,
      2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
      repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
      sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 576 og flashcard-sum ≥ 640** per kvotetabellen i §3
      (kontrollsummér); quizzene som teorem-/testvalg-sjekk med distraktorer fra
      feilkatalogen; kap. 8.1 flashcards = teoremnavn-/standardrekke-bank.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener som sammen dekker
      A–O.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og
      kontekster; ingen formuleringer fra reelle sett/fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett); Adams & Essex refereres, aldri siteres i lengde.
- [ ] **Ikke-pensum utelatt**: multiple integraler (dobbelt-/trippelintegral),
      vektorfelt, Green/Gauss/Stokes og linjeintegraler skal IKKE inn (senere
      UiB-emner); difflikninger kun som verktøy i gradientflyt (kap. 5.5).
- [ ] **Ærlighetsnotat aktivt**: byggefasen har sjekket om nyere sett (2015+) er
      tilgjengelige og justert vekting deretter; kapittelavgrensninger verifisert
      mot gjeldende pensumliste (uib.no/emne/MAT112).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

# Bokskjelett: MAT111 Grunnkurs i matematikk I (UiB) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (34 lesbare eksamenssett med fasit, H2003–V2020, to sett
> per år; 5 midtsemesterprøver 2003–2005; 14 pensumlister). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Institusjon: UiB (ikke UiO).** Analysen viser at MAT111 (UiB) og MAT1100
> (UiO) nesten ikke deler tyngdepunkt: MAT111 bæres av differensiallikninger,
> integrasjonsteknikk, komplekse tall, Taylor med restledd, numerikk
> (Newton/trapes/Simpson) og ε-δ — temaer som har 0 eller marginalt belegg ved
> UiO. Kalibrer utelukkende mot MAT111-analysen; MAT1100-skjelettet er kun
> **formatforbilde**, aldri faglig forbilde.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat111-uib` |
| Tittel | **MAT111 Grunnkurs i matematikk I (UiB)** |
| Institusjon | Universitetet i Bergen |
| Level | `'Høyskole'` |
| Arketype | Regnefag (matematikk, én åpen bok-slutteksamen) |
| Antall kapitler | **34** (1 eksamenskart + 29 tema + 1 føringsstandard + 3 øvingseksamener) |
| Estimert totaltid | **2 470 min ≈ 41 timer** |
| Quiz totalt | **528** (krav ≥500) |
| Flashcards totalt | **516** (krav ≥500) |

**Pitch (ett avsnitt):** MAT111 vurderes med **én avsluttende skriftlig
skoleeksamen på 5 timer (kl. 09–14)** som teller 100 %. Det avholdes fullt sett
både i desember (hovedsemesteret) og i mai, med samme temaprofil — arkivet gir
derfor to øvingssett per sjanger per år. Den avgjørende rammeforskjellen mot
UiO: **MAT111 er åpen bok** — læreboken (Adams & Essex, *Calculus*) og kalkulator
er tillatt. Derfor tester oppgavene *teknikk og føring*, ikke formelmemorering:
integraler skal «løses med grunnleggende teknikker, ikke ved oppslag i permen»,
og avskrift av lærebokeksempler gir null. Settets faste dramaturgi: det **åpner
nesten alltid med komplekse tall** (billige poeng), midten er teori (ε-δ,
kontinuitet/deriverbarhet i punkt, invers, eksistensbevis) og integrasjon, og
det **slutter nesten alltid med en anvendt differensiallikning** med realistisk
kontekst. Fra 2019 sies det eksplisitt at **riktig fremgangsmåte gir godt med
poeng selv uten korrekt sluttsvar** — føringen er det som måles. Denne boka
drilller de 14 dokumenterte sjangrene (A–N) rett mot dette settet, med
løsningsforslag skrevet slik sensor vil se dem.

**Kritiske stil- og notasjonsregler (gjelder HELE boka):**

1. **Vis utregningen — åpen bok forplikter.** Der fasitsvaret står i
   lærebokpermen, krever oppgaven eksplisitt at utledningen vises. Hvert
   løsningsforslag skrives som A-besvarelse: mellomregning ledd for ledd, kort
   verbal begrunnelse, konklusjonssetning med enhet i anvendte oppgaver, markert
   sluttsvar. Aldri «slå opp»-snarveier der teknikk etterspørres.
2. **Teoremer navngis** når de bærer argumentet: skjæringssetningen
   (mellomverdisetningen), sekantsetningen (MVT), Rolles teorem, skviseteoremet
   (begrensetheten $|\cos| \le 1$ skal uttales), ekstremalverdisetningen
   (Max-Min), analysens fundamentalteorem, de Moivre, algebraens
   fundamentalteorem, kompletthetsprinsippet. **L'Hôpitals forutsetninger sjekkes
   og ubestemt form markeres eksplisitt ($[0/0]$, $[\infty/\infty]$) FØR bruk.**
3. **Kvantitative verktøy brukes kvantitativt.** Restledd og feilformler skal gi
   *tallintervaller/skranker*, ikke bare siteres; ved Newton skal krumningen på
   *hele* intervallet mellom startverdi og rot begrunne fortegnet på feilen (å
   sjekke $f''$ i ett punkt er utilstrekkelig — eksplisitt sensormerknad).
4. **Eksistens og entydighet er to separate leveranser** — hyppigste
   sensoranmerkning er at kandidaten leverer det ene og tror begge er levert.
   Boka fører dem alltid som to atskilte steg.
5. **Deriverbarhet i et punkt vises med differansekvotienten**
   $f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}$ — å derivere uttrykket og ta
   grensen er IKKE gyldig bevis. Kjernefellen internaliseres: $f$ kan være
   deriverbar i $a$ selv om $\lim_{x\to a} f'(x)$ ikke finnes
   (oscillasjonsfamilien $x^k\sin/\cos(1/x^m)$). Grense-av-derivert-setningen er
   et lovlig verktøy i motsatt retning når forutsetningene er etablert.
6. **Alternative løsninger honoreres.** Der fasit fører 2–4 likeverdige veier
   (skive vs. skall, separabel vs. integrerende faktor, monotoni vs.
   Rolle-motsigelse, optimal vs. grovere restleddsskranke), viser boka begge og
   markerer «Alternativt:».
7. **Standardføring boka speiler:** $\delta = \min\{1,\ \varepsilon/K\}$-malen;
   $z = re^{i\theta}$-form med kvadrantkontroll (tegn punktet!); integrerende
   faktor $\mu(x) = e^{\int p\,dx}$; substitusjonsboks med $u$, $du$ og nye
   grenser; dokumentert $u/v'$-valg i delvis integrasjon; eksplisitt
   $\lim$-notasjon i uegentlige integraler («sett inn $\infty$» underkjennes);
   konstante løsninger nevnt og avvist mot initialbetingelse i separable
   likninger.
8. **Ærlighet om arkivet.** Kalibreringen bygger på **2003–2020** (arkivet
   stopper der; H2020-fasiten er bildebasert og mangler). **Uendelige rekker
   står i emnebeskrivelsen av 2026, men har 0 arkivforekomster etter 2005** —
   Del 7 dekker dem som pensumpliktig kunne-stoff, og Eksamensvinkel-blokkene
   deres skal si dette rett ut. Byggefasen bør sjekke sett fra 2021+ hvis de
   skaffes, og justere prioriteringen deretter. Flervariabelt stoff (tangentplan,
   kritiske punkter i to variable) er ute av pensum siden ~2007 og skal **ikke**
   inn i boka.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på
bokforsiden):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Komplekse tall | 4 | **82 %, åpningsoppgaven i nesten alle moderne sett** → nivå 1 «perfekt» → 3 teorikapitler + drillkapittel (åpningstempo). |
| 2 | Grenser, kontinuitet og ε-δ | 4 | ε-δ 7/9 siste sett (fast gratisoppgave med føringskrav), grenser/L'Hôpital 68 %, kontinuitetsteori bærer eksistensbevis → nivå 2, tempo perfekt → 3 teori + ε-δ/grensedrill. |
| 3 | Derivasjon i ett punkt og drøfting | 5 | Signaturoppgaven kontinuitet/deriverbarhet i punkt **79 % siste ti år** (nivå 1, eget drillkapittel); implisitt/relaterte rater 7/9 siste, invers 35 %, drøfting/optimering 50 % → nivå 2. |
| 4 | Eksistens, entydighet og tilnærming | 4 | UiBs numerikk-kjede: eksistens+entydighet 7/9 siste + Newton/fikspunkt (nivå 1-kjede) + **Taylor med aktiv restleddsanalyse 74 %** (nivå 1) + induksjon 18 % (kjenne). |
| 5 | Integrasjon | 7 | **Integrasjonsteknikk 97 %** (nivå 1, åpen bok-drill) + uegentlige 53 %, omdreiningsvolum 68 %, trapes/Simpson m. feilformel 38 %, FTC 29 % → slutteksamenens tyngste enkeltdel. |
| 6 | Differensiallikninger | 3 | **97 %, settets faste avslutningsoppgave** → nivå 1 «perfekt» → separabel + lineær teori + modelleringsdrill. |
| 7 | Uendelige rekker | 2 | Pensumpliktig (emnebeskrivelse 2026), men **0 arkivbelegg etter 2005** → nivå 3 «kjenne» → 2 kompakte kapitler med ærlig eksamensvinkel. |
| 8 | Eksamenstrening | 4 | Åpen bok-/føringsstandard-kapittel + 3 komplette 5-timers øvingseksamener (høstprofil, vårprofil, teoritung Knutsen-mal). |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger i temadelene sine** (1.4, 2.4, 3.2, 5.4, 6.3) i stedet
   for i siste del: dette er 68–97 %-gjengangere (komplekse tall, ε-δ,
   signaturoppgaven, integrasjonsteknikk, anvendt difflikning) som må drilles
   rett etter teorien. Del 8 beholder føringsstandarden og øvingseksamenene.
2. **34 kapitler** ligger midt i DNA-vinduet (20–35). To sett per år og et bredt
   sjangerregister (A–N) forsvarer bredden; ingen del er oppblåst.
3. **Kapittel 8.1 (føringsstandard/åpen bok) finnes ikke i DNA-malen**: åpen
   bok-regelen («vis utregningen, ikke slå opp») er MAT111s viktigste
   enkeltregel og går på tvers av alle sjangre — den fortjener samlet trening.
4. **Del 4 samler numerikk-kjeden UiB-signaturt**: eksistens → entydighet →
   Newton → krumningsargument, med Taylor-restledd som beslektet
   skranke­verktøy. Analysen viser at disse leddene ofte er *samme oppgave* ved
   UiB; å samle dem lar drill-kjeden trenes helhetlig.
5. **Del 7 er frekvensstyringens unntak**: 0-frekvenstemaet uendelige rekker
   dekkes fordi gjeldende emnebeskrivelse krever det — men kompakt, nest sist,
   med eksamensvinkel som ærlig sier «ikke arkivbelagt etter 2005; sjekk 2021+».
6. **Quizbanken er teknikk- og begrunnelsessjekk**, ikke ren repetisjon: siden
   MAT111 ikke har flervalgs-midtveis, skrives quizzene som raske
   teknikk-/føringskontroller (velg riktig neste steg, hvilken teknikk passer,
   hvilket teoremnavn bærer argumentet, hvilken begrunnelse mangler) med
   distraktorer bygget på feilkatalogen. Tillegg til DNA-en, ikke avvik.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0:
**A** anvendt førsteordens differensiallikning (avslutningsoppgaven),
**B** integrasjonsteknikk-kjeder,
**C** komplekse tall (åpningsoppgaven),
**D** ε-δ-grensebevis,
**E** kontinuitet og deriverbarhet i ett punkt (signaturoppgaven),
**F** eksistens + entydighet + Newton/fikspunkt-kjeden,
**G** Taylorpolynom med restledd og feilinnkapsling,
**H** omdreiningsvolum og areal,
**I** uegentlige integraler,
**J** numerisk integrasjon med feilestimat (trapes/Simpson),
**K** implisitt derivasjon, tangenter og relaterte rater,
**L** invers funksjon,
**M** funksjonsdrøfting, optimering og grenseteknikk,
**N** induksjonsbevis.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Prosareferanser i innholdet bruker del-basert form («kap. 5.2», «se kap. 4.3»).

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: én åpen bok-eksamen på fem timer

- **id:** `mat111-uib-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT111: én 5-timers åpen bok-eksamen, temafrekvensene, settets faste dramaturgi og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (34 sett, 2003–2020). Skal gjengi: (i) vurderingsformen — én skriftlig skoleeksamen 5 timer (kl. 09–14), 100 % av karakteren, fullt sett både desember og mai med samme profil; **åpen bok** (Adams & Essex + kalkulator); 13–18 likt vektede deloppgaver siden 2009 (~17–23 min per deloppgave); stående instruks «Alle svar skal begrunnes, men begrunnelsene skal være korte», og fra 2019 eksplisitt «riktig fremgangsmåte gir godt med poeng selv uten riktig sluttsvar»; (ii) settets faste dramaturgi: åpner med komplekse tall, midten er teori (ε-δ, kontinuitet/deriverbarhet, invers, eksistens) + integrasjon, avslutter med anvendt differensiallikning/relaterte rater; (iii) temafrekvens-tabellen (differensiallikninger 97 %, integrasjonsteknikk 97 %, komplekse tall 82 %, Taylor/restledd 74 %, omdreiningsvolum 68 %, grenser/L'Hôpital 68 %, kontinuitet/deriverbarhet i punkt 59 % — 79 % siste ti år, uegentlige integraler 53 %, eksistens+entydighet 50 % — 7/9 siste, drøfting/optimering 50 %, ε-δ 44 % — 7/9 siste, implisitt/relaterte rater 44 % — 7/9 siste, Newton 41 %, trapes/Simpson 38 %, invers 35 %, FTC 29 %, induksjon 18 %, fikspunkt 9 %, **uendelige rekker 0 % etter 2005**); (iv) at åpen bok flytter poengene fra memorering til *føring* — avskrift av lærebokeksempler gir null (dokumentert H2016); (v) karakterskillene (se under); (vi) tidsdisiplin: fire Newton-iterasjoner der én er bedt om, eller begge ensidige grenser der ordinær grense holder, stjeler tid.
- **Innholdskontrakt:** Sjangerkatalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger; **prognosen for neste ordinære eksamen** (5 timer, åpen bok, 12–17 likt vektede deloppgaver): åpning med komplekse tall (normalform + røtter + faktorisering); én ε-δ-oppgave; én kontinuitets-/deriverbarhetsoppgave i punkt (skvis/differansekvotient); én invers- eller FTC-oppgave; én eksistens + entydighet + Newton/fikspunkt-kjede; 2–3 integrasjonsteknikk-deloppgaver; ett uegentlig integral; ett omdreiningsvolum med teknikk-krav; trapes/Simpson med feilestimat *eller* Taylor med restleddsintervall (ofte begge); og til slutt en anvendt separabel differensiallikning eller relaterte rater med kontekst. **Ærlighetsforbeholdet:** kalibreringen bygger på 2003–2020; uendelige rekker er pensumpliktige i 2026 uten arkivbelegg — er de reelt tilbake, må ett–to innslag (konvergenstest + Taylorrekke) påregnes; sjekk første sett etter reformen. Karakterskille-listen: **bestått** = kompleks aritmetikk etter oppskrift, standard substitusjon/delvis, separabel likning med gitt modell, trapes/Simpson fra tabell, tangent ved implisitt derivasjon; **midtsjikt** = delbrøk med irreduserbar faktor, ε-δ med min-valg, kontinuerlig utvidelse koblet til $f(a)$, konvergensargument med navngitt majorant, volum med riktig metodevalg, eksistens via navngitt skjæringssetning; **toppsjikt** = differansekvotient-bevis med oscillasjonsfellen, skarpest mulige restleddsskranker med korrekt intervallkonklusjon, Newton/fikspunkt med fullstendig krumnings-/kontraksjonsargument, entydighet (Rolle-motsigelse) i tillegg til eksistens, å se kjedene i oppgavedesignet, domene-/gyldighetsforbehold.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 15 likt vektede deloppgaver på 5 timer — sett opp et tidsbudsjett og avgjør hvilke sjangre du sikrer først» og «avslutningsoppgaven bygger på volumformelen fra en tidligere deloppgave — hva gjør du hvis du ikke klarte den?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten frekvensprioritering; tro at åpen bok betyr mindre trening (det motsatte — teknikk og føring måles); bruke tid på fire iterasjoner der én er bedt om; skrive av lærebokeksempler uten å svare på det som spørres.
- **Quiz: 10 · Flashcards: 10** (frekvenser, dramaturgi, føringsregler, tidsbudsjett)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Komplekse tall *(prioritet: PERFEKT — åpningsoppgaven)*

#### Kapittel 1.1: Komplekse tall: normalform, polarform og geometri

- **id:** `mat111-uib-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Normalform-aritmetikk og polarform begge veier med kvadrantdisiplin — ferdigheten som åpner nesten hvert eneste MAT111-sett.
- **Forkunnskaper (kryssbok):** [ABC-formelen](/bok/1t/1t-2-3) (andregradslikninger), [Radianer og vinkelmål](/bok/r2/r2-4-1) og [Enhetssirkelen og trigonometriske definisjoner](/bok/r2/r2-4-2) (vinkler og eksakte verdier), [Trigonometriske funksjoner og enhetssirkelen](/bok/r1/r1-7-1).
- **Eksamensbelegg:** Sjanger C — komplekse tall er oppgave 1 i så godt som alle moderne sett (28/34, 8/9 siste periode; unntak H2018). Normalform-tempo og polarform begge veier er de faste billige poengene. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\mathbb{C}$ med $i^2 = -1$; realdel/imaginærdel; addisjon/multiplikasjon; **divisjon via konjugering** (multipliser med $\bar z$); konjugat $\bar z$ og regnereglene; modulus $|z| = \sqrt{a^2+b^2}$ og $z\bar z = |z|^2$; polarform $z = re^{i\theta} = r(\cos\theta + i\sin\theta)$ **begge veier** — normalform → polar (tegn punktet i planet FØR argumentet fastsettes; kvadrantbevissthet er fasitpraksis) og polar → normalform (skriv helt ut når det spørres); argumentkonvensjon og reduksjon mod $2\pi$; Eulers formel (bruk); geometriske mengder i planet: $|z-a| = r$ (sirkel), $|z-a| = |z-b|$ (midtnormal), $|z| = r$, samt likninger der både $z$ og $\bar z$ inngår. Alt til aktiv bruk i tempo.
- **Oppgavesjangre:** C. Mønstereksempel: «Skriv $z = -\sqrt{3} + i$ på polarform, og regn ut $z/\bar z$ på normalform.» Mønstereksempel (mengde): «Beskriv og skisser mengden av $z$ med $|z - 2i| = |z + 2|$.»
- **Typiske feil:** Argument i feil kvadrant (arctan brukt blindt uten å tegne punktet); vinkel ikke redusert mod $2\pi$; dividere uten å konjugere; blande $|z|^2$ og $z^2$; polarsvar ikke skrevet ut til normalform når oppgaven ber om det (koster full pott — sensormerknad H2016).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: de Moivre: potenser og n-te røtter

- **id:** `mat111-uib-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-1-1`
- **kapitteltype:** teori
- **description:** Høye potenser med vinkelreduksjon og alle n-te røtter av $z^n = c$ — den faste andre og tredje deloppgaven i åpningen.
- **Forkunnskaper (kryssbok):** Kap. 1.1; [Trigonometriske formler](/bok/r2/r2-4-6) (eksakte verdier for standardvinkler).
- **Eksamensbelegg:** Sjanger C. de Moivre-potens (typen $z^n$ med vinkelreduksjon mod $2\pi$) og alle n-te røtter av $z^n = c$ er faste gjengangere i åpningsblokken. Prioritet: **perfekt**.
- **Innholdskontrakt:** de Moivre: $(re^{i\theta})^n = r^n e^{in\theta}$ — oppskrift for høye potenser: polarform først, multipliser vinkelen, **reduser mod $2\pi$**, tilbake til normalform hvis spurt; $n$-te røtter: $z^n = w$ har nøyaktig $n$ løsninger $|z| = |w|^{1/n}$, $\arg z = (\arg w + 2k\pi)/n$, $k = 0,\dots,n-1$ — jevnt fordelt på en sirkel, start i prinsipalroten (skal kunne tegnes/beskrives); enhetsrøtter som spesialtilfelle; bikvadratiske likninger ($z^4 + \dots$) via substitusjon. Alt aktiv bruk.
- **Oppgavesjangre:** C. Mønstereksempel: «Regn ut $(1 - i)^{10}$ på normalform.» Mønstereksempel (røtter): «Finn alle løsninger av $z^3 = -8i$, skriv dem på normalform, og marker dem i planet.»
- **Typiske feil:** Glemme $2k\pi$-leddet (finner bare én rot); glemme å redusere vinkelen ved høye potenser; ta $n$-te rot av modulus feil; dele argumentet uten å legge til $2k\pi$ først.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: Komplekse likninger og reell/kompleks faktorisering

- **id:** `mat111-uib-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-1-2`
- **kapitteltype:** teori
- **description:** Andregradslikninger med negativ diskriminant, konjugatrotsetningen og veien fra kjent rot til full faktorisering over både $\mathbb{C}$ og $\mathbb{R}$.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2; [Polynomer og polynomdivisjon](/bok/r1/r1-1-1) (divisjonsalgoritmen), [ABC-formelen](/bok/1t/1t-2-3).
- **Eksamensbelegg:** Sjanger C (del av åpningen): andregradslikning med negativ diskriminant, og faktorisering av reelle polynomer over $\mathbb{C}$ (lineære faktorer) og over $\mathbb{R}$ (lineære + irreduserbare kvadratiske). Full pott krever **begge** faktoriseringer når begge kreves. Prioritet: **perfekt**.
- **Innholdskontrakt:** Andregradsformelen med negativ diskriminant → røtter på både $a + ib$- og polarform; **konjugatrotsetningen**: for reelle koeffisienter er $\bar z_0$ rot når $z_0$ er det (med bevisidé) — konjugatpar multipliseres til reell kvadratisk faktor $(z - z_0)(z - \bar z_0) = z^2 - 2\,\mathrm{Re}(z_0)z + |z_0|^2$; polynomdivisjon for restfaktoren (verifiser med innsetting); **algebraens fundamentalteorem** (kun bruk: gradtall = antall røtter med multiplisitet, eksplisitt pensum); **både kompleks og reell faktorisering skrives ut**; typemønster «vis at $z_0$ er rot → finn begge faktoriseringene». Kobling til kap. 1.2: faktorisering av $z^n + c$ via $n$-te røttene.
- **Oppgavesjangre:** C. Mønstereksempel: «Løs $z^3 = -1$, skriv løsningene på normalform, og faktoriser $z^3 + 1$ både over $\mathbb{C}$ og over $\mathbb{R}$.» Mønstereksempel: «Vis at $1 - 2i$ er rot i $p(z) = z^3 - 3z^2 + 7z - 5$, og finn begge faktoriseringene.»
- **Typiske feil:** Oppgi bare den ene faktoriseringen når begge kreves; glemme den konjugerte roten; regnefeil i polynomdivisjonen (verifiser ved innsetting); bruke konjugatrotsetningen på polynom med komplekse koeffisienter (gjelder ikke).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.4: Drill: komplekse tall som åpningsoppgave

- **id:** `mat111-uib-1-4` · **number:** 1.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat111-uib-1-3`
- **kapitteltype:** drill
- **description:** Hele komplekstall-repertoaret som gjennomført åpningsoppgave — normalform, de Moivre, røtter, likning og faktorisering, med full føring.
- **Eksamensbelegg:** Sjanger C, alle varianter samlet: polarform begge veier (åpner settet), de Moivre-potens, n-te røtter, andregradslikning, reell/kompleks faktorisering, geometrisk mengde. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter: (1) polarform: tegn punktet → kvadrant → $r$ → $\theta$ → skriv ut til normalform hvis spurt; (2) potens: polar → multipliser vinkel → reduser mod $2\pi$ → normalform; (3) røtter: $2k\pi$-lista, prinsipalrot først; (4) likning: andregradsformel eller polarform etter form; (5) faktorisering: konjugatpar → reell kvadratisk faktor → polynomdivisjon → begge faktoriseringer; (6) mengde: oversett $|z-a|$ til avstand. **Gjennomregnet eksamens-åpning** (én sammensatt oppgave 1a–1f) med sensor-margnotater om hva som gir uttelling ved hvert steg og hvor kjedene ligger (faktorisering fra 1c gjenbrukt i integralet senere). 12–15 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** C, alle varianter. Mønstereksempel: «(a) Skriv $z = 1 + i\sqrt3$ på polarform. (b) Regn $z^6$. (c) Finn alle tredjerøtter av $z$. (d) Faktoriser $w^3 - z$ over $\mathbb{C}$.»
- **Typiske feil:** Alle kvadrant- og $2k\pi$-fellene fra 1.1–1.3; polarsvar ikke skrevet ut til normalform; bare én faktorisering levert; tidsfellen (lange utregninger der polarform gir svaret på tre linjer).
- **Quiz: 18 · Flashcards: 6**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Grenser, kontinuitet og ε-δ

#### Kapittel 2.1: ε-δ-grensebevis: faktoriser, avgrens, velg δ = min

- **id:** `mat111-uib-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Den formelle grensedefinisjonen brukt kvantitativt — UiBs faste «gratisoppgave med føringskrav», som skiller kandidater på ren føring.
- **Forkunnskaper (kryssbok):** [Grenseverdi](/bok/r1/r1-3-1) (intuitiv grenseforståelse), [Rasjonale uttrykk](/bok/1t/1t-1-6) (algebraisk faktorisering).
- **Eksamensbelegg:** Sjanger D — 15/34 totalt, men **7/9 siste ni sett** (fast innslag nå). Polynomer av grad 2–3 er standard; $e^{-1/x^2}$ (H2012) og $\sqrt{|x|}$ (V2016) er de vanskeligste variantene. R-ε-varianten (mot uendelig) forekommer i vårsett. Sensor vurderer *føringen*: minstekravet er å eksplisitt vise at definisjonens betingelser er oppfylt. Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** ε-δ-definisjonen av $\lim_{x\to a} f(x) = L$ i full kvantorform, med R-ε-varianten mot uendelig ($x\to\infty$: finn $R = R(\varepsilon)$); **bevismalen (aktiv)**: (1) skriv definisjonen, (2) faktoriser $|f(x)-L| = |x-a|\cdot|\text{rest}|$, (3) avgrens restfaktoren på et kontrollintervall (typisk $|x-a| < 1$ gir en skranke $K$), (4) **velg $\delta = \min\{1,\ \varepsilon/K\}$**, (5) verifiser implikasjonen. Fasit påpeker at flere ulike gyldige $\delta$ finnes og godtas. Beslektet teorivariant (H2019): utled 0/0-kvotientgrensen direkte fra derivertdefinisjonen og grensesetningene — definisjonsbruk under kontrollerte forhold.
- **Oppgavesjangre:** D. Mønstereksempel: «Bruk den formelle definisjonen av grenseverdi til å vise at $x^2 + x + 1 \to 3$ når $x \to 1$.» Mønstereksempel (uendelig): «Vis med definisjonen at $\frac{2x+1}{x} \to 2$ når $x\to\infty$.»
- **Typiske feil:** Kvantorrekkefølgen byttet ($\delta$ valgt før $\varepsilon$); glemme $\min\{1,\cdot\}$-grepet når restfaktoren må avgrenses; ikke vise implikasjonen etter valget; blande «grensen finnes» med «funksjonsverdien finnes».
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.2: Grenseteknikk: L'Hôpital og alle ubestemte former

- **id:** `mat111-uib-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-2-1`
- **kapitteltype:** teori
- **description:** Regneverktøyet for grenseoppgavene (68 %): alle ubestemte former, med formsjekk-disiplinen sensor krever før L'Hôpital.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Derivasjonsregler](/bok/r1/r1-4-1) (L'Hôpital krever derivasjon), [Potenser og logaritmer](/bok/r1/r1-1-2) (logaritmetriks for $1^\infty$).
- **Eksamensbelegg:** Sjanger M (grensedelen) — egne grenseoppgaver 23/34; L'Hôpital dukker dessuten opp kjedet i kontinuitets- og FTC-oppgaver. Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** Standardgrensene (aktiv bruk): $\sin x/x \to 1$, veksthierarkiet $\ln x \ll x^p \ll e^x$, $x\ln x \to 0$; **L'Hôpital med disiplin**: ubestemt form markeres eksplisitt ($[0/0]$ eller $[\infty/\infty]$) FØR hver anvendelse, og forutsetningene sjekkes — gjentatt bruk krever ny markering; alle ubestemte former og omskrivingene: $0/0$, $\infty/\infty$ (direkte), $0\cdot\infty$ (flytt til nevner), $\infty-\infty$ (fellesnevner eller **konjugattriks**), $1^\infty$, $0^0$, $\infty^0$ (via $\lim\ln$ + eksponentiering); når L'Hôpital IKKE hjelper (bruk standardgrense/skvis); **skviseteoremet** med uttalt begrensethet ($|\cos|\le 1$).
- **Oppgavesjangre:** M. Mønstereksempel: «Beregn $\lim_{x\to\infty}\left(\sqrt{x^2+4x} - x\right)$ med full føring.» Mønstereksempel: «$\lim_{x\to 0^+}(1+3x)^{1/x}$» (logaritmetriks; identifiser $1^\infty$ først).
- **Typiske feil:** L'Hôpital uten å markere/sjekke ubestemt form; L'Hôpital på ikke-ubestemt uttrykk; angripe $1^\infty$/$\infty-\infty$ direkte i stedet for via logaritme/konjugat; glemme å eksponentiere tilbake; regne langt der veksthierarkiet gir svaret.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.3: Kontinuitet: skjæringssetningen og ekstremalverdisetningen

- **id:** `mat111-uib-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-2-1`
- **kapitteltype:** teori
- **description:** Kontinuitet på intervaller og de to eksistenssetningene — grunnlaget for eksistens+entydighet-kjeden i Del 4 og for kontinuerlig utvidelse.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Kontinuitet](/bok/r1/r1-3-2) (intuitivt kontinuitetsbegrep).
- **Eksamensbelegg:** Kontinuitetsteori bærer eksistensbevis-sjangeren F (17/34, 7/9 siste). Skjæringssetningen med navngiving er fast bevisdelpunkt; ekstremalverdisetningen brukes «uten regning» i drøfting (kap. 3.5). Kontinuerlig utvidelse (bestem $c$ som fyller hullet — regn grensen og **koble til $f(a)$**) inngår i sjanger E. Prioritet: **kunne**.
- **Innholdskontrakt:** Kontinuitet i punkt og på intervall; kontinuitet av sammensetninger/kombinasjoner (bruk); ensidig kontinuitet i skjøtepunkter (regnes hver for seg — forberedelse til kap. 3.1–3.2); **skjæringssetningen** (mellomverdisetningen) med bevismal (aktiv): fortegnsskifte i to punkter (grove overslag godtas) → pek på kontinuitet → **navngi setningen** → konkluder; varianten «minst én løsning» og finpuss «nøyaktig én» (skjæring + monotoni, foregriper Del 4); **ekstremalverdisetningen** (Max-Min): kontinuerlig på lukket, begrenset intervall ⇒ globale ekstremalverdier antas — formulering + bruk, ikke bevis; **kontinuerlig utvidelse**: regn grensen (L'Hôpital/skvis) og koble eksplisitt til $f(a)$ (å bare regne grensen gir trekk — sensormerknad H2016).
- **Oppgavesjangre:** F-forberedelse + E-forberedelse. Mønstereksempel: «Vis at $x^5 = 3 - 2x$ har minst én løsning i $[0,2]$.» Mønstereksempel: «Bestem $c$ slik at $f(x) = \frac{\sin 2x}{x}$ for $x\neq 0$, $f(0)=c$ blir kontinuerlig.»
- **Typiske feil:** Glemme å nevne kontinuitet før skjæringssetningen brukes; ikke navngi setningen; kontinuitet «vist» ved bare å regne grensen uten kobling til $f(a)$; ekstremalverdisetningen brukt på åpent/ubegrenset intervall; sjekke bare én side i skjøtepunkt.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.4: Drill: ε-δ-malen og grensetempo

- **id:** `mat111-uib-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `mat111-uib-2-2`, `mat111-uib-2-3`
- **kapitteltype:** drill
- **description:** ε-δ-føringen til automatikk og alle ubestemte former i tempo — gratispoengene i midten av settet skal sitte.
- **Eksamensbelegg:** Dekker sjanger D (7/9 siste sett) og grensedelen av M (23/34). ε-δ er «gratisoppgave med føringskrav»; grensetempo bærer flere deloppgaver. Prioritet: **kunne** (tempo: perfekt).
- **Innholdskontrakt:** ε-δ-oppskriften som algoritme (faktoriser → avgrens → $\delta=\min$ → verifiser) på polynomer grad 2–3, rasjonale uttrykk og R-ε-varianten; **beslutningstre for grenser**: (1) sett inn — ubestemt? (2) klassifiser formen; (3) velg våpen (standardgrense / konjugat / logaritme / L'Hôpital / veksthierarki / skvis). **Gjennomregnet eksamensblokk** (én ε-δ-oppgave med sensor-margnotat om føringsminstekravet + tre grenser som dekker $[0/0]$, $1^\infty$ og $\infty-\infty$). 12–15 oppgaver på eksamensnivå med full føring.
- **Oppgavesjangre:** D + M. Mønstereksempel: «Vis med definisjonen at $3x^2 - 1 \to 11$ når $x\to 2$, og velg et konkret $\delta$ for $\varepsilon = 0{,}1$.»
- **Typiske feil:** Alle kvantor- og min-fellene fra 2.1; L'Hôpital-refleksen der omskriving er raskere; formen ikke identifisert før L'Hôpital; tidsfellen.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Derivasjon i ett punkt og drøfting

#### Kapittel 3.1: Deriverbarhet i ett punkt: differansekvotient og skvis

- **id:** `mat111-uib-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-2-2`, `mat111-uib-2-3`
- **kapitteltype:** teori
- **description:** Den deriverte som grense av differansekvotienten — det eneste gyldige beviset i deriverbarhetsspørsmål, og fundamentet for signaturoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 2.2–2.3; [Derivasjonens definisjon](/bok/r1/r1-3-3) og [Gjennomsnittlig og momentan vekstfart](/bok/r1/r1-2-5).
- **Eksamensbelegg:** Sjanger E — differansekvotienten er obligatorisk verktøy (drilles i kap. 3.2). Grense-av-derivert-setningen (H2017-bevis) og deriverbar ⇒ kontinuerlig hører hit. Prioritet: **perfekt** (som verktøy).
- **Innholdskontrakt:** $f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$ (og sekantvarianten $\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$) — begge former, geometrisk tolkning; deriverbar ⇒ kontinuerlig (kort bevis, eksamensaktuelt) og at implikasjonen ikke snus ($|x|$-moteksemplet); ensidige deriverte i skjøtepunkter; direkte definisjonsberegninger for $\sqrt{x}$, $1/x$; **grense-av-derivert-setningen** (motsatt retning, lovlig verktøy): er $f$ kontinuerlig i $a$ og $\lim_{x\to a} f'(x) = b$ finnes, så er $f'(a) = b$ — bevisskisse via sekantsetningen/L'Hôpital, med eksplisitt regel for når hvert kriterium gjelder; når differansekvotienten MÅ brukes (stykkevis, oscillasjonsfamilien) vs. når derivasjonsregler er lov.
- **Oppgavesjangre:** E (fundament). Mønstereksempel: «Bruk definisjonen av den deriverte til å finne $f'(4)$ når $f(x)=\sqrt{x}$.»
- **Typiske feil:** «Bevise» deriverbarhet ved å derivere formelen og sette inn (ugyldig der definisjonen etterspørres — emnets mest dokumenterte felle); glemme å sjekke kontinuitet først i skjøtepunkt; regne bare én ensidig grense.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.2: Drill: signaturoppgaven — kontinuitet og deriverbarhet i punkt

- **id:** `mat111-uib-3-2` · **number:** 3.2 · **estimatedMinutes:** 90 · **prerequisites:** `mat111-uib-3-1`
- **kapitteltype:** drill
- **description:** Settets teoritunge signaturoppgave: $x^k\sin/\cos(1/x^m)$-familien, skviseargumentet, differansekvotienten og oscillasjonsfellen — den tydeligste karakterskilleren.
- **Eksamensbelegg:** Sjanger E — 20/34, **79 % siste ti år**. To hovedformer: (i) kontinuerlig utvidelse med kobling til $f(a)$; (ii) deriverbarhet i punkt via differansekvotient. Kjernefellen (sensormerknad H2016, eksamensstoff H2004): $f$ kan være deriverbar selv om $\lim f'(x)$ ikke finnes. H2017 hadde motsatt retning (grense-av-derivert). Skjøtevarianten: bestem $a,b$ for kontinuitet+deriverbarhet. Prioritet: **perfekt** — dette skiller toppkarakterene.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) **Kontinuitet**: vis $\lim_{x\to a} f(x) = f(a)$ — for oscillasjonsfamilien med **skviseargument der begrensetheten uttales** ($|\cos(1/x^m)|\le 1 \Rightarrow -|x|^k \le x^k\cos(1/x^m)\le |x|^k$), for skjøter med ensidige grenser hver for seg; (2) **Deriverbarhet**: sett opp differansekvotienten $\lim_{h\to 0}\frac{f(h)-f(0)}{h}$ og avgjør med skvis/standardgrenser — ALDRI via derivertformelen; (3) **Oscillasjonsfellen**: $f$ kan være deriverbar i $a$ selv om $\lim_{x\to a} f'(x)$ ikke finnes — standard moteksempel $x^2\sin(1/x)$ regnes helt ut (deriverbar overalt, $f'$ diskontinuerlig i 0); (4) **Grense-av-derivert-setningen** som lovlig motsatt verktøy (fra kap. 3.1); (5) **Skjøteparameter-varianten**: én kontinuitetslikning + én derivertlikning per skjøtepunkt, løs systemet; (6) **eksponentregnskapet** for familien ($k$ mot $m$: når gir skvisen kontinuitet, når deriverbarhet, når kontinuerlig derivert) satt opp som tabell. Gjennomregnet eksamenscase med sensor-margnotater. 10–14 oppgaver på eksamensnivå som varierer $k$, $m$, sin/cos, skjøtetype og spørsmålsstilling.
- **Oppgavesjangre:** E. Mønstereksempel: «La $f(x) = x^3\cos(1/x^2)$ for $x\neq 0$, $f(0)=0$. (a) Vis at $f$ er kontinuerlig i 0. (b) Avgjør om $f$ er deriverbar i 0. (c) Er $f'$ kontinuerlig i 0?»
- **Typiske feil:** Konkludere «ikke deriverbar» fordi $\lim f'(x)$ ikke finnes (KJERNEFELLEN — eksplisitt sensoradvarsel); derivere formelen i stedet for differansekvotienten; skvis uten å uttale begrensetheten; hoppe over én ensidig grense; blande verdi- og derivertbetingelsen i parametervarianten; kontinuitet «vist» uten kobling til $f(a)$.
- **Quiz: 18 · Flashcards: 10**

#### Kapittel 3.3: Implisitt derivasjon, tangenter og relaterte rater

- **id:** `mat111-uib-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-3-1`
- **kapitteltype:** teori
- **description:** Implisitt derivasjon med punktverifikasjon, andrederiverte fra relasjonen og relaterte rater med fortegnstolket konklusjon.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Kjerneregelen](/bok/r1/r1-4-3), [Produktregelen og kvotientregelen](/bok/r1/r1-4-4), [Relaterte rater](/bok/r1/r1-4-7), [Derivasjon av trigonometriske funksjoner](/bok/r2/r2-4-9).
- **Eksamensbelegg:** Sjanger K — 15/34, **7/9 siste ni sett** (stigende). Tre former: (i) tangent ved implisitt derivasjon (verifiser at punktet ligger på kurven — glemmes ofte); (ii) $y''$ i et punkt uten å løse likningen; (iii) relaterte rater med geometrisk modell. Prioritet: **kunne**.
- **Innholdskontrakt:** (i) Implisitt derivasjon: **verifiser at punktet ligger på kurven** (settes inn), deriver implisitt, løs for $y'$, skriv tangentlikning; (ii) andrederivert av relasjonen: derivér relasjonen to ganger, sett inn kjente $x,y,y'$; (iii) **relaterte rater-oppskrift (aktiv)**: figur + navngi variabler → modeller sammenhengen (Pytagoras-snor, $\tan\theta$-synsvinkel, veinettkurve) → deriver implisitt mhp. $t$ → sett inn øyeblikkstall → **tolk fortegn og enhet i konklusjonssetningen**. Fasit viser gjerne 3–4 likeverdige veier (implisitt derivasjon, kjerneregel-oppsett, startverdiproblem).
- **Oppgavesjangre:** K. Mønstereksempel: «Kurven $x^3 + y^3 = 4x + 4y$ beskriver et veinett. En bil passerer $(0,2)$ med $y'(0)=6$ — finn $x'(0)$.» Mønstereksempel: «En ballong stiger rett opp 4 m/s; en observatør står 80 m unna. Hvor fort øker synsvinkelen når ballongen er 60 m over bakken?»
- **Typiske feil:** Sette inn tallene FØR derivasjonen (låser variablene); glemme kjernefaktoren $y'$/$dx/dt$ i implisitt derivasjon; svar uten fortegns-/enhetstolkning; ikke verifisere at punktet ligger på kurven; feil rettvinkelmodell fra figuren.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.4: Invers funksjon: eksistens, uttrykk og derivert av invers

- **id:** `mat111-uib-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-3-1`
- **kapitteltype:** teori
- **description:** Monotoni-begrunnet eksistens, uttrykk med riktig definisjonsmengde og derivert-av-invers-formelen for tangenter til den inverse.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Omvendte funksjoner](/bok/r1/r1-2-2), [Derivasjon av omvendte funksjoner](/bok/r1/r1-4-5), [Potenser og logaritmer](/bok/r1/r1-1-2).
- **Eksamensbelegg:** Sjanger L — 12/34. Eksistens via strengt monotoni ($f'$ med fast fortegn, evt. via Rolle/sekantsetningen); uttrykk for $f^{-1}$ **med riktig definisjonsmengde** (fasit gir «pluss i margen»); derivert-av-invers-formelen for tangenter. Subtile varianter: største intervall der $f$ er inverterbar (V2020); moteksempel når definisjonsmengden er usammenhengende (V2010). Prioritet: **kunne**.
- **Innholdskontrakt:** Eksistens: strengt monotoni via fortegn på $f'$ — begrunnelsen kan også gå via sekantsetningen/Rolle (to like verdier ville gitt $f'=0$); finn uttrykk for $f^{-1}$ (løs $y=f(x)$ for $x$, **med definisjonsmengde/verdimengde**); **derivert av invers**: $(f^{-1})'(b) = 1/f'(a)$ der $f(a)=b$ — oppskriften «finn $a$ først»; tangent til den inverse; største inverterbarhets­intervall via fortegnsskjema for $f'$; hvorfor $f'>0$ ikke er nok på usammenhengende definisjonsmengde.
- **Oppgavesjangre:** L. Mønstereksempel: «Vis at $f(x)=\ln(x^2-2x+2)$ er én-til-én på $[1,\infty)$, og finn en formel for $f^{-1}$.» Mønstereksempel: «$f(x)=x^5+2x+1$; finn $(f^{-1})'(4)$.»
- **Typiske feil:** Regne $1/f'(b)$ i stedet for $1/f'(a)$ (glemme «finn $a$ først»); oppgi $f^{-1}$ uten definisjonsmengde; påstå inverterbarhet fra $f'>0$ på usammenhengende mengde; glemme verdimengdekravet i røtter/logaritmer.
- **Quiz: 15 · Flashcards: 16**

#### Kapittel 3.5: Funksjonsdrøfting, optimering og eksistens av ekstremalverdier

- **id:** `mat111-uib-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-2-2`, `mat111-uib-3-1`
- **kapitteltype:** teori
- **description:** Komplett drøfting med dokumentert fortegnsskjema og begrunnet eksistens av globale ekstremalverdier — den hyppig påpekte svakheten hos kandidatene.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 3.1; [Funksjonsdrøfting](/bok/r1/r1-4-6), [Globale ekstremalpunkter](/bok/r1/r1-4-8), [Optimering i praksis](/bok/r1/r1-4-9), [Fortegnslinjer](/bok/1t/1t-4-3).
- **Eksamensbelegg:** Sjanger M (drøfting/optimering) — 17/34. Full drøfting med fortegnsskjema for $f'$ og $f''$; **eksistensen av globale ekstremalverdier skal begrunnes** (Max-Min på lukket intervall; grenser mot $\pm\infty$ ellers) — mangelfulle begrunnelser er hyppig påpekt (H2016). Grafgjenkjenning (koble $f,f',f''$) går igjen. Optimering fra geometri krever modellering + kandidatsjekk. Prioritet: **kunne**.
- **Innholdskontrakt:** $f'$ og $f''$ med **fortegnsskjema som dokumentasjon**; lokale/globale ekstremalpunkter (randpunkter!); konveksitet/vendepunkter via $f''$ (fortegnsskifte kreves); asymptoter; skisse; **eksistensbegrunnelse for globale ekstremalverdier** (ekstremalverdisetningen på lukket, begrenset intervall — fra kap. 2.3; ellers grenser mot $\pm\infty$); grafgjenkjenning; optimering fra geometri (innskrevet rektangel, kraftlinje land/sjø, korteste bro): målfunksjon fra bibetingelse → deriver → kandidater → **globalt-argument**.
- **Oppgavesjangre:** M. Mønstereksempel: «Drøft $f(x)=x^3 e^{-x}+2$: monotoni, globale ekstremalverdier (finnes de?), krumning og skisse.» Mønstereksempel: «Finn det innskrevne rektanglet med størst areal under $y = 4 - x^2$.»
- **Typiske feil:** Konklusjon uten fortegnsskjema (føringstrekk); globale ekstremalpunkter uten eksistensbegrunnelse (grense mot $-\infty$ overses); vendepunkt fra $f''=0$ uten fortegnsskifte; optimering uten globalt-argument; randpunkter glemt.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Eksistens, entydighet og tilnærming *(UiBs numerikk-kjede)*

#### Kapittel 4.1: Middelverdisetningen, Rolle og eksistens + entydighet

- **id:** `mat111-uib-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-2-3`, `mat111-uib-3-1`
- **kapitteltype:** teori
- **description:** Skjæringssetningen gir eksistens, monotoni eller Rolle-motsigelse gir entydighet — de to leveransene sensor krever hver for seg.
- **Forkunnskaper (kryssbok):** Kap. 2.3, 3.1; [Funksjonsdrøfting](/bok/r1/r1-4-6) (monotoni).
- **Eksamensbelegg:** Sjanger F (eksistens/entydighet-delen) — 17/34, **7/9 siste ni sett** (stigende). Hyppigste sensoranmerkning: kandidaten leverer eksistens og tror entydighet er levert. Sekantsetningen/Rolle brukes også til ulikhetsbevis ($\arctan x < x$) og Lipschitz-estimat. Prioritet: **perfekt** (som kjede-fundament).
- **Innholdskontrakt:** Rolles teorem og sekantsetningen (MVT) — presise formuleringer, geometrisk tolkning, bevisidé (Rolle via ekstremalverdisetningen; MVT via hjelpefunksjon fra Rolle); **eksistens–entydighet-malen (aktiv)**: (i) *eksistens* — skjæringssetningen (fortegnsskifte + kontinuitet + navn); (ii) *entydighet* — monotoni ($f'$ med fast fortegn) ELLER Rolle-motsigelse (to nullpunkter ⇒ $f'(c)=0$, motsigelse). Fasit viser ofte begge som likeverdige; **hjelpefunksjonsteknikk** for «vis at det finnes $c$ med [likning i $f,f',f'']$»: konstruer $g$, sjekk forutsetningene, navngi Rolle; MVT som ulikhetsmaskin.
- **Oppgavesjangre:** F. Mønstereksempel: «Vis at $x^3 e^x = 1$ har nøyaktig én løsning på $\mathbb{R}$, og at den ligger i $(0,1)$.» Mønstereksempel: «Bruk sekantsetningen til å vise at $\arctan x < x$ for $x>0$.»
- **Typiske feil:** Levere eksistens og tro entydighet er levert (eller omvendt) — kjernefeilen; ikke navngi setningen; entydighet påstått uten monotoni- eller Rolle-argument; forutsetningene (kontinuitet/deriverbarhet) usjekket før Rolle.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.2: Newtons metode og fikspunktiterasjon

- **id:** `mat111-uib-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-4-1`
- **kapitteltype:** teori
- **description:** Iterasjonen, krumningsargumentet for over-/underestimat på hele intervallet, og fikspunkt-kontraksjonen — det numeriske leddet i UiBs signaturkjede.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Newtons metode](/bok/r1/r1-3-5).
- **Eksamensbelegg:** Sjanger F (Newton/fikspunkt-delen) — Newton 14/34, fikspunkt 3/34 (men eksplisitt i emnebeskrivelsen). Karakterskilleren: **avgjør om tilnærmingen er for stor eller for liten** med krumningsargument på *hele* intervallet mellom startpunkt og rot (å sjekke $f''$ i ett punkt er utilstrekkelig — sensormerknad H2016). H2019 krevde fullt monotont konvergensbevis (induksjon + krumning). Prioritet: **perfekt** (kjede) / fikspunkt **kjenne**.
- **Innholdskontrakt:** Newtons iterasjonsformel $x_{n+1} = x_n - f(x_n)/f'(x_n)$, geometrisk tolkning (tangentens nullpunkt); regn 1–4 steg; **krumningsargument for over-/underestimat**: konveksitet/konkavitet på hele intervallet mellom $x_0$ og rot avgjør fortegnet på feilen (tabell over de fire kombinasjonene $f''$-fortegn × side); Newton-konvergensbevis (induksjon + krumning, H2006/H2019-nivå — merk «kunne»); **fikspunktiterasjon**: vis at løsningen er fikspunkt for $g$, iterér, forklar konvergens via kontraksjonsvilkåret $|g'|<1$ (via sekantsetningen), spiral-/trappeskisse; sammenhengen $P_1 = $ tangent $=$ én Newton-iterasjon (kobling til kap. 4.3).
- **Oppgavesjangre:** F. Mønstereksempel: «Vis at $x^3 e^x = 1$ har én løsning i $(0,1)$; utfør to Newton-steg fra $x_0=1$, og avgjør med et krumningsargument om $x_2$ er for stor eller for liten.» Mønstereksempel: «Forklar hvorfor løsningen er fikspunkt for $g(x)=e^{-x/3}$, iterér to ganger fra $x_0=0$, og skisser om tilnærmingen er for stor eller for liten.»
- **Typiske feil:** Krumning sjekket i ett punkt i stedet for på hele intervallet (sensormerknad H2016); fortegnet på feilen ikke vurdert; fire iterasjoner der én er bedt om (tidsfelle); fikspunkt-konvergens påstått uten $|g'|<1$-argument.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.3: Taylorpolynom med Lagrange-restledd og feilinnkapsling

- **id:** `mat111-uib-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `mat111-uib-4-1`
- **kapitteltype:** teori
- **description:** Taylorpolynom til tallnærming pluss aktiv restleddsanalyse: skranker → intervall → fortegn på feilen. En hovedsjanger ved UiB.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Derivasjonsregler](/bok/r1/r1-4-1), [Kjerneregelen](/bok/r1/r1-4-3).
- **Eksamensbelegg:** Sjanger G — 25/34 (hovedsjanger ved UiB; marginal ved UiO). Skriv $P_n$ om et «pent» punkt, bruk til tallnærming ($\sqrt[3]{11}$, $\sqrt{10}$, $\ln 2$), og **bruk Lagrange-restleddet aktivt**: skranker $K \le f^{(n+1)}(c) \le L$ → lever et *intervall* som fanger sann verdi, eller avgjør fortegnet på feilen. Optimal (skarpest) skranke gir full pott; grovere gir delvis. Skjerpede varianter: rekursivt definerte koeffisienter (H2013), innkapsling $P_3 + Gx^4 < f < P_3 + Hx^4$ (V2018), minste intervall for $f(3)$ gitt skranker på $f''$ (H2018). Prioritet: **perfekt**.
- **Innholdskontrakt:** Taylorpolynom $P_n(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k$ om «pent» punkt (typisk $a\in\{1,4,8,9\}$, grad 1–3); **Lagrange-restleddet** $R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ for en $c$ mellom $a$ og $x$; **aktiv skrankeanalyse**: finn $\min$/$\max$ av $f^{(n+1)}$ på intervallet → **intervall** $[P_n + \text{nedre skranke},\ P_n + \text{øvre skranke}]$ som fanger sann verdi, eller fortegnsbestemmelse (for stor/for liten); rekursivt definerte koeffisienter fra en likning ($f'' = x f$-typen); sammenhengen $P_1 = $ tangent $=$ én Newton-iterasjon. Skarpest mulig skranke er poenget — grov skranke får delvis.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn Taylorpolynomet av grad 2 til $\sqrt[3]{x}$ om $x=8$, bruk det til å tilnærme $\sqrt[3]{11}$, og bruk restleddet til å angi et minst mulig intervall som inneholder den sanne verdien.»
- **Typiske feil:** Restleddet sitert men ikke brukt (tilnærming uten feilskranke); grove skranker der skarpe var tilgjengelige; fortegnet på feilen ikke vurdert; feil $c$-intervall; regnefeil i $f^{(n+1)}$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Induksjon på n-te derivert

- **id:** `mat111-uib-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `mat111-uib-4-3`
- **kapitteltype:** teori
- **description:** Full induksjonsstruktur på formelen for den n-te deriverte av en logaritme- eller potensfunksjon — lavfrekvent, men billig å drille og gjenoppstått H2018.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Induksjon](/bok/r1/r1-9-2) og [Induksjonsbevis](/bok/r2/r2-1-6).
- **Eksamensbelegg:** Sjanger N — 6/34 (lav, men H2018 viser at sjangeren gjenoppstår). Nesten alltid formelen for $f^{(n)}$ av $\ln(2x+1)$, $1/(1+x)^2$, $\ln x$: basissteg + induksjonstrinn med eksplisitt derivasjon + full struktur. Prioritet: **kjenne**.
- **Innholdskontrakt:** Induksjonsprinsippet (basissteg, induksjonshypotese, induksjonstrinn, konklusjon); mønsteret for $f^{(n)}$: gjett formelen fra $f',f'',f'''$, verifiser basissteget mot direkte regning, gjennomfør induksjonstrinnet ved å derivere den antatte formelen én gang til og kjenne igjen strukturen for $n+1$; typiske funksjoner $\ln(2x+1)$, $1/(1+x)^2$, $\ln x$ (fakultet + fortegnsveksling + potens av nevner). Kobling: eldre sett hadde også delsum-formler og monotoni/skranke-induksjon for rekursive følger (foregriper Del 7).
- **Oppgavesjangre:** N. Mønstereksempel: «Vis ved induksjon at $\frac{d^n}{dx^n}\ln(1+2x) = \frac{(-1)^{n-1}\,2^n\,(n-1)!}{(1+2x)^n}$ for $n\ge 1$.»
- **Typiske feil:** Basissteget ikke verifisert mot direkte regning; induksjonstrinnet «hoppet over» (ikke faktisk derivert hypotesen); fortegns-/fakultetsbokføring feil; konkludere uten å nevne induksjonshypotesen eksplisitt.
- **Quiz: 10 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Integrasjon *(prioritet: PERFEKT — slutteksamenens tyngste del)*

#### Kapittel 5.1: Fundamentalteoremet og integraler med variable grenser

- **id:** `mat111-uib-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-3-1`
- **kapitteltype:** teori
- **description:** Analysens fundamentalteorem begge veier, og derivasjon av integraler med variable grenser via kjerneregelen — med veldefinerthetsargument for integranden.
- **Forkunnskaper (kryssbok):** Kap. 3.1; [Analysens fundamentalsetning](/bok/r2/r2-2-5), [Bestemt integral som grenseverdi](/bok/r2/r2-2-4), [Kjerneregelen](/bok/r1/r1-4-3).
- **Eksamensbelegg:** FTC-oppgaven (derivere integral med variable grenser) — 10/34. Inkluderer veldefinerthetsargument for integranden (H2018). Prioritet: **kunne**.
- **Innholdskontrakt:** Analysens fundamentalteorem begge veier (del 1: $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$; del 2: $\int_a^b f = F(b)-F(a)$); **derivasjon av integral med variable grenser**: $\frac{d}{dx}\int_{a}^{g(x)} f(t)\,dt = f(g(x))\,g'(x)$ (kjerneregel-faktoren) og tovariant med to variable grenser; veldefinerthetsargument (integranden kontinuerlig på integrasjonsområdet); bruk av FTC til ekstremal-/monotoni-analyse av integralfunksjoner.
- **Oppgavesjangre:** J-slektning (FTC). Mønstereksempel: «La $F(x) = \int_{1}^{x^2} \frac{\sin t}{t}\,dt$. Finn $F'(x)$, og avgjør hvor $F$ er voksende.»
- **Typiske feil:** Glemme kjerneregel-faktoren $g'(x)$; feil fortegn/rekkefølge når begge grenser er variable; ikke sjekke at integranden er veldefinert; forveksle $F(x)$ og integranden i analysen.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 5.2: Integrasjonsteknikk I: substitusjon og delvis integrasjon

- **id:** `mat111-uib-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat111-uib-5-1`
- **kapitteltype:** teori
- **description:** De to grunnteknikkene med UiBs føringsstandard: substitusjonsboks med nye grenser, og dokumentert u/v'-valg — inkludert de «ensomme» funksjonene arctan og ln.
- **Forkunnskaper (kryssbok):** Kap. 5.1; [Variabelskifte (substitusjon)](/bok/r2/r2-3-1), [Delvis integrasjon](/bok/r2/r2-3-2), [Integrasjon av 1/x og eksponentialfunksjoner](/bok/r2/r2-2-3).
- **Eksamensbelegg:** Sjanger B — integrasjonsteknikk 33/34 (97 %), typisk 2–4 deloppgaver per sett. Åpen bok-regelen: oppgaven sier eksplisitt at integralet skal løses «med grunnleggende teknikker, ikke ved oppslag». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Substitusjon**: bokfør $u$, $du$ og **nye grenser** i egen boks; klassiske substitusjoner; **delvis integrasjon** $\int u\,dv = uv - \int v\,du$: dokumentér valget av $u/v'$ (LIATE-heuristikk); «ensomme» funksjoner ($\arctan x$, $\ln x$) integreres delvis mot 1; sykliske tilfeller ($\int e^x\sin x$ — løs for integralet); kombinasjon substitusjon → delvis. Åpen bok-føringskravet internaliseres: hele utledningen vises.
- **Oppgavesjangre:** B. Mønstereksempel: «Beregn $\int x\arctan x\,dx$ (delvis, $u=\arctan x$).» Mønstereksempel: «Beregn $\int_0^1 x\,e^{-x^2}\,dx$ med substitusjon, med grenser bokført.»
- **Typiske feil:** Glemme å endre grensene ved substitusjon (eller bytte tilbake feil); feil $u/v'$-valg (gjør integralet verre); glemme fortegnet i $-\int v\,du$; «slå opp» i stedet for å vise teknikken (gir null).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: Integrasjonsteknikk II: delbrøk, polynomdivisjon og trig-substitusjon

- **id:** `mat111-uib-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat111-uib-5-2`
- **kapitteltype:** teori
- **description:** Rasjonale integrander med delbrøk (også irreduserbar kvadratisk faktor → arctan-ledd) og trigonometrisk substitusjon for rotuttrykk.
- **Forkunnskaper (kryssbok):** Kap. 5.2; [Delbrøkoppspalting](/bok/r2/r2-3-3), [Polynomer og polynomdivisjon](/bok/r1/r1-1-1), [Fullstendig kvadrat](/bok/1t/1t-2-4).
- **Eksamensbelegg:** Sjanger B (fortsettelse) — delbrøk med irreduserbar kvadratisk faktor og trig-substitusjon er midtsjikt-/toppmarkører. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Delbrøkoppspalting**: alle nevnertyper (distinkte lineære, gjentatte lineære, irreduserbar kvadratisk); **polynomdivisjon først** når tellergrad $\ge$ nevnergrad; irreduserbar kvadratisk faktor → **fullført kvadrat** → arctan-ledd (og $\ln$-ledd for tellerens deriverte-del); **trigonometrisk substitusjon** ($x = a\sin\theta$ for $\sqrt{a^2-x^2}$, $x=a\tan\theta$ for $\sqrt{a^2+x^2}$) med verdimengdekrav for tilbaketransformasjonen; kjeding av to teknikker (substitusjon → delbrøk).
- **Oppgavesjangre:** B. Mønstereksempel: «Beregn $\int \frac{1}{e^x+1}\,dx$ (substitusjon $u=e^x$, deretter delbrøk).» Mønstereksempel: «Beregn $\int \frac{2x+3}{x^2+2x+5}\,dx$ (splitt i $\ln$-del + arctan-del via fullført kvadrat).»
- **Typiske feil:** Delbrøk uten polynomdivisjon når tellergrad $\ge$ nevnergrad; glemme arctan-leddet fra irreduserbar faktor; feil verdimengde ved tilbaketransformasjon i trig-substitusjon; feil oppsett av delbrøk-koeffisientene.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: Drill: integrasjonsteknikk-kjeder (åpen bok)

- **id:** `mat111-uib-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `mat111-uib-5-3`
- **kapitteltype:** drill
- **description:** Alle fire teknikkene kjedet på eksamensnivå med full føring — 97 %-sjangeren der utledningen er hele poenget.
- **Eksamensbelegg:** Sjanger B (97 %), 2–4 deloppgaver per sett, ofte kjedet (substitusjon → delvis; substitusjon → delbrøk). Åpen bok gjør føringen til det som måles. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Teknikkvalg-beslutningstre**: (1) rasjonal? → polynomdivisjon (hvis grad tillater) → delbrøk; (2) rotuttrykk $\sqrt{a^2\pm x^2}$? → trig-substitusjon; (3) produkt polynom × transcendent? → delvis; (4) sammensatt kjerne? → substitusjon; (5) «ensom» transcendent? → delvis mot 1. **Gjennomregnet eksamens-integralblokk** (3–4 integraler som kjeder teknikker) med sensor-margnotater om føringskravet (boks, grenser, $u/v'$-valg) og om at fasit ofte fører flere alternative veier. 12–15 integraler på eksamensnivå, hver med full føring og markert «Alternativt:»-vei der den finnes.
- **Oppgavesjangre:** B, alle varianter. Mønstereksempel: «Beregn $\int \frac{x}{\sqrt{4-x^2}}\,dx$ og $\int \frac{x^3}{x^2+1}\,dx$ — vis all utregning.»
- **Typiske feil:** Alle fellene fra 5.2–5.3 i kjedet form; hoppe over grensebytte; velge tyngste vei der en enklere finnes; «slå opp» i permen.
- **Quiz: 18 · Flashcards: 8**

#### Kapittel 5.5: Uegentlige integraler

- **id:** `mat111-uib-5-5` · **number:** 5.5 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-5-3`
- **kapitteltype:** teori
- **description:** Grenseføring med eksplisitt lim, direkte beregning, og konvergens via sammenligningskriteriet med begge premisser uttalt.
- **Forkunnskaper (kryssbok):** Kap. 5.3; [Analysens fundamentalsetning](/bok/r2/r2-2-5).
- **Eksamensbelegg:** Sjanger I — 18/34. Full uttelling krever **både** at integranden er ikke-negativ **og** at majoranten har endelig integral (fasitkrav H2014). Singulariteter inne i intervallet må splittes ($\int_{-4}^4 1/x^2$ deles i 0 — klassisk felle H2011). Prioritet: **kunne**.
- **Innholdskontrakt:** Identifiser singularitet/uendelighetsgrense; **før med eksplisitt $\lim$-notasjon** ($\int_1^\infty = \lim_{b\to\infty}\int_1^b$ — «sett inn $\infty$» underkjennes); direkte beregning (substitusjon → arctan-form vanlig); **sammenligningskriteriet**: klem integranden mot navngitt $p$-integral eller $e^{-x}$-hale — uttrykk **både** ikke-negativitet **og** endelig majorant; $p$-integralenes status ($\int_1^\infty x^{-p}$: konvergerer $\Leftrightarrow p>1$; $\int_0^1 x^{-p}$: konvergerer $\Leftrightarrow p<1$); **splitt i alle singulariteter** (inne i intervallet); uegentlige varianter kombinert med omdreiningsvolum (kap. 5.6).
- **Oppgavesjangre:** I. Mønstereksempel: «Beregn $\int_1^\infty \frac{1}{\sqrt{x}\,(x+1)}\,dx$ (substitusjon $u=\sqrt{x}$ → arctan; grense gir $\pi/2$).» Mønstereksempel: «Avgjør om $\int_1^\infty \frac{2+\sin x}{x^2}\,dx$ konvergerer.»
- **Typiske feil:** «Sett inn $\infty$» uten lim-føring; sammenligning uten å nevne ikke-negativitet eller uten navngitt konvergent majorant; singulariteter inne i intervallet oversett; feil $p$-grense for konvergens.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.6: Omdreiningsvolum og areal (skive og skall)

- **id:** `mat111-uib-5-6` · **number:** 5.6 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-5-3`
- **kapitteltype:** teori
- **description:** Riktig metodevalg etter rotasjonsakse — skiver eller sylinderskall — med integralet løst ved dokumentert teknikk, og uegentlige varianter.
- **Forkunnskaper (kryssbok):** Kap. 5.2–5.3; [Volum av omdreiningslegemer](/bok/r2/r2-3-6), [Areal mellom kurver](/bok/r2/r2-2-7).
- **Eksamensbelegg:** Sjanger H — 23/34. Typisk felle (H2016): rotasjon om feil akse, eller levere *arealet* i stedet for *volumet*, eller skrive av et lærebokeksempel uten å svare på spørsmålet. Fasit viser regelmessig begge metoder som likeverdige. Utlednings-varianten $V(h)$ for en beholder er første ledd i Torricelli-kjeden (kap. 6.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** Tegn/forstå området; **velg metode etter akse**: skiver/ringer $V = \pi\int [R(x)^2 - r(x)^2]\,dx$ når tverrsnittet vinkelrett på aksen er kjent; **sylinderskall** $V = 2\pi\int x\,h(x)\,dx$ når man integrerer langs den andre aksen; sett opp integralet og løs med dokumentert teknikk (ofte delvis: $\int x\ln x$, $\int x e^x$); areal mellom kurver som kontrast (ikke volum); uegentlige varianter (rotasjon av $e^{-x}$ over $[0,\infty)$ — kombinér med kap. 5.5); utled $V(h)$ for en beholder med gitt profil. Fasit fører gjerne begge metoder («Alternativt:»).
- **Oppgavesjangre:** H. Mønstereksempel: «Området avgrenset av $y=0$, $y=1$, $x=0$ og $y=\ln x$ dreies om $y$-aksen. Finn volumet med grunnleggende teknikker.» Mønstereksempel: «Finn volumet når området under $y=e^{-x}$ over $[0,\infty)$ dreies om $x$-aksen.»
- **Typiske feil:** Rotasjon om feil akse; levere areal som volum; skrive av lærebokeksempel uten å svare på spørsmålet (H2016); feil metodevalg som gjør integralet unødig tungt; glemme $2\pi x$-faktoren i skall.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.7: Numerisk integrasjon: trapes og Simpson med feilestimat

- **id:** `mat111-uib-5-7` · **number:** 5.7 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-5-1`
- **kapitteltype:** teori
- **description:** Trapes- og Simpson-tilnærming fra formel og fra måletabell, med feilformlene brukt aktivt til å dimensjonere n — en UiB-signatur som ikke finnes i UiO-arkivet.
- **Forkunnskaper (kryssbok):** Kap. 5.1; [Numerisk integrasjon](/bok/r2/r2-3-4).
- **Eksamensbelegg:** Sjanger J — 13/34, jevnt siden 2007. Feilformlene skal brukes *kvantitativt* (finn $n$ for gitt presisjon), også fra måletabeller (CO₂, fart). Teorivarianter: beskriv metodene, vis at Simpson er eksakt for tredjegradspolynomer ($f^{(4)}=0$), konstruer moteksempel der trapes slår Simpson (V2020). Prioritet: **kunne**.
- **Innholdskontrakt:** Trapesmetoden og Simpsons metode (formlene, $n$ delintervaller, $n$ jevn for Simpson); tilnærming fra formel og fra måletabell; **feilformlene brukt aktivt**: $|E_T| \le \frac{K(b-a)^3}{12n^2}$ med $K = \max|f''|$, $|E_S| \le \frac{K(b-a)^5}{180n^4}$ med $K=\max|f^{(4)}|$ — skaff $K$ på intervallet og **dimensjonér $n$** for gitt feilgrense; teori: Simpsons eksakthet for kubiske polynomer; moteksempel trapes vs. Simpson.
- **Oppgavesjangre:** J. Mønstereksempel: «Bruk trapesmetoden med fire delintervaller på $\int_0^1 (1+t^4)^{3/2}\,dt$, og avgjør hvor mange delintervaller som trengs for feil høyst $0{,}04$.» Mønstereksempel: «Estimer $\int_0^6 v(t)\,dt$ fra en fartstabell med Simpson.»
- **Typiske feil:** Feilformel sitert men ikke brukt til å finne $n$; feil $K$ (ikke maks på hele intervallet); odde $n$ i Simpson; blande trapes- og Simpson-formelen; regnefeil i vektene ($1,4,2,4,\dots,1$).
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Differensiallikninger *(prioritet: PERFEKT — settets faste avslutning)*

#### Kapittel 6.1: Separable differensiallikninger

- **id:** `mat111-uib-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-5-3`
- **kapitteltype:** teori
- **description:** Full føringsmal for separable likninger — inkludert konstante løsninger som alltid nevnes og avvises mot initialbetingelsen, og logistisk likning via delbrøk.
- **Forkunnskaper (kryssbok):** Kap. 5.3; [Introduksjon til differensiallikninger](/bok/s2/s2-2-1), [Separable differensiallikninger](/bok/s2/s2-2-2), [Logistisk vekst](/bok/r1/r1-5-2).
- **Eksamensbelegg:** Sjanger A — differensiallikninger 33/34 (97 %), settets faste avslutning. **Konstante løsninger skal nevnes og avvises** (fasit sjekker alltid $y\equiv 0$ før det deles på $y$). Logistisk likning løses via delbrøk (hint gis ofte). Prioritet: **perfekt**.
- **Innholdskontrakt:** Separabel form $y' = g(x)h(y)$; **føringsmal (aktiv)**: (1) identifiser og **noter konstante løsninger** $h(y)=0$ (sjekk mot initialbetingelse før de forkastes), (2) separér $\frac{dy}{h(y)} = g(x)\,dx$, (3) integrer begge sider (delbrøk for logistisk), (4) løs for $y$ og bestem konstanten fra initialbetingelse/datapunkt, (5) tolk; logistisk likning $y' = ky(M-y)$ via delbrøk; eksistens/entydighet av initialverdiproblem (kort, kunne).
- **Oppgavesjangre:** A. Mønstereksempel: «Løs $y' = y(1-y)$, $y(0)=\tfrac12$ (logistisk, delbrøk).» Mønstereksempel: «Løs $y' = x e^{-y}$, $y(0)=0$.»
- **Typiske feil:** Konstante løsninger glemt (deler på $y$ uten å sjekke $y\equiv 0$); glemme integrasjonskonstanten eller bestemme den feil; delbrøk-feil i logistisk; ikke tolke svaret i kontekst.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.2: Lineære førsteordens differensiallikninger

- **id:** `mat111-uib-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-6-1`
- **kapitteltype:** teori
- **description:** Integrerende faktor som standardmetode, med variasjon av parameter som alternativ — det andre beinet i avslutningsoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 6.1; [Lineære differensiallikninger](/bok/s2/s2-2-3).
- **Eksamensbelegg:** Sjanger A (lineær variant) — del av 97 %-blokken. Fasit fører gjerne både integrerende faktor og variasjon av parameter («Alternativt:»). Prioritet: **perfekt**.
- **Innholdskontrakt:** Lineær form $y' + p(x)y = q(x)$; **integrerende faktor** $\mu(x) = e^{\int p\,dx}$: gang gjennom, kjenn igjen $(\mu y)' = \mu q$, integrer, løs for $y$; variasjon av parameter som alternativ; bestem konstanten fra initialbetingelse; når en likning kan angripes både separabelt og lineært; kobling til modellering (kap. 6.3).
- **Oppgavesjangre:** A. Mønstereksempel: «Løs $y' + 2y = e^{-x}$, $y(0)=1$, med integrerende faktor.»
- **Typiske feil:** Feil integrerende faktor (glemme fortegn/koeffisient i $\int p\,dx$); glemme å gange hele likningen med $\mu$; ikke kjenne igjen $(\mu y)'$; konstant bestemt før $y$ er isolert.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.3: Drill: anvendt differensiallikning (modelleringskjeden)

- **id:** `mat111-uib-6-3` · **number:** 6.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat111-uib-6-2`
- **kapitteltype:** drill
- **description:** Settets avslutningsoppgave fra ende til annen: oversett en verbal situasjon til en difflikning, klassifiser, løs med full føring, og svar på det anvendte spørsmålet.
- **Eksamensbelegg:** Sjanger A (97 %) — settets faste avslutning. Kontekstfamilier: alger, epidemi (logistisk), skip som mister fart ($v^2$-motstand), radioaktivitet, Newtons avkjøling, ryktespredning, saltvann, tanker som tømmes (Torricelli). Torricelli-oppgaven kjeder volum-ved-skiver → implisitt derivasjon → separabel likning → tømmetid. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Modelleringsoppskrift (aktiv)**: (1) oversett rate-beskrivelsen til en difflikning (ofte oppgitt; av og til utledes fra Torricelli/tangentbetingelse); (2) klassifiser (separabel eller lineær); (3) **noter konstante/likevektsløsninger**; (4) løs med full føring; (5) bestem konstanter fra datapunkter; (6) svar på det anvendte spørsmålet (tømmetid, tid til 69 % smittet, temperatur ved et klokkeslett) **med tolkning og enhet**. **Gjennomregnet Torricelli-kjede** ($V(h)$ fra beholderprofil → implisitt derivasjon → separabel → tømmetid) med sensor-margnotater. 10–14 oppgaver på tvers av kontekstfamiliene, alle med modellering + føring + tolkning.
- **Oppgavesjangre:** A (kjedet med H og K). Mønstereksempel: «En båts fart avtar med en rate proporsjonal med kvadratet av farten. Farten faller fra 25 til 5 km/t på en halvtime. Sett opp og løs likningen, og finn når farten passerer 1 km/t.»
- **Typiske feil:** Konstante løsninger glemt; feil modell fra rate-beskrivelsen; konstanter feil bestemt fra datapunktene; svar uten tolkning/enhet; glemme kjeden (bruke $V(h)$ fra første ledd).
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Uendelige rekker *(prioritet: KJENNE — pensumpliktig, ikke arkivbelagt etter 2005)*

> **Ærlighetsnotat (skal stå i begge Eksamensvinkel-blokkene):** Uendelige rekker
> har **0 forekomster i arkivet etter 2005** og var ute av pensumlistene
> 2006–2019, men står i gjeldende emnebeskrivelse (2026). Kapitlene dekker
> stoffet fordi det er pensumpliktig, kalibrert mot de gamle 2003–2005-sjangrene
> som mal. **Byggefasen bør sjekke første tilgjengelige sett etter 2020** og
> justere vekt/vanskelighet deretter.

#### Kapittel 7.1: Uendelige rekker og konvergenstester

- **id:** `mat111-uib-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat111-uib-5-5`
- **kapitteltype:** teori
- **description:** Standard konvergenstester med formsjekk-disiplin — pensumpliktig kunne-stoff uten arkivbelegg etter 2005.
- **Forkunnskaper (kryssbok):** Kap. 5.5 (parallellen integral/rekke); [Uendelige rekker og konvergens](/bok/r2/r2-1-5), [Rekker og summasjon](/bok/r2/r2-1-4).
- **Eksamensbelegg:** Sjanger «rekker» — **0 forekomster etter 2005** (var eksamensstoff 2003–2005: $p$-rekker, forholdstest, grensesammenligning, integraltest, alternerende rekker). Dekkes som pensumpliktig. Prioritet: **kjenne**. (Se ærlighetsnotatet over.)
- **Innholdskontrakt:** Rekke som følge av delsummer; geometrisk rekke (sum og konvergensområde); $n$-te ledd-testen (divergens); $p$-rekker ($\sum 1/n^p$ konvergerer $\Leftrightarrow p>1$); **forholdstesten**; **integraltesten** (kobling til uegentlige integraler i kap. 5.5); **grensesammenligningstesten** med navngitt sammenligningsrekke; alternerende rekker (Leibniz) og absolutt vs. betinget konvergens; formsjekk-disiplin: velg test etter form. Kort, med de gamle 2003–2005-sjangrene som mal.
- **Oppgavesjangre:** rekke-test. Mønstereksempel: «Avgjør om $\sum_{n=1}^\infty \frac{n}{2^n}$ konvergerer (forholdstesten).» Mønstereksempel: «Avgjør konvergens av $\sum \frac{1}{n\sqrt{n}}$ og $\sum \frac{1}{n\ln n}$.»
- **Typiske feil:** Test valgt uten formsjekk; forholdstesten konkludert ved grense $=1$ (uavgjort); integraltesten uten å sjekke positiv + avtakende integrand; blande absolutt og betinget konvergens.
- **Quiz: 12 · Flashcards: 16**

#### Kapittel 7.2: Potensrekker og Taylorrekker

- **id:** `mat111-uib-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `mat111-uib-7-1`, `mat111-uib-4-3`
- **kapitteltype:** teori
- **description:** Konvergensradius og Taylorrekker — knytter rekkestoffet til Taylorpolynom fra kap. 4.3; pensumpliktig kunne-stoff.
- **Forkunnskaper (kryssbok):** Kap. 7.1, 4.3; [Uendelige rekker og konvergens](/bok/r2/r2-1-5).
- **Eksamensbelegg:** **0 arkivforekomster etter 2005**; dekkes som pensumpliktig og knyttes til Taylor-restleddet (kap. 4.3), som *er* hovedsjanger. Prioritet: **kjenne**. (Se ærlighetsnotatet.)
- **Innholdskontrakt:** Potensrekke $\sum a_n(x-a)^n$; **konvergensradius** via forholdstesten; konvergensintervall (endepunkter sjekkes separat); Taylorrekke som grensen av Taylorpolynomene, sammenhengen med Lagrange-restleddet ($R_n\to 0$ ⇒ rekken konvergerer mot $f$); standardrekker ($e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, geometrisk); bruk til tallnærming (kobling til kap. 4.3).
- **Oppgavesjangre:** rekke/Taylor. Mønstereksempel: «Finn konvergensradius og -intervall for $\sum_{n=1}^\infty \frac{(x-2)^n}{n\,3^n}$.» Mønstereksempel: «Vis at Taylorrekken til $e^x$ konvergerer mot $e^x$ for alle $x$ (restleddet).»
- **Typiske feil:** Endepunktene i konvergensintervallet ikke sjekket; blande konvergensradius og -intervall; påstå at Taylorrekken konvergerer mot $f$ uten $R_n\to 0$-argument; feil i forholdstest-grensen.
- **Quiz: 10 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Åpen bok og føringsstandard

- **id:** `mat111-uib-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat111-uib-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Åpen bok-regelen operasjonalisert: «vis utregningen, ikke slå opp», teoremnavning, føringsboksene, lim-disiplinen og konklusjonssetningen — samlet på ett sted.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksis 2009–2020: (i) «Alle svar skal begrunnes, men begrunnelsene skal være korte» (stående instruks siden ~2009), og fra 2019 «riktig fremgangsmåte gir godt med poeng selv uten riktig sluttsvar»; (ii) **åpen bok forplikter**: der fasitsvaret står i permen, kreves eksplisitt utregning — avskrift av lærebokeksempler gir null (H2016); (iii) teoremer navngis med referanse (skjæringssetningen, sekantsetningen, Rolle, skvis, ekstremalverdisetningen, FTC, de Moivre, kompletthetsprinsippet); L'Hôpitals forutsetninger sjekkes og ubestemt form markeres; (iv) alternative løsninger honoreres (skive vs. skall, separabel vs. integrerende faktor, monotoni vs. Rolle, optimal vs. grovere restleddsskranke); (v) «gratisoppgaver» vurderes på føring; (vi) kvantitative verktøy brukes kvantitativt (restledd/feilformler gir intervaller/skranker). Prioritet: **perfekt** (regelen bærer hele karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–N (hva som er tilstrekkelig føring for hver — én tabell); føringsboksene (substitusjonsboks med nye grenser, $u/v'$-valg, fortegnsskjema, $\lim$-føring, $\delta=\min$-mal, konstante løsninger, konklusjonssetning med enhet, markert sluttsvar); to kontrastpar «samme matematikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon — ett integrasjons- og ett bevis-eksempel, med margnotater); sjekkliste før innlevering (teoremnavn på plass? bokser ført? konklusjonssetninger? kjeder utnyttet? konstante løsninger sjekket?); tidsdisiplin (~17–23 min/deloppgave; unngå unødvendig arbeid).
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig tall, men ville fått lav uttelling ved åpen bok. Pek på de tre føringsmanglene og skriv den om til full pott.»
- **Typiske feil:** Hele feilkatalogens føringsdel: begrensethet uttalt manglende i skvis, kontinuitet unevnt før skjæringssetningen, forutsetninger usjekket før Rolle, $[0/0]$ umarkert, «sett inn $\infty$», restledd ikke brukt kvantitativt, konstante løsninger glemt, eksistens uten entydighet.
- **Quiz: 12 · Flashcards: 28** (teoremnavn-bank + føringsregler — flashcard-gull)

#### Kapittel 8.2: Øvingseksamen 1: høstprofil (16 deloppgaver, 5 timer)

- **id:** `mat111-uib-8-2` · **number:** 8.2 · **estimatedMinutes:** 300 · **prerequisites:** `mat111-uib-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 5-timers høstsett etter H2016–H2019-malen: 16 likt vektede deloppgaver med settets faste dramaturgi og full A-besvarelse-fasit.
- **Eksamensbelegg/miks:** Speiler hovedsemester-malen (5 timer, 16 likt vektede deloppgaver, «alle svar begrunnes kort», åpen bok): **åpning komplekse tall** (3 deloppgaver: polarform + de Moivre-potens + reell/kompleks faktorisering, sjanger C) → **ε-δ-bevis** (1, sjanger D) → **kontinuitet/deriverbarhet i punkt** (2: skvis-kontinuitet + differansekvotient-deriverbarhet, oscillasjonsfamilien, sjanger E) → **integrasjonsteknikk-kjede** (3: substitusjon→delvis, delbrøk med irreduserbar faktor, trig-substitusjon, sjanger B) → **uegentlig integral** (1, sammenligning med navngitt majorant, sjanger I) → **omdreiningsvolum om y-aksen** (1, skallmetoden med teknikk-krav, sjanger H) → **Taylor med restleddsintervall** (1, skarpest skranke, sjanger G) → **eksistens+entydighet+Newton** (2: skjæringssetning + monotoni + krumningsargument, sjanger F) → **anvendt separabel difflikning** (2: modeller + løs + tolk, sjanger A). Dekker de teoritunge Knutsen-settenes profil. Alle oppgaver nyskrevne; løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 8.1-standarden, med `tip`-notat om tidsbudsjett (~18 min/deloppgave) og hvor føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: vårprofil (13 deloppgaver, 5 timer)

- **id:** `mat111-uib-8-3` · **number:** 8.3 · **estimatedMinutes:** 300 · **prerequisites:** `mat111-uib-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Kortere vårsett etter V-malen: 13 deloppgaver med restsjangrene fra øvingseksamen 1, inkludert numerisk integrasjon, invers, implisitt derivasjon og FTC.
- **Eksamensbelegg/miks:** Speiler vårsett-malen (5 timer, 13 deloppgaver, litt kortere/mildere enn høst): **åpning komplekse tall** (2: normalform-aritmetikk + n-te røtter, sjanger C) → **grenser/L'Hôpital** (1, ubestemt form med formsjekk, sjanger M) → **invers funksjon** (2: monotoni-eksistens + $f^{-1}$ med definisjonsmengde + derivert av invers, sjanger L) → **implisitt derivasjon/relaterte rater** (2: tangent + relatert rate med fortegnstolkning, sjanger K) → **FTC med variable grenser** (1, kjerneregel-faktor, sjanger J/FTC) → **numerisk integrasjon** (2: trapes fra tabell + dimensjonér $n$ for gitt feil, sjanger J) → **funksjonsdrøfting/optimering** (1, eksistensbegrunnet globalt ekstremum, sjanger M) → **integrasjonsteknikk** (1, kjede, sjanger B) → **anvendt lineær difflikning** (1, integrerende faktor + tolkning, sjanger A). Sammen med 8.2 dekkes A–N minst én gang (fikspunkt og induksjon fra 8.4). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` per deloppgave med tids-/vektingsnotat.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: teoritung variant (15 deloppgaver, 5 timer)

- **id:** `mat111-uib-8-4` · **number:** 8.4 · **estimatedMinutes:** 300 · **prerequisites:** `mat111-uib-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Bevis- og teoritung Knutsen-mal som fanger sjangrene 8.2–8.3 ikke traff: induksjon, fikspunkt, grense-av-derivert, Simpson-teori og restledds-innkapsling.
- **Eksamensbelegg/miks:** Speiler de teoritunge H2016–H2019-settene (5 timer, 15 deloppgaver, tung på bevis/føring): **komplekse tall** (2: geometrisk mengde + faktorisering, sjanger C) → **ε-δ + teorivariant** (2: ε-δ-bevis + L'Hôpital fra derivertdefinisjonen, sjanger D) → **grense-av-derivert-setningen** (1, deriverbarhet i punkt via teorem, sjanger E) → **induksjon på n-te derivert** (1, full struktur, sjanger N) → **fikspunktiterasjon** (2: fikspunktomskriving + kontraksjonsargument + trappeskisse, sjanger F) → **Taylor-innkapsling** (2: $P_3 + Gx^4 < f < P_3 + Hx^4$ + minste intervall for en verdi, sjanger G) → **Simpson-teori** (1: vis eksakthet for kubiske / moteksempel, sjanger J) → **uegentlig integral med begge premisser** (1, sjanger I) → **omdreiningsvolum, utledet $V(h)$ → Torricelli-kjede** (2, sjanger H+A) → **rekkekonvergens** (1, pensumpliktig kunne-stoff — merk ærlighetsforbeholdet i fasiten, sjanger rekke). Alle oppgaver nyskrevne; A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.4 | 22+20+22+18 = **82** | 24+22+22+6 = **74** |
| 2 | 2.1–2.4 | 18+22+16+16 = **72** | 20+22+20+6 = **68** |
| 3 | 3.1–3.5 | 16+18+18+15+18 = **85** | 18+10+18+16+18 = **80** |
| 4 | 4.1–4.4 | 16+16+20+10 = **62** | 20+16+20+12 = **68** |
| 5 | 5.1–5.7 | 14+18+18+18+16+16+16 = **116** | 16+18+18+8+18+16+18 = **112** |
| 6 | 6.1–6.3 | 18+16+18 = **52** | 20+18+8 = **46** |
| 7 | 7.1–7.2 | 12+10 = **22** | 16+14 = **30** |
| 8 | 8.1–8.4 | 12+5+5+5 = **27** | 28+0+0+0 = **28** |
| **Sum** | **34 kap.** | **528 ≥ 500 ✓** | **516 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensvektene: Del 5 (integrasjon, 97 %) og Del 1
(komplekse tall, 82 %, åpningen) bærer flest quiz; drillkapitlene har lave
flashcard-kvoter (få nye definisjoner) men høye oppgavekvoter; kap. 8.1
(føringsstandard) er flashcard-tungt (teoremnavn- og føringsbank).
Quizzene skrives som teknikk-/føringssjekk (velg riktig neste steg, hvilken
teknikk/hvilket teoremnavn, hvilken begrunnelse mangler) med distraktorer fra
feilkatalogen — ikke ren repetisjon.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (kap. 8.1) og poengfordeling. Full begrunnelse kreves i
alle (åpen bok-standard). Prøvekapitler legges som `mat111-uib-<del>-prove`,
chapterNumber `<del>.P`.

**Del 1 — Komplekse tall**
1. Prøve 1.A (35 min): Normalform og polarform begge veier + geometrisk mengde i planet (kap. 1.1, sjanger C).
2. Prøve 1.B (35 min): de Moivre — potenser med vinkelreduksjon og alle n-te røtter (kap. 1.2).
3. Prøve 1.C (40 min): Likninger og faktorisering — vis rot → begge faktoriseringer over $\mathbb{C}$ og $\mathbb{R}$ (kap. 1.3).
4. Prøve 1.D (45 min): Full åpningsoppgave — sammensatt 1a–1f som kjeder polarform, potens, røtter og faktorisering (hele delen).

**Del 2 — Grenser, kontinuitet og ε-δ**
1. Prøve 2.A (35 min): ε-δ-bevis med faktoriser–avgrens–$\delta=\min$-malen + R-ε-variant (kap. 2.1, sjanger D).
2. Prøve 2.B (35 min): Grenseteknikk — alle ubestemte former med formsjekk-disiplin (kap. 2.2, sjanger M).
3. Prøve 2.C (40 min): Kontinuitet — skjæringssetnings-mal (eksistens) + kontinuerlig utvidelse koblet til $f(a)$ (kap. 2.3).
4. Prøve 2.D (45 min): Blandet — ε-δ + kontinuerlig utvidelse + ett grensetempo-sett med føringskrav (hele delen).

**Del 3 — Derivasjon i ett punkt og drøfting**
1. Prøve 3.A (50 min): Signaturoppgaven — oscillasjonsfamilien med kontinuitet, deriverbarhet og $f'$-kontinuitet + skjøteparameter-variant (kap. 3.1–3.2, sjanger E).
2. Prøve 3.B (40 min): Implisitt derivasjon og relaterte rater — tangent + $y''$ + rate med fortegnstolkning (kap. 3.3, sjanger K).
3. Prøve 3.C (40 min): Invers funksjon — monotoni-eksistens + $f^{-1}$ med definisjonsmengde + derivert av invers (kap. 3.4, sjanger L).
4. Prøve 3.D (45 min): Drøfting og optimering — fullt fortegnsskjema + eksistensbegrunnet globalt ekstremum + geometrisk optimering (kap. 3.5, sjanger M).

**Del 4 — Eksistens, entydighet og tilnærming**
1. Prøve 4.A (40 min): Eksistens + entydighet — skjæringssetning + monotoni/Rolle-motsigelse som to leveranser + hjelpefunksjonsbevis (kap. 4.1, sjanger F).
2. Prøve 4.B (45 min): Newton/fikspunkt — iterasjon + krumningsargument på hele intervallet + fikspunkt-kontraksjon med skisse (kap. 4.2, sjanger F).
3. Prøve 4.C (45 min): Taylor med restledd — tallnærming + skarpest mulig intervall + fortegn på feilen + innkapslingsvariant (kap. 4.3, sjanger G).
4. Prøve 4.D (35 min): Induksjon på n-te derivert med full struktur + én blandet skranke-/kjede-oppgave (kap. 4.3–4.4, sjanger N + G).

**Del 5 — Integrasjon**
1. Prøve 5.A (45 min): Substitusjon og delvis med føringsbokser — inkl. «ensom» transcendent og syklisk tilfelle (kap. 5.2, sjanger B).
2. Prøve 5.B (45 min): Delbrøk, polynomdivisjon og trig-substitusjon — rasjonale integrander med irreduserbar faktor + rotuttrykk (kap. 5.3–5.4, sjanger B).
3. Prøve 5.C (45 min): Uegentlige integraler — én direkte med lim-føring + to konvergensavgjørelser med navngitt $p$-integral (kap. 5.5, sjanger I).
4. Prøve 5.D (50 min): Volum og numerikk — omdreiningsvolum med metodevalg (begge honoreres) + trapes/Simpson med feildimensjonering + FTC med variable grenser (kap. 5.1, 5.6–5.7, sjanger H + J).

**Del 6 — Differensiallikninger**
1. Prøve 6.A (40 min): Separable likninger — full føring inkl. konstante løsninger + logistisk via delbrøk (kap. 6.1, sjanger A).
2. Prøve 6.B (35 min): Lineære førsteordens — integrerende faktor + variasjon av parameter som alternativ (kap. 6.2, sjanger A).
3. Prøve 6.C (50 min): Anvendt avslutningsoppgave — modeller fra rate-beskrivelse, løs, tolk (kontekstfamiliene) (kap. 6.3, sjanger A).
4. Prøve 6.D (55 min): Torricelli-kjeden — $V(h)$ → implisitt derivasjon → separabel → tømmetid, som kjedet eksamensoppgave (kap. 5.6 + 6.3, sjanger H + K + A).

**Del 7 — Uendelige rekker** *(pensumpliktig kunne-stoff; ærlighetsforbeholdet gjentas i hver prøve)*
1. Prøve 7.A (30 min): Konvergenstester — tre rekker, tre tester, alle navngitt med formsjekk (kap. 7.1).
2. Prøve 7.B (30 min): $p$-rekker og integraltesten — parallellen rekke/uegentlig integral (kap. 7.1 + 5.5).
3. Prøve 7.C (30 min): Potensrekker — konvergensradius og -intervall med endepunktssjekk (kap. 7.2).
4. Prøve 7.D (35 min): Taylorrekker — standardrekke + $R_n\to 0$-argument + tallnærming (kap. 7.2 + 4.3).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Form den speiler | Miks (deloppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Høstprofil H2016–H2019 | 16 deloppg. / 5 t: C(3) + D(1) + E(2) + B(3) + I(1) + H(1) + G(1) + F(2) + A(2) |
| Øvingseksamen 2 (kap. 8.3) | Vårprofil (kortere) | 13 deloppg. / 5 t: C(2) + M(1) + L(2) + K(2) + FTC(1) + J(2) + M(1) + B(1) + A(1) |
| Øvingseksamen 3 (kap. 8.4) | Teoritung Knutsen-mal | 15 deloppg. / 5 t: C(2) + D(2) + E(1) + N(1) + F/fikspunkt(2) + G(2) + J(1) + I(1) + H+A(2) + rekke(1) |

Til sammen dekker de tre settene samtlige sjangre A–N minst én gang (fikspunkt
og induksjon i 8.4; invers, relaterte rater og numerikk i 8.3; Taylor, eksistens
og difflikning i alle).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Én åpen bok-eksamen** — vurderingsformen (5 timer, 100 %, to sett per år),
   den faste dramaturgien (komplekse tall → teori/integrasjon → difflikning),
   formathistorikken og prognosen (fra kap. 0.1), med åpen bok-forpliktelsen
   («vis utregningen, ikke slå opp»).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 1 komplekse tall, Del 5 integrasjon, Del 6
   differensiallikninger, kap. 3.2 signaturoppgaven, kap. 4.3 Taylor-restledd,
   kap. 4.1–4.2 eksistens/Newton), **kunne** (Del 2, resten av Del 3, kap. 4.4,
   kap. 5.5–5.7), **kjenne** (Del 7 rekker, fikspunkt-delen av 4.2, induksjon
   4.4) — med ærlighetsnotatet om rekkenes 0-frekvens etter 2005.
3. **Sjangerguiden** — A–N med løsningsoppskriftene fra drillkapitlene
   (1.4, 2.4, 3.2, 5.4, 6.3) i kortform.
4. **Sensorreglene** — åpen bok-forpliktelsen, «begrunn kort men vis
   fremgangsmåten», teoremnavning, føringsstandarden, eksistens+entydighet som
   to leveranser, kvantitativ restleddsbruk, krumningsargument på hele
   intervallet, alternative løsninger honoreres (fra kap. 8.1) +
   karakterskille-listen (differansekvotient + oscillasjonsfellen, skarpe
   restleddsskranker, fullstendig krumnings-/kontraksjonsargument, entydighet i
   tillegg til eksistens, se kjedene, domene-/gyldighetsforbehold).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet, hver med
   henvisning til kapitlet som forebygger den.
6. **Formel- og symbolliste i kursets notasjon** — teorem- og formelapparatet
   fra innholdskontraktene: ε-δ-mal ($\delta=\min\{1,\varepsilon/K\}$),
   skviseteoremet, standardgrenser, L'Hôpital-disiplin, skjæringssetning,
   sekantsetning/Rolle + hjelpefunksjon, grense-av-derivert, differansekvotient,
   FTC + kjerneregel-faktor, integrasjonsteknikkene, $p$-integraler +
   sammenligning, trapes/Simpson-feilformlene, volumformlene med aksevalg,
   Newton-iterasjon + krumning, fikspunkt-kontraksjon, Taylor + Lagrange-restledd,
   separabel + integrerende faktor $\mu=e^{\int p}$, de Moivre + konjugatrot,
   algebraens fundamentalteorem, konvergenstestene — med markering *utlede
   aktivt* vs. *kun bruke* (jf. analysen §6).
7. **Studieløp** — semesterplan (emnet undervises om høsten): Del 0 → Del 1–2 →
   Del 3–4 → Del 5 → Del 6 → Del 7 → prøver → øvingseksamenene de to siste
   ukene under tidspress (300 min, ~18–23 min/deloppgave). Intensivvariant (3
   uker): Del 1 + Del 5 + Del 6 + kap. 3.2 + 4.1–4.3 + 8.1 + øvingseksamenene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat111-uib` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra §2-tabellen;
   institusjon = UiB i `institusjoner.ts`, visningsnavn «MAT111 Grunnkurs i
   matematikk I».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N og frekvenstallene resten
   refererer til.
3. **Temadeler i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   → Del 6 → Del 7. Én Opus-agent per hel del (jf. PRODUKSJONSLOYPE fase 4);
   Del 5 (7 kap.) kan deles, men gi begge agentene HELE delens kontrakter og
   flagg for konsistenssjekk. Drillkapitlene bygges av samme agent som delen sin.
4. **Del 8** (føringsstandard + 3 øvingseksamener) til slutt av én agent som
   leser HELE skjelettet — settene gjenbruker alle sjangre.
5. **Prøvekapitler** (§4, 28 stk) legges som `mat111-uib-<del>-prove`,
   chapterNumber `<del>.P`, bygget av delens agent.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON
      via `json.dump` (LaTeX krever `\\` i JSON-strenger); `npm run build` grønn.
- [ ] **LaTeX**: all matematikk i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistent notasjon: $re^{i\theta}$, $\bar z$, $\delta=\min\{1,\varepsilon/K\}$,
      $\mu(x)=e^{\int p\,dx}$, $[0/0]$-markering før L'Hôpital, $P_n$ + $R_n$.
- [ ] **Notasjonskonsistens (grep over alle mat111-uib-filer)**: polarform
      $re^{i\theta}$ (ikke $r\,\mathrm{cis}\,\theta$); restledd som Lagrange-form;
      integrerende faktor $\mu$; ε-δ-mal med $\min$; teoremnavn stavet likt
      (skjæringssetningen, sekantsetningen (MVT), Rolle, skviseteoremet,
      ekstremalverdisetningen).
- [ ] **Åpen bok-føringsstandard i ALLE løsningsforslag**: substitusjonsboks med
      nye grenser; dokumentert $u/v'$-valg; fortegnsskjema; eksplisitt $\lim$ i
      uegentlige integraler; teoremnavn; konstante løsninger sjekket i separable;
      konklusjonssetning med enhet; markert sluttsvar. «Slå opp»-snarveier eller
      ubegrunnede fasitsvar i et løsningsforslag er byggefeil.
- [ ] **Deriverbarhet i punkt**: alle løsninger bruker differansekvotienten
      (eller eksplisitt begrunnet grense-av-derivert); INGEN løsning konkluderer
      «ikke deriverbar» fra at $\lim f'$ ikke finnes.
- [ ] **Eksistens vs. entydighet**: hver F-sjanger-løsning fører de to som
      atskilte steg; entydighet aldri påstått uten monotoni-/Rolle-argument.
- [ ] **Kvantitativ restledds-/feilbruk**: Taylor- og trapes/Simpson-løsninger
      leverer tallintervaller/skranker og dimensjonerer $n$; Newton-løsninger
      begrunner fortegnet på feilen med krumning på HELE intervallet.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet — inkl. ærlighetsnotatene i Del 7), Forkunnskaper-blokk
      med kryssbok-lenker (kun til kapitler som finnes — id-ene i §3 er verifisert
      mot `textbook-courses-matte.ts`), `collapsible` Symbol- og formelliste per
      delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 528 og flashcard-sum ≥ 516** per kvotetabellen i §3
      (kontrollsummér); quizzene som teknikk-/føringssjekk med distraktorer fra
      feilkatalogen.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener som sammen
      dekker A–N.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og
      kontekster; ingen formuleringer fra reelle sett/fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett); Adams & Essex refereres, aldri siteres i lengde.
- [ ] **Ikke-pensum utelatt**: flervariabelt stoff (tangentplan, kritiske
      punkter i to variable) skal IKKE inn (ute av pensum siden ~2007).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

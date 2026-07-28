# Bokskjelett: SØK2011 Offentlig økonomi og økonomisk politikk — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (≈20 sett V2019–V2024 grundig + eldre skummet,
> 7 sensorveiledninger V2019–V2024 og 2 komplette svarmanualer V2022/H2021 —
> flere fullstendige fasiter med tallsvar). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Emnet har i tillegg to faste **verbale
> drøftingssøyler** (omfordeling/sosial velferdsfunksjon og kollektive valg); for
> de kapitlene som drilles verbalt (3.2, 5.1) lånes struktur fra
> `DNA-drofting.md` (posisjoner/spenninger → momentliste), dokumentert der. Alle
> mønstereksempler i skjelettet er omskrivninger; forfatteren skal variere dem
> videre (egne tall, egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2011` |
| Tittel | **SØK2011 Offentlig økonomi og økonomisk politikk** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (anvendt offentlig økonomi — regnende, med to faste verbale drøftingssøyler) |
| Antall kapitler | **28** (1 eksamenskart + 3 verktøy + 7 skatteeffektivitet + 5 inntektsskatt/omfordeling + 4 offentlig prioritering + 4 kollektive valg/spesialtema + 4 eksamenstrening) |
| Estimert totaltid | **2 190 min ≈ 36,5 timer** |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **548** (krav ≥500) |

**Pitch (ett avsnitt):** SØK2011-eksamen har siden 2022 fulgt en **fast firdelt
mal**: (1) fem begrepsforklaringer (20 %), (2) ett kort teorispørsmål (10 %, ofte
Ramsey-intuisjonen), (3) en tallrik **skatteinsidens-/dødvektstapsoppgave** i et
konkret marked (30–35 %), og (4) en **storoppgave med to alternativer** — typisk
**nytte-kostnadsanalyse av en vei-/baneinvestering** mot **progressiv inntektsskatt**
eller **bedrifts-/grunnrenteskatt** (30–35 %). Emnet ER **skatteeffektivitet +
offentlig prioritering**: staten anvender mikroøkonomien fra SOK1002 på sin egen
rolle — hvorfor og hvordan den skattlegger, omfordeler og bruker penger. Denne boka
er bygget som **to regnetunge søyler** — en **skattesøyle** (dødvektstap,
skatteinsidens, Ramsey-regelen, progressiv inntektsskatt) og en **prioriteringssøyle**
(nytte-kostnadsanalyse, nåverdi/kalkulasjonsrente) — hvilende på et felles
**matematisk verktøykapittel** (Lagrange, elastisitet, nåverdi/diskontering,
areal av trekanter), med to verbale drøftingssøyler (omfordeling/sosial
velferdsfunksjon, kollektive valg/valgparadoks) og et lettere spesialtema-kapittel
(profittskatt, varehjelp, skatteunndragelse). Den driller de fem ferdighetene som
avgjør karakteren: **dødvektstap** regnet ut som areal ($\tfrac12\,\Delta X\,\Delta P$)
og formelt ($\tfrac12\,\eta\,P\,t^2$) med skattekilen forklart, **skatteinsidens** fra
oppgitte tilbud/etterspørsel (relativ elastisitet avgjør fordelingen), **Ramsey-regelen**
utledet via Lagrange (skattlegg det inelastiske godet mest, «mange små skatter» pga.
kvadratisk tap), **nytte-kostnadsanalyse med nåverdi og kalkulasjonsrente** (optimal
prosjektstørrelse, rentens rolle), og **progressiv inntektsskatt** vist analytisk
(ART < MRT). SØK2011 er et **regnende** fag (kode C: matematisk formelsamling +
kalkulator) der matematikken teller — men sensor understreker at **tallet alene ikke
er nok**: hvert resultat skal illustreres i figur og tolkes økonomisk, og *mekanismen*
(skattekilen MBV > MK, hvorfor den inelastiske parten bærer skatten) teller mer enn
selve tallet.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK2011 er NTNUs
**anvendte** emne i offentlig økonomi og bygger direkte på SOK1002s mikroapparat, men
utvider det til statens rolle. Arbeidsdelingen mot allerede-planlagte SOK-/ECON-bøker
er skarp (full tabell i §7):

- **Mot SOK1002 Mikroøkonomi (NTNU, skjelett):** SOK1002 bygger opp
  konsument-/produsentapparatet (nyttemaks med Lagrange, kostnadsminimering,
  elastisitet, substitusjons-/inntektseffekt, tilbudskurve fra kostnadsfunksjon).
  SØK2011 **gjenbruker** dette som forkunnskap og **kryssrefererer** med markdown-lenker
  (`[tittel](/sok1002/<chapterId>)`) i stedet for å gjenta utledningene —
  særlig for Lagrange, elastisitetsberegning og SE/IE på arbeidstilbud. Det SØK2011
  bygger nytt er **skattens** virkning: skattekile, dødvektstap, insidens, Ramsey,
  progressivitet, velferdsfunksjon, NKA/nåverdi, kollektive valg.
- **Mot SØK1011 Markeder og markedssvikt (NTNU, skjelett):** SØK1011 eier
  markedsmakt/oligopol, **eksternaliteter/Pigou-avgift** og fellesgoder/Samuelson.
  SØK2011 rører **ikke** oligopol/spill eller eksternalitets-Pigou-analysen (unntatt
  den ene sjeldne CO₂-berøringen, som holdes på begrepsnivå). SØK2011s avgifter er
  **provenyskatter** (finansiere staten med minst mulig effektivitetstap → Ramsey),
  ikke korrigering av markedssvikt.
- **Mot ECON1220 Velferd og økonomisk politikk (UiO, skjelett):** samme *temaliste*
  (skatteeffektivitet, omfordeling, velferdsteoremer, NKA, kollektive valg), men
  motsatt **metode**. ECON1220 er verbal/figurbasert («lite matte, mye figurer») med
  tyngdepunkt i **asymmetrisk informasjon** (uheldig utvalg/fløteskumming). SØK2011 er
  **finansdepartement-teknisk**: regn ut effektivitetstapet med tall og figur.
  Der begge dekker samme begrep (velferdsteoremer, sosial velferdsfunksjon,
  varehjelp vs. kontantoverføring), bruker SØK2011-boka de **formelle utledningene og
  regneeksemplene** som SØK2011 faktisk krever; asymmetrisk informasjon,
  atferdsøkonomi og spillteori bygges **ikke** ut (det er ECON1220s domene).
- **Mot SØK3007 (master):** SØK2011 dekker samme kjerne (insidens, effektivitetstap,
  Ramsey, skatteunndragelse) men på **bachelornivå**. Boka går **ikke** inn i
  Mirrlees-optimal-beskatning e.l. — det hører til 3000-nivået.
- **Nedlagte forgjengere (ikke egne bøker):** SØK2011 har **absorbert** de nedlagte
  emnene SØK2008 «Offentlig økonomi» (skattedelen — praktisk talt identisk) og SØK2103
  «Politisk økonomi» (redusert til kollektive-valg-kapitlet). Begge har STATUS-notat
  «HOPPET OVER» og bygges inn her: SØK2008s skatte-/velferdskjerne er skattesøylen +
  omfordelingsdelen, og SØK2103s public-choice-arv er redusert til valgparadoks/entoppede
  preferanser (rent-seeking/medianvelger/Niskanen er **ikke** videreført i SØK2011 og
  bygges ikke). *(verifiser at rent-seeking/byråkrati fortsatt er borte fra gjeldende
  SØK2011-pensum før publisering.)*

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU/veiledningsnotasjonen fra
arkivet skal brukes nøyaktig, ikke lærebok-alternativer:

- **Skatt/marked:** pris $P$, kvantum $X$ (evt. $Q$); tilbud $X_S$/$P_S$, etterspørsel
  $X_D$/$P_E$; **enhetsskatt/skattebeløp $T$** (kr per enhet), **verdiskatt $t$** (%);
  grensekostnad $MK$; etterspørselselastisitet $\eta$ (evt. $\varepsilon$).
  **Dødvektstap** $= \tfrac12\,\Delta X\,\Delta P = \tfrac12\,\eta\,P\,t^2$. I
  standardfiguren er **proveny = areal $ABDE$** og **dødvektstap = trekant $BCD$**.
  Skattekile = vertikal avstand mellom det konsumenten betaler og det produsenten
  mottar.
- **Inntektsskatt:** inntekt $I$, skattebeløp $T(I)$; **marginalskatt $MRT = T'(I)$**,
  **gjennomsnittsskatt $ART = T/I$**; bunnfradrag $B$. **Progressiv** $\Leftrightarrow$
  $MRT > ART$ $\Leftrightarrow$ $d(T/I)/dI > 0$.
- **Arbeidstilbud:** nyttefunksjon $U(I, L)$ over inntekt/konsum $I$ og fritid $L$;
  lønn $w$, tid $T$; netto lønn $w(1-t)$; Lagrange-funksjon $\mathcal{L}$.
- **Velferd:** individuelle nyttefunksjoner $U_i$; **additiv sosial velferdsfunksjon**
  $W = \sum U_i$ (evt. vektet), **maks-min** $W = \min U_i$; inntekt $I_i$.
- **NKA:** samfunnsøkonomisk nytte $B(Q)$, kostnad/investering $I(Q)$; realrente/
  **kalkulasjonsrente $r$**; **nåverdi $PV$**. Nettonytte = $B - I$.
- **Intertemporalt:** to perioder, konsum $x_1, x_2$, inntekt $m_1, m_2$, rente $r$;
  intertemporal budsjettbetingelse i nåverdi; pay-as-you-go-folketrygd.
- **Kollektive valg:** grupper/velgere med preferanserangering; **entoppet**/**flertoppet**;
  parvis flertallsvotering; valgparadoks/cycling.

**Kritisk metoderegel (gjelder HELE boka):** Fire faste sensorkrav gjelder overalt:
**(a) regning OG figur OG verbal forklaring** er én leveranse — tallet alene gir ikke
full uttelling; dødvektstap/insidens/nåverdi skal illustreres i figur og tolkes
økonomisk (analysens §4.1). **(b) Forklar *hvorfor*, ikke bare *hva*:** dødvektstapet
skyldes en skattekile ($MBV > MK$) og at konsumenten substituerer bort fra godet uten
å ta hensyn til tapt statsproveny — mekanismen skal med, ikke bare arealformelen
(§4.2). **(c) Koble alltid til elastisitet:** størrelsen på dødvektstap og fordelingen
av insidens forklares ved elastisitet; ved **lineær** etterspørsel varierer
elastisiteten langs kurven, og det skal kandidaten se (§4.3). **(d) Presiser
tolkning og forutsetninger:** der oppgaven er tvetydig, honoreres at kandidaten sier
hvilken tolkning som legges til grunn (§4.4). Utledning (Ramsey, dødvektstapsformelen)
er **pluss, ikke alltid krav** — men er toppkarakter-differensiatoren (§4.5).
Svar **poengtert** på akkurat det det spørres om.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): matteverktøyet i bunn, deretter
skattesøylen (som bærer flest eksamenspoeng), så inntektsskatt/omfordeling, deretter
prioriteringssøylen (NKA), til slutt kollektive valg/spesialtema og eksamenstreningen.
Frekvensen styrer *omfanget* — skatteeffektivitet er ryggraden (~95 %) og får den
største delen med drillkapittel; NKA (~55 %) får en full søyle med drill.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn den firdelte malen og avgrenser mot SOK1002/SØK1011/ECON1220. |
| 1 | Matematisk verktøykasse | 3 | Lagrange, elastisitet, nåverdi/diskontering og trekantareal forutsettes aktivt i hver regneoppgave (formelsamling tillatt, men metoden må sitte). Bygger på SOK1002 → kompakt, med kryssbok-lenker. |
| 2 | Skatteeffektivitet: dødvektstap, insidens og Ramsey | 7 | Ryggraden. Dødvektstap ~95 %, skattekile ~90 %, elastisitet↔tap ~85 %, insidens ~70 %, Ramsey ~65 % → nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 3 | Inntektsskatt, omfordeling og arbeidstilbud | 5 | Progressiv skatt ~60 %, omfordeling/velferdsfunksjon ~60 %, arbeidstilbud ~50 % → nivå 1–2. To av de faste storoppgave-alternativene bor her. Omfordeling er den verbale drøftingssøylen. |
| 4 | Offentlig prioritering: NKA, nåverdi og intertemporalt valg | 4 | Den andre store søylen. NKA ~55 %, nåverdi/kalkulasjonsrente ~50 % (fast koblet), intertemporalt/folketrygd ~40 % → nivå 1–2 → 3 teorikapitler + drillkapittel. |
| 5 | Kollektive valg og spesialtemaer | 4 | Valgparadoks ~50 % (verbal drøftingssøyle), velferdsteoremene ~50 %, profittskatt ~25 %, varehjelp ~20 %, skatteunndragelse ~25 % → nivå 2–3, samlet i kompakte kapitler. |
| 6 | Eksamenstrening | 4 | Begrepsdrill (sjanger A, ~15 gjengangere) + 3 komplette øvingseksamener som speiler den firdelte malen. |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjanger-/drillkapitler i siste del. Her ligger de to
   drillkapitlene (2.7 skatteinsidens/dødvektstap, 4.4 NKA/nåverdi) inne i sine egne
   søyler, fordi disse to sjangrene ER oppgave 3 og storoppgave-alternativet og må
   drilles umiddelbart etter teorien. Del 6 beholder begrepsdrillen (sjanger A) og de
   tre øvingseksamenene.
2. DNA-en har generiske «Del 1..N temadeler». Her er strukturen bevisst bygget rundt
   den firdelte eksamensmalen: skattesøylen (oppgave 3 + storoppgave-alternativ),
   prioriteringssøylen (storoppgave-alternativ), og de verbale drøftingssøylene
   (omfordeling, kollektive valg) som roterer inn i storoppgaven — dette speiler
   analysens §7 direkte.
3. Del 1 (matteverktøy) er strengt tatt forkunnskap, ikke et tema som testes isolert,
   men får egen (kompakt) del fordi Lagrange/elastisitet/nåverdi-metoden er en
   selvstendig ferdighet sensor forventer, og fordi den forankrer kryssbok-lenkene til
   SOK1002. Prøvene her er metode-/verktøyprøver.
4. Emnet er **regnefag med to verbale drøftingsdeler** (omfordeling, kollektive valg).
   Disse to får DNA-drofting-lån (posisjoner/spenninger, momentliste-løsninger) i
   sine drøftingskapitler (3.2, 5.1), men resten av boka er ren regnefag-DNA.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3): **A**
begrepsforklaringer, **B** kort teorispørsmål (Ramsey-intuisjon), **C**
skatteinsidens/dødvektstap i et marked, **D** Ramsey-regelen (utledning/anvendelse),
**E** progressiv inntektsskatt, **F** omfordeling/sosial velferdsfunksjon, **G**
NKA/nåverdi/kalkulasjonsrente, **H** arbeidstilbud og inntektsskatt, **I** intertemporalt
valg/folketrygd, **J** kollektive beslutninger/valgparadoks, **K** skatt på
bedrift/profitt/grunnrente, **L** varehjelp vs. kontantoverføring. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK2011

- **id:** `sok2011-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste firdelte malen (begrep + kort teori + skatteinsidens + to-alternativers storoppgave), temafrekvensene, sjangerkatalogen A–L og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈20 sett + 7 sensorveiledninger + 2 svarmanualer. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen (09–13) digitalt i Inspera, karakter A–F, 7,5 studiepoeng, håndtegnede figurer lastes opp; **hjelpemidler = kode C** (matematisk formelsamling + godkjent kalkulator — begrenset, tallregning forventes); oppgaver på **bokmål, nynorsk og (fra 2020) engelsk**; standardrubrikk om å presisere egne forutsetninger; (ii) **formatutviklingen**: fra «klassisk» format (3–5 spissede oppgaver, t.o.m. ~2019) til den **faste firdelte malen** stabil fra V2022 — (1) 5 begrep 20 %, (2) kort teori 10 %, (3) skatteinsidens/dødvektstap 30–35 %, (4) storoppgave med to alternativer 30–35 %; (iii) **temafrekvens-tabellen** (fra analysen §2): dødvektstap ~95 %, skattekile ~90 %, elastisitet↔tap/insidens ~85 %, skatteinsidens ~70 %, Ramsey ~65 %, progressiv skatt ~60 %, omfordeling/velferdsfunksjon ~60 %, NKA ~55 %, nåverdi/kalkulasjonsrente ~50 %, arbeidstilbud ~50 %, velferdsteoremene ~50 %, kollektive valg/valgparadoks ~50 %, intertemporalt/folketrygd ~40 %, profittskatt/grunnrente ~25 %, skatteunndragelse/Laffer ~25 %, varehjelp ~20 %; (iv) at oppgavene pakkes i **aktualitet** (alkoholavgift, vei-/baneutbygging, folketrygd, grunnrenteskatt, CO₂) men at modellen alltid er standard offentlig økonomi; (v) **sensorens metaregler** (fra analysen §4): regning + figur + verbal forklaring er én leveranse; forklar *hvorfor* (skattekile MBV > MK); koble alltid til elastisitet; presiser tolkning/forutsetninger; utledning er pluss; definisjonene forutsettes ikke kjent; svar poengtert; (vi) **karakterskillene** (§4): bunn (E–D) = riktig oppsett (likevekt før/etter skatt, riktig skattekile, riktige definisjoner); midt (C) = komplett utregning av insidens/proveny/dødvektstap for både enhets- og verdiskatt, korrekt elastisitetskobling og progressivitetsklassifisering, korrekt Lagrange-oppsett; topp (A/B) = **utleder Ramsey og dødvektstapsformelen** og bruker det kvadratiske forholdet, ser at substitusjons-/inntektseffekt trekker motsatt på arbeidstilbudet, regner elastisiteten eksplisitt langs lineær etterspørsel, behersker valgparadokset med parvis votering, drøfter fordelingshensyn mot ren effektivitet.
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk plassering: oppgave 1 = A (5 begrep); oppgave 2 = B (Ramsey-intuisjon); oppgave 3 = C (skatteinsidens/dødvektstap, evt. med D-innslag); oppgave 4 (storoppgave) = ett av {G (NKA/vei), E (progressiv skatt), K (bedrift/grunnrente)}, med F/H/I/J som roterende alternativer. **Prognose for neste eksamen**: overveldende sannsynlig den faste firdelte malen — 5 begrep (20 %) + Ramsey-intuisjon (10 %) + tallrik skatteinsidens-/dødvektstapsoppgave i et konkret marked (30–35 %) + storoppgave med to alternativer (NKA/vei- eller baneinvestering mot progressiv inntektsskatt eller bedrifts-/grunnrenteskatt, 30–35 %). Avslutt med **avgrensningen**: hva som IKKE er pensum (oligopol/spill/Pigou-eksternalitet hører til SØK1011; asymmetrisk informasjon/atferd til ECON1220; Mirrlees-optimal-beskatning til SØK3007; rent-seeking/medianvelger/Niskanen er ikke videreført fra det nedlagte SØK2103), og **leseplanen**: Del 1 er verktøy man må ha klart; Del 2 og Del 4 er «må perfekt» og bærer oppgave 3 + storoppgaven; Del 3 og Del 5 roterer inn i storoppgaven; Del 6 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt firedelt mal og 240 minutter — sett opp tidsbudsjett for de fire oppgavene» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; pugge stoff fra naboemnene (oligopol/Pigou-eksternalitet fra SØK1011, asymmetrisk informasjon fra ECON1220) som ikke er i SØK2011-pensum; tro at Ramsey-utledningen alltid er obligatorisk (den er pluss, men mekanismen må uansett forklares).
- **Quiz: 14 · Flashcards: 12** (eksamensform, frekvenser, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Matematisk verktøykasse *(prioritet: forkunnskap — må sitte)*

> **Formelsamling-skille:** kode C-formelsamlingen inneholder derivasjonsregler,
> Lagrange-oppskriften, elastisitetsdefinisjonen, nåverdi-/annuitetsformlene og
> standardderiverte — det studenten ikke trenger pugge, men **må kunne bruke**.
> Hvert kapittel i Del 1 skal derfor eksplisitt merke «dette står i formelsamlingen
> (slå opp)» vs. «dette må du kunne sette opp og tolke selv». Selve *anvendelsen*
> (sette opp Lagrange for et konkret Ramsey-/velferdsproblem, tolke en elastisitet,
> diskontere en nyttestrøm) er aldri i formelsamlingen og er det eksamen tester.
> Denne delen er **kompakt** — hoveddelen av derivasjons-/optimeringsapparatet ligger
> allerede i SOK1002, som det kryssrefereres til.

#### Kapittel 1.1: Optimering med bibetingelse: Lagrange for Ramsey og velferd

- **id:** `sok2011-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori (verktøy)
- **description:** Lagrange-metoden brukt på SØK2011s to signaturproblemer — minimering av samlet dødvektstap under provenybibetingelse (Ramsey) og maksimering av additiv velferd under inntektsbibetingelse — med tolkning av multiplikatoren.
- **Eksamensbelegg:** Selve metoden bak Ramsey-utledningen (sjanger D, ~65 %) og velferdsmaksimeringen (sjanger F, ~60 %). Fasitene setter opp Lagrange uten kommentar; studenten må kunne det flytende. Bygger på SOK1002 kap. 1.2 (Lagrange, tangering, andreordensbetingelser) — kryssrefereres, ikke gjentas fullt. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Forkunnskap: [Optimering: Lagrange, tangering og andreordensbetingelser](/sok1002/sok1002-1-2) fra SOK1002 — den generelle metoden. Her **anvendt**: for $\min\; g(x_1,x_2)$ (samlet dødvektstap) gitt $h(x_1,x_2)=c$ (samlet proveny), sett $\mathcal{L} = g - \lambda(h-c)$, FOC → tangeringsbetingelse; og for $\max\; W = \sum U_i(I_i)$ gitt $\sum I_i = M$, FOC → likhet i vektet grensenytte. Tolkning av $\lambda$ = skyggepris (marginalt effektivitetstap per krone proveny / marginal velferd per krone omfordelt). Merk at Lagrange-oppskriften står i formelsamlingen; oppsettet for et konkret offentlig-økonomi-problem og tolkningen av $\lambda$ gjør studenten selv. Andreordensbetingelse nevnes kvalitativt (konvekst tap / konkav velferd sikrer indre løsning). *(verifiser at gjeldende kode C-formelsamling inneholder Lagrange-oppskriften.)*
- **Oppgavesjangre:** Byggekloss for D og F. Mønstereksempel: «Maksimer $W = U_1(I_1) + U_2(I_2)$ med $U_i = k_i\sqrt{I_i}$ gitt $I_1 + I_2 = 300$ med Lagrange, og tolk multiplikatoren.»
- **Typiske feil:** Glemme bibetingelsen som tredje likning; feiltolke $\lambda$; bruke Lagrange «for sikkerhets skyld» der en direkte substitusjon holder; hoppe over andreordensbetingelsen ved maksimering.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.2: Elastisitet, lineær etterspørsel og areal av trekanter

- **id:** `sok2011-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2011-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Elastisitet som relativ endring, hvorfor den varierer langs en lineær etterspørselskurve, og hvordan man regner arealet av provenyrektangelet og dødvektstapstrekanten — det geometriske håndverket bak hele skattesøylen.
- **Eksamensbelegg:** Elastisitet↔dødvektstap/insidens er rød tråd (~85 %); dødvektstapet regnes ut som trekantareal i ~95 % av settene. At elastisiteten **varierer** langs en lineær kurve er eksplisitt sensorkrav (feilkatalog §5.4). Bygger på SOK1002 kap. 1.3/2.8 (elastisitet) — kryssrefereres. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Forkunnskap: [Elastisitet som verktøy](/sok1002/sok1002-1-3) og [Elastisiteter: egenpris, kryss og inntekt](/sok1002/sok1002-2-8) fra SOK1002. Her: **etterspørselselastisitet** $\eta = \frac{dX}{dP}\cdot\frac{P}{X}$ (tallverdi, dimensjonsløs); for **lineær** etterspørsel $X = a - bP$ er $\eta = -bP/X$, som **varierer** langs kurven (elastisk øverst, uelastisk nederst) — vis dette eksplisitt, det forklarer hvorfor dødvektstapet endrer seg med hvor på kurven skatten treffer. **Areal av trekanter og rektangler:** provenyrektangel (skatt per enhet × kvantum) og dødvektstapstrekant $\tfrac12\,\Delta X\,\Delta P$; hvordan lese av $\Delta X$ og $\Delta P$ fra en figur. Foregriper standardfiguren (proveny = $ABDE$, dødvektstap = $BCD$) i kap. 2.1. Skillet elastisitet vs. stigningstall (helning har enhet, elastisitet er relativ).
- **Oppgavesjangre:** Byggekloss for C og D. Mønstereksempel: «Etterspørselen er $X = 100 - 2P$. Regn ut elastisiteten ved $P = 10$ og ved $P = 40$, og forklar hvorfor de er ulike. Finn deretter arealet av trekanten med grunnlinje $\Delta X = 8$ og høyde $\Delta P = 5$.»
- **Typiske feil:** Behandle elastisiteten som konstant langs en lineær kurve (feilkatalog §5.4); forveksle elastisitet og stigningstall; regne elastisiteten i feil punkt; glemme faktoren $\tfrac12$ i trekantarealet.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Nåverdi, diskontering og kalkulasjonsrente

- **id:** `sok2011-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok2011-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Diskontering av framtidige nytte- og kostnadsstrømmer til nåverdi, uendelig annuitet, og hvordan kalkulasjonsrenten avgjør lønnsomhet — det matematiske grepet bak NKA og intertemporalt valg.
- **Eksamensbelegg:** Nåverdi/kalkulasjonsrente ~50 % (alltid koblet til NKA, sjanger G, og intertemporalt valg, sjanger I). «Rentens rolle for lønnsomheten» er fast sensorkrav (feilkatalog §5.8). Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** **Nåverdi** av et beløp $C_n$ om $n$ år ved rente $r$: $PV = C_n/(1+r)^n$; nåverdi av en strøm; **uendelig annuitet** $PV = A/r$ (konstant årlig beløp $A$ i det uendelige) — sentralt fordi vei-/baneprosjekter ofte modelleres med uendelig levetid. **Kalkulasjonsrentens rolle:** høyere $r$ senker nåverdien av framtidig nytte og **straffer prosjekter med sen avkastning** — vis med et talleksempel at samme nyttestrøm kan være lønnsom ved lav rente og ulønnsom ved høy. Skill **realrente** (SØK2011 regner realstørrelser) fra nominell. Merk hva formelsamlingen dekker (annuitetsformlene) vs. hva studenten selv setter opp (hvilke strømmer diskonteres, og tolkningen av at renten endrer konklusjonen). *(verifiser at annuitetsformelen ligger i gjeldende kode C-formelsamling.)*
- **Oppgavesjangre:** Byggekloss for G og I. Mønstereksempel: «Et prosjekt gir 50 i nytte hvert år i det uendelige og koster 800 nå. Er det lønnsomt ved $r = 5\%$? Ved $r = 8\%$? Forklar hvorfor renten avgjør.»
- **Typiske feil:** Diskontere feil vei (gange i stedet for dele); glemme uendelig-annuitet-formelen $A/r$; blande real- og nominell rente; ikke drøfte at renten endrer konklusjonen (§5.8).
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (1.A Lagrange-oppsett på et Ramsey-lignende minimeringsproblem og et velferdsmaksimeringsproblem, med $\lambda$-tolkning; 1.B elastisitet langs lineær etterspørsel + areal av proveny-/dødvektstapsfigur; 1.C nåverdi og uendelig annuitet med rentesensitivitet; 1.D blandet verktøyprøve — Lagrange + elastisitet + nåverdi anvendt på små offentlig-økonomi-utsnitt — verktøyprøver som ender på anvendelse).

---

### Del 2 — Skatteeffektivitet: dødvektstap, insidens og Ramsey *(prioritet: PERFEKT — ryggraden, oppgave 3 + storoppgave)*

#### Kapittel 2.1: Skattekilen og dødvektstap: hvorfor skatt gir effektivitetstap

- **id:** `sok2011-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-1-2`
- **Kapitteltype:** teori
- **description:** Hvorfor en skatt/avgift skaper et dødvektstap — skattekilen mellom betalingsvillighet og grensekostnad, standardfiguren med proveny og dødvektstap, og skillet mellom overføring og reelt tap.
- **Eksamensbelegg:** Dødvektstap ~95 % (selve motoren); skattekilen/«hvorfor tapet oppstår» ~90 % — fast forklaringskrav i tillegg til tallet. At provenyet er en overføring, ikke et tap, er eksplisitt sensorpoeng (feilkatalog §5.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Skattekile:** en avgift $T$ per enhet driver en kile mellom prisen konsumenten betaler ($P_E$) og prisen produsenten mottar ($P_S = P_E - T$). I markedskrysset er $MBV = MK$; skatten flytter tilpasningen dit $MBV = MK + T$, så det handles **mindre** enn effektivt. **Dødvektstapet** = summen av tapt konsument- og produsentoverskudd som **ikke** går til staten = trekantarealet fra det reduserte kvantumet ($\tfrac12\,\Delta X\,\Delta P$, der $\Delta P = T$). Standardfiguren: **proveny = areal $ABDE$** (skatt × nytt kvantum, en **overføring** til staten), **dødvektstap = trekant $BCD$** (rent tap). **Mekanismen** (sensorkravet): tapet oppstår fordi konsumenten substituerer bort fra godet uten å ta hensyn til at staten mister proveny på de bortfalte enhetene — $MBV > MK$ på de enhetene som ikke lenger handles. Understrek skillet **overføring vs. tap**: provenyet er ikke borte for samfunnet, bare flyttet; tapet er trekanten. Figurkrav: navngi $P_E$, $P_S$, skattekilen, provenyrektangelet og dødvektstapstrekanten.
- **Oppgavesjangre:** A + C-fundament. Mønstereksempel (A/B): «Forklar hva et dødvektstap ved en vareavgift er, hvorfor det oppstår, og hvorfor statens proveny ikke er en del av tapet. Illustrer i figur.»
- **Typiske feil:** Tro at dødvektstapet er den manglende skatteinnbetalingen / at provenyet er tapt (feilkatalog §5.1); gi ren areal-utregning uten den verbale mekanismen (skattekile MBV > MK) (§5.2); umerket figur (§5.11).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Skatteinsidens: hvem bærer skatten

- **id:** `sok2011-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2011-2-1`
- **Kapitteltype:** teori
- **description:** Hvordan skattebyrden fordeles mellom konsument og produsent — regnet ut fra oppgitte tilbud/etterspørsel, for enhetsskatt og verdiskatt — og hvorfor relativ elastisitet avgjør fordelingen.
- **Eksamensbelegg:** Skatteinsidens ~70 % — den store regneoppgaven (oppgave 3), storoppgave H2021/H2023/V2024. At den **minst elastiske** parten bærer størst andel er kjerneresultatet; enhets- vs. verdiskatt skilles. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Metode (fasitenes standard):** 1) finn likevekt uten skatt ved $X_D = X_S$; 2) legg på skatten — **enhetsskatt $T$**: produsenten mottar $P_E - T$ (skift tilbudskurven vertikalt med $T$); **verdiskatt $t$**: produsenten sitter igjen med $(1-t)P_E$ eller konsumenten betaler $(1+t)P_S$ — finn ny likevekt. 3) **Skatteinsidens:** $\Delta P$ for konsument ($P_E^{ny} - P^0$) vs. for produsent ($P^0 - P_S^{ny}$); andelen hver bærer = deres $\Delta P$ / total skatt. **Nøkkelresultat:** den **minst elastiske** parten bærer størst andel (formelt bæres andelen i forhold til de relative elastisitetene). 4) **Proveny** = skatt per enhet × nytt kvantum. 5) **Dødvektstap** = $\tfrac12\,\Delta X\,\Delta T$. Regn et fullt talleksempel begge skatteformer. Fasit-kalibrerte former (kun til vanskelighetsnivå, ikke gjenbruk): $X_D = 1\,000\,000 - 30\,000P$, $X_S = 20\,000P$, avgift 20 → konsument bærer 8 (40 %), produsent 12 (60 %); enhetsskatt 20 med $P_E = 100 - 3X$, $P_S = 20 + X$ → konsument ¾, DWL = 50; verdiskatt 50 % → DWL = 128 (mer enn 50 % høyere pga. kvadratisk tap).
- **Oppgavesjangre:** C. Mønstereksempel: «Etterspørselen er $X_D = 800 - 20P$ og tilbudet $X_S = 30P$. En avgift på 10 kr per enhet innføres. Finn hvordan avgiften fordeles på konsument- og produsentpris, statens proveny og dødvektstapet, og forklar hvorfor fordelingen er som den er.»
- **Typiske feil:** Anta at den **elastiske** parten bærer mest (motsatt — den *inelastiske* bærer mest) (feilkatalog §5.3); regne verdiskatt som om den var enhetsskatt; glemme å oppdatere kvantumet i provenyet; ikke koble fordelingen til de relative elastisitetene.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.3: Elastisitet og dødvektstapets størrelse: den kvadratiske sammenhengen

- **id:** `sok2011-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2011-2-2`
- **Kapitteltype:** teori
- **description:** Hvorfor dødvektstapet vokser med elastisiteten og **kvadratisk** i skattesatsen — formelen $\tfrac12\,\eta\,P\,t^2$ og hva den betyr for skattepolitikken.
- **Eksamensbelegg:** Elastisitet↔dødvektstap ~85 % (rød tråd); den kvadratiske egenskapen er grunnlaget for Ramsey (kap. 2.5) og «mange små skatter»-spørsmålet (sjanger B, oppgave 2). Prioritet: **perfekt**.
- **Innholdskontrakt:** Utled/vis at dødvektstapet for et gode kan skrives $DWL = \tfrac12\,\eta\,P\,X\,t^2$ (eller $\tfrac12\,\eta\,P\,t^2$ i intensiv form) — hvor $\eta$ er (tallverdien av) etterspørselselastisiteten, $t$ skattesatsen. **To sentrale egenskaper:** (i) tapet vokser med **elastisiteten** — mer elastisk etterspørsel → større kvantumsrespons → større trekant; skatt derfor den minst elastiske varen mest (foregriper Ramsey); (ii) tapet er **kvadratisk** i skattesatsen — å doble satsen firedobler tapet, så én ekstra prosent på en allerede høy sats koster mye mer enn på en lav (grunnlaget for «mange små skatter framfor få store»). Vis begge egenskapene med talleksempel. Koble til den varierende elastisiteten langs lineær etterspørsel (kap. 1.2). De beste utleder formelen for å vise den kvadratiske egenskapen.
- **Oppgavesjangre:** B + C-fordypning. Mønstereksempel (B): «Hvorfor er det en fordel å skattlegge mange markeder med lave satser framfor få markeder med høye satser? Vis gjerne med dødvektstapsformelen.»
- **Typiske feil:** Tro at dødvektstapet er **lineært** i skatten (det er kvadratisk) (feilkatalog §5.3); glemme koblingen til elastisitet; ikke se at «mange små skatter» følger av kvadratisiteten; regne på konstant elastisitet der den varierer (§5.4).
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 2.4: Skiftende etterspørsel og komplement-/substitutt-effekter

- **id:** `sok2011-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok2011-2-2`
- **Kapitteltype:** teori
- **description:** Hvordan skatteinsidens og dødvektstap endres når etterspørselen skifter — ved ulik elastisitet i ulike konsumentgrupper, eller ved endringer i en komplementær/substituerbar vare.
- **Eksamensbelegg:** Vanlig tillegg til skatteinsidensoppgaven (~30–40 % av C-oppgavene): «yngre vs. eldre alkoholkonsumenter» (ulik elastisitet), «naboland øker avgift → import-substitutt → etterspørsel skifter ut». Prioritet: **kunne** (nivå 2, høyfrekvent påbygg til C).
- **Innholdskontrakt:** **Ulik elastisitet i grupper:** en gruppe med mer elastisk etterspørsel bærer mindre av avgiften og bidrar mindre til proveny men mer til dødvektstap per krone proveny — vis at aggregert insidens avhenger av gruppesammensetningen. **Skift i etterspørsel:** når en **substituttvare** blir dyrere (f.eks. naboland øker sin avgift → grensehandel faller → innenlandsk etterspørsel skifter **ut**), øker likevektsmengden og provenyet; en dyrere **komplementærvare** skifter etterspørselen **inn**. Vis hvordan et slikt skift endrer likevekt, insidens, proveny og dødvektstap i figur. Koble til krysspriselastisitet (SOK1002 kap. 2.8, kryssrefereres). Understrek at modellen er standard — bare utgangspunktet flyttes.
- **Oppgavesjangre:** C (påbygg). Mønstereksempel: «Etter at nabolandet øker sin alkoholavgift, skifter innenlandsk etterspørsel etter øl utover. Vis hvordan dette påvirker likevekt, avgiftsproveny og dødvektstap ved en gitt innenlandsk avgift.»
- **Typiske feil:** Forveksle skift i (hele) kurven med bevegelse langs kurven; feil retning på substitutt-/komplement-skiftet; glemme at både proveny og dødvektstap endres når kurven skifter; ikke tolke gruppeforskjellen i elastisitet.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.5: Ramsey-regelen: optimal vareskatt

- **id:** `sok2011-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `sok2011-2-3`, `sok2011-1-1`
- **Kapitteltype:** teori
- **description:** Utledningen av Ramsey-regelen — minimer samlet dødvektstap under provenybibetingelse via Lagrange → skattesatsene omvendt proporsjonale med elastisitetene — og tolkningen (skattlegg det inelastiske godet mest) med fordelingsnyansen.
- **Eksamensbelegg:** Ramsey-regelen ~65 % (H2019 full utledning, V2020, V2021, V2024-intuisjon, H2022) — **toppkarakter-differensiatoren** i skattedelen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Vis først at dødvektstapet for gode $z$ kan skrives $\tfrac12\,\eta_z\,P_z\,X_z\,t_z^2$ (fra kap. 2.3). **Utledning (sjanger D):** minimer **samlet** dødvektstap for to varer $\min\; \sum_z \tfrac12\,\eta_z\,P_z\,X_z\,t_z^2$ under bibetingelsen at samlet proveny er gitt; sett opp Lagrange, deriver mhp. hver skattesats → **Ramsey-betingelsen**: skattesatsene skal være **omvendt proporsjonale med etterspørselselastisitetene**, $t_x/t_y = \eta_y/\eta_x$. **Tolkning:** skattlegg det **inelastiske** godet mest, fordi dødvektstapet vokser med elastisiteten — vridningen minimeres når den legges der atferdsresponsen er minst. **Nyanser:** lik skatt på alt er optimalt **bare** hvis elastisitetene er like; **fordelingshensyn** kan begrunne avvik (inelastiske goder som mat/nødvendigheter konsumeres ofte relativt mer av fattige, så ren Ramsey kan være regressiv → effektivitet vs. rettferdighet). De beste utleder regelen formelt; en klar verbal/grafisk forklaring kan gi full uttelling der oppgaven sier «forklar kort».
- **Oppgavesjangre:** D. Mønstereksempel: «To varer skal gi staten en gitt skatteinntekt med minst mulig samlet effektivitetstap. Utled forholdet mellom de optimale skattesatsene, forklar resultatet, og drøft en grunn til å avvike fra det.»
- **Typiske feil:** Snu regelen (skattlegge det elastiske mest); glemme provenybibetingelsen i Lagrange; påstå at lik skatt alltid er optimal; ikke nevne fordelingsnyansen (effektivitet vs. rettferdighet); ikke tolke resultatet verbalt.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.6: Skatteunndragelse og Lafferkurven

- **id:** `sok2011-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `sok2011-2-3`
- **Kapitteltype:** teori
- **description:** Skillet mellom lovlig skattetilpasning og ulovlig skatteunndragelse, og Lafferkurven — forholdet mellom skattesats og proveny.
- **Eksamensbelegg:** Skatteunndragelse/Laffer ~25 % (V2024-begrep, arv fra det nedlagte SØK2008/SØK3007). Fast begrepsgjenganger (sjanger A). Prioritet: **kjenne** (nivå 3, men sikker begrepsoppgave).
- **Innholdskontrakt:** **Skattetilpasning (lovlig)** = å endre atferd for å redusere skatt innenfor loven (jobbe mindre, endre konsum); **skatteunndragelse (ulovlig)** = å underrapportere skattepliktig inntekt/omsetning. Kort om unndragelse som valg under usikkerhet (marginalskatt vs. oppdagingssannsynlighet og straff — indre løsning vs. hjørneløsning) — nivå: begrep, ikke full modell. **Lafferkurven:** proveny som funksjon av skattesats er hump-formet — null ved sats 0 og (i grensen) ved sats 100 %, med et maksimum imellom; høyere sats gir høyere proveny opp til toppen, deretter lavere fordi skattegrunnlaget krymper (atferdsrespons). Understrek at kurvens form følger av at skattegrunnlaget selv avhenger av satsen — koble til dødvektstapets kvadratiske vekst. *(verifiser at skatteunndragelse fortsatt står som begrepsgjenganger i gjeldende SØK2011 og ikke bare i SØK3007.)*
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort forskjellen på skattetilpasning og skatteunndragelse, og hva Lafferkurven sier om forholdet mellom skattesats og proveny.»
- **Typiske feil:** Blande lovlig tilpasning og ulovlig unndragelse; tro at høyere sats alltid gir høyere proveny (Laffer-toppen); ikke koble kurvens fall til at grunnlaget krymper.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.7: Drill: skatteinsidens- og dødvektstapsoppgaven

- **id:** `sok2011-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `sok2011-2-5`, `sok2011-2-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 3: fra oppgitte tilbud/etterspørsel til fullført A-besvarelse med likevekt før/etter skatt, insidens, proveny, dødvektstap, elastisitetskobling og Ramsey-vinkling.
- **Eksamensbelegg:** Dekker sjangrene C, D (og B) samlet — skatteinsidens-/dødvektstapsoppgaven som utgjør oppgave 3 (30–35 %) og ofte storoppgave-alternativet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) finn likevekt uten skatt ($X_D = X_S$); 2) legg på skatten (enhet: skift tilbud med $T$; verdi: $(1-t)$-faktor) og finn ny likevekt; 3) **insidens**: $\Delta P$ konsument vs. produsent, andeler — koble til relative elastisiteter; 4) **proveny** = skatt × nytt kvantum; 5) **dødvektstap** = $\tfrac12\,\Delta X\,\Delta T$, forklar skattekilen; 6) tolk elastisiteten (varierer langs lineær kurve); 7) evt. skift i etterspørsel (substitutt/komplement) eller Ramsey-vinkling (to varer, optimal fordeling); 8) figur med $P_E$, $P_S$, proveny og dødvektstap navngitt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig skattekilen, den verbale mekanismen, elastisitetskoblingen, overføring vs. tap). **10–15 oppgaver** på eksamensnivå som roterer skatteform (enhet/verdi), funksjonsform (lineær/ikke-lineær tilbud/etterspørsel), tillegg (gruppeelastisitet, substitutt-skift, Ramsey), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** C, D, B. Mønstereksempel (full kjede): «(a) Med $X_D = 600 - 15P$ og $X_S = 25P$, finn likevekten. (b) En avgift på 8 kr per enhet innføres — finn insidens, proveny og dødvektstap. (c) Forklar hvorfor konsumenten bærer den andelen han gjør. (d) Ville et gode med mer uelastisk etterspørsel gitt større eller mindre dødvektstap ved samme avgift?»
- **Typiske feil:** Hele skatte-repertoaret fra §5: proveny forvekslet med tap (§5.1), manglende mekanisme (§5.2), feil elastisitet↔insidens/lineært tap (§5.3), konstant elastisitet langs lineær kurve (§5.4), umerket figur (§5.11).
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper skatteeffektivitet — dødvektstap, skattekile, skatteinsidens, Ramsey-regelen, skatteunndragelse/Laffer, sjanger A; 2.B skatteinsidens for enhets- OG verdiskatt med proveny og dødvektstap, sjanger C; 2.C dødvektstapets elastisitets-/kvadratiske egenskaper + Ramsey-utledning, sjanger B+D; 2.D full skatteinsidensoppgave på eksamensnivå inkl. etterspørselsskift og Ramsey-vinkling, sjanger C+D).

---

### Del 3 — Inntektsskatt, omfordeling og arbeidstilbud *(prioritet: PERFEKT/KUNNE — storoppgave-alternativer)*

#### Kapittel 3.1: Progressiv inntektsskatt

- **id:** `sok2011-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-1-1`
- **Kapitteltype:** teori
- **description:** Progressivitet definert som stigende gjennomsnittsskatt (ART < MRT), vist analytisk, klassifisering av skattesystemer (proporsjonal, bunnfradrag, trappetrinn) og illustrasjon i budsjettfigur.
- **Eksamensbelegg:** Progressiv inntektsskatt ~60 % (V2020, H2022, H2023, V2024) — fast storoppgave-alternativ. Feilklassifisering (kalle proporsjonal skatt progressiv) er klassisk felle. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Definisjon:** en skatt er **progressiv** når **gjennomsnittsskatten $ART = T(I)/I$ stiger med inntekten**, ekvivalent med at **marginalskatten $MRT = T'(I)$ overstiger gjennomsnittsskatten** ($MRT > ART \Leftrightarrow d(T/I)/dI > 0$). Vis ekvivalensen analytisk ved å derivere $T/I$. **Klassifisering (sensor-favoritt):** proporsjonal $T = tI$ har konstant $ART = t = MRT$ → **ikke** progressiv; **bunnfradrag + flat sats** $T = t(I - B)$ har $ART = t(1 - B/I)$ som **stiger** med $I$ → **er** progressiv; **trappetrinn** med økende marginalsatser → progressiv. **Budsjettfigur:** illustrer et to-trinns skattesystem i disponibel-inntekt-figuren (knekk der marginalsatsen øker). Kort om individets tilpasning i knekkpunktet. Skill regressiv/proporsjonal/progressiv presist.
- **Oppgavesjangre:** E. Mønstereksempel: «Er et skattesystem med et bunnfradrag på 100 000 og en flat sats på 30 % over dette progressivt? Vis analytisk ved å regne gjennomsnitts- og marginalskatt for to inntektsnivåer, og illustrer i en figur.»
- **Typiske feil:** Kalle en proporsjonal skatt ($T = tI$) progressiv (feilkatalog §5.6); ikke se at bunnfradrag + flat sats gir stigende $ART$; forveksle marginal- og gjennomsnittsskatt; glemme den analytiske visningen (bare påstå).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.2: Omfordeling og sosial velferdsfunksjon

- **id:** `sok2011-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok2011-1-1`
- **Kapitteltype:** teori (med drøftingslån)
- **description:** Begrunnelsen for omfordeling, den additive sosiale velferdsfunksjonen og maks-min-kriteriet, velferdsmaksimering som Lagrange-problem, og utfordringene med å måle og aggregere nytte (Arrow).
- **Eksamensbelegg:** Omfordeling/velferdsfunksjon ~60 % (H2022, H2023, V2021, V2022) — fast storoppgave-alternativ, både verbal drøfting og regnevariant (Mary/Jane-, Alex/Bob-optimering). Prioritet: **perfekt** (drøftingssøyle med regnekjerne). Låner struktur fra `DNA-drofting.md` (posisjoner/spenninger + momentliste) for den verbale delen.
- **Innholdskontrakt:** **Begrunnelse for omfordeling:** når staten skal tjene innbyggerne, må dens preferanser (den **sosiale velferdsfunksjonen**) bygge på innbyggernes nyttefunksjoner. Med **positiv, men avtakende** effekt av individuell nytte på samfunnsvelferden gir mindre forskjeller høyere velferd → argument for omfordeling når nytte er sterkt knyttet til inntekt (avtakende grensenytte av inntekt). **Additiv velferdsfunksjon** $W = \sum U_i(I_i)$ og **maks-min-kriteriet** $W = \min U_i$ (Rawls). **Regnevariant (sjanger F):** maksimer $W = \sum U_i$ under inntektsbibetingelse $\sum I_i = M$ med Lagrange → optimal fordeling der (vektet) grensenytte er lik. Fasit-kalibrerte former (kun vanskelighetsnivå): $U_M = 100\sqrt{I_M}$, $U_J = 200\sqrt{I_J}$, total 300 → $I_M = 60$, $I_J = 240$; Alex/Bob med 5000, likedeling vs. additiv maks. **Drøftingsakser (posisjoner/spenninger):** effektivitet vs. likhet (omfordeling koster effektivitet via skattekilen); utilitarisme (sum) vs. Rawls (maks-min); **utfordringer**: nytte er **ordinal** og kan ikke uten videre måles/aggregeres/sammenlignes mellom personer (kryssref. SOK1002 om ordinal nytte), **Arrows umulighetsteorem** (ingen konsistent aggregering av individuelle rangeringer oppfyller alle rimelige krav). Momentliste-løsning på den verbale delen.
- **Oppgavesjangre:** F. Mønstereksempel: «To innbyggere har nyttefunksjonene $U_1 = a\sqrt{I_1}$ og $U_2 = b\sqrt{I_2}$ og skal dele en gitt inntekt. Finn fordelingen som maksimerer en additiv velferdsfunksjon, og drøft utfordringene ved å bruke slike funksjoner til å begrunne omfordeling.»
- **Typiske feil:** Summere ordinal nytte ukritisk / ignorere aggregeringsproblemet og Arrow (feilkatalog §5.7); sammenligne nyttenivå kardinalt mellom personer; glemme inntektsbibetingelsen i Lagrange; ikke drøfte effektivitet-vs-likhet-spenningen; blande additiv og maks-min.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Arbeidstilbud og inntektsskatt

- **id:** `sok2011-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-3-1`
- **Kapitteltype:** teori
- **description:** Individets valg mellom inntekt/konsum og fritid, hvordan inntektsskatt via substitusjons- og inntektseffekt gir usikker nettoeffekt på arbeidstilbudet — og at kun substitusjonseffekten driver dødvektstapet.
- **Eksamensbelegg:** Arbeidstilbud ~50 % (V2019, H2019, V2022, H2021) — fast storoppgave-alternativ eller teoridel. At nettoeffekten er **usikker** og at bare substitusjonseffekten driver tapet er sensor-gull. Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt:** Modell: nytte $U(I, L)$ over inntekt/konsum $I$ og fritid $L$; tidsbudsjett $I = w(T - L)$, med skatt $I = w(1-t)(T-L)$. Løs med Lagrange (eller tangering) for optimal fritid/arbeidstid — samme nyttemaks-apparat som SOK1002 (kryssref. [Substitusjons- og inntektseffekt](/sok1002/sok1002-2-6)). **Virkningen av inntektsskatt:** skatten senker nettolønnen $w(1-t)$ → **substitusjonseffekt** (fritid blir relativt billigere → mer fritid, mindre arbeid) og **inntektseffekt** (personen blir fattigere → mindre fritid, mer arbeid) trekker **motsatt** → **nettoeffekten på arbeidstilbudet er usikker** (avhenger av hvilken effekt som dominerer). **Kritisk skille:** effekten på *dødvektstapet* avhenger **kun** av substitusjonseffekten (den rene vridningen), mens effekten på *arbeidstilbudet* avhenger av begge. Fasit-kalibrert form (kun vanskelighetsnivå): $U = I + 400\ln L$, $w = 25$, $T = 60$ → uten skatt $L = 16$ (44 t arbeid); med $t = 20\%$ → $L = 20$ (40 t); substitusjonseffekten dominerer. Figur i $(L, I)$-planet.
- **Oppgavesjangre:** H. Mønstereksempel: «Forklar hvordan innføring av en inntektsskatt påvirker en persons arbeidstilbud. Skill mellom substitusjons- og inntektseffekt, forklar hvorfor nettoeffekten er usikker, og hvorfor dødvektstapet likevel bare avhenger av den ene effekten.»
- **Typiske feil:** Blande substitusjons- og inntektseffekt eller konkludere **sikkert** om nettoeffekten (den er usikker) (feilkatalog §5.5); tro at dødvektstapet avhenger av begge effekter; glemme tidsbudsjettet; ikke tolke resultatet verbalt.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 3.4: Intertemporalt valg, sparing og folketrygd

- **id:** `sok2011-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-3-3`, `sok2011-1-3`
- **Kapitteltype:** teori
- **description:** To-periodemodellen for konsum og sparing, intertemporal budsjettbetingelse i nåverdi, og hvordan en pay-as-you-go-folketrygd med annen «avkastning» enn banken påvirker individets tilpasning.
- **Eksamensbelegg:** Intertemporalt/folketrygd ~40 % (H2019, V2020, V2022) — roterer inn i storoppgaven. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** To perioder, konsum $x_1, x_2$, inntekt $m_1, m_2$, rente $r$; sparing/lån i bank. **Intertemporal budsjettbetingelse** (nåverdi av konsum = nåverdi av inntekt): $x_1 + \frac{x_2}{1+r} = m_1 + \frac{m_2}{1+r}$; helning $-(1+r)$. Tangeringsbetingelse **MSB $= 1+r$**. Løs → optimalt konsum og **sparing** $S = m_1 - x_1^*$. Bygger på SOK1002 kap. 4.2 ([Intertemporalt valg](/sok1002/sok1002-4-2)) — kryssrefereres for grunnmodellen. **Folketrygd:** **pay-as-you-go** = dagens ytelser finansieres av dagens skatt (ingen oppbygd fond). Analyser hvordan en folketrygd som gir en annen «avkastning» enn banken (f.eks. trygden gir 15 %, banken 20 %) påvirker individets sparetilpasning — hvis trygden gir lavere avkastning enn banken, fortrenger den privat sparing ufullstendig / vrir tilpasningen (verbalt + analytisk). Figur med intertemporal budsjettlinje.
- **Oppgavesjangre:** I. Mønstereksempel: «En person kan spare/låne i bank til 20 % rente, mens folketrygden gir 15 % på innbetalt beløp. Med inntekt 200 i periode 1 og 100 i periode 2 og $U = x_1^{0{,}5}x_2^{0{,}5}$, finn optimal sparing og forklar hvordan folketrygden påvirker tilpasningen.»
- **Typiske feil:** Diskontere feil vei / feil oppsett av nåverdi (kryssref. §5-lignende fra kap. 1.3); glemme at pay-as-you-go ikke bygger fond; anta entydig fortegn på renteeffekten for en sparer; ikke tolke virkningen av trygdeavkastningen verbalt.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 3.5: Drill: inntektsskatt, omfordeling og arbeidstilbud

- **id:** `sok2011-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok2011-3-4`, `sok2011-3-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på storoppgave-alternativene i denne delen: progressivitet vist analytisk, velferdsmaksimering som Lagrange-problem, arbeidstilbud med SE/IE, og folketrygd/sparing.
- **Eksamensbelegg:** Dekker sjangrene E, F, H, I samlet — de fire storoppgave-alternativene som roterer inn (30–35 % når de kommer). Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift per sjanger:** (E) klassifiser systemet, regn $ART$ og $MRT$ for to inntekter, vis progressivitet analytisk, tegn budsjettfigur; (F) sett opp additiv velferd + inntektsbibetingelse, Lagrange → optimal fordeling, drøft aggregering/Arrow; (H) $U(I,L)$ + tidsbudsjett med skatt, løs, dekomponer SE/IE, konkluder usikkert om arbeidstilbud men bestemt om dødvektstap; (I) intertemporal budsjettbetingelse, optimal sparing, folketrygdens virkning. **Gjennomregnet case per sjanger med sensor-margnotater** (uttelling ved hvert steg — særlig progressivitetsklassifiseringen, aggregeringsdrøftingen, det usikre arbeidstilbudet, folketrygdens vridning). **10–14 oppgaver** som roterer sjanger E/F/H/I × kontekst, alle med nyskrevne tall og `solution` + `hints`.
- **Oppgavesjangre:** E, F, H, I. Mønstereksempel (blandet): «(a) Klassifiser et to-trinns skattesystem og vis at det er progressivt. (b) To personer skal dele 400 med $U_i = k_i\sqrt{I_i}$ — finn den velferdsmaksimerende fordelingen og drøft én innvending mot slik omfordeling.»
- **Typiske feil:** Hele §5-repertoaret for denne delen: feilklassifisert progressivitet (§5.6), ukritisk nyttesummering/Arrow (§5.7), SE/IE-forveksling og sikker konklusjon om arbeidstilbud (§5.5), utolkede tall (§5.10-lignende).
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper — progressiv/proporsjonal/regressiv skatt, ART/MRT, sosial velferdsfunksjon (additiv/maks-min), pay-as-you-go, sjanger A; 3.B progressivitet vist analytisk + klassifisering av skattesystemer, sjanger E; 3.C omfordeling/velferdsmaksimering med Lagrange + aggregeringsdrøfting, sjanger F; 3.D arbeidstilbud (SE/IE, usikker nettoeffekt) + intertemporalt valg/folketrygd, sjanger H+I).

---

### Del 4 — Offentlig prioritering: NKA, nåverdi og investeringsvalg *(prioritet: PERFEKT — storoppgave)*

#### Kapittel 4.1: Nytte-kostnadsanalyse: samfunnsøkonomisk lønnsomhet

- **id:** `sok2011-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-1-3`
- **Kapitteltype:** teori
- **description:** Nytte-kostnadsanalyse som metoden for å vurdere samfunnsøkonomisk lønnsomhet — verdsetting av tid og risiko, når samfunnsøkonomiske priser avviker fra markedspriser, og nettonytte.
- **Eksamensbelegg:** NKA ~55 % (V2020, V2021 Nord-Norgebanen, V2024-vei, H2023-alternativ) — fast storoppgave-alternativ. Prioritet: **perfekt**.
- **Innholdskontrakt:** **NKA** = metoden for å vurdere om et offentlig tiltak er **samfunnsøkonomisk lønnsomt**: tallfest alle samfunnsøkonomiske nytte- og kostnadskomponenter og sammenlign. **Verdsetting:** nyttekomponenter som spart reisetid, redusert ulykkesrisiko/reddede liv, miljøvirkninger settes i kroner (betalingsvillighet); **samfunnsøkonomiske priser** kan avvike fra markedspriser ved markedssvikt eller skatt (en skattefinansiert krone koster mer enn én krone pga. dødvektstapet — kobling til skattesøylen, «skattefinansieringskostnad»). **Nettonytte** = samfunnsøkonomisk nytte − samfunnsøkonomisk kostnad. Skill privatøkonomisk fra samfunnsøkonomisk lønnsomhet. Kort om usikkerhet og fordelingsvirkninger som tillegg til det rene lønnsomhetsregnskapet. Dette kapitlet gir rammeverket; kap. 4.2 gir renten og kap. 4.3 den optimale størrelsen.
- **Oppgavesjangre:** G (rammeverk). Mønstereksempel: «Staten vurderer å bygge en ny vei. Beskriv hvilke nytte- og kostnadskomponenter som skal inngå i en nytte-kostnadsanalyse, og forklar hvorfor de samfunnsøkonomiske prisene kan avvike fra markedsprisene.»
- **Typiske feil:** Blande privatøkonomisk og samfunnsøkonomisk lønnsomhet; glemme ikke-prissatte komponenter (tid, ulykker, miljø); overse skattefinansieringskostnaden; regne nytte og kostnad i ulike prisår uten diskontering (foregriper §5.8).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Kalkulasjonsrenten og prosjektlønnsomhet

- **id:** `sok2011-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok2011-4-1`
- **Kapitteltype:** teori
- **description:** Hvordan valget av kalkulasjonsrente avgjør om et offentlig prosjekt er lønnsomt — diskontering av framtidig nytte, og hvorfor høy rente straffer prosjekter med sen avkastning.
- **Eksamensbelegg:** Nåverdi/kalkulasjonsrente ~50 % (alltid koblet til NKA; V2020, V2021, V2024). «Rentens rolle» er eksplisitt sensorkrav. Prioritet: **perfekt**.
- **Innholdskontrakt:** Bygger på kap. 1.3 (nåverdi, uendelig annuitet). **Kalkulasjonsrenten** ($r$) diskonterer framtidige nytte- og kostnadsstrømmer til nåverdi; et prosjekt er samfunnsøkonomisk lønnsomt når **nåverdien av nettonytten er positiv**. **Rentens rolle (sensorkravet):** høyere $r$ senker nåverdien av framtidig nytte og **straffer prosjekter med sen avkastning** (typisk store infrastrukturprosjekter med kostnader nå og nytte langt fram) — vis med talleksempel at samme prosjekt kan være lønnsomt ved lav rente og ulønnsomt ved høy. Uendelig levetid → nytte som uendelig annuitet ($PV = A/r$). Kort om at valget av kalkulasjonsrente er en politisk/metodisk beslutning med store konsekvenser. Koble til intertemporalt valg (kap. 3.4) — samme diskonteringslogikk.
- **Oppgavesjangre:** G. Mønstereksempel: «Et baneprosjekt koster 1000 nå og gir 60 i årlig nettonytte i det uendelige. Er det lønnsomt ved en kalkulasjonsrente på 5 %? Ved 7 %? Forklar hvorfor rentevalget avgjør, særlig for prosjekter med sen nytte.»
- **Typiske feil:** Ikke diskontere (behandle framtidige kroner som dagens); regne nåverdi feil vei; glemme uendelig-annuitet-formelen; ikke drøfte at renten endrer konklusjonen (feilkatalog §5.8); ikke se at sene prosjekter rammes hardest av høy rente.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.3: Optimal prosjektstørrelse

- **id:** `sok2011-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2011-4-2`
- **Kapitteltype:** teori
- **description:** Å velge den optimale størrelsen på et offentlig prosjekt der marginal nytte = marginal kostnad, gitt nytte- og investeringsfunksjoner og en kalkulasjonsrente — den fulle NKA-regneoppgaven.
- **Eksamensbelegg:** Den regnetunge NKA-varianten (V2024-vei: $B(Q) = 1000Q - 0{,}25Q^2$, $I(Q) = 5000Q + 2{,}5Q^2$, realrente 5 %, uendelig levetid). Den fulle storoppgaven på prioriteringssiden. Prioritet: **perfekt**.
- **Innholdskontrakt:** Gitt samfunnsøkonomisk **nyttefunksjon $B(Q)$** (avtakende grensenytte) og **investerings-/kostnadsfunksjon $I(Q)$**, med årlig nytte i det uendelige og kalkulasjonsrente $r$: maksimer nåverdien av nettonytten $\max_Q\; B(Q)/r - I(Q)$ (eller tilsvarende oppsett) → FOC **marginal nytte = marginal kostnad** (i nåverdi): $B'(Q)/r = I'(Q)$. Løs for optimal $Q^*$, sjekk andreordensbetingelsen, regn nettonytten. Tolk: prosjektet utvides så lenge en ekstra enhet gir mer i (neddiskontert) nytte enn den koster. Vis rentesensitiviteten (endre $r$ → endret $Q^*$). Fasit-kalibrert form (kun vanskelighetsnivå, ikke gjenbruk av tall): $B(Q) = 1000Q - 0{,}25Q^2$, $I(Q) = 5000Q + 2{,}5Q^2$, $r = 5\%$, uendelig levetid. Figur med marginal nytte og marginal kostnad som krysser i $Q^*$.
- **Oppgavesjangre:** G. Mønstereksempel: «En veistrekning kan oppgraderes til nivå $Q$. Årlig nytte er $B(Q) = 800Q - 0{,}2Q^2$ i det uendelige, investeringen er $I(Q) = 4000Q + 2Q^2$, og kalkulasjonsrenten er 5 %. Finn den optimale oppgraderingen og forklar betingelsen.»
- **Typiske feil:** Sette marginal nytte lik marginal kostnad **uten** å neddiskontere nytten ($B'/r$, ikke $B'$); hoppe over andreordensbetingelsen; glemme rentesensitiviteten; ikke tolke $Q^*$ økonomisk; umerket figur.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.4: Drill: nytte-kostnadsanalysen

- **id:** `sok2011-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `sok2011-4-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele NKA-storoppgaven: fra verdsetting og nyttekomponenter til optimal prosjektstørrelse med nåverdi, rentesensitivitet og verbal lønnsomhetskonklusjon.
- **Eksamensbelegg:** Dekker sjanger G samlet — NKA-/investeringsstoroppgaven (30–35 % når den kommer). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser nytte- og kostnadskomponenter (verdsett tid/ulykker/miljø, skattefinansieringskostnad); 2) sett opp nåverdien av nettonytten med riktig diskontering (uendelig annuitet $B/r$ der relevant); 3) finn optimal størrelse $B'(Q)/r = I'(Q)$, sjekk SOC; 4) regn nettonytten i optimum og konkluder om lønnsomhet; 5) rentesensitivitet (endre $r$, vis at konklusjonen kan snu); 6) figur med marginal nytte/kostnad; 7) tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig diskonteringen, rentens rolle, MB = MC-betingelsen, den verbale konklusjonen). **10–14 oppgaver** som roterer kontekst (vei, bane, bru, kollektivtiltak) × leveranse (komponentliste / optimal størrelse / rentesensitivitet), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** G. Mønstereksempel (full kjede): «(a) Ramse opp nyttekomponentene i et kollektivprosjekt. (b) Med $B(Q) = 600Q - 0{,}3Q^2$ årlig i det uendelige, $I(Q) = 3000Q + Q^2$ og $r = 4\%$, finn optimal $Q$ og nettonytten. (c) Er prosjektet fortsatt lønnsomt ved $r = 6\%$? (d) Forklar hvorfor renten er avgjørende.»
- **Typiske feil:** Hele NKA-repertoaret: udiskontert MB = MC (§5.8-slektning), oversett skattefinansieringskostnad, glemt SOC, ikke drøftet rentens rolle (§5.8), privat vs. samfunnsøkonomisk sammenblanding, umerket figur.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper — nåverdi/present value, kalkulasjonsrente, nettonytte, betalingsvillighet, samfunnsøkonomisk vs. privatøkonomisk lønnsomhet, sjanger A; 4.B nåverdi og rentesensitivitet på en gitt nytte-/kostnadsstrøm, sjanger G; 4.C optimal prosjektstørrelse $B'/r = I'$ med SOC, sjanger G; 4.D full NKA-storoppgave på eksamensnivå inkl. komponentliste, optimal størrelse og rentedrøfting, sjanger G).

---

### Del 5 — Kollektive valg og spesialtemaer *(prioritet: KUNNE/KJENNE — drøftingssøyle + roterende alternativer)*

#### Kapittel 5.1: Kollektive beslutninger og valgparadokset

- **id:** `sok2011-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2011-0-1`
- **Kapitteltype:** teori (med drøftingslån)
- **description:** Når flertallsbeslutninger gir stabile utfall (entoppede preferanser) og når det oppstår valgparadoks/cycling (flertoppede preferanser) — verifisert med parvis flertallsvotering, og agendasetterens makt.
- **Eksamensbelegg:** Kollektive valg/valgparadoks ~50 % (V2021, V2022, H2021, arv fra det nedlagte SØK2103) — verbal drøftingssøyle, fast begreps- og drøftingsgjenganger. Prioritet: **kunne** (nivå 2). Låner struktur fra `DNA-drofting.md` (posisjoner + parvis verifikasjon).
- **Innholdskontrakt:** Sett opp en enkel modell med tre grupper/velgere (like store) og deres rangering av tre alternativer. **Entoppede preferanser** (hver velger har ett toppalternativ og fallende nytte i begge retninger langs en dimensjon) → flertallsbeslutninger blir **stabile**: det finnes en entydig vinner (medianvelgerens toppalternativ), og voteringsrekkefølgen er irrelevant. **Flertoppede preferanser** → **valgparadoks/cycling**: A slår B, B slår C, C slår A i parvis votering → ingen stabil vinner, utfallet avhenger av **voteringsrekkefølgen**, og **agendasetteren** kan styre resultatet. **Verifikasjon (sensorkrav):** vis med **parvis flertallsvotering** på en konkret preferansetabell — én tabell uten paradoks (entoppet) og én med (flertoppet). Fasit-kalibrert mønster (kun struktur): grupper som velger mellom nivåer 0/20/40; entoppet gir stabilt 20, flertoppet gir cycling. Merk (avgrensning): rent-seeking, medianvelger-partikonkurranse og byråkratimodeller (SØK2103-kjerne) er **ikke** i SØK2011 og bygges ikke. *(verifiser at kun valgparadoks/entoppethet, ikke full public choice, er i gjeldende pensum.)*
- **Oppgavesjangre:** J. Mønstereksempel: «Et kommunestyre med tre like store grupper skal velge mellom tre prosjektnivåer. Under hvilke forutsetninger gir flertallsbeslutninger et stabilt utfall, og når oppstår cycling? Illustrer begge tilfeller med en preferansetabell og parvis votering.»
- **Typiske feil:** Ikke verifisere paradokset med parvis votering (feilkatalog §5.9); forveksle entoppet og flertoppet (det holder å finne *én* ordning uten dobbelttopp for entoppethet); glemme at cycling gir agendasetteren makt; anta at flertall alltid gir stabilt utfall.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.2: Velferdsteoremene og generell likevekt

- **id:** `sok2011-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2011-3-2`
- **Kapitteltype:** teori
- **description:** Velferdsteoriens første og andre hovedteorem, deres forutsetninger og innhold, Pareto-effektivitet og Edgeworth-boksen — fundamentet for hvorfor og når staten bør gripe inn.
- **Eksamensbelegg:** Velferdsteoremene ~50 % (fast begrep + drøfting; generell likevekt/Edgeworth). Fast begrepsgjenganger (sjanger A). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Pareto-effektivitet** = ingen kan få det bedre uten at noen får det verre. **1. hovedteorem:** enhver frikonkurranselikevekt er Pareto-effektiv (under forutsetninger: fullkommen konkurranse, ingen eksternaliteter/kollektive goder, full informasjon) — «markedet allokerer effektivt når forutsetningene holder». **2. hovedteorem:** enhver Pareto-effektiv allokering kan oppnås som en frikonkurranselikevekt gitt en passende **omfordeling av startressurser** — «effektivitet og fordeling kan skilles: fordel først (klumpsum), la markedet allokere». **Edgeworth-boksen** og generell likevekt: kontraktkurven som mengden Pareto-effektive allokeringer; tangering av indifferenskurver. **Politikk-implikasjon:** velferdsteoremene begrunner både markedets rolle og statens (omfordeling via klumpsumoverføringer i teorien, men i praksis vridende skatter → effektivitet-vs-likhet igjen). Koble til hvorfor staten skattlegger/omfordeler (Del 2–3).
- **Oppgavesjangre:** A + drøfting. Mønstereksempel (A): «Forklar velferdsteoriens første og andre hovedteorem, hvilke forutsetninger de bygger på, og hva de innebærer for arbeidsdelingen mellom marked og stat.»
- **Typiske feil:** Blande de to teoremene; glemme forutsetningene (særlig at 1. teorem forutsetter ingen markedssvikt); tro at 2. teorem gir kostnadsfri omfordeling (klumpsum finnes sjelden i praksis); ikke koble til statens rolle.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Skatt på bedrift, profitt og grunnrente

- **id:** `sok2011-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok2011-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor en ren profittskatt er vridningsfri, forskjellen mellom å beskatte kontantstrøm og skattemessig overskudd (avskrivning, friinntekt), og grunnrenteskatt.
- **Eksamensbelegg:** Profittskatt/grunnrente ~25 % (H2023-alternativ) — storoppgave-alternativ når det kommer (aktuelt: grunnrenteskatt på kraft/oppdrett). Prioritet: **kjenne** (nivå 3, men bærer en hel storoppgave).
- **Innholdskontrakt:** **Ren profittskatt er vridningsfri:** en skatt på ren profitt (overskudd utover normal kapitalavkastning) endrer ikke bedriftens produksjonsvalg — det som maksimerer profitt før skatt maksimerer også $(1-\tau)\times$ profitt → **intet dødvektstap**. **Modifikasjoner:** bedriften kan flytte til utlandet; utfordringen med å beregne riktig kapitalkostnad. **Kontantstrøm vs. skattemessig overskudd:** ved **kontantstrømskatt** trekkes investeringen fra i investeringsåret (umiddelbart); ved skatt på **skattemessig overskudd** er kostnaden **avskrivning** over tid, og en **friinntekt** kompenserer for kapitalkostnaden slik at skatten forblir nøytral. **Grunnrenteskatt:** ekstra sats i bransjer med grunnrente (naturressursrente — kraft, olje, oppdrett), fordi grunnrente er en ren renprofitt som kan skattlegges uten vridning. Kort og konseptuelt (nivå 3), men vis nøytraliteten med et lite talleksempel.
- **Oppgavesjangre:** K. Mønstereksempel: «Hvordan påvirker en ren profittskatt en bedrifts produksjonsvalg, og hvorfor? Forklar forskjellen mellom å beskatte kontantstrøm og skattemessig overskudd, og hvorfor en grunnrenteskatt kan innkreves uten effektivitetstap.»
- **Typiske feil:** Tro at profittskatt vrir produksjonen (den er nøytral på ren profitt); blande kontantstrøm og skattemessig overskudd; glemme friinntektens rolle; ikke forstå hvorfor grunnrente kan skattlegges vridningsfritt.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 5.4: Varehjelp vs. kontantoverføring og andre stønadsspørsmål

- **id:** `sok2011-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok2011-3-2`
- **Kapitteltype:** teori
- **description:** Hvorfor en mottaker aldri får lavere nytte av en kontantoverføring enn av øremerket varehjelp av samme verdi — vist med indifferenskurver — og hvorfor staten likevel kan velge varehjelp.
- **Eksamensbelegg:** Varehjelp vs. kontantoverføring ~20 % (V2021: subsidiert taxi til eldre) — roterer inn i storoppgaven/drøfting. Prioritet: **kjenne** (nivå 3). Kort berøring også av CO₂-/klimavirkemidler (~15 %, begrepsnivå).
- **Innholdskontrakt:** **Kjerneresultat:** en mottaker får aldri lavere (som regel høyere) nytte av en **kontantoverføring** enn av **øremerket varehjelp** av samme verdi, fordi penger gir full valgfrihet — vis med budsjettlinje/indifferenskurver at kontanten flytter hele budsjettlinjen ut, mens varehjelp bare utvider langs én akse; mottakeren som ville brukt mindre enn overføringen på godet, er strengt bedre med kontant. **Unntak:** for en mottaker som uansett ville brukt mer enn overføringen på godet, er de likeverdige. **Hvorfor staten likevel velger varehjelp:** paternalisme (sikre at hjelpen går til formålet), målretting, politisk aksept, eksterne virkninger (f.eks. utdanning/helse). Kort **spesialtema (begrepsnivå):** CO₂-/klimavirkemidler (avgift vs. kvote) — nevnes som sjelden berøring, ikke bygges ut (SØK1011s domene for Pigou-analysen).
- **Oppgavesjangre:** L. Mønstereksempel: «Er subsidiert taxi til eldre en god måte å drive eldreomsorg på? Sammenlign med en kontantoverføring av samme verdi ved hjelp av indifferenskurver, og drøft hvorfor staten likevel kan foretrekke varehjelp.»
- **Typiske feil:** Tro at varehjelp alltid er dårligere (likeverdig for hjørnemottakere); feil figur (varehjelp flytter bare langs én akse); glemme begrunnelsene for at staten velger varehjelp; forveksle med Pigou-avgift (som er SØK1011).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper — entoppet/flertoppet, valgparadoks, velferdsteoremene, Pareto-effektivitet, grunnrente, profittskatt, varehjelp vs. kontant, sjanger A; 5.B kollektive valg — entoppet/flertoppet med parvis votering, sjanger J; 5.C velferdsteoremene + profitt-/grunnrenteskattens nøytralitet, sjanger A+K; 5.D varehjelp vs. kontantoverføring med indifferenskurver, sjanger L).

---

### Del 6 — Eksamenstrening

#### Kapittel 6.1: Begrepsdrill: gjengangerbegrepene

- **id:** `sok2011-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok2011-2-7`, `sok2011-4-4`
- **Kapitteltype:** drill (begreper)
- **description:** Presise definisjoner + formel + liten figur for de ~15 begrepene som går igjen i begrepsoppgaven (oppgave 1, 20 %) — de sikreste poengene på hvert sett.
- **Eksamensbelegg:** Sjanger A — begrepsoppgaven er **fast** i det moderne formatet (5 begrep, 20 %). Trekker fra en stabil liste. Prioritet: **perfekt** (sikre poeng, fast hvert sett).
- **Innholdskontrakt:** Kort, presis mal per begrep: **definisjon (2–4 setninger) + matematisk uttrykk + figur/eksempel der naturlig + typisk fallgruve**. Gjengangerbegrepene (fra analysen §3A): dødvektstap, substitusjonseffekt, inntektseffekt, partiell vs. generell likevekt, velferdsteoriens 1. og 2. hovedteorem, (sosial) velferdsfunksjon, Ramsey-regelen/invers elastisitetsregel, Lafferkurven, skatteunndragelse, skatteinsidens, nåverdi (present value), intertemporal nytte, kapitalisering, pay-as-you-go/folketrygd, progressiv skatt. Sensor-poeng: **svar poengtert** på akkurat det begrepet det spørres om (utenomsnakk gir ikke uttelling); der naturlig, «kan være en fordel å vise dette i en figur». Dette kapitlet er også begrepsbanken flashcards trekkes fra — derfor høy flashcard-kvote.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort: a) dødvektstap, b) velferdsteoriens andre hovedteorem, c) Lafferkurven, d) intertemporal nytte, e) skatteinsidens.»
- **Typiske feil:** Svare bredt/rundt i stedet for poengtert; gi definisjon uten formel (eller omvendt); blande beslektede par (substitusjons-/inntektseffekt, partiell/generell likevekt, enhets-/verdiskatt, entoppet/flertoppet, additiv/maks-min).
- **Quiz: 24 · Flashcards: 64**

#### Kapittel 6.2: Øvingseksamen 1 — den faste firdelte malen

- **id:** `sok2011-6-2` · **number:** 6.2 · **estimatedMinutes:** 240 · **prerequisites:** `sok2011-2-7`, `sok2011-4-4`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett i standardmalen: 5 begrep (20 %) + Ramsey-intuisjon (10 %) + skatteinsidens/dødvektstap (35 %) + NKA-storoppgave (35 %), med A-besvarelse.
- **Eksamensbelegg:** Speiler den dominerende firdelte malen (V2022–V2024) med storoppgave = NKA/vei. Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Oppgave 1 (begrep, 20 %):** 5 begrep fra gjengangerlisten, poengtert. **Oppgave 2 (kort teori, 10 %):** Ramsey-intuisjon («mange små skatter»). **Oppgave 3 (skatteinsidens, 35 %):** gitt tilbud/etterspørsel → likevekt før/etter (enhets- og/eller verdiskatt) → insidens, proveny, dødvektstap → elastisitetskobling. **Oppgave 4 (storoppgave, 35 %):** NKA-/veiinvestering (verdsetting, optimal størrelse $B'/r = I'$, rentesensitivitet, konklusjon). Løsningsforslag i eget `collapsible` per deloppgave, A-besvarelse (figurbeskrivelse i ord + regning + verbal tolkning), med `tip`-notat om delpoeng/vekting og sensor-margnotater. Nyskrevne tall, pent kalibrert.
- **Oppgavesjangre:** A (oppg. 1) + B (oppg. 2) + C/D (oppg. 3) + G (oppg. 4).
- **Typiske feil:** Tidsstyring (vektfordelt: 20/10/35/35); glemme verbal tolkning under tidspress; hoppe over skattekilen (oppg. 3) og rentesensitiviteten (oppg. 4).
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 6.3: Øvingseksamen 2 — storoppgave: progressiv skatt-alternativet

- **id:** `sok2011-6-3` · **number:** 6.3 · **estimatedMinutes:** 240 · **prerequisites:** `sok2011-3-5`, `sok2011-2-7`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett sett der storoppgaven er skatte-/fordelingssporet: 5 begrep + kort teori + skatteinsidens + progressiv inntektsskatt/omfordeling — slik fordelingsår ser ut.
- **Eksamensbelegg:** Speiler settene der storoppgaven er progressiv skatt/omfordeling (V2020, H2022, H2023). Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Oppgave 1 (begrep, 20 %)** + **oppgave 2 (kort teori, 10 %, Ramsey eller velferdsfunksjon-intuisjon)** + **oppgave 3 (skatteinsidens/dødvektstap, 30–35 %)** + **oppgave 4 (storoppgave, 35 %):** progressiv inntektsskatt vist analytisk + klassifisering **eller** omfordeling/velferdsmaksimering med Lagrange og aggregeringsdrøfting (evt. med arbeidstilbud/SE-IE som deloppgave). Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting. Nyskrevne tall og begrepsutvalg.
- **Oppgavesjangre:** A + B + C + E/F (evt. H).
- **Typiske feil:** Feilklassifisert progressivitet under tidspress; ukritisk nyttesummering; glemme den verbale drøftingen i fordelingsdelen; slurve med skatteinsidensen i oppg. 3.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 6.4: Øvingseksamen 3 — storoppgave: bedrift/grunnrente + kollektive valg

- **id:** `sok2011-6-4` · **number:** 6.4 · **estimatedMinutes:** 240 · **prerequisites:** `sok2011-5-4`, `sok2011-2-7`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett sett med de roterende alternativene: 5 begrep + kort teori + skatteinsidens + storoppgave om bedrifts-/grunnrenteskatt, med et innslag av kollektive valg.
- **Eksamensbelegg:** Speiler settene med bedrifts-/grunnrenteskatt (H2023) og kollektive-valg-innslag (V2021, V2022, H2021). Prioritet: **perfekt/kjenne** (beredskap for de sjeldnere alternativene).
- **Innholdskontrakt:** **Oppgave 1 (begrep, 20 %)** + **oppgave 2 (kort teori, 10 %)** + **oppgave 3 (skatteinsidens, 30 %)** + **oppgave 4 (storoppgave med to alternativer, velg ett, 40 %):** (a) skatt på bedrift/profitt/grunnrente (nøytralitet, kontantstrøm vs. skattemessig overskudd, grunnrente) **eller** (b) kollektive valg (entoppet/flertoppet med parvis votering, agendamakt) evt. kombinert med varehjelp vs. kontantoverføring. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting og sensor-notater. Nyskrevne tall.
- **Oppgavesjangre:** A + B + C + K/J (+ L).
- **Typiske feil:** Behandle profittskatt som vridende; ikke verifisere valgparadokset med parvis votering; blande grunnrenteskatt med vanlig vareavgift; tidsstyring på to-alternativs-oppgaven.
- **Quiz: 12 · Flashcards: 0**

**Prøve-kvote Del 6:** ingen egne prøver (delen består av begrepsdrill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 12 | 0 |
| 1 | 1.1–1.3 | 22+22+18 = **62** | 20+20+16 = **56** | 4 |
| 2 | 2.1–2.7 | 22+24+22+18+22+16+16 = **140** | 24+22+18+16+20+16+10 = **126** | 4 |
| 3 | 3.1–3.5 | 22+22+22+20+16 = **102** | 22+24+18+16+10 = **90** | 4 |
| 4 | 4.1–4.4 | 20+18+20+16 = **74** | 20+16+18+10 = **64** | 4 |
| 5 | 5.1–5.4 | 22+20+18+16 = **76** | 20+20+16+16 = **72** | 4 |
| 6 | 6.1–6.4 | 24+12+12+12 = **60** | 64+0+0+0 = **64** | 0 (3 øvingseksamener) |
| **Sum** | **28 kap.** | **528 ≥ 500 ✓** | **474** | **20 + 3 ØE** |

> **Kvote-justering (flashcards):** råsummen over gir flashcards **474 < 500**.
> Skattesøylen bærer langt over sin andel av begrepsrepertoaret, så gulvet nås ved å
> løfte begrepsdrillen (6.1) og de fem faste begrepsdel-kapitlene. **Justerte
> flashcard-kvoter (AUTORITATIVE — overstyrer per-kapittel-tallene over der de avviker):**
> 2.1 → **26**, 2.2 → **24**, 3.1 → **24**, 3.2 → **26**, 5.1 → **22**, 6.1 → **80**.
> Dette gir ny flashcard-sum: Del 0 = 12, Del 1 = 56, Del 2 = 130 (26+24+18+16+20+16+10),
> Del 3 = 94 (24+26+18+16+10), Del 4 = 64, Del 5 = 74 (22+20+16+16), Del 6 = 80 →
> **flashcards totalt 510 ≥ 500 ✓**. Tilsvarende løftes quiz i begrepsdrillen (6.1)
> til **26** og i skattekilen (2.1) til **24** → **quiz-justering:** 2.1 → 24, 6.1 → 26,
> ny quiz-sum: Del 0 = 14, Del 1 = 62, Del 2 = 142, Del 3 = 102, Del 4 = 74, Del 5 = 76,
> Del 6 = 62 → **quiz totalt 532 ≥ 500 ✓**. **Autoritative totaler: quiz 532, flashcards 510.**
> (Identitetstabellen i §1 oppgir 560/548 som øvre måltall inkl. forfatterens tillatte
> overskyting; gulvet som MÅ nås er 532/510 per denne tabellen.)

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler den firdelte eksamensmalen: skattesøylen (Del 2) og
prioriteringssøylen (Del 4) står for kjernen i oppgave 3 og storoppgaven, mens
begrepsdrillen (6.1) er den samlende flashcard-banken for oppgave 1 (5 begrep, 20 %).
Boka er et **regnefag med solid begrepsrepertoar**: quiz ligger komfortabelt over
gulvet (drilltunge søyler), og flashcards er løftet over gulvet fordi definisjonene
faktisk må sitte (dødvektstap, skatteinsidens, Ramsey, progressiv skatt,
velferdsteoremene, entoppet/flertoppet, nåverdi/kalkulasjonsrente, pay-as-you-go).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5, 20 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok2011-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Matematisk verktøykasse** (verktøyprøver som ender på anvendelse)
1. Prøve 1.A (35 min): Lagrange på Ramsey-lignende minimering + velferdsmaksimering, med $\lambda$-tolkning.
2. Prøve 1.B (30 min): Elastisitet langs lineær etterspørsel + areal av proveny-/dødvektstapsfigur.
3. Prøve 1.C (30 min): Nåverdi og uendelig annuitet med rentesensitivitet.
4. Prøve 1.D (35 min): Blandet verktøyprøve — Lagrange + elastisitet + nåverdi på små utsnitt.

**Del 2 — Skatteeffektivitet**
1. Prøve 2.A (30 min): Begreper — dødvektstap, skattekile, skatteinsidens, Ramsey, skatteunndragelse/Laffer (sjanger A).
2. Prøve 2.B (40 min): Skatteinsidens for enhets- OG verdiskatt med proveny og dødvektstap (sjanger C).
3. Prøve 2.C (40 min): Dødvektstapets elastisitets-/kvadratiske egenskaper + Ramsey-utledning (sjanger B+D).
4. Prøve 2.D (60 min): Full skatteinsidensoppgave inkl. etterspørselsskift og Ramsey-vinkling (sjanger C+D).

**Del 3 — Inntektsskatt, omfordeling og arbeidstilbud**
1. Prøve 3.A (30 min): Begreper — progressiv/proporsjonal/regressiv, ART/MRT, velferdsfunksjon, pay-as-you-go (sjanger A).
2. Prøve 3.B (40 min): Progressivitet vist analytisk + klassifisering av skattesystemer (sjanger E).
3. Prøve 3.C (40 min): Omfordeling/velferdsmaksimering med Lagrange + aggregeringsdrøfting (sjanger F).
4. Prøve 3.D (50 min): Arbeidstilbud (SE/IE, usikker nettoeffekt) + intertemporalt valg/folketrygd (sjanger H+I).

**Del 4 — Offentlig prioritering**
1. Prøve 4.A (30 min): Begreper — nåverdi, kalkulasjonsrente, nettonytte, betalingsvillighet, samf.øk. vs. priv.øk. lønnsomhet (sjanger A).
2. Prøve 4.B (35 min): Nåverdi og rentesensitivitet på en gitt nytte-/kostnadsstrøm (sjanger G).
3. Prøve 4.C (40 min): Optimal prosjektstørrelse $B'/r = I'$ med SOC (sjanger G).
4. Prøve 4.D (60 min): Full NKA-storoppgave inkl. komponentliste, optimal størrelse og rentedrøfting (sjanger G).

**Del 5 — Kollektive valg og spesialtemaer**
1. Prøve 5.A (30 min): Begreper — entoppet/flertoppet, valgparadoks, velferdsteoremene, grunnrente, varehjelp vs. kontant (sjanger A).
2. Prøve 5.B (35 min): Kollektive valg — entoppet/flertoppet med parvis votering (sjanger J).
3. Prøve 5.C (40 min): Velferdsteoremene + profitt-/grunnrenteskattens nøytralitet (sjanger A+K).
4. Prøve 5.D (35 min): Varehjelp vs. kontantoverføring med indifferenskurver (sjanger L).

### Øvingseksamener (3 komplette sett — se kap. 6.2–6.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 6.2) | Standard firdelt, storoppgave = NKA (V2024) | Begrep 20 % + Ramsey-intuisjon 10 % + skatteinsidens 35 % + NKA/vei 35 % |
| Øvingseksamen 2 (kap. 6.3) | Fordelingsår (V2020/H2022/H2023) | Begrep + kort teori + skatteinsidens + progressiv skatt/omfordeling m/Lagrange |
| Øvingseksamen 3 (kap. 6.4) | Bedrift/grunnrente + kollektive valg (H2023/V2021/V2022) | Begrep + kort teori + skatteinsidens + storoppgave m/to alternativer (grunnrente ELLER kollektive valg + varehjelp) |

Til sammen dekker de tre settene sjangrene A–L minst én gang; den firdelte malen
(begrep + kort teori + skatteinsidens + storoppgave) trenes i alle tre, og alle tre
storoppgave-alternativene (NKA, progressiv skatt/omfordeling, bedrift/grunnrente + kollektive valg)
er representert.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, kode C med matematisk formelsamling +
   kalkulator), den faste firdelte malen (begrep 20 % + kort teori 10 % + skatteinsidens
   30–35 % + storoppgave med to alternativer 30–35 %), og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 2 skatteeffektivitet: dødvektstap/insidens/Ramsey; Del 4 NKA/nåverdi;
   progressiv skatt; omfordeling), kunne (arbeidstilbud, intertemporalt/folketrygd,
   velferdsteoremene, kollektive valg, elastisitets-/etterspørselsskift), kjenne
   (profitt-/grunnrenteskatt, varehjelp vs. kontant, skatteunndragelse/Laffer, CO₂).
3. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene fra drillkapitlene
   (2.7 skatteinsidens, 3.5 inntektsskatt/omfordeling, 4.4 NKA) og begrepsmalen (6.1)
   i kortform: skatteinsidens-algoritmen, Ramsey-utledningen, progressivitetsvisningen,
   velferdsmaksimeringen, NKA-med-nåverdi-algoritmen, valgparadoks-verifikasjonen.
4. **Sensorreglene** — metareglene (regning + figur + verbal forklaring er én leveranse;
   forklar *hvorfor* — skattekilen MBV > MK; koble alltid til elastisitet; presiser
   tolkning/forutsetninger; utledning er pluss) + toppsjikt-listen (Ramsey-utledning,
   dødvektstapets kvadratiske egenskap, elastisitet langs lineær kurve, usikker
   arbeidstilbudseffekt men substitusjonsdrevet dødvektstap, valgparadoks med parvis
   votering, effektivitet vs. fordeling) fra kap. 0.1.
5. **Feilkatalogen** — de 11 typiske feilene samlet (proveny forvekslet med tap;
   manglende verbal mekanisme; feil elastisitet↔insidens/lineært dødvektstap; konstant
   elastisitet langs lineær kurve; blandet/sikker SE-IE på arbeidstilbud; feilklassifisert
   progressivitet; ukritisk nyttesummering/Arrow; oversett rentens rolle i NKA; uverifisert
   valgparadoks; oversett andreordens-/kapasitetsbetingelse; umerkede figurer), hver med
   henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: dødvektstap $\tfrac12\,\Delta X\,\Delta P =
   \tfrac12\,\eta\,P\,t^2$; skattekile $P_E - P_S = T$; proveny = $ABDE$, dødvektstap = $BCD$;
   insidens (relativ elastisitet avgjør); Ramsey $t_x/t_y = \eta_y/\eta_x$; progressiv
   $\Leftrightarrow MRT > ART \Leftrightarrow d(T/I)/dI > 0$; additiv velferd $W = \sum U_i$,
   maks-min $W = \min U_i$; arbeidstilbud $U(I,L)$, $I = w(1-t)(T-L)$; intertemporalt
   $x_1 + x_2/(1+r) = m_1 + m_2/(1+r)$, MSB $= 1+r$; nåverdi $PV = C_n/(1+r)^n$, uendelig
   annuitet $A/r$; NKA optimum $B'(Q)/r = I'(Q)$. Marker hva som skal *utledes/tolkes*
   (Ramsey, dødvektstapsformelen, optimal $Q$) vs. hva som bare slås opp i formelsamlingen
   (derivasjon, Lagrange-oppskrift, annuitetsformel).
7. **Figurbiblioteket** — standardfigurene i ord: skattekile + proveny ($ABDE$) +
   dødvektstap ($BCD$) i tilbud/etterspørsel-diagrammet; insidensfordeling ved ulik
   elastisitet; lineær etterspørsel med varierende elastisitet; progressiv skatt i
   disponibel-inntekt-figuren (knekk); velferdsfordeling; arbeidstilbud i $(L,I)$-planet
   med SE/IE; intertemporal budsjettlinje; NKA marginal nytte/kostnad som krysser i $Q^*$;
   preferansetabell + parvis votering (entoppet vs. flertoppet); varehjelp vs. kontant med
   indifferenskurver — med merkekravene per figur (akser, kurver, tilpasningspunkter,
   arealer navngitt).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (verktøyet) → Del 2 (skattesøylen, ryggraden) → Del 3 (inntektsskatt/omfordeling) →
   Del 4 (NKA-søylen) → Del 5 (kollektive valg/spesialtema), prøver underveis,
   øvingseksamenene de siste ukene under tidspress (240 min, vektfordelt 20/10/35/35).
   Terp begrepsdrillen (6.1) og de tre drillkapitlene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok2011` med alle 28 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK2011 Offentlig økonomi og økonomisk politikk».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene og avgrensningen
   (hva som IKKE er pensum — SØK1011/ECON1220/SØK3007/SØK2103-avgrensningene) som resten refererer til.
3. **Del 1** (matteverktøyet) — Lagrange/elastisitet/nåverdi som resten bruker; sett
   kryssbok-lenkene til SOK1002.
4. **Skattesøylen (Del 2)** — ryggraden; én byggeagent for hele delen (drillkapittel 2.7
   bygges av samme agent). Sett notasjonen ($X_D/X_S$, $T$/$t$, $\eta$, $ABDE$/$BCD$).
5. **Del 3** (inntektsskatt/omfordeling) — gjenbruker Lagrange og SE/IE (kryssref. SOK1002).
6. **Del 4** (NKA-søylen) — gjenbruker nåverdi fra Del 1.
7. **Del 5** (kollektive valg/spesialtema) — verbal drøftingssøyle + roterende alternativer.
8. **Del 6 til slutt** (begrepsdrill + øvingseksamener gjenbruker alt); bygges av én agent
   som leser hele skjelettet.
9. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene (§4)
   i prøvekapitler per del etter byggekontraktens spesifikasjon (`sok2011-<del>-prove`,
   chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON (`\\frac`,
      `\\lambda`, `\\eta`, `\\sum`); ingen unicode-brøker; konsistent $X_D/X_S$, $P_E/P_S$,
      $T$/$t$, $\eta$, $I$, $T(I)$, $MRT/ART$, $U(I,L)$, $W = \sum U_i$, $B(Q)/I(Q)$, $r$, $PV$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok2011-filer — **påkrevd**: dødvektstap
      $= \tfrac12\,\Delta X\,\Delta P = \tfrac12\,\eta\,P\,t^2$, skattekile, proveny = $ABDE$/
      dødvektstap = $BCD$, enhetsskatt $T$ vs. verdiskatt $t$, $MRT > ART$ for progressiv,
      Ramsey $t_x/t_y = \eta_y/\eta_x$, $B'(Q)/r = I'(Q)$; **forbudt/uønsket**: hele
      SØK1011/ECON1220-vokabularet — grep etter «oligopol», «Cournot», «Nash», «Bertrand»,
      «Pigou-avgift», «fellesgode», «Samuelson-betingelsen», «Lerner», «uheldig utvalg»,
      «fløteskumming», «moral hazard», «rent-seeking», «medianvelger», «Niskanen»,
      «Mirrlees» skal gi **null treff** utenfor de avgrensende merknadene i kap. 0.1
      (og den ene CO₂-berøringen i kap. 5.4).
- [ ] **Kryssbok-lenker**: lenker til SOK1002 (`/sok1002/sok1002-1-2`, `-1-3`, `-2-6`,
      `-2-8`, `-4-2`) peker på **eksisterende** kapitler — verifiser mot sok1002-skjelettet
      (bygges/bygget); lenk aldri til kapitler som ikke finnes.
- [ ] **Regning + figur + tolkning**: hvert eksempel og løsningsforslag med figur har både
      figurbeskrivelse i ord (akser, kurver, tilpasningspunkter, arealer navngitt) og verbal
      tolkning; alle elastisiteter, skattesatser, nåverdier og fortegn er verbalt tolket;
      skattekilen (MBV > MK) forklares der dødvektstap regnes.
- [ ] **Ramsey-utledningen**: kap. 2.5, 2.7, prøve 2.C/2.D og øvingseksamenene inneholder
      den formelle Lagrange-utledningen ($t_x/t_y = \eta_y/\eta_x$) med fordelingsnyansen —
      toppkarakter-differensiatoren.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
      skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-`collapsible`
      (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`,
      repetisjons-`collapsible`; drillkapitlene (2.7, 3.5, 4.4) har løsningsoppskrift +
      sensor-kommentert case + 10–15 oppgaver; drøftingskapitlene (3.2, 5.1) har
      posisjoner/spenninger + momentliste-oppgaver.
- [ ] **Quiz-sum ≥ 532 og flashcard-sum ≥ 510** per kvotetabellen (kontrollsummér mot §3
      inkl. kvote-justeringen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og prøvene dekker
      samlet sjangrene A–L minst én gang, og alle tre storoppgave-alternativene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (bransjer,
      personer, prosjekter), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal varieres
      videre, ikke kopieres ordrett inn); kalibreringsverdiene fra reelle fasiter (f.eks.
      $X_D = 1\,000\,000 - 30\,000P$, $B(Q) = 1000Q - 0{,}25Q^2$, $U = I + 400\ln L$) brukes
      kun til å velge vanskelighetsgrad, aldri som oppgavetall; pensum (Rosen & Gaynor,
      *Public Finance*) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`; institusjonssiden (NTNU)
      og bokforsiden (seksjonstitlene fra §2) sjekkes.

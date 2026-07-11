# Bokskjelett: ITF10705 Diskret matematikk (Høgskolen i Østfold) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-regnefag.md`). Unntak: øvingseksamen-/prøve-/modell­besvarelses­kapitler
> følger sin egen arketype (komplett sett først, løsninger i collapsibles).
> Kvotene og innholdskontraktene i dette skjelettet er uendret — løkka styrer
> REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (HiØ-arkivet for ITF10705: 98 filer, kjernematerialet er
> **13 eksamenssett med offisielt løsningsforslag des 2019–juni 2026** + **5
> sensorveiledninger 2021–2025**, alle lest grundig; forgjengerarkivet 2010–2019
> skummet for temaregistrering). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Format-forbilder (v3): `../kj1020/SKJELETT.md` og `../ma0301/SKJELETT.md`
> (NTNUs elementære diskret matematikk — deler den klassiske kjernen, se §2 «Søster-avgrensning»).
>
> **Emnestatus (verifisert 11. juli 2026 mot HiØs emneside for høst 2026):**
> ITF10705 er **AKTIVT** — emneside publisert for høst 2026
> (`hiof.no/.../iio/itk/2026/host/itf10705.html`): 10 studiepoeng, individuell
> skriftlig skoleeksamen 4 timer, karakterskala A–F, faglærer Christian Fredrik
> Heide. Obligatorisk for bachelor i informatikk og bachelor i ingeniørfag –
> data. Kravene stemmer eksakt med analysen. Emnet undervises i høst med ordinær
> eksamen i desember og utsatt/kontinuasjon på nyåret/våren.
>
> **Viktigste kalibrering:** ITF10705 er et **utregnings-/kortsvarsfag, IKKE et
> bevisfag** (motsatt av søsteremnet MA0301). Hver oppgave gir inntil 10 poeng,
> jevnt vektet; bredde slår dybde. Bevis i streng forstand forekommer nesten bare
> i induksjonsoppgaven (38 %). Faget er «bredt diskret» — de klassiske diskret-
> temaene (logikk, mengder, relasjoner, funksjoner, kombinatorikk, automater/språk,
> grafer) PLUSS tre **anvendte** temaer som skiller HiØ-varianten fra klassisk
> diskret matematikk: **komplekse tall, andreordens differenslikninger, matriser/
> lineære likningssystemer**. De tre anvendte er blant fagets tyngste pilarer.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `hio-diskretmatte` (internt alias; emnekode ITF10705) |
| Tittel | **ITF10705 Diskret matematikk (Høgskolen i Østfold) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Høgskolen i Østfold. Visningsnavn i `institusjoner.ts`: «ITF10705 Diskret matematikk». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — utregnings-/kortsvarsvariant (jevn 10-poengsvekting, minimal bevistyngde). |
| Antall kapitler | **31** (Del 0: 2 · temadeler 1–11: 26 · eksamenstrening Del 12: 3) |
| Estimert totaltid | **~1 800 min ≈ 30 timer** (per kapittel under) |
| Quiz totalt | **533** (REELL per-kapittel-sum; krav ≥500 — se kvotesammendrag §5) |
| Flashcards totalt | **500** (REELL per-kapittel-sum etter dokumentert +42-justering; krav ≥500 — se §5) |

**Pitch (ett avsnitt):** ITF10705 er et av de mest forutsigbare og mest
*mekaniserbare* emnene i høyskolearkivet. 4 timers skriftlig skoleeksamen,
**8–9 jevnt vektede oppgaver à 10 poeng (80–90 poeng totalt)**, hver på ett tema.
Hjelpemidler: **to A4-ark egne notater (fire sider) + godkjent kalkulator**,
pluss et fast sett **utdelte vedlegg** (nummererte lover for logikk/mengder, en
kombinatorikk- og differenslikningsformelsamling, og en tabell med eksakte sin/cos-
verdier). Faget belønner **riktig utregning med synlig mellomregning**, ikke
strenge bevis: «dersom man gjør en feil men har forklart hvordan man tenker, vil
sensorene kunne gi mange poeng.» Fem pilarer er tilnærmet garantert hvert sett —
og tre av dem er de anvendte temaene: **logikk** (100 %, ofte to hele oppgaver),
**komplekse tall** (100 %), **matriser/lineære likningssystemer** (100 %),
**differenslikninger** (92 %) og **relasjoner** (92 %). Boka er bygd baklengs fra
det sensor faktisk premierer: riktige utregninger på de mekaniske temaene, presis
lovreferanse per steg i forenkling, og riktig kvadrant i komplekse tall (fagets
vanligste feil). Grafteori er lavfrekvent (31 %), induksjon en «snill» sumformel
(38 %) — prioriteringen styrer omfanget, ikke *om* et tema er med.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Utregningsfag, ikke bevisfag.** Nesten hver deloppgave ber om et konkret
   *utregnet svar* med vist framgangsmåte («konverter tallet», «finn den generelle
   løsningen», «skriv mengden på listeform», «regn ut determinanten»). Bevis i
   streng forstand forekommer bare i induksjonsoppgaven og av og til et enkelt
   kontrapositivt bevis. Alle eksempler og løsningsforslag skrives som fullt vist
   mellomregning — men uten unødig bevisformalisme.
2. **Alle svar skal begrunnes — også der oppgaven ikke sier det.** Dette står på
   forsiden av oppgavesettet og gjelder hele veien. Et bart tall uten mellomregning
   gir lite; med forklaring får man delpoeng ved feil. Egen `warning` om dette i de
   sentrale kapitlene.
3. **Angi lovnummer ved forenkling.** I logikk- og mengdeforenkling refererer
   fasiten hvert steg til en av de **nummererte lovene** i det utdelte vedlegget
   (1 assosiativ, 2 kommutativ, 3 distributiv, 4 De Morgan, 5 idempotens,
   6 absorpsjon, 7 dobbel negasjon, 8 invers, 9 identitet, 10 dominans,
   11 implikasjon $p\Rightarrow q\equiv\neg p\lor q$, 12 kontrapositiv). Lov 11 er
   nesten alltid første steg. Et forenklingssteg uten lovnummer er en byggefeil.
4. **Poengene er jevnt fordelt.** Sensorveiledningene fordeler nesten alltid
   poengene likt mellom deloppgavene («de tre delspørsmålene teller like mye»).
   Unntak: differenslikningen (typisk 5 p homogen + 5 p inhomogen). Bredde slår
   dybde — det holder å beherske ~4 av 9 temaer godt for å stå (bestått ligger på
   39 %).
5. **Metodefrihet der det er naturlig.** Ved tallkonvertering, mengdeutregning og
   lignende godtas «alle metoder så lenge svaret er riktig og framgangsmåten vist».
   Ved automat-/grammatikkonstruksjon godtas flere gyldige svar («det kan finnes
   andre automater som utfører det samme») — boka sier dette der det gjelder.
6. **Notasjon (emnets faste apparat):** Logikk $\land,\lor,\neg,\Rightarrow,
   \Leftrightarrow$; sannhetsverdier **S/F** (sann/falsk, IKKE T/F); kvantorer
   $\forall,\exists$. Mengder $\cup,\cap,\setminus,\overline{A}$, kartesisk produkt
   $A\times B$, potensmengde $\mathcal{P}(A)$. Relasjoner: refleksiv, symmetrisk,
   **antisymmetrisk**, transitiv; ekvivalensklasse $[a]$; Hasse-diagram. Funksjoner
   injektiv/surjektiv/bijektiv/invers. Komplekse tall $z=a+bi$, $|z|=r$, argument
   $\varphi$, eksponentialform $re^{i\varphi}$. Differenslikninger: karakteristisk
   likning $\lambda^2+b\lambda+c=0$, generell løsning $y_n=A\lambda_1^n+B\lambda_2^n$.
   Matriser: koeffisientmatrise, totalmatrise, $[A\,|\,I]\to[I\,|\,A^{-1}]$,
   determinant $\det A$, Gauss–Jordan/redusert trappeform. All matematikk i LaTeX
   (`$...$`).
7. **Vedleggene er utdelt — tren BRUK, ikke pugg.** Lovene, kombinatorikkformlene
   og differenslikningsformlene deles ut på eksamen; det gjør sin/cos-tabellen også.
   Boka legger vekt på **å bruke dem riktig** (velge riktig lov, identifisere
   hvilket differenslikningstilfelle man er i), ikke på memorering. En **notatark-mal**
   (to A4-ark) er et konkret bilag i Del 0. Flashcards drilles på *forståelse og
   valg* (hvilken lov/hvilket tilfelle), ikke ren gjengivelse av utdelte tabeller.
8. **Ærlighet om format og arkiv.** (a) **Én faglærer, ett format** (Christian F.
   Heide, des 2019–juni 2026); frekvensene er svært pålitelige for dette formatet,
   men et lærerbytte kan endre bildet — verifiser mot neste sett. (b) **Antall
   oppgaver svinger 8↔9** (de fleste 9 à 10 p; enkelte nyere 8 à 10 p) — boka trener
   begge. (c) **Temakatalogen er stabil i over 15 år** (bekreftet mot forgjenger-
   arkivet 2010–2019). (d) **Komplekse røtter i differenslikninger** står i vedlegget,
   men forekommer praktisk talt aldri på eksamen — dekkes som «bør kjenne til».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): tallsystemer og
oppgave-1-sekken (lettpoeng) først; logikk og mengdelære er lovapparatet og
språket; relasjoner og funksjoner bygger på mengder; de tre anvendte temaene
(komplekse tall, differenslikninger, matriser) er selvstendige søyler; formelle
språk/automater og induksjon/grafteori til slutt. **Frekvensen styrer omfanget,
ikke rekkefølgen:** de fem pilarene (logikk, komplekse tall, matriser,
differenslikninger, relasjoner) får hver sin del med teori- **og** drillkapittel
og høyest kvote; lavfrekvent stoff (grafteori, induksjon, Turing) får kompakte
kapitler.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og verktøykasse | 2 | perfekt (meta) | Formen (8–9 oppgaver à 10 p, jevn vekting, utdelte vedlegg, hjelpemidler), temafrekvensene, sensorkravene, kildeforbeholdet og notatark-malen må etableres FØR fagstoffet. |
| 1 | Tallsystemer og oppgave-1-sekken | 3 | kunne/kjenne (77 % + varierende) | Tallkonvertering (77 %) + kongruens (15 %) + kombinatorikk (31 %) + boolske uttrykk (15 %). Lettpoeng i oppg. 1 som ikke må mistes. Kombinatorikk får eget kapittel (formler i vedlegg). |
| 2 | Logikk | 3 | **perfekt (100 %)** | Ofte to hele oppgaver: sannhetstabell (ekvivalens/tautologi) + lovforenkling med nummererte lover, pluss predikatlogikk/kvantorer. + drillkapittel. Fagets breddepilar. |
| 3 | Mengdelære | 2 | kunne (77 %) | Listeform (union/snitt/differanse/komplement/kartesisk produkt/potensmengde) + venndiagram + lovforenkling (samme lover). |
| 4 | Relasjoner | 2 | **perfekt (92 %)** | Fagets mest forutsigbare oppgave: tegn rettet graf → sjekk fire egenskaper → klassifiser (ekvivalens/delvis ordning) → Hasse begge veier. + drillkapittel. |
| 5 | Funksjoner | 2 | kunne (69 %) | Injektiv/surjektiv/bijektiv/inverterbar med begrunnelse + kardinalitetsargument. |
| 6 | Komplekse tall | 3 | **perfekt (100 %)** | Anvendt pilar: divisjon til rektangulær form + eksponentialform med **riktig kvadrant** (fagets vanligste feil). + drillkapittel. |
| 7 | Differenslikninger | 2 | **perfekt (92 %)** | Anvendt pilar, den mest «lærbare» toppoppgaven: homogen (karakteristisk likning) + inhomogen (partikulærløsning) + initialbetingelser. + drillkapittel. |
| 8 | Matriser og lineære likningssystemer | 3 | **perfekt (100 %)** | Anvendt pilar med bredt repertoar: matriseprodukt, determinant, transponering, invers via $[A\,|\,I]$, Gauss–Jordan. + drillkapittel. |
| 9 | Formelle språk, automater og Turing-maskiner | 3 | kunne/kjenne (85 % / 15 %↑) | Tegn endelig automat for et språk; klassifiser grammatikk (kontekstfri/regulær); Turing-kjøring (voksende småpilar). |
| 10 | Matematisk induksjon | 1 | kjenne (38 %) | «Snill» sumformel med komplett basistrinn/hypotese/trinn; gir fulle 10 p når med. Smalt, forutsigbart repertoar. |
| 11 | Grafteori | 2 | kjenne (31 % / Dijkstra 8 %) | Isomorfi, eulergraf, nabomatrise, union av grafer; Dijkstra som beredskap. Bevisst kompakt (lavfrekvent). |
| 12 | Eksamenstrening | 3 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–N) + kald bank + **2 komplette øvingseksamener** (8–9 oppgaver, jevn vekting, A-fasit). |

Rasjonale: de fem pilarene (logikk, komplekse tall, matriser, differenslikninger,
relasjoner) får hver sin del med **drillkapittel** rett etter teorien, fordi disse
er de mest resirkulerte og mest mekaniserbare sjangrene. Grafteori, induksjon og
Turing får kompakte kapitler fordi de er lavfrekvente. **Nesten hele bredden testes
hvert sett** — prioriteringen styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og verktøykasse |
| 1 | Tallsystemer og oppgave-1-sekken |
| 2 | Logikk |
| 3 | Mengdelære |
| 4 | Relasjoner |
| 5 | Funksjoner |
| 6 | Komplekse tall |
| 7 | Differenslikninger |
| 8 | Matriser og lineære likningssystemer |
| 9 | Formelle språk, automater og Turing-maskiner |
| 10 | Matematisk induksjon |
| 11 | Grafteori |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Tallsystem-konvertering (titall ↔ binær ↔ heksadesimal; fritt valgt metode,
vist framgangsmåte) · **B** Oppgave-1-sekken: boolsk uttrykk / kongruens mod $n$ /
predikatlogikk-kvantorer (regn ut / sjekk $n\mid(a-b)$ / oversett $\forall,\exists$
til/fra ord, neger) · **C** Kombinatorikk (ordnet vs. uordnet × med/uten
tilbakelegging; komité $=C(n,k)$, styre med roller $=P(n,k)$) · **D** Relasjoner
(tegn rettet graf → sjekk refleksiv/symmetrisk/antisymmetrisk/transitiv →
klassifiser ekvivalens/delvis ordning; Hasse begge veier; ekvivalensklasser) ·
**E** Logikk — sannhetstabell ($2^n$ rader → logisk ekvivalens eller tautologi;
S/F) · **F** Logikk — lovforenkling (nummererte lover per steg → match ett
alternativ) · **G** Mengdelære (listeform: union/snitt/differanse/komplement/
kartesisk produkt/potensmengde; venndiagram; lovforenkling) · **H** Funksjoner
(injektiv/surjektiv/bijektiv/inverterbar med begrunnelse; kardinalitetsargument) ·
**I** Endelig automat / formelt språk (tegn tilstandsdiagram for et språk;
klassifiser grammatikk kontekstfri/regulær; avled strenger) · **J** Komplekse tall
(divisjon $z_1/z_2$ til rektangulær; eksponentialform $re^{i\varphi}$ med riktig
kvadrant; tegning i planet) · **K** Differenslikning (homogen via karakteristisk
likning + inhomogen partikulærløsning + initialbetingelser) · **L** Matriser /
lineære likningssystemer (matriseprodukt, determinant, transponering, invers via
$[A\,|\,I]$, Gauss–Jordan) · **M** Matematisk induksjon (fullstendig bevis av
sumformel: basistrinn + hypotese + trinn) · **N** Turing-maskin / Dijkstra
(lavfrekvent: trinnvis kjøring fra fem-tupler; korteste vei).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Poeng gis for grad av korrekt løsning, ikke alt-eller-ingenting.** «Poengene
   skal reflektere i hvilken grad en oppgave er tilfredsstillende løst.» Faglæreren
   advarer eksplisitt: ikke skriv bare et svar uten forklaring — med forklaring gir
   sensor mange poeng selv ved feil, «fordi det er forståelsen vi først og fremst er
   ute etter».
2. **Alle svar skal begrunnes** — også der oppgaven ikke ber om det (står på
   forsiden). Et bart tall uten mellomregning gir lite.
3. **Poengene er jevnt fordelt** mellom deloppgaver («de tre delspørsmålene teller
   like mye»). Unntak: differenslikningen (5 p homogen + 5 p inhomogen) og enkelte
   oppgaver med skjev vekt.
4. **Metodefrihet der det er naturlig** (konvertering, mengdeutregning; flere
   gyldige automater/grammatikker).
5. **Angi lovnummer** i logikk- og mengdeforenkling — referanse til de nummererte
   lovene i vedlegget i hvert steg.

**Karaktergrenser (veiledende, fra sensorveiledningene):** A 90–100 %, B 78–89 %,
C 60–77 %, D 50–59 %, E 39–49 %, F 0–38 %. Sensorene justerer i fellesskap etter
settets vanskelighetsgrad. Bestått ligger på 39 % → det holder å beherske ~4 av 9
temaer godt. **Karakter-realisme (Del 0):** C er en god og vanlig karakter (særlig
tidlig i studiet); «Gapet til A» rammes som oppgraderingsmeny, ikke mangelliste.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** **Feil kvadrant i komplekse tall** — $\cos\varphi=a/r$ gir to kandidatvinkler;
fortegnene til real- og imaginærdel avgjør riktig kvadrant. **Fagets vanligste feil.**
· **#2** **Feil skrivemåte for eksponentialform** — $2e^{-i\pi/2}$ er korrekt;
$2e^{i-\pi/2}$ er feil (tolkes som $2e^i\cdot e^{-\pi/2}$); eksponenten må stå som
ett uttrykk. · **#3** **Antisymmetrisk vs. «ikke symmetrisk» forvekslet** —
antisymmetrisk = ingen par med piler begge veier (utenom løkker); en relasjon kan
være både symmetrisk og antisymmetrisk. · **#4** **Glemme refleksive/transitive par
når man leser relasjon ut av et Hasse-diagram** — Hasse viser bare umiddelbare
forgjengere; hele relasjonen har også alle refleksive og transitive par. · **#5**
**Feil partikulærløsning i inhomogen differenslikning** — gjettet må ha *samme form*
som høyresiden (polynom → generelt polynom; $K\cdot r^n\to K\cdot r^n$) og settes inn
i den *fulle* likningen. · **#6** **Regne matriseprodukt som ikke eksisterer** —
$A\cdot B$ krever antall kolonner i $A$ = antall rader i $B$; determinant er udefinert
for ikke-kvadratiske matriser; si det, ikke tving fram et svar. · **#7** **Fortegns-
og regnefeil i Gauss–Jordan / kofaktorutvikling** — lange utregninger; kontroller ved
å sette løsningen inn igjen. · **#8** **Bare skrive svaret uten begrunnelse** — uten
forklaring må man treffe helt riktig for å få poeng. · **#9** **Manglende basistrinn
i induksjon** — uten eksplisitt verifisert minste $n$ er beviset ufullstendig; minste
$n$ er *ikke alltid* 1 (kan være 0 eller 3). · **#10** **Blande utvalgstypene i
kombinatorikk** — ordnet (styre med roller) vs. uordnet (komité) gir ulik formel.
· **#11** **Klassifisere grammatikk feil** — T-symbol på venstre side (ikke engang
kontekstfri); høyreside «T-så-N» kreves for regulær, «N-så-T» eller «T-N-T» er ikke
regulær. · **#12** **Feil surjektivitets-argument** — riktig: $|A|<|B|$ gjør
surjektivitet umulig; galt: «en funksjon kan ikke være både injektiv og surjektiv».

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i utregnings-/kortsvarsvariant.** DNA-regnefag passer direkte: jevnt
   vektede oppgavemønstre som gjentas år etter år → boka drilles mot nettopp disse.
   Den viktigste kalibreringen mot søsteremnet MA0301 er at ITF10705 er
   **kortsvar/utregning uten bevistyngde** — «Vis at …»-oppgaver forekommer bare i
   induksjon. Fra DNA-regnefag beholdes: makrostrukturen (Del 0 → temadeler etter
   avhengighet → eksamenstrening), øvingseksamenene, **drillkapittel for hver
   pilar-sjanger**, frekvensstyrt kapittelvekting, læringsløkke og full
   oppgavedekning.
2. **«Symbol- og formelliste» beholdes som README-krav** — hvert delkapittel med
   symboler/formler får en `collapsible` **Symbol- og formelliste** SIST i
   delkapitlet, med åpningsnotisen «Oppslagsverk — alt her forklares underveis i
   kapitlet.» I tillegg får de fem pilarene en `collapsible` **Løsningsoppskrift**
   (algoritmiske trinn) i drillkapitlet.
3. **Vedleggene modelleres i boka.** Fordi lovene, kombinatorikkformlene og
   differenslikningsformlene deles ut, gjengir boka dem som collapsible oppslag
   (nummererte lover 1–12, de fire kombinatorikkformlene, de tre karakteristisk-
   likning-tilfellene, sin/cos-tabellen) — men treningen går på **å velge riktig**,
   ikke pugge. Notatark-malen i Del 0 er et konkret bilag.
4. **Flashcards på forståelse og valg (560).** Kortene drilles på *hvilken lov/
   hvilket tilfelle/hvilken utvalgstype* og på nabobegrep-distraksjon (refleksiv/
   symmetrisk/antisymmetrisk/transitiv; ekvivalens/delvis ordning; injektiv/
   surjektiv/bijektiv; kontekstfri/regulær; homogen/inhomogen; SN-vinkel-kvadrant),
   ikke ren gjengivelse av utdelte tabeller.
5. **Ingen SVG-figurkrav utløses tvingende, men henvises.** Faget har diagram
   (rettet graf, venndiagram, Hasse, tilstandsdiagram, komplekst plan), men eksamen
   krever at *studenten tegner*, ikke at boka gjør det. Der en figur klargjør sterkt
   (komplekst plan med kvadranter; et lite tilstandsdiagram; et Hasse-eksempel) BØR
   forfatteren wire en enkel SVG (jf. DNA-regnefag «Figurkrav»); ellers beskrives
   diagrammet presist i ord + en tekst-representasjon (parliste for relasjoner;
   overgangstabell for automater). Kvoter er ikke avhengige av figurer.
6. **Søster-avgrensning mot MA0301/klassisk diskret (analysen §8).** Den klassiske
   kjernen (logikk, mengder, relasjoner, funksjoner, kombinatorikk, automater/språk,
   induksjon) deler mønster med MA0301 — men skrives **lettere og utregnings­orientert**
   (mindre bevistrykk). De tre anvendte temaene (komplekse tall, differenslikninger,
   matriser) er **HiØ-spesifikke** og har ikke motstykke i MA0301; de bygges unikt og
   bærer bokas tyngdepunkt sammen med logikk/relasjoner. Grafteori nedtones kraftig
   (motsatt av MA0301, der grafteori er en pilar).

### Kapittel-DNA (teori / drill / øvingseksamen)

Følger `DNA-regnefag.md` uendret (blokkrekkefølge, læringsløkke per metode, full
oppgavedekning, difficulty-spredning + kald bank, hint på alle oppgaver unntatt kald
bank, feilkode-gloss per kapittel, klikkbare kapittelreferanser). Kort:

- **Teorikapittel:** `tip` Eksamensvinkel → `text` Forkunnskaper (+ «Sist du var
  her»-oppfriskning i sene/tunge kapitler) → `text` Motivasjon → løkker
  [`definition`/`theorem` + `text`-utledning → `example` → `exercise` inline] til alt
  er dekket → `warning` Typiske feil → samlet stigende `exercise`-pulje →
  `collapsible` Symbol- og formelliste (sist) + Repetisjonsoppgaver.
- **Drillkapittel (pilarene):** `tip` Eksamensvinkel → `text` Løsningsoppskrift
  (algoritmiske trinn) → `example` gjennomregnet eksamenscase med sensor-margnotater
  → `warning` Typiske feil → `exercise` × 8–15 varianter på eksamensnivå.
- **Øvingseksamen (Del 12):** komplett sett (8–9 oppgaver à 10 p, jevn vekting,
  speiler temafordelingen §2), løsningsforslag i `collapsible` per oppgave skrevet
  som A-besvarelse med delpoeng-notat.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–N) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt fra 13-settsarkivet
> des 2019–juni 2026. **Innholdskontrakt** = definisjoner/metoder/oppskrifter som
> SKAL med (med notasjon). **Kvote** = quiz/flashcards. Kryssbok-lenker peker på
> eksisterende R1/R2-/matte-kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og verktøykasse *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes ITF10705
**id:** `hio-diskretmatte-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (8–9 oppgaver à 10 p, jevn vekting, 4 timer,
  hjelpemidler = to A4-ark + kalkulator + utdelte vedlegg), de fem pilarene, hele
  temafrekvenstabellen, sjangerkatalogen A–N, sensorkravene, karaktergrensene,
  kildeforbeholdet og lesestrategien — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele 13-settsarkivet). Skal formidle: (a)
  **formen** — 4 t skriftlig, 8–9 jevnt vektede oppgaver, alt begrunnes; (b) **de
  fem pilarene** — logikk (100 %), komplekse tall (100 %), matriser (100 %),
  differenslikninger (92 %), relasjoner (92 %); (c) **temafrekvenstabellen** (av 13
  sett) fra §2/analysen §2, delt i klassiske vs. anvendte temaer; (d)
  **sensorkravene** (§2); (e) **karaktergrensene** + at bestått = 39 % → bredde slår
  dybde; (f) **kildeforbeholdet** — én faglærer, stabilt format 2019–2026, stabilt
  15+ år; nye sett kan endre bildet. Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, jf. README «Leserkrav» + DNA-regnefag):**
  - **«Slik leser du denne boka»-boks** (`tip`/`text`, IKKE `definition`): forklarer
    karakterskalaen A–F og hva C-/A-stoff betyr, den kompakte sjangerlista A–N
    (hver kode forklart i klarspråk ved første bruk), og at typiske feil har et samlet
    register (#1–#12). Rammer inn tunge symboler leseren møter senere («du trenger
    ikke forstå $re^{i\varphi}$ eller $\lambda^2+b\lambda+c=0$ ennå»).
  - **Sjangeroversikts-kort på ÉN side** (`collapsible`, ren tabell): sjanger A–N →
    én linjes oppskrift → tidsbudsjett (~ minutter av 240) → vanligste feil (#-kode).
  - **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (rekkefølge + timeanslag,
    prioriter de fem pilarene, deretter oppg-1-sekken), med eksplisitt merknad om at
    tidsanslagene er LESEtid (skriv for hånd → ×1,5).
  - **Deltidsrute:** 10–12-ukers plan (~8 t/uke) med generalprøvene fordelt på flere
    økter (aldri stablet i siste uke).
  - **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren + minimumsråd
    (skriv minst én øvingseksamen for hånd på tid — 4 timers håndskrift er en fysisk
    ferdighet).
  - **Kildenote for frekvens-/sensor-empirien:** 13 eksamenssett med løsningsforslag
    des 2019–juni 2026 + 5 sensorveiledninger 2021–2025 + skummet forgjengerarkiv
    2010–2019; forbehold om lærerbytte. Hentet fra EKSAMENSANALYSE.md, ALDRI oppdiktet.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 orienteringsoppgaver («gitt en 4-timers
  mal med 9 oppgaver — sett opp tidsbudsjett og rekkefølge»; «avgjør av en oppgavetekst
  hvilken sjanger A–N den er, og hvilken feil #-kode som lurer»).
- **Typiske feil:** Metafeilene: droppe begrunnelsen (#8); tro at et enkelt tema kan
  bære karakteren (bredde slår dybde); forsømme de tre anvendte pilarene (svikt i to
  av tre setter selve ståkarakteren i fare).
- **Kvote:** 12 quiz / 8 flashcards (formfakta, pilarene, temafrekvens, sensorkrav,
  karaktergrenser, sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Verktøykassen — vedlegg, notatark og regnehåndverk
**id:** `hio-diskretmatte-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-diskretmatte-0-1`

- **Kapitteltype:** håndverkskapittel (meta — utdelte hjelpemidler + notatark-strategi).
- **Description:** De utdelte vedleggene (nummererte lover 1–12, kombinatorikkformlene,
  differenslikningsformlene, sin/cos-tabellen), hvordan man *bruker* dem effektivt, og
  en konkret **notatark-mal** (to A4-ark) som studenten kan ta med. Etablerer også
  notasjonskonvensjonene (S/F, $re^{i\varphi}$, $[A\,|\,I]$) resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 3 og 5 på tvers av alle sjangre;
  lov-referanse per steg i E/F/G). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [abc-formelen](/bok/r1/r1-2-3)
  `(verifiser lenke)`, [brøkregning](/bok/1t/1t-1-2) `(verifiser lenke)` (R1/S1+S2 er
  forkunnskapskrav for emnet). `collapsible` **Symbol- og formelliste:** notasjons­tabellen
  (logikk-/mengde-symboler, S/F, kvantorer, komplekst-tall-/matrise-/differens­likning-notasjon).
- **Innholdskontrakt:**
  - **Vedleggsoppslag** (`collapsible`): de nummererte lovene 1–12 i to parallelle
    kolonner (logikk/mengder), med lov 11 (implikasjon) og 12 (kontrapositiv)
    fremhevet; inklusjon–eksklusjon for tre mengder; de fire kombinatorikkformlene
    ($n^k$; $\binom{n+k-1}{k}$; $\frac{n!}{(n-k)!}$; $\binom{n}{k}$); de tre
    karakteristisk-likning-tilfellene (to reelle røtter; dobbeltrot; komplekse røtter);
    sin/cos-tabellen for standardvinkler. **Merk:** dette er OPPSLAG (deles ut) — ikke
    pugg. Åpner med begrepsbank-notisen om at det er repetisjonsstoff.
  - **Notatark-mal** (`tip` + `collapsible`): hva to A4-ark bør inneholde —
    definisjoner (relasjonsegenskaper, injektiv/surjektiv-kriterier, krav til
    regulær/kontekstfri grammatikk), oppskrifter (Gauss–Jordan, invers via $[A\,|\,I]$,
    komplekst-tall-kvadranter), og et par gjennomregnede miniatureksempler.
  - **Regnehåndverk:** hvordan vise mellomregning slik sensor premierer (sensorkrav 2);
    lov-referanse per steg (sensorkrav 5); kontrollteknikker (sett løsningen inn igjen).
- **Typiske feil:** #8 (svar uten begrunnelse); tro at man må pugge vedleggene;
  skrive lovforenkling uten lovnummer (#-relatert til F-sjanger).
- **Kvote:** 12 quiz / 12 flashcards (lovkatalogen, kombinatorikkformlene,
  differenslikningstilfellene, notatark-strategien, notasjonen).

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Tallsystemer og oppgave-1-sekken *(prioritet: KUNNE/KJENNE — 77 % + varierende)*

#### Kapittel 1.1: Tallsystemer — binær, heksadesimal og desimal
**id:** `hio-diskretmatte-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-0-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Konvertering mellom titallssystem, binært og heksadesimalt
  (gjentatt divisjon med rest; posisjonsverdier; fire-og-fire bit ↔ ett heks-siffer),
  med vist framgangsmåte — metode er fritt valgt.
- **Eksamensbelegg:** Sjanger A (10/13, 77 %), alltid del av oppgave 1, 3–5 p.
  Metodefrihet (sensorkrav 4) — bare korrekt svar med synlig framgangsmåte kreves.
  Prioritet: kunne (lettpoeng).
- **Forkunnskaper/kryssbok:** kap. 0.2; potenser og posisjonsverdi fra ungdomsskole.
  `collapsible` **Symbol- og formelliste:** basis $b$, siffer­verdi, $16=2^4$-relasjonen.
- **Innholdskontrakt:** posisjonsverdi $\sum d_i b^i$; **desimal → binær/heks** via
  gjentatt divisjon med rest (les restene baklengs); **binær/heks → desimal** via
  posisjonsverdier; **binær ↔ heks** via firebit-grupper; heksadesimale siffer A–F =
  10–15. Vis begge retninger. Metodefrihet nevnes eksplisitt.
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevne tall): «Konverter $181_{10}$ til
  binær og heksadesimal, og $\text{2F}_{16}$ til desimal og binær — vis framgangsmåten.»
- **Typiske feil:** lese restene i feil rekkefølge; glanse over A–F i heks; hoppe over
  framgangsmåten (#8).
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 1.2: Kongruens, boolske uttrykk og predikatlogikk (oppgave-1-sekken)
**id:** `hio-diskretmatte-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-1-1`

- **Kapitteltype:** teorikapittel (kunne/kjenne).
- **Description:** De tre småtemaene som fyller resten av oppgave 1: kongruens
  ($a\equiv b\pmod n$ ⟺ $n\mid(a-b)$), boolske uttrykk (regn ut verdi med $\cdot,+,$
  komplement / De Morgan), og predikatlogikk (oversette $\forall,\exists$ til/fra
  ord, angi sannhetsverdi, negere).
- **Eksamensbelegg:** Sjanger B. Kongruens (2/13, 15 %), boolske uttrykk (2/13, 15 %),
  predikatlogikk/kvantorer (5/13, 38 %) — minst én av disse er nesten alltid i
  oppgave 1, 3–5 p hver. Prioritet: kjenne/kunne (lettpoeng).
- **Forkunnskaper/kryssbok:** kap. 1.1; grunnleggende logiske operatorer (møtes fullt
  i Del 2 — her kun operasjonell bruk). `collapsible` **Symbol- og formelliste:**
  $\equiv\pmod n$, $\mid$ (deler), $\forall,\exists$, $\land,\lor,\neg$, De Morgan.
- **Innholdskontrakt:** **kongruens** — $a\equiv b\pmod n$ betyr $n$ deler $a-b$;
  sjekk ved rest. **Boolsk uttrykk** — regn ut verdi med og/eller/ikke; De Morgan
  $\overline{a\cdot b}=\overline a+\overline b$. **Predikatlogikk** — $\forall x\,P(x)$
  «for alle», $\exists x\,P(x)$ «det finnes»; oversette til/fra norsk; sannhetsverdi
  over et gitt domene; negering $\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)$.
- **Oppgavesjangre:** B. Mønstereksempel: «Avgjør om $47\equiv 12\pmod 5$»; «Neger
  utsagnet ‘alle studenter har bestått’ og oversett til kvantorform.»
- **Typiske feil:** feil negering av kvantor; forveksle $\forall/\exists$;
  regnefeil i boolsk uttrykk; glemme begrunnelse (#8).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.3: Kombinatorikk — utvalg med og uten tilbakelegging
**id:** `hio-diskretmatte-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-1-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Å skille de fire utvalgstypene (ordnet/uordnet × med/uten
  tilbakelegging) og velge riktig formel — komité $=C(n,k)$, styre med roller
  $=P(n,k)$. Formlene deles ut; hele poenget er riktig klassifisering.
- **Eksamensbelegg:** Sjanger C (4/13, 31 %), del av oppgave 1, 3–5 p. Riktig
  identifisering av utvalgstype er hele poenget. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.2; fakultet $n!$. `collapsible` **Symbol- og
  formelliste:** $n!$, $P(n,k)=\frac{n!}{(n-k)!}$, $C(n,k)=\binom{n}{k}=\frac{n!}{(n-k)!k!}$,
  $n^k$, $\binom{n+k-1}{k}$.
- **Innholdskontrakt:** de fire cellene i vedleggets kombinatorikk-tabell med når hver
  brukes; **ordnet uten tilbakelegging** $P(n,k)$ (styre med leder/sekretær/kasserer);
  **uordnet uten tilbakelegging** $C(n,k)$ (komité på $k$ av $n$); **ordnet med
  tilbakelegging** $n^k$; **uordnet med tilbakelegging** $\binom{n+k-1}{k}$.
  Klassifiseringsspørsmålet: «spiller rekkefølgen rolle?» og «kan samme velges flere
  ganger?».
- **Oppgavesjangre:** C. Mønstereksempel (nyskrevet): «På hvor mange måter kan et
  styre med leder, nestleder og kasserer velges blant 9 personer? Og en komité på 3?»
- **Typiske feil:** #10 (blande ordnet/uordnet); glemme å begrunne utvalgstypen (#8).
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A tallkonvertering begge veier · 1.B kongruens +
boolsk + predikatlogikk · 1.C kombinatorikk (klassifisering + utregning) · 1.D samlet
«oppgave-1»-prøve på eksamensnivå).

### Del 2 — Logikk *(prioritet: PERFEKT — 100 %, ofte to hele oppgaver)*

#### Kapittel 2.1: Utsagn, sannhetstabeller, ekvivalens og tautologi
**id:** `hio-diskretmatte-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-1-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Sammensatte utsagn og operatorene $\land,\lor,\neg,\Rightarrow,
  \Leftrightarrow$; full sannhetstabell ($2^n$ rader, hjelpekolonner) for å avgjøre
  **logisk ekvivalens** (like sluttkolonner) eller **tautologi** (bare S).
- **Eksamensbelegg:** Sjanger E (~11/13, 85 %), typisk 10 p (ofte én av to logikk-
  oppgaver). Sannhetsverdier skrives **S/F**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2 (operatorene operasjonelt); `collapsible`
  **Symbol- og formelliste:** $\land,\lor,\neg,\Rightarrow,\Leftrightarrow$, S/F,
  ekvivalens $\equiv$, tautologi.
- **Innholdskontrakt:** sannhetstabeller for hver operator ($\Rightarrow$ er falsk
  bare når S⇒F); **bygg full tabell** med hjelpekolonner for delutsagn; **logisk
  ekvivalens** = identiske sluttkolonner; **tautologi** = sluttkolonn bare S;
  **kontradiksjon** = bare F. Antall rader $=2^n$ for $n$ utsagnsvariabler.
- **Oppgavesjangre:** E. Mønstereksempel: «Sett opp sannhetstabell og avgjør om
  $p\Rightarrow q$ er logisk ekvivalent med $\neg q\Rightarrow\neg p$.»
- **Typiske feil:** feil rad-antall/uttømmende kombinasjoner; feil verdi for
  $\Rightarrow$; skrive T/F i stedet for S/F; hoppe over hjelpekolonner.
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 2.2: Lovforenkling med de nummererte lovene
**id:** `hio-diskretmatte-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Forenkle et sammensatt utsagn ved å bruke de **nummererte lovene**
  i vedlegget, med lovnummer i hvert steg, helt til uttrykket matcher ett av de
  oppgitte alternativene.
- **Eksamensbelegg:** Sjanger F (~11/13, 85 %), typisk 10 p (den andre logikk-
  oppgaven). Lov 11 (implikasjon $p\Rightarrow q\equiv\neg p\lor q$) er nesten alltid
  første steg. Sensor krever eksplisitt lovreferanse per steg (sensorkrav 5).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; lovkatalogen fra kap. 0.2. `collapsible`
  **Symbol- og formelliste:** de 12 lovene med navn og formel (logikk-kolonnen).
- **Innholdskontrakt:** de 12 lovene anvendt på logikk (assosiativ, kommutativ,
  distributiv, De Morgan, idempotens, absorpsjon, dobbel negasjon, invers, identitet,
  dominans, **implikasjon**, **kontrapositiv**); forenklingsstrategien (fjern
  implikasjoner først med lov 11, deretter distribuer/absorber); **skriv lovnummer
  i hvert steg**. Boka gir lovkatalogen som oppslag — treningen går på valg og
  rekkefølge.
- **Oppgavesjangre:** F. Mønstereksempel: «Forenkle $\neg(p\Rightarrow q)\lor(\neg p
  \land q)$ til ett av alternativene, og angi lovnummer i hvert steg.»
- **Typiske feil:** hoppe over lovnummer (byggefeil per sensorkrav 5); feil bruk av
  De Morgan; ikke starte med lov 11 der implikasjon finnes.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 2.3: Logikk-drill — sannhetstabell + lovforenkling
**id:** `hio-diskretmatte-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-2-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Løsningsoppskrift + gjennomregnet eksamenscase + 8–15 varianter av
  begge logikk-sjangrene på eksamensnivå.
- **Eksamensbelegg:** Sjanger E + F samlet (100 % — logikk i alle 13 sett, ofte to
  hele oppgaver, opp mot 20 p). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1, 2.2. `collapsible` **Løsningsoppskrift:** (E)
  1) tell variabler → $2^n$ rader, 2) hjelpekolonner, 3) sammenlign sluttkolonner /
  sjekk bare-S; (F) 1) fjern implikasjoner (lov 11), 2) De Morgan innover,
  3) distribuer/absorber, 4) match alternativ, lovnummer per steg.
- **Innholdskontrakt:** gjennomregnet eksamenscase med sensor-margnotater (hvor
  delpoengene ligger). Kald bank-lenke til Del 12.
- **Oppgavesjangre:** E, F. 8–15 varianter, stigende, nyskrevne uttrykk.
- **Typiske feil:** #8; feil rad-antall; manglende lovnummer.
- **Kvote:** 18 quiz / 14 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A sannhetstabeller (ekvivalens/tautologi) · 2.B
lovforenkling med lovnummer · 2.C predikatlogikk/kvantorer + negering · 2.D samlet
logikkprøve på eksamensnivå (begge sjangre)).

### Del 3 — Mengdelære *(prioritet: KUNNE — 77 %)*

#### Kapittel 3.1: Mengdeoperasjoner på listeform
**id:** `hio-diskretmatte-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-2-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Regne ut union, snitt, differanse, komplement, kartesisk produkt og
  potensmengde konkret på listeform.
- **Eksamensbelegg:** Sjanger G (del av 10/13, 77 %), 5–10 p. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2 (lovene overføres til mengder); `collapsible`
  **Symbol- og formelliste:** $\cup,\cap,\setminus,\overline{A}$, $A\times B$,
  $\mathcal{P}(A)$, $|A|$, universalmengde $U$.
- **Innholdskontrakt:** **union** $A\cup B$, **snitt** $A\cap B$, **differanse**
  $A\setminus B$, **komplement** $\overline A=U\setminus A$, **kartesisk produkt**
  $A\times B$ (ordnede par), **potensmengde** $\mathcal{P}(A)$ (alle delmengder,
  $|\mathcal{P}(A)|=2^{|A|}$); inklusjon–eksklusjon $|A\cup B|=|A|+|B|-|A\cap B|$
  (og tre-mengde-varianten fra vedlegget).
- **Oppgavesjangre:** G. Mønstereksempel: «Gitt $A=\{1,2,3\}$, $B=\{2,4\}$, $U=\{1..5\}$
  — regn ut $A\cup B$, $A\cap B$, $\overline A$, $A\times B$ og $\mathcal{P}(B)$.»
- **Typiske feil:** glemme elementer i potensmengden (inkl. $\emptyset$ og $A$ selv);
  feil komplement (glemme $U$); ordne par feil i kartesisk produkt.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 3.2: Venndiagram og mengdeforenkling
**id:** `hio-diskretmatte-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-diskretmatte-3-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Tegne og skravere venndiagram for å illustrere eller *undersøke*
  om to mengdeuttrykk er like (f.eks. $A\triangle B=(A\cup B)\setminus(A\cap B)$), og
  lovforenkling av mengdeuttrykk med samme nummererte lover (mengde-kolonnen).
- **Eksamensbelegg:** Sjanger G (del av 77 %), 5–10 p. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1, 2.2. `collapsible` **Symbol- og formelliste:**
  $\triangle$ (symmetrisk differanse), de 12 lovene (mengde-kolonnen).
- **Innholdskontrakt:** venndiagram for 2 og 3 mengder; skravering av sammensatte
  uttrykk; **undersøke likhet** ved å skravere begge sider; mengdeforenkling med
  lovene (De Morgan $\overline{A\cup B}=\overline A\cap\overline B$ osv.), lovnummer
  per steg. Bør ha en enkel SVG av venndiagram som referansefigur (DNA-figurkrav).
- **Oppgavesjangre:** G. Mønstereksempel: «Bruk venndiagram til å undersøke om
  $A\setminus(B\cup C)=(A\setminus B)\cap(A\setminus C)$.»
- **Typiske feil:** feil skravering av differanse/komplement; hoppe over lovnummer i
  forenkling.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A listeform-operasjoner + potensmengde · 3.B
kartesisk produkt + inklusjon–eksklusjon · 3.C venndiagram (skravering + likhet) ·
3.D mengdeforenkling med lovnummer på eksamensnivå).

### Del 4 — Relasjoner *(prioritet: PERFEKT — 92 %, fagets mest forutsigbare oppgave)*

#### Kapittel 4.1: Relasjoner — egenskaper og klassifisering
**id:** `hio-diskretmatte-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-3-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Fast oppskrift: gitt en relasjon (mengde ordnede par eller Hasse-
  diagram), tegn den som rettet graf, sjekk refleksiv/symmetrisk/antisymmetrisk/
  transitiv med begrunnelse, og klassifiser som ekvivalensrelasjon / delvis ordning /
  ingen av delene.
- **Eksamensbelegg:** Sjanger D (12/13, 92 %), 10 p — den mest forutsigbare oppgaven i
  faget. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1 (ordnede par, kartesisk produkt); `collapsible`
  **Symbol- og formelliste:** relasjon $R\subseteq A\times A$, $aRb$, refleksiv/
  symmetrisk/antisymmetrisk/transitiv, rettet graf, løkke.
- **Innholdskontrakt:** **refleksiv** (alle noder har løkke: $\forall a\,(a,a)\in R$);
  **symmetrisk** (piler begge veier: $aRb\Rightarrow bRa$); **antisymmetrisk** (ingen
  par begge veier utenom løkker: $aRb\land bRa\Rightarrow a=b$); **transitiv**
  ($aRb\land bRc\Rightarrow aRc$); hver med kort begrunnelse — ett moteksempel er nok
  for «ikke». **Klassifisering:** refleksiv+symmetrisk+transitiv = **ekvivalensrelasjon**;
  refleksiv+antisymmetrisk+transitiv = **delvis ordning**. Tegn relasjonen som rettet
  graf. Bør ha en enkel SVG av en rettet graf som referansefigur.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet parliste): «Gitt $R=\{(1,1),(2,2),
  (1,2),(2,1),(3,3)\}$ på $\{1,2,3\}$ — tegn rettet graf, sjekk de fire egenskapene, og
  klassifiser.»
- **Typiske feil:** #3 (antisymmetrisk vs. ikke symmetrisk); glemme løkke = refleksivt
  par; ett moteksempel ikke tilstrekkelig begrunnet (#8).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.2: Relasjons-drill — Hasse-diagram, ekvivalensklasser og ordninger
**id:** `hio-diskretmatte-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-4-1`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Løsningsoppskrift + case + 8–15 varianter: tegn Hasse-diagram (og
  les relasjon *ut av* et Hasse-diagram), angi ekvivalensklasser, avgjør total- vs.
  delvis ordning.
- **Eksamensbelegg:** Sjanger D, Hasse-/ekvivalensklasse-variantene (del av 92 %), 10 p.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Løsningsoppskrift:** (Hasse fra
  relasjon) 1) fjern løkker, 2) fjern transitive kanter, 3) orient oppover, 4) fjern
  piler; (relasjon fra Hasse) legg til ALLE refleksive og transitive par (#4).
  Ekvivalensklasse $[a]=\{x:xRa\}$; partisjon.
- **Innholdskontrakt:** Hasse begge veier; ekvivalensklasser som partisjon;
  totalordning (alle par sammenlignbare) vs. delvis ordning. Bør ha en enkel SVG av
  et Hasse-diagram.
- **Oppgavesjangre:** D. 8–15 varianter, nyskrevne.
- **Typiske feil:** #4 (glemme refleksive/transitive par fra Hasse); #3; feil retning
  i Hasse.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A fire egenskaper + begrunnelse · 4.B klassifisering
(ekvivalens/delvis ordning) · 4.C Hasse-diagram begge veier · 4.D ekvivalensklasser +
ordninger på eksamensnivå).

### Del 5 — Funksjoner *(prioritet: KUNNE — 69 %)*

#### Kapittel 5.1: Injektiv, surjektiv, bijektiv og invers
**id:** `hio-diskretmatte-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-4-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Begrunne injektiv/surjektiv/bijektiv/inverterbar for diskrete
  funksjoner, med kardinalitetsargument der det passer.
- **Eksamensbelegg:** Sjanger H (9/13, 69 %), 5–10 p. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1 (relasjon → funksjon); `collapsible` **Symbol-
  og formelliste:** $f:A\to B$, domene/kodomene/verdimengde, injektiv/surjektiv/
  bijektiv, invers $f^{-1}$, $|A|$.
- **Innholdskontrakt:** **injektiv** (ulike input → ulike output; ellers moteksempel);
  **surjektiv** (alle i kodomenet treffes; ellers pek på ett som ikke gjør det);
  **bijektiv** (begge); **inverterbar** = bijektiv. **Kardinalitetsargument:**
  $|A|<|B|\Rightarrow f:A\to B$ kan ikke være surjektiv; $|A|>|B|\Rightarrow$ ikke
  injektiv.
- **Oppgavesjangre:** H. Mønstereksempel: «Er $f:\{1,2,3\}\to\{a,b,c,d\}$ gitt ved
  … injektiv/surjektiv/bijektiv? Begrunn.»
- **Typiske feil:** #12 (feil surjektivitets-argument); moteksempel uten forklaring (#8).
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 5.2: Funksjons-drill og sammensetning
**id:** `hio-diskretmatte-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-diskretmatte-5-1`

- **Kapitteltype:** drill-/utvidelseskapittel (kunne).
- **Description:** Varianter av funksjonsoppgaven på eksamensnivå + kort om
  sammensetning $g\circ f$ og invers funksjon konkret.
- **Eksamensbelegg:** Sjanger H (del av 69 %), 5–10 p. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Løsningsoppskrift:** sjekk
  injektiv (ulike input) → surjektiv (dekk kodomenet) → konkluder bijektiv/invers;
  ved ulik kardinalitet: bruk telleargumentet.
- **Innholdskontrakt:** sammensetning $g\circ f$; invers funksjon når bijektiv; 8–12
  varianter, stigende, nyskrevne.
- **Oppgavesjangre:** H. Nyskrevne varianter.
- **Typiske feil:** #12; forveksle rekkefølge i $g\circ f$.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A injektiv/surjektiv med begrunnelse · 5.B bijektiv
+ invers · 5.C kardinalitetsargument · 5.D samlet funksjonsprøve på eksamensnivå).

### Del 6 — Komplekse tall *(prioritet: PERFEKT — 100 %, anvendt pilar)*

#### Kapittel 6.1: Komplekse tall — rektangulær form og regning
**id:** `hio-diskretmatte-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-0-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Komplekse tall $z=a+bi$, regning (addisjon/subtraksjon/
  multiplikasjon), kompleks konjugert, modulus, og **divisjon** $z_1/z_2$ til
  rektangulær form (gang teller og nevner med konjugert av nevner), pluss tegning i
  det komplekse planet.
- **Eksamensbelegg:** Sjanger J (13/13, 100 %), 5–10 p. Divisjon er alltid med.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (abc-formelen, brøkregning R1);
  [komplekse tall R2](/bok/r2/r2-5-1) `(verifiser lenke)`. `collapsible` **Symbol- og
  formelliste:** $z=a+bi$, $i^2=-1$, konjugert $\bar z=a-bi$, $|z|=\sqrt{a^2+b^2}$,
  realdel/imaginærdel.
- **Innholdskontrakt:** $i^2=-1$; addisjon/multiplikasjon; **konjugert** $\bar z=a-bi$;
  **modulus** $|z|=\sqrt{a^2+b^2}$; **divisjon** $\frac{z_1}{z_2}=\frac{z_1\bar z_2}
  {z_2\bar z_2}=\frac{z_1\bar z_2}{|z_2|^2}$ (gang med konjugert av nevner → reell
  nevner); tegning i planet (realakse/imaginærakse). Bør ha en enkel SVG av det
  komplekse planet med et punkt og dets konjugerte.
- **Oppgavesjangre:** J. Mønstereksempel: «Skriv $\frac{3+2i}{1-i}$ på rektangulær
  form $a+bi$.»
- **Typiske feil:** glemme å gange med konjugert; fortegnsfeil i $i^2=-1$; feil
  begrunnelse (#8).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 6.2: Eksponentialform og kvadrant
**id:** `hio-diskretmatte-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-6-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Konvertering til/fra eksponentialform $re^{i\varphi}$: $r=|z|$,
  argumentet $\varphi$ fra $\cos\varphi=a/r$ (bruk sin/cos-tabellen), og **valg av
  riktig kvadrant** fra fortegnene til real- og imaginærdel. Konvertering tilbake via
  $r(\cos\varphi+i\sin\varphi)$.
- **Eksamensbelegg:** Sjanger J (del av 100 %), 5–10 p. Kvadrant-valget er fagets
  vanligste feil (#1). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1; sin/cos-tabellen fra kap. 0.2. `collapsible`
  **Symbol- og formelliste:** $re^{i\varphi}$, argument $\varphi$, $\cos\varphi=a/r$,
  $\sin\varphi=b/r$, de fire kvadrantene, Eulers formel $e^{i\varphi}=\cos\varphi+
  i\sin\varphi$.
- **Innholdskontrakt:** $r=|z|=\sqrt{a^2+b^2}$; $\cos\varphi=a/r$, $\sin\varphi=b/r$;
  **de to kandidatvinklene fra $\cos$ velges ved fortegn** (kvadrant I: $a>0,b>0$;
  II: $a<0,b>0$; III: $a<0,b<0$; IV: $a>0,b<0$); konvertering tilbake
  $re^{i\varphi}=r(\cos\varphi+i\sin\varphi)$; **korrekt skrivemåte** — eksponenten
  som ett uttrykk (#2). Bør ha en enkel SVG som viser de fire kvadrantene.
- **Oppgavesjangre:** J. Mønstereksempel: «Skriv $-1+i\sqrt 3$ på eksponentialform
  $re^{i\varphi}$ (bruk eksakt vinkel).»
- **Typiske feil:** **#1** (feil kvadrant — kjernefeilen; drill spesielt); **#2**
  (feil skrivemåte for eksponent); regne $r$ feil.
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 6.3: Komplekse tall-drill
**id:** `hio-diskretmatte-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-6-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Løsningsoppskrift + case + 8–15 varianter (divisjon,
  eksponentialform med kvadrant, tilbakekonvertering, addisjon på rektangulær form),
  med spesiell vekt på kvadrant-valget.
- **Eksamensbelegg:** Sjanger J (100 %), 5–10 p. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2. `collapsible` **Løsningsoppskrift:**
  (divisjon) gang med konjugert → forenkle; (eksponentialform) 1) $r$, 2)
  $\cos\varphi=a/r$, 3) velg kvadrant fra fortegn, 4) skriv $re^{i\varphi}$ korrekt.
- **Innholdskontrakt:** gjennomregnet eksamenscase med margnotat om hvor #1/#2 slår
  til. Kald bank-lenke til Del 12.
- **Oppgavesjangre:** J. 8–15 varianter, nyskrevne.
- **Typiske feil:** #1, #2.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A divisjon til rektangulær form · 6.B
eksponentialform + kvadrant · 6.C tilbakekonvertering + tegning · 6.D samlet
komplekse tall-prøve på eksamensnivå).

### Del 7 — Differenslikninger *(prioritet: PERFEKT — 92 %, anvendt pilar)*

#### Kapittel 7.1: Homogene og inhomogene differenslikninger
**id:** `hio-diskretmatte-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `hio-diskretmatte-6-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Andreordens lineære differenslikninger med konstante koeffisienter:
  homogen løsning via **karakteristisk likning** ($\lambda^2+b\lambda+c=0$, abc-formelen),
  inhomogen via **partikulærløsning** på høyresidens form, og bruk av initialbetingelser.
- **Eksamensbelegg:** Sjanger K (12/13, 92 %), 10 p (typisk 5 p homogen + 5 p inhomogen)
  — den mest «lærbare» toppoppgaven (ren oppskrift). Nesten alltid to distinkte reelle
  røtter; dobbeltrot forekommer; komplekse røtter praktisk talt aldri på eksamen (bør
  kjenne til). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1 (abc-formelen, andregradslikning); `collapsible`
  **Symbol- og formelliste:** $y_n$, karakteristisk likning $\lambda^2+b\lambda+c=0$,
  røtter $\lambda_1,\lambda_2$, homogen $y_n^{(h)}$, partikulær $y_n^{(p)}$, initial­betingelser.
- **Innholdskontrakt:** **homogen** — sett opp $\lambda^2+b\lambda+c=0$, løs med
  abc-formelen; **to reelle røtter** → $y_n=A\lambda_1^n+B\lambda_2^n$; **dobbeltrot**
  → $y_n=(A+Bn)\lambda^n$; (komplekse røtter → $r^n(A\cos n\varphi+B\sin n\varphi)$ —
  *bør kjenne til*, praktisk talt aldri på eksamen). **Inhomogen** — $y_n=y_n^{(h)}+
  y_n^{(p)}$; gjett $y_n^{(p)}$ på høyresidens form (polynom → generelt polynom;
  $K\cdot r^n\to K\cdot r^n$), sett inn i **full** likning, bestem konstantene ved
  koeffisientsammenligning. **Initialbetingelser** bestemmer $A,B$. Formlene deles ut
  (vedlegg) — tren på å identifisere hvilket tilfelle man er i.
- **Oppgavesjangre:** K. Mønstereksempel: «Løs $y_{n+2}-5y_{n+1}+6y_n=0$ (homogen), og
  deretter $y_{n+2}-5y_{n+1}+6y_n=2n$ (inhomogen).»
- **Typiske feil:** #5 (feil partikulærløsning — feil form / bare gjette et tall når
  høyresiden er lineær); glemme å sette $y^{(p)}$ inn i full likning; feil identifisering
  av tilfelle (reell/dobbel).
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 7.2: Differenslikning-drill
**id:** `hio-diskretmatte-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-7-1`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Løsningsoppskrift + case + 8–15 varianter (homogen med to reelle
  røtter og dobbeltrot; inhomogen med polynom- og eksponensiell høyreside;
  initialbetingelser).
- **Eksamensbelegg:** Sjanger K (92 %), 10 p. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Løsningsoppskrift:** 1) skriv
  karakteristisk likning, 2) løs (identifiser tilfelle), 3) homogen løsning,
  4) (inhomogen) gjett $y^{(p)}$ på høyresidens form, sett inn, 5) legg sammen,
  6) bruk initialbetingelser.
- **Innholdskontrakt:** gjennomregnet case med margnotat om delpoeng (5+5). Kald
  bank-lenke.
- **Oppgavesjangre:** K. 8–15 varianter, nyskrevne.
- **Typiske feil:** #5; feil tilfelle.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A homogen (to reelle røtter) · 7.B homogen
(dobbeltrot) + tilfelle-identifisering · 7.C inhomogen partikulærløsning · 7.D full
oppgave med initialbetingelser på eksamensnivå).

### Del 8 — Matriser og lineære likningssystemer *(prioritet: PERFEKT — 100 %, anvendt pilar)*

#### Kapittel 8.1: Matriseregning — produkt, transponering, determinant
**id:** `hio-diskretmatte-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-0-2`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Matriseprodukt (med dimensjonssjekk), transponering og determinant
  (kofaktorutvikling for 2×2/3×3), inkludert når en operasjon *ikke* er definert.
- **Eksamensbelegg:** Sjanger L (13/13, 100 %), 10 p. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2; [matriser R2](/bok/r2/r2-6-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $A=(a_{ij})$, dimensjon $m\times n$,
  produkt $AB$, transponert $A^T$, determinant $\det A$, kofaktor.
- **Innholdskontrakt:** **matriseprodukt** $AB$ — krever antall kolonner i $A$ = antall
  rader i $B$; si eksplisitt om produktet **ikke eksisterer** (#6); **transponering**
  $A^T$; **determinant** for 2×2 ($ad-bc$) og 3×3 (kofaktorutvikling); determinant
  **udefinert for ikke-kvadratiske** matriser (#6).
- **Oppgavesjangre:** L. Mønstereksempel: «Regn ut $AB$ og $\det A$ for gitte matriser;
  avgjør om $BA$ eksisterer.»
- **Typiske feil:** #6 (regne produkt/determinant som ikke eksisterer); #7 (fortegns-
  feil i kofaktorutvikling).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 8.2: Invers matrise og Gauss–Jordan
**id:** `hio-diskretmatte-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `hio-diskretmatte-8-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Invers matrise via $[A\,|\,I]\to[I\,|\,A^{-1}]$ og løsning av
  lineære likningssystemer via Gauss–Jordan til redusert trappeform (og via $x=A^{-1}b$
  når inversen er kjent).
- **Eksamensbelegg:** Sjanger L (del av 100 %), 10 p. Studenten skal kjenne begrepene
  **koeffisientmatrise** og **totalmatrise**. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1. `collapsible` **Symbol- og formelliste:**
  $A^{-1}$, identitetsmatrise $I$, $[A\,|\,I]$, koeffisientmatrise, totalmatrise,
  redusert trappeform, radoperasjoner.
- **Innholdskontrakt:** **invers via $[A\,|\,I]\to[I\,|\,A^{-1}]$** (radoperasjoner);
  **Gauss–Jordan** — skriv totalmatrise $[A\,|\,b]$, radreduser til redusert trappeform,
  les av løsning; **$x=A^{-1}b$** når inversen er oppgitt; kontroller ved å sette
  løsningen inn i systemet (#7).
- **Oppgavesjangre:** L. Mønstereksempel: «Løs likningssystemet … med Gauss–Jordan, og
  finn inversen til koeffisientmatrisen via $[A\,|\,I]$.»
- **Typiske feil:** #7 (fortegns-/regnefeil i radoperasjoner); glemme å kontrollere;
  forveksle koeffisient- og totalmatrise.
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 8.3: Matrise-drill
**id:** `hio-diskretmatte-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-8-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Løsningsoppskrift + case + 8–15 varianter (produkt/dimensjonssjekk,
  determinant, invers, Gauss–Jordan, $x=A^{-1}b$).
- **Eksamensbelegg:** Sjanger L (100 %), 10 p. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1, 8.2. `collapsible` **Løsningsoppskrift:**
  (produkt) sjekk dimensjoner først; (invers) $[A\,|\,I]$; (system) totalmatrise →
  Gauss–Jordan → kontroller.
- **Innholdskontrakt:** gjennomregnet case med margnotat om hvor #6/#7 slår til. Kald
  bank-lenke.
- **Oppgavesjangre:** L. 8–15 varianter, nyskrevne.
- **Typiske feil:** #6, #7.
- **Kvote:** 18 quiz / 12 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A produkt + dimensjonssjekk + determinant · 8.B
invers via $[A\,|\,I]$ · 8.C Gauss–Jordan til redusert trappeform · 8.D fullt
likningssystem ($x=A^{-1}b$) på eksamensnivå).

### Del 9 — Formelle språk, automater og Turing-maskiner *(prioritet: KUNNE/KJENNE — 85 % / 15 %↑)*

#### Kapittel 9.1: Endelige automater og formelle språk
**id:** `hio-diskretmatte-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-4-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Tegne tilstandsdiagram for en endelig automat som gjenkjenner et
  gitt språk, og forstå formelle språk over et alfabet.
- **Eksamensbelegg:** Sjanger I (del av 11/13, 85 %), 10 p. Flere gyldige løsninger
  godtas (sensorkrav 4). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1 (rettet graf ≈ tilstandsdiagram); `collapsible`
  **Symbol- og formelliste:** alfabet $\Sigma$, streng, språk, tilstand, starttilstand,
  aksepttilstand, overgang, tilstandsdiagram.
- **Innholdskontrakt:** alfabet/streng/språk; endelig automat (tilstander, start,
  aksept, overganger); **tegn tilstandsdiagram** for språk som «inneholder 001»,
  «ender på 0», «odde antall 1-ere», «starter 01 og slutter 10, minst 4 bit».
  Overgangstabell som tekst-representasjon. Bør ha en enkel SVG av et lite
  tilstandsdiagram.
- **Oppgavesjangre:** I. Mønstereksempel: «Tegn en endelig automat som gjenkjenner
  alle binærstrenger med et partall antall nuller.»
- **Typiske feil:** glemme aksepttilstand; ufullstendige overganger; tro at løsningen
  er unik (den er ikke).
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 9.2: Grammatikker — kontekstfri og regulær
**id:** `hio-diskretmatte-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-9-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Klassifisere en grammatikk som kontekstfri/regulær/begge/ingen ved
  presise kriterier, avgjøre om en streng tilhører språket og vise avledningen.
- **Eksamensbelegg:** Sjanger I (del av 85 %), 10 p. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1. `collapsible` **Symbol- og formelliste:**
  nonterminaler $N$, terminaler $T$, produksjonsregler, $\lambda$ (tom streng),
  avledning.
- **Innholdskontrakt:** disjunkte endelige $N,T$; **kontekstfri** — venstresider =
  ett symbol fra $N$; **regulær** — høyresider på formen $\lambda$ / ett $T$-symbol /
  ett $T$ etterfulgt av ett $N$ (T-så-N); avled en streng med produksjonsregler; ev.
  tegn tilsvarende automat.
- **Oppgavesjangre:** I. Mønstereksempel: «Klassifiser grammatikken … som
  kontekstfri/regulær, og avled strengen ‘aabb’.»
- **Typiske feil:** #11 (T på venstre side; «N-så-T» eller «T-N-T» på høyre → ikke
  regulær); forveksle kontekstfri og regulær.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 9.3: Turing-maskiner
**id:** `hio-diskretmatte-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `hio-diskretmatte-9-1`

- **Kapitteltype:** teorikapittel (kjenne — voksende småpilar).
- **Description:** Kjøre en Turing-maskin trinnvis fra gitte fem-tupler og et
  startbånd: vis hvert trinn, hvor maskinen stopper, og båndets innhold + sluttilstand.
- **Eksamensbelegg:** Sjanger N (2/13, 15 %, voksende — hyppig i forgjengerarkivet
  2017–2019), ~5 p. Prioritet: kjenne (beredskap).
- **Forkunnskaper/kryssbok:** kap. 9.1; `collapsible` **Symbol- og formelliste:**
  fem-tuppel (tilstand, lest symbol → ny tilstand, skrevet symbol, retning), bånd,
  lese/skrivehode, starttilstand, stopp.
- **Innholdskontrakt:** fem-tuppel-notasjonen; **kjør maskinen** trinn for trinn (les
  → skriv → flytt → ny tilstand); maskinen stopper ved en kombinasjon uten regel; angi
  sluttbånd og -tilstand.
- **Oppgavesjangre:** N. Mønstereksempel: «Gitt fem-tuplene … og startbåndet ‘110’ —
  vis hvert kjøretrinn og maskinens sluttilstand.»
- **Typiske feil:** feil retning (venstre/høyre); glemme å oppdatere tilstand; ikke
  se når maskinen stopper.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A tegn automat for et språk · 9.B klassifiser
grammatikk (kontekstfri/regulær) · 9.C avledning av strenger · 9.D Turing-kjøring på
eksamensnivå).

### Del 10 — Matematisk induksjon *(prioritet: KJENNE — 38 %, «snill» sumformel)*

#### Kapittel 10.1: Matematisk induksjon — sumformler
**id:** `hio-diskretmatte-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-diskretmatte-0-2`

- **Kapitteltype:** teorikapittel (kjenne — men gir fulle 10 p når med).
- **Description:** Fullstendig induksjonsbevis av en sumformel: basistrinn,
  induksjonshypotese, induksjonstrinn (splitt av siste ledd, sett inn hypotesen). Det
  eneste egentlige bevistemaet i faget, med smalt og forutsigbart repertoar.
- **Eksamensbelegg:** Sjanger M (5/13, 38 %), 10 p når med. Alltid en **sumformel**
  (f.eks. $\sum 2k=n(n+1)$; $\sum 5^k=\frac{5^{n+1}-1}{4}$; $\sum(k-2)(k-1)k$), aldri
  delelighet-/ulikhet-/sterk-induksjon. En «snill» induksjon. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 0.2 (algebra, summetegn); `collapsible` **Symbol-
  og formelliste:** $\sum_{k=1}^n$, basistrinn, induksjonshypotese, induksjonstrinn,
  «minste $n$».
- **Innholdskontrakt:** **(1) basistrinn** — verifiser minste $n$ eksplisitt (ofte
  $n=0$ eller $n=1$, av og til $n=3$; #9); **(2) induksjonshypotese** — anta formelen
  for $n=k$; **(3) induksjonstrinn** — vis for $k+1$ ved å splitte av siste ledd og
  sette inn hypotesen; vis hele algebraen. Manglende basistrinn gir trekk (#9).
- **Oppgavesjangre:** M. Mønstereksempel (nyskrevet sumformel): «Bevis ved induksjon
  at $\sum_{k=1}^n (2k-1)=n^2$ for alle $n\ge 1$.»
- **Typiske feil:** #9 (manglende/feil basistrinn; minste $n$ ikke alltid 1);
  ufullstendig algebra i induksjonstrinnet; ikke bruke hypotesen eksplisitt.
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A basistrinn + hypotese-oppsett · 10.B
induksjonstrinn (splitt av siste ledd) · 10.C full sumformel-bevis (minste $n=1$) ·
10.D sumformel med minste $n\ne 1$ på eksamensnivå).

### Del 11 — Grafteori *(prioritet: KJENNE — 31 %, lavfrekvent; Dijkstra 8 %)*

#### Kapittel 11.1: Grafer — isomorfi, eulergraf og nabomatrise
**id:** `hio-diskretmatte-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-diskretmatte-8-1`

- **Kapitteltype:** teorikapittel (kjenne).
- **Description:** Grunnleggende grafteori: isomorfi, eulergraf (Eulers vilkår),
  nabomatrise og union av grafer. Bevisst kompakt (lavfrekvent ved HiØ).
- **Eksamensbelegg:** Sjanger (generell graf, 4/13, 31 %), 10 p. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 8.1 (nabomatrise ≈ matrise); `collapsible` **Symbol-
  og formelliste:** graf $G=(V,E)$, grad $\deg v$, nabomatrise, eulergraf, isomorfi,
  union $G_1\cup G_2$.
- **Innholdskontrakt:** graf/node/kant/grad; **eulergraf** (Eulers vilkår: sammenhengende
  + alle noder har like grad → eulerkrets); **nabomatrise** (symmetrisk for urettet
  graf); **isomorfi** (samme struktur, gradfølge bevart); **union** av grafer. Håndtaks-
  lemmaet $\sum\deg v=2|E|$ bør kjennes.
- **Oppgavesjangre:** generell graf. Mønstereksempel: «Sett opp nabomatrisen til grafen
  …, avgjør om den er en eulergraf, og om den er isomorf med grafen …».
- **Typiske feil:** feil Eulers vilkår (blande eulerkrets/-sti); feil gradtelling;
  påstå isomorfi uten å sjekke gradfølge.
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 11.2: Dijkstra og korteste vei (beredskap)
**id:** `hio-diskretmatte-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-diskretmatte-11-1`

- **Kapitteltype:** teorikapittel (kjenne — beredskap).
- **Description:** Kjøre Dijkstras algoritme for hånd på en vektet rettet graf: node-
  etiketter (avstand, forgjenger) trinn for trinn, og korteste vei.
- **Eksamensbelegg:** Sjanger N (Dijkstra, 1/13, 8 % — feb23), 10 p. Prioritet: kjenne
  (beredskap; lavfrekvent, men gir full oppgave når med).
- **Forkunnskaper/kryssbok:** kap. 11.1; `collapsible` **Symbol- og formelliste:**
  vektet graf, etikett (avstand, forgjenger), besøkt/ubesøkt, korteste vei.
- **Innholdskontrakt:** **Dijkstra** — start i kilden (avstand 0), velg minste ubesøkte
  etikett, oppdater naboer (avstand + forgjenger), gjenta; les av korteste vei baklengs
  via forgjengere. Vis etikettene trinn for trinn.
- **Oppgavesjangre:** N. Mønstereksempel: «Kjør Dijkstra fra node A i den vektede grafen
  …, og oppgi korteste vei til node F med lengde.»
- **Typiske feil:** oppdatere besøkte noder; glemme forgjenger; feil valg av neste node.
- **Kvote:** 13 quiz / 10 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A nabomatrise + gradfølge · 11.B eulergraf (Eulers
vilkår) · 11.C isomorfi + union · 11.D Dijkstra trinnvis på eksamensnivå).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspill og løsningsoppskrifter A–N + kald bank
**id:** `hio-diskretmatte-12-1` · **number:** 12.1 · **estimatedMinutes:** 70 · **prerequisites:** `hio-diskretmatte-0-1`

- **Kapitteltype:** sjanger-/drillsamling + kald bank.
- **Description:** Samlet oppslag over alle sjangre A–N med én-linjes løsningsoppskrift,
  tidsbudsjett og vanligste feil, pluss en **kald bank** på 8–10 oppgaver med uvante
  vinklinger/kombinasjoner UTEN hint (fasit = momentliste), tydelig merket som kald.
- **Eksamensbelegg:** Metakapittel (hele arkivet). Speiler prognosen §7: nesten sikkert
  én komplekse tall, én differenslikning, én matrise, én relasjon, to logikk, én
  automat/grammatikk, én oppgave-1-sekk; sannsynligvis én av induksjon/funksjoner/
  mengde/graf/Turing. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. `collapsible` **Sjangerkort A–N** (ren
  tabell: sjanger → oppskrift → tidsbudsjett → feilkode).
- **Innholdskontrakt:** sjangerkortene; kald bank (uten hint, momentliste-fasit,
  merket «kald»); difficulty-spredning (noen «(krevende)»).
- **Oppgavesjangre:** alle A–N, blandet.
- **Typiske feil:** hele registeret #1–#12.
- **Kvote:** 20 quiz / 14 flashcards.

#### Kapittel 12.2: Øvingseksamen 1 (med A-fasit)
**id:** `hio-diskretmatte-12-2` · **number:** 12.2 · **estimatedMinutes:** 80 · **prerequisites:** `hio-diskretmatte-12-1`

- **Kapitteltype:** øvingseksamen (komplett sett).
- **Description:** Nyskrevet komplett sett — **9 oppgaver à 10 p (90 p)**, jevn vekting,
  speiler temafordelingen §2 (én av hver pilar + oppgave-1-sekk + automat + induksjon/
  funksjon). Løsningsforslag i `collapsible` per oppgave, skrevet som A-besvarelse med
  delpoeng-notat.
- **Eksamensbelegg:** Speiler en «typisk» eksamen (analysen §7), ikke en uvanlig.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. Deklareres som «9 oppgaver à ~25 min —
  kan trygt deles over flere økter, én oppgave-blokk per økt».
- **Innholdskontrakt:** komplett sett + A-fasit; **selvdiagnose-sjekkliste** (☐) etter
  fasiten; tidsbudsjett (4 t = 240 min; forklar gjøre- vs. lesetid).
- **Oppgavesjangre:** A–N-miks (typisk sett).
- **Typiske feil:** registeret #1–#12 (påpekt i fasit der relevant).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 12.3: Øvingseksamen 2 (8 oppgaver, med A-fasit)
**id:** `hio-diskretmatte-12-3` · **number:** 12.3 · **estimatedMinutes:** 80 · **prerequisites:** `hio-diskretmatte-12-2`

- **Kapitteltype:** øvingseksamen (komplett sett, 8-oppgaversvarianten).
- **Description:** Nyskrevet komplett sett i **8-oppgaversmalen à 10 p (80 p)** (den
  nyere varianten, des 2025), der noen småtemaer slås sammen i oppgave 1. Løsnings­forslag
  i `collapsible` per oppgave som A-besvarelse med delpoeng-notat.
- **Eksamensbelegg:** Speiler 8-oppgaversmalen (analysen §1). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. Deklareres som «8 oppgaver à ~28 min —
  kan deles over flere økter».
- **Innholdskontrakt:** komplett sett + A-fasit; **selvdiagnose-sjekkliste** (☐);
  tidsbudsjett. Minst én «bestått-på-marginen»-kommentar som viser E-terskelen nedenfra
  (karakter-realisme).
- **Oppgavesjangre:** A–N-miks (8-oppgaversmal).
- **Typiske feil:** registeret #1–#12.
- **Kvote:** 8 quiz / 8 flashcards.

**Prøve-kvote Del 12:** de 2 øvingseksamenene ER prøvene (komplette sett med fasit);
kald bank i 12.1 er den ekstra beredskapstesten.

---

## 4. Prøver (temaprøver + øvingseksamener)

Hver temadel (1–11) har **4 prøver** (temaprøver på stigende nivå, endende på
eksamensnivå), jf. listene «Prøve-kvote Del N» over. Del 0 dekkes av øvingseksamenene;
Del 12 inneholder de 2 komplette øvingseksamenene + kald bank.

**Sum temaprøver:** 11 temadeler × 4 = **44 temaprøver** + **2 øvingseksamener** = 46
prøver totalt. Kravet «≥4 prøver per temadel» er oppfylt for alle 11 temadeler.

Prøvekapitlene deklareres som «4 prøver à ~X min — kan trygt deles over flere kvelder,
én prøve per økt». Flervalg i statiske prøve-collapsibles skal ha **stokkede
fasit-bokstaver** (aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer
fasiten. Distraktorer straffer aldri grundig lesing (ligger en distraktor nær sannheten,
forklarer fasit-kommentaren hvorfor den ikke holder). Hver prøvefasit avsluttes med en
kompakt avkryssbar **selvdiagnose-sjekkliste** (☐).

---

## 5. Kvotesammendrag med summeringskontroll

> Kontrollregnet per kapittel FØR totalen (README/DNA-krav). Summene under er den
> REELLE per-kapittel-summen.

### Quiz per kapittel

| Kap | Quiz | | Kap | Quiz |
|---|---|---|---|---|
| 0.1 | 12 | | 6.3 | 18 |
| 0.2 | 12 | | 7.1 | 22 |
| 1.1 | 20 | | 7.2 | 18 |
| 1.2 | 18 | | 8.1 | 20 |
| 1.3 | 18 | | 8.2 | 20 |
| 2.1 | 20 | | 8.3 | 18 |
| 2.2 | 20 | | 9.1 | 18 |
| 2.3 | 18 | | 9.2 | 16 |
| 3.1 | 18 | | 9.3 | 14 |
| 3.2 | 16 | | 10.1 | 20 |
| 4.1 | 20 | | 11.1 | 16 |
| 4.2 | 18 | | 11.2 | 13 |
| 5.1 | 18 | | 12.1 | 20 |
| 5.2 | 16 | | 12.2 | 8 |
| 6.1 | 20 | | 12.3 | 8 |
| 6.2 | 20 | | | |

**Delsummer (kontrollregnet):**
- Del 0: 12+12 = **24**
- Del 1: 20+18+18 = **56**
- Del 2: 20+20+18 = **58**
- Del 3: 18+16 = **34**
- Del 4: 20+18 = **38**
- Del 5: 18+16 = **34**
- Del 6: 20+20+18 = **58**
- Del 7: 22+18 = **40**
- Del 8: 20+20+18 = **58**
- Del 9: 18+16+14 = **48**
- Del 10: **20**
- Del 11: 16+13 = **29**
- Del 12: 20+8+8 = **36**

**Quiz totalt:** 24+56+58+34+38+34+58+40+58+48+20+29+36 = **533**

### Flashcards per kapittel

| Kap | FC | | Kap | FC |
|---|---|---|---|---|
| 0.1 | 8 | | 6.3 | 12 |
| 0.2 | 12 | | 7.1 | 20 |
| 1.1 | 16 | | 7.2 | 12 |
| 1.2 | 18 | | 8.1 | 18 |
| 1.3 | 16 | | 8.2 | 18 |
| 2.1 | 18 | | 8.3 | 12 |
| 2.2 | 20 | | 9.1 | 16 |
| 2.3 | 14 | | 9.2 | 16 |
| 3.1 | 18 | | 9.3 | 12 |
| 3.2 | 14 | | 10.1 | 18 |
| 4.1 | 20 | | 11.1 | 14 |
| 4.2 | 12 | | 11.2 | 10 |
| 5.1 | 16 | | 12.1 | 14 |
| 5.2 | 12 | | 12.2 | 8 |
| 6.1 | 18 | | 12.3 | 8 |
| 6.2 | 18 | | | |

**Delsummer (kontrollregnet):**
- Del 0: 8+12 = **20**
- Del 1: 16+18+16 = **50**
- Del 2: 18+20+14 = **52**
- Del 3: 18+14 = **32**
- Del 4: 20+12 = **32**
- Del 5: 16+12 = **28**
- Del 6: 18+18+12 = **48**
- Del 7: 20+12 = **32**
- Del 8: 18+18+12 = **48**
- Del 9: 16+16+12 = **44**
- Del 10: **18**
- Del 11: 14+10 = **24**
- Del 12: 14+8+8 = **30**

**Flashcards totalt:** 20+50+52+32+32+28+48+32+48+44+18+24+30 = **458**

### Kvotejustering til gulvet (≥500/≥500)

Rå-summen gir **533 quiz** og **458 flashcards**. Quiz er over gulvet; flashcards
ligger **42 under**. Justering (dokumentert — forfatteren bruker de justerte tallene):
de fem pilarene og de definisjonstunge kapitlene løftes med **+42 flashcards** fordelt
slik at hvert løftet kapittel fortsatt er balansert:

| Kapittel | FC før | FC etter | Δ |
|---|---|---|---|
| 2.1 (sannhetstabeller) | 18 | 22 | +4 |
| 2.2 (lover) | 20 | 24 | +4 |
| 3.1 (mengdeoperasjoner) | 18 | 22 | +4 |
| 4.1 (relasjonsegenskaper) | 20 | 24 | +4 |
| 5.1 (funksjoner) | 16 | 20 | +4 |
| 6.1 (komplekse — rektangulær) | 18 | 22 | +4 |
| 6.2 (eksponentialform) | 18 | 22 | +4 |
| 7.1 (differenslikninger) | 20 | 24 | +4 |
| 8.1 (matriseregning) | 18 | 22 | +4 |
| 8.2 (invers/Gauss–Jordan) | 18 | 22 | +4 |
| 9.1 (automater) | 16 | 18 | +2 |

Sum Δ = 4×10 + 2 = **+42**.

**Justert flashcards totalt:** 458 + 42 = **500**.

### Gate-tall (REELL per-kapittel-sum etter justering)

- **Quiz totalt: 533** (≥500 ✓)
- **Flashcards totalt: 500** (≥500 ✓)
- **Kapitler: 31** (≥15 ✓)
- **Temaprøver: 44** (4 per temadel × 11) + **2 øvingseksamener** (≥4 per temadel ✓)

> Merk: identitetstabellen i §1 og gate-tallene her er de SAMME reelle
> per-kapittel-summene (533 quiz / 500 flashcards etter +42-justeringen). Forfatter-
> agenten må ALDRI gå under disse gulvene; å bygge noen ekstra kort/spørsmål utover
> gulvet er greit, men summen skal aldri påstås høyere enn det som faktisk bygges.

---

## 6. Opphavsrett og verifikasjon

- Eksamensoppgaver, løsningsforslag og sensorveiledninger brukes som **grunnlag**
  (mønstre, temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver, tall,
  matriser, relasjoner, grammatikker og differenslikninger i boka er **nyskrevne** i
  samme sjanger — endre tall, kontekst og formuleringer.
- Standardnotasjon, definisjoner og klassiske resultater (abc-formelen, De Morgans
  lover, Eulers vilkår, karakteristisk likning, Gauss–Jordan) er allmenn faglig
  kunnskap og brukes fritt.
- **Matematisk sannhetskontroll (DNA-regnefag):** fortegns-/entydighets-/«alltid»-
  påstander parametersjekkes numerisk før de påstås ubetinget. Konkret for dette faget:
  (a) at komplekse røtter i differenslikninger «praktisk talt aldri» opptrer på eksamen
  er et *frekvensforbehold* (merk *(verifiser)* mot neste sett), ikke en matematisk
  påstand; (b) partikulærløsningens form ved høyresider som sammenfaller med en
  homogen rot (resonanstilfellet) krever multiplikasjon med $n$ — hvis en oppgave
  konstrueres slik, må formen justeres *(verifiser)* og sjekkes numerisk; (c)
  determinant-/inverskriterier ($\det A\ne 0$ for inverterbarhet) verifiseres per
  konstruert matrise.
- Usikre faktapåstander merkes *(verifiser)*. Emnestatus (aktivt H2026) er verifisert
  mot HiØs emneside 11. juli 2026, men status kan endres — byggefasen bør sjekke mot
  neste publiserte emneside/eksamenssett.

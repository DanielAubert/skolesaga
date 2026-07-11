# Bokskjelett: PPU406 Kroppsøvingslæreren, skolen og faget (Norges idrettshøgskole) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. For dette drøftingsfaget betyr det: ett begrep/én posisjon med
> pensumforankring (`definition` + evt. `text` om spenninger) → et anvendt
> mini-case/en gjennomskrevet drøftingsbit som viser begrepet i bruk
> (`example`) → en drøftings-/anvendelsesoppgave på samme begrep (`exercise`)
> plassert INLINE — deretter neste begrep, til alt stoffet i delkapitlet er
> dekket. Ingen oppgave får kreve stoff (begrep, posisjon, læreplanterm) som
> ikke er dekket tidligere i kapitlet eller i eksplisitt refererte forkunnskaper
> (flytt teoribiten tidligere ved behov). Autoritativ kilde: README «Leserkrav»
> + `DNA-drofting.md`. Unntak: sjanger-/prøve-/modellbesvarelseskapitler følger
> sin egen arketype (komplett oppgave først, momentliste/besvarelse i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret —
> løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs PPU406-arkiv 2023/24–2025/26: **6 komplette oppgavesett
> med tilhørende sensorveiledninger** + ett case-vedlegg (fire avis-leserinnlegg,
> H2025), alle lest oppgave for oppgave). Alle oppgaver, case, disposisjoner,
> modellbesvarelser og fasitmomenter i boka skal være NYSKREVNE (se §6). Læreplan-
> begreper (kjerneelementer, grunnleggende ferdigheter, kompetansemål) og standard
> pedagogiske/fagdidaktiske termer er faglig allmenneie og brukes fritt.
>
> **Emnet er AKTIVT** (verifisert mot NIHs emneside «PPU406 Kroppsøvingslæreren,
> skolen og faget (Høst 2025)» og programplan PPU 2025–2026, 11. juli 2026): 10
> studiepoeng, undervises høst, individuell skriftlig **skoleeksamen 4 timer, karakter
> A–F**, emneansvarlig Øyvind Førland Standal. Godkjente arbeidskrav kreves for
> eksamensrett. Etterfølger-/nedleggingsforbehold er derfor ikke aktuelt.
>
> **Faglig presisjon:** PPU406 er et rendyrket **drøftings-/profesjonsrefleksjonsfag**
> uten fasit. Sensor belønner **begrepspresisjon, navngitt pensumforankring, kobling
> til LK20, selvstendig kritisk drøfting og analyserte praksiseksempler**. Der en
> pensumkobling er utgave-/år-sensitiv (pensum skiftet noe ved emneansvarsskiftet
> 2025), eller der en paragraf-/forskriftshenvisning kan være foreldet
> (opplæringsloven ble fornyet 2024), merkes påstanden `(verifiser)` for fagfellesjekk
> i fase 6.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-ppu406` |
| Tittel | **PPU406 Kroppsøvingslæreren, skolen og faget (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole. Visningsnavn i `institusjoner.ts`: «PPU406 Kroppsøvingslæreren, skolen og faget». |
| Arketype | **Drøftingsfag** (`DNA-drofting.md`), med glu-didaktikkprofil: fagdidaktisk refleksjon rundt ett konkret skolefag (kroppsøving), uten regnetyngde. «Regnestykket» er erstattet av evnen til å koble teori, læreplan og egen praksis. Se §2 «Arketypetilpasning». |
| Antall kapitler | **23** (Del 0: 2 · temadeler 1–6: 16 · eksamenstrening Del 7: 5) |
| Estimert totaltid | **~1 220 min ≈ 20 timer** (per kapittel under) |
| Quiz totalt | **506** (krav ≥500) |
| Flashcards totalt | **518** (begrepsrikt, forankringstungt fag → høy flashcard-tetthet naturlig; krav ≥500) |

**Pitch (ett avsnitt):** PPU406-eksamen er en 4-timers skriftlig skoleeksamen uten
hjelpemidler der kandidaten skriver lange, sammenhengende drøftingstekster om
lærerprofesjonen i kroppsøving. Det finnes ingen fasit — sensor vurderer *forståelse*,
ikke rette svar, og belønner **navngitt begrepsforankring (hvilken pensumforfatter/hvilket
verk et begrep hører til), kobling til LK20 (kjerneelementer, grunnleggende ferdigheter,
kompetansemål), selvstendig kritisk drøfting med analyserte praksiseksempler, og
refleksjon over kroppsøvingsfagets egenart** (et praktisk-kroppslig fag der elevene
«viser, praktiserer og øver»). Fire temaer bærer faget: **klasseledelse (~100 %), øving
og kroppslig læring (~95 %), grunnleggende ferdigheter (~75 %) og — fra 2025 — vurdering
(~55 %, stigende).** Arkivet deler seg i to eksamensregimer brutt av emneansvarsskiftet
H2025: **regime 1 «velg to av tre»** (H2023–V2025, brede essayoppgaver) og **regime 2
«svar på alt, vektet»** (H2025→, der oppgave 1 teller 2/3 og ofte er case-basert). Boka
bygges baklengs fra det sensor faktisk premierer og ruster studenten for BEGGE regimer,
med regime 2 tyngst vektet. Kjerneferdigheten som drilles er **gapet fra korrekt
gjengivelse (C-nivå) til forankret, kritisk, praksisanalytisk drøfting (A-nivå)**.

**Kritisk kildeforbehold (settes i Del 0, gjentas i eksamenstreningen):** Frekvenstallene
bygger på **hele arkivet på 6 oppgavesett med sensorveiledninger (H2023–V2026)**. Regime 2
har foreløpig bare to sett (H2025 + V2026); nye sett kan endre bildet, og case-/vedlegg-
sjangeren er ny og lite belagt. Sensorveiledningene i regime 2 er langt mer strukturerte
(eksplisitte lav/middels/høy-rubrikker per deloppgave) enn de generiske A/C/E-beskrivelsene
i regime 1. Alle frekvenser er merket «av 6 sett».

**Pensumforbehold (ufravikelig — gjelder alle forfatterkoblinger):** Pensumreferansene i
§6 og i kapitlenes begrepskontrakter er hentet fra sensorveiledningenes egne pensumlister
og er **utgave-/år-sensitive** — pensum skiftet noe ved emneansvarsskiftet 2025 (fra
Leirhaug til Standal). Begrepene er stabile; **forfatterkoblingene må verifiseres mot
gjeldende NIH-emneplan før de låses** (merket `(verifiser)` gjennomgående). Ingen
oppdiktede kilder: alle refererte forfattere/verk er reelle bidrag fra veiledningenes
lister.

**Læreplan-/lovforbehold:** Henvisninger til **opplæringsloven** merkes `(verifiser)` fordi
loven ble **fornyet i 2024** (ny opplæringslov trådte i kraft) — paragrafnumre og ordlyd
kan avvike fra eldre pensum. Henvisninger til **LK20** (kjerneelementer, kompetansemål,
grunnleggende ferdigheter, overordnet del) er stabile, men konkrete kompetansemål-numre
merkes `(verifiser)` mot UDIRs gjeldende læreplan for kroppsøving.

**Kryssreferanser til NIH-klyngen (forkunnskaper i prosa, IKKE døde lenker):** PPU406 deler
faglig grunn med søsken-emner i NIH-porteføljen hvis bøker har skjelett men ennå ikke er
bygget. Der forkunnskap trengs, henvises det i PROSA (ikke som markdown-lenke, siden
kapitlene ikke finnes ennå): pedagogisk grunnlag om læring og motivasjon overlapper med
**IDR109 Treningslære** (`nih-idr109`, øvings-/ferdighetslæring) og NIHs metode-/
idrettspsykologi-emner; det kroppslige lærings- og bevegelsesgrunnlaget berører
**LKI235/THP-serien** (`nih-lki235`). Ved bygging: skriv «(dette bygger på grunnleggende
lærings- og øvingsteori — se en innføring i treningslære/ferdighetslæring)» i prosa, uten
lenke, til bøkene finnes. Innad i PPU406-boka lenkes normalt med
`[kap. X.Y](/bok/nih-ppu406/nih-ppu406-X-Y)`.

---

## 2. Makrostruktur

Rekkefølgen følger analysens §7-prioritering (gjenganger-score styrer omfang) og
faglig avhengighet: eksamenskart + essayhåndverk FØR fagstoffet; de to
topp-gjengangerne (klasseledelse, øving) først; vurdering (ny bærebjelke i regime 2)
og grunnleggende ferdigheter deretter; læreplan-/kompetansebegrepet og didaktisk
planlegging som binder temaene til LK20; støtte-temaer for A-bredde; til slutt
sjangerkapitler + modellbesvarelser. Fagets egenart (kroppsøvingsfagets «dobbelthet»)
er en gjennomgående rød tråd som avrunder de fleste kapitler, ikke en egen del.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og essayhåndverk | 2 | perfekt (meta) | De to eksamensregimene, temafrekvensene, de fem sjangrene, sensorkravene (A/C/E) og kildeforbeholdet må etableres FØR fagstoffet. Håndverkskapitlet (0.2) er unikt kritisk: «gjør rede for → drøft → eksemplifiser» + tidsbudsjett for 4 t og 2/3-vektingen er selve ferdigheten faget tester. |
| 1 | Klasseledelse i kroppsøving | 3 | perfekt (~100 %) | Den absolutte toppgjengangeren — egen oppgave i hvert eneste sett (6/6). Fagspesifikk vs. generisk ledelse; fagets dobbelthet; relasjon/struktur/trygghet/læringsmiljø; kobling undervisning ↔ god ledelse; selvrefleksjonssjangeren («hvem vil du være»). |
| 2 | Øving og kroppslig læring | 3 | perfekt (~95 %) | Egen oppgave i alle sett. Øving som kompetanse; øvingsmodellen; tilrettelegging med selvstendige eksempler; kjerneelementet «Bevegelse og kroppslig læring»; kroppslig læring/danning. |
| 3 | Vurdering i kroppsøving | 3 | perfekt (~55 %, stigende) | Ny bærebjelke i regime 2 (H2025 case, V2026 formativ/summativ). Formativ/summativ, vurdering for/av læring, lovverkets vs. faglitteraturens begreper, karaktersettingsdebatten, case-sjangeren, den 2/3-vektede oppgave 1. |
| 4 | Grunnleggende ferdigheter i LK20 | 2 | perfekt (~75 %) | De fem ferdighetene; tydeliggjøring og meningsfullhet i et praktisk fag; både «velg én» og «alle fem»; digitale verktøy som deltema. |
| 5 | Læreplan, kompetansebegrepet og didaktisk planlegging | 2 | kunne (~45 %/~30 %) | Hva «kompetanse» betyr i LK20; utfordringer i kroppsøving; kjerneelementene; fremgangsmåte for undervisningsopplegg fra kompetansemål (didaktisk tenkning, ikke aktivitetsliste); den didaktiske relasjonsmodellen. |
| 6 | Fagets egenart og A-breddetemaene | 3 | kjenne/kunne (støtte) | For A-bredde: kroppsøvingsfagets egenart/diskurser (ideologi vs. virkelighet); egne bevegelsesferdigheter i profesjonsperspektiv; skole–hjem-samarbeid/inkludering/laget rundt eleven; digitale verktøy samlet. |
| 7 | Eksamenstrening | 5 | perfekt (meta) | Ett sjangerkapittel som dekker de fem sjangrene med oppskrift + selvrettingsrubrikk, + fire modellbesvarelseskapitler (A/C/B-nivå med margnotater) på de mest vektede sjangrene/temaene, inkl. den 2/3-vektede case-oppgave 1. |

Rasjonale: de fire bærebjelketemaene (klasseledelse, øving, vurdering, grunnleggende
ferdigheter) får hver sin del med flere kapitler og høyest kvote; læreplan-/didaktikk-
delen binder dem til LK20; A-breddetemaene får ett kompakt del; eksamenstreningen leverer
sjangerhåndverket og modellbesvarelsene som viser karakternivåene.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og essayhåndverk |
| 1 | Klasseledelse i kroppsøving |
| 2 | Øving og kroppslig læring |
| 3 | Vurdering i kroppsøving |
| 4 | Grunnleggende ferdigheter i LK20 |
| 5 | Læreplan, kompetansebegrepet og didaktisk planlegging |
| 6 | Fagets egenart og A-breddetemaene |
| 7 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — skrives ALLTID fullt ut ved første bruk; brukes i «Eksamensbelegg» under)

**RED-DRØFT-EKS** «Gjør rede for → drøft → eksemplifiser» (kjernesjangeren): kort presis
redegjørelse → drøfting av muligheter/begrensninger/spenninger → konkrete, analyserte
praksiseksempler → avrunding i lys av fagets egenart · **SELVREFLEKS** Profesjonell
selvrefleksjon («hvem vil du være som lærer»): formuler og begrunn egen profesjonell
posisjon med teori-, praksis- og læreplanforankring — balanse mellom personlig stemme og
faglig grunngiving · **CASE** Case-/vedleggsoppgave (regime 2): analyser autentisk
materiale (f.eks. avisdebatt) fagdidaktisk, foreslå alternativer, svar en fiktiv motpart ·
**RÅDGIV** Kollega-/rådgivningsscenario: gi teoriforankrede råd i en beskrevet
praksissituasjon (uro i klassen; en kollega som spør om øving) · **PLAN** Didaktisk
planleggingsoppgave: vis fremgangsmåte for undervisningsopplegg fra et kompetansemål (den
didaktiske tenkningen, ikke aktivitetslista), inkl. valg av formativ og summativ vurdering.

### Vurderingsakser og karakterspråk (fra analysen §4 — samles i Del 0-orienteringsboksen, aldri kald i competenceGoals)

Karakterskala **A–F** (A best, E så vidt bestått, F stryk). Boka bruker gjennomgående
tre nivåmarkører, forklart i Del 0: **C-stoff** = korrekt, dekkende gjengivelse uten
kritisk brodd (godt gjennomsnitt); **A-markør** = det grepet som løfter fra korrekt til
selvstendig/kritisk/praksisanalytisk; **E-terskel** = minstekravet for bestått. Del 0 sier
eksplisitt at **C er en god og vanlig karakter tidlig i studiet**, og «Gapet til A»-lister
rammes som oppgraderingsmeny, ikke mangelliste (jf. README «Karakter-realisme»).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel via Eksamensvinkel-`tip`)

Gjennomgående A-kjennetegn (stabile på tvers av begge regimer): god struktur som besvarer
ALLE delene oppgaven spør etter; overbevisende bruk av **relevante, navngitte teorier og
begreper**; **grunngitt argumentasjon** og **selvstendige refleksjoner**; god forståelse av
**læreplan og kroppsøving som fag** med **kritisk drøfting der det er relevant**; og
**analyserte** (ikke bare illustrerende) praksiseksempler. C-nivå: alle deler behandlet,
tilfredsstillende forståelse og begrepsbruk, meningsfull argumentasjon og *noen*
selvstendige refleksjoner — men mindre dybde/kritisk brodd. E-nivå: ufullstendig ift. det
oppgaven spør om, lite egen drøfting, svak eller upresis begreps-/teoribruk. **Regime 2**:
oppgave 1 vekter 2/3 — å prioritere tid og dybde der er strategisk avgjørende; rubrikkene
er eksplisitt lav/middels/høy per deloppgave.

### Feilkoder (fra analysen §5 — glosses ved FØRSTE bruk i HVERT kapittel, samles i Del 0-registeret)

**#1** Deskriptiv gjengivelse uten drøfting (klassisk C-tak) · **#2** Synsing uten
forankring (personlige meninger uten teori/litteratur/læreplan) · **#3** Manglende
læreplankobling (skriver om kroppsøving uten LK20 der det er relevant) · **#4** Uanalyserte
praksiseksempler (illustrerer i stedet for å analyseres med fagbegreper — skiller C fra A)
· **#5** Overser fagets egenart (behandler ledelse/vurdering/ferdighet generisk uten
kroppsøvingsfagets dobbelthet) · **#6** Feil bruk av vurderingsbegreper (blander
formativ/summativ, for/av læring; karaktersetting som eneste vurderingsform) · **#7**
Feiltolker kompetansebegrepet (forklarer ikke hva «kompetanse» betyr i læreplan, eller ser
ikke utfordringene i et praktisk fag) · **#8** Ubalansert tidsbruk i regime 2 (like mye tid
på oppgave 2/3 som på den 2/3-vektede oppgave 1) · **#9** Innholdsbeskrivelse i stedet for
fremgangsmåte (i planleggingsoppgaven: beskriver aktivitetene, ikke den didaktiske
tenkningen) · **#10** Ufullstendig svar på flerdelte oppgaver (hopper over a/b/c-deler).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Rendyrket drøftingsfag med glu-didaktikkprofil.** `DNA-drofting.md` følges tett:
   temakapittel-DNA (Eksamensvinkel → temaets landskap → kjernebegreper MED forankring →
   posisjoner/spenninger → anvendelse → typiske feil → oppgaver → pensumkart), læringsløkke
   per begrep, sjangerkapittel-DNA og modellbesvarelse-DNA (A/C/B-nivå). Det glu-spesifikke:
   begrepene forankres alltid i ETT konkret skolefag (kroppsøving), og drøftingsaksene er
   fagdidaktiske (hvordan arter det generelle temaet seg i et praktisk-kroppslig fag?).
2. **To eksamensregimer må trenes samtidig.** Boka ruster for både «velg to av tre» (regime
   1, brede essay) og «svar på alt, oppgave 1 = 2/3» (regime 2, case + korte redegjørelser),
   med regime 2 tyngst. Del 0 og eksamenstreningen forklarer begge; hvert temakapittel viser
   temaet i BEGGE regimeformer (bred essayvariant + kort/deloppgavevariant).
3. **Case-/vedleggssjangeren får eget håndverksfokus.** Ny i regime 2 (H2025 avisdebatt om
   vurdering). Kapittel 3.3 og modellbesvarelse 7.3 trener kildekritisk lesing av autentisk
   materiale + fagdidaktisk anvendelse. Sitatlager-broen (DNA-drøfting): bokas case-materialer
   er NYSKREVNE parafraser, og det forklares ved første forekomst hvordan et ekte
   eksamensvedlegg skiller seg (autentiske avisinnlegg, lengre, med egne stemmer) mens grepene
   som trenes (identifisere posisjon, anvende fagbegrep, svare fagdidaktisk) er de samme.
4. **Flashcards tungt vektet (518).** Faget er begreps- og forankringstungt og eksamen er
   uten hjelpemidler → høy flashcard-tetthet naturlig: **begrep ↔ forfatter/verk-koblinger**
   (øvingsmodellen ↔ Aggerholm/Barker/Standal; fagspesifikk klasseledelse ↔ Aasland &
   Brøgger; grunnleggende ferdigheter ↔ Hallås `(verifiser)`), **læreplanfakta** (de fem
   grunnleggende ferdighetene, de tre kjerneelementene, kompetansemålsverbene), og
   **vurderingsbegreper** (formativ/summativ, for/av læring, halvårs-/sluttvurdering).
   Quiz-profilen driller nabobegrep-distraktorer (formativ/summativ, for/av læring,
   generisk/fagspesifikk ledelse, kjerneelement/kompetansemål, aktivitet/øving) — men
   distraktorene straffer aldri grundig lesing (jf. README).
5. **Erfarings-bro (DNA-drøfting bølge 5).** Mange PPU-studenter har egen praksis-/
   idrettserfaring. Boka viser hvordan erfaringen KONVERTERES til pensumforankret argument
   (start i begrepet → bruk erfaringen som ILLUSTRASJON → koble tilbake til drøftingsaksen),
   ikke bare advarer mot synsing (#2). Egen `tip`-boks i kap. 1.3 og 2.1.
6. **Ingen oppdiktede kilder eller læreplandetaljer.** Pensumkoblinger merkes `(verifiser)`
   (utgave-sensitive); opplæringslov-paragrafer merkes `(verifiser)` (fornyet 2024);
   kompetansemål-numre merkes `(verifiser)` mot UDIR. Forfatteren finner ALDRI på
   frekvenstall — de hentes fra Eksamensbelegg-feltet i dette skjelettet.

### Kapittel-DNA — temakapittel (Del 1–6)

Obligatorisk blokk-rekkefølge (jf. DNA-drøfting; blokkene 3–7 VEKSLER i løkker per begrep,
ikke tre samlede bolker):

1. `tip` **Eksamensvinkel** — frekvens/vekt (fra Eksamensbelegg under), hvilke sjangre
   (RED-DRØFT-EKS/SELVREFLEKS/CASE/RÅDGIV/PLAN) temaet inngår i, hva sensor ser etter.
2. `text` **Forkunnskaper** — kapitler i boka temaet bygger på (markdown-lenker til
   eksisterende PPU406-kapitler) + NIH-klynge-kryssreferanser i prosa (ingen døde lenker).
3. `text` **Temaet i fagets landskap** — hvilket problem det svarer på, hvor det står i
   fagdidaktiske debatter; åpne med et hverdagsanker (en konkret undervisningssituasjon) FØR
   begrepsapparatet (jf. README «Hverdagsanker»).
4. `definition` **Kjernebegreper** (flashcard-KILDE, toppnivå med `title`) — hvert begrep
   presist definert OG forankret: hvilken pensumforfatter/hvilket verk bruker det slik
   `(verifiser)`, og hvilke nyanser ulike bidrag legger i det. Definisjoner uten avsender er
   C-stoff.
5. `text` **Posisjoner og spenninger** (drøftingsaksene) — der pensum rommer uenighet/
   dilemmaer: fremstill posisjonene ærlig, vis hva som står på spill. Råstoffet for
   A-drøfting.
6. `example` × 2–3 **Anvendelse** — temaet brukt på en konkret kroppsøvings-case, skrevet
   slik en god besvarelse ville gjort det, med eksplisitte pensumreferanser og
   fagets-egenart-refleksjon.
7. `warning` **Typiske feil** — feilkodene (#1–#10) for temaet, glosset ved første bruk;
   inkl. eksplisitt «riktig begrep uten drøfting/forankring = C-tak».
8. `exercise` × 5–8 (INLINE i løkkene) — 2–3 begreps-/kontrollspørsmål (én lett
   innstegsoppgave tidlig, ren gjengivelse med egne ord), 1–2 kortdrøftinger (løsning =
   disposisjonsforslag + momentliste), 1–2 eksamenslike essay-/deloppgaver i temaets sjanger
   (løsning = momentliste + disposisjon, ikke fullt essay). Alle med `hints` (første hint =
   begrepet/forankringen/første grep, ALDRI konklusjonen).
9. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → begreper/poenger de «eier»
   `(verifiser)` (flashcard-råstoff); åpner med begrepsbank-notisen (jf. README).

### Kapittel-DNA — sjangerkapittel (7.1) og modellbesvarelse (7.2–7.5)

Sjangerkapittel: `tip` Eksamensvinkel → `text` Oppskrift per sjanger (trinn + tidsbudsjett)
→ binær selvrettingsrubrikk for drøfting (0/1-sjekkliste, jf. DNA-drøfting) → `example`
gjennomskrevet besvarelsesbit med margkommentarer → `exercise` × 3–6 med momentliste.
Modellbesvarelse: nyskrevet oppgave i reell sjanger → `collapsible` **A-besvarelse** (full
tekst, margnotater «her: begrep + forankring», «her: motargument — dette løfter til A»,
pausepunkt-markører) → `collapsible` **C-besvarelse** (korrekt men flat, ÆRLIG merket) →
`collapsible` **B-/midtnivå-besvarelse** (ekte studentspråk, litt rotete men god, med de
2–3 grepene som skiller den fra A) → `tip` **Sensorblikket** (momentliste + vektlegging).
Minst én modellbesvarelse konkluderer SKARPT og er likevel toppnivå (jf. README
«A-konklusjonsvariasjon»); minst én case er en vippe-case der to landinger er forsvarlige.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder + prioritetsklasse
> (perfekt/kunne/kjenne/meta), «av 6 sett». **Begrepskontrakt** = begreper som SKAL defineres
> med pensumforankring (flashcard-kilden). **Drøftingsakser** = spenningene kapitlet ruster
> studenten til å drøfte. **Kvote** = quiz/flashcards. Pensumkoblinger merket `(verifiser)`
> er utgave-sensitive (§6-forbeholdet).

### Del 0 — Eksamenskart og essayhåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes PPU406
**id:** `nih-ppu406-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (meta).
- **Description:** De to eksamensregimene («velg to av tre» / «svar på alt, oppgave 1 = 2/3»),
  temafrekvensene, de fem sjangrene, karakterskalaen A–F, sensorkravene, feilregisteret
  (#1–#10) og kildeforbeholdet — verktøyet som styrer hele boka. Inneholder Del 0-pakken:
  orienteringsboks, «Lite tid?»-boks, deltidsrute, kildenote og sjangeroversiktskort.
- **Eksamensbelegg:** Metakapittel (hele arkivet H2023–V2026). Skal formidle: (a) **formen** —
  4 t individuell skriftlig skoleeksamen, ingen hjelpemidler, WISEflow, karakter A–F, godkjente
  arbeidskrav kreves; (b) **de to regimene** og hvorfor regime 2 vektes tyngst; (c)
  **temafrekvensene** (klasseledelse ~100 %, øving ~95 %, grunnleggende ferdigheter ~75 %,
  vurdering ~55 % stigende, læreplan/kompetanse ~45 %, didaktisk planlegging ~30 %, digitale
  verktøy ~30 %, egne ferdigheter ~30 %, skole–hjem ~20 %); (d) **sensorkravene** (A/C/E, §2);
  (e) **kildeforbeholdet** — 6 sett, regime 2 bare 2 sett, nye sett kan endre bildet. Prioritet:
  perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen (RED-DRØFT-EKS/SELVREFLEKS/CASE/RÅDGIV/PLAN) skrevet
  fullt ut som studentens sjekkliste, med frekvens per sjanger; prognosen for neste sett
  (nesten sikkert: én klasseledelse, én øving, minst ett av grunnleggende ferdigheter/vurdering,
  ofte en case-/planleggingsoppgave). **Orienteringsboks** (`text`/`tip`, ALDRI `definition`):
  karakterskala A–F + hva C-stoff/A-markør/E-terskel betyr + full sjangerkodeliste + at feil har
  et samlet register (#1–#10). **«Lite tid?»-boks** (`tip`): 3–5-dagers hurtigrute
  (kapittelrekkefølge Del 1→2→3→4 + timeanslag), med presisering at tidsanslagene er LESEtid
  (skriving for hånd ≈ ×1,5). **Deltidsrute:** 8–10-ukers plan (~8 t/uke) med øvingseksamener
  fordelt på flere økter. **«Lese mye, skrive lite»-boks:** legitim leserute + minimumsråd
  (skriv minst én øvingseksamen for hånd på tid — 4 t håndskrift er en fysisk ferdighet).
  **Kildenote** (fra EKSAMENSANALYSE §8, ALDRI oppdiktet): 6 sett med veiledninger H2023–V2026,
  regime-skiftet H2025, forbehold. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  eksamen i regime 2 med oppgave 1 = 2/3 — sett opp tidsbudsjett» og «avgjør av en oppgavetekst
  hvilken sjanger den er og hva sensor vil premiere».
- **Typiske feil:** Metafeilene: tro at alle sett er like (les regimeforskjellen); undervurdere
  oppgave 1 i regime 2 (#8); tro at temafrekvensene er en garanti (kildeforbeholdet).
- **Kvote:** 14 quiz / 14 flashcards (formfakta, regimene, temafrekvens, sensorkrav,
  sjangerkoder, feilregister, kildeforbehold).

#### Kapittel 0.2: Essayhåndverket — å bygge en drøftingsbesvarelse
**id:** `nih-ppu406-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftingsstruktur + forankring).
- **Description:** Ferdigheten som gir uttelling på hver eneste oppgave: å bygge en
  drøftingsbesvarelse (problemforståelse → forankret begrepsavklaring → strukturert drøfting med
  motargumenter → analysert praksiseksempel → refleksjon over fagets egenart → konklusjon som
  svarer på spørsmålet). Etablerer «gjør rede for → drøft → eksemplifiser»-malen og
  tidsbudsjettet for 4 t / 2/3-vektingen.
- **Eksamensbelegg:** Gjennomgående (sensorkrav på tvers av alle sjangre). Kjernesjangeren
  RED-DRØFT-EKS er den klart vanligste. Prioritet: perfekt (meta).
- **Forkunnskaper:** [kap. 0.1](/bok/nih-ppu406/nih-ppu406-0-1).
- **Begrepskontrakt (flashcard-kilde):** **redegjørelse vs. drøfting** (gjengi presist vs. veie
  posisjoner mot hverandre); **forankring** (koble påstand til navngitt pensum/LK20 — skiller C
  fra A); **analysert vs. illustrerende praksiseksempel** (#4); **motargument/innvending** som
  A-markør; **fagets egenart** som obligatorisk avrundingsrefleksjon (#5); **konklusjon** som
  svarer på det oppgaven spurte om (ikke oppsummering). **Tidsbudsjett-mal** for 4 t (regime 1:
  to likt vektede oppgaver; regime 2: ~2/3 av tida på oppgave 1).
- **Drøftingsakser (håndverk):** når lønner et forbehold seg vs. når skal konklusjonen være
  skarp (jf. README «A-konklusjonsvariasjon» — forbehold er verktøy, ikke garnityr); hvor mye
  redegjørelse før drøftingen «tar over».
- **Anvendelse (`example`):** en kort oppgavetekst brytes ned til disposisjon (hva skal
  redegjøres, hva drøftes, hvilket eksempel, hvilken egenart-refleksjon); en flat C-åpning
  omskrives til A-åpning med forankring og drøftingsanslag.
- **Erfarings-bro (`tip`):** hvordan egen praksis-/idrettserfaring konverteres til
  pensumforankret argument (start i begrepet → erfaring som illustrasjon → koble til aksen).
- **Typiske feil:** #1 (deskriptiv gjengivelse), #2 (synsing uten forankring), #4 (uanalysert
  eksempel), #10 (ufullstendig svar på flerdelte oppgaver).
- **Sjangeroversiktskort (`collapsible`, ÉN side):** hver sjanger → én linjes oppskrift →
  tidsbudsjett → vanligste feil.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen temaprøve (dekkes av eksamenstreningen i Del 7; håndverket
prøves gjennom modellbesvarelsene).

### Del 1 — Klasseledelse i kroppsøving *(prioritet: PERFEKT — ~100 %, toppgjenganger)*

#### Kapittel 1.1: Klasseledelse — generisk og fagspesifikk
**id:** `nih-ppu406-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Klasseledelse som både generisk (relasjon, struktur, tydelighet,
  læringsmiljø) og fagspesifikk i kroppsøving, og kroppsøvingsfagets «dobbelthet»
  (spenningsforhold som preger faget) — den mest testede aksen i hele emnet.
- **Eksamensbelegg:** Egen oppgave i 6/6 sett (~100 %). Sjangre: RED-DRØFT-EKS, RÅDGIV.
  Regime 2-rubrikk: lav/C = korrekt men generell forklaring, eksempler illustrerer men
  analyseres ikke; høy/A = fagpresis, forskningsforankret, analyserer dimensjonene og kobler
  lærerens undervisning til god ledelse. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2). Pedagogisk grunnlag om
  relasjon/læringsmiljø overlapper med allmenn pedagogikk (PPU401) — nevnes i prosa, ingen
  lenke (boka finnes ikke).
- **Begrepskontrakt (flashcard-kilde):** **klasseledelse** (generisk def.); **dimensjonene**
  relasjon, struktur, tydelighet, trygghet, læringsmiljø; **fagspesifikk klasseledelse** i
  kroppsøving; **kroppsøvingsfagets dobbelthet** (fagets spenningsforhold); kobling **god
  undervisning ↔ god ledelse**. Forankring: Aasland & Brøgger, *Klasseledelse i kroppsøving*
  `(verifiser)`; Klette, *Hva vet vi om god undervisning?* (antologien) `(verifiser)`.
- **Drøftingsakser:** generisk vs. fagspesifikk ledelse (hva er særegent når elevene beveger
  seg, konkurrerer, er kroppslig eksponert?); struktur vs. relasjon; kontroll vs. autonomi;
  ledelse i en gymsal/uteareal vs. et klasserom.
- **Case-forslag:** en time med uro i en aktivitetsstasjon-økt; overgangen fra garderobe til
  aktivitet; en elev som vegrer seg for kroppslig eksponering.
- **Typiske feil:** #5 (generisk behandling uten fagets egenart), #4 (uanalyserte eksempler),
  #1 (gjengivelse uten drøfting).
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 1.2: Relasjon, struktur og læringsmiljø i praksis
**id:** `nih-ppu406-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-1-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hvordan de fire dimensjonene (relasjon, struktur, trygghet, læringsmiljø)
  operasjonaliseres i kroppsøving, og hvordan lærerens undervisning (tydelige mål, tilpasning,
  aktivitetsflyt) ER klasseledelse — den koblingen som løfter til A i regime 2-rubrikken.
- **Eksamensbelegg:** Del av klasseledelsesoppgaven (6/6). Sjangre: RED-DRØFT-EKS, RÅDGIV,
  SELVREFLEKS. A-markør: kobler lærerens undervisning til ledelse og bruker praksiserfaringer
  analytisk. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 1.1](/bok/nih-ppu406/nih-ppu406-1-1).
- **Begrepskontrakt (flashcard-kilde):** **relasjonskompetanse**; **struktur/rammer**
  (regler, rutiner, overganger); **trygt læringsmiljø** (mestring, inkludering, mobbeforebygging);
  **aktivitetsflyt/tid i aktivitet**; **proaktiv vs. reaktiv ledelse**. Forankring: Aasland &
  Brøgger `(verifiser)`; antologien kap. 7 og 22 (klasseledelse) `(verifiser)`.
- **Drøftingsakser:** proaktiv struktur vs. spontanitet; mye aktivitet vs. dyp læring;
  standardiserte rutiner vs. relasjonell fleksibilitet.
- **Case-forslag:** planlegge de første fem minuttene av en time; håndtere en gruppe som ikke
  vil delta; bygge relasjon til en umotivert elev.
- **Typiske feil:** #4 (eksempel som illustrerer, ikke analyseres), #1, #3 (glemmer LK20s
  overordnede del / verdigrunnlag der relevant `(verifiser)`).
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 1.3: «Hvilken klasseleder vil du være» — profesjonell selvrefleksjon
**id:** `nih-ppu406-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-1-2`

- **Kapitteltype:** temakapittel + sjangertrening (SELVREFLEKS) (perfekt).
- **Description:** Selvrefleksjonssjangeren anvendt på klasseledelse: å formulere og begrunne
  egen profesjonell posisjon med forankring i teori, praksiserfaring og fagets diskurser —
  balansen mellom personlig stemme og faglig grunngiving.
- **Eksamensbelegg:** «Beskriv hva slags klasseleder du ønsker å være …» er en tilbakevendende
  regime 1-oppgave og kan gjenoppstå. Sjanger: SELVREFLEKS. Prioritet: perfekt (sjangertrening).
- **Forkunnskaper:** [kap. 1.1](/bok/nih-ppu406/nih-ppu406-1-1),
  [kap. 1.2](/bok/nih-ppu406/nih-ppu406-1-2).
- **Begrepskontrakt (flashcard-kilde):** **profesjonell posisjon/lærerplattform**; **verdier og
  danning** i lærerrollen; **profesjonsetisk ansvar**; skillet **begrunnet posisjon vs.
  synsing** (#2). Forankring: antologiens profesjons-/lærerrolle-kapitler (kap. 12, 13, 21)
  `(verifiser)`.
- **Drøftingsakser:** personlig stemme vs. teoretisk grunngiving; autoritær vs. relasjonell
  lederidentitet; idealet «hvem jeg vil være» vs. praksisrealiteten.
- **Erfarings-bro (`tip`):** hvordan egen erfaring som elev/utøver/trener konverteres til
  forankret argument (illustrasjon, ikke begrunnelse alene).
- **Case-forslag:** skriv en kort lederplattform for deg selv, forankret i to navngitte
  pensumbidrag; kritiser en ren synse-plattform og forankre den.
- **Typiske feil:** #2 (synsing uten forankring — hovedfellen i denne sjangeren), #4, #1.
- **Kvote:** 24 quiz / 26 flashcards.

**Prøve-kvote Del 1:** 4 temaprøver (1.A generisk vs. fagspesifikk ledelse + dobbeltheten ·
1.B dimensjonene i praksis + undervisning-som-ledelse · 1.C selvrefleksjonssjangeren
(disposisjon + forankring) · 1.D samlet klasseledelsesoppgave på eksamensnivå, begge regimer).
Prøve-id: `nih-ppu406-1-prove` (chapterNumber `1.P`).

### Del 2 — Øving og kroppslig læring *(prioritet: PERFEKT — ~95 %)*

#### Kapittel 2.1: Øving som kompetanse og øvingsmodellen
**id:** `nih-ppu406-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva øving er som pedagogisk fenomen (ikke bare repetisjon), øvingsmodellen
  («the practising model») og utvikling av bevegelseskompetanse («movement capability»), koblet
  til kjerneelementet «Bevegelse og kroppslig læring».
- **Eksamensbelegg:** Egen oppgave i alle sett (~95 %). Sjangre: RED-DRØFT-EKS, RÅDGIV.
  Regime 2-rubrikk: lav = forklarer øving ut fra læreplan/litteratur men gir lite relevant
  tilrettelegging; høy = bruker selvstendige, relevante eksempler og faguttrykk til å vise
  hvordan øving kan tilrettelegges. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2). Grunnleggende ferdighets-/
  motorisk læring overlapper med treningslære (IDR109/LKI235) — nevnes i prosa, ingen lenke.
- **Begrepskontrakt (flashcard-kilde):** **øving/å øve** som kompetanse; **øvingsmodellen**
  (the practising model); **movement capability/bevegelseskompetanse**; **kjerneelementet
  «Bevegelse og kroppslig læring»**; skillet **øving vs. drilling/repetisjon**. Forankring:
  Aggerholm, Standal, Barker & Larsson (2018), *On practising in PE* `(verifiser)`; Barker,
  Aggerholm, Standal & Larsson (2018), *Developing the practising model* `(verifiser)`; Hordvik,
  Bjørke & Standal (2024), *Modellbasert praksis i kroppsøving*, kap. 6 `(verifiser)`.
- **Drøftingsakser:** øving som mål i seg selv vs. middel til prestasjon; lærerstyrt vs.
  elevutforskende øving; øving i et fag med karakter/vurdering.
- **Erfarings-bro (`tip`):** egen øvingserfaring fra idrett konvertert til pedagogisk argument.
- **Case-forslag:** tilrettelegge øving i en ferdighet (f.eks. kast, balanse, dans) for en
  heterogen klasse; en kollega spør «hva mener du egentlig med å øve?».
- **Typiske feil:** #4 (eksempel uten analyse), #1, #5 (overser at øving i kroppsøving er
  kroppslig og eksponert).
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 2.2: Kroppslig læring, motorisk læring og danning
**id:** `nih-ppu406-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Kroppslig og motorisk læring, kroppsbevissthet og bevegelsesglede, og
  danning som kjerne i kroppsøvingsfaget — det faglige grunnlaget under øvingsmodellen og
  fagets egenart.
- **Eksamensbelegg:** Del av øvingsoppgaven og forutsetning for fagets-egenart-refleksjonen
  (~95 % via øving; danning gjennomgående). Sjangre: RED-DRØFT-EKS. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 2.1](/bok/nih-ppu406/nih-ppu406-2-1).
- **Begrepskontrakt (flashcard-kilde):** **kroppslig læring**; **motorisk læring** (allsidig,
  variert); **kroppsbevissthet**; **bevegelsesglede**; **danning** i kroppsøving; forholdet
  **læring vs. prestasjon**. Forankring: Ommundsen (2016), *Danning i kroppsøving* `(verifiser)`;
  Hordvik, Bjørke & Standal (2024) `(verifiser)`.
- **Drøftingsakser:** danning vs. fysisk aktivitet/helse; prestasjon vs. deltakelse;
  bevegelsesglede vs. måloppnåelse.
- **Case-forslag:** en time der målet er bevegelsesglede snarere enn ferdighetsmåling; hvordan
  begrunne kroppslig læring overfor en skeptisk kollega.
- **Typiske feil:** #1, #5 (reduserer kroppsøving til fysisk aktivitet/helse), #3 (glemmer
  kjerneelementet).
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 2.3: Tilrettelegging og differensiering av øving
**id:** `nih-ppu406-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-ppu406-2-2`

- **Kapitteltype:** temakapittel + sjangertrening (RÅDGIV) (perfekt).
- **Description:** Hvordan øving tilrettelegges og differensieres for en heterogen klasse —
  selvstendige, relevante eksempler og faguttrykk, som er A-markøren i regime 2-rubrikken —
  inkludert kollega-/rådgivningssjangeren.
- **Eksamensbelegg:** Tilrettelegging er selve A-skillet i øvingsoppgaven (~95 %); RÅDGIV-
  scenarioet («en kollega spør om øving») forekommer. Sjangre: RED-DRØFT-EKS, RÅDGIV.
  Prioritet: perfekt.
- **Forkunnskaper:** [kap. 2.1](/bok/nih-ppu406/nih-ppu406-2-1),
  [kap. 2.2](/bok/nih-ppu406/nih-ppu406-2-2).
- **Begrepskontrakt (flashcard-kilde):** **tilpasset opplæring** i kroppsøving; **differensiering**
  (nivå, tempo, oppgavevariasjon); **stillasbygging/støtte**; **inkluderende tilrettelegging**;
  **digitale verktøy i øving** (berøres — muligheter/begrensninger, koble til kap. 4.2/6.3).
  Forankring: Hordvik, Bjørke & Standal (2024) `(verifiser)`.
- **Drøftingsakser:** felles opplegg vs. individuell differensiering; inkludering vs.
  prestasjonsnivå; digitale hjelpemidler som støtte vs. forstyrrelse.
- **Case-forslag:** differensier en øving for en klasse med stor ferdighetsspredning; råd til en
  kollega som strever med tilrettelegging.
- **Typiske feil:** #4 (generelle eksempler uten faguttrykk), #1, #5.
- **Kvote:** 24 quiz / 26 flashcards.

**Prøve-kvote Del 2:** 4 temaprøver (2.A øving som kompetanse + øvingsmodellen · 2.B kroppslig
læring/motorisk læring/danning · 2.C tilrettelegging + RÅDGIV-scenario · 2.D samlet
øvingsoppgave på eksamensnivå med tilrettelegging). Prøve-id: `nih-ppu406-2-prove`
(chapterNumber `2.P`).

### Del 3 — Vurdering i kroppsøving *(prioritet: PERFEKT — ~55 %, stigende bærebjelke i regime 2)*

#### Kapittel 3.1: Vurderingsformer — formativ, summativ, for/av læring
**id:** `nih-ppu406-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Vurderingsbegrepene i skolen: formativ vs. summativ, vurdering FOR vs. AV
  læring, halvårsvurdering (med/uten karakter) og sluttvurdering — og det avgjørende skillet
  mellom **lovverkets** og **faglitteraturens** vurderingsbegreper.
- **Eksamensbelegg:** Ny hovedgjenganger i regime 2 (3/6 samlet, ~55 %; H2025 case, V2026
  formativ/summativ). Regime 2-rubrikk: lav = nevner begrepene; middels = forklarer med
  henvisning til lovverk/teori + eksempler; høy = skiller lovverkets og faglitteraturens
  begreper og analyserer hva «vise, praktisere, øve» betyr for vurdering. Sjangre: RED-DRØFT-EKS,
  PLAN. Prioritet: perfekt (dagens form).
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2).
- **Begrepskontrakt (flashcard-kilde):** **formativ vurdering / vurdering FOR læring**;
  **summativ vurdering / vurdering AV læring**; **halvårsvurdering** (med/uten karakter);
  **sluttvurdering**; **lovverkets vurderingsbegreper** (forskrift til opplæringsloven)
  `(verifiser)` **vs. faglitteraturens**; **egenvurdering/hverandrevurdering**. Forankring:
  antologien kap. 9 `(verifiser)`; forskrift til opplæringsloven (kap. om vurdering)
  `(verifiser — opplæringsloven fornyet 2024)`.
- **Drøftingsakser:** vurdering for læring vs. karakterpress; lovverkets vs. faglitteraturens
  begreper (ikke identiske); rettferdig vs. utviklende vurdering.
- **Case-forslag:** velg vurderingsform for et konkret kompetansemål; forklar forskjellen på
  halvårsvurdering med og uten karakter til en forelder.
- **Typiske feil:** #6 (blander formativ/summativ, for/av læring), #3, #1.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 3.2: Vurdering i et fag der elevene «viser, praktiserer og øver»
**id:** `nih-ppu406-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-3-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Vurderingens egenart i kroppsøving: å vurdere kroppslig, ikke-lineær
  bevegelseslæring der elevene «viser, praktiserer og øver»; skjønn og profesjonsfellesskapets
  rolle når vurdering krever faglig skjønn — høy-nivå-markøren i V2026-rubrikken.
- **Eksamensbelegg:** Kjernen i V2026-vurderingsoppgaven og H2025-casen (~55 %). Høy = analyserer
  hva verbene betyr for læringsprosessen og får fram at profesjonsfellesskapet er viktig når
  vurdering krever skjønn. Sjangre: RED-DRØFT-EKS, CASE. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 3.1](/bok/nih-ppu406/nih-ppu406-3-1).
- **Begrepskontrakt (flashcard-kilde):** **vurdering i ikke-lineær bevegelseslæring**;
  **kompetansemålsverbene** «vise, praktisere, øve, trene på, utvikle» `(verifiser mot UDIR)`;
  **faglig skjønn**; **profesjonsfellesskap**; **validitet/rettferdighet** i kroppslig vurdering.
  Forankring: Tolgfors, Barker, Nyberg & Larsson (2023), *Assessment for and of learning in
  nonlinear movement education* `(verifiser)`; antologien kap. 9 `(verifiser)`.
- **Drøftingsakser:** måle prosess vs. produkt; observasjon vs. dokumentasjon; individuell
  prestasjon vs. deltakelse/innsats (og hva LK20 faktisk sier `(verifiser)`).
- **Case-forslag:** vurder en elevs kompetanse i en øvingsbasert aktivitet; hvorfor
  profesjonsfellesskapet trengs for rettferdig vurdering.
- **Typiske feil:** #5 (generisk vurderingsteori uten fagets egenart), #6, #4.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 3.3: Karaktersettingsdebatten — case- og vedleggssjangeren
**id:** `nih-ppu406-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-3-2`

- **Kapitteltype:** temakapittel + sjangertrening (CASE) (perfekt).
- **Description:** Karaktersettingsdebatten i kroppsøving og case-/vedleggssjangeren fra regime 2
  (H2025 avisdebatt): å lese autentisk materiale kildekritisk, identifisere hvilken vurdering
  debatten handler om, foreslå alternativer og skrive et faglig fundert svar til en fiktiv
  motpart.
- **Eksamensbelegg:** H2025 oppgave 1 (2/3-vektet) bygde på fire avis-leserinnlegg om
  karakter/vurdering. CASE-sjangeren er ny og lite belagt (kildeforbehold), men høyt vektet der
  den forekommer. Sjangre: CASE. Prioritet: perfekt (dagens topp-vektede sjanger).
- **Forkunnskaper:** [kap. 3.1](/bok/nih-ppu406/nih-ppu406-3-1),
  [kap. 3.2](/bok/nih-ppu406/nih-ppu406-3-2).
- **Begrepskontrakt (flashcard-kilde):** **karaktersetting** som én av flere vurderingsformer
  (#6-felle: karakter som eneste vurdering); **argumentanalyse** av et debattinnlegg;
  **fagdidaktisk motsvar**; **kildekritisk lesing**. Sitatlager-bro: bokas case-materialer er
  NYSKREVNE parafraser — forklar hvordan et ekte vedlegg skiller seg (autentiske avisinnlegg med
  egne stemmer) mens grepene er de samme.
- **Drøftingsakser (vippe-case):** karakter motiverer vs. karakter skader (begge posisjoner
  forsvarlige — merk «(omstridt — begge forsvarlige)»); vurdering for læring vs. behovet for
  sluttkarakter.
- **Case-forslag:** et nyskrevet sett med to–fire korte, motstridende debattinnlegg om karakter
  i kroppsøving → identifiser posisjonene, foreslå alternativ vurderingspraksis, skriv et
  fagdidaktisk svar.
- **Typiske feil:** #6, #10 (svarer ikke på alle deler av case-oppgaven), #2 (synsing uten
  fagbegrep), #8 (undervurderer den 2/3-vektede oppgaven).
- **Kvote:** 24 quiz / 26 flashcards.

**Prøve-kvote Del 3:** 4 temaprøver (3.A vurderingsformene + lovverk vs. faglitteratur · 3.B
vurdering i bevegelseslæring + skjønn/profesjonsfellesskap · 3.C case-/vedleggssjangeren
(argumentanalyse + motsvar) · 3.D samlet vurderingsoppgave, inkl. regime 2 oppgave 1-format).
Prøve-id: `nih-ppu406-3-prove` (chapterNumber `3.P`).

### Del 4 — Grunnleggende ferdigheter i LK20 *(prioritet: PERFEKT — ~75 %)*

#### Kapittel 4.1: De fem grunnleggende ferdighetene i kroppsøving
**id:** `nih-ppu406-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** De fem grunnleggende ferdighetene i LK20 (muntlige, å kunne lese, å kunne
  skrive, å kunne regne, digitale ferdigheter) og hvordan hver tydeliggjøres og blir meningsfull
  i et praktisk-kroppslig fag — testes både som «velg én» og «alle fem».
- **Eksamensbelegg:** 4/6 sett (~75 %): H2023 (valgfri ferdighet), V2024 (digitale), V2025
  (lesing), V2026 (alle fem). Høy = forklarer alle fem presist, viser integrering gjennom
  relevante eksempler, med profesjonsforståelse og kritisk praksisrefleksjon. Sjangre:
  RED-DRØFT-EKS. Prioritet: perfekt.
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2).
- **Begrepskontrakt (flashcard-kilde):** **grunnleggende ferdighet** (LK20-begrepet, ikke
  «basisferdighet»); de fem: **muntlige ferdigheter**, **å kunne lese**, **å kunne skrive**,
  **å kunne regne**, **digitale ferdigheter** — hver med et kroppsøvingseksempel; **tydeliggjøring**
  av ferdighetene i læreplanen; **integrering** i faglig aktivitet. Forankring: Hallås (2009),
  *Kroppsøvingsfaget og de grunnleggende ferdighetene* `(verifiser)`; LK20/UDIR `(verifiser)`.
- **Drøftingsakser:** naturlig integrert vs. påklistret ferdighetsarbeid; ferdighet som verktøy
  for læring vs. som eget mål; regning/skriving i et praktisk fag (troverdig eller kunstig?).
- **Case-forslag:** vis hvordan «å kunne regne» eller «å lese» integreres meningsfullt i en
  konkret kroppsøvingsaktivitet; drøft en ferdighet som virker vanskelig å plassere i faget.
- **Typiske feil:** #4 (påklistrede eksempler), #3, #1, #5.
- **Kvote:** 28 quiz / 30 flashcards.

#### Kapittel 4.2: Digitale verktøy og digital ferdighet i kroppsøving
**id:** `nih-ppu406-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-ppu406-4-1`

- **Kapitteltype:** temakapittel (perfekt/kunne).
- **Description:** Digitale verktøys muligheter og begrensninger i kroppsøving (video/analyse,
  pulsmåling, apper) og den digitale grunnleggende ferdigheten — et deltema som er testet i seg
  selv og som styrker A-bredden.
- **Eksamensbelegg:** 2/6 sett (~30 %): V2024 (digital ferdighet), H2024 (digitale verktøy i
  øving); pluss del av «alle fem» (V2026). Sjangre: RED-DRØFT-EKS. Prioritet: kunne (deltema av
  perfekt-del).
- **Forkunnskaper:** [kap. 4.1](/bok/nih-ppu406/nih-ppu406-4-1),
  [kap. 2.3](/bok/nih-ppu406/nih-ppu406-2-3).
- **Begrepskontrakt (flashcard-kilde):** **digital ferdighet** (LK20); **digitale verktøy** i
  kroppsøving (videoanalyse, pulsklokke, aktivitetsapper); **muligheter** (tilbakemelding,
  motivasjon, differensiering) vs. **begrensninger** (skjermtid, personvern, avsporing fra
  bevegelse); **personvern/GDPR** ved kroppsdata `(verifiser)`. Forankring: Hallås (2009)
  `(verifiser)`; antologien `(verifiser)`.
- **Drøftingsakser:** teknologi som støtte for bevegelse vs. som konkurrent til den; motiverende
  vs. forstyrrende; datainnsamling vs. elevens personvern.
- **Case-forslag:** vurder videoanalyse som verktøy for øving; drøft pulsmåling i lys av
  motivasjon og personvern.
- **Typiske feil:** #4, #1, #5 (glemmer at faget er kroppslig, ikke skjermbasert).
- **Kvote:** 26 quiz / 28 flashcards.

**Prøve-kvote Del 4:** 4 temaprøver (4.A de fem ferdighetene («velg én» + presise definisjoner)
· 4.B integrering av alle fem i kroppsøving · 4.C digitale verktøy — muligheter/begrensninger ·
4.D samlet ferdighetsoppgave på eksamensnivå). Prøve-id: `nih-ppu406-4-prove`
(chapterNumber `4.P`).

### Del 5 — Læreplan, kompetansebegrepet og didaktisk planlegging *(prioritet: KUNNE — ~45 %/~30 %)*

#### Kapittel 5.1: Kompetansebegrepet, kjerneelementene og styringsdokumentene
**id:** `nih-ppu406-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Hva «kompetanse» betyr i en kompetansebasert læreplan (LK20), de tre
  kjerneelementene i kroppsøving, og styringsdokumentene (LK20/overordnet del, opplæringsloven)
  som rammer skolens virksomhet — referanserammen boka bruker gjennomgående.
- **Eksamensbelegg:** Eksplisitt i V2026 (kompetansebegrepet, ~45 %); implisitt referanseramme i
  alle sett. Kjerneelementene eksplisitt i V2025 (~25 %). Sjangre: RED-DRØFT-EKS, PLAN.
  Prioritet: kunne (men høy A-bredde-verdi). Utfordringene ved å anvende kompetansebegrepet i
  kroppsøving er en typisk feilkilde (#7).
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2).
- **Begrepskontrakt (flashcard-kilde):** **kompetanse** i LK20 (å tilegne seg og anvende
  kunnskaper og ferdigheter); **kompetansemål**; **de tre kjerneelementene** — «Bevegelse og
  kroppslig læring», «Deltakelse og samspill i bevegelsesaktiviteter», «Uteaktiviteter og
  naturferdsel» `(verifiser mot UDIR)`; **overordnet del/verdigrunnlag**; **styringsdokumenter**
  (LK20, opplæringsloven `(verifiser — fornyet 2024)`). Forankring: antologien kap. 8
  `(verifiser)`; LK20/UDIR `(verifiser)`.
- **Drøftingsakser:** kompetanse som helhet vs. målbare delferdigheter; utfordringen ved
  kompetanse i et praktisk fag (#7); kjerneelementer vs. kompetansemål (hva styrer hva).
- **Case-forslag:** forklar hva «kompetanse» betyr for et konkret kompetansemål i kroppsøving og
  hvilke utfordringer det gir; vis hvordan de tre kjerneelementene henger sammen i én aktivitet.
- **Typiske feil:** #7 (feiltolker kompetansebegrepet), #3, #1.
- **Kvote:** 26 quiz / 28 flashcards.

#### Kapittel 5.2: Didaktisk planlegging fra kompetansemål
**id:** `nih-ppu406-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-5-1`

- **Kapitteltype:** temakapittel + sjangertrening (PLAN) (kunne).
- **Description:** Fremgangsmåten for å lage et undervisningsopplegg ut fra et gitt kompetansemål
  — den didaktiske relasjonstenkningen (mål, innhold, forutsetninger, rammer, vurdering) og
  hvordan man beskriver TENKNINGEN, ikke bare aktivitetene (V2026-kravet).
- **Eksamensbelegg:** Tydeligst i V2026 (1b: «viktigere å beskrive hvordan du tenker enn
  innholdet», ~30 %); berøres av øvings-/tilretteleggingsoppgaver. Sjanger: PLAN. Prioritet:
  kunne (sjangertrening). Hovedfellen er #9 (beskriver aktiviteter, ikke fremgangsmåte).
- **Forkunnskaper:** [kap. 5.1](/bok/nih-ppu406/nih-ppu406-5-1),
  [kap. 3.1](/bok/nih-ppu406/nih-ppu406-3-1) (vurdering inngår i planen),
  [kap. 2.3](/bok/nih-ppu406/nih-ppu406-2-3).
- **Begrepskontrakt (flashcard-kilde):** **den didaktiske relasjonsmodellen** (mål, innhold,
  elev-/lærerforutsetninger, rammefaktorer, vurdering — komponentene henger sammen);
  **læringsmål avledet av kompetansemål**; **valg av formativ og summativ vurdering** i planen;
  **fremgangsmåte vs. aktivitetsbeskrivelse** (#9). Forankring: antologiens
  læreplanarbeid-/planleggingskapitler (kap. 8–9) `(verifiser)`.
- **Drøftingsakser:** mål-styrt vs. aktivitets-styrt planlegging; standardopplegg vs. tilpasning;
  hvor mye vurdering skal planlegges inn på forhånd.
- **Case-forslag:** vis fremgangsmåten (ikke aktivitetslista) for å planlegge en time fra ett
  kompetansemål, inkl. valg av formativ og summativ vurdering.
- **Typiske feil:** #9 (innholdsbeskrivelse i stedet for fremgangsmåte — kjernefellen), #3, #6.
- **Kvote:** 24 quiz / 26 flashcards.

**Prøve-kvote Del 5:** 4 temaprøver (5.A kompetansebegrepet + utfordringene i kroppsøving · 5.B
de tre kjerneelementene + styringsdokumentene · 5.C didaktisk planlegging fra kompetansemål
(fremgangsmåte, ikke aktivitet) · 5.D samlet læreplan-/planleggingsoppgave på eksamensnivå).
Prøve-id: `nih-ppu406-5-prove` (chapterNumber `5.P`).

### Del 6 — Fagets egenart og A-breddetemaene *(prioritet: KJENNE/KUNNE — støtte for A-bredde)*

#### Kapittel 6.1: Kroppsøvingsfagets egenart og diskurser
**id:** `nih-ppu406-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-2-2`

- **Kapitteltype:** temakapittel (kunne — gjennomgående avrundingsrefleksjon).
- **Description:** Kritiske perspektiver på hva kroppsøving er og bør være: fagets diskurser,
  «dobbelthet» og spriket mellom fagets intensjoner (ideologi) og praksis (virkelighet) —
  avrundingsrefleksjonen som løfter nesten hver oppgave til A (#5-motgift).
- **Eksamensbelegg:** Sjelden egen oppgave, men forventet avrundingsrefleksjon i de fleste
  (gjennomgående støtte-tema). Sjangre: inngår i RED-DRØFT-EKS-avrundingen. Prioritet: kunne
  (A-bredde/egenart).
- **Forkunnskaper:** [kap. 2.2](/bok/nih-ppu406/nih-ppu406-2-2),
  [kap. 1.1](/bok/nih-ppu406/nih-ppu406-1-1).
- **Begrepskontrakt (flashcard-kilde):** **fagets egenart** (praktisk-kroppslig, elevene viser/
  praktiserer/øver); **fagets diskurser** (helse, prestasjon, danning, bevegelsesglede);
  **ideologi vs. virkelighet** (fagets dobbelthet); **kritisk fagforståelse**. Forankring: Sæle
  (2017), *Mind the gap!* `(verifiser)`; Borgen mfl. (2017), *Kroppsøving mer enn fysisk
  aktivitet* `(verifiser)`.
- **Drøftingsakser:** helse-/prestasjonsdiskursen vs. danningsdiskursen; fagets idealer vs.
  gymsal-hverdagen; hvem faget passer for (og ikke).
- **Case-forslag:** drøft et konkret sprik mellom fagets intensjon og praksis; bruk
  egenart-refleksjonen til å avrunde en klasseledelses- eller vurderingsoppgave.
- **Typiske feil:** #5 (generisk behandling uten egenart), #2, #1.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 6.2: Egne bevegelsesferdigheter i profesjonsperspektiv
**id:** `nih-ppu406-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-ppu406-2-1`

- **Kapitteltype:** temakapittel (kjenne/kunne).
- **Description:** Betydningen av lærerens egne bevegelsesferdigheter for profesjonsutøvelsen —
  hvordan egen kroppslig kompetanse påvirker undervisning, demonstrasjon, vurdering og
  troverdighet, på tvers av kjerneelementene.
- **Eksamensbelegg:** 2/6 sett (~30 %): V2025 (betydningen av egne ferdigheter på tvers av
  kjerneelementene). Sjangre: RED-DRØFT-EKS, SELVREFLEKS. Prioritet: kjenne/kunne (A-bredde).
- **Forkunnskaper:** [kap. 2.1](/bok/nih-ppu406/nih-ppu406-2-1),
  [kap. 5.1](/bok/nih-ppu406/nih-ppu406-5-1).
- **Begrepskontrakt (flashcard-kilde):** **lærerens egne bevegelsesferdigheter**; **demonstrasjon/
  modellering** som didaktisk verktøy; **kroppslig troverdighet/autoritet**; forholdet **egen
  ferdighet vs. didaktisk kompetanse** (ikke det samme). Forankring: antologiens profesjons-
  kapitler `(verifiser)`; Ommundsen (2016) `(verifiser)`.
- **Drøftingsakser:** egen ferdighet nødvendig vs. didaktisk kompetanse viktigere; demonstrasjon
  vs. elevutforsking; ekspertlærer vs. tilrettelegger.
- **Case-forslag:** drøft hvordan egne ferdigheter (eller mangel på dem) påvirker undervisning i
  en aktivitet du ikke behersker godt.
- **Typiske feil:** #2 (synsing om egne ferdigheter uten forankring), #4, #1.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 6.3: Skole–hjem-samarbeid, inkludering og laget rundt eleven
**id:** `nih-ppu406-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-ppu406-1-2`

- **Kapitteltype:** temakapittel (kjenne).
- **Description:** Foreldresamarbeid, likeverdig og inkluderende opplæring, og det tverrfaglige
  «laget rundt eleven» — løftet inn i emnets læringsutbytter fra 2025, testet i H2024.
- **Eksamensbelegg:** 1/6 sett (~20 %): H2024 (foreldresamarbeid og inkluderende opplæring); løftet
  inn i læringsutbyttene fra 2025. Sjangre: RED-DRØFT-EKS, RÅDGIV. Prioritet: kjenne (A-bredde).
- **Forkunnskaper:** [kap. 1.2](/bok/nih-ppu406/nih-ppu406-1-2),
  [kap. 2.3](/bok/nih-ppu406/nih-ppu406-2-3).
- **Begrepskontrakt (flashcard-kilde):** **skole–hjem-samarbeid**; **inkluderende opplæring**;
  **likeverdig tilbud**; **laget rundt eleven** (tverrfaglig lag); **tilpasset opplæring** i
  samarbeidsperspektiv. Forankring: Berg (2021), *Kroppsøving — med rom for alle* `(verifiser)`;
  Johannessen & Skotheim (2018), *Et lag rundt eleven og læreren* `(verifiser)`.
- **Drøftingsakser:** foreldreinvolvering vs. lærerautonomi; inkludering vs. prestasjonsnivå;
  når og hvordan involvere laget rundt eleven.
- **Case-forslag:** råd i en situasjon der en elev vegrer seg og foreldrene er bekymret; drøft
  inkluderende tilrettelegging for en elev med funksjonsnedsettelse.
- **Typiske feil:** #4, #1, #3.
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 6:** 4 temaprøver (6.A fagets egenart/diskurser + ideologi vs. virkelighet ·
6.B egne bevegelsesferdigheter i profesjonsperspektiv · 6.C skole–hjem/inkludering/laget rundt
eleven · 6.D samlet A-bredde-oppgave som binder et støtte-tema til et bærebjelketema).
Prøve-id: `nih-ppu406-6-prove` (chapterNumber `6.P`).

### Del 7 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 7.1: De fem sjangrene — oppskrifter og selvretting
**id:** `nih-ppu406-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-0-2`

- **Kapitteltype:** sjangerkapittel (meta).
- **Description:** Trinn-for-trinn-oppskrift for hver av de fem sjangrene (RED-DRØFT-EKS,
  SELVREFLEKS, CASE, RÅDGIV, PLAN) med tidsbudsjett, pluss den binære selvrettingsrubrikken for
  drøfting og «hvem eier hva»-kortet.
- **Eksamensbelegg:** Metakapittel som samler sjangerhåndverket fra alle temadelene. Prioritet:
  perfekt (meta).
- **Forkunnskaper:** [kap. 0.2](/bok/nih-ppu406/nih-ppu406-0-2) og temadelene 1–6.
- **Innholdskontrakt:** én `text`-oppskrift per sjanger (disponering + tidsbudsjett + vanligste
  feil); **binær selvrettingsrubrikk** (0/1, jf. DNA-drøfting): ☐ standpunkt tidlig? ☐ minst én
  eksplisitt kobling («som vist i (a)»)? ☐ innvending fra navngitt pensumtenker? ☐ svart på
  innvendingen? ☐ forankret i LK20 der relevant? ☐ analysert (ikke bare illustrerende)
  praksiseksempel? ☐ refleksjon over fagets egenart? ☐ alle delspørsmål besvart? **«Hvem eier
  hva»-kort** (`collapsible`): begrep → tenker/verk → poeng, over bokas gjennomgående
  forfatterkoblinger `(verifiser)`. **Regime-strategikort:** tidsbudsjett for regime 1 (to
  likt vektede) og regime 2 (oppgave 1 = 2/3).
- **Oppgavesjangre:** 4–6 sjangergjenkjennings- og disposisjonsoppgaver (løsning =
  disposisjon/momentliste + rubrikkhenvisning).
- **Typiske feil:** #8 (tidsbudsjett i regime 2), #10, #1.
- **Kvote:** 18 quiz / 12 flashcards.

#### Kapittel 7.2: Modellbesvarelse — klasseledelse (RED-DRØFT-EKS + SELVREFLEKS)
**id:** `nih-ppu406-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-1-3`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet klasseledelsesoppgave med gjennomskrevne besvarelser på A-, C- og
  B-nivå + sensorblikk — viser gapet fra korrekt gjengivelse til forankret, kritisk,
  praksisanalytisk drøfting.
- **Eksamensbelegg:** Klasseledelse er ~100 %-gjengangeren. Sjangre: RED-DRØFT-EKS, SELVREFLEKS.
  Prioritet: perfekt (modell).
- **Forkunnskaper:** [kap. 1.1](/bok/nih-ppu406/nih-ppu406-1-1)–[kap. 1.3](/bok/nih-ppu406/nih-ppu406-1-3),
  [kap. 7.1](/bok/nih-ppu406/nih-ppu406-7-1).
- **Innholdskontrakt:** nyskrevet oppgave (regime 1 essayvariant); `collapsible` **A-besvarelse**
  (full tekst med margnotater om forankring/motargument/egenart-refleksjon, pausepunkt-markører)
  — denne konkluderer SKARPT (jf. README «A-konklusjonsvariasjon»); `collapsible`
  **C-besvarelse** (korrekt men flat, ærlig merket, notater om gapet); `collapsible`
  **B-besvarelse** (ekte studentspråk, litt rotete men god, de 2–3 grepene som skiller fra A);
  `tip` **Sensorblikket** (momentliste + vektlegging). Selvdiagnose-sjekkliste (☐) etter
  sensorblikket.
- **Typiske feil:** #4, #5, #1 (illustrert i C-besvarelsen).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 7.3: Modellbesvarelse — vurdering (CASE, regime 2 oppgave 1)
**id:** `nih-ppu406-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-ppu406-3-3`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet case-oppgave (2/3-vektet oppgave 1 med nyskrevne debattinnlegg om
  karakter/vurdering) med a/b/c-deler og gjennomskrevne A-/C-/B-besvarelser — trener den tyngst
  vektede sjangeren i dagens eksamensform.
- **Eksamensbelegg:** Vurdering ~55 % stigende; CASE = den 2/3-vektede oppgave 1 i regime 2.
  Sjanger: CASE. Prioritet: perfekt (dagens topp-vektede sjanger).
- **Forkunnskaper:** [kap. 3.1](/bok/nih-ppu406/nih-ppu406-3-1)–[kap. 3.3](/bok/nih-ppu406/nih-ppu406-3-3),
  [kap. 7.1](/bok/nih-ppu406/nih-ppu406-7-1).
- **Innholdskontrakt:** nyskrevet vedlegg (to–fire korte, motstridende debattinnlegg,
  parafraserte, med sitatlager-bro-forklaring) + flerpunkts oppgave 1 (a/b/c); `collapsible`
  **A-besvarelse** (identifiserer posisjonene, anvender vurderingsbegreper, foreslår alternativ,
  svarer fiktiv motpart; margnotater; behandler ALLE deler — #10-motgift); `collapsible`
  **C-besvarelse**; `collapsible` **B-besvarelse**; `tip` **Sensorblikket** (2/3-vektingen +
  lav/middels/høy-rubrikken). Vippe-case: fasiten skriver UT begge forsvarlige landinger og
  merker «(omstridt — begge forsvarlige)». Selvdiagnose-sjekkliste (☐).
- **Typiske feil:** #6, #8, #10, #2.
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 7.4: Modellbesvarelse — øving og grunnleggende ferdigheter (RED-DRØFT-EKS)
**id:** `nih-ppu406-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-ppu406-2-3`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet oppgave som kobler øving/tilrettelegging og en grunnleggende
  ferdighet, med A-/C-/B-besvarelser — trener de to bærebjelketemaene (~95 % og ~75 %) i
  kombinasjon slik regime 2-oppgaver ofte gjør.
- **Eksamensbelegg:** Øving ~95 %, grunnleggende ferdigheter ~75 %. Sjangre: RED-DRØFT-EKS,
  RÅDGIV. Prioritet: perfekt (modell).
- **Forkunnskaper:** [kap. 2.1](/bok/nih-ppu406/nih-ppu406-2-1)–[kap. 2.3](/bok/nih-ppu406/nih-ppu406-2-3),
  [kap. 4.1](/bok/nih-ppu406/nih-ppu406-4-1), [kap. 7.1](/bok/nih-ppu406/nih-ppu406-7-1).
- **Innholdskontrakt:** nyskrevet oppgave; `collapsible` **A-besvarelse** (selvstendige
  tilretteleggingseksempler + faguttrykk + egenart-refleksjon, margnotater); `collapsible`
  **C-besvarelse**; `collapsible` **B-besvarelse**; `tip` **Sensorblikket** (lav/høy-rubrikken
  for øving: relevant tilrettelegging = A-markøren). Selvdiagnose-sjekkliste (☐).
- **Typiske feil:** #4, #1, #5.
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 7.5: Generalprøve — to komplette øvingseksamener (begge regimer)
**id:** `nih-ppu406-7-5` · **number:** 7.5 · **estimatedMinutes:** 60 · **prerequisites:** `nih-ppu406-7-1`

- **Kapitteltype:** øvingseksamen/generalprøve (meta).
- **Description:** To komplette nyskrevne øvingseksamener — én i regime 1 («velg to av tre»
  brede essay) og én i regime 2 («svar på alt», oppgave 1 = 2/3 med case — begge på 4-timers
  nivå), med momentliste-fasit og «kald bank» av uvante vinklinger.
- **Eksamensbelegg:** Metakapittel som simulerer hele eksamen i begge former. Prioritet: perfekt
  (meta). Sier eksplisitt at kildeforbeholdet gjelder (regime 2 bare 2 sett).
- **Forkunnskaper:** hele boka; særlig [kap. 7.1](/bok/nih-ppu406/nih-ppu406-7-1).
- **Innholdskontrakt:** to fulle sett (regime 1: tre oppgaver, velg to; regime 2: oppgave 1
  (2/3, case) + oppgave 2 + oppgave 3), hver med momentliste-fasit (IKKE fullt essay) og
  rubrikkhenvisning; **kald bank** (8–10 oppgaver med uvante vinklinger/kombinasjoner UTEN hint,
  fasit = momentliste, tydelig merket «kald»); deklareres som «2 øvingseksamener à ~4 t — kan
  trygt deles: én per økt, øv minst én for hånd på tid». Selvdiagnose-sjekkliste (☐) per sett.
- **Typiske feil:** #8, #10, #1, #4 (samlet, på tvers av settene).
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 7:** eksamenstreningen ER prøvestoffet (modellbesvarelser 7.2–7.4 +
generalprøve 7.5 med to komplette øvingseksamener + kald bank). Ingen egen `-prove`-fil for
Del 7.

---

## 4. Kvoter per kapittel (AUTORITATIV — summeringskontroll)

| Kap. | Tittel (kort) | Quiz | Flashcards |
|---|---|---|---|
| 0.1 | Eksamenskartet | 14 | 14 |
| 0.2 | Essayhåndverket | 14 | 14 |
| 1.1 | Klasseledelse — generisk/fagspesifikk | 26 | 28 |
| 1.2 | Relasjon, struktur, læringsmiljø | 26 | 28 |
| 1.3 | Selvrefleksjon (klasseleder) | 24 | 26 |
| 2.1 | Øving som kompetanse + øvingsmodellen | 26 | 28 |
| 2.2 | Kroppslig læring/danning | 26 | 28 |
| 2.3 | Tilrettelegging av øving | 24 | 26 |
| 3.1 | Vurderingsformene | 26 | 28 |
| 3.2 | Vurdering i bevegelseslæring | 26 | 28 |
| 3.3 | Karaktersettingsdebatt (case) | 24 | 26 |
| 4.1 | De fem grunnleggende ferdighetene | 28 | 30 |
| 4.2 | Digitale verktøy/ferdighet | 26 | 28 |
| 5.1 | Kompetansebegrep + kjerneelementer | 26 | 28 |
| 5.2 | Didaktisk planlegging | 24 | 26 |
| 6.1 | Fagets egenart/diskurser | 24 | 24 |
| 6.2 | Egne bevegelsesferdigheter | 24 | 24 |
| 6.3 | Skole–hjem/inkludering | 24 | 24 |
| 7.1 | De fem sjangrene | 18 | 12 |
| 7.2 | Modell — klasseledelse | 14 | 12 |
| 7.3 | Modell — vurdering (case) | 12 | 12 |
| 7.4 | Modell — øving/ferdigheter | 12 | 12 |
| 7.5 | Generalprøve (2 øvingseks.) | 12 | 12 |
| **Sum** | **23 kapitler** | **506** | **518** |

Delsummer (kontrollregnet):
- Del 0: quiz 14+14 = **28**; fc 14+14 = **28**
- Del 1: quiz 26+26+24 = **76**; fc 28+28+26 = **82**
- Del 2: quiz 26+26+24 = **76**; fc 28+28+26 = **82**
- Del 3: quiz 26+26+24 = **76**; fc 28+28+26 = **82**
- Del 4: quiz 28+26 = **54**; fc 30+28 = **58**
- Del 5: quiz 26+24 = **50**; fc 28+26 = **54**
- Del 6: quiz 24+24+24 = **72**; fc 24+24+24 = **72**
- Del 7: quiz 18+14+12+12+12 = **68**; fc 12+12+12+12+12 = **60**
- **Totalt: quiz 28+76+76+76+54+50+72+68 = 506 · fc 28+82+82+82+58+54+72+60 = 518**

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

**Quiz totalt: 506 · Flashcards totalt: 518** (begge over gulvet ≥500).

| Del | Tema | Kapitler | Quiz | Flashcards |
|---|---|---|---|---|
| 0 — Eksamenskart + essayhåndverk | meta | 0.1–0.2 | 28 | 28 |
| 1 — Klasseledelse | ~100 % | 1.1–1.3 | 76 | 82 |
| 2 — Øving og kroppslig læring | ~95 % | 2.1–2.3 | 76 | 82 |
| 3 — Vurdering | ~55 % (stigende) | 3.1–3.3 | 76 | 82 |
| 4 — Grunnleggende ferdigheter | ~75 % | 4.1–4.2 | 54 | 58 |
| 5 — Læreplan/kompetanse/planlegging | ~45 %/~30 % | 5.1–5.2 | 50 | 54 |
| 6 — Fagets egenart + A-bredde | støtte | 6.1–6.3 | 72 | 72 |
| 7 — Eksamenstrening | meta | 7.1–7.5 | 68 | 60 |
| **Sum** | | **23 kap** | **506** | **518** |

**Prøvekvote:** 24 temaprøver (4 per temadel Del 1–6) + 2 komplette øvingseksamener (i kap.
7.5). Prøve-id: `nih-ppu406-<del>-prove` (chapterNumber `<del>.P`), for Del 1–6. Del 0 og Del 7
har ingen egen `-prove`-fil (håndverket/eksamen prøves gjennom modellbesvarelsene og
generalprøven).

**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** PPU406 er et **begreps- og
forankringstungt drøftingsfag** der eksamen er uten hjelpemidler — hvert begrep må sitte
utenat KOBLET til navngitt pensum og LK20. Derfor ligger **flashcards (518) over quiz (506)**:
begrep ↔ forfatter/verk-koblinger, læreplanfakta (de fem grunnleggende ferdighetene, de tre
kjerneelementene, kompetansemålsverbene) og vurderingsbegreper er flashcard-gull. Quiz drilles
på definisjonspresisjon og nabobegrep-skiller (formativ/summativ, for/av læring, generisk/
fagspesifikk ledelse, aktivitet/øving, kjerneelement/kompetansemål) — kortsvar/begrep, ikke
klassisk flervalg, siden faget er drøftingsbasert. De **fire bærebjelketemaene** (Del 1–3 à 76
quiz, Del 4 med 54) ligger tyngst; A-breddetemaene (Del 6) og eksamenstreningen (Del 7) holder
lavere tetthet — Del 7 fordi verdien der er hele-oppgave-gjennomkjøring under tidspress, ikke
enkeltfakta. Alle kapittel-kvotene summerer eksakt til totalene (kontrollregnet i §4 per del).

---

## 6. Opphavsrett og kildehåndtering

- **Ingen ordrett gjengivelse.** Ingen oppgavetekster, sensorformuleringer, sitater eller
  vedleggstekster fra NIH-arkivet gjengis ordrett. Alle oppgaver, case, debattinnlegg,
  disposisjoner og modellbesvarelser i boka er NYSKREVNE i samme sjanger — endre tema, parter,
  formuleringer og eksempler.
- **Pensumlitteratur refereres, aldri siteres i lengde.** Forfatter/verk/begrep tilskrives
  reelle bidrag fra sensorveiledningenes pensumlister (§ Begrepskontrakt i hvert kapittel). Alle
  forfatterkoblinger er merket `(verifiser)` fordi de er utgave-/år-sensitive (pensum skiftet ved
  emneansvarsskiftet 2025) — fase 6 verifiserer mot gjeldende NIH-emneplan. INGEN oppdiktede
  kilder.
- **Læreplan- og lovhenvisninger merkes `(verifiser)`:** LK20-kompetansemål og kjerneelementer
  mot UDIRs gjeldende læreplan for kroppsøving; opplæringslov-/forskriftshenvisninger mot Lovdata
  (opplæringsloven ble fornyet 2024 — paragrafnumre/ordlyd kan avvike fra eldre pensum).
- **Frekvenstall = telte belegg.** Frekvensene («6/6 sett», «~55 %») er destillert fra
  EKSAMENSANALYSE §2 og skal formidles MED kildenote og forbehold (regime 2 bare 2 sett) — aldri
  som garanti for eksamensutfall. Forfatteren finner ALDRI på frekvenstall.

---

## 7. Byggesjekkliste for forfatter-agenten (fase 6-port)

- [ ] **Læringsløkke:** hvert temakapittel (Del 1–6) har `content[]` strukturert som
      Teori→Eksempel→Oppgave-løkker per begrep, `exercise` INLINE rett etter teorien/eksempelet
      det trener; ingen oppgave krever udekket stoff (full oppgavedekning kontrollert).
- [ ] **Kapittel-DNA:** hvert temakapittel har Eksamensvinkel-`tip` (frekvens/vekt fra dette
      skjelettet), Forkunnskaper-`text` (kryssbok-lenker kun til eksisterende PPU406-kapitler;
      NIH-klynge kun i prosa), Kjernebegreper-`definition` (flashcard-kilde, toppnivå med title,
      MED navngitt forankring), Posisjoner/spenninger-`text`, ≥2 Anvendelse-`example`, Typiske
      feil-`warning` (feilkodene glosset ved første bruk i HVERT kapittel), 5–8 `exercise` med
      `hints`, Pensumkart-`collapsible` (med begrepsbank-notis).
- [ ] **Del 0-pakken:** orienteringsboks (skala + sjangerkoder fullt utskrevet + feilregister),
      «Lite tid?»-boks (LESEtid, ×1,5 for håndskrift), deltidsrute, «lese mye, skrive lite»-boks,
      kildenote (6 sett, regimeskiftet), sjangeroversiktskort på én side.
- [ ] **Sjangerkoder/karakterspråk aldri kald:** RED-DRØFT-EKS/SELVREFLEKS/CASE/RÅDGIV/PLAN og
      #1–#10 skrives fullt ut ved første bruk, aldri kald i competenceGoals eller første tekstboks;
      A-markør/C-stoff/E-terskel forklart i Del 0. C rammet som god/vanlig karakter; «Gapet til
      A» = oppgraderingsmeny; «perfekt» som trussel forbudt.
- [ ] **Modellbesvarelser ÆRLIGE:** A-boks ER en A, C-boks ER en C (tittel + margnotat stemmer),
      minst én autentisk B-/midtnivå-besvarelse; minst én A konkluderer SKARPT; ingen meta-fasit
      («en A-besvarelse ville drøftet …» — skriv drøftelsen UT). Binær selvrettingsrubrikk i 7.1;
      selvdiagnose-sjekkliste (☐) etter hver modell/prøvefasit.
- [ ] **Case-/sitatlager-bro:** case-materialer er NYSKREVNE parafraser; ved første forekomst
      forklart hvordan et ekte vedlegg skiller seg mens grepene er de samme; tolkning bor kun i
      fasiten, aldri under materialet. Vippe-case med begge landinger utskrevet, merket «(omstridt
      — begge forsvarlige)».
- [ ] **Erfarings-bro:** `tip`-boks i 0.2/1.3/2.1 viser konvertering av egen erfaring til
      pensumforankret argument (begrep → illustrasjon → aksen).
- [ ] **Distraktorer/fasit:** flervalg i statiske prøve-collapsibles har stokkede fasit-bokstaver
      (aldri «alle a»); distraktorer straffer aldri grundig lesing; nær-sanne distraktorer får
      fasit-kommentar. Quiz-system: options[0] riktig i staging (runtime stokker).
- [ ] **Kvotesum:** quiz ≥506 og flashcards ≥518 fordelt per kapittel som i §4 (hardt minimum
      ≥500/≥500); 24 temaprøver (4 per del Del 1–6) + 2 øvingseksamener (7.5); alle kvoter
      summerer eksakt (kontrollregnet i §4).
- [ ] **`(verifiser)`-markeringer:** grep `-i verifiser` — alle pensumkoblinger, kompetansemål-
      numre og opplæringslov-/forskriftshenvisninger fagfellesjekkes i fase 6 mot gjeldende
      NIH-emneplan, UDIR og Lovdata. INGEN oppdiktede kilder eller læreplandetaljer.
- [ ] **Kildeforbehold + AKTIV-status synlig:** Del 0 (0.1) og generalprøven (7.5) sier
      eksplisitt at frekvensene bygger på 6 sett (regime 2 bare 2), at nye sett kan endre bildet,
      og at emnet er aktivt (Standal, høst 2025).
- [ ] **Leserkrav:** hverdagsanker før begrepsapparatet i de tunge temakapitlene; hver oppgave
      sjangermerket; øktmerking der estimatedMinutes > 45; klikkbare kapittelreferanser kun til
      eksisterende kapitler.
- [ ] **Plattform-wiring:** metadata i `textbook-courses-*.ts` (id/number del-basert/title/
      description/estimatedMinutes/topics/competenceGoals (Skolesagas egne, ikke NIHs offisielle)/
      prerequisites), sectionNames (§2), registry, quiz-merge, `institusjoner.ts` under Norges
      idrettshøgskole («PPU406 Kroppsøvingslæreren, skolen og faget»); hoyskole-disclaimer treffer
      (ikke jus/helse — generisk uavhengighets-deklarasjon holder).
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng). ALDRI meld ferdig uten dette.

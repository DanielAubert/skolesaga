# Bokskjelett: SOSANT1090 Antropologiens historie — eksamensrettet lærebok (UiO)

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (8 oppgavesett + 7 sensorveiledninger, V2020–V2026 inkl.
> utsatte). Alle oppgaver, case, faghistoriske gjenfortellinger og «sitatlignende»
> passasjer i boka skal være NYSKREVNE (se del 6). Pensumlitteratur refereres
> (forfatter/verk/begrep), aldri siteres i lengde.
>
> ⚠️ **Emnet er en TEORI-/FAGHISTORIEKURS, ikke et metodefag.** Offisielt navn:
> «Antropologiens historie». Boka eier **teoritidslinjen** (evolusjonisme →
> dekolonisering/antropocen) og **retningskomparasjonen**; feltarbeid/metode
> behandles KUN som faghistoriske objekter (Malinowskis feltarbeidsrevolusjon;
> representasjonskrisens metodekritikk), aldri som «hvordan gjøre feltarbeid».

---

## 1. Bokens identitet

- **Kurs-id:** `sosant1090`
- **Tittel:** *SOSANT1090 Antropologiens historie — eksamensrettet lærebok (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon:** Universitetet i Oslo (Institutt for sosialantropologi, SAI).
  Registreres i `institusjoner.ts` under UiO som «SOSANT1090 Antropologiens historie».
- **Arketype:** drøfting (`DNA-drofting.md`), med TO dokumenterte utvidelser:
  1. **Kronologisk retnings-struktur i stedet for tematisk** — kapittelrekken er en
     teoritidslinje (én del per epoke/retningsklynge), ikke temadeler. Dette er
     analysens uttrykkelige anbefaling og skiller boka fra søsterboka SOSANT1000.
  2. **Egen del med tverrgående AKSE-KAPITLER** (Del 9) — de komparative rammene
     sensor eksplisitt etterspør (synkron/diakron, aktør/struktur, idealisme/
     materialisme, holisme/«oss–dem»). Disse er selve operasjonaliseringen av
     sensornøkkelen «sett retninger i relasjon» og finnes ikke i DNA-normen.
- **Kapittelantall:** 36 (Del 0: 3 · teoritidslinje Del 1–8: 21 · akse-kapitler
  Del 9: 4 · eksamenstrening Del 10: 8)
- **Estimert totaltid:** ~1 895 minutter (~32 timer) fordelt per kapittel under
- **Quiz totalt:** 696 (krav ≥500) · **Flashcards totalt:** 708 (sikt 600–700,
  begrunnet under — svært begrepsrikt fag)

**Pitch:** SOSANT1090-eksamen har fra V2023 hatt én fast form: **5-timers digital
skoleeksamen (Inspera) uten noen hjelpemidler** (heller ikke ordbok), delt i
**Del 1 kortsvar (svar på 2 av 5, teller 25 %)** og **Del 2 langsvar (svar på 1 av
3, drøftende faghistorisk essay, teller 75 %)**. Karakteren settes gradert **A–F**.
**Langsvaret bærer eksamen** (75 % + veiledningenes eksplisitte utsagn om at det er
her de beste besvarelsene skiller seg ut) — boka vekter derfor langsvarstreningen
tilsvarende tungt. Faget har ett ubønnhørlig signaturkrav, gjentatt ordrett hvert
år i sensorveiledningene: **«Oppgaver som kun presenterer ulike teorier uten å
diskutere dem opp mot hverandre vil normalt sett ligge i karakterspekteret C–D.»**
A/B krever at retninger og tekster **settes i relasjon** (sammenlignes, ses i lys
av hverandre, kobles) OG at de **plasseres faghistorisk** («sett i sammenheng med
den tids tendenser»). Boka er bygget baklengs fra dette: hvert teorikapittel har
en **begrepskontrakt** (teoretiker↔verk↔posisjon), et sett **komparasjonsakser**
mot nabo-retninger, en **faghistorisk kontekst-**blokk, og typiske feil fra
veiledningene. Del 9 gir ferdige komparative essaydisposisjoner langs sensorens
akser. Eksamenstreningen driller teoretiker-kortsvaret, det komparative langsvaret
og monografi-langsvaret — med A-, C- og E-besvarelser av samme oppgave, der
forskjellen ligger nøyaktig i **drøfting vs. redegjørelse** (C→A-løftet) og
**faghistorisk plassering**.

**Kalibreringsregler (ufravikelige):**
1. **Relasjon slår redegjørelse.** Ren presentasjon av teorier side om side gir tak
   på C–D uansett øvrig kvalitet. A/B krever at minst to navngitte retninger/tekster
   settes i relasjon. Denne logikken innføres i Del 0 og gjentas i hver langsvar-
   fasit — den er fagets viktigste enkeltdrill.
2. **Faghistorisk plassering er et selvstendig vurderingskriterium.** Å definere et
   begrep korrekt uten å vise hva det var en reaksjon på og hva som fulgte, plasseres
   lavt. Hver retning forstås som ledd i et utviklingsforløp.
3. **25/75-vektingen styrer tyngdefordelingen.** Kortsvar er en sikringsøvelse;
   langsvaret avgjør karakteren. Modellbesvarelser, prøver og øvingseksamener speiler
   dette (langsvarstreningen veier klart tyngst).
4. **A–F, gradert** — all lærebok- og modellsvarproduksjon kalibreres mot A–F og
   veiledningenes nivåbeskrivelser (minimum → god → særdeles god per kortsvar;
   C–D → A/B for langsvar).
5. **Stildrift mot teoretiker-navngitte kortsvar (V2025–V2026, Axel Rudi).** Boka
   trener det nyeste formatet — kortsvaret «Hva mener [teoretiker] med [begrep]?» —
   men bygger kjernen på de stabile retningene, som er de samme hele perioden.

**⚠️ Pensum-forbehold (les før begrepskontraktene brukes):** Pensumapparatet er
**rekonstruert fra sensorveiledningene**, ikke fra en offisiell semesterliste (UiO-
emnesiden lister pensum per semester, ikke på hovedsiden). De stabile ankerne
(de to monografiene, Boas, Malinowski/Radcliffe-Brown, Evans-Pritchard, Geertz,
Wolf, Abu-Lughod/Asad, Ortner, Appadurai, Ingold, Martin) er robuste, men
**enkelttekster og monografiutvalg kan variere mellom semestre**. Veiledningene
V2024/V2026 skriver «hvis *The Nuer* er på pensum» og «en av de obligatoriske
monografiene». **Byggekontrakten skal kreve at forfatteren verifiserer gjeldende
pensumliste** mot semesterets emneside før monografikapitlene (2.3, 3.2) og
teoretiker-tunge kapitler skrives. Usikre koblinger merkes `(verifiser)`; usikre
faktadetaljer utelates hellere enn gjettes.

**Kryssbok-lenker (⚡ aktiveringsmarkør):** Der etnografisk *bakgrunn* trengs (Nuer-
slektskap, kula, gaven), kan boka lenke til **SOSANT1000-boka** — men den er ennå
**ubygd (kun skjelett)**. Alle slike lenker merkes `⚡` i skjelettet og skal KUN
skrives inn når SOSANT1000 er live (byggekontrakten sjekker dette; ellers utelates
lenken og bakgrunnen gis kort i teksten). SOSANT1090 skal uansett **ikke** gjenta
tematisk innføring — den behandler felles figurer (Geertz, Douglas, Evans-Pritchard)
som *representanter for en skole i utvikling*, ikke som verktøy for et tema.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen, men med kronologisk retnings-akse: Del 0 (eksamenskart +
sjangerhåndverk for begge deler) → teoritidslinjen (Del 1–8, epoke for epoke, med
de to største klyngene — strukturfunksjonalisme og den refleksive vendingen — som
egne, tunge deler) → tverrgående akse-kapitler (Del 9) → eksamenstrening
(sjangerkapitler + feilvaksine + modellbesvarelser). Omfang per del følger
gjenganger-score fra analysens §2/§7.

| Del | Tittel | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart, kortsvar og langsvar | 3 | DNA-obligatorisk + sjangerutvidelse: 25/75-todeling ⇒ kortsvar- og langsvarhåndverk får hvert sitt kapittel. «Relasjon > redegjørelse», faghistorisk plassering og A/C/E-skillet etableres FØR fagstoffet. |
| 1 | Evolusjonisme, Boas og fagets fødsel | 2 | Kulturbegrep/relativisme/tidlige skoler ~4 ⭐⭐. Boas + kulturrelativisme er fast teoretiker-kortsvar (V2025-k1) og premiss for hele tidslinjen; evolusjonisme er scenario-langsvarets motstander (V2026). |
| 2 | Funksjonalisme og strukturfunksjonalisme | 4 | **Fagets største tema (~9 ⭐⭐⭐).** Evans-Pritchard/*The Nuer* er den enkelttekst som oftest testes; holisme er gjennomgående langsvarstema. Kortsvar OG langsvar nesten hvert semester ⇒ egen tung del. |
| 3 | Prosess, konflikt og aktør | 2 | Synkron/diakron & samfunnsendring/prosess ~6 ⭐⭐⭐ (fagets meta-akse). Manchesterskolen + Barth/Leach (2. monografi *Swat Pathans*) er den diakrone vendingen retningene senere måles mot. |
| 4 | Strukturalisme, symbolsk og tolkende antropologi | 3 | Symbolsk/tolkende ~4 ⭐⭐ (Geertz *thick description* fast kortsvar; Douglas renhet/forurensning). Lévi-Strauss/strukturalisme leverer «det fellesmenneskelige premisset» (scenario-langsvar V2026). |
| 5 | Materialistiske retninger: kulturøkologi, marxisme og praksisteori | 3 | Marxisme/politisk økonomi ~4–5 ⭐⭐ (Wolf); kulturøkologi/materialisme ~2–3 ⭐; praksisteori/Bourdieu ny og stigende (V2026-k4). Samlet under materialisme-aksen. |
| 6 | Feministisk antropologi | 2 | ~4 ⭐⭐, differensierende. Emily Martin (*The Egg and the Sperm*) testet tre ganger (V2022/V2023/V2026); bro til representasjonskrisen (vitenskap ikke verdinøytral). |
| 7 | Den refleksive og kritiske vendingen | 3 | **Fagets nest største tema (~9 ⭐⭐⭐).** Representasjonskrise + postkolonial kritikk (Asad, Abu-Lughod) + dekolonisering (Mogstad & Tse) + Ortner *Dark Anthropology*. Kortsvar og langsvar ⇒ egen tung del. |
| 8 | Fenomenologi, globalisering og samtid | 2 | Fenomenologi (Ingold dwelling) ~3 ⭐⭐; globalisering/samtid (Appadurai *-scapes*) ~2–3 ⭐⭐, stigende under Rudi; antropocen (Mathews). Nyere retninger som lukker tidslinjen. |
| 9 | Tverrgående akser (komparasjonskapitlene) | 4 | **Sensornøkkelens operasjonalisering.** De fire komparative rammene sensor etterspør (synkron/diakron, aktør/struktur, idealisme/materialisme, holisme/«oss–dem»). Ferdige A-nivå essaydisposisjoner som setter retninger i relasjon. |
| 10 | Eksamenstrening | 8 | 4 sjangerkapitler (teoretiker-kortsvar, komparativt langsvar, monografi-langsvar, påstand/scenario) + feilvaksine + 3 modellbesvarelser (DNA-krav ≥3) — med eksplisitt C→A-løft-drill. |

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart, kortsvar og langsvar |
| 1 | Evolusjonisme, Boas og fagets fødsel |
| 2 | Funksjonalisme og strukturfunksjonalisme |
| 3 | Prosess, konflikt og aktør |
| 4 | Strukturalisme, symbolsk og tolkende antropologi |
| 5 | Materialistiske retninger: kulturøkologi, marxisme og praksisteori |
| 6 | Feministisk antropologi |
| 7 | Den refleksive og kritiske vendingen |
| 8 | Fenomenologi, globalisering og samtid |
| 9 | Tverrgående akser |
| 10 | Eksamenstrening |

### Sjangerkoder (brukes i eksamensbelegg under, fra analysen §3)

**K** kortsvar — teoretiker-/begrepsnavngitt redegjørelse (Del 1, 2 av 5, 25 %,
~15–20 min): definisjon som treffer teoretikerens egen bruk → faghistorisk
plassering → illustrerende eksempel → én løftende kobling · **L** langsvar —
komparativt faghistorisk drøftingsessay (Del 2, 1 av 3, **75 %, bærer eksamen**):
to+ navngitte retninger/tekster satt i relasjon + empiriske eksempler + selvstendig
konklusjon · **MONO** monografi-langsvar — én obligatorisk monografi (*The Nuer* /
*Swat Pathans*) re-analysert gjennom en nyere retning (kobling, ikke sammendrag) ·
**PÅ** påstands-/utsagnsdrøfting — et sitat/en påstand (Ortner, Ingold, Wolf,
«forskning er ikke verdinøytral») som skal *prøves*, ikke bekreftes mekanisk ·
**SCEN** scenariooppgave (ny V2026) — en hverdagssituasjon rammer inn standard
faghistorie (evolusjonisme tilbakevises med kulturrelativisme + strukturalismens
fellesmenneskelige premiss + politisk økonomi).

### Feilkoder (brukes i «Typiske feil» under, fra analysen §5)

#1 ren gjengivelse/oppramsing uten drøfting — **den definerende feilen**, automatisk
tak på C–D · #2 manglende faghistorisk plassering (definere uten «hva reagerte den
på / hva fulgte») · #3 ikke navngi forfattere/tekster (kan cappe på C) · #4 flate/
upresise definisjoner som ikke treffer teoretikeren · #5 behandle holisme/system som
oppnåelig og uproblematisk (toppsvar viser at helhet er et *ideal* med grenser) ·
#6 monografi-langsvar uten kobling (referere *The Nuer*/Barth uten å re-analysere) ·
#7 ensidig sammenligning (utdype bare den ene siden i «diskuter X mot Y») · #8
langsvar uten empiriske/etnografiske eksempler (rent abstrakt) · #9 bryte de formelle
kravene (svare på for få oppgaver) = stryk · #10 bruke all tid på kortsvarene
(teller bare 25 % — ubalansert tidsbruk straffer seg).

### Vurderingsaksene (fra analysen §4 — malen for alle modellsvar)

**Akse 1 Drøfting vs. redegjørelse** (viktigst; relasjon = A/B, oppramsing = C–D) ·
**Akse 2 Faghistorisk plassering** («den tids tendenser») · **Akse 3
Pensumforankring** (mildere enn SOSANT1000 — ingen stryk for manglende referanse,
men C+ krever navngitte forfattere) · **Akse 4 Selvstendighet og analytisk
kreativitet** (uvanlige, egne koblinger «vel så bra» som de foreslåtte) · **Akse 5
Presisjon og begrepsbeherskelse**. Kortsvar-graderingen (minimum = korrekt
definisjon → god = + faghistorisk kontekst + eksempel → særdeles god = kritisk/
selvstendig vinkling eller kobling til andre deler av pensum) er malen for E/C/A i
modellbesvarelsene.

### Utgave-sensitivitet (⚠ — monografi- og pensumrisiko)

- **De to monografiene** (**Evans-Pritchard, *The Nuer*** + **Fredrik Barth,
  *Political Systems among the Swat Pathans***) er stabile klassikere, men
  veiledningene formulerer seg betinget («hvis *The Nuer* er på pensum»). Kap. 2.3 og
  3.2 skrives med den konkrete monografien som kjerne, men rammen «obligatorisk
  monografi re-analysert gjennom nyere linse» er det stabile. **Byggekontrakten skal
  kreve pensumlistesjekk** før disse kapitlene; bytter emnet monografi, byttes
  empirien, ikke rammen.
- **Figurer som har fått større plass under Rudi (V2025–2026)** — Bourdieu (5.3),
  Mary Douglas (4.3), Steward/Rappaport (5.1), Appadurai (8.2) — er sannsynlige
  gjengangere, men merkes som «stigende», ikke evige ankere.
- **Stabile ankere (aldri ⚠):** Boas, Malinowski/Radcliffe-Brown, Evans-Pritchard,
  Gluckman/Turner, Lévi-Strauss, Geertz, Wolf, Abu-Lughod/Asad, Ortner, Ingold,
  Martin, Appadurai.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-forekomster V2020→V2026 (o=ordinær,
> u=utsatt, k=kortsvar, l=langsvar, essay-år = alternativ) + sjangerkoder +
> prioritetsklasse (perfekt / kunne / kjenne, fra analysen §7). **Kvote** =
> quiz/flashcards. Alle teorikapitler følger **teorikapittel-DNA** (tilpasset
> kronologifaget): `tip` Eksamensvinkel → `text` **Retningen i faghistorien** (hva
> den reagerte på, hva som fulgte — «den tids tendenser») → `definition`
> **Begrepskontrakt** (flashcard-kilden — toppnivå med title; hvert begrep koblet
> teoretiker↔verk↔posisjon) → `text` **Komparasjonsakser** (retningen satt mot
> nabo-retninger — sensornøkkelens kjerne) → `example` anvendelse ×1–2 (skrevet slik
> et toppsvar ville gjort, med navngitte referanser) → `warning` Typiske feil →
> `exercise` ×4–8 → `collapsible` **Retningskart** (teoretiker → verk → «eier»-
> begreper; flashcard-råstoff). Forkunnskaper-blokk med lenker først i hvert kapittel.

### Del 0 — Eksamenskart, kortsvar og langsvar

#### Kapittel 0.1: Slik testes SOSANT1090
**id:** `sosant1090-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (5 t digital skoleeksamen, 25/75-todeling), den
  formelle strykeregelen, karakterskalaen, teoritidslinjen og hvordan boka brukes
  mot eksamen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (8 sett V2020–V2026).
  Skal formidle: (a) **Formen fra V2023:** 5 t digital skoleeksamen (Inspera),
  **ingen hjelpemidler** (heller ikke ordbok). **Del 1 kortsvar (25 %): svar på 2 av
  5.** **Del 2 langsvar (75 %): svar på 1 av 3**, drøftende faghistorisk essay.
  (b) **Strykeregelen:** eneste automatiske strykeregel er den formelle — man må
  besvare 2 kortsvar *og* 1 langsvar; svarer man på for få, stryker man (#9). Det
  finnes INGEN «to svake kortsvar = stryk»-regel; eksamen vurderes som en helhet.
  (c) **25/75 betyr at langsvaret bærer karakteren** — ikke bruk all tid på kortsvar
  (#10). Tidsbudsjett: ~2×20 min kortsvar, resten (~3,5 t) langsvar + kontroll.
  (d) **Karakterskala A–F**, gradert. (e) **Essayfasen V2020–V2022** (2500-ords
  hjemmeessay, 1 av 3) nevnes kort som historikk — temaene er de samme, men boka
  trener skoleeksamen-formatet. (f) **Teoritidslinjen** som organiserende kart
  (evolusjonisme → Boas → funksjonalisme/strukturfunksjonalisme → prosess/
  Manchester/Barth → strukturalisme/symbolsk → materialisme → feminisme → refleksiv/
  kritisk vending → fenomenologi/samtid), med topptema-markering (strukturfunksjonalisme
  og den refleksive vendingen tyngst). Prioritet: perfekt (metanivå).
- **Begrepskontrakt:** ingen fagbegreper — men presise beskrivelser av de fem
  sjangrene K/L/MONO/PÅ/SCEN med typisk plassering (Del 1 vs. Del 2) og tidsbudsjett.
  To mantraer innføres: «**sett retninger i relasjon**» og «**plasser alltid
  faghistorisk**».
- **Komparasjonsakser:** ingen (kartkapittel) — men peker frem til at hvert
  teorikapittel har en egen komparasjonsakse-blokk.
- **Case-forslag:** «Slik leser du et oppgavesett» — gjennomgang av ett nyskrevet
  V2025/V2026-format-sett (5 kortsvar + 3 langsvar), med demonstrasjon av hvordan man
  velger to kortsvar og ett langsvar strategisk (etter hva man kan drøfte, ikke bare
  gjengi).
- **Typiske feil:** #9 svare på feil antall; #10 bruke all tid på kortsvar; #1
  velge et langsvar man bare kan referere (ikke drøfte).
- **Kvote:** 12 quiz / 10 flashcards (eksamensform-fakta, 25/75, strykeregelen, A–F,
  sjangergjenkjenning, tidsbudsjett).

#### Kapittel 0.2: Kortsvarhåndverket — «Hva mener X med Y?»
**id:** `sosant1090-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-0-1`

- **Kapitteltype:** sjangerhåndverk (Del 1).
- **Description:** Hvordan et teoretiker-kortsvar bygges på 15–20 minutter, og hva
  som skiller minimum / god / særdeles god i Del 1 ifølge sensorveiledningene.
- **Eksamensbelegg:** Destillat av kortsvarskravene (analysen §3 Type A, §4).
  Prioritet: perfekt. Skal operasjonalisere **firetrinns-kortsvaret:** (1) presis
  definisjon som treffer teoretikerens egen bruk (f.eks. thick description = å
  beskrive en handling *sammen med* konteksten som gjør den meningsfull for dem man
  studerer); (2) faghistorisk plassering (hvilken retning, hva begrepet var en
  reaksjon på / bidrag til); (3) et illustrerende eksempel der teoretikeren har ett
  (Geertz' blunk vs. nervøs rykning; Douglas' pangolin; Boas' kritikk av den
  komparative metoden); (4) én løftende setning (kobling til beslektet retning,
  distinksjon eller kritikk). **Tre-nivå-gradering:** minimum = korrekt definisjon;
  god = + faghistorisk kontekst + eksempel; særdeles god = kritisk/selvstendig
  vinkling eller kobling til andre deler av pensum (poeng teoretikeren selv ikke gir).
  Skal understreke **stildriften**: de nyeste kortsvarene er teoretiker-navngitte
  («Hva mener Boas/Geertz/Appadurai/Bourdieu/Douglas/Martin med …?») — en forutsigbar
  poengbank.
- **Begrepskontrakt:** kortsvarsarkitekturen (de fire trinnene) + tidsbudsjett
  (~18 min per svar) + utvalgsstrategi (velg de to du kan plassere faghistorisk og
  eksemplifisere). Mantra: «definisjon uten faghistorisk plassering er
  minimums-/C-stoff».
- **Komparasjonsakser:** presisjon vs. bredde (to solide kortsvar > fem tynne); når
  «koble til en annen retning» løfter et kortsvar til særdeles god uten å sprenge
  tidsrammen.
- **Case-forslag:** samme kortsvarsoppgave («Hva mener Geertz med tykke beskrivelser,
  og hvorfor mente han det var viktig?») besvart tre ganger — E (bare definisjon),
  C/god (definisjon + plassering + blunk-eksempel), A/særdeles god (+ kobling til
  holisme og til strukturalismens kritikk) — med margkommentarer.
- **Typiske feil:** #4 flat definisjon som ikke treffer teoretikeren; #2 definisjon
  uten faghistorisk plassering; #3 «en retning mener at …» uten å navngi teoretiker;
  #9-forløper: svare på for mange kortsvar.
- **Kvote:** 18 quiz / 14 flashcards (de fire trinnene, tre-nivå-kjennetegn,
  tidsbudsjett, teoretiker↔begrep-drill).

#### Kapittel 0.3: Langsvarhåndverket — komparativ drøfting og faghistorisk plassering
**id:** `sosant1090-0-3` · **number:** 0.3 · **estimatedMinutes:** 65 · **prerequisites:** `sosant1090-0-2`

- **Kapitteltype:** sjangerhåndverk (Del 2 — **det viktigste håndverkskapitlet**,
  75 % av eksamen).
- **Description:** Hvordan et drøftende, komparativt faghistorisk langsvar bygges, og
  hva som skiller A/C/E — med «relasjon slår redegjørelse» og faghistorisk plassering
  som kjerne.
- **Eksamensbelegg:** Destillat av langsvarskravene (analysen §3 Type B, §4).
  Prioritet: perfekt. Skal operasjonalisere **femtrinns-langsvaret:** (1) presis
  avklaring/problematisering av oppgavens nøkkelbegrep (holisme, kulturbegrep,
  representasjonskrise, samfunnsendring, funksjonsforklaring) — gjerne faghistorisk;
  (2) en tydelig analytisk tråd kandidaten selv staker ut (langsvarene er *med vilje
  åpne*); (3) **to eller flere navngitte retninger/tekster satt opp mot hverandre**
  (likheter/forskjeller, hva den ene får fram som den andre ikke gjør) — **A-markøren
  og sensornøkkelen**; (4) empiriske/etnografiske eksempler (ikke bare abstrakt teori,
  #8); (5) selvstendig, reflektert konklusjon (f.eks. at holisme er verdifullt *som
  ideal* men aldri fullt oppnåelig). **Kjernelogikken (gjentas ordrett):** «kun
  presentere teorier uten å diskutere dem opp mot hverandre = C–D». Åpenheten skal
  utnyttes til selvstendige, gjerne uvanlige koblinger (Akse 4).
- **Begrepskontrakt:** langsvarsarkitekturen (fem trinn) + tidsbudsjett (~3,5 t:
  ~20 disponering, ~2,5–3 t skriving, ~15 kontroll) + «retninger satt i relasjon,
  ikke bare presentert» som A/C-skillet. Mantraer: «drøft — ikke referer», «koble
  minst to retninger», «plasser i faghistorien».
- **Komparasjonsakser:** redegjørelse vs. drøfting som ulike ferdigheter (C→A-løftet);
  bredde (mange retninger nevnt) vs. dybde (to satt grundig i relasjon) — dybde vinner;
  hvordan monografi- og påstandsoppgaver også er komparasjonsoppgaver i forkledning.
- **Case-forslag:** samme langsvarsoppgave («Diskuter holismebegrepet med henvisning
  til to eller flere retninger i antropologihistorien») skissert på tre nivåer — E
  (referat av én retning), C (korrekt presentasjon av to retninger side om side, ikke
  koblet), A (funksjonalismens holisme mot kulturøkologiens systemholisme, satt mot
  Manchesterskolens/fenomenologiens kritikk, med konklusjon om idealet vs. praksis) —
  med margkommentarer på de fem aksene.
- **Typiske feil:** #1 rent referat uten drøfting; #2 manglende faghistorisk
  plassering; #7 ensidig sammenligning; #8 langsvar uten eksempler.
- **Kvote:** 20 quiz / 16 flashcards (femtrinnene, «relasjon > redegjørelse»,
  A/C/E-kjennetegn, komparasjon som A-markør, faghistorisk plassering som eget krav).

### Del 1 — Evolusjonisme, Boas og fagets fødsel

#### Kapittel 1.1: Kulturevolusjonisme og diffusjonisme — fagets første teorier
**id:** `sosant1090-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-0-3`

- **Kapitteltype:** teori.
- **Description:** Antropologiens 1800-tallsbegynnelse: kulturevolusjonismen (samfunn
  på en lineær utviklingsstige), diffusjonismen, og hvorfor disse teoriene ble
  forlatt — grunnlaget hele resten av tidslinjen definerer seg mot.
- **Eksamensbelegg:** Del av kulturbegrep/tidlige skoler ~4 ⭐⭐; evolusjonisme som
  motstander i **scenario-langsvaret** (V2026-l1 «onkelen i bilen»: tilbakevis
  evolusjonistiske/lineære holdninger). Sjangre: K, SCEN, L-bakteppe. Prioritet:
  **kunne** (§7 pkt. 8 — premiss for kulturrelativismen og for scenariooppgaven).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **kulturevolusjonisme** (E.B.
  Tylor / L.H. Morgan `(verifiser navn på pensum)` → tidlig faghistorie → samfunn
  rangert på én lineær stige fra «primitivt» til «sivilisert»); **unilineær
  evolusjon** (én felles utviklingsvei — senere utfordret av Stewards multilineære,
  se 5.1); **diffusjonisme** (kulturtrekk sprer seg fra sentra); **etnosentrisme**
  (å måle andre samfunn med egne kategorier — det evolusjonismen bygde på og
  kulturrelativismen bryter med); **armlenestol-antropologi** (teoretisering uten
  feltarbeid — det Malinowski senere gjorde opprør mot, se 2.1).
- **Komparasjonsakser (mot nabo-retninger):** (1) **mot Boas (1.2):** evolusjonismens
  universelle stadier vs. Boas' historiske partikularisme — hovedbruddet som starter
  moderne antropologi; (2) **mot strukturalismen (4.1):** Lévi-Strauss beholder et
  *fellesmenneskelig* premiss (alle menneskesinn fungerer likt) men forkaster
  stadietenkningen; (3) **framover mot dekolonisering (7.3):** evolusjonismen som
  fagets koloniale arv og «oss/dem»-hierarki.
- **Case-forslag:** en anvendelse skrevet som svaret på scenario-langsvaret — hvorfor
  påstanden «det samfunnet har ikke kommet så langt i utviklingen» er en
  evolusjonistisk feilslutning, og hvilke senere retninger (Boas, Lévi-Strauss, Wolf)
  som tilbakeviser den.
- **Typiske feil:** #2 presentere evolusjonismen uten å vise hva den ble en reaksjon
  *fra* og hva som avløste den; #4 blande evolusjonisme og diffusjonisme; #1 ramse
  opp «gamle teorier» uten å koble dem til dagens kulturrelativisme.
- **Kvote:** 22 quiz / 24 flashcards (evolusjonisme, unilineær/multilineær,
  diffusjonisme, etnosentrisme, armlenestol-antropologi, teoretiker↔posisjon).

#### Kapittel 1.2: Boas, kulturrelativisme og den amerikanske kulturhistorien
**id:** `sosant1090-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-1-1`

- **Kapitteltype:** teori.
- **Description:** Franz Boas' brudd med evolusjonismen: hver kultur som unik og
  historisk formet, kulturrelativisme som forskningsprinsipp, og kulturbegrepets
  fødsel — et fast teoretiker-kortsvar.
- **Eksamensbelegg:** Boas-spesifikt: V2025-k1 (Boas); kulturbegrep/relativisme
  ~4 ⭐⭐ (V2022u-o3, V2026-l1, V2026-l3). Sjangre: K («Hva mener Boas med …?»), L,
  SCEN. Prioritet: **perfekt** (§7 pkt. 8 — fast teoretiker-kortsvar og premiss for
  hele faget).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Franz Boas**, *The Limitations
  of the Comparative Method of Anthropology* (1896) → grunnleggeren av amerikansk
  kulturhistorie → hver kultur må forstås ut fra sin egen historie, ikke plasseres på
  en universell stige; **kulturrelativisme** (metodologisk prinsipp: forstå en praksis
  i sin egen kontekst — IKKE at «alt er like rett»); **historisk partikularisme**
  (kulturer formes av sin unike historie, ikke av allmenne lover); **kulturbegrepet**
  (kultur som helhetlig, lært livsform — råstoffet Geertz senere tolker og
  Abu-Lughod senere kritiserer, se 4.2/7.2); Boas' kritikk av den komparative
  metoden (samme trekk kan ha ulik opprinnelse/mening).
- **Komparasjonsakser:** (1) **mot evolusjonismen (1.1):** partikularisme og
  relativisme mot universelle stadier; (2) **mot funksjonalismen (2.1–2.2):** begge
  bryter med armlenestol-antropologien og krever feltdata, men Boas er *diakron*
  (historisk formet kultur) mens Malinowski/Radcliffe-Brown er *synkrone* (samfunn som
  fungerende system her og nå) — en tidlig utgave av synkron/diakron-aksen (9.1);
  (3) **framover mot «write against culture» (7.2):** Abu-Lughod radikaliserer
  relativismen til kritikk av selve kulturbegrepet.
- **Case-forslag:** anvend Boas' kulturrelativisme på en praksis som virker fremmed
  utenfra men gir mening i kontekst; drøft grensen mellom *metodologisk* relativisme
  (forskningsprinsipp) og *etisk* relativisme (den problematiske «alt er like
  rett»-påstanden).
- **Typiske feil:** #4 kulturrelativisme = «alt er like rett» (mister det
  metodologiske poenget); #2 Boas uten evolusjonismen han reagerte mot; #1 «kultur»
  som statisk pakke uten den historiske dimensjonen.
- **Kvote:** 24 quiz / 26 flashcards (Boas, kulturrelativisme metodologisk/etisk,
  historisk partikularisme, kulturbegrepet, kritikk av komparativ metode,
  begrep↔Boas↔verk).

**Prøve-kvote Del 1:** 4 prøver (`sosant1090-1-prove`, chapterNumber 1.P):
1. *Tidlig faghistorie-drill:* 10 flervalg (evolusjonisme, unilineær/multilineær,
   diffusjonisme, etnosentrisme, Boas, kulturrelativisme, historisk partikularisme)
   + 1 teoretiker-kortsvar («Hva mener Boas med kulturrelativisme?»).
2. *Evolusjonisme vs. Boas (L, kort):* komparativ momentliste — hvordan Boas brøt med
   evolusjonismen (faghistorisk plassering + relasjon).
3. *Kulturrelativisme (K + PÅ):* teoretiker-kortsvar (Boas) à tre-nivå-mal + kort
   påstandsdrøfting «alt er like rett» (metodologisk vs. etisk).
4. *Scenario (SCEN):* tilbakevis «det samfunnet er mindre utviklet» med
   evolusjonisme-kritikk + kulturrelativisme (momentliste, obligatorisk navngitt Boas).

### Del 2 — Funksjonalisme og strukturfunksjonalisme

#### Kapittel 2.1: Malinowski, feltarbeidsrevolusjonen og funksjonalismen
**id:** `sosant1090-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sosant1090-1-2`

- **Kapitteltype:** teori.
- **Description:** Bronisław Malinowskis to bidrag: det moderne feltarbeidet
  (deltakende observasjon) som metoderevolusjon, og funksjonalismen (kulturtrekk
  dekker menneskelige behov). Feltarbeid behandles her KUN faghistorisk — som
  funksjonalismens metodebidrag.
- **Eksamensbelegg:** Del av strukturfunksjonalisme-klyngen ~9 ⭐⭐⭐; Malinowski-
  spesifikt: V2026-k1 (Malinowskis feltarbeidsråd), V2020o (antropologens rolle i
  felt). Sjangre: K («Hva mener Malinowski med …?»), L (holisme/system),
  MONO-bakteppe. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Bronisław Malinowski** →
  funksjonalismens far → **deltakende observasjon** (langvarig feltarbeid der
  forskeren deltar i og iakttar dagliglivet — faghistorisk *metodebidrag*, ikke
  metodelære); **funksjonalisme** (hvert kulturtrekk har en funksjon — dekker et
  menneskelig behov); **holisme** (samfunnets deler forstås i sin helhetlige
  sammenheng — utdypes i 2.4); Malinowskis brudd med armlenestol-antropologien (1.1);
  «innfødtes synspunkt» (å gripe verden slik de studerte ser den — foregriper Geertz,
  4.2).
- **Komparasjonsakser:** (1) **mot Boas (1.2):** begge anti-evolusjonære og
  feltbaserte, men Malinowski *synkron* funksjon (behov her og nå) vs. Boas *diakron*
  kulturhistorie; (2) **mot Radcliffe-Brown (2.2):** funksjonalismens store interne
  splittelse — Malinowskis *biologiske/individuelle* behov vs. Radcliffe-Browns
  *sosiale struktur*; (3) **framover mot representasjonskrisen (7.1):** Malinowskis
  autoritative «jeg var der»-etnografi er nettopp det Marcus & Fischer/Clifford senere
  problematiserer.
- **Case-forslag:** anvend funksjonalismens forklaringsform på et rituale eller en
  institusjon (hvilket behov dekker det?), og vis så begrensningen: funksjonsforklaring
  kan ikke forklare *endring* eller *konflikt* (bro til 2.4/3.1 og til
  V2022-langsvaret om «funksjonsforklaringer i lys av nyere perspektiver»).
- **Typiske feil:** #2 Malinowski uten armlenestol-antropologien han gjorde opprør
  mot; #4 funksjonalisme = «alt har en funksjon» uten behovs-poenget; behandle
  feltarbeid som metodelære i stedet for faghistorisk objekt.
- **Kvote:** 24 quiz / 26 flashcards (deltakende observasjon, funksjonalisme, behov,
  holisme, innfødtes synspunkt, Malinowski↔posisjon).

#### Kapittel 2.2: Radcliffe-Brown og strukturfunksjonalismen
**id:** `sosant1090-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-2-1`

- **Kapitteltype:** teori.
- **Description:** A.R. Radcliffe-Browns strukturfunksjonalisme: samfunnet som et
  selvopprettholdende system av sosiale strukturer, med Durkheims arv om det
  kollektive — den retningen *The Nuer* er skrevet innenfor.
- **Eksamensbelegg:** Strukturfunksjonalisme direkte: V2024-k4 (strukturfunksjonalisme),
  V2020o-o3 (system); del av topptema-klyngen ~9 ⭐⭐⭐. Sjangre: K, L (system/holisme).
  Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **A.R. Radcliffe-Brown** →
  strukturfunksjonalismen → **sosial struktur** (mønsteret av relasjoner mellom
  posisjoner — det som opprettholder samfunnet); **samfunn som selvopprettholdende
  system** (deler bidrar til helhetens likevekt, som organer i en organisme);
  **synkron analyse** (samfunnet studert som det fungerer *nå*, ikke dets historie);
  **Émile Durkheim** (arven: det kollektive/sosiale som egen realitet; «det kollektive
  bruset»); forskjellen fra Malinowski (sosial struktur vs. individuelle behov).
- **Komparasjonsakser:** (1) **mot Malinowski (2.1):** struktur vs. behov — de to
  funksjonalismene; (2) **mot Manchesterskolen (3.1):** likevekt/system vs. konflikt/
  endring — den diakrone vendingen retningen senere måles mot; (3) **mot marxismen
  (5.2):** a-historisk system i harmoni vs. historisk-materiell analyse av makt og
  klasse — Wolfs kritikk av det statiske systembildet.
- **Case-forslag:** analyser en institusjon strukturfunksjonalistisk (hvordan bidrar
  den til samfunnets likevekt?), og drøft svakheten: systemtenkningen sliter med
  endring, konflikt og makt (bro til Del 3 og Del 5, og til V2022-langsvaret).
- **Typiske feil:** #5 behandle «systemet» som et harmonisk, uproblematisk faktum
  (toppsvar viser at likevektsbildet overser konflikt/endring); #4 blande Malinowskis
  og Radcliffe-Browns funksjonalisme; #2 struktur uten Durkheim-arven.
- **Kvote:** 24 quiz / 26 flashcards (sosial struktur, selvopprettholdende system,
  synkron analyse, Durkheim/kollektivt, struktur vs. behov, teoretiker↔posisjon).

#### Kapittel 2.3: Evans-Pritchard, *The Nuer* og segmentær opposisjon ⚠
**id:** `sosant1090-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `sosant1090-2-2`

- **Kapitteltype:** teori (monografi — **utgavesensitiv ⚠, se del 2**).
- **Description:** *The Nuer* som strukturfunksjonalismens mesterverk og fagets mest
  testede enkelttekst: segmentær opposisjon, feider som avstandsregulering, og
  samfunnet som selvregulerende system uten sentralmakt.
- **Eksamensbelegg:** **Den enkelttekst som oftest testes.** Direkte langsvar V2020o,
  V2023-l1, V2025-l2 (Evans-Pritchard-system); referansepunkt i nesten hver
  strukturfunksjonalisme-/holismeoppgave; V2026-k1/l2. Sjangre: MONO, L, K.
  Prioritet: **perfekt** (§7 pkt. 1 — nesten garantert delkarakter).
- **⚠ Utgavesensitiv:** bygg på *The Nuer*, men veiledningene skriver «hvis *The Nuer*
  er på pensum». Byggekontrakten sjekker gjeldende monografiliste; er den byttet,
  byttes empirien, ikke rammen (monografi re-analysert gjennom nyere linse).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **E.E. Evans-Pritchard**, *The Nuer*
  (monografi) → strukturfunksjonalismens klassiker → **segmentær opposisjon**
  (grupper slår seg sammen og splittes speilbildeaktig etter konfliktnivå — «jeg mot
  min bror, min bror og jeg mot fetteren»); **feider som avstandsregulering**
  (konflikt holder systemet i balanse i stedet for å ødelegge det); **statsløst/
  akefalt samfunn** (orden uten sentralmakt); kveg som samfunnets akse (økonomi,
  slektskap, politikk vevd sammen — holisme i praksis). ⚡ etnografisk bakgrunn:
  kryssbok-lenke til SOSANT1000-bokas Nuer-/slektskapsmateriale (ubygd — utelat til
  live).
- **Komparasjonsakser:** (1) **innenfor strukturfunksjonalismen (2.2):** *The Nuer*
  som den mest gjennomførte systemanalysen; (2) **mot Barth/prosess (3.2):** systemets
  likevekt vs. aktørens strategiske valg — Barth ville spurt hvorfor *individer*
  velger som de gjør; (3) **mot postkolonial kritikk (7.1):** *The Nuer* ble skrevet
  under britisk kolonistyre i Sudan (Evans-Pritchard arbeidet i kolonial kontekst) —
  et hovedeksempel når Asad drøfter antropologiens koloniale betingelser. **Denne
  aksen er selve MONO-oppgaven: re-analyser *The Nuer* gjennom en nyere linse.**
- **Case-forslag:** en full MONO-skisse — «Ta utgangspunkt i *The Nuer* og se den i
  lys av et nyere kritisk perspektiv»: bruk segmentær opposisjon som systemanalyse,
  og re-les den så gjennom postkolonial kritikk (koloniale betingelser) ELLER
  aktørperspektivet (Barth). Vis minimum/god/særdeles god-trinnene.
- **Typiske feil:** #6 referere *The Nuer* uten å re-analysere den gjennom en nyere
  retning (MONO-kravet); #5 fremstille segmentær opposisjon som friksjonsfri
  automatikk; #4 segmentær opposisjon upresist (mister speilbilde-logikken).
- **Kvote:** 28 quiz / 30 flashcards (segmentær opposisjon, feider/avstandsregulering,
  statsløst samfunn, kveg/holisme, koloniale betingelser, MONO-koblinger,
  Evans-Pritchard↔verk).

#### Kapittel 2.4: Holisme — funksjonalismens ideal og dets grenser
**id:** `sosant1090-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-2-3`

- **Kapitteltype:** teori/bro (gjennomgående langsvarstema).
- **Description:** Holisme som antropologiens forskningsideal — og hvorfor toppsvar
  behandler det som et *uoppnåelig ideal* med iboende grenser (posisjonalitet, tilgang,
  endring over tid). Et av fagets faste langsvarstemaer.
- **Eksamensbelegg:** Holisme som langsvar: V2024-l3, V2026-l2; implisitt kortsvar
  V2026-k1. Sjangre: L (holisme med to+ retninger), K. Prioritet: **perfekt** (§7
  pkt. 1 — gjennomgående langsvarstema).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **holisme** (Malinowski/Evans-
  Pritchard → funksjonalismen → samfunnets deler forstås i helhetlig sammenheng);
  **holisme som ideal vs. praksis** (idealet om å gripe helheten mot den faktiske
  umuligheten av det); **grensene ved holisme** (posisjonalitet — forskeren ser fra
  ett ståsted; tilgang — man kan ikke se alt; endring over tid — «helheten» er ikke
  statisk); systemholisme (funksjonalismens) vs. senere kritikk.
- **Komparasjonsakser (kapitlet ER en komparasjon — mal for holisme-langsvaret):**
  (1) **funksjonalismens holisme (2.1–2.3)** mot **kulturøkologiens systemholisme
  (5.1, Rappaport/Steward)** — to måter å tenke helhet på; (2) **mot Manchesterskolen
  (3.1):** Gluckmans «ting som ikke henger sammen»/konflikt utfordrer at alt danner en
  harmonisk helhet; (3) **mot fenomenologien (8.1):** Ingolds prosess/forbindelse mot
  en avgrenset «helhet»; (4) **mot representasjonskrisen (7.1):** posisjonalitet gjør
  fullstendig helhetsforståelse umulig.
- **Case-forslag:** langsvarsskissen «Diskuter holismebegrepet med henvisning til to
  eller flere retninger» — definer holisme som ideal, vis funksjonalismens og
  kulturøkologiens versjoner, sett dem mot Manchesterskolens/fenomenologiens kritikk,
  konkluder nyansert (idealet er verdifullt men aldri fullt realiserbart). **Denne
  disposisjonen er A-malen for et av de sikreste langsvarene.**
- **Typiske feil:** #5 behandle holisme som oppnåelig og uproblematisk (den definerte
  feilen for dette temaet); #1 presentere «holisme hos flere retninger» uten å
  *drøfte* dem opp mot hverandre; #8 abstrakt holisme uten et etnografisk eksempel.
- **Kvote:** 22 quiz / 24 flashcards (holisme ideal/praksis, grensene, systemholisme,
  holisme på tvers av retninger, retning↔holismeversjon).

**Prøve-kvote Del 2:** 4 prøver (`sosant1090-2-prove`, chapterNumber 2.P):
1. *Funksjonalisme-drill:* 12 flervalg (deltakende observasjon, funksjonalisme/behov,
   sosial struktur, synkron analyse, segmentær opposisjon, statsløst samfunn, holisme)
   + 1 teoretiker-kortsvar (Malinowski eller Radcliffe-Brown).
2. *Malinowski vs. Radcliffe-Brown (L):* komparativ momentliste (behov vs. struktur;
   faghistorisk plassering).
3. *The Nuer i lys av nyere kritikk (MONO):* full monografi-langsvarsskisse
   (segmentær opposisjon re-analysert gjennom postkolonial ELLER aktørkritikk),
   minimum/god/særdeles god + koblingskravet (#6-vaksine).
4. *Holisme (L):* «holisme som ideal» med to+ retninger satt i relasjon (momentliste,
   #5-vaksine — vis grensene).

### Del 3 — Prosess, konflikt og aktør

#### Kapittel 3.1: Manchesterskolen — konflikt, endring og situasjonsanalyse
**id:** `sosant1090-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-2-4`

- **Kapitteltype:** teori.
- **Description:** Max Gluckman og Manchesterskolen: konflikt og endring inn i
  analysen, extended case-metoden, og urbanisering/kolonial industrialisering som
  nytt studiefelt — den første store diakrone vendingen bort fra likevektssystemet.
- **Eksamensbelegg:** Manchesterskolen direkte: V2025-l3; Gluckman i marxisme-
  kortsvar V2023-k5; del av samfunnsendring/prosess-klyngen ~6 ⭐⭐⭐ (V2021-o1,
  V2022o-o1). Sjangre: L (samfunnsendring), K. Prioritet: **perfekt** (§7 pkt. 3 —
  hvordan faget beveget seg fra system til prosess).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Max Gluckman** →
  Manchesterskolen → **konflikt som normaltilstand** (konflikt er innebygd i sosialt
  liv, ikke systemfeil — Marx-inspirert); **extended case / situasjonsanalyse**
  (analysere en konkret hendelse/konflikt over tid i stedet for et tidløst system);
  **Victor Turner** (fra Manchesterskolen: sosiale dramaer `(verifiser
  pensumkobling)`); **A.L. Epstein / J.C. Mitchell** (urbanisering, gruvebyene på
  Copperbelt — antropologi i industrialiserte, koloniale bysamfunn); **diakron
  analyse** (endring over tid som analyseobjekt); «ting som ikke henger sammen»
  (motsigelser og friksjoner som inngang, mot funksjonalismens sømløse helhet).
- **Komparasjonsakser:** (1) **mot strukturfunksjonalismen (2.2–2.3):**
  konflikt/endring vs. likevekt/system — kjernerelasjonen i samfunnsendrings-
  langsvarene; Gluckman beholder likevel strukturbegrepet (konflikter *innenfor*
  rammer); (2) **mot Barth (3.2):** begge diakrone, men Manchester ser konflikt i
  strukturer, Barth ser strategiske aktører; (3) **mot marxismen (5.2):** Gluckman
  som Marx-inspirert forløper for Wolfs politiske økonomi.
- **Case-forslag:** en situasjonsanalyse av en nyskrevet konflikt-case (f.eks. en
  arbeidskonflikt i en gruveby) som viser hva extended case får fram som
  systemanalysen ikke ser; brukes som byggekloss i «hvordan forstår vi
  samfunnsendring»-langsvaret.
- **Typiske feil:** #2 Manchesterskolen uten strukturfunksjonalismen den reagerte
  mot; #4 «extended case» upresist (mister tidsdimensjonen); #1 presentere
  Gluckman og Evans-Pritchard side om side uten å drøfte hva konfliktblikket
  endrer.
- **Kvote:** 24 quiz / 26 flashcards (konflikt som normaltilstand, extended case/
  situasjonsanalyse, Copperbelt/urbanisering, diakron analyse, Gluckman↔posisjon,
  Manchester vs. strukturfunksjonalisme).

#### Kapittel 3.2: Barth, Leach og aktørperspektivet ⚠
**id:** `sosant1090-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `sosant1090-3-1`

- **Kapitteltype:** teori (monografi — **utgavesensitiv ⚠, se del 2**).
- **Description:** Fredrik Barths *Political Systems among the Swat Pathans* — den
  andre obligatoriske monografien: aktør, transaksjon og strategiske valg som
  alternativ til systemtenkning, med Leachs irregulariteter som bro.
- **Eksamensbelegg:** Aktør/struktur & person ~3 ⭐⭐ (V2020o-o1 menneskesyn/person,
  V2022u-o1 strukturer og nettverk som begrensende/muliggjørende, V2023-l3
  aktør/person); Barth i samfunnsendring-klyngen; *Swat Pathans* som obligatorisk
  monografi (MONO-sjangeren fra V2026 kan kreve «én av de obligatoriske
  monografiene» i alle langsvar). Sjangre: MONO, L, K. Prioritet: **perfekt**
  (§7 pkt. 3 + pkt. 10 — monografibeherskelse).
- **⚠ Utgavesensitiv:** bygg på *Swat Pathans*; byggekontrakten sjekker gjeldende
  monografiliste (samme regel som 2.3).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Fredrik Barth**, *Political
  Systems among the Swat Pathans* (monografi) → prosessanalyse/aktørperspektiv →
  **transaksjon** (sosialt liv som strategiske bytter mellom kalkulerende aktører);
  **aktørperspektiv** (forklaringen starter hos individets valg, ikke systemets
  behov); politisk lederskap i Swat som *resultat av* alliansebygging og
  transaksjoner, ikke av fastlagt struktur; **metodologisk individualisme**
  (samfunnsforhold forklart nedenfra — begrepet sensor ser etter, og som
  representasjonskritikken senere problematiserer); **Edmund Leach** →
  **irregulariteter** (avvik og svingninger som analytisk inngang — samfunn
  «i utakt» med sine egne modeller `(verifiser Leach-tekst på pensum)`);
  **nettverk** (Marianne Lien / aktør-nettverk-teori `(verifiser)` — nyere
  videreføring, «bør kjenne til», plasseres ETTER kjernestoffet).
- **Komparasjonsakser:** (1) **mot Evans-Pritchard (2.3):** de to monografiene som
  motpoler — segmentært system vs. strategisk aktør; å kunne sette *The Nuer* og
  *Swat Pathans* opp mot hverandre er en ferdig A-komparasjon; (2) **mot
  Manchesterskolen (3.1):** endring via konflikt i strukturer vs. endring via
  aktørers valg; (3) **framover mot Bourdieu (5.3):** praksisteorien som forsøk på
  å overskride aktør/struktur-dikotomien; (4) **mot postkolonial kritikk (7.1–7.2):**
  også *Swat Pathans* kan re-analyseres (kolonial kontekst, kjønnsblindhet
  `(verifiser)`) — MONO-linsen.
- **Case-forslag:** MONO-skisse «Ta utgangspunkt i *Swat Pathans* og se den i lys
  av et nyere perspektiv» — bruk transaksjonsanalysen på et empirisk eksempel fra
  monografien og re-les gjennom feministisk eller marxistisk linse (hvem KAN
  egentlig velge strategisk? hva med maktstrukturene valget skjer innenfor?).
- **Typiske feil:** #6 referere *Swat Pathans* uten re-analyse; #4 «transaksjon»
  som ren økonomisk byttehandel (mister det strategisk-politiske); #7 sette
  aktør mot struktur men bare utdype den ene siden; #2 Barth uten
  strukturfunksjonalismen han reagerte mot.
- **Kvote:** 26 quiz / 28 flashcards (transaksjon, aktørperspektiv, metodologisk
  individualisme, irregulariteter, nettverk, Swat-empiri, Barth↔verk↔posisjon,
  Nuer↔Swat-komparasjonen).

**Prøve-kvote Del 3:** 4 prøver (`sosant1090-3-prove`, chapterNumber 3.P):
1. *Prosess-drill:* 10 flervalg (konflikt som normaltilstand, extended case,
   diakron/synkron, transaksjon, metodologisk individualisme, irregulariteter)
   + 1 teoretiker-kortsvar (Gluckman eller Barth).
2. *System vs. prosess (L):* «hvordan forstår vi samfunnsendring?» — komparativ
   momentliste med strukturfunksjonalisme + Manchester/Barth satt i relasjon
   (#1-vaksine).
3. *Swat Pathans re-analysert (MONO):* monografi-langsvarsskisse med nyere linse
   (minimum/god/særdeles god, #6-vaksine).
4. *Aktør og struktur (PÅ):* «strukturer er både begrensende og muliggjørende» —
   påstandsdrøfting med Barth + én strukturretning navngitt (momentliste).

### Del 4 — Strukturalisme, symbolsk og tolkende antropologi

#### Kapittel 4.1: Lévi-Strauss og strukturalismen
**id:** `sosant1090-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-2-4`

- **Kapitteltype:** teori.
- **Description:** Claude Lévi-Strauss' strukturalisme: kultur som uttrykk for
  felles underliggende meningsstrukturer i menneskesinnet — det fellesmenneskelige
  premisset som tilbakeviser evolusjonismens rangering.
- **Eksamensbelegg:** Del av kulturbegrep/tidlige skoler-klyngen ~4 ⭐⭐ (V2026-l1
  scenariooppgaven bruker strukturalismens fellesmenneskelige premiss, V2026-l3
  kulturbegrepet). Sjangre: L, SCEN, K. Prioritet: **kunne** (§7 pkt. 8).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Claude Lévi-Strauss** →
  strukturalismen → **underliggende strukturer** (kulturelle uttrykk — myter,
  slektskapssystemer, matregler — er overflatevariasjoner over felles mentale
  dypstrukturer); **binære opposisjoner** (mening skapes gjennom kontrastpar:
  rå/kokt, natur/kultur, vi/de); **det fellesmenneskelige premisset** (alle
  menneskesinn ordner verden på samme måte — «det ville sinn» er like logisk som
  det moderne); strukturalisme vs. strukturfunksjonalisme (samme ord, ulikt
  innhold: mentale strukturer vs. sosiale relasjoner — klassisk forvekslingsfelle).
- **Komparasjonsakser:** (1) **mot evolusjonismen (1.1):** samme mentale utrustning
  overalt vs. utviklingsstige — strukturalismen som anti-rangerende universalism;
  (2) **mot Boas (1.2):** begge anti-evolusjonære, men Lévi-Strauss søker det
  *universelle* der Boas dyrker det *partikulære*; (3) **mot Geertz (4.2):**
  dypstruktur bak ryggen på folk vs. mening slik den tolkes av folk — inngangsporten
  til den tolkende vendingen; (4) **mot fenomenologien (8.1):** abstrakte
  strukturer vs. levd erfaring.
- **Case-forslag:** analyser et kjent kontrastpar (ren/uren mat, helg/hverdag) med
  binære opposisjoner, og bruk det fellesmenneskelige premisset i scenariooppgaven
  («alle kulturer klassifiserer — ingen er 'mindre utviklet'»).
- **Typiske feil:** #4 blande strukturalisme og strukturfunksjonalisme (den
  klassiske forvekslingen); #1 presentere Lévi-Strauss uten å koble ham til
  debatten universalisme/partikularisme; #8 dypstrukturer uten et konkret eksempel.
- **Kvote:** 22 quiz / 24 flashcards (underliggende strukturer, binære opposisjoner,
  fellesmenneskelig premiss, strukturalisme≠strukturfunksjonalisme,
  Lévi-Strauss↔posisjon).

#### Kapittel 4.2: Geertz og den tolkende antropologien
**id:** `sosant1090-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `sosant1090-4-1`

- **Kapitteltype:** teori.
- **Description:** Clifford Geertz' tolkende vending: kultur som offentlig vev av
  mening, og *thick description* — fagets mest stabile teoretiker-kortsvar.
- **Eksamensbelegg:** **Geertz' thick description er et fast kortsvar** (V2023-k1,
  V2025-k4 — nesten alltid ett av de fem); symbolsk/tolkende ~4 ⭐⭐; V2026-l3
  (kulturbegrepet). Sjangre: K (fast), L. Prioritet: **perfekt** (§7 pkt. 4).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Clifford Geertz** → symbolsk/
  tolkende antropologi → **thick description / tykke beskrivelser** (å beskrive en
  handling *sammen med* den konteksten som gjør den meningsfull for dem man
  studerer — kontekst-poenget MÅ med, ellers flat definisjon); **blunk-eksemplet**
  (samme fysiske bevegelse — rykning, blunk, parodi på blunk — har helt ulik mening;
  bare tykk beskrivelse skiller dem); **kultur som tekst/meningsvev** (kultur er
  offentlige symboler som skal *tolkes*, ikke lovmessigheter som skal *forklares*);
  antropologi som fortolkende, ikke eksperimentell vitenskap; veksling mellom
  detalj og helhet (kobling til holisme, 2.4).
- **Komparasjonsakser:** (1) **mot strukturalismen (4.1):** mening hos aktørene og
  i offentligheten vs. dypstrukturer bak ryggen deres; (2) **mot positivismen/
  strukturfunksjonalismen (2.2):** tolkning vs. lovsøkende forklaring — Geertz som
  alternativ til naturvitenskapelig ideal (bro til verdinøytralitet-temaet, 7.1);
  (3) **framover mot representasjonskrisen (7.1):** hvis etnografi er tolkning, er
  den også *forfattet* — Geertz åpner døren kritikken senere går gjennom.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Geertz med tykke beskrivelser,
  og hvorfor mente han det var viktig?» besvart på A-nivå (definisjon +
  faghistorisk plassering som alternativ til positivistisk observasjon +
  blunk-eksemplet + løft: kobling til holisme eller til representasjonskrisen).
- **Typiske feil:** #4 thick description uten kontekst-poenget (den eksplisitt
  målte flate definisjonen); #2 Geertz uten det han reagerte mot (lovsøkende
  system-antropologi); #1 nevne Geertz og Lévi-Strauss uten å drøfte
  tolkning-mot-struktur.
- **Kvote:** 26 quiz / 28 flashcards (thick description m/kontekst-poeng,
  blunk-eksemplet, kultur som tekst, tolkning vs. forklaring, Geertz↔posisjon,
  koblinger til holisme/krise).

#### Kapittel 4.3: Mary Douglas — renhet, fare og klassifikasjon
**id:** `sosant1090-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-4-2`

- **Kapitteltype:** teori.
- **Description:** Mary Douglas' symbolantropologi: urenhet som «matter out of
  place», klassifikasjonssystemer og anomalier — teoretiker-kortsvaret som kom i
  V2026.
- **Eksamensbelegg:** V2026-k2 (Douglas: forurensning); del av symbolsk/tolkende
  ~4 ⭐⭐. Stigende under Rudi. Sjangre: K, L-støtte. Prioritet: **kunne**
  (§7 pkt. 4).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Mary Douglas** → symbolsk
  antropologi (Durkheim-arv) → **renhet/forurensning** (urenhet er ikke hygiene,
  men brudd på kulturens klassifikasjonssystem); **«matter out of place»** (skitt =
  ting på feil sted — jord i hagen er fint, jord på kjøkkenbordet er skittent);
  **anomalier** (det som ikke passer i kategoriene blir tabu eller hellig —
  **pangolinen** som klassisk eksempel: et skjelldyr som bryter kategoriene og
  derfor gis rituell særstatus `(verifiser detalj)`); klassifikasjon som sosialt
  fenomen (kategoriene speiler samfunnet — Durkheim-koblingen).
- **Komparasjonsakser:** (1) **mot Lévi-Strauss (4.1):** begge klassifikasjons-
  tenkere, men Douglas knytter kategoriene til *sosial orden* (Durkheim), ikke
  universelle sinnsstrukturer; (2) **mot Geertz (4.2):** to varianter av symbolsk
  antropologi — mening som tolkning vs. mening som klassifikasjon; (3) **framover
  mot Martin (6.2):** klassifikasjon og kategorier som *makt* — feministisk
  radikalisering av innsikten om at kategorier former hva vi ser.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Douglas med at urenhet er
  'matter out of place'?» på tre nivåer; anvendelse på et hverdagstabu (mat som er
  «ekkel» i én kontekst og delikatesse i en annen) skrevet som toppsvar.
- **Typiske feil:** #4 «matter out of place» som hygiene-/helseforklaring (den
  flate definisjonen); #2 Douglas uten Durkheim-arven og den symbolske vendingen;
  #8 klassifikasjonsteori uten eksempel (pangolin/hverdagstabu).
- **Kvote:** 22 quiz / 24 flashcards (matter out of place, renhet/forurensning,
  anomali/pangolin, klassifikasjon↔sosial orden, Douglas↔posisjon).

**Prøve-kvote Del 4:** 4 prøver (`sosant1090-4-prove`, chapterNumber 4.P):
1. *Symbol-drill:* 12 flervalg (binære opposisjoner, fellesmenneskelig premiss,
   thick description, kultur som tekst, matter out of place, anomali,
   strukturalisme≠strukturfunksjonalisme) + 1 teoretiker-kortsvar (Geertz).
2. *Geertz-kortsvaret (K):* «Hva mener Geertz med tykke beskrivelser?» à
   tre-nivå-mal (fagets sikreste kortsvar — drilles komplett).
3. *Struktur vs. tolkning (L):* Lévi-Strauss og Geertz satt i relasjon om
   kulturbegrepet (komparativ momentliste, #1-vaksine).
4. *Douglas-kortsvar + kobling (K):* «matter out of place» à tre-nivå-mal + løft
   mot Durkheim/Martin (særdeles god-trening).

### Del 5 — Materialistiske retninger: kulturøkologi, marxisme og praksisteori

#### Kapittel 5.1: Kulturøkologi og materialisme — Steward og Rappaport
**id:** `sosant1090-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-2-4`

- **Kapitteltype:** teori.
- **Description:** Den materialistiske linjen: Julian Stewards multilineære
  evolusjon og kulturøkologi, og Roy Rappaports ritualanalyse — kultur som
  tilpasning til miljø og energibehov.
- **Eksamensbelegg:** V2023-k2 (Rappaport), V2024-l3 (holisme-langsvar der
  kulturøkologiens systemholisme er byggekloss), V2026-l1; ~2–3 ⭐. Sjangre: K,
  L-støtte (holisme, evolusjonisme-nyansering). Prioritet: **kjenne** (§7 pkt. 12 —
  perifert, men differensierer i holisme-langsvar).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Julian Steward** →
  kulturøkologi → **multilineær evolusjon** (samfunn utvikler seg langs FLERE
  veier, formet av miljøtilpasning — redder utviklingstanken fra unilineær
  rangering, kobling til 1.1); **kulturøkologi** (kulturens kjerne formet av
  utnyttelsen av miljøet); **Roy Rappaport** → økologisk antropologi →
  **ritualers skjulte funksjon** (ritualer regulerer økologisk balanse —
  grisslakt-syklusene hos maring-folket `(verifiser detalj)` holder forholdet
  mellom folk, gris og land bærekraftig); **systemtenkning fra biologien**
  (energi, proteinbehov, bæreevne); Sørum `(verifiser pensumtekst)`.
- **Komparasjonsakser:** (1) **mot funksjonalismen (2.1):** begge funksjons-
  forklarende, men behov er nå *økologiske/materielle*, ikke sosiale — og samme
  svakhet arves (hvordan forklare endring?); (2) **mot evolusjonismen (1.1):**
  multilineær vs. unilineær — utvikling uten rangering; (3) **mot symbolsk
  antropologi (4.2–4.3):** idealisme/materialisme-aksen i renkultur — betyr
  ritualet noe (Geertz/Douglas) eller GJØR det noe (Rappaport)? Ferdig
  A-komparasjon (utdypes i 9.3).
- **Case-forslag:** analysér et ritual dobbelt — først tolkende (hva betyr det?),
  så økologisk (hva regulerer det?) — og drøft hva hver linse ser og overser
  (idealisme/materialisme-drill).
- **Typiske feil:** #4 blande multilineær og unilineær evolusjon; #1 presentere
  Rappaport og Geertz side om side uten idealisme/materialisme-drøftingen;
  #5 økologisk systemholisme fremstilt som friksjonsfri.
- **Kvote:** 20 quiz / 22 flashcards (multilineær evolusjon, kulturøkologi,
  ritualers skjulte funksjon, bæreevne/system, Steward/Rappaport↔posisjon).

#### Kapittel 5.2: Marxisme og politisk økonomi — Eric Wolf
**id:** `sosant1090-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-5-1`

- **Kapitteltype:** teori.
- **Description:** Den marxistiske antropologien og Eric Wolfs politiske økonomi:
  makt, klasse og kolonial historie inn i analysen — «folkene uten historie» får
  historien tilbake.
- **Eksamensbelegg:** V2021-o2 (Wolf/konflikt mellom klasser, PÅ), V2023-k5
  (Marx/Wolf/Gluckman), V2023-l2, V2025-k3 (politisk økonomi), V2026-l1; ~4–5 ⭐⭐.
  Sjangre: K, L, PÅ. Prioritet: **kunne** (§7 pkt. 7 — høy sannsynlighet,
  differensierer).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Eric Wolf** → marxistisk
  antropologi / politisk økonomi → **politisk økonomi** (kritisk studium av makt i
  økonomiske relasjoner — hvem kontrollerer produksjonen og fordelene?);
  **produksjonsmodus** (måten arbeid og ressurser organiseres på — slektskaps-,
  tributt- og kapitalistisk modus `(verifiser inndeling)`); **historisk analyse**
  (samfunn antropologer studerte var ALLEREDE formet av kolonialisme og
  verdensmarked — ingen «uberørte» lokalsamfunn); **strukturelle skjevheter fra
  kolonitiden** (dagens ulikhet har historiske røtter); **klasse og konflikt**
  (interessemotsetninger som drivkraft — arven fra Marx via Gluckman, 3.1).
- **Komparasjonsakser:** (1) **mot strukturfunksjonalismen (2.2–2.3):** Wolfs
  hovedangrep — «systemene» var aldri lukkede eller tidløse; *The Nuer* re-lest
  med kolonihistorie er en ferdig MONO-kobling; (2) **mot Boas (1.2):**
  partikularisme vs. globale sammenhenger — kulturer henger sammen i ett
  verdenssystem; (3) **mot symbolsk antropologi (4.2):** materialisme vs.
  idealisme — mening eller makt som grunnplan (9.3); (4) **framover mot
  postkolonial kritikk (7.1–7.2) og dark anthropology (7.3):** Wolf som
  forløperen — makt- og kolonialblikket radikaliseres.
- **Case-forslag:** PÅ-drøfting av en nyskrevet Wolf-aktig påstand («historien til
  'isolerte' folk er alltid også historien om deres møte med verdensmarkedet») —
  vis hvor den holder og hvor den må nyanseres; scenariooppgave-byggekloss
  («underutvikling» er skapt historisk, ikke et utviklingstrinn).
- **Typiske feil:** #4 «politisk økonomi» som nøytral samfunnsøkonomi (mister
  makt-/kritikk-dimensjonen); #2 Wolf uten systemtenkningen han korrigerte;
  #1 marxisme presentert uten relasjon til retningene den kritiserte;
  #8 klasseanalyse uten empirisk eksempel.
- **Kvote:** 24 quiz / 26 flashcards (politisk økonomi, produksjonsmodus,
  historisk analyse, koloniale skjevheter, klasse/konflikt, Wolf↔posisjon,
  Wolf↔Nuer-koblingen).

#### Kapittel 5.3: Bourdieu og praksisteorien
**id:** `sosant1090-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-5-2`, `sosant1090-3-2`

- **Kapitteltype:** teori.
- **Description:** Pierre Bourdieus praksisteori: symbolsk makt og kapitalformer —
  hvordan ulikhet reproduseres uten å gjenkjennes som urettferdig. Nytt
  teoretiker-kortsvar i V2026, sannsynlig gjenganger.
- **Eksamensbelegg:** V2026-k4 (Bourdieu: symbolsk makt) — ⭐ men **stigende**
  under Rudi. Sensormerknad gjengitt i analysen: «særdeles gode besvarelser vil
  diskutere med eksempler fra andre deler av pensum siden Bourdieu selv gir ganske
  få» — dvs. løftet ligger i EGNE koblinger. Sjangre: K, L-støtte
  (aktør/struktur). Prioritet: **kjenne/stigende** (§7 pkt. 14).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Pierre Bourdieu** →
  praksisteori → **symbolsk makt** (makt som virker ved å bli oppfattet som
  naturlig/legitim — dominansen anerkjennes av dem den rammer); **kapitalformer**
  (økonomisk, kulturell, sosial — og symbolsk kapital som anerkjent form);
  **reproduksjon av ulikhet** (hierarkier videreføres gjennom smak, utdanning og
  «naturlige» kategorier uten åpen tvang); praksisteori som forsøk på å overskride
  **aktør/struktur-dikotomien** (habitus som kroppsliggjort struktur som likevel
  handler `(verifiser om habitus er pensumbegrep)`).
- **Komparasjonsakser:** (1) **mot Barth (3.2):** strategisk aktør, men valgene er
  strukturert av posisjon — Bourdieu som «svar» på aktør/struktur-debatten (9.2);
  (2) **mot Wolf (5.2):** to maktanalyser — åpen økonomisk makt vs. miskjent
  symbolsk makt; (3) **mot Douglas (4.3) og Martin (6.2):** klassifikasjon som
  maktutøvelse — kategoriene som gjør ulikhet «naturlig». Kapitlets eksempelbruk
  skal demonstrere «hent eksempler fra andre deler av pensum»-løftet.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Bourdieu med symbolsk makt?»
  på tre nivåer, der A-versjonen henter eksempel fra en annen del av pensum
  (f.eks. Martins kjønnede vitenskapsspråk som symbolsk makt) — nøyaktig
  sensormerknadens løft.
- **Typiske feil:** #4 symbolsk makt som ren tvang/åpen makt (mister
  miskjennings-poenget); #8 Bourdieu uten eksempler (han gir få selv — hent fra
  pensum); #1 nevne aktør/struktur uten å vise hvordan praksisteorien svarer.
- **Kvote:** 20 quiz / 22 flashcards (symbolsk makt, kapitalformer, reproduksjon,
  miskjenning, aktør/struktur-svaret, Bourdieu↔posisjon).

**Prøve-kvote Del 5:** 4 prøver (`sosant1090-5-prove`, chapterNumber 5.P):
1. *Materialisme-drill:* 12 flervalg (multilineær evolusjon, kulturøkologi,
   ritualers skjulte funksjon, politisk økonomi, produksjonsmodus, symbolsk makt,
   kapitalformer) + 1 teoretiker-kortsvar (Wolf eller Bourdieu).
2. *Idealisme mot materialisme (L):* betyr ritualet noe eller gjør det noe? —
   Rappaport mot Geertz/Douglas i relasjon (komparativ momentliste, #1-vaksine).
3. *Wolf-påstand (PÅ):* nyskrevet påstand om klasse/kolonial historie prøvd og
   nyansert (momentliste; krav: Wolf navngitt + én kontrastretning).
4. *Bourdieu-kortsvar med pensumløft (K):* «symbolsk makt» à tre-nivå-mal der
   særdeles god henter eksempel fra annen del av pensum (sensormerknad-drill).

### Del 6 — Feministisk antropologi

#### Kapittel 6.1: Den feministiske kritikken — kjønn, kropp og fagets blinde flekker
**id:** `sosant1090-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-4-2`

- **Kapitteltype:** teori.
- **Description:** Feministisk antropologi som faghistorisk korreksjon: kjønnsroller
  som sosialt konstruert, kroppen som analytisk objekt, og kritikken av et fag
  skrevet av og om menn.
- **Eksamensbelegg:** Feministisk antropologi ~4 ⭐⭐ (V2024-k5 feministisk teori,
  del av V2022o-o3-klyngen); Scheper-Hughes & Lock V2023-k3-kobling. Sjangre: K, L.
  Prioritet: **kunne** (§7 pkt. 6 — stabil differensierende klynge).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **feministisk antropologi** →
  1970-tallets korreksjon → **kjønnsroller som sosialt konstruert** (variasjon på
  tvers av samfunn viser at kjønnsordninger ikke er naturgitte); **Michelle
  Rosaldo** `(verifiser tekst)` (tidlig feministisk antropologi — hvorfor er
  kvinner underordnet i så mange samfunn, og hva forklarer variasjonen?);
  **Marilyn Strathern** `(verifiser tekst)` (feministisk kritikk av fagets
  kjernekategorier — «kultur», «samfunn», «person» er ikke kjønnsnøytrale);
  **Nancy Scheper-Hughes & Margaret Lock** → **kroppens antropologi** («the
  mindful body» `(verifiser)` — kroppen som individuell, sosial og politisk på én
  gang; kropp og makt); **androsentrisme** (fag som så samfunnet gjennom mannlige
  informanter og mannlige antropologers blikk — «blinde flekker», ikke bare
  manglende kvinner).
- **Komparasjonsakser:** (1) **mot strukturfunksjonalismen (2.2–2.3):** hvem er
  fraværende i «systemet»? Nuer-analysens kvinner som eksempel på androsentrisk
  blindsone `(verifiser)` — ferdig MONO-linse; (2) **mot Barth (3.2):** hvem KAN
  være strategisk aktør? Transaksjonsmodellen forutsetter posisjoner ikke alle
  har; (3) **framover mot Martin (6.2) og representasjonskrisen (7.1):**
  feminismen som en av kildene til den refleksive vendingen (posisjonalitet:
  forskerens kjønn former kunnskapen).
- **Case-forslag:** re-analyser et empirisk eksempel fra en av monografiene med
  feministisk linse (hva ser vi når vi spør hvor kvinnene er?) — MONO-byggekloss;
  kortsvar «hva innebærer en feministisk kritikk av antropologien?» på tre nivåer.
- **Typiske feil:** #4 «feministisk antropologi = å studere kvinner» (mister
  kritikk-av-kategoriene-poenget); #2 feminismen uten fagets androsentriske
  forhistorie; #1 presentere feminismen uten å vise hva den endret i andre
  retninger.
- **Kvote:** 22 quiz / 24 flashcards (sosialt konstruert kjønn, androsentrisme,
  kroppens antropologi, Rosaldo/Strathern/Scheper-Hughes & Lock↔posisjon,
  feministisk MONO-linse).

#### Kapittel 6.2: Emily Martin — metaforer, vitenskap og makt
**id:** `sosant1090-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-6-1`

- **Kapitteltype:** teori.
- **Description:** Emily Martins *The Egg and the Sperm*: hvordan kjønnede metaforer
  i naturvitenskapen naturaliserer kjønnsroller — testet tre ganger og bokas
  sikreste feministiske kortsvar.
- **Eksamensbelegg:** **Testet tre ganger:** V2022o-o3 (Martin/metaforer/makt, L),
  V2023-k3, V2026-k3 (*The Egg and the Sperm*). Sjangre: K (teoretiker-navngitt),
  L. Prioritet: **kunne/perfekt** (§7 pkt. 6 — Martins metaforkritikk er stabil).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Emily Martin**, *The Egg and
  the Sperm* → feministisk vitenskapskritikk → **kjønnet språk i vitenskap**
  (lærebøker beskriver egget passivt/ventende og sædcellene aktive/konkurrerende —
  kjønnsstereotypier projisert inn i biologien); **metaforer som makt** (språket
  fremstiller kulturelle kjønnsroller som naturfakta); **denaturalisering**
  (analysen avslører det «naturlige» som kulturelt — antropologiens kritiske
  grep); implikasjon: **vitenskap er ikke verdinøytral** (bro til 7.1) — selv
  cellebiologi bærer kulturens forestillinger.
- **Komparasjonsakser:** (1) **mot Douglas (4.3):** klassifikasjon former
  persepsjon — Martin viser at også *vitenskapens* kategorier er kulturelle;
  (2) **mot Boas (1.2):** kulturrelativismen anvendt på vår egen vitenskap —
  antropologisk blikk vendt hjemover; (3) **mot representasjonskrisen (7.1):**
  Martins poeng er krisens poeng i miniatyr — beskrivelser er aldri nøytrale;
  (4) **mot Bourdieu (5.3):** kjønnede metaforer som symbolsk makt (ulikhet
  gjort «naturlig»).
- **Case-forslag:** teoretiker-kortsvaret «Hva viser Martin i *The Egg and the
  Sperm*?» på tre nivåer (A-løftet: koble til verdinøytralitet eller symbolsk
  makt); nyskrevet parallell-case — kjønnede metaforer i en annen
  populærvitenskapelig fremstilling, analysert med Martins grep.
- **Typiske feil:** #4 gjengi egg/sæd-eksemplet uten poenget (metaforene
  naturaliserer kjønnsroller); #2 Martin uten den feministiske og refleksive
  konteksten; #1 Martin alene der oppgaven ber om kobling til makt/vitenskapskritikk.
- **Kvote:** 22 quiz / 22 flashcards (kjønnet vitenskapsspråk, metaforer som makt,
  denaturalisering, ikke-verdinøytral vitenskap, Martin↔verk↔posisjon).

**Prøve-kvote Del 6:** 4 prøver (`sosant1090-6-prove`, chapterNumber 6.P):
1. *Feminisme-drill:* 10 flervalg (sosialt konstruert kjønn, androsentrisme,
   kroppens antropologi, kjønnet vitenskapsspråk, denaturalisering) + 1
   teoretiker-kortsvar (Martin).
2. *Martin-kortsvaret (K):* «*The Egg and the Sperm*» à tre-nivå-mal (fast
   kortsvar — drilles komplett med A-løft).
3. *Feministisk re-analyse (MONO):* en monografi-episode re-lest feministisk
   (momentliste — androsentrisme-linsen, #6-vaksine).
4. *Metaforer og makt (L):* «språk former hva som fremstår naturlig» — drøft med
   Martin + Douglas/Bourdieu i relasjon (komparativ momentliste, #1-vaksine).

### Del 7 — Den refleksive og kritiske vendingen

#### Kapittel 7.1: Representasjonskrisen — kan vi representere «den andre»?
**id:** `sosant1090-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `sosant1090-4-2`, `sosant1090-6-2`

- **Kapitteltype:** teori.
- **Description:** 1970–90-tallets representasjonskrise: etnografien som forfattet
  tekst, forskeren som instrument, positivisme-kritikken og refleksivitet/
  posisjonalitet — fagets nest største eksamensklynge starter her.
- **Eksamensbelegg:** Representasjonskrisen roterer kortsvar/langsvar: V2021-o3,
  V2025-l1 (representasjonskrisen, L); verdinøytralitet/positivisme V2024-k2;
  antropologens rolle felt/tekst V2020o-o2. Del av klynge ~9 ⭐⭐⭐. Sjangre: L, K,
  PÅ («forskning er ikke verdinøytral»). Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **representasjonskrisen**
  (1970–90-tallet: tvilen på om antropologen kan representere «den andre»
  sannferdig — og på hvem som har rett til å gjøre det); **George Marcus &
  Michael Fischer** `(verifiser tekst)` → krisens diagnose (etnografi er
  *skrevet* — sjangergrep, utvalg og autoritet former bildet); **James Clifford**
  `(verifiser)` (etnografisk autoritet — «jeg var der» som retorisk konstruksjon);
  **refleksivitet** (forskeren analyserer sin egen rolle i kunnskapsproduksjonen);
  **posisjonalitet** (kunnskapen formes av forskerens ståsted — kjønn,
  nasjonalitet, kolonial posisjon); **positivisme-kritikk / verdinøytralitet**
  (idealet om nøytral observasjon er uoppnåelig — data er alltid situert;
  metodekritikk som FAGHISTORISK tema, ikke metodelære); **forskeren som
  instrument** (personen ER måleinstrumentet — derfor ingen posisjon-fri
  kunnskap).
- **Komparasjonsakser:** (1) **mot Malinowski (2.1):** den autoritative
  «jeg var der»-etnografen mot den selvkritiske — feltarbeidsidealet re-lest som
  retorikk; (2) **mot Geertz (4.2):** Geertz åpnet (etnografi = tolkning), krisen
  radikaliserte (tolkning = posisjon og makt); (3) **mot positivismen/
  strukturfunksjonalismen (2.2):** verdinøytralitet-idealet som selve motparten;
  (4) **fra feminismen (6.1–6.2):** posisjonalitet er den feministiske innsikten
  generalisert.
- **Case-forslag:** PÅ-drøfting «forskning er ikke verdinøytral» — vis hvorfor
  påstanden holder (Martin, posisjonalitet, kolonial kontekst) OG hvor den må
  nyanseres (relativisme-fellen: at kunnskap er situert betyr ikke at alt er like
  gyldig); A-disposisjon for representasjonskrise-langsvaret.
- **Typiske feil:** #4 representasjonskrisen uten den koloniale/refleksive
  dimensjonen (eksplisitt målt flat definisjon); #1 presentere krisen uten å
  relatere den til etnografien den kritiserte; #2 krise uten faghistorisk
  plassering (hva den kom etter, hva den førte til).
- **Kvote:** 26 quiz / 28 flashcards (representasjonskrise m/kolonial+refleksiv
  dimensjon, refleksivitet, posisjonalitet, positivisme/verdinøytralitet,
  etnografisk autoritet, forskeren som instrument, teoretiker↔posisjon).

#### Kapittel 7.2: Postkolonial kritikk — Asad og Abu-Lughod
**id:** `sosant1090-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-7-1`

- **Kapitteltype:** teori.
- **Description:** Fagets koloniale arv (Asad) og Abu-Lughods «write against
  culture»: kritikken av kulturbegrepet som forskjells-maskin, og etnografi om
  det partikulære som svar.
- **Eksamensbelegg:** Abu-Lughod «det partikulære» V2025-k2; «write against
  culture» V2022u-o3; Asad i krise-klyngen (~9 ⭐⭐⭐); kulturbegrep-langsvar
  V2026-l3. Sjangre: K, L. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Talal Asad** `(verifiser
  tekst)` → postkolonial kritikk → **antropologiens koloniale arv** (faget vokste
  fram under og nøt godt av kolonialismen — maktasymmetrien formet både tilgang og
  begreper); **Lila Abu-Lughod** → **«write against culture»** (kulturbegrepet
  fryser forskjell, homogeniserer og lager «oss/dem» — skriv heller om konkrete
  liv); **etnografi om det partikulære** (fortellinger om bestemte personer og
  situasjoner i stedet for generaliserende kultur-portretter — svaret på krisen);
  **«oss/dem»-problemet** (fagets grunnbegreper konstruerer avstand); halvveis
  hjemme-posisjonen (Abu-Lughods egen posisjonalitet `(verifiser detalj)` som
  ressurs i kritikken).
- **Komparasjonsakser:** (1) **mot Boas (1.2):** relativismen radikalisert —
  Boas brukte kulturbegrepet mot rangering, Abu-Lughod viser at også det
  velmente kulturbegrepet lager hierarki; (2) **mot Geertz (4.2):** kultur som
  tekst → men hvem skriver, og med hvilken rett?; (3) **mot Wolf (5.2):** to
  kolonial-kritikker — politisk-økonomisk (strukturer) vs. representasjonell
  (begreper og tekst); (4) **mot Evans-Pritchard (2.3):** *The Nuer* i kolonial
  kontekst som standard MONO-anvendelse.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Abu-Lughod med å skrive mot
  kultur?» på tre nivåer; MONO-byggekloss: re-analyser en monografi-episode med
  Asads koloniale linse (hvordan var tilgangen selv kolonialt muliggjort?).
- **Typiske feil:** #4 «write against culture» som «slutt å studere kultur»
  (poenget er generaliserings- og forskjellskritikken); #2 Asad uten
  fagh.plassering (kolonitidens antropologi); #1 postkolonial kritikk uten
  relasjon til tekstene den kritiserer.
- **Kvote:** 26 quiz / 28 flashcards (kolonial arv, write against culture,
  etnografi om det partikulære, oss/dem, Asad/Abu-Lughod↔verk↔posisjon,
  MONO-koblinger).

#### Kapittel 7.3: Dekolonisering, dark anthropology og fagets samtidskritikk
**id:** `sosant1090-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-7-2`

- **Kapitteltype:** teori.
- **Description:** Den nyeste kritiske bølgen: dekolonisering av akademia
  (Mogstad & Tse), Ortners *Dark Anthropology* og vendingen mot makt, ulikhet og
  eget samfunn.
- **Eksamensbelegg:** Dekolonisering V2024-l1; Ortner-sitat («academic work cannot
  be detached from the conditions of the real world») V2024-l2, PÅ; dark
  anthropology/«oss–dem» V2020u-o2. Del av klynge ~9 ⭐⭐⭐. Sjangre: L, PÅ, K.
  Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Mogstad & Tse** `(verifiser
  tekst)` → dekolonisering → **dekolonisering av akademia** (ikke bare studere
  kolonialisme, men endre fagets egne strukturer: pensum, hvem som siteres, hvem
  som får definere); **«prestisjesoner» / ulik tilgang** (det globale akademia
  er skjevt — teori fra sør marginaliseres `(verifiser begrepsbruk)`); **Sherry
  Ortner**, *Dark Anthropology* → samtidsdiagnose → **dark anthropology**
  (vendingen mot makt, ulikhet, undertrykking og prekaritet som fagets
  hovedtemaer etter 1980-tallet — og spørsmålet om hva som går tapt når alt
  handler om det mørke; «anthropology of the good» som motvekt `(verifiser)`);
  **blikk mot eget samfunn** (antropologi hjemme — «oss» er også felt);
  akademisk arbeid som del av verden (Ortner-påstanden: forskning kan ikke løsrives
  fra sine samfunnsbetingelser).
- **Komparasjonsakser:** (1) **mot Asad/Abu-Lughod (7.2):** fra kritikk av
  representasjon til krav om institusjonell endring — dekolonisering som
  praktisk radikalisering; (2) **mot Wolf (5.2):** dark anthropology som arving
  av den politiske økonomien (makt/ulikhet), nå med refleksiv selvbevissthet;
  (3) **mot Malinowski/Boas (2.1/1.2):** hele tidslinjen sett bakfra — hva
  dekoloniseringsblikket gjør med fagets klassikere (beholde, re-lese eller
  forkaste?); (4) **mot funksjonalismens harmoni (2.2):** mørke vs. likevekt som
  grunnstemning — faghistorisk pendelsving.
- **Case-forslag:** PÅ-drøfting av en nyskrevet Ortner-aktig påstand (akademisk
  arbeid kan ikke løsrives fra verden) — prøv den MED (posisjonalitet, kolonial
  arv, finansiering) og nyanser (fagets kritiske verdi forutsetter en viss
  autonomi); L-disposisjon «hva vil det si å dekolonisere antropologien?» med
  to+ retninger i relasjon.
- **Typiske feil:** #4 «dekolonisering» som slagord uten institusjons-innholdet;
  #1 presentere Ortner/Mogstad & Tse uten å koble dem til faghistorien de
  responderer på; #7 ensidig — bare kritikk uten drøfting av hva klassikerne
  fortsatt gir.
- **Kvote:** 24 quiz / 26 flashcards (dekolonisering av akademia, prestisjesoner,
  dark anthropology, blikk mot eget samfunn, Ortner-påstanden,
  Mogstad & Tse/Ortner↔posisjon).

**Prøve-kvote Del 7:** 4 prøver (`sosant1090-7-prove`, chapterNumber 7.P):
1. *Krise-drill:* 12 flervalg (representasjonskrise, refleksivitet, posisjonalitet,
   verdinøytralitet, write against culture, det partikulære, dark anthropology,
   dekolonisering) + 1 teoretiker-kortsvar (Abu-Lughod).
2. *Representasjonskrisen (L):* fullt langsvar-momentliste med to+ retninger i
   relasjon (Malinowski/Geertz mot krisen) + faghistorisk plassering (#1/#2-vaksine).
3. *«Forskning er ikke verdinøytral» (PÅ):* påstandsdrøfting med Martin + krise +
   nyansering (momentliste).
4. *Klassikerne i lys av kritikken (MONO):* *The Nuer* ELLER *Swat Pathans*
   re-analysert postkolonialt/dekolonialt (momentliste — «beholde, re-lese eller
   forkaste»-drøfting, #6-vaksine).

### Del 8 — Fenomenologi, globalisering og samtid

#### Kapittel 8.1: Ingold og fenomenologien — dwelling og levd erfaring
**id:** `sosant1090-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-4-1`

- **Kapitteltype:** teori.
- **Description:** Tim Ingolds fenomenologiske antropologi: dwelling-perspektivet,
  å studere ting slik de erfares, og oppløsningen av natur/kultur-skillet.
- **Eksamensbelegg:** Ingold/dwelling V2023-k4, V2024-k3 (fenomenologi); Ingold-
  sitat («life … is always going on») V2022u-o2, PÅ; ~3 ⭐⭐. Sjangre: K
  (teoretiker-navngitt), PÅ, L-støtte (prosess). Prioritet: **kunne** (§7 pkt. 9).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Tim Ingold** → fenomenologisk
  antropologi → **dwelling-perspektivet** (mennesket er alltid allerede *i*
  verden — kunnskap og form vokser fram gjennom praktisk engasjement med
  omgivelsene) vs. **building-perspektivet** (idéen om at mennesket først planlegger
  mentalt og så påfører verden form); **å studere ting slik de erfares** (levd
  erfaring før abstrakte modeller); **tenkning som følger av interaksjon med
  omgivelsene** (ferdigheter læres i praksis, ikke som overførte «kulturelle
  oppskrifter»); **prosess og forbindelse** (livet pågår alltid — verden er
  bevegelse, ikke ferdige objekter); **natur/kultur-skillet oppløst** (organisme
  og miljø er ett system).
- **Komparasjonsakser:** (1) **mot strukturalismen (4.1) og Geertz (4.2):**
  fenomenologiens hovedangrep — mening sitter ikke i mentale strukturer eller
  symbolvev, men i kroppslig praksis; (2) **mot funksjonalismens system (2.2)
  og holismen (2.4):** prosess/tilblivelse vs. avgrenset helhet — «ting henger
  ikke sammen som system, de pågår»; (3) **mot kulturøkologien (5.1):** begge tar
  miljøet på alvor, men Rappaport måler energisystemer utenfra, Ingold følger
  erfaringen innenfra.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Ingold med
  dwelling-perspektivet?» på tre nivåer (A-løft: sett mot building/strukturalisme);
  PÅ-drøfting av en nyskrevet Ingold-aktig påstand om at livet alltid pågår
  (prosess mot system).
- **Typiske feil:** #4 dwelling uten kontrasten til building (definisjonen mister
  poenget); #1 fenomenologien uten relasjon til retningene den kritiserer;
  #8 abstrakt erfaringsfilosofi uten konkret eksempel (håndverkslæring, sti-gåing).
- **Kvote:** 22 quiz / 24 flashcards (dwelling/building, levd erfaring, tenkning
  av interaksjon, prosess/forbindelse, natur/kultur-oppløsning, Ingold↔posisjon).

#### Kapittel 8.2: Appadurai, globalisering og antropocen — faget i samtiden
**id:** `sosant1090-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-5-2`, `sosant1090-7-3`

- **Kapitteltype:** teori.
- **Description:** Arjun Appadurais globaliseringsantropologi (-scapes,
  deterritorialisering, disjunctures) og antropocen (Mathews) — tidslinjens
  siste ledd og et stigende kortsvarstema under Rudi.
- **Eksamensbelegg:** Appadurai V2025-k5 (global flyt/deterritorialisering),
  V2026-k5 (global flyt); samtid/endring V2023-l2; antropocen (Mathews) i
  samtidsklyngen; ~2–3 ⭐⭐ **stigende**. Sjangre: K (teoretiker-navngitt),
  L-støtte. Prioritet: **kunne/stigende** (§7 pkt. 11).
- **Begrepskontrakt (teoretiker↔verk↔posisjon):** **Arjun Appadurai** →
  globaliseringsantropologi → **global flyt** (mennesker, medier, teknologi,
  kapital og ideer i bevegelse); **de fem -scapes** (ethnoscapes, mediascapes,
  technoscapes, financescapes, ideoscapes — landskap av flyt som ser ulike ut
  fra ulike ståsteder); **deterritorialisering** (kultur løsrives fra sted — men
  betyr IKKE homogenisering: det globale approprieres lokalt); **disjunctures**
  (flytene er usammenhengende — økonomi, medier og mennesker beveger seg i utakt);
  sentrum–periferi-kritikk (flyt går ikke bare fra Vesten og ut); **Mathews**
  `(verifiser tekst)` → **antropocen** (mennesket som geologisk kraft — antropologiens
  svar på klimakrisen; flerartede landskap og ruiner av kapitalisme
  `(verifiser detalj)`).
- **Komparasjonsakser:** (1) **mot Wolf (5.2):** to globaliseringsanalyser —
  verdenssystem/produksjon vs. flyt/forestilling; Appadurai kritiserer
  sentrum–periferi-modellen; (2) **mot Boas' og funksjonalismens stedbundne
  kultur (1.2/2.1):** deterritorialisering opphever «ett folk, ett sted, én
  kultur»-premisset hele den tidlige faghistorien delte; (3) **mot
  evolusjonismen (1.1) i scenariooppgaven:** global samtidighet vs.
  utviklingsstige; (4) **antropocen mot natur/kultur-skillet (8.1):** klimakrisen
  gjør Ingold-poenget planetært.
- **Case-forslag:** teoretiker-kortsvaret «Hva mener Appadurai med
  deterritorialisering?» på tre nivåer (A-løft: ≠ homogenisering + kritikken av
  sentrum–periferi); anvendelse: analyser et globalt fenomen (en musikksjanger,
  en matrett, en protestbevegelse) med -scapes og disjunctures.
- **Typiske feil:** #4 deterritorialisering = homogenisering (den eksplisitt målte
  feilen); #4b -scapes ramset opp uten ståsteds-poenget; #2 Appadurai uten
  faghistorisk plassering (bruddet med stedbundet kulturbegrep);
  #1 samtidsantropologi uten relasjon bakover i tidslinjen.
- **Kvote:** 24 quiz / 26 flashcards (global flyt, de fem -scapes,
  deterritorialisering≠homogenisering, disjunctures, antropocen,
  Appadurai/Mathews↔posisjon).

**Prøve-kvote Del 8:** 4 prøver (`sosant1090-8-prove`, chapterNumber 8.P):
1. *Samtids-drill:* 10 flervalg (dwelling/building, prosess, global flyt, -scapes,
   deterritorialisering, disjunctures, antropocen) + 1 teoretiker-kortsvar
   (Ingold eller Appadurai).
2. *Ingold-kortsvar + påstand (K/PÅ):* dwelling à tre-nivå-mal + kort drøfting av
   prosess-påstand mot systemtenkning.
3. *Appadurai-kortsvaret (K):* deterritorialisering à tre-nivå-mal
   (homogeniserings-fellen drilles eksplisitt).
4. *Tidslinjen lukkes (L):* «hvordan har fagets kulturbegrep endret seg fra Boas
   til Appadurai?» — komparativ momentliste over tre+ nedslag i tidslinjen
   (#1/#2-vaksine, trener faghistorisk plassering som ferdighet).

### Del 9 — Tverrgående akser (komparasjonskapitlene)

> **Delens funksjon (sensornøkkelen operasjonalisert):** A/B krever at retninger
> settes i relasjon. Disse fire kapitlene ER relasjonene — de tverrgående aksene
> sensor bruker som komparative rammer. Hvert aksekapittel: `tip` Eksamensvinkel →
> `text` aksen forklart → `text` **retningene plassert på aksen** (tabell:
> retning → posisjon → hva den ser / overser) → `example` 1–2 gjennomskrevne
> A-nivå essaydisposisjoner langs aksen → `warning` typiske feil → `exercise`
> ×4–6 → `collapsible` aksekart (flashcard-råstoff). Kapitlene gjenbruker
> teorikapitlenes stoff — de tilfører RELASJONEN, ikke ny teori.

#### Kapittel 9.1: Synkron/diakron — system, prosess og samfunnsendring
**id:** `sosant1090-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-3-2`, `sosant1090-8-2`

- **Kapitteltype:** akse (komparasjon).
- **Description:** Fagets meta-akse: synkron analyse (samfunn som fungerende system
  nå) mot diakron (endring over tid) — den organiserende logikken i alle
  samfunnsendrings-langsvar.
- **Eksamensbelegg:** Eksplisitt kortsvar V2024-k1 (synkron/diakron); organiserende
  logikk i endrings-langsvarene (V2020u-o1, V2021-o1, V2022o-o1, V2022u-o2,
  V2023-l2) — klynge ~6 ⭐⭐⭐. Sjangre: K, L. Prioritet: **perfekt** (§7 pkt. 3+5).
- **Begrepskontrakt:** **synkron analyse** (samfunn studert som fungerende helhet
  på ett tidspunkt — strukturfunksjonalismens grep) vs. **diakron analyse**
  (endring over tid som analyseobjekt); **system vs. prosess** (er samfunn en
  vedvarende orden eller en pågående bevegelse?); pendelbevegelsen i faghistorien
  (Boas diakron → funksjonalismen synkron → Manchester/Barth diakron →
  Lévi-Strauss synkron → Wolf historisk → Ingold prosess).
- **Akseplassering (tabell i kapitlet):** Boas (diakron kulturhistorie) ·
  Malinowski/Radcliffe-Brown/Evans-Pritchard (synkront system) · Gluckman/Barth/
  Leach (diakron prosess/aktør) · Lévi-Strauss (synkrone dypstrukturer) · Wolf
  (diakron politisk-økonomisk historie) · Ingold (prosess/tilblivelse) ·
  Appadurai (flyt i samtid). Hver med «ser / overser».
- **Case-forslag:** to gjennomskrevne A-disposisjoner: (1) «Hvordan forstår
  antropologer samfunnsendring?» (strukturfunksjonalisme mot Manchester/Barth mot
  Wolf, med empiriske nedslag); (2) kortsvaret «Hva menes med synkron og diakron
  analyse?» på tre nivåer.
- **Typiske feil:** #4 synkron/diakron byttet om eller upresist; #1 nevne aksen
  uten å BRUKE den komparativt; #7 utdype bare systemsiden i en endringsoppgave.
- **Kvote:** 18 quiz / 18 flashcards (synkron/diakron, system/prosess,
  retning↔akseposisjon, pendelbevegelsen, ser/overser-par).

#### Kapittel 9.2: Aktør/struktur — hvem handler, hva begrenser?
**id:** `sosant1090-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-9-1`, `sosant1090-5-3`

- **Kapitteltype:** akse (komparasjon).
- **Description:** Forklarer vi sosialt liv fra strukturenes tvang eller aktørenes
  valg — og hva et menneske/en person ER i hver modell.
- **Eksamensbelegg:** V2020o-o1 (menneskesyn/person), V2022u-o1 (strukturer og
  nettverk som begrensende/muliggjørende), V2023-l3 (aktør/person) — klynge ~3 ⭐⭐;
  Bourdieu V2026-k4 som aksens «svar». Sjangre: L, K. Prioritet: **kunne**
  (§7 pkt. 3-tilgrensende; menneskesyn-langsvar).
- **Begrepskontrakt:** **struktur** (mønstre som former og begrenser handling) vs.
  **aktør** (individet som velger og handler strategisk); **person/menneskesyn**
  (hva slags menneske hver retning forutsetter: strukturbærer, behovsvesen,
  kalkulerende strateg, meningsfortolker, kroppslig erfarer); **begrensende OG
  muliggjørende** (strukturer stenger og åpner samtidig — nøkkelformuleringen fra
  eksamen); Bourdieus praksisteori og nettverkstenkning (Lien/ANT `(verifiser)`)
  som forsøk på å overskride dikotomien.
- **Akseplassering:** Radcliffe-Brown/Evans-Pritchard (struktur) · Malinowski
  (individ med behov) · Barth (aktør/transaksjon) · Lévi-Strauss (dypstruktur —
  aktøren nesten borte) · Geertz (fortolkende aktør i offentlig meningsvev) ·
  Bourdieu (habitus/praksis — begge deler) · Ingold (person som tilblivelse i
  omgivelser). Hver med «ser / overser».
- **Case-forslag:** A-disposisjon «Diskuter hvordan ulike retninger har forstått
  forholdet mellom individ og samfunn» (Evans-Pritchard mot Barth mot Bourdieu,
  med *The Nuer*/*Swat Pathans* som empiripar — de to monografiene som ferdig
  akse-komparasjon).
- **Typiske feil:** #7 utdype bare aktør- eller struktursiden; #1 tre menneskesyn
  presentert uten innbyrdes drøfting; #4 «struktur» brukt likt om sosial struktur
  (2.2) og dypstruktur (4.1) — presisjonsfellen.
- **Kvote:** 16 quiz / 18 flashcards (aktør/struktur, person/menneskesyn per
  retning, begrensende/muliggjørende, dikotomi-overskridelsene,
  retning↔akseposisjon).

#### Kapittel 9.3: Idealisme/materialisme — mening eller materie?
**id:** `sosant1090-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-9-1`

- **Kapitteltype:** akse (komparasjon).
- **Description:** Forklarer vi kultur ut fra mening/symboler (idealisme) eller
  økologi/økonomi/makt (materialisme) — aksen som organiserer midtdelen av
  tidslinjen.
- **Eksamensbelegg:** Bærende i funksjonsforklarings-langsvaret (V2022o-o2:
  funksjonsforklaringer i lys av nyere perspektiver), Rappaport-kortsvaret
  (V2023-k2), Wolf-klyngen (~4–5 ⭐⭐). Sjangre: L, K-støtte. Prioritet: **kunne**.
- **Begrepskontrakt:** **idealisme** (mening, symboler og forestillinger som
  kulturens kjerne — Geertz, Douglas, Lévi-Strauss) vs. **materialisme** (miljø,
  teknologi, økonomi og makt som grunnplan — Steward, Rappaport, Wolf, delvis
  Bourdieu); **funksjonsforklaringens problem** (både økologiske og sosiale
  funksjonsforklaringer forklarer bestående orden, ikke endring — og kan ikke
  falsifiseres lett); mening OG makt (nyere posisjoner nekter å velge: Martin
  viser at symboler ER makt).
- **Akseplassering:** Lévi-Strauss/Geertz/Douglas (idealisme) · Steward/Rappaport
  (økologisk materialisme) · Wolf (politisk-økonomisk materialisme) · Bourdieu/
  Martin (symbolsk makt — aksen kollapser) · Ingold (avviser dikotomien: erfaring
  er begge). Hver med «ser / overser».
- **Case-forslag:** A-disposisjon «Diskuter funksjonsforklaringer i lys av nyere
  perspektiver» (Rappaport/Radcliffe-Brown mot Manchester/Wolf/Geertz — det
  faktiske V2022-langsvaret omskrevet som treningscase); dobbeltanalysen av et
  ritual (mening vs. regulering) fra 5.1 gjenbrukt som eksamensdisposisjon.
- **Typiske feil:** #1 presentere idealisme og materialisme uten å la dem MØTES
  på et case; #7 ensidig; #4 «materialisme» som grådighet/forbruk
  (hverdagsbetydningen) i stedet for analytisk posisjon.
- **Kvote:** 16 quiz / 18 flashcards (idealisme/materialisme, funksjonsforklaring,
  mening↔makt, retning↔akseposisjon, ser/overser-par).

#### Kapittel 9.4: Holisme og «oss/dem» — idealenes grenser
**id:** `sosant1090-9-4` · **number:** 9.4 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-9-1`, `sosant1090-7-3`

- **Kapitteltype:** akse (komparasjon).
- **Description:** De to store selvkritikk-aksene samlet: holisme som uoppnåelig
  ideal (på tvers av retningene) og «oss/dem»-konstruksjonen fra evolusjonismen
  til dekoloniseringen — toppsvar-materialet for de to vanligste langsvarene.
- **Eksamensbelegg:** Holisme-langsvar V2024-l3, V2026-l2 (jf. 2.4); «oss/dem»/
  dark anthropology V2020u-o2; kulturbegrep-langsvar V2026-l3; representasjons-
  klyngen ~9 ⭐⭐⭐. Sjangre: L, PÅ. Prioritet: **perfekt** (§7 pkt. 1+2 — begge
  topptemaer ender her).
- **Begrepskontrakt:** **holisme på tvers** (funksjonalismens systemholisme →
  kulturøkologiens økosystemholisme → Geertz' detalj/helhet-veksling → kritikkene:
  Manchester [endring], fenomenologi [prosess], krise [posisjonalitet]) — samlet
  til den ferdige «holisme som ideal»-tesen fra 2.4; **«oss/dem»-aksen**
  (evolusjonismens hierarki → Boas' relativisme → kulturbegrepets skjulte
  forskjells-produksjon [Abu-Lughod] → dekolonisering og blikk mot eget samfunn) —
  fagets selvforståelse som utviklingsforløp; faghistorisk plassering som
  FERDIGHET (enhver retning: hva reagerte den på → hva så den → hva overså den →
  hvem svarte).
- **Akseplassering:** to tabeller — (1) retningenes holismeversjoner med grenser;
  (2) «oss/dem»-håndteringen fra Tylor til Mogstad & Tse.
- **Case-forslag:** to gjennomskrevne A-disposisjoner: (1) holisme-langsvaret
  komplett (idealet, to+ versjoner, kritikkene, nyansert konklusjon — utvidelsen
  av 2.4-malen); (2) «diskuter hvordan antropologien har håndtert skillet mellom
  'oss' og 'dem'» (evolusjonisme → Boas → Abu-Lughod → dekolonisering, med
  empiriske nedslag).
- **Typiske feil:** #5 holisme som oppnåelig; #1 tidslinje-referat uten drøfting
  («og så kom … og så kom …» — kronologi er IKKE relasjon); #2 «oss/dem» uten
  faghistorisk forankring i konkrete retninger.
- **Kvote:** 16 quiz / 18 flashcards (holismeversjoner m/grenser,
  oss/dem-utviklingen, faghistorisk plassering som ferdighet,
  retning↔akseposisjon).

**Prøve-kvote Del 9:** 4 prøver (`sosant1090-9-prove`, chapterNumber 9.P):
1. *Akse-drill:* 12 flervalg (synkron/diakron, aktør/struktur, idealisme/
   materialisme, retning→akseposisjon-koblinger) + 1 kortsvar (synkron/diakron
   med retningseksempler).
2. *Samfunnsendring (L):* fullt langsvar-momentliste med tre retninger i relasjon
   langs synkron/diakron-aksen (#1-vaksine).
3. *Menneskesyn (L):* individ/samfunn-langsvar med *The Nuer* og *Swat Pathans*
   som empiripar (momentliste — monografiene som akse-komparasjon).
4. *Holisme og «oss/dem» (L):* ett av de to store langsvarene i full
   A/C/E-momentliste (roterer; #5- og #1-vaksine).

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Sjanger — teoretiker-kortsvaret (Del 1)
**id:** `sosant1090-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `sosant1090-0-2`

- **Kapitteltype:** sjanger (K).
- **Description:** Kortsvaret «Hva mener X med Y?» som håndverk på tvers av hele
  teoretiker-banken: firetrinnsstrukturen, tidsbudsjett og utvalgsstrategi.
- **Eksamensbelegg:** Del 1 i alle sett V2023→ (2 av 5, 25 %). V2025–V2026-malen
  (teoretiker-navngitt) er den prognostisk relevante: Boas, Geertz, Appadurai,
  Bourdieu, Douglas, Martin, Malinowski, Abu-Lughod, Ingold, Rappaport, Wolf.
  Prioritet: perfekt.
- **Innhold:** Firetrinnsoppskriften fra 0.2 operasjonalisert på tvers av
  teoretiker-banken (definisjon → faghistorisk plassering → eksempel → løft).
  Tidsbudsjett ~18 min × 2. Utvalgsstrategi (velg de to du kan PLASSERE, ikke bare
  definere). Teoretiker-bank-tabellen: hver kjerneteoretiker med sitt mest
  sannsynlige kortsvarsbegrep + standardeksempel + standardløft. Gjennomskrevet
  eksempel med margkommentarer: ett kortsvar (Douglas) på god- og særdeles
  god-nivå side om side. 5 nyskrevne øvingskortsvar (Boas, Geertz, Bourdieu,
  Appadurai, Martin) med tre-nivå-momentlister.
- **Typiske feil:** #4 flat definisjon; #2 uten plassering; #3 uten navngiving;
  #10 for mye tid på Del 1.
- **Kvote:** 14 quiz / 11 flashcards (firetrinnene per teoretiker,
  utvalgsstrategi, standardløft-koblinger).

#### Kapittel 10.2: Sjanger — det komparative langsvaret (Del 2, 75 %)
**id:** `sosant1090-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `sosant1090-0-3`, `sosant1090-9-4`

- **Kapitteltype:** sjanger (L — **bokas viktigste sjangerkapittel**).
- **Description:** Langsvaret som bærer eksamen: femtrinnsstrukturen, valg av
  komparasjonsakse, og C→A-løftet (redegjørelse → drøfting) trinn for trinn.
- **Eksamensbelegg:** Del 2 i alle sett (1 av 3, 75 %). Sensornøkkelen ordrett:
  kun presentasjon uten innbyrdes diskusjon = C–D; A/B = tekster i relasjon +
  faghistorisk plassering + selvstendig kurs. Langsvarene er med vilje åpne;
  kreative koblinger «vel så bra» som de foreslåtte. Prioritet: perfekt.
- **Innhold:** Femtrinnene fra 0.3 (begrepsavklaring → egen analytisk tråd →
  to+ retninger i RELASJON → empiriske eksempler → selvstendig konklusjon) +
  tidsbudsjett (~3,5 t). **Akse-velgeren:** gitt en oppgave, hvilken av de fire
  aksene (Del 9) bærer den? (endring → 9.1; person → 9.2; funksjonsforklaring →
  9.3; holisme/kulturbegrep → 9.4). **C→A-verkstedet:** samme avsnitt skrevet
  redegjørende (C) og drøftende (A) side om side — tre par, med
  margkommentarer som viser nøyaktig hvilke grep som løfter (relasjonsord,
  «mens X ser…, overser han…», plasseringssetninger). Gjennomskrevet eksempel:
  full A-disposisjon for et endringslangsvar. 4 nyskrevne øvings-langsvar
  (samfunnsendring, holisme, kulturbegrepet, representasjonskrisen) med
  momentliste + disposisjon (ikke fullt essay).
- **Typiske feil:** #1 (hovedfeilen — drilles hardest); #2 uten plassering;
  #7 ensidig; #8 uten eksempler.
- **Kvote:** 14 quiz / 11 flashcards (femtrinnene, akse-velgeren, C→A-grep,
  relasjonsformuleringer).

#### Kapittel 10.3: Sjanger — monografi-langsvaret (MONO)
**id:** `sosant1090-10-3` · **number:** 10.3 · **estimatedMinutes:** 45 · **prerequisites:** `sosant1090-2-3`, `sosant1090-3-2`, `sosant1090-10-2`

- **Kapitteltype:** sjanger (MONO) — **⚠ utgavesensitiv** (jf. 2.3/3.2).
- **Description:** Langsvaret som tar utgangspunkt i én obligatorisk monografi og
  re-analyserer den gjennom en nyere retning: kobling, ikke sammendrag.
- **Eksamensbelegg:** Type C i analysen §3: fra V2023 kan langsvar kreve monografi
  i lys av nyere perspektiver; fra V2026 kan «én av de obligatoriske monografiene»
  kreves i alle langsvar. Kravet er KOBLING (velg empirisk eksempel fra
  monografien, analyser på nytt gjennom nyere linse), ikke referat. Prioritet:
  perfekt (§7 pkt. 10).
- **Innhold:** Oppskrift: velg monografi + velg linse (postkolonial, feministisk,
  marxistisk, aktør-) → velg ETT konkret empirisk parti → vis originalanalysen →
  re-analyser gjennom linsen → drøft hva linsen ser og hva som går tapt →
  konkluder om monografiens verdi i dag. **Linse-matrisen:** *The Nuer* ×
  {postkolonial, feministisk, politisk-økonomisk, aktør} og *Swat Pathans* ×
  {feministisk, marxistisk, postkolonial} — 7 ferdige koblingsskisser i
  stikkordsform. ⚠-note: sjekk gjeldende monografiliste. Gjennomskrevet eksempel
  med margkommentarer: *The Nuer* re-analysert postkolonialt. 3 nyskrevne
  MONO-oppgaver med momentlister.
- **Typiske feil:** #6 referat uten re-analyse (sjangerens kjernefeil);
  #7 utdype bare monografien eller bare linsen; #8 re-analyse uten konkret
  empirisk parti.
- **Kvote:** 12 quiz / 8 flashcards (MONO-oppskriften, linse-matrisen,
  koblingskravet, ⚠ monografisjekk).

#### Kapittel 10.4: Sjanger — påstands- og scenariooppgaven (PÅ/SCEN)
**id:** `sosant1090-10-4` · **number:** 10.4 · **estimatedMinutes:** 45 · **prerequisites:** `sosant1090-10-2`

- **Kapitteltype:** sjanger (PÅ + SCEN).
- **Description:** Å prøve en påstand (Ortner, Ingold, Wolf, verdinøytralitet) og
  å svare på scenariorammer («onkelen i bilen») — de to åpne langsvarvariantene.
- **Eksamensbelegg:** PÅ: V2024-l2 (Ortner-sitat), V2021-o2 (Wolf), V2022u-o2
  (Ingold), V2024-k2 (verdinøytralitet). SCEN: V2026-l1 (hverdagsscenario →
  evolusjonisme-tilbakevisning) — ny under Rudi, faglig innhold er standard
  faghistorie. Prioritet: kunne.
- **Innhold:** PÅ-oppskrift: pakk ut påstanden → vis hvor den holder (med
  retninger/empiri) → vis hvor den må nyanseres → konkluder selvstendig (aldri
  ren bekreftelse eller avvisning). SCEN-oppskrift: identifiser det faglige
  spørsmålet bak hverdagsrammen → oversett til faghistorie → svar med to+
  retninger i relasjon (scenariet er bare innpakning — sensornøkkelen gjelder
  fortsatt). Gjennomskrevet eksempel: scenariooppgave besvart (lineær
  utviklingstenkning tilbakevist med Boas + Lévi-Strauss + Wolf i relasjon).
  4 nyskrevne oppgaver (2 PÅ + 2 SCEN) med momentlister.
- **Typiske feil:** #1 bekrefte påstanden mekanisk uten å prøve den; #7 bare
  medhold eller bare motargument; SCEN-fellen: svare hverdagslig uten faglig
  oversettelse (#3 ingen navngitte forfattere).
- **Kvote:** 12 quiz / 8 flashcards (PÅ-oppskriften, SCEN-oversettelsen,
  nyanseringsgrep, påstand↔teoretiker-bank).

#### Kapittel 10.5: Feilvaksinen — de ti feilene som senker karakteren
**id:** `sosant1090-10-5` · **number:** 10.5 · **estimatedMinutes:** 50 · **prerequisites:** Del 0–9

- **Kapitteltype:** sjanger (tverrgående drillkapittel — utvidelse av DNA-malen,
  presedens sosant1000 kap. 9.5; begrunnet i analysens §5-katalog).
- **Description:** Alle ti sensordokumenterte feil drillet med
  før/etter-omskrivinger og gjenkjenningsoppgaver — med C→A-løftet (#1) som
  hoveddrill.
- **Eksamensbelegg:** Analysen §5 komplett; #1 (oppramsing uten drøfting) er den
  definerende feilen med automatisk C–D-tak; #9 (formelle krav) er strykfellen;
  #10 (tidsbruk) straffer 25/75-vektingen. Prioritet: perfekt (feilunngåelse er
  karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen som sensor ser den, (b) nyskrevet
  «slik ser den ut»-utdrag, (c) omskrevet A-versjon, (d) varsellampe-heuristikk.
  Sentrale før/etter-par: teoripresentasjon side om side → satt i relasjon (#1 —
  tre par, hoveddrillen); definisjon uten kontekst → med faghistorisk plassering
  (#2); «mange mener» → navngitte forfattere (#3); flat → presis definisjon (#4);
  harmonisk holisme → ideal med grenser (#5); monografireferat → re-analyse (#6);
  ensidig → toveis komparasjon (#7); abstrakt → eksemplifisert (#8). Driller
  gjenkjenning («hvilken feil begår denne kandidaten?» — flervalgsformat).
- **Typiske feil:** kapitlet ER feilene.
- **Kvote:** 16 quiz / 9 flashcards (feil↔riktig-omskrivingspar,
  feilgjenkjenning, varsellamper).

#### Kapittel 10.6: Modellbesvarelse — teoretiker-kortsvar (K, tre nivåer)
**id:** `sosant1090-10-6` · **number:** 10.6 · **estimatedMinutes:** 40 · **prerequisites:** `sosant1090-10-1`

- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** kortsvar (K) — Del 1, teoretiker-navngitt (V2025/V2026-malen).
- **Tema/oppgave (nyskrevet):** «Hva mener Geertz med tykke beskrivelser, og
  hvorfor mente han det var viktig?»
- **Karakternivåer:** **A/særdeles god** i full tekst med margnotater («her:
  definisjon med kontekst-poenget», «her: faghistorisk plassering — alternativ til
  positivistisk observasjon», «her: blunk-eksemplet», «her: løft — kobling til
  representasjonskrisen, dette gir særdeles god») + **C/god** (korrekt definisjon
  og eksempel, men ingen faghistorisk plassering og intet løft) + **E/minimum**
  (bare en omtrentlig definisjon uten kontekst-poenget). Avsluttes med `tip`
  **Sensorblikket**: tre-nivå-graderingen og de fem aksene anvendt på akkurat
  dette svaret.
- **Typiske feil demonstrert i C/E-versjonene:** #4, #2.
- **Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 10.7: Modellbesvarelse — komparativt langsvar (L, tre nivåer)
**id:** `sosant1090-10-7` · **number:** 10.7 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-10-2`

- **Kapitteltype:** modellbesvarelse (**bokas viktigste modellkapittel** — 75 %-
  sjangeren med C→A-løftet demonstrert i full tekst).
- **Oppgavesjanger:** langsvar (L) — Del 2, komparativt faghistorisk essay.
- **Tema/oppgave (nyskrevet):** «Diskuter holismebegrepet med henvisning til to
  eller flere retninger i antropologihistorien.»
- **Karakternivåer:** **A** i full tekst med margnotater (holisme avklart som
  ideal; funksjonalismens holisme [Malinowski/Evans-Pritchard] mot
  kulturøkologiens [Rappaport]; kritikkene [Manchester: endring; fenomenologi:
  prosess; krise: posisjonalitet] satt i relasjon; empiriske nedslag; nyansert
  konklusjon — «her: relasjonsgrepet, dette løfter til A», «her: faghistorisk
  plassering») + **C** (samme retninger korrekt PRESENTERT side om side, men
  aldri diskutert opp mot hverandre — margnotatene viser nøyaktig hvor
  C-besvarelsen stopper og hva som mangler: sensornøkkelen demonstrert) +
  **E/minimum** (én retning gjengitt omtrentlig, ingen komparasjon, ingen
  eksempler). Sensorblikket: de fem aksene + hvorfor C-versjonen treffer
  C–D-taket ordrett etter veiledningslogikken.
- **Typiske feil demonstrert i C/E-versjonene:** #1 (hoveddemonstrasjonen), #5, #8.
- **Kvote:** 6 quiz / 5 flashcards.

#### Kapittel 10.8: Modellbesvarelse — monografi-langsvar (MONO, tre nivåer) ⚠
**id:** `sosant1090-10-8` · **number:** 10.8 · **estimatedMinutes:** 50 · **prerequisites:** `sosant1090-10-3`

- **Kapitteltype:** modellbesvarelse — **⚠** bygges på *The Nuer*; sjekk gjeldende
  pensum.
- **Oppgavesjanger:** monografi-langsvar (MONO) — obligatorisk monografi
  re-analysert gjennom nyere retning.
- **Tema/oppgave (nyskrevet):** «Ta utgangspunkt i én av de obligatoriske
  monografiene og diskuter dens analyse i lys av et nyere kritisk perspektiv.»
- **Karakternivåer:** **A** i full tekst med margnotater (konkret parti fra
  *The Nuer* [segmentær opposisjon/feider] presist gjengitt; re-analysert gjennom
  postkolonial linse [Asads koloniale betingelser — hva systemanalysen ikke
  stilte spørsmål ved]; drøfting av hva som VINNES og TAPES i re-lesningen;
  selvstendig konklusjon om monografiens verdi i dag) + **C** (god gjengivelse
  av *The Nuer*, den nyere retningen nevnt men aldri BRUKT på empirien — kobling
  mangler, #6) + **E/minimum** (handlingsreferat uten analyse eller nyere
  perspektiv). Sensorblikket: koblingskravet + de fem aksene.
- **Typiske feil demonstrert i C/E-versjonene:** #6, #1, #8.
- **Kvote:** 6 quiz / 5 flashcards.

**Prøve-kvote Del 10:** dekkes av de tre komplette øvingseksamenene under (todelt
form) — egne del-prøver ville dublere sjangerkapitlenes øvingsbanker.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 3 | 50 | 40 | 0 (dekkes av øvingseksamenene) |
| 1 | 2 | 46 | 50 | 4 |
| 2 | 4 | 98 | 106 | 4 |
| 3 | 2 | 50 | 54 | 4 |
| 4 | 3 | 70 | 76 | 4 |
| 5 | 3 | 64 | 70 | 4 |
| 6 | 2 | 44 | 46 | 4 |
| 7 | 3 | 76 | 82 | 4 |
| 8 | 2 | 46 | 50 | 4 |
| 9 | 4 | 66 | 72 | 4 |
| 10 | 8 | 86 | 62 | 0 (3 øvingseksamener) |
| **Sum** | **36** | **696 ✓ (≥500)** | **708 ✓ (sikt 600–700, se begrunnelse)** | **36 + 3 øvingseksamener** |

**Summeringskontroll per del:**
- Del 0: 12+18+20 = **50 q** / 10+14+16 = **40 f**
- Del 1: 22+24 = **46 q** / 24+26 = **50 f**
- Del 2: 24+24+28+22 = **98 q** / 26+26+30+24 = **106 f**
- Del 3: 24+26 = **50 q** / 26+28 = **54 f**
- Del 4: 22+26+22 = **70 q** / 24+28+24 = **76 f**
- Del 5: 20+24+20 = **64 q** / 22+26+22 = **70 f**
- Del 6: 22+22 = **44 q** / 24+22 = **46 f**
- Del 7: 26+26+24 = **76 q** / 28+28+26 = **82 f**
- Del 8: 22+24 = **46 q** / 24+26 = **50 f**
- Del 9: 18+16+16+16 = **66 q** / 18+18+18+18 = **72 f**
- Del 10: 14+14+12+12+16+6+6+6 = **86 q** / 11+11+8+8+9+5+5+5 = **62 f**
- **Totalt: 696 q / 708 f** (quiz ≥500 ✓; flashcards i/over siktet 600–700 ✓)

**Begrunnelse for flashcard-tettheten (708, over 500-gulvet):** SOSANT1090 er et
uvanlig begrepsrikt drøftingsfag — hele eksamen hviler på presise
**teoretiker↔verk↔begrep↔retning-koblinger** (produksjonsløypens regel: begrepsrike
drøftingsfag → høy flashcard-tetthet, gjerne 650–800). Hver retning bærer 4–6
kjernebegreper som ALLE er kortsvarskandidater i V2025/V2026-malen («Hva mener X
med Y?»), og i tillegg kommer relasjonskortene (retning↔akseposisjon,
ser/overser-par) som trener selve sensornøkkelen. 500 ville underlevert; 708
speiler fagets faktiske begrepsbyrde.

**Flashcard-profil:** hovedvekt på **teoretiker↔verk↔begrep↔retning-koblinger**
(Boas↔*Limitations*↔kulturrelativisme↔amerikansk kulturhistorie; Evans-Pritchard↔
*The Nuer*↔segmentær opposisjon↔strukturfunksjonalisme; Geertz↔thick description↔
symbolsk/tolkende; Barth↔*Swat Pathans*↔transaksjon↔prosessanalyse; Wolf↔politisk
økonomi↔marxisme; Abu-Lughod↔write against culture↔postkolonial kritikk; Ingold↔
dwelling↔fenomenologi; Appadurai↔deterritorialisering↔globalisering; Bourdieu↔
symbolsk makt↔praksisteori; Martin↔*The Egg and the Sperm*↔feministisk
vitenskapskritikk) + **«hvem–hva–når–reaksjon på»-kort** per teoretiker
(faghistorisk plassering som flashcard-format) + **relasjonskort** (retning↔
akseposisjon, ser/overser-par fra Del 9). Formatet speiler kortsvarets kjerne OG
plasseringskravet. **Quiz-profil:** flervalg med nabobegrep-distraktorer
(strukturalisme/strukturfunksjonalisme, synkron/diakron, unilineær/multilineær,
metodologisk/etisk relativisme, dwelling/building, deterritorialisering/
homogenisering, mening/makt) + kronologi-spørsmål (hvilken retning reagerte på
hvilken) + «hvem eier begrepet»-koblinger + «hvilken feil begår kandidaten»-
gjenkjenning (#1-drill). Quiz = kortsvars- og plasseringstrening (options[0] =
riktig i staging; runtime stokker).

---

## 4. Prøver

Fire prøver per del (Del 1–9 = 36 prøver), spesifisert under hver del over. Hver
prøve speiler eksamensformatet i miniatyr (teoretiker-kortsvar à tre-nivå-mal +
langsvarsmoment + flervalg), omfang 20–45 min, alle oppgaver nyskrevne, med
momentlister kalibrert mot de fem vurderingsaksene. Prøvekapittel-id:
`sosant1090-<del>-prove`, chapterNumber `<del>.P`. Langsvarsmomentene dominerer
(25/75-vektingen): hver temadel-prøve har minst én L/MONO/PÅ-komponent med
relasjonskrav.

### Komplette øvingseksamener (3) — todelt form

Alle i gjeldende eksamensform (**Del 1 kortsvar: 5 spørsmål, svar på 2 (25 %)** +
**Del 2 langsvar: 3 alternativer, svar på 1 (75 %)**, 5 timer, ingen hjelpemidler,
A–F). Full momentliste-fasit per spørsmål: kortsvar med tre-nivå-beskrivelse
(minimum/god/særdeles god), langsvar med C–D-taket og A/B-kravene (relasjon +
plassering) eksplisitt. Alle oppgaver og case nyskrevne. Kortsvarene følger
V2025/V2026-malen (teoretiker-navngitte).

1. **Øvingseksamen A (bredde over tidslinjen, topptema-tung):**
   Del 1 (velg 2 av 5): (i) Boas og kulturrelativisme; (ii) Geertz: tykke
   beskrivelser; (iii) Malinowskis feltarbeidsrevolusjon; (iv) Bourdieu: symbolsk
   makt; (v) Appadurai: deterritorialisering.
   Del 2 (velg 1 av 3): (a, L) diskuter holismebegrepet med to+ retninger;
   (b, L) hvordan har antropologer forstått samfunnsendring? (synkron/diakron-
   aksen); (c, MONO) én obligatorisk monografi i lys av et nyere kritisk
   perspektiv.

2. **Øvingseksamen B (kritikk-klyngen og symbolretningene):**
   Del 1 (velg 2 av 5): (i) Abu-Lughod: å skrive mot kultur; (ii) Douglas:
   «matter out of place»; (iii) Martin: *The Egg and the Sperm*; (iv) Ingold:
   dwelling-perspektivet; (v) synkron og diakron analyse.
   Del 2 (velg 1 av 3): (a, L) representasjonskrisen — hva besto den i, og
   hvordan svarte faget? (b, PÅ) prøv en nyskrevet Ortner-aktig påstand om at
   akademisk arbeid ikke kan løsrives fra verden; (c, L) diskuter kulturbegrepets
   utvikling fra Boas til i dag.

3. **Øvingseksamen C (system/makt-tung + scenario, speiler §7-prognosen):**
   Del 1 (velg 2 av 5): (i) Evans-Pritchard: segmentær opposisjon; (ii) Wolf:
   politisk økonomi; (iii) Gluckman og extended case; (iv) Rappaport: ritualers
   skjulte funksjon; (v) Lévi-Strauss: binære opposisjoner.
   Del 2 (velg 1 av 3): (a, SCEN) en bekjent hevder at et samfunn «ikke har
   kommet så langt i utviklingen» — tilbakevis faglig med to+ retninger;
   (b, L) diskuter funksjonsforklaringer i lys av nyere perspektiver
   (idealisme/materialisme-aksen); (c, MONO) *Swat Pathans* re-analysert gjennom
   feministisk eller marxistisk linse.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — todelt skoleeksamen (Del 1 kortsvar 2/5 = 25 %, Del 2
   langsvar 1/3 = 75 %), den formelle strykeregelen, A–F, tidsbudsjett etter
   25/75, ingen hjelpemidler (fra kap. 0.1–0.3).
2. **Teoritidslinjen på én side** — retningene i rekkefølge med årstier, hver
   med «reagerte på → hovedgrep → ble utfordret av» (faghistorisk plassering som
   plakat; Akse 2-drillen).
3. **Teoretiker-galleriet** — én blokk per kjerneteoretiker (Boas, Malinowski,
   Radcliffe-Brown, Evans-Pritchard, Gluckman, Turner, Barth, Leach, Lévi-Strauss,
   Geertz, Douglas, Steward, Rappaport, Wolf, Bourdieu, Rosaldo, Strathern,
   Scheper-Hughes & Lock, Martin, Asad, Abu-Lughod, Marcus & Fischer, Ortner,
   Mogstad & Tse, Ingold, Appadurai, Mathews): retning + verk + kjernebegrep +
   standardeksempel + typisk kortsvarsformulering + farligste presisjonsfelle.
4. **Begrepsbank med avsender** — alle kjernebegreper alfabetisk, hver med
   én-setnings definisjon + teoretiker + retning (flashcard-speilet i prosaform):
   segmentær opposisjon, holisme, thick description, matter out of place,
   binære opposisjoner, transaksjon, extended case, synkron/diakron, politisk
   økonomi, produksjonsmodus, symbolsk makt, kapitalformer, multilineær evolusjon,
   denaturalisering, representasjonskrise, refleksivitet, posisjonalitet, write
   against culture, det partikulære, dark anthropology, dekolonisering, dwelling,
   deterritorialisering, -scapes, disjunctures, antropocen, kulturrelativisme,
   historisk partikularisme, etnosentrisme m.fl.
5. **Aksekartene** — de fire tverrgående aksene (synkron/diakron, aktør/struktur,
   idealisme/materialisme, holisme/«oss–dem») som tabeller med retningenes
   posisjoner og ser/overser-par (Del 9 komprimert — langsvarets råstoff).
6. **Monografi-arkene ⚠** — *The Nuer* og *Swat Pathans*: kjerneempiri,
   originalanalyse, linse-matrisen (hvilke nyere retninger de kan re-leses
   gjennom), MONO-oppskriften.
7. **Sjangerformlene** — firetrinns-kortsvaret + femtrinns-langsvaret +
   MONO-oppskriften + PÅ/SCEN-grepene som huskeliste med eksempelfraser
   (relasjonsformuleringer: «der X ser…, overser hun…»; plasseringsfraser:
   «som en reaksjon på…»).
8. **Feilvaksine-kortversjonen** — de ti feilene som énlinjers varsellamper,
   med #1 (oppramsing = C–D-tak) øverst.
9. **Karakterkalibrering** — de fem aksene, kortsvar-graderingen
   (minimum/god/særdeles god), langsvar-logikken (C–D-taket vs. A/B-kravene) og
   helhetsvurderingen i tabellform (A–F).
10. **Ukeplan** — 6-ukers og 2-ukers lesningsløp mot eksamen med
    prøve-innplassering (temadelprøver underveis; Del 9-aksene + øvingseksamen
    A/B/C de siste to ukene; langsvarstrening vektet ~3× kortsvar, jf. 25/75).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`,
   skrives til `textbook-courses-hoyskole.ts`): id `sosant1090`, title,
   `level: 'Høyskole'`, alle 36 kapitler + prøvekapitler med id/number/title/
   description/estimatedMinutes/topics/prerequisites fra dette skjelettet,
   `sectionNames` fra del 2-tabellen. Registrer i
   `src/app/trinn/hoyere/institusjoner.ts` under UiO som
   «SOSANT1090 Antropologiens historie».
2. **Del 0** (etablerer mantraene alle senere kapitler refererer: «sett retninger
   i relasjon», «plasser alltid faghistorisk», C–D-taket, tre-nivå-graderingen,
   25/75-tidsbudsjettet).
3. **Del 1 → 8 i kronologisk rekkefølge** (tidslinjen er pedagogikken;
   prerequisites peker bakover; komparasjonsaksene i hvert kapittel peker både
   bakover [skrivbart] og fremover [foreshadowing — hold kort]). **⚠ Før kap. 2.3
   og 3.2: sjekk GJELDENDE pensumliste** for monografiutvalget (jf.
   utgave-sensitivitet). Merk `(verifiser)`-punkter i begrepskontraktene: sjekk
   eller formuler forsiktig; usikre detaljer utelates hellere enn gjettes.
4. **Del 9** etter tidslinjen (aksekapitlene gjenbruker og RELATERER
   teorikapitlenes stoff — de skal ikke innføre ny teori, kun relasjoner,
   akseplasserings-tabeller og A-disposisjoner).
5. **Del 10** til slutt (sjangerkapitler og modellbesvarelser gjenbruker
   teoretiker-banken, aksene og monografi-stoffet — 10.6 på Geertz fra 4.2, 10.7
   på holisme fra 2.4/9.4, 10.8 på *The Nuer* fra 2.3).
6. **Prøver og øvingseksamener** etter at alle kapitler finnes.
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per kapittel gjelder teorikapittel-DNA-blokkstrukturen (jf. innledningen til
del 3): `tip` Eksamensvinkel → `text` Retningen i faghistorien → `definition`
Begrepskontrakt (flashcard-kilden — toppnivå med title!) → `text`
Komparasjonsakser → `example` anvendelse ×1–2 → `warning` Typiske feil →
`exercise` ×4–8 (2–3 begreps-/kortsvarsoppgaver à tre-nivå-mal, 1–2
kortdrøftinger med disposisjonsforslag, 1–2 eksamenslike langsvar med momentliste)
→ `collapsible` Retningskart; akse-, sjanger- og modellbesvarelseskapitler etter
sine oppsett (se Del 9-innledningen og DNA-malen). Eksamensvinkel- og Typiske
feil-blokkene fylles med belegget og feilkodene fra dette skjelettet —
forfatteren skal IKKE finne på frekvenstall. Kryssbok-lenker merket ⚡ skrives
KUN hvis målboka (sosant1000) er live i plattformen; ellers utelates lenken.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/sosant1090-*.json`
      parser med `json.load` (generer via `json.dump`). `npm run build` grønn —
      vis output.
- [ ] **Metadata-konsistens:** alle 36 kapittel-id-er + prøvekapitler i
      course-oppføringen har eksisterende content-fil; `number` er del-basert
      («2.3», prøver «2.P», ALDRI lineær); prosareferanser bruker samme form
      («kap. 2.3»); prerequisites peker på eksisterende id-er; `sectionNames`
      satt; narrativ-id-er registrert slik at toggle rendrer (verifiser med
      prod-server + curl at narrativ-ruter gir 200).
- [ ] **Pensumreferanser EKTE:** kun teoretikere/verk fra dette skjelettets
      begrepskontrakter (Boas, Malinowski, Radcliffe-Brown, Durkheim,
      Evans-Pritchard, Gluckman, Turner, Epstein, Mitchell, Barth, Leach,
      Lévi-Strauss, Geertz, Douglas, Steward, Rappaport, Wolf, Bourdieu, Rosaldo,
      Strathern, Scheper-Hughes & Lock, Martin, Asad, Abu-Lughod,
      Marcus & Fischer, Clifford, Ortner, Mogstad & Tse, Ingold, Appadurai,
      Mathews, Sørum, Lien, Tylor/Morgan). ALDRI oppdiktede referanser. Alle
      `(verifiser)`-markeringer sjekket eller forsiktig formulert (grep
      `-i verifiser`, ikke bare `(verifiser)` — jf. JUS1111-lærdommen); usikre
      detaljer utelatt hellere enn gjettet. **Pensumlista er rekonstruert** —
      gjeldende semesterliste sjekket for monografier og hovedtekster.
- [ ] **Monografi-modularitet ⚠:** kap. 2.3, 3.2, 10.3 og 10.8 har ⚠-merking og
      bygges på gjeldende monografier (*The Nuer* / *Swat Pathans*) — IKKE
      hardkodet som evige; byggekontrakten krever pensumlistesjekk.
- [ ] **Sensornøkkelen operasjonalisert:** hvert teorikapittel har
      Komparasjonsakser-blokk (retningen satt mot navngitte nabo-retninger);
      Del 9-kapitlene har akseplasserings-tabeller med ser/overser-par; hvert
      langsvars-modellsvar demonstrerer C–D-taket (presentasjon uten relasjon) og
      A-løftet (relasjon + faghistorisk plassering); «kun presentere teorier uten
      å diskutere dem opp mot hverandre = C–D» står i Del 0 OG i hver
      langsvar-fasit i Del 10, alle L-prøver og øvingseksamenene.
- [ ] **25/75-kalibrering:** langsvarstreningen dominerer (Del 9 + 10.2/10.3/
      10.4/10.7/10.8 + L-momentene i alle prøver); ingen modellsvar eller
      studieguide-råd som behandler kortsvar og langsvar som likeverdige;
      tidsbudsjettene følger vektingen.
- [ ] **Kvotesum:** quiz = 696 og flashcards = 708 fordelt per kapittel som
      angitt (hardt minimum ≥500/≥500; flashcards skal IKKE kuttes mot 500 —
      begrunnelsen står i kvotesammendraget); 4 prøver per del (Del 1–9 = 36) +
      3 øvingseksamener i todelt form (2/5 + 1/3); fasit-svaralternativer
      rebalansert (jevn a/b/c/d — options[0] alltid riktig i staging, runtime
      stokker).
- [ ] **Opphavsrett:** alle oppgaver, case, «sitatlignende» påstander (Ortner-/
      Ingold-/Wolf-aktige) og modellbesvarelser er NYSKREVNE — ingen
      formuleringer fra UiO-oppgavesett eller sensorveiledninger, ingen ordrette
      sitater fra pensumlitteratur (referer og parafraser; formuleringer endres).
- [ ] **Leserkrav:** forkunnskaper-blokk med lenker først i hvert kapittel (lenk
      kun til eksisterende kapitler; ⚡-lenker kun hvis sosant1000 er live);
      Eksamensvinkel-`tip` og Typiske feil-`warning` i hvert kapittel; hver
      oppgave sjangerforankret (K/L/MONO/PÅ/SCEN); «bør kjenne til»-stoff
      (nettverk/ANT, habitus-detaljer, Turner-dramaer, antropocen-detaljer)
      plassert ETTER kjernestoffet og eksplisitt merket; symbol-/formelliste-
      kravet er ikke-relevant (fag uten symboler/formler — README-unntaket
      gjelder).
- [ ] **Kalibrering A–F:** tre-nivå-graderingen (minimum/god/særdeles god) for
      kortsvar og C–D-tak/A-B-krav for langsvar brukes gjennomgående; ingen
      «bestått/ikke bestått»-logikk; ingen SOSANT1000-regler importert feilaktig
      (ingen «3-referanse-regel», ingen «to F = stryk», ingen ordbok — de
      gjelder IKKE her).

# Bokskjelett: SPM102 Lederskap i idrett (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-drofting.md`). Unntak: øvingseksamen-/prøve-/modell-
> besvarelseskapitler følger sin egen arketype (komplett oppgave først,
> modellsvar i collapsibles). Kvotene og innholdskontraktene i dette skjelettet
> er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIH SPM102-arkivet: **8 sensorveiledninger + 10 eksamens-
> oppgavesett** fra studieårene 2021/22, 2022/23 og 2025/26 — ordinær, utsatt, vår
> og høst). Alle oppgaver, case, «modellbesvarelser» og eksempler i boka skal være
> NYSKREVNE (se §6). Pensumlitteratur refereres (forfatter/verk/begrep), aldri
> siteres i lengde. Sensorveiledningene i SPM-serien er **usedvanlig rike og
> eksplisitte** (oppgir sidetall i pensum, navngir hva A-, C- og E-svar krever,
> markerer trekk-punkter) — de brukes aktivt i «Eksamensbelegg» og «Sensorkrav».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-spm102` |
| Tittel | **SPM102 Lederskap i idrett (NIH) — eksamensrettet lærebok** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «SPM102 Lederskap i idrett». |
| Arketype | **Drøfting (`DNA-drofting.md`) — case-/rolleforankret variant.** Alle deler er drøftingsoppgaver med fast indre logikk (definer → forankre med sidetall → virkelige eksempler → drøft utfordringer/strategier), konsekvent case-/rolleforankring («du er styreleder/daglig leder/sikkerhetsansvarlig …») og ÉTT dominerende rammeverk (Hanstad & Hansen-modellen). Se §2 «Arketypetilpasning». |
| Antall kapitler | **27** (Del 0: 3 · temadeler 1–7: 19 · eksamenstrening Del 8: 5) |
| Estimert totaltid | **~1 305 min ≈ 22 timer** (per kapittel under) |
| Quiz totalt | **502** (krav ≥500) |
| Flashcards totalt | **520** (krav ≥500) |

**Pitch (ett avsnitt):** SPM102-eksamen har ingen kortsvar eller flervalg — **alle deler
er drøftingsoppgaver** med én fast, gjenkjennelig mal: *definer sentrale begreper →
forankre i pensum (APA 7 **med sidetall**) → gi virkelige eksempler fra idretts-Norge →
drøft utfordringer/barrierer + strategier for å overvinne dem.* To ferdigheter avgjør
karakteren, og boka er bygget baklengs fra dem: **(1)** overgangen fra *redegjørelse*
(gir C) til *selvstendig, reflektert drøfting* (løfter til A/B) — sensor gjentar
formuleringen «det viktige her er evnen til å drøfte – ikke bare gjenta»; og **(2)**
evnen til å hekte all analyse på **analysemodellen Hanstad & Hansen (2024, s. 34)** —
skillet mellom **«trekk» ved (norsk) idrett** og **«elementer i ledelse»**, koblet til
**tre ledernivåer (organisasjon / gruppe / individ)** — som er navet i nesten hver
oppgave fra 2025/26. Kjernetemaene er stabile: ledelse vs. styring (ledelse som *prosess*,
ikke enmannsshow — Gjerde, 2022), organisasjonskultur/verdibasert ledelse (Schein, Deal &
Kennedy, Bang), styresett (governance), velfungerende styre + samarbeid styre–
administrasjon/tillitsvalgt–ansatt, og — i pensumbredden — risiko/beredskap,
endringsledelse, kjønn/likestilling/mangfold. Hvert temakapittel leverer et
**begrep↔forfatter-lager** (presise definisjoner med navngitt avsender og sidetall),
**drøftingsakser** (spenninger å drøfte) og **virkelige eksempler** (Håndballforbundet,
Skiforbundet, Ski-VM 2025, Birken, Canvas-foredragene). Eksamenstreningen driller
firepunktsmalen, komprimering til 1500-ordsformatet, korrekt APA 7 + KI-deklarasjon, og
modellbesvarelser på flere nivåer der forskjellen ligger nøyaktig i overgangen fra
redegjørelse til drøfting.

**Kalibreringsregler (ufravikelige):**
1. **Firepunktsmalen** (definer → forankre med sidetall → virkelige eksempler → drøft
   utfordringer/strategier) er svarskabelonen boka driller på tvers av alle kapitler,
   komprimert til dagens 1500-ordsformat.
2. **Drøfting > gjengivelse er karakterskillet.** Redegjørelse gir C; selvstendig
   drøfting løfter til A/B. Modellbesvarelser MÅ markere *hvor* redegjørelse blir til
   drøfting.
3. **Ledelse er en prosess/interaksjon (Gjerde, 2022), ikke et enmannsshow.** Å
   fremstille lederen som en heltefigur som styrer alene er et dokumentert minus —
   bygges inn som gjennomgående A-signal.
4. **APA 7 med sidetall + KI-deklarasjon er et hardt formkrav.** Svak sitering presser
   karakteren ned uansett innhold; udokumentert KI-bruk (2025/26) er formbrudd.
5. **Analysemodellen Hanstad & Hansen (2024, s. 34) er navet.** Trekk × elementer i
   ledelse × tre nivåer — all analyse i epoke 2 hektes på den. Modellens presise
   inndeling er **`(verifiser)`** (hele pensumboka ligger ikke i arkivet; kjent kun via
   sidereferanser i veiledningene).
6. **Prosess > oppramsing, grunn > eksempel.** Sensor trekker for plass brukt på lister
   (risikokategorier, «alt som skal til for et godt styre») og for skandaleliste i
   stedet for *grunnene* til dårlig styresett. Bygges inn i drøftingsaksene.
7. **Pensumforankring EKTE.** Stabile ankere: **Hanstad (2019)** (epoke 1) +
   **Hanstad & Hansen (2024)** (epoke 2, modellen) + **Gjerde (2022)** + **Yukl (2019)** +
   **Innbjør & Kleiveland (2007)** + **Knudsen & Flåten (2015)** + **Bang (2013)** +
   **Schein (1987)** + **Deal & Kennedy (1982)** + **Borch & Andreassen (2020)** +
   **Frivillighet Norge (2016)**. Aldri oppdiktede referanser. Se «Utgave-sensitivitet».

**Formatbruddet (kritisk, gjelder hele boka).** Eksamensformen har **to epoker**:
- **Epoke 1 (2021/22–2022/23):** treukers hjemmeeksamen, **4500–5000 ord**, tre likt
  vektede deler; styresett + organisasjonskultur + velfungerende styre + risiko bar
  settene.
- **Epoke 2 (2025/26, dagens form):** **fire timers** hjemmeeksamen, **1500 ord ± 10 %**,
  to–tre deler med ulik ordfordeling; bygd rundt Hanstad & Hansen-modellen og ledelse på
  tre nivåer; **KI skal deklareres** (skjermdump som vedlegg, APA 7 for AI-generert tekst);
  kildebruk avgrenset til kjernelitteratur + Canvas-eksempler.

Boka **kalibreres mot dagens form (epoke 2)** — komprimering og presisjon er avgjørende —
men henter øvingscaser fra hele arkivet. **Usikkerhet (`(verifiser)`):** (a) korteksamen
er bare observert ett studieår; (b) hele pensumboka mangler i arkivet, så modellens
presise innhold må verifiseres mot Hanstad & Hansen (2024); (c) læringsmål om
kjønn/likestilling/mangfold og kommersialisering/privatisering står i emneplanen men er
aldri testet direkte i arkivet.

**Utgave-sensitivitet.** Der epoke 1 hvilte på **Hanstad (2019)**, bygger epoke 2 på
**Hanstad & Hansen (2024)**. Begrepene er stabile (ledelse/styring, kultur, styresett),
men **modellkoblingen (trekk × elementer × nivå) og enkelte sidereferanser er utgave-
sensitive** — merkes `(verifiser)` og skal fagfellesjekkes mot Hanstad & Hansen (2024)
i byggefasen. Emnet er **AKTIVT** (heldigitalt nettemne ved NIH, 10 sp, høst/vår;
emneansvarlig 2025/26 Allan Bennich Grønkjær; verifisert mot nih.no 2026-07-11).

---

## 2. Makrostruktur

Følger DNA-drøfting-malen: Del 0 (eksamenskart + drøftingshåndverk) → temadeler etter
analysens temafrekvens, tyngst først → eksamenstrening (sjangerkapitler + feilvaksine +
modellbesvarelser). Omfang per del følger gjenganger-score fra analysen §2/§7.
Rekkefølgen legger **grunnbegrepene (ledelse/styring)** og **modellen** først, fordi alt
annet hektes på dem.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og drøftingshåndverk | 3 | perfekt (meta) | DNA-obligatorisk + ett ekstra kapittel: eksamen har hardt formkrav (1500 ord, APA 7 m/sidetall, KI-deklarasjon) OG en fast firepunktsmal — begge etableres FØR fagstoffet. |
| 1 | Ledelse, lederskap og styring | 3 | perfekt (⭐⭐⭐) | Grunnbegrepene ligger i bunn av nesten hver del; navngitt læringsmål i alle sett. Ledelse som prosess (Gjerde, 2022), ikke enmannsshow — gjennomgående A-signal. |
| 2 | Analysemodellen: trekk × elementer × tre nivåer | 3 | perfekt (⭐⭐⭐ nytt) | **Navet i dagens eksamen** (Hanstad & Hansen 2024). Modellen operasjonaliseres + de tre nivåene (organisasjon/gruppe/individ) + «vise sammenheng» som karakterkriterium. |
| 3 | Organisasjonskultur og verdibasert ledelse | 3 | perfekt (⭐⭐⭐) | Dominerende i epoke 1, fortsatt sentralt. Schein/Deal & Kennedy/Bang; verdier–normer–virkelighetsoppfatninger; kulturendring; tillit. |
| 4 | Styresett (governance) og godt styresett | 2 | kunne (⭐⭐⭐ epoke 1) | Bar epoke 1 tungt; ute av korteksamen foreløpig, men kan gjenoppstå. Grunner til svikt (ikke skandaleliste); Frivillighet Norge (2016). |
| 5 | Velfungerende styre og samarbeid styre–administrasjon/tillitsvalgt | 3 | perfekt (⭐⭐⭐) | Bæretema begge epoker (stigende): styret bestiller–administrasjonen leverer; valgkomité-kriterier; president–generalsekretær; samarbeid ansatte↔frivillige + makt/ansvarsfordeling. |
| 6 | Strategisk/operativ ledelse, endringsledelse og risiko/beredskap | 3 | kunne/kjenne (⭐⭐/nivå 3) | Strategisk vs. operativ (⭐⭐), endringsledelse (Yukl 2019, ⭐⭐ stigende), risiko/beredskap (⭐⭐ prosessorientert; Ski-VM-case). Samlet fordi hver er «må kunne»/«bør dekkes». |
| 7 | Pensumbredde: mangfold, kommersialisering og motivasjon | 2 | kjenne (⭐) | Læringsmål i 2025/26 aldri testet direkte, men kan komme og hører til «trekk»-siden av modellen: kjønn/likestilling/mangfold, kommersialisering/privatisering, motivasjon/gruppedynamikk. |
| 8 | Eksamenstrening | 5 | perfekt (meta) | 2 sjangerkapitler (firepunktsmalen komprimert + APA/KI/komprimering) + feilvaksine + 3 modellbesvarelser (A + kommentert C + autentisk B/bestått-nivå) på gjengangerne. DNA-krav ≥3 modellbesvarelser. |

Rasjonale: de tre ⭐⭐⭐-topptemaene (grunnbegreper, modellen, organisasjonskultur) og
det stigende styre/samarbeid-temaet får hver sin fulle del; styresett og
strategisk/endring/risiko får kompakte deler (høyfrekvente i epoke 1, men ikke i dagens
korteksamen); pensumbredden får ett kort dobbeltkapittel. Nesten hele temakjeden testes,
men prioriteringen styrer *dybde og drillmengde*.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og drøftingshåndverk |
| 1 | Ledelse, lederskap og styring |
| 2 | Analysemodellen: trekk × elementer × tre nivåer |
| 3 | Organisasjonskultur og verdibasert ledelse |
| 4 | Styresett (governance) og godt styresett |
| 5 | Velfungerende styre og samarbeid styre–administrasjon |
| 6 | Strategisk/operativ ledelse, endringsledelse og risiko |
| 7 | Pensumbredde: mangfold, kommersialisering og motivasjon |
| 8 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under; alltid skrevet fullt ut ved første bruk i boka)

**CASE** (case-basert ledelsesoppgave med rolle — «du er styreleder/daglig leder/
sikkerhetsansvarlig …»; oversett teori til konkrete ledelseshandlinger). · **BEGR**
(begrepsforankret drøfting — «forklar X, drøft deretter Y»; redegjørelsen skal være kort,
karakterskillet ligger i drøftingsleddet). · **NIVÅ** (nivådelt ledelsesanalyse, epoke 2 —
analyser ledelse på organisasjons-/gruppe-/individnivå og vis *sammenheng* mellom valgte
trekk, ledernivå og elementer i ledelse; ofte stram ordfordeling per del). · **GOV**
(styresett-oppgaven, epoke 1 — forklar hva styresett er + drøft *grunnene* til dårlig
governance internasjonalt; anvend på et fiktivt særforbund tilsluttet NIF). · **RISK**
(risiko- og beredskapsoppgaven, epoke 1 — utvikle risiko-/beredskapsplan for et
storarrangement med vekt på *prosessen*, ikke katalogen). Firepunktsmalen (definer →
forankre med sidetall → virkelige eksempler → utfordringer/strategier) ligger under alle
sjangrene.

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> Sensorveiledningene i SPM-serien er svært eksplisitte og gjentar en fast A–F-beskrivelse
> i alle sett. Karakterkriteriene er derfor **dokumentert**, ikke gjettet. Der noe er
> sluttet indirekte (særlig modellens presise inndeling), er det merket `(verifiser)`.

1. **Drøfting > gjengivelse.** Den mest gjentatte innsikten i alle veiledninger. «Det
   viktige her er evnen til å drøfte – ikke bare gjenta.» Redegjørelse gir C; selvstendig
   drøfting løfter til A/B.
2. **Prosess > oppramsing.** Sensor trekker eksplisitt for plass brukt på lister
   (risikokategorier, «alt som skal til for et godt styre») i stedet for å drøfte
   *prosessen*. Egen `warning` i risiko-/styre-kapitlene.
3. **Grunn > eksempel** (styresett). Sensor vil ha *grunnene* til dårlig governance, ikke
   en liste over skandaler.
4. **Ledelse som prosess/interaksjon (Gjerde, 2022), ikke enmannsshow** — løftes eksplisitt
   som A-signal; enmannsshow-fremstilling er dokumentert minus.
5. **APA 7 med sidetall i all pensumlitteratur** — hardt, selvstendig krav. Svak
   siteringspraksis presser karakteren ned uansett innhold.
6. **Flere kilder enn pensumboka** løfter (Yukl, Innbjør & Kleiveland, Knudsen & Flåten,
   Gjerde, Bang, Borch & Andreassen). Å lene seg bare på Hanstad holder svaret nede.
7. **«Vis sammenheng»** (epoke 2) mellom trekk, ledernivå og elementer i ledelse
   premieres eksplisitt; isolerte deler trekker.
8. **Virkelige eksempler** fra idretts-Norge (og internasjonalt) belønnes i alle oppgaver.
9. **Formkrav holdes** (ordgrense; Calibri 12 pkt, 1,5 linjeavstand); avvik trekker trinn
   for trinn i A–F. **F/ikke bestått automatisk hvis én deloppgave ikke er besvart.**
10. **KI-deklarasjon (2025/26)** — bruk av KI-verktøy skal opplyses, dokumenteres med
    skjermdump og siteres etter APA 7; manglende opplysning er formbrudd/potensielt fusk.

Vurderingsdimensjonene 2025/26 navngir: **faglig presisjon** (særlig modellen),
**relevans og dybde**, **argumentasjon** (reell drøfting), **struktur og språk**
(sammenheng mellom deler), **originalitet/selvstendighet** (tilpasse generell teori til
det spesifikke ledernivået).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved FØRSTE bruk i hvert kapittel)

**#1** Gjengir i stedet for å drøfte (den vanligste C-stopperen). · **#2** For mye plass
på oppramsing/definisjon (sensor setter ordtak; drøftingsleddet får for lite). · **#3**
Behandler ledelse som «one-man show» i stedet for prosess (Gjerde, 2022). · **#4** Svak/
feil APA 7 uten sidetall (selvstendig karakter-senkende). · **#5** Lener seg bare på
Hanstad — ensidig kildebruk. · **#6** Lister skandaler i stedet for *grunner* (styresett).
· **#7** Overlapp mellom deler (svarer på det samme to ganger). · **#8** Ingen virkelige
eksempler — svaret blir abstrakt. · **#9** Mangler *sammenheng* mellom trekk, ledernivå og
elementer (epoke 2). · **#10** Bryter formkrav/ordgrense. · **#11** Leverer ikke alle
deler → automatisk F. · **#12** Bruker kilder utenfor kjernelitteraturen (2025/26). ·
**#13** Udokumentert KI-bruk (2025/26).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Drøfting i case-/rolleforankret variant.** DNA-drøfting forutsetter essay-/
   begrepsdrøfting. SPM102 legger til to særtrekk fra analysen §7: **(i)** konsekvent
   case-/rolleforankring («du er styreleder …») — hvert temakapittel har derfor minst ett
   **gjennomgangscase** som kjøres helt gjennom firepunktsmalen; **(ii)** **ett dominerende
   rammeverk** (Hanstad & Hansen-modellen) som all analyse hektes på — Del 2 er en egen
   modellmodul, og senere kapitler kobler tilbake til den.
2. **Firepunktsmalen som fast svarskabelon.** README-kravet om drøftingsstruktur
   konkretiseres til den malen sensorveiledningene selv lister: definer → forankre med
   sidetall → virkelige eksempler → drøft utfordringer/strategier. Del 0 etablerer den;
   hvert temakapittel har et gjennomgangscase som følger den; Del 8 driller komprimeringen
   til 1500 ord.
3. **«Pensumkart for kapitlet» → «Begrep↔forfatter-lager med sidetall».** DNA-collapsiblen
   utvides med **sidereferanser** (APA 7-krav): hvert begrep kobles til forfatter/verk OG
   sidetall der veiledningene oppgir det (f.eks. ledelse som prosess: Hanstad 2019, s.
   159–162; organisasjonskultur: Hanstad 2019, s. 237; styresett: Hanstad 2019, s.
   203–214). Sidetall merket `(verifiser)` der de stammer fra veiledningens sidereferanse,
   ikke fra pensumboka selv.
4. **APA 7 + KI-deklarasjon som eget håndverkskapittel (0.3).** Fordi svak sitering og
   udokumentert KI-bruk senker karakteren direkte (sensorkrav 5, 10; #4, #13), får
   formkravene, komprimeringsteknikken og KI-deklarasjonen et eget kapittel.
5. **Modellbesvarelser komprimert til dagens format.** De gamle treukersoppgavene er gode
   øvingscaser, men modellbesvarelsene i boka trenes i **1500-ordsformatet** (epoke 2) —
   med minst én som viser komprimeringen fra en treukers-case ned til dagens kortform.
6. **Kryssreferanser til NIH-klyngen (prosa, ikke lenker — søsterbøkene er ikke bygget
   ennå).** Der SPM102 grenser mot organisasjons-/ledelsesfag i NIH-porteføljen (IDR109
   Treningslære — anvendt/case-ledelse; MA460 — masternivå analyse/drøfting; MET200/MET402
   — metode/APA-forankring; IS205 — idrett og samfunn), omtales overlappet i prosa **uten
   lenke** for å unngå døde referanser. SPM103/SPM105/SPM245 (senere bølger) nevnes evt.
   i prosa uten lenke. Der forkunnskap dekkes i SPM102 selv (grunnbegrepene i Del 1),
   brukes intern kryssreferanse med lenke.
7. **Ingen oppdiktede kilder eller sidetall.** Usikre sidereferanser, modellinndeling og
   pensumdetaljer merkes `(verifiser)`. Sensorpremisser er dokumenterte (rike
   veiledninger), men modellens presise inndeling er utgave-sensitiv (§1).

**Avvik fra prompt-ordningen (dokumentert):** Del 0 har tre kapitler (mot DNA-normen to)
fordi formkravene (1500 ord, APA 7 m/sidetall, KI-deklarasjon) er et hardt selvstendig
karakterkriterium som fortjener eget håndverkskapittel. Ellers følger boka DNA-drøfting-
malen.

### Kapittel-DNA A — temakapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), organisert som læringsløkker
(Teori → Eksempel → Oppgave inline, jf. kontrakten øverst):

1. `tip` **Eksamensvinkel** — frekvens/epoke, hvilke sjangre (CASE/BEGR/NIVÅ/GOV/RISK)
   temaet inngår i, hva sensor ser etter. Fylles fra kapitlets Eksamensbelegg — forfatteren
   finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + prosa-kryssreferanser til
   NIH-klyngen der relevant (uten lenke, jf. §2.6), etterfulgt av `collapsible`
   **Begrep↔forfatter-lager** (begrep → forfatter/verk → sidetall `(verifiser)` →
   nyansen forfatteren legger i det).
3. `text` **Temaet i fagets landskap** — kort: hvilket ledelsesproblem det svarer på, hvor
   det står i idrettsledelsens debatter. Åpne gjerne med et **hverdagsanker** (en konkret
   idrettsorganisasjon-situasjon) før begrepsapparatet.
4. `definition` **Kjernebegreper** — hvert begrep presist definert OG forankret (forfatter/
   verk + sidetall). **Toppnivå med `title` — dette er flashcard-kilden.** Definisjon uten
   avsender er C-stoff.
5. `text` **Posisjoner og drøftingsakser** — spenningene kapitlet ruster studenten til å
   drøfte (styrker MOT begrunnede svakheter; prosess mot oppramsing; grunn mot eksempel).
6. `example` × 1–3 **Gjennomgangscase** — temaet brukt på en nyskrevet, virkelig-nær case
   (fotballklubb med 1000 medlemmer; fiktivt særforbund tilsluttet NIF; storarrangement),
   skrevet slik en god besvarelse ville gjort det gjennom firepunktsmalen, med eksplisitte
   pensumreferanser (sidetall) underveis. Koble til Hanstad & Hansen-modellen der relevant.
7. `warning` **Typiske feil** — feilkodene (#1–#13) som gjelder temaet; inkl. eksplisitt
   «gjengivelse uten drøfting = C» (#1) og «for mye definisjon = trekk» (#2).
8. `exercise` × 4–8 (INLINE i løkkene) — 2–3 begreps-/kontrolloppgaver (lette, egne ord),
   1–2 kortdrøftinger (løsning = disposisjon + momentliste), 1–2 case-/eksamenslike
   drøftingsoppgaver (løsning = firepunkts-disposisjon + sensorblikk, ikke fullt essay).
   Alle med `hints` (første hint = firepunktsmalens neste steg / hjemmelen, aldri
   konklusjonen) og sjangermerking (CASE/BEGR/NIVÅ/GOV/RISK).
9. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → sidetall → hvilke
   begreper/poenger de «eier» (flashcard-råstoff), åpnet med begrepsbank-notisen.

### Kapittel-DNA B — sjanger-/modellbesvarelseskapittel (Del 8)

Sjangerkapittel: `tip` Eksamensvinkel → `text` **Oppskrift** (trinn-for-trinn disponering
av sjangeren med tidsbudsjett for 4-timers-formatet) → `example` **Gjennomskrevet
besvarelse** med margkommentarer → `exercise` × 3–6 nyskrevne oppgaver med momentliste-
løsning. Modellbesvarelseskapittel: nyskrevet oppgave → `collapsible` **A-besvarelse**
(full tekst, margnotater «her: begrep + forankring med sidetall», «her: drøfting — dette
løfter til A», pausepunkt-markører) → `collapsible` **Kommentert C-besvarelse** (ærlig C:
gjengivelse uten drøfting, tynn forankring, notater om gapet) → `collapsible` **Autentisk
B-/bestått-på-marginen-besvarelse** (ekte studentspråk, litt rotete men god; siden emnet er
gradert A–F, minst én midtnivå-besvarelse) → `tip` **Sensorblikket** (momentliste +
vektlegging).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = epoke + telte nedslag + sjangerkoder + prioritets-
> klasse. **Begrepskontrakt** = begreper som SKAL defineres m/pensumforankring (flashcard-
> kilden). **Drøftingsakser** = spenningene kapitlet skal ruste til å drøfte. **Case-
> forslag** = anvendelseseksempler. **Kvote** = quiz/flashcards. Sidetall og modell-
> inndeling merket `(verifiser)` fagfellesjekkes i byggefasen mot pensum.

### Del 0 — Eksamenskart og drøftingshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes SPM102
**id:** `nih-spm102-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (dagens fire timers hjemmeeksamen, 1500 ord, to–tre deler;
  epoke 1-treukersformatet som historisk kontekst), de fem oppgavesjangrene (CASE, BEGR,
  NIVÅ, GOV, RISK) og firepunktsmalen, temafrekvensene, sensorkravene, kildenoten og
  formatbruddet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet: 8 sensorveiledninger + 10 oppgavesett,
  2021/22, 2022/23, 2025/26). Skal formidle: (a) **formen** — epoke 2 (dagens): 4 t, 1500
  ord ± 10 %, to–tre deler med ulik ordfordeling, KI-deklarasjon; epoke 1: treukers, 4500–
  5000 ord, tre likt vektede deler; alle deler drøftingsoppgaver (ingen flervalg/kortsvar);
  (b) **temafrekvens** (analysen §2) med epoke-skille; (c) **sensorkravene** (§2); (d)
  **kildenoten** (under); (e) **firepunktsmalen** (henvis til 0.2); (f) **formkravene**
  (henvis til 0.3). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen (CASE/BEGR/NIVÅ/GOV/RISK) som studentens
  sjekkliste med epoke og frekvens; prognosen for neste sett (analysen §7: sannsynlig 4 t,
  1500 ord, bygd rundt Hanstad & Hansen-modellen + tre nivåer, samarbeid ansatte–frivillige
  gjennomgående, KI-deklarasjon). **Del 0-pakken (README):** «Slik leser du denne boka»-boks
  (`tip`, IKKE definition — forklarer A–F-skalaen, hva «C-stoff»/«A-markør» betyr,
  sjangerkodene skrevet fullt ut, at feil har et samlet register #1–#13); «Lite tid?»-boks
  (`tip`) med 3–5-dagers hurtigrute + timeanslag (LESEtid; håndskrift ×1,5); **kildenote**
  (hvilke sett/veiledninger analysen bygger på — 2021/22, 2022/23, 2025/26 — og forbeholdet
  om at korteksamen bare er observert ett studieår og at pensumboka ikke ligger i arkivet);
  prosedyre-/sjangerkort på ÉN side (sjanger → én linjes oppskrift → tidsbudsjett →
  vanligste feil); deltidsrute (10–12-ukers plan ~8 t/uke); «lese mye, skrive lite»-boks
  (les oppgaven → formuler svaret mentalt → les modellsvaret som sensor + skriv minst én
  øvingseksamen for hånd på tid). **Karakter-realisme:** C er en god og vanlig karakter;
  «Gapet til A» rammes som oppgraderingsmeny, ikke mangelliste. Ingen forkunnskapsblokk
  (metakapittel).
- **Sjangre/oppgavetyper:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  4-timers eksamen med to deler à 600/900 ord — sett opp tidsbudsjett og rekkefølge» og
  «avgjør av en oppgavetekst hvilken sjanger (CASE/BEGR/NIVÅ/GOV/RISK) den krever».
- **Typiske feil:** Metafeilene: tro at epoke 1-formatet (4500 ord) er dagens (#10); droppe
  KI-deklarasjonen (#13); bruke kilder utenfor kjernelitteraturen (#12); ikke levere alle
  deler (#11 → automatisk F).
- **Kvote:** 14 quiz / 10 flashcards (formfakta, epokene, sjangerkodene, temafrekvens,
  sensorkravene, kildenoten).

#### Kapittel 0.2: Drøftingshåndverket og firepunktsmalen
**id:** `nih-spm102-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftingsstruktur).
- **Description:** Ferdigheten som avgjør karakteren: å bygge en drøftingsbesvarelse etter
  firepunktsmalen (definer → forankre med sidetall → virkelige eksempler → drøft
  utfordringer/strategier) OG å ta steget fra redegjørelse (C) til selvstendig drøfting
  (A/B). Etablerer strukturen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 8 på tvers av alle sjangre).
  Firepunktsmalen listes nesten ordrett under hver oppgave i epoke 1-veiledningene.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. Prosa-kryssreferanse: metode-/APA-forankring
  beslektet med MET200/MET402 i NIH-porteføljen (uten lenke). `collapsible`
  **Struktur-lager:** firepunktsmalens fire ledd + redegjør→drøft-overgangen som huskeliste.
- **Begrepskontrakt (flashcard-kilde):** **firepunktsmalen** (de fire leddene); **redegjøre**
  (gjengi presist = C-nivå) vs. **drøfte** (veie for/mot, problematisere, konkludere
  begrunnet = A/B-nivå); **pensumforankring med sidetall** (APA 7); **virkelig eksempel**
  (fra idretts-Norge, ikke abstrakt); **utfordring/barriere + strategi** (drøftingsleddets
  kjerne). **Begrunnelsesmalen:** «X er en utfordring fordi [pensumforankret grunn]; en
  strategi er Y, som [drøftes mot en innvending fra navngitt kilde].»
- **Drøftingsakser/struktur:** vis på ett eksempel hvordan et redegjørelsesledd (definisjon)
  blir til et drøftingsledd (veiing) — og hvordan malen komprimeres fra 4500 til 1500 ord
  (kutt brede redegjørelser, gå rett på anvendt drøfting).
- **Sjanger/oppgavetyper:** «marker i en gitt (nyskrevet) besvarelse hvor redegjørelse blir
  til drøfting»; «disponer en 900-ords drøfting etter firepunktsmalen».
- **Typiske feil:** #1 (gjengir i stedet for å drøfte), #2 (for mye definisjon), #8 (ingen
  virkelige eksempler).
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 0.3: Formkrav, APA 7 og KI-deklarasjon
**id:** `nih-spm102-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-0-2`

- **Kapitteltype:** håndverkskapittel (meta — formkrav).
- **Description:** De formelle kravene som påvirker karakteren direkte: APA 7 med sidetall i
  all pensumlitteratur, ordgrense og komprimeringsteknikk, avgrensning til kjernelitteratur,
  og korrekt KI-deklarasjon (skjermdump som vedlegg, APA 7 for AI-generert tekst).
- **Eksamensbelegg:** Gjennomgående hardt formkrav (sensorkrav 5, 9, 10; #4, #10, #12, #13).
  APA 7 med sidetall skjerpet til eksplisitt krav i 2025/26; KI-deklarasjon nytt i epoke 2.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.2. Prosa-kryssreferanse: APA 7 / kildehåndtering
  beslektet med metodefagene MET200/MET402 (uten lenke). `collapsible` **Formkrav-lager:**
  APA 7-mønstre (bok, kapittel, artikkel, rapport, AI-generert tekst) i kortform.
- **Begrepskontrakt (flashcard-kilde):** **APA 7 med sidetall** (in-text + referanseliste);
  **ordgrense** (1500 ord ± 10 %, referanser i tillegg; ulik ordfordeling per del);
  **kjernelitteratur-avgrensning** (kun SPM102-pensum + Canvas-eksempler, 2025/26);
  **KI-deklarasjon** (opplyses, skjermdump som vedlegg, APA 7 for AI-generert tekst);
  **komprimeringsteknikk** (kutt brede redegjørelser, prioriter drøfting). Formkravene:
  Calibri 12 pkt, linjeavstand 1,5.
- **Drøftingsakser/struktur:** hvorfor formbrudd trekker (kobler til A–F-beskrivelsen: avvik
  «trinn for trinn»); hvorfor sidetall er et *selvstendig* kriterium.
- **Sjanger/oppgavetyper:** «rett opp APA 7-feil i en gitt referanseliste (uten sidetall →
  med sidetall)»; «skriv en korrekt KI-deklarasjon for et tenkt tilfelle».
- **Typiske feil:** #4 (svak/feil APA uten sidetall), #12 (kilder utenfor kjernelitteratur),
  #13 (udokumentert KI-bruk), #10 (bryter ordgrense).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 8).

### Del 1 — Ledelse, lederskap og styring *(prioritet: PERFEKT — ⭐⭐⭐, i bunn av alt)*

#### Kapittel 1.1: Ledelse, lederskap og styring — grunnbegrepene
**id:** `nih-spm102-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-0-3`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Skillet mellom ledelse, lederskap og styring/management; lederrollen; og
  ledelse som en interaktiv *prosess* (Gjerde, 2022), ikke et enmannsshow — grunnlaget under
  nesten hver eksamensdel.
- **Eksamensbelegg:** Begge epoker, ⭐⭐⭐. Ligger i bunn av nesten hver del; eksplisitt
  læringsmål i alle sett; navngitt i H2022 D1, V2023 D3 og alle 2025/26-deler. Sjangre: BEGR,
  CASE, NIVÅ. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (drøftingsmalen). `collapsible` **Begrep↔forfatter-
  lager:** ledelse som prosess (Hanstad, 2019, s. 159–162 `(verifiser)`; Gjerde, 2022);
  ledelse vs. styring/management; lederrollen.
- **Begrepskontrakt (flashcard-kilde):** **ledelse** (påvirkningsprosess mot mål gjennom
  interaksjon — Gjerde, 2022); **lederskap** (utøvelsen av lederrollen); **styring/
  management** (systemer, struktur, kontroll — administrativ side); **ledelse som prosess**
  (interaksjon, ikke enmannsshow); **lederrollen** i idrettsorganisasjoner (ansatt/valgt/
  trener).
- **Drøftingsakser:** ledelse vs. styring (utfyllende, ikke motsetninger); prosess- vs.
  heltefigur-syn på ledelse (sensorkrav 4 — enmannsshow er minus); når trenger en
  idrettsorganisasjon mer styring vs. mer ledelse.
- **Case-forslag:** en fersk daglig leder i et idrettslag som må balansere styring (rutiner/
  økonomi) og ledelse (motivere frivillige) — drøft gjennom firepunktsmalen.
- **Typiske feil:** #3 (ledelse som enmannsshow), #1 (gjengivelse uten drøfting), #4
  (manglende sidetall).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.2: Lederroller og lederatferd i idrett
**id:** `nih-spm102-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-1-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Lederroller, lederatferd og lederstiler i idrettsorganisasjoner — hvordan
  lederen påvirker gjennom relasjon og interaksjon, og hvordan stil tilpasses situasjon
  (bro til endringsledelse i Del 6).
- **Eksamensbelegg:** Begge epoker, ⭐⭐⭐ (som del av grunnbegrepene). Inngår i CASE og NIVÅ
  (individ-/gruppenivå). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. Prosa-kryssreferanse: anvendt trener-/lederrolle
  beslektet med IDR109 Treningslære (uten lenke). `collapsible` **Begrep↔forfatter-lager:**
  lederatferd; lederstil; relasjonsledelse; situasjonstilpasning (Innbjør & Kleiveland, 2007
  om operativt lederskap).
- **Begrepskontrakt (flashcard-kilde):** **lederatferd** (hva lederen faktisk gjør);
  **lederstil** (mønster i lederatferd); **relasjonsorientert vs. oppgaveorientert ledelse**;
  **situasjonstilpasset ledelse** (stil etter kontekst); **operativt lederskap** (Innbjør &
  Kleiveland, 2007).
- **Drøftingsakser:** én lederstil vs. situasjonstilpasning; relasjon vs. oppgave i
  frivillig-drevet idrett; når fungerer en tydelig, styrende stil vs. en involverende.
- **Case-forslag:** en trener/leder som må skifte stil når laget/organisasjonen endrer seg.
- **Typiske feil:** #3 (enmannsshow), #8 (ingen virkelige eksempler), #1 (gjengivelse).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.3: Ledelse i idrettens organisasjonslandskap (NIF-systemet)
**id:** `nih-spm102-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-1-2`

- **Kapitteltype:** temakapittel (grunnlag → perfekt for kontekst).
- **Description:** Kartet over norsk organisert idrett (NIF, særforbund, idrettskretser,
  idrettslag) og hvor ledelse utøves i systemet — konteksten alle case forankres i.
- **Eksamensbelegg:** Grunnlag/kontekst for GOV (særforbund tilsluttet NIF) og CASE (rolle i
  en gitt organisasjon). Begge epoker. Prioritet: grunnlag (men perfekt som kontekst).
- **Forkunnskaper/kryssbok:** kap. 1.1. Prosa-kryssreferanse: idrett og samfunn beslektet
  med IS205 (uten lenke). `collapsible` **Begrep↔forfatter-lager:** NIF-strukturen; verv vs.
  ansatt; frivillighet i idretten.
- **Begrepskontrakt (flashcard-kilde):** **NIF** (Norges idrettsforbund, paraply);
  **særforbund** (idrettsgren-forbund tilsluttet NIF); **idrettskrets/idrettsråd**;
  **idrettslag** (grunnenheten); **valgt (tillitsvalgt) vs. ansatt** leder; **frivillighet**
  som bærende ressurs. `(verifiser)`: presise organisasjonsnivåer mot gjeldende NIF-lov.
- **Drøftingsakser:** ledelse av frivillige vs. ansatte; ulike ledelsesutfordringer på ulike
  nivåer i systemet (bro til NIVÅ-modellen i Del 2).
- **Case-forslag:** et fiktivt særforbund tilsluttet NIF (gjenganger i GOV-oppgaven).
- **Typiske feil:** #8 (abstrakt uten organisasjonsforankring), #1 (gjengivelse).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (`nih-spm102-1-prove`, chapterNumber 1.P): 1.A ledelse/
lederskap/styring-begreper (BEGR) · 1.B ledelse som prosess vs. enmannsshow (kortdrøfting)
· 1.C lederroller/-stiler i case (CASE) · 1.D samlet grunnbegrepsprøve på eksamensnivå.

### Del 2 — Analysemodellen: trekk × elementer × tre nivåer *(prioritet: PERFEKT — ⭐⭐⭐ nytt, navet)*

#### Kapittel 2.1: Analysemodellen Hanstad & Hansen (2024) — trekk og elementer
**id:** `nih-spm102-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-1-1`

- **Kapitteltype:** temakapittel / modellmodul (perfekt).
- **Description:** Modellen som er navet i dagens eksamen: skillet mellom **«trekk» ved
  (norsk) idrett** og **«elementer i ledelse»** (Hanstad & Hansen, 2024, s. 34) — hva hver
  side rommer og hvordan de kobles. **All inndeling merkes `(verifiser)`** (pensumboka
  ligger ikke i arkivet).
- **Eksamensbelegg:** Epoke 2, ⭐⭐⭐ (navet). 2025/26 8.des D1, 12.des D1–3, utsatt D1.
  Sjanger: NIVÅ, CASE. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (ledelse som prosess), 1.3 (idrettskonteksten).
  `collapsible` **Begrep↔forfatter-lager:** modellens to sider (trekk / elementer) —
  Hanstad & Hansen (2024, s. 34) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **«trekk» ved idrett** (særtrekk ved (norsk)
  idrett som ledelsen må forholde seg til — f.eks. frivillighet, verdibasert, dugnad,
  kommersialisering `(verifiser hvilke trekk modellen navngir)`); **«elementer i ledelse»**
  (de ledelseskomponentene modellen peker på `(verifiser)`); **koblingen trekk ↔ element**
  (hvordan et trekk stiller krav til et ledelseselement).
- **Drøftingsakser:** hvilke trekk er mest styrende for ledelse i en gitt organisasjon; er
  et fenomen et «trekk» eller et «element» (grensetilfeller).
- **Case-forslag:** velg et trekk (f.eks. frivillighet) og vis hvilke ledelseselementer det
  aktiverer i et konkret idrettslag.
- **Typiske feil:** #9 (mangler sammenheng trekk↔element), #1 (gjengivelse av modellen uten
  anvendelse), #5 (bare Hanstad — koble til Gjerde/Yukl).
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 2.2: Ledelse på tre nivåer — organisasjon, gruppe, individ
**id:** `nih-spm102-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** De tre ledernivåene modellen kobler til — **organisasjonsnivå, gruppenivå,
  individnivå** — hva ledelse innebærer på hvert nivå, og hvordan et valgt trekk og et
  element spiller ut ulikt per nivå.
- **Eksamensbelegg:** Epoke 2, ⭐⭐⭐. 2025/26 8.des D2, 12.des D2–D3, utsatt D1. Sjanger:
  NIVÅ. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Begrep↔forfatter-lager:** de tre
  nivåene — Hanstad & Hansen (2024) `(verifiser)`; motivasjon/gruppedynamikk på individ-/
  gruppenivå (bro til 7.2).
- **Begrepskontrakt (flashcard-kilde):** **organisasjonsnivå** (struktur, strategi, kultur
  for hele organisasjonen); **gruppenivå** (team, avdeling, styre som gruppe);
  **individnivå** (motivasjon, relasjon leder–enkeltperson); **nivåspesifikke
  ledelsesoppgaver**; **konsistens på tvers av nivåer**.
- **Drøftingsakser:** hvordan samme ledelseselement (f.eks. tillit) ser ulikt ut på de tre
  nivåene; spenninger mellom nivåene (organisasjonsstrategi vs. individmotivasjon).
- **Case-forslag:** analyser ledelse i en idrettsorganisasjon på alle tre nivåer og vis
  sammenhengen.
- **Typiske feil:** #9 (delene står isolert — mangler sammenheng mellom nivåene), #1
  (gjengivelse), #2 (for mye definisjon av nivåene, for lite anvendelse).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 2.3: Å vise sammenheng — modellen som analyseverktøy
**id:** `nih-spm102-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-2-2`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Å bruke hele modellen (trekk × element × nivå) som ett sammenhengende
  analyseverktøy — «å vise sammenheng» er eksplisitt karakterkriterium (epoke 2). Driller
  det konsistente resonnementet på tvers av nivåer under stram ordfordeling.
- **Eksamensbelegg:** Epoke 2, ⭐⭐⭐. «Vis sammenheng» navngitt karakterkriterium; 12.des
  Del 1 maks 250 ord ren posisjonering, utdyping i Del 2–3. Sjanger: NIVÅ. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1, 2.2. Prosa-kryssreferanse: analyse på masternivå
  beslektet med MA460 (uten lenke). `collapsible` **Begrep↔forfatter-lager:** «vise
  sammenheng»; konsistent resonnement; ordøkonomi under stram fordeling.
- **Begrepskontrakt (flashcard-kilde):** **sammenheng** (eksplisitt kobling mellom valgt
  trekk, ledernivå og element gjennom hele svaret); **posisjonering** (kort, ren plassering
  i Del 1 — maks ~250 ord); **konsistens** (samme røde tråd på tvers av deler).
- **Drøftingsakser:** hvordan holde ett valgt trekk konsistent gjennom alle tre nivåer;
  hva som skiller en isolert nivå-for-nivå-beskrivelse fra et sammenhengende resonnement.
- **Case-forslag:** en flerdels-oppgave (250 ord posisjonering + to utdypende deler) der
  studenten må holde sammenhengen.
- **Typiske feil:** #9 (mangler sammenheng), #10 (bryter stram ordgrense per del), #7
  (overlapp mellom deler).
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 2:** 4 prøver (`nih-spm102-2-prove`, chapterNumber 2.P): 2.A trekk vs.
elementer (BEGR) · 2.B ledelse på tre nivåer (NIVÅ) · 2.C vise sammenheng under stram
ordfordeling (NIVÅ) · 2.D samlet modellprøve på eksamensnivå (nyskrevet flerdels-case).

### Del 3 — Organisasjonskultur og verdibasert ledelse *(prioritet: PERFEKT — ⭐⭐⭐)*

#### Kapittel 3.1: Organisasjonskultur — verdier, normer og virkelighetsoppfatninger
**id:** `nih-spm102-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-1-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva organisasjonskultur er, definert via Schein, Deal & Kennedy og Bang,
  med de tre komponentene verdier, normer og virkelighetsoppfatninger — og hvorfor
  redegjørelsen skal være kort (sensor setter ordtak: maks ~400 ord på definisjonen).
- **Eksamensbelegg:** Epoke 1 (dominerende), ⭐⭐⭐. H2021 D2, V2022 D2, utsatt-D2 (×2),
  V2023 D1, H2023-utsatt D2. Sjanger: BEGR. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Begrep↔forfatter-lager:**
  organisasjonskultur — Schein (1987), Deal & Kennedy (1982), Bang (2013); Hanstad (2019,
  s. 237) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **organisasjonskultur** (felles mønster av
  antakelser/verdier — Schein, 1987); **verdier** (hva som er viktig); **normer** (akseptabel
  atferd); **virkelighetsoppfatninger** (felles forståelse av hva som er sant); Deal &
  Kennedy (1982) og Bang (2013) som supplerende definisjoner.
- **Drøftingsakser:** ulike kulturdefinisjoner mot hverandre; hvorfor definisjonen skal være
  kort (#2 — redegjørelsen skal ikke sluke plassen); kultur som styrbar vs. treg.
- **Case-forslag:** kartlegg kulturen i et idrettslag via de tre komponentene (bruk gjerne
  Canvas-eksempelet Lio «Fjøslukt – eller organisasjonskultur»).
- **Typiske feil:** #2 (for mye plass på definisjonen), #1 (gjengivelse uten drøfting), #4
  (manglende sidetall).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 3.2: Lederens preging av kultur, tillit og kulturendring
**id:** `nih-spm102-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-3-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hvordan lederen preger kulturen, hvorfor kultur er treg å endre, og hvilke
  strukturelle grep som stimulerer nye verdier/normer — med tillit som bærende element.
- **Eksamensbelegg:** Epoke 1, ⭐⭐⭐. V2023 D1 (verdibasert lederadferd/kultur/tillit);
  inngår i kultur-oppgavene. Sjanger: BEGR, CASE. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Begrep↔forfatter-lager:** lederens
  kulturpreging; kulturendring; tillit — Hanstad (2019, s. 237–238, 246–247) `(verifiser)`;
  Canvas: Holmestad, Havnelid (verdibasert ledelse).
- **Begrepskontrakt (flashcard-kilde):** **lederens kulturpreging** (leder som
  kulturbærer/-former); **kulturendring** (treg; krever strukturelle grep); **tillit**
  (bærende i verdibasert ledelse); **strukturelle grep** for å stimulere nye verdier/normer.
- **Drøftingsakser:** kan en leder styre kulturen, eller vokser den nedenfra; hvorfor
  kulturendring møter motstand (bro til endringsledelse i 6.2); tillit som forutsetning vs.
  resultat.
- **Case-forslag:** en ny daglig leder som vil endre en fastlåst klubbkultur — drøft grep og
  barrierer gjennom firepunktsmalen.
- **Typiske feil:** #1 (gjengivelse), #3 (kulturendring som lederens enmannsprosjekt), #8
  (ingen virkelige eksempler).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.3: Verdibasert ledelse i praksis
**id:** `nih-spm102-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-3-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Verdibasert ledelse som praksis — å lede gjennom felles verdier, koble
  verdier til handling, og bruke Canvas-eksemplene (Holmestad, Havnelid) som modeller.
- **Eksamensbelegg:** Epoke 1, ⭐⭐⭐ (del av kultur/verdi-temaet). Sjanger: CASE, BEGR.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1, 3.2. `collapsible` **Begrep↔forfatter-lager:**
  verdibasert ledelse — Hanstad (2019, s. 237–238) `(verifiser)`; Canvas: Holmestad,
  Havnelid.
- **Begrepskontrakt (flashcard-kilde):** **verdibasert ledelse** (ledelse forankret i felles
  verdier); **verdi–handling-koblingen**; **verdiforankring** i idrettsorganisasjoner;
  **verdier som styringsmekanisme** (alternativ/supplement til regler).
- **Drøftingsakser:** verdibasert ledelse vs. regelstyring; når svikter verdibasert ledelse;
  verdier på papir vs. i praksis.
- **Case-forslag:** en organisasjon som vil gå fra regelstyring til verdibasert ledelse.
- **Typiske feil:** #1 (gjengivelse), #8 (abstrakt uten Canvas-/idrettseksempel), #4
  (sidetall).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 3:** 4 prøver (`nih-spm102-3-prove`, chapterNumber 3.P): 3.A
kulturbegrepet + tre komponenter (BEGR, kort definisjon) · 3.B lederens kulturpreging og
tillit (kortdrøfting) · 3.C verdibasert ledelse i case (CASE) · 3.D samlet kultur-/verdi-
prøve på eksamensnivå.

### Del 4 — Styresett (governance) og godt styresett *(prioritet: KUNNE — ⭐⭐⭐ epoke 1, kan gjenoppstå)*

#### Kapittel 4.1: Styresett — hva det er, og grunnene til dårlig governance
**id:** `nih-spm102-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-1-3`

- **Kapitteltype:** temakapittel (kunne, men perfekt i epoke 1).
- **Description:** Hva styresett (governance) er, og — sensorens kjernekrav — *grunnene* til
  at dårlig styresett har vært regelen i internasjonal idrett (åpenhet, etiske komiteer,
  maktkonsentrasjon, penger), ikke en liste over skandaler.
- **Eksamensbelegg:** Epoke 1 (dominerende), ⭐⭐⭐. H2021 D3, V2022 D3, utsatt-D3 (×2), V2023
  D2, H2023-utsatt D1. Sjanger: GOV. Prioritet: kunne (perfekt i epoke 1; ute av korteksamen
  foreløpig, kan gjenoppstå).
- **Forkunnskaper/kryssbok:** kap. 1.3 (NIF-systemet). `collapsible` **Begrep↔forfatter-
  lager:** styresett/governance — Hanstad (2019, s. 203–214, s. 204–205 godt-styresett-
  elementer) `(verifiser)`; Frivillighet Norge (2016).
- **Begrepskontrakt (flashcard-kilde):** **styresett (governance)** (hvordan en organisasjon
  styres og holdes ansvarlig); **godt styresett** (åpenhet, ansvarlighet, demokrati —
  Frivillighet Norge, 2016); **grunner til dårlig governance** (mangel på åpenhet, fravær av
  etiske komiteer, ingen tidsbegrensning på verv, store pengesummer/maktkonsentrasjon);
  **elementer på godt styresett**.
- **Drøftingsakser:** *grunner* vs. *symptomer* (skandaler) — sensorkrav 3; hvorfor
  internasjonal idrett (IOC/FIFA-typen) har vært særlig utsatt; åpenhet vs. effektivitet.
- **Case-forslag:** drøft grunnene til governance-svikt i et internasjonalt forbund
  (nyskrevet), ikke en skandaleliste.
- **Typiske feil:** #6 (lister skandaler i stedet for grunner), #2 (oppramsing av elementer),
  #1 (gjengivelse).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 4.2: Godt styresett i praksis — særforbundet tilsluttet NIF
**id:** `nih-spm102-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-4-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Å anvende godt styresett på et (fiktivt) særforbund tilsluttet NIF —
  hvordan sikre åpenhet, ansvarlighet og demokrati i alle ledd, med ett konkret
  utfordringspunkt (den todelte GOV-oppgavens del b).
- **Eksamensbelegg:** Epoke 1, ⭐⭐⭐ (GOV del b). Sjanger: GOV, CASE. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1, 1.3. `collapsible` **Begrep↔forfatter-lager:**
  godt-styresett-elementer anvendt på forbundsnivå — Frivillighet Norge (2016); Hanstad
  (2019, s. 204–205) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **godt styresett i alle ledd** (forbund →
  krets → lag); **åpenhet/rapportering**; **maktbegrensning** (tidsbegrensning på verv);
  **etiske komiteer/kontrollutvalg**; **medlemsdemokrati**.
- **Drøftingsakser:** hvordan koble makrofenomen (governance-svikt) til praktisk
  forbundsledelse; hvilket ledd er mest sårbart; åpenhet vs. handlekraft.
- **Case-forslag:** et fiktivt særforbund tilsluttet NIF med et konkret governance-problem
  (f.eks. gjenvalg av samme leder i mange perioder).
- **Typiske feil:** #6 (skandaleliste), #2 (oppramsing), #8 (abstrakt uten konkret
  utfordringspunkt).
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 4:** 4 prøver (`nih-spm102-4-prove`, chapterNumber 4.P): 4.A styresett-
begrepet + godt styresett (BEGR) · 4.B grunner til dårlig governance (drøfting — grunner,
ikke skandaler) · 4.C godt styresett i særforbund (GOV/CASE) · 4.D samlet styresettsprøve
(todelt GOV-oppgave på eksamensnivå).

### Del 5 — Velfungerende styre og samarbeid styre–administrasjon *(prioritet: PERFEKT — ⭐⭐⭐)*

#### Kapittel 5.1: Det velfungerende styret og valgkomiteens kriterier
**id:** `nih-spm102-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-1-3`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva som kjennetegner et velfungerende styre, valgkomiteens kriterier
  (idrettstinget 2019) og de typiske ledelsesutfordringene i styrearbeid.
- **Eksamensbelegg:** Epoke 1, ⭐⭐⭐. H2021 D1, V2022 D1, utsatt-D1 (×2), H2022 D1
  (fotballklubb 1000), V2023 D3, H2023-utsatt D1. Sjanger: CASE, BEGR. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Begrep↔forfatter-lager:**
  velfungerende styre — Hanstad (2019, s. 163–177) `(verifiser)`; valgkomité-kriterier
  (idrettstinget 2019).
- **Begrepskontrakt (flashcard-kilde):** **velfungerende styre** (rolleklarhet, kompetanse,
  arbeidsform); **valgkomiteens kriterier** (kompetanse, sammensetning, mangfold);
  **styreutfordringer** (rekruttering, kompetanse, rolleforståelse); **styrets mandat**.
- **Drøftingsakser:** hva gjør et styre velfungerende; kriterier for valgkomité mot praksis;
  kompetanse vs. representativitet i styresammensetning.
- **Case-forslag:** en fersk styreleder i en fotballklubb med 1000 medlemmer (arkiv-
  gjenganger, nyskrevet) — drøft hvordan hen bygger et velfungerende styre.
- **Typiske feil:** #1 (gjengivelse), #2 («alt som skal til for et godt styre» som liste),
  #8 (ingen virkelige eksempler).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 5.2: Samarbeid styre–administrasjon (styret bestiller, administrasjonen leverer)
**id:** `nih-spm102-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-5-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Rolleavklaringen mellom styre og administrasjon — «styret bestiller,
  administrasjonen leverer» — og relasjonen president–generalsekretær, med klar rolleavklaring
  som krav for godkjent svar.
- **Eksamensbelegg:** Begge epoker, ⭐⭐⭐. H2021 D1, V2022 D1, utsatt-D1, V2023 D3, H2023-
  utsatt D1 (relasjon president–generalsekretær). Sjanger: CASE, BEGR. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Begrep↔forfatter-lager:** samarbeid
  styre–administrasjon — Hanstad (2019, kap. 8, s. 184–185) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **styret bestiller – administrasjonen leverer**
  (rolledeling); **rolleavklaring** (kreves for godkjent svar); **president–generalsekretær-
  relasjonen** (valgt topp vs. ansatt topp); **strategisk (styre) vs. operativ
  (administrasjon)** arbeidsdeling.
- **Drøftingsakser:** hvor går grensen styre/administrasjon; når blander styret seg for mye i
  drift; relasjon president–generalsekretær som samarbeid vs. maktkamp.
- **Case-forslag:** en konflikt mellom president og generalsekretær i et særforbund (arkiv-
  gjenganger, nyskrevet).
- **Typiske feil:** #1 (gjengivelse), uklar rolleavklaring (godkjent-krav), #8 (abstrakt).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 5.3: Samarbeid ansatte/ledere ↔ tillitsvalgte/frivillige — makt og ansvar
**id:** `nih-spm102-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-5-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Samarbeidet mellom ansatte/ledere og tillitsvalgte/frivillige, med
  maktdimensjoner og ansvarsfordeling — et gjennomgående og stigende tema, sentralt i epoke
  2 (8.des D1).
- **Eksamensbelegg:** Begge epoker (stigende), ⭐⭐⭐. 2025/26 8.des D1; H2023-utsatt
  (president–generalsekretær); V2023 D3b. Sjanger: CASE, NIVÅ. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.2, 2.2 (nivåer). `collapsible` **Begrep↔forfatter-
  lager:** samarbeid ansatte↔frivillige/tillitsvalgte; makt og ansvarsfordeling — Hanstad
  (2019, kap. 8) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **tillitsvalgt vs. ansatt** (valgt frivillig vs.
  lønnet); **maktdimensjoner** i samarbeidet (formell/uformell makt); **ansvarsfordeling**;
  **frivillighet som ressurs og som ledelsesutfordring**; **rolleavklaring** ansatt↔frivillig.
- **Drøftingsakser:** maktbalansen ansatt–frivillig; hvordan lede frivillige (ikke
  instruere, men motivere); konflikt mellom lønnet og frivillig arbeidskraft.
- **Case-forslag:** en daglig leder som må samarbeide med sterke frivillige/tillitsvalgte om
  en endring — drøft makt og ansvar.
- **Typiske feil:** #3 (leder som styrer frivillige som ansatte), #9 (mangler
  nivåsammenheng), #1 (gjengivelse).
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 5:** 4 prøver (`nih-spm102-5-prove`, chapterNumber 5.P): 5.A velfungerende
styre + valgkomité (BEGR) · 5.B styre–administrasjon-rolledeling (CASE) · 5.C samarbeid
ansatte↔frivillige + makt (CASE/NIVÅ) · 5.D samlet styre-/samarbeidsprøve på eksamensnivå.

### Del 6 — Strategisk/operativ ledelse, endringsledelse og risiko/beredskap *(prioritet: KUNNE/KJENNE — ⭐⭐/nivå 3)*

#### Kapittel 6.1: Strategisk og operativ ledelse
**id:** `nih-spm102-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-5-2`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Skillet mellom strategisk og operativ ledelse — «styret bestiller,
  administrasjonen leverer», men skillet er ikke svart/hvitt (også administrative ledere
  driver strategisk ledelse).
- **Eksamensbelegg:** Epoke 1, ⭐⭐. H2022 D1b, V2023 D3b, H2023-utsatt D1; delvis i alle
  styre-oppgaver. Sjanger: BEGR, CASE. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.2. `collapsible` **Begrep↔forfatter-lager:** strategisk/
  operativ ledelse — Hanstad (2019, s. 184–191) `(verifiser)`; Innbjør & Kleiveland (2007);
  Knudsen & Flåten (2015).
- **Begrepskontrakt (flashcard-kilde):** **strategisk ledelse** (retning, langsiktig, mål —
  Knudsen & Flåten, 2015); **operativ ledelse** (daglig gjennomføring — Innbjør & Kleiveland,
  2007); **skillet er gradvis** (ikke svart/hvitt); kobling til styre/administrasjon-delingen.
- **Drøftingsakser:** hvor skarpt er skillet strategisk/operativ; kan administrasjonen drive
  strategisk ledelse; balansen for en daglig leder.
- **Case-forslag:** en daglig leder som må veksle mellom strategisk og operativt fokus.
- **Typiske feil:** #1 (gjengivelse), #5 (bare Hanstad — bruk Knudsen & Flåten/Innbjør &
  Kleiveland), #4 (sidetall).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 6.2: Endringsledelse
**id:** `nih-spm102-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-3-2`

- **Kapitteltype:** temakapittel (kunne, stigende).
- **Description:** Å lede endring i en idrettsorganisasjon — tilpasse ledelsesstil, involvere
  ansatte og frivillige, og håndtere motstand (dukket opp i utsatt 2025/26).
- **Eksamensbelegg:** Epoke 2 (stigende), ⭐⭐. 2025/26 utsatt D2 (endringsprosesser, 900
  ord); implisitt i styre-oppgaver. Sjanger: CASE, BEGR. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.2 (kulturendring), 1.2 (lederstil). `collapsible`
  **Begrep↔forfatter-lager:** endringsledelse — Yukl (2019).
- **Begrepskontrakt (flashcard-kilde):** **endringsledelse** (lede en organisasjon gjennom
  endring — Yukl, 2019); **tilpasse ledelsesstil** til endringssituasjonen; **involvering**
  av ansatte og frivillige; **motstand mot endring** (kilder og håndtering).
- **Drøftingsakser:** styrt (top-down) vs. involverende endring; hvorfor oppstår motstand;
  hvordan involvere frivillige i endring (kobling til 5.3).
- **Case-forslag:** en organisasjon som skal gjennomføre en upopulær omorganisering — drøft
  ledelse av endringsprosessen (900-ords format).
- **Typiske feil:** #3 (endring som lederens enmannsprosjekt), #1 (gjengivelse), #5 (bare
  Hanstad — bruk Yukl).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.3: Risikoledelse og beredskap ved arrangement
**id:** `nih-spm102-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-1-3`

- **Kapitteltype:** temakapittel (kjenne — pensumbredde).
- **Description:** Risiko- og beredskapsledelse for et storarrangement (Ski-VM-type case),
  med vekt på *prosessen* i risikohåndtering (ikke oppramsing av risikoer) — sensor trekker
  eksplisitt for kataloger.
- **Eksamensbelegg:** Epoke 1, ⭐⭐. H2022 D2 (Ski-VM 2025), H2023-utsatt D3. Sjanger: RISK,
  CASE. Prioritet: kjenne (sentral i epoke 1, ute av korteksamen foreløpig, fortsatt
  læringsmål).
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Begrep↔forfatter-lager:**
  risiko/beredskap — Hanstad (2019, s. 221–230, 238–239) `(verifiser)`; Borch & Andreassen
  (2020); Canvas modul 5B.
- **Begrepskontrakt (flashcard-kilde):** **risiko** (sannsynlighet × konsekvens);
  **risikoprosess/risikohåndtering** (identifisere → vurdere → håndtere → følge opp);
  **beredskapsplan**; **risikostrategi (økonomi)**; **prosjektorganisasjon** (kompleks,
  mange interessenter); **konflikter er uunngåelige**.
- **Drøftingsakser:** *prosess* vs. *katalog* (sensorkrav 2 — presenter prosessen, ikke
  listen); interessent-/kompleksitetsbevissthet; økonomi- vs. sikkerhetsrisiko.
- **Case-forslag:** sikkerhetsansvarlig for et storarrangement (Ski-VM-type, nyskrevet) —
  utvikle en risiko-/beredskapsplan gjennom prosessen.
- **Typiske feil:** #2 (ramser opp risikoer i stedet for prosess — «skal trekkes»), #1
  (gjengivelse), #8 (abstrakt).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (`nih-spm102-6-prove`, chapterNumber 6.P): 6.A strategisk vs.
operativ ledelse (BEGR) · 6.B endringsledelse (CASE, 900-ords format) · 6.C risiko-/
beredskapsprosess (RISK) · 6.D samlet prøve (blandet CASE/RISK på eksamensnivå).

### Del 7 — Pensumbredde: mangfold, kommersialisering og motivasjon *(prioritet: KJENNE — ⭐, læringsmål ikke direkte testet)*

#### Kapittel 7.1: Kjønn, likestilling, mangfold og kommersialisering
**id:** `nih-spm102-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-2-1`

- **Kapitteltype:** temakapittel (kjenne — pensumbredde).
- **Description:** Læringsmål-temaene som står i emneplanen men aldri er testet direkte:
  kjønn/likestilling/mangfold og kommersialisering/privatisering — som hører hjemme i
  «trekk»-siden av analysemodellen.
- **Eksamensbelegg:** Epoke 2, ⭐ (pensum, ikke testet). Læringsmål i 2025/26; ikke direkte
  oppgavetema i arkivet — men kan komme og nevnes i «trekk»-siden av modellen. Sjanger:
  NIVÅ (trekk), CASE. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (trekk-begrepet). Prosa-kryssreferanse: idrett og
  samfunn beslektet med IS205 (uten lenke). `collapsible` **Begrep↔forfatter-lager:**
  kjønn/likestilling/mangfold og kommersialisering som «trekk» ved (norsk) idrett — Hanstad
  & Hansen (2024) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **likestilling og mangfold** i idrettsledelse;
  **kjønn** som ledelses-/rekrutteringstema; **kommersialisering** (marked, sponsor, medie-
  rettigheter); **privatisering**; disse som **«trekk»** som stiller ledelseskrav.
- **Drøftingsakser:** mangfold som verdi vs. praksis; kommersialisering som mulighet vs.
  trussel mot frivillighet/verdier.
- **Case-forslag:** et forbund som vil øke kvinneandelen i styret, eller håndtere en stor
  kommersiell sponsoravtale — koblet til modellens trekk-side.
- **Typiske feil:** #8 (abstrakt), #1 (gjengivelse), #9 (kobler ikke til modellen).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.2: Motivasjon, gruppedynamikk og ledelse i krevende tider
**id:** `nih-spm102-7-2` · **number:** 7.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-spm102-2-2`

- **Kapitteltype:** temakapittel (kjenne — pensumbredde).
- **Description:** Motivasjon og gruppedynamikk på individ-/gruppenivå (epoke 2), samt
  ledelse i krevende tider (korona, mobbing/trakassering) — perifere pensumtemaer som støtter
  nivåanalysen.
- **Eksamensbelegg:** Epoke 2, ⭐. 2025/26 utsatt D1 (motivasjon/gruppedynamikk); ledelse i
  krevende tider læringsmål epoke 1. Sjanger: NIVÅ (individ/gruppe), CASE. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.2 (individ-/gruppenivå), 1.2 (lederstil). Prosa-
  kryssreferanse: motivasjon/gruppedynamikk beslektet med IDR109 Treningslære (uten lenke).
  `collapsible` **Begrep↔forfatter-lager:** motivasjon/gruppedynamikk; ledelse i krevende
  tider (Canvas: lederrollen i krevende tider).
- **Begrepskontrakt (flashcard-kilde):** **motivasjon** (individnivå, i endrings-/samarbeids-
  prosesser); **gruppedynamikk** (gruppenivå); **ledelse i krevende tider** (krise, korona,
  mobbing/trakassering); kobling til de tre nivåene (2.2).
- **Drøftingsakser:** motivere frivillige vs. ansatte; gruppedynamikk i styre/team; ledelse i
  normaltid vs. krise.
- **Case-forslag:** en leder som må holde motivasjonen oppe i en gruppe under en krevende
  omstilling — analysert på individ- og gruppenivå.
- **Typiske feil:** #9 (mangler nivåsammenheng), #1 (gjengivelse), #8 (abstrakt).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (`nih-spm102-7-prove`, chapterNumber 7.P): 7.A mangfold/
kommersialisering som trekk (BEGR/NIVÅ) · 7.B motivasjon og gruppedynamikk (NIVÅ) · 7.C
ledelse i krevende tider (CASE) · 7.D samlet pensumbreddeprøve på eksamensnivå.

### Del 8 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 8.1: Firepunktsmalen i praksis — den komprimerte drøftingen
**id:** `nih-spm102-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-0-2`

- **Kapitteltype:** sjangerkapittel (perfekt, meta).
- **Description:** Å kjøre firepunktsmalen (definer → forankre med sidetall → virkelige
  eksempler → drøft utfordringer/strategier) helt gjennom, komprimert til dagens 1500-ords-
  format med to–tre deler à ulik ordfordeling.
- **Eksamensbelegg:** Gjennomgående (alle sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.2, 0.3. `collapsible` **Sjanger-lager:** firepunktsmalen
  + tidsbudsjett for 4-timers-formatet.
- **Innhold/oppskrift:** trinn-for-trinn disponering av en drøftingsdel under ordgrense;
  tidsbudsjett (lese oppgavesett → kladd/disponer → skrive → gjennomlese); hvordan fordele ord
  når delene har ulik grense (250/600/900). Gjennomskrevet eksempelbesvarelse med
  margkommentarer om hvor uttelling gis.
- **Sjanger/oppgavetyper:** 3–6 nyskrevne drøftingsoppgaver (CASE/BEGR/NIVÅ) med
  momentliste-løsning + disposisjon; minst én med stram ordfordeling.
- **Typiske feil:** #2 (for mye definisjon), #10 (ordgrense), #1 (gjengivelse).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 8.2: Feilvaksinen og selvretting
**id:** `nih-spm102-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm102-8-1`

- **Kapitteltype:** sjangerkapittel / feilvaksine (perfekt, meta).
- **Description:** De tretten dokumenterte feilene (#1–#13) med før/etter-omskrivinger
  (gjengivelse → drøfting; oppramsing → prosess; enmannsshow → prosessledelse; Hanstad-only →
  flerkilde), APA/KI-sjekk, og en binær selvrettingsrubrikk for drøfting.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–10). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 8.1. `collapsible` **Feilkatalog:** #1–#13 med kapittel-
  henvisning (klikkbare lenker til kapitlene som forebygger hver).
- **Innhold/oppskrift:** hver feil (#1–#13) som varsellampe + før/etter-omskriving; **binær
  selvrettingsrubrikk** (☐ standpunkt tidlig? ☐ eksplisitt pensumkobling m/sidetall? ☐
  virkelig eksempel? ☐ innvending drøftet? ☐ begrunnet konklusjon? ☐ alle deler besvart? ☐
  KI deklarert?). Erfarings-bro: hvordan konvertere egen idrettserfaring til pensumforankret
  argument.
- **Sjanger/oppgavetyper:** 3–6 «finn og fiks feilen»-oppgaver på nyskrevne besvarelses-
  utdrag (varier fasiten — aldri «alle feil»/«alle riktig»).
- **Typiske feil:** metafeil — å lære feilkodene uten å endre egen praksis.
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 8.3: Modellbesvarelse I — grunnbegreper + tre nivåer (NIVÅ, epoke 2)
**id:** `nih-spm102-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-2-3`

- **Kapitteltype:** modellbesvarelse (perfekt, meta).
- **Description:** Nyskrevet epoke-2-oppgave (todelt, 1500 ord): posisjoner ledelse på tre
  nivåer og vis sammenheng mellom valgt trekk, ledernivå og element. A-besvarelse +
  kommentert C + autentisk B/bestått-på-marginen, med sensorblikk.
- **Eksamensbelegg:** Epoke 2, NIVÅ (12.des-type). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 1.1, 2.1, 2.2, 2.3. `collapsible` A/C/B-besvarelser +
  `tip` Sensorblikket.
- **Innhold:** full A-tekst med margnotater («her: begrep + forankring m/sidetall», «her:
  sammenheng trekk↔nivå — dette løfter til A»), pausepunkt-markører; ærlig C (gjengir
  modellen, isolerte nivåer, tynn forankring); autentisk B (god sammenheng, litt rotete
  språk, hva som er bra nok); Sensorblikket (momentliste + vekting). Kildenote:
  sensorlogikken bygger på rike veiledninger, modellinndeling `(verifiser)`.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 8.4: Modellbesvarelse II — organisasjonskultur + verdibasert ledelse (BEGR, epoke 1→komprimert)
**id:** `nih-spm102-8-4` · **number:** 8.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm102-3-3`

- **Kapitteltype:** modellbesvarelse (perfekt, meta).
- **Description:** Nyskrevet oppgave: forklar organisasjonskultur (kort!) og drøft lederens
  kulturpreging/tillit — komprimert fra epoke-1-format til dagens 1500 ord, som eksplisitt
  demonstrasjon av komprimering. A + kommentert C + sensorblikk.
- **Eksamensbelegg:** Kultur/verdi (BEGR), komprimert fra treukers til korteksamen.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 3.1, 3.2, 3.3. `collapsible` A/C-besvarelser + `tip`
  Sensorblikket + komprimeringsnotat (fra 4500 til 1500 ord).
- **Innhold:** full A-tekst (kort definisjon — maks ~400 ord, tyngde på drøfting), margnotater
  om hvor redegjørelse blir drøfting; ærlig C (definisjonen sluker plassen — #2); Sensorblikket.
  Vis komprimeringen eksplisitt.
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 8.5: Modellbesvarelse III — styresett/velfungerende styre + øvingseksamen (GOV/CASE)
**id:** `nih-spm102-8-5` · **number:** 8.5 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm102-5-3`

- **Kapitteltype:** modellbesvarelse + øvingseksamen (perfekt, meta).
- **Description:** Nyskrevet todelt oppgave (styresett-grunner + anvendelse på særforbund,
  ELLER velfungerende styre/samarbeid-case) med A + kommentert C + bestått-på-marginen, PLUSS
  en komplett øvingseksamen (4 t, to deler à ulik ordfordeling) med full momentliste-fasit og
  A/C/E-nivåbeskrivelse. Til sammen dekker Del 8 sjangrene CASE/BEGR/NIVÅ/GOV/RISK minst én
  gang.
- **Eksamensbelegg:** GOV + CASE; øvingseksamen speiler dagens todeling. Kildenote:
  sensorlogikken bygger på rike veiledninger `(verifiser)` for indirekte sluttede premisser.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 4.1, 4.2, 5.1, 5.2, 5.3. `collapsible` A/C/B-besvarelser
  + full øvingseksamen-fasit + `tip` Sensorblikket.
- **Innhold:** full A-tekst (grunner ikke skandaler — #6; rolleavklaring tydelig), margnotater;
  ærlig C; bestått-på-marginen; komplett øvingseksamen med to deler, momentliste-fasit,
  A/C/E-nivåbeskrivelse, KI-deklarasjonspåminnelse og «kan deles over flere økter»-merking.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 8:** ingen egen temaprøve (Del 8 ER eksamenstreningen; øvingseksamenen i
8.5 fungerer som generalprøve). De 32 temadelprøvene (Del 1–7, se under) dekker prøvekravet.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–7 = 28 prøver)

Hver prøve speiler eksamensformatet i miniatyr (én drøftingsdel etter firepunktsmalen,
komprimert). Omfang: 20–45 min per prøve — **kan trygt deles over flere økter, én prøve per
økt**. Prøvekapitlene er listet under hver del over (`nih-spm102-<del>-prove`, chapterNumber
`<del>.P`). Fellesmal per del: (1) en begreps-/kortsvarsdrill med pensumforankring, (2) en
kortdrøfting med disposisjonsforslag, (3) en case-/nivåoppgave på nyskrevet materiale, (4)
en full drøftingsdel under tidspress à A/C/E-mal. Flervalgselementer i prøvene har **stokket
fasit** (aldri «alle a»); riktig/galt-lister varierer fasiten.

Del 1 (4): 1.A–1.D · Del 2 (4): 2.A–2.D · Del 3 (4): 3.A–3.D · Del 4 (4): 4.A–4.D · Del 5
(4): 5.A–5.D · Del 6 (4): 6.A–6.D · Del 7 (4): 7.A–7.D. **Sum: 28 temadelprøver** (≥4 per
temadel, kravet oppfylt).

### Komplette øvingseksamener (i Del 8)

Modellbesvarelseskapitlene 8.3–8.5 leverer tre gjennomskrevne besvarelser på flere
karakternivåer (A + kommentert C + autentisk B/bestått-på-marginen), og **8.5 inneholder en
komplett øvingseksamen** (4 t, to deler à ulik ordfordeling, nyskrevet, full momentliste-
fasit + A/C/E-nivåbeskrivelse). Alle følger dagens form (1500 ord, KI-deklarasjon, APA 7
m/sidetall). Til sammen dekker Del 8 sjangrene CASE, BEGR, NIVÅ, GOV og RISK minst én gang.

---

## Kvotesammendrag (summeringskontroll)

Per-kapittel-kvotene fra §3, summert per del og kontrollregnet:

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 (3) | 46 | 40 |
| 1 | 1.1–1.3 (3) | 58 | 64 |
| 2 | 2.1–2.3 (3) | 66 | 70 |
| 3 | 3.1–3.3 (3) | 60 | 66 |
| 4 | 4.1–4.2 (2) | 42 | 46 |
| 5 | 5.1–5.3 (3) | 62 | 68 |
| 6 | 6.1–6.3 (3) | 56 | 56 |
| 7 | 7.1–7.2 (2) | 32 | 32 |
| 8 | 8.1–8.5 (5) | 80 | 78 |
| **SUM** | **27** | **502** | **520** |

**Kontroll:** Quiz **502 ≥ 500** ✓ · Flashcards **520 ≥ 500** ✓ · 27 kapitler · 28
temadelprøver (≥4 per temadel for Del 1–7) + 3 modellbesvarelser med øvingseksamen i Del 8.
Kvotegulvet er oppfylt.

Per-del-verifikasjon av quiz-summen: 46+58 = 104; +66 = 170; +60 = 230; +42 = 272; +62 =
334; +56 = 390; +32 = 422; +80 = **502**. Flashcards: 40+64 = 104; +70 = 174; +66 = 240;
+46 = 286; +68 = 354; +56 = 410; +32 = 442; +78 = **520**.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — dagens form (4 t hjemmeeksamen, 1500 ord ± 10 %, to–tre deler
   à ulik ordfordeling, KI-deklarasjon, APA 7 m/sidetall), epoke-skillet (treukers → kort),
   kildenoten (2021/22, 2022/23, 2025/26; korteksamen bare ett år; pensumbok ikke i arkivet)
   (fra kap. 0.1).
2. **Firepunktsmalen** — definer → forankre m/sidetall → virkelige eksempler → drøft
   utfordringer/strategier, komprimert til 1500 ord; redegjør→drøft-skillet (C → A/B) (fra
   kap. 0.2).
3. **Formkravene** — APA 7 m/sidetall, ordgrense/komprimering, kjernelitteratur-avgrensning,
   KI-deklarasjon (fra kap. 0.3).
4. **Prioriteringskartet** — temafrekvens som tre lesenivåer: *perfekt* (grunnbegreper,
   Hanstad & Hansen-modellen + tre nivåer, organisasjonskultur/verdi, velfungerende styre +
   samarbeid), *kunne* (styresett, strategisk/operativ, endringsledelse), *kjenne* (risiko/
   beredskap, mangfold/kommersialisering, motivasjon/gruppedynamikk).
5. **Modellguiden** — Hanstad & Hansen (2024): trekk × elementer × tre nivåer, med
   sammenheng-nøkkelen (fra Del 2) `(verifiser modellinndeling)`.
6. **Begrep↔forfatter-banken** — alle kjernebegreper med navngitt avsender + sidetall
   (flashcard-speilet i prosaform): ledelse som prosess (Gjerde 2022; Hanstad 2019 s.
   159–162), kultur (Schein 1987; Deal & Kennedy 1982; Bang 2013; Hanstad 2019 s. 237),
   styresett (Hanstad 2019 s. 203–214; Frivillighet Norge 2016), styre/administrasjon
   (Hanstad 2019 s. 184–185), strategisk/operativ (Knudsen & Flåten 2015; Innbjør &
   Kleiveland 2007), endring (Yukl 2019), risiko (Hanstad 2019 s. 221–230; Borch &
   Andreassen 2020). Sidetall `(verifiser)`.
7. **Sensorreglene** — de ti sensorkravene (§2) + A/C/E-kjennetegnene i tabellform.
8. **Feilkatalogen** — de tretten feilene (#1–#13) samlet, hver med kapittelhenvisning.
9. **Studieløp** — hurtigrute (3–5 dager), fulltidsplan og deltidsrute (10–12 uker ~8 t/uke)
   med prøve-/øvingseksamen-innplassering (temadelprøver underveis, øvingseksamen i 8.5 de
   siste ukene, minst én skrevet for hånd på tid).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `nih-spm102` (mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-*.ts`): id `nih-spm102`, title «SPM102 Lederskap i
   idrett (NIH) — eksamensrettet», `level: 'Høyskole'`, alle 27 kapitler med id/number/title/
   description/estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet.
   **`number` SKAL være del-basert («5.2»), ALDRI lineær** — bokforsiden grupperer på
   `number.split('.')[0]`. Prosareferanser bruker samme form («kap. 5.2»). `sectionNames` fra
   §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»). Registrer emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under Norges idrettshøgskole, visningsnavn
   «SPM102 Lederskap i idrett».
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene (CASE/BEGR/NIVÅ/GOV/RISK),
   firepunktsmalen, redegjør→drøft-skillet, formkravene (APA 7 m/sidetall, KI-deklarasjon),
   frekvenstallene og kildenoten som resten av boka refererer til. **Bygg 0.2 grundig —
   firepunktsmalen brukes overalt.**
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: grunnbegreper → modellen → kultur; alt
   hektes på grunnbegrepene og modellen).
4. **Del 4 → Del 5** (styresett bygger på NIF-kontekst fra 1.3; styre/samarbeid bygger på 5.1
   og nivåene fra 2.2) → **Del 6** (strategisk/operativ bygger på styre/administrasjon 5.2;
   endring på kulturendring 3.2; risiko på NIF-kontekst 1.3) → **Del 7** (pensumbredde bygger
   på modellens trekk-/nivåside fra Del 2).
5. **Del 8 til slutt** — sjangerkapitler + modellbesvarelser + øvingseksamen gjenbruker HELE
   boka; bygges av én agent som leser hele skjelettet.
6. **Prøver** (`nih-spm102-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler
   finnes; prøvetitlene er gitt per del i §3 (Del 1–7; Del 0 og Del 8 har ingen egen prøve).
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering etter hvert. Kvotene fra kvotesammendraget er fasit.

Per temakapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text Forkunnskaper +
collapsible Begrep↔forfatter-lager → text Temaet i landskapet (hverdagsanker først) →
definition Kjernebegreper (flashcard-kilden — toppnivå med title!) → text Posisjoner/
drøftingsakser → example Gjennomgangscase (firepunktsmalen) → warning Typiske feil →
exercise ×4–8 (INLINE i løkkene) → collapsible Pensumkart. Del 8 følger **kapittel-DNA B**.
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-spm102-*.json` parser med
      `json.load` (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn.
- [ ] **Metadata-konsistens:** alle 27 kapittel-id-er har eksisterende content-fil; `number`
      del-basert; prosareferanser bruker «kap. X.Y»-form med klikkbare lenker der kapitlet
      finnes; prerequisites peker bakover på eksisterende id-er; `sectionNames` satt; narrativ-
      id-er registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-
      ruter gir 200).
- [ ] **Firepunktsmalen konsekvent:** hvert temakapittel har et gjennomgangscase som følger
      definer → forankre m/sidetall → virkelige eksempler → drøft utfordringer/strategier.
- [ ] **Drøfting > gjengivelse:** hver modellbesvarelse markerer *hvor* redegjørelse blir til
      drøfting; C-besvarelsene er ærlige C-er (gjengivelse, tynn forankring); minst én
      autentisk B/bestått-på-marginen-besvarelse finnes.
- [ ] **Pensumforankring EKTE + sidetall:** alle definisjoner forankret i navngitt forfatter/
      verk (Hanstad, Hanstad & Hansen, Gjerde, Yukl, Innbjør & Kleiveland, Knudsen & Flåten,
      Bang, Schein, Deal & Kennedy, Borch & Andreassen, Frivillighet Norge); INGEN oppdiktede
      kilder; sidetall merket `(verifiser)` der de stammer fra veiledningens referanse.
- [ ] **Modellen `(verifiser)`:** Hanstad & Hansen (2024)-modellens presise inndeling (trekk/
      elementer/nivåer) og utgave-sensitive sidereferanser fagfellesjekkes mot pensumboka i
      byggefasen; grep `-i verifiser` — alle markerte detaljer sjekkes.
- [ ] **Sensorkravene synlige:** drøfting>gjengivelse (#1), prosess>oppramsing (#2),
      grunn>eksempel (#6), ledelse som prosess ikke enmannsshow (#3), APA 7 m/sidetall (#4),
      flerkilde (#5), vis sammenheng (#9), virkelige eksempler (#8), formkrav/ordgrense (#10),
      KI-deklarasjon (#13) — hver dekket i relevant kapittel.
- [ ] **Kvotesum:** quiz ≥502 og flashcards ≥520 fordelt per kapittel som i §3 (hardt minimum
      ≥500/≥500); 28 temadelprøver (4 per temadel Del 1–7) + 3 modellbesvarelser + 1
      øvingseksamen; fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] riktig i
      staging, runtime stokker; statiske prøve-flervalg stokket manuelt).
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssreferanser (interne lenker til eksisterende
      SPM102-kapitler; NIH-klyngen omtalt i prosa UTEN lenke) + collapsible Begrep↔forfatter-
      lager først i hvert kapittel; «bør kjenne til»-stoff (pensumbredde Del 7) merket; hver
      oppgave sjangermerket (CASE/BEGR/NIVÅ/GOV/RISK); læringsløkke Teori→Eksempel→Oppgave
      inline; Del 0-pakken komplett (orienteringsboks, Lite tid?, kildenote, sjangerkort,
      deltidsrute, lese-mye-skrive-lite); karakter-realisme (C er god og vanlig).
- [ ] **Kildenote + formatbrudd synlig:** Del 0 (0.1) og øvingseksamenen (8.5) sier eksplisitt
      hvilke sett/veiledninger analysen bygger på, at korteksamen bare er observert ett
      studieår, og at pensumboka (Hanstad & Hansen 2024) ikke ligger i arkivet — modell-
      inndeling `(verifiser)`.
- [ ] **Opphavsrett:** alle oppgaver, case, øvingseksamener og modellbesvarelser er NYSKREVNE
      — ingen formuleringer fra NIH-oppgavesett eller sensorveiledninger. Pensum refereres
      (forfatter/verk/begrep), aldri sitert i lengde. Standard ledelses-/organisasjonsteori er
      fritt fagstoff.
- [ ] **Uavhengighets-deklarasjon:** emnet registrert i `institusjoner.ts` (driver NIH-navnet
      i `hoyskole-disclaimer.tsx`); bokinnhold fremstiller seg aldri som offisielt/NIH-
      tilknyttet; frekvensanalyse alltid med kildenote + forbehold.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng). ALDRI meld ferdig uten dette.

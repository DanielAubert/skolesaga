# Bokskjelett: SPM103 Idrett og bærekraft (NIH) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (NIH SPM103-arkivet: **10 komplette oppgavesett + 10
> tilhørende sensorveiledninger**, ordinær + utsatt/konte, fra H2021 til V2024 —
> tre studieår). Alle oppgaver, case, «modellbesvarelser» og eksempler i boka skal
> være NYSKREVNE (se §6). Pensumlitteratur refereres (forfatter/verk/begrep), aldri
> siteres i lengde. Sensorveiledningene i SPM-serien er **usedvanlig rike og
> eksplisitte** (fra V2023 gjengis fullstendige, ordrette A–F-kriterier, med
> eksplisitte forventninger per deloppgave) — de brukes aktivt i «Eksamensbelegg»
> og «Sensorkrav». Det finnes **ingen eksempelbesvarelser** i arkivet;
> modellbesvarelser bygges av sensorveiledningens nivåbeskrivelser, ikke av ekte
> A-svar.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-spm103` |
| Tittel | **SPM103 Idrett og bærekraft (NIH) — eksamensrettet lærebok** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «SPM103 Idrett og bærekraft». |
| Arketype | **Drøfting (`DNA-drofting.md`) — modell-/case-forankret variant.** Alle deler er kildebasert drøftingsessay med fast indre logikk (definer begrep → forankre i pensum med APA 7 og sidetall → navngi og *forklar* minst én teoretisk modell → anvend på et konkret, navngitt idrettsledd/arrangement → drøft med for/imot og begrunnet standpunkt), med ÉN signaturmodell (bryllupskakemodellen) og tre gjennomgangscaser. Se §2 «Arketypetilpasning». |
| Antall kapitler | **27** (Del 0: 3 · temadeler 1–6: 18 · eksamenstrening Del 7: 6) |
| Estimert totaltid | **~1 285 min ≈ 21 timer** (per kapittel under) |
| Quiz totalt | **530** (krav ≥500) |
| Flashcards totalt | **540** (krav ≥500) |

**Pitch (ett avsnitt):** SPM103-eksamen har ingen kortsvar eller flervalg — **alle deler
er kildebaserte drøftingsoppgaver** skrevet hjemme over tid, med én fast, gjenkjennelig
mal: *definer sentrale begreper → forankre i pensum (APA 7 **med sidetall** fra 2324) →
navngi og forklar minst én teoretisk modell → anvend på et konkret, navngitt
idrettsledd/arrangement → drøft utfordringer/muligheter med for/imot og et begrunnet
standpunkt.* Tre ferdigheter avgjør karakteren, og boka er bygget baklengs fra dem:
**(1)** overgangen fra *oppramsing/redegjørelse* (gir C) til *selvstendig drøfting*
(løfter til A/B) — sensor gjentar formuleringen «en god og en dårlig besvarelse skiller
seg ved at man evner å foreta en drøfting – ikke bare ramse opp»; **(2)** den
**obligatoriske teoretiske modellen** — nesten hver oppgave krever minst én navngitt og
*forklart* modell (fra V2024 minst to), og sensor sier rett ut at *skillet mellom en god
og en dårlig besvarelse er om kandidaten faktisk finner og bruker en modell*; og **(3)**
**APA 7 med sidetall** som selvstendig karaktersperre — fra 2324 kan en besvarelse *ikke*
få A eller B uten korrekt referanseapparat med sidetall, uansett faglig kvalitet.
Kjernetemaene er stabile: de tre bærekraftsdimensjonene (sosial, økonomisk, klima/miljø)
knyttet til **bryllupskakemodellen** og **planetens tålegrense**, en bærekraftsprosess i
en konkret organisasjon (faser fra vedtak til handling; **dørfeier vs. miljømessig
påvirker/pådriver**; symbolsk/legitimerende implementering), idrettsarrangement +
bærekraft (OL/VM; grønnvasking/sportsvasking), klima/miljø (idrettens avtrykk: fly,
anlegg, gummigranulat), og — i den nyeste 2324-dreiningen — FNs 17 bærekraftsmål, NIFs
faktiske bærekraftstrategi og målkonflikter. Hvert temakapittel leverer et
**begrep↔forfatter-lager** (presise definisjoner med navngitt avsender og sidetall),
**drøftingsakser** (spenninger å drøfte) og **virkelige eksempler** (et fleridrettslag,
et særforbund, et internasjonalt arrangement). Eksamenstreningen driller de seks
oppgavetypene, korrekt APA 7 med sidetall + KI-deklarasjon, og modellbesvarelser på flere
nivåer der forskjellen ligger nøyaktig i overgangen fra oppramsing til modellforankret
drøfting.

**Kalibreringsregler (ufravikelige):**
1. **Firetrinnsmalen med modell** (definer → forankre m/sidetall → navngi og forklar
   modell → anvend på navngitt case → drøft for/imot + standpunkt) er svarskabelonen boka
   driller på tvers av alle kapitler.
2. **Drøfting > oppramsing er karakterskillet.** Ren redegjørelse for pensum gir C;
   selvstendig drøfting løfter til A/B. Modellbesvarelser MÅ markere *hvor* oppramsing
   blir til drøfting.
3. **Teoretisk-modell-refleksen er obligatorisk, ikke pynt.** Å alltid navngi *og
   forklare med pensumreferanse* minst én (fra V2024 minst to) modell er det avgjørende
   karakterskillet — bygges inn som gjennomgående A-signal. En modell nevnt uten å bli
   brukt teller ikke.
4. **APA 7 med sidetall er en hard, selvstendig karaktersperre (fra 2324).** Svak
   sitering presser karakteren til C eller lavere uansett innhold; udokumentert KI-bruk
   (2324) er formbrudd.
5. **Bryllupskakemodellen er fagets signaturmodell.** Den kobler de tre dimensjonene (den
   nestede SDG-strukturen: biosfære/miljø som fundament → samfunn → økonomi) til klodens
   tålegrense — den forventede teoretiske inngangen i dimensjons- og klimaoppgaver.
6. **Konkret forankring pålegges.** Generisk teori uten kobling til et navngitt
   organisasjonsledd/arrangement plasseres lavt; i 2324 kreves navngitt case og (V2024)
   vurdering av NIFs faktiske strategi.
7. **Begge sider av påvirkningsbildet.** Der oppgaven ber om det, må både positive OG
   negative sider av en dimensjon fram — ensidig bilde trekker.
8. **Definisjoner er obligatoriske.** Dørfeier/pådriver, grønnvasking/sportsvasking,
   interessent, målkonflikt og klodens tålegrense *kreves* definert; å hoppe over
   definisjonen trekker.
9. **Pensumforankring EKTE.** Stabile ankere: **Hanstad, Sandvik & Strittmatter (2021)**
   (pensumboka *Idrett og bærekraft*) + **Jones (2017)** (arrangement) + **Nygaard (2019)**
   (grønn markedsføring) + **Hanstad & Strittmatter (2022)** (implementering) + **Vannebo
   & Tjønndal (2022)** (sosial dimensjon/BUA) + **Gammelsæter & Loland (2022)**
   (eliteidrettens miljøkritikk) + **Müller, Wolfe & Gaffney (2021)** (OLs bærekraft) +
   **Meld. St. 40 (2020–2021)** (SDG-ene i Norge). Aldri oppdiktede referanser. Se
   «Utgave-sensitivitet».

**Formatbruddet (kritisk, gjelder hele boka).** Eksamensformen har utviklet seg gjennom
**tre faser**, men er stabil på det bærende: **individuell skriftlig hjemmeeksamen over
tre uker, alle hjelpemidler tillatt, gradert A–F, strykregel per del (leveres ikke én av
delene, blir hele eksamen F).**
- **Fase 1 (H2021–H2022):** tre likt vektede deler, ~4500–5000 ord.
- **Fase 2 (V2023–H2023, «2223»):** tre likt vektede deler, strammere til **3500 ord**;
  **full A–F-skala** og **APA 7** innføres som formelt krav.
- **Fase 3 (H2023–V2024, «2324», dagens form, emneansvarsskifte):** færre, men større og
  mer sammensatte oppgaver (to deler vektet 2/3 + 1/3, eller to likt vektede oppgaver à
  ≥1500 ord med nummererte deloppgaver); **APA 7 med sidetall** som A/B-sperre; **minst to
  teoretiske modeller** i dimensjonsdrøftingen; navngitt organisasjonsledd + vurdering av
  **NIFs faktiske bærekraftstrategi**; **KI-bruk skal deklareres** (skjermdump som vedlegg,
  APA-henvisning).

Boka **kalibreres mot dagens form (fase 3 / 2324)** — sidetall, flere modeller og navngitt
case er avgjørende — men henter øvingscaser fra hele arkivet fordi kjernetemaene er
stabile. **Usikkerhet (`(verifiser)`):** (a) fase 3 er bare observert to sett (ett
studieår) og har nytt emneansvar; (b) enkelte sidereferanser i pensumboka er oppgitt via
veiledningene, ikke fra boka selv; (c) læringsmål i emneplanen om historiske/etiske
perspektiver og enkelte SDG-koblinger står, men er ujevnt testet i arkivet.

**Utgave-sensitivitet.** Pensumboka **Hanstad, Sandvik & Strittmatter (2021)** er ankeret
gjennom hele arkivperioden; begrepene (dimensjoner, dørfeier/pådriver, grønnvasking,
bærekraftsprosess) er stabile, men **enkelte sidereferanser (f.eks. grønnvasking s. 25 og
119) er oppgitt via veiledningene** og merkes `(verifiser)` — skal fagfellesjekkes mot
pensumboka i byggefasen. Emnet er **AKTIVT** (heldigitalt nettemne ved NIH, 10 sp, tilbys
vår; emnesider for Vår 2026 og Vår 2027 verifisert mot nih.no 2026-07-11). **Byggefase-
forbehold:** emneansvarlig er oppgitt som **Bieke Magdalena J. Gils** på Vår 2026-
emnesiden (`(verifiser)`), mens 2324-settene i arkivet hadde **Lis P. Strøm**;
vurderingen er fortsatt prosjektinnlevering (hjemmeeksamen), gradert A–F. Emneansvars-/
ordgrense-detaljer kan endres — byggefasen bør sjekke gjeldende emneside og evt. ferske
sett før boka meldes helt ferdig.

---

## 2. Makrostruktur

Følger DNA-drøfting-malen: Del 0 (eksamenskart + drøftingshåndverk) → temadeler etter
analysens temafrekvens, tyngst først → eksamenstrening (sjangerkapitler + feilvaksine +
modellbesvarelser). Omfang per del følger gjenganger-score fra analysen §2/§7.
Rekkefølgen legger **bærekraftsbegrepet + de tre dimensjonene** og **modellbanken** først,
fordi alt annet hektes på dem: dimensjonsdrøftingen og modellrefleksen er navet i nesten
hvert eneste sett.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og drøftingshåndverk | 3 | perfekt (meta) | DNA-obligatorisk + ett ekstra kapittel: eksamen har hardt formkrav (APA 7 m/sidetall, KI-deklarasjon, ordgrense, strykregel per del) OG en fast firetrinnsmal med obligatorisk modell — begge etableres FØR fagstoffet. |
| 1 | Bærekraftsbegrepet og de tre dimensjonene | 4 | perfekt (⭐⭐⭐) | Bærebjelken (score ~9): definer bærekraft (Brundtland) + de tre dimensjonene (sosial, økonomisk, klima/miljø), positiv OG negativ idrettspåvirkning i hver, og hvordan de henger sammen. I nesten hvert sett. |
| 2 | Modellbanken: teoretiske innganger | 4 | perfekt (⭐⭐⭐) | **Karakterskilleren** (score ~7): bryllupskakemodellen (signatur), planetens tålegrense, økologisk modernisering, sirkulær økonomi, interessentteori. Modellbruk er selve skillet god/dårlig; fra V2024 kreves minst to. |
| 3 | Bærekraftsprosess og implementering | 3 | perfekt (⭐⭐⭐) | Grunnpilar (score ~8): faser vedtak→handling, muligheter/utfordringer, symbolsk/legitimerende implementering, **dørfeier vs. pådriver** (score ~6), interessentinvolvering. |
| 4 | Idrettsarrangement, grønnvasking og sportsvasking | 3 | perfekt (⭐⭐⭐) | Grunnpilar (score ~8): OL/VM, IOCs strategi, sirkulær økonomi som inngang, Müller m.fl.; grønnvasking/sportsvasking (score ~4–5, definisjon kreves) med Qatar/Beijing. |
| 5 | Klima, miljø og planetens tålegrense | 2 | perfekt (⭐⭐⭐) | Score ~5: klimamål (1,5/2 °C, Parisavtalen), idrettens avtrykk (fly, anlegg, gummigranulat), dilemmaer, grønn samfunnstransformasjon. Planetens tålegrense som forventet inngang. |
| 6 | SDG-ene, NIFs strategi og målkonflikter | 2 | kunne (⭐⭐ stigende) | 2324-dreiningen: FNs 17 SDG (velg-fem, score ~2), NIFs faktiske bærekraftstrategi + målkonflikter (nytt, stigende), statlig styring/idrettens autonomi (Meld. St. 40, perifert). |
| 7 | Eksamenstrening | 6 | perfekt (meta) | 2 sjangerkapitler (firetrinnsmalen komprimert + APA/sidetall/KI + feilvaksine) + 4 modellbesvarelser (A + kommentert C + autentisk B/E) på de seks oppgavetypene. DNA-krav ≥3 modellbesvarelser. |

Rasjonale: de tre ⭐⭐⭐-grunnpilarene (dimensjoner, prosess, arrangement) + modellbanken
og klima får hver sin fulle del; SDG/NIF-strategi får en kompakt del (stigende, men bare
observert i de nyeste settene). Nesten hele temakjeden testes hvert sett i ulike
kombinasjoner, så prioriteringen styrer *dybde og drillmengde*, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og drøftingshåndverk |
| 1 | Bærekraftsbegrepet og de tre dimensjonene |
| 2 | Modellbanken: teoretiske innganger |
| 3 | Bærekraftsprosess og implementering |
| 4 | Idrettsarrangement, grønnvasking og sportsvasking |
| 5 | Klima, miljø og planetens tålegrense |
| 6 | SDG-ene, NIFs strategi og målkonflikter |
| 7 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under; alltid skrevet fullt ut ved første bruk i boka)

**DIM** (dimensjonsdrøfting med teoretisk modell — forklar bærekraft + de tre dimensjonene
med minst én, fra V2024 to, navngitte modeller; drøft positiv OG negativ idrettspåvirkning
i hver; vis hvordan dimensjonene henger sammen). · **PROS** (bærekraftsprosess i en konkret
organisasjon — faser vedtak→handling; muligheter/utfordringer; symbolsk implementering; ta
begrunnet standpunkt dørfeier vs. pådriver). · **ARR** (idrettsarrangement + bærekraft —
konkret arrangement/internasjonal idrett; hvorfor og hvordan arbeide med bærekraft i de tre
dimensjonene; ofte koblet til grønnvasking i markedsføring). · **KLIMA** (klima- og
miljødrøfting — hvordan idretten kan bli mer klimavennlig / bidra til klimamålene; planetens
tålegrense som inngang; idrettens negative avtrykk + dilemmaer). · **INT** (interessent- og
endringsoppgave — hvilke aktører må en endringsagent/organisasjon få med for reell endring,
og hvorfor; involvering «fra ord til handling»). · **STRAT** (strategi- og
målkonfliktoppgave, ny 2324 — vurder NIFs faktiske bærekraftstrategi ut fra en modell; drøft
målkonflikter i en konkret idrettsgren; anbefal interessentinvolvering). Firetrinnsmalen med
modell (definer → forankre m/sidetall → navngi/forklar modell → anvend på navngitt case →
drøft for/imot + standpunkt) ligger under alle sjangrene.

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> Sensorveiledningene i SPM-serien er svært eksplisitte: fra V2023 gjengis en fullstendig,
> standardisert A–F-beskrivelse i hvert sett, med forventninger per deloppgave.
> Karakterkriteriene er derfor **dokumentert**, ikke gjettet. Der noe er sluttet indirekte
> (særlig enkelte sidereferanser og fase 3s stabilitet), er det merket `(verifiser)`.

1. **Drøfting > oppramsing.** Den mest gjentatte innsikten i alle veiledninger: «en god og
   en dårlig besvarelse skiller seg ved at man evner å foreta en drøfting – ikke bare ramse
   opp.» Ren redegjørelse gir C og nedover; selvstendig drøfting (for/imot, standpunkt)
   løfter til A/B.
2. **Teoretisk modell er påkrevd, ikke pynt.** Nesten hver oppgave krever minst én navngitt
   teoretisk inngang; sensor sier rett ut at *det avgjørende skillet er om kandidaten
   faktisk finner og bruker en modell*. Modellen må **forklares med pensumreferanse**, ikke
   bare nevnes. Fra V2024 kreves minst to.
3. **APA 7 med sidetall er en selvstendig karaktersperre (fra 2324).** For A/B kreves
   korrekt, eksplisitt APA 7 med sidetall. Kilder bare i tekst ELLER bare i liste presser
   til E-nivå. Svakt referanseapparat stopper karakteren på C eller lavere uansett faglig
   kvalitet.
4. **Konkret, navngitt forankring.** A/B krever anvendelse på et navngitt organisasjonsledd/
   arrangement; generisk teori uten idrettskontekst plasseres lavt. 2324: navngi ledd, bruk
   NIFs faktiske strategi, velg ulike case i ulike oppgaver.
5. **Helhetsforståelse.** A/B krever at kandidaten viser hvordan dimensjoner, prosess,
   interessenter og modeller henger sammen — ikke isolerte deler.
6. **Definisjoner kreves.** Dørfeier/pådriver, grønnvasking/sportsvasking, interessent,
   målkonflikt og klodens tålegrense skal defineres; å hoppe over trekker.
7. **Begge sider av påvirkningsbildet** der oppgaven ber om det (positiv OG negativ).
8. **Kjernelitteratur bærer, Canvas er supplement.** For tung lening på Canvas-moduler/filmer
   i stedet for kjernelitteratur trekker.
9. **Formkrav holdes** (ordgrense per del; hver del ofte med egen minstegrense; kort svar der
   det bes om «2–3 setninger»). **Manglende del ⇒ F for hele eksamen.** Absolutt regel.
10. **KI-deklarasjon (2324)** — bruk av KI-verktøy skal opplyses, dokumenteres med skjermdump
    og siteres i APA-stil; manglende opplysning er formbrudd/potensielt fusk.

Karakterskalaen (fra V2023, omskrevet): **A** avansert forståelse, dybde i begreper og
teori, helhetsforståelse, alle referanser korrekte etter APA 7 (med sidetall fra 2324); **B**
meget god, relevant pensum brukt, eksplisitte APA 7-referanser; **C** god med noen mangler,
kilder ikke alltid helt korrekt APA 7; **D** nokså god, referanseliste ikke i tråd med APA 7;
**E** minimumskravet, overfladisk, uklar kildebruk (kun i tekst eller kun i liste); **F**
manglende innsikt / ingen reell litteraturkobling — **eller** automatisk F hvis én oppgave
ikke er besvart.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved FØRSTE bruk i hvert kapittel)

**#1** Oppramsing i stedet for drøfting (den vanligste C-stopperen — dimensjoner/begreper
listes uten avveining, for/imot eller standpunkt). · **#2** Ingen teoretisk modell (dropper
den påkrevde inngangen — selve skillet god/dårlig). · **#3** Modell nevnt, men ikke forklart
med pensumreferanse (brukt som stikkord uten belegg). · **#4** Svakt APA 7-apparat —
manglende sidetall (fra 2324), inkonsekvent sitering, kilder bare i liste eller bare i tekst
(selvstendig karaktersperre). · **#5** Generisk, ikke-konkret besvarelse (teori uten navngitt
ledd/arrangement). · **#6** Canvas som hovedkilde (for tung lening på moduler/filmer). · **#7**
Manglende del ⇒ automatisk F. · **#8** Overskriver instruksjonen om kort svar (lang utlegning
der det bes om «2–3 setninger»). · **#9** Definisjon mangler (dørfeier/pådriver, grønnvasking/
sportsvasking, interessent, målkonflikt, tålegrense). · **#10** Ensidig påvirkningsbilde (bare
positive eller bare negative sider). · **#11** Ordomfang utenfor rammen (for kort/langt; husk
egen minstegrense per del). · **#12** Udeklarert KI-bruk (2324 — skjermdump + APA-henvisning
kreves).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Drøfting i modell-/case-forankret variant.** DNA-drøfting forutsetter essay-/
   begrepsdrøfting. SPM103 legger til tre særtrekk fra analysen §7: **(i)** en **modellbank**
   som egen del (Del 2), fordi det å navngi og forklare en teoretisk modell er selve
   karakterskilleren — senere kapitler kobler tilbake til modellene; **(ii)** **tre
   gjennomgangscaser** (et lite fleridrettslag, et særforbund tilsluttet NIF, et
   internasjonalt arrangement) som føres gjennom dimensjoner → prosess → interessenter →
   dørfeier/pådriver, slik at hvert begrep demonstreres *anvendt*; **(iii)** konsekvent
   **firetrinnsmal med obligatorisk modell** som svarskabelon.
2. **Firetrinnsmalen som fast svarskabelon.** README-kravet om drøftingsstruktur
   konkretiseres til malen sensorveiledningene selv belønner: definer → forankre m/sidetall
   → navngi og forklar modell → anvend på navngitt case → drøft for/imot + standpunkt. Del 0
   etablerer den; hvert temakapittel har et gjennomgangscase som følger den; Del 7 driller
   komprimering og modellbruk.
3. **«Pensumkart for kapitlet» → «Begrep↔forfatter-lager med sidetall».** DNA-collapsiblen
   utvides med **sidereferanser** (APA 7-krav): hvert begrep kobles til forfatter/verk OG
   sidetall der veiledningene oppgir det (f.eks. grønnvasking: Hanstad m.fl. 2021, s. 25 og
   119 `(verifiser)`; dørfeier/pådriver: pensumbokas kap. 3; bærekraftsprosess: kap. 6).
   Sidetall merket `(verifiser)` der de stammer fra veiledningens referanse, ikke fra
   pensumboka selv.
4. **APA 7 + sidetall + KI-deklarasjon som eget håndverkskapittel (0.3).** Fordi svakt
   referanseapparat er en selvstendig A/B-sperre (sensorkrav 3; #4) og udeklarert KI-bruk er
   formbrudd (sensorkrav 10; #12), får formkravene, sidetall-tillegget og KI-deklarasjonen et
   eget kapittel.
5. **Modellbanken som eget nav.** Der DNA-drøfting sprer begreper utover temakapitlene,
   samler SPM103 de fem teoretiske inngangene i Del 2 (egen modellmodul), fordi «finn og
   forklar en modell» er den mest gjentatte instruksjonen — og fordi V2024 krever minst to.
6. **Kryssreferanser til NIH-klyngen (prosa, ikke lenker — søsterbøkene er ikke bygget
   ennå).** Der SPM103 grenser mot andre NIH-emner, omtales overlappet i prosa **uten
   lenke** for å unngå døde referanser: **SPM102 Lederskap i idrett** (nærmeste søster —
   ledelse/interessentteori/endringsledelse i idrettsorganisasjoner; samme
   drøftings-/firepunktsmal og sensorregime); **IS205/IS225** (idrett og samfunn — styring,
   autonomi vs. statlig føring); **MET200/MET402** (metode/APA-forankring); **PPU406** (idrett
   og danning); **MA460** (masternivå analyse/drøfting); **IDR109** (anvendt/case). Der
   forkunnskap dekkes i SPM103 selv (bærekraftsbegrepet i Del 1, modellene i Del 2), brukes
   intern kryssreferanse med lenke.
7. **Ingen oppdiktede kilder eller sidetall.** Usikre sidereferanser og pensumdetaljer merkes
   `(verifiser)`. Sensorpremisser er dokumenterte (rike veiledninger med A–F-kriterier fra
   V2023), men enkelte sidereferanser er utgave-sensitive (§1).
8. **Modellbesvarelser fra nivåbeskrivelser, ikke ekte A-svar.** Arkivet har INGEN
   eksempelbesvarelser — alle modellbesvarelser i boka konstrueres fra sensorveiledningenes
   A/C/E-nivåbeskrivelser, ikke fra faktiske studentsvar. Del 0 og Del 7 sier dette
   eksplisitt.

**Avvik fra prompt-ordningen (dokumentert):** Del 0 har tre kapitler (mot DNA-normen to)
fordi formkravene (APA 7 m/sidetall, KI-deklarasjon, ordgrense per del med egen minstegrense,
strykregel) er et hardt selvstendig karakterkriterium som fortjener eget håndverkskapittel.
Modellbanken er skilt ut som egen Del 2 (mellom dimensjonene og prosessen) fordi modellbruk
er karakterskilleren og forutsetning for resten. Ellers følger boka DNA-drøfting-malen.

### Kapittel-DNA A — temakapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), organisert som læringsløkker
(Teori → Eksempel → Oppgave inline, jf. kontrakten øverst):

1. `tip` **Eksamensvinkel** — frekvens/fase, hvilke sjangre (DIM/PROS/ARR/KLIMA/INT/STRAT)
   temaet inngår i, hva sensor ser etter. Fylles fra kapitlets Eksamensbelegg — forfatteren
   finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + prosa-kryssreferanser til
   NIH-klyngen der relevant (uten lenke, jf. §2.6), etterfulgt av `collapsible`
   **Begrep↔forfatter-lager** (begrep → forfatter/verk → sidetall `(verifiser)` → nyansen
   forfatteren legger i det).
3. `text` **Temaet i fagets landskap** — kort: hvilket bærekraftsproblem det svarer på, hvor
   det står i debatten. Åpne gjerne med et **hverdagsanker** (en konkret idretts-situasjon)
   før begrepsapparatet.
4. `definition` **Kjernebegreper** — hvert begrep presist definert OG forankret (forfatter/
   verk + sidetall). **Toppnivå med `title` — dette er flashcard-kilden.** Definisjon uten
   avsender er C-stoff.
5. `text` **Posisjoner og drøftingsakser** — spenningene kapitlet ruster studenten til å
   drøfte (styrker MOT begrunnede svakheter; for/imot; kvaliteten på argumentet, ikke
   standpunktet).
6. `example` × 1–3 **Gjennomgangscase** — temaet brukt på en nyskrevet, virkelig-nær case
   (fleridrettslag med ~1000 medlemmer; fiktivt særforbund tilsluttet NIF; internasjonalt
   arrangement), skrevet slik en god besvarelse ville gjort det gjennom firetrinnsmalen, med
   eksplisitte pensumreferanser (sidetall) og minst én navngitt, forklart modell underveis.
7. `warning` **Typiske feil** — feilkodene (#1–#12) som gjelder temaet; inkl. eksplisitt
   «oppramsing uten drøfting = C» (#1), «modell nevnt men ikke forklart» (#3) og «uten
   sidetall kan svaret ikke få A/B» (#4).
8. `exercise` × 4–8 (INLINE i løkkene) — 2–3 begreps-/kontrolloppgaver (lette, egne ord),
   1–2 kortdrøftinger (løsning = disposisjon + momentliste), 1–2 case-/eksamenslike
   drøftingsoppgaver (løsning = firetrinns-disposisjon + sensorblikk, ikke fullt essay).
   Alle med `hints` (første hint = firetrinnsmalens neste steg / hvilken modell som biter,
   aldri konklusjonen) og sjangermerking (DIM/PROS/ARR/KLIMA/INT/STRAT).
9. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → sidetall → hvilke begreper/
   poenger de «eier» (flashcard-råstoff), åpnet med begrepsbank-notisen.

### Kapittel-DNA B — sjanger-/modellbesvarelseskapittel (Del 7)

Sjangerkapittel: `tip` Eksamensvinkel → `text` **Oppskrift** (trinn-for-trinn disponering av
sjangeren med tidsbudsjett — her: hvordan bruke treukersvinduet; kladd, kildejakt, skriving,
referansekontroll) → `example` **Gjennomskrevet besvarelse** med margkommentarer → `exercise`
× 3–6 nyskrevne oppgaver med momentliste-løsning. Modellbesvarelseskapittel: nyskrevet oppgave
→ `collapsible` **A-besvarelse** (full tekst, margnotater «her: begrep + forankring m/sidetall»,
«her: modell navngitt og forklart — dette løfter til A», «her: oppramsing blir drøfting»,
pausepunkt-markører) → `collapsible` **Kommentert C-besvarelse** (ærlig C: oppramsing uten
drøfting, modell nevnt men ikke brukt, kilder uten sidetall, notater om gapet) → `collapsible`
**Autentisk B-/E-besvarelse** (minst én midtnivå-besvarelse med ekte studentspråk, litt rotete
men god; siden emnet er gradert A–F) → `tip` **Sensorblikket** (momentliste + vektlegging,
bygget på nivåbeskrivelsene — ingen ekte A-svar finnes).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = fase + telte nedslag + sjangerkoder + prioritetsklasse.
> **Begrepskontrakt** = begreper som SKAL defineres m/pensumforankring (flashcard-kilden).
> **Drøftingsakser** = spenningene kapitlet skal ruste til å drøfte. **Case-forslag** =
> anvendelseseksempler. **Kvote** = quiz/flashcards. Sidetall merket `(verifiser)`
> fagfellesjekkes i byggefasen mot pensumboka.

### Del 0 — Eksamenskart og drøftingshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes SPM103
**id:** `nih-spm103-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (treukers hjemmeeksamen, alle hjelpemidler, gradert A–F,
  flerdelt med vekting, strykregel per del), de seks oppgavesjangrene (DIM, PROS, ARR, KLIMA,
  INT, STRAT) og firetrinnsmalen med obligatorisk modell, temafrekvensene, sensorkravene,
  kildenoten og fase-utviklingen — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet: 10 oppgavesett + 10 sensorveiledninger,
  H2021–V2024, tre studieår). Skal formidle: (a) **formen** — individuell skriftlig
  hjemmeeksamen over tre uker, alle hjelpemidler, gradert A–F, flerdelt der delene vektes,
  strykregel per del (manglende del ⇒ F), referanseliste i tillegg til ordgrensen; alle deler
  drøftingsessay (ingen flervalg/kortsvar); (b) **fase-utviklingen** — fase 1 (3 likt vektede
  deler, ~5000 ord), fase 2 (3 deler, 3500 ord, APA 7 innføres), fase 3/2324 (2 sammensatte
  oppgaver, APA 7 m/sidetall som A/B-sperre, minst to modeller, navngitt case + NIFs strategi,
  KI-deklarasjon); (c) **temafrekvens-tabellen** (analysen §2) med de tre grunnpilarene; (d)
  **sensorkravene** (§2); (e) **kildenoten** (under); (f) **firetrinnsmalen** (henvis til 0.2);
  (g) **formkravene** (henvis til 0.3). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen (DIM/PROS/ARR/KLIMA/INT/STRAT) som studentens
  sjekkliste med frekvens per sjanger; prognosen for neste sett (analysen §7: nesten sikkert én
  dimensjonsoppgave + modell, én bærekraftsprosess (dørfeier/pådriver), én arrangements-/
  grønnvaskingsoppgave, én klima-/tålegrenseoppgave; stigende: NIF-strategi/målkonflikt).
  **Del 0-pakken (README):** «Slik leser du denne boka»-boks (`tip`, IKKE definition —
  forklarer A–F-skalaen, hva «C-stoff»/«A-markør» betyr, sjangerkodene skrevet fullt ut, at
  feil har et samlet register #1–#12); «Lite tid?»-boks (`tip`) med 3–5-dagers hurtigrute +
  timeanslag (LESEtid; å skrive selv tar mer — hjemmeeksamen skrives over tre uker);
  **kildenote** (hvilke sett/veiledninger analysen bygger på — H2021–V2024 — og forbeholdet om
  at fase 3 bare er observert ett studieår, at emneansvaret er endret, og at det ikke finnes
  eksempelbesvarelser i arkivet); prosedyre-/sjangerkort på ÉN side (sjanger → én linjes
  oppskrift → tidsbudsjett → vanligste feil); deltidsrute (10–12-ukers plan ~8 t/uke); «lese
  mye, skrive lite»-boks (les oppgaven → formuler modellforankret svar mentalt → les
  modellsvaret som sensor + skriv minst én øvingsdel selv med korrekt APA 7). **Karakter-
  realisme:** C er en god og vanlig karakter; «Gapet til A» rammes som oppgraderingsmeny, ikke
  mangelliste. Ingen forkunnskapsblokk (metakapittel).
- **Sjangre/oppgavetyper:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt et sett
  med to oppgaver vektet 2/3 + 1/3 — sett opp tidsbudsjett og rekkefølge for treukersvinduet»
  og «avgjør av en oppgavetekst hvilken sjanger (DIM/PROS/ARR/KLIMA/INT/STRAT) den krever og
  hvilken modell som biter».
- **Typiske feil:** Metafeilene: tro at én modell holder når V2024 krever to (#2); droppe
  sidetall i APA 7 (#4); utelate en del (#7 → automatisk F); lene seg på Canvas i stedet for
  kjernelitteratur (#6); droppe KI-deklarasjonen (#12).
- **Kvote:** 14 quiz / 10 flashcards (formfakta, fasene, sjangerkodene, temafrekvens,
  sensorkravene, A–F-skalaen, kildenoten).

#### Kapittel 0.2: Drøftingshåndverket og firetrinnsmalen med modell
**id:** `nih-spm103-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftingsstruktur).
- **Description:** Ferdigheten som avgjør karakteren: å bygge en drøftingsbesvarelse etter
  firetrinnsmalen (definer → forankre m/sidetall → navngi og forklar minst én modell → anvend
  på navngitt case → drøft for/imot + begrunnet standpunkt), OG å ta steget fra oppramsing/
  redegjørelse (C) til selvstendig drøfting (A/B). Etablerer strukturen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 4, 5 på tvers av alle sjangre).
  «Bruk minst én teoretisk inngang» og «drøft – ikke bare ramse opp» er de to mest gjentatte
  instruksjonene i hele arkivet. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. Prosa-kryssreferanse: samme drøftings-/firepunktsmal
  brukes i SPM102 Lederskap i idrett; metode-/APA-forankring beslektet med MET200/MET402 (uten
  lenke). `collapsible` **Struktur-lager:** firetrinnsmalens ledd + redegjør→drøft-overgangen
  som huskeliste.
- **Begrepskontrakt (flashcard-kilde):** **firetrinnsmalen** (de fire/fem leddene);
  **redegjøre** (gjengi presist = C-nivå) vs. **drøfte** (veie for/mot, problematisere,
  konkludere begrunnet = A/B-nivå); **teoretisk inngang/modell** (navngitt OG forklart med
  pensumreferanse — den obligatoriske komponenten); **pensumforankring med sidetall** (APA 7);
  **konkret, navngitt case** (idrettsledd/arrangement, ikke abstrakt); **begrunnet standpunkt**
  (det er kvaliteten på argumentet som premieres, ikke standpunktet). **Begrunnelsesmalen:** «X
  er en utfordring/mulighet fordi [pensumforankret grunn]; ifølge [navngitt modell] betyr det
  Y, som [drøftes mot en innvending fra navngitt kilde], og jeg konkluderer med Z fordi …»
- **Drøftingsakser/struktur:** vis på ett eksempel hvordan et redegjørelsesledd (definisjon)
  blir til et drøftingsledd (veiing med modell); at det er lov å argumentere for et «uventet»
  standpunkt så lenge argumentet holder (analysen §3, Type A); hvordan malen komprimeres fra
  fase-1-formatet (5000 ord) til dagens sammensatte oppgaver.
- **Sjanger/oppgavetyper:** «marker i en gitt (nyskrevet) besvarelse hvor oppramsing blir til
  drøfting, og hvor modellen faktisk brukes vs. bare nevnes»; «disponer en dimensjonsdrøfting
  etter firetrinnsmalen med minst to modeller».
- **Typiske feil:** #1 (oppramser i stedet for å drøfte), #2 (ingen modell), #3 (modell nevnt
  men ikke forklart), #5 (generisk uten case).
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 0.3: Formkrav, APA 7 med sidetall og KI-deklarasjon
**id:** `nih-spm103-0-3` · **number:** 0.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm103-0-2`

- **Kapitteltype:** håndverkskapittel (meta — formkrav).
- **Description:** De formelle kravene som påvirker karakteren direkte: APA 7 med **sidetall**
  i alle tekstreferanser (bøker, artikler, rapporter — A/B-sperre fra 2324), ordgrense per del
  med egen minstegrense, strykregel per del, avgrensning til kjernelitteratur (Canvas som
  supplement), og korrekt KI-deklarasjon (skjermdump som vedlegg, APA-henvisning).
- **Eksamensbelegg:** Gjennomgående hardt formkrav (sensorkrav 3, 8, 9, 10; #4, #6, #7, #11,
  #12). APA 7 innført i fase 2, skjerpet med **sidetall-krav** i fase 3/2324; KI-deklarasjon
  nytt i 2324. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.2. Prosa-kryssreferanse: APA 7 / kildehåndtering beslektet
  med metodefagene MET200/MET402 og med SPM102s formkrav-kapittel (uten lenke). `collapsible`
  **Formkrav-lager:** APA 7-mønstre med sidetall (bok, kapittel, artikkel, rapport, AI-generert
  tekst) i kortform.
- **Begrepskontrakt (flashcard-kilde):** **APA 7 med sidetall** (in-text m/sidetall +
  referanseliste; NIH-tillegget utover vanlig APA 7); **ordgrense** (fase 3: to oppgaver à
  ≥1500 ord, eller 2/3 + 1/3-vekting; referanseliste i tillegg; egen minstegrense per del);
  **strykregel per del** (manglende del ⇒ F for hele eksamen); **kjernelitteratur-avgrensning**
  (kjerne + anbefalt litteratur bærer; Canvas er supplement); **KI-deklarasjon** (opplyses,
  hvilket verktøy, hvor og hvordan; skjermdump som vedlegg; APA-henvisning for AI-generert
  tekst); **grønnvasking innenfra** som fristelse (pynt uten forankring).
- **Drøftingsakser/struktur:** hvorfor sidetall er et *selvstendig* kriterium (kan blokkere
  A/B uansett innhold); hvorfor Canvas ikke skal bære besvarelsen; hvorfor «kort svar der det
  bes om kort svar» (#8) er et poeng, ikke en formalitet.
- **Sjanger/oppgavetyper:** «rett opp APA 7-feil i en gitt referanseliste (uten sidetall → med
  sidetall)»; «skriv en korrekt KI-deklarasjon for et tenkt tilfelle»; «avgjør om en gitt
  kildebruk kan gi A/B».
- **Typiske feil:** #4 (svak/feil APA uten sidetall), #6 (Canvas som hovedkilde), #7 (utelater
  en del → F), #11 (ordgrense), #12 (udeklarert KI-bruk).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingsoppgavene i Del 7).

### Del 1 — Bærekraftsbegrepet og de tre dimensjonene *(prioritet: PERFEKT — ⭐⭐⭐, bærebjelken)*

#### Kapittel 1.1: Bærekraftig utvikling — begrepet og Brundtland-tradisjonen
**id:** `nih-spm103-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-0-3`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva bærekraft/bærekraftig utvikling er (Brundtland: dekke dagens behov uten
  å svekke framtidas), historiske/etiske/organisatoriske syn, og hvorfor idretten har et
  samfunns- og miljøansvar — fundamentet under nesten hver eksamensdel.
- **Eksamensbelegg:** Begge/alle faser, ⭐⭐⭐ (del av dimensjonsscoren ~9). Definisjonen kreves
  i alle dimensjons- og prosessoppgaver. Sjangre: DIM, PROS. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (drøftingsmalen). Prosa-kryssreferanse: idrettens
  samfunnsrolle beslektet med IS205 (uten lenke). `collapsible` **Begrep↔forfatter-lager:**
  bærekraftig utvikling — Hanstad, Sandvik & Strittmatter (2021, kap. 1) `(verifiser)`;
  Brundtland-tradisjonen.
- **Begrepskontrakt (flashcard-kilde):** **bærekraft / bærekraftig utvikling** (dekke dagens
  behov uten å svekke framtidige generasjoners mulighet — Brundtland); **de tre dimensjonene**
  (sosial, økonomisk, klima/miljø — introduseres her, utdypes i 1.2–1.3); **historisk/etisk/
  organisatorisk syn** på bærekraft (ulike tilnærminger — Hanstad m.fl. 2021, kap. 1);
  **idrettens samfunns- og miljøansvar**.
- **Drøftingsakser:** ulike tilnærminger til bærekraftsbegrepet mot hverandre; hvorfor
  definisjonen skal være presis men kort (#2 — ikke sluke plassen); om idretten *bør*
  prioritere alle tre dimensjonene (analysen §3: begge standpunkt kan gi A hvis argumentet
  holder).
- **Case-forslag:** et fleridrettslag som skal forklare hva «bærekraft» betyr for nettopp dem
  (gjennomgangscase 1, føres videre i Del 1–3).
- **Typiske feil:** #9 (definisjon mangler/upresis), #1 (gjengivelse uten drøfting), #4
  (manglende sidetall).
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 1.2: Den sosiale og den økonomiske dimensjonen i idretten
**id:** `nih-spm103-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-1-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva den **sosiale** dimensjonen (inkludering, folkehelse, frivillighet,
  sosialt entreprenørskap) og den **økonomiske** dimensjonen (drift, sponsing, kostnad) rommer
  i idretten — positiv OG negativ påvirkning i hver, med navngitte eksempler.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (dimensjonsscore ~9). Kreves i DIM-oppgaver; V2024 O1
  (dimensjoner + to modeller). Sjanger: DIM. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. Prosa-kryssreferanse: sosial inkludering/samskaping
  beslektet med SPM102s pensumbredde-del (uten lenke). `collapsible` **Begrep↔forfatter-lager:**
  sosial dimensjon — Vannebo & Tjønndal (2022, sosialt entreprenørskap/BUA); økonomisk
  dimensjon — Hanstad m.fl. (2021, kap. 2–5) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **sosial bærekraft** (inkludering, folkehelse,
  frivillighet, tilhørighet); **sosialt entreprenørskap / samskaping** (Vannebo & Tjønndal,
  2022 — BUA-eksempelet); **økonomisk bærekraft** (bærekraftig drift, sponsing, kostnad, ikke
  bare vekst); **positiv vs. negativ påvirkning** (idretten leverer *og* belaster i hver
  dimensjon).
- **Drøftingsakser:** økonomisk vekst vs. bærekraftig drift; når sponsing støtter og når den
  undergraver bærekraft (bro til grønnvasking, Del 4); sosial inkludering som mål vs. reell
  praksis; positiv MOT negativ side i hver dimensjon (#10).
- **Case-forslag:** fleridrettslaget (case 1): drøft sosiale og økonomiske styrker OG
  svakheter ved lagets bærekraftsarbeid.
- **Typiske feil:** #10 (bare positive eller bare negative sider), #1 (oppramsing), #5
  (generisk uten navngitt ledd).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.3: Klima- og miljødimensjonen og hvordan dimensjonene henger sammen
**id:** `nih-spm103-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-1-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva **klima/miljø**-dimensjonen rommer (utslipp, anlegg, reising) og —
  avgjørende for A — hvordan de tre dimensjonene er innvevd i hverandre (den nestede logikken
  som bryllupskakemodellen formaliserer i Del 2). Klimadimensjonen utdypes fullt i Del 5.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (dimensjonsscore ~9). «Se dimensjonene i sammenheng»
  er A-kriterium. Sjanger: DIM. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Begrep↔forfatter-lager:** klima/miljø-
  dimensjon — Hanstad m.fl. (2021) `(verifiser)`; sammenhengen mellom dimensjonene (forvarsel
  om bryllupskakemodellen, 2.1).
- **Begrepskontrakt (flashcard-kilde):** **klima-/miljødimensjon** (utslipp, anleggsbruk,
  reising, materialbruk); **innvevde dimensjoner** (dimensjonene henger sammen — et grep i én
  påvirker de andre); **helhetsforståelse** (A-kriterium: vis sammenhengen, ikke tre isolerte
  lister); forvarsel: den **nestede** strukturen (miljø som fundament) formaliseres i
  bryllupskakemodellen (kap. 2.1).
- **Drøftingsakser:** kan idretten levere sosialt/økonomisk uten å belaste miljøet? (målkonflikt-
  forvarsel, Del 6); hvorfor en ren oppramsing av tre dimensjoner uten sammenheng plasseres
  lavt (#1, sensorkrav 5).
- **Case-forslag:** fleridrettslaget (case 1): vis hvordan et miljøtiltak (f.eks. kutte
  bilkjøring til kamp) også har sosiale og økonomiske sider.
- **Typiske feil:** #1 (tre isolerte lister uten sammenheng), #10 (ensidig bilde), #4 (sidetall).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.4: Dimensjonsdrøfting med modell — gjennomgangscase (DIM)
**id:** `nih-spm103-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-1-3`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Å kjøre en hel dimensjonsdrøfting (DIM) gjennom firetrinnsmalen med minst
  én — mot V2024 to — navngitte modeller: definer bærekraft + de tre dimensjonene, forklar en
  modell, anvend på et navngitt idrettsledd, drøft positiv/negativ påvirkning i hver dimensjon
  og vis sammenhengen. Broen til modellbanken (Del 2).
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (den mest sentrale oppgavetypen, analysen §3 Type A).
  V2024 O1 krever minst to modeller. Sjanger: DIM. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3, 0.2. NB: full modellforklaring ligger i Del 2 —
  dette kapitlet bruker bryllupskakemodellen som *smakebit* og henviser eksplisitt framover
  til [kap. 2.1](/bok/nih-spm103/nih-spm103-2-1). `collapsible` **Begrep↔forfatter-lager:**
  dimensjonsdrøftingens fire trinn; bryllupskakemodellen som forventet inngang.
- **Begrepskontrakt (flashcard-kilde):** **dimensjonsdrøfting** (DIM-sjangerens indre logikk);
  **modell som obligatorisk komponent** (#2); **syntese** (hvordan dimensjonene veves sammen);
  gjentar de tre dimensjonene som flashcard-repetisjon (merket som repetisjon).
- **Drøftingsakser:** hvor mye plass til redegjørelse vs. drøfting; hvordan velge modell som
  faktisk *biter* på oppgaven; standpunkt om idretten må prioritere alle tre.
- **Case-forslag:** et navngitt (fiktivt) særforbund (case 2): full DIM-drøfting.
- **Typiske feil:** #2 (ingen modell), #3 (modell nevnt ikke brukt), #1 (oppramsing), #10
  (ensidig).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (`nih-spm103-1-prove`, chapterNumber 1.P): 1.A bærekrafts-
begrepet + de tre dimensjonene (BEGR/DIM-drill) · 1.B sosial vs. økonomisk dimensjon,
positiv/negativ (kortdrøfting) · 1.C klima-dimensjon + sammenheng (kortdrøfting) · 1.D full
dimensjonsdrøfting med modell på eksamensnivå (DIM, nyskrevet case).

### Del 2 — Modellbanken: teoretiske innganger *(prioritet: PERFEKT — ⭐⭐⭐, karakterskilleren)*

#### Kapittel 2.1: Bryllupskakemodellen og planetens tålegrense
**id:** `nih-spm103-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-1-3`

- **Kapitteltype:** temakapittel / modellmodul (perfekt).
- **Description:** Fagets signaturmodell: **bryllupskakemodellen** (SDG-ene nestet: biosfære/
  miljø som fundament → samfunn → økonomi) koblet til **planetens/klodens tålegrense** som
  ytre ramme — den forventede teoretiske inngangen i dimensjons- og klimaoppgaver.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (score ~7 eksplisitt + implisitt i alle
  dimensjonsoppgaver). «Å beherske den er nesten en garantert delkarakter» (analysen §2).
  Sjanger: DIM, KLIMA. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3. `collapsible` **Begrep↔forfatter-lager:**
  bryllupskakemodellen + planetens tålegrense — Hanstad m.fl. (2021) `(verifiser)`; kobling til
  FNs SDG-struktur.
- **Begrepskontrakt (flashcard-kilde):** **bryllupskakemodellen** (nestet SDG-struktur: biosfære/
  miljø som fundament → samfunn → økonomi — dimensjonene er ikke likestilte, men innvevd);
  **planetens/klodens tålegrense** (de globale grensene som ytre ramme for all utvikling);
  **nestet vs. søyle-modell** (hvorfor den nestede logikken skiller seg fra tre likestilte
  søyler). `(verifiser)`: modellens presise navngiving mot pensumboka.
- **Drøftingsakser:** bryllupskake (nestet) vs. tre likestilte søyler — hva innebærer forskjellen
  for prioritering; hva tålegrensen betyr for idrettens vekst (bro til Del 5); modellen brukt
  *aktivt* (koble hvert idrettstiltak til et modell-lag) vs. bare tegnet/nevnt (#3).
- **Case-forslag:** bruk bryllupskakemodellen til å analysere fleridrettslagets (case 1)
  bærekraftsarbeid: hvilket lag i modellen svikter?
- **Typiske feil:** #3 (modell nevnt men ikke forklart/brukt), #9 (tålegrense udefinert), #1
  (oppramsing).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 2.2: Interessentteori og endringsagenter
**id:** `nih-spm103-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-2-1`

- **Kapitteltype:** temakapittel / modellmodul (perfekt).
- **Description:** **Interessentteori** (hvilke aktører kjernen påvirker og påvirkes av; hvem
  må med for reell endring) og **endringsagent** (utøvere/aktører som pådrivere) — modellen bak
  prosess- og strategioppgavene.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (interessentscore ~6; endringsagent ~1, casebundet).
  Sjanger: INT, PROS, STRAT. Prioritet: perfekt (som modell), men se kort-svar-regelen.
- **Forkunnskaper/kryssbok:** kap. 2.1, 1.1. Prosa-kryssreferanse: interessent-/endringsledelse
  beslektet med SPM102 (uten lenke). `collapsible` **Begrep↔forfatter-lager:** interessentteori;
  endringsagent — Hanstad m.fl. (2021) `(verifiser)`; Thorsby-casen som eksempel.
- **Begrepskontrakt (flashcard-kilde):** **interessent (stakeholder)** (aktør kjernen påvirker
  og påvirkes av); **interessentteori** (samarbeid og involvering som premiss for at
  bærekraftsproblemer ikke løser seg selv); **endringsagent** (aktør — f.eks. en utøver — som
  driver endring; Thorsby-casen); **involvering «fra ord til handling»**; **prioritering** (velg
  de viktigste aktørene og begrunn — ikke en full liste).
- **Drøftingsakser:** hvilke interessenter er viktigst for et gitt tiltak, og hvorfor akkurat
  disse; samarbeid vs. konflikt mellom interessenter; utøver som endringsagent — hvem andre kan
  ha rollen. **NB kort-svar-regelen (#8):** der oppgaven ber om «2–3 setninger» om et begrep
  (f.eks. definer endringsagent), gir en lang utlegning grunnlag for trekk — bygg dette inn.
- **Case-forslag:** særforbundet (case 2): hvilke interessenter må med for at en
  bærekraftsstrategi skal gå fra ord til handling?
- **Typiske feil:** #8 (for langt svar der det bes om kort), #9 (interessent udefinert), #1
  (lister aktører uten å prioritere/begrunne).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 2.3: Økologisk modernisering og sirkulær økonomi
**id:** `nih-spm103-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-2-1`

- **Kapitteltype:** temakapittel / modellmodul (kunne → perfekt som ekstra modell).
- **Description:** To differensierende teoretiske innganger: **økologisk modernisering** (vekst
  og miljøhensyn kan forenes gjennom teknologi/innovasjon) og **sirkulær økonomi** (redusere,
  gjenbruke, resirkulere — særlig relevant for arrangement) — det andre modellvalget når V2024
  krever minst to.
- **Eksamensbelegg:** Fase 2–3, ⭐⭐ (økologisk modernisering ~2; sirkulær økonomi ~3, særlig
  arrangement). Differensierer A/B. Sjanger: DIM, ARR, STRAT. Prioritet: kunne (perfekt som
  «modell nummer to»).
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Begrep↔forfatter-lager:** økologisk
  modernisering; sirkulær økonomi — Hanstad m.fl. (2021), Jones (2017, arrangement)
  `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **økologisk modernisering** (miljøproblemer løses
  gjennom innovasjon/effektivisering, ikke bare mindre aktivitet); **sirkulær økonomi**
  (materialkretsløp: redusere → gjenbruke → resirkulere, mot lineær «bruk og kast»); **kritikk
  av økologisk modernisering** (kan legitimere fortsatt vekst — bro til grønnvasking, Del 4).
- **Drøftingsakser:** økologisk modernisering som løsning vs. grønnvasking-fare; sirkulær
  økonomi anvendt på et arrangement (materialbruk, gjenbruk av anlegg); når er teknologi-optimisme
  berettiget.
- **Case-forslag:** internasjonalt arrangement (case 3): bruk sirkulær økonomi på
  arrangementets materialbruk og anlegg.
- **Typiske feil:** #3 (modell nevnt ikke forklart), #2 (bare bryllupskake, ingen andre modell
  når to kreves), #4 (sidetall).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.4: Modellvalg i praksis — hvilken modell biter på oppgaven (drill)
**id:** `nih-spm103-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm103-2-3`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Å velge og *forklare* riktig(e) modell(er) for en gitt oppgave — driller
  refleksen som skiller god fra dårlig: bryllupskake/tålegrense for dimensjoner og klima,
  interessentteori for prosess/endring, sirkulær økonomi for arrangement, økologisk
  modernisering som drøftende motstemme; og hvordan bruke to modeller når V2024 krever det.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (teoretisk-modell-refleksen, analysen §7 pkt. 7).
  «Skillet god/dårlig er om kandidaten faktisk finner og bruker en modell.» Sjanger: alle.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.3, 1.4. `collapsible` **Begrep↔forfatter-lager:**
  modell↔oppgavetype-matrisen (hvilken modell til hvilken sjanger).
- **Begrepskontrakt (flashcard-kilde):** **modell↔sjanger-matrise** (DIM→bryllupskake/tålegrense/
  økologisk modernisering; KLIMA→tålegrense; PROS/INT/STRAT→interessentteori; ARR→sirkulær
  økonomi); **å forklare vs. å nevne** en modell; **to modeller i én drøfting** (hvordan la dem
  belyse hverandre, ikke stå ved siden av hverandre).
- **Drøftingsakser:** når to modeller supplerer og når de konkurrerer; hvordan unngå at
  modell nr. 2 blir pynt; velg-og-begrunn-modell som eget delspørsmål.
- **Case-forslag:** gitt tre korte oppgavetekster — velg og begrunn modell(er) for hver.
- **Typiske feil:** #2 (ingen modell / bare én når to kreves), #3 (nevnt ikke forklart), #1
  (beskriver modellen i stedet for å bruke den).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 2:** 4 prøver (`nih-spm103-2-prove`, chapterNumber 2.P): 2.A bryllupskake +
tålegrense (BEGR/definer + forklar) · 2.B interessentteori + endringsagent (INT, m/kort-svar-
drill) · 2.C økologisk modernisering + sirkulær økonomi (kortdrøfting) · 2.D velg-og-forklar
modell(er) på nyskrevet oppgave (eksamensnivå, minst to modeller).

### Del 3 — Bærekraftsprosess og implementering *(prioritet: PERFEKT — ⭐⭐⭐, grunnpilar)*

#### Kapittel 3.1: Bærekraftsprosessen — faser fra vedtak til handling
**id:** `nih-spm103-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-2-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Fasene i en bærekraftsprosess i en konkret organisasjon (fra vedtak til
  handling — pensumbokas kap. 6 er ankeret), og muligheter/utfordringer ved å iverksette
  tiltak.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (prosessscore ~8). Kjernen i PROS-oppgaven. Sjanger:
  PROS. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (bærekraftsbegrepet), 2.2 (interessentteori). Prosa-
  kryssreferanse: implementering/endringsledelse beslektet med SPM102 (uten lenke).
  `collapsible` **Begrep↔forfatter-lager:** bærekraftsprosess/faser — Hanstad m.fl. (2021, kap.
  6) `(verifiser)`; Hanstad & Strittmatter (2022, implementering).
- **Begrepskontrakt (flashcard-kilde):** **bærekraftsprosess** (den organiserte veien fra
  vedtak til handling); **fasene** (vedtak → forankring → tiltak → oppfølging `(verifiser
  presis faseinndeling)`); **muligheter og utfordringer/barrierer** ved iverksetting;
  **implementering** (Hanstad & Strittmatter, 2022 — «lang vei fra vedtak til implementering»).
- **Drøftingsakser:** hvorfor tiltak stopper mellom vedtak og handling; muligheter vs. barrierer
  i en gitt organisasjon; prosess (drøft forløpet) vs. oppramsing av tiltak (sensor trekker for
  liste, ikke drøfting).
- **Case-forslag:** fleridrettslaget (case 1): sett opp fasene i lagets bærekraftsprosess og
  drøft hvor det er mest sannsynlig å stoppe opp.
- **Typiske feil:** #1 (oppramser tiltak i stedet for å drøfte prosessen), #5 (generisk uten
  navngitt ledd), #2 (ingen modell — koble til interessentteori).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.2: Symbolsk implementering og legitimeringsprosesser (grønnvasking innenfra)
**id:** `nih-spm103-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-3-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Faren for **symbolsk/legitimerende implementering** — at tiltak vedtas for å
  se bærekraftige ut uten reell endring («grønnvasking innenfra») — og hvordan skille reell fra
  symbolsk bærekraft.
- **Eksamensbelegg:** Fase 2–3, ⭐⭐⭐ (del av prosess-/implementeringsscoren). Løftes eksplisitt
  i sensorveiledningene som A-signal. Sjanger: PROS, STRAT. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Begrep↔forfatter-lager:** symbolsk
  implementering / legitimeringsprosesser — Hanstad & Strittmatter (2022) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **symbolsk implementering** (tiltak vedtatt for
  legitimitet, ikke reell effekt); **legitimeringsprosess** (organisasjonen fremstår
  bærekraftig utad); **reell vs. symbolsk bærekraft**; kobling til **grønnvasking** (Del 4 —
  samme fenomen utad).
- **Drøftingsakser:** hvordan gjenkjenne symbolsk vs. reell implementering; når er «lave»
  ambisjoner ærlige og når er de grønnvasking; hvordan interessentinvolvering kan motvirke
  symbolsk implementering.
- **Case-forslag:** særforbundet (case 2): drøft om en gitt bærekraftserklæring er reell eller
  symbolsk.
- **Typiske feil:** #1 (beskriver uten å drøfte), #3 (modell nevnt ikke brukt), #4 (sidetall).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 3.3: Dørfeier vs. miljømessig påvirker/pådriver (PROS)
**id:** `nih-spm103-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-3-2`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Det faste begrepsparet fra pensumbokas kap. 3: **dørfeier** (rydder eget hus /
  minimumsnivå) vs. **miljømessig påvirker/pådriver** (aktiv endringskraft utad) — definer begge
  og ta et begrunnet standpunkt kalibrert til organisasjonens størrelse og profesjonaliseringsgrad.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (dørfeier/pådriver-score ~6, i seks sett). Kandidaten
  MÅ definere begge og ta standpunkt. Sjanger: PROS. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1, 3.2. `collapsible` **Begrep↔forfatter-lager:** dørfeier/
  pådriver — Hanstad m.fl. (2021, kap. 3) `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **dørfeier** (organisasjonen rydder eget hus —
  minimumsnivå/ambisjon); **miljømessig påvirker/pådriver** (aktiv endringskraft utad — høyt
  ambisjonsnivå); **ambisjonsnivå kalibrert til organisasjonsnivå** (mer kan kreves av store,
  profesjonaliserte ledd); **begrunnet standpunkt** (kvaliteten på begrunnelsen premieres).
- **Drøftingsakser:** hvor mye kan kreves av et lite lag vs. et stort særforbund; er dørfeier
  «nok»; når blir dørfeier-nivået en unnskyldning (bro til symbolsk implementering).
- **Case-forslag:** samme tiltak vurdert for case 1 (lite lag) og case 2 (særforbund) — ulik
  konklusjon om ambisjonsnivå, begrunn.
- **Typiske feil:** #9 (definerer ikke begge begrepene), #1 (tar standpunkt uten å begrunne),
  #5 (ikke kalibrert til organisasjonsnivå).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 3:** 4 prøver (`nih-spm103-3-prove`, chapterNumber 3.P): 3.A bærekraftsprosess/
faser (PROS-drill) · 3.B symbolsk vs. reell implementering (kortdrøfting) · 3.C dørfeier vs.
pådriver — definer begge + standpunkt (PROS) · 3.D full bærekraftsprosess på eksamensnivå
(nyskrevet organisasjonscase).

### Del 4 — Idrettsarrangement, grønnvasking og sportsvasking *(prioritet: PERFEKT — ⭐⭐⭐, grunnpilar)*

#### Kapittel 4.1: Idrettsarrangement og bærekraft (nasjonalt og internasjonalt)
**id:** `nih-spm103-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-2-3`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hvorfor og hvordan en arrangør kan jobbe med bærekraft i de tre dimensjonene
  ved et konkret arrangement (OL/VM; anleggsutbygging, reising; IOCs strategi), med sirkulær
  økonomi eller interessentteori som inngang.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (arrangementsscore ~8). Sjanger: ARR. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2–1.3 (dimensjonene), 2.3 (sirkulær økonomi). `collapsible`
  **Begrep↔forfatter-lager:** arrangement + bærekraft — Jones (2017, *Sustainable Event
  Management*); Müller, Wolfe & Gaffney (2021, OLs bærekraft); Gammelsæter & Loland (2022,
  eliteidrettens miljøavtrykk).
- **Begrepskontrakt (flashcard-kilde):** **bærekraftig arrangement** (tre dimensjoner anvendt på
  et event — Jones, 2017); **anleggs- og reisebelastning** (arrangementets avtrykk); **IOCs/
  olympiske bærekraftstrategi**; **OLs bærekraft kvantifisert** (Müller m.fl., 2021 — OL blir
  mindre bærekraftige over tid); **eliteidrettens miljøkritikk** (Gammelsæter & Loland, 2022,
  «Code red»).
- **Drøftingsakser:** store arrangement som drivkraft for bredde vs. miljøbelastning; midlertidige
  vs. permanente anlegg; internasjonal konkurranse forutsetter reising (dilemma, bro til Del 5);
  positiv OG negativ side i hver dimensjon (#10).
- **Case-forslag:** internasjonalt arrangement (case 3): drøft bærekraft i de tre dimensjonene
  med Müller m.fl. og sirkulær økonomi.
- **Typiske feil:** #10 (bare positive/negative sider), #2 (ingen modell), #5 (generisk uten
  navngitt arrangement).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.2: Grønnvasking og sportsvasking
**id:** `nih-spm103-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-4-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** **Grønnvasking** (fremstå mer miljøvennlig enn man er) og **sportsvasking**
  (bruke idrett for å pynte på et omdømme) — definisjon av begge kreves, med det faste
  eksempelrepertoaret (Qatar-VM, Beijing-OL) og koblingen til markedsføring.
- **Eksamensbelegg:** Fase 1 og 3, ⭐⭐⭐ (grønn-/sportsvasking-score ~4–5). Definisjon av begge
  begreper kreves eksplisitt. Sjanger: ARR. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1, 2.3 (økologisk modernisering-kritikken). `collapsible`
  **Begrep↔forfatter-lager:** grønnvasking — Hanstad m.fl. (2021, s. 25 og 119) `(verifiser)`,
  Nygaard (2019, *Grønn markedsføringsledelse*); sportsvasking (Qatar, Beijing).
- **Begrepskontrakt (flashcard-kilde):** **grønnvasking** (framstille noe som mer miljøvennlig/
  bærekraftig enn det er); **sportsvasking** (bruke idrett/arrangement til å bedre et omdømme —
  Qatar-VM, Beijing-OL); **grønn markedsføring uten grønnvasking** (Nygaard, 2019); **hvorfor
  aktuelt** (økt bærekraftspress → økt fristelse til å pynte).
- **Drøftingsakser:** hvordan markedsføre bærekraft *uten* å bli anklaget for grønnvasking;
  grensen mellom ambisjon og grønnvasking; sportsvasking — hvem tjener på det og hvem betaler.
- **Case-forslag:** internasjonalt arrangement (case 3) eller en sponsor: drøft om markedsføringen
  er reell eller grønnvasking.
- **Typiske feil:** #9 (definerer ikke begge begrepene), #1 (lister eksempler uten å drøfte),
  #3 (modell nevnt ikke brukt).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.3: Arrangements-/vaskingsdrøfting med modell — gjennomgangscase (ARR)
**id:** `nih-spm103-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm103-4-2`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Å kjøre en hel ARR-oppgave gjennom firetrinnsmalen: definer, forankre, velg
  modell (sirkulær økonomi/interessentteori), anvend på et navngitt arrangement, drøft
  bærekraft i de tre dimensjonene + grønnvasking-faren, ta standpunkt.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (ARR er en fast grunnpilar). Sjanger: ARR. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1, 4.2, 2.3, 2.4. `collapsible` **Begrep↔forfatter-lager:**
  ARR-sjangerens firetrinnsdisposisjon; modellvalg for arrangement.
- **Begrepskontrakt (flashcard-kilde):** **ARR-disposisjon** (arrangementsdrøftingens indre
  logikk); repetisjon av grønnvasking/sportsvasking + sirkulær økonomi (merket repetisjon).
- **Drøftingsakser:** hvor mye redegjørelse vs. drøfting; hvordan koble grønnvasking til den
  økonomiske dimensjonen; standpunkt om et arrangement er bærekraftig «nok».
- **Case-forslag:** nyskrevet internasjonalt mesterskap: full ARR-drøfting.
- **Typiske feil:** #2 (ingen modell), #10 (ensidig), #4 (sidetall).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 4:** 4 prøver (`nih-spm103-4-prove`, chapterNumber 4.P): 4.A arrangement +
tre dimensjoner (ARR-drill) · 4.B grønnvasking vs. sportsvasking — definer begge (BEGR) · 4.C
markedsføre uten grønnvasking (kortdrøfting) · 4.D full arrangementsdrøfting med modell på
eksamensnivå (ARR, nyskrevet arrangementscase).

### Del 5 — Klima, miljø og planetens tålegrense *(prioritet: PERFEKT — ⭐⭐⭐)*

#### Kapittel 5.1: Klimamål, tålegrense og idrettens miljøavtrykk
**id:** `nih-spm103-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** De globale og norske klimamålene (1,5/2 °C, Parisavtalen, Meld. St. 40),
  planetens tålegrense som inngang, og idrettens negative miljøavtrykk konkret (flyreiser,
  arrangementslogistikk, anlegg, gummigranulat/kunstgress).
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (klimascore ~5). Fast eksempelrepertoar sensor forventer.
  Sjanger: KLIMA. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1 (tålegrense), 1.3 (klimadimensjonen). `collapsible`
  **Begrep↔forfatter-lager:** klimamål/tålegrense — Hanstad m.fl. (2021), Meld. St. 40 (2020–
  2021); idrettens avtrykk — Gammelsæter & Loland (2022).
- **Begrepskontrakt (flashcard-kilde):** **globale oppvarmingsmål** (1,5/2 °C, Parisavtalen);
  **norske klimamål** (Meld. St. 40, 2020–2021); **klodens tålegrense** (grensen for hva
  planeten tåler); **idrettens miljøavtrykk** (flyreiser, logistikk, anlegg, gummigranulat/
  kunstgress); **grønn samfunnstransformasjon** (idrettens rolle).
- **Drøftingsakser:** elite- vs. breddeidrettens ulike avtrykk; anlegg gir bredde men belaster
  miljøet; hvor mye kan idretten kutte uten å miste sin funksjon.
- **Case-forslag:** et særforbund (case 2): kartlegg de tre største kildene til klimaavtrykk og
  drøft tiltak mot tålegrensen.
- **Typiske feil:** #9 (tålegrense/klimamål udefinert), #2 (ingen modell — tålegrense er
  inngangen), #10 (bare negativt bilde uten løsning).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 5.2: Klimadilemmaer og klimadrøfting med modell (KLIMA)
**id:** `nih-spm103-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm103-5-1`

- **Kapitteltype:** temakapittel / drill (perfekt).
- **Description:** Å drøfte idrettens klimadilemmaer (internasjonal konkurranse forutsetter
  reising; vekst vs. reduksjon) og kjøre en hel KLIMA-oppgave gjennom firetrinnsmalen med
  planetens tålegrense som inngang.
- **Eksamensbelegg:** Alle faser, ⭐⭐⭐ (KLIMA er grunnpilar). Sjanger: KLIMA. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1, 2.1. `collapsible` **Begrep↔forfatter-lager:**
  klimadilemma; KLIMA-disposisjonen.
- **Begrepskontrakt (flashcard-kilde):** **klimadilemma** (reising for konkurranse mot
  utslippskutt; vekst mot reduksjon); **KLIMA-disposisjon** (firetrinnsmalen anvendt på
  klimaoppgaven); repetisjon av tålegrense + avtrykk (merket repetisjon).
- **Drøftingsakser:** kan idretten være internasjonal og klimavennlig samtidig; hvem har ansvaret
  (utøver, forbund, arrangør, stat); standpunkt om idrettens rolle i grønn transformasjon.
- **Case-forslag:** nyskrevet klimaoppgave: hvordan kan norsk idrett bidra til at Norge når
  klimamålene?
- **Typiske feil:** #1 (lister avtrykk uten å drøfte dilemma), #2 (ingen modell), #4 (sidetall).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 5:** 4 prøver (`nih-spm103-5-prove`, chapterNumber 5.P): 5.A klimamål +
tålegrense (BEGR/definer) · 5.B idrettens avtrykk — fly/anlegg/gummigranulat (KLIMA-drill) ·
5.C klimadilemma (kortdrøfting) · 5.D full klimadrøfting med modell på eksamensnivå (KLIMA,
nyskrevet case).

### Del 6 — SDG-ene, NIFs strategi og målkonflikter *(prioritet: KUNNE — ⭐⭐ stigende, 2324-dreiningen)*

#### Kapittel 6.1: FNs 17 bærekraftsmål (SDG) og idretten
**id:** `nih-spm103-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-2-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** FNs 17 bærekraftsmål (SDG): forklare dem, knytte dem til idrett, og
  prioritere/velge ut de mest relevante (velg-fem-oppgaven), koblet til bryllupskakemodellens
  nestede SDG-struktur.
- **Eksamensbelegg:** Fase 3, ⭐⭐ (SDG eksplisitt ~2 + bakteppe i alle dimensjonsoppgaver).
  H2023(2324) D1b: velg fem av 17 og begrunn. Sjanger: DIM, STRAT. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (bryllupskakemodellen). Prosa-kryssreferanse: SDG-ene i
  norsk politikk beslektet med IS205/IS225 (uten lenke). `collapsible` **Begrep↔forfatter-lager:**
  FNs 17 SDG — Meld. St. 40 (2020–2021); kobling til bryllupskakemodellen.
- **Begrepskontrakt (flashcard-kilde):** **FNs 17 bærekraftsmål (SDG)** (global handlingsplan);
  **nestet SDG-struktur** (bryllupskakemodellen: biosfære-mål som fundament); **prioritering av
  mål** (velge og begrunne de mest relevante for idrett — ikke ramse opp alle 17); **Meld. St.
  40** (Norges handlingsplan).
- **Drøftingsakser:** hvilke SDG-er er mest relevante for norsk idrett, og hvorfor akkurat disse;
  målkonflikt mellom SDG-er (bro til 6.2); prioritering vs. oppramsing (#1).
- **Case-forslag:** velg fem SDG-er for et særforbund (case 2) og begrunn utvalget.
- **Typiske feil:** #1 (ramser opp mål uten å prioritere/begrunne), #5 (generisk uten idretts-
  kobling), #4 (sidetall).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 6.2: NIFs bærekraftstrategi, målkonflikter og statlig styring (STRAT)
**id:** `nih-spm103-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-6-1`

- **Kapitteltype:** temakapittel (kunne → perfekt for STRAT-sjangeren).
- **Description:** Den nyeste 2324-oppgavetypen: vurder NIFs faktiske bærekraftstrategi ut fra en
  modell, drøft **målkonflikter** som oppstår når strategien skal virke i en konkret idrettsgren,
  og anbefal interessentinvolvering — pluss statlig styring vs. idrettens autonomi (spillemidler,
  Meld. St. 40).
- **Eksamensbelegg:** Fase 3, ⭐⭐ (stigende — NIF-strategi/målkonflikt nytt i V2024; statlig
  styring ~1, perifert). Den mest krevende og mest anvendte oppgavetypen; signaliserer fagets
  retning. Sjanger: STRAT. Prioritet: kunne (perfekt for STRAT).
- **Forkunnskaper/kryssbok:** kap. 6.1, 2.2 (interessentteori), 3.2 (implementering). Prosa-
  kryssreferanse: idrettens autonomi vs. statlig styring beslektet med IS205/IS225 og SPM102
  (uten lenke). `collapsible` **Begrep↔forfatter-lager:** NIFs bærekraftstrategi `(verifiser
  gjeldende strategi)`; målkonflikt; statlig styring — Meld. St. 40 (2020–2021).
- **Begrepskontrakt (flashcard-kilde):** **NIFs bærekraftstrategi** (idrettens egne
  strategimål — vurderes, ikke bare gjengis; `(verifiser)` mot gjeldende strategi);
  **målkonflikt** (når to mål trekker i hver sin retning — f.eks. vekst vs. utslippskutt);
  **idrettens autonomi vs. statlig styring** (staten påvirker via føringer/spillemidler —
  Meld. St. 40); **fra ord til handling** (interessentinvolvering).
- **Drøftingsakser:** hvor NIFs strategimål kolliderer i praksis; hvor mye kan/bør staten styre
  idrettens bærekraftsarbeid; hvordan interessentinvolvering løser målkonflikter.
- **Case-forslag:** anvend NIFs strategi på en konkret idrettsgren (case 2/3) og drøft en
  målkonflikt som oppstår.
- **Typiske feil:** #1 (gjengir strategien i stedet for å vurdere/drøfte), #9 (målkonflikt
  udefinert), #2 (ingen modell — økologisk modernisering/bryllupskake biter her).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver (`nih-spm103-6-prove`, chapterNumber 6.P): 6.A FNs 17 SDG +
prioritering (velg-fem, DIM/STRAT) · 6.B NIFs strategi + målkonflikt (STRAT) · 6.C statlig
styring vs. autonomi (kortdrøfting) · 6.D full strategi-/målkonfliktoppgave på eksamensnivå
(STRAT, nyskrevet case med NIF-strategi).

### Del 7 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 7.1: Firetrinnsmalen i praksis — modellforankret drøfting under ordgrense
**id:** `nih-spm103-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-0-2`

- **Kapitteltype:** sjangerkapittel (perfekt, meta).
- **Description:** Å kjøre firetrinnsmalen (definer → forankre m/sidetall → navngi og forklar
  modell → anvend på navngitt case → drøft for/imot + standpunkt) helt gjennom, tilpasset dagens
  sammensatte fase-3-oppgaver (to deler vektet 2/3 + 1/3, eller to à ≥1500 ord med nummererte
  deloppgaver), med tidsbudsjett for treukersvinduet.
- **Eksamensbelegg:** Gjennomgående (alle sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.2, 0.3, 2.4. `collapsible` **Sjanger-lager:** firetrinnsmalen
  + de seks sjangrene (DIM/PROS/ARR/KLIMA/INT/STRAT) i kortform + tidsbudsjett.
- **Innhold/oppskrift:** trinn-for-trinn disponering av en drøftingsdel med modell; hvordan
  fordele ord når delene har ulik vekting (2/3 + 1/3); tidsbudsjett for treukersvinduet (les
  oppgavesett → kildejakt → kladd/disponer → skrive → referansekontroll m/sidetall →
  KI-deklarasjon). Gjennomskrevet eksempeldel med margkommentarer om hvor uttelling gis (modell
  forklart, sidetall, drøfting).
- **Sjanger/oppgavetyper:** 3–6 nyskrevne drøftingsoppgaver (DIM/PROS/ARR/KLIMA/INT/STRAT) med
  momentliste-løsning + disposisjon; minst én med to modeller (V2024-krav) og minst én med
  ulik-vektede deler.
- **Typiske feil:** #2 (ingen/for få modeller), #4 (sidetall), #1 (oppramsing), #11 (ordgrense).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 7.2: Feilvaksinen, APA 7-drill og selvretting
**id:** `nih-spm103-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm103-7-1`

- **Kapitteltype:** sjangerkapittel / feilvaksine (perfekt, meta).
- **Description:** De tolv dokumenterte feilene (#1–#12) med før/etter-omskrivinger (oppramsing →
  drøfting; modelløst → modellforankret; generisk → navngitt case; referanse uten sidetall →
  korrekt APA 7), en APA-7-med-sidetall-drill, KI-deklarasjonssjekk og en binær
  selvrettingsrubrikk for drøfting.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–10). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 7.1, 0.3. `collapsible` **Feilkatalog:** #1–#12 med
  kapittelhenvisning (klikkbare lenker til kapitlene som forebygger hver).
- **Innhold/oppskrift:** hver feil (#1–#12) som varsellampe + før/etter-omskriving; **binær
  selvrettingsrubrikk** (☐ definisjoner på plass? ☐ minst én (to fra V2024) modell navngitt OG
  forklart med pensumreferanse? ☐ anvendt på navngitt idrettsledd/arrangement? ☐ både positiv
  og negativ side der bedt om? ☐ for/imot drøftet? ☐ begrunnet standpunkt? ☐ APA 7 med sidetall
  (in-text + liste)? ☐ alle deler besvart? ☐ KI deklarert?). Erfarings-bro: hvordan konvertere
  egen idrettserfaring til pensumforankret argument (illustrasjon, ikke begrunnelse alene). Vippe-
  case: minst én oppgave der to standpunkt (dørfeier/pådriver eller «prioriter alle tre»/«prioriter
  én») er fullt forsvarlige — begge lesninger skrives ut, merket «(omstridt — begge forsvarlige)».
- **Sjanger/oppgavetyper:** 3–6 «finn og fiks feilen»-oppgaver på nyskrevne besvarelses-utdrag
  (varier fasiten — aldri «alle feil»/«alle riktig») + en APA-7-opprydningsoppgave (uten sidetall
  → med sidetall).
- **Typiske feil:** metafeil — å lære feilkodene uten å endre egen praksis.
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 7.3: Modellbesvarelse I — dimensjonsdrøfting med to modeller (DIM, fase 3)
**id:** `nih-spm103-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-1-4`

- **Kapitteltype:** modellbesvarelse (perfekt, meta).
- **Description:** Nyskrevet fase-3-oppgave (V2024 O1-type): forklar de tre dimensjonene med minst
  to navngitte modeller (bryllupskake + økologisk modernisering) anvendt på et navngitt
  organisasjonsledd, drøft positiv/negativ påvirkning og ta standpunkt om dørfeier/pådriver.
  A-besvarelse + kommentert C + autentisk B/E, med sensorblikk.
- **Eksamensbelegg:** Fase 3, DIM (V2024 O1-type). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.4, 2.1, 2.3, 3.3. `collapsible` A/C/B-besvarelser +
  `tip` Sensorblikket. Kildenote: modellbesvarelser bygget på nivåbeskrivelser, ikke ekte A-svar.
- **Innhold:** full A-tekst med margnotater («her: begrep + forankring m/sidetall», «her: modell
  navngitt og forklart — dette løfter til A», «her: oppramsing blir drøfting»), pausepunkt-
  markører; ærlig C (gjengir dimensjonene, én modell nevnt men ikke brukt, kilder uten sidetall —
  #3, #4); autentisk B/E (god drøfting, litt rotete språk, hva som er bra nok); Sensorblikket
  (momentliste + vekting). **Konklusjonsvariasjon:** her lander A-svaret SKARPT (klart standpunkt),
  med margnotat om at forbehold er verktøy, ikke obligatorisk garnityr.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 7.4: Modellbesvarelse II — bærekraftsprosess + dørfeier/pådriver (PROS)
**id:** `nih-spm103-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-3-3`

- **Kapitteltype:** modellbesvarelse (perfekt, meta).
- **Description:** Nyskrevet PROS-oppgave: sett opp fasene i en bærekraftsprosess for et navngitt
  ledd, drøft muligheter/utfordringer (interessentteori + symbolsk implementering) og ta begrunnet
  standpunkt dørfeier vs. pådriver. A + kommentert C + sensorblikk.
- **Eksamensbelegg:** PROS (bærekraftsprosess + dørfeier/pådriver). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3, 2.2. `collapsible` A/C-besvarelser + `tip`
  Sensorblikket.
- **Innhold:** full A-tekst (definer dørfeier/pådriver — #9; interessentteori navngitt og forklart;
  standpunkt kalibrert til organisasjonsnivå), margnotater om hvor oppramsing blir drøfting; ærlig
  C (lister tiltak i stedet for å drøfte prosessen — #1; standpunkt uten begrunnelse); Sensorblikket.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 7.5: Modellbesvarelse III — arrangement + grønnvasking (ARR)
**id:** `nih-spm103-7-5` · **number:** 7.5 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm103-4-3`

- **Kapitteltype:** modellbesvarelse (perfekt, meta).
- **Description:** Nyskrevet ARR-oppgave: drøft bærekraft i de tre dimensjonene ved et navngitt
  arrangement med sirkulær økonomi som inngang, definer grønnvasking/sportsvasking og drøft
  markedsføring uten grønnvasking. A + kommentert C + autentisk B/E, med sensorblikk.
- **Eksamensbelegg:** ARR + grønnvasking. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3, 2.3. `collapsible` A/C/B-besvarelser + `tip`
  Sensorblikket.
- **Innhold:** full A-tekst (definer begge vaskingsbegreper — #9; modell forklart og brukt;
  positiv OG negativ side — #10), margnotater; ærlig C (eksempelliste uten drøfting — #1);
  autentisk B/E; Sensorblikket.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 7.6: Modellbesvarelse IV + øvingseksamen — klima/strategi (KLIMA/STRAT)
**id:** `nih-spm103-7-6` · **number:** 7.6 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm103-6-2`

- **Kapitteltype:** modellbesvarelse + øvingseksamen (perfekt, meta).
- **Description:** Nyskrevet todelt fase-3-oppgave (klimadrøfting med tålegrense + vurdering av
  NIFs strategi/målkonflikt) med A + kommentert C + bestått-på-marginen, PLUSS en komplett
  øvingseksamen (todelt sett i dagens mal med ulik vekting, full momentliste-fasit +
  A/C/E-nivåbeskrivelse, KI-deklarasjonspåminnelse, «kan deles over flere økter»-merking). Til
  sammen dekker Del 7 sjangrene DIM/PROS/ARR/KLIMA/INT/STRAT minst én gang.
- **Eksamensbelegg:** KLIMA + STRAT; øvingseksamen speiler dagens todeling. Kildenote:
  sensorlogikken bygger på rike veiledninger med A–F-kriterier (fra V2023); modellbesvarelser
  bygget på nivåbeskrivelser, ikke ekte A-svar `(verifiser)`. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 5.1, 5.2, 6.1, 6.2, 2.2. `collapsible` A/C/B-besvarelser +
  full øvingseksamen-fasit + `tip` Sensorblikket.
- **Innhold:** full A-tekst (tålegrense definert og brukt; målkonflikt definert — #9; interessent-
  involvering «fra ord til handling»), margnotater; ærlig C; bestått-på-marginen (E — dekker
  minimum, overfladisk, uklar kildebruk); komplett øvingseksamen med to deler à ulik vekting,
  momentliste-fasit, A/C/E-nivåbeskrivelse. **Kald bank:** 8–10 oppgaver med uvante
  vinklinger/kombinasjoner UTEN hint (fasit = momentliste), tydelig merket, i eksamenstrenings-
  delen. **«Hvem eier hva»-kort** (collapsible): eksempel → tenker → poeng over bokas
  gjennomgående kilder (samlet oppslag). **Kildeforbehold synlig:** arkivet har ingen
  eksempelbesvarelser; fase 3 bare observert ett studieår.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 7:** ingen egen temaprøve (Del 7 ER eksamenstreningen; øvingseksamenen i 7.6
fungerer som generalprøve). De 24 temadelprøvene (Del 1–6, se under) dekker prøvekravet.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–6 = 24 prøver)

Hver prøve speiler eksamensformatet i miniatyr (én eller to drøftingsdeler etter firetrinnsmalen
med obligatorisk modell). Omfang: 25–45 min per prøve — **kan trygt deles over flere økter, én
prøve per økt**. Prøvekapitlene er listet under hver del over (`nih-spm103-<del>-prove`,
chapterNumber `<del>.P`). Fellesmal per del: (1) en begreps-/definisjonsdrill med pensumforankring
(sidetall), (2) en kortdrøfting med disposisjonsforslag, (3) en case-/sjangeroppgave på nyskrevet
materiale med modellkrav, (4) en full drøftingsdel under tidspress à A/C/E-mal. Flervalgselementer
i prøvene har **stokket fasit** (aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer
fasiten.

Del 1 (4): 1.A–1.D · Del 2 (4): 2.A–2.D · Del 3 (4): 3.A–3.D · Del 4 (4): 4.A–4.D · Del 5 (4):
5.A–5.D · Del 6 (4): 6.A–6.D. **Sum: 24 temadelprøver** (≥4 per temadel, kravet oppfylt).

### Komplette øvingseksamener (i Del 7)

Modellbesvarelseskapitlene 7.3–7.6 leverer fire gjennomskrevne besvarelser på flere karakternivåer
(A + kommentert C + autentisk B/E-nivå), og **7.6 inneholder en komplett øvingseksamen** (todelt
sett i dagens mal med ulik vekting, nyskrevet, full momentliste-fasit + A/C/E-nivåbeskrivelse).
Alle følger dagens form (APA 7 m/sidetall, KI-deklarasjon, minst to modeller der relevant). Til
sammen dekker Del 7 sjangrene DIM, PROS, ARR, KLIMA, INT og STRAT minst én gang.

---

## Kvotesammendrag (summeringskontroll)

Per-kapittel-kvotene fra §3, summert per del og kontrollregnet. (Kvotene i §3 er de gjeldende;
denne tabellen speiler dem eksakt.)

| Del | Kapitler | Per-kapittel quiz | Per-kapittel flashcards | Quiz | Flashcards |
|---|---|---|---|---|---|
| 0 | 0.1–0.3 (3) | 14+18+16 | 10+16+16 | 48 | 42 |
| 1 | 1.1–1.4 (4) | 24+20+18+18 | 26+22+20+20 | 80 | 88 |
| 2 | 2.1–2.4 (4) | 22+20+18+22 | 24+22+20+22 | 82 | 88 |
| 3 | 3.1–3.3 (3) | 20+18+18 | 22+20+20 | 56 | 62 |
| 4 | 4.1–4.3 (3) | 22+20+22 | 22+20+22 | 64 | 64 |
| 5 | 5.1–5.2 (2) | 22+22 | 22+22 | 44 | 44 |
| 6 | 6.1–6.2 (2) | 18+18 | 20+20 | 36 | 40 |
| 7 | 7.1–7.6 (6) | 22+18+14+14+14+14 | 22+16+12+12+12+12 | 96 | 86 |
| **SUM** | **27** | | | **506** | **514** |

**Kontroll (løpende per-del-sum, kontrollregnet FØR totalen skrives):**
- **Quiz:** 48+80 = 128; +82 = 210; +56 = 266; +64 = 330; +44 = 374; +36 = 410; +96 = **506**.
- **Flashcards:** 42+88 = 130; +88 = 218; +62 = 280; +64 = 344; +44 = 388; +40 = 428; +86 = **514**.

**Endelig kontroll:** Quiz **506 ≥ 500** ✓ · Flashcards **514 ≥ 500** ✓ · 27 kapitler · 24
temadelprøver (≥4 per temadel for Del 1–6) + 4 modellbesvarelser med øvingseksamen i Del 7.
**Gate-tallet er den reelle per-kapittel-summen: 506 quiz / 514 flashcards.** Kvotegulvet
(≥500/≥500) er oppfylt.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — dagens form (treukers hjemmeeksamen, alle hjelpemidler, gradert
   A–F, sammensatte oppgaver med vekting, strykregel per del, APA 7 m/sidetall, KI-deklarasjon),
   fase-utviklingen (5000 ord → 3500 → sammensatte 2324-oppgaver), kildenoten (H2021–V2024; fase
   3 bare ett studieår; ingen eksempelbesvarelser i arkivet; emneansvar endret) (fra kap. 0.1).
2. **Firetrinnsmalen med modell** — definer → forankre m/sidetall → navngi og forklar modell →
   anvend på navngitt case → drøft for/imot + standpunkt; oppramsing→drøft-skillet (C → A/B)
   (fra kap. 0.2).
3. **Formkravene** — APA 7 m/sidetall (A/B-sperre), ordgrense per del, kjernelitteratur vs.
   Canvas, KI-deklarasjon (fra kap. 0.3).
4. **Prioriteringskartet** — temafrekvens som tre lesenivåer: *perfekt* (de tre dimensjonene +
   bryllupskake/tålegrense, bærekraftsprosess + dørfeier/pådriver, arrangement + grønnvasking,
   klima/tålegrense, modellbanken, interessentteori), *kunne* (økologisk modernisering, sirkulær
   økonomi, FNs 17 SDG, NIFs strategi + målkonflikter), *kjenne* (endringsagent, statlig styring/
   autonomi, sosialt entreprenørskap/BUA, eliteidrettens miljøkritikk).
5. **Modellguiden** — de fem teoretiske inngangene (bryllupskake/tålegrense, interessentteori,
   økologisk modernisering, sirkulær økonomi) med modell↔sjanger-matrisen (fra Del 2) og regelen
   om minst to modeller fra V2024.
6. **Begrep↔forfatter-banken** — alle kjernebegreper med navngitt avsender + sidetall (flashcard-
   speilet i prosaform): bærekraft (Brundtland; Hanstad m.fl. 2021 kap. 1), dimensjonene (kap.
   2–5), bryllupskake/tålegrense (kap. 1–2), dørfeier/pådriver (kap. 3), bærekraftsprosess (kap.
   6), grønnvasking (s. 25, 119 `(verifiser)`; Nygaard 2019), arrangement (Jones 2017; Müller
   m.fl. 2021), sosial dimensjon (Vannebo & Tjønndal 2022), eliteidrett (Gammelsæter & Loland
   2022), SDG/statlig (Meld. St. 40, 2020–2021). Sidetall `(verifiser)`.
7. **Sensorreglene** — de ti sensorkravene (§2) + A/C/E-kjennetegnene i tabellform (fra V2023s
   A–F-skala).
8. **Feilkatalogen** — de tolv feilene (#1–#12) samlet, hver med kapittelhenvisning.
9. **Studieløp** — hurtigrute (3–5 dager), fulltidsplan og deltidsrute (10–12 uker ~8 t/uke) med
   prøve-/øvingseksamen-innplassering (temadelprøver underveis, øvingseksamen i 7.6 mot slutten,
   minst én øvingsdel skrevet selv med korrekt APA 7 m/sidetall). NB: hjemmeeksamen skrives over
   tre uker — treningen bør derfor øve kildejakt og referansekontroll, ikke bare tidspress.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `nih-spm103` (mønster `COURSE_BI_OKONOMI`
   i `textbook-courses-*.ts`): id `nih-spm103`, title «SPM103 Idrett og bærekraft (NIH) —
   eksamensrettet», `level: 'Høyskole'`, alle 27 kapitler med id/number/title/description/
   estimatedMinutes/topics/competenceGoals/prerequisites fra dette skjelettet. **`number` SKAL
   være del-basert («4.2»), ALDRI lineær** — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser bruker samme form («kap. 4.2»). `sectionNames` fra §2-tabellen (obligatorisk
   — ellers viser bokforsiden «Seksjon N»). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under Norges idrettshøgskole, visningsnavn «SPM103
   Idrett og bærekraft».
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene (DIM/PROS/ARR/KLIMA/INT/STRAT),
   firetrinnsmalen med obligatorisk modell, oppramsing→drøft-skillet, formkravene (APA 7 m/
   sidetall, KI-deklarasjon), frekvenstallene og kildenoten som resten av boka refererer til.
   **Bygg 0.2 grundig — firetrinnsmalen brukes overalt.**
3. **Del 1 → Del 2** (avhengighetskjeden: bærekraftsbegrepet + dimensjonene → modellbanken; alt
   hektes på dimensjonene og modellene). **Bygg Del 2 grundig — modellrefleksen er
   karakterskilleren.**
4. **Del 3** (bærekraftsprosess bygger på interessentteori 2.2 + dimensjonene) → **Del 4**
   (arrangement bygger på dimensjonene 1.2–1.3 + sirkulær økonomi 2.3) → **Del 5** (klima bygger
   på tålegrense 2.1 + klimadimensjonen 1.3) → **Del 6** (SDG/NIF-strategi bygger på
   bryllupskake 2.1 + interessentteori 2.2 + implementering 3.2).
5. **Del 7 til slutt** — sjangerkapitler + modellbesvarelser + øvingseksamen gjenbruker HELE
   boka; bygges av én agent som leser hele skjelettet.
6. **Prøver** (`nih-spm103-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler
   finnes; prøvetitlene er gitt per del i §3 (Del 1–6; Del 0 og Del 7 har ingen egen prøve).
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering etter hvert. Kvotene fra kvotesammendraget (§4, de oppjusterte tallene) er fasit.

Per temakapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text Forkunnskaper +
collapsible Begrep↔forfatter-lager → text Temaet i landskapet (hverdagsanker først) → definition
Kjernebegreper (flashcard-kilden — toppnivå med title!) → text Posisjoner/drøftingsakser →
example Gjennomgangscase (firetrinnsmalen m/modell) → warning Typiske feil → exercise ×4–8
(INLINE i løkkene) → collapsible Pensumkart. Del 7 følger **kapittel-DNA B**. Eksamensvinkel- og
Typiske feil-blokkene fylles med belegget og feilkodene fra dette skjelettet — forfatteren skal
IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-spm103-*.json` parser med
      `json.load` (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn.
- [ ] **Metadata-konsistens:** alle 27 kapittel-id-er har eksisterende content-fil; `number`
      del-basert; prosareferanser bruker «kap. X.Y»-form med klikkbare lenker der kapitlet finnes;
      prerequisites peker bakover på eksisterende id-er; `sectionNames` satt; narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Firetrinnsmalen konsekvent:** hvert temakapittel har et gjennomgangscase som følger
      definer → forankre m/sidetall → navngi og forklar modell → anvend på navngitt case → drøft
      for/imot + standpunkt.
- [ ] **Teoretisk modell obligatorisk:** hvert DIM/ARR/KLIMA/STRAT-modellsvar navngir OG forklarer
      minst én modell (V2024-svar: minst to); en modell nevnt uten å brukes er markert som svakhet
      (#2/#3).
- [ ] **Drøfting > oppramsing:** hver modellbesvarelse markerer *hvor* oppramsing blir til
      drøfting; C-besvarelsene er ærlige C-er (oppramsing, tynn forankring, modell nevnt ikke
      brukt); minst én autentisk B/E-nivå-besvarelse finnes; minst én A-besvarelse konkluderer
      SKARPT (konklusjonsvariasjon).
- [ ] **APA 7 med sidetall synlig:** modellsvar som sikter mot A/B har korrekt APA 7 med sidetall
      (in-text + liste); egen APA-drill i 7.2; sidetall merket `(verifiser)` der de stammer fra
      veiledningens referanse, ikke pensumboka.
- [ ] **Pensumforankring EKTE:** alle definisjoner forankret i navngitt forfatter/verk (Hanstad,
      Sandvik & Strittmatter 2021; Jones 2017; Nygaard 2019; Hanstad & Strittmatter 2022; Vannebo
      & Tjønndal 2022; Gammelsæter & Loland 2022; Müller m.fl. 2021; Meld. St. 40); INGEN
      oppdiktede kilder; grep `-i verifiser` — alle markerte sidetall/detaljer fagfellesjekkes.
- [ ] **Sensorkravene synlige:** drøfting>oppramsing (#1), modell påkrevd (#2/#3), APA 7 m/sidetall
      (#4), navngitt case (#5), Canvas-supplement (#6), manglende del ⇒ F (#7), kort svar der bedt
      (#8), definisjoner (#9), begge sider (#10), ordgrense (#11), KI-deklarasjon (#12) — hver
      dekket i relevant kapittel.
- [ ] **Kvotesum:** quiz ≥506 og flashcards ≥514 fordelt per kapittel som i §3/§4; hardt minimum
      ≥500/≥500; 24 temadelprøver (4 per temadel Del 1–6) + 4 modellbesvarelser + 1 øvingseksamen;
      fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] riktig i staging, runtime
      stokker; statiske prøve-flervalg stokket manuelt).
- [ ] **Leserkrav:** Forkunnskaper-blokk med kryssreferanser (interne lenker til eksisterende
      SPM103-kapitler; NIH-klyngen — SPM102, IS205/IS225, MET200/MET402, MA460, IDR109 — omtalt i
      prosa UTEN lenke) + collapsible Begrep↔forfatter-lager først i hvert kapittel; «bør kjenne
      til»-stoff (Del 6, endringsagent, statlig styring) merket; hver oppgave sjangermerket
      (DIM/PROS/ARR/KLIMA/INT/STRAT); læringsløkke Teori→Eksempel→Oppgave inline; Del 0-pakken
      komplett (orienteringsboks, Lite tid?, kildenote, sjangerkort, deltidsrute, lese-mye-skrive-
      lite); karakter-realisme (C er god og vanlig); vippe-case + kald bank + «hvem eier hva»-kort
      i Del 7.
- [ ] **Kildenote + fase-utvikling synlig:** Del 0 (0.1) og øvingseksamenen (7.6) sier eksplisitt
      hvilke sett/veiledninger analysen bygger på (H2021–V2024), at fase 3 bare er observert ett
      studieår, at emneansvaret er endret, og at det IKKE finnes eksempelbesvarelser i arkivet —
      modellbesvarelser bygget på nivåbeskrivelser `(verifiser)`.
- [ ] **Opphavsrett:** alle oppgaver, case, øvingseksamener og modellbesvarelser er NYSKREVNE —
      ingen formuleringer fra NIH-oppgavesett eller sensorveiledninger. Pensum refereres (forfatter/
      verk/begrep), aldri sitert i lengde. Bærekraftsmodeller (bryllupskake, tålegrense, økologisk
      modernisering, sirkulær økonomi, interessentteori) er faglig allemannseie.
- [ ] **Uavhengighets-deklarasjon:** emnet registrert i `institusjoner.ts` (driver NIH-navnet i
      `hoyskole-disclaimer.tsx`); bokinnhold fremstiller seg aldri som offisielt/NIH-tilknyttet;
      frekvensanalyse alltid med kildenote + forbehold.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng). ALDRI meld ferdig uten dette.
